/* Overgang van het navy cases-blok naar het witte services-blok.
   Dezelfde motor als de hero, in omgekeerde richting: navy wordt wit.
   Het canvas schildert géén wit — het prikt per cel een gat met
   destination-out, zodat de echte witte sectie eronder zichtbaar wordt,
   inclusief kop, WILDLY AHEAD en de knop. Niet wegoptimaliseren naar een
   wit vlak; dan verdwijnt de inhoud eronder.
   CFG en MARK komen ongewijzigd uit de afgestemde versie. */
const OVERGANG_CFG = {
  cell: 12, stroke: 10, fill: 95, direction: "up",
  band: 20, speed: 16, jitter: 11, spread: 62, lead: 18,
  minScale: 60, tail: 70, variant: "flip", flipAt: 60, flipDur: 15,
  preWhite: 26, preAlpha: 60, startEarly: 0.95
};
const OVERGANG_NAVY = [16, 31, 60], OVERGANG_WIT = [248, 244, 236];
const OVERGANG_MARK_W = 80, OVERGANG_MARK_H = 66;
const OVERGANG_MARK = {
  logo: [[[0, 0], [0, 40], [32, 40]], [[80, 66], [80, 26], [48, 26]]],
  frame: [[[0, 40], [0, 0], [32, 0]], [[80, 26], [80, 66], [48, 66]]]
};
const overgangSmooth = (t) => (t <= 0 ? 0 : t >= 1 ? 1 : t * t * (3 - 2 * t));

function OvergangDissolve({ children }) {
  const scroller = React.useRef(null);
  const doek = React.useRef(null);

  React.useEffect(() => {
    const cv = doek.current, sc = scroller.current;
    if (!cv || !sc) return;
    const ctx = cv.getContext("2d");
    const reduce = window.matchMedia("(prefers-reduced-motion:reduce)").matches;
    const CFG = Object.assign({}, OVERGANG_CFG);
    let W = 0, H = 0, cols = 0, rows = 0, thresh = null, lastP = -1, leeft = true, raf = 0, rt = null;

    function build() {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      W = cv.clientWidth; H = cv.clientHeight;
      cv.width = Math.round(W * dpr); cv.height = Math.round(H * dpr);
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      /* Onder 768px zijn 12px-cellen te duur naast een schuivende sticky laag. */
      const cell = W < 768 ? 19 : CFG.cell;
      cols = Math.ceil(W / cell);
      rows = Math.ceil(H / (cell * OVERGANG_MARK_H / OVERGANG_MARK_W));
      thresh = new Float32Array(cols * rows);
      const j = CFG.jitter / 100;
      for (let y = 0; y < rows; y++) for (let x = 0; x < cols; x++) {
        const i = y * cols + x, nx = x / (cols - 1 || 1), ny = y / (rows - 1 || 1);
        let base;
        switch (CFG.direction) {
          case "down": base = ny; break;
          case "right": base = nx; break;
          case "diag": base = (nx + ny) / 2; break;
          case "radial": base = Math.min(1, Math.hypot(nx - 0.5, ny - 0.5) / 0.707); break;
          default: base = 1 - ny;
        }
        const t = base * (1 - j) + Math.random() * j;
        thresh[i] = Math.min(0.999, Math.max(0, t * (CFG.spread / 100)));
      }
      lastP = -1;
    }

    function render(p) {
      if (!W) return;
      const cw = W / cols, ch = H / rows;
      const lw = Math.max(0.5, (CFG.stroke / 100) * cw * (CFG.fill / 100));
      const band = Math.max(0.03, CFG.band / 100), span = 1 - band;
      const lead = CFG.lead / 100, speed = Math.max(0.05, CFG.speed / 100);
      const tail = Math.max(0.05, CFG.tail / 100), MINS = CFG.minScale / 100;
      const IN = 0.12;
      const fpt = CFG.flipAt / 100, fdur = Math.max(0.02, CFG.flipDur / 100);
      const shrinkFrom = CFG.variant === "flip" ? Math.max(IN, Math.min(0.85, fpt + fdur)) : IN;
      const dpr = Math.min(window.devicePixelRatio || 1, 2);

      /* 1. het volle navy vlak */
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      ctx.globalCompositeOperation = "source-over";
      ctx.clearRect(0, 0, W, H);
      ctx.fillStyle = "rgb(" + OVERGANG_NAVY[0] + "," + OVERGANG_NAVY[1] + "," + OVERGANG_NAVY[2] + ")";
      ctx.fillRect(0, 0, W, H);

      /* 2. per cel een gat prikken, zodat het witte blok eronder doorkomt.
         Gebundeld per dekkingsstap: volle cellen in één pad, de rest in
         zestien stappen. */
      ctx.globalCompositeOperation = "destination-out";
      const gaten = new Map();
      for (let y = 0; y < rows; y++) {
        for (let x = 0; x < cols; x++) {
          const u = (p - thresh[y * cols + x] * span) / band;
          if (u <= 0) continue;
          const a = overgangSmooth(u / speed);
          if (a <= 0.004) continue;
          const q = Math.round(a * 16);
          let pad = gaten.get(q);
          if (!pad) { pad = new Path2D(); gaten.set(q, pad); }
          pad.rect(x * cw - 0.4, y * ch - 0.4, cw + 0.8, ch + 0.8);
        }
      }
      gaten.forEach((pad, q) => { ctx.globalAlpha = q / 16; ctx.fill(pad); });
      ctx.globalAlpha = 1;

      /* 3. de schakels: wit zolang de cel dicht is, navy zodra hij opengaat.
         Per frame zijn dit duizenden schakels. Ze worden daarom gebundeld:
         dekking, kleur en lijndikte gaan in stappen, en alles binnen één stap
         gaat als één pad naar de GPU. Zelfde beeld, een fractie van de
         canvas-oproepen — daar zat de hapering. */
      ctx.globalCompositeOperation = "source-over";
      ctx.lineCap = "butt"; ctx.lineJoin = "miter";
      const pre = Math.max(0.01, CFG.preWhite / 100), pAlpha = CFG.preAlpha / 100;
      const bundels = new Map();
      for (let y = 0; y < rows; y++) {
        for (let x = 0; x < cols; x++) {
          const i = y * cols + x;
          const u = (p - thresh[i] * span) / band;
          const v = u + lead;
          if (v <= -pre) continue;

          let scale, alpha;
          if (v <= 0) { scale = 1; alpha = pAlpha * overgangSmooth((v + pre) / pre); }
          else {
            scale = 1 - (1 - MINS) * overgangSmooth((v - shrinkFrom) / (1 - shrinkFrom));
            alpha = Math.max(pAlpha, overgangSmooth(v / IN));
            if (v > 1) alpha *= 1 - overgangSmooth((v - 1) / tail);
          }
          if (scale <= 0.02 || alpha <= 0.004) continue;

          const mt = CFG.variant === "frame" ? 1
            : CFG.variant === "flip" ? overgangSmooth((v - fpt) / fdur) : 0;
          const shape = mt <= 0 ? OVERGANG_MARK.logo : mt >= 1 ? OVERGANG_MARK.frame
            : OVERGANG_MARK.logo.map((arm, pi) => arm.map((pt, ti) => [
              pt[0] + (OVERGANG_MARK.frame[pi][ti][0] - pt[0]) * mt,
              pt[1] + (OVERGANG_MARK.frame[pi][ti][1] - pt[1]) * mt]));

          const uw = cw * (CFG.fill / 100) * scale, uh = ch * (CFG.fill / 100) * scale;
          const slw = Math.min(lw, Math.min(uw, uh) * 0.4);
          const ox = x * cw + (cw - uw) / 2 + slw / 2, oy = y * ch + (ch - uh) / 2 + slw / 2;
          const kx = (uw - slw) / OVERGANG_MARK_W, ky = (uh - slw) / OVERGANG_MARK_H;

          const o = overgangSmooth(u / speed);
          const aQ = Math.round(alpha * 16), oQ = Math.round(o * 16), sQ = Math.round(slw * 4);
          const sleutel = aQ * 10000 + oQ * 100 + sQ;
          let bundel = bundels.get(sleutel);
          if (!bundel) {
            const q = oQ / 16;
            bundel = {
              pad: new Path2D(),
              alpha: aQ / 16,
              breedte: sQ / 4,
              kleur: "rgb(" + ((OVERGANG_WIT[0] + (OVERGANG_NAVY[0] - OVERGANG_WIT[0]) * q) | 0) + ","
                + ((OVERGANG_WIT[1] + (OVERGANG_NAVY[1] - OVERGANG_WIT[1]) * q) | 0) + ","
                + ((OVERGANG_WIT[2] + (OVERGANG_NAVY[2] - OVERGANG_WIT[2]) * q) | 0) + ")"
            };
            bundels.set(sleutel, bundel);
          }
          for (const seg of shape) {
            bundel.pad.moveTo(ox + seg[0][0] * kx, oy + seg[0][1] * ky);
            bundel.pad.lineTo(ox + seg[1][0] * kx, oy + seg[1][1] * ky);
            bundel.pad.lineTo(ox + seg[2][0] * kx, oy + seg[2][1] * ky);
          }
        }
      }
      bundels.forEach((b) => {
        ctx.globalAlpha = b.alpha;
        ctx.strokeStyle = b.kleur;
        ctx.lineWidth = b.breedte || 0.5;
        ctx.stroke(b.pad);
      });
      ctx.globalAlpha = 1;
    }

    function progress() {
      if (reduce) return 1;
      const vh = window.innerHeight;
      const head = vh * CFG.startEarly;          /* aanloop vóór het vastplakken */
      const total = sc.offsetHeight - vh + head;
      const passed = head - sc.getBoundingClientRect().top;
      return Math.min(1, Math.max(0, passed / total));
    }

    function loop() {
      if (!leeft) return;
      const p = progress();
      /* Klaar of nog niet begonnen: het canvas hoeft niet te bestaan als laag.
         Zo kost de scroll onder de overgang niets en hapert hij niet. */
      const wens = p >= 0.999 || p <= 0 ? "hidden" : "visible";
      if (cv.style.visibility !== wens) cv.style.visibility = wens;
      if (wens === "visible" && Math.abs(p - lastP) > 0.0004) { render(p); lastP = p; }
      raf = requestAnimationFrame(loop);
    }

    const opnieuw = () => { clearTimeout(rt); rt = setTimeout(build, 120); };
    window.addEventListener("resize", opnieuw);
    build(); loop();
    return () => { leeft = false; cancelAnimationFrame(raf); clearTimeout(rt); window.removeEventListener("resize", opnieuw); };
  }, []);

  return (
    <section ref={scroller} style={{ position: "relative", zIndex: 2, height: "120vh", background: "#101F3C" }}>
      <div style={{ position: "sticky", top: 0, height: "100vh", overflow: "hidden", background: "#FFFFFF" }}>
        {children}
        <canvas ref={doek} aria-hidden="true" style={{ position: "absolute", inset: 0, width: "100%", height: "100%", display: "block", pointerEvents: "none" }} />
      </div>
    </section>
  );
}

Object.assign(window, { OvergangDissolve });
