/* MOTION — drie bouwstenen voor de site.
   Intro: de merkbeweging als opening (dicht → open → frame → schakel sluit op het open merk → gordijn omhoog).
   Reveal / Words: tekst die bij scrollen in beeld komt (masker per woord of regel, geen stuiter).
   Parallax: beeld dat trager meebeweegt dan de pagina. Alles respecteert prefers-reduced-motion. */
const REDUCE = typeof window !== "undefined" && window.matchMedia ? window.matchMedia("(prefers-reduced-motion: reduce)").matches : false;
const EASE = "cubic-bezier(.16,.84,.24,1)";

function useInView(threshold = 0.18, once = true, margin = "0px 0px -8% 0px") {
  const ref = React.useRef(null);
  const [seen, setSeen] = React.useState(REDUCE);
  React.useEffect(() => {
    const el = ref.current;
    if (!el || seen) return;
    if (typeof IntersectionObserver === "undefined") { setSeen(true); return; }
    const io = new IntersectionObserver((es) => {
      es.forEach((e) => { if (e.isIntersecting) { setSeen(true); if (once) io.disconnect(); } else if (!once) setSeen(false); });
    }, { threshold, rootMargin: margin });
    io.observe(el);
    return () => io.disconnect();
  }, []);
  return [ref, seen];
}

/* Woord-voor-woord: elk woord zit in een masker en schuift van onder omhoog.
   `accent` markeert één woord kobalt; `caps` zet de string als WILDLY-statement. */
function Words({ text, accent, italic, as = "span", delay = 0, stagger = 34, dur = 1150, style, caps, margin, zicht }) {
  /* Iets later dan de lijnen, en met een langere, vloeiender beweging.
     Met `zicht` bepaalt de ouder het moment (bijv. de scrollteller van de
     caserijen), zodat een layoutverschuiving de reveal niet kan afvuren. */
  const [ref, gezien] = useInView(0.2, true, margin || "0px 0px -18% 0px");
  const seen = zicht == null ? gezien : (REDUCE || zicht);
  const words = String(text).split(" ");
  const Tag = as;
  return (
    <Tag ref={ref} aria-label={text} style={{ ...style, display: style && style.display ? style.display : "block" }}>
      {words.map((w, i) => (
        <span key={i} aria-hidden="true" style={{ display: "inline-block", overflow: "hidden", verticalAlign: "bottom", paddingBottom: "0.08em", marginBottom: "-0.08em" }}>
          <span style={{ display: "inline-block", whiteSpace: "pre", color: accent && w.replace(/[.,]/g, "") === accent ? "var(--text-accent)" : undefined, fontStyle: italic && w.replace(/[.,]/g, "") === italic ? "italic" : undefined, textTransform: caps ? "uppercase" : undefined, letterSpacing: caps ? "var(--track-wildly)" : undefined,
            transform: seen ? "translateY(0)" : "translateY(112%)", opacity: seen ? 1 : 0,
            transition: REDUCE ? "none" : "transform " + dur + "ms " + EASE + " " + (delay + i * stagger) + "ms, opacity " + Math.round(dur * 0.5) + "ms linear " + (delay + i * stagger) + "ms" }}>
            {w + (i < words.length - 1 ? " " : "")}
          </span>
        </span>
      ))}
    </Tag>
  );
}

/* Blok-reveal in dezelfde beweging als de woordreveal: de inhoud komt achter
   een masker van onder omhoog in beeld. Het masker is een clip-path op het blok
   zelf, dus er komt geen extra element bij en de layout blijft precies zoals hij
   is. Na de reveal staat de clip ruim buiten het blok, zodat hoekmerken en
   schaduwen niet worden afgesneden. Met mask=false blijft het oude blok-fade. */
function Reveal({ children, delay = 0, dur = 800, y = 20, as = "div", style, mask = true, ...rest }) {
  const [ref, seen] = useInView(0.12);
  const Tag = as;
  const beweeg = REDUCE ? "none"
    : "clip-path " + dur + "ms " + EASE + " " + delay + "ms, transform " + dur + "ms " + EASE + " " + delay + "ms, opacity " + Math.round(dur * 0.5) + "ms linear " + delay + "ms";
  return (
    <Tag ref={ref} style={{
      ...style,
      clipPath: mask ? (seen ? "inset(-30% -30% -30% -30%)" : "inset(0 0 102% 0)") : undefined,
      opacity: seen ? 1 : 0,
      transform: seen ? "none" : "translateY(" + Math.min(y, 26) + "px)",
      transition: beweeg
    }} {...rest}>{children}</Tag>
  );
}

/* Hairline die van links volloopt zodra hij in beeld is. */
function RevealRule({ delay = 0, tone }) {
  /* Loopt al vol voordat de lijn het midden haalt, zodat er nooit halfvolle streepjes staan. */
  const [ref, seen] = useInView(0, true, "0px 0px 16% 0px");
  return <div ref={ref} style={{ height: 1, background: tone || "var(--border-hairline)", transformOrigin: "left", transform: seen ? "scaleX(1)" : "scaleX(0)", transition: REDUCE ? "none" : "transform 900ms " + EASE + " " + delay + "ms" }} />;
}

/* Parallax: het kind beweegt met `speed` × de afstand tot het schermmidden.
   Positief = trager dan de pagina (beeld), negatief = sneller (tekstlaag). */
function Parallax({ children, speed = 0.16, scale, style, inner }) {
  const ref = React.useRef(null);
  const box = React.useRef(null);
  React.useEffect(() => {
    if (REDUCE) return;
    const el = ref.current, k = box.current;
    if (!el || !k) return;
    let raf = 0;
    const tick = () => {
      raf = 0;
      const r = el.getBoundingClientRect();
      const vh = window.innerHeight || 800;
      if (r.bottom < -200 || r.top > vh + 200) return;
      const d = (r.top + r.height / 2) - vh / 2;
      k.style.transform = "translate3d(0," + (d * speed).toFixed(1) + "px,0)" + (scale ? " scale(" + scale + ")" : "");
    };
    const on = () => { if (!raf) raf = requestAnimationFrame(tick); };
    window.addEventListener("scroll", on, { passive: true, capture: true });
    window.addEventListener("resize", on);
    tick();
    return () => { window.removeEventListener("scroll", on, true); window.removeEventListener("resize", on); if (raf) cancelAnimationFrame(raf); };
  }, [speed, scale]);
  return (
    <div ref={ref} style={{ overflow: "hidden", position: "relative", ...style }}>
      <div ref={box} style={{ position: "absolute", inset: scale ? "-" + Math.round((scale - 1) * 50) + "%" : 0, willChange: "transform", transform: scale ? "scale(" + scale + ")" : undefined, ...inner }}>{children}</div>
    </div>
  );
}

function ParallaxImage({ src, alt = "", speed = 0.14, style, imgStyle, children }) {
  return (
    <Parallax speed={speed} scale={1.18} style={style}>
      <img src={src} alt={alt} style={{ width: "100%", height: "100%", objectFit: "cover", display: "block", ...imgStyle }} />
      {children}
    </Parallax>
  );
}

/* INTRO — de lockup bouwt zich op, één keer per bezoek.
   1 de twee haken tekenen zich (stroke-draw) vanuit hun hoek.
   2 het woordmerk veegt letter voor letter open, links naar rechts.
   3 de lockup drijft op en het navy gordijn schuift weg. */
const HAAK_A = "M10 6 V46 H42", HAAK_B = "M90 72 V32 H58";
const LETTERS = [
  { t: "", d: "M0 0 H62 Q100 0 100 38 V62 Q100 100 62 100 H0 Z M20 20 H60 Q80 20 80 40 V60 Q80 80 60 80 H20 Z" },
  { t: "translate(125,0)", d: "M36 0 H64 Q100 0 100 36 V64 Q100 100 64 100 H36 Q0 100 0 64 V36 Q0 0 36 0 Z M38 20 H62 Q80 20 80 38 V62 Q80 80 62 80 H38 Q20 80 20 62 V38 Q20 20 38 20 Z" },
  { t: "translate(254,0)", d: "M0 0 H20 V80 H100 V100 H0 Z" },
  { t: "translate(373,0)", d: "M0 0 H20 V80 H100 V100 H0 Z" },
  { t: "translate(494,0)", d: "M0 0 H100 V20 H20 V40 H80 V60 H20 V80 H100 V100 H0 Z" }
];

function Intro({ onDone, skip }) {
  const [phase, setPhase] = React.useState(0);
  React.useEffect(() => {
    if (skip || REDUCE) { setPhase(4); onDone && onDone(); return; }
    const t = [
      setTimeout(() => setPhase(1), 60),
      setTimeout(() => setPhase(2), 700),
      setTimeout(() => setPhase(3), 1860),
      setTimeout(() => { setPhase(4); onDone && onDone(); }, 2760)
    ];
    return () => t.forEach(clearTimeout);
  }, []);
  if (phase >= 4) return null;
  const drawn = phase >= 1, words = phase >= 2, leave = phase >= 3;
  const LEN = 72;
  return (
    <div aria-hidden="true" style={{ position: "fixed", inset: 0, zIndex: 200, background: "var(--dolle-navy)", display: "grid", placeItems: "center", clipPath: leave ? "inset(0 0 100% 0)" : "inset(0 0 0 0)", transition: "clip-path 820ms " + EASE + " 140ms", pointerEvents: leave ? "none" : "auto" }}>
      <div style={{ width: "min(300px,40vw)", transform: leave ? "translateY(-22px)" : "translateY(0)", opacity: leave ? 0 : 1, transition: "transform 700ms " + EASE + ", opacity 420ms linear" }}>
        <svg viewBox="0 0 754 100" width="100%" style={{ display: "block", overflow: "visible" }}>
          <g transform="translate(-14,0) scale(1.4)">
            <path d={HAAK_A} stroke="#FFFFFF" strokeWidth="13" fill="none" strokeDasharray={LEN} style={{ strokeDashoffset: drawn ? 0 : LEN, transition: "stroke-dashoffset 620ms " + EASE }} />
            <path d={HAAK_B} stroke="#FFFFFF" strokeWidth="13" fill="none" strokeDasharray={LEN} style={{ strokeDashoffset: drawn ? 0 : LEN, transition: "stroke-dashoffset 620ms " + EASE + " 130ms" }} />
          </g>
          <defs>
            {LETTERS.map((l, i) => (
              <clipPath key={i} id={"dolle-intro-wipe-" + i}>
                <rect x="-6" y="-6" width="112" height="112" style={{ transform: words ? "scaleX(1)" : "scaleX(0)", transformOrigin: "0% 50%", transformBox: "fill-box", transition: "transform 460ms " + EASE + " " + (i * 80) + "ms" }} />
              </clipPath>
            ))}
          </defs>
          <g transform="translate(160,0)">
            {LETTERS.map((l, i) => (
              <path key={i} fill="#FFFFFF" fillRule="evenodd" transform={l.t || undefined} d={l.d} clipPath={"url(#dolle-intro-wipe-" + i + ")"} />
            ))}
          </g>
        </svg>
      </div>
    </div>
  );
}

/* Tag: het label als gevuld vlakje in donkerder navy. Overal dezelfde maat, op
   de overzichtsrijen en op de casepagina's. */
function DolleTag({ children, style }) {
  return <span style={{ display: "inline-block", whiteSpace: "nowrap", background: "#0b1730", padding: "7px 10px 6px", fontFamily: "var(--font-label)", fontWeight: "var(--weight-label)", fontSize: "var(--size-label-sm)", letterSpacing: "var(--track-label-wide)", textTransform: "uppercase", lineHeight: 1, color: "var(--text-body)", ...style }}>{children}</span>;
}

Object.assign(window, { Words, Reveal, RevealRule, Parallax, ParallaxImage, Intro, DolleTag, useInViewMotion: useInView });
