const DS = window.DesignSystem_8f95a2;
const { Kicker, Button, Tag, StatFrame, Icon } = DS;
const CornerRule = DS.CornerRule || (({ children }) => children || null);
const IMG = "../../assets/cases/web/";
const EEZY = "../../assets/cases/eezy/";
const BR2 = "../../assets/cases/bluerivet/";
const VID2 = "../../assets/video/";
const PKB_HERO = "../../assets/cases/pietklerkx/pk-still-08-web.jpg";

/* CASES — één lange lijst met opengeklapte cases: naam, kaders, cijfer, tekst en
   een mozaïek van beeld. De lijst staat boven de filters en de vraag sluit af.
   Placeholder-cases: beeld en cijfers zijn voorbeelden. Het systeem claimt
   alleen gemeten resultaat van eigen producties: cijfer + context + periode. */
const CASES = [
  { id: 17, klant: "Landgoed Bergvliet", dienst: "Media production", jaar: "2025", kaders: ["Media production","Growth"], title: "", body: "Production partner to Landgoed Bergvliet. One campaign across two shooting days, covering every part of the estate, built as a content base the estate still runs on.", stat: "", label: "", beeld: "../../assets/cases/bergvliet/bergvliet-aerial-01-web.jpg", zonderBeeld: true, strook: [{ src: "../../assets/cases/bergvliet/bergvliet-aerial-01-web.jpg", ratio: "3 / 2", tekst: "The estate" }, { video: "../../assets/video/bergvliet-band-05.mp4", terug: "../../assets/cases/bergvliet/bergvliet-band-05-poster-web.jpg", ratio: "9 / 16", tekst: "Corporate film" }, { src: "../../assets/cases/bergvliet/bergvliet-spa-01-web.jpg", ratio: "3 / 2", tekst: "Spa One" }, { src: "../../assets/cases/bergvliet/bergvliet-golf-05-web.jpg", ratio: "1 / 1", tekst: "Golf" }, { src: "../../assets/cases/bergvliet/bergvliet-course-05-web.jpg", ratio: "16 / 9", tekst: "The course" }, { src: "../../assets/cases/bergvliet/bergvliet-villas-02-web.jpg", ratio: "3 / 2", tekst: "Villas" }, { src: "../../assets/cases/bergvliet/bergvliet-golf-02-web.jpg", ratio: "2 / 3", tekst: "Golf" }, { src: "../../assets/cases/bergvliet/bergvliet-course-04-web.jpg", ratio: "16 / 9", tekst: "The course" }], mozaiek: ["System overview · 4:5","Template set · 3:2","Weekly output · 9:16"] },
  { id: 1, klant: "Eezy", dienst: "Media production", jaar: "2026", kaders: ["Media production", "Growth"], title: "", body: "TV commercial for Eezy. From a social campaign on accessible digital dentures to a national TV commercial broadcast on NPO 1, 2 and 3.", stat: "", label: "", beeld: EEZY + "eezy-patient-web.jpg", strook: [{ src: EEZY + "eezy-row-06-web.jpg", ratio: "16 / 9", tekst: "Campaign key visual · 16:9" }, { src: EEZY + "eezy-row-02-web.jpg", tekst: "Behind the scenes · 9:16" }, { src: EEZY + "eezy-still-01-web.jpg", tekst: "Campaign visual · 16:9" }, { src: EEZY + "eezy-row-03-web.jpg", tekst: "Behind the scenes · 9:16" }, { src: EEZY + "eezy-row-01-web.jpg", tekst: "Behind the scenes · 3:2" }], mozaiek: ["Campaign key visual · 4:5", "Behind the scenes · 3:2", "Channel cutdown · 9:16"] },
  { id: 2, klant: "Montel", dienst: "Media production", jaar: "2025", kaders: ["Media production"], title: "", body: "Production partner to Montel since 2020, producing national TV commercials, social campaigns, e-learnings and brand culture films.", stat: "", label: "", beeld: "../../assets/cases/montel/ijmuiden-2025/montel-ijmuiden-2025-06-lt.jpg", zonderBeeld: true, strook: [{"src":"../../assets/cases/montel/ijmuiden-2025/montel-ijmuiden-2025-18-lt.jpg","ratio":"4 / 5","tekst":"Social campaign"},{"video":"../../assets/video/social/montel-eindhoven-2025-vader-zoon-16x9.mp4","terug":"../../assets/cases/montel/social/montel-eindhoven-2025-vader-zoon-poster.jpg","tekst":"Eindhoven"},{"src":"../../assets/cases/montel/bts/montel-bts-foto-07-web.jpg","ratio":"9 / 16","tekst":"Behind the scenes"},{"src":"../../assets/cases/montel/ijmuiden-2025/montel-ijmuiden-2025-09-lt.jpg","ratio":"3 / 4","tekst":"IJmuiden"},{"video":"../../assets/video/montel-artfilm-16x9.mp4","trim":"montel-art-cases","start":8,"tekst":"Art film"},{"src":"../../assets/cases/montel/ijmuiden-2025/montel-ijmuiden-2025-22-lt.jpg","ratio":"3 / 4","tekst":"Set photography"}], mozaiek: ["Product still · 4:5", "Set photography · 3:2", "Reel frame · 9:16"] },
  { id: 3, klant: "Nobotel", dienst: "AI systems", jaar: "2026", kaders: ["AI systems", "Growth"], title: "Content that multiplies itself.", body: "A system that turns one production block into new visibility every week, without adding hands.", stat: "6×", label: "Output · per production block", beeld: IMG + "case-05.jpg", mozaiek: ["System overview · 4:5", "Template set · 3:2", "Weekly output · 9:16"] },
  { id: 4, klant: "Derma-pen", dienst: "Growth", jaar: "2025", kaders: ["Growth", "Campaign"], title: "From reach to revenue.", body: "Channels measured, budget moved to where attention was, result recorded against the baseline.", stat: "+41%", label: "Revenue · two quarters", beeld: IMG + "case-02.jpg", mozaiek: ["Dashboard · 4:5", "Campaign still · 3:2", "Ad variant · 9:16"] },
  { id: 5, klant: "Blue Rivet", dienst: "Media production", jaar: "2026", kaders: ["Media production", "Launch"], title: "", body: "Collection campaign in an industrial warehouse in Amsterdam. Brand film, collection film, photography and a full set of social cutdowns.", stat: "1.8M", label: "Views · launch week", beeld: BR2 + "br-shoot-0617-web.jpg", zonderBeeld: true, strook: [{ video: VID2 + "br-brandfilm-1x1.mp4", terug: BR2 + "br-shoot-0614-web.jpg", ratio: "1 / 1", tekst: "Brand film · 1:1" }, { src: BR2 + "br-shoot-0617-web.jpg", tekst: "Campaign" }, { src: BR2 + "br-shoot-0422-web.jpg", ratio: "3 / 2", tekst: "Campaign" }, { src: BR2 + "br-tel-0372-web.jpg", ratio: "1 / 1", tekst: "Behind the scenes" }, { src: BR2 + "br-shoot-0431-web.jpg", ratio: "2 / 3", tekst: "Campaign" }, { video: VID2 + "br-tees-1x1.mp4", terug: BR2 + "br-shoot-0626-web.jpg", tekst: "Tees · 1:1" }, { src: BR2 + "br-shoot-0628-web.jpg", tekst: "Campaign" }, { src: BR2 + "br-shoot-0420-web.jpg", ratio: "3 / 2", tekst: "Campaign" }, { src: BR2 + "br-shoot-0615-web.jpg", ratio: "1 / 1", tekst: "Campaign" }, { src: BR2 + "br-bts-424-web.jpg", tekst: "Behind the scenes" }], mozaiek: ["Film frame · 4:5", "Product detail · 3:2", "Launch teaser · 9:16"] },
  { id: 14, klant: "MSO Group", dienst: "Media production", jaar: "2025", kaders: ["Media production","AI systems","Growth"], title: "MSO Group · Media production.", body: "Production partner to MSO Group since 2024, documenting complete industrial projects on location, filming new innovations and flying certified drone operations in the ports of Rotterdam and Vlissingen.", stat: "", label: "", beeld: "../../assets/cases/mso/mso-gpo-3028-web.jpg", mozaiek: ["Dashboard · 4:5","Campaign still · 3:2","Ad variant · 9:16"], strook: [{ video: "../../assets/video/mso-gpo-film.mp4", terug: "../../assets/cases/mso/mso-gpo-film-poster-web.jpg", ratio: "16 / 9", tekst: "GPO ship · film" }, { src: "../../assets/cases/mso/mso-gpo-2947-web.jpg", tekst: "GPO ship" }, { src: "../../assets/cases/mso/mso-greenport-01-web.jpg", tekst: "Greenport" }, { src: "../../assets/cases/mso/mso-gpo-3014-web.jpg", tekst: "GPO ship" }, { src: "../../assets/cases/mso/mso-greenport-02-web.jpg", tekst: "Greenport" }, { src: "../../assets/cases/mso/mso-gpo-2987-web.jpg", tekst: "GPO ship" }] },
  { id: 6, klant: "Dé Dakwerkers", dienst: "Launches", jaar: "2025", kaders: ["Launch", "Branding"], title: "A new brand in the market.", body: "Positioning, imagery and launch campaign in one track, from name to first lead.", stat: "+220%", label: "Reach · first 90 days", beeld: IMG + "case-06.jpg", mozaiek: ["Identity · 4:5", "Campaign still · 3:2", "Story frame · 9:16"] }
,
  { id: 24, klant: "Veteranen Search Team", dienst: "Media production", jaar: "2025", kaders: ["Media production"], title: "Veteranen Search Team · Brand film.", body: "Brand film for Veteranen Search Team, the volunteer organisation that searches for missing people alongside the police. Every discipline of a search, brought into one film.", stat: "", label: "", beeld: "../../assets/cases/vst/vst-still-02-web.jpg", zonderBeeld: true, strook: [{ src: "../../assets/cases/vst/vst-still-22-web.jpg", ratio: "3 / 2", tekst: "Search line" }, { video: VID2 + "vst-overview-loop.mp4", terug: "../../assets/cases/vst/vst-still-04-web.jpg", ratio: "16 / 9", tekst: "Brand film" }, { src: "../../assets/cases/vst/vst-still-04-web.jpg", ratio: "1 / 1", tekst: "Brand film · still" }, { src: "../../assets/cases/vst/vst-still-05-web.jpg", ratio: "3 / 2", tekst: "Briefing" }, { video: VID2 + "vst-bts-03.mp4", terug: "../../assets/cases/vst/vst-still-20-web.jpg", ratio: "9 / 16", tekst: "Behind the scenes" }, { src: "../../assets/cases/vst/vst-still-16-web.jpg", ratio: "1 / 1", tekst: "Command vehicle" }, { src: "../../assets/cases/vst/vst-still-13-web.jpg", ratio: "2 / 3", tekst: "On the line" }, { src: "../../assets/cases/vst/vst-still-08-web.jpg", ratio: "16 / 9", tekst: "Night search" }], mozaiek: ["Brand film · 16:9","Search still · 3:2","Team still · 4:5"] },
  { id: 7, klant: "Hang Eleven", dienst: "Media production", jaar: "2026", kaders: ["Media production"], title: "Hang Eleven · Store film.", body: "Store film for the opening of Hang Eleven on the Haarlemmerdijk in Amsterdam, shot in one continuous FPV flight, with social cutdowns to announce it.", teaser: "Store film for the opening of Hang Eleven on the Haarlemmerdijk in Amsterdam, shot in one continuous FPV flight, with social cutdowns to announce it.", stat: "", label: "", beeld: "../../assets/cases/hangeleven/hangeleven-store-film-16x9-poster-web.jpg", zonderBeeld: true, strook: [{ src: "../../assets/cases/hangeleven/hangeleven-still-07-web.jpg", ratio: "1 / 1", tekst: "Haarlemmerdijk" }, { video: VID2 + "hangeleven-bts-08.mp4", terug: "../../assets/cases/hangeleven/hangeleven-bts-08-poster-web.jpg", ratio: "2 / 3", tekst: "Behind the scenes" }, { src: "../../assets/cases/hangeleven/hangeleven-still-02-web.jpg", ratio: "3 / 2", tekst: "The store" }, { video: VID2 + "hangeleven-fpv-1x1.mp4", terug: "../../assets/cases/hangeleven/hangeleven-fpv-1x1-poster-web.jpg", ratio: "1 / 1", tekst: "FPV" }, { src: "../../assets/cases/hangeleven/hangeleven-still-06-web.jpg", ratio: "3 / 2", tekst: "Store film · still" }, { src: "../../assets/cases/hangeleven/hangeleven-gevel-web.jpg", ratio: "3 / 2", tekst: "Haarlemmerdijk 93" }], mozaiek: ["Campaign key visual · 4:5","Set photography · 3:2","Reel frame · 9:16"] },
  { id: 8, klant: "OppoSuits", dienst: "Launches", jaar: "2025", kaders: ["Launch","Branding"], title: "OppoSuits · Launches.", body: "Positioning, imagery and launch campaign in one track.", stat: "", label: "", beeld: IMG + "case-02.jpg", mozaiek: ["Identity · 4:5","Launch still · 3:2","Story frame · 9:16"] },
  { id: 10, klant: "Riant Stoutenbeek", dienst: "Growth", jaar: "2026", kaders: ["Growth","Campaign"], title: "Riant Stoutenbeek · Growth.", body: "Channels measured, budget moved to where attention is.", stat: "", label: "", beeld: IMG + "case-04.jpg", mozaiek: ["Dashboard · 4:5","Campaign still · 3:2","Ad variant · 9:16"] },
  { id: 11, klant: "Poorter Hotel", dienst: "Media production", jaar: "2025", kaders: ["Media production","Campaign"], title: "Poorter Hotel · Media production.", body: "Strategic media, produced offline and online.", stat: "", label: "", beeld: IMG + "case-05.jpg", mozaiek: ["Campaign key visual · 4:5","Set photography · 3:2","Reel frame · 9:16"] },
  { id: 13, klant: "NBM", dienst: "AI systems", jaar: "2026", kaders: ["AI systems","Growth"], title: "NBM · AI systems.", body: "A system that turns one production block into weekly visibility.", stat: "", label: "", beeld: IMG + "case-01.jpg", mozaiek: ["System overview · 4:5","Template set · 3:2","Weekly output · 9:16"] },
  { id: 15, klant: "Woonboulevard XXL", dienst: "Media production", jaar: "2024", kaders: ["Media production","Campaign"], title: "Woonboulevard XXL · Media production.", body: "Strategic media, produced offline and online.", stat: "", label: "", beeld: IMG + "case-03.jpg", mozaiek: ["Campaign key visual · 4:5","Set photography · 3:2","Reel frame · 9:16"] },
  { id: 16, klant: "Piet Klerkx", dienst: "Media production", jaar: "2026", kaders: ["Media production"], title: "", body: "Production partner to Piet Klerkx since 2023, producing FPV drone productions, collection campaigns, social campaigns and the company events that run across every location.", stat: "", label: "", beeld: PKB_HERO, zonderBeeld: true, strook: [{ video: VID2 + "pietklerkx-overview-loop.mp4", terug: "../../assets/cases/pietklerkx/pk-still-08-web.jpg", ratio: "1 / 1", tekst: "Commercial" }, { src: "../../assets/cases/pietklerkx/pk-collectie-03-web.jpg", ratio: "16 / 9", tekst: "Collection campaign" }, { video: VID2 + "pietklerkx-monique-02.mp4", terug: "../../assets/cases/pietklerkx/pk-collectie-02-web.jpg", ratio: "9 / 16", tekst: "Monique van der Reijden" }, { src: "../../assets/cases/pietklerkx/pk-still-08-web.jpg", ratio: "3 / 2", tekst: "Store film" }, { src: "../../assets/cases/pietklerkx/pk-kickoff-09-web.jpg", ratio: "3 / 2", tekst: "Company event" }, { video: VID2 + "pietklerkx-reel-bank-1-product.mp4", terug: "../../assets/cases/pietklerkx/pk-collectie-04-web.jpg", ratio: "9 / 16", tekst: "Product reel" }, { video: VID2 + "pietklerkx-gezin-16x9.mp4", terug: "../../assets/cases/pietklerkx/pk-still-05-web.jpg", ratio: "3 / 2", tekst: "Cutdown · family" }, { src: "../../assets/cases/pietklerkx/pk-collectie-04-web.jpg", ratio: "3 / 2", tekst: "Collection campaign" }], mozaiek: ["FPV flight · 16:9","Collection still · 3:2","Social cutdown · 9:16"] },
  { id: 18, klant: "Kiela", dienst: "Media production", jaar: "2024", kaders: ["Launch","Media production","Growth"], title: "", body: "Growing brand visibility with a brand film, product films, brand guidelines and photography, produced for clients around the world.", stat: "", label: "", beeld: "../../assets/cases/kiela/kiela-intro-web.jpg", zonderBeeld: true, strook: [{ video: "../../assets/video/kiela-lasserij-01.mp4", terug: "../../assets/cases/kiela/kiela-still-04-web.jpg", tekst: "Welding" }, { src: "../../assets/cases/kiela/kiela-bts-09-web.jpg", tekst: "Behind the scenes" }, { video: "../../assets/video/kiela-heritage-loop.mp4", terug: "../../assets/cases/kiela/kiela-archief-04.jpg", tekst: "Heritage" }, { src: "../../assets/cases/kiela/kiela-still-11-web.jpg", ratio: "1 / 1", tekst: "Product still" }, { src: "../../assets/cases/kiela/kiela-still-07-web.jpg", tekst: "Craft" }], mozaiek: ["Dashboard · 4:5","Campaign still · 3:2","Ad variant · 9:16"] },
  { id: 19, klant: "Fruit op je Werk", dienst: "Media production", jaar: "2026", kaders: ["Media production","Campaign"], title: "Fruit op je Werk · Media production.", body: "Strategic media, produced offline and online.", stat: "", label: "", beeld: IMG + "case-01.jpg", mozaiek: ["Campaign key visual · 4:5","Set photography · 3:2","Reel frame · 9:16"] },
  { id: 21, klant: "Medpets", dienst: "Media production", jaar: "2024", kaders: ["Media production","Campaign"], title: "", body: "Two campaigns for the largest online pet health shop in the Netherlands, with the animals leading the story.", teaser: "Two campaigns for the largest online pet health shop in the Netherlands, with the animals leading the story.", stat: "", label: "", beeld: "../../assets/cases/medpets/medpets-still-01-web.jpg", zonderBeeld: true, strook: [{ src: "../../assets/cases/medpets/medpets-still-02-web.jpg", ratio: "3 / 2", tekst: "Campaign still" }, { src: "../../assets/cases/medpets/medpets-bts-04-web.jpg", ratio: "2 / 3", tekst: "Behind the scenes" }, { video: "../../assets/video/medpets-bumper-16x9.mp4", terug: "../../assets/cases/medpets/medpets-bumper-poster-web.jpg", ratio: "16 / 9", tekst: "Brand bumper" }, { src: "../../assets/cases/medpets/medpets-bts-03-web.jpg", ratio: "9 / 7", tekst: "On set" }], mozaiek: ["Campaign still · 3:2","Behind the scenes · 2:3","Bumper · 16:9"] },
  { id: 22, klant: "Orange Aerospace", dienst: "Growth", jaar: "2026", kaders: ["Growth","Campaign"], title: "Orange Aerospace · Growth.", body: "Channels measured, budget moved to where attention is.", stat: "", label: "", beeld: IMG + "case-04.jpg", mozaiek: ["Dashboard · 4:5","Campaign still · 3:2","Ad variant · 9:16"] },
  { id: 25, klant: "Woonexpress", dienst: "Media production", jaar: "2026", kaders: ["Media production","Growth","Launches"], title: "", body: "Production partner to Woonexpress since 2022, producing seasonal campaigns, collection shoots, studio and social content, and the company events that bring every store together.", stat: "", label: "", beeld: "../../assets/cases/woonexpress/woonexpress-still-03-web.jpg", zonderBeeld: true, strook: [{"src":"../../assets/cases/woonexpress/woonexpress-still-03-web.jpg","ratio":"16 / 9","tekst":"Sofa campaign"},{"video":"../../assets/video/woonexpress-tafel-1-9x16.mp4","terug":"../../assets/cases/woonexpress/woonexpress-tafel-1-9x16-poster-web.jpg","ratio":"1 / 1","tekst":"Dining table campaign"},{"src":"../../assets/cases/woonexpress/woonexpress-zomer-bank-02-web.jpg","ratio":"9 / 16","tekst":"Summer shoot"},{"src":"../../assets/cases/woonexpress/woonexpress-winkel-decoratie-02-web.jpg","ratio":"9 / 16","tekst":"Store photography"},{"src":"../../assets/cases/woonexpress/woonexpress-zomer-eettafel-03-web.jpg","ratio":"3 / 2","tekst":"Summer shoot"},{"src":"../../assets/cases/woonexpress/woonexpress-still-01-web.jpg","ratio":"1 / 1","tekst":"Sofa campaign"},{"src":"../../assets/cases/woonexpress/woonexpress-bts-foto-10-web.jpg","ratio":"3 / 4","tekst":"Behind the scenes"}], mozaiek: ["Sofa campaign","Store photography","Behind the scenes"] },
  { id: 26, klant: "De Beer Accountants", dienst: "Growth", jaar: "2025", kaders: ["Growth","Campaign"], title: "De Beer Accountants · Growth.", body: "Channels measured, budget moved to where attention is.", stat: "", label: "", beeld: IMG + "case-02.jpg", mozaiek: ["Dashboard · 4:5","Campaign still · 3:2","Ad variant · 9:16"] },
  { id: 27, klant: "Dalton Medical", dienst: "Media production", jaar: "2024", kaders: ["Media production","Campaign"], title: "Dalton Medical · Media production.", body: "Strategic media, produced offline and online.", stat: "", label: "", beeld: IMG + "case-03.jpg", mozaiek: ["Campaign key visual · 4:5","Set photography · 3:2","Reel frame · 9:16"] },
  { id: 28, klant: "Bulsink", dienst: "Launches", jaar: "2026", kaders: ["Launch","Branding"], title: "Bulsink · Launches.", body: "Positioning, imagery and launch campaign in one track.", stat: "", label: "", beeld: IMG + "case-04.jpg", mozaiek: ["Identity · 4:5","Launch still · 3:2","Story frame · 9:16"] },
  { id: 29, klant: "Parformance", dienst: "AI systems", jaar: "2025", kaders: ["AI systems","Growth"], title: "Parformance · AI systems.", body: "A system that turns one production block into weekly visibility.", stat: "", label: "", beeld: IMG + "case-05.jpg", mozaiek: ["System overview · 4:5","Template set · 3:2","Weekly output · 9:16"] },
  { id: 31, klant: "Enzo Luca", dienst: "Media production", jaar: "2026", kaders: ["Media production","Campaign"], title: "Enzo Luca · Media production.", body: "Strategic media, produced offline and online.", stat: "", label: "", beeld: IMG + "case-01.jpg", mozaiek: ["Campaign key visual · 4:5","Set photography · 3:2","Reel frame · 9:16"] }
];
/* Dezelfde volgorde als op de homepage: die reeks gaat voorop, de rest volgt
   erachter in de bestaande orde. */
const HOME_ORDE = ["Montel", "Kiela", "Landgoed Bergvliet", "Eezy", "Blue Rivet", "Woonexpress", "MSO Group", "Veteranen Search Team", "Hang Eleven", "Piet Klerkx", "Medpets", "Poorter Hotel", "Riant Stoutenbeek", "Dé Dakwerkers", "De Beer Accountants", "Enzo Luca", "Orange Aerospace", "OppoSuits", "Parformance", "Derma-pen", "Dalton Medical", "Fruit op je Werk", "Nobotel", "NBM", "Woonboulevard XXL", "Bulsink"];
CASES.sort((a, b) => {
  const ia = HOME_ORDE.indexOf(a.klant), ib = HOME_ORDE.indexOf(b.klant);
  if (ia > -1 && ib > -1) return ia - ib;
  if (ia > -1) return -1;
  if (ib > -1) return 1;
  return 0;
});
const FILTERS = ["All cases", "Media production", "Launches", "AI systems", "Growth"];

/* Filter met dezelfde beweging als de navigatie: de hairline loopt van links
   in bij hover en blijft staan op de gekozen filter. */
function CaseFilter({ label, active, onClick }) {
  const [hover, setHover] = React.useState(false);
  return (
    <button type="button" onClick={onClick} aria-pressed={active}
      onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)}
      style={{ position: "relative", appearance: "none", background: "none", border: 0, padding: "0 0 6px", cursor: "pointer",
        fontFamily: "var(--font-label)", fontSize: "11px", fontWeight: active ? 700 : 500, letterSpacing: "var(--track-label-wide)", textTransform: "uppercase", whiteSpace: "nowrap",
        color: active || hover ? "var(--text-heading)" : "var(--text-muted)", transition: "color var(--dur-ui) var(--ease-dolle)" }}>
      {label}
      <span aria-hidden="true" style={{ position: "absolute", left: 0, right: 0, bottom: 0, height: 1, background: "var(--text-heading)", transformOrigin: "left center", transform: active || hover ? "scaleX(1)" : "scaleX(0)", transition: "transform var(--dur-frame) var(--ease-dolle)" }} />
    </button>
  );
}

/* KOP — gecentreerd, zoals de referentie: haakjes-kicker, één grote regel, de
   kaders eronder als knoppen, en daaronder een breed beeld dat de pagina opent. */
function CasesHero({ go }) {
  return (
    <section className="dolle-dark" style={{ background: "var(--dolle-navy)", padding: "clamp(88px,12vh,150px) var(--page-margin) clamp(24px,3.5vh,44px)" }}>
      <div style={{ maxWidth: "var(--content-max)", margin: "0 auto", display: "grid", gap: "var(--space-7)", justifyItems: "start", textAlign: "left" }}>
        <div style={{ display: "grid", justifyItems: "start" }}>
          <Words as="h1" text="What falls inside the frame" accent="inside" delay={120} style={{ margin: 0, fontSize: "clamp(26px,3.2vw,52px)", lineHeight: 1.04, letterSpacing: "var(--track-heading)" }} />
          <Words as="span" text="becomes the story." delay={320} style={{ display: "block", fontFamily: "var(--font-core)", fontWeight: "var(--weight-heading)", fontSize: "clamp(26px,3.2vw,52px)", lineHeight: 1.04, letterSpacing: "var(--track-heading)", color: "var(--text-heading)", paddingBottom: "0.06em" }} />
        </div>
      </div>
    </section>
  );
}

/* De view-schakel is het merkhaakje zelf, met dezelfde beweging als de knoppen:
   dicht liggen de twee haken als schakelblok tegen elkaar, bij hover reizen ze
   naar de tegenoverliggende hoeken, draaien 90 graden en kaderen het woord dat
   ertussen komt te staan. */
/* Eén doorlopende beeldstrook die van klein naar groot rekt: dezelfde tegels
   komen bij het openklappen naar voren (hoogte groeit, breedte volgt de
   verhouding, onderschrift schuift open) en bij sluiten precies terug. Eén
   curve, geen stapeling van losse overgangen. */
const VLOEI = "1100ms cubic-bezier(.16,.84,.24,1)";

/* Wit vlak met kobalt letters; bij hover keert het om naar kobalt met wit. */
function WitteKnop({ children, onClick, tabIndex }) {
  const [over, setOver] = React.useState(false);
  /* De hover zit op de omhulling, zodat de knop zijn eigen haakjesanimatie
     houdt; alleen de kleuren keren om. */
  return (
    <span onMouseEnter={() => setOver(true)} onMouseLeave={() => setOver(false)} onFocus={() => setOver(true)} onBlur={() => setOver(false)} style={{ display: "inline-flex" }}>
      <Button size="sm" variant="secondary" tabIndex={tabIndex} onClick={onClick}
        style={{ background: over ? "var(--text-accent)" : "var(--dolle-white)", color: over ? "var(--dolle-white)" : "var(--dolle-navy)", borderColor: over ? "var(--text-accent)" : "var(--dolle-white)", transition: "background 240ms var(--ease-dolle), color 240ms var(--ease-dolle), border-color 240ms var(--ease-dolle)" }}>{children}</Button>
    </span>
  );
}
function RijBeeld({ c, open, hover, onSleep, groot }) {
  const spoor = React.useRef(null);
  /* Is er een mediakeuze bewaard voor deze case, dan bepaalt die de tegels. */
  const extra = c.strook || [];
  /* Vaste opbouw: eerst het hoofdbeeld, daarna elk extra beeld in een eigen
     verhouding. Zo kan een case meer dan vier tegels hebben. */
  const maten = ["3 / 2", "4 / 5", "9 / 16", "3 / 4", "3 / 2", "4 / 5"];
  const tegels = (c.zonderBeeld ? [] : [{ src: c.beeld, ratio: "3 / 4", tekst: c.klant + " · " + c.dienst }])
    .concat((extra.length ? extra : [undefined, undefined, undefined]).map((e, i) => {
      const src = e && e.src ? e.src : e;
      const video = e && e.video ? e.video : null;
      const vast = e && e.ratio ? e.ratio : null;
      const eigen = e && e.tekst ? e.tekst : null;
      return { src: src, video: video, vast: vast, terug: e && e.terug, trim: e && e.trim, start: e && e.start, eind: e && e.eind, label: eigen || c.mozaiek[i % c.mozaiek.length], ratio: maten[i % maten.length], tekst: eigen || c.mozaiek[i % c.mozaiek.length] };
    }));
  React.useEffect(() => {
    const el = spoor.current;
    if (!el) return;
    let neer = false, x0 = 0, l0 = 0;
    const down = (e) => { neer = true; x0 = e.clientX; l0 = el.scrollLeft; if (el.setPointerCapture) el.setPointerCapture(e.pointerId); };
    const move = (e) => {
      if (!neer) return;
      const d = e.clientX - x0;
      if (Math.abs(d) > 4 && onSleep) onSleep();
      el.scrollLeft = l0 - d;
    };
    const up = (e) => { neer = false; if (e && el.releasePointerCapture && e.pointerId != null && el.hasPointerCapture && el.hasPointerCapture(e.pointerId)) el.releasePointerCapture(e.pointerId); };
    el.addEventListener("pointerdown", down);
    el.addEventListener("pointermove", move);
    el.addEventListener("pointerup", up);
    el.addEventListener("pointerleave", up);
    return () => { el.removeEventListener("pointerdown", down); el.removeEventListener("pointermove", move); el.removeEventListener("pointerup", up); el.removeEventListener("pointerleave", up); };
  }, [onSleep]);
  const hoog = open ? (groot ? "clamp(300px,54vh,600px)" : "clamp(230px,32vh,400px)") : "clamp(112px,12.5vw,168px)";
  /* Kleine wenk rechts dat de strook verder loopt; verdwijnt aan het eind. */
  const [meer, setMeer] = React.useState(true);
  React.useEffect(() => {
    const el = spoor.current;
    if (!el) return;
    const kijk = () => setMeer(el.scrollLeft + el.clientWidth < el.scrollWidth - 8);
    kijk();
    el.addEventListener("scroll", kijk, { passive: true });
    return () => el.removeEventListener("scroll", kijk);
  }, [open]);
  return (
    <div style={{ position: "relative", minWidth: 0 }}>
    <span onClick={(e) => { e.stopPropagation(); const el = spoor.current; if (el) el.scrollBy({ left: Math.round(el.clientWidth * 0.8), behavior: "smooth" }); }} style={{ position: "absolute", top: 0, right: 0, height: hoog, cursor: open && meer ? "pointer" : "default", pointerEvents: open && meer ? "auto" : "none", width: "clamp(60px,7vw,104px)", display: "flex", alignItems: "center", justifyContent: "flex-end", background: "linear-gradient(to right, rgba(16,31,60,0) 0%, rgba(16,31,60,0.88) 72%)", opacity: open && meer ? 1 : 0, transition: "opacity 420ms var(--ease-dolle)", zIndex: 3 }}>
      <span style={{ display: "flex", alignItems: "center", gap: "6px", padding: "6px 10px", borderRadius: 4, border: "1px solid var(--white-24, rgba(255,255,255,0.24))", background: "rgba(16,31,60,0.72)" }}>
        <Kicker size="sm" style={{ color: "var(--dolle-white)", whiteSpace: "nowrap" }}>Scroll</Kicker>
        <span style={{ color: "var(--dolle-white)", fontSize: "12px", lineHeight: 1 }}>&rarr;</span>
      </span>
    </span>
    <div ref={spoor}
      style={{ display: "flex", gap: open ? "var(--space-3)" : "6px", alignItems: "start", width: "100%", minWidth: 0, overflowX: open ? "auto" : "hidden", scrollbarWidth: "none", msOverflowStyle: "none", cursor: "grab", touchAction: "pan-y", transition: "gap " + VLOEI }}>
      {tegels.map((t, i) => (
        <div key={i} style={{ flex: "0 0 auto", display: "block", "--d": (i % tegels.length) * 0.07,
          opacity: "clamp(0, calc((var(--r, 1) - var(--d)) * 3), 1)",
          transform: "translate3d(calc((1 - clamp(0, calc((var(--r, 1) - var(--d)) * 2.2), 1)) * -64px), 0, 0)",
          transition: "none", willChange: "transform, opacity" }}>
          {/* Het beeld bepaalt de breedte: vaste hoogte, breedte volgt de eigen
             verhouding van de foto, dus er wordt niets afgesneden. */}
          <div style={{ position: "relative", height: hoog, aspectRatio: (t.src || t.video) ? (t.vast || undefined) : t.ratio, overflow: "hidden", background: "#0b1730", border: "1px solid var(--white-16, rgba(255,255,255,0.16))", transition: "height " + VLOEI }}>
            {t.video
              ? <video src={t.video} poster={t.terug || undefined} autoPlay muted loop playsInline preload={t.trim ? "auto" : "metadata"} draggable="false"
                  ref={(el) => {
                    if (!el) return;
                    el.muted = true; el.defaultMuted = true; el.volume = 0;
                    /* Autoplay zelf afdwingen: muted wordt pas na het aanmaken gezet,
                       dus de browser kan het autoplay-attribuut al hebben geweigerd. */
                    if (!el.dataset.speelAan) {
                      el.dataset.speelAan = "1";
                      const speel = () => { if (el.paused && el.dataset.spaar !== "1") el.play().catch(() => {}); };
                      el.addEventListener("loadeddata", speel);
                      el.addEventListener("canplay", speel);
                      speel();
                    }
                    if (!t.trim || el.dataset.trimAan) return;
                    el.dataset.trimAan = "1";
                    /* Vaste stand uit de tegel; de trimpagina kan die overschrijven. */
                    let q = t.start != null ? { start: t.start, eind: t.eind != null ? t.eind : null } : null;
                    try { const b = JSON.parse(window.localStorage.getItem("dolle-trim-" + t.trim)); if (b && b.start != null) q = b; } catch (e) {}
                    if (!q || q.start == null) return;
                    const zet = () => { if (el.currentTime < q.start - 0.1) el.currentTime = q.start; };
                    /* Ook na het eigen loop-punt terug naar het startpunt. */
                    const tik = () => {
                      if (q.eind != null && q.eind < (el.duration || 1e9) && el.currentTime >= q.eind) { el.currentTime = q.start; return; }
                      if (el.currentTime < q.start - 0.25) el.currentTime = q.start;
                    };
                    el.addEventListener("loadedmetadata", zet);
                    el.addEventListener("timeupdate", tik);
                    el.addEventListener("seeked", zet);
                    if (el.readyState >= 1) el.currentTime = q.start;
                  }}
                  style={{ display: "block", height: "100%", width: "100%", objectFit: "cover", opacity: open || hover ? 1 : 0.82, transition: "opacity var(--dur-frame) var(--ease-dolle)" }} />
              : t.src ? <img src={t.src} alt="" draggable="false" loading="lazy" decoding="async" style={{ display: "block", height: "100%", width: t.vast ? "100%" : "auto", objectFit: t.vast ? "cover" : "contain", opacity: open || hover ? 1 : 0.82, transition: "opacity var(--dur-frame) var(--ease-dolle)" }} />
              : <span className="dolle-data" style={{ position: "absolute", inset: 0, display: "grid", placeItems: "center", textAlign: "center", padding: "var(--space-3)", color: "var(--white-48)", fontSize: open ? "10px" : "9px", letterSpacing: "var(--track-label-wide)", transition: "font-size " + VLOEI }}>{t.label}</span>}
          </div>
          <span style={{ display: "block", position: "relative", width: 0, minWidth: "100%", overflow: "hidden", maxHeight: open ? "72px" : "0px", opacity: open ? 1 : 0, transition: "max-height " + VLOEI + ", opacity 620ms var(--ease-dolle)" }}>
            <Kicker size="sm" style={{ display: "block", paddingTop: "var(--space-3)", color: "var(--text-muted)", whiteSpace: open ? "normal" : "nowrap" }}>{t.tekst}</Kicker>
          </span>
        </div>
      ))}
    </div>
    </div>
  );
}

/* Eén scrollteller voor alle lijnen en rijen: elke lijn schrijft zich in en
   krijgt per frame zijn stand. Zo staan er geen dertig losse scrollluisteraars
   op de pagina, wat het slepen en openklappen merkbaar vlot houdt. */
const TELLER = (() => {
  const leden = new Set();
  let raf = 0;
  const kijk = () => { raf = 0; const vh = window.innerHeight || 800; leden.forEach((f) => f(vh)); };
  const on = () => { if (!raf) raf = requestAnimationFrame(kijk); };
  if (typeof window !== "undefined") {
    window.addEventListener("scroll", on, { passive: true });
    window.addEventListener("resize", on);
    /* De pagina schuift nog na terwijl beeld en letters binnenkomen. Zonder
       deze extra tikken blijft een rij die pas daardoor in beeld komt op stand
       0 staan tot de bezoeker scrollt. */
    window.addEventListener("load", on);
    if (document.fonts && document.fonts.ready) document.fonts.ready.then(on).catch(() => {});
    [120, 400, 900, 1600].forEach((ms) => setTimeout(on, ms));
  }
  /* Bij registratie een paar tikken na elkaar: de route mount vóór de scroll
     naar boven en vóór de layout van beeld en letters, dus de eerste meting
     alleen is niet genoeg. */
  return {
    aan(f) {
      leden.add(f);
      on();
      requestAnimationFrame(on);
      const klokken = [60, 200, 600, 1200].map((ms) => setTimeout(on, ms));
      return () => { leden.delete(f); klokken.forEach(clearTimeout); };
    },
    tik: on
  };
})();

/* De haarlijn loopt mee met de scroll: de stand komt rechtstreeks uit de
   scrollpositie (1:1, geen klok en geen drempel) en wordt als --p op de lijn
   geschreven. Daardoor vult hij door terwijl je scrollt in plaats van in één
   keer aan te springen. Hij houdt zijn hoogste stand vast, dus terugscrollen
   rolt hem niet weer uit. */
function Haarlijn({ vol }) {
  const el = React.useRef(null);
  const vloer = React.useRef(0);
  React.useEffect(() => {
    const lijn = el.current && el.current.firstChild;
    if (!lijn) return;
    if (window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches) { lijn.style.setProperty("--p", 1); return; }
    /* De diepste stand die de onderkant van het beeld ooit bereikte, in
       documentcoördinaten. Zo is de vulling ongevoelig voor layoutverschuivingen
       (beeld dat inlaadt, rijen die openklappen) én blijft hij staan bij
       terugscrollen — de lijnen vullen altijd van boven naar onder. */
    let diepst = 0;
    return TELLER.aan((vh) => {
      if (!el.current) return;
      const sy = window.scrollY || window.pageYOffset || 0;
      const docTop = el.current.getBoundingClientRect().top + sy;
      const rand = sy + vh * 0.8;
      if (rand > diepst) diepst = rand;
      /* Later dan de rij: eerst komen de tegels en de tekst, daarna trekt de
         lijn zich vol terwijl je doorscrollt. */
      let p = Math.max(0, Math.min(1, (diepst - docTop) / (vh * 0.34)));
      if (vloer.current > p) p = vloer.current;
      /* Vergelijken met wat er écht op het element staat: een re-render kan de
         stand hebben teruggezet, en dan moet hij hersteld worden. */
      const nu = parseFloat(lijn.style.getPropertyValue("--p"));
      if (!(Math.abs((nu || 0) - p) < 0.003)) lijn.style.setProperty("--p", p);
    });
  }, []);
  /* Klikken op de rij maakt de lijn af: ook als de scroll hem nog niet had
     volgetrokken loopt hij nu in één beweging door naar vol. */
  React.useEffect(() => {
    const lijn = el.current && el.current.firstChild;
    if (!vol || !lijn) return;
    vloer.current = 1;
    lijn.style.setProperty("--p", 1);
    TELLER.tik();
  }, [vol]);
  return (
    <div ref={el} style={{ height: 1, overflow: "hidden", marginRight: "calc(var(--page-margin) * -1)", marginLeft: "calc(var(--page-margin) * -1)", background: "var(--white-16, rgba(255,255,255,0.12))" }}>
      <div ref={(n) => { if (n && !n.style.getPropertyValue("--p")) n.style.setProperty("--p", 0); }}
        style={{ height: 1, background: "var(--white-24, rgba(255,255,255,0.24))", transformOrigin: "left center", transform: "scaleX(var(--p, 0))", transition: vol ? "transform 700ms cubic-bezier(.16,.84,.24,1)" : "none", willChange: "transform" }} />
    </div>
  );
}

/* De rij geeft alleen de scrollstand door als --r. Wat daarmee beweegt staat in
   de rij zelf: de tegels schuiven van links binnen, de tekst komt achter een
   masker omhoog, en de haarlijn vult mee. Geen fade over de hele subboom. */
function RijOpkomst({ children, vast }) {
  const el = React.useRef(null);
  React.useEffect(() => {
    const doel = el.current;
    if (!doel) return;
    if (vast) { doel.style.setProperty("--r", 1); return; }
    if (window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches) { doel.style.setProperty("--r", 1); return; }
    let diepst = 0;
    return TELLER.aan((vh) => {
      const sy = window.scrollY || window.pageYOffset || 0;
      const docTop = doel.getBoundingClientRect().top + sy;
      const rand = sy + vh * 0.96;
      if (rand > diepst) diepst = rand;
      const p = Math.max(0, Math.min(1, (diepst - docTop) / (vh * 0.3)));
      const nu = parseFloat(doel.style.getPropertyValue("--r"));
      if (!(Math.abs((nu || 0) - p) < 0.003)) doel.style.setProperty("--r", p);
    });
  }, []);
  return (
    <div ref={(n) => { el.current = n; if (n && !n.style.getPropertyValue("--r")) n.style.setProperty("--r", vast ? 1 : 0); }}
      style={{ display: "grid", gridTemplateColumns: "minmax(0,1fr)", minWidth: 0 }}>
      {children}
    </div>
  );
}

/* Uitgeklapte campagne als eigen pagina in de rij. Boven: tekst naast de
   compilatie (speelt stil, met geluidsknop). Daaronder twee uitklapbare kopjes
   met een voorproef van de films, dan een band met stills. Een vaste Close-knop
   blijft in beeld zolang de campagne open staat. */
function RasterGeluid({ video }) {
  const [stil, setStil] = React.useState(true);
  const zet = (e) => { e.stopPropagation(); const el = video.current; if (!el) return; el.muted = !el.muted; setStil(el.muted); if (el.paused) el.play().catch(() => {}); };
  return (
    <button type="button" onClick={zet} aria-label={stil ? "Sound on" : "Sound off"} style={{ position: "absolute", left: "var(--space-4)", bottom: "var(--space-4)", appearance: "none", width: 36, height: 36, display: "grid", placeItems: "center", background: "rgba(8,18,40,0.55)", border: 0, borderRadius: 999, color: "var(--dolle-white)", cursor: "pointer" }}>
      <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true"><path d="M4 9h4l5-4v14l-5-4H4z" fill="currentColor" stroke="none" />{stil ? <path d="M17 9l5 6M22 9l-5 6" /> : <path d="M16.5 8.5a5 5 0 0 1 0 7M19 6a8.5 8.5 0 0 1 0 12" />}</svg>
    </button>
  );
}
/* Kopje met films, zoals de deelfilms bij Woonexpress: op zijn plek blijven
   staan, de film die speelt groeit in de rij en de rest schuift in. Per rij
   hooguit vier films. */
function RasterKopje({ kop, items, aan, onWissel }) {
  /* Zelfde beweging als de uitklapblokken bij Woonexpress: hoogte, fade en een
     korte schuif omhoog in één curve. De films blijven na de eerste keer staan,
     zodat in- en uitklappen nooit verspringt. */
  const VL = "1300ms cubic-bezier(.45,0,.2,1)";
  const Deel = window.BVDeelfilms;
  const [gezien, setGezien] = React.useState(aan);
  React.useEffect(() => { if (aan) setGezien(true); }, [aan]);
  if (!items.length) return null;
  const films = items.map((x) => ({ film: x.video, poster: x.terug, naam: x.tekst || "", kader: "16 / 9" }));
  const rijen = [];
  for (let i = 0; i < films.length; i += 4) rijen.push(films.slice(i, i + 4));
  return (
    <div style={{ borderTop: "1px solid var(--white-24, rgba(255,255,255,0.24))" }}>
      <button type="button" onClick={onWissel} aria-expanded={aan}
        style={{ appearance: "none", background: "none", border: 0, width: "100%", display: "grid", gridTemplateColumns: "minmax(0,1fr) auto auto", gap: "var(--space-4)", alignItems: "center", padding: "var(--space-4) 0", cursor: "pointer", color: "var(--text-heading)", textAlign: "left" }}>
        <span style={{ fontFamily: "var(--font-core)", fontWeight: "var(--weight-heading)", fontSize: "clamp(17px,1.5vw,22px)", letterSpacing: "var(--track-heading)" }}>{kop}</span>
        <span style={{ display: "flex", gap: 4, opacity: aan ? 0 : 1, transition: "opacity 500ms ease" }}>
          {items.slice(0, 5).map((x, i) => <img key={i} src={x.terug} alt="" loading="lazy" style={{ width: 64, aspectRatio: "16 / 9", objectFit: "cover", borderRadius: 3, display: "block" }} />)}
        </span>
        <span aria-hidden="true" style={{ width: 28, height: 28, display: "grid", placeItems: "center", transform: aan ? "rotate(45deg)" : "none", transition: "transform " + VL }}>
          <svg viewBox="0 0 24 24" width="18" height="18" stroke="currentColor" strokeWidth="1.5"><path d="M12 4v16M4 12h16" /></svg>
        </span>
      </button>
      <div style={{ display: "grid", gridTemplateRows: aan ? "1fr" : "0fr", transition: "grid-template-rows " + VL }}>
        <div style={{ overflow: "hidden", minHeight: 0 }}>
          <div style={{ display: "grid", gap: "var(--space-4)", paddingBottom: "var(--space-5)", opacity: aan ? 1 : 0, transform: aan ? "translate3d(0,0,0)" : "translate3d(0,24px,0)", transition: "opacity " + (aan ? "900ms ease 250ms" : "450ms ease") + ", transform " + VL }}>
            {gezien && Deel ? rijen.map((r, n) => (
              <div key={n} style={{ width: r.length < 4 && rijen.length > 1 ? "calc(" + r.length + " / 4 * 100%)" : "100%" }}>
                <Deel films={r} groot={1.9} klein={0.75} watchHover vloei="900ms cubic-bezier(.45,0,.2,1)" />
              </div>
            )) : null}
          </div>
        </div>
      </div>
    </div>
  );
}
function RijRaster({ c, open, onClose }) {
  const groepen = c.raster;
  const g = (k) => (groepen.find((x) => x.kop === k) || {}).items || [];
  const hero = g("Hero")[0];
  const v = React.useRef(null);
  const wrap = React.useRef(null);
  const [kopje, setKopje] = React.useState(-1);
  const wissel = (n) => setKopje((k) => (k === n ? -1 : n));
  const sluit = (e) => {
    e.stopPropagation();
    const r = wrap.current ? wrap.current.getBoundingClientRect() : null;
    onClose();
    if (r && r.top < 0) window.scrollBy({ top: r.top - 160, behavior: "smooth" });
  };
  const tel = [g("With models").length + " films with models", g("Product films").length + " product films"].join(" · ");
  const zacht = (n) => ({ opacity: open ? 1 : 0, transform: open ? "none" : "translateY(18px)", transition: open ? "opacity 800ms ease " + (150 + n * 140) + "ms, transform 1000ms cubic-bezier(.22,.8,.24,1) " + (150 + n * 140) + "ms" : "opacity 500ms ease, transform 1100ms cubic-bezier(.65,0,.25,1)" });
  return (
    <div ref={wrap} onClick={(e) => e.stopPropagation()} style={{ position: "relative", display: "grid", gap: "var(--space-6)", paddingRight: "var(--page-margin)", cursor: "default" }}>
      <style>{"@media (max-width:820px){[data-raster-hero]{grid-template-columns:minmax(0,1fr)!important}}"}</style>
      <div data-raster-hero="1" style={{ ...zacht(0), position: "relative", display: "grid", gridTemplateColumns: "minmax(0,1fr)", paddingTop: 0 }}>
        {hero ? (
          <div style={{ position: "relative", width: "min(100%, calc(70vh * 16 / 9))", justifySelf: "start", aspectRatio: "16 / 9", overflow: "hidden", borderRadius: 5, background: "#0b1730" }}>
            <video ref={v} src={hero.video} poster={hero.terug} autoPlay={open} muted loop playsInline preload="auto" style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover" }} />
            <RasterGeluid video={v} />
          </div>
        ) : null}
      </div>
      <div style={{ ...zacht(1), display: "grid" }}>
        <RasterKopje kop="Films with models" items={g("With models")} aan={kopje === 0} onWissel={() => wissel(0)} />
        <RasterKopje kop="Product films" items={g("Product films")} aan={kopje === 1} onWissel={() => wissel(1)} />
        <div style={{ height: 1, background: "var(--white-24, rgba(255,255,255,0.24))" }} />
      </div>
      {/* Sluitknop: wit vlak onderin beeld, plakt zolang de campagne zichtbaar is. */}
      <div style={{ position: "sticky", bottom: "var(--space-5)", zIndex: 6, display: "flex", justifyContent: "center", pointerEvents: "none", marginTop: "calc(var(--space-4) * -1)" }}>
        <span style={{ pointerEvents: "auto", filter: "drop-shadow(0 6px 18px rgba(8,18,40,0.45))" }}>
          <WitteKnop onClick={sluit}>{"Close " + c.klant}</WitteKnop>
        </span>
      </div>
    </div>
  );
}

/* spiegel: beeldstrook links en tekst rechts in rust (casepagina's). geenKnop: zonder View case. */
function CaseRij({ c, i, go, open, onToggle, spiegel, geenKnop, groot }) {
  const [hover, setHover] = React.useState(false);
  const sleep = React.useRef(false);
  const naar = (ev) => { ev.stopPropagation(); window.DOLLE_CASE = c.id; go("case"); };
  const tik = () => { if (sleep.current) { sleep.current = false; return; } onToggle(); };
  /* De campagne blijft na sluiten nog even staan, zodat hij rustig kan inklappen. */
  const RVL = VLOEI;
  const [toon, setToon] = React.useState(open);
  const [kopH, setKopH] = React.useState(240);
  React.useEffect(() => { if (open) { setToon(true); return; } const t = setTimeout(() => setToon(false), 1150); return () => clearTimeout(t); }, [open]);
  const rust = "cubic-bezier(.22,.61,.24,1)";
  /* De strook is in rust hoger dan de kop. Meten dus: de strook wordt met de
     kophoogte omhoog getrokken (dan begint hij bovenaan de rij) en de kop zakt
     naar het midden van de strook. Zo bepaalt de strook de rijhoogte en wordt er
     niets afgesneden. */
  const kopRef = React.useRef(null);
  const strookRef = React.useRef(null);
  const kolomRef = React.useRef(null);
  const rijRef = React.useRef(null);
  const [maat, setMaat] = React.useState({ kop: 0, strook: 0, kolom: 0 });
  const openRef = React.useRef(open); openRef.current = open;
  const knopRef = React.useRef(null);
  React.useLayoutEffect(() => {
    const meet = () => {
      if (!kopRef.current || !strookRef.current) return;
      /* De gesloten strook begint exact waar de derde kolom begint, nooit over
         de schakel heen: die grens meten we in plaats van hem te schatten. */
      let kolom = 0;
      if (spiegel && openRef.current) { setMaat((m) => ({ ...m, kop: kopRef.current.offsetHeight, strook: strookRef.current.offsetHeight })); return; }
      if (kolomRef.current && rijRef.current) {
        const k = kolomRef.current.getBoundingClientRect(), rr = rijRef.current.getBoundingClientRect();
        /* Gespiegeld: de strook eindigt een kolomgat vóór de schakel; die staat direct vast. */
        const kb = knopRef.current ? knopRef.current.getBoundingClientRect() : k;
        const gat = parseFloat(getComputedStyle(kopRef.current).columnGap) || 0;
        kolom = Math.max(0, Math.round(spiegel ? rr.right - (kb.left - gat) : k.left - rr.left));
      }
      setMaat({ kop: kopRef.current.offsetHeight, strook: strookRef.current.offsetHeight, kolom: kolom });
    };
    meet();
    if (typeof ResizeObserver === "undefined") return;
    const ro = new ResizeObserver(meet);
    if (rijRef.current) ro.observe(rijRef.current);
    if (kopRef.current) ro.observe(kopRef.current);
    if (strookRef.current) ro.observe(strookRef.current);
    return () => ro.disconnect();
  }, []);
  /* Na sluiten opnieuw meten in de gespiegelde stand. */
  const [hermeet, setHermeet] = React.useState(0);
  React.useEffect(() => {
    if (!spiegel || open) return;
    const t = setTimeout(() => setHermeet((n) => n + 1), 30);
    return () => clearTimeout(t);
  }, [open, spiegel]);
  React.useLayoutEffect(() => {
    if (!spiegel || open || !hermeet || !knopRef.current || !rijRef.current || !kopRef.current) return;
    const rr = rijRef.current.getBoundingClientRect(), kb = knopRef.current.getBoundingClientRect();
    const gat = parseFloat(getComputedStyle(kopRef.current).columnGap) || 0;
    const kolom = Math.max(0, Math.round(rr.right - (kb.left - gat)));
    setMaat((m) => (m.kolom === kolom ? m : { ...m, kolom }));
  }, [hermeet]);
  /* De tekstreveal hangt aan de scrollteller in documentcoördinaten, niet aan
     een IntersectionObserver: het inladen van beeld verschuift de layout en dat
     vuurde de reveal van alle rijen tegelijk af. */
  const [binnen, setBinnen] = React.useState(false);
  React.useEffect(() => {
    if (window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches) { setBinnen(true); return; }
    let diepst = 0, aan = false;
    return TELLER.aan((vh) => {
      if (aan || !rijRef.current) return;
      const sy = window.scrollY || window.pageYOffset || 0;
      const docTop = rijRef.current.getBoundingClientRect().top + sy;
      const rand = sy + vh * 0.82;
      if (rand > diepst) diepst = rand;
      if (diepst > docTop) { aan = true; setBinnen(true); }
    });
  }, []);
  const zak = Math.max((maat.strook - maat.kop) / 2, 0);
  return (
    <RijOpkomst vast={!!c.raster}>
      <Haarlijn vol={c.raster ? true : open} />
      <div>
        <div ref={rijRef} onClick={tik}
          onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)}
          style={{ cursor: "pointer", color: "var(--text-heading)", minWidth: 0, padding: "var(--space-4) 0", marginRight: "calc(var(--page-margin) * -1)", overflow: "clip", paddingBottom: open ? "var(--space-7)" : "var(--space-4)", transition: "padding-bottom " + VLOEI }}>
          {/* Kop: naam en kaders links, de schakel in het midden, de omschrijving
              rechts — precies waar in rust de beeldstrook staat. */}
          <div ref={(n) => { kopRef.current = n; if (n && c.raster && !open && n.scrollHeight && Math.abs(n.scrollHeight - kopH) > 2) setKopH(n.scrollHeight); }} style={{ display: "grid", gridTemplateColumns: spiegel && !open ? "minmax(0,1fr) auto minmax(0,42%)" : "minmax(0,42%) auto minmax(0,1fr)", direction: spiegel && !open ? "rtl" : "ltr", gap: "var(--space-6)", alignItems: "start", minWidth: 0, paddingRight: "var(--page-margin)", transform: open ? "translateY(0)" : "translateY(" + zak + "px)", transition: "transform " + VLOEI }}>
            <div style={{ display: "grid", gap: "var(--space-3)", justifyItems: "start", minWidth: 0, direction: "ltr" }}>
              {/* Naam en kaders komen woord voor woord van links naar rechts in
                  beeld, dezelfde reveal als de koppen op de dienstenpagina. */}
              <span style={{ display: "block", fontFamily: "var(--font-core)", fontWeight: "var(--weight-heading)", fontSize: "clamp(18px,1.9vw,28px)", letterSpacing: "var(--track-heading)", whiteSpace: "nowrap" }}>{c.klant}</span>
              {/* Kaders als vlakjes in een donkerder navy, zodat ze als label
                 leesbaar zijn en de rij rustiger oogt. */}
              <span style={{ display: "flex", gap: "var(--space-2)", flexWrap: "wrap" }}>
                {c.kaders.map((k, n) => <span key={k} style={{ position: "relative", display: "block", whiteSpace: "nowrap", background: "#0b1730", padding: "7px 10px 6px", fontFamily: "var(--font-label)", fontWeight: "var(--weight-label)", fontSize: "var(--size-label-sm)", letterSpacing: "var(--track-label-wide)", textTransform: "uppercase", color: "var(--text-body)" }}><span style={{ display: "block", clipPath: binnen ? "inset(-4px -2px -4px 0)" : "inset(-4px 100% -4px 0)", transition: "clip-path 900ms cubic-bezier(.65,0,.25,1) " + (160 + n * 140) + "ms" }}>{k}</span></span>)}
              </span>
              <span style={{ display: "block", overflow: "hidden", maxHeight: open ? "180px" : "0px", opacity: open ? 1 : 0, transition: "max-height " + VLOEI + ", opacity " + (open ? 600 : 240) + "ms var(--ease-dolle) " + (open ? 220 : 0) + "ms" }} onClick={(ev) => ev.stopPropagation()}>
                <span style={{ display: "flex", gap: "var(--space-4)", alignItems: "center", flexWrap: "wrap", paddingTop: "var(--space-6)" }}>
                  {geenKnop ? null : <WitteKnop tabIndex={open ? 0 : -1} onClick={naar}>View case</WitteKnop>}
                </span>
              </span>
            </div>
            <span ref={knopRef} style={{ alignSelf: "start", marginTop: "-6px", direction: "ltr" }} onClick={(ev) => ev.stopPropagation()}>
              <Button size="sm" variant="secondary" onClick={onToggle} aria-expanded={open} aria-label={(open ? "Close " : "View ") + c.klant} style={{ color: "var(--dolle-white)", borderColor: "transparent" }}>{open ? "Close" : "View"}</Button>
            </span>
            <span ref={kolomRef} style={{ display: "block", minWidth: 0, direction: "ltr", overflow: "hidden", maxHeight: open ? "320px" : "0px", opacity: open ? 1 : 0, transition: "max-height " + VLOEI + ", opacity " + (open ? 620 : 240) + "ms var(--ease-dolle) " + (open ? 220 : 0) + "ms" }}>
              <span style={{ display: "block", color: "var(--text-body)", maxWidth: "46ch", marginLeft: "auto", fontSize: "var(--size-body)", lineHeight: "var(--lh-body)" }}>{c.body}</span>
              {c.raster ? <Kicker size="sm" style={{ display: "block", maxWidth: "46ch", marginLeft: "auto", paddingTop: "var(--space-4)", color: "var(--text-muted)" }}>{[["With models", "films with models"], ["Product films", "product films"]].map(([k, l]) => ((c.raster.find((x) => x.kop === k) || {}).items || []).length + " " + l).join(" · ")}</Kicker> : null}
              {c.stat ? <Kicker size="sm" tone="strong" style={{ display: "block", maxWidth: "46ch", marginLeft: "auto", paddingTop: "var(--space-4)" }}>{c.stat} · {c.label}</Kicker> : null}
            </span>
          </div>
          {/* De strook zelf: in rust hangt hij omhoog naast de kop, open zakt hij
              op zijn plek en groeit hij vol uit. Eén beweging. */}
          <div ref={strookRef} style={{ width: open ? "100%" : "calc(100% - " + maat.kolom + "px)", marginLeft: spiegel ? 0 : "auto", marginTop: open ? "var(--space-6)" : (-maat.kop) + "px", transition: "width " + VLOEI + ", margin-top " + VLOEI }}>
            {c.raster ? (
              /* Strook en campagne wisselen in één beweging: de een klapt in terwijl de ander uitklapt. */
              <div style={{ display: "grid" }}>
                <div style={{ display: "grid", gridTemplateRows: open ? "0fr" : "1fr", opacity: open ? 0 : 1, transition: "grid-template-rows " + RVL + ", opacity 600ms ease" }}>
                  <div style={{ overflow: "hidden", minHeight: 0 }}><RijBeeld c={c} open={false} hover={hover} groot={groot} onSleep={() => { sleep.current = true; }} /></div>
                </div>
                <div style={{ display: "grid", gridTemplateRows: open ? "1fr" : "0fr", transition: "grid-template-rows " + RVL }}>
                  <div style={{ overflow: open ? "visible" : "hidden", minHeight: 0 }}>{toon ? <RijRaster c={c} open={open} onClose={onToggle} /> : null}</div>
                </div>
              </div>
            ) : <RijBeeld c={c} open={open} hover={hover} groot={groot} onSleep={() => { sleep.current = true; }} />}
          </div>
        </div>
      </div>
    </RijOpkomst>
  );
}

/* Rangschikken: de volgorde staat als lijst van id's in de browser opgeslagen,
   zodat een gekozen rangorde een herlading overleeft. Zonder opgeslagen lijst
   geldt de volgorde uit het bestand. */
const RANG_SLEUTEL = "dolle-cases-rang";

function leesRang() {
  try {
    const rauw = window.localStorage.getItem(RANG_SLEUTEL);
    const lijst = rauw ? JSON.parse(rauw) : null;
    return Array.isArray(lijst) ? lijst : null;
  } catch (e) { return null; }
}

function schrijfRang(ids) {
  try { window.localStorage.setItem(RANG_SLEUTEL, JSON.stringify(ids)); } catch (e) { /* geen opslag */ }
}

function sorteer(cases, rang) {
  if (!rang || !rang.length) return cases;
  const plek = new Map(rang.map((id, i) => [id, i]));
  /* Een case die nog niet in de opgeslagen rangorde staat (nieuw in het
     bestand) gaat net vóór de eerstvolgende bekende buur staan, in plaats van
     achteraan te belanden. */
  const stand = new Map();
  cases.forEach((c2, i) => {
    if (plek.has(c2.id)) { stand.set(c2.id, plek.get(c2.id) * 10); return; }
    let volg = null;
    for (let j = i + 1; j < cases.length; j++) { if (plek.has(cases[j].id)) { volg = plek.get(cases[j].id); break; } }
    stand.set(c2.id, volg == null ? 9999 + i : volg * 10 - 1);
  });
  return cases.slice().sort((a, b) => stand.get(a.id) - stand.get(b.id));
}

/* De rangschik-rij: dezelfde haarlijnrij, maar zonder beeld. Slepen zet de case
   op een nieuwe plek, de pijlen doen hetzelfde stap voor stap. */
function RangRij({ c, plek, totaal, verplaats, pak, laat, sleepId }) {
  const actief = sleepId === c.id;
  return (
    <div draggable="true"
      onDragStart={() => pak(c.id)}
      onDragOver={(ev) => { ev.preventDefault(); laat(c.id, false); }}
      onDrop={(ev) => { ev.preventDefault(); laat(c.id, true); }}
      onDragEnd={() => laat(null, true)}
      style={{ display: "grid", gridTemplateColumns: "auto minmax(0,1fr) auto auto", gap: "var(--space-5)", alignItems: "center", padding: "var(--space-3) 0", borderTop: "1px solid var(--white-24, rgba(255,255,255,0.24))", cursor: "grab", opacity: actief ? 0.45 : 1, transition: "opacity var(--dur-ui) var(--ease-dolle)" }}>
      <Kicker size="sm" style={{ minWidth: "3ch", color: plek < 6 ? "var(--dolle-white)" : "var(--text-muted)" }}>{String(plek + 1).padStart(2, "0")}</Kicker>
      <span style={{ fontFamily: "var(--font-core)", fontWeight: "var(--weight-heading)", fontSize: "clamp(15px,1.3vw,20px)", letterSpacing: "var(--track-heading)", color: "var(--dolle-white)" }}>{c.klant}</span>
      <Kicker size="sm" style={{ color: "var(--text-muted)", whiteSpace: "nowrap" }}>{c.dienst}</Kicker>
      <span style={{ display: "flex", gap: "var(--space-3)" }}>
        <Button size="sm" variant="secondary" mark={false} disabled={plek === 0} onClick={() => verplaats(c.id, -1)} aria-label={"Hoger: " + c.klant} style={{ color: "var(--dolle-white)", borderColor: "var(--white-24, rgba(255,255,255,0.24))", padding: "8px 14px" }}>↑</Button>
        <Button size="sm" variant="secondary" mark={false} disabled={plek === totaal - 1} onClick={() => verplaats(c.id, 1)} aria-label={"Lager: " + c.klant} style={{ color: "var(--dolle-white)", borderColor: "var(--white-24, rgba(255,255,255,0.24))", padding: "8px 14px" }}>↓</Button>
      </span>
    </div>
  );
}

function RangPaneel({ lijst, rang, setRang, sluit }) {
  const [sleepId, setSleepId] = React.useState(null);
  const ids = lijst.map((x) => x.id);
  const zet = (nieuw) => { setRang(nieuw); schrijfRang(nieuw); };
  const verplaats = (id, richting) => {
    const i = ids.indexOf(id);
    const j = i + richting;
    if (i < 0 || j < 0 || j >= ids.length) return;
    const nieuw = ids.slice();
    nieuw.splice(j, 0, nieuw.splice(i, 1)[0]);
    zet(nieuw);
  };
  const laat = (doelId, klaar) => {
    if (!sleepId || doelId === sleepId) { if (klaar) setSleepId(null); return; }
    if (doelId != null) {
      const nieuw = ids.slice();
      const i = nieuw.indexOf(sleepId);
      nieuw.splice(i, 1);
      nieuw.splice(nieuw.indexOf(doelId), 0, sleepId);
      zet(nieuw);
    }
    if (klaar) setSleepId(null);
  };
  return (
    <div style={{ display: "grid", gap: "var(--space-5)", padding: "var(--space-5) 0 var(--space-7)" }}>
      <div style={{ display: "flex", gap: "var(--space-6)", alignItems: "center", flexWrap: "wrap" }}>
        <Kicker size="sm" style={{ color: "var(--text-muted)" }}>Sleep of gebruik de pijlen · bovenaan is belangrijkst</Kicker>
        <span style={{ display: "flex", gap: "var(--space-4)", marginLeft: "auto" }}>
          <Button size="sm" variant="secondary" onClick={() => { try { window.localStorage.removeItem(RANG_SLEUTEL); } catch (e) {} setRang(null); }} style={{ color: "var(--dolle-white)", borderColor: "var(--white-24, rgba(255,255,255,0.24))" }}>Reset</Button>
          <Button size="sm" variant="secondary" onClick={sluit} style={{ color: "var(--dolle-white)", borderColor: "var(--white-24, rgba(255,255,255,0.24))" }}>Done</Button>
        </span>
      </div>
      <div style={{ display: "grid" }}>
        {lijst.map((c, i) => (
          <RangRij key={c.id} c={c} plek={i} totaal={lijst.length} verplaats={verplaats} pak={setSleepId} laat={laat} sleepId={sleepId} />
        ))}
      </div>
    </div>
  );
}

/* De kaders staan in de kop, tussen de spreuk en de lead: gewone woorden met
   de onderlijn van de navigatie, tussen twee haarlijnen. */
function FilterBalk({ filter, setFilter, aantal, totaal, rangAan, setRangAan }) {
  return (
    <div style={{ width: "100%", display: "grid", gap: "var(--space-4)", padding: "var(--space-4) 0 var(--space-5)" }}>
      <div style={{ display: "flex", gap: "var(--space-7)", alignItems: "center", flexWrap: "wrap", justifyContent: "flex-end", maxWidth: "100%", marginLeft: "auto" }}>
        {FILTERS.map((f) => <CaseFilter key={f} label={f} active={filter === f} onClick={() => setFilter(f)} />)}
        <Kicker size="sm" style={{ whiteSpace: "nowrap" }}>[ {String(aantal).padStart(2, "0")} · {String(totaal).padStart(2, "0")} ]</Kicker>
        <CaseFilter label={rangAan ? "Done ranking" : "Rank"} active={rangAan} onClick={() => setRangAan(!rangAan)} />
      </div>
    </div>
  );
}

function CasesLijst({ go, lijst, alles, filter, setFilter, aantal, totaal, rang, setRang }) {
  const [open, setOpen] = React.useState(-1);
  const [rangAan, setRangAan] = React.useState(false);
  React.useEffect(() => { setOpen(-1); }, [filter]);
  return (
    <section className="dolle-dark" style={{ background: "var(--dolle-navy)", padding: "0 var(--page-margin) var(--section-gap)", overflow: "hidden" }}>
      <div style={{ maxWidth: "var(--content-max)", margin: "0 auto", display: "grid", gridTemplateColumns: "minmax(0,1fr)" }}>
        {/* De kaders sluiten direct aan op de eerste rij. */}
        <FilterBalk filter={filter} setFilter={setFilter} aantal={aantal} totaal={totaal} rangAan={rangAan} setRangAan={setRangAan} />
        {rangAan
          ? <RangPaneel lijst={alles} rang={rang} setRang={setRang} sluit={() => setRangAan(false)} />
          : lijst.map((c, i) => (
            <CaseRij key={c.id} c={c} i={i} go={go} open={open === c.id} onToggle={() => setOpen(open === c.id ? -1 : c.id)} />
          ))}
        <Haarlijn />
      </div>
    </section>
  );
}

/* Tussenband op navy: één spreuk, het bewijs in verleden tijd. */
function CasesBand() {
  return (
    <section className="dolle-dark" style={{ background: "var(--dolle-navy)", padding: "clamp(72px,9vw,140px) var(--page-margin)", overflow: "hidden" }}>
      <div style={{ maxWidth: "var(--content-max)", margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 1fr", gap: "var(--grid-gap)", alignItems: "center" }}>
        <Words as="h2" text="Ambition in the future tense. Proof in the past tense." style={{ margin: 0, fontSize: "var(--size-h1)", maxWidth: "16ch" }} />
        <Reveal delay={300} style={{ display: "grid", gap: "var(--space-6)", justifyItems: "start" }}>
          <p style={{ margin: 0, color: "var(--text-body)", maxWidth: "46ch" }}>A baseline before we start, 90 days of measurement after, and one figure in the frame. Only measured results from our own work, always with context and period.</p>
          <div style={{ display: "flex", gap: "var(--space-8)" }}>
            {[["100+", "Brands made visible"], ["90", "Days measured, every case"], ["4", "Services, one movement"]].map(([v, l]) => (
              <div key={l} style={{ display: "grid", gap: "var(--space-2)" }}>
                <span style={{ fontFamily: "var(--font-core)", fontWeight: "var(--weight-heading)", fontSize: "var(--size-h2)", letterSpacing: "var(--track-heading)", color: "var(--text-heading)" }}>{v}</span>
                <Kicker size="sm">{l}</Kicker>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function CasesCTA({ go }) {
  return (
    <section style={{ background: "var(--dolle-white)", padding: "var(--section-gap) var(--page-margin)" }}>
      <div style={{ maxWidth: "var(--content-max)", margin: "0 auto", display: "grid", gap: "var(--space-6)", justifyItems: "start" }}>
        <Reveal><Kicker>[ get in touch ]</Kicker></Reveal>
        <Words as="h2" text="Your case, next." delay={80} style={{ margin: 0, color: "var(--text-heading)" }} />
        <Reveal delay={260}><Button onClick={() => go("contact")}>Start a project</Button></Reveal>
        <Reveal delay={360} style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(280px,340px))", gap: "var(--space-3)", width: "100%" }}>
          <a href="tel:+31651202317" style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: "var(--space-6)", padding: "var(--space-3) var(--space-4)", border: "1px solid var(--border-hairline)", color: "var(--text-heading)", textDecoration: "none", fontFamily: "var(--font-label)", fontWeight: 600, letterSpacing: "0.06em", fontSize: "var(--size-body-sm)" }}>
            +31 6 51 20 23 17
            <Icon name="arrow-right" size={16} />
          </a>
          <a href="mailto:info@dolle.nl" style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: "var(--space-6)", padding: "var(--space-3) var(--space-4)", border: "1px solid var(--border-hairline)", color: "var(--text-heading)", textDecoration: "none", fontFamily: "var(--font-label)", fontWeight: 600, letterSpacing: "0.06em", fontSize: "var(--size-body-sm)" }}>
            info@dolle.nl
            <Icon name="arrow-right" size={16} />
          </a>
        </Reveal>
      </div>
    </section>
  );
}

function Cases({ go }) {
  const [filter, setFilter] = React.useState("All cases");
  const [rang, setRang] = React.useState(null);
  React.useEffect(() => { setRang(leesRang()); }, []);
  const geordend = sorteer(CASES, rang);
  const lijst = filter === "All cases" ? geordend : geordend.filter((x) => x.dienst === filter);
  return (
    <React.Fragment>
      <CasesHero go={go} />
      <CasesLijst go={go} lijst={lijst} filter={filter} setFilter={setFilter} aantal={lijst.length} totaal={CASES.length} alles={geordend} rang={rang} setRang={setRang} />
      <CasesBand />
      {/* Dezelfde get-in-touch als onderaan de home. */}
      <HomeConversie go={go} />
    </React.Fragment>
  );
}

/* Eén volgorde voor cases-pagina en homepage: de opgeslagen rangorde eerst,
   anders de volgorde uit het bestand. */
function caseVolgorde() { return sorteer(CASES, leesRang()); }

Object.assign(window, { Cases, CASES, CaseRij, Haarlijn, caseVolgorde });
