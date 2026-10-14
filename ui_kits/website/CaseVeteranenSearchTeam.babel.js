const VSTBlok = window.DolleTag || (({ children }) => React.createElement("span", null, children));
const VST_DS = window.DesignSystem_8f95a2;
const { Kicker: VSTKicker, Tag: VSTTag, Button: VSTButton, Icon: VSTIcon } = VST_DS;
const VSTWords = window.Words || (({ as = "span", text, style }) => React.createElement(as, { style: style }, text));

const VST = "../../assets/cases/vst/";
const VST_VID = "../../assets/video/";
const VST_KOLOMGAT = "calc(var(--grid-gap) * 1.1)";

/* De stills uit de brandfilm, met de verhouding waarin ze gedraaid zijn. */
const VST_STILLS = [
  ["08", 2.35], ["12", 1.26], ["19", 1.4], ["02", 2.34], ["07", 1.23], ["15", 1.86],
  ["23", 2.35], ["06", 1.37], ["20", 1.93], ["16", 1.24], ["03", 1.51], ["17", 2.2],
  ["11", 1.79], ["21", 1.48], ["09", 1.9], ["01", 1.79], ["13", 1.47], ["18", 2.25],
  ["05", 1.87], ["22", 1.71], ["10", 2.2], ["14", 1.59], ["04", 1.68]
].map(([nr, r], i) => ({
  src: VST + "vst-still-" + nr + "-web.jpg",
  ratio: r.toFixed(2) + " / 1",
  breed: Math.round((i % 3 === 0 ? 340 : i % 3 === 1 ? 240 : 290) * r),
  zak: [0, 26, -18, 12, -28][i % 5],
  tekst: "Veteranen Search Team · brand film"
}));

/* Drie behind-the-scenes loops tussen de stills. */
[[1, "vst-bts-01", "08"], [5, "vst-bts-02", "15"], [9, "vst-bts-03", "20"]].forEach(([plek, naam, terug]) => {
  VST_STILLS.splice(plek, 0, {
    video: VST_VID + naam + ".mp4",
    terug: VST + naam + "-poster-web.jpg",
    ratio: "9 / 16",
    breed: 210,
    zak: plek === 5 ? 18 : -16,
    tekst: "Behind the scenes"
  });
});

function VSTBlokTekst({ kop, tekst }) {
  return (
    <div style={{ display: "grid", gap: "var(--space-3)", justifyItems: "start", maxWidth: "45ch" }}>
      <h2 style={{ margin: 0, fontFamily: "var(--font-core)", fontWeight: "var(--weight-heading)", fontSize: "clamp(19px,2vw,27px)", letterSpacing: "var(--track-heading)", color: "var(--text-heading)" }}>{kop}</h2>
      <p style={{ margin: 0, fontSize: "var(--size-body)", lineHeight: "var(--lh-body)" }}>{tekst}</p>
    </div>
  );
}

/* Brand film naast "Why this film". Bij afspelen schuift de tekstkolom dicht en
   groeit de film in dezelfde rij uit tot volle breedte; daarna komt hij rustig
   in het midden van het scherm. Pauze of einde loopt dezelfde weg terug. */
function VSTOntvouw({ Film }) {
  const [open, setOpen] = React.useState(false);
  const [sleutel, setSleutel] = React.useState(0);
  const vak = React.useRef(null);
  React.useEffect(() => {
    const el = vak.current; if (!el) return;
    const aan = () => {
      setOpen(true);
      setTimeout(() => { const r = el.getBoundingClientRect(); const d = r.top + r.height / 2 - window.innerHeight / 2; if (Math.abs(d) > 20) window.scrollBy({ top: Math.round(d), behavior: "smooth" }); }, 1300);
    };
    const uit = (e) => { if (e.type === "pause" && e.target.ended) return; setOpen(false); setTimeout(() => setSleutel((n) => n + 1), 1300); };
    el.addEventListener("play", aan, true); el.addEventListener("pause", uit, true); el.addEventListener("ended", uit, true);
    return () => { el.removeEventListener("play", aan, true); el.removeEventListener("pause", uit, true); el.removeEventListener("ended", uit, true); };
  }, []);
  const vloei = "1300ms cubic-bezier(.65,0,.2,1)";
  return (
    <div data-vst-film="1" style={{ display: "grid", gridTemplateColumns: open ? "minmax(0,0fr) minmax(0,1fr)" : "minmax(0,0.75fr) minmax(0,1.6fr)", columnGap: open ? 0 : "calc(var(--grid-gap) * 1.1)", alignItems: "start", transition: "grid-template-columns " + vloei + ", column-gap " + vloei }}>
      <div style={{ minWidth: 0, overflow: "hidden" }}>
        <div style={{ width: "max(32ch, 100%)", opacity: open ? 0 : 1, transform: open ? "translate3d(-32px,0,0)" : "translate3d(0,0,0)", transition: "opacity " + (open ? "420ms" : "700ms 600ms") + " ease, transform " + vloei }}>
          <VSTBlokTekst kop="Why this film" tekst="VST's work spans many disciplines and is rarely seen from outside. One film had to make it visible: clear for a sponsor, honest for a new volunteer, complete enough to explain the whole operation." />
        </div>
      </div>
      <div ref={vak} style={{ minWidth: 0 }}>
        {Film ? <Film key={sleutel} bron={VST_VID + "vst-brandfilm.mp4"} poster={VST + "vst-still-04-web.jpg"} onderschrift="BRAND FILM · VETERANEN SEARCH TEAM" watch watchSchaal={open ? 3 : 2} parallax /> : null}
      </div>
    </div>
  );
}

const VST_INTRO = [
  "Veteranen Search Team searches for missing people alongside the police, with a team made up entirely of volunteers. Search lines on foot, bike teams, drones and thermal cameras after dark: an operation few people ever get to see.",
  "DOLLE produced the film that shows it. Filmed on the Veluwe with a full crew, it explains the whole operation in a few minutes for sponsors, municipalities, partners and the volunteers who keep it running."
];
/* Cijfers voor het datablok; voorlopig, tot de echte aantallen binnen zijn. */
const VST_DATA = [
  { label: "Views generated", waarde: 450, achter: "K+" },
  { label: "Search disciplines filmed", waarde: 6 },
  { label: "Volunteers in front of the camera", waarde: 40, achter: "+" }
];

function vstBand() {
  const r = (x) => { const d = String(x || "16 / 9").split("/"); return parseFloat(d[0]) / parseFloat(d[1] || 1) || 16 / 9; };
  return VST_STILLS.map((k) => (k.video ? { video: k.video, r: r(k.ratio) } : { src: k.src, r: r(k.ratio) }));
}

function CaseVeteranenSearchTeam({ go }) {
  const Film = window.CaseFilm;
  const Kaarten = window.CaseKaarten;
  const Rij = window.CaseRij;
  const Haarlijn = window.Haarlijn;
  const [open, setOpen] = React.useState(-1);
  const namen = ["Eezy", "Kiela", "Blue Rivet", "Montel"];
  const verwant = namen.slice(0, 3).map((n) => (window.CASES || []).find((c) => c.klant === n)).filter(Boolean);
  if (!Film) return null;
  const sectie = { background: "var(--dolle-navy)", color: "var(--text-body)", padding: "var(--space-6) var(--page-margin)" };
  const binnen = { maxWidth: "var(--content-max)", margin: "0 auto", display: "grid", gap: "var(--space-5)" };
  const naad = { backgroundImage: "linear-gradient(rgba(255,255,255,0.24), rgba(255,255,255,0.24))", backgroundRepeat: "no-repeat", backgroundPosition: "0 0", backgroundSize: "var(--lijn, 0%) 1px", paddingTop: "var(--space-6)" };
  return (
    <React.Fragment>

      {/* 01 · OPENING — zelfde kop als de andere cases, de brand film loopt erachter */}
      {window.CMKop ? (
        <window.CMKop titel="Veteranen Search Team" tags={["Media production"]} film={VST_VID + "vst-brandfilm.mp4"} start={5.5} eind={78} reserve={["vst-bts-01", "vst-bts-02", "vst-bts-03"].map((f) => VST_VID + f + ".mp4")} poster={VST + "vst-still-02-web.jpg"} go={go} Knop={VSTButton} Woorden={window.Words || null} Tag={VSTBlok}>
          {window.CMIntro ? <window.CMIntro tekst={VST_INTRO} beeld={window.CMOpeningBeeld ? <window.CMOpeningBeeld modus="groei" ratio="16 / 9" src={VST + "vst-still-02-web.jpg"} /> : null} /> : null}
        </window.CMKop>
      ) : null}

      {/* BAND — stills uit de film, zelfde band als de andere cases */}
      {window.BVBand ? (
        <section className="dolle-dark" style={{ background: "var(--dolle-navy)", padding: "0 var(--page-margin) var(--space-6)" }}>
          <div style={{ maxWidth: "var(--content-max)", margin: "0 auto" }}>
            {window.CMOpkomst ? <window.CMOpkomst vertraging={700}><window.BVBand items={vstBand()} hoog="clamp(200px,24vw,340px)" sleep golf /></window.CMOpkomst> : <window.BVBand items={vstBand()} hoog="clamp(200px,24vw,340px)" sleep golf />}
          </div>
        </section>
      ) : null}

      {/* 02 · BRAND FILM */}
      <section className="dolle-dark" style={sectie}>
        <div style={{ ...binnen, ...naad }}>
          <VSTKicker style={{ display: "block", whiteSpace: "nowrap", color: "var(--text-muted)" }}>MEDIA PRODUCTION · BRAND FILM</VSTKicker>
          <div style={{ display: "grid", gap: "var(--space-4)" }}>
            <VSTBlokTekst kop="Why this film" tekst="VST's work spans many disciplines and is rarely seen from outside. One film had to make it visible: clear for a sponsor, honest for a new volunteer, complete enough to explain the whole operation." />
            <Film bron={VST_VID + "vst-brandfilm.mp4"} poster={VST + "vst-still-04-web.jpg"} onderschrift="BRAND FILM · VETERANEN SEARCH TEAM" watch parallax />
          </div>
          <div data-vst-film="1" style={{ display: "grid", gridTemplateColumns: "minmax(0,1fr)", gap: "var(--space-4)", alignItems: "start", paddingTop: "var(--space-5)" }}>
            <VSTBlokTekst kop="Production plan" tekst="Shot in the nature reserves of the Veluwe with a full crew: the briefing at the command vehicle, the search line on foot, the bike team, drones in the air and under water, and the thermal cameras after dark. Each discipline gets its own moment; the edit shows them working as one team." />
            {/* Zoals de studio shoot bij Woonexpress: hover opent een still, de rest staat als smalle strook. */}
            <div data-vst-plan="1" style={{ minWidth: 0 }}>
              {window.CMAccordeon ? <window.CMAccordeon items={["13", "19", "06", "14", "16", "09"].map((nr) => ({ src: VST + "vst-still-" + nr + "-web.jpg", label: "" }))} ratio={16 / 9} hoog="clamp(280px,36vw,560px)" licht /> : null}
            </div>
          </div>
          <style>{"@media (max-width:860px){[data-vst-film]{grid-template-columns:minmax(0,1fr) !important}}"}</style>
        </div>
      </section>

      {/* 03 · WAAROM */}
      <section className="dolle-dark" style={sectie}>
        {/* Tekst begint bovenaan en loopt sticky mee tot de onderkant van de beelden. */}
        <div data-vst-film="1" style={{ ...binnen, ...naad, gridTemplateColumns: "minmax(0,0.75fr) minmax(0,1.6fr)", alignItems: "stretch" }}>
          <div style={{ alignSelf: "stretch", minWidth: 0 }}>
            <div style={{ position: "sticky", top: "116px" }}>
              <VSTBlokTekst kop="A film to build visibility" tekst="Built to work wherever VST tells its story: trade fairs, sponsor days, meetings with municipalities and its own channels. Inside the organisation it is used in trainings and shown to new volunteers before they sign up." />
            </div>
          </div>
          <div style={{ minWidth: 0, background: "#0b1730", overflow: "hidden", borderRadius: 5 }}>
            <img src={VST + "vst-still-22-web.jpg"} alt="" loading="lazy" decoding="async" style={{ display: "block", width: "100%", aspectRatio: "4 / 3", objectFit: "cover" }} />
          </div>
        </div>
      </section>

      {/* 05 · DELIVERABLES */}
      {window.CMData ? <window.CMData kop="Deliverables" beeld={VST + "vst-still-03-web.jpg"} waas={0.42} cijfers={VST_DATA} Tag={VSTBlok} tags={["Concept", "Production plan", "Direction", "Production", "Drone", "Edit"]} review={{ tekst: "For years people asked us what we actually do. Now we show them this film. DOLLE took the time to understand every part of a search and captured it with real respect for our volunteers. It opens doors with sponsors and municipalities, and new volunteers sign up after seeing it.", naam: "Name", rol: "Veteranen Search Team" }} /> : null}

      {/* 06 · RELATED WORK */}
      <section className="dolle-dark" style={{ background: "var(--dolle-navy)", padding: "var(--space-6) var(--page-margin)" }}>
        <div style={{ maxWidth: "var(--content-max)", margin: "0 auto", display: "grid", gap: "var(--space-4)", gridTemplateColumns: "minmax(0,1fr)" }}>
          <VSTKicker style={{ display: "block", whiteSpace: "nowrap", color: "var(--text-muted)" }}>Related work</VSTKicker>
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

window.CaseVeteranenSearchTeam = CaseVeteranenSearchTeam;
