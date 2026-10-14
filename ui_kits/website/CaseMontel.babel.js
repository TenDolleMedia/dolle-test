const DS = window.DesignSystem_8f95a2;
const { Kicker, Button, Icon } = DS;
const CornerRule = DS.CornerRule || (({ children }) => children || null);
const IMG = "../../assets/cases/web/";
const SET = "../../assets/photography/dolle-set-01.jpg";
const POSTER = "../../assets/hero-showreel-frame.png";

/* CASE DETAIL · MONTEL · variant EXTENDED. De pagina opent als een rij van de
   overzichtspagina: naam, tags, haarlijn, dan tekst links en beeld rechts. Van
   daaruit loopt hetzelfde ritme door: alternerend tekst en beeld, secties zo
   hoog als hun inhoud, scheiding door lijn of kleurwissel in plaats van lucht.
   Beeld is placeholder-materiaal; ratio's en plek liggen vast. */

/* Openingscluster: 2 tot 5 items in gemengde ratio's die de rechterkolom
   volmaken. Video-items krijgen een play-merk. */
const OPENING = [
  { src: SET, ratio: "3 / 2", span: 2 },
  { src: IMG + "case-03.jpg", ratio: "4 / 5" },
  { src: IMG + "case-05.jpg", ratio: "9 / 16", film: true }
];

const BLOKKEN = [
  { kop: "Campaigns", tekst: "Nine campaigns in the last two years. DOLLE rents entire homes and rebuilds them as sets: furniture in, rooms dressed, every space turned into a campaign environment before a single frame is shot. Location scouting, set design, direction, production and edit under one roof. The result reads as a home rather than a showroom, which is exactly why it performs.",
    strook: [{ src: IMG + "case-03.jpg", ratio: "3 / 2" }, { src: SET, ratio: "4 / 5" }, { src: IMG + "case-05.jpg", ratio: "9 / 16", film: true }, { src: IMG + "case-01.jpg", ratio: "3 / 2" }] },
  { kop: "TV commercials", tekst: "Four national commercials. DOLLE takes them from concept to broadcast-ready and cuts the same production down for every channel it has to live on, so one shoot carries both reach and feed.",
    strook: [{ src: IMG + "case-02.jpg", ratio: "3 / 2", film: true }, { src: IMG + "case-06.jpg", ratio: "4 / 5" }, { src: IMG + "case-04.jpg", ratio: "9 / 16" }, { src: IMG + "case-03.jpg", ratio: "3 / 2" }] },
  { kop: "Studio & photography", tekst: "Where the partnership began, and still running. Collection imagery produced in studio: sets built, lit and shot for stills and motion in a single run, then delivered per format and per channel.",
    strook: [{ src: IMG + "case-01.jpg", ratio: "4 / 5" }, { src: IMG + "case-05.jpg", ratio: "3 / 2" }, { src: SET, ratio: "9 / 16" }, { src: IMG + "case-02.jpg", ratio: "3 / 2" }] },
  { kop: "E-learnings", tekst: "Product knowledge and sales technique, produced as a structured series staff can work through on demand. Filmed once, consistent across every store, and expanded as the range changes.",
    strook: [{ src: IMG + "case-04.jpg", ratio: "3 / 2", film: true }, { src: IMG + "case-03.jpg", ratio: "4 / 5" }, { src: IMG + "case-06.jpg", ratio: "9 / 16" }, { src: IMG + "case-01.jpg", ratio: "3 / 2" }] },
  { kop: "Brand & onboarding", tekst: "The story of the company, produced for the people inside it. Where Montel comes from, what it stands for, how that shows on the floor. Handed to every new colleague in the same form, in every store.",
    strook: [{ src: IMG + "case-06.jpg", ratio: "3 / 2" }, { src: IMG + "case-02.jpg", ratio: "4 / 5" }, { src: IMG + "case-05.jpg", ratio: "9 / 16", film: true }, { src: SET, ratio: "3 / 2" }] },
  { kop: "Culture & events", tekst: "Kick-offs, milestones and the moments the company marks together, given a visual form worth keeping, so they land as strongly inside the organisation as a campaign does outside it.",
    strook: [{ src: IMG + "case-05.jpg", ratio: "3 / 2" }, { src: IMG + "case-04.jpg", ratio: "4 / 5" }, { src: IMG + "case-01.jpg", ratio: "9 / 16" }, { src: IMG + "case-06.jpg", ratio: "3 / 2" }] }
];

const VERWANT = [
  { klant: "Woonexpress", kaders: ["Media production", "Growth"] },
  { klant: "Eezy", kaders: ["Media production", "Launches"] },
  { klant: "MSO Group", kaders: ["Media production"] },
  { klant: "Landgoed Bergvliet", kaders: ["Media production", "Growth"] }
];

const NAAD = "4px";          /* smalle vaste naad tussen beelden */
const KOLOMGAT = "var(--space-5)"; /* tekst en beeld staan tegen elkaar aan */
const LIJN = "1px solid var(--white-24, rgba(255,255,255,0.24))";

/* Playknop in het merkteken: de twee haken met de driehoek er tussenin. */
function PlayMerk({ maat = 80, kleur = "var(--dolle-white)" }) {
  return (
    <svg aria-hidden="true" viewBox="0 0 100 78" width={maat} height={Math.round(maat * 0.78)} fill="none" style={{ display: "block", color: kleur }}>
      <path d="M10 6 V46 H42" stroke="currentColor" strokeWidth="11" />
      <path d="M90 72 V32 H58" stroke="currentColor" strokeWidth="11" />
    </svg>
  );
}

function Play({ klein }) {
  return <span aria-hidden="true" style={{ position: "absolute", left: "var(--space-3)", bottom: "var(--space-3)", display: "grid", placeItems: "center", color: "var(--dolle-white)" }}><PlayMerk maat={klein ? 28 : 36} /></span>;
}

/* Beeldstrook: horizontaal scrollbaar, slepen met de aanwijzer. De hoogte van
   de strook bepaalt de blokhoogte; de ratio bepaalt de breedte per item. */
function Strook({ items, hoog = "clamp(180px,22vw,272px)" }) {
  const spoor = React.useRef(null);
  React.useEffect(() => {
    const el = spoor.current;
    if (!el) return;
    let neer = false, x0 = 0, l0 = 0;
    const down = (e) => { neer = true; x0 = e.clientX; l0 = el.scrollLeft; if (el.setPointerCapture) el.setPointerCapture(e.pointerId); };
    const move = (e) => { if (neer) el.scrollLeft = l0 - (e.clientX - x0); };
    const up = () => { neer = false; };
    el.addEventListener("pointerdown", down);
    el.addEventListener("pointermove", move);
    el.addEventListener("pointerup", up);
    el.addEventListener("pointerleave", up);
    return () => { el.removeEventListener("pointerdown", down); el.removeEventListener("pointermove", move); el.removeEventListener("pointerup", up); el.removeEventListener("pointerleave", up); };
  }, []);
  return (
    <div ref={spoor} style={{ display: "flex", gap: NAAD, overflowX: "auto", scrollbarWidth: "none", cursor: "grab", touchAction: "pan-y" }}>
      {items.map((t, i) => (
        <div key={i} style={{ position: "relative", flex: "0 0 auto", height: hoog, aspectRatio: t.ratio, overflow: "hidden", background: t.vlak || "var(--surface-sunk)", transition: "height 1100ms var(--ease-dolle)" }}>
          <img src={t.src} alt="" loading="lazy" draggable="false" style={{ position: "absolute", inset: t.pas === "contain" ? "12%" : 0, width: t.pas === "contain" ? "76%" : "100%", height: t.pas === "contain" ? "76%" : "100%", objectFit: t.pas || "cover", objectPosition: t.plek || "50% 50%", display: "block" }} />
          {t.film ? <Play /> : null}
        </div>
      ))}
    </div>
  );
}

/* Eigen bediening tijdens afspelen: één dun voortgangsbalkje op de lijn van de
   onderste haak (stopt ervoor) en links één geluidsknop. Klik op de balk spoelt. */
function FilmBalk({ video }) {
  const vul = React.useRef(null);
  const [stilte, setStilte] = React.useState(false);
  React.useEffect(() => {
    let id;
    const tik = () => { const v = video.current; if (v && vul.current && v.duration && !v.paused) { const f = v.currentTime / v.duration; vul.current.style.transform = "scaleX(" + f + ")"; if (knop.current) knop.current.style.left = (f * 100) + "%"; } id = requestAnimationFrame(tik); };
    id = requestAnimationFrame(tik);
    const v = video.current;
    const zet = () => setStilte(!!(v && v.muted));
    if (v) { v.addEventListener("volumechange", zet); zet(); }
    return () => { cancelAnimationFrame(id); if (v) v.removeEventListener("volumechange", zet); };
  }, []);
  const naar = (el, x) => { const v = video.current; if (!v || !v.duration) return; const b = el.getBoundingClientRect(); v.currentTime = Math.max(0, Math.min(1, (x - b.left) / b.width)) * v.duration; };
  /* Slepen spoelt: tijdens het slepen staat de film stil en volgt het beeld de knop; bij loslaten speelt hij verder. */
  const knop = React.useRef(null);
  /* Is de file niet doorzoekbaar (server zonder range-requests), laad hem dan als blob: die is altijd te spoelen. */
  React.useEffect(() => {
    const v = video.current; if (!v) return;
    let klaar = false;
    const check = () => {
      if (klaar || !v.currentSrc || v.currentSrc.startsWith("blob:")) return;
      const ok = v.seekable.length && v.seekable.end(0) > 1;
      if (ok) { klaar = true; return; }
      klaar = true;
      fetch(v.currentSrc).then((r) => r.blob()).then((b) => {
        const t = v.currentTime, speelde = !v.paused;
        v.src = URL.createObjectURL(b);
        v.addEventListener("loadedmetadata", () => { v.currentTime = t; if (speelde) v.play().catch(() => {}); }, { once: true });
      }).catch(() => {});
    };
    v.addEventListener("playing", check); v.addEventListener("progress", check);
    check();
    return () => { v.removeEventListener("playing", check); v.removeEventListener("progress", check); };
  }, []);
  const zetBalk = (f) => { if (vul.current) vul.current.style.transform = "scaleX(" + f + ")"; if (knop.current) knop.current.style.left = (f * 100) + "%"; };
  const sleepNaar = (el, x) => { const v = video.current; if (!v || !v.duration) return; const b = el.getBoundingClientRect(); const f = Math.max(0, Math.min(1, (x - b.left) / b.width)); zetBalk(f); const t = f * v.duration; if (v.fastSeek && el.dataset.sleep === "1") v.fastSeek(t); else v.currentTime = t; };
  const neer = (e) => { e.stopPropagation(); e.preventDefault(); const el = e.currentTarget; if (el.setPointerCapture) el.setPointerCapture(e.pointerId); const v = video.current; el.dataset.speelde = v && !v.paused ? "1" : ""; if (v) v.pause(); el.dataset.sleep = "1"; sleepNaar(el, e.clientX); };
  const sleep = (e) => { if (e.currentTarget.dataset.sleep === "1") sleepNaar(e.currentTarget, e.clientX); };
  const los = (e) => { const el = e.currentTarget; if (el.dataset.sleep !== "1") return; el.dataset.sleep = ""; const v = video.current; if (v) { const b = el.getBoundingClientRect(); v.currentTime = Math.max(0, Math.min(1, (e.clientX - b.left) / b.width)) * (v.duration || 0); if (el.dataset.speelde === "1") v.play().catch(() => {}); } };
  const geluid = (e) => { e.stopPropagation(); const v = video.current; if (v) v.muted = !v.muted; };
  return (
    <span style={{ position: "absolute", left: "var(--space-4)", right: "calc(var(--space-4) + 44px)", bottom: "calc(var(--space-4) - 9px)", height: 24, display: "flex", alignItems: "center", gap: 14, color: "var(--dolle-white)", filter: "drop-shadow(0 1px 4px rgba(8,18,40,0.45))" }}>
      <button type="button" onClick={geluid} aria-label={stilte ? "Sound on" : "Sound off"} style={{ appearance: "none", background: "none", border: 0, padding: 0, width: 24, height: 24, display: "grid", placeItems: "center", color: "inherit", cursor: "pointer", flex: "0 0 auto" }}>
        <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true"><path d="M4 9h4l5-4v14l-5-4H4z" fill="currentColor" stroke="none" />{stilte ? <path d="M16 9l5 6M21 9l-5 6" /> : <path d="M16.5 8.5a5 5 0 0 1 0 7M19 6a8.5 8.5 0 0 1 0 12" />}</svg>
      </button>
      <span onPointerDown={neer} onPointerMove={sleep} onPointerUp={los} onPointerCancel={los} onClick={(e) => e.stopPropagation()} style={{ position: "relative", flex: "1 1 auto", height: 24, cursor: "pointer", display: "flex", alignItems: "center", touchAction: "none" }}>
        <span style={{ position: "absolute", left: 0, right: 0, height: 2, background: "rgba(255,255,255,0.28)" }} />
        <span ref={vul} style={{ position: "absolute", left: 0, right: 0, height: 2, background: "var(--dolle-white)", transformOrigin: "0 50%", transform: "scaleX(0)" }} />
        <span ref={knop} style={{ position: "absolute", left: 0, top: "50%", width: 10, height: 10, marginLeft: -5, marginTop: -5, borderRadius: "50%", background: "var(--dolle-white)" }} />
      </span>
    </span>
  );
}

/* Hoofdvideo: poster-frame met play-knop, speelt pas op klik. */
function Film({ poster, bron, youtube, onderschrift, bovenschrift, kader, watch = true, watchSchaal = 3.2, stil = false, watchHover = true, parallax = false, vul = false }) {
  const [speel, setSpeel] = React.useState(false);
  const [hover, setHover] = React.useState(false);
  const [draai, setDraai] = React.useState(0);
  const film = React.useRef(null);
  /* Rust: de twee haken staan als in het merkteken naar elkaar toe, midden in
     het kader. Hover: ze draaien één keer helemaal rond en staan weer stil.
     Klik: ze reizen naar linksboven en rechtsonder en blijven daar tot de film
     is afgelopen; daarna keren ze terug naar het midden. */
  const HAAK_A = "M6 6 V46 H40", HAAK_B = "M46 46 V6 H12";
  /* Eindstand: allebei als hoekmerk, zodat ze samen het kader vormen. */
  const HOEK_A = "M6 40 V6 H40", HOEK_B = "M46 12 V46 H12";
  const spin = () => { setHover(true); if (!speel) setDraai(function (n) { return n + 1; }); };
  /* WATCH komt naast de haken tevoorschijn zodra het kader in beeld scrolt. */
  const vak = React.useRef(null);
  const [zicht, setZicht] = React.useState(false);
  React.useEffect(() => {
    const el = vak.current;
    if (!el || typeof IntersectionObserver === "undefined") { setZicht(true); return; }
    const kijk = new IntersectionObserver((rijen) => { rijen.forEach((r) => { if (r.isIntersecting) { setZicht(true); kijk.disconnect(); } }); }, { threshold: 0.35 });
    kijk.observe(el);
    return () => kijk.disconnect();
  }, []);
  /* parallax: de poster staat groter dan het kader en schuift gedempt mee met de scroll. */
  const laag = React.useRef(null);
  React.useEffect(() => {
    if (!parallax) return;
    if (window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    let raf = 0, nu = null;
    const tik = () => {
      raf = 0; const el = vak.current, l = laag.current; if (!el || !l) return;
      const b = el.getBoundingClientRect(), vh = window.innerHeight || 800;
      const p = Math.max(-1, Math.min(1, (b.top + b.height / 2 - vh / 2) / (vh / 2 + b.height / 2)));
      const doel = p * 9;
      nu = nu == null ? doel : nu + (doel - nu) * 0.14;
      l.style.transform = "translate3d(0," + nu.toFixed(3) + "%,0)";
      if (Math.abs(doel - nu) > 0.01) raf = requestAnimationFrame(tik);
    };
    const op = () => { if (!raf) raf = requestAnimationFrame(tik); };
    tik(); window.addEventListener("scroll", op, { passive: true, capture: true }); window.addEventListener("resize", op);
    return () => { window.removeEventListener("scroll", op, true); window.removeEventListener("resize", op); if (raf) cancelAnimationFrame(raf); };
  }, [parallax, speel]);
  /* Blijft de muis hangen, dan draaien de haken elke 3,5 seconde opnieuw. */
  React.useEffect(() => {
    if (!hover || speel) return;
    const t = setInterval(() => setDraai(function (n) { return n + 1; }), 3500);
    return () => clearInterval(t);
  }, [hover, speel]);
  const hoekA = speel
    ? { left: "var(--space-4)", top: "var(--space-4)" }
    : { left: "calc(50% - 27px)", top: "calc(50% - 22px)" };
  const hoekB = speel
    ? { right: "var(--space-4)", bottom: "var(--space-4)" }
    : { right: "calc(50% - 27px)", bottom: "calc(50% - 22px)" };
  const haak = (d, box) => <svg aria-hidden="true" viewBox={box} width="30" height="30" fill="none" style={{ display: "block" }}><path d={d} stroke="currentColor" strokeWidth="12" /></svg>;
  const reis = "left 820ms var(--ease-dolle), top 820ms var(--ease-dolle), right 820ms var(--ease-dolle), bottom 820ms var(--ease-dolle)";
  const merk = { position: "absolute", color: "var(--dolle-white)", pointerEvents: "none", transition: reis };
  const rol = draai ? { animation: "dolle-haak-rond 900ms var(--ease-dolle)" } : null;
  return (
    <div style={{ display: "grid", gap: "var(--space-3)" }}>
      <style>{"@keyframes dolle-haak-rond{from{transform:rotate(0deg)}to{transform:rotate(360deg)}}"}</style>
      {bovenschrift ? <Kicker size="sm" style={{ color: "var(--text-muted)" }}>{bovenschrift}</Kicker> : null}
      <div ref={vak} onMouseEnter={spin} onMouseLeave={() => setHover(false)}
        style={{ position: "relative", width: "100%", height: vul ? "100%" : undefined, aspectRatio: vul ? "auto" : (kader || "16 / 9"), overflow: "hidden", background: "var(--surface-sunk)" }}>
        {speel && youtube
          ? <iframe src={"https://www.youtube.com/embed/" + youtube + "?autoplay=1&rel=0&modestbranding=1&playsinline=1&iv_load_policy=3&color=white"} title={onderschrift || "Film"} referrerPolicy="strict-origin-when-cross-origin" allow="accelerometer; autoplay; clipboard-write; encrypted-media; picture-in-picture" allowFullScreen frameBorder="0" style={{ position: "absolute", inset: 0, width: "100%", height: "100%", border: 0 }} />
          : speel && bron
          ? <video ref={film} data-film="1" src={bron} autoPlay muted={stil} playsInline preload="none" onEnded={() => setSpeel(false)} onClick={(e) => { const el = e.currentTarget; if (el.paused) el.play(); else el.pause(); }} style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover", cursor: "pointer" }} />
          : <React.Fragment>
              <span ref={laag} style={{ position: "absolute", left: 0, right: 0, top: parallax ? "-12%" : 0, bottom: parallax ? "-12%" : 0, display: "block", willChange: parallax ? "transform" : undefined }}>
                <img src={poster || (youtube ? "https://i.ytimg.com/vi/" + youtube + "/maxresdefault.jpg" : undefined)} alt="" style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover", display: "block", transform: hover ? "scale(1.045)" : "scale(1)", filter: hover ? "brightness(0.92)" : "none", transition: "transform 1200ms var(--ease-dolle), filter var(--dur-frame) var(--ease-dolle)" }} />
              </span>
              {bron || youtube ? <button type="button" onClick={() => setSpeel(true)} aria-label="Play film"
                style={{ position: "absolute", inset: 0, appearance: "none", background: "none", border: 0, cursor: "pointer" }} /> : null}
            </React.Fragment>}
        <span key={"a" + draai} style={{ ...merk, ...hoekA, ...(watch ? null : rol), opacity: watch && !speel ? 0 : 1, transition: merk.transition + ", opacity 320ms linear" }}>{haak(speel ? HOEK_A : HAAK_A, "0 0 52 52")}</span>
        <span key={"b" + draai} style={{ ...merk, ...hoekB, ...(watch ? null : rol), opacity: watch && !speel ? 0 : 1, transition: merk.transition + ", opacity 320ms linear" }}>{haak(speel ? HOEK_B : HAAK_B, "0 0 52 52")}</span>
        {speel && bron && !youtube ? <FilmBalk video={film} /> : null}
        {watch && !(speel && (bron || youtube)) ? (
          <span style={{ position: "absolute", inset: 0, display: "grid", placeItems: "center", pointerEvents: "none", background: hover ? "rgba(8,18,40,0.46)" : watchHover ? "rgba(8,18,40,0)" : "rgba(8,18,40,0.3)", transition: "background var(--dur-frame) var(--ease-dolle)" }}>
            <span style={{ pointerEvents: "auto", transform: ((watchHover ? hover : zicht) ? "translateY(0)" : "translateY(20px)") + " scale(" + (watchSchaal * 0.7) + ")", opacity: (watchHover ? hover : zicht) ? 1 : 0, transition: "transform 820ms var(--ease-dolle) 160ms, opacity 640ms linear 160ms" }}>
              <Button variant="secondary" onClick={() => { if (bron || youtube) setSpeel(true); }} style={{ color: "var(--dolle-white)", borderColor: "transparent", paddingLeft: "9px", paddingRight: "7px", textShadow: "0 1px 10px rgba(8,18,40,0.55)", filter: "drop-shadow(0 1px 6px rgba(8,18,40,0.45))" }}>Watch</Button>
            </span>
          </span>
        ) : null}
      </div>
      {onderschrift ? <Kicker size="sm" style={{ color: "var(--text-muted)" }}>{onderschrift}</Kicker> : null}
    </div>
  );
}

/* Rij in de stijl van de overzichtspagina: naam, dienst-tags, VIEW, strook. */
function VerwantRij({ c, go }) {
  const [hover, setHover] = React.useState(false);
  const beelden = [
    { src: IMG + "case-0" + ((c.i % 6) + 1) + ".jpg", ratio: "3 / 4" },
    { src: IMG + "case-0" + (((c.i + 2) % 6) + 1) + ".jpg", ratio: "3 / 2" },
    { src: IMG + "case-0" + (((c.i + 4) % 6) + 1) + ".jpg", ratio: "4 / 5" },
    { src: IMG + "case-0" + (((c.i + 1) % 6) + 1) + ".jpg", ratio: "9 / 16" }
  ];
  return (
    <div onClick={() => go("cases")} onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)}
      style={{ display: "grid", gridTemplateColumns: "minmax(0,32%) auto minmax(0,1fr)", gap: KOLOMGAT, alignItems: "center", padding: "var(--space-3) 0", borderTop: LIJN, cursor: "pointer", color: "var(--dolle-white)" }}>
      <div style={{ display: "grid", gap: "var(--space-2)", justifyItems: "start", minWidth: 0 }}>
        <span style={{ fontFamily: "var(--font-core)", fontWeight: "var(--weight-heading)", fontSize: "clamp(17px,1.7vw,24px)", letterSpacing: "var(--track-heading)" }}>{c.klant}</span>
        <span style={{ display: "flex", gap: "var(--space-2)", flexWrap: "wrap" }}>
          {c.kaders.map((k) => <DolleTag key={k}>{k}</DolleTag>)}
        </span>
      </div>
      <Button size="sm" variant="secondary" onClick={(ev) => { ev.stopPropagation(); go("cases"); }}
        style={{ color: "var(--dolle-white)", borderColor: hover ? "var(--white-24, rgba(255,255,255,0.24))" : "transparent" }}>View</Button>
      <Strook items={beelden} hoog="clamp(88px,10vw,118px)" />
    </div>
  );
}

/* Cijferbalk: de getallen lopen op zodra de balk in beeld komt. Alleen wat we
   echt weten uit het project; een veld zonder cijfer laten we weg. */
const CIJFERS = [
  { waarde: 9, label: "Campaigns produced", accent: true },
  { waarde: 4, label: "National commercials" },
  { waarde: 6, label: "Years as production partner" }
];

function Teller({ naar, dur = 1400 }) {
  const el = React.useRef(null);
  const [n, setN] = React.useState(0);
  React.useEffect(() => {
    const doel = el.current;
    if (!doel) return;
    if (window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches) { setN(naar); return; }
    if (typeof IntersectionObserver === "undefined") { setN(naar); return; }
    let raf = 0;
    const io = new IntersectionObserver((rijen) => {
      if (!rijen.some((r) => r.isIntersecting)) return;
      io.disconnect();
      const t0 = performance.now();
      const stap = (t) => {
        const p = Math.min(1, (t - t0) / dur);
        /* Uitlopend, zodat het laatste getal rustig landt. */
        setN(Math.round(naar * (1 - Math.pow(1 - p, 3))));
        if (p < 1) raf = requestAnimationFrame(stap);
      };
      raf = requestAnimationFrame(stap);
    }, { rootMargin: "0px 0px -20% 0px" });
    io.observe(doel);
    return () => { io.disconnect(); if (raf) cancelAnimationFrame(raf); };
  }, [naar, dur]);
  return <span ref={el} style={{ fontVariantNumeric: "tabular-nums" }}>{n}</span>;
}

function CijferBalk() {
  return (
    <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(200px,1fr))", gap: KOLOMGAT, borderTop: LIJN, borderBottom: LIJN, padding: "var(--space-5) 0" }}>
      {CIJFERS.map((c) => (
        <div key={c.label} style={{ display: "grid", gap: "var(--space-2)", justifyItems: "start" }}>
          <span style={{ fontFamily: "var(--font-core)", fontWeight: "var(--weight-heading)", fontSize: "clamp(34px,5vw,64px)", lineHeight: 1, letterSpacing: "var(--track-heading)", color: c.accent ? "var(--text-accent)" : "var(--text-heading)" }}><Teller naar={c.waarde} /></span>
          <Kicker size="sm" style={{ color: "var(--text-muted)" }}>{c.label}</Kicker>
        </div>
      ))}
    </div>
  );
}

function CaseMontel({ go }) {
  return (
    <React.Fragment>

      {/* 01 · OPENING — naam, tags, haarlijn, dan tekst links en beeld rechts */}
      <section className="dolle-dark" style={{ background: "var(--dolle-navy)", padding: "clamp(72px,12vh,140px) var(--page-margin) var(--space-6)" }}>
        <div style={{ maxWidth: "var(--content-max)", margin: "0 auto" }}>
          <Button size="sm" variant="secondary" onClick={() => go("cases")} style={{ color: "var(--dolle-white)", borderColor: "transparent", marginBottom: "var(--space-5)" }}>All cases</Button>
          <div style={{ display: "grid", gap: "var(--space-2)", justifyItems: "start", paddingBottom: "var(--space-4)" }}>
            <Words as="h1" text="Montel" style={{ margin: 0, fontSize: "clamp(26px,3.4vw,46px)", lineHeight: 1.05, letterSpacing: "var(--track-heading)" }} />
            <DolleTag>Media production</DolleTag>
          </div>
        </div>
        {/* Scheidingslijn over de volle contentbreedte, zoals tussen de rijen. */}
        <div style={{ maxWidth: "var(--content-max)", margin: "0 auto", height: 1, background: "var(--white-24, rgba(255,255,255,0.24))" }} />
        <div style={{ maxWidth: "var(--content-max)", margin: "0 auto", display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(300px,1fr))", gap: KOLOMGAT, alignItems: "stretch", paddingTop: "var(--space-5)" }}>
          <div style={{ display: "grid", gap: "var(--space-4)", alignContent: "center", maxWidth: "45ch" }}>
            <p className="dolle-lead" style={{ margin: 0 }}>Montel is a furniture retailer with stores across the Netherlands and Belgium, built on a house style that has to hold up from showroom floor to phone screen.</p>
            <p style={{ margin: 0, fontSize: "var(--size-body)", lineHeight: "var(--lh-body)", color: "var(--text-body)" }}>DOLLE has been its production partner since 2020 and produces everything the brand puts on screen. National TV commercials, social campaigns shot in fully built sets, collection photography, e-learnings for staff and the films that carry the company culture, from concept to delivery in one visual language.</p>
          </div>
          {/* Beeldcluster: vult de kolom en loopt rechts door tot de paginarand. */}
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gridAutoRows: "1fr", gap: NAAD, marginRight: "calc(var(--page-margin) * -1)", minHeight: "clamp(360px,44vw,620px)" }}>
            {OPENING.map((t, i) => (
              <div key={i} style={{ position: "relative", overflow: "hidden", background: "var(--surface-sunk)", gridColumn: t.span === 2 ? "span 2" : "auto" }}>
                <img src={t.src} alt="" loading="lazy" style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover", display: "block" }} />
                {t.film ? <Play klein /> : null}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 02 · CIJFERBALK — loopt op bij binnenkomst */}
      <section className="dolle-dark" style={{ background: "var(--dolle-navy)", padding: "var(--space-5) var(--page-margin)" }}>
        <div style={{ maxWidth: "var(--content-max)", margin: "0 auto" }}><CijferBalk /></div>
      </section>

      {/* 03 · FILM + 04 · PROJECTBLOKKEN — één doorlopend ritme op wit */}
      <section className="dolle-dark" style={{ background: "var(--dolle-navy)", color: "var(--text-body)", padding: "var(--space-6) var(--page-margin)" }}>
        <div style={{ maxWidth: "var(--content-max)", margin: "0 auto", display: "grid", gap: "var(--space-6)" }}>
          <Film poster={POSTER} onderschrift="National commercial · Broadcast" />
          {BLOKKEN.map((b, i) => {
            const beeldEerst = i % 2 === 0;
            const beeld = (
              <CornerRule corners="tl-br" size={20} inset={10} tone="strong" style={{ alignSelf: "stretch", display: "grid", alignContent: "center" }}>
                <Strook items={b.strook} />
              </CornerRule>
            );
            const tekst = (
              <div style={{ display: "grid", gap: "var(--space-3)", alignContent: "center", maxWidth: "45ch" }}>
                <h2 style={{ margin: 0, fontFamily: "var(--font-core)", fontWeight: "var(--weight-heading)", fontSize: "clamp(19px,2vw,27px)", letterSpacing: "var(--track-heading)", color: "var(--text-heading)" }}>{b.kop}</h2>
                <p style={{ margin: 0, fontSize: "var(--size-body)", lineHeight: "var(--lh-body)" }}>{b.tekst}</p>
              </div>
            );
            return (
              <div key={b.kop} style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(300px,1fr))", gap: KOLOMGAT, alignItems: "stretch", borderTop: "1px solid var(--border-hairline)", paddingTop: "var(--space-6)" }}>
                {beeldEerst ? beeld : tekst}
                {beeldEerst ? tekst : beeld}
              </div>
            );
          })}
          {/* 05 · DELIVERABLES */}
          <div style={{ textAlign: "center", borderTop: "1px solid var(--border-hairline)", paddingTop: "var(--space-5)" }}>
            <Kicker size="sm" style={{ color: "var(--text-heading)", lineHeight: 1.9 }}>Location · Set design · Concept · Direction · Production · Edit · Photography</Kicker>
          </div>
        </div>
      </section>

      {/* 06 · QUOTE */}
      <section className="dolle-dark" style={{ background: "var(--dolle-navy)", color: "var(--text-body)", padding: "var(--space-7) var(--page-margin)" }}>
        <div style={{ maxWidth: "var(--content-max)", margin: "0 auto", display: "grid", justifyItems: "start" }}>
          <CornerRule corners="tl-br" size={24} inset={14} tone="strong" style={{ width: "fit-content", maxWidth: "min(100%, 52ch)" }}>
            <div style={{ display: "grid", gap: "var(--space-4)", maxWidth: "45ch", padding: "var(--space-5)" }}>
              <blockquote style={{ margin: 0, fontFamily: "var(--font-core)", fontWeight: "var(--weight-heading)", fontSize: "clamp(19px,2.1vw,29px)", lineHeight: 1.3, letterSpacing: "var(--track-heading)", color: "var(--text-heading)" }}>
                "Working with team DOLLE is a real pleasure. We have done plenty of great shoots together by now. The contact is always easy and relaxed, and the end result is beautiful every time."
              </blockquote>
              <Kicker size="sm">Manon Smits · Head of marketing · Montel</Kicker>
            </div>
          </CornerRule>
        </div>
      </section>

      {/* 07 · RELATED WORK */}
      <section className="dolle-dark" style={{ background: "var(--dolle-navy)", padding: "var(--space-6) var(--page-margin)" }}>
        <div style={{ maxWidth: "var(--content-max)", margin: "0 auto", display: "grid", gap: "var(--space-4)" }}>
          <Kicker style={{ color: "var(--text-muted)" }}>Related work</Kicker>
          <div>
            {VERWANT.map((c, i) => <VerwantRij key={c.klant} c={{ ...c, i }} go={go} />)}
            <div style={{ height: 1, background: "var(--white-24, rgba(255,255,255,0.24))" }} />
          </div>
        </div>
      </section>

      {/* 08 · CTA */}
      {window.HomeConversie ? <window.HomeConversie go={go} tone="dark" /> : null}

    </React.Fragment>
  );
}

Object.assign(window, { CaseMontel, CaseStrook: Strook, CaseFilm: Film, CasePlay: Play, CasePlayMerk: PlayMerk, CaseVerwantRij: VerwantRij, CASE_NAAD: NAAD, CASE_KOLOMGAT: KOLOMGAT, CASE_LIJN: LIJN });
