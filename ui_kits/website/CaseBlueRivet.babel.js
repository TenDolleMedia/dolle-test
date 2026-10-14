const BR_DS = window.DesignSystem_8f95a2;
const { Kicker: BRKicker, Icon: BRIcon, Button: BRButton } = BR_DS;
const { Words: BRWords, DolleTag: BRTag } = window;

/* CASE DETAIL · BLUE RIVET · variant tussen MINIMAL en EXTENDED.
   Opbouw: tekstblok met één beeld, daarna de brand film met een carrousel van
   stills en behind the scenes, en tot slot het socialblok waarin de product- en
   socialvideo's in staand formaat naast elkaar staan.
   Beeld en video zijn nu placeholder; zodra het Blue Rivet-materiaal er is
   wisselen we alleen de bronnen. */

const BR = "../../assets/cases/bluerivet/";
const BR_VID = "../../assets/video/";
const BR_IMG = "../../assets/cases/web/";
const BR_KOLOMGAT = "var(--space-5)";

/* Openingsbeeld: de campagnefoto tegen de blauwe container. */
const BR_HERO = BR + "br-shoot-0625-web.jpg";
const BR_HERO_2 = BR + "br-shoot-0626-web.jpg";

/* Carrousel onder de brand film: campagnefoto's en set-beelden om en om, in
   wisselende breedte en hoogte zodat de strook ritme houdt. */
/* De strook is met de indeelpagina samengesteld: naam en verhouding per kaart,
   in deze volgorde. Breedte en verticale verspringing houden het ritme. */
const BR_ORDE = [
  ["br-shoot-0432", "1 / 1"], ["br-shoot-0419", "3 / 2"], ["br-shoot-0394", "2 / 3"],
  ["br-shoot-0614", "1 / 1"], ["br-shoot-0630", "3 / 4"], ["br-shoot-0617", "2 / 3"],
  ["br-shoot-0615", "1 / 1"], ["br-shoot-0626", "3 / 4"], ["br-tel-0372", "2 / 3"],
  ["br-shoot-0627", "3 / 2"], ["br-shoot-0418", "2 / 3"], ["br-tel-0367", "2 / 3"],
  ["br-bts-605", "3 / 4"], ["br-shoot-0624", "1 / 1"], ["br-bts-613", "2 / 3"],
  ["br-shoot-0628", "3 / 4"], ["br-shoot-0616", "1 / 1"], ["br-bts-602", "2 / 3"],
  ["br-bts-612", "3 / 2"], ["br-shoot-0404", "1 / 1"], ["br-bts-607", "2 / 3"],
  ["br-tel-0373", "1 / 1"], ["br-bts-427", "3 / 4"], ["br-shoot-0634", "2 / 3"],
  ["br-shoot-0421", "2 / 3"], ["br-shoot-0629", "1 / 1"], ["br-shoot-0632", "3 / 2"],
  ["br-shoot-0431", "2 / 3"], ["br-shoot-0623", "3 / 2"], ["br-bts-425", "1 / 1"],
  ["br-tel-0364", "3 / 4"], ["br-tel-0370", "1 / 1"]
];
const BR_KAARTEN = BR_ORDE.map(([naam, ratio], i) => {
  const breedtes = [300, 240, 330, 260, 310, 230];
  const zakken = [0, 18, -16, 12, -20, 14];
  return { src: BR + naam + "-web.jpg", ratio: ratio, breed: breedtes[i % breedtes.length], zak: zakken[i % zakken.length],
    tekst: naam.indexOf("br-shoot-") === 0 ? "Blue Rivet · campaign" : "Blue Rivet · behind the scenes" };
});

/* Socialblok: de cutdowns in de formaten waarin ze ook online staan. */
const BR_SOCIAL = [
  { video: BR_VID + "br-brandfilm-9x16.mp4", ratio: "9 / 16", label: "Brand film · 9:16", terug: BR + "br-shoot-0614-web.jpg" },
  { video: BR_VID + "br-tees-9x16.mp4", ratio: "9 / 16", label: "Tees · 9:16", terug: BR + "br-shoot-0617-web.jpg" },
  { video: BR_VID + "br-sweat-9x16.mp4", ratio: "9 / 16", label: "Sweats · 9:16", terug: BR + "br-shoot-0620-web.jpg" },
  { video: BR_VID + "br-brandfilm-4x5.mp4", ratio: "4 / 5", label: "Brand film · 4:5", terug: BR + "br-shoot-0624-web.jpg" },
  { video: BR_VID + "br-tees-4x5.mp4", ratio: "4 / 5", label: "Tees · 4:5", terug: BR + "br-shoot-0628-web.jpg" },
  { video: BR_VID + "br-slim-jeans-1x1.mp4", ratio: "1 / 1", label: "Slim jeans · 1:1", terug: BR + "br-shoot-0392-web.jpg" },
  { video: BR_VID + "br-straight-jeans-1x1.mp4", ratio: "1 / 1", label: "Straight jeans · 1:1", terug: BR + "br-shoot-0430-web.jpg" },
  { video: BR_VID + "br-sweat-1x1.mp4", ratio: "1 / 1", label: "Sweats · 1:1", terug: BR + "br-shoot-0633-web.jpg" },
  { video: BR_VID + "br-tees-1x1.mp4", ratio: "1 / 1", label: "Tees · 1:1", terug: BR + "br-shoot-0419-web.jpg" },
  { video: BR_VID + "br-tees-1x1-v2.mp4", ratio: "1 / 1", label: "Tees · 1:1 alt", terug: BR + "br-shoot-0422-web.jpg" }
];

/* Socialblok: drie rijen, per kanaalformaat. In elke rij wisselt een video af
   met een foto in hetzelfde kader. */
const BR_RIJEN = [
  { label: "9:16", kader: "9 / 16", voorbeeld: [4, 1, 3], items: [
    { video: BR_VID + "br-brandfilm-9x16.mp4", label: "Brand film · 9:16", terug: BR + "br-shoot-0614-web.jpg" },
    { src: BR + "br-shoot-0617-web.jpg", label: "Campaign · 9:16" },
    { video: BR_VID + "br-tees-9x16.mp4", label: "Tees · 9:16", terug: BR + "br-shoot-0619-web.jpg" },
    { src: BR + "br-shoot-0626-web.jpg", label: "Campaign · 9:16" },
    { video: BR_VID + "br-sweat-9x16.mp4", label: "Sweats · 9:16", terug: BR + "br-shoot-0621-web.jpg" },
    { src: BR + "br-shoot-0624-web.jpg", label: "Campaign · 9:16" }
  ] },
  { label: "4:5", kader: "4 / 5", voorbeeld: [0, 1, 3], items: [
    { video: BR_VID + "br-brandfilm-4x5.mp4", label: "Brand film · 4:5", terug: BR + "br-shoot-0625-web.jpg" },
    { src: BR + "br-shoot-0628-web.jpg", label: "Campaign · 4:5" },
    { video: BR_VID + "br-tees-4x5.mp4", label: "Tees · 4:5", terug: BR + "br-shoot-0631-web.jpg" },
    { src: BR + "br-shoot-0633-web.jpg", label: "Campaign · 4:5" }
  ] },
  { label: "1:1", kader: "1 / 1", kolommen: "repeat(auto-fit,minmax(min(100%,210px),1fr))", items: [
    { video: BR_VID + "br-slim-jeans-1x1.mp4", label: "Slim jeans · 1:1", terug: BR + "br-shoot-0392-web.jpg" },
    { src: BR + "br-shoot-0418-web.jpg", label: "Campaign · 1:1" },
    { video: BR_VID + "br-straight-jeans-1x1.mp4", label: "Straight jeans · 1:1", terug: BR + "br-shoot-0430-web.jpg" },
    { src: BR + "br-shoot-0419-web.jpg", label: "Campaign · 1:1" },
    { video: BR_VID + "br-sweat-1x1.mp4", label: "Sweats · 1:1", terug: BR + "br-shoot-0633-web.jpg" },
    { src: BR + "br-shoot-0422-web.jpg", label: "Campaign · 1:1" },
    { video: BR_VID + "br-tees-1x1.mp4", label: "Tees · 1:1", terug: BR + "br-shoot-0626-web.jpg" }
  ] }
];

/* Talpa-versie van de brand film in 16:9. */
const BR_FILM_BREED = BR_VID + "br-brandfilm-16x9.mp4";
const BR_INTRO = [
  "Blue Rivet is an Amsterdam denim brand that sells premium menswear directly to the customer. One considered fit, built in quality fabric, with the wardrobe around it kept just as simple.",
  "DOLLE produced the campaign for the new collection. Casting, location and direction handled up front, production was in an industrial warehouse in Amsterdam, one shooting day that delivered the brand film, the collection film, photography and a full set of modular content, cut down per channel so the brand could run the campaign for months on a single production."
];
const brR = (s) => { const p = String(s).split("/").map(Number); return p[0] / (p[1] || 1); };
/* Onder de hero de campagnebeelden; onder de brand film de set-beelden. Alles even hoog. */
const BR_BAND_CAMPAGNE = BR_ORDE.filter(([n]) => n.indexOf("br-shoot-") === 0).map(([n, ra]) => ({ src: BR + n + "-web.jpg", r: brR(ra) }));
const BR_BAND_BTS = BR_ORDE.filter(([n]) => n.indexOf("br-shoot-") !== 0).map(([n]) => ({ src: BR + n + "-web.jpg", r: 3 / 2 }));
/* Cijfers voor het datablok; voorlopig, tot de echte aantallen binnen zijn. */
const BR_DATA = [
  { label: "Views generated", waarde: 1.8, achter: "M+" },
  { label: "Channel formats delivered", waarde: 11 },
  { label: "TV & streaming platforms", waarde: 2, achter: "+" }
];
const BR_LEVERING = ["Casting", "Location", "Concept", "Direction", "Production", "Edit", "Photography"];

/* Socialkaart: staand kader met het formaat eronder, zodat de reeks leest als
   een set kanaalformaten in plaats van losse beelden. */
function SocialKaart({ item }) {
  return (
    <div style={{ display: "grid", gap: "var(--space-2)", minWidth: 0 }}>
      <div style={{ position: "relative", aspectRatio: item.ratio, overflow: "hidden", background: "#0b1730", border: "1px solid var(--white-16, rgba(255,255,255,0.16))" }}>
        {item.video
          ? (window.CaseLoop
            ? <window.CaseLoop bron={item.video} terug={item.terug} stijl={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover", display: "block" }} />
            : <video src={item.video} autoPlay muted loop playsInline preload="metadata" style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover", display: "block" }} />)
          : <img src={item.src} alt="" loading="lazy" decoding="async" style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover", display: "block" }} />}
      </div>
      <BRKicker size="sm" style={{ display: "block", whiteSpace: "nowrap", color: "var(--text-muted)" }}>{item.label}</BRKicker>
    </div>
  );
}

/* Kanaalformaat als rij: dicht een korte strook met drie kaders, nummer, VIEW en
   tekst; open vouwt de hele reeks in dat formaat uit, de video's spelen. */
const BR_RIJ_TEKST = {
  "9:16": { naam: "Stories & Reels", kort: "Vertical cutdowns for Instagram and TikTok." },
  "4:5": { naam: "Feed", kort: "The brand film and product films in feed format, the version that carries the paid campaign." },
  "1:1": { naam: "Product films", kort: "One film per fit and per piece, for the webshop, product pages and catalogue ads." }
};
const BR_VLOEI = "1100ms cubic-bezier(.16,.84,.24,1)";
function brMaat(ref, dep) {
  const [h, setH] = React.useState(0);
  React.useEffect(() => {
    const el = ref.current; if (!el) return;
    const meet = () => setH(el.scrollHeight); meet();
    if (typeof ResizeObserver === "undefined") return;
    const ro = new ResizeObserver(meet); ro.observe(el); return () => ro.disconnect();
  }, [dep]);
  return h;
}
const BR_KANAAL = { "9:16": "Instagram Stories, Reels, TikTok", "4:5": "Instagram and Facebook feed, paid social", "1:1": "Webshop, product pages, catalogue ads" };
/* Zelfde beweging als de project files bij MSO: de kolommen schuiven, de strook
   groeit, de rest van de reeks vouwt eronder open en de tekstkolom krijgt zijn
   details. Sluiten loopt langs dezelfde weg terug. */
function BRFormaatRij({ rij, nr, open, onToggle }) {
  const t = BR_RIJ_TEKST[rij.label] || { naam: rij.label, kort: "" };
  const ref = React.useRef(null), strook = React.useRef(null), extra = React.useRef(null);
  const hExtra = brMaat(extra, open);
  const [binnen, setBinnen] = React.useState(false);
  React.useEffect(() => {
    const el = ref.current; if (!el) return;
    if (!("IntersectionObserver" in window)) { setBinnen(true); return; }
    const io = new IntersectionObserver((l) => { if (l.some((e) => e.isIntersecting)) { setBinnen(true); io.disconnect(); } }, { rootMargin: "0px 0px -18% 0px" });
    io.observe(el); return () => io.disconnect();
  }, []);
  React.useEffect(() => {
    const el = strook.current; if (!el) return;
    el.querySelectorAll("video").forEach((v) => {
      if (open) {
        if (!v.getAttribute("src")) { v.src = v.dataset.lui || v.dataset.bron; v.dataset.lui = ""; }
        v.preload = "auto";
        const p = v.play(); if (p && p.catch) p.catch(() => {});
      } else v.pause();
    });
  }, [open]);
  const idx = rij.voorbeeld || [0, 1, 2];
  const voorbeeld = idx.map((n) => rij.items[n]).filter(Boolean);
  const rest = rij.items.filter((_, n) => idx.indexOf(n) < 0);
  const hoog = "clamp(130px,12vw,190px)";
  const hStrook = brMaat(strook, open);
  const vul = (n) => ({ display: "block", clipPath: binnen ? "inset(-4px -2px -4px 0)" : "inset(-4px 100% -4px 0)", transition: "clip-path 900ms cubic-bezier(.65,0,.25,1) " + n + "ms" });
  const kolommen = open
    ? "minmax(0,2.6fr) minmax(0,0.2fr) minmax(0,0.55fr) minmax(0,1.9fr)"
    : "minmax(0,2.5fr) minmax(0,0.3fr) minmax(0,0.7fr) minmax(0,2.1fr)";
  const vouw = (h, vertraging) => ({ overflow: "hidden", maxHeight: open ? (h ? h + "px" : "1600px") : "0px", opacity: open ? 1 : 0, transform: open ? "translate3d(0,0,0)" : "translate3d(0,16px,0)", transition: "max-height " + BR_VLOEI + ", opacity " + (open ? 640 : 240) + "ms var(--ease-dolle) " + (open ? vertraging : 0) + "ms, transform " + BR_VLOEI });
  const kaart = (it, i, h) => (
    <span key={i} style={{ position: "relative", flex: "0 0 auto", display: "block", height: h, aspectRatio: rij.kader, overflow: "hidden", borderRadius: 5, background: "#0b1730", transition: "height " + BR_VLOEI }}>
      {it.video
        ? <video data-handmatig="1" data-bron={it.video} src={it.video + "#t=0.5"} poster={it.terug} autoPlay muted loop playsInline preload="metadata" style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover", display: "block" }} />
        : <img src={it.src} alt="" loading="lazy" decoding="async" style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover", display: "block" }} />}
    </span>
  );
  const media = (
    <div style={{ minWidth: 0, overflow: "hidden" }}>
      <div style={{ display: "flex", gap: "var(--space-3)", alignItems: "flex-start", clipPath: binnen ? "inset(0 0 0 0)" : "inset(0 100% 0 0)", transform: binnen ? "translate3d(0,0,0)" : "translate3d(-48px,0,0)", transition: "clip-path 1200ms cubic-bezier(.65,0,.25,1), transform 1400ms cubic-bezier(.16,.84,.24,1)" }}>
        {voorbeeld.map((it, i) => kaart(it, i, hoog))}
      </div>
    </div>
  );
  return (
    <div ref={ref} onClick={onToggle} style={{ cursor: "pointer", borderTop: "1px solid var(--white-24, rgba(255,255,255,0.24))", padding: "var(--space-4) 0" }}>
      <div data-br-rij="1" style={{ display: "grid", gridTemplateColumns: kolommen, gap: "var(--grid-gap)", alignItems: "start", transition: "grid-template-columns " + BR_VLOEI }}>
        {media}
        <BRKicker as="span" size="sm" style={{ whiteSpace: "nowrap", color: "var(--text-muted)", opacity: binnen ? 1 : 0, transition: "opacity 700ms ease 200ms" }}>{nr}</BRKicker>
        <span onClick={(e) => { e.stopPropagation(); onToggle(); }} style={{ opacity: binnen ? 1 : 0, transition: "opacity 700ms ease 300ms" }}>
          <BRButton size="sm" variant="secondary" aria-expanded={open} style={{ color: "var(--dolle-white)", borderColor: "transparent" }}>{open ? "Close" : "View"}</BRButton>
        </span>
        <div style={{ display: "grid", gap: "var(--space-2)", minWidth: 0 }}>
          <span style={{ display: "block", fontFamily: "var(--font-core)", fontWeight: "var(--weight-heading)", fontSize: "clamp(18px,1.9vw,28px)", letterSpacing: "var(--track-heading)", color: "var(--dolle-white)" }}><span style={vul(0)}>{t.naam}</span></span>
          <span style={{ display: "flex", gap: "var(--space-2)", flexWrap: "wrap" }}>
            <span style={{ display: "block", whiteSpace: "nowrap", background: "#0b1730", padding: "7px 10px 6px", fontFamily: "var(--font-label)", fontWeight: "var(--weight-label)", fontSize: "var(--size-label-sm)", letterSpacing: "var(--track-label-wide)", textTransform: "uppercase", color: "var(--text-body)" }}><span style={vul(160)}>{rij.label}</span></span>
          </span>
          <span style={{ display: "block", overflow: "hidden" }}><p style={{ margin: 0, fontSize: "var(--size-body)", lineHeight: "var(--lh-body)", maxWidth: "45ch", transform: binnen ? "translate3d(0,0,0)" : "translate3d(0,100%,0)", opacity: binnen ? 1 : 0, transition: "transform 1000ms cubic-bezier(.16,.84,.24,1) 380ms, opacity 700ms ease 380ms" }}>{t.kort}</p></span>
          <div style={vouw(hExtra, 260)} onClick={(e) => e.stopPropagation()}>
            <div ref={extra} style={{ display: "grid", gap: "var(--space-4)", paddingTop: "var(--space-4)", cursor: "default" }}>
              <dl style={{ margin: 0, display: "grid" }}>
                {[["Format", rij.label], ["Channels", BR_KANAAL[rij.label] || ""]].map(([k, w]) => (
                  <div key={k} style={{ display: "grid", gridTemplateColumns: "minmax(0,0.8fr) minmax(0,1.6fr)", gap: "var(--space-4)", borderTop: "1px solid var(--white-16, rgba(255,255,255,0.16))", padding: "var(--space-3) 0" }}>
                    <dt style={{ margin: 0 }}><BRKicker as="span" size="sm" style={{ whiteSpace: "nowrap", color: "var(--text-muted)" }}>{k}</BRKicker></dt>
                    <dd style={{ margin: 0 }}><BRKicker as="span" size="sm" style={{ color: "var(--dolle-white)" }}>{w}</BRKicker></dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
        </div>
      </div>
      {/* Eén carrousel over de volle breedte onder de rij, met de rest van de reeks. */}
      <div style={vouw(hStrook, 380)} onClick={(e) => e.stopPropagation()}>
        <div ref={strook} style={{ display: "flex", flexWrap: "nowrap", gap: "var(--space-3)", overflowX: "auto", scrollbarWidth: "none", paddingTop: "var(--space-4)", cursor: "default" }}>
          {rest.map((it, i) => (
            <span key={i} style={{ display: "block", flex: "0 0 auto", opacity: open ? 1 : 0, transform: open ? "translate3d(0,0,0)" : "translate3d(-40px,0,0)", transition: "opacity 700ms var(--ease-dolle) " + (open ? 420 + i * 70 : 0) + "ms, transform 900ms var(--ease-dolle) " + (open ? 420 + i * 70 : 0) + "ms" }}>{kaart(it, i, "clamp(200px,22vw,340px)")}</span>
          ))}
        </div>
      </div>
    </div>
  );
}

function CaseBlueRivet({ go }) {
  const Film = window.CaseFilm;
  const Rij = window.CaseRij;
  const Haarlijn = window.Haarlijn;
  const Kaarten = window.CaseKaarten;
  const [open, setOpen] = React.useState(-1);
  const [bts, setBts] = React.useState(false);
  const [formaat, setFormaat] = React.useState(-1);
  const verwant = (window.CASES || []).filter((c) => c.klant !== "Blue Rivet").slice(0, 3);
  if (!Film) return null;
  return (
    <React.Fragment>

      {/* 01 · OPENING — zelfde kop als Woonexpress, brand film groot op de achtergrond */}
      {window.CMKop ? (
        <window.CMKop titel="Blue Rivet" tags={["Media production", "Launches"]} film={BR_FILM_BREED} start={3.4} eind={12.8} uitsnede={1.16} poster={BR + "br-shoot-0614-web.jpg"} go={go} Knop={BRButton} Woorden={BRWords || null} Tag={BRTag}>
          {window.CMIntro ? <window.CMIntro tekst={BR_INTRO} beeld={
            <div style={{ display: "grid", gridTemplateColumns: "repeat(2,minmax(0,1fr))", gap: "var(--space-2)" }}>
              {[BR_HERO, BR_HERO_2].map((src, i) => window.CMOpeningBeeld
                ? <window.CMOpeningBeeld key={i} modus="groei" start={0.62} ratio="2 / 3" src={src} oorsprong={i === 0 ? "100% 50%" : "0% 50%"} />
                : <img key={i} src={src} alt="" style={{ display: "block", width: "100%", aspectRatio: "2 / 3", objectFit: "cover" }} />)}
            </div>} /> : null}
        </window.CMKop>
      ) : null}

      {/* Band met campagnebeelden direct onder de intro, alles even hoog */}
      <section className="dolle-dark" style={{ background: "var(--dolle-navy)", padding: "0 var(--page-margin) var(--space-6)" }}>
        <div style={{ maxWidth: "var(--content-max)", margin: "0 auto" }}>
          {window.BVBand ? <window.BVBand items={BR_BAND_CAMPAGNE} hoog="clamp(200px,24vw,340px)" golf /> : null}
        </div>
      </section>

      {/* 02 · BRAND FILM — klik op de film en de behind the scenes schuift eronder open */}
      <section className="dolle-dark" style={{ background: "var(--dolle-navy)", color: "var(--text-body)", padding: "var(--space-6) var(--page-margin)" }}>
        <div style={{ maxWidth: "var(--content-max)", margin: "0 auto", display: "grid", gap: "var(--space-4)" }}>
          {window.CMLijn ? <window.CMLijn /> : null}
          <h2 style={{ margin: 0, paddingTop: "var(--space-2)", fontFamily: "var(--font-core)", fontWeight: "var(--weight-heading)", fontSize: "clamp(22px,2.6vw,36px)", letterSpacing: "var(--track-heading)", color: "var(--text-heading)" }}>Brand film · Collection</h2>
          <p style={{ margin: 0, maxWidth: "52ch", fontSize: "var(--size-body)", lineHeight: "var(--lh-body)" }}>The brand film was broadcast on Talpa and ran as a campaign across streaming platforms including Videoland. A young direct-to-consumer label, placed in the same media as the established names in fashion.</p>
          <div onClickCapture={() => setBts(true)}>
            <Film bron={BR_FILM_BREED} poster={BR + "br-shoot-0614-web.jpg"} parallax />
          </div>
          <div aria-hidden={!bts} style={{ display: "grid", gridTemplateRows: bts ? "1fr" : "0fr", opacity: bts ? 1 : 0, transform: bts ? "translateY(0)" : "translateY(40px)", transition: "grid-template-rows 1100ms cubic-bezier(.16,.84,.24,1), opacity 900ms ease 200ms, transform 1100ms cubic-bezier(.16,.84,.24,1)" }}>
            <div style={{ overflow: "hidden", minHeight: 0 }}>
              <div style={{ display: "grid", gap: "var(--space-3)", paddingTop: "var(--space-4)" }}>
                <h3 style={{ margin: 0, fontFamily: "var(--font-core)", fontWeight: "var(--weight-heading)", fontSize: "clamp(19px,2vw,27px)", letterSpacing: "var(--track-heading)", color: "var(--text-heading)" }}>Behind the scenes</h3>
                {bts && window.BVBand ? <window.BVBand items={BR_BAND_BTS} hoog="clamp(220px,26vw,360px)" schuif /> : null}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 03 · PRODUCT FILMS & SOCIAL — per kanaalformaat een uitklapbare rij, zoals de project files bij MSO */}
      <section className="dolle-dark" style={{ background: "var(--dolle-navy)", color: "var(--text-body)", padding: "var(--space-6) var(--page-margin)" }}>
        <div style={{ maxWidth: "var(--content-max)", margin: "0 auto", display: "grid", gap: "var(--space-5)" }}>
          {window.CMLijn ? <window.CMLijn /> : null}
          <div style={{ display: "grid", gap: "var(--space-3)", maxWidth: "52ch", paddingTop: "var(--space-2)" }}>
            <h2 style={{ margin: 0, fontFamily: "var(--font-core)", fontWeight: "var(--weight-heading)", fontSize: "clamp(22px,2.6vw,36px)", letterSpacing: "var(--track-heading)", color: "var(--text-heading)" }}>Product films &amp; social campaign</h2>
            <p style={{ margin: 0, fontSize: "var(--size-body)", lineHeight: "var(--lh-body)" }}>With this campaign DOLLE gave Blue Rivet its online visibility, and supplied the content for both the full website launch and the campaign launch. Product films and social cutdowns delivered per channel, in the formats the brand actually posts in.</p>
          </div>
          <div style={{ display: "grid" }}>
            {/* Zelfde rij als op /cases, gespiegeld: beeld links, tekst rechts. Open zakt de strook als één carrousel onder de tekst. */}
            {window.CaseRij ? BR_RIJEN.slice().reverse().map((rij, i) => {
              const t = BR_RIJ_TEKST[rij.label] || { naam: rij.label, kort: "" };
              const idx = rij.voorbeeld || [0, 1, 2];
              const orde = idx.map((n) => rij.items[n]).concat(rij.items.filter((_, n) => idx.indexOf(n) < 0)).filter(Boolean);
              const c = { id: "br-" + rij.label, klant: t.naam, kaders: [rij.label], body: t.kort + " " + (BR_KANAAL[rij.label] ? "Channels: " + BR_KANAAL[rij.label] + "." : ""), zonderBeeld: true, mozaiek: [""],
                strook: orde.map((it) => ({ src: it.src, video: it.video, terug: it.terug, ratio: rij.kader, tekst: it.label })) };
              return <window.CaseRij key={c.id} c={c} i={i} go={go} spiegel geenKnop open={formaat === i} onToggle={() => setFormaat(formaat === i ? -1 : i)} />;
            }) : null}
            {Haarlijn ? <Haarlijn /> : null}
          </div>
        </div>
      </section>

      {/* 04 · DELIVERABLES */}
      {window.CMData ? <window.CMData kop="Deliverables" beeld={BR + "br-shoot-0625-web.jpg"} waas={0.3} cijfers={BR_DATA} Tag={BRTag} tags={BR_LEVERING} review={{ tekst: "We wanted a launch that made Blue Rivet look like it had always been there. DOLLE handled everything from casting to the final cut, and the brand film ended up on national television and Videoland. One production carried our entire launch and is still working for us today.", naam: "Name", rol: "Blue Rivet" }} /> : null}

      {/* 05 · RELATED WORK */}
      <section className="dolle-dark" style={{ background: "var(--dolle-navy)", padding: "var(--space-6) var(--page-margin)" }}>
        <div style={{ maxWidth: "var(--content-max)", margin: "0 auto", display: "grid", gap: "var(--space-4)", gridTemplateColumns: "minmax(0,1fr)" }}>
          <BRKicker style={{ display: "block", whiteSpace: "nowrap", color: "var(--text-muted)" }}>Related work</BRKicker>
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

Object.assign(window, { CaseBlueRivet });
