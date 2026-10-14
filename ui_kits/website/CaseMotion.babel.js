/* Gedeelde scroll- en reveal-effecten voor de casepagina's.
   Eén set, zodat elke case dezelfde opening en hetzelfde ritme krijgt. */

const CM_EASE = "cubic-bezier(.65,0,.25,1)";
const CM_ZACHT = "cubic-bezier(.16,.84,.24,1)";
const cmKlem = (v) => Math.max(0, Math.min(1, v));
const cmRustig = () => typeof window !== "undefined" && window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
const cmMobiel = () => typeof window !== "undefined" && window.innerWidth < 860;

/* Roept fn(rect, vh) aan bij elke scroll/resize, één keer per frame. */
function useCMScroll(ref, fn, deps) {
  React.useEffect(() => {
    let raf = 0;
    const meet = () => { raf = 0; const el = ref.current; if (el) fn(el.getBoundingClientRect(), window.innerHeight || 800); };
    const op = () => { if (!raf) raf = requestAnimationFrame(meet); };
    meet();
    window.addEventListener("scroll", op, { passive: true });
    window.addEventListener("resize", op);
    return () => { window.removeEventListener("scroll", op); window.removeEventListener("resize", op); if (raf) cancelAnimationFrame(raf); };
  }, deps || []);
}

/* Eén keer aan zodra het element het venster binnenkomt. */
function useCMBinnen(ref, drempel) {
  const [aan, setAan] = React.useState(false);
  React.useEffect(() => {
    if (cmRustig()) { setAan(true); return; }
    const el = ref.current; if (!el || typeof IntersectionObserver === "undefined") { setAan(true); return; }
    const io = new IntersectionObserver((e) => { if (e.some((x) => x.isIntersecting)) { setAan(true); io.disconnect(); } }, { rootMargin: "0px 0px -" + (drempel || 12) + "% 0px" });
    io.observe(el);
    return () => io.disconnect();
  }, []);
  return aan;
}

/* Haarlijn die zichzelf van links trekt, 1:1 met de scroll. */
function CMLijn({ kleur, basis, blijf }) {
  const ref = React.useRef(null);
  const lijn = React.useRef(null);
  const max = React.useRef(0);
  /* blijf: eenmaal gevuld blijft de lijn vol, ook bij terugscrollen. */
  useCMScroll(ref, (r, vh) => {
    let p = cmRustig() ? 1 : cmKlem((vh * 0.96 - r.top) / (vh * 0.38));
    if (blijf) { if (p > max.current) max.current = p; p = max.current; }
    if (lijn.current) lijn.current.style.transform = "scaleX(" + p.toFixed(4) + ")";
  });
  return (
    <div ref={ref} aria-hidden="true" style={{ height: 1, position: "relative", background: basis ? "rgba(255,255,255,0.1)" : "transparent" }}>
      <div ref={lijn} style={{ position: "absolute", inset: 0, background: kleur || (basis ? "rgba(255,255,255,0.5)" : "var(--white-24, rgba(255,255,255,0.24))"), transformOrigin: "left center", transform: "scaleX(0)" }} />
    </div>
  );
}

/* Beeld opent vanuit een masker (van onder naar boven) met een lichte zoom-out. */
function CMMasker({ children, vertraging }) {
  const ref = React.useRef(null);
  const aan = useCMBinnen(ref, 10);
  const [klaar, setKlaar] = React.useState(false);
  React.useEffect(() => { if (!aan) return; const t = setTimeout(() => setKlaar(true), 1500 + (vertraging || 0)); return () => clearTimeout(t); }, [aan]);
  if (klaar) return <div ref={ref}>{children}</div>;
  return (
    <div ref={ref} style={{ clipPath: aan ? "inset(0 0 0 0)" : "inset(100% 0 0 0)", transition: "clip-path 1300ms " + CM_EASE + " " + (vertraging || 0) + "ms" }}>
      <div style={{ transform: aan ? "translate3d(0,0,0)" : "translate3d(0,48px,0)", transition: "transform 1500ms " + CM_ZACHT + " " + (vertraging || 0) + "ms" }}>{children}</div>
    </div>
  );
}

/* Tekstblokken van links naar rechts in beeld, één voor één. */
function CMTekst({ children, aan: extern, start, duur }) {
  const ref = React.useRef(null);
  const zelf = useCMBinnen(ref, 6);
  const aan = extern == null ? zelf : extern && zelf;
  return (
    <div ref={ref} style={{ display: "grid", gap: "var(--space-4)" }}>
      {React.Children.map(children, (c, i) => (
        <div style={{ clipPath: aan ? "inset(-4px -4px -8px 0)" : "inset(-4px 100% -8px 0)", transition: "clip-path " + (duur || 1200) + "ms " + CM_EASE + " " + ((start || 0) + i * 160) + "ms", willChange: "clip-path" }}>{c}</div>
      ))}
    </div>
  );
}

/* Openingsbeeld. modus "masker": groeit uit het haakjessymbool naar het volle
   kader. modus "tekst": de tekst gaat voor, daarna zoomt het beeld rustig uit. */
function CMGroeiBeeld({ src, ratio, van, oorsprong }) {
  const vak = React.useRef(null), kader = React.useRef(null), img = React.useRef(null);
  React.useEffect(() => {
    const zet = (p) => {
      const e = p * p * (3 - 2 * p);
      if (kader.current) kader.current.style.transform = "scale(" + (van + (1 - van) * e).toFixed(4) + ")";
      if (img.current) img.current.style.transform = "scale(" + (1.14 - 0.14 * e).toFixed(4) + ")";
    };
    if (cmRustig()) { zet(1); return; }
    /* Volgt de scroll met een zachte demping: elk frame schuift de waarde een
       stukje richting het doel, zodat wielstappen niet als schokjes doorkomen. */
    let raf = 0, nu = -1, doel = 0;
    const meet = () => { const v = vak.current; if (!v) return; const b = v.getBoundingClientRect(), vh = window.innerHeight || 800; doel = cmKlem((vh - b.top) / (vh * 0.9)); };
    const tik = () => {
      raf = 0; meet();
      if (nu < 0) nu = doel; else nu += (doel - nu) * 0.12;
      if (Math.abs(doel - nu) < 0.0005) nu = doel; else raf = requestAnimationFrame(tik);
      zet(nu);
    };
    const op = () => { if (!raf) raf = requestAnimationFrame(tik); };
    tik(); window.addEventListener("scroll", op, { passive: true, capture: true }); window.addEventListener("resize", op);
    return () => { window.removeEventListener("scroll", op, true); window.removeEventListener("resize", op); if (raf) cancelAnimationFrame(raf); };
  }, [van]);
  return (
    <div ref={vak} style={{ position: "relative", aspectRatio: ratio || "16 / 9" }}>
      <div ref={kader} style={{ position: "absolute", inset: 0, overflow: "hidden", borderRadius: 5, background: "#0a1428", transform: "scale(" + van + ")", transformOrigin: oorsprong || "50% 50%", willChange: "transform" }}>
        <img ref={img} src={src} alt="" style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover", display: "block", transform: "scale(1.14)", willChange: "transform" }} />
      </div>
    </div>
  );
}

function CMOpeningBeeld({ src, ratio, modus, start: van, oorsprong }) {
  const [fase, setFase] = React.useState(cmRustig() ? 2 : 0);
  React.useEffect(() => {
    if (cmRustig()) return;
    if (modus === "groei" || !modus) return;
    const a = setTimeout(() => setFase(1), modus === "tekst" ? 700 : 250);
    const b = setTimeout(() => setFase(2), modus === "tekst" ? 800 : modus === "masker" ? 1150 : 120);
    return () => { clearTimeout(a); clearTimeout(b); };
  }, [modus]);
  const S = 38;
  if (modus === "scroll") return <CMScrollBeeld src={src} ratio={ratio} />;
  if (modus === "groei" || !modus) {
    /* Groeit 1:1 met de scroll: van de startmaat zodra het beeld onderin het
       venster verschijnt, tot volle grootte als het in het midden staat. */
    /* Overal dezelfde zoom als bij Blue Rivet: vanaf 62%, gedempt meebewegend. */
    return <CMGroeiBeeld src={src} ratio={ratio} van={0.62} oorsprong={oorsprong} />;
  }
  if (modus === "tekst") {
    return (
      <div style={{ position: "relative", aspectRatio: ratio || "16 / 9", overflow: "hidden", borderRadius: 5, background: "#0a1428" }}>
        <img src={src} alt="" style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover", display: "block", opacity: fase ? 1 : 0, transform: fase === 2 ? "scale(1)" : "scale(1.12)", transition: "opacity 1100ms " + CM_EASE + ", transform 2400ms " + CM_ZACHT }} />
      </div>
    );
  }
  const klip = fase === 0 ? "inset(50% 50% 50% 50% round 2px)" : fase === 1 ? "inset(calc(50% - " + S + "px) calc(50% - " + S + "px) calc(50% - " + S + "px) calc(50% - " + S + "px) round 2px)" : "inset(0 0 0 0 round 5px)";
  const duur = fase === 2 ? "1600ms" : "800ms";
  const haak = { position: "absolute", width: 22, height: 22, borderColor: "var(--dolle-white)", borderStyle: "solid", borderWidth: 0, opacity: fase === 2 ? 0 : fase ? 1 : 0, transition: "left " + duur + " " + CM_EASE + ", top " + duur + " " + CM_EASE + ", right " + duur + " " + CM_EASE + ", bottom " + duur + " " + CM_EASE + ", opacity " + (fase === 2 ? "700ms " + CM_EASE + " 1000ms" : "500ms " + CM_EASE) };
  const rand = fase === 2 ? "-14px" : "calc(50% - " + (S + 14) + "px)";
  return (
    <div style={{ position: "relative", aspectRatio: ratio || "16 / 9" }}>
      <div style={{ position: "absolute", inset: 0, overflow: "hidden", borderRadius: 5, clipPath: klip, transition: "clip-path " + duur + " " + CM_EASE }}>
        <img src={src} alt="" style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover", display: "block", transform: fase === 2 ? "scale(1)" : "scale(1.25)", transition: "transform 2000ms " + CM_ZACHT }} />
      </div>
      <span aria-hidden="true" style={{ ...haak, left: rand, top: rand, borderLeftWidth: 3, borderBottomWidth: 3 }} />
      <span aria-hidden="true" style={{ ...haak, right: rand, bottom: rand, borderRightWidth: 3, borderTopWidth: 3 }} />
    </div>
  );
}

/* Openingsbeeld dat met de scroll meegroeit: bovenaan iets kleiner, na een
   halve schermhoogte scrollen staat het op volle grootte. Geen klok, dus geen
   haperende overgang bij het laden. */
function CMScrollBeeld({ src, ratio }) {
  const ref = React.useRef(null);
  const kader = React.useRef(null);
  const beeld = React.useRef(null);
  useCMScroll(ref, (r, vh) => {
    const p = cmRustig() ? 1 : cmKlem((window.scrollY || 0) / (vh * 0.7));
    const e = p < 0.5 ? 2 * p * p : 1 - Math.pow(-2 * p + 2, 2) / 2;
    if (kader.current) kader.current.style.transform = "scale(" + (0.6 + 0.4 * e).toFixed(4) + ")";
    if (beeld.current) beeld.current.style.transform = "scale(" + (1.12 - 0.12 * e).toFixed(4) + ")";
  });
  return (
    <div ref={ref} style={{ position: "relative", aspectRatio: ratio || "16 / 9" }}>
      <div ref={kader} style={{ position: "absolute", inset: 0, overflow: "hidden", borderRadius: 5, background: "#0a1428", transform: "scale(0.6)", transformOrigin: "100% 0%", willChange: "transform" }}>
        <img ref={beeld} src={src} alt="" fetchpriority="high" style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover", display: "block", transform: "scale(1.12)", willChange: "transform" }} />
      </div>
    </div>
  );
}

/* Pint de opening tot het openingsbeeld met de scroll op volle grootte staat;
   pas daarna scrolt de pagina verder. Op mobiel geen pin. */
function CMPin({ children, afstand }) {
  const [mobiel, setMobiel] = React.useState(cmMobiel());
  const weg = React.useRef(null);
  const [top, setTop] = React.useState(0);
  React.useLayoutEffect(() => {
    const meet = () => { if (weg.current) setTop(Math.max(0, Math.round(weg.current.getBoundingClientRect().top + (window.scrollY || 0)))); };
    meet(); window.addEventListener("resize", meet); return () => window.removeEventListener("resize", meet);
  }, [mobiel]);
  React.useEffect(() => { const r = () => setMobiel(cmMobiel()); window.addEventListener("resize", r); return () => window.removeEventListener("resize", r); }, []);
  if (mobiel || cmRustig()) return children;
  return (
    <div ref={weg} style={{ position: "relative" }}>
      <div style={{ position: "sticky", top: top, zIndex: 1, background: "var(--dolle-navy)" }}>{children}</div>
      <div aria-hidden="true" style={{ height: Math.round((afstand || 0.7) * 100) + "vh", background: "var(--dolle-navy)" }} />
    </div>
  );
}

/* In beeld scrollen: de kaarten in sel komen één voor één omhoog, 1:1 met de scroll. */
function CMInScroll({ children, sel }) {
  const ref = React.useRef(null);
  useCMScroll(ref, (r, vh) => {
    if (cmRustig() || !ref.current) return;
    const doel = ref.current.querySelector(sel); if (!doel) return;
    [...doel.children].forEach((k, i) => {
      const t = cmKlem((vh * 1.0 - r.top) / (vh * 0.45) - i * 0.14);
      const e = 1 - Math.pow(1 - t, 3);
      k.style.translate = "0 " + ((1 - e) * 140).toFixed(1) + "px";
      k.style.scale = String((0.9 + 0.1 * e).toFixed(4));
    });
  });
  return <div ref={ref}>{children}</div>;
}

/* Tekst die woord voor woord van links naar rechts vult, gekoppeld aan de
   scroll van het openingsbeeld (scrollY / afstand × vh). */
function CMVulTekst({ zinnen, afstand, className, style }) {
  const ref = React.useRef(null);
  const woorden = zinnen.map((z) => z.split(" "));
  const totaal = woorden.reduce((n, w) => n + w.length, 0);
  useCMScroll(ref, (r, vh) => {
    if (!ref.current) return;
    const p = cmRustig() ? 1 : cmKlem((window.scrollY || 0) / (vh * (afstand || 0.7)));
    const vol = p * (totaal + 3);
    ref.current.querySelectorAll("[data-w]").forEach((el) => {
      const i = +el.dataset.w;
      const t = cmKlem(vol - i);
      el.style.opacity = (0.22 + 0.78 * t).toFixed(3);
    });
  });
  let n = 0;
  return (
    <div ref={ref} style={{ display: "grid", gap: "var(--space-4)" }}>
      {woorden.map((ws, k) => (
        <p key={k} className={className} style={{ margin: 0, ...style }}>
          {ws.map((w, j) => { const i = n++; return <React.Fragment key={j}><span data-w={i} style={{ opacity: 0.22 }}>{w}</span>{j < ws.length - 1 ? " " : ""}</React.Fragment>; })}
        </p>
      ))}
    </div>
  );
}

/* Blokken (tags) die zich één voor één van links naar rechts vullen. */
function CMBlokken({ children, midden }) {
  const ref = React.useRef(null);
  const aan = useCMBinnen(ref, 8);
  return (
    <span ref={ref} style={{ display: "flex", gap: "var(--space-2)", flexWrap: "wrap", justifyContent: midden ? "center" : undefined, maxWidth: "min(100%, 860px)" }}>
      {React.Children.map(children, (c, i) => (
        <span style={{ display: "block", clipPath: aan ? "inset(0 0 0 0)" : "inset(0 100% 0 0)", transition: "clip-path 800ms " + CM_EASE + " " + (i * 130) + "ms" }}>{c}</span>
      ))}
    </span>
  );
}

/* Kaartenstapel: het blok staat vast, elke scrollstap schuift de volgende kaart
   van onder over de vorige, afwisselend links en rechts van het midden. De
   bovenste kaart speelt; de rest staat stil. */
function CMStapel({ items, ratio }) {
  const weg = React.useRef(null);
  const kaarten = React.useRef([]);
  const [actief, setActief] = React.useState(0);
  const [geluid, setGeluid] = React.useState(false);
  const n = items.length;
  useCMScroll(weg, (r, vh) => {
    const D = r.height - vh;
    const f = cmKlem(-r.top / Math.max(1, D)) * (n - 1);
    const w = weg.current ? weg.current.clientWidth : 1000;
    kaarten.current.forEach((k, i) => {
      if (!k) return;
      const e = i === 0 ? 1 : cmKlem(f - (i - 1));
      const s = e * e * (3 - 2 * e);
      const d = cmKlem(f - i);
      const kant = i % 2 ? 1 : -1;
      const x = kant * w * (cmMobiel() ? 0.04 : 0.11);
      k.style.transform = "translate3d(" + x.toFixed(1) + "px," + ((1 - s) * vh * 1.05).toFixed(1) + "px,0) scale(" + (1 - 0.07 * d).toFixed(4) + ") rotate(" + (kant * (1 - s) * 4).toFixed(2) + "deg)";
      k.style.filter = "brightness(" + (1 - 0.35 * d).toFixed(3) + ")";
    });
    const a = Math.round(f);
    setActief((o) => (o === a ? o : a));
  }, [n]);
  React.useEffect(() => {
    kaarten.current.forEach((k, i) => {
      const v = k && k.querySelector("video"); if (!v) return;
      if (i === actief) { v.muted = !geluid; const pr = v.play(); if (pr && pr.catch) pr.catch(() => {}); } else { v.pause(); v.muted = true; }
    });
  }, [actief, geluid]);
  return (
    <div ref={weg} style={{ position: "relative", height: "calc(100vh + " + ((n - 1) * 60) + "vh)" }}>
      <div style={{ position: "sticky", top: 0, height: "100vh", overflow: "hidden" }}>
        {items.map((it, i) => (
          <div key={i} ref={(el) => { kaarten.current[i] = el; }} style={{ position: "absolute", left: "50%", top: "50%", width: "min(38vw, 66vh * " + (ratio || 0.8) + ")", marginLeft: "calc(min(38vw, 66vh * " + (ratio || 0.8) + ") / -2)", marginTop: "calc(min(38vw, 66vh * " + (ratio || 0.8) + ") / " + (ratio || 0.8) + " / -2)", aspectRatio: String(ratio || 0.8), borderRadius: 5, overflow: "hidden", background: "#0a1428", zIndex: i, willChange: "transform", transform: i ? "translate3d(0,110vh,0)" : "none", boxShadow: "0 24px 60px rgba(0,0,0,0.35)" }}>
            <video src={it.video} muted loop playsInline preload="metadata" style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover", display: "block" }} />
            <span style={{ position: "absolute", left: 12, bottom: 14, fontFamily: "var(--font-label)", fontSize: 10, fontWeight: 600, letterSpacing: "var(--track-label-wide)", textTransform: "uppercase", color: "var(--dolle-white)", textShadow: "0 1px 6px rgba(0,0,0,.45)", whiteSpace: "nowrap" }}>{it.label}</span>
            {i === actief ? <button type="button" aria-label={geluid ? "Sound off" : "Sound on"} onClick={() => setGeluid((g) => !g)} style={{ position: "absolute", right: 10, bottom: 10, width: 32, height: 32, borderRadius: 999, border: "1px solid rgba(255,255,255,0.5)", background: "rgba(16,31,60,0.45)", backdropFilter: "blur(4px)", color: "var(--dolle-white)", display: "grid", placeItems: "center", cursor: "pointer", padding: 0 }}>
              <svg viewBox="0 0 24 24" width="15" height="15" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true"><path d="M4 9v6h4l5 4V5L8 9H4z" fill="currentColor" stroke="none" />{geluid ? <path d="M16 8.5a5 5 0 0 1 0 7M18.5 6a8.5 8.5 0 0 1 0 12" /> : <path d="M17 9l5 6M22 9l-5 6" />}</svg>
            </button> : null}
          </div>
        ))}
      </div>
    </div>
  );
}

/* Tekst in een blokje vult zich van links naar rechts bij het openen. */
function CMVulIn({ children, vertraging }) {
  const [aan, setAan] = React.useState(cmRustig());
  React.useEffect(() => { const t = setTimeout(() => setAan(true), 80); return () => clearTimeout(t); }, []);
  return <span style={{ display: "inline-block", clipPath: aan ? "inset(-4px -2px -4px 0)" : "inset(-4px 100% -4px 0)", transition: "clip-path 900ms " + CM_EASE + " " + (vertraging || 0) + "ms" }}>{children}</span>;
}

/* WILDLY + wisselend doelwoord; het nieuwe woord zakt van boven in. */
function CMWildly({ style }) {
  const W = ["visible", "forward", "ahead", "driven"];
  const [i, setI] = React.useState(0);
  React.useEffect(() => { if (cmRustig()) return; const t = setInterval(() => setI((x) => (x + 1) % W.length), 2800); return () => clearInterval(t); }, []);
  return (
    <span style={{ display: "inline-flex", gap: "0.34em", alignItems: "baseline", ...style }}>
      <span>Wildly</span>
      <span style={{ position: "relative", display: "inline-grid", overflow: "hidden", height: "1.15em", lineHeight: "1.15em", color: "var(--text-accent)" }}>
        {W.map((w, k) => <span key={w} aria-hidden={k !== i} style={{ gridArea: "1 / 1", transform: k === i ? "translateY(0)" : (k === (i + W.length - 1) % W.length ? "translateY(100%)" : "translateY(-100%)"), opacity: k === i ? 1 : 0, transition: "transform 700ms " + CM_EASE + ", opacity 500ms " + CM_EASE }}>{w}</span>)}
      </span>
    </span>
  );
}

/* Accordeon zoals de cases-rij op de dienstenpagina: de aangewezen kaart vult
   het venster en speelt, de rest blijft als smalle strook gedimd staan. */
function CMAccordeon({ items, hoog, ratio, licht }) {
  /* ratio: breedte/hoogte van de open kaart (standaard 9:16). licht: zachtere waas. */
  const R = ratio || 0.5625;
  const H = hoog || "clamp(380px,40vw,580px)";
  const [aan, setAan] = React.useState(0);
  const [geluid, setGeluid] = React.useState(false);
  const vak = React.useRef(null);
  const KA = "1300ms cubic-bezier(.2,.72,.16,1)";
  React.useEffect(() => {
    if (!vak.current) return;
    vak.current.querySelectorAll("video").forEach((v, i) => {
      if (i === aan) { v.muted = !geluid; const pr = v.play(); if (pr && pr.catch) pr.catch(() => {}); } else { v.pause(); v.muted = true; }
    });
  }, [aan, geluid]);
  return (
    <div ref={vak} data-cm-accordeon="1" style={{ display: "flex", gap: 4, height: H, borderRadius: 8, overflow: "hidden" }}>
      {items.map((it, i) => {
        const a = i === aan;
        return (
          <div key={i} onMouseEnter={() => setAan(i)} onFocus={() => setAan(i)} onClick={() => setAan(i)} tabIndex={0}
            style={{ position: "relative", minWidth: 0, flex: a ? "0 0 calc(" + H + " * " + R + ")" : "1 1 0px", overflow: "hidden", background: "#0a1428", cursor: "pointer", transition: "flex-grow " + KA + ", flex-basis " + KA }}>
            {it.video
              ? <video src={it.video} muted loop playsInline preload="metadata" style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover", display: "block", transform: a ? "scale(1)" : "scale(1.06)", transition: "transform " + KA }} />
              : <img src={it.src} alt="" loading="lazy" decoding="async" draggable="false" style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover", display: "block", transform: a ? "scale(1)" : "scale(1.06)", transition: "transform " + KA }} />}
            <div style={{ position: "absolute", inset: 0, background: licht ? "linear-gradient(180deg, rgba(20,32,58,0.18), rgba(20,32,58,0.34))" : "linear-gradient(180deg, rgba(20,32,58,0.55), rgba(20,32,58,0.78))", opacity: a ? 0 : 1, transition: "opacity " + KA }} />
            <div style={{ position: "absolute", left: 0, right: 0, bottom: "var(--space-6)", display: "grid", justifyItems: "center", padding: "0 var(--space-4)", opacity: a ? 1 : 0, transform: a ? "translateY(0)" : "translateY(10px)", transition: "opacity 700ms " + CM_EASE + " " + (a ? "350ms" : "0ms") + ", transform 900ms " + CM_ZACHT }}>
              <span style={{ fontFamily: "var(--font-label)", fontWeight: 600, fontSize: "var(--size-body-sm)", letterSpacing: "0.18em", textTransform: "uppercase", whiteSpace: "nowrap", color: "var(--dolle-white)", textShadow: "0 1px 8px rgba(0,0,0,.4)" }}>{it.label}</span>
            </div>
            {a && it.video ? <button type="button" aria-label={geluid ? "Sound off" : "Sound on"} onClick={(e) => { e.stopPropagation(); setGeluid((g) => !g); }} style={{ position: "absolute", right: 12, bottom: 12, width: 32, height: 32, borderRadius: 999, border: "1px solid rgba(255,255,255,0.5)", background: "rgba(16,31,60,0.45)", backdropFilter: "blur(4px)", color: "var(--dolle-white)", display: "grid", placeItems: "center", cursor: "pointer", padding: 0 }}>
              <svg viewBox="0 0 24 24" width="15" height="15" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true"><path d="M4 9v6h4l5 4V5L8 9H4z" fill="currentColor" stroke="none" />{geluid ? <path d="M16 8.5a5 5 0 0 1 0 7M18.5 6a8.5 8.5 0 0 1 0 12" /> : <path d="M17 9l5 6M22 9l-5 6" />}</svg>
            </button> : null}
          </div>
        );
      })}
    </div>
  );
}

/* Telt op naar het getal zodra het in beeld komt. */
function CMTeller({ waarde, achter, duur }) {
  const ref = React.useRef(null);
  /* Start pas als het getal echt in beeld staat (onderste 30% telt niet mee). */
  const aan = useCMBinnen(ref, 30);
  const [n, setN] = React.useState(0);
  React.useEffect(() => {
    if (!aan || typeof waarde !== "number") return;
    if (cmRustig()) { setN(waarde); return; }
    const t0 = performance.now() + 150, D = duur || 2200; let raf;
    const tik = (nu) => { const p = Math.max(0, Math.min(1, (nu - t0) / D)); const dec = (String(waarde).split(".")[1] || "").length, f = Math.pow(10, dec); setN(Math.round(waarde * (1 - Math.pow(1 - p, 3)) * f) / f); if (p < 1) raf = requestAnimationFrame(tik); };
    raf = requestAnimationFrame(tik);
    return () => cancelAnimationFrame(raf);
  }, [aan, waarde]);
  return <span ref={ref}>{typeof waarde === "number" ? n : waarde}{achter || ""}</span>;
}

/* Datablok: foto op de achtergrond met donkere waas, cijfers boven een lijn die
   zich vanuit het midden vult, daaronder de deliverables als blokken. */
function CMData({ beeld, cijfers = [], kop, tags, Tag, review, waas }) {
  const kaart = React.useRef(null);
  const kaartAan = useCMBinnen(kaart, 22);
  const ref = React.useRef(null);
  const lijn = React.useRef(null);
  const foto = React.useRef(null);
  useCMScroll(ref, (r, vh) => {
    const p = cmRustig() ? 1 : cmKlem((vh * 0.9 - r.top) / (vh * 0.6));
    if (lijn.current) lijn.current.style.transform = "scaleX(" + p.toFixed(4) + ")";
    /* Venster-parallax: de foto staat bijna stil ten opzichte van het scherm,
       de sectie schuift eroverheen als een venster dat de foto onthult. */
    
  });
  return (
    <section ref={ref} className="dolle-dark" style={{ position: "relative", overflow: "hidden", clipPath: "inset(0)", padding: "clamp(96px,16vh,180px) var(--page-margin)", color: "var(--text-body)" }}>
      {/* Vaste foto achter een geknipt venster: de browser houdt hem stil,
          zonder scriptwerk per frame, dus geen naloop. */}
      <div ref={foto} aria-hidden="true" style={{ position: "fixed", inset: 0, backgroundImage: "url(" + beeld + ")", backgroundSize: "cover", backgroundPosition: "center", pointerEvents: "none" }} />
      <div aria-hidden="true" style={{ position: "absolute", inset: 0, background: waas != null ? "linear-gradient(180deg, rgba(16,31,60," + (waas + 0.12) + ") 0%, rgba(16,31,60," + waas + ") 45%, rgba(16,31,60," + (waas + 0.2) + ") 100%)" : "linear-gradient(180deg, rgba(16,31,60,0.55) 0%, rgba(16,31,60,0.5) 50%, rgba(16,31,60,0.62) 100%)" }} />
      <div style={{ position: "relative", margin: "0 auto", display: "grid", gridTemplateColumns: "minmax(0,1fr)", gap: "clamp(40px,7vh,72px)", justifyItems: "center", textAlign: "center" }}>
        {review ? (
          /* Met review: deliverables links in één lijn, de review als kaart rechts. */
          <div data-cm-review="1" style={{ width: "100%", maxWidth: "var(--content-max)", justifySelf: "center", display: "grid", gridTemplateColumns: "minmax(0,1fr) minmax(0,440px)", gap: "calc(var(--grid-gap) * 1.2)", alignItems: "center", textAlign: "left" }}>
            <style>{"@media (max-width:860px){[data-cm-review]{grid-template-columns:minmax(0,1fr) !important}}"}</style>
            <div style={{ display: "grid", gap: "var(--space-5)", justifyItems: "start" }}>
              <span style={{ fontFamily: "var(--font-label)", fontWeight: 600, fontSize: "clamp(13px,1.15vw,17px)", letterSpacing: "var(--track-label-wide)", textTransform: "uppercase", color: "var(--dolle-white)" }}>{kop}</span>
              <CMBlokken>{tags.map((t) => <Tag key={t}>{t}</Tag>)}</CMBlokken>
            </div>
            <figure ref={kaart} style={{ margin: 0, justifySelf: "end", width: "100%", display: "grid", gap: "var(--space-4)", padding: "clamp(24px,2.4vw,36px)", borderRadius: 8, background: "rgba(16,31,60,0.78)", border: "1px solid rgba(255,255,255,0.16)", boxShadow: "0 30px 70px rgba(5,12,28,0.35)", backdropFilter: "blur(14px)", WebkitBackdropFilter: "blur(14px)", opacity: kaartAan ? 1 : 0, transform: kaartAan ? "translate3d(0,0,0) scale(1)" : "translate3d(0,40px,0) scale(0.97)", transition: "opacity 900ms cubic-bezier(.2,.72,.16,1) 200ms, transform 1300ms cubic-bezier(.2,.72,.16,1) 200ms" }}>
              <span aria-hidden="true" style={{ display: "flex", gap: "0.15em", fontSize: "13px", color: "var(--dolle-white)" }}><span>★</span><span>★</span><span>★</span><span>★</span><span>★</span></span>
              <blockquote style={{ margin: 0, fontFamily: "var(--font-core)", fontSize: "clamp(16px,1.25vw,19px)", lineHeight: 1.5, color: "var(--dolle-white)", textWrap: "pretty" }}>“{review.tekst}”</blockquote>
              <figcaption style={{ display: "grid", gap: "var(--space-1)" }}>
                <span style={{ fontFamily: "var(--font-label)", fontWeight: 600, fontSize: "var(--size-label)", letterSpacing: "var(--track-label-wide)", textTransform: "uppercase", color: "var(--dolle-white)" }}>{review.naam}</span>
                {review.rol ? <span style={{ fontSize: "var(--size-body-sm)", color: "rgba(255,255,255,0.72)" }}>{review.rol}</span> : null}
              </figcaption>
            </figure>
          </div>
        ) : (
        <div style={{ display: "grid", gap: "var(--space-5)", justifyItems: "center" }}>
          <span style={{ fontFamily: "var(--font-label)", fontWeight: 600, fontSize: "clamp(13px,1.15vw,17px)", letterSpacing: "var(--track-label-wide)", textTransform: "uppercase", color: "var(--dolle-white)" }}>{kop}</span>
          <CMBlokken midden>{tags.map((t) => <Tag key={t}>{t}</Tag>)}</CMBlokken>
        </div>
        )}
        <div aria-hidden="true" style={{ width: "calc(100% + var(--page-margin) * 2)", maxWidth: "none", justifySelf: "center", height: 1, position: "relative" }}>
          <div ref={lijn} style={{ position: "absolute", inset: 0, background: "rgba(255,255,255,0.5)", transformOrigin: "50% 50%", transform: "scaleX(0)" }} />
        </div>
        {cijfers.length ? <div data-cm-data="1" style={{ width: "100%", maxWidth: "var(--content-max)", justifySelf: "center", display: "grid", gridTemplateColumns: "repeat(" + cijfers.length + ",minmax(0,1fr))", gap: "var(--space-6)" }}>
          {cijfers.map((c, i) => (
            <div key={i} style={{ display: "grid", gap: "var(--space-3)", justifyItems: "center" }}>
              <span style={{ fontFamily: "var(--font-label)", fontWeight: 600, fontSize: "var(--size-label-sm)", letterSpacing: "var(--track-label-wide)", textTransform: "uppercase", color: "rgba(255,255,255,0.78)", textWrap: "balance" }}>{c.label}</span>
              <span style={{ fontFamily: "var(--font-core)", fontWeight: 400, fontSize: "clamp(36px,4.6vw,72px)", lineHeight: 1, letterSpacing: "-0.03em", color: "var(--dolle-white)", fontVariantNumeric: "tabular-nums" }}><CMTeller waarde={c.waarde} achter={c.achter} /></span>
            </div>
          ))}
        </div> : null}
      </div>
    </section>
  );
}

/* Plakfoto: het beeld staat stil, de tekst schuift van onder omhoog tot zijn
   onderkant gelijk ligt met die van het beeld, blijft daar even staan en
   scrolt dan samen met het beeld door. Op mobiel gewoon onder elkaar. */
function CMPlak({ beeld, tekst }) {
  const weg = React.useRef(null);
  const foto = React.useRef(null);
  const blok = React.useRef(null);
  const [mobiel, setMobiel] = React.useState(cmMobiel());
  React.useEffect(() => { const r = () => setMobiel(cmMobiel()); window.addEventListener("resize", r); return () => window.removeEventListener("resize", r); }, []);
  useCMScroll(weg, (r, vh) => {
    if (mobiel || !foto.current || !blok.current) return;
    const D = r.height - vh;
    const ruw = cmKlem(-r.top / Math.max(1, D));
    const stijg = cmRustig() ? 1 : cmKlem(ruw / 0.62);
    const fb = foto.current.offsetTop + foto.current.offsetHeight;
    const eind = fb - blok.current.offsetHeight;
    const begin = vh * 0.92;
    blok.current.style.transform = "translate3d(0," + (begin + (eind - begin) * stijg).toFixed(1) + "px,0)";
  }, [mobiel]);
  if (mobiel) {
    return <div style={{ display: "grid", gap: "var(--space-6)" }}>{beeld}<CMTekst>{tekst}</CMTekst></div>;
  }
  return (
    <div ref={weg} style={{ position: "relative", height: "230vh" }}>
      <div style={{ position: "sticky", top: 0, height: "100vh", overflow: "hidden" }}>
        <div style={{ position: "relative", height: "100%", maxWidth: "var(--content-max)", margin: "0 auto", display: "grid", gridTemplateColumns: "minmax(0,0.9fr) minmax(0,1.25fr)", gap: "calc(var(--grid-gap) * 1.1)", alignItems: "center" }}>
          <div style={{ position: "relative", alignSelf: "stretch" }}>
            <div ref={blok} style={{ position: "absolute", left: 0, right: 0, top: 0, maxWidth: "45ch", display: "grid", gap: "var(--space-4)", transform: "translate3d(0,100vh,0)", willChange: "transform" }}>{tekst}</div>
          </div>
          <div ref={foto}>{beeld}</div>
        </div>
      </div>
    </div>
  );
}

/* Komt bij het openen van de pagina rustig omhoog in beeld. */
function CMOpkomst({ children, vertraging }) {
  const [aan, setAan] = React.useState(cmRustig());
  React.useEffect(() => { const t = setTimeout(() => setAan(true), 60); return () => clearTimeout(t); }, []);
  return <div style={{ opacity: aan ? 1 : 0, transform: aan ? "translate3d(0,0,0)" : "translate3d(0,36px,0)", transition: "opacity 1200ms " + CM_EASE + " " + (vertraging || 0) + "ms, transform 1500ms " + CM_ZACHT + " " + (vertraging || 0) + "ms" }}>{children}</div>;
}

/* Verspringende parallax: de directe kinderen van het eerste element dat aan
   sel voldoet (of van de wrapper zelf) bewegen elk met een eigen snelheid mee. */
function CMVerspring({ children, sel, snelheden }) {
  const ref = React.useRef(null);
  useCMScroll(ref, (r, vh) => {
    if (cmRustig()) return;
    const doel = sel ? ref.current.querySelector(sel) : ref.current.firstElementChild;
    if (!doel) return;
    const d = (r.top + r.height / 2) - vh / 2;
    const f = cmMobiel() ? 0.5 : 1;
    [...doel.children].forEach((k, i) => { const s = snelheden[i % snelheden.length] * f; k.style.transform = "translate3d(0," + (d * s).toFixed(1) + "px,0)"; });
  });
  return <div ref={ref}>{children}</div>;
}

/* Parallax binnen het kader: alleen het beeld (img/video) beweegt, het kader
   blijft staan. Het beeld is iets groter dan het kader, zodat er nooit een rand
   zichtbaar wordt. */
function CMBinnen({ children, snelheden, schaal }) {
  const ref = React.useRef(null);
  const S = schaal || 1.2;
  useCMScroll(ref, (r0, vh) => {
    if (cmRustig() || !ref.current) return;
    const f = cmMobiel() ? 0.5 : 1;
    ref.current.querySelectorAll("img, video").forEach((el, i) => {
      const kader = el.parentElement; if (!kader) return;
      const r = kader.getBoundingClientRect();
      if (r.bottom < -100 || r.top > vh + 100) return;
      const d = (r.top + r.height / 2) - vh / 2;
      const max = r.height * (S - 1) / 2 * 0.95;
      const y = Math.max(-max, Math.min(max, d * snelheden[i % snelheden.length] * f));
      el.style.scale = String(S);
      el.style.translate = "0 " + y.toFixed(1) + "px";
    });
  });
  return <div ref={ref}>{children}</div>;
}

/* Store photography, versie A: vastgezette strook die zijwaarts schuift
   terwijl je naar beneden scrolt. */
function CMStrook({ beelden }) {
  const weg = React.useRef(null);
  const spoor = React.useRef(null);
  const raam = React.useRef(null);
  const [lengte, setLengte] = React.useState(0);
  React.useLayoutEffect(() => {
    const meet = () => { if (spoor.current && raam.current) setLengte(Math.max(0, spoor.current.scrollWidth - raam.current.clientWidth)); };
    meet();
    const ro = typeof ResizeObserver !== "undefined" ? new ResizeObserver(meet) : null;
    if (ro && spoor.current) ro.observe(spoor.current);
    window.addEventListener("resize", meet);
    return () => { if (ro) ro.disconnect(); window.removeEventListener("resize", meet); };
  }, []);
  useCMScroll(weg, (r, vh) => {
    const D = r.height - vh;
    const p = cmKlem(-r.top / Math.max(1, D));
    if (spoor.current) spoor.current.style.transform = "translate3d(" + (-p * lengte).toFixed(1) + "px,0,0)";
  }, [lengte]);
  return (
    <div ref={weg} style={{ position: "relative", minWidth: 0, height: "calc(100vh + " + lengte + "px)", margin: "0 calc(var(--page-margin) * -1)" }}>
      <div ref={raam} style={{ position: "sticky", top: 0, width: "100%", maxWidth: "100vw", height: "100vh", overflow: "hidden", display: "flex", alignItems: "center" }}>
        <div ref={spoor} style={{ display: "flex", gap: "var(--space-3)", padding: "0 var(--page-margin)", willChange: "transform" }}>
          {beelden.map((b, i) => (
            <div key={i} style={{ flex: "0 0 auto", height: "clamp(260px,52vh,560px)", aspectRatio: b.ratio, borderRadius: 5, overflow: "hidden", background: "#0a1428" }}>
              <img src={b.src} alt="" loading="lazy" style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

/* Store photography, versie B: twee rijen die tegengesteld meebewegen. */
function CMRijen({ beelden }) {
  const ref = React.useRef(null);
  const a = React.useRef(null);
  const b = React.useRef(null);
  useCMScroll(ref, (r, vh) => {
    const p = cmKlem((vh - r.top) / (vh + r.height));
    const af = cmMobiel() ? 18 : 28;
    if (a.current) a.current.style.transform = "translate3d(" + (-p * af) + "%,0,0)";
    if (b.current) b.current.style.transform = "translate3d(" + (-af + p * af) + "%,0,0)";
  });
  const rij = (lijst, r) => (
    <div ref={r} style={{ display: "flex", gap: "var(--space-3)", width: "max-content", willChange: "transform" }}>
      {lijst.concat(lijst).map((x, i) => (
        <div key={i} style={{ flex: "0 0 auto", height: "clamp(170px,19vw,300px)", aspectRatio: x.ratio, borderRadius: 5, overflow: "hidden", background: "#0a1428" }}>
          <img src={x.src} alt="" loading="lazy" style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }} />
        </div>
      ))}
    </div>
  );
  return (
    <div ref={ref} style={{ display: "grid", gridTemplateColumns: "minmax(0,1fr)", minWidth: 0, gap: "var(--space-3)", overflow: "hidden", margin: "0 calc(var(--page-margin) * -1)" }}>
      {rij(beelden.filter((x, i) => i % 2 === 0), a)}
      {rij(beelden.filter((x, i) => i % 2 === 1), b)}
    </div>
  );
}

/* Automatisch op elke casepagina:
   - [data-cm-groei]: het openingsbeeld groeit bij het openen van klein naar groot.
   - elementen met background-size var(--lijn): de haarlijn trekt zich met de scroll. */
(function () {
  if (typeof window === "undefined" || window.__cmAuto) return;
  window.__cmAuto = true;
  const rustig = cmRustig();
  const groei = (el) => {
    el.dataset.cmG = "1";
    if (rustig) return;
    el.style.transform = "scale(0.55)"; el.style.transformOrigin = "50% 50%"; el.style.transition = "none"; el.style.willChange = "transform";
    let gestart = false;
    const start = () => { if (gestart) return; gestart = true; requestAnimationFrame(() => { el.style.transition = "transform 2400ms cubic-bezier(.22,.8,.2,1)"; el.style.transform = "scale(1)"; }); };
    const media = [...el.querySelectorAll("img,video")].concat(el.matches("img,video") ? [el] : []);
    const klaar = media.filter((m) => (m.tagName === "IMG" ? !(m.complete && m.naturalWidth) : m.readyState < 2));
    if (!klaar.length) setTimeout(start, 250);
    else { let n = klaar.length; klaar.forEach((m) => { const k = () => { if (--n <= 0) setTimeout(start, 200); }; m.addEventListener(m.tagName === "IMG" ? "load" : "loadeddata", k, { once: true }); m.addEventListener("error", k, { once: true }); }); setTimeout(start, 1600); }
  };
  const scan = () => document.querySelectorAll("[data-cm-groei]:not([data-cm-g])").forEach(groei);
  let raf = 0;
  const lijnen = () => {
    raf = 0; const vh = window.innerHeight || 800;
    document.querySelectorAll('[style*="--lijn"]').forEach((el) => {
      const r = el.getBoundingClientRect();
      const t = rustig ? 1 : cmKlem((vh * 0.96 - r.top) / (vh * 0.38));
      el.style.setProperty("--lijn", (t * 100).toFixed(2) + "%");
    });
  };
  const op = () => { if (!raf) raf = requestAnimationFrame(lijnen); };
  const go = () => {
    new MutationObserver(() => { scan(); op(); }).observe(document.body, { childList: true, subtree: true });
    window.addEventListener("scroll", op, { passive: true }); window.addEventListener("resize", op);
    scan(); op();
  };
  if (document.body) go(); else document.addEventListener("DOMContentLoaded", go);
})();


/* Kop zoals Woonexpress: film over het hele scherm; de titel met lijn en
   tags staat onderin en wordt door de blauwe band opgepakt en naar boven
   gedragen. children = de inhoud van de band (intro). */
/* Reeks korte fragmenten als achtergrond: twee lagen die elkaar overvloeien,
   elk fragment speelt een paar seconden. */
function CMReeks({ films, poster, duur = 5.5 }) {
  const a = React.useRef(null), b = React.useRef(null);
  React.useEffect(() => {
    const lagen = [a.current, b.current]; if (!lagen[0] || !lagen[1]) return;
    let i = 0, actief = 0, t0 = 0, raf = 0, weg = false;
    const zet = (v, n) => { v.src = films[n % films.length]; v.load(); };
    zet(lagen[0], 0); zet(lagen[1], 1);
    lagen[0].style.opacity = "1"; lagen[1].style.opacity = "0";
    const p = lagen[0].play(); if (p && p.catch) p.catch(() => {});
    const tik = (nu) => {
      if (weg) return;
      const v = lagen[actief];
      if (!t0 && v.currentTime > 0) t0 = nu;
      /* duur mag per film verschillen (array), zodat elke spot vóór zijn eindkaart wisselt. */
      const d = Array.isArray(duur) ? duur[i % duur.length] : duur;
      if (t0 && nu - t0 > d * 1000) {
        const volgende = lagen[1 - actief];
        const q = volgende.play(); if (q && q.catch) q.catch(() => {});
        volgende.style.opacity = "1"; v.style.opacity = "0";
        const oud = v; i++;
        setTimeout(() => { if (!weg) { oud.pause(); zet(oud, i + 1); } }, 700);
        actief = 1 - actief; t0 = 0;
      }
      raf = requestAnimationFrame(tik);
    };
    raf = requestAnimationFrame(tik);
    return () => { weg = true; cancelAnimationFrame(raf); lagen.forEach((v) => { v.pause(); v.removeAttribute("src"); v.load(); }); };
  }, [films.join("|")]);
  const st = { position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover", display: "block", transition: "opacity 600ms ease" };
  return (
    <React.Fragment>
      <video ref={a} data-film="1" muted playsInline preload="auto" poster={poster} style={st} />
      <video ref={b} data-film="1" muted playsInline preload="auto" style={{ ...st, opacity: 0 }} />
    </React.Fragment>
  );
}

function CMKop({ titel, tags = [], film, poster, go, Knop, Woorden, Tag, children, start, eind, reserve, uitsnede, uitsnedeHoek, reeksDuur }) {
  /* uitsnede: vergroot de film vanuit linksonder, zodat een logo rechtsboven buiten beeld valt. */
  /* uitsnedeHoek="rechts": vergroot vanuit rechtsonder, zodat een logo linksboven wegvalt. */
  const rechts = uitsnedeHoek === "rechts";
  const filmMaat = uitsnede ? { inset: rechts ? "auto 0 0 auto" : "auto auto 0 0", width: (uitsnede * 100) + "%", height: (uitsnede * 100) + "%" } : { inset: 0, width: "100%", height: "100%" };
  /* reserve: lukt het niet om naar het startpunt te springen (server zonder
     range-ondersteuning), dan spelen deze korte fragmenten. */
  const [terug, setTerug] = React.useState(false);
  const vak = React.useRef(null), filmRef = React.useRef(null), waas = React.useRef(null), kop = React.useRef(null), band = React.useRef(null);
  React.useEffect(() => {
    const rustig = cmRustig();
    let raf = 0;
    const navH = () => { const h = document.querySelector("header"); return h && h.offsetHeight ? h.offsetHeight : 92; };
    const zet = () => { if (vak.current) vak.current.style.setProperty("--cm-nav", navH() + "px"); };
    const tik = () => {
      raf = 0; const v = vak.current, b = band.current; if (!v || !b) return;
      const vh = v.offsetHeight || 600, n = navH();
      const p = rustig ? 1 : cmKlem(1 - (b.getBoundingClientRect().top - n) / vh);
      if (filmRef.current && !rustig) filmRef.current.style.transform = "translate3d(0," + (-p * vh * 0.12).toFixed(1) + "px,0) scale(" + (1 + p * 0.06).toFixed(4) + ")";
      if (waas.current) waas.current.style.opacity = (p * 0.55).toFixed(3);
      if (kop.current) { const k = kop.current, off = k.offsetHeight + (parseFloat(getComputedStyle(b).paddingTop) || 0) + 32, e = 1 - p; k.style.transform = "translate3d(0," + (-off * e * e * (3 - 2 * e)).toFixed(1) + "px,0)"; }
    };
    const op = () => { if (!raf) raf = requestAnimationFrame(tik); };
    const rs = () => { zet(); op(); };
    zet(); tik();
    window.addEventListener("scroll", op, { passive: true, capture: true }); window.addEventListener("resize", rs);
    return () => { window.removeEventListener("scroll", op, true); window.removeEventListener("resize", rs); if (raf) cancelAnimationFrame(raf); };
  }, []);
  /* start/eind: alleen dat fragment van de film speelt, in een lus. */
  React.useEffect(() => {
    const v = filmRef.current; if (!v || terug || Array.isArray(film) || (start == null && eind == null)) return;
    const s = start || 0;
    /* Onzichtbaar tot de film echt op het startpunt staat, zodat het begin
       (met logo) nooit in beeld komt. */
    v.style.opacity = "0";
    const toon = () => { if (v.currentTime >= s - 0.05) v.style.opacity = "1"; };
    const begin = () => { if (v.currentTime < s) v.currentTime = s; };
    const tik = () => { if ((eind != null && v.currentTime >= eind) || v.currentTime < s - 0.2) v.currentTime = s; else toon(); };
    v.addEventListener("loadedmetadata", begin); v.addEventListener("timeupdate", tik); v.addEventListener("seeked", toon);
    if (v.readyState >= 1) begin();
    /* Waakhond: blijft de film hangen (gepauzeerd of geen voortgang), dan
       duwen we hem weer aan; na een paar pogingen laden we hem opnieuw vanaf
       de plek waar hij stond. */
    let vorige = -1, vast = 0;
    const t0 = Date.now();
    const hond = setInterval(() => {
      if (reserve && v.currentTime < s - 1 && Date.now() - t0 > 4500) { clearInterval(hond); setTerug(true); return; }
      if (document.hidden) return;
      const b = v.getBoundingClientRect(); if (b.bottom < 0 || b.top > (window.innerHeight || 800)) return;
      if (v.paused) { const p = v.play(); if (p && p.catch) p.catch(() => {}); }
      /* Nog aan het bufferen (grote film): niet als vastgelopen tellen, anders
         start de download telkens opnieuw. */
      if (v.readyState < 3) { vast = 0; vorige = v.currentTime; return; }
      if (Math.abs(v.currentTime - vorige) < 0.01) {
        vast++;
        if (vast === 2) { try { v.currentTime = Math.max(s, v.currentTime + 0.25); } catch (e) {} }
        if (vast >= 4) { const t = v.currentTime; vast = 0; v.src = film + "#t=" + Math.max(s, t).toFixed(2); v.load(); const p = v.play(); if (p && p.catch) p.catch(() => {}); }
      } else vast = 0;
      vorige = v.currentTime;
    }, 1500);
    return () => { clearInterval(hond); v.removeEventListener("loadedmetadata", begin); v.removeEventListener("timeupdate", tik); v.removeEventListener("seeked", toon); };
  }, [start, eind, terug]);
  const H = Woorden || "h1";
  return (
    <div style={{ position: "relative" }}>
      <section ref={vak} className="dolle-dark" style={{ position: "sticky", top: "var(--cm-nav, 92px)", zIndex: 0, height: "calc(100svh - var(--cm-nav, 92px))", minHeight: 420, overflow: "hidden", background: "var(--dolle-navy)" }}>
        {/* Poster als vaste onderlaag, zodat er altijd beeld staat terwijl de film laadt. */}
        {poster ? <img src={poster} alt="" aria-hidden="true" style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover", display: "block" }} /> : null}
        {terug && reserve ? <div ref={filmRef} style={{ position: "absolute", inset: 0, willChange: "transform" }}><CMReeks films={reserve} poster={poster} /></div> : Array.isArray(film) ? <div ref={filmRef} style={{ position: "absolute", inset: 0, willChange: "transform" }}><div style={{ position: "absolute", inset: 0, transform: uitsnede ? "scale(" + uitsnede + ")" : undefined, transformOrigin: "0 0" }}><CMReeks films={film} poster={poster} duur={reeksDuur || 5.5} /></div></div> : <video ref={filmRef} data-film="1" src={start != null ? film + "#t=" + start : film} poster={poster} autoPlay muted loop playsInline preload="auto" style={{ position: "absolute", ...filmMaat, objectFit: "cover", display: "block", willChange: "transform", transformOrigin: uitsnede ? (rechts ? "100% 100%" : "0 100%") : undefined, transition: "opacity 400ms ease" }} />}
        <div ref={waas} aria-hidden="true" style={{ position: "absolute", inset: 0, background: "var(--dolle-navy)", opacity: 0, pointerEvents: "none" }} />
        <div aria-hidden="true" style={{ position: "absolute", inset: 0, background: "linear-gradient(180deg, rgba(16,31,60,0.45) 0%, rgba(16,31,60,0) 22%, rgba(16,31,60,0) 48%, rgba(16,31,60,0.88) 100%)" }} />
        {Knop ? <div style={{ position: "absolute", left: "var(--page-margin)", right: "var(--page-margin)", top: "clamp(88px,12vh,130px)" }}>
          <div style={{ maxWidth: "var(--content-max)", margin: "0 auto" }}>
            <Knop size="sm" variant="secondary" onClick={() => go("cases")} style={{ color: "var(--dolle-white)", borderColor: "transparent" }}>All cases</Knop>
          </div>
        </div> : null}
      </section>
      <section ref={band} className="dolle-dark" style={{ position: "relative", zIndex: 1, background: "var(--dolle-navy)", padding: "var(--space-6) var(--page-margin) var(--space-6)" }}>
        <div ref={kop} style={{ position: "relative", zIndex: 2, maxWidth: "var(--content-max)", margin: "0 auto var(--space-7)", willChange: "transform" }}>
          {Woorden ? <Woorden as="h1" text={titel} style={{ margin: 0, paddingBottom: "var(--space-4)", fontSize: "clamp(36px,5.4vw,84px)", lineHeight: 1.02, letterSpacing: "var(--track-heading)", color: "var(--dolle-white)" }} /> : <h1 style={{ margin: 0, paddingBottom: "var(--space-4)", fontSize: "clamp(36px,5.4vw,84px)", lineHeight: 1.02, color: "var(--dolle-white)" }}>{titel}</h1>}
          <div style={{ height: 1, background: "rgba(255,255,255,0.4)" }} />
          <div style={{ display: "flex", gap: "var(--space-2)", flexWrap: "wrap", paddingTop: "var(--space-4)" }}>
            {tags.map((k, n) => <Tag key={k}>{window.CMVulIn ? <window.CMVulIn vertraging={250 + n * 160}>{k}</window.CMVulIn> : k}</Tag>)}
          </div>
        </div>
        {children}
      </section>
    </div>
  );
}

/* Intro: tekst links zakt met de scroll mee tot zijn onderkant gelijk ligt
   met die van het beeld rechts. */
function CMIntro({ tekst, beeld }) {
  /* Native sticky in plaats van per frame verschuiven: loopt zonder vertraging mee. */
  return (
    <div data-cm-intro="1" style={{ maxWidth: "var(--content-max)", margin: "0 auto", display: "grid", gridTemplateColumns: "minmax(0,0.75fr) minmax(0,1.6fr)", gap: "calc(var(--grid-gap) * 1.1)", alignItems: "stretch" }}>
      <style>{"@media (max-width:860px){[data-cm-intro]{grid-template-columns:minmax(0,1fr) !important}[data-cm-intro]>div>div{position:static !important}}"}</style>
      <div style={{ minWidth: 0 }}>
        <div style={{ position: "sticky", top: "116px", maxWidth: "45ch", display: "grid", gap: "var(--space-4)" }}>{tekst.map((z, i) => <p key={i} className="dolle-lead" style={{ margin: 0 }}>{z}</p>)}</div>
      </div>
      <div style={{ minWidth: 0, alignSelf: "start" }}>{beeld}</div>
    </div>
  );
}

Object.assign(window, { CMKop, CMIntro, CMData, CMTeller, CMVulIn, CMWildly, CMAccordeon, CMStapel, CMVulTekst, CMBlokken, CMPin, CMInScroll, CMScrollBeeld, CMBinnen, CMOpkomst, CMVerspring, useCMScroll, useCMBinnen, CMLijn, CMMasker, CMTekst, CMOpeningBeeld, CMPlak, CMStrook, CMRijen });
