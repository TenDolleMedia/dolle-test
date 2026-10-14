const DS = window.DesignSystem_8f95a2;
const { Kicker, Button, Icon } = DS;
const CornerRule = DS.CornerRule || (({ children }) => children || null);
const PHOTO = "../../assets/photography/dolle-set-01.jpg";
const CIMG = "../../assets/cases/web/";

/* Placeholder-vacatures. Vervang door de echte openstaande rollen. */
const ROLES = [
  { t: "Videographer / editor", team: "Media production", type: "Full-time", plek: "Amsterdam" },
  { t: "Creative producer", team: "Launches", type: "Full-time", plek: "Amsterdam" },
  { t: "Growth marketer", team: "Growth", type: "Full-time · part-time", plek: "Amsterdam · remote" },
  { t: "AI systems builder", team: "AI systems", type: "Freelance", plek: "Remote" },
  { t: "Internship · production", team: "Media production", type: "5–6 months", plek: "Amsterdam" }
];

const HOW = [
  { n: "01", t: "Standpoint first", b: "We open with what we think, then we prove it. In the work and in the room." },
  { n: "02", t: "Made for the channel", b: "Short, rhythmic, built for the feed. Craft is knowing where the attention is." },
  { n: "03", t: "Proof in the past tense", b: "A baseline before we start, 90 days of measurement after. We only claim what we measured." },
  { n: "04", t: "One movement", b: "Produce, launch, build, grow. Everyone here touches more than one of the four." }
];

function CareerHero({ go }) {
  return (
    <section style={{ background: "var(--dolle-white)", padding: "var(--space-10) var(--page-margin) var(--space-9)" }}>
      <div style={{ maxWidth: "var(--content-max)", margin: "0 auto", display: "grid", gap: "var(--space-8)" }}>
        <div style={{ display: "grid", gridTemplateColumns: "1.3fr 1fr", gap: "var(--grid-gap)", alignItems: "end" }}>
          <div style={{ display: "grid", gap: "var(--space-5)", justifyItems: "start" }}>
            <Reveal><Kicker>Careers</Kicker></Reveal>
            <Words as="h1" text="Make brands wildly visible. With us." accent="visible" delay={100} style={{ margin: 0, fontSize: "clamp(34px,4.4vw,64px)", lineHeight: 1.06, letterSpacing: "var(--track-heading)", maxWidth: "15ch" }} />
          </div>
          <Reveal delay={500} style={{ display: "grid", gap: "var(--space-5)", justifyItems: "start" }}>
            <p className="dolle-lead" style={{ margin: 0, maxWidth: "38ch" }}>A studio in Amsterdam that produces, launches, builds and grows. Small crew, big screens, measured results.</p>
            <Button variant="link" onClick={() => document.getElementById("roles") && window.scrollTo({ top: document.getElementById("roles").getBoundingClientRect().top + window.scrollY - 96, behavior: "smooth" })}>See open roles</Button>
          </Reveal>
        </div>
        <Reveal delay={200}>
          <CornerRule corners="tl-br" size={26} inset={16}>
            <ParallaxImage src={PHOTO} speed={0.16} style={{ aspectRatio: "21 / 9", background: "#0b1730" }} />
          </CornerRule>
        </Reveal>
      </div>
    </section>
  );
}

/* Hoe we werken: vier genummerde kolommen, hairline erboven die volloopt. */
function CareerHow() {
  return (
    <section className="dolle-dark" style={{ background: "var(--dolle-navy)", padding: "var(--section-gap) var(--page-margin)" }}>
      <div style={{ maxWidth: "var(--content-max)", margin: "0 auto", display: "grid", gap: "var(--space-9)" }}>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "var(--grid-gap)", alignItems: "end" }}>
          <div style={{ display: "grid", gap: "var(--space-4)", justifyItems: "start" }}>
            <Reveal><Kicker>How we work</Kicker></Reveal>
            <Words as="h2" text="Attention moves wildly. So do we." delay={80} style={{ margin: 0, maxWidth: "16ch" }} />
          </div>
          <Reveal delay={300}><p style={{ margin: 0, color: "var(--text-body)", maxWidth: "44ch" }}>No departments, no handovers. One crew that carries a brand from baseline to measured result.</p></Reveal>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(4,minmax(0,1fr))", gap: "var(--grid-gap)" }}>
          {HOW.map((h, i) => (
            <div key={h.n} style={{ display: "grid", gap: "var(--space-4)", alignContent: "start" }}>
              <RevealRule delay={i * 120} tone="var(--white-24, rgba(255,255,255,.24))" />
              <Reveal delay={i * 120 + 200} style={{ display: "grid", gap: "var(--space-3)" }}>
                <Kicker size="sm">{h.n}</Kicker>
                <h3 style={{ margin: 0, fontSize: "var(--size-h4)" }}>{h.t}</h3>
                <p style={{ margin: 0, color: "var(--text-body)", fontSize: "var(--size-body-sm)" }}>{h.b}</p>
              </Reveal>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* Drie beelden in parallax op verschillende snelheden: de studio in beweging. */
function CareerStrip() {
  const imgs = [CIMG + "case-04.jpg", CIMG + "case-02.jpg", CIMG + "case-06.jpg"];
  return (
    <section style={{ background: "var(--dolle-white)", padding: "var(--section-gap) var(--page-margin) 0" }}>
      <div style={{ maxWidth: "var(--content-max)", margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 1.4fr 1fr", gap: "var(--grid-gap)", alignItems: "center" }}>
        {imgs.map((s, i) => (
          <Reveal key={s} delay={i * 120}>
            <ParallaxImage src={s} speed={i === 1 ? 0.06 : 0.2} style={{ aspectRatio: i === 1 ? "4 / 5" : "3 / 4", background: "#0b1730", marginTop: i === 1 ? 0 : "var(--space-9)" }} />
          </Reveal>
        ))}
      </div>
    </section>
  );
}

function RoleRow({ r, go, i }) {
  const [hover, setHover] = React.useState(false);
  return (
    <Reveal delay={i * 60} as="button" onClick={() => go("contact")} onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)}
      style={{ appearance: "none", background: "none", border: 0, borderTop: "1px solid var(--border-hairline)", width: "100%", textAlign: "left", cursor: "pointer", display: "grid", gridTemplateColumns: "1.6fr 1fr 1fr auto", gap: "var(--space-6)", alignItems: "center", padding: "var(--space-6) 0", color: "var(--text-heading)", position: "relative" }}>
      <span aria-hidden="true" style={{ position: "absolute", left: 0, top: -1, height: 1, width: "100%", background: "var(--text-heading)", transformOrigin: "left", transform: hover ? "scaleX(1)" : "scaleX(0)", transition: "transform var(--dur-frame) var(--ease-dolle)" }} />
      <span style={{ display: "flex", alignItems: "center", gap: "var(--space-4)" }}>
        <span aria-hidden="true" style={{ display: "inline-flex", width: 14, overflow: "hidden", opacity: hover ? 1 : 0, transform: hover ? "none" : "translateX(-8px)", transition: "opacity var(--dur-ui) var(--ease-dolle), transform var(--dur-frame) var(--ease-dolle)", color: "var(--text-accent)" }}>
          <svg viewBox="0 0 100 78" width="14" height="11" fill="none"><path d="M12 6 V44 H44" stroke="currentColor" strokeWidth="14" /><path d="M88 72 V34 H56" stroke="currentColor" strokeWidth="14" /></svg>
        </span>
        <span style={{ fontFamily: "var(--font-core)", fontWeight: "var(--weight-heading)", fontSize: "var(--size-h3)", letterSpacing: "var(--track-heading)", transform: hover ? "translateX(4px)" : "none", transition: "transform var(--dur-frame) var(--ease-dolle)" }}>{r.t}</span>
      </span>
      <Kicker as="span" size="sm">{r.team}</Kicker>
      <span style={{ color: "var(--text-body)", fontSize: "var(--size-body-sm)" }}>{r.type}</span>
      <span style={{ color: "var(--text-muted)", fontSize: "var(--size-body-sm)", whiteSpace: "nowrap" }}>{r.plek}</span>
    </Reveal>
  );
}

function CareerRoles({ go }) {
  return (
    <section id="roles" style={{ background: "var(--dolle-white)", padding: "var(--section-gap) var(--page-margin)" }}>
      <div style={{ maxWidth: "var(--content-max)", margin: "0 auto", display: "grid", gap: "var(--space-8)" }}>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "var(--grid-gap)", alignItems: "end" }}>
          <div style={{ display: "grid", gap: "var(--space-4)", justifyItems: "start" }}>
            <Reveal><Kicker>Open roles</Kicker></Reveal>
            <Words as="h2" text="Five seats. One crew." delay={80} style={{ margin: 0 }} />
          </div>
          <Reveal delay={300}><Kicker size="sm">{String(ROLES.length).padStart(2, "0")} open · Amsterdam</Kicker></Reveal>
        </div>
        <div style={{ display: "grid", borderBottom: "1px solid var(--border-hairline)" }}>
          {ROLES.map((r, i) => <RoleRow key={r.t} r={r} i={i} go={go} />)}
        </div>
        <Reveal style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "var(--grid-gap)", alignItems: "center", paddingTop: "var(--space-6)" }}>
          <p style={{ margin: 0, color: "var(--text-body)", maxWidth: "44ch" }}>No seat that fits? We keep room for people who make brands visible in ways we have not seen yet. Send work, not a cover letter.</p>
          <div style={{ display: "flex", gap: "var(--space-6)", alignItems: "center", justifyContent: "end" }}>
            <Button onClick={() => go("contact")}>Open application</Button>
            <a href="mailto:jobs@dolle.nl" style={{ color: "var(--text-heading)", fontSize: "var(--size-body-sm)" }}>jobs@dolle.nl</a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function Career({ go }) {
  return (
    <React.Fragment>
      <CareerHero go={go} />
      <CareerHow />
      <CareerStrip />
      <CareerRoles go={go} />
    </React.Fragment>
  );
}

Object.assign(window, { Career });
