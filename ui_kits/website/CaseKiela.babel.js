const KIELA_DS = window.DesignSystem_8f95a2;
const { Kicker: KKicker, Icon: KIcon, Button: KButton, CornerRule: KCorner } = KIELA_DS;
const K_IMG = "../../assets/cases/web/";
const K_POSTER = "../../assets/hero-showreel-frame.png";
const K_KOLOMGAT = "var(--space-5)";

/* CASE DETAIL · KIELA · variant EXTENDED. Zelfde opbouw en ritme als Montel:
   hero op navy, intro op licht, daarna per dienst een band met een of meer
   projectblokken, de brandfilm, deliverables en de bestaande CTA.
   Beeld is nu placeholder: zodra het Kiela-materiaal er is vervangen we de
   bronnen, de opbouw blijft gelijk. */

const K_HERO = K_IMG + "case-03.jpg";

const K_BANDEN = [
  { dienst: "Launches", woord: "Wildly", accent: "forward" },
  { dienst: "Media production", woord: "Wildly", accent: "visible" },
  { dienst: "Growth", woord: "Wildly", accent: "driven" }
];

const K_LAUNCH = [{
  kop: "Brand & guidelines",
  tekst: "DOLLE worked through Kiela's identity with the family and put it into words. That story now runs through the website and every brand expression, captured in guidelines so the new line arrives with one clear voice behind it.",
  strook: [
    { src: "../../assets/cases/kiela/kiela-website-02.jpg", ratio: "16 / 9" },
    { video: "../../assets/video/kiela-heritage-loop.mp4", ratio: "3 / 2", terug: "../../assets/cases/kiela/kiela-archief-04.jpg" },
    { src: "../../assets/cases/kiela/kiela-archief-05.jpg", ratio: "4 / 5", plek: "28% 50%" },
    { src: "../../assets/cases/kiela/kiela-logo.png", ratio: "4 / 3", pas: "contain", vlak: "var(--dolle-white)" }
  ]
}];

/* Stills uit de brand film, om en om met behind-the-scenes van de set, zolang
   die er zijn; daarna lopen de stills door. Als carrousel onder de film. */
const K_MAP = "../../assets/cases/kiela/";
const K_STILLS = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,17,18].map((n) => ({ src: K_MAP + "kiela-still-" + String(n).padStart(2, "0") + "-web.jpg", ratio: "16 / 9", breed: 309, zak: 0 }));
const K_BTS = [
  { src: K_MAP + "kiela-bts-03-web.jpg", ratio: "3 / 2", breed: 256, zak: -22 },
  { src: K_MAP + "kiela-bts-01-web.jpg", ratio: "1 / 1", breed: 202, zak: 18 },
  { src: K_MAP + "kiela-bts-05-web.jpg", ratio: "3 / 2", breed: 256, zak: -14 },
  { src: K_MAP + "kiela-bts-04-web.jpg", ratio: "3 / 2", breed: 256, zak: 22 },
  { src: K_MAP + "kiela-bts-02-web.jpg", ratio: "2 / 3", breed: 179, zak: -18 },
  { src: K_MAP + "kiela-bts-06-web.jpg", ratio: "3 / 2", breed: 256, zak: 16 },
  { src: K_MAP + "kiela-bts-07-web.jpg", ratio: "3 / 2", breed: 256, zak: -20 },
  { src: K_MAP + "kiela-bts-08-web.jpg", ratio: "3 / 2", breed: 256, zak: 12 },
  { src: K_MAP + "kiela-bts-09-web.jpg", ratio: "3 / 2", breed: 256, zak: -16 }
];
const K_LOOPJES = [
  { video: "../../assets/video/kiela-bts-loop.mp4", terug: K_MAP + "kiela-bts-07-web.jpg" },
  { video: "../../assets/video/kiela-bts-loop-03.mp4", terug: K_MAP + "kiela-bts-06-web.jpg" },
  { video: "../../assets/video/kiela-vertical-01.mp4", terug: K_MAP + "kiela-bts-08-web.jpg" },
  { video: "../../assets/video/kiela-bts-loop-04.mp4", terug: K_MAP + "kiela-bts-03-web.jpg" },
  { video: "../../assets/video/kiela-bts-loop-02.mp4", terug: K_MAP + "kiela-bts-09-web.jpg" },
  { video: "../../assets/video/kiela-bts-loop-05.mp4", terug: K_MAP + "kiela-bts-04-web.jpg" },
  { video: "../../assets/video/kiela-bts-loop-06.mp4", terug: K_MAP + "kiela-bts-01-web.jpg" },
  { video: "../../assets/video/kiela-bts-loop-07.mp4", terug: K_MAP + "kiela-bts-05-web.jpg" }
];

/* Eén doorlopend ritme: still · loop · setfoto · still · setfoto · loop, met per
   plek een eigen breedte en hoogteverschil, zodat er nooit twee gelijke tegels
   naast elkaar staan en de strook rustig blijft ademen. */
const K_FILMSTROOK = (() => {
  const ritme = ["loop", "still", "loop", "bts", "still", "loop", "bts", "still", "loop", "bts", "still", "loop", "bts"];
  const breedtes = { still: [330, 270, 300, 360], bts: [250, 210, 280, 230], loop: [175, 195, 165, 185] };
  const zakken = [0, 18, -16, 10, -22, 14, -10, 22, -18];
  const voorraad = { still: K_STILLS.slice(), bts: K_BTS.slice(), loop: K_LOOPJES.slice() };
  const uit = [];
  let i = 0;
  while (voorraad.still.length || voorraad.bts.length || voorraad.loop.length) {
    let soort = ritme[i % ritme.length];
    if (!voorraad[soort].length) soort = voorraad.still.length ? "still" : (voorraad.bts.length ? "bts" : "loop");
    const bron = voorraad[soort].shift();
    const ratio = soort === "loop" ? "9 / 16" : bron.ratio;
    const [rw, rh] = ratio.split("/").map(Number);
    uit.push(Object.assign({}, bron, {
      ratio: ratio,
      breed: Math.round(320 * rw / rh),
      zak: 0
    }));
    i++;
  }
  return uit;
})();

const K_MEDIA = [
  {
    kop: "Brand film",
    tekst: "Two production days, one complete brand film. Family, craftsmanship and the people on the factory floor at the centre, with the care Kiela puts into its team visible in every scene.",
    strook: K_FILMSTROOK
  },
  {
    kop: "Craft & process",
    tekst: "The making of a chair, captured step by step: frame, upholstery, finish and assembly, all under one roof and all by hand. It gives Kiela the material to show clients where the quality comes from, how a chair is designed and who builds it.",
    strook: [
      { src: K_MAP + "kiela-still-07-web.jpg", ratio: "4 / 3" },
      { video: "../../assets/video/kiela-naaiatelier-02.mp4", ratio: "16 / 9", terug: K_MAP + "kiela-still-07-web.jpg" },
      { src: K_MAP + "kiela-still-08-web.jpg", ratio: "1 / 1" },
      { video: "../../assets/video/kiela-stoffeerderij.mp4", ratio: "3 / 2", terug: K_MAP + "kiela-still-17-web.jpg" },
      { src: K_MAP + "kiela-still-09-web.jpg", ratio: "16 / 9" },
      { video: "../../assets/video/kiela-lasserij-01.mp4", ratio: "4 / 5", terug: K_MAP + "kiela-still-04-web.jpg" },
      { video: "../../assets/video/kiela-slijperij.mp4", ratio: "16 / 9", terug: K_MAP + "kiela-still-03-web.jpg" },
      { src: K_MAP + "kiela-still-03-web.jpg", ratio: "3 / 4" },
      { video: "../../assets/video/kiela-houtafdeling.mp4", ratio: "3 / 2", terug: K_MAP + "kiela-still-06-web.jpg" },
      { video: "../../assets/video/kiela-lijmspuiterij.mp4", ratio: "16 / 9", terug: K_MAP + "kiela-still-05-web.jpg" }
    ]
  },
  {
    kop: "Product films & photography",
    tekst: "The new product line in motion and in stills, delivered per format for the website, sales and the clients Kiela serves.",
    strook: [
      { src: K_MAP + "kiela-still-15-web.jpg", ratio: "16 / 9" },
      { src: K_MAP + "kiela-still-16-web.jpg", ratio: "16 / 9" }
    ]
  }
];

/* Productfilms en -fotografie: kleine carrousel waarin de loops en de stills
   elkaar doorlopend afwisselen. */
const K_PRODUCT = [
  { video: "../../assets/video/kiela-product-1.mp4", ratio: "16 / 9", breed: 440, zak: 0, terug: K_MAP + "kiela-still-16-web.jpg" },
  { src: K_MAP + "kiela-still-15-web.jpg", ratio: "16 / 9", breed: 440, zak: -8 },
  { video: "../../assets/video/kiela-product-2.mp4", ratio: "16 / 9", breed: 440, zak: 7, terug: K_MAP + "kiela-still-17-web.jpg" },
  { src: K_MAP + "kiela-still-16-web.jpg", ratio: "16 / 9", breed: 440, zak: -6 },
  { video: "../../assets/video/kiela-product-3.mp4", ratio: "16 / 9", breed: 440, zak: 0, terug: K_MAP + "kiela-still-10-web.jpg" },
  { src: K_MAP + "kiela-still-17-web.jpg", ratio: "16 / 9", breed: 440, zak: 8 },
  { video: "../../assets/video/kiela-product-4.mp4", ratio: "16 / 9", breed: 440, zak: -7, terug: K_MAP + "kiela-still-11-web.jpg" },
  { src: K_MAP + "kiela-still-10-web.jpg", ratio: "16 / 9", breed: 440, zak: 6 },
  { video: "../../assets/video/kiela-product-5.mp4", ratio: "16 / 9", breed: 440, zak: 0, terug: K_MAP + "kiela-still-15-web.jpg" },
  { src: K_MAP + "kiela-still-11-web.jpg", ratio: "16 / 9", breed: 440, zak: -8 }
];

const K_GROWTH = [{
  kop: "International rollout",
  tekst: "One campaign, built to travel. DOLLE delivered the brand film in versions for Kiela's Dutch, German and English-speaking clients, giving its sales team one story to take into every market.",
  strook: [
    { src: K_IMG + "case-04.jpg", ratio: "3 / 2", film: true },
    { src: K_IMG + "case-01.jpg", ratio: "9 / 16", film: true },
    { src: K_IMG + "case-06.jpg", ratio: "4 / 5" }
  ]
}];

/* Fragment van de brandfilm voor de header; te kiezen op kiela-hero-trim.html. */
const K_HERO_TRIM = (() => { try { const q = JSON.parse(window.localStorage.getItem("kiela-hero-trim")); if (q && q.start != null) return q; } catch (e) {} return { start: 8.37, eind: 32.14 }; })();
const K_INTRO = [
  "Kiela is a Dutch family business that designs and builds salon furniture in its own factory. Chairs, wash units and styling stations, made by hand for salons at home and abroad.",
  "With a new product line and international clients to reach, Kiela asked DOLLE for one visual campaign. DOLLE sharpened the brand story, then produced the brand film, product films and photography to carry it into every market."
];
/* Cijfers voor het datablok; een streepje tot het echte aantal binnen is. */
const K_DATA = [
  { label: "Views generated", waarde: 180, achter: "K+" },
  { label: "Production days", waarde: 2 },
  { label: "Languages", waarde: 3 },
  { label: "Films delivered", waarde: 16 }
];
const K_LEVERING = ["Brand story", "Copywriting", "Guidelines", "Concept", "Direction", "Archive research", "Production", "Edit", "Photography"];

/* Archiefbeeld uit de familiegeschiedenis, als doorlopende carrousel onder de
   mediaproductie-blokken. Wisselende maten en hoogtes, oneindig swipebaar. */
const K_ARCHIEF_MAP = "../../assets/cases/kiela/";
const K_ARCHIEF = [
  { src: K_ARCHIEF_MAP + "kiela-archief-05.jpg", ratio: "4 / 3", breed: 392, zak: -26 },
  { src: K_ARCHIEF_MAP + "kiela-archief-01.jpg", ratio: "3 / 4", breed: 274, zak: 44 },
  { src: K_ARCHIEF_MAP + "kiela-archief-03.jpg", ratio: "4 / 3", breed: 417, zak: -14 },
  { src: K_ARCHIEF_MAP + "kiela-archief-02.jpg", ratio: "3 / 2", breed: 333, zak: 36 },
  { src: K_ARCHIEF_MAP + "kiela-archief-06.jpg", ratio: "3 / 2", breed: 433, zak: -34 },
  { src: K_ARCHIEF_MAP + "kiela-archief-04.jpg", ratio: "4 / 3", breed: 367, zak: 28 }
];

/* Dienstband: de dienst links, het statement rechts met één woord in accent. */
function DienstBand({ dienst, lijn = true }) {
  return (
    <section className="dolle-dark" style={{ background: "var(--dolle-navy)", padding: "var(--space-6) var(--page-margin) var(--space-4)" }}>
      <div style={{ maxWidth: "var(--content-max)", margin: "0 auto", borderTop: lijn ? "1px solid var(--white-24, rgba(255,255,255,0.24))" : "none", paddingTop: lijn ? "var(--space-5)" : 0 }}>
        <KKicker style={{ color: "var(--text-muted)" }}>{dienst}</KKicker>
      </div>
    </section>
  );
}

/* Statement: sluit de dienstsectie af, rechts onderin. Het doelwoord rouleert
   doorlopend, zoals de WILDLY-statements elders op de site. */
const K_DOELEN = ["forward", "visible", "driven", "ahead"];
function Statement({ woord, accent, klein, links }) {
  const start = Math.max(0, K_DOELEN.indexOf(accent));
  const [i, setI] = React.useState(start);
  const reduce = typeof window !== "undefined" && window.matchMedia
    ? window.matchMedia("(prefers-reduced-motion: reduce)").matches : false;
  React.useEffect(() => {
    if (reduce) return;
    const t = setInterval(() => setI((n) => (n + 1) % K_DOELEN.length), 2600);
    return () => clearInterval(t);
  }, [reduce]);
  const rij = "1.08em";
  return (
    <div style={{ display: "flex", justifyContent: (klein || links) ? "flex-start" : "flex-end", paddingTop: klein ? 0 : "var(--space-5)" }}>
      <span style={{ display: "flex", gap: "0.34em", fontFamily: "var(--font-core)", fontWeight: "var(--weight-heading)", fontSize: klein ? "clamp(15px,1.4vw,20px)" : "clamp(18px,2.2vw,30px)", lineHeight: 1.04, textTransform: "uppercase", letterSpacing: "var(--track-wildly)", color: "var(--text-heading)", whiteSpace: "nowrap" }}>
        <span>{woord}</span>
        <span aria-hidden="true" style={{ display: "block", height: rij, overflow: "hidden" }}>
          <span style={{ display: "block", transform: "translateY(" + (-i * 1.08) + "em)", transition: reduce ? "none" : "transform 620ms var(--ease-dolle)" }}>
            {K_DOELEN.map((d) => (
              <span key={d} style={{ display: "block", height: rij, color: "var(--text-accent)" }}>{d}</span>
            ))}
          </span>
        </span>
        <span style={{ position: "absolute", width: 1, height: 1, overflow: "hidden", clipPath: "inset(50%)" }}>{woord + " " + accent}</span>
      </span>
    </div>
  );
}

/* Videotegels delen één planner: maximaal een paar loops spelen tegelijk (de
   best zichtbare), de rest staat gepauzeerd. Zo blijft de pagina soepel, ook
   met een hele strook clips, en laden bestanden pas als ze nodig zijn. */
const K_LOOPS = { lijst: [], max: 12, plan: 0 };
/* Hoeveel van de tegel er echt te zien is: binnen het venster en niet weggeklipt
   door de rail waarin hij staat. Klonen van de carrousel die buiten de rail
   vallen tellen dus niet mee. */
function loopZicht(v) {
  const r = v.getBoundingClientRect();
  if (!r.width || !r.height) return 0;
  const vh = window.innerHeight || 0;
  const vw = window.innerWidth || 0;
  let l = Math.max(r.left, 0), t = Math.max(r.top, -vh * 0.6);
  let re = Math.min(r.right, vw), b = Math.min(r.bottom, vh + vh * 0.6);
  const rail = v.closest ? v.closest("[data-rail]") : null;
  if (rail) {
    const q = rail.getBoundingClientRect();
    l = Math.max(l, q.left); re = Math.min(re, q.right);
    t = Math.max(t, q.top); b = Math.min(b, q.bottom);
  }
  const opp = Math.max(0, re - l) * Math.max(0, b - t);
  return opp / (r.width * r.height);
}
function loopsPlannen() {
  if (K_LOOPS.plan) return;
  K_LOOPS.plan = requestAnimationFrame(() => {
    K_LOOPS.plan = 0;
    /* Wie al speelt en nog in beeld is houdt zijn plek; daarna vullen de best
       zichtbare clips de rest. Per bestand speelt er maar één element, zodat de
       drie klonen van een carrousel geen plekken opsnoepen. */
    K_LOOPS.lijst.forEach((e) => { if (e.v) e.zicht = loopZicht(e.v); });
    const kandidaten = K_LOOPS.lijst.filter((e) => e.v && e.zicht > 0.05);
    const bezig = kandidaten.filter((e) => !e.v.paused).sort((a, b) => b.zicht - a.zicht);
    const nieuw = kandidaten.filter((e) => e.v.paused).sort((a, b) => b.zicht - a.zicht);
    const aan = new Set();
    const gekozen = new Set();
    bezig.concat(nieuw).forEach((e) => {
      if (aan.size >= K_LOOPS.max || gekozen.has(e.bron)) return;
      gekozen.add(e.bron);
      aan.add(e.v);
    });
    K_LOOPS.lijst.forEach((e) => {
      const v = e.v;
      if (!v) return;
      if (aan.has(v)) {
        if (!v.getAttribute("src")) { v.setAttribute("src", e.bron); v.load(); }
        if (v.paused) v.play().catch(() => {});
      } else if (!v.paused) {
        v.pause();
      }
    });
  });
}
function Loop({ bron, stijl, terug }) {
  const ref = React.useRef(null);
  const [klaar, setKlaar] = React.useState(false);
  React.useEffect(() => {
    const v = ref.current;
    if (!v) return;
    v.muted = true;
    v.defaultMuted = true;
    const post = { v: v, bron: bron, zicht: 0 };
    K_LOOPS.lijst.push(post);
    /* Alleen bij een echte fout opnieuw laden; trager laden (stalled) mag zijn
       gang gaan, anders wordt een clip telkens teruggezet. */
    const herstel = () => { setKlaar(false); v.removeAttribute("src"); v.load(); loopsPlannen(); };
    const gaat = () => setKlaar(true);
    v.addEventListener("error", herstel);
    v.addEventListener("loadeddata", gaat);
    v.addEventListener("playing", gaat);
    const zichtbaar = () => { if (document.hidden) { v.pause(); } else { loopsPlannen(); } };
    document.addEventListener("visibilitychange", zichtbaar);
    let ob = null;
    /* De observer dient alleen als trigger; het echte meten doet de planner. */
    if ("IntersectionObserver" in window) {
      ob = new IntersectionObserver(() => loopsPlannen(), { threshold: [0, 0.01, 0.3, 0.8], rootMargin: "400px 0px" });
      ob.observe(v);
    }
    const bijScroll = () => loopsPlannen();
    window.addEventListener("scroll", bijScroll, { passive: true });
    window.addEventListener("resize", bijScroll);
    loopsPlannen();
    return () => {
      if (ob) ob.disconnect();
      window.removeEventListener("scroll", bijScroll);
      window.removeEventListener("resize", bijScroll);
      v.removeEventListener("error", herstel);
      v.removeEventListener("loadeddata", gaat);
      v.removeEventListener("playing", gaat);
      document.removeEventListener("visibilitychange", zichtbaar);
      const i = K_LOOPS.lijst.indexOf(post);
      if (i > -1) K_LOOPS.lijst.splice(i, 1);
    };
  }, [bron]);
  /* Zolang de clip niet speelt (of niet laadt) blijft er een foto staan, zodat
     de tegel nooit zwart of leeg is. */
  return (
    <React.Fragment>
      {terug ? <img src={terug} alt="" loading="lazy" decoding="async" draggable="false"
        style={Object.assign({}, stijl, { opacity: klaar ? 0 : 1, transition: "opacity 400ms var(--ease-dolle)" })} /> : null}
      <video ref={ref} muted loop playsInline autoPlay preload="none" draggable="false"
        disablePictureInPicture disableRemotePlayback
        style={Object.assign({}, stijl, { opacity: klaar ? 1 : 0, transition: "opacity 400ms var(--ease-dolle)" })} />
    </React.Fragment>
  );
}

/* Beeldstrook die zich naar de kolom schikt: elke tegel krijgt breedte naar
   verhouding, dus alle beelden passen altijd naast elkaar. Geen scroll nodig;
   wordt de kolom breder (open staat), dan worden de beelden groter. */
function PasStrook({ items }) {
  const deel = (r) => {
    const s = String(r || "1 / 1").split("/");
    const w = parseFloat(s[0]), h = parseFloat(s[1] || 1);
    return (w && h) ? w / h : 1;
  };
  return (
    <div style={{ display: "flex", gap: "6px", width: "100%", minWidth: 0, alignItems: "stretch" }}>
      {items.map((t, i) => (
        <div key={i} style={{ position: "relative", flex: deel(t.ratio) + " 1 0", minWidth: 0, aspectRatio: t.ratio, overflow: "hidden", background: t.vlak || "var(--surface-sunk)" }}>
          {t.video
            ? <Loop bron={t.video} terug={t.terug} stijl={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover", display: "block" }} />
            : <img src={t.src} alt="" loading="lazy" draggable="false" style={{ position: "absolute", inset: t.pas === "contain" ? "12%" : 0, width: t.pas === "contain" ? "76%" : "100%", height: t.pas === "contain" ? "76%" : "100%", objectFit: t.pas || "cover", objectPosition: t.plek || "50% 50%", display: "block" }} />}
          {t.film && window.CasePlay ? <window.CasePlay klein /> : null}
        </div>
      ))}
    </div>
  );
}

/* Launchblok: beeldstrook over de volle breedte (bij veel beelden in rijen van
   vijf), tekst eronder links. */
function KlapBlok({ blok, lijn, rechts, dienst, spreuk }) {
  /* Klein beginnen en groot eindigen: de eerste rij heeft de meeste beelden,\n     de laatste de minste, dus de beelden worden naar onderen toe groter. */
  const rijen = [];
  const maten = [6, 4, 3, 2];
  let rest = blok.strook.slice();
  let m = 0;
  while (rest.length) {
    const n = rest.length <= maten[maten.length - 1] ? rest.length : (maten[m] || 2);
    rijen.push(rest.slice(0, n));
    rest = rest.slice(n);
    m++;
  }
  return (
    <div style={{ borderTop: lijn ? "1px solid var(--white-24, rgba(255,255,255,0.24))" : "none", paddingTop: lijn ? "var(--space-6)" : 0, paddingBottom: "var(--space-6)" }}>
      {dienst ? <KKicker style={{ display: "block", color: "var(--text-muted)", paddingBottom: "var(--space-5)" }}>{dienst}</KKicker> : null}
      <div style={{ display: "grid", gap: "6px" }}>
        {rijen.map((r, i) => <PasStrook key={i} items={r} />)}
      </div>
      <div style={{ display: "grid", gridTemplateColumns: rechts ? "minmax(0,1fr) auto" : "auto minmax(0,1fr)", gap: K_KOLOMGAT, alignItems: "start", paddingTop: "var(--space-4)" }}>
        {rechts ? <span /> : null}
        <div style={{ display: "grid", gap: "var(--space-3)", justifyItems: "start", width: "min(45ch, 38vw)" }}>
          <h2 style={{ margin: 0, fontFamily: "var(--font-core)", fontWeight: "var(--weight-heading)", fontSize: "clamp(19px,2vw,27px)", letterSpacing: "var(--track-heading)", color: "var(--text-heading)" }}>{blok.kop}</h2>
          <p style={{ margin: 0, fontSize: "var(--size-body)", lineHeight: "var(--lh-body)" }}>{blok.tekst}</p>
        </div>
      </div>
      {spreuk ? <Statement woord="Wildly" accent="visible" links /> : null}
    </div>
  );
}
/* Doorlopende loop zonder geluid; de knop rechtsonder zet het geluid aan. */
function LoopFilm({ bron }) {
  const ref = React.useRef(null);
  const [luid, setLuid] = React.useState(false);
  /* Begint een andere video met geluid, dan valt deze terug op mute. */
  React.useEffect(() => {
    const let_op = (e) => {
      const v = ref.current;
      if (!v || e.target === v || e.target.muted) return;
      v.muted = true;
      setLuid(false);
    };
    document.addEventListener("play", let_op, true);
    return () => document.removeEventListener("play", let_op, true);
  }, []);
  const zet = () => {
    const v = ref.current;
    if (!v) return;
    if (!luid) {
      /* Eén geluidsbron tegelijk: alle andere video's gaan op mute en pauze. */
      document.querySelectorAll("video").forEach((a) => { if (a !== v) { a.muted = true; if (!a.loop) a.pause(); } });
    }
    v.muted = luid;
    if (!luid) v.play().catch(() => {});
    setLuid(!luid);
  };
  return (
    <div style={{ position: "relative", background: "#0b1730", overflow: "hidden", width: "min(100%, 640px)" }}>
      <video ref={ref} src={bron} autoPlay muted loop playsInline preload="metadata"
        style={{ display: "block", width: "100%", height: "auto" }} />
      <button onClick={zet} aria-label={luid ? "Mute" : "Unmute"}
        style={{ position: "absolute", right: "var(--space-3)", bottom: "var(--space-3)", width: 44, height: 44, display: "grid", placeItems: "center", background: "rgba(9,18,38,0.62)", border: "1px solid var(--white-24, rgba(255,255,255,0.24))", color: "var(--dolle-white)", cursor: "pointer", padding: 0 }}>
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7">
          <path d="M4 9h3l5-4v14l-5-4H4z" />
          {luid
            ? <React.Fragment><path d="M16.5 8.5a5 5 0 0 1 0 7" /><path d="M19 6a8.5 8.5 0 0 1 0 12" /></React.Fragment>
            : <React.Fragment><path d="M16.5 9.5l5 5" /><path d="M21.5 9.5l-5 5" /></React.Fragment>}
        </svg>
      </button>
    </div>
  );
}

/* Projectblok: beeldstrook binnen hoekmarkeringen, tekst ernaast. */
function ProjectBlok({ blok, beeldEerst }) {
  const Strook = window.CaseStrook;
  const beeld = (
    <KCorner corners="tl-br" size={20} inset={10} tone="strong" style={{ alignSelf: "stretch", display: "grid", alignContent: "center" }}>
      {Strook ? <Strook items={blok.strook} /> : null}
    </KCorner>
  );
  const tekst = (
    <div style={{ display: "grid", gap: "var(--space-3)", alignContent: "center", maxWidth: "45ch" }}>
      <h2 style={{ margin: 0, fontFamily: "var(--font-core)", fontWeight: "var(--weight-heading)", fontSize: "clamp(19px,2vw,27px)", letterSpacing: "var(--track-heading)", color: "var(--text-heading)" }}>{blok.kop}</h2>
      <p style={{ margin: 0, fontSize: "var(--size-body)", lineHeight: "var(--lh-body)" }}>{blok.tekst}</p>
    </div>
  );
  return (
    <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(300px,1fr))", gap: K_KOLOMGAT, alignItems: "stretch", backgroundImage: "linear-gradient(rgba(255,255,255,0.24), rgba(255,255,255,0.24))", backgroundRepeat: "no-repeat", backgroundPosition: "0 0", backgroundSize: "var(--lijn, 0%) 1px", paddingTop: "var(--space-6)" }}>
      {beeldEerst ? beeld : tekst}
      {beeldEerst ? tekst : beeld}
    </div>
  );
}

const K_BAND = [
  { video: "../../assets/video/kiela-naaiatelier-02.mp4", r: 16 / 9 },
  { video: "../../assets/video/kiela-bts-loop.mp4", r: 9 / 16 },
  { src: K_MAP + "kiela-still-02-web.jpg", r: 16 / 9 },
  { video: "../../assets/video/kiela-stoffeerderij.mp4", r: 16 / 9 },
  { video: "../../assets/video/kiela-vertical-01.mp4", r: 9 / 16 },
  { src: K_MAP + "kiela-bts-01-web.jpg", r: 1 },
  { video: "../../assets/video/kiela-slijperij.mp4", r: 16 / 9 },
  { src: K_MAP + "kiela-still-12-web.jpg", r: 16 / 9 },
  { video: "../../assets/video/kiela-bts-loop-03.mp4", r: 9 / 16 },
  { video: "../../assets/video/kiela-houtafdeling.mp4", r: 16 / 9 }
];
const K_AMBACHT = [["kiela-naaiatelier-02", "Sewing", "kiela-still-07"], ["kiela-stoffeerderij", "Upholstery", "kiela-still-17"], ["kiela-lasserij-01", "Welding", "kiela-still-04"], ["kiela-houtafdeling", "Woodwork", "kiela-still-06"]].map(([f, n, p]) => ({ naam: n, film: "../../assets/video/" + f + ".mp4", poster: K_MAP + p + "-web.jpg", kader: "4 / 5" }));
/* Craft & process als de studio-reels van Woonexpress: één afdeling vult het
   venster en speelt, de rest staat als smalle strook. */
const K_REELS = [["kiela-naaiatelier-02", "Sewing"], ["kiela-stoffeerderij", "Upholstery"], ["kiela-lasserij-01", "Welding"], ["kiela-houtafdeling", "Woodwork"], ["kiela-slijperij", "Grinding"], ["kiela-lijmspuiterij", "Glue spraying"]].map(([f, n]) => ({ video: "../../assets/video/" + f + ".mp4#t=0.5", label: n }));
const K_AMBACHT_KAART = [
  { src: K_MAP + "kiela-still-08-web.jpg", ratio: "1 / 1", breed: 300, zak: 0, tekst: "Craft & process" },
  { video: "../../assets/video/kiela-slijperij.mp4", terug: K_MAP + "kiela-still-03-web.jpg", ratio: "16 / 9", breed: 420, zak: 6, tekst: "Grinding" },
  { src: K_MAP + "kiela-still-09-web.jpg", ratio: "16 / 9", breed: 420, zak: -5, tekst: "Craft & process" },
  { video: "../../assets/video/kiela-lijmspuiterij.mp4", terug: K_MAP + "kiela-still-05-web.jpg", ratio: "16 / 9", breed: 420, zak: 4, tekst: "Glue spraying" },
  { src: K_MAP + "kiela-still-03-web.jpg", ratio: "3 / 4", breed: 280, zak: -6, tekst: "Craft & process" }
];
function KKop({ dienst, woord }) {
  return (
    <div style={{ display: "grid", gap: "var(--space-6)" }}>
    {window.CMLijn ? <window.CMLijn /> : null}
    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", gap: "var(--space-6)", flexWrap: "wrap" }}>
      <KKicker style={{ display: "block", whiteSpace: "nowrap", color: "var(--text-muted)" }}>{dienst}</KKicker>
      <span style={{ fontFamily: "var(--font-core)", fontWeight: "var(--weight-heading)", fontSize: "clamp(18px,2.2vw,30px)", letterSpacing: "var(--track-wildly)", textTransform: "uppercase", color: "var(--text-heading)", whiteSpace: "nowrap" }}>Wildly <span style={{ color: "var(--text-accent)" }}>{woord}</span></span>
    </div>
    </div>
  );
}

/* De poster van een film beweegt binnen zijn kader mee met de scroll. Werkt met
   de losse CSS-eigenschappen translate/scale, zodat het hover-effect van de
   film (transform) er gewoon bovenop blijft werken. */
function KParallaxPoster({ children, alle }) {
  const vak = React.useRef(null);
  React.useEffect(() => {
    if (window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    let raf = 0;
    const tik = () => {
      raf = 0; const v = vak.current; if (!v) return;
      /* alle: elke foto en loop in het board beweegt binnen zijn eigen tegel;
         het logo (contain) blijft staan. */
      const lijst = alle ? [...v.querySelectorAll("img, video")].filter((e) => getComputedStyle(e).objectFit !== "contain" && !/kiela-website/.test(e.currentSrc || e.src || "")) : [v.querySelector("img")].filter(Boolean);
      const vh = window.innerHeight || 800;
      lijst.forEach((img) => {
        const b = img.parentElement.getBoundingClientRect();
        if (b.bottom < -100 || b.top > vh + 100) return;
        const p = Math.max(-1, Math.min(1, ((b.top + b.height / 2) - vh / 2) / (vh / 2 + b.height / 2)));
        img.style.scale = "1.18";
        img.style.translate = "0 " + (p * b.height * 0.08).toFixed(1) + "px";
      });
    };
    const op = () => { if (!raf) raf = requestAnimationFrame(tik); };
    tik(); window.addEventListener("scroll", op, { passive: true, capture: true }); window.addEventListener("resize", op);
    return () => { window.removeEventListener("scroll", op, true); window.removeEventListener("resize", op); if (raf) cancelAnimationFrame(raf); };
  }, []);
  return <div ref={vak}>{children}</div>;
}

function CaseKiela({ go }) {
  const Film = window.CaseFilm;
  const Rij = window.CaseRij;
  const Haarlijn = window.Haarlijn;
  const Laag = window.WXLaag;
  const Ontvouw = window.WXOntvouw;
  const Kaarten = window.CaseKaarten;
  const [open, setOpen] = React.useState(-1);
  React.useEffect(() => {
    const zet = () => { const h = document.querySelector("header"); document.documentElement.style.setProperty("--k-nav", ((h && h.offsetHeight) || 92) + "px"); };
    zet(); window.addEventListener("resize", zet);
    return () => window.removeEventListener("resize", zet);
  }, []);
  const namen = ["Woonexpress", "Montel", "Landgoed Bergvliet", "Eezy"];
  const verwant = namen.map((n) => (window.CASES || []).find((c) => c.klant === n)).filter(Boolean);
  if (!Film || !Laag || !Ontvouw) return null;
  const sectie = { background: "var(--dolle-navy)", color: "var(--text-body)", padding: "var(--space-6) var(--page-margin)" };
  const binnen = { maxWidth: "var(--content-max)", margin: "0 auto", display: "grid", gap: "var(--space-6)" };
  return (
    <React.Fragment>
      <style>{"@media (max-width:860px){[data-k-opening],[data-wx-ontvouw],[data-k-board]{grid-template-columns:minmax(0,1fr) !important}[data-k-board]>div:first-child{position:static !important}[data-bv-deel]{grid-template-columns:repeat(2,minmax(0,1fr)) !important}}"}</style>

      {/* 01 · OPENING — zelfde kop als Woonexpress */}
      {window.CMKop ? (
        <window.CMKop titel="Kiela" tags={["Launches", "Media production", "Growth"]} film="../../assets/video/kiela-brandfilm.mp4" start={K_HERO_TRIM.start} eind={K_HERO_TRIM.eind} reserve={["kiela-stoffeerderij", "kiela-lasserij-01", "kiela-naaiatelier-02", "kiela-houtafdeling", "kiela-lijmspuiterij"].map((f) => "../../assets/video/" + f + ".mp4")} poster={K_MAP + "kiela-still-07-web.jpg"} go={go} Knop={KButton} Woorden={window.Words || null} Tag={DolleTag}>
          {window.CMIntro ? <window.CMIntro tekst={K_INTRO} beeld={window.CMOpeningBeeld ? <window.CMOpeningBeeld modus="groei" start={0.55} ratio="16 / 9" src={K_MAP + "kiela-film-poster-web.jpg"} /> : null} /> : null}
        </window.CMKop>
      ) : null}

      {/* 02 · BAND */}
      {window.BVBand ? (
        <section className="dolle-dark" style={{ background: "var(--dolle-navy)", padding: "0 var(--page-margin) var(--space-6)" }}>
          <div style={{ maxWidth: "var(--content-max)", margin: "0 auto" }}>
            <window.BVBand items={K_BAND} hoog="clamp(200px,24vw,340px)" sleep golf />
          </div>
        </section>
      ) : null}

      {/* 03 · LAUNCHES */}
      <section className="dolle-dark" style={sectie}>
        <div style={binnen}>
          <KKop dienst="LAUNCHES" woord="forward" />
          <div data-k-board="1" style={{ display: "grid", gridTemplateColumns: "minmax(0,0.75fr) minmax(0,1.6fr)", gap: "calc(var(--grid-gap) * 1.1)", alignItems: "start" }}>
            {/* Tekst begint bovenaan het board, zakt mee en blijft staan op de onderkant. */}
            <div style={{ display: "grid", gap: "var(--space-3)", maxWidth: "45ch", alignSelf: "start", position: "sticky", top: "calc(var(--k-nav, 92px) + 24px)" }}>
              <h2 style={{ margin: 0, fontFamily: "var(--font-core)", fontWeight: "var(--weight-heading)", fontSize: "clamp(19px,2vw,27px)", letterSpacing: "var(--track-heading)", color: "var(--text-heading)" }}>{K_LAUNCH[0].kop}</h2>
              <p style={{ margin: 0, fontSize: "var(--size-body)", lineHeight: "var(--lh-body)" }}>{K_LAUNCH[0].tekst}</p>
            </div>
            <div style={{ display: "grid", gap: "6px" }}>
              <KParallaxPoster alle>
                <div style={{ display: "grid", gap: "6px" }}>
                  <PasStrook items={[K_LAUNCH[0].strook[0]]} />
                  <PasStrook items={K_LAUNCH[0].strook.slice(1)} />
                </div>
              </KParallaxPoster>
            </div>
          </div>
        </div>
      </section>

      {/* 04 · MEDIA PRODUCTION */}
      <section className="dolle-dark" style={sectie}>
        <div style={binnen}>
          <KKop dienst="MEDIA PRODUCTION" woord="visible" />
          <Laag kop={K_MEDIA[0].kop} tekst={K_MEDIA[0].tekst}>
            <KParallaxPoster><Film bron="../../assets/video/kiela-brandfilm.mp4" poster="../../assets/cases/kiela/kiela-film-poster-web.jpg" onderschrift="BRAND FILM · KIELA" watch /></KParallaxPoster>
            {Kaarten ? <Kaarten items={K_FILMSTROOK} tempo={0.5} schuif /> : null}
          </Laag>
          <Laag kop={K_MEDIA[1].kop} tekst={K_MEDIA[1].tekst}>
            {window.CMAccordeon ? <window.CMAccordeon items={K_REELS} ratio={16 / 9} licht hoog="clamp(300px,30vw,500px)" /> : null}
          </Laag>
          <Laag kop={K_MEDIA[2].kop} tekst={K_MEDIA[2].tekst}>
            {Kaarten ? <Kaarten items={K_PRODUCT} tempo={0.5} schuif /> : null}
          </Laag>
          <Laag kop="Heritage" geenKop volLijn>
            <Ontvouw plak breed kop="Heritage" tekst="DOLLE went into the family archives and turned decades of history into a short chapter within the film, linking where Kiela started to what it builds today." bron="../../assets/video/kiela-heritage-loop.mp4" poster="../../assets/cases/kiela/kiela-archief-04.jpg" onder="HERITAGE · KIELA" />
            {Kaarten ? (
              <div style={{ display: "grid", gap: "var(--space-3)" }}>
                <KKicker size="sm" style={{ display: "block", whiteSpace: "nowrap", color: "var(--text-muted)" }}>From the family archive</KKicker>
                <Kaarten items={K_ARCHIEF} tempo={0.18} />
              </div>
            ) : null}
          </Laag>
        </div>
      </section>

      {/* DELIVERABLES */}
      {window.CMData ? <window.CMData kop="Deliverables" beeld={K_MAP + "kiela-intro-web.jpg"} waas={0.42} Tag={DolleTag} tags={K_LEVERING} cijfers={K_DATA} review={{ tekst: "We recorded a corporate campaign with DOLLE for our production company's visibility. The collaboration was pleasant and informal. The team was particularly enthusiastic and saw plenty of opportunities to capture beautiful footage. One morning, Guus even showed up at the production location at 6 a.m. to take stunning drone shots at sunrise. Thanks to the collaboration with DOLLE, we received a corporate video that aligns with our company mission.", naam: "Evelien Kiela", rol: "CEO, Kiela" }} /> : null}

      {/* RELATED WORK — dezelfde rijen als op de overzichtspagina */}
      <section className="dolle-dark" style={{ background: "var(--dolle-navy)", padding: "var(--space-6) var(--page-margin)" }}>
        <div style={{ maxWidth: "var(--content-max)", margin: "0 auto", display: "grid", gap: "var(--space-4)", gridTemplateColumns: "minmax(0,1fr)" }}>
          <KKicker style={{ color: "var(--text-muted)" }}>Related work</KKicker>
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

Object.assign(window, { CaseKiela, CaseLoop: Loop });
