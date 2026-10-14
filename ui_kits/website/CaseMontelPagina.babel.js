const MT_DS = window.DesignSystem_8f95a2;
const { Kicker: MTKicker, Button: MTButton } = MT_DS;
const MTTag = window.DolleTag || (({ children }) => React.createElement("span", null, children));

const MT = "../../assets/cases/montel/";
const MT_BTS = MT + "bts/";
const MT_VID = "../../assets/video/";
/* Eigen keuze uit "Montel Beeldkeuze.html" (lokaal bewaard); zonder keuze de standaard. */
/* Vastgezette keuze (Guus, okt 2026). Een lokale keuze uit het keuzevel gaat voor, per plek. */
const MT_VAST = {"band":[{"src":"../../assets/cases/montel/ijmuiden-2025/montel-ijmuiden-2025-18-lt.jpg","ratio":"4 / 5"},{"src":"../../assets/video/social/montel-eindhoven-2025-vader-zoon-16x9.mp4","ratio":"1 / 1"},{"src":"../../assets/cases/montel/bts/montel-bts-foto-07-web.jpg","ratio":"9 / 16"},{"src":"../../assets/cases/montel/ijmuiden-2025/montel-ijmuiden-2025-09-lt.jpg","ratio":"3 / 4"},{"src":"../../assets/video/social/montel-ijmuiden-2024-figurant-vader-zoon-16x9.mp4","ratio":"3 / 2"},{"src":"../../assets/cases/montel/ijmuiden-2025/montel-ijmuiden-2025-16.jpg","ratio":"9 / 16"},{"src":"../../assets/cases/montel/ijmuiden-2025/montel-ijmuiden-2025-22-lt.jpg","ratio":"3 / 4"},{"src":"../../assets/video/montel-artfilm-16x9.mp4","ratio":"3 / 2"}],"hero":"../../assets/cases/montel/ijmuiden-2025/montel-ijmuiden-2025-06-lt.jpg"};
const MT_KEUZE = (() => { let k = null; try { k = JSON.parse(localStorage.getItem("dolle-montel-keuze") || "null"); } catch (e) {} k = k || {};
  return { hero: k.hero || MT_VAST.hero, band: (k.band && k.band.length) ? k.band : MT_VAST.band, in: k.in || {}, uit: k.uit || {} }; })();
const mtRn = (r) => { const [a, b] = String(r || "16 / 9").split("/").map(Number); return a / b; };
const mtKItem = (k) => { if (/\.mp4$/.test(k.src)) { const s = /social\/montel-(.+?)-16x9\.mp4$/.exec(k.src); return { video: k.src, terug: s ? MT + "social/montel-" + s[1] + "-poster.jpg" : undefined, ratio: k.ratio, tekst: "" }; } const v = /social\/montel-(.+?)-(poster|still)\.jpg$/.exec(k.src); return v ? { video: MT_VID + "social/montel-" + v[1] + "-16x9.mp4", terug: k.src, ratio: k.ratio, tekst: "" } : { src: k.src, terug: k.src, ratio: k.ratio, tekst: "", foto: 1 }; };

/* De vier tv-commercials. Op de achtergrond speelt elke spot tot vlak voor de
   eindkaart met het logo; dan neemt de volgende het over. */
const MT_TVC = [
  { id: "40-2", naam: "Montèl 40-2", regel: "A living room built around one sofa, with the cat as co-star." },
  { id: "furious-vader-zoon", naam: "Furious", regel: "Father and son on the sofa, each in their own world." },
  { id: "ger-nijman", naam: "Ger Nijman", regel: "One sofa, one person and the freedom to make it entirely your own." },
  { id: "mova-kinderen", naam: "Mova", regel: "A family sofa that can take everything the kids bring to it." }
].map((t) => ({ ...t, film: MT_VID + "montel-tvc-" + t.id + "-16x9.mp4", poster: MT + "montel-tvc-" + t.id + "-poster.jpg" }));

const MT_POL = "../../assets/cases/montel/polen/montel-polen-";
const MT_INTRO = [
  "Montèl is the largest seating specialist in the Netherlands: 33 stores, forty years in business and a collection that is entirely its own design, made in its own factory in Poland.",
  "DOLLE has been Montèl's production partner since 2020. Four national TV commercials, an art film, social campaigns shot in rented homes across the country and the internal films that carry the company from onboarding to kick-off.",
];

const mtFoto = (n) => ({ src: MT_BTS + "montel-bts-foto-" + String(n).padStart(2, "0") + "-web.jpg", r: 3 / 4 });
const mtLoop = (n) => ({ video: MT_VID + "montel-bts-" + String(n).padStart(2, "0") + ".mp4", r: 9 / 16 });
const mtArt = (n) => MT + "montel-art-still-0" + n + "-web.jpg";

/* Band onder de hero: BTS-foto's en -loops, afgewisseld met beelden uit de spots en de art film. */
const MT_BAND0 = [
  { src: MT_TVC[2].poster, r: 16 / 9 }, mtFoto(1), mtLoop(1), mtFoto(4), { src: mtArt(4), r: 16 / 9 }, mtLoop(3), mtFoto(7),
  mtFoto(9), { src: MT_TVC[0].poster, r: 16 / 9 }, mtLoop(5), mtFoto(12), mtFoto(14), { src: mtArt(1), r: 16 / 9 }, mtLoop(8),
  mtFoto(17), { src: MT_TVC[3].poster, r: 16 / 9 }, mtLoop(11), mtFoto(20), mtFoto(22), { src: MT_TVC[1].poster, r: 16 / 9 }, mtLoop(13)
];
const MT_BAND = (MT_KEUZE && MT_KEUZE.band && MT_KEUZE.band.length) ? MT_KEUZE.band.map((k) => /\.mp4$/.test(k.src) ? { video: /artfilm/.test(k.src) && k.src.indexOf("#t=") < 0 ? k.src + "#t=8" : k.src, r: mtRn(k.ratio) } : { src: k.src, r: mtRn(k.ratio) }) : MT_BAND0;
/* Behind the scenes onder de art film, opent pas na klikken. */
/* Carrousel onder de art film: stills uit de film, afgewisseld met BTS. Wordt aangevuld. */
const MT_ART_BAND = [{ src: mtArt(1), r: 16 / 9 }, mtFoto(2), { src: mtArt(2), r: 16 / 9 }, mtLoop(2), { src: mtArt(3), r: 16 / 9 }, mtFoto(5), { src: mtArt(4), r: 16 / 9 }, mtLoop(6), { src: mtArt(5), r: 16 / 9 }, mtFoto(8)];
const MT_ART_BTS = [mtFoto(2), mtLoop(2), mtFoto(5), mtFoto(8), mtLoop(6), mtFoto(11), mtFoto(15), mtLoop(9), mtFoto(18), mtFoto(21), mtLoop(14), mtFoto(23)];

/* Social campagnes: per shoot een gehuurd huis, modellen, styling en een volledige crew. De naam is de locatie. */
/* Turnhout en Moergestel zijn één shoot; Chess staat er voorlopig niet in. */
const MT_SHOOTS = ["IJmuiden I", "Heemstede", "Eindhoven", "IJmuiden II", "Gent", "Waalre", "Turnhout"];

/* Films per shoot (16:9). Label: wat er in beeld is. */
const MT_SOC = {
  "Chess": [["chess-bank", "Sofa"], ["chess-bank-product", "Sofa · product"]],
  "Eindhoven": [["eindhoven-2025-dansend-de-40-in", "Dancing into 40"], ["eindhoven-2025-vader-zoon", "Father & son"], ["eindhoven-2025-montaro", "Montaro"], ["eindhoven-2025-lines", "Lines"], ["eindhoven-2025-stellen-tafel", "Couples · dining"], ["eindhoven-2025-tafel", "Dining table"]],
  "Gent": [["gent-social-eettafel", "Dining · social"], ["gent-figurant-mondo-hoekbank", "Mondo corner sofa"], ["gent-figurant-mondo-sustainable", "Mondo sustainable"], ["gent-figurant-eettafel", "Dining table"], ["gent-product-mondo-hoekbank", "Mondo · product"], ["gent-product-mondo-sustainable", "Mondo sustainable · product"], ["gent-product-eettafel", "Dining · product"]],
  "Heemstede": [["heemstede-compilatie", "Compilation"], ["heemstede-figurant-carmo-flair", "Carmo Flair"], ["heemstede-figurant-liveo-dream", "Liveo Dream"], ["heemstede-figurant-mova", "Mova"], ["heemstede-product-carmo-flair", "Carmo Flair · product"], ["heemstede-product-liveo-dream", "Liveo Dream · product"], ["heemstede-product-mova", "Mova · product"]],
  "IJmuiden I": [["ijmuiden-2024-compilatie", "Compilation"], ["ijmuiden-2024-figurant-jong-stel", "Young couple"], ["ijmuiden-2024-figurant-ouder-stel", "Older couple"], ["ijmuiden-2024-figurant-vader-zoon", "Father & son"], ["ijmuiden-2024-figurant-young-professional", "Young professional"], ["ijmuiden-2024-product-bloom", "Bloom · product"], ["ijmuiden-2024-product-furious", "Furious · product"], ["ijmuiden-2024-product-miles", "Miles · product"], ["ijmuiden-2024-product-moved", "Moved · product"]],
  "IJmuiden II": [["ijmuiden-2025-figurant-art-of-comfort", "Art of comfort"], ["ijmuiden-2025-figurant-design-statement", "Design statement"], ["ijmuiden-2025-figurant-fijne-momenten", "Good moments"], ["ijmuiden-2025-figurant-rust-in-de-drukte", "Calm in the rush"], ["ijmuiden-2025-product-art-of-comfort", "Art of comfort · product"], ["ijmuiden-2025-product-design-statement", "Design statement · product"], ["ijmuiden-2025-product-fijne-momenten", "Good moments · product"], ["ijmuiden-2025-product-rust-in-de-drukte", "Calm in the rush · product"]],
  "Moergestel": [["moergestel-figurant-mouro", "Mouro"], ["moergestel-figurant-snake", "Snake"], ["moergestel-product-mouro", "Mouro · product"], ["moergestel-product-snake", "Snake · product"], ["moergestel-product-hopper", "Hopper · product"], ["moergestel-product-hopper-prijs", "Hopper · offer"]]
};
MT_SOC["Waalre"] = [["waalre-figurant-01", "With models"], ["waalre-product-01", "Product film 1"], ["waalre-product-02", "Product film 2"], ["waalre-product-03", "Product film 3"], ["waalre-product-04", "Product film 4"], ["waalre-product-05", "Product film 5"]];
MT_SOC["Turnhout"] = [["turnhout-bank-model", "Sofa"], ["turnhout-magazine", "Magazine"], ["turnhout-bank", "Sofa · product"], ["turnhout-blad", "Table top · product"]];
MT_SOC["Turnhout"] = MT_SOC["Turnhout"].concat(MT_SOC["Moergestel"] || []);
/* Campagnefotografie per shoot: [nummer, liggend?]. */
const MT_IJ = MT + "ijmuiden-2025/montel-ijmuiden-2025-";
const MT_FOTO = { "IJmuiden II": [[6, 1], [15, 0], [1, 1], [10, 0], [3, 1], [16, 0], [14, 1], [19, 0]] };
const mtFotos = (naam) => (MT_FOTO[naam] || []).map(([n, l]) => ({ src: MT_IJ + String(n).padStart(2, "0") + ".jpg", tekst: "Photography", ratio: l ? "3 / 2" : "2 / 3", foto: 1 }));
/* Eigen gekozen still uit de film, waar het eerste beeld te veel op een ander lijkt. */
const MT_EIGEN_STILL = ["turnhout-bank-model", "turnhout-magazine", "turnhout-blad", "turnhout-bank", "chess-bank", "chess-bank-product"];
const mtSoc = (naam) => (MT_SOC[naam] || []).map(([id, label]) => ({ video: MT_VID + "social/montel-" + id + "-16x9.mp4", terug: MT + "social/montel-" + id + (MT_EIGEN_STILL.includes(id) ? "-still.jpg" : "-poster.jpg"), ratio: "16 / 9", tekst: label, prod: /-product-/.test(id) }));
/* Uitgeklapt: eerst de films met modellen, daaronder de productfilms. BTS per shoot zodra die er is. */
/* Vaste "willekeurige" volgorde per campagne, zodat elke rij anders oogt maar niet verspringt. */
const mtMeng = (lijst, zaad) => { let s = 0; for (const ch of zaad) s = (s * 31 + ch.charCodeAt(0)) >>> 0; return lijst.map((x, i) => [((s ^ (i * 2654435761)) >>> 0) % 997, x]).sort((p, q) => p[0] - q[0]).map((p) => p[1]); };
const mtProd = (t) => t.prod || /· product|· offer/.test(t.tekst);
const mtHero = (a) => a.find((t) => /^Compilation/.test(t.tekst)) || a.find((t) => !mtProd(t)) || a[0];
/* Dicht: één film (de compilatie) en drie stills uit de andere films. */
const mtStrook = (naam) => { const k = MT_KEUZE && MT_KEUZE.in && MT_KEUZE.in[naam]; return k && k.length ? k.map(mtKItem) : mtStrook0(naam); };
const mtStrook0 = (naam) => {
  /* Elke campagne opent anders: de ene met een still van mensen, de andere met
     een product; de compilatie staat er altijd in, op plek 1, 2 of 3. */
  const a = mtSoc(naam); const h = mtHero(a);
  const st = (t) => ({ src: t.terug, tekst: t.tekst });
  const mens = mtMeng(a.filter((t) => t !== h && !mtProd(t)), naam).map(st);
  const prod = mtMeng(a.filter((t) => t !== h && mtProd(t)), naam + "p").map(st);
  const i = Math.max(0, MT_SHOOTS.indexOf(naam));
  /* Vooral mensen, met af en toe een product ertussen voor afwisseling. */
  const patroon = [["h", "m", "m", "p", "m", "m"], ["m", "h", "m", "m", "p", "m"], ["m", "m", "h", "p", "m", "m"], ["m", "p", "m", "h", "m", "m"], ["m", "h", "m", "m", "m", "p"]][i % 5];
  const pak = (k) => k === "h" ? h : (k === "m" ? (mens.shift() || prod.shift()) : (prod.shift() || mens.shift()));
  /* Wisselende uitsneden zoals de casepagina's, zodat er meer beelden in de strook passen. */
  const maten = ["3 / 2", "4 / 5", "9 / 16", "3 / 4", "3 / 2", "4 / 5"];
  const films = patroon.map(pak).filter(Boolean).map((t, n) => ({ ...t, ratio: maten[(n + i) % maten.length] }));
  /* Heeft de shoot fotografie, dan wisselen films en foto's elkaar af. */
  const f = mtFotos(naam); if (!f.length) return films;
  const uit = []; films.forEach((t, n) => { uit.push(t); if (f.length) uit.push(f.shift()); if (n % 2 && f.length) uit.push(f.shift()); });
  return uit.concat(f);
};
const mtRaster = (naam) => { const k = MT_KEUZE && MT_KEUZE.uit && MT_KEUZE.uit[naam]; return k && k.length ? [{ kop: "Selection", items: k.map(mtKItem) }] : mtRaster0(naam); };
const mtRaster0 = (naam) => { const a = mtSoc(naam); const h = mtHero(a); return [{ kop: "Hero", items: [h] }, { kop: "With models", items: a.filter((t) => t !== h && !mtProd(t)) }, { kop: "Product films", items: a.filter((t) => t !== h && mtProd(t)) }, { kop: "Stills", items: (() => { const me = mtMeng(a.filter((t) => !mtProd(t)), naam + "s"), pr = mtMeng(a.filter(mtProd), naam + "q"), uit = []; while (me.length || pr.length) { if (me.length) uit.push(me.shift()); if (me.length) uit.push(me.shift()); if (pr.length) uit.push(pr.shift()); } return uit; })() }]; };
/* Kick-off: foto's van de avond, afgewisseld met stills uit de film. */
const MT_KO_R = { "03": 0.717, "06": 1.499, "17": 0.709, "18": 0.761, "20": 1.413, "27": 0.687, "31": 0.761, "32": 0.709, "37": 0.672 };
const MT_KICKOFF = (() => { const uit = []; const st = [1, 2, 3, 5, 6]; let s = 0;
  for (const n of [7, 2, 22, 6, 12, 13, 20, 16, 24, 30, 9, 11, 33, 15, 18, 35, 26, 34, 21, 5, 31, 4, 17, 28]) { const k = String(n).padStart(2, "0"); uit.push({ src: MT + "kickoff/montel-kickoff-" + k + "-web.jpg", r: MT_KO_R[k] || 0.667 }); if (uit.length % 5 === 4 && s < st.length) uit.push({ src: MT + "academy/montel-academy-0" + st[s++] + ".jpg", r: 16 / 9 }); }
  return uit; })();
const MT_DATA = [
  { label: "Social campaigns on location", waarde: MT_SHOOTS.length },
  { label: "National TV commercials", waarde: 4 },
  { label: "Stores reached", waarde: 33 }
];
const MT_LEVERING = ["Concept", "Location scouting", "Casting", "Styling", "Direction", "Production", "Photography", "Edit", "Broadcast delivery", "E-learning"];

/* Plek voor beeld dat nog komt. */
function MTVak({ kader, label, src }) {
  return (
    <div style={{ display: "grid", gap: "var(--space-2)", minWidth: 0 }}>
      <span style={{ position: "relative", display: "block", aspectRatio: kader, overflow: "hidden", borderRadius: 5, background: "#0b1730", border: src ? 0 : "1px dashed var(--white-24, rgba(255,255,255,0.24))" }}>
        {src ? <img src={src} alt="" loading="lazy" decoding="async" style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover", display: "block" }} /> : null}
      </span>
      {label ? <MTKicker size="sm" style={{ display: "block", whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis", color: "var(--text-muted)" }}>{label}</MTKicker> : null}
    </div>
  );
}

function MTKop({ kop, tekst, groot }) {
  return (
    <div style={{ display: "grid", gap: "var(--space-3)", maxWidth: "56ch" }}>
      <h2 style={{ margin: 0, fontFamily: "var(--font-core)", fontWeight: "var(--weight-heading)", fontSize: groot ? "clamp(22px,2.6vw,36px)" : "clamp(19px,2vw,27px)", letterSpacing: "var(--track-heading)", color: "var(--text-heading)" }}>{kop}</h2>
      {tekst ? <p style={{ margin: 0, fontSize: "var(--size-body)", lineHeight: "var(--lh-body)" }}>{tekst}</p> : null}
    </div>
  );
}

function MTSectie({ children, gap }) {
  return (
    <section className="dolle-dark" style={{ background: "var(--dolle-navy)", color: "var(--text-body)", padding: "var(--space-6) var(--page-margin)" }}>
      <div style={{ maxWidth: "var(--content-max)", margin: "0 auto", display: "grid", gap: gap || "var(--space-5)" }}>
        {window.CMLijn ? <window.CMLijn /> : null}
        {children}
      </div>
    </section>
  );
}

function CaseMontelPagina({ go }) {
  const Film = window.CaseFilm;
  const Band = window.BVBand;
  const Rij = window.CaseRij;
  const Haarlijn = window.Haarlijn;
  const [open, setOpen] = React.useState(-1);
  const [shoot, setShoot] = React.useState(-1);
  const namen = ["Woonexpress", "Piet Klerkx", "Eezy"];
  const verwant = namen.map((n) => (window.CASES || []).find((c) => c.klant === n)).filter(Boolean);
  if (!Film) return null;
  return (
    <React.Fragment>
      <style>{"@media (max-width:860px){[data-mt-twee],[data-mt-vier]{grid-template-columns:minmax(0,1fr) !important}}"}</style>

      {/* 01 · HERO — de vier commercials achter elkaar, elk tot vlak voor de eindkaart */}
      {window.CMKop ? (
        <window.CMKop titel="Montel" tags={["Media production", "Launches", "Growth"]} film={MT_TVC.slice(1).map((t) => t.film)} reeksDuur={[7.6, 11, 8.6]} uitsnede={1.24} poster={MT_TVC[2].poster} go={go} Knop={MTButton} Woorden={window.Words || null} Tag={MTTag}>
          {window.CMIntro ? <window.CMIntro tekst={MT_INTRO} beeld={window.CMOpeningBeeld ? <window.CMOpeningBeeld modus="groei" ratio="16 / 9" src={(MT_KEUZE && MT_KEUZE.hero) || MT + "ijmuiden-2025/montel-ijmuiden-2025-06.jpg"} /> : null} /> : null}
        </window.CMKop>
      ) : null}

      {/* BAND */}
      {Band ? (
        <section className="dolle-dark" style={{ background: "var(--dolle-navy)", padding: "0 var(--page-margin) var(--space-6)" }}>
          <div style={{ maxWidth: "var(--content-max)", margin: "0 auto" }}><Band items={MT_BAND} hoog="clamp(200px,24vw,340px)" sleep schuif /></div>
        </section>
      ) : null}

      {/* 02 · TV COMMERCIALS — vier spots groot in een raster, elk met titel en regel */}
      <MTSectie>
        <MTKop groot kop="TV commercials" tekst="Four national TV commercials, each built around one sofa and the people who live with it. DOLLE took every spot from concept to broadcast: script, casting, a fully dressed home as set, direction and the final grade. Each commercial was delivered broadcast-ready and cut down for social, so one production carries a whole season." />
        <div data-mt-twee="1" style={{ display: "grid", gridTemplateColumns: "repeat(2,minmax(0,1fr))", gap: "var(--space-5) var(--space-4)", paddingTop: "var(--space-3)" }}>
          {MT_TVC.map((t, i) => (
            <div key={t.id} style={{ display: "grid", gap: "var(--space-3)", minWidth: 0 }}>
              <Film bron={t.film} poster={t.poster} watch watchSchaal={2.6} parallax />
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", gap: "var(--space-4)" }}>
                <span style={{ fontFamily: "var(--font-core)", fontWeight: "var(--weight-heading)", fontSize: "clamp(16px,1.4vw,21px)", letterSpacing: "var(--track-heading)", color: "var(--text-heading)" }}>{t.naam}</span>
              </div>
              <p style={{ margin: 0, fontSize: "var(--size-body-sm, 15px)", lineHeight: "var(--lh-body)", color: "var(--text-muted)", maxWidth: "46ch" }}>{t.regel}</p>
            </div>
          ))}
        </div>
      </MTSectie>

      {/* 03 · ART FILM — film groot, stills eronder, BTS opent na klikken */}
      <MTSectie>
        {/* Tekst links, film iets kleiner rechts; daaronder één carrousel met stills en BTS. */}
        <div data-mt-twee="1" style={{ display: "grid", gridTemplateColumns: "minmax(0,0.75fr) minmax(0,1.6fr)", gap: "calc(var(--grid-gap) * 1.1)", alignItems: "start" }}>
          <MTKop kop="Art film" tekst="An art film that shows how a Montèl sofa comes to be: the fabric samples and first sketches, the factory floor in Poland and the finished piece in the studio. Made for the 40th anniversary, to show the craft behind a collection that is entirely Montèl's own." />
          <Film bron={MT_VID + "montel-artfilm-16x9.mp4"} poster={MT + "montel-artfilm-poster.jpg"} watch watchSchaal={2.6} parallax />
        </div>
        {Band ? <Band items={MT_ART_BAND} hoog="clamp(180px,20vw,300px)" sleep schuif /> : null}
      </MTSectie>

      {/* 04 · FACTORY VISIT POLAND — film links, foto's rechts */}
      <MTSectie>
        <MTKop kop="Factory visit, Poland" tekst="Every Montèl sofa is built in the company's own factory in Poland. DOLLE travelled there with the owner and the buyer to film the work behind the collection: frames, foam, upholstery and the people who put it together. The footage shows customers and staff where their sofa really comes from." />
        <div data-mt-twee="1" style={{ display: "grid", gridTemplateColumns: "minmax(0,1.6fr) minmax(0,1fr)", gap: "var(--space-4)", alignItems: "start" }}>
          {/* Links de fabriekshal; wordt de factory film zodra die binnen is. */}
          <Film bron={MT_VID + "montel-polen-travelvlog-16x9.mp4"} poster={MT_POL + "fabriek-03-web.jpg"} watch watchSchaal={2.6} />
          <div style={{ display: "grid", gridTemplateColumns: "repeat(2,minmax(0,1fr))", gap: "var(--space-3)" }}>
            {["fabriek-01", "fabriek-05", "fabriek-02", "fabriek-04"].map((n) => <MTVak key={n} kader="4 / 5" src={MT_POL + n + "-web.jpg"} />)}
          </div>
        </div>
        {/* Daaronder het magazijn en het overleg met het Poolse team. */}
        <div data-mt-vier="1" style={{ display: "grid", gridTemplateColumns: "repeat(4,minmax(0,1fr))", gap: "var(--space-3)" }}>
          {["fabriek-06", "overleg-01", "overleg-02", "overleg-03"].map((n) => <MTVak key={n} kader="3 / 2" src={MT_POL + n + "-web.jpg"} />)}
        </div>
      </MTSectie>

      {/* 05 · SOCIAL CAMPAIGNS — projectregister zoals bij MSO, groter uitgeklapt */}
      <MTSectie gap="var(--space-4)">
        <MTKop groot kop="Social campaigns" tekst="For every collection DOLLE rents a real home and turns it into a set: furniture in, rooms styled, models cast and a full production crew on location. Each shoot is named after the place it was made." />
        <div style={{ display: "grid", gridTemplateColumns: "minmax(0,1fr)" }}>
          {Rij ? MT_SHOOTS.map((naam, i) => {
            const c = { id: "mt-" + i, klant: naam, kaders: ["Social campaign", "On location"], body: "Social campaign shot in a rented home in " + naam.replace(/ I+$/, "") + ", with models, stylists and a full production crew. Delivered as stills and short films for every channel.", zonderBeeld: true, mozaiek: ["Living room", "Detail", "Model", "Styling", "Behind the scenes"], strook: MT_SOC[naam] ? mtStrook(naam) : [undefined, undefined, undefined, undefined], raster: MT_SOC[naam] ? mtRaster(naam) : null };
            return <Rij key={c.id} c={c} i={i} go={go} spiegel geenKnop groot open={shoot === i} onToggle={() => setShoot(shoot === i ? -1 : i)} />;
          }) : null}
          {Haarlijn ? <Haarlijn vol /> : null}
        </div>
      </MTSectie>


      {/* 07 · CULTURE & E-LEARNING */}
      <MTSectie>
        <MTKop kop="Culture & e-learning" tekst="Every new colleague at Montèl starts with a sales and learning track. DOLLE filmed that track as a series of explainer videos, together with the culture film that shows where the company comes from and what it promises every customer." />
        <div data-mt-twee="1" style={{ display: "grid", gridTemplateColumns: "minmax(0,1.6fr) minmax(0,1fr)", gap: "var(--space-4)", alignItems: "start" }}>
          <MTVak kader="16 / 9" label="Montèl Academy" src={MT + "academy/montel-academy-07.jpg"} />
          <div style={{ display: "grid", gap: "var(--space-3)" }}>{[1, 2].map((n) => <MTVak key={n} kader="16 / 9" label="E-learning · module" src={MT + "academy/montel-academy-0" + n + ".jpg"} />)}</div>
        </div>
        {/* Meer stills uit de e-learning, in één band. */}
        {Band ? <Band items={[3, 5, 6].map((n) => ({ src: MT + "academy/montel-academy-0" + n + ".jpg", r: 16 / 9 }))} hoog="clamp(180px,18vw,280px)" sleep schuif /> : null}
      </MTSectie>

      {/* 08 · KICK-OFFS */}
      <MTSectie>
        <MTKop kop="Kick-offs" tekst="Cirque du Montèl: the internal kick-off where every store team comes together for the new season. DOLLE filmed the evening and photographed it from arrival to awards." />
        <Film bron={MT_VID + "montel-kickoff-16x9.mp4"} poster={MT + "academy/montel-academy-04.jpg"} onderschrift="KICK-OFF · CIRQUE DU MONTÈL" watch watchSchaal={2.4} parallax />
        {Band ? <Band items={MT_KICKOFF} hoog="clamp(220px,24vw,360px)" sleep schuif /> : null}
      </MTSectie>

      {/* 09 · DELIVERABLES */}
      {window.CMData ? <window.CMData kop="Deliverables" beeld={MT_IJ + "20.jpg"} waas={0.42} cijfers={MT_DATA} Tag={MTTag} tags={MT_LEVERING} review={{ tekst: "Working with team DOLLE is a real pleasure. We have done plenty of great shoots together by now. The contact is always easy and relaxed, and the end result is beautiful every time.", naam: "Manon Smits", rol: "Head of marketing · Montèl" }} /> : null}

      {/* 10 · RELATED WORK */}
      <section className="dolle-dark" style={{ background: "var(--dolle-navy)", padding: "var(--space-6) var(--page-margin)" }}>
        <div style={{ maxWidth: "var(--content-max)", margin: "0 auto", display: "grid", gap: "var(--space-4)", gridTemplateColumns: "minmax(0,1fr)" }}>
          <MTKicker style={{ display: "block", whiteSpace: "nowrap", color: "var(--text-muted)" }}>Related work</MTKicker>
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

window.CaseMontelPagina = CaseMontelPagina;
