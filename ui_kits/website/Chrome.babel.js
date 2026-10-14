const { Logo, Kicker, Button, Icon } = window.DesignSystem_8f95a2;
const ASSETS = window.DOLLE_ASSET_BASE || "assets/";

const NAV = [
  { id: "home", label: "Home" },
  { id: "diensten", label: "Services" },
  { id: "cases", label: "Cases" },
  { id: "career", label: "Careers" },
  { id: "contact", label: "Contact" }
];

/* Navigatie licht op naar vol wit/navy, met een hairline die van links naar rechts
   binnenkomt — dezelfde beweging als de link-knop. */
function NavLink({ item, active, go }) {
  const [hover, setHover] = React.useState(false);
  return (
    <a
      href={"#" + item.id}
      onClick={(e) => { e.preventDefault(); go(item.id); }}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      style={{
        position: "relative",
        border: 0,
        paddingBottom: "5px",
        fontFamily: "var(--font-label)", fontWeight: "var(--weight-label)",
        fontSize: "var(--size-label)", letterSpacing: "var(--track-label)",
        textTransform: "uppercase",
        color: active || hover ? "var(--text-heading)" : "var(--text-muted)",
        transition: "color var(--dur-ui) var(--ease-dolle)"
      }}
    >
      {item.label}
      <span
        aria-hidden="true"
        style={{
          position: "absolute", left: 0, right: 0, bottom: 0, height: "1px",
          background: "var(--text-heading)",
          transformOrigin: "left center",
          transform: active || hover ? "scaleX(1)" : "scaleX(0)",
          transition: "transform var(--dur-frame) var(--ease-dolle)"
        }}
      />
    </a>
  );
}

/* Taalwissel: één knop die de ándere taal toont. Nog geen vertaling aangesloten — de
   keuze staat in localStorage en op <html lang>, zodat de NL-versie er later op kan
   aanhaken. */
function LangSwitch() {
  const [lang, setLang] = React.useState(() => {
    try { return window.localStorage.getItem("dolle-lang") || "en"; } catch (e) { return "en"; }
  });
  const [hover, setHover] = React.useState(false);
  React.useEffect(() => {
    document.documentElement.lang = lang;
    try { window.localStorage.setItem("dolle-lang", lang); } catch (e) {}
  }, [lang]);
  const other = lang === "en" ? "nl" : "en";
  return (
    <button type="button" onClick={() => setLang(other)}
      onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)}
      aria-label={other === "nl" ? "Schakel naar Nederlands" : "Switch to English"}
      style={{
        position: "relative", appearance: "none", background: "none", border: 0,
        padding: "0 0 5px", cursor: "pointer",
        fontFamily: "var(--font-label)", fontWeight: "var(--weight-label)",
        fontSize: "var(--size-label)", letterSpacing: "var(--track-label)",
        textTransform: "uppercase",
        color: hover ? "var(--text-heading)" : "var(--text-muted)",
        transition: "color var(--dur-ui) var(--ease-dolle)"
      }}>
      {other}
      <span aria-hidden="true" style={{
        position: "absolute", left: 0, right: 0, bottom: 0, height: "1px",
        background: "var(--text-heading)", transformOrigin: "left center",
        transform: hover ? "scaleX(1)" : "scaleX(0)",
        transition: "transform var(--dur-frame) var(--ease-dolle)"
      }} />
    </button>
  );
}

function Nav({ page, go, tone = "dark" }) {
  const dark = tone === "dark";
  const [menu, setMenu] = React.useState(false);
  React.useEffect(() => {
    if (!menu) return;
    const esc = (e) => { if (e.key === "Escape") setMenu(false); };
    document.addEventListener("keydown", esc);
    document.documentElement.style.overflow = "hidden";
    return () => { document.removeEventListener("keydown", esc); document.documentElement.style.overflow = ""; };
  }, [menu]);
  const kies = (id) => { setMenu(false); go(id); };
  const streep = { display: "block", width: 22, height: 2, background: "currentColor", transition: "transform 420ms var(--ease-dolle), opacity 240ms linear" };
  return (
    <header
      className={dark ? "dolle-dark" : undefined}
      style={{
        position: "sticky", top: 0, zIndex: 30,
        display: "flex", alignItems: "center", justifyContent: "space-between",
        gap: "var(--space-6)",
        padding: "var(--space-5) var(--page-margin)",
        background: dark ? "var(--dolle-navy)" : "var(--dolle-white)",
        borderBottom: dark ? "none" : "1px solid var(--border-hairline)"
      }}
    >
      <LogoLink dark={dark} go={go} />
      <nav data-nav-breed="1" style={{ display: "flex", gap: "var(--space-7)", alignItems: "center" }}>
        {NAV.map((n) => <NavLink key={n.id} item={n} active={page === n.id} go={go} />)}
        <LangSwitch />
        <Wenk><Button size="sm" variant="link" onClick={() => go("contact")}>Get in touch</Button></Wenk>
      </nav>
      <button type="button" data-nav-burger="1" aria-label={menu ? "Close menu" : "Open menu"} aria-expanded={menu} onClick={() => setMenu(!menu)}
        style={{ display: "none", appearance: "none", background: "none", border: 0, padding: 0, width: 44, height: 44, cursor: "pointer", color: menu || dark ? "var(--dolle-white)" : "var(--dolle-navy)", position: "relative", zIndex: 62, flexDirection: "column", alignItems: "center", justifyContent: "center", gap: 6 }}>
        <span style={{ ...streep, transform: menu ? "translateY(4px) rotate(45deg)" : "none" }} />
        <span style={{ ...streep, transform: menu ? "translateY(-4px) rotate(-45deg)" : "none" }} />
      </button>
      <div className="dolle-dark" aria-hidden={!menu} style={{ position: "fixed", inset: 0, zIndex: 60, background: "var(--dolle-navy)", display: "grid", gridTemplateRows: "1fr auto", padding: "calc(var(--space-9) + 24px) var(--page-margin) var(--space-7)", opacity: menu ? 1 : 0, visibility: menu ? "visible" : "hidden", transition: "opacity 420ms var(--ease-dolle), visibility 0s linear " + (menu ? "0s" : "420ms") }}>
        <nav style={{ display: "grid", alignContent: "start", gap: 0 }}>
          {NAV.map((n, i) => (
            <a key={n.id} href={"#" + n.id} tabIndex={menu ? 0 : -1} onClick={(ev) => { ev.preventDefault(); kies(n.id); }}
              style={{ display: "flex", alignItems: "center", minHeight: 64, borderTop: "1px solid var(--white-16, rgba(255,255,255,0.16))", fontFamily: "var(--font-core)", fontWeight: "var(--weight-heading)", fontSize: "clamp(26px,8vw,40px)", letterSpacing: "var(--track-heading)", color: page === n.id ? "var(--text-accent)" : "var(--dolle-white)", textDecoration: "none", transform: menu ? "translateY(0)" : "translateY(14px)", opacity: menu ? 1 : 0, transition: "transform 620ms var(--ease-dolle) " + (80 + i * 50) + "ms, opacity 520ms var(--ease-dolle) " + (80 + i * 50) + "ms" }}>{n.label}</a>
          ))}
        </nav>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", gap: "var(--space-5)", borderTop: "1px solid var(--white-16, rgba(255,255,255,0.16))", paddingTop: "var(--space-5)" }}>
          <LangSwitch />
          <Button size="sm" variant="link" onClick={() => kies("contact")} style={{ color: "var(--dolle-white)" }}>Get in touch</Button>
        </div>
      </div>
    </header>
  );
}

/* De schakel van Get in touch knipoogt af en toe: om de zoveel tijd doet de
   knop alsof de muis er even overheen gaat, zodat de haken hun reis maken en de
   blik erheen trekken. Bij echte hover of prefers-reduced-motion gebeurt er
   niets extra's. */
function Wenk({ children }) {
  const doos = React.useRef(null);
  React.useEffect(() => {
    const reduce = window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) return;
    let uit = false, t = 0;
    const doel = () => doos.current && doos.current.querySelector("button, a");
    const tik = (soort) => {
      const el = doel();
      if (!el) return;
      el.dispatchEvent(new MouseEvent(soort, { bubbles: true, relatedTarget: document.body }));
    };
    const wenk = () => {
      if (uit || document.hidden) return;
      tik("mouseover");
      t = window.setTimeout(() => tik("mouseout"), 1400);
    };
    const klok = window.setInterval(wenk, 5500);
    const eerste = window.setTimeout(wenk, 2000);
    return () => { uit = true; clearInterval(klok); clearTimeout(eerste); clearTimeout(t); };
  }, []);
  return <span ref={doos} style={{ display: "inline-flex" }}>{children}</span>;
}

function LogoLink({ dark, go }) {
  const [hover, setHover] = React.useState(false);
  return (
    <a
      href="#"
      onClick={(e) => { e.preventDefault(); go("home"); }}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      style={{ border: 0, display: "block", opacity: hover ? 0.72 : 1, transition: "opacity var(--dur-ui) var(--ease-dolle)" }}
    >
      <Logo variant="open" tone={dark ? "white" : "navy"} height={24} />
    </a>
  );
}

/* Achtergrond-showreel: loopt gedempt in beeld met de protectiegradient erover.
   Zonder src blijft het een placeholder — er is nog geen materiaal aangeleverd. */
function ShowreelLoop({ src, poster = ASSETS + "hero-showreel-frame.png", label = "Showreel · loop · supply mp4" }) {
  return (
    <div style={{ position: "absolute", inset: 0, overflow: "hidden", background: "#0b1730" }}>
      {src ? (
        <video
          src={src}
          poster={poster}
          autoPlay
          muted
          loop
          playsInline
          style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
        />
      ) : (
        <img src={poster} alt="" style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }} />
      )}
      <div style={{ position: "absolute", inset: 0, background: "var(--gradient-protect)" }} />
      <div style={{ position: "absolute", inset: 0, background: "linear-gradient(90deg,rgba(16,31,60,.78) 0%,rgba(16,31,60,.42) 42%,rgba(16,31,60,0) 72%)" }} />
      <div style={{ position: "absolute", inset: 0, background: "var(--gradient-protect-top)", opacity: 0.4 }} />
    </div>
  );
}

/* De voet komt parallax in beeld: terwijl de pagina eronder doorloopt schuift
   de inhoud van de voet iets langzamer mee omhoog. */
function Footer({ go }) {
  const vak = React.useRef(null);
  const laag = React.useRef(null);
  React.useEffect(() => {
    if (window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    let raf = 0;
    const kijk = () => {
      raf = 0;
      const el = vak.current, l = laag.current;
      if (!el || !l) return;
      const vh = window.innerHeight || 800;
      const r = el.getBoundingClientRect();
      /* 1 zolang de voet nog onder de vensterrand zit, 0 als hij volledig staat. */
      const p = Math.max(0, Math.min(1, (r.top - (vh - r.height)) / Math.max(1, r.height)));
      l.style.transform = "translate3d(0," + (p * 72).toFixed(1) + "px,0)";
      l.style.opacity = (1 - p * 0.65).toFixed(3);
    };
    const on = () => { if (!raf) raf = requestAnimationFrame(kijk); };
    window.addEventListener("scroll", on, { passive: true });
    window.addEventListener("resize", on);
    kijk();
    return () => { window.removeEventListener("scroll", on); window.removeEventListener("resize", on); if (raf) cancelAnimationFrame(raf); };
  }, []);
  return (
    <footer ref={vak} className="dolle-dark" style={{ position: "relative", zIndex: 1, background: "var(--dolle-navy)", padding: "var(--space-9) var(--page-margin) var(--space-6)", overflow: "hidden" }}>
      <div ref={laag} style={{ maxWidth: "var(--content-max)", margin: "0 auto", display: "grid", gap: "var(--space-8)", willChange: "transform" }}>
        <div style={{ display: "grid", gridTemplateColumns: "1.4fr 1fr 1fr", gap: "var(--grid-gap)", alignItems: "start" }}>
          <Reveal style={{ display: "grid", gap: "var(--space-5)", justifyItems: "start" }}>
            <Logo variant="open" tone="white" height={26} />
            <p style={{ color: "var(--text-body)", maxWidth: "34ch", margin: 0 }}>
              DOLLE produces media, launches brands, builds systems and drives growth.
            </p>
            <span style={{ display: "flex", gap: "var(--space-5)", marginTop: "var(--space-2)" }}>
              {["instagram", "linkedin", "youtube", "tiktok"].map((n) => <SocialLink key={n} name={n} size={22} />)}
            </span>
          </Reveal>
          <Reveal delay={140} style={{ display: "grid", gap: "var(--space-3)", justifyItems: "start" }}>
            <Kicker>Pages</Kicker>
            {["Media production", "Launches", "AI systems", "Growth"].map((s) => (
              <FooterLink key={s} label={s} onClick={() => go("diensten")} />
            ))}
            <FooterLink label="Careers" onClick={() => go("career")} />
          </Reveal>
          <Reveal delay={280} style={{ display: "grid", gap: "var(--space-3)", justifyItems: "start" }}>
            <Kicker>Contact</Kicker>
            <a href="mailto:info@dolle.nl" style={{ fontSize: "var(--size-body-sm)", color: "var(--text-heading)" }}>info@dolle.nl</a>
            <a href="tel:+31651202317" style={{ color: "var(--text-body)", fontSize: "var(--size-body-sm)" }}>+31 6 51 20 23 17</a>
            <span style={{ color: "var(--text-muted)", fontSize: "var(--size-body-sm)", lineHeight: "var(--lh-body)" }}>Lijnbaansgracht 206-2<br />1016 XA, Amsterdam</span>
          </Reveal>
        </div>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", borderTop: "1px solid var(--border-hairline)", paddingTop: "var(--space-5)" }}>
          <Kicker size="sm">DOLLE · 2026</Kicker>
        </div>
      </div>
    </footer>
  );
}

/* Placeholder media band. No imagery was supplied; the brandbook uses placeholders too. */
function MediaPlaceholder({ label = "Placeholder · own production", height = 420, tone = "sunk", children }) {
  return (
    <div style={{
      height: typeof height === "number" ? height + "px" : height,
      background: tone === "dark" ? "#0b1730" : "var(--surface-sunk)",
      border: "1px solid var(--border-hairline)",
      display: "grid", placeItems: "center", position: "relative", overflow: "hidden"
    }}>
      {children}
      <span className="dolle-data" style={{ color: tone === "dark" ? "var(--white-48)" : "var(--text-body)", fontSize: "10px", letterSpacing: "var(--track-label-wide)" }}>{label}</span>
    </div>
  );
}

const SOCIAL_URL = {
  instagram: "https://www.instagram.com/tendollemedia/",
  youtube: "https://www.youtube.com/@tendollemedia/videos",
  linkedin: "https://www.linkedin.com/company/65877378/",
  tiktok: "https://www.tiktok.com/@tendollemedia"
};

/* Aanvragen gaan naar info@tendollemedia.nl: het mailprogramma van de bezoeker
   opent met alle ingevulde velden. Een server-koppeling kan dit later vervangen. */
function dolleVerstuur(onderwerp, velden) {
  const tekst = velden.filter(([, w]) => w && String(w).trim()).map(([k, w]) => k + ": " + String(w).trim()).join("\n\n");
  window.location.href = "mailto:info@dolle.nl,info@tendollemedia.nl?subject=" + encodeURIComponent(onderwerp) + "&body=" + encodeURIComponent(tekst);
}
window.dolleVerstuur = dolleVerstuur;

function SocialLink({ name, size = 16 }) {
  const [hover, setHover] = React.useState(false);
  return (
    <a
      href={SOCIAL_URL[name] || "#"}
      aria-label={name}
      target="_blank" rel="noopener noreferrer"
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      style={{
        border: 0, display: "flex",
        color: hover ? "var(--text-heading)" : "var(--text-muted)",
        transition: "color var(--dur-ui) var(--ease-dolle)"
      }}
    >
      <Icon name={name} size={size} />
    </a>
  );
}

function FooterLink({ label, onClick }) {
  const [hover, setHover] = React.useState(false);
  return (
    <a
      href="#"
      onClick={(e) => { e.preventDefault(); onClick && onClick(); }}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      style={{
        border: 0,
        color: hover ? "var(--text-heading)" : "var(--text-body)",
        fontSize: "var(--size-body-sm)",
        transition: "color var(--dur-ui) var(--ease-dolle)"
      }}
    >
      {label}
    </a>
  );
}

Object.assign(window, { Wenk, Nav, Footer, MediaPlaceholder, ShowreelLoop, FooterLink, SocialLink, NAV });
