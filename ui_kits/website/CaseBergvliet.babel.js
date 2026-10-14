const BV_DS = window.DesignSystem_8f95a2;
const { Kicker: BVKicker, Tag: BVTag, Button: BVButton } = BV_DS;
const BVWords = window.Words || (({ as = "span", text, style }) => React.createElement(as, { style: style }, text));

const BV_BEELD = "../../assets/cases/bergvliet/";
const BV_VID = "../../assets/video/";
const BV_KOLOMGAT = "calc(var(--grid-gap) * 1.1)";

const BV_LOOP = (n) => BV_VID + "bergvliet-loop-0" + n + ".mp4";
const BV_POSTER = (n) => BV_BEELD + "bergvliet-" + n + "-poster-web.jpg";
/* Band onder de intro: loops uit alle films door elkaar, wisselende breedte. */
const BV_BAND = [
  { video: BV_VID + "bergvliet-band-01.mp4", r: 16 / 9 },
  { video: BV_VID + "bergvliet-band-02.mp4", r: 21 / 9 },
  { video: BV_VID + "bergvliet-band-03.mp4", r: 4 / 5 },
  { video: BV_VID + "bergvliet-band-04.mp4", r: 16 / 9 },
  { video: BV_VID + "bergvliet-band-05.mp4", r: 1 },
  { video: BV_VID + "bergvliet-band-06.mp4", r: 3 / 4 }
];
/* Carrousel onder de corporate film: stills en loops uit de film. */
const BV_CORPORATE = [
  { src: BV_BEELD + "bergvliet-aerial-01-web.jpg", r: 1.79 },
  { src: BV_BEELD + "bergvliet-golf-01-web.jpg", r: 1.2 },
  { src: BV_BEELD + "bergvliet-horeca-01-web.jpg", r: 1.79 },
  { video: BV_LOOP(2), r: 4 / 5 },
  { src: BV_BEELD + "bergvliet-golf-05-web.jpg", r: 1.18 },
  { src: BV_BEELD + "bergvliet-spa-01-web.jpg", r: 1.37 },
  { video: BV_LOOP(4), r: 16 / 9 },
  { src: BV_BEELD + "bergvliet-events-01-web.jpg", r: 1.78 },
  { src: BV_BEELD + "bergvliet-golf-06-web.jpg", r: 1.42 },
  { src: BV_BEELD + "bergvliet-villas-02-web.jpg", r: 1.65 },
  { src: BV_BEELD + "bergvliet-golf-04-web.jpg", r: 1.55 },
  { src: BV_BEELD + "bergvliet-horeca-02-web.jpg", r: 1.78 },
  { video: BV_LOOP(6), r: 3 / 2 },
  { src: BV_BEELD + "bergvliet-course-05-web.jpg", r: 1.78 },
  { src: BV_BEELD + "bergvliet-golf-02-web.jpg", r: 1.45 },
  { src: BV_BEELD + "bergvliet-villas-01-web.jpg", r: 1.55 },
  { video: BV_LOOP(1), r: 16 / 9 },
  { src: BV_BEELD + "bergvliet-course-04-web.jpg", r: 1.79 },
  { src: BV_BEELD + "bergvliet-golf-07-web.jpg", r: 1.78 },
  { video: BV_LOOP(3), r: 4 / 5 },
  { src: BV_BEELD + "bergvliet-course-01-web.jpg", r: 1.79 },
  { src: BV_BEELD + "bergvliet-golf-03-web.jpg", r: 1.78 },
  { video: BV_LOOP(5), r: 3 / 2 }
];
const BV_DEELFILMS = [
  { naam: "Golf Academy", film: BV_VID + "bergvliet-golf-academy.mp4", poster: BV_POSTER("golf-academy") },
  { naam: "Villas", film: BV_VID + "bergvliet-villas.mp4", poster: BV_BEELD + "bergvliet-villas-02-web.jpg" },
  { naam: "Hospitality & events", film: BV_VID + "bergvliet-horeca.mp4", poster: BV_BEELD + "bergvliet-horeca-01-web.jpg" }
];

/* Doorlopende band naar links, zoals de andere carrousels; stopt niet bij hover. */
function BVBand({ items, hoog, sleep = false, schuif = true, golf = false, kap = 0 }) {
  const band = React.useRef(null);
  React.useEffect(() => {
    const el = band.current;
    if (!el) return;
    const reduce = window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    let vorige = performance.now(), raf, handTot = 0, pos = 0;
    const helft = () => el.scrollWidth / 2;
    const rond = () => { const h = helft(); if (h > 0) { if (el.scrollLeft >= h) el.scrollLeft -= h; if (el.scrollLeft <= 0) el.scrollLeft += h; } };
    /* Muiswiel en trackpad schuiven de band zelf; daarna loopt hij rustig verder. */
    const wiel = (e) => {
      const d = Math.abs(e.deltaX) > Math.abs(e.deltaY) ? e.deltaX : e.deltaY;
      if (!d) return;
      e.preventDefault();
      el.scrollLeft += d;
      rond(); pos = el.scrollLeft;
      handTot = performance.now() + 1600;
    };
    /* Slepen met muis en swipen met de vinger, op elke band. Na loslaten
       glijdt hij even door en pakt daarna zijn eigen tempo weer op. */
    let neer = false, x0 = 0, l0 = 0, vx = 0, tLaatst = 0, xLaatst = 0, glij = 0;
    const down = (e) => { neer = true; x0 = xLaatst = e.clientX; l0 = el.scrollLeft; tLaatst = performance.now(); vx = 0; glij = 0; handTot = Infinity; el.style.cursor = "grabbing"; };
    const move = (e) => {
      if (!neer) return;
      const nu = performance.now(), dt = Math.max(1, nu - tLaatst);
      vx = vx * 0.6 + ((xLaatst - e.clientX) / dt) * 0.4; xLaatst = e.clientX; tLaatst = nu;
      el.scrollLeft = l0 - (e.clientX - x0); rond(); pos = el.scrollLeft;
    };
    const up = () => { if (!neer) return; neer = false; el.style.cursor = "grab"; glij = Math.max(-4, Math.min(4, vx)); handTot = performance.now() + 1400; pos = el.scrollLeft; };
    const sleepKlik = (e) => { if (Math.abs(xLaatst - x0) > 4) { e.preventDefault(); e.stopPropagation(); } };
    el.addEventListener("pointerdown", down);
    el.addEventListener("click", sleepKlik, true);
    el.addEventListener("dragstart", (e) => e.preventDefault());
    window.addEventListener("pointermove", move);
    window.addEventListener("pointerup", up);
    window.addEventListener("pointercancel", up);
    pos = el.scrollLeft;
    const tik = (nu) => {
      const dt = Math.min(64, nu - vorige); vorige = nu;
      if (!neer && Math.abs(glij) > 0.02) { pos += glij * dt; el.scrollLeft = pos; rond(); pos = el.scrollLeft; glij *= Math.pow(0.94, dt / 16.7); }
      if (!reduce && nu > handTot) { pos += dt * 0.035; el.scrollLeft = pos; rond(); if (Math.abs(el.scrollLeft - pos) > 2) pos = el.scrollLeft; }
      /* Golf: elk kader verandert rustig van verhouding terwijl het door de band
         schuift (16:9 richting vierkant, vierkant richting staand). Alleen de hoogte
         beweegt, dus de band zelf verspringt niet. */
      if (golf && !reduce) {
        const t = nu / 1000;
        el.querySelectorAll("[data-golf]").forEach((k) => {
          const fase = parseFloat(k.dataset.golf);
          const b = parseFloat(k.dataset.r);
          const f = 1 + 0.16 * Math.sin(t * 0.32 + fase);
          const r = Math.max(0.5625, Math.min(1.7778, b * f));
          k.style.width = "calc(" + hoog + " * " + r.toFixed(4) + ")";
        });
      }
      /* Liggende foto's staan krap in hun kader; het beeld schuift mee met de band. */
      if (schuif) {
        const vb = el.getBoundingClientRect(), mid = vb.left + vb.width / 2;
        el.querySelectorAll("[data-schuif]").forEach((img) => {
          const r = img.parentNode.getBoundingClientRect();
          if (r.right < vb.left - 200 || r.left > vb.right + 200) return;
          const p = Math.max(-1, Math.min(1, (r.left + r.width / 2 - mid) / (vb.width / 2 + r.width / 2)));
          img.style.transform = "translate3d(" + (p * -18).toFixed(2) + "%,0,0)";
        });
      }
      raf = requestAnimationFrame(tik);
    };
    raf = requestAnimationFrame(tik);
    return () => { cancelAnimationFrame(raf); el.removeEventListener("pointerdown", down); window.removeEventListener("pointermove", move); window.removeEventListener("pointerup", up); window.removeEventListener("pointercancel", up); el.removeEventListener("click", sleepKlik, true); };
  }, [sleep, golf, hoog]);
  /* Alleen video's die in beeld zijn spelen; de rest staat stil, zodat de band soepel loopt. */
  React.useEffect(() => {
    const el = band.current;
    if (!el || !("IntersectionObserver" in window)) return;
    /* Alleen laden als de band zelf in (of vlak bij) het scherm staat én de
       film horizontaal in beeld schuift; anders vreten de films alle
       verbindingen op en blijven foto's elders op de pagina leeg. */
    let inBeeld = false;
    const binnen = new Set();
    const pas = () => el.querySelectorAll("[data-bandvid]").forEach((v) => {
      if (inBeeld && binnen.has(v)) { if (v.preload !== "auto") v.preload = "auto"; const p = v.play(); if (p && p.catch) p.catch(() => {}); }
      else if (!v.paused) v.pause();
    });
    const io = new IntersectionObserver((lijst) => { lijst.forEach((e) => { if (e.isIntersecting) binnen.add(e.target); else binnen.delete(e.target); }); pas(); }, { root: el, rootMargin: "0px 300px 0px 300px", threshold: 0 });
    const pagina = new IntersectionObserver((l) => { inBeeld = l.some((e) => e.isIntersecting); pas(); }, { rootMargin: "200px 0px 200px 0px" });
    pagina.observe(el);
    el.querySelectorAll("[data-bandvid]").forEach((v) => io.observe(v));
    return () => { io.disconnect(); pagina.disconnect(); };
  }, [items]);
  const reeks = items.concat(items);
  return (
    <div ref={band} style={{ overflowX: sleep ? "auto" : "hidden", scrollbarWidth: "none", msOverflowStyle: "none", width: "100%", cursor: "grab", touchAction: "pan-y", userSelect: "none", WebkitUserSelect: "none" }}>
      <div style={{ display: "flex", gap: "var(--space-3)", width: "max-content", alignItems: "flex-start" }}>
        {reeks.map((s, i) => {
          const krap = schuif && !s.video && s.r > 1.2;
          return (
          <span key={i} data-golf={golf ? ((i % items.length) * 2.1).toFixed(2) : undefined} data-r={golf ? (krap ? Math.max(1.1, s.r * 0.72) : s.r).toFixed(4) : undefined} style={{ flex: "0 0 auto", height: hoog, width: golf ? "calc(" + hoog + " * " + (krap ? Math.max(1.1, s.r * 0.72) : s.r).toFixed(4) + ")" : undefined, aspectRatio: golf ? undefined : String(krap ? Math.max(1.1, s.r * 0.72) : s.r), overflow: "hidden", borderRadius: 5, background: "#0a1428" }}>
            {s.video
              ? <video src={s.video} muted loop playsInline preload="none" draggable="false" data-bandvid="1" onTimeUpdate={kap ? (e) => { const v = e.currentTarget; if (v.duration && v.currentTime > v.duration - kap) v.currentTime = 0.05; } : undefined} ref={(el) => { if (el) { el.muted = true; el.defaultMuted = true; } }} style={{ display: "block", width: "100%", height: "100%", objectFit: "cover", pointerEvents: "none" }} />
              : krap
              ? <img src={s.src} alt="" decoding="async" draggable="false" data-schuif="1" style={{ display: "block", width: "170%", maxWidth: "none", height: "100%", marginLeft: "-35%", objectFit: "cover", pointerEvents: "none", willChange: "transform" }} />
              : <img src={s.src} alt="" decoding="async" draggable="false" style={{ display: "block", width: "100%", height: "100%", objectFit: "cover", pointerEvents: "none" }} />}
          </span>
          );
        })}
      </div>
    </div>
  );
}

/* Projectblokken. Beeld volgt; tot die tijd een leeg kader met hoekmarkeringen. */
const BV_INTRO = [
  "Landgoed Bergvliet is a historic golf estate in Oosterhout, in the south of the Netherlands. A challenging course, luxury holiday villas, Burgundian dining and wellness close by: one place with many reasons to visit.",
  "DOLLE wrote the production plan and filmed the whole estate in two days, from the first tee to the spa. The footage became a corporate film, a film for each part of the estate and a recruitment film, and has been running as a national TV commercial on Ziggo Sport since 2024."
];
/* Cijfers voor het datablok; voorlopig, tot de echte aantallen binnen zijn. */
const BV_DATA = [
  { label: "Views generated", waarde: 1.2, achter: "M+" },
  { label: "Production days", waarde: 2 },
  { label: "Films delivered", waarde: 8 },
  { label: "Locations filmed", waarde: 6 }
];
const BV_BLOKKEN = [
  { plek: "film", kop: "Production plan", tekst: "The estate has more sides than most productions can cover in a week. DOLLE sat down with Bergvliet first and built a shooting plan around that: what to film where, in which order, and in what light, so two days on location would yield material for every part of the estate and keep working long after the shoot.", kader: "3 / 2", src: null },
  { plek: "film", kop: "Corporate film", tekst: "The film that carries the whole estate: the course, the restaurants, the spa and the villas in one story.", kader: "16 / 9", src: null },
  { deel: true, kop: "The estate in parts", tekst: "Each part of Bergvliet also got its own film: the Golf Academy, the villas, the hospitality and event spaces, and Spa One. Same visual language, separate stories, so every department can tell its own without falling outside the brand.", kader: "4 / 5", src: null },
  { kop: "Aerial", tekst: "Drone work over the course and the grounds, giving the scale of the estate in a way the ground never can. Used across the films and as standalone footage. For the course itself DOLLE also made hole explainers: each hole flown from tee to green, with par and stroke index on screen.", kader: "21 / 9", src: null, video: BV_LOOP(1), extra: { film: BV_VID + "bergvliet-hole-17.mp4", poster: BV_BEELD + "bergvliet-hole-17-poster-web.jpg", onder: "GOLF COURSE EXPLAINER · HOLE 17" } },
];

/* Drie deelfilms naast elkaar; de film die speelt groeit tijdelijk uit, de
   andere twee schuiven in. Na afloop gaat alles terug naar gelijke breedte. */
function BVDeelfilms({ films, groot = 3.2, klein = 0.6, onAan, watchHover = true, vloei = "900ms cubic-bezier(.16,.84,.24,1)" }) {
  const lijst = films || BV_DEELFILMS;
  /* Na pauze of afloop gaat een film terug naar zijn poster met WATCH. */
  const [sleutels, setSleutels] = React.useState(() => lijst.map(() => 0));
  const terug = (i) => setSleutels((s) => s.map((n, j) => (j === i ? n + 1 : n)));
  const [aan, setAan] = React.useState(-1);
  const aanRef = React.useRef(-1);
  aanRef.current = aan;
  const vak = React.useRef(null);
  React.useEffect(() => {
    const el = vak.current;
    if (!el) return;
    const idx = (e) => [...el.children].findIndex((c) => c.contains(e.target));
    const klaar = (e) => { const i = idx(e); setAan(-1); if (i > -1) terug(i); };
    /* Pauze op de film die groot staat: terug naar gelijke breedte. */
    const pauze = (e) => { const i = idx(e); if (i < 0 || e.target.ended) return; if (i === aanRef.current) setAan(-1); terug(i); };
    el.addEventListener("pause", pauze, true);
    const speelt = (e) => { const i = [...el.children].findIndex((c) => c.contains(e.target)); if (i > -1) setAan(i); };
    el.addEventListener("ended", klaar, true);
    el.addEventListener("play", speelt, true);
    return () => { el.removeEventListener("pause", pauze, true); el.removeEventListener("ended", klaar, true); el.removeEventListener("play", speelt, true); };
  }, []);
  React.useEffect(() => { if (onAan) onAan(aan); }, [aan]);
  /* Klik ergens anders: de film stopt en alles gaat terug naar beginstand. */
  React.useEffect(() => {
    if (aan < 0) return;
    const buiten = (e) => { const el = vak.current; if (!el || el.contains(e.target)) return; if (e.target.closest && e.target.closest("[data-deel-binnen]")) return; el.querySelectorAll("video").forEach((v) => v.pause()); setAan(-1); };
    document.addEventListener("pointerdown", buiten, true);
    return () => document.removeEventListener("pointerdown", buiten, true);
  }, [aan]);
  React.useEffect(() => {
    if (aan < 0 || !vak.current) return;
    /* Alleen de actieve film speelt. */
    [...vak.current.querySelectorAll("video")].forEach((v, i) => { if (!vak.current.children[aan].contains(v)) v.pause(); });
  }, [aan]);
  const kol = lijst.map((f, i) => aan < 0 ? "minmax(0,1fr)" : i === aan ? "minmax(0," + groot + "fr)" : "minmax(0," + klein + "fr)").join(" ");
  return (
    <div ref={vak} data-bv-deel="1" style={{ display: "grid", gridTemplateColumns: kol, gap: "var(--space-4)", alignItems: "start", transition: "grid-template-columns " + vloei }}>
      {lijst.map((f, i) => (
        <div key={f.naam + "-" + sleutels[i]} onClickCapture={() => setAan(i)} style={{ minWidth: 0, opacity: aan < 0 || aan === i ? 1 : 0.55, transition: "opacity 900ms var(--ease-dolle)" }}>
          <window.CaseFilm bron={f.film} poster={f.poster} kader={f.kader} watchHover={watchHover} onderschrift={f.naam.toUpperCase()} watch watchSchaal={aan === i ? 2.4 : aan < 0 ? 1.7 : 0.9} />
        </div>
      ))}
    </div>
  );
}

/* Speelt alleen zolang de muis erboven hangt; zonder geluid. */
function BVHover({ bron, poster, kader, onder }) {
  const ref = React.useRef(null);
  const aan = () => { const el = ref.current; if (el) { el.muted = true; el.play().catch(() => {}); } };
  const uit = () => { const el = ref.current; if (el) el.pause(); };
  return (
    <div style={{ display: "grid", gap: "var(--space-3)", minWidth: 0 }}>
      <span onMouseEnter={aan} onMouseLeave={uit} style={{ position: "relative", display: "block", aspectRatio: kader, overflow: "hidden", borderRadius: 5, background: "#0a1428" }}>
        <video ref={ref} src={bron} poster={poster} muted loop playsInline preload="metadata" style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover", display: "block" }} />
      </span>
      {onder ? <BVKicker size="sm" style={{ color: "var(--text-muted)" }}>{onder}</BVKicker> : null}
    </div>
  );
}

function BVKader({ kader, src, video }) {
  const leeg = !src && !video;
  return (
    <span style={{ position: "relative", display: "block", aspectRatio: kader, overflow: "hidden", borderRadius: 5, background: "#0a1428", minWidth: 0 }}>
      {src ? <img src={src} alt="" decoding="async" style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover", display: "block" }} /> : null}
      {video ? <video src={video} autoPlay muted loop playsInline preload="metadata" style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover", display: "block" }} /> : null}
      {leeg ? (
        <React.Fragment>
          <span style={{ position: "absolute", left: "8%", top: "10%", color: "var(--dolle-white)", opacity: 0.9 }}>
            <svg aria-hidden="true" viewBox="0 0 52 52" width="20" height="20" fill="none" style={{ display: "block" }}><path d="M6 40 V6 H40" stroke="currentColor" strokeWidth="12" /></svg>
          </span>
          <span style={{ position: "absolute", right: "8%", bottom: "10%", color: "var(--dolle-white)", opacity: 0.9 }}>
            <svg aria-hidden="true" viewBox="0 0 52 52" width="20" height="20" fill="none" style={{ display: "block" }}><path d="M46 12 V46 H12" stroke="currentColor" strokeWidth="12" /></svg>
          </span>
        </React.Fragment>
      ) : null}
    </span>
  );
}

function BVBlok({ b, i }) {
  const beeldLinks = i % 2 === 1;
  /* Bij Aerial (twee films onder elkaar) loopt de tekst mee tot de onderkant van het beeld. */
  const plak = !!b.extra;
  const tekst = (
    <div style={{ display: "grid", gap: "var(--space-3)", justifyItems: "start", maxWidth: "45ch", alignSelf: "start", ...(plak ? { position: "sticky", top: "calc(var(--bv-nav, 92px) + 24px)" } : {}) }}>
      <h2 style={{ margin: 0, fontFamily: "var(--font-core)", fontWeight: "var(--weight-heading)", fontSize: "clamp(19px,2vw,27px)", letterSpacing: "var(--track-heading)", color: "var(--text-heading)" }}>{b.kop}</h2>
      <p style={{ margin: 0, fontSize: "var(--size-body)", lineHeight: "var(--lh-body)" }}>{b.tekst}</p>
    </div>
  );
  const kader = <BVKader kader={b.kader} src={b.src} video={b.video} />;
  /* Aerial: de dronefilm plus de hole 17-explainer, elk met WATCH. */
  const beeld = b.extra && window.CaseFilm
    ? <div style={{ display: "grid", gap: "var(--space-4)", minWidth: 0 }}><window.CaseFilm bron={b.video} poster={b.poster || BV_BEELD + "bergvliet-aerial-01-web.jpg"} kader={b.kader} onderschrift="AERIAL · LANDGOED BERGVLIET" watch /><window.CaseFilm bron={b.extra.film} poster={b.extra.poster} kader="16 / 9" onderschrift={b.extra.onder ? String(b.extra.onder).toUpperCase() : "HOLE 17 · EXPLAINER"} watch /></div>
    : kader;
  return (
    <div style={{ display: "grid", gap: "var(--space-6)" }}>
    {window.CMLijn ? <window.CMLijn /> : null}
    <div data-bv-blok="1" style={{ display: "grid", gridTemplateColumns: beeldLinks ? "minmax(0,1.25fr) minmax(0,0.9fr)" : "minmax(0,0.9fr) minmax(0,1.25fr)", gap: BV_KOLOMGAT, alignItems: "start" }}>
      {beeldLinks ? [<React.Fragment key="b">{beeld}</React.Fragment>, <React.Fragment key="t">{tekst}</React.Fragment>] : [<React.Fragment key="t">{tekst}</React.Fragment>, <React.Fragment key="b">{beeld}</React.Fragment>]}
    </div>
    </div>
  );
}

function CaseBergvliet({ go }) {
  const Film = window.CaseFilm;
  const Rij = window.CaseRij;
  const Haarlijn = window.Haarlijn;
  const [open, setOpen] = React.useState(-1);
  React.useEffect(() => {
    const zet = () => { const h = document.querySelector("header"); document.documentElement.style.setProperty("--bv-nav", ((h && h.offsetHeight) || 92) + "px"); };
    zet(); window.addEventListener("resize", zet);
    return () => window.removeEventListener("resize", zet);
  }, []);
  const namen = ["Piet Klerkx", "Kiela", "MSO Group", "Veteranen Search Team"];
  const verwant = namen.map((n) => (window.CASES || []).find((c) => c.klant === n)).filter(Boolean);
  if (!Film) return null;
  const sectie = { background: "var(--dolle-navy)", color: "var(--text-body)", padding: "var(--space-6) var(--page-margin)" };
  const binnen = { maxWidth: "var(--content-max)", margin: "0 auto", display: "grid", gap: "var(--space-5)" };
  return (
    <React.Fragment>

      <style>{"@media (max-width:860px){[data-bv-blok],[data-bv-opening],[data-bv-deel]{grid-template-columns:minmax(0,1fr) !important}[data-bv-blok]>div{position:static !important}}"}</style>

      {/* 01 · OPENING — zelfde kop als Woonexpress, met de sproeiers uit de corporate film */}
      {window.CMKop ? (
        <window.CMKop titel="Landgoed Bergvliet" tags={["Media production", "Growth"]} film={BV_VID + "bergvliet-hero.mp4"} poster={BV_POSTER("corporate")} go={go} Knop={BVButton} Woorden={window.Words || null} Tag={window.DolleTag || BVTag}>
          {window.CMIntro ? <window.CMIntro tekst={BV_INTRO} beeld={window.CMOpeningBeeld ? <window.CMOpeningBeeld modus="groei" start={0.3} ratio="16 / 9" src={BV_BEELD + "bergvliet-aerial-01-web.jpg"} /> : null} /> : null}
        </window.CMKop>
      ) : null}

      {/* Band met loops, direct onder de intro */}
      <section className="dolle-dark" style={{ background: "var(--dolle-navy)", padding: "0 var(--page-margin) var(--space-6)" }}>
        <div style={{ maxWidth: "var(--content-max)", margin: "0 auto" }}>
          <BVBand items={BV_BAND} hoog="clamp(200px,24vw,340px)" golf />
        </div>
      </section>

      {/* 02 · DIENSTKOP + HOOFDFILM */}
      <section className="dolle-dark" style={sectie}>
        <div style={binnen}>
          {window.CMLijn ? <window.CMLijn /> : null}
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", gap: "var(--space-6)", flexWrap: "wrap", paddingTop: "var(--space-2)" }}>
            <div style={{ display: "grid", gap: "var(--space-3)", maxWidth: "45ch" }}>
              <h2 style={{ margin: 0, fontFamily: "var(--font-core)", fontWeight: "var(--weight-heading)", fontSize: "clamp(22px,2.6vw,36px)", letterSpacing: "var(--track-heading)", color: "var(--text-heading)" }}>Corporate film</h2>
              <p style={{ margin: 0, fontSize: "var(--size-body)", lineHeight: "var(--lh-body)" }}>{BV_BLOKKEN.find((b) => b.kop === "Corporate film").tekst}</p>
            </div>
            <span style={{ fontFamily: "var(--font-core)", fontWeight: "var(--weight-heading)", fontSize: "clamp(18px,2.2vw,30px)", letterSpacing: "var(--track-wildly)", textTransform: "uppercase", color: "var(--text-heading)", whiteSpace: "nowrap" }}>
              Wildly <span style={{ color: "var(--text-accent)" }}>Visible</span>
            </span>
          </div>
          <Film bron={BV_VID + "bergvliet-corporate.mp4"} poster={BV_POSTER("corporate")} onderschrift="CORPORATE FILM · LANDGOED BERGVLIET" watch />
          <div data-bv-blok="1" style={{ display: "grid", gridTemplateColumns: "minmax(0,1fr) minmax(0,1fr)", gap: BV_KOLOMGAT, paddingTop: "var(--space-4)" }}>
            {BV_BLOKKEN.filter((b) => b.plek === "film" && b.kop !== "Corporate film").map((b) => (
              <div key={b.kop} style={{ display: "grid", gap: "var(--space-3)", alignContent: "start", maxWidth: "45ch" }}>
                {b.kop !== "Corporate film" ? <h2 style={{ margin: 0, fontFamily: "var(--font-core)", fontWeight: "var(--weight-heading)", fontSize: "clamp(19px,2vw,27px)", letterSpacing: "var(--track-heading)", color: "var(--text-heading)" }}>{b.kop}</h2> : null}
                <p style={{ margin: 0, fontSize: "var(--size-body)", lineHeight: "var(--lh-body)" }}>{b.tekst}</p>
              </div>
            ))}
          </div>
          <BVBand items={BV_CORPORATE} hoog="clamp(170px,19vw,280px)" sleep />
        </div>
      </section>

      {/* 03 · PROJECTBLOKKEN */}
      <section className="dolle-dark" style={sectie}>
        <div style={{ ...binnen, gap: "var(--space-6)" }}>
          {BV_BLOKKEN.filter((b) => !b.plek).map((b, i) => b.deel ? (
            <div key={b.kop} style={{ display: "grid", gap: "var(--space-5)" }}>
              {window.CMLijn ? <window.CMLijn /> : null}
              <div style={{ display: "grid", gap: "var(--space-3)", maxWidth: "45ch", paddingTop: "var(--space-4)" }}>
                <h2 style={{ margin: 0, fontFamily: "var(--font-core)", fontWeight: "var(--weight-heading)", fontSize: "clamp(19px,2vw,27px)", letterSpacing: "var(--track-heading)", color: "var(--text-heading)" }}>{b.kop}</h2>
                <p style={{ margin: 0, fontSize: "var(--size-body)", lineHeight: "var(--lh-body)" }}>{b.tekst}</p>
              </div>
              {/* Zoals de studio shoot bij Woonexpress: hover opent en speelt een film. */}
              {window.CMAccordeon ? <window.CMAccordeon items={BV_DEELFILMS.map((f) => ({ video: f.film + "#t=0.5", label: f.naam }))} ratio={16 / 9} hoog="clamp(300px,34vw,540px)" /> : <BVDeelfilms films={BV_DEELFILMS} groot={2.2} klein={0.7} />}
            </div>
          ) : <BVBlok key={b.kop} b={b} i={i} />)}
        </div>
      </section>

      {/* 04 · DELIVERABLES */}
      {window.CMData ? <window.CMData kop="Deliverables" beeld={BV_BEELD + "bergvliet-golf-07-web.jpg"} waas={0.42} cijfers={BV_DATA} Tag={DolleTag} tags={["Concept", "Direction", "Production", "Edit", "Drone"]} review={{ tekst: "DOLLE understood straight away what makes the estate special. They planned every part of the shoot with us and captured the course, the restaurants, the spa and the villas in two days. The footage now runs everywhere, from our website to national TV.", naam: "Name", rol: "Landgoed Bergvliet" }} /> : null}

      {/* 05 · RELATED WORK */}
      <section className="dolle-dark" style={{ background: "var(--dolle-navy)", padding: "var(--space-6) var(--page-margin)" }}>
        <div style={{ maxWidth: "var(--content-max)", margin: "0 auto", display: "grid", gap: "var(--space-4)", gridTemplateColumns: "minmax(0,1fr)" }}>
          <BVKicker style={{ display: "block", whiteSpace: "nowrap", color: "var(--text-muted)" }}>Related work</BVKicker>
          <div style={{ display: "grid", gridTemplateColumns: "minmax(0,1fr)" }}>
            {Rij ? verwant.map((c, i) => (
              <Rij key={c.id} c={c} i={i} go={go} open={open === c.id} onToggle={() => setOpen(open === c.id ? -1 : c.id)} />
            )) : null}
            {Haarlijn ? <Haarlijn /> : null}
          </div>
        </div>
      </section>

      {/* 06 · CTA */}
      {window.HomeConversie ? <window.HomeConversie go={go} tone="dark" /> : null}

    </React.Fragment>
  );
}

window.CaseBergvliet = CaseBergvliet;
Object.assign(window, { BVBand, BVHover, BVKader, BVDeelfilms });
