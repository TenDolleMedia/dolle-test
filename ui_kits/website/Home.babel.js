const DS = window.DesignSystem_8f95a2;
const { Logo, Kicker, Frame, WildlyStatement, StatFrame, Button, IconButton, Card, Section, ServiceList, Icon } = DS;
const WildlyRotator = DS.WildlyRotator || (({ size, style }) => <WildlyStatement statement="WILDLY VISIBLE" size={size} style={style} />);
/* Merkwoord en spreuk staan samen op één merk-pagina (HomeWoord). */
/* Faalt zacht als de bundel nog een build achterloopt: de layout blijft staan,
   alleen het hoekdetail valt weg. */
const CornerRule = DS.CornerRule || (({ children }) => children || null);

/* Hero-inhoud als losse laag: in de gordijn-beweging schuift deze hele laag
   omhoog (kop, lead, knoppen, sterren en clients samen), het beeld blijft. */
/* MERKPAGINA ONDER DE HERO — de vier werkwoorden in de tweede regel zijn de
   aanwijzers: erover gaan zet het bijbehorende doelwoord achter WILDLY. Zonder
   hover loopt de reeks zelf door, zodat zichtbaar is dat er iets te bewegen
   valt. Hetzelfde principe als het dienstenblok verderop de pagina. */
/* Het hele zinsdeel is de aanwijzer; alleen de kernwoorden kleuren kobalt. */
const MERK_DOELEN = [
  { zin: "producing strategic media", kern: ["producing", "media"], w: "VISIBLE" },
  { zin: "launching brands", kern: ["launching", "brands"], w: "FORWARD" },
  { zin: "building the systems that multiply it", kern: ["building", "systems"], w: "AHEAD" },
  { zin: "drive growth", kern: ["drive", "growth"], w: "DRIVEN" }
];

/* Het doelwoord staat achter WILDLY: één spoor met de vier
   woorden, de stand schuift het juiste woord in het masker. Het masker neemt de
   breedte van dat woord aan, zodat de rest van de zin meeschuift in plaats van
   te springen. Werkt in beide richtingen, ook van 01 naar 04. */
function MerkWildly({ i, reduce, style }) {
  const woorden = React.useRef([]);
  const [breed, setBreed] = React.useState(0);
  React.useEffect(() => {
    const meet = () => {
      const el = woorden.current[i];
      if (el) setBreed(Math.ceil(el.getBoundingClientRect().width));
    };
    meet();
    window.addEventListener("resize", meet);
    if (document.fonts && document.fonts.ready) document.fonts.ready.then(meet);
    return () => window.removeEventListener("resize", meet);
  }, [i]);
  return (
    <span style={{ ...style, display: "inline-flex", alignItems: "baseline", gap: "0.3em", textTransform: "uppercase", letterSpacing: "var(--track-wildly)", whiteSpace: "nowrap" }}>
      <span>Wildly</span>
      <span aria-hidden="true" style={{ display: "inline-block", height: "1.08em", overflow: "hidden", verticalAlign: "bottom", width: breed ? breed + "px" : "auto", transition: reduce ? "none" : "width 560ms var(--ease-dolle)" }}>
        <span style={{ display: "block", transform: "translateY(" + (-i * 1.08) + "em)", transition: reduce ? "none" : "transform 560ms var(--ease-dolle)" }}>
          {MERK_DOELEN.map((d, k) => (
            <span key={d.w} ref={(el) => { woorden.current[k] = el; }} style={{ display: "block", width: "fit-content", height: "1.08em", color: "var(--text-accent)" }}>{d.w}</span>
          ))}
        </span>
      </span>
    </span>
  );
}

/* Alle vier de doelwoorden staan onder elkaar in beeld. Het woord dat aan de
   beurt is staat vol en kobalt; de andere drie staan vager, zodat te zien is
   dat de reeks doorloopt. */
function MerkWildlyStapel({ i, reduce, trap }) {
  /* trap: de regels komen één voor één binnen (coming soon-pagina). */
  const [n, setN] = React.useState(reduce ? MERK_DOELEN.length : 0);
  React.useEffect(() => {
    if (reduce) return;
    let t = [];
    const start = (wacht) => { t = MERK_DOELEN.map((d, k) => setTimeout(() => setN(k + 1), wacht + k * 520)); };
    if (trap) { start(1100); return () => t.forEach(clearTimeout); }
    /* Op de homepagina: de vier regels komen één voor één binnen bij de eerste
       keer naar beneden scrollen. */
    let los = false;
    const op = (e) => {
      if (los) return;
      if (e && e.type === "wheel" && e.deltaY <= 0) return;
      los = true; weg(); start(120);
    };
    const weg = () => { window.removeEventListener("scroll", op, true); window.removeEventListener("wheel", op); window.removeEventListener("touchmove", op); };
    window.addEventListener("scroll", op, { passive: true, capture: true });
    window.addEventListener("wheel", op, { passive: true });
    window.addEventListener("touchmove", op, { passive: true });
    return () => { weg(); t.forEach(clearTimeout); };
  }, [trap, reduce]);
  return (
    <div style={{ display: "grid", gap: "0.1em", fontFamily: "var(--font-core)", fontWeight: "var(--weight-heading)", fontSize: "clamp(20px,2.2vw,32px)", lineHeight: "var(--lh-wildly)", letterSpacing: "var(--track-wildly)", textTransform: "uppercase", justifyItems: "start" }}>
      {MERK_DOELEN.map((d, k) => {
        const aan = k === i;
        const af = [1, 0.5, 0.34, 0.24][Math.min(3, (k - i + MERK_DOELEN.length) % MERK_DOELEN.length)];
        return (
          <span key={d.w} aria-hidden={aan ? undefined : "true"} style={{ display: "flex", gap: "0.3em", whiteSpace: "nowrap", opacity: k < n ? af : 0, transform: k < n ? "translateY(0)" : "translateY(14px)", transition: reduce ? "none" : "opacity 560ms var(--ease-dolle), transform 900ms var(--ease-dolle)" }}>
            <span style={{ color: "var(--dolle-offwhite)" }}>Wildly</span>
            <span style={{ color: aan ? "var(--text-accent)" : "var(--dolle-offwhite)", transition: reduce ? "none" : "color 560ms var(--ease-dolle)" }}>{d.w}</span>
          </span>
        );
      })}
    </div>
  );
}

/* Het uitgelichte werkwoord loopt met de reeks mee: de kernwoorden kleuren
   kobalt zodra hun doelwoord achter WILDLY staat. Geen hover, geen klik — de
   muis heeft hier geen invloed op. */
function MerkDoel({ d, aan }) {
  const woorden = d.zin.split(" ");
  return (
    <span>
      {woorden.map((w, k) => (
        <span key={k} style={{ color: aan && d.kern.indexOf(w) >= 0 ? "var(--text-accent)" : "inherit", transition: "color var(--dur-ui) var(--ease-dolle)" }}>
          {w + (k < woorden.length - 1 ? " " : "")}
        </span>
      ))}
    </span>
  );
}

function HeroContent({ go }) {
  return (
    <div style={{ position: "relative", width: "100%", height: "100%", display: "grid", alignContent: "end", padding: "var(--space-10) var(--page-margin) clamp(84px,15vh,170px)" }}>
      <div style={{ position: "relative", width: "100%", maxWidth: "var(--content-max)", margin: "0 auto", display: "grid", gap: "var(--space-6)", justifyItems: "start" }}>
        {/* Elke regel is een eigen laag: de scrol schrijft er per frame een eigen
            stand op, zodat de regels net iets uit elkaar reizen. */}
        <h1 style={{ margin: 0, fontSize: "clamp(34px,4.4vw,64px)", lineHeight: 1.06, letterSpacing: "var(--track-heading)", maxWidth: "17ch" }}>
          <span style={{ display: "block" }}>Making brands</span>
          <span style={{ display: "block", textTransform: "uppercase", letterSpacing: "var(--track-wildly)" }}>Wildly <span style={{ color: "var(--text-accent)" }}>Visible</span>.</span>
        </h1>
        <p className="dolle-lead" style={{ margin: 0, maxWidth: "42ch" }}>
          We produce media, launch brands, build systems and drive growth.
        </p>
        <div style={{ display: "flex", gap: "var(--space-6)", flexWrap: "nowrap", alignItems: "center", marginTop: "var(--space-2)" }}>
          <Button variant="primary" onClick={() => go("contact")}>Get in touch</Button>
          <Button variant="link" onClick={() => go("cases")}>Watch cases</Button>
        </div>
      </div>
      {/* Kleine social proof, rechtsonder in de hero, op de paginamarge. */}
      <div style={{ position: "absolute", right: "var(--page-margin)", bottom: "var(--space-4)", display: "flex", alignItems: "center", gap: "0.5em", fontSize: "13px", lineHeight: 1, color: "var(--white-72, rgba(255,255,255,0.72))" }}>
        <span aria-hidden="true" style={{ display: "flex", gap: "0.12em", color: "var(--dolle-white)", fontSize: "11px" }}>
          <span>★</span><span>★</span><span>★</span><span>★</span><span>★</span>
        </span>
        <span>4,9 | 100+ clients</span>
      </div>
    </div>
  );
}

/* Het woord uitgelegd, als lemma: woordmerk, woordsoort, uitspraak, definitie,
   dan WILDLY met de wisselende doelwoorden. Eén kolom, links uitgelijnd. */
function WoordContent({ trap }) {
  const [actief, setActief] = React.useState(0);
  const reduce = typeof window !== "undefined" && window.matchMedia
    ? window.matchMedia("(prefers-reduced-motion: reduce)").matches : false;
  React.useEffect(() => {
    if (reduce) return;
    const t = setInterval(() => setActief((i) => (i + 1) % MERK_DOELEN.length), 3400);
    return () => clearInterval(t);
  }, [reduce]);
  const doel = (i) => <MerkDoel d={MERK_DOELEN[i]} aan={actief === i} />;
  return (
    <div style={{ width: "100%", maxWidth: "var(--content-max)", margin: "0 auto", display: "grid", gap: "var(--space-8)", justifyItems: "start" }}>
        {/* Komt in beeld zoals de tekst onder de hero in de referentie: rustig
           opkomend, van onder naar boven, in drie stappen. */}
        <Reveal dur={1000} y={26} style={{ display: "grid", gap: "var(--space-3)", justifyItems: "start" }}>
          <Logo variant="wordmark" tone="white" height={44} />
          <div style={{ display: "grid", gap: "var(--space-2)" }}>
            <Kicker size="sm" style={{ whiteSpace: "nowrap" }}>[ adjective ]</Kicker>
            <Kicker size="sm" style={{ color: "var(--text-muted)", whiteSpace: "nowrap" }}>dol·le &nbsp;|&nbsp; \ ˈdɔ.lə \</Kicker>
          </div>
        </Reveal>
        {/* Beide zinnen lopen door in één alinea; de tweede volgt direct op de eerste. */}
        <p style={{ margin: 0, maxWidth: "72ch", fontSize: "var(--size-body-lg)", lineHeight: "var(--lh-body)", color: "var(--text-body)" }}>
          <Words as="span" text="We make brands wildly visible and keep brands at the forefront of social media." italic="wildly" delay={220} style={{ display: "inline" }} />
          <br /><Reveal as="span" delay={620} y={0} style={{ display: "inline-block" }}>We do that by {doel(0)}, {doel(1)}, {doel(2)} and {doel(3)}.</Reveal>
        </p>
        <Reveal delay={760} dur={1000} y={26}>
          <MerkWildlyStapel i={actief} reduce={reduce} trap={trap} />
        </Reveal>
        <span style={{ position: "absolute", width: 1, height: 1, overflow: "hidden", clipPath: "inset(50%)" }}>{MERK_DOELEN.map((d) => "Wildly " + d.w.toLowerCase() + ". ").join("")}</span>
    </div>
  );
}

/* GORDIJN — de hero staat vast, de volgende pagina schuift eroverheen.
   Zoals in de referentie: geen extra scrolweg, geen gepinde tweede pagina en geen
   fade. De hero staat sticky onder de navigatie; de merkpagina er direct achter
   heeft een zachte donkere bovenrand en schuift 1:1 met de scroll over het beeld.
   Daardoor verschuift er per scrolstap een stuk, komt de tekst meteen mee omhoog
   en scrolt de bezoeker zonder onderbreking door naar de cases eronder.
   Alles is CSS — er wordt geen enkele frame in JS berekend, dus niets kan lopen
   achterlopen op de scroll. */

function HomeHero({ go }) {
  /* De hero is een scrolweg van 220vh met een gepind beeld van één scherm hoog.
     De voortgang daarin stuurt het dissolve-canvas: de foto lost van onder naar
     boven op in het merk en wordt volledig navy, zodat de sectie eronder er
     naadloos op aansluit. De tekst schuift mee omhoog en verlaat het beeld. */
  const [nav, setNav] = React.useState(88);
  const [p, setP] = React.useState(0);
  const weg = React.useRef(null), inhoud = React.useRef(null);
  React.useEffect(() => {
    const meet = () => {
      const h = document.querySelector("header");
      if (h && h.offsetHeight) setNav(h.offsetHeight);
    };
    meet();
    window.addEventListener("resize", meet);
    return () => window.removeEventListener("resize", meet);
  }, []);
  React.useEffect(() => {
    if (typeof window === "undefined") return;
    if (window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    let raf = 0;
    /* Scrub: de stand is de scrollpositie, niets meer. Eén waarde stuurt het
       raster én de tekst, dus beide staan altijd exact op de scroll — geen
       naijlen, geen eigen tempo, omhoog even snel als omlaag. */
    const tick = () => {
      const el = weg.current;
      if (!el) { raf = 0; return; }
      const totaal = Math.max(1, el.offsetHeight - (window.innerHeight || 800));
      const s = Math.min(Math.max(0, nav - el.getBoundingClientRect().top), totaal);
      /* De scrolweg is zo lang gekozen dat het front van het raster precies één
         pixel per gescrolde pixel aflegt. Daardoor lopen het raster, de
         hero-tekst en de merkpagina alle drie 1:1 met de scroll mee en blijft
         elke onderlinge afstand gelijk. */
      const v = Math.min(1, s / totaal);
      raf = 0;
      setP(v);
      if (inhoud.current) {
        /* De tekst reist met het front van de dissolve mee: dat front legt precies
           één stagehoogte af terwijl v van 0 naar 1 loopt, dus de tekst doet
           hetzelfde en houdt zo dezelfde afstand tot de haakjes. */
        /* De tekst schuift 1:1 met de scroll, net als de merkpagina eronder.
           Daardoor ligt de afstand tussen beide tekstblokken vast, hoe hard je
           ook scrolt. */
        inhoud.current.style.transform = "translate3d(0," + (-s).toFixed(1) + "px,0)";
        /* Tekst, knoppen en de waardering doven samen uit, ruim voordat het
           raster dicht is — ze reizen als één laag mee omhoog. */
        const f = Math.min(1, Math.max(0, (v - 0.4) / 0.22));
        inhoud.current.style.opacity = String(1 - f * f * (3 - 2 * f));
      }
    };
    const on = () => { if (!raf) raf = requestAnimationFrame(tick); };
    /* De lus draait door zolang de stand nog niet op zijn doel staat. */
    window.addEventListener("scroll", on, { passive: true, capture: true });
    window.addEventListener("resize", on);
    tick();
    return () => { window.removeEventListener("scroll", on, true); window.removeEventListener("resize", on); if (raf) cancelAnimationFrame(raf); };
  }, [nav]);
  const Dissolve = window.HeroDissolve;
  const Lab = window.DissolveLab;
  const [cfg, setCfg] = React.useState({});
  const [lab, setLab] = React.useState(false);
  React.useEffect(() => {
    setCfg(window.labStand ? window.labStand() : {});
  }, []);
  /* Hoe ver het volvlak navy van onderaf omhoog loopt over het raster. */
  React.useEffect(() => {
    document.documentElement.style.setProperty("--dolle-navyvul", (cfg.navyFill || 0) + "vh");
  }, [cfg.navyFill]);
  return (
    <section ref={weg} className="dolle-dark" style={{ position: "relative", zIndex: 0, height: "calc(243vh - 132px)", background: "var(--dolle-navy)" }}>
      <div style={{ position: "sticky", top: nav + "px", height: "calc(100vh - " + nav + "px)", minHeight: "420px", overflow: "hidden", background: "var(--dolle-navy)" }}>
        {Dissolve ? <Dissolve src="../../assets/cases/bergvliet/bergvliet-corporate-hero-poster.jpg" video="../../assets/video/bergvliet-corporate.mp4" start={0.5} eind={108} voortgang={p} cfg={cfg} /> : null}
        <div ref={inhoud} style={{ position: "absolute", inset: 0, willChange: "transform", zIndex: 2 }}>
          <HeroContent go={go} />
        </div>
      </div>
      {lab && Lab
        ? <Lab cfg={cfg} setCfg={setCfg} sluit={() => setLab(false)} />
        : !(window.labAan && window.labAan()) ? null : <button type="button" onClick={() => setLab(true)} style={{ position: "fixed", right: "12px", top: "50%", zIndex: 200, appearance: "none", cursor: "pointer", padding: "10px 14px", background: "rgba(9,17,34,0.92)", color: "var(--dolle-white)", border: "1px solid rgba(255,255,255,0.24)", fontFamily: "var(--font-label)", fontSize: "10px", letterSpacing: "0.18em", textTransform: "uppercase" }}>Patroon-lab</button>}
    </section>
  );
}

/* De merkpagina schuift met de band mee in beeld, net als de tekst onder de hero
   in de referentie: de bovenrand loopt in een kort verloop dicht en de tekst staat
   daar direct onder. Zo rijdt DOLLE met de band mee omhoog — het scherm staat
   nooit leeg blauw — terwijl het beeld boven de bandrand nog even doorloopt. */
function HomeWoord() {
  return (
    <section className="dolle-dark" style={{ position: "relative", zIndex: 1, background: "linear-gradient(to bottom, rgba(0,0,0,0) 0, rgba(0,0,0,0) calc(114vh - 132px - var(--dolle-navyvul, 0vh)), var(--dolle-navy) calc(114vh - 132px - var(--dolle-navyvul, 0vh)))", marginTop: "calc(-114vh + 132px)", padding: "clamp(24px,3vh,48px) var(--page-margin) clamp(16px,2vh,32px) clamp(56px,6vw,96px)" }}>
      <WoordContent />
    </section>
  );
}

/* Our cases: witte pagina, drie volvlak cases naast elkaar met de naam en een
   leesactie in beeld. Pijlen links en rechts, "see all cases" onderaan. */
/* Placeholder-cases: tijdelijk beeld, casenamen nog leeg. Vul met echt werk —
   het systeem claimt alleen gemeten resultaat van eigen producties. */
const CAROUSEL_CASES = [
  { naam: "Eezy", beeld: "../../assets/cases/web/case-01.jpg" },
  { naam: "Veteranen Search Team", beeld: "../../assets/cases/web/case-02.jpg" },
  { naam: "Montel", beeld: "../../assets/cases/web/case-03.jpg" },
  { naam: "Blue Rivet", beeld: "../../assets/cases/web/case-04.jpg" },
  { naam: "Woonexpress", beeld: "../../assets/cases/web/case-05.jpg" },
  { naam: "Dé Dakwerkers", beeld: "../../assets/cases/web/case-06.jpg" }
];

/* Our cases: witte pagina, een spoor van cases dat aan beide zijden doorloopt —
   de randtegels blijven half in beeld, zodat zichtbaar is dat er meer is. Onderin
   een navy balk met "see all cases". */
const TILE_W = 30;      /* breedte van één tegel, in procent van de sectie */
const PEEK = 12;        /* hoeveel de eerste tegel links buiten beeld valt */

function HomeCasesCarousel({ go }) {
  const len = CAROUSEL_CASES.length;
  /* Drie kopieën van de reeks; het spoor staat in de middelste. Voorbij een rand
     schuift het gewoon door, en na de beweging springt de positie stil terug naar
     de middelste kopie — de rondgang is daardoor eindeloos en onzichtbaar. */
  const tegels = [...CAROUSEL_CASES, ...CAROUSEL_CASES, ...CAROUSEL_CASES];
  const totaal = tegels.length;
  const DUUR = 900;
  const [pos, setPos] = React.useState(0);
  const [bewegend, setBewegend] = React.useState(true);
  /* De bediening is op slot tot de beweging klaar is, geteld in tijd — nooit
     afhankelijk van een event dat kan uitblijven. Een klik binnen dat slot gaat
     niet verloren maar volgt er direct op. Halverwege het slot valt de positie
     stil terug binnen de reeks: dat is een hele cyclus tegels en dus onzichtbaar,
     waardoor de rondgang eindeloos doorloopt. */
  const slot = React.useRef(0);
  const wachtend = React.useRef(0);
  const stapRef = React.useRef(null);
  const timers = React.useRef([]);
  React.useEffect(() => () => timers.current.forEach(clearTimeout), []);
  const stap = (d) => {
    if (performance.now() < slot.current) { wachtend.current = d; return; }
    slot.current = performance.now() + DUUR + 80;
    setPos((p) => p + d);
    timers.current.push(setTimeout(() => {
      setBewegend(false);
      setPos((p) => ((p % len) + len) % len);
      requestAnimationFrame(() => requestAnimationFrame(() => setBewegend(true)));
    }, DUUR + 20));
    timers.current.push(setTimeout(() => {
      if (!wachtend.current) return;
      const n = wachtend.current;
      wachtend.current = 0;
      stapRef.current(n);
    }, DUUR + 90));
  };
  stapRef.current = stap;
  /* Een procentuele translate rekent tegen de eigen breedte van het spoor, niet
     tegen de sectie — dus eerst omrekenen. */
  const offset = ((pos + len) * TILE_W + PEEK) / (totaal * TILE_W) * 100;
  return (
    <section style={{ background: "var(--dolle-white)", paddingTop: "var(--space-8)" }}>
      <div style={{ padding: "0 var(--page-margin)", maxWidth: "var(--content-max)", margin: "0 auto var(--space-7)", display: "grid", gap: "var(--space-3)", justifyItems: "start" }}>
        <Reveal><Kicker>Cases</Kicker></Reveal>
        <Words as="h2" text="Our cases" delay={80} style={{ whiteSpace: "nowrap", fontSize: "var(--size-h1)", margin: 0 }} />
      </div>
      <div style={{ position: "relative", overflow: "hidden" }}>
        <div
          style={{ display: "flex", gap: "2px", width: totaal * TILE_W + "%", transform: "translateX(-" + offset.toFixed(4) + "%)", transition: bewegend ? "transform " + DUUR + "ms var(--ease-dolle)" : "none", willChange: "transform" }}>
          {tegels.map((c, i) => (
            <CaseTile key={i} item={c} go={go} totaal={totaal} />
          ))}
        </div>
        <IconButton icon="arrow-left" label="Previous case" variant="secondary" size={44} onClick={() => stap(-1)}
          style={{ position: "absolute", left: "var(--space-5)", top: "50%", transform: "translateY(-50%)", background: "var(--dolle-white)", borderColor: "var(--border-hairline)" }} />
        <IconButton icon="arrow-right" label="Next case" variant="secondary" size={44} onClick={() => stap(1)}
          style={{ position: "absolute", right: "var(--space-5)", top: "50%", transform: "translateY(-50%)", background: "var(--dolle-white)", borderColor: "var(--border-hairline)" }} />
      </div>
      <SeeAllBar go={go} />
    </section>
  );
}

function SeeAllBar({ go }) {
  const [hover, setHover] = React.useState(false);
  return (
    <button type="button" onClick={() => go("cases")}
      onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)}
      style={{ width: "100%", border: 0, background: hover ? "var(--dolle-white)" : "var(--dolle-offwhite)", color: "var(--dolle-navy)", borderTop: "1px solid var(--border-hairline)", padding: "var(--space-6) var(--page-margin)", cursor: "pointer", fontFamily: "var(--font-label)", fontSize: "11px", fontWeight: hover ? 700 : 500, letterSpacing: "var(--track-label-wide)", textTransform: "uppercase", transition: "background var(--dur-ui) var(--ease-dolle)" }}>
      See all cases
    </button>
  );
}

function CaseTile({ item, go, totaal }) {
  return (
    <div
      className="dolle-dark"
      style={{ flex: "0 0 calc(" + (100 / totaal) + "% - 2px)", position: "relative", aspectRatio: "3 / 4", overflow: "hidden", background: "#0b1730", cursor: "pointer" }}
      onClick={() => go("case")}
    >
      <img src={item.beeld} alt="" style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover" }} />
      <div style={{ position: "absolute", inset: 0, background: "var(--gradient-protect)" }} />
      <div style={{ position: "absolute", left: 0, right: 0, bottom: "var(--space-8)", display: "grid", gap: "var(--space-4)", justifyItems: "center", textAlign: "center", padding: "0 var(--space-5)" }}>
        <h3 style={{ fontSize: "clamp(18px,1.7vw,26px)", lineHeight: 1.16 }}>{item.naam}</h3>
        {/* Dezelfde link-knop als "Watch cases" in de hero. */}
        <Button variant="link" onClick={(e) => { e.stopPropagation(); go("case"); }}>Watch case</Button>
      </div>
    </div>
  );
}

/* Wit vlak met kobalt letters, kobalt bij hover — zelfde knop als op de
   cases-pagina. */
function WitteDoelKnop({ children, onClick }) {
  const [over, setOver] = React.useState(false);
  return (
    <Button onClick={onClick}
      onMouseEnter={() => setOver(true)} onMouseLeave={() => setOver(false)}
      onFocus={() => setOver(true)} onBlur={() => setOver(false)}
      style={{ background: over ? "var(--text-accent)" : "var(--dolle-white)", color: over ? "var(--dolle-white)" : "var(--text-accent)", borderColor: "var(--text-accent)", transition: "background 240ms var(--ease-dolle), color 240ms var(--ease-dolle), border-color 240ms var(--ease-dolle)" }}>{children}</Button>
  );
}

const SERVICES = [
  { n: "01", t: "Media production", w: "VISIBLE", b: "We produce strategic media." },
  { n: "02", t: "Launches", w: "FORWARD", b: "We help launching brands and products." },
  { n: "03", t: "AI systems", w: "AHEAD", b: "We build systems that scale visibility." },
  { n: "04", t: "Growth", w: "DRIVEN", b: "We measure and drive growth. From reach to revenue." }
];

/* Eén sectie voor de vier diensten: het doelwoord in de kop hoort bij de dienst
   die actief is. Zonder hover loopt de sectie zelf door, zodat zichtbaar is dat
   er iets te bewegen valt; hover neemt het over en onthult de stap — de lijn
   trekt zich vol, het cijfer en de tekst komen op. Het spoor telt twee kopieën
   van de reeks en beweegt altijd vooruit; voorbij de eerste kopie springt het
   stil terug, dus de rondgang is naadloos. */
/* Eén sectie voor de vier diensten. Het doelwoord in de kop hoort bij de dienst
   die actief is; zonder hover loopt de reeks zelf door, hover neemt het over en
   onthult de stap. De wissel is een wissel van twee lagen — het aankomende woord
   zakt van boven binnen terwijl het vertrekkende onder uit schuift. Daardoor
   reist er altijd precies één rij, ook als je van 01 direct naar 04 hovert. */
function HomeServices({ go }) {
  const len = SERVICES.length;
  const SWAP = 560;
  const [actief, setActief] = React.useState(0);
  const [vorig, setVorig] = React.useState(null);
  const [hover, setHover] = React.useState(-1);
  const actiefRef = React.useRef(0);
  actiefRef.current = actief;
  const klok = React.useRef([]);
  const reduce = typeof window !== "undefined" && window.matchMedia
    ? window.matchMedia("(prefers-reduced-motion: reduce)").matches : false;

  React.useEffect(() => () => klok.current.forEach(clearTimeout), []);
  const naar = React.useCallback((doel) => {
    if (doel === actiefRef.current) return;
    setVorig(actiefRef.current);
    setActief(doel);
    klok.current.push(setTimeout(() => setVorig(null), SWAP + 40));
  }, []);

  /* Scrollvulling: de vier regels vullen zich één voor één van links naar
     rechts terwijl de stapel door het venster schuift. Pas als alles vol is
     gaan ze om de beurt lopen. */
  const stapel = React.useRef(null);
  const [vul, setVul] = React.useState(reduce ? 1 : 0);
  React.useEffect(() => {
    if (reduce) return;
    let raf = 0;
    const meet = () => {
      raf = 0;
      const el = stapel.current; if (!el) return;
      const r = el.getBoundingClientRect(), vh = window.innerHeight;
      const start = vh * 0.98, eind = vh * 0.56 - r.height / 2;
      const v = Math.min(1, Math.max(0, (start - r.top) / (start - eind)));
      setVul(Math.round(v * 1000) / 1000);
    };
    const op = () => { if (!raf) raf = requestAnimationFrame(meet); };
    meet();
    window.addEventListener("scroll", op, { passive: true });
    window.addEventListener("resize", op);
    return () => { window.removeEventListener("scroll", op); window.removeEventListener("resize", op); if (raf) cancelAnimationFrame(raf); };
  }, [reduce]);
  const vol = vul >= 1 || hover >= 0;
  const volRef = React.useRef(false);
  React.useEffect(() => {
    if (vol && !volRef.current && hover < 0) { setVorig(null); setActief(0); actiefRef.current = 0; }
    volRef.current = vol;
  }, [vol, hover]);

  React.useEffect(() => {
    if (reduce || hover >= 0 || !vol) return;
    const t = setInterval(() => naar((actiefRef.current + 1) % len), 2800);
    return () => clearInterval(t);
  }, [hover, len, naar, reduce, vol]);
  React.useEffect(() => { if (hover >= 0) naar(hover); }, [hover, naar]);

  const rij = "calc(var(--lh-wildly) * 1em)";
  const woord = (i, plek) => (
    <span key={SERVICES[i].w + plek} style={{ position: plek === "uit" ? "absolute" : "static", inset: plek === "uit" ? 0 : undefined, display: "block", height: rij, color: "var(--text-accent)", transform: plek === "uit" ? "translateY(100%)" : plek === "in" ? "translateY(0)" : "none", transition: reduce ? "none" : "transform " + SWAP + "ms var(--ease-dolle)" }}>{SERVICES[i].w}</span>
  );

  const intro = (
    <div style={{ width: "100%", maxWidth: "var(--content-max)", margin: "0 auto", display: "grid", gap: "var(--space-7)" }}>
      <div style={{ width: "100%", display: "grid", gap: "var(--space-4)", justifyItems: "start" }}>
        <Reveal><Kicker>Services</Kicker></Reveal>
        <Words as="h2" text="Services with a clear goal." delay={80} style={{ margin: 0 }} />
        {/* Alle vier de woorden onder elkaar, zoals in de hero: het actieve woord
            vol en in accent, de andere vervagen met hun afstand tot het actieve. */}
        <div ref={stapel} style={{ display: "grid", justifyItems: "start", fontFamily: "var(--font-core)", fontWeight: "var(--weight-heading)", fontSize: "clamp(22px,2.6vw,38px)", lineHeight: "var(--lh-wildly)", letterSpacing: "var(--track-wildly)", textTransform: "uppercase", whiteSpace: "nowrap" }}>
          {SERVICES.map((sv, i) => {
            const af = (i - actief + len) % len;
            const aan = vol && af === 0;
            const f = vol ? 1 : Math.min(1, Math.max(0, vul * len - i));
            const regel = (kleur) => (
              <React.Fragment>
                <span style={{ color: "var(--text-heading)" }}>Wildly</span>
                <span style={{ color: kleur, transition: reduce ? "none" : "color " + SWAP + "ms var(--ease-dolle)" }}>{sv.w}</span>
              </React.Fragment>
            );
            return (
              <span key={sv.w} style={{ position: "relative", display: "flex", gap: "0.34em", opacity: !vol ? 1 : aan ? 1 : [1, 0.42, 0.3, 0.2][af], transition: reduce ? "none" : "opacity " + SWAP + "ms var(--ease-dolle)" }}>
                <span aria-hidden="true" style={{ display: "flex", gap: "0.34em", opacity: 0.14 }}>{regel("var(--text-heading)")}</span>
                <span style={{ position: "absolute", inset: 0, display: "flex", gap: "0.34em", clipPath: "inset(0 " + ((1 - f) * 100) + "% 0 0)" }}>{regel(aan || !vol ? "var(--text-accent)" : "var(--text-heading)")}</span>
              </span>
            );
          })}
        </div>
        <Reveal delay={320} style={{ marginTop: "var(--space-5)" }}>
          <Button onClick={() => go("diensten")}>Learn more</Button>
        </Reveal>
      </div>
      {/* De vier diensten staan in dezelfde witte laag: de dissolve onthult kop
          én diensten in één keer, dus er valt geen gat tussen. */}
      <ServiceKolommen actief={vol ? actief : -1} loopt={hover < 0 && !reduce} duur={3400} setHover={setHover} go={go} />
    </div>
  );

  /* Geen dissolve meer: een wit blok dat direct onder de haarlijn van de laatste
     case begint. Het blok komt als geheel op de scroll binnen — het stijgt naar
     zijn plek terwijl de koptekst woord voor woord en de vier kolommen lijn na
     lijn aanschuiven. */
  return (
    <section data-diensten className="dolle-calm" style={{ position: "relative", zIndex: 2, background: "var(--dolle-white)", color: "var(--text-body)", padding: "var(--space-8) var(--page-margin) var(--section-gap)", display: "grid" }}>
      <HomeOpkomst>{intro}</HomeOpkomst>
    </section>
  );
}

/* Komt op zodra het door de onderrand van het venster schuift: één rustige
   stijging met fade, daarna blijft het staan. */
function HomeOpkomst({ children, y = 46, dur = 1100, style }) {
  const reduce = typeof window !== "undefined" && window.matchMedia
    ? window.matchMedia("(prefers-reduced-motion: reduce)").matches : false;
  const [aan, setAan] = React.useState(reduce);
  const vak = React.useRef(null);
  React.useEffect(() => {
    if (reduce || !vak.current) return;
    const io = new IntersectionObserver((rijen) => {
      if (rijen.some((r) => r.isIntersecting)) { setAan(true); io.disconnect(); }
    }, { rootMargin: "0px 0px -22% 0px" });
    io.observe(vak.current);
    return () => io.disconnect();
  }, [reduce]);
  return (
    <div ref={vak} style={{ opacity: aan ? 1 : 0, transform: aan ? "translate3d(0,0,0)" : "translate3d(0," + y + "px,0)", transition: "opacity " + Math.round(dur * 0.8) + "ms var(--ease-dolle), transform " + dur + "ms var(--ease-dolle)", ...style }}>{children}</div>
  );
}

/* Wat klanten zeggen: vier—drie kaarten op wit, zelfde hairline-taal als de
   rest. Geen sterren of avatars; het citaat doet het werk, de regel eronder
   noemt de partij. */
/* Wat klanten zeggen: kaartjes met projectbeeld en citaat, horizontaal
   doorscrollbaar. Een kaart leidt naar de case van die klant.
   Citaten zijn placeholders tot de echte quotes er zijn. */
const PROOF_IMG = "../../assets/cases/web/";
const HOME_PROOF = [
  { id: 1, naam: "Niels Perukel", score: 5, q: "DOLLE helped us create the content for the NBM website. The team is very pleasant to work with and they are specialists in their field. On top of that, communication was smooth and easy. Highly recommended!" },
  { id: 2, naam: "Eric van Ginneken", score: 5, q: "A great collaboration with these guys! They made several videos for us that fit who we want to be as Zwaluwe. They are refreshingly direct in their communication and keep as low a profile as possible on the shoot day itself, which we really appreciated!" },
  { id: 3, naam: "Jimi Buser", score: 5, q: "Very skilled work, fast and clear communication. Would definitely do more business with them in the future. Recommended!" },
  { id: 4, naam: "michar oosterbaan", score: 5, q: "A great partner to work with on film for a long time now. They know their stuff and always bring a smile!" },
  { id: 5, naam: "Marlou Duchateau", score: 4, q: "Working with Guus was a pleasure. Short lines of communication and an end result that gets the message across well, despite the complex subject matter!" },
  { id: 6, naam: "Eric jan Pennock", score: 5, q: "Recently made a quick, sharp and very substantive media post for us." }
];

function HomeProof({ go }) {
  const sectie = React.useRef(null);
  const raam = React.useRef(null);
  const spoor = React.useRef(null);
  /* Doorlopende carrousel: de reeks staat twee keer in het spoor, dus zodra de
     eerste helft voorbij is springt de stand terug en loopt de rij naadloos
     door. De beweging is traag en constant; hoveren zet hem stil, slepen neemt
     hem over, en een klik zonder sleep gaat naar die case. */
  const pos = React.useRef(0);
  const stil = React.useRef(false);
  const vast = React.useRef(false);
  const sleep = React.useRef(null);
  const SNELHEID = 26;   /* px per seconde */

  React.useEffect(() => {
    const reduce = window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    let raf = 0, vorig = 0, leeft = true;
    /* De periode is de plek van de eerste kaart van de tweede reeks: dat is
       exact één reeks plus de tussenruimte, dus de sprong valt niet op. */
    const helft = () => {
      const sp = spoor.current;
      const kop = sp && sp.children[HOME_PROOF.length];
      return kop ? kop.offsetLeft : 0;
    };
    /* Het spoor schuift, de foto blijft staan: elke foto staat ruim breder dan
       haar kader en schuift de rijrichting tegemoet, precies zover als de
       overmaat toelaat. Het kader beweegt dus over een vrijwel stilstaand beeld
       en snijdt er steeds een ander deel uit. */
    const zet = () => {
      const sp = spoor.current;
      if (!sp) return;
      sp.style.transform = "translate3d(" + (-pos.current).toFixed(2) + "px,0,0)";
      const W = window.innerWidth || 1440;
      for (let i = 0; i < sp.children.length; i++) {
        const kaart = sp.children[i];
        const img = kaart.firstElementChild && kaart.firstElementChild.firstElementChild;
        if (!img) continue;
        const r = kaart.getBoundingClientRect();
        if (r.right < -80 || r.left > W + 80) continue;
        const d = Math.max(-0.5, Math.min(0.5, ((r.left + r.width / 2) - W / 2) / W));
        /* Nooit verder dan de overmaat van de foto, anders valt het kader bloot. */
        const ruimte = Math.max(0, (img.offsetWidth - r.width) / 2);
        img.style.transform = "translate3d(" + (-d * 2 * ruimte).toFixed(2) + "px,0,0)";
      }
    };
    const loop = (t) => {
      if (!leeft) return;
      const dt = vorig ? Math.min(0.05, (t - vorig) / 1000) : 0;
      vorig = t;
      const h = helft();
      if (h > 0) {
        if (!stil.current && !sleep.current && !reduce) pos.current += SNELHEID * dt;
        /* De kaarten reizen van rechts naar links; de stand blijft binnen één reeks. */
        if (pos.current < 0) pos.current += h;
        if (pos.current >= h) pos.current -= h;
        zet();
      }
      raf = requestAnimationFrame(loop);
    };
    raf = requestAnimationFrame(loop);
    return () => { leeft = false; cancelAnimationFrame(raf); };
  }, []);

  const pak = (e) => {
    sleep.current = { x: e.clientX, start: pos.current, bewogen: false };
    stil.current = true;   /* de band staat stil zolang je hem vasthoudt */
    if (raam.current && raam.current.setPointerCapture) raam.current.setPointerCapture(e.pointerId);
  };
  const beweeg = (e) => {
    const sl = sleep.current;
    if (!sl || !spoor.current) return;
    const dx = e.clientX - sl.x;
    if (Math.abs(dx) > 5) sl.bewogen = true;
    const kop = spoor.current.children[HOME_PROOF.length];
    const h = kop ? kop.offsetLeft : 0;
    let p = sl.start - dx;
    if (h > 0) { while (p < 0) p += h; while (p >= h) p -= h; }
    pos.current = p;
    spoor.current.style.transform = "translate3d(" + (-p).toFixed(2) + "px,0,0)";
  };
  /* Losgelaten na slepen: de band loopt weer. Een klik zonder slepen zet hem
     stil (of weer in beweging), dus de reeks stopt pas als je hem aanklikt. */
  const los = () => {
    const sl = sleep.current;
    sleep.current = null;
    if (!sl) return;
    stil.current = sl.bewogen ? false : !vast.current;
    vast.current = stil.current;
  };

  const [hoverKaart, setHoverKaart] = React.useState(null);

  const kaart = (p, kopie) => {
    const sleutel = p.id + "-" + kopie;
    const aan = hoverKaart === sleutel;
    return (
      <article key={sleutel} tabIndex={0} 
        onMouseEnter={() => setHoverKaart(sleutel)} onMouseLeave={() => setHoverKaart(null)}
        style={{ flex: "0 0 auto", width: "min(80vw, 380px)", display: "grid", borderRadius: 8, border: "1px solid rgba(255,255,255,0.16)", background: aan ? "rgba(16,31,60,0.86)" : "rgba(16,31,60,0.74)", boxShadow: "0 30px 70px rgba(5,12,28,0.35)", backdropFilter: "blur(14px)", WebkitBackdropFilter: "blur(14px)", cursor: "grab", transition: "background 400ms ease" }}>
        {/* Echte Google-review: sterren en bron boven, citaat, naam onder de lijn. */}
        <figure style={{ margin: 0, display: "grid", gridTemplateRows: "auto 1fr auto", gap: "var(--space-5)", padding: "var(--space-6)", height: "100%", boxSizing: "border-box" }}>
          <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: "var(--space-3)" }}>
            <span aria-label={p.score + " out of 5"} style={{ display: "flex", gap: "0.1em", fontSize: "13px", lineHeight: 1, color: "var(--dolle-white)" }}>
              {[0, 1, 2, 3, 4].map((s) => <span key={s} aria-hidden="true" style={{ opacity: s < p.score ? 1 : 0.22 }}>★</span>)}
            </span>
            <Kicker size="sm" style={{ color: "rgba(255,255,255,0.72)", whiteSpace: "nowrap" }}>{p.score + "/5 · Google"}</Kicker>
          </div>
          <blockquote style={{ margin: 0, fontFamily: "var(--font-core)", fontSize: "clamp(16px,1.25vw,19px)", lineHeight: 1.5, color: "var(--dolle-white)", textWrap: "pretty" }}>{"\u201C" + p.q + "\u201D"}</blockquote>
          <figcaption style={{ borderTop: "1px solid rgba(255,255,255,0.16)", paddingTop: "var(--space-4)" }}>
            <span style={{ fontFamily: "var(--font-label)", fontWeight: 600, fontSize: "var(--size-label)", letterSpacing: "var(--track-label-wide)", textTransform: "uppercase", color: "var(--dolle-white)" }}>{p.naam}</span>
          </figcaption>
        </figure>
      </article>
    );
  };

  return (
    <section ref={sectie} className="dolle-dark" style={{ position: "relative", zIndex: 2, background: "var(--dolle-navy)", color: "var(--text-body)", padding: "clamp(96px,16vh,180px) 0", overflow: "hidden", clipPath: "inset(0)" }}>
      {/* Zelfde venster als de deliverables: vaste foto achter een geknipte sectie, met waas. */}
      <div aria-hidden="true" style={{ position: "fixed", inset: 0, backgroundImage: "url(" + HOME_PROOF_BEELD + ")", backgroundSize: "cover", backgroundPosition: "center", pointerEvents: "none" }} />
      <div aria-hidden="true" style={{ position: "absolute", inset: 0, background: "linear-gradient(180deg, rgba(16,31,60,0.54) 0%, rgba(16,31,60,0.42) 45%, rgba(16,31,60,0.62) 100%)", pointerEvents: "none" }} />
      <HomeOpkomst>
        <div style={{ position: "relative", zIndex: 1, display: "grid", gap: "var(--space-7)" }}>
          <div style={{ width: "100%", maxWidth: "var(--content-max)", margin: "0 auto", padding: "0 var(--page-margin)" }}>
            <Words as="h2" text="What clients say." delay={80} style={{ margin: 0, color: "var(--dolle-white)" }} />
          </div>
          <div ref={raam}
            onPointerDown={pak} onPointerMove={beweeg} onPointerUp={los} onPointerCancel={los}
            style={{ overflow: "hidden", padding: "0 var(--page-margin) var(--space-4)", cursor: "grab", touchAction: "pan-y" }}>
            <div ref={spoor} style={{ display: "flex", gap: "var(--space-5)", willChange: "transform" }}>
              {HOME_PROOF.map((p) => kaart(p, "a"))}
              {HOME_PROOF.map((p) => kaart(p, "b"))}
            </div>
          </div>
        </div>
      </HomeOpkomst>
    </section>
  );
}

const HOME_PROOF_BEELD = "../../assets/photography/dolle-set-01.jpg";

/* Werkbeelden bij het conversieblok: behind the scenes van de producties. De
   zes vakken staan vast, de beelden erin rouleren: net als het doelwoord in de
   kop wisselt er elke paar tellen één willekeurig vak naar een willekeurig
   beeld uit de voorraad dat nog niet in het mozaïek staat. */
const BTS_POOL = [
  "../../assets/photography/dolle-set-01.jpg",
  "../../assets/cases/web/case-01.jpg",
  "../../assets/cases/web/case-02.jpg",
  "../../assets/cases/web/case-03.jpg",
  "../../assets/cases/web/case-04.jpg",
  "../../assets/cases/web/case-05.jpg",
  "../../assets/cases/web/case-06.jpg"
];
const BTS = [
  { src: BTS_POOL[0] },
  { src: BTS_POOL[2] },
  { src: BTS_POOL[6], hoog: true },
  { src: BTS_POOL[3], hoog: true },
  { src: BTS_POOL[5] },
  { src: BTS_POOL[1] }
];

function useRoulerendeBeelden(reduce) {
  const [beelden, setBeelden] = React.useState(() => BTS.map((b) => b.src));
  React.useEffect(() => {
    if (reduce) return;
    const t = setInterval(() => {
      setBeelden((oud) => {
        const vrij = BTS_POOL.filter((s) => oud.indexOf(s) === -1);
        if (!vrij.length) return oud;
        const nieuw = oud.slice();
        nieuw[Math.floor(Math.random() * nieuw.length)] = vrij[Math.floor(Math.random() * vrij.length)];
        return nieuw;
      });
    }, 3400);
    return () => clearInterval(t);
  }, [reduce]);
  return beelden;
}

/* CONVERSIE — het blok onder de reviews: één belofte, één knop. Op wit, met
   het beeld rechts in een kader met merkhaken. */
function HomeConversie({ go, tone, direct }) {
  const Opkomst = direct ? React.Fragment : HomeOpkomst;
  const Beeld = direct ? "div" : Reveal;
  const donker = tone === "dark";
  const [hover, setHover] = React.useState(false);
  const [brief, setBrief] = React.useState(false);
  /* Het doelwoord rouleert, zoals op de merkpagina: WILDLY plus één van de vier. */
  const reduce = typeof window !== "undefined" && window.matchMedia
    ? window.matchMedia("(prefers-reduced-motion: reduce)").matches : false;
  const [i, setI] = React.useState(0);
  React.useEffect(() => {
    if (reduce) return;
    const t = setInterval(() => setI((n) => (n + 1) % SERVICES.length), 3400);
    return () => clearInterval(t);
  }, [reduce]);
  const rij = "calc(var(--lh-wildly) * 1em)";
  const beelden = useRoulerendeBeelden(reduce);
  const basis = window.DOLLE_ASSET_BASE || "../../assets/";
  return (
    <section className={donker ? "dolle-dark" : "dolle-calm"} style={{ position: "relative", zIndex: 2, background: donker ? "var(--dolle-navy)" : "var(--dolle-white)", color: "var(--text-body)", padding: "var(--space-7) var(--page-margin) " + (donker ? "var(--space-8)" : "var(--section-gap)"), overflow: "hidden" }}>
      <Opkomst>
        <div style={{ position: "relative", width: "100%", maxWidth: "var(--content-max)", margin: "0 auto", display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(280px,1fr))", gap: "var(--grid-gap)", alignItems: "center" }}>
          <div style={{ position: "relative", zIndex: 2, display: "grid", gap: "var(--space-6)", justifyItems: "start" }}>
            <Reveal style={{ position: "relative" }}><Kicker>Get in touch</Kicker></Reveal>
            <h2 style={{ margin: 0, fontSize: "clamp(30px,3.8vw,56px)", lineHeight: 1.06, letterSpacing: "var(--track-heading)", maxWidth: "18ch" }}>
              <span style={{ display: "block" }}>Become</span>
              <span style={{ display: "flex", alignItems: "flex-start", gap: "0.34em", textTransform: "uppercase", letterSpacing: "var(--track-wildly)", whiteSpace: "nowrap" }}>
                <span>Wildly</span>
                <span aria-hidden="true" style={{ position: "relative", display: "block", height: rij, overflow: "hidden" }}>
                  <span key={i} style={{ display: "block", height: rij, animation: reduce ? "none" : "dolle-woord-in 560ms var(--ease-dolle)" }}>
                    <span style={{ display: "block", height: rij, color: "var(--text-accent)" }}>{SERVICES[i].w}</span>
                  </span>
                </span>
              </span>
              <span style={{ display: "block" }}>with your brand.</span>
            </h2>
            <p className="dolle-lead" style={{ margin: 0, maxWidth: "42ch" }}>
              Discover where your brand still leaves growth, attention and momentum on the table.
            </p>
            {/* Knoppen: de hoofdactie met de beoordeling ernaast, de directe
                lijnen op de regel eronder. */}
            <Reveal delay={260} style={{ display: "flex", alignItems: "center", gap: "var(--space-6)", flexWrap: "wrap" }}>
              <Button onClick={() => setBrief(true)}>Start a project</Button>
            </Reveal>
            <Reveal delay={340} style={{ display: "grid", gridTemplateColumns: "minmax(0,1fr) minmax(0,1fr)", gap: "var(--space-4)", width: "100%", maxWidth: "440px" }}>
              <Button variant="secondary" size="sm" block href="tel:+31651202317">Call</Button>
              <Button variant="secondary" size="sm" block href="mailto:info@dolle.nl">Email</Button>
            </Reveal>
            <Reveal delay={420} style={{ display: "flex", alignItems: "center", gap: "0.5em", fontSize: "13px", lineHeight: 1, color: "var(--text-body)" }}>
              <span aria-hidden="true" style={{ display: "flex", gap: "0.12em", fontSize: "11px", color: "var(--text-heading)" }}>
                <span>★</span><span>★</span><span>★</span><span>★</span><span>★</span>
              </span>
              <span style={{ whiteSpace: "nowrap" }}>4,9 | 100+ clients</span>
            </Reveal>
          </div>
          {/* Behind the scenes: een mozaïek van werkbeelden dat rechts buiten de
              paginamarge doorloopt. Rechte hoeken, smalle naden, geen kaders. */}
          <Beeld {...(direct ? {} : { delay: 160 })} style={{ position: "relative", zIndex: 0, width: "100%", marginRight: "calc(var(--page-margin) * -1)" }}>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gridAutoRows: "minmax(0,auto)", gap: "var(--space-3)" }}>
              {BTS.map((b, i) => (
                <div key={i} style={{ position: "relative", overflow: "hidden", background: "var(--surface-sunk)", aspectRatio: b.hoog ? "3 / 5" : "4 / 3", gridRow: b.hoog ? "span 2" : "auto", transform: "translateY(" + (i % 2 ? 26 : -18) + "px)" }}>
                  <img key={beelden[i]} src={beelden[i]} alt="" loading="lazy" draggable="false"
                    style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover", display: "block", animation: reduce ? "none" : "dolle-woord-in 700ms var(--ease-dolle)" }} />
                </div>
              ))}
            </div>
          </Beeld>
        </div>
      </Opkomst>
      <BriefPanel open={brief} onClose={() => setBrief(false)} />
    </section>
  );
}

/* De vier diensten komen op scroll binnen, kolom na kolom: de haarlijn trekt
   zichzelf van links vol, daarna stijgt de kolom op zijn plek. De stand komt
   rechtstreeks uit de scrollpositie (1:1, geen animatieklok) en wordt als
   --p op de kolom geschreven; de rest is CSS, dus er lopen geen renders mee.
   Per kolom ligt de drempel iets later, waardoor de reeks doorrolt. */
function ServiceKolommen({ actief, loopt, duur, setHover, go }) {
  const vak = React.useRef(null);
  const kolommen = React.useRef([]);
  React.useEffect(() => {
    const reduce = window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) { kolommen.current.forEach((el) => el && el.style.setProperty("--p", 1)); return; }
    let raf = 0;
    const kijk = () => {
      raf = 0;
      const el = vak.current;
      if (!el) return;
      const vh = window.innerHeight || 800;
      const top = el.getBoundingClientRect().top;
      /* Start zodra de rij net onder de vensterrand staat; over 34vh vol, zodat
         de kop erboven nog in beeld is als de vier kolommen aankomen. */
      const basis = (vh * 1.02 - top) / (vh * 0.34);
      kolommen.current.forEach((k, i) => {
        if (!k) return;
        const t = Math.max(0, Math.min(1, basis - i * 0.12));
        /* Eenmaal gevuld blijft gevuld: omhoog scrollen leegt de lijn niet. */
        const was = parseFloat(k.dataset.p || "0");
        if (t <= was) return;
        k.dataset.p = t;
        k.style.setProperty("--p", t.toFixed(4));
      });
    };
    const on = () => { if (!raf) raf = requestAnimationFrame(kijk); };
    window.addEventListener("scroll", on, { passive: true });
    window.addEventListener("resize", on);
    kijk();
    return () => { window.removeEventListener("scroll", on); window.removeEventListener("resize", on); if (raf) cancelAnimationFrame(raf); };
  }, []);
  return (
    <div ref={vak} style={{ display: "grid", gridTemplateColumns: "repeat(4,minmax(0,1fr))", gap: "var(--grid-gap)" }}>
      {SERVICES.map((s, i) => {
        const aan = i === actief;
        return (
          <div key={s.n} ref={(el) => { kolommen.current[i] = el; }} onMouseEnter={() => setHover(i)} onMouseLeave={() => setHover(-1)}
            style={{ "--p": 0, display: "grid", gap: "var(--space-4)", alignContent: "start", cursor: "default" }}>
            <div style={{ height: 1, background: "var(--border-hairline)", position: "relative" }}>
              {/* De scroll vult de lijn gedempt; de actieve dienst trekt daar een volle lijn over, van links en langzaam. */}
              <div style={{ position: "absolute", left: 0, top: 0, height: 1, background: "var(--text-heading)", width: "calc(var(--p) * 100%)", opacity: 0.45 }} />
              <div style={{ position: "absolute", left: 0, top: -1, height: 2, background: "var(--text-heading)", width: "calc(var(--p) * 100%)", transformOrigin: "left center", transform: aan ? "scaleX(1)" : "scaleX(0)", transition: "transform 700ms var(--ease-dolle)" }} />
            </div>
            <div style={{ display: "grid", gap: "var(--space-4)", clipPath: "inset(-4px calc((1 - var(--p)) * 100%) -12px 0)" }}>
              <Kicker size="sm" tone={aan ? "strong" : undefined}>{s.n}</Kicker>
              <h3 style={{ margin: 0, fontSize: "var(--size-h4)", color: aan ? "var(--text-heading)" : "var(--text-muted)", transition: "color var(--dur-ui) var(--ease-dolle)" }}>{s.t}</h3>
              <p style={{ margin: 0, color: "var(--text-body)", fontSize: "var(--size-body-sm)", opacity: aan ? 1 : 0, transform: aan ? "translateY(0)" : "translateY(8px)", transition: "opacity var(--dur-frame) var(--ease-dolle), transform var(--dur-frame) var(--ease-dolle)" }}>{s.b}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}

const HOME_CASES = [
  { kicker: "Launches · 2026", title: "Relaunching a brand in nine weeks", body: "From baseline to campaign, in one continuous production.", stat: "+312% reach" },
  { kicker: "Media production · 2025", title: "Imagery that sticks", body: "A season of strategic media, produced offline and online.", stat: "4.1M views" },
  { kicker: "AI systems · 2026", title: "Content that multiplies itself", body: "A system that delivers new visibility every week.", stat: "6× output" }
];

/* Niet in gebruik op de homepage — de carrousel hierboven vervangt hem.
   Bewaard als drie-op-een-rij alternatief voor andere pagina's. */
function HomeCasesTeaser({ go }) {
  return (
    <Section tone="sunk" kicker="Cases" title="What falls inside the frame becomes the story."
      intro="Starting point, intervention, figure. Every case follows the same format."
      aside={<Button variant="link" onClick={() => go("cases")}>All cases</Button>}>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(3,minmax(0,1fr))", gap: "var(--grid-gap)" }}>
        {HOME_CASES.map((c) => (
          <Card key={c.title} interactive corner kicker={c.kicker} title={c.title} onClick={() => go("case")}
            media={<MediaPlaceholder height="100%" label="Case · placeholder" />} mediaHeight={220}
            footer={<Kicker tone="strong">{c.stat}</Kicker>}>
            {c.body}
          </Card>
        ))}
      </div>
    </Section>
  );
}

/* Verschijnt zodra de sectie in beeld komt; scroll-gestuurd, en altijd zichtbaar
   als er niets meet — nooit blijven hangen op opacity 0. */
function useInView() {
  const ref = React.useRef(null);
  const [in_, setIn] = React.useState(false);
  React.useEffect(() => {
    const el = ref.current;
    if (!el) { setIn(true); return; }
    let done = false;
    const check = () => {
      if (done) return;
      const r = el.getBoundingClientRect();
      const h = window.innerHeight || document.documentElement.clientHeight || 0;
      if (r.top < h * 0.92 && r.bottom > 0) { done = true; setIn(true); off(); }
    };
    const off = () => {
      window.removeEventListener("scroll", check, true);
      window.removeEventListener("resize", check);
      clearTimeout(t);
    };
    window.addEventListener("scroll", check, true);
    window.addEventListener("resize", check);
    const t = setTimeout(() => { done = true; setIn(true); off(); }, 2000);
    check();
    return off;
  }, []);
  return [ref, in_];
}

/* Vervang door de echte Cal.com- of Google Agenda-boekingslink. */
const CAL_URL = "https://cal.com/dolle/intro";

/* Schuift van onderaf het scherm in; Escape en de scrim sluiten. */
function SlidePanel({ open, onClose, label, children, footer, height = "min(86vh,760px)" }) {
  React.useEffect(() => {
    if (!open) return;
    const h = (e) => { if (e.key === "Escape") onClose(); };
    window.addEventListener("keydown", h);
    return () => window.removeEventListener("keydown", h);
  }, [open, onClose]);
  return (
    <div aria-hidden={!open} style={{ position: "fixed", inset: 0, zIndex: 90, pointerEvents: open ? "auto" : "none" }}>
      <div onClick={onClose} style={{ position: "absolute", inset: 0, background: "var(--navy-72, rgba(16,31,60,0.72))", backdropFilter: "blur(6px)", opacity: open ? 1 : 0, transition: "opacity 420ms var(--ease-dolle)" }} />
      <div role="dialog" className="dolle-dark" aria-modal="true" aria-label={label} style={{ position: "absolute", left: "50%", bottom: 0, width: "min(920px,94vw)", height, transform: open ? "translate(-50%,0)" : "translate(-50%,100%)", transition: "transform 620ms var(--ease-dolle)", background: "var(--dolle-navy)", color: "var(--dolle-white)", display: "grid", gridTemplateRows: "auto 1fr auto", overflow: "hidden" }}>
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: "var(--space-4)", padding: "var(--space-4) var(--space-6)", borderBottom: "1px solid var(--white-24, rgba(255,255,255,0.24))" }}>
          <Logo variant="open" tone="white" height={22} />
          <Kicker size="sm" style={{ color: "var(--white-72, rgba(255,255,255,0.72))" }}>{label}</Kicker>
          <IconButton icon="x" label="Close" variant="ghost" size={44} onClick={onClose} style={{ color: "var(--dolle-white)" }} />
        </div>
        <div style={{ overflow: "auto", padding: "var(--space-7) var(--space-6)" }}>{children}</div>
        {footer ? <div style={{ display: "flex", gap: "var(--space-3)", justifyContent: "flex-end", padding: "var(--space-4) var(--space-6)", borderTop: "1px solid var(--white-24, rgba(255,255,255,0.24))" }}>{footer}</div> : null}
      </div>
    </div>
  );
}

const veld = { width: "100%", background: "transparent", border: "none", borderBottom: "1px solid var(--white-24, rgba(255,255,255,0.24))", color: "var(--dolle-white)", fontFamily: "var(--font-core)", fontSize: "var(--size-body-lg)", padding: "var(--space-3) 0", outline: "none" };

function BriefPanel({ open, onClose }) {
    const [sent, setSent] = React.useState(false);
  return (
    <SlidePanel open={open} onClose={onClose} label="Start a project"
      footer={sent ? <Button size="sm" variant="secondary" onClick={onClose}>Close</Button> : (
        <React.Fragment>
          <Button size="sm" variant="ghost" onClick={onClose}>Cancel</Button>
          <Button size="sm" onClick={() => {
            const w = (id) => { const el = document.getElementById(id); return el ? el.value : ""; };
            if (!w("bp-mail")) { const el = document.getElementById("bp-mail"); if (el) el.focus(); return; }
            window.dolleVerstuur && window.dolleVerstuur("Project request · " + (w("bp-company") || w("bp-name") || "website"), [["Name", w("bp-name")], ["Email", w("bp-mail")], ["Company", w("bp-company")], ["Information", w("bp-info")]]);
            setSent(true);
          }}>Send</Button>
        </React.Fragment>
      )}>
      {sent ? (
        <div style={{ display: "grid", gap: "var(--space-4)", justifyItems: "start" }}>
          <Kicker size="sm" style={{ color: "var(--white-72, rgba(255,255,255,0.72))" }}>Received</Kicker>
          <h3 style={{ margin: 0, color: "var(--dolle-white)" }}>An answer within one working day.</h3>
        </div>
      ) : (
        <div style={{ display: "grid", gap: "var(--space-7)", maxWidth: "56ch" }}>
          <label style={{ display: "grid", gap: "var(--space-2)" }}><span style={{ fontSize: "var(--size-body-sm)", color: "var(--white-72, rgba(255,255,255,0.72))" }}>Name</span><input id="bp-name" style={veld} placeholder="Jane Doe" /></label>
          <label style={{ display: "grid", gap: "var(--space-2)" }}><span style={{ fontSize: "var(--size-body-sm)", color: "var(--white-72, rgba(255,255,255,0.72))" }}>Email</span><input id="bp-mail" type="email" required style={veld} placeholder="you@company.com" /></label>
          <label style={{ display: "grid", gap: "var(--space-2)" }}><span style={{ fontSize: "var(--size-body-sm)", color: "var(--white-72, rgba(255,255,255,0.72))" }}>Company</span><input id="bp-company" style={veld} placeholder="Company name" /></label>
          <label style={{ display: "grid", gap: "var(--space-2)" }}><span style={{ fontSize: "var(--size-body-sm)", color: "var(--white-72, rgba(255,255,255,0.72))" }}>Information</span><textarea id="bp-info" rows={4} style={{ ...veld, resize: "vertical" }} placeholder="Goal, timing, budget, anything helps" /></label>
        </div>
      )}
    </SlidePanel>
  );
}

function CallPanel({ open, onClose }) {
  return (
    <SlidePanel open={open} onClose={onClose} label="Schedule a call" height="min(88vh,820px)">
      <div style={{ display: "grid", gap: "var(--space-4)", height: "100%" }}>
        <iframe title="Schedule an intro call" src={open ? CAL_URL : "about:blank"} style={{ width: "100%", minHeight: 560, border: "none", background: "var(--dolle-white)" }} />
        <Kicker size="sm" style={{ color: "var(--white-72, rgba(255,255,255,0.72))" }}>15 minutes · Google Meet · Europe/Amsterdam</Kicker>
      </div>
    </SlidePanel>
  );
}

function HomeCTA({ go }) {
  const [ref, zicht] = useInView();
  const reduce = typeof window !== "undefined" && window.matchMedia
    ? window.matchMedia("(prefers-reduced-motion: reduce)").matches : false;
  const aan = zicht || reduce;
  const [brief, setBrief] = React.useState(false);
  const stap = (i) => ({ opacity: aan ? 1 : 0, transform: aan ? "translateY(0)" : "translateY(16px)", transition: reduce ? "none" : "opacity 700ms var(--ease-dolle) " + (120 + i * 120) + "ms, transform 700ms var(--ease-dolle) " + (120 + i * 120) + "ms" });
  return (
    <section ref={ref} className="dolle-calm" style={{ background: "var(--dolle-white)", color: "var(--text-heading)", padding: "var(--section-gap) var(--page-margin)", overflow: "hidden" }}>
      <div style={{ maxWidth: "var(--content-max)", margin: "0 auto", display: "grid", gap: "var(--space-8)", justifyItems: "start" }}>
        <div style={{ display: "grid", gap: "var(--space-6)", justifyItems: "start", width: "100%" }}>
          <Words as="h2" text="Get in touch." style={{ margin: 0, color: "var(--text-heading)", maxWidth: "16ch" }} />
          <div style={{ ...stap(1) }}>
            <Button onClick={() => setBrief(true)}>Start a project</Button>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(280px,340px))", gap: "var(--space-3)", width: "100%", ...stap(2) }}>
            <a href="tel:+31651202317" style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: "var(--space-6)", padding: "var(--space-3) var(--space-4)", border: "1px solid var(--border-hairline)", color: "var(--text-heading)", textDecoration: "none", fontFamily: "var(--font-label)", fontWeight: 600, letterSpacing: "0.06em", fontSize: "var(--size-body-sm)" }}>
              +31 6 51 20 23 17
              <Icon name="arrow-right" size={16} />
            </a>
            <a href="mailto:info@dolle.nl" style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: "var(--space-6)", padding: "var(--space-3) var(--space-4)", border: "1px solid var(--border-hairline)", color: "var(--text-heading)", textDecoration: "none", fontFamily: "var(--font-label)", fontWeight: 600, letterSpacing: "0.06em", fontSize: "var(--size-body-sm)" }}>
              info@dolle.nl
              <Icon name="arrow-right" size={16} />
            </a>
          </div>
        </div>
      </div>
      <BriefPanel open={brief} onClose={() => setBrief(false)} />
    </section>
  );
}

/* Cases op de homepage in dezelfde rijen als de cases-pagina: de bovenste zes,
   met dezelfde open-beweging. De rij zelf komt uit Cases.jsx, zodat er één
   ontwerp is voor beide pagina's. */
function HomeCasesRijen({ go }) {
  const Rij = window.CaseRij;
  const [lijst, setLijst] = React.useState(() => (window.CASES || []).slice(0, 6));
  /* Zelfde rangorde als de cases-pagina (inclusief een opgeslagen eigen orde). */
  React.useEffect(() => {
    const bron = window.caseVolgorde ? window.caseVolgorde() : (window.CASES || []);
    setLijst(bron.slice(0, 6));
  }, []);
  const [open, setOpen] = React.useState(-1);
  /* Zodra de cases in beeld komen, schuift onderin een knop omhoog die naar de
     cases-pagina leidt; hij verdwijnt weer zodra je het blok verlaat. */
  const vak = React.useRef(null);
  const [zicht, setZicht] = React.useState(false);
  React.useEffect(() => {
    let raf = 0;
    const kijk = () => {
      raf = 0;
      const el = vak.current;
      if (!el) return;
      const vh = window.innerHeight || 800;
      const r = el.getBoundingClientRect();
      /* Weg zodra het dienstenblok in beeld schuift. */
      const diensten = document.querySelector("[data-diensten]");
      const dTop = diensten ? diensten.getBoundingClientRect().top : Infinity;
      setZicht(r.top < vh * 0.9 && dTop > vh * 0.75);
    };
    const on = () => { if (!raf) raf = requestAnimationFrame(kijk); };
    window.addEventListener("scroll", on, { passive: true });
    window.addEventListener("resize", on);
    kijk();
    return () => { window.removeEventListener("scroll", on); window.removeEventListener("resize", on); if (raf) cancelAnimationFrame(raf); };
  }, []);
  if (!Rij || !lijst.length) return null;
  return (
    <section className="dolle-dark dolle-zacht" style={{ position: "relative", zIndex: 2, background: "var(--dolle-navy)", padding: "var(--space-6) var(--page-margin) 0", overflow: "hidden" }}>
      <div style={{ maxWidth: "var(--content-max)", margin: "0 auto", display: "grid", gridTemplateColumns: "minmax(0,1fr)" }}>
        {/* Social proof staat vlak boven de eerste haarlijn van de cases. */}
        <div style={{ display: "flex", justifyContent: "flex-end", alignItems: "center", gap: "0.5em", paddingBottom: "var(--space-4)", fontSize: "13px", lineHeight: 1, color: "var(--white-72, rgba(255,255,255,0.72))" }}>
          <span aria-hidden="true" style={{ display: "flex", gap: "0.12em", color: "var(--dolle-white)", fontSize: "11px" }}>
            <span>★</span><span>★</span><span>★</span><span>★</span><span>★</span>
          </span>
          <span>4,9 | 100+ clients</span>
        </div>
        {lijst.map((c, i) => (
          <React.Fragment key={c.id}>
            {/* Peilpunt: de knop komt op zodra de tweede case in beeld schuift. */}
            {i === 1 ? <div ref={vak} style={{ height: 1 }} /> : null}
            <Rij c={c} i={i} go={go} open={open === c.id} onToggle={() => setOpen(open === c.id ? -1 : c.id)} />
          </React.Fragment>
        ))}
        {window.Haarlijn ? <window.Haarlijn /> : <div style={{ height: 1, background: "var(--white-24, rgba(255,255,255,0.24))", marginRight: "calc(var(--page-margin) * -1)", marginLeft: "calc(var(--page-margin) * -1)" }} />}
        {/* Sluitbalk onder de laatste case: één rij die naar de cases-pagina leidt. */}
      </div>
      <div aria-hidden={!zicht} style={{ position: "fixed", left: 0, right: 0, bottom: "var(--space-5)", zIndex: 40, display: "flex", justifyContent: "center", pointerEvents: zicht ? "auto" : "none" }}>
        <span style={{ display: "block", transform: zicht ? "translateY(0)" : "translateY(160%)", opacity: zicht ? 1 : 0, transition: "transform var(--dur-frame) var(--ease-dolle), opacity var(--dur-ui) var(--ease-dolle)" }}>
          <Button size="sm" tabIndex={zicht ? 0 : -1} onClick={() => go("cases")} style={{ background: "rgba(248,244,236,0.92)", borderColor: "rgba(248,244,236,0.92)", backdropFilter: "blur(4px)" }}>Cases</Button>
        </span>
      </div>
    </section>
  );
}

/* Overgang van de cases naar de diensten: hetzelfde oplossen als in de hero,
   maar nu van navy naar wit. Zelfde instellingen, zelfde scrub — de scrollstand
   binnen deze weg stuurt het raster 1:1. */
function HomeOvergang() {
  const Dissolve = window.HeroDissolve;
  const weg = React.useRef(null);
  const [p, setP] = React.useState(0);
  const [cfg, setCfg] = React.useState({});
  /* De afwijkingen van deze overgang zijn startwaarden, geen dwang: alles wat in
     het Overgang-lab wordt gezet wint. Eén bron voor render én scroll-mapping. */
  const OVERGANG_BASIS = { minScale: 100, preWhite: 100, postWhite: 100, band: 46, jitter: 34 };
  const gebruikt = Object.assign({}, OVERGANG_BASIS, cfg);
  const cfgRef = React.useRef(gebruikt);
  cfgRef.current = gebruikt;
  const [lab, setLab] = React.useState(false);
  const Lab = window.DissolveLab;
  const SLEUTEL = "dolle-overgang-cfg";
  React.useEffect(() => {
    if (!window.labStand) return;
    /* Nog geen eigen stand? Dan de instellingen van de hero-dissolve overnemen;
       de afwijkingen van deze overgang staan hieronder als vaste overschrijving. */
    setCfg(Object.assign({}, window.labStand(), window.labStand(SLEUTEL)));
  }, []);
  React.useEffect(() => {
    if (window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    let raf = 0;
    const tick = () => {
      raf = 0;
      const el = weg.current;
      if (!el) return;
      /* De sweep loopt van het moment dat de strook onderin binnenkomt tot het
         moment dat hij bovenin lospint. Zo zijn de eerste haakjes meteen te zien
         onder de laatste case-rij en is het wit er snel daarna. */
      /* Zelfde opzet als de hero: een gepinde stage van één scherm, waarin de
         voortgang uit de scrolweg komt. Zolang de stage staat vult hij het hele
         beeld, dus er is nergens een grens tussen canvas en een ander blok. */
      const vh = window.innerHeight || 800;
      const totaal = Math.max(1, el.offsetHeight - vh);
      /* De voortgang loopt al terwijl de band binnenschuift, dus vanaf het moment
         dat hij onderin verschijnt kruipt het front omhoog: geen vlak navy gat
         onder de laatste rij. */
      const span = vh + totaal;
      const s = Math.min(Math.max(0, vh - el.getBoundingClientRect().top), span);
      /* De bovenste celrij begint haar tijdlijn op p = 1 − band. Dat punt moet
         samenvallen met het moment dat de bovenrand de viewporttop raakt (s = vh);
         de rest van de scrolweg maakt de vulling af. */
      const start = 1 - (cfgRef.current.band || 46) / 100;
      setP(Math.min(1, start * (s / vh)));
    };
    const on = () => { if (!raf) raf = requestAnimationFrame(tick); };
    window.addEventListener("scroll", on, { passive: true });
    window.addEventListener("resize", on);
    tick();
    return () => { window.removeEventListener("scroll", on); window.removeEventListener("resize", on); if (raf) cancelAnimationFrame(raf); };
  }, []);
  if (!Dissolve) return null;
  return (
    <section aria-hidden="true" ref={weg} style={{ position: "relative", zIndex: 1, pointerEvents: "none", height: "200vh", background: "var(--dolle-white)" }}>
      <div style={{ position: "sticky", top: 0, height: "100vh", overflow: "hidden", pointerEvents: "none", background: "var(--dolle-navy)" }}>
        <Dissolve voortgang={p} cfg={Object.assign({ minScale: 100 }, cfg, {
          preWhite: 100, postWhite: 100,
          /* Zachte kop: de cellen komen over een langere strook aan de beurt, met
             meer willekeur, zodat de haakjes één voor één oppoppen. */
          /* Lange, zachte kop: de cellen komen ver uit elkaar aan de beurt en
             met veel willekeur, zodat de haakjes één voor één oppoppen in plaats
             van als rechte lijn. */
          band: Math.max(46, cfg.band || 0),
          jitter: Math.max(34, cfg.jitter || 0)
        })} grond="#101F3C"
          vul={[255, 255, 255]} flits={[248, 244, 236]} flitsNa={[16, 31, 60]} />
      </div>
      {lab && Lab
        ? <Lab cfg={gebruikt} setCfg={setCfg} sluit={() => setLab(false)} sleutel={SLEUTEL} titel="Overgang-lab" links={true} />
        : !(window.labAan && window.labAan()) ? null : <button type="button" onClick={() => setLab(true)} style={{ position: "fixed", left: "12px", bottom: "12px", zIndex: 200, pointerEvents: "auto", appearance: "none", cursor: "pointer", padding: "10px 14px", background: "rgba(9,17,34,0.92)", color: "var(--dolle-white)", border: "1px solid rgba(255,255,255,0.24)", fontFamily: "var(--font-label)", fontSize: "10px", letterSpacing: "0.18em", textTransform: "uppercase" }}>Overgang-lab</button>}
    </section>
  );
}

function Home({ go }) {
  return (
    <React.Fragment>
      <HomeHero go={go} />
      {/* Alles na de hero schuift eroverheen: één doorlopende scroll. */}
      <div style={{ position: "relative", zIndex: 1 }}>
        <HomeWoord />
        <HomeCasesRijen go={go} />
        <HomeServices go={go} />
        <HomeProof go={go} />
        <HomeConversie go={go} />
      </div>
    </React.Fragment>
  );
}

Object.assign(window, { Home, CallPanel, BriefPanel, SlidePanel, WoordContent, HomeProof, HomeConversie });
