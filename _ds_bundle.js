/* @ds-bundle: {"format":4,"namespace":"DesignSystem_8f95a2","components":[{"name":"CornerRule","sourcePath":"components/brand/CornerRule.jsx"},{"name":"Frame","sourcePath":"components/brand/Frame.jsx"},{"name":"Kicker","sourcePath":"components/brand/Kicker.jsx"},{"name":"Logo","sourcePath":"components/brand/Logo.jsx"},{"name":"StatFrame","sourcePath":"components/brand/StatFrame.jsx"},{"name":"WildlyRotator","sourcePath":"components/brand/WildlyRotator.jsx"},{"name":"DEFAULT_WORDS","sourcePath":"components/brand/WildlyRotator.jsx"},{"name":"WildlyStatement","sourcePath":"components/brand/WildlyStatement.jsx"},{"name":"Badge","sourcePath":"components/core/Badge.jsx"},{"name":"Button","sourcePath":"components/core/Button.jsx"},{"name":"Card","sourcePath":"components/core/Card.jsx"},{"name":"Dialog","sourcePath":"components/core/Dialog.jsx"},{"name":"LUCIDE_CDN","sourcePath":"components/core/Icon.jsx"},{"name":"BRAND_PATHS","sourcePath":"components/core/Icon.jsx"},{"name":"Icon","sourcePath":"components/core/Icon.jsx"},{"name":"IconButton","sourcePath":"components/core/IconButton.jsx"},{"name":"Tabs","sourcePath":"components/core/Tabs.jsx"},{"name":"Tag","sourcePath":"components/core/Tag.jsx"},{"name":"Toast","sourcePath":"components/core/Toast.jsx"},{"name":"Tooltip","sourcePath":"components/core/Tooltip.jsx"},{"name":"Checkbox","sourcePath":"components/forms/Checkbox.jsx"},{"name":"Input","sourcePath":"components/forms/Input.jsx"},{"name":"Radio","sourcePath":"components/forms/Radio.jsx"},{"name":"Select","sourcePath":"components/forms/Select.jsx"},{"name":"Switch","sourcePath":"components/forms/Switch.jsx"},{"name":"PageEdge","sourcePath":"components/layout/PageEdge.jsx"},{"name":"Section","sourcePath":"components/layout/Section.jsx"},{"name":"ServiceList","sourcePath":"components/layout/ServiceList.jsx"},{"name":"DEFAULT_SERVICES","sourcePath":"components/layout/ServiceList.jsx"}],"sourceHashes":{"components/brand/CornerRule.jsx":"85b3180b56ad","components/brand/Frame.jsx":"d9df9611e51f","components/brand/Kicker.jsx":"5797554b66a0","components/brand/Logo.jsx":"89f49b975583","components/brand/StatFrame.jsx":"57b263d843c5","components/brand/WildlyRotator.jsx":"5b65091289c0","components/brand/WildlyStatement.jsx":"98a5b5d59690","components/core/Badge.jsx":"3728a1d9467c","components/core/Button.jsx":"a5ba0e724be3","components/core/Card.jsx":"ffdbb9b3572e","components/core/Dialog.jsx":"dc97fa74e4fa","components/core/Icon.jsx":"89b7588e93d0","components/core/IconButton.jsx":"2e6604bf4c05","components/core/Tabs.jsx":"43873e6d64e1","components/core/Tag.jsx":"33f8a314699d","components/core/Toast.jsx":"451f1ceed720","components/core/Tooltip.jsx":"296e34fa5d56","components/forms/Checkbox.jsx":"2b91e2c2f0d6","components/forms/Input.jsx":"8e11604731ea","components/forms/Radio.jsx":"46278f2ef055","components/forms/Select.jsx":"ad53f10b80ce","components/forms/Switch.jsx":"c17fe55f769d","components/layout/PageEdge.jsx":"dfeda40f2c72","components/layout/Section.jsx":"a0ab5c66029d","components/layout/ServiceList.jsx":"798d6084e9eb","scraps/CaseMontel-v1.jsx":"421a39d3fe6a","scraps/knip-mp4.js":"45a7bebc14e9","slides/Slides.jsx":"890e59494b45","ui_kits/website/Career.jsx":"79e90156b45b","ui_kits/website/CaseBergvliet.jsx":"cec6bdba21c2","ui_kits/website/CaseBlueRivet.jsx":"38f5547898ea","ui_kits/website/CaseEezy.jsx":"b7ff023aa69b","ui_kits/website/CaseHangEleven.jsx":"da70696ffbf8","ui_kits/website/CaseKiela.jsx":"6aaa1802e55f","ui_kits/website/CaseMedpets.jsx":"492207d85223","ui_kits/website/CaseMontel.jsx":"a680f9239e41","ui_kits/website/CaseMontelPagina.jsx":"880602b6e7cd","ui_kits/website/CaseMotion.jsx":"57e6560eade9","ui_kits/website/CaseMsoGroup.jsx":"161c82f4d697","ui_kits/website/CasePietKlerkx.jsx":"3b63586d832a","ui_kits/website/CaseVeteranenSearchTeam.jsx":"5a6c10cfcee0","ui_kits/website/CaseWoonexpress.jsx":"3b26b6ef99ce","ui_kits/website/Cases.jsx":"f2f86c82be10","ui_kits/website/Chrome.jsx":"828e4e886760","ui_kits/website/ComingSoonIntro.jsx":"e27b85743ddd","ui_kits/website/ComingSoonWildly.jsx":"fec8a8621a02","ui_kits/website/Contact.jsx":"301cc24cce55","ui_kits/website/DissolveLab.jsx":"8b8a7fc3e1a8","ui_kits/website/HeroDissolve.jsx":"e53b178c6efd","ui_kits/website/Home.jsx":"e97a8fc20cb5","ui_kits/website/Motion.jsx":"39c9db927517","ui_kits/website/OvergangDissolve.jsx":"79e6469c7440","ui_kits/website/Pages.jsx":"afda61b2ffa4","ui_kits/website/SchakelFrame.jsx":"5774721cf558","ui_kits/website/Services.jsx":"e6c19bc77cc6","ui_kits/website/_werk/OvergangDissolve v1 (stage 100vh).jsx":"623a6a7813e3","ui_kits/website/animations-v3.jsx":"06ae64d470d6","ui_kits/website/dolle-dissolve.js":"b29f7be96cae","ui_kits/website/tweaks-panel.jsx":"d259e3a86f73"},"inlinedExternals":[],"unexposedExports":[{"name":"assetBase","sourcePath":"components/brand/Logo.jsx"},{"name":"inputFieldStyle","sourcePath":"components/forms/Input.jsx"}]} */

(() => {

const __ds_ns = (window.DesignSystem_8f95a2 = window.DesignSystem_8f95a2 || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/brand/CornerRule.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/* De 90°-hoek als structuurdetail — dezelfde geometrie als de haak, maar met
   hairlines getekend in plaats van de logo-SVG. Daarom is dit géén merkteken en
   mag het wél herhaald worden: hoekmarkering op kaarten, media, sectiestarts.
   Het echte merkframe (de aangeleverde haak-drawings) blijft Frame/Logo. */
const CORNERS = {
  "tl-br": ["tl", "br"],
  "tr-bl": ["tr", "bl"],
  tl: ["tl"],
  tr: ["tr"],
  bl: ["bl"],
  br: ["br"],
  all: ["tl", "tr", "bl", "br"]
};
function cornerStyle(which, size, weight, color, inset, open) {
  const w = weight + "px solid " + color;
  const off = open ? inset : inset + Math.round(size * 0.35);
  const s = {
    position: "absolute",
    width: size + "px",
    height: size + "px",
    pointerEvents: "none",
    zIndex: 1,
    opacity: open ? 1 : 0.5,
    transition: "top var(--dur-frame) var(--ease-dolle),left var(--dur-frame) var(--ease-dolle),right var(--dur-frame) var(--ease-dolle),bottom var(--dur-frame) var(--ease-dolle),opacity var(--dur-frame) var(--ease-dolle)"
  };
  if (which === "tl") return {
    ...s,
    top: off,
    left: off,
    borderTop: w,
    borderLeft: w
  };
  if (which === "tr") return {
    ...s,
    top: off,
    right: off,
    borderTop: w,
    borderRight: w
  };
  if (which === "bl") return {
    ...s,
    bottom: off,
    left: off,
    borderBottom: w,
    borderLeft: w
  };
  return {
    ...s,
    bottom: off,
    right: off,
    borderBottom: w,
    borderRight: w
  };
}
function CornerRule({
  children,
  corners = "tl-br",
  size = 20,
  weight = 1,
  tone = "hairline",
  inset = 0,
  open = true,
  padding,
  as: Tag = "div",
  style,
  ...rest
}) {
  const color = tone === "strong" ? "var(--border-strong)" : tone === "accent" ? "var(--accent)" : "var(--border-hairline)";
  const list = CORNERS[corners] || CORNERS["tl-br"];
  return /*#__PURE__*/React.createElement(Tag, _extends({
    style: {
      position: "relative",
      padding: padding,
      ...style
    }
  }, rest), list.map(c => /*#__PURE__*/React.createElement("span", {
    key: c,
    "aria-hidden": "true",
    style: cornerStyle(c, size, weight, color, inset, open)
  })), children);
}
Object.assign(__ds_scope, { CornerRule });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/brand/CornerRule.jsx", error: String((e && e.message) || e) }); }

// components/brand/Kicker.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/* Hanken spaced caps. Labels, kickers, captions, data — never headings. */
function Kicker({
  children,
  as: Tag = "div",
  tone = "muted",
  size = "md",
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement(Tag, _extends({
    style: {
      fontFamily: "var(--font-label)",
      fontWeight: "var(--weight-label)",
      fontSize: size === "sm" ? "var(--size-label-sm)" : "var(--size-label)",
      letterSpacing: size === "sm" ? "var(--track-label-wide)" : "var(--track-label)",
      lineHeight: "var(--lh-label)",
      textTransform: "uppercase",
      color: tone === "accent" ? "var(--text-accent)" : tone === "strong" ? "var(--text-heading)" : "var(--text-label)",
      ...style
    }
  }, rest), children);
}
Object.assign(__ds_scope, { Kicker });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/brand/Kicker.jsx", error: String((e && e.message) || e) }); }

// components/brand/Logo.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/* Asset base: cards/kits set window.DOLLE_ASSET_BASE (e.g. "../../assets/").
   Consumers copy assets/ into their project and leave this alone. */
const assetBase = () => typeof window !== "undefined" && window.DOLLE_ASSET_BASE || "assets/";
const FILES = {
  open: {
    navy: "dolle-open-merk-navy.svg",
    white: "dolle-open-merk-wit.svg",
    ratio: 6.2
  },
  wordmark: {
    navy: "dolle-woordmerk-navy.svg",
    white: "dolle-woordmerk-wit.svg",
    ratio: 5.94
  },
  block: {
    navy: "dolle-beeldmerk-blok-navy.svg",
    white: "dolle-beeldmerk-blok-wit.svg",
    offwhite: "dolle-beeldmerk-blok-gebrokenwit.svg",
    ratio: 1
  }
};
function Logo({
  variant = "open",
  tone = "navy",
  height = 40,
  title = "DOLLE",
  style,
  ...rest
}) {
  const set = FILES[variant] || FILES.open;
  const file = set[tone] || set.navy;
  return /*#__PURE__*/React.createElement("img", _extends({
    src: assetBase() + file,
    alt: title,
    width: Math.round(height * set.ratio),
    height: height,
    style: {
      height: height + "px",
      width: "auto",
      display: "block",
      ...style
    }
  }, rest));
}
Object.assign(__ds_scope, { assetBase, Logo });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/brand/Logo.jsx", error: String((e && e.message) || e) }); }

// components/brand/Frame.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const HAAK = {
  navy: {
    a: "dolle-haak-linksboven-navy.svg",
    b: "dolle-haak-rechtsonder-navy.svg"
  },
  white: {
    a: "dolle-haak-linksboven-wit.svg",
    b: "dolle-haak-rechtsonder-wit.svg"
  }
};

/* Two haken, diagonally opposite, framing content. One frame per composition. */
function Frame({
  children,
  tone = "navy",
  corners = "tl-br",
  size = 64,
  inset = "var(--frame-inset)",
  open = true,
  as: Tag = "div",
  style,
  ...rest
}) {
  const set = HAAK[tone] || HAAK.navy;
  const mirrored = corners === "tr-bl";
  const shut = open ? "0px" : "calc(50% - " + size / 2 + "px)";
  const corner = {
    position: "absolute",
    width: size + "px",
    height: size + "px",
    pointerEvents: "none",
    transition: "top var(--dur-frame) var(--ease-dolle),left var(--dur-frame) var(--ease-dolle),right var(--dur-frame) var(--ease-dolle),bottom var(--dur-frame) var(--ease-dolle),opacity var(--dur-frame) var(--ease-dolle)"
  };
  const first = mirrored ? {
    ...corner,
    top: shut,
    right: shut,
    transform: "rotate(90deg)"
  } : {
    ...corner,
    top: shut,
    left: shut
  };
  const second = mirrored ? {
    ...corner,
    bottom: shut,
    left: shut,
    transform: "rotate(90deg)"
  } : {
    ...corner,
    bottom: shut,
    right: shut
  };
  return /*#__PURE__*/React.createElement(Tag, _extends({
    style: {
      position: "relative",
      padding: inset,
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("img", {
    src: __ds_scope.assetBase() + set.a,
    alt: "",
    "aria-hidden": "true",
    style: first
  }), /*#__PURE__*/React.createElement("img", {
    src: __ds_scope.assetBase() + set.b,
    alt: "",
    "aria-hidden": "true",
    style: second
  }), children);
}
Object.assign(__ds_scope, { Frame });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/brand/Frame.jsx", error: String((e && e.message) || e) }); }

// components/brand/StatFrame.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/* Case format: figure in the frame, kobalt on the growth figure. */
function StatFrame({
  value = "+312%",
  label = "Bereik · 90 dagen na relaunch",
  tone = "navy",
  accent = true,
  corners = "tl-br",
  size = 64,
  style,
  ...rest
}) {
  const [hover, setHover] = React.useState(false);
  return /*#__PURE__*/React.createElement(__ds_scope.Frame, _extends({
    tone: tone,
    corners: corners,
    size: size,
    open: true,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      display: "inline-block",
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: "var(--space-5) var(--space-7)",
      textAlign: "center"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-core)",
      fontWeight: "var(--weight-heading)",
      fontSize: "clamp(32px,3.4vw,52px)",
      lineHeight: 1,
      letterSpacing: "var(--track-heading)",
      color: accent ? "var(--text-accent)" : "var(--text-heading)"
    }
  }, value), /*#__PURE__*/React.createElement(__ds_scope.Kicker, {
    style: {
      marginTop: "var(--space-4)",
      color: hover ? "var(--text-heading)" : "var(--text-label)",
      transition: "color var(--dur-ui) var(--ease-dolle)"
    }
  }, label)));
}
Object.assign(__ds_scope, { StatFrame });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/brand/StatFrame.jsx", error: String((e && e.message) || e) }); }

// components/brand/WildlyRotator.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const DEFAULT_WORDS = ["VISIBLE", "FORWARD", "AHEAD", "DRIVEN"];
const SWAP_MS = 620;

/* WILDLY en het doelwoord staan altijd op één regel, nooit onder elkaar.
   WILDLY staat stil; de doelwoorden staan onder elkaar op één spoor dat omlaag
   schuift — het nieuwe woord komt van boven binnen. Daarvoor staat de reeks in
   omgekeerde volgorde op het spoor en loopt de index terug; boven het spoor
   staat een kopie van het eerste woord, zodat de rondgang naadloos terugspringt. */
function WildlyRotator({
  words = DEFAULT_WORDS,
  interval = 3200,
  size,
  accent = true,
  as: Tag = "div",
  style,
  ...rest
}) {
  const list = words && words.length ? words : DEFAULT_WORDS;
  const track = [list[0]].concat(list.slice().reverse());
  const start = track.length - 1;
  const [i, setI] = React.useState(start);
  const [glide, setGlide] = React.useState(true);
  const reduce = typeof window !== "undefined" && window.matchMedia ? window.matchMedia("(prefers-reduced-motion: reduce)").matches : false;
  React.useEffect(() => {
    if (reduce || list.length < 2) return;
    let reset;
    const tick = setInterval(() => {
      setI(v => {
        const next = v - 1;
        if (next === 0) {
          /* Bovenste rij is de kopie van het eerste woord: daarna zonder
             overgang terug naar de echte eerste rij onderaan. */
          reset = setTimeout(() => {
            setGlide(false);
            setI(start);
          }, SWAP_MS + 30);
        }
        return next;
      });
      setGlide(true);
    }, interval);
    return () => {
      clearInterval(tick);
      clearTimeout(reset);
    };
  }, [interval, list.length, reduce, start]);
  React.useEffect(() => {
    if (glide) return;
    const raf = requestAnimationFrame(() => setGlide(true));
    return () => cancelAnimationFrame(raf);
  }, [glide]);
  const type = {
    fontFamily: "var(--font-core)",
    fontWeight: "var(--weight-heading)",
    fontSize: size || "var(--size-wildly)",
    lineHeight: "var(--lh-wildly)",
    letterSpacing: "var(--track-wildly)",
    textTransform: "uppercase",
    whiteSpace: "nowrap"
  };
  const row = "calc(var(--lh-wildly) * 1em)";
  return /*#__PURE__*/React.createElement(Tag, _extends({
    style: {
      display: "flex",
      alignItems: "flex-start",
      gap: "0.34em",
      color: "var(--text-heading)",
      ...type,
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("span", null, "Wildly"), /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true",
    style: {
      display: "block",
      height: row,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: "block",
      transform: "translateY(calc(" + -i + " * " + row + "))",
      transition: glide ? "transform " + SWAP_MS + "ms var(--ease-dolle)" : "none"
    }
  }, track.map((w, n) => /*#__PURE__*/React.createElement("span", {
    key: w + n,
    style: {
      display: "block",
      height: row,
      color: accent ? "var(--text-accent)" : "inherit"
    }
  }, w)))), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      width: 1,
      height: 1,
      overflow: "hidden",
      clipPath: "inset(50%)"
    }
  }, list.map(w => "Wildly " + w.toLowerCase() + ". ").join("")));
}
Object.assign(__ds_scope, { WildlyRotator, DEFAULT_WORDS });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/brand/WildlyRotator.jsx", error: String((e && e.message) || e) }); }

// components/brand/WildlyStatement.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/* WILDLY statements: Archivo 800, always caps, second (growth) word carries kobalt.
   Always on ONE line — the two words are never stacked. Never next to or under the logo. */
function WildlyStatement({
  statement = "WILDLY VISIBLE",
  accent = true,
  align = "left",
  size,
  as: Tag = "div",
  style,
  ...rest
}) {
  const words = String(statement).trim().split(/\s+/);
  return /*#__PURE__*/React.createElement(Tag, _extends({
    style: {
      fontFamily: "var(--font-core)",
      fontWeight: "var(--weight-heading)",
      fontSize: size || "var(--size-wildly)",
      lineHeight: "var(--lh-wildly)",
      letterSpacing: "var(--track-wildly)",
      textTransform: "uppercase",
      color: "var(--text-heading)",
      textAlign: align,
      whiteSpace: "nowrap",
      ...style
    }
  }, rest), words.map((w, i) => /*#__PURE__*/React.createElement(React.Fragment, {
    key: i
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      color: accent && i === 1 ? "var(--text-accent)" : undefined
    }
  }, w), i < words.length - 1 ? /*#__PURE__*/React.createElement("span", {
    style: {
      letterSpacing: "0.08em"
    }
  }, " ") : null)));
}
Object.assign(__ds_scope, { WildlyStatement });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/brand/WildlyStatement.jsx", error: String((e && e.message) || e) }); }

// components/core/Badge.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/* Data/status in spaced caps. Geen vlak, geen kader: de letter doet het werk.
   Alleen `outline` krijgt een hairline, voor als een badge los in beeld staat. */
function Badge({
  children,
  tone = "neutral",
  outline = false,
  style,
  ...rest
}) {
  const color = {
    neutral: "var(--text-label)",
    strong: "var(--text-heading)",
    accent: "var(--text-accent)"
  }[tone] || "var(--text-label)";
  return /*#__PURE__*/React.createElement("span", _extends({
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: "var(--space-2)",
      padding: outline ? "6px 11px" : 0,
      border: outline ? "1px solid var(--border-hairline)" : 0,
      fontFamily: "var(--font-label)",
      fontWeight: "var(--weight-label)",
      fontSize: "var(--size-label-sm)",
      letterSpacing: "var(--track-label-wide)",
      textTransform: "uppercase",
      lineHeight: 1.3,
      color: color,
      borderRadius: "var(--radius-none)",
      ...style
    }
  }, rest), children);
}
Object.assign(__ds_scope, { Badge });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Badge.jsx", error: String((e && e.message) || e) }); }

// components/core/Card.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/* Vierkante kaart: hairline, lage koele schaduw, 2px lift bij hover als hij interactief is. */
function Card({
  children,
  title,
  kicker,
  media,
  mediaHeight = 200,
  footer,
  variant = "hairline",
  interactive = false,
  corner = false,
  as: Tag = "div",
  style,
  ...rest
}) {
  const [hover, setHover] = React.useState(false);
  const surfaces = {
    hairline: {
      background: "var(--surface-card)",
      border: "1px solid var(--border-hairline)",
      boxShadow: "var(--shadow-none)"
    },
    raised: {
      background: "var(--surface-card)",
      border: "1px solid transparent",
      boxShadow: "var(--shadow-card)"
    },
    inverse: {
      background: "var(--dolle-navy)",
      border: "1px solid var(--white-16)",
      boxShadow: "var(--shadow-none)"
    },
    flat: {
      background: "var(--surface-sunk)",
      border: "1px solid transparent",
      boxShadow: "var(--shadow-none)"
    }
  };
  const inverse = variant === "inverse";
  return /*#__PURE__*/React.createElement(Tag, _extends({
    className: inverse ? "dolle-dark" : undefined,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      display: "flex",
      flexDirection: "column",
      borderRadius: "var(--radius-none)",
      overflow: "hidden",
      cursor: interactive ? "pointer" : undefined,
      transform: interactive && hover ? "translateY(-2px)" : "none",
      transition: "transform var(--dur-ui) var(--ease-dolle),box-shadow var(--dur-ui) var(--ease-dolle),border-color var(--dur-ui) var(--ease-dolle)",
      ...surfaces[variant],
      ...(interactive && hover ? {
        boxShadow: "var(--shadow-lift)",
        borderColor: inverse ? "var(--white-48)" : "var(--navy-24)"
      } : null),
      ...style
    }
  }, rest), media ? /*#__PURE__*/React.createElement("div", {
    style: {
      height: mediaHeight + "px",
      background: "var(--surface-sunk)",
      overflow: "hidden",
      flex: "0 0 auto",
      position: "relative"
    }
  }, media, corner ? /*#__PURE__*/React.createElement(__ds_scope.CornerRule, {
    corners: "tl-br",
    size: 18,
    inset: 12,
    tone: inverse ? "strong" : "hairline",
    open: !interactive || hover,
    style: {
      position: "absolute",
      inset: 0
    }
  }) : null) : null, /*#__PURE__*/React.createElement("div", {
    style: {
      padding: "var(--space-6)",
      display: "flex",
      flexDirection: "column",
      gap: "var(--space-3)",
      flex: 1,
      position: "relative"
    }
  }, corner && !media ? /*#__PURE__*/React.createElement(__ds_scope.CornerRule, {
    corners: "tl-br",
    size: 16,
    inset: 10,
    tone: inverse ? "strong" : "hairline",
    open: !interactive || hover,
    style: {
      position: "absolute",
      inset: 0
    }
  }) : null, kicker ? /*#__PURE__*/React.createElement(__ds_scope.Kicker, null, kicker) : null, title ? /*#__PURE__*/React.createElement("h3", {
    style: {
      fontSize: "var(--size-h4)",
      lineHeight: "var(--lh-h4)"
    }
  }, title) : null, children ? /*#__PURE__*/React.createElement("div", {
    style: {
      color: "var(--text-body)",
      fontSize: "var(--size-body)"
    }
  }, children) : null, footer ? /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: "auto",
      paddingTop: "var(--space-4)"
    }
  }, footer) : null));
}
Object.assign(__ds_scope, { Card });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Card.jsx", error: String((e && e.message) || e) }); }

// components/core/Icon.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const LUCIDE_CDN = "https://cdn.jsdelivr.net/npm/lucide-static@0.544.0/icons/";
/* Volvlak glyphs die Lucide niet levert: aangeleverde merkmarks en de gevulde
   ster voor ratings. Inline, zodat ze currentColor erven via fill en geen extra
   request of metadata meebrengen. */
const BRAND_PATHS = {
  "star-solid": "M12 2.4l2.94 6.2 6.81.86-4.99 4.66 1.29 6.78L12 17.52l-6.05 3.38 1.29-6.78L2.25 9.46l6.81-.86z",
  tiktok: "M12.53.02C13.84 0 15.14.01 16.44 0c.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z"
};
const CACHE = new Map();

/* Lucide outline icons, fetched once and inlined so they inherit currentColor
   and survive screenshot/PDF/PPTX export (a CSS mask does not).
   DOLLE ships no icon set of its own; Lucide is the sanctioned substitute. */
function Icon({
  name = "arrow-right",
  size = 16,
  strokeWidth = 1.25,
  style,
  ...rest
}) {
  const [svg, setSvg] = React.useState(() => CACHE.get(name) || "");
  React.useEffect(() => {
    let live = true;
    if (CACHE.has(name)) {
      setSvg(CACHE.get(name));
      return;
    }
    if (BRAND_PATHS[name]) {
      const mark = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="100%" height="100%" fill="currentColor"><path d="' + BRAND_PATHS[name] + '"/></svg>';
      CACHE.set(name, mark);
      setSvg(mark);
      return;
    }
    fetch(LUCIDE_CDN + name + ".svg").then(r => r.ok ? r.text() : "").then(t => {
      const clean = t.replace(/<\?xml[^>]*\?>/g, "").replace(/width="[^"]*"/, 'width="100%"').replace(/height="[^"]*"/, 'height="100%"').replace(/stroke-width="[^"]*"/g, "");
      CACHE.set(name, clean);
      if (live) setSvg(clean);
    }).catch(() => {});
    return () => {
      live = false;
    };
  }, [name]);
  return /*#__PURE__*/React.createElement("span", _extends({
    role: "img",
    "aria-hidden": "true",
    "data-icon": name,
    style: {
      display: "inline-flex",
      width: size + "px",
      height: size + "px",
      flex: "0 0 auto",
      color: "currentColor",
      strokeWidth: strokeWidth,
      ...style
    },
    dangerouslySetInnerHTML: {
      __html: svg
    }
  }, rest));
}
Object.assign(__ds_scope, { LUCIDE_CDN, BRAND_PATHS, Icon });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Icon.jsx", error: String((e && e.message) || e) }); }

// components/core/Button.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/* `lead` = de ruimte die het teken in rust vóór het label inneemt (mark + gap).
   Ruime padding, zodat de haken bij hover in de hoeken passen zonder te knijpen. */
const SIZES = {
  sm: {
    padding: "12px 24px",
    font: "10px",
    track: "0.2em",
    gap: 8,
    icon: 12,
    mark: 14,
    inset: 8
  },
  md: {
    padding: "17px 30px",
    font: "10.5px",
    track: "0.22em",
    gap: 9,
    icon: 13,
    mark: 16,
    inset: 10
  },
  lg: {
    padding: "21px 38px",
    font: "11px",
    track: "0.24em",
    gap: 10,
    icon: 14,
    mark: 18,
    inset: 12
  },
  /* De link-knop heeft een ruim klikvlak (44px hoog) maar geen kader, dus de haken
     volgen de tekst: net buiten de letters horizontaal, en verticaal binnen het
     klikvlak zodat ze dicht om de regel staan in plaats van om de doos. */
  link: {
    padding: "14px 0",
    font: "10.5px",
    track: "0.22em",
    gap: 9,
    icon: 13,
    mark: 16,
    inset: -6,
    insetY: 3
  }
};
const HAAK = {
  a: "M10 6 V46 H42",
  /* linker L uit het open merk */
  b: "M90 72 V32 H58" /* rechter L uit het open merk */
};

/* Eén haak, absoluut in de knop. In rust liggen beide op dezelfde plek vóór het
   label en vormen ze samen het logo-teken; bij hover reizen ze naar de
   tegenoverliggende hoeken van de knop en draaien 90° naar de frame-stand. */
function Haak({
  which,
  size,
  hover,
  rest,
  box,
  inset,
  insetY
}) {
  const w = size;
  const h = Math.round(size * 0.78);
  const a = which === "a";
  const iy = insetY == null ? inset : insetY;
  /* De glyph draait 90°, dus zijn zichtbare voetafmeting wisselt: 16×12 wordt
     12×16. Zichtbaar links = x + (w−h)/2, zichtbaar boven = y − (w−h)/2, dus de
     correctie gaat van x af en bij y op om beide randen op `inset` te laten landen. */
  const c = (w - h) / 2;
  const open = a ? {
    x: inset - c,
    y: iy + c
  } : {
    x: box.w - inset - h - c,
    y: box.h - iy - w + c
  };
  const pos = hover && box.w ? open : rest;
  return /*#__PURE__*/React.createElement("svg", {
    "aria-hidden": "true",
    viewBox: "0 0 100 78",
    width: w,
    height: h,
    fill: "none",
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      transform: "translate(" + pos.x + "px," + pos.y + "px) rotate(" + (hover ? 90 : 0) + "deg)",
      transformOrigin: "50% 50%",
      pointerEvents: "none",
      transition: "transform var(--dur-frame) var(--ease-dolle)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: HAAK[which],
    stroke: "currentColor",
    strokeWidth: "9"
  }));
}
function Button({
  children,
  variant = "primary",
  size = "md",
  mark = true,
  icon,
  iconPosition = "right",
  block = false,
  disabled = false,
  as,
  style,
  ...rest
}) {
  const link = variant === "link";
  const s = link ? SIZES.link : SIZES[size] || SIZES.md;
  const Tag = as || (rest.href ? "a" : "button");
  const [hover, setHover] = React.useState(false);
  const [box, setBox] = React.useState({
    w: 0,
    h: 0,
    labelX: 0
  });
  const rootRef = React.useRef(null);
  const labelRef = React.useRef(null);
  const showMark = mark && !icon;
  const lead = s.mark + s.gap;
  const on = hover && !disabled;

  /* Rustpositie van het teken volgt de gemeten labelpositie, zodat het teken
     altijd exact vóór de tekst ligt — ongeacht labellengte of maat. */
  React.useLayoutEffect(() => {
    if (!rootRef.current || !labelRef.current) return;
    const measure = () => {
      /* clientWidth/Height zijn padding-box maten — dat is het vlak waartegen
         absolute posities resolven. getBoundingClientRect() geeft de border-box
         en zou de haken de randbreedte laten verschuiven. */
      const el = rootRef.current;
      setBox({
        w: el.clientWidth,
        h: el.clientHeight,
        labelX: labelRef.current.offsetLeft
      });
    };
    measure();
    if (typeof ResizeObserver === "undefined") return;
    const ro = new ResizeObserver(measure);
    ro.observe(rootRef.current);
    return () => ro.disconnect();
  }, [children, size, variant]);
  const markH = Math.round(s.mark * 0.78);
  const restPos = {
    x: box.labelX - lead,
    y: Math.max((box.h - markH) / 2, 0)
  };
  const base = {
    primary: {
      background: "var(--surface-inverse)",
      color: "var(--surface-page)",
      borderColor: "var(--surface-inverse)"
    },
    secondary: {
      background: "transparent",
      color: "var(--text-heading)",
      borderColor: "var(--border-hairline)"
    },
    accent: {
      background: "transparent",
      color: "var(--accent)",
      borderColor: "var(--accent)"
    },
    ghost: {
      background: "transparent",
      color: "var(--text-muted)",
      borderColor: "transparent"
    },
    link: {
      background: "transparent",
      color: "var(--text-heading)",
      borderColor: "transparent"
    }
  }[variant] || {};
  const hovered = on ? {
    primary: {
      background: "var(--surface-inverse-hover)",
      borderColor: "var(--surface-inverse-hover)",
      fontWeight: 700
    },
    secondary: {
      borderColor: "var(--border-strong)"
    },
    accent: {
      borderColor: "var(--accent)",
      color: "var(--accent)"
    },
    ghost: {
      color: "var(--text-heading)"
    },
    link: {
      color: "var(--text-heading)"
    }
  }[variant] : null;
  return /*#__PURE__*/React.createElement(Tag, _extends({
    ref: rootRef,
    disabled: Tag === "button" ? disabled : undefined,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      position: "relative",
      display: block ? "flex" : "inline-flex",
      width: block ? "100%" : "fit-content",
      alignItems: "center",
      minHeight: link ? "44px" : undefined,
      justifyContent: "center",
      gap: icon ? s.gap + "px" : 0,
      padding: s.padding,
      borderStyle: "solid",
      borderWidth: link ? "0" : "1px",
      font: "inherit",
      fontFamily: "var(--font-label)",
      fontWeight: "var(--weight-label)",
      fontSize: s.font,
      letterSpacing: s.track,
      textTransform: "uppercase",
      lineHeight: 1,
      whiteSpace: "nowrap",
      borderRadius: "var(--radius-none)",
      cursor: disabled ? "not-allowed" : "pointer",
      textDecoration: "none",
      opacity: disabled ? 0.32 : 1,
      transition: "background var(--dur-ui) var(--ease-dolle),color var(--dur-ui) var(--ease-dolle),border-color var(--dur-ui) var(--ease-dolle)",
      ...base,
      ...hovered,
      ...style
    }
  }, rest), showMark ? /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Haak, {
    which: "a",
    size: s.mark,
    hover: on,
    rest: restPos,
    box: box,
    inset: s.inset,
    insetY: s.insetY
  }), /*#__PURE__*/React.createElement(Haak, {
    which: "b",
    size: s.mark,
    hover: on,
    rest: restPos,
    box: box,
    inset: s.inset,
    insetY: s.insetY
  })) : null, icon && iconPosition === "left" ? /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: icon,
    size: s.icon,
    strokeWidth: 1.25
  }) : null, /*#__PURE__*/React.createElement("span", {
    ref: labelRef,
    style: {
      display: "inline-block",
      marginLeft: showMark ? lead + "px" : 0,
      transform: showMark && on ? "translateX(-" + lead / 2 + "px)" : "none",
      transition: "transform var(--dur-frame) var(--ease-dolle)"
    }
  }, children), icon && iconPosition === "right" ? /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: icon,
    size: s.icon,
    strokeWidth: 1.25,
    style: {
      transform: on ? "translateX(4px)" : "none",
      transition: "transform var(--dur-frame) var(--ease-dolle)"
    }
  }) : null);
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Button.jsx", error: String((e && e.message) || e) }); }

// components/core/IconButton.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function IconButton({
  icon = "arrow-right",
  label,
  variant = "secondary",
  size = 44,
  disabled = false,
  style,
  ...rest
}) {
  const [hover, setHover] = React.useState(false);
  const solid = variant === "primary";
  return /*#__PURE__*/React.createElement("button", _extends({
    type: "button",
    "aria-label": label || icon,
    disabled: disabled,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      width: size + "px",
      height: size + "px",
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      borderRadius: "var(--radius-none)",
      border: variant === "ghost" ? "1px solid transparent" : "1px solid " + (solid ? "var(--surface-inverse)" : "var(--border-strong)"),
      background: solid ? "var(--surface-inverse)" : hover ? variant === "ghost" ? "var(--navy-06)" : "var(--surface-inverse)" : "transparent",
      color: solid ? "var(--surface-page)" : hover && variant !== "ghost" ? "var(--surface-page)" : "var(--text-heading)",
      cursor: disabled ? "not-allowed" : "pointer",
      opacity: disabled ? 0.38 : 1,
      transition: "background var(--dur-ui) var(--ease-dolle),color var(--dur-ui) var(--ease-dolle)",
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: icon,
    size: Math.round(size * 0.42)
  }));
}
Object.assign(__ds_scope, { IconButton });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/IconButton.jsx", error: String((e && e.message) || e) }); }

// components/core/Dialog.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/* Navy scrim + blur behind a square offwhite panel. */
function Dialog({
  open = true,
  kicker,
  title,
  children,
  footer,
  onClose,
  width = 520,
  style,
  ...rest
}) {
  if (!open) return null;
  return /*#__PURE__*/React.createElement("div", _extends({
    role: "dialog",
    "aria-modal": "true",
    style: {
      position: "absolute",
      inset: 0,
      display: "grid",
      placeItems: "center",
      padding: "var(--space-6)",
      background: "var(--navy-48)",
      backdropFilter: "var(--blur-glass)",
      WebkitBackdropFilter: "var(--blur-glass)",
      zIndex: 50
    }
  }, rest), /*#__PURE__*/React.createElement("div", {
    style: {
      width: "100%",
      maxWidth: width + "px",
      background: "var(--surface-page)",
      border: "1px solid var(--border-hairline)",
      boxShadow: "var(--shadow-dialog)",
      borderRadius: "var(--radius-none)",
      padding: "var(--space-7)",
      position: "relative",
      ...style
    }
  }, onClose ? /*#__PURE__*/React.createElement(__ds_scope.IconButton, {
    icon: "x",
    label: "Sluiten",
    variant: "ghost",
    size: 44,
    style: {
      position: "absolute",
      top: "var(--space-3)",
      right: "var(--space-3)"
    },
    onClick: onClose
  }) : null, kicker ? /*#__PURE__*/React.createElement(__ds_scope.Kicker, {
    style: {
      marginBottom: "var(--space-4)"
    }
  }, kicker) : null, title ? /*#__PURE__*/React.createElement("h3", {
    style: {
      fontSize: "var(--size-h3)",
      marginBottom: "var(--space-4)",
      paddingRight: "var(--space-8)"
    }
  }, title) : null, /*#__PURE__*/React.createElement("div", {
    style: {
      color: "var(--text-body)"
    }
  }, children), footer ? /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: "var(--space-3)",
      marginTop: "var(--space-6)"
    }
  }, footer) : null));
}
Object.assign(__ds_scope, { Dialog });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Dialog.jsx", error: String((e && e.message) || e) }); }

// components/core/Tabs.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/* Spaced-caps tabs met een navy onderlijn. Inactieve tab licht op bij hover,
   met dezelfde onderlijn-beweging van links naar rechts als de navigatie. */
function Tab({
  item,
  active,
  onChange
}) {
  const [hover, setHover] = React.useState(false);
  return /*#__PURE__*/React.createElement("button", {
    role: "tab",
    "aria-selected": active,
    onClick: () => onChange && onChange(item.value),
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      position: "relative",
      appearance: "none",
      background: "none",
      border: 0,
      padding: "0 0 var(--space-4)",
      marginBottom: "-1px",
      cursor: "pointer",
      fontFamily: "var(--font-label)",
      fontWeight: "var(--weight-label)",
      fontSize: "var(--size-label)",
      letterSpacing: "var(--track-label)",
      textTransform: "uppercase",
      whiteSpace: "nowrap",
      color: active || hover ? "var(--text-heading)" : "var(--text-muted)",
      transition: "color var(--dur-ui) var(--ease-dolle)"
    }
  }, item.label, /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true",
    style: {
      position: "absolute",
      left: 0,
      right: 0,
      bottom: 0,
      height: "2px",
      background: "var(--border-strong)",
      transformOrigin: "left center",
      transform: active || hover ? "scaleX(1)" : "scaleX(0)",
      transition: "transform var(--dur-frame) var(--ease-dolle)"
    }
  }));
}
function Tabs({
  items = [],
  value,
  onChange,
  style,
  ...rest
}) {
  const list = items.map(it => typeof it === "string" ? {
    value: it,
    label: it
  } : it);
  const active = value != null ? value : list[0] && list[0].value;
  return /*#__PURE__*/React.createElement("div", _extends({
    role: "tablist",
    style: {
      display: "flex",
      gap: "var(--space-6)",
      borderBottom: "1px solid var(--border-hairline)",
      ...style
    }
  }, rest), list.map(it => /*#__PURE__*/React.createElement(Tab, {
    key: it.value,
    item: it,
    active: it.value === active,
    onChange: onChange
  })));
}
Object.assign(__ds_scope, { Tabs });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Tabs.jsx", error: String((e && e.message) || e) }); }

// components/core/Tag.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/* Filter als spaced-caps label met hairline onderlijn. Geselecteerd = volle
   navy onderlijn en volle tekstkleur — geen gevuld vlak. */
function Tag({
  children,
  selected = false,
  removable = false,
  onRemove,
  onClick,
  style,
  ...rest
}) {
  const [hover, setHover] = React.useState(false);
  return /*#__PURE__*/React.createElement("span", _extends({
    role: onClick ? "button" : undefined,
    tabIndex: onClick ? 0 : undefined,
    onClick: onClick,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: "var(--space-2)",
      padding: "0 0 8px",
      fontFamily: "var(--font-label)",
      fontWeight: "var(--weight-label)",
      fontSize: "var(--size-label)",
      letterSpacing: "var(--track-label)",
      textTransform: "uppercase",
      lineHeight: 1,
      cursor: onClick ? "pointer" : "default",
      color: selected || hover ? "var(--text-heading)" : "var(--text-muted)",
      borderBottom: "1px solid " + (selected ? "var(--border-strong)" : hover ? "var(--border-strong)" : "var(--border-hairline)"),
      transition: "color var(--dur-ui) var(--ease-dolle),border-color var(--dur-ui) var(--ease-dolle)",
      ...style
    }
  }, rest), children, removable ? /*#__PURE__*/React.createElement("span", {
    onClick: e => {
      e.stopPropagation();
      onRemove && onRemove(e);
    },
    style: {
      display: "inline-flex",
      opacity: 0.5
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "x",
    size: 11,
    strokeWidth: 1.25
  })) : null);
}
Object.assign(__ds_scope, { Tag });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Tag.jsx", error: String((e && e.message) || e) }); }

// components/core/Toast.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/* Navy bar, white text, one hairline accent rule on the leading edge. */
function Toast({
  children,
  icon = "check",
  tone = "neutral",
  onClose,
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("div", _extends({
    role: "status",
    className: "dolle-dark",
    style: {
      display: "flex",
      alignItems: "center",
      gap: "var(--space-4)",
      padding: "var(--space-4) var(--space-5)",
      background: "var(--dolle-navy)",
      color: "var(--dolle-white)",
      boxShadow: "var(--shadow-lift)",
      borderLeft: "2px solid " + (tone === "accent" ? "var(--dolle-kobalt-light)" : "var(--white-48)"),
      borderRadius: "var(--radius-none)",
      minWidth: "280px",
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: icon,
    size: 18,
    style: {
      color: tone === "accent" ? "var(--dolle-kobalt-light)" : "var(--dolle-white)"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: "var(--size-body-sm)",
      lineHeight: 1.45,
      flex: 1
    }
  }, children), onClose ? /*#__PURE__*/React.createElement(__ds_scope.IconButton, {
    icon: "x",
    label: "Sluiten",
    variant: "ghost",
    size: 44,
    onClick: onClose,
    style: {
      margin: "-10px -8px -10px 0",
      color: "var(--white-72)"
    }
  }) : null);
}
Object.assign(__ds_scope, { Toast });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Toast.jsx", error: String((e && e.message) || e) }); }

// components/core/Tooltip.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/* Navy tooltip, square, small spaced caps. */
function Tooltip({
  children,
  label,
  side = "top",
  style,
  ...rest
}) {
  const [on, setOn] = React.useState(false);
  const pos = side === "bottom" ? {
    top: "calc(100% + 8px)",
    left: "50%",
    transform: "translateX(-50%)"
  } : side === "left" ? {
    right: "calc(100% + 8px)",
    top: "50%",
    transform: "translateY(-50%)"
  } : side === "right" ? {
    left: "calc(100% + 8px)",
    top: "50%",
    transform: "translateY(-50%)"
  } : {
    bottom: "calc(100% + 8px)",
    left: "50%",
    transform: "translateX(-50%)"
  };
  return /*#__PURE__*/React.createElement("span", _extends({
    style: {
      position: "relative",
      display: "inline-flex",
      ...style
    },
    onMouseEnter: () => setOn(true),
    onMouseLeave: () => setOn(false),
    onFocus: () => setOn(true),
    onBlur: () => setOn(false)
  }, rest), children, /*#__PURE__*/React.createElement("span", {
    role: "tooltip",
    style: {
      position: "absolute",
      ...pos,
      whiteSpace: "nowrap",
      padding: "7px 10px",
      background: "var(--dolle-navy)",
      color: "var(--dolle-white)",
      fontFamily: "var(--font-label)",
      fontWeight: "var(--weight-label)",
      fontSize: "var(--size-label-sm)",
      letterSpacing: "0.14em",
      textTransform: "uppercase",
      lineHeight: 1.2,
      opacity: on ? 1 : 0,
      pointerEvents: "none",
      transition: "opacity var(--dur-ui) var(--ease-dolle)",
      zIndex: 40
    }
  }, label));
}
Object.assign(__ds_scope, { Tooltip });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Tooltip.jsx", error: String((e && e.message) || e) }); }

// components/forms/Checkbox.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/* Vierkant vinkje, precies getekend — geen icoonfont, geen CDN-glyph, zodat de
   haal altijd scherp uitlijnt op de 20px doos en meegaat in export. */
function Checkbox({
  label,
  checked = false,
  onChange,
  disabled = false,
  id,
  style,
  ...rest
}) {
  const [hover, setHover] = React.useState(false);
  return /*#__PURE__*/React.createElement("label", {
    htmlFor: id,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      display: "inline-flex",
      alignItems: "flex-start",
      gap: "var(--space-3)",
      cursor: disabled ? "not-allowed" : "pointer",
      opacity: disabled ? 0.35 : 1,
      minHeight: "22px",
      ...style
    }
  }, /*#__PURE__*/React.createElement("input", _extends({
    id: id,
    type: "checkbox",
    checked: checked,
    disabled: disabled,
    onChange: onChange,
    style: {
      position: "absolute",
      opacity: 0,
      width: 0,
      height: 0
    }
  }, rest)), /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true",
    style: {
      width: "18px",
      height: "18px",
      flex: "0 0 auto",
      marginTop: "1px",
      display: "grid",
      placeItems: "center",
      border: "1px solid " + (checked ? "var(--border-strong)" : hover && !disabled ? "var(--navy-48)" : "var(--navy-24)"),
      background: checked ? "var(--surface-inverse)" : "transparent",
      borderRadius: "var(--radius-none)",
      transition: "background var(--dur-tap) var(--ease-dolle),border-color var(--dur-tap) var(--ease-dolle)"
    }
  }, /*#__PURE__*/React.createElement("svg", {
    viewBox: "0 0 12 12",
    width: "11",
    height: "11",
    fill: "none",
    style: {
      display: "block"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M2.5 6.2 L4.9 8.5 L9.5 3.5",
    stroke: "var(--surface-page)",
    strokeWidth: "1.4",
    strokeLinecap: "square",
    style: {
      opacity: checked ? 1 : 0,
      transition: "opacity var(--dur-tap) var(--ease-dolle)"
    }
  }))), label ? /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: "var(--size-body-sm)",
      lineHeight: 1.45,
      color: "var(--text-body)"
    }
  }, label) : null);
}
Object.assign(__ds_scope, { Checkbox });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Checkbox.jsx", error: String((e && e.message) || e) }); }

// components/forms/Input.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const field = (invalid, focus, hover) => ({
  width: "100%",
  padding: "13px 14px",
  fontFamily: "var(--font-core)",
  fontWeight: "var(--weight-body)",
  fontSize: "var(--size-body)",
  lineHeight: 1.4,
  color: "var(--text-heading)",
  background: "var(--surface-card)",
  border: "1px solid " + (invalid ? "var(--dolle-kobalt)" : focus ? "var(--border-strong)" : hover ? "var(--navy-48)" : "var(--border-hairline)"),
  borderRadius: "var(--radius-none)",
  outline: "none",
  boxShadow: focus ? "inset 0 -2px 0 0 var(--focus-ring)" : "none",
  transition: "border-color var(--dur-ui) var(--ease-dolle),box-shadow var(--dur-ui) var(--ease-dolle)"
});
function Input({
  label,
  hint,
  error,
  multiline = false,
  rows = 4,
  id,
  style,
  ...rest
}) {
  const [focus, setFocus] = React.useState(false);
  const [hover, setHover] = React.useState(false);
  const Tag = multiline ? "textarea" : "input";
  return /*#__PURE__*/React.createElement("label", {
    htmlFor: id,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      display: "grid",
      gap: "var(--space-2)",
      ...style
    }
  }, label ? /*#__PURE__*/React.createElement(__ds_scope.Kicker, {
    as: "span"
  }, label) : null, /*#__PURE__*/React.createElement(Tag, _extends({
    id: id,
    rows: multiline ? rows : undefined,
    onFocus: () => setFocus(true),
    onBlur: () => setFocus(false),
    style: {
      ...field(!!error, focus, hover),
      resize: multiline ? "vertical" : undefined
    }
  }, rest)), error || hint ? /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: "var(--size-body-sm)",
      color: error ? "var(--text-accent)" : "var(--text-muted)"
    }
  }, error || hint) : null);
}
const inputFieldStyle = field;
Object.assign(__ds_scope, { Input, inputFieldStyle });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Input.jsx", error: String((e && e.message) || e) }); }

// components/forms/Radio.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/* De enige cirkel in het systeem, omdat een radio als radio moet lezen. */
function Radio({
  label,
  checked = false,
  onChange,
  name,
  value,
  disabled = false,
  id,
  style,
  ...rest
}) {
  const [hover, setHover] = React.useState(false);
  return /*#__PURE__*/React.createElement("label", {
    htmlFor: id,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      display: "inline-flex",
      alignItems: "flex-start",
      gap: "var(--space-3)",
      cursor: disabled ? "not-allowed" : "pointer",
      opacity: disabled ? 0.35 : 1,
      minHeight: "22px",
      ...style
    }
  }, /*#__PURE__*/React.createElement("input", _extends({
    id: id,
    type: "radio",
    name: name,
    value: value,
    checked: checked,
    disabled: disabled,
    onChange: onChange,
    style: {
      position: "absolute",
      opacity: 0,
      width: 0,
      height: 0
    }
  }, rest)), /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true",
    style: {
      width: "18px",
      height: "18px",
      flex: "0 0 auto",
      marginTop: "1px",
      display: "grid",
      placeItems: "center",
      borderRadius: "999px",
      border: "1px solid " + (checked ? "var(--border-strong)" : hover && !disabled ? "var(--navy-48)" : "var(--navy-24)"),
      background: "transparent",
      transition: "border-color var(--dur-tap) var(--ease-dolle)"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: "8px",
      height: "8px",
      borderRadius: "999px",
      background: "var(--surface-inverse)",
      transform: checked ? "scale(1)" : "scale(0)",
      transition: "transform var(--dur-tap) var(--ease-dolle)"
    }
  })), label ? /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: "var(--size-body-sm)",
      lineHeight: 1.45,
      color: "var(--text-body)"
    }
  }, label) : null);
}
Object.assign(__ds_scope, { Radio });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Radio.jsx", error: String((e && e.message) || e) }); }

// components/forms/Select.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Select({
  label,
  hint,
  options = [],
  id,
  style,
  ...rest
}) {
  const [focus, setFocus] = React.useState(false);
  const [hover, setHover] = React.useState(false);
  const list = options.map(o => typeof o === "string" ? {
    value: o,
    label: o
  } : o);
  return /*#__PURE__*/React.createElement("label", {
    htmlFor: id,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      display: "grid",
      gap: "var(--space-2)",
      ...style
    }
  }, label ? /*#__PURE__*/React.createElement(__ds_scope.Kicker, {
    as: "span"
  }, label) : null, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      display: "block"
    }
  }, /*#__PURE__*/React.createElement("select", _extends({
    id: id,
    onFocus: () => setFocus(true),
    onBlur: () => setFocus(false),
    style: {
      width: "100%",
      appearance: "none",
      padding: "13px 40px 13px 14px",
      fontFamily: "var(--font-core)",
      fontSize: "var(--size-body)",
      color: "var(--text-heading)",
      background: "var(--surface-card)",
      border: "1px solid " + (focus ? "var(--border-strong)" : hover ? "var(--navy-48)" : "var(--border-hairline)"),
      borderRadius: "var(--radius-none)",
      boxShadow: focus ? "inset 0 -2px 0 0 var(--focus-ring)" : "none",
      outline: "none",
      cursor: "pointer",
      transition: "border-color var(--dur-ui) var(--ease-dolle),box-shadow var(--dur-ui) var(--ease-dolle)"
    }
  }, rest), list.map(o => /*#__PURE__*/React.createElement("option", {
    key: o.value,
    value: o.value
  }, o.label))), /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "chevron-down",
    size: 16,
    style: {
      position: "absolute",
      right: "14px",
      top: "50%",
      transform: "translateY(-50%)",
      color: hover || focus ? "var(--text-heading)" : "var(--text-muted)",
      pointerEvents: "none",
      transition: "color var(--dur-ui) var(--ease-dolle)"
    }
  })), hint ? /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: "var(--size-body-sm)",
      color: "var(--text-muted)"
    }
  }, hint) : null);
}
Object.assign(__ds_scope, { Select });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Select.jsx", error: String((e && e.message) || e) }); }

// components/forms/Switch.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/* Vierkant spoor, vierkante knop die verschuift. Geen capsule, geen pil —
   de schakelaar volgt dezelfde vierkante geometrie als de rest van het systeem. */
function Switch({
  label,
  checked = false,
  onChange,
  disabled = false,
  id,
  style,
  ...rest
}) {
  const [hover, setHover] = React.useState(false);
  return /*#__PURE__*/React.createElement("label", {
    htmlFor: id,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: "var(--space-3)",
      cursor: disabled ? "not-allowed" : "pointer",
      opacity: disabled ? 0.35 : 1,
      minHeight: "22px",
      ...style
    }
  }, /*#__PURE__*/React.createElement("input", _extends({
    id: id,
    type: "checkbox",
    role: "switch",
    checked: checked,
    disabled: disabled,
    onChange: onChange,
    style: {
      position: "absolute",
      opacity: 0,
      width: 0,
      height: 0
    }
  }, rest)), /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true",
    style: {
      position: "relative",
      width: "34px",
      height: "18px",
      flex: "0 0 auto",
      border: "1px solid " + (checked ? "var(--border-strong)" : hover && !disabled ? "var(--navy-48)" : "var(--navy-24)"),
      background: "transparent",
      borderRadius: "var(--radius-none)",
      transition: "border-color var(--dur-ui) var(--ease-dolle)"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      top: "3px",
      bottom: "3px",
      width: "12px",
      left: checked ? "17px" : "3px",
      background: checked ? "var(--surface-inverse)" : "var(--navy-24)",
      transition: "left var(--dur-ui) var(--ease-dolle),background var(--dur-ui) var(--ease-dolle)"
    }
  })), label ? /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: "var(--size-body-sm)",
      lineHeight: 1.45,
      color: "var(--text-body)"
    }
  }, label) : null);
}
Object.assign(__ds_scope, { Switch });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Switch.jsx", error: String((e && e.message) || e) }); }

// components/layout/PageEdge.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/* The fixed rand: section name bottom-left, page/label bottom-right. Never changes. */
function PageEdge({
  section,
  label,
  position = "absolute",
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      position: position,
      left: "var(--page-margin)",
      right: "var(--page-margin)",
      bottom: "var(--page-margin)",
      display: "flex",
      justifyContent: "space-between",
      alignItems: "flex-end",
      gap: "var(--space-5)",
      pointerEvents: "none",
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement(__ds_scope.Kicker, {
    size: "sm"
  }, section), /*#__PURE__*/React.createElement(__ds_scope.Kicker, {
    size: "sm"
  }, label));
}
Object.assign(__ds_scope, { PageEdge });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/layout/PageEdge.jsx", error: String((e && e.message) || e) }); }

// components/layout/Section.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/* Two-column base: statement left, explanation right. Stacks under 860px via a container query fallback. */
function Section({
  kicker,
  title,
  intro,
  children,
  aside,
  action,
  tone = "light",
  layout = "two-column",
  align = "start",
  as: Tag = "section",
  style,
  ...rest
}) {
  const dark = tone === "dark";
  const calm = tone === "calm";
  return /*#__PURE__*/React.createElement(Tag, _extends({
    className: dark ? "dolle-dark" : calm ? "dolle-calm" : undefined,
    style: {
      background: dark ? "var(--dolle-navy)" : tone === "sunk" ? "var(--surface-sunk)" : "var(--surface-page)",
      color: "var(--text-body)",
      padding: "var(--section-gap) var(--page-margin)",
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: "var(--content-max)",
      margin: "0 auto"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: layout === "two-column" ? "minmax(0,1fr) minmax(0,1fr)" : "minmax(0,1fr)",
      gap: "var(--grid-gap)",
      alignItems: align
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gap: "var(--space-5)",
      alignContent: "start"
    }
  }, kicker ? /*#__PURE__*/React.createElement(__ds_scope.Kicker, null, kicker) : null, title ? /*#__PURE__*/React.createElement("h2", {
    style: {
      maxWidth: "18ch"
    }
  }, title) : null, action ? /*#__PURE__*/React.createElement("div", {
    style: {
      justifySelf: "start",
      marginTop: "var(--space-2)"
    }
  }, action) : null), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gap: "var(--space-5)",
      alignContent: "start",
      justifyItems: "start"
    }
  }, intro ? /*#__PURE__*/React.createElement("p", {
    className: "dolle-lead",
    style: {
      margin: 0
    }
  }, intro) : null, aside)), children ? /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: "var(--space-9)"
    }
  }, children) : null));
}
Object.assign(__ds_scope, { Section });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/layout/Section.jsx", error: String((e && e.message) || e) }); }

// components/layout/ServiceList.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const DEFAULT_SERVICES = [{
  number: "01",
  name: "Mediaproductie",
  signature: "Wildly visible.",
  body: "We zijn gespecialiseerd in het produceren van strategische media. We koppelen beeld aan verhaal en vertalen dat naar campagnes die blijven hangen."
}, {
  number: "02",
  name: "Launches",
  signature: "Wildly forward.",
  body: "We helpen merken en producten lanceren. We duiken in het DNA van het merk en bouwen daaromheen een strategie voor de lancering."
}, {
  number: "03",
  name: "AI-systemen",
  signature: "Wildly ahead.",
  body: "We bouwen systemen die zichtbaarheid schalen. Systemen waarmee bedrijven autonoom hun marketing runnen."
}, {
  number: "04",
  name: "Growth",
  signature: "Wildly driven.",
  body: "We sturen op meetbaar resultaat, van bereik naar omzet."
}];

/* De vier diensten in vaste volgorde. Het cijfer is de markering; er komt
   geen glyph bij — dat zou de dienst illustreren in plaats van benoemen. */
function ServiceList({
  items = DEFAULT_SERVICES,
  layout = "rows",
  style,
  ...rest
}) {
  const grid = layout === "grid";
  const [on, setOn] = React.useState(-1);
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      display: "grid",
      gridTemplateColumns: grid ? "repeat(4,minmax(0,1fr))" : "minmax(0,1fr)",
      gap: grid ? "var(--grid-gap)" : 0,
      ...style
    }
  }, rest), items.map((it, i) => /*#__PURE__*/React.createElement("div", {
    key: it.number || i,
    onMouseEnter: () => setOn(i),
    onMouseLeave: () => setOn(-1),
    style: {
      display: "grid",
      gridTemplateColumns: grid ? "minmax(0,1fr)" : "64px minmax(0,20ch) minmax(0,1fr)",
      gap: grid ? "var(--space-4)" : "var(--grid-gap)",
      alignItems: grid ? "start" : "baseline",
      alignContent: "start",
      borderTop: "1px solid " + (on === i ? "var(--border-strong)" : "var(--border-hairline)"),
      paddingTop: grid ? "var(--space-5)" : "var(--space-6)",
      paddingBottom: grid ? 0 : "var(--space-6)",
      transition: "border-color var(--dur-frame) var(--ease-dolle)"
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Kicker, {
    size: "sm",
    style: {
      color: on === i ? "var(--text-heading)" : "var(--text-muted)",
      transition: "color var(--dur-ui) var(--ease-dolle)"
    }
  }, it.number), /*#__PURE__*/React.createElement("h3", {
    style: {
      fontSize: grid ? "var(--size-h4)" : "var(--size-h3)",
      margin: 0
    }
  }, it.name), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gap: "var(--space-3)",
      maxWidth: "var(--measure-narrow)"
    }
  }, /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      color: "var(--text-body)",
      fontSize: "var(--size-body-sm)"
    }
  }, it.body), it.signature ? /*#__PURE__*/React.createElement("em", {
    style: {
      fontStyle: "italic",
      fontSize: "var(--size-body-sm)",
      color: "var(--text-muted)"
    }
  }, it.signature) : null))));
}
Object.assign(__ds_scope, { ServiceList, DEFAULT_SERVICES });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/layout/ServiceList.jsx", error: String((e && e.message) || e) }); }

// scraps/CaseMontel-v1.jsx
try { (() => {
const DS = window.DesignSystem_8f95a2;
const {
  Kicker,
  Button,
  Icon
} = DS;
const CornerRule = DS.CornerRule || (({
  children
}) => children || null);
const IMG = "../../assets/cases/web/";
const SET = "../../assets/photography/dolle-set-01.jpg";
const POSTER = "../../assets/hero-showreel-frame.png";

/* CASE DETAIL · MONTEL · variant EXTENDED. Beeld is placeholder-materiaal uit
   de bestaande set; ratio's en plek liggen vast, de bestanden worden vervangen
   zodra de echte selects er zijn. Copy staat woordelijk zoals aangeleverd. */

const BLOKKEN = [{
  kop: "Campaigns",
  tekst: "Nine campaigns in the last two years. DOLLE rents entire homes and rebuilds them as sets: furniture in, rooms dressed, every space turned into a campaign environment before a single frame is shot. Location scouting, set design, direction, production and edit under one roof. The result reads as a home rather than a showroom, which is exactly why it performs.",
  strook: [{
    src: IMG + "case-03.jpg",
    ratio: "3 / 2"
  }, {
    src: SET,
    ratio: "4 / 5"
  }, {
    src: IMG + "case-05.jpg",
    ratio: "9 / 16",
    film: true
  }, {
    src: IMG + "case-01.jpg",
    ratio: "3 / 2"
  }]
}, {
  kop: "TV commercials",
  tekst: "Four national commercials. DOLLE takes them from concept to broadcast-ready and cuts the same production down for every channel it has to live on, so one shoot carries both reach and feed.",
  strook: [{
    src: IMG + "case-02.jpg",
    ratio: "3 / 2",
    film: true
  }, {
    src: IMG + "case-06.jpg",
    ratio: "4 / 5"
  }, {
    src: IMG + "case-04.jpg",
    ratio: "9 / 16"
  }, {
    src: IMG + "case-03.jpg",
    ratio: "3 / 2"
  }]
}, {
  kop: "Studio & photography",
  tekst: "Where the partnership began, and still running. Collection imagery produced in studio: sets built, lit and shot for stills and motion in a single run, then delivered per format and per channel.",
  strook: [{
    src: IMG + "case-01.jpg",
    ratio: "4 / 5"
  }, {
    src: IMG + "case-05.jpg",
    ratio: "3 / 2"
  }, {
    src: SET,
    ratio: "9 / 16"
  }, {
    src: IMG + "case-02.jpg",
    ratio: "3 / 2"
  }]
}, {
  kop: "E-learnings",
  tekst: "Product knowledge and sales technique, produced as a structured series staff can work through on demand. Filmed once, consistent across every store, and expanded as the range changes.",
  strook: [{
    src: IMG + "case-04.jpg",
    ratio: "3 / 2",
    film: true
  }, {
    src: IMG + "case-03.jpg",
    ratio: "4 / 5"
  }, {
    src: IMG + "case-06.jpg",
    ratio: "9 / 16"
  }, {
    src: IMG + "case-01.jpg",
    ratio: "3 / 2"
  }]
}, {
  kop: "Brand & onboarding",
  tekst: "The story of the company, produced for the people inside it. Where Montel comes from, what it stands for, how that shows on the floor. Handed to every new colleague in the same form, in every store.",
  strook: [{
    src: IMG + "case-06.jpg",
    ratio: "3 / 2"
  }, {
    src: IMG + "case-02.jpg",
    ratio: "4 / 5"
  }, {
    src: IMG + "case-05.jpg",
    ratio: "9 / 16",
    film: true
  }, {
    src: SET,
    ratio: "3 / 2"
  }]
}, {
  kop: "Culture & events",
  tekst: "Kick-offs, milestones and the moments the company marks together, given a visual form worth keeping, so they land as strongly inside the organisation as a campaign does outside it.",
  strook: [{
    src: IMG + "case-05.jpg",
    ratio: "3 / 2"
  }, {
    src: IMG + "case-04.jpg",
    ratio: "4 / 5"
  }, {
    src: IMG + "case-01.jpg",
    ratio: "9 / 16"
  }, {
    src: IMG + "case-06.jpg",
    ratio: "3 / 2"
  }]
}];
const VERWANT = [{
  klant: "Woonexpress",
  kaders: ["Media production", "Growth"]
}, {
  klant: "Eezy",
  kaders: ["Media production", "Launches"]
}, {
  klant: "MSO Group",
  kaders: ["Media production"]
}, {
  klant: "Landgoed Bergvliet",
  kaders: ["Media production", "Growth"]
}];

/* Beeldstrook: horizontaal scrollbaar, slepen met de aanwijzer. Video-items
   krijgen een play-merk; de ratio bepaalt de breedte, de hoogte ligt vast. */
function Strook({
  items,
  hoog = "clamp(200px,26vw,320px)"
}) {
  const spoor = React.useRef(null);
  React.useEffect(() => {
    const el = spoor.current;
    if (!el) return;
    let neer = false,
      x0 = 0,
      l0 = 0;
    const down = e => {
      neer = true;
      x0 = e.clientX;
      l0 = el.scrollLeft;
      if (el.setPointerCapture) el.setPointerCapture(e.pointerId);
    };
    const move = e => {
      if (neer) el.scrollLeft = l0 - (e.clientX - x0);
    };
    const up = () => {
      neer = false;
    };
    el.addEventListener("pointerdown", down);
    el.addEventListener("pointermove", move);
    el.addEventListener("pointerup", up);
    el.addEventListener("pointerleave", up);
    return () => {
      el.removeEventListener("pointerdown", down);
      el.removeEventListener("pointermove", move);
      el.removeEventListener("pointerup", up);
      el.removeEventListener("pointerleave", up);
    };
  }, []);
  return /*#__PURE__*/React.createElement("div", {
    ref: spoor,
    style: {
      display: "flex",
      gap: "var(--space-3)",
      alignItems: "stretch",
      overflowX: "auto",
      scrollbarWidth: "none",
      cursor: "grab",
      touchAction: "pan-y"
    }
  }, items.map((t, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      position: "relative",
      flex: "0 0 auto",
      height: hoog,
      aspectRatio: t.ratio,
      overflow: "hidden",
      background: "var(--surface-sunk)"
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: t.src,
    alt: "",
    loading: "lazy",
    draggable: "false",
    style: {
      position: "absolute",
      inset: 0,
      width: "100%",
      height: "100%",
      objectFit: "cover",
      display: "block"
    }
  }), t.film ? /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true",
    style: {
      position: "absolute",
      left: "var(--space-3)",
      bottom: "var(--space-3)",
      width: 34,
      height: 34,
      display: "grid",
      placeItems: "center",
      border: "1px solid var(--dolle-white)",
      color: "var(--dolle-white)",
      fontSize: 11,
      background: "rgba(16,31,60,0.35)"
    }
  }, "\u25B6") : null)));
}

/* Hoofdvideo: poster-frame met play-knop, speelt pas op klik. Zolang er geen
   bestand is, blijft het poster staan en meldt de knop dat. */
function Film({
  poster,
  bron,
  onderschrift
}) {
  const [speel, setSpeel] = React.useState(false);
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gap: "var(--space-4)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: "100%",
      aspectRatio: "16 / 9",
      overflow: "hidden",
      background: "var(--surface-sunk)"
    }
  }, speel && bron ? /*#__PURE__*/React.createElement("video", {
    src: bron,
    controls: true,
    autoPlay: true,
    playsInline: true,
    style: {
      position: "absolute",
      inset: 0,
      width: "100%",
      height: "100%",
      objectFit: "cover"
    }
  }) : /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("img", {
    src: poster,
    alt: "",
    style: {
      position: "absolute",
      inset: 0,
      width: "100%",
      height: "100%",
      objectFit: "cover",
      display: "block"
    }
  }), /*#__PURE__*/React.createElement("button", {
    type: "button",
    onClick: () => setSpeel(true),
    "aria-label": "Play film",
    style: {
      position: "absolute",
      inset: 0,
      display: "grid",
      placeItems: "center",
      appearance: "none",
      background: "none",
      border: 0,
      cursor: "pointer"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: "clamp(64px,7vw,92px)",
      height: "clamp(64px,7vw,92px)",
      display: "grid",
      placeItems: "center",
      border: "1px solid var(--dolle-white)",
      color: "var(--dolle-white)",
      fontSize: "20px",
      background: "rgba(16,31,60,0.28)"
    }
  }, "\u25B6")))), /*#__PURE__*/React.createElement(Kicker, {
    size: "sm",
    style: {
      color: "var(--text-muted)"
    }
  }, onderschrift));
}

/* Rij in de stijl van de overzichtspagina, hier zonder open-beweging: naam,
   dienst-tags, VIEW en rechts de beeldstrook. */
function VerwantRij({
  c,
  go
}) {
  const [hover, setHover] = React.useState(false);
  const beelden = [{
    src: IMG + "case-0" + (c.i % 6 + 1) + ".jpg",
    ratio: "3 / 4"
  }, {
    src: IMG + "case-0" + ((c.i + 2) % 6 + 1) + ".jpg",
    ratio: "3 / 2"
  }, {
    src: IMG + "case-0" + ((c.i + 4) % 6 + 1) + ".jpg",
    ratio: "4 / 5"
  }, {
    src: IMG + "case-0" + ((c.i + 1) % 6 + 1) + ".jpg",
    ratio: "9 / 16"
  }];
  return /*#__PURE__*/React.createElement("div", {
    onClick: () => go("cases"),
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      display: "grid",
      gridTemplateColumns: "minmax(0,32%) auto minmax(0,1fr)",
      gap: "var(--space-6)",
      alignItems: "center",
      padding: "var(--space-4) 0",
      borderTop: "1px solid var(--white-24, rgba(255,255,255,0.24))",
      cursor: "pointer",
      color: "var(--dolle-white)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gap: "var(--space-3)",
      justifyItems: "start",
      minWidth: 0
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-core)",
      fontWeight: "var(--weight-heading)",
      fontSize: "clamp(18px,1.9vw,26px)",
      letterSpacing: "var(--track-heading)"
    }
  }, c.klant), /*#__PURE__*/React.createElement("span", {
    style: {
      display: "flex",
      gap: "var(--space-4)",
      flexWrap: "wrap"
    }
  }, c.kaders.map(k => /*#__PURE__*/React.createElement(Kicker, {
    key: k,
    size: "sm",
    style: {
      color: "var(--text-muted)"
    }
  }, k)))), /*#__PURE__*/React.createElement(Button, {
    size: "sm",
    variant: "secondary",
    onClick: ev => {
      ev.stopPropagation();
      go("cases");
    },
    style: {
      color: "var(--dolle-white)",
      borderColor: hover ? "var(--white-24, rgba(255,255,255,0.24))" : "transparent"
    }
  }, "View"), /*#__PURE__*/React.createElement(Strook, {
    items: beelden,
    hoog: "clamp(96px,11vw,132px)"
  }));
}
function CaseMontel({
  go
}) {
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("section", {
    className: "dolle-dark",
    style: {
      background: "var(--dolle-navy)",
      padding: "clamp(96px,16vh,200px) var(--page-margin) 0"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: "var(--content-max)",
      margin: "0 auto"
    }
  }, /*#__PURE__*/React.createElement("button", {
    onClick: () => go("cases"),
    style: {
      appearance: "none",
      background: "none",
      border: 0,
      padding: 0,
      marginBottom: "var(--space-7)",
      cursor: "pointer",
      display: "flex",
      alignItems: "center",
      gap: "var(--space-2)",
      color: "var(--text-muted)"
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "arrow-left",
    size: 14
  }), /*#__PURE__*/React.createElement(Kicker, {
    as: "span",
    size: "sm"
  }, "All cases")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "minmax(0,1fr) auto",
      gap: "var(--space-6)",
      alignItems: "end"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gap: "var(--space-5)",
      justifyItems: "start"
    }
  }, /*#__PURE__*/React.createElement(Reveal, null, /*#__PURE__*/React.createElement(Kicker, null, "Montel \xB7 Furniture retail")), /*#__PURE__*/React.createElement(Words, {
    as: "h1",
    text: "Montel",
    delay: 120,
    style: {
      margin: 0,
      fontSize: "clamp(48px,9vw,140px)",
      lineHeight: 0.94,
      letterSpacing: "var(--track-heading)"
    }
  })), /*#__PURE__*/React.createElement(Reveal, {
    delay: 200,
    style: {
      justifySelf: "end"
    }
  }, /*#__PURE__*/React.createElement(Kicker, {
    size: "sm",
    style: {
      border: "1px solid var(--white-24, rgba(255,255,255,0.24))",
      padding: "var(--space-2) var(--space-3)"
    }
  }, "Media production")))), /*#__PURE__*/React.createElement(Reveal, {
    delay: 260,
    style: {
      marginTop: "var(--space-7)",
      marginLeft: "calc(var(--page-margin) * -1)",
      marginRight: "calc(var(--page-margin) * -1)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: "100%",
      aspectRatio: "16 / 9",
      overflow: "hidden",
      background: "var(--surface-sunk)"
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: SET,
    alt: "",
    style: {
      position: "absolute",
      inset: 0,
      width: "100%",
      height: "100%",
      objectFit: "cover",
      display: "block"
    }
  })))), /*#__PURE__*/React.createElement("section", {
    className: "dolle-calm",
    style: {
      background: "var(--dolle-white)",
      color: "var(--text-body)",
      padding: "var(--section-gap) var(--page-margin)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: "var(--content-max)",
      margin: "0 auto",
      display: "grid",
      gridTemplateColumns: "repeat(auto-fit,minmax(280px,1fr))",
      gap: "var(--space-9)",
      alignItems: "start"
    }
  }, /*#__PURE__*/React.createElement(Words, {
    as: "h2",
    text: "Everything on screen.",
    style: {
      margin: 0,
      maxWidth: "14ch",
      fontSize: "clamp(28px,3.4vw,52px)",
      lineHeight: 1.06,
      letterSpacing: "var(--track-heading)",
      color: "var(--text-heading)",
      paddingBottom: "0.06em"
    }
  }), /*#__PURE__*/React.createElement(Reveal, {
    delay: 140,
    style: {
      display: "grid",
      gap: "var(--space-5)",
      maxWidth: "58ch"
    }
  }, /*#__PURE__*/React.createElement("p", {
    className: "dolle-lead",
    style: {
      margin: 0
    }
  }, "Montel is a furniture retailer with stores across the Netherlands and Belgium, built on a house style that has to hold up from showroom floor to phone screen."), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontSize: "var(--size-body)",
      lineHeight: "var(--lh-body)",
      color: "var(--text-body)"
    }
  }, "DOLLE has been its production partner since 2020 and produces everything the brand puts on screen. National TV commercials, social campaigns shot in fully built sets, collection photography, e-learnings for staff and the films that carry the company culture, from concept to delivery in one visual language.")))), /*#__PURE__*/React.createElement("section", {
    className: "dolle-dark",
    style: {
      background: "var(--dolle-navy)",
      padding: "var(--space-8) var(--page-margin)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: "var(--content-max)",
      margin: "0 auto",
      display: "flex",
      justifyContent: "space-between",
      alignItems: "baseline",
      gap: "var(--space-7)",
      flexWrap: "wrap"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-core)",
      fontWeight: "var(--weight-heading)",
      fontSize: "clamp(24px,3vw,44px)",
      letterSpacing: "var(--track-heading)"
    }
  }, "Media production"), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-core)",
      fontWeight: "var(--weight-heading)",
      fontSize: "clamp(24px,3vw,44px)",
      textTransform: "uppercase",
      letterSpacing: "var(--track-wildly)",
      whiteSpace: "nowrap"
    }
  }, "Wildly ", /*#__PURE__*/React.createElement("span", {
    style: {
      color: "var(--text-accent)"
    }
  }, "Visible")))), /*#__PURE__*/React.createElement("section", {
    className: "dolle-calm",
    style: {
      background: "var(--dolle-white)",
      color: "var(--text-body)",
      padding: "var(--section-gap) var(--page-margin)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: "var(--content-max)",
      margin: "0 auto"
    }
  }, /*#__PURE__*/React.createElement(Reveal, null, /*#__PURE__*/React.createElement(Film, {
    poster: POSTER,
    onderschrift: "National commercial \xB7 Broadcast"
  })))), /*#__PURE__*/React.createElement("section", {
    className: "dolle-calm",
    style: {
      background: "var(--dolle-white)",
      color: "var(--text-body)",
      padding: "0 var(--page-margin) var(--section-gap)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: "var(--content-max)",
      margin: "0 auto",
      display: "grid",
      gap: "clamp(56px,9vh,120px)"
    }
  }, BLOKKEN.map((b, i) => {
    const beeldEerst = i % 2 === 0;
    const beeld = /*#__PURE__*/React.createElement(CornerRule, {
      corners: "tl-br",
      size: 24,
      inset: 14,
      tone: "strong"
    }, /*#__PURE__*/React.createElement(Strook, {
      items: b.strook
    }));
    const tekst = /*#__PURE__*/React.createElement("div", {
      style: {
        display: "grid",
        gap: "var(--space-4)",
        maxWidth: "46ch"
      }
    }, /*#__PURE__*/React.createElement("h3", {
      style: {
        margin: 0,
        fontFamily: "var(--font-core)",
        fontWeight: "var(--weight-heading)",
        fontSize: "clamp(20px,2.2vw,30px)",
        letterSpacing: "var(--track-heading)",
        color: "var(--text-heading)"
      }
    }, b.kop), /*#__PURE__*/React.createElement("p", {
      style: {
        margin: 0,
        fontSize: "var(--size-body)",
        lineHeight: "var(--lh-body)"
      }
    }, b.tekst));
    return /*#__PURE__*/React.createElement(Reveal, {
      key: b.kop,
      style: {
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit,minmax(300px,1fr))",
        gap: "var(--space-8)",
        alignItems: "center"
      }
    }, beeldEerst ? beeld : tekst, beeldEerst ? tekst : beeld);
  }))), /*#__PURE__*/React.createElement("section", {
    className: "dolle-calm",
    style: {
      background: "var(--dolle-white)",
      color: "var(--text-body)",
      padding: "0 var(--page-margin) var(--section-gap)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: "var(--content-max)",
      margin: "0 auto",
      textAlign: "center",
      borderTop: "1px solid var(--border-hairline)",
      paddingTop: "var(--space-7)"
    }
  }, /*#__PURE__*/React.createElement(Kicker, {
    size: "sm",
    style: {
      color: "var(--text-heading)",
      lineHeight: 2
    }
  }, "Location \xB7 Set design \xB7 Concept \xB7 Direction \xB7 Production \xB7 Edit \xB7 Photography"))), /*#__PURE__*/React.createElement("section", {
    style: {
      background: "var(--surface-sunk)",
      color: "var(--text-body)",
      padding: "var(--section-gap) var(--page-margin)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: "var(--content-max)",
      margin: "0 auto"
    }
  }, /*#__PURE__*/React.createElement(Reveal, {
    style: {
      display: "grid",
      justifyItems: "start"
    }
  }, /*#__PURE__*/React.createElement(CornerRule, {
    corners: "tl-br",
    size: 26,
    inset: 18,
    tone: "strong",
    style: {
      width: "fit-content",
      maxWidth: "min(100%, 52ch)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gap: "var(--space-5)",
      maxWidth: "46ch",
      padding: "var(--space-5)"
    }
  }, /*#__PURE__*/React.createElement("blockquote", {
    style: {
      margin: 0,
      fontFamily: "var(--font-core)",
      fontWeight: "var(--weight-heading)",
      fontSize: "clamp(20px,2.3vw,32px)",
      lineHeight: 1.3,
      letterSpacing: "var(--track-heading)",
      color: "var(--text-heading)"
    }
  }, "\"Working with team DOLLE is a real pleasure. We have done plenty of great shoots together by now. The contact is always easy and relaxed, and the end result is beautiful every time.\""), /*#__PURE__*/React.createElement(Kicker, {
    size: "sm"
  }, "Manon Smits \xB7 Head of marketing \xB7 Montel")))))), /*#__PURE__*/React.createElement("section", {
    className: "dolle-dark",
    style: {
      background: "var(--dolle-navy)",
      padding: "var(--section-gap) var(--page-margin)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: "var(--content-max)",
      margin: "0 auto",
      display: "grid",
      gap: "var(--space-6)"
    }
  }, /*#__PURE__*/React.createElement(Kicker, {
    style: {
      color: "var(--text-muted)"
    }
  }, "[ Related work ]"), /*#__PURE__*/React.createElement("div", null, VERWANT.map((c, i) => /*#__PURE__*/React.createElement(VerwantRij, {
    key: c.klant,
    c: {
      ...c,
      i
    },
    go: go
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      height: 1,
      background: "var(--white-24, rgba(255,255,255,0.24))"
    }
  })))), window.HomeConversie ? /*#__PURE__*/React.createElement(window.HomeConversie, {
    go: go
  }) : null);
}
Object.assign(window, {
  CaseMontel,
  CaseStrook: Strook,
  CaseFilm: Film
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "scraps/CaseMontel-v1.jsx", error: String((e && e.message) || e) }); }

// scraps/knip-mp4.js
try { (() => {
/* Knipt een videofragment uit een MP4 zonder te hercoderen (alleen videospoor).
   Begint op het dichtstbijzijnde keyframe vóór het startpunt. */
(function () {
  function u32(d, o) {
    return d.getUint32(o);
  }
  function typ(d, o) {
    return String.fromCharCode(d.getUint8(o), d.getUint8(o + 1), d.getUint8(o + 2), d.getUint8(o + 3));
  }
  function kids(d, start, end) {
    const out = [];
    let o = start;
    while (o + 8 <= end) {
      let size = u32(d, o),
        hdr = 8;
      const t = typ(d, o + 4);
      if (size === 1) {
        size = Number(d.getBigUint64(o + 8));
        hdr = 16;
      }
      if (size === 0) size = end - o;
      out.push({
        t,
        o,
        size,
        body: o + hdr,
        end: o + size
      });
      o += size;
    }
    return out;
  }
  function find(d, box, pad) {
    let cur = box;
    for (const t of pad) {
      let s = cur.body;
      if (cur.t === "stsd") s += 8;
      const k = kids(d, s, cur.end).find(b => b.t === t);
      if (!k) return null;
      cur = k;
    }
    return cur;
  }
  function bytes(u8, b) {
    return u8.slice(b.o, b.end);
  }
  function box(t, ...delen) {
    let len = 8;
    for (const p of delen) len += p.length;
    const out = new Uint8Array(len);
    const d = new DataView(out.buffer);
    d.setUint32(0, len);
    for (let i = 0; i < 4; i++) out[4 + i] = t.charCodeAt(i);
    let o = 8;
    for (const p of delen) {
      out.set(p, o);
      o += p.length;
    }
    return out;
  }
  function tabel(versieFlags, rijen, perRij) {
    const out = new Uint8Array(8 + rijen.length * perRij * 4);
    const d = new DataView(out.buffer);
    d.setUint32(0, versieFlags);
    d.setUint32(4, rijen.length);
    let o = 8;
    for (const r of rijen) for (const v of r) {
      d.setUint32(o, v >>> 0);
      o += 4;
    }
    return out;
  }
  function zetDuur(u8box, isTkhd, duur) {
    const b = u8box.slice();
    const d = new DataView(b.buffer);
    const v = b[8];
    if (v === 1) {
      const o = isTkhd ? 8 + 4 + 8 + 8 + 4 + 4 : 8 + 4 + 8 + 8 + 4;
      d.setBigUint64(o, BigInt(duur));
    } else {
      const o = isTkhd ? 8 + 4 + 4 + 4 + 4 + 4 : 8 + 4 + 4 + 4 + 4;
      d.setUint32(o, duur);
    }
    return b;
  }
  function timescale(d, b) {
    const v = d.getUint8(b.body);
    return v === 1 ? u32(d, b.body + 4 + 16) : u32(d, b.body + 4 + 8);
  }
  window.knipMp4 = function (buf, startSec, duurSec) {
    const u8 = new Uint8Array(buf);
    const d = new DataView(buf);
    const top = kids(d, 0, u8.length);
    const ftyp = top.find(b => b.t === "ftyp");
    const moov = top.find(b => b.t === "moov");
    const mvhd = kids(d, moov.body, moov.end).find(b => b.t === "mvhd");
    const traks = kids(d, moov.body, moov.end).filter(b => b.t === "trak");
    const trak = traks.find(t => {
      const h = find(d, t, ["mdia", "hdlr"]);
      return h && typ(d, h.body + 8) === "vide";
    });
    const tkhd = find(d, trak, ["tkhd"]);
    const mdia = find(d, trak, ["mdia"]);
    const mdhd = find(d, trak, ["mdia", "mdhd"]);
    const hdlr = find(d, trak, ["mdia", "hdlr"]);
    const minf = find(d, trak, ["mdia", "minf"]);
    const vmhd = find(d, minf, ["vmhd"]);
    const dinf = find(d, minf, ["dinf"]);
    const stbl = find(d, minf, ["stbl"]);
    const sb = t => kids(d, stbl.body, stbl.end).find(b => b.t === t);
    const stsd = sb("stsd"),
      stts = sb("stts"),
      ctts = sb("ctts"),
      stss = sb("stss"),
      stsc = sb("stsc"),
      stsz = sb("stsz");
    const stco = sb("stco"),
      co64 = sb("co64");
    const ts = timescale(d, mdhd);
    const movieTs = u32(d, mvhd.body + (d.getUint8(mvhd.body) === 1 ? 20 : 12));
    const nS = u32(d, stsz.body + 8);
    const vast = u32(d, stsz.body + 4);
    const maat = new Array(nS);
    for (let i = 0; i < nS; i++) maat[i] = vast || u32(d, stsz.body + 12 + i * 4);
    const dts = new Array(nS),
      delta = new Array(nS);
    {
      let n = u32(d, stts.body + 4),
        o = stts.body + 8,
        i = 0,
        t = 0;
      for (let e = 0; e < n; e++) {
        const c = u32(d, o),
          dl = u32(d, o + 4);
        o += 8;
        for (let k = 0; k < c; k++) {
          dts[i] = t;
          delta[i] = dl;
          t += dl;
          i++;
        }
      }
    }
    const cto = new Array(nS).fill(0);
    if (ctts) {
      let n = u32(d, ctts.body + 4),
        o = ctts.body + 8,
        i = 0;
      for (let e = 0; e < n; e++) {
        const c = u32(d, o),
          v = d.getInt32(o + 4);
        o += 8;
        for (let k = 0; k < c; k++) cto[i++] = v;
      }
    }
    const key = new Array(nS).fill(!stss);
    if (stss) {
      const n = u32(d, stss.body + 4);
      for (let e = 0; e < n; e++) key[u32(d, stss.body + 8 + e * 4) - 1] = true;
    }
    const chunkOff = [];
    if (stco) {
      const n = u32(d, stco.body + 4);
      for (let e = 0; e < n; e++) chunkOff.push(u32(d, stco.body + 8 + e * 4));
    } else {
      const n = u32(d, co64.body + 4);
      for (let e = 0; e < n; e++) chunkOff.push(Number(d.getBigUint64(co64.body + 8 + e * 8)));
    }
    const off = new Array(nS);
    {
      const n = u32(d, stsc.body + 4);
      const rij = [];
      for (let e = 0; e < n; e++) rij.push([u32(d, stsc.body + 8 + e * 12), u32(d, stsc.body + 12 + e * 12)]);
      let s = 0;
      for (let c = 0; c < chunkOff.length && s < nS; c++) {
        let per = rij[0][1];
        for (const r of rij) if (c + 1 >= r[0]) per = r[1];
        let o = chunkOff[c];
        for (let k = 0; k < per && s < nS; k++) {
          off[s] = o;
          o += maat[s];
          s++;
        }
      }
    }
    const t0 = Math.round(startSec * ts),
      t1 = Math.round((startSec + duurSec) * ts);
    let a = 0;
    for (let i = 0; i < nS; i++) {
      if (dts[i] > t0) break;
      if (key[i]) a = i;
    }
    let b = a;
    while (b < nS && dts[b] < t1) b++;
    const sel = [];
    for (let i = a; i < b; i++) sel.push(i);
    let mdatLen = 0;
    for (const i of sel) mdatLen += maat[i];
    const mdatData = new Uint8Array(mdatLen);
    {
      let o = 0;
      for (const i of sel) {
        mdatData.set(u8.subarray(off[i], off[i] + maat[i]), o);
        o += maat[i];
      }
    }
    const rle = arr => {
      const out = [];
      for (const v of arr) {
        const l = out[out.length - 1];
        if (l && l[1] === v) l[0]++;else out.push([1, v]);
      }
      return out;
    };
    const nStts = box("stts", tabel(0, rle(sel.map(i => delta[i])), 2));
    const nCtts = ctts ? box("ctts", tabel(0, rle(sel.map(i => cto[i])), 2)) : null;
    const keys = [];
    sel.forEach((i, k) => {
      if (key[i]) keys.push([k + 1]);
    });
    const nStss = stss ? box("stss", tabel(0, keys, 1)) : null;
    const nStsc = box("stsc", tabel(0, [[1, sel.length, 1]], 3));
    const szBody = new Uint8Array(12 + sel.length * 4);
    {
      const dv = new DataView(szBody.buffer);
      dv.setUint32(8, sel.length);
      sel.forEach((i, k) => dv.setUint32(12 + k * 4, maat[i]));
    }
    const nStsz = box("stsz", szBody);
    const coBody = new Uint8Array(12);
    const nStco = box("stco", coBody);
    let mediaDuur = 0;
    for (const i of sel) mediaDuur += delta[i];
    const movieDuur = Math.round(mediaDuur / ts * movieTs);
    const eerste = cto[a];
    const elstBody = new Uint8Array(20);
    {
      const dv = new DataView(elstBody.buffer);
      dv.setUint32(4, 1);
      dv.setUint32(8, movieDuur);
      dv.setInt32(12, eerste);
      dv.setUint32(16, 0x00010000);
    }
    const edts = box("edts", box("elst", elstBody));
    const delenStbl = [bytes(u8, stsd), nStts];
    if (nCtts) delenStbl.push(nCtts);
    if (nStss) delenStbl.push(nStss);
    delenStbl.push(nStsc, nStsz, nStco);
    const nStbl = box("stbl", ...delenStbl);
    const minfDelen = [];
    if (vmhd) minfDelen.push(bytes(u8, vmhd));
    if (dinf) minfDelen.push(bytes(u8, dinf));
    minfDelen.push(nStbl);
    const nMinf = box("minf", ...minfDelen);
    const nMdia = box("mdia", zetDuur(bytes(u8, mdhd), false, mediaDuur), bytes(u8, hdlr), nMinf);
    const nTrak = box("trak", zetDuur(bytes(u8, tkhd), true, movieDuur), edts, nMdia);
    const nMoov = box("moov", zetDuur(bytes(u8, mvhd), false, movieDuur), nTrak);
    const fty = bytes(u8, ftyp);
    const mdatOff = fty.length + nMoov.length + 8;
    {
      const zoek = nMoov;
      const dv = new DataView(zoek.buffer);
      for (let o = 0; o < zoek.length - 16; o++) {
        if (zoek[o + 4] === 0x73 && zoek[o + 5] === 0x74 && zoek[o + 6] === 0x63 && zoek[o + 7] === 0x6f && dv.getUint32(o) === 20) {
          dv.setUint32(o + 12, 1);
          dv.setUint32(o + 16, mdatOff);
          break;
        }
      }
    }
    const mdatHdr = new Uint8Array(8);
    new DataView(mdatHdr.buffer).setUint32(0, 8 + mdatLen);
    mdatHdr.set([0x6d, 0x64, 0x61, 0x74], 4);
    return {
      blob: new Blob([fty, nMoov, mdatHdr, mdatData], {
        type: "video/mp4"
      }),
      start: dts[a] / ts,
      duur: mediaDuur / ts,
      samples: sel.length
    };
  };
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "scraps/knip-mp4.js", error: String((e && e.message) || e) }); }

// slides/Slides.jsx
try { (() => {
const {
  Logo,
  Kicker,
  Frame,
  WildlyStatement,
  StatFrame,
  ServiceList,
  PageEdge
} = window.DesignSystem_8f95a2;

/* 1280×720 stage. class="dolle-slide" remapt de webtokens naar de slide-ladder
   (tokens/media.css); binnen de slide gebruik je dus gewoon --size-h1, --size-body,
   --page-margin. Nooit een eigen px-maat.
   tone: "light" = wit (paginabasis) · "calm" = gebroken wit (uitleg, opsomming,
   tabel) · "dark" = donkerblauw. */
function Slide({
  tone = "light",
  section,
  label,
  children,
  style
}) {
  const dark = tone === "dark";
  const calm = tone === "calm";
  return /*#__PURE__*/React.createElement("div", {
    className: ["dolle-slide", dark ? "dolle-dark" : null, calm ? "dolle-calm" : null].filter(Boolean).join(" "),
    style: {
      position: "relative",
      width: "1280px",
      height: "720px",
      overflow: "hidden",
      background: "var(--surface-page)",
      color: "var(--text-body)",
      fontFamily: "var(--font-core)",
      padding: "var(--page-margin)",
      display: "grid",
      ...style
    }
  }, children, section || label ? /*#__PURE__*/React.createElement(PageEdge, {
    section: section,
    label: label,
    style: {
      left: "var(--page-margin)",
      right: "var(--page-margin)",
      bottom: "var(--slide-edge-bottom)"
    }
  }) : null);
}
const H = {
  margin: 0,
  lineHeight: "var(--lh-heading)",
  letterSpacing: "var(--track-heading)",
  color: "var(--text-heading)",
  fontWeight: "var(--weight-heading)"
};

/* Cover: logo linksboven, kop, rand onder. Geen haakjes om een cover. */
function CoverSlide() {
  return /*#__PURE__*/React.createElement(Slide, {
    tone: "dark",
    style: {
      alignContent: "space-between"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "flex-start"
    }
  }, /*#__PURE__*/React.createElement(Logo, {
    variant: "open",
    tone: "white",
    height: 30
  }), /*#__PURE__*/React.createElement(Kicker, null, "Voorstel \xB7 klantnaam \xB7 2026")), /*#__PURE__*/React.createElement("h1", {
    style: {
      ...H,
      fontSize: "var(--size-h1)",
      maxWidth: "20ch"
    }
  }, "Zichtbaarheid die groeit."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "flex-end",
      paddingBottom: "12px"
    }
  }, /*#__PURE__*/React.createElement(Kicker, {
    size: "sm"
  }, "Mediaproductie \xB7 Launches \xB7 AI-systemen \xB7 Growth"), /*#__PURE__*/React.createElement(Kicker, {
    size: "sm"
  }, "dolle.nl")));
}
function SectionSlide() {
  return /*#__PURE__*/React.createElement(Slide, {
    section: "Het groeimodel",
    label: "09",
    style: {
      alignContent: "center"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gap: "var(--slide-stack)",
      maxWidth: "22ch"
    }
  }, /*#__PURE__*/React.createElement(Kicker, null, "04 \xB7 Growth"), /*#__PURE__*/React.createElement("h2", {
    style: {
      ...H,
      fontSize: "var(--size-h2)"
    }
  }, "Van bereik naar omzet.")));
}
function StatementSlide() {
  return /*#__PURE__*/React.createElement(Slide, {
    tone: "calm",
    section: "Positionering",
    label: "07",
    style: {
      gridTemplateColumns: "1.15fr 1fr",
      gap: "var(--grid-gap)",
      alignContent: "center",
      alignItems: "start"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gap: "var(--slide-stack)",
      alignContent: "start"
    }
  }, /*#__PURE__*/React.createElement(Kicker, null, "Positionering"), /*#__PURE__*/React.createElement("h2", {
    style: {
      ...H,
      fontSize: "var(--size-h2)",
      maxWidth: "20ch"
    }
  }, "DOLLE launches brands, produces media, builds systems and drives growth.")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gap: "22px",
      paddingTop: "calc(var(--size-h2) * 1.6)"
    }
  }, "[\"Mediaproductie\", \"Produceert strategische media voor bedrijven die willen groeien in zichtbaarheid.\"],", [["Launches", "Helpt bij de lancering van producten en brands."], ["AI-systemen", "Bouwt systemen die content vermenigvuldigen en zichtbaarheid schalen."], ["Growth", "Stuurt op groei: elke dienst wordt afgerekend op meetbaar resultaat."]].map(([t, b]) => /*#__PURE__*/React.createElement("div", {
    key: t,
    style: {
      borderTop: "1px solid var(--border-hairline)",
      paddingTop: "14px"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      ...H,
      fontFamily: "var(--font-core)",
      fontSize: "var(--size-h4)"
    }
  }, t), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: "6px 0 0",
      fontSize: "var(--size-body-sm)",
      lineHeight: "var(--lh-body)",
      color: "var(--text-body)",
      maxWidth: "42ch"
    }
  }, b)))));
}
function ServicesSlide() {
  return /*#__PURE__*/React.createElement(Slide, {
    tone: "dark",
    section: "Diensten",
    label: "08",
    style: {
      alignContent: "space-between"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "1.1fr 1fr",
      gap: "var(--grid-gap)",
      alignItems: "end"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gap: "var(--slide-stack)"
    }
  }, /*#__PURE__*/React.createElement(Kicker, null, "Diensten"), /*#__PURE__*/React.createElement("h2", {
    style: {
      ...H,
      fontSize: "var(--size-h2)",
      maxWidth: "22ch"
    }
  }, "Vier diensten, elk met een eigen signatuur.")), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      paddingBottom: "8px",
      fontSize: "var(--size-body-lg)",
      lineHeight: "var(--lh-body)"
    }
  }, "Functionele namen, \xE9\xE9n vaste WILDLY-signatuur per dienst.")), /*#__PURE__*/React.createElement("div", {
    style: {
      paddingBottom: "40px"
    }
  }, /*#__PURE__*/React.createElement(ServiceList, {
    layout: "grid"
  })));
}
function CaseSlide() {
  return /*#__PURE__*/React.createElement(Slide, {
    section: "Bewijs",
    label: "20",
    style: {
      gridTemplateColumns: "1fr auto",
      gap: "var(--grid-gap)",
      alignItems: "center",
      alignContent: "center"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gap: "var(--slide-stack)"
    }
  }, /*#__PURE__*/React.createElement(Kicker, null, "Case \xB7 relaunch"), /*#__PURE__*/React.createElement("h2", {
    style: {
      ...H,
      fontSize: "var(--size-h2)",
      maxWidth: "24ch"
    }
  }, "Bereik stond stil. E\xE9n productieblok bracht het in beweging."), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontSize: "var(--size-body-lg)",
      lineHeight: "var(--lh-body)",
      maxWidth: "var(--measure)"
    }
  }, "Nulmeting vooraf, negen weken productie, 90 dagen meten. Uitgangssituatie \u2192 ingreep \u2192 cijfer.")), /*#__PURE__*/React.createElement(StatFrame, {
    value: "+312%",
    label: "Bereik \xB7 90 dagen na relaunch",
    size: 80
  }));
}

/* Endcard: de schakel sluit. Het statement staat alleen, nooit onder of naast het logo. */
function EndcardSlide() {
  return /*#__PURE__*/React.createElement(Slide, {
    tone: "dark",
    style: {
      placeContent: "center",
      justifyItems: "center",
      textAlign: "center",
      gap: "0"
    }
  }, /*#__PURE__*/React.createElement(WildlyStatement, {
    statement: "WILDLY VISIBLE",
    align: "center"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: "var(--page-margin)",
      right: "var(--page-margin)",
      bottom: "var(--slide-edge-bottom)",
      display: "flex",
      justifyContent: "space-between",
      alignItems: "flex-end"
    }
  }, /*#__PURE__*/React.createElement(Kicker, {
    size: "sm"
  }, "dolle.nl \xB7 info@dolle.nl"), /*#__PURE__*/React.createElement(Kicker, {
    size: "sm"
  }, "2026")));
}

/* Frame-slide: de haakjes kaderen beeld — niet een cover, niet een tekstblok. */
function FrameSlide() {
  return /*#__PURE__*/React.createElement(Slide, {
    tone: "dark",
    section: "Mediaproductie",
    label: "12",
    style: {
      placeItems: "center"
    }
  }, /*#__PURE__*/React.createElement(Frame, {
    tone: "white",
    size: 96,
    style: {
      width: "100%",
      height: "100%",
      display: "grid",
      placeItems: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      placeItems: "center",
      background: "var(--surface-sunk)",
      border: "1px solid var(--border-hairline)"
    }
  }, /*#__PURE__*/React.createElement(Kicker, {
    size: "sm"
  }, "Placeholder \xB7 beeld in het frame"))));
}
Object.assign(window, {
  Slide,
  CoverSlide,
  SectionSlide,
  StatementSlide,
  ServicesSlide,
  CaseSlide,
  EndcardSlide,
  FrameSlide
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "slides/Slides.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/Career.jsx
try { (() => {
const DS = window.DesignSystem_8f95a2;
const {
  Kicker,
  Button,
  Icon
} = DS;
const CornerRule = DS.CornerRule || (({
  children
}) => children || null);
const PHOTO = "../../assets/photography/dolle-set-01.jpg";
const CIMG = "../../assets/cases/web/";

/* Placeholder-vacatures. Vervang door de echte openstaande rollen. */
const ROLES = [{
  t: "Videographer / editor",
  team: "Media production",
  type: "Full-time",
  plek: "Amsterdam"
}, {
  t: "Creative producer",
  team: "Launches",
  type: "Full-time",
  plek: "Amsterdam"
}, {
  t: "Growth marketer",
  team: "Growth",
  type: "Full-time · part-time",
  plek: "Amsterdam · remote"
}, {
  t: "AI systems builder",
  team: "AI systems",
  type: "Freelance",
  plek: "Remote"
}, {
  t: "Internship · production",
  team: "Media production",
  type: "5–6 months",
  plek: "Amsterdam"
}];
const HOW = [{
  n: "01",
  t: "Standpoint first",
  b: "We open with what we think, then we prove it. In the work and in the room."
}, {
  n: "02",
  t: "Made for the channel",
  b: "Short, rhythmic, built for the feed. Craft is knowing where the attention is."
}, {
  n: "03",
  t: "Proof in the past tense",
  b: "A baseline before we start, 90 days of measurement after. We only claim what we measured."
}, {
  n: "04",
  t: "One movement",
  b: "Produce, launch, build, grow. Everyone here touches more than one of the four."
}];
function CareerHero({
  go
}) {
  return /*#__PURE__*/React.createElement("section", {
    style: {
      background: "var(--dolle-white)",
      padding: "var(--space-10) var(--page-margin) var(--space-9)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: "var(--content-max)",
      margin: "0 auto",
      display: "grid",
      gap: "var(--space-8)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "1.3fr 1fr",
      gap: "var(--grid-gap)",
      alignItems: "end"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gap: "var(--space-5)",
      justifyItems: "start"
    }
  }, /*#__PURE__*/React.createElement(Reveal, null, /*#__PURE__*/React.createElement(Kicker, null, "Careers")), /*#__PURE__*/React.createElement(Words, {
    as: "h1",
    text: "Make brands wildly visible. With us.",
    accent: "visible",
    delay: 100,
    style: {
      margin: 0,
      fontSize: "clamp(34px,4.4vw,64px)",
      lineHeight: 1.06,
      letterSpacing: "var(--track-heading)",
      maxWidth: "15ch"
    }
  })), /*#__PURE__*/React.createElement(Reveal, {
    delay: 500,
    style: {
      display: "grid",
      gap: "var(--space-5)",
      justifyItems: "start"
    }
  }, /*#__PURE__*/React.createElement("p", {
    className: "dolle-lead",
    style: {
      margin: 0,
      maxWidth: "38ch"
    }
  }, "A studio in Amsterdam that produces, launches, builds and grows. Small crew, big screens, measured results."), /*#__PURE__*/React.createElement(Button, {
    variant: "link",
    onClick: () => document.getElementById("roles") && window.scrollTo({
      top: document.getElementById("roles").getBoundingClientRect().top + window.scrollY - 96,
      behavior: "smooth"
    })
  }, "See open roles"))), /*#__PURE__*/React.createElement(Reveal, {
    delay: 200
  }, /*#__PURE__*/React.createElement(CornerRule, {
    corners: "tl-br",
    size: 26,
    inset: 16
  }, /*#__PURE__*/React.createElement(ParallaxImage, {
    src: PHOTO,
    speed: 0.16,
    style: {
      aspectRatio: "21 / 9",
      background: "#0b1730"
    }
  })))));
}

/* Hoe we werken: vier genummerde kolommen, hairline erboven die volloopt. */
function CareerHow() {
  return /*#__PURE__*/React.createElement("section", {
    className: "dolle-dark",
    style: {
      background: "var(--dolle-navy)",
      padding: "var(--section-gap) var(--page-margin)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: "var(--content-max)",
      margin: "0 auto",
      display: "grid",
      gap: "var(--space-9)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "1fr 1fr",
      gap: "var(--grid-gap)",
      alignItems: "end"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gap: "var(--space-4)",
      justifyItems: "start"
    }
  }, /*#__PURE__*/React.createElement(Reveal, null, /*#__PURE__*/React.createElement(Kicker, null, "How we work")), /*#__PURE__*/React.createElement(Words, {
    as: "h2",
    text: "Attention moves wildly. So do we.",
    delay: 80,
    style: {
      margin: 0,
      maxWidth: "16ch"
    }
  })), /*#__PURE__*/React.createElement(Reveal, {
    delay: 300
  }, /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      color: "var(--text-body)",
      maxWidth: "44ch"
    }
  }, "No departments, no handovers. One crew that carries a brand from baseline to measured result."))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(4,minmax(0,1fr))",
      gap: "var(--grid-gap)"
    }
  }, HOW.map((h, i) => /*#__PURE__*/React.createElement("div", {
    key: h.n,
    style: {
      display: "grid",
      gap: "var(--space-4)",
      alignContent: "start"
    }
  }, /*#__PURE__*/React.createElement(RevealRule, {
    delay: i * 120,
    tone: "var(--white-24, rgba(255,255,255,.24))"
  }), /*#__PURE__*/React.createElement(Reveal, {
    delay: i * 120 + 200,
    style: {
      display: "grid",
      gap: "var(--space-3)"
    }
  }, /*#__PURE__*/React.createElement(Kicker, {
    size: "sm"
  }, h.n), /*#__PURE__*/React.createElement("h3", {
    style: {
      margin: 0,
      fontSize: "var(--size-h4)"
    }
  }, h.t), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      color: "var(--text-body)",
      fontSize: "var(--size-body-sm)"
    }
  }, h.b)))))));
}

/* Drie beelden in parallax op verschillende snelheden: de studio in beweging. */
function CareerStrip() {
  const imgs = [CIMG + "case-04.jpg", CIMG + "case-02.jpg", CIMG + "case-06.jpg"];
  return /*#__PURE__*/React.createElement("section", {
    style: {
      background: "var(--dolle-white)",
      padding: "var(--section-gap) var(--page-margin) 0"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: "var(--content-max)",
      margin: "0 auto",
      display: "grid",
      gridTemplateColumns: "1fr 1.4fr 1fr",
      gap: "var(--grid-gap)",
      alignItems: "center"
    }
  }, imgs.map((s, i) => /*#__PURE__*/React.createElement(Reveal, {
    key: s,
    delay: i * 120
  }, /*#__PURE__*/React.createElement(ParallaxImage, {
    src: s,
    speed: i === 1 ? 0.06 : 0.2,
    style: {
      aspectRatio: i === 1 ? "4 / 5" : "3 / 4",
      background: "#0b1730",
      marginTop: i === 1 ? 0 : "var(--space-9)"
    }
  })))));
}
function RoleRow({
  r,
  go,
  i
}) {
  const [hover, setHover] = React.useState(false);
  return /*#__PURE__*/React.createElement(Reveal, {
    delay: i * 60,
    as: "button",
    onClick: () => go("contact"),
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      appearance: "none",
      background: "none",
      border: 0,
      borderTop: "1px solid var(--border-hairline)",
      width: "100%",
      textAlign: "left",
      cursor: "pointer",
      display: "grid",
      gridTemplateColumns: "1.6fr 1fr 1fr auto",
      gap: "var(--space-6)",
      alignItems: "center",
      padding: "var(--space-6) 0",
      color: "var(--text-heading)",
      position: "relative"
    }
  }, /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true",
    style: {
      position: "absolute",
      left: 0,
      top: -1,
      height: 1,
      width: "100%",
      background: "var(--text-heading)",
      transformOrigin: "left",
      transform: hover ? "scaleX(1)" : "scaleX(0)",
      transition: "transform var(--dur-frame) var(--ease-dolle)"
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: "var(--space-4)"
    }
  }, /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true",
    style: {
      display: "inline-flex",
      width: 14,
      overflow: "hidden",
      opacity: hover ? 1 : 0,
      transform: hover ? "none" : "translateX(-8px)",
      transition: "opacity var(--dur-ui) var(--ease-dolle), transform var(--dur-frame) var(--ease-dolle)",
      color: "var(--text-accent)"
    }
  }, /*#__PURE__*/React.createElement("svg", {
    viewBox: "0 0 100 78",
    width: "14",
    height: "11",
    fill: "none"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M12 6 V44 H44",
    stroke: "currentColor",
    strokeWidth: "14"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M88 72 V34 H56",
    stroke: "currentColor",
    strokeWidth: "14"
  }))), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-core)",
      fontWeight: "var(--weight-heading)",
      fontSize: "var(--size-h3)",
      letterSpacing: "var(--track-heading)",
      transform: hover ? "translateX(4px)" : "none",
      transition: "transform var(--dur-frame) var(--ease-dolle)"
    }
  }, r.t)), /*#__PURE__*/React.createElement(Kicker, {
    as: "span",
    size: "sm"
  }, r.team), /*#__PURE__*/React.createElement("span", {
    style: {
      color: "var(--text-body)",
      fontSize: "var(--size-body-sm)"
    }
  }, r.type), /*#__PURE__*/React.createElement("span", {
    style: {
      color: "var(--text-muted)",
      fontSize: "var(--size-body-sm)",
      whiteSpace: "nowrap"
    }
  }, r.plek));
}
function CareerRoles({
  go
}) {
  return /*#__PURE__*/React.createElement("section", {
    id: "roles",
    style: {
      background: "var(--dolle-white)",
      padding: "var(--section-gap) var(--page-margin)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: "var(--content-max)",
      margin: "0 auto",
      display: "grid",
      gap: "var(--space-8)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "1fr 1fr",
      gap: "var(--grid-gap)",
      alignItems: "end"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gap: "var(--space-4)",
      justifyItems: "start"
    }
  }, /*#__PURE__*/React.createElement(Reveal, null, /*#__PURE__*/React.createElement(Kicker, null, "Open roles")), /*#__PURE__*/React.createElement(Words, {
    as: "h2",
    text: "Five seats. One crew.",
    delay: 80,
    style: {
      margin: 0
    }
  })), /*#__PURE__*/React.createElement(Reveal, {
    delay: 300
  }, /*#__PURE__*/React.createElement(Kicker, {
    size: "sm"
  }, String(ROLES.length).padStart(2, "0"), " open \xB7 Amsterdam"))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      borderBottom: "1px solid var(--border-hairline)"
    }
  }, ROLES.map((r, i) => /*#__PURE__*/React.createElement(RoleRow, {
    key: r.t,
    r: r,
    i: i,
    go: go
  }))), /*#__PURE__*/React.createElement(Reveal, {
    style: {
      display: "grid",
      gridTemplateColumns: "1fr 1fr",
      gap: "var(--grid-gap)",
      alignItems: "center",
      paddingTop: "var(--space-6)"
    }
  }, /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      color: "var(--text-body)",
      maxWidth: "44ch"
    }
  }, "No seat that fits? We keep room for people who make brands visible in ways we have not seen yet. Send work, not a cover letter."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: "var(--space-6)",
      alignItems: "center",
      justifyContent: "end"
    }
  }, /*#__PURE__*/React.createElement(Button, {
    onClick: () => go("contact")
  }, "Open application"), /*#__PURE__*/React.createElement("a", {
    href: "mailto:jobs@dolle.nl",
    style: {
      color: "var(--text-heading)",
      fontSize: "var(--size-body-sm)"
    }
  }, "jobs@dolle.nl")))));
}
function Career({
  go
}) {
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(CareerHero, {
    go: go
  }), /*#__PURE__*/React.createElement(CareerHow, null), /*#__PURE__*/React.createElement(CareerStrip, null), /*#__PURE__*/React.createElement(CareerRoles, {
    go: go
  }));
}
Object.assign(window, {
  Career
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/Career.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/CaseBergvliet.jsx
try { (() => {
const BV_DS = window.DesignSystem_8f95a2;
const {
  Kicker: BVKicker,
  Tag: BVTag,
  Button: BVButton
} = BV_DS;
const BVWords = window.Words || (({
  as = "span",
  text,
  style
}) => React.createElement(as, {
  style: style
}, text));
const BV_BEELD = "../../assets/cases/bergvliet/";
const BV_VID = "../../assets/video/";
const BV_KOLOMGAT = "calc(var(--grid-gap) * 1.1)";
const BV_LOOP = n => BV_VID + "bergvliet-loop-0" + n + ".mp4";
const BV_POSTER = n => BV_BEELD + "bergvliet-" + n + "-poster-web.jpg";
/* Band onder de intro: loops uit alle films door elkaar, wisselende breedte. */
const BV_BAND = [{
  video: BV_VID + "bergvliet-band-01.mp4",
  r: 16 / 9
}, {
  video: BV_VID + "bergvliet-band-02.mp4",
  r: 21 / 9
}, {
  video: BV_VID + "bergvliet-band-03.mp4",
  r: 4 / 5
}, {
  video: BV_VID + "bergvliet-band-04.mp4",
  r: 16 / 9
}, {
  video: BV_VID + "bergvliet-band-05.mp4",
  r: 1
}, {
  video: BV_VID + "bergvliet-band-06.mp4",
  r: 3 / 4
}];
/* Carrousel onder de corporate film: stills en loops uit de film. */
const BV_CORPORATE = [{
  src: BV_BEELD + "bergvliet-aerial-01-web.jpg",
  r: 1.79
}, {
  src: BV_BEELD + "bergvliet-golf-01-web.jpg",
  r: 1.2
}, {
  src: BV_BEELD + "bergvliet-horeca-01-web.jpg",
  r: 1.79
}, {
  video: BV_LOOP(2),
  r: 4 / 5
}, {
  src: BV_BEELD + "bergvliet-golf-05-web.jpg",
  r: 1.18
}, {
  src: BV_BEELD + "bergvliet-spa-01-web.jpg",
  r: 1.37
}, {
  video: BV_LOOP(4),
  r: 16 / 9
}, {
  src: BV_BEELD + "bergvliet-events-01-web.jpg",
  r: 1.78
}, {
  src: BV_BEELD + "bergvliet-golf-06-web.jpg",
  r: 1.42
}, {
  src: BV_BEELD + "bergvliet-villas-02-web.jpg",
  r: 1.65
}, {
  src: BV_BEELD + "bergvliet-golf-04-web.jpg",
  r: 1.55
}, {
  src: BV_BEELD + "bergvliet-horeca-02-web.jpg",
  r: 1.78
}, {
  video: BV_LOOP(6),
  r: 3 / 2
}, {
  src: BV_BEELD + "bergvliet-course-05-web.jpg",
  r: 1.78
}, {
  src: BV_BEELD + "bergvliet-golf-02-web.jpg",
  r: 1.45
}, {
  src: BV_BEELD + "bergvliet-villas-01-web.jpg",
  r: 1.55
}, {
  video: BV_LOOP(1),
  r: 16 / 9
}, {
  src: BV_BEELD + "bergvliet-course-04-web.jpg",
  r: 1.79
}, {
  src: BV_BEELD + "bergvliet-golf-07-web.jpg",
  r: 1.78
}, {
  video: BV_LOOP(3),
  r: 4 / 5
}, {
  src: BV_BEELD + "bergvliet-course-01-web.jpg",
  r: 1.79
}, {
  src: BV_BEELD + "bergvliet-golf-03-web.jpg",
  r: 1.78
}, {
  video: BV_LOOP(5),
  r: 3 / 2
}];
const BV_DEELFILMS = [{
  naam: "Golf Academy",
  film: BV_VID + "bergvliet-golf-academy.mp4",
  poster: BV_POSTER("golf-academy")
}, {
  naam: "Villas",
  film: BV_VID + "bergvliet-villas.mp4",
  poster: BV_BEELD + "bergvliet-villas-02-web.jpg"
}, {
  naam: "Hospitality & events",
  film: BV_VID + "bergvliet-horeca.mp4",
  poster: BV_BEELD + "bergvliet-horeca-01-web.jpg"
}];

/* Doorlopende band naar links, zoals de andere carrousels; stopt niet bij hover. */
function BVBand({
  items,
  hoog,
  sleep = false,
  schuif = true,
  golf = false,
  kap = 0
}) {
  const band = React.useRef(null);
  React.useEffect(() => {
    const el = band.current;
    if (!el) return;
    const reduce = window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    let vorige = performance.now(),
      raf,
      handTot = 0,
      pos = 0;
    const helft = () => el.scrollWidth / 2;
    const rond = () => {
      const h = helft();
      if (h > 0) {
        if (el.scrollLeft >= h) el.scrollLeft -= h;
        if (el.scrollLeft <= 0) el.scrollLeft += h;
      }
    };
    /* Muiswiel en trackpad schuiven de band zelf; daarna loopt hij rustig verder. */
    const wiel = e => {
      const d = Math.abs(e.deltaX) > Math.abs(e.deltaY) ? e.deltaX : e.deltaY;
      if (!d) return;
      e.preventDefault();
      el.scrollLeft += d;
      rond();
      pos = el.scrollLeft;
      handTot = performance.now() + 1600;
    };
    /* Slepen met muis en swipen met de vinger, op elke band. Na loslaten
       glijdt hij even door en pakt daarna zijn eigen tempo weer op. */
    let neer = false,
      x0 = 0,
      l0 = 0,
      vx = 0,
      tLaatst = 0,
      xLaatst = 0,
      glij = 0;
    const down = e => {
      neer = true;
      x0 = xLaatst = e.clientX;
      l0 = el.scrollLeft;
      tLaatst = performance.now();
      vx = 0;
      glij = 0;
      handTot = Infinity;
      el.style.cursor = "grabbing";
    };
    const move = e => {
      if (!neer) return;
      const nu = performance.now(),
        dt = Math.max(1, nu - tLaatst);
      vx = vx * 0.6 + (xLaatst - e.clientX) / dt * 0.4;
      xLaatst = e.clientX;
      tLaatst = nu;
      el.scrollLeft = l0 - (e.clientX - x0);
      rond();
      pos = el.scrollLeft;
    };
    const up = () => {
      if (!neer) return;
      neer = false;
      el.style.cursor = "grab";
      glij = Math.max(-4, Math.min(4, vx));
      handTot = performance.now() + 1400;
      pos = el.scrollLeft;
    };
    const sleepKlik = e => {
      if (Math.abs(xLaatst - x0) > 4) {
        e.preventDefault();
        e.stopPropagation();
      }
    };
    el.addEventListener("pointerdown", down);
    el.addEventListener("click", sleepKlik, true);
    el.addEventListener("dragstart", e => e.preventDefault());
    window.addEventListener("pointermove", move);
    window.addEventListener("pointerup", up);
    window.addEventListener("pointercancel", up);
    pos = el.scrollLeft;
    const tik = nu => {
      const dt = Math.min(64, nu - vorige);
      vorige = nu;
      if (!neer && Math.abs(glij) > 0.02) {
        pos += glij * dt;
        el.scrollLeft = pos;
        rond();
        pos = el.scrollLeft;
        glij *= Math.pow(0.94, dt / 16.7);
      }
      if (!reduce && nu > handTot) {
        pos += dt * 0.035;
        el.scrollLeft = pos;
        rond();
        if (Math.abs(el.scrollLeft - pos) > 2) pos = el.scrollLeft;
      }
      /* Golf: elk kader verandert rustig van verhouding terwijl het door de band
         schuift (16:9 richting vierkant, vierkant richting staand). Alleen de hoogte
         beweegt, dus de band zelf verspringt niet. */
      if (golf && !reduce) {
        const t = nu / 1000;
        el.querySelectorAll("[data-golf]").forEach(k => {
          const fase = parseFloat(k.dataset.golf);
          const b = parseFloat(k.dataset.r);
          const f = 1 + 0.16 * Math.sin(t * 0.32 + fase);
          const r = Math.max(0.5625, Math.min(1.7778, b * f));
          k.style.width = "calc(" + hoog + " * " + r.toFixed(4) + ")";
        });
      }
      /* Liggende foto's staan krap in hun kader; het beeld schuift mee met de band. */
      if (schuif) {
        const vb = el.getBoundingClientRect(),
          mid = vb.left + vb.width / 2;
        el.querySelectorAll("[data-schuif]").forEach(img => {
          const r = img.parentNode.getBoundingClientRect();
          if (r.right < vb.left - 200 || r.left > vb.right + 200) return;
          const p = Math.max(-1, Math.min(1, (r.left + r.width / 2 - mid) / (vb.width / 2 + r.width / 2)));
          img.style.transform = "translate3d(" + (p * -18).toFixed(2) + "%,0,0)";
        });
      }
      raf = requestAnimationFrame(tik);
    };
    raf = requestAnimationFrame(tik);
    return () => {
      cancelAnimationFrame(raf);
      el.removeEventListener("pointerdown", down);
      window.removeEventListener("pointermove", move);
      window.removeEventListener("pointerup", up);
      window.removeEventListener("pointercancel", up);
      el.removeEventListener("click", sleepKlik, true);
    };
  }, [sleep, golf, hoog]);
  /* Alleen video's die in beeld zijn spelen; de rest staat stil, zodat de band soepel loopt. */
  React.useEffect(() => {
    const el = band.current;
    if (!el || !("IntersectionObserver" in window)) return;
    /* Alleen laden als de band zelf in (of vlak bij) het scherm staat én de
       film horizontaal in beeld schuift; anders vreten de films alle
       verbindingen op en blijven foto's elders op de pagina leeg. */
    let inBeeld = false;
    const binnen = new Set();
    const pas = () => el.querySelectorAll("[data-bandvid]").forEach(v => {
      if (inBeeld && binnen.has(v)) {
        if (v.preload !== "auto") v.preload = "auto";
        const p = v.play();
        if (p && p.catch) p.catch(() => {});
      } else if (!v.paused) v.pause();
    });
    const io = new IntersectionObserver(lijst => {
      lijst.forEach(e => {
        if (e.isIntersecting) binnen.add(e.target);else binnen.delete(e.target);
      });
      pas();
    }, {
      root: el,
      rootMargin: "0px 300px 0px 300px",
      threshold: 0
    });
    const pagina = new IntersectionObserver(l => {
      inBeeld = l.some(e => e.isIntersecting);
      pas();
    }, {
      rootMargin: "200px 0px 200px 0px"
    });
    pagina.observe(el);
    el.querySelectorAll("[data-bandvid]").forEach(v => io.observe(v));
    return () => {
      io.disconnect();
      pagina.disconnect();
    };
  }, [items]);
  const reeks = items.concat(items);
  return /*#__PURE__*/React.createElement("div", {
    ref: band,
    style: {
      overflowX: sleep ? "auto" : "hidden",
      scrollbarWidth: "none",
      msOverflowStyle: "none",
      width: "100%",
      cursor: "grab",
      touchAction: "pan-y",
      userSelect: "none",
      WebkitUserSelect: "none"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: "var(--space-3)",
      width: "max-content",
      alignItems: "flex-start"
    }
  }, reeks.map((s, i) => {
    const krap = schuif && !s.video && s.r > 1.2;
    return /*#__PURE__*/React.createElement("span", {
      key: i,
      "data-golf": golf ? (i % items.length * 2.1).toFixed(2) : undefined,
      "data-r": golf ? (krap ? Math.max(1.1, s.r * 0.72) : s.r).toFixed(4) : undefined,
      style: {
        flex: "0 0 auto",
        height: hoog,
        width: golf ? "calc(" + hoog + " * " + (krap ? Math.max(1.1, s.r * 0.72) : s.r).toFixed(4) + ")" : undefined,
        aspectRatio: golf ? undefined : String(krap ? Math.max(1.1, s.r * 0.72) : s.r),
        overflow: "hidden",
        borderRadius: 5,
        background: "#0a1428"
      }
    }, s.video ? /*#__PURE__*/React.createElement("video", {
      src: s.video,
      muted: true,
      loop: true,
      playsInline: true,
      preload: "none",
      draggable: "false",
      "data-bandvid": "1",
      onTimeUpdate: kap ? e => {
        const v = e.currentTarget;
        if (v.duration && v.currentTime > v.duration - kap) v.currentTime = 0.05;
      } : undefined,
      ref: el => {
        if (el) {
          el.muted = true;
          el.defaultMuted = true;
        }
      },
      style: {
        display: "block",
        width: "100%",
        height: "100%",
        objectFit: "cover",
        pointerEvents: "none"
      }
    }) : krap ? /*#__PURE__*/React.createElement("img", {
      src: s.src,
      alt: "",
      decoding: "async",
      draggable: "false",
      "data-schuif": "1",
      style: {
        display: "block",
        width: "170%",
        maxWidth: "none",
        height: "100%",
        marginLeft: "-35%",
        objectFit: "cover",
        pointerEvents: "none",
        willChange: "transform"
      }
    }) : /*#__PURE__*/React.createElement("img", {
      src: s.src,
      alt: "",
      decoding: "async",
      draggable: "false",
      style: {
        display: "block",
        width: "100%",
        height: "100%",
        objectFit: "cover",
        pointerEvents: "none"
      }
    }));
  })));
}

/* Projectblokken. Beeld volgt; tot die tijd een leeg kader met hoekmarkeringen. */
const BV_INTRO = ["Landgoed Bergvliet is a historic golf estate in Oosterhout, in the south of the Netherlands. A challenging course, luxury holiday villas, Burgundian dining and wellness close by: one place with many reasons to visit.", "DOLLE wrote the production plan and filmed the whole estate in two days, from the first tee to the spa. The footage became a corporate film, a film for each part of the estate and a recruitment film, and has been running as a national TV commercial on Ziggo Sport since 2024."];
/* Cijfers voor het datablok; voorlopig, tot de echte aantallen binnen zijn. */
const BV_DATA = [{
  label: "Views generated",
  waarde: 1.2,
  achter: "M+"
}, {
  label: "Production days",
  waarde: 2
}, {
  label: "Films delivered",
  waarde: 8
}, {
  label: "Locations filmed",
  waarde: 6
}];
const BV_BLOKKEN = [{
  plek: "film",
  kop: "Production plan",
  tekst: "The estate has more sides than most productions can cover in a week. DOLLE sat down with Bergvliet first and built a shooting plan around that: what to film where, in which order, and in what light, so two days on location would yield material for every part of the estate and keep working long after the shoot.",
  kader: "3 / 2",
  src: null
}, {
  plek: "film",
  kop: "Corporate film",
  tekst: "The film that carries the whole estate: the course, the restaurants, the spa and the villas in one story.",
  kader: "16 / 9",
  src: null
}, {
  deel: true,
  kop: "The estate in parts",
  tekst: "Each part of Bergvliet also got its own film: the Golf Academy, the villas, the hospitality and event spaces, and Spa One. Same visual language, separate stories, so every department can tell its own without falling outside the brand.",
  kader: "4 / 5",
  src: null
}, {
  kop: "Aerial",
  tekst: "Drone work over the course and the grounds, giving the scale of the estate in a way the ground never can. Used across the films and as standalone footage. For the course itself DOLLE also made hole explainers: each hole flown from tee to green, with par and stroke index on screen.",
  kader: "21 / 9",
  src: null,
  video: BV_LOOP(1),
  extra: {
    film: BV_VID + "bergvliet-hole-17.mp4",
    poster: BV_BEELD + "bergvliet-hole-17-poster-web.jpg",
    onder: "GOLF COURSE EXPLAINER · HOLE 17"
  }
}];

/* Drie deelfilms naast elkaar; de film die speelt groeit tijdelijk uit, de
   andere twee schuiven in. Na afloop gaat alles terug naar gelijke breedte. */
function BVDeelfilms({
  films,
  groot = 3.2,
  klein = 0.6,
  onAan,
  watchHover = true,
  vloei = "900ms cubic-bezier(.16,.84,.24,1)"
}) {
  const lijst = films || BV_DEELFILMS;
  /* Na pauze of afloop gaat een film terug naar zijn poster met WATCH. */
  const [sleutels, setSleutels] = React.useState(() => lijst.map(() => 0));
  const terug = i => setSleutels(s => s.map((n, j) => j === i ? n + 1 : n));
  const [aan, setAan] = React.useState(-1);
  const aanRef = React.useRef(-1);
  aanRef.current = aan;
  const vak = React.useRef(null);
  React.useEffect(() => {
    const el = vak.current;
    if (!el) return;
    const idx = e => [...el.children].findIndex(c => c.contains(e.target));
    const klaar = e => {
      const i = idx(e);
      setAan(-1);
      if (i > -1) terug(i);
    };
    /* Pauze op de film die groot staat: terug naar gelijke breedte. */
    const pauze = e => {
      const i = idx(e);
      if (i < 0 || e.target.ended) return;
      if (i === aanRef.current) setAan(-1);
      terug(i);
    };
    el.addEventListener("pause", pauze, true);
    const speelt = e => {
      const i = [...el.children].findIndex(c => c.contains(e.target));
      if (i > -1) setAan(i);
    };
    el.addEventListener("ended", klaar, true);
    el.addEventListener("play", speelt, true);
    return () => {
      el.removeEventListener("pause", pauze, true);
      el.removeEventListener("ended", klaar, true);
      el.removeEventListener("play", speelt, true);
    };
  }, []);
  React.useEffect(() => {
    if (onAan) onAan(aan);
  }, [aan]);
  /* Klik ergens anders: de film stopt en alles gaat terug naar beginstand. */
  React.useEffect(() => {
    if (aan < 0) return;
    const buiten = e => {
      const el = vak.current;
      if (!el || el.contains(e.target)) return;
      if (e.target.closest && e.target.closest("[data-deel-binnen]")) return;
      el.querySelectorAll("video").forEach(v => v.pause());
      setAan(-1);
    };
    document.addEventListener("pointerdown", buiten, true);
    return () => document.removeEventListener("pointerdown", buiten, true);
  }, [aan]);
  React.useEffect(() => {
    if (aan < 0 || !vak.current) return;
    /* Alleen de actieve film speelt. */
    [...vak.current.querySelectorAll("video")].forEach((v, i) => {
      if (!vak.current.children[aan].contains(v)) v.pause();
    });
  }, [aan]);
  const kol = lijst.map((f, i) => aan < 0 ? "minmax(0,1fr)" : i === aan ? "minmax(0," + groot + "fr)" : "minmax(0," + klein + "fr)").join(" ");
  return /*#__PURE__*/React.createElement("div", {
    ref: vak,
    "data-bv-deel": "1",
    style: {
      display: "grid",
      gridTemplateColumns: kol,
      gap: "var(--space-4)",
      alignItems: "start",
      transition: "grid-template-columns " + vloei
    }
  }, lijst.map((f, i) => /*#__PURE__*/React.createElement("div", {
    key: f.naam + "-" + sleutels[i],
    onClickCapture: () => setAan(i),
    style: {
      minWidth: 0,
      opacity: aan < 0 || aan === i ? 1 : 0.55,
      transition: "opacity 900ms var(--ease-dolle)"
    }
  }, /*#__PURE__*/React.createElement(window.CaseFilm, {
    bron: f.film,
    poster: f.poster,
    kader: f.kader,
    watchHover: watchHover,
    onderschrift: f.naam.toUpperCase(),
    watch: true,
    watchSchaal: aan === i ? 2.4 : aan < 0 ? 1.7 : 0.9
  }))));
}

/* Speelt alleen zolang de muis erboven hangt; zonder geluid. */
function BVHover({
  bron,
  poster,
  kader,
  onder
}) {
  const ref = React.useRef(null);
  const aan = () => {
    const el = ref.current;
    if (el) {
      el.muted = true;
      el.play().catch(() => {});
    }
  };
  const uit = () => {
    const el = ref.current;
    if (el) el.pause();
  };
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gap: "var(--space-3)",
      minWidth: 0
    }
  }, /*#__PURE__*/React.createElement("span", {
    onMouseEnter: aan,
    onMouseLeave: uit,
    style: {
      position: "relative",
      display: "block",
      aspectRatio: kader,
      overflow: "hidden",
      borderRadius: 5,
      background: "#0a1428"
    }
  }, /*#__PURE__*/React.createElement("video", {
    ref: ref,
    src: bron,
    poster: poster,
    muted: true,
    loop: true,
    playsInline: true,
    preload: "metadata",
    style: {
      position: "absolute",
      inset: 0,
      width: "100%",
      height: "100%",
      objectFit: "cover",
      display: "block"
    }
  })), onder ? /*#__PURE__*/React.createElement(BVKicker, {
    size: "sm",
    style: {
      color: "var(--text-muted)"
    }
  }, onder) : null);
}
function BVKader({
  kader,
  src,
  video
}) {
  const leeg = !src && !video;
  return /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      display: "block",
      aspectRatio: kader,
      overflow: "hidden",
      borderRadius: 5,
      background: "#0a1428",
      minWidth: 0
    }
  }, src ? /*#__PURE__*/React.createElement("img", {
    src: src,
    alt: "",
    decoding: "async",
    style: {
      position: "absolute",
      inset: 0,
      width: "100%",
      height: "100%",
      objectFit: "cover",
      display: "block"
    }
  }) : null, video ? /*#__PURE__*/React.createElement("video", {
    src: video,
    autoPlay: true,
    muted: true,
    loop: true,
    playsInline: true,
    preload: "metadata",
    style: {
      position: "absolute",
      inset: 0,
      width: "100%",
      height: "100%",
      objectFit: "cover",
      display: "block"
    }
  }) : null, leeg ? /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      left: "8%",
      top: "10%",
      color: "var(--dolle-white)",
      opacity: 0.9
    }
  }, /*#__PURE__*/React.createElement("svg", {
    "aria-hidden": "true",
    viewBox: "0 0 52 52",
    width: "20",
    height: "20",
    fill: "none",
    style: {
      display: "block"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M6 40 V6 H40",
    stroke: "currentColor",
    strokeWidth: "12"
  }))), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      right: "8%",
      bottom: "10%",
      color: "var(--dolle-white)",
      opacity: 0.9
    }
  }, /*#__PURE__*/React.createElement("svg", {
    "aria-hidden": "true",
    viewBox: "0 0 52 52",
    width: "20",
    height: "20",
    fill: "none",
    style: {
      display: "block"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M46 12 V46 H12",
    stroke: "currentColor",
    strokeWidth: "12"
  })))) : null);
}
function BVBlok({
  b,
  i
}) {
  const beeldLinks = i % 2 === 1;
  /* Bij Aerial (twee films onder elkaar) loopt de tekst mee tot de onderkant van het beeld. */
  const plak = !!b.extra;
  const tekst = /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gap: "var(--space-3)",
      justifyItems: "start",
      maxWidth: "45ch",
      alignSelf: "start",
      ...(plak ? {
        position: "sticky",
        top: "calc(var(--bv-nav, 92px) + 24px)"
      } : {})
    }
  }, /*#__PURE__*/React.createElement("h2", {
    style: {
      margin: 0,
      fontFamily: "var(--font-core)",
      fontWeight: "var(--weight-heading)",
      fontSize: "clamp(19px,2vw,27px)",
      letterSpacing: "var(--track-heading)",
      color: "var(--text-heading)"
    }
  }, b.kop), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontSize: "var(--size-body)",
      lineHeight: "var(--lh-body)"
    }
  }, b.tekst));
  const kader = /*#__PURE__*/React.createElement(BVKader, {
    kader: b.kader,
    src: b.src,
    video: b.video
  });
  /* Aerial: de dronefilm plus de hole 17-explainer, elk met WATCH. */
  const beeld = b.extra && window.CaseFilm ? /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gap: "var(--space-4)",
      minWidth: 0
    }
  }, /*#__PURE__*/React.createElement(window.CaseFilm, {
    bron: b.video,
    poster: b.poster || BV_BEELD + "bergvliet-aerial-01-web.jpg",
    kader: b.kader,
    onderschrift: "AERIAL \xB7 LANDGOED BERGVLIET",
    watch: true
  }), /*#__PURE__*/React.createElement(window.CaseFilm, {
    bron: b.extra.film,
    poster: b.extra.poster,
    kader: "16 / 9",
    onderschrift: b.extra.onder ? String(b.extra.onder).toUpperCase() : "HOLE 17 · EXPLAINER",
    watch: true
  })) : kader;
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gap: "var(--space-6)"
    }
  }, window.CMLijn ? /*#__PURE__*/React.createElement(window.CMLijn, null) : null, /*#__PURE__*/React.createElement("div", {
    "data-bv-blok": "1",
    style: {
      display: "grid",
      gridTemplateColumns: beeldLinks ? "minmax(0,1.25fr) minmax(0,0.9fr)" : "minmax(0,0.9fr) minmax(0,1.25fr)",
      gap: BV_KOLOMGAT,
      alignItems: "start"
    }
  }, beeldLinks ? [/*#__PURE__*/React.createElement(React.Fragment, {
    key: "b"
  }, beeld), /*#__PURE__*/React.createElement(React.Fragment, {
    key: "t"
  }, tekst)] : [/*#__PURE__*/React.createElement(React.Fragment, {
    key: "t"
  }, tekst), /*#__PURE__*/React.createElement(React.Fragment, {
    key: "b"
  }, beeld)]));
}
function CaseBergvliet({
  go
}) {
  const Film = window.CaseFilm;
  const Rij = window.CaseRij;
  const Haarlijn = window.Haarlijn;
  const [open, setOpen] = React.useState(-1);
  React.useEffect(() => {
    const zet = () => {
      const h = document.querySelector("header");
      document.documentElement.style.setProperty("--bv-nav", (h && h.offsetHeight || 92) + "px");
    };
    zet();
    window.addEventListener("resize", zet);
    return () => window.removeEventListener("resize", zet);
  }, []);
  const namen = ["Piet Klerkx", "Kiela", "MSO Group", "Veteranen Search Team"];
  const verwant = namen.map(n => (window.CASES || []).find(c => c.klant === n)).filter(Boolean);
  if (!Film) return null;
  const sectie = {
    background: "var(--dolle-navy)",
    color: "var(--text-body)",
    padding: "var(--space-6) var(--page-margin)"
  };
  const binnen = {
    maxWidth: "var(--content-max)",
    margin: "0 auto",
    display: "grid",
    gap: "var(--space-5)"
  };
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("style", null, "@media (max-width:860px){[data-bv-blok],[data-bv-opening],[data-bv-deel]{grid-template-columns:minmax(0,1fr) !important}[data-bv-blok]>div{position:static !important}}"), window.CMKop ? /*#__PURE__*/React.createElement(window.CMKop, {
    titel: "Landgoed Bergvliet",
    tags: ["Media production", "Growth"],
    film: BV_VID + "bergvliet-hero.mp4",
    poster: BV_POSTER("corporate"),
    go: go,
    Knop: BVButton,
    Woorden: window.Words || null,
    Tag: window.DolleTag || BVTag
  }, window.CMIntro ? /*#__PURE__*/React.createElement(window.CMIntro, {
    tekst: BV_INTRO,
    beeld: window.CMOpeningBeeld ? /*#__PURE__*/React.createElement(window.CMOpeningBeeld, {
      modus: "groei",
      start: 0.3,
      ratio: "16 / 9",
      src: BV_BEELD + "bergvliet-aerial-01-web.jpg"
    }) : null
  }) : null) : null, /*#__PURE__*/React.createElement("section", {
    className: "dolle-dark",
    style: {
      background: "var(--dolle-navy)",
      padding: "0 var(--page-margin) var(--space-6)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: "var(--content-max)",
      margin: "0 auto"
    }
  }, /*#__PURE__*/React.createElement(BVBand, {
    items: BV_BAND,
    hoog: "clamp(200px,24vw,340px)",
    golf: true
  }))), /*#__PURE__*/React.createElement("section", {
    className: "dolle-dark",
    style: sectie
  }, /*#__PURE__*/React.createElement("div", {
    style: binnen
  }, window.CMLijn ? /*#__PURE__*/React.createElement(window.CMLijn, null) : null, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "flex-start",
      gap: "var(--space-6)",
      flexWrap: "wrap",
      paddingTop: "var(--space-2)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gap: "var(--space-3)",
      maxWidth: "45ch"
    }
  }, /*#__PURE__*/React.createElement("h2", {
    style: {
      margin: 0,
      fontFamily: "var(--font-core)",
      fontWeight: "var(--weight-heading)",
      fontSize: "clamp(22px,2.6vw,36px)",
      letterSpacing: "var(--track-heading)",
      color: "var(--text-heading)"
    }
  }, "Corporate film"), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontSize: "var(--size-body)",
      lineHeight: "var(--lh-body)"
    }
  }, BV_BLOKKEN.find(b => b.kop === "Corporate film").tekst)), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-core)",
      fontWeight: "var(--weight-heading)",
      fontSize: "clamp(18px,2.2vw,30px)",
      letterSpacing: "var(--track-wildly)",
      textTransform: "uppercase",
      color: "var(--text-heading)",
      whiteSpace: "nowrap"
    }
  }, "Wildly ", /*#__PURE__*/React.createElement("span", {
    style: {
      color: "var(--text-accent)"
    }
  }, "Visible"))), /*#__PURE__*/React.createElement(Film, {
    bron: BV_VID + "bergvliet-corporate.mp4",
    poster: BV_POSTER("corporate"),
    onderschrift: "CORPORATE FILM \xB7 LANDGOED BERGVLIET",
    watch: true
  }), /*#__PURE__*/React.createElement("div", {
    "data-bv-blok": "1",
    style: {
      display: "grid",
      gridTemplateColumns: "minmax(0,1fr) minmax(0,1fr)",
      gap: BV_KOLOMGAT,
      paddingTop: "var(--space-4)"
    }
  }, BV_BLOKKEN.filter(b => b.plek === "film" && b.kop !== "Corporate film").map(b => /*#__PURE__*/React.createElement("div", {
    key: b.kop,
    style: {
      display: "grid",
      gap: "var(--space-3)",
      alignContent: "start",
      maxWidth: "45ch"
    }
  }, b.kop !== "Corporate film" ? /*#__PURE__*/React.createElement("h2", {
    style: {
      margin: 0,
      fontFamily: "var(--font-core)",
      fontWeight: "var(--weight-heading)",
      fontSize: "clamp(19px,2vw,27px)",
      letterSpacing: "var(--track-heading)",
      color: "var(--text-heading)"
    }
  }, b.kop) : null, /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontSize: "var(--size-body)",
      lineHeight: "var(--lh-body)"
    }
  }, b.tekst)))), /*#__PURE__*/React.createElement(BVBand, {
    items: BV_CORPORATE,
    hoog: "clamp(170px,19vw,280px)",
    sleep: true
  }))), /*#__PURE__*/React.createElement("section", {
    className: "dolle-dark",
    style: sectie
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      ...binnen,
      gap: "var(--space-6)"
    }
  }, BV_BLOKKEN.filter(b => !b.plek).map((b, i) => b.deel ? /*#__PURE__*/React.createElement("div", {
    key: b.kop,
    style: {
      display: "grid",
      gap: "var(--space-5)"
    }
  }, window.CMLijn ? /*#__PURE__*/React.createElement(window.CMLijn, null) : null, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gap: "var(--space-3)",
      maxWidth: "45ch",
      paddingTop: "var(--space-4)"
    }
  }, /*#__PURE__*/React.createElement("h2", {
    style: {
      margin: 0,
      fontFamily: "var(--font-core)",
      fontWeight: "var(--weight-heading)",
      fontSize: "clamp(19px,2vw,27px)",
      letterSpacing: "var(--track-heading)",
      color: "var(--text-heading)"
    }
  }, b.kop), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontSize: "var(--size-body)",
      lineHeight: "var(--lh-body)"
    }
  }, b.tekst)), window.CMAccordeon ? /*#__PURE__*/React.createElement(window.CMAccordeon, {
    items: BV_DEELFILMS.map(f => ({
      video: f.film + "#t=0.5",
      label: f.naam
    })),
    ratio: 16 / 9,
    hoog: "clamp(300px,34vw,540px)"
  }) : /*#__PURE__*/React.createElement(BVDeelfilms, {
    films: BV_DEELFILMS,
    groot: 2.2,
    klein: 0.7
  })) : /*#__PURE__*/React.createElement(BVBlok, {
    key: b.kop,
    b: b,
    i: i
  })))), window.CMData ? /*#__PURE__*/React.createElement(window.CMData, {
    kop: "Deliverables",
    beeld: BV_BEELD + "bergvliet-golf-07-web.jpg",
    waas: 0.42,
    cijfers: BV_DATA,
    Tag: DolleTag,
    tags: ["Concept", "Direction", "Production", "Edit", "Drone"],
    review: {
      tekst: "DOLLE understood straight away what makes the estate special. They planned every part of the shoot with us and captured the course, the restaurants, the spa and the villas in two days. The footage now runs everywhere, from our website to national TV.",
      naam: "Name",
      rol: "Landgoed Bergvliet"
    }
  }) : null, /*#__PURE__*/React.createElement("section", {
    className: "dolle-dark",
    style: {
      background: "var(--dolle-navy)",
      padding: "var(--space-6) var(--page-margin)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: "var(--content-max)",
      margin: "0 auto",
      display: "grid",
      gap: "var(--space-4)",
      gridTemplateColumns: "minmax(0,1fr)"
    }
  }, /*#__PURE__*/React.createElement(BVKicker, {
    style: {
      display: "block",
      whiteSpace: "nowrap",
      color: "var(--text-muted)"
    }
  }, "Related work"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "minmax(0,1fr)"
    }
  }, Rij ? verwant.map((c, i) => /*#__PURE__*/React.createElement(Rij, {
    key: c.id,
    c: c,
    i: i,
    go: go,
    open: open === c.id,
    onToggle: () => setOpen(open === c.id ? -1 : c.id)
  })) : null, Haarlijn ? /*#__PURE__*/React.createElement(Haarlijn, null) : null))), window.HomeConversie ? /*#__PURE__*/React.createElement(window.HomeConversie, {
    go: go,
    tone: "dark"
  }) : null);
}
window.CaseBergvliet = CaseBergvliet;
Object.assign(window, {
  BVBand,
  BVHover,
  BVKader,
  BVDeelfilms
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/CaseBergvliet.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/CaseBlueRivet.jsx
try { (() => {
const BR_DS = window.DesignSystem_8f95a2;
const {
  Kicker: BRKicker,
  Icon: BRIcon,
  Button: BRButton
} = BR_DS;
const {
  Words: BRWords,
  DolleTag: BRTag
} = window;

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
const BR_ORDE = [["br-shoot-0432", "1 / 1"], ["br-shoot-0419", "3 / 2"], ["br-shoot-0394", "2 / 3"], ["br-shoot-0614", "1 / 1"], ["br-shoot-0630", "3 / 4"], ["br-shoot-0617", "2 / 3"], ["br-shoot-0615", "1 / 1"], ["br-shoot-0626", "3 / 4"], ["br-tel-0372", "2 / 3"], ["br-shoot-0627", "3 / 2"], ["br-shoot-0418", "2 / 3"], ["br-tel-0367", "2 / 3"], ["br-bts-605", "3 / 4"], ["br-shoot-0624", "1 / 1"], ["br-bts-613", "2 / 3"], ["br-shoot-0628", "3 / 4"], ["br-shoot-0616", "1 / 1"], ["br-bts-602", "2 / 3"], ["br-bts-612", "3 / 2"], ["br-shoot-0404", "1 / 1"], ["br-bts-607", "2 / 3"], ["br-tel-0373", "1 / 1"], ["br-bts-427", "3 / 4"], ["br-shoot-0634", "2 / 3"], ["br-shoot-0421", "2 / 3"], ["br-shoot-0629", "1 / 1"], ["br-shoot-0632", "3 / 2"], ["br-shoot-0431", "2 / 3"], ["br-shoot-0623", "3 / 2"], ["br-bts-425", "1 / 1"], ["br-tel-0364", "3 / 4"], ["br-tel-0370", "1 / 1"]];
const BR_KAARTEN = BR_ORDE.map(([naam, ratio], i) => {
  const breedtes = [300, 240, 330, 260, 310, 230];
  const zakken = [0, 18, -16, 12, -20, 14];
  return {
    src: BR + naam + "-web.jpg",
    ratio: ratio,
    breed: breedtes[i % breedtes.length],
    zak: zakken[i % zakken.length],
    tekst: naam.indexOf("br-shoot-") === 0 ? "Blue Rivet · campaign" : "Blue Rivet · behind the scenes"
  };
});

/* Socialblok: de cutdowns in de formaten waarin ze ook online staan. */
const BR_SOCIAL = [{
  video: BR_VID + "br-brandfilm-9x16.mp4",
  ratio: "9 / 16",
  label: "Brand film · 9:16",
  terug: BR + "br-shoot-0614-web.jpg"
}, {
  video: BR_VID + "br-tees-9x16.mp4",
  ratio: "9 / 16",
  label: "Tees · 9:16",
  terug: BR + "br-shoot-0617-web.jpg"
}, {
  video: BR_VID + "br-sweat-9x16.mp4",
  ratio: "9 / 16",
  label: "Sweats · 9:16",
  terug: BR + "br-shoot-0620-web.jpg"
}, {
  video: BR_VID + "br-brandfilm-4x5.mp4",
  ratio: "4 / 5",
  label: "Brand film · 4:5",
  terug: BR + "br-shoot-0624-web.jpg"
}, {
  video: BR_VID + "br-tees-4x5.mp4",
  ratio: "4 / 5",
  label: "Tees · 4:5",
  terug: BR + "br-shoot-0628-web.jpg"
}, {
  video: BR_VID + "br-slim-jeans-1x1.mp4",
  ratio: "1 / 1",
  label: "Slim jeans · 1:1",
  terug: BR + "br-shoot-0392-web.jpg"
}, {
  video: BR_VID + "br-straight-jeans-1x1.mp4",
  ratio: "1 / 1",
  label: "Straight jeans · 1:1",
  terug: BR + "br-shoot-0430-web.jpg"
}, {
  video: BR_VID + "br-sweat-1x1.mp4",
  ratio: "1 / 1",
  label: "Sweats · 1:1",
  terug: BR + "br-shoot-0633-web.jpg"
}, {
  video: BR_VID + "br-tees-1x1.mp4",
  ratio: "1 / 1",
  label: "Tees · 1:1",
  terug: BR + "br-shoot-0419-web.jpg"
}, {
  video: BR_VID + "br-tees-1x1-v2.mp4",
  ratio: "1 / 1",
  label: "Tees · 1:1 alt",
  terug: BR + "br-shoot-0422-web.jpg"
}];

/* Socialblok: drie rijen, per kanaalformaat. In elke rij wisselt een video af
   met een foto in hetzelfde kader. */
const BR_RIJEN = [{
  label: "9:16",
  kader: "9 / 16",
  voorbeeld: [4, 1, 3],
  items: [{
    video: BR_VID + "br-brandfilm-9x16.mp4",
    label: "Brand film · 9:16",
    terug: BR + "br-shoot-0614-web.jpg"
  }, {
    src: BR + "br-shoot-0617-web.jpg",
    label: "Campaign · 9:16"
  }, {
    video: BR_VID + "br-tees-9x16.mp4",
    label: "Tees · 9:16",
    terug: BR + "br-shoot-0619-web.jpg"
  }, {
    src: BR + "br-shoot-0626-web.jpg",
    label: "Campaign · 9:16"
  }, {
    video: BR_VID + "br-sweat-9x16.mp4",
    label: "Sweats · 9:16",
    terug: BR + "br-shoot-0621-web.jpg"
  }, {
    src: BR + "br-shoot-0624-web.jpg",
    label: "Campaign · 9:16"
  }]
}, {
  label: "4:5",
  kader: "4 / 5",
  voorbeeld: [0, 1, 3],
  items: [{
    video: BR_VID + "br-brandfilm-4x5.mp4",
    label: "Brand film · 4:5",
    terug: BR + "br-shoot-0625-web.jpg"
  }, {
    src: BR + "br-shoot-0628-web.jpg",
    label: "Campaign · 4:5"
  }, {
    video: BR_VID + "br-tees-4x5.mp4",
    label: "Tees · 4:5",
    terug: BR + "br-shoot-0631-web.jpg"
  }, {
    src: BR + "br-shoot-0633-web.jpg",
    label: "Campaign · 4:5"
  }]
}, {
  label: "1:1",
  kader: "1 / 1",
  kolommen: "repeat(auto-fit,minmax(min(100%,210px),1fr))",
  items: [{
    video: BR_VID + "br-slim-jeans-1x1.mp4",
    label: "Slim jeans · 1:1",
    terug: BR + "br-shoot-0392-web.jpg"
  }, {
    src: BR + "br-shoot-0418-web.jpg",
    label: "Campaign · 1:1"
  }, {
    video: BR_VID + "br-straight-jeans-1x1.mp4",
    label: "Straight jeans · 1:1",
    terug: BR + "br-shoot-0430-web.jpg"
  }, {
    src: BR + "br-shoot-0419-web.jpg",
    label: "Campaign · 1:1"
  }, {
    video: BR_VID + "br-sweat-1x1.mp4",
    label: "Sweats · 1:1",
    terug: BR + "br-shoot-0633-web.jpg"
  }, {
    src: BR + "br-shoot-0422-web.jpg",
    label: "Campaign · 1:1"
  }, {
    video: BR_VID + "br-tees-1x1.mp4",
    label: "Tees · 1:1",
    terug: BR + "br-shoot-0626-web.jpg"
  }]
}];

/* Talpa-versie van de brand film in 16:9. */
const BR_FILM_BREED = BR_VID + "br-brandfilm-16x9.mp4";
const BR_INTRO = ["Blue Rivet is an Amsterdam denim brand that sells premium menswear directly to the customer. One considered fit, built in quality fabric, with the wardrobe around it kept just as simple.", "DOLLE produced the campaign for the new collection. Casting, location and direction handled up front, production was in an industrial warehouse in Amsterdam, one shooting day that delivered the brand film, the collection film, photography and a full set of modular content, cut down per channel so the brand could run the campaign for months on a single production."];
const brR = s => {
  const p = String(s).split("/").map(Number);
  return p[0] / (p[1] || 1);
};
/* Onder de hero de campagnebeelden; onder de brand film de set-beelden. Alles even hoog. */
const BR_BAND_CAMPAGNE = BR_ORDE.filter(([n]) => n.indexOf("br-shoot-") === 0).map(([n, ra]) => ({
  src: BR + n + "-web.jpg",
  r: brR(ra)
}));
const BR_BAND_BTS = BR_ORDE.filter(([n]) => n.indexOf("br-shoot-") !== 0).map(([n]) => ({
  src: BR + n + "-web.jpg",
  r: 3 / 2
}));
/* Cijfers voor het datablok; voorlopig, tot de echte aantallen binnen zijn. */
const BR_DATA = [{
  label: "Views generated",
  waarde: 1.8,
  achter: "M+"
}, {
  label: "Channel formats delivered",
  waarde: 11
}, {
  label: "TV & streaming platforms",
  waarde: 2,
  achter: "+"
}];
const BR_LEVERING = ["Casting", "Location", "Concept", "Direction", "Production", "Edit", "Photography"];

/* Socialkaart: staand kader met het formaat eronder, zodat de reeks leest als
   een set kanaalformaten in plaats van losse beelden. */
function SocialKaart({
  item
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gap: "var(--space-2)",
      minWidth: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      aspectRatio: item.ratio,
      overflow: "hidden",
      background: "#0b1730",
      border: "1px solid var(--white-16, rgba(255,255,255,0.16))"
    }
  }, item.video ? window.CaseLoop ? /*#__PURE__*/React.createElement(window.CaseLoop, {
    bron: item.video,
    terug: item.terug,
    stijl: {
      position: "absolute",
      inset: 0,
      width: "100%",
      height: "100%",
      objectFit: "cover",
      display: "block"
    }
  }) : /*#__PURE__*/React.createElement("video", {
    src: item.video,
    autoPlay: true,
    muted: true,
    loop: true,
    playsInline: true,
    preload: "metadata",
    style: {
      position: "absolute",
      inset: 0,
      width: "100%",
      height: "100%",
      objectFit: "cover",
      display: "block"
    }
  }) : /*#__PURE__*/React.createElement("img", {
    src: item.src,
    alt: "",
    loading: "lazy",
    decoding: "async",
    style: {
      position: "absolute",
      inset: 0,
      width: "100%",
      height: "100%",
      objectFit: "cover",
      display: "block"
    }
  })), /*#__PURE__*/React.createElement(BRKicker, {
    size: "sm",
    style: {
      display: "block",
      whiteSpace: "nowrap",
      color: "var(--text-muted)"
    }
  }, item.label));
}

/* Kanaalformaat als rij: dicht een korte strook met drie kaders, nummer, VIEW en
   tekst; open vouwt de hele reeks in dat formaat uit, de video's spelen. */
const BR_RIJ_TEKST = {
  "9:16": {
    naam: "Stories & Reels",
    kort: "Vertical cutdowns for Instagram and TikTok."
  },
  "4:5": {
    naam: "Feed",
    kort: "The brand film and product films in feed format, the version that carries the paid campaign."
  },
  "1:1": {
    naam: "Product films",
    kort: "One film per fit and per piece, for the webshop, product pages and catalogue ads."
  }
};
const BR_VLOEI = "1100ms cubic-bezier(.16,.84,.24,1)";
function brMaat(ref, dep) {
  const [h, setH] = React.useState(0);
  React.useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const meet = () => setH(el.scrollHeight);
    meet();
    if (typeof ResizeObserver === "undefined") return;
    const ro = new ResizeObserver(meet);
    ro.observe(el);
    return () => ro.disconnect();
  }, [dep]);
  return h;
}
const BR_KANAAL = {
  "9:16": "Instagram Stories, Reels, TikTok",
  "4:5": "Instagram and Facebook feed, paid social",
  "1:1": "Webshop, product pages, catalogue ads"
};
/* Zelfde beweging als de project files bij MSO: de kolommen schuiven, de strook
   groeit, de rest van de reeks vouwt eronder open en de tekstkolom krijgt zijn
   details. Sluiten loopt langs dezelfde weg terug. */
function BRFormaatRij({
  rij,
  nr,
  open,
  onToggle
}) {
  const t = BR_RIJ_TEKST[rij.label] || {
    naam: rij.label,
    kort: ""
  };
  const ref = React.useRef(null),
    strook = React.useRef(null),
    extra = React.useRef(null);
  const hExtra = brMaat(extra, open);
  const [binnen, setBinnen] = React.useState(false);
  React.useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (!("IntersectionObserver" in window)) {
      setBinnen(true);
      return;
    }
    const io = new IntersectionObserver(l => {
      if (l.some(e => e.isIntersecting)) {
        setBinnen(true);
        io.disconnect();
      }
    }, {
      rootMargin: "0px 0px -18% 0px"
    });
    io.observe(el);
    return () => io.disconnect();
  }, []);
  React.useEffect(() => {
    const el = strook.current;
    if (!el) return;
    el.querySelectorAll("video").forEach(v => {
      if (open) {
        if (!v.getAttribute("src")) {
          v.src = v.dataset.lui || v.dataset.bron;
          v.dataset.lui = "";
        }
        v.preload = "auto";
        const p = v.play();
        if (p && p.catch) p.catch(() => {});
      } else v.pause();
    });
  }, [open]);
  const idx = rij.voorbeeld || [0, 1, 2];
  const voorbeeld = idx.map(n => rij.items[n]).filter(Boolean);
  const rest = rij.items.filter((_, n) => idx.indexOf(n) < 0);
  const hoog = "clamp(130px,12vw,190px)";
  const hStrook = brMaat(strook, open);
  const vul = n => ({
    display: "block",
    clipPath: binnen ? "inset(-4px -2px -4px 0)" : "inset(-4px 100% -4px 0)",
    transition: "clip-path 900ms cubic-bezier(.65,0,.25,1) " + n + "ms"
  });
  const kolommen = open ? "minmax(0,2.6fr) minmax(0,0.2fr) minmax(0,0.55fr) minmax(0,1.9fr)" : "minmax(0,2.5fr) minmax(0,0.3fr) minmax(0,0.7fr) minmax(0,2.1fr)";
  const vouw = (h, vertraging) => ({
    overflow: "hidden",
    maxHeight: open ? h ? h + "px" : "1600px" : "0px",
    opacity: open ? 1 : 0,
    transform: open ? "translate3d(0,0,0)" : "translate3d(0,16px,0)",
    transition: "max-height " + BR_VLOEI + ", opacity " + (open ? 640 : 240) + "ms var(--ease-dolle) " + (open ? vertraging : 0) + "ms, transform " + BR_VLOEI
  });
  const kaart = (it, i, h) => /*#__PURE__*/React.createElement("span", {
    key: i,
    style: {
      position: "relative",
      flex: "0 0 auto",
      display: "block",
      height: h,
      aspectRatio: rij.kader,
      overflow: "hidden",
      borderRadius: 5,
      background: "#0b1730",
      transition: "height " + BR_VLOEI
    }
  }, it.video ? /*#__PURE__*/React.createElement("video", {
    "data-handmatig": "1",
    "data-bron": it.video,
    src: it.video + "#t=0.5",
    poster: it.terug,
    autoPlay: true,
    muted: true,
    loop: true,
    playsInline: true,
    preload: "metadata",
    style: {
      position: "absolute",
      inset: 0,
      width: "100%",
      height: "100%",
      objectFit: "cover",
      display: "block"
    }
  }) : /*#__PURE__*/React.createElement("img", {
    src: it.src,
    alt: "",
    loading: "lazy",
    decoding: "async",
    style: {
      position: "absolute",
      inset: 0,
      width: "100%",
      height: "100%",
      objectFit: "cover",
      display: "block"
    }
  }));
  const media = /*#__PURE__*/React.createElement("div", {
    style: {
      minWidth: 0,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: "var(--space-3)",
      alignItems: "flex-start",
      clipPath: binnen ? "inset(0 0 0 0)" : "inset(0 100% 0 0)",
      transform: binnen ? "translate3d(0,0,0)" : "translate3d(-48px,0,0)",
      transition: "clip-path 1200ms cubic-bezier(.65,0,.25,1), transform 1400ms cubic-bezier(.16,.84,.24,1)"
    }
  }, voorbeeld.map((it, i) => kaart(it, i, hoog))));
  return /*#__PURE__*/React.createElement("div", {
    ref: ref,
    onClick: onToggle,
    style: {
      cursor: "pointer",
      borderTop: "1px solid var(--white-24, rgba(255,255,255,0.24))",
      padding: "var(--space-4) 0"
    }
  }, /*#__PURE__*/React.createElement("div", {
    "data-br-rij": "1",
    style: {
      display: "grid",
      gridTemplateColumns: kolommen,
      gap: "var(--grid-gap)",
      alignItems: "start",
      transition: "grid-template-columns " + BR_VLOEI
    }
  }, media, /*#__PURE__*/React.createElement(BRKicker, {
    as: "span",
    size: "sm",
    style: {
      whiteSpace: "nowrap",
      color: "var(--text-muted)",
      opacity: binnen ? 1 : 0,
      transition: "opacity 700ms ease 200ms"
    }
  }, nr), /*#__PURE__*/React.createElement("span", {
    onClick: e => {
      e.stopPropagation();
      onToggle();
    },
    style: {
      opacity: binnen ? 1 : 0,
      transition: "opacity 700ms ease 300ms"
    }
  }, /*#__PURE__*/React.createElement(BRButton, {
    size: "sm",
    variant: "secondary",
    "aria-expanded": open,
    style: {
      color: "var(--dolle-white)",
      borderColor: "transparent"
    }
  }, open ? "Close" : "View")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gap: "var(--space-2)",
      minWidth: 0
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: "block",
      fontFamily: "var(--font-core)",
      fontWeight: "var(--weight-heading)",
      fontSize: "clamp(18px,1.9vw,28px)",
      letterSpacing: "var(--track-heading)",
      color: "var(--dolle-white)"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: vul(0)
  }, t.naam)), /*#__PURE__*/React.createElement("span", {
    style: {
      display: "flex",
      gap: "var(--space-2)",
      flexWrap: "wrap"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: "block",
      whiteSpace: "nowrap",
      background: "#0b1730",
      padding: "7px 10px 6px",
      fontFamily: "var(--font-label)",
      fontWeight: "var(--weight-label)",
      fontSize: "var(--size-label-sm)",
      letterSpacing: "var(--track-label-wide)",
      textTransform: "uppercase",
      color: "var(--text-body)"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: vul(160)
  }, rij.label))), /*#__PURE__*/React.createElement("span", {
    style: {
      display: "block",
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontSize: "var(--size-body)",
      lineHeight: "var(--lh-body)",
      maxWidth: "45ch",
      transform: binnen ? "translate3d(0,0,0)" : "translate3d(0,100%,0)",
      opacity: binnen ? 1 : 0,
      transition: "transform 1000ms cubic-bezier(.16,.84,.24,1) 380ms, opacity 700ms ease 380ms"
    }
  }, t.kort)), /*#__PURE__*/React.createElement("div", {
    style: vouw(hExtra, 260),
    onClick: e => e.stopPropagation()
  }, /*#__PURE__*/React.createElement("div", {
    ref: extra,
    style: {
      display: "grid",
      gap: "var(--space-4)",
      paddingTop: "var(--space-4)",
      cursor: "default"
    }
  }, /*#__PURE__*/React.createElement("dl", {
    style: {
      margin: 0,
      display: "grid"
    }
  }, [["Format", rij.label], ["Channels", BR_KANAAL[rij.label] || ""]].map(([k, w]) => /*#__PURE__*/React.createElement("div", {
    key: k,
    style: {
      display: "grid",
      gridTemplateColumns: "minmax(0,0.8fr) minmax(0,1.6fr)",
      gap: "var(--space-4)",
      borderTop: "1px solid var(--white-16, rgba(255,255,255,0.16))",
      padding: "var(--space-3) 0"
    }
  }, /*#__PURE__*/React.createElement("dt", {
    style: {
      margin: 0
    }
  }, /*#__PURE__*/React.createElement(BRKicker, {
    as: "span",
    size: "sm",
    style: {
      whiteSpace: "nowrap",
      color: "var(--text-muted)"
    }
  }, k)), /*#__PURE__*/React.createElement("dd", {
    style: {
      margin: 0
    }
  }, /*#__PURE__*/React.createElement(BRKicker, {
    as: "span",
    size: "sm",
    style: {
      color: "var(--dolle-white)"
    }
  }, w))))))))), /*#__PURE__*/React.createElement("div", {
    style: vouw(hStrook, 380),
    onClick: e => e.stopPropagation()
  }, /*#__PURE__*/React.createElement("div", {
    ref: strook,
    style: {
      display: "flex",
      flexWrap: "nowrap",
      gap: "var(--space-3)",
      overflowX: "auto",
      scrollbarWidth: "none",
      paddingTop: "var(--space-4)",
      cursor: "default"
    }
  }, rest.map((it, i) => /*#__PURE__*/React.createElement("span", {
    key: i,
    style: {
      display: "block",
      flex: "0 0 auto",
      opacity: open ? 1 : 0,
      transform: open ? "translate3d(0,0,0)" : "translate3d(-40px,0,0)",
      transition: "opacity 700ms var(--ease-dolle) " + (open ? 420 + i * 70 : 0) + "ms, transform 900ms var(--ease-dolle) " + (open ? 420 + i * 70 : 0) + "ms"
    }
  }, kaart(it, i, "clamp(200px,22vw,340px)"))))));
}
function CaseBlueRivet({
  go
}) {
  const Film = window.CaseFilm;
  const Rij = window.CaseRij;
  const Haarlijn = window.Haarlijn;
  const Kaarten = window.CaseKaarten;
  const [open, setOpen] = React.useState(-1);
  const [bts, setBts] = React.useState(false);
  const [formaat, setFormaat] = React.useState(-1);
  const verwant = (window.CASES || []).filter(c => c.klant !== "Blue Rivet").slice(0, 3);
  if (!Film) return null;
  return /*#__PURE__*/React.createElement(React.Fragment, null, window.CMKop ? /*#__PURE__*/React.createElement(window.CMKop, {
    titel: "Blue Rivet",
    tags: ["Media production", "Launches"],
    film: BR_FILM_BREED,
    start: 3.4,
    eind: 12.8,
    uitsnede: 1.16,
    poster: BR + "br-shoot-0614-web.jpg",
    go: go,
    Knop: BRButton,
    Woorden: BRWords || null,
    Tag: BRTag
  }, window.CMIntro ? /*#__PURE__*/React.createElement(window.CMIntro, {
    tekst: BR_INTRO,
    beeld: /*#__PURE__*/React.createElement("div", {
      style: {
        display: "grid",
        gridTemplateColumns: "repeat(2,minmax(0,1fr))",
        gap: "var(--space-2)"
      }
    }, [BR_HERO, BR_HERO_2].map((src, i) => window.CMOpeningBeeld ? /*#__PURE__*/React.createElement(window.CMOpeningBeeld, {
      key: i,
      modus: "groei",
      start: 0.62,
      ratio: "2 / 3",
      src: src,
      oorsprong: i === 0 ? "100% 50%" : "0% 50%"
    }) : /*#__PURE__*/React.createElement("img", {
      key: i,
      src: src,
      alt: "",
      style: {
        display: "block",
        width: "100%",
        aspectRatio: "2 / 3",
        objectFit: "cover"
      }
    })))
  }) : null) : null, /*#__PURE__*/React.createElement("section", {
    className: "dolle-dark",
    style: {
      background: "var(--dolle-navy)",
      padding: "0 var(--page-margin) var(--space-6)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: "var(--content-max)",
      margin: "0 auto"
    }
  }, window.BVBand ? /*#__PURE__*/React.createElement(window.BVBand, {
    items: BR_BAND_CAMPAGNE,
    hoog: "clamp(200px,24vw,340px)",
    golf: true
  }) : null)), /*#__PURE__*/React.createElement("section", {
    className: "dolle-dark",
    style: {
      background: "var(--dolle-navy)",
      color: "var(--text-body)",
      padding: "var(--space-6) var(--page-margin)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: "var(--content-max)",
      margin: "0 auto",
      display: "grid",
      gap: "var(--space-4)"
    }
  }, window.CMLijn ? /*#__PURE__*/React.createElement(window.CMLijn, null) : null, /*#__PURE__*/React.createElement("h2", {
    style: {
      margin: 0,
      paddingTop: "var(--space-2)",
      fontFamily: "var(--font-core)",
      fontWeight: "var(--weight-heading)",
      fontSize: "clamp(22px,2.6vw,36px)",
      letterSpacing: "var(--track-heading)",
      color: "var(--text-heading)"
    }
  }, "Brand film \xB7 Collection"), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      maxWidth: "52ch",
      fontSize: "var(--size-body)",
      lineHeight: "var(--lh-body)"
    }
  }, "The brand film was broadcast on Talpa and ran as a campaign across streaming platforms including Videoland. A young direct-to-consumer label, placed in the same media as the established names in fashion."), /*#__PURE__*/React.createElement("div", {
    onClickCapture: () => setBts(true)
  }, /*#__PURE__*/React.createElement(Film, {
    bron: BR_FILM_BREED,
    poster: BR + "br-shoot-0614-web.jpg",
    parallax: true
  })), /*#__PURE__*/React.createElement("div", {
    "aria-hidden": !bts,
    style: {
      display: "grid",
      gridTemplateRows: bts ? "1fr" : "0fr",
      opacity: bts ? 1 : 0,
      transform: bts ? "translateY(0)" : "translateY(40px)",
      transition: "grid-template-rows 1100ms cubic-bezier(.16,.84,.24,1), opacity 900ms ease 200ms, transform 1100ms cubic-bezier(.16,.84,.24,1)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      overflow: "hidden",
      minHeight: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gap: "var(--space-3)",
      paddingTop: "var(--space-4)"
    }
  }, /*#__PURE__*/React.createElement("h3", {
    style: {
      margin: 0,
      fontFamily: "var(--font-core)",
      fontWeight: "var(--weight-heading)",
      fontSize: "clamp(19px,2vw,27px)",
      letterSpacing: "var(--track-heading)",
      color: "var(--text-heading)"
    }
  }, "Behind the scenes"), bts && window.BVBand ? /*#__PURE__*/React.createElement(window.BVBand, {
    items: BR_BAND_BTS,
    hoog: "clamp(220px,26vw,360px)",
    schuif: true
  }) : null))))), /*#__PURE__*/React.createElement("section", {
    className: "dolle-dark",
    style: {
      background: "var(--dolle-navy)",
      color: "var(--text-body)",
      padding: "var(--space-6) var(--page-margin)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: "var(--content-max)",
      margin: "0 auto",
      display: "grid",
      gap: "var(--space-5)"
    }
  }, window.CMLijn ? /*#__PURE__*/React.createElement(window.CMLijn, null) : null, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gap: "var(--space-3)",
      maxWidth: "52ch",
      paddingTop: "var(--space-2)"
    }
  }, /*#__PURE__*/React.createElement("h2", {
    style: {
      margin: 0,
      fontFamily: "var(--font-core)",
      fontWeight: "var(--weight-heading)",
      fontSize: "clamp(22px,2.6vw,36px)",
      letterSpacing: "var(--track-heading)",
      color: "var(--text-heading)"
    }
  }, "Product films & social campaign"), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontSize: "var(--size-body)",
      lineHeight: "var(--lh-body)"
    }
  }, "With this campaign DOLLE gave Blue Rivet its online visibility, and supplied the content for both the full website launch and the campaign launch. Product films and social cutdowns delivered per channel, in the formats the brand actually posts in.")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid"
    }
  }, window.CaseRij ? BR_RIJEN.slice().reverse().map((rij, i) => {
    const t = BR_RIJ_TEKST[rij.label] || {
      naam: rij.label,
      kort: ""
    };
    const idx = rij.voorbeeld || [0, 1, 2];
    const orde = idx.map(n => rij.items[n]).concat(rij.items.filter((_, n) => idx.indexOf(n) < 0)).filter(Boolean);
    const c = {
      id: "br-" + rij.label,
      klant: t.naam,
      kaders: [rij.label],
      body: t.kort + " " + (BR_KANAAL[rij.label] ? "Channels: " + BR_KANAAL[rij.label] + "." : ""),
      zonderBeeld: true,
      mozaiek: [""],
      strook: orde.map(it => ({
        src: it.src,
        video: it.video,
        terug: it.terug,
        ratio: rij.kader,
        tekst: it.label
      }))
    };
    return /*#__PURE__*/React.createElement(window.CaseRij, {
      key: c.id,
      c: c,
      i: i,
      go: go,
      spiegel: true,
      geenKnop: true,
      open: formaat === i,
      onToggle: () => setFormaat(formaat === i ? -1 : i)
    });
  }) : null, Haarlijn ? /*#__PURE__*/React.createElement(Haarlijn, null) : null))), window.CMData ? /*#__PURE__*/React.createElement(window.CMData, {
    kop: "Deliverables",
    beeld: BR + "br-shoot-0625-web.jpg",
    waas: 0.3,
    cijfers: BR_DATA,
    Tag: BRTag,
    tags: BR_LEVERING,
    review: {
      tekst: "We wanted a launch that made Blue Rivet look like it had always been there. DOLLE handled everything from casting to the final cut, and the brand film ended up on national television and Videoland. One production carried our entire launch and is still working for us today.",
      naam: "Name",
      rol: "Blue Rivet"
    }
  }) : null, /*#__PURE__*/React.createElement("section", {
    className: "dolle-dark",
    style: {
      background: "var(--dolle-navy)",
      padding: "var(--space-6) var(--page-margin)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: "var(--content-max)",
      margin: "0 auto",
      display: "grid",
      gap: "var(--space-4)",
      gridTemplateColumns: "minmax(0,1fr)"
    }
  }, /*#__PURE__*/React.createElement(BRKicker, {
    style: {
      display: "block",
      whiteSpace: "nowrap",
      color: "var(--text-muted)"
    }
  }, "Related work"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "minmax(0,1fr)"
    }
  }, Rij ? verwant.map((c, i) => /*#__PURE__*/React.createElement(Rij, {
    key: c.id,
    c: c,
    i: i,
    go: go,
    open: open === c.id,
    onToggle: () => setOpen(open === c.id ? -1 : c.id)
  })) : null, Haarlijn ? /*#__PURE__*/React.createElement(Haarlijn, null) : null))), window.HomeConversie ? /*#__PURE__*/React.createElement(window.HomeConversie, {
    go: go,
    tone: "dark"
  }) : null);
}
Object.assign(window, {
  CaseBlueRivet
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/CaseBlueRivet.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/CaseEezy.jsx
try { (() => {
const EEZY_DS = window.DesignSystem_8f95a2;
const {
  Kicker: EKicker,
  Icon: EIcon,
  Button: EButton
} = EEZY_DS;
const E_IMG = "../../assets/cases/web/";
const E_SET = "../../assets/photography/dolle-set-01.jpg";
const E_POSTER = "../../assets/hero-showreel-frame.png";
const E_NAAD = "4px";
const E_KOLOMGAT = "var(--space-5)";

/* CASE DETAIL · EEZY · variant MINIMAL.
   Opening: naam, haarlijn, daaronder de intro links bovenaan en rechts één tot
   drie items (foto, video, story of social) die de kolom vullen. Daarna de
   hoofdfilm met een swipebare strook stills en een tekstblok. Related work komt
   uit dezelfde rij als de overzichtspagina, dus inclusief dezelfde beweging.
   Tekst en beeld zijn nu dummy. */

/* Openingskolom: 1 tot 3 items. Bij één item vult het de hele kolom, bij twee
   staan ze onder elkaar, bij drie krijgt het eerste de volle breedte. */
const E_EEZY = "../../assets/cases/eezy/";
/* Openingskolom: het aantal beelden bepaalt de opmaak. Eén beeld staat groot en
   alleen, twee vormen een verschoven diptiek, drie tot vijf komen als losse
   kaarten op ritme. Beelden houden hun eigen verhouding, dus niets wordt
   afgesneden. */
const E_OPENING = [{
  src: E_EEZY + "eezy-patient-web.jpg",
  ratio: "5 / 4",
  plek: "50% 62%"
}];

/* Deliverables: wat er uit de productie kwam. */
const E_INTRO = ["Eezy makes dentures accessible: treatment locations across the Netherlands, a digital scan instead of an impression and a new denture in three steps. For its mostly older patients, a process they had written off as slow and uncomfortable.", "DOLLE produced the campaign that explains it, in film and photography: what Eezy is, how the three steps work and what it changes. The social campaign performed and was scaled up into a national TV commercial on NPO 1, 2 and 3."];
/* Cijfers voor het datablok; voorlopig, tot de echte aantallen binnen zijn. */
const E_DATA = [{
  label: "Views generated",
  waarde: 2.4,
  achter: "M+"
}, {
  label: "National TV channels",
  waarde: 3
}, {
  label: "Social assets delivered",
  waarde: 24,
  achter: "+"
}];
/* Band onder de hero: veel behind the scenes achter elkaar, afgewisseld met de nieuwe stills. */
const E_BAND = [["set-01", 0.667], ["row-01", 0.667], ["consult-03", 1.5], ["set-03", 0.667], ["interview", 0.667], ["row-04", 1.5], ["product-01", 0.667], ["set-02", 0.667], ["row-02", 0.667], ["team-01", 1.5], ["set-05", 0.667], ["row-03", 0.667], ["row-06", 1.5], ["consult-06", 0.667], ["set-06", 0.667], ["row-05", 0.667], ["lab-01", 1.5], ["set-07", 0.667], ["team", 0.667], ["consult-02", 1.5], ["set-09", 0.667], ["lab", 0.667], ["receptie-01", 1.5], ["consult-05", 0.667], ["consult-01", 1.5]].map(([n, ra]) => ({
  src: E_EEZY + "eezy-" + n + "-web.jpg",
  r: ra
}));
const E_LEVERING = ["Concept", "Direction", "Production", "Edit", "Photography", "Broadcast delivery"];

/* Stills bij de film: swipebaar, gemengde ratio's. */
const E_STILLS = [{
  src: E_IMG + "case-01.jpg",
  ratio: "3 / 2"
}, {
  src: E_IMG + "case-03.jpg",
  ratio: "4 / 5"
}, {
  src: E_SET,
  ratio: "9 / 16",
  film: true
}, {
  src: E_IMG + "case-05.jpg",
  ratio: "3 / 2"
}, {
  src: E_IMG + "case-06.jpg",
  ratio: "4 / 5"
}, {
  src: E_IMG + "case-02.jpg",
  ratio: "3 / 2",
  film: true
}];
function OpeningCluster({
  items
}) {
  const Play = window.CasePlay;
  const lijst = items.slice(0, 5);
  const n = lijst.length;
  /* Per aantal een eigen ritme: breedte in procenten van de kolom, en hoeveel
     elk beeld meezakt. */
  const ritme = {
    1: [{
      b: "100%",
      z: 0,
      uit: "flex-end"
    }],
    2: [{
      b: "78%",
      z: 0,
      uit: "flex-end"
    }, {
      b: "52%",
      z: 28,
      uit: "flex-start"
    }],
    3: [{
      b: "62%",
      z: 0,
      uit: "flex-end"
    }, {
      b: "44%",
      z: 24,
      uit: "flex-start"
    }, {
      b: "50%",
      z: 16,
      uit: "flex-end"
    }],
    4: [{
      b: "48%",
      z: 0,
      uit: "flex-start"
    }, {
      b: "44%",
      z: 34,
      uit: "flex-end"
    }, {
      b: "40%",
      z: 10,
      uit: "flex-start"
    }, {
      b: "46%",
      z: 26,
      uit: "flex-end"
    }],
    5: [{
      b: "46%",
      z: 0,
      uit: "flex-start"
    }, {
      b: "42%",
      z: 30,
      uit: "flex-end"
    }, {
      b: "38%",
      z: 8,
      uit: "flex-start"
    }, {
      b: "40%",
      z: 24,
      uit: "flex-end"
    }, {
      b: "36%",
      z: 14,
      uit: "flex-start"
    }]
  }[n] || [{
    b: "100%",
    z: 0,
    uit: "flex-end"
  }];
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexWrap: "wrap",
      gap: "var(--space-4)",
      justifyContent: "flex-end",
      alignItems: "flex-start"
    }
  }, lijst.map((t, i) => {
    const r = ritme[i] || ritme[0];
    return /*#__PURE__*/React.createElement("div", {
      key: i,
      style: {
        position: "relative",
        flex: "0 0 auto",
        width: n === 1 ? "100%" : r.b,
        aspectRatio: t.ratio || undefined,
        marginTop: r.z + "px",
        marginLeft: r.uit === "flex-end" ? "auto" : 0,
        marginRight: r.uit === "flex-start" ? "auto" : 0,
        overflow: "hidden",
        background: "#0b1730"
      }
    }, /*#__PURE__*/React.createElement("img", {
      src: t.src,
      alt: "",
      loading: "lazy",
      style: {
        display: "block",
        width: "100%",
        height: t.ratio ? "100%" : "auto",
        objectFit: t.ratio ? "cover" : undefined,
        objectPosition: t.plek || "50% 50%"
      }
    }), t.type === "video" && Play ? /*#__PURE__*/React.createElement(Play, {
      klein: true
    }) : null);
  }));
}

/* Kaarten bij het slotblok: stills en socials in wisselende maten en op
   wisselende hoogtes. De rij drijft door, loopt oneindig rond en is te slepen
   of te swipen. Geen tekst, geen pijlen — alleen beeld. */
const E_KAARTEN = [{
  src: E_EEZY + "eezy-set-01-web.jpg",
  ratio: "3 / 4",
  breed: 380,
  zak: -30
}, {
  src: E_EEZY + "eezy-set-03-web.jpg",
  ratio: "9 / 16",
  breed: 270,
  zak: 52
}, {
  src: E_EEZY + "eezy-still-05-web.jpg",
  ratio: "3 / 2",
  breed: 520,
  zak: -16
}, {
  src: E_EEZY + "eezy-set-02-web.jpg",
  ratio: "2 / 3",
  breed: 300,
  zak: 40
}, {
  src: E_EEZY + "eezy-still-04-web.jpg",
  ratio: "1 / 1",
  breed: 400,
  zak: -44
}, {
  src: E_EEZY + "eezy-set-05-web.jpg",
  ratio: "4 / 5",
  breed: 340,
  zak: 30
}, {
  src: E_EEZY + "eezy-lab-web.jpg",
  ratio: "3 / 2",
  breed: 480,
  zak: -24
}, {
  src: E_EEZY + "eezy-set-06-web.jpg",
  ratio: "9 / 16",
  breed: 260,
  zak: 46
}, {
  src: E_EEZY + "eezy-set-07-web.jpg",
  ratio: "4 / 5",
  breed: 360,
  zak: -36
}, {
  src: E_EEZY + "eezy-set-09-web.jpg",
  ratio: "2 / 3",
  breed: 310,
  zak: 34
}];
const snipR = s => {
  if (!s) return 1;
  const p = String(s).split("/").map(Number);
  return p.length === 2 && p[1] ? p[0] / p[1] : p[0] || 1;
};
function SnippetKaarten({
  items,
  tempo = 0.4,
  schuif = false
}) {
  const Play = window.CasePlay;
  const rail = React.useRef(null);
  const stil = React.useRef(false);
  const reduce = typeof window !== "undefined" && window.matchMedia ? window.matchMedia("(prefers-reduced-motion: reduce)").matches : false;
  /* Drie sets naast elkaar; zodra de scroll een set te ver staat schuift hij
     een set terug. Daardoor kan er eindeloos doorgeswipet worden. */
  React.useEffect(() => {
    const el = rail.current;
    if (!el) return;
    const set = () => el.scrollWidth / 3;
    const midden = () => {
      const s = set();
      if (s > 0 && el.scrollLeft < 1) el.scrollLeft = s;
    };
    const rond = () => {
      const s = set();
      if (s <= 0) return;
      if (el.scrollLeft < s * 0.5) el.scrollLeft += s;else if (el.scrollLeft > s * 1.5) el.scrollLeft -= s;
    };
    midden();
    const klokken = [60, 300, 900].map(ms => setTimeout(midden, ms));
    el.addEventListener("scroll", rond, {
      passive: true
    });
    let raf = 0;
    if (!reduce) {
      let pos = null,
        vorig = 0;
      const stap = t => {
        raf = requestAnimationFrame(stap);
        if (stil.current) {
          pos = null;
          vorig = t;
          return;
        }
        const dt = vorig ? Math.min(64, t - vorig) : 16.7;
        vorig = t;
        if (pos == null) pos = el.scrollLeft;
        pos += tempo * (dt / 16.7);
        el.scrollLeft = pos;
        rond();
        /* Alleen bijstellen als de rondloop echt verspringt; anders zou het
           afronden van de browser de subpixel-stap elke keer wegpoetsen. */
        if (Math.abs(el.scrollLeft - pos) > 2) pos = el.scrollLeft;
      };
      raf = requestAnimationFrame(stap);
    }
    return () => {
      klokken.forEach(clearTimeout);
      el.removeEventListener("scroll", rond);
      if (raf) cancelAnimationFrame(raf);
    };
  }, [reduce, tempo]);
  /* Slepen met de muis; op touch doet de browser het zelf. */
  React.useEffect(() => {
    const el = rail.current;
    if (!el) return;
    let sleep = false,
      x0 = 0,
      l0 = 0;
    const neer = e => {
      sleep = true;
      stil.current = true;
      x0 = e.clientX;
      l0 = el.scrollLeft;
      el.style.cursor = "grabbing";
    };
    const beweeg = e => {
      if (sleep) el.scrollLeft = l0 - (e.clientX - x0);
    };
    const op = () => {
      sleep = false;
      stil.current = false;
      el.style.cursor = "grab";
    };
    el.addEventListener("pointerdown", neer);
    el.addEventListener("pointermove", beweeg);
    window.addEventListener("pointerup", op);
    return () => {
      el.removeEventListener("pointerdown", neer);
      el.removeEventListener("pointermove", beweeg);
      window.removeEventListener("pointerup", op);
    };
  }, []);
  /* Liggende foto's krap in hun kader; het beeld schuift mee met de rail. */
  React.useEffect(() => {
    if (!schuif) return;
    const el = rail.current;
    if (!el) return;
    let raf;
    const tik = () => {
      raf = requestAnimationFrame(tik);
      const vb = el.getBoundingClientRect(),
        mid = vb.left + vb.width / 2;
      el.querySelectorAll("[data-schuif]").forEach(img => {
        const r = img.parentNode.getBoundingClientRect();
        if (r.right < vb.left - 200 || r.left > vb.right + 200) return;
        const p = Math.max(-1, Math.min(1, (r.left + r.width / 2 - mid) / (vb.width / 2 + r.width / 2)));
        img.style.transform = "translate3d(" + (p * -18).toFixed(2) + "%,0,0)";
      });
    };
    raf = requestAnimationFrame(tik);
    return () => cancelAnimationFrame(raf);
  }, [schuif]);
  const lijst = items.concat(items, items);
  const diepst = items.reduce((m, k) => Math.max(m, Math.abs(k.zak || 0)), 0);
  return /*#__PURE__*/React.createElement("div", {
    ref: rail,
    "data-rail": "1",
    style: {
      display: "flex",
      gap: "var(--space-3)",
      alignItems: "center",
      overflowX: "auto",
      scrollbarWidth: "none",
      cursor: "grab",
      touchAction: "pan-y",
      WebkitOverflowScrolling: "touch",
      marginRight: "calc(var(--page-margin) * -1)",
      marginLeft: "calc(var(--page-margin) * -1)",
      paddingLeft: "var(--page-margin)",
      paddingTop: diepst + "px",
      paddingBottom: diepst + "px"
    }
  }, lijst.map((k, i) => {
    const r0 = snipR(k.ratio),
      krap = schuif && !k.video && r0 > 1.2;
    const br = krap ? Math.round(k.breed * 0.72) : k.breed;
    return /*#__PURE__*/React.createElement("div", {
      key: i,
      style: {
        position: "relative",
        flex: "0 0 auto",
        width: "clamp(" + Math.round(br * 0.62) + "px," + (br / 14.4).toFixed(1) + "vw," + br + "px)",
        aspectRatio: krap ? String(r0 * 0.72) : k.ratio,
        marginTop: (k.zak || 0) + "px",
        overflow: "hidden",
        background: "#0b1730"
      }
    }, k.video ? window.CaseLoop ? /*#__PURE__*/React.createElement(window.CaseLoop, {
      bron: k.video,
      terug: k.terug,
      stijl: {
        position: "absolute",
        inset: 0,
        width: "100%",
        height: "100%",
        objectFit: "cover",
        display: "block"
      }
    }) : /*#__PURE__*/React.createElement("video", {
      src: k.video,
      autoPlay: true,
      muted: true,
      loop: true,
      playsInline: true,
      preload: "metadata",
      draggable: "false",
      style: {
        position: "absolute",
        inset: 0,
        width: "100%",
        height: "100%",
        objectFit: "cover",
        display: "block"
      }
    }) : krap ? /*#__PURE__*/React.createElement("img", {
      src: k.src,
      alt: "",
      decoding: "async",
      draggable: "false",
      "data-schuif": "1",
      style: {
        position: "absolute",
        top: 0,
        bottom: 0,
        left: "-35%",
        width: "170%",
        maxWidth: "none",
        height: "100%",
        maxHeight: "none",
        objectFit: "cover",
        display: "block",
        willChange: "transform"
      }
    }) : /*#__PURE__*/React.createElement("img", {
      src: k.src,
      alt: "",
      loading: "lazy",
      draggable: "false",
      style: {
        position: "absolute",
        inset: 0,
        width: "100%",
        height: "100%",
        objectFit: "cover",
        display: "block"
      }
    }), k.film && Play ? /*#__PURE__*/React.createElement(Play, {
      klein: true
    }) : null);
  }));
}
function CaseEezy({
  go
}) {
  const Strook = window.CaseStrook;
  const Film = window.CaseFilm;
  const Rij = window.CaseRij;
  const Haarlijn = window.Haarlijn;
  const [open, setOpen] = React.useState(-1);
  /* Related work: vier echte cases, in exact dezelfde rij als op /cases. */
  const verwant = (window.CASES || []).filter(c => c.klant !== "Eezy").slice(0, 3);
  if (!Strook || !Film) return null;
  return /*#__PURE__*/React.createElement(React.Fragment, null, window.CMKop ? /*#__PURE__*/React.createElement(window.CMKop, {
    titel: "Eezy",
    tags: ["Media production", "Growth"],
    film: "../../assets/video/eezy-commercial.mp4",
    start: 0.3,
    eind: 16.4,
    uitsnede: 1.3,
    poster: E_EEZY + "eezy-hero-poster-web.jpg",
    go: go,
    Knop: EButton,
    Woorden: window.Words || null,
    Tag: window.DolleTag
  }, window.CMIntro ? /*#__PURE__*/React.createElement(window.CMIntro, {
    tekst: E_INTRO,
    beeld: window.CMOpeningBeeld ? /*#__PURE__*/React.createElement(window.CMOpeningBeeld, {
      modus: "groei",
      start: 0.3,
      ratio: "3 / 2",
      src: E_EEZY + "eezy-team-02-web.jpg"
    }) : null
  }) : null) : null, /*#__PURE__*/React.createElement("section", {
    className: "dolle-dark",
    style: {
      background: "var(--dolle-navy)",
      padding: "0 var(--page-margin) var(--space-6)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: "var(--content-max)",
      margin: "0 auto"
    }
  }, window.BVBand ? /*#__PURE__*/React.createElement(window.BVBand, {
    items: E_BAND,
    hoog: "clamp(200px,24vw,340px)",
    golf: true
  }) : /*#__PURE__*/React.createElement(SnippetKaarten, {
    items: E_KAARTEN.map(k => ({
      ...k,
      zak: 0
    }))
  }))), /*#__PURE__*/React.createElement("section", {
    className: "dolle-dark",
    style: {
      background: "var(--dolle-navy)",
      color: "var(--text-body)",
      padding: "var(--space-6) var(--page-margin)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: "var(--content-max)",
      margin: "0 auto",
      display: "grid",
      gap: "var(--space-6)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gap: "var(--space-4)"
    }
  }, window.CMLijn ? /*#__PURE__*/React.createElement(window.CMLijn, null) : null, /*#__PURE__*/React.createElement("h2", {
    style: {
      margin: 0,
      paddingTop: "var(--space-2)",
      fontFamily: "var(--font-core)",
      fontWeight: "var(--weight-heading)",
      fontSize: "clamp(22px,2.6vw,36px)",
      letterSpacing: "var(--track-heading)",
      color: "var(--text-heading)"
    }
  }, "National commercial \xB7 NPO 1, 2 & 3"), /*#__PURE__*/React.createElement(Film, {
    bron: "../../assets/video/eezy-commercial.mp4",
    poster: E_EEZY + "eezy-still-03-web.jpg"
  }), /*#__PURE__*/React.createElement("h3", {
    style: {
      margin: 0,
      paddingTop: "var(--space-5)",
      fontFamily: "var(--font-core)",
      fontWeight: "var(--weight-heading)",
      fontSize: "clamp(19px,2vw,27px)",
      letterSpacing: "var(--track-heading)",
      color: "var(--text-heading)"
    }
  }, "Behind the scenes & stills"), /*#__PURE__*/React.createElement("div", {
    "data-e-bts": "1",
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(3,minmax(0,1fr))",
      gap: "var(--space-3)"
    }
  }, ["eezy-interview-web.jpg", "eezy-row-03-web.jpg", "eezy-row-01-web.jpg", "eezy-consult-06-web.jpg", "eezy-product-02-web.jpg", "eezy-consult-05-web.jpg"].map(f => /*#__PURE__*/React.createElement("span", {
    key: f,
    style: {
      display: "block",
      aspectRatio: "2 / 3",
      overflow: "hidden",
      borderRadius: 5,
      background: "#0a1428"
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: E_EEZY + f,
    alt: "",
    loading: "lazy",
    decoding: "async",
    style: {
      display: "block",
      width: "100%",
      height: "100%",
      objectFit: "cover"
    }
  }))))))), window.CMData ? /*#__PURE__*/React.createElement(window.CMData, {
    kop: "Deliverables",
    beeld: E_EEZY + "eezy-consult-04-web.jpg",
    waas: 0.42,
    cijfers: E_DATA,
    Tag: DolleTag,
    tags: E_LEVERING,
    review: {
      tekst: "DOLLE understood right away who we are talking to. They made our three steps simple and warm to watch, and our patients recognise themselves in it. The social campaign did so well that we brought the same work to NPO 1, 2 and 3. A partner that thinks along from the first idea to the final cut.",
      naam: "Name",
      rol: "Eezy"
    }
  }) : null, /*#__PURE__*/React.createElement("section", {
    className: "dolle-dark",
    style: {
      background: "var(--dolle-navy)",
      padding: "var(--space-6) var(--page-margin)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: "var(--content-max)",
      margin: "0 auto",
      display: "grid",
      gap: "var(--space-4)",
      gridTemplateColumns: "minmax(0,1fr)"
    }
  }, /*#__PURE__*/React.createElement(EKicker, {
    style: {
      color: "var(--text-muted)"
    }
  }, "Related work"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "minmax(0,1fr)"
    }
  }, Rij ? verwant.map((c, i) => /*#__PURE__*/React.createElement(Rij, {
    key: c.id,
    c: c,
    i: i,
    go: go,
    open: open === c.id,
    onToggle: () => setOpen(open === c.id ? -1 : c.id)
  })) : null, Haarlijn ? /*#__PURE__*/React.createElement(Haarlijn, null) : null))), window.HomeConversie ? /*#__PURE__*/React.createElement(window.HomeConversie, {
    go: go,
    tone: "dark"
  }) : null);
}
Object.assign(window, {
  CaseEezy,
  CaseKaarten: SnippetKaarten
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/CaseEezy.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/CaseHangEleven.jsx
try { (() => {
const H11_DS = window.DesignSystem_8f95a2;
const {
  Kicker: H11Kicker,
  Tag: H11Tag,
  Button: H11Button
} = H11_DS;
const H11Words = window.Words || (({
  as = "span",
  text,
  style
}) => React.createElement(as, {
  style: style
}, text));
const H11 = "../../assets/cases/hangeleven/";
const H11_VID = "../../assets/video/";
const H11_KOLOMGAT = "calc(var(--grid-gap) * 1.1)";

/* Behind the scenes. De volgorde komt uit de kiestool (_werk/hangeleven-bts-selectie.html)
   als die een selectie heeft bewaard; anders deze standaard. Loops krijgen een
   startbeeld uit de loop zelf, zodat ze direct zichtbaar zijn. */
const H11_BTS_STANDAARD = ["f02", "v01", "gevel", "f03", "v03", "f05", "v02", "f06", "f10", "v05", "f08", "v06"];
function h11BtsItem(k, i) {
  const zak = [0, 18, -14, 10, -18, 14][i % 6];
  if (k === "gevel") return {
    src: H11 + "hangeleven-gevel-web.jpg",
    ratio: "900 / 524",
    breed: 420,
    zak: zak,
    tekst: "Hang Eleven · Haarlemmerdijk"
  };
  const nr = k.slice(1);
  if (k[0] === "s") return {
    src: H11 + "hangeleven-still-" + nr + "-web.jpg",
    ratio: "16 / 10",
    breed: 380,
    zak: zak,
    tekst: "Store film · still"
  };
  if (k[0] === "v") return {
    video: H11_VID + "hangeleven-bts-" + nr + ".mp4",
    terug: H11 + "hangeleven-bts-" + nr + "-poster-web.jpg",
    ratio: "9 / 16",
    breed: 210,
    zak: zak,
    tekst: "Behind the scenes"
  };
  const breed = nr === "11" || nr === "12";
  return {
    src: H11 + "hangeleven-bts-" + nr + "-web.jpg",
    ratio: breed ? "3 / 4" : "9 / 16",
    breed: breed ? 280 : 220,
    zak: zak,
    tekst: "Behind the scenes"
  };
}
function h11BtsLijst() {
  let lijst = H11_BTS_STANDAARD;
  try {
    const s = JSON.parse(localStorage.getItem("dolle-h11-bts"));
    if (Array.isArray(s) && s.length) lijst = s;
  } catch (e) {}
  return lijst.map(h11BtsItem);
}

/* Band onder de intro: stills en loops uit de productie door elkaar. */
const H11_BAND_STANDAARD = ["store", "f10", "s07", "s03", "v08", "f06", "s06", "f07", "v02"];
const H11_STILL_R = {
  "01": 1.728,
  "02": 1.784,
  "03": 1.587,
  "04": 1.537,
  "05": 1.651,
  "06": 1.595,
  "07": 1.78
};
function h11BandItem(k) {
  if (k === "gevel") return {
    src: H11 + "hangeleven-gevel-web.jpg",
    r: 900 / 524
  };
  if (k === "store") return {
    video: H11_VID + "hangeleven-fs7-16x9.mp4",
    r: 16 / 9
  };
  if (k === "zw01") return {
    src: H11 + "hangeleven-bts-01-zw-web.jpg",
    r: 9 / 16
  };
  const nr = k.slice(1);
  if (k[0] === "s") return {
    src: H11 + "hangeleven-still-" + nr + "-web.jpg",
    r: H11_STILL_R[nr] || 16 / 9
  };
  if (k[0] === "v") return {
    video: H11_VID + "hangeleven-bts-" + nr + ".mp4",
    r: 9 / 16
  };
  return {
    src: H11 + "hangeleven-bts-" + nr + "-web.jpg",
    r: nr === "11" || nr === "12" ? 3 / 4 : 9 / 16
  };
}
function h11BandLijst() {
  let lijst = H11_BAND_STANDAARD;
  try {
    const s = JSON.parse(localStorage.getItem("dolle-h11-band"));
    if (Array.isArray(s) && s.length) lijst = s;
  } catch (x) {}
  if (lijst[0] !== "store") lijst = ["store"].concat(lijst.filter(k => k !== "store"));
  return lijst.map(h11BandItem);
}
const H11_INTRO = ["Hang Eleven is an Amsterdam lifestyle brand built on adventure, freedom and style. What began with surf and sun has grown into a full label of everyday essentials in its own designs, sold online across the country and worn all year round.", "The store on the Haarlemmerdijk gave the brand its own address in Amsterdam. DOLLE produced the film that announced the store opening: a scripted FPV flight through the whole store, cut down into shorts that carried the opening across social."];
/* Cijfers voor het datablok; voorlopig, tot de echte aantallen binnen zijn. */
const H11_DATA = [{
  label: "Views generated",
  waarde: 320,
  achter: "K+"
}, {
  label: "Social shorts delivered",
  waarde: 8
}, {
  label: "Single FPV take",
  waarde: 1
}];
const H11_FILMS = [{
  naam: "Store film",
  film: H11_VID + "hangeleven-store-film-16x9.mp4",
  poster: H11 + "hangeleven-store-film-16x9-poster-web.jpg"
}, {
  naam: "FPV",
  film: H11_VID + "hangeleven-fpv-1x1.mp4",
  poster: H11 + "hangeleven-still-01-web.jpg"
}, {
  naam: "Store details",
  film: H11_VID + "hangeleven-fs7-16x9.mp4",
  poster: H11 + "hangeleven-fs7-16x9-poster-web.jpg"
}];

/* Beeld volgt; tot die tijd lege kaders met alleen de hoekmarkeringen. */
function H11Kader({
  kader = "16 / 9",
  src
}) {
  return /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      display: "block",
      aspectRatio: kader,
      overflow: "hidden",
      background: "#0b1730",
      borderRadius: 5,
      minWidth: 0
    }
  }, src ? /*#__PURE__*/React.createElement("img", {
    src: src,
    alt: "",
    loading: "lazy",
    decoding: "async",
    style: {
      position: "absolute",
      inset: 0,
      width: "100%",
      height: "100%",
      objectFit: "cover",
      display: "block"
    }
  }) : /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("svg", {
    "aria-hidden": "true",
    viewBox: "0 0 52 52",
    width: "18",
    height: "18",
    fill: "none",
    style: {
      position: "absolute",
      left: "8%",
      top: "10%",
      color: "var(--dolle-white)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M6 40 V6 H40",
    stroke: "currentColor",
    strokeWidth: "12"
  })), /*#__PURE__*/React.createElement("svg", {
    "aria-hidden": "true",
    viewBox: "0 0 52 52",
    width: "18",
    height: "18",
    fill: "none",
    style: {
      position: "absolute",
      right: "8%",
      bottom: "10%",
      color: "var(--dolle-white)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M46 12 V46 H12",
    stroke: "currentColor",
    strokeWidth: "12"
  }))));
}

/* Hover speelt stil; klik speelt vanaf het begin met geluid en bediening. */
function H11Klik({
  bron,
  poster,
  kader,
  onder
}) {
  const ref = React.useRef(null);
  const [actief, setActief] = React.useState(false);
  React.useEffect(() => {
    const stop = e => {
      const el = ref.current;
      if (el && e.detail !== el) {
        el.muted = true;
        el.controls = false;
        el.pause();
        setActief(false);
      }
    };
    window.addEventListener("h11-geluid", stop);
    return () => window.removeEventListener("h11-geluid", stop);
  }, []);
  const aan = () => {
    const el = ref.current;
    if (el && !actief) {
      el.muted = true;
      el.play().catch(() => {});
    }
  };
  const uit = () => {
    const el = ref.current;
    if (el && !actief) el.pause();
  };
  const klik = () => {
    const el = ref.current;
    if (!el || actief) return;
    window.dispatchEvent(new CustomEvent("h11-geluid", {
      detail: el
    }));
    el.currentTime = 0;
    el.muted = false;
    el.controls = true;
    el.loop = false;
    el.play().catch(() => {});
    el.onended = () => {
      el.controls = false;
      el.muted = true;
      el.loop = true;
      setActief(false);
    };
    setActief(true);
  };
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gap: "var(--space-3)",
      minWidth: 0,
      alignContent: "end"
    }
  }, /*#__PURE__*/React.createElement("span", {
    onMouseEnter: aan,
    onMouseLeave: uit,
    onClick: klik,
    style: {
      position: "relative",
      display: "block",
      aspectRatio: kader,
      overflow: "hidden",
      borderRadius: 5,
      background: "#0b1730",
      cursor: actief ? "default" : "pointer"
    }
  }, /*#__PURE__*/React.createElement("video", {
    ref: ref,
    src: bron,
    poster: poster,
    muted: true,
    loop: true,
    playsInline: true,
    preload: "none",
    style: {
      position: "absolute",
      inset: 0,
      width: "100%",
      height: "100%",
      objectFit: "cover",
      display: "block"
    }
  })), onder ? /*#__PURE__*/React.createElement(H11Kicker, {
    size: "sm",
    style: {
      color: "var(--text-muted)"
    }
  }, onder) : null);
}

/* Drie even grote 16:9-kaders. Speelt er een, dan schuiven de andere twee weg
   en klapt die film uit over de volle breedte (de FPV als groot vierkant in het
   midden). Pauze of einde loopt dezelfde weg terug. */
function H11FilmRij({
  Film
}) {
  const [aan, setAan] = React.useState(-1);
  const vakken = [React.useRef(null), React.useRef(null), React.useRef(null)];
  React.useEffect(() => {
    const weg = vakken.map((ref, i) => {
      const el = ref.current;
      if (!el) return () => {};
      const speel = () => {
        setAan(i);
        setTimeout(() => {
          const r = el.getBoundingClientRect();
          const d = r.top + r.height / 2 - window.innerHeight / 2;
          if (Math.abs(d) > 20) window.scrollBy({
            top: Math.round(d),
            behavior: "smooth"
          });
        }, 1450);
      };
      const stop = () => setAan(n => n === i ? -1 : n);
      el.addEventListener("play", speel, true);
      el.addEventListener("pause", stop, true);
      el.addEventListener("ended", stop, true);
      return () => {
        el.removeEventListener("play", speel, true);
        el.removeEventListener("pause", stop, true);
        el.removeEventListener("ended", stop, true);
      };
    });
    return () => weg.forEach(f => f());
  }, []);
  /* Zachte, lange curve; ook de hoogte (16:9 naar vierkant) loopt mee in plaats van te springen. */
  const vloei = "1400ms cubic-bezier(.22,.8,.24,1)";
  const labels = ["Store film", "FPV", "Store details"];
  const kol = aan < 0 ? "repeat(3,minmax(0,1fr))" : [0, 1, 2].map(i => i === aan ? "minmax(0,1.8fr)" : "minmax(0,0.6fr)").join(" ");
  return /*#__PURE__*/React.createElement("div", {
    "data-bv-deel": "1",
    style: {
      display: "grid",
      gridTemplateColumns: kol,
      columnGap: "var(--space-3)",
      alignItems: "start",
      transition: "grid-template-columns " + vloei + ", column-gap " + vloei
    }
  }, H11_FILMS.map((f, i) => {
    const open = aan === i,
      dicht = aan >= 0 && !open;
    const vierkant = i === 1 && open;
    return /*#__PURE__*/React.createElement("div", {
      key: f.naam,
      ref: vakken[i],
      style: {
        display: "grid",
        gap: "var(--space-2)",
        minWidth: 0,
        overflow: "hidden",
        justifyItems: "center",
        opacity: dicht ? 0.45 : 1,
        transition: "opacity 1000ms ease"
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        width: "100%",
        containerType: "inline-size",
        display: "grid",
        justifyItems: "center"
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        width: vierkant ? "min(100cqw, 54vh)" : "100cqw",
        height: vierkant ? "min(100cqw, 54vh)" : "56.25cqw",
        transition: "width " + vloei + ", height " + vloei
      }
    }, /*#__PURE__*/React.createElement(Film, {
      bron: f.film,
      poster: f.poster,
      vul: true,
      watch: true,
      watchSchaal: open ? 2.8 : 2.4
    }))), /*#__PURE__*/React.createElement(H11Kicker, {
      size: "sm",
      style: {
        color: "var(--text-muted)",
        justifySelf: "start",
        whiteSpace: "nowrap"
      }
    }, labels[i]));
  }));
}
function CaseHangEleven({
  go
}) {
  const Film = window.CaseFilm;
  const Rij = window.CaseRij;
  const Haarlijn = window.Haarlijn;
  const [open, setOpen] = React.useState(-1);
  const namen = ["Piet Klerkx", "Blue Rivet", "Kiela", "Eezy"];
  const verwant = namen.slice(0, 3).map(n => (window.CASES || []).find(c => c.klant === n)).filter(Boolean);
  if (!Film) return null;
  const sectie = {
    background: "var(--dolle-navy)",
    color: "var(--text-body)",
    padding: "var(--space-6) var(--page-margin)"
  };
  const binnen = {
    maxWidth: "var(--content-max)",
    margin: "0 auto",
    display: "grid",
    gap: "var(--space-5)"
  };
  const naad = {
    backgroundImage: "linear-gradient(rgba(255,255,255,0.24), rgba(255,255,255,0.24))",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "0 0",
    backgroundSize: "var(--lijn, 0%) 1px",
    paddingTop: "var(--space-6)"
  };
  return /*#__PURE__*/React.createElement(React.Fragment, null, window.CMKop ? /*#__PURE__*/React.createElement(window.CMKop, {
    titel: "Hang Eleven",
    tags: ["Media production", "Store film", "FPV"],
    film: H11_VID + "hangeleven-store-film-16x9.mp4",
    start: 2.3,
    eind: 27.5,
    reserve: [H11_VID + "hangeleven-fs7-16x9.mp4"],
    poster: H11 + "hangeleven-store-film-16x9-poster-web.jpg",
    go: go,
    Knop: H11Button,
    Woorden: window.Words || null,
    Tag: window.DolleTag || H11Tag
  }, window.CMIntro ? /*#__PURE__*/React.createElement(window.CMIntro, {
    tekst: H11_INTRO,
    beeld: window.CMOpeningBeeld ? /*#__PURE__*/React.createElement(window.CMOpeningBeeld, {
      modus: "groei",
      ratio: "4 / 5",
      src: H11 + "hangeleven-opening-web.jpg"
    }) : null
  }) : null) : null, window.BVBand ? /*#__PURE__*/React.createElement("section", {
    className: "dolle-dark",
    style: {
      background: "var(--dolle-navy)",
      padding: "0 var(--page-margin) var(--space-6)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: "var(--content-max)",
      margin: "0 auto"
    }
  }, /*#__PURE__*/React.createElement(window.BVBand, {
    items: h11BandLijst(),
    hoog: "clamp(200px,24vw,340px)",
    sleep: true,
    schuif: true
  }))) : null, /*#__PURE__*/React.createElement("section", {
    className: "dolle-dark",
    style: sectie
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      ...binnen,
      ...naad
    }
  }, /*#__PURE__*/React.createElement("h2", {
    style: {
      margin: 0,
      fontFamily: "var(--font-core)",
      fontWeight: "var(--weight-heading)",
      fontSize: "clamp(22px,2.6vw,36px)",
      letterSpacing: "var(--track-heading)",
      color: "var(--text-heading)"
    }
  }, "Store film & FPV"), /*#__PURE__*/React.createElement(H11FilmRij, {
    Film: Film
  }), /*#__PURE__*/React.createElement("style", null, "@media (max-width:760px){[data-bv-deel]{grid-template-columns:minmax(0,1fr) !important}}"))), window.CMData ? /*#__PURE__*/React.createElement(window.CMData, {
    kop: "Deliverables",
    beeld: H11 + "hangeleven-still-02-web.jpg",
    waas: 0.42,
    cijfers: H11_DATA,
    Tag: window.DolleTag || H11Tag,
    tags: ["Concept", "FPV", "Direction", "Production", "Edit"],
    review: {
      tekst: "Opening our own store in Amsterdam was a big step, and DOLLE made it feel like one. The FPV flight through the store captured exactly who we are, and the shorts kept the opening alive on our socials for weeks. People still walk in and tell us they saw the film.",
      naam: "Name",
      rol: "Hang Eleven"
    }
  }) : null, /*#__PURE__*/React.createElement("section", {
    className: "dolle-dark",
    style: {
      background: "var(--dolle-navy)",
      padding: "var(--space-6) var(--page-margin)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: "var(--content-max)",
      margin: "0 auto",
      display: "grid",
      gap: "var(--space-4)",
      gridTemplateColumns: "minmax(0,1fr)"
    }
  }, /*#__PURE__*/React.createElement(H11Kicker, {
    style: {
      display: "block",
      whiteSpace: "nowrap",
      color: "var(--text-muted)"
    }
  }, "Related work"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "minmax(0,1fr)"
    }
  }, Rij ? verwant.map((c, i) => /*#__PURE__*/React.createElement(Rij, {
    key: c.id,
    c: c,
    i: i,
    go: go,
    open: open === c.id,
    onToggle: () => setOpen(open === c.id ? -1 : c.id)
  })) : null, Haarlijn ? /*#__PURE__*/React.createElement(Haarlijn, null) : null))), window.HomeConversie ? /*#__PURE__*/React.createElement(window.HomeConversie, {
    go: go,
    tone: "dark"
  }) : null);
}
window.CaseHangEleven = CaseHangEleven;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/CaseHangEleven.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/CaseKiela.jsx
try { (() => {
const KIELA_DS = window.DesignSystem_8f95a2;
const {
  Kicker: KKicker,
  Icon: KIcon,
  Button: KButton,
  CornerRule: KCorner
} = KIELA_DS;
const K_IMG = "../../assets/cases/web/";
const K_POSTER = "../../assets/hero-showreel-frame.png";
const K_KOLOMGAT = "var(--space-5)";

/* CASE DETAIL · KIELA · variant EXTENDED. Zelfde opbouw en ritme als Montel:
   hero op navy, intro op licht, daarna per dienst een band met een of meer
   projectblokken, de brandfilm, deliverables en de bestaande CTA.
   Beeld is nu placeholder: zodra het Kiela-materiaal er is vervangen we de
   bronnen, de opbouw blijft gelijk. */

const K_HERO = K_IMG + "case-03.jpg";
const K_BANDEN = [{
  dienst: "Launches",
  woord: "Wildly",
  accent: "forward"
}, {
  dienst: "Media production",
  woord: "Wildly",
  accent: "visible"
}, {
  dienst: "Growth",
  woord: "Wildly",
  accent: "driven"
}];
const K_LAUNCH = [{
  kop: "Brand & guidelines",
  tekst: "DOLLE worked through Kiela's identity with the family and put it into words. That story now runs through the website and every brand expression, captured in guidelines so the new line arrives with one clear voice behind it.",
  strook: [{
    src: "../../assets/cases/kiela/kiela-website-02.jpg",
    ratio: "16 / 9"
  }, {
    video: "../../assets/video/kiela-heritage-loop.mp4",
    ratio: "3 / 2",
    terug: "../../assets/cases/kiela/kiela-archief-04.jpg"
  }, {
    src: "../../assets/cases/kiela/kiela-archief-05.jpg",
    ratio: "4 / 5",
    plek: "28% 50%"
  }, {
    src: "../../assets/cases/kiela/kiela-logo.png",
    ratio: "4 / 3",
    pas: "contain",
    vlak: "var(--dolle-white)"
  }]
}];

/* Stills uit de brand film, om en om met behind-the-scenes van de set, zolang
   die er zijn; daarna lopen de stills door. Als carrousel onder de film. */
const K_MAP = "../../assets/cases/kiela/";
const K_STILLS = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 17, 18].map(n => ({
  src: K_MAP + "kiela-still-" + String(n).padStart(2, "0") + "-web.jpg",
  ratio: "16 / 9",
  breed: 309,
  zak: 0
}));
const K_BTS = [{
  src: K_MAP + "kiela-bts-03-web.jpg",
  ratio: "3 / 2",
  breed: 256,
  zak: -22
}, {
  src: K_MAP + "kiela-bts-01-web.jpg",
  ratio: "1 / 1",
  breed: 202,
  zak: 18
}, {
  src: K_MAP + "kiela-bts-05-web.jpg",
  ratio: "3 / 2",
  breed: 256,
  zak: -14
}, {
  src: K_MAP + "kiela-bts-04-web.jpg",
  ratio: "3 / 2",
  breed: 256,
  zak: 22
}, {
  src: K_MAP + "kiela-bts-02-web.jpg",
  ratio: "2 / 3",
  breed: 179,
  zak: -18
}, {
  src: K_MAP + "kiela-bts-06-web.jpg",
  ratio: "3 / 2",
  breed: 256,
  zak: 16
}, {
  src: K_MAP + "kiela-bts-07-web.jpg",
  ratio: "3 / 2",
  breed: 256,
  zak: -20
}, {
  src: K_MAP + "kiela-bts-08-web.jpg",
  ratio: "3 / 2",
  breed: 256,
  zak: 12
}, {
  src: K_MAP + "kiela-bts-09-web.jpg",
  ratio: "3 / 2",
  breed: 256,
  zak: -16
}];
const K_LOOPJES = [{
  video: "../../assets/video/kiela-bts-loop.mp4",
  terug: K_MAP + "kiela-bts-07-web.jpg"
}, {
  video: "../../assets/video/kiela-bts-loop-03.mp4",
  terug: K_MAP + "kiela-bts-06-web.jpg"
}, {
  video: "../../assets/video/kiela-vertical-01.mp4",
  terug: K_MAP + "kiela-bts-08-web.jpg"
}, {
  video: "../../assets/video/kiela-bts-loop-04.mp4",
  terug: K_MAP + "kiela-bts-03-web.jpg"
}, {
  video: "../../assets/video/kiela-bts-loop-02.mp4",
  terug: K_MAP + "kiela-bts-09-web.jpg"
}, {
  video: "../../assets/video/kiela-bts-loop-05.mp4",
  terug: K_MAP + "kiela-bts-04-web.jpg"
}, {
  video: "../../assets/video/kiela-bts-loop-06.mp4",
  terug: K_MAP + "kiela-bts-01-web.jpg"
}, {
  video: "../../assets/video/kiela-bts-loop-07.mp4",
  terug: K_MAP + "kiela-bts-05-web.jpg"
}];

/* Eén doorlopend ritme: still · loop · setfoto · still · setfoto · loop, met per
   plek een eigen breedte en hoogteverschil, zodat er nooit twee gelijke tegels
   naast elkaar staan en de strook rustig blijft ademen. */
const K_FILMSTROOK = (() => {
  const ritme = ["loop", "still", "loop", "bts", "still", "loop", "bts", "still", "loop", "bts", "still", "loop", "bts"];
  const breedtes = {
    still: [330, 270, 300, 360],
    bts: [250, 210, 280, 230],
    loop: [175, 195, 165, 185]
  };
  const zakken = [0, 18, -16, 10, -22, 14, -10, 22, -18];
  const voorraad = {
    still: K_STILLS.slice(),
    bts: K_BTS.slice(),
    loop: K_LOOPJES.slice()
  };
  const uit = [];
  let i = 0;
  while (voorraad.still.length || voorraad.bts.length || voorraad.loop.length) {
    let soort = ritme[i % ritme.length];
    if (!voorraad[soort].length) soort = voorraad.still.length ? "still" : voorraad.bts.length ? "bts" : "loop";
    const bron = voorraad[soort].shift();
    const ratio = soort === "loop" ? "9 / 16" : bron.ratio;
    const [rw, rh] = ratio.split("/").map(Number);
    uit.push(Object.assign({}, bron, {
      ratio: ratio,
      breed: Math.round(320 * rw / rh),
      zak: 0
    }));
    i++;
  }
  return uit;
})();
const K_MEDIA = [{
  kop: "Brand film",
  tekst: "Two production days, one complete brand film. Family, craftsmanship and the people on the factory floor at the centre, with the care Kiela puts into its team visible in every scene.",
  strook: K_FILMSTROOK
}, {
  kop: "Craft & process",
  tekst: "The making of a chair, captured step by step: frame, upholstery, finish and assembly, all under one roof and all by hand. It gives Kiela the material to show clients where the quality comes from, how a chair is designed and who builds it.",
  strook: [{
    src: K_MAP + "kiela-still-07-web.jpg",
    ratio: "4 / 3"
  }, {
    video: "../../assets/video/kiela-naaiatelier-02.mp4",
    ratio: "16 / 9",
    terug: K_MAP + "kiela-still-07-web.jpg"
  }, {
    src: K_MAP + "kiela-still-08-web.jpg",
    ratio: "1 / 1"
  }, {
    video: "../../assets/video/kiela-stoffeerderij.mp4",
    ratio: "3 / 2",
    terug: K_MAP + "kiela-still-17-web.jpg"
  }, {
    src: K_MAP + "kiela-still-09-web.jpg",
    ratio: "16 / 9"
  }, {
    video: "../../assets/video/kiela-lasserij-01.mp4",
    ratio: "4 / 5",
    terug: K_MAP + "kiela-still-04-web.jpg"
  }, {
    video: "../../assets/video/kiela-slijperij.mp4",
    ratio: "16 / 9",
    terug: K_MAP + "kiela-still-03-web.jpg"
  }, {
    src: K_MAP + "kiela-still-03-web.jpg",
    ratio: "3 / 4"
  }, {
    video: "../../assets/video/kiela-houtafdeling.mp4",
    ratio: "3 / 2",
    terug: K_MAP + "kiela-still-06-web.jpg"
  }, {
    video: "../../assets/video/kiela-lijmspuiterij.mp4",
    ratio: "16 / 9",
    terug: K_MAP + "kiela-still-05-web.jpg"
  }]
}, {
  kop: "Product films & photography",
  tekst: "The new product line in motion and in stills, delivered per format for the website, sales and the clients Kiela serves.",
  strook: [{
    src: K_MAP + "kiela-still-15-web.jpg",
    ratio: "16 / 9"
  }, {
    src: K_MAP + "kiela-still-16-web.jpg",
    ratio: "16 / 9"
  }]
}];

/* Productfilms en -fotografie: kleine carrousel waarin de loops en de stills
   elkaar doorlopend afwisselen. */
const K_PRODUCT = [{
  video: "../../assets/video/kiela-product-1.mp4",
  ratio: "16 / 9",
  breed: 440,
  zak: 0,
  terug: K_MAP + "kiela-still-16-web.jpg"
}, {
  src: K_MAP + "kiela-still-15-web.jpg",
  ratio: "16 / 9",
  breed: 440,
  zak: -8
}, {
  video: "../../assets/video/kiela-product-2.mp4",
  ratio: "16 / 9",
  breed: 440,
  zak: 7,
  terug: K_MAP + "kiela-still-17-web.jpg"
}, {
  src: K_MAP + "kiela-still-16-web.jpg",
  ratio: "16 / 9",
  breed: 440,
  zak: -6
}, {
  video: "../../assets/video/kiela-product-3.mp4",
  ratio: "16 / 9",
  breed: 440,
  zak: 0,
  terug: K_MAP + "kiela-still-10-web.jpg"
}, {
  src: K_MAP + "kiela-still-17-web.jpg",
  ratio: "16 / 9",
  breed: 440,
  zak: 8
}, {
  video: "../../assets/video/kiela-product-4.mp4",
  ratio: "16 / 9",
  breed: 440,
  zak: -7,
  terug: K_MAP + "kiela-still-11-web.jpg"
}, {
  src: K_MAP + "kiela-still-10-web.jpg",
  ratio: "16 / 9",
  breed: 440,
  zak: 6
}, {
  video: "../../assets/video/kiela-product-5.mp4",
  ratio: "16 / 9",
  breed: 440,
  zak: 0,
  terug: K_MAP + "kiela-still-15-web.jpg"
}, {
  src: K_MAP + "kiela-still-11-web.jpg",
  ratio: "16 / 9",
  breed: 440,
  zak: -8
}];
const K_GROWTH = [{
  kop: "International rollout",
  tekst: "One campaign, built to travel. DOLLE delivered the brand film in versions for Kiela's Dutch, German and English-speaking clients, giving its sales team one story to take into every market.",
  strook: [{
    src: K_IMG + "case-04.jpg",
    ratio: "3 / 2",
    film: true
  }, {
    src: K_IMG + "case-01.jpg",
    ratio: "9 / 16",
    film: true
  }, {
    src: K_IMG + "case-06.jpg",
    ratio: "4 / 5"
  }]
}];

/* Fragment van de brandfilm voor de header; te kiezen op kiela-hero-trim.html. */
const K_HERO_TRIM = (() => {
  try {
    const q = JSON.parse(window.localStorage.getItem("kiela-hero-trim"));
    if (q && q.start != null) return q;
  } catch (e) {}
  return {
    start: 8.37,
    eind: 32.14
  };
})();
const K_INTRO = ["Kiela is a Dutch family business that designs and builds salon furniture in its own factory. Chairs, wash units and styling stations, made by hand for salons at home and abroad.", "With a new product line and international clients to reach, Kiela asked DOLLE for one visual campaign. DOLLE sharpened the brand story, then produced the brand film, product films and photography to carry it into every market."];
/* Cijfers voor het datablok; een streepje tot het echte aantal binnen is. */
const K_DATA = [{
  label: "Views generated",
  waarde: 180,
  achter: "K+"
}, {
  label: "Production days",
  waarde: 2
}, {
  label: "Languages",
  waarde: 3
}, {
  label: "Films delivered",
  waarde: 16
}];
const K_LEVERING = ["Brand story", "Copywriting", "Guidelines", "Concept", "Direction", "Archive research", "Production", "Edit", "Photography"];

/* Archiefbeeld uit de familiegeschiedenis, als doorlopende carrousel onder de
   mediaproductie-blokken. Wisselende maten en hoogtes, oneindig swipebaar. */
const K_ARCHIEF_MAP = "../../assets/cases/kiela/";
const K_ARCHIEF = [{
  src: K_ARCHIEF_MAP + "kiela-archief-05.jpg",
  ratio: "4 / 3",
  breed: 392,
  zak: -26
}, {
  src: K_ARCHIEF_MAP + "kiela-archief-01.jpg",
  ratio: "3 / 4",
  breed: 274,
  zak: 44
}, {
  src: K_ARCHIEF_MAP + "kiela-archief-03.jpg",
  ratio: "4 / 3",
  breed: 417,
  zak: -14
}, {
  src: K_ARCHIEF_MAP + "kiela-archief-02.jpg",
  ratio: "3 / 2",
  breed: 333,
  zak: 36
}, {
  src: K_ARCHIEF_MAP + "kiela-archief-06.jpg",
  ratio: "3 / 2",
  breed: 433,
  zak: -34
}, {
  src: K_ARCHIEF_MAP + "kiela-archief-04.jpg",
  ratio: "4 / 3",
  breed: 367,
  zak: 28
}];

/* Dienstband: de dienst links, het statement rechts met één woord in accent. */
function DienstBand({
  dienst,
  lijn = true
}) {
  return /*#__PURE__*/React.createElement("section", {
    className: "dolle-dark",
    style: {
      background: "var(--dolle-navy)",
      padding: "var(--space-6) var(--page-margin) var(--space-4)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: "var(--content-max)",
      margin: "0 auto",
      borderTop: lijn ? "1px solid var(--white-24, rgba(255,255,255,0.24))" : "none",
      paddingTop: lijn ? "var(--space-5)" : 0
    }
  }, /*#__PURE__*/React.createElement(KKicker, {
    style: {
      color: "var(--text-muted)"
    }
  }, dienst)));
}

/* Statement: sluit de dienstsectie af, rechts onderin. Het doelwoord rouleert
   doorlopend, zoals de WILDLY-statements elders op de site. */
const K_DOELEN = ["forward", "visible", "driven", "ahead"];
function Statement({
  woord,
  accent,
  klein,
  links
}) {
  const start = Math.max(0, K_DOELEN.indexOf(accent));
  const [i, setI] = React.useState(start);
  const reduce = typeof window !== "undefined" && window.matchMedia ? window.matchMedia("(prefers-reduced-motion: reduce)").matches : false;
  React.useEffect(() => {
    if (reduce) return;
    const t = setInterval(() => setI(n => (n + 1) % K_DOELEN.length), 2600);
    return () => clearInterval(t);
  }, [reduce]);
  const rij = "1.08em";
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: klein || links ? "flex-start" : "flex-end",
      paddingTop: klein ? 0 : "var(--space-5)"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: "flex",
      gap: "0.34em",
      fontFamily: "var(--font-core)",
      fontWeight: "var(--weight-heading)",
      fontSize: klein ? "clamp(15px,1.4vw,20px)" : "clamp(18px,2.2vw,30px)",
      lineHeight: 1.04,
      textTransform: "uppercase",
      letterSpacing: "var(--track-wildly)",
      color: "var(--text-heading)",
      whiteSpace: "nowrap"
    }
  }, /*#__PURE__*/React.createElement("span", null, woord), /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true",
    style: {
      display: "block",
      height: rij,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: "block",
      transform: "translateY(" + -i * 1.08 + "em)",
      transition: reduce ? "none" : "transform 620ms var(--ease-dolle)"
    }
  }, K_DOELEN.map(d => /*#__PURE__*/React.createElement("span", {
    key: d,
    style: {
      display: "block",
      height: rij,
      color: "var(--text-accent)"
    }
  }, d)))), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      width: 1,
      height: 1,
      overflow: "hidden",
      clipPath: "inset(50%)"
    }
  }, woord + " " + accent)));
}

/* Videotegels delen één planner: maximaal een paar loops spelen tegelijk (de
   best zichtbare), de rest staat gepauzeerd. Zo blijft de pagina soepel, ook
   met een hele strook clips, en laden bestanden pas als ze nodig zijn. */
const K_LOOPS = {
  lijst: [],
  max: 12,
  plan: 0
};
/* Hoeveel van de tegel er echt te zien is: binnen het venster en niet weggeklipt
   door de rail waarin hij staat. Klonen van de carrousel die buiten de rail
   vallen tellen dus niet mee. */
function loopZicht(v) {
  const r = v.getBoundingClientRect();
  if (!r.width || !r.height) return 0;
  const vh = window.innerHeight || 0;
  const vw = window.innerWidth || 0;
  let l = Math.max(r.left, 0),
    t = Math.max(r.top, -vh * 0.6);
  let re = Math.min(r.right, vw),
    b = Math.min(r.bottom, vh + vh * 0.6);
  const rail = v.closest ? v.closest("[data-rail]") : null;
  if (rail) {
    const q = rail.getBoundingClientRect();
    l = Math.max(l, q.left);
    re = Math.min(re, q.right);
    t = Math.max(t, q.top);
    b = Math.min(b, q.bottom);
  }
  const opp = Math.max(0, re - l) * Math.max(0, b - t);
  return opp / (r.width * r.height);
}
function loopsPlannen() {
  if (K_LOOPS.plan) return;
  K_LOOPS.plan = requestAnimationFrame(() => {
    K_LOOPS.plan = 0;
    /* Wie al speelt en nog in beeld is houdt zijn plek; daarna vullen de best
       zichtbare clips de rest. Per bestand speelt er maar één element, zodat de
       drie klonen van een carrousel geen plekken opsnoepen. */
    K_LOOPS.lijst.forEach(e => {
      if (e.v) e.zicht = loopZicht(e.v);
    });
    const kandidaten = K_LOOPS.lijst.filter(e => e.v && e.zicht > 0.05);
    const bezig = kandidaten.filter(e => !e.v.paused).sort((a, b) => b.zicht - a.zicht);
    const nieuw = kandidaten.filter(e => e.v.paused).sort((a, b) => b.zicht - a.zicht);
    const aan = new Set();
    const gekozen = new Set();
    bezig.concat(nieuw).forEach(e => {
      if (aan.size >= K_LOOPS.max || gekozen.has(e.bron)) return;
      gekozen.add(e.bron);
      aan.add(e.v);
    });
    K_LOOPS.lijst.forEach(e => {
      const v = e.v;
      if (!v) return;
      if (aan.has(v)) {
        if (!v.getAttribute("src")) {
          v.setAttribute("src", e.bron);
          v.load();
        }
        if (v.paused) v.play().catch(() => {});
      } else if (!v.paused) {
        v.pause();
      }
    });
  });
}
function Loop({
  bron,
  stijl,
  terug
}) {
  const ref = React.useRef(null);
  const [klaar, setKlaar] = React.useState(false);
  React.useEffect(() => {
    const v = ref.current;
    if (!v) return;
    v.muted = true;
    v.defaultMuted = true;
    const post = {
      v: v,
      bron: bron,
      zicht: 0
    };
    K_LOOPS.lijst.push(post);
    /* Alleen bij een echte fout opnieuw laden; trager laden (stalled) mag zijn
       gang gaan, anders wordt een clip telkens teruggezet. */
    const herstel = () => {
      setKlaar(false);
      v.removeAttribute("src");
      v.load();
      loopsPlannen();
    };
    const gaat = () => setKlaar(true);
    v.addEventListener("error", herstel);
    v.addEventListener("loadeddata", gaat);
    v.addEventListener("playing", gaat);
    const zichtbaar = () => {
      if (document.hidden) {
        v.pause();
      } else {
        loopsPlannen();
      }
    };
    document.addEventListener("visibilitychange", zichtbaar);
    let ob = null;
    /* De observer dient alleen als trigger; het echte meten doet de planner. */
    if ("IntersectionObserver" in window) {
      ob = new IntersectionObserver(() => loopsPlannen(), {
        threshold: [0, 0.01, 0.3, 0.8],
        rootMargin: "400px 0px"
      });
      ob.observe(v);
    }
    const bijScroll = () => loopsPlannen();
    window.addEventListener("scroll", bijScroll, {
      passive: true
    });
    window.addEventListener("resize", bijScroll);
    loopsPlannen();
    return () => {
      if (ob) ob.disconnect();
      window.removeEventListener("scroll", bijScroll);
      window.removeEventListener("resize", bijScroll);
      v.removeEventListener("error", herstel);
      v.removeEventListener("loadeddata", gaat);
      v.removeEventListener("playing", gaat);
      document.removeEventListener("visibilitychange", zichtbaar);
      const i = K_LOOPS.lijst.indexOf(post);
      if (i > -1) K_LOOPS.lijst.splice(i, 1);
    };
  }, [bron]);
  /* Zolang de clip niet speelt (of niet laadt) blijft er een foto staan, zodat
     de tegel nooit zwart of leeg is. */
  return /*#__PURE__*/React.createElement(React.Fragment, null, terug ? /*#__PURE__*/React.createElement("img", {
    src: terug,
    alt: "",
    loading: "lazy",
    decoding: "async",
    draggable: "false",
    style: Object.assign({}, stijl, {
      opacity: klaar ? 0 : 1,
      transition: "opacity 400ms var(--ease-dolle)"
    })
  }) : null, /*#__PURE__*/React.createElement("video", {
    ref: ref,
    muted: true,
    loop: true,
    playsInline: true,
    autoPlay: true,
    preload: "none",
    draggable: "false",
    disablePictureInPicture: true,
    disableRemotePlayback: true,
    style: Object.assign({}, stijl, {
      opacity: klaar ? 1 : 0,
      transition: "opacity 400ms var(--ease-dolle)"
    })
  }));
}

/* Beeldstrook die zich naar de kolom schikt: elke tegel krijgt breedte naar
   verhouding, dus alle beelden passen altijd naast elkaar. Geen scroll nodig;
   wordt de kolom breder (open staat), dan worden de beelden groter. */
function PasStrook({
  items
}) {
  const deel = r => {
    const s = String(r || "1 / 1").split("/");
    const w = parseFloat(s[0]),
      h = parseFloat(s[1] || 1);
    return w && h ? w / h : 1;
  };
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: "6px",
      width: "100%",
      minWidth: 0,
      alignItems: "stretch"
    }
  }, items.map((t, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      position: "relative",
      flex: deel(t.ratio) + " 1 0",
      minWidth: 0,
      aspectRatio: t.ratio,
      overflow: "hidden",
      background: t.vlak || "var(--surface-sunk)"
    }
  }, t.video ? /*#__PURE__*/React.createElement(Loop, {
    bron: t.video,
    terug: t.terug,
    stijl: {
      position: "absolute",
      inset: 0,
      width: "100%",
      height: "100%",
      objectFit: "cover",
      display: "block"
    }
  }) : /*#__PURE__*/React.createElement("img", {
    src: t.src,
    alt: "",
    loading: "lazy",
    draggable: "false",
    style: {
      position: "absolute",
      inset: t.pas === "contain" ? "12%" : 0,
      width: t.pas === "contain" ? "76%" : "100%",
      height: t.pas === "contain" ? "76%" : "100%",
      objectFit: t.pas || "cover",
      objectPosition: t.plek || "50% 50%",
      display: "block"
    }
  }), t.film && window.CasePlay ? /*#__PURE__*/React.createElement(window.CasePlay, {
    klein: true
  }) : null)));
}

/* Launchblok: beeldstrook over de volle breedte (bij veel beelden in rijen van
   vijf), tekst eronder links. */
function KlapBlok({
  blok,
  lijn,
  rechts,
  dienst,
  spreuk
}) {
  /* Klein beginnen en groot eindigen: de eerste rij heeft de meeste beelden,\n     de laatste de minste, dus de beelden worden naar onderen toe groter. */
  const rijen = [];
  const maten = [6, 4, 3, 2];
  let rest = blok.strook.slice();
  let m = 0;
  while (rest.length) {
    const n = rest.length <= maten[maten.length - 1] ? rest.length : maten[m] || 2;
    rijen.push(rest.slice(0, n));
    rest = rest.slice(n);
    m++;
  }
  return /*#__PURE__*/React.createElement("div", {
    style: {
      borderTop: lijn ? "1px solid var(--white-24, rgba(255,255,255,0.24))" : "none",
      paddingTop: lijn ? "var(--space-6)" : 0,
      paddingBottom: "var(--space-6)"
    }
  }, dienst ? /*#__PURE__*/React.createElement(KKicker, {
    style: {
      display: "block",
      color: "var(--text-muted)",
      paddingBottom: "var(--space-5)"
    }
  }, dienst) : null, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gap: "6px"
    }
  }, rijen.map((r, i) => /*#__PURE__*/React.createElement(PasStrook, {
    key: i,
    items: r
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: rechts ? "minmax(0,1fr) auto" : "auto minmax(0,1fr)",
      gap: K_KOLOMGAT,
      alignItems: "start",
      paddingTop: "var(--space-4)"
    }
  }, rechts ? /*#__PURE__*/React.createElement("span", null) : null, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gap: "var(--space-3)",
      justifyItems: "start",
      width: "min(45ch, 38vw)"
    }
  }, /*#__PURE__*/React.createElement("h2", {
    style: {
      margin: 0,
      fontFamily: "var(--font-core)",
      fontWeight: "var(--weight-heading)",
      fontSize: "clamp(19px,2vw,27px)",
      letterSpacing: "var(--track-heading)",
      color: "var(--text-heading)"
    }
  }, blok.kop), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontSize: "var(--size-body)",
      lineHeight: "var(--lh-body)"
    }
  }, blok.tekst))), spreuk ? /*#__PURE__*/React.createElement(Statement, {
    woord: "Wildly",
    accent: "visible",
    links: true
  }) : null);
}
/* Doorlopende loop zonder geluid; de knop rechtsonder zet het geluid aan. */
function LoopFilm({
  bron
}) {
  const ref = React.useRef(null);
  const [luid, setLuid] = React.useState(false);
  /* Begint een andere video met geluid, dan valt deze terug op mute. */
  React.useEffect(() => {
    const let_op = e => {
      const v = ref.current;
      if (!v || e.target === v || e.target.muted) return;
      v.muted = true;
      setLuid(false);
    };
    document.addEventListener("play", let_op, true);
    return () => document.removeEventListener("play", let_op, true);
  }, []);
  const zet = () => {
    const v = ref.current;
    if (!v) return;
    if (!luid) {
      /* Eén geluidsbron tegelijk: alle andere video's gaan op mute en pauze. */
      document.querySelectorAll("video").forEach(a => {
        if (a !== v) {
          a.muted = true;
          if (!a.loop) a.pause();
        }
      });
    }
    v.muted = luid;
    if (!luid) v.play().catch(() => {});
    setLuid(!luid);
  };
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      background: "#0b1730",
      overflow: "hidden",
      width: "min(100%, 640px)"
    }
  }, /*#__PURE__*/React.createElement("video", {
    ref: ref,
    src: bron,
    autoPlay: true,
    muted: true,
    loop: true,
    playsInline: true,
    preload: "metadata",
    style: {
      display: "block",
      width: "100%",
      height: "auto"
    }
  }), /*#__PURE__*/React.createElement("button", {
    onClick: zet,
    "aria-label": luid ? "Mute" : "Unmute",
    style: {
      position: "absolute",
      right: "var(--space-3)",
      bottom: "var(--space-3)",
      width: 44,
      height: 44,
      display: "grid",
      placeItems: "center",
      background: "rgba(9,18,38,0.62)",
      border: "1px solid var(--white-24, rgba(255,255,255,0.24))",
      color: "var(--dolle-white)",
      cursor: "pointer",
      padding: 0
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: "18",
    height: "18",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "1.7"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M4 9h3l5-4v14l-5-4H4z"
  }), luid ? /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("path", {
    d: "M16.5 8.5a5 5 0 0 1 0 7"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M19 6a8.5 8.5 0 0 1 0 12"
  })) : /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("path", {
    d: "M16.5 9.5l5 5"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M21.5 9.5l-5 5"
  })))));
}

/* Projectblok: beeldstrook binnen hoekmarkeringen, tekst ernaast. */
function ProjectBlok({
  blok,
  beeldEerst
}) {
  const Strook = window.CaseStrook;
  const beeld = /*#__PURE__*/React.createElement(KCorner, {
    corners: "tl-br",
    size: 20,
    inset: 10,
    tone: "strong",
    style: {
      alignSelf: "stretch",
      display: "grid",
      alignContent: "center"
    }
  }, Strook ? /*#__PURE__*/React.createElement(Strook, {
    items: blok.strook
  }) : null);
  const tekst = /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gap: "var(--space-3)",
      alignContent: "center",
      maxWidth: "45ch"
    }
  }, /*#__PURE__*/React.createElement("h2", {
    style: {
      margin: 0,
      fontFamily: "var(--font-core)",
      fontWeight: "var(--weight-heading)",
      fontSize: "clamp(19px,2vw,27px)",
      letterSpacing: "var(--track-heading)",
      color: "var(--text-heading)"
    }
  }, blok.kop), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontSize: "var(--size-body)",
      lineHeight: "var(--lh-body)"
    }
  }, blok.tekst));
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(auto-fit,minmax(300px,1fr))",
      gap: K_KOLOMGAT,
      alignItems: "stretch",
      backgroundImage: "linear-gradient(rgba(255,255,255,0.24), rgba(255,255,255,0.24))",
      backgroundRepeat: "no-repeat",
      backgroundPosition: "0 0",
      backgroundSize: "var(--lijn, 0%) 1px",
      paddingTop: "var(--space-6)"
    }
  }, beeldEerst ? beeld : tekst, beeldEerst ? tekst : beeld);
}
const K_BAND = [{
  video: "../../assets/video/kiela-naaiatelier-02.mp4",
  r: 16 / 9
}, {
  video: "../../assets/video/kiela-bts-loop.mp4",
  r: 9 / 16
}, {
  src: K_MAP + "kiela-still-02-web.jpg",
  r: 16 / 9
}, {
  video: "../../assets/video/kiela-stoffeerderij.mp4",
  r: 16 / 9
}, {
  video: "../../assets/video/kiela-vertical-01.mp4",
  r: 9 / 16
}, {
  src: K_MAP + "kiela-bts-01-web.jpg",
  r: 1
}, {
  video: "../../assets/video/kiela-slijperij.mp4",
  r: 16 / 9
}, {
  src: K_MAP + "kiela-still-12-web.jpg",
  r: 16 / 9
}, {
  video: "../../assets/video/kiela-bts-loop-03.mp4",
  r: 9 / 16
}, {
  video: "../../assets/video/kiela-houtafdeling.mp4",
  r: 16 / 9
}];
const K_AMBACHT = [["kiela-naaiatelier-02", "Sewing", "kiela-still-07"], ["kiela-stoffeerderij", "Upholstery", "kiela-still-17"], ["kiela-lasserij-01", "Welding", "kiela-still-04"], ["kiela-houtafdeling", "Woodwork", "kiela-still-06"]].map(([f, n, p]) => ({
  naam: n,
  film: "../../assets/video/" + f + ".mp4",
  poster: K_MAP + p + "-web.jpg",
  kader: "4 / 5"
}));
/* Craft & process als de studio-reels van Woonexpress: één afdeling vult het
   venster en speelt, de rest staat als smalle strook. */
const K_REELS = [["kiela-naaiatelier-02", "Sewing"], ["kiela-stoffeerderij", "Upholstery"], ["kiela-lasserij-01", "Welding"], ["kiela-houtafdeling", "Woodwork"], ["kiela-slijperij", "Grinding"], ["kiela-lijmspuiterij", "Glue spraying"]].map(([f, n]) => ({
  video: "../../assets/video/" + f + ".mp4#t=0.5",
  label: n
}));
const K_AMBACHT_KAART = [{
  src: K_MAP + "kiela-still-08-web.jpg",
  ratio: "1 / 1",
  breed: 300,
  zak: 0,
  tekst: "Craft & process"
}, {
  video: "../../assets/video/kiela-slijperij.mp4",
  terug: K_MAP + "kiela-still-03-web.jpg",
  ratio: "16 / 9",
  breed: 420,
  zak: 6,
  tekst: "Grinding"
}, {
  src: K_MAP + "kiela-still-09-web.jpg",
  ratio: "16 / 9",
  breed: 420,
  zak: -5,
  tekst: "Craft & process"
}, {
  video: "../../assets/video/kiela-lijmspuiterij.mp4",
  terug: K_MAP + "kiela-still-05-web.jpg",
  ratio: "16 / 9",
  breed: 420,
  zak: 4,
  tekst: "Glue spraying"
}, {
  src: K_MAP + "kiela-still-03-web.jpg",
  ratio: "3 / 4",
  breed: 280,
  zak: -6,
  tekst: "Craft & process"
}];
function KKop({
  dienst,
  woord
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gap: "var(--space-6)"
    }
  }, window.CMLijn ? /*#__PURE__*/React.createElement(window.CMLijn, null) : null, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "baseline",
      gap: "var(--space-6)",
      flexWrap: "wrap"
    }
  }, /*#__PURE__*/React.createElement(KKicker, {
    style: {
      display: "block",
      whiteSpace: "nowrap",
      color: "var(--text-muted)"
    }
  }, dienst), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-core)",
      fontWeight: "var(--weight-heading)",
      fontSize: "clamp(18px,2.2vw,30px)",
      letterSpacing: "var(--track-wildly)",
      textTransform: "uppercase",
      color: "var(--text-heading)",
      whiteSpace: "nowrap"
    }
  }, "Wildly ", /*#__PURE__*/React.createElement("span", {
    style: {
      color: "var(--text-accent)"
    }
  }, woord))));
}

/* De poster van een film beweegt binnen zijn kader mee met de scroll. Werkt met
   de losse CSS-eigenschappen translate/scale, zodat het hover-effect van de
   film (transform) er gewoon bovenop blijft werken. */
function KParallaxPoster({
  children,
  alle
}) {
  const vak = React.useRef(null);
  React.useEffect(() => {
    if (window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    let raf = 0;
    const tik = () => {
      raf = 0;
      const v = vak.current;
      if (!v) return;
      /* alle: elke foto en loop in het board beweegt binnen zijn eigen tegel;
         het logo (contain) blijft staan. */
      const lijst = alle ? [...v.querySelectorAll("img, video")].filter(e => getComputedStyle(e).objectFit !== "contain" && !/kiela-website/.test(e.currentSrc || e.src || "")) : [v.querySelector("img")].filter(Boolean);
      const vh = window.innerHeight || 800;
      lijst.forEach(img => {
        const b = img.parentElement.getBoundingClientRect();
        if (b.bottom < -100 || b.top > vh + 100) return;
        const p = Math.max(-1, Math.min(1, (b.top + b.height / 2 - vh / 2) / (vh / 2 + b.height / 2)));
        img.style.scale = "1.18";
        img.style.translate = "0 " + (p * b.height * 0.08).toFixed(1) + "px";
      });
    };
    const op = () => {
      if (!raf) raf = requestAnimationFrame(tik);
    };
    tik();
    window.addEventListener("scroll", op, {
      passive: true,
      capture: true
    });
    window.addEventListener("resize", op);
    return () => {
      window.removeEventListener("scroll", op, true);
      window.removeEventListener("resize", op);
      if (raf) cancelAnimationFrame(raf);
    };
  }, []);
  return /*#__PURE__*/React.createElement("div", {
    ref: vak
  }, children);
}
function CaseKiela({
  go
}) {
  const Film = window.CaseFilm;
  const Rij = window.CaseRij;
  const Haarlijn = window.Haarlijn;
  const Laag = window.WXLaag;
  const Ontvouw = window.WXOntvouw;
  const Kaarten = window.CaseKaarten;
  const [open, setOpen] = React.useState(-1);
  React.useEffect(() => {
    const zet = () => {
      const h = document.querySelector("header");
      document.documentElement.style.setProperty("--k-nav", (h && h.offsetHeight || 92) + "px");
    };
    zet();
    window.addEventListener("resize", zet);
    return () => window.removeEventListener("resize", zet);
  }, []);
  const namen = ["Woonexpress", "Montel", "Landgoed Bergvliet", "Eezy"];
  const verwant = namen.map(n => (window.CASES || []).find(c => c.klant === n)).filter(Boolean);
  if (!Film || !Laag || !Ontvouw) return null;
  const sectie = {
    background: "var(--dolle-navy)",
    color: "var(--text-body)",
    padding: "var(--space-6) var(--page-margin)"
  };
  const binnen = {
    maxWidth: "var(--content-max)",
    margin: "0 auto",
    display: "grid",
    gap: "var(--space-6)"
  };
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("style", null, "@media (max-width:860px){[data-k-opening],[data-wx-ontvouw],[data-k-board]{grid-template-columns:minmax(0,1fr) !important}[data-k-board]>div:first-child{position:static !important}[data-bv-deel]{grid-template-columns:repeat(2,minmax(0,1fr)) !important}}"), window.CMKop ? /*#__PURE__*/React.createElement(window.CMKop, {
    titel: "Kiela",
    tags: ["Launches", "Media production", "Growth"],
    film: "../../assets/video/kiela-brandfilm.mp4",
    start: K_HERO_TRIM.start,
    eind: K_HERO_TRIM.eind,
    reserve: ["kiela-stoffeerderij", "kiela-lasserij-01", "kiela-naaiatelier-02", "kiela-houtafdeling", "kiela-lijmspuiterij"].map(f => "../../assets/video/" + f + ".mp4"),
    poster: K_MAP + "kiela-still-07-web.jpg",
    go: go,
    Knop: KButton,
    Woorden: window.Words || null,
    Tag: DolleTag
  }, window.CMIntro ? /*#__PURE__*/React.createElement(window.CMIntro, {
    tekst: K_INTRO,
    beeld: window.CMOpeningBeeld ? /*#__PURE__*/React.createElement(window.CMOpeningBeeld, {
      modus: "groei",
      start: 0.55,
      ratio: "16 / 9",
      src: K_MAP + "kiela-film-poster-web.jpg"
    }) : null
  }) : null) : null, window.BVBand ? /*#__PURE__*/React.createElement("section", {
    className: "dolle-dark",
    style: {
      background: "var(--dolle-navy)",
      padding: "0 var(--page-margin) var(--space-6)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: "var(--content-max)",
      margin: "0 auto"
    }
  }, /*#__PURE__*/React.createElement(window.BVBand, {
    items: K_BAND,
    hoog: "clamp(200px,24vw,340px)",
    sleep: true,
    golf: true
  }))) : null, /*#__PURE__*/React.createElement("section", {
    className: "dolle-dark",
    style: sectie
  }, /*#__PURE__*/React.createElement("div", {
    style: binnen
  }, /*#__PURE__*/React.createElement(KKop, {
    dienst: "LAUNCHES",
    woord: "forward"
  }), /*#__PURE__*/React.createElement("div", {
    "data-k-board": "1",
    style: {
      display: "grid",
      gridTemplateColumns: "minmax(0,0.75fr) minmax(0,1.6fr)",
      gap: "calc(var(--grid-gap) * 1.1)",
      alignItems: "start"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gap: "var(--space-3)",
      maxWidth: "45ch",
      alignSelf: "start",
      position: "sticky",
      top: "calc(var(--k-nav, 92px) + 24px)"
    }
  }, /*#__PURE__*/React.createElement("h2", {
    style: {
      margin: 0,
      fontFamily: "var(--font-core)",
      fontWeight: "var(--weight-heading)",
      fontSize: "clamp(19px,2vw,27px)",
      letterSpacing: "var(--track-heading)",
      color: "var(--text-heading)"
    }
  }, K_LAUNCH[0].kop), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontSize: "var(--size-body)",
      lineHeight: "var(--lh-body)"
    }
  }, K_LAUNCH[0].tekst)), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gap: "6px"
    }
  }, /*#__PURE__*/React.createElement(KParallaxPoster, {
    alle: true
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gap: "6px"
    }
  }, /*#__PURE__*/React.createElement(PasStrook, {
    items: [K_LAUNCH[0].strook[0]]
  }), /*#__PURE__*/React.createElement(PasStrook, {
    items: K_LAUNCH[0].strook.slice(1)
  }))))))), /*#__PURE__*/React.createElement("section", {
    className: "dolle-dark",
    style: sectie
  }, /*#__PURE__*/React.createElement("div", {
    style: binnen
  }, /*#__PURE__*/React.createElement(KKop, {
    dienst: "MEDIA PRODUCTION",
    woord: "visible"
  }), /*#__PURE__*/React.createElement(Laag, {
    kop: K_MEDIA[0].kop,
    tekst: K_MEDIA[0].tekst
  }, /*#__PURE__*/React.createElement(KParallaxPoster, null, /*#__PURE__*/React.createElement(Film, {
    bron: "../../assets/video/kiela-brandfilm.mp4",
    poster: "../../assets/cases/kiela/kiela-film-poster-web.jpg",
    onderschrift: "BRAND FILM \xB7 KIELA",
    watch: true
  })), Kaarten ? /*#__PURE__*/React.createElement(Kaarten, {
    items: K_FILMSTROOK,
    tempo: 0.5,
    schuif: true
  }) : null), /*#__PURE__*/React.createElement(Laag, {
    kop: K_MEDIA[1].kop,
    tekst: K_MEDIA[1].tekst
  }, window.CMAccordeon ? /*#__PURE__*/React.createElement(window.CMAccordeon, {
    items: K_REELS,
    ratio: 16 / 9,
    licht: true,
    hoog: "clamp(300px,30vw,500px)"
  }) : null), /*#__PURE__*/React.createElement(Laag, {
    kop: K_MEDIA[2].kop,
    tekst: K_MEDIA[2].tekst
  }, Kaarten ? /*#__PURE__*/React.createElement(Kaarten, {
    items: K_PRODUCT,
    tempo: 0.5,
    schuif: true
  }) : null), /*#__PURE__*/React.createElement(Laag, {
    kop: "Heritage",
    geenKop: true,
    volLijn: true
  }, /*#__PURE__*/React.createElement(Ontvouw, {
    plak: true,
    breed: true,
    kop: "Heritage",
    tekst: "DOLLE went into the family archives and turned decades of history into a short chapter within the film, linking where Kiela started to what it builds today.",
    bron: "../../assets/video/kiela-heritage-loop.mp4",
    poster: "../../assets/cases/kiela/kiela-archief-04.jpg",
    onder: "HERITAGE \xB7 KIELA"
  }), Kaarten ? /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gap: "var(--space-3)"
    }
  }, /*#__PURE__*/React.createElement(KKicker, {
    size: "sm",
    style: {
      display: "block",
      whiteSpace: "nowrap",
      color: "var(--text-muted)"
    }
  }, "From the family archive"), /*#__PURE__*/React.createElement(Kaarten, {
    items: K_ARCHIEF,
    tempo: 0.18
  })) : null))), window.CMData ? /*#__PURE__*/React.createElement(window.CMData, {
    kop: "Deliverables",
    beeld: K_MAP + "kiela-intro-web.jpg",
    waas: 0.42,
    Tag: DolleTag,
    tags: K_LEVERING,
    cijfers: K_DATA,
    review: {
      tekst: "We recorded a corporate campaign with DOLLE for our production company's visibility. The collaboration was pleasant and informal. The team was particularly enthusiastic and saw plenty of opportunities to capture beautiful footage. One morning, Guus even showed up at the production location at 6 a.m. to take stunning drone shots at sunrise. Thanks to the collaboration with DOLLE, we received a corporate video that aligns with our company mission.",
      naam: "Evelien Kiela",
      rol: "CEO, Kiela"
    }
  }) : null, /*#__PURE__*/React.createElement("section", {
    className: "dolle-dark",
    style: {
      background: "var(--dolle-navy)",
      padding: "var(--space-6) var(--page-margin)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: "var(--content-max)",
      margin: "0 auto",
      display: "grid",
      gap: "var(--space-4)",
      gridTemplateColumns: "minmax(0,1fr)"
    }
  }, /*#__PURE__*/React.createElement(KKicker, {
    style: {
      color: "var(--text-muted)"
    }
  }, "Related work"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "minmax(0,1fr)"
    }
  }, Rij ? verwant.map((c, i) => /*#__PURE__*/React.createElement(Rij, {
    key: c.id,
    c: c,
    i: i,
    go: go,
    open: open === c.id,
    onToggle: () => setOpen(open === c.id ? -1 : c.id)
  })) : null, Haarlijn ? /*#__PURE__*/React.createElement(Haarlijn, null) : null))), window.HomeConversie ? /*#__PURE__*/React.createElement(window.HomeConversie, {
    go: go,
    tone: "dark"
  }) : null);
}
Object.assign(window, {
  CaseKiela,
  CaseLoop: Loop
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/CaseKiela.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/CaseMedpets.jsx
try { (() => {
const MP_DS = window.DesignSystem_8f95a2;
const {
  Kicker: MPKicker,
  Tag: MPTag,
  Button: MPButton
} = MP_DS;
const MP = "../../assets/cases/medpets/";
const MP_VID = "../../assets/video/";
const MP_INTRO = ["Everything your pet needs, in one place", "Medpets is the largest online pet health shop in the Netherlands. Behind one webshop sits a pharmacy, a food aisle and a care department for dogs, cats, horses, rabbits, rodents, birds, fish and reptiles, with more than fifteen thousand products and a veterinary team that answers questions about any of them. Owners order a flea treatment, a prescription diet or a supplement and have it on the mat the next morning. DOLLE made the campaign work that puts that whole world on screen."];
const MP_BLOKKEN = [{
  kop: "Campaign concept and direction",
  tekst: "DOLLE developed two campaigns with Medpets, each built around a theme from the shelves. The animals carry the story: they lead the viewer through the house, the garden and the daily routine where a Medpets product actually lands. DOLLE writes the concept, casts the animals and the families around them, and directs on set."
}, {
  kop: "Campaign production",
  tekst: "DOLLE films on location with the animals present and working, which asks for a crew that can wait for the shot and a set that stays calm around them. Every campaign is built as one full film with shorter versions per theme, so a single shoot feeds the homepage, the category pages and paid social from the same visual language."
}, {
  kop: "Brand bumpers",
  tekst: "DOLLE produces the short openers and closers that frame the campaign. They carry the logo, the tone and the animals, and sit in front of any Medpets message to keep the brand recognisable wherever it runs."
}];
/* Band onder de intro: stills, set en de bumpers door elkaar. */
const MP_BAND = [{
  src: MP + "medpets-still-02-web.jpg",
  r: 1.5
}, {
  src: MP + "medpets-bts-04-web.jpg",
  r: 2 / 3
}, {
  video: MP_VID + "medpets-bumper-16x9.mp4",
  r: 16 / 9
}, {
  src: MP + "medpets-bts-03-web.jpg",
  r: 1800 / 1414
}, {
  src: MP + "medpets-bts-02-web.jpg",
  r: 1800 / 1249
}, {
  video: MP_VID + "medpets-bumper-cat-16x9.mp4",
  r: 16 / 9
}, {
  src: MP + "medpets-bts-01-web.jpg",
  r: 1.5
}];
/* Behind the scenes onder de themafilms. */
const MP_BTS = [{
  src: MP + "medpets-bts-05-web.jpg",
  ratio: "10 / 9",
  breed: 380,
  zak: 0,
  tekst: "Behind the scenes"
}, {
  src: MP + "medpets-bts-04-web.jpg",
  ratio: "2 / 3",
  breed: 240,
  zak: 16,
  tekst: "Behind the scenes"
}, {
  src: MP + "medpets-bts-03-web.jpg",
  ratio: "9 / 7",
  breed: 360,
  zak: -10,
  tekst: "On set with the animals"
}, {
  src: MP + "medpets-bts-01-web.jpg",
  ratio: "3 / 2",
  breed: 400,
  zak: 12,
  tekst: "Behind the scenes"
}, {
  src: MP + "medpets-bts-02-web.jpg",
  ratio: "3 / 2",
  breed: 380,
  zak: -14,
  tekst: "Behind the scenes"
}];
/* Voorlopige cijfers, uit de feiten van de case; vervangen zodra er resultaten zijn. */
const MP_DATA = [{
  label: "Products in the shop",
  waarde: 15,
  achter: "K+"
}, {
  label: "Campaigns",
  waarde: 2
}, {
  label: "Animal groups served",
  waarde: 8
}];
function MPKop({
  dienst,
  woord
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gap: "var(--space-6)"
    }
  }, window.CMLijn ? /*#__PURE__*/React.createElement(window.CMLijn, null) : null, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "baseline",
      gap: "var(--space-6)",
      flexWrap: "wrap"
    }
  }, /*#__PURE__*/React.createElement(MPKicker, {
    style: {
      display: "block",
      whiteSpace: "nowrap",
      color: "var(--text-muted)"
    }
  }, dienst), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-core)",
      fontWeight: "var(--weight-heading)",
      fontSize: "clamp(18px,2.2vw,30px)",
      letterSpacing: "var(--track-wildly)",
      textTransform: "uppercase",
      color: "var(--text-heading)",
      whiteSpace: "nowrap"
    }
  }, "Wildly ", /*#__PURE__*/React.createElement("span", {
    style: {
      color: "var(--text-accent)"
    }
  }, woord))));
}
function CaseMedpets({
  go
}) {
  const Film = window.CaseFilm;
  const Rij = window.CaseRij;
  const Haarlijn = window.Haarlijn;
  const Laag = window.WXLaag;
  const Kaarten = window.CaseKaarten;
  const [open, setOpen] = React.useState(-1);
  const verwant = ["Eezy", "Woonexpress", "Montel"].map(n => (window.CASES || []).find(c => c.klant === n)).filter(Boolean);
  if (!Film || !Laag) return null;
  const sectie = {
    background: "var(--dolle-navy)",
    color: "var(--text-body)",
    padding: "var(--space-6) var(--page-margin)"
  };
  const binnen = {
    maxWidth: "var(--content-max)",
    margin: "0 auto",
    display: "grid",
    gap: "var(--space-6)"
  };
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("style", null, "@media (max-width:760px){[data-mp-twee]{grid-template-columns:minmax(0,1fr) !important}}"), window.CMKop ? /*#__PURE__*/React.createElement(window.CMKop, {
    titel: "Medpets",
    tags: ["Media production", "Campaign"],
    film: MP_VID + "medpets-totaal-16x9.mp4",
    start: 0.3,
    eind: 9.6,
    uitsnede: 1.16,
    uitsnedeHoek: "rechts",
    poster: MP + "medpets-totaal-poster-web.jpg",
    go: go,
    Knop: MPButton,
    Woorden: window.Words || null,
    Tag: window.DolleTag || MPTag
  }, window.CMIntro ? /*#__PURE__*/React.createElement(window.CMIntro, {
    tekst: MP_INTRO,
    beeld: window.CMOpeningBeeld ? /*#__PURE__*/React.createElement(window.CMOpeningBeeld, {
      modus: "groei",
      ratio: "3 / 2",
      src: MP + "medpets-still-01-web.jpg"
    }) : null
  }) : null) : null, window.BVBand ? /*#__PURE__*/React.createElement("section", {
    className: "dolle-dark",
    style: {
      background: "var(--dolle-navy)",
      padding: "0 var(--page-margin) var(--space-6)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: "var(--content-max)",
      margin: "0 auto"
    }
  }, /*#__PURE__*/React.createElement(window.BVBand, {
    items: MP_BAND,
    hoog: "clamp(200px,24vw,340px)",
    sleep: true,
    schuif: true
  }))) : null, /*#__PURE__*/React.createElement("section", {
    className: "dolle-dark",
    style: sectie
  }, /*#__PURE__*/React.createElement("div", {
    style: binnen
  }, /*#__PURE__*/React.createElement(MPKop, {
    dienst: "MEDIA PRODUCTION",
    woord: "visible"
  }), /*#__PURE__*/React.createElement(Laag, {
    kop: MP_BLOKKEN[0].kop,
    tekst: MP_BLOKKEN[0].tekst
  }, /*#__PURE__*/React.createElement(Film, {
    bron: MP_VID + "medpets-totaal-16x9.mp4",
    poster: MP + "medpets-totaal-poster-web.jpg",
    onderschrift: "CAMPAIGN FILM \xB7 MEDPETS",
    watch: true
  })), /*#__PURE__*/React.createElement(Laag, {
    kop: MP_BLOKKEN[1].kop,
    tekst: MP_BLOKKEN[1].tekst
  }, /*#__PURE__*/React.createElement("div", {
    "data-mp-twee": "1",
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(2,minmax(0,1fr))",
      gap: "var(--space-3)"
    }
  }, /*#__PURE__*/React.createElement(Film, {
    bron: MP_VID + "medpets-vlooien-en-teken-16x9.mp4",
    poster: MP + "medpets-vlooien-en-teken-poster-web.jpg",
    onderschrift: "FLEAS & TICKS",
    watch: true
  }), /*#__PURE__*/React.createElement(Film, {
    bron: MP_VID + "medpets-voeding-16x9.mp4",
    poster: MP + "medpets-voeding-poster-web.jpg",
    onderschrift: "NUTRITION",
    watch: true
  })), Kaarten ? /*#__PURE__*/React.createElement(Kaarten, {
    items: MP_BTS,
    tempo: 0.5,
    schuif: true
  }) : null), /*#__PURE__*/React.createElement(Laag, {
    kop: MP_BLOKKEN[2].kop,
    tekst: MP_BLOKKEN[2].tekst
  }, /*#__PURE__*/React.createElement("div", {
    "data-mp-twee": "1",
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(2,minmax(0,1fr))",
      gap: "var(--space-3)"
    }
  }, /*#__PURE__*/React.createElement(Film, {
    bron: MP_VID + "medpets-bumper-16x9.mp4",
    poster: MP + "medpets-bumper-poster-web.jpg",
    onderschrift: "BUMPER \xB7 DOG",
    watch: true
  }), /*#__PURE__*/React.createElement(Film, {
    bron: MP_VID + "medpets-bumper-cat-16x9.mp4",
    poster: MP + "medpets-bumper-cat-poster-web.jpg",
    onderschrift: "BUMPER \xB7 CAT",
    watch: true
  }))))), window.CMData ? /*#__PURE__*/React.createElement(window.CMData, {
    kop: "Deliverables",
    beeld: MP + "medpets-bts-05-web.jpg",
    waas: 0.42,
    cijfers: MP_DATA,
    Tag: window.DolleTag || MPTag,
    tags: ["Campaign films", "Themed versions", "Brand bumpers", "Concept & direction"],
    review: {
      tekst: "Animals don't take direction, and DOLLE never pretended they would. They built the set around them and waited for the moments that make our customers recognise their own pets. One shoot gave us the full campaign, the themed versions and the bumpers we now put in front of everything we publish.",
      naam: "Name",
      rol: "Medpets"
    }
  }) : null, /*#__PURE__*/React.createElement("section", {
    className: "dolle-dark",
    style: {
      background: "var(--dolle-navy)",
      padding: "var(--space-6) var(--page-margin)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: "var(--content-max)",
      margin: "0 auto",
      display: "grid",
      gap: "var(--space-4)",
      gridTemplateColumns: "minmax(0,1fr)"
    }
  }, /*#__PURE__*/React.createElement(MPKicker, {
    style: {
      display: "block",
      whiteSpace: "nowrap",
      color: "var(--text-muted)"
    }
  }, "Related work"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "minmax(0,1fr)"
    }
  }, Rij ? verwant.map((c, i) => /*#__PURE__*/React.createElement(Rij, {
    key: c.id,
    c: c,
    i: i,
    go: go,
    open: open === c.id,
    onToggle: () => setOpen(open === c.id ? -1 : c.id)
  })) : null, Haarlijn ? /*#__PURE__*/React.createElement(Haarlijn, null) : null))), window.HomeConversie ? /*#__PURE__*/React.createElement(window.HomeConversie, {
    go: go,
    tone: "dark"
  }) : null);
}
window.CaseMedpets = CaseMedpets;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/CaseMedpets.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/CaseMontel.jsx
try { (() => {
const DS = window.DesignSystem_8f95a2;
const {
  Kicker,
  Button,
  Icon
} = DS;
const CornerRule = DS.CornerRule || (({
  children
}) => children || null);
const IMG = "../../assets/cases/web/";
const SET = "../../assets/photography/dolle-set-01.jpg";
const POSTER = "../../assets/hero-showreel-frame.png";

/* CASE DETAIL · MONTEL · variant EXTENDED. De pagina opent als een rij van de
   overzichtspagina: naam, tags, haarlijn, dan tekst links en beeld rechts. Van
   daaruit loopt hetzelfde ritme door: alternerend tekst en beeld, secties zo
   hoog als hun inhoud, scheiding door lijn of kleurwissel in plaats van lucht.
   Beeld is placeholder-materiaal; ratio's en plek liggen vast. */

/* Openingscluster: 2 tot 5 items in gemengde ratio's die de rechterkolom
   volmaken. Video-items krijgen een play-merk. */
const OPENING = [{
  src: SET,
  ratio: "3 / 2",
  span: 2
}, {
  src: IMG + "case-03.jpg",
  ratio: "4 / 5"
}, {
  src: IMG + "case-05.jpg",
  ratio: "9 / 16",
  film: true
}];
const BLOKKEN = [{
  kop: "Campaigns",
  tekst: "Nine campaigns in the last two years. DOLLE rents entire homes and rebuilds them as sets: furniture in, rooms dressed, every space turned into a campaign environment before a single frame is shot. Location scouting, set design, direction, production and edit under one roof. The result reads as a home rather than a showroom, which is exactly why it performs.",
  strook: [{
    src: IMG + "case-03.jpg",
    ratio: "3 / 2"
  }, {
    src: SET,
    ratio: "4 / 5"
  }, {
    src: IMG + "case-05.jpg",
    ratio: "9 / 16",
    film: true
  }, {
    src: IMG + "case-01.jpg",
    ratio: "3 / 2"
  }]
}, {
  kop: "TV commercials",
  tekst: "Four national commercials. DOLLE takes them from concept to broadcast-ready and cuts the same production down for every channel it has to live on, so one shoot carries both reach and feed.",
  strook: [{
    src: IMG + "case-02.jpg",
    ratio: "3 / 2",
    film: true
  }, {
    src: IMG + "case-06.jpg",
    ratio: "4 / 5"
  }, {
    src: IMG + "case-04.jpg",
    ratio: "9 / 16"
  }, {
    src: IMG + "case-03.jpg",
    ratio: "3 / 2"
  }]
}, {
  kop: "Studio & photography",
  tekst: "Where the partnership began, and still running. Collection imagery produced in studio: sets built, lit and shot for stills and motion in a single run, then delivered per format and per channel.",
  strook: [{
    src: IMG + "case-01.jpg",
    ratio: "4 / 5"
  }, {
    src: IMG + "case-05.jpg",
    ratio: "3 / 2"
  }, {
    src: SET,
    ratio: "9 / 16"
  }, {
    src: IMG + "case-02.jpg",
    ratio: "3 / 2"
  }]
}, {
  kop: "E-learnings",
  tekst: "Product knowledge and sales technique, produced as a structured series staff can work through on demand. Filmed once, consistent across every store, and expanded as the range changes.",
  strook: [{
    src: IMG + "case-04.jpg",
    ratio: "3 / 2",
    film: true
  }, {
    src: IMG + "case-03.jpg",
    ratio: "4 / 5"
  }, {
    src: IMG + "case-06.jpg",
    ratio: "9 / 16"
  }, {
    src: IMG + "case-01.jpg",
    ratio: "3 / 2"
  }]
}, {
  kop: "Brand & onboarding",
  tekst: "The story of the company, produced for the people inside it. Where Montel comes from, what it stands for, how that shows on the floor. Handed to every new colleague in the same form, in every store.",
  strook: [{
    src: IMG + "case-06.jpg",
    ratio: "3 / 2"
  }, {
    src: IMG + "case-02.jpg",
    ratio: "4 / 5"
  }, {
    src: IMG + "case-05.jpg",
    ratio: "9 / 16",
    film: true
  }, {
    src: SET,
    ratio: "3 / 2"
  }]
}, {
  kop: "Culture & events",
  tekst: "Kick-offs, milestones and the moments the company marks together, given a visual form worth keeping, so they land as strongly inside the organisation as a campaign does outside it.",
  strook: [{
    src: IMG + "case-05.jpg",
    ratio: "3 / 2"
  }, {
    src: IMG + "case-04.jpg",
    ratio: "4 / 5"
  }, {
    src: IMG + "case-01.jpg",
    ratio: "9 / 16"
  }, {
    src: IMG + "case-06.jpg",
    ratio: "3 / 2"
  }]
}];
const VERWANT = [{
  klant: "Woonexpress",
  kaders: ["Media production", "Growth"]
}, {
  klant: "Eezy",
  kaders: ["Media production", "Launches"]
}, {
  klant: "MSO Group",
  kaders: ["Media production"]
}, {
  klant: "Landgoed Bergvliet",
  kaders: ["Media production", "Growth"]
}];
const NAAD = "4px"; /* smalle vaste naad tussen beelden */
const KOLOMGAT = "var(--space-5)"; /* tekst en beeld staan tegen elkaar aan */
const LIJN = "1px solid var(--white-24, rgba(255,255,255,0.24))";

/* Playknop in het merkteken: de twee haken met de driehoek er tussenin. */
function PlayMerk({
  maat = 80,
  kleur = "var(--dolle-white)"
}) {
  return /*#__PURE__*/React.createElement("svg", {
    "aria-hidden": "true",
    viewBox: "0 0 100 78",
    width: maat,
    height: Math.round(maat * 0.78),
    fill: "none",
    style: {
      display: "block",
      color: kleur
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M10 6 V46 H42",
    stroke: "currentColor",
    strokeWidth: "11"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M90 72 V32 H58",
    stroke: "currentColor",
    strokeWidth: "11"
  }));
}
function Play({
  klein
}) {
  return /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true",
    style: {
      position: "absolute",
      left: "var(--space-3)",
      bottom: "var(--space-3)",
      display: "grid",
      placeItems: "center",
      color: "var(--dolle-white)"
    }
  }, /*#__PURE__*/React.createElement(PlayMerk, {
    maat: klein ? 28 : 36
  }));
}

/* Beeldstrook: horizontaal scrollbaar, slepen met de aanwijzer. De hoogte van
   de strook bepaalt de blokhoogte; de ratio bepaalt de breedte per item. */
function Strook({
  items,
  hoog = "clamp(180px,22vw,272px)"
}) {
  const spoor = React.useRef(null);
  React.useEffect(() => {
    const el = spoor.current;
    if (!el) return;
    let neer = false,
      x0 = 0,
      l0 = 0;
    const down = e => {
      neer = true;
      x0 = e.clientX;
      l0 = el.scrollLeft;
      if (el.setPointerCapture) el.setPointerCapture(e.pointerId);
    };
    const move = e => {
      if (neer) el.scrollLeft = l0 - (e.clientX - x0);
    };
    const up = () => {
      neer = false;
    };
    el.addEventListener("pointerdown", down);
    el.addEventListener("pointermove", move);
    el.addEventListener("pointerup", up);
    el.addEventListener("pointerleave", up);
    return () => {
      el.removeEventListener("pointerdown", down);
      el.removeEventListener("pointermove", move);
      el.removeEventListener("pointerup", up);
      el.removeEventListener("pointerleave", up);
    };
  }, []);
  return /*#__PURE__*/React.createElement("div", {
    ref: spoor,
    style: {
      display: "flex",
      gap: NAAD,
      overflowX: "auto",
      scrollbarWidth: "none",
      cursor: "grab",
      touchAction: "pan-y"
    }
  }, items.map((t, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      position: "relative",
      flex: "0 0 auto",
      height: hoog,
      aspectRatio: t.ratio,
      overflow: "hidden",
      background: t.vlak || "var(--surface-sunk)",
      transition: "height 1100ms var(--ease-dolle)"
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: t.src,
    alt: "",
    loading: "lazy",
    draggable: "false",
    style: {
      position: "absolute",
      inset: t.pas === "contain" ? "12%" : 0,
      width: t.pas === "contain" ? "76%" : "100%",
      height: t.pas === "contain" ? "76%" : "100%",
      objectFit: t.pas || "cover",
      objectPosition: t.plek || "50% 50%",
      display: "block"
    }
  }), t.film ? /*#__PURE__*/React.createElement(Play, null) : null)));
}

/* Eigen bediening tijdens afspelen: één dun voortgangsbalkje op de lijn van de
   onderste haak (stopt ervoor) en links één geluidsknop. Klik op de balk spoelt. */
function FilmBalk({
  video
}) {
  const vul = React.useRef(null);
  const [stilte, setStilte] = React.useState(false);
  React.useEffect(() => {
    let id;
    const tik = () => {
      const v = video.current;
      if (v && vul.current && v.duration && !v.paused) {
        const f = v.currentTime / v.duration;
        vul.current.style.transform = "scaleX(" + f + ")";
        if (knop.current) knop.current.style.left = f * 100 + "%";
      }
      id = requestAnimationFrame(tik);
    };
    id = requestAnimationFrame(tik);
    const v = video.current;
    const zet = () => setStilte(!!(v && v.muted));
    if (v) {
      v.addEventListener("volumechange", zet);
      zet();
    }
    return () => {
      cancelAnimationFrame(id);
      if (v) v.removeEventListener("volumechange", zet);
    };
  }, []);
  const naar = (el, x) => {
    const v = video.current;
    if (!v || !v.duration) return;
    const b = el.getBoundingClientRect();
    v.currentTime = Math.max(0, Math.min(1, (x - b.left) / b.width)) * v.duration;
  };
  /* Slepen spoelt: tijdens het slepen staat de film stil en volgt het beeld de knop; bij loslaten speelt hij verder. */
  const knop = React.useRef(null);
  /* Is de file niet doorzoekbaar (server zonder range-requests), laad hem dan als blob: die is altijd te spoelen. */
  React.useEffect(() => {
    const v = video.current;
    if (!v) return;
    let klaar = false;
    const check = () => {
      if (klaar || !v.currentSrc || v.currentSrc.startsWith("blob:")) return;
      const ok = v.seekable.length && v.seekable.end(0) > 1;
      if (ok) {
        klaar = true;
        return;
      }
      klaar = true;
      fetch(v.currentSrc).then(r => r.blob()).then(b => {
        const t = v.currentTime,
          speelde = !v.paused;
        v.src = URL.createObjectURL(b);
        v.addEventListener("loadedmetadata", () => {
          v.currentTime = t;
          if (speelde) v.play().catch(() => {});
        }, {
          once: true
        });
      }).catch(() => {});
    };
    v.addEventListener("playing", check);
    v.addEventListener("progress", check);
    check();
    return () => {
      v.removeEventListener("playing", check);
      v.removeEventListener("progress", check);
    };
  }, []);
  const zetBalk = f => {
    if (vul.current) vul.current.style.transform = "scaleX(" + f + ")";
    if (knop.current) knop.current.style.left = f * 100 + "%";
  };
  const sleepNaar = (el, x) => {
    const v = video.current;
    if (!v || !v.duration) return;
    const b = el.getBoundingClientRect();
    const f = Math.max(0, Math.min(1, (x - b.left) / b.width));
    zetBalk(f);
    const t = f * v.duration;
    if (v.fastSeek && el.dataset.sleep === "1") v.fastSeek(t);else v.currentTime = t;
  };
  const neer = e => {
    e.stopPropagation();
    e.preventDefault();
    const el = e.currentTarget;
    if (el.setPointerCapture) el.setPointerCapture(e.pointerId);
    const v = video.current;
    el.dataset.speelde = v && !v.paused ? "1" : "";
    if (v) v.pause();
    el.dataset.sleep = "1";
    sleepNaar(el, e.clientX);
  };
  const sleep = e => {
    if (e.currentTarget.dataset.sleep === "1") sleepNaar(e.currentTarget, e.clientX);
  };
  const los = e => {
    const el = e.currentTarget;
    if (el.dataset.sleep !== "1") return;
    el.dataset.sleep = "";
    const v = video.current;
    if (v) {
      const b = el.getBoundingClientRect();
      v.currentTime = Math.max(0, Math.min(1, (e.clientX - b.left) / b.width)) * (v.duration || 0);
      if (el.dataset.speelde === "1") v.play().catch(() => {});
    }
  };
  const geluid = e => {
    e.stopPropagation();
    const v = video.current;
    if (v) v.muted = !v.muted;
  };
  return /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      left: "var(--space-4)",
      right: "calc(var(--space-4) + 44px)",
      bottom: "calc(var(--space-4) - 9px)",
      height: 24,
      display: "flex",
      alignItems: "center",
      gap: 14,
      color: "var(--dolle-white)",
      filter: "drop-shadow(0 1px 4px rgba(8,18,40,0.45))"
    }
  }, /*#__PURE__*/React.createElement("button", {
    type: "button",
    onClick: geluid,
    "aria-label": stilte ? "Sound on" : "Sound off",
    style: {
      appearance: "none",
      background: "none",
      border: 0,
      padding: 0,
      width: 24,
      height: 24,
      display: "grid",
      placeItems: "center",
      color: "inherit",
      cursor: "pointer",
      flex: "0 0 auto"
    }
  }, /*#__PURE__*/React.createElement("svg", {
    viewBox: "0 0 24 24",
    width: "18",
    height: "18",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2",
    "aria-hidden": "true"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M4 9h4l5-4v14l-5-4H4z",
    fill: "currentColor",
    stroke: "none"
  }), stilte ? /*#__PURE__*/React.createElement("path", {
    d: "M16 9l5 6M21 9l-5 6"
  }) : /*#__PURE__*/React.createElement("path", {
    d: "M16.5 8.5a5 5 0 0 1 0 7M19 6a8.5 8.5 0 0 1 0 12"
  }))), /*#__PURE__*/React.createElement("span", {
    onPointerDown: neer,
    onPointerMove: sleep,
    onPointerUp: los,
    onPointerCancel: los,
    onClick: e => e.stopPropagation(),
    style: {
      position: "relative",
      flex: "1 1 auto",
      height: 24,
      cursor: "pointer",
      display: "flex",
      alignItems: "center",
      touchAction: "none"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      left: 0,
      right: 0,
      height: 2,
      background: "rgba(255,255,255,0.28)"
    }
  }), /*#__PURE__*/React.createElement("span", {
    ref: vul,
    style: {
      position: "absolute",
      left: 0,
      right: 0,
      height: 2,
      background: "var(--dolle-white)",
      transformOrigin: "0 50%",
      transform: "scaleX(0)"
    }
  }), /*#__PURE__*/React.createElement("span", {
    ref: knop,
    style: {
      position: "absolute",
      left: 0,
      top: "50%",
      width: 10,
      height: 10,
      marginLeft: -5,
      marginTop: -5,
      borderRadius: "50%",
      background: "var(--dolle-white)"
    }
  })));
}

/* Hoofdvideo: poster-frame met play-knop, speelt pas op klik. */
function Film({
  poster,
  bron,
  youtube,
  onderschrift,
  bovenschrift,
  kader,
  watch = true,
  watchSchaal = 3.2,
  stil = false,
  watchHover = true,
  parallax = false,
  vul = false
}) {
  const [speel, setSpeel] = React.useState(false);
  const [hover, setHover] = React.useState(false);
  const [draai, setDraai] = React.useState(0);
  const film = React.useRef(null);
  /* Rust: de twee haken staan als in het merkteken naar elkaar toe, midden in
     het kader. Hover: ze draaien één keer helemaal rond en staan weer stil.
     Klik: ze reizen naar linksboven en rechtsonder en blijven daar tot de film
     is afgelopen; daarna keren ze terug naar het midden. */
  const HAAK_A = "M6 6 V46 H40",
    HAAK_B = "M46 46 V6 H12";
  /* Eindstand: allebei als hoekmerk, zodat ze samen het kader vormen. */
  const HOEK_A = "M6 40 V6 H40",
    HOEK_B = "M46 12 V46 H12";
  const spin = () => {
    setHover(true);
    if (!speel) setDraai(function (n) {
      return n + 1;
    });
  };
  /* WATCH komt naast de haken tevoorschijn zodra het kader in beeld scrolt. */
  const vak = React.useRef(null);
  const [zicht, setZicht] = React.useState(false);
  React.useEffect(() => {
    const el = vak.current;
    if (!el || typeof IntersectionObserver === "undefined") {
      setZicht(true);
      return;
    }
    const kijk = new IntersectionObserver(rijen => {
      rijen.forEach(r => {
        if (r.isIntersecting) {
          setZicht(true);
          kijk.disconnect();
        }
      });
    }, {
      threshold: 0.35
    });
    kijk.observe(el);
    return () => kijk.disconnect();
  }, []);
  /* parallax: de poster staat groter dan het kader en schuift gedempt mee met de scroll. */
  const laag = React.useRef(null);
  React.useEffect(() => {
    if (!parallax) return;
    if (window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    let raf = 0,
      nu = null;
    const tik = () => {
      raf = 0;
      const el = vak.current,
        l = laag.current;
      if (!el || !l) return;
      const b = el.getBoundingClientRect(),
        vh = window.innerHeight || 800;
      const p = Math.max(-1, Math.min(1, (b.top + b.height / 2 - vh / 2) / (vh / 2 + b.height / 2)));
      const doel = p * 9;
      nu = nu == null ? doel : nu + (doel - nu) * 0.14;
      l.style.transform = "translate3d(0," + nu.toFixed(3) + "%,0)";
      if (Math.abs(doel - nu) > 0.01) raf = requestAnimationFrame(tik);
    };
    const op = () => {
      if (!raf) raf = requestAnimationFrame(tik);
    };
    tik();
    window.addEventListener("scroll", op, {
      passive: true,
      capture: true
    });
    window.addEventListener("resize", op);
    return () => {
      window.removeEventListener("scroll", op, true);
      window.removeEventListener("resize", op);
      if (raf) cancelAnimationFrame(raf);
    };
  }, [parallax, speel]);
  /* Blijft de muis hangen, dan draaien de haken elke 3,5 seconde opnieuw. */
  React.useEffect(() => {
    if (!hover || speel) return;
    const t = setInterval(() => setDraai(function (n) {
      return n + 1;
    }), 3500);
    return () => clearInterval(t);
  }, [hover, speel]);
  const hoekA = speel ? {
    left: "var(--space-4)",
    top: "var(--space-4)"
  } : {
    left: "calc(50% - 27px)",
    top: "calc(50% - 22px)"
  };
  const hoekB = speel ? {
    right: "var(--space-4)",
    bottom: "var(--space-4)"
  } : {
    right: "calc(50% - 27px)",
    bottom: "calc(50% - 22px)"
  };
  const haak = (d, box) => /*#__PURE__*/React.createElement("svg", {
    "aria-hidden": "true",
    viewBox: box,
    width: "30",
    height: "30",
    fill: "none",
    style: {
      display: "block"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: d,
    stroke: "currentColor",
    strokeWidth: "12"
  }));
  const reis = "left 820ms var(--ease-dolle), top 820ms var(--ease-dolle), right 820ms var(--ease-dolle), bottom 820ms var(--ease-dolle)";
  const merk = {
    position: "absolute",
    color: "var(--dolle-white)",
    pointerEvents: "none",
    transition: reis
  };
  const rol = draai ? {
    animation: "dolle-haak-rond 900ms var(--ease-dolle)"
  } : null;
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gap: "var(--space-3)"
    }
  }, /*#__PURE__*/React.createElement("style", null, "@keyframes dolle-haak-rond{from{transform:rotate(0deg)}to{transform:rotate(360deg)}}"), bovenschrift ? /*#__PURE__*/React.createElement(Kicker, {
    size: "sm",
    style: {
      color: "var(--text-muted)"
    }
  }, bovenschrift) : null, /*#__PURE__*/React.createElement("div", {
    ref: vak,
    onMouseEnter: spin,
    onMouseLeave: () => setHover(false),
    style: {
      position: "relative",
      width: "100%",
      height: vul ? "100%" : undefined,
      aspectRatio: vul ? "auto" : kader || "16 / 9",
      overflow: "hidden",
      background: "var(--surface-sunk)"
    }
  }, speel && youtube ? /*#__PURE__*/React.createElement("iframe", {
    src: "https://www.youtube.com/embed/" + youtube + "?autoplay=1&rel=0&modestbranding=1&playsinline=1&iv_load_policy=3&color=white",
    title: onderschrift || "Film",
    referrerPolicy: "strict-origin-when-cross-origin",
    allow: "accelerometer; autoplay; clipboard-write; encrypted-media; picture-in-picture",
    allowFullScreen: true,
    frameBorder: "0",
    style: {
      position: "absolute",
      inset: 0,
      width: "100%",
      height: "100%",
      border: 0
    }
  }) : speel && bron ? /*#__PURE__*/React.createElement("video", {
    ref: film,
    "data-film": "1",
    src: bron,
    autoPlay: true,
    muted: stil,
    playsInline: true,
    preload: "none",
    onEnded: () => setSpeel(false),
    onClick: e => {
      const el = e.currentTarget;
      if (el.paused) el.play();else el.pause();
    },
    style: {
      position: "absolute",
      inset: 0,
      width: "100%",
      height: "100%",
      objectFit: "cover",
      cursor: "pointer"
    }
  }) : /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("span", {
    ref: laag,
    style: {
      position: "absolute",
      left: 0,
      right: 0,
      top: parallax ? "-12%" : 0,
      bottom: parallax ? "-12%" : 0,
      display: "block",
      willChange: parallax ? "transform" : undefined
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: poster || (youtube ? "https://i.ytimg.com/vi/" + youtube + "/maxresdefault.jpg" : undefined),
    alt: "",
    style: {
      position: "absolute",
      inset: 0,
      width: "100%",
      height: "100%",
      objectFit: "cover",
      display: "block",
      transform: hover ? "scale(1.045)" : "scale(1)",
      filter: hover ? "brightness(0.92)" : "none",
      transition: "transform 1200ms var(--ease-dolle), filter var(--dur-frame) var(--ease-dolle)"
    }
  })), bron || youtube ? /*#__PURE__*/React.createElement("button", {
    type: "button",
    onClick: () => setSpeel(true),
    "aria-label": "Play film",
    style: {
      position: "absolute",
      inset: 0,
      appearance: "none",
      background: "none",
      border: 0,
      cursor: "pointer"
    }
  }) : null), /*#__PURE__*/React.createElement("span", {
    key: "a" + draai,
    style: {
      ...merk,
      ...hoekA,
      ...(watch ? null : rol),
      opacity: watch && !speel ? 0 : 1,
      transition: merk.transition + ", opacity 320ms linear"
    }
  }, haak(speel ? HOEK_A : HAAK_A, "0 0 52 52")), /*#__PURE__*/React.createElement("span", {
    key: "b" + draai,
    style: {
      ...merk,
      ...hoekB,
      ...(watch ? null : rol),
      opacity: watch && !speel ? 0 : 1,
      transition: merk.transition + ", opacity 320ms linear"
    }
  }, haak(speel ? HOEK_B : HAAK_B, "0 0 52 52")), speel && bron && !youtube ? /*#__PURE__*/React.createElement(FilmBalk, {
    video: film
  }) : null, watch && !(speel && (bron || youtube)) ? /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      inset: 0,
      display: "grid",
      placeItems: "center",
      pointerEvents: "none",
      background: hover ? "rgba(8,18,40,0.46)" : watchHover ? "rgba(8,18,40,0)" : "rgba(8,18,40,0.3)",
      transition: "background var(--dur-frame) var(--ease-dolle)"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      pointerEvents: "auto",
      transform: ((watchHover ? hover : zicht) ? "translateY(0)" : "translateY(20px)") + " scale(" + watchSchaal * 0.7 + ")",
      opacity: (watchHover ? hover : zicht) ? 1 : 0,
      transition: "transform 820ms var(--ease-dolle) 160ms, opacity 640ms linear 160ms"
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "secondary",
    onClick: () => {
      if (bron || youtube) setSpeel(true);
    },
    style: {
      color: "var(--dolle-white)",
      borderColor: "transparent",
      paddingLeft: "9px",
      paddingRight: "7px",
      textShadow: "0 1px 10px rgba(8,18,40,0.55)",
      filter: "drop-shadow(0 1px 6px rgba(8,18,40,0.45))"
    }
  }, "Watch"))) : null), onderschrift ? /*#__PURE__*/React.createElement(Kicker, {
    size: "sm",
    style: {
      color: "var(--text-muted)"
    }
  }, onderschrift) : null);
}

/* Rij in de stijl van de overzichtspagina: naam, dienst-tags, VIEW, strook. */
function VerwantRij({
  c,
  go
}) {
  const [hover, setHover] = React.useState(false);
  const beelden = [{
    src: IMG + "case-0" + (c.i % 6 + 1) + ".jpg",
    ratio: "3 / 4"
  }, {
    src: IMG + "case-0" + ((c.i + 2) % 6 + 1) + ".jpg",
    ratio: "3 / 2"
  }, {
    src: IMG + "case-0" + ((c.i + 4) % 6 + 1) + ".jpg",
    ratio: "4 / 5"
  }, {
    src: IMG + "case-0" + ((c.i + 1) % 6 + 1) + ".jpg",
    ratio: "9 / 16"
  }];
  return /*#__PURE__*/React.createElement("div", {
    onClick: () => go("cases"),
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      display: "grid",
      gridTemplateColumns: "minmax(0,32%) auto minmax(0,1fr)",
      gap: KOLOMGAT,
      alignItems: "center",
      padding: "var(--space-3) 0",
      borderTop: LIJN,
      cursor: "pointer",
      color: "var(--dolle-white)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gap: "var(--space-2)",
      justifyItems: "start",
      minWidth: 0
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-core)",
      fontWeight: "var(--weight-heading)",
      fontSize: "clamp(17px,1.7vw,24px)",
      letterSpacing: "var(--track-heading)"
    }
  }, c.klant), /*#__PURE__*/React.createElement("span", {
    style: {
      display: "flex",
      gap: "var(--space-2)",
      flexWrap: "wrap"
    }
  }, c.kaders.map(k => /*#__PURE__*/React.createElement(DolleTag, {
    key: k
  }, k)))), /*#__PURE__*/React.createElement(Button, {
    size: "sm",
    variant: "secondary",
    onClick: ev => {
      ev.stopPropagation();
      go("cases");
    },
    style: {
      color: "var(--dolle-white)",
      borderColor: hover ? "var(--white-24, rgba(255,255,255,0.24))" : "transparent"
    }
  }, "View"), /*#__PURE__*/React.createElement(Strook, {
    items: beelden,
    hoog: "clamp(88px,10vw,118px)"
  }));
}

/* Cijferbalk: de getallen lopen op zodra de balk in beeld komt. Alleen wat we
   echt weten uit het project; een veld zonder cijfer laten we weg. */
const CIJFERS = [{
  waarde: 9,
  label: "Campaigns produced",
  accent: true
}, {
  waarde: 4,
  label: "National commercials"
}, {
  waarde: 6,
  label: "Years as production partner"
}];
function Teller({
  naar,
  dur = 1400
}) {
  const el = React.useRef(null);
  const [n, setN] = React.useState(0);
  React.useEffect(() => {
    const doel = el.current;
    if (!doel) return;
    if (window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setN(naar);
      return;
    }
    if (typeof IntersectionObserver === "undefined") {
      setN(naar);
      return;
    }
    let raf = 0;
    const io = new IntersectionObserver(rijen => {
      if (!rijen.some(r => r.isIntersecting)) return;
      io.disconnect();
      const t0 = performance.now();
      const stap = t => {
        const p = Math.min(1, (t - t0) / dur);
        /* Uitlopend, zodat het laatste getal rustig landt. */
        setN(Math.round(naar * (1 - Math.pow(1 - p, 3))));
        if (p < 1) raf = requestAnimationFrame(stap);
      };
      raf = requestAnimationFrame(stap);
    }, {
      rootMargin: "0px 0px -20% 0px"
    });
    io.observe(doel);
    return () => {
      io.disconnect();
      if (raf) cancelAnimationFrame(raf);
    };
  }, [naar, dur]);
  return /*#__PURE__*/React.createElement("span", {
    ref: el,
    style: {
      fontVariantNumeric: "tabular-nums"
    }
  }, n);
}
function CijferBalk() {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(auto-fit,minmax(200px,1fr))",
      gap: KOLOMGAT,
      borderTop: LIJN,
      borderBottom: LIJN,
      padding: "var(--space-5) 0"
    }
  }, CIJFERS.map(c => /*#__PURE__*/React.createElement("div", {
    key: c.label,
    style: {
      display: "grid",
      gap: "var(--space-2)",
      justifyItems: "start"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-core)",
      fontWeight: "var(--weight-heading)",
      fontSize: "clamp(34px,5vw,64px)",
      lineHeight: 1,
      letterSpacing: "var(--track-heading)",
      color: c.accent ? "var(--text-accent)" : "var(--text-heading)"
    }
  }, /*#__PURE__*/React.createElement(Teller, {
    naar: c.waarde
  })), /*#__PURE__*/React.createElement(Kicker, {
    size: "sm",
    style: {
      color: "var(--text-muted)"
    }
  }, c.label))));
}
function CaseMontel({
  go
}) {
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("section", {
    className: "dolle-dark",
    style: {
      background: "var(--dolle-navy)",
      padding: "clamp(72px,12vh,140px) var(--page-margin) var(--space-6)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: "var(--content-max)",
      margin: "0 auto"
    }
  }, /*#__PURE__*/React.createElement(Button, {
    size: "sm",
    variant: "secondary",
    onClick: () => go("cases"),
    style: {
      color: "var(--dolle-white)",
      borderColor: "transparent",
      marginBottom: "var(--space-5)"
    }
  }, "All cases"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gap: "var(--space-2)",
      justifyItems: "start",
      paddingBottom: "var(--space-4)"
    }
  }, /*#__PURE__*/React.createElement(Words, {
    as: "h1",
    text: "Montel",
    style: {
      margin: 0,
      fontSize: "clamp(26px,3.4vw,46px)",
      lineHeight: 1.05,
      letterSpacing: "var(--track-heading)"
    }
  }), /*#__PURE__*/React.createElement(DolleTag, null, "Media production"))), /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: "var(--content-max)",
      margin: "0 auto",
      height: 1,
      background: "var(--white-24, rgba(255,255,255,0.24))"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: "var(--content-max)",
      margin: "0 auto",
      display: "grid",
      gridTemplateColumns: "repeat(auto-fit,minmax(300px,1fr))",
      gap: KOLOMGAT,
      alignItems: "stretch",
      paddingTop: "var(--space-5)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gap: "var(--space-4)",
      alignContent: "center",
      maxWidth: "45ch"
    }
  }, /*#__PURE__*/React.createElement("p", {
    className: "dolle-lead",
    style: {
      margin: 0
    }
  }, "Montel is a furniture retailer with stores across the Netherlands and Belgium, built on a house style that has to hold up from showroom floor to phone screen."), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontSize: "var(--size-body)",
      lineHeight: "var(--lh-body)",
      color: "var(--text-body)"
    }
  }, "DOLLE has been its production partner since 2020 and produces everything the brand puts on screen. National TV commercials, social campaigns shot in fully built sets, collection photography, e-learnings for staff and the films that carry the company culture, from concept to delivery in one visual language.")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "1fr 1fr",
      gridAutoRows: "1fr",
      gap: NAAD,
      marginRight: "calc(var(--page-margin) * -1)",
      minHeight: "clamp(360px,44vw,620px)"
    }
  }, OPENING.map((t, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      position: "relative",
      overflow: "hidden",
      background: "var(--surface-sunk)",
      gridColumn: t.span === 2 ? "span 2" : "auto"
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: t.src,
    alt: "",
    loading: "lazy",
    style: {
      position: "absolute",
      inset: 0,
      width: "100%",
      height: "100%",
      objectFit: "cover",
      display: "block"
    }
  }), t.film ? /*#__PURE__*/React.createElement(Play, {
    klein: true
  }) : null))))), /*#__PURE__*/React.createElement("section", {
    className: "dolle-dark",
    style: {
      background: "var(--dolle-navy)",
      padding: "var(--space-5) var(--page-margin)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: "var(--content-max)",
      margin: "0 auto"
    }
  }, /*#__PURE__*/React.createElement(CijferBalk, null))), /*#__PURE__*/React.createElement("section", {
    className: "dolle-dark",
    style: {
      background: "var(--dolle-navy)",
      color: "var(--text-body)",
      padding: "var(--space-6) var(--page-margin)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: "var(--content-max)",
      margin: "0 auto",
      display: "grid",
      gap: "var(--space-6)"
    }
  }, /*#__PURE__*/React.createElement(Film, {
    poster: POSTER,
    onderschrift: "National commercial \xB7 Broadcast"
  }), BLOKKEN.map((b, i) => {
    const beeldEerst = i % 2 === 0;
    const beeld = /*#__PURE__*/React.createElement(CornerRule, {
      corners: "tl-br",
      size: 20,
      inset: 10,
      tone: "strong",
      style: {
        alignSelf: "stretch",
        display: "grid",
        alignContent: "center"
      }
    }, /*#__PURE__*/React.createElement(Strook, {
      items: b.strook
    }));
    const tekst = /*#__PURE__*/React.createElement("div", {
      style: {
        display: "grid",
        gap: "var(--space-3)",
        alignContent: "center",
        maxWidth: "45ch"
      }
    }, /*#__PURE__*/React.createElement("h2", {
      style: {
        margin: 0,
        fontFamily: "var(--font-core)",
        fontWeight: "var(--weight-heading)",
        fontSize: "clamp(19px,2vw,27px)",
        letterSpacing: "var(--track-heading)",
        color: "var(--text-heading)"
      }
    }, b.kop), /*#__PURE__*/React.createElement("p", {
      style: {
        margin: 0,
        fontSize: "var(--size-body)",
        lineHeight: "var(--lh-body)"
      }
    }, b.tekst));
    return /*#__PURE__*/React.createElement("div", {
      key: b.kop,
      style: {
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit,minmax(300px,1fr))",
        gap: KOLOMGAT,
        alignItems: "stretch",
        borderTop: "1px solid var(--border-hairline)",
        paddingTop: "var(--space-6)"
      }
    }, beeldEerst ? beeld : tekst, beeldEerst ? tekst : beeld);
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: "center",
      borderTop: "1px solid var(--border-hairline)",
      paddingTop: "var(--space-5)"
    }
  }, /*#__PURE__*/React.createElement(Kicker, {
    size: "sm",
    style: {
      color: "var(--text-heading)",
      lineHeight: 1.9
    }
  }, "Location \xB7 Set design \xB7 Concept \xB7 Direction \xB7 Production \xB7 Edit \xB7 Photography")))), /*#__PURE__*/React.createElement("section", {
    className: "dolle-dark",
    style: {
      background: "var(--dolle-navy)",
      color: "var(--text-body)",
      padding: "var(--space-7) var(--page-margin)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: "var(--content-max)",
      margin: "0 auto",
      display: "grid",
      justifyItems: "start"
    }
  }, /*#__PURE__*/React.createElement(CornerRule, {
    corners: "tl-br",
    size: 24,
    inset: 14,
    tone: "strong",
    style: {
      width: "fit-content",
      maxWidth: "min(100%, 52ch)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gap: "var(--space-4)",
      maxWidth: "45ch",
      padding: "var(--space-5)"
    }
  }, /*#__PURE__*/React.createElement("blockquote", {
    style: {
      margin: 0,
      fontFamily: "var(--font-core)",
      fontWeight: "var(--weight-heading)",
      fontSize: "clamp(19px,2.1vw,29px)",
      lineHeight: 1.3,
      letterSpacing: "var(--track-heading)",
      color: "var(--text-heading)"
    }
  }, "\"Working with team DOLLE is a real pleasure. We have done plenty of great shoots together by now. The contact is always easy and relaxed, and the end result is beautiful every time.\""), /*#__PURE__*/React.createElement(Kicker, {
    size: "sm"
  }, "Manon Smits \xB7 Head of marketing \xB7 Montel"))))), /*#__PURE__*/React.createElement("section", {
    className: "dolle-dark",
    style: {
      background: "var(--dolle-navy)",
      padding: "var(--space-6) var(--page-margin)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: "var(--content-max)",
      margin: "0 auto",
      display: "grid",
      gap: "var(--space-4)"
    }
  }, /*#__PURE__*/React.createElement(Kicker, {
    style: {
      color: "var(--text-muted)"
    }
  }, "Related work"), /*#__PURE__*/React.createElement("div", null, VERWANT.map((c, i) => /*#__PURE__*/React.createElement(VerwantRij, {
    key: c.klant,
    c: {
      ...c,
      i
    },
    go: go
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      height: 1,
      background: "var(--white-24, rgba(255,255,255,0.24))"
    }
  })))), window.HomeConversie ? /*#__PURE__*/React.createElement(window.HomeConversie, {
    go: go,
    tone: "dark"
  }) : null);
}
Object.assign(window, {
  CaseMontel,
  CaseStrook: Strook,
  CaseFilm: Film,
  CasePlay: Play,
  CasePlayMerk: PlayMerk,
  CaseVerwantRij: VerwantRij,
  CASE_NAAD: NAAD,
  CASE_KOLOMGAT: KOLOMGAT,
  CASE_LIJN: LIJN
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/CaseMontel.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/CaseMontelPagina.jsx
try { (() => {
const MT_DS = window.DesignSystem_8f95a2;
const {
  Kicker: MTKicker,
  Button: MTButton
} = MT_DS;
const MTTag = window.DolleTag || (({
  children
}) => React.createElement("span", null, children));
const MT = "../../assets/cases/montel/";
const MT_BTS = MT + "bts/";
const MT_VID = "../../assets/video/";
/* Eigen keuze uit "Montel Beeldkeuze.html" (lokaal bewaard); zonder keuze de standaard. */
/* Vastgezette keuze (Guus, okt 2026). Een lokale keuze uit het keuzevel gaat voor, per plek. */
const MT_VAST = {
  "band": [{
    "src": "../../assets/cases/montel/ijmuiden-2025/montel-ijmuiden-2025-18-lt.jpg",
    "ratio": "4 / 5"
  }, {
    "src": "../../assets/video/social/montel-eindhoven-2025-vader-zoon-16x9.mp4",
    "ratio": "1 / 1"
  }, {
    "src": "../../assets/cases/montel/bts/montel-bts-foto-07-web.jpg",
    "ratio": "9 / 16"
  }, {
    "src": "../../assets/cases/montel/ijmuiden-2025/montel-ijmuiden-2025-09-lt.jpg",
    "ratio": "3 / 4"
  }, {
    "src": "../../assets/video/social/montel-ijmuiden-2024-figurant-vader-zoon-16x9.mp4",
    "ratio": "3 / 2"
  }, {
    "src": "../../assets/cases/montel/ijmuiden-2025/montel-ijmuiden-2025-16.jpg",
    "ratio": "9 / 16"
  }, {
    "src": "../../assets/cases/montel/ijmuiden-2025/montel-ijmuiden-2025-22-lt.jpg",
    "ratio": "3 / 4"
  }, {
    "src": "../../assets/video/montel-artfilm-16x9.mp4",
    "ratio": "3 / 2"
  }],
  "hero": "../../assets/cases/montel/ijmuiden-2025/montel-ijmuiden-2025-06-lt.jpg"
};
const MT_KEUZE = (() => {
  let k = null;
  try {
    k = JSON.parse(localStorage.getItem("dolle-montel-keuze") || "null");
  } catch (e) {}
  k = k || {};
  return {
    hero: k.hero || MT_VAST.hero,
    band: k.band && k.band.length ? k.band : MT_VAST.band,
    in: k.in || {},
    uit: k.uit || {}
  };
})();
const mtRn = r => {
  const [a, b] = String(r || "16 / 9").split("/").map(Number);
  return a / b;
};
const mtKItem = k => {
  if (/\.mp4$/.test(k.src)) {
    const s = /social\/montel-(.+?)-16x9\.mp4$/.exec(k.src);
    return {
      video: k.src,
      terug: s ? MT + "social/montel-" + s[1] + "-poster.jpg" : undefined,
      ratio: k.ratio,
      tekst: ""
    };
  }
  const v = /social\/montel-(.+?)-(poster|still)\.jpg$/.exec(k.src);
  return v ? {
    video: MT_VID + "social/montel-" + v[1] + "-16x9.mp4",
    terug: k.src,
    ratio: k.ratio,
    tekst: ""
  } : {
    src: k.src,
    terug: k.src,
    ratio: k.ratio,
    tekst: "",
    foto: 1
  };
};

/* De vier tv-commercials. Op de achtergrond speelt elke spot tot vlak voor de
   eindkaart met het logo; dan neemt de volgende het over. */
const MT_TVC = [{
  id: "40-2",
  naam: "Montèl 40-2",
  regel: "A living room built around one sofa, with the cat as co-star."
}, {
  id: "furious-vader-zoon",
  naam: "Furious",
  regel: "Father and son on the sofa, each in their own world."
}, {
  id: "ger-nijman",
  naam: "Ger Nijman",
  regel: "One sofa, one person and the freedom to make it entirely your own."
}, {
  id: "mova-kinderen",
  naam: "Mova",
  regel: "A family sofa that can take everything the kids bring to it."
}].map(t => ({
  ...t,
  film: MT_VID + "montel-tvc-" + t.id + "-16x9.mp4",
  poster: MT + "montel-tvc-" + t.id + "-poster.jpg"
}));
const MT_POL = "../../assets/cases/montel/polen/montel-polen-";
const MT_INTRO = ["Montèl is the largest seating specialist in the Netherlands: 33 stores, forty years in business and a collection that is entirely its own design, made in its own factory in Poland.", "DOLLE has been Montèl's production partner since 2020. Four national TV commercials, an art film, social campaigns shot in rented homes across the country and the internal films that carry the company from onboarding to kick-off."];
const mtFoto = n => ({
  src: MT_BTS + "montel-bts-foto-" + String(n).padStart(2, "0") + "-web.jpg",
  r: 3 / 4
});
const mtLoop = n => ({
  video: MT_VID + "montel-bts-" + String(n).padStart(2, "0") + ".mp4",
  r: 9 / 16
});
const mtArt = n => MT + "montel-art-still-0" + n + "-web.jpg";

/* Band onder de hero: BTS-foto's en -loops, afgewisseld met beelden uit de spots en de art film. */
const MT_BAND0 = [{
  src: MT_TVC[2].poster,
  r: 16 / 9
}, mtFoto(1), mtLoop(1), mtFoto(4), {
  src: mtArt(4),
  r: 16 / 9
}, mtLoop(3), mtFoto(7), mtFoto(9), {
  src: MT_TVC[0].poster,
  r: 16 / 9
}, mtLoop(5), mtFoto(12), mtFoto(14), {
  src: mtArt(1),
  r: 16 / 9
}, mtLoop(8), mtFoto(17), {
  src: MT_TVC[3].poster,
  r: 16 / 9
}, mtLoop(11), mtFoto(20), mtFoto(22), {
  src: MT_TVC[1].poster,
  r: 16 / 9
}, mtLoop(13)];
const MT_BAND = MT_KEUZE && MT_KEUZE.band && MT_KEUZE.band.length ? MT_KEUZE.band.map(k => /\.mp4$/.test(k.src) ? {
  video: /artfilm/.test(k.src) && k.src.indexOf("#t=") < 0 ? k.src + "#t=8" : k.src,
  r: mtRn(k.ratio)
} : {
  src: k.src,
  r: mtRn(k.ratio)
}) : MT_BAND0;
/* Behind the scenes onder de art film, opent pas na klikken. */
/* Carrousel onder de art film: stills uit de film, afgewisseld met BTS. Wordt aangevuld. */
const MT_ART_BAND = [{
  src: mtArt(1),
  r: 16 / 9
}, mtFoto(2), {
  src: mtArt(2),
  r: 16 / 9
}, mtLoop(2), {
  src: mtArt(3),
  r: 16 / 9
}, mtFoto(5), {
  src: mtArt(4),
  r: 16 / 9
}, mtLoop(6), {
  src: mtArt(5),
  r: 16 / 9
}, mtFoto(8)];
const MT_ART_BTS = [mtFoto(2), mtLoop(2), mtFoto(5), mtFoto(8), mtLoop(6), mtFoto(11), mtFoto(15), mtLoop(9), mtFoto(18), mtFoto(21), mtLoop(14), mtFoto(23)];

/* Social campagnes: per shoot een gehuurd huis, modellen, styling en een volledige crew. De naam is de locatie. */
/* Turnhout en Moergestel zijn één shoot; Chess staat er voorlopig niet in. */
const MT_SHOOTS = ["IJmuiden I", "Heemstede", "Eindhoven", "IJmuiden II", "Gent", "Waalre", "Turnhout"];

/* Films per shoot (16:9). Label: wat er in beeld is. */
const MT_SOC = {
  "Chess": [["chess-bank", "Sofa"], ["chess-bank-product", "Sofa · product"]],
  "Eindhoven": [["eindhoven-2025-dansend-de-40-in", "Dancing into 40"], ["eindhoven-2025-vader-zoon", "Father & son"], ["eindhoven-2025-montaro", "Montaro"], ["eindhoven-2025-lines", "Lines"], ["eindhoven-2025-stellen-tafel", "Couples · dining"], ["eindhoven-2025-tafel", "Dining table"]],
  "Gent": [["gent-social-eettafel", "Dining · social"], ["gent-figurant-mondo-hoekbank", "Mondo corner sofa"], ["gent-figurant-mondo-sustainable", "Mondo sustainable"], ["gent-figurant-eettafel", "Dining table"], ["gent-product-mondo-hoekbank", "Mondo · product"], ["gent-product-mondo-sustainable", "Mondo sustainable · product"], ["gent-product-eettafel", "Dining · product"]],
  "Heemstede": [["heemstede-compilatie", "Compilation"], ["heemstede-figurant-carmo-flair", "Carmo Flair"], ["heemstede-figurant-liveo-dream", "Liveo Dream"], ["heemstede-figurant-mova", "Mova"], ["heemstede-product-carmo-flair", "Carmo Flair · product"], ["heemstede-product-liveo-dream", "Liveo Dream · product"], ["heemstede-product-mova", "Mova · product"]],
  "IJmuiden I": [["ijmuiden-2024-compilatie", "Compilation"], ["ijmuiden-2024-figurant-jong-stel", "Young couple"], ["ijmuiden-2024-figurant-ouder-stel", "Older couple"], ["ijmuiden-2024-figurant-vader-zoon", "Father & son"], ["ijmuiden-2024-figurant-young-professional", "Young professional"], ["ijmuiden-2024-product-bloom", "Bloom · product"], ["ijmuiden-2024-product-furious", "Furious · product"], ["ijmuiden-2024-product-miles", "Miles · product"], ["ijmuiden-2024-product-moved", "Moved · product"]],
  "IJmuiden II": [["ijmuiden-2025-figurant-art-of-comfort", "Art of comfort"], ["ijmuiden-2025-figurant-design-statement", "Design statement"], ["ijmuiden-2025-figurant-fijne-momenten", "Good moments"], ["ijmuiden-2025-figurant-rust-in-de-drukte", "Calm in the rush"], ["ijmuiden-2025-product-art-of-comfort", "Art of comfort · product"], ["ijmuiden-2025-product-design-statement", "Design statement · product"], ["ijmuiden-2025-product-fijne-momenten", "Good moments · product"], ["ijmuiden-2025-product-rust-in-de-drukte", "Calm in the rush · product"]],
  "Moergestel": [["moergestel-figurant-mouro", "Mouro"], ["moergestel-figurant-snake", "Snake"], ["moergestel-product-mouro", "Mouro · product"], ["moergestel-product-snake", "Snake · product"], ["moergestel-product-hopper", "Hopper · product"], ["moergestel-product-hopper-prijs", "Hopper · offer"]]
};
MT_SOC["Waalre"] = [["waalre-figurant-01", "With models"], ["waalre-product-01", "Product film 1"], ["waalre-product-02", "Product film 2"], ["waalre-product-03", "Product film 3"], ["waalre-product-04", "Product film 4"], ["waalre-product-05", "Product film 5"]];
MT_SOC["Turnhout"] = [["turnhout-bank-model", "Sofa"], ["turnhout-magazine", "Magazine"], ["turnhout-bank", "Sofa · product"], ["turnhout-blad", "Table top · product"]];
MT_SOC["Turnhout"] = MT_SOC["Turnhout"].concat(MT_SOC["Moergestel"] || []);
/* Campagnefotografie per shoot: [nummer, liggend?]. */
const MT_IJ = MT + "ijmuiden-2025/montel-ijmuiden-2025-";
const MT_FOTO = {
  "IJmuiden II": [[6, 1], [15, 0], [1, 1], [10, 0], [3, 1], [16, 0], [14, 1], [19, 0]]
};
const mtFotos = naam => (MT_FOTO[naam] || []).map(([n, l]) => ({
  src: MT_IJ + String(n).padStart(2, "0") + ".jpg",
  tekst: "Photography",
  ratio: l ? "3 / 2" : "2 / 3",
  foto: 1
}));
/* Eigen gekozen still uit de film, waar het eerste beeld te veel op een ander lijkt. */
const MT_EIGEN_STILL = ["turnhout-bank-model", "turnhout-magazine", "turnhout-blad", "turnhout-bank", "chess-bank", "chess-bank-product"];
const mtSoc = naam => (MT_SOC[naam] || []).map(([id, label]) => ({
  video: MT_VID + "social/montel-" + id + "-16x9.mp4",
  terug: MT + "social/montel-" + id + (MT_EIGEN_STILL.includes(id) ? "-still.jpg" : "-poster.jpg"),
  ratio: "16 / 9",
  tekst: label,
  prod: /-product-/.test(id)
}));
/* Uitgeklapt: eerst de films met modellen, daaronder de productfilms. BTS per shoot zodra die er is. */
/* Vaste "willekeurige" volgorde per campagne, zodat elke rij anders oogt maar niet verspringt. */
const mtMeng = (lijst, zaad) => {
  let s = 0;
  for (const ch of zaad) s = s * 31 + ch.charCodeAt(0) >>> 0;
  return lijst.map((x, i) => [((s ^ i * 2654435761) >>> 0) % 997, x]).sort((p, q) => p[0] - q[0]).map(p => p[1]);
};
const mtProd = t => t.prod || /· product|· offer/.test(t.tekst);
const mtHero = a => a.find(t => /^Compilation/.test(t.tekst)) || a.find(t => !mtProd(t)) || a[0];
/* Dicht: één film (de compilatie) en drie stills uit de andere films. */
const mtStrook = naam => {
  const k = MT_KEUZE && MT_KEUZE.in && MT_KEUZE.in[naam];
  return k && k.length ? k.map(mtKItem) : mtStrook0(naam);
};
const mtStrook0 = naam => {
  /* Elke campagne opent anders: de ene met een still van mensen, de andere met
     een product; de compilatie staat er altijd in, op plek 1, 2 of 3. */
  const a = mtSoc(naam);
  const h = mtHero(a);
  const st = t => ({
    src: t.terug,
    tekst: t.tekst
  });
  const mens = mtMeng(a.filter(t => t !== h && !mtProd(t)), naam).map(st);
  const prod = mtMeng(a.filter(t => t !== h && mtProd(t)), naam + "p").map(st);
  const i = Math.max(0, MT_SHOOTS.indexOf(naam));
  /* Vooral mensen, met af en toe een product ertussen voor afwisseling. */
  const patroon = [["h", "m", "m", "p", "m", "m"], ["m", "h", "m", "m", "p", "m"], ["m", "m", "h", "p", "m", "m"], ["m", "p", "m", "h", "m", "m"], ["m", "h", "m", "m", "m", "p"]][i % 5];
  const pak = k => k === "h" ? h : k === "m" ? mens.shift() || prod.shift() : prod.shift() || mens.shift();
  /* Wisselende uitsneden zoals de casepagina's, zodat er meer beelden in de strook passen. */
  const maten = ["3 / 2", "4 / 5", "9 / 16", "3 / 4", "3 / 2", "4 / 5"];
  const films = patroon.map(pak).filter(Boolean).map((t, n) => ({
    ...t,
    ratio: maten[(n + i) % maten.length]
  }));
  /* Heeft de shoot fotografie, dan wisselen films en foto's elkaar af. */
  const f = mtFotos(naam);
  if (!f.length) return films;
  const uit = [];
  films.forEach((t, n) => {
    uit.push(t);
    if (f.length) uit.push(f.shift());
    if (n % 2 && f.length) uit.push(f.shift());
  });
  return uit.concat(f);
};
const mtRaster = naam => {
  const k = MT_KEUZE && MT_KEUZE.uit && MT_KEUZE.uit[naam];
  return k && k.length ? [{
    kop: "Selection",
    items: k.map(mtKItem)
  }] : mtRaster0(naam);
};
const mtRaster0 = naam => {
  const a = mtSoc(naam);
  const h = mtHero(a);
  return [{
    kop: "Hero",
    items: [h]
  }, {
    kop: "With models",
    items: a.filter(t => t !== h && !mtProd(t))
  }, {
    kop: "Product films",
    items: a.filter(t => t !== h && mtProd(t))
  }, {
    kop: "Stills",
    items: (() => {
      const me = mtMeng(a.filter(t => !mtProd(t)), naam + "s"),
        pr = mtMeng(a.filter(mtProd), naam + "q"),
        uit = [];
      while (me.length || pr.length) {
        if (me.length) uit.push(me.shift());
        if (me.length) uit.push(me.shift());
        if (pr.length) uit.push(pr.shift());
      }
      return uit;
    })()
  }];
};
/* Kick-off: foto's van de avond, afgewisseld met stills uit de film. */
const MT_KO_R = {
  "03": 0.717,
  "06": 1.499,
  "17": 0.709,
  "18": 0.761,
  "20": 1.413,
  "27": 0.687,
  "31": 0.761,
  "32": 0.709,
  "37": 0.672
};
const MT_KICKOFF = (() => {
  const uit = [];
  const st = [1, 2, 3, 5, 6];
  let s = 0;
  for (const n of [7, 2, 22, 6, 12, 13, 20, 16, 24, 30, 9, 11, 33, 15, 18, 35, 26, 34, 21, 5, 31, 4, 17, 28]) {
    const k = String(n).padStart(2, "0");
    uit.push({
      src: MT + "kickoff/montel-kickoff-" + k + "-web.jpg",
      r: MT_KO_R[k] || 0.667
    });
    if (uit.length % 5 === 4 && s < st.length) uit.push({
      src: MT + "academy/montel-academy-0" + st[s++] + ".jpg",
      r: 16 / 9
    });
  }
  return uit;
})();
const MT_DATA = [{
  label: "Social campaigns on location",
  waarde: MT_SHOOTS.length
}, {
  label: "National TV commercials",
  waarde: 4
}, {
  label: "Stores reached",
  waarde: 33
}];
const MT_LEVERING = ["Concept", "Location scouting", "Casting", "Styling", "Direction", "Production", "Photography", "Edit", "Broadcast delivery", "E-learning"];

/* Plek voor beeld dat nog komt. */
function MTVak({
  kader,
  label,
  src
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gap: "var(--space-2)",
      minWidth: 0
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      display: "block",
      aspectRatio: kader,
      overflow: "hidden",
      borderRadius: 5,
      background: "#0b1730",
      border: src ? 0 : "1px dashed var(--white-24, rgba(255,255,255,0.24))"
    }
  }, src ? /*#__PURE__*/React.createElement("img", {
    src: src,
    alt: "",
    loading: "lazy",
    decoding: "async",
    style: {
      position: "absolute",
      inset: 0,
      width: "100%",
      height: "100%",
      objectFit: "cover",
      display: "block"
    }
  }) : null), label ? /*#__PURE__*/React.createElement(MTKicker, {
    size: "sm",
    style: {
      display: "block",
      whiteSpace: "nowrap",
      overflow: "hidden",
      textOverflow: "ellipsis",
      color: "var(--text-muted)"
    }
  }, label) : null);
}
function MTKop({
  kop,
  tekst,
  groot
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gap: "var(--space-3)",
      maxWidth: "56ch"
    }
  }, /*#__PURE__*/React.createElement("h2", {
    style: {
      margin: 0,
      fontFamily: "var(--font-core)",
      fontWeight: "var(--weight-heading)",
      fontSize: groot ? "clamp(22px,2.6vw,36px)" : "clamp(19px,2vw,27px)",
      letterSpacing: "var(--track-heading)",
      color: "var(--text-heading)"
    }
  }, kop), tekst ? /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontSize: "var(--size-body)",
      lineHeight: "var(--lh-body)"
    }
  }, tekst) : null);
}
function MTSectie({
  children,
  gap
}) {
  return /*#__PURE__*/React.createElement("section", {
    className: "dolle-dark",
    style: {
      background: "var(--dolle-navy)",
      color: "var(--text-body)",
      padding: "var(--space-6) var(--page-margin)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: "var(--content-max)",
      margin: "0 auto",
      display: "grid",
      gap: gap || "var(--space-5)"
    }
  }, window.CMLijn ? /*#__PURE__*/React.createElement(window.CMLijn, null) : null, children));
}
function CaseMontelPagina({
  go
}) {
  const Film = window.CaseFilm;
  const Band = window.BVBand;
  const Rij = window.CaseRij;
  const Haarlijn = window.Haarlijn;
  const [open, setOpen] = React.useState(-1);
  const [shoot, setShoot] = React.useState(-1);
  const namen = ["Woonexpress", "Piet Klerkx", "Eezy"];
  const verwant = namen.map(n => (window.CASES || []).find(c => c.klant === n)).filter(Boolean);
  if (!Film) return null;
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("style", null, "@media (max-width:860px){[data-mt-twee],[data-mt-vier]{grid-template-columns:minmax(0,1fr) !important}}"), window.CMKop ? /*#__PURE__*/React.createElement(window.CMKop, {
    titel: "Montel",
    tags: ["Media production", "Launches", "Growth"],
    film: MT_TVC.slice(1).map(t => t.film),
    reeksDuur: [7.6, 11, 8.6],
    uitsnede: 1.24,
    poster: MT_TVC[2].poster,
    go: go,
    Knop: MTButton,
    Woorden: window.Words || null,
    Tag: MTTag
  }, window.CMIntro ? /*#__PURE__*/React.createElement(window.CMIntro, {
    tekst: MT_INTRO,
    beeld: window.CMOpeningBeeld ? /*#__PURE__*/React.createElement(window.CMOpeningBeeld, {
      modus: "groei",
      ratio: "16 / 9",
      src: MT_KEUZE && MT_KEUZE.hero || MT + "ijmuiden-2025/montel-ijmuiden-2025-06.jpg"
    }) : null
  }) : null) : null, Band ? /*#__PURE__*/React.createElement("section", {
    className: "dolle-dark",
    style: {
      background: "var(--dolle-navy)",
      padding: "0 var(--page-margin) var(--space-6)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: "var(--content-max)",
      margin: "0 auto"
    }
  }, /*#__PURE__*/React.createElement(Band, {
    items: MT_BAND,
    hoog: "clamp(200px,24vw,340px)",
    sleep: true,
    schuif: true
  }))) : null, /*#__PURE__*/React.createElement(MTSectie, null, /*#__PURE__*/React.createElement(MTKop, {
    groot: true,
    kop: "TV commercials",
    tekst: "Four national TV commercials, each built around one sofa and the people who live with it. DOLLE took every spot from concept to broadcast: script, casting, a fully dressed home as set, direction and the final grade. Each commercial was delivered broadcast-ready and cut down for social, so one production carries a whole season."
  }), /*#__PURE__*/React.createElement("div", {
    "data-mt-twee": "1",
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(2,minmax(0,1fr))",
      gap: "var(--space-5) var(--space-4)",
      paddingTop: "var(--space-3)"
    }
  }, MT_TVC.map((t, i) => /*#__PURE__*/React.createElement("div", {
    key: t.id,
    style: {
      display: "grid",
      gap: "var(--space-3)",
      minWidth: 0
    }
  }, /*#__PURE__*/React.createElement(Film, {
    bron: t.film,
    poster: t.poster,
    watch: true,
    watchSchaal: 2.6,
    parallax: true
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "baseline",
      gap: "var(--space-4)"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-core)",
      fontWeight: "var(--weight-heading)",
      fontSize: "clamp(16px,1.4vw,21px)",
      letterSpacing: "var(--track-heading)",
      color: "var(--text-heading)"
    }
  }, t.naam)), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontSize: "var(--size-body-sm, 15px)",
      lineHeight: "var(--lh-body)",
      color: "var(--text-muted)",
      maxWidth: "46ch"
    }
  }, t.regel))))), /*#__PURE__*/React.createElement(MTSectie, null, /*#__PURE__*/React.createElement("div", {
    "data-mt-twee": "1",
    style: {
      display: "grid",
      gridTemplateColumns: "minmax(0,0.75fr) minmax(0,1.6fr)",
      gap: "calc(var(--grid-gap) * 1.1)",
      alignItems: "start"
    }
  }, /*#__PURE__*/React.createElement(MTKop, {
    kop: "Art film",
    tekst: "An art film that shows how a Mont\xE8l sofa comes to be: the fabric samples and first sketches, the factory floor in Poland and the finished piece in the studio. Made for the 40th anniversary, to show the craft behind a collection that is entirely Mont\xE8l's own."
  }), /*#__PURE__*/React.createElement(Film, {
    bron: MT_VID + "montel-artfilm-16x9.mp4",
    poster: MT + "montel-artfilm-poster.jpg",
    watch: true,
    watchSchaal: 2.6,
    parallax: true
  })), Band ? /*#__PURE__*/React.createElement(Band, {
    items: MT_ART_BAND,
    hoog: "clamp(180px,20vw,300px)",
    sleep: true,
    schuif: true
  }) : null), /*#__PURE__*/React.createElement(MTSectie, null, /*#__PURE__*/React.createElement(MTKop, {
    kop: "Factory visit, Poland",
    tekst: "Every Mont\xE8l sofa is built in the company's own factory in Poland. DOLLE travelled there with the owner and the buyer to film the work behind the collection: frames, foam, upholstery and the people who put it together. The footage shows customers and staff where their sofa really comes from."
  }), /*#__PURE__*/React.createElement("div", {
    "data-mt-twee": "1",
    style: {
      display: "grid",
      gridTemplateColumns: "minmax(0,1.6fr) minmax(0,1fr)",
      gap: "var(--space-4)",
      alignItems: "start"
    }
  }, /*#__PURE__*/React.createElement(Film, {
    bron: MT_VID + "montel-polen-travelvlog-16x9.mp4",
    poster: MT_POL + "fabriek-03-web.jpg",
    watch: true,
    watchSchaal: 2.6
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(2,minmax(0,1fr))",
      gap: "var(--space-3)"
    }
  }, ["fabriek-01", "fabriek-05", "fabriek-02", "fabriek-04"].map(n => /*#__PURE__*/React.createElement(MTVak, {
    key: n,
    kader: "4 / 5",
    src: MT_POL + n + "-web.jpg"
  })))), /*#__PURE__*/React.createElement("div", {
    "data-mt-vier": "1",
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(4,minmax(0,1fr))",
      gap: "var(--space-3)"
    }
  }, ["fabriek-06", "overleg-01", "overleg-02", "overleg-03"].map(n => /*#__PURE__*/React.createElement(MTVak, {
    key: n,
    kader: "3 / 2",
    src: MT_POL + n + "-web.jpg"
  })))), /*#__PURE__*/React.createElement(MTSectie, {
    gap: "var(--space-4)"
  }, /*#__PURE__*/React.createElement(MTKop, {
    groot: true,
    kop: "Social campaigns",
    tekst: "For every collection DOLLE rents a real home and turns it into a set: furniture in, rooms styled, models cast and a full production crew on location. Each shoot is named after the place it was made."
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "minmax(0,1fr)"
    }
  }, Rij ? MT_SHOOTS.map((naam, i) => {
    const c = {
      id: "mt-" + i,
      klant: naam,
      kaders: ["Social campaign", "On location"],
      body: "Social campaign shot in a rented home in " + naam.replace(/ I+$/, "") + ", with models, stylists and a full production crew. Delivered as stills and short films for every channel.",
      zonderBeeld: true,
      mozaiek: ["Living room", "Detail", "Model", "Styling", "Behind the scenes"],
      strook: MT_SOC[naam] ? mtStrook(naam) : [undefined, undefined, undefined, undefined],
      raster: MT_SOC[naam] ? mtRaster(naam) : null
    };
    return /*#__PURE__*/React.createElement(Rij, {
      key: c.id,
      c: c,
      i: i,
      go: go,
      spiegel: true,
      geenKnop: true,
      groot: true,
      open: shoot === i,
      onToggle: () => setShoot(shoot === i ? -1 : i)
    });
  }) : null, Haarlijn ? /*#__PURE__*/React.createElement(Haarlijn, {
    vol: true
  }) : null)), /*#__PURE__*/React.createElement(MTSectie, null, /*#__PURE__*/React.createElement(MTKop, {
    kop: "Culture & e-learning",
    tekst: "Every new colleague at Mont\xE8l starts with a sales and learning track. DOLLE filmed that track as a series of explainer videos, together with the culture film that shows where the company comes from and what it promises every customer."
  }), /*#__PURE__*/React.createElement("div", {
    "data-mt-twee": "1",
    style: {
      display: "grid",
      gridTemplateColumns: "minmax(0,1.6fr) minmax(0,1fr)",
      gap: "var(--space-4)",
      alignItems: "start"
    }
  }, /*#__PURE__*/React.createElement(MTVak, {
    kader: "16 / 9",
    label: "Mont\xE8l Academy",
    src: MT + "academy/montel-academy-07.jpg"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gap: "var(--space-3)"
    }
  }, [1, 2].map(n => /*#__PURE__*/React.createElement(MTVak, {
    key: n,
    kader: "16 / 9",
    label: "E-learning \xB7 module",
    src: MT + "academy/montel-academy-0" + n + ".jpg"
  })))), Band ? /*#__PURE__*/React.createElement(Band, {
    items: [3, 5, 6].map(n => ({
      src: MT + "academy/montel-academy-0" + n + ".jpg",
      r: 16 / 9
    })),
    hoog: "clamp(180px,18vw,280px)",
    sleep: true,
    schuif: true
  }) : null), /*#__PURE__*/React.createElement(MTSectie, null, /*#__PURE__*/React.createElement(MTKop, {
    kop: "Kick-offs",
    tekst: "Cirque du Mont\xE8l: the internal kick-off where every store team comes together for the new season. DOLLE filmed the evening and photographed it from arrival to awards."
  }), /*#__PURE__*/React.createElement(Film, {
    bron: MT_VID + "montel-kickoff-16x9.mp4",
    poster: MT + "academy/montel-academy-04.jpg",
    onderschrift: "KICK-OFF \xB7 CIRQUE DU MONT\xC8L",
    watch: true,
    watchSchaal: 2.4,
    parallax: true
  }), Band ? /*#__PURE__*/React.createElement(Band, {
    items: MT_KICKOFF,
    hoog: "clamp(220px,24vw,360px)",
    sleep: true,
    schuif: true
  }) : null), window.CMData ? /*#__PURE__*/React.createElement(window.CMData, {
    kop: "Deliverables",
    beeld: MT_IJ + "20.jpg",
    waas: 0.42,
    cijfers: MT_DATA,
    Tag: MTTag,
    tags: MT_LEVERING,
    review: {
      tekst: "Working with team DOLLE is a real pleasure. We have done plenty of great shoots together by now. The contact is always easy and relaxed, and the end result is beautiful every time.",
      naam: "Manon Smits",
      rol: "Head of marketing · Montèl"
    }
  }) : null, /*#__PURE__*/React.createElement("section", {
    className: "dolle-dark",
    style: {
      background: "var(--dolle-navy)",
      padding: "var(--space-6) var(--page-margin)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: "var(--content-max)",
      margin: "0 auto",
      display: "grid",
      gap: "var(--space-4)",
      gridTemplateColumns: "minmax(0,1fr)"
    }
  }, /*#__PURE__*/React.createElement(MTKicker, {
    style: {
      display: "block",
      whiteSpace: "nowrap",
      color: "var(--text-muted)"
    }
  }, "Related work"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "minmax(0,1fr)"
    }
  }, Rij ? verwant.map((c, i) => /*#__PURE__*/React.createElement(Rij, {
    key: c.id,
    c: c,
    i: i,
    go: go,
    open: open === c.id,
    onToggle: () => setOpen(open === c.id ? -1 : c.id)
  })) : null, Haarlijn ? /*#__PURE__*/React.createElement(Haarlijn, null) : null))), window.HomeConversie ? /*#__PURE__*/React.createElement(window.HomeConversie, {
    go: go,
    tone: "dark"
  }) : null);
}
window.CaseMontelPagina = CaseMontelPagina;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/CaseMontelPagina.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/CaseMotion.jsx
try { (() => {
/* Gedeelde scroll- en reveal-effecten voor de casepagina's.
   Eén set, zodat elke case dezelfde opening en hetzelfde ritme krijgt. */

const CM_EASE = "cubic-bezier(.65,0,.25,1)";
const CM_ZACHT = "cubic-bezier(.16,.84,.24,1)";
const cmKlem = v => Math.max(0, Math.min(1, v));
const cmRustig = () => typeof window !== "undefined" && window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
const cmMobiel = () => typeof window !== "undefined" && window.innerWidth < 860;

/* Roept fn(rect, vh) aan bij elke scroll/resize, één keer per frame. */
function useCMScroll(ref, fn, deps) {
  React.useEffect(() => {
    let raf = 0;
    const meet = () => {
      raf = 0;
      const el = ref.current;
      if (el) fn(el.getBoundingClientRect(), window.innerHeight || 800);
    };
    const op = () => {
      if (!raf) raf = requestAnimationFrame(meet);
    };
    meet();
    window.addEventListener("scroll", op, {
      passive: true
    });
    window.addEventListener("resize", op);
    return () => {
      window.removeEventListener("scroll", op);
      window.removeEventListener("resize", op);
      if (raf) cancelAnimationFrame(raf);
    };
  }, deps || []);
}

/* Eén keer aan zodra het element het venster binnenkomt. */
function useCMBinnen(ref, drempel) {
  const [aan, setAan] = React.useState(false);
  React.useEffect(() => {
    if (cmRustig()) {
      setAan(true);
      return;
    }
    const el = ref.current;
    if (!el || typeof IntersectionObserver === "undefined") {
      setAan(true);
      return;
    }
    const io = new IntersectionObserver(e => {
      if (e.some(x => x.isIntersecting)) {
        setAan(true);
        io.disconnect();
      }
    }, {
      rootMargin: "0px 0px -" + (drempel || 12) + "% 0px"
    });
    io.observe(el);
    return () => io.disconnect();
  }, []);
  return aan;
}

/* Haarlijn die zichzelf van links trekt, 1:1 met de scroll. */
function CMLijn({
  kleur,
  basis,
  blijf
}) {
  const ref = React.useRef(null);
  const lijn = React.useRef(null);
  const max = React.useRef(0);
  /* blijf: eenmaal gevuld blijft de lijn vol, ook bij terugscrollen. */
  useCMScroll(ref, (r, vh) => {
    let p = cmRustig() ? 1 : cmKlem((vh * 0.96 - r.top) / (vh * 0.38));
    if (blijf) {
      if (p > max.current) max.current = p;
      p = max.current;
    }
    if (lijn.current) lijn.current.style.transform = "scaleX(" + p.toFixed(4) + ")";
  });
  return /*#__PURE__*/React.createElement("div", {
    ref: ref,
    "aria-hidden": "true",
    style: {
      height: 1,
      position: "relative",
      background: basis ? "rgba(255,255,255,0.1)" : "transparent"
    }
  }, /*#__PURE__*/React.createElement("div", {
    ref: lijn,
    style: {
      position: "absolute",
      inset: 0,
      background: kleur || (basis ? "rgba(255,255,255,0.5)" : "var(--white-24, rgba(255,255,255,0.24))"),
      transformOrigin: "left center",
      transform: "scaleX(0)"
    }
  }));
}

/* Beeld opent vanuit een masker (van onder naar boven) met een lichte zoom-out. */
function CMMasker({
  children,
  vertraging
}) {
  const ref = React.useRef(null);
  const aan = useCMBinnen(ref, 10);
  const [klaar, setKlaar] = React.useState(false);
  React.useEffect(() => {
    if (!aan) return;
    const t = setTimeout(() => setKlaar(true), 1500 + (vertraging || 0));
    return () => clearTimeout(t);
  }, [aan]);
  if (klaar) return /*#__PURE__*/React.createElement("div", {
    ref: ref
  }, children);
  return /*#__PURE__*/React.createElement("div", {
    ref: ref,
    style: {
      clipPath: aan ? "inset(0 0 0 0)" : "inset(100% 0 0 0)",
      transition: "clip-path 1300ms " + CM_EASE + " " + (vertraging || 0) + "ms"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      transform: aan ? "translate3d(0,0,0)" : "translate3d(0,48px,0)",
      transition: "transform 1500ms " + CM_ZACHT + " " + (vertraging || 0) + "ms"
    }
  }, children));
}

/* Tekstblokken van links naar rechts in beeld, één voor één. */
function CMTekst({
  children,
  aan: extern,
  start,
  duur
}) {
  const ref = React.useRef(null);
  const zelf = useCMBinnen(ref, 6);
  const aan = extern == null ? zelf : extern && zelf;
  return /*#__PURE__*/React.createElement("div", {
    ref: ref,
    style: {
      display: "grid",
      gap: "var(--space-4)"
    }
  }, React.Children.map(children, (c, i) => /*#__PURE__*/React.createElement("div", {
    style: {
      clipPath: aan ? "inset(-4px -4px -8px 0)" : "inset(-4px 100% -8px 0)",
      transition: "clip-path " + (duur || 1200) + "ms " + CM_EASE + " " + ((start || 0) + i * 160) + "ms",
      willChange: "clip-path"
    }
  }, c)));
}

/* Openingsbeeld. modus "masker": groeit uit het haakjessymbool naar het volle
   kader. modus "tekst": de tekst gaat voor, daarna zoomt het beeld rustig uit. */
function CMGroeiBeeld({
  src,
  ratio,
  van,
  oorsprong
}) {
  const vak = React.useRef(null),
    kader = React.useRef(null),
    img = React.useRef(null);
  React.useEffect(() => {
    const zet = p => {
      const e = p * p * (3 - 2 * p);
      if (kader.current) kader.current.style.transform = "scale(" + (van + (1 - van) * e).toFixed(4) + ")";
      if (img.current) img.current.style.transform = "scale(" + (1.14 - 0.14 * e).toFixed(4) + ")";
    };
    if (cmRustig()) {
      zet(1);
      return;
    }
    /* Volgt de scroll met een zachte demping: elk frame schuift de waarde een
       stukje richting het doel, zodat wielstappen niet als schokjes doorkomen. */
    let raf = 0,
      nu = -1,
      doel = 0;
    const meet = () => {
      const v = vak.current;
      if (!v) return;
      const b = v.getBoundingClientRect(),
        vh = window.innerHeight || 800;
      doel = cmKlem((vh - b.top) / (vh * 0.9));
    };
    const tik = () => {
      raf = 0;
      meet();
      if (nu < 0) nu = doel;else nu += (doel - nu) * 0.12;
      if (Math.abs(doel - nu) < 0.0005) nu = doel;else raf = requestAnimationFrame(tik);
      zet(nu);
    };
    const op = () => {
      if (!raf) raf = requestAnimationFrame(tik);
    };
    tik();
    window.addEventListener("scroll", op, {
      passive: true,
      capture: true
    });
    window.addEventListener("resize", op);
    return () => {
      window.removeEventListener("scroll", op, true);
      window.removeEventListener("resize", op);
      if (raf) cancelAnimationFrame(raf);
    };
  }, [van]);
  return /*#__PURE__*/React.createElement("div", {
    ref: vak,
    style: {
      position: "relative",
      aspectRatio: ratio || "16 / 9"
    }
  }, /*#__PURE__*/React.createElement("div", {
    ref: kader,
    style: {
      position: "absolute",
      inset: 0,
      overflow: "hidden",
      borderRadius: 5,
      background: "#0a1428",
      transform: "scale(" + van + ")",
      transformOrigin: oorsprong || "50% 50%",
      willChange: "transform"
    }
  }, /*#__PURE__*/React.createElement("img", {
    ref: img,
    src: src,
    alt: "",
    style: {
      position: "absolute",
      inset: 0,
      width: "100%",
      height: "100%",
      objectFit: "cover",
      display: "block",
      transform: "scale(1.14)",
      willChange: "transform"
    }
  })));
}
function CMOpeningBeeld({
  src,
  ratio,
  modus,
  start: van,
  oorsprong
}) {
  const [fase, setFase] = React.useState(cmRustig() ? 2 : 0);
  React.useEffect(() => {
    if (cmRustig()) return;
    if (modus === "groei" || !modus) return;
    const a = setTimeout(() => setFase(1), modus === "tekst" ? 700 : 250);
    const b = setTimeout(() => setFase(2), modus === "tekst" ? 800 : modus === "masker" ? 1150 : 120);
    return () => {
      clearTimeout(a);
      clearTimeout(b);
    };
  }, [modus]);
  const S = 38;
  if (modus === "scroll") return /*#__PURE__*/React.createElement(CMScrollBeeld, {
    src: src,
    ratio: ratio
  });
  if (modus === "groei" || !modus) {
    /* Groeit 1:1 met de scroll: van de startmaat zodra het beeld onderin het
       venster verschijnt, tot volle grootte als het in het midden staat. */
    /* Overal dezelfde zoom als bij Blue Rivet: vanaf 62%, gedempt meebewegend. */
    return /*#__PURE__*/React.createElement(CMGroeiBeeld, {
      src: src,
      ratio: ratio,
      van: 0.62,
      oorsprong: oorsprong
    });
  }
  if (modus === "tekst") {
    return /*#__PURE__*/React.createElement("div", {
      style: {
        position: "relative",
        aspectRatio: ratio || "16 / 9",
        overflow: "hidden",
        borderRadius: 5,
        background: "#0a1428"
      }
    }, /*#__PURE__*/React.createElement("img", {
      src: src,
      alt: "",
      style: {
        position: "absolute",
        inset: 0,
        width: "100%",
        height: "100%",
        objectFit: "cover",
        display: "block",
        opacity: fase ? 1 : 0,
        transform: fase === 2 ? "scale(1)" : "scale(1.12)",
        transition: "opacity 1100ms " + CM_EASE + ", transform 2400ms " + CM_ZACHT
      }
    }));
  }
  const klip = fase === 0 ? "inset(50% 50% 50% 50% round 2px)" : fase === 1 ? "inset(calc(50% - " + S + "px) calc(50% - " + S + "px) calc(50% - " + S + "px) calc(50% - " + S + "px) round 2px)" : "inset(0 0 0 0 round 5px)";
  const duur = fase === 2 ? "1600ms" : "800ms";
  const haak = {
    position: "absolute",
    width: 22,
    height: 22,
    borderColor: "var(--dolle-white)",
    borderStyle: "solid",
    borderWidth: 0,
    opacity: fase === 2 ? 0 : fase ? 1 : 0,
    transition: "left " + duur + " " + CM_EASE + ", top " + duur + " " + CM_EASE + ", right " + duur + " " + CM_EASE + ", bottom " + duur + " " + CM_EASE + ", opacity " + (fase === 2 ? "700ms " + CM_EASE + " 1000ms" : "500ms " + CM_EASE)
  };
  const rand = fase === 2 ? "-14px" : "calc(50% - " + (S + 14) + "px)";
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      aspectRatio: ratio || "16 / 9"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      inset: 0,
      overflow: "hidden",
      borderRadius: 5,
      clipPath: klip,
      transition: "clip-path " + duur + " " + CM_EASE
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: src,
    alt: "",
    style: {
      position: "absolute",
      inset: 0,
      width: "100%",
      height: "100%",
      objectFit: "cover",
      display: "block",
      transform: fase === 2 ? "scale(1)" : "scale(1.25)",
      transition: "transform 2000ms " + CM_ZACHT
    }
  })), /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true",
    style: {
      ...haak,
      left: rand,
      top: rand,
      borderLeftWidth: 3,
      borderBottomWidth: 3
    }
  }), /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true",
    style: {
      ...haak,
      right: rand,
      bottom: rand,
      borderRightWidth: 3,
      borderTopWidth: 3
    }
  }));
}

/* Openingsbeeld dat met de scroll meegroeit: bovenaan iets kleiner, na een
   halve schermhoogte scrollen staat het op volle grootte. Geen klok, dus geen
   haperende overgang bij het laden. */
function CMScrollBeeld({
  src,
  ratio
}) {
  const ref = React.useRef(null);
  const kader = React.useRef(null);
  const beeld = React.useRef(null);
  useCMScroll(ref, (r, vh) => {
    const p = cmRustig() ? 1 : cmKlem((window.scrollY || 0) / (vh * 0.7));
    const e = p < 0.5 ? 2 * p * p : 1 - Math.pow(-2 * p + 2, 2) / 2;
    if (kader.current) kader.current.style.transform = "scale(" + (0.6 + 0.4 * e).toFixed(4) + ")";
    if (beeld.current) beeld.current.style.transform = "scale(" + (1.12 - 0.12 * e).toFixed(4) + ")";
  });
  return /*#__PURE__*/React.createElement("div", {
    ref: ref,
    style: {
      position: "relative",
      aspectRatio: ratio || "16 / 9"
    }
  }, /*#__PURE__*/React.createElement("div", {
    ref: kader,
    style: {
      position: "absolute",
      inset: 0,
      overflow: "hidden",
      borderRadius: 5,
      background: "#0a1428",
      transform: "scale(0.6)",
      transformOrigin: "100% 0%",
      willChange: "transform"
    }
  }, /*#__PURE__*/React.createElement("img", {
    ref: beeld,
    src: src,
    alt: "",
    fetchpriority: "high",
    style: {
      position: "absolute",
      inset: 0,
      width: "100%",
      height: "100%",
      objectFit: "cover",
      display: "block",
      transform: "scale(1.12)",
      willChange: "transform"
    }
  })));
}

/* Pint de opening tot het openingsbeeld met de scroll op volle grootte staat;
   pas daarna scrolt de pagina verder. Op mobiel geen pin. */
function CMPin({
  children,
  afstand
}) {
  const [mobiel, setMobiel] = React.useState(cmMobiel());
  const weg = React.useRef(null);
  const [top, setTop] = React.useState(0);
  React.useLayoutEffect(() => {
    const meet = () => {
      if (weg.current) setTop(Math.max(0, Math.round(weg.current.getBoundingClientRect().top + (window.scrollY || 0))));
    };
    meet();
    window.addEventListener("resize", meet);
    return () => window.removeEventListener("resize", meet);
  }, [mobiel]);
  React.useEffect(() => {
    const r = () => setMobiel(cmMobiel());
    window.addEventListener("resize", r);
    return () => window.removeEventListener("resize", r);
  }, []);
  if (mobiel || cmRustig()) return children;
  return /*#__PURE__*/React.createElement("div", {
    ref: weg,
    style: {
      position: "relative"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "sticky",
      top: top,
      zIndex: 1,
      background: "var(--dolle-navy)"
    }
  }, children), /*#__PURE__*/React.createElement("div", {
    "aria-hidden": "true",
    style: {
      height: Math.round((afstand || 0.7) * 100) + "vh",
      background: "var(--dolle-navy)"
    }
  }));
}

/* In beeld scrollen: de kaarten in sel komen één voor één omhoog, 1:1 met de scroll. */
function CMInScroll({
  children,
  sel
}) {
  const ref = React.useRef(null);
  useCMScroll(ref, (r, vh) => {
    if (cmRustig() || !ref.current) return;
    const doel = ref.current.querySelector(sel);
    if (!doel) return;
    [...doel.children].forEach((k, i) => {
      const t = cmKlem((vh * 1.0 - r.top) / (vh * 0.45) - i * 0.14);
      const e = 1 - Math.pow(1 - t, 3);
      k.style.translate = "0 " + ((1 - e) * 140).toFixed(1) + "px";
      k.style.scale = String((0.9 + 0.1 * e).toFixed(4));
    });
  });
  return /*#__PURE__*/React.createElement("div", {
    ref: ref
  }, children);
}

/* Tekst die woord voor woord van links naar rechts vult, gekoppeld aan de
   scroll van het openingsbeeld (scrollY / afstand × vh). */
function CMVulTekst({
  zinnen,
  afstand,
  className,
  style
}) {
  const ref = React.useRef(null);
  const woorden = zinnen.map(z => z.split(" "));
  const totaal = woorden.reduce((n, w) => n + w.length, 0);
  useCMScroll(ref, (r, vh) => {
    if (!ref.current) return;
    const p = cmRustig() ? 1 : cmKlem((window.scrollY || 0) / (vh * (afstand || 0.7)));
    const vol = p * (totaal + 3);
    ref.current.querySelectorAll("[data-w]").forEach(el => {
      const i = +el.dataset.w;
      const t = cmKlem(vol - i);
      el.style.opacity = (0.22 + 0.78 * t).toFixed(3);
    });
  });
  let n = 0;
  return /*#__PURE__*/React.createElement("div", {
    ref: ref,
    style: {
      display: "grid",
      gap: "var(--space-4)"
    }
  }, woorden.map((ws, k) => /*#__PURE__*/React.createElement("p", {
    key: k,
    className: className,
    style: {
      margin: 0,
      ...style
    }
  }, ws.map((w, j) => {
    const i = n++;
    return /*#__PURE__*/React.createElement(React.Fragment, {
      key: j
    }, /*#__PURE__*/React.createElement("span", {
      "data-w": i,
      style: {
        opacity: 0.22
      }
    }, w), j < ws.length - 1 ? " " : "");
  }))));
}

/* Blokken (tags) die zich één voor één van links naar rechts vullen. */
function CMBlokken({
  children,
  midden
}) {
  const ref = React.useRef(null);
  const aan = useCMBinnen(ref, 8);
  return /*#__PURE__*/React.createElement("span", {
    ref: ref,
    style: {
      display: "flex",
      gap: "var(--space-2)",
      flexWrap: "wrap",
      justifyContent: midden ? "center" : undefined,
      maxWidth: "min(100%, 860px)"
    }
  }, React.Children.map(children, (c, i) => /*#__PURE__*/React.createElement("span", {
    style: {
      display: "block",
      clipPath: aan ? "inset(0 0 0 0)" : "inset(0 100% 0 0)",
      transition: "clip-path 800ms " + CM_EASE + " " + i * 130 + "ms"
    }
  }, c)));
}

/* Kaartenstapel: het blok staat vast, elke scrollstap schuift de volgende kaart
   van onder over de vorige, afwisselend links en rechts van het midden. De
   bovenste kaart speelt; de rest staat stil. */
function CMStapel({
  items,
  ratio
}) {
  const weg = React.useRef(null);
  const kaarten = React.useRef([]);
  const [actief, setActief] = React.useState(0);
  const [geluid, setGeluid] = React.useState(false);
  const n = items.length;
  useCMScroll(weg, (r, vh) => {
    const D = r.height - vh;
    const f = cmKlem(-r.top / Math.max(1, D)) * (n - 1);
    const w = weg.current ? weg.current.clientWidth : 1000;
    kaarten.current.forEach((k, i) => {
      if (!k) return;
      const e = i === 0 ? 1 : cmKlem(f - (i - 1));
      const s = e * e * (3 - 2 * e);
      const d = cmKlem(f - i);
      const kant = i % 2 ? 1 : -1;
      const x = kant * w * (cmMobiel() ? 0.04 : 0.11);
      k.style.transform = "translate3d(" + x.toFixed(1) + "px," + ((1 - s) * vh * 1.05).toFixed(1) + "px,0) scale(" + (1 - 0.07 * d).toFixed(4) + ") rotate(" + (kant * (1 - s) * 4).toFixed(2) + "deg)";
      k.style.filter = "brightness(" + (1 - 0.35 * d).toFixed(3) + ")";
    });
    const a = Math.round(f);
    setActief(o => o === a ? o : a);
  }, [n]);
  React.useEffect(() => {
    kaarten.current.forEach((k, i) => {
      const v = k && k.querySelector("video");
      if (!v) return;
      if (i === actief) {
        v.muted = !geluid;
        const pr = v.play();
        if (pr && pr.catch) pr.catch(() => {});
      } else {
        v.pause();
        v.muted = true;
      }
    });
  }, [actief, geluid]);
  return /*#__PURE__*/React.createElement("div", {
    ref: weg,
    style: {
      position: "relative",
      height: "calc(100vh + " + (n - 1) * 60 + "vh)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "sticky",
      top: 0,
      height: "100vh",
      overflow: "hidden"
    }
  }, items.map((it, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    ref: el => {
      kaarten.current[i] = el;
    },
    style: {
      position: "absolute",
      left: "50%",
      top: "50%",
      width: "min(38vw, 66vh * " + (ratio || 0.8) + ")",
      marginLeft: "calc(min(38vw, 66vh * " + (ratio || 0.8) + ") / -2)",
      marginTop: "calc(min(38vw, 66vh * " + (ratio || 0.8) + ") / " + (ratio || 0.8) + " / -2)",
      aspectRatio: String(ratio || 0.8),
      borderRadius: 5,
      overflow: "hidden",
      background: "#0a1428",
      zIndex: i,
      willChange: "transform",
      transform: i ? "translate3d(0,110vh,0)" : "none",
      boxShadow: "0 24px 60px rgba(0,0,0,0.35)"
    }
  }, /*#__PURE__*/React.createElement("video", {
    src: it.video,
    muted: true,
    loop: true,
    playsInline: true,
    preload: "metadata",
    style: {
      position: "absolute",
      inset: 0,
      width: "100%",
      height: "100%",
      objectFit: "cover",
      display: "block"
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      left: 12,
      bottom: 14,
      fontFamily: "var(--font-label)",
      fontSize: 10,
      fontWeight: 600,
      letterSpacing: "var(--track-label-wide)",
      textTransform: "uppercase",
      color: "var(--dolle-white)",
      textShadow: "0 1px 6px rgba(0,0,0,.45)",
      whiteSpace: "nowrap"
    }
  }, it.label), i === actief ? /*#__PURE__*/React.createElement("button", {
    type: "button",
    "aria-label": geluid ? "Sound off" : "Sound on",
    onClick: () => setGeluid(g => !g),
    style: {
      position: "absolute",
      right: 10,
      bottom: 10,
      width: 32,
      height: 32,
      borderRadius: 999,
      border: "1px solid rgba(255,255,255,0.5)",
      background: "rgba(16,31,60,0.45)",
      backdropFilter: "blur(4px)",
      color: "var(--dolle-white)",
      display: "grid",
      placeItems: "center",
      cursor: "pointer",
      padding: 0
    }
  }, /*#__PURE__*/React.createElement("svg", {
    viewBox: "0 0 24 24",
    width: "15",
    height: "15",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2",
    "aria-hidden": "true"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M4 9v6h4l5 4V5L8 9H4z",
    fill: "currentColor",
    stroke: "none"
  }), geluid ? /*#__PURE__*/React.createElement("path", {
    d: "M16 8.5a5 5 0 0 1 0 7M18.5 6a8.5 8.5 0 0 1 0 12"
  }) : /*#__PURE__*/React.createElement("path", {
    d: "M17 9l5 6M22 9l-5 6"
  }))) : null))));
}

/* Tekst in een blokje vult zich van links naar rechts bij het openen. */
function CMVulIn({
  children,
  vertraging
}) {
  const [aan, setAan] = React.useState(cmRustig());
  React.useEffect(() => {
    const t = setTimeout(() => setAan(true), 80);
    return () => clearTimeout(t);
  }, []);
  return /*#__PURE__*/React.createElement("span", {
    style: {
      display: "inline-block",
      clipPath: aan ? "inset(-4px -2px -4px 0)" : "inset(-4px 100% -4px 0)",
      transition: "clip-path 900ms " + CM_EASE + " " + (vertraging || 0) + "ms"
    }
  }, children);
}

/* WILDLY + wisselend doelwoord; het nieuwe woord zakt van boven in. */
function CMWildly({
  style
}) {
  const W = ["visible", "forward", "ahead", "driven"];
  const [i, setI] = React.useState(0);
  React.useEffect(() => {
    if (cmRustig()) return;
    const t = setInterval(() => setI(x => (x + 1) % W.length), 2800);
    return () => clearInterval(t);
  }, []);
  return /*#__PURE__*/React.createElement("span", {
    style: {
      display: "inline-flex",
      gap: "0.34em",
      alignItems: "baseline",
      ...style
    }
  }, /*#__PURE__*/React.createElement("span", null, "Wildly"), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      display: "inline-grid",
      overflow: "hidden",
      height: "1.15em",
      lineHeight: "1.15em",
      color: "var(--text-accent)"
    }
  }, W.map((w, k) => /*#__PURE__*/React.createElement("span", {
    key: w,
    "aria-hidden": k !== i,
    style: {
      gridArea: "1 / 1",
      transform: k === i ? "translateY(0)" : k === (i + W.length - 1) % W.length ? "translateY(100%)" : "translateY(-100%)",
      opacity: k === i ? 1 : 0,
      transition: "transform 700ms " + CM_EASE + ", opacity 500ms " + CM_EASE
    }
  }, w))));
}

/* Accordeon zoals de cases-rij op de dienstenpagina: de aangewezen kaart vult
   het venster en speelt, de rest blijft als smalle strook gedimd staan. */
function CMAccordeon({
  items,
  hoog,
  ratio,
  licht
}) {
  /* ratio: breedte/hoogte van de open kaart (standaard 9:16). licht: zachtere waas. */
  const R = ratio || 0.5625;
  const H = hoog || "clamp(380px,40vw,580px)";
  const [aan, setAan] = React.useState(0);
  const [geluid, setGeluid] = React.useState(false);
  const vak = React.useRef(null);
  const KA = "1300ms cubic-bezier(.2,.72,.16,1)";
  React.useEffect(() => {
    if (!vak.current) return;
    vak.current.querySelectorAll("video").forEach((v, i) => {
      if (i === aan) {
        v.muted = !geluid;
        const pr = v.play();
        if (pr && pr.catch) pr.catch(() => {});
      } else {
        v.pause();
        v.muted = true;
      }
    });
  }, [aan, geluid]);
  return /*#__PURE__*/React.createElement("div", {
    ref: vak,
    "data-cm-accordeon": "1",
    style: {
      display: "flex",
      gap: 4,
      height: H,
      borderRadius: 8,
      overflow: "hidden"
    }
  }, items.map((it, i) => {
    const a = i === aan;
    return /*#__PURE__*/React.createElement("div", {
      key: i,
      onMouseEnter: () => setAan(i),
      onFocus: () => setAan(i),
      onClick: () => setAan(i),
      tabIndex: 0,
      style: {
        position: "relative",
        minWidth: 0,
        flex: a ? "0 0 calc(" + H + " * " + R + ")" : "1 1 0px",
        overflow: "hidden",
        background: "#0a1428",
        cursor: "pointer",
        transition: "flex-grow " + KA + ", flex-basis " + KA
      }
    }, it.video ? /*#__PURE__*/React.createElement("video", {
      src: it.video,
      muted: true,
      loop: true,
      playsInline: true,
      preload: "metadata",
      style: {
        position: "absolute",
        inset: 0,
        width: "100%",
        height: "100%",
        objectFit: "cover",
        display: "block",
        transform: a ? "scale(1)" : "scale(1.06)",
        transition: "transform " + KA
      }
    }) : /*#__PURE__*/React.createElement("img", {
      src: it.src,
      alt: "",
      loading: "lazy",
      decoding: "async",
      draggable: "false",
      style: {
        position: "absolute",
        inset: 0,
        width: "100%",
        height: "100%",
        objectFit: "cover",
        display: "block",
        transform: a ? "scale(1)" : "scale(1.06)",
        transition: "transform " + KA
      }
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        position: "absolute",
        inset: 0,
        background: licht ? "linear-gradient(180deg, rgba(20,32,58,0.18), rgba(20,32,58,0.34))" : "linear-gradient(180deg, rgba(20,32,58,0.55), rgba(20,32,58,0.78))",
        opacity: a ? 0 : 1,
        transition: "opacity " + KA
      }
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        position: "absolute",
        left: 0,
        right: 0,
        bottom: "var(--space-6)",
        display: "grid",
        justifyItems: "center",
        padding: "0 var(--space-4)",
        opacity: a ? 1 : 0,
        transform: a ? "translateY(0)" : "translateY(10px)",
        transition: "opacity 700ms " + CM_EASE + " " + (a ? "350ms" : "0ms") + ", transform 900ms " + CM_ZACHT
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        fontFamily: "var(--font-label)",
        fontWeight: 600,
        fontSize: "var(--size-body-sm)",
        letterSpacing: "0.18em",
        textTransform: "uppercase",
        whiteSpace: "nowrap",
        color: "var(--dolle-white)",
        textShadow: "0 1px 8px rgba(0,0,0,.4)"
      }
    }, it.label)), a && it.video ? /*#__PURE__*/React.createElement("button", {
      type: "button",
      "aria-label": geluid ? "Sound off" : "Sound on",
      onClick: e => {
        e.stopPropagation();
        setGeluid(g => !g);
      },
      style: {
        position: "absolute",
        right: 12,
        bottom: 12,
        width: 32,
        height: 32,
        borderRadius: 999,
        border: "1px solid rgba(255,255,255,0.5)",
        background: "rgba(16,31,60,0.45)",
        backdropFilter: "blur(4px)",
        color: "var(--dolle-white)",
        display: "grid",
        placeItems: "center",
        cursor: "pointer",
        padding: 0
      }
    }, /*#__PURE__*/React.createElement("svg", {
      viewBox: "0 0 24 24",
      width: "15",
      height: "15",
      fill: "none",
      stroke: "currentColor",
      strokeWidth: "2",
      "aria-hidden": "true"
    }, /*#__PURE__*/React.createElement("path", {
      d: "M4 9v6h4l5 4V5L8 9H4z",
      fill: "currentColor",
      stroke: "none"
    }), geluid ? /*#__PURE__*/React.createElement("path", {
      d: "M16 8.5a5 5 0 0 1 0 7M18.5 6a8.5 8.5 0 0 1 0 12"
    }) : /*#__PURE__*/React.createElement("path", {
      d: "M17 9l5 6M22 9l-5 6"
    }))) : null);
  }));
}

/* Telt op naar het getal zodra het in beeld komt. */
function CMTeller({
  waarde,
  achter,
  duur
}) {
  const ref = React.useRef(null);
  /* Start pas als het getal echt in beeld staat (onderste 30% telt niet mee). */
  const aan = useCMBinnen(ref, 30);
  const [n, setN] = React.useState(0);
  React.useEffect(() => {
    if (!aan || typeof waarde !== "number") return;
    if (cmRustig()) {
      setN(waarde);
      return;
    }
    const t0 = performance.now() + 150,
      D = duur || 2200;
    let raf;
    const tik = nu => {
      const p = Math.max(0, Math.min(1, (nu - t0) / D));
      const dec = (String(waarde).split(".")[1] || "").length,
        f = Math.pow(10, dec);
      setN(Math.round(waarde * (1 - Math.pow(1 - p, 3)) * f) / f);
      if (p < 1) raf = requestAnimationFrame(tik);
    };
    raf = requestAnimationFrame(tik);
    return () => cancelAnimationFrame(raf);
  }, [aan, waarde]);
  return /*#__PURE__*/React.createElement("span", {
    ref: ref
  }, typeof waarde === "number" ? n : waarde, achter || "");
}

/* Datablok: foto op de achtergrond met donkere waas, cijfers boven een lijn die
   zich vanuit het midden vult, daaronder de deliverables als blokken. */
function CMData({
  beeld,
  cijfers = [],
  kop,
  tags,
  Tag,
  review,
  waas
}) {
  const kaart = React.useRef(null);
  const kaartAan = useCMBinnen(kaart, 22);
  const ref = React.useRef(null);
  const lijn = React.useRef(null);
  const foto = React.useRef(null);
  useCMScroll(ref, (r, vh) => {
    const p = cmRustig() ? 1 : cmKlem((vh * 0.9 - r.top) / (vh * 0.6));
    if (lijn.current) lijn.current.style.transform = "scaleX(" + p.toFixed(4) + ")";
    /* Venster-parallax: de foto staat bijna stil ten opzichte van het scherm,
       de sectie schuift eroverheen als een venster dat de foto onthult. */
  });
  return /*#__PURE__*/React.createElement("section", {
    ref: ref,
    className: "dolle-dark",
    style: {
      position: "relative",
      overflow: "hidden",
      clipPath: "inset(0)",
      padding: "clamp(96px,16vh,180px) var(--page-margin)",
      color: "var(--text-body)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    ref: foto,
    "aria-hidden": "true",
    style: {
      position: "fixed",
      inset: 0,
      backgroundImage: "url(" + beeld + ")",
      backgroundSize: "cover",
      backgroundPosition: "center",
      pointerEvents: "none"
    }
  }), /*#__PURE__*/React.createElement("div", {
    "aria-hidden": "true",
    style: {
      position: "absolute",
      inset: 0,
      background: waas != null ? "linear-gradient(180deg, rgba(16,31,60," + (waas + 0.12) + ") 0%, rgba(16,31,60," + waas + ") 45%, rgba(16,31,60," + (waas + 0.2) + ") 100%)" : "linear-gradient(180deg, rgba(16,31,60,0.55) 0%, rgba(16,31,60,0.5) 50%, rgba(16,31,60,0.62) 100%)"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      margin: "0 auto",
      display: "grid",
      gridTemplateColumns: "minmax(0,1fr)",
      gap: "clamp(40px,7vh,72px)",
      justifyItems: "center",
      textAlign: "center"
    }
  }, review ?
  /*#__PURE__*/
  /* Met review: deliverables links in één lijn, de review als kaart rechts. */
  React.createElement("div", {
    "data-cm-review": "1",
    style: {
      width: "100%",
      maxWidth: "var(--content-max)",
      justifySelf: "center",
      display: "grid",
      gridTemplateColumns: "minmax(0,1fr) minmax(0,440px)",
      gap: "calc(var(--grid-gap) * 1.2)",
      alignItems: "center",
      textAlign: "left"
    }
  }, /*#__PURE__*/React.createElement("style", null, "@media (max-width:860px){[data-cm-review]{grid-template-columns:minmax(0,1fr) !important}}"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gap: "var(--space-5)",
      justifyItems: "start"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-label)",
      fontWeight: 600,
      fontSize: "clamp(13px,1.15vw,17px)",
      letterSpacing: "var(--track-label-wide)",
      textTransform: "uppercase",
      color: "var(--dolle-white)"
    }
  }, kop), /*#__PURE__*/React.createElement(CMBlokken, null, tags.map(t => /*#__PURE__*/React.createElement(Tag, {
    key: t
  }, t)))), /*#__PURE__*/React.createElement("figure", {
    ref: kaart,
    style: {
      margin: 0,
      justifySelf: "end",
      width: "100%",
      display: "grid",
      gap: "var(--space-4)",
      padding: "clamp(24px,2.4vw,36px)",
      borderRadius: 8,
      background: "rgba(16,31,60,0.78)",
      border: "1px solid rgba(255,255,255,0.16)",
      boxShadow: "0 30px 70px rgba(5,12,28,0.35)",
      backdropFilter: "blur(14px)",
      WebkitBackdropFilter: "blur(14px)",
      opacity: kaartAan ? 1 : 0,
      transform: kaartAan ? "translate3d(0,0,0) scale(1)" : "translate3d(0,40px,0) scale(0.97)",
      transition: "opacity 900ms cubic-bezier(.2,.72,.16,1) 200ms, transform 1300ms cubic-bezier(.2,.72,.16,1) 200ms"
    }
  }, /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true",
    style: {
      display: "flex",
      gap: "0.15em",
      fontSize: "13px",
      color: "var(--dolle-white)"
    }
  }, /*#__PURE__*/React.createElement("span", null, "\u2605"), /*#__PURE__*/React.createElement("span", null, "\u2605"), /*#__PURE__*/React.createElement("span", null, "\u2605"), /*#__PURE__*/React.createElement("span", null, "\u2605"), /*#__PURE__*/React.createElement("span", null, "\u2605")), /*#__PURE__*/React.createElement("blockquote", {
    style: {
      margin: 0,
      fontFamily: "var(--font-core)",
      fontSize: "clamp(16px,1.25vw,19px)",
      lineHeight: 1.5,
      color: "var(--dolle-white)",
      textWrap: "pretty"
    }
  }, "\u201C", review.tekst, "\u201D"), /*#__PURE__*/React.createElement("figcaption", {
    style: {
      display: "grid",
      gap: "var(--space-1)"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-label)",
      fontWeight: 600,
      fontSize: "var(--size-label)",
      letterSpacing: "var(--track-label-wide)",
      textTransform: "uppercase",
      color: "var(--dolle-white)"
    }
  }, review.naam), review.rol ? /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: "var(--size-body-sm)",
      color: "rgba(255,255,255,0.72)"
    }
  }, review.rol) : null))) : /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gap: "var(--space-5)",
      justifyItems: "center"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-label)",
      fontWeight: 600,
      fontSize: "clamp(13px,1.15vw,17px)",
      letterSpacing: "var(--track-label-wide)",
      textTransform: "uppercase",
      color: "var(--dolle-white)"
    }
  }, kop), /*#__PURE__*/React.createElement(CMBlokken, {
    midden: true
  }, tags.map(t => /*#__PURE__*/React.createElement(Tag, {
    key: t
  }, t)))), /*#__PURE__*/React.createElement("div", {
    "aria-hidden": "true",
    style: {
      width: "calc(100% + var(--page-margin) * 2)",
      maxWidth: "none",
      justifySelf: "center",
      height: 1,
      position: "relative"
    }
  }, /*#__PURE__*/React.createElement("div", {
    ref: lijn,
    style: {
      position: "absolute",
      inset: 0,
      background: "rgba(255,255,255,0.5)",
      transformOrigin: "50% 50%",
      transform: "scaleX(0)"
    }
  })), cijfers.length ? /*#__PURE__*/React.createElement("div", {
    "data-cm-data": "1",
    style: {
      width: "100%",
      maxWidth: "var(--content-max)",
      justifySelf: "center",
      display: "grid",
      gridTemplateColumns: "repeat(" + cijfers.length + ",minmax(0,1fr))",
      gap: "var(--space-6)"
    }
  }, cijfers.map((c, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      display: "grid",
      gap: "var(--space-3)",
      justifyItems: "center"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-label)",
      fontWeight: 600,
      fontSize: "var(--size-label-sm)",
      letterSpacing: "var(--track-label-wide)",
      textTransform: "uppercase",
      color: "rgba(255,255,255,0.78)",
      textWrap: "balance"
    }
  }, c.label), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-core)",
      fontWeight: 400,
      fontSize: "clamp(36px,4.6vw,72px)",
      lineHeight: 1,
      letterSpacing: "-0.03em",
      color: "var(--dolle-white)",
      fontVariantNumeric: "tabular-nums"
    }
  }, /*#__PURE__*/React.createElement(CMTeller, {
    waarde: c.waarde,
    achter: c.achter
  }))))) : null));
}

/* Plakfoto: het beeld staat stil, de tekst schuift van onder omhoog tot zijn
   onderkant gelijk ligt met die van het beeld, blijft daar even staan en
   scrolt dan samen met het beeld door. Op mobiel gewoon onder elkaar. */
function CMPlak({
  beeld,
  tekst
}) {
  const weg = React.useRef(null);
  const foto = React.useRef(null);
  const blok = React.useRef(null);
  const [mobiel, setMobiel] = React.useState(cmMobiel());
  React.useEffect(() => {
    const r = () => setMobiel(cmMobiel());
    window.addEventListener("resize", r);
    return () => window.removeEventListener("resize", r);
  }, []);
  useCMScroll(weg, (r, vh) => {
    if (mobiel || !foto.current || !blok.current) return;
    const D = r.height - vh;
    const ruw = cmKlem(-r.top / Math.max(1, D));
    const stijg = cmRustig() ? 1 : cmKlem(ruw / 0.62);
    const fb = foto.current.offsetTop + foto.current.offsetHeight;
    const eind = fb - blok.current.offsetHeight;
    const begin = vh * 0.92;
    blok.current.style.transform = "translate3d(0," + (begin + (eind - begin) * stijg).toFixed(1) + "px,0)";
  }, [mobiel]);
  if (mobiel) {
    return /*#__PURE__*/React.createElement("div", {
      style: {
        display: "grid",
        gap: "var(--space-6)"
      }
    }, beeld, /*#__PURE__*/React.createElement(CMTekst, null, tekst));
  }
  return /*#__PURE__*/React.createElement("div", {
    ref: weg,
    style: {
      position: "relative",
      height: "230vh"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "sticky",
      top: 0,
      height: "100vh",
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      height: "100%",
      maxWidth: "var(--content-max)",
      margin: "0 auto",
      display: "grid",
      gridTemplateColumns: "minmax(0,0.9fr) minmax(0,1.25fr)",
      gap: "calc(var(--grid-gap) * 1.1)",
      alignItems: "center"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    ref: blok,
    style: {
      position: "absolute",
      left: 0,
      right: 0,
      top: 0,
      maxWidth: "45ch",
      display: "grid",
      gap: "var(--space-4)",
      transform: "translate3d(0,100vh,0)",
      willChange: "transform"
    }
  }, tekst)), /*#__PURE__*/React.createElement("div", {
    ref: foto
  }, beeld))));
}

/* Komt bij het openen van de pagina rustig omhoog in beeld. */
function CMOpkomst({
  children,
  vertraging
}) {
  const [aan, setAan] = React.useState(cmRustig());
  React.useEffect(() => {
    const t = setTimeout(() => setAan(true), 60);
    return () => clearTimeout(t);
  }, []);
  return /*#__PURE__*/React.createElement("div", {
    style: {
      opacity: aan ? 1 : 0,
      transform: aan ? "translate3d(0,0,0)" : "translate3d(0,36px,0)",
      transition: "opacity 1200ms " + CM_EASE + " " + (vertraging || 0) + "ms, transform 1500ms " + CM_ZACHT + " " + (vertraging || 0) + "ms"
    }
  }, children);
}

/* Verspringende parallax: de directe kinderen van het eerste element dat aan
   sel voldoet (of van de wrapper zelf) bewegen elk met een eigen snelheid mee. */
function CMVerspring({
  children,
  sel,
  snelheden
}) {
  const ref = React.useRef(null);
  useCMScroll(ref, (r, vh) => {
    if (cmRustig()) return;
    const doel = sel ? ref.current.querySelector(sel) : ref.current.firstElementChild;
    if (!doel) return;
    const d = r.top + r.height / 2 - vh / 2;
    const f = cmMobiel() ? 0.5 : 1;
    [...doel.children].forEach((k, i) => {
      const s = snelheden[i % snelheden.length] * f;
      k.style.transform = "translate3d(0," + (d * s).toFixed(1) + "px,0)";
    });
  });
  return /*#__PURE__*/React.createElement("div", {
    ref: ref
  }, children);
}

/* Parallax binnen het kader: alleen het beeld (img/video) beweegt, het kader
   blijft staan. Het beeld is iets groter dan het kader, zodat er nooit een rand
   zichtbaar wordt. */
function CMBinnen({
  children,
  snelheden,
  schaal
}) {
  const ref = React.useRef(null);
  const S = schaal || 1.2;
  useCMScroll(ref, (r0, vh) => {
    if (cmRustig() || !ref.current) return;
    const f = cmMobiel() ? 0.5 : 1;
    ref.current.querySelectorAll("img, video").forEach((el, i) => {
      const kader = el.parentElement;
      if (!kader) return;
      const r = kader.getBoundingClientRect();
      if (r.bottom < -100 || r.top > vh + 100) return;
      const d = r.top + r.height / 2 - vh / 2;
      const max = r.height * (S - 1) / 2 * 0.95;
      const y = Math.max(-max, Math.min(max, d * snelheden[i % snelheden.length] * f));
      el.style.scale = String(S);
      el.style.translate = "0 " + y.toFixed(1) + "px";
    });
  });
  return /*#__PURE__*/React.createElement("div", {
    ref: ref
  }, children);
}

/* Store photography, versie A: vastgezette strook die zijwaarts schuift
   terwijl je naar beneden scrolt. */
function CMStrook({
  beelden
}) {
  const weg = React.useRef(null);
  const spoor = React.useRef(null);
  const raam = React.useRef(null);
  const [lengte, setLengte] = React.useState(0);
  React.useLayoutEffect(() => {
    const meet = () => {
      if (spoor.current && raam.current) setLengte(Math.max(0, spoor.current.scrollWidth - raam.current.clientWidth));
    };
    meet();
    const ro = typeof ResizeObserver !== "undefined" ? new ResizeObserver(meet) : null;
    if (ro && spoor.current) ro.observe(spoor.current);
    window.addEventListener("resize", meet);
    return () => {
      if (ro) ro.disconnect();
      window.removeEventListener("resize", meet);
    };
  }, []);
  useCMScroll(weg, (r, vh) => {
    const D = r.height - vh;
    const p = cmKlem(-r.top / Math.max(1, D));
    if (spoor.current) spoor.current.style.transform = "translate3d(" + (-p * lengte).toFixed(1) + "px,0,0)";
  }, [lengte]);
  return /*#__PURE__*/React.createElement("div", {
    ref: weg,
    style: {
      position: "relative",
      minWidth: 0,
      height: "calc(100vh + " + lengte + "px)",
      margin: "0 calc(var(--page-margin) * -1)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    ref: raam,
    style: {
      position: "sticky",
      top: 0,
      width: "100%",
      maxWidth: "100vw",
      height: "100vh",
      overflow: "hidden",
      display: "flex",
      alignItems: "center"
    }
  }, /*#__PURE__*/React.createElement("div", {
    ref: spoor,
    style: {
      display: "flex",
      gap: "var(--space-3)",
      padding: "0 var(--page-margin)",
      willChange: "transform"
    }
  }, beelden.map((b, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      flex: "0 0 auto",
      height: "clamp(260px,52vh,560px)",
      aspectRatio: b.ratio,
      borderRadius: 5,
      overflow: "hidden",
      background: "#0a1428"
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: b.src,
    alt: "",
    loading: "lazy",
    style: {
      width: "100%",
      height: "100%",
      objectFit: "cover",
      display: "block"
    }
  }))))));
}

/* Store photography, versie B: twee rijen die tegengesteld meebewegen. */
function CMRijen({
  beelden
}) {
  const ref = React.useRef(null);
  const a = React.useRef(null);
  const b = React.useRef(null);
  useCMScroll(ref, (r, vh) => {
    const p = cmKlem((vh - r.top) / (vh + r.height));
    const af = cmMobiel() ? 18 : 28;
    if (a.current) a.current.style.transform = "translate3d(" + -p * af + "%,0,0)";
    if (b.current) b.current.style.transform = "translate3d(" + (-af + p * af) + "%,0,0)";
  });
  const rij = (lijst, r) => /*#__PURE__*/React.createElement("div", {
    ref: r,
    style: {
      display: "flex",
      gap: "var(--space-3)",
      width: "max-content",
      willChange: "transform"
    }
  }, lijst.concat(lijst).map((x, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      flex: "0 0 auto",
      height: "clamp(170px,19vw,300px)",
      aspectRatio: x.ratio,
      borderRadius: 5,
      overflow: "hidden",
      background: "#0a1428"
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: x.src,
    alt: "",
    loading: "lazy",
    style: {
      width: "100%",
      height: "100%",
      objectFit: "cover",
      display: "block"
    }
  }))));
  return /*#__PURE__*/React.createElement("div", {
    ref: ref,
    style: {
      display: "grid",
      gridTemplateColumns: "minmax(0,1fr)",
      minWidth: 0,
      gap: "var(--space-3)",
      overflow: "hidden",
      margin: "0 calc(var(--page-margin) * -1)"
    }
  }, rij(beelden.filter((x, i) => i % 2 === 0), a), rij(beelden.filter((x, i) => i % 2 === 1), b));
}

/* Automatisch op elke casepagina:
   - [data-cm-groei]: het openingsbeeld groeit bij het openen van klein naar groot.
   - elementen met background-size var(--lijn): de haarlijn trekt zich met de scroll. */
(function () {
  if (typeof window === "undefined" || window.__cmAuto) return;
  window.__cmAuto = true;
  const rustig = cmRustig();
  const groei = el => {
    el.dataset.cmG = "1";
    if (rustig) return;
    el.style.transform = "scale(0.55)";
    el.style.transformOrigin = "50% 50%";
    el.style.transition = "none";
    el.style.willChange = "transform";
    let gestart = false;
    const start = () => {
      if (gestart) return;
      gestart = true;
      requestAnimationFrame(() => {
        el.style.transition = "transform 2400ms cubic-bezier(.22,.8,.2,1)";
        el.style.transform = "scale(1)";
      });
    };
    const media = [...el.querySelectorAll("img,video")].concat(el.matches("img,video") ? [el] : []);
    const klaar = media.filter(m => m.tagName === "IMG" ? !(m.complete && m.naturalWidth) : m.readyState < 2);
    if (!klaar.length) setTimeout(start, 250);else {
      let n = klaar.length;
      klaar.forEach(m => {
        const k = () => {
          if (--n <= 0) setTimeout(start, 200);
        };
        m.addEventListener(m.tagName === "IMG" ? "load" : "loadeddata", k, {
          once: true
        });
        m.addEventListener("error", k, {
          once: true
        });
      });
      setTimeout(start, 1600);
    }
  };
  const scan = () => document.querySelectorAll("[data-cm-groei]:not([data-cm-g])").forEach(groei);
  let raf = 0;
  const lijnen = () => {
    raf = 0;
    const vh = window.innerHeight || 800;
    document.querySelectorAll('[style*="--lijn"]').forEach(el => {
      const r = el.getBoundingClientRect();
      const t = rustig ? 1 : cmKlem((vh * 0.96 - r.top) / (vh * 0.38));
      el.style.setProperty("--lijn", (t * 100).toFixed(2) + "%");
    });
  };
  const op = () => {
    if (!raf) raf = requestAnimationFrame(lijnen);
  };
  const go = () => {
    new MutationObserver(() => {
      scan();
      op();
    }).observe(document.body, {
      childList: true,
      subtree: true
    });
    window.addEventListener("scroll", op, {
      passive: true
    });
    window.addEventListener("resize", op);
    scan();
    op();
  };
  if (document.body) go();else document.addEventListener("DOMContentLoaded", go);
})();

/* Kop zoals Woonexpress: film over het hele scherm; de titel met lijn en
   tags staat onderin en wordt door de blauwe band opgepakt en naar boven
   gedragen. children = de inhoud van de band (intro). */
/* Reeks korte fragmenten als achtergrond: twee lagen die elkaar overvloeien,
   elk fragment speelt een paar seconden. */
function CMReeks({
  films,
  poster,
  duur = 5.5
}) {
  const a = React.useRef(null),
    b = React.useRef(null);
  React.useEffect(() => {
    const lagen = [a.current, b.current];
    if (!lagen[0] || !lagen[1]) return;
    let i = 0,
      actief = 0,
      t0 = 0,
      raf = 0,
      weg = false;
    const zet = (v, n) => {
      v.src = films[n % films.length];
      v.load();
    };
    zet(lagen[0], 0);
    zet(lagen[1], 1);
    lagen[0].style.opacity = "1";
    lagen[1].style.opacity = "0";
    const p = lagen[0].play();
    if (p && p.catch) p.catch(() => {});
    const tik = nu => {
      if (weg) return;
      const v = lagen[actief];
      if (!t0 && v.currentTime > 0) t0 = nu;
      /* duur mag per film verschillen (array), zodat elke spot vóór zijn eindkaart wisselt. */
      const d = Array.isArray(duur) ? duur[i % duur.length] : duur;
      if (t0 && nu - t0 > d * 1000) {
        const volgende = lagen[1 - actief];
        const q = volgende.play();
        if (q && q.catch) q.catch(() => {});
        volgende.style.opacity = "1";
        v.style.opacity = "0";
        const oud = v;
        i++;
        setTimeout(() => {
          if (!weg) {
            oud.pause();
            zet(oud, i + 1);
          }
        }, 700);
        actief = 1 - actief;
        t0 = 0;
      }
      raf = requestAnimationFrame(tik);
    };
    raf = requestAnimationFrame(tik);
    return () => {
      weg = true;
      cancelAnimationFrame(raf);
      lagen.forEach(v => {
        v.pause();
        v.removeAttribute("src");
        v.load();
      });
    };
  }, [films.join("|")]);
  const st = {
    position: "absolute",
    inset: 0,
    width: "100%",
    height: "100%",
    objectFit: "cover",
    display: "block",
    transition: "opacity 600ms ease"
  };
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("video", {
    ref: a,
    "data-film": "1",
    muted: true,
    playsInline: true,
    preload: "auto",
    poster: poster,
    style: st
  }), /*#__PURE__*/React.createElement("video", {
    ref: b,
    "data-film": "1",
    muted: true,
    playsInline: true,
    preload: "auto",
    style: {
      ...st,
      opacity: 0
    }
  }));
}
function CMKop({
  titel,
  tags = [],
  film,
  poster,
  go,
  Knop,
  Woorden,
  Tag,
  children,
  start,
  eind,
  reserve,
  uitsnede,
  uitsnedeHoek,
  reeksDuur
}) {
  /* uitsnede: vergroot de film vanuit linksonder, zodat een logo rechtsboven buiten beeld valt. */
  /* uitsnedeHoek="rechts": vergroot vanuit rechtsonder, zodat een logo linksboven wegvalt. */
  const rechts = uitsnedeHoek === "rechts";
  const filmMaat = uitsnede ? {
    inset: rechts ? "auto 0 0 auto" : "auto auto 0 0",
    width: uitsnede * 100 + "%",
    height: uitsnede * 100 + "%"
  } : {
    inset: 0,
    width: "100%",
    height: "100%"
  };
  /* reserve: lukt het niet om naar het startpunt te springen (server zonder
     range-ondersteuning), dan spelen deze korte fragmenten. */
  const [terug, setTerug] = React.useState(false);
  const vak = React.useRef(null),
    filmRef = React.useRef(null),
    waas = React.useRef(null),
    kop = React.useRef(null),
    band = React.useRef(null);
  React.useEffect(() => {
    const rustig = cmRustig();
    let raf = 0;
    const navH = () => {
      const h = document.querySelector("header");
      return h && h.offsetHeight ? h.offsetHeight : 92;
    };
    const zet = () => {
      if (vak.current) vak.current.style.setProperty("--cm-nav", navH() + "px");
    };
    const tik = () => {
      raf = 0;
      const v = vak.current,
        b = band.current;
      if (!v || !b) return;
      const vh = v.offsetHeight || 600,
        n = navH();
      const p = rustig ? 1 : cmKlem(1 - (b.getBoundingClientRect().top - n) / vh);
      if (filmRef.current && !rustig) filmRef.current.style.transform = "translate3d(0," + (-p * vh * 0.12).toFixed(1) + "px,0) scale(" + (1 + p * 0.06).toFixed(4) + ")";
      if (waas.current) waas.current.style.opacity = (p * 0.55).toFixed(3);
      if (kop.current) {
        const k = kop.current,
          off = k.offsetHeight + (parseFloat(getComputedStyle(b).paddingTop) || 0) + 32,
          e = 1 - p;
        k.style.transform = "translate3d(0," + (-off * e * e * (3 - 2 * e)).toFixed(1) + "px,0)";
      }
    };
    const op = () => {
      if (!raf) raf = requestAnimationFrame(tik);
    };
    const rs = () => {
      zet();
      op();
    };
    zet();
    tik();
    window.addEventListener("scroll", op, {
      passive: true,
      capture: true
    });
    window.addEventListener("resize", rs);
    return () => {
      window.removeEventListener("scroll", op, true);
      window.removeEventListener("resize", rs);
      if (raf) cancelAnimationFrame(raf);
    };
  }, []);
  /* start/eind: alleen dat fragment van de film speelt, in een lus. */
  React.useEffect(() => {
    const v = filmRef.current;
    if (!v || terug || Array.isArray(film) || start == null && eind == null) return;
    const s = start || 0;
    /* Onzichtbaar tot de film echt op het startpunt staat, zodat het begin
       (met logo) nooit in beeld komt. */
    v.style.opacity = "0";
    const toon = () => {
      if (v.currentTime >= s - 0.05) v.style.opacity = "1";
    };
    const begin = () => {
      if (v.currentTime < s) v.currentTime = s;
    };
    const tik = () => {
      if (eind != null && v.currentTime >= eind || v.currentTime < s - 0.2) v.currentTime = s;else toon();
    };
    v.addEventListener("loadedmetadata", begin);
    v.addEventListener("timeupdate", tik);
    v.addEventListener("seeked", toon);
    if (v.readyState >= 1) begin();
    /* Waakhond: blijft de film hangen (gepauzeerd of geen voortgang), dan
       duwen we hem weer aan; na een paar pogingen laden we hem opnieuw vanaf
       de plek waar hij stond. */
    let vorige = -1,
      vast = 0;
    const t0 = Date.now();
    const hond = setInterval(() => {
      if (reserve && v.currentTime < s - 1 && Date.now() - t0 > 4500) {
        clearInterval(hond);
        setTerug(true);
        return;
      }
      if (document.hidden) return;
      const b = v.getBoundingClientRect();
      if (b.bottom < 0 || b.top > (window.innerHeight || 800)) return;
      if (v.paused) {
        const p = v.play();
        if (p && p.catch) p.catch(() => {});
      }
      /* Nog aan het bufferen (grote film): niet als vastgelopen tellen, anders
         start de download telkens opnieuw. */
      if (v.readyState < 3) {
        vast = 0;
        vorige = v.currentTime;
        return;
      }
      if (Math.abs(v.currentTime - vorige) < 0.01) {
        vast++;
        if (vast === 2) {
          try {
            v.currentTime = Math.max(s, v.currentTime + 0.25);
          } catch (e) {}
        }
        if (vast >= 4) {
          const t = v.currentTime;
          vast = 0;
          v.src = film + "#t=" + Math.max(s, t).toFixed(2);
          v.load();
          const p = v.play();
          if (p && p.catch) p.catch(() => {});
        }
      } else vast = 0;
      vorige = v.currentTime;
    }, 1500);
    return () => {
      clearInterval(hond);
      v.removeEventListener("loadedmetadata", begin);
      v.removeEventListener("timeupdate", tik);
      v.removeEventListener("seeked", toon);
    };
  }, [start, eind, terug]);
  const H = Woorden || "h1";
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative"
    }
  }, /*#__PURE__*/React.createElement("section", {
    ref: vak,
    className: "dolle-dark",
    style: {
      position: "sticky",
      top: "var(--cm-nav, 92px)",
      zIndex: 0,
      height: "calc(100svh - var(--cm-nav, 92px))",
      minHeight: 420,
      overflow: "hidden",
      background: "var(--dolle-navy)"
    }
  }, poster ? /*#__PURE__*/React.createElement("img", {
    src: poster,
    alt: "",
    "aria-hidden": "true",
    style: {
      position: "absolute",
      inset: 0,
      width: "100%",
      height: "100%",
      objectFit: "cover",
      display: "block"
    }
  }) : null, terug && reserve ? /*#__PURE__*/React.createElement("div", {
    ref: filmRef,
    style: {
      position: "absolute",
      inset: 0,
      willChange: "transform"
    }
  }, /*#__PURE__*/React.createElement(CMReeks, {
    films: reserve,
    poster: poster
  })) : Array.isArray(film) ? /*#__PURE__*/React.createElement("div", {
    ref: filmRef,
    style: {
      position: "absolute",
      inset: 0,
      willChange: "transform"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      inset: 0,
      transform: uitsnede ? "scale(" + uitsnede + ")" : undefined,
      transformOrigin: "0 0"
    }
  }, /*#__PURE__*/React.createElement(CMReeks, {
    films: film,
    poster: poster,
    duur: reeksDuur || 5.5
  }))) : /*#__PURE__*/React.createElement("video", {
    ref: filmRef,
    "data-film": "1",
    src: start != null ? film + "#t=" + start : film,
    poster: poster,
    autoPlay: true,
    muted: true,
    loop: true,
    playsInline: true,
    preload: "auto",
    style: {
      position: "absolute",
      ...filmMaat,
      objectFit: "cover",
      display: "block",
      willChange: "transform",
      transformOrigin: uitsnede ? rechts ? "100% 100%" : "0 100%" : undefined,
      transition: "opacity 400ms ease"
    }
  }), /*#__PURE__*/React.createElement("div", {
    ref: waas,
    "aria-hidden": "true",
    style: {
      position: "absolute",
      inset: 0,
      background: "var(--dolle-navy)",
      opacity: 0,
      pointerEvents: "none"
    }
  }), /*#__PURE__*/React.createElement("div", {
    "aria-hidden": "true",
    style: {
      position: "absolute",
      inset: 0,
      background: "linear-gradient(180deg, rgba(16,31,60,0.45) 0%, rgba(16,31,60,0) 22%, rgba(16,31,60,0) 48%, rgba(16,31,60,0.88) 100%)"
    }
  }), Knop ? /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: "var(--page-margin)",
      right: "var(--page-margin)",
      top: "clamp(88px,12vh,130px)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: "var(--content-max)",
      margin: "0 auto"
    }
  }, /*#__PURE__*/React.createElement(Knop, {
    size: "sm",
    variant: "secondary",
    onClick: () => go("cases"),
    style: {
      color: "var(--dolle-white)",
      borderColor: "transparent"
    }
  }, "All cases"))) : null), /*#__PURE__*/React.createElement("section", {
    ref: band,
    className: "dolle-dark",
    style: {
      position: "relative",
      zIndex: 1,
      background: "var(--dolle-navy)",
      padding: "var(--space-6) var(--page-margin) var(--space-6)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    ref: kop,
    style: {
      position: "relative",
      zIndex: 2,
      maxWidth: "var(--content-max)",
      margin: "0 auto var(--space-7)",
      willChange: "transform"
    }
  }, Woorden ? /*#__PURE__*/React.createElement(Woorden, {
    as: "h1",
    text: titel,
    style: {
      margin: 0,
      paddingBottom: "var(--space-4)",
      fontSize: "clamp(36px,5.4vw,84px)",
      lineHeight: 1.02,
      letterSpacing: "var(--track-heading)",
      color: "var(--dolle-white)"
    }
  }) : /*#__PURE__*/React.createElement("h1", {
    style: {
      margin: 0,
      paddingBottom: "var(--space-4)",
      fontSize: "clamp(36px,5.4vw,84px)",
      lineHeight: 1.02,
      color: "var(--dolle-white)"
    }
  }, titel), /*#__PURE__*/React.createElement("div", {
    style: {
      height: 1,
      background: "rgba(255,255,255,0.4)"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: "var(--space-2)",
      flexWrap: "wrap",
      paddingTop: "var(--space-4)"
    }
  }, tags.map((k, n) => /*#__PURE__*/React.createElement(Tag, {
    key: k
  }, window.CMVulIn ? /*#__PURE__*/React.createElement(window.CMVulIn, {
    vertraging: 250 + n * 160
  }, k) : k)))), children));
}

/* Intro: tekst links zakt met de scroll mee tot zijn onderkant gelijk ligt
   met die van het beeld rechts. */
function CMIntro({
  tekst,
  beeld
}) {
  /* Native sticky in plaats van per frame verschuiven: loopt zonder vertraging mee. */
  return /*#__PURE__*/React.createElement("div", {
    "data-cm-intro": "1",
    style: {
      maxWidth: "var(--content-max)",
      margin: "0 auto",
      display: "grid",
      gridTemplateColumns: "minmax(0,0.75fr) minmax(0,1.6fr)",
      gap: "calc(var(--grid-gap) * 1.1)",
      alignItems: "stretch"
    }
  }, /*#__PURE__*/React.createElement("style", null, "@media (max-width:860px){[data-cm-intro]{grid-template-columns:minmax(0,1fr) !important}[data-cm-intro]>div>div{position:static !important}}"), /*#__PURE__*/React.createElement("div", {
    style: {
      minWidth: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "sticky",
      top: "116px",
      maxWidth: "45ch",
      display: "grid",
      gap: "var(--space-4)"
    }
  }, tekst.map((z, i) => /*#__PURE__*/React.createElement("p", {
    key: i,
    className: "dolle-lead",
    style: {
      margin: 0
    }
  }, z)))), /*#__PURE__*/React.createElement("div", {
    style: {
      minWidth: 0,
      alignSelf: "start"
    }
  }, beeld));
}
Object.assign(window, {
  CMKop,
  CMIntro,
  CMData,
  CMTeller,
  CMVulIn,
  CMWildly,
  CMAccordeon,
  CMStapel,
  CMVulTekst,
  CMBlokken,
  CMPin,
  CMInScroll,
  CMScrollBeeld,
  CMBinnen,
  CMOpkomst,
  CMVerspring,
  useCMScroll,
  useCMBinnen,
  CMLijn,
  CMMasker,
  CMTekst,
  CMOpeningBeeld,
  CMPlak,
  CMStrook,
  CMRijen
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/CaseMotion.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/CaseMsoGroup.jsx
try { (() => {
const MSO_DS = window.DesignSystem_8f95a2;
const {
  Kicker: MKicker,
  Tag: MTag,
  Button: MButton
} = MSO_DS;
const MWords = window.Words || (({
  as = "span",
  text,
  style
}) => React.createElement(as, {
  style: style
}, text));
const MSO_VID = "../../assets/video/";
const MSO_BEELD = "../../assets/cases/mso/";
const MSO_KOLOMGAT = "calc(var(--grid-gap) * 1.1)";
const MSO_VLOEI = "1100ms cubic-bezier(.16,.84,.24,1)";
const MSO_INTRO = ["MSO Group unites Meuva, Schotte, Oranje and HSD in demolition, dismantling and offshore support, from refineries and power stations to offshore decommissioning. Long-running projects on sites few people ever see.", "Since 2024, DOLLE has captured those projects on location, filmed new innovations and flown certified drones in high-risk zones. Every production is cut for tenders, LinkedIn, the website and recruitment, backed by AI systems that speed up the work."];
/* Cijfers voor het datablok; een streepje tot het echte aantal binnen is. */
const MSO_DATA = [{
  label: "Views generated",
  waarde: 250,
  achter: "K+"
}, {
  label: "Projects documented",
  waarde: 12
}, {
  label: "Films delivered",
  waarde: 40
}, {
  label: "Drone flights",
  waarde: 60
}];
const MSO_WAT = [{
  nr: "01",
  kop: "Project documentation",
  tekst: "Long-term projects captured from start to finish, over weeks on site."
}, {
  nr: "02",
  kop: "Innovations",
  tekst: "MSO's own development team builds new machinery. DOLLE films each innovation at work."
}, {
  nr: "03",
  kop: "Certified drone operations",
  tekst: "Flights in restricted zones of the ports of Rotterdam and Vlissingen."
}, {
  nr: "04",
  kop: "Customized post-production",
  tekst: "Every shoot edited for tenders, LinkedIn, the website and recruitment."
}];

/* Zes projecten. Bestanden komen van de klant; tot die tijd blijven de kaders
   leeg met alleen de hoekmarkeringen. */
const MSO_PROJECTEN = [{
  naam: "GPO ship",
  meta: "Vlissingen · Documentation",
  kort: "A ship that crossed from New York to the port of Vlissingen, followed while its structure was rebuilt.",
  alinea: "After its crossing from New York, the GPO ship arrived in Vlissingen for heavy structural work: elements dismantled, removed and refitted to improve how it floats. DOLLE returned to site throughout the project, so the film shows the work as it progressed rather than a single day.",
  plek: "Vlissingen",
  soort: "Documentation",
  levering: "Project film, photography",
  loop: MSO_VID + "mso-gpo-loop.mp4",
  still: MSO_BEELD + "mso-gpo-3028-web.jpg",
  film: MSO_VID + "mso-gpo-film.mp4",
  stills: [{
    src: MSO_BEELD + "mso-gpo-2947-web.jpg",
    kader: "2 / 3"
  }, MSO_BEELD + "mso-gpo-3047-web.jpg", MSO_BEELD + "mso-gpo-2977-web.jpg"]
}, {
  naam: "HSD & Heerema",
  meta: "Vlissingen · Decommissioning",
  kort: "A drilling platform dismantled piece by piece in the port of Vlissingen, its parts prepared for reuse.",
  alinea: "Working alongside Heerema, HSD took apart a drilling platform in the port of Vlissingen. Each section was removed with care, so the parts could be put back to use instead of scrapped. DOLLE documented the dismantling over several shoots, on the ground and with the certified drone team, delivered as project films with graphics and sound.",
  plek: "Vlissingen",
  soort: "Decommissioning, drone",
  levering: "Project films, graphics",
  loop: MSO_VID + "mso-hsd-loop.mp4",
  still: MSO_BEELD + "mso-hsd-01-web.jpg",
  klein: MSO_BEELD + "mso-hsd-02-web.jpg",
  film: MSO_VID + "mso-hsd-film.mp4",
  stills: [MSO_BEELD + "mso-hsd-02-web.jpg", MSO_BEELD + "mso-hsd-04-web.jpg", MSO_BEELD + "mso-hsd-01-web.jpg"]
}, {
  naam: "Greenport",
  meta: "Rotterdam · Construction, demolition",
  kort: "The construction of a warehouse and the demolition of a large old crane on location.",
  alinea: "A collaboration between Greenport and MSO: the construction of a warehouse and the demolition of a large old crane on location. DOLLE followed both on site and edited it into a project film with graphics that explain the scope and sequence of the work, made to present the project to partners and in tenders.",
  plek: "Rotterdam",
  soort: "Construction, demolition",
  levering: "Project film, graphics",
  loop: MSO_VID + "mso-greenport-loop.mp4",
  still: MSO_BEELD + "mso-greenport-01-web.jpg",
  klein: MSO_BEELD + "mso-greenport-02-web.jpg",
  film: MSO_VID + "mso-greenport-film.mp4",
  stills: [MSO_BEELD + "mso-greenport-02-web.jpg", MSO_BEELD + "mso-greenport-04-web.jpg", MSO_BEELD + "mso-greenport-03-web.jpg"]
}, {
  naam: "Hydrostripper",
  meta: "Rotterdam · Innovation",
  kort: "A new method filmed at work, so clients see what it does before they commit to it.",
  alinea: "The Hydrostripper filmed in operation in Rotterdam, in film and photography. Clear footage of a technical process, made to explain the innovation to clients and partners.",
  plek: "Rotterdam",
  soort: "Innovation",
  levering: "Film, photography",
  loop: MSO_VID + "mso-hydrostripper-loop.mp4",
  still: MSO_BEELD + "mso-hydrostripper-01-web.jpg",
  klein: MSO_BEELD + "mso-hydrostripper-03-web.jpg",
  film: MSO_VID + "mso-hydrostripper-film.mp4",
  stills: [MSO_BEELD + "mso-hydrostripper-02-web.jpg", MSO_BEELD + "mso-hydrostripper-03-web.jpg", MSO_BEELD + "mso-hydrostripper-01-web.jpg"]
}];

/* Leeg kader met de twee hoekmarkeringen, tot het beeld er is. */
function MsoKader({
  kader,
  src,
  video,
  poster,
  spelen,
  vol,
  vullen
}) {
  const vid = React.useRef(null);
  React.useEffect(() => {
    const p = vid.current;
    if (!p || vol) return;
    p.muted = true;
    p.defaultMuted = true;
    const speel = () => {
      if (spelen && p.paused) p.play().catch(() => {});
    };
    if (spelen) speel();else {
      p.pause();
      p.currentTime = 0;
    }
    p.addEventListener("loadeddata", speel);
    p.addEventListener("canplay", speel);
    return () => {
      p.removeEventListener("loadeddata", speel);
      p.removeEventListener("canplay", speel);
    };
  }, [spelen, vol]);
  return /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      display: "block",
      aspectRatio: vullen ? "auto" : kader,
      height: vullen ? "100%" : undefined,
      width: vullen ? "100%" : undefined,
      overflow: "hidden",
      background: "#0a1428",
      minWidth: 0
    }
  }, src ? /*#__PURE__*/React.createElement("img", {
    src: src,
    alt: "",
    decoding: "async",
    style: {
      position: "absolute",
      inset: 0,
      width: "100%",
      height: "100%",
      objectFit: "cover",
      display: "block"
    }
  }) : null, video ? /*#__PURE__*/React.createElement("video", {
    ref: vid,
    src: video,
    muted: !vol,
    loop: !vol,
    controls: !!vol,
    autoPlay: !vol && !!spelen,
    playsInline: true,
    preload: !vol && spelen ? "metadata" : "none",
    poster: poster || undefined,
    style: {
      position: "absolute",
      inset: 0,
      width: "100%",
      height: "100%",
      objectFit: "cover",
      display: "block"
    }
  }) : null, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      left: "8%",
      top: "10%",
      color: "var(--dolle-white)",
      opacity: src || video ? 0 : 0.9
    }
  }, /*#__PURE__*/React.createElement("svg", {
    "aria-hidden": "true",
    viewBox: "0 0 52 52",
    width: "20",
    height: "20",
    fill: "none",
    style: {
      display: "block"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M6 40 V6 H40",
    stroke: "currentColor",
    strokeWidth: "12"
  }))), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      right: "8%",
      bottom: "10%",
      color: "var(--dolle-white)",
      opacity: src || video ? 0 : 0.9
    }
  }, /*#__PURE__*/React.createElement("svg", {
    "aria-hidden": "true",
    viewBox: "0 0 52 52",
    width: "20",
    height: "20",
    fill: "none",
    style: {
      display: "block"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M46 12 V46 H12",
    stroke: "currentColor",
    strokeWidth: "12"
  }))));
}
const MSO_WOORDEN = ["Visible", "Ahead", "Forward", "Driven"];
function MsoWat({
  aan,
  setAan,
  onKies
}) {
  const [vast, setVast] = React.useState(false);
  const reduce = typeof window !== "undefined" && window.matchMedia ? window.matchMedia("(prefers-reduced-motion: reduce)").matches : false;
  React.useEffect(() => {
    if (reduce || vast) return;
    const t = setInterval(() => setAan(i => (i + 1) % MSO_WAT.length), 3400);
    return () => clearInterval(t);
  }, [reduce, vast]);
  return /*#__PURE__*/React.createElement("div", {
    "data-mso-wat": "1",
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(4,minmax(0,1fr))",
      gap: "var(--grid-gap)"
    }
  }, MSO_WAT.map((w, i) => {
    const actief = aan === i;
    return /*#__PURE__*/React.createElement("div", {
      key: w.nr,
      role: "button",
      tabIndex: 0,
      onClick: () => onKies && onKies(i),
      onKeyDown: e => {
        if (e.key === "Enter" && onKies) onKies(i);
      },
      onMouseEnter: () => {
        setVast(true);
        setAan(i);
      },
      onMouseLeave: () => setVast(false),
      style: {
        display: "grid",
        gap: "var(--space-4)",
        alignContent: "start",
        cursor: "pointer"
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        position: "relative",
        height: 1,
        background: "var(--border-hairline, rgba(255,255,255,0.16))"
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        position: "absolute",
        left: 0,
        top: -1,
        height: 2,
        background: "var(--dolle-white)",
        width: "100%",
        transformOrigin: "left center",
        transform: actief ? "scaleX(1)" : "scaleX(0)",
        transition: "transform 700ms var(--ease-dolle)"
      }
    })), /*#__PURE__*/React.createElement(MKicker, {
      as: "span",
      size: "sm",
      style: {
        whiteSpace: "nowrap",
        color: actief ? "var(--dolle-white)" : "rgba(255,255,255,0.62)"
      }
    }, w.nr), /*#__PURE__*/React.createElement("h3", {
      style: {
        margin: 0,
        fontFamily: "var(--font-core)",
        fontWeight: "var(--weight-heading)",
        fontSize: "clamp(19px,1.7vw,26px)",
        lineHeight: 1.2,
        letterSpacing: "var(--track-heading)",
        color: actief ? "var(--dolle-white)" : "rgba(255,255,255,0.62)",
        transition: "color var(--dur-ui) var(--ease-dolle)",
        textWrap: "balance"
      }
    }, w.kop), /*#__PURE__*/React.createElement("p", {
      style: {
        margin: 0,
        fontSize: "var(--size-body)",
        lineHeight: "var(--lh-body)",
        color: "var(--text-body)",
        opacity: actief ? 1 : 0,
        transform: actief ? "translateY(0)" : "translateY(8px)",
        transition: "opacity var(--dur-frame) var(--ease-dolle), transform var(--dur-frame) var(--ease-dolle)"
      }
    }, w.tekst));
  }));
}

/* start/eind: het fragment zonder logo-intro en -outro. Zonder eind stopt
   hij 3,5 seconde voor het einde. */
const MSO_SHORTS = [{
  video: MSO_VID + "mso-short-01-16x9.mp4",
  ratio: 16 / 9,
  start: 2.5,
  eind: 15.5
}, {
  video: MSO_VID + "mso-short-02-9x16.mp4",
  ratio: 9 / 16,
  start: 3
}, {
  video: MSO_VID + "mso-short-03-16x9.mp4",
  ratio: 16 / 9,
  start: 4.5,
  eind: 23.4
}, {
  video: MSO_VID + "mso-short-04-9x16.mp4",
  ratio: 9 / 16,
  start: 3
}];
function msoFragment(el, s) {
  if (!el || el.dataset.frag) return;
  el.dataset.frag = "1";
  el.muted = true;
  el.defaultMuted = true;
  el.style.opacity = "0";
  el.style.transition = "opacity 400ms ease";
  const eind = () => s.eind != null ? s.eind : el.duration ? el.duration - 3.5 : 1e9;
  const toon = () => {
    if (el.currentTime >= s.start - 0.05) el.style.opacity = "1";
  };
  el.addEventListener("loadedmetadata", () => {
    if (el.currentTime < s.start) el.currentTime = s.start;
  });
  el.addEventListener("seeked", toon);
  el.addEventListener("timeupdate", () => {
    if (el.currentTime >= eind() || el.currentTime < s.start - 0.2) el.currentTime = s.start;else toon();
  });
  if (el.readyState >= 1 && el.currentTime < s.start) el.currentTime = s.start;
}

/* Doorlopende band van loops, zoals de andere carrousels: rustig naar links,
   stil bij hover of reduced motion. */
function MsoShorts() {
  /* Loopt vanzelf naar links, maar is ook te swipen, slepen of met het
     trackpad te scrollen. Na een interactie pakt hij na even het tempo weer op. */
  const band = React.useRef(null);
  React.useEffect(() => {
    const el = band.current;
    if (!el) return;
    const reduce = window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    let vorige = performance.now(),
      raf,
      rustTot = 0,
      x = el.scrollLeft,
      neer = false,
      x0 = 0,
      s0 = 0,
      bewogen = false;
    const rust = ms => {
      rustTot = performance.now() + (ms || 1800);
    };
    const tik = nu => {
      const dt = Math.min(64, nu - vorige);
      vorige = nu;
      const helft = el.scrollWidth / 2;
      if (!reduce && !neer && nu > rustTot && helft > 0) {
        x += dt * 0.035;
        if (x >= helft) x -= helft;
        el.scrollLeft = x;
      } else {
        x = el.scrollLeft;
        if (helft > 0 && x >= helft) {
          x -= helft;
          el.scrollLeft = x;
        }
        if (x <= 0 && helft > 0) {
          x += helft;
          el.scrollLeft = x;
        }
      }
      raf = requestAnimationFrame(tik);
    };
    const down = e => {
      if (e.pointerType !== "mouse") return;
      neer = true;
      bewogen = false;
      x0 = e.clientX;
      s0 = el.scrollLeft;
      el.style.cursor = "grabbing";
    };
    const move = e => {
      if (!neer) return;
      const dx = e.clientX - x0;
      if (Math.abs(dx) > 3) bewogen = true;
      el.scrollLeft = s0 - dx;
    };
    const up = () => {
      if (!neer) return;
      neer = false;
      el.style.cursor = "grab";
      rust();
    };
    const klik = e => {
      if (bewogen) {
        e.preventDefault();
        e.stopPropagation();
      }
    };
    const weg = () => rust();
    el.addEventListener("pointerdown", down);
    window.addEventListener("pointermove", move);
    window.addEventListener("pointerup", up);
    el.addEventListener("click", klik, true);
    el.addEventListener("wheel", weg, {
      passive: true
    });
    el.addEventListener("touchstart", weg, {
      passive: true
    });
    el.addEventListener("touchmove", weg, {
      passive: true
    });
    el.addEventListener("mouseenter", () => rust(1e9));
    el.addEventListener("mouseleave", () => rust(600));
    raf = requestAnimationFrame(tik);
    return () => {
      cancelAnimationFrame(raf);
      el.removeEventListener("pointerdown", down);
      window.removeEventListener("pointermove", move);
      window.removeEventListener("pointerup", up);
      el.removeEventListener("click", klik, true);
    };
  }, []);
  const hoog = "clamp(240px,30vw,420px)";
  const reeks = MSO_SHORTS.concat(MSO_SHORTS);
  return /*#__PURE__*/React.createElement("div", {
    ref: band,
    className: "mso-band",
    style: {
      overflowX: "auto",
      overflowY: "hidden",
      width: "100%",
      cursor: "grab",
      scrollbarWidth: "none",
      WebkitOverflowScrolling: "touch",
      overscrollBehaviorX: "contain"
    }
  }, /*#__PURE__*/React.createElement("style", null, ".mso-band::-webkit-scrollbar{display:none}"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: "var(--space-3)",
      width: "max-content"
    }
  }, reeks.map((s, i) => /*#__PURE__*/React.createElement("span", {
    key: i,
    style: {
      flex: "0 0 auto",
      height: hoog,
      aspectRatio: String(s.ratio),
      overflow: "hidden",
      background: "#0a1428",
      borderRadius: 5
    }
  }, /*#__PURE__*/React.createElement("video", {
    src: s.video + "#t=" + s.start,
    autoPlay: true,
    muted: true,
    loop: true,
    playsInline: true,
    preload: "metadata",
    draggable: "false",
    ref: el => msoFragment(el, s),
    style: {
      display: "block",
      width: "100%",
      height: "100%",
      objectFit: "cover",
      pointerEvents: "none"
    }
  })))));
}
function MsoDienstKop({
  dienst,
  woord,
  wissel
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "baseline",
      gap: "var(--space-6)",
      flexWrap: "wrap"
    }
  }, /*#__PURE__*/React.createElement(MKicker, {
    style: {
      display: "block",
      whiteSpace: "nowrap",
      color: "var(--text-muted)"
    }
  }, dienst), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-core)",
      fontWeight: "var(--weight-heading)",
      fontSize: "clamp(18px,2.2vw,30px)",
      letterSpacing: "var(--track-wildly)",
      textTransform: "uppercase",
      color: "var(--text-heading)",
      whiteSpace: "nowrap"
    }
  }, "Wildly ", /*#__PURE__*/React.createElement("span", {
    style: {
      display: "inline-block",
      overflow: "hidden",
      verticalAlign: "bottom"
    }
  }, /*#__PURE__*/React.createElement("span", {
    key: wissel ? woord : undefined,
    style: {
      display: "inline-block",
      color: "var(--text-accent)",
      animation: wissel ? "dolle-woord-in 520ms var(--ease-dolle)" : "none"
    }
  }, woord))));
}

/* Eén rij uit het register: beeld links, tekst rechts, VIEW uiterst rechts.
   Open verschijnt de projectsheet. */
/* Per rij een andere verhouding, breedte en verspringing, zodat het register
   niet als een raster leest. */
const MSO_RITME = [{
  loop: 16 / 9,
  still: 4 / 5,
  eerst: "loop",
  x: "0%"
}, {
  loop: 3 / 2,
  still: 3 / 4,
  eerst: "still",
  x: "0%"
}, {
  loop: 2 / 1,
  still: 3 / 4,
  eerst: "loop",
  x: "0%"
}, {
  loop: 4 / 3,
  still: 2 / 3,
  eerst: "still",
  x: "0%"
}];
const MSO_H = "clamp(150px,13vw,210px)";
function MsoMaat(ref, dep) {
  const [h, setH] = React.useState(0);
  React.useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const meet = () => setH(el.scrollHeight);
    meet();
    if (typeof ResizeObserver === "undefined") return;
    const kijk = new ResizeObserver(meet);
    kijk.observe(el);
    return () => kijk.disconnect();
  }, [dep]);
  return h;
}

/* Eén beweging, zoals op /cases: de loop groeit uit tot de film, de still
   wijkt, de tekstkolom schuift mee en alinea, metadata en stills vouwen open.
   Sluiten loopt langs precies dezelfde weg terug. */
function MsoRegisterRij({
  p,
  nr,
  open,
  onToggle,
  anker,
  plek
}) {
  const V = MSO_RITME[(plek || 0) % MSO_RITME.length];
  const extra = React.useRef(null);
  const strook = React.useRef(null);
  const hExtra = MsoMaat(extra, open);
  const hStrook = MsoMaat(strook, open);
  const [film, setFilm] = React.useState(false);
  /* Reveal zoals de rijen op /cases: beeld schuift van links binnen achter een
     masker, naam en blokken vullen van links, de tekst komt omhoog. */
  const rijEl = React.useRef(null);
  const [binnen, setBinnen] = React.useState(false);
  React.useEffect(() => {
    if (window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setBinnen(true);
      return;
    }
    let raf = 0,
      klaar = false;
    const tik = () => {
      raf = 0;
      const el = rijEl.current;
      if (klaar || !el) return;
      if (el.getBoundingClientRect().top < (window.innerHeight || 800) * 0.82) {
        klaar = true;
        setBinnen(true);
        weg();
      }
    };
    const op = () => {
      if (!raf) raf = requestAnimationFrame(tik);
    };
    const weg = () => {
      window.removeEventListener("scroll", op, true);
      window.removeEventListener("resize", op);
    };
    window.addEventListener("scroll", op, {
      passive: true,
      capture: true
    });
    window.addEventListener("resize", op);
    tik();
    const t = setTimeout(tik, 400);
    return () => {
      weg();
      clearTimeout(t);
      if (raf) cancelAnimationFrame(raf);
    };
  }, []);
  const vul = n => ({
    display: "block",
    clipPath: binnen ? "inset(-4px -2px -4px 0)" : "inset(-4px 100% -4px 0)",
    transition: "clip-path 900ms cubic-bezier(.65,0,.25,1) " + n + "ms"
  });
  const blokken = (p.meta || "").split(" · ");
  React.useEffect(() => {
    if (!open) {
      setFilm(false);
      return;
    }
    const t = setTimeout(() => setFilm(true), 700);
    return () => clearTimeout(t);
  }, [open]);
  /* Zoals lama lama: één hoogte per rij, breedte volgt de verhouding, de strook
     begint per rij op een andere plek. Nummer, knop en tekst staan in elke rij
     op dezelfde plek. Open groeit de loop (containerbreedte) uit tot de film. */
  /* Eén hoogte voor alle rijen: afgestemd op de rij die de meeste ruimte vraagt. */
  const nodig = Math.max(...MSO_RITME.map(r => (r.loop + r.still) / (1 - parseFloat(r.x) / 100)));
  const hRij = "min(" + MSO_H + ", calc((100cqw - 16px) / " + nodig.toFixed(4) + "))";
  const kolommen = open ? "minmax(0,2.6fr) minmax(0,0.2fr) minmax(0,0.55fr) minmax(0,1.9fr)" : "minmax(0,2.5fr) minmax(0,0.3fr) minmax(0,0.7fr) minmax(0,2.1fr)";
  const vouw = (h, vertraging) => ({
    overflow: "hidden",
    maxHeight: open ? h ? h + "px" : "1200px" : "0px",
    opacity: open ? 1 : 0,
    transform: open ? "translate3d(0,0,0)" : "translate3d(0,16px,0)",
    transition: "max-height " + MSO_VLOEI + ", opacity " + (open ? 640 : 240) + "ms var(--ease-dolle) " + (open ? vertraging : 0) + "ms, transform " + MSO_VLOEI
  });
  const loopVak = /*#__PURE__*/React.createElement("span", {
    key: "loop",
    onClick: open ? e => e.stopPropagation() : undefined,
    style: {
      position: "relative",
      flex: "0 0 auto",
      display: "block",
      overflow: "hidden",
      borderRadius: 5,
      width: open ? "100cqw" : "calc(" + hRij + " * " + V.loop.toFixed(4) + ")",
      height: open ? "56.25cqw" : hRij,
      transition: "width " + MSO_VLOEI + ", height " + MSO_VLOEI
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      inset: 0,
      display: "block"
    }
  }, /*#__PURE__*/React.createElement(MsoKader, {
    kader: "auto",
    video: p.loop,
    poster: p.still,
    spelen: !film,
    vol: false,
    vullen: true
  })), window.CaseFilm && film ? /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      inset: 0,
      display: "block"
    }
  }, /*#__PURE__*/React.createElement(window.CaseFilm, {
    key: p.naam + "-film",
    bron: p.film || undefined,
    poster: p.still || undefined,
    watch: true
  })) : null);
  const stillVak = /*#__PURE__*/React.createElement("span", {
    key: "still",
    style: {
      position: "relative",
      flex: "0 0 auto",
      display: "block",
      overflow: "hidden",
      borderRadius: 5,
      width: open ? "0px" : "calc(" + hRij + " * " + V.still.toFixed(4) + ")",
      height: open ? "0px" : hRij,
      opacity: open ? 0 : 1,
      transition: "width " + MSO_VLOEI + ", height " + MSO_VLOEI + ", opacity " + (open ? 360 : 700) + "ms var(--ease-dolle)"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      inset: 0,
      display: "block"
    }
  }, /*#__PURE__*/React.createElement(MsoKader, {
    kader: "auto",
    src: p.klein || p.still,
    vullen: true
  })));
  const media = /*#__PURE__*/React.createElement("div", {
    style: {
      containerType: "inline-size",
      minWidth: 0,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "flex-start",
      gap: open ? 0 : "var(--space-3)",
      paddingLeft: open ? "0%" : V.x,
      clipPath: binnen ? "inset(0 0 0 0)" : "inset(0 100% 0 0)",
      transform: binnen ? "translate3d(0,0,0)" : "translate3d(-48px,0,0)",
      transition: "padding-left " + MSO_VLOEI + ", gap " + MSO_VLOEI + ", clip-path 1200ms cubic-bezier(.65,0,.25,1), transform 1400ms cubic-bezier(.16,.84,.24,1)"
    }
  }, V.eerst === "still" ? [stillVak, loopVak] : [loopVak, stillVak]), /*#__PURE__*/React.createElement("div", {
    style: vouw(hStrook, 380),
    onClick: e => e.stopPropagation()
  }, /*#__PURE__*/React.createElement("div", {
    ref: strook,
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(" + p.stills.length + ",minmax(0,1fr))",
      gap: "var(--space-3)",
      paddingTop: "var(--space-3)",
      cursor: "default"
    }
  }, p.stills.map((s, i) => {
    const it = s && typeof s === "object" ? s : {
      src: s,
      kader: "3 / 2"
    };
    return /*#__PURE__*/React.createElement("span", {
      key: i,
      style: {
        display: "block",
        minWidth: 0,
        opacity: open ? 1 : 0,
        transform: open ? "translate3d(0,0,0)" : "translate3d(-40px,0,0)",
        transition: "opacity 700ms var(--ease-dolle) " + (open ? 420 + i * 70 : 0) + "ms, transform 900ms var(--ease-dolle) " + (open ? 420 + i * 70 : 0) + "ms"
      }
    }, /*#__PURE__*/React.createElement(MsoKader, {
      kader: it.kader === "2 / 3" ? "3 / 2" : it.kader,
      src: it.src
    }));
  }))));
  return /*#__PURE__*/React.createElement("div", {
    ref: rijEl,
    id: anker,
    onClick: onToggle,
    style: {
      cursor: "pointer",
      backgroundImage: "linear-gradient(rgba(255,255,255,0.24), rgba(255,255,255,0.24))",
      backgroundRepeat: "no-repeat",
      backgroundPosition: "0 0",
      backgroundSize: "var(--lijn, 0%) 1px",
      padding: "var(--space-4) 0"
    }
  }, /*#__PURE__*/React.createElement("div", {
    "data-mso-rij": "1",
    style: {
      display: "grid",
      gridTemplateColumns: kolommen,
      gap: "var(--grid-gap)",
      alignItems: "start",
      transition: "grid-template-columns " + MSO_VLOEI
    }
  }, media, /*#__PURE__*/React.createElement(MKicker, {
    as: "span",
    size: "sm",
    style: {
      whiteSpace: "nowrap",
      color: "var(--text-muted)",
      opacity: binnen ? 1 : 0,
      transition: "opacity 700ms var(--ease-dolle) 200ms"
    }
  }, nr), /*#__PURE__*/React.createElement("span", {
    onClick: e => {
      e.stopPropagation();
      onToggle();
    },
    style: {
      opacity: binnen ? 1 : 0,
      transition: "opacity 700ms var(--ease-dolle) 300ms"
    }
  }, /*#__PURE__*/React.createElement(MButton, {
    size: "sm",
    variant: "secondary",
    "aria-expanded": open,
    style: {
      color: "var(--dolle-white)",
      borderColor: "transparent"
    }
  }, open ? "Close" : "View")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gap: "var(--space-2)",
      minWidth: 0
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: "block",
      fontFamily: "var(--font-core)",
      fontWeight: "var(--weight-heading)",
      fontSize: "clamp(18px,1.9vw,28px)",
      letterSpacing: "var(--track-heading)",
      color: "var(--dolle-white)"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: vul(0)
  }, p.naam)), /*#__PURE__*/React.createElement("span", {
    style: {
      display: "flex",
      gap: "var(--space-2)",
      flexWrap: "wrap"
    }
  }, blokken.map((k, n) => /*#__PURE__*/React.createElement("span", {
    key: k,
    style: {
      position: "relative",
      display: "block",
      whiteSpace: "nowrap",
      background: "#0b1730",
      padding: "7px 10px 6px",
      fontFamily: "var(--font-label)",
      fontWeight: "var(--weight-label)",
      fontSize: "var(--size-label-sm)",
      letterSpacing: "var(--track-label-wide)",
      textTransform: "uppercase",
      color: "var(--text-body)"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: vul(160 + n * 140)
  }, k)))), /*#__PURE__*/React.createElement("span", {
    style: {
      display: "block",
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontSize: "var(--size-body)",
      lineHeight: "var(--lh-body)",
      maxWidth: "45ch",
      transform: binnen ? "translate3d(0,0,0)" : "translate3d(0,100%,0)",
      opacity: binnen ? 1 : 0,
      transition: "transform 1000ms cubic-bezier(.16,.84,.24,1) 380ms, opacity 700ms ease 380ms"
    }
  }, p.kort)), /*#__PURE__*/React.createElement("div", {
    style: vouw(hExtra, 260),
    onClick: e => e.stopPropagation()
  }, /*#__PURE__*/React.createElement("div", {
    ref: extra,
    style: {
      display: "grid",
      gap: "var(--space-5)",
      paddingTop: "var(--space-4)",
      cursor: "default"
    }
  }, /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontSize: "var(--size-body)",
      lineHeight: "var(--lh-body)"
    }
  }, p.alinea), /*#__PURE__*/React.createElement("dl", {
    style: {
      margin: 0,
      display: "grid"
    }
  }, [["Location", p.plek], ["Type", p.soort], ["Delivered", p.levering]].map(([k, w]) => /*#__PURE__*/React.createElement("div", {
    key: k,
    style: {
      display: "grid",
      gridTemplateColumns: "minmax(0,0.8fr) minmax(0,1.6fr)",
      gap: "var(--space-4)",
      borderTop: "1px solid var(--white-16, rgba(255,255,255,0.16))",
      padding: "var(--space-3) 0"
    }
  }, /*#__PURE__*/React.createElement("dt", {
    style: {
      margin: 0
    }
  }, /*#__PURE__*/React.createElement(MKicker, {
    as: "span",
    size: "sm",
    style: {
      whiteSpace: "nowrap",
      color: "var(--text-muted)"
    }
  }, k)), /*#__PURE__*/React.createElement("dd", {
    style: {
      margin: 0
    }
  }, /*#__PURE__*/React.createElement(MKicker, {
    as: "span",
    size: "sm",
    style: {
      color: "var(--dolle-white)"
    }
  }, w))))))))));
}
function CaseMsoGroup({
  go
}) {
  const Film = window.CaseFilm;
  const Rij = window.CaseRij;
  const Haarlijn = window.Haarlijn;
  const [open, setOpen] = React.useState(-1);
  const [rij, setRij] = React.useState(-1);
  const [watAan, setWatAan] = React.useState(0);
  React.useEffect(() => {
    const zet = () => {
      const h = document.querySelector("header");
      document.documentElement.style.setProperty("--mso-nav", (h && h.offsetHeight || 92) + "px");
    };
    zet();
    window.addEventListener("resize", zet);
    return () => window.removeEventListener("resize", zet);
  }, []);
  const naar = (id, extra) => {
    const el = document.getElementById(id);
    if (!el) return;
    const nav = 110;
    window.scrollTo({
      top: el.getBoundingClientRect().top + window.scrollY - nav - (extra || 0),
      behavior: "smooth"
    });
  };
  const kies = i => {
    const plek = naam => MSO_PROJECTEN.findIndex(p => p.naam === naam);
    if (i === 0) {
      naar("mso-projects");
      return;
    }
    if (i === 3) {
      naar("mso-shorts");
      return;
    }
    const r = plek(i === 1 ? "Hydrostripper" : "GPO ship");
    setRij(r);
    /* Eerst openklappen, dan naar de rij toe schuiven. */
    setTimeout(() => naar("mso-rij-" + r), 60);
  };
  const namen = ["Piet Klerkx", "Veteranen Search Team", "Kiela", "Dalton Medical"];
  const verwant = namen.map(n => (window.CASES || []).find(c => c.klant === n)).filter(Boolean);
  if (!Film) return null;
  const sectie = {
    background: "var(--dolle-navy)",
    color: "var(--text-body)",
    padding: "var(--space-6) var(--page-margin)"
  };
  const binnen = {
    maxWidth: "var(--content-max)",
    margin: "0 auto",
    display: "grid",
    gap: "var(--space-5)"
  };
  const naad = {
    backgroundImage: "linear-gradient(rgba(255,255,255,0.24), rgba(255,255,255,0.24))",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "0 0",
    backgroundSize: "var(--lijn, 0%) 1px",
    paddingTop: "var(--space-6)"
  };
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("style", null, "@media (max-width:860px){[data-mso-rij]{grid-template-columns:minmax(0,1fr) minmax(0,1fr) !important}[data-mso-rij]>div{grid-column:1/-1 !important}[data-mso-rij]>span:last-child{grid-column:1/-1 !important;justify-self:start !important}[data-mso-sheet]{grid-template-columns:minmax(0,1fr) !important}[data-mso-opening]{grid-template-columns:minmax(0,1fr) !important}[data-mso-wat]{grid-template-columns:repeat(2,minmax(0,1fr)) !important}}"), window.CMKop ? /*#__PURE__*/React.createElement(window.CMKop, {
    titel: "MSO Group",
    tags: ["Media production", "AI systems", "Growth"],
    film: MSO_VID + "mso-short-03-16x9.mp4",
    start: 4.5,
    eind: 23.4,
    poster: MSO_BEELD + "mso-gpo-3028-web.jpg",
    go: go,
    Knop: MButton,
    Woorden: window.Words ? MWords : null,
    Tag: window.DolleTag || MTag
  }, window.CMIntro ? /*#__PURE__*/React.createElement(window.CMIntro, {
    tekst: MSO_INTRO,
    beeld: window.CMOpeningBeeld ? /*#__PURE__*/React.createElement(window.CMOpeningBeeld, {
      modus: "groei",
      start: 0.3,
      ratio: "3 / 2",
      src: MSO_BEELD + "mso-hsd-04-web.jpg"
    }) : /*#__PURE__*/React.createElement(MsoKader, {
      kader: "3 / 2",
      src: MSO_BEELD + "mso-hsd-04-web.jpg"
    })
  }) : null) : null, /*#__PURE__*/React.createElement("section", {
    id: "mso-shorts",
    className: "dolle-dark",
    style: sectie
  }, /*#__PURE__*/React.createElement("div", {
    style: binnen
  }, /*#__PURE__*/React.createElement(MsoShorts, null))), /*#__PURE__*/React.createElement("section", {
    className: "dolle-dark",
    style: sectie
  }, /*#__PURE__*/React.createElement("div", {
    style: binnen
  }, window.CMLijn ? /*#__PURE__*/React.createElement(window.CMLijn, null) : null, /*#__PURE__*/React.createElement(MsoDienstKop, {
    dienst: "WHAT WE CAPTURE",
    woord: MSO_WOORDEN[watAan],
    wissel: true
  }))), /*#__PURE__*/React.createElement("section", {
    className: "dolle-dark",
    style: {
      ...sectie,
      padding: "var(--space-5) var(--page-margin) var(--space-9)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      ...binnen,
      gap: "var(--space-7)"
    }
  }, /*#__PURE__*/React.createElement(MsoWat, {
    aan: watAan,
    setAan: setWatAan,
    onKies: kies
  }))), /*#__PURE__*/React.createElement("section", {
    className: "dolle-dark",
    style: {
      ...sectie,
      paddingBottom: "var(--space-5)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: binnen
  }, /*#__PURE__*/React.createElement(MKicker, {
    id: "mso-projects",
    style: {
      display: "block",
      whiteSpace: "nowrap",
      color: "var(--text-muted)"
    }
  }, "Projects"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid"
    }
  }, MSO_PROJECTEN.map((p, i) => /*#__PURE__*/React.createElement(React.Fragment, {
    key: p.naam
  }, window.CMLijn ? /*#__PURE__*/React.createElement(window.CMLijn, {
    basis: true,
    blijf: true
  }) : null, /*#__PURE__*/React.createElement(MsoRegisterRij, {
    plek: i,
    anker: "mso-rij-" + i,
    p: p,
    nr: "0" + (i + 1),
    open: rij === i,
    onToggle: () => setRij(rij === i ? -1 : i)
  }))), window.CMLijn ? /*#__PURE__*/React.createElement(window.CMLijn, {
    basis: true,
    blijf: true
  }) : null))), /*#__PURE__*/React.createElement("section", {
    className: "dolle-dark",
    style: {
      ...sectie,
      paddingTop: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: binnen
  }, /*#__PURE__*/React.createElement(MsoDienstKop, {
    dienst: "AI SYSTEMS",
    woord: "Ahead"
  }), window.CMLijn ? /*#__PURE__*/React.createElement(window.CMLijn, {
    basis: true,
    blijf: true
  }) : null, /*#__PURE__*/React.createElement("div", {
    "data-mso-ai": "1",
    style: {
      display: "grid",
      gridTemplateColumns: "minmax(0,0.75fr) minmax(0,1.6fr)",
      gap: MSO_KOLOMGAT,
      alignItems: "start"
    }
  }, /*#__PURE__*/React.createElement("style", null, "@media (max-width:860px){[data-mso-ai]{grid-template-columns:minmax(0,1fr) !important}[data-mso-ai]>div:first-of-type{position:static !important}}"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gap: "var(--space-3)",
      justifyItems: "start",
      maxWidth: "45ch",
      alignSelf: "start",
      position: "sticky",
      top: "calc(var(--mso-nav, 92px) + 24px)"
    }
  }, /*#__PURE__*/React.createElement("h2", {
    style: {
      margin: 0,
      fontFamily: "var(--font-core)",
      fontWeight: "var(--weight-heading)",
      fontSize: "clamp(19px,2vw,27px)",
      letterSpacing: "var(--track-heading)",
      color: "var(--text-heading)"
    }
  }, "AI systems"), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontSize: "var(--size-body)",
      lineHeight: "var(--lh-body)"
    }
  }, "DOLLE builds the AI systems MSO uses to present its work. Templates, pitch decks and project files run on one design system, so every piece is on brand, ready in a fraction of the time and puts the group in front of more clients.")), /*#__PURE__*/React.createElement(MsoKader, {
    kader: "1600 / 1068",
    src: MSO_BEELD + "mso-ai-design-web.jpg"
  })))), window.CMData ? /*#__PURE__*/React.createElement(window.CMData, {
    kop: "Deliverables",
    beeld: MSO_BEELD + "mso-gpo-3028-web.jpg",
    waas: 0.42,
    cijfers: MSO_DATA,
    Tag: window.DolleTag || MTag,
    review: {
      tekst: "DOLLE has been part of our projects since 2024 and knows how we work on site. They move safely around heavy operations, fly where few are allowed and turn weeks of work into films we use in every tender and on every channel. Reliable, sharp and always ahead of what we need.",
      naam: "Name",
      rol: "Marketing, MSO Group"
    },
    tags: ["Direction", "Production", "Edit", "Photography", "Certified drone", "AI systems"]
  }) : null, /*#__PURE__*/React.createElement("section", {
    className: "dolle-dark",
    style: {
      background: "var(--dolle-navy)",
      padding: "var(--space-6) var(--page-margin)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: "var(--content-max)",
      margin: "0 auto",
      display: "grid",
      gap: "var(--space-4)",
      gridTemplateColumns: "minmax(0,1fr)"
    }
  }, /*#__PURE__*/React.createElement(MKicker, {
    style: {
      display: "block",
      whiteSpace: "nowrap",
      color: "var(--text-muted)"
    }
  }, "Related work"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "minmax(0,1fr)"
    }
  }, Rij ? verwant.map((c, i) => /*#__PURE__*/React.createElement(Rij, {
    key: c.id,
    c: c,
    i: i,
    go: go,
    open: open === c.id,
    onToggle: () => setOpen(open === c.id ? -1 : c.id)
  })) : null, Haarlijn ? /*#__PURE__*/React.createElement(Haarlijn, null) : null))), window.HomeConversie ? /*#__PURE__*/React.createElement(window.HomeConversie, {
    go: go,
    tone: "dark"
  }) : null);
}
window.CaseMsoGroup = CaseMsoGroup;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/CaseMsoGroup.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/CasePietKlerkx.jsx
try { (() => {
const PK_DS = window.DesignSystem_8f95a2;
const {
  Kicker: PKKicker,
  Icon: PKIcon,
  Button: PKButton
} = PK_DS;
const {
  Words: PKWords,
  DolleTag: PKTag
} = window;

/* CASE DETAIL · PIET KLERKX · EXTENDED-variant.
   Opbouw: opening met tekst en twee stills, de commercial met de cutdowns per
   doelgroep, de winkelfilm-stills, collectiecampagnes met reels, de
   samenwerking met Monique (Modern Oasis), de company events met kickoff-beeld
   en tot slot de blokken zonder beeld, deliverables en verwant werk. */

const PK = "../../assets/cases/pietklerkx/";
const PK_VID = "../../assets/video/";
const PK_KOLOMGAT = "var(--space-5)";
const PK_HERO = PK + "pk-hero-dining-web.jpg";
const PK_HERO_2 = PK + "pk-still-05-web.jpg";

/* Cutdowns van de commercial, per doelgroep en per kanaalformaat. */
const PK_CUTDOWNS = [{
  video: PK_VID + "pietklerkx-45sec-9x16.mp4",
  label: "Commercial · 9:16",
  terug: PK + "pk-still-08-web.jpg"
}, {
  src: PK + "pk-still-01-web.jpg",
  label: "Still · 9:16"
}, {
  video: PK_VID + "pietklerkx-gezin-9x16.mp4",
  label: "Family · 9:16",
  terug: PK + "pk-still-05-web.jpg"
}, {
  src: PK + "pk-still-06-web.jpg",
  label: "Still · 9:16"
}, {
  video: PK_VID + "pietklerkx-stel-9x16.mp4",
  label: "Couple · 9:16",
  terug: PK + "pk-still-04-web.jpg"
}, {
  src: PK + "pk-still-02-web.jpg",
  label: "Still · 9:16"
}, {
  video: PK_VID + "pietklerkx-professional-9x16.mp4",
  label: "Professional · 9:16",
  terug: PK + "pk-still-03-web.jpg"
}, {
  src: PK + "pk-still-07-web.jpg",
  label: "Still · 9:16"
}];
const PK_BREED = [{
  video: PK_VID + "pietklerkx-gezin-16x9.mp4",
  label: "Family · 16:9",
  terug: PK + "pk-still-05-web.jpg"
}, {
  src: PK + "pk-still-03-web.jpg",
  label: "Still · 16:9"
}, {
  video: PK_VID + "pietklerkx-stel-16x9.mp4",
  label: "Couple · 16:9",
  terug: PK + "pk-still-04-web.jpg"
}, {
  src: PK + "pk-still-04-web.jpg",
  label: "Still · 16:9"
}, {
  video: PK_VID + "pietklerkx-professional-16x9.mp4",
  label: "Professional · 16:9",
  terug: PK + "pk-still-03-web.jpg"
}, {
  src: PK + "pk-still-02-web.jpg",
  label: "Still · 16:9"
}];

/* Collectiecampagnes: beeld en reel om en om in één strook, zodat foto en film
   door elkaar lopen in plaats van in aparte blokken. */
const PK_COLLECTIE = [{
  src: PK + "pk-collectie-01-web.jpg",
  ratio: "2 / 3",
  breed: 240,
  zak: 0,
  tekst: "Titelo · collection"
}, {
  video: PK_VID + "pietklerkx-reel-tafel-1-styling.mp4",
  ratio: "9 / 16",
  breed: 200,
  zak: 16,
  terug: PK + "pk-collectie-03-web.jpg",
  tekst: "Table · styling"
}, {
  src: PK + "pk-collectie-03-web.jpg",
  ratio: "3 / 2",
  breed: 330,
  zak: -14,
  tekst: "Vasto · collection"
}, {
  video: PK_VID + "pietklerkx-reel-bank-1-styling.mp4",
  ratio: "9 / 16",
  breed: 200,
  zak: 12,
  terug: PK + "pk-collectie-02-web.jpg",
  tekst: "Sofa · styling"
}, {
  src: PK + "pk-collectie-02-web.jpg",
  ratio: "2 / 3",
  breed: 240,
  zak: -10,
  tekst: "Prelude · collection"
}, {
  video: PK_VID + "pietklerkx-reel-tafel-2-styling.mp4",
  ratio: "9 / 16",
  breed: 200,
  zak: 14,
  terug: PK + "pk-collectie-01-web.jpg",
  tekst: "Table · styling"
}, {
  src: PK + "pk-collectie-04-web.jpg",
  ratio: "3 / 2",
  breed: 330,
  zak: 0,
  tekst: "Grand · collection"
}];
/* De productreels los daarvan, alleen film — geen stills uit de commercial. */
const PK_REELS = [{
  video: PK_VID + "pietklerkx-reel-bank-1-product.mp4",
  label: "Sofa · product",
  terug: PK + "pk-collectie-04-web.jpg"
}, {
  video: PK_VID + "pietklerkx-reel-tafel-1-product.mp4",
  label: "Table · product",
  terug: PK + "pk-collectie-01-web.jpg"
}, {
  video: PK_VID + "pietklerkx-reel-bank-2-product.mp4",
  label: "Sofa · product",
  terug: PK + "pk-collectie-02-web.jpg"
}, {
  video: PK_VID + "pietklerkx-reel-tafel-2-product.mp4",
  label: "Table · product",
  terug: PK + "pk-collectie-03-web.jpg"
}];

/* Socialcampagnes met trendwatcher Monique van der Reijden: de fragmenten om en
   om met beeld, de cutdowns los daaronder. */
const PK_MONIQUE = [1, 2, 4].map(n => ({
  video: PK_VID + "pietklerkx-monique-0" + n + ".mp4",
  ratio: "9 / 16",
  breed: 210,
  zak: [0, 16, -14, 12, -10][n - 1],
  terug: PK + "pk-collectie-0" + (n % 4 + 1) + "-web.jpg",
  tekst: "Monique van der Reijden"
}));
PK_MONIQUE.splice(2, 0, {
  src: PK + "pk-collectie-04-web.jpg",
  ratio: "3 / 2",
  breed: 320,
  zak: -12,
  tekst: "Modern Oasis · collection"
});
/* Alle shorts van Monique in één band, onder het Monique-blok. */
const PK_MQ = n => PK + "pk-monique-" + n + "-web.jpg";
const PK_MONIQUE_BAND = [{
  video: PK_VID + "pietklerkx-oasis-monique-02.mp4",
  terug: PK_MQ("03"),
  ratio: "9 / 16",
  breed: 240,
  zak: 0,
  tekst: "Monique van der Reijden"
}, {
  src: PK_MQ("04"),
  ratio: "9 / 16",
  breed: 240,
  zak: 18,
  tekst: "Monique van der Reijden"
}, {
  video: PK_VID + "pietklerkx-monique-01.mp4",
  terug: PK_MQ("04"),
  ratio: "9 / 16",
  breed: 240,
  zak: -12,
  tekst: "Monique van der Reijden"
}, {
  video: PK_VID + "pietklerkx-oasis-monique-01.mp4",
  terug: PK_MQ("02"),
  ratio: "9 / 16",
  breed: 240,
  zak: -16,
  tekst: "Monique van der Reijden"
}, {
  src: PK_MQ("03"),
  ratio: "9 / 16",
  breed: 240,
  zak: 14,
  tekst: "Monique van der Reijden"
}, {
  video: PK_VID + "pietklerkx-monique-02.mp4",
  terug: PK_MQ("04"),
  ratio: "9 / 16",
  breed: 240,
  zak: 0,
  tekst: "Monique van der Reijden"
}, {
  src: PK_MQ("02"),
  ratio: "9 / 16",
  breed: 240,
  zak: -14,
  tekst: "Modern Oasis · Monique"
}, {
  video: PK_VID + "pietklerkx-oasis-monique-03.mp4",
  terug: PK_MQ("03"),
  ratio: "9 / 16",
  breed: 240,
  zak: 12,
  tekst: "Monique van der Reijden"
}];
const PK_OASIS = [{
  video: PK_VID + "pietklerkx-oasis-monique-01.mp4",
  terug: PK + "pk-collectie-01-web.jpg",
  label: "Modern Oasis · 9:16"
}, {
  video: PK_VID + "pietklerkx-oasis-monique-02.mp4",
  terug: PK + "pk-collectie-02-web.jpg",
  label: "Modern Oasis · 9:16"
}, {
  video: PK_VID + "pietklerkx-oasis-monique-03.mp4",
  terug: PK + "pk-collectie-03-web.jpg",
  label: "Modern Oasis · 9:16"
}, {
  video: PK_VID + "pietklerkx-oasis-monique-04.mp4",
  terug: PK + "pk-collectie-04-web.jpg",
  label: "Modern Oasis · 9:16"
}];

/* Carrousel van het kickoff-event: winkelvloer, borrel, buffet en podium. */
const PK_ORDE = [["pk-kickoff-02", "3 / 2"], ["pk-kickoff-17", "2 / 3"], ["pk-kickoff-05", "1 / 1"], ["pk-kickoff-16", "3 / 2"], ["pk-kickoff-04", "3 / 2"], ["pk-kickoff-19", "3 / 2"], ["pk-kickoff-18", "1 / 1"], ["pk-kickoff-09", "3 / 2"], ["pk-kickoff-15", "2 / 3"], ["pk-kickoff-13", "3 / 2"], ["pk-kickoff-25", "3 / 2"], ["pk-kickoff-22", "2 / 3"], ["pk-kickoff-29", "1 / 1"], ["pk-kickoff-33", "3 / 2"], ["pk-kickoff-39", "3 / 2"]];
const PK_KAARTEN = PK_ORDE.map(([naam, ratio], i) => {
  const breedtes = [300, 240, 330, 260, 310, 230];
  const zakken = [0, 18, -16, 12, -20, 14];
  return {
    src: PK + naam + "-web.jpg",
    ratio: ratio,
    breed: breedtes[i % breedtes.length],
    zak: zakken[i % zakken.length],
    tekst: "Piet Klerkx · spring kick-off"
  };
});
/* De event-cutdown staat vooraan in de carrousel, zodat hij direct in beeld is. */
PK_KAARTEN.splice(0, 0, {
  video: PK_VID + "pietklerkx-event-9x16.mp4",
  ratio: "9 / 16",
  breed: 210,
  zak: 10,
  terug: PK + "pk-kickoff-32-web.jpg",
  tekst: "Event cutdown · 9:16"
});
const PK_BLOKKEN = [];

/* trim: sleutel waarmee de trimpagina (pietklerkx-fpv-trim.html) het in- en
   uitpunt van deze film bewaart; de kaart leest die stand uit. */
const PK_FPV = [{
  video: PK_VID + "pietklerkx-fpv-amsterdam.mp4",
  label: "FPV · Amsterdam",
  terug: PK + "pk-still-08-web.jpg",
  trim: "amsterdam"
}, {
  video: PK_VID + "pietklerkx-fpv-waalwijk.mp4",
  label: "FPV · Waalwijk",
  terug: PK + "pk-kickoff-02-web.jpg",
  trim: "waalwijk",
  start: 18.95,
  eind: 23.65
}, {
  video: PK_VID + "pietklerkx-fpv-rotterdam.mp4",
  label: "FPV · Rotterdam",
  terug: PK + "pk-still-03-web.jpg",
  trim: "rotterdam"
}];
const PK_INTRO = ["Piet Klerkx is a home furnishing retailer in the higher segment, with stores built around inspiration rather than inventory. Exclusive pieces from established brands, presented as complete interiors.", "Since 2023, DOLLE has produced everything from store openings in FPV drone films to collection campaigns, influencer content and company events. One partner for every location and every season."];
/* Cijfers voor het datablok; een streepje tot het echte aantal binnen is. */
const PK_DATA = [{
  label: "Views generated",
  waarde: "—"
}, {
  label: "Collections",
  waarde: 4
}, {
  label: "FPV store films",
  waarde: 3
}, {
  label: "Films delivered",
  waarde: "—"
}];
const PK_LEVERING = ["FPV", "Concept", "Direction", "Production", "Edit", "Photography", "Styling"];

/* De pagina is opgedeeld in kapittels: dicht zie je één hero-beeld met de titel,
   open klapt de volledige productie uit. */
function PKKlik({
  bron,
  poster,
  kader,
  onder
}) {
  const ref = React.useRef(null);
  const [actief, setActief] = React.useState(false);
  React.useEffect(() => {
    const stop = e => {
      if (e.detail !== ref.current && ref.current) {
        ref.current.muted = true;
        ref.current.controls = false;
        ref.current.pause();
        setActief(false);
      }
    };
    window.addEventListener("pk-geluid", stop);
    return () => window.removeEventListener("pk-geluid", stop);
  }, []);
  const aan = () => {
    const el = ref.current;
    if (el && !actief) {
      el.muted = true;
      el.play().catch(() => {});
    }
  };
  const uit = () => {
    const el = ref.current;
    if (el && !actief) el.pause();
  };
  const klik = () => {
    const el = ref.current;
    if (!el || actief) return;
    window.dispatchEvent(new CustomEvent("pk-geluid", {
      detail: el
    }));
    el.currentTime = 0;
    el.muted = false;
    el.controls = true;
    el.loop = false;
    el.play().catch(() => {});
    el.onended = () => {
      el.controls = false;
      el.muted = true;
      el.loop = true;
      setActief(false);
    };
    setActief(true);
  };
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gap: "var(--space-3)",
      minWidth: 0
    }
  }, /*#__PURE__*/React.createElement("span", {
    onMouseEnter: aan,
    onMouseLeave: uit,
    onClick: klik,
    style: {
      position: "relative",
      display: "block",
      aspectRatio: kader,
      overflow: "hidden",
      borderRadius: 5,
      background: "#0a1428",
      cursor: actief ? "default" : "pointer"
    }
  }, /*#__PURE__*/React.createElement("video", {
    ref: ref,
    src: bron,
    poster: poster,
    muted: true,
    loop: true,
    playsInline: true,
    preload: "metadata",
    style: {
      position: "absolute",
      inset: 0,
      width: "100%",
      height: "100%",
      objectFit: "cover",
      display: "block"
    }
  })), onder ? /*#__PURE__*/React.createElement(PKKicker, {
    size: "sm",
    style: {
      color: "var(--text-muted)"
    }
  }, onder) : null);
}

/* Foto die binnen zijn kader meebeweegt met de scroll. */
function PKParallax({
  src,
  kader
}) {
  const vak = React.useRef(null),
    img = React.useRef(null);
  React.useEffect(() => {
    if (window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    let raf = 0;
    const tik = () => {
      raf = 0;
      const v = vak.current,
        i = img.current;
      if (!v || !i) return;
      const b = v.getBoundingClientRect(),
        vh = window.innerHeight || 800;
      if (b.bottom < -100 || b.top > vh + 100) return;
      const p = Math.max(-1, Math.min(1, (b.top + b.height / 2 - vh / 2) / (vh / 2 + b.height / 2)));
      i.style.transform = "translate3d(0," + (p * b.height * 0.09).toFixed(1) + "px,0) scale(1.2)";
    };
    const op = () => {
      if (!raf) raf = requestAnimationFrame(tik);
    };
    tik();
    window.addEventListener("scroll", op, {
      passive: true,
      capture: true
    });
    window.addEventListener("resize", op);
    return () => {
      window.removeEventListener("scroll", op, true);
      window.removeEventListener("resize", op);
      if (raf) cancelAnimationFrame(raf);
    };
  }, []);
  return /*#__PURE__*/React.createElement("span", {
    ref: vak,
    style: {
      display: "block",
      aspectRatio: kader,
      overflow: "hidden",
      borderRadius: 5,
      background: "#0a1428",
      minWidth: 0
    }
  }, /*#__PURE__*/React.createElement("img", {
    ref: img,
    src: src,
    alt: "",
    loading: "lazy",
    decoding: "async",
    style: {
      display: "block",
      width: "100%",
      height: "100%",
      objectFit: "cover",
      transform: "scale(1.2)",
      willChange: "transform"
    }
  }));
}
function PKStill({
  src,
  kader
}) {
  return /*#__PURE__*/React.createElement("span", {
    style: {
      display: "block",
      aspectRatio: kader,
      overflow: "hidden",
      borderRadius: 5,
      background: "#0a1428",
      minWidth: 0
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: src,
    alt: "",
    loading: "lazy",
    decoding: "async",
    style: {
      display: "block",
      width: "100%",
      height: "100%",
      objectFit: "cover"
    }
  }));
}
const PK_KAPITTELS = [{
  id: "brandmovie",
  kicker: "MEDIA PRODUCTION",
  kop: "Brand movie",
  regel: "One campaign film of 45 seconds, shot across the store.",
  hero: PK + "pk-still-05-web.jpg"
}, {
  id: "cutdowns",
  kicker: "SOCIAL CUTDOWNS & STILLS",
  kop: "Cutdowns & stills",
  regel: "The campaign cut down per audience and per channel, plus the campaign stills.",
  hero: PK + "pk-still-03-web.jpg"
}, {
  id: "monique",
  kicker: "SOCIAL CAMPAIGNS · INFLUENCER COLLABORATION",
  kop: "Monique van der Reijden",
  regel: "Social campaigns around the collections with trendwatcher Monique van der Reijden.",
  hero: PK + "pk-collectie-02-web.jpg"
}, {
  id: "collecties",
  kicker: "COLLECTION CAMPAIGNS & PHOTOGRAPHY",
  kop: "Collections & photography",
  regel: "Styling, photography and film for the new collections, delivered per channel.",
  hero: PK + "pk-collectie-04-web.jpg"
}, {
  id: "drone",
  kicker: "FPV DRONE STORE VIDEOS",
  kop: "FPV drone store videos",
  regel: "Every new store in a single continuous FPV flight.",
  hero: PK + "pk-still-08-web.jpg"
}, {
  id: "heritage",
  kicker: "HERITAGE & CULTURAL EVENTS",
  kop: "Heritage & cultural events",
  regel: "95 years of Piet Klerkx, the kick-offs and the location events.",
  hero: PK + "pk-kickoff-29-web.jpg"
}];
function PKKapittel({
  k,
  children
}) {
  return /*#__PURE__*/React.createElement("section", {
    className: "dolle-dark",
    style: {
      background: "var(--dolle-navy)",
      color: "var(--text-body)",
      padding: "var(--space-6) var(--page-margin)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: "var(--content-max)",
      margin: "0 auto",
      display: "grid",
      gap: "var(--space-5)",
      backgroundImage: "linear-gradient(rgba(255,255,255,0.24), rgba(255,255,255,0.24))",
      backgroundRepeat: "no-repeat",
      backgroundPosition: "0 0",
      backgroundSize: "var(--lijn, 0%) 1px",
      paddingTop: "var(--space-6)"
    }
  }, /*#__PURE__*/React.createElement(PKKicker, {
    style: {
      display: "block",
      whiteSpace: "nowrap",
      color: "var(--text-muted)"
    }
  }, k.kicker), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gap: "var(--space-4)"
    }
  }, children)));
}

/* Selectie uit pietklerkx-selectie.html: per bestand aan of uit. Wat niet in de
   selectie staat blijft staan, zodat nieuwe media standaard meedoen. */
function pkNaam(m) {
  const p = m.video || m.src || "";
  return p.slice(p.lastIndexOf("/") + 1);
}
function pkKies(lijst, blok) {
  let keuze = null;
  try {
    keuze = JSON.parse(window.localStorage.getItem("pk-selectie"));
  } catch (e) {}
  if (!keuze) return lijst;
  return lijst.filter(m => keuze[blok + "|" + pkNaam(m)] !== false);
}

/* Kanaalkaart: kader met het formaat eronder, zodat een reeks leest als een set
   formaten in plaats van losse beelden. */
function PKKaart({
  item,
  kader
}) {
  const vid = React.useRef(null);
  /* Trim uit de trimpagina; valt terug op de waarden in de kaart zelf. */
  const trim = React.useMemo(() => {
    let uit = {
      start: item.start != null ? item.start : null,
      eind: item.eind != null ? item.eind : null
    };
    if (item.trim) {
      try {
        const q = JSON.parse(window.localStorage.getItem("pk-fpv-trim-" + item.trim));
        if (q) uit = {
          start: q.start,
          eind: q.eind
        };
      } catch (e) {}
    }
    return uit;
  }, [item.trim, item.start, item.eind]);
  /* Een kaart met start (en eventueel eind) speelt alleen dat fragment en
     herhaalt het, zodat een lange film op het goede moment begint. */
  React.useEffect(() => {
    const v = vid.current;
    if (!v || trim.start == null) return;
    const begin = () => {
      if (v.currentTime < trim.start - 0.1) v.currentTime = trim.start;
    };
    const tik = () => {
      if (trim.eind != null && trim.eind < (v.duration || 1e9) && v.currentTime >= trim.eind) {
        v.currentTime = trim.start;
        return;
      }
      if (v.currentTime < trim.start - 0.25) v.currentTime = trim.start;
    };
    v.addEventListener("loadedmetadata", begin);
    v.addEventListener("seeked", tik);
    v.addEventListener("timeupdate", tik);
    if (v.readyState >= 1) {
      v.currentTime = trim.start;
    }
    return () => {
      v.removeEventListener("loadedmetadata", begin);
      v.removeEventListener("seeked", tik);
      v.removeEventListener("timeupdate", tik);
    };
  }, [trim.start, trim.eind]);
  if (item.video && trim.start != null) {
    return /*#__PURE__*/React.createElement("div", {
      style: {
        display: "grid",
        gap: "var(--space-2)",
        minWidth: 0
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        position: "relative",
        aspectRatio: kader,
        overflow: "hidden",
        borderRadius: 5,
        background: "#0b1730",
        border: "1px solid var(--white-16, rgba(255,255,255,0.16))"
      }
    }, /*#__PURE__*/React.createElement("video", {
      ref: vid,
      src: item.video,
      autoPlay: true,
      muted: true,
      loop: true,
      playsInline: true,
      preload: "metadata",
      poster: item.terug,
      style: {
        position: "absolute",
        inset: 0,
        width: "100%",
        height: "100%",
        objectFit: "cover",
        display: "block"
      }
    })), /*#__PURE__*/React.createElement(PKKicker, {
      size: "sm",
      style: {
        display: "block",
        whiteSpace: "nowrap",
        color: "var(--text-muted)"
      }
    }, item.label));
  }
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gap: "var(--space-2)",
      minWidth: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      aspectRatio: kader,
      overflow: "hidden",
      background: "#0b1730",
      border: "1px solid var(--white-16, rgba(255,255,255,0.16))"
    }
  }, item.video ? window.CaseLoop ? /*#__PURE__*/React.createElement(window.CaseLoop, {
    bron: item.video,
    terug: item.terug,
    stijl: {
      position: "absolute",
      inset: 0,
      width: "100%",
      height: "100%",
      objectFit: "cover",
      display: "block"
    }
  }) : /*#__PURE__*/React.createElement("video", {
    src: item.video,
    autoPlay: true,
    muted: true,
    loop: true,
    playsInline: true,
    preload: "metadata",
    style: {
      position: "absolute",
      inset: 0,
      width: "100%",
      height: "100%",
      objectFit: "cover",
      display: "block"
    }
  }) : /*#__PURE__*/React.createElement("img", {
    src: item.src,
    alt: "",
    loading: "lazy",
    decoding: "async",
    style: {
      position: "absolute",
      inset: 0,
      width: "100%",
      height: "100%",
      objectFit: "cover",
      display: "block"
    }
  })), /*#__PURE__*/React.createElement(PKKicker, {
    size: "sm",
    style: {
      display: "block",
      whiteSpace: "nowrap",
      color: "var(--text-muted)"
    }
  }, item.label));
}
function PKBlokTekst({
  kop,
  tekst,
  rechts
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gap: "var(--space-3)",
      justifyItems: rechts ? "end" : "start",
      justifySelf: rechts ? "end" : "start",
      textAlign: rechts ? "right" : "left",
      maxWidth: "45ch"
    }
  }, /*#__PURE__*/React.createElement("h3", {
    style: {
      margin: 0,
      fontFamily: "var(--font-core)",
      fontWeight: "var(--weight-heading)",
      fontSize: "clamp(19px,2vw,27px)",
      letterSpacing: "var(--track-heading)",
      color: "var(--text-heading)"
    }
  }, kop), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontSize: "var(--size-body)",
      lineHeight: "var(--lh-body)"
    }
  }, tekst));
}

/* Band onder de intro: loops uit alle producties door elkaar. */
const PK_BAND = [{
  video: PK_VID + "pietklerkx-reel-bank-1-styling.mp4",
  r: 9 / 16
}, {
  video: PK_VID + "pietklerkx-gezin-16x9.mp4",
  r: 16 / 9
}, {
  video: PK_VID + "pietklerkx-monique-02.mp4",
  r: 9 / 16
}, {
  src: PK + "pk-collectie-03-web.jpg",
  r: 3 / 2
}, {
  video: PK_VID + "pietklerkx-reel-tafel-1-product.mp4",
  r: 4 / 5
}, {
  video: PK_VID + "pietklerkx-stel-16x9.mp4",
  r: 16 / 9
}, {
  video: PK_VID + "pietklerkx-oasis-monique-01.mp4",
  r: 9 / 16
}, {
  src: PK + "pk-kickoff-09-web.jpg",
  r: 3 / 2
}];

/* Eén blok per verhaal: tekst en één beeld, om en om van kant. */
function PKBlok({
  kop,
  tekst,
  i,
  children,
  meeloop,
  vol,
  onder
}) {
  const links = i % 2 === 1;
  const Lijn = window.CMLijn;
  /* meeloop: de tekst zakt met de scroll mee en blijft staan zodra zijn
     onderkant gelijk ligt met de onderkant van het beeld. */
  const t = /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gap: "var(--space-3)",
      justifyItems: "start",
      maxWidth: "45ch",
      alignSelf: "start",
      ...(meeloop ? {
        position: "sticky",
        top: "calc(var(--pk-nav, 92px) + 24px)"
      } : {})
    }
  }, /*#__PURE__*/React.createElement("h2", {
    style: {
      margin: 0,
      fontFamily: "var(--font-core)",
      fontWeight: "var(--weight-heading)",
      fontSize: "clamp(19px,2vw,27px)",
      letterSpacing: "var(--track-heading)",
      color: "var(--text-heading)"
    }
  }, kop), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontSize: "var(--size-body)",
      lineHeight: "var(--lh-body)"
    }
  }, tekst));
  const m = /*#__PURE__*/React.createElement("div", {
    style: {
      minWidth: 0
    }
  }, children);
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gap: "var(--space-6)"
    }
  }, Lijn ? /*#__PURE__*/React.createElement(Lijn, null) : null, vol ? /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gap: "var(--space-5)"
    }
  }, t, m) : /*#__PURE__*/React.createElement("div", {
    "data-pk-blok": "1",
    style: {
      display: "grid",
      gridTemplateColumns: links ? "minmax(0,1.25fr) minmax(0,0.9fr)" : "minmax(0,0.9fr) minmax(0,1.25fr)",
      gap: "calc(var(--grid-gap) * 1.1)",
      alignItems: "start"
    }
  }, links ? [/*#__PURE__*/React.createElement(React.Fragment, {
    key: "m"
  }, m), /*#__PURE__*/React.createElement(React.Fragment, {
    key: "t"
  }, t)] : [/*#__PURE__*/React.createElement(React.Fragment, {
    key: "t"
  }, t), /*#__PURE__*/React.createElement(React.Fragment, {
    key: "m"
  }, m)]), onder || null);
}

/* Store commercial: dicht staan tekst en film naast elkaar. Een klik maakt
   ruimte: de film schuift onder de tekst en speelt over de volle breedte.
   Nog een klik op de film klapt hem terug. */
function PKCommercial({
  Film
}) {
  const [groot, setGroot] = React.useState(false);
  const [versie, setVersie] = React.useState(0);
  const vak = React.useRef(null);
  const voor = React.useRef(null);
  const wissel = aan => {
    if (vak.current) voor.current = vak.current.getBoundingClientRect();
    setGroot(aan);
    if (!aan) setVersie(n => n + 1);
  };
  React.useLayoutEffect(() => {
    const el = vak.current,
      o = voor.current;
    if (!el || !o) return;
    voor.current = null;
    const n = el.getBoundingClientRect();
    if (!n.width) return;
    el.style.transition = "none";
    el.style.transformOrigin = "0 0";
    el.style.transform = "translate(" + (o.left - n.left) + "px," + (o.top - n.top) + "px) scale(" + o.width / n.width + ")";
    el.getBoundingClientRect();
    el.style.transition = "transform 900ms cubic-bezier(.16,.84,.24,1)";
    el.style.transform = "none";
    if (groot) {
      /* Na het openen de film midden in beeld scrollen. */
      let s = el.parentElement;
      while (s && s !== document.body && !(/(auto|scroll)/.test(getComputedStyle(s).overflowY) && s.scrollHeight > s.clientHeight)) s = s.parentElement;
      const doel = s && s !== document.body ? s : null;
      const vh = doel ? doel.clientHeight : window.innerHeight;
      const top0 = doel ? doel.getBoundingClientRect().top : 0;
      const mid = n.top - top0 + n.height / 2 - vh / 2;
      setTimeout(() => {
        if (doel) doel.scrollBy({
          top: mid,
          behavior: "smooth"
        });else window.scrollBy({
          top: mid,
          behavior: "smooth"
        });
      }, 60);
    }
  }, [groot]);
  const klik = e => {
    if (!groot) {
      wissel(true);
      return;
    }
    if (e.target && e.target.tagName === "VIDEO") {
      e.preventDefault();
      e.stopPropagation();
      wissel(false);
    }
  };
  const tekst = /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gap: "var(--space-4)",
      maxWidth: "45ch",
      alignContent: "start"
    }
  }, /*#__PURE__*/React.createElement("h2", {
    style: {
      margin: 0,
      fontFamily: "var(--font-core)",
      fontWeight: "var(--weight-heading)",
      fontSize: "clamp(22px,2.6vw,36px)",
      letterSpacing: "var(--track-heading)",
      color: "var(--text-heading)"
    }
  }, "Waalwijk store commercial"), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontSize: "var(--size-body)",
      lineHeight: "var(--lh-body)"
    }
  }, "Shot across the store: the floor, the brasserie and the people who work there. From that single production the campaign runs on, cut down per audience and per channel."));
  const wildly = /*#__PURE__*/React.createElement("span", {
    style: {
      justifySelf: "end",
      fontFamily: "var(--font-core)",
      fontWeight: "var(--weight-heading)",
      fontSize: "clamp(18px,2.2vw,30px)",
      letterSpacing: "var(--track-wildly)",
      textTransform: "uppercase",
      color: "var(--text-heading)",
      whiteSpace: "nowrap"
    }
  }, "Wildly ", /*#__PURE__*/React.createElement("span", {
    style: {
      color: "var(--text-accent)"
    }
  }, "Visible"));
  return /*#__PURE__*/React.createElement("div", {
    "data-pk-blok": groot ? undefined : "1",
    style: {
      display: "grid",
      gridTemplateColumns: groot ? "minmax(0,1fr)" : "minmax(0,0.9fr) minmax(0,1.25fr)",
      gap: groot ? "var(--space-5)" : "calc(var(--grid-gap) * 1.1)",
      alignItems: "start"
    }
  }, groot ? /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "flex-start",
      gap: "var(--space-6)",
      flexWrap: "wrap"
    }
  }, tekst, wildly) : tekst, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gap: "var(--space-4)",
      minWidth: 0
    }
  }, groot ? null : wildly, /*#__PURE__*/React.createElement("div", {
    ref: vak,
    onClickCapture: klik,
    style: {
      minWidth: 0,
      cursor: groot ? "default" : "pointer",
      willChange: "transform"
    }
  }, /*#__PURE__*/React.createElement(Film, {
    key: versie,
    bron: PK_VID + "pietklerkx-45sec-16x9.mp4",
    poster: PK + "pk-still-08-web.jpg",
    onderschrift: "STORE COMMERCIAL \xB7 WAALWIJK",
    watch: true
  }))));
}

/* Cutdowns en stills uit dezelfde productie in één doorlopende band. */
const PK_CUTBAND = [{
  video: PK_VID + "pietklerkx-gezin-9x16.mp4",
  r: 9 / 16
}, {
  src: PK + "pk-still-01-web.jpg",
  r: 16 / 9
}, {
  video: PK_VID + "pietklerkx-stel-16x9.mp4",
  r: 16 / 9
}, {
  src: PK + "pk-still-05-web.jpg",
  r: 1600 / 1264
}, {
  video: PK_VID + "pietklerkx-professional-9x16.mp4",
  r: 9 / 16
}, {
  src: PK + "pk-still-02-web.jpg",
  r: 16 / 9
}, {
  video: PK_VID + "pietklerkx-45sec-9x16.mp4",
  r: 9 / 16
}, {
  src: PK + "pk-still-06-web.jpg",
  r: 16 / 9
}, {
  video: PK_VID + "pietklerkx-gezin-16x9.mp4",
  r: 16 / 9
}, {
  src: PK + "pk-still-04-web.jpg",
  r: 16 / 9
}, {
  video: PK_VID + "pietklerkx-stel-9x16.mp4",
  r: 9 / 16
}, {
  src: PK + "pk-still-07-web.jpg",
  r: 16 / 9
}];

/* Cutdowns: dicht drie formaten; een klik opent alle cutdowns met de
   campagnestills eronder. */
const PK_STILLS = [1, 2, 4, 5, 6, 7].map(n => PK + "pk-still-0" + n + "-web.jpg");
function PKCutdowns({
  open,
  setOpen
}) {
  return /*#__PURE__*/React.createElement("div", {
    onClickCapture: () => {
      if (!open) setOpen(true);
    },
    "data-pk-drie": "1",
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(3,minmax(0,1fr))",
      gap: "var(--space-3)"
    }
  }, /*#__PURE__*/React.createElement(PKKlik, {
    bron: PK_VID + "pietklerkx-gezin-9x16.mp4",
    poster: PK + "pk-still-05-web.jpg",
    kader: "9 / 16",
    onder: "FAMILY"
  }), /*#__PURE__*/React.createElement(PKKlik, {
    bron: PK_VID + "pietklerkx-stel-9x16.mp4",
    poster: PK + "pk-still-06-web.jpg",
    kader: "9 / 16",
    onder: "COUPLE"
  }), /*#__PURE__*/React.createElement(PKKlik, {
    bron: PK_VID + "pietklerkx-professional-9x16.mp4",
    poster: PK + "pk-still-03-web.jpg",
    kader: "9 / 16",
    onder: "PROFESSIONAL"
  }));
}
function PKCutdownsOpen({
  open,
  setOpen
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateRows: open ? "1fr" : "0fr",
      transition: "grid-template-rows 900ms cubic-bezier(.16,.84,.24,1)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      overflow: "hidden",
      minHeight: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gap: "var(--space-5)",
      paddingTop: "var(--space-2)",
      opacity: open ? 1 : 0,
      transition: "opacity 700ms ease 200ms"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "baseline",
      gap: "var(--space-4)"
    }
  }, /*#__PURE__*/React.createElement(PKKicker, {
    style: {
      color: "var(--text-muted)"
    }
  }, "All cutdowns"), /*#__PURE__*/React.createElement(PKButton, {
    size: "sm",
    variant: "secondary",
    onClick: () => setOpen(false),
    style: {
      color: "var(--dolle-white)",
      borderColor: "transparent"
    }
  }, "Close")), /*#__PURE__*/React.createElement("div", {
    "data-pk-vier": "1",
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(4,minmax(0,1fr))",
      gap: "var(--space-3)"
    }
  }, PK_CUTDOWNS.filter(c => c.video).map(c => /*#__PURE__*/React.createElement(PKKlik, {
    key: c.video,
    bron: c.video,
    poster: c.terug,
    kader: "9 / 16",
    onder: c.label
  }))), /*#__PURE__*/React.createElement("div", {
    "data-pk-vier": "1",
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(3,minmax(0,1fr))",
      gap: "var(--space-3)"
    }
  }, PK_BREED.filter(c => c.video).map(c => /*#__PURE__*/React.createElement(PKKlik, {
    key: c.video,
    bron: c.video,
    poster: c.terug,
    kader: "16 / 9",
    onder: c.label
  }))), /*#__PURE__*/React.createElement(PKKicker, {
    style: {
      color: "var(--text-muted)",
      paddingTop: "var(--space-3)"
    }
  }, "Campaign stills"), /*#__PURE__*/React.createElement("div", {
    "data-pk-vier": "1",
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(3,minmax(0,1fr))",
      gap: "var(--space-3)"
    }
  }, PK_STILLS.map(s => /*#__PURE__*/React.createElement(PKStill, {
    key: s,
    src: s,
    kader: "16 / 9"
  }))))));
}

/* Cultural events: band met kickoff-beelden, groter dan in de oude carrousel. */
const PK_EVENTS = PK_KAARTEN.map(k => {
  const [w, h] = k.ratio.split("/").map(Number);
  return {
    ...k,
    breed: Math.round(380 * w / h),
    zak: 0
  };
});
function CasePietKlerkx({
  go
}) {
  React.useEffect(() => {
    const zet = () => {
      const h = document.querySelector("header");
      document.documentElement.style.setProperty("--pk-nav", (h && h.offsetHeight || 92) + "px");
    };
    zet();
    window.addEventListener("resize", zet);
    return () => window.removeEventListener("resize", zet);
  }, []);
  const Film = window.CaseFilm;
  const Rij = window.CaseRij;
  const Haarlijn = window.Haarlijn;
  const Band = window.BVBand;
  const Hover = window.BVHover;
  const [open, setOpen] = React.useState(-1);
  const verwant = ["Woonexpress", "Montel", "Kiela", "Landgoed Bergvliet"].map(n => (window.CASES || []).find(c => c.klant === n)).filter(Boolean);
  if (!Film || !Band || !Hover) return null;
  const sectie = {
    background: "var(--dolle-navy)",
    color: "var(--text-body)",
    padding: "var(--space-6) var(--page-margin)"
  };
  const binnen = {
    maxWidth: "var(--content-max)",
    margin: "0 auto",
    display: "grid",
    gap: "var(--space-5)"
  };
  const kop2 = {
    margin: 0,
    fontFamily: "var(--font-core)",
    fontWeight: "var(--weight-heading)",
    fontSize: "clamp(22px,2.6vw,36px)",
    letterSpacing: "var(--track-heading)",
    color: "var(--text-heading)"
  };
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("style", null, "@media (max-width:860px){[data-pk-blok],[data-pk-opening]{grid-template-columns:minmax(0,1fr) !important}[data-pk-vier]{grid-template-columns:repeat(2,minmax(0,1fr)) !important}}"), window.CMKop ? /*#__PURE__*/React.createElement(window.CMKop, {
    titel: "Piet Klerkx",
    tags: ["Media production", "Growth", "Launches"],
    film: PK_VID + "pietklerkx-overview-loop.mp4",
    poster: PK + "pk-still-08-web.jpg",
    go: go,
    Knop: PKButton,
    Woorden: PKWords,
    Tag: PKTag
  }, window.CMIntro ? /*#__PURE__*/React.createElement(window.CMIntro, {
    tekst: PK_INTRO,
    beeld: window.CMOpeningBeeld ? /*#__PURE__*/React.createElement(window.CMOpeningBeeld, {
      modus: "groei",
      start: 0.3,
      ratio: "16 / 9",
      src: PK_HERO
    }) : /*#__PURE__*/React.createElement(PKStill, {
      src: PK_HERO,
      kader: "16 / 9"
    })
  }) : null) : null, /*#__PURE__*/React.createElement("section", {
    className: "dolle-dark",
    style: {
      background: "var(--dolle-navy)",
      padding: "0 var(--page-margin) var(--space-6)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: "var(--content-max)",
      margin: "0 auto"
    }
  }, /*#__PURE__*/React.createElement(Band, {
    items: PK_BAND,
    hoog: "clamp(200px,24vw,340px)",
    golf: true
  }))), /*#__PURE__*/React.createElement("section", {
    className: "dolle-dark",
    style: sectie
  }, /*#__PURE__*/React.createElement("div", {
    style: binnen
  }, window.CMLijn ? /*#__PURE__*/React.createElement(window.CMLijn, null) : null, /*#__PURE__*/React.createElement(PKCommercial, {
    Film: Film
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gap: "var(--space-3)",
      paddingTop: "var(--space-4)"
    }
  }, /*#__PURE__*/React.createElement(PKKicker, {
    style: {
      color: "var(--text-muted)"
    }
  }, "Cutdowns & stills"), /*#__PURE__*/React.createElement(Band, {
    items: PK_CUTBAND,
    hoog: "clamp(200px,24vw,340px)",
    golf: true
  })))), /*#__PURE__*/React.createElement("section", {
    className: "dolle-dark",
    style: sectie
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      ...binnen,
      gap: "var(--space-6)"
    }
  }, /*#__PURE__*/React.createElement(PKBlok, {
    i: 1,
    kop: "Social campaigns with Monique van der Reijden",
    tekst: "Social campaigns around the collections, made with trendwatcher Monique van der Reijden: Modern Oasis, Organic Wave and the two collections that followed. Concept, production and edit, cut down per format and aimed at traffic to the floor."
  }, /*#__PURE__*/React.createElement(Film, {
    bron: PK_VID + "pietklerkx-modern-oasis-intro.mp4",
    poster: PK_MQ("bank"),
    onderschrift: "MODERN OASIS \xB7 INTRO",
    watch: true,
    watchSchaal: 2.2
  })), window.CaseKaarten ? /*#__PURE__*/React.createElement(window.CaseKaarten, {
    items: PK_MONIQUE_BAND,
    tempo: 0.5
  }) : null, /*#__PURE__*/React.createElement(PKBlok, {
    i: 2,
    vol: true,
    kop: "Collection campaigns",
    tekst: "Campaign work around the new collections Modern Oasis, Organic Wave, Prelude and Retro Remix, produced as one package: styling, photography and film in a single run, delivered per channel so the same collection carries across store, social and print."
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gap: "var(--space-3)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "minmax(0,1.5fr) minmax(0,0.667fr)",
      gap: "var(--space-3)",
      alignItems: "start"
    }
  }, /*#__PURE__*/React.createElement(PKParallax, {
    src: PK + "pk-collectie-04-web.jpg",
    kader: "3 / 2"
  }), /*#__PURE__*/React.createElement(PKParallax, {
    src: PK + "pk-collectie-02-web.jpg",
    kader: "2 / 3"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "minmax(0,0.667fr) minmax(0,1.5fr)",
      gap: "var(--space-3)",
      alignItems: "start"
    }
  }, /*#__PURE__*/React.createElement(PKParallax, {
    src: PK + "pk-collectie-01-web.jpg",
    kader: "2 / 3"
  }), /*#__PURE__*/React.createElement(PKParallax, {
    src: PK + "pk-collectie-03-web.jpg",
    kader: "3 / 2"
  })))), /*#__PURE__*/React.createElement(PKBlok, {
    i: 3,
    meeloop: true,
    kop: "FPV drone store videos",
    tekst: "Every new Piet Klerkx store is captured in a single continuous FPV flight. One shot that moves through the full floor, room by room, so the scale of the store lands in seconds instead of a gallery. Planning, flight and edit in house."
  }, /*#__PURE__*/React.createElement(Film, {
    bron: PK_VID + "pietklerkx-fpv-amsterdam.mp4",
    poster: PK + "pk-still-08-web.jpg",
    onderschrift: "FPV \xB7 AMSTERDAM",
    watch: true,
    watchSchaal: 2.2
  })), /*#__PURE__*/React.createElement(PKBlok, {
    i: 4,
    kop: "Heritage & cultural events",
    tekst: "A heritage film for 95 years of Piet Klerkx, plus the kick-offs, quarterly meetings and location events filmed across the country. Pre-event films to set the tone, live coverage on the day, and the edit that keeps the moment alive afterwards. The work that makes a company with stores in different cities feel like one."
  }, /*#__PURE__*/React.createElement(Film, {
    bron: PK_VID + "pietklerkx-kickoff.mp4",
    poster: PK + "pk-heritage-poster-web.jpg",
    onderschrift: "HERITAGE \xB7 95 YEARS",
    watch: true,
    watchSchaal: 2.2
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gap: "var(--space-4)",
      marginTop: "calc(var(--space-6) * -0.6)"
    }
  }, /*#__PURE__*/React.createElement(PKKicker, {
    style: {
      color: "var(--text-muted)"
    }
  }, "Cultural events"), window.CaseKaarten ? /*#__PURE__*/React.createElement(window.CaseKaarten, {
    items: PK_EVENTS,
    tempo: 0.5,
    schuif: true
  }) : null))), window.CMData ? /*#__PURE__*/React.createElement(window.CMData, {
    kop: "Deliverables",
    beeld: PK + "pk-still-08-web.jpg",
    waas: 0.42,
    Tag: PKTag,
    tags: PK_LEVERING,
    cijfers: PK_DATA,
    review: {
      tekst: "Top-notch experience with DOLLE. They produce various videos for Piet Klerkx and Enzo Luca, and they do so with tremendous professionalism. They contribute ideas from preparation to execution on set, regardless of the scale of the production. Transparent, reliable, and incredibly pleasant to work with!",
      naam: "Maxime in het Veld",
      rol: "Senior brand manager, Piet Klerkx"
    }
  }) : null, /*#__PURE__*/React.createElement("section", {
    className: "dolle-dark",
    style: {
      background: "var(--dolle-navy)",
      padding: "var(--space-6) var(--page-margin)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: "var(--content-max)",
      margin: "0 auto",
      display: "grid",
      gap: "var(--space-4)",
      gridTemplateColumns: "minmax(0,1fr)"
    }
  }, /*#__PURE__*/React.createElement(PKKicker, {
    style: {
      display: "block",
      whiteSpace: "nowrap",
      color: "var(--text-muted)"
    }
  }, "Related work"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "minmax(0,1fr)"
    }
  }, Rij ? verwant.map((c, i) => /*#__PURE__*/React.createElement(Rij, {
    key: c.id,
    c: c,
    i: i,
    go: go,
    open: open === c.id,
    onToggle: () => setOpen(open === c.id ? -1 : c.id)
  })) : null, Haarlijn ? /*#__PURE__*/React.createElement(Haarlijn, null) : null))), window.HomeConversie ? /*#__PURE__*/React.createElement(window.HomeConversie, {
    go: go,
    tone: "dark"
  }) : null);
}
Object.assign(window, {
  CasePietKlerkx
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/CasePietKlerkx.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/CaseVeteranenSearchTeam.jsx
try { (() => {
const VSTBlok = window.DolleTag || (({
  children
}) => React.createElement("span", null, children));
const VST_DS = window.DesignSystem_8f95a2;
const {
  Kicker: VSTKicker,
  Tag: VSTTag,
  Button: VSTButton,
  Icon: VSTIcon
} = VST_DS;
const VSTWords = window.Words || (({
  as = "span",
  text,
  style
}) => React.createElement(as, {
  style: style
}, text));
const VST = "../../assets/cases/vst/";
const VST_VID = "../../assets/video/";
const VST_KOLOMGAT = "calc(var(--grid-gap) * 1.1)";

/* De stills uit de brandfilm, met de verhouding waarin ze gedraaid zijn. */
const VST_STILLS = [["08", 2.35], ["12", 1.26], ["19", 1.4], ["02", 2.34], ["07", 1.23], ["15", 1.86], ["23", 2.35], ["06", 1.37], ["20", 1.93], ["16", 1.24], ["03", 1.51], ["17", 2.2], ["11", 1.79], ["21", 1.48], ["09", 1.9], ["01", 1.79], ["13", 1.47], ["18", 2.25], ["05", 1.87], ["22", 1.71], ["10", 2.2], ["14", 1.59], ["04", 1.68]].map(([nr, r], i) => ({
  src: VST + "vst-still-" + nr + "-web.jpg",
  ratio: r.toFixed(2) + " / 1",
  breed: Math.round((i % 3 === 0 ? 340 : i % 3 === 1 ? 240 : 290) * r),
  zak: [0, 26, -18, 12, -28][i % 5],
  tekst: "Veteranen Search Team · brand film"
}));

/* Drie behind-the-scenes loops tussen de stills. */
[[1, "vst-bts-01", "08"], [5, "vst-bts-02", "15"], [9, "vst-bts-03", "20"]].forEach(([plek, naam, terug]) => {
  VST_STILLS.splice(plek, 0, {
    video: VST_VID + naam + ".mp4",
    terug: VST + naam + "-poster-web.jpg",
    ratio: "9 / 16",
    breed: 210,
    zak: plek === 5 ? 18 : -16,
    tekst: "Behind the scenes"
  });
});
function VSTBlokTekst({
  kop,
  tekst
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gap: "var(--space-3)",
      justifyItems: "start",
      maxWidth: "45ch"
    }
  }, /*#__PURE__*/React.createElement("h2", {
    style: {
      margin: 0,
      fontFamily: "var(--font-core)",
      fontWeight: "var(--weight-heading)",
      fontSize: "clamp(19px,2vw,27px)",
      letterSpacing: "var(--track-heading)",
      color: "var(--text-heading)"
    }
  }, kop), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontSize: "var(--size-body)",
      lineHeight: "var(--lh-body)"
    }
  }, tekst));
}

/* Brand film naast "Why this film". Bij afspelen schuift de tekstkolom dicht en
   groeit de film in dezelfde rij uit tot volle breedte; daarna komt hij rustig
   in het midden van het scherm. Pauze of einde loopt dezelfde weg terug. */
function VSTOntvouw({
  Film
}) {
  const [open, setOpen] = React.useState(false);
  const [sleutel, setSleutel] = React.useState(0);
  const vak = React.useRef(null);
  React.useEffect(() => {
    const el = vak.current;
    if (!el) return;
    const aan = () => {
      setOpen(true);
      setTimeout(() => {
        const r = el.getBoundingClientRect();
        const d = r.top + r.height / 2 - window.innerHeight / 2;
        if (Math.abs(d) > 20) window.scrollBy({
          top: Math.round(d),
          behavior: "smooth"
        });
      }, 1300);
    };
    const uit = e => {
      if (e.type === "pause" && e.target.ended) return;
      setOpen(false);
      setTimeout(() => setSleutel(n => n + 1), 1300);
    };
    el.addEventListener("play", aan, true);
    el.addEventListener("pause", uit, true);
    el.addEventListener("ended", uit, true);
    return () => {
      el.removeEventListener("play", aan, true);
      el.removeEventListener("pause", uit, true);
      el.removeEventListener("ended", uit, true);
    };
  }, []);
  const vloei = "1300ms cubic-bezier(.65,0,.2,1)";
  return /*#__PURE__*/React.createElement("div", {
    "data-vst-film": "1",
    style: {
      display: "grid",
      gridTemplateColumns: open ? "minmax(0,0fr) minmax(0,1fr)" : "minmax(0,0.75fr) minmax(0,1.6fr)",
      columnGap: open ? 0 : "calc(var(--grid-gap) * 1.1)",
      alignItems: "start",
      transition: "grid-template-columns " + vloei + ", column-gap " + vloei
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      minWidth: 0,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: "max(32ch, 100%)",
      opacity: open ? 0 : 1,
      transform: open ? "translate3d(-32px,0,0)" : "translate3d(0,0,0)",
      transition: "opacity " + (open ? "420ms" : "700ms 600ms") + " ease, transform " + vloei
    }
  }, /*#__PURE__*/React.createElement(VSTBlokTekst, {
    kop: "Why this film",
    tekst: "VST's work spans many disciplines and is rarely seen from outside. One film had to make it visible: clear for a sponsor, honest for a new volunteer, complete enough to explain the whole operation."
  }))), /*#__PURE__*/React.createElement("div", {
    ref: vak,
    style: {
      minWidth: 0
    }
  }, Film ? /*#__PURE__*/React.createElement(Film, {
    key: sleutel,
    bron: VST_VID + "vst-brandfilm.mp4",
    poster: VST + "vst-still-04-web.jpg",
    onderschrift: "BRAND FILM \xB7 VETERANEN SEARCH TEAM",
    watch: true,
    watchSchaal: open ? 3 : 2,
    parallax: true
  }) : null));
}
const VST_INTRO = ["Veteranen Search Team searches for missing people alongside the police, with a team made up entirely of volunteers. Search lines on foot, bike teams, drones and thermal cameras after dark: an operation few people ever get to see.", "DOLLE produced the film that shows it. Filmed on the Veluwe with a full crew, it explains the whole operation in a few minutes for sponsors, municipalities, partners and the volunteers who keep it running."];
/* Cijfers voor het datablok; voorlopig, tot de echte aantallen binnen zijn. */
const VST_DATA = [{
  label: "Views generated",
  waarde: 450,
  achter: "K+"
}, {
  label: "Search disciplines filmed",
  waarde: 6
}, {
  label: "Volunteers in front of the camera",
  waarde: 40,
  achter: "+"
}];
function vstBand() {
  const r = x => {
    const d = String(x || "16 / 9").split("/");
    return parseFloat(d[0]) / parseFloat(d[1] || 1) || 16 / 9;
  };
  return VST_STILLS.map(k => k.video ? {
    video: k.video,
    r: r(k.ratio)
  } : {
    src: k.src,
    r: r(k.ratio)
  });
}
function CaseVeteranenSearchTeam({
  go
}) {
  const Film = window.CaseFilm;
  const Kaarten = window.CaseKaarten;
  const Rij = window.CaseRij;
  const Haarlijn = window.Haarlijn;
  const [open, setOpen] = React.useState(-1);
  const namen = ["Eezy", "Kiela", "Blue Rivet", "Montel"];
  const verwant = namen.slice(0, 3).map(n => (window.CASES || []).find(c => c.klant === n)).filter(Boolean);
  if (!Film) return null;
  const sectie = {
    background: "var(--dolle-navy)",
    color: "var(--text-body)",
    padding: "var(--space-6) var(--page-margin)"
  };
  const binnen = {
    maxWidth: "var(--content-max)",
    margin: "0 auto",
    display: "grid",
    gap: "var(--space-5)"
  };
  const naad = {
    backgroundImage: "linear-gradient(rgba(255,255,255,0.24), rgba(255,255,255,0.24))",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "0 0",
    backgroundSize: "var(--lijn, 0%) 1px",
    paddingTop: "var(--space-6)"
  };
  return /*#__PURE__*/React.createElement(React.Fragment, null, window.CMKop ? /*#__PURE__*/React.createElement(window.CMKop, {
    titel: "Veteranen Search Team",
    tags: ["Media production"],
    film: VST_VID + "vst-brandfilm.mp4",
    start: 5.5,
    eind: 78,
    reserve: ["vst-bts-01", "vst-bts-02", "vst-bts-03"].map(f => VST_VID + f + ".mp4"),
    poster: VST + "vst-still-02-web.jpg",
    go: go,
    Knop: VSTButton,
    Woorden: window.Words || null,
    Tag: VSTBlok
  }, window.CMIntro ? /*#__PURE__*/React.createElement(window.CMIntro, {
    tekst: VST_INTRO,
    beeld: window.CMOpeningBeeld ? /*#__PURE__*/React.createElement(window.CMOpeningBeeld, {
      modus: "groei",
      ratio: "16 / 9",
      src: VST + "vst-still-02-web.jpg"
    }) : null
  }) : null) : null, window.BVBand ? /*#__PURE__*/React.createElement("section", {
    className: "dolle-dark",
    style: {
      background: "var(--dolle-navy)",
      padding: "0 var(--page-margin) var(--space-6)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: "var(--content-max)",
      margin: "0 auto"
    }
  }, window.CMOpkomst ? /*#__PURE__*/React.createElement(window.CMOpkomst, {
    vertraging: 700
  }, /*#__PURE__*/React.createElement(window.BVBand, {
    items: vstBand(),
    hoog: "clamp(200px,24vw,340px)",
    sleep: true,
    golf: true
  })) : /*#__PURE__*/React.createElement(window.BVBand, {
    items: vstBand(),
    hoog: "clamp(200px,24vw,340px)",
    sleep: true,
    golf: true
  }))) : null, /*#__PURE__*/React.createElement("section", {
    className: "dolle-dark",
    style: sectie
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      ...binnen,
      ...naad
    }
  }, /*#__PURE__*/React.createElement(VSTKicker, {
    style: {
      display: "block",
      whiteSpace: "nowrap",
      color: "var(--text-muted)"
    }
  }, "MEDIA PRODUCTION \xB7 BRAND FILM"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gap: "var(--space-4)"
    }
  }, /*#__PURE__*/React.createElement(VSTBlokTekst, {
    kop: "Why this film",
    tekst: "VST's work spans many disciplines and is rarely seen from outside. One film had to make it visible: clear for a sponsor, honest for a new volunteer, complete enough to explain the whole operation."
  }), /*#__PURE__*/React.createElement(Film, {
    bron: VST_VID + "vst-brandfilm.mp4",
    poster: VST + "vst-still-04-web.jpg",
    onderschrift: "BRAND FILM \xB7 VETERANEN SEARCH TEAM",
    watch: true,
    parallax: true
  })), /*#__PURE__*/React.createElement("div", {
    "data-vst-film": "1",
    style: {
      display: "grid",
      gridTemplateColumns: "minmax(0,1fr)",
      gap: "var(--space-4)",
      alignItems: "start",
      paddingTop: "var(--space-5)"
    }
  }, /*#__PURE__*/React.createElement(VSTBlokTekst, {
    kop: "Production plan",
    tekst: "Shot in the nature reserves of the Veluwe with a full crew: the briefing at the command vehicle, the search line on foot, the bike team, drones in the air and under water, and the thermal cameras after dark. Each discipline gets its own moment; the edit shows them working as one team."
  }), /*#__PURE__*/React.createElement("div", {
    "data-vst-plan": "1",
    style: {
      minWidth: 0
    }
  }, window.CMAccordeon ? /*#__PURE__*/React.createElement(window.CMAccordeon, {
    items: ["13", "19", "06", "14", "16", "09"].map(nr => ({
      src: VST + "vst-still-" + nr + "-web.jpg",
      label: ""
    })),
    ratio: 16 / 9,
    hoog: "clamp(280px,36vw,560px)",
    licht: true
  }) : null)), /*#__PURE__*/React.createElement("style", null, "@media (max-width:860px){[data-vst-film]{grid-template-columns:minmax(0,1fr) !important}}"))), /*#__PURE__*/React.createElement("section", {
    className: "dolle-dark",
    style: sectie
  }, /*#__PURE__*/React.createElement("div", {
    "data-vst-film": "1",
    style: {
      ...binnen,
      ...naad,
      gridTemplateColumns: "minmax(0,0.75fr) minmax(0,1.6fr)",
      alignItems: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      alignSelf: "stretch",
      minWidth: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "sticky",
      top: "116px"
    }
  }, /*#__PURE__*/React.createElement(VSTBlokTekst, {
    kop: "A film to build visibility",
    tekst: "Built to work wherever VST tells its story: trade fairs, sponsor days, meetings with municipalities and its own channels. Inside the organisation it is used in trainings and shown to new volunteers before they sign up."
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      minWidth: 0,
      background: "#0b1730",
      overflow: "hidden",
      borderRadius: 5
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: VST + "vst-still-22-web.jpg",
    alt: "",
    loading: "lazy",
    decoding: "async",
    style: {
      display: "block",
      width: "100%",
      aspectRatio: "4 / 3",
      objectFit: "cover"
    }
  })))), window.CMData ? /*#__PURE__*/React.createElement(window.CMData, {
    kop: "Deliverables",
    beeld: VST + "vst-still-03-web.jpg",
    waas: 0.42,
    cijfers: VST_DATA,
    Tag: VSTBlok,
    tags: ["Concept", "Production plan", "Direction", "Production", "Drone", "Edit"],
    review: {
      tekst: "For years people asked us what we actually do. Now we show them this film. DOLLE took the time to understand every part of a search and captured it with real respect for our volunteers. It opens doors with sponsors and municipalities, and new volunteers sign up after seeing it.",
      naam: "Name",
      rol: "Veteranen Search Team"
    }
  }) : null, /*#__PURE__*/React.createElement("section", {
    className: "dolle-dark",
    style: {
      background: "var(--dolle-navy)",
      padding: "var(--space-6) var(--page-margin)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: "var(--content-max)",
      margin: "0 auto",
      display: "grid",
      gap: "var(--space-4)",
      gridTemplateColumns: "minmax(0,1fr)"
    }
  }, /*#__PURE__*/React.createElement(VSTKicker, {
    style: {
      display: "block",
      whiteSpace: "nowrap",
      color: "var(--text-muted)"
    }
  }, "Related work"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "minmax(0,1fr)"
    }
  }, Rij ? verwant.map((c, i) => /*#__PURE__*/React.createElement(Rij, {
    key: c.id,
    c: c,
    i: i,
    go: go,
    open: open === c.id,
    onToggle: () => setOpen(open === c.id ? -1 : c.id)
  })) : null, Haarlijn ? /*#__PURE__*/React.createElement(Haarlijn, null) : null))), window.HomeConversie ? /*#__PURE__*/React.createElement(window.HomeConversie, {
    go: go,
    tone: "dark"
  }) : null);
}
window.CaseVeteranenSearchTeam = CaseVeteranenSearchTeam;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/CaseVeteranenSearchTeam.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/CaseWoonexpress.jsx
try { (() => {
const WX_DS = window.DesignSystem_8f95a2;
const {
  Kicker: WXKicker,
  Button: WXButton
} = WX_DS;
const WXWords = window.Words || (({
  as = "span",
  text,
  style
}) => React.createElement(as, {
  style: style
}, text));
const WXTag = window.DolleTag || (({
  children
}) => React.createElement("span", null, children));
const WX = "../../assets/cases/woonexpress/";
const WX_VID = "../../assets/video/";
const WX_P = n => WX + "woonexpress-" + n + "-poster-web.jpg";
const WX_V = n => WX_VID + "woonexpress-" + n + ".mp4";

/* Band onder de intro. De kiestool (_werk/woonexpress-band-selectie.html) kan
   de volgorde overschrijven. */
const WX_BAND_STANDAARD = ["foto-still-03", "tafel-1-9x16", "see-fase-16x9", "foto-zomer-bank-02", "bank-2-product-16x9", "bank-1-model-9x16", "foto-zomer-eettafel-03", "foto-winkel-decoratie-02", "foto-still-01", "studio-social-02", "bank-3-model-16x9", "foto-bts-foto-10"];
const WX_FOTO_R = {
  "still-01": 1.28,
  "still-02": 1.07,
  "still-03": 1.77,
  "still-04": 1.79,
  "still-05": 1.6,
  "still-06": 1.78,
  "bts-foto-01": 0.75,
  "bts-foto-02": 0.75,
  "bts-foto-03": 0.75,
  "bts-foto-05": 0.75,
  "bts-foto-06": 0.75,
  "bts-foto-07": 0.75,
  "bts-foto-08": 0.75,
  "bts-foto-09": 0.75,
  "bts-foto-10": 0.75,
  "bts-foto-11": 0.75,
  "bts-foto-12": 0.75,
  "zomer-bank-04": 1.5,
  "zomer-bank-07": 1.378,
  "zomer-eettafel-02": 1.5,
  "zomer-eettafel-03": 1.5,
  "zomer-ronde-tafel-02": 1.5,
  "winkel-entree-01": 1.5,
  "winkel-gevel-01": 1.5,
  "winkel-gevel-02": 1.5,
  "winkel-gevel-04": 1.5,
  "winkel-slapen-01": 1.5,
  "winkel-slapen-03": 1.5,
  "winkel-slapen-04": 1.5,
  "winkel-tafelen-01": 1.5,
  "winkel-tafelen-03": 1.5,
  "winkel-wonen-01": 1.5,
  "winkel-wonen-02": 1.5,
  "winkel-wonen-03": 1.5,
  "winkel-wonen-04": 1.5,
  "winkel-wonen-06": 1.5,
  "winkel-wonen-09": 1.5
};
function wxBandItem(k) {
  if (k.indexOf("foto-") === 0) {
    const n = k.slice(5);
    return {
      src: WX + "woonexpress-" + n + "-web.jpg",
      r: WX_FOTO_R[n] || 0.667
    };
  }
  const staand = /9x16|studio-social/.test(k);
  return {
    video: WX_V(k),
    r: staand ? 9 / 16 : /1x1/.test(k) ? 1 : 16 / 9
  };
}
function wxBandLijst() {
  let lijst = WX_BAND_STANDAARD;
  try {
    const s = JSON.parse(localStorage.getItem("dolle-wx-band"));
    if (Array.isArray(s) && s.length) lijst = s;
  } catch (e) {}
  return lijst.map(wxBandItem);
}
const WX_BANK_FILMS = [1, 2, 3].map(n => ({
  naam: "Sofa " + n,
  film: WX_V("bank-" + n + "-model-16x9"),
  poster: WX_P("bank-" + n + "-model-16x9")
}));
const WX_BANK_STAAND = ["bank-1-model-9x16", "bank-1-product-9x16", "bank-2-model-9x16", "bank-2-product-9x16", "bank-3-model-9x16", "bank-3-product-9x16"];
/* Zomershoot: vier scènes, elk als 1:1-film met een staande productversie. */
const WX_ZOMER_R = {
  "bank-04": 1.5,
  "bank-07": 1.378,
  "eettafel-02": 1.5,
  "eettafel-03": 1.5,
  "ronde-tafel-02": 1.5
};
const WX_ZOMER_NAAM = {
  1: "Round table",
  2: "Bedroom",
  3: "Sofa",
  4: "Dining table"
};
const WX_ZOMER_FILMS = [1, 2, 3, 4].map(n => ({
  naam: WX_ZOMER_NAAM[n],
  film: WX_V("zomer-scene-" + n + "-1x1"),
  poster: WX_P("zomer-scene-" + n + "-1x1"),
  kader: "2 / 3"
}));
/* Per scène: de staande productfilm en de foto's uit dezelfde ruimte. */
const WX_ZOMER_SET = {
  1: ["ronde-tafel-01", "ronde-tafel-02"],
  2: ["slaapkamer-01", "slaapkamer-02", "slaapkamer-03"],
  3: ["bank-04", "bank-01", "bank-07", "bank-02", "bank-03", "bank-05", "bank-06"],
  4: ["eettafel-02", "eettafel-01", "eettafel-03"]
};
function wxZomerItems(n) {
  const fotos = (WX_ZOMER_SET[n] || []).map((k, i) => {
    const r = WX_ZOMER_R[k] || 0.667;
    return {
      src: WX + "woonexpress-zomer-" + k + "-web.jpg",
      ratio: r > 1 ? "3 / 2" : "2 / 3",
      breed: r > 1 ? 400 : 250,
      zak: [18, -14, 10, -18, 14, 0][i % 6],
      tekst: "Summer shoot"
    };
  });
  const soc = {
    video: WX_V("zomer-scene-" + n + "-product-9x16"),
    terug: WX_P("zomer-scene-" + n + "-product-9x16"),
    ratio: "9 / 16",
    breed: 230,
    zak: 0,
    tekst: "Social"
  };
  const lijst = fotos.slice();
  lijst.splice(Math.min(1, lijst.length), 0, soc);
  return lijst;
}
const WX_ZOMER_STAAND = [1, 2, 3, 4].map(n => "zomer-scene-" + n + "-product-9x16");
const WX_TAFEL_FILMS = [["tafel-compilatie-9x16", "Compilation"], ["tafel-1-9x16", "Table 1"], ["tafel-2-9x16", "Table 2"], ["tafel-3-9x16", "Table 3"]].map(([k, n]) => ({
  naam: n,
  film: WX_V(k),
  poster: WX_P(k),
  kader: "9 / 16"
}));
/* Zomerfotografie: afgewisseld per ruimte, liggend en staand door elkaar. */
const WX_ZOMER_FOTO = ["bank-04", "slaapkamer-01", "eettafel-02", "bank-01", "ronde-tafel-01", "bank-07", "slaapkamer-02", "eettafel-01", "bank-02", "ronde-tafel-02", "slaapkamer-03", "bank-03", "eettafel-03", "bank-05", "bank-06"].map((k, i) => {
  const r = WX_ZOMER_R[k] || 0.667;
  return {
    src: WX + "woonexpress-zomer-" + k + "-web.jpg",
    ratio: r > 1 ? "3 / 2" : "2 / 3",
    breed: r > 1 ? 400 : 250,
    zak: [0, 18, -14, 10, -18, 14][i % 6],
    tekst: "Summer shoot"
  };
});
const WX_TAFEL_STAAND = ["tafel-1-9x16", "tafel-2-9x16", "tafel-3-9x16"];
function WXKader({
  kader,
  src
}) {
  return /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      display: "block",
      aspectRatio: kader,
      overflow: "hidden",
      borderRadius: 5,
      background: "#0b1730",
      minWidth: 0
    }
  }, src ? /*#__PURE__*/React.createElement("img", {
    src: src,
    alt: "",
    loading: "lazy",
    decoding: "async",
    style: {
      position: "absolute",
      inset: 0,
      width: "100%",
      height: "100%",
      objectFit: "cover",
      display: "block"
    }
  }) : /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("svg", {
    "aria-hidden": "true",
    viewBox: "0 0 52 52",
    width: "18",
    height: "18",
    fill: "none",
    style: {
      position: "absolute",
      left: "8%",
      top: "10%",
      color: "var(--dolle-white)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M6 40 V6 H40",
    stroke: "currentColor",
    strokeWidth: "12"
  })), /*#__PURE__*/React.createElement("svg", {
    "aria-hidden": "true",
    viewBox: "0 0 52 52",
    width: "18",
    height: "18",
    fill: "none",
    style: {
      position: "absolute",
      right: "8%",
      bottom: "10%",
      color: "var(--dolle-white)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M46 12 V46 H12",
    stroke: "currentColor",
    strokeWidth: "12"
  }))));
}

/* Winkelfotografie: gevel en entree afgewisseld met de afdelingen wonen, tafelen en slapen. */
const WX_WINKEL_STAAND = {
  "decoratie-01": 1,
  "decoratie-02": 1,
  "gevel-03": 1,
  "slapen-02": 1,
  "slapen-05": 1,
  "tafelen-02": 1,
  "wonen-05": 1,
  "wonen-07": 1,
  "wonen-08": 1
};
const WX_WINKEL = ["gevel-04", "gevel-01", "tafelen-02", "slapen-02", "decoratie-01", "tafelen-03", "wonen-05", "wonen-08", "decoratie-02", "wonen-09"].map((k, i) => {
  const staand = !!WX_WINKEL_STAAND[k];
  return {
    src: WX + "woonexpress-winkel-" + k + "-web.jpg",
    ratio: staand ? "2 / 3" : "3 / 2",
    breed: staand ? 250 : 400,
    zak: [0, 6, -5, 4, -6, 5][i % 6],
    tekst: "Store photography"
  };
});

/* Behind the scenes: vier loops tussen de setfoto's. */
const WX_BTS_R = {
  "04": "9 / 16",
  "13": "9 / 16"
};
const WX_BTS = ["06", "V2", "11", "03", "09", "V4", "01", "13", "08", "V1", "12", "05", "02", "V3", "10", "04", "07"].map((k, i) => {
  const zak = [0, 34, -26, 18, -34, 26][i % 6];
  const maat = [1, 0.82, 1.12, 0.9, 1.05, 0.86][i % 6];
  if (k[0] === "V") {
    const n = "0" + k.slice(1);
    return {
      video: WX_V("bts-" + n),
      terug: WX + "woonexpress-bts-" + n + "-poster-web.jpg",
      ratio: "9 / 16",
      breed: Math.round(340 * maat),
      zak,
      tekst: "Behind the scenes"
    };
  }
  const r = WX_BTS_R[k] || "3 / 4";
  return {
    src: WX + "woonexpress-bts-foto-" + k + "-web.jpg",
    ratio: r,
    breed: Math.round((r === "9 / 16" ? 340 : 440) * maat),
    zak,
    tekst: "Behind the scenes"
  };
});
/* Stills per bank: de stills uit de film plus de posters van de twee 16:9-versies. */
const WX_BANK_STILL = {
  1: [["01", "5 / 4"], ["05", "8 / 5"]],
  2: [["03", "16 / 9"]],
  3: [["02", "1 / 1"], ["04", "16 / 9"], ["06", "16 / 9"]]
};
function wxBankStills(n) {
  const eigen = (WX_BANK_STILL[n] || []).map(([s, r]) => ({
    src: WX + "woonexpress-still-" + s + "-web.jpg",
    ratio: r
  }));
  const posters = ["model", "product"].map(v => ({
    src: WX + "woonexpress-bank-" + n + "-" + v + "-16x9-poster-web.jpg",
    ratio: "16 / 9"
  }));
  const soc = ["model", "product"].map(v => ({
    video: WX_V("bank-" + n + "-" + v + "-9x16"),
    terug: WX_P("bank-" + n + "-" + v + "-9x16"),
    ratio: "9 / 16"
  }));
  const alle = eigen.concat(posters);
  return alle.map((b, i) => b.video ? {
    ...b,
    breed: 230,
    zak: 0,
    tekst: "Social · Sofa " + n
  } : {
    ...b,
    breed: b.ratio === "1 / 1" ? 300 : b.ratio === "5 / 4" ? 340 : 420,
    zak: [0, 4, -3, 3, -4][i % 5],
    tekst: "Sofa " + n
  });
}
/* Stills uit de sofa-films. */
const WX_STILLS = [["01", "5 / 4"], ["03", "16 / 9"], ["02", "1 / 1"], ["04", "16 / 9"], ["05", "8 / 5"], ["06", "16 / 9"]].map(([n, r], i) => ({
  src: WX + "woonexpress-still-" + n + "-web.jpg",
  ratio: r,
  breed: r === "1 / 1" ? 320 : r === "5 / 4" ? 360 : 440,
  zak: [0, 6, -5, 4, -6, 5][i % 6],
  tekst: "Film still"
}));

/* Moodboard: vijf vakken, telkens wisselt één vak rustig naar een ander beeld. */
function WXMood({
  beelden
}) {
  const n = 5;
  const [vakken, setVakken] = React.useState(() => beelden.slice(0, n).map((src, i) => ({
    src,
    oud: null,
    sleutel: i
  })));
  const teller = React.useRef(n);
  const vorige = React.useRef(-1);
  React.useEffect(() => {
    if (window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const t = setInterval(() => {
      setVakken(huidig => {
        const zichtbaar = huidig.map(v => v.src);
        const vrij = beelden.filter(b => !zichtbaar.includes(b));
        if (!vrij.length) return huidig;
        let plek;
        do {
          plek = Math.floor(Math.random() * n);
        } while (plek === vorige.current && n > 1);
        vorige.current = plek;
        const nieuw = vrij[Math.floor(Math.random() * vrij.length)];
        teller.current += 1;
        return huidig.map((v, i) => i === plek ? {
          src: nieuw,
          oud: v.src,
          sleutel: teller.current
        } : v);
      });
    }, 2300);
    return () => clearInterval(t);
  }, [beelden]);
  const wissel = plek => setVakken(huidig => {
    const zichtbaar = huidig.map(v => v.src);
    const vrij = beelden.filter(b => !zichtbaar.includes(b));
    if (!vrij.length) return huidig;
    vorige.current = plek;
    teller.current += 1;
    const nieuw = vrij[Math.floor(Math.random() * vrij.length)];
    return huidig.map((v, i) => i === plek ? {
      src: nieuw,
      oud: v.src,
      sleutel: teller.current
    } : v);
  });
  const plaats = [{
    gridColumn: "1",
    gridRow: "1 / span 2"
  }, {
    gridColumn: "2",
    gridRow: "1"
  }, {
    gridColumn: "3",
    gridRow: "1"
  }, {
    gridColumn: "2 / span 2",
    gridRow: "2"
  }, {
    gridColumn: "4",
    gridRow: "1 / span 2"
  }];
  return /*#__PURE__*/React.createElement("div", {
    "data-wx-mood": "1",
    style: {
      display: "grid",
      gridTemplateColumns: "minmax(0,1.6fr) minmax(0,1fr) minmax(0,1fr) minmax(0,1.1fr)",
      gridTemplateRows: "repeat(2, clamp(170px,17vw,290px))",
      gap: "var(--space-3)"
    }
  }, /*#__PURE__*/React.createElement("style", null, "@keyframes wxMoodIn{from{opacity:0;transform:scale(1.04)}to{opacity:1;transform:scale(1)}}@media (max-width:760px){[data-wx-mood]{grid-template-columns:repeat(2,minmax(0,1fr))!important;grid-template-rows:repeat(3,44vw)!important}[data-wx-mood]>div:nth-child(2){grid-column:1!important;grid-row:1/span 2!important}[data-wx-mood]>div:nth-child(3){grid-column:2!important;grid-row:1!important}[data-wx-mood]>div:nth-child(4){grid-column:2!important;grid-row:2!important}[data-wx-mood]>div:nth-child(5){grid-column:1/span 2!important;grid-row:3!important}[data-wx-mood]>div:nth-child(6){display:none}}"), vakken.map((v, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    onClick: () => wissel(i),
    style: {
      ...plaats[i],
      position: "relative",
      overflow: "hidden",
      borderRadius: "5px",
      background: "#0a1428",
      minWidth: 0,
      cursor: "pointer"
    }
  }, v.oud ? /*#__PURE__*/React.createElement("img", {
    src: v.oud,
    alt: "",
    style: {
      position: "absolute",
      inset: 0,
      width: "100%",
      height: "100%",
      objectFit: "cover",
      display: "block"
    }
  }) : null, /*#__PURE__*/React.createElement("img", {
    key: v.sleutel,
    src: v.src,
    alt: "",
    loading: "lazy",
    style: {
      position: "absolute",
      inset: 0,
      width: "100%",
      height: "100%",
      objectFit: "cover",
      display: "block",
      animation: v.oud ? "wxMoodIn 1400ms cubic-bezier(.16,.84,.24,1) both" : "none"
    }
  }))));
}

/* Studio shoot: in rust per set één video (versie A). Klik opent de set: A en B naast elkaar.
   Hover speelt de versie onder de muis af (de andere stopt); klik of wegscrollen sluit. */
function WXDuo() {
  const sets = [1, 2, 3];
  const [aan, setAan] = React.useState(-1);
  const [kant, setKant] = React.useState(0);
  const [geluid, setGeluid] = React.useState(false);
  const vak = React.useRef(null);
  const vids = i => vak.current ? [...vak.current.children[i].querySelectorAll("video")] : [];
  const stop = i => vids(i).forEach(v => {
    v.pause();
    v.muted = true;
  });
  React.useEffect(() => {
    if (!vak.current) return;
    sets.forEach((s, i) => {
      if (i !== aan) stop(i);
    });
    if (aan < 0) return;
    const buiten = e => {
      if (vak.current && !vak.current.contains(e.target)) setAan(-1);
    };
    const weg = () => {
      const r = vak.current && vak.current.getBoundingClientRect();
      if (r && (r.bottom < 0 || r.top > window.innerHeight)) setAan(-1);
    };
    document.addEventListener("pointerdown", buiten, true);
    window.addEventListener("scroll", weg, {
      passive: true
    });
    return () => {
      document.removeEventListener("pointerdown", buiten, true);
      window.removeEventListener("scroll", weg);
    };
  }, [aan]);
  const klik = i => {
    if (aan === i) {
      setAan(-1);
      return;
    }
    setKant(-1);
    setAan(i);
  };
  const hover = (i, j) => {
    if (aan !== i) return;
    setKant(j);
    vids(i).forEach((v, k) => {
      if (k === j) {
        v.muted = !geluid;
        const p = v.play();
        if (p && p.catch) p.catch(() => {});
      } else v.pause();
    });
  };
  const vloei = "900ms cubic-bezier(.16,.84,.24,1)";
  const kol = sets.map((s, i) => aan < 0 ? "minmax(0,1fr)" : i === aan ? "minmax(0,2.2fr)" : "minmax(0,0.6fr)").join(" ");
  return /*#__PURE__*/React.createElement("div", {
    ref: vak,
    "data-wx-duo": "1",
    style: {
      display: "grid",
      gridTemplateColumns: kol,
      gap: "var(--space-4)",
      alignItems: "start",
      transition: "grid-template-columns " + vloei
    }
  }, sets.map((s, i) => {
    const open = aan === i;
    return /*#__PURE__*/React.createElement("div", {
      key: s,
      style: {
        display: "grid",
        gap: "var(--space-3)",
        minWidth: 0,
        opacity: aan < 0 || open ? 1 : 0.5,
        transition: "opacity 600ms var(--ease-dolle)"
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: "grid",
        gridTemplateColumns: open ? "minmax(0,1fr) minmax(0,1fr)" : "minmax(0,1fr) minmax(0,0fr)",
        columnGap: open ? 4 : 0,
        height: "clamp(360px,40vw,620px)",
        cursor: "pointer",
        transition: "grid-template-columns " + vloei + ", column-gap " + vloei
      }
    }, ["a", "b"].map((v, j) => /*#__PURE__*/React.createElement("span", {
      key: v,
      onClick: () => klik(i),
      onMouseEnter: () => hover(i, j),
      onMouseLeave: () => {
        if (aan === i) {
          vids(i)[j] && vids(i)[j].pause();
          setKant(-1);
        }
      },
      style: {
        position: "relative",
        display: "block",
        minWidth: 0,
        overflow: "hidden",
        borderRadius: 5,
        background: "#0a1428",
        opacity: j === 0 || open ? 1 : 0,
        transition: "opacity 700ms var(--ease-dolle) " + (open && j ? "200ms" : "0ms")
      }
    }, /*#__PURE__*/React.createElement("video", {
      src: WX_VID + "woonexpress-studio-set" + s + "-" + v + ".mp4#t=0.8",
      muted: true,
      loop: true,
      playsInline: true,
      preload: "metadata",
      style: {
        position: "absolute",
        inset: 0,
        width: "100%",
        height: "100%",
        objectFit: "cover",
        display: "block"
      }
    }), open ? /*#__PURE__*/React.createElement("span", {
      "aria-hidden": "true",
      style: {
        position: "absolute",
        left: 10,
        bottom: 14,
        fontFamily: "var(--font-label)",
        fontSize: 10,
        fontWeight: 600,
        letterSpacing: "var(--track-label-wide)",
        color: "var(--dolle-white)",
        textShadow: "0 1px 6px rgba(0,0,0,.45)",
        opacity: kant === j ? 1 : 0.7,
        whiteSpace: "nowrap"
      }
    }, "Version " + (j ? "B" : "A")) : null, open ? /*#__PURE__*/React.createElement("button", {
      type: "button",
      "aria-label": geluid ? "Sound off" : "Sound on",
      onClick: e => {
        e.stopPropagation();
        const aan = !geluid;
        setGeluid(aan);
        vids(i).forEach((x, k) => {
          x.muted = !(aan && k === j);
          if (aan && k === j && x.paused) {
            const pr = x.play();
            if (pr && pr.catch) pr.catch(() => {});
          }
        });
        setKant(j);
      },
      style: {
        position: "absolute",
        right: 10,
        bottom: 10,
        width: 32,
        height: 32,
        borderRadius: 999,
        border: "1px solid rgba(255,255,255,0.5)",
        background: "rgba(16,31,60,0.45)",
        backdropFilter: "blur(4px)",
        color: "var(--dolle-white)",
        display: "grid",
        placeItems: "center",
        cursor: "pointer",
        padding: 0
      }
    }, /*#__PURE__*/React.createElement("svg", {
      viewBox: "0 0 24 24",
      width: "15",
      height: "15",
      fill: "none",
      stroke: "currentColor",
      strokeWidth: "2",
      "aria-hidden": "true"
    }, /*#__PURE__*/React.createElement("path", {
      d: "M4 9v6h4l5 4V5L8 9H4z",
      fill: "currentColor",
      stroke: "none"
    }), geluid ? /*#__PURE__*/React.createElement("path", {
      d: "M16 8.5a5 5 0 0 1 0 7M18.5 6a8.5 8.5 0 0 1 0 12"
    }) : /*#__PURE__*/React.createElement("path", {
      d: "M17 9l5 6M22 9l-5 6"
    }))) : null))), /*#__PURE__*/React.createElement(WXKicker, {
      size: "sm",
      style: {
        display: "block",
        whiteSpace: "nowrap",
        overflow: "hidden",
        textOverflow: "ellipsis",
        color: open ? "var(--text-heading)" : "var(--text-muted)"
      }
    }, "Set " + s + (open ? " · two versions" : "")));
  }));
}
function WXLaag({
  kop,
  tekst,
  children,
  geenKop,
  geenMasker,
  vanRechts,
  volLijn
}) {
  const Lijn = window.CMLijn,
    Masker = window.CMMasker;
  /* vanRechts: de kop en tekst schuiven met de scroll van rechts naar hun plek. */
  const kopRef = React.useRef(null);
  const scroll = window.useCMScroll || (() => {});
  scroll(kopRef, (r, vh) => {
    if (!vanRechts || !kopRef.current) return;
    const el = kopRef.current,
      ouder = el.parentElement;
    const ruimte = Math.max(0, ouder.clientWidth - el.offsetWidth);
    const t = Math.max(0, Math.min(1, (vh * 1.05 - r.top) / (vh * 0.85)));
    const e = t * t * (3 - 2 * t);
    el.style.translate = ((1 - e) * ruimte).toFixed(1) + "px 0";
  }, [vanRechts]);
  const inhoud = children;
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "minmax(0,1fr)",
      minWidth: 0
    }
  }, Lijn ? volLijn ? /*#__PURE__*/React.createElement(Lijn, {
    basis: true,
    blijf: true
  }) : /*#__PURE__*/React.createElement(Lijn, null) : /*#__PURE__*/React.createElement("div", {
    style: {
      height: 1,
      background: "var(--white-24, rgba(255,255,255,0.24))"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "minmax(0,1fr)",
      minWidth: 0,
      gap: "var(--space-5)",
      paddingTop: "var(--space-6)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    ref: kopRef,
    style: {
      display: geenKop ? "none" : "grid",
      gap: "var(--space-3)",
      maxWidth: "52ch",
      willChange: vanRechts ? "translate" : undefined
    }
  }, /*#__PURE__*/React.createElement("h2", {
    style: {
      margin: 0,
      fontFamily: "var(--font-core)",
      fontWeight: "var(--weight-heading)",
      fontSize: "clamp(19px,2vw,27px)",
      letterSpacing: "var(--track-heading)",
      color: "var(--text-heading)"
    }
  }, kop), tekst ? /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontSize: "var(--size-body)",
      lineHeight: "var(--lh-body)"
    }
  }, tekst) : null), inhoud));
}

/* Ruimte voor behind the scenes onder elke campagne; beeld volgt. */
function WXBts() {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gap: "var(--space-3)"
    }
  }, /*#__PURE__*/React.createElement(WXKicker, {
    size: "sm",
    style: {
      display: "block",
      whiteSpace: "nowrap",
      color: "var(--text-muted)"
    }
  }, "Behind the scenes"), /*#__PURE__*/React.createElement("div", {
    "data-wx-vier": "1",
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(4,minmax(0,1fr))",
      gap: "var(--space-3)"
    }
  }, [0, 1, 2, 3].map(i => /*#__PURE__*/React.createElement(WXKader, {
    key: i,
    kader: "4 / 5"
  }))));
}

/* Hoofdfilm klein naast de tekst; bij afspelen vouwt hij open tot volle breedte
   en na pauze of afloop gaat hij terug. */
function WXOntvouw({
  kop,
  tekst,
  bron,
  poster,
  onder,
  plak,
  breed
}) {
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
    const el = vak.current;
    if (!el) return;
    const aan = () => setOpen(true);
    const uit = () => {
      setOpen(false);
      setSleutel(n => n + 1);
    };
    el.addEventListener("play", aan, true);
    el.addEventListener("pause", uit, true);
    el.addEventListener("ended", uit, true);
    return () => {
      el.removeEventListener("play", aan, true);
      el.removeEventListener("pause", uit, true);
      el.removeEventListener("ended", uit, true);
    };
  }, []);
  const vloei = "900ms cubic-bezier(.16,.84,.24,1)";
  const raster = /*#__PURE__*/React.createElement("div", {
    "data-wx-ontvouw": "1",
    style: {
      display: "grid",
      gridTemplateColumns: open ? "minmax(0,0fr) minmax(0,1fr)" : breed ? "minmax(0,0.75fr) minmax(0,1.6fr)" : "minmax(0,1fr) minmax(0,1fr)",
      columnGap: open ? 0 : "calc(var(--grid-gap) * 1.1)",
      alignItems: "start",
      transition: "grid-template-columns " + vloei + ", column-gap " + vloei
    }
  }, /*#__PURE__*/React.createElement("div", {
    ref: tekstRef,
    style: {
      display: "grid",
      gap: "var(--space-3)",
      alignContent: "start",
      maxWidth: "45ch",
      overflow: "hidden",
      opacity: open ? 0 : 1,
      transition: "opacity 420ms var(--ease-dolle)"
    }
  }, kop ? /*#__PURE__*/React.createElement("h2", {
    style: {
      margin: 0,
      fontFamily: "var(--font-core)",
      fontWeight: "var(--weight-heading)",
      fontSize: "clamp(19px,2vw,27px)",
      lineHeight: 1.1,
      letterSpacing: "var(--track-heading)",
      color: "var(--text-heading)"
    }
  }, kop) : null, /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontSize: "var(--size-body)",
      lineHeight: "var(--lh-body)"
    }
  }, tekst)), /*#__PURE__*/React.createElement("div", {
    ref: vak,
    style: {
      minWidth: 0
    }
  }, Film ? /*#__PURE__*/React.createElement(Film, {
    key: sleutel,
    bron: bron,
    poster: poster,
    onderschrift: onder,
    watch: true,
    watchSchaal: open ? 3.2 : 2
  }) : null));
  if (!pin) return raster;
  return /*#__PURE__*/React.createElement("div", {
    ref: weg
  }, raster);
}
function WXStaand({
  lijst
}) {
  const H = window.BVHover;
  return /*#__PURE__*/React.createElement("div", {
    "data-wx-staand": "1",
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(" + lijst.length + ",minmax(0,1fr))",
      gap: "var(--space-3)"
    }
  }, lijst.map(k => H ? /*#__PURE__*/React.createElement(H, {
    key: k,
    bron: WX_V(k),
    poster: WX_P(k),
    kader: "9 / 16"
  }) : /*#__PURE__*/React.createElement(WXKader, {
    key: k,
    kader: "9 / 16",
    src: WX_P(k)
  })));
}

/* Cijfers voor het datablok. views: vul het echte aantal in (getal), tot die tijd een streepje. */
const WX_DATA = [{
  label: "Views generated",
  waarde: "—"
}, {
  label: "Campaigns",
  waarde: 5
}, {
  label: "Films delivered",
  waarde: 36
}, {
  label: "Photos delivered",
  waarde: 52
}];
const WX_INTRO = ["Woonexpress is a Dutch furniture chain known for a broad, on-trend and affordable range that lets everyone bring warmth and comfort into their home right away.", "Since 2023, DOLLE has produced the brand's full visual output. Seasonal campaigns, collection shoots, studio and social content, store photography and internal films. One consistent look for Woonexpress, in every season and on every channel."];
function CaseWoonexpress({
  go
}) {
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
    const tik = e => {
      const v = e.target;
      if (!v || v.tagName !== "VIDEO" || !v.duration || !/woonexpress-/.test(v.currentSrc || v.src || "")) return;
      if (v.currentTime > v.duration - KAP) {
        if (v.loop) v.currentTime = 0.05;else {
          v.pause();
          v.currentTime = 0.05;
          v.dispatchEvent(new Event("ended"));
        }
      }
    };
    document.addEventListener("timeupdate", tik, true);
    return () => document.removeEventListener("timeupdate", tik, true);
  }, []);
  /* Header: de blauwe band schuift over de stilstaande film heen; de film
     zakt iets terug en dimt terwijl hij wordt bedekt. */
  const kopVak = React.useRef(null),
    kopFilm = React.useRef(null),
    kopWaas = React.useRef(null),
    kopTekst = React.useRef(null);
  React.useEffect(() => {
    if (window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    let raf = 0;
    const kopH = () => {
      const h = document.querySelector("header");
      const n = h && h.offsetHeight ? h.offsetHeight : 92;
      if (kopVak.current) kopVak.current.style.setProperty("--wx-nav", n + "px");
    };
    kopH();
    const tik = () => {
      raf = 0;
      const v = kopVak.current;
      if (!v) return;
      const vh = v.offsetHeight || window.innerHeight || 800;
      const volgende = v.nextElementSibling;
      if (!volgende) return;
      const navH = parseFloat(v.style.getPropertyValue("--wx-nav")) || 92;
      const p = Math.max(0, Math.min(1, 1 - (volgende.getBoundingClientRect().top - navH) / vh));
      if (kopFilm.current) kopFilm.current.style.transform = "translate3d(0," + (-p * vh * 0.12).toFixed(1) + "px,0) scale(" + (1 + p * 0.06).toFixed(4) + ")";
      if (kopWaas.current) kopWaas.current.style.opacity = (p * 0.55).toFixed(3);
      /* De titel staat eerst onderin de film en wordt door de blauwe band
         opgepakt: hij rijdt mee naar boven en landt bovenin de band. */
      if (kopTekst.current) {
        const k = kopTekst.current,
          off = k.offsetHeight + (parseFloat(getComputedStyle(volgende).paddingTop) || 0) + 32;
        const e = 1 - p;
        k.style.transform = "translate3d(0," + (-off * e * e * (3 - 2 * e)).toFixed(1) + "px,0)";
      }
    };
    const op = () => {
      if (!raf) raf = requestAnimationFrame(tik);
    };
    tik();
    window.addEventListener("scroll", op, {
      passive: true,
      capture: true
    });
    const rs = () => {
      kopH();
      op();
    };
    window.addEventListener("resize", rs);
    return () => {
      window.removeEventListener("scroll", op, true);
      window.removeEventListener("resize", rs);
      if (raf) cancelAnimationFrame(raf);
    };
  }, []);
  /* Intro: de tekst zakt met de scroll mee en blijft staan zodra zijn
     onderkant gelijk ligt met de onderkant van de hoofdfoto. */
  const introVak = React.useRef(null),
    introTekst = React.useRef(null);
  React.useEffect(() => {
    let raf = 0;
    const tik = () => {
      raf = 0;
      const v = introVak.current,
        t = introTekst.current;
      if (!v || !t) return;
      if (window.innerWidth <= 860) {
        t.style.translate = "0 0";
        return;
      }
      const navH = (document.querySelector("header") || {}).offsetHeight || 92;
      const ruimte = Math.max(0, v.offsetHeight - t.offsetHeight);
      const y = Math.max(0, Math.min(ruimte, navH + 24 - v.getBoundingClientRect().top));
      t.style.translate = "0 " + y.toFixed(1) + "px";
    };
    const op = () => {
      if (!raf) raf = requestAnimationFrame(tik);
    };
    tik();
    window.addEventListener("scroll", op, {
      passive: true,
      capture: true
    });
    window.addEventListener("resize", op);
    return () => {
      window.removeEventListener("scroll", op, true);
      window.removeEventListener("resize", op);
      if (raf) cancelAnimationFrame(raf);
    };
  }, []);
  const useT = window.useTweaks || (d => [d, () => {}]);
  const [t, setTweak] = useT(window.WX_TWEAKS || {
    kop: "beeld",
    opening: "masker",
    intro: "plak",
    winkel: "strook"
  });
  const TP = window.TweaksPanel,
    TR = window.TweakRadio,
    TS = window.TweakSection;
  const buitenBeeld = sel => {
    const el = document.querySelector(sel);
    if (!el) return false;
    const r = el.getBoundingClientRect();
    return r.bottom < 0 || r.top > window.innerHeight;
  };
  const namen = ["Montel", "Landgoed Bergvliet", "Kiela", "Eezy"];
  const verwant = namen.map(n => (window.CASES || []).find(c => c.klant === n)).filter(Boolean);
  if (!Film) return null;
  const sectie = {
    background: "var(--dolle-navy)",
    color: "var(--text-body)",
    padding: "var(--space-6) var(--page-margin)"
  };
  const binnen = {
    maxWidth: "var(--content-max)",
    margin: "0 auto",
    display: "grid",
    gridTemplateColumns: "minmax(0,1fr)",
    gap: "var(--space-6)"
  };
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("style", null, "@media (max-width:1000px){[data-cm-data]{grid-template-columns:repeat(2,minmax(0,1fr)) !important;row-gap:var(--space-7) !important}}@media (max-width:860px){[data-wx-opening],[data-wx-tafel],[data-wx-ontvouw]{grid-template-columns:minmax(0,1fr) !important}[data-wx-staand],[data-wx-vier],[data-wx-zomer]{grid-template-columns:repeat(2,minmax(0,1fr)) !important}[data-wx-collage]>div{grid-column:span 6 !important;grid-row:auto !important}[data-bv-deel],[data-wx-duo],[data-wx-bankopen]{grid-template-columns:minmax(0,1fr) !important}}"), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative"
    }
  }, t.kop !== "klassiek" ?
  /*#__PURE__*/
  /* Kop als volle beeldvlak: film over de hele breedte, titel, lijn en
     tags onderin op een donkere verloop. */
  React.createElement("section", {
    ref: kopVak,
    className: "dolle-dark",
    style: {
      position: "sticky",
      top: "var(--wx-nav, 92px)",
      zIndex: 0,
      height: "calc(100svh - var(--wx-nav, 92px))",
      minHeight: 420,
      overflow: "hidden",
      background: "var(--dolle-navy)"
    }
  }, /*#__PURE__*/React.createElement("video", {
    ref: kopFilm,
    src: "../../assets/video/woonexpress-see-fase-16x9.mp4",
    poster: WX + "woonexpress-still-03-web.jpg",
    autoPlay: true,
    muted: true,
    loop: true,
    playsInline: true,
    preload: "auto",
    style: {
      position: "absolute",
      inset: 0,
      width: "100%",
      height: "100%",
      objectFit: "cover",
      display: "block",
      willChange: "transform"
    }
  }), /*#__PURE__*/React.createElement("div", {
    ref: kopWaas,
    "aria-hidden": "true",
    style: {
      position: "absolute",
      inset: 0,
      background: "var(--dolle-navy)",
      opacity: 0,
      pointerEvents: "none"
    }
  }), /*#__PURE__*/React.createElement("div", {
    "aria-hidden": "true",
    style: {
      position: "absolute",
      inset: 0,
      background: "linear-gradient(180deg, rgba(16,31,60,0.45) 0%, rgba(16,31,60,0) 22%, rgba(16,31,60,0) 48%, rgba(16,31,60,0.88) 100%)"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: "var(--page-margin)",
      right: "var(--page-margin)",
      top: "clamp(88px,12vh,130px)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: "var(--content-max)",
      margin: "0 auto"
    }
  }, /*#__PURE__*/React.createElement(WXButton, {
    size: "sm",
    variant: "secondary",
    onClick: () => go("cases"),
    style: {
      color: "var(--dolle-white)",
      borderColor: "transparent"
    }
  }, "All cases")))) : null, /*#__PURE__*/React.createElement("section", {
    className: "dolle-dark",
    style: {
      position: "relative",
      zIndex: 1,
      background: "var(--dolle-navy)",
      padding: (t.kop !== "klassiek" ? "var(--space-6)" : "clamp(72px,12vh,140px)") + " var(--page-margin) var(--space-6)"
    }
  }, t.kop !== "klassiek" ? /*#__PURE__*/React.createElement("div", {
    ref: kopTekst,
    style: {
      position: "relative",
      zIndex: 2,
      maxWidth: "var(--content-max)",
      margin: "0 auto var(--space-7)",
      willChange: "transform"
    }
  }, /*#__PURE__*/React.createElement(WXWords, {
    as: "h1",
    text: "Woonexpress",
    style: {
      margin: 0,
      paddingBottom: "var(--space-4)",
      fontSize: "clamp(36px,5.4vw,84px)",
      lineHeight: 1.02,
      letterSpacing: "var(--track-heading)",
      color: "var(--dolle-white)"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      height: 1,
      background: "rgba(255,255,255,0.4)"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: "var(--space-2)",
      flexWrap: "wrap",
      paddingTop: "var(--space-4)"
    }
  }, ["Media production", "Growth", "Launches"].map((k, n) => /*#__PURE__*/React.createElement(WXTag, {
    key: k
  }, window.CMVulIn ? /*#__PURE__*/React.createElement(window.CMVulIn, {
    vertraging: 250 + n * 160
  }, k) : k)))) : null, t.kop === "klassiek" ? /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: "var(--content-max)",
      margin: "0 auto"
    }
  }, /*#__PURE__*/React.createElement(WXButton, {
    size: "sm",
    variant: "secondary",
    onClick: () => go("cases"),
    style: {
      color: "var(--dolle-white)",
      borderColor: "transparent",
      marginBottom: "var(--space-5)"
    }
  }, "All cases"), /*#__PURE__*/React.createElement(WXWords, {
    as: "h1",
    text: "Woonexpress",
    style: {
      margin: 0,
      paddingBottom: "var(--space-4)",
      fontSize: "clamp(30px,4.2vw,58px)",
      lineHeight: 1.02,
      letterSpacing: "var(--track-heading)"
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: "var(--content-max)",
      margin: "0 auto",
      height: 1,
      background: "var(--white-24, rgba(255,255,255,0.24))"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: "var(--content-max)",
      margin: "0 auto",
      display: "flex",
      gap: "var(--space-2)",
      flexWrap: "wrap",
      padding: "var(--space-4) 0 var(--space-6)"
    }
  }, ["Media production", "Growth", "Launches"].map((k, n) => /*#__PURE__*/React.createElement(WXTag, {
    key: k
  }, window.CMVulIn ? /*#__PURE__*/React.createElement(window.CMVulIn, {
    vertraging: 250 + n * 160
  }, k) : k)))) : null, (() => {
    const beeld = window.CMOpeningBeeld ? /*#__PURE__*/React.createElement(window.CMOpeningBeeld, {
      modus: "groei",
      start: 0.3,
      ratio: "16 / 9",
      src: WX + "woonexpress-still-03-web.jpg"
    }) : /*#__PURE__*/React.createElement(WXKader, {
      kader: "16 / 9",
      src: WX + "woonexpress-still-03-web.jpg"
    });
    const tekst = WX_INTRO.map((z, i) => /*#__PURE__*/React.createElement("p", {
      key: i,
      className: "dolle-lead",
      style: {
        margin: 0
      }
    }, z));
    if (t.intro === "plak" && window.CMPlak) return /*#__PURE__*/React.createElement(window.CMPlak, {
      beeld: beeld,
      tekst: tekst
    });
    return /*#__PURE__*/React.createElement("div", {
      ref: introVak,
      "data-wx-opening": "1",
      style: {
        maxWidth: "var(--content-max)",
        margin: "0 auto",
        display: "grid",
        gridTemplateColumns: "minmax(0,0.75fr) minmax(0,1.6fr)",
        gap: "calc(var(--grid-gap) * 1.1)",
        alignItems: "start"
      }
    }, /*#__PURE__*/React.createElement("div", {
      ref: introTekst,
      style: {
        maxWidth: "45ch",
        display: "grid",
        gap: "var(--space-4)",
        willChange: "translate"
      }
    }, tekst), beeld);
  })())), window.BVBand ? /*#__PURE__*/React.createElement("section", {
    className: "dolle-dark",
    style: {
      background: "var(--dolle-navy)",
      padding: "0 var(--page-margin) var(--space-6)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: "var(--content-max)",
      margin: "0 auto"
    }
  }, window.CMOpkomst ? /*#__PURE__*/React.createElement(window.CMOpkomst, {
    vertraging: 700
  }, /*#__PURE__*/React.createElement(window.BVBand, {
    items: wxBandLijst(),
    hoog: "clamp(200px,24vw,340px)",
    sleep: true,
    golf: true,
    kap: 2.6
  })) : /*#__PURE__*/React.createElement(window.BVBand, {
    items: wxBandLijst(),
    hoog: "clamp(200px,24vw,340px)",
    sleep: true
  }))) : null, /*#__PURE__*/React.createElement("section", {
    className: "dolle-dark",
    style: sectie
  }, /*#__PURE__*/React.createElement("div", {
    style: binnen
  }, window.CMLijn ? /*#__PURE__*/React.createElement(window.CMLijn, null) : null, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "baseline",
      gap: "var(--space-6)",
      flexWrap: "wrap",
      marginTop: "calc(var(--space-6) * -1)",
      paddingTop: "var(--space-6)"
    }
  }, /*#__PURE__*/React.createElement(WXKicker, {
    style: {
      display: "block",
      whiteSpace: "nowrap",
      color: "var(--text-muted)",
      fontSize: "clamp(13px,1.15vw,17px)"
    }
  }, "CAMPAIGNS"), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-core)",
      fontWeight: "var(--weight-heading)",
      fontSize: "clamp(18px,2.2vw,30px)",
      letterSpacing: "var(--track-wildly)",
      textTransform: "uppercase",
      color: "var(--text-heading)",
      whiteSpace: "nowrap"
    }
  }, window.CMWildly ? /*#__PURE__*/React.createElement(window.CMWildly, null) : /*#__PURE__*/React.createElement(React.Fragment, null, "Wildly ", /*#__PURE__*/React.createElement("span", {
    style: {
      color: "var(--text-accent)"
    }
  }, "visible")))), /*#__PURE__*/React.createElement(WXLaag, {
    kop: "Summer shoot",
    tekst: "A summer shoot built to show the cheerful side of Woonexpress: colourful furniture and a range of models that fit what the brand stands for. \u2018De leukste woonwinkel van Nederland\u2019."
  }, window.BVDeelfilms ? /*#__PURE__*/React.createElement("div", {
    "data-wx-zomerfilms": "1"
  }, (() => {
    const In = window.CMInScroll || (x => x.children);
    return /*#__PURE__*/React.createElement(In, {
      sel: "[data-bv-deel]"
    }, /*#__PURE__*/React.createElement(window.BVDeelfilms, {
      watchHover: true,
      films: WX_ZOMER_FILMS,
      groot: 1.15,
      klein: 0.95,
      onAan: n => {
        setStil(n < 0 && buitenBeeld("[data-wx-zomerfilms]"));
        setZomer(n);
        if (n > -1) setTimeout(() => {
          const el = document.querySelector("[data-wx-zomerfilms]");
          if (!el) return;
          const d = el.getBoundingClientRect().top - window.innerHeight * 0.18;
          if (Math.abs(d) > 24) window.scrollBy({
            top: Math.round(d),
            behavior: "smooth"
          });
        }, 120);
      }
    }));
  })()) : null, /*#__PURE__*/React.createElement("div", {
    "data-deel-binnen": "1",
    style: {
      overflow: "hidden",
      maxHeight: zomer > -1 ? "900px" : "0px",
      opacity: zomer > -1 ? 1 : 0,
      transform: zomer > -1 ? "translate3d(0,0,0)" : "translate3d(0,28px,0)",
      transition: stil ? "none" : "max-height 1300ms cubic-bezier(.16,.84,.24,1), opacity 1000ms var(--ease-dolle) " + (zomer > -1 ? "260ms" : "0ms") + ", transform 1300ms cubic-bezier(.16,.84,.24,1)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gap: "var(--space-2)",
      marginTop: "calc(var(--space-4) * -1)"
    }
  }, /*#__PURE__*/React.createElement(WXKicker, {
    size: "sm",
    style: {
      display: "block",
      whiteSpace: "nowrap",
      color: "var(--text-muted)"
    }
  }, zomer > -1 ? "Product & photography · " + WX_ZOMER_NAAM[zomer + 1] : "Product & photography"), zomer > -1 && window.CaseKaarten ? /*#__PURE__*/React.createElement(window.CaseKaarten, {
    key: "zomer-" + zomer,
    items: wxZomerItems(zomer + 1).map(k => ({
      ...k,
      zak: Math.round((k.zak || 0) / 3)
    })),
    tempo: 0.5,
    schuif: true
  }) : null))), /*#__PURE__*/React.createElement(WXLaag, {
    kop: "Sofa campaign",
    geenKop: true
  }, /*#__PURE__*/React.createElement(WXOntvouw, {
    plak: true,
    kop: "Sofa campaign",
    tekst: "New collections shot as a campaign rather than a catalogue bringing furniture to live. Sofas, dining tables and the rooms around them, styled and lit so a customer sees the setting before the product.",
    bron: WX_V("see-fase-16x9"),
    poster: WX_P("see-fase-16x9"),
    onder: "INTERIOR COMPILATION WOONEXPRESS"
  }), window.BVDeelfilms ? /*#__PURE__*/React.createElement("div", {
    "data-wx-bankfilms": "1"
  }, /*#__PURE__*/React.createElement(window.BVDeelfilms, {
    watchHover: true,
    vloei: "1300ms cubic-bezier(.45,0,.2,1)",
    films: WX_BANK_FILMS,
    onAan: n => {
      setStil(n < 0 && buitenBeeld("[data-wx-bankfilms]"));
      setBank(n);
      if (n > -1) setTimeout(() => {
        const el = document.querySelector("[data-wx-bankfilms]");
        if (!el) return;
        const d = el.getBoundingClientRect().top - window.innerHeight * 0.11;
        if (Math.abs(d) > 24) window.scrollBy({
          top: Math.round(d),
          behavior: "smooth"
        });
      }, 120);
    }
  })) : null, /*#__PURE__*/React.createElement("div", {
    "data-deel-binnen": "1",
    style: {
      overflow: "hidden",
      maxHeight: bank > -1 ? "1400px" : "0px",
      opacity: bank > -1 ? 1 : 0,
      transition: stil ? "none" : "max-height 1300ms cubic-bezier(.45,0,.2,1), opacity 800ms var(--ease-dolle) " + (bank > -1 ? "300ms" : "0ms")
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gap: "var(--space-3)",
      minWidth: 0,
      paddingTop: "var(--space-2)"
    }
  }, /*#__PURE__*/React.createElement(WXKicker, {
    size: "sm",
    style: {
      display: "block",
      whiteSpace: "nowrap",
      color: "var(--text-muted)"
    }
  }, bank > -1 ? "Stills · Sofa " + (bank + 1) : "Stills"), bank > -1 && window.CaseKaarten ? /*#__PURE__*/React.createElement(window.CaseKaarten, {
    key: "bank-" + bank,
    items: wxBankStills(bank + 1),
    tempo: 0.5,
    schuif: true
  }) : null))), /*#__PURE__*/React.createElement(WXLaag, {
    kop: "Dining table campaign",
    tekst: "Three dining tables and the chairs around them, each filmed in its own setting. Together they form one compilation, with a separate film per table and one for the chairs."
  }, window.BVDeelfilms ? window.CMVerspring ? /*#__PURE__*/React.createElement(window.CMBinnen, {
    snelheden: [0.12, 0.06, 0.16, 0.09]
  }, /*#__PURE__*/React.createElement(window.BVDeelfilms, {
    watchHover: true,
    films: WX_TAFEL_FILMS,
    groot: 1.3,
    klein: 0.8
  })) : /*#__PURE__*/React.createElement(window.BVDeelfilms, {
    watchHover: true,
    films: WX_TAFEL_FILMS,
    groot: 1.9,
    klein: 0.8
  }) : null), /*#__PURE__*/React.createElement(WXLaag, {
    kop: "Studio shoot",
    tekst: "A creative studio shoot made to show the new Woonexpress accessories on social media in a way that stands out. Every piece had to be captured in detail, so DOLLE worked with dedicated stylists to build each set. Every setting was delivered in two versions."
  }, window.CMAccordeon ? /*#__PURE__*/React.createElement(window.CMAccordeon, {
    items: ["a", "b"].flatMap(v => [1, 2, 3].map(s => ({
      video: WX_VID + "woonexpress-studio-set" + s + "-" + v + ".mp4#t=0.8",
      label: "Set " + s + " · Version " + v.toUpperCase()
    })))
  }) : /*#__PURE__*/React.createElement(WXDuo, null)), /*#__PURE__*/React.createElement(WXLaag, {
    geenMasker: t.winkel === "strook",
    kop: "Store photography",
    tekst: "Photography on the shop floor across the chain, from bedroom departments to complete room settings. Images made to work in the webshop, in print and in the stores themselves."
  }, t.winkel === "strook" && window.CMStrook ? /*#__PURE__*/React.createElement(window.CMStrook, {
    beelden: WX_WINKEL
  }) : t.winkel === "rijen" && window.CMRijen ? /*#__PURE__*/React.createElement(window.CMRijen, {
    beelden: WX_WINKEL
  }) : /*#__PURE__*/React.createElement(WXMood, {
    beelden: WX_WINKEL.map(w => w.src)
  })), /*#__PURE__*/React.createElement(WXLaag, {
    kop: "Behind the scenes",
    tekst: "The sets built in the studio for the sofa and dining campaigns, with the crew for film and photography working side by side."
  }, window.CaseKaarten ? /*#__PURE__*/React.createElement(window.CaseKaarten, {
    items: WX_BTS,
    tempo: 0.5,
    schuif: true
  }) : null))), window.CMData ? /*#__PURE__*/React.createElement(window.CMData, {
    kop: "Deliverables",
    beeld: WX + "woonexpress-winkel-gevel-04-web.jpg",
    waas: 0.42,
    Tag: WXTag,
    cijfers: WX_DATA,
    review: {
      tekst: "DOLLE has been our production partner for three years and understands our brand completely. They know our stores, our ranges and the tone we want to strike, so every campaign feels like Woonexpress from the first frame. Quick to switch, reliable on set and always a step ahead of the season.",
      naam: "Nicolien Mastbroek",
      rol: "Woonexpress"
    },
    tags: ["Concept", "Styling", "Direction", "Production", "Edit", "Photography"]
  }) : null, /*#__PURE__*/React.createElement("section", {
    className: "dolle-dark",
    style: {
      background: "var(--dolle-navy)",
      padding: "var(--space-6) var(--page-margin)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: "var(--content-max)",
      margin: "0 auto",
      display: "grid",
      gap: "var(--space-4)",
      gridTemplateColumns: "minmax(0,1fr)"
    }
  }, /*#__PURE__*/React.createElement(WXKicker, {
    style: {
      display: "block",
      whiteSpace: "nowrap",
      color: "var(--text-muted)"
    }
  }, "Related work"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "minmax(0,1fr)"
    }
  }, Rij ? verwant.map((c, i) => /*#__PURE__*/React.createElement(Rij, {
    key: c.id,
    c: c,
    i: i,
    go: go,
    open: open === c.id,
    onToggle: () => setOpen(open === c.id ? -1 : c.id)
  })) : null, Haarlijn ? /*#__PURE__*/React.createElement(Haarlijn, null) : null))), window.HomeConversie ? /*#__PURE__*/React.createElement(window.HomeConversie, {
    go: go,
    tone: "dark"
  }) : null, TP && TR ? /*#__PURE__*/React.createElement(TP, null, TS ? /*#__PURE__*/React.createElement(TS, {
    label: "Woonexpress"
  }) : null, /*#__PURE__*/React.createElement(TR, {
    label: "Header",
    value: t.kop || "beeld",
    options: ["beeld", "klassiek"],
    onChange: v => setTweak("kop", v)
  }), /*#__PURE__*/React.createElement(TR, {
    label: "Intro",
    value: t.intro,
    options: ["plak", "vast"],
    onChange: v => setTweak("intro", v)
  }), /*#__PURE__*/React.createElement(TR, {
    label: "Store photos",
    value: t.winkel,
    options: ["strook", "rijen", "mood"],
    onChange: v => setTweak("winkel", v)
  })) : null);
}
Object.assign(window, {
  CaseWoonexpress,
  WXLaag,
  WXOntvouw,
  WXKader
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/CaseWoonexpress.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/Cases.jsx
try { (() => {
const DS = window.DesignSystem_8f95a2;
const {
  Kicker,
  Button,
  Tag,
  StatFrame,
  Icon
} = DS;
const CornerRule = DS.CornerRule || (({
  children
}) => children || null);
const IMG = "../../assets/cases/web/";
const EEZY = "../../assets/cases/eezy/";
const BR2 = "../../assets/cases/bluerivet/";
const VID2 = "../../assets/video/";
const PKB_HERO = "../../assets/cases/pietklerkx/pk-still-08-web.jpg";

/* CASES — één lange lijst met opengeklapte cases: naam, kaders, cijfer, tekst en
   een mozaïek van beeld. De lijst staat boven de filters en de vraag sluit af.
   Placeholder-cases: beeld en cijfers zijn voorbeelden. Het systeem claimt
   alleen gemeten resultaat van eigen producties: cijfer + context + periode. */
const CASES = [{
  id: 17,
  klant: "Landgoed Bergvliet",
  dienst: "Media production",
  jaar: "2025",
  kaders: ["Media production", "Growth"],
  title: "",
  body: "Production partner to Landgoed Bergvliet. One campaign across two shooting days, covering every part of the estate, built as a content base the estate still runs on.",
  stat: "",
  label: "",
  beeld: "../../assets/cases/bergvliet/bergvliet-aerial-01-web.jpg",
  zonderBeeld: true,
  strook: [{
    src: "../../assets/cases/bergvliet/bergvliet-aerial-01-web.jpg",
    ratio: "3 / 2",
    tekst: "The estate"
  }, {
    video: "../../assets/video/bergvliet-band-05.mp4",
    terug: "../../assets/cases/bergvliet/bergvliet-band-05-poster-web.jpg",
    ratio: "9 / 16",
    tekst: "Corporate film"
  }, {
    src: "../../assets/cases/bergvliet/bergvliet-spa-01-web.jpg",
    ratio: "3 / 2",
    tekst: "Spa One"
  }, {
    src: "../../assets/cases/bergvliet/bergvliet-golf-05-web.jpg",
    ratio: "1 / 1",
    tekst: "Golf"
  }, {
    src: "../../assets/cases/bergvliet/bergvliet-course-05-web.jpg",
    ratio: "16 / 9",
    tekst: "The course"
  }, {
    src: "../../assets/cases/bergvliet/bergvliet-villas-02-web.jpg",
    ratio: "3 / 2",
    tekst: "Villas"
  }, {
    src: "../../assets/cases/bergvliet/bergvliet-golf-02-web.jpg",
    ratio: "2 / 3",
    tekst: "Golf"
  }, {
    src: "../../assets/cases/bergvliet/bergvliet-course-04-web.jpg",
    ratio: "16 / 9",
    tekst: "The course"
  }],
  mozaiek: ["System overview · 4:5", "Template set · 3:2", "Weekly output · 9:16"]
}, {
  id: 1,
  klant: "Eezy",
  dienst: "Media production",
  jaar: "2026",
  kaders: ["Media production", "Growth"],
  title: "",
  body: "TV commercial for Eezy. From a social campaign on accessible digital dentures to a national TV commercial broadcast on NPO 1, 2 and 3.",
  stat: "",
  label: "",
  beeld: EEZY + "eezy-patient-web.jpg",
  strook: [{
    src: EEZY + "eezy-row-06-web.jpg",
    ratio: "16 / 9",
    tekst: "Campaign key visual · 16:9"
  }, {
    src: EEZY + "eezy-row-02-web.jpg",
    tekst: "Behind the scenes · 9:16"
  }, {
    src: EEZY + "eezy-still-01-web.jpg",
    tekst: "Campaign visual · 16:9"
  }, {
    src: EEZY + "eezy-row-03-web.jpg",
    tekst: "Behind the scenes · 9:16"
  }, {
    src: EEZY + "eezy-row-01-web.jpg",
    tekst: "Behind the scenes · 3:2"
  }],
  mozaiek: ["Campaign key visual · 4:5", "Behind the scenes · 3:2", "Channel cutdown · 9:16"]
}, {
  id: 2,
  klant: "Montel",
  dienst: "Media production",
  jaar: "2025",
  kaders: ["Media production"],
  title: "",
  body: "Production partner to Montel since 2020, producing national TV commercials, social campaigns, e-learnings and brand culture films.",
  stat: "",
  label: "",
  beeld: "../../assets/cases/montel/ijmuiden-2025/montel-ijmuiden-2025-06-lt.jpg",
  zonderBeeld: true,
  strook: [{
    "src": "../../assets/cases/montel/ijmuiden-2025/montel-ijmuiden-2025-18-lt.jpg",
    "ratio": "4 / 5",
    "tekst": "Social campaign"
  }, {
    "video": "../../assets/video/social/montel-eindhoven-2025-vader-zoon-16x9.mp4",
    "terug": "../../assets/cases/montel/social/montel-eindhoven-2025-vader-zoon-poster.jpg",
    "tekst": "Eindhoven"
  }, {
    "src": "../../assets/cases/montel/bts/montel-bts-foto-07-web.jpg",
    "ratio": "9 / 16",
    "tekst": "Behind the scenes"
  }, {
    "src": "../../assets/cases/montel/ijmuiden-2025/montel-ijmuiden-2025-09-lt.jpg",
    "ratio": "3 / 4",
    "tekst": "IJmuiden"
  }, {
    "video": "../../assets/video/montel-artfilm-16x9.mp4",
    "trim": "montel-art-cases",
    "start": 8,
    "tekst": "Art film"
  }, {
    "src": "../../assets/cases/montel/ijmuiden-2025/montel-ijmuiden-2025-22-lt.jpg",
    "ratio": "3 / 4",
    "tekst": "Set photography"
  }],
  mozaiek: ["Product still · 4:5", "Set photography · 3:2", "Reel frame · 9:16"]
}, {
  id: 3,
  klant: "Nobotel",
  dienst: "AI systems",
  jaar: "2026",
  kaders: ["AI systems", "Growth"],
  title: "Content that multiplies itself.",
  body: "A system that turns one production block into new visibility every week, without adding hands.",
  stat: "6×",
  label: "Output · per production block",
  beeld: IMG + "case-05.jpg",
  mozaiek: ["System overview · 4:5", "Template set · 3:2", "Weekly output · 9:16"]
}, {
  id: 4,
  klant: "Derma-pen",
  dienst: "Growth",
  jaar: "2025",
  kaders: ["Growth", "Campaign"],
  title: "From reach to revenue.",
  body: "Channels measured, budget moved to where attention was, result recorded against the baseline.",
  stat: "+41%",
  label: "Revenue · two quarters",
  beeld: IMG + "case-02.jpg",
  mozaiek: ["Dashboard · 4:5", "Campaign still · 3:2", "Ad variant · 9:16"]
}, {
  id: 5,
  klant: "Blue Rivet",
  dienst: "Media production",
  jaar: "2026",
  kaders: ["Media production", "Launch"],
  title: "",
  body: "Collection campaign in an industrial warehouse in Amsterdam. Brand film, collection film, photography and a full set of social cutdowns.",
  stat: "1.8M",
  label: "Views · launch week",
  beeld: BR2 + "br-shoot-0617-web.jpg",
  zonderBeeld: true,
  strook: [{
    video: VID2 + "br-brandfilm-1x1.mp4",
    terug: BR2 + "br-shoot-0614-web.jpg",
    ratio: "1 / 1",
    tekst: "Brand film · 1:1"
  }, {
    src: BR2 + "br-shoot-0617-web.jpg",
    tekst: "Campaign"
  }, {
    src: BR2 + "br-shoot-0422-web.jpg",
    ratio: "3 / 2",
    tekst: "Campaign"
  }, {
    src: BR2 + "br-tel-0372-web.jpg",
    ratio: "1 / 1",
    tekst: "Behind the scenes"
  }, {
    src: BR2 + "br-shoot-0431-web.jpg",
    ratio: "2 / 3",
    tekst: "Campaign"
  }, {
    video: VID2 + "br-tees-1x1.mp4",
    terug: BR2 + "br-shoot-0626-web.jpg",
    tekst: "Tees · 1:1"
  }, {
    src: BR2 + "br-shoot-0628-web.jpg",
    tekst: "Campaign"
  }, {
    src: BR2 + "br-shoot-0420-web.jpg",
    ratio: "3 / 2",
    tekst: "Campaign"
  }, {
    src: BR2 + "br-shoot-0615-web.jpg",
    ratio: "1 / 1",
    tekst: "Campaign"
  }, {
    src: BR2 + "br-bts-424-web.jpg",
    tekst: "Behind the scenes"
  }],
  mozaiek: ["Film frame · 4:5", "Product detail · 3:2", "Launch teaser · 9:16"]
}, {
  id: 14,
  klant: "MSO Group",
  dienst: "Media production",
  jaar: "2025",
  kaders: ["Media production", "AI systems", "Growth"],
  title: "MSO Group · Media production.",
  body: "Production partner to MSO Group since 2024, documenting complete industrial projects on location, filming new innovations and flying certified drone operations in the ports of Rotterdam and Vlissingen.",
  stat: "",
  label: "",
  beeld: "../../assets/cases/mso/mso-gpo-3028-web.jpg",
  mozaiek: ["Dashboard · 4:5", "Campaign still · 3:2", "Ad variant · 9:16"],
  strook: [{
    video: "../../assets/video/mso-gpo-film.mp4",
    terug: "../../assets/cases/mso/mso-gpo-film-poster-web.jpg",
    ratio: "16 / 9",
    tekst: "GPO ship · film"
  }, {
    src: "../../assets/cases/mso/mso-gpo-2947-web.jpg",
    tekst: "GPO ship"
  }, {
    src: "../../assets/cases/mso/mso-greenport-01-web.jpg",
    tekst: "Greenport"
  }, {
    src: "../../assets/cases/mso/mso-gpo-3014-web.jpg",
    tekst: "GPO ship"
  }, {
    src: "../../assets/cases/mso/mso-greenport-02-web.jpg",
    tekst: "Greenport"
  }, {
    src: "../../assets/cases/mso/mso-gpo-2987-web.jpg",
    tekst: "GPO ship"
  }]
}, {
  id: 6,
  klant: "Dé Dakwerkers",
  dienst: "Launches",
  jaar: "2025",
  kaders: ["Launch", "Branding"],
  title: "A new brand in the market.",
  body: "Positioning, imagery and launch campaign in one track, from name to first lead.",
  stat: "+220%",
  label: "Reach · first 90 days",
  beeld: IMG + "case-06.jpg",
  mozaiek: ["Identity · 4:5", "Campaign still · 3:2", "Story frame · 9:16"]
}, {
  id: 24,
  klant: "Veteranen Search Team",
  dienst: "Media production",
  jaar: "2025",
  kaders: ["Media production"],
  title: "Veteranen Search Team · Brand film.",
  body: "Brand film for Veteranen Search Team, the volunteer organisation that searches for missing people alongside the police. Every discipline of a search, brought into one film.",
  stat: "",
  label: "",
  beeld: "../../assets/cases/vst/vst-still-02-web.jpg",
  zonderBeeld: true,
  strook: [{
    src: "../../assets/cases/vst/vst-still-22-web.jpg",
    ratio: "3 / 2",
    tekst: "Search line"
  }, {
    video: VID2 + "vst-overview-loop.mp4",
    terug: "../../assets/cases/vst/vst-still-04-web.jpg",
    ratio: "16 / 9",
    tekst: "Brand film"
  }, {
    src: "../../assets/cases/vst/vst-still-04-web.jpg",
    ratio: "1 / 1",
    tekst: "Brand film · still"
  }, {
    src: "../../assets/cases/vst/vst-still-05-web.jpg",
    ratio: "3 / 2",
    tekst: "Briefing"
  }, {
    video: VID2 + "vst-bts-03.mp4",
    terug: "../../assets/cases/vst/vst-still-20-web.jpg",
    ratio: "9 / 16",
    tekst: "Behind the scenes"
  }, {
    src: "../../assets/cases/vst/vst-still-16-web.jpg",
    ratio: "1 / 1",
    tekst: "Command vehicle"
  }, {
    src: "../../assets/cases/vst/vst-still-13-web.jpg",
    ratio: "2 / 3",
    tekst: "On the line"
  }, {
    src: "../../assets/cases/vst/vst-still-08-web.jpg",
    ratio: "16 / 9",
    tekst: "Night search"
  }],
  mozaiek: ["Brand film · 16:9", "Search still · 3:2", "Team still · 4:5"]
}, {
  id: 7,
  klant: "Hang Eleven",
  dienst: "Media production",
  jaar: "2026",
  kaders: ["Media production"],
  title: "Hang Eleven · Store film.",
  body: "Store film for the opening of Hang Eleven on the Haarlemmerdijk in Amsterdam, shot in one continuous FPV flight, with social cutdowns to announce it.",
  teaser: "Store film for the opening of Hang Eleven on the Haarlemmerdijk in Amsterdam, shot in one continuous FPV flight, with social cutdowns to announce it.",
  stat: "",
  label: "",
  beeld: "../../assets/cases/hangeleven/hangeleven-store-film-16x9-poster-web.jpg",
  zonderBeeld: true,
  strook: [{
    src: "../../assets/cases/hangeleven/hangeleven-still-07-web.jpg",
    ratio: "1 / 1",
    tekst: "Haarlemmerdijk"
  }, {
    video: VID2 + "hangeleven-bts-08.mp4",
    terug: "../../assets/cases/hangeleven/hangeleven-bts-08-poster-web.jpg",
    ratio: "2 / 3",
    tekst: "Behind the scenes"
  }, {
    src: "../../assets/cases/hangeleven/hangeleven-still-02-web.jpg",
    ratio: "3 / 2",
    tekst: "The store"
  }, {
    video: VID2 + "hangeleven-fpv-1x1.mp4",
    terug: "../../assets/cases/hangeleven/hangeleven-fpv-1x1-poster-web.jpg",
    ratio: "1 / 1",
    tekst: "FPV"
  }, {
    src: "../../assets/cases/hangeleven/hangeleven-still-06-web.jpg",
    ratio: "3 / 2",
    tekst: "Store film · still"
  }, {
    src: "../../assets/cases/hangeleven/hangeleven-gevel-web.jpg",
    ratio: "3 / 2",
    tekst: "Haarlemmerdijk 93"
  }],
  mozaiek: ["Campaign key visual · 4:5", "Set photography · 3:2", "Reel frame · 9:16"]
}, {
  id: 8,
  klant: "OppoSuits",
  dienst: "Launches",
  jaar: "2025",
  kaders: ["Launch", "Branding"],
  title: "OppoSuits · Launches.",
  body: "Positioning, imagery and launch campaign in one track.",
  stat: "",
  label: "",
  beeld: IMG + "case-02.jpg",
  mozaiek: ["Identity · 4:5", "Launch still · 3:2", "Story frame · 9:16"]
}, {
  id: 10,
  klant: "Riant Stoutenbeek",
  dienst: "Growth",
  jaar: "2026",
  kaders: ["Growth", "Campaign"],
  title: "Riant Stoutenbeek · Growth.",
  body: "Channels measured, budget moved to where attention is.",
  stat: "",
  label: "",
  beeld: IMG + "case-04.jpg",
  mozaiek: ["Dashboard · 4:5", "Campaign still · 3:2", "Ad variant · 9:16"]
}, {
  id: 11,
  klant: "Poorter Hotel",
  dienst: "Media production",
  jaar: "2025",
  kaders: ["Media production", "Campaign"],
  title: "Poorter Hotel · Media production.",
  body: "Strategic media, produced offline and online.",
  stat: "",
  label: "",
  beeld: IMG + "case-05.jpg",
  mozaiek: ["Campaign key visual · 4:5", "Set photography · 3:2", "Reel frame · 9:16"]
}, {
  id: 13,
  klant: "NBM",
  dienst: "AI systems",
  jaar: "2026",
  kaders: ["AI systems", "Growth"],
  title: "NBM · AI systems.",
  body: "A system that turns one production block into weekly visibility.",
  stat: "",
  label: "",
  beeld: IMG + "case-01.jpg",
  mozaiek: ["System overview · 4:5", "Template set · 3:2", "Weekly output · 9:16"]
}, {
  id: 15,
  klant: "Woonboulevard XXL",
  dienst: "Media production",
  jaar: "2024",
  kaders: ["Media production", "Campaign"],
  title: "Woonboulevard XXL · Media production.",
  body: "Strategic media, produced offline and online.",
  stat: "",
  label: "",
  beeld: IMG + "case-03.jpg",
  mozaiek: ["Campaign key visual · 4:5", "Set photography · 3:2", "Reel frame · 9:16"]
}, {
  id: 16,
  klant: "Piet Klerkx",
  dienst: "Media production",
  jaar: "2026",
  kaders: ["Media production"],
  title: "",
  body: "Production partner to Piet Klerkx since 2023, producing FPV drone productions, collection campaigns, social campaigns and the company events that run across every location.",
  stat: "",
  label: "",
  beeld: PKB_HERO,
  zonderBeeld: true,
  strook: [{
    video: VID2 + "pietklerkx-overview-loop.mp4",
    terug: "../../assets/cases/pietklerkx/pk-still-08-web.jpg",
    ratio: "1 / 1",
    tekst: "Commercial"
  }, {
    src: "../../assets/cases/pietklerkx/pk-collectie-03-web.jpg",
    ratio: "16 / 9",
    tekst: "Collection campaign"
  }, {
    video: VID2 + "pietklerkx-monique-02.mp4",
    terug: "../../assets/cases/pietklerkx/pk-collectie-02-web.jpg",
    ratio: "9 / 16",
    tekst: "Monique van der Reijden"
  }, {
    src: "../../assets/cases/pietklerkx/pk-still-08-web.jpg",
    ratio: "3 / 2",
    tekst: "Store film"
  }, {
    src: "../../assets/cases/pietklerkx/pk-kickoff-09-web.jpg",
    ratio: "3 / 2",
    tekst: "Company event"
  }, {
    video: VID2 + "pietklerkx-reel-bank-1-product.mp4",
    terug: "../../assets/cases/pietklerkx/pk-collectie-04-web.jpg",
    ratio: "9 / 16",
    tekst: "Product reel"
  }, {
    video: VID2 + "pietklerkx-gezin-16x9.mp4",
    terug: "../../assets/cases/pietklerkx/pk-still-05-web.jpg",
    ratio: "3 / 2",
    tekst: "Cutdown · family"
  }, {
    src: "../../assets/cases/pietklerkx/pk-collectie-04-web.jpg",
    ratio: "3 / 2",
    tekst: "Collection campaign"
  }],
  mozaiek: ["FPV flight · 16:9", "Collection still · 3:2", "Social cutdown · 9:16"]
}, {
  id: 18,
  klant: "Kiela",
  dienst: "Media production",
  jaar: "2024",
  kaders: ["Launch", "Media production", "Growth"],
  title: "",
  body: "Growing brand visibility with a brand film, product films, brand guidelines and photography, produced for clients around the world.",
  stat: "",
  label: "",
  beeld: "../../assets/cases/kiela/kiela-intro-web.jpg",
  zonderBeeld: true,
  strook: [{
    video: "../../assets/video/kiela-lasserij-01.mp4",
    terug: "../../assets/cases/kiela/kiela-still-04-web.jpg",
    tekst: "Welding"
  }, {
    src: "../../assets/cases/kiela/kiela-bts-09-web.jpg",
    tekst: "Behind the scenes"
  }, {
    video: "../../assets/video/kiela-heritage-loop.mp4",
    terug: "../../assets/cases/kiela/kiela-archief-04.jpg",
    tekst: "Heritage"
  }, {
    src: "../../assets/cases/kiela/kiela-still-11-web.jpg",
    ratio: "1 / 1",
    tekst: "Product still"
  }, {
    src: "../../assets/cases/kiela/kiela-still-07-web.jpg",
    tekst: "Craft"
  }],
  mozaiek: ["Dashboard · 4:5", "Campaign still · 3:2", "Ad variant · 9:16"]
}, {
  id: 19,
  klant: "Fruit op je Werk",
  dienst: "Media production",
  jaar: "2026",
  kaders: ["Media production", "Campaign"],
  title: "Fruit op je Werk · Media production.",
  body: "Strategic media, produced offline and online.",
  stat: "",
  label: "",
  beeld: IMG + "case-01.jpg",
  mozaiek: ["Campaign key visual · 4:5", "Set photography · 3:2", "Reel frame · 9:16"]
}, {
  id: 21,
  klant: "Medpets",
  dienst: "Media production",
  jaar: "2024",
  kaders: ["Media production", "Campaign"],
  title: "",
  body: "Two campaigns for the largest online pet health shop in the Netherlands, with the animals leading the story.",
  teaser: "Two campaigns for the largest online pet health shop in the Netherlands, with the animals leading the story.",
  stat: "",
  label: "",
  beeld: "../../assets/cases/medpets/medpets-still-01-web.jpg",
  zonderBeeld: true,
  strook: [{
    src: "../../assets/cases/medpets/medpets-still-02-web.jpg",
    ratio: "3 / 2",
    tekst: "Campaign still"
  }, {
    src: "../../assets/cases/medpets/medpets-bts-04-web.jpg",
    ratio: "2 / 3",
    tekst: "Behind the scenes"
  }, {
    video: "../../assets/video/medpets-bumper-16x9.mp4",
    terug: "../../assets/cases/medpets/medpets-bumper-poster-web.jpg",
    ratio: "16 / 9",
    tekst: "Brand bumper"
  }, {
    src: "../../assets/cases/medpets/medpets-bts-03-web.jpg",
    ratio: "9 / 7",
    tekst: "On set"
  }],
  mozaiek: ["Campaign still · 3:2", "Behind the scenes · 2:3", "Bumper · 16:9"]
}, {
  id: 22,
  klant: "Orange Aerospace",
  dienst: "Growth",
  jaar: "2026",
  kaders: ["Growth", "Campaign"],
  title: "Orange Aerospace · Growth.",
  body: "Channels measured, budget moved to where attention is.",
  stat: "",
  label: "",
  beeld: IMG + "case-04.jpg",
  mozaiek: ["Dashboard · 4:5", "Campaign still · 3:2", "Ad variant · 9:16"]
}, {
  id: 25,
  klant: "Woonexpress",
  dienst: "Media production",
  jaar: "2026",
  kaders: ["Media production", "Growth", "Launches"],
  title: "",
  body: "Production partner to Woonexpress since 2022, producing seasonal campaigns, collection shoots, studio and social content, and the company events that bring every store together.",
  stat: "",
  label: "",
  beeld: "../../assets/cases/woonexpress/woonexpress-still-03-web.jpg",
  zonderBeeld: true,
  strook: [{
    "src": "../../assets/cases/woonexpress/woonexpress-still-03-web.jpg",
    "ratio": "16 / 9",
    "tekst": "Sofa campaign"
  }, {
    "video": "../../assets/video/woonexpress-tafel-1-9x16.mp4",
    "terug": "../../assets/cases/woonexpress/woonexpress-tafel-1-9x16-poster-web.jpg",
    "ratio": "1 / 1",
    "tekst": "Dining table campaign"
  }, {
    "src": "../../assets/cases/woonexpress/woonexpress-zomer-bank-02-web.jpg",
    "ratio": "9 / 16",
    "tekst": "Summer shoot"
  }, {
    "src": "../../assets/cases/woonexpress/woonexpress-winkel-decoratie-02-web.jpg",
    "ratio": "9 / 16",
    "tekst": "Store photography"
  }, {
    "src": "../../assets/cases/woonexpress/woonexpress-zomer-eettafel-03-web.jpg",
    "ratio": "3 / 2",
    "tekst": "Summer shoot"
  }, {
    "src": "../../assets/cases/woonexpress/woonexpress-still-01-web.jpg",
    "ratio": "1 / 1",
    "tekst": "Sofa campaign"
  }, {
    "src": "../../assets/cases/woonexpress/woonexpress-bts-foto-10-web.jpg",
    "ratio": "3 / 4",
    "tekst": "Behind the scenes"
  }],
  mozaiek: ["Sofa campaign", "Store photography", "Behind the scenes"]
}, {
  id: 26,
  klant: "De Beer Accountants",
  dienst: "Growth",
  jaar: "2025",
  kaders: ["Growth", "Campaign"],
  title: "De Beer Accountants · Growth.",
  body: "Channels measured, budget moved to where attention is.",
  stat: "",
  label: "",
  beeld: IMG + "case-02.jpg",
  mozaiek: ["Dashboard · 4:5", "Campaign still · 3:2", "Ad variant · 9:16"]
}, {
  id: 27,
  klant: "Dalton Medical",
  dienst: "Media production",
  jaar: "2024",
  kaders: ["Media production", "Campaign"],
  title: "Dalton Medical · Media production.",
  body: "Strategic media, produced offline and online.",
  stat: "",
  label: "",
  beeld: IMG + "case-03.jpg",
  mozaiek: ["Campaign key visual · 4:5", "Set photography · 3:2", "Reel frame · 9:16"]
}, {
  id: 28,
  klant: "Bulsink",
  dienst: "Launches",
  jaar: "2026",
  kaders: ["Launch", "Branding"],
  title: "Bulsink · Launches.",
  body: "Positioning, imagery and launch campaign in one track.",
  stat: "",
  label: "",
  beeld: IMG + "case-04.jpg",
  mozaiek: ["Identity · 4:5", "Launch still · 3:2", "Story frame · 9:16"]
}, {
  id: 29,
  klant: "Parformance",
  dienst: "AI systems",
  jaar: "2025",
  kaders: ["AI systems", "Growth"],
  title: "Parformance · AI systems.",
  body: "A system that turns one production block into weekly visibility.",
  stat: "",
  label: "",
  beeld: IMG + "case-05.jpg",
  mozaiek: ["System overview · 4:5", "Template set · 3:2", "Weekly output · 9:16"]
}, {
  id: 31,
  klant: "Enzo Luca",
  dienst: "Media production",
  jaar: "2026",
  kaders: ["Media production", "Campaign"],
  title: "Enzo Luca · Media production.",
  body: "Strategic media, produced offline and online.",
  stat: "",
  label: "",
  beeld: IMG + "case-01.jpg",
  mozaiek: ["Campaign key visual · 4:5", "Set photography · 3:2", "Reel frame · 9:16"]
}];
/* Dezelfde volgorde als op de homepage: die reeks gaat voorop, de rest volgt
   erachter in de bestaande orde. */
const HOME_ORDE = ["Montel", "Kiela", "Landgoed Bergvliet", "Eezy", "Blue Rivet", "Woonexpress", "MSO Group", "Veteranen Search Team", "Hang Eleven", "Piet Klerkx", "Medpets", "Poorter Hotel", "Riant Stoutenbeek", "Dé Dakwerkers", "De Beer Accountants", "Enzo Luca", "Orange Aerospace", "OppoSuits", "Parformance", "Derma-pen", "Dalton Medical", "Fruit op je Werk", "Nobotel", "NBM", "Woonboulevard XXL", "Bulsink"];
CASES.sort((a, b) => {
  const ia = HOME_ORDE.indexOf(a.klant),
    ib = HOME_ORDE.indexOf(b.klant);
  if (ia > -1 && ib > -1) return ia - ib;
  if (ia > -1) return -1;
  if (ib > -1) return 1;
  return 0;
});
const FILTERS = ["All cases", "Media production", "Launches", "AI systems", "Growth"];

/* Filter met dezelfde beweging als de navigatie: de hairline loopt van links
   in bij hover en blijft staan op de gekozen filter. */
function CaseFilter({
  label,
  active,
  onClick
}) {
  const [hover, setHover] = React.useState(false);
  return /*#__PURE__*/React.createElement("button", {
    type: "button",
    onClick: onClick,
    "aria-pressed": active,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      position: "relative",
      appearance: "none",
      background: "none",
      border: 0,
      padding: "0 0 6px",
      cursor: "pointer",
      fontFamily: "var(--font-label)",
      fontSize: "11px",
      fontWeight: active ? 700 : 500,
      letterSpacing: "var(--track-label-wide)",
      textTransform: "uppercase",
      whiteSpace: "nowrap",
      color: active || hover ? "var(--text-heading)" : "var(--text-muted)",
      transition: "color var(--dur-ui) var(--ease-dolle)"
    }
  }, label, /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true",
    style: {
      position: "absolute",
      left: 0,
      right: 0,
      bottom: 0,
      height: 1,
      background: "var(--text-heading)",
      transformOrigin: "left center",
      transform: active || hover ? "scaleX(1)" : "scaleX(0)",
      transition: "transform var(--dur-frame) var(--ease-dolle)"
    }
  }));
}

/* KOP — gecentreerd, zoals de referentie: haakjes-kicker, één grote regel, de
   kaders eronder als knoppen, en daaronder een breed beeld dat de pagina opent. */
function CasesHero({
  go
}) {
  return /*#__PURE__*/React.createElement("section", {
    className: "dolle-dark",
    style: {
      background: "var(--dolle-navy)",
      padding: "clamp(88px,12vh,150px) var(--page-margin) clamp(24px,3.5vh,44px)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: "var(--content-max)",
      margin: "0 auto",
      display: "grid",
      gap: "var(--space-7)",
      justifyItems: "start",
      textAlign: "left"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      justifyItems: "start"
    }
  }, /*#__PURE__*/React.createElement(Words, {
    as: "h1",
    text: "What falls inside the frame",
    accent: "inside",
    delay: 120,
    style: {
      margin: 0,
      fontSize: "clamp(26px,3.2vw,52px)",
      lineHeight: 1.04,
      letterSpacing: "var(--track-heading)"
    }
  }), /*#__PURE__*/React.createElement(Words, {
    as: "span",
    text: "becomes the story.",
    delay: 320,
    style: {
      display: "block",
      fontFamily: "var(--font-core)",
      fontWeight: "var(--weight-heading)",
      fontSize: "clamp(26px,3.2vw,52px)",
      lineHeight: 1.04,
      letterSpacing: "var(--track-heading)",
      color: "var(--text-heading)",
      paddingBottom: "0.06em"
    }
  }))));
}

/* De view-schakel is het merkhaakje zelf, met dezelfde beweging als de knoppen:
   dicht liggen de twee haken als schakelblok tegen elkaar, bij hover reizen ze
   naar de tegenoverliggende hoeken, draaien 90 graden en kaderen het woord dat
   ertussen komt te staan. */
/* Eén doorlopende beeldstrook die van klein naar groot rekt: dezelfde tegels
   komen bij het openklappen naar voren (hoogte groeit, breedte volgt de
   verhouding, onderschrift schuift open) en bij sluiten precies terug. Eén
   curve, geen stapeling van losse overgangen. */
const VLOEI = "1100ms cubic-bezier(.16,.84,.24,1)";

/* Wit vlak met kobalt letters; bij hover keert het om naar kobalt met wit. */
function WitteKnop({
  children,
  onClick,
  tabIndex
}) {
  const [over, setOver] = React.useState(false);
  /* De hover zit op de omhulling, zodat de knop zijn eigen haakjesanimatie
     houdt; alleen de kleuren keren om. */
  return /*#__PURE__*/React.createElement("span", {
    onMouseEnter: () => setOver(true),
    onMouseLeave: () => setOver(false),
    onFocus: () => setOver(true),
    onBlur: () => setOver(false),
    style: {
      display: "inline-flex"
    }
  }, /*#__PURE__*/React.createElement(Button, {
    size: "sm",
    variant: "secondary",
    tabIndex: tabIndex,
    onClick: onClick,
    style: {
      background: over ? "var(--text-accent)" : "var(--dolle-white)",
      color: over ? "var(--dolle-white)" : "var(--dolle-navy)",
      borderColor: over ? "var(--text-accent)" : "var(--dolle-white)",
      transition: "background 240ms var(--ease-dolle), color 240ms var(--ease-dolle), border-color 240ms var(--ease-dolle)"
    }
  }, children));
}
function RijBeeld({
  c,
  open,
  hover,
  onSleep,
  groot
}) {
  const spoor = React.useRef(null);
  /* Is er een mediakeuze bewaard voor deze case, dan bepaalt die de tegels. */
  const extra = c.strook || [];
  /* Vaste opbouw: eerst het hoofdbeeld, daarna elk extra beeld in een eigen
     verhouding. Zo kan een case meer dan vier tegels hebben. */
  const maten = ["3 / 2", "4 / 5", "9 / 16", "3 / 4", "3 / 2", "4 / 5"];
  const tegels = (c.zonderBeeld ? [] : [{
    src: c.beeld,
    ratio: "3 / 4",
    tekst: c.klant + " · " + c.dienst
  }]).concat((extra.length ? extra : [undefined, undefined, undefined]).map((e, i) => {
    const src = e && e.src ? e.src : e;
    const video = e && e.video ? e.video : null;
    const vast = e && e.ratio ? e.ratio : null;
    const eigen = e && e.tekst ? e.tekst : null;
    return {
      src: src,
      video: video,
      vast: vast,
      terug: e && e.terug,
      trim: e && e.trim,
      start: e && e.start,
      eind: e && e.eind,
      label: eigen || c.mozaiek[i % c.mozaiek.length],
      ratio: maten[i % maten.length],
      tekst: eigen || c.mozaiek[i % c.mozaiek.length]
    };
  }));
  React.useEffect(() => {
    const el = spoor.current;
    if (!el) return;
    let neer = false,
      x0 = 0,
      l0 = 0;
    const down = e => {
      neer = true;
      x0 = e.clientX;
      l0 = el.scrollLeft;
      if (el.setPointerCapture) el.setPointerCapture(e.pointerId);
    };
    const move = e => {
      if (!neer) return;
      const d = e.clientX - x0;
      if (Math.abs(d) > 4 && onSleep) onSleep();
      el.scrollLeft = l0 - d;
    };
    const up = e => {
      neer = false;
      if (e && el.releasePointerCapture && e.pointerId != null && el.hasPointerCapture && el.hasPointerCapture(e.pointerId)) el.releasePointerCapture(e.pointerId);
    };
    el.addEventListener("pointerdown", down);
    el.addEventListener("pointermove", move);
    el.addEventListener("pointerup", up);
    el.addEventListener("pointerleave", up);
    return () => {
      el.removeEventListener("pointerdown", down);
      el.removeEventListener("pointermove", move);
      el.removeEventListener("pointerup", up);
      el.removeEventListener("pointerleave", up);
    };
  }, [onSleep]);
  const hoog = open ? groot ? "clamp(300px,54vh,600px)" : "clamp(230px,32vh,400px)" : "clamp(112px,12.5vw,168px)";
  /* Kleine wenk rechts dat de strook verder loopt; verdwijnt aan het eind. */
  const [meer, setMeer] = React.useState(true);
  React.useEffect(() => {
    const el = spoor.current;
    if (!el) return;
    const kijk = () => setMeer(el.scrollLeft + el.clientWidth < el.scrollWidth - 8);
    kijk();
    el.addEventListener("scroll", kijk, {
      passive: true
    });
    return () => el.removeEventListener("scroll", kijk);
  }, [open]);
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      minWidth: 0
    }
  }, /*#__PURE__*/React.createElement("span", {
    onClick: e => {
      e.stopPropagation();
      const el = spoor.current;
      if (el) el.scrollBy({
        left: Math.round(el.clientWidth * 0.8),
        behavior: "smooth"
      });
    },
    style: {
      position: "absolute",
      top: 0,
      right: 0,
      height: hoog,
      cursor: open && meer ? "pointer" : "default",
      pointerEvents: open && meer ? "auto" : "none",
      width: "clamp(60px,7vw,104px)",
      display: "flex",
      alignItems: "center",
      justifyContent: "flex-end",
      background: "linear-gradient(to right, rgba(16,31,60,0) 0%, rgba(16,31,60,0.88) 72%)",
      opacity: open && meer ? 1 : 0,
      transition: "opacity 420ms var(--ease-dolle)",
      zIndex: 3
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: "6px",
      padding: "6px 10px",
      borderRadius: 4,
      border: "1px solid var(--white-24, rgba(255,255,255,0.24))",
      background: "rgba(16,31,60,0.72)"
    }
  }, /*#__PURE__*/React.createElement(Kicker, {
    size: "sm",
    style: {
      color: "var(--dolle-white)",
      whiteSpace: "nowrap"
    }
  }, "Scroll"), /*#__PURE__*/React.createElement("span", {
    style: {
      color: "var(--dolle-white)",
      fontSize: "12px",
      lineHeight: 1
    }
  }, "\u2192"))), /*#__PURE__*/React.createElement("div", {
    ref: spoor,
    style: {
      display: "flex",
      gap: open ? "var(--space-3)" : "6px",
      alignItems: "start",
      width: "100%",
      minWidth: 0,
      overflowX: open ? "auto" : "hidden",
      scrollbarWidth: "none",
      msOverflowStyle: "none",
      cursor: "grab",
      touchAction: "pan-y",
      transition: "gap " + VLOEI
    }
  }, tegels.map((t, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      flex: "0 0 auto",
      display: "block",
      "--d": i % tegels.length * 0.07,
      opacity: "clamp(0, calc((var(--r, 1) - var(--d)) * 3), 1)",
      transform: "translate3d(calc((1 - clamp(0, calc((var(--r, 1) - var(--d)) * 2.2), 1)) * -64px), 0, 0)",
      transition: "none",
      willChange: "transform, opacity"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      height: hoog,
      aspectRatio: t.src || t.video ? t.vast || undefined : t.ratio,
      overflow: "hidden",
      background: "#0b1730",
      border: "1px solid var(--white-16, rgba(255,255,255,0.16))",
      transition: "height " + VLOEI
    }
  }, t.video ? /*#__PURE__*/React.createElement("video", {
    src: t.video,
    poster: t.terug || undefined,
    autoPlay: true,
    muted: true,
    loop: true,
    playsInline: true,
    preload: t.trim ? "auto" : "metadata",
    draggable: "false",
    ref: el => {
      if (!el) return;
      el.muted = true;
      el.defaultMuted = true;
      el.volume = 0;
      /* Autoplay zelf afdwingen: muted wordt pas na het aanmaken gezet,
         dus de browser kan het autoplay-attribuut al hebben geweigerd. */
      if (!el.dataset.speelAan) {
        el.dataset.speelAan = "1";
        const speel = () => {
          if (el.paused && el.dataset.spaar !== "1") el.play().catch(() => {});
        };
        el.addEventListener("loadeddata", speel);
        el.addEventListener("canplay", speel);
        speel();
      }
      if (!t.trim || el.dataset.trimAan) return;
      el.dataset.trimAan = "1";
      /* Vaste stand uit de tegel; de trimpagina kan die overschrijven. */
      let q = t.start != null ? {
        start: t.start,
        eind: t.eind != null ? t.eind : null
      } : null;
      try {
        const b = JSON.parse(window.localStorage.getItem("dolle-trim-" + t.trim));
        if (b && b.start != null) q = b;
      } catch (e) {}
      if (!q || q.start == null) return;
      const zet = () => {
        if (el.currentTime < q.start - 0.1) el.currentTime = q.start;
      };
      /* Ook na het eigen loop-punt terug naar het startpunt. */
      const tik = () => {
        if (q.eind != null && q.eind < (el.duration || 1e9) && el.currentTime >= q.eind) {
          el.currentTime = q.start;
          return;
        }
        if (el.currentTime < q.start - 0.25) el.currentTime = q.start;
      };
      el.addEventListener("loadedmetadata", zet);
      el.addEventListener("timeupdate", tik);
      el.addEventListener("seeked", zet);
      if (el.readyState >= 1) el.currentTime = q.start;
    },
    style: {
      display: "block",
      height: "100%",
      width: "100%",
      objectFit: "cover",
      opacity: open || hover ? 1 : 0.82,
      transition: "opacity var(--dur-frame) var(--ease-dolle)"
    }
  }) : t.src ? /*#__PURE__*/React.createElement("img", {
    src: t.src,
    alt: "",
    draggable: "false",
    loading: "lazy",
    decoding: "async",
    style: {
      display: "block",
      height: "100%",
      width: t.vast ? "100%" : "auto",
      objectFit: t.vast ? "cover" : "contain",
      opacity: open || hover ? 1 : 0.82,
      transition: "opacity var(--dur-frame) var(--ease-dolle)"
    }
  }) : /*#__PURE__*/React.createElement("span", {
    className: "dolle-data",
    style: {
      position: "absolute",
      inset: 0,
      display: "grid",
      placeItems: "center",
      textAlign: "center",
      padding: "var(--space-3)",
      color: "var(--white-48)",
      fontSize: open ? "10px" : "9px",
      letterSpacing: "var(--track-label-wide)",
      transition: "font-size " + VLOEI
    }
  }, t.label)), /*#__PURE__*/React.createElement("span", {
    style: {
      display: "block",
      position: "relative",
      width: 0,
      minWidth: "100%",
      overflow: "hidden",
      maxHeight: open ? "72px" : "0px",
      opacity: open ? 1 : 0,
      transition: "max-height " + VLOEI + ", opacity 620ms var(--ease-dolle)"
    }
  }, /*#__PURE__*/React.createElement(Kicker, {
    size: "sm",
    style: {
      display: "block",
      paddingTop: "var(--space-3)",
      color: "var(--text-muted)",
      whiteSpace: open ? "normal" : "nowrap"
    }
  }, t.tekst))))));
}

/* Eén scrollteller voor alle lijnen en rijen: elke lijn schrijft zich in en
   krijgt per frame zijn stand. Zo staan er geen dertig losse scrollluisteraars
   op de pagina, wat het slepen en openklappen merkbaar vlot houdt. */
const TELLER = (() => {
  const leden = new Set();
  let raf = 0;
  const kijk = () => {
    raf = 0;
    const vh = window.innerHeight || 800;
    leden.forEach(f => f(vh));
  };
  const on = () => {
    if (!raf) raf = requestAnimationFrame(kijk);
  };
  if (typeof window !== "undefined") {
    window.addEventListener("scroll", on, {
      passive: true
    });
    window.addEventListener("resize", on);
    /* De pagina schuift nog na terwijl beeld en letters binnenkomen. Zonder
       deze extra tikken blijft een rij die pas daardoor in beeld komt op stand
       0 staan tot de bezoeker scrollt. */
    window.addEventListener("load", on);
    if (document.fonts && document.fonts.ready) document.fonts.ready.then(on).catch(() => {});
    [120, 400, 900, 1600].forEach(ms => setTimeout(on, ms));
  }
  /* Bij registratie een paar tikken na elkaar: de route mount vóór de scroll
     naar boven en vóór de layout van beeld en letters, dus de eerste meting
     alleen is niet genoeg. */
  return {
    aan(f) {
      leden.add(f);
      on();
      requestAnimationFrame(on);
      const klokken = [60, 200, 600, 1200].map(ms => setTimeout(on, ms));
      return () => {
        leden.delete(f);
        klokken.forEach(clearTimeout);
      };
    },
    tik: on
  };
})();

/* De haarlijn loopt mee met de scroll: de stand komt rechtstreeks uit de
   scrollpositie (1:1, geen klok en geen drempel) en wordt als --p op de lijn
   geschreven. Daardoor vult hij door terwijl je scrollt in plaats van in één
   keer aan te springen. Hij houdt zijn hoogste stand vast, dus terugscrollen
   rolt hem niet weer uit. */
function Haarlijn({
  vol
}) {
  const el = React.useRef(null);
  const vloer = React.useRef(0);
  React.useEffect(() => {
    const lijn = el.current && el.current.firstChild;
    if (!lijn) return;
    if (window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      lijn.style.setProperty("--p", 1);
      return;
    }
    /* De diepste stand die de onderkant van het beeld ooit bereikte, in
       documentcoördinaten. Zo is de vulling ongevoelig voor layoutverschuivingen
       (beeld dat inlaadt, rijen die openklappen) én blijft hij staan bij
       terugscrollen — de lijnen vullen altijd van boven naar onder. */
    let diepst = 0;
    return TELLER.aan(vh => {
      if (!el.current) return;
      const sy = window.scrollY || window.pageYOffset || 0;
      const docTop = el.current.getBoundingClientRect().top + sy;
      const rand = sy + vh * 0.8;
      if (rand > diepst) diepst = rand;
      /* Later dan de rij: eerst komen de tegels en de tekst, daarna trekt de
         lijn zich vol terwijl je doorscrollt. */
      let p = Math.max(0, Math.min(1, (diepst - docTop) / (vh * 0.34)));
      if (vloer.current > p) p = vloer.current;
      /* Vergelijken met wat er écht op het element staat: een re-render kan de
         stand hebben teruggezet, en dan moet hij hersteld worden. */
      const nu = parseFloat(lijn.style.getPropertyValue("--p"));
      if (!(Math.abs((nu || 0) - p) < 0.003)) lijn.style.setProperty("--p", p);
    });
  }, []);
  /* Klikken op de rij maakt de lijn af: ook als de scroll hem nog niet had
     volgetrokken loopt hij nu in één beweging door naar vol. */
  React.useEffect(() => {
    const lijn = el.current && el.current.firstChild;
    if (!vol || !lijn) return;
    vloer.current = 1;
    lijn.style.setProperty("--p", 1);
    TELLER.tik();
  }, [vol]);
  return /*#__PURE__*/React.createElement("div", {
    ref: el,
    style: {
      height: 1,
      overflow: "hidden",
      marginRight: "calc(var(--page-margin) * -1)",
      marginLeft: "calc(var(--page-margin) * -1)",
      background: "var(--white-16, rgba(255,255,255,0.12))"
    }
  }, /*#__PURE__*/React.createElement("div", {
    ref: n => {
      if (n && !n.style.getPropertyValue("--p")) n.style.setProperty("--p", 0);
    },
    style: {
      height: 1,
      background: "var(--white-24, rgba(255,255,255,0.24))",
      transformOrigin: "left center",
      transform: "scaleX(var(--p, 0))",
      transition: vol ? "transform 700ms cubic-bezier(.16,.84,.24,1)" : "none",
      willChange: "transform"
    }
  }));
}

/* De rij geeft alleen de scrollstand door als --r. Wat daarmee beweegt staat in
   de rij zelf: de tegels schuiven van links binnen, de tekst komt achter een
   masker omhoog, en de haarlijn vult mee. Geen fade over de hele subboom. */
function RijOpkomst({
  children,
  vast
}) {
  const el = React.useRef(null);
  React.useEffect(() => {
    const doel = el.current;
    if (!doel) return;
    if (vast) {
      doel.style.setProperty("--r", 1);
      return;
    }
    if (window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      doel.style.setProperty("--r", 1);
      return;
    }
    let diepst = 0;
    return TELLER.aan(vh => {
      const sy = window.scrollY || window.pageYOffset || 0;
      const docTop = doel.getBoundingClientRect().top + sy;
      const rand = sy + vh * 0.96;
      if (rand > diepst) diepst = rand;
      const p = Math.max(0, Math.min(1, (diepst - docTop) / (vh * 0.3)));
      const nu = parseFloat(doel.style.getPropertyValue("--r"));
      if (!(Math.abs((nu || 0) - p) < 0.003)) doel.style.setProperty("--r", p);
    });
  }, []);
  return /*#__PURE__*/React.createElement("div", {
    ref: n => {
      el.current = n;
      if (n && !n.style.getPropertyValue("--r")) n.style.setProperty("--r", vast ? 1 : 0);
    },
    style: {
      display: "grid",
      gridTemplateColumns: "minmax(0,1fr)",
      minWidth: 0
    }
  }, children);
}

/* Uitgeklapte campagne als eigen pagina in de rij. Boven: tekst naast de
   compilatie (speelt stil, met geluidsknop). Daaronder twee uitklapbare kopjes
   met een voorproef van de films, dan een band met stills. Een vaste Close-knop
   blijft in beeld zolang de campagne open staat. */
function RasterGeluid({
  video
}) {
  const [stil, setStil] = React.useState(true);
  const zet = e => {
    e.stopPropagation();
    const el = video.current;
    if (!el) return;
    el.muted = !el.muted;
    setStil(el.muted);
    if (el.paused) el.play().catch(() => {});
  };
  return /*#__PURE__*/React.createElement("button", {
    type: "button",
    onClick: zet,
    "aria-label": stil ? "Sound on" : "Sound off",
    style: {
      position: "absolute",
      left: "var(--space-4)",
      bottom: "var(--space-4)",
      appearance: "none",
      width: 36,
      height: 36,
      display: "grid",
      placeItems: "center",
      background: "rgba(8,18,40,0.55)",
      border: 0,
      borderRadius: 999,
      color: "var(--dolle-white)",
      cursor: "pointer"
    }
  }, /*#__PURE__*/React.createElement("svg", {
    viewBox: "0 0 24 24",
    width: "18",
    height: "18",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2",
    "aria-hidden": "true"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M4 9h4l5-4v14l-5-4H4z",
    fill: "currentColor",
    stroke: "none"
  }), stil ? /*#__PURE__*/React.createElement("path", {
    d: "M17 9l5 6M22 9l-5 6"
  }) : /*#__PURE__*/React.createElement("path", {
    d: "M16.5 8.5a5 5 0 0 1 0 7M19 6a8.5 8.5 0 0 1 0 12"
  })));
}
/* Kopje met films, zoals de deelfilms bij Woonexpress: op zijn plek blijven
   staan, de film die speelt groeit in de rij en de rest schuift in. Per rij
   hooguit vier films. */
function RasterKopje({
  kop,
  items,
  aan,
  onWissel
}) {
  /* Zelfde beweging als de uitklapblokken bij Woonexpress: hoogte, fade en een
     korte schuif omhoog in één curve. De films blijven na de eerste keer staan,
     zodat in- en uitklappen nooit verspringt. */
  const VL = "1300ms cubic-bezier(.45,0,.2,1)";
  const Deel = window.BVDeelfilms;
  const [gezien, setGezien] = React.useState(aan);
  React.useEffect(() => {
    if (aan) setGezien(true);
  }, [aan]);
  if (!items.length) return null;
  const films = items.map(x => ({
    film: x.video,
    poster: x.terug,
    naam: x.tekst || "",
    kader: "16 / 9"
  }));
  const rijen = [];
  for (let i = 0; i < films.length; i += 4) rijen.push(films.slice(i, i + 4));
  return /*#__PURE__*/React.createElement("div", {
    style: {
      borderTop: "1px solid var(--white-24, rgba(255,255,255,0.24))"
    }
  }, /*#__PURE__*/React.createElement("button", {
    type: "button",
    onClick: onWissel,
    "aria-expanded": aan,
    style: {
      appearance: "none",
      background: "none",
      border: 0,
      width: "100%",
      display: "grid",
      gridTemplateColumns: "minmax(0,1fr) auto auto",
      gap: "var(--space-4)",
      alignItems: "center",
      padding: "var(--space-4) 0",
      cursor: "pointer",
      color: "var(--text-heading)",
      textAlign: "left"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-core)",
      fontWeight: "var(--weight-heading)",
      fontSize: "clamp(17px,1.5vw,22px)",
      letterSpacing: "var(--track-heading)"
    }
  }, kop), /*#__PURE__*/React.createElement("span", {
    style: {
      display: "flex",
      gap: 4,
      opacity: aan ? 0 : 1,
      transition: "opacity 500ms ease"
    }
  }, items.slice(0, 5).map((x, i) => /*#__PURE__*/React.createElement("img", {
    key: i,
    src: x.terug,
    alt: "",
    loading: "lazy",
    style: {
      width: 64,
      aspectRatio: "16 / 9",
      objectFit: "cover",
      borderRadius: 3,
      display: "block"
    }
  }))), /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true",
    style: {
      width: 28,
      height: 28,
      display: "grid",
      placeItems: "center",
      transform: aan ? "rotate(45deg)" : "none",
      transition: "transform " + VL
    }
  }, /*#__PURE__*/React.createElement("svg", {
    viewBox: "0 0 24 24",
    width: "18",
    height: "18",
    stroke: "currentColor",
    strokeWidth: "1.5"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M12 4v16M4 12h16"
  })))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateRows: aan ? "1fr" : "0fr",
      transition: "grid-template-rows " + VL
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      overflow: "hidden",
      minHeight: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gap: "var(--space-4)",
      paddingBottom: "var(--space-5)",
      opacity: aan ? 1 : 0,
      transform: aan ? "translate3d(0,0,0)" : "translate3d(0,24px,0)",
      transition: "opacity " + (aan ? "900ms ease 250ms" : "450ms ease") + ", transform " + VL
    }
  }, gezien && Deel ? rijen.map((r, n) => /*#__PURE__*/React.createElement("div", {
    key: n,
    style: {
      width: r.length < 4 && rijen.length > 1 ? "calc(" + r.length + " / 4 * 100%)" : "100%"
    }
  }, /*#__PURE__*/React.createElement(Deel, {
    films: r,
    groot: 1.9,
    klein: 0.75,
    watchHover: true,
    vloei: "900ms cubic-bezier(.45,0,.2,1)"
  }))) : null))));
}
function RijRaster({
  c,
  open,
  onClose
}) {
  const groepen = c.raster;
  const g = k => (groepen.find(x => x.kop === k) || {}).items || [];
  const hero = g("Hero")[0];
  const v = React.useRef(null);
  const wrap = React.useRef(null);
  const [kopje, setKopje] = React.useState(-1);
  const wissel = n => setKopje(k => k === n ? -1 : n);
  const sluit = e => {
    e.stopPropagation();
    const r = wrap.current ? wrap.current.getBoundingClientRect() : null;
    onClose();
    if (r && r.top < 0) window.scrollBy({
      top: r.top - 160,
      behavior: "smooth"
    });
  };
  const tel = [g("With models").length + " films with models", g("Product films").length + " product films"].join(" · ");
  const zacht = n => ({
    opacity: open ? 1 : 0,
    transform: open ? "none" : "translateY(18px)",
    transition: open ? "opacity 800ms ease " + (150 + n * 140) + "ms, transform 1000ms cubic-bezier(.22,.8,.24,1) " + (150 + n * 140) + "ms" : "opacity 500ms ease, transform 1100ms cubic-bezier(.65,0,.25,1)"
  });
  return /*#__PURE__*/React.createElement("div", {
    ref: wrap,
    onClick: e => e.stopPropagation(),
    style: {
      position: "relative",
      display: "grid",
      gap: "var(--space-6)",
      paddingRight: "var(--page-margin)",
      cursor: "default"
    }
  }, /*#__PURE__*/React.createElement("style", null, "@media (max-width:820px){[data-raster-hero]{grid-template-columns:minmax(0,1fr)!important}}"), /*#__PURE__*/React.createElement("div", {
    "data-raster-hero": "1",
    style: {
      ...zacht(0),
      position: "relative",
      display: "grid",
      gridTemplateColumns: "minmax(0,1fr)",
      paddingTop: 0
    }
  }, hero ? /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: "min(100%, calc(70vh * 16 / 9))",
      justifySelf: "start",
      aspectRatio: "16 / 9",
      overflow: "hidden",
      borderRadius: 5,
      background: "#0b1730"
    }
  }, /*#__PURE__*/React.createElement("video", {
    ref: v,
    src: hero.video,
    poster: hero.terug,
    autoPlay: open,
    muted: true,
    loop: true,
    playsInline: true,
    preload: "auto",
    style: {
      position: "absolute",
      inset: 0,
      width: "100%",
      height: "100%",
      objectFit: "cover"
    }
  }), /*#__PURE__*/React.createElement(RasterGeluid, {
    video: v
  })) : null), /*#__PURE__*/React.createElement("div", {
    style: {
      ...zacht(1),
      display: "grid"
    }
  }, /*#__PURE__*/React.createElement(RasterKopje, {
    kop: "Films with models",
    items: g("With models"),
    aan: kopje === 0,
    onWissel: () => wissel(0)
  }), /*#__PURE__*/React.createElement(RasterKopje, {
    kop: "Product films",
    items: g("Product films"),
    aan: kopje === 1,
    onWissel: () => wissel(1)
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      height: 1,
      background: "var(--white-24, rgba(255,255,255,0.24))"
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "sticky",
      bottom: "var(--space-5)",
      zIndex: 6,
      display: "flex",
      justifyContent: "center",
      pointerEvents: "none",
      marginTop: "calc(var(--space-4) * -1)"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      pointerEvents: "auto",
      filter: "drop-shadow(0 6px 18px rgba(8,18,40,0.45))"
    }
  }, /*#__PURE__*/React.createElement(WitteKnop, {
    onClick: sluit
  }, "Close " + c.klant))));
}

/* spiegel: beeldstrook links en tekst rechts in rust (casepagina's). geenKnop: zonder View case. */
function CaseRij({
  c,
  i,
  go,
  open,
  onToggle,
  spiegel,
  geenKnop,
  groot
}) {
  const [hover, setHover] = React.useState(false);
  const sleep = React.useRef(false);
  const naar = ev => {
    ev.stopPropagation();
    window.DOLLE_CASE = c.id;
    go("case");
  };
  const tik = () => {
    if (sleep.current) {
      sleep.current = false;
      return;
    }
    onToggle();
  };
  /* De campagne blijft na sluiten nog even staan, zodat hij rustig kan inklappen. */
  const RVL = VLOEI;
  const [toon, setToon] = React.useState(open);
  const [kopH, setKopH] = React.useState(240);
  React.useEffect(() => {
    if (open) {
      setToon(true);
      return;
    }
    const t = setTimeout(() => setToon(false), 1150);
    return () => clearTimeout(t);
  }, [open]);
  const rust = "cubic-bezier(.22,.61,.24,1)";
  /* De strook is in rust hoger dan de kop. Meten dus: de strook wordt met de
     kophoogte omhoog getrokken (dan begint hij bovenaan de rij) en de kop zakt
     naar het midden van de strook. Zo bepaalt de strook de rijhoogte en wordt er
     niets afgesneden. */
  const kopRef = React.useRef(null);
  const strookRef = React.useRef(null);
  const kolomRef = React.useRef(null);
  const rijRef = React.useRef(null);
  const [maat, setMaat] = React.useState({
    kop: 0,
    strook: 0,
    kolom: 0
  });
  const openRef = React.useRef(open);
  openRef.current = open;
  const knopRef = React.useRef(null);
  React.useLayoutEffect(() => {
    const meet = () => {
      if (!kopRef.current || !strookRef.current) return;
      /* De gesloten strook begint exact waar de derde kolom begint, nooit over
         de schakel heen: die grens meten we in plaats van hem te schatten. */
      let kolom = 0;
      if (spiegel && openRef.current) {
        setMaat(m => ({
          ...m,
          kop: kopRef.current.offsetHeight,
          strook: strookRef.current.offsetHeight
        }));
        return;
      }
      if (kolomRef.current && rijRef.current) {
        const k = kolomRef.current.getBoundingClientRect(),
          rr = rijRef.current.getBoundingClientRect();
        /* Gespiegeld: de strook eindigt een kolomgat vóór de schakel; die staat direct vast. */
        const kb = knopRef.current ? knopRef.current.getBoundingClientRect() : k;
        const gat = parseFloat(getComputedStyle(kopRef.current).columnGap) || 0;
        kolom = Math.max(0, Math.round(spiegel ? rr.right - (kb.left - gat) : k.left - rr.left));
      }
      setMaat({
        kop: kopRef.current.offsetHeight,
        strook: strookRef.current.offsetHeight,
        kolom: kolom
      });
    };
    meet();
    if (typeof ResizeObserver === "undefined") return;
    const ro = new ResizeObserver(meet);
    if (rijRef.current) ro.observe(rijRef.current);
    if (kopRef.current) ro.observe(kopRef.current);
    if (strookRef.current) ro.observe(strookRef.current);
    return () => ro.disconnect();
  }, []);
  /* Na sluiten opnieuw meten in de gespiegelde stand. */
  const [hermeet, setHermeet] = React.useState(0);
  React.useEffect(() => {
    if (!spiegel || open) return;
    const t = setTimeout(() => setHermeet(n => n + 1), 30);
    return () => clearTimeout(t);
  }, [open, spiegel]);
  React.useLayoutEffect(() => {
    if (!spiegel || open || !hermeet || !knopRef.current || !rijRef.current || !kopRef.current) return;
    const rr = rijRef.current.getBoundingClientRect(),
      kb = knopRef.current.getBoundingClientRect();
    const gat = parseFloat(getComputedStyle(kopRef.current).columnGap) || 0;
    const kolom = Math.max(0, Math.round(rr.right - (kb.left - gat)));
    setMaat(m => m.kolom === kolom ? m : {
      ...m,
      kolom
    });
  }, [hermeet]);
  /* De tekstreveal hangt aan de scrollteller in documentcoördinaten, niet aan
     een IntersectionObserver: het inladen van beeld verschuift de layout en dat
     vuurde de reveal van alle rijen tegelijk af. */
  const [binnen, setBinnen] = React.useState(false);
  React.useEffect(() => {
    if (window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setBinnen(true);
      return;
    }
    let diepst = 0,
      aan = false;
    return TELLER.aan(vh => {
      if (aan || !rijRef.current) return;
      const sy = window.scrollY || window.pageYOffset || 0;
      const docTop = rijRef.current.getBoundingClientRect().top + sy;
      const rand = sy + vh * 0.82;
      if (rand > diepst) diepst = rand;
      if (diepst > docTop) {
        aan = true;
        setBinnen(true);
      }
    });
  }, []);
  const zak = Math.max((maat.strook - maat.kop) / 2, 0);
  return /*#__PURE__*/React.createElement(RijOpkomst, {
    vast: !!c.raster
  }, /*#__PURE__*/React.createElement(Haarlijn, {
    vol: c.raster ? true : open
  }), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    ref: rijRef,
    onClick: tik,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      cursor: "pointer",
      color: "var(--text-heading)",
      minWidth: 0,
      padding: "var(--space-4) 0",
      marginRight: "calc(var(--page-margin) * -1)",
      overflow: "clip",
      paddingBottom: open ? "var(--space-7)" : "var(--space-4)",
      transition: "padding-bottom " + VLOEI
    }
  }, /*#__PURE__*/React.createElement("div", {
    ref: n => {
      kopRef.current = n;
      if (n && c.raster && !open && n.scrollHeight && Math.abs(n.scrollHeight - kopH) > 2) setKopH(n.scrollHeight);
    },
    style: {
      display: "grid",
      gridTemplateColumns: spiegel && !open ? "minmax(0,1fr) auto minmax(0,42%)" : "minmax(0,42%) auto minmax(0,1fr)",
      direction: spiegel && !open ? "rtl" : "ltr",
      gap: "var(--space-6)",
      alignItems: "start",
      minWidth: 0,
      paddingRight: "var(--page-margin)",
      transform: open ? "translateY(0)" : "translateY(" + zak + "px)",
      transition: "transform " + VLOEI
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gap: "var(--space-3)",
      justifyItems: "start",
      minWidth: 0,
      direction: "ltr"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: "block",
      fontFamily: "var(--font-core)",
      fontWeight: "var(--weight-heading)",
      fontSize: "clamp(18px,1.9vw,28px)",
      letterSpacing: "var(--track-heading)",
      whiteSpace: "nowrap"
    }
  }, c.klant), /*#__PURE__*/React.createElement("span", {
    style: {
      display: "flex",
      gap: "var(--space-2)",
      flexWrap: "wrap"
    }
  }, c.kaders.map((k, n) => /*#__PURE__*/React.createElement("span", {
    key: k,
    style: {
      position: "relative",
      display: "block",
      whiteSpace: "nowrap",
      background: "#0b1730",
      padding: "7px 10px 6px",
      fontFamily: "var(--font-label)",
      fontWeight: "var(--weight-label)",
      fontSize: "var(--size-label-sm)",
      letterSpacing: "var(--track-label-wide)",
      textTransform: "uppercase",
      color: "var(--text-body)"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: "block",
      clipPath: binnen ? "inset(-4px -2px -4px 0)" : "inset(-4px 100% -4px 0)",
      transition: "clip-path 900ms cubic-bezier(.65,0,.25,1) " + (160 + n * 140) + "ms"
    }
  }, k)))), /*#__PURE__*/React.createElement("span", {
    style: {
      display: "block",
      overflow: "hidden",
      maxHeight: open ? "180px" : "0px",
      opacity: open ? 1 : 0,
      transition: "max-height " + VLOEI + ", opacity " + (open ? 600 : 240) + "ms var(--ease-dolle) " + (open ? 220 : 0) + "ms"
    },
    onClick: ev => ev.stopPropagation()
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: "flex",
      gap: "var(--space-4)",
      alignItems: "center",
      flexWrap: "wrap",
      paddingTop: "var(--space-6)"
    }
  }, geenKnop ? null : /*#__PURE__*/React.createElement(WitteKnop, {
    tabIndex: open ? 0 : -1,
    onClick: naar
  }, "View case")))), /*#__PURE__*/React.createElement("span", {
    ref: knopRef,
    style: {
      alignSelf: "start",
      marginTop: "-6px",
      direction: "ltr"
    },
    onClick: ev => ev.stopPropagation()
  }, /*#__PURE__*/React.createElement(Button, {
    size: "sm",
    variant: "secondary",
    onClick: onToggle,
    "aria-expanded": open,
    "aria-label": (open ? "Close " : "View ") + c.klant,
    style: {
      color: "var(--dolle-white)",
      borderColor: "transparent"
    }
  }, open ? "Close" : "View")), /*#__PURE__*/React.createElement("span", {
    ref: kolomRef,
    style: {
      display: "block",
      minWidth: 0,
      direction: "ltr",
      overflow: "hidden",
      maxHeight: open ? "320px" : "0px",
      opacity: open ? 1 : 0,
      transition: "max-height " + VLOEI + ", opacity " + (open ? 620 : 240) + "ms var(--ease-dolle) " + (open ? 220 : 0) + "ms"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: "block",
      color: "var(--text-body)",
      maxWidth: "46ch",
      marginLeft: "auto",
      fontSize: "var(--size-body)",
      lineHeight: "var(--lh-body)"
    }
  }, c.body), c.raster ? /*#__PURE__*/React.createElement(Kicker, {
    size: "sm",
    style: {
      display: "block",
      maxWidth: "46ch",
      marginLeft: "auto",
      paddingTop: "var(--space-4)",
      color: "var(--text-muted)"
    }
  }, [["With models", "films with models"], ["Product films", "product films"]].map(([k, l]) => ((c.raster.find(x => x.kop === k) || {}).items || []).length + " " + l).join(" · ")) : null, c.stat ? /*#__PURE__*/React.createElement(Kicker, {
    size: "sm",
    tone: "strong",
    style: {
      display: "block",
      maxWidth: "46ch",
      marginLeft: "auto",
      paddingTop: "var(--space-4)"
    }
  }, c.stat, " \xB7 ", c.label) : null)), /*#__PURE__*/React.createElement("div", {
    ref: strookRef,
    style: {
      width: open ? "100%" : "calc(100% - " + maat.kolom + "px)",
      marginLeft: spiegel ? 0 : "auto",
      marginTop: open ? "var(--space-6)" : -maat.kop + "px",
      transition: "width " + VLOEI + ", margin-top " + VLOEI
    }
  }, c.raster ?
  /*#__PURE__*/
  /* Strook en campagne wisselen in één beweging: de een klapt in terwijl de ander uitklapt. */
  React.createElement("div", {
    style: {
      display: "grid"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateRows: open ? "0fr" : "1fr",
      opacity: open ? 0 : 1,
      transition: "grid-template-rows " + RVL + ", opacity 600ms ease"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      overflow: "hidden",
      minHeight: 0
    }
  }, /*#__PURE__*/React.createElement(RijBeeld, {
    c: c,
    open: false,
    hover: hover,
    groot: groot,
    onSleep: () => {
      sleep.current = true;
    }
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateRows: open ? "1fr" : "0fr",
      transition: "grid-template-rows " + RVL
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      overflow: open ? "visible" : "hidden",
      minHeight: 0
    }
  }, toon ? /*#__PURE__*/React.createElement(RijRaster, {
    c: c,
    open: open,
    onClose: onToggle
  }) : null))) : /*#__PURE__*/React.createElement(RijBeeld, {
    c: c,
    open: open,
    hover: hover,
    groot: groot,
    onSleep: () => {
      sleep.current = true;
    }
  })))));
}

/* Rangschikken: de volgorde staat als lijst van id's in de browser opgeslagen,
   zodat een gekozen rangorde een herlading overleeft. Zonder opgeslagen lijst
   geldt de volgorde uit het bestand. */
const RANG_SLEUTEL = "dolle-cases-rang";
function leesRang() {
  try {
    const rauw = window.localStorage.getItem(RANG_SLEUTEL);
    const lijst = rauw ? JSON.parse(rauw) : null;
    return Array.isArray(lijst) ? lijst : null;
  } catch (e) {
    return null;
  }
}
function schrijfRang(ids) {
  try {
    window.localStorage.setItem(RANG_SLEUTEL, JSON.stringify(ids));
  } catch (e) {/* geen opslag */}
}
function sorteer(cases, rang) {
  if (!rang || !rang.length) return cases;
  const plek = new Map(rang.map((id, i) => [id, i]));
  /* Een case die nog niet in de opgeslagen rangorde staat (nieuw in het
     bestand) gaat net vóór de eerstvolgende bekende buur staan, in plaats van
     achteraan te belanden. */
  const stand = new Map();
  cases.forEach((c2, i) => {
    if (plek.has(c2.id)) {
      stand.set(c2.id, plek.get(c2.id) * 10);
      return;
    }
    let volg = null;
    for (let j = i + 1; j < cases.length; j++) {
      if (plek.has(cases[j].id)) {
        volg = plek.get(cases[j].id);
        break;
      }
    }
    stand.set(c2.id, volg == null ? 9999 + i : volg * 10 - 1);
  });
  return cases.slice().sort((a, b) => stand.get(a.id) - stand.get(b.id));
}

/* De rangschik-rij: dezelfde haarlijnrij, maar zonder beeld. Slepen zet de case
   op een nieuwe plek, de pijlen doen hetzelfde stap voor stap. */
function RangRij({
  c,
  plek,
  totaal,
  verplaats,
  pak,
  laat,
  sleepId
}) {
  const actief = sleepId === c.id;
  return /*#__PURE__*/React.createElement("div", {
    draggable: "true",
    onDragStart: () => pak(c.id),
    onDragOver: ev => {
      ev.preventDefault();
      laat(c.id, false);
    },
    onDrop: ev => {
      ev.preventDefault();
      laat(c.id, true);
    },
    onDragEnd: () => laat(null, true),
    style: {
      display: "grid",
      gridTemplateColumns: "auto minmax(0,1fr) auto auto",
      gap: "var(--space-5)",
      alignItems: "center",
      padding: "var(--space-3) 0",
      borderTop: "1px solid var(--white-24, rgba(255,255,255,0.24))",
      cursor: "grab",
      opacity: actief ? 0.45 : 1,
      transition: "opacity var(--dur-ui) var(--ease-dolle)"
    }
  }, /*#__PURE__*/React.createElement(Kicker, {
    size: "sm",
    style: {
      minWidth: "3ch",
      color: plek < 6 ? "var(--dolle-white)" : "var(--text-muted)"
    }
  }, String(plek + 1).padStart(2, "0")), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-core)",
      fontWeight: "var(--weight-heading)",
      fontSize: "clamp(15px,1.3vw,20px)",
      letterSpacing: "var(--track-heading)",
      color: "var(--dolle-white)"
    }
  }, c.klant), /*#__PURE__*/React.createElement(Kicker, {
    size: "sm",
    style: {
      color: "var(--text-muted)",
      whiteSpace: "nowrap"
    }
  }, c.dienst), /*#__PURE__*/React.createElement("span", {
    style: {
      display: "flex",
      gap: "var(--space-3)"
    }
  }, /*#__PURE__*/React.createElement(Button, {
    size: "sm",
    variant: "secondary",
    mark: false,
    disabled: plek === 0,
    onClick: () => verplaats(c.id, -1),
    "aria-label": "Hoger: " + c.klant,
    style: {
      color: "var(--dolle-white)",
      borderColor: "var(--white-24, rgba(255,255,255,0.24))",
      padding: "8px 14px"
    }
  }, "\u2191"), /*#__PURE__*/React.createElement(Button, {
    size: "sm",
    variant: "secondary",
    mark: false,
    disabled: plek === totaal - 1,
    onClick: () => verplaats(c.id, 1),
    "aria-label": "Lager: " + c.klant,
    style: {
      color: "var(--dolle-white)",
      borderColor: "var(--white-24, rgba(255,255,255,0.24))",
      padding: "8px 14px"
    }
  }, "\u2193")));
}
function RangPaneel({
  lijst,
  rang,
  setRang,
  sluit
}) {
  const [sleepId, setSleepId] = React.useState(null);
  const ids = lijst.map(x => x.id);
  const zet = nieuw => {
    setRang(nieuw);
    schrijfRang(nieuw);
  };
  const verplaats = (id, richting) => {
    const i = ids.indexOf(id);
    const j = i + richting;
    if (i < 0 || j < 0 || j >= ids.length) return;
    const nieuw = ids.slice();
    nieuw.splice(j, 0, nieuw.splice(i, 1)[0]);
    zet(nieuw);
  };
  const laat = (doelId, klaar) => {
    if (!sleepId || doelId === sleepId) {
      if (klaar) setSleepId(null);
      return;
    }
    if (doelId != null) {
      const nieuw = ids.slice();
      const i = nieuw.indexOf(sleepId);
      nieuw.splice(i, 1);
      nieuw.splice(nieuw.indexOf(doelId), 0, sleepId);
      zet(nieuw);
    }
    if (klaar) setSleepId(null);
  };
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gap: "var(--space-5)",
      padding: "var(--space-5) 0 var(--space-7)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: "var(--space-6)",
      alignItems: "center",
      flexWrap: "wrap"
    }
  }, /*#__PURE__*/React.createElement(Kicker, {
    size: "sm",
    style: {
      color: "var(--text-muted)"
    }
  }, "Sleep of gebruik de pijlen \xB7 bovenaan is belangrijkst"), /*#__PURE__*/React.createElement("span", {
    style: {
      display: "flex",
      gap: "var(--space-4)",
      marginLeft: "auto"
    }
  }, /*#__PURE__*/React.createElement(Button, {
    size: "sm",
    variant: "secondary",
    onClick: () => {
      try {
        window.localStorage.removeItem(RANG_SLEUTEL);
      } catch (e) {}
      setRang(null);
    },
    style: {
      color: "var(--dolle-white)",
      borderColor: "var(--white-24, rgba(255,255,255,0.24))"
    }
  }, "Reset"), /*#__PURE__*/React.createElement(Button, {
    size: "sm",
    variant: "secondary",
    onClick: sluit,
    style: {
      color: "var(--dolle-white)",
      borderColor: "var(--white-24, rgba(255,255,255,0.24))"
    }
  }, "Done"))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid"
    }
  }, lijst.map((c, i) => /*#__PURE__*/React.createElement(RangRij, {
    key: c.id,
    c: c,
    plek: i,
    totaal: lijst.length,
    verplaats: verplaats,
    pak: setSleepId,
    laat: laat,
    sleepId: sleepId
  }))));
}

/* De kaders staan in de kop, tussen de spreuk en de lead: gewone woorden met
   de onderlijn van de navigatie, tussen twee haarlijnen. */
function FilterBalk({
  filter,
  setFilter,
  aantal,
  totaal,
  rangAan,
  setRangAan
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      width: "100%",
      display: "grid",
      gap: "var(--space-4)",
      padding: "var(--space-4) 0 var(--space-5)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: "var(--space-7)",
      alignItems: "center",
      flexWrap: "wrap",
      justifyContent: "flex-end",
      maxWidth: "100%",
      marginLeft: "auto"
    }
  }, FILTERS.map(f => /*#__PURE__*/React.createElement(CaseFilter, {
    key: f,
    label: f,
    active: filter === f,
    onClick: () => setFilter(f)
  })), /*#__PURE__*/React.createElement(Kicker, {
    size: "sm",
    style: {
      whiteSpace: "nowrap"
    }
  }, "[ ", String(aantal).padStart(2, "0"), " \xB7 ", String(totaal).padStart(2, "0"), " ]"), /*#__PURE__*/React.createElement(CaseFilter, {
    label: rangAan ? "Done ranking" : "Rank",
    active: rangAan,
    onClick: () => setRangAan(!rangAan)
  })));
}
function CasesLijst({
  go,
  lijst,
  alles,
  filter,
  setFilter,
  aantal,
  totaal,
  rang,
  setRang
}) {
  const [open, setOpen] = React.useState(-1);
  const [rangAan, setRangAan] = React.useState(false);
  React.useEffect(() => {
    setOpen(-1);
  }, [filter]);
  return /*#__PURE__*/React.createElement("section", {
    className: "dolle-dark",
    style: {
      background: "var(--dolle-navy)",
      padding: "0 var(--page-margin) var(--section-gap)",
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: "var(--content-max)",
      margin: "0 auto",
      display: "grid",
      gridTemplateColumns: "minmax(0,1fr)"
    }
  }, /*#__PURE__*/React.createElement(FilterBalk, {
    filter: filter,
    setFilter: setFilter,
    aantal: aantal,
    totaal: totaal,
    rangAan: rangAan,
    setRangAan: setRangAan
  }), rangAan ? /*#__PURE__*/React.createElement(RangPaneel, {
    lijst: alles,
    rang: rang,
    setRang: setRang,
    sluit: () => setRangAan(false)
  }) : lijst.map((c, i) => /*#__PURE__*/React.createElement(CaseRij, {
    key: c.id,
    c: c,
    i: i,
    go: go,
    open: open === c.id,
    onToggle: () => setOpen(open === c.id ? -1 : c.id)
  })), /*#__PURE__*/React.createElement(Haarlijn, null)));
}

/* Tussenband op navy: één spreuk, het bewijs in verleden tijd. */
function CasesBand() {
  return /*#__PURE__*/React.createElement("section", {
    className: "dolle-dark",
    style: {
      background: "var(--dolle-navy)",
      padding: "clamp(72px,9vw,140px) var(--page-margin)",
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: "var(--content-max)",
      margin: "0 auto",
      display: "grid",
      gridTemplateColumns: "1fr 1fr",
      gap: "var(--grid-gap)",
      alignItems: "center"
    }
  }, /*#__PURE__*/React.createElement(Words, {
    as: "h2",
    text: "Ambition in the future tense. Proof in the past tense.",
    style: {
      margin: 0,
      fontSize: "var(--size-h1)",
      maxWidth: "16ch"
    }
  }), /*#__PURE__*/React.createElement(Reveal, {
    delay: 300,
    style: {
      display: "grid",
      gap: "var(--space-6)",
      justifyItems: "start"
    }
  }, /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      color: "var(--text-body)",
      maxWidth: "46ch"
    }
  }, "A baseline before we start, 90 days of measurement after, and one figure in the frame. Only measured results from our own work, always with context and period."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: "var(--space-8)"
    }
  }, [["100+", "Brands made visible"], ["90", "Days measured, every case"], ["4", "Services, one movement"]].map(([v, l]) => /*#__PURE__*/React.createElement("div", {
    key: l,
    style: {
      display: "grid",
      gap: "var(--space-2)"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-core)",
      fontWeight: "var(--weight-heading)",
      fontSize: "var(--size-h2)",
      letterSpacing: "var(--track-heading)",
      color: "var(--text-heading)"
    }
  }, v), /*#__PURE__*/React.createElement(Kicker, {
    size: "sm"
  }, l)))))));
}
function CasesCTA({
  go
}) {
  return /*#__PURE__*/React.createElement("section", {
    style: {
      background: "var(--dolle-white)",
      padding: "var(--section-gap) var(--page-margin)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: "var(--content-max)",
      margin: "0 auto",
      display: "grid",
      gap: "var(--space-6)",
      justifyItems: "start"
    }
  }, /*#__PURE__*/React.createElement(Reveal, null, /*#__PURE__*/React.createElement(Kicker, null, "[ get in touch ]")), /*#__PURE__*/React.createElement(Words, {
    as: "h2",
    text: "Your case, next.",
    delay: 80,
    style: {
      margin: 0,
      color: "var(--text-heading)"
    }
  }), /*#__PURE__*/React.createElement(Reveal, {
    delay: 260
  }, /*#__PURE__*/React.createElement(Button, {
    onClick: () => go("contact")
  }, "Start a project")), /*#__PURE__*/React.createElement(Reveal, {
    delay: 360,
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(auto-fit,minmax(280px,340px))",
      gap: "var(--space-3)",
      width: "100%"
    }
  }, /*#__PURE__*/React.createElement("a", {
    href: "tel:+31651202317",
    style: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      gap: "var(--space-6)",
      padding: "var(--space-3) var(--space-4)",
      border: "1px solid var(--border-hairline)",
      color: "var(--text-heading)",
      textDecoration: "none",
      fontFamily: "var(--font-label)",
      fontWeight: 600,
      letterSpacing: "0.06em",
      fontSize: "var(--size-body-sm)"
    }
  }, "+31 6 51 20 23 17", /*#__PURE__*/React.createElement(Icon, {
    name: "arrow-right",
    size: 16
  })), /*#__PURE__*/React.createElement("a", {
    href: "mailto:info@dolle.nl",
    style: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      gap: "var(--space-6)",
      padding: "var(--space-3) var(--space-4)",
      border: "1px solid var(--border-hairline)",
      color: "var(--text-heading)",
      textDecoration: "none",
      fontFamily: "var(--font-label)",
      fontWeight: 600,
      letterSpacing: "0.06em",
      fontSize: "var(--size-body-sm)"
    }
  }, "info@dolle.nl", /*#__PURE__*/React.createElement(Icon, {
    name: "arrow-right",
    size: 16
  })))));
}
function Cases({
  go
}) {
  const [filter, setFilter] = React.useState("All cases");
  const [rang, setRang] = React.useState(null);
  React.useEffect(() => {
    setRang(leesRang());
  }, []);
  const geordend = sorteer(CASES, rang);
  const lijst = filter === "All cases" ? geordend : geordend.filter(x => x.dienst === filter);
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(CasesHero, {
    go: go
  }), /*#__PURE__*/React.createElement(CasesLijst, {
    go: go,
    lijst: lijst,
    filter: filter,
    setFilter: setFilter,
    aantal: lijst.length,
    totaal: CASES.length,
    alles: geordend,
    rang: rang,
    setRang: setRang
  }), /*#__PURE__*/React.createElement(CasesBand, null), /*#__PURE__*/React.createElement(HomeConversie, {
    go: go
  }));
}

/* Eén volgorde voor cases-pagina en homepage: de opgeslagen rangorde eerst,
   anders de volgorde uit het bestand. */
function caseVolgorde() {
  return sorteer(CASES, leesRang());
}
Object.assign(window, {
  Cases,
  CASES,
  CaseRij,
  Haarlijn,
  caseVolgorde
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/Cases.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/Chrome.jsx
try { (() => {
const {
  Logo,
  Kicker,
  Button,
  Icon
} = window.DesignSystem_8f95a2;
const ASSETS = window.DOLLE_ASSET_BASE || "assets/";
const NAV = [{
  id: "home",
  label: "Home"
}, {
  id: "diensten",
  label: "Services"
}, {
  id: "cases",
  label: "Cases"
}, {
  id: "career",
  label: "Careers"
}, {
  id: "contact",
  label: "Contact"
}];

/* Navigatie licht op naar vol wit/navy, met een hairline die van links naar rechts
   binnenkomt — dezelfde beweging als de link-knop. */
function NavLink({
  item,
  active,
  go
}) {
  const [hover, setHover] = React.useState(false);
  return /*#__PURE__*/React.createElement("a", {
    href: "#" + item.id,
    onClick: e => {
      e.preventDefault();
      go(item.id);
    },
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      position: "relative",
      border: 0,
      paddingBottom: "5px",
      fontFamily: "var(--font-label)",
      fontWeight: "var(--weight-label)",
      fontSize: "var(--size-label)",
      letterSpacing: "var(--track-label)",
      textTransform: "uppercase",
      color: active || hover ? "var(--text-heading)" : "var(--text-muted)",
      transition: "color var(--dur-ui) var(--ease-dolle)"
    }
  }, item.label, /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true",
    style: {
      position: "absolute",
      left: 0,
      right: 0,
      bottom: 0,
      height: "1px",
      background: "var(--text-heading)",
      transformOrigin: "left center",
      transform: active || hover ? "scaleX(1)" : "scaleX(0)",
      transition: "transform var(--dur-frame) var(--ease-dolle)"
    }
  }));
}

/* Taalwissel: één knop die de ándere taal toont. Nog geen vertaling aangesloten — de
   keuze staat in localStorage en op <html lang>, zodat de NL-versie er later op kan
   aanhaken. */
function LangSwitch() {
  const [lang, setLang] = React.useState(() => {
    try {
      return window.localStorage.getItem("dolle-lang") || "en";
    } catch (e) {
      return "en";
    }
  });
  const [hover, setHover] = React.useState(false);
  React.useEffect(() => {
    document.documentElement.lang = lang;
    try {
      window.localStorage.setItem("dolle-lang", lang);
    } catch (e) {}
  }, [lang]);
  const other = lang === "en" ? "nl" : "en";
  return /*#__PURE__*/React.createElement("button", {
    type: "button",
    onClick: () => setLang(other),
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    "aria-label": other === "nl" ? "Schakel naar Nederlands" : "Switch to English",
    style: {
      position: "relative",
      appearance: "none",
      background: "none",
      border: 0,
      padding: "0 0 5px",
      cursor: "pointer",
      fontFamily: "var(--font-label)",
      fontWeight: "var(--weight-label)",
      fontSize: "var(--size-label)",
      letterSpacing: "var(--track-label)",
      textTransform: "uppercase",
      color: hover ? "var(--text-heading)" : "var(--text-muted)",
      transition: "color var(--dur-ui) var(--ease-dolle)"
    }
  }, other, /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true",
    style: {
      position: "absolute",
      left: 0,
      right: 0,
      bottom: 0,
      height: "1px",
      background: "var(--text-heading)",
      transformOrigin: "left center",
      transform: hover ? "scaleX(1)" : "scaleX(0)",
      transition: "transform var(--dur-frame) var(--ease-dolle)"
    }
  }));
}
function Nav({
  page,
  go,
  tone = "dark"
}) {
  const dark = tone === "dark";
  const [menu, setMenu] = React.useState(false);
  React.useEffect(() => {
    if (!menu) return;
    const esc = e => {
      if (e.key === "Escape") setMenu(false);
    };
    document.addEventListener("keydown", esc);
    document.documentElement.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", esc);
      document.documentElement.style.overflow = "";
    };
  }, [menu]);
  const kies = id => {
    setMenu(false);
    go(id);
  };
  const streep = {
    display: "block",
    width: 22,
    height: 2,
    background: "currentColor",
    transition: "transform 420ms var(--ease-dolle), opacity 240ms linear"
  };
  return /*#__PURE__*/React.createElement("header", {
    className: dark ? "dolle-dark" : undefined,
    style: {
      position: "sticky",
      top: 0,
      zIndex: 30,
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      gap: "var(--space-6)",
      padding: "var(--space-5) var(--page-margin)",
      background: dark ? "var(--dolle-navy)" : "var(--dolle-white)",
      borderBottom: dark ? "none" : "1px solid var(--border-hairline)"
    }
  }, /*#__PURE__*/React.createElement(LogoLink, {
    dark: dark,
    go: go
  }), /*#__PURE__*/React.createElement("nav", {
    "data-nav-breed": "1",
    style: {
      display: "flex",
      gap: "var(--space-7)",
      alignItems: "center"
    }
  }, NAV.map(n => /*#__PURE__*/React.createElement(NavLink, {
    key: n.id,
    item: n,
    active: page === n.id,
    go: go
  })), /*#__PURE__*/React.createElement(LangSwitch, null), /*#__PURE__*/React.createElement(Wenk, null, /*#__PURE__*/React.createElement(Button, {
    size: "sm",
    variant: "link",
    onClick: () => go("contact")
  }, "Get in touch"))), /*#__PURE__*/React.createElement("button", {
    type: "button",
    "data-nav-burger": "1",
    "aria-label": menu ? "Close menu" : "Open menu",
    "aria-expanded": menu,
    onClick: () => setMenu(!menu),
    style: {
      display: "none",
      appearance: "none",
      background: "none",
      border: 0,
      padding: 0,
      width: 44,
      height: 44,
      cursor: "pointer",
      color: menu || dark ? "var(--dolle-white)" : "var(--dolle-navy)",
      position: "relative",
      zIndex: 62,
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      gap: 6
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      ...streep,
      transform: menu ? "translateY(4px) rotate(45deg)" : "none"
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      ...streep,
      transform: menu ? "translateY(-4px) rotate(-45deg)" : "none"
    }
  })), /*#__PURE__*/React.createElement("div", {
    className: "dolle-dark",
    "aria-hidden": !menu,
    style: {
      position: "fixed",
      inset: 0,
      zIndex: 60,
      background: "var(--dolle-navy)",
      display: "grid",
      gridTemplateRows: "1fr auto",
      padding: "calc(var(--space-9) + 24px) var(--page-margin) var(--space-7)",
      opacity: menu ? 1 : 0,
      visibility: menu ? "visible" : "hidden",
      transition: "opacity 420ms var(--ease-dolle), visibility 0s linear " + (menu ? "0s" : "420ms")
    }
  }, /*#__PURE__*/React.createElement("nav", {
    style: {
      display: "grid",
      alignContent: "start",
      gap: 0
    }
  }, NAV.map((n, i) => /*#__PURE__*/React.createElement("a", {
    key: n.id,
    href: "#" + n.id,
    tabIndex: menu ? 0 : -1,
    onClick: ev => {
      ev.preventDefault();
      kies(n.id);
    },
    style: {
      display: "flex",
      alignItems: "center",
      minHeight: 64,
      borderTop: "1px solid var(--white-16, rgba(255,255,255,0.16))",
      fontFamily: "var(--font-core)",
      fontWeight: "var(--weight-heading)",
      fontSize: "clamp(26px,8vw,40px)",
      letterSpacing: "var(--track-heading)",
      color: page === n.id ? "var(--text-accent)" : "var(--dolle-white)",
      textDecoration: "none",
      transform: menu ? "translateY(0)" : "translateY(14px)",
      opacity: menu ? 1 : 0,
      transition: "transform 620ms var(--ease-dolle) " + (80 + i * 50) + "ms, opacity 520ms var(--ease-dolle) " + (80 + i * 50) + "ms"
    }
  }, n.label))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      gap: "var(--space-5)",
      borderTop: "1px solid var(--white-16, rgba(255,255,255,0.16))",
      paddingTop: "var(--space-5)"
    }
  }, /*#__PURE__*/React.createElement(LangSwitch, null), /*#__PURE__*/React.createElement(Button, {
    size: "sm",
    variant: "link",
    onClick: () => kies("contact"),
    style: {
      color: "var(--dolle-white)"
    }
  }, "Get in touch"))));
}

/* De schakel van Get in touch knipoogt af en toe: om de zoveel tijd doet de
   knop alsof de muis er even overheen gaat, zodat de haken hun reis maken en de
   blik erheen trekken. Bij echte hover of prefers-reduced-motion gebeurt er
   niets extra's. */
function Wenk({
  children
}) {
  const doos = React.useRef(null);
  React.useEffect(() => {
    const reduce = window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) return;
    let uit = false,
      t = 0;
    const doel = () => doos.current && doos.current.querySelector("button, a");
    const tik = soort => {
      const el = doel();
      if (!el) return;
      el.dispatchEvent(new MouseEvent(soort, {
        bubbles: true,
        relatedTarget: document.body
      }));
    };
    const wenk = () => {
      if (uit || document.hidden) return;
      tik("mouseover");
      t = window.setTimeout(() => tik("mouseout"), 1400);
    };
    const klok = window.setInterval(wenk, 5500);
    const eerste = window.setTimeout(wenk, 2000);
    return () => {
      uit = true;
      clearInterval(klok);
      clearTimeout(eerste);
      clearTimeout(t);
    };
  }, []);
  return /*#__PURE__*/React.createElement("span", {
    ref: doos,
    style: {
      display: "inline-flex"
    }
  }, children);
}
function LogoLink({
  dark,
  go
}) {
  const [hover, setHover] = React.useState(false);
  return /*#__PURE__*/React.createElement("a", {
    href: "#",
    onClick: e => {
      e.preventDefault();
      go("home");
    },
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      border: 0,
      display: "block",
      opacity: hover ? 0.72 : 1,
      transition: "opacity var(--dur-ui) var(--ease-dolle)"
    }
  }, /*#__PURE__*/React.createElement(Logo, {
    variant: "open",
    tone: dark ? "white" : "navy",
    height: 24
  }));
}

/* Achtergrond-showreel: loopt gedempt in beeld met de protectiegradient erover.
   Zonder src blijft het een placeholder — er is nog geen materiaal aangeleverd. */
function ShowreelLoop({
  src,
  poster = ASSETS + "hero-showreel-frame.png",
  label = "Showreel · loop · supply mp4"
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      inset: 0,
      overflow: "hidden",
      background: "#0b1730"
    }
  }, src ? /*#__PURE__*/React.createElement("video", {
    src: src,
    poster: poster,
    autoPlay: true,
    muted: true,
    loop: true,
    playsInline: true,
    style: {
      width: "100%",
      height: "100%",
      objectFit: "cover",
      display: "block"
    }
  }) : /*#__PURE__*/React.createElement("img", {
    src: poster,
    alt: "",
    style: {
      width: "100%",
      height: "100%",
      objectFit: "cover",
      display: "block"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      inset: 0,
      background: "var(--gradient-protect)"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      inset: 0,
      background: "linear-gradient(90deg,rgba(16,31,60,.78) 0%,rgba(16,31,60,.42) 42%,rgba(16,31,60,0) 72%)"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      inset: 0,
      background: "var(--gradient-protect-top)",
      opacity: 0.4
    }
  }));
}

/* De voet komt parallax in beeld: terwijl de pagina eronder doorloopt schuift
   de inhoud van de voet iets langzamer mee omhoog. */
function Footer({
  go
}) {
  const vak = React.useRef(null);
  const laag = React.useRef(null);
  React.useEffect(() => {
    if (window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    let raf = 0;
    const kijk = () => {
      raf = 0;
      const el = vak.current,
        l = laag.current;
      if (!el || !l) return;
      const vh = window.innerHeight || 800;
      const r = el.getBoundingClientRect();
      /* 1 zolang de voet nog onder de vensterrand zit, 0 als hij volledig staat. */
      const p = Math.max(0, Math.min(1, (r.top - (vh - r.height)) / Math.max(1, r.height)));
      l.style.transform = "translate3d(0," + (p * 72).toFixed(1) + "px,0)";
      l.style.opacity = (1 - p * 0.65).toFixed(3);
    };
    const on = () => {
      if (!raf) raf = requestAnimationFrame(kijk);
    };
    window.addEventListener("scroll", on, {
      passive: true
    });
    window.addEventListener("resize", on);
    kijk();
    return () => {
      window.removeEventListener("scroll", on);
      window.removeEventListener("resize", on);
      if (raf) cancelAnimationFrame(raf);
    };
  }, []);
  return /*#__PURE__*/React.createElement("footer", {
    ref: vak,
    className: "dolle-dark",
    style: {
      position: "relative",
      zIndex: 1,
      background: "var(--dolle-navy)",
      padding: "var(--space-9) var(--page-margin) var(--space-6)",
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("div", {
    ref: laag,
    style: {
      maxWidth: "var(--content-max)",
      margin: "0 auto",
      display: "grid",
      gap: "var(--space-8)",
      willChange: "transform"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "1.4fr 1fr 1fr",
      gap: "var(--grid-gap)",
      alignItems: "start"
    }
  }, /*#__PURE__*/React.createElement(Reveal, {
    style: {
      display: "grid",
      gap: "var(--space-5)",
      justifyItems: "start"
    }
  }, /*#__PURE__*/React.createElement(Logo, {
    variant: "open",
    tone: "white",
    height: 26
  }), /*#__PURE__*/React.createElement("p", {
    style: {
      color: "var(--text-body)",
      maxWidth: "34ch",
      margin: 0
    }
  }, "DOLLE produces media, launches brands, builds systems and drives growth."), /*#__PURE__*/React.createElement("span", {
    style: {
      display: "flex",
      gap: "var(--space-5)",
      marginTop: "var(--space-2)"
    }
  }, ["instagram", "linkedin", "youtube", "tiktok"].map(n => /*#__PURE__*/React.createElement(SocialLink, {
    key: n,
    name: n,
    size: 22
  })))), /*#__PURE__*/React.createElement(Reveal, {
    delay: 140,
    style: {
      display: "grid",
      gap: "var(--space-3)",
      justifyItems: "start"
    }
  }, /*#__PURE__*/React.createElement(Kicker, null, "Pages"), ["Media production", "Launches", "AI systems", "Growth"].map(s => /*#__PURE__*/React.createElement(FooterLink, {
    key: s,
    label: s,
    onClick: () => go("diensten")
  })), /*#__PURE__*/React.createElement(FooterLink, {
    label: "Careers",
    onClick: () => go("career")
  })), /*#__PURE__*/React.createElement(Reveal, {
    delay: 280,
    style: {
      display: "grid",
      gap: "var(--space-3)",
      justifyItems: "start"
    }
  }, /*#__PURE__*/React.createElement(Kicker, null, "Contact"), /*#__PURE__*/React.createElement("a", {
    href: "mailto:info@dolle.nl",
    style: {
      fontSize: "var(--size-body-sm)",
      color: "var(--text-heading)"
    }
  }, "info@dolle.nl"), /*#__PURE__*/React.createElement("a", {
    href: "tel:+31651202317",
    style: {
      color: "var(--text-body)",
      fontSize: "var(--size-body-sm)"
    }
  }, "+31 6 51 20 23 17"), /*#__PURE__*/React.createElement("span", {
    style: {
      color: "var(--text-muted)",
      fontSize: "var(--size-body-sm)",
      lineHeight: "var(--lh-body)"
    }
  }, "Lijnbaansgracht 206-2", /*#__PURE__*/React.createElement("br", null), "1016 XA, Amsterdam"))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      borderTop: "1px solid var(--border-hairline)",
      paddingTop: "var(--space-5)"
    }
  }, /*#__PURE__*/React.createElement(Kicker, {
    size: "sm"
  }, "DOLLE \xB7 2026"))));
}

/* Placeholder media band. No imagery was supplied; the brandbook uses placeholders too. */
function MediaPlaceholder({
  label = "Placeholder · own production",
  height = 420,
  tone = "sunk",
  children
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      height: typeof height === "number" ? height + "px" : height,
      background: tone === "dark" ? "#0b1730" : "var(--surface-sunk)",
      border: "1px solid var(--border-hairline)",
      display: "grid",
      placeItems: "center",
      position: "relative",
      overflow: "hidden"
    }
  }, children, /*#__PURE__*/React.createElement("span", {
    className: "dolle-data",
    style: {
      color: tone === "dark" ? "var(--white-48)" : "var(--text-body)",
      fontSize: "10px",
      letterSpacing: "var(--track-label-wide)"
    }
  }, label));
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
function SocialLink({
  name,
  size = 16
}) {
  const [hover, setHover] = React.useState(false);
  return /*#__PURE__*/React.createElement("a", {
    href: SOCIAL_URL[name] || "#",
    "aria-label": name,
    target: "_blank",
    rel: "noopener noreferrer",
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      border: 0,
      display: "flex",
      color: hover ? "var(--text-heading)" : "var(--text-muted)",
      transition: "color var(--dur-ui) var(--ease-dolle)"
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: name,
    size: size
  }));
}
function FooterLink({
  label,
  onClick
}) {
  const [hover, setHover] = React.useState(false);
  return /*#__PURE__*/React.createElement("a", {
    href: "#",
    onClick: e => {
      e.preventDefault();
      onClick && onClick();
    },
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      border: 0,
      color: hover ? "var(--text-heading)" : "var(--text-body)",
      fontSize: "var(--size-body-sm)",
      transition: "color var(--dur-ui) var(--ease-dolle)"
    }
  }, label);
}
Object.assign(window, {
  Wenk,
  Nav,
  Footer,
  MediaPlaceholder,
  ShowreelLoop,
  FooterLink,
  SocialLink,
  NAV
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/Chrome.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/ComingSoonIntro.jsx
try { (() => {
/* Intro van de coming soon-pagina, kort en op de eindplek van het logo:
   1 · het witte beeldmerk staat in beeld, op de plek van de haken
   2 · het witte blok vervaagt, de haken worden wit en groeien naar hun maat in het woordmerk
   3 · DOLLE komt van links naar rechts tevoorschijn, direct op ware grootte
   4 · de pagina komt element voor element op */
function CSIntro({
  doel,
  onOverdracht,
  onKlaar,
  onEinde
}) {
  const [fase, setFase] = React.useState(0);
  const [plek, setPlek] = React.useState(null);
  const zacht = "cubic-bezier(.65,0,.15,1)";
  React.useLayoutEffect(() => {
    const meet = () => {
      const r = doel.current && doel.current.getBoundingClientRect();
      if (r && r.width) setPlek({
        x: r.left,
        y: r.top,
        w: r.width,
        h: r.height
      });
    };
    meet();
    window.addEventListener("resize", meet);
    return () => window.removeEventListener("resize", meet);
  }, []);
  React.useEffect(() => {
    const t = [setTimeout(() => setFase(1), 120), setTimeout(() => setFase(2), 2100), setTimeout(() => setFase(3), 3500), setTimeout(() => {
      const el = doel.current && doel.current.getBoundingClientRect();
      if (el && el.width) setPlek({
        x: el.left,
        y: el.top,
        w: el.width,
        h: el.height
      });
      setFase(4);
      onKlaar && onKlaar();
    }, 4900), setTimeout(() => {
      onOverdracht && onOverdracht();
      setFase(5);
    }, 6250), setTimeout(() => {
      setFase(6);
      onEinde && onEinde();
    }, 6450)];
    return () => t.forEach(clearTimeout);
  }, []);
  const blok = fase < 2;
  /* Tot DOLLE verschijnt staat het beeldmerk precies in het midden van het scherm;
     daarna schuift het woordmerk rustig naar zijn midden en reist het naar zijn plek. */
  const vw = window.innerWidth,
    vh = window.innerHeight;
  const midX = plek ? vw / 2 - plek.w / 2 : 0,
    midY = plek ? vh / 2 - plek.h / 2 : 0;
  const naarSymbool = plek ? (310 - 64) / 620 * plek.w : 0;
  const op = fase >= 4 && plek;
  /* Haken staan van begin tot eind op hun woordmerk-maat; het blok eromheen heeft
   de verhouding van het beeldmerk (haken op 60% van het vlak). */
  const haakT = "scale(1.282)";
  const haakKleur = blok ? "#101F3C" : "#FFFFFF";
  return /*#__PURE__*/React.createElement("div", {
    "aria-hidden": "true",
    style: {
      position: "fixed",
      inset: 0,
      zIndex: 50,
      background: fase >= 4 ? "rgba(16,31,60,0)" : "var(--dolle-navy)",
      transition: "background 900ms " + zacht + " 300ms",
      pointerEvents: fase >= 4 ? "none" : "auto",
      display: fase >= 6 ? "none" : "block"
    }
  }, plek ? /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: plek.w,
      height: plek.h,
      transform: "translate(" + (op ? plek.x : midX) + "px," + (op ? plek.y : midY) + "px)",
      transition: "transform 1300ms " + zacht
    }
  }, /*#__PURE__*/React.createElement("svg", {
    viewBox: "0 0 620 100",
    width: "100%",
    height: "100%",
    style: {
      display: "block",
      overflow: "visible",
      transform: "translateX(" + (fase >= 3 ? 0 : naarSymbool) + "px)",
      transition: "transform 1300ms " + zacht
    }
  }, /*#__PURE__*/React.createElement("rect", {
    x: "-42.7",
    y: "-56.8",
    width: "213.7",
    height: "213.7",
    fill: "#FFFFFF",
    style: {
      transformBox: "fill-box",
      transformOrigin: "50% 50%",
      clipPath: fase === 0 ? "inset(50% 0 50% 0)" : "inset(0 0 0 0)",
      transform: fase === 0 ? "scale(1.04)" : "scale(1)",
      opacity: fase === 1 ? 1 : 0,
      transition: fase <= 1 ? "clip-path 1300ms " + zacht + ", transform 1600ms " + zacht + ", opacity 1ms" : "opacity 1600ms cubic-bezier(.45,0,.25,1)"
    }
  }), /*#__PURE__*/React.createElement("g", {
    style: {
      transform: haakT,
      opacity: 1,
      transition: "transform 1100ms " + zacht
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M10 6 V46 H42",
    stroke: haakKleur,
    strokeWidth: "13",
    fill: "none",
    strokeDasharray: "72",
    style: {
      strokeDashoffset: fase === 0 ? 72 : 0,
      transition: "stroke 1600ms cubic-bezier(.45,0,.25,1), stroke-dashoffset 1100ms " + zacht + " 650ms"
    }
  }), /*#__PURE__*/React.createElement("path", {
    d: "M90 72 V32 H58",
    stroke: haakKleur,
    strokeWidth: "13",
    fill: "none",
    strokeDasharray: "72",
    style: {
      strokeDashoffset: fase === 0 ? 72 : 0,
      transition: "stroke 1600ms cubic-bezier(.45,0,.25,1), stroke-dashoffset 1100ms " + zacht + " 650ms"
    }
  })), /*#__PURE__*/React.createElement("g", {
    style: {
      clipPath: fase >= 3 ? "inset(-10% -2% -10% 0)" : "inset(-10% 100% -10% 0)",
      transition: "clip-path 1300ms " + zacht
    }
  }, /*#__PURE__*/React.createElement("g", {
    transform: "translate(180,13) scale(0.74)",
    fill: "#FFFFFF"
  }, /*#__PURE__*/React.createElement("path", {
    fillRule: "evenodd",
    d: "M0 0 H62 Q100 0 100 38 V62 Q100 100 62 100 H0 Z M20 20 H60 Q80 20 80 40 V60 Q80 80 60 80 H20 Z"
  }), /*#__PURE__*/React.createElement("path", {
    fillRule: "evenodd",
    transform: "translate(125,0)",
    d: "M36 0 H64 Q100 0 100 36 V64 Q100 100 64 100 H36 Q0 100 0 64 V36 Q0 0 36 0 Z M38 20 H62 Q80 20 80 38 V62 Q80 80 62 80 H38 Q20 80 20 62 V38 Q20 20 38 20 Z"
  }), /*#__PURE__*/React.createElement("path", {
    transform: "translate(254,0)",
    d: "M0 0 H20 V80 H100 V100 H0 Z"
  }), /*#__PURE__*/React.createElement("path", {
    transform: "translate(373,0)",
    d: "M0 0 H20 V80 H100 V100 H0 Z"
  }), /*#__PURE__*/React.createElement("path", {
    transform: "translate(494,0)",
    d: "M0 0 H100 V20 H20 V40 H80 V60 H20 V80 H100 V100 H0 Z"
  }))))) : null);
}

/* Element dat opkomt zodra de pagina vrijgegeven is: het rijst op achter een
   masker, komt van licht onscherp naar scherp en zet zich, per element iets later. */
function CSOp({
  aan,
  n = 0,
  children,
  style
}) {
  const z = "cubic-bezier(.65,0,.15,1)";
  const d = 500 + n * 520;
  return /*#__PURE__*/React.createElement("div", {
    style: {
      clipPath: aan ? "inset(-20% -10% -20% -10%)" : "inset(-20% -10% 100% -10%)",
      transition: "clip-path 2200ms " + z + " " + d + "ms"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      ...style,
      transform: aan ? "translateY(0)" : "translateY(42%)",
      filter: aan ? "blur(0px)" : "blur(8px)",
      opacity: aan ? 1 : 0,
      transition: "transform 2400ms " + z + " " + d + "ms, filter 2000ms " + z + " " + (d + 200) + "ms, opacity 1600ms " + z + " " + d + "ms"
    }
  }, children));
}

/* Haarlijn die vanuit het midden naar buiten tekent. */
function CSLijn({
  aan,
  n = 0
}) {
  return /*#__PURE__*/React.createElement("div", {
    "aria-hidden": "true",
    style: {
      height: 1,
      background: "var(--white-24, rgba(255,255,255,0.24))",
      transformOrigin: "50% 50%",
      transform: aan ? "scaleX(1)" : "scaleX(0)",
      transition: "transform 3200ms cubic-bezier(.65,0,.15,1) " + (500 + n * 520) + "ms"
    }
  });
}
Object.assign(window, {
  CSIntro,
  CSOp,
  CSLijn
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/ComingSoonIntro.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/ComingSoonWildly.jsx
try { (() => {
/* Coming soon: vier manieren om de vier WILDLY-spreuken te tonen. Te wisselen via Tweaks. */
const CSW_WOORDEN = ["Visible", "Forward", "Ahead", "Driven"];
const CSW_ZACHT = "cubic-bezier(.65,0,.15,1)";
const CSW_REGEL = {
  fontFamily: "var(--font-core)",
  fontWeight: "var(--weight-heading)",
  fontSize: "clamp(20px,2.4vw,34px)",
  lineHeight: 1,
  letterSpacing: "var(--track-wildly)",
  textTransform: "uppercase",
  whiteSpace: "nowrap"
};
const CSW_REDUCE = () => !!(window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches);
function useCSWStap(ms) {
  const [n, setN] = React.useState(0);
  React.useEffect(() => {
    const t = setInterval(() => setN(x => x + 1), ms);
    return () => clearInterval(t);
  }, [ms]);
  return n;
}
function useCSWBreedte(stijl) {
  const maat = React.useRef([]);
  const [breed, setBreed] = React.useState([]);
  React.useLayoutEffect(() => {
    const meet = () => setBreed(maat.current.map(el => el ? el.getBoundingClientRect().width : 0));
    meet();
    if (document.fonts && document.fonts.ready) document.fonts.ready.then(meet);
    window.addEventListener("resize", meet);
    return () => window.removeEventListener("resize", meet);
  }, []);
  const meter = /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true",
    style: {
      position: "absolute",
      visibility: "hidden",
      pointerEvents: "none",
      ...stijl
    }
  }, CSW_WOORDEN.map((t, k) => /*#__PURE__*/React.createElement("span", {
    key: t,
    ref: el => maat.current[k] = el,
    style: {
      display: "inline-block"
    }
  }, t)));
  return [breed, meter];
}
function CSWIndex({
  i
}) {
  const K = window.DesignSystem_8f95a2.Kicker;
  return /*#__PURE__*/React.createElement("span", {
    style: {
      display: "flex",
      gap: "var(--space-4)",
      flexWrap: "wrap",
      justifyContent: "center"
    }
  }, CSW_WOORDEN.map((t, k) => /*#__PURE__*/React.createElement(K, {
    key: t,
    size: "sm",
    style: {
      whiteSpace: "nowrap",
      color: k === i ? "var(--dolle-white)" : "var(--text-muted)",
      transition: "color 600ms var(--ease-dolle)"
    }
  }, "0" + (k + 1) + " " + t)));
}

/* 1 · Slot: WILDLY staat stil, het woord rolt omhoog als een vertrekbord. */
function CSWSlot() {
  const stap = useCSWStap(2800);
  const [glij, setGlij] = React.useState(true);
  const [rolStap, setRolStap] = React.useState(0);
  const [breed, meter] = useCSWBreedte(CSW_REGEL);
  React.useEffect(() => {
    if (stap === 0) return;
    setGlij(true);
    setRolStap(r => r + 1);
  }, [stap]);
  React.useEffect(() => {
    if (rolStap < CSW_WOORDEN.length) return;
    const t = setTimeout(() => {
      setGlij(false);
      setRolStap(0);
      requestAnimationFrame(() => requestAnimationFrame(() => setGlij(true)));
    }, 1000);
    return () => clearTimeout(t);
  }, [rolStap]);
  const i = rolStap % CSW_WOORDEN.length;
  const rol = CSW_WOORDEN.concat(CSW_WOORDEN[0]);
  const t = glij ? "900ms " + CSW_ZACHT : "0ms";
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      justifyItems: "center",
      gap: "var(--space-5)"
    }
  }, /*#__PURE__*/React.createElement("span", {
    "aria-label": "Wildly " + CSW_WOORDEN[i],
    style: {
      ...CSW_REGEL,
      display: "flex",
      gap: "0.3em",
      alignItems: "center"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      color: "var(--dolle-offwhite)"
    }
  }, "Wildly"), /*#__PURE__*/React.createElement("span", {
    style: {
      display: "block",
      width: breed[i] ? breed[i] + "px" : "auto",
      height: "1.1em",
      overflow: "hidden",
      transition: "width " + t,
      WebkitMaskImage: "linear-gradient(to bottom, transparent 0, #000 22%, #000 78%, transparent 100%)",
      maskImage: "linear-gradient(to bottom, transparent 0, #000 22%, #000 78%, transparent 100%)"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: "grid",
      transform: "translateY(" + -rolStap * 1.1 + "em)",
      transition: "transform " + t
    }
  }, rol.map((w, k) => /*#__PURE__*/React.createElement("span", {
    key: k,
    style: {
      height: "1.1em",
      lineHeight: "1.1em",
      color: "var(--text-accent)"
    }
  }, w))))), meter, /*#__PURE__*/React.createElement(CSWIndex, {
    i: i
  }));
}

/* 3 · Cascade: het oude woord valt letter voor letter weg naar boven, het nieuwe
   komt letter voor letter van onder op. */
function CSWCascade() {
  const stap = useCSWStap(3000);
  const i = stap % CSW_WOORDEN.length;
  const vorig = stap > 0 ? CSW_WOORDEN[(stap - 1) % CSW_WOORDEN.length] : null;
  const [breed, meter] = useCSWBreedte(CSW_REGEL);
  const letters = (w, uit) => w.split("").map((c, k) => /*#__PURE__*/React.createElement("span", {
    key: k,
    style: {
      display: "inline-block",
      animation: (uit ? "cswUit" : "cswIn") + " 820ms " + CSW_ZACHT + " " + (k * 42 + (uit ? 0 : 160)) + "ms both"
    }
  }, c));
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      justifyItems: "center",
      gap: "var(--space-5)"
    }
  }, /*#__PURE__*/React.createElement("style", null, "@keyframes cswIn{from{transform:translateY(110%)}to{transform:translateY(0)}}@keyframes cswUit{from{transform:translateY(0)}to{transform:translateY(-110%)}}"), /*#__PURE__*/React.createElement("span", {
    "aria-label": "Wildly " + CSW_WOORDEN[i],
    style: {
      ...CSW_REGEL,
      display: "flex",
      gap: "0.3em",
      alignItems: "center"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      color: "var(--dolle-offwhite)"
    }
  }, "Wildly"), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      display: "block",
      width: breed[i] ? breed[i] + "px" : "auto",
      height: "1.1em",
      lineHeight: "1.1em",
      overflow: "hidden",
      color: "var(--text-accent)",
      transition: "width 900ms " + CSW_ZACHT + " 120ms"
    }
  }, vorig ? /*#__PURE__*/React.createElement("span", {
    key: "u" + stap,
    "aria-hidden": "true",
    style: {
      position: "absolute",
      left: 0,
      top: 0
    }
  }, letters(vorig, true)) : null, /*#__PURE__*/React.createElement("span", {
    key: "i" + stap,
    style: {
      position: "absolute",
      left: 0,
      top: 0
    }
  }, letters(CSW_WOORDEN[i], false)))), meter, /*#__PURE__*/React.createElement(CSWIndex, {
    i: i
  }));
}

/* 4 · Achtergrond: het doelwoord heel groot en vaag achter alles; WILDLY klein en
   scherp ervoor. Het grote woord lost op in het volgende. */
function CSWAchterLaag() {
  const stap = useCSWStap(3400);
  const i = stap % CSW_WOORDEN.length;
  const vorig = stap > 0 ? CSW_WOORDEN[(stap - 1) % CSW_WOORDEN.length] : null;
  const groot = {
    position: "absolute",
    inset: 0,
    display: "grid",
    placeItems: "center",
    fontFamily: "var(--font-core)",
    fontWeight: "var(--weight-heading)",
    fontSize: "clamp(90px,21vw,360px)",
    letterSpacing: "-0.02em",
    textTransform: "uppercase",
    whiteSpace: "nowrap",
    color: "var(--dolle-white)",
    pointerEvents: "none"
  };
  return /*#__PURE__*/React.createElement("div", {
    "aria-hidden": "true",
    style: {
      position: "absolute",
      inset: 0,
      overflow: "hidden",
      zIndex: 0
    }
  }, /*#__PURE__*/React.createElement("style", null, "@keyframes cswBgIn{from{opacity:0;transform:scale(1.06);filter:blur(14px)}to{opacity:.055;transform:scale(1);filter:blur(0)}}@keyframes cswBgUit{from{opacity:.055;transform:scale(1);filter:blur(0)}to{opacity:0;transform:scale(.97);filter:blur(14px)}}"), vorig ? /*#__PURE__*/React.createElement("span", {
    key: "u" + stap,
    style: {
      ...groot,
      animation: "cswBgUit 1600ms " + CSW_ZACHT + " both"
    }
  }, vorig) : null, /*#__PURE__*/React.createElement("span", {
    key: "i" + stap,
    style: {
      ...groot,
      animation: "cswBgIn 2000ms " + CSW_ZACHT + " 300ms both"
    }
  }, CSW_WOORDEN[i]));
}
function CSWAchter() {
  const stap = useCSWStap(3400);
  const i = stap % CSW_WOORDEN.length;
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      justifyItems: "center",
      gap: "var(--space-5)"
    }
  }, /*#__PURE__*/React.createElement("style", null, "@keyframes cswKlein{from{opacity:0;transform:translateY(8px)}to{opacity:1;transform:translateY(0)}}"), /*#__PURE__*/React.createElement("span", {
    style: {
      ...CSW_REGEL,
      display: "flex",
      gap: "0.3em"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      color: "var(--dolle-offwhite)"
    }
  }, "Wildly"), /*#__PURE__*/React.createElement("span", {
    key: stap,
    style: {
      color: "var(--text-accent)",
      animation: "cswKlein 1000ms " + CSW_ZACHT + " 400ms both"
    }
  }, CSW_WOORDEN[i])), /*#__PURE__*/React.createElement(CSWIndex, {
    i: i
  }));
}

/* Vage sluiter-versie van het merkteken: de twee haken in wit, horizontaal
   uitgesmeerd zoals een lange sluitertijd, met een dunne kleurrand (rood en
   cyaan net naast elkaar) en korrel. Drijft heel langzaam heen en weer. */
function CSWSluiter() {
  const haken = kleur => /*#__PURE__*/React.createElement("g", null, /*#__PURE__*/React.createElement("path", {
    d: "M10 6 V46 H42",
    stroke: kleur,
    strokeWidth: "13",
    fill: "none"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M90 72 V32 H58",
    stroke: kleur,
    strokeWidth: "13",
    fill: "none"
  }));
  return /*#__PURE__*/React.createElement("div", {
    "aria-hidden": "true",
    style: {
      position: "absolute",
      inset: 0,
      overflow: "hidden",
      zIndex: 0,
      pointerEvents: "none",
      display: "grid",
      placeItems: "center"
    }
  }, /*#__PURE__*/React.createElement("style", null, "@keyframes cswDrijf{0%{transform:translate3d(-2.5%,0,0) rotate(-4deg) scale(1)}50%{transform:translate3d(2.5%,-1%,0) rotate(-2deg) scale(1.03)}100%{transform:translate3d(-2.5%,0,0) rotate(-4deg) scale(1)}}@keyframes cswAdem{0%,100%{opacity:.26}50%{opacity:.36}}@media (prefers-reduced-motion:reduce){[data-csw-sluiter]{animation:none!important}}"), /*#__PURE__*/React.createElement("div", {
    "data-csw-sluiter": "1",
    style: {
      width: "min(118vw,1500px)",
      aspectRatio: "100 / 78",
      animation: "cswDrijf 18s ease-in-out infinite, cswAdem 9s ease-in-out infinite"
    }
  }, /*#__PURE__*/React.createElement("svg", {
    viewBox: "-30 -20 160 118",
    width: "100%",
    height: "100%",
    style: {
      display: "block",
      overflow: "visible"
    }
  }, /*#__PURE__*/React.createElement("defs", null, /*#__PURE__*/React.createElement("filter", {
    id: "cswVeeg",
    x: "-40%",
    y: "-40%",
    width: "180%",
    height: "180%"
  }, /*#__PURE__*/React.createElement("feGaussianBlur", {
    stdDeviation: "5.5 1.6"
  })), /*#__PURE__*/React.createElement("filter", {
    id: "cswGloed",
    x: "-60%",
    y: "-60%",
    width: "220%",
    height: "220%"
  }, /*#__PURE__*/React.createElement("feGaussianBlur", {
    stdDeviation: "12 7"
  }))), /*#__PURE__*/React.createElement("g", {
    filter: "url(#cswGloed)",
    opacity: "0.55"
  }, haken("#8fa8ff")), /*#__PURE__*/React.createElement("g", {
    style: {
      mixBlendMode: "screen"
    }
  }, /*#__PURE__*/React.createElement("g", {
    filter: "url(#cswVeeg)",
    transform: "translate(-2.6,0)",
    opacity: "0.85"
  }, haken("#ff3b6b")), /*#__PURE__*/React.createElement("g", {
    filter: "url(#cswVeeg)",
    transform: "translate(2.6,0)",
    opacity: "0.85"
  }, haken("#2ee6ff")), /*#__PURE__*/React.createElement("g", {
    filter: "url(#cswVeeg)",
    opacity: "0.95"
  }, haken("#ffffff"))))), /*#__PURE__*/React.createElement("svg", {
    width: "100%",
    height: "100%",
    style: {
      position: "absolute",
      inset: 0,
      opacity: 0.16,
      mixBlendMode: "overlay"
    }
  }, /*#__PURE__*/React.createElement("filter", {
    id: "cswKorrel"
  }, /*#__PURE__*/React.createElement("feTurbulence", {
    type: "fractalNoise",
    baseFrequency: "0.9",
    numOctaves: "2",
    stitchTiles: "stitch"
  }), /*#__PURE__*/React.createElement("feColorMatrix", {
    type: "saturate",
    values: "0"
  })), /*#__PURE__*/React.createElement("rect", {
    width: "100%",
    height: "100%",
    filter: "url(#cswKorrel)"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      inset: 0,
      background: "radial-gradient(ellipse 46% 42% at 50% 50%, rgba(16,31,60,0.72) 0%, rgba(16,31,60,0.35) 60%, rgba(16,31,60,0) 100%)"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      inset: 0,
      background: "radial-gradient(ellipse at 50% 50%, rgba(16,31,60,0) 40%, rgba(16,31,60,0.55) 100%)"
    }
  }));
}

/* Het volledige open merk (haken + DOLLE) als sluiter-beeld: een scherpe witte
   kern met horizontaal uitgesmeerde echo's en een dunne rood/cyaan rand. */
function CSWSluiterLogo({
  hoogte = 56
}) {
  /* In rust het scherpe logo; af en toe glitcht het kort naar de sluiter-versie. */
  const [g, setG] = React.useState(false);
  React.useEffect(() => {
    if (CSW_REDUCE()) return;
    let t,
      leeft = true;
    const volgende = () => {
      t = setTimeout(() => {
        if (!leeft) return;
        setG(true);
        t = setTimeout(() => {
          setG(false);
          volgende();
        }, 720 + Math.random() * 380);
      }, 2600 + Math.random() * 3200);
    };
    volgende();
    return () => {
      leeft = false;
      clearTimeout(t);
    };
  }, []);
  const merk = kleur => /*#__PURE__*/React.createElement("g", null, /*#__PURE__*/React.createElement("g", {
    transform: "scale(1.282)"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M10 6 V46 H42",
    stroke: kleur,
    strokeWidth: "13",
    fill: "none"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M90 72 V32 H58",
    stroke: kleur,
    strokeWidth: "13",
    fill: "none"
  })), /*#__PURE__*/React.createElement("g", {
    transform: "translate(180,13) scale(0.74)",
    fill: kleur
  }, /*#__PURE__*/React.createElement("path", {
    fillRule: "evenodd",
    d: "M0 0 H62 Q100 0 100 38 V62 Q100 100 62 100 H0 Z M20 20 H60 Q80 20 80 40 V60 Q80 80 60 80 H20 Z"
  }), /*#__PURE__*/React.createElement("path", {
    fillRule: "evenodd",
    transform: "translate(125,0)",
    d: "M36 0 H64 Q100 0 100 36 V64 Q100 100 64 100 H36 Q0 100 0 64 V36 Q0 0 36 0 Z M38 20 H62 Q80 20 80 38 V62 Q80 80 62 80 H38 Q20 80 20 62 V38 Q20 20 38 20 Z"
  }), /*#__PURE__*/React.createElement("path", {
    transform: "translate(254,0)",
    d: "M0 0 H20 V80 H100 V100 H0 Z"
  }), /*#__PURE__*/React.createElement("path", {
    transform: "translate(373,0)",
    d: "M0 0 H20 V80 H100 V100 H0 Z"
  }), /*#__PURE__*/React.createElement("path", {
    transform: "translate(494,0)",
    d: "M0 0 H100 V20 H20 V40 H80 V60 H20 V80 H100 V100 H0 Z"
  })));
  return /*#__PURE__*/React.createElement("span", {
    role: "img",
    "aria-label": "DOLLE",
    style: {
      display: "block",
      height: hoogte,
      aspectRatio: "740 / 140"
    }
  }, /*#__PURE__*/React.createElement("style", null, "@keyframes cswSchuif{0%,100%{transform:translateX(-5px)}50%{transform:translateX(5px)}}@keyframes cswGlitch{0%{transform:translateX(0);clip-path:inset(0 0 0 0)}12%{transform:translateX(-10px);clip-path:inset(0 0 52% 0)}22%{transform:translateX(7px);clip-path:inset(38% 0 0 0)}34%{transform:translateX(-4px);clip-path:inset(0 0 0 0)}55%{transform:translateX(3px)}100%{transform:translateX(0);clip-path:inset(0 0 0 0)}}@keyframes cswFlits{0%{opacity:1}8%{opacity:0}14%{opacity:.6}20%{opacity:0}100%{opacity:0}}@media (prefers-reduced-motion:reduce){[data-csw-echo]{animation:none!important}}"), /*#__PURE__*/React.createElement("svg", {
    viewBox: "-60 -20 740 140",
    width: "100%",
    height: "100%",
    style: {
      display: "block",
      overflow: "visible",
      margin: "0 0 0 0"
    },
    preserveAspectRatio: "xMinYMid meet"
  }, /*#__PURE__*/React.createElement("defs", null, /*#__PURE__*/React.createElement("filter", {
    id: "cswLogoVeeg",
    x: "-30%",
    y: "-60%",
    width: "160%",
    height: "220%"
  }, /*#__PURE__*/React.createElement("feGaussianBlur", {
    stdDeviation: "16 1.2"
  })), /*#__PURE__*/React.createElement("filter", {
    id: "cswLogoZacht",
    x: "-20%",
    y: "-40%",
    width: "140%",
    height: "180%"
  }, /*#__PURE__*/React.createElement("feGaussianBlur", {
    stdDeviation: "3.2 0.8"
  })), /*#__PURE__*/React.createElement("filter", {
    id: "cswLogoGloed",
    x: "-40%",
    y: "-80%",
    width: "180%",
    height: "260%"
  }, /*#__PURE__*/React.createElement("feGaussianBlur", {
    stdDeviation: "26 10"
  }))), /*#__PURE__*/React.createElement("g", {
    style: {
      opacity: g ? 0 : 1,
      animation: g ? "cswFlits 260ms steps(1) both" : "none"
    }
  }, merk("#ffffff")), /*#__PURE__*/React.createElement("g", {
    style: {
      opacity: g ? 1 : 0,
      animation: g ? "cswGlitch 700ms steps(1,end) both" : "none"
    }
  }, /*#__PURE__*/React.createElement("g", {
    filter: "url(#cswLogoGloed)",
    opacity: "0.35"
  }, merk("#8fa8ff")), /*#__PURE__*/React.createElement("g", {
    "data-csw-echo": "1",
    style: {
      mixBlendMode: "screen",
      animation: "cswSchuif 7s ease-in-out infinite"
    }
  }, /*#__PURE__*/React.createElement("g", {
    filter: "url(#cswLogoVeeg)",
    transform: "translate(-14,0)",
    opacity: "0.55"
  }, merk("#ff3b6b")), /*#__PURE__*/React.createElement("g", {
    filter: "url(#cswLogoVeeg)",
    transform: "translate(14,0)",
    opacity: "0.55"
  }, merk("#2ee6ff")), /*#__PURE__*/React.createElement("g", {
    filter: "url(#cswLogoVeeg)",
    opacity: "0.45"
  }, merk("#ffffff"))), /*#__PURE__*/React.createElement("g", {
    style: {
      mixBlendMode: "screen"
    }
  }, /*#__PURE__*/React.createElement("g", {
    filter: "url(#cswLogoZacht)",
    transform: "translate(-3,0)",
    opacity: "0.7"
  }, merk("#ff5a7e")), /*#__PURE__*/React.createElement("g", {
    filter: "url(#cswLogoZacht)",
    transform: "translate(3,0)",
    opacity: "0.7"
  }, merk("#4ff0ff")), /*#__PURE__*/React.createElement("g", {
    filter: "url(#cswLogoZacht)"
  }, merk("#ffffff"))))));
}
Object.assign(window, {
  CSWSluiterLogo,
  CSWSluiter,
  CSWSlot,
  CSWCascade,
  CSWAchter,
  CSWAchterLaag
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/ComingSoonWildly.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/Contact.jsx
try { (() => {
const DS = window.DesignSystem_8f95a2;
const {
  Kicker,
  Button,
  Icon
} = DS;
const CornerRule = DS.CornerRule || (({
  children
}) => children || null);
const PHOTO = "../../assets/photography/dolle-set-01.jpg";
const SERVICES_OPT = ["Media production", "Launches", "AI systems", "Growth"];

/* Veld: alleen een hairline onder, kobalt bij focus. Label boven in spaced caps. */
function Field({
  label,
  id,
  multiline,
  type = "text",
  placeholder
}) {
  const [focus, setFocus] = React.useState(false);
  const base = {
    width: "100%",
    background: "transparent",
    border: 0,
    borderBottom: "1px solid " + (focus ? "var(--text-accent)" : "var(--border-hairline)"),
    borderBottomWidth: focus ? 2 : 1,
    marginBottom: focus ? 0 : 1,
    color: "var(--text-heading)",
    fontFamily: "var(--font-core)",
    fontSize: "var(--size-body-lg)",
    padding: "var(--space-3) 0",
    outline: "none",
    resize: "vertical",
    transition: "border-color var(--dur-ui) var(--ease-dolle)"
  };
  return /*#__PURE__*/React.createElement("label", {
    htmlFor: id,
    style: {
      display: "grid",
      gap: "var(--space-2)"
    }
  }, /*#__PURE__*/React.createElement(Kicker, {
    as: "span",
    size: "sm",
    tone: focus ? "strong" : undefined
  }, label), multiline ? /*#__PURE__*/React.createElement("textarea", {
    id: id,
    rows: 2,
    placeholder: placeholder,
    style: base,
    onFocus: () => setFocus(true),
    onBlur: () => setFocus(false)
  }) : /*#__PURE__*/React.createElement("input", {
    id: id,
    type: type,
    placeholder: placeholder,
    style: base,
    onFocus: () => setFocus(true),
    onBlur: () => setFocus(false)
  }));
}

/* Diensten als knoppen: omlijnd, aangetikt vol navy. Meerdere tegelijk mogelijk. */
function Choice({
  label,
  options,
  value = [],
  onChange
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gap: "var(--space-3)"
    }
  }, /*#__PURE__*/React.createElement(Kicker, {
    as: "span",
    size: "sm"
  }, label), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: "var(--space-3)",
      flexWrap: "wrap"
    }
  }, options.map(o => {
    const on = value.includes(o);
    return /*#__PURE__*/React.createElement("button", {
      key: o,
      type: "button",
      "aria-pressed": on,
      onClick: () => onChange(on ? value.filter(x => x !== o) : value.concat(o)),
      style: {
        appearance: "none",
        cursor: "pointer",
        height: 44,
        padding: "0 var(--space-4)",
        borderRadius: 4,
        border: "1px solid var(--text-heading)",
        background: on ? "var(--text-heading)" : "transparent",
        color: on ? "var(--dolle-white)" : "var(--text-heading)",
        fontFamily: "var(--font-label)",
        fontWeight: 600,
        fontSize: "var(--size-label)",
        letterSpacing: "var(--track-label)",
        textTransform: "uppercase",
        whiteSpace: "nowrap",
        transition: "background var(--dur-ui) var(--ease-dolle), color var(--dur-ui) var(--ease-dolle)"
      }
    }, o);
  })));
}

/* Rijst op achter een masker van onscherp naar scherp; met aan === undefined
   (gewone website) staat het gewoon in beeld en doet Reveal het werk. */
function CPlain({
  children,
  style
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: style
  }, children);
}
function COp({
  aan,
  n = 0,
  children,
  style
}) {
  if (aan === undefined) return /*#__PURE__*/React.createElement("div", {
    style: style
  }, children);
  const z = "cubic-bezier(.65,0,.15,1)";
  const d = aan ? 650 + n * 150 : 0;
  return /*#__PURE__*/React.createElement("div", {
    style: {
      clipPath: aan ? "inset(-30% -6% -30% -6%)" : "inset(-30% -6% 100% -6%)",
      transition: "clip-path " + (aan ? 1800 : 400) + "ms " + z + " " + d + "ms"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      ...style,
      transform: aan ? "translateY(0)" : "translateY(48%)",
      filter: aan ? "blur(0px)" : "blur(8px)",
      opacity: aan ? 1 : 0,
      transition: "transform " + (aan ? 2000 : 400) + "ms " + z + " " + d + "ms, filter " + (aan ? 1700 : 300) + "ms " + z + " " + (d + 120) + "ms, opacity " + (aan ? 1300 : 300) + "ms " + z + " " + d + "ms"
    }
  }, children));
}
function ContactForm({
  compact,
  aan
}) {
  const [sent, setSent] = React.useState(false);
  const [dienst, setDienst] = React.useState([]);
  if (sent) {
    return /*#__PURE__*/React.createElement(Reveal, {
      style: {
        display: "grid",
        gap: "var(--space-5)",
        justifyItems: "start",
        alignContent: "start",
        minHeight: 420
      }
    }, /*#__PURE__*/React.createElement(Kicker, null, "Received"), /*#__PURE__*/React.createElement("h2", {
      style: {
        margin: 0,
        maxWidth: "16ch"
      }
    }, "An answer within one working day."), /*#__PURE__*/React.createElement("p", {
      style: {
        margin: 0,
        color: "var(--text-body)",
        maxWidth: "40ch"
      }
    }, "We read every brief ourselves. Expect a reply with a first take and two slots for a call."), /*#__PURE__*/React.createElement(Button, {
      variant: "link",
      onClick: () => setSent(false)
    }, "Send another"));
  }
  return /*#__PURE__*/React.createElement("form", {
    onSubmit: e => {
      e.preventDefault();
      const w = id => {
        const el = document.getElementById(id);
        return el ? el.value : "";
      };
      if (!w("c-mail")) {
        const el = document.getElementById("c-mail");
        if (el) el.focus();
        return;
      }
      window.dolleVerstuur && window.dolleVerstuur("Project request · " + (w("c-company") || w("c-name") || "website"), [["Name", w("c-name")], ["Company", w("c-company")], ["Email", w("c-mail")], ["Phone", w("c-phone")], ["Services", dienst.join(", ")], ["Brief", w("c-brief")]]);
      setSent(true);
    },
    style: {
      display: "grid",
      gap: compact ? "var(--space-5)" : "var(--space-7)"
    }
  }, /*#__PURE__*/React.createElement(COp, {
    aan: aan,
    n: 3,
    style: {
      display: "grid",
      gridTemplateColumns: "1fr 1fr",
      gap: "var(--space-6)"
    }
  }, /*#__PURE__*/React.createElement(Field, {
    id: "c-name",
    label: "Name",
    placeholder: "First and last name"
  }), /*#__PURE__*/React.createElement(Field, {
    id: "c-company",
    label: "Company",
    placeholder: "Brand or organisation"
  })), /*#__PURE__*/React.createElement(COp, {
    aan: aan,
    n: 4,
    style: {
      display: "grid",
      gridTemplateColumns: "1fr 1fr",
      gap: "var(--space-6)"
    }
  }, /*#__PURE__*/React.createElement(Field, {
    id: "c-mail",
    label: "Email",
    type: "email",
    placeholder: "name@company.com"
  }), /*#__PURE__*/React.createElement(Field, {
    id: "c-phone",
    label: "Phone",
    type: "tel",
    placeholder: "Optional"
  })), /*#__PURE__*/React.createElement(COp, {
    aan: aan,
    n: 5
  }, /*#__PURE__*/React.createElement(Choice, {
    label: "Services",
    options: SERVICES_OPT,
    value: dienst,
    onChange: setDienst
  })), /*#__PURE__*/React.createElement(COp, {
    aan: aan,
    n: 6
  }, /*#__PURE__*/React.createElement(Field, {
    id: "c-brief",
    label: "Where do you want to become visible?",
    multiline: true,
    placeholder: "Goal, timing, channels. One or two lines will do."
  })), /*#__PURE__*/React.createElement(COp, {
    aan: aan,
    n: 7,
    style: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      gap: "var(--space-6)"
    }
  }, /*#__PURE__*/React.createElement(Button, {
    type: "submit"
  }, "Send")));
}

/* Echte link als knop: bellen en mailen werken overal, ook zonder JavaScript. */
function KnopLink({
  href,
  children
}) {
  const [over, setOver] = React.useState(false);
  return /*#__PURE__*/React.createElement("a", {
    href: href,
    onMouseEnter: () => setOver(true),
    onMouseLeave: () => setOver(false),
    style: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      height: 44,
      borderRadius: 4,
      border: "1px solid var(--text-heading)",
      background: over ? "var(--text-heading)" : "transparent",
      color: over ? "var(--dolle-white)" : "var(--text-heading)",
      textDecoration: "none",
      fontFamily: "var(--font-label)",
      fontWeight: 600,
      fontSize: "var(--size-label)",
      letterSpacing: "var(--track-label)",
      textTransform: "uppercase",
      transition: "background var(--dur-ui) var(--ease-dolle), color var(--dur-ui) var(--ease-dolle)"
    }
  }, children);
}
function ContactHero({
  compact,
  aan
}) {
  const eigen = aan !== undefined;
  const R = eigen ? CPlain : Reveal;
  const kop = {
    margin: 0,
    fontSize: "clamp(34px,4.2vw,60px)",
    lineHeight: 1.06,
    letterSpacing: "var(--track-heading)",
    maxWidth: "13ch"
  };
  return /*#__PURE__*/React.createElement("section", {
    style: {
      background: "var(--dolle-white)",
      padding: compact ? "clamp(24px,5vh,56px) var(--page-margin)" : "var(--space-10) var(--page-margin) var(--section-gap)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: "var(--content-max)",
      margin: "0 auto",
      display: "grid",
      gridTemplateColumns: "1fr 1.1fr",
      gap: "calc(var(--grid-gap) * 2)",
      alignItems: "start"
    }
  }, /*#__PURE__*/React.createElement("div", {
    "data-contact-kolom": "1",
    style: {
      display: "grid",
      gap: compact ? "var(--space-6)" : "var(--space-7)",
      justifyItems: "start",
      position: compact ? "static" : "sticky",
      top: "calc(var(--space-9) + 40px)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gap: "var(--space-5)",
      justifyItems: "start"
    }
  }, eigen ? /*#__PURE__*/React.createElement(COp, {
    aan: aan,
    n: 0
  }, /*#__PURE__*/React.createElement(Kicker, null, "Contact")) : /*#__PURE__*/React.createElement(Reveal, null, /*#__PURE__*/React.createElement(Kicker, null, "Contact")), eigen ? /*#__PURE__*/React.createElement(COp, {
    aan: aan,
    n: 1
  }, /*#__PURE__*/React.createElement("h1", {
    style: kop
  }, "Tell us where you want to be ", /*#__PURE__*/React.createElement("span", {
    style: {
      color: "var(--text-accent)"
    }
  }, "visible."))) : /*#__PURE__*/React.createElement(Words, {
    as: "h1",
    text: "Tell us where you want to be visible.",
    accent: "visible",
    delay: 100,
    style: kop
  })), /*#__PURE__*/React.createElement(R, {
    delay: 600,
    style: {
      display: "grid",
      gap: "var(--space-4)",
      justifyItems: "start",
      width: "100%"
    }
  }, /*#__PURE__*/React.createElement(COp, {
    aan: aan,
    n: 2,
    style: {
      display: "grid",
      gridTemplateColumns: "minmax(0,1fr) minmax(0,1fr)",
      gap: "var(--space-4)",
      width: "100%",
      maxWidth: "440px"
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "secondary",
    block: true,
    href: "tel:+31651202317",
    style: {
      borderRadius: 4,
      border: "1.5px solid var(--text-heading)"
    }
  }, "Call"), /*#__PURE__*/React.createElement(Button, {
    variant: "secondary",
    block: true,
    href: "mailto:info@dolle.nl,info@tendollemedia.nl",
    style: {
      borderRadius: 4,
      border: "1.5px solid var(--text-heading)"
    }
  }, "Email")))), /*#__PURE__*/React.createElement(R, {
    delay: 300
  }, /*#__PURE__*/React.createElement(ContactForm, {
    compact: compact,
    aan: aan
  }))));
}

/* De studio: navy band, beeld met parallax, adres. */
function ContactStudio() {
  return /*#__PURE__*/React.createElement("section", {
    className: "dolle-dark",
    style: {
      background: "var(--dolle-navy)",
      padding: "var(--section-gap) var(--page-margin)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: "var(--content-max)",
      margin: "0 auto",
      display: "grid",
      gridTemplateColumns: "1fr 1.5fr",
      gap: "calc(var(--grid-gap) * 1.5)",
      alignItems: "center"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gap: "var(--space-6)",
      justifyItems: "start"
    }
  }, /*#__PURE__*/React.createElement(Reveal, null, /*#__PURE__*/React.createElement(Kicker, null, "The studio")), /*#__PURE__*/React.createElement(Words, {
    as: "h2",
    text: "Amsterdam, on the canal.",
    delay: 80,
    style: {
      margin: 0,
      maxWidth: "14ch"
    }
  }), /*#__PURE__*/React.createElement(Reveal, {
    delay: 260,
    style: {
      display: "grid",
      gap: "var(--space-2)"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      color: "var(--text-heading)"
    }
  }, "Lijnbaansgracht 206-2"), /*#__PURE__*/React.createElement("span", {
    style: {
      color: "var(--text-body)"
    }
  }, "1016 XA Amsterdam"), /*#__PURE__*/React.createElement("a", {
    href: "https://maps.google.com/?q=Lijnbaansgracht+206-2+Amsterdam",
    target: "_blank",
    rel: "noreferrer",
    style: {
      color: "var(--text-heading)",
      fontSize: "var(--size-body-sm)",
      marginTop: "var(--space-3)"
    }
  }, "Open in Maps"))), /*#__PURE__*/React.createElement(Reveal, {
    delay: 200
  }, /*#__PURE__*/React.createElement(CornerRule, {
    corners: "tl-br",
    size: 26,
    inset: 16,
    tone: "strong"
  }, /*#__PURE__*/React.createElement(ParallaxImage, {
    src: PHOTO,
    speed: 0.14,
    style: {
      aspectRatio: "16 / 9",
      background: "#0b1730"
    }
  })))));
}
function Contact() {
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(ContactHero, null), /*#__PURE__*/React.createElement(ContactStudio, null));
}
Object.assign(window, {
  Contact,
  ContactHero
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/Contact.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/DissolveLab.jsx
try { (() => {
/* PATROON-LAB — dezelfde schuifregelaars als in het losse lab, maar dan over de
   echte hero. Alleen zichtbaar met ?lab in de URL; de stand wordt in de browser
   bewaard, zodat een gekozen set instellingen een herlading overleeft. */
const LAB_SLEUTEL = "dolle-dissolve-cfg-v3";
const LAB_VELDEN = [{
  k: "navyFill",
  label: "Navy-vulling omhoog",
  min: 0,
  max: 110,
  step: 1,
  eenheid: "vh"
}, {
  k: "cols",
  label: "Cellen breed",
  min: 0,
  max: 260,
  step: 1,
  eenheid: ""
}, {
  k: "cell",
  label: "Celgrootte (bij 0 cellen breed)",
  min: 6,
  max: 40,
  step: 1,
  eenheid: "px"
}, {
  k: "block",
  label: "Blokgrootte in cellen",
  min: 1,
  max: 6,
  step: 1,
  eenheid: ""
}, {
  k: "stroke",
  label: "Lijndikte van de schakels",
  min: 2,
  max: 30,
  step: 1,
  eenheid: "%"
}, {
  k: "arm",
  label: "Lijnlengte in de schakel",
  min: 20,
  max: 100,
  step: 1,
  eenheid: "%"
}, {
  k: "fill",
  label: "Merkgrootte in cel",
  min: 40,
  max: 100,
  step: 1,
  eenheid: "%"
}, {
  k: "band",
  label: "Bandbreedte",
  min: 4,
  max: 60,
  step: 1,
  eenheid: "%"
}, {
  k: "speed",
  label: "Vulsnelheid van de cel",
  min: 4,
  max: 60,
  step: 1,
  eenheid: "%"
}, {
  k: "jitter",
  label: "Willekeur",
  min: 0,
  max: 60,
  step: 1,
  eenheid: "%"
}, {
  k: "lead",
  label: "Voorsprong merk op vulling",
  min: 0,
  max: 60,
  step: 1,
  eenheid: "%"
}, {
  k: "base",
  label: "Basispatroon over foto",
  min: 0,
  max: 60,
  step: 1,
  eenheid: "%"
}, {
  k: "shrinkAt",
  label: "Krimppunt na de omslag",
  min: -50,
  max: 40,
  step: 1,
  eenheid: "%"
}, {
  k: "minScale",
  label: "Minimale merkgrootte",
  min: 10,
  max: 100,
  step: 1,
  eenheid: "%"
}, {
  k: "preWhite",
  label: "Witte voorschijn",
  min: 0,
  max: 100,
  step: 1,
  eenheid: "%"
}, {
  k: "postWhite",
  label: "Witte naschijn",
  min: 0,
  max: 100,
  step: 1,
  eenheid: "%"
}, {
  k: "tail",
  label: "Lengte naschijn",
  min: 5,
  max: 150,
  step: 1,
  eenheid: "%"
}, {
  k: "toNavy",
  label: "Kleur naar navy",
  min: 0,
  max: 100,
  step: 1,
  eenheid: "%"
}, {
  k: "flipAt",
  label: "Omslagpunt (bij draaien)",
  min: 0,
  max: 100,
  step: 1,
  eenheid: "%"
}, {
  k: "flipDur",
  label: "Omslagduur",
  min: 2,
  max: 60,
  step: 1,
  eenheid: "%"
}];
function LabSchuif({
  veld,
  waarde,
  zet
}) {
  return /*#__PURE__*/React.createElement("label", {
    style: {
      display: "grid",
      gap: "6px"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: "flex",
      justifyContent: "space-between",
      gap: "12px",
      fontSize: "11px",
      color: "rgba(255,255,255,0.78)"
    }
  }, veld.label, /*#__PURE__*/React.createElement("b", {
    style: {
      color: "#5B8CFF",
      fontWeight: 600
    }
  }, waarde, veld.eenheid)), /*#__PURE__*/React.createElement("input", {
    type: "range",
    min: veld.min,
    max: veld.max,
    step: veld.step,
    value: waarde,
    onChange: e => zet(veld.k, Number(e.target.value)),
    style: {
      width: "100%",
      accentColor: "#2F63FF"
    }
  }));
}
function DissolveLab({
  cfg,
  setCfg,
  sluit,
  sleutel,
  titel,
  links
}) {
  const SL = sleutel || LAB_SLEUTEL;
  const basis = window.HERO_CFG || {};
  const waarden = Object.assign({}, basis, cfg);
  const zet = (k, v) => {
    const nieuw = Object.assign({}, cfg, {
      [k]: v
    });
    setCfg(nieuw);
    try {
      window.localStorage.setItem(SL, JSON.stringify(nieuw));
    } catch (e) {/* geen opslag */}
  };
  const zetTekst = (k, v) => {
    const nieuw = Object.assign({}, cfg, {
      [k]: v
    });
    setCfg(nieuw);
    try {
      window.localStorage.setItem(LAB_SLEUTEL, JSON.stringify(nieuw));
    } catch (e) {/* geen opslag */}
  };
  /* Buiten de hero renderen: die sectie maakt een eigen stapelcontext, dus een
     paneel daarbinnen blijft onder de navigatie hangen. */
  return ReactDOM.createPortal(/*#__PURE__*/React.createElement("aside", {
    style: {
      position: "fixed",
      top: "12px",
      right: links ? "auto" : "12px",
      left: links ? "12px" : "auto",
      bottom: "12px",
      width: "290px",
      zIndex: 200,
      pointerEvents: "auto",
      overflowY: "auto",
      padding: "14px",
      display: "grid",
      gap: "12px",
      alignContent: "start",
      background: "rgba(9,17,34,0.94)",
      border: "1px solid rgba(255,255,255,0.16)",
      backdropFilter: "blur(6px)",
      fontFamily: "var(--font-label)",
      color: "var(--dolle-white)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      gap: "10px"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: "10px",
      letterSpacing: "0.22em",
      textTransform: "uppercase",
      color: "rgba(255,255,255,0.6)"
    }
  }, titel || "Patroon-lab"), /*#__PURE__*/React.createElement("button", {
    type: "button",
    onClick: sluit,
    "aria-label": "Sluit het lab",
    style: {
      appearance: "none",
      cursor: "pointer",
      background: "none",
      border: 0,
      color: "rgba(255,255,255,0.6)",
      fontSize: "14px",
      lineHeight: 1,
      padding: "2px 4px"
    }
  }, "\xD7")), LAB_VELDEN.filter(v => v.k !== "navyFill" || !sleutel).map(v => /*#__PURE__*/React.createElement(LabSchuif, {
    key: v.k,
    veld: v,
    waarde: waarden[v.k],
    zet: zet
  })), /*#__PURE__*/React.createElement("label", {
    style: {
      display: "grid",
      gap: "6px",
      fontSize: "11px",
      color: "rgba(255,255,255,0.78)"
    }
  }, "Opbouwrichting", /*#__PURE__*/React.createElement("select", {
    value: waarden.direction,
    onChange: e => zetTekst("direction", e.target.value),
    style: {
      background: "#101F3C",
      color: "#fff",
      border: "1px solid rgba(255,255,255,0.24)",
      padding: "6px"
    }
  }, /*#__PURE__*/React.createElement("option", {
    value: "up"
  }, "van onder naar boven"), /*#__PURE__*/React.createElement("option", {
    value: "down"
  }, "van boven naar onder"), /*#__PURE__*/React.createElement("option", {
    value: "right"
  }, "van links naar rechts"), /*#__PURE__*/React.createElement("option", {
    value: "diag"
  }, "diagonaal"), /*#__PURE__*/React.createElement("option", {
    value: "radial"
  }, "vanuit het midden"))), /*#__PURE__*/React.createElement("label", {
    style: {
      display: "grid",
      gap: "6px",
      fontSize: "11px",
      color: "rgba(255,255,255,0.78)"
    }
  }, "Merkvariant", /*#__PURE__*/React.createElement("select", {
    value: waarden.variant,
    onChange: e => zetTekst("variant", e.target.value),
    style: {
      background: "#101F3C",
      color: "#fff",
      border: "1px solid rgba(255,255,255,0.24)",
      padding: "6px"
    }
  }, /*#__PURE__*/React.createElement("option", {
    value: "flip"
  }, "schakel die omklapt naar frame"), /*#__PURE__*/React.createElement("option", {
    value: "logo"
  }, "schakel"), /*#__PURE__*/React.createElement("option", {
    value: "frame"
  }, "frame"))), /*#__PURE__*/React.createElement("button", {
    type: "button",
    onClick: () => {
      try {
        window.localStorage.removeItem(SL);
      } catch (e) {}
      setCfg({});
    },
    style: {
      appearance: "none",
      cursor: "pointer",
      padding: "10px",
      background: "transparent",
      color: "var(--dolle-white)",
      border: "1px solid rgba(255,255,255,0.24)",
      fontSize: "10px",
      letterSpacing: "0.18em",
      textTransform: "uppercase"
    }
  }, "Reset instellingen"), /*#__PURE__*/React.createElement("button", {
    type: "button",
    onClick: () => {
      try {
        navigator.clipboard.writeText(JSON.stringify(waarden, null, 2));
      } catch (e) {}
    },
    style: {
      appearance: "none",
      cursor: "pointer",
      padding: "10px",
      background: "var(--dolle-white)",
      color: "#101F3C",
      border: 0,
      fontSize: "10px",
      letterSpacing: "0.18em",
      textTransform: "uppercase"
    }
  }, "Kopieer instellingen")), document.body);
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
      const veld = LAB_VELDEN.filter(v => v.k === k)[0];
      schoon[k] = veld && typeof o[k] === "number" ? Math.min(veld.max, Math.max(veld.min, o[k])) : o[k];
    }
    if (overnemen) {
      try {
        window.localStorage.setItem(SL, JSON.stringify(schoon));
      } catch (e) {/* geen opslag */}
    }
    return schoon;
  } catch (e) {
    return {};
  }
}
Object.assign(window, {
  DissolveLab,
  labAan,
  labStand
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/DissolveLab.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/HeroDissolve.jsx
try { (() => {
/* HERO DISSOLVE — de hero-foto lost al scrollend op in het DOLLE-beeldmerk en
   wordt volledig navy. Canvas-logica en CFG komen ongewijzigd uit het lab; hier
   staat alleen de React-omhulling eromheen (meten, scroll, opruimen).
   De bron is nu een foto; een videoframe kan er later net zo in, want render()
   tekent uit één bronafbeelding. */
/* De vastgelegde stand van de hero-dissolve: dit is de afstemming zoals hij was
   voordat er onderaan de pagina een tweede overgang bij kwam. */
const HERO_CFG = {
  cell: 6,
  stroke: 12,
  fill: 80,
  direction: "up",
  band: 26,
  speed: 41,
  jitter: 15,
  lead: 18,
  base: 0,
  minScale: 60,
  preWhite: 40,
  postWhite: 12,
  tail: 70,
  toNavy: 0,
  variant: "flip",
  flipAt: 71,
  flipDur: 2,
  shrinkAt: 40,
  /* verschuiving van het krimppunt t.o.v. het einde van de omslag */
  navyFill: 99,
  /* hoe ver het volvlak navy van onderaf omhoog loopt, in vh */
  cols: 131,
  /* aantal cellen over de breedte; 0 = afgeleid uit de celgrootte */
  block: 1,
  /* hoeveel cellen breed één schakel is */
  arm: 100 /* lengte van het korte been in de schakel, % van het merk */
};
const HERO_NAVY = [16, 31, 60],
  HERO_WIT = [248, 244, 236];
const MARK_W = 80,
  MARK_H = 66;
const HERO_MARK = {
  logo: [[[0, 0], [0, 40], [32, 40]], [[80, 66], [80, 26], [48, 26]]],
  frame: [[[0, 40], [0, 0], [32, 0]], [[80, 26], [80, 66], [48, 66]]]
};
function merkVorm(arm) {
  const a = Math.max(0.1, arm / 100);
  const l = 32 * a,
    r = 80 - 32 * a;
  return {
    logo: [[[0, 0], [0, 40], [l, 40]], [[80, 66], [80, 26], [r, 26]]],
    frame: [[[0, 40], [0, 0], [l, 0]], [[80, 26], [80, 66], [r, 66]]]
  };
}

/* video: dan loopt de film als <video> achter het doek. Het doek tekent de
   foto zelf niet meer, alleen de schakels en het dichtlopende navy; de
   kleuren van de schakels komen uit src (een still uit dezelfde film). */
function HeroDissolve({
  src,
  video,
  start = 0,
  eind,
  voortgang,
  cfg,
  grond,
  vul,
  flits,
  flitsNa,
  doorzichtig
}) {
  const film = React.useRef(null);
  React.useEffect(() => {
    const el = film.current;
    if (!el || !video) return;
    el.muted = true;
    el.defaultMuted = true;
    const opStart = () => {
      try {
        if (start && el.currentTime < start) el.currentTime = start;
      } catch (e) {}
    };
    /* Voor het eindlogo terug naar het begin, zodat de loop doorloopt. */
    const tijd = () => {
      if (eind && el.currentTime >= eind) {
        el.currentTime = start || 0;
      }
    };
    el.addEventListener("loadedmetadata", opStart);
    el.addEventListener("timeupdate", tijd);
    const p = el.play();
    if (p && p.catch) p.catch(() => {});
    return () => {
      el.removeEventListener("loadedmetadata", opStart);
      el.removeEventListener("timeupdate", tijd);
    };
  }, [video, start, eind]);
  const doek = React.useRef(null);
  const staat = React.useRef({
    doel: 0,
    p: 0
  });
  staat.current.doel = voortgang;
  React.useEffect(() => {
    const cvs = doek.current;
    if (!cvs) return;
    const ctx = cvs.getContext("2d");
    const reduce = window.matchMedia && window.matchMedia("(prefers-reduced-motion:reduce)").matches;
    const CFG = Object.assign({}, HERO_CFG, cfg || {});
    /* Op smalle schermen zijn 14.000 merken per frame te zwaar: grovere cel. */
    if (window.innerWidth < 768) CFG.cell = 20;
    const VUL = vul || HERO_NAVY;
    const FLITS = flits || HERO_WIT;
    /* De naschijn mag een eigen kleur hebben: zo licht een schakel eerst wit op
       over het donkere vlak en kleurt hij daarna mee naar de vulling. */
    const FLITS_NA = flitsNa || FLITS;
    const img = new Image();
    let klaar = false,
      W = 0,
      H = 0,
      cols = 0,
      rows = 0,
      sample = null,
      thresh = null;
    let vuil = true,
      lastP = -1,
      raf = 0,
      weg = false;
    const smooth = t => t <= 0 ? 0 : t >= 1 ? 1 : t * t * (3 - 2 * t);
    function coverRect() {
      const s = Math.max(W / img.width, H / img.height);
      const sw = W / s,
        sh = H / s;
      return [(img.width - sw) / 2, (img.height - sh) / 2, sw, sh];
    }
    function build() {
      if (!klaar || !W) return;
      cols = CFG.cols > 0 ? Math.round(CFG.cols) : Math.ceil(W / CFG.cell);
      const celB = W / cols;
      rows = Math.max(1, Math.ceil(H / (celB * MARK_H / MARK_W)));
      const n = cols * rows;
      const sc = document.createElement("canvas");
      sc.width = cols;
      sc.height = rows;
      const sctx = sc.getContext("2d");
      sctx.imageSmoothingQuality = "high";
      if (src) {
        const r = coverRect();
        sctx.drawImage(img, r[0], r[1], r[2], r[3], 0, 0, cols, rows);
      } else {
        sctx.fillStyle = grond || "#101F3C";
        sctx.fillRect(0, 0, cols, rows);
      }
      try {
        sample = sctx.getImageData(0, 0, cols, rows).data;
      } catch (e) {
        sample = null;
        return;
      }
      thresh = new Float32Array(n);
      const j = CFG.jitter / 100;
      for (let y = 0; y < rows; y++) for (let x = 0; x < cols; x++) {
        const i = y * cols + x,
          nx = x / (cols - 1 || 1),
          ny = y / (rows - 1 || 1);
        let base;
        switch (CFG.direction) {
          case "down":
            base = ny;
            break;
          case "right":
            base = nx;
            break;
          case "diag":
            base = (nx + ny) / 2;
            break;
          case "radial":
            base = Math.min(1, Math.hypot(nx - 0.5, ny - 0.5) / 0.707);
            break;
          default:
            base = 1 - ny;
        }
        thresh[i] = Math.min(0.999, Math.max(0, base * (1 - j) + Math.random() * j));
      }
      vuil = true;
    }
    function resize() {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      W = cvs.clientWidth;
      H = cvs.clientHeight;
      if (!W || !H) return;
      cvs.width = Math.round(W * dpr);
      cvs.height = Math.round(H * dpr);
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      build();
    }
    function render(p) {
      if (!klaar || !W || !sample) return;
      ctx.clearRect(0, 0, W, H);
      if (video) {
        /* niets: de film staat eronder */
      } else if (src) {
        const r = coverRect();
        ctx.drawImage(img, r[0], r[1], r[2], r[3], 0, 0, W, H);
      } else if (!doorzichtig) {
        /* Doorzichtig: geen vlakke grond, alleen de schakels en de dichtlopende
           cellen — zo loopt het raster over de blokken erboven heen zonder rand. */
        ctx.fillStyle = grond || "#101F3C";
        ctx.fillRect(0, 0, W, H);
      }
      const cw = W / cols,
        ch = H / rows;
      const lw = Math.max(0.5, CFG.stroke / 100 * cw * Math.max(1, Math.round(CFG.block || 1)) * (CFG.fill / 100));
      const band = Math.max(0.03, CFG.band / 100),
        span = 1 - band;
      const lead = CFG.lead / 100,
        speed = Math.max(0.05, CFG.speed / 100);
      const baseA = CFG.base / 100,
        mix = CFG.toNavy / 100;
      const pre = CFG.preWhite / 100,
        post = CFG.postWhite / 100;
      const tail = Math.max(0.05, CFG.tail / 100),
        MINS = CFG.minScale / 100;
      const IN = 0.12;
      const fpt = CFG.flipAt / 100,
        fdur = Math.max(0.02, CFG.flipDur / 100);
      /* Het krimpen begint standaard zodra de omslag klaar is; de regelaar
         schuift dat punt naar voren of naar achteren. */
      const naOmslag = CFG.variant === "flip" ? fpt + fdur : IN;
      const shrinkFrom = Math.max(IN, Math.min(0.98, naOmslag + (CFG.shrinkAt || 0) / 100));
      ctx.lineCap = "butt";
      ctx.lineJoin = "miter";
      const MERK = merkVorm(CFG.arm == null ? 100 : CFG.arm);
      const blk = Math.max(1, Math.round(CFG.block || 1));
      for (let y = 0; y < rows; y++) {
        for (let x = 0; x < cols; x++) {
          const i = y * cols + x;
          const u = (p - thresh[i] * span) / band;
          const v = u + lead;
          const px = x * cw,
            py = y * ch;
          if (u > 0) {
            ctx.globalAlpha = smooth(u / speed);
            ctx.fillStyle = "rgb(" + VUL[0] + "," + VUL[1] + "," + VUL[2] + ")";
            ctx.fillRect(px - 0.4, py - 0.4, cw + 0.8, ch + 0.8);
          }
          let scale, alpha;
          if (v <= 0) {
            scale = 1;
            alpha = baseA;
          } else {
            scale = 1 - (1 - MINS) * smooth((v - shrinkFrom) / (1 - shrinkFrom));
            alpha = Math.max(baseA, smooth(v / IN));
            if (v > 1) alpha *= 1 - smooth((v - 1) / tail);
          }
          if (scale <= 0.02 || alpha <= 0.004) continue;
          /* Eén schakel per blok van blk×blk cellen; de vulling blijft per cel. */
          if (blk > 1 && (x % blk !== 0 || y % blk !== 0)) continue;
          const o = i * 4,
            m = mix * (1 - scale),
            fa = u > 0 ? smooth(u / speed) : 0;
          /* Zonder eigen naschijnkleur precies de oorspronkelijke rekenwijze:
             één gewicht richting dezelfde kleur. Alleen met een aparte
             naschijnkleur worden het twee stappen. */
          const eenKleur = !flitsNa;
          const wVoor = eenKleur ? Math.min(1, pre * (1 - fa) + post * fa) : Math.min(1, pre * (1 - fa));
          const wNa = eenKleur ? 0 : Math.min(1, post * fa);
          let cr = sample[o] + (VUL[0] - sample[o]) * m;
          let cg = sample[o + 1] + (VUL[1] - sample[o + 1]) * m;
          let cb = sample[o + 2] + (VUL[2] - sample[o + 2]) * m;
          cr += (FLITS[0] - cr) * wVoor;
          cg += (FLITS[1] - cg) * wVoor;
          cb += (FLITS[2] - cb) * wVoor;
          cr += (FLITS_NA[0] - cr) * wNa;
          cg += (FLITS_NA[1] - cg) * wNa;
          cb += (FLITS_NA[2] - cb) * wNa;
          const mt = CFG.variant === "frame" ? 1 : CFG.variant === "flip" ? smooth((v - fpt) / fdur) : 0;
          const shape = mt <= 0 ? MERK.logo : mt >= 1 ? MERK.frame : MERK.logo.map((pa, pi) => pa.map((pt, ti) => [pt[0] + (MERK.frame[pi][ti][0] - pt[0]) * mt, pt[1] + (MERK.frame[pi][ti][1] - pt[1]) * mt]));
          const uw = cw * blk * (CFG.fill / 100) * scale,
            uh = ch * blk * (CFG.fill / 100) * scale;
          const slw = Math.min(lw, Math.min(uw, uh) * 0.4);
          const ox = px + (cw * blk - uw) / 2,
            oy = py + (ch * blk - uh) / 2;
          const kx = (uw - slw) / MARK_W,
            ky = (uh - slw) / MARK_H;
          const X = t => ox + slw / 2 + t * kx,
            Y = t => oy + slw / 2 + t * ky;
          ctx.globalAlpha = alpha;
          ctx.lineWidth = slw;
          ctx.strokeStyle = "rgb(" + (cr | 0) + "," + (cg | 0) + "," + (cb | 0) + ")";
          for (const path of shape) {
            ctx.beginPath();
            ctx.moveTo(X(path[0][0]), Y(path[0][1]));
            ctx.lineTo(X(path[1][0]), Y(path[1][1]));
            ctx.lineTo(X(path[2][0]), Y(path[2][1]));
            ctx.stroke();
          }
        }
      }
      ctx.globalAlpha = 1;
    }
    function loop() {
      if (weg) return;
      /* De scroll stuurt een doel; de stand loopt er zacht naartoe. Daardoor
         voelt één wielstap als een rustige beweging in plaats van een sprong. */
      const p = reduce ? 0 : staat.current.doel;
      if (vuil || p !== lastP) {
        render(p);
        lastP = p;
        vuil = false;
      }
      raf = requestAnimationFrame(loop);
    }
    if (src) {
      img.crossOrigin = "anonymous";
      img.onload = () => {
        klaar = true;
        resize();
      };
      img.src = src;
    } else {
      klaar = true;
    }
    const opNieuw = () => resize();
    window.addEventListener("resize", opNieuw);
    resize();
    raf = requestAnimationFrame(loop);
    return () => {
      weg = true;
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", opNieuw);
    };
  }, [src, grond, JSON.stringify(cfg || {}), JSON.stringify(vul || null), JSON.stringify(flits || null), JSON.stringify(flitsNa || null), !!doorzichtig, video]);
  const doekEl = /*#__PURE__*/React.createElement("canvas", {
    ref: doek,
    "aria-hidden": "true",
    style: {
      position: "absolute",
      inset: 0,
      width: "100%",
      height: "100%",
      display: "block",
      background: doorzichtig || video ? "transparent" : grond || "var(--dolle-navy)"
    }
  });
  if (!video) return doekEl;
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("video", {
    ref: film,
    src: video + (start ? "#t=" + start : ""),
    poster: src,
    autoPlay: true,
    muted: true,
    loop: true,
    playsInline: true,
    preload: "auto",
    fetchpriority: "high",
    "aria-hidden": "true",
    style: {
      position: "absolute",
      inset: 0,
      width: "100%",
      height: "100%",
      objectFit: "cover",
      display: "block",
      background: "var(--dolle-navy)"
    }
  }), doekEl);
}
Object.assign(window, {
  HeroDissolve,
  HERO_CFG
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/HeroDissolve.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/Home.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const DS = window.DesignSystem_8f95a2;
const {
  Logo,
  Kicker,
  Frame,
  WildlyStatement,
  StatFrame,
  Button,
  IconButton,
  Card,
  Section,
  ServiceList,
  Icon
} = DS;
const WildlyRotator = DS.WildlyRotator || (({
  size,
  style
}) => /*#__PURE__*/React.createElement(WildlyStatement, {
  statement: "WILDLY VISIBLE",
  size: size,
  style: style
}));
/* Merkwoord en spreuk staan samen op één merk-pagina (HomeWoord). */
/* Faalt zacht als de bundel nog een build achterloopt: de layout blijft staan,
   alleen het hoekdetail valt weg. */
const CornerRule = DS.CornerRule || (({
  children
}) => children || null);

/* Hero-inhoud als losse laag: in de gordijn-beweging schuift deze hele laag
   omhoog (kop, lead, knoppen, sterren en clients samen), het beeld blijft. */
/* MERKPAGINA ONDER DE HERO — de vier werkwoorden in de tweede regel zijn de
   aanwijzers: erover gaan zet het bijbehorende doelwoord achter WILDLY. Zonder
   hover loopt de reeks zelf door, zodat zichtbaar is dat er iets te bewegen
   valt. Hetzelfde principe als het dienstenblok verderop de pagina. */
/* Het hele zinsdeel is de aanwijzer; alleen de kernwoorden kleuren kobalt. */
const MERK_DOELEN = [{
  zin: "producing strategic media",
  kern: ["producing", "media"],
  w: "VISIBLE"
}, {
  zin: "launching brands",
  kern: ["launching", "brands"],
  w: "FORWARD"
}, {
  zin: "building the systems that multiply it",
  kern: ["building", "systems"],
  w: "AHEAD"
}, {
  zin: "drive growth",
  kern: ["drive", "growth"],
  w: "DRIVEN"
}];

/* Het doelwoord staat achter WILDLY: één spoor met de vier
   woorden, de stand schuift het juiste woord in het masker. Het masker neemt de
   breedte van dat woord aan, zodat de rest van de zin meeschuift in plaats van
   te springen. Werkt in beide richtingen, ook van 01 naar 04. */
function MerkWildly({
  i,
  reduce,
  style
}) {
  const woorden = React.useRef([]);
  const [breed, setBreed] = React.useState(0);
  React.useEffect(() => {
    const meet = () => {
      const el = woorden.current[i];
      if (el) setBreed(Math.ceil(el.getBoundingClientRect().width));
    };
    meet();
    window.addEventListener("resize", meet);
    if (document.fonts && document.fonts.ready) document.fonts.ready.then(meet);
    return () => window.removeEventListener("resize", meet);
  }, [i]);
  return /*#__PURE__*/React.createElement("span", {
    style: {
      ...style,
      display: "inline-flex",
      alignItems: "baseline",
      gap: "0.3em",
      textTransform: "uppercase",
      letterSpacing: "var(--track-wildly)",
      whiteSpace: "nowrap"
    }
  }, /*#__PURE__*/React.createElement("span", null, "Wildly"), /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true",
    style: {
      display: "inline-block",
      height: "1.08em",
      overflow: "hidden",
      verticalAlign: "bottom",
      width: breed ? breed + "px" : "auto",
      transition: reduce ? "none" : "width 560ms var(--ease-dolle)"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: "block",
      transform: "translateY(" + -i * 1.08 + "em)",
      transition: reduce ? "none" : "transform 560ms var(--ease-dolle)"
    }
  }, MERK_DOELEN.map((d, k) => /*#__PURE__*/React.createElement("span", {
    key: d.w,
    ref: el => {
      woorden.current[k] = el;
    },
    style: {
      display: "block",
      width: "fit-content",
      height: "1.08em",
      color: "var(--text-accent)"
    }
  }, d.w)))));
}

/* Alle vier de doelwoorden staan onder elkaar in beeld. Het woord dat aan de
   beurt is staat vol en kobalt; de andere drie staan vager, zodat te zien is
   dat de reeks doorloopt. */
function MerkWildlyStapel({
  i,
  reduce,
  trap
}) {
  /* trap: de regels komen één voor één binnen (coming soon-pagina). */
  const [n, setN] = React.useState(reduce ? MERK_DOELEN.length : 0);
  React.useEffect(() => {
    if (reduce) return;
    let t = [];
    const start = wacht => {
      t = MERK_DOELEN.map((d, k) => setTimeout(() => setN(k + 1), wacht + k * 520));
    };
    if (trap) {
      start(1100);
      return () => t.forEach(clearTimeout);
    }
    /* Op de homepagina: de vier regels komen één voor één binnen bij de eerste
       keer naar beneden scrollen. */
    let los = false;
    const op = e => {
      if (los) return;
      if (e && e.type === "wheel" && e.deltaY <= 0) return;
      los = true;
      weg();
      start(120);
    };
    const weg = () => {
      window.removeEventListener("scroll", op, true);
      window.removeEventListener("wheel", op);
      window.removeEventListener("touchmove", op);
    };
    window.addEventListener("scroll", op, {
      passive: true,
      capture: true
    });
    window.addEventListener("wheel", op, {
      passive: true
    });
    window.addEventListener("touchmove", op, {
      passive: true
    });
    return () => {
      weg();
      t.forEach(clearTimeout);
    };
  }, [trap, reduce]);
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gap: "0.1em",
      fontFamily: "var(--font-core)",
      fontWeight: "var(--weight-heading)",
      fontSize: "clamp(20px,2.2vw,32px)",
      lineHeight: "var(--lh-wildly)",
      letterSpacing: "var(--track-wildly)",
      textTransform: "uppercase",
      justifyItems: "start"
    }
  }, MERK_DOELEN.map((d, k) => {
    const aan = k === i;
    const af = [1, 0.5, 0.34, 0.24][Math.min(3, (k - i + MERK_DOELEN.length) % MERK_DOELEN.length)];
    return /*#__PURE__*/React.createElement("span", {
      key: d.w,
      "aria-hidden": aan ? undefined : "true",
      style: {
        display: "flex",
        gap: "0.3em",
        whiteSpace: "nowrap",
        opacity: k < n ? af : 0,
        transform: k < n ? "translateY(0)" : "translateY(14px)",
        transition: reduce ? "none" : "opacity 560ms var(--ease-dolle), transform 900ms var(--ease-dolle)"
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        color: "var(--dolle-offwhite)"
      }
    }, "Wildly"), /*#__PURE__*/React.createElement("span", {
      style: {
        color: aan ? "var(--text-accent)" : "var(--dolle-offwhite)",
        transition: reduce ? "none" : "color 560ms var(--ease-dolle)"
      }
    }, d.w));
  }));
}

/* Het uitgelichte werkwoord loopt met de reeks mee: de kernwoorden kleuren
   kobalt zodra hun doelwoord achter WILDLY staat. Geen hover, geen klik — de
   muis heeft hier geen invloed op. */
function MerkDoel({
  d,
  aan
}) {
  const woorden = d.zin.split(" ");
  return /*#__PURE__*/React.createElement("span", null, woorden.map((w, k) => /*#__PURE__*/React.createElement("span", {
    key: k,
    style: {
      color: aan && d.kern.indexOf(w) >= 0 ? "var(--text-accent)" : "inherit",
      transition: "color var(--dur-ui) var(--ease-dolle)"
    }
  }, w + (k < woorden.length - 1 ? " " : ""))));
}
function HeroContent({
  go
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: "100%",
      height: "100%",
      display: "grid",
      alignContent: "end",
      padding: "var(--space-10) var(--page-margin) clamp(84px,15vh,170px)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: "100%",
      maxWidth: "var(--content-max)",
      margin: "0 auto",
      display: "grid",
      gap: "var(--space-6)",
      justifyItems: "start"
    }
  }, /*#__PURE__*/React.createElement("h1", {
    style: {
      margin: 0,
      fontSize: "clamp(34px,4.4vw,64px)",
      lineHeight: 1.06,
      letterSpacing: "var(--track-heading)",
      maxWidth: "17ch"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: "block"
    }
  }, "Making brands"), /*#__PURE__*/React.createElement("span", {
    style: {
      display: "block",
      textTransform: "uppercase",
      letterSpacing: "var(--track-wildly)"
    }
  }, "Wildly ", /*#__PURE__*/React.createElement("span", {
    style: {
      color: "var(--text-accent)"
    }
  }, "Visible"), ".")), /*#__PURE__*/React.createElement("p", {
    className: "dolle-lead",
    style: {
      margin: 0,
      maxWidth: "42ch"
    }
  }, "We produce media, launch brands, build systems and drive growth."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: "var(--space-6)",
      flexWrap: "nowrap",
      alignItems: "center",
      marginTop: "var(--space-2)"
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    onClick: () => go("contact")
  }, "Get in touch"), /*#__PURE__*/React.createElement(Button, {
    variant: "link",
    onClick: () => go("cases")
  }, "Watch cases"))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      right: "var(--page-margin)",
      bottom: "var(--space-4)",
      display: "flex",
      alignItems: "center",
      gap: "0.5em",
      fontSize: "13px",
      lineHeight: 1,
      color: "var(--white-72, rgba(255,255,255,0.72))"
    }
  }, /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true",
    style: {
      display: "flex",
      gap: "0.12em",
      color: "var(--dolle-white)",
      fontSize: "11px"
    }
  }, /*#__PURE__*/React.createElement("span", null, "\u2605"), /*#__PURE__*/React.createElement("span", null, "\u2605"), /*#__PURE__*/React.createElement("span", null, "\u2605"), /*#__PURE__*/React.createElement("span", null, "\u2605"), /*#__PURE__*/React.createElement("span", null, "\u2605")), /*#__PURE__*/React.createElement("span", null, "4,9 | 100+ clients")));
}

/* Het woord uitgelegd, als lemma: woordmerk, woordsoort, uitspraak, definitie,
   dan WILDLY met de wisselende doelwoorden. Eén kolom, links uitgelijnd. */
function WoordContent({
  trap
}) {
  const [actief, setActief] = React.useState(0);
  const reduce = typeof window !== "undefined" && window.matchMedia ? window.matchMedia("(prefers-reduced-motion: reduce)").matches : false;
  React.useEffect(() => {
    if (reduce) return;
    const t = setInterval(() => setActief(i => (i + 1) % MERK_DOELEN.length), 3400);
    return () => clearInterval(t);
  }, [reduce]);
  const doel = i => /*#__PURE__*/React.createElement(MerkDoel, {
    d: MERK_DOELEN[i],
    aan: actief === i
  });
  return /*#__PURE__*/React.createElement("div", {
    style: {
      width: "100%",
      maxWidth: "var(--content-max)",
      margin: "0 auto",
      display: "grid",
      gap: "var(--space-8)",
      justifyItems: "start"
    }
  }, /*#__PURE__*/React.createElement(Reveal, {
    dur: 1000,
    y: 26,
    style: {
      display: "grid",
      gap: "var(--space-3)",
      justifyItems: "start"
    }
  }, /*#__PURE__*/React.createElement(Logo, {
    variant: "wordmark",
    tone: "white",
    height: 44
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gap: "var(--space-2)"
    }
  }, /*#__PURE__*/React.createElement(Kicker, {
    size: "sm",
    style: {
      whiteSpace: "nowrap"
    }
  }, "[ adjective ]"), /*#__PURE__*/React.createElement(Kicker, {
    size: "sm",
    style: {
      color: "var(--text-muted)",
      whiteSpace: "nowrap"
    }
  }, "dol\xB7le \xA0|\xA0 \\ \u02C8d\u0254.l\u0259 \\"))), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      maxWidth: "72ch",
      fontSize: "var(--size-body-lg)",
      lineHeight: "var(--lh-body)",
      color: "var(--text-body)"
    }
  }, /*#__PURE__*/React.createElement(Words, {
    as: "span",
    text: "We make brands wildly visible and keep brands at the forefront of social media.",
    italic: "wildly",
    delay: 220,
    style: {
      display: "inline"
    }
  }), /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement(Reveal, {
    as: "span",
    delay: 620,
    y: 0,
    style: {
      display: "inline-block"
    }
  }, "We do that by ", doel(0), ", ", doel(1), ", ", doel(2), " and ", doel(3), ".")), /*#__PURE__*/React.createElement(Reveal, {
    delay: 760,
    dur: 1000,
    y: 26
  }, /*#__PURE__*/React.createElement(MerkWildlyStapel, {
    i: actief,
    reduce: reduce,
    trap: trap
  })), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      width: 1,
      height: 1,
      overflow: "hidden",
      clipPath: "inset(50%)"
    }
  }, MERK_DOELEN.map(d => "Wildly " + d.w.toLowerCase() + ". ").join("")));
}

/* GORDIJN — de hero staat vast, de volgende pagina schuift eroverheen.
   Zoals in de referentie: geen extra scrolweg, geen gepinde tweede pagina en geen
   fade. De hero staat sticky onder de navigatie; de merkpagina er direct achter
   heeft een zachte donkere bovenrand en schuift 1:1 met de scroll over het beeld.
   Daardoor verschuift er per scrolstap een stuk, komt de tekst meteen mee omhoog
   en scrolt de bezoeker zonder onderbreking door naar de cases eronder.
   Alles is CSS — er wordt geen enkele frame in JS berekend, dus niets kan lopen
   achterlopen op de scroll. */

function HomeHero({
  go
}) {
  /* De hero is een scrolweg van 220vh met een gepind beeld van één scherm hoog.
     De voortgang daarin stuurt het dissolve-canvas: de foto lost van onder naar
     boven op in het merk en wordt volledig navy, zodat de sectie eronder er
     naadloos op aansluit. De tekst schuift mee omhoog en verlaat het beeld. */
  const [nav, setNav] = React.useState(88);
  const [p, setP] = React.useState(0);
  const weg = React.useRef(null),
    inhoud = React.useRef(null);
  React.useEffect(() => {
    const meet = () => {
      const h = document.querySelector("header");
      if (h && h.offsetHeight) setNav(h.offsetHeight);
    };
    meet();
    window.addEventListener("resize", meet);
    return () => window.removeEventListener("resize", meet);
  }, []);
  React.useEffect(() => {
    if (typeof window === "undefined") return;
    if (window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    let raf = 0;
    /* Scrub: de stand is de scrollpositie, niets meer. Eén waarde stuurt het
       raster én de tekst, dus beide staan altijd exact op de scroll — geen
       naijlen, geen eigen tempo, omhoog even snel als omlaag. */
    const tick = () => {
      const el = weg.current;
      if (!el) {
        raf = 0;
        return;
      }
      const totaal = Math.max(1, el.offsetHeight - (window.innerHeight || 800));
      const s = Math.min(Math.max(0, nav - el.getBoundingClientRect().top), totaal);
      /* De scrolweg is zo lang gekozen dat het front van het raster precies één
         pixel per gescrolde pixel aflegt. Daardoor lopen het raster, de
         hero-tekst en de merkpagina alle drie 1:1 met de scroll mee en blijft
         elke onderlinge afstand gelijk. */
      const v = Math.min(1, s / totaal);
      raf = 0;
      setP(v);
      if (inhoud.current) {
        /* De tekst reist met het front van de dissolve mee: dat front legt precies
           één stagehoogte af terwijl v van 0 naar 1 loopt, dus de tekst doet
           hetzelfde en houdt zo dezelfde afstand tot de haakjes. */
        /* De tekst schuift 1:1 met de scroll, net als de merkpagina eronder.
           Daardoor ligt de afstand tussen beide tekstblokken vast, hoe hard je
           ook scrolt. */
        inhoud.current.style.transform = "translate3d(0," + (-s).toFixed(1) + "px,0)";
        /* Tekst, knoppen en de waardering doven samen uit, ruim voordat het
           raster dicht is — ze reizen als één laag mee omhoog. */
        const f = Math.min(1, Math.max(0, (v - 0.4) / 0.22));
        inhoud.current.style.opacity = String(1 - f * f * (3 - 2 * f));
      }
    };
    const on = () => {
      if (!raf) raf = requestAnimationFrame(tick);
    };
    /* De lus draait door zolang de stand nog niet op zijn doel staat. */
    window.addEventListener("scroll", on, {
      passive: true,
      capture: true
    });
    window.addEventListener("resize", on);
    tick();
    return () => {
      window.removeEventListener("scroll", on, true);
      window.removeEventListener("resize", on);
      if (raf) cancelAnimationFrame(raf);
    };
  }, [nav]);
  const Dissolve = window.HeroDissolve;
  const Lab = window.DissolveLab;
  const [cfg, setCfg] = React.useState({});
  const [lab, setLab] = React.useState(false);
  React.useEffect(() => {
    setCfg(window.labStand ? window.labStand() : {});
  }, []);
  /* Hoe ver het volvlak navy van onderaf omhoog loopt over het raster. */
  React.useEffect(() => {
    document.documentElement.style.setProperty("--dolle-navyvul", (cfg.navyFill || 0) + "vh");
  }, [cfg.navyFill]);
  return /*#__PURE__*/React.createElement("section", {
    ref: weg,
    className: "dolle-dark",
    style: {
      position: "relative",
      zIndex: 0,
      height: "calc(243vh - 132px)",
      background: "var(--dolle-navy)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "sticky",
      top: nav + "px",
      height: "calc(100vh - " + nav + "px)",
      minHeight: "420px",
      overflow: "hidden",
      background: "var(--dolle-navy)"
    }
  }, Dissolve ? /*#__PURE__*/React.createElement(Dissolve, {
    src: "../../assets/cases/bergvliet/bergvliet-corporate-hero-poster.jpg",
    video: "../../assets/video/bergvliet-corporate.mp4",
    start: 0.5,
    eind: 108,
    voortgang: p,
    cfg: cfg
  }) : null, /*#__PURE__*/React.createElement("div", {
    ref: inhoud,
    style: {
      position: "absolute",
      inset: 0,
      willChange: "transform",
      zIndex: 2
    }
  }, /*#__PURE__*/React.createElement(HeroContent, {
    go: go
  }))), lab && Lab ? /*#__PURE__*/React.createElement(Lab, {
    cfg: cfg,
    setCfg: setCfg,
    sluit: () => setLab(false)
  }) : !(window.labAan && window.labAan()) ? null : /*#__PURE__*/React.createElement("button", {
    type: "button",
    onClick: () => setLab(true),
    style: {
      position: "fixed",
      right: "12px",
      top: "50%",
      zIndex: 200,
      appearance: "none",
      cursor: "pointer",
      padding: "10px 14px",
      background: "rgba(9,17,34,0.92)",
      color: "var(--dolle-white)",
      border: "1px solid rgba(255,255,255,0.24)",
      fontFamily: "var(--font-label)",
      fontSize: "10px",
      letterSpacing: "0.18em",
      textTransform: "uppercase"
    }
  }, "Patroon-lab"));
}

/* De merkpagina schuift met de band mee in beeld, net als de tekst onder de hero
   in de referentie: de bovenrand loopt in een kort verloop dicht en de tekst staat
   daar direct onder. Zo rijdt DOLLE met de band mee omhoog — het scherm staat
   nooit leeg blauw — terwijl het beeld boven de bandrand nog even doorloopt. */
function HomeWoord() {
  return /*#__PURE__*/React.createElement("section", {
    className: "dolle-dark",
    style: {
      position: "relative",
      zIndex: 1,
      background: "linear-gradient(to bottom, rgba(0,0,0,0) 0, rgba(0,0,0,0) calc(114vh - 132px - var(--dolle-navyvul, 0vh)), var(--dolle-navy) calc(114vh - 132px - var(--dolle-navyvul, 0vh)))",
      marginTop: "calc(-114vh + 132px)",
      padding: "clamp(24px,3vh,48px) var(--page-margin) clamp(16px,2vh,32px) clamp(56px,6vw,96px)"
    }
  }, /*#__PURE__*/React.createElement(WoordContent, null));
}

/* Our cases: witte pagina, drie volvlak cases naast elkaar met de naam en een
   leesactie in beeld. Pijlen links en rechts, "see all cases" onderaan. */
/* Placeholder-cases: tijdelijk beeld, casenamen nog leeg. Vul met echt werk —
   het systeem claimt alleen gemeten resultaat van eigen producties. */
const CAROUSEL_CASES = [{
  naam: "Eezy",
  beeld: "../../assets/cases/web/case-01.jpg"
}, {
  naam: "Veteranen Search Team",
  beeld: "../../assets/cases/web/case-02.jpg"
}, {
  naam: "Montel",
  beeld: "../../assets/cases/web/case-03.jpg"
}, {
  naam: "Blue Rivet",
  beeld: "../../assets/cases/web/case-04.jpg"
}, {
  naam: "Woonexpress",
  beeld: "../../assets/cases/web/case-05.jpg"
}, {
  naam: "Dé Dakwerkers",
  beeld: "../../assets/cases/web/case-06.jpg"
}];

/* Our cases: witte pagina, een spoor van cases dat aan beide zijden doorloopt —
   de randtegels blijven half in beeld, zodat zichtbaar is dat er meer is. Onderin
   een navy balk met "see all cases". */
const TILE_W = 30; /* breedte van één tegel, in procent van de sectie */
const PEEK = 12; /* hoeveel de eerste tegel links buiten beeld valt */

function HomeCasesCarousel({
  go
}) {
  const len = CAROUSEL_CASES.length;
  /* Drie kopieën van de reeks; het spoor staat in de middelste. Voorbij een rand
     schuift het gewoon door, en na de beweging springt de positie stil terug naar
     de middelste kopie — de rondgang is daardoor eindeloos en onzichtbaar. */
  const tegels = [...CAROUSEL_CASES, ...CAROUSEL_CASES, ...CAROUSEL_CASES];
  const totaal = tegels.length;
  const DUUR = 900;
  const [pos, setPos] = React.useState(0);
  const [bewegend, setBewegend] = React.useState(true);
  /* De bediening is op slot tot de beweging klaar is, geteld in tijd — nooit
     afhankelijk van een event dat kan uitblijven. Een klik binnen dat slot gaat
     niet verloren maar volgt er direct op. Halverwege het slot valt de positie
     stil terug binnen de reeks: dat is een hele cyclus tegels en dus onzichtbaar,
     waardoor de rondgang eindeloos doorloopt. */
  const slot = React.useRef(0);
  const wachtend = React.useRef(0);
  const stapRef = React.useRef(null);
  const timers = React.useRef([]);
  React.useEffect(() => () => timers.current.forEach(clearTimeout), []);
  const stap = d => {
    if (performance.now() < slot.current) {
      wachtend.current = d;
      return;
    }
    slot.current = performance.now() + DUUR + 80;
    setPos(p => p + d);
    timers.current.push(setTimeout(() => {
      setBewegend(false);
      setPos(p => (p % len + len) % len);
      requestAnimationFrame(() => requestAnimationFrame(() => setBewegend(true)));
    }, DUUR + 20));
    timers.current.push(setTimeout(() => {
      if (!wachtend.current) return;
      const n = wachtend.current;
      wachtend.current = 0;
      stapRef.current(n);
    }, DUUR + 90));
  };
  stapRef.current = stap;
  /* Een procentuele translate rekent tegen de eigen breedte van het spoor, niet
     tegen de sectie — dus eerst omrekenen. */
  const offset = ((pos + len) * TILE_W + PEEK) / (totaal * TILE_W) * 100;
  return /*#__PURE__*/React.createElement("section", {
    style: {
      background: "var(--dolle-white)",
      paddingTop: "var(--space-8)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      padding: "0 var(--page-margin)",
      maxWidth: "var(--content-max)",
      margin: "0 auto var(--space-7)",
      display: "grid",
      gap: "var(--space-3)",
      justifyItems: "start"
    }
  }, /*#__PURE__*/React.createElement(Reveal, null, /*#__PURE__*/React.createElement(Kicker, null, "Cases")), /*#__PURE__*/React.createElement(Words, {
    as: "h2",
    text: "Our cases",
    delay: 80,
    style: {
      whiteSpace: "nowrap",
      fontSize: "var(--size-h1)",
      margin: 0
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: "2px",
      width: totaal * TILE_W + "%",
      transform: "translateX(-" + offset.toFixed(4) + "%)",
      transition: bewegend ? "transform " + DUUR + "ms var(--ease-dolle)" : "none",
      willChange: "transform"
    }
  }, tegels.map((c, i) => /*#__PURE__*/React.createElement(CaseTile, {
    key: i,
    item: c,
    go: go,
    totaal: totaal
  }))), /*#__PURE__*/React.createElement(IconButton, {
    icon: "arrow-left",
    label: "Previous case",
    variant: "secondary",
    size: 44,
    onClick: () => stap(-1),
    style: {
      position: "absolute",
      left: "var(--space-5)",
      top: "50%",
      transform: "translateY(-50%)",
      background: "var(--dolle-white)",
      borderColor: "var(--border-hairline)"
    }
  }), /*#__PURE__*/React.createElement(IconButton, {
    icon: "arrow-right",
    label: "Next case",
    variant: "secondary",
    size: 44,
    onClick: () => stap(1),
    style: {
      position: "absolute",
      right: "var(--space-5)",
      top: "50%",
      transform: "translateY(-50%)",
      background: "var(--dolle-white)",
      borderColor: "var(--border-hairline)"
    }
  })), /*#__PURE__*/React.createElement(SeeAllBar, {
    go: go
  }));
}
function SeeAllBar({
  go
}) {
  const [hover, setHover] = React.useState(false);
  return /*#__PURE__*/React.createElement("button", {
    type: "button",
    onClick: () => go("cases"),
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      width: "100%",
      border: 0,
      background: hover ? "var(--dolle-white)" : "var(--dolle-offwhite)",
      color: "var(--dolle-navy)",
      borderTop: "1px solid var(--border-hairline)",
      padding: "var(--space-6) var(--page-margin)",
      cursor: "pointer",
      fontFamily: "var(--font-label)",
      fontSize: "11px",
      fontWeight: hover ? 700 : 500,
      letterSpacing: "var(--track-label-wide)",
      textTransform: "uppercase",
      transition: "background var(--dur-ui) var(--ease-dolle)"
    }
  }, "See all cases");
}
function CaseTile({
  item,
  go,
  totaal
}) {
  return /*#__PURE__*/React.createElement("div", {
    className: "dolle-dark",
    style: {
      flex: "0 0 calc(" + 100 / totaal + "% - 2px)",
      position: "relative",
      aspectRatio: "3 / 4",
      overflow: "hidden",
      background: "#0b1730",
      cursor: "pointer"
    },
    onClick: () => go("case")
  }, /*#__PURE__*/React.createElement("img", {
    src: item.beeld,
    alt: "",
    style: {
      position: "absolute",
      inset: 0,
      width: "100%",
      height: "100%",
      objectFit: "cover"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      inset: 0,
      background: "var(--gradient-protect)"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      right: 0,
      bottom: "var(--space-8)",
      display: "grid",
      gap: "var(--space-4)",
      justifyItems: "center",
      textAlign: "center",
      padding: "0 var(--space-5)"
    }
  }, /*#__PURE__*/React.createElement("h3", {
    style: {
      fontSize: "clamp(18px,1.7vw,26px)",
      lineHeight: 1.16
    }
  }, item.naam), /*#__PURE__*/React.createElement(Button, {
    variant: "link",
    onClick: e => {
      e.stopPropagation();
      go("case");
    }
  }, "Watch case")));
}

/* Wit vlak met kobalt letters, kobalt bij hover — zelfde knop als op de
   cases-pagina. */
function WitteDoelKnop({
  children,
  onClick
}) {
  const [over, setOver] = React.useState(false);
  return /*#__PURE__*/React.createElement(Button, {
    onClick: onClick,
    onMouseEnter: () => setOver(true),
    onMouseLeave: () => setOver(false),
    onFocus: () => setOver(true),
    onBlur: () => setOver(false),
    style: {
      background: over ? "var(--text-accent)" : "var(--dolle-white)",
      color: over ? "var(--dolle-white)" : "var(--text-accent)",
      borderColor: "var(--text-accent)",
      transition: "background 240ms var(--ease-dolle), color 240ms var(--ease-dolle), border-color 240ms var(--ease-dolle)"
    }
  }, children);
}
const SERVICES = [{
  n: "01",
  t: "Media production",
  w: "VISIBLE",
  b: "We produce strategic media."
}, {
  n: "02",
  t: "Launches",
  w: "FORWARD",
  b: "We help launching brands and products."
}, {
  n: "03",
  t: "AI systems",
  w: "AHEAD",
  b: "We build systems that scale visibility."
}, {
  n: "04",
  t: "Growth",
  w: "DRIVEN",
  b: "We measure and drive growth. From reach to revenue."
}];

/* Eén sectie voor de vier diensten: het doelwoord in de kop hoort bij de dienst
   die actief is. Zonder hover loopt de sectie zelf door, zodat zichtbaar is dat
   er iets te bewegen valt; hover neemt het over en onthult de stap — de lijn
   trekt zich vol, het cijfer en de tekst komen op. Het spoor telt twee kopieën
   van de reeks en beweegt altijd vooruit; voorbij de eerste kopie springt het
   stil terug, dus de rondgang is naadloos. */
/* Eén sectie voor de vier diensten. Het doelwoord in de kop hoort bij de dienst
   die actief is; zonder hover loopt de reeks zelf door, hover neemt het over en
   onthult de stap. De wissel is een wissel van twee lagen — het aankomende woord
   zakt van boven binnen terwijl het vertrekkende onder uit schuift. Daardoor
   reist er altijd precies één rij, ook als je van 01 direct naar 04 hovert. */
function HomeServices({
  go
}) {
  const len = SERVICES.length;
  const SWAP = 560;
  const [actief, setActief] = React.useState(0);
  const [vorig, setVorig] = React.useState(null);
  const [hover, setHover] = React.useState(-1);
  const actiefRef = React.useRef(0);
  actiefRef.current = actief;
  const klok = React.useRef([]);
  const reduce = typeof window !== "undefined" && window.matchMedia ? window.matchMedia("(prefers-reduced-motion: reduce)").matches : false;
  React.useEffect(() => () => klok.current.forEach(clearTimeout), []);
  const naar = React.useCallback(doel => {
    if (doel === actiefRef.current) return;
    setVorig(actiefRef.current);
    setActief(doel);
    klok.current.push(setTimeout(() => setVorig(null), SWAP + 40));
  }, []);

  /* Scrollvulling: de vier regels vullen zich één voor één van links naar
     rechts terwijl de stapel door het venster schuift. Pas als alles vol is
     gaan ze om de beurt lopen. */
  const stapel = React.useRef(null);
  const [vul, setVul] = React.useState(reduce ? 1 : 0);
  React.useEffect(() => {
    if (reduce) return;
    let raf = 0;
    const meet = () => {
      raf = 0;
      const el = stapel.current;
      if (!el) return;
      const r = el.getBoundingClientRect(),
        vh = window.innerHeight;
      const start = vh * 0.98,
        eind = vh * 0.56 - r.height / 2;
      const v = Math.min(1, Math.max(0, (start - r.top) / (start - eind)));
      setVul(Math.round(v * 1000) / 1000);
    };
    const op = () => {
      if (!raf) raf = requestAnimationFrame(meet);
    };
    meet();
    window.addEventListener("scroll", op, {
      passive: true
    });
    window.addEventListener("resize", op);
    return () => {
      window.removeEventListener("scroll", op);
      window.removeEventListener("resize", op);
      if (raf) cancelAnimationFrame(raf);
    };
  }, [reduce]);
  const vol = vul >= 1 || hover >= 0;
  const volRef = React.useRef(false);
  React.useEffect(() => {
    if (vol && !volRef.current && hover < 0) {
      setVorig(null);
      setActief(0);
      actiefRef.current = 0;
    }
    volRef.current = vol;
  }, [vol, hover]);
  React.useEffect(() => {
    if (reduce || hover >= 0 || !vol) return;
    const t = setInterval(() => naar((actiefRef.current + 1) % len), 2800);
    return () => clearInterval(t);
  }, [hover, len, naar, reduce, vol]);
  React.useEffect(() => {
    if (hover >= 0) naar(hover);
  }, [hover, naar]);
  const rij = "calc(var(--lh-wildly) * 1em)";
  const woord = (i, plek) => /*#__PURE__*/React.createElement("span", {
    key: SERVICES[i].w + plek,
    style: {
      position: plek === "uit" ? "absolute" : "static",
      inset: plek === "uit" ? 0 : undefined,
      display: "block",
      height: rij,
      color: "var(--text-accent)",
      transform: plek === "uit" ? "translateY(100%)" : plek === "in" ? "translateY(0)" : "none",
      transition: reduce ? "none" : "transform " + SWAP + "ms var(--ease-dolle)"
    }
  }, SERVICES[i].w);
  const intro = /*#__PURE__*/React.createElement("div", {
    style: {
      width: "100%",
      maxWidth: "var(--content-max)",
      margin: "0 auto",
      display: "grid",
      gap: "var(--space-7)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: "100%",
      display: "grid",
      gap: "var(--space-4)",
      justifyItems: "start"
    }
  }, /*#__PURE__*/React.createElement(Reveal, null, /*#__PURE__*/React.createElement(Kicker, null, "Services")), /*#__PURE__*/React.createElement(Words, {
    as: "h2",
    text: "Services with a clear goal.",
    delay: 80,
    style: {
      margin: 0
    }
  }), /*#__PURE__*/React.createElement("div", {
    ref: stapel,
    style: {
      display: "grid",
      justifyItems: "start",
      fontFamily: "var(--font-core)",
      fontWeight: "var(--weight-heading)",
      fontSize: "clamp(22px,2.6vw,38px)",
      lineHeight: "var(--lh-wildly)",
      letterSpacing: "var(--track-wildly)",
      textTransform: "uppercase",
      whiteSpace: "nowrap"
    }
  }, SERVICES.map((sv, i) => {
    const af = (i - actief + len) % len;
    const aan = vol && af === 0;
    const f = vol ? 1 : Math.min(1, Math.max(0, vul * len - i));
    const regel = kleur => /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("span", {
      style: {
        color: "var(--text-heading)"
      }
    }, "Wildly"), /*#__PURE__*/React.createElement("span", {
      style: {
        color: kleur,
        transition: reduce ? "none" : "color " + SWAP + "ms var(--ease-dolle)"
      }
    }, sv.w));
    return /*#__PURE__*/React.createElement("span", {
      key: sv.w,
      style: {
        position: "relative",
        display: "flex",
        gap: "0.34em",
        opacity: !vol ? 1 : aan ? 1 : [1, 0.42, 0.3, 0.2][af],
        transition: reduce ? "none" : "opacity " + SWAP + "ms var(--ease-dolle)"
      }
    }, /*#__PURE__*/React.createElement("span", {
      "aria-hidden": "true",
      style: {
        display: "flex",
        gap: "0.34em",
        opacity: 0.14
      }
    }, regel("var(--text-heading)")), /*#__PURE__*/React.createElement("span", {
      style: {
        position: "absolute",
        inset: 0,
        display: "flex",
        gap: "0.34em",
        clipPath: "inset(0 " + (1 - f) * 100 + "% 0 0)"
      }
    }, regel(aan || !vol ? "var(--text-accent)" : "var(--text-heading)")));
  })), /*#__PURE__*/React.createElement(Reveal, {
    delay: 320,
    style: {
      marginTop: "var(--space-5)"
    }
  }, /*#__PURE__*/React.createElement(Button, {
    onClick: () => go("diensten")
  }, "Learn more"))), /*#__PURE__*/React.createElement(ServiceKolommen, {
    actief: vol ? actief : -1,
    loopt: hover < 0 && !reduce,
    duur: 3400,
    setHover: setHover,
    go: go
  }));

  /* Geen dissolve meer: een wit blok dat direct onder de haarlijn van de laatste
     case begint. Het blok komt als geheel op de scroll binnen — het stijgt naar
     zijn plek terwijl de koptekst woord voor woord en de vier kolommen lijn na
     lijn aanschuiven. */
  return /*#__PURE__*/React.createElement("section", {
    "data-diensten": true,
    className: "dolle-calm",
    style: {
      position: "relative",
      zIndex: 2,
      background: "var(--dolle-white)",
      color: "var(--text-body)",
      padding: "var(--space-8) var(--page-margin) var(--section-gap)",
      display: "grid"
    }
  }, /*#__PURE__*/React.createElement(HomeOpkomst, null, intro));
}

/* Komt op zodra het door de onderrand van het venster schuift: één rustige
   stijging met fade, daarna blijft het staan. */
function HomeOpkomst({
  children,
  y = 46,
  dur = 1100,
  style
}) {
  const reduce = typeof window !== "undefined" && window.matchMedia ? window.matchMedia("(prefers-reduced-motion: reduce)").matches : false;
  const [aan, setAan] = React.useState(reduce);
  const vak = React.useRef(null);
  React.useEffect(() => {
    if (reduce || !vak.current) return;
    const io = new IntersectionObserver(rijen => {
      if (rijen.some(r => r.isIntersecting)) {
        setAan(true);
        io.disconnect();
      }
    }, {
      rootMargin: "0px 0px -22% 0px"
    });
    io.observe(vak.current);
    return () => io.disconnect();
  }, [reduce]);
  return /*#__PURE__*/React.createElement("div", {
    ref: vak,
    style: {
      opacity: aan ? 1 : 0,
      transform: aan ? "translate3d(0,0,0)" : "translate3d(0," + y + "px,0)",
      transition: "opacity " + Math.round(dur * 0.8) + "ms var(--ease-dolle), transform " + dur + "ms var(--ease-dolle)",
      ...style
    }
  }, children);
}

/* Wat klanten zeggen: vier—drie kaarten op wit, zelfde hairline-taal als de
   rest. Geen sterren of avatars; het citaat doet het werk, de regel eronder
   noemt de partij. */
/* Wat klanten zeggen: kaartjes met projectbeeld en citaat, horizontaal
   doorscrollbaar. Een kaart leidt naar de case van die klant.
   Citaten zijn placeholders tot de echte quotes er zijn. */
const PROOF_IMG = "../../assets/cases/web/";
const HOME_PROOF = [{
  id: 1,
  naam: "Niels Perukel",
  score: 5,
  q: "DOLLE helped us create the content for the NBM website. The team is very pleasant to work with and they are specialists in their field. On top of that, communication was smooth and easy. Highly recommended!"
}, {
  id: 2,
  naam: "Eric van Ginneken",
  score: 5,
  q: "A great collaboration with these guys! They made several videos for us that fit who we want to be as Zwaluwe. They are refreshingly direct in their communication and keep as low a profile as possible on the shoot day itself, which we really appreciated!"
}, {
  id: 3,
  naam: "Jimi Buser",
  score: 5,
  q: "Very skilled work, fast and clear communication. Would definitely do more business with them in the future. Recommended!"
}, {
  id: 4,
  naam: "michar oosterbaan",
  score: 5,
  q: "A great partner to work with on film for a long time now. They know their stuff and always bring a smile!"
}, {
  id: 5,
  naam: "Marlou Duchateau",
  score: 4,
  q: "Working with Guus was a pleasure. Short lines of communication and an end result that gets the message across well, despite the complex subject matter!"
}, {
  id: 6,
  naam: "Eric jan Pennock",
  score: 5,
  q: "Recently made a quick, sharp and very substantive media post for us."
}];
function HomeProof({
  go
}) {
  const sectie = React.useRef(null);
  const raam = React.useRef(null);
  const spoor = React.useRef(null);
  /* Doorlopende carrousel: de reeks staat twee keer in het spoor, dus zodra de
     eerste helft voorbij is springt de stand terug en loopt de rij naadloos
     door. De beweging is traag en constant; hoveren zet hem stil, slepen neemt
     hem over, en een klik zonder sleep gaat naar die case. */
  const pos = React.useRef(0);
  const stil = React.useRef(false);
  const vast = React.useRef(false);
  const sleep = React.useRef(null);
  const SNELHEID = 26; /* px per seconde */

  React.useEffect(() => {
    const reduce = window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    let raf = 0,
      vorig = 0,
      leeft = true;
    /* De periode is de plek van de eerste kaart van de tweede reeks: dat is
       exact één reeks plus de tussenruimte, dus de sprong valt niet op. */
    const helft = () => {
      const sp = spoor.current;
      const kop = sp && sp.children[HOME_PROOF.length];
      return kop ? kop.offsetLeft : 0;
    };
    /* Het spoor schuift, de foto blijft staan: elke foto staat ruim breder dan
       haar kader en schuift de rijrichting tegemoet, precies zover als de
       overmaat toelaat. Het kader beweegt dus over een vrijwel stilstaand beeld
       en snijdt er steeds een ander deel uit. */
    const zet = () => {
      const sp = spoor.current;
      if (!sp) return;
      sp.style.transform = "translate3d(" + (-pos.current).toFixed(2) + "px,0,0)";
      const W = window.innerWidth || 1440;
      for (let i = 0; i < sp.children.length; i++) {
        const kaart = sp.children[i];
        const img = kaart.firstElementChild && kaart.firstElementChild.firstElementChild;
        if (!img) continue;
        const r = kaart.getBoundingClientRect();
        if (r.right < -80 || r.left > W + 80) continue;
        const d = Math.max(-0.5, Math.min(0.5, (r.left + r.width / 2 - W / 2) / W));
        /* Nooit verder dan de overmaat van de foto, anders valt het kader bloot. */
        const ruimte = Math.max(0, (img.offsetWidth - r.width) / 2);
        img.style.transform = "translate3d(" + (-d * 2 * ruimte).toFixed(2) + "px,0,0)";
      }
    };
    const loop = t => {
      if (!leeft) return;
      const dt = vorig ? Math.min(0.05, (t - vorig) / 1000) : 0;
      vorig = t;
      const h = helft();
      if (h > 0) {
        if (!stil.current && !sleep.current && !reduce) pos.current += SNELHEID * dt;
        /* De kaarten reizen van rechts naar links; de stand blijft binnen één reeks. */
        if (pos.current < 0) pos.current += h;
        if (pos.current >= h) pos.current -= h;
        zet();
      }
      raf = requestAnimationFrame(loop);
    };
    raf = requestAnimationFrame(loop);
    return () => {
      leeft = false;
      cancelAnimationFrame(raf);
    };
  }, []);
  const pak = e => {
    sleep.current = {
      x: e.clientX,
      start: pos.current,
      bewogen: false
    };
    stil.current = true; /* de band staat stil zolang je hem vasthoudt */
    if (raam.current && raam.current.setPointerCapture) raam.current.setPointerCapture(e.pointerId);
  };
  const beweeg = e => {
    const sl = sleep.current;
    if (!sl || !spoor.current) return;
    const dx = e.clientX - sl.x;
    if (Math.abs(dx) > 5) sl.bewogen = true;
    const kop = spoor.current.children[HOME_PROOF.length];
    const h = kop ? kop.offsetLeft : 0;
    let p = sl.start - dx;
    if (h > 0) {
      while (p < 0) p += h;
      while (p >= h) p -= h;
    }
    pos.current = p;
    spoor.current.style.transform = "translate3d(" + (-p).toFixed(2) + "px,0,0)";
  };
  /* Losgelaten na slepen: de band loopt weer. Een klik zonder slepen zet hem
     stil (of weer in beweging), dus de reeks stopt pas als je hem aanklikt. */
  const los = () => {
    const sl = sleep.current;
    sleep.current = null;
    if (!sl) return;
    stil.current = sl.bewogen ? false : !vast.current;
    vast.current = stil.current;
  };
  const [hoverKaart, setHoverKaart] = React.useState(null);
  const kaart = (p, kopie) => {
    const sleutel = p.id + "-" + kopie;
    const aan = hoverKaart === sleutel;
    return /*#__PURE__*/React.createElement("article", {
      key: sleutel,
      tabIndex: 0,
      onMouseEnter: () => setHoverKaart(sleutel),
      onMouseLeave: () => setHoverKaart(null),
      style: {
        flex: "0 0 auto",
        width: "min(80vw, 380px)",
        display: "grid",
        borderRadius: 8,
        border: "1px solid rgba(255,255,255,0.16)",
        background: aan ? "rgba(16,31,60,0.86)" : "rgba(16,31,60,0.74)",
        boxShadow: "0 30px 70px rgba(5,12,28,0.35)",
        backdropFilter: "blur(14px)",
        WebkitBackdropFilter: "blur(14px)",
        cursor: "grab",
        transition: "background 400ms ease"
      }
    }, /*#__PURE__*/React.createElement("figure", {
      style: {
        margin: 0,
        display: "grid",
        gridTemplateRows: "auto 1fr auto",
        gap: "var(--space-5)",
        padding: "var(--space-6)",
        height: "100%",
        boxSizing: "border-box"
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        gap: "var(--space-3)"
      }
    }, /*#__PURE__*/React.createElement("span", {
      "aria-label": p.score + " out of 5",
      style: {
        display: "flex",
        gap: "0.1em",
        fontSize: "13px",
        lineHeight: 1,
        color: "var(--dolle-white)"
      }
    }, [0, 1, 2, 3, 4].map(s => /*#__PURE__*/React.createElement("span", {
      key: s,
      "aria-hidden": "true",
      style: {
        opacity: s < p.score ? 1 : 0.22
      }
    }, "\u2605"))), /*#__PURE__*/React.createElement(Kicker, {
      size: "sm",
      style: {
        color: "rgba(255,255,255,0.72)",
        whiteSpace: "nowrap"
      }
    }, p.score + "/5 · Google")), /*#__PURE__*/React.createElement("blockquote", {
      style: {
        margin: 0,
        fontFamily: "var(--font-core)",
        fontSize: "clamp(16px,1.25vw,19px)",
        lineHeight: 1.5,
        color: "var(--dolle-white)",
        textWrap: "pretty"
      }
    }, "\u201C" + p.q + "\u201D"), /*#__PURE__*/React.createElement("figcaption", {
      style: {
        borderTop: "1px solid rgba(255,255,255,0.16)",
        paddingTop: "var(--space-4)"
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        fontFamily: "var(--font-label)",
        fontWeight: 600,
        fontSize: "var(--size-label)",
        letterSpacing: "var(--track-label-wide)",
        textTransform: "uppercase",
        color: "var(--dolle-white)"
      }
    }, p.naam))));
  };
  return /*#__PURE__*/React.createElement("section", {
    ref: sectie,
    className: "dolle-dark",
    style: {
      position: "relative",
      zIndex: 2,
      background: "var(--dolle-navy)",
      color: "var(--text-body)",
      padding: "clamp(96px,16vh,180px) 0",
      overflow: "hidden",
      clipPath: "inset(0)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    "aria-hidden": "true",
    style: {
      position: "fixed",
      inset: 0,
      backgroundImage: "url(" + HOME_PROOF_BEELD + ")",
      backgroundSize: "cover",
      backgroundPosition: "center",
      pointerEvents: "none"
    }
  }), /*#__PURE__*/React.createElement("div", {
    "aria-hidden": "true",
    style: {
      position: "absolute",
      inset: 0,
      background: "linear-gradient(180deg, rgba(16,31,60,0.54) 0%, rgba(16,31,60,0.42) 45%, rgba(16,31,60,0.62) 100%)",
      pointerEvents: "none"
    }
  }), /*#__PURE__*/React.createElement(HomeOpkomst, null, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      zIndex: 1,
      display: "grid",
      gap: "var(--space-7)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: "100%",
      maxWidth: "var(--content-max)",
      margin: "0 auto",
      padding: "0 var(--page-margin)"
    }
  }, /*#__PURE__*/React.createElement(Words, {
    as: "h2",
    text: "What clients say.",
    delay: 80,
    style: {
      margin: 0,
      color: "var(--dolle-white)"
    }
  })), /*#__PURE__*/React.createElement("div", {
    ref: raam,
    onPointerDown: pak,
    onPointerMove: beweeg,
    onPointerUp: los,
    onPointerCancel: los,
    style: {
      overflow: "hidden",
      padding: "0 var(--page-margin) var(--space-4)",
      cursor: "grab",
      touchAction: "pan-y"
    }
  }, /*#__PURE__*/React.createElement("div", {
    ref: spoor,
    style: {
      display: "flex",
      gap: "var(--space-5)",
      willChange: "transform"
    }
  }, HOME_PROOF.map(p => kaart(p, "a")), HOME_PROOF.map(p => kaart(p, "b")))))));
}
const HOME_PROOF_BEELD = "../../assets/photography/dolle-set-01.jpg";

/* Werkbeelden bij het conversieblok: behind the scenes van de producties. De
   zes vakken staan vast, de beelden erin rouleren: net als het doelwoord in de
   kop wisselt er elke paar tellen één willekeurig vak naar een willekeurig
   beeld uit de voorraad dat nog niet in het mozaïek staat. */
const BTS_POOL = ["../../assets/photography/dolle-set-01.jpg", "../../assets/cases/web/case-01.jpg", "../../assets/cases/web/case-02.jpg", "../../assets/cases/web/case-03.jpg", "../../assets/cases/web/case-04.jpg", "../../assets/cases/web/case-05.jpg", "../../assets/cases/web/case-06.jpg"];
const BTS = [{
  src: BTS_POOL[0]
}, {
  src: BTS_POOL[2]
}, {
  src: BTS_POOL[6],
  hoog: true
}, {
  src: BTS_POOL[3],
  hoog: true
}, {
  src: BTS_POOL[5]
}, {
  src: BTS_POOL[1]
}];
function useRoulerendeBeelden(reduce) {
  const [beelden, setBeelden] = React.useState(() => BTS.map(b => b.src));
  React.useEffect(() => {
    if (reduce) return;
    const t = setInterval(() => {
      setBeelden(oud => {
        const vrij = BTS_POOL.filter(s => oud.indexOf(s) === -1);
        if (!vrij.length) return oud;
        const nieuw = oud.slice();
        nieuw[Math.floor(Math.random() * nieuw.length)] = vrij[Math.floor(Math.random() * vrij.length)];
        return nieuw;
      });
    }, 3400);
    return () => clearInterval(t);
  }, [reduce]);
  return beelden;
}

/* CONVERSIE — het blok onder de reviews: één belofte, één knop. Op wit, met
   het beeld rechts in een kader met merkhaken. */
function HomeConversie({
  go,
  tone,
  direct
}) {
  const Opkomst = direct ? React.Fragment : HomeOpkomst;
  const Beeld = direct ? "div" : Reveal;
  const donker = tone === "dark";
  const [hover, setHover] = React.useState(false);
  const [brief, setBrief] = React.useState(false);
  /* Het doelwoord rouleert, zoals op de merkpagina: WILDLY plus één van de vier. */
  const reduce = typeof window !== "undefined" && window.matchMedia ? window.matchMedia("(prefers-reduced-motion: reduce)").matches : false;
  const [i, setI] = React.useState(0);
  React.useEffect(() => {
    if (reduce) return;
    const t = setInterval(() => setI(n => (n + 1) % SERVICES.length), 3400);
    return () => clearInterval(t);
  }, [reduce]);
  const rij = "calc(var(--lh-wildly) * 1em)";
  const beelden = useRoulerendeBeelden(reduce);
  const basis = window.DOLLE_ASSET_BASE || "../../assets/";
  return /*#__PURE__*/React.createElement("section", {
    className: donker ? "dolle-dark" : "dolle-calm",
    style: {
      position: "relative",
      zIndex: 2,
      background: donker ? "var(--dolle-navy)" : "var(--dolle-white)",
      color: "var(--text-body)",
      padding: "var(--space-7) var(--page-margin) " + (donker ? "var(--space-8)" : "var(--section-gap)"),
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement(Opkomst, null, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: "100%",
      maxWidth: "var(--content-max)",
      margin: "0 auto",
      display: "grid",
      gridTemplateColumns: "repeat(auto-fit,minmax(280px,1fr))",
      gap: "var(--grid-gap)",
      alignItems: "center"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      zIndex: 2,
      display: "grid",
      gap: "var(--space-6)",
      justifyItems: "start"
    }
  }, /*#__PURE__*/React.createElement(Reveal, {
    style: {
      position: "relative"
    }
  }, /*#__PURE__*/React.createElement(Kicker, null, "Get in touch")), /*#__PURE__*/React.createElement("h2", {
    style: {
      margin: 0,
      fontSize: "clamp(30px,3.8vw,56px)",
      lineHeight: 1.06,
      letterSpacing: "var(--track-heading)",
      maxWidth: "18ch"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: "block"
    }
  }, "Become"), /*#__PURE__*/React.createElement("span", {
    style: {
      display: "flex",
      alignItems: "flex-start",
      gap: "0.34em",
      textTransform: "uppercase",
      letterSpacing: "var(--track-wildly)",
      whiteSpace: "nowrap"
    }
  }, /*#__PURE__*/React.createElement("span", null, "Wildly"), /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true",
    style: {
      position: "relative",
      display: "block",
      height: rij,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("span", {
    key: i,
    style: {
      display: "block",
      height: rij,
      animation: reduce ? "none" : "dolle-woord-in 560ms var(--ease-dolle)"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: "block",
      height: rij,
      color: "var(--text-accent)"
    }
  }, SERVICES[i].w)))), /*#__PURE__*/React.createElement("span", {
    style: {
      display: "block"
    }
  }, "with your brand.")), /*#__PURE__*/React.createElement("p", {
    className: "dolle-lead",
    style: {
      margin: 0,
      maxWidth: "42ch"
    }
  }, "Discover where your brand still leaves growth, attention and momentum on the table."), /*#__PURE__*/React.createElement(Reveal, {
    delay: 260,
    style: {
      display: "flex",
      alignItems: "center",
      gap: "var(--space-6)",
      flexWrap: "wrap"
    }
  }, /*#__PURE__*/React.createElement(Button, {
    onClick: () => setBrief(true)
  }, "Start a project")), /*#__PURE__*/React.createElement(Reveal, {
    delay: 340,
    style: {
      display: "grid",
      gridTemplateColumns: "minmax(0,1fr) minmax(0,1fr)",
      gap: "var(--space-4)",
      width: "100%",
      maxWidth: "440px"
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "secondary",
    size: "sm",
    block: true,
    href: "tel:+31651202317"
  }, "Call"), /*#__PURE__*/React.createElement(Button, {
    variant: "secondary",
    size: "sm",
    block: true,
    href: "mailto:info@dolle.nl"
  }, "Email")), /*#__PURE__*/React.createElement(Reveal, {
    delay: 420,
    style: {
      display: "flex",
      alignItems: "center",
      gap: "0.5em",
      fontSize: "13px",
      lineHeight: 1,
      color: "var(--text-body)"
    }
  }, /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true",
    style: {
      display: "flex",
      gap: "0.12em",
      fontSize: "11px",
      color: "var(--text-heading)"
    }
  }, /*#__PURE__*/React.createElement("span", null, "\u2605"), /*#__PURE__*/React.createElement("span", null, "\u2605"), /*#__PURE__*/React.createElement("span", null, "\u2605"), /*#__PURE__*/React.createElement("span", null, "\u2605"), /*#__PURE__*/React.createElement("span", null, "\u2605")), /*#__PURE__*/React.createElement("span", {
    style: {
      whiteSpace: "nowrap"
    }
  }, "4,9 | 100+ clients"))), /*#__PURE__*/React.createElement(Beeld, _extends({}, direct ? {} : {
    delay: 160
  }, {
    style: {
      position: "relative",
      zIndex: 0,
      width: "100%",
      marginRight: "calc(var(--page-margin) * -1)"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "1fr 1fr",
      gridAutoRows: "minmax(0,auto)",
      gap: "var(--space-3)"
    }
  }, BTS.map((b, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      position: "relative",
      overflow: "hidden",
      background: "var(--surface-sunk)",
      aspectRatio: b.hoog ? "3 / 5" : "4 / 3",
      gridRow: b.hoog ? "span 2" : "auto",
      transform: "translateY(" + (i % 2 ? 26 : -18) + "px)"
    }
  }, /*#__PURE__*/React.createElement("img", {
    key: beelden[i],
    src: beelden[i],
    alt: "",
    loading: "lazy",
    draggable: "false",
    style: {
      position: "absolute",
      inset: 0,
      width: "100%",
      height: "100%",
      objectFit: "cover",
      display: "block",
      animation: reduce ? "none" : "dolle-woord-in 700ms var(--ease-dolle)"
    }
  }))))))), /*#__PURE__*/React.createElement(BriefPanel, {
    open: brief,
    onClose: () => setBrief(false)
  }));
}

/* De vier diensten komen op scroll binnen, kolom na kolom: de haarlijn trekt
   zichzelf van links vol, daarna stijgt de kolom op zijn plek. De stand komt
   rechtstreeks uit de scrollpositie (1:1, geen animatieklok) en wordt als
   --p op de kolom geschreven; de rest is CSS, dus er lopen geen renders mee.
   Per kolom ligt de drempel iets later, waardoor de reeks doorrolt. */
function ServiceKolommen({
  actief,
  loopt,
  duur,
  setHover,
  go
}) {
  const vak = React.useRef(null);
  const kolommen = React.useRef([]);
  React.useEffect(() => {
    const reduce = window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) {
      kolommen.current.forEach(el => el && el.style.setProperty("--p", 1));
      return;
    }
    let raf = 0;
    const kijk = () => {
      raf = 0;
      const el = vak.current;
      if (!el) return;
      const vh = window.innerHeight || 800;
      const top = el.getBoundingClientRect().top;
      /* Start zodra de rij net onder de vensterrand staat; over 34vh vol, zodat
         de kop erboven nog in beeld is als de vier kolommen aankomen. */
      const basis = (vh * 1.02 - top) / (vh * 0.34);
      kolommen.current.forEach((k, i) => {
        if (!k) return;
        const t = Math.max(0, Math.min(1, basis - i * 0.12));
        /* Eenmaal gevuld blijft gevuld: omhoog scrollen leegt de lijn niet. */
        const was = parseFloat(k.dataset.p || "0");
        if (t <= was) return;
        k.dataset.p = t;
        k.style.setProperty("--p", t.toFixed(4));
      });
    };
    const on = () => {
      if (!raf) raf = requestAnimationFrame(kijk);
    };
    window.addEventListener("scroll", on, {
      passive: true
    });
    window.addEventListener("resize", on);
    kijk();
    return () => {
      window.removeEventListener("scroll", on);
      window.removeEventListener("resize", on);
      if (raf) cancelAnimationFrame(raf);
    };
  }, []);
  return /*#__PURE__*/React.createElement("div", {
    ref: vak,
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(4,minmax(0,1fr))",
      gap: "var(--grid-gap)"
    }
  }, SERVICES.map((s, i) => {
    const aan = i === actief;
    return /*#__PURE__*/React.createElement("div", {
      key: s.n,
      ref: el => {
        kolommen.current[i] = el;
      },
      onMouseEnter: () => setHover(i),
      onMouseLeave: () => setHover(-1),
      style: {
        "--p": 0,
        display: "grid",
        gap: "var(--space-4)",
        alignContent: "start",
        cursor: "default"
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        height: 1,
        background: "var(--border-hairline)",
        position: "relative"
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        position: "absolute",
        left: 0,
        top: 0,
        height: 1,
        background: "var(--text-heading)",
        width: "calc(var(--p) * 100%)",
        opacity: 0.45
      }
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        position: "absolute",
        left: 0,
        top: -1,
        height: 2,
        background: "var(--text-heading)",
        width: "calc(var(--p) * 100%)",
        transformOrigin: "left center",
        transform: aan ? "scaleX(1)" : "scaleX(0)",
        transition: "transform 700ms var(--ease-dolle)"
      }
    })), /*#__PURE__*/React.createElement("div", {
      style: {
        display: "grid",
        gap: "var(--space-4)",
        clipPath: "inset(-4px calc((1 - var(--p)) * 100%) -12px 0)"
      }
    }, /*#__PURE__*/React.createElement(Kicker, {
      size: "sm",
      tone: aan ? "strong" : undefined
    }, s.n), /*#__PURE__*/React.createElement("h3", {
      style: {
        margin: 0,
        fontSize: "var(--size-h4)",
        color: aan ? "var(--text-heading)" : "var(--text-muted)",
        transition: "color var(--dur-ui) var(--ease-dolle)"
      }
    }, s.t), /*#__PURE__*/React.createElement("p", {
      style: {
        margin: 0,
        color: "var(--text-body)",
        fontSize: "var(--size-body-sm)",
        opacity: aan ? 1 : 0,
        transform: aan ? "translateY(0)" : "translateY(8px)",
        transition: "opacity var(--dur-frame) var(--ease-dolle), transform var(--dur-frame) var(--ease-dolle)"
      }
    }, s.b)));
  }));
}
const HOME_CASES = [{
  kicker: "Launches · 2026",
  title: "Relaunching a brand in nine weeks",
  body: "From baseline to campaign, in one continuous production.",
  stat: "+312% reach"
}, {
  kicker: "Media production · 2025",
  title: "Imagery that sticks",
  body: "A season of strategic media, produced offline and online.",
  stat: "4.1M views"
}, {
  kicker: "AI systems · 2026",
  title: "Content that multiplies itself",
  body: "A system that delivers new visibility every week.",
  stat: "6× output"
}];

/* Niet in gebruik op de homepage — de carrousel hierboven vervangt hem.
   Bewaard als drie-op-een-rij alternatief voor andere pagina's. */
function HomeCasesTeaser({
  go
}) {
  return /*#__PURE__*/React.createElement(Section, {
    tone: "sunk",
    kicker: "Cases",
    title: "What falls inside the frame becomes the story.",
    intro: "Starting point, intervention, figure. Every case follows the same format.",
    aside: /*#__PURE__*/React.createElement(Button, {
      variant: "link",
      onClick: () => go("cases")
    }, "All cases")
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(3,minmax(0,1fr))",
      gap: "var(--grid-gap)"
    }
  }, HOME_CASES.map(c => /*#__PURE__*/React.createElement(Card, {
    key: c.title,
    interactive: true,
    corner: true,
    kicker: c.kicker,
    title: c.title,
    onClick: () => go("case"),
    media: /*#__PURE__*/React.createElement(MediaPlaceholder, {
      height: "100%",
      label: "Case \xB7 placeholder"
    }),
    mediaHeight: 220,
    footer: /*#__PURE__*/React.createElement(Kicker, {
      tone: "strong"
    }, c.stat)
  }, c.body))));
}

/* Verschijnt zodra de sectie in beeld komt; scroll-gestuurd, en altijd zichtbaar
   als er niets meet — nooit blijven hangen op opacity 0. */
function useInView() {
  const ref = React.useRef(null);
  const [in_, setIn] = React.useState(false);
  React.useEffect(() => {
    const el = ref.current;
    if (!el) {
      setIn(true);
      return;
    }
    let done = false;
    const check = () => {
      if (done) return;
      const r = el.getBoundingClientRect();
      const h = window.innerHeight || document.documentElement.clientHeight || 0;
      if (r.top < h * 0.92 && r.bottom > 0) {
        done = true;
        setIn(true);
        off();
      }
    };
    const off = () => {
      window.removeEventListener("scroll", check, true);
      window.removeEventListener("resize", check);
      clearTimeout(t);
    };
    window.addEventListener("scroll", check, true);
    window.addEventListener("resize", check);
    const t = setTimeout(() => {
      done = true;
      setIn(true);
      off();
    }, 2000);
    check();
    return off;
  }, []);
  return [ref, in_];
}

/* Vervang door de echte Cal.com- of Google Agenda-boekingslink. */
const CAL_URL = "https://cal.com/dolle/intro";

/* Schuift van onderaf het scherm in; Escape en de scrim sluiten. */
function SlidePanel({
  open,
  onClose,
  label,
  children,
  footer,
  height = "min(86vh,760px)"
}) {
  React.useEffect(() => {
    if (!open) return;
    const h = e => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", h);
    return () => window.removeEventListener("keydown", h);
  }, [open, onClose]);
  return /*#__PURE__*/React.createElement("div", {
    "aria-hidden": !open,
    style: {
      position: "fixed",
      inset: 0,
      zIndex: 90,
      pointerEvents: open ? "auto" : "none"
    }
  }, /*#__PURE__*/React.createElement("div", {
    onClick: onClose,
    style: {
      position: "absolute",
      inset: 0,
      background: "var(--navy-72, rgba(16,31,60,0.72))",
      backdropFilter: "blur(6px)",
      opacity: open ? 1 : 0,
      transition: "opacity 420ms var(--ease-dolle)"
    }
  }), /*#__PURE__*/React.createElement("div", {
    role: "dialog",
    className: "dolle-dark",
    "aria-modal": "true",
    "aria-label": label,
    style: {
      position: "absolute",
      left: "50%",
      bottom: 0,
      width: "min(920px,94vw)",
      height,
      transform: open ? "translate(-50%,0)" : "translate(-50%,100%)",
      transition: "transform 620ms var(--ease-dolle)",
      background: "var(--dolle-navy)",
      color: "var(--dolle-white)",
      display: "grid",
      gridTemplateRows: "auto 1fr auto",
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      gap: "var(--space-4)",
      padding: "var(--space-4) var(--space-6)",
      borderBottom: "1px solid var(--white-24, rgba(255,255,255,0.24))"
    }
  }, /*#__PURE__*/React.createElement(Logo, {
    variant: "open",
    tone: "white",
    height: 22
  }), /*#__PURE__*/React.createElement(Kicker, {
    size: "sm",
    style: {
      color: "var(--white-72, rgba(255,255,255,0.72))"
    }
  }, label), /*#__PURE__*/React.createElement(IconButton, {
    icon: "x",
    label: "Close",
    variant: "ghost",
    size: 44,
    onClick: onClose,
    style: {
      color: "var(--dolle-white)"
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      overflow: "auto",
      padding: "var(--space-7) var(--space-6)"
    }
  }, children), footer ? /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: "var(--space-3)",
      justifyContent: "flex-end",
      padding: "var(--space-4) var(--space-6)",
      borderTop: "1px solid var(--white-24, rgba(255,255,255,0.24))"
    }
  }, footer) : null));
}
const veld = {
  width: "100%",
  background: "transparent",
  border: "none",
  borderBottom: "1px solid var(--white-24, rgba(255,255,255,0.24))",
  color: "var(--dolle-white)",
  fontFamily: "var(--font-core)",
  fontSize: "var(--size-body-lg)",
  padding: "var(--space-3) 0",
  outline: "none"
};
function BriefPanel({
  open,
  onClose
}) {
  const [sent, setSent] = React.useState(false);
  return /*#__PURE__*/React.createElement(SlidePanel, {
    open: open,
    onClose: onClose,
    label: "Start a project",
    footer: sent ? /*#__PURE__*/React.createElement(Button, {
      size: "sm",
      variant: "secondary",
      onClick: onClose
    }, "Close") : /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Button, {
      size: "sm",
      variant: "ghost",
      onClick: onClose
    }, "Cancel"), /*#__PURE__*/React.createElement(Button, {
      size: "sm",
      onClick: () => {
        const w = id => {
          const el = document.getElementById(id);
          return el ? el.value : "";
        };
        if (!w("bp-mail")) {
          const el = document.getElementById("bp-mail");
          if (el) el.focus();
          return;
        }
        window.dolleVerstuur && window.dolleVerstuur("Project request · " + (w("bp-company") || w("bp-name") || "website"), [["Name", w("bp-name")], ["Email", w("bp-mail")], ["Company", w("bp-company")], ["Information", w("bp-info")]]);
        setSent(true);
      }
    }, "Send"))
  }, sent ? /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gap: "var(--space-4)",
      justifyItems: "start"
    }
  }, /*#__PURE__*/React.createElement(Kicker, {
    size: "sm",
    style: {
      color: "var(--white-72, rgba(255,255,255,0.72))"
    }
  }, "Received"), /*#__PURE__*/React.createElement("h3", {
    style: {
      margin: 0,
      color: "var(--dolle-white)"
    }
  }, "An answer within one working day.")) : /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gap: "var(--space-7)",
      maxWidth: "56ch"
    }
  }, /*#__PURE__*/React.createElement("label", {
    style: {
      display: "grid",
      gap: "var(--space-2)"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: "var(--size-body-sm)",
      color: "var(--white-72, rgba(255,255,255,0.72))"
    }
  }, "Name"), /*#__PURE__*/React.createElement("input", {
    id: "bp-name",
    style: veld,
    placeholder: "Jane Doe"
  })), /*#__PURE__*/React.createElement("label", {
    style: {
      display: "grid",
      gap: "var(--space-2)"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: "var(--size-body-sm)",
      color: "var(--white-72, rgba(255,255,255,0.72))"
    }
  }, "Email"), /*#__PURE__*/React.createElement("input", {
    id: "bp-mail",
    type: "email",
    required: true,
    style: veld,
    placeholder: "you@company.com"
  })), /*#__PURE__*/React.createElement("label", {
    style: {
      display: "grid",
      gap: "var(--space-2)"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: "var(--size-body-sm)",
      color: "var(--white-72, rgba(255,255,255,0.72))"
    }
  }, "Company"), /*#__PURE__*/React.createElement("input", {
    id: "bp-company",
    style: veld,
    placeholder: "Company name"
  })), /*#__PURE__*/React.createElement("label", {
    style: {
      display: "grid",
      gap: "var(--space-2)"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: "var(--size-body-sm)",
      color: "var(--white-72, rgba(255,255,255,0.72))"
    }
  }, "Information"), /*#__PURE__*/React.createElement("textarea", {
    id: "bp-info",
    rows: 4,
    style: {
      ...veld,
      resize: "vertical"
    },
    placeholder: "Goal, timing, budget, anything helps"
  }))));
}
function CallPanel({
  open,
  onClose
}) {
  return /*#__PURE__*/React.createElement(SlidePanel, {
    open: open,
    onClose: onClose,
    label: "Schedule a call",
    height: "min(88vh,820px)"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gap: "var(--space-4)",
      height: "100%"
    }
  }, /*#__PURE__*/React.createElement("iframe", {
    title: "Schedule an intro call",
    src: open ? CAL_URL : "about:blank",
    style: {
      width: "100%",
      minHeight: 560,
      border: "none",
      background: "var(--dolle-white)"
    }
  }), /*#__PURE__*/React.createElement(Kicker, {
    size: "sm",
    style: {
      color: "var(--white-72, rgba(255,255,255,0.72))"
    }
  }, "15 minutes \xB7 Google Meet \xB7 Europe/Amsterdam")));
}
function HomeCTA({
  go
}) {
  const [ref, zicht] = useInView();
  const reduce = typeof window !== "undefined" && window.matchMedia ? window.matchMedia("(prefers-reduced-motion: reduce)").matches : false;
  const aan = zicht || reduce;
  const [brief, setBrief] = React.useState(false);
  const stap = i => ({
    opacity: aan ? 1 : 0,
    transform: aan ? "translateY(0)" : "translateY(16px)",
    transition: reduce ? "none" : "opacity 700ms var(--ease-dolle) " + (120 + i * 120) + "ms, transform 700ms var(--ease-dolle) " + (120 + i * 120) + "ms"
  });
  return /*#__PURE__*/React.createElement("section", {
    ref: ref,
    className: "dolle-calm",
    style: {
      background: "var(--dolle-white)",
      color: "var(--text-heading)",
      padding: "var(--section-gap) var(--page-margin)",
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: "var(--content-max)",
      margin: "0 auto",
      display: "grid",
      gap: "var(--space-8)",
      justifyItems: "start"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gap: "var(--space-6)",
      justifyItems: "start",
      width: "100%"
    }
  }, /*#__PURE__*/React.createElement(Words, {
    as: "h2",
    text: "Get in touch.",
    style: {
      margin: 0,
      color: "var(--text-heading)",
      maxWidth: "16ch"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      ...stap(1)
    }
  }, /*#__PURE__*/React.createElement(Button, {
    onClick: () => setBrief(true)
  }, "Start a project")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(auto-fit,minmax(280px,340px))",
      gap: "var(--space-3)",
      width: "100%",
      ...stap(2)
    }
  }, /*#__PURE__*/React.createElement("a", {
    href: "tel:+31651202317",
    style: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      gap: "var(--space-6)",
      padding: "var(--space-3) var(--space-4)",
      border: "1px solid var(--border-hairline)",
      color: "var(--text-heading)",
      textDecoration: "none",
      fontFamily: "var(--font-label)",
      fontWeight: 600,
      letterSpacing: "0.06em",
      fontSize: "var(--size-body-sm)"
    }
  }, "+31 6 51 20 23 17", /*#__PURE__*/React.createElement(Icon, {
    name: "arrow-right",
    size: 16
  })), /*#__PURE__*/React.createElement("a", {
    href: "mailto:info@dolle.nl",
    style: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      gap: "var(--space-6)",
      padding: "var(--space-3) var(--space-4)",
      border: "1px solid var(--border-hairline)",
      color: "var(--text-heading)",
      textDecoration: "none",
      fontFamily: "var(--font-label)",
      fontWeight: 600,
      letterSpacing: "0.06em",
      fontSize: "var(--size-body-sm)"
    }
  }, "info@dolle.nl", /*#__PURE__*/React.createElement(Icon, {
    name: "arrow-right",
    size: 16
  }))))), /*#__PURE__*/React.createElement(BriefPanel, {
    open: brief,
    onClose: () => setBrief(false)
  }));
}

/* Cases op de homepage in dezelfde rijen als de cases-pagina: de bovenste zes,
   met dezelfde open-beweging. De rij zelf komt uit Cases.jsx, zodat er één
   ontwerp is voor beide pagina's. */
function HomeCasesRijen({
  go
}) {
  const Rij = window.CaseRij;
  const [lijst, setLijst] = React.useState(() => (window.CASES || []).slice(0, 6));
  /* Zelfde rangorde als de cases-pagina (inclusief een opgeslagen eigen orde). */
  React.useEffect(() => {
    const bron = window.caseVolgorde ? window.caseVolgorde() : window.CASES || [];
    setLijst(bron.slice(0, 6));
  }, []);
  const [open, setOpen] = React.useState(-1);
  /* Zodra de cases in beeld komen, schuift onderin een knop omhoog die naar de
     cases-pagina leidt; hij verdwijnt weer zodra je het blok verlaat. */
  const vak = React.useRef(null);
  const [zicht, setZicht] = React.useState(false);
  React.useEffect(() => {
    let raf = 0;
    const kijk = () => {
      raf = 0;
      const el = vak.current;
      if (!el) return;
      const vh = window.innerHeight || 800;
      const r = el.getBoundingClientRect();
      /* Weg zodra het dienstenblok in beeld schuift. */
      const diensten = document.querySelector("[data-diensten]");
      const dTop = diensten ? diensten.getBoundingClientRect().top : Infinity;
      setZicht(r.top < vh * 0.9 && dTop > vh * 0.75);
    };
    const on = () => {
      if (!raf) raf = requestAnimationFrame(kijk);
    };
    window.addEventListener("scroll", on, {
      passive: true
    });
    window.addEventListener("resize", on);
    kijk();
    return () => {
      window.removeEventListener("scroll", on);
      window.removeEventListener("resize", on);
      if (raf) cancelAnimationFrame(raf);
    };
  }, []);
  if (!Rij || !lijst.length) return null;
  return /*#__PURE__*/React.createElement("section", {
    className: "dolle-dark dolle-zacht",
    style: {
      position: "relative",
      zIndex: 2,
      background: "var(--dolle-navy)",
      padding: "var(--space-6) var(--page-margin) 0",
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: "var(--content-max)",
      margin: "0 auto",
      display: "grid",
      gridTemplateColumns: "minmax(0,1fr)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "flex-end",
      alignItems: "center",
      gap: "0.5em",
      paddingBottom: "var(--space-4)",
      fontSize: "13px",
      lineHeight: 1,
      color: "var(--white-72, rgba(255,255,255,0.72))"
    }
  }, /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true",
    style: {
      display: "flex",
      gap: "0.12em",
      color: "var(--dolle-white)",
      fontSize: "11px"
    }
  }, /*#__PURE__*/React.createElement("span", null, "\u2605"), /*#__PURE__*/React.createElement("span", null, "\u2605"), /*#__PURE__*/React.createElement("span", null, "\u2605"), /*#__PURE__*/React.createElement("span", null, "\u2605"), /*#__PURE__*/React.createElement("span", null, "\u2605")), /*#__PURE__*/React.createElement("span", null, "4,9 | 100+ clients")), lijst.map((c, i) => /*#__PURE__*/React.createElement(React.Fragment, {
    key: c.id
  }, i === 1 ? /*#__PURE__*/React.createElement("div", {
    ref: vak,
    style: {
      height: 1
    }
  }) : null, /*#__PURE__*/React.createElement(Rij, {
    c: c,
    i: i,
    go: go,
    open: open === c.id,
    onToggle: () => setOpen(open === c.id ? -1 : c.id)
  }))), window.Haarlijn ? /*#__PURE__*/React.createElement(window.Haarlijn, null) : /*#__PURE__*/React.createElement("div", {
    style: {
      height: 1,
      background: "var(--white-24, rgba(255,255,255,0.24))",
      marginRight: "calc(var(--page-margin) * -1)",
      marginLeft: "calc(var(--page-margin) * -1)"
    }
  })), /*#__PURE__*/React.createElement("div", {
    "aria-hidden": !zicht,
    style: {
      position: "fixed",
      left: 0,
      right: 0,
      bottom: "var(--space-5)",
      zIndex: 40,
      display: "flex",
      justifyContent: "center",
      pointerEvents: zicht ? "auto" : "none"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: "block",
      transform: zicht ? "translateY(0)" : "translateY(160%)",
      opacity: zicht ? 1 : 0,
      transition: "transform var(--dur-frame) var(--ease-dolle), opacity var(--dur-ui) var(--ease-dolle)"
    }
  }, /*#__PURE__*/React.createElement(Button, {
    size: "sm",
    tabIndex: zicht ? 0 : -1,
    onClick: () => go("cases"),
    style: {
      background: "rgba(248,244,236,0.92)",
      borderColor: "rgba(248,244,236,0.92)",
      backdropFilter: "blur(4px)"
    }
  }, "Cases"))));
}

/* Overgang van de cases naar de diensten: hetzelfde oplossen als in de hero,
   maar nu van navy naar wit. Zelfde instellingen, zelfde scrub — de scrollstand
   binnen deze weg stuurt het raster 1:1. */
function HomeOvergang() {
  const Dissolve = window.HeroDissolve;
  const weg = React.useRef(null);
  const [p, setP] = React.useState(0);
  const [cfg, setCfg] = React.useState({});
  /* De afwijkingen van deze overgang zijn startwaarden, geen dwang: alles wat in
     het Overgang-lab wordt gezet wint. Eén bron voor render én scroll-mapping. */
  const OVERGANG_BASIS = {
    minScale: 100,
    preWhite: 100,
    postWhite: 100,
    band: 46,
    jitter: 34
  };
  const gebruikt = Object.assign({}, OVERGANG_BASIS, cfg);
  const cfgRef = React.useRef(gebruikt);
  cfgRef.current = gebruikt;
  const [lab, setLab] = React.useState(false);
  const Lab = window.DissolveLab;
  const SLEUTEL = "dolle-overgang-cfg";
  React.useEffect(() => {
    if (!window.labStand) return;
    /* Nog geen eigen stand? Dan de instellingen van de hero-dissolve overnemen;
       de afwijkingen van deze overgang staan hieronder als vaste overschrijving. */
    setCfg(Object.assign({}, window.labStand(), window.labStand(SLEUTEL)));
  }, []);
  React.useEffect(() => {
    if (window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    let raf = 0;
    const tick = () => {
      raf = 0;
      const el = weg.current;
      if (!el) return;
      /* De sweep loopt van het moment dat de strook onderin binnenkomt tot het
         moment dat hij bovenin lospint. Zo zijn de eerste haakjes meteen te zien
         onder de laatste case-rij en is het wit er snel daarna. */
      /* Zelfde opzet als de hero: een gepinde stage van één scherm, waarin de
         voortgang uit de scrolweg komt. Zolang de stage staat vult hij het hele
         beeld, dus er is nergens een grens tussen canvas en een ander blok. */
      const vh = window.innerHeight || 800;
      const totaal = Math.max(1, el.offsetHeight - vh);
      /* De voortgang loopt al terwijl de band binnenschuift, dus vanaf het moment
         dat hij onderin verschijnt kruipt het front omhoog: geen vlak navy gat
         onder de laatste rij. */
      const span = vh + totaal;
      const s = Math.min(Math.max(0, vh - el.getBoundingClientRect().top), span);
      /* De bovenste celrij begint haar tijdlijn op p = 1 − band. Dat punt moet
         samenvallen met het moment dat de bovenrand de viewporttop raakt (s = vh);
         de rest van de scrolweg maakt de vulling af. */
      const start = 1 - (cfgRef.current.band || 46) / 100;
      setP(Math.min(1, start * (s / vh)));
    };
    const on = () => {
      if (!raf) raf = requestAnimationFrame(tick);
    };
    window.addEventListener("scroll", on, {
      passive: true
    });
    window.addEventListener("resize", on);
    tick();
    return () => {
      window.removeEventListener("scroll", on);
      window.removeEventListener("resize", on);
      if (raf) cancelAnimationFrame(raf);
    };
  }, []);
  if (!Dissolve) return null;
  return /*#__PURE__*/React.createElement("section", {
    "aria-hidden": "true",
    ref: weg,
    style: {
      position: "relative",
      zIndex: 1,
      pointerEvents: "none",
      height: "200vh",
      background: "var(--dolle-white)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "sticky",
      top: 0,
      height: "100vh",
      overflow: "hidden",
      pointerEvents: "none",
      background: "var(--dolle-navy)"
    }
  }, /*#__PURE__*/React.createElement(Dissolve, {
    voortgang: p,
    cfg: Object.assign({
      minScale: 100
    }, cfg, {
      preWhite: 100,
      postWhite: 100,
      /* Zachte kop: de cellen komen over een langere strook aan de beurt, met
         meer willekeur, zodat de haakjes één voor één oppoppen. */
      /* Lange, zachte kop: de cellen komen ver uit elkaar aan de beurt en
         met veel willekeur, zodat de haakjes één voor één oppoppen in plaats
         van als rechte lijn. */
      band: Math.max(46, cfg.band || 0),
      jitter: Math.max(34, cfg.jitter || 0)
    }),
    grond: "#101F3C",
    vul: [255, 255, 255],
    flits: [248, 244, 236],
    flitsNa: [16, 31, 60]
  })), lab && Lab ? /*#__PURE__*/React.createElement(Lab, {
    cfg: gebruikt,
    setCfg: setCfg,
    sluit: () => setLab(false),
    sleutel: SLEUTEL,
    titel: "Overgang-lab",
    links: true
  }) : !(window.labAan && window.labAan()) ? null : /*#__PURE__*/React.createElement("button", {
    type: "button",
    onClick: () => setLab(true),
    style: {
      position: "fixed",
      left: "12px",
      bottom: "12px",
      zIndex: 200,
      pointerEvents: "auto",
      appearance: "none",
      cursor: "pointer",
      padding: "10px 14px",
      background: "rgba(9,17,34,0.92)",
      color: "var(--dolle-white)",
      border: "1px solid rgba(255,255,255,0.24)",
      fontFamily: "var(--font-label)",
      fontSize: "10px",
      letterSpacing: "0.18em",
      textTransform: "uppercase"
    }
  }, "Overgang-lab"));
}
function Home({
  go
}) {
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(HomeHero, {
    go: go
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      zIndex: 1
    }
  }, /*#__PURE__*/React.createElement(HomeWoord, null), /*#__PURE__*/React.createElement(HomeCasesRijen, {
    go: go
  }), /*#__PURE__*/React.createElement(HomeServices, {
    go: go
  }), /*#__PURE__*/React.createElement(HomeProof, {
    go: go
  }), /*#__PURE__*/React.createElement(HomeConversie, {
    go: go
  })));
}
Object.assign(window, {
  Home,
  CallPanel,
  BriefPanel,
  SlidePanel,
  WoordContent,
  HomeProof,
  HomeConversie
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/Home.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/Motion.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
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
    if (typeof IntersectionObserver === "undefined") {
      setSeen(true);
      return;
    }
    const io = new IntersectionObserver(es => {
      es.forEach(e => {
        if (e.isIntersecting) {
          setSeen(true);
          if (once) io.disconnect();
        } else if (!once) setSeen(false);
      });
    }, {
      threshold,
      rootMargin: margin
    });
    io.observe(el);
    return () => io.disconnect();
  }, []);
  return [ref, seen];
}

/* Woord-voor-woord: elk woord zit in een masker en schuift van onder omhoog.
   `accent` markeert één woord kobalt; `caps` zet de string als WILDLY-statement. */
function Words({
  text,
  accent,
  italic,
  as = "span",
  delay = 0,
  stagger = 34,
  dur = 1150,
  style,
  caps,
  margin,
  zicht
}) {
  /* Iets later dan de lijnen, en met een langere, vloeiender beweging.
     Met `zicht` bepaalt de ouder het moment (bijv. de scrollteller van de
     caserijen), zodat een layoutverschuiving de reveal niet kan afvuren. */
  const [ref, gezien] = useInView(0.2, true, margin || "0px 0px -18% 0px");
  const seen = zicht == null ? gezien : REDUCE || zicht;
  const words = String(text).split(" ");
  const Tag = as;
  return /*#__PURE__*/React.createElement(Tag, {
    ref: ref,
    "aria-label": text,
    style: {
      ...style,
      display: style && style.display ? style.display : "block"
    }
  }, words.map((w, i) => /*#__PURE__*/React.createElement("span", {
    key: i,
    "aria-hidden": "true",
    style: {
      display: "inline-block",
      overflow: "hidden",
      verticalAlign: "bottom",
      paddingBottom: "0.08em",
      marginBottom: "-0.08em"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: "inline-block",
      whiteSpace: "pre",
      color: accent && w.replace(/[.,]/g, "") === accent ? "var(--text-accent)" : undefined,
      fontStyle: italic && w.replace(/[.,]/g, "") === italic ? "italic" : undefined,
      textTransform: caps ? "uppercase" : undefined,
      letterSpacing: caps ? "var(--track-wildly)" : undefined,
      transform: seen ? "translateY(0)" : "translateY(112%)",
      opacity: seen ? 1 : 0,
      transition: REDUCE ? "none" : "transform " + dur + "ms " + EASE + " " + (delay + i * stagger) + "ms, opacity " + Math.round(dur * 0.5) + "ms linear " + (delay + i * stagger) + "ms"
    }
  }, w + (i < words.length - 1 ? " " : "")))));
}

/* Blok-reveal in dezelfde beweging als de woordreveal: de inhoud komt achter
   een masker van onder omhoog in beeld. Het masker is een clip-path op het blok
   zelf, dus er komt geen extra element bij en de layout blijft precies zoals hij
   is. Na de reveal staat de clip ruim buiten het blok, zodat hoekmerken en
   schaduwen niet worden afgesneden. Met mask=false blijft het oude blok-fade. */
function Reveal({
  children,
  delay = 0,
  dur = 800,
  y = 20,
  as = "div",
  style,
  mask = true,
  ...rest
}) {
  const [ref, seen] = useInView(0.12);
  const Tag = as;
  const beweeg = REDUCE ? "none" : "clip-path " + dur + "ms " + EASE + " " + delay + "ms, transform " + dur + "ms " + EASE + " " + delay + "ms, opacity " + Math.round(dur * 0.5) + "ms linear " + delay + "ms";
  return /*#__PURE__*/React.createElement(Tag, _extends({
    ref: ref,
    style: {
      ...style,
      clipPath: mask ? seen ? "inset(-30% -30% -30% -30%)" : "inset(0 0 102% 0)" : undefined,
      opacity: seen ? 1 : 0,
      transform: seen ? "none" : "translateY(" + Math.min(y, 26) + "px)",
      transition: beweeg
    }
  }, rest), children);
}

/* Hairline die van links volloopt zodra hij in beeld is. */
function RevealRule({
  delay = 0,
  tone
}) {
  /* Loopt al vol voordat de lijn het midden haalt, zodat er nooit halfvolle streepjes staan. */
  const [ref, seen] = useInView(0, true, "0px 0px 16% 0px");
  return /*#__PURE__*/React.createElement("div", {
    ref: ref,
    style: {
      height: 1,
      background: tone || "var(--border-hairline)",
      transformOrigin: "left",
      transform: seen ? "scaleX(1)" : "scaleX(0)",
      transition: REDUCE ? "none" : "transform 900ms " + EASE + " " + delay + "ms"
    }
  });
}

/* Parallax: het kind beweegt met `speed` × de afstand tot het schermmidden.
   Positief = trager dan de pagina (beeld), negatief = sneller (tekstlaag). */
function Parallax({
  children,
  speed = 0.16,
  scale,
  style,
  inner
}) {
  const ref = React.useRef(null);
  const box = React.useRef(null);
  React.useEffect(() => {
    if (REDUCE) return;
    const el = ref.current,
      k = box.current;
    if (!el || !k) return;
    let raf = 0;
    const tick = () => {
      raf = 0;
      const r = el.getBoundingClientRect();
      const vh = window.innerHeight || 800;
      if (r.bottom < -200 || r.top > vh + 200) return;
      const d = r.top + r.height / 2 - vh / 2;
      k.style.transform = "translate3d(0," + (d * speed).toFixed(1) + "px,0)" + (scale ? " scale(" + scale + ")" : "");
    };
    const on = () => {
      if (!raf) raf = requestAnimationFrame(tick);
    };
    window.addEventListener("scroll", on, {
      passive: true,
      capture: true
    });
    window.addEventListener("resize", on);
    tick();
    return () => {
      window.removeEventListener("scroll", on, true);
      window.removeEventListener("resize", on);
      if (raf) cancelAnimationFrame(raf);
    };
  }, [speed, scale]);
  return /*#__PURE__*/React.createElement("div", {
    ref: ref,
    style: {
      overflow: "hidden",
      position: "relative",
      ...style
    }
  }, /*#__PURE__*/React.createElement("div", {
    ref: box,
    style: {
      position: "absolute",
      inset: scale ? "-" + Math.round((scale - 1) * 50) + "%" : 0,
      willChange: "transform",
      transform: scale ? "scale(" + scale + ")" : undefined,
      ...inner
    }
  }, children));
}
function ParallaxImage({
  src,
  alt = "",
  speed = 0.14,
  style,
  imgStyle,
  children
}) {
  return /*#__PURE__*/React.createElement(Parallax, {
    speed: speed,
    scale: 1.18,
    style: style
  }, /*#__PURE__*/React.createElement("img", {
    src: src,
    alt: alt,
    style: {
      width: "100%",
      height: "100%",
      objectFit: "cover",
      display: "block",
      ...imgStyle
    }
  }), children);
}

/* INTRO — de lockup bouwt zich op, één keer per bezoek.
   1 de twee haken tekenen zich (stroke-draw) vanuit hun hoek.
   2 het woordmerk veegt letter voor letter open, links naar rechts.
   3 de lockup drijft op en het navy gordijn schuift weg. */
const HAAK_A = "M10 6 V46 H42",
  HAAK_B = "M90 72 V32 H58";
const LETTERS = [{
  t: "",
  d: "M0 0 H62 Q100 0 100 38 V62 Q100 100 62 100 H0 Z M20 20 H60 Q80 20 80 40 V60 Q80 80 60 80 H20 Z"
}, {
  t: "translate(125,0)",
  d: "M36 0 H64 Q100 0 100 36 V64 Q100 100 64 100 H36 Q0 100 0 64 V36 Q0 0 36 0 Z M38 20 H62 Q80 20 80 38 V62 Q80 80 62 80 H38 Q20 80 20 62 V38 Q20 20 38 20 Z"
}, {
  t: "translate(254,0)",
  d: "M0 0 H20 V80 H100 V100 H0 Z"
}, {
  t: "translate(373,0)",
  d: "M0 0 H20 V80 H100 V100 H0 Z"
}, {
  t: "translate(494,0)",
  d: "M0 0 H100 V20 H20 V40 H80 V60 H20 V80 H100 V100 H0 Z"
}];
function Intro({
  onDone,
  skip
}) {
  const [phase, setPhase] = React.useState(0);
  React.useEffect(() => {
    if (skip || REDUCE) {
      setPhase(4);
      onDone && onDone();
      return;
    }
    const t = [setTimeout(() => setPhase(1), 60), setTimeout(() => setPhase(2), 700), setTimeout(() => setPhase(3), 1860), setTimeout(() => {
      setPhase(4);
      onDone && onDone();
    }, 2760)];
    return () => t.forEach(clearTimeout);
  }, []);
  if (phase >= 4) return null;
  const drawn = phase >= 1,
    words = phase >= 2,
    leave = phase >= 3;
  const LEN = 72;
  return /*#__PURE__*/React.createElement("div", {
    "aria-hidden": "true",
    style: {
      position: "fixed",
      inset: 0,
      zIndex: 200,
      background: "var(--dolle-navy)",
      display: "grid",
      placeItems: "center",
      clipPath: leave ? "inset(0 0 100% 0)" : "inset(0 0 0 0)",
      transition: "clip-path 820ms " + EASE + " 140ms",
      pointerEvents: leave ? "none" : "auto"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: "min(300px,40vw)",
      transform: leave ? "translateY(-22px)" : "translateY(0)",
      opacity: leave ? 0 : 1,
      transition: "transform 700ms " + EASE + ", opacity 420ms linear"
    }
  }, /*#__PURE__*/React.createElement("svg", {
    viewBox: "0 0 754 100",
    width: "100%",
    style: {
      display: "block",
      overflow: "visible"
    }
  }, /*#__PURE__*/React.createElement("g", {
    transform: "translate(-14,0) scale(1.4)"
  }, /*#__PURE__*/React.createElement("path", {
    d: HAAK_A,
    stroke: "#FFFFFF",
    strokeWidth: "13",
    fill: "none",
    strokeDasharray: LEN,
    style: {
      strokeDashoffset: drawn ? 0 : LEN,
      transition: "stroke-dashoffset 620ms " + EASE
    }
  }), /*#__PURE__*/React.createElement("path", {
    d: HAAK_B,
    stroke: "#FFFFFF",
    strokeWidth: "13",
    fill: "none",
    strokeDasharray: LEN,
    style: {
      strokeDashoffset: drawn ? 0 : LEN,
      transition: "stroke-dashoffset 620ms " + EASE + " 130ms"
    }
  })), /*#__PURE__*/React.createElement("defs", null, LETTERS.map((l, i) => /*#__PURE__*/React.createElement("clipPath", {
    key: i,
    id: "dolle-intro-wipe-" + i
  }, /*#__PURE__*/React.createElement("rect", {
    x: "-6",
    y: "-6",
    width: "112",
    height: "112",
    style: {
      transform: words ? "scaleX(1)" : "scaleX(0)",
      transformOrigin: "0% 50%",
      transformBox: "fill-box",
      transition: "transform 460ms " + EASE + " " + i * 80 + "ms"
    }
  })))), /*#__PURE__*/React.createElement("g", {
    transform: "translate(160,0)"
  }, LETTERS.map((l, i) => /*#__PURE__*/React.createElement("path", {
    key: i,
    fill: "#FFFFFF",
    fillRule: "evenodd",
    transform: l.t || undefined,
    d: l.d,
    clipPath: "url(#dolle-intro-wipe-" + i + ")"
  }))))));
}

/* Tag: het label als gevuld vlakje in donkerder navy. Overal dezelfde maat, op
   de overzichtsrijen en op de casepagina's. */
function DolleTag({
  children,
  style
}) {
  return /*#__PURE__*/React.createElement("span", {
    style: {
      display: "inline-block",
      whiteSpace: "nowrap",
      background: "#0b1730",
      padding: "7px 10px 6px",
      fontFamily: "var(--font-label)",
      fontWeight: "var(--weight-label)",
      fontSize: "var(--size-label-sm)",
      letterSpacing: "var(--track-label-wide)",
      textTransform: "uppercase",
      lineHeight: 1,
      color: "var(--text-body)",
      ...style
    }
  }, children);
}
Object.assign(window, {
  Words,
  Reveal,
  RevealRule,
  Parallax,
  ParallaxImage,
  Intro,
  DolleTag,
  useInViewMotion: useInView
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/Motion.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/OvergangDissolve.jsx
try { (() => {
/* Overgang van het navy cases-blok naar het witte services-blok.
   Dezelfde motor als de hero, in omgekeerde richting: navy wordt wit.
   Het canvas schildert géén wit — het prikt per cel een gat met
   destination-out, zodat de echte witte sectie eronder zichtbaar wordt,
   inclusief kop, WILDLY AHEAD en de knop. Niet wegoptimaliseren naar een
   wit vlak; dan verdwijnt de inhoud eronder.
   CFG en MARK komen ongewijzigd uit de afgestemde versie. */
const OVERGANG_CFG = {
  cell: 12,
  stroke: 10,
  fill: 95,
  direction: "up",
  band: 20,
  speed: 16,
  jitter: 11,
  spread: 62,
  lead: 18,
  minScale: 60,
  tail: 70,
  variant: "flip",
  flipAt: 60,
  flipDur: 15,
  preWhite: 26,
  preAlpha: 60,
  startEarly: 0.95
};
const OVERGANG_NAVY = [16, 31, 60],
  OVERGANG_WIT = [248, 244, 236];
const OVERGANG_MARK_W = 80,
  OVERGANG_MARK_H = 66;
const OVERGANG_MARK = {
  logo: [[[0, 0], [0, 40], [32, 40]], [[80, 66], [80, 26], [48, 26]]],
  frame: [[[0, 40], [0, 0], [32, 0]], [[80, 26], [80, 66], [48, 66]]]
};
const overgangSmooth = t => t <= 0 ? 0 : t >= 1 ? 1 : t * t * (3 - 2 * t);
function OvergangDissolve({
  children
}) {
  const scroller = React.useRef(null);
  const doek = React.useRef(null);
  React.useEffect(() => {
    const cv = doek.current,
      sc = scroller.current;
    if (!cv || !sc) return;
    const ctx = cv.getContext("2d");
    const reduce = window.matchMedia("(prefers-reduced-motion:reduce)").matches;
    const CFG = Object.assign({}, OVERGANG_CFG);
    let W = 0,
      H = 0,
      cols = 0,
      rows = 0,
      thresh = null,
      lastP = -1,
      leeft = true,
      raf = 0,
      rt = null;
    function build() {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      W = cv.clientWidth;
      H = cv.clientHeight;
      cv.width = Math.round(W * dpr);
      cv.height = Math.round(H * dpr);
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      /* Onder 768px zijn 12px-cellen te duur naast een schuivende sticky laag. */
      const cell = W < 768 ? 19 : CFG.cell;
      cols = Math.ceil(W / cell);
      rows = Math.ceil(H / (cell * OVERGANG_MARK_H / OVERGANG_MARK_W));
      thresh = new Float32Array(cols * rows);
      const j = CFG.jitter / 100;
      for (let y = 0; y < rows; y++) for (let x = 0; x < cols; x++) {
        const i = y * cols + x,
          nx = x / (cols - 1 || 1),
          ny = y / (rows - 1 || 1);
        let base;
        switch (CFG.direction) {
          case "down":
            base = ny;
            break;
          case "right":
            base = nx;
            break;
          case "diag":
            base = (nx + ny) / 2;
            break;
          case "radial":
            base = Math.min(1, Math.hypot(nx - 0.5, ny - 0.5) / 0.707);
            break;
          default:
            base = 1 - ny;
        }
        const t = base * (1 - j) + Math.random() * j;
        thresh[i] = Math.min(0.999, Math.max(0, t * (CFG.spread / 100)));
      }
      lastP = -1;
    }
    function render(p) {
      if (!W) return;
      const cw = W / cols,
        ch = H / rows;
      const lw = Math.max(0.5, CFG.stroke / 100 * cw * (CFG.fill / 100));
      const band = Math.max(0.03, CFG.band / 100),
        span = 1 - band;
      const lead = CFG.lead / 100,
        speed = Math.max(0.05, CFG.speed / 100);
      const tail = Math.max(0.05, CFG.tail / 100),
        MINS = CFG.minScale / 100;
      const IN = 0.12;
      const fpt = CFG.flipAt / 100,
        fdur = Math.max(0.02, CFG.flipDur / 100);
      const shrinkFrom = CFG.variant === "flip" ? Math.max(IN, Math.min(0.85, fpt + fdur)) : IN;
      const dpr = Math.min(window.devicePixelRatio || 1, 2);

      /* 1. het volle navy vlak */
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      ctx.globalCompositeOperation = "source-over";
      ctx.clearRect(0, 0, W, H);
      ctx.fillStyle = "rgb(" + OVERGANG_NAVY[0] + "," + OVERGANG_NAVY[1] + "," + OVERGANG_NAVY[2] + ")";
      ctx.fillRect(0, 0, W, H);

      /* 2. per cel een gat prikken, zodat het witte blok eronder doorkomt.
         Gebundeld per dekkingsstap: volle cellen in één pad, de rest in
         zestien stappen. */
      ctx.globalCompositeOperation = "destination-out";
      const gaten = new Map();
      for (let y = 0; y < rows; y++) {
        for (let x = 0; x < cols; x++) {
          const u = (p - thresh[y * cols + x] * span) / band;
          if (u <= 0) continue;
          const a = overgangSmooth(u / speed);
          if (a <= 0.004) continue;
          const q = Math.round(a * 16);
          let pad = gaten.get(q);
          if (!pad) {
            pad = new Path2D();
            gaten.set(q, pad);
          }
          pad.rect(x * cw - 0.4, y * ch - 0.4, cw + 0.8, ch + 0.8);
        }
      }
      gaten.forEach((pad, q) => {
        ctx.globalAlpha = q / 16;
        ctx.fill(pad);
      });
      ctx.globalAlpha = 1;

      /* 3. de schakels: wit zolang de cel dicht is, navy zodra hij opengaat.
         Per frame zijn dit duizenden schakels. Ze worden daarom gebundeld:
         dekking, kleur en lijndikte gaan in stappen, en alles binnen één stap
         gaat als één pad naar de GPU. Zelfde beeld, een fractie van de
         canvas-oproepen — daar zat de hapering. */
      ctx.globalCompositeOperation = "source-over";
      ctx.lineCap = "butt";
      ctx.lineJoin = "miter";
      const pre = Math.max(0.01, CFG.preWhite / 100),
        pAlpha = CFG.preAlpha / 100;
      const bundels = new Map();
      for (let y = 0; y < rows; y++) {
        for (let x = 0; x < cols; x++) {
          const i = y * cols + x;
          const u = (p - thresh[i] * span) / band;
          const v = u + lead;
          if (v <= -pre) continue;
          let scale, alpha;
          if (v <= 0) {
            scale = 1;
            alpha = pAlpha * overgangSmooth((v + pre) / pre);
          } else {
            scale = 1 - (1 - MINS) * overgangSmooth((v - shrinkFrom) / (1 - shrinkFrom));
            alpha = Math.max(pAlpha, overgangSmooth(v / IN));
            if (v > 1) alpha *= 1 - overgangSmooth((v - 1) / tail);
          }
          if (scale <= 0.02 || alpha <= 0.004) continue;
          const mt = CFG.variant === "frame" ? 1 : CFG.variant === "flip" ? overgangSmooth((v - fpt) / fdur) : 0;
          const shape = mt <= 0 ? OVERGANG_MARK.logo : mt >= 1 ? OVERGANG_MARK.frame : OVERGANG_MARK.logo.map((arm, pi) => arm.map((pt, ti) => [pt[0] + (OVERGANG_MARK.frame[pi][ti][0] - pt[0]) * mt, pt[1] + (OVERGANG_MARK.frame[pi][ti][1] - pt[1]) * mt]));
          const uw = cw * (CFG.fill / 100) * scale,
            uh = ch * (CFG.fill / 100) * scale;
          const slw = Math.min(lw, Math.min(uw, uh) * 0.4);
          const ox = x * cw + (cw - uw) / 2 + slw / 2,
            oy = y * ch + (ch - uh) / 2 + slw / 2;
          const kx = (uw - slw) / OVERGANG_MARK_W,
            ky = (uh - slw) / OVERGANG_MARK_H;
          const o = overgangSmooth(u / speed);
          const aQ = Math.round(alpha * 16),
            oQ = Math.round(o * 16),
            sQ = Math.round(slw * 4);
          const sleutel = aQ * 10000 + oQ * 100 + sQ;
          let bundel = bundels.get(sleutel);
          if (!bundel) {
            const q = oQ / 16;
            bundel = {
              pad: new Path2D(),
              alpha: aQ / 16,
              breedte: sQ / 4,
              kleur: "rgb(" + (OVERGANG_WIT[0] + (OVERGANG_NAVY[0] - OVERGANG_WIT[0]) * q | 0) + "," + (OVERGANG_WIT[1] + (OVERGANG_NAVY[1] - OVERGANG_WIT[1]) * q | 0) + "," + (OVERGANG_WIT[2] + (OVERGANG_NAVY[2] - OVERGANG_WIT[2]) * q | 0) + ")"
            };
            bundels.set(sleutel, bundel);
          }
          for (const seg of shape) {
            bundel.pad.moveTo(ox + seg[0][0] * kx, oy + seg[0][1] * ky);
            bundel.pad.lineTo(ox + seg[1][0] * kx, oy + seg[1][1] * ky);
            bundel.pad.lineTo(ox + seg[2][0] * kx, oy + seg[2][1] * ky);
          }
        }
      }
      bundels.forEach(b => {
        ctx.globalAlpha = b.alpha;
        ctx.strokeStyle = b.kleur;
        ctx.lineWidth = b.breedte || 0.5;
        ctx.stroke(b.pad);
      });
      ctx.globalAlpha = 1;
    }
    function progress() {
      if (reduce) return 1;
      const vh = window.innerHeight;
      const head = vh * CFG.startEarly; /* aanloop vóór het vastplakken */
      const total = sc.offsetHeight - vh + head;
      const passed = head - sc.getBoundingClientRect().top;
      return Math.min(1, Math.max(0, passed / total));
    }
    function loop() {
      if (!leeft) return;
      const p = progress();
      /* Klaar of nog niet begonnen: het canvas hoeft niet te bestaan als laag.
         Zo kost de scroll onder de overgang niets en hapert hij niet. */
      const wens = p >= 0.999 || p <= 0 ? "hidden" : "visible";
      if (cv.style.visibility !== wens) cv.style.visibility = wens;
      if (wens === "visible" && Math.abs(p - lastP) > 0.0004) {
        render(p);
        lastP = p;
      }
      raf = requestAnimationFrame(loop);
    }
    const opnieuw = () => {
      clearTimeout(rt);
      rt = setTimeout(build, 120);
    };
    window.addEventListener("resize", opnieuw);
    build();
    loop();
    return () => {
      leeft = false;
      cancelAnimationFrame(raf);
      clearTimeout(rt);
      window.removeEventListener("resize", opnieuw);
    };
  }, []);
  return /*#__PURE__*/React.createElement("section", {
    ref: scroller,
    style: {
      position: "relative",
      zIndex: 2,
      height: "120vh",
      background: "#101F3C"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "sticky",
      top: 0,
      height: "100vh",
      overflow: "hidden",
      background: "#FFFFFF"
    }
  }, children, /*#__PURE__*/React.createElement("canvas", {
    ref: doek,
    "aria-hidden": "true",
    style: {
      position: "absolute",
      inset: 0,
      width: "100%",
      height: "100%",
      display: "block",
      pointerEvents: "none"
    }
  })));
}
Object.assign(window, {
  OvergangDissolve
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/OvergangDissolve.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/Pages.jsx
try { (() => {
const DS = window.DesignSystem_8f95a2;
const {
  Kicker,
  Frame,
  Badge,
  Tag,
  Tabs,
  Button,
  Card,
  Section,
  StatFrame,
  Icon,
  Input,
  Select,
  Checkbox,
  Dialog,
  Toast
} = DS;
const WildlyRotator = DS.WildlyRotator || (({
  size,
  style
}) => /*#__PURE__*/React.createElement(DS.WildlyStatement, {
  statement: "WILDLY VISIBLE",
  size: size,
  style: style
}));
const CornerRule = DS.CornerRule || (({
  children
}) => children || null);
const ALL_CASES = [{
  id: 1,
  dienst: "Launches",
  kicker: "Launches · 2026",
  title: "Relaunching a brand in nine weeks",
  body: "From baseline to campaign, in one continuous production.",
  stat: "+312% reach"
}, {
  id: 2,
  dienst: "Media production",
  kicker: "Media production · 2025",
  title: "Imagery that sticks",
  body: "A season of strategic media, produced offline and online.",
  stat: "4.1M views"
}, {
  id: 3,
  dienst: "AI systems",
  kicker: "AI systems · 2026",
  title: "Content that multiplies itself",
  body: "A system that delivers new visibility every week.",
  stat: "6× output"
}, {
  id: 4,
  dienst: "Growth",
  kicker: "Growth · 2025",
  title: "From reach to revenue",
  body: "Channels measured, budget moved, result recorded.",
  stat: "+41% revenue"
}, {
  id: 5,
  dienst: "Media production",
  kicker: "Media production · 2026",
  title: "Product film for a launch",
  body: "One shoot day, three channels, one story.",
  stat: "1.8M views"
}, {
  id: 6,
  dienst: "Launches",
  kicker: "Launches · 2025",
  title: "A new brand in the market",
  body: "Positioning, imagery and launch campaign in one track.",
  stat: "+220% reach"
}];
function CaseDetail({
  go
}) {
  /* De aangeklikte case bepaalt de pagina; zonder keuze de eerste. */
  const lijst = window.CASES || [];
  const c = lijst.filter(x => x.id === window.DOLLE_CASE)[0] || lijst[0] || null;
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("section", {
    className: "dolle-dark",
    style: {
      background: "var(--dolle-navy)",
      padding: "var(--space-9) var(--page-margin)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: "var(--content-max)",
      margin: "0 auto",
      display: "grid",
      gap: "var(--space-8)"
    }
  }, /*#__PURE__*/React.createElement("button", {
    onClick: () => go("cases"),
    style: {
      appearance: "none",
      background: "none",
      border: 0,
      padding: 0,
      cursor: "pointer",
      display: "flex",
      alignItems: "center",
      gap: "var(--space-2)",
      color: "var(--text-muted)"
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "arrow-left",
    size: 14
  }), /*#__PURE__*/React.createElement(Kicker, {
    as: "span",
    size: "sm"
  }, "All cases")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "1.2fr 1fr",
      gap: "var(--grid-gap)",
      alignItems: "end"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gap: "var(--space-5)"
    }
  }, /*#__PURE__*/React.createElement(Reveal, null, /*#__PURE__*/React.createElement(Kicker, null, c ? c.dienst + " · " + c.jaar : "Launches · 2026")), /*#__PURE__*/React.createElement(Words, {
    as: "h1",
    text: c ? c.klant : "Relaunching a brand in nine weeks.",
    delay: 100,
    style: {
      maxWidth: "20ch"
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gap: "var(--space-4)",
      justifyItems: "start"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: "var(--space-6)",
      flexWrap: "wrap"
    }
  }, (c ? c.kaders : ["Launch"]).map((k, i) => /*#__PURE__*/React.createElement(Badge, {
    key: k,
    tone: i === 0 ? "strong" : undefined
  }, k))), /*#__PURE__*/React.createElement("p", {
    className: "dolle-lead",
    style: {
      margin: 0
    }
  }, c ? c.title + " " + c.body : "A brand whose reach had stalled."))), /*#__PURE__*/React.createElement(Reveal, {
    delay: 220
  }, /*#__PURE__*/React.createElement(CornerRule, {
    corners: "tl-br",
    size: 26,
    inset: 16,
    tone: "strong"
  }, c ? /*#__PURE__*/React.createElement(ParallaxImage, {
    src: c.beeld,
    speed: 0.12,
    style: {
      aspectRatio: "16 / 9",
      background: "#0b1730"
    }
  }) : /*#__PURE__*/React.createElement(MediaPlaceholder, {
    tone: "dark",
    height: 440,
    label: "Case imagery \xB7 16:9"
  }))))), /*#__PURE__*/React.createElement(Section, {
    kicker: "The intervention",
    title: "One production, three channels.",
    intro: "Nine weeks: week 1 baseline and positioning, weeks 2\u20135 production, weeks 6\u20139 rollout and measurement. One crew, one story, three channels that reinforce each other."
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(3,minmax(0,1fr))",
      gap: "var(--grid-gap)"
    }
  }, /*#__PURE__*/React.createElement(Reveal, null, /*#__PURE__*/React.createElement(Card, {
    corner: true,
    kicker: "Starting point",
    title: "Reach had stalled"
  }, "Twelve months of flat reach, no fixed production rhythm.")), /*#__PURE__*/React.createElement(Reveal, {
    delay: 140
  }, /*#__PURE__*/React.createElement(Card, {
    corner: true,
    kicker: "Intervention",
    title: "Relaunch + system"
  }, "New positioning, one production block, weekly rollout.")), /*#__PURE__*/React.createElement(Reveal, {
    delay: 280
  }, /*#__PURE__*/React.createElement(Card, {
    corner: true,
    kicker: "Result",
    title: c ? c.stat : "+312% reach"
  }, c ? c.label + "." : "Measured over the 90 days after the relaunch.")))), /*#__PURE__*/React.createElement("section", {
    style: {
      background: "var(--surface-sunk)",
      padding: "var(--section-gap) var(--page-margin)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: "var(--content-max)",
      margin: "0 auto",
      display: "grid",
      gridTemplateColumns: "1fr auto",
      gap: "var(--space-9)",
      alignItems: "center"
    }
  }, /*#__PURE__*/React.createElement(Frame, {
    size: 64
  }, /*#__PURE__*/React.createElement("blockquote", {
    style: {
      margin: 0,
      fontFamily: "var(--font-core)",
      fontWeight: "var(--weight-heading)",
      fontSize: "26px",
      letterSpacing: "var(--track-heading)",
      lineHeight: 1.3,
      color: "var(--text-heading)",
      maxWidth: "28ch"
    }
  }, "\"Visible where the attention is.\""), /*#__PURE__*/React.createElement(Kicker, {
    style: {
      marginTop: "var(--space-5)"
    }
  }, "Marketing lead \xB7 client")), /*#__PURE__*/React.createElement(StatFrame, {
    value: c ? c.stat : "+312%",
    label: c ? c.label : "Reach · 90 days",
    size: 64
  }))));
}
Object.assign(window, {
  CaseDetail,
  ALL_CASES
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/Pages.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/SchakelFrame.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/* SCHAKEL-FRAME — de merkbeweging als los element.
   Dicht: de twee haakjes liggen samen als schakelblok (links, verticaal
   gecentreerd). Open: ze worden groter, reizen naar linksboven en rechtsonder en
   draaien 90° naar de frame-stand, zodat ze het hele blok kaderen. Eén beweging,
   geen stuiter — alleen transform, dus de schaal loopt mee in dezelfde tik.

   open (prop) bestuurt hem van buiten; zonder die prop opent hij op hover of tap.
   mode="static" zet hem vast. prefers-reduced-motion: geen animatie. */
const HAAK = {
  a: "M10 6 V46 H42",
  b: "M90 72 V32 H58"
};
function SchakelHaak({
  which,
  size,
  grow,
  open,
  box,
  inset,
  reduce
}) {
  const w = size;
  const h = Math.round(size * 0.78);
  const a = which === "a";
  /* Alles rekent met het middelpunt: gedraaid is de zichtbare voet h×w, dus
     schalen en roteren verschuiven de randen voorspelbaar. */
  const g = open ? grow : 1;
  const vw = (open ? h : w) * g; /* zichtbare breedte */
  const vh = (open ? w : h) * g; /* zichtbare hoogte */
  const cx = open ? a ? inset + vw / 2 : box.w - inset - vw / 2 : inset + vw / 2;
  const cy = open ? a ? inset + vh / 2 : box.h - inset - vh / 2 : box.h / 2;
  const x = cx - w / 2;
  const y = cy - h / 2;
  return /*#__PURE__*/React.createElement("svg", {
    "aria-hidden": "true",
    viewBox: "0 0 100 78",
    width: w,
    height: h,
    fill: "none",
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      transform: "translate(" + x + "px," + y + "px) rotate(" + (open ? 90 : 0) + "deg) scale(" + g + ")",
      transformOrigin: "50% 50%",
      pointerEvents: "none",
      transition: reduce ? "none" : "transform var(--dur-frame) var(--ease-dolle)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: HAAK[which],
    stroke: "currentColor",
    strokeWidth: "9"
  }));
}
function SchakelFrame({
  children,
  open,
  onToggle,
  onMouseEnter,
  onMouseLeave,
  mode = "hover",
  size = 22,
  grow = 2.4,
  inset = 12,
  padExtra = 14,
  style,
  ...rest
}) {
  const controlled = open != null;
  const [hover, setHover] = React.useState(false);
  const [tapped, setTapped] = React.useState(false);
  const [box, setBox] = React.useState({
    w: 0,
    h: 0
  });
  const ref = React.useRef(null);
  const reduce = typeof window !== "undefined" && window.matchMedia ? window.matchMedia("(prefers-reduced-motion: reduce)").matches : false;
  const isOpen = controlled ? open : mode !== "static" && (hover || tapped);
  React.useLayoutEffect(() => {
    const el = ref.current;
    if (!el) return;
    const measure = () => setBox({
      w: el.clientWidth,
      h: el.clientHeight
    });
    measure();
    if (typeof ResizeObserver === "undefined") return;
    const ro = new ResizeObserver(measure);
    ro.observe(el);
    return () => ro.disconnect();
  }, [children, isOpen]);
  const interactive = mode !== "static";
  const toggle = onToggle || (controlled ? null : () => setTapped(v => !v));
  /* Lucht voor de haken: open staan ze groter, dus schuift de content verder in. */
  const pad = (isOpen ? Math.round(size * grow * 0.78) + inset : size + inset) + padExtra;
  return /*#__PURE__*/React.createElement("div", _extends({
    ref: ref,
    onMouseEnter: interactive ? e => {
      setHover(true);
      if (onMouseEnter) onMouseEnter(e);
    } : onMouseEnter,
    onMouseLeave: interactive ? e => {
      setHover(false);
      if (onMouseLeave) onMouseLeave(e);
    } : onMouseLeave,
    onClick: interactive && toggle ? toggle : undefined,
    onKeyDown: interactive && toggle ? e => {
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        toggle();
      }
    } : undefined,
    tabIndex: interactive ? 0 : undefined,
    role: interactive ? "button" : undefined,
    "aria-expanded": interactive ? !!isOpen : undefined,
    style: {
      position: "relative",
      color: "var(--mark-color)",
      cursor: interactive ? "pointer" : undefined,
      paddingLeft: pad + "px",
      paddingRight: pad + "px",
      transition: reduce ? "none" : "padding var(--dur-frame) var(--ease-dolle)",
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement(SchakelHaak, {
    which: "a",
    size: size,
    grow: grow,
    open: isOpen,
    box: box,
    inset: inset,
    reduce: reduce
  }), /*#__PURE__*/React.createElement(SchakelHaak, {
    which: "b",
    size: size,
    grow: grow,
    open: isOpen,
    box: box,
    inset: inset,
    reduce: reduce
  }), children);
}
Object.assign(window, {
  SchakelFrame
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/SchakelFrame.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/Services.jsx
try { (() => {
const DS = window.DesignSystem_8f95a2;
const {
  Kicker,
  Button,
  Icon,
  StatFrame
} = DS;

/* SERVICES — kop, dan de vier diensten als gepinde stapel, en de vraag. */

const SERVICES_PAGE = [{
  t: "Media production",
  w: "VISIBLE",
  body: "We specialise in producing strategic media. We tie image to story and turn it into campaigns that stick.",
  growth: "The launch calls for image and story that stick.",
  cases: [{
    naam: "Montel",
    beeld: "../../assets/cases/web/case-03.jpg"
  }, {
    naam: "Blue Rivet",
    beeld: "../../assets/cases/web/case-04.jpg"
  }, {
    naam: "Nobotel",
    beeld: "../../assets/cases/web/case-05.jpg"
  }, {
    naam: "Parformance",
    beeld: "../../assets/cases/web/case-01.jpg"
  }, {
    naam: "Dalton",
    beeld: "../../assets/cases/web/case-06.jpg"
  }]
}, {
  t: "Launches",
  w: "FORWARD",
  body: "We help brands and products launch. We dive into a brand's DNA and build the strategy for its launch around it.",
  growth: "The launch sets the brand in motion.",
  cases: [{
    naam: "Parformance",
    beeld: "../../assets/cases/web/case-01.jpg"
  }, {
    naam: "Derma-pen",
    beeld: "../../assets/cases/web/case-02.jpg"
  }, {
    naam: "Montel",
    beeld: "../../assets/cases/web/case-03.jpg"
  }, {
    naam: "Blue Rivet",
    beeld: "../../assets/cases/web/case-04.jpg"
  }, {
    naam: "Dalton",
    beeld: "../../assets/cases/web/case-06.jpg"
  }]
}, {
  t: "AI systems",
  w: "AHEAD",
  body: "We build systems that scale visibility. Systems that let companies run their marketing autonomously.",
  growth: "Systems multiply that image, week after week.",
  cases: [{
    naam: "Nobotel",
    beeld: "../../assets/cases/web/case-05.jpg"
  }, {
    naam: "Dalton",
    beeld: "../../assets/cases/web/case-06.jpg"
  }, {
    naam: "Parformance",
    beeld: "../../assets/cases/web/case-01.jpg"
  }, {
    naam: "Derma-pen",
    beeld: "../../assets/cases/web/case-02.jpg"
  }, {
    naam: "Montel",
    beeld: "../../assets/cases/web/case-03.jpg"
  }]
}, {
  t: "Growth",
  w: "DRIVEN",
  body: "We are wildly driven by growth. We steer on measurable results, from reach to revenue.",
  growth: "Results are measured, and feed the next launch.",
  cases: [{
    naam: "Derma-pen",
    beeld: "../../assets/cases/web/case-02.jpg"
  }, {
    naam: "Blue Rivet",
    beeld: "../../assets/cases/web/case-04.jpg"
  }, {
    naam: "Dalton",
    beeld: "../../assets/cases/web/case-06.jpg"
  }, {
    naam: "Nobotel",
    beeld: "../../assets/cases/web/case-05.jpg"
  }, {
    naam: "Parformance",
    beeld: "../../assets/cases/web/case-01.jpg"
  }]
}];

/* Rustiger dan de UI-tik: het ontvouwen loopt over ruim een seconde, in één
   beweging, zodat de onderkant zich als een zeil openvouwt. */
const UNFOLD = "1100ms cubic-bezier(.16,.84,.24,1)";
/* Kaartbeweging: iets korter dan het ontvouwen, zelfde rust. */
const KAART = "1300ms cubic-bezier(.2,.72,.16,1)";

/* Casekaart in de rij: gesloten een smalle strook beeld, geopend het hele
   venster met naam en leesactie in beeld. Geen haken, geen scrollbalk. */
function ServiceCase({
  item,
  go,
  actief,
  onHover,
  basis
}) {
  return /*#__PURE__*/React.createElement("div", {
    className: "dolle-dark",
    onMouseEnter: onHover,
    onFocus: onHover,
    onClick: e => {
      e.stopPropagation();
      go("case");
    },
    style: {
      position: "relative",
      height: "100%",
      minWidth: 0,
      flex: "0 0 " + basis,
      overflow: "hidden",
      background: "var(--dolle-navy)",
      cursor: "pointer",
      willChange: "flex-basis",
      transition: "flex-basis " + KAART
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: item.beeld,
    alt: "",
    loading: "lazy",
    decoding: "async",
    style: {
      position: "absolute",
      inset: 0,
      width: "100%",
      height: "100%",
      objectFit: "cover",
      opacity: actief ? 1 : 0.62,
      transform: actief ? "scale(1)" : "scale(1.06)",
      transition: "opacity " + KAART + ", transform 1800ms cubic-bezier(.2,.72,.16,1)"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      inset: 0,
      background: "linear-gradient(180deg, rgba(20,32,58,0.55), rgba(20,32,58,0.78))",
      opacity: actief ? 0 : 1,
      transition: "opacity " + KAART
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      inset: 0,
      background: "var(--gradient-protect)",
      opacity: actief ? 1 : 0,
      transition: "opacity " + KAART
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      right: 0,
      bottom: "var(--space-8)",
      display: "grid",
      gap: "var(--space-3)",
      justifyItems: "center",
      textAlign: "center",
      padding: "0 var(--space-5)",
      opacity: actief ? 1 : 0,
      transform: actief ? "none" : "translateY(10px)",
      transition: actief ? "opacity 700ms ease 520ms, transform 1100ms cubic-bezier(.2,.72,.16,1) 420ms" : "opacity 260ms ease, transform 260ms ease"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-label)",
      fontWeight: 600,
      fontSize: "var(--size-body-sm)",
      letterSpacing: "0.18em",
      textTransform: "uppercase",
      whiteSpace: "nowrap",
      color: "var(--dolle-white)"
    }
  }, item.naam), /*#__PURE__*/React.createElement(Button, {
    variant: "link",
    tabIndex: actief ? 0 : -1,
    onClick: e => {
      e.stopPropagation();
      go("case");
    },
    style: {
      color: "var(--dolle-white)"
    }
  }, "Watch case")));
}

/* Vijf cases naast elkaar: de aangewezen kaart vult het venster, de rest blijft
   als smalle strook staan. Zonder hover staat de eerste open. Onder 1100px is er
   geen ruimte voor vijf stroken naast een leesbare kaart: dan drie cases en een
   smallere strook, zodat de naam en "watch case" heel in beeld blijven. */
function CasesRij({
  cases,
  go
}) {
  const [actief, setActief] = React.useState(0);
  const [smal, setSmal] = React.useState(false);
  React.useEffect(() => {
    if (!window.matchMedia) return;
    const mq = window.matchMedia("(max-width: 1100px)");
    const zet = () => setSmal(mq.matches);
    zet();
    if (mq.addEventListener) {
      mq.addEventListener("change", zet);
      return () => mq.removeEventListener("change", zet);
    }
  }, []);
  const rij = smal ? cases.slice(0, 3) : cases;
  const strook = smal ? 46 : 84;
  return /*#__PURE__*/React.createElement("div", {
    "data-strip": "",
    style: {
      display: "flex",
      gap: "2px",
      height: "var(--case-h, clamp(320px,32vw,520px))",
      overflow: "hidden",
      borderRadius: "8px"
    }
  }, rij.map((c, i) => /*#__PURE__*/React.createElement(ServiceCase, {
    key: c.naam + i,
    item: c,
    go: go,
    actief: actief === i,
    basis: actief === i ? "calc(100% - " + (rij.length - 1) * (strook + 2) + "px)" : strook + "px",
    onHover: () => setActief(i)
  })));
}

/* Eén dienst per blok: kop (schakel + naam) altijd heel in beeld, daaronder de
   tekst en de vijf cases. --p is de dichtstand: 0 open, 1 samengeklapt tot band.
   De scroll schrijft --p rechtstreeks op de wrapper; nul React-renders. */
function ServiceBlok({
  s,
  go,
  wakker,
  kopRef,
  innerRef
}) {
  const terug = {
    opacity: "clamp(0, calc(1 - var(--p, 0) * 1.8), 1)",
    transform: "translateY(calc(var(--p, 0) * -20px))"
  };
  return /*#__PURE__*/React.createElement("div", {
    ref: innerRef,
    style: {
      padding: "var(--space-5) var(--space-6) var(--space-5) var(--space-7)",
      display: "grid",
      gridTemplateColumns: "minmax(0,1fr) minmax(0,1.7fr)",
      gap: "calc(var(--grid-gap) * 1.2)",
      alignItems: "start"
    }
  }, /*#__PURE__*/React.createElement("div", {
    "data-tekst": "",
    style: {
      display: "grid",
      gap: "var(--space-5)",
      alignContent: "start"
    }
  }, /*#__PURE__*/React.createElement("div", {
    ref: kopRef,
    style: {
      display: "flex",
      alignItems: "center",
      gap: "var(--space-4)"
    }
  }, /*#__PURE__*/React.createElement(Reveal, {
    as: "span",
    "aria-hidden": "true",
    style: {
      display: "flex",
      flex: "0 0 auto",
      color: "var(--text-heading)"
    }
  }, /*#__PURE__*/React.createElement("svg", {
    viewBox: "0 0 100 78",
    width: "32",
    height: "25",
    fill: "none"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M12 6 V44 H44",
    stroke: "currentColor",
    strokeWidth: "14"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M88 72 V34 H56",
    stroke: "currentColor",
    strokeWidth: "14"
  }))), /*#__PURE__*/React.createElement(Words, {
    as: "h2",
    text: s.t,
    delay: 90,
    style: {
      margin: 0,
      fontSize: "clamp(24px,2.4vw,38px)",
      lineHeight: "var(--lh-heading)",
      paddingBottom: "0.08em"
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gap: "var(--space-4)",
      justifyItems: "start",
      ...terug
    }
  }, /*#__PURE__*/React.createElement(Reveal, {
    as: "span",
    delay: 160,
    style: {
      fontFamily: "var(--font-core)",
      fontWeight: "var(--weight-heading)",
      fontSize: "clamp(16px,1.4vw,22px)",
      letterSpacing: "var(--track-wildly)",
      textTransform: "uppercase",
      whiteSpace: "nowrap",
      color: "var(--text-heading)"
    }
  }, "Wildly ", /*#__PURE__*/React.createElement("span", {
    style: {
      color: "var(--text-accent)"
    }
  }, s.w)), /*#__PURE__*/React.createElement(Reveal, {
    delay: 240
  }, /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontSize: "var(--size-body)",
      lineHeight: "var(--lh-body)",
      color: "var(--text-body)",
      maxWidth: "42ch"
    }
  }, s.body)), /*#__PURE__*/React.createElement(Reveal, {
    delay: 340
  }, /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontSize: "var(--size-body-sm)",
      lineHeight: "var(--lh-body)",
      color: "var(--text-muted)",
      maxWidth: "42ch"
    }
  }, s.growth)), /*#__PURE__*/React.createElement(Reveal, {
    delay: 440
  }, /*#__PURE__*/React.createElement(Button, {
    size: "sm",
    onClick: ev => {
      ev.stopPropagation();
      go("cases");
    }
  }, "Learn more")))), /*#__PURE__*/React.createElement("div", {
    style: terug
  }, /*#__PURE__*/React.createElement(Reveal, {
    delay: 200
  }, wakker ? /*#__PURE__*/React.createElement(CasesRij, {
    cases: s.cases,
    go: go
  }) : /*#__PURE__*/React.createElement("div", {
    style: {
      height: "var(--case-h, clamp(320px,32vw,520px))"
    }
  }))));
}

/* DE STAPEL — dezelfde beweging als de referentie: alle vier de blokken staan
   open in de pagina; zodra een blok de bovenrand raakt blijft het daar plakken
   en klapt het samen tot een band, waarna het volgende blok er direct onder
   open komt te staan. De banden stapelen zich zo bovenaan op. Omkeerbaar: de
   stand van elk blok is een pure functie van de scrollpositie.

   De stapel staat op een gepind podium met een eigen scrollweg: het podium
   blijft onder de navigatie plakken terwijl de scroll de blokken één voor één
   dichtklapt. Daardoor is de stand een pure functie van de scrollpositie (dus
   omkeerbaar) en verandert de paginahoogte niet tijdens de beweging. De band
   krijgt exact de hoogte van de kop, dus de naam staat er altijd heel in. Het
   laatste blok rolt als laatste mee op. */
const GAP = 10;
function ServiceStack({
  go,
  header
}) {
  const spoor = React.useRef(null); /* scrollweg van de beweging */
  const podium = React.useRef(null); /* blijft plakken onder de navigatie */
  const rijen = React.useRef([]);
  const koppen = React.useRef([]);
  const binnen = React.useRef([]);
  const maten = React.useRef(SERVICES_PAGE.map(() => ({
    band: 120,
    exp: 560
  })));
  const stand = React.useRef(SERVICES_PAGE.map(() => 0));
  const [nav, setNav] = React.useState(88);
  const [wakker, setWakker] = React.useState(false);
  /* Past de stapel niet in het beeld, dan geen gepind podium: de blokken staan
     dan gewoon open onder elkaar in de pagina. Beter een gewone scroll dan een
     gepind vlak waarin de onderkant van een blok onbereikbaar is. */
  const [gepind, setGepind] = React.useState(true);
  const pogingen = React.useRef(0);
  const slot = React.useRef({
    besch: 600,
    d: 0
  });
  const reduce = typeof window !== "undefined" && window.matchMedia ? window.matchMedia("(prefers-reduced-motion: reduce)").matches : false;
  const laatste = SERVICES_PAGE.length - 1;

  /* De beelden komen één frame na de eerste tekening in de pagina. */
  React.useEffect(() => {
    const t = setTimeout(() => setWakker(true), 60);
    return () => clearTimeout(t);
  }, []);
  React.useEffect(() => {
    let raf = 0;
    const stap = () => Math.max(300, Math.min(560, (window.innerHeight || 800) * 0.5));
    const MIN_STRIP = 150;
    const pad2 = () => {
      const v = binnen.current[0];
      if (!v) return 48;
      const cs = getComputedStyle(v);
      return parseFloat(cs.paddingTop) + parseFloat(cs.paddingBottom);
    };
    const meet = () => {
      const h = document.querySelector("header");
      const nh = h && h.offsetHeight ? h.offsetHeight : 88;
      if (nh !== nav) setNav(nh);
      let banden = 0,
        hoogste = 0,
        tekstH = 0;
      rijen.current.forEach((el, i) => {
        const kop = koppen.current[i],
          vak = binnen.current[i];
        if (!el || !kop || !vak) return;
        const rk = kop.getBoundingClientRect(),
          rv = vak.getBoundingClientRect();
        const pad = Math.max(0, rk.top - rv.top);
        const band = Math.round(rk.height + pad + Math.min(pad, 14));
        const exp = Math.max(Math.round(vak.offsetHeight), band);
        const tk = vak.querySelector("[data-tekst]");
        if (tk) tekstH = Math.max(tekstH, Math.round(tk.getBoundingClientRect().height + pad * 2));
        maten.current[i] = {
          band,
          exp
        };
        el.style.setProperty("--band", String(band));
        el.style.setProperty("--exp", String(exp));
        if (i < laatste) banden += band + GAP;
        if (exp > hoogste) hoogste = exp;
      });
      /* Het podium is precies één beeld hoog. De gestapelde banden plus het open
         blok moeten daar heel in passen; is dat te krap, dan krimpt eerst de
         casestrook mee. Lukt dat ook niet, dan valt de stapel terug op een
         gewone pagina-scroll — nooit een gepind vlak met onbereikbare onderkant. */
      const beschikbaar = Math.max(320, (window.innerHeight || 800) - nh - 24);
      const nodig = banden + hoogste;
      const vak = podium.current;
      if (vak && !reduce && pogingen.current < 6) {
        const strook = vak.querySelector("[data-strip]");
        const strookH = strook ? Math.round(strook.getBoundingClientRect().height) : 0;
        const tekort = nodig - beschikbaar;
        /* Krimpen heeft alleen zin als de stapel er dan écht in past; anders is
           de tekstkolom de hoogste en houden we de strook op zijn volle maat. */
        const vloer = Math.max(MIN_STRIP, tekstH - pad2());
        const haalbaar = banden + Math.max(tekstH, vloer) <= beschikbaar + 8;
        if (strookH && tekort > 4 && haalbaar) {
          const nieuw = Math.max(vloer, strookH - tekort);
          if (Math.abs(nieuw - strookH) > 4) {
            pogingen.current += 1;
            vak.style.setProperty("--case-h", nieuw + "px");
            requestAnimationFrame(meet);
            return;
          }
        } else if (strookH && tekort < -8 && vak.style.getPropertyValue("--case-h")) {
          pogingen.current += 1;
          vak.style.removeProperty("--case-h");
          requestAnimationFrame(meet);
          return;
        }
      }
      const past = nodig <= beschikbaar + 8;
      /* Geen gepind podium betekent gewone scroll, en dan mag de strook weer op
         zijn volle hoogte staan. */
      if (!past && vak && vak.style.getPropertyValue("--case-h")) vak.style.removeProperty("--case-h");
      if (past !== gepind) setGepind(past);
      if (podium.current && !reduce) podium.current.style.height = past ? beschikbaar + "px" : "auto";
      /* Laatste fase: ook Growth klapt in. Het podium krimpt dan precies even
         snel als er gescrold wordt, zodat de sectie eronder meeschuift en
         zichtbaar wordt terwijl de vier banden bovenaan blijven staan. */
      const alleBanden = maten.current.reduce((t, m) => t + m.band, 0) + GAP * laatste;
      slot.current = {
        besch: beschikbaar,
        d: Math.max(0, beschikbaar - alleBanden)
      };
      if (spoor.current && !reduce) spoor.current.style.height = past ? beschikbaar + laatste * stap() + "px" : "auto";
      tick();
    };
    const soft = x => x * x * (3 - 2 * x);
    const tick = () => {
      raf = 0;
      if (!spoor.current) return;
      if (reduce || !gepind) {
        rijen.current.forEach(el => el && el.style.setProperty("--p", "0"));
        return;
      }
      const h = document.querySelector("header");
      const nh = h && h.offsetHeight ? h.offsetHeight : nav;
      const weg = nh - spoor.current.getBoundingClientRect().top;
      const u = weg / stap();
      const {
        besch,
        d
      } = slot.current;
      const q = d > 0 ? Math.min(1, Math.max(0, (weg - laatste * stap()) / d)) : u >= laatste ? 1 : 0;
      if (podium.current) podium.current.style.height = (besch - q * d).toFixed(1) + "px";
      rijen.current.forEach((el, i) => {
        if (!el) return;
        let p = soft(Math.min(1, Math.max(0, u - i)));
        if (i === laatste) {
          const m = maten.current[i],
            e = Math.max(1, m.exp - m.band);
          p = 1 - Math.min(1, d * (1 - q) / e);
        }
        if (Math.abs(p - stand.current[i]) > 0.0005) {
          stand.current[i] = p;
          el.style.setProperty("--p", p.toFixed(4));
        }
      });
    };
    const on = () => {
      if (!raf) raf = requestAnimationFrame(tick);
    };
    const opnieuw = () => {
      pogingen.current = 0;
      meet();
    };
    meet();
    let ro;
    if (typeof ResizeObserver !== "undefined") {
      ro = new ResizeObserver(() => meet());
      binnen.current.forEach(el => el && ro.observe(el));
    }
    window.addEventListener("scroll", on, {
      passive: true,
      capture: true
    });
    window.addEventListener("resize", opnieuw);
    return () => {
      window.removeEventListener("scroll", on, true);
      window.removeEventListener("resize", opnieuw);
      if (ro) ro.disconnect();
      if (raf) cancelAnimationFrame(raf);
    };
  }, [reduce, wakker, laatste, nav, gepind]);
  return /*#__PURE__*/React.createElement("div", null, header, /*#__PURE__*/React.createElement("div", {
    ref: spoor,
    style: {
      position: "relative",
      marginTop: "var(--space-9)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    ref: podium,
    style: {
      position: reduce || !gepind ? "relative" : "sticky",
      top: reduce || !gepind ? undefined : nav + "px",
      overflow: reduce || !gepind ? "visible" : "hidden",
      display: "grid",
      gap: GAP + "px",
      alignContent: "start"
    }
  }, SERVICES_PAGE.map((s, i) => /*#__PURE__*/React.createElement("div", {
    key: s.t,
    ref: el => {
      rijen.current[i] = el;
    },
    style: {
      "--p": 0,
      background: "var(--surface-page)",
      borderRadius: "10px",
      overflow: "hidden",
      height: reduce || !gepind ? "auto" : "calc((var(--band, 0) + (1 - var(--p, 0)) * (var(--exp, 0) - var(--band, 0))) * 1px)"
    }
  }, /*#__PURE__*/React.createElement(ServiceBlok, {
    s: s,
    go: go,
    wakker: wakker,
    kopRef: el => {
      koppen.current[i] = el;
    },
    innerRef: el => {
      binnen.current[i] = el;
    }
  }))))));
}

/* Cultuurband: de topbeelden van DOLLE als swipebare strook (touch, trackpad,
   muis slepen). Daaronder een eigen gebroken-witte band waarin de zin
   met parallax omhoog komt. */
const DN_C = "../../assets/cases/";
const DN_BAND = [DN_C + "woonexpress/woonexpress-still-01-web.jpg", DN_C + "eezy/eezy-still-01-web.jpg", DN_C + "kiela/kiela-still-01-web.jpg", DN_C + "vst/vst-still-01-web.jpg", DN_C + "hangeleven/hangeleven-opening-web.jpg", DN_C + "pietklerkx/pk-still-01-web.jpg", DN_C + "woonexpress/woonexpress-still-02-web.jpg", DN_C + "eezy/eezy-still-02-web.jpg", DN_C + "kiela/kiela-still-02-web.jpg", DN_C + "vst/vst-still-02-web.jpg", DN_C + "hangeleven/hangeleven-still-01-web.jpg", DN_C + "pietklerkx/pk-still-02-web.jpg"];
function CultuurBand() {
  const strook = React.useRef(null);
  const band = React.useRef(null);
  const tekst = React.useRef(null);
  React.useEffect(() => {
    const el = strook.current;
    if (!el) return;
    let neer = false,
      x0 = 0,
      s0 = 0,
      bewogen = false;
    const down = e => {
      if (e.pointerType !== "mouse") return;
      neer = true;
      bewogen = false;
      x0 = e.clientX;
      s0 = el.scrollLeft;
      el.style.scrollSnapType = "none";
      el.style.cursor = "grabbing";
    };
    const move = e => {
      if (!neer) return;
      const dx = e.clientX - x0;
      if (Math.abs(dx) > 3) bewogen = true;
      el.scrollLeft = s0 - dx;
    };
    const up = () => {
      if (!neer) return;
      neer = false;
      el.style.cursor = "grab";
      el.style.scrollSnapType = "x mandatory";
    };
    const klik = e => {
      if (bewogen) {
        e.preventDefault();
        e.stopPropagation();
      }
    };
    el.addEventListener("pointerdown", down);
    window.addEventListener("pointermove", move);
    window.addEventListener("pointerup", up);
    el.addEventListener("click", klik, true);
    return () => {
      el.removeEventListener("pointerdown", down);
      window.removeEventListener("pointermove", move);
      window.removeEventListener("pointerup", up);
      el.removeEventListener("click", klik, true);
    };
  }, []);
  React.useEffect(() => {
    const reduce = window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) return;
    let raf = 0;
    const tik = () => {
      raf = 0;
      const b = band.current,
        t = tekst.current;
      if (!b || !t) return;
      const r = b.getBoundingClientRect(),
        vh = window.innerHeight || 800;
      const p = Math.max(0, Math.min(1, (vh - r.top) / (vh + r.height)));
      const y = (0.5 - p) * Math.min(260, vh * 0.3);
      const o = Math.max(0, Math.min(1, (p - 0.12) / 0.3));
      t.style.transform = "translate3d(0," + y.toFixed(1) + "px,0)";
      t.style.opacity = o.toFixed(3);
    };
    const op = () => {
      if (!raf) raf = requestAnimationFrame(tik);
    };
    tik();
    window.addEventListener("scroll", op, {
      passive: true,
      capture: true
    });
    window.addEventListener("resize", op);
    return () => {
      window.removeEventListener("scroll", op, true);
      window.removeEventListener("resize", op);
      if (raf) cancelAnimationFrame(raf);
    };
  }, []);
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("section", {
    style: {
      background: "var(--dolle-white)",
      padding: "var(--space-8) 0 var(--space-9)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      padding: "0 var(--page-margin) var(--space-5)"
    }
  }, /*#__PURE__*/React.createElement(Kicker, null, "Our culture")), /*#__PURE__*/React.createElement("div", {
    ref: strook,
    className: "dn-swipe",
    style: {
      display: "flex",
      gap: "var(--space-3)",
      overflowX: "auto",
      overflowY: "hidden",
      scrollSnapType: "x mandatory",
      scrollPaddingInline: "var(--page-margin)",
      padding: "0 var(--page-margin)",
      WebkitOverflowScrolling: "touch",
      overscrollBehaviorX: "contain",
      cursor: "grab",
      scrollbarWidth: "none"
    }
  }, DN_BAND.map((src, i) => /*#__PURE__*/React.createElement("span", {
    key: i,
    style: {
      flex: "0 0 auto",
      width: "clamp(320px,52vw,880px)",
      aspectRatio: "3 / 2",
      overflow: "hidden",
      borderRadius: 6,
      background: "var(--surface-sunk)",
      scrollSnapAlign: "start"
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: src,
    alt: "",
    draggable: "false",
    loading: "lazy",
    decoding: "async",
    style: {
      display: "block",
      width: "100%",
      height: "100%",
      objectFit: "cover",
      pointerEvents: "none",
      userSelect: "none"
    }
  })))), /*#__PURE__*/React.createElement("style", null, ".dn-swipe::-webkit-scrollbar{display:none}")));
}

/* Kaartenstapel: elke kaart staat gecentreerd vast, de volgende schuift van onder
   over de vorige. De kaart eronder dimt naar ~60% en schaalt naar ~0.96. De kop
   staat stil terwijl de eerste kaart erover komt en vervaagt. Alles volgt de
   scrollpositie, dus omhoog scrollen draait het exact terug. */
const DN_VID = "../../assets/video/";
const DN_KAARTEN = [{
  i: 0,
  video: DN_VID + "woonexpress-see-fase-16x9.mp4"
}, {
  i: 1,
  video: DN_VID + "kiela-droneshots.mp4"
}, {
  i: 2,
  video: DN_VID + "woonexpress-studio-set2-a.mp4"
}, {
  i: 3,
  video: DN_VID + "eezy-commercial.mp4"
}];
function DienstKaart({
  s,
  video,
  go,
  kaartRef
}) {
  return /*#__PURE__*/React.createElement("div", {
    ref: kaartRef,
    className: "dolle-dark",
    style: {
      position: "absolute",
      left: "var(--dn-rand)",
      right: "var(--dn-rand)",
      top: "var(--dn-top)",
      bottom: "var(--dn-onder)",
      borderRadius: 24,
      overflow: "hidden",
      background: "var(--dolle-navy)",
      boxShadow: "0 30px 80px rgba(16,31,60,0.18)",
      transform: "translate3d(0,110vh,0)",
      willChange: "transform, opacity"
    }
  }, /*#__PURE__*/React.createElement("video", {
    src: video,
    autoPlay: true,
    muted: true,
    loop: true,
    playsInline: true,
    preload: "metadata",
    style: {
      position: "absolute",
      inset: 0,
      width: "100%",
      height: "100%",
      objectFit: "cover",
      display: "block"
    }
  }), /*#__PURE__*/React.createElement("div", {
    "aria-hidden": "true",
    style: {
      position: "absolute",
      inset: 0,
      background: "linear-gradient(180deg, rgba(16,31,60,0) 35%, rgba(16,31,60,0.55) 70%, rgba(16,31,60,0.85) 100%)"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: "clamp(24px,5vw,72px)",
      right: "clamp(24px,5vw,72px)",
      bottom: "clamp(28px,6vh,64px)",
      display: "grid",
      gap: "var(--space-4)",
      justifyItems: "start"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-label)",
      fontWeight: 600,
      fontSize: "var(--size-body-sm)",
      letterSpacing: "0.18em",
      textTransform: "uppercase",
      color: "var(--dolle-white)"
    }
  }, "Wildly ", /*#__PURE__*/React.createElement("span", {
    style: {
      color: "var(--dolle-cobalt-light, #4D7DFF)"
    }
  }, s.w)), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: "var(--space-4)",
      color: "var(--dolle-white)"
    }
  }, /*#__PURE__*/React.createElement("svg", {
    "aria-hidden": "true",
    viewBox: "0 0 100 78",
    width: "36",
    height: "28",
    fill: "none",
    style: {
      flex: "0 0 auto"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M12 6 V44 H44",
    stroke: "currentColor",
    strokeWidth: "14"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M88 72 V34 H56",
    stroke: "currentColor",
    strokeWidth: "14"
  })), /*#__PURE__*/React.createElement("h2", {
    style: {
      margin: 0,
      fontFamily: "var(--font-core)",
      fontWeight: "var(--weight-heading)",
      fontSize: "clamp(34px,5vw,80px)",
      lineHeight: 1,
      letterSpacing: "var(--track-heading)",
      color: "var(--dolle-white)"
    }
  }, s.t)), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      maxWidth: "45ch",
      fontSize: "var(--size-body-lg)",
      lineHeight: "var(--lh-body)",
      color: "rgba(255,255,255,0.86)"
    }
  }, s.body), /*#__PURE__*/React.createElement("button", {
    type: "button",
    onClick: () => go("cases"),
    style: {
      appearance: "none",
      background: "none",
      border: 0,
      padding: 0,
      cursor: "pointer",
      fontFamily: "var(--font-label)",
      fontWeight: 600,
      fontSize: "var(--size-label)",
      letterSpacing: "var(--track-label-wide)",
      textTransform: "uppercase",
      color: "var(--dolle-white)"
    }
  }, "+ Learn more")));
}
function DienstStapel({
  go,
  kop
}) {
  const weg = React.useRef(null);
  const kopRef = React.useRef(null);
  const kaarten = React.useRef([]);
  const N = DN_KAARTEN.length;
  React.useEffect(() => {
    const reduce = window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    let raf = 0,
      nu = null;
    const glad = t => t * t * (3 - 2 * t);
    /* Zachte naloop zoals bij de referentie: de stand volgt de scroll met een
       korte demping, dus de kaarten glijden in plaats van te schokken. */
    const tik = () => {
      raf = 0;
      const el = weg.current;
      if (!el) return;
      const vh = window.innerHeight || 800;
      const doel = Math.max(0, -el.getBoundingClientRect().top / vh);
      if (nu === null || reduce) nu = doel;else nu += (doel - nu) * 0.14;
      if (Math.abs(doel - nu) > 0.0005) raf = requestAnimationFrame(tik);else nu = doel;
      const f = nu;
      kaarten.current.forEach((k, i) => {
        if (!k) return;
        const e = reduce ? f >= i ? 1 : 0 : glad(Math.max(0, Math.min(1, f - i)));
        const d = glad(Math.max(0, Math.min(1, f - i - 1)));
        const dd = i < N - 1 ? d : 0;
        k.style.transform = "translate3d(0," + ((1 - e) * vh * 0.95 - dd * vh * 0.04).toFixed(1) + "px,0) scale(" + (1 - 0.08 * dd).toFixed(4) + ")";
        k.style.opacity = String((1 - 0.45 * dd).toFixed(3));
      });
      if (kopRef.current) {
        const e0 = glad(Math.max(0, Math.min(1, f * 1.3)));
        kopRef.current.style.opacity = String((1 - e0).toFixed(3));
        kopRef.current.style.transform = "scale(" + (1 - 0.04 * e0).toFixed(4) + ")";
      }
    };
    const op = () => {
      if (!raf) raf = requestAnimationFrame(tik);
    };
    tik();
    window.addEventListener("scroll", op, {
      passive: true
    });
    window.addEventListener("resize", op);
    return () => {
      window.removeEventListener("scroll", op);
      window.removeEventListener("resize", op);
      if (raf) cancelAnimationFrame(raf);
    };
  }, []);
  return /*#__PURE__*/React.createElement("div", {
    ref: weg,
    "data-dn-stapel": "1",
    style: {
      position: "relative",
      height: "calc(100vh * " + (N + 1.3) + ")",
      "--dn-rand": "15%",
      "--dn-top": "12vh",
      "--dn-onder": "10vh"
    }
  }, /*#__PURE__*/React.createElement("style", null, "@media (max-width:760px){[data-dn-stapel]{--dn-rand:4% !important;--dn-top:84px !important;--dn-onder:16px !important}}"), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "sticky",
      top: 0,
      height: "100vh",
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("div", {
    ref: kopRef,
    style: {
      position: "absolute",
      inset: 0,
      display: "grid",
      alignContent: "center",
      padding: "0 var(--page-margin)",
      transformOrigin: "50% 40%"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: "100%",
      maxWidth: "var(--content-max)",
      margin: "0 auto"
    }
  }, kop)), DN_KAARTEN.map((k, i) => /*#__PURE__*/React.createElement(DienstKaart, {
    key: i,
    s: SERVICES_PAGE[k.i],
    video: k.video,
    go: go,
    kaartRef: el => {
      kaarten.current[i] = el;
    }
  }))));
}
function Diensten({
  go
}) {
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("section", {
    className: "dolle-calm",
    style: {
      background: "var(--dolle-white)",
      color: "var(--text-body)",
      padding: "var(--space-7) var(--page-margin) 0"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: "var(--content-max)",
      margin: "0 auto"
    }
  }, /*#__PURE__*/React.createElement(Reveal, {
    dur: 1000,
    y: 26,
    style: {
      display: "grid",
      justifyItems: "start",
      textAlign: "left",
      padding: "clamp(96px,16vh,200px) 0 clamp(48px,8vh,112px)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      justifyItems: "start"
    }
  }, /*#__PURE__*/React.createElement(Words, {
    as: "h1",
    text: "We keep brands",
    delay: 120,
    style: {
      margin: 0,
      fontSize: "clamp(30px,4.6vw,76px)",
      lineHeight: 1.04,
      letterSpacing: "var(--track-heading)"
    }
  }), /*#__PURE__*/React.createElement(Words, {
    as: "span",
    text: "at the forefront of social.",
    accent: "forefront",
    delay: 320,
    style: {
      display: "block",
      fontFamily: "var(--font-core)",
      fontWeight: "var(--weight-heading)",
      fontSize: "clamp(30px,4.6vw,76px)",
      lineHeight: 1.04,
      letterSpacing: "var(--track-heading)",
      color: "var(--text-heading)",
      paddingBottom: "0.06em"
    }
  }))))), /*#__PURE__*/React.createElement(CultuurBand, null), /*#__PURE__*/React.createElement("section", {
    className: "dolle-calm",
    style: {
      background: "var(--dolle-white)",
      color: "var(--text-body)",
      padding: "var(--space-9) var(--page-margin) var(--space-4)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: "var(--content-max)",
      margin: "0 auto"
    }
  }, /*#__PURE__*/React.createElement(ServiceStack, {
    go: go,
    header: /*#__PURE__*/React.createElement("div", {
      style: {
        display: "grid",
        gap: "var(--space-4)",
        justifyItems: "start"
      }
    }, /*#__PURE__*/React.createElement(Kicker, null, "Services"), /*#__PURE__*/React.createElement("h2", {
      style: {
        margin: 0,
        maxWidth: "20ch",
        paddingBottom: "0.12em"
      }
    }, "Services with a clear goal."), /*#__PURE__*/React.createElement("p", {
      className: "dolle-lead",
      style: {
        margin: 0,
        maxWidth: "52ch"
      }
    }, "Four movements that follow one another. Produce, launch, build and grow."))
  }))), window.HomeConversie ? /*#__PURE__*/React.createElement(window.HomeConversie, {
    go: go,
    direct: true
  }) : null);
}
Object.assign(window, {
  Diensten,
  SERVICES_PAGE
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/Services.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/_werk/OvergangDissolve v1 (stage 100vh).jsx
try { (() => {
/* Overgang van het navy cases-blok naar het witte services-blok.
   Dezelfde motor als de hero, in omgekeerde richting: navy wordt wit.
   Het canvas schildert géén wit — het prikt per cel een gat met
   destination-out, zodat de echte witte sectie eronder zichtbaar wordt,
   inclusief kop, WILDLY AHEAD en de knop. Niet wegoptimaliseren naar een
   wit vlak; dan verdwijnt de inhoud eronder.
   CFG en MARK komen ongewijzigd uit de afgestemde versie. */
const OVERGANG_CFG = {
  cell: 12,
  stroke: 10,
  fill: 95,
  direction: "up",
  band: 20,
  speed: 16,
  jitter: 11,
  spread: 62,
  lead: 18,
  minScale: 60,
  tail: 70,
  variant: "flip",
  flipAt: 60,
  flipDur: 15,
  preWhite: 26,
  preAlpha: 60,
  startEarly: 1.15
};
const OVERGANG_NAVY = [16, 31, 60],
  OVERGANG_WIT = [248, 244, 236];
const OVERGANG_MARK_W = 80,
  OVERGANG_MARK_H = 66;
const OVERGANG_MARK = {
  logo: [[[0, 0], [0, 40], [32, 40]], [[80, 66], [80, 26], [48, 26]]],
  frame: [[[0, 40], [0, 0], [32, 0]], [[80, 26], [80, 66], [48, 66]]]
};
const overgangSmooth = t => t <= 0 ? 0 : t >= 1 ? 1 : t * t * (3 - 2 * t);
function OvergangDissolve({
  children
}) {
  const scroller = React.useRef(null);
  const doek = React.useRef(null);
  React.useEffect(() => {
    const cv = doek.current,
      sc = scroller.current;
    if (!cv || !sc) return;
    const ctx = cv.getContext("2d");
    const reduce = window.matchMedia("(prefers-reduced-motion:reduce)").matches;
    const CFG = Object.assign({}, OVERGANG_CFG);
    let W = 0,
      H = 0,
      cols = 0,
      rows = 0,
      thresh = null,
      lastP = -1,
      leeft = true,
      raf = 0,
      rt = null;
    function build() {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      W = cv.clientWidth;
      H = cv.clientHeight;
      cv.width = Math.round(W * dpr);
      cv.height = Math.round(H * dpr);
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      /* Onder 768px zijn 12px-cellen te duur naast een schuivende sticky laag. */
      const cell = W < 768 ? 19 : CFG.cell;
      cols = Math.ceil(W / cell);
      rows = Math.ceil(H / (cell * OVERGANG_MARK_H / OVERGANG_MARK_W));
      thresh = new Float32Array(cols * rows);
      const j = CFG.jitter / 100;
      for (let y = 0; y < rows; y++) for (let x = 0; x < cols; x++) {
        const i = y * cols + x,
          nx = x / (cols - 1 || 1),
          ny = y / (rows - 1 || 1);
        let base;
        switch (CFG.direction) {
          case "down":
            base = ny;
            break;
          case "right":
            base = nx;
            break;
          case "diag":
            base = (nx + ny) / 2;
            break;
          case "radial":
            base = Math.min(1, Math.hypot(nx - 0.5, ny - 0.5) / 0.707);
            break;
          default:
            base = 1 - ny;
        }
        const t = base * (1 - j) + Math.random() * j;
        thresh[i] = Math.min(0.999, Math.max(0, t * (CFG.spread / 100)));
      }
      lastP = -1;
    }
    function render(p) {
      if (!W) return;
      const cw = W / cols,
        ch = H / rows;
      const lw = Math.max(0.5, CFG.stroke / 100 * cw * (CFG.fill / 100));
      const band = Math.max(0.03, CFG.band / 100),
        span = 1 - band;
      const lead = CFG.lead / 100,
        speed = Math.max(0.05, CFG.speed / 100);
      const tail = Math.max(0.05, CFG.tail / 100),
        MINS = CFG.minScale / 100;
      const IN = 0.12;
      const fpt = CFG.flipAt / 100,
        fdur = Math.max(0.02, CFG.flipDur / 100);
      const shrinkFrom = CFG.variant === "flip" ? Math.max(IN, Math.min(0.85, fpt + fdur)) : IN;
      const dpr = Math.min(window.devicePixelRatio || 1, 2);

      /* 1. het volle navy vlak */
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      ctx.globalCompositeOperation = "source-over";
      ctx.clearRect(0, 0, W, H);
      ctx.fillStyle = "rgb(" + OVERGANG_NAVY[0] + "," + OVERGANG_NAVY[1] + "," + OVERGANG_NAVY[2] + ")";
      ctx.fillRect(0, 0, W, H);

      /* 2. per cel een gat prikken, zodat het witte blok eronder doorkomt */
      ctx.globalCompositeOperation = "destination-out";
      for (let y = 0; y < rows; y++) {
        for (let x = 0; x < cols; x++) {
          const u = (p - thresh[y * cols + x] * span) / band;
          if (u <= 0) continue;
          ctx.globalAlpha = overgangSmooth(u / speed);
          ctx.fillRect(x * cw - 0.4, y * ch - 0.4, cw + 0.8, ch + 0.8);
        }
      }

      /* 3. de schakels: wit zolang de cel dicht is, navy zodra hij opengaat */
      ctx.globalCompositeOperation = "source-over";
      ctx.lineCap = "butt";
      ctx.lineJoin = "miter";
      const pre = Math.max(0.01, CFG.preWhite / 100),
        pAlpha = CFG.preAlpha / 100;
      for (let y = 0; y < rows; y++) {
        for (let x = 0; x < cols; x++) {
          const i = y * cols + x;
          const u = (p - thresh[i] * span) / band;
          const v = u + lead;
          if (v <= -pre) continue;
          let scale, alpha;
          if (v <= 0) {
            scale = 1;
            alpha = pAlpha * overgangSmooth((v + pre) / pre);
          } else {
            scale = 1 - (1 - MINS) * overgangSmooth((v - shrinkFrom) / (1 - shrinkFrom));
            alpha = Math.max(pAlpha, overgangSmooth(v / IN));
            if (v > 1) alpha *= 1 - overgangSmooth((v - 1) / tail);
          }
          if (scale <= 0.02 || alpha <= 0.004) continue;
          const mt = CFG.variant === "frame" ? 1 : CFG.variant === "flip" ? overgangSmooth((v - fpt) / fdur) : 0;
          const shape = mt <= 0 ? OVERGANG_MARK.logo : mt >= 1 ? OVERGANG_MARK.frame : OVERGANG_MARK.logo.map((arm, pi) => arm.map((pt, ti) => [pt[0] + (OVERGANG_MARK.frame[pi][ti][0] - pt[0]) * mt, pt[1] + (OVERGANG_MARK.frame[pi][ti][1] - pt[1]) * mt]));
          const uw = cw * (CFG.fill / 100) * scale,
            uh = ch * (CFG.fill / 100) * scale;
          const slw = Math.min(lw, Math.min(uw, uh) * 0.4);
          const ox = x * cw + (cw - uw) / 2 + slw / 2,
            oy = y * ch + (ch - uh) / 2 + slw / 2;
          const kx = (uw - slw) / OVERGANG_MARK_W,
            ky = (uh - slw) / OVERGANG_MARK_H;
          const o = overgangSmooth(u / speed);
          const r = OVERGANG_WIT[0] + (OVERGANG_NAVY[0] - OVERGANG_WIT[0]) * o;
          const g = OVERGANG_WIT[1] + (OVERGANG_NAVY[1] - OVERGANG_WIT[1]) * o;
          const b = OVERGANG_WIT[2] + (OVERGANG_NAVY[2] - OVERGANG_WIT[2]) * o;
          ctx.globalAlpha = alpha;
          ctx.strokeStyle = "rgb(" + (r | 0) + "," + (g | 0) + "," + (b | 0) + ")";
          ctx.lineWidth = slw;
          for (const seg of shape) {
            ctx.beginPath();
            ctx.moveTo(ox + seg[0][0] * kx, oy + seg[0][1] * ky);
            ctx.lineTo(ox + seg[1][0] * kx, oy + seg[1][1] * ky);
            ctx.lineTo(ox + seg[2][0] * kx, oy + seg[2][1] * ky);
            ctx.stroke();
          }
        }
      }
      ctx.globalAlpha = 1;
    }
    function progress() {
      if (reduce) return 1;
      const vh = window.innerHeight;
      const head = vh * CFG.startEarly; /* aanloop vóór het vastplakken */
      const total = sc.offsetHeight - vh + head;
      /* Stand via de vensterpositie: offsetTop is relatief aan de positioned
         wrapper op de homepage, niet aan het document. */
      const passed = head - sc.getBoundingClientRect().top;
      return Math.min(1, Math.max(0, passed / total));
    }
    function loop() {
      if (!leeft) return;
      const p = progress();
      if (Math.abs(p - lastP) > 0.0004) {
        render(p);
        lastP = p;
      }
      raf = requestAnimationFrame(loop);
    }
    const opnieuw = () => {
      clearTimeout(rt);
      rt = setTimeout(build, 120);
    };
    window.addEventListener("resize", opnieuw);
    build();
    loop();
    return () => {
      leeft = false;
      cancelAnimationFrame(raf);
      clearTimeout(rt);
      window.removeEventListener("resize", opnieuw);
    };
  }, []);
  return /*#__PURE__*/React.createElement("section", {
    ref: scroller,
    style: {
      position: "relative",
      zIndex: 2,
      height: "150vh",
      background: "#FFFFFF"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "sticky",
      top: "-160px",
      height: "calc(100vh + 160px)",
      overflow: "hidden",
      background: "#FFFFFF"
    }
  }, children, /*#__PURE__*/React.createElement("canvas", {
    ref: doek,
    "aria-hidden": "true",
    style: {
      position: "absolute",
      inset: 0,
      width: "100%",
      height: "100%",
      display: "block",
      pointerEvents: "none"
    }
  })));
}
Object.assign(window, {
  OvergangDissolve
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/_werk/OvergangDissolve v1 (stage 100vh).jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/animations-v3.jsx
try { (() => {
// @ds-adherence-ignore -- omelette starter scaffold (raw elements/hex/px by design)
// Copied omelette starter. Re-running copy_starter_component with this kind overwrites this file with the latest version (page content is unaffected).

/* BEGIN USAGE */
// animations-v3.jsx — continuous-composition animation engine.
//
// THE MODEL: the animation is ONE element tree rendered as a pure function
// of one authored-time axis. Nothing mounts or unmounts at section
// boundaries, so any element can move, morph, or persist across them by
// ordinary interpolation. The scene list (OM_SCENES) is the user-control
// view — names, order, playback durations — and the engine derives the cue
// table from it, so structure has exactly one source and cannot drift.
//
// API INDEX (every export is a window global):
//   <CompositionStage width height scenes={window.OM_SCENES}
//                     playback={window.OM_PLAYBACK} bg>
//     <Piece />   — ONE component, the whole animation
//   </CompositionStage>
//   useComposition() -> {T, CUES, time, duration, authoredTotal, playing}
//     T: authored seconds (warped per-section by user trims/speeds) —
//        key ALL choreography to T, never to wall-clock time
//     CUES: {SectionName: authoredStart} derived from OM_SCENES; an unknown
//        name returns NaN and raises a preview-only badge (never exports);
//        duplicate section names bind to the first occurrence
//   <Shot from={CUES.Build} to={CUES.Close}> — children visible between two
//     authored times (an authored hard cut in one line); children stay
//     mounted (media keeps its readiness) and are hidden outside the window
//   <Captions items={[{at, until?, text}, ...]} /> — ONE caption element,
//     at most one visible at a time, keyed to T; 'until' defaults to the
//     next item's 'at'; a last item with no 'until' stays to the end
//   WATERCOLOR (only when the Watercolor illustration skill is active —
//   otherwise ignore these entries). A painting is a function(p) written
//   against the paint kit, on a width x height sheet; it needs
//   watercolor_kit.js loaded by a <script> tag before this engine, must
//   be a stable function defined once (module scope, never an inline
//   arrow), and every component below renders <img> elements, so it all
//   exports by construction.
//   <WatercolorPainting painting={fn} from={CUES.X} to={CUES.Y} width height
//     seed scale quality style /> — the painting assembled from its own
//     STROKES: each wash / ink line / splatter is a separate layer
//     stacked over the paper, appearing in painting order between two
//     authored times (washes bloom in, ink draws tip to tail). This is the
//     default way to show a watercolor being painted. It keeps the sheet's
//     aspect ratio (size it with style, e.g. {position:'absolute', left,
//     top, width}). scale is the layers' render resolution over width x
//     height (default 1, a deliberate weight-over-dpi trade — raise it
//     toward the zoom factor if the composition zooms into the painting,
//     or toward the devicePixelRatio for a hero-sized sheet); quality is
//     0..1 layer image quality (default 0.92; 1 is the encoder's maximum).
//   useWatercolorLayers(fn, {width, height, seed, scale, quality}) -> L
//     (null if the kit isn't loaded — load watercolor_kit.js before the
//     engine — or if the painting fails to build) — the painting taken apart into strokes, for
//     choreography beyond in-order painting: L.count strokes, L.kind(i)
//     ('wash' | 'gradedWash' | 'glaze' | 'ink' | 'hatch' | 'splatter' |
//     'dryStroke' | 'reserve' | 'caption'), L.span(i) = the stroke's
//     {from, to} share of the painting's 0..1 timeline; call L.warm()
//     once after load so finished strokes pre-render off the critical
//     path (WatercolorPainting does this itself). Compose with:
//   <WatercolorSheet layers={L} style>children</WatercolorSheet> — the
//     paper the strokes sit on (keeps the sheet's aspect ratio), and
//   <WatercolorStroke index={i} at={0..1} style /> — stroke i as its own
//     element, placed where it was painted; at is its painting progress
//     (0 hidden, 1 finished — drive it from T with animate()); style lets
//     you move, scale, rotate, or fade the stroke (transform / opacity).
//     Strokes are paint, so they multiply: overlapping strokes darken
//     where they cross, as in the still image, within a few 8-bit levels
//     (tighter still at quality 1). The sheet clips to its
//     box — for strokes that fly in from outside it, set
//     style={{overflow: 'visible'}} on the WatercolorSheet. 'reserve' strokes
//     are erasures (lifted paper) — keep them where they were painted and
//     reveal them in order after the strokes they erase; moving an erase
//     around has no sensible meaning.
//   <WatercolorReveal painting={fn} from={CUES.X} to={CUES.Y} width height
//     seed steps scale format quality style />, or <WatercolorReveal
//     frames={[src, ...]} from to /> — the whole painting as ONE flat
//     image that paints on (frames pre-baked in the background, so it is
//     the lightest option and the one to zoom or pan over as a single
//     picture). Prefer WatercolorPainting when the strokes themselves
//     should appear one by one or be individually animated. format is
//     the image MIME type (default image/jpeg), quality 0..1 (default
//     0.88). Frames bake at width x height times scale (default: the
//     device pixel ratio, capped at 2) — if the composition zooms INTO
//     the painting, raise scale toward the maximum zoom so frames stay
//     crisp. The kit caps a sheet at ~12M pixels and the components clamp
//     scale to stay under it; exported video sharpness also depends on
//     the export dialog's own resolution choice.
//   Motion: Easing.{linear, easeIn|Out|InOutQuad/Cubic/Quart/Expo/Sine,
//     easeIn|Out|InOutBack, easeOutElastic}, interpolate(input, output, ease),
//     animate({from, to, start, end, ease}) -> fn(T), clamp(v, min, max)
//   Plumbing (rarely needed): Stage, PlaybackBar, TimelineContext,
//     useTime, useTimeline
//   Seek event (host/export transport): 'data-om-seek-to-time-frame',
//     detail {time, sync, playing} — the stage owns it; never implement it
//     yourself
//
// THE AUTHORING CONTRACT — this is what makes the host timeline's trim and
// speed gestures write back into YOUR file, so follow it exactly:
//   1. Declare the scene list as a JSON string literal in a plain inline
//      <script> of the main document (NOT type="text/babel", NOT a sibling
//      .jsx — only vanilla inline scripts are addressable for write-back):
//        <script>window.OM_SCENES = '[{"name":"Opening","dur":3,"desc":"The logo fades in and the title settles"},{"name":"Build","dur":5,"desc":"Bars grow to their final values"}]';</script>
//      Give every entry a "desc": one short plain-words sentence saying
//      what happens in that section. The user reads it in the timeline's
//      section popover — keep it true whenever you edit the section.
//   2. Pass the string through untouched:
//        <CompositionStage scenes={window.OM_SCENES} ...>
//   3. ALSO declare the playback setting the same way:
//        <script>window.OM_PLAYBACK = '{"mode":"loop"}';</script>
//      and pass it through untouched (values: '{"mode":"loop"}' or
//      '{"mode":"times","count":N}'; omitting keeps loop behavior but
//      leaves the host Repeat control read-only for this document).
//   IMPORTANT — the exportable-video contract: CompositionStage/Stage OWNS
//   it (the data-om-exportable-video-with-duration-secs attribute, the
//   data-om-seek-to-time-frame listener, the svg/foreignObject wrapper,
//   and font inlining). NEVER put the exportable attribute on any other
//   element — a second "exportable root" makes the host timeline and the
//   video exporter bind to the wrong element, and playback control /
//   export silently break.
//
// HOW TIME WORKS: each OM_SCENES entry is a named slice of the authored
// timeline. CUES.Name is that section's authored start (the running sum of
// authored lengths, in literal order). useComposition().T is the authored
// clock: when the user trims or speeds a section on the host timeline, the
// engine replays that section's SAME authored slice over the new playback
// length — your choreography retimes, never cuts off. The optional "nat"
// field on an entry is the engine's authored-length anchor — the host
// timeline stamps it on the first retime; don't set it by hand.
//
// CUE-FIRST DISCIPLINE (what makes a piece read as one continuous video):
//   1. Write the OM_SCENES literal FIRST — it is the piece's outline.
//   2. One helper component per section for readability, but ALL of them
//      render ALL the time inside the one tree, keyed to CUES — never
//      conditionally mounted per section.
//   3. Define exactly three motion helpers up front (e.g.
//      MOTION = {enter, draw, pop} wrapping Easing curves) and use no
//      easing or transform outside them; one caption element, one visible
//      at a time (<Captions> has this built in).
//   A shared element that crosses a boundary is just motion whose start
//   and end straddle a cue: animate({from, to, start: CUES.Build - 0.4,
//   end: CUES.Build + 0.6})(T) glides through the boundary, and a user
//   slowing either section slows the glide without breaking it.
//
// RENDER FROM T ONLY: the exporter seeks each frame with a synchronous
// commit and may serialize the stage the moment the seek event returns —
// anything painted from useEffect or your own requestAnimationFrame lags
// that commit and exports stale. Render everything visible from T and this
// is automatic. A seeked frame is a deterministic render at that time.
//
// HARD CUTS are content now, not structure: wrap a shot's elements in
// <Shot from to> (visibility toggles at the cues; children stay mounted so
// images and videos hold their readiness). Shot also doubles as the
// perf gate for heavy far-away beats.
//
// LOOP SEAMS are the one surviving boundary rule: a looping piece shows
// its last authored frame immediately before its first — make them match
// (settle your choreography by authoredTotal, open it at 0).
//
// DIAGNOSTICS: choreography that references an unknown section name (a
// rename or deletion in OM_SCENES) shows a badge below the stage in the
// preview, outside the exportable svg — visible in preview screenshots,
// never in the exported video. An OM_SCENES section with no choreography
// keyed to it is a valid empty beat, not an error.
/* END USAGE */

// ─────────────────────────────────────────────────────────────────────────────

// ── Easing functions (hand-rolled, Popmotion-style) ─────────────────────────
// All easings take t ∈ [0,1] and return eased t ∈ [0,1] (may overshoot for back/elastic).
const Easing = {
  linear: t => t,
  // Quad
  easeInQuad: t => t * t,
  easeOutQuad: t => t * (2 - t),
  easeInOutQuad: t => t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t,
  // Cubic
  easeInCubic: t => t * t * t,
  easeOutCubic: t => --t * t * t + 1,
  easeInOutCubic: t => t < 0.5 ? 4 * t * t * t : (t - 1) * (2 * t - 2) * (2 * t - 2) + 1,
  // Quart
  easeInQuart: t => t * t * t * t,
  easeOutQuart: t => 1 - --t * t * t * t,
  easeInOutQuart: t => t < 0.5 ? 8 * t * t * t * t : 1 - 8 * --t * t * t * t,
  // Expo
  easeInExpo: t => t === 0 ? 0 : Math.pow(2, 10 * (t - 1)),
  easeOutExpo: t => t === 1 ? 1 : 1 - Math.pow(2, -10 * t),
  easeInOutExpo: t => {
    if (t === 0) return 0;
    if (t === 1) return 1;
    if (t < 0.5) return 0.5 * Math.pow(2, 20 * t - 10);
    return 1 - 0.5 * Math.pow(2, -20 * t + 10);
  },
  // Sine
  easeInSine: t => 1 - Math.cos(t * Math.PI / 2),
  easeOutSine: t => Math.sin(t * Math.PI / 2),
  easeInOutSine: t => -(Math.cos(Math.PI * t) - 1) / 2,
  // Back (overshoot)
  easeOutBack: t => {
    const c1 = 1.70158,
      c3 = c1 + 1;
    return 1 + c3 * Math.pow(t - 1, 3) + c1 * Math.pow(t - 1, 2);
  },
  easeInBack: t => {
    const c1 = 1.70158,
      c3 = c1 + 1;
    return c3 * t * t * t - c1 * t * t;
  },
  easeInOutBack: t => {
    const c1 = 1.70158,
      c2 = c1 * 1.525;
    return t < 0.5 ? Math.pow(2 * t, 2) * ((c2 + 1) * 2 * t - c2) / 2 : (Math.pow(2 * t - 2, 2) * ((c2 + 1) * (t * 2 - 2) + c2) + 2) / 2;
  },
  // Elastic
  easeOutElastic: t => {
    const c4 = 2 * Math.PI / 3;
    if (t === 0) return 0;
    if (t === 1) return 1;
    return Math.pow(2, -10 * t) * Math.sin((t * 10 - 0.75) * c4) + 1;
  }
};

// ── Core interpolation helpers ──────────────────────────────────────────────

// Clamp a value to [min, max]
const clamp = (v, min, max) => Math.max(min, Math.min(max, v));

// interpolate([0, 0.5, 1], [0, 100, 50], ease?) -> fn(t)
// Popmotion-style: linearly maps t across input keyframes to output values,
// with optional easing per segment (single fn or array of fns).
function interpolate(input, output, ease = Easing.linear) {
  return t => {
    if (t <= input[0]) return output[0];
    if (t >= input[input.length - 1]) return output[output.length - 1];
    for (let i = 0; i < input.length - 1; i++) {
      if (t >= input[i] && t <= input[i + 1]) {
        const span = input[i + 1] - input[i];
        const local = span === 0 ? 0 : (t - input[i]) / span;
        const easeFn = Array.isArray(ease) ? ease[i] || Easing.linear : ease;
        const eased = easeFn(local);
        return output[i] + (output[i + 1] - output[i]) * eased;
      }
    }
    return output[output.length - 1];
  };
}

// animate({from, to, start, end, ease})(t) — simpler single-segment tween.
// Returns `from` before `start`, `to` after `end`.
function animate({
  from = 0,
  to = 1,
  start = 0,
  end = 1,
  ease = Easing.easeInOutCubic
}) {
  return t => {
    if (t <= start) return from;
    if (t >= end) return to;
    const local = (t - start) / (end - start);
    return from + (to - from) * ease(local);
  };
}

// ── Timeline context ────────────────────────────────────────────────────────

const TimelineContext = React.createContext({
  time: 0,
  duration: 10,
  playing: false
});
const useTime = () => React.useContext(TimelineContext).time;
const useTimeline = () => React.useContext(TimelineContext);

// How long a marked (detail.playing === true) host seek keeps the
// external-playback latch alive with no successor. The host play bar's
// seek pump is one-in-flight/latest-wins, so its inter-seek gap is tens
// of milliseconds in the worst case — 400ms is far above that, so a
// marked stream that dies mid-play decays the latch promptly.
var SS_EXT_PLAY_MS = 400;

// ── Font inlining ───────────────────────────────────────────────────────────
// Copy every @font-face rule from the page into a <style> inside the svg's
// foreignObject, with font URLs rewritten to data: URLs. Makes the svg
// self-describing so serializing it alone (video export fast path) still
// renders with the right fonts. Sets data-om-fonts-inlined on the svg when
// done so the exporter can wait for it.

function useInlineFontsInto(svgRef) {
  React.useEffect(() => {
    const svg = svgRef.current;
    const host = svg && svg.querySelector('foreignObject > div');
    if (!svg || !host) return;
    let cancelled = false;
    (async () => {
      const rules = [];
      for (const ss of document.styleSheets) {
        let cssRules;
        try {
          cssRules = ss.cssRules;
        } catch {
          // Cross-origin sheet without crossorigin attr (e.g. the standard
          // fonts.googleapis.com <link>) — fetch the CSS text directly and
          // regex-extract the @font-face blocks.
          if (ss.href) {
            try {
              const txt = await fetch(ss.href).then(r => {
                if (!r.ok) throw 0;
                return r.text();
              });
              for (const ff of txt.match(/@font-face\s*{[^}]*}/g) || []) rules.push({
                css: ff,
                base: ss.href
              });
            } catch {}
          }
          continue;
        }
        if (!cssRules) continue;
        for (const r of cssRules) {
          if (r.type === CSSRule.FONT_FACE_RULE) {
            rules.push({
              css: r.cssText,
              base: ss.href || location.href
            });
          }
        }
      }
      const toDataURL = url => fetch(url).then(r => {
        if (!r.ok) throw 0;
        return r.blob();
      }).then(b => new Promise(res => {
        const fr = new FileReader();
        fr.onload = () => res(fr.result);
        fr.onerror = () => res(url);
        fr.readAsDataURL(b);
      })).catch(() => url);
      const parts = await Promise.all(rules.map(async ({
        css,
        base
      }) => {
        const re = /url\((['"]?)([^'")]+)\1\)/g;
        let out = css,
          m;
        while (m = re.exec(css)) {
          const u = m[2];
          if (u.startsWith('data:')) continue;
          let abs;
          try {
            abs = new URL(u, base).href;
          } catch {
            continue;
          }
          out = out.split(m[0]).join(`url("${await toDataURL(abs)}")`);
        }
        return out;
      }));
      if (cancelled || !parts.length) {
        svg.setAttribute('data-om-fonts-inlined', 'true');
        return;
      }
      const style = document.createElement('style');
      style.textContent = parts.join('\n');
      host.insertBefore(style, host.firstChild);
      svg.setAttribute('data-om-fonts-inlined', 'true');
    })();
    return () => {
      cancelled = true;
    };
  }, []);
}
function Stage({
  width = 1280,
  height = 720,
  duration = 10,
  background = '#f6f4ef',
  fps = 60,
  loop = true,
  autoplay = true,
  // Parsed playback object ({mode:'loop'} | {mode:'times',count:N}) or
  // null. When present it overrides the legacy loop prop — CompositionStage
  // passes the validated value from the OM_PLAYBACK authoring contract.
  playback = null,
  persistKey = 'animstage-v3',
  children
}) {
  // Props arrive as strings when Stage is mounted via <x-import> (DC
  // projects) — coerce so style={{width}} gets a number React can px-ify.
  width = +width || 1280;
  height = +height || 720;
  duration = +duration || 10;
  fps = +fps || 60;
  if (typeof loop === 'string') loop = loop !== 'false';
  if (typeof autoplay === 'string') autoplay = autoplay !== 'false';
  const playTimes = playback && playback.mode === 'times' ? playback.count : null;
  const loopEff = playback ? playback.mode === 'loop' : loop;
  const [time, setTime] = React.useState(() => {
    try {
      const v = parseFloat(localStorage.getItem(persistKey + ':t') || '0');
      return isFinite(v) ? clamp(v, 0, duration) : 0;
    } catch {
      return 0;
    }
  });
  const [playing, setPlaying] = React.useState(autoplay);
  // The external-playback latch: true while the HOST play bar is driving
  // time forward as genuine continuous playback (its play-loop seeks
  // carry detail.playing === true). The engine's own clock stays paused
  // the whole time — exactly one clock ever drives — so this is a
  // separate bit, not a second meaning for `playing`. Set and cleared
  // in the seek handler below; decays via SS_EXT_PLAY_MS when the
  // marked stream stops without a parting unmarked seek.
  const [extPlay, setExtPlay] = React.useState(false);
  const extPlayTimerRef = React.useRef(null);
  const [hoverTime, setHoverTime] = React.useState(null);
  const [scale, setScale] = React.useState(1);
  const stageRef = React.useRef(null);
  const canvasRef = React.useRef(null);
  const rafRef = React.useRef(null);
  const lastTsRef = React.useRef(null);

  // Persist playhead
  React.useEffect(() => {
    try {
      localStorage.setItem(persistKey + ':t', String(time));
    } catch {}
  }, [time, persistKey]);

  // Auto-scale to fit viewport
  React.useEffect(() => {
    if (!stageRef.current) return;
    const el = stageRef.current;
    const measure = () => {
      const barH = 44; // playback bar height
      const s = Math.min(el.clientWidth / width, (el.clientHeight - barH) / height);
      setScale(Math.max(0.05, s));
    };
    measure();
    const ro = new ResizeObserver(measure);
    ro.observe(el);
    window.addEventListener('resize', measure);
    return () => {
      ro.disconnect();
      window.removeEventListener('resize', measure);
    };
  }, [width, height]);

  // Passes completed since playback last started. Lives in a ref so the
  // per-frame wrap can count without re-running this effect; reset on
  // every (re)start so a fresh play (or a host restart) gets the full
  // run count again.
  const passesRef = React.useRef(0);

  // Animation loop
  React.useEffect(() => {
    if (!playing) {
      lastTsRef.current = null;
      return;
    }
    passesRef.current = 0;
    const step = ts => {
      if (lastTsRef.current == null) lastTsRef.current = ts;
      const dt = (ts - lastTsRef.current) / 1000;
      lastTsRef.current = ts;
      setTime(t => {
        let next = t + dt;
        if (next >= duration) {
          if (playTimes !== null) {
            // Play N times then hold the last frame — the partial pass a
            // mid-timeline start produces counts as a pass, so the piece
            // never runs longer than N full durations.
            passesRef.current += 1;
            if (passesRef.current >= playTimes) {
              next = duration;
              setPlaying(false);
            } else {
              next = next % duration;
            }
          } else if (loopEff) {
            next = next % duration;
          } else {
            next = duration;
            setPlaying(false);
          }
        }
        return next;
      });
      rafRef.current = requestAnimationFrame(step);
    };
    rafRef.current = requestAnimationFrame(step);
    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
      lastTsRef.current = null;
    };
  }, [playing, duration, loopEff, playTimes]);

  // Keyboard: space = play/pause, ← → = seek
  React.useEffect(() => {
    const onKey = e => {
      if (e.target && (e.target.tagName === 'INPUT' || e.target.tagName === 'TEXTAREA')) return;
      if (e.code === 'Space') {
        e.preventDefault();
        setPlaying(p => !p);
      } else if (e.code === 'ArrowLeft') {
        setTime(t => clamp(t - (e.shiftKey ? 1 : 0.1), 0, duration));
      } else if (e.code === 'ArrowRight') {
        setTime(t => clamp(t + (e.shiftKey ? 1 : 0.1), 0, duration));
      } else if (e.key === '0' || e.code === 'Home') {
        setTime(0);
      }
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [duration]);

  // Video-export protocol + the editor's play bar: hosts dispatch this
  // event per frame; pause + sync the playhead so the frame shows exactly
  // that timestamp. The host play bar marks its play-loop seeks with
  // detail.playing === true — the mark latches extPlay (playback is
  // playback even when a host clock drives it), while ANY unmarked seek
  // (scrub, step, export frame, the transport's pause park) clears the
  // latch in the same commit it retimes, so a seeked frame still renders
  // exactly one scene's state. The engine's own clock pauses either way.
  React.useEffect(() => {
    const el = canvasRef.current;
    if (!el) return;
    // Sync-seek capability: a dispatcher that marks its seek with
    // detail.sync === true gets the commit applied via ReactDOM.flushSync,
    // so the stage DOM reflects the seeked frame the moment dispatchEvent
    // returns. The video exporter keys off the data-om-sync-seek
    // advertisement to drop its two-display-refresh settle (that wait only
    // exists to let React's async commit land — serialization needs the
    // committed DOM, not the paint). Feature-detected: a runtime without
    // ReactDOM.flushSync never advertises and every seek takes the async
    // path. Unmarked seeks (scrubs, the host play bar) stay async — a
    // forced sync render per pointermove would tax the editor for no one.
    const canSyncSeek = typeof ReactDOM !== 'undefined' && typeof ReactDOM.flushSync === 'function';
    const onSeek = e => {
      const apply = () => {
        setPlaying(false);
        const hostPlay = !!(e.detail && e.detail.playing === true);
        if (extPlayTimerRef.current) {
          clearTimeout(extPlayTimerRef.current);
          extPlayTimerRef.current = null;
        }
        if (hostPlay) {
          // Watchdog: the latch is only as alive as its seek stream. If the
          // host stops without a parting seek (tab jank, bar unmount), the
          // latch decays on its own rather than stranding extPlaying true.
          extPlayTimerRef.current = setTimeout(() => {
            extPlayTimerRef.current = null;
            setExtPlay(false);
          }, SS_EXT_PLAY_MS);
        }
        setExtPlay(hostPlay);
        setTime(clamp(e.detail.time, 0, duration));
      };
      // flushSync is safe here: a native DOM listener runs outside React's
      // lifecycle, and the exporter's dispatchEvent is synchronous, so the
      // commit lands in the same JS task — the engine's own rAF loop can
      // never interleave between seek and serialize.
      if (canSyncSeek && e.detail && e.detail.sync === true) {
        ReactDOM.flushSync(apply);
      } else {
        apply();
      }
    };
    el.addEventListener('data-om-seek-to-time-frame', onSeek);
    if (canSyncSeek) el.setAttribute('data-om-sync-seek', 'true');
    return () => {
      el.removeEventListener('data-om-seek-to-time-frame', onSeek);
      el.removeAttribute('data-om-sync-seek');
      if (extPlayTimerRef.current) {
        clearTimeout(extPlayTimerRef.current);
        extPlayTimerRef.current = null;
      }
      // Drop the latch too: this cleanup runs on every duration change
      // (an agent edit can retime mid-host-play, no gesture involved) and
      // the new effect instance arms no watchdog — clearing only the
      // timer could strand extPlay true forever if the marked stream died
      // in the gap. Fail toward cut: the next marked seek re-latches.
      setExtPlay(false);
    };
  }, [duration]);

  // Inline @font-face rules into the svg's foreignObject so the svg is
  // self-describing — serializing it alone (for video export) then renders
  // with the right fonts. Sets data-om-fonts-inlined once done.
  useInlineFontsInto(canvasRef);
  const displayTime = hoverTime != null ? hoverTime : time;
  const ctxValue = React.useMemo(
  // extPlaying is ADDITIVE: "time is advancing under an external
  // driver's continuous playback". `playing` keeps meaning the
  // engine's OWN clock — the hidden PlaybackBar glyph (and through it
  // the host's clock-reporter/adoption channel) reads that — and
  // CompositionClock is the one consumer that widens to either.
  () => ({
    time: displayTime,
    duration,
    playing,
    extPlaying: extPlay,
    setTime,
    setPlaying
  }), [displayTime, duration, playing, extPlay]);
  return (
    /*#__PURE__*/
    // data-om-starter: inert presence marker — Claude Design's starter-usage
    // probe reads it; it renders nothing. Keep it on this root element.
    React.createElement("div", {
      ref: stageRef,
      "data-om-starter": "animations-v3",
      style: {
        position: 'absolute',
        inset: 0,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        background: '#0a0a0a',
        fontFamily: 'Inter, system-ui, sans-serif'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        flex: 1,
        width: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        overflow: 'hidden',
        minHeight: 0
      }
    }, /*#__PURE__*/React.createElement("svg", {
      ref: canvasRef,
      width: width,
      height: height,
      "data-om-exportable-video-with-duration-secs": duration,
      style: {
        transform: `scale(${scale})`,
        transformOrigin: 'center',
        flexShrink: 0,
        boxShadow: '0 20px 60px rgba(0,0,0,0.4)',
        display: 'block'
      }
    }, /*#__PURE__*/React.createElement("foreignObject", {
      x: "0",
      y: "0",
      width: "100%",
      height: "100%"
    }, /*#__PURE__*/React.createElement("div", {
      xmlns: "http://www.w3.org/1999/xhtml",
      style: {
        width,
        height,
        background,
        position: 'relative',
        overflow: 'hidden'
      }
    }, /*#__PURE__*/React.createElement(TimelineContext.Provider, {
      value: ctxValue
    }, children))))), /*#__PURE__*/React.createElement(PlaybackBar, {
      time: displayTime,
      actualTime: time,
      duration: duration,
      playing: playing,
      onPlayPause: () => setPlaying(p => !p),
      onReset: () => {
        setTime(0);
      },
      onSeek: t => setTime(t),
      onHover: t => setHoverTime(t)
    }))
  );
}

// ── Playback bar ────────────────────────────────────────────────────────────
// Play/pause, return-to-begin, scrub track, time display.
// Uses fixed-width time fields so layout doesn't thrash.

function PlaybackBar({
  time,
  duration,
  playing,
  onPlayPause,
  onReset,
  onSeek,
  onHover
}) {
  const trackRef = React.useRef(null);
  const [dragging, setDragging] = React.useState(false);
  const timeFromEvent = React.useCallback(e => {
    const rect = trackRef.current.getBoundingClientRect();
    const x = clamp((e.clientX - rect.left) / rect.width, 0, 1);
    return x * duration;
  }, [duration]);
  const onTrackMove = e => {
    if (!trackRef.current) return;
    const t = timeFromEvent(e);
    if (dragging) {
      onSeek(t);
    } else {
      onHover(t);
    }
  };
  const onTrackLeave = () => {
    if (!dragging) onHover(null);
  };
  const onTrackDown = e => {
    setDragging(true);
    const t = timeFromEvent(e);
    onSeek(t);
    onHover(null);
  };
  React.useEffect(() => {
    if (!dragging) return;
    const onUp = () => setDragging(false);
    const onMove = e => {
      if (!trackRef.current) return;
      const t = timeFromEvent(e);
      onSeek(t);
    };
    window.addEventListener('mouseup', onUp);
    window.addEventListener('mousemove', onMove);
    return () => {
      window.removeEventListener('mouseup', onUp);
      window.removeEventListener('mousemove', onMove);
    };
  }, [dragging, timeFromEvent, onSeek]);
  const pct = duration > 0 ? time / duration * 100 : 0;
  const fmt = t => {
    const total = Math.max(0, t);
    const m = Math.floor(total / 60);
    const s = Math.floor(total % 60);
    const cs = Math.floor(total * 100 % 100);
    return `${String(m).padStart(1, '0')}:${String(s).padStart(2, '0')}.${String(cs).padStart(2, '0')}`;
  };
  const mono = 'JetBrains Mono, ui-monospace, SFMono-Regular, monospace';
  return /*#__PURE__*/React.createElement("div", {
    "data-omelette-chrome": true,
    style: {
      // Slimmed to visually match the host editor bar's basic row (the
      // single-scrubber look): transport first, tighter metrics, quieter
      // chrome. Shown only outside the app — the host bar suppresses this
      // whenever it is present.
      display: 'flex',
      alignItems: 'center',
      gap: 10,
      padding: '6px 12px',
      background: 'rgba(20,20,20,0.92)',
      borderTop: '1px solid rgba(255,255,255,0.08)',
      width: '100%',
      maxWidth: 680,
      alignSelf: 'center',
      borderRadius: 6,
      color: '#f6f4ef',
      fontFamily: 'Inter, system-ui, sans-serif',
      userSelect: 'none',
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement(IconButton, {
    onClick: onPlayPause,
    title: "Play/pause (space)"
  }, playing ? /*#__PURE__*/React.createElement("svg", {
    width: "14",
    height: "14",
    viewBox: "0 0 14 14",
    fill: "none"
  }, /*#__PURE__*/React.createElement("rect", {
    x: "3",
    y: "2",
    width: "3",
    height: "10",
    fill: "currentColor"
  }), /*#__PURE__*/React.createElement("rect", {
    x: "8",
    y: "2",
    width: "3",
    height: "10",
    fill: "currentColor"
  })) : /*#__PURE__*/React.createElement("svg", {
    width: "14",
    height: "14",
    viewBox: "0 0 14 14",
    fill: "none"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M3 2l9 5-9 5V2z",
    fill: "currentColor"
  }))), /*#__PURE__*/React.createElement(IconButton, {
    onClick: onReset,
    title: "Return to start (0)"
  }, /*#__PURE__*/React.createElement("svg", {
    width: "14",
    height: "14",
    viewBox: "0 0 14 14",
    fill: "none"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M3 2v10M12 2L5 7l7 5V2z",
    stroke: "currentColor",
    strokeWidth: "1.5",
    strokeLinejoin: "round",
    strokeLinecap: "round"
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: mono,
      fontSize: 12,
      fontVariantNumeric: 'tabular-nums',
      width: 64,
      textAlign: 'right',
      color: '#f6f4ef'
    }
  }, fmt(time)), /*#__PURE__*/React.createElement("div", {
    ref: trackRef,
    onMouseMove: onTrackMove,
    onMouseLeave: onTrackLeave,
    onMouseDown: onTrackDown,
    style: {
      flex: 1,
      height: 22,
      position: 'relative',
      cursor: 'pointer',
      display: 'flex',
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      left: 0,
      right: 0,
      height: 4,
      background: 'rgba(255,255,255,0.12)',
      borderRadius: 2
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      left: 0,
      width: `${pct}%`,
      height: 4,
      background: 'oklch(72% 0.12 250)',
      borderRadius: 2
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      left: `${pct}%`,
      top: '50%',
      width: 12,
      height: 12,
      marginLeft: -6,
      marginTop: -6,
      background: '#fff',
      borderRadius: 6,
      boxShadow: '0 2px 4px rgba(0,0,0,0.4)'
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: mono,
      fontSize: 12,
      fontVariantNumeric: 'tabular-nums',
      width: 64,
      textAlign: 'left',
      color: 'rgba(246,244,239,0.55)'
    }
  }, fmt(duration)), typeof VideoEncoder !== 'undefined' && /*#__PURE__*/React.createElement(IconButton, {
    title: "Export video",
    onClick: () => window.parent.postMessage({
      type: 'omelette:request-video-export'
    }, '*')
  }, /*#__PURE__*/React.createElement("svg", {
    width: "14",
    height: "14",
    viewBox: "0 0 14 14",
    fill: "none"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M7 2v7m0 0L4 6m3 3l3-3M2 12h10",
    stroke: "currentColor",
    strokeWidth: "1.5",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }))));
}
function IconButton({
  children,
  onClick,
  title
}) {
  const [hover, setHover] = React.useState(false);
  return /*#__PURE__*/React.createElement("button", {
    onClick: onClick,
    title: title,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      width: 24,
      height: 24,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      background: hover ? 'rgba(255,255,255,0.12)' : 'rgba(255,255,255,0.04)',
      border: '1px solid rgba(255,255,255,0.1)',
      borderRadius: 5,
      color: '#f6f4ef',
      cursor: 'pointer',
      padding: 0,
      transition: 'background 120ms'
    }
  }, children);
}

// ── Scene-list plumbing ──────────────────────────────────────────────────
// Guest-side validation of a scene list (the engine's own inputs: the
// authored prop, and host-dispatched updates). Mirrors the host parser's
// shape rules and constants — keep in sync with parseTimelineScenes in
// apps/web/src/shared/timeline.ts (16KB raw cap, 50 entries, dur finite in
// (0, 300]); returns null on any violation.
function ssParse(raw) {
  if (typeof raw !== 'string' || !raw || raw.length > 16 * 1024) return null;
  var parsed;
  try {
    parsed = JSON.parse(raw);
  } catch (e) {
    return null;
  }
  if (!Array.isArray(parsed) || parsed.length === 0 || parsed.length > 50) return null;
  for (var i = 0; i < parsed.length; i++) {
    var s = parsed[i];
    if (typeof s !== 'object' || s === null) return null;
    if (typeof s.name !== 'string' || typeof s.dur !== 'number') return null;
    if (!isFinite(s.dur) || s.dur <= 0 || s.dur > 300) return null;
  }
  return parsed;
}

// Guest-side validation of the playback value — mirrors the host parser
// (shared/timeline.ts parseTimelinePlayback): {"mode":"loop"} or
// {"mode":"times","count":1..99}, strict all-or-nothing, null otherwise.
// Callers treat null as the loop default.
function ppParse(raw) {
  if (typeof raw !== 'string' || !raw || raw.length > 256) return null;
  var parsed;
  try {
    parsed = JSON.parse(raw);
  } catch (e) {
    return null;
  }
  if (typeof parsed !== 'object' || parsed === null || Array.isArray(parsed)) return null;
  var keys = Object.keys(parsed);
  if (parsed.mode === 'loop') return keys.length === 1 ? {
    mode: 'loop'
  } : null;
  if (parsed.mode === 'times') {
    if (keys.length !== 2) return null;
    var c = parsed.count;
    if (typeof c !== 'number' || c !== Math.floor(c) || c < 1 || c > 99) return null;
    return {
      mode: 'times',
      count: c
    };
  }
  return null;
}

// Stamps the playback attribute VERBATIM from the authored raw string (the
// host's write-back anchors on that exact value) and listens for the
// host's post-write update event. Same shape as SceneSync; only rendered
// when the document authors a playback literal — an absent contract means
// the attribute stays absent and the document plays its default.
function PlaybackSync(props) {
  var ref = React.useRef(null);
  var raw = props.raw;
  var onUpdate = props.onUpdate;
  React.useEffect(function () {
    var el = ref.current;
    if (!el) return;
    var root = el.closest('[data-om-exportable-video-with-duration-secs]');
    if (!root) return;
    root.setAttribute('data-om-timeline-playback', raw);
    var onEvent = function (e) {
      var next = e && e.detail;
      if (ppParse(next)) onUpdate(next);
    };
    root.addEventListener('data-om-timeline-playback-update', onEvent);
    return function () {
      root.removeEventListener('data-om-timeline-playback-update', onEvent);
      root.removeAttribute('data-om-timeline-playback');
    };
  }, [raw, onUpdate]);
  return /*#__PURE__*/React.createElement("div", {
    ref: ref,
    style: {
      display: 'none'
    }
  });
}

// Renders inside the Stage (so it can reach the exportable root via
// closest()): stamps the scenes attribute VERBATIM from the current raw
// string — the host's write-back anchors on that exact value — and listens
// for the host's post-write update event.
function SceneSync(props) {
  var ref = React.useRef(null);
  var raw = props.raw;
  var onUpdate = props.onUpdate;
  React.useEffect(function () {
    var el = ref.current;
    if (!el) return;
    var root = el.closest('[data-om-exportable-video-with-duration-secs]');
    if (!root) return;
    root.setAttribute('data-om-timeline-scenes', raw);
    var onEvent = function (e) {
      var next = e && e.detail;
      // Ignore anything that doesn't validate — a bad update must not tear
      // down a working composition.
      if (ssParse(next)) onUpdate(next);
    };
    root.addEventListener('data-om-timeline-scenes-update', onEvent);
    return function () {
      root.removeEventListener('data-om-timeline-scenes-update', onEvent);
      root.removeAttribute('data-om-timeline-scenes');
    };
  }, [raw, onUpdate]);
  return /*#__PURE__*/React.createElement("div", {
    ref: ref,
    style: {
      display: 'none'
    }
  });
}

// ── Continuous composition ──────────────────────────────────────────────

var CompositionContext = React.createContext(null);
function useComposition() {
  var ctx = React.useContext(CompositionContext);
  if (!ctx) throw new Error('useComposition() must be called inside <CompositionStage>');
  return ctx;
}
function ccDerive(scenes) {
  var playStart = 0;
  var authStart = 0;
  var sections = [];
  var table = Object.create(null);
  for (var i = 0; i < scenes.length; i++) {
    var s = scenes[i];
    var nat = typeof s.nat === 'number' && isFinite(s.nat) && s.nat > 0 ? s.nat : s.dur;
    sections.push({
      name: s.name,
      playStart: playStart,
      dur: s.dur,
      authStart: authStart,
      nat: nat
    });
    if (!Object.prototype.hasOwnProperty.call(table, s.name)) {
      table[s.name] = Math.round(authStart * 1000) / 1000;
    }
    playStart += s.dur;
    authStart += nat;
  }
  return {
    sections: sections,
    table: table,
    total: Math.round(playStart * 1000) / 1000,
    authoredTotal: Math.round(authStart * 1000) / 1000
  };
}
function ccWarp(d, t) {
  var ss = d.sections;
  if (ss.length === 0) return 0;
  var idx = ss.length - 1;
  for (var i = 0; i < ss.length; i++) {
    if (t < ss[i].playStart + ss[i].dur) {
      idx = i;
      break;
    }
  }
  var s = ss[idx];
  var local = Math.min(Math.max(t - s.playStart, 0), s.dur);
  var T = s.authStart + (s.dur > 0 ? local * (s.nat / s.dur) : 0);
  return Math.min(T, d.authoredTotal);
}
var CC_META = Object.assign(Object.create(null), {
  toString: 1,
  toLocaleString: 1,
  valueOf: 1,
  toJSON: 1,
  then: 1,
  constructor: 1,
  hasOwnProperty: 1,
  isPrototypeOf: 1,
  propertyIsEnumerable: 1,
  default: 1
});
function ccCueProxy(table, unknownRef) {
  if (typeof Proxy !== 'function') return table;
  return new Proxy(table, {
    get: function (target, prop) {
      if (typeof prop !== 'string' || prop in target) return target[prop];
      if (CC_META[prop] || prop.indexOf('@@') === 0) return Object.prototype[prop];
      unknownRef.current[prop] = true;
      return NaN;
    }
  });
}
function CcUnknownWatch(props) {
  var tl = useTimeline();
  React.useEffect(function () {
    var next = Object.keys(props.unknownRef.current).sort().join(', ');
    if (next !== props.badge) props.setBadge(next);
  }, [tl.time]);
  return null;
}
function CompositionClock(props) {
  var tl = useTimeline();
  var d = props.derived;
  var T = ccWarp(d, tl.time);
  var value = React.useMemo(function () {
    return {
      T: T,
      CUES: props.cues,
      time: tl.time,
      duration: tl.duration,
      authoredTotal: d.authoredTotal,
      playing: tl.playing || tl.extPlaying === true
    };
  }, [T, props.cues, tl.time, tl.duration, d, tl.playing, tl.extPlaying]);
  return /*#__PURE__*/React.createElement(CompositionContext.Provider, {
    value: value
  }, props.children);
}
function Shot(props) {
  var c = useComposition();
  var from = +props.from;
  var to = props.to == null ? Infinity : +props.to;
  var on = isFinite(from) && c.T >= from && c.T < to;
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      visibility: on ? 'visible' : 'hidden'
    }
  }, props.children);
}
var CAPTION_FADE = 0.18;
function Captions(props) {
  var c = useComposition();
  var t = c.T;
  var items = (props.items || []).filter(function (it) {
    return it && isFinite(+it.at);
  }).sort(function (a, b) {
    return a.at - b.at;
  });
  var active = null;
  var end = Infinity;
  for (var i = 0; i < items.length; i++) {
    if (t < items[i].at) break;
    active = items[i];
    end = typeof active.until === 'number' && isFinite(active.until) ? active.until : i + 1 < items.length ? items[i + 1].at : Infinity;
  }
  if (!active || t >= end) return null;
  var o = Math.min(1, (t - active.at) / CAPTION_FADE);
  if (isFinite(end)) o = Math.min(o, (end - t) / CAPTION_FADE);
  o = Math.max(0, Math.min(1, o));
  return /*#__PURE__*/React.createElement("div", {
    "data-om-caption": true,
    style: Object.assign({
      position: 'absolute',
      left: '8%',
      right: '8%',
      bottom: '7%',
      textAlign: 'center',
      opacity: o,
      pointerEvents: 'none',
      font: '500 30px Inter, system-ui, sans-serif',
      color: '#f6f4ef',
      textShadow: '0 1px 14px rgba(0,0,0,0.45)'
    }, props.style)
  }, active.text);
}
function CompositionStage(props) {
  var width = +props.width || 1280;
  var height = +props.height || 720;
  var bg = props.bg || '#0b0b0e';
  var autoplay = props.autoplay == null ? true : String(props.autoplay) !== 'false';
  var loop = props.loop == null ? true : String(props.loop) !== 'false';
  var state = React.useState(props.scenes);
  var raw = state[0];
  var setRaw = state[1];
  var scenes = React.useMemo(function () {
    return ssParse(raw);
  }, [raw]);
  var pstate = React.useState(props.playback);
  var praw = pstate[0];
  var setPraw = pstate[1];
  var pb = React.useMemo(function () {
    return ppParse(praw);
  }, [praw]);
  var unknownRef = React.useRef({});
  var badgeState = React.useState('');
  var badge = badgeState[0];
  var setBadge = badgeState[1];
  var derived = React.useMemo(function () {
    unknownRef.current = {};
    return scenes ? ccDerive(scenes) : null;
  }, [scenes]);
  var cues = React.useMemo(function () {
    return derived ? ccCueProxy(derived.table, unknownRef) : null;
  }, [derived]);
  React.useEffect(function () {
    var next = Object.keys(unknownRef.current).sort().join(', ');
    if (next !== badge) setBadge(next);
  });
  if (!scenes) {
    return /*#__PURE__*/React.createElement("div", {
      style: {
        position: 'absolute',
        inset: 0,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        background: '#0b0b0e',
        color: '#c96442',
        font: '500 16px Inter, system-ui, sans-serif',
        textAlign: 'center'
      }
    }, "animations-v3: the scenes prop isn't a valid JSON scene list", /*#__PURE__*/React.createElement("br", null), "(expected '[", '{', "\"name\":\"\u2026\",\"dur\":N", '}', ", \u2026]')");
  }
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Stage, {
    width: width,
    height: height,
    duration: derived.total,
    background: bg,
    autoplay: autoplay,
    loop: loop,
    playback: pb
  }, /*#__PURE__*/React.createElement(SceneSync, {
    raw: raw,
    onUpdate: setRaw
  }), typeof praw === 'string' && praw !== '' && /*#__PURE__*/React.createElement(PlaybackSync, {
    raw: praw,
    onUpdate: setPraw
  }), /*#__PURE__*/React.createElement(CompositionClock, {
    derived: derived,
    cues: cues
  }, props.children), /*#__PURE__*/React.createElement(CcUnknownWatch, {
    unknownRef: unknownRef,
    badge: badge,
    setBadge: setBadge
  })), badge !== '' &&
  /*#__PURE__*/
  // Sibling of Stage, outside the exportable <svg>: visible in the
  // preview (and its screenshots), never in the exported video.
  React.createElement("div", {
    "data-om-unknown-cues": true,
    style: {
      position: 'absolute',
      left: 12,
      bottom: 56,
      zIndex: 10,
      padding: '6px 10px',
      borderRadius: 6,
      background: 'rgba(0,0,0,0.72)',
      color: '#e8906a',
      font: '500 12px Inter, system-ui, sans-serif',
      pointerEvents: 'none'
    }
  }, "choreography references unknown section", badge.indexOf(',') >= 0 ? 's' : '', ": ", badge));
}

// Strokes as layers: paint multiplies, so stroke images stacked with
// mix-blend-mode:multiply over the paper reproduce the flat render.

var WC_PIXEL_CAP = 11000000;
function wcLayerOpts(props) {
  var w = +props.width || 900,
    h = +props.height || 1200;
  var askScale = +props.scale || 1;
  return {
    width: w,
    height: h,
    scale: Math.min(askScale, Math.sqrt(WC_PIXEL_CAP / (w * h))),
    seed: props.seed == null ? undefined : +props.seed,
    quality: props.quality == null ? undefined : +props.quality
  };
}
var wcWarned = {};
function wcWarnOnce(key, message, err) {
  if (wcWarned[key]) return;
  wcWarned[key] = true;
  console.warn(message, err);
}
function useWatercolorLayers(painting, opts) {
  var kit = window.WatercolorKit;
  if (typeof painting !== 'function' || !kit || typeof kit.layers !== 'function') return null;
  try {
    return kit.layers(painting, wcLayerOpts(opts || {}));
  } catch (e) {
    wcWarnOnce('layers:' + e, 'watercolor painting failed to build; rendering the fallback sheet', e);
    return null;
  }
}
var WatercolorSheetContext = React.createContext(null);
function WatercolorSheet(props) {
  var L = props.layers || null;
  var style = Object.assign({
    position: 'relative',
    display: 'block',
    width: '100%',
    aspectRatio: L ? L.width + ' / ' + L.height : '3 / 4',
    isolation: 'isolate',
    overflow: 'hidden'
  }, props.style);
  if (!L) {
    return /*#__PURE__*/React.createElement("div", {
      style: Object.assign(style, {
        background: '#f4f1e8',
        color: '#8a8270',
        font: '12px system-ui, sans-serif',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      })
    }, "watercolor-kit.js not loaded (or the painting failed to build)");
  }
  return /*#__PURE__*/React.createElement(WatercolorSheetContext.Provider, {
    value: L
  }, /*#__PURE__*/React.createElement("div", {
    style: style,
    "data-om-watercolor-sheet": true
  }, /*#__PURE__*/React.createElement("img", {
    src: L.paper,
    alt: props.alt || '',
    style: {
      position: 'absolute',
      left: 0,
      top: 0,
      width: '100%',
      height: '100%',
      display: 'block'
    }
  }), props.children));
}
function WatercolorStroke(props) {
  var fromSheet = React.useContext(WatercolorSheetContext);
  var L = props.layers || fromSheet;
  if (!L) return null;
  var i = +props.index;
  if (!(i >= 0) || i >= L.count) return null;
  var at = props.at == null ? 1 : clamp(+props.at, 0, 1);
  if (!(at > 0)) return null;
  var box, src;
  try {
    box = L.box(i);
    src = box ? L.src(i, at) : null;
  } catch (e) {
    wcWarnOnce('stroke:' + i + ':' + e, 'watercolor stroke ' + i + ' failed to render; skipping it', e);
    return null;
  }
  if (!box || !src) return null;
  var style = Object.assign({
    position: 'absolute',
    display: 'block',
    left: box.x * 100 + '%',
    top: box.y * 100 + '%',
    width: box.w * 100 + '%',
    height: box.h * 100 + '%',
    mixBlendMode: L.kind(i) === 'reserve' ? 'normal' : 'multiply',
    pointerEvents: 'none'
  }, props.style);
  return /*#__PURE__*/React.createElement("img", {
    src: src,
    alt: "",
    "data-om-watercolor-stroke": i,
    "data-om-stroke-kind": L.kind(i),
    style: style
  });
}

// The default watercolor moment: the painting assembled from its strokes,
// each appearing in painting order (a pure function of T).
function WatercolorPainting(props) {
  var c = useComposition();
  var from = +props.from || 0;
  var to = props.to == null ? from + 6 : +props.to;
  var u = clamp((c.T - from) / Math.max(to - from, 0.001), 0, 1);
  var eased = Easing.easeInOutQuad(u);
  var L = useWatercolorLayers(props.painting, props);
  var tick = React.useState(0)[1];
  var warmed = React.useRef(null);
  React.useEffect(function () {
    if (!L || typeof L.warm !== 'function') return;
    var p = L.warm();
    if (warmed.current === p) return;
    var live = true;
    p.then(function () {
      warmed.current = p;
      if (live) tick(function (x) {
        return x + 1;
      });
    });
    return function () {
      live = false;
    };
  }, [L && L.paper, props.painting]);
  var strokes = [];
  if (L) {
    for (var i = 0; i < L.count; i++) {
      var sp = L.span(i);
      var at = clamp((eased - sp.from) / Math.max(sp.to - sp.from, 1e-6), 0, 1);
      if (at <= 0) break;
      strokes.push(/*#__PURE__*/React.createElement(WatercolorStroke, {
        key: i,
        layers: L,
        index: i,
        at: at
      }));
    }
  }
  return /*#__PURE__*/React.createElement(WatercolorSheet, {
    layers: L,
    style: props.style,
    alt: props.alt
  }, strokes);
}

// Paint-on watercolor reveal as a pure function of T — an <img> with a data:
// URL (the exporter serializes those as-is; a live canvas would export blank).
function WatercolorReveal(props) {
  var c = useComposition();
  var from = +props.from || 0;
  var to = props.to == null ? from + 6 : +props.to;
  var u = clamp((c.T - from) / Math.max(to - from, 0.001), 0, 1);
  var style = Object.assign({
    display: 'block',
    width: '100%',
    height: '100%',
    objectFit: 'contain'
  }, props.style);
  var frames = Array.isArray(props.frames) && props.frames.length ? props.frames : null;
  var steps = frames ? frames.length - 1 : Math.max(1, Math.round(+props.steps || 36));
  var i = Math.min(steps, Math.round(Easing.easeInOutQuad(u) * steps));
  var painting = typeof props.painting === 'function' ? props.painting : null;
  var kit = window.WatercolorKit;
  var w = +props.width || 900,
    h = +props.height || 1200;
  var askScale = +props.scale || Math.min(2, window.devicePixelRatio || 1);
  var opts = {
    width: w,
    height: h,
    scale: Math.min(askScale, Math.sqrt(11000000 / (w * h))),
    seed: props.seed == null ? undefined : +props.seed,
    steps: steps,
    type: props.format || 'image/jpeg',
    quality: props.quality == null ? 0.88 : +props.quality
  };
  var key = opts.width + 'x' + opts.height + '#' + opts.seed + '@' + opts.scale + '/' + steps + ':' + opts.type + '/' + opts.quality;
  var cache = React.useRef({
    fn: null,
    key: '',
    frames: {},
    baking: false
  }).current;
  var tick = React.useState(0)[1];
  if (cache.fn !== painting && String(cache.fn) !== String(painting) || cache.key !== key) {
    cache.key = key;
    cache.frames = {};
    cache.baking = false;
  }
  cache.fn = painting;
  React.useEffect(function () {
    if (frames || cache.baking || !painting || !kit || typeof kit.bake !== 'function') return;
    cache.baking = true;
    var target = cache.frames;
    try {
      kit.bake(painting, opts, function (n, _t, url) {
        target[n] = url;
      }).then(function (all) {
        if (cache.frames !== target) return;
        for (var n = 0; n < all.length; n++) target[n] = all[n];
        tick(function (x) {
          return x + 1;
        });
      }).catch(function () {
        /* failed bake: the guarded lazy path below still renders */
      });
    } catch (e) {
      /* oversized painting: the guarded lazy path below still renders */
    }
  });
  if (frames) return /*#__PURE__*/React.createElement("img", {
    src: frames[i],
    alt: props.alt || '',
    style: style
  });
  if (!kit || !painting) {
    return /*#__PURE__*/React.createElement("div", {
      style: Object.assign({
        width: '100%',
        height: '100%',
        background: '#f4f1e8',
        color: '#8a8270',
        font: '12px system-ui, sans-serif',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      }, props.style)
    }, "watercolor-kit.js not loaded (or no painting function)");
  }
  if (!cache.frames[i]) {
    try {
      cache.frames[i] = kit.frame(painting, Object.assign({}, opts, {
        at: i / steps
      }));
    } catch (e) {
      return /*#__PURE__*/React.createElement("div", {
        style: Object.assign({
          width: '100%',
          height: '100%',
          background: '#f4f1e8',
          color: '#8a8270',
          font: '12px system-ui, sans-serif',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center'
        }, props.style)
      }, "painting too large to render (", String(e && e.message).slice(0, 80), ")");
    }
  }
  return /*#__PURE__*/React.createElement("img", {
    src: cache.frames[i],
    alt: props.alt || '',
    style: style
  });
}
Object.assign(window, {
  Easing,
  interpolate,
  animate,
  clamp,
  TimelineContext,
  useTime,
  useTimeline,
  Stage,
  PlaybackBar,
  CompositionStage,
  useComposition,
  Shot,
  Captions,
  WatercolorReveal,
  WatercolorPainting,
  WatercolorSheet,
  WatercolorStroke,
  useWatercolorLayers
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/animations-v3.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/dolle-dissolve.js
try { (() => {
/* ============================================================
   dolle-dissolve.js  —  versie 3.0

   Dezelfde overgang als in dolle-overgang-cases-services.html:
   een vastgeplakt scherm dat volledig navy begint en al scrollend
   uiteenvalt in het DOLLE-beeldmerk, zodat de sectie eronder
   tevoorschijn komt.

       <section class="services" data-dolle-dissolve>
         ...de sectie die onthuld wordt...
       </section>
       <script src="dolle-dissolve.js"><\/script>

   De onthulde sectie wordt op één schermhoogte gezet. Houd de
   inhoud daarbinnen; wat langer is wordt afgesneden.

   Optionele attributen:
       data-dolle-from="#101F3C"   kleur van het dekvlak
       data-dolle-height="200"     hoogte van de scroll in vh
       data-dolle-dir="up"         up | down | right | diag | radial
   ============================================================ */

(function () {
  'use strict';

  const CFG = {
    cell: 12,
    // celbreedte in px, tevens breedte van één merk
    stroke: 10,
    // lijndikte, % van de celbreedte
    fill: 95,
    // merkgrootte binnen de cel, %
    band: 20,
    // % van de scroll waarin één cel zijn overgang doorloopt
    speed: 16,
    // hoe snel een cel opengaat, % van de celtijdlijn
    jitter: 11,
    // % willekeur op de volgorde
    spread: 62,
    // % spreiding tussen de eerste en de laatste cel
    lead: 18,
    // % voorsprong van het merk op het opengaan
    minScale: 60,
    // % waartoe het merk krimpt voordat het uitdooft
    tail: 70,
    // % lengte van de naschijn
    flipAt: 60,
    // % punt waarop de schakel omklapt naar frame
    flipDur: 15,
    // % duur van die omslag
    preWhite: 26,
    // % eerder dat het merk al wit verschijnt
    preAlpha: 60,
    // % dekking van die witte voorschijn
    startEarly: 0.95 // schermhoogtes dat de overgang eerder begint
  };
  const WIT = [248, 244, 236];
  const MARK_W = 80,
    MARK_H = 66;
  const MARK = {
    logo: [[[0, 0], [0, 40], [32, 40]], [[80, 66], [80, 26], [48, 26]]],
    frame: [[[0, 40], [0, 0], [32, 0]], [[80, 26], [80, 66], [48, 66]]]
  };
  const smooth = t => t <= 0 ? 0 : t >= 1 ? 1 : t * t * (3 - 2 * t);
  const reduce = window.matchMedia('(prefers-reduced-motion:reduce)').matches;
  function hexToRgb(hex) {
    const h = hex.replace('#', '').trim();
    const v = h.length === 3 ? h.split('').map(c => c + c).join('') : h;
    return [parseInt(v.slice(0, 2), 16), parseInt(v.slice(2, 4), 16), parseInt(v.slice(4, 6), 16)];
  }
  function setup(section) {
    const fromHex = section.dataset.dolleFrom || '#101F3C';
    const FROM = hexToRgb(fromHex);
    const heightV = parseFloat(section.dataset.dolleHeight || 200);
    const dir = section.dataset.dolleDir || 'up';
    const scroller = document.createElement('div');
    scroller.style.cssText = 'position:relative;height:' + heightV + 'vh;background:' + fromHex + ';';
    const stage = document.createElement('div');
    stage.style.cssText = 'position:sticky;top:0;height:100vh;overflow:hidden;';
    const canvas = document.createElement('canvas');
    canvas.style.cssText = 'position:absolute;inset:0;width:100%;height:100%;' + 'display:block;pointer-events:none;';
    section.parentNode.insertBefore(scroller, section);
    stage.appendChild(section);
    stage.appendChild(canvas);
    scroller.appendChild(stage);
    section.style.position = 'absolute';
    section.style.inset = '0';
    section.style.overflow = 'hidden';
    section.style.display = 'flex';
    section.style.flexDirection = 'column';
    section.style.justifyContent = 'center';
    const ctx = canvas.getContext('2d');
    let W = 0,
      H = 0,
      cols = 0,
      rows = 0,
      thresh = null,
      lastP = -1;
    function build() {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      W = canvas.clientWidth;
      H = canvas.clientHeight;
      if (!W || !H) return;
      canvas.width = Math.round(W * dpr);
      canvas.height = Math.round(H * dpr);
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      cols = Math.ceil(W / CFG.cell);
      rows = Math.ceil(H / (CFG.cell * MARK_H / MARK_W));
      thresh = new Float32Array(cols * rows);
      const j = CFG.jitter / 100;
      for (let y = 0; y < rows; y++) for (let x = 0; x < cols; x++) {
        const i = y * cols + x,
          nx = x / (cols - 1 || 1),
          ny = y / (rows - 1 || 1);
        let base;
        switch (dir) {
          case 'down':
            base = ny;
            break;
          case 'right':
            base = nx;
            break;
          case 'diag':
            base = (nx + ny) / 2;
            break;
          case 'radial':
            base = Math.min(1, Math.hypot(nx - .5, ny - .5) / .707);
            break;
          default:
            base = 1 - ny;
        }
        const t = base * (1 - j) + Math.random() * j;
        thresh[i] = Math.min(.999, Math.max(0, t * (CFG.spread / 100)));
      }
      lastP = -1;
    }
    function render(p) {
      if (!W || !thresh) return;
      const cw = W / cols,
        ch = H / rows;
      const lw = Math.max(.5, CFG.stroke / 100 * cw * (CFG.fill / 100));
      const band = Math.max(.03, CFG.band / 100),
        span = 1 - band;
      const lead = CFG.lead / 100,
        speed = Math.max(.05, CFG.speed / 100);
      const tail = Math.max(.05, CFG.tail / 100),
        MINS = CFG.minScale / 100;
      const IN = .12;
      const fpt = CFG.flipAt / 100,
        fdur = Math.max(.02, CFG.flipDur / 100);
      const shrinkFrom = Math.max(IN, Math.min(.85, fpt + fdur));
      const pre = Math.max(.01, CFG.preWhite / 100),
        pa = CFG.preAlpha / 100;
      ctx.globalCompositeOperation = 'source-over';
      ctx.clearRect(0, 0, W, H);
      ctx.fillStyle = 'rgb(' + FROM[0] + ',' + FROM[1] + ',' + FROM[2] + ')';
      ctx.fillRect(0, 0, W, H);
      ctx.globalCompositeOperation = 'destination-out';
      for (let y = 0; y < rows; y++) for (let x = 0; x < cols; x++) {
        const u = (p - thresh[y * cols + x] * span) / band;
        if (u <= 0) continue;
        ctx.globalAlpha = smooth(u / speed);
        ctx.fillRect(x * cw - .4, y * ch - .4, cw + .8, ch + .8);
      }
      ctx.globalCompositeOperation = 'source-over';
      ctx.lineCap = 'butt';
      ctx.lineJoin = 'miter';
      for (let y = 0; y < rows; y++) for (let x = 0; x < cols; x++) {
        const i = y * cols + x;
        const u = (p - thresh[i] * span) / band,
          v = u + lead;
        if (v <= -pre) continue;
        let scale, alpha;
        if (v <= 0) {
          scale = 1;
          alpha = pa * smooth((v + pre) / pre);
        } else {
          scale = 1 - (1 - MINS) * smooth((v - shrinkFrom) / (1 - shrinkFrom));
          alpha = Math.max(pa, smooth(v / IN));
          if (v > 1) alpha *= 1 - smooth((v - 1) / tail);
        }
        if (scale <= .02 || alpha <= .004) continue;
        const mt = smooth((v - fpt) / fdur);
        const shape = mt <= 0 ? MARK.logo : mt >= 1 ? MARK.frame : MARK.logo.map((arr, pi) => arr.map((pt, ti) => [pt[0] + (MARK.frame[pi][ti][0] - pt[0]) * mt, pt[1] + (MARK.frame[pi][ti][1] - pt[1]) * mt]));
        const uw = cw * (CFG.fill / 100) * scale,
          uh = ch * (CFG.fill / 100) * scale;
        const slw = Math.min(lw, Math.min(uw, uh) * .4);
        const ox = x * cw + (cw - uw) / 2 + slw / 2,
          oy = y * ch + (ch - uh) / 2 + slw / 2;
        const kx = (uw - slw) / MARK_W,
          ky = (uh - slw) / MARK_H;
        const o = smooth(u / speed);
        const r = WIT[0] + (FROM[0] - WIT[0]) * o;
        const g = WIT[1] + (FROM[1] - WIT[1]) * o;
        const b = WIT[2] + (FROM[2] - WIT[2]) * o;
        ctx.globalAlpha = alpha;
        ctx.strokeStyle = 'rgb(' + (r | 0) + ',' + (g | 0) + ',' + (b | 0) + ')';
        ctx.lineWidth = slw;
        for (const seg of shape) {
          ctx.beginPath();
          ctx.moveTo(ox + seg[0][0] * kx, oy + seg[0][1] * ky);
          ctx.lineTo(ox + seg[1][0] * kx, oy + seg[1][1] * ky);
          ctx.lineTo(ox + seg[2][0] * kx, oy + seg[2][1] * ky);
          ctx.stroke();
        }
      }
      ctx.globalAlpha = 1;
    }
    function progress() {
      if (reduce) return 1;
      const vh = window.innerHeight;
      const head = vh * CFG.startEarly;
      const rect = scroller.getBoundingClientRect();
      const total = scroller.offsetHeight - vh + head;
      return Math.min(1, Math.max(0, (head - rect.top) / total));
    }
    function loop() {
      if (!thresh || canvas.clientWidth !== W || canvas.clientHeight !== H) build();
      const p = progress();
      if (Math.abs(p - lastP) > .0004) {
        render(p);
        lastP = p;
      }
      requestAnimationFrame(loop);
    }
    let rt = null;
    window.addEventListener('resize', () => {
      clearTimeout(rt);
      rt = setTimeout(build, 120);
    });
    build();
    loop();
  }
  function init() {
    document.querySelectorAll('[data-dolle-dissolve]').forEach(el => {
      if (el.dataset.dolleReady) return;
      el.dataset.dolleReady = '1';
      setup(el);
    });
  }
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', init);else init();
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/dolle-dissolve.js", error: String((e && e.message) || e) }); }

// ui_kits/website/tweaks-panel.jsx
try { (() => {
// @ds-adherence-ignore -- omelette starter scaffold (raw elements/hex/px by design)
// Copied omelette starter. Re-running copy_starter_component with this kind overwrites this file with the latest version (page content is unaffected).

/* BEGIN USAGE */
// tweaks-panel.jsx
// Reusable Tweaks shell + form-control helpers.
// Exports (to window): useTweaks, TweaksPanel, TweakSection, TweakRow, TweakSlider,
//   TweakToggle, TweakRadio, TweakSelect, TweakText, TweakNumber, TweakColor, TweakButton.
//
// Owns the host protocol (listens for __activate_edit_mode / __deactivate_edit_mode,
// posts __edit_mode_available / __edit_mode_set_keys / __edit_mode_dismissed) so
// individual prototypes don't re-roll it. Ships a consistent set of controls so you
// don't hand-draw <input type="range">, segmented radios, steppers, etc.
//
// Usage (in an HTML file that loads React + Babel):
//
//   const TWEAK_DEFAULTS = /*EDITMODE-BEGIN*/{
//     "primaryColor": "#D97757",
//     "palette": ["#D97757", "#29261b", "#f6f4ef"],
//     "fontSize": 16,
//     "density": "regular",
//     "dark": false
//   }/*EDITMODE-END*/;
//
//   function App() {
//     const [t, setTweak] = useTweaks(TWEAK_DEFAULTS);
//     return (
//       <div style={{ fontSize: t.fontSize, color: t.primaryColor }}>
//         Hello
//         <TweaksPanel>
//           <TweakSection label="Typography" />
//           <TweakSlider label="Font size" value={t.fontSize} min={10} max={32} unit="px"
//                        onChange={(v) => setTweak('fontSize', v)} />
//           <TweakRadio  label="Density" value={t.density}
//                        options={['compact', 'regular', 'comfy']}
//                        onChange={(v) => setTweak('density', v)} />
//           <TweakSection label="Theme" />
//           <TweakColor  label="Primary" value={t.primaryColor}
//                        options={['#D97757', '#2A6FDB', '#1F8A5B', '#7A5AE0']}
//                        onChange={(v) => setTweak('primaryColor', v)} />
//           <TweakColor  label="Palette" value={t.palette}
//                        options={[['#D97757', '#29261b', '#f6f4ef'],
//                                  ['#475569', '#0f172a', '#f1f5f9']]}
//                        onChange={(v) => setTweak('palette', v)} />
//           <TweakToggle label="Dark mode" value={t.dark}
//                        onChange={(v) => setTweak('dark', v)} />
//         </TweaksPanel>
//       </div>
//     );
//   }
//
// TweakRadio is the segmented control for 2–3 short options (auto-falls-back to
// TweakSelect past ~16/~10 chars per label); reach for TweakSelect directly when
// options are many or long. For color tweaks always curate 3-4 options rather than
// a free picker; an option can also be a whole 2–5 color palette (the stored value
// is the array). The Tweak* controls are a floor, not a ceiling — build custom
// controls inside the panel if a tweak calls for UI they don't cover.
/* END USAGE */
// ─────────────────────────────────────────────────────────────────────────────

const __TWEAKS_STYLE = `
  .twk-panel{position:fixed;right:16px;bottom:16px;z-index:2147483646;width:280px;
    max-height:calc(100vh - 32px);display:flex;flex-direction:column;
    transform:scale(var(--dc-inv-zoom,1));transform-origin:bottom right;
    background:rgba(250,249,247,.78);color:#29261b;
    -webkit-backdrop-filter:blur(24px) saturate(160%);backdrop-filter:blur(24px) saturate(160%);
    border:.5px solid rgba(255,255,255,.6);border-radius:14px;
    box-shadow:0 1px 0 rgba(255,255,255,.5) inset,0 12px 40px rgba(0,0,0,.18);
    font:11.5px/1.4 ui-sans-serif,system-ui,-apple-system,sans-serif;overflow:hidden}
  .twk-hd{display:flex;align-items:center;justify-content:space-between;
    padding:10px 8px 10px 14px;cursor:move;user-select:none}
  .twk-hd b{font-size:12px;font-weight:600;letter-spacing:.01em}
  .twk-x{appearance:none;border:0;background:transparent;color:rgba(41,38,27,.55);
    width:22px;height:22px;border-radius:6px;cursor:default;font-size:13px;line-height:1}
  .twk-x:hover{background:rgba(0,0,0,.06);color:#29261b}
  .twk-body{padding:2px 14px 14px;display:flex;flex-direction:column;gap:10px;
    overflow-y:auto;overflow-x:hidden;min-height:0;
    scrollbar-width:thin;scrollbar-color:rgba(0,0,0,.15) transparent}
  .twk-body::-webkit-scrollbar{width:8px}
  .twk-body::-webkit-scrollbar-track{background:transparent;margin:2px}
  .twk-body::-webkit-scrollbar-thumb{background:rgba(0,0,0,.15);border-radius:4px;
    border:2px solid transparent;background-clip:content-box}
  .twk-body::-webkit-scrollbar-thumb:hover{background:rgba(0,0,0,.25);
    border:2px solid transparent;background-clip:content-box}
  .twk-row{display:flex;flex-direction:column;gap:5px}
  .twk-row-h{flex-direction:row;align-items:center;justify-content:space-between;gap:10px}
  .twk-lbl{display:flex;justify-content:space-between;align-items:baseline;
    color:rgba(41,38,27,.72)}
  .twk-lbl>span:first-child{font-weight:500}
  .twk-val{color:rgba(41,38,27,.5);font-variant-numeric:tabular-nums}

  .twk-sect{font-size:10px;font-weight:600;letter-spacing:.06em;text-transform:uppercase;
    color:rgba(41,38,27,.45);padding:10px 0 0}
  .twk-sect:first-child{padding-top:0}

  .twk-field{appearance:none;box-sizing:border-box;width:100%;min-width:0;height:26px;padding:0 8px;
    border:.5px solid rgba(0,0,0,.1);border-radius:7px;
    background:rgba(255,255,255,.6);color:inherit;font:inherit;outline:none}
  .twk-field:focus{border-color:rgba(0,0,0,.25);background:rgba(255,255,255,.85)}
  select.twk-field{padding-right:22px;
    background-image:url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='10' height='6' viewBox='0 0 10 6'><path fill='rgba(0,0,0,.5)' d='M0 0h10L5 6z'/></svg>");
    background-repeat:no-repeat;background-position:right 8px center}

  .twk-slider{appearance:none;-webkit-appearance:none;width:100%;height:4px;margin:6px 0;
    border-radius:999px;background:rgba(0,0,0,.12);outline:none}
  .twk-slider::-webkit-slider-thumb{-webkit-appearance:none;appearance:none;
    width:14px;height:14px;border-radius:50%;background:#fff;
    border:.5px solid rgba(0,0,0,.12);box-shadow:0 1px 3px rgba(0,0,0,.2);cursor:default}
  .twk-slider::-moz-range-thumb{width:14px;height:14px;border-radius:50%;
    background:#fff;border:.5px solid rgba(0,0,0,.12);box-shadow:0 1px 3px rgba(0,0,0,.2);cursor:default}

  .twk-seg{position:relative;display:flex;padding:2px;border-radius:8px;
    background:rgba(0,0,0,.06);user-select:none}
  .twk-seg-thumb{position:absolute;top:2px;bottom:2px;border-radius:6px;
    background:rgba(255,255,255,.9);box-shadow:0 1px 2px rgba(0,0,0,.12);
    transition:left .15s cubic-bezier(.3,.7,.4,1),width .15s}
  .twk-seg.dragging .twk-seg-thumb{transition:none}
  .twk-seg button{appearance:none;position:relative;z-index:1;flex:1;border:0;
    background:transparent;color:inherit;font:inherit;font-weight:500;min-height:22px;
    border-radius:6px;cursor:default;padding:4px 6px;line-height:1.2;
    overflow-wrap:anywhere}

  .twk-toggle{position:relative;width:32px;height:18px;border:0;border-radius:999px;
    background:rgba(0,0,0,.15);transition:background .15s;cursor:default;padding:0}
  .twk-toggle[data-on="1"]{background:#34c759}
  .twk-toggle i{position:absolute;top:2px;left:2px;width:14px;height:14px;border-radius:50%;
    background:#fff;box-shadow:0 1px 2px rgba(0,0,0,.25);transition:transform .15s}
  .twk-toggle[data-on="1"] i{transform:translateX(14px)}

  .twk-num{display:flex;align-items:center;box-sizing:border-box;min-width:0;height:26px;padding:0 0 0 8px;
    border:.5px solid rgba(0,0,0,.1);border-radius:7px;background:rgba(255,255,255,.6)}
  .twk-num-lbl{font-weight:500;color:rgba(41,38,27,.6);cursor:ew-resize;
    user-select:none;padding-right:8px}
  .twk-num input{flex:1;min-width:0;height:100%;border:0;background:transparent;
    font:inherit;font-variant-numeric:tabular-nums;text-align:right;padding:0 8px 0 0;
    outline:none;color:inherit;-moz-appearance:textfield}
  .twk-num input::-webkit-inner-spin-button,.twk-num input::-webkit-outer-spin-button{
    -webkit-appearance:none;margin:0}
  .twk-num-unit{padding-right:8px;color:rgba(41,38,27,.45)}

  .twk-btn{appearance:none;height:26px;padding:0 12px;border:0;border-radius:7px;
    background:rgba(0,0,0,.78);color:#fff;font:inherit;font-weight:500;cursor:default}
  .twk-btn:hover{background:rgba(0,0,0,.88)}
  .twk-btn.secondary{background:rgba(0,0,0,.06);color:inherit}
  .twk-btn.secondary:hover{background:rgba(0,0,0,.1)}

  .twk-swatch{appearance:none;-webkit-appearance:none;width:56px;height:22px;
    border:.5px solid rgba(0,0,0,.1);border-radius:6px;padding:0;cursor:default;
    background:transparent;flex-shrink:0}
  .twk-swatch::-webkit-color-swatch-wrapper{padding:0}
  .twk-swatch::-webkit-color-swatch{border:0;border-radius:5.5px}
  .twk-swatch::-moz-color-swatch{border:0;border-radius:5.5px}

  .twk-chips{display:flex;gap:6px}
  .twk-chip{position:relative;appearance:none;flex:1;min-width:0;height:46px;
    padding:0;border:0;border-radius:6px;overflow:hidden;cursor:default;
    box-shadow:0 0 0 .5px rgba(0,0,0,.12),0 1px 2px rgba(0,0,0,.06);
    transition:transform .12s cubic-bezier(.3,.7,.4,1),box-shadow .12s}
  .twk-chip:hover{transform:translateY(-1px);
    box-shadow:0 0 0 .5px rgba(0,0,0,.18),0 4px 10px rgba(0,0,0,.12)}
  .twk-chip[data-on="1"]{box-shadow:0 0 0 1.5px rgba(0,0,0,.85),
    0 2px 6px rgba(0,0,0,.15)}
  .twk-chip>span{position:absolute;top:0;bottom:0;right:0;width:34%;
    display:flex;flex-direction:column;box-shadow:-1px 0 0 rgba(0,0,0,.1)}
  .twk-chip>span>i{flex:1;box-shadow:0 -1px 0 rgba(0,0,0,.1)}
  .twk-chip>span>i:first-child{box-shadow:none}
  .twk-chip svg{position:absolute;top:6px;left:6px;width:13px;height:13px;
    filter:drop-shadow(0 1px 1px rgba(0,0,0,.3))}
`;

// ── useTweaks ───────────────────────────────────────────────────────────────
// Single source of truth for tweak values. setTweak persists via the host
// (__edit_mode_set_keys → host rewrites the EDITMODE block on disk).
function useTweaks(defaults) {
  const [values, setValues] = React.useState(defaults);
  // Accepts either setTweak('key', value) or setTweak({ key: value, ... }) so a
  // useState-style call doesn't write a "[object Object]" key into the persisted
  // JSON block.
  const setTweak = React.useCallback((keyOrEdits, val) => {
    const edits = typeof keyOrEdits === 'object' && keyOrEdits !== null ? keyOrEdits : {
      [keyOrEdits]: val
    };
    setValues(prev => ({
      ...prev,
      ...edits
    }));
    window.parent.postMessage({
      type: '__edit_mode_set_keys',
      edits
    }, '*');
    // Same-window signal so in-page listeners (deck-stage rail thumbnails)
    // can react — the parent message only reaches the host, not peers.
    window.dispatchEvent(new CustomEvent('tweakchange', {
      detail: edits
    }));
  }, []);
  return [values, setTweak];
}

// ── TweaksPanel ─────────────────────────────────────────────────────────────
// Floating shell. Registers the protocol listener BEFORE announcing
// availability — if the announce ran first, the host's activate could land
// before our handler exists and the toolbar toggle would silently no-op.
// The close button posts __edit_mode_dismissed so the host's toolbar toggle
// flips off in lockstep; the host echoes __deactivate_edit_mode back which
// is what actually hides the panel.
function TweaksPanel({
  title = 'Tweaks',
  children
}) {
  const [open, setOpen] = React.useState(false);
  const dragRef = React.useRef(null);
  const offsetRef = React.useRef({
    x: 16,
    y: 16
  });
  const PAD = 16;
  const clampToViewport = React.useCallback(() => {
    const panel = dragRef.current;
    if (!panel) return;
    const w = panel.offsetWidth,
      h = panel.offsetHeight;
    const maxRight = Math.max(PAD, window.innerWidth - w - PAD);
    const maxBottom = Math.max(PAD, window.innerHeight - h - PAD);
    offsetRef.current = {
      x: Math.min(maxRight, Math.max(PAD, offsetRef.current.x)),
      y: Math.min(maxBottom, Math.max(PAD, offsetRef.current.y))
    };
    panel.style.right = offsetRef.current.x + 'px';
    panel.style.bottom = offsetRef.current.y + 'px';
  }, []);
  React.useEffect(() => {
    if (!open) return;
    clampToViewport();
    if (typeof ResizeObserver === 'undefined') {
      window.addEventListener('resize', clampToViewport);
      return () => window.removeEventListener('resize', clampToViewport);
    }
    const ro = new ResizeObserver(clampToViewport);
    ro.observe(document.documentElement);
    return () => ro.disconnect();
  }, [open, clampToViewport]);
  React.useEffect(() => {
    const onMsg = e => {
      const t = e?.data?.type;
      if (t === '__activate_edit_mode') setOpen(true);else if (t === '__deactivate_edit_mode') setOpen(false);
    };
    window.addEventListener('message', onMsg);
    window.parent.postMessage({
      type: '__edit_mode_available'
    }, '*');
    return () => window.removeEventListener('message', onMsg);
  }, []);
  const dismiss = () => {
    setOpen(false);
    window.parent.postMessage({
      type: '__edit_mode_dismissed'
    }, '*');
  };
  const onDragStart = e => {
    const panel = dragRef.current;
    if (!panel) return;
    const r = panel.getBoundingClientRect();
    const sx = e.clientX,
      sy = e.clientY;
    const startRight = window.innerWidth - r.right;
    const startBottom = window.innerHeight - r.bottom;
    const move = ev => {
      offsetRef.current = {
        x: startRight - (ev.clientX - sx),
        y: startBottom - (ev.clientY - sy)
      };
      clampToViewport();
    };
    const up = () => {
      window.removeEventListener('mousemove', move);
      window.removeEventListener('mouseup', up);
    };
    window.addEventListener('mousemove', move);
    window.addEventListener('mouseup', up);
  };

  // data-om-starter: inert presence marker — Claude Design's starter-usage
  // probe reads it. The closed panel renders nothing, so the marker rides
  // the <html> element as an attribute instead of a rendered node — zero
  // elements added, so page CSS (even structural selectors like
  // :nth-child) can never observe it. It records that the page WIRES a
  // tweaks panel, whether or not the panel is open. Keep this effect.
  React.useEffect(() => {
    document.documentElement.setAttribute('data-om-starter', 'tweaks-panel');
    return () => document.documentElement.removeAttribute('data-om-starter');
  }, []);
  if (!open) return null;
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("style", null, __TWEAKS_STYLE), /*#__PURE__*/React.createElement("div", {
    ref: dragRef,
    className: "twk-panel",
    "data-omelette-chrome": "",
    style: {
      right: offsetRef.current.x,
      bottom: offsetRef.current.y
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "twk-hd",
    onMouseDown: onDragStart
  }, /*#__PURE__*/React.createElement("b", null, title), /*#__PURE__*/React.createElement("button", {
    className: "twk-x",
    "aria-label": "Close tweaks",
    onMouseDown: e => e.stopPropagation(),
    onClick: dismiss
  }, "\u2715")), /*#__PURE__*/React.createElement("div", {
    className: "twk-body"
  }, children)));
}

// ── Layout helpers ──────────────────────────────────────────────────────────

function TweakSection({
  label,
  children
}) {
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    className: "twk-sect"
  }, label), children);
}
function TweakRow({
  label,
  value,
  children,
  inline = false
}) {
  return /*#__PURE__*/React.createElement("div", {
    className: inline ? 'twk-row twk-row-h' : 'twk-row'
  }, /*#__PURE__*/React.createElement("div", {
    className: "twk-lbl"
  }, /*#__PURE__*/React.createElement("span", null, label), value != null && /*#__PURE__*/React.createElement("span", {
    className: "twk-val"
  }, value)), children);
}

// ── Controls ────────────────────────────────────────────────────────────────

function TweakSlider({
  label,
  value,
  min = 0,
  max = 100,
  step = 1,
  unit = '',
  onChange
}) {
  return /*#__PURE__*/React.createElement(TweakRow, {
    label: label,
    value: `${value}${unit}`
  }, /*#__PURE__*/React.createElement("input", {
    type: "range",
    className: "twk-slider",
    min: min,
    max: max,
    step: step,
    value: value,
    onChange: e => onChange(Number(e.target.value))
  }));
}
function TweakToggle({
  label,
  value,
  onChange
}) {
  return /*#__PURE__*/React.createElement("div", {
    className: "twk-row twk-row-h"
  }, /*#__PURE__*/React.createElement("div", {
    className: "twk-lbl"
  }, /*#__PURE__*/React.createElement("span", null, label)), /*#__PURE__*/React.createElement("button", {
    type: "button",
    className: "twk-toggle",
    "data-on": value ? '1' : '0',
    role: "switch",
    "aria-checked": !!value,
    onClick: () => onChange(!value)
  }, /*#__PURE__*/React.createElement("i", null)));
}
function TweakRadio({
  label,
  value,
  options,
  onChange
}) {
  const trackRef = React.useRef(null);
  const [dragging, setDragging] = React.useState(false);
  // The active value is read by pointer-move handlers attached for the lifetime
  // of a drag — ref it so a stale closure doesn't fire onChange for every move.
  const valueRef = React.useRef(value);
  valueRef.current = value;

  // Segments wrap mid-word once per-segment width runs out. The track is
  // ~248px (280 panel − 28 body pad − 4 seg pad), each button loses 12px
  // to its own padding, and 11.5px system-ui averages ~6.3px/char — so 2
  // options fit ~16 chars each, 3 fit ~10. Past that (or >3 options), fall
  // back to a dropdown rather than wrap.
  const labelLen = o => String(typeof o === 'object' ? o.label : o).length;
  const maxLen = options.reduce((m, o) => Math.max(m, labelLen(o)), 0);
  const fitsAsSegments = maxLen <= ({
    2: 16,
    3: 10
  }[options.length] ?? 0);
  if (!fitsAsSegments) {
    // <select> emits strings — map back to the original option value so the
    // fallback stays type-preserving (numbers, booleans) like the segment path.
    const resolve = s => {
      const m = options.find(o => String(typeof o === 'object' ? o.value : o) === s);
      return m === undefined ? s : typeof m === 'object' ? m.value : m;
    };
    return /*#__PURE__*/React.createElement(TweakSelect, {
      label: label,
      value: value,
      options: options,
      onChange: s => onChange(resolve(s))
    });
  }
  const opts = options.map(o => typeof o === 'object' ? o : {
    value: o,
    label: o
  });
  const idx = Math.max(0, opts.findIndex(o => o.value === value));
  const n = opts.length;
  const segAt = clientX => {
    const r = trackRef.current.getBoundingClientRect();
    const inner = r.width - 4;
    const i = Math.floor((clientX - r.left - 2) / inner * n);
    return opts[Math.max(0, Math.min(n - 1, i))].value;
  };
  const onPointerDown = e => {
    setDragging(true);
    const v0 = segAt(e.clientX);
    if (v0 !== valueRef.current) onChange(v0);
    const move = ev => {
      if (!trackRef.current) return;
      const v = segAt(ev.clientX);
      if (v !== valueRef.current) onChange(v);
    };
    const up = () => {
      setDragging(false);
      window.removeEventListener('pointermove', move);
      window.removeEventListener('pointerup', up);
    };
    window.addEventListener('pointermove', move);
    window.addEventListener('pointerup', up);
  };
  return /*#__PURE__*/React.createElement(TweakRow, {
    label: label
  }, /*#__PURE__*/React.createElement("div", {
    ref: trackRef,
    role: "radiogroup",
    onPointerDown: onPointerDown,
    className: dragging ? 'twk-seg dragging' : 'twk-seg'
  }, /*#__PURE__*/React.createElement("div", {
    className: "twk-seg-thumb",
    style: {
      left: `calc(2px + ${idx} * (100% - 4px) / ${n})`,
      width: `calc((100% - 4px) / ${n})`
    }
  }), opts.map(o => /*#__PURE__*/React.createElement("button", {
    key: o.value,
    type: "button",
    role: "radio",
    "aria-checked": o.value === value
  }, o.label))));
}
function TweakSelect({
  label,
  value,
  options,
  onChange
}) {
  return /*#__PURE__*/React.createElement(TweakRow, {
    label: label
  }, /*#__PURE__*/React.createElement("select", {
    className: "twk-field",
    value: value,
    onChange: e => onChange(e.target.value)
  }, options.map(o => {
    const v = typeof o === 'object' ? o.value : o;
    const l = typeof o === 'object' ? o.label : o;
    return /*#__PURE__*/React.createElement("option", {
      key: v,
      value: v
    }, l);
  })));
}
function TweakText({
  label,
  value,
  placeholder,
  onChange
}) {
  return /*#__PURE__*/React.createElement(TweakRow, {
    label: label
  }, /*#__PURE__*/React.createElement("input", {
    className: "twk-field",
    type: "text",
    value: value,
    placeholder: placeholder,
    onChange: e => onChange(e.target.value)
  }));
}
function TweakNumber({
  label,
  value,
  min,
  max,
  step = 1,
  unit = '',
  onChange
}) {
  const clamp = n => {
    if (min != null && n < min) return min;
    if (max != null && n > max) return max;
    return n;
  };
  const startRef = React.useRef({
    x: 0,
    val: 0
  });
  const onScrubStart = e => {
    e.preventDefault();
    startRef.current = {
      x: e.clientX,
      val: value
    };
    const decimals = (String(step).split('.')[1] || '').length;
    const move = ev => {
      const dx = ev.clientX - startRef.current.x;
      const raw = startRef.current.val + dx * step;
      const snapped = Math.round(raw / step) * step;
      onChange(clamp(Number(snapped.toFixed(decimals))));
    };
    const up = () => {
      window.removeEventListener('pointermove', move);
      window.removeEventListener('pointerup', up);
    };
    window.addEventListener('pointermove', move);
    window.addEventListener('pointerup', up);
  };
  return /*#__PURE__*/React.createElement("div", {
    className: "twk-num"
  }, /*#__PURE__*/React.createElement("span", {
    className: "twk-num-lbl",
    onPointerDown: onScrubStart
  }, label), /*#__PURE__*/React.createElement("input", {
    type: "number",
    value: value,
    min: min,
    max: max,
    step: step,
    onChange: e => onChange(clamp(Number(e.target.value)))
  }), unit && /*#__PURE__*/React.createElement("span", {
    className: "twk-num-unit"
  }, unit));
}

// Relative-luminance contrast pick — checkmarks drawn over a swatch need to
// read on both #111 and #fafafa without per-option configuration. Hex input
// only (#rgb / #rrggbb); named or rgb()/hsl() colors fall through to "light".
function __twkIsLight(hex) {
  const h = String(hex).replace('#', '');
  const x = h.length === 3 ? h.replace(/./g, c => c + c) : h.padEnd(6, '0');
  const n = parseInt(x.slice(0, 6), 16);
  if (Number.isNaN(n)) return true;
  const r = n >> 16 & 255,
    g = n >> 8 & 255,
    b = n & 255;
  return r * 299 + g * 587 + b * 114 > 148000;
}
const __TwkCheck = ({
  light
}) => /*#__PURE__*/React.createElement("svg", {
  viewBox: "0 0 14 14",
  "aria-hidden": "true"
}, /*#__PURE__*/React.createElement("path", {
  d: "M3 7.2 5.8 10 11 4.2",
  fill: "none",
  strokeWidth: "2.2",
  strokeLinecap: "round",
  strokeLinejoin: "round",
  stroke: light ? 'rgba(0,0,0,.78)' : '#fff'
}));

// TweakColor — curated color/palette picker. Each option is either a single
// hex string or an array of 1-5 hex strings; the card adapts — a lone color
// renders solid, a palette renders colors[0] as the hero (left ~2/3) with the
// rest stacked in a sharp column on the right. onChange emits the
// option in the shape it was passed (string stays string, array stays array).
// Without options it falls back to the native color input for back-compat.
function TweakColor({
  label,
  value,
  options,
  onChange
}) {
  if (!options || !options.length) {
    return /*#__PURE__*/React.createElement("div", {
      className: "twk-row twk-row-h"
    }, /*#__PURE__*/React.createElement("div", {
      className: "twk-lbl"
    }, /*#__PURE__*/React.createElement("span", null, label)), /*#__PURE__*/React.createElement("input", {
      type: "color",
      className: "twk-swatch",
      value: value,
      onChange: e => onChange(e.target.value)
    }));
  }
  // Native <input type=color> emits lowercase hex per the HTML spec, so
  // compare case-insensitively. String() guards JSON.stringify(undefined),
  // which returns the primitive undefined (no .toLowerCase).
  const key = o => String(JSON.stringify(o)).toLowerCase();
  const cur = key(value);
  return /*#__PURE__*/React.createElement(TweakRow, {
    label: label
  }, /*#__PURE__*/React.createElement("div", {
    className: "twk-chips",
    role: "radiogroup"
  }, options.map((o, i) => {
    const colors = Array.isArray(o) ? o : [o];
    const [hero, ...rest] = colors;
    const sup = rest.slice(0, 4);
    const on = key(o) === cur;
    return /*#__PURE__*/React.createElement("button", {
      key: i,
      type: "button",
      className: "twk-chip",
      role: "radio",
      "aria-checked": on,
      "data-on": on ? '1' : '0',
      "aria-label": colors.join(', '),
      title: colors.join(' · '),
      style: {
        background: hero
      },
      onClick: () => onChange(o)
    }, sup.length > 0 && /*#__PURE__*/React.createElement("span", null, sup.map((c, j) => /*#__PURE__*/React.createElement("i", {
      key: j,
      style: {
        background: c
      }
    }))), on && /*#__PURE__*/React.createElement(__TwkCheck, {
      light: __twkIsLight(hero)
    }));
  })));
}
function TweakButton({
  label,
  onClick,
  secondary = false
}) {
  return /*#__PURE__*/React.createElement("button", {
    type: "button",
    className: secondary ? 'twk-btn secondary' : 'twk-btn',
    onClick: onClick
  }, label);
}
Object.assign(window, {
  useTweaks,
  TweaksPanel,
  TweakSection,
  TweakRow,
  TweakSlider,
  TweakToggle,
  TweakRadio,
  TweakSelect,
  TweakText,
  TweakNumber,
  TweakColor,
  TweakButton
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/tweaks-panel.jsx", error: String((e && e.message) || e) }); }

__ds_ns.CornerRule = __ds_scope.CornerRule;

__ds_ns.Frame = __ds_scope.Frame;

__ds_ns.Kicker = __ds_scope.Kicker;

__ds_ns.Logo = __ds_scope.Logo;

__ds_ns.StatFrame = __ds_scope.StatFrame;

__ds_ns.WildlyRotator = __ds_scope.WildlyRotator;

__ds_ns.DEFAULT_WORDS = __ds_scope.DEFAULT_WORDS;

__ds_ns.WildlyStatement = __ds_scope.WildlyStatement;

__ds_ns.Badge = __ds_scope.Badge;

__ds_ns.Button = __ds_scope.Button;

__ds_ns.Card = __ds_scope.Card;

__ds_ns.Dialog = __ds_scope.Dialog;

__ds_ns.LUCIDE_CDN = __ds_scope.LUCIDE_CDN;

__ds_ns.BRAND_PATHS = __ds_scope.BRAND_PATHS;

__ds_ns.Icon = __ds_scope.Icon;

__ds_ns.IconButton = __ds_scope.IconButton;

__ds_ns.Tabs = __ds_scope.Tabs;

__ds_ns.Tag = __ds_scope.Tag;

__ds_ns.Toast = __ds_scope.Toast;

__ds_ns.Tooltip = __ds_scope.Tooltip;

__ds_ns.Checkbox = __ds_scope.Checkbox;

__ds_ns.Input = __ds_scope.Input;

__ds_ns.Radio = __ds_scope.Radio;

__ds_ns.Select = __ds_scope.Select;

__ds_ns.Switch = __ds_scope.Switch;

__ds_ns.PageEdge = __ds_scope.PageEdge;

__ds_ns.Section = __ds_scope.Section;

__ds_ns.ServiceList = __ds_scope.ServiceList;

__ds_ns.DEFAULT_SERVICES = __ds_scope.DEFAULT_SERVICES;

})();
