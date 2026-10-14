/* PATROON-LAB — dezelfde schuifregelaars als in het losse lab, maar dan over de
   echte hero. Alleen zichtbaar met ?lab in de URL; de stand wordt in de browser
   bewaard, zodat een gekozen set instellingen een herlading overleeft. */
const LAB_SLEUTEL = "dolle-dissolve-cfg-v3";
const LAB_VELDEN = [
  { k: "navyFill", label: "Navy-vulling omhoog", min: 0, max: 110, step: 1, eenheid: "vh" },
  { k: "cols", label: "Cellen breed", min: 0, max: 260, step: 1, eenheid: "" },
  { k: "cell", label: "Celgrootte (bij 0 cellen breed)", min: 6, max: 40, step: 1, eenheid: "px" },
  { k: "block", label: "Blokgrootte in cellen", min: 1, max: 6, step: 1, eenheid: "" },
  { k: "stroke", label: "Lijndikte van de schakels", min: 2, max: 30, step: 1, eenheid: "%" },
  { k: "arm", label: "Lijnlengte in de schakel", min: 20, max: 100, step: 1, eenheid: "%" },
  { k: "fill", label: "Merkgrootte in cel", min: 40, max: 100, step: 1, eenheid: "%" },
  { k: "band", label: "Bandbreedte", min: 4, max: 60, step: 1, eenheid: "%" },
  { k: "speed", label: "Vulsnelheid van de cel", min: 4, max: 60, step: 1, eenheid: "%" },
  { k: "jitter", label: "Willekeur", min: 0, max: 60, step: 1, eenheid: "%" },
  { k: "lead", label: "Voorsprong merk op vulling", min: 0, max: 60, step: 1, eenheid: "%" },
  { k: "base", label: "Basispatroon over foto", min: 0, max: 60, step: 1, eenheid: "%" },
  { k: "shrinkAt", label: "Krimppunt na de omslag", min: -50, max: 40, step: 1, eenheid: "%" },
  { k: "minScale", label: "Minimale merkgrootte", min: 10, max: 100, step: 1, eenheid: "%" },
  { k: "preWhite", label: "Witte voorschijn", min: 0, max: 100, step: 1, eenheid: "%" },
  { k: "postWhite", label: "Witte naschijn", min: 0, max: 100, step: 1, eenheid: "%" },
  { k: "tail", label: "Lengte naschijn", min: 5, max: 150, step: 1, eenheid: "%" },
  { k: "toNavy", label: "Kleur naar navy", min: 0, max: 100, step: 1, eenheid: "%" },
  { k: "flipAt", label: "Omslagpunt (bij draaien)", min: 0, max: 100, step: 1, eenheid: "%" },
  { k: "flipDur", label: "Omslagduur", min: 2, max: 60, step: 1, eenheid: "%" }
];

function LabSchuif({ veld, waarde, zet }) {
  return (
    <label style={{ display: "grid", gap: "6px" }}>
      <span style={{ display: "flex", justifyContent: "space-between", gap: "12px", fontSize: "11px", color: "rgba(255,255,255,0.78)" }}>
        {veld.label}<b style={{ color: "#5B8CFF", fontWeight: 600 }}>{waarde}{veld.eenheid}</b>
      </span>
      <input type="range" min={veld.min} max={veld.max} step={veld.step} value={waarde}
        onChange={(e) => zet(veld.k, Number(e.target.value))} style={{ width: "100%", accentColor: "#2F63FF" }} />
    </label>
  );
}

function DissolveLab({ cfg, setCfg, sluit, sleutel, titel, links }) {
  const SL = sleutel || LAB_SLEUTEL;
  const basis = window.HERO_CFG || {};
  const waarden = Object.assign({}, basis, cfg);
  const zet = (k, v) => {
    const nieuw = Object.assign({}, cfg, { [k]: v });
    setCfg(nieuw);
    try { window.localStorage.setItem(SL, JSON.stringify(nieuw)); } catch (e) { /* geen opslag */ }
  };
  const zetTekst = (k, v) => {
    const nieuw = Object.assign({}, cfg, { [k]: v });
    setCfg(nieuw);
    try { window.localStorage.setItem(LAB_SLEUTEL, JSON.stringify(nieuw)); } catch (e) { /* geen opslag */ }
  };
  /* Buiten de hero renderen: die sectie maakt een eigen stapelcontext, dus een
     paneel daarbinnen blijft onder de navigatie hangen. */
  return ReactDOM.createPortal(
    <aside style={{ position: "fixed", top: "12px", right: links ? "auto" : "12px", left: links ? "12px" : "auto", bottom: "12px", width: "290px", zIndex: 200, pointerEvents: "auto", overflowY: "auto", padding: "14px", display: "grid", gap: "12px", alignContent: "start", background: "rgba(9,17,34,0.94)", border: "1px solid rgba(255,255,255,0.16)", backdropFilter: "blur(6px)", fontFamily: "var(--font-label)", color: "var(--dolle-white)" }}>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", gap: "10px" }}>
        <span style={{ fontSize: "10px", letterSpacing: "0.22em", textTransform: "uppercase", color: "rgba(255,255,255,0.6)" }}>{titel || "Patroon-lab"}</span>
        <button type="button" onClick={sluit} aria-label="Sluit het lab" style={{ appearance: "none", cursor: "pointer", background: "none", border: 0, color: "rgba(255,255,255,0.6)", fontSize: "14px", lineHeight: 1, padding: "2px 4px" }}>×</button>
      </div>
      {LAB_VELDEN.filter((v) => v.k !== "navyFill" || !sleutel).map((v) => <LabSchuif key={v.k} veld={v} waarde={waarden[v.k]} zet={zet} />)}
      <label style={{ display: "grid", gap: "6px", fontSize: "11px", color: "rgba(255,255,255,0.78)" }}>
        Opbouwrichting
        <select value={waarden.direction} onChange={(e) => zetTekst("direction", e.target.value)} style={{ background: "#101F3C", color: "#fff", border: "1px solid rgba(255,255,255,0.24)", padding: "6px" }}>
          <option value="up">van onder naar boven</option>
          <option value="down">van boven naar onder</option>
          <option value="right">van links naar rechts</option>
          <option value="diag">diagonaal</option>
          <option value="radial">vanuit het midden</option>
        </select>
      </label>
      <label style={{ display: "grid", gap: "6px", fontSize: "11px", color: "rgba(255,255,255,0.78)" }}>
        Merkvariant
        <select value={waarden.variant} onChange={(e) => zetTekst("variant", e.target.value)} style={{ background: "#101F3C", color: "#fff", border: "1px solid rgba(255,255,255,0.24)", padding: "6px" }}>
          <option value="flip">schakel die omklapt naar frame</option>
          <option value="logo">schakel</option>
          <option value="frame">frame</option>
        </select>
      </label>
      <button type="button" onClick={() => { try { window.localStorage.removeItem(SL); } catch (e) {} setCfg({}); }}
        style={{ appearance: "none", cursor: "pointer", padding: "10px", background: "transparent", color: "var(--dolle-white)", border: "1px solid rgba(255,255,255,0.24)", fontSize: "10px", letterSpacing: "0.18em", textTransform: "uppercase" }}>Reset instellingen</button>
      <button type="button" onClick={() => { try { navigator.clipboard.writeText(JSON.stringify(waarden, null, 2)); } catch (e) {} }}
        style={{ appearance: "none", cursor: "pointer", padding: "10px", background: "var(--dolle-white)", color: "#101F3C", border: 0, fontSize: "10px", letterSpacing: "0.18em", textTransform: "uppercase" }}>Kopieer instellingen</button>
    </aside>,
    document.body
  );
}

function labAan() {
  if (typeof window === "undefined") return false;
  return /(\?|&)lab\b/.test(window.location.search) || window.location.hash === "#lab";
}

function labStand(sleutel) {
  const SL = sleutel || LAB_SLEUTEL;
  try {
    /* Nog geen v2-stand? Dan de oude sleutel eenmalig overnemen; het klemmen
       hieronder brengt afwijkende waarden binnen het nieuwe bereik. */
    let rauw = window.localStorage.getItem(SL);
    let overnemen = false;
    /* Bewust geen oude sleutels meer overnemen: de vastgelegde stand in HERO_CFG
       is het uitgangspunt totdat er opnieuw geschoven wordt. */
    const o = rauw ? JSON.parse(rauw) : null;
    if (!o || typeof o !== "object") return {};
    /* Een opgeslagen stand kan uit een oudere set regelaars komen: klem elke
       waarde binnen het bereik dat het veld nu heeft. */
    const schoon = {};
    for (const k in o) {
      const veld = LAB_VELDEN.filter((v) => v.k === k)[0];
      schoon[k] = veld && typeof o[k] === "number"
        ? Math.min(veld.max, Math.max(veld.min, o[k]))
        : o[k];
    }
    if (overnemen) { try { window.localStorage.setItem(SL, JSON.stringify(schoon)); } catch (e) { /* geen opslag */ } }
    return schoon;
  } catch (e) { return {}; }
}

Object.assign(window, { DissolveLab, labAan, labStand });
