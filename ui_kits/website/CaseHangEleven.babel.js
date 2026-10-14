const H11_DS = window.DesignSystem_8f95a2;
const { Kicker: H11Kicker, Tag: H11Tag, Button: H11Button } = H11_DS;
const H11Words = window.Words || (({ as = "span", text, style }) => React.createElement(as, { style: style }, text));

const H11 = "../../assets/cases/hangeleven/";
const H11_VID = "../../assets/video/";
const H11_KOLOMGAT = "calc(var(--grid-gap) * 1.1)";

/* Behind the scenes. De volgorde komt uit de kiestool (_werk/hangeleven-bts-selectie.html)
   als die een selectie heeft bewaard; anders deze standaard. Loops krijgen een
   startbeeld uit de loop zelf, zodat ze direct zichtbaar zijn. */
const H11_BTS_STANDAARD = ["f02", "v01", "gevel", "f03", "v03", "f05", "v02", "f06", "f10", "v05", "f08", "v06"];
function h11BtsItem(k, i) {
  const zak = [0, 18, -14, 10, -18, 14][i % 6];
  if (k === "gevel") return { src: H11 + "hangeleven-gevel-web.jpg", ratio: "900 / 524", breed: 420, zak: zak, tekst: "Hang Eleven · Haarlemmerdijk" };
  const nr = k.slice(1);
  if (k[0] === "s") return { src: H11 + "hangeleven-still-" + nr + "-web.jpg", ratio: "16 / 10", breed: 380, zak: zak, tekst: "Store film · still" };
  if (k[0] === "v") return { video: H11_VID + "hangeleven-bts-" + nr + ".mp4", terug: H11 + "hangeleven-bts-" + nr + "-poster-web.jpg", ratio: "9 / 16", breed: 210, zak: zak, tekst: "Behind the scenes" };
  const breed = nr === "11" || nr === "12";
  return { src: H11 + "hangeleven-bts-" + nr + "-web.jpg", ratio: breed ? "3 / 4" : "9 / 16", breed: breed ? 280 : 220, zak: zak, tekst: "Behind the scenes" };
}
function h11BtsLijst() {
  let lijst = H11_BTS_STANDAARD;
  try { const s = JSON.parse(localStorage.getItem("dolle-h11-bts")); if (Array.isArray(s) && s.length) lijst = s; } catch (e) {}
  return lijst.map(h11BtsItem);
}

/* Band onder de intro: stills en loops uit de productie door elkaar. */
const H11_BAND_STANDAARD = ["store", "f10", "s07", "s03", "v08", "f06", "s06", "f07", "v02"];
const H11_STILL_R = { "01": 1.728, "02": 1.784, "03": 1.587, "04": 1.537, "05": 1.651, "06": 1.595, "07": 1.78 };
function h11BandItem(k) {
  if (k === "gevel") return { src: H11 + "hangeleven-gevel-web.jpg", r: 900 / 524 };
  if (k === "store") return { video: H11_VID + "hangeleven-fs7-16x9.mp4", r: 16 / 9 };
  if (k === "zw01") return { src: H11 + "hangeleven-bts-01-zw-web.jpg", r: 9 / 16 };
  const nr = k.slice(1);
  if (k[0] === "s") return { src: H11 + "hangeleven-still-" + nr + "-web.jpg", r: H11_STILL_R[nr] || 16 / 9 };
  if (k[0] === "v") return { video: H11_VID + "hangeleven-bts-" + nr + ".mp4", r: 9 / 16 };
  return { src: H11 + "hangeleven-bts-" + nr + "-web.jpg", r: nr === "11" || nr === "12" ? 3 / 4 : 9 / 16 };
}
function h11BandLijst() {
  let lijst = H11_BAND_STANDAARD;
  try { const s = JSON.parse(localStorage.getItem("dolle-h11-band")); if (Array.isArray(s) && s.length) lijst = s; } catch (x) {}
  if (lijst[0] !== "store") lijst = ["store"].concat(lijst.filter((k) => k !== "store"));
  return lijst.map(h11BandItem);
}
const H11_INTRO = [
  "Hang Eleven is an Amsterdam lifestyle brand built on adventure, freedom and style. What began with surf and sun has grown into a full label of everyday essentials in its own designs, sold online across the country and worn all year round.",
  "The store on the Haarlemmerdijk gave the brand its own address in Amsterdam. DOLLE produced the film that announced the store opening: a scripted FPV flight through the whole store, cut down into shorts that carried the opening across social."
];
/* Cijfers voor het datablok; voorlopig, tot de echte aantallen binnen zijn. */
const H11_DATA = [
  { label: "Views generated", waarde: 320, achter: "K+" },
  { label: "Social shorts delivered", waarde: 8 },
  { label: "Single FPV take", waarde: 1 }
];
const H11_FILMS = [
  { naam: "Store film", film: H11_VID + "hangeleven-store-film-16x9.mp4", poster: H11 + "hangeleven-store-film-16x9-poster-web.jpg" },
  { naam: "FPV", film: H11_VID + "hangeleven-fpv-1x1.mp4", poster: H11 + "hangeleven-still-01-web.jpg" },
  { naam: "Store details", film: H11_VID + "hangeleven-fs7-16x9.mp4", poster: H11 + "hangeleven-fs7-16x9-poster-web.jpg" }
];

/* Beeld volgt; tot die tijd lege kaders met alleen de hoekmarkeringen. */
function H11Kader({ kader = "16 / 9", src }) {
  return (
    <span style={{ position: "relative", display: "block", aspectRatio: kader, overflow: "hidden", background: "#0b1730", borderRadius: 5, minWidth: 0 }}>
      {src ? <img src={src} alt="" loading="lazy" decoding="async" style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover", display: "block" }} /> : (
        <React.Fragment>
          <svg aria-hidden="true" viewBox="0 0 52 52" width="18" height="18" fill="none" style={{ position: "absolute", left: "8%", top: "10%", color: "var(--dolle-white)" }}><path d="M6 40 V6 H40" stroke="currentColor" strokeWidth="12" /></svg>
          <svg aria-hidden="true" viewBox="0 0 52 52" width="18" height="18" fill="none" style={{ position: "absolute", right: "8%", bottom: "10%", color: "var(--dolle-white)" }}><path d="M46 12 V46 H12" stroke="currentColor" strokeWidth="12" /></svg>
        </React.Fragment>
      )}
    </span>
  );
}

/* Hover speelt stil; klik speelt vanaf het begin met geluid en bediening. */
function H11Klik({ bron, poster, kader, onder }) {
  const ref = React.useRef(null);
  const [actief, setActief] = React.useState(false);
  React.useEffect(() => {
    const stop = (e) => { const el = ref.current; if (el && e.detail !== el) { el.muted = true; el.controls = false; el.pause(); setActief(false); } };
    window.addEventListener("h11-geluid", stop);
    return () => window.removeEventListener("h11-geluid", stop);
  }, []);
  const aan = () => { const el = ref.current; if (el && !actief) { el.muted = true; el.play().catch(() => {}); } };
  const uit = () => { const el = ref.current; if (el && !actief) el.pause(); };
  const klik = () => {
    const el = ref.current; if (!el || actief) return;
    window.dispatchEvent(new CustomEvent("h11-geluid", { detail: el }));
    el.currentTime = 0; el.muted = false; el.controls = true; el.loop = false;
    el.play().catch(() => {});
    el.onended = () => { el.controls = false; el.muted = true; el.loop = true; setActief(false); };
    setActief(true);
  };
  return (
    <div style={{ display: "grid", gap: "var(--space-3)", minWidth: 0, alignContent: "end" }}>
      <span onMouseEnter={aan} onMouseLeave={uit} onClick={klik} style={{ position: "relative", display: "block", aspectRatio: kader, overflow: "hidden", borderRadius: 5, background: "#0b1730", cursor: actief ? "default" : "pointer" }}>
        <video ref={ref} src={bron} poster={poster} muted loop playsInline preload="none" style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover", display: "block" }} />
      </span>
      {onder ? <H11Kicker size="sm" style={{ color: "var(--text-muted)" }}>{onder}</H11Kicker> : null}
    </div>
  );
}

/* Drie even grote 16:9-kaders. Speelt er een, dan schuiven de andere twee weg
   en klapt die film uit over de volle breedte (de FPV als groot vierkant in het
   midden). Pauze of einde loopt dezelfde weg terug. */
function H11FilmRij({ Film }) {
  const [aan, setAan] = React.useState(-1);
  const vakken = [React.useRef(null), React.useRef(null), React.useRef(null)];
  React.useEffect(() => {
    const weg = vakken.map((ref, i) => {
      const el = ref.current; if (!el) return () => {};
      const speel = () => { setAan(i); setTimeout(() => { const r = el.getBoundingClientRect(); const d = r.top + r.height / 2 - window.innerHeight / 2; if (Math.abs(d) > 20) window.scrollBy({ top: Math.round(d), behavior: "smooth" }); }, 1450); };
      const stop = () => setAan((n) => (n === i ? -1 : n));
      el.addEventListener("play", speel, true); el.addEventListener("pause", stop, true); el.addEventListener("ended", stop, true);
      return () => { el.removeEventListener("play", speel, true); el.removeEventListener("pause", stop, true); el.removeEventListener("ended", stop, true); };
    });
    return () => weg.forEach((f) => f());
  }, []);
  /* Zachte, lange curve; ook de hoogte (16:9 naar vierkant) loopt mee in plaats van te springen. */
  const vloei = "1400ms cubic-bezier(.22,.8,.24,1)";
  const labels = ["Store film", "FPV", "Store details"];
  const kol = aan < 0 ? "repeat(3,minmax(0,1fr))" : [0, 1, 2].map((i) => (i === aan ? "minmax(0,1.8fr)" : "minmax(0,0.6fr)")).join(" ");
  return (
    <div data-bv-deel="1" style={{ display: "grid", gridTemplateColumns: kol, columnGap: "var(--space-3)", alignItems: "start", transition: "grid-template-columns " + vloei + ", column-gap " + vloei }}>
      {H11_FILMS.map((f, i) => {
        const open = aan === i, dicht = aan >= 0 && !open;
        const vierkant = i === 1 && open;
        return (
          <div key={f.naam} ref={vakken[i]} style={{ display: "grid", gap: "var(--space-2)", minWidth: 0, overflow: "hidden", justifyItems: "center", opacity: dicht ? 0.45 : 1, transition: "opacity 1000ms ease" }}>
            <div style={{ width: "100%", containerType: "inline-size", display: "grid", justifyItems: "center" }}>
              <div style={{ width: vierkant ? "min(100cqw, 54vh)" : "100cqw", height: vierkant ? "min(100cqw, 54vh)" : "56.25cqw", transition: "width " + vloei + ", height " + vloei }}>
                <Film bron={f.film} poster={f.poster} vul watch watchSchaal={open ? 2.8 : 2.4} />
              </div>
            </div>
            <H11Kicker size="sm" style={{ color: "var(--text-muted)", justifySelf: "start", whiteSpace: "nowrap" }}>{labels[i]}</H11Kicker>
          </div>
        );
      })}
    </div>
  );
}

function CaseHangEleven({ go }) {
  const Film = window.CaseFilm;
  const Rij = window.CaseRij;
  const Haarlijn = window.Haarlijn;
  const [open, setOpen] = React.useState(-1);
  const namen = ["Piet Klerkx", "Blue Rivet", "Kiela", "Eezy"];
  const verwant = namen.slice(0, 3).map((n) => (window.CASES || []).find((c) => c.klant === n)).filter(Boolean);
  if (!Film) return null;
  const sectie = { background: "var(--dolle-navy)", color: "var(--text-body)", padding: "var(--space-6) var(--page-margin)" };
  const binnen = { maxWidth: "var(--content-max)", margin: "0 auto", display: "grid", gap: "var(--space-5)" };
  const naad = { backgroundImage: "linear-gradient(rgba(255,255,255,0.24), rgba(255,255,255,0.24))", backgroundRepeat: "no-repeat", backgroundPosition: "0 0", backgroundSize: "var(--lijn, 0%) 1px", paddingTop: "var(--space-6)" };
  return (
    <React.Fragment>

      {/* 01 · OPENING — store film op de achtergrond, vanaf het punt waar het logo uit beeld is */}
      {window.CMKop ? (
        <window.CMKop titel="Hang Eleven" tags={["Media production", "Store film", "FPV"]} film={H11_VID + "hangeleven-store-film-16x9.mp4"} start={2.3} eind={27.5} reserve={[H11_VID + "hangeleven-fs7-16x9.mp4"]} poster={H11 + "hangeleven-store-film-16x9-poster-web.jpg"} go={go} Knop={H11Button} Woorden={window.Words || null} Tag={window.DolleTag || H11Tag}>
          {window.CMIntro ? <window.CMIntro tekst={H11_INTRO} beeld={window.CMOpeningBeeld ? <window.CMOpeningBeeld modus="groei" ratio="4 / 5" src={H11 + "hangeleven-opening-web.jpg"} /> : null} /> : null}
        </window.CMKop>
      ) : null}

      {/* BAND */}
      {window.BVBand ? (
        <section className="dolle-dark" style={{ background: "var(--dolle-navy)", padding: "0 var(--page-margin) var(--space-6)" }}>
          <div style={{ maxWidth: "var(--content-max)", margin: "0 auto" }}>
            <window.BVBand items={h11BandLijst()} hoog="clamp(200px,24vw,340px)" sleep schuif />
          </div>
        </section>
      ) : null}

      {/* 02 · STORE FILM */}
      <section className="dolle-dark" style={sectie}>
        <div style={{ ...binnen, ...naad }}>
          <h2 style={{ margin: 0, fontFamily: "var(--font-core)", fontWeight: "var(--weight-heading)", fontSize: "clamp(22px,2.6vw,36px)", letterSpacing: "var(--track-heading)", color: "var(--text-heading)" }}>Store film &amp; FPV</h2>
          <H11FilmRij Film={Film} />
          <style>{"@media (max-width:760px){[data-bv-deel]{grid-template-columns:minmax(0,1fr) !important}}"}</style>
        </div>
      </section>

      {/* 04 · DELIVERABLES */}
      {window.CMData ? <window.CMData kop="Deliverables" beeld={H11 + "hangeleven-still-02-web.jpg"} waas={0.42} cijfers={H11_DATA} Tag={window.DolleTag || H11Tag} tags={["Concept", "FPV", "Direction", "Production", "Edit"]} review={{ tekst: "Opening our own store in Amsterdam was a big step, and DOLLE made it feel like one. The FPV flight through the store captured exactly who we are, and the shorts kept the opening alive on our socials for weeks. People still walk in and tell us they saw the film.", naam: "Name", rol: "Hang Eleven" }} /> : null}

      {/* 05 · RELATED WORK */}
      <section className="dolle-dark" style={{ background: "var(--dolle-navy)", padding: "var(--space-6) var(--page-margin)" }}>
        <div style={{ maxWidth: "var(--content-max)", margin: "0 auto", display: "grid", gap: "var(--space-4)", gridTemplateColumns: "minmax(0,1fr)" }}>
          <H11Kicker style={{ display: "block", whiteSpace: "nowrap", color: "var(--text-muted)" }}>Related work</H11Kicker>
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

window.CaseHangEleven = CaseHangEleven;
