const MP_DS = window.DesignSystem_8f95a2;
const { Kicker: MPKicker, Tag: MPTag, Button: MPButton } = MP_DS;

const MP = "../../assets/cases/medpets/";
const MP_VID = "../../assets/video/";

const MP_INTRO = [
  "Everything your pet needs, in one place",
  "Medpets is the largest online pet health shop in the Netherlands. Behind one webshop sits a pharmacy, a food aisle and a care department for dogs, cats, horses, rabbits, rodents, birds, fish and reptiles, with more than fifteen thousand products and a veterinary team that answers questions about any of them. Owners order a flea treatment, a prescription diet or a supplement and have it on the mat the next morning. DOLLE made the campaign work that puts that whole world on screen."
];
const MP_BLOKKEN = [
  { kop: "Campaign concept and direction", tekst: "DOLLE developed two campaigns with Medpets, each built around a theme from the shelves. The animals carry the story: they lead the viewer through the house, the garden and the daily routine where a Medpets product actually lands. DOLLE writes the concept, casts the animals and the families around them, and directs on set." },
  { kop: "Campaign production", tekst: "DOLLE films on location with the animals present and working, which asks for a crew that can wait for the shot and a set that stays calm around them. Every campaign is built as one full film with shorter versions per theme, so a single shoot feeds the homepage, the category pages and paid social from the same visual language." },
  { kop: "Brand bumpers", tekst: "DOLLE produces the short openers and closers that frame the campaign. They carry the logo, the tone and the animals, and sit in front of any Medpets message to keep the brand recognisable wherever it runs." }
];
/* Band onder de intro: stills, set en de bumpers door elkaar. */
const MP_BAND = [
  { src: MP + "medpets-still-02-web.jpg", r: 1.5 },
  { src: MP + "medpets-bts-04-web.jpg", r: 2 / 3 },
  { video: MP_VID + "medpets-bumper-16x9.mp4", r: 16 / 9 },
  { src: MP + "medpets-bts-03-web.jpg", r: 1800 / 1414 },
  { src: MP + "medpets-bts-02-web.jpg", r: 1800 / 1249 },
  { video: MP_VID + "medpets-bumper-cat-16x9.mp4", r: 16 / 9 },
  { src: MP + "medpets-bts-01-web.jpg", r: 1.5 }
];
/* Behind the scenes onder de themafilms. */
const MP_BTS = [
  { src: MP + "medpets-bts-05-web.jpg", ratio: "10 / 9", breed: 380, zak: 0, tekst: "Behind the scenes" },
  { src: MP + "medpets-bts-04-web.jpg", ratio: "2 / 3", breed: 240, zak: 16, tekst: "Behind the scenes" },
  { src: MP + "medpets-bts-03-web.jpg", ratio: "9 / 7", breed: 360, zak: -10, tekst: "On set with the animals" },
  { src: MP + "medpets-bts-01-web.jpg", ratio: "3 / 2", breed: 400, zak: 12, tekst: "Behind the scenes" },
  { src: MP + "medpets-bts-02-web.jpg", ratio: "3 / 2", breed: 380, zak: -14, tekst: "Behind the scenes" }
];
/* Voorlopige cijfers, uit de feiten van de case; vervangen zodra er resultaten zijn. */
const MP_DATA = [
  { label: "Products in the shop", waarde: 15, achter: "K+" },
  { label: "Campaigns", waarde: 2 },
  { label: "Animal groups served", waarde: 8 }
];

function MPKop({ dienst, woord }) {
  return (
    <div style={{ display: "grid", gap: "var(--space-6)" }}>
      {window.CMLijn ? <window.CMLijn /> : null}
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", gap: "var(--space-6)", flexWrap: "wrap" }}>
        <MPKicker style={{ display: "block", whiteSpace: "nowrap", color: "var(--text-muted)" }}>{dienst}</MPKicker>
        <span style={{ fontFamily: "var(--font-core)", fontWeight: "var(--weight-heading)", fontSize: "clamp(18px,2.2vw,30px)", letterSpacing: "var(--track-wildly)", textTransform: "uppercase", color: "var(--text-heading)", whiteSpace: "nowrap" }}>Wildly <span style={{ color: "var(--text-accent)" }}>{woord}</span></span>
      </div>
    </div>
  );
}

function CaseMedpets({ go }) {
  const Film = window.CaseFilm;
  const Rij = window.CaseRij;
  const Haarlijn = window.Haarlijn;
  const Laag = window.WXLaag;
  const Kaarten = window.CaseKaarten;
  const [open, setOpen] = React.useState(-1);
  const verwant = ["Eezy", "Woonexpress", "Montel"].map((n) => (window.CASES || []).find((c) => c.klant === n)).filter(Boolean);
  if (!Film || !Laag) return null;
  const sectie = { background: "var(--dolle-navy)", color: "var(--text-body)", padding: "var(--space-6) var(--page-margin)" };
  const binnen = { maxWidth: "var(--content-max)", margin: "0 auto", display: "grid", gap: "var(--space-6)" };
  return (
    <React.Fragment>
      <style>{"@media (max-width:760px){[data-mp-twee]{grid-template-columns:minmax(0,1fr) !important}}"}</style>

      {/* 01 · OPENING: de campagnefilm als lus, logo linksboven weggesneden */}
      {window.CMKop ? (
        <window.CMKop titel="Medpets" tags={["Media production", "Campaign"]} film={MP_VID + "medpets-totaal-16x9.mp4"} start={0.3} eind={9.6} uitsnede={1.16} uitsnedeHoek="rechts" poster={MP + "medpets-totaal-poster-web.jpg"} go={go} Knop={MPButton} Woorden={window.Words || null} Tag={window.DolleTag || MPTag}>
          {window.CMIntro ? <window.CMIntro tekst={MP_INTRO} beeld={window.CMOpeningBeeld ? <window.CMOpeningBeeld modus="groei" ratio="3 / 2" src={MP + "medpets-still-01-web.jpg"} /> : null} /> : null}
        </window.CMKop>
      ) : null}

      {/* BAND */}
      {window.BVBand ? (
        <section className="dolle-dark" style={{ background: "var(--dolle-navy)", padding: "0 var(--page-margin) var(--space-6)" }}>
          <div style={{ maxWidth: "var(--content-max)", margin: "0 auto" }}>
            <window.BVBand items={MP_BAND} hoog="clamp(200px,24vw,340px)" sleep schuif />
          </div>
        </section>
      ) : null}

      {/* 02 · MEDIA PRODUCTION */}
      <section className="dolle-dark" style={sectie}>
        <div style={binnen}>
          <MPKop dienst="MEDIA PRODUCTION" woord="visible" />
          <Laag kop={MP_BLOKKEN[0].kop} tekst={MP_BLOKKEN[0].tekst}>
            <Film bron={MP_VID + "medpets-totaal-16x9.mp4"} poster={MP + "medpets-totaal-poster-web.jpg"} onderschrift="CAMPAIGN FILM · MEDPETS" watch />
          </Laag>
          <Laag kop={MP_BLOKKEN[1].kop} tekst={MP_BLOKKEN[1].tekst}>
            <div data-mp-twee="1" style={{ display: "grid", gridTemplateColumns: "repeat(2,minmax(0,1fr))", gap: "var(--space-3)" }}>
              <Film bron={MP_VID + "medpets-vlooien-en-teken-16x9.mp4"} poster={MP + "medpets-vlooien-en-teken-poster-web.jpg"} onderschrift="FLEAS & TICKS" watch />
              <Film bron={MP_VID + "medpets-voeding-16x9.mp4"} poster={MP + "medpets-voeding-poster-web.jpg"} onderschrift="NUTRITION" watch />
            </div>
            {Kaarten ? <Kaarten items={MP_BTS} tempo={0.5} schuif /> : null}
          </Laag>
          <Laag kop={MP_BLOKKEN[2].kop} tekst={MP_BLOKKEN[2].tekst}>
            <div data-mp-twee="1" style={{ display: "grid", gridTemplateColumns: "repeat(2,minmax(0,1fr))", gap: "var(--space-3)" }}>
              <Film bron={MP_VID + "medpets-bumper-16x9.mp4"} poster={MP + "medpets-bumper-poster-web.jpg"} onderschrift="BUMPER · DOG" watch />
              <Film bron={MP_VID + "medpets-bumper-cat-16x9.mp4"} poster={MP + "medpets-bumper-cat-poster-web.jpg"} onderschrift="BUMPER · CAT" watch />
            </div>
          </Laag>
        </div>
      </section>

      {/* 03 · DELIVERABLES */}
      {window.CMData ? <window.CMData kop="Deliverables" beeld={MP + "medpets-bts-05-web.jpg"} waas={0.42} cijfers={MP_DATA} Tag={window.DolleTag || MPTag} tags={["Campaign films", "Themed versions", "Brand bumpers", "Concept & direction"]} review={{ tekst: "Animals don't take direction, and DOLLE never pretended they would. They built the set around them and waited for the moments that make our customers recognise their own pets. One shoot gave us the full campaign, the themed versions and the bumpers we now put in front of everything we publish.", naam: "Name", rol: "Medpets" }} /> : null}

      {/* 04 · RELATED WORK */}
      <section className="dolle-dark" style={{ background: "var(--dolle-navy)", padding: "var(--space-6) var(--page-margin)" }}>
        <div style={{ maxWidth: "var(--content-max)", margin: "0 auto", display: "grid", gap: "var(--space-4)", gridTemplateColumns: "minmax(0,1fr)" }}>
          <MPKicker style={{ display: "block", whiteSpace: "nowrap", color: "var(--text-muted)" }}>Related work</MPKicker>
          <div style={{ display: "grid", gridTemplateColumns: "minmax(0,1fr)" }}>
            {Rij ? verwant.map((c, i) => <Rij key={c.id} c={c} i={i} go={go} open={open === c.id} onToggle={() => setOpen(open === c.id ? -1 : c.id)} />) : null}
            {Haarlijn ? <Haarlijn /> : null}
          </div>
        </div>
      </section>

      {window.HomeConversie ? <window.HomeConversie go={go} tone="dark" /> : null}
    </React.Fragment>
  );
}

window.CaseMedpets = CaseMedpets;
