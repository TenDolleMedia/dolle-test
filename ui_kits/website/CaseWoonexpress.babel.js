const WX_DS = window.DesignSystem_8f95a2;
const { Kicker: WXKicker, Button: WXButton } = WX_DS;
const WXWords = window.Words || (({ as = "span", text, style }) => React.createElement(as, { style: style }, text));
const WXTag = window.DolleTag || (({ children }) => React.createElement("span", null, children));

const WX = "../../assets/cases/woonexpress/";
const WX_VID = "../../assets/video/";

const WX_P = (n) => WX + "woonexpress-" + n + "-poster-web.jpg";
const WX_V = (n) => WX_VID + "woonexpress-" + n + ".mp4";

/* Band onder de intro. De kiestool (_werk/woonexpress-band-selectie.html) kan
   de volgorde overschrijven. */
const WX_BAND_STANDAARD = ["foto-still-03", "tafel-1-9x16", "see-fase-16x9", "foto-zomer-bank-02", "bank-2-product-16x9", "bank-1-model-9x16", "foto-zomer-eettafel-03", "foto-winkel-decoratie-02", "foto-still-01", "studio-social-02", "bank-3-model-16x9", "foto-bts-foto-10"];
const WX_FOTO_R = { "still-01": 1.28, "still-02": 1.07, "still-03": 1.77, "still-04": 1.79, "still-05": 1.6, "still-06": 1.78, "bts-foto-01": 0.75, "bts-foto-02": 0.75, "bts-foto-03": 0.75, "bts-foto-05": 0.75, "bts-foto-06": 0.75, "bts-foto-07": 0.75, "bts-foto-08": 0.75, "bts-foto-09": 0.75, "bts-foto-10": 0.75, "bts-foto-11": 0.75, "bts-foto-12": 0.75, "zomer-bank-04": 1.5, "zomer-bank-07": 1.378, "zomer-eettafel-02": 1.5, "zomer-eettafel-03": 1.5, "zomer-ronde-tafel-02": 1.5, "winkel-entree-01": 1.5, "winkel-gevel-01": 1.5, "winkel-gevel-02": 1.5, "winkel-gevel-04": 1.5, "winkel-slapen-01": 1.5, "winkel-slapen-03": 1.5, "winkel-slapen-04": 1.5, "winkel-tafelen-01": 1.5, "winkel-tafelen-03": 1.5, "winkel-wonen-01": 1.5, "winkel-wonen-02": 1.5, "winkel-wonen-03": 1.5, "winkel-wonen-04": 1.5, "winkel-wonen-06": 1.5, "winkel-wonen-09": 1.5 };
function wxBandItem(k) {
  if (k.indexOf("foto-") === 0) { const n = k.slice(5); return { src: WX + "woonexpress-" + n + "-web.jpg", r: WX_FOTO_R[n] || 0.667 }; }
  const staand = /9x16|studio-social/.test(k);
  return { video: WX_V(k), r: staand ? 9 / 16 : /1x1/.test(k) ? 1 : 16 / 9 };
}
function wxBandLijst() {
  let lijst = WX_BAND_STANDAARD;
  try { const s = JSON.parse(localStorage.getItem("dolle-wx-band")); if (Array.isArray(s) && s.length) lijst = s; } catch (e) {}
  return lijst.map(wxBandItem);
}

const WX_BANK_FILMS = [1, 2, 3].map((n) => ({ naam: "Sofa " + n, film: WX_V("bank-" + n + "-model-16x9"), poster: WX_P("bank-" + n + "-model-16x9") }));
const WX_BANK_STAAND = ["bank-1-model-9x16", "bank-1-product-9x16", "bank-2-model-9x16", "bank-2-product-9x16", "bank-3-model-9x16", "bank-3-product-9x16"];
/* Zomershoot: vier scènes, elk als 1:1-film met een staande productversie. */
const WX_ZOMER_R = { "bank-04": 1.5, "bank-07": 1.378, "eettafel-02": 1.5, "eettafel-03": 1.5, "ronde-tafel-02": 1.5 };
const WX_ZOMER_NAAM = { 1: "Round table", 2: "Bedroom", 3: "Sofa", 4: "Dining table" };
const WX_ZOMER_FILMS = [1, 2, 3, 4].map((n) => ({ naam: WX_ZOMER_NAAM[n], film: WX_V("zomer-scene-" + n + "-1x1"), poster: WX_P("zomer-scene-" + n + "-1x1"), kader: "2 / 3" }));
/* Per scène: de staande productfilm en de foto's uit dezelfde ruimte. */
const WX_ZOMER_SET = { 1: ["ronde-tafel-01", "ronde-tafel-02"], 2: ["slaapkamer-01", "slaapkamer-02", "slaapkamer-03"], 3: ["bank-04", "bank-01", "bank-07", "bank-02", "bank-03", "bank-05", "bank-06"], 4: ["eettafel-02", "eettafel-01", "eettafel-03"] };
function wxZomerItems(n) {
  const fotos = (WX_ZOMER_SET[n] || []).map((k, i) => {
    const r = WX_ZOMER_R[k] || 0.667;
    return { src: WX + "woonexpress-zomer-" + k + "-web.jpg", ratio: r > 1 ? "3 / 2" : "2 / 3", breed: r > 1 ? 400 : 250, zak: [18, -14, 10, -18, 14, 0][i % 6], tekst: "Summer shoot" };
  });
  const soc = { video: WX_V("zomer-scene-" + n + "-product-9x16"), terug: WX_P("zomer-scene-" + n + "-product-9x16"), ratio: "9 / 16", breed: 230, zak: 0, tekst: "Social" };
  const lijst = fotos.slice();
  lijst.splice(Math.min(1, lijst.length), 0, soc);
  return lijst;
}
const WX_ZOMER_STAAND = [1, 2, 3, 4].map((n) => "zomer-scene-" + n + "-product-9x16");
const WX_TAFEL_FILMS = [["tafel-compilatie-9x16", "Compilation"], ["tafel-1-9x16", "Table 1"], ["tafel-2-9x16", "Table 2"], ["tafel-3-9x16", "Table 3"] ].map(([k, n]) => ({ naam: n, film: WX_V(k), poster: WX_P(k), kader: "9 / 16" }));
/* Zomerfotografie: afgewisseld per ruimte, liggend en staand door elkaar. */
const WX_ZOMER_FOTO = ["bank-04", "slaapkamer-01", "eettafel-02", "bank-01", "ronde-tafel-01", "bank-07", "slaapkamer-02", "eettafel-01", "bank-02", "ronde-tafel-02", "slaapkamer-03", "bank-03", "eettafel-03", "bank-05", "bank-06"].map((k, i) => {
  const r = WX_ZOMER_R[k] || 0.667;
  return { src: WX + "woonexpress-zomer-" + k + "-web.jpg", ratio: r > 1 ? "3 / 2" : "2 / 3", breed: r > 1 ? 400 : 250, zak: [0, 18, -14, 10, -18, 14][i % 6], tekst: "Summer shoot" };
});
const WX_TAFEL_STAAND = ["tafel-1-9x16", "tafel-2-9x16", "tafel-3-9x16"];

function WXKader({ kader, src }) {
  return (
    <span style={{ position: "relative", display: "block", aspectRatio: kader, overflow: "hidden", borderRadius: 5, background: "#0b1730", minWidth: 0 }}>
      {src ? <img src={src} alt="" loading="lazy" decoding="async" style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover", display: "block" }} /> : (
        <React.Fragment>
          <svg aria-hidden="true" viewBox="0 0 52 52" width="18" height="18" fill="none" style={{ position: "absolute", left: "8%", top: "10%", color: "var(--dolle-white)" }}><path d="M6 40 V6 H40" stroke="currentColor" strokeWidth="12" /></svg>
          <svg aria-hidden="true" viewBox="0 0 52 52" width="18" height="18" fill="none" style={{ position: "absolute", right: "8%", bottom: "10%", color: "var(--dolle-white)" }}><path d="M46 12 V46 H12" stroke="currentColor" strokeWidth="12" /></svg>
        </React.Fragment>
      )}
    </span>
  );
}

/* Winkelfotografie: gevel en entree afgewisseld met de afdelingen wonen, tafelen en slapen. */
const WX_WINKEL_STAAND = { "decoratie-01": 1, "decoratie-02": 1, "gevel-03": 1, "slapen-02": 1, "slapen-05": 1, "tafelen-02": 1, "wonen-05": 1, "wonen-07": 1, "wonen-08": 1 };
const WX_WINKEL = ["gevel-04", "gevel-01", "tafelen-02", "slapen-02", "decoratie-01", "tafelen-03", "wonen-05", "wonen-08", "decoratie-02", "wonen-09"].map((k, i) => {
  const staand = !!WX_WINKEL_STAAND[k];
  return { src: WX + "woonexpress-winkel-" + k + "-web.jpg", ratio: staand ? "2 / 3" : "3 / 2", breed: staand ? 250 : 400, zak: [0, 6, -5, 4, -6, 5][i % 6], tekst: "Store photography" };
});

/* Behind the scenes: vier loops tussen de setfoto's. */
const WX_BTS_R = { "04": "9 / 16", "13": "9 / 16" };
const WX_BTS = ["06", "V2", "11", "03", "09", "V4", "01", "13", "08", "V1", "12", "05", "02", "V3", "10", "04", "07"].map((k, i) => {
  const zak = [0, 34, -26, 18, -34, 26][i % 6];
  const maat = [1, 0.82, 1.12, 0.9, 1.05, 0.86][i % 6];
  if (k[0] === "V") { const n = "0" + k.slice(1); return { video: WX_V("bts-" + n), terug: WX + "woonexpress-bts-" + n + "-poster-web.jpg", ratio: "9 / 16", breed: Math.round(340 * maat), zak, tekst: "Behind the scenes" }; }
  const r = WX_BTS_R[k] || "3 / 4";
  return { src: WX + "woonexpress-bts-foto-" + k + "-web.jpg", ratio: r, breed: Math.round((r === "9 / 16" ? 340 : 440) * maat), zak, tekst: "Behind the scenes" };
});
/* Stills per bank: de stills uit de film plus de posters van de twee 16:9-versies. */
const WX_BANK_STILL = { 1: [["01", "5 / 4"], ["05", "8 / 5"]], 2: [["03", "16 / 9"]], 3: [["02", "1 / 1"], ["04", "16 / 9"], ["06", "16 / 9"]] };
function wxBankStills(n) {
  const eigen = (WX_BANK_STILL[n] || []).map(([s, r]) => ({ src: WX + "woonexpress-still-" + s + "-web.jpg", ratio: r }));
  const posters = ["model", "product"].map((v) => ({ src: WX + "woonexpress-bank-" + n + "-" + v + "-16x9-poster-web.jpg", ratio: "16 / 9" }));
  const soc = ["model", "product"].map((v) => ({ video: WX_V("bank-" + n + "-" + v + "-9x16"), terug: WX_P("bank-" + n + "-" + v + "-9x16"), ratio: "9 / 16" }));
  const alle = eigen.concat(posters);
  return alle.map((b, i) => b.video ? { ...b, breed: 230, zak: 0, tekst: "Social · Sofa " + n } : ({ ...b, breed: b.ratio === "1 / 1" ? 300 : b.ratio === "5 / 4" ? 340 : 420, zak: [0, 4, -3, 3, -4][i % 5], tekst: "Sofa " + n }));
}
/* Stills uit de sofa-films. */
const WX_STILLS = [["01", "5 / 4"], ["03", "16 / 9"], ["02", "1 / 1"], ["04", "16 / 9"], ["05", "8 / 5"], ["06", "16 / 9"]].map(([n, r], i) => ({ src: WX + "woonexpress-still-" + n + "-web.jpg", ratio: r, breed: r === "1 / 1" ? 320 : r === "5 / 4" ? 360 : 440, zak: [0, 6, -5, 4, -6, 5][i % 6], tekst: "Film still" }));

/* Moodboard: vijf vakken, telkens wisselt één vak rustig naar een ander beeld. */
function WXMood({ beelden }) {
  const n = 5;
  const [vakken, setVakken] = React.useState(() => beelden.slice(0, n).map((src, i) => ({ src, oud: null, sleutel: i })));
  const teller = React.useRef(n);
  const vorige = React.useRef(-1);
  React.useEffect(() => {
    if (window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const t = setInterval(() => {
      setVakken((huidig) => {
        const zichtbaar = huidig.map((v) => v.src);
        const vrij = beelden.filter((b) => !zichtbaar.includes(b));
        if (!vrij.length) return huidig;
        let plek;
        do { plek = Math.floor(Math.random() * n); } while (plek === vorige.current && n > 1);
        vorige.current = plek;
        const nieuw = vrij[Math.floor(Math.random() * vrij.length)];
        teller.current += 1;
        return huidig.map((v, i) => i === plek ? { src: nieuw, oud: v.src, sleutel: teller.current } : v);
      });
    }, 2300);
    return () => clearInterval(t);
  }, [beelden]);
  const wissel = (plek) => setVakken((huidig) => {
    const zichtbaar = huidig.map((v) => v.src);
    const vrij = beelden.filter((b) => !zichtbaar.includes(b));
    if (!vrij.length) return huidig;
    vorige.current = plek;
    teller.current += 1;
    const nieuw = vrij[Math.floor(Math.random() * vrij.length)];
    return huidig.map((v, i) => i === plek ? { src: nieuw, oud: v.src, sleutel: teller.current } : v);
  });
  const plaats = [{ gridColumn: "1", gridRow: "1 / span 2" }, { gridColumn: "2", gridRow: "1" }, { gridColumn: "3", gridRow: "1" }, { gridColumn: "2 / span 2", gridRow: "2" }, { gridColumn: "4", gridRow: "1 / span 2" }];
  return (
    <div data-wx-mood="1" style={{ display: "grid", gridTemplateColumns: "minmax(0,1.6fr) minmax(0,1fr) minmax(0,1fr) minmax(0,1.1fr)", gridTemplateRows: "repeat(2, clamp(170px,17vw,290px))", gap: "var(--space-3)" }}>
      <style>{"@keyframes wxMoodIn{from{opacity:0;transform:scale(1.04)}to{opacity:1;transform:scale(1)}}@media (max-width:760px){[data-wx-mood]{grid-template-columns:repeat(2,minmax(0,1fr))!important;grid-template-rows:repeat(3,44vw)!important}[data-wx-mood]>div:nth-child(2){grid-column:1!important;grid-row:1/span 2!important}[data-wx-mood]>div:nth-child(3){grid-column:2!important;grid-row:1!important}[data-wx-mood]>div:nth-child(4){grid-column:2!important;grid-row:2!important}[data-wx-mood]>div:nth-child(5){grid-column:1/span 2!important;grid-row:3!important}[data-wx-mood]>div:nth-child(6){display:none}}"}</style>
      {vakken.map((v, i) => (
        <div key={i} onClick={() => wissel(i)} style={{ ...plaats[i], position: "relative", overflow: "hidden", borderRadius: "5px", background: "#0a1428", minWidth: 0, cursor: "pointer" }}>
          {v.oud ? <img src={v.oud} alt="" style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover", display: "block" }} /> : null}
          <img key={v.sleutel} src={v.src} alt="" loading="lazy" style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover", display: "block", animation: v.oud ? "wxMoodIn 1400ms cubic-bezier(.16,.84,.24,1) both" : "none" }} />
        </div>
      ))}
    </div>
  );
}


/* Studio shoot: in rust per set één video (versie A). Klik opent de set: A en B naast elkaar.
   Hover speelt de versie onder de muis af (de andere stopt); klik of wegscrollen sluit. */
function WXDuo() {
  const sets = [1, 2, 3];
  const [aan, setAan] = React.useState(-1);
  const [kant, setKant] = React.useState(0);
  const [geluid, setGeluid] = React.useState(false);
  const vak = React.useRef(null);
  const vids = (i) => vak.current ? [...vak.current.children[i].querySelectorAll("video")] : [];
  const stop = (i) => vids(i).forEach((v) => { v.pause(); v.muted = true; });
  React.useEffect(() => {
    if (!vak.current) return;
    sets.forEach((s, i) => { if (i !== aan) stop(i); });
    if (aan < 0) return;
    const buiten = (e) => { if (vak.current && !vak.current.contains(e.target)) setAan(-1); };
    const weg = () => { const r = vak.current && vak.current.getBoundingClientRect(); if (r && (r.bottom < 0 || r.top > window.innerHeight)) setAan(-1); };
    document.addEventListener("pointerdown", buiten, true);
    window.addEventListener("scroll", weg, { passive: true });
    return () => { document.removeEventListener("pointerdown", buiten, true); window.removeEventListener("scroll", weg); };
  }, [aan]);
  const klik = (i) => { if (aan === i) { setAan(-1); return; } setKant(-1); setAan(i); };
  const hover = (i, j) => {
    if (aan !== i) return;
    setKant(j);
    vids(i).forEach((v, k) => { if (k === j) { v.muted = !geluid; const p = v.play(); if (p && p.catch) p.catch(() => {}); } else v.pause(); });
  };
  const vloei = "900ms cubic-bezier(.16,.84,.24,1)";
  const kol = sets.map((s, i) => aan < 0 ? "minmax(0,1fr)" : i === aan ? "minmax(0,2.2fr)" : "minmax(0,0.6fr)").join(" ");
  return (
    <div ref={vak} data-wx-duo="1" style={{ display: "grid", gridTemplateColumns: kol, gap: "var(--space-4)", alignItems: "start", transition: "grid-template-columns " + vloei }}>
      {sets.map((s, i) => {
        const open = aan === i;
        return (
          <div key={s} style={{ display: "grid", gap: "var(--space-3)", minWidth: 0, opacity: aan < 0 || open ? 1 : 0.5, transition: "opacity 600ms var(--ease-dolle)" }}>
            <div style={{ display: "grid", gridTemplateColumns: open ? "minmax(0,1fr) minmax(0,1fr)" : "minmax(0,1fr) minmax(0,0fr)", columnGap: open ? 4 : 0, height: "clamp(360px,40vw,620px)", cursor: "pointer", transition: "grid-template-columns " + vloei + ", column-gap " + vloei }}>
              {["a", "b"].map((v, j) => (
                <span key={v} onClick={() => klik(i)} onMouseEnter={() => hover(i, j)} onMouseLeave={() => { if (aan === i) { vids(i)[j] && vids(i)[j].pause(); setKant(-1); } }} style={{ position: "relative", display: "block", minWidth: 0, overflow: "hidden", borderRadius: 5, background: "#0a1428", opacity: j === 0 || open ? 1 : 0, transition: "opacity 700ms var(--ease-dolle) " + (open && j ? "200ms" : "0ms") }}>
                  <video src={WX_VID + "woonexpress-studio-set" + s + "-" + v + ".mp4#t=0.8"} muted loop playsInline preload="metadata" style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover", display: "block" }} />
                  {open ? <span aria-hidden="true" style={{ position: "absolute", left: 10, bottom: 14, fontFamily: "var(--font-label)", fontSize: 10, fontWeight: 600, letterSpacing: "var(--track-label-wide)", color: "var(--dolle-white)", textShadow: "0 1px 6px rgba(0,0,0,.45)", opacity: kant === j ? 1 : 0.7, whiteSpace: "nowrap" }}>{"Version " + (j ? "B" : "A")}</span> : null}
                  {open ? <button type="button" aria-label={geluid ? "Sound off" : "Sound on"} onClick={(e) => { e.stopPropagation(); const aan = !geluid; setGeluid(aan); vids(i).forEach((x, k) => { x.muted = !(aan && k === j); if (aan && k === j && x.paused) { const pr = x.play(); if (pr && pr.catch) pr.catch(() => {}); } }); setKant(j); }} style={{ position: "absolute", right: 10, bottom: 10, width: 32, height: 32, borderRadius: 999, border: "1px solid rgba(255,255,255,0.5)", background: "rgba(16,31,60,0.45)", backdropFilter: "blur(4px)", color: "var(--dolle-white)", display: "grid", placeItems: "center", cursor: "pointer", padding: 0 }}>
                    <svg viewBox="0 0 24 24" width="15" height="15" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true"><path d="M4 9v6h4l5 4V5L8 9H4z" fill="currentColor" stroke="none" />{geluid ? <path d="M16 8.5a5 5 0 0 1 0 7M18.5 6a8.5 8.5 0 0 1 0 12" /> : <path d="M17 9l5 6M22 9l-5 6" />}</svg>
                  </button> : null}
                </span>
              ))}
            </div>
            <WXKicker size="sm" style={{ display: "block", whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis", color: open ? "var(--text-heading)" : "var(--text-muted)" }}>{"Set " + s + (open ? " · two versions" : "")}</WXKicker>
          </div>
        );
      })}
    </div>
  );
}

function WXLaag({ kop, tekst, children, geenKop, geenMasker, vanRechts, volLijn }) {
  const Lijn = window.CMLijn, Masker = window.CMMasker;
  /* vanRechts: de kop en tekst schuiven met de scroll van rechts naar hun plek. */
  const kopRef = React.useRef(null);
  const scroll = window.useCMScroll || (() => {});
  scroll(kopRef, (r, vh) => {
    if (!vanRechts || !kopRef.current) return;
    const el = kopRef.current, ouder = el.parentElement;
    const ruimte = Math.max(0, ouder.clientWidth - el.offsetWidth);
    const t = Math.max(0, Math.min(1, (vh * 1.05 - r.top) / (vh * 0.85)));
    const e = t * t * (3 - 2 * t);
    el.style.translate = ((1 - e) * ruimte).toFixed(1) + "px 0";
  }, [vanRechts]);
  const inhoud = children;
  return (
    <div style={{ display: "grid", gridTemplateColumns: "minmax(0,1fr)", minWidth: 0 }}>
    {Lijn ? (volLijn ? <Lijn basis blijf /> : <Lijn />) : <div style={{ height: 1, background: "var(--white-24, rgba(255,255,255,0.24))" }} />}
    <div style={{ display: "grid", gridTemplateColumns: "minmax(0,1fr)", minWidth: 0, gap: "var(--space-5)", paddingTop: "var(--space-6)" }}>
      <div ref={kopRef} style={{ display: geenKop ? "none" : "grid", gap: "var(--space-3)", maxWidth: "52ch", willChange: vanRechts ? "translate" : undefined }}>
        <h2 style={{ margin: 0, fontFamily: "var(--font-core)", fontWeight: "var(--weight-heading)", fontSize: "clamp(19px,2vw,27px)", letterSpacing: "var(--track-heading)", color: "var(--text-heading)" }}>{kop}</h2>
        {tekst ? <p style={{ margin: 0, fontSize: "var(--size-body)", lineHeight: "var(--lh-body)" }}>{tekst}</p> : null}
      </div>
      {inhoud}
    </div>
    </div>
  );
}

/* Ruimte voor behind the scenes onder elke campagne; beeld volgt. */
function WXBts() {
  return (
    <div style={{ display: "grid", gap: "var(--space-3)" }}>
      <WXKicker size="sm" style={{ display: "block", whiteSpace: "nowrap", color: "var(--text-muted)" }}>Behind the scenes</WXKicker>
      <div data-wx-vier="1" style={{ display: "grid", gridTemplateColumns: "repeat(4,minmax(0,1fr))", gap: "var(--space-3)" }}>
        {[0, 1, 2, 3].map((i) => <WXKader key={i} kader="4 / 5" />)}
      </div>
    </div>
  );
}

/* Hoofdfilm klein naast de tekst; bij afspelen vouwt hij open tot volle breedte
   en na pauze of afloop gaat hij terug. */
function WXOntvouw({ kop, tekst, bron, poster, onder, plak, breed }) {
  const Film = window.CaseFilm;
  const [open, setOpen] = React.useState(false);
  const [sleutel, setSleutel] = React.useState(0);
  const vak = React.useRef(null);
  /* Plak: de film staat even stil in beeld terwijl de tekst langs de film omlaag
     schuift tot de onderkant; daarna scrolt alles weer mee. */
  const weg = React.useRef(null);
  const tekstRef = React.useRef(null);
  const AF = 0.5;
  const pin = plak && typeof window !== "undefined" && window.innerWidth >= 860;
  const scroll = window.useCMScroll || (() => {});
  scroll(weg, (r, vh) => {
    if (!pin || !tekstRef.current || !vak.current) return;
    const p = Math.max(0, Math.min(1, (vh * 0.8 - r.top) / (vh * 0.6)));
    const ruimte = Math.max(0, vak.current.offsetHeight - tekstRef.current.offsetHeight);
    tekstRef.current.style.translate = "0 " + (p * ruimte).toFixed(1) + "px";
  }, [pin]);
  React.useEffect(() => {
    const el = vak.current; if (!el) return;
    const aan = () => setOpen(true);
    const uit = () => { setOpen(false); setSleutel((n) => n + 1); };
    el.addEventListener("play", aan, true);
    el.addEventListener("pause", uit, true);
    el.addEventListener("ended", uit, true);
    return () => { el.removeEventListener("play", aan, true); el.removeEventListener("pause", uit, true); el.removeEventListener("ended", uit, true); };
  }, []);
  const vloei = "900ms cubic-bezier(.16,.84,.24,1)";
  const raster = (
    <div data-wx-ontvouw="1" style={{ display: "grid", gridTemplateColumns: open ? "minmax(0,0fr) minmax(0,1fr)" : (breed ? "minmax(0,0.75fr) minmax(0,1.6fr)" : "minmax(0,1fr) minmax(0,1fr)"), columnGap: open ? 0 : "calc(var(--grid-gap) * 1.1)", alignItems: "start", transition: "grid-template-columns " + vloei + ", column-gap " + vloei }}>
      <div ref={tekstRef} style={{ display: "grid", gap: "var(--space-3)", alignContent: "start", maxWidth: "45ch", overflow: "hidden", opacity: open ? 0 : 1, transition: "opacity 420ms var(--ease-dolle)" }}>
        {kop ? <h2 style={{ margin: 0, fontFamily: "var(--font-core)", fontWeight: "var(--weight-heading)", fontSize: "clamp(19px,2vw,27px)", lineHeight: 1.1, letterSpacing: "var(--track-heading)", color: "var(--text-heading)" }}>{kop}</h2> : null}
        <p style={{ margin: 0, fontSize: "var(--size-body)", lineHeight: "var(--lh-body)" }}>{tekst}</p>
      </div>
      <div ref={vak} style={{ minWidth: 0 }}>
        {Film ? <Film key={sleutel} bron={bron} poster={poster} onderschrift={onder} watch watchSchaal={open ? 3.2 : 2} /> : null}
      </div>
    </div>
  );
  if (!pin) return raster;
  return <div ref={weg}>{raster}</div>;
}

function WXStaand({ lijst }) {
  const H = window.BVHover;
  return (
    <div data-wx-staand="1" style={{ display: "grid", gridTemplateColumns: "repeat(" + lijst.length + ",minmax(0,1fr))", gap: "var(--space-3)" }}>
      {lijst.map((k) => H ? <H key={k} bron={WX_V(k)} poster={WX_P(k)} kader="9 / 16" /> : <WXKader key={k} kader="9 / 16" src={WX_P(k)} />)}
    </div>
  );
}

/* Cijfers voor het datablok. views: vul het echte aantal in (getal), tot die tijd een streepje. */
const WX_DATA = [
  { label: "Views generated", waarde: "—" },
  { label: "Campaigns", waarde: 5 },
  { label: "Films delivered", waarde: 36 },
  { label: "Photos delivered", waarde: 52 },
];
const WX_INTRO = ["Woonexpress is a Dutch furniture chain known for a broad, on-trend and affordable range that lets everyone bring warmth and comfort into their home right away.","Since 2023, DOLLE has produced the brand's full visual output. Seasonal campaigns, collection shoots, studio and social content, store photography and internal films. One consistent look for Woonexpress, in every season and on every channel."];

function CaseWoonexpress({ go }) {
  const Film = window.CaseFilm;
  const Rij = window.CaseRij;
  const Haarlijn = window.Haarlijn;
  const [open, setOpen] = React.useState(-1);
  const [bank, setBank] = React.useState(-1);
  const [zomer, setZomer] = React.useState(-1);
  /* Klapt een blok dicht terwijl het buiten beeld is (weggescrold), dan zonder animatie: geen haperende pagina. */
  const [stil, setStil] = React.useState(false);
  /* Geen Woonexpress-eindlogo op de pagina: elke film stopt ruim voor het einde. */
  React.useEffect(() => {
    const KAP = 2.6;
    const tik = (e) => {
      const v = e.target;
      if (!v || v.tagName !== "VIDEO" || !v.duration || !/woonexpress-/.test(v.currentSrc || v.src || "")) return;
      if (v.currentTime > v.duration - KAP) { if (v.loop) v.currentTime = 0.05; else { v.pause(); v.currentTime = 0.05; v.dispatchEvent(new Event("ended")); } }
    };
    document.addEventListener("timeupdate", tik, true);
    return () => document.removeEventListener("timeupdate", tik, true);
  }, []);
  /* Header: de blauwe band schuift over de stilstaande film heen; de film
     zakt iets terug en dimt terwijl hij wordt bedekt. */
  const kopVak = React.useRef(null), kopFilm = React.useRef(null), kopWaas = React.useRef(null), kopTekst = React.useRef(null);
  React.useEffect(() => {
    if (window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    let raf = 0;
    const kopH = () => { const h = document.querySelector("header"); const n = h && h.offsetHeight ? h.offsetHeight : 92; if (kopVak.current) kopVak.current.style.setProperty("--wx-nav", n + "px"); };
    kopH();
    const tik = () => {
      raf = 0; const v = kopVak.current; if (!v) return;
      const vh = v.offsetHeight || window.innerHeight || 800;
      const volgende = v.nextElementSibling; if (!volgende) return;
      const navH = parseFloat(v.style.getPropertyValue("--wx-nav")) || 92;
      const p = Math.max(0, Math.min(1, 1 - (volgende.getBoundingClientRect().top - navH) / vh));
      if (kopFilm.current) kopFilm.current.style.transform = "translate3d(0," + (-p * vh * 0.12).toFixed(1) + "px,0) scale(" + (1 + p * 0.06).toFixed(4) + ")";
      if (kopWaas.current) kopWaas.current.style.opacity = (p * 0.55).toFixed(3);
      /* De titel staat eerst onderin de film en wordt door de blauwe band
         opgepakt: hij rijdt mee naar boven en landt bovenin de band. */
      if (kopTekst.current) { const k = kopTekst.current, off = k.offsetHeight + (parseFloat(getComputedStyle(volgende).paddingTop) || 0) + 32; const e = 1 - p; k.style.transform = "translate3d(0," + (-off * e * e * (3 - 2 * e) ).toFixed(1) + "px,0)"; }
    };
    const op = () => { if (!raf) raf = requestAnimationFrame(tik); };
    tik(); window.addEventListener("scroll", op, { passive: true, capture: true }); const rs = () => { kopH(); op(); }; window.addEventListener("resize", rs);
    return () => { window.removeEventListener("scroll", op, true); window.removeEventListener("resize", rs); if (raf) cancelAnimationFrame(raf); };
  }, []);
  /* Intro: de tekst zakt met de scroll mee en blijft staan zodra zijn
     onderkant gelijk ligt met de onderkant van de hoofdfoto. */
  const introVak = React.useRef(null), introTekst = React.useRef(null);
  React.useEffect(() => {
    let raf = 0;
    const tik = () => {
      raf = 0; const v = introVak.current, t = introTekst.current; if (!v || !t) return;
      if (window.innerWidth <= 860) { t.style.translate = "0 0"; return; }
      const navH = (document.querySelector("header") || {}).offsetHeight || 92;
      const ruimte = Math.max(0, v.offsetHeight - t.offsetHeight);
      const y = Math.max(0, Math.min(ruimte, navH + 24 - v.getBoundingClientRect().top));
      t.style.translate = "0 " + y.toFixed(1) + "px";
    };
    const op = () => { if (!raf) raf = requestAnimationFrame(tik); };
    tik(); window.addEventListener("scroll", op, { passive: true, capture: true }); window.addEventListener("resize", op);
    return () => { window.removeEventListener("scroll", op, true); window.removeEventListener("resize", op); if (raf) cancelAnimationFrame(raf); };
  }, []);
  const useT = window.useTweaks || ((d) => [d, () => {}]);
  const [t, setTweak] = useT(window.WX_TWEAKS || { kop: "beeld", opening: "masker", intro: "plak", winkel: "strook" });
  const TP = window.TweaksPanel, TR = window.TweakRadio, TS = window.TweakSection;
  const buitenBeeld = (sel) => { const el = document.querySelector(sel); if (!el) return false; const r = el.getBoundingClientRect(); return r.bottom < 0 || r.top > window.innerHeight; };
  const namen = ["Montel", "Landgoed Bergvliet", "Kiela", "Eezy"];
  const verwant = namen.map((n) => (window.CASES || []).find((c) => c.klant === n)).filter(Boolean);
  if (!Film) return null;
  const sectie = { background: "var(--dolle-navy)", color: "var(--text-body)", padding: "var(--space-6) var(--page-margin)" };
  const binnen = { maxWidth: "var(--content-max)", margin: "0 auto", display: "grid", gridTemplateColumns: "minmax(0,1fr)", gap: "var(--space-6)" };
  return (
    <React.Fragment>
      <style>{"@media (max-width:1000px){[data-cm-data]{grid-template-columns:repeat(2,minmax(0,1fr)) !important;row-gap:var(--space-7) !important}}@media (max-width:860px){[data-wx-opening],[data-wx-tafel],[data-wx-ontvouw]{grid-template-columns:minmax(0,1fr) !important}[data-wx-staand],[data-wx-vier],[data-wx-zomer]{grid-template-columns:repeat(2,minmax(0,1fr)) !important}[data-wx-collage]>div{grid-column:span 6 !important;grid-row:auto !important}[data-bv-deel],[data-wx-duo],[data-wx-bankopen]{grid-template-columns:minmax(0,1fr) !important}}"}</style>

      {/* 01 · OPENING */}
      <div style={{ position: "relative" }}>
      {t.kop !== "klassiek" ? (
        /* Kop als volle beeldvlak: film over de hele breedte, titel, lijn en
           tags onderin op een donkere verloop. */
        <section ref={kopVak} className="dolle-dark" style={{ position: "sticky", top: "var(--wx-nav, 92px)", zIndex: 0, height: "calc(100svh - var(--wx-nav, 92px))", minHeight: 420, overflow: "hidden", background: "var(--dolle-navy)" }}>
          <video ref={kopFilm} src="../../assets/video/woonexpress-see-fase-16x9.mp4" poster={WX + "woonexpress-still-03-web.jpg"} autoPlay muted loop playsInline preload="auto" style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover", display: "block", willChange: "transform" }} />
          <div ref={kopWaas} aria-hidden="true" style={{ position: "absolute", inset: 0, background: "var(--dolle-navy)", opacity: 0, pointerEvents: "none" }} />
          <div aria-hidden="true" style={{ position: "absolute", inset: 0, background: "linear-gradient(180deg, rgba(16,31,60,0.45) 0%, rgba(16,31,60,0) 22%, rgba(16,31,60,0) 48%, rgba(16,31,60,0.88) 100%)" }} />
          <div style={{ position: "absolute", left: "var(--page-margin)", right: "var(--page-margin)", top: "clamp(88px,12vh,130px)" }}>
            <div style={{ maxWidth: "var(--content-max)", margin: "0 auto" }}>
              <WXButton size="sm" variant="secondary" onClick={() => go("cases")} style={{ color: "var(--dolle-white)", borderColor: "transparent" }}>All cases</WXButton>
            </div>
          </div>
        </section>
      ) : null}
      <section className="dolle-dark" style={{ position: "relative", zIndex: 1, background: "var(--dolle-navy)", padding: (t.kop !== "klassiek" ? "var(--space-6)" : "clamp(72px,12vh,140px)") + " var(--page-margin) var(--space-6)" }}>
        {t.kop !== "klassiek" ? (
          <div ref={kopTekst} style={{ position: "relative", zIndex: 2, maxWidth: "var(--content-max)", margin: "0 auto var(--space-7)", willChange: "transform" }}>
            <WXWords as="h1" text="Woonexpress" style={{ margin: 0, paddingBottom: "var(--space-4)", fontSize: "clamp(36px,5.4vw,84px)", lineHeight: 1.02, letterSpacing: "var(--track-heading)", color: "var(--dolle-white)" }} />
            <div style={{ height: 1, background: "rgba(255,255,255,0.4)" }} />
            <div style={{ display: "flex", gap: "var(--space-2)", flexWrap: "wrap", paddingTop: "var(--space-4)" }}>
              {["Media production", "Growth", "Launches"].map((k, n) => <WXTag key={k}>{window.CMVulIn ? <window.CMVulIn vertraging={250 + n * 160}>{k}</window.CMVulIn> : k}</WXTag>)}
            </div>
          </div>
        ) : null}
        {t.kop === "klassiek" ? <React.Fragment>
        <div style={{ maxWidth: "var(--content-max)", margin: "0 auto" }}>
          <WXButton size="sm" variant="secondary" onClick={() => go("cases")} style={{ color: "var(--dolle-white)", borderColor: "transparent", marginBottom: "var(--space-5)" }}>All cases</WXButton>
          <WXWords as="h1" text="Woonexpress" style={{ margin: 0, paddingBottom: "var(--space-4)", fontSize: "clamp(30px,4.2vw,58px)", lineHeight: 1.02, letterSpacing: "var(--track-heading)" }} />
        </div>
        <div style={{ maxWidth: "var(--content-max)", margin: "0 auto", height: 1, background: "var(--white-24, rgba(255,255,255,0.24))" }} />
        <div style={{ maxWidth: "var(--content-max)", margin: "0 auto", display: "flex", gap: "var(--space-2)", flexWrap: "wrap", padding: "var(--space-4) 0 var(--space-6)" }}>
          {["Media production", "Growth", "Launches"].map((k, n) => <WXTag key={k}>{window.CMVulIn ? <window.CMVulIn vertraging={250 + n * 160}>{k}</window.CMVulIn> : k}</WXTag>)}
        </div>
        </React.Fragment> : null}
        {(() => {
          const beeld = window.CMOpeningBeeld ? <window.CMOpeningBeeld modus="groei" start={0.3} ratio="16 / 9" src={WX + "woonexpress-still-03-web.jpg"} /> : <WXKader kader="16 / 9" src={WX + "woonexpress-still-03-web.jpg"} />;
          const tekst = WX_INTRO.map((z, i) => <p key={i} className="dolle-lead" style={{ margin: 0 }}>{z}</p>);
          if (t.intro === "plak" && window.CMPlak) return <window.CMPlak beeld={beeld} tekst={tekst} />;
          return (
            <div ref={introVak} data-wx-opening="1" style={{ maxWidth: "var(--content-max)", margin: "0 auto", display: "grid", gridTemplateColumns: "minmax(0,0.75fr) minmax(0,1.6fr)", gap: "calc(var(--grid-gap) * 1.1)", alignItems: "start" }}>
              <div ref={introTekst} style={{ maxWidth: "45ch", display: "grid", gap: "var(--space-4)", willChange: "translate" }}>{tekst}</div>
              {beeld}
            </div>
          );
        })()}
      </section>
      </div>

      {/* 02 · BAND */}
      {window.BVBand ? (
        <section className="dolle-dark" style={{ background: "var(--dolle-navy)", padding: "0 var(--page-margin) var(--space-6)" }}>
          <div style={{ maxWidth: "var(--content-max)", margin: "0 auto" }}>
            {window.CMOpkomst ? <window.CMOpkomst vertraging={700}><window.BVBand items={wxBandLijst()} hoog="clamp(200px,24vw,340px)" sleep golf kap={2.6} /></window.CMOpkomst> : <window.BVBand items={wxBandLijst()} hoog="clamp(200px,24vw,340px)" sleep />}
          </div>
        </section>
      ) : null}

      {/* 03 · CAMPAGNES */}
      <section className="dolle-dark" style={sectie}>
        <div style={binnen}>
          {window.CMLijn ? <window.CMLijn /> : null}
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", gap: "var(--space-6)", flexWrap: "wrap", marginTop: "calc(var(--space-6) * -1)", paddingTop: "var(--space-6)" }}>
            <WXKicker style={{ display: "block", whiteSpace: "nowrap", color: "var(--text-muted)", fontSize: "clamp(13px,1.15vw,17px)" }}>CAMPAIGNS</WXKicker>
            <span style={{ fontFamily: "var(--font-core)", fontWeight: "var(--weight-heading)", fontSize: "clamp(18px,2.2vw,30px)", letterSpacing: "var(--track-wildly)", textTransform: "uppercase", color: "var(--text-heading)", whiteSpace: "nowrap" }}>{window.CMWildly ? <window.CMWildly /> : <React.Fragment>Wildly <span style={{ color: "var(--text-accent)" }}>visible</span></React.Fragment>}</span>
          </div>

          <WXLaag kop="Summer shoot" tekst="A summer shoot built to show the cheerful side of Woonexpress: colourful furniture and a range of models that fit what the brand stands for. ‘De leukste woonwinkel van Nederland’.">
            {window.BVDeelfilms ? <div data-wx-zomerfilms="1">{(() => { const In = window.CMInScroll || ((x) => x.children); return <In sel="[data-bv-deel]"><window.BVDeelfilms watchHover films={WX_ZOMER_FILMS} groot={1.15} klein={0.95} onAan={(n) => { setStil(n < 0 && buitenBeeld("[data-wx-zomerfilms]")); setZomer(n); if (n > -1) setTimeout(() => { const el = document.querySelector("[data-wx-zomerfilms]"); if (!el) return; const d = el.getBoundingClientRect().top - window.innerHeight * 0.18; if (Math.abs(d) > 24) window.scrollBy({ top: Math.round(d), behavior: "smooth" }); }, 120); }} /></In>; })()}</div> : null}
            <div data-deel-binnen="1" style={{ overflow: "hidden", maxHeight: zomer > -1 ? "900px" : "0px", opacity: zomer > -1 ? 1 : 0, transform: zomer > -1 ? "translate3d(0,0,0)" : "translate3d(0,28px,0)", transition: stil ? "none" : "max-height 1300ms cubic-bezier(.16,.84,.24,1), opacity 1000ms var(--ease-dolle) " + (zomer > -1 ? "260ms" : "0ms") + ", transform 1300ms cubic-bezier(.16,.84,.24,1)" }}>
              <div style={{ display: "grid", gap: "var(--space-2)", marginTop: "calc(var(--space-4) * -1)" }}>
                <WXKicker size="sm" style={{ display: "block", whiteSpace: "nowrap", color: "var(--text-muted)" }}>{zomer > -1 ? "Product & photography · " + WX_ZOMER_NAAM[zomer + 1] : "Product & photography"}</WXKicker>
                {zomer > -1 && window.CaseKaarten ? <window.CaseKaarten key={"zomer-" + zomer} items={wxZomerItems(zomer + 1).map((k) => ({ ...k, zak: Math.round((k.zak || 0) / 3) }))} tempo={0.5} schuif /> : null}
              </div>
            </div>
          </WXLaag>

          <WXLaag kop="Sofa campaign" geenKop>
            <WXOntvouw plak kop="Sofa campaign" tekst="New collections shot as a campaign rather than a catalogue bringing furniture to live. Sofas, dining tables and the rooms around them, styled and lit so a customer sees the setting before the product." bron={WX_V("see-fase-16x9")} poster={WX_P("see-fase-16x9")} onder="INTERIOR COMPILATION WOONEXPRESS" />
            {window.BVDeelfilms ? <div data-wx-bankfilms="1"><window.BVDeelfilms watchHover vloei="1300ms cubic-bezier(.45,0,.2,1)" films={WX_BANK_FILMS} onAan={(n) => { setStil(n < 0 && buitenBeeld("[data-wx-bankfilms]")); setBank(n); if (n > -1) setTimeout(() => { const el = document.querySelector("[data-wx-bankfilms]"); if (!el) return; const d = el.getBoundingClientRect().top - window.innerHeight * 0.11; if (Math.abs(d) > 24) window.scrollBy({ top: Math.round(d), behavior: "smooth" }); }, 120); }} /></div> : null}
            <div data-deel-binnen="1" style={{ overflow: "hidden", maxHeight: bank > -1 ? "1400px" : "0px", opacity: bank > -1 ? 1 : 0, transition: stil ? "none" : "max-height 1300ms cubic-bezier(.45,0,.2,1), opacity 800ms var(--ease-dolle) " + (bank > -1 ? "300ms" : "0ms") }}>
              <div style={{ display: "grid", gap: "var(--space-3)", minWidth: 0, paddingTop: "var(--space-2)" }}>
                <WXKicker size="sm" style={{ display: "block", whiteSpace: "nowrap", color: "var(--text-muted)" }}>{bank > -1 ? "Stills · Sofa " + (bank + 1) : "Stills"}</WXKicker>
                {bank > -1 && window.CaseKaarten ? <window.CaseKaarten key={"bank-" + bank} items={wxBankStills(bank + 1)} tempo={0.5} schuif /> : null}
              </div>
            </div>
          </WXLaag>

          <WXLaag kop="Dining table campaign" tekst="Three dining tables and the chairs around them, each filmed in its own setting. Together they form one compilation, with a separate film per table and one for the chairs.">
            {window.BVDeelfilms ? (window.CMVerspring ? <window.CMBinnen snelheden={[0.12, 0.06, 0.16, 0.09]}><window.BVDeelfilms watchHover films={WX_TAFEL_FILMS} groot={1.3} klein={0.8} /></window.CMBinnen> : <window.BVDeelfilms watchHover films={WX_TAFEL_FILMS} groot={1.9} klein={0.8} />) : null}
          </WXLaag>

          <WXLaag kop="Studio shoot" tekst="A creative studio shoot made to show the new Woonexpress accessories on social media in a way that stands out. Every piece had to be captured in detail, so DOLLE worked with dedicated stylists to build each set. Every setting was delivered in two versions.">
            {window.CMAccordeon ? <window.CMAccordeon items={["a", "b"].flatMap((v) => [1, 2, 3].map((s) => ({ video: WX_VID + "woonexpress-studio-set" + s + "-" + v + ".mp4#t=0.8", label: "Set " + s + " · Version " + v.toUpperCase() })))} /> : <WXDuo />}
          </WXLaag>

          <WXLaag geenMasker={t.winkel === "strook"} kop="Store photography" tekst="Photography on the shop floor across the chain, from bedroom departments to complete room settings. Images made to work in the webshop, in print and in the stores themselves.">
            {t.winkel === "strook" && window.CMStrook ? <window.CMStrook beelden={WX_WINKEL} /> : t.winkel === "rijen" && window.CMRijen ? <window.CMRijen beelden={WX_WINKEL} /> : <WXMood beelden={WX_WINKEL.map((w) => w.src)} />}
          </WXLaag>

          <WXLaag kop="Behind the scenes" tekst="The sets built in the studio for the sofa and dining campaigns, with the crew for film and photography working side by side.">
            {window.CaseKaarten ? <window.CaseKaarten items={WX_BTS} tempo={0.5} schuif /> : null}
          </WXLaag>

        </div>
      </section>

      {/* 03 · DELIVERABLES */}
      {window.CMData ? <window.CMData kop="Deliverables" beeld={WX + "woonexpress-winkel-gevel-04-web.jpg"} waas={0.42} Tag={WXTag} cijfers={WX_DATA} review={{ tekst: "DOLLE has been our production partner for three years and understands our brand completely. They know our stores, our ranges and the tone we want to strike, so every campaign feels like Woonexpress from the first frame. Quick to switch, reliable on set and always a step ahead of the season.", naam: "Nicolien Mastbroek", rol: "Woonexpress" }} tags={["Concept", "Styling", "Direction", "Production", "Edit", "Photography"]} /> : null}

      {/* 04 · RELATED WORK */}
      <section className="dolle-dark" style={{ background: "var(--dolle-navy)", padding: "var(--space-6) var(--page-margin)" }}>
        <div style={{ maxWidth: "var(--content-max)", margin: "0 auto", display: "grid", gap: "var(--space-4)", gridTemplateColumns: "minmax(0,1fr)" }}>
          <WXKicker style={{ display: "block", whiteSpace: "nowrap", color: "var(--text-muted)" }}>Related work</WXKicker>
          <div style={{ display: "grid", gridTemplateColumns: "minmax(0,1fr)" }}>
            {Rij ? verwant.map((c, i) => (
              <Rij key={c.id} c={c} i={i} go={go} open={open === c.id} onToggle={() => setOpen(open === c.id ? -1 : c.id)} />
            )) : null}
            {Haarlijn ? <Haarlijn /> : null}
          </div>
        </div>
      </section>

      {window.HomeConversie ? <window.HomeConversie go={go} tone="dark" /> : null}
      {TP && TR ? (
        <TP>
          {TS ? <TS label="Woonexpress" /> : null}
          <TR label="Header" value={t.kop || "beeld"} options={["beeld", "klassiek"]} onChange={(v) => setTweak("kop", v)} />
          <TR label="Intro" value={t.intro} options={["plak", "vast"]} onChange={(v) => setTweak("intro", v)} />
          <TR label="Store photos" value={t.winkel} options={["strook", "rijen", "mood"]} onChange={(v) => setTweak("winkel", v)} />
        </TP>
      ) : null}
    </React.Fragment>
  );
}

Object.assign(window, { CaseWoonexpress, WXLaag, WXOntvouw, WXKader });
