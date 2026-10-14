const EEZY_DS = window.DesignSystem_8f95a2;
const { Kicker: EKicker, Icon: EIcon, Button: EButton } = EEZY_DS;
const E_IMG = "../../assets/cases/web/";
const E_SET = "../../assets/photography/dolle-set-01.jpg";
const E_POSTER = "../../assets/hero-showreel-frame.png";
const E_NAAD = "4px";
const E_KOLOMGAT = "var(--space-5)";

/* CASE DETAIL · EEZY · variant MINIMAL.
   Opening: naam, haarlijn, daaronder de intro links bovenaan en rechts één tot
   drie items (foto, video, story of social) die de kolom vullen. Daarna de
   hoofdfilm met een swipebare strook stills en een tekstblok. Related work komt
   uit dezelfde rij als de overzichtspagina, dus inclusief dezelfde beweging.
   Tekst en beeld zijn nu dummy. */

/* Openingskolom: 1 tot 3 items. Bij één item vult het de hele kolom, bij twee
   staan ze onder elkaar, bij drie krijgt het eerste de volle breedte. */
const E_EEZY = "../../assets/cases/eezy/";
/* Openingskolom: het aantal beelden bepaalt de opmaak. Eén beeld staat groot en
   alleen, twee vormen een verschoven diptiek, drie tot vijf komen als losse
   kaarten op ritme. Beelden houden hun eigen verhouding, dus niets wordt
   afgesneden. */
const E_OPENING = [
  { src: E_EEZY + "eezy-patient-web.jpg", ratio: "5 / 4", plek: "50% 62%" }
];

/* Deliverables: wat er uit de productie kwam. */
const E_INTRO = [
  "Eezy makes dentures accessible: treatment locations across the Netherlands, a digital scan instead of an impression and a new denture in three steps. For its mostly older patients, a process they had written off as slow and uncomfortable.",
  "DOLLE produced the campaign that explains it, in film and photography: what Eezy is, how the three steps work and what it changes. The social campaign performed and was scaled up into a national TV commercial on NPO 1, 2 and 3."
];
/* Cijfers voor het datablok; voorlopig, tot de echte aantallen binnen zijn. */
const E_DATA = [
  { label: "Views generated", waarde: 2.4, achter: "M+" },
  { label: "National TV channels", waarde: 3 },
  { label: "Social assets delivered", waarde: 24, achter: "+" }
];
/* Band onder de hero: veel behind the scenes achter elkaar, afgewisseld met de nieuwe stills. */
const E_BAND = [
  ["set-01", 0.667], ["row-01", 0.667], ["consult-03", 1.5], ["set-03", 0.667], ["interview", 0.667], ["row-04", 1.5],
  ["product-01", 0.667], ["set-02", 0.667], ["row-02", 0.667], ["team-01", 1.5], ["set-05", 0.667], ["row-03", 0.667],
  ["row-06", 1.5], ["consult-06", 0.667], ["set-06", 0.667], ["row-05", 0.667], ["lab-01", 1.5], ["set-07", 0.667],
  ["team", 0.667], ["consult-02", 1.5], ["set-09", 0.667], ["lab", 0.667], ["receptie-01", 1.5], ["consult-05", 0.667], ["consult-01", 1.5]
].map(([n, ra]) => ({ src: E_EEZY + "eezy-" + n + "-web.jpg", r: ra }));
const E_LEVERING = ["Concept", "Direction", "Production", "Edit", "Photography", "Broadcast delivery"];

/* Stills bij de film: swipebaar, gemengde ratio's. */
const E_STILLS = [
  { src: E_IMG + "case-01.jpg", ratio: "3 / 2" },
  { src: E_IMG + "case-03.jpg", ratio: "4 / 5" },
  { src: E_SET, ratio: "9 / 16", film: true },
  { src: E_IMG + "case-05.jpg", ratio: "3 / 2" },
  { src: E_IMG + "case-06.jpg", ratio: "4 / 5" },
  { src: E_IMG + "case-02.jpg", ratio: "3 / 2", film: true }
];

function OpeningCluster({ items }) {
  const Play = window.CasePlay;
  const lijst = items.slice(0, 5);
  const n = lijst.length;
  /* Per aantal een eigen ritme: breedte in procenten van de kolom, en hoeveel
     elk beeld meezakt. */
  const ritme = {
    1: [{ b: "100%", z: 0, uit: "flex-end" }],
    2: [{ b: "78%", z: 0, uit: "flex-end" }, { b: "52%", z: 28, uit: "flex-start" }],
    3: [{ b: "62%", z: 0, uit: "flex-end" }, { b: "44%", z: 24, uit: "flex-start" }, { b: "50%", z: 16, uit: "flex-end" }],
    4: [{ b: "48%", z: 0, uit: "flex-start" }, { b: "44%", z: 34, uit: "flex-end" }, { b: "40%", z: 10, uit: "flex-start" }, { b: "46%", z: 26, uit: "flex-end" }],
    5: [{ b: "46%", z: 0, uit: "flex-start" }, { b: "42%", z: 30, uit: "flex-end" }, { b: "38%", z: 8, uit: "flex-start" }, { b: "40%", z: 24, uit: "flex-end" }, { b: "36%", z: 14, uit: "flex-start" }]
  }[n] || [{ b: "100%", z: 0, uit: "flex-end" }];
  return (
    <div style={{ display: "flex", flexWrap: "wrap", gap: "var(--space-4)", justifyContent: "flex-end", alignItems: "flex-start" }}>
      {lijst.map((t, i) => {
        const r = ritme[i] || ritme[0];
        return (
          <div key={i} style={{ position: "relative", flex: "0 0 auto", width: n === 1 ? "100%" : r.b, aspectRatio: t.ratio || undefined, marginTop: r.z + "px", marginLeft: r.uit === "flex-end" ? "auto" : 0, marginRight: r.uit === "flex-start" ? "auto" : 0, overflow: "hidden", background: "#0b1730" }}>
            <img src={t.src} alt="" loading="lazy" style={{ display: "block", width: "100%", height: t.ratio ? "100%" : "auto", objectFit: t.ratio ? "cover" : undefined, objectPosition: t.plek || "50% 50%" }} />
            {t.type === "video" && Play ? <Play klein /> : null}
          </div>
        );
      })}
    </div>
  );
}

/* Kaarten bij het slotblok: stills en socials in wisselende maten en op
   wisselende hoogtes. De rij drijft door, loopt oneindig rond en is te slepen
   of te swipen. Geen tekst, geen pijlen — alleen beeld. */
const E_KAARTEN = [
  { src: E_EEZY + "eezy-set-01-web.jpg", ratio: "3 / 4", breed: 380, zak: -30 },
  { src: E_EEZY + "eezy-set-03-web.jpg", ratio: "9 / 16", breed: 270, zak: 52 },
  { src: E_EEZY + "eezy-still-05-web.jpg", ratio: "3 / 2", breed: 520, zak: -16 },
  { src: E_EEZY + "eezy-set-02-web.jpg", ratio: "2 / 3", breed: 300, zak: 40 },
  { src: E_EEZY + "eezy-still-04-web.jpg", ratio: "1 / 1", breed: 400, zak: -44 },
  { src: E_EEZY + "eezy-set-05-web.jpg", ratio: "4 / 5", breed: 340, zak: 30 },
  { src: E_EEZY + "eezy-lab-web.jpg", ratio: "3 / 2", breed: 480, zak: -24 },
  { src: E_EEZY + "eezy-set-06-web.jpg", ratio: "9 / 16", breed: 260, zak: 46 },
  { src: E_EEZY + "eezy-set-07-web.jpg", ratio: "4 / 5", breed: 360, zak: -36 },
  { src: E_EEZY + "eezy-set-09-web.jpg", ratio: "2 / 3", breed: 310, zak: 34 }
];

const snipR = (s) => { if (!s) return 1; const p = String(s).split("/").map(Number); return p.length === 2 && p[1] ? p[0] / p[1] : p[0] || 1; };
function SnippetKaarten({ items, tempo = 0.4, schuif = false }) {
  const Play = window.CasePlay;
  const rail = React.useRef(null);
  const stil = React.useRef(false);
  const reduce = typeof window !== "undefined" && window.matchMedia
    ? window.matchMedia("(prefers-reduced-motion: reduce)").matches : false;
  /* Drie sets naast elkaar; zodra de scroll een set te ver staat schuift hij
     een set terug. Daardoor kan er eindeloos doorgeswipet worden. */
  React.useEffect(() => {
    const el = rail.current;
    if (!el) return;
    const set = () => el.scrollWidth / 3;
    const midden = () => { const s = set(); if (s > 0 && el.scrollLeft < 1) el.scrollLeft = s; };
    const rond = () => {
      const s = set();
      if (s <= 0) return;
      if (el.scrollLeft < s * 0.5) el.scrollLeft += s;
      else if (el.scrollLeft > s * 1.5) el.scrollLeft -= s;
    };
    midden();
    const klokken = [60, 300, 900].map((ms) => setTimeout(midden, ms));
    el.addEventListener("scroll", rond, { passive: true });
    let raf = 0;
    if (!reduce) {
      let pos = null, vorig = 0;
      const stap = (t) => {
        raf = requestAnimationFrame(stap);
        if (stil.current) { pos = null; vorig = t; return; }
        const dt = vorig ? Math.min(64, t - vorig) : 16.7;
        vorig = t;
        if (pos == null) pos = el.scrollLeft;
        pos += tempo * (dt / 16.7);
        el.scrollLeft = pos;
        rond();
        /* Alleen bijstellen als de rondloop echt verspringt; anders zou het
           afronden van de browser de subpixel-stap elke keer wegpoetsen. */
        if (Math.abs(el.scrollLeft - pos) > 2) pos = el.scrollLeft;
      };
      raf = requestAnimationFrame(stap);
    }
    return () => { klokken.forEach(clearTimeout); el.removeEventListener("scroll", rond); if (raf) cancelAnimationFrame(raf); };
  }, [reduce, tempo]);
  /* Slepen met de muis; op touch doet de browser het zelf. */
  React.useEffect(() => {
    const el = rail.current;
    if (!el) return;
    let sleep = false, x0 = 0, l0 = 0;
    const neer = (e) => { sleep = true; stil.current = true; x0 = e.clientX; l0 = el.scrollLeft; el.style.cursor = "grabbing"; };
    const beweeg = (e) => { if (sleep) el.scrollLeft = l0 - (e.clientX - x0); };
    const op = () => { sleep = false; stil.current = false; el.style.cursor = "grab"; };
    el.addEventListener("pointerdown", neer);
    el.addEventListener("pointermove", beweeg);
    window.addEventListener("pointerup", op);
    return () => { el.removeEventListener("pointerdown", neer); el.removeEventListener("pointermove", beweeg); window.removeEventListener("pointerup", op); };
  }, []);
  /* Liggende foto's krap in hun kader; het beeld schuift mee met de rail. */
  React.useEffect(() => {
    if (!schuif) return;
    const el = rail.current; if (!el) return;
    let raf;
    const tik = () => {
      raf = requestAnimationFrame(tik);
      const vb = el.getBoundingClientRect(), mid = vb.left + vb.width / 2;
      el.querySelectorAll("[data-schuif]").forEach((img) => {
        const r = img.parentNode.getBoundingClientRect();
        if (r.right < vb.left - 200 || r.left > vb.right + 200) return;
        const p = Math.max(-1, Math.min(1, (r.left + r.width / 2 - mid) / (vb.width / 2 + r.width / 2)));
        img.style.transform = "translate3d(" + (p * -18).toFixed(2) + "%,0,0)";
      });
    };
    raf = requestAnimationFrame(tik);
    return () => cancelAnimationFrame(raf);
  }, [schuif]);
  const lijst = items.concat(items, items);
  const diepst = items.reduce((m, k) => Math.max(m, Math.abs(k.zak || 0)), 0);
  return (
    <div ref={rail} data-rail="1"
      style={{ display: "flex", gap: "var(--space-3)", alignItems: "center", overflowX: "auto", scrollbarWidth: "none", cursor: "grab", touchAction: "pan-y", WebkitOverflowScrolling: "touch", marginRight: "calc(var(--page-margin) * -1)", marginLeft: "calc(var(--page-margin) * -1)", paddingLeft: "var(--page-margin)", paddingTop: diepst + "px", paddingBottom: diepst + "px" }}>
      {lijst.map((k, i) => {
        const r0 = snipR(k.ratio), krap = schuif && !k.video && r0 > 1.2;
        const br = krap ? Math.round(k.breed * 0.72) : k.breed;
        return (
        <div key={i} style={{ position: "relative", flex: "0 0 auto", width: "clamp(" + Math.round(br * 0.62) + "px," + (br / 14.4).toFixed(1) + "vw," + br + "px)", aspectRatio: krap ? String(r0 * 0.72) : k.ratio, marginTop: (k.zak || 0) + "px", overflow: "hidden", background: "#0b1730" }}>
          {k.video
            ? (window.CaseLoop
              ? <window.CaseLoop bron={k.video} terug={k.terug} stijl={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover", display: "block" }} />
              : <video src={k.video} autoPlay muted loop playsInline preload="metadata" draggable="false" style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover", display: "block" }} />)
            : krap
            ? <img src={k.src} alt="" decoding="async" draggable="false" data-schuif="1" style={{ position: "absolute", top: 0, bottom: 0, left: "-35%", width: "170%", maxWidth: "none", height: "100%", maxHeight: "none", objectFit: "cover", display: "block", willChange: "transform" }} />
            : <img src={k.src} alt="" loading="lazy" draggable="false" style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover", display: "block" }} />}
          {k.film && Play ? <Play klein /> : null}
        </div>
        );
      })}
    </div>
  );
}

function CaseEezy({ go }) {
  const Strook = window.CaseStrook;
  const Film = window.CaseFilm;
  const Rij = window.CaseRij;
  const Haarlijn = window.Haarlijn;
  const [open, setOpen] = React.useState(-1);
  /* Related work: vier echte cases, in exact dezelfde rij als op /cases. */
  const verwant = (window.CASES || []).filter((c) => c.klant !== "Eezy").slice(0, 3);
  if (!Strook || !Film) return null;
  return (
    <React.Fragment>

      {/* 01 · OPENING — zelfde kop als Woonexpress, met de commercial als lus op de achtergrond (logo weggesneden) */}
      {window.CMKop ? (
        <window.CMKop titel="Eezy" tags={["Media production", "Growth"]} film="../../assets/video/eezy-commercial.mp4" start={0.3} eind={16.4} uitsnede={1.3} poster={E_EEZY + "eezy-hero-poster-web.jpg"} go={go} Knop={EButton} Woorden={window.Words || null} Tag={window.DolleTag}>
          {window.CMIntro ? <window.CMIntro tekst={E_INTRO} beeld={window.CMOpeningBeeld ? <window.CMOpeningBeeld modus="groei" start={0.3} ratio="3 / 2" src={E_EEZY + "eezy-team-02-web.jpg"} /> : null} /> : null}
        </window.CMKop>
      ) : null}

      {/* Band met stills, cutdowns en BTS direct onder de intro; alles even hoog, zoals bij de andere cases */}
      <section className="dolle-dark" style={{ background: "var(--dolle-navy)", padding: "0 var(--page-margin) var(--space-6)" }}>
        <div style={{ maxWidth: "var(--content-max)", margin: "0 auto" }}>
          {window.BVBand ? <window.BVBand items={E_BAND} hoog="clamp(200px,24vw,340px)" golf /> : <SnippetKaarten items={E_KAARTEN.map((k) => ({ ...k, zak: 0 }))} />}
        </div>
      </section>

      {/* 02 · FILM */}
      <section className="dolle-dark" style={{ background: "var(--dolle-navy)", color: "var(--text-body)", padding: "var(--space-6) var(--page-margin)" }}>
        <div style={{ maxWidth: "var(--content-max)", margin: "0 auto", display: "grid", gap: "var(--space-6)" }}>
          <div style={{ display: "grid", gap: "var(--space-4)" }}>
            {window.CMLijn ? <window.CMLijn /> : null}
            <h2 style={{ margin: 0, paddingTop: "var(--space-2)", fontFamily: "var(--font-core)", fontWeight: "var(--weight-heading)", fontSize: "clamp(22px,2.6vw,36px)", letterSpacing: "var(--track-heading)", color: "var(--text-heading)" }}>National commercial · NPO 1, 2 &amp; 3</h2>
            <Film bron="../../assets/video/eezy-commercial.mp4" poster={E_EEZY + "eezy-still-03-web.jpg"} />
            {/* Drie behind-the-scenes foto's van de set, even groot naast elkaar. */}
            <h3 style={{ margin: 0, paddingTop: "var(--space-5)", fontFamily: "var(--font-core)", fontWeight: "var(--weight-heading)", fontSize: "clamp(19px,2vw,27px)", letterSpacing: "var(--track-heading)", color: "var(--text-heading)" }}>Behind the scenes &amp; stills</h3>
            <div data-e-bts="1" style={{ display: "grid", gridTemplateColumns: "repeat(3,minmax(0,1fr))", gap: "var(--space-3)" }}>
              {["eezy-interview-web.jpg", "eezy-row-03-web.jpg", "eezy-row-01-web.jpg", "eezy-consult-06-web.jpg", "eezy-product-02-web.jpg", "eezy-consult-05-web.jpg"].map((f) => (
                <span key={f} style={{ display: "block", aspectRatio: "2 / 3", overflow: "hidden", borderRadius: 5, background: "#0a1428" }}>
                  <img src={E_EEZY + f} alt="" loading="lazy" decoding="async" style={{ display: "block", width: "100%", height: "100%", objectFit: "cover" }} />
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 04 · DELIVERABLES */}
      {window.CMData ? <window.CMData kop="Deliverables" beeld={E_EEZY + "eezy-consult-04-web.jpg"} waas={0.42} cijfers={E_DATA} Tag={DolleTag} tags={E_LEVERING} review={{ tekst: "DOLLE understood right away who we are talking to. They made our three steps simple and warm to watch, and our patients recognise themselves in it. The social campaign did so well that we brought the same work to NPO 1, 2 and 3. A partner that thinks along from the first idea to the final cut.", naam: "Name", rol: "Eezy" }} /> : null}

      {/* 03 · RELATED WORK — dezelfde rijen als op de overzichtspagina */}
      <section className="dolle-dark" style={{ background: "var(--dolle-navy)", padding: "var(--space-6) var(--page-margin)" }}>
        <div style={{ maxWidth: "var(--content-max)", margin: "0 auto", display: "grid", gap: "var(--space-4)", gridTemplateColumns: "minmax(0,1fr)" }}>
          <EKicker style={{ color: "var(--text-muted)" }}>Related work</EKicker>
          <div style={{ display: "grid", gridTemplateColumns: "minmax(0,1fr)" }}>
            {Rij ? verwant.map((c, i) => (
              <Rij key={c.id} c={c} i={i} go={go} open={open === c.id} onToggle={() => setOpen(open === c.id ? -1 : c.id)} />
            )) : null}
            {Haarlijn ? <Haarlijn /> : null}
          </div>
        </div>
      </section>

      {/* 04 · CTA */}
      {window.HomeConversie ? <window.HomeConversie go={go} tone="dark" /> : null}

    </React.Fragment>
  );
}

Object.assign(window, { CaseEezy, CaseKaarten: SnippetKaarten });
