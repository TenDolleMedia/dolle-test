const DS = window.DesignSystem_8f95a2;
const { Kicker, Frame, Badge, Tag, Tabs, Button, Card, Section, StatFrame, Icon, Input, Select, Checkbox, Dialog, Toast } = DS;
const WildlyRotator = DS.WildlyRotator || (({ size, style }) => <DS.WildlyStatement statement="WILDLY VISIBLE" size={size} style={style} />);
const CornerRule = DS.CornerRule || (({ children }) => children || null);

const ALL_CASES = [
  { id: 1, dienst: "Launches", kicker: "Launches · 2026", title: "Relaunching a brand in nine weeks", body: "From baseline to campaign, in one continuous production.", stat: "+312% reach" },
  { id: 2, dienst: "Media production", kicker: "Media production · 2025", title: "Imagery that sticks", body: "A season of strategic media, produced offline and online.", stat: "4.1M views" },
  { id: 3, dienst: "AI systems", kicker: "AI systems · 2026", title: "Content that multiplies itself", body: "A system that delivers new visibility every week.", stat: "6× output" },
  { id: 4, dienst: "Growth", kicker: "Growth · 2025", title: "From reach to revenue", body: "Channels measured, budget moved, result recorded.", stat: "+41% revenue" },
  { id: 5, dienst: "Media production", kicker: "Media production · 2026", title: "Product film for a launch", body: "One shoot day, three channels, one story.", stat: "1.8M views" },
  { id: 6, dienst: "Launches", kicker: "Launches · 2025", title: "A new brand in the market", body: "Positioning, imagery and launch campaign in one track.", stat: "+220% reach" }
];

function CaseDetail({ go }) {
  /* De aangeklikte case bepaalt de pagina; zonder keuze de eerste. */
  const lijst = window.CASES || [];
  const c = lijst.filter((x) => x.id === window.DOLLE_CASE)[0] || lijst[0] || null;
  return (
    <React.Fragment>
      <section className="dolle-dark" style={{ background: "var(--dolle-navy)", padding: "var(--space-9) var(--page-margin)" }}>
        <div style={{ maxWidth: "var(--content-max)", margin: "0 auto", display: "grid", gap: "var(--space-8)" }}>
          <button onClick={() => go("cases")} style={{ appearance: "none", background: "none", border: 0, padding: 0, cursor: "pointer", display: "flex", alignItems: "center", gap: "var(--space-2)", color: "var(--text-muted)" }}>
            <Icon name="arrow-left" size={14} /><Kicker as="span" size="sm">All cases</Kicker>
          </button>
          <div style={{ display: "grid", gridTemplateColumns: "1.2fr 1fr", gap: "var(--grid-gap)", alignItems: "end" }}>
            <div style={{ display: "grid", gap: "var(--space-5)" }}>
              <Reveal><Kicker>{c ? c.dienst + " · " + c.jaar : "Launches · 2026"}</Kicker></Reveal>
              <Words as="h1" text={c ? c.klant : "Relaunching a brand in nine weeks."} delay={100} style={{ maxWidth: "20ch" }} />
            </div>
            <div style={{ display: "grid", gap: "var(--space-4)", justifyItems: "start" }}>
              <div style={{ display: "flex", gap: "var(--space-6)", flexWrap: "wrap" }}>
                {(c ? c.kaders : ["Launch"]).map((k, i) => <Badge key={k} tone={i === 0 ? "strong" : undefined}>{k}</Badge>)}
              </div>
              <p className="dolle-lead" style={{ margin: 0 }}>{c ? c.title + " " + c.body : "A brand whose reach had stalled."}</p>
            </div>
          </div>
          <Reveal delay={220}><CornerRule corners="tl-br" size={26} inset={16} tone="strong">
            {c ? <ParallaxImage src={c.beeld} speed={0.12} style={{ aspectRatio: "16 / 9", background: "#0b1730" }} /> : <MediaPlaceholder tone="dark" height={440} label="Case imagery · 16:9" />}
          </CornerRule></Reveal>
        </div>
      </section>
      <Section kicker="The intervention" title="One production, three channels."
        intro="Nine weeks: week 1 baseline and positioning, weeks 2–5 production, weeks 6–9 rollout and measurement. One crew, one story, three channels that reinforce each other.">
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3,minmax(0,1fr))", gap: "var(--grid-gap)" }}>
          <Reveal><Card corner kicker="Starting point" title="Reach had stalled">Twelve months of flat reach, no fixed production rhythm.</Card></Reveal>
          <Reveal delay={140}><Card corner kicker="Intervention" title="Relaunch + system">New positioning, one production block, weekly rollout.</Card></Reveal>
          <Reveal delay={280}><Card corner kicker="Result" title={c ? c.stat : "+312% reach"}>{c ? c.label + "." : "Measured over the 90 days after the relaunch."}</Card></Reveal>
        </div>
      </Section>
      <section style={{ background: "var(--surface-sunk)", padding: "var(--section-gap) var(--page-margin)" }}>
        <div style={{ maxWidth: "var(--content-max)", margin: "0 auto", display: "grid", gridTemplateColumns: "1fr auto", gap: "var(--space-9)", alignItems: "center" }}>
          <Frame size={64}>
            <blockquote style={{ margin: 0, fontFamily: "var(--font-core)", fontWeight: "var(--weight-heading)", fontSize: "26px", letterSpacing: "var(--track-heading)", lineHeight: 1.3, color: "var(--text-heading)", maxWidth: "28ch" }}>
              "Visible where the attention is."
            </blockquote>
            <Kicker style={{ marginTop: "var(--space-5)" }}>Marketing lead · client</Kicker>
          </Frame>
          <StatFrame value={c ? c.stat : "+312%"} label={c ? c.label : "Reach · 90 days"} size={64} />
        </div>
      </section>
    </React.Fragment>
  );
}

Object.assign(window, { CaseDetail, ALL_CASES });
