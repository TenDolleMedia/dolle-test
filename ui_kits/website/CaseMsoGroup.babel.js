const MSO_DS = window.DesignSystem_8f95a2;
const { Kicker: MKicker, Tag: MTag, Button: MButton } = MSO_DS;
const MWords = window.Words || (({ as = "span", text, style }) => React.createElement(as, { style: style }, text));

const MSO_VID = "../../assets/video/";
const MSO_BEELD = "../../assets/cases/mso/";
const MSO_KOLOMGAT = "calc(var(--grid-gap) * 1.1)";
const MSO_VLOEI = "1100ms cubic-bezier(.16,.84,.24,1)";

const MSO_INTRO = [
  "MSO Group unites Meuva, Schotte, Oranje and HSD in demolition, dismantling and offshore support, from refineries and power stations to offshore decommissioning. Long-running projects on sites few people ever see.",
  "Since 2024, DOLLE has captured those projects on location, filmed new innovations and flown certified drones in high-risk zones. Every production is cut for tenders, LinkedIn, the website and recruitment, backed by AI systems that speed up the work."
];
/* Cijfers voor het datablok; een streepje tot het echte aantal binnen is. */
const MSO_DATA = [
  { label: "Views generated", waarde: 250, achter: "K+" },
  { label: "Projects documented", waarde: 12 },
  { label: "Films delivered", waarde: 40 },
  { label: "Drone flights", waarde: 60 }
];
const MSO_WAT = [
  { nr: "01", kop: "Project documentation", tekst: "Long-term projects captured from start to finish, over weeks on site." },
  { nr: "02", kop: "Innovations", tekst: "MSO's own development team builds new machinery. DOLLE films each innovation at work." },
  { nr: "03", kop: "Certified drone operations", tekst: "Flights in restricted zones of the ports of Rotterdam and Vlissingen." },
  { nr: "04", kop: "Customized post-production", tekst: "Every shoot edited for tenders, LinkedIn, the website and recruitment." }
];

/* Zes projecten. Bestanden komen van de klant; tot die tijd blijven de kaders
   leeg met alleen de hoekmarkeringen. */
const MSO_PROJECTEN = [
  {
    naam: "GPO ship", meta: "Vlissingen · Documentation",
    kort: "A ship that crossed from New York to the port of Vlissingen, followed while its structure was rebuilt.",
    alinea: "After its crossing from New York, the GPO ship arrived in Vlissingen for heavy structural work: elements dismantled, removed and refitted to improve how it floats. DOLLE returned to site throughout the project, so the film shows the work as it progressed rather than a single day.",
    plek: "Vlissingen", soort: "Documentation", levering: "Project film, photography",
    loop: MSO_VID + "mso-gpo-loop.mp4", still: MSO_BEELD + "mso-gpo-3028-web.jpg",
    film: MSO_VID + "mso-gpo-film.mp4",
    stills: [{ src: MSO_BEELD + "mso-gpo-2947-web.jpg", kader: "2 / 3" }, MSO_BEELD + "mso-gpo-3047-web.jpg", MSO_BEELD + "mso-gpo-2977-web.jpg"]
  },
  {
    naam: "HSD & Heerema", meta: "Vlissingen · Decommissioning",
    kort: "A drilling platform dismantled piece by piece in the port of Vlissingen, its parts prepared for reuse.",
    alinea: "Working alongside Heerema, HSD took apart a drilling platform in the port of Vlissingen. Each section was removed with care, so the parts could be put back to use instead of scrapped. DOLLE documented the dismantling over several shoots, on the ground and with the certified drone team, delivered as project films with graphics and sound.",
    plek: "Vlissingen", soort: "Decommissioning, drone", levering: "Project films, graphics",
    loop: MSO_VID + "mso-hsd-loop.mp4", still: MSO_BEELD + "mso-hsd-01-web.jpg", klein: MSO_BEELD + "mso-hsd-02-web.jpg", film: MSO_VID + "mso-hsd-film.mp4",
    stills: [MSO_BEELD + "mso-hsd-02-web.jpg", MSO_BEELD + "mso-hsd-04-web.jpg", MSO_BEELD + "mso-hsd-01-web.jpg"]
  },
  {
    naam: "Greenport", meta: "Rotterdam · Construction, demolition",
    kort: "The construction of a warehouse and the demolition of a large old crane on location.",
    alinea: "A collaboration between Greenport and MSO: the construction of a warehouse and the demolition of a large old crane on location. DOLLE followed both on site and edited it into a project film with graphics that explain the scope and sequence of the work, made to present the project to partners and in tenders.",
    plek: "Rotterdam", soort: "Construction, demolition", levering: "Project film, graphics",
    loop: MSO_VID + "mso-greenport-loop.mp4", still: MSO_BEELD + "mso-greenport-01-web.jpg", klein: MSO_BEELD + "mso-greenport-02-web.jpg", film: MSO_VID + "mso-greenport-film.mp4",
    stills: [MSO_BEELD + "mso-greenport-02-web.jpg", MSO_BEELD + "mso-greenport-04-web.jpg", MSO_BEELD + "mso-greenport-03-web.jpg"]
  },
  {
    naam: "Hydrostripper", meta: "Rotterdam · Innovation",
    kort: "A new method filmed at work, so clients see what it does before they commit to it.",
    alinea: "The Hydrostripper filmed in operation in Rotterdam, in film and photography. Clear footage of a technical process, made to explain the innovation to clients and partners.",
    plek: "Rotterdam", soort: "Innovation", levering: "Film, photography",
    loop: MSO_VID + "mso-hydrostripper-loop.mp4", still: MSO_BEELD + "mso-hydrostripper-01-web.jpg", klein: MSO_BEELD + "mso-hydrostripper-03-web.jpg", film: MSO_VID + "mso-hydrostripper-film.mp4",
    stills: [MSO_BEELD + "mso-hydrostripper-02-web.jpg", MSO_BEELD + "mso-hydrostripper-03-web.jpg", MSO_BEELD + "mso-hydrostripper-01-web.jpg"]
  }
];

/* Leeg kader met de twee hoekmarkeringen, tot het beeld er is. */
function MsoKader({ kader, src, video, poster, spelen, vol, vullen }) {
  const vid = React.useRef(null);
  React.useEffect(() => {
    const p = vid.current;
    if (!p || vol) return;
    p.muted = true; p.defaultMuted = true;
    const speel = () => { if (spelen && p.paused) p.play().catch(() => {}); };
    if (spelen) speel(); else { p.pause(); p.currentTime = 0; }
    p.addEventListener("loadeddata", speel);
    p.addEventListener("canplay", speel);
    return () => { p.removeEventListener("loadeddata", speel); p.removeEventListener("canplay", speel); };
  }, [spelen, vol]);
  return (
    <span style={{ position: "relative", display: "block", aspectRatio: vullen ? "auto" : kader, height: vullen ? "100%" : undefined, width: vullen ? "100%" : undefined, overflow: "hidden", background: "#0a1428", minWidth: 0 }}>
      {src ? <img src={src} alt="" decoding="async" style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover", display: "block" }} /> : null}
      {video ? <video ref={vid} src={video} muted={!vol} loop={!vol} controls={!!vol} autoPlay={!vol && !!spelen} playsInline preload={!vol && spelen ? "metadata" : "none"} poster={poster || undefined}
        style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover", display: "block" }} /> : null}
      <span style={{ position: "absolute", left: "8%", top: "10%", color: "var(--dolle-white)", opacity: src || video ? 0 : 0.9 }}>
        <svg aria-hidden="true" viewBox="0 0 52 52" width="20" height="20" fill="none" style={{ display: "block" }}><path d="M6 40 V6 H40" stroke="currentColor" strokeWidth="12" /></svg>
      </span>
      <span style={{ position: "absolute", right: "8%", bottom: "10%", color: "var(--dolle-white)", opacity: src || video ? 0 : 0.9 }}>
        <svg aria-hidden="true" viewBox="0 0 52 52" width="20" height="20" fill="none" style={{ display: "block" }}><path d="M46 12 V46 H12" stroke="currentColor" strokeWidth="12" /></svg>
      </span>
    </span>
  );
}

const MSO_WOORDEN = ["Visible", "Ahead", "Forward", "Driven"];
function MsoWat({ aan, setAan, onKies }) {
  const [vast, setVast] = React.useState(false);
  const reduce = typeof window !== "undefined" && window.matchMedia
    ? window.matchMedia("(prefers-reduced-motion: reduce)").matches : false;
  React.useEffect(() => {
    if (reduce || vast) return;
    const t = setInterval(() => setAan((i) => (i + 1) % MSO_WAT.length), 3400);
    return () => clearInterval(t);
  }, [reduce, vast]);
  return (
    <div data-mso-wat="1" style={{ display: "grid", gridTemplateColumns: "repeat(4,minmax(0,1fr))", gap: "var(--grid-gap)" }}>
      {MSO_WAT.map((w, i) => {
        const actief = aan === i;
        return (
          <div key={w.nr} role="button" tabIndex={0} onClick={() => onKies && onKies(i)} onKeyDown={(e) => { if (e.key === "Enter" && onKies) onKies(i); }} onMouseEnter={() => { setVast(true); setAan(i); }} onMouseLeave={() => setVast(false)}
            style={{ display: "grid", gap: "var(--space-4)", alignContent: "start", cursor: "pointer" }}>
            {/* Vullende lijn zoals bij de diensten: hairline met een volle lijn
                die er bij het actieve blok van links over trekt. */}
            <div style={{ position: "relative", height: 1, background: "var(--border-hairline, rgba(255,255,255,0.16))" }}>
              <div style={{ position: "absolute", left: 0, top: -1, height: 2, background: "var(--dolle-white)", width: "100%", transformOrigin: "left center", transform: actief ? "scaleX(1)" : "scaleX(0)", transition: "transform 700ms var(--ease-dolle)" }} />
            </div>
            <MKicker as="span" size="sm" style={{ whiteSpace: "nowrap", color: actief ? "var(--dolle-white)" : "rgba(255,255,255,0.62)" }}>{w.nr}</MKicker>
            <h3 style={{ margin: 0, fontFamily: "var(--font-core)", fontWeight: "var(--weight-heading)", fontSize: "clamp(19px,1.7vw,26px)", lineHeight: 1.2, letterSpacing: "var(--track-heading)", color: actief ? "var(--dolle-white)" : "rgba(255,255,255,0.62)", transition: "color var(--dur-ui) var(--ease-dolle)", textWrap: "balance" }}>{w.kop}</h3>
            <p style={{ margin: 0, fontSize: "var(--size-body)", lineHeight: "var(--lh-body)", color: "var(--text-body)", opacity: actief ? 1 : 0, transform: actief ? "translateY(0)" : "translateY(8px)", transition: "opacity var(--dur-frame) var(--ease-dolle), transform var(--dur-frame) var(--ease-dolle)" }}>{w.tekst}</p>
          </div>
        );
      })}
    </div>
  );
}

/* start/eind: het fragment zonder logo-intro en -outro. Zonder eind stopt
   hij 3,5 seconde voor het einde. */
const MSO_SHORTS = [
  { video: MSO_VID + "mso-short-01-16x9.mp4", ratio: 16 / 9, start: 2.5, eind: 15.5 },
  { video: MSO_VID + "mso-short-02-9x16.mp4", ratio: 9 / 16, start: 3 },
  { video: MSO_VID + "mso-short-03-16x9.mp4", ratio: 16 / 9, start: 4.5, eind: 23.4 },
  { video: MSO_VID + "mso-short-04-9x16.mp4", ratio: 9 / 16, start: 3 }
];
function msoFragment(el, s) {
  if (!el || el.dataset.frag) return;
  el.dataset.frag = "1"; el.muted = true; el.defaultMuted = true;
  el.style.opacity = "0"; el.style.transition = "opacity 400ms ease";
  const eind = () => s.eind != null ? s.eind : (el.duration ? el.duration - 3.5 : 1e9);
  const toon = () => { if (el.currentTime >= s.start - 0.05) el.style.opacity = "1"; };
  el.addEventListener("loadedmetadata", () => { if (el.currentTime < s.start) el.currentTime = s.start; });
  el.addEventListener("seeked", toon);
  el.addEventListener("timeupdate", () => { if (el.currentTime >= eind() || el.currentTime < s.start - 0.2) el.currentTime = s.start; else toon(); });
  if (el.readyState >= 1 && el.currentTime < s.start) el.currentTime = s.start;
}

/* Doorlopende band van loops, zoals de andere carrousels: rustig naar links,
   stil bij hover of reduced motion. */
function MsoShorts() {
  /* Loopt vanzelf naar links, maar is ook te swipen, slepen of met het
     trackpad te scrollen. Na een interactie pakt hij na even het tempo weer op. */
  const band = React.useRef(null);
  React.useEffect(() => {
    const el = band.current;
    if (!el) return;
    const reduce = window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    let vorige = performance.now(), raf, rustTot = 0, x = el.scrollLeft, neer = false, x0 = 0, s0 = 0, bewogen = false;
    const rust = (ms) => { rustTot = performance.now() + (ms || 1800); };
    const tik = (nu) => {
      const dt = Math.min(64, nu - vorige); vorige = nu;
      const helft = el.scrollWidth / 2;
      if (!reduce && !neer && nu > rustTot && helft > 0) {
        x += dt * 0.035;
        if (x >= helft) x -= helft;
        el.scrollLeft = x;
      } else {
        x = el.scrollLeft;
        if (helft > 0 && x >= helft) { x -= helft; el.scrollLeft = x; }
        if (x <= 0 && helft > 0) { x += helft; el.scrollLeft = x; }
      }
      raf = requestAnimationFrame(tik);
    };
    const down = (e) => { if (e.pointerType !== "mouse") return; neer = true; bewogen = false; x0 = e.clientX; s0 = el.scrollLeft; el.style.cursor = "grabbing"; };
    const move = (e) => { if (!neer) return; const dx = e.clientX - x0; if (Math.abs(dx) > 3) bewogen = true; el.scrollLeft = s0 - dx; };
    const up = () => { if (!neer) return; neer = false; el.style.cursor = "grab"; rust(); };
    const klik = (e) => { if (bewogen) { e.preventDefault(); e.stopPropagation(); } };
    const weg = () => rust();
    el.addEventListener("pointerdown", down); window.addEventListener("pointermove", move); window.addEventListener("pointerup", up);
    el.addEventListener("click", klik, true); el.addEventListener("wheel", weg, { passive: true }); el.addEventListener("touchstart", weg, { passive: true }); el.addEventListener("touchmove", weg, { passive: true });
    el.addEventListener("mouseenter", () => rust(1e9)); el.addEventListener("mouseleave", () => rust(600));
    raf = requestAnimationFrame(tik);
    return () => { cancelAnimationFrame(raf); el.removeEventListener("pointerdown", down); window.removeEventListener("pointermove", move); window.removeEventListener("pointerup", up); el.removeEventListener("click", klik, true); };
  }, []);
  const hoog = "clamp(240px,30vw,420px)";
  const reeks = MSO_SHORTS.concat(MSO_SHORTS);
  return (
    <div ref={band} className="mso-band" style={{ overflowX: "auto", overflowY: "hidden", width: "100%", cursor: "grab", scrollbarWidth: "none", WebkitOverflowScrolling: "touch", overscrollBehaviorX: "contain" }}>
      <style>{".mso-band::-webkit-scrollbar{display:none}"}</style>
      <div style={{ display: "flex", gap: "var(--space-3)", width: "max-content" }}>
        {reeks.map((s, i) => (
          <span key={i} style={{ flex: "0 0 auto", height: hoog, aspectRatio: String(s.ratio), overflow: "hidden", background: "#0a1428", borderRadius: 5 }}>
            <video src={s.video + "#t=" + s.start} autoPlay muted loop playsInline preload="metadata" draggable="false" ref={(el) => msoFragment(el, s)}
              style={{ display: "block", width: "100%", height: "100%", objectFit: "cover", pointerEvents: "none" }} />
          </span>
        ))}
      </div>
    </div>
  );
}

function MsoDienstKop({ dienst, woord, wissel }) {
  return (
    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", gap: "var(--space-6)", flexWrap: "wrap" }}>
      <MKicker style={{ display: "block", whiteSpace: "nowrap", color: "var(--text-muted)" }}>{dienst}</MKicker>
      <span style={{ fontFamily: "var(--font-core)", fontWeight: "var(--weight-heading)", fontSize: "clamp(18px,2.2vw,30px)", letterSpacing: "var(--track-wildly)", textTransform: "uppercase", color: "var(--text-heading)", whiteSpace: "nowrap" }}>
        Wildly <span style={{ display: "inline-block", overflow: "hidden", verticalAlign: "bottom" }}><span key={wissel ? woord : undefined} style={{ display: "inline-block", color: "var(--text-accent)", animation: wissel ? "dolle-woord-in 520ms var(--ease-dolle)" : "none" }}>{woord}</span></span>
      </span>
    </div>
  );
}

/* Eén rij uit het register: beeld links, tekst rechts, VIEW uiterst rechts.
   Open verschijnt de projectsheet. */
/* Per rij een andere verhouding, breedte en verspringing, zodat het register
   niet als een raster leest. */
const MSO_RITME = [
  { loop: 16 / 9, still: 4 / 5, eerst: "loop", x: "0%" },
  { loop: 3 / 2, still: 3 / 4, eerst: "still", x: "0%" },
  { loop: 2 / 1, still: 3 / 4, eerst: "loop", x: "0%" },
  { loop: 4 / 3, still: 2 / 3, eerst: "still", x: "0%" }
];
const MSO_H = "clamp(150px,13vw,210px)";
function MsoMaat(ref, dep) {
  const [h, setH] = React.useState(0);
  React.useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const meet = () => setH(el.scrollHeight);
    meet();
    if (typeof ResizeObserver === "undefined") return;
    const kijk = new ResizeObserver(meet);
    kijk.observe(el);
    return () => kijk.disconnect();
  }, [dep]);
  return h;
}

/* Eén beweging, zoals op /cases: de loop groeit uit tot de film, de still
   wijkt, de tekstkolom schuift mee en alinea, metadata en stills vouwen open.
   Sluiten loopt langs precies dezelfde weg terug. */
function MsoRegisterRij({ p, nr, open, onToggle, anker, plek }) {
  const V = MSO_RITME[(plek || 0) % MSO_RITME.length];
  const extra = React.useRef(null);
  const strook = React.useRef(null);
  const hExtra = MsoMaat(extra, open);
  const hStrook = MsoMaat(strook, open);
  const [film, setFilm] = React.useState(false);
  /* Reveal zoals de rijen op /cases: beeld schuift van links binnen achter een
     masker, naam en blokken vullen van links, de tekst komt omhoog. */
  const rijEl = React.useRef(null);
  const [binnen, setBinnen] = React.useState(false);
  React.useEffect(() => {
    if (window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches) { setBinnen(true); return; }
    let raf = 0, klaar = false;
    const tik = () => { raf = 0; const el = rijEl.current; if (klaar || !el) return; if (el.getBoundingClientRect().top < (window.innerHeight || 800) * 0.82) { klaar = true; setBinnen(true); weg(); } };
    const op = () => { if (!raf) raf = requestAnimationFrame(tik); };
    const weg = () => { window.removeEventListener("scroll", op, true); window.removeEventListener("resize", op); };
    window.addEventListener("scroll", op, { passive: true, capture: true }); window.addEventListener("resize", op);
    tik(); const t = setTimeout(tik, 400);
    return () => { weg(); clearTimeout(t); if (raf) cancelAnimationFrame(raf); };
  }, []);
  const vul = (n) => ({ display: "block", clipPath: binnen ? "inset(-4px -2px -4px 0)" : "inset(-4px 100% -4px 0)", transition: "clip-path 900ms cubic-bezier(.65,0,.25,1) " + n + "ms" });
  const blokken = (p.meta || "").split(" · ");
  React.useEffect(() => {
    if (!open) { setFilm(false); return; }
    const t = setTimeout(() => setFilm(true), 700);
    return () => clearTimeout(t);
  }, [open]);
  /* Zoals lama lama: één hoogte per rij, breedte volgt de verhouding, de strook
     begint per rij op een andere plek. Nummer, knop en tekst staan in elke rij
     op dezelfde plek. Open groeit de loop (containerbreedte) uit tot de film. */
  /* Eén hoogte voor alle rijen: afgestemd op de rij die de meeste ruimte vraagt. */
  const nodig = Math.max(...MSO_RITME.map((r) => (r.loop + r.still) / (1 - parseFloat(r.x) / 100)));
  const hRij = "min(" + MSO_H + ", calc((100cqw - 16px) / " + nodig.toFixed(4) + "))";
  const kolommen = open
    ? "minmax(0,2.6fr) minmax(0,0.2fr) minmax(0,0.55fr) minmax(0,1.9fr)"
    : "minmax(0,2.5fr) minmax(0,0.3fr) minmax(0,0.7fr) minmax(0,2.1fr)";
  const vouw = (h, vertraging) => ({ overflow: "hidden", maxHeight: open ? (h ? h + "px" : "1200px") : "0px", opacity: open ? 1 : 0, transform: open ? "translate3d(0,0,0)" : "translate3d(0,16px,0)", transition: "max-height " + MSO_VLOEI + ", opacity " + (open ? 640 : 240) + "ms var(--ease-dolle) " + (open ? vertraging : 0) + "ms, transform " + MSO_VLOEI });
  const loopVak = (
    <span key="loop" onClick={open ? (e) => e.stopPropagation() : undefined}
      style={{ position: "relative", flex: "0 0 auto", display: "block", overflow: "hidden", borderRadius: 5, width: open ? "100cqw" : "calc(" + hRij + " * " + V.loop.toFixed(4) + ")", height: open ? "56.25cqw" : hRij, transition: "width " + MSO_VLOEI + ", height " + MSO_VLOEI }}>
      <span style={{ position: "absolute", inset: 0, display: "block" }}>
        <MsoKader kader="auto" video={p.loop} poster={p.still} spelen={!film} vol={false} vullen />
      </span>
      {window.CaseFilm && film ? (
        <span style={{ position: "absolute", inset: 0, display: "block" }}>
          <window.CaseFilm key={p.naam + "-film"} bron={p.film || undefined} poster={p.still || undefined} watch />
        </span>
      ) : null}
    </span>
  );
  const stillVak = (
    <span key="still" style={{ position: "relative", flex: "0 0 auto", display: "block", overflow: "hidden", borderRadius: 5, width: open ? "0px" : "calc(" + hRij + " * " + V.still.toFixed(4) + ")", height: open ? "0px" : hRij, opacity: open ? 0 : 1, transition: "width " + MSO_VLOEI + ", height " + MSO_VLOEI + ", opacity " + (open ? 360 : 700) + "ms var(--ease-dolle)" }}>
      <span style={{ position: "absolute", inset: 0, display: "block" }}><MsoKader kader="auto" src={p.klein || p.still} vullen /></span>
    </span>
  );
  const media = (
    <div style={{ containerType: "inline-size", minWidth: 0, overflow: "hidden" }}>
      <div style={{ display: "flex", alignItems: "flex-start", gap: open ? 0 : "var(--space-3)", paddingLeft: open ? "0%" : V.x, clipPath: binnen ? "inset(0 0 0 0)" : "inset(0 100% 0 0)", transform: binnen ? "translate3d(0,0,0)" : "translate3d(-48px,0,0)", transition: "padding-left " + MSO_VLOEI + ", gap " + MSO_VLOEI + ", clip-path 1200ms cubic-bezier(.65,0,.25,1), transform 1400ms cubic-bezier(.16,.84,.24,1)" }}>
        {V.eerst === "still" ? [stillVak, loopVak] : [loopVak, stillVak]}
      </div>
      {/* Stills direct onder de film, in dezelfde kolom. */}
      <div style={vouw(hStrook, 380)} onClick={(e) => e.stopPropagation()}>
        <div ref={strook} style={{ display: "grid", gridTemplateColumns: "repeat(" + p.stills.length + ",minmax(0,1fr))", gap: "var(--space-3)", paddingTop: "var(--space-3)", cursor: "default" }}>
          {p.stills.map((s, i) => {
            const it = s && typeof s === "object" ? s : { src: s, kader: "3 / 2" };
            return <span key={i} style={{ display: "block", minWidth: 0, opacity: open ? 1 : 0, transform: open ? "translate3d(0,0,0)" : "translate3d(-40px,0,0)", transition: "opacity 700ms var(--ease-dolle) " + (open ? 420 + i * 70 : 0) + "ms, transform 900ms var(--ease-dolle) " + (open ? 420 + i * 70 : 0) + "ms" }}><MsoKader kader={it.kader === "2 / 3" ? "3 / 2" : it.kader} src={it.src} /></span>;
          })}
        </div>
      </div>
    </div>
  );
  return (
    <div ref={rijEl} id={anker} onClick={onToggle} style={{ cursor: "pointer", backgroundImage: "linear-gradient(rgba(255,255,255,0.24), rgba(255,255,255,0.24))", backgroundRepeat: "no-repeat", backgroundPosition: "0 0", backgroundSize: "var(--lijn, 0%) 1px", padding: "var(--space-4) 0" }}>
      <div data-mso-rij="1" style={{ display: "grid", gridTemplateColumns: kolommen, gap: "var(--grid-gap)", alignItems: "start", transition: "grid-template-columns " + MSO_VLOEI }}>
        {media}
        <MKicker as="span" size="sm" style={{ whiteSpace: "nowrap", color: "var(--text-muted)", opacity: binnen ? 1 : 0, transition: "opacity 700ms var(--ease-dolle) 200ms" }}>{nr}</MKicker>
        <span onClick={(e) => { e.stopPropagation(); onToggle(); }} style={{ opacity: binnen ? 1 : 0, transition: "opacity 700ms var(--ease-dolle) 300ms" }}>
          <MButton size="sm" variant="secondary" aria-expanded={open} style={{ color: "var(--dolle-white)", borderColor: "transparent" }}>{open ? "Close" : "View"}</MButton>
        </span>
        <div style={{ display: "grid", gap: "var(--space-2)", minWidth: 0 }}>
          <span style={{ display: "block", fontFamily: "var(--font-core)", fontWeight: "var(--weight-heading)", fontSize: "clamp(18px,1.9vw,28px)", letterSpacing: "var(--track-heading)", color: "var(--dolle-white)" }}><span style={vul(0)}>{p.naam}</span></span>
          <span style={{ display: "flex", gap: "var(--space-2)", flexWrap: "wrap" }}>
            {blokken.map((k, n) => <span key={k} style={{ position: "relative", display: "block", whiteSpace: "nowrap", background: "#0b1730", padding: "7px 10px 6px", fontFamily: "var(--font-label)", fontWeight: "var(--weight-label)", fontSize: "var(--size-label-sm)", letterSpacing: "var(--track-label-wide)", textTransform: "uppercase", color: "var(--text-body)" }}><span style={vul(160 + n * 140)}>{k}</span></span>)}
          </span>
          <span style={{ display: "block", overflow: "hidden" }}><p style={{ margin: 0, fontSize: "var(--size-body)", lineHeight: "var(--lh-body)", maxWidth: "45ch", transform: binnen ? "translate3d(0,0,0)" : "translate3d(0,100%,0)", opacity: binnen ? 1 : 0, transition: "transform 1000ms cubic-bezier(.16,.84,.24,1) 380ms, opacity 700ms ease 380ms" }}>{p.kort}</p></span>
          <div style={vouw(hExtra, 260)} onClick={(e) => e.stopPropagation()}>
            <div ref={extra} style={{ display: "grid", gap: "var(--space-5)", paddingTop: "var(--space-4)", cursor: "default" }}>
              <p style={{ margin: 0, fontSize: "var(--size-body)", lineHeight: "var(--lh-body)" }}>{p.alinea}</p>
              <dl style={{ margin: 0, display: "grid" }}>
                {[["Location", p.plek], ["Type", p.soort], ["Delivered", p.levering]].map(([k, w]) => (
                  <div key={k} style={{ display: "grid", gridTemplateColumns: "minmax(0,0.8fr) minmax(0,1.6fr)", gap: "var(--space-4)", borderTop: "1px solid var(--white-16, rgba(255,255,255,0.16))", padding: "var(--space-3) 0" }}>
                    <dt style={{ margin: 0 }}><MKicker as="span" size="sm" style={{ whiteSpace: "nowrap", color: "var(--text-muted)" }}>{k}</MKicker></dt>
                    <dd style={{ margin: 0 }}><MKicker as="span" size="sm" style={{ color: "var(--dolle-white)" }}>{w}</MKicker></dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function CaseMsoGroup({ go }) {
  const Film = window.CaseFilm;
  const Rij = window.CaseRij;
  const Haarlijn = window.Haarlijn;
  const [open, setOpen] = React.useState(-1);
  const [rij, setRij] = React.useState(-1);
  const [watAan, setWatAan] = React.useState(0);
  React.useEffect(() => {
    const zet = () => { const h = document.querySelector("header"); document.documentElement.style.setProperty("--mso-nav", ((h && h.offsetHeight) || 92) + "px"); };
    zet(); window.addEventListener("resize", zet);
    return () => window.removeEventListener("resize", zet);
  }, []);
  const naar = (id, extra) => {
    const el = document.getElementById(id);
    if (!el) return;
    const nav = 110;
    window.scrollTo({ top: el.getBoundingClientRect().top + window.scrollY - nav - (extra || 0), behavior: "smooth" });
  };
  const kies = (i) => {
    const plek = (naam) => MSO_PROJECTEN.findIndex((p) => p.naam === naam);
    if (i === 0) { naar("mso-projects"); return; }
    if (i === 3) { naar("mso-shorts"); return; }
    const r = plek(i === 1 ? "Hydrostripper" : "GPO ship");
    setRij(r);
    /* Eerst openklappen, dan naar de rij toe schuiven. */
    setTimeout(() => naar("mso-rij-" + r), 60);
  };
  const namen = ["Piet Klerkx", "Veteranen Search Team", "Kiela", "Dalton Medical"];
  const verwant = namen.map((n) => (window.CASES || []).find((c) => c.klant === n)).filter(Boolean);
  if (!Film) return null;
  const sectie = { background: "var(--dolle-navy)", color: "var(--text-body)", padding: "var(--space-6) var(--page-margin)" };
  const binnen = { maxWidth: "var(--content-max)", margin: "0 auto", display: "grid", gap: "var(--space-5)" };
  const naad = { backgroundImage: "linear-gradient(rgba(255,255,255,0.24), rgba(255,255,255,0.24))", backgroundRepeat: "no-repeat", backgroundPosition: "0 0", backgroundSize: "var(--lijn, 0%) 1px", paddingTop: "var(--space-6)" };
  return (
    <React.Fragment>

      <style>{"@media (max-width:860px){[data-mso-rij]{grid-template-columns:minmax(0,1fr) minmax(0,1fr) !important}[data-mso-rij]>div{grid-column:1/-1 !important}[data-mso-rij]>span:last-child{grid-column:1/-1 !important;justify-self:start !important}[data-mso-sheet]{grid-template-columns:minmax(0,1fr) !important}[data-mso-opening]{grid-template-columns:minmax(0,1fr) !important}[data-mso-wat]{grid-template-columns:repeat(2,minmax(0,1fr)) !important}}"}</style>

      {/* 01 · OPENING — zelfde kop als Woonexpress */}
      {window.CMKop ? (
        <window.CMKop titel="MSO Group" tags={["Media production", "AI systems", "Growth"]} film={MSO_VID + "mso-short-03-16x9.mp4"} start={4.5} eind={23.4} poster={MSO_BEELD + "mso-gpo-3028-web.jpg"} go={go} Knop={MButton} Woorden={window.Words ? MWords : null} Tag={window.DolleTag || MTag}>
          {window.CMIntro ? <window.CMIntro tekst={MSO_INTRO} beeld={window.CMOpeningBeeld ? <window.CMOpeningBeeld modus="groei" start={0.3} ratio="3 / 2" src={MSO_BEELD + "mso-hsd-04-web.jpg"} /> : <MsoKader kader="3 / 2" src={MSO_BEELD + "mso-hsd-04-web.jpg"} />} /> : null}
        </window.CMKop>
      ) : null}

      {/* Shorts: loops in een doorlopende band */}
      <section id="mso-shorts" className="dolle-dark" style={sectie}>
        <div style={binnen}>
          <MsoShorts />
        </div>
      </section>

      {/* 03 · DIENSTKOP 1 + 04 · HOOFDFILM */}
      <section className="dolle-dark" style={sectie}>
        <div style={binnen}>
          {window.CMLijn ? <window.CMLijn /> : null}
          <MsoDienstKop dienst="WHAT WE CAPTURE" woord={MSO_WOORDEN[watAan]} wissel />
        </div>
      </section>

      {/* 05 · WAT WE DOEN */}
      <section className="dolle-dark" style={{ ...sectie, padding: "var(--space-5) var(--page-margin) var(--space-9)" }}>
        <div style={{ ...binnen, gap: "var(--space-7)" }}>
          <MsoWat aan={watAan} setAan={setWatAan} onKies={kies} />
        </div>
      </section>

      {/* 06 · PROJECTREGISTER */}
      <section className="dolle-dark" style={{ ...sectie, paddingBottom: "var(--space-5)" }}>
        <div style={binnen}>
          <MKicker id="mso-projects" style={{ display: "block", whiteSpace: "nowrap", color: "var(--text-muted)" }}>Projects</MKicker>
          <div style={{ display: "grid" }}>
            {MSO_PROJECTEN.map((p, i) => (
              <React.Fragment key={p.naam}>
                {window.CMLijn ? <window.CMLijn basis blijf /> : null}
                <MsoRegisterRij plek={i} anker={"mso-rij-" + i} p={p} nr={"0" + (i + 1)} open={rij === i} onToggle={() => setRij(rij === i ? -1 : i)} />
              </React.Fragment>
            ))}
            {window.CMLijn ? <window.CMLijn basis blijf /> : null}
          </div>
        </div>
      </section>

      {/* 07 · DIENSTKOP 2 + 08 · AI SYSTEMS: de slotlijn van het register is de scheiding. */}
      <section className="dolle-dark" style={{ ...sectie, paddingTop: 0 }}>
        <div style={binnen}>
          <MsoDienstKop dienst="AI SYSTEMS" woord="Ahead" />
          {window.CMLijn ? <window.CMLijn basis blijf /> : null}
          <div data-mso-ai="1" style={{ display: "grid", gridTemplateColumns: "minmax(0,0.75fr) minmax(0,1.6fr)", gap: MSO_KOLOMGAT, alignItems: "start" }}>
            <style>{"@media (max-width:860px){[data-mso-ai]{grid-template-columns:minmax(0,1fr) !important}[data-mso-ai]>div:first-of-type{position:static !important}}"}</style>
            {/* Tekst begint linksboven, zakt mee met de scroll en blijft staan
                op de hoogte van de onderkant van het beeld. */}
            <div style={{ display: "grid", gap: "var(--space-3)", justifyItems: "start", maxWidth: "45ch", alignSelf: "start", position: "sticky", top: "calc(var(--mso-nav, 92px) + 24px)" }}>
              <h2 style={{ margin: 0, fontFamily: "var(--font-core)", fontWeight: "var(--weight-heading)", fontSize: "clamp(19px,2vw,27px)", letterSpacing: "var(--track-heading)", color: "var(--text-heading)" }}>AI systems</h2>
              <p style={{ margin: 0, fontSize: "var(--size-body)", lineHeight: "var(--lh-body)" }}>DOLLE builds the AI systems MSO uses to present its work. Templates, pitch decks and project files run on one design system, so every piece is on brand, ready in a fraction of the time and puts the group in front of more clients.</p>
            </div>
            <MsoKader kader="1600 / 1068" src={MSO_BEELD + "mso-ai-design-web.jpg"} />
          </div>
        </div>
      </section>

      {/* 09 · DELIVERABLES */}
      {window.CMData ? <window.CMData kop="Deliverables" beeld={MSO_BEELD + "mso-gpo-3028-web.jpg"} waas={0.42} cijfers={MSO_DATA} Tag={window.DolleTag || MTag} review={{ tekst: "DOLLE has been part of our projects since 2024 and knows how we work on site. They move safely around heavy operations, fly where few are allowed and turn weeks of work into films we use in every tender and on every channel. Reliable, sharp and always ahead of what we need.", naam: "Name", rol: "Marketing, MSO Group" }} tags={["Direction", "Production", "Edit", "Photography", "Certified drone", "AI systems"]} /> : null}

      {/* 10 · RELATED WORK */}
      <section className="dolle-dark" style={{ background: "var(--dolle-navy)", padding: "var(--space-6) var(--page-margin)" }}>
        <div style={{ maxWidth: "var(--content-max)", margin: "0 auto", display: "grid", gap: "var(--space-4)", gridTemplateColumns: "minmax(0,1fr)" }}>
          <MKicker style={{ display: "block", whiteSpace: "nowrap", color: "var(--text-muted)" }}>Related work</MKicker>
          <div style={{ display: "grid", gridTemplateColumns: "minmax(0,1fr)" }}>
            {Rij ? verwant.map((c, i) => (
              <Rij key={c.id} c={c} i={i} go={go} open={open === c.id} onToggle={() => setOpen(open === c.id ? -1 : c.id)} />
            )) : null}
            {Haarlijn ? <Haarlijn /> : null}
          </div>
        </div>
      </section>

      {/* 11 · CTA */}
      {window.HomeConversie ? <window.HomeConversie go={go} tone="dark" /> : null}

    </React.Fragment>
  );
}

window.CaseMsoGroup = CaseMsoGroup;
