const DS = window.DesignSystem_8f95a2;
const { Kicker, Button, Icon, StatFrame } = DS;

/* SERVICES — kop, dan de vier diensten als gepinde stapel, en de vraag. */

const SERVICES_PAGE = [
  {
    t: "Media production", w: "VISIBLE",
    body: "We specialise in producing strategic media. We tie image to story and turn it into campaigns that stick.",
    growth: "The launch calls for image and story that stick.",
    cases: [{ naam: "Montel", beeld: "../../assets/cases/web/case-03.jpg" }, { naam: "Blue Rivet", beeld: "../../assets/cases/web/case-04.jpg" }, { naam: "Nobotel", beeld: "../../assets/cases/web/case-05.jpg" }, { naam: "Parformance", beeld: "../../assets/cases/web/case-01.jpg" }, { naam: "Dalton", beeld: "../../assets/cases/web/case-06.jpg" }]
  },
  {
    t: "Launches", w: "FORWARD",
    body: "We help brands and products launch. We dive into a brand's DNA and build the strategy for its launch around it.",
    growth: "The launch sets the brand in motion.",
    cases: [{ naam: "Parformance", beeld: "../../assets/cases/web/case-01.jpg" }, { naam: "Derma-pen", beeld: "../../assets/cases/web/case-02.jpg" }, { naam: "Montel", beeld: "../../assets/cases/web/case-03.jpg" }, { naam: "Blue Rivet", beeld: "../../assets/cases/web/case-04.jpg" }, { naam: "Dalton", beeld: "../../assets/cases/web/case-06.jpg" }]
  },
  {
    t: "AI systems", w: "AHEAD",
    body: "We build systems that scale visibility. Systems that let companies run their marketing autonomously.",
    growth: "Systems multiply that image, week after week.",
    cases: [{ naam: "Nobotel", beeld: "../../assets/cases/web/case-05.jpg" }, { naam: "Dalton", beeld: "../../assets/cases/web/case-06.jpg" }, { naam: "Parformance", beeld: "../../assets/cases/web/case-01.jpg" }, { naam: "Derma-pen", beeld: "../../assets/cases/web/case-02.jpg" }, { naam: "Montel", beeld: "../../assets/cases/web/case-03.jpg" }]
  },
  {
    t: "Growth", w: "DRIVEN",
    body: "We are wildly driven by growth. We steer on measurable results, from reach to revenue.",
    growth: "Results are measured, and feed the next launch.",
    cases: [{ naam: "Derma-pen", beeld: "../../assets/cases/web/case-02.jpg" }, { naam: "Blue Rivet", beeld: "../../assets/cases/web/case-04.jpg" }, { naam: "Dalton", beeld: "../../assets/cases/web/case-06.jpg" }, { naam: "Nobotel", beeld: "../../assets/cases/web/case-05.jpg" }, { naam: "Parformance", beeld: "../../assets/cases/web/case-01.jpg" }]
  }
];

/* Rustiger dan de UI-tik: het ontvouwen loopt over ruim een seconde, in één
   beweging, zodat de onderkant zich als een zeil openvouwt. */
const UNFOLD = "1100ms cubic-bezier(.16,.84,.24,1)";
/* Kaartbeweging: iets korter dan het ontvouwen, zelfde rust. */
const KAART = "1300ms cubic-bezier(.2,.72,.16,1)";

/* Casekaart in de rij: gesloten een smalle strook beeld, geopend het hele
   venster met naam en leesactie in beeld. Geen haken, geen scrollbalk. */
function ServiceCase({ item, go, actief, onHover, basis }) {
  return (
    <div className="dolle-dark" onMouseEnter={onHover} onFocus={onHover}
      onClick={(e) => { e.stopPropagation(); go("case"); }}
      style={{ position: "relative", height: "100%", minWidth: 0, flex: "0 0 " + basis, overflow: "hidden", background: "var(--dolle-navy)", cursor: "pointer", willChange: "flex-basis", transition: "flex-basis " + KAART }}>
      <img src={item.beeld} alt="" loading="lazy" decoding="async" style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover", opacity: actief ? 1 : 0.62, transform: actief ? "scale(1)" : "scale(1.06)", transition: "opacity " + KAART + ", transform 1800ms cubic-bezier(.2,.72,.16,1)" }} />
      <div style={{ position: "absolute", inset: 0, background: "linear-gradient(180deg, rgba(20,32,58,0.55), rgba(20,32,58,0.78))", opacity: actief ? 0 : 1, transition: "opacity " + KAART }} />
      <div style={{ position: "absolute", inset: 0, background: "var(--gradient-protect)", opacity: actief ? 1 : 0, transition: "opacity " + KAART }} />
      <div style={{ position: "absolute", left: 0, right: 0, bottom: "var(--space-8)", display: "grid", gap: "var(--space-3)", justifyItems: "center", textAlign: "center", padding: "0 var(--space-5)", opacity: actief ? 1 : 0, transform: actief ? "none" : "translateY(10px)", transition: actief ? "opacity 700ms ease 520ms, transform 1100ms cubic-bezier(.2,.72,.16,1) 420ms" : "opacity 260ms ease, transform 260ms ease" }}>
        <span style={{ fontFamily: "var(--font-label)", fontWeight: 600, fontSize: "var(--size-body-sm)", letterSpacing: "0.18em", textTransform: "uppercase", whiteSpace: "nowrap", color: "var(--dolle-white)" }}>{item.naam}</span>
        <Button variant="link" tabIndex={actief ? 0 : -1} onClick={(e) => { e.stopPropagation(); go("case"); }} style={{ color: "var(--dolle-white)" }}>Watch case</Button>
      </div>
    </div>
  );
}

/* Vijf cases naast elkaar: de aangewezen kaart vult het venster, de rest blijft
   als smalle strook staan. Zonder hover staat de eerste open. Onder 1100px is er
   geen ruimte voor vijf stroken naast een leesbare kaart: dan drie cases en een
   smallere strook, zodat de naam en "watch case" heel in beeld blijven. */
function CasesRij({ cases, go }) {
  const [actief, setActief] = React.useState(0);
  const [smal, setSmal] = React.useState(false);
  React.useEffect(() => {
    if (!window.matchMedia) return;
    const mq = window.matchMedia("(max-width: 1100px)");
    const zet = () => setSmal(mq.matches);
    zet();
    if (mq.addEventListener) { mq.addEventListener("change", zet); return () => mq.removeEventListener("change", zet); }
  }, []);
  const rij = smal ? cases.slice(0, 3) : cases;
  const strook = smal ? 46 : 84;
  return (
    <div data-strip="" style={{ display: "flex", gap: "2px", height: "var(--case-h, clamp(320px,32vw,520px))", overflow: "hidden", borderRadius: "8px" }}>
      {rij.map((c, i) => (
        <ServiceCase key={c.naam + i} item={c} go={go} actief={actief === i} basis={actief === i ? "calc(100% - " + ((rij.length - 1) * (strook + 2)) + "px)" : strook + "px"} onHover={() => setActief(i)} />
      ))}
    </div>
  );
}

/* Eén dienst per blok: kop (schakel + naam) altijd heel in beeld, daaronder de
   tekst en de vijf cases. --p is de dichtstand: 0 open, 1 samengeklapt tot band.
   De scroll schrijft --p rechtstreeks op de wrapper; nul React-renders. */
function ServiceBlok({ s, go, wakker, kopRef, innerRef }) {
  const terug = { opacity: "clamp(0, calc(1 - var(--p, 0) * 1.8), 1)", transform: "translateY(calc(var(--p, 0) * -20px))" };
  return (
    <div ref={innerRef} style={{ padding: "var(--space-5) var(--space-6) var(--space-5) var(--space-7)", display: "grid", gridTemplateColumns: "minmax(0,1fr) minmax(0,1.7fr)", gap: "calc(var(--grid-gap) * 1.2)", alignItems: "start" }}>
      <div data-tekst="" style={{ display: "grid", gap: "var(--space-5)", alignContent: "start" }}>
        <div ref={kopRef} style={{ display: "flex", alignItems: "center", gap: "var(--space-4)" }}>
          <Reveal as="span" aria-hidden="true" style={{ display: "flex", flex: "0 0 auto", color: "var(--text-heading)" }}>
            <svg viewBox="0 0 100 78" width="32" height="25" fill="none"><path d="M12 6 V44 H44" stroke="currentColor" strokeWidth="14" /><path d="M88 72 V34 H56" stroke="currentColor" strokeWidth="14" /></svg>
          </Reveal>
          <Words as="h2" text={s.t} delay={90} style={{ margin: 0, fontSize: "clamp(24px,2.4vw,38px)", lineHeight: "var(--lh-heading)", paddingBottom: "0.08em" }} />
        </div>
        {/* Alles onder de kop trekt zich terug zodra de rij naar de band klapt. */}
        <div style={{ display: "grid", gap: "var(--space-4)", justifyItems: "start", ...terug }}>
          <Reveal as="span" delay={160} style={{ fontFamily: "var(--font-core)", fontWeight: "var(--weight-heading)", fontSize: "clamp(16px,1.4vw,22px)", letterSpacing: "var(--track-wildly)", textTransform: "uppercase", whiteSpace: "nowrap", color: "var(--text-heading)" }}>
            Wildly <span style={{ color: "var(--text-accent)" }}>{s.w}</span>
          </Reveal>
          <Reveal delay={240}><p style={{ margin: 0, fontSize: "var(--size-body)", lineHeight: "var(--lh-body)", color: "var(--text-body)", maxWidth: "42ch" }}>{s.body}</p></Reveal>
          <Reveal delay={340}><p style={{ margin: 0, fontSize: "var(--size-body-sm)", lineHeight: "var(--lh-body)", color: "var(--text-muted)", maxWidth: "42ch" }}>{s.growth}</p></Reveal>
          <Reveal delay={440}><Button size="sm" onClick={(ev) => { ev.stopPropagation(); go("cases"); }}>Learn more</Button></Reveal>
        </div>
      </div>
      {/* De cases staan rechts naast de kop en beslaan de volle hoogte van het blok. */}
      <div style={terug}>
        <Reveal delay={200}>{wakker ? <CasesRij cases={s.cases} go={go} /> : <div style={{ height: "var(--case-h, clamp(320px,32vw,520px))" }} />}</Reveal>
      </div>
    </div>
  );
}

/* DE STAPEL — dezelfde beweging als de referentie: alle vier de blokken staan
   open in de pagina; zodra een blok de bovenrand raakt blijft het daar plakken
   en klapt het samen tot een band, waarna het volgende blok er direct onder
   open komt te staan. De banden stapelen zich zo bovenaan op. Omkeerbaar: de
   stand van elk blok is een pure functie van de scrollpositie.

   De stapel staat op een gepind podium met een eigen scrollweg: het podium
   blijft onder de navigatie plakken terwijl de scroll de blokken één voor één
   dichtklapt. Daardoor is de stand een pure functie van de scrollpositie (dus
   omkeerbaar) en verandert de paginahoogte niet tijdens de beweging. De band
   krijgt exact de hoogte van de kop, dus de naam staat er altijd heel in. Het
   laatste blok rolt als laatste mee op. */
const GAP = 10;

function ServiceStack({ go, header }) {
  const spoor = React.useRef(null);      /* scrollweg van de beweging */
  const podium = React.useRef(null);     /* blijft plakken onder de navigatie */
  const rijen = React.useRef([]);
  const koppen = React.useRef([]);
  const binnen = React.useRef([]);
  const maten = React.useRef(SERVICES_PAGE.map(() => ({ band: 120, exp: 560 })));
  const stand = React.useRef(SERVICES_PAGE.map(() => 0));
  const [nav, setNav] = React.useState(88);
  const [wakker, setWakker] = React.useState(false);
  /* Past de stapel niet in het beeld, dan geen gepind podium: de blokken staan
     dan gewoon open onder elkaar in de pagina. Beter een gewone scroll dan een
     gepind vlak waarin de onderkant van een blok onbereikbaar is. */
  const [gepind, setGepind] = React.useState(true);
  const pogingen = React.useRef(0);
  const slot = React.useRef({ besch: 600, d: 0 });
  const reduce = typeof window !== "undefined" && window.matchMedia
    ? window.matchMedia("(prefers-reduced-motion: reduce)").matches : false;
  const laatste = SERVICES_PAGE.length - 1;

  /* De beelden komen één frame na de eerste tekening in de pagina. */
  React.useEffect(() => { const t = setTimeout(() => setWakker(true), 60); return () => clearTimeout(t); }, []);

  React.useEffect(() => {
    let raf = 0;
    const stap = () => Math.max(300, Math.min(560, (window.innerHeight || 800) * 0.5));
    const MIN_STRIP = 150;
    const pad2 = () => { const v = binnen.current[0]; if (!v) return 48; const cs = getComputedStyle(v); return parseFloat(cs.paddingTop) + parseFloat(cs.paddingBottom); };
    const meet = () => {
      const h = document.querySelector("header");
      const nh = h && h.offsetHeight ? h.offsetHeight : 88;
      if (nh !== nav) setNav(nh);
      let banden = 0, hoogste = 0, tekstH = 0;
      rijen.current.forEach((el, i) => {
        const kop = koppen.current[i], vak = binnen.current[i];
        if (!el || !kop || !vak) return;
        const rk = kop.getBoundingClientRect(), rv = vak.getBoundingClientRect();
        const pad = Math.max(0, rk.top - rv.top);
        const band = Math.round(rk.height + pad + Math.min(pad, 14));
        const exp = Math.max(Math.round(vak.offsetHeight), band);
        const tk = vak.querySelector("[data-tekst]");
        if (tk) tekstH = Math.max(tekstH, Math.round(tk.getBoundingClientRect().height + pad * 2));
        maten.current[i] = { band, exp };
        el.style.setProperty("--band", String(band));
        el.style.setProperty("--exp", String(exp));
        if (i < laatste) banden += band + GAP;
        if (exp > hoogste) hoogste = exp;
      });
      /* Het podium is precies één beeld hoog. De gestapelde banden plus het open
         blok moeten daar heel in passen; is dat te krap, dan krimpt eerst de
         casestrook mee. Lukt dat ook niet, dan valt de stapel terug op een
         gewone pagina-scroll — nooit een gepind vlak met onbereikbare onderkant. */
      const beschikbaar = Math.max(320, (window.innerHeight || 800) - nh - 24);
      const nodig = banden + hoogste;
      const vak = podium.current;
      if (vak && !reduce && pogingen.current < 6) {
        const strook = vak.querySelector("[data-strip]");
        const strookH = strook ? Math.round(strook.getBoundingClientRect().height) : 0;
        const tekort = nodig - beschikbaar;
        /* Krimpen heeft alleen zin als de stapel er dan écht in past; anders is
           de tekstkolom de hoogste en houden we de strook op zijn volle maat. */
        const vloer = Math.max(MIN_STRIP, tekstH - pad2());
        const haalbaar = banden + Math.max(tekstH, vloer) <= beschikbaar + 8;
        if (strookH && tekort > 4 && haalbaar) {
          const nieuw = Math.max(vloer, strookH - tekort);
          if (Math.abs(nieuw - strookH) > 4) {
            pogingen.current += 1;
            vak.style.setProperty("--case-h", nieuw + "px");
            requestAnimationFrame(meet);
            return;
          }
        } else if (strookH && tekort < -8 && vak.style.getPropertyValue("--case-h")) {
          pogingen.current += 1;
          vak.style.removeProperty("--case-h");
          requestAnimationFrame(meet);
          return;
        }
      }
      const past = nodig <= beschikbaar + 8;
      /* Geen gepind podium betekent gewone scroll, en dan mag de strook weer op
         zijn volle hoogte staan. */
      if (!past && vak && vak.style.getPropertyValue("--case-h")) vak.style.removeProperty("--case-h");
      if (past !== gepind) setGepind(past);
      if (podium.current && !reduce) podium.current.style.height = past ? beschikbaar + "px" : "auto";
      /* Laatste fase: ook Growth klapt in. Het podium krimpt dan precies even
         snel als er gescrold wordt, zodat de sectie eronder meeschuift en
         zichtbaar wordt terwijl de vier banden bovenaan blijven staan. */
      const alleBanden = maten.current.reduce((t, m) => t + m.band, 0) + GAP * laatste;
      slot.current = { besch: beschikbaar, d: Math.max(0, beschikbaar - alleBanden) };
      if (spoor.current && !reduce) spoor.current.style.height = past ? (beschikbaar + laatste * stap()) + "px" : "auto";
      tick();
    };
    const soft = (x) => x * x * (3 - 2 * x);
    const tick = () => {
      raf = 0;
      if (!spoor.current) return;
      if (reduce || !gepind) { rijen.current.forEach((el) => el && el.style.setProperty("--p", "0")); return; }
      const h = document.querySelector("header");
      const nh = h && h.offsetHeight ? h.offsetHeight : nav;
      const weg = nh - spoor.current.getBoundingClientRect().top;
      const u = weg / stap();
      const { besch, d } = slot.current;
      const q = d > 0 ? Math.min(1, Math.max(0, (weg - laatste * stap()) / d)) : (u >= laatste ? 1 : 0);
      if (podium.current) podium.current.style.height = (besch - q * d).toFixed(1) + "px";
      rijen.current.forEach((el, i) => {
        if (!el) return;
        let p = soft(Math.min(1, Math.max(0, u - i)));
        if (i === laatste) { const m = maten.current[i], e = Math.max(1, m.exp - m.band); p = 1 - Math.min(1, d * (1 - q) / e); }
        if (Math.abs(p - stand.current[i]) > 0.0005) {
          stand.current[i] = p;
          el.style.setProperty("--p", p.toFixed(4));
        }
      });
    };
    const on = () => { if (!raf) raf = requestAnimationFrame(tick); };
    const opnieuw = () => { pogingen.current = 0; meet(); };
    meet();
    let ro;
    if (typeof ResizeObserver !== "undefined") {
      ro = new ResizeObserver(() => meet());
      binnen.current.forEach((el) => el && ro.observe(el));
    }
    window.addEventListener("scroll", on, { passive: true, capture: true });
    window.addEventListener("resize", opnieuw);
    return () => {
      window.removeEventListener("scroll", on, true);
      window.removeEventListener("resize", opnieuw);
      if (ro) ro.disconnect();
      if (raf) cancelAnimationFrame(raf);
    };
  }, [reduce, wakker, laatste, nav, gepind]);

  return (
    <div>
      {header}
      <div ref={spoor} style={{ position: "relative", marginTop: "var(--space-9)" }}>
        <div ref={podium} style={{ position: reduce || !gepind ? "relative" : "sticky", top: reduce || !gepind ? undefined : nav + "px", overflow: reduce || !gepind ? "visible" : "hidden", display: "grid", gap: GAP + "px", alignContent: "start" }}>
          {SERVICES_PAGE.map((s, i) => (
            <div key={s.t} ref={(el) => { rijen.current[i] = el; }}
              style={{
                "--p": 0, background: "var(--surface-page)", borderRadius: "10px", overflow: "hidden",
                height: reduce || !gepind ? "auto" : "calc((var(--band, 0) + (1 - var(--p, 0)) * (var(--exp, 0) - var(--band, 0))) * 1px)"
              }}>
              <ServiceBlok s={s} go={go} wakker={wakker}
                kopRef={(el) => { koppen.current[i] = el; }}
                innerRef={(el) => { binnen.current[i] = el; }} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

/* Cultuurband: de topbeelden van DOLLE als swipebare strook (touch, trackpad,
   muis slepen). Daaronder een eigen gebroken-witte band waarin de zin
   met parallax omhoog komt. */
const DN_C = "../../assets/cases/";
const DN_BAND = [
  DN_C + "woonexpress/woonexpress-still-01-web.jpg", DN_C + "eezy/eezy-still-01-web.jpg", DN_C + "kiela/kiela-still-01-web.jpg",
  DN_C + "vst/vst-still-01-web.jpg", DN_C + "hangeleven/hangeleven-opening-web.jpg", DN_C + "pietklerkx/pk-still-01-web.jpg",
  DN_C + "woonexpress/woonexpress-still-02-web.jpg", DN_C + "eezy/eezy-still-02-web.jpg", DN_C + "kiela/kiela-still-02-web.jpg",
  DN_C + "vst/vst-still-02-web.jpg", DN_C + "hangeleven/hangeleven-still-01-web.jpg", DN_C + "pietklerkx/pk-still-02-web.jpg"
];
function CultuurBand() {
  const strook = React.useRef(null);
  const band = React.useRef(null);
  const tekst = React.useRef(null);
  React.useEffect(() => {
    const el = strook.current; if (!el) return;
    let neer = false, x0 = 0, s0 = 0, bewogen = false;
    const down = (e) => { if (e.pointerType !== "mouse") return; neer = true; bewogen = false; x0 = e.clientX; s0 = el.scrollLeft; el.style.scrollSnapType = "none"; el.style.cursor = "grabbing"; };
    const move = (e) => { if (!neer) return; const dx = e.clientX - x0; if (Math.abs(dx) > 3) bewogen = true; el.scrollLeft = s0 - dx; };
    const up = () => { if (!neer) return; neer = false; el.style.cursor = "grab"; el.style.scrollSnapType = "x mandatory"; };
    const klik = (e) => { if (bewogen) { e.preventDefault(); e.stopPropagation(); } };
    el.addEventListener("pointerdown", down); window.addEventListener("pointermove", move); window.addEventListener("pointerup", up); el.addEventListener("click", klik, true);
    return () => { el.removeEventListener("pointerdown", down); window.removeEventListener("pointermove", move); window.removeEventListener("pointerup", up); el.removeEventListener("click", klik, true); };
  }, []);
  React.useEffect(() => {
    const reduce = window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) return;
    let raf = 0;
    const tik = () => {
      raf = 0; const b = band.current, t = tekst.current; if (!b || !t) return;
      const r = b.getBoundingClientRect(), vh = window.innerHeight || 800;
      const p = Math.max(0, Math.min(1, (vh - r.top) / (vh + r.height)));
      const y = (0.5 - p) * Math.min(260, vh * 0.3);
      const o = Math.max(0, Math.min(1, (p - 0.12) / 0.3));
      t.style.transform = "translate3d(0," + y.toFixed(1) + "px,0)"; t.style.opacity = o.toFixed(3);
    };
    const op = () => { if (!raf) raf = requestAnimationFrame(tik); };
    tik(); window.addEventListener("scroll", op, { passive: true, capture: true }); window.addEventListener("resize", op);
    return () => { window.removeEventListener("scroll", op, true); window.removeEventListener("resize", op); if (raf) cancelAnimationFrame(raf); };
  }, []);
  return (
    <React.Fragment>
      <section style={{ background: "var(--dolle-white)", padding: "var(--space-8) 0 var(--space-9)" }}>
        <div style={{ padding: "0 var(--page-margin) var(--space-5)" }}><Kicker>Our culture</Kicker></div>
        <div ref={strook} className="dn-swipe" style={{ display: "flex", gap: "var(--space-3)", overflowX: "auto", overflowY: "hidden", scrollSnapType: "x mandatory", scrollPaddingInline: "var(--page-margin)", padding: "0 var(--page-margin)", WebkitOverflowScrolling: "touch", overscrollBehaviorX: "contain", cursor: "grab", scrollbarWidth: "none" }}>
          {DN_BAND.map((src, i) => (
            <span key={i} style={{ flex: "0 0 auto", width: "clamp(320px,52vw,880px)", aspectRatio: "3 / 2", overflow: "hidden", borderRadius: 6, background: "var(--surface-sunk)", scrollSnapAlign: "start" }}>
              <img src={src} alt="" draggable="false" loading="lazy" decoding="async" style={{ display: "block", width: "100%", height: "100%", objectFit: "cover", pointerEvents: "none", userSelect: "none" }} />
            </span>
          ))}
        </div>
        <style>{".dn-swipe::-webkit-scrollbar{display:none}"}</style>
      </section>
    </React.Fragment>
  );
}

/* Kaartenstapel: elke kaart staat gecentreerd vast, de volgende schuift van onder
   over de vorige. De kaart eronder dimt naar ~60% en schaalt naar ~0.96. De kop
   staat stil terwijl de eerste kaart erover komt en vervaagt. Alles volgt de
   scrollpositie, dus omhoog scrollen draait het exact terug. */
const DN_VID = "../../assets/video/";
const DN_KAARTEN = [
  { i: 0, video: DN_VID + "woonexpress-see-fase-16x9.mp4" },
  { i: 1, video: DN_VID + "kiela-droneshots.mp4" },
  { i: 2, video: DN_VID + "woonexpress-studio-set2-a.mp4" },
  { i: 3, video: DN_VID + "eezy-commercial.mp4" }
];
function DienstKaart({ s, video, go, kaartRef }) {
  return (
    <div ref={kaartRef} className="dolle-dark" style={{ position: "absolute", left: "var(--dn-rand)", right: "var(--dn-rand)", top: "var(--dn-top)", bottom: "var(--dn-onder)", borderRadius: 24, overflow: "hidden", background: "var(--dolle-navy)", boxShadow: "0 30px 80px rgba(16,31,60,0.18)", transform: "translate3d(0,110vh,0)", willChange: "transform, opacity" }}>
      <video src={video} autoPlay muted loop playsInline preload="metadata" style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover", display: "block" }} />
      <div aria-hidden="true" style={{ position: "absolute", inset: 0, background: "linear-gradient(180deg, rgba(16,31,60,0) 35%, rgba(16,31,60,0.55) 70%, rgba(16,31,60,0.85) 100%)" }} />
      <div style={{ position: "absolute", left: "clamp(24px,5vw,72px)", right: "clamp(24px,5vw,72px)", bottom: "clamp(28px,6vh,64px)", display: "grid", gap: "var(--space-4)", justifyItems: "start" }}>
        <span style={{ fontFamily: "var(--font-label)", fontWeight: 600, fontSize: "var(--size-body-sm)", letterSpacing: "0.18em", textTransform: "uppercase", color: "var(--dolle-white)" }}>Wildly <span style={{ color: "var(--dolle-cobalt-light, #4D7DFF)" }}>{s.w}</span></span>
        <div style={{ display: "flex", alignItems: "center", gap: "var(--space-4)", color: "var(--dolle-white)" }}>
          <svg aria-hidden="true" viewBox="0 0 100 78" width="36" height="28" fill="none" style={{ flex: "0 0 auto" }}><path d="M12 6 V44 H44" stroke="currentColor" strokeWidth="14" /><path d="M88 72 V34 H56" stroke="currentColor" strokeWidth="14" /></svg>
          <h2 style={{ margin: 0, fontFamily: "var(--font-core)", fontWeight: "var(--weight-heading)", fontSize: "clamp(34px,5vw,80px)", lineHeight: 1, letterSpacing: "var(--track-heading)", color: "var(--dolle-white)" }}>{s.t}</h2>
        </div>
        <p style={{ margin: 0, maxWidth: "45ch", fontSize: "var(--size-body-lg)", lineHeight: "var(--lh-body)", color: "rgba(255,255,255,0.86)" }}>{s.body}</p>
        <button type="button" onClick={() => go("cases")} style={{ appearance: "none", background: "none", border: 0, padding: 0, cursor: "pointer", fontFamily: "var(--font-label)", fontWeight: 600, fontSize: "var(--size-label)", letterSpacing: "var(--track-label-wide)", textTransform: "uppercase", color: "var(--dolle-white)" }}>+ Learn more</button>
      </div>
    </div>
  );
}
function DienstStapel({ go, kop }) {
  const weg = React.useRef(null);
  const kopRef = React.useRef(null);
  const kaarten = React.useRef([]);
  const N = DN_KAARTEN.length;
  React.useEffect(() => {
    const reduce = window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    let raf = 0, nu = null;
    const glad = (t) => t * t * (3 - 2 * t);
    /* Zachte naloop zoals bij de referentie: de stand volgt de scroll met een
       korte demping, dus de kaarten glijden in plaats van te schokken. */
    const tik = () => {
      raf = 0; const el = weg.current; if (!el) return;
      const vh = window.innerHeight || 800;
      const doel = Math.max(0, -el.getBoundingClientRect().top / vh);
      if (nu === null || reduce) nu = doel; else nu += (doel - nu) * 0.14;
      if (Math.abs(doel - nu) > 0.0005) raf = requestAnimationFrame(tik); else nu = doel;
      const f = nu;
      kaarten.current.forEach((k, i) => {
        if (!k) return;
        const e = reduce ? (f >= i ? 1 : 0) : glad(Math.max(0, Math.min(1, f - i)));
        const d = glad(Math.max(0, Math.min(1, f - i - 1)));
        const dd = i < N - 1 ? d : 0;
        k.style.transform = "translate3d(0," + ((1 - e) * vh * 0.95 - dd * vh * 0.04).toFixed(1) + "px,0) scale(" + (1 - 0.08 * dd).toFixed(4) + ")";
        k.style.opacity = String((1 - 0.45 * dd).toFixed(3));
      });
      if (kopRef.current) { const e0 = glad(Math.max(0, Math.min(1, f * 1.3))); kopRef.current.style.opacity = String((1 - e0).toFixed(3)); kopRef.current.style.transform = "scale(" + (1 - 0.04 * e0).toFixed(4) + ")"; }
    };
    const op = () => { if (!raf) raf = requestAnimationFrame(tik); };
    tik(); window.addEventListener("scroll", op, { passive: true }); window.addEventListener("resize", op);
    return () => { window.removeEventListener("scroll", op); window.removeEventListener("resize", op); if (raf) cancelAnimationFrame(raf); };
  }, []);
  return (
    <div ref={weg} data-dn-stapel="1" style={{ position: "relative", height: "calc(100vh * " + (N + 1.3) + ")", "--dn-rand": "15%", "--dn-top": "12vh", "--dn-onder": "10vh" }}>
      <style>{"@media (max-width:760px){[data-dn-stapel]{--dn-rand:4% !important;--dn-top:84px !important;--dn-onder:16px !important}}"}</style>
      <div style={{ position: "sticky", top: 0, height: "100vh", overflow: "hidden" }}>
        <div ref={kopRef} style={{ position: "absolute", inset: 0, display: "grid", alignContent: "center", padding: "0 var(--page-margin)", transformOrigin: "50% 40%" }}>
          <div style={{ width: "100%", maxWidth: "var(--content-max)", margin: "0 auto" }}>{kop}</div>
        </div>
        {DN_KAARTEN.map((k, i) => <DienstKaart key={i} s={SERVICES_PAGE[k.i]} video={k.video} go={go} kaartRef={(el) => { kaarten.current[i] = el; }} />)}
      </div>
    </div>
  );
}

function Diensten({ go }) {
  return (
    <React.Fragment>
    <section className="dolle-calm" style={{ background: "var(--dolle-white)", color: "var(--text-body)", padding: "var(--space-7) var(--page-margin) 0" }}>
      <div style={{ maxWidth: "var(--content-max)", margin: "0 auto" }}>
        {/* De belofte staat als spreuk midden op de pagina, "forefront" in kobalt. */}
        <Reveal dur={1000} y={26} style={{ display: "grid", justifyItems: "start", textAlign: "left", padding: "clamp(96px,16vh,200px) 0 clamp(48px,8vh,112px)" }}>
          <div style={{ display: "grid", justifyItems: "start" }}>
            <Words as="h1" text="We keep brands" delay={120} style={{ margin: 0, fontSize: "clamp(30px,4.6vw,76px)", lineHeight: 1.04, letterSpacing: "var(--track-heading)" }} />
            <Words as="span" text="at the forefront of social." accent="forefront" delay={320} style={{ display: "block", fontFamily: "var(--font-core)", fontWeight: "var(--weight-heading)", fontSize: "clamp(30px,4.6vw,76px)", lineHeight: 1.04, letterSpacing: "var(--track-heading)", color: "var(--text-heading)", paddingBottom: "0.06em" }} />
          </div>
        </Reveal>
      </div>
    </section>
    <CultuurBand />
    <section className="dolle-calm" style={{ background: "var(--dolle-white)", color: "var(--text-body)", padding: "var(--space-9) var(--page-margin) var(--space-4)" }}>
      <div style={{ maxWidth: "var(--content-max)", margin: "0 auto" }}>
      <ServiceStack go={go} header={
        <div style={{ display: "grid", gap: "var(--space-4)", justifyItems: "start" }}>
          <Kicker>Services</Kicker>
          <h2 style={{ margin: 0, maxWidth: "20ch", paddingBottom: "0.12em" }}>Services with a clear goal.</h2>
          <p className="dolle-lead" style={{ margin: 0, maxWidth: "52ch" }}>Four movements that follow one another. Produce, launch, build and grow.</p>
        </div>
      } />
      </div>
    </section>
    {/* Get in touch sluit de pagina af met hetzelfde conversieblok als de
        homepagina: roulerend doelwoord, roulerende werkbeelden. */}
    {window.HomeConversie ? <window.HomeConversie go={go} direct /> : null}
    </React.Fragment>
  );
}

Object.assign(window, { Diensten, SERVICES_PAGE });
