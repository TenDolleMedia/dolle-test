/* HERO DISSOLVE — de hero-foto lost al scrollend op in het DOLLE-beeldmerk en
   wordt volledig navy. Canvas-logica en CFG komen ongewijzigd uit het lab; hier
   staat alleen de React-omhulling eromheen (meten, scroll, opruimen).
   De bron is nu een foto; een videoframe kan er later net zo in, want render()
   tekent uit één bronafbeelding. */
/* De vastgelegde stand van de hero-dissolve: dit is de afstemming zoals hij was
   voordat er onderaan de pagina een tweede overgang bij kwam. */
const HERO_CFG = {
  cell: 6, stroke: 12, fill: 80, direction: "up", band: 26, speed: 41,
  jitter: 15, lead: 18, base: 0, minScale: 60, preWhite: 40, postWhite: 12,
  tail: 70, toNavy: 0, variant: "flip", flipAt: 71, flipDur: 2,
  shrinkAt: 40, /* verschuiving van het krimppunt t.o.v. het einde van de omslag */
  navyFill: 99, /* hoe ver het volvlak navy van onderaf omhoog loopt, in vh */
  cols: 131,  /* aantal cellen over de breedte; 0 = afgeleid uit de celgrootte */
  block: 1,   /* hoeveel cellen breed één schakel is */
  arm: 100    /* lengte van het korte been in de schakel, % van het merk */
};
const HERO_NAVY = [16, 31, 60], HERO_WIT = [248, 244, 236];
const MARK_W = 80, MARK_H = 66;
const HERO_MARK = {
  logo: [[[0, 0], [0, 40], [32, 40]], [[80, 66], [80, 26], [48, 26]]],
  frame: [[[0, 40], [0, 0], [32, 0]], [[80, 26], [80, 66], [48, 66]]]
};

function merkVorm(arm) {
  const a = Math.max(0.1, arm / 100);
  const l = 32 * a, r = 80 - 32 * a;
  return {
    logo: [[[0, 0], [0, 40], [l, 40]], [[80, 66], [80, 26], [r, 26]]],
    frame: [[[0, 40], [0, 0], [l, 0]], [[80, 26], [80, 66], [r, 66]]]
  };
}

/* video: dan loopt de film als <video> achter het doek. Het doek tekent de
   foto zelf niet meer, alleen de schakels en het dichtlopende navy; de
   kleuren van de schakels komen uit src (een still uit dezelfde film). */
function HeroDissolve({ src, video, start = 0, eind, voortgang, cfg, grond, vul, flits, flitsNa, doorzichtig }) {
  const film = React.useRef(null);
  React.useEffect(() => {
    const el = film.current;
    if (!el || !video) return;
    el.muted = true; el.defaultMuted = true;
    const opStart = () => { try { if (start && el.currentTime < start) el.currentTime = start; } catch (e) {} };
    /* Voor het eindlogo terug naar het begin, zodat de loop doorloopt. */
    const tijd = () => { if (eind && el.currentTime >= eind) { el.currentTime = start || 0; } };
    el.addEventListener("loadedmetadata", opStart);
    el.addEventListener("timeupdate", tijd);
    const p = el.play(); if (p && p.catch) p.catch(() => {});
    return () => { el.removeEventListener("loadedmetadata", opStart); el.removeEventListener("timeupdate", tijd); };
  }, [video, start, eind]);
  const doek = React.useRef(null);
  const staat = React.useRef({ doel: 0, p: 0 });
  staat.current.doel = voortgang;
  React.useEffect(() => {
    const cvs = doek.current;
    if (!cvs) return;
    const ctx = cvs.getContext("2d");
    const reduce = window.matchMedia && window.matchMedia("(prefers-reduced-motion:reduce)").matches;
    const CFG = Object.assign({}, HERO_CFG, cfg || {});
    /* Op smalle schermen zijn 14.000 merken per frame te zwaar: grovere cel. */
    if (window.innerWidth < 768) CFG.cell = 20;
    const VUL = vul || HERO_NAVY;
    const FLITS = flits || HERO_WIT;
    /* De naschijn mag een eigen kleur hebben: zo licht een schakel eerst wit op
       over het donkere vlak en kleurt hij daarna mee naar de vulling. */
    const FLITS_NA = flitsNa || FLITS;
    const img = new Image();
    let klaar = false, W = 0, H = 0, cols = 0, rows = 0, sample = null, thresh = null;
    let vuil = true, lastP = -1, raf = 0, weg = false;
    const smooth = (t) => (t <= 0 ? 0 : t >= 1 ? 1 : t * t * (3 - 2 * t));

    function coverRect() {
      const s = Math.max(W / img.width, H / img.height);
      const sw = W / s, sh = H / s;
      return [(img.width - sw) / 2, (img.height - sh) / 2, sw, sh];
    }

    function build() {
      if (!klaar || !W) return;
      cols = CFG.cols > 0 ? Math.round(CFG.cols) : Math.ceil(W / CFG.cell);
      const celB = W / cols;
      rows = Math.max(1, Math.ceil(H / (celB * MARK_H / MARK_W)));
      const n = cols * rows;
      const sc = document.createElement("canvas"); sc.width = cols; sc.height = rows;
      const sctx = sc.getContext("2d"); sctx.imageSmoothingQuality = "high";
      if (src) {
        const r = coverRect();
        sctx.drawImage(img, r[0], r[1], r[2], r[3], 0, 0, cols, rows);
      } else {
        sctx.fillStyle = grond || "#101F3C";
        sctx.fillRect(0, 0, cols, rows);
      }
      try { sample = sctx.getImageData(0, 0, cols, rows).data; } catch (e) { sample = null; return; }
      thresh = new Float32Array(n);
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
        thresh[i] = Math.min(0.999, Math.max(0, base * (1 - j) + Math.random() * j));
      }
      vuil = true;
    }

    function resize() {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      W = cvs.clientWidth; H = cvs.clientHeight;
      if (!W || !H) return;
      cvs.width = Math.round(W * dpr); cvs.height = Math.round(H * dpr);
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      build();
    }

    function render(p) {
      if (!klaar || !W || !sample) return;
      ctx.clearRect(0, 0, W, H);
      if (video) {
        /* niets: de film staat eronder */
      } else if (src) {
        const r = coverRect();
        ctx.drawImage(img, r[0], r[1], r[2], r[3], 0, 0, W, H);
      } else if (!doorzichtig) {
        /* Doorzichtig: geen vlakke grond, alleen de schakels en de dichtlopende
           cellen — zo loopt het raster over de blokken erboven heen zonder rand. */
        ctx.fillStyle = grond || "#101F3C";
        ctx.fillRect(0, 0, W, H);
      }
      const cw = W / cols, ch = H / rows;
      const lw = Math.max(0.5, (CFG.stroke / 100) * cw * Math.max(1, Math.round(CFG.block || 1)) * (CFG.fill / 100));
      const band = Math.max(0.03, CFG.band / 100), span = 1 - band;
      const lead = CFG.lead / 100, speed = Math.max(0.05, CFG.speed / 100);
      const baseA = CFG.base / 100, mix = CFG.toNavy / 100;
      const pre = CFG.preWhite / 100, post = CFG.postWhite / 100;
      const tail = Math.max(0.05, CFG.tail / 100), MINS = CFG.minScale / 100;
      const IN = 0.12;
      const fpt = CFG.flipAt / 100, fdur = Math.max(0.02, CFG.flipDur / 100);
      /* Het krimpen begint standaard zodra de omslag klaar is; de regelaar
         schuift dat punt naar voren of naar achteren. */
      const naOmslag = CFG.variant === "flip" ? fpt + fdur : IN;
      const shrinkFrom = Math.max(IN, Math.min(0.98, naOmslag + (CFG.shrinkAt || 0) / 100));
      ctx.lineCap = "butt"; ctx.lineJoin = "miter";
      const MERK = merkVorm(CFG.arm == null ? 100 : CFG.arm);
      const blk = Math.max(1, Math.round(CFG.block || 1));
      for (let y = 0; y < rows; y++) {
        for (let x = 0; x < cols; x++) {
          const i = y * cols + x;
          const u = (p - thresh[i] * span) / band;
          const v = u + lead;
          const px = x * cw, py = y * ch;
          if (u > 0) {
            ctx.globalAlpha = smooth(u / speed);
            ctx.fillStyle = "rgb(" + VUL[0] + "," + VUL[1] + "," + VUL[2] + ")";
            ctx.fillRect(px - 0.4, py - 0.4, cw + 0.8, ch + 0.8);
          }
          let scale, alpha;
          if (v <= 0) { scale = 1; alpha = baseA; }
          else {
            scale = 1 - (1 - MINS) * smooth((v - shrinkFrom) / (1 - shrinkFrom));
            alpha = Math.max(baseA, smooth(v / IN));
            if (v > 1) alpha *= 1 - smooth((v - 1) / tail);
          }
          if (scale <= 0.02 || alpha <= 0.004) continue;
          /* Eén schakel per blok van blk×blk cellen; de vulling blijft per cel. */
          if (blk > 1 && (x % blk !== 0 || y % blk !== 0)) continue;
          const o = i * 4, m = mix * (1 - scale), fa = u > 0 ? smooth(u / speed) : 0;
          /* Zonder eigen naschijnkleur precies de oorspronkelijke rekenwijze:
             één gewicht richting dezelfde kleur. Alleen met een aparte
             naschijnkleur worden het twee stappen. */
          const eenKleur = !flitsNa;
          const wVoor = eenKleur ? Math.min(1, pre * (1 - fa) + post * fa) : Math.min(1, pre * (1 - fa));
          const wNa = eenKleur ? 0 : Math.min(1, post * fa);
          let cr = sample[o] + (VUL[0] - sample[o]) * m;
          let cg = sample[o + 1] + (VUL[1] - sample[o + 1]) * m;
          let cb = sample[o + 2] + (VUL[2] - sample[o + 2]) * m;
          cr += (FLITS[0] - cr) * wVoor; cg += (FLITS[1] - cg) * wVoor; cb += (FLITS[2] - cb) * wVoor;
          cr += (FLITS_NA[0] - cr) * wNa; cg += (FLITS_NA[1] - cg) * wNa; cb += (FLITS_NA[2] - cb) * wNa;
          const mt = CFG.variant === "frame" ? 1 : CFG.variant === "flip" ? smooth((v - fpt) / fdur) : 0;
          const shape = mt <= 0 ? MERK.logo : mt >= 1 ? MERK.frame
            : MERK.logo.map((pa, pi) => pa.map((pt, ti) => [
              pt[0] + (MERK.frame[pi][ti][0] - pt[0]) * mt,
              pt[1] + (MERK.frame[pi][ti][1] - pt[1]) * mt]));
          const uw = cw * blk * (CFG.fill / 100) * scale, uh = ch * blk * (CFG.fill / 100) * scale;
          const slw = Math.min(lw, Math.min(uw, uh) * 0.4);
          const ox = px + (cw * blk - uw) / 2, oy = py + (ch * blk - uh) / 2;
          const kx = (uw - slw) / MARK_W, ky = (uh - slw) / MARK_H;
          const X = (t) => ox + slw / 2 + t * kx, Y = (t) => oy + slw / 2 + t * ky;
          ctx.globalAlpha = alpha;
          ctx.lineWidth = slw;
          ctx.strokeStyle = "rgb(" + (cr | 0) + "," + (cg | 0) + "," + (cb | 0) + ")";
          for (const path of shape) {
            ctx.beginPath();
            ctx.moveTo(X(path[0][0]), Y(path[0][1]));
            ctx.lineTo(X(path[1][0]), Y(path[1][1]));
            ctx.lineTo(X(path[2][0]), Y(path[2][1]));
            ctx.stroke();
          }
        }
      }
      ctx.globalAlpha = 1;
    }

    function loop() {
      if (weg) return;
      /* De scroll stuurt een doel; de stand loopt er zacht naartoe. Daardoor
         voelt één wielstap als een rustige beweging in plaats van een sprong. */
      const p = reduce ? 0 : staat.current.doel;
      if (vuil || p !== lastP) { render(p); lastP = p; vuil = false; }
      raf = requestAnimationFrame(loop);
    }

    if (src) {
      img.crossOrigin = "anonymous";
      img.onload = () => { klaar = true; resize(); };
      img.src = src;
    } else {
      klaar = true;
    }
    const opNieuw = () => resize();
    window.addEventListener("resize", opNieuw);
    resize();
    raf = requestAnimationFrame(loop);
    return () => { weg = true; cancelAnimationFrame(raf); window.removeEventListener("resize", opNieuw); };
  }, [src, grond, JSON.stringify(cfg || {}), JSON.stringify(vul || null), JSON.stringify(flits || null), JSON.stringify(flitsNa || null), !!doorzichtig, video]);
  const doekEl = <canvas ref={doek} aria-hidden="true" style={{ position: "absolute", inset: 0, width: "100%", height: "100%", display: "block", background: (doorzichtig || video) ? "transparent" : (grond || "var(--dolle-navy)") }} />;
  if (!video) return doekEl;
  return (
    <React.Fragment>
      <video ref={film} src={video + (start ? "#t=" + start : "")} poster={src} autoPlay muted loop playsInline preload="auto" fetchpriority="high" aria-hidden="true"
        style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover", display: "block", background: "var(--dolle-navy)" }} />
      {doekEl}
    </React.Fragment>
  );
}

Object.assign(window, { HeroDissolve, HERO_CFG });
