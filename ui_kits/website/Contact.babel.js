const DS = window.DesignSystem_8f95a2;
const { Kicker, Button, Icon } = DS;
const CornerRule = DS.CornerRule || (({ children }) => children || null);
const PHOTO = "../../assets/photography/dolle-set-01.jpg";

const SERVICES_OPT = ["Media production", "Launches", "AI systems", "Growth"];

/* Veld: alleen een hairline onder, kobalt bij focus. Label boven in spaced caps. */
function Field({ label, id, multiline, type = "text", placeholder }) {
  const [focus, setFocus] = React.useState(false);
  const base = { width: "100%", background: "transparent", border: 0, borderBottom: "1px solid " + (focus ? "var(--text-accent)" : "var(--border-hairline)"), borderBottomWidth: focus ? 2 : 1, marginBottom: focus ? 0 : 1, color: "var(--text-heading)", fontFamily: "var(--font-core)", fontSize: "var(--size-body-lg)", padding: "var(--space-3) 0", outline: "none", resize: "vertical", transition: "border-color var(--dur-ui) var(--ease-dolle)" };
  return (
    <label htmlFor={id} style={{ display: "grid", gap: "var(--space-2)" }}>
      <Kicker as="span" size="sm" tone={focus ? "strong" : undefined}>{label}</Kicker>
      {multiline ? <textarea id={id} rows={2} placeholder={placeholder} style={base} onFocus={() => setFocus(true)} onBlur={() => setFocus(false)} />
        : <input id={id} type={type} placeholder={placeholder} style={base} onFocus={() => setFocus(true)} onBlur={() => setFocus(false)} />}
    </label>
  );
}

/* Diensten als knoppen: omlijnd, aangetikt vol navy. Meerdere tegelijk mogelijk. */
function Choice({ label, options, value = [], onChange }) {
  return (
    <div style={{ display: "grid", gap: "var(--space-3)" }}>
      <Kicker as="span" size="sm">{label}</Kicker>
      <div style={{ display: "flex", gap: "var(--space-3)", flexWrap: "wrap" }}>
        {options.map((o) => {
          const on = value.includes(o);
          return (
            <button key={o} type="button" aria-pressed={on} onClick={() => onChange(on ? value.filter((x) => x !== o) : value.concat(o))} style={{ appearance: "none", cursor: "pointer", height: 44, padding: "0 var(--space-4)", borderRadius: 4, border: "1px solid var(--text-heading)", background: on ? "var(--text-heading)" : "transparent", color: on ? "var(--dolle-white)" : "var(--text-heading)", fontFamily: "var(--font-label)", fontWeight: 600, fontSize: "var(--size-label)", letterSpacing: "var(--track-label)", textTransform: "uppercase", whiteSpace: "nowrap", transition: "background var(--dur-ui) var(--ease-dolle), color var(--dur-ui) var(--ease-dolle)" }}>
              {o}
            </button>
          );
        })}
      </div>
    </div>
  );
}

/* Rijst op achter een masker van onscherp naar scherp; met aan === undefined
   (gewone website) staat het gewoon in beeld en doet Reveal het werk. */
function CPlain({ children, style }) { return <div style={style}>{children}</div>; }
function COp({ aan, n = 0, children, style }) {
  if (aan === undefined) return <div style={style}>{children}</div>;
  const z = "cubic-bezier(.65,0,.15,1)";
  const d = aan ? 650 + n * 150 : 0;
  return (
    <div style={{ clipPath: aan ? "inset(-30% -6% -30% -6%)" : "inset(-30% -6% 100% -6%)", transition: "clip-path " + (aan ? 1800 : 400) + "ms " + z + " " + d + "ms" }}>
      <div style={{ ...style, transform: aan ? "translateY(0)" : "translateY(48%)", filter: aan ? "blur(0px)" : "blur(8px)", opacity: aan ? 1 : 0, transition: "transform " + (aan ? 2000 : 400) + "ms " + z + " " + d + "ms, filter " + (aan ? 1700 : 300) + "ms " + z + " " + (d + 120) + "ms, opacity " + (aan ? 1300 : 300) + "ms " + z + " " + d + "ms" }}>{children}</div>
    </div>
  );
}

function ContactForm({ compact, aan }) {
  const [sent, setSent] = React.useState(false);
  const [dienst, setDienst] = React.useState([]);
  if (sent) {
    return (
      <Reveal style={{ display: "grid", gap: "var(--space-5)", justifyItems: "start", alignContent: "start", minHeight: 420 }}>
        <Kicker>Received</Kicker>
        <h2 style={{ margin: 0, maxWidth: "16ch" }}>An answer within one working day.</h2>
        <p style={{ margin: 0, color: "var(--text-body)", maxWidth: "40ch" }}>We read every brief ourselves. Expect a reply with a first take and two slots for a call.</p>
        <Button variant="link" onClick={() => setSent(false)}>Send another</Button>
      </Reveal>
    );
  }
  return (
    <form onSubmit={(e) => {
      e.preventDefault();
      const w = (id) => { const el = document.getElementById(id); return el ? el.value : ""; };
      if (!w("c-mail")) { const el = document.getElementById("c-mail"); if (el) el.focus(); return; }
      window.dolleVerstuur && window.dolleVerstuur("Project request · " + (w("c-company") || w("c-name") || "website"), [["Name", w("c-name")], ["Company", w("c-company")], ["Email", w("c-mail")], ["Phone", w("c-phone")], ["Services", dienst.join(", ")], ["Brief", w("c-brief")]]);
      setSent(true);
    }} style={{ display: "grid", gap: compact ? "var(--space-5)" : "var(--space-7)" }}>
      <COp aan={aan} n={3} style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "var(--space-6)" }}>
        <Field id="c-name" label="Name" placeholder="First and last name" />
        <Field id="c-company" label="Company" placeholder="Brand or organisation" />
      </COp>
      <COp aan={aan} n={4} style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "var(--space-6)" }}>
        <Field id="c-mail" label="Email" type="email" placeholder="name@company.com" />
        <Field id="c-phone" label="Phone" type="tel" placeholder="Optional" />
      </COp>
      <COp aan={aan} n={5}><Choice label="Services" options={SERVICES_OPT} value={dienst} onChange={setDienst} /></COp>
      <COp aan={aan} n={6}><Field id="c-brief" label="Where do you want to become visible?" multiline placeholder="Goal, timing, channels. One or two lines will do." /></COp>
      <COp aan={aan} n={7} style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: "var(--space-6)" }}>
        <Button type="submit">Send</Button>
      </COp>
    </form>
  );
}

/* Echte link als knop: bellen en mailen werken overal, ook zonder JavaScript. */
function KnopLink({ href, children }) {
  const [over, setOver] = React.useState(false);
  return (
    <a href={href} onMouseEnter={() => setOver(true)} onMouseLeave={() => setOver(false)} style={{ display: "flex", alignItems: "center", justifyContent: "center", height: 44, borderRadius: 4, border: "1px solid var(--text-heading)", background: over ? "var(--text-heading)" : "transparent", color: over ? "var(--dolle-white)" : "var(--text-heading)", textDecoration: "none", fontFamily: "var(--font-label)", fontWeight: 600, fontSize: "var(--size-label)", letterSpacing: "var(--track-label)", textTransform: "uppercase", transition: "background var(--dur-ui) var(--ease-dolle), color var(--dur-ui) var(--ease-dolle)" }}>{children}</a>
  );
}

function ContactHero({ compact, aan }) {
  const eigen = aan !== undefined;
  const R = eigen ? CPlain : Reveal;
  const kop = { margin: 0, fontSize: "clamp(34px,4.2vw,60px)", lineHeight: 1.06, letterSpacing: "var(--track-heading)", maxWidth: "13ch" };
  return (
    <section style={{ background: "var(--dolle-white)", padding: compact ? "clamp(24px,5vh,56px) var(--page-margin)" : "var(--space-10) var(--page-margin) var(--section-gap)" }}>
      <div style={{ maxWidth: "var(--content-max)", margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 1.1fr", gap: "calc(var(--grid-gap) * 2)", alignItems: "start" }}>
        <div data-contact-kolom="1" style={{ display: "grid", gap: compact ? "var(--space-6)" : "var(--space-7)", justifyItems: "start", position: compact ? "static" : "sticky", top: "calc(var(--space-9) + 40px)" }}>
          <div style={{ display: "grid", gap: "var(--space-5)", justifyItems: "start" }}>
            {eigen ? <COp aan={aan} n={0}><Kicker>Contact</Kicker></COp> : <Reveal><Kicker>Contact</Kicker></Reveal>}
            {eigen ? <COp aan={aan} n={1}><h1 style={kop}>Tell us where you want to be <span style={{ color: "var(--text-accent)" }}>visible.</span></h1></COp> : <Words as="h1" text="Tell us where you want to be visible." accent="visible" delay={100} style={kop} />}
          </div>
          <R delay={600} style={{ display: "grid", gap: "var(--space-4)", justifyItems: "start", width: "100%" }}>
            <COp aan={aan} n={2} style={{ display: "grid", gridTemplateColumns: "minmax(0,1fr) minmax(0,1fr)", gap: "var(--space-4)", width: "100%", maxWidth: "440px" }}>
              <Button variant="secondary" block href="tel:+31651202317" style={{ borderRadius: 4, border: "1.5px solid var(--text-heading)" }}>Call</Button>
              <Button variant="secondary" block href="mailto:info@dolle.nl,info@tendollemedia.nl" style={{ borderRadius: 4, border: "1.5px solid var(--text-heading)" }}>Email</Button>
            </COp>
          </R>
        </div>
        <R delay={300}><ContactForm compact={compact} aan={aan} /></R>
      </div>
    </section>
  );
}

/* De studio: navy band, beeld met parallax, adres. */
function ContactStudio() {
  return (
    <section className="dolle-dark" style={{ background: "var(--dolle-navy)", padding: "var(--section-gap) var(--page-margin)" }}>
      <div style={{ maxWidth: "var(--content-max)", margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 1.5fr", gap: "calc(var(--grid-gap) * 1.5)", alignItems: "center" }}>
        <div style={{ display: "grid", gap: "var(--space-6)", justifyItems: "start" }}>
          <Reveal><Kicker>The studio</Kicker></Reveal>
          <Words as="h2" text="Amsterdam, on the canal." delay={80} style={{ margin: 0, maxWidth: "14ch" }} />
          <Reveal delay={260} style={{ display: "grid", gap: "var(--space-2)" }}>
            <span style={{ color: "var(--text-heading)" }}>Lijnbaansgracht 206-2</span>
            <span style={{ color: "var(--text-body)" }}>1016 XA Amsterdam</span>
            <a href="https://maps.google.com/?q=Lijnbaansgracht+206-2+Amsterdam" target="_blank" rel="noreferrer" style={{ color: "var(--text-heading)", fontSize: "var(--size-body-sm)", marginTop: "var(--space-3)" }}>Open in Maps</a>
          </Reveal>
        </div>
        <Reveal delay={200}>
          <CornerRule corners="tl-br" size={26} inset={16} tone="strong">
            <ParallaxImage src={PHOTO} speed={0.14} style={{ aspectRatio: "16 / 9", background: "#0b1730" }} />
          </CornerRule>
        </Reveal>
      </div>
    </section>
  );
}

function Contact() {
  return (
    <React.Fragment>
      <ContactHero />
      <ContactStudio />
    </React.Fragment>
  );
}

Object.assign(window, { Contact, ContactHero });
