/* SCHAKEL-FRAME — de merkbeweging als los element.
   Dicht: de twee haakjes liggen samen als schakelblok (links, verticaal
   gecentreerd). Open: ze worden groter, reizen naar linksboven en rechtsonder en
   draaien 90° naar de frame-stand, zodat ze het hele blok kaderen. Eén beweging,
   geen stuiter — alleen transform, dus de schaal loopt mee in dezelfde tik.

   open (prop) bestuurt hem van buiten; zonder die prop opent hij op hover of tap.
   mode="static" zet hem vast. prefers-reduced-motion: geen animatie. */
const HAAK = { a: "M10 6 V46 H42", b: "M90 72 V32 H58" };

function SchakelHaak({ which, size, grow, open, box, inset, reduce }) {
  const w = size;
  const h = Math.round(size * 0.78);
  const a = which === "a";
  /* Alles rekent met het middelpunt: gedraaid is de zichtbare voet h×w, dus
     schalen en roteren verschuiven de randen voorspelbaar. */
  const g = open ? grow : 1;
  const vw = (open ? h : w) * g;   /* zichtbare breedte */
  const vh = (open ? w : h) * g;   /* zichtbare hoogte */
  const cx = open
    ? (a ? inset + vw / 2 : box.w - inset - vw / 2)
    : inset + vw / 2;
  const cy = open
    ? (a ? inset + vh / 2 : box.h - inset - vh / 2)
    : box.h / 2;
  const x = cx - w / 2;
  const y = cy - h / 2;
  return (
    <svg aria-hidden="true" viewBox="0 0 100 78" width={w} height={h} fill="none"
      style={{
        position: "absolute", left: 0, top: 0,
        transform: "translate(" + x + "px," + y + "px) rotate(" + (open ? 90 : 0) + "deg) scale(" + g + ")",
        transformOrigin: "50% 50%",
        pointerEvents: "none",
        transition: reduce ? "none" : "transform var(--dur-frame) var(--ease-dolle)"
      }}>
      <path d={HAAK[which]} stroke="currentColor" strokeWidth="9" />
    </svg>
  );
}

function SchakelFrame({ children, open, onToggle, onMouseEnter, onMouseLeave, mode = "hover", size = 22, grow = 2.4, inset = 12, padExtra = 14, style, ...rest }) {
  const controlled = open != null;
  const [hover, setHover] = React.useState(false);
  const [tapped, setTapped] = React.useState(false);
  const [box, setBox] = React.useState({ w: 0, h: 0 });
  const ref = React.useRef(null);
  const reduce = typeof window !== "undefined" && window.matchMedia
    ? window.matchMedia("(prefers-reduced-motion: reduce)").matches : false;
  const isOpen = controlled ? open : (mode !== "static" && (hover || tapped));

  React.useLayoutEffect(() => {
    const el = ref.current;
    if (!el) return;
    const measure = () => setBox({ w: el.clientWidth, h: el.clientHeight });
    measure();
    if (typeof ResizeObserver === "undefined") return;
    const ro = new ResizeObserver(measure);
    ro.observe(el);
    return () => ro.disconnect();
  }, [children, isOpen]);

  const interactive = mode !== "static";
  const toggle = onToggle || (controlled ? null : () => setTapped((v) => !v));
  /* Lucht voor de haken: open staan ze groter, dus schuift de content verder in. */
  const pad = (isOpen ? Math.round(size * grow * 0.78) + inset : size + inset) + padExtra;

  return (
    <div
      ref={ref}
      onMouseEnter={interactive ? (e) => { setHover(true); if (onMouseEnter) onMouseEnter(e); } : onMouseEnter}
      onMouseLeave={interactive ? (e) => { setHover(false); if (onMouseLeave) onMouseLeave(e); } : onMouseLeave}
      onClick={interactive && toggle ? toggle : undefined}
      onKeyDown={interactive && toggle ? (e) => { if (e.key === "Enter" || e.key === " ") { e.preventDefault(); toggle(); } } : undefined}
      tabIndex={interactive ? 0 : undefined}
      role={interactive ? "button" : undefined}
      aria-expanded={interactive ? !!isOpen : undefined}
      style={{
        position: "relative",
        color: "var(--mark-color)",
        cursor: interactive ? "pointer" : undefined,
        paddingLeft: pad + "px",
        paddingRight: pad + "px",
        transition: reduce ? "none" : "padding var(--dur-frame) var(--ease-dolle)",
        ...style
      }}
      {...rest}
    >
      <SchakelHaak which="a" size={size} grow={grow} open={isOpen} box={box} inset={inset} reduce={reduce} />
      <SchakelHaak which="b" size={size} grow={grow} open={isOpen} box={box} inset={inset} reduce={reduce} />
      {children}
    </div>
  );
}

Object.assign(window, { SchakelFrame });
