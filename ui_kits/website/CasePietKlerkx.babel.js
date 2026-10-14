const PK_DS = window.DesignSystem_8f95a2;
const { Kicker: PKKicker, Icon: PKIcon, Button: PKButton } = PK_DS;
const { Words: PKWords, DolleTag: PKTag } = window;

/* CASE DETAIL · PIET KLERKX · EXTENDED-variant.
   Opbouw: opening met tekst en twee stills, de commercial met de cutdowns per
   doelgroep, de winkelfilm-stills, collectiecampagnes met reels, de
   samenwerking met Monique (Modern Oasis), de company events met kickoff-beeld
   en tot slot de blokken zonder beeld, deliverables en verwant werk. */

const PK = "../../assets/cases/pietklerkx/";
const PK_VID = "../../assets/video/";
const PK_KOLOMGAT = "var(--space-5)";

const PK_HERO = PK + "pk-hero-dining-web.jpg";
const PK_HERO_2 = PK + "pk-still-05-web.jpg";

/* Cutdowns van de commercial, per doelgroep en per kanaalformaat. */
const PK_CUTDOWNS = [
  { video: PK_VID + "pietklerkx-45sec-9x16.mp4", label: "Commercial · 9:16", terug: PK + "pk-still-08-web.jpg" },
  { src: PK + "pk-still-01-web.jpg", label: "Still · 9:16" },
  { video: PK_VID + "pietklerkx-gezin-9x16.mp4", label: "Family · 9:16", terug: PK + "pk-still-05-web.jpg" },
  { src: PK + "pk-still-06-web.jpg", label: "Still · 9:16" },
  { video: PK_VID + "pietklerkx-stel-9x16.mp4", label: "Couple · 9:16", terug: PK + "pk-still-04-web.jpg" },
  { src: PK + "pk-still-02-web.jpg", label: "Still · 9:16" },
  { video: PK_VID + "pietklerkx-professional-9x16.mp4", label: "Professional · 9:16", terug: PK + "pk-still-03-web.jpg" },
  { src: PK + "pk-still-07-web.jpg", label: "Still · 9:16" }
];
const PK_BREED = [
  { video: PK_VID + "pietklerkx-gezin-16x9.mp4", label: "Family · 16:9", terug: PK + "pk-still-05-web.jpg" },
  { src: PK + "pk-still-03-web.jpg", label: "Still · 16:9" },
  { video: PK_VID + "pietklerkx-stel-16x9.mp4", label: "Couple · 16:9", terug: PK + "pk-still-04-web.jpg" },
  { src: PK + "pk-still-04-web.jpg", label: "Still · 16:9" },
  { video: PK_VID + "pietklerkx-professional-16x9.mp4", label: "Professional · 16:9", terug: PK + "pk-still-03-web.jpg" },
  { src: PK + "pk-still-02-web.jpg", label: "Still · 16:9" }
];

/* Collectiecampagnes: beeld en reel om en om in één strook, zodat foto en film
   door elkaar lopen in plaats van in aparte blokken. */
const PK_COLLECTIE = [
  { src: PK + "pk-collectie-01-web.jpg", ratio: "2 / 3", breed: 240, zak: 0, tekst: "Titelo · collection" },
  { video: PK_VID + "pietklerkx-reel-tafel-1-styling.mp4", ratio: "9 / 16", breed: 200, zak: 16, terug: PK + "pk-collectie-03-web.jpg", tekst: "Table · styling" },
  { src: PK + "pk-collectie-03-web.jpg", ratio: "3 / 2", breed: 330, zak: -14, tekst: "Vasto · collection" },
  { video: PK_VID + "pietklerkx-reel-bank-1-styling.mp4", ratio: "9 / 16", breed: 200, zak: 12, terug: PK + "pk-collectie-02-web.jpg", tekst: "Sofa · styling" },
  { src: PK + "pk-collectie-02-web.jpg", ratio: "2 / 3", breed: 240, zak: -10, tekst: "Prelude · collection" },
  { video: PK_VID + "pietklerkx-reel-tafel-2-styling.mp4", ratio: "9 / 16", breed: 200, zak: 14, terug: PK + "pk-collectie-01-web.jpg", tekst: "Table · styling" },
  { src: PK + "pk-collectie-04-web.jpg", ratio: "3 / 2", breed: 330, zak: 0, tekst: "Grand · collection" }
];
/* De productreels los daarvan, alleen film — geen stills uit de commercial. */
const PK_REELS = [
  { video: PK_VID + "pietklerkx-reel-bank-1-product.mp4", label: "Sofa · product", terug: PK + "pk-collectie-04-web.jpg" },
  { video: PK_VID + "pietklerkx-reel-tafel-1-product.mp4", label: "Table · product", terug: PK + "pk-collectie-01-web.jpg" },
  { video: PK_VID + "pietklerkx-reel-bank-2-product.mp4", label: "Sofa · product", terug: PK + "pk-collectie-02-web.jpg" },
  { video: PK_VID + "pietklerkx-reel-tafel-2-product.mp4", label: "Table · product", terug: PK + "pk-collectie-03-web.jpg" }
];

/* Socialcampagnes met trendwatcher Monique van der Reijden: de fragmenten om en
   om met beeld, de cutdowns los daaronder. */
const PK_MONIQUE = [1, 2, 4].map((n) => ({
  video: PK_VID + "pietklerkx-monique-0" + n + ".mp4", ratio: "9 / 16", breed: 210, zak: [0, 16, -14, 12, -10][n - 1],
  terug: PK + "pk-collectie-0" + ((n % 4) + 1) + "-web.jpg", tekst: "Monique van der Reijden"
}));
PK_MONIQUE.splice(2, 0, { src: PK + "pk-collectie-04-web.jpg", ratio: "3 / 2", breed: 320, zak: -12, tekst: "Modern Oasis · collection" });
/* Alle shorts van Monique in één band, onder het Monique-blok. */
const PK_MQ = (n) => PK + "pk-monique-" + n + "-web.jpg";
const PK_MONIQUE_BAND = [
  { video: PK_VID + "pietklerkx-oasis-monique-02.mp4", terug: PK_MQ("03"), ratio: "9 / 16", breed: 240, zak: 0, tekst: "Monique van der Reijden" },
  { src: PK_MQ("04"), ratio: "9 / 16", breed: 240, zak: 18, tekst: "Monique van der Reijden" },
  { video: PK_VID + "pietklerkx-monique-01.mp4", terug: PK_MQ("04"), ratio: "9 / 16", breed: 240, zak: -12, tekst: "Monique van der Reijden" },
  { video: PK_VID + "pietklerkx-oasis-monique-01.mp4", terug: PK_MQ("02"), ratio: "9 / 16", breed: 240, zak: -16, tekst: "Monique van der Reijden" },
  { src: PK_MQ("03"), ratio: "9 / 16", breed: 240, zak: 14, tekst: "Monique van der Reijden" },
  { video: PK_VID + "pietklerkx-monique-02.mp4", terug: PK_MQ("04"), ratio: "9 / 16", breed: 240, zak: 0, tekst: "Monique van der Reijden" },
  { src: PK_MQ("02"), ratio: "9 / 16", breed: 240, zak: -14, tekst: "Modern Oasis · Monique" },
  { video: PK_VID + "pietklerkx-oasis-monique-03.mp4", terug: PK_MQ("03"), ratio: "9 / 16", breed: 240, zak: 12, tekst: "Monique van der Reijden" }
];
const PK_OASIS = [
  { video: PK_VID + "pietklerkx-oasis-monique-01.mp4", terug: PK + "pk-collectie-01-web.jpg", label: "Modern Oasis · 9:16" },
  { video: PK_VID + "pietklerkx-oasis-monique-02.mp4", terug: PK + "pk-collectie-02-web.jpg", label: "Modern Oasis · 9:16" },
  { video: PK_VID + "pietklerkx-oasis-monique-03.mp4", terug: PK + "pk-collectie-03-web.jpg", label: "Modern Oasis · 9:16" },
  { video: PK_VID + "pietklerkx-oasis-monique-04.mp4", terug: PK + "pk-collectie-04-web.jpg", label: "Modern Oasis · 9:16" }
];

/* Carrousel van het kickoff-event: winkelvloer, borrel, buffet en podium. */
const PK_ORDE = [
  ["pk-kickoff-02", "3 / 2"], ["pk-kickoff-17", "2 / 3"], ["pk-kickoff-05", "1 / 1"],
  ["pk-kickoff-16", "3 / 2"], ["pk-kickoff-04", "3 / 2"], ["pk-kickoff-19", "3 / 2"],
  ["pk-kickoff-18", "1 / 1"], ["pk-kickoff-09", "3 / 2"], ["pk-kickoff-15", "2 / 3"],
  ["pk-kickoff-13", "3 / 2"], ["pk-kickoff-25", "3 / 2"], ["pk-kickoff-22", "2 / 3"],
  ["pk-kickoff-29", "1 / 1"], ["pk-kickoff-33", "3 / 2"], ["pk-kickoff-39", "3 / 2"]
];
const PK_KAARTEN = PK_ORDE.map(([naam, ratio], i) => {
  const breedtes = [300, 240, 330, 260, 310, 230];
  const zakken = [0, 18, -16, 12, -20, 14];
  return { src: PK + naam + "-web.jpg", ratio: ratio, breed: breedtes[i % breedtes.length], zak: zakken[i % zakken.length],
    tekst: "Piet Klerkx · spring kick-off" };
});
/* De event-cutdown staat vooraan in de carrousel, zodat hij direct in beeld is. */
PK_KAARTEN.splice(0, 0, {
  video: PK_VID + "pietklerkx-event-9x16.mp4", ratio: "9 / 16", breed: 210, zak: 10,
  terug: PK + "pk-kickoff-32-web.jpg", tekst: "Event cutdown · 9:16"
});

const PK_BLOKKEN = [];

/* trim: sleutel waarmee de trimpagina (pietklerkx-fpv-trim.html) het in- en
   uitpunt van deze film bewaart; de kaart leest die stand uit. */
const PK_FPV = [
  { video: PK_VID + "pietklerkx-fpv-amsterdam.mp4", label: "FPV · Amsterdam", terug: PK + "pk-still-08-web.jpg", trim: "amsterdam" },
  { video: PK_VID + "pietklerkx-fpv-waalwijk.mp4", label: "FPV · Waalwijk", terug: PK + "pk-kickoff-02-web.jpg", trim: "waalwijk", start: 18.95, eind: 23.65 },
  { video: PK_VID + "pietklerkx-fpv-rotterdam.mp4", label: "FPV · Rotterdam", terug: PK + "pk-still-03-web.jpg", trim: "rotterdam" }
];

const PK_INTRO = [
  "Piet Klerkx is a home furnishing retailer in the higher segment, with stores built around inspiration rather than inventory. Exclusive pieces from established brands, presented as complete interiors.",
  "Since 2023, DOLLE has produced everything from store openings in FPV drone films to collection campaigns, influencer content and company events. One partner for every location and every season."
];
/* Cijfers voor het datablok; een streepje tot het echte aantal binnen is. */
const PK_DATA = [
  { label: "Views generated", waarde: "—" },
  { label: "Collections", waarde: 4 },
  { label: "FPV store films", waarde: 3 },
  { label: "Films delivered", waarde: "—" }
];
const PK_LEVERING = ["FPV", "Concept", "Direction", "Production", "Edit", "Photography", "Styling"];

/* De pagina is opgedeeld in kapittels: dicht zie je één hero-beeld met de titel,
   open klapt de volledige productie uit. */
function PKKlik({ bron, poster, kader, onder }) {
  const ref = React.useRef(null);
  const [actief, setActief] = React.useState(false);
  React.useEffect(() => {
    const stop = (e) => { if (e.detail !== ref.current && ref.current) { ref.current.muted = true; ref.current.controls = false; ref.current.pause(); setActief(false); } };
    window.addEventListener("pk-geluid", stop);
    return () => window.removeEventListener("pk-geluid", stop);
  }, []);
  const aan = () => { const el = ref.current; if (el && !actief) { el.muted = true; el.play().catch(() => {}); } };
  const uit = () => { const el = ref.current; if (el && !actief) el.pause(); };
  const klik = () => {
    const el = ref.current; if (!el || actief) return;
    window.dispatchEvent(new CustomEvent("pk-geluid", { detail: el }));
    el.currentTime = 0; el.muted = false; el.controls = true; el.loop = false;
    el.play().catch(() => {});
    el.onended = () => { el.controls = false; el.muted = true; el.loop = true; setActief(false); };
    setActief(true);
  };
  return (
    <div style={{ display: "grid", gap: "var(--space-3)", minWidth: 0 }}>
      <span onMouseEnter={aan} onMouseLeave={uit} onClick={klik} style={{ position: "relative", display: "block", aspectRatio: kader, overflow: "hidden", borderRadius: 5, background: "#0a1428", cursor: actief ? "default" : "pointer" }}>
        <video ref={ref} src={bron} poster={poster} muted loop playsInline preload="metadata" style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover", display: "block" }} />
      </span>
      {onder ? <PKKicker size="sm" style={{ color: "var(--text-muted)" }}>{onder}</PKKicker> : null}
    </div>
  );
}

/* Foto die binnen zijn kader meebeweegt met de scroll. */
function PKParallax({ src, kader }) {
  const vak = React.useRef(null), img = React.useRef(null);
  React.useEffect(() => {
    if (window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    let raf = 0;
    const tik = () => {
      raf = 0; const v = vak.current, i = img.current; if (!v || !i) return;
      const b = v.getBoundingClientRect(), vh = window.innerHeight || 800;
      if (b.bottom < -100 || b.top > vh + 100) return;
      const p = Math.max(-1, Math.min(1, ((b.top + b.height / 2) - vh / 2) / (vh / 2 + b.height / 2)));
      i.style.transform = "translate3d(0," + (p * b.height * 0.09).toFixed(1) + "px,0) scale(1.2)";
    };
    const op = () => { if (!raf) raf = requestAnimationFrame(tik); };
    tik(); window.addEventListener("scroll", op, { passive: true, capture: true }); window.addEventListener("resize", op);
    return () => { window.removeEventListener("scroll", op, true); window.removeEventListener("resize", op); if (raf) cancelAnimationFrame(raf); };
  }, []);
  return <span ref={vak} style={{ display: "block", aspectRatio: kader, overflow: "hidden", borderRadius: 5, background: "#0a1428", minWidth: 0 }}><img ref={img} src={src} alt="" loading="lazy" decoding="async" style={{ display: "block", width: "100%", height: "100%", objectFit: "cover", transform: "scale(1.2)", willChange: "transform" }} /></span>;
}

function PKStill({ src, kader }) {
  return <span style={{ display: "block", aspectRatio: kader, overflow: "hidden", borderRadius: 5, background: "#0a1428", minWidth: 0 }}><img src={src} alt="" loading="lazy" decoding="async" style={{ display: "block", width: "100%", height: "100%", objectFit: "cover" }} /></span>;
}

const PK_KAPITTELS = [
  { id: "brandmovie", kicker: "MEDIA PRODUCTION", kop: "Brand movie", regel: "One campaign film of 45 seconds, shot across the store.", hero: PK + "pk-still-05-web.jpg" },
  { id: "cutdowns", kicker: "SOCIAL CUTDOWNS & STILLS", kop: "Cutdowns & stills", regel: "The campaign cut down per audience and per channel, plus the campaign stills.", hero: PK + "pk-still-03-web.jpg" },
  { id: "monique", kicker: "SOCIAL CAMPAIGNS · INFLUENCER COLLABORATION", kop: "Monique van der Reijden", regel: "Social campaigns around the collections with trendwatcher Monique van der Reijden.", hero: PK + "pk-collectie-02-web.jpg" },
  { id: "collecties", kicker: "COLLECTION CAMPAIGNS & PHOTOGRAPHY", kop: "Collections & photography", regel: "Styling, photography and film for the new collections, delivered per channel.", hero: PK + "pk-collectie-04-web.jpg" },
  { id: "drone", kicker: "FPV DRONE STORE VIDEOS", kop: "FPV drone store videos", regel: "Every new store in a single continuous FPV flight.", hero: PK + "pk-still-08-web.jpg" },
  { id: "heritage", kicker: "HERITAGE & CULTURAL EVENTS", kop: "Heritage & cultural events", regel: "95 years of Piet Klerkx, the kick-offs and the location events.", hero: PK + "pk-kickoff-29-web.jpg" }
];

function PKKapittel({ k, children }) {
  return (
    <section className="dolle-dark" style={{ background: "var(--dolle-navy)", color: "var(--text-body)", padding: "var(--space-6) var(--page-margin)" }}>
      <div style={{ maxWidth: "var(--content-max)", margin: "0 auto", display: "grid", gap: "var(--space-5)", backgroundImage: "linear-gradient(rgba(255,255,255,0.24), rgba(255,255,255,0.24))", backgroundRepeat: "no-repeat", backgroundPosition: "0 0", backgroundSize: "var(--lijn, 0%) 1px", paddingTop: "var(--space-6)" }}>
        <PKKicker style={{ display: "block", whiteSpace: "nowrap", color: "var(--text-muted)" }}>{k.kicker}</PKKicker>
        <div style={{ display: "grid", gap: "var(--space-4)" }}>{children}</div>
      </div>
    </section>
  );
}

/* Selectie uit pietklerkx-selectie.html: per bestand aan of uit. Wat niet in de
   selectie staat blijft staan, zodat nieuwe media standaard meedoen. */
function pkNaam(m) { const p = m.video || m.src || ""; return p.slice(p.lastIndexOf("/") + 1); }
function pkKies(lijst, blok) {
  let keuze = null;
  try { keuze = JSON.parse(window.localStorage.getItem("pk-selectie")); } catch (e) {}
  if (!keuze) return lijst;
  return lijst.filter((m) => keuze[blok + "|" + pkNaam(m)] !== false);
}

/* Kanaalkaart: kader met het formaat eronder, zodat een reeks leest als een set
   formaten in plaats van losse beelden. */
function PKKaart({ item, kader }) {
  const vid = React.useRef(null);
  /* Trim uit de trimpagina; valt terug op de waarden in de kaart zelf. */
  const trim = React.useMemo(() => {
    let uit = { start: item.start != null ? item.start : null, eind: item.eind != null ? item.eind : null };
    if (item.trim) {
      try { const q = JSON.parse(window.localStorage.getItem("pk-fpv-trim-" + item.trim)); if (q) uit = { start: q.start, eind: q.eind }; } catch (e) {}
    }
    return uit;
  }, [item.trim, item.start, item.eind]);
  /* Een kaart met start (en eventueel eind) speelt alleen dat fragment en
     herhaalt het, zodat een lange film op het goede moment begint. */
  React.useEffect(() => {
    const v = vid.current;
    if (!v || trim.start == null) return;
    const begin = () => { if (v.currentTime < trim.start - 0.1) v.currentTime = trim.start; };
    const tik = () => {
      if (trim.eind != null && trim.eind < (v.duration || 1e9) && v.currentTime >= trim.eind) { v.currentTime = trim.start; return; }
      if (v.currentTime < trim.start - 0.25) v.currentTime = trim.start;
    };
    v.addEventListener("loadedmetadata", begin);
    v.addEventListener("seeked", tik);
    v.addEventListener("timeupdate", tik);
    if (v.readyState >= 1) { v.currentTime = trim.start; }
    return () => { v.removeEventListener("loadedmetadata", begin); v.removeEventListener("seeked", tik); v.removeEventListener("timeupdate", tik); };
  }, [trim.start, trim.eind]);
  if (item.video && trim.start != null) {
    return (
      <div style={{ display: "grid", gap: "var(--space-2)", minWidth: 0 }}>
        <div style={{ position: "relative", aspectRatio: kader, overflow: "hidden", borderRadius: 5, background: "#0b1730", border: "1px solid var(--white-16, rgba(255,255,255,0.16))" }}>
          <video ref={vid} src={item.video} autoPlay muted loop playsInline preload="metadata" poster={item.terug} style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover", display: "block" }} />
        </div>
        <PKKicker size="sm" style={{ display: "block", whiteSpace: "nowrap", color: "var(--text-muted)" }}>{item.label}</PKKicker>
      </div>
    );
  }
  return (
    <div style={{ display: "grid", gap: "var(--space-2)", minWidth: 0 }}>
      <div style={{ position: "relative", aspectRatio: kader, overflow: "hidden", background: "#0b1730", border: "1px solid var(--white-16, rgba(255,255,255,0.16))" }}>
        {item.video
          ? (window.CaseLoop
            ? <window.CaseLoop bron={item.video} terug={item.terug} stijl={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover", display: "block" }} />
            : <video src={item.video} autoPlay muted loop playsInline preload="metadata" style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover", display: "block" }} />)
          : <img src={item.src} alt="" loading="lazy" decoding="async" style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover", display: "block" }} />}
      </div>
      <PKKicker size="sm" style={{ display: "block", whiteSpace: "nowrap", color: "var(--text-muted)" }}>{item.label}</PKKicker>
    </div>
  );
}

function PKBlokTekst({ kop, tekst, rechts }) {
  return (
    <div style={{ display: "grid", gap: "var(--space-3)", justifyItems: rechts ? "end" : "start", justifySelf: rechts ? "end" : "start", textAlign: rechts ? "right" : "left", maxWidth: "45ch" }}>
      <h3 style={{ margin: 0, fontFamily: "var(--font-core)", fontWeight: "var(--weight-heading)", fontSize: "clamp(19px,2vw,27px)", letterSpacing: "var(--track-heading)", color: "var(--text-heading)" }}>{kop}</h3>
      <p style={{ margin: 0, fontSize: "var(--size-body)", lineHeight: "var(--lh-body)" }}>{tekst}</p>
    </div>
  );
}

/* Band onder de intro: loops uit alle producties door elkaar. */
const PK_BAND = [
  { video: PK_VID + "pietklerkx-reel-bank-1-styling.mp4", r: 9 / 16 },
  { video: PK_VID + "pietklerkx-gezin-16x9.mp4", r: 16 / 9 },
  { video: PK_VID + "pietklerkx-monique-02.mp4", r: 9 / 16 },
  { src: PK + "pk-collectie-03-web.jpg", r: 3 / 2 },
  { video: PK_VID + "pietklerkx-reel-tafel-1-product.mp4", r: 4 / 5 },
  { video: PK_VID + "pietklerkx-stel-16x9.mp4", r: 16 / 9 },
  { video: PK_VID + "pietklerkx-oasis-monique-01.mp4", r: 9 / 16 },
  { src: PK + "pk-kickoff-09-web.jpg", r: 3 / 2 }
];

/* Eén blok per verhaal: tekst en één beeld, om en om van kant. */
function PKBlok({ kop, tekst, i, children, meeloop, vol, onder }) {
  const links = i % 2 === 1;
  const Lijn = window.CMLijn;
  /* meeloop: de tekst zakt met de scroll mee en blijft staan zodra zijn
     onderkant gelijk ligt met de onderkant van het beeld. */
  const t = (
    <div style={{ display: "grid", gap: "var(--space-3)", justifyItems: "start", maxWidth: "45ch", alignSelf: "start", ...(meeloop ? { position: "sticky", top: "calc(var(--pk-nav, 92px) + 24px)" } : {}) }}>
      <h2 style={{ margin: 0, fontFamily: "var(--font-core)", fontWeight: "var(--weight-heading)", fontSize: "clamp(19px,2vw,27px)", letterSpacing: "var(--track-heading)", color: "var(--text-heading)" }}>{kop}</h2>
      <p style={{ margin: 0, fontSize: "var(--size-body)", lineHeight: "var(--lh-body)" }}>{tekst}</p>
    </div>
  );
  const m = <div style={{ minWidth: 0 }}>{children}</div>;
  return (
    <div style={{ display: "grid", gap: "var(--space-6)" }}>
      {Lijn ? <Lijn /> : null}
      {vol ? (
        <div style={{ display: "grid", gap: "var(--space-5)" }}>{t}{m}</div>
      ) : (
        <div data-pk-blok="1" style={{ display: "grid", gridTemplateColumns: links ? "minmax(0,1.25fr) minmax(0,0.9fr)" : "minmax(0,0.9fr) minmax(0,1.25fr)", gap: "calc(var(--grid-gap) * 1.1)", alignItems: "start" }}>
          {links ? [<React.Fragment key="m">{m}</React.Fragment>, <React.Fragment key="t">{t}</React.Fragment>] : [<React.Fragment key="t">{t}</React.Fragment>, <React.Fragment key="m">{m}</React.Fragment>]}
        </div>
      )}
      {onder || null}
    </div>
  );
}

/* Store commercial: dicht staan tekst en film naast elkaar. Een klik maakt
   ruimte: de film schuift onder de tekst en speelt over de volle breedte.
   Nog een klik op de film klapt hem terug. */
function PKCommercial({ Film }) {
  const [groot, setGroot] = React.useState(false);
  const [versie, setVersie] = React.useState(0);
  const vak = React.useRef(null);
  const voor = React.useRef(null);
  const wissel = (aan) => { if (vak.current) voor.current = vak.current.getBoundingClientRect(); setGroot(aan); if (!aan) setVersie((n) => n + 1); };
  React.useLayoutEffect(() => {
    const el = vak.current, o = voor.current; if (!el || !o) return;
    voor.current = null;
    const n = el.getBoundingClientRect(); if (!n.width) return;
    el.style.transition = "none";
    el.style.transformOrigin = "0 0";
    el.style.transform = "translate(" + (o.left - n.left) + "px," + (o.top - n.top) + "px) scale(" + (o.width / n.width) + ")";
    el.getBoundingClientRect();
    el.style.transition = "transform 900ms cubic-bezier(.16,.84,.24,1)";
    el.style.transform = "none";
    if (groot) {
      /* Na het openen de film midden in beeld scrollen. */
      let s = el.parentElement;
      while (s && s !== document.body && !(/(auto|scroll)/.test(getComputedStyle(s).overflowY) && s.scrollHeight > s.clientHeight)) s = s.parentElement;
      const doel = s && s !== document.body ? s : null;
      const vh = doel ? doel.clientHeight : window.innerHeight;
      const top0 = doel ? doel.getBoundingClientRect().top : 0;
      const mid = n.top - top0 + n.height / 2 - vh / 2;
      setTimeout(() => { if (doel) doel.scrollBy({ top: mid, behavior: "smooth" }); else window.scrollBy({ top: mid, behavior: "smooth" }); }, 60);
    }
  }, [groot]);
  const klik = (e) => {
    if (!groot) { wissel(true); return; }
    if (e.target && e.target.tagName === "VIDEO") { e.preventDefault(); e.stopPropagation(); wissel(false); }
  };
  const tekst = (
    <div style={{ display: "grid", gap: "var(--space-4)", maxWidth: "45ch", alignContent: "start" }}>
      <h2 style={{ margin: 0, fontFamily: "var(--font-core)", fontWeight: "var(--weight-heading)", fontSize: "clamp(22px,2.6vw,36px)", letterSpacing: "var(--track-heading)", color: "var(--text-heading)" }}>Waalwijk store commercial</h2>
      <p style={{ margin: 0, fontSize: "var(--size-body)", lineHeight: "var(--lh-body)" }}>Shot across the store: the floor, the brasserie and the people who work there. From that single production the campaign runs on, cut down per audience and per channel.</p>
    </div>
  );
  const wildly = (
    <span style={{ justifySelf: "end", fontFamily: "var(--font-core)", fontWeight: "var(--weight-heading)", fontSize: "clamp(18px,2.2vw,30px)", letterSpacing: "var(--track-wildly)", textTransform: "uppercase", color: "var(--text-heading)", whiteSpace: "nowrap" }}>
      Wildly <span style={{ color: "var(--text-accent)" }}>Visible</span>
    </span>
  );
  return (
    <div data-pk-blok={groot ? undefined : "1"} style={{ display: "grid", gridTemplateColumns: groot ? "minmax(0,1fr)" : "minmax(0,0.9fr) minmax(0,1.25fr)", gap: groot ? "var(--space-5)" : "calc(var(--grid-gap) * 1.1)", alignItems: "start" }}>
      {groot ? <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", gap: "var(--space-6)", flexWrap: "wrap" }}>{tekst}{wildly}</div> : tekst}
      <div style={{ display: "grid", gap: "var(--space-4)", minWidth: 0 }}>
      {groot ? null : wildly}
      <div ref={vak} onClickCapture={klik} style={{ minWidth: 0, cursor: groot ? "default" : "pointer", willChange: "transform" }}>
        <Film key={versie} bron={PK_VID + "pietklerkx-45sec-16x9.mp4"} poster={PK + "pk-still-08-web.jpg"} onderschrift="STORE COMMERCIAL · WAALWIJK" watch />
      </div>
      </div>
    </div>
  );
}

/* Cutdowns en stills uit dezelfde productie in één doorlopende band. */
const PK_CUTBAND = [
  { video: PK_VID + "pietklerkx-gezin-9x16.mp4", r: 9 / 16 },
  { src: PK + "pk-still-01-web.jpg", r: 16 / 9 },
  { video: PK_VID + "pietklerkx-stel-16x9.mp4", r: 16 / 9 },
  { src: PK + "pk-still-05-web.jpg", r: 1600 / 1264 },
  { video: PK_VID + "pietklerkx-professional-9x16.mp4", r: 9 / 16 },
  { src: PK + "pk-still-02-web.jpg", r: 16 / 9 },
  { video: PK_VID + "pietklerkx-45sec-9x16.mp4", r: 9 / 16 },
  { src: PK + "pk-still-06-web.jpg", r: 16 / 9 },
  { video: PK_VID + "pietklerkx-gezin-16x9.mp4", r: 16 / 9 },
  { src: PK + "pk-still-04-web.jpg", r: 16 / 9 },
  { video: PK_VID + "pietklerkx-stel-9x16.mp4", r: 9 / 16 },
  { src: PK + "pk-still-07-web.jpg", r: 16 / 9 }
];

/* Cutdowns: dicht drie formaten; een klik opent alle cutdowns met de
   campagnestills eronder. */
const PK_STILLS = [1, 2, 4, 5, 6, 7].map((n) => PK + "pk-still-0" + n + "-web.jpg");
function PKCutdowns({ open, setOpen }) {
  return (
    <div onClickCapture={() => { if (!open) setOpen(true); }} data-pk-drie="1" style={{ display: "grid", gridTemplateColumns: "repeat(3,minmax(0,1fr))", gap: "var(--space-3)" }}>
      <PKKlik bron={PK_VID + "pietklerkx-gezin-9x16.mp4"} poster={PK + "pk-still-05-web.jpg"} kader="9 / 16" onder="FAMILY" />
      <PKKlik bron={PK_VID + "pietklerkx-stel-9x16.mp4"} poster={PK + "pk-still-06-web.jpg"} kader="9 / 16" onder="COUPLE" />
      <PKKlik bron={PK_VID + "pietklerkx-professional-9x16.mp4"} poster={PK + "pk-still-03-web.jpg"} kader="9 / 16" onder="PROFESSIONAL" />
    </div>
  );
}
function PKCutdownsOpen({ open, setOpen }) {
  return (
    <div style={{ display: "grid", gridTemplateRows: open ? "1fr" : "0fr", transition: "grid-template-rows 900ms cubic-bezier(.16,.84,.24,1)" }}>
      <div style={{ overflow: "hidden", minHeight: 0 }}>
        <div style={{ display: "grid", gap: "var(--space-5)", paddingTop: "var(--space-2)", opacity: open ? 1 : 0, transition: "opacity 700ms ease 200ms" }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", gap: "var(--space-4)" }}>
            <PKKicker style={{ color: "var(--text-muted)" }}>All cutdowns</PKKicker>
            <PKButton size="sm" variant="secondary" onClick={() => setOpen(false)} style={{ color: "var(--dolle-white)", borderColor: "transparent" }}>Close</PKButton>
          </div>
          <div data-pk-vier="1" style={{ display: "grid", gridTemplateColumns: "repeat(4,minmax(0,1fr))", gap: "var(--space-3)" }}>
            {PK_CUTDOWNS.filter((c) => c.video).map((c) => <PKKlik key={c.video} bron={c.video} poster={c.terug} kader="9 / 16" onder={c.label} />)}
          </div>
          <div data-pk-vier="1" style={{ display: "grid", gridTemplateColumns: "repeat(3,minmax(0,1fr))", gap: "var(--space-3)" }}>
            {PK_BREED.filter((c) => c.video).map((c) => <PKKlik key={c.video} bron={c.video} poster={c.terug} kader="16 / 9" onder={c.label} />)}
          </div>
          <PKKicker style={{ color: "var(--text-muted)", paddingTop: "var(--space-3)" }}>Campaign stills</PKKicker>
          <div data-pk-vier="1" style={{ display: "grid", gridTemplateColumns: "repeat(3,minmax(0,1fr))", gap: "var(--space-3)" }}>
            {PK_STILLS.map((s) => <PKStill key={s} src={s} kader="16 / 9" />)}
          </div>
        </div>
      </div>
    </div>
  );
}

/* Cultural events: band met kickoff-beelden, groter dan in de oude carrousel. */
const PK_EVENTS = PK_KAARTEN.map((k) => { const [w, h] = k.ratio.split("/").map(Number); return { ...k, breed: Math.round(380 * w / h), zak: 0 }; });

function CasePietKlerkx({ go }) {
  React.useEffect(() => {
    const zet = () => { const h = document.querySelector("header"); document.documentElement.style.setProperty("--pk-nav", ((h && h.offsetHeight) || 92) + "px"); };
    zet(); window.addEventListener("resize", zet);
    return () => window.removeEventListener("resize", zet);
  }, []);
  const Film = window.CaseFilm;
  const Rij = window.CaseRij;
  const Haarlijn = window.Haarlijn;
  const Band = window.BVBand;
  const Hover = window.BVHover;
  const [open, setOpen] = React.useState(-1);
  const verwant = ["Woonexpress", "Montel", "Kiela", "Landgoed Bergvliet"].map((n) => (window.CASES || []).find((c) => c.klant === n)).filter(Boolean);
  if (!Film || !Band || !Hover) return null;
  const sectie = { background: "var(--dolle-navy)", color: "var(--text-body)", padding: "var(--space-6) var(--page-margin)" };
  const binnen = { maxWidth: "var(--content-max)", margin: "0 auto", display: "grid", gap: "var(--space-5)" };
  const kop2 = { margin: 0, fontFamily: "var(--font-core)", fontWeight: "var(--weight-heading)", fontSize: "clamp(22px,2.6vw,36px)", letterSpacing: "var(--track-heading)", color: "var(--text-heading)" };
  return (
    <React.Fragment>

      <style>{"@media (max-width:860px){[data-pk-blok],[data-pk-opening]{grid-template-columns:minmax(0,1fr) !important}[data-pk-vier]{grid-template-columns:repeat(2,minmax(0,1fr)) !important}}"}</style>

      {/* 01 · OPENING — zelfde kop als Woonexpress */}
      {window.CMKop ? (
        <window.CMKop titel="Piet Klerkx" tags={["Media production", "Growth", "Launches"]} film={PK_VID + "pietklerkx-overview-loop.mp4"} poster={PK + "pk-still-08-web.jpg"} go={go} Knop={PKButton} Woorden={PKWords} Tag={PKTag}>
          {window.CMIntro ? <window.CMIntro tekst={PK_INTRO} beeld={window.CMOpeningBeeld ? <window.CMOpeningBeeld modus="groei" start={0.3} ratio="16 / 9" src={PK_HERO} /> : <PKStill src={PK_HERO} kader="16 / 9" />} /> : null}
        </window.CMKop>
      ) : null}

      {/* 02 · BAND MET LOOPS */}
      <section className="dolle-dark" style={{ background: "var(--dolle-navy)", padding: "0 var(--page-margin) var(--space-6)" }}>
        <div style={{ maxWidth: "var(--content-max)", margin: "0 auto" }}>
          <Band items={PK_BAND} hoog="clamp(200px,24vw,340px)" golf />
        </div>
      </section>

      {/* 03 · WAALWIJK STORE COMMERCIAL */}
      <section className="dolle-dark" style={sectie}>
        <div style={binnen}>
          {window.CMLijn ? <window.CMLijn /> : null}
          <PKCommercial Film={Film} />
          <div style={{ display: "grid", gap: "var(--space-3)", paddingTop: "var(--space-4)" }}>
            <PKKicker style={{ color: "var(--text-muted)" }}>Cutdowns &amp; stills</PKKicker>
            <Band items={PK_CUTBAND} hoog="clamp(200px,24vw,340px)" golf />
          </div>
        </div>
      </section>

      {/* 04 · VERHALEN, ÉÉN BEELD PER BLOK */}
      <section className="dolle-dark" style={sectie}>
        <div style={{ ...binnen, gap: "var(--space-6)" }}>
          <PKBlok i={1} kop="Social campaigns with Monique van der Reijden" tekst="Social campaigns around the collections, made with trendwatcher Monique van der Reijden: Modern Oasis, Organic Wave and the two collections that followed. Concept, production and edit, cut down per format and aimed at traffic to the floor.">
            <Film bron={PK_VID + "pietklerkx-modern-oasis-intro.mp4"} poster={PK_MQ("bank")} onderschrift="MODERN OASIS · INTRO" watch watchSchaal={2.2} />
          </PKBlok>
          {window.CaseKaarten ? <window.CaseKaarten items={PK_MONIQUE_BAND} tempo={0.5} /> : null}
          <PKBlok i={2} vol kop="Collection campaigns" tekst="Campaign work around the new collections Modern Oasis, Organic Wave, Prelude and Retro Remix, produced as one package: styling, photography and film in a single run, delivered per channel so the same collection carries across store, social and print.">
            {/* Vier foto's in twee rijen, gespiegeld; per rij even hoog, niets afgesneden. */}
            <div style={{ display: "grid", gap: "var(--space-3)" }}>
              <div style={{ display: "grid", gridTemplateColumns: "minmax(0,1.5fr) minmax(0,0.667fr)", gap: "var(--space-3)", alignItems: "start" }}>
                <PKParallax src={PK + "pk-collectie-04-web.jpg"} kader="3 / 2" />
                <PKParallax src={PK + "pk-collectie-02-web.jpg"} kader="2 / 3" />
              </div>
              <div style={{ display: "grid", gridTemplateColumns: "minmax(0,0.667fr) minmax(0,1.5fr)", gap: "var(--space-3)", alignItems: "start" }}>
                <PKParallax src={PK + "pk-collectie-01-web.jpg"} kader="2 / 3" />
                <PKParallax src={PK + "pk-collectie-03-web.jpg"} kader="3 / 2" />
              </div>
            </div>
          </PKBlok>
          <PKBlok i={3} meeloop kop="FPV drone store videos" tekst="Every new Piet Klerkx store is captured in a single continuous FPV flight. One shot that moves through the full floor, room by room, so the scale of the store lands in seconds instead of a gallery. Planning, flight and edit in house.">
            <Film bron={PK_VID + "pietklerkx-fpv-amsterdam.mp4"} poster={PK + "pk-still-08-web.jpg"} onderschrift="FPV · AMSTERDAM" watch watchSchaal={2.2} />
          </PKBlok>
          <PKBlok i={4} kop="Heritage &amp; cultural events" tekst="A heritage film for 95 years of Piet Klerkx, plus the kick-offs, quarterly meetings and location events filmed across the country. Pre-event films to set the tone, live coverage on the day, and the edit that keeps the moment alive afterwards. The work that makes a company with stores in different cities feel like one.">
            <Film bron={PK_VID + "pietklerkx-kickoff.mp4"} poster={PK + "pk-heritage-poster-web.jpg"} onderschrift="HERITAGE · 95 YEARS" watch watchSchaal={2.2} />
          </PKBlok>
          <div style={{ display: "grid", gap: "var(--space-4)", marginTop: "calc(var(--space-6) * -0.6)" }}>
            <PKKicker style={{ color: "var(--text-muted)" }}>Cultural events</PKKicker>
            {window.CaseKaarten ? <window.CaseKaarten items={PK_EVENTS} tempo={0.5} schuif /> : null}
          </div>
        </div>
      </section>

      {/* 08 · DELIVERABLES */}
      {window.CMData ? <window.CMData kop="Deliverables" beeld={PK + "pk-still-08-web.jpg"} waas={0.42} Tag={PKTag} tags={PK_LEVERING} cijfers={PK_DATA} review={{ tekst: "Top-notch experience with DOLLE. They produce various videos for Piet Klerkx and Enzo Luca, and they do so with tremendous professionalism. They contribute ideas from preparation to execution on set, regardless of the scale of the production. Transparent, reliable, and incredibly pleasant to work with!", naam: "Maxime in het Veld", rol: "Senior brand manager, Piet Klerkx" }} /> : null}

      {/* 09 · RELATED WORK */}
      <section className="dolle-dark" style={{ background: "var(--dolle-navy)", padding: "var(--space-6) var(--page-margin)" }}>
        <div style={{ maxWidth: "var(--content-max)", margin: "0 auto", display: "grid", gap: "var(--space-4)", gridTemplateColumns: "minmax(0,1fr)" }}>
          <PKKicker style={{ display: "block", whiteSpace: "nowrap", color: "var(--text-muted)" }}>Related work</PKKicker>
          <div style={{ display: "grid", gridTemplateColumns: "minmax(0,1fr)" }}>
            {Rij ? verwant.map((c, i) => (
              <Rij key={c.id} c={c} i={i} go={go} open={open === c.id} onToggle={() => setOpen(open === c.id ? -1 : c.id)} />
            )) : null}
            {Haarlijn ? <Haarlijn /> : null}
          </div>
        </div>
      </section>

      {window.HomeConversie ? <window.HomeConversie go={go} tone="dark" /> : null}

    </React.Fragment>
  );
}

Object.assign(window, { CasePietKlerkx });
