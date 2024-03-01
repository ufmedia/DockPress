/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./public/src/js/index.js":
/*!********************************!*\
  !*** ./public/src/js/index.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _scss_style_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../scss/style.scss */ "./public/src/scss/style.scss");
/* harmony import */ var tw_elements__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tw-elements */ "./node_modules/tw-elements/dist/js/tw-elements.es.min.js");


//import any other js files here

/***/ }),

/***/ "./public/src/scss/style.scss":
/*!************************************!*\
  !*** ./public/src/scss/style.scss ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./node_modules/tw-elements/dist/js/tw-elements.es.min.js":
/*!****************************************************************!*\
  !*** ./node_modules/tw-elements/dist/js/tw-elements.es.min.js ***!
  \****************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Alert: () => (/* binding */ Ko),
/* harmony export */   Animate: () => (/* binding */ wr),
/* harmony export */   Autocomplete: () => (/* binding */ id),
/* harmony export */   Button: () => (/* binding */ kc),
/* harmony export */   Carousel: () => (/* binding */ Xt),
/* harmony export */   Chart: () => (/* binding */ Lh),
/* harmony export */   Chip: () => (/* binding */ vi),
/* harmony export */   ChipsInput: () => (/* binding */ XA),
/* harmony export */   Clipboard: () => (/* binding */ Uh),
/* harmony export */   Collapse: () => (/* binding */ Qt),
/* harmony export */   Datatable: () => (/* binding */ Hh),
/* harmony export */   Datepicker: () => (/* binding */ og),
/* harmony export */   Datetimepicker: () => (/* binding */ Qh),
/* harmony export */   Dropdown: () => (/* binding */ $t),
/* harmony export */   InfiniteScroll: () => (/* binding */ Xh),
/* harmony export */   Input: () => (/* binding */ V),
/* harmony export */   LazyLoad: () => (/* binding */ or),
/* harmony export */   Lightbox: () => (/* binding */ nn),
/* harmony export */   LoadingManagement: () => (/* binding */ Gh),
/* harmony export */   Modal: () => (/* binding */ zo),
/* harmony export */   MultiRangeSlider: () => (/* binding */ sd),
/* harmony export */   Offcanvas: () => (/* binding */ js),
/* harmony export */   PerfectScrollbar: () => (/* binding */ Bh),
/* harmony export */   Popconfirm: () => (/* binding */ Wh),
/* harmony export */   Popover: () => (/* binding */ nh),
/* harmony export */   Rating: () => (/* binding */ GA),
/* harmony export */   Ripple: () => (/* binding */ ei),
/* harmony export */   ScrollSpy: () => (/* binding */ ah),
/* harmony export */   Select: () => (/* binding */ kr),
/* harmony export */   Sidenav: () => (/* binding */ Ci),
/* harmony export */   SmoothScroll: () => (/* binding */ zh),
/* harmony export */   Stepper: () => (/* binding */ UA),
/* harmony export */   Sticky: () => (/* binding */ td),
/* harmony export */   Tab: () => (/* binding */ lh),
/* harmony export */   Timepicker: () => (/* binding */ Sg),
/* harmony export */   Toast: () => (/* binding */ Xo),
/* harmony export */   Tooltip: () => (/* binding */ ri),
/* harmony export */   Touch: () => (/* binding */ Kh),
/* harmony export */   Validation: () => (/* binding */ jh),
/* harmony export */   initTE: () => (/* binding */ qA)
/* harmony export */ });
/*!
* TW Elements 1.1.0
* 
* TW Elements is an open-source UI kit of advanced components for TailwindCSS.
* Copyright © 2023 MDBootstrap.com
* 
* Unless a custom, individually assigned license has been granted, this program is free software: you can redistribute it and/or modify it under the terms of the GNU Affero General Public License as published by the Free Software Foundation, either version 3 of the License, or (at your option) any later version.
* In addition, a custom license may be available upon request, subject to the terms and conditions of that license. Please contact tailwind@mdbootstrap.com for more information on obtaining a custom license.
* This program is distributed in the hope that it will be useful, but WITHOUT ANY WARRANTY; without even the implied warranty of MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the GNU Affero General Public License for more details.
* 
* If you would like to purchase a COMMERCIAL, non-AGPL license for TWE, please check out our pricing: https://tw-elements.com/pro/
*/
var hd = Object.defineProperty;
var dd = (s, t, e) => t in s ? hd(s, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : s[t] = e;
var wt = (s, t, e) => (dd(s, typeof t != "symbol" ? t + "" : t, e), e);
const In = (() => {
  const s = {};
  let t = 1;
  return {
    set(e, i, n) {
      typeof e[i] > "u" && (e[i] = {
        key: i,
        id: t
      }, t++), s[e[i].id] = n;
    },
    get(e, i) {
      if (!e || typeof e[i] > "u")
        return null;
      const n = e[i];
      return n.key === i ? s[n.id] : null;
    },
    delete(e, i) {
      if (typeof e[i] > "u")
        return;
      const n = e[i];
      n.key === i && (delete s[n.id], delete e[i]);
    }
  };
})(), A = {
  setData(s, t, e) {
    In.set(s, t, e);
  },
  getData(s, t) {
    return In.get(s, t);
  },
  removeData(s, t) {
    In.delete(s, t);
  }
}, ud = 1e6, pd = 1e3, Ho = "transitionend", _d = (s) => s == null ? `${s}` : {}.toString.call(s).match(/\s([a-z]+)/i)[1].toLowerCase(), et = (s) => {
  do
    s += Math.floor(Math.random() * ud);
  while (document.getElementById(s));
  return s;
}, pc = (s) => {
  let t = s.getAttribute("data-te-target");
  if (!t || t === "#") {
    let e = s.getAttribute("href");
    if (!e || !e.includes("#") && !e.startsWith("."))
      return null;
    e.includes("#") && !e.startsWith("#") && (e = `#${e.split("#")[1]}`), t = e && e !== "#" ? e.trim() : null;
  }
  return t;
}, lr = (s) => {
  const t = pc(s);
  return t && document.querySelector(t) ? t : null;
}, te = (s) => {
  const t = pc(s);
  return t ? document.querySelector(t) : null;
}, cn = (s) => {
  if (!s)
    return 0;
  let { transitionDuration: t, transitionDelay: e } = window.getComputedStyle(s);
  const i = Number.parseFloat(t), n = Number.parseFloat(e);
  return !i && !n ? 0 : (t = t.split(",")[0], e = e.split(",")[0], (Number.parseFloat(t) + Number.parseFloat(e)) * pd);
}, _c = (s) => {
  s.dispatchEvent(new Event(Ho));
}, Xe = (s) => !s || typeof s != "object" ? !1 : (typeof s.jquery < "u" && (s = s[0]), typeof s.nodeType < "u"), ee = (s) => Xe(s) ? s.jquery ? s[0] : s : typeof s == "string" && s.length > 0 ? document.querySelector(s) : null, I = (s, t, e) => {
  Object.keys(e).forEach((i) => {
    const n = e[i], o = t[i], r = o && Xe(o) ? "element" : _d(o);
    if (!new RegExp(n).test(r))
      throw new Error(
        `${s.toUpperCase()}: Option "${i}" provided type "${r}" but expected type "${n}".`
      );
  });
}, Mt = (s) => {
  if (!s || s.getClientRects().length === 0)
    return !1;
  if (s.style && s.parentNode && s.parentNode.style) {
    const t = getComputedStyle(s), e = getComputedStyle(s.parentNode);
    return getComputedStyle(s).getPropertyValue("visibility") === "visible" || t.display !== "none" && e.display !== "none" && t.visibility !== "hidden";
  }
  return !1;
}, be = (s) => !s || s.nodeType !== Node.ELEMENT_NODE || s.classList.contains("disabled") ? !0 : typeof s.disabled < "u" ? s.disabled : s.hasAttribute("disabled") && s.getAttribute("disabled") !== "false", fc = (s) => {
  if (!document.documentElement.attachShadow)
    return null;
  if (typeof s.getRootNode == "function") {
    const t = s.getRootNode();
    return t instanceof ShadowRoot ? t : null;
  }
  return s instanceof ShadowRoot ? s : s.parentNode ? fc(s.parentNode) : null;
}, hn = () => function() {
}, si = (s) => {
  s.offsetHeight;
}, mc = () => {
  const { jQuery: s } = window;
  return s && !document.body.hasAttribute("data-te-no-jquery") ? s : null;
}, Dn = [], gc = (s) => {
  document.readyState === "loading" ? (Dn.length || document.addEventListener("DOMContentLoaded", () => {
    Dn.forEach((t) => t());
  }), Dn.push(s)) : s();
}, W = () => document.documentElement.dir === "rtl", fd = (s) => Array.from(s), $ = (s) => document.createElement(s), ge = (s) => {
  typeof s == "function" && s();
}, bc = (s, t, e = !0) => {
  if (!e) {
    ge(s);
    return;
  }
  const i = 5, n = cn(t) + i;
  let o = !1;
  const r = ({ target: a }) => {
    a === t && (o = !0, t.removeEventListener(Ho, r), ge(s));
  };
  t.addEventListener(Ho, r), setTimeout(() => {
    o || _c(t);
  }, n);
}, vc = (s, t, e, i) => {
  let n = s.indexOf(t);
  if (n === -1)
    return s[!e && i ? s.length - 1 : 0];
  const o = s.length;
  return n += e ? 1 : -1, i && (n = (n + o) % o), s[Math.max(0, Math.min(n, o - 1))];
}, md = /[^.]*(?=\..*)\.|.*/, gd = /\..*/, bd = /::\d+$/, $n = {};
let Hr = 1;
const vd = {
  mouseenter: "mouseover",
  mouseleave: "mouseout"
}, Td = /^(mouseenter|mouseleave)/i, Tc = /* @__PURE__ */ new Set([
  "click",
  "dblclick",
  "mouseup",
  "mousedown",
  "contextmenu",
  "mousewheel",
  "DOMMouseScroll",
  "mouseover",
  "mouseout",
  "mousemove",
  "selectstart",
  "selectend",
  "keydown",
  "keypress",
  "keyup",
  "orientationchange",
  "touchstart",
  "touchmove",
  "touchend",
  "touchcancel",
  "pointerdown",
  "pointermove",
  "pointerup",
  "pointerleave",
  "pointercancel",
  "gesturestart",
  "gesturechange",
  "gestureend",
  "focus",
  "blur",
  "change",
  "reset",
  "select",
  "submit",
  "focusin",
  "focusout",
  "load",
  "unload",
  "beforeunload",
  "resize",
  "move",
  "DOMContentLoaded",
  "readystatechange",
  "error",
  "abort",
  "scroll"
]);
function Ec(s, t) {
  return t && `${t}::${Hr++}` || s.uidEvent || Hr++;
}
function Cc(s) {
  const t = Ec(s);
  return s.uidEvent = t, $n[t] = $n[t] || {}, $n[t];
}
function Ed(s, t) {
  return function e(i) {
    return i.delegateTarget = s, e.oneOff && c.off(s, i.type, t), t.apply(s, [i]);
  };
}
function Cd(s, t, e) {
  return function i(n) {
    const o = s.querySelectorAll(t);
    for (let { target: r } = n; r && r !== this; r = r.parentNode)
      for (let a = o.length; a--; "")
        if (o[a] === r)
          return n.delegateTarget = r, i.oneOff && c.off(s, n.type, e), e.apply(r, [n]);
    return null;
  };
}
function Ac(s, t, e = null) {
  const i = Object.keys(s);
  for (let n = 0, o = i.length; n < o; n++) {
    const r = s[i[n]];
    if (r.originalHandler === t && r.delegationSelector === e)
      return r;
  }
  return null;
}
function yc(s, t, e) {
  const i = typeof t == "string", n = i ? e : t;
  let o = wc(s);
  return Tc.has(o) || (o = s), [i, n, o];
}
function Vr(s, t, e, i, n) {
  if (typeof t != "string" || !s)
    return;
  if (e || (e = i, i = null), Td.test(t)) {
    const g = (m) => function(b) {
      if (!b.relatedTarget || b.relatedTarget !== b.delegateTarget && !b.delegateTarget.contains(b.relatedTarget))
        return m.call(this, b);
    };
    i ? i = g(i) : e = g(e);
  }
  const [o, r, a] = yc(
    t,
    e,
    i
  ), l = Cc(s), p = l[a] || (l[a] = {}), u = Ac(
    p,
    r,
    o ? e : null
  );
  if (u) {
    u.oneOff = u.oneOff && n;
    return;
  }
  const _ = Ec(
    r,
    t.replace(md, "")
  ), f = o ? Cd(s, e, i) : Ed(s, e);
  f.delegationSelector = o ? e : null, f.originalHandler = r, f.oneOff = n, f.uidEvent = _, p[_] = f, s.addEventListener(a, f, o);
}
function Vo(s, t, e, i, n) {
  const o = Ac(t[e], i, n);
  o && (s.removeEventListener(e, o, !!n), delete t[e][o.uidEvent]);
}
function Ad(s, t, e, i) {
  const n = t[e] || {};
  Object.keys(n).forEach((o) => {
    if (o.includes(i)) {
      const r = n[o];
      Vo(
        s,
        t,
        e,
        r.originalHandler,
        r.delegationSelector
      );
    }
  });
}
function wc(s) {
  return s = s.replace(gd, ""), vd[s] || s;
}
const c = {
  on(s, t, e, i) {
    Vr(s, t, e, i, !1);
  },
  one(s, t, e, i) {
    Vr(s, t, e, i, !0);
  },
  off(s, t, e, i) {
    if (typeof t != "string" || !s)
      return;
    const [n, o, r] = yc(
      t,
      e,
      i
    ), a = r !== t, l = Cc(s), p = t.startsWith(".");
    if (typeof o < "u") {
      if (!l || !l[r])
        return;
      Vo(
        s,
        l,
        r,
        o,
        n ? e : null
      );
      return;
    }
    p && Object.keys(l).forEach((_) => {
      Ad(
        s,
        l,
        _,
        t.slice(1)
      );
    });
    const u = l[r] || {};
    Object.keys(u).forEach((_) => {
      const f = _.replace(bd, "");
      if (!a || t.includes(f)) {
        const g = u[_];
        Vo(
          s,
          l,
          r,
          g.originalHandler,
          g.delegationSelector
        );
      }
    });
  },
  trigger(s, t, e) {
    if (typeof t != "string" || !s)
      return null;
    const i = mc(), n = wc(t), o = t !== n, r = Tc.has(n);
    let a, l = !0, p = !0, u = !1, _ = null;
    return o && i && (a = i.Event(t, e), i(s).trigger(a), l = !a.isPropagationStopped(), p = !a.isImmediatePropagationStopped(), u = a.isDefaultPrevented()), r ? (_ = document.createEvent("HTMLEvents"), _.initEvent(n, l, !0)) : _ = new CustomEvent(t, {
      bubbles: l,
      cancelable: !0
    }), typeof e < "u" && Object.keys(e).forEach((f) => {
      Object.defineProperty(_, f, {
        get() {
          return e[f];
        }
      });
    }), u && _.preventDefault(), p && s.dispatchEvent(_), _.defaultPrevented && typeof a < "u" && a.preventDefault(), _;
  }
}, K = {
  on(s, t, e, i) {
    const n = t.split(" ");
    for (let o = 0; o < n.length; o++)
      c.on(s, n[o], e, i);
  },
  off(s, t, e, i) {
    const n = t.split(" ");
    for (let o = 0; o < n.length; o++)
      c.off(s, n[o], e, i);
  }
}, yd = "5.1.3";
class ft {
  constructor(t) {
    t = ee(t), t && (this._element = t, A.setData(this._element, this.constructor.DATA_KEY, this));
  }
  dispose() {
    A.removeData(this._element, this.constructor.DATA_KEY), c.off(this._element, this.constructor.EVENT_KEY), Object.getOwnPropertyNames(this).forEach((t) => {
      this[t] = null;
    });
  }
  _queueCallback(t, e, i = !0) {
    bc(t, e, i);
  }
  /** Static */
  static getInstance(t) {
    return A.getData(ee(t), this.DATA_KEY);
  }
  static getOrCreateInstance(t, e = {}) {
    return this.getInstance(t) || new this(t, typeof e == "object" ? e : null);
  }
  static get VERSION() {
    return yd;
  }
  static get NAME() {
    throw new Error(
      'You have to implement the static method "NAME", for each component!'
    );
  }
  static get DATA_KEY() {
    return `te.${this.NAME}`;
  }
  static get EVENT_KEY() {
    return `.${this.DATA_KEY}`;
  }
}
const wd = "button", kd = "active";
class kc extends ft {
  // Getters
  static get NAME() {
    return wd;
  }
  // Public
  toggle() {
    this._element.setAttribute(
      "aria-pressed",
      this._element.classList.toggle(kd)
    );
  }
  // Static
  static jQueryInterface(t) {
    return this.each(function() {
      const e = kc.getOrCreateInstance(this);
      t === "toggle" && e[t]();
    });
  }
}
var st = "top", ut = "bottom", pt = "right", nt = "left", ji = "auto", ni = [st, ut, pt, nt], Ae = "start", Ge = "end", xc = "clippingParents", cr = "viewport", Be = "popper", Oc = "reference", Wo = /* @__PURE__ */ ni.reduce(function(s, t) {
  return s.concat([t + "-" + Ae, t + "-" + Ge]);
}, []), hr = /* @__PURE__ */ [].concat(ni, [ji]).reduce(function(s, t) {
  return s.concat([t, t + "-" + Ae, t + "-" + Ge]);
}, []), Sc = "beforeRead", Ic = "read", Dc = "afterRead", $c = "beforeMain", Lc = "main", Nc = "afterMain", Mc = "beforeWrite", Rc = "write", Pc = "afterWrite", dn = [Sc, Ic, Dc, $c, Lc, Nc, Mc, Rc, Pc];
function Rt(s) {
  return s ? (s.nodeName || "").toLowerCase() : null;
}
function _t(s) {
  if (s == null)
    return window;
  if (s.toString() !== "[object Window]") {
    var t = s.ownerDocument;
    return t && t.defaultView || window;
  }
  return s;
}
function ye(s) {
  var t = _t(s).Element;
  return s instanceof t || s instanceof Element;
}
function dt(s) {
  var t = _t(s).HTMLElement;
  return s instanceof t || s instanceof HTMLElement;
}
function dr(s) {
  if (typeof ShadowRoot > "u")
    return !1;
  var t = _t(s).ShadowRoot;
  return s instanceof t || s instanceof ShadowRoot;
}
function xd(s) {
  var t = s.state;
  Object.keys(t.elements).forEach(function(e) {
    var i = t.styles[e] || {}, n = t.attributes[e] || {}, o = t.elements[e];
    !dt(o) || !Rt(o) || (Object.assign(o.style, i), Object.keys(n).forEach(function(r) {
      var a = n[r];
      a === !1 ? o.removeAttribute(r) : o.setAttribute(r, a === !0 ? "" : a);
    }));
  });
}
function Od(s) {
  var t = s.state, e = {
    popper: {
      position: t.options.strategy,
      left: "0",
      top: "0",
      margin: "0"
    },
    arrow: {
      position: "absolute"
    },
    reference: {}
  };
  return Object.assign(t.elements.popper.style, e.popper), t.styles = e, t.elements.arrow && Object.assign(t.elements.arrow.style, e.arrow), function() {
    Object.keys(t.elements).forEach(function(i) {
      var n = t.elements[i], o = t.attributes[i] || {}, r = Object.keys(t.styles.hasOwnProperty(i) ? t.styles[i] : e[i]), a = r.reduce(function(l, p) {
        return l[p] = "", l;
      }, {});
      !dt(n) || !Rt(n) || (Object.assign(n.style, a), Object.keys(o).forEach(function(l) {
        n.removeAttribute(l);
      }));
    });
  };
}
const ur = {
  name: "applyStyles",
  enabled: !0,
  phase: "write",
  fn: xd,
  effect: Od,
  requires: ["computeStyles"]
};
function Et(s) {
  return s.split("-")[0];
}
var ve = Math.max, un = Math.min, qe = Math.round;
function Fo() {
  var s = navigator.userAgentData;
  return s != null && s.brands && Array.isArray(s.brands) ? s.brands.map(function(t) {
    return t.brand + "/" + t.version;
  }).join(" ") : navigator.userAgent;
}
function Bc() {
  return !/^((?!chrome|android).)*safari/i.test(Fo());
}
function Ze(s, t, e) {
  t === void 0 && (t = !1), e === void 0 && (e = !1);
  var i = s.getBoundingClientRect(), n = 1, o = 1;
  t && dt(s) && (n = s.offsetWidth > 0 && qe(i.width) / s.offsetWidth || 1, o = s.offsetHeight > 0 && qe(i.height) / s.offsetHeight || 1);
  var r = ye(s) ? _t(s) : window, a = r.visualViewport, l = !Bc() && e, p = (i.left + (l && a ? a.offsetLeft : 0)) / n, u = (i.top + (l && a ? a.offsetTop : 0)) / o, _ = i.width / n, f = i.height / o;
  return {
    width: _,
    height: f,
    top: u,
    right: p + _,
    bottom: u + f,
    left: p,
    x: p,
    y: u
  };
}
function pr(s) {
  var t = Ze(s), e = s.offsetWidth, i = s.offsetHeight;
  return Math.abs(t.width - e) <= 1 && (e = t.width), Math.abs(t.height - i) <= 1 && (i = t.height), {
    x: s.offsetLeft,
    y: s.offsetTop,
    width: e,
    height: i
  };
}
function Hc(s, t) {
  var e = t.getRootNode && t.getRootNode();
  if (s.contains(t))
    return !0;
  if (e && dr(e)) {
    var i = t;
    do {
      if (i && s.isSameNode(i))
        return !0;
      i = i.parentNode || i.host;
    } while (i);
  }
  return !1;
}
function At(s) {
  return _t(s).getComputedStyle(s);
}
function Sd(s) {
  return ["table", "td", "th"].indexOf(Rt(s)) >= 0;
}
function ie(s) {
  return ((ye(s) ? s.ownerDocument : (
    // $FlowFixMe[prop-missing]
    s.document
  )) || window.document).documentElement;
}
function mn(s) {
  return Rt(s) === "html" ? s : (
    // this is a quicker (but less type safe) way to save quite some bytes from the bundle
    // $FlowFixMe[incompatible-return]
    // $FlowFixMe[prop-missing]
    s.assignedSlot || // step into the shadow DOM of the parent of a slotted node
    s.parentNode || // DOM Element detected
    (dr(s) ? s.host : null) || // ShadowRoot detected
    // $FlowFixMe[incompatible-call]: HTMLElement is a Node
    ie(s)
  );
}
function Wr(s) {
  return !dt(s) || // https://github.com/popperjs/popper-core/issues/837
  At(s).position === "fixed" ? null : s.offsetParent;
}
function Id(s) {
  var t = /firefox/i.test(Fo()), e = /Trident/i.test(Fo());
  if (e && dt(s)) {
    var i = At(s);
    if (i.position === "fixed")
      return null;
  }
  var n = mn(s);
  for (dr(n) && (n = n.host); dt(n) && ["html", "body"].indexOf(Rt(n)) < 0; ) {
    var o = At(n);
    if (o.transform !== "none" || o.perspective !== "none" || o.contain === "paint" || ["transform", "perspective"].indexOf(o.willChange) !== -1 || t && o.willChange === "filter" || t && o.filter && o.filter !== "none")
      return n;
    n = n.parentNode;
  }
  return null;
}
function Ki(s) {
  for (var t = _t(s), e = Wr(s); e && Sd(e) && At(e).position === "static"; )
    e = Wr(e);
  return e && (Rt(e) === "html" || Rt(e) === "body" && At(e).position === "static") ? t : e || Id(s) || t;
}
function _r(s) {
  return ["top", "bottom"].indexOf(s) >= 0 ? "x" : "y";
}
function Mi(s, t, e) {
  return ve(s, un(t, e));
}
function Dd(s, t, e) {
  var i = Mi(s, t, e);
  return i > e ? e : i;
}
function Vc() {
  return {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0
  };
}
function Wc(s) {
  return Object.assign({}, Vc(), s);
}
function Fc(s, t) {
  return t.reduce(function(e, i) {
    return e[i] = s, e;
  }, {});
}
var $d = function(t, e) {
  return t = typeof t == "function" ? t(Object.assign({}, e.rects, {
    placement: e.placement
  })) : t, Wc(typeof t != "number" ? t : Fc(t, ni));
};
function Ld(s) {
  var t, e = s.state, i = s.name, n = s.options, o = e.elements.arrow, r = e.modifiersData.popperOffsets, a = Et(e.placement), l = _r(a), p = [nt, pt].indexOf(a) >= 0, u = p ? "height" : "width";
  if (!(!o || !r)) {
    var _ = $d(n.padding, e), f = pr(o), g = l === "y" ? st : nt, m = l === "y" ? ut : pt, b = e.rects.reference[u] + e.rects.reference[l] - r[l] - e.rects.popper[u], v = r[l] - e.rects.reference[l], T = Ki(o), y = T ? l === "y" ? T.clientHeight || 0 : T.clientWidth || 0 : 0, C = b / 2 - v / 2, E = _[g], w = y - f[u] - _[m], k = y / 2 - f[u] / 2 + C, D = Mi(E, k, w), O = l;
    e.modifiersData[i] = (t = {}, t[O] = D, t.centerOffset = D - k, t);
  }
}
function Nd(s) {
  var t = s.state, e = s.options, i = e.element, n = i === void 0 ? "[data-popper-arrow]" : i;
  if (n != null && !(typeof n == "string" && (n = t.elements.popper.querySelector(n), !n))) {
    if ({}.NODE_ENV !== "production" && (dt(n) || console.error(['Popper: "arrow" element must be an HTMLElement (not an SVGElement).', "To use an SVG arrow, wrap it in an HTMLElement that will be used as", "the arrow."].join(" "))), !Hc(t.elements.popper, n)) {
      ({}).NODE_ENV !== "production" && console.error(['Popper: "arrow" modifier\'s `element` must be a child of the popper', "element."].join(" "));
      return;
    }
    t.elements.arrow = n;
  }
}
const Yc = {
  name: "arrow",
  enabled: !0,
  phase: "main",
  fn: Ld,
  effect: Nd,
  requires: ["popperOffsets"],
  requiresIfExists: ["preventOverflow"]
};
function Qe(s) {
  return s.split("-")[1];
}
var Md = {
  top: "auto",
  right: "auto",
  bottom: "auto",
  left: "auto"
};
function Rd(s, t) {
  var e = s.x, i = s.y, n = t.devicePixelRatio || 1;
  return {
    x: qe(e * n) / n || 0,
    y: qe(i * n) / n || 0
  };
}
function Fr(s) {
  var t, e = s.popper, i = s.popperRect, n = s.placement, o = s.variation, r = s.offsets, a = s.position, l = s.gpuAcceleration, p = s.adaptive, u = s.roundOffsets, _ = s.isFixed, f = r.x, g = f === void 0 ? 0 : f, m = r.y, b = m === void 0 ? 0 : m, v = typeof u == "function" ? u({
    x: g,
    y: b
  }) : {
    x: g,
    y: b
  };
  g = v.x, b = v.y;
  var T = r.hasOwnProperty("x"), y = r.hasOwnProperty("y"), C = nt, E = st, w = window;
  if (p) {
    var k = Ki(e), D = "clientHeight", O = "clientWidth";
    if (k === _t(e) && (k = ie(e), At(k).position !== "static" && a === "absolute" && (D = "scrollHeight", O = "scrollWidth")), k = k, n === st || (n === nt || n === pt) && o === Ge) {
      E = ut;
      var x = _ && k === w && w.visualViewport ? w.visualViewport.height : (
        // $FlowFixMe[prop-missing]
        k[D]
      );
      b -= x - i.height, b *= l ? 1 : -1;
    }
    if (n === nt || (n === st || n === ut) && o === Ge) {
      C = pt;
      var L = _ && k === w && w.visualViewport ? w.visualViewport.width : (
        // $FlowFixMe[prop-missing]
        k[O]
      );
      g -= L - i.width, g *= l ? 1 : -1;
    }
  }
  var S = Object.assign({
    position: a
  }, p && Md), N = u === !0 ? Rd({
    x: g,
    y: b
  }, _t(e)) : {
    x: g,
    y: b
  };
  if (g = N.x, b = N.y, l) {
    var P;
    return Object.assign({}, S, (P = {}, P[E] = y ? "0" : "", P[C] = T ? "0" : "", P.transform = (w.devicePixelRatio || 1) <= 1 ? "translate(" + g + "px, " + b + "px)" : "translate3d(" + g + "px, " + b + "px, 0)", P));
  }
  return Object.assign({}, S, (t = {}, t[E] = y ? b + "px" : "", t[C] = T ? g + "px" : "", t.transform = "", t));
}
function Pd(s) {
  var t = s.state, e = s.options, i = e.gpuAcceleration, n = i === void 0 ? !0 : i, o = e.adaptive, r = o === void 0 ? !0 : o, a = e.roundOffsets, l = a === void 0 ? !0 : a;
  if ({}.NODE_ENV !== "production") {
    var p = At(t.elements.popper).transitionProperty || "";
    r && ["transform", "top", "right", "bottom", "left"].some(function(_) {
      return p.indexOf(_) >= 0;
    }) && console.warn(["Popper: Detected CSS transitions on at least one of the following", 'CSS properties: "transform", "top", "right", "bottom", "left".', `

`, 'Disable the "computeStyles" modifier\'s `adaptive` option to allow', "for smooth transitions, or remove these properties from the CSS", "transition declaration on the popper element if only transitioning", "opacity or background-color for example.", `

`, "We recommend using the popper element as a wrapper around an inner", "element that can have any CSS property transitioned for animations."].join(" "));
  }
  var u = {
    placement: Et(t.placement),
    variation: Qe(t.placement),
    popper: t.elements.popper,
    popperRect: t.rects.popper,
    gpuAcceleration: n,
    isFixed: t.options.strategy === "fixed"
  };
  t.modifiersData.popperOffsets != null && (t.styles.popper = Object.assign({}, t.styles.popper, Fr(Object.assign({}, u, {
    offsets: t.modifiersData.popperOffsets,
    position: t.options.strategy,
    adaptive: r,
    roundOffsets: l
  })))), t.modifiersData.arrow != null && (t.styles.arrow = Object.assign({}, t.styles.arrow, Fr(Object.assign({}, u, {
    offsets: t.modifiersData.arrow,
    position: "absolute",
    adaptive: !1,
    roundOffsets: l
  })))), t.attributes.popper = Object.assign({}, t.attributes.popper, {
    "data-popper-placement": t.placement
  });
}
const fr = {
  name: "computeStyles",
  enabled: !0,
  phase: "beforeWrite",
  fn: Pd,
  data: {}
};
var ns = {
  passive: !0
};
function Bd(s) {
  var t = s.state, e = s.instance, i = s.options, n = i.scroll, o = n === void 0 ? !0 : n, r = i.resize, a = r === void 0 ? !0 : r, l = _t(t.elements.popper), p = [].concat(t.scrollParents.reference, t.scrollParents.popper);
  return o && p.forEach(function(u) {
    u.addEventListener("scroll", e.update, ns);
  }), a && l.addEventListener("resize", e.update, ns), function() {
    o && p.forEach(function(u) {
      u.removeEventListener("scroll", e.update, ns);
    }), a && l.removeEventListener("resize", e.update, ns);
  };
}
const mr = {
  name: "eventListeners",
  enabled: !0,
  phase: "write",
  fn: function() {
  },
  effect: Bd,
  data: {}
};
var Hd = {
  left: "right",
  right: "left",
  bottom: "top",
  top: "bottom"
};
function Ws(s) {
  return s.replace(/left|right|bottom|top/g, function(t) {
    return Hd[t];
  });
}
var Vd = {
  start: "end",
  end: "start"
};
function Yr(s) {
  return s.replace(/start|end/g, function(t) {
    return Vd[t];
  });
}
function gr(s) {
  var t = _t(s), e = t.pageXOffset, i = t.pageYOffset;
  return {
    scrollLeft: e,
    scrollTop: i
  };
}
function br(s) {
  return Ze(ie(s)).left + gr(s).scrollLeft;
}
function Wd(s, t) {
  var e = _t(s), i = ie(s), n = e.visualViewport, o = i.clientWidth, r = i.clientHeight, a = 0, l = 0;
  if (n) {
    o = n.width, r = n.height;
    var p = Bc();
    (p || !p && t === "fixed") && (a = n.offsetLeft, l = n.offsetTop);
  }
  return {
    width: o,
    height: r,
    x: a + br(s),
    y: l
  };
}
function Fd(s) {
  var t, e = ie(s), i = gr(s), n = (t = s.ownerDocument) == null ? void 0 : t.body, o = ve(e.scrollWidth, e.clientWidth, n ? n.scrollWidth : 0, n ? n.clientWidth : 0), r = ve(e.scrollHeight, e.clientHeight, n ? n.scrollHeight : 0, n ? n.clientHeight : 0), a = -i.scrollLeft + br(s), l = -i.scrollTop;
  return At(n || e).direction === "rtl" && (a += ve(e.clientWidth, n ? n.clientWidth : 0) - o), {
    width: o,
    height: r,
    x: a,
    y: l
  };
}
function vr(s) {
  var t = At(s), e = t.overflow, i = t.overflowX, n = t.overflowY;
  return /auto|scroll|overlay|hidden/.test(e + n + i);
}
function jc(s) {
  return ["html", "body", "#document"].indexOf(Rt(s)) >= 0 ? s.ownerDocument.body : dt(s) && vr(s) ? s : jc(mn(s));
}
function Ri(s, t) {
  var e;
  t === void 0 && (t = []);
  var i = jc(s), n = i === ((e = s.ownerDocument) == null ? void 0 : e.body), o = _t(i), r = n ? [o].concat(o.visualViewport || [], vr(i) ? i : []) : i, a = t.concat(r);
  return n ? a : (
    // $FlowFixMe[incompatible-call]: isBody tells us target will be an HTMLElement here
    a.concat(Ri(mn(r)))
  );
}
function Yo(s) {
  return Object.assign({}, s, {
    left: s.x,
    top: s.y,
    right: s.x + s.width,
    bottom: s.y + s.height
  });
}
function Yd(s, t) {
  var e = Ze(s, !1, t === "fixed");
  return e.top = e.top + s.clientTop, e.left = e.left + s.clientLeft, e.bottom = e.top + s.clientHeight, e.right = e.left + s.clientWidth, e.width = s.clientWidth, e.height = s.clientHeight, e.x = e.left, e.y = e.top, e;
}
function jr(s, t, e) {
  return t === cr ? Yo(Wd(s, e)) : ye(t) ? Yd(t, e) : Yo(Fd(ie(s)));
}
function jd(s) {
  var t = Ri(mn(s)), e = ["absolute", "fixed"].indexOf(At(s).position) >= 0, i = e && dt(s) ? Ki(s) : s;
  return ye(i) ? t.filter(function(n) {
    return ye(n) && Hc(n, i) && Rt(n) !== "body";
  }) : [];
}
function Kd(s, t, e, i) {
  var n = t === "clippingParents" ? jd(s) : [].concat(t), o = [].concat(n, [e]), r = o[0], a = o.reduce(function(l, p) {
    var u = jr(s, p, i);
    return l.top = ve(u.top, l.top), l.right = un(u.right, l.right), l.bottom = un(u.bottom, l.bottom), l.left = ve(u.left, l.left), l;
  }, jr(s, r, i));
  return a.width = a.right - a.left, a.height = a.bottom - a.top, a.x = a.left, a.y = a.top, a;
}
function Kc(s) {
  var t = s.reference, e = s.element, i = s.placement, n = i ? Et(i) : null, o = i ? Qe(i) : null, r = t.x + t.width / 2 - e.width / 2, a = t.y + t.height / 2 - e.height / 2, l;
  switch (n) {
    case st:
      l = {
        x: r,
        y: t.y - e.height
      };
      break;
    case ut:
      l = {
        x: r,
        y: t.y + t.height
      };
      break;
    case pt:
      l = {
        x: t.x + t.width,
        y: a
      };
      break;
    case nt:
      l = {
        x: t.x - e.width,
        y: a
      };
      break;
    default:
      l = {
        x: t.x,
        y: t.y
      };
  }
  var p = n ? _r(n) : null;
  if (p != null) {
    var u = p === "y" ? "height" : "width";
    switch (o) {
      case Ae:
        l[p] = l[p] - (t[u] / 2 - e[u] / 2);
        break;
      case Ge:
        l[p] = l[p] + (t[u] / 2 - e[u] / 2);
        break;
    }
  }
  return l;
}
function Je(s, t) {
  t === void 0 && (t = {});
  var e = t, i = e.placement, n = i === void 0 ? s.placement : i, o = e.strategy, r = o === void 0 ? s.strategy : o, a = e.boundary, l = a === void 0 ? xc : a, p = e.rootBoundary, u = p === void 0 ? cr : p, _ = e.elementContext, f = _ === void 0 ? Be : _, g = e.altBoundary, m = g === void 0 ? !1 : g, b = e.padding, v = b === void 0 ? 0 : b, T = Wc(typeof v != "number" ? v : Fc(v, ni)), y = f === Be ? Oc : Be, C = s.rects.popper, E = s.elements[m ? y : f], w = Kd(ye(E) ? E : E.contextElement || ie(s.elements.popper), l, u, r), k = Ze(s.elements.reference), D = Kc({
    reference: k,
    element: C,
    strategy: "absolute",
    placement: n
  }), O = Yo(Object.assign({}, C, D)), x = f === Be ? O : k, L = {
    top: w.top - x.top + T.top,
    bottom: x.bottom - w.bottom + T.bottom,
    left: w.left - x.left + T.left,
    right: x.right - w.right + T.right
  }, S = s.modifiersData.offset;
  if (f === Be && S) {
    var N = S[n];
    Object.keys(L).forEach(function(P) {
      var ot = [pt, ut].indexOf(P) >= 0 ? 1 : -1, rt = [st, ut].indexOf(P) >= 0 ? "y" : "x";
      L[P] += N[rt] * ot;
    });
  }
  return L;
}
function zd(s, t) {
  t === void 0 && (t = {});
  var e = t, i = e.placement, n = e.boundary, o = e.rootBoundary, r = e.padding, a = e.flipVariations, l = e.allowedAutoPlacements, p = l === void 0 ? hr : l, u = Qe(i), _ = u ? a ? Wo : Wo.filter(function(m) {
    return Qe(m) === u;
  }) : ni, f = _.filter(function(m) {
    return p.indexOf(m) >= 0;
  });
  f.length === 0 && (f = _, {}.NODE_ENV !== "production" && console.error(["Popper: The `allowedAutoPlacements` option did not allow any", "placements. Ensure the `placement` option matches the variation", "of the allowed placements.", 'For example, "auto" cannot be used to allow "bottom-start".', 'Use "auto-start" instead.'].join(" ")));
  var g = f.reduce(function(m, b) {
    return m[b] = Je(s, {
      placement: b,
      boundary: n,
      rootBoundary: o,
      padding: r
    })[Et(b)], m;
  }, {});
  return Object.keys(g).sort(function(m, b) {
    return g[m] - g[b];
  });
}
function Ud(s) {
  if (Et(s) === ji)
    return [];
  var t = Ws(s);
  return [Yr(s), t, Yr(t)];
}
function Xd(s) {
  var t = s.state, e = s.options, i = s.name;
  if (!t.modifiersData[i]._skip) {
    for (var n = e.mainAxis, o = n === void 0 ? !0 : n, r = e.altAxis, a = r === void 0 ? !0 : r, l = e.fallbackPlacements, p = e.padding, u = e.boundary, _ = e.rootBoundary, f = e.altBoundary, g = e.flipVariations, m = g === void 0 ? !0 : g, b = e.allowedAutoPlacements, v = t.options.placement, T = Et(v), y = T === v, C = l || (y || !m ? [Ws(v)] : Ud(v)), E = [v].concat(C).reduce(function(Oe, Vt) {
      return Oe.concat(Et(Vt) === ji ? zd(t, {
        placement: Vt,
        boundary: u,
        rootBoundary: _,
        padding: p,
        flipVariations: m,
        allowedAutoPlacements: b
      }) : Vt);
    }, []), w = t.rects.reference, k = t.rects.popper, D = /* @__PURE__ */ new Map(), O = !0, x = E[0], L = 0; L < E.length; L++) {
      var S = E[L], N = Et(S), P = Qe(S) === Ae, ot = [st, ut].indexOf(N) >= 0, rt = ot ? "width" : "height", G = Je(t, {
        placement: S,
        boundary: u,
        rootBoundary: _,
        altBoundary: f,
        padding: p
      }), vt = ot ? P ? pt : nt : P ? ut : st;
      w[rt] > k[rt] && (vt = Ws(vt));
      var Ji = Ws(vt), oe = [];
      if (o && oe.push(G[N] <= 0), a && oe.push(G[vt] <= 0, G[Ji] <= 0), oe.every(function(Oe) {
        return Oe;
      })) {
        x = S, O = !1;
        break;
      }
      D.set(S, oe);
    }
    if (O)
      for (var ts = m ? 3 : 1, kn = function(Vt) {
        var di = E.find(function(is) {
          var re = D.get(is);
          if (re)
            return re.slice(0, Vt).every(function(xn) {
              return xn;
            });
        });
        if (di)
          return x = di, "break";
      }, hi = ts; hi > 0; hi--) {
        var es = kn(hi);
        if (es === "break")
          break;
      }
    t.placement !== x && (t.modifiersData[i]._skip = !0, t.placement = x, t.reset = !0);
  }
}
const zc = {
  name: "flip",
  enabled: !0,
  phase: "main",
  fn: Xd,
  requiresIfExists: ["offset"],
  data: {
    _skip: !1
  }
};
function Kr(s, t, e) {
  return e === void 0 && (e = {
    x: 0,
    y: 0
  }), {
    top: s.top - t.height - e.y,
    right: s.right - t.width + e.x,
    bottom: s.bottom - t.height + e.y,
    left: s.left - t.width - e.x
  };
}
function zr(s) {
  return [st, pt, ut, nt].some(function(t) {
    return s[t] >= 0;
  });
}
function Gd(s) {
  var t = s.state, e = s.name, i = t.rects.reference, n = t.rects.popper, o = t.modifiersData.preventOverflow, r = Je(t, {
    elementContext: "reference"
  }), a = Je(t, {
    altBoundary: !0
  }), l = Kr(r, i), p = Kr(a, n, o), u = zr(l), _ = zr(p);
  t.modifiersData[e] = {
    referenceClippingOffsets: l,
    popperEscapeOffsets: p,
    isReferenceHidden: u,
    hasPopperEscaped: _
  }, t.attributes.popper = Object.assign({}, t.attributes.popper, {
    "data-popper-reference-hidden": u,
    "data-popper-escaped": _
  });
}
const Uc = {
  name: "hide",
  enabled: !0,
  phase: "main",
  requiresIfExists: ["preventOverflow"],
  fn: Gd
};
function qd(s, t, e) {
  var i = Et(s), n = [nt, st].indexOf(i) >= 0 ? -1 : 1, o = typeof e == "function" ? e(Object.assign({}, t, {
    placement: s
  })) : e, r = o[0], a = o[1];
  return r = r || 0, a = (a || 0) * n, [nt, pt].indexOf(i) >= 0 ? {
    x: a,
    y: r
  } : {
    x: r,
    y: a
  };
}
function Zd(s) {
  var t = s.state, e = s.options, i = s.name, n = e.offset, o = n === void 0 ? [0, 0] : n, r = hr.reduce(function(u, _) {
    return u[_] = qd(_, t.rects, o), u;
  }, {}), a = r[t.placement], l = a.x, p = a.y;
  t.modifiersData.popperOffsets != null && (t.modifiersData.popperOffsets.x += l, t.modifiersData.popperOffsets.y += p), t.modifiersData[i] = r;
}
const Xc = {
  name: "offset",
  enabled: !0,
  phase: "main",
  requires: ["popperOffsets"],
  fn: Zd
};
function Qd(s) {
  var t = s.state, e = s.name;
  t.modifiersData[e] = Kc({
    reference: t.rects.reference,
    element: t.rects.popper,
    strategy: "absolute",
    placement: t.placement
  });
}
const Tr = {
  name: "popperOffsets",
  enabled: !0,
  phase: "read",
  fn: Qd,
  data: {}
};
function Jd(s) {
  return s === "x" ? "y" : "x";
}
function tu(s) {
  var t = s.state, e = s.options, i = s.name, n = e.mainAxis, o = n === void 0 ? !0 : n, r = e.altAxis, a = r === void 0 ? !1 : r, l = e.boundary, p = e.rootBoundary, u = e.altBoundary, _ = e.padding, f = e.tether, g = f === void 0 ? !0 : f, m = e.tetherOffset, b = m === void 0 ? 0 : m, v = Je(t, {
    boundary: l,
    rootBoundary: p,
    padding: _,
    altBoundary: u
  }), T = Et(t.placement), y = Qe(t.placement), C = !y, E = _r(T), w = Jd(E), k = t.modifiersData.popperOffsets, D = t.rects.reference, O = t.rects.popper, x = typeof b == "function" ? b(Object.assign({}, t.rects, {
    placement: t.placement
  })) : b, L = typeof x == "number" ? {
    mainAxis: x,
    altAxis: x
  } : Object.assign({
    mainAxis: 0,
    altAxis: 0
  }, x), S = t.modifiersData.offset ? t.modifiersData.offset[t.placement] : null, N = {
    x: 0,
    y: 0
  };
  if (k) {
    if (o) {
      var P, ot = E === "y" ? st : nt, rt = E === "y" ? ut : pt, G = E === "y" ? "height" : "width", vt = k[E], Ji = vt + v[ot], oe = vt - v[rt], ts = g ? -O[G] / 2 : 0, kn = y === Ae ? D[G] : O[G], hi = y === Ae ? -O[G] : -D[G], es = t.elements.arrow, Oe = g && es ? pr(es) : {
        width: 0,
        height: 0
      }, Vt = t.modifiersData["arrow#persistent"] ? t.modifiersData["arrow#persistent"].padding : Vc(), di = Vt[ot], is = Vt[rt], re = Mi(0, D[G], Oe[G]), xn = C ? D[G] / 2 - ts - re - di - L.mainAxis : kn - re - di - L.mainAxis, nd = C ? -D[G] / 2 + ts + re + is + L.mainAxis : hi + re + is + L.mainAxis, On = t.elements.arrow && Ki(t.elements.arrow), od = On ? E === "y" ? On.clientTop || 0 : On.clientLeft || 0 : 0, Ir = (P = S == null ? void 0 : S[E]) != null ? P : 0, rd = vt + xn - Ir - od, ad = vt + nd - Ir, Dr = Mi(g ? un(Ji, rd) : Ji, vt, g ? ve(oe, ad) : oe);
      k[E] = Dr, N[E] = Dr - vt;
    }
    if (a) {
      var $r, ld = E === "x" ? st : nt, cd = E === "x" ? ut : pt, ae = k[w], ss = w === "y" ? "height" : "width", Lr = ae + v[ld], Nr = ae - v[cd], Sn = [st, nt].indexOf(T) !== -1, Mr = ($r = S == null ? void 0 : S[w]) != null ? $r : 0, Rr = Sn ? Lr : ae - D[ss] - O[ss] - Mr + L.altAxis, Pr = Sn ? ae + D[ss] + O[ss] - Mr - L.altAxis : Nr, Br = g && Sn ? Dd(Rr, ae, Pr) : Mi(g ? Rr : Lr, ae, g ? Pr : Nr);
      k[w] = Br, N[w] = Br - ae;
    }
    t.modifiersData[i] = N;
  }
}
const Gc = {
  name: "preventOverflow",
  enabled: !0,
  phase: "main",
  fn: tu,
  requiresIfExists: ["offset"]
};
function eu(s) {
  return {
    scrollLeft: s.scrollLeft,
    scrollTop: s.scrollTop
  };
}
function iu(s) {
  return s === _t(s) || !dt(s) ? gr(s) : eu(s);
}
function su(s) {
  var t = s.getBoundingClientRect(), e = qe(t.width) / s.offsetWidth || 1, i = qe(t.height) / s.offsetHeight || 1;
  return e !== 1 || i !== 1;
}
function nu(s, t, e) {
  e === void 0 && (e = !1);
  var i = dt(t), n = dt(t) && su(t), o = ie(t), r = Ze(s, n, e), a = {
    scrollLeft: 0,
    scrollTop: 0
  }, l = {
    x: 0,
    y: 0
  };
  return (i || !i && !e) && ((Rt(t) !== "body" || // https://github.com/popperjs/popper-core/issues/1078
  vr(o)) && (a = iu(t)), dt(t) ? (l = Ze(t, !0), l.x += t.clientLeft, l.y += t.clientTop) : o && (l.x = br(o))), {
    x: r.left + a.scrollLeft - l.x,
    y: r.top + a.scrollTop - l.y,
    width: r.width,
    height: r.height
  };
}
function ou(s) {
  var t = /* @__PURE__ */ new Map(), e = /* @__PURE__ */ new Set(), i = [];
  s.forEach(function(o) {
    t.set(o.name, o);
  });
  function n(o) {
    e.add(o.name);
    var r = [].concat(o.requires || [], o.requiresIfExists || []);
    r.forEach(function(a) {
      if (!e.has(a)) {
        var l = t.get(a);
        l && n(l);
      }
    }), i.push(o);
  }
  return s.forEach(function(o) {
    e.has(o.name) || n(o);
  }), i;
}
function ru(s) {
  var t = ou(s);
  return dn.reduce(function(e, i) {
    return e.concat(t.filter(function(n) {
      return n.phase === i;
    }));
  }, []);
}
function au(s) {
  var t;
  return function() {
    return t || (t = new Promise(function(e) {
      Promise.resolve().then(function() {
        t = void 0, e(s());
      });
    })), t;
  };
}
function Wt(s) {
  for (var t = arguments.length, e = new Array(t > 1 ? t - 1 : 0), i = 1; i < t; i++)
    e[i - 1] = arguments[i];
  return [].concat(e).reduce(function(n, o) {
    return n.replace(/%s/, o);
  }, s);
}
var le = 'Popper: modifier "%s" provided an invalid %s property, expected %s but got %s', lu = 'Popper: modifier "%s" requires "%s", but "%s" modifier is not available', Ur = ["name", "enabled", "phase", "fn", "effect", "requires", "options"];
function cu(s) {
  s.forEach(function(t) {
    [].concat(Object.keys(t), Ur).filter(function(e, i, n) {
      return n.indexOf(e) === i;
    }).forEach(function(e) {
      switch (e) {
        case "name":
          typeof t.name != "string" && console.error(Wt(le, String(t.name), '"name"', '"string"', '"' + String(t.name) + '"'));
          break;
        case "enabled":
          typeof t.enabled != "boolean" && console.error(Wt(le, t.name, '"enabled"', '"boolean"', '"' + String(t.enabled) + '"'));
          break;
        case "phase":
          dn.indexOf(t.phase) < 0 && console.error(Wt(le, t.name, '"phase"', "either " + dn.join(", "), '"' + String(t.phase) + '"'));
          break;
        case "fn":
          typeof t.fn != "function" && console.error(Wt(le, t.name, '"fn"', '"function"', '"' + String(t.fn) + '"'));
          break;
        case "effect":
          t.effect != null && typeof t.effect != "function" && console.error(Wt(le, t.name, '"effect"', '"function"', '"' + String(t.fn) + '"'));
          break;
        case "requires":
          t.requires != null && !Array.isArray(t.requires) && console.error(Wt(le, t.name, '"requires"', '"array"', '"' + String(t.requires) + '"'));
          break;
        case "requiresIfExists":
          Array.isArray(t.requiresIfExists) || console.error(Wt(le, t.name, '"requiresIfExists"', '"array"', '"' + String(t.requiresIfExists) + '"'));
          break;
        case "options":
        case "data":
          break;
        default:
          console.error('PopperJS: an invalid property has been provided to the "' + t.name + '" modifier, valid properties are ' + Ur.map(function(i) {
            return '"' + i + '"';
          }).join(", ") + '; but "' + e + '" was provided.');
      }
      t.requires && t.requires.forEach(function(i) {
        s.find(function(n) {
          return n.name === i;
        }) == null && console.error(Wt(lu, String(t.name), i, i));
      });
    });
  });
}
function hu(s, t) {
  var e = /* @__PURE__ */ new Set();
  return s.filter(function(i) {
    var n = t(i);
    if (!e.has(n))
      return e.add(n), !0;
  });
}
function du(s) {
  var t = s.reduce(function(e, i) {
    var n = e[i.name];
    return e[i.name] = n ? Object.assign({}, n, i, {
      options: Object.assign({}, n.options, i.options),
      data: Object.assign({}, n.data, i.data)
    }) : i, e;
  }, {});
  return Object.keys(t).map(function(e) {
    return t[e];
  });
}
var Xr = "Popper: Invalid reference or popper argument provided. They must be either a DOM element or virtual element.", uu = "Popper: An infinite loop in the modifiers cycle has been detected! The cycle has been interrupted to prevent a browser crash.", Gr = {
  placement: "bottom",
  modifiers: [],
  strategy: "absolute"
};
function qr() {
  for (var s = arguments.length, t = new Array(s), e = 0; e < s; e++)
    t[e] = arguments[e];
  return !t.some(function(i) {
    return !(i && typeof i.getBoundingClientRect == "function");
  });
}
function gn(s) {
  s === void 0 && (s = {});
  var t = s, e = t.defaultModifiers, i = e === void 0 ? [] : e, n = t.defaultOptions, o = n === void 0 ? Gr : n;
  return function(a, l, p) {
    p === void 0 && (p = o);
    var u = {
      placement: "bottom",
      orderedModifiers: [],
      options: Object.assign({}, Gr, o),
      modifiersData: {},
      elements: {
        reference: a,
        popper: l
      },
      attributes: {},
      styles: {}
    }, _ = [], f = !1, g = {
      state: u,
      setOptions: function(T) {
        var y = typeof T == "function" ? T(u.options) : T;
        b(), u.options = Object.assign({}, o, u.options, y), u.scrollParents = {
          reference: ye(a) ? Ri(a) : a.contextElement ? Ri(a.contextElement) : [],
          popper: Ri(l)
        };
        var C = ru(du([].concat(i, u.options.modifiers)));
        if (u.orderedModifiers = C.filter(function(S) {
          return S.enabled;
        }), {}.NODE_ENV !== "production") {
          var E = hu([].concat(C, u.options.modifiers), function(S) {
            var N = S.name;
            return N;
          });
          if (cu(E), Et(u.options.placement) === ji) {
            var w = u.orderedModifiers.find(function(S) {
              var N = S.name;
              return N === "flip";
            });
            w || console.error(['Popper: "auto" placements require the "flip" modifier be', "present and enabled to work."].join(" "));
          }
          var k = At(l), D = k.marginTop, O = k.marginRight, x = k.marginBottom, L = k.marginLeft;
          [D, O, x, L].some(function(S) {
            return parseFloat(S);
          }) && console.warn(['Popper: CSS "margin" styles cannot be used to apply padding', "between the popper and its reference element or boundary.", "To replicate margin, use the `offset` modifier, as well as", "the `padding` option in the `preventOverflow` and `flip`", "modifiers."].join(" "));
        }
        return m(), g.update();
      },
      // Sync update – it will always be executed, even if not necessary. This
      // is useful for low frequency updates where sync behavior simplifies the
      // logic.
      // For high frequency updates (e.g. `resize` and `scroll` events), always
      // prefer the async Popper#update method
      forceUpdate: function() {
        if (!f) {
          var T = u.elements, y = T.reference, C = T.popper;
          if (!qr(y, C)) {
            ({}).NODE_ENV !== "production" && console.error(Xr);
            return;
          }
          u.rects = {
            reference: nu(y, Ki(C), u.options.strategy === "fixed"),
            popper: pr(C)
          }, u.reset = !1, u.placement = u.options.placement, u.orderedModifiers.forEach(function(S) {
            return u.modifiersData[S.name] = Object.assign({}, S.data);
          });
          for (var E = 0, w = 0; w < u.orderedModifiers.length; w++) {
            if ({}.NODE_ENV !== "production" && (E += 1, E > 100)) {
              console.error(uu);
              break;
            }
            if (u.reset === !0) {
              u.reset = !1, w = -1;
              continue;
            }
            var k = u.orderedModifiers[w], D = k.fn, O = k.options, x = O === void 0 ? {} : O, L = k.name;
            typeof D == "function" && (u = D({
              state: u,
              options: x,
              name: L,
              instance: g
            }) || u);
          }
        }
      },
      // Async and optimistically optimized update – it will not be executed if
      // not necessary (debounced to run at most once-per-tick)
      update: au(function() {
        return new Promise(function(v) {
          g.forceUpdate(), v(u);
        });
      }),
      destroy: function() {
        b(), f = !0;
      }
    };
    if (!qr(a, l))
      return {}.NODE_ENV !== "production" && console.error(Xr), g;
    g.setOptions(p).then(function(v) {
      !f && p.onFirstUpdate && p.onFirstUpdate(v);
    });
    function m() {
      u.orderedModifiers.forEach(function(v) {
        var T = v.name, y = v.options, C = y === void 0 ? {} : y, E = v.effect;
        if (typeof E == "function") {
          var w = E({
            state: u,
            name: T,
            instance: g,
            options: C
          }), k = function() {
          };
          _.push(w || k);
        }
      });
    }
    function b() {
      _.forEach(function(v) {
        return v();
      }), _ = [];
    }
    return g;
  };
}
var pu = /* @__PURE__ */ gn(), _u = [mr, Tr, fr, ur], fu = /* @__PURE__ */ gn({
  defaultModifiers: _u
}), mu = [mr, Tr, fr, ur, Xc, zc, Gc, Yc, Uc], se = /* @__PURE__ */ gn({
  defaultModifiers: mu
});
const qc = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  afterMain: Nc,
  afterRead: Dc,
  afterWrite: Pc,
  applyStyles: ur,
  arrow: Yc,
  auto: ji,
  basePlacements: ni,
  beforeMain: $c,
  beforeRead: Sc,
  beforeWrite: Mc,
  bottom: ut,
  clippingParents: xc,
  computeStyles: fr,
  createPopper: se,
  createPopperBase: pu,
  createPopperLite: fu,
  detectOverflow: Je,
  end: Ge,
  eventListeners: mr,
  flip: zc,
  hide: Uc,
  left: nt,
  main: Lc,
  modifierPhases: dn,
  offset: Xc,
  placements: hr,
  popper: Be,
  popperGenerator: gn,
  popperOffsets: Tr,
  preventOverflow: Gc,
  read: Ic,
  reference: Oc,
  right: pt,
  start: Ae,
  top: st,
  variationPlacements: Wo,
  viewport: cr,
  write: Rc
}, Symbol.toStringTag, { value: "Module" }));
function Ln(s) {
  return s === "true" ? !0 : s === "false" ? !1 : s === Number(s).toString() ? Number(s) : s === "" || s === "null" ? null : s;
}
function Nn(s) {
  return s.replace(/[A-Z]/g, (t) => `-${t.toLowerCase()}`);
}
const h = {
  setDataAttribute(s, t, e) {
    s.setAttribute(`data-te-${Nn(t)}`, e);
  },
  removeDataAttribute(s, t) {
    s.removeAttribute(`data-te-${Nn(t)}`);
  },
  getDataAttributes(s) {
    if (!s)
      return {};
    const t = {};
    return Object.keys(s.dataset).filter((e) => e.startsWith("te")).forEach((e) => {
      if (e.startsWith("teClass"))
        return;
      let i = e.replace(/^te/, "");
      i = i.charAt(0).toLowerCase() + i.slice(1, i.length), t[i] = Ln(s.dataset[e]);
    }), t;
  },
  getDataClassAttributes(s) {
    if (!s)
      return {};
    const t = {
      ...s.dataset
    };
    return Object.keys(t).filter((e) => e.startsWith("teClass")).forEach((e) => {
      let i = e.replace(/^teClass/, "");
      i = i.charAt(0).toLowerCase() + i.slice(1, i.length), t[i] = Ln(t[e]);
    }), t;
  },
  getDataAttribute(s, t) {
    return Ln(
      s.getAttribute(`data-te-${Nn(t)}`)
    );
  },
  offset(s) {
    const t = s.getBoundingClientRect();
    return {
      top: t.top + document.body.scrollTop,
      left: t.left + document.body.scrollLeft
    };
  },
  position(s) {
    return {
      top: s.offsetTop,
      left: s.offsetLeft
    };
  },
  style(s, t) {
    Object.assign(s.style, t);
  },
  toggleClass(s, t) {
    s && Mn(t).forEach((e) => {
      s.classList.contains(e) ? s.classList.remove(e) : s.classList.add(e);
    });
  },
  addClass(s, t) {
    Mn(t).forEach(
      (e) => !s.classList.contains(e) && s.classList.add(e)
    );
  },
  addStyle(s, t) {
    Object.keys(t).forEach((e) => {
      s.style[e] = t[e];
    });
  },
  removeClass(s, t) {
    Mn(t).forEach(
      (e) => s.classList.contains(e) && s.classList.remove(e)
    );
  },
  hasClass(s, t) {
    return s.classList.contains(t);
  },
  maxOffset(s) {
    const t = s.getBoundingClientRect();
    return {
      top: t.top + Math.max(
        document.body.scrollTop,
        document.documentElement.scrollTop,
        window.scrollY
      ),
      left: t.left + Math.max(
        document.body.scrollLeft,
        document.documentElement.scrollLeft,
        window.scrollX
      )
    };
  }
};
function Mn(s) {
  return typeof s == "string" ? s.split(" ") : Array.isArray(s) ? s : !1;
}
const gu = 3, d = {
  closest(s, t) {
    return s.closest(t);
  },
  matches(s, t) {
    return s.matches(t);
  },
  find(s, t = document.documentElement) {
    return [].concat(
      ...Element.prototype.querySelectorAll.call(t, s)
    );
  },
  findOne(s, t = document.documentElement) {
    return Element.prototype.querySelector.call(t, s);
  },
  children(s, t) {
    return [].concat(...s.children).filter((i) => i.matches(t));
  },
  parents(s, t) {
    const e = [];
    let i = s.parentNode;
    for (; i && i.nodeType === Node.ELEMENT_NODE && i.nodeType !== gu; )
      this.matches(i, t) && e.push(i), i = i.parentNode;
    return e;
  },
  prev(s, t) {
    let e = s.previousElementSibling;
    for (; e; ) {
      if (e.matches(t))
        return [e];
      e = e.previousElementSibling;
    }
    return [];
  },
  next(s, t) {
    let e = s.nextElementSibling;
    for (; e; ) {
      if (this.matches(e, t))
        return [e];
      e = e.nextElementSibling;
    }
    return [];
  },
  focusableChildren(s) {
    const t = [
      "a",
      "button",
      "input",
      "textarea",
      "select",
      "details",
      "[tabindex]",
      '[contenteditable="true"]'
    ].map((e) => `${e}:not([tabindex^="-"])`).join(", ");
    return this.find(t, s).filter(
      (e) => !be(e) && Mt(e)
    );
  }
}, Rn = "dropdown", bu = "te.dropdown", xe = `.${bu}`, Er = ".data-api", Fs = "Escape", Zr = "Space", Qr = "Tab", jo = "ArrowUp", Ys = "ArrowDown", vu = 2, Tu = new RegExp(
  `${jo}|${Ys}|${Fs}`
), Eu = `hide${xe}`, Cu = `hidden${xe}`, Au = `show${xe}`, yu = `shown${xe}`, wu = `click${xe}${Er}`, Jr = `keydown${xe}${Er}`, ku = `keyup${xe}${Er}`, Ft = "show", xu = "dropup", Ou = "dropend", Su = "dropstart", Iu = "[data-te-navbar-ref]", os = "[data-te-dropdown-toggle-ref]", Pn = "[data-te-dropdown-menu-ref]", Du = "[data-te-navbar-nav-ref]", $u = "[data-te-dropdown-menu-ref] [data-te-dropdown-item-ref]:not(.disabled):not(:disabled)", Lu = W() ? "top-end" : "top-start", Nu = W() ? "top-start" : "top-end", Mu = W() ? "bottom-end" : "bottom-start", Ru = W() ? "bottom-start" : "bottom-end", Pu = W() ? "left-start" : "right-start", Bu = W() ? "right-start" : "left-start", Hu = [{ opacity: "0" }, { opacity: "1" }], Vu = [{ opacity: "1" }, { opacity: "0" }], ta = {
  iterations: 1,
  easing: "ease",
  fill: "both"
}, Wu = {
  offset: [0, 2],
  boundary: "clippingParents",
  reference: "toggle",
  display: "dynamic",
  popperConfig: null,
  autoClose: !0,
  dropdownAnimation: "on",
  animationDuration: 550
}, Fu = {
  offset: "(array|string|function)",
  boundary: "(string|element)",
  reference: "(string|element|object)",
  display: "string",
  popperConfig: "(null|object|function)",
  autoClose: "(boolean|string)",
  dropdownAnimation: "string",
  animationDuration: "number"
};
class $t extends ft {
  constructor(t, e) {
    super(t), this._popper = null, this._config = this._getConfig(e), this._menu = this._getMenuElement(), this._inNavbar = this._detectNavbar(), this._fadeOutAnimate = null;
    const i = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    this._animationCanPlay = this._config.dropdownAnimation === "on" && !i, this._didInit = !1, this._init();
  }
  // Getters
  static get Default() {
    return Wu;
  }
  static get DefaultType() {
    return Fu;
  }
  static get NAME() {
    return Rn;
  }
  // Public
  toggle() {
    return this._isShown() ? this.hide() : this.show();
  }
  show() {
    if (be(this._element) || this._isShown(this._menu))
      return;
    const t = {
      relatedTarget: this._element
    };
    if (c.trigger(
      this._element,
      Au,
      t
    ).defaultPrevented)
      return;
    const i = $t.getParentFromElement(this._element);
    this._inNavbar ? h.setDataAttribute(this._menu, "popper", "none") : this._createPopper(i), "ontouchstart" in document.documentElement && !i.closest(Du) && [].concat(...document.body.children).forEach((n) => c.on(n, "mouseover", hn)), this._element.focus(), this._element.setAttribute("aria-expanded", !0), this._menu.setAttribute(`data-te-dropdown-${Ft}`, ""), this._animationCanPlay && this._menu.animate(Hu, {
      ...ta,
      duration: this._config.animationDuration
    }), this._element.setAttribute(`data-te-dropdown-${Ft}`, ""), setTimeout(
      () => {
        c.trigger(this._element, yu, t);
      },
      this._animationCanPlay ? this._config.animationDuration : 0
    );
  }
  hide() {
    if (be(this._element) || !this._isShown(this._menu))
      return;
    const t = {
      relatedTarget: this._element
    };
    this._completeHide(t);
  }
  dispose() {
    this._popper && this._popper.destroy(), super.dispose();
  }
  update() {
    this._inNavbar = this._detectNavbar(), this._popper && this._popper.update();
  }
  // Private
  _init() {
    this._didInit || (c.on(
      document,
      Jr,
      os,
      $t.dataApiKeydownHandler
    ), c.on(
      document,
      Jr,
      Pn,
      $t.dataApiKeydownHandler
    ), c.on(document, wu, $t.clearMenus), c.on(document, ku, $t.clearMenus), this._didInit = !0);
  }
  _completeHide(t) {
    this._fadeOutAnimate && this._fadeOutAnimate.playState === "running" || c.trigger(
      this._element,
      Eu,
      t
    ).defaultPrevented || ("ontouchstart" in document.documentElement && [].concat(...document.body.children).forEach((i) => c.off(i, "mouseover", hn)), this._animationCanPlay && (this._fadeOutAnimate = this._menu.animate(Vu, {
      ...ta,
      duration: this._config.animationDuration
    })), setTimeout(
      () => {
        this._popper && this._popper.destroy(), this._menu.removeAttribute(`data-te-dropdown-${Ft}`), this._element.removeAttribute(`data-te-dropdown-${Ft}`), this._element.setAttribute("aria-expanded", "false"), h.removeDataAttribute(this._menu, "popper"), c.trigger(this._element, Cu, t);
      },
      this._animationCanPlay ? this._config.animationDuration : 0
    ));
  }
  _getConfig(t) {
    if (t = {
      ...this.constructor.Default,
      ...h.getDataAttributes(this._element),
      ...t
    }, I(Rn, t, this.constructor.DefaultType), typeof t.reference == "object" && !Xe(t.reference) && typeof t.reference.getBoundingClientRect != "function")
      throw new TypeError(
        `${Rn.toUpperCase()}: Option "reference" provided type "object" without a required "getBoundingClientRect" method.`
      );
    return t;
  }
  _createPopper(t) {
    if (typeof qc > "u")
      throw new TypeError(
        "Bootstrap's dropdowns require Popper (https://popper.js.org)"
      );
    let e = this._element;
    this._config.reference === "parent" ? e = t : Xe(this._config.reference) ? e = ee(this._config.reference) : typeof this._config.reference == "object" && (e = this._config.reference);
    const i = this._getPopperConfig(), n = i.modifiers.find(
      (o) => o.name === "applyStyles" && o.enabled === !1
    );
    this._popper = se(
      e,
      this._menu,
      i
    ), n && h.setDataAttribute(this._menu, "popper", "static");
  }
  _isShown(t = this._element) {
    return t.dataset[`teDropdown${Ft.charAt(0).toUpperCase() + Ft.slice(1)}`] === "";
  }
  _getMenuElement() {
    return d.next(this._element, Pn)[0];
  }
  _getPlacement() {
    const t = this._element.parentNode;
    if (t.dataset.teDropdownPosition === Ou)
      return Pu;
    if (t.dataset.teDropdownPosition === Su)
      return Bu;
    const e = t.dataset.teDropdownAlignment === "end";
    return t.dataset.teDropdownPosition === xu ? e ? Nu : Lu : e ? Ru : Mu;
  }
  _detectNavbar() {
    return this._element.closest(Iu) !== null;
  }
  _getOffset() {
    const { offset: t } = this._config;
    return typeof t == "string" ? t.split(",").map((e) => Number.parseInt(e, 10)) : typeof t == "function" ? (e) => t(e, this._element) : t;
  }
  _getPopperConfig() {
    const t = {
      placement: this._getPlacement(),
      modifiers: [
        {
          name: "preventOverflow",
          options: {
            boundary: this._config.boundary
          }
        },
        {
          name: "offset",
          options: {
            offset: this._getOffset()
          }
        }
      ]
    };
    return this._config.display === "static" && (t.modifiers = [
      {
        name: "applyStyles",
        enabled: !1
      }
    ]), {
      ...t,
      ...typeof this._config.popperConfig == "function" ? this._config.popperConfig(t) : this._config.popperConfig
    };
  }
  _selectMenuItem({ key: t, target: e }) {
    const i = d.find(
      $u,
      this._menu
    ).filter(Mt);
    i.length && vc(
      i,
      e,
      t === Ys,
      !i.includes(e)
    ).focus();
  }
  // Static
  static jQueryInterface(t) {
    return this.each(function() {
      const e = $t.getOrCreateInstance(this, t);
      if (typeof t == "string") {
        if (typeof e[t] > "u")
          throw new TypeError(`No method named "${t}"`);
        e[t]();
      }
    });
  }
  static clearMenus(t) {
    if (t && (t.button === vu || t.type === "keyup" && t.key !== Qr))
      return;
    const e = d.find(os);
    for (let i = 0, n = e.length; i < n; i++) {
      const o = $t.getInstance(e[i]);
      if (!o || o._config.autoClose === !1 || !o._isShown())
        continue;
      const r = {
        relatedTarget: o._element
      };
      if (t) {
        const a = t.composedPath(), l = a.includes(o._menu);
        if (a.includes(o._element) || o._config.autoClose === "inside" && !l || o._config.autoClose === "outside" && l || o._menu.contains(t.target) && (t.type === "keyup" && t.key === Qr || /input|select|option|textarea|form/i.test(t.target.tagName)))
          continue;
        t.type === "click" && (r.clickEvent = t);
      }
      o._completeHide(r);
    }
  }
  static getParentFromElement(t) {
    return te(t) || t.parentNode;
  }
  static dataApiKeydownHandler(t) {
    if (/input|textarea/i.test(t.target.tagName) ? t.key === Zr || t.key !== Fs && (t.key !== Ys && t.key !== jo || t.target.closest(Pn)) : !Tu.test(t.key))
      return;
    const e = this.dataset[`teDropdown${Ft.charAt(0).toUpperCase() + Ft.slice(1)}`] === "";
    if (!e && t.key === Fs || (t.preventDefault(), t.stopPropagation(), be(this)))
      return;
    const i = this.matches(os) ? this : d.prev(this, os)[0], n = $t.getOrCreateInstance(i);
    if (t.key === Fs) {
      n.hide();
      return;
    }
    if (t.key === jo || t.key === Ys) {
      e || n.show(), n._selectMenuItem(t);
      return;
    }
    (!e || t.key === Zr) && $t.clearMenus();
  }
}
const Bn = "collapse", Zc = "te.collapse", bn = `.${Zc}`, ea = {
  toggle: !0,
  parent: null
}, Yu = {
  toggle: "boolean",
  parent: "(null|element)"
}, ju = `show${bn}`, Ku = `shown${bn}`, zu = `hide${bn}`, Uu = `hidden${bn}`, Hn = "data-te-collapse-show", ia = "data-te-collapse-collapsed", rs = "data-te-collapse-collapsing", Xu = "data-te-collapse-horizontal", We = "data-te-collapse-item", sa = `:scope [${We}] [${We}]`, Gu = "width", qu = "height", Zu = "[data-te-collapse-item][data-te-collapse-show], [data-te-collapse-item][data-te-collapse-collapsing]", na = "[data-te-collapse-init]", Qu = {
  visible: "!visible",
  hidden: "hidden",
  baseTransition: "overflow-hidden duration-[350ms] ease-[cubic-bezier(0.25,0.1,0.25,1.0)] motion-reduce:transition-none",
  collapsing: "h-0 transition-[height] overflow-hidden duration-[350ms] ease-[cubic-bezier(0.25,0.1,0.25,1.0)] motion-reduce:transition-none",
  collapsingHorizontal: "w-0 h-auto transition-[width] overflow-hidden duration-[350ms] ease-[cubic-bezier(0.25,0.1,0.25,1.0)] motion-reduce:transition-none"
}, Ju = {
  visible: "string",
  hidden: "string",
  baseTransition: "string",
  collapsing: "string",
  collapsingHorizontal: "string"
};
class Qt extends ft {
  constructor(t, e, i) {
    super(t), this._isTransitioning = !1, this._config = this._getConfig(e), this._classes = this._getClasses(i), this._triggerArray = [];
    const n = d.find(na);
    for (let o = 0, r = n.length; o < r; o++) {
      const a = n[o], l = lr(a), p = d.find(l).filter(
        (u) => u === this._element
      );
      l !== null && p.length && (this._selector = l, this._triggerArray.push(a));
    }
    this._initializeChildren(), this._config.parent || this._addAriaAndCollapsedClass(this._triggerArray, this._isShown()), this._config.toggle && this.toggle();
  }
  // Getters
  static get Default() {
    return ea;
  }
  static get NAME() {
    return Bn;
  }
  // Public
  toggle() {
    this._isShown() ? this.hide() : this.show();
  }
  show() {
    if (this._isTransitioning || this._isShown())
      return;
    let t = [], e;
    if (this._config.parent) {
      const u = d.find(
        sa,
        this._config.parent
      );
      t = d.find(
        Zu,
        this._config.parent
      ).filter((_) => !u.includes(_));
    }
    const i = d.findOne(this._selector);
    if (t.length) {
      const u = t.find((_) => i !== _);
      if (e = u ? Qt.getInstance(u) : null, e && e._isTransitioning)
        return;
    }
    if (c.trigger(this._element, ju).defaultPrevented)
      return;
    t.forEach((u) => {
      i !== u && Qt.getOrCreateInstance(u, { toggle: !1 }).hide(), e || A.setData(u, Zc, null);
    });
    const o = this._getDimension(), r = o === "height" ? this._classes.collapsing : this._classes.collapsingHorizontal;
    h.removeClass(this._element, this._classes.visible), h.removeClass(this._element, this._classes.hidden), h.addClass(this._element, r), this._element.removeAttribute(We), this._element.setAttribute(rs, ""), this._element.style[o] = 0, this._addAriaAndCollapsedClass(this._triggerArray, !0), this._isTransitioning = !0;
    const a = () => {
      this._isTransitioning = !1, h.removeClass(this._element, this._classes.hidden), h.removeClass(this._element, r), h.addClass(this._element, this._classes.visible), this._element.removeAttribute(rs), this._element.setAttribute(We, ""), this._element.setAttribute(Hn, ""), this._element.style[o] = "", c.trigger(this._element, Ku);
    }, p = `scroll${o[0].toUpperCase() + o.slice(1)}`;
    this._queueCallback(a, this._element, !0), this._element.style[o] = `${this._element[p]}px`;
  }
  hide() {
    if (this._isTransitioning || !this._isShown() || c.trigger(this._element, zu).defaultPrevented)
      return;
    const e = this._getDimension(), i = e === "height" ? this._classes.collapsing : this._classes.collapsingHorizontal;
    this._element.style[e] = `${this._element.getBoundingClientRect()[e]}px`, si(this._element), h.addClass(this._element, i), h.removeClass(this._element, this._classes.visible), h.removeClass(this._element, this._classes.hidden), this._element.setAttribute(rs, ""), this._element.removeAttribute(We), this._element.removeAttribute(Hn);
    const n = this._triggerArray.length;
    for (let r = 0; r < n; r++) {
      const a = this._triggerArray[r], l = te(a);
      l && !this._isShown(l) && this._addAriaAndCollapsedClass([a], !1);
    }
    this._isTransitioning = !0;
    const o = () => {
      this._isTransitioning = !1, h.removeClass(this._element, i), h.addClass(this._element, this._classes.visible), h.addClass(this._element, this._classes.hidden), this._element.removeAttribute(rs), this._element.setAttribute(We, ""), c.trigger(this._element, Uu);
    };
    this._element.style[e] = "", this._queueCallback(o, this._element, !0);
  }
  _isShown(t = this._element) {
    return t.hasAttribute(Hn);
  }
  // Private
  _getConfig(t) {
    return t = {
      ...ea,
      ...h.getDataAttributes(this._element),
      ...t
    }, t.toggle = !!t.toggle, t.parent = ee(t.parent), I(Bn, t, Yu), t;
  }
  _getClasses(t) {
    const e = h.getDataClassAttributes(this._element);
    return t = {
      ...Qu,
      ...e,
      ...t
    }, I(Bn, t, Ju), t;
  }
  _getDimension() {
    return this._element.hasAttribute(Xu) ? Gu : qu;
  }
  _initializeChildren() {
    if (!this._config.parent)
      return;
    const t = d.find(
      sa,
      this._config.parent
    );
    d.find(na, this._config.parent).filter((e) => !t.includes(e)).forEach((e) => {
      const i = te(e);
      i && this._addAriaAndCollapsedClass([e], this._isShown(i));
    });
  }
  _addAriaAndCollapsedClass(t, e) {
    t.length && t.forEach((i) => {
      e ? i.removeAttribute(ia) : i.setAttribute(`${ia}`, ""), i.setAttribute("aria-expanded", e);
    });
  }
  // Static
  static jQueryInterface(t) {
    return this.each(function() {
      const e = {};
      typeof t == "string" && /show|hide/.test(t) && (e.toggle = !1);
      const i = Qt.getOrCreateInstance(this, e);
      if (typeof t == "string") {
        if (typeof i[t] > "u")
          throw new TypeError(`No method named "${t}"`);
        i[t]();
      }
    });
  }
}
const oa = ".fixed-top, .fixed-bottom, .is-fixed, .sticky-top", ra = ".sticky-top";
class ti {
  constructor() {
    this._element = document.body;
  }
  getWidth() {
    const t = document.documentElement.clientWidth;
    return Math.abs(window.innerWidth - t);
  }
  hide() {
    const t = this.getWidth();
    this._disableOverFlow(), this._setElementAttributes(
      this._element,
      "paddingRight",
      (e) => e + t
    ), this._setElementAttributes(
      oa,
      "paddingRight",
      (e) => e + t
    ), this._setElementAttributes(
      ra,
      "marginRight",
      (e) => e - t
    );
  }
  _disableOverFlow() {
    this._saveInitialAttribute(this._element, "overflow"), this._element.style.overflow = "hidden";
  }
  _setElementAttributes(t, e, i) {
    const n = this.getWidth(), o = (r) => {
      if (r !== this._element && window.innerWidth > r.clientWidth + n)
        return;
      this._saveInitialAttribute(r, e);
      const a = window.getComputedStyle(r)[e];
      r.style[e] = `${i(
        Number.parseFloat(a)
      )}px`;
    };
    this._applyManipulationCallback(t, o);
  }
  reset() {
    this._resetElementAttributes(this._element, "overflow"), this._resetElementAttributes(this._element, "paddingRight"), this._resetElementAttributes(oa, "paddingRight"), this._resetElementAttributes(ra, "marginRight");
  }
  _saveInitialAttribute(t, e) {
    const i = t.style[e];
    i && h.setDataAttribute(t, e, i);
  }
  _resetElementAttributes(t, e) {
    const i = (n) => {
      const o = h.getDataAttribute(n, e);
      typeof o > "u" ? n.style.removeProperty(e) : (h.removeDataAttribute(n, e), n.style[e] = o);
    };
    this._applyManipulationCallback(t, i);
  }
  _applyManipulationCallback(t, e) {
    Xe(t) ? e(t) : d.find(t, this._element).forEach(e);
  }
  isOverflowing() {
    return this.getWidth() > 0;
  }
}
const tp = {
  isVisible: !0,
  // if false, we use the backdrop helper without adding any element to the dom
  isAnimated: !1,
  rootElement: "body",
  // give the choice to place backdrop under different elements
  clickCallback: null,
  backdropClasses: null
}, ep = {
  isVisible: "boolean",
  isAnimated: "boolean",
  rootElement: "(element|string)",
  clickCallback: "(function|null)",
  backdropClasses: "(array|string|null)"
}, Qc = "backdrop", aa = `mousedown.te.${Qc}`;
class Cr {
  constructor(t) {
    this._config = this._getConfig(t), this._isAppended = !1, this._element = null;
  }
  show(t) {
    if (!this._config.isVisible) {
      ge(t);
      return;
    }
    this._append(), this._config.isAnimated && si(this._getElement());
    const e = this._config.backdropClasses || [
      "opacity-50",
      "transition-all",
      "duration-300",
      "ease-in-out",
      "fixed",
      "top-0",
      "left-0",
      "z-[1040]",
      "bg-black",
      "w-screen",
      "h-screen"
    ];
    h.removeClass(this._getElement(), "opacity-0"), h.addClass(this._getElement(), e), this._element.setAttribute("data-te-backdrop-show", ""), this._emulateAnimation(() => {
      ge(t);
    });
  }
  hide(t) {
    if (!this._config.isVisible) {
      ge(t);
      return;
    }
    this._element.removeAttribute("data-te-backdrop-show"), this._getElement().classList.add("opacity-0"), this._getElement().classList.remove("opacity-50"), this._emulateAnimation(() => {
      this.dispose(), ge(t);
    });
  }
  // Private
  _getElement() {
    if (!this._element) {
      const t = document.createElement("div");
      t.className = this._config.className, this._config.isAnimated && t.classList.add("opacity-50"), this._element = t;
    }
    return this._element;
  }
  _getConfig(t) {
    return t = {
      ...tp,
      ...typeof t == "object" ? t : {}
    }, t.rootElement = ee(t.rootElement), I(Qc, t, ep), t;
  }
  _append() {
    this._isAppended || (this._config.rootElement.append(this._getElement()), c.on(this._getElement(), aa, () => {
      ge(this._config.clickCallback);
    }), this._isAppended = !0);
  }
  dispose() {
    this._isAppended && (c.off(this._element, aa), this._element.remove(), this._isAppended = !1);
  }
  _emulateAnimation(t) {
    bc(
      t,
      this._getElement(),
      this._config.isAnimated
    );
  }
}
class zi {
  constructor(t, e = {}, i) {
    this._element = t, this._toggler = i, this._event = e.event || "blur", this._condition = e.condition || (() => !0), this._selector = e.selector || 'button, a, input, select, textarea, [tabindex]:not([tabindex="-1"])', this._onlyVisible = e.onlyVisible || !1, this._focusableElements = [], this._firstElement = null, this._lastElement = null, this.handler = (n) => {
      this._condition(n) && !n.shiftKey && n.target === this._lastElement ? (n.preventDefault(), this._firstElement.focus()) : this._condition(n) && n.shiftKey && n.target === this._firstElement && (n.preventDefault(), this._lastElement.focus());
    };
  }
  trap() {
    this._setElements(), this._init(), this._setFocusTrap();
  }
  disable() {
    this._focusableElements.forEach((t) => {
      t.removeEventListener(this._event, this.handler);
    }), this._toggler && this._toggler.focus();
  }
  update() {
    this._setElements(), this._setFocusTrap();
  }
  _init() {
    const t = (e) => {
      !this._firstElement || e.key !== "Tab" || this._focusableElements.includes(e.target) || (e.preventDefault(), this._firstElement.focus(), window.removeEventListener("keydown", t));
    };
    window.addEventListener("keydown", t);
  }
  _filterVisible(t) {
    return t.filter((e) => {
      if (!Mt(e))
        return !1;
      const i = d.parents(e, "*");
      for (let n = 0; n < i.length; n++) {
        const o = window.getComputedStyle(i[n]);
        if (o && (o.display === "none" || o.visibility === "hidden"))
          return !1;
      }
      return !0;
    });
  }
  _setElements() {
    this._focusableElements = d.focusableChildren(this._element), this._onlyVisible && (this._focusableElements = this._filterVisible(this._focusableElements)), this._firstElement = this._focusableElements[0], this._lastElement = this._focusableElements[this._focusableElements.length - 1];
  }
  _setFocusTrap() {
    this._focusableElements.forEach((t, e) => {
      e === this._focusableElements.length - 1 || e === 0 ? t.addEventListener(this._event, this.handler) : t.removeEventListener(this._event, this.handler);
    });
  }
}
let la = [];
const vn = (s, t = "hide") => {
  const e = `click.dismiss${s.EVENT_KEY}`, i = s.NAME;
  la.includes(i) || (la.push(i), c.on(
    document,
    e,
    `[data-te-${i}-dismiss]`,
    function(n) {
      if (["A", "AREA"].includes(this.tagName) && n.preventDefault(), be(this))
        return;
      const o = te(this) || this.closest(`.${i}`) || this.closest(`[data-te-${i}-init]`);
      if (!o)
        return;
      s.getOrCreateInstance(o)[t]();
    }
  ));
}, ca = "offcanvas", ip = "te.offcanvas", oi = `.${ip}`, sp = ".data-api", np = `load${oi}${sp}`, op = "Escape", ha = {
  backdrop: !0,
  keyboard: !0,
  scroll: !1
}, rp = {
  backdrop: "boolean",
  keyboard: "boolean",
  scroll: "boolean"
}, da = "show", ap = "[data-te-offcanvas-init][data-te-offcanvas-show]", lp = `show${oi}`, cp = `shown${oi}`, hp = `hide${oi}`, dp = `hidden${oi}`, up = `keydown.dismiss${oi}`;
class js extends ft {
  constructor(t, e) {
    super(t), this._config = this._getConfig(e), this._isShown = !1, this._backdrop = this._initializeBackDrop(), this._focustrap = this._initializeFocusTrap(), this._addEventListeners(), this._didInit = !1, this._init();
  }
  // Getters
  static get NAME() {
    return ca;
  }
  static get Default() {
    return ha;
  }
  // Public
  toggle(t) {
    return this._isShown ? this.hide() : this.show(t);
  }
  show(t) {
    if (this._isShown || c.trigger(this._element, lp, {
      relatedTarget: t
    }).defaultPrevented)
      return;
    this._isShown = !0, this._element.style.visibility = "visible", this._backdrop.show(), this._config.scroll || new ti().hide(), this._element.removeAttribute("aria-hidden"), this._element.setAttribute("aria-modal", !0), this._element.setAttribute("role", "dialog"), this._element.setAttribute(`data-te-offcanvas-${da}`, "");
    const i = () => {
      this._config.scroll || this._focustrap.trap(), c.trigger(this._element, cp, { relatedTarget: t });
    };
    this._queueCallback(i, this._element, !0);
  }
  hide() {
    if (!this._isShown || c.trigger(this._element, hp).defaultPrevented)
      return;
    this._focustrap.disable(), this._element.blur(), this._isShown = !1, this._element.removeAttribute(`data-te-offcanvas-${da}`), this._backdrop.hide();
    const e = () => {
      this._element.setAttribute("aria-hidden", !0), this._element.removeAttribute("aria-modal"), this._element.removeAttribute("role"), this._element.style.visibility = "hidden", this._config.scroll || new ti().reset(), c.trigger(this._element, dp);
    };
    this._queueCallback(e, this._element, !0);
  }
  dispose() {
    this._backdrop.dispose(), this._focustrap.disable(), super.dispose();
  }
  // Private
  _init() {
    this._didInit || (c.on(
      window,
      np,
      () => d.find(ap).forEach(
        (t) => js.getOrCreateInstance(t).show()
      )
    ), this._didInit = !0, vn(js));
  }
  _getConfig(t) {
    return t = {
      ...ha,
      ...h.getDataAttributes(this._element),
      ...typeof t == "object" ? t : {}
    }, I(ca, t, rp), t;
  }
  _initializeBackDrop() {
    return new Cr({
      isVisible: this._config.backdrop,
      isAnimated: !0,
      rootElement: this._element.parentNode,
      clickCallback: () => this.hide()
    });
  }
  _initializeFocusTrap() {
    return new zi(this._element, {
      event: "keydown",
      condition: (t) => t.key === "Tab"
    });
  }
  _addEventListeners() {
    c.on(this._element, up, (t) => {
      this._config.keyboard && t.key === op && this.hide();
    });
  }
  // Static
  static jQueryInterface(t) {
    return this.each(function() {
      const e = js.getOrCreateInstance(this, t);
      if (typeof t == "string") {
        if (e[t] === void 0 || t.startsWith("_") || t === "constructor")
          throw new TypeError(`No method named "${t}"`);
        e[t](this);
      }
    });
  }
}
const Vn = "alert", pp = "te.alert", Jc = `.${pp}`, _p = `close${Jc}`, fp = `closed${Jc}`, ui = "data-te-alert-show", mp = {
  animation: "boolean",
  autohide: "boolean",
  autoclose: "boolean",
  delay: "number"
}, ua = {
  animation: !0,
  autohide: !0,
  autoclose: !1,
  delay: 1e3
}, gp = {
  fadeIn: "animate-[fade-in_0.3s_both] p-[auto] motion-reduce:transition-none motion-reduce:animate-none",
  fadeOut: "animate-[fade-out_0.3s_both] p-[auto] motion-reduce:transition-none motion-reduce:animate-none"
}, bp = {
  fadeIn: "string",
  fadeOut: "string"
};
class Ko extends ft {
  constructor(t, e, i) {
    super(t), this._element = t, this._config = this._getConfig(e), this._classes = this._getClasses(i), this._didInit = !1, this._init();
  }
  // Getters
  static get DefaultType() {
    return mp;
  }
  static get Default() {
    return ua;
  }
  static get NAME() {
    return Vn;
  }
  // Public
  close() {
    if (c.trigger(this._element, _p).defaultPrevented)
      return;
    let e = 0;
    this._config.animation && (e = 300, h.addClass(this._element, this._classes.fadeOut)), this._element.removeAttribute(ui), setTimeout(() => {
      this._queueCallback(
        () => this._destroyElement(),
        this._element,
        this._config.animation
      );
    }, e);
  }
  show() {
    if (this._element) {
      if (this._config.autohide && this._setupAutohide(), (this._config.autoclose || this._config.autoclose && this._config.autohide) && this._setupAutoclose(), !this._element.hasAttribute(ui) && (h.removeClass(this._element, "hidden"), h.addClass(this._element, "block"), Mt(this._element))) {
        const t = (e) => {
          h.removeClass(this._element, "hidden"), h.addClass(this._element, "block"), c.off(e.target, "animationend", t);
        };
        this._element.setAttribute(ui, ""), c.on(this._element, "animationend", t);
      }
      this._config.animation && (h.removeClass(this._element, this._classes.fadeOut), h.addClass(this._element, this._classes.fadeIn));
    }
  }
  hide() {
    if (this._element && this._element.hasAttribute(ui)) {
      this._element.removeAttribute(ui);
      const t = (e) => {
        h.addClass(this._element, "hidden"), h.removeClass(this._element, "block"), this._timeout !== null && (clearTimeout(this._timeout), this._timeout = null), c.off(e.target, "animationend", t);
      };
      c.on(this._element, "animationend", t), h.removeClass(this._element, this._classes.fadeIn), h.addClass(this._element, this._classes.fadeOut);
    }
  }
  // Private
  _init() {
    this._didInit || (vn(Ko, "close"), this._didInit = !0);
  }
  _getConfig(t) {
    return t = {
      ...ua,
      ...h.getDataAttributes(this._element),
      ...typeof t == "object" && t ? t : {}
    }, I(Vn, t, this.constructor.DefaultType), t;
  }
  _getClasses(t) {
    const e = h.getDataClassAttributes(this._element);
    return t = {
      ...gp,
      ...e,
      ...t
    }, I(Vn, t, bp), t;
  }
  _setupAutohide() {
    this._timeout = setTimeout(() => {
      this.hide();
    }, this._config.delay);
  }
  _setupAutoclose() {
    this._timeout = setTimeout(() => {
      this.close();
    }, this._config.delay);
  }
  _destroyElement() {
    this._element.remove(), c.trigger(this._element, fp), this.dispose();
  }
  // Static
  static jQueryInterface(t) {
    return this.each(function() {
      const e = Ko.getOrCreateInstance(this);
      if (typeof t == "string") {
        if (e[t] === void 0 || t.startsWith("_") || t === "constructor")
          throw new TypeError(`No method named "${t}"`);
        e[t](this);
      }
    });
  }
}
const Wn = "carousel", vp = "te.carousel", mt = `.${vp}`, th = ".data-api", Tp = "ArrowLeft", Ep = "ArrowRight", Cp = 500, Ap = 40, pa = {
  interval: 5e3,
  keyboard: !0,
  ride: !1,
  pause: "hover",
  wrap: !0,
  touch: !0
}, yp = {
  interval: "(number|boolean)",
  keyboard: "boolean",
  ride: "(boolean|string)",
  pause: "(string|boolean)",
  wrap: "boolean",
  touch: "boolean"
}, wp = {
  pointer: "touch-pan-y",
  block: "!block",
  visible: "data-[te-carousel-fade]:opacity-100 data-[te-carousel-fade]:z-[1]",
  invisible: "data-[te-carousel-fade]:z-0 data-[te-carousel-fade]:opacity-0 data-[te-carousel-fade]:duration-[600ms] data-[te-carousel-fade]:delay-600",
  slideRight: "translate-x-full",
  slideLeft: "-translate-x-full"
}, kp = {
  pointer: "string",
  block: "string",
  visible: "string",
  invisible: "string",
  slideRight: "string",
  slideLeft: "string"
}, ce = "next", he = "prev", fe = "left", Ei = "right", xp = {
  [Tp]: Ei,
  [Ep]: fe
}, Op = `slide${mt}`, Fn = `slid${mt}`, Sp = `keydown${mt}`, Ip = `mouseenter${mt}`, Dp = `mouseleave${mt}`, $p = `touchstart${mt}`, Lp = `touchmove${mt}`, Np = `touchend${mt}`, Mp = `pointerdown${mt}`, Rp = `pointerup${mt}`, Pp = `dragstart${mt}`, Bp = `load${mt}${th}`, Hp = `click${mt}${th}`, _a = "data-te-carousel-init", de = "data-te-carousel-active", Vp = "data-te-carousel-item-end", Yn = "data-te-carousel-item-start", Wp = "data-te-carousel-item-next", Fp = "data-te-carousel-item-prev", Yp = "data-te-carousel-pointer-event", jp = "[data-te-carousel-init]", eh = "[data-te-carousel-active]", Ar = "[data-te-carousel-item]", Se = `${eh}${Ar}`, Kp = `${Ar} img`, zp = "[data-te-carousel-item-next], [data-te-carousel-item-prev]", Up = "[data-te-carousel-indicators]", Xp = "[data-te-target]", Gp = "[data-te-slide], [data-te-slide-to]", qp = "touch", Zp = "pen";
class Xt extends ft {
  constructor(t, e, i) {
    super(t), this._items = null, this._interval = null, this._activeElement = null, this._isPaused = !1, this._isSliding = !1, this.touchTimeout = null, this.touchStartX = 0, this.touchDeltaX = 0, this._config = this._getConfig(e), this._classes = this._getClasses(i), this._indicatorsElement = d.findOne(
      Up,
      this._element
    ), this._touchSupported = "ontouchstart" in document.documentElement || navigator.maxTouchPoints > 0, this._pointerEvent = !!window.PointerEvent, this._setActiveElementClass(), this._addEventListeners(), this._didInit = !1, this._init(), this._config.ride === "carousel" && this.cycle();
  }
  // Getters
  static get Default() {
    return pa;
  }
  static get NAME() {
    return Wn;
  }
  // Public
  next() {
    this._slide(ce);
  }
  nextWhenVisible() {
    !document.hidden && Mt(this._element) && this.next();
  }
  prev() {
    this._slide(he);
  }
  pause(t) {
    t || (this._isPaused = !0), d.findOne(zp, this._element) && (_c(this._element), this.cycle(!0)), clearInterval(this._interval), this._interval = null;
  }
  cycle(t) {
    t || (this._isPaused = !1), this._interval && (clearInterval(this._interval), this._interval = null), this._config && this._config.interval && !this._isPaused && (this._updateInterval(), this._interval = setInterval(
      (document.visibilityState ? this.nextWhenVisible : this.next).bind(
        this
      ),
      this._config.interval
    ));
  }
  to(t) {
    this._activeElement = d.findOne(
      Se,
      this._element
    );
    const e = this._getItemIndex(this._activeElement);
    if (t > this._items.length - 1 || t < 0)
      return;
    if (this._isSliding) {
      c.one(this._element, Fn, () => this.to(t));
      return;
    }
    if (e === t) {
      this.pause(), this.cycle();
      return;
    }
    const i = t > e ? ce : he;
    this._slide(i, this._items[t]);
  }
  // Private
  _init() {
    this._didInit || (c.on(
      document,
      Hp,
      Gp,
      Xt.dataApiClickHandler
    ), c.on(window, Bp, () => {
      const t = d.find(jp);
      for (let e = 0, i = t.length; e < i; e++)
        Xt.carouselInterface(
          t[e],
          Xt.getInstance(t[e])
        );
    }), this._didInit = !0);
  }
  _getConfig(t) {
    return t = {
      ...pa,
      ...h.getDataAttributes(this._element),
      ...typeof t == "object" ? t : {}
    }, I(Wn, t, yp), t;
  }
  _getClasses(t) {
    const e = h.getDataClassAttributes(this._element);
    return t = {
      ...wp,
      ...e,
      ...t
    }, I(Wn, t, kp), t;
  }
  _enableCycle() {
    if (this._config.ride) {
      if (this._isSliding) {
        c.one(this._element, Fn, () => this.cycle());
        return;
      }
      this.cycle();
    }
  }
  _applyInitialClasses() {
    const t = d.findOne(
      Se,
      this._element
    );
    t.classList.add(
      this._classes.block,
      ...this._classes.visible.split(" ")
    ), this._setActiveIndicatorElement(t);
  }
  _handleSwipe() {
    const t = Math.abs(this.touchDeltaX);
    if (t <= Ap)
      return;
    const e = t / this.touchDeltaX;
    this.touchDeltaX = 0, e && this._slide(e > 0 ? Ei : fe);
  }
  _setActiveElementClass() {
    this._activeElement = d.findOne(
      Se,
      this._element
    ), h.addClass(this._activeElement, "hidden");
  }
  _addEventListeners() {
    this._config.keyboard && c.on(
      this._element,
      Sp,
      (t) => this._keydown(t)
    ), this._config.pause === "hover" && (c.on(
      this._element,
      Ip,
      (t) => this.pause(t)
    ), c.on(
      this._element,
      Dp,
      (t) => this._enableCycle(t)
    )), this._config.touch && this._touchSupported && this._addTouchEventListeners(), this._applyInitialClasses();
  }
  _addTouchEventListeners() {
    const t = (o) => this._pointerEvent && (o.pointerType === Zp || o.pointerType === qp), e = (o) => {
      t(o) ? this.touchStartX = o.clientX : this._pointerEvent || (this.touchStartX = o.touches[0].clientX);
    }, i = (o) => {
      this.touchDeltaX = o.touches && o.touches.length > 1 ? 0 : o.touches[0].clientX - this.touchStartX;
    }, n = (o) => {
      t(o) && (this.touchDeltaX = o.clientX - this.touchStartX), this._handleSwipe(), this._config.pause === "hover" && (this.pause(), this.touchTimeout && clearTimeout(this.touchTimeout), this.touchTimeout = setTimeout(
        (r) => this._enableCycle(r),
        Cp + this._config.interval
      ));
    };
    d.find(Kp, this._element).forEach(
      (o) => {
        c.on(
          o,
          Pp,
          (r) => r.preventDefault()
        );
      }
    ), this._pointerEvent ? (c.on(
      this._element,
      Mp,
      (o) => e(o)
    ), c.on(this._element, Rp, (o) => n(o)), this._element.classList.add(this._classes.pointer), this._element.setAttribute(`${Yp}`, "")) : (c.on(this._element, $p, (o) => e(o)), c.on(this._element, Lp, (o) => i(o)), c.on(this._element, Np, (o) => n(o)));
  }
  _keydown(t) {
    if (/input|textarea/i.test(t.target.tagName))
      return;
    const e = xp[t.key];
    e && (t.preventDefault(), this._slide(e));
  }
  _getItemIndex(t) {
    return this._items = t && t.parentNode ? d.find(Ar, t.parentNode) : [], this._items.indexOf(t);
  }
  _getItemByOrder(t, e) {
    const i = t === ce;
    return vc(
      this._items,
      e,
      i,
      this._config.wrap
    );
  }
  _triggerSlideEvent(t, e) {
    const i = this._getItemIndex(t), n = this._getItemIndex(
      d.findOne(Se, this._element)
    );
    return c.trigger(this._element, Op, {
      relatedTarget: t,
      direction: e,
      from: n,
      to: i
    });
  }
  _setActiveIndicatorElement(t) {
    if (this._indicatorsElement) {
      const e = d.findOne(
        eh,
        this._indicatorsElement
      );
      e.removeAttribute(de), e.removeAttribute("aria-current"), e.classList.remove("!opacity-100");
      const i = d.find(
        Xp,
        this._indicatorsElement
      );
      for (let n = 0; n < i.length; n++)
        if (Number.parseInt(
          i[n].getAttribute("data-te-slide-to"),
          10
        ) === this._getItemIndex(t)) {
          i[n].setAttribute(`${de}`, ""), i[n].setAttribute("aria-current", "true"), i[n].classList.add("!opacity-100");
          break;
        }
    }
  }
  _updateInterval() {
    const t = this._activeElement || d.findOne(Se, this._element);
    if (!t)
      return;
    const e = Number.parseInt(
      t.getAttribute("data-te-interval"),
      10
    );
    e ? (this._config.defaultInterval = this._config.defaultInterval || this._config.interval, this._config.interval = e) : this._config.interval = this._config.defaultInterval || this._config.interval;
  }
  _slide(t, e) {
    const i = this._directionToOrder(t), n = d.findOne(
      Se,
      this._element
    ), o = this._getItemIndex(n), r = e || this._getItemByOrder(i, n), a = this._getItemIndex(r), l = !!this._interval, p = i === ce, u = p ? Yn : Vp, _ = p ? Wp : Fp, f = this._orderToDirection(i), g = u === Yn ? this._classes.slideLeft : this._classes.slideRight, m = u !== Yn ? this._classes.slideLeft : this._classes.slideRight;
    if (r && r.hasAttribute(de)) {
      this._isSliding = !1;
      return;
    }
    if (this._isSliding || this._triggerSlideEvent(r, f).defaultPrevented || !n || !r)
      return;
    this._isSliding = !0, l && this.pause(), this._setActiveIndicatorElement(r), this._activeElement = r;
    const v = () => {
      c.trigger(this._element, Fn, {
        relatedTarget: r,
        direction: f,
        from: o,
        to: a
      });
    };
    if (this._element.hasAttribute(_a)) {
      r.setAttribute(`${_}`, ""), r.classList.add(this._classes.block, m), si(r), n.setAttribute(`${u}`, ""), n.classList.add(
        g,
        ...this._classes.invisible.split(" ")
      ), n.classList.remove(...this._classes.visible.split(" ")), r.setAttribute(`${u}`, ""), r.classList.add(...this._classes.visible.split(" ")), r.classList.remove(
        this._classes.slideRight,
        this._classes.slideLeft
      );
      const T = () => {
        r.removeAttribute(u), r.removeAttribute(_), r.setAttribute(`${de}`, ""), n.removeAttribute(de), n.classList.remove(
          g,
          ...this._classes.invisible.split(" "),
          this._classes.block
        ), n.removeAttribute(_), n.removeAttribute(u), this._isSliding = !1, setTimeout(v, 0);
      };
      this._queueCallback(T, n, !0);
    } else
      n.removeAttribute(de), n.classList.remove(this._classes.block), r.setAttribute(`${de}`, ""), r.classList.add(this._classes.block), this._isSliding = !1, v();
    l && this.cycle();
  }
  _directionToOrder(t) {
    return [Ei, fe].includes(t) ? W() ? t === fe ? he : ce : t === fe ? ce : he : t;
  }
  _orderToDirection(t) {
    return [ce, he].includes(t) ? W() ? t === he ? fe : Ei : t === he ? Ei : fe : t;
  }
  // Static
  static carouselInterface(t, e) {
    const i = Xt.getOrCreateInstance(t, e);
    let { _config: n } = i;
    typeof e == "object" && (n = {
      ...n,
      ...e
    });
    const o = typeof e == "string" ? e : e.slide;
    if (typeof e == "number") {
      i.to(e);
      return;
    }
    if (typeof o == "string") {
      if (typeof i[o] > "u")
        throw new TypeError(`No method named "${o}"`);
      i[o]();
    } else
      n.interval && n.ride === !0 && i.pause();
  }
  static jQueryInterface(t) {
    return this.each(function() {
      Xt.carouselInterface(this, t);
    });
  }
  static dataApiClickHandler(t) {
    const e = te(this);
    if (!e || !e.hasAttribute(_a))
      return;
    const i = {
      ...h.getDataAttributes(e),
      ...h.getDataAttributes(this)
    }, n = this.getAttribute("data-te-slide-to");
    n && (i.interval = !1), Xt.carouselInterface(e, i), n && Xt.getInstance(e).to(n), t.preventDefault();
  }
}
const jn = "modal", Qp = "te.modal", yt = `.${Qp}`, fa = "Escape", ma = {
  backdrop: !0,
  keyboard: !0,
  focus: !0,
  modalNonInvasive: !1
}, Jp = {
  backdrop: "(boolean|string)",
  keyboard: "boolean",
  focus: "boolean",
  modalNonInvasive: "boolean"
}, t_ = {
  show: "transform-none",
  static: "scale-[1.02]",
  staticProperties: "transition-scale duration-300 ease-in-out",
  backdrop: "opacity-50 transition-all duration-300 ease-in-out fixed top-0 left-0 z-[1040] bg-black w-screen h-screen"
}, e_ = {
  show: "string",
  static: "string",
  staticProperties: "string",
  backdrop: "string"
}, i_ = `hide${yt}`, s_ = `hidePrevented${yt}`, n_ = `hidden${yt}`, o_ = `show${yt}`, r_ = `shown${yt}`, ga = `resize${yt}`, ba = `click.dismiss${yt}`, va = `keydown.dismiss${yt}`, a_ = `mouseup.dismiss${yt}`, Ta = `mousedown.dismiss${yt}`, Ea = "data-te-modal-open", Ca = "data-te-open", pi = "[data-te-modal-dialog-ref]", l_ = "[data-te-modal-body-ref]";
class zo extends ft {
  constructor(t, e, i) {
    super(t), this._config = this._getConfig(e), this._classes = this._getClasses(i), this._dialog = d.findOne(pi, this._element), this._backdrop = this._config.modalNonInvasive ? null : this._initializeBackDrop(), this._focustrap = this._initializeFocusTrap(), this._isShown = !1, this._ignoreBackdropClick = !1, this._isTransitioning = !1, this._scrollBar = new ti(), this._didInit = !1, this._init();
  }
  // Getters
  static get Default() {
    return ma;
  }
  static get NAME() {
    return jn;
  }
  // Public
  toggle(t) {
    return this._isShown ? this.hide() : this.show(t);
  }
  show(t) {
    this._isShown || this._isTransitioning || c.trigger(this._element, o_, {
      relatedTarget: t
    }).defaultPrevented || (this._isShown = !0, this._isAnimated() && (this._isTransitioning = !0), !this._config.modalNonInvasive && this._scrollBar.hide(), document.body.setAttribute(Ea, "true"), this._adjustDialog(), this._setEscapeEvent(), this._setResizeEvent(), c.on(this._dialog, Ta, () => {
      c.one(this._element, a_, (i) => {
        i.target === this._element && (this._ignoreBackdropClick = !0);
      });
    }), this._showElement(t), !this._config.modalNonInvasive && this._showBackdrop());
  }
  hide() {
    if (!this._isShown || this._isTransitioning || c.trigger(this._element, i_).defaultPrevented)
      return;
    this._isShown = !1;
    const e = this._isAnimated();
    e && (this._isTransitioning = !0), this._setEscapeEvent(), this._setResizeEvent(), this._focustrap.disable(), d.findOne(pi, this._element).classList.remove(this._classes.show), c.off(this._element, ba), c.off(this._dialog, Ta), this._queueCallback(() => this._hideModal(), this._element, e), this._element.removeAttribute(Ca);
  }
  dispose() {
    [window, document, this._dialog].forEach(
      (t) => c.off(t, yt)
    ), this._backdrop && this._backdrop.dispose(), this._focustrap.disable(), super.dispose();
  }
  handleUpdate() {
    this._adjustDialog();
  }
  // Private
  _init() {
    this._didInit || (vn(zo), this._didInit = !0);
  }
  _initializeBackDrop() {
    return new Cr({
      isVisible: !!this._config.backdrop,
      // 'static' option will be translated to true, and booleans will keep their value
      isAnimated: this._isAnimated(),
      backdropClasses: this._classes.backdrop
    });
  }
  _initializeFocusTrap() {
    return new zi(this._element, {
      event: "keydown",
      condition: (t) => t.key === "Tab"
    });
  }
  _getConfig(t) {
    return t = {
      ...ma,
      ...h.getDataAttributes(this._element),
      ...typeof t == "object" ? t : {}
    }, I(jn, t, Jp), t;
  }
  _getClasses(t) {
    const e = h.getDataClassAttributes(this._element);
    return t = {
      ...t_,
      ...e,
      ...t
    }, I(jn, t, e_), t;
  }
  _showElement(t) {
    const e = this._isAnimated(), i = d.findOne(l_, this._dialog);
    (!this._element.parentNode || this._element.parentNode.nodeType !== Node.ELEMENT_NODE) && document.body.append(this._element), this._element.style.display = "block", this._element.classList.remove("hidden"), this._element.removeAttribute("aria-hidden"), this._element.setAttribute("aria-modal", !0), this._element.setAttribute("role", "dialog"), this._element.setAttribute(`${Ca}`, "true"), this._element.scrollTop = 0;
    const n = d.findOne(pi, this._element);
    n.classList.add(this._classes.show), n.classList.remove("opacity-0"), n.classList.add("opacity-100"), i && (i.scrollTop = 0), e && si(this._element);
    const o = () => {
      this._config.focus && this._focustrap.trap(), this._isTransitioning = !1, c.trigger(this._element, r_, {
        relatedTarget: t
      });
    };
    this._queueCallback(o, this._dialog, e);
  }
  _setEscapeEvent() {
    this._isShown ? c.on(document, va, (t) => {
      this._config.keyboard && t.key === fa ? (t.preventDefault(), this.hide()) : !this._config.keyboard && t.key === fa && this._triggerBackdropTransition();
    }) : c.off(this._element, va);
  }
  _setResizeEvent() {
    this._isShown ? c.on(window, ga, () => this._adjustDialog()) : c.off(window, ga);
  }
  _hideModal() {
    const t = d.findOne(pi, this._element);
    t.classList.remove(this._classes.show), t.classList.remove("opacity-100"), t.classList.add("opacity-0");
    const e = cn(t);
    setTimeout(() => {
      this._element.style.display = "none";
    }, e), this._element.setAttribute("aria-hidden", !0), this._element.removeAttribute("aria-modal"), this._element.removeAttribute("role"), this._isTransitioning = !1, this._backdrop && this._backdrop.hide(() => {
      document.body.removeAttribute(Ea), this._resetAdjustments(), !this._config.modalNonInvasive && this._scrollBar.reset(), c.trigger(this._element, n_);
    });
  }
  _showBackdrop(t) {
    c.on(this._element, ba, (e) => {
      if (this._ignoreBackdropClick) {
        this._ignoreBackdropClick = !1;
        return;
      }
      e.target === e.currentTarget && (this._config.backdrop === !0 ? this.hide() : this._config.backdrop === "static" && this._triggerBackdropTransition());
    }), this._backdrop && this._backdrop.show(t);
  }
  _isAnimated() {
    return !!d.findOne(pi, this._element);
  }
  _triggerBackdropTransition() {
    if (c.trigger(this._element, s_).defaultPrevented)
      return;
    const { classList: e, scrollHeight: i, style: n } = this._element, o = i > document.documentElement.clientHeight;
    if (!o && n.overflowY === "hidden" || e.contains(this._classes.static))
      return;
    o || (n.overflowY = "hidden"), e.add(...this._classes.static.split(" ")), e.add(...this._classes.staticProperties.split(" "));
    const r = cn(this._element);
    this._queueCallback(() => {
      e.remove(this._classes.static), setTimeout(() => {
        e.remove(...this._classes.staticProperties.split(" "));
      }, r), o || this._queueCallback(() => {
        n.overflowY = "";
      }, this._dialog);
    }, this._dialog), this._element.focus();
  }
  // ----------------------------------------------------------------------
  // the following methods are used to handle overflowing modals
  // ----------------------------------------------------------------------
  _adjustDialog() {
    const t = this._element.scrollHeight > document.documentElement.clientHeight, e = this._scrollBar.getWidth(), i = e > 0;
    (!i && t && !W() || i && !t && W()) && (this._element.style.paddingLeft = `${e}px`), (i && !t && !W() || !i && t && W()) && (this._element.style.paddingRight = `${e}px`);
  }
  _resetAdjustments() {
    this._element.style.paddingLeft = "", this._element.style.paddingRight = "";
  }
  // Static
  static jQueryInterface(t, e) {
    return this.each(function() {
      const i = zo.getOrCreateInstance(this, t);
      if (typeof t == "string") {
        if (typeof i[t] > "u")
          throw new TypeError(`No method named "${t}"`);
        i[t](e);
      }
    });
  }
}
const c_ = /* @__PURE__ */ new Set([
  "background",
  "cite",
  "href",
  "itemtype",
  "longdesc",
  "poster",
  "src",
  "xlink:href"
]), ih = /^aria-[\w-]*$/i, h_ = /^data-te-[\w-]*$/i, d_ = /^(?:(?:https?|mailto|ftp|tel|file|sms):|[^#&/:?]*(?:[#/?]|$))/i, u_ = /^data:(?:image\/(?:bmp|gif|jpeg|jpg|png|tiff|webp)|video\/(?:mpeg|mp4|ogg|webm)|audio\/(?:mp3|oga|ogg|opus));base64,[\d+/a-z]+=*$/i, p_ = (s, t) => {
  const e = s.nodeName.toLowerCase();
  if (t.includes(e))
    return c_.has(e) ? !!(d_.test(s.nodeValue) || u_.test(s.nodeValue)) : !0;
  const i = t.filter(
    (n) => n instanceof RegExp
  );
  for (let n = 0, o = i.length; n < o; n++)
    if (i[n].test(e))
      return !0;
  return !1;
}, sh = {
  // Global attributes allowed on any supplied element below.
  "*": [
    "class",
    "dir",
    "id",
    "lang",
    "role",
    ih,
    h_
  ],
  a: ["target", "href", "title", "rel"],
  area: [],
  b: [],
  br: [],
  col: [],
  code: [],
  div: [],
  em: [],
  hr: [],
  h1: [],
  h2: [],
  h3: [],
  h4: [],
  h5: [],
  h6: [],
  i: [],
  img: ["src", "srcset", "alt", "title", "width", "height"],
  li: [],
  ol: [],
  p: [],
  pre: [],
  s: [],
  small: [],
  span: [],
  sub: [],
  sup: [],
  strong: [],
  u: [],
  ul: []
}, __ = {
  // Global attributes allowed on any supplied element below.
  "*": ["class", "dir", "id", "lang", "role", ih],
  a: ["target", "href", "title", "rel"],
  area: [],
  b: [],
  br: [],
  col: [],
  code: [],
  div: [],
  em: [],
  hr: [],
  h1: [],
  h2: [],
  h3: [],
  h4: [],
  h5: [],
  h6: [],
  i: [],
  img: ["src", "srcset", "alt", "title", "width", "height"],
  li: [],
  ol: [],
  p: [],
  pre: [],
  s: [],
  small: [],
  span: [],
  sub: [],
  sup: [],
  strong: [],
  u: [],
  ul: []
};
function pn(s, t, e) {
  if (!s.length)
    return s;
  if (e && typeof e == "function")
    return e(s);
  const n = new window.DOMParser().parseFromString(s, "text/html"), o = [].concat(...n.body.querySelectorAll("*"));
  for (let r = 0, a = o.length; r < a; r++) {
    const l = o[r], p = l.nodeName.toLowerCase();
    if (!Object.keys(t).includes(p)) {
      l.remove();
      continue;
    }
    const u = [].concat(...l.attributes), _ = [].concat(
      t["*"] || [],
      t[p] || []
    );
    u.forEach((f) => {
      p_(f, _) || l.removeAttribute(f.nodeName);
    });
  }
  return n.body.innerHTML;
}
const Aa = "tooltip", f_ = "te.tooltip", kt = `.${f_}`, m_ = "te-tooltip", g_ = /* @__PURE__ */ new Set(["sanitize", "allowList", "sanitizeFn"]), b_ = {
  animation: "boolean",
  template: "string",
  title: "(string|element|function)",
  trigger: "string",
  delay: "(number|object)",
  html: "boolean",
  selector: "(string|boolean)",
  placement: "(string|function)",
  offset: "(array|string|function)",
  container: "(string|element|boolean)",
  fallbackPlacements: "array",
  boundary: "(string|element)",
  customClass: "(string|function)",
  sanitize: "boolean",
  sanitizeFn: "(null|function)",
  allowList: "object",
  popperConfig: "(null|object|function)"
}, v_ = {
  AUTO: "auto",
  TOP: "top",
  RIGHT: W() ? "left" : "right",
  BOTTOM: "bottom",
  LEFT: W() ? "right" : "left"
}, T_ = {
  animation: !0,
  template: '<div class="opacity-0 transition-opacity duration-300 ease-in-out absolute z-[1080] block m-0 text-sm not-italic font-normal text-left no-underline underline-offset-auto normal-case leading-6 tracking-normal break-normal whitespace-normal" role="tooltip"><div data-te-tooltip-inner-ref class="tooltip-inner max-w-[200px] text-sm py-1.5 px-4 text-white text-center bg-[#6d6d6d] rounded"></div></div>',
  trigger: "hover focus",
  title: "",
  delay: 0,
  html: !1,
  selector: !1,
  placement: "top",
  offset: [0, 0],
  container: !1,
  fallbackPlacements: ["top", "right", "bottom", "left"],
  boundary: "clippingParents",
  customClass: "",
  sanitize: !0,
  sanitizeFn: null,
  allowList: __,
  popperConfig: { hide: !0 }
}, E_ = {
  HIDE: `hide${kt}`,
  HIDDEN: `hidden${kt}`,
  SHOW: `show${kt}`,
  SHOWN: `shown${kt}`,
  INSERTED: `inserted${kt}`,
  CLICK: `click${kt}`,
  FOCUSIN: `focusin${kt}`,
  FOCUSOUT: `focusout${kt}`,
  MOUSEENTER: `mouseenter${kt}`,
  MOUSELEAVE: `mouseleave${kt}`
}, C_ = "fade", A_ = "modal", Kn = "show", _i = "show", zn = "out", ya = ".tooltip-inner", wa = `.${A_}`, ka = "hide.te.modal", fi = "hover", Un = "focus", y_ = "click", w_ = "manual";
class ri extends ft {
  constructor(t, e) {
    if (typeof qc > "u")
      throw new TypeError(
        "Bootstrap's tooltips require Popper (https://popper.js.org)"
      );
    super(t), this._isEnabled = !0, this._timeout = 0, this._hoverState = "", this._activeTrigger = {}, this._popper = null, this._config = this._getConfig(e), this.tip = null, this._setListeners();
  }
  // Getters
  static get Default() {
    return T_;
  }
  static get NAME() {
    return Aa;
  }
  static get Event() {
    return E_;
  }
  static get DefaultType() {
    return b_;
  }
  // Public
  enable() {
    this._isEnabled = !0;
  }
  disable() {
    this._isEnabled = !1;
  }
  toggleEnabled() {
    this._isEnabled = !this._isEnabled;
  }
  toggle(t) {
    if (this._isEnabled)
      if (t) {
        const e = this._initializeOnDelegatedTarget(t);
        e._activeTrigger.click = !e._activeTrigger.click, e._isWithActiveTrigger() ? e._enter(null, e) : e._leave(null, e);
      } else {
        if (this.getTipElement().classList.contains(Kn)) {
          this._leave(null, this);
          return;
        }
        this._enter(null, this);
      }
  }
  dispose() {
    clearTimeout(this._timeout), c.off(
      this._element.closest(wa),
      ka,
      this._hideModalHandler
    ), this.tip && this.tip.remove(), this._disposePopper(), super.dispose();
  }
  show() {
    if (this._element.style.display === "none")
      throw new Error("Please use show on visible elements");
    if (!(this.isWithContent() && this._isEnabled))
      return;
    const t = c.trigger(
      this._element,
      this.constructor.Event.SHOW
    ), e = fc(this._element), i = e === null ? this._element.ownerDocument.documentElement.contains(this._element) : e.contains(this._element);
    if (t.defaultPrevented || !i)
      return;
    this.constructor.NAME === "tooltip" && this.tip && this.getTitle() !== this.tip.querySelector(ya).innerHTML && (this._disposePopper(), this.tip.remove(), this.tip = null);
    const n = this.getTipElement(), o = et(this.constructor.NAME);
    n.setAttribute("id", o), this._element.setAttribute("aria-describedby", o), this._config.animation && setTimeout(() => {
      this.tip.classList.add("opacity-100"), this.tip.classList.remove("opacity-0");
    }, 100);
    const r = typeof this._config.placement == "function" ? this._config.placement.call(this, n, this._element) : this._config.placement, a = this._getAttachment(r);
    this._addAttachmentClass(a);
    const { container: l } = this._config;
    if (A.setData(n, this.constructor.DATA_KEY, this), this._element.ownerDocument.documentElement.contains(this.tip) || (l.append(n), c.trigger(this._element, this.constructor.Event.INSERTED)), this._popper ? this._popper.update() : this._popper = se(
      this._element,
      n,
      this._getPopperConfig(a)
    ), n.getAttribute("id").includes("tooltip"))
      switch (r) {
        case "bottom":
          n.classList.add("py-[0.4rem]");
          break;
        case "left":
          n.classList.add("px-[0.4rem]");
          break;
        case "right":
          n.classList.add("px-[0.4rem]");
          break;
        default:
          n.classList.add("py-[0.4rem]");
          break;
      }
    const u = this._resolvePossibleFunction(this._config.customClass);
    u && n.classList.add(...u.split(" ")), "ontouchstart" in document.documentElement && [].concat(...document.body.children).forEach((g) => {
      c.on(g, "mouseover", hn);
    });
    const _ = () => {
      const g = this._hoverState;
      this._hoverState = null, c.trigger(this._element, this.constructor.Event.SHOWN), g === zn && this._leave(null, this);
    }, f = this.tip.classList.contains("transition-opacity");
    this._queueCallback(_, this.tip, f);
  }
  hide() {
    if (!this._popper)
      return;
    const t = this.getTipElement(), e = () => {
      this._isWithActiveTrigger() || (this._hoverState !== _i && t.remove(), this._cleanTipClass(), this._element.removeAttribute("aria-describedby"), c.trigger(this._element, this.constructor.Event.HIDDEN), this._disposePopper());
    };
    if (c.trigger(
      this._element,
      this.constructor.Event.HIDE
    ).defaultPrevented)
      return;
    t.classList.add("opacity-0"), t.classList.remove("opacity-100"), "ontouchstart" in document.documentElement && [].concat(...document.body.children).forEach((o) => c.off(o, "mouseover", hn)), this._activeTrigger[y_] = !1, this._activeTrigger[Un] = !1, this._activeTrigger[fi] = !1;
    const n = this.tip.classList.contains("opacity-0");
    this._queueCallback(e, this.tip, n), this._hoverState = "";
  }
  update() {
    this._popper !== null && this._popper.update();
  }
  // Protected
  isWithContent() {
    return !!this.getTitle();
  }
  getTipElement() {
    if (this.tip)
      return this.tip;
    const t = document.createElement("div");
    t.innerHTML = this._config.template;
    const e = t.children[0];
    return this.setContent(e), e.classList.remove(C_, Kn), this.tip = e, this.tip;
  }
  setContent(t) {
    this._sanitizeAndSetContent(t, this.getTitle(), ya);
  }
  _sanitizeAndSetContent(t, e, i) {
    const n = d.findOne(i, t);
    if (!e && n) {
      n.remove();
      return;
    }
    this.setElementContent(n, e);
  }
  setElementContent(t, e) {
    if (t !== null) {
      if (Xe(e)) {
        e = ee(e), this._config.html ? e.parentNode !== t && (t.innerHTML = "", t.append(e)) : t.textContent = e.textContent;
        return;
      }
      this._config.html ? (this._config.sanitize && (e = pn(
        e,
        this._config.allowList,
        this._config.sanitizeFn
      )), t.innerHTML = e) : t.textContent = e;
    }
  }
  getTitle() {
    const t = this._element.getAttribute("data-te-original-title") || this._config.title;
    return this._resolvePossibleFunction(t);
  }
  updateAttachment(t) {
    return t === "right" ? "end" : t === "left" ? "start" : t;
  }
  // Private
  _initializeOnDelegatedTarget(t, e) {
    return e || this.constructor.getOrCreateInstance(
      t.delegateTarget,
      this._getDelegateConfig()
    );
  }
  _getOffset() {
    const { offset: t } = this._config;
    return typeof t == "string" ? t.split(",").map((e) => Number.parseInt(e, 10)) : typeof t == "function" ? (e) => t(e, this._element) : t;
  }
  _resolvePossibleFunction(t) {
    return typeof t == "function" ? t.call(this._element) : t;
  }
  _getPopperConfig(t) {
    const e = {
      placement: t,
      modifiers: [
        {
          name: "flip",
          options: {
            fallbackPlacements: this._config.fallbackPlacements
          }
        },
        {
          name: "offset",
          options: {
            offset: this._getOffset()
          }
        },
        {
          name: "preventOverflow",
          options: {
            boundary: this._config.boundary
          }
        },
        {
          name: "arrow",
          options: {
            element: `.${this.constructor.NAME}-arrow`
          }
        },
        {
          name: "onChange",
          enabled: !0,
          phase: "afterWrite",
          fn: (i) => this._handlePopperPlacementChange(i)
        }
      ],
      onFirstUpdate: (i) => {
        i.options.placement !== i.placement && this._handlePopperPlacementChange(i);
      }
    };
    return {
      ...e,
      ...typeof this._config.popperConfig == "function" ? this._config.popperConfig(e) : this._config.popperConfig
    };
  }
  _addAttachmentClass(t) {
    this.getTipElement().classList.add(
      `${this._getBasicClassPrefix()}-${this.updateAttachment(t)}`
    );
  }
  _getAttachment(t) {
    return v_[t.toUpperCase()];
  }
  _setListeners() {
    this._config.trigger.split(" ").forEach((e) => {
      if (e === "click")
        c.on(
          this._element,
          this.constructor.Event.CLICK,
          this._config.selector,
          (i) => this.toggle(i)
        );
      else if (e !== w_) {
        const i = e === fi ? this.constructor.Event.MOUSEENTER : this.constructor.Event.FOCUSIN, n = e === fi ? this.constructor.Event.MOUSELEAVE : this.constructor.Event.FOCUSOUT;
        c.on(
          this._element,
          i,
          this._config.selector,
          (o) => this._enter(o)
        ), c.on(
          this._element,
          n,
          this._config.selector,
          (o) => this._leave(o)
        );
      }
    }), this._hideModalHandler = () => {
      this._element && this.hide();
    }, c.on(
      this._element.closest(wa),
      ka,
      this._hideModalHandler
    ), this._config.selector ? this._config = {
      ...this._config,
      trigger: "manual",
      selector: ""
    } : this._fixTitle();
  }
  _fixTitle() {
    const t = this._element.getAttribute("title"), e = typeof this._element.getAttribute(
      "data-te-original-title"
    );
    (t || e !== "string") && (this._element.setAttribute("data-te-original-title", t || ""), t && !this._element.getAttribute("aria-label") && !this._element.textContent && this._element.setAttribute("aria-label", t), this._element.setAttribute("title", ""));
  }
  _enter(t, e) {
    if (e = this._initializeOnDelegatedTarget(t, e), t && (e._activeTrigger[t.type === "focusin" ? Un : fi] = !0), e.getTipElement().classList.contains(Kn) || e._hoverState === _i) {
      e._hoverState = _i;
      return;
    }
    if (clearTimeout(e._timeout), e._hoverState = _i, !e._config.delay || !e._config.delay.show) {
      e.show();
      return;
    }
    e._timeout = setTimeout(() => {
      e._hoverState === _i && e.show();
    }, e._config.delay.show);
  }
  _leave(t, e) {
    if (e = this._initializeOnDelegatedTarget(t, e), t && (e._activeTrigger[t.type === "focusout" ? Un : fi] = e._element.contains(t.relatedTarget)), !e._isWithActiveTrigger()) {
      if (clearTimeout(e._timeout), e._hoverState = zn, !e._config.delay || !e._config.delay.hide) {
        e.hide();
        return;
      }
      e._timeout = setTimeout(() => {
        e._hoverState === zn && e.hide();
      }, e._config.delay.hide);
    }
  }
  _isWithActiveTrigger() {
    for (const t in this._activeTrigger)
      if (this._activeTrigger[t])
        return !0;
    return !1;
  }
  _getConfig(t) {
    const e = h.getDataAttributes(this._element);
    return Object.keys(e).forEach((i) => {
      g_.has(i) && delete e[i];
    }), t = {
      ...this.constructor.Default,
      ...e,
      ...typeof t == "object" && t ? t : {}
    }, t.container = t.container === !1 ? document.body : ee(t.container), typeof t.delay == "number" && (t.delay = {
      show: t.delay,
      hide: t.delay
    }), typeof t.title == "number" && (t.title = t.title.toString()), typeof t.content == "number" && (t.content = t.content.toString()), I(Aa, t, this.constructor.DefaultType), t.sanitize && (t.template = pn(
      t.template,
      t.allowList,
      t.sanitizeFn
    )), t;
  }
  _getDelegateConfig() {
    const t = {};
    for (const e in this._config)
      this.constructor.Default[e] !== this._config[e] && (t[e] = this._config[e]);
    return t;
  }
  _cleanTipClass() {
    const t = this.getTipElement(), e = new RegExp(
      `(^|\\s)${this._getBasicClassPrefix()}\\S+`,
      "g"
    ), i = t.getAttribute("class").match(e);
    i !== null && i.length > 0 && i.map((n) => n.trim()).forEach((n) => t.classList.remove(n));
  }
  _getBasicClassPrefix() {
    return m_;
  }
  _handlePopperPlacementChange(t) {
    const { state: e } = t;
    e && (this.tip = e.elements.popper, this._cleanTipClass(), this._addAttachmentClass(this._getAttachment(e.placement)));
  }
  _disposePopper() {
    this._popper && (this._popper.destroy(), this._popper = null);
  }
  // Static
  static jQueryInterface(t) {
    return this.each(function() {
      const e = ri.getOrCreateInstance(this, t);
      if (typeof t == "string") {
        if (typeof e[t] > "u")
          throw new TypeError(`No method named "${t}"`);
        e[t]();
      }
    });
  }
}
const k_ = "popover", x_ = "te.popover", xt = `.${x_}`, O_ = "te-popover", S_ = {
  ...ri.Default,
  placement: "right",
  offset: [0, 8],
  trigger: "click",
  content: "",
  template: '<div class="opacity-0 transition-opacity duration-150 ease-in-out absolute top-0 left-0 z-[1070] block max-w-[267px] break-words bg-white bg-clip-padding border border-neutral-100 rounded-lg shadow-[0_0px_3px_0_rgba(0,0,0,0.07),0_2px_2px_0_rgba(0,0,0,0.04)] text-sm not-italic font-normal text-left no-underline underline-offset-auto normal-case leading-6 tracking-normal break-normal whitespace-normal dark:bg-neutral-700 dark:border-0 dark:text-white data-[popper-reference-hidden]:hidden" role="tooltip"><h3 class="popover-header py-2 px-4 mb-0 border-b-2 border-neutral-100 rounded-t-lg font-medium empty:hidden dark:border-neutral-500"></h3><div class="popover-body p-4 text-[#212529] dark:text-white"></div></div>'
}, I_ = {
  ...ri.DefaultType,
  content: "(string|element|function)"
}, D_ = {
  HIDE: `hide${xt}`,
  HIDDEN: `hidden${xt}`,
  SHOW: `show${xt}`,
  SHOWN: `shown${xt}`,
  INSERTED: `inserted${xt}`,
  CLICK: `click${xt}`,
  FOCUSIN: `focusin${xt}`,
  FOCUSOUT: `focusout${xt}`,
  MOUSEENTER: `mouseenter${xt}`,
  MOUSELEAVE: `mouseleave${xt}`
}, $_ = ".popover-header", L_ = ".popover-body";
class nh extends ri {
  // Getters
  static get Default() {
    return S_;
  }
  static get NAME() {
    return k_;
  }
  static get Event() {
    return D_;
  }
  static get DefaultType() {
    return I_;
  }
  // Overrides
  isWithContent() {
    return this.getTitle() || this._getContent();
  }
  setContent(t) {
    this._sanitizeAndSetContent(t, this.getTitle(), $_), this._sanitizeAndSetContent(t, this._getContent(), L_);
  }
  // Private
  _getContent() {
    return this._resolvePossibleFunction(this._config.content);
  }
  _getBasicClassPrefix() {
    return O_;
  }
  // Static
  static jQueryInterface(t) {
    return this.each(function() {
      const e = nh.getOrCreateInstance(this, t);
      if (typeof t == "string") {
        if (typeof e[t] > "u")
          throw new TypeError(`No method named "${t}"`);
        e[t]();
      }
    });
  }
}
const Xn = "scrollspy", N_ = "te.scrollspy", yr = `.${N_}`, xa = {
  offset: 10,
  method: "auto",
  target: ""
}, M_ = {
  offset: "number",
  method: "string",
  target: "(string|element)"
}, R_ = {
  active: "!text-primary dark:!text-primary-400 font-semibold border-l-[0.125rem] border-solid border-primary dark:border-primary-400"
}, P_ = {
  active: "string"
}, B_ = `activate${yr}`, H_ = `scroll${yr}`, Gn = "data-te-nav-link-active", oh = "[data-te-dropdown-item-ref]", V_ = "[data-te-nav-list-ref]", Uo = "[data-te-nav-link-ref]", W_ = "[data-te-nav-item-ref]", rh = "[data-te-list-group-item-ref]", qn = `${Uo}, ${rh}, ${oh}`, F_ = "[data-te-dropdown-ref]", Y_ = "[data-te-dropdown-toggle-ref]", j_ = "maxOffset", Oa = "position";
class ah extends ft {
  constructor(t, e, i) {
    super(t), this._scrollElement = this._element.tagName === "BODY" ? window : this._element, this._config = this._getConfig(e), this._classes = this._getClasses(i), this._offsets = [], this._targets = [], this._activeTarget = null, this._scrollHeight = 0, c.on(this._scrollElement, H_, () => this._process()), this.refresh(), this._process();
  }
  // Getters
  static get Default() {
    return xa;
  }
  static get NAME() {
    return Xn;
  }
  // Public
  refresh() {
    const t = this._scrollElement === this._scrollElement.window ? j_ : Oa, e = this._config.method === "auto" ? t : this._config.method, i = e === Oa ? this._getScrollTop() : 0;
    this._offsets = [], this._targets = [], this._scrollHeight = this._getScrollHeight(), d.find(
      qn,
      this._config.target
    ).map((o) => {
      const r = lr(o), a = r ? d.findOne(r) : null;
      if (a) {
        const l = a.getBoundingClientRect();
        if (l.width || l.height)
          return [
            h[e](a).top + i,
            r
          ];
      }
      return null;
    }).filter((o) => o).sort((o, r) => o[0] - r[0]).forEach((o) => {
      this._offsets.push(o[0]), this._targets.push(o[1]);
    });
  }
  dispose() {
    c.off(this._scrollElement, yr), super.dispose();
  }
  // Private
  _getConfig(t) {
    return t = {
      ...xa,
      ...h.getDataAttributes(this._element),
      ...typeof t == "object" && t ? t : {}
    }, t.target = ee(t.target) || document.documentElement, I(Xn, t, M_), t;
  }
  _getClasses(t) {
    const e = h.getDataClassAttributes(this._element);
    return t = {
      ...R_,
      ...e,
      ...t
    }, I(Xn, t, P_), t;
  }
  _getScrollTop() {
    return this._scrollElement === window ? this._scrollElement.pageYOffset : this._scrollElement.scrollTop;
  }
  _getScrollHeight() {
    return this._scrollElement.scrollHeight || Math.max(
      document.body.scrollHeight,
      document.documentElement.scrollHeight
    );
  }
  _getOffsetHeight() {
    return this._scrollElement === window ? window.innerHeight : this._scrollElement.getBoundingClientRect().height;
  }
  _process() {
    const t = this._getScrollTop() + this._config.offset, e = this._getScrollHeight(), i = this._config.offset + e - this._getOffsetHeight();
    if (this._scrollHeight !== e && this.refresh(), t >= i) {
      const n = this._targets[this._targets.length - 1];
      this._activeTarget !== n && this._activate(n);
      return;
    }
    if (this._activeTarget && t < this._offsets[0] && this._offsets[0] > 0) {
      this._activeTarget = null, this._clear();
      return;
    }
    for (let n = this._offsets.length; n--; )
      this._activeTarget !== this._targets[n] && t >= this._offsets[n] && (typeof this._offsets[n + 1] > "u" || t < this._offsets[n + 1]) && this._activate(this._targets[n]);
  }
  _activate(t) {
    this._activeTarget = t, this._clear();
    const e = qn.split(",").map(
      (n) => `${n}[data-te-target="${t}"],${n}[href="${t}"]`
    ), i = d.findOne(e.join(","), this._config.target);
    i.classList.add(...this._classes.active.split(" ")), i.setAttribute(Gn, ""), i.getAttribute(oh) ? d.findOne(
      Y_,
      i.closest(F_)
    ).classList.add(...this._classes.active.split(" ")) : d.parents(i, V_).forEach(
      (n) => {
        d.prev(
          n,
          `${Uo}, ${rh}`
        ).forEach((o) => {
          o.classList.add(...this._classes.active.split(" ")), o.setAttribute(Gn, "");
        }), d.prev(n, W_).forEach(
          (o) => {
            d.children(o, Uo).forEach(
              (r) => r.classList.add(...this._classes.active.split(" "))
            );
          }
        );
      }
    ), c.trigger(this._scrollElement, B_, {
      relatedTarget: t
    });
  }
  _clear() {
    d.find(qn, this._config.target).filter(
      (t) => t.classList.contains(...this._classes.active.split(" "))
    ).forEach((t) => {
      t.classList.remove(...this._classes.active.split(" ")), t.removeAttribute(Gn);
    });
  }
  // Static
  static jQueryInterface(t) {
    return this.each(function() {
      const e = ah.getOrCreateInstance(this, t);
      if (typeof t == "string") {
        if (typeof e[t] > "u")
          throw new TypeError(`No method named "${t}"`);
        e[t]();
      }
    });
  }
}
const Sa = "tab", K_ = "te.tab", Tn = `.${K_}`, z_ = `hide${Tn}`, U_ = `hidden${Tn}`, X_ = `show${Tn}`, G_ = `shown${Tn}`, q_ = "data-te-dropdown-menu-ref", He = "data-te-tab-active", Ks = "data-te-nav-active", Z_ = "[data-te-dropdown-ref]", Q_ = "[data-te-nav-ref]", Ia = `[${He}]`, J_ = `[${Ks}]`, Da = ":scope > li > .active", tf = "[data-te-dropdown-toggle-ref]", ef = ":scope > [data-te-dropdown-menu-ref] [data-te-dropdown-show]", sf = {
  show: "opacity-100",
  hide: "opacity-0"
}, nf = {
  show: "string",
  hide: "string"
};
class lh extends ft {
  constructor(t, e) {
    super(t), this._classes = this._getClasses(e);
  }
  // Getters
  static get NAME() {
    return Sa;
  }
  // Public
  show() {
    if (this._element.parentNode && this._element.parentNode.nodeType === Node.ELEMENT_NODE && this._element.getAttribute(Ks) === "")
      return;
    let t;
    const e = te(this._element), i = this._element.closest(Q_), n = d.findOne(
      J_,
      i
    );
    if (i) {
      const l = i.nodeName === "UL" || i.nodeName === "OL" ? Da : Ia;
      t = d.find(l, i), t = t[t.length - 1];
    }
    const o = t ? c.trigger(t, z_, {
      relatedTarget: this._element
    }) : null;
    if (c.trigger(this._element, X_, {
      relatedTarget: t
    }).defaultPrevented || o !== null && o.defaultPrevented)
      return;
    this._activate(
      this._element,
      i,
      null,
      n,
      this._element
    );
    const a = () => {
      c.trigger(t, U_, {
        relatedTarget: this._element
      }), c.trigger(this._element, G_, {
        relatedTarget: t
      });
    };
    e ? this._activate(
      e,
      e.parentNode,
      a,
      n,
      this._element
    ) : a();
  }
  // Private
  _getClasses(t) {
    const e = h.getDataClassAttributes(this._element);
    return t = {
      ...sf,
      ...e,
      ...t
    }, I(Sa, t, nf), t;
  }
  _activate(t, e, i, n, o) {
    const a = (e && (e.nodeName === "UL" || e.nodeName === "OL") ? d.find(Da, e) : d.children(e, Ia))[0], l = i && a && a.hasAttribute(He), p = () => this._transitionComplete(
      t,
      a,
      i,
      n,
      o
    );
    a && l ? (h.removeClass(a, this._classes.show), h.addClass(a, this._classes.hide), this._queueCallback(p, t, !0)) : p();
  }
  _transitionComplete(t, e, i, n, o) {
    if (e && n) {
      e.removeAttribute(He), n.removeAttribute(Ks);
      const a = d.findOne(
        ef,
        e.parentNode
      );
      a && a.removeAttribute(He), e.getAttribute("role") === "tab" && e.setAttribute("aria-selected", !1);
    }
    t.setAttribute(He, ""), o.setAttribute(Ks, ""), t.getAttribute("role") === "tab" && t.setAttribute("aria-selected", !0), si(t), t.classList.contains(this._classes.hide) && (h.removeClass(t, this._classes.hide), h.addClass(t, this._classes.show));
    let r = t.parentNode;
    if (r && r.nodeName === "LI" && (r = r.parentNode), r && r.hasAttribute(q_)) {
      const a = t.closest(Z_);
      a && d.find(tf, a).forEach(
        (l) => l.setAttribute(He, "")
      ), t.setAttribute("aria-expanded", !0);
    }
    i && i();
  }
  // Static
  static jQueryInterface(t) {
    return this.each(function() {
      const e = lh.getOrCreateInstance(this);
      if (typeof t == "string") {
        if (typeof e[t] > "u")
          throw new TypeError(`No method named "${t}"`);
        e[t]();
      }
    });
  }
}
const Zn = "toast", of = "te.toast", ne = `.${of}`, rf = `mouseover${ne}`, af = `mouseout${ne}`, lf = `focusin${ne}`, cf = `focusout${ne}`, hf = `hide${ne}`, df = `hidden${ne}`, uf = `show${ne}`, pf = `shown${ne}`, $a = "data-te-toast-hide", Qn = "data-te-toast-show", as = "data-te-toast-showing", _f = {
  animation: "boolean",
  autohide: "boolean",
  delay: "number"
}, La = {
  animation: !0,
  autohide: !0,
  delay: 5e3
}, ff = {
  fadeIn: "animate-[fade-in_0.3s_both] p-[auto] motion-reduce:transition-none motion-reduce:animate-none",
  fadeOut: "animate-[fade-out_0.3s_both] p-[auto] motion-reduce:transition-none motion-reduce:animate-none"
}, mf = {
  fadeIn: "string",
  fadeOut: "string"
};
class Xo extends ft {
  constructor(t, e, i) {
    super(t), this._config = this._getConfig(e), this._classes = this._getClasses(i), this._timeout = null, this._hasMouseInteraction = !1, this._hasKeyboardInteraction = !1, this._setListeners(), this._didInit = !1, this._init();
  }
  // Getters
  static get DefaultType() {
    return _f;
  }
  static get Default() {
    return La;
  }
  static get NAME() {
    return Zn;
  }
  // Public
  show() {
    if (c.trigger(this._element, uf).defaultPrevented)
      return;
    this._clearTimeout(), this._config.animation && (h.removeClass(this._element, this._classes.fadeOut), h.addClass(this._element, this._classes.fadeIn));
    const e = () => {
      this._element.removeAttribute(as), c.trigger(this._element, pf), this._maybeScheduleHide();
    };
    this._element.removeAttribute($a), si(this._element), this._element.setAttribute(Qn, ""), this._element.setAttribute(as, ""), this._queueCallback(e, this._element, this._config.animation);
  }
  hide() {
    if (!this._element || this._element.dataset.teToastShow === void 0 || c.trigger(this._element, hf).defaultPrevented)
      return;
    const e = () => {
      let i = 0;
      this._config.animation && (i = 300, h.removeClass(this._element, this._classes.fadeIn), h.addClass(this._element, this._classes.fadeOut)), setTimeout(() => {
        this._element.setAttribute($a, ""), this._element.removeAttribute(as), this._element.removeAttribute(Qn), c.trigger(this._element, df);
      }, i);
    };
    this._element.setAttribute(as, ""), this._queueCallback(e, this._element, this._config.animation);
  }
  dispose() {
    this._clearTimeout(), this._element.dataset.teToastShow !== void 0 && this._element.removeAttribute(Qn), super.dispose();
  }
  // Private
  _init() {
    this._didInit || (vn(Xo), this._didInit = !0);
  }
  _getConfig(t) {
    return t = {
      ...La,
      ...h.getDataAttributes(this._element),
      ...typeof t == "object" && t ? t : {}
    }, I(Zn, t, this.constructor.DefaultType), t;
  }
  _getClasses(t) {
    const e = h.getDataClassAttributes(this._element);
    return t = {
      ...ff,
      ...e,
      ...t
    }, I(Zn, t, mf), t;
  }
  _maybeScheduleHide() {
    this._config.autohide && (this._hasMouseInteraction || this._hasKeyboardInteraction || (this._timeout = setTimeout(() => {
      this.hide();
    }, this._config.delay)));
  }
  _onInteraction(t, e) {
    switch (t.type) {
      case "mouseover":
      case "mouseout":
        this._hasMouseInteraction = e;
        break;
      case "focusin":
      case "focusout":
        this._hasKeyboardInteraction = e;
        break;
    }
    if (e) {
      this._clearTimeout();
      return;
    }
    const i = t.relatedTarget;
    this._element === i || this._element.contains(i) || this._maybeScheduleHide();
  }
  _setListeners() {
    c.on(
      this._element,
      rf,
      (t) => this._onInteraction(t, !0)
    ), c.on(
      this._element,
      af,
      (t) => this._onInteraction(t, !1)
    ), c.on(
      this._element,
      lf,
      (t) => this._onInteraction(t, !0)
    ), c.on(
      this._element,
      cf,
      (t) => this._onInteraction(t, !1)
    );
  }
  _clearTimeout() {
    clearTimeout(this._timeout), this._timeout = null;
  }
  // Static
  static jQueryInterface(t) {
    return this.each(function() {
      const e = Xo.getOrCreateInstance(this, t);
      if (typeof t == "string") {
        if (typeof e[t] > "u")
          throw new TypeError(`No method named "${t}"`);
        e[t](this);
      }
    });
  }
}
(() => {
  var s = { 454: (i, n, o) => {
    o.d(n, { Z: () => l });
    var r = o(645), a = o.n(r)()(function(p) {
      return p[1];
    });
    a.push([i.id, "INPUT:-webkit-autofill,SELECT:-webkit-autofill,TEXTAREA:-webkit-autofill{animation-name:onautofillstart}INPUT:not(:-webkit-autofill),SELECT:not(:-webkit-autofill),TEXTAREA:not(:-webkit-autofill){animation-name:onautofillcancel}@keyframes onautofillstart{}@keyframes onautofillcancel{}", ""]);
    const l = a;
  }, 645: (i) => {
    i.exports = function(n) {
      var o = [];
      return o.toString = function() {
        return this.map(function(r) {
          var a = n(r);
          return r[2] ? "@media ".concat(r[2], " {").concat(a, "}") : a;
        }).join("");
      }, o.i = function(r, a, l) {
        typeof r == "string" && (r = [[null, r, ""]]);
        var p = {};
        if (l)
          for (var u = 0; u < this.length; u++) {
            var _ = this[u][0];
            _ != null && (p[_] = !0);
          }
        for (var f = 0; f < r.length; f++) {
          var g = [].concat(r[f]);
          l && p[g[0]] || (a && (g[2] ? g[2] = "".concat(a, " and ").concat(g[2]) : g[2] = a), o.push(g));
        }
      }, o;
    };
  }, 810: () => {
    (function() {
      if (typeof window < "u")
        try {
          var i = new window.CustomEvent("test", { cancelable: !0 });
          if (i.preventDefault(), i.defaultPrevented !== !0)
            throw new Error("Could not prevent default");
        } catch {
          var n = function(r, a) {
            var l, p;
            return (a = a || {}).bubbles = !!a.bubbles, a.cancelable = !!a.cancelable, (l = document.createEvent("CustomEvent")).initCustomEvent(r, a.bubbles, a.cancelable, a.detail), p = l.preventDefault, l.preventDefault = function() {
              p.call(this);
              try {
                Object.defineProperty(this, "defaultPrevented", { get: function() {
                  return !0;
                } });
              } catch {
                this.defaultPrevented = !0;
              }
            }, l;
          };
          n.prototype = window.Event.prototype, window.CustomEvent = n;
        }
    })();
  }, 379: (i, n, o) => {
    var r, a = function() {
      var C = {};
      return function(E) {
        if (C[E] === void 0) {
          var w = document.querySelector(E);
          if (window.HTMLIFrameElement && w instanceof window.HTMLIFrameElement)
            try {
              w = w.contentDocument.head;
            } catch {
              w = null;
            }
          C[E] = w;
        }
        return C[E];
      };
    }(), l = [];
    function p(C) {
      for (var E = -1, w = 0; w < l.length; w++)
        if (l[w].identifier === C) {
          E = w;
          break;
        }
      return E;
    }
    function u(C, E) {
      for (var w = {}, k = [], D = 0; D < C.length; D++) {
        var O = C[D], x = E.base ? O[0] + E.base : O[0], L = w[x] || 0, S = "".concat(x, " ").concat(L);
        w[x] = L + 1;
        var N = p(S), P = { css: O[1], media: O[2], sourceMap: O[3] };
        N !== -1 ? (l[N].references++, l[N].updater(P)) : l.push({ identifier: S, updater: y(P, E), references: 1 }), k.push(S);
      }
      return k;
    }
    function _(C) {
      var E = document.createElement("style"), w = C.attributes || {};
      if (w.nonce === void 0) {
        var k = o.nc;
        k && (w.nonce = k);
      }
      if (Object.keys(w).forEach(function(O) {
        E.setAttribute(O, w[O]);
      }), typeof C.insert == "function")
        C.insert(E);
      else {
        var D = a(C.insert || "head");
        if (!D)
          throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
        D.appendChild(E);
      }
      return E;
    }
    var f, g = (f = [], function(C, E) {
      return f[C] = E, f.filter(Boolean).join(`
`);
    });
    function m(C, E, w, k) {
      var D = w ? "" : k.media ? "@media ".concat(k.media, " {").concat(k.css, "}") : k.css;
      if (C.styleSheet)
        C.styleSheet.cssText = g(E, D);
      else {
        var O = document.createTextNode(D), x = C.childNodes;
        x[E] && C.removeChild(x[E]), x.length ? C.insertBefore(O, x[E]) : C.appendChild(O);
      }
    }
    function b(C, E, w) {
      var k = w.css, D = w.media, O = w.sourceMap;
      if (D ? C.setAttribute("media", D) : C.removeAttribute("media"), O && typeof btoa < "u" && (k += `
/*# sourceMappingURL=data:application/json;base64,`.concat(btoa(unescape(encodeURIComponent(JSON.stringify(O)))), " */")), C.styleSheet)
        C.styleSheet.cssText = k;
      else {
        for (; C.firstChild; )
          C.removeChild(C.firstChild);
        C.appendChild(document.createTextNode(k));
      }
    }
    var v = null, T = 0;
    function y(C, E) {
      var w, k, D;
      if (E.singleton) {
        var O = T++;
        w = v || (v = _(E)), k = m.bind(null, w, O, !1), D = m.bind(null, w, O, !0);
      } else
        w = _(E), k = b.bind(null, w, E), D = function() {
          (function(x) {
            if (x.parentNode === null)
              return !1;
            x.parentNode.removeChild(x);
          })(w);
        };
      return k(C), function(x) {
        if (x) {
          if (x.css === C.css && x.media === C.media && x.sourceMap === C.sourceMap)
            return;
          k(C = x);
        } else
          D();
      };
    }
    i.exports = function(C, E) {
      (E = E || {}).singleton || typeof E.singleton == "boolean" || (E.singleton = (r === void 0 && (r = !!(window && document && document.all && !window.atob)), r));
      var w = u(C = C || [], E);
      return function(k) {
        if (k = k || [], Object.prototype.toString.call(k) === "[object Array]") {
          for (var D = 0; D < w.length; D++) {
            var O = p(w[D]);
            l[O].references--;
          }
          for (var x = u(k, E), L = 0; L < w.length; L++) {
            var S = p(w[L]);
            l[S].references === 0 && (l[S].updater(), l.splice(S, 1));
          }
          w = x;
        }
      };
    };
  } }, t = {};
  function e(i) {
    var n = t[i];
    if (n !== void 0)
      return n.exports;
    var o = t[i] = { id: i, exports: {} };
    return s[i](o, o.exports, e), o.exports;
  }
  e.n = (i) => {
    var n = i && i.__esModule ? () => i.default : () => i;
    return e.d(n, { a: n }), n;
  }, e.d = (i, n) => {
    for (var o in n)
      e.o(n, o) && !e.o(i, o) && Object.defineProperty(i, o, { enumerable: !0, get: n[o] });
  }, e.o = (i, n) => Object.prototype.hasOwnProperty.call(i, n), (() => {
    var i = e(379), n = e.n(i), o = e(454);
    function r(l) {
      if (!l.hasAttribute("autocompleted")) {
        l.setAttribute("autocompleted", "");
        var p = new window.CustomEvent("onautocomplete", { bubbles: !0, cancelable: !0, detail: null });
        l.dispatchEvent(p) || (l.value = "");
      }
    }
    function a(l) {
      l.hasAttribute("autocompleted") && (l.removeAttribute("autocompleted"), l.dispatchEvent(new window.CustomEvent("onautocomplete", { bubbles: !0, cancelable: !1, detail: null })));
    }
    n()(o.Z, { insert: "head", singleton: !1 }), o.Z.locals, e(810), document.addEventListener("animationstart", function(l) {
      l.animationName === "onautofillstart" ? r(l.target) : a(l.target);
    }, !0), document.addEventListener("input", function(l) {
      l.inputType !== "insertReplacementText" && "data" in l ? a(l.target) : r(l.target);
    }, !0);
  })();
})();
const Jn = "input", ls = "te.input", ch = "data-te-input-wrapper-init", hh = "data-te-input-notch-ref", dh = "data-te-input-notch-leading-ref", uh = "data-te-input-notch-middle-ref", gf = "data-te-input-notch-trailing-ref", bf = "data-te-input-helper-ref", vf = "data-te-input-placeholder-active", Yt = "data-te-input-state-active", Na = "data-te-input-focused", Ma = "data-te-input-form-counter", cs = `[${ch}] input`, hs = `[${ch}] textarea`, Ie = `[${hh}]`, Ra = `[${dh}]`, Pa = `[${uh}]`, Tf = `[${bf}]`, Ef = {
  inputFormWhite: !1
}, Cf = {
  inputFormWhite: "(boolean)"
}, ph = {
  notch: "group flex absolute left-0 top-0 w-full max-w-full h-full text-left pointer-events-none",
  notchLeading: "pointer-events-none border border-solid box-border bg-transparent transition-all duration-200 ease-linear motion-reduce:transition-none left-0 top-0 h-full w-2 border-r-0 rounded-l-[0.25rem] group-data-[te-input-focused]:border-r-0 group-data-[te-input-state-active]:border-r-0",
  notchLeadingNormal: "border-neutral-300 dark:border-neutral-600 group-data-[te-input-focused]:shadow-[-1px_0_0_#3b71ca,_0_1px_0_0_#3b71ca,_0_-1px_0_0_#3b71ca] group-data-[te-input-focused]:border-primary",
  notchLeadingWhite: "border-neutral-200 group-data-[te-input-focused]:shadow-[-1px_0_0_#ffffff,_0_1px_0_0_#ffffff,_0_-1px_0_0_#ffffff] group-data-[te-input-focused]:border-white",
  notchMiddle: "pointer-events-none border border-solid box-border bg-transparent transition-all duration-200 ease-linear motion-reduce:transition-none grow-0 shrink-0 basis-auto w-auto max-w-[calc(100%-1rem)] h-full border-r-0 border-l-0 group-data-[te-input-focused]:border-x-0 group-data-[te-input-state-active]:border-x-0 group-data-[te-input-focused]:border-t group-data-[te-input-state-active]:border-t group-data-[te-input-focused]:border-solid group-data-[te-input-state-active]:border-solid group-data-[te-input-focused]:border-t-transparent group-data-[te-input-state-active]:border-t-transparent",
  notchMiddleNormal: "border-neutral-300 dark:border-neutral-600 group-data-[te-input-focused]:shadow-[0_1px_0_0_#3b71ca] group-data-[te-input-focused]:border-primary",
  notchMiddleWhite: "border-neutral-200 group-data-[te-input-focused]:shadow-[0_1px_0_0_#ffffff] group-data-[te-input-focused]:border-white",
  notchTrailing: "pointer-events-none border border-solid box-border bg-transparent transition-all duration-200 ease-linear motion-reduce:transition-none grow h-full border-l-0 rounded-r-[0.25rem] group-data-[te-input-focused]:border-l-0 group-data-[te-input-state-active]:border-l-0",
  notchTrailingNormal: "border-neutral-300 dark:border-neutral-600 group-data-[te-input-focused]:shadow-[1px_0_0_#3b71ca,_0_-1px_0_0_#3b71ca,_0_1px_0_0_#3b71ca] group-data-[te-input-focused]:border-primary",
  notchTrailingWhite: "border-neutral-200 group-data-[te-input-focused]:shadow-[1px_0_0_#ffffff,_0_-1px_0_0_#ffffff,_0_1px_0_0_#ffffff] group-data-[te-input-focused]:border-white",
  counter: "text-right leading-[1.6]"
}, Af = {
  notch: "string",
  notchLeading: "string",
  notchLeadingNormal: "string",
  notchLeadingWhite: "string",
  notchMiddle: "string",
  notchMiddleNormal: "string",
  notchMiddleWhite: "string",
  notchTrailing: "string",
  notchTrailingNormal: "string",
  notchTrailingWhite: "string",
  counter: "string"
};
class V {
  constructor(t, e, i) {
    this._config = this._getConfig(e, t), this._element = t, this._classes = this._getClasses(i), this._label = null, this._labelWidth = 0, this._labelMarginLeft = 0, this._notchLeading = null, this._notchMiddle = null, this._notchTrailing = null, this._initiated = !1, this._helper = null, this._counter = !1, this._counterElement = null, this._maxLength = 0, this._leadingIcon = null, this._element && (A.setData(t, ls, this), this.init());
  }
  // Getters
  static get NAME() {
    return Jn;
  }
  get input() {
    return d.findOne("input", this._element) || d.findOne("textarea", this._element);
  }
  // Public
  init() {
    this._initiated || (this._getLabelData(), this._applyDivs(), this._applyNotch(), this._activate(), this._getHelper(), this._getCounter(), this._getEvents(), this._initiated = !0);
  }
  update() {
    this._getLabelData(), this._getNotchData(), this._applyNotch(), this._activate(), this._getHelper(), this._getCounter();
  }
  forceActive() {
    this.input.setAttribute(Yt, ""), d.findOne(Ie, this.input.parentNode).setAttribute(
      Yt,
      ""
    );
  }
  forceInactive() {
    this.input.removeAttribute(Yt), d.findOne(
      Ie,
      this.input.parentNode
    ).removeAttribute(Yt);
  }
  dispose() {
    this._removeBorder(), A.removeData(this._element, ls), this._element = null;
  }
  // Private
  _getConfig(t, e) {
    return t = {
      ...Ef,
      ...h.getDataAttributes(e),
      ...typeof t == "object" ? t : {}
    }, I(Jn, t, Cf), t;
  }
  _getClasses(t) {
    const e = h.getDataClassAttributes(this._element);
    return t = {
      ...ph,
      ...e,
      ...t
    }, I(Jn, t, Af), t;
  }
  _getLabelData() {
    this._label = d.findOne("label", this._element), this._label === null ? this._showPlaceholder() : (this._getLabelWidth(), this._getLabelPositionInInputGroup(), this._toggleDefaultDatePlaceholder());
  }
  _getHelper() {
    this._helper = d.findOne(Tf, this._element);
  }
  _getCounter() {
    this._counter = h.getDataAttribute(
      this.input,
      "inputShowcounter"
    ), this._counter && (this._maxLength = this.input.maxLength, this._showCounter());
  }
  _getEvents() {
    c.on(
      this._element,
      "focus",
      "input",
      V.activate(new V())
    ), c.on(
      this._element,
      "input",
      "input",
      V.activate(new V())
    ), c.on(
      this._element,
      "blur",
      "input",
      V.deactivate(new V())
    ), c.on(
      this._element,
      "focus",
      "textarea",
      V.activate(new V())
    ), c.on(
      this._element,
      "input",
      "textarea",
      V.activate(new V())
    ), c.on(
      this._element,
      "blur",
      "textarea",
      V.deactivate(new V())
    ), c.on(window, "shown.te.modal", (t) => {
      d.find(cs, t.target).forEach(
        (e) => {
          const i = V.getInstance(e.parentNode);
          i && i.update();
        }
      ), d.find(hs, t.target).forEach(
        (e) => {
          const i = V.getInstance(e.parentNode);
          i && i.update();
        }
      );
    }), c.on(window, "shown.te.dropdown", (t) => {
      const e = t.target.parentNode.querySelector(
        "[data-te-dropdown-menu-ref]"
      );
      e && (d.find(cs, e).forEach(
        (i) => {
          const n = V.getInstance(i.parentNode);
          n && n.update();
        }
      ), d.find(hs, e).forEach(
        (i) => {
          const n = V.getInstance(i.parentNode);
          n && n.update();
        }
      ));
    }), c.on(window, "shown.te.tab", (t) => {
      let e;
      t.target.href ? e = t.target.href.split("#")[1] : e = h.getDataAttribute(t.target, "target").split(
        "#"
      )[1];
      const i = d.findOne(`#${e}`);
      d.find(cs, i).forEach((n) => {
        const o = V.getInstance(n.parentNode);
        o && o.update();
      }), d.find(hs, i).forEach(
        (n) => {
          const o = V.getInstance(n.parentNode);
          o && o.update();
        }
      );
    }), c.on(window, "reset", (t) => {
      d.find(cs, t.target).forEach(
        (e) => {
          const i = V.getInstance(e.parentNode);
          i && i.forceInactive();
        }
      ), d.find(hs, t.target).forEach(
        (e) => {
          const i = V.getInstance(e.parentNode);
          i && i.forceInactive();
        }
      );
    }), c.on(window, "onautocomplete", (t) => {
      const e = V.getInstance(t.target.parentNode);
      !e || !t.cancelable || e.forceActive();
    });
  }
  _showCounter() {
    if (d.find(
      `[${Ma}]`,
      this._element
    ).length > 0)
      return;
    this._counterElement = document.createElement("div"), h.addClass(this._counterElement, this._classes.counter), this._counterElement.setAttribute(Ma, "");
    const e = this.input.value.length;
    this._counterElement.innerHTML = `${e} / ${this._maxLength}`, this._helper.appendChild(this._counterElement), this._bindCounter();
  }
  _bindCounter() {
    c.on(this.input, "input", () => {
      const t = this.input.value.length;
      this._counterElement.innerHTML = `${t} / ${this._maxLength}`;
    });
  }
  _toggleDefaultDatePlaceholder(t = this.input) {
    if (!(t.getAttribute("type") === "date"))
      return;
    !(document.activeElement === t) && !t.value ? t.style.opacity = 0 : t.style.opacity = 1;
  }
  _showPlaceholder() {
    this.input.setAttribute(vf, "");
  }
  _getNotchData() {
    this._notchMiddle = d.findOne(
      Pa,
      this._element
    ), this._notchLeading = d.findOne(
      Ra,
      this._element
    );
  }
  _getLabelWidth() {
    this._labelWidth = this._label.clientWidth * 0.8 + 8;
  }
  _getLabelPositionInInputGroup() {
    if (this._labelMarginLeft = 0, !this._element.hasAttribute("data-te-input-group-ref"))
      return;
    const t = this.input, e = d.prev(
      t,
      "[data-te-input-group-text-ref]"
    )[0];
    e === void 0 ? this._labelMarginLeft = 0 : this._labelMarginLeft = e.offsetWidth - 1;
  }
  _applyDivs() {
    const t = this._config.inputFormWhite ? this._classes.notchLeadingWhite : this._classes.notchLeadingNormal, e = this._config.inputFormWhite ? this._classes.notchMiddleWhite : this._classes.notchMiddleNormal, i = this._config.inputFormWhite ? this._classes.notchTrailingWhite : this._classes.notchTrailingNormal, n = d.find(Ie, this._element), o = $("div");
    h.addClass(o, this._classes.notch), o.setAttribute(hh, ""), this._notchLeading = $("div"), h.addClass(
      this._notchLeading,
      `${this._classes.notchLeading} ${t}`
    ), this._notchLeading.setAttribute(dh, ""), this._notchMiddle = $("div"), h.addClass(
      this._notchMiddle,
      `${this._classes.notchMiddle} ${e}`
    ), this._notchMiddle.setAttribute(uh, ""), this._notchTrailing = $("div"), h.addClass(
      this._notchTrailing,
      `${this._classes.notchTrailing} ${i}`
    ), this._notchTrailing.setAttribute(gf, ""), !(n.length >= 1) && (o.append(this._notchLeading), o.append(this._notchMiddle), o.append(this._notchTrailing), this._element.append(o));
  }
  _applyNotch() {
    this._notchMiddle.style.width = `${this._labelWidth}px`, this._notchLeading.style.width = `${this._labelMarginLeft + 9}px`, this._label !== null && (this._label.style.marginLeft = `${this._labelMarginLeft}px`);
  }
  _removeBorder() {
    const t = d.findOne(Ie, this._element);
    t && t.remove();
  }
  _activate(t) {
    gc(() => {
      this._getElements(t);
      const e = t ? t.target : this.input, i = d.findOne(
        Ie,
        this._element
      );
      t && t.type === "focus" && i && i.setAttribute(Na, ""), e.value !== "" && (e.setAttribute(Yt, ""), i && i.setAttribute(Yt, "")), this._toggleDefaultDatePlaceholder(e);
    });
  }
  _getElements(t) {
    if (t && (this._element = t.target.parentNode, this._label = d.findOne("label", this._element)), t && this._label) {
      const e = this._labelWidth;
      this._getLabelData(), e !== this._labelWidth && (this._notchMiddle = d.findOne(
        Pa,
        t.target.parentNode
      ), this._notchLeading = d.findOne(
        Ra,
        t.target.parentNode
      ), this._applyNotch());
    }
  }
  _deactivate(t) {
    const e = t ? t.target : this.input, i = d.findOne(
      Ie,
      e.parentNode
    );
    i.removeAttribute(Na), e.value === "" && (e.removeAttribute(Yt), i.removeAttribute(Yt)), this._toggleDefaultDatePlaceholder(e);
  }
  static activate(t) {
    return function(e) {
      t._activate(e);
    };
  }
  static deactivate(t) {
    return function(e) {
      t._deactivate(e);
    };
  }
  static jQueryInterface(t, e) {
    return this.each(function() {
      let i = A.getData(this, ls);
      const n = typeof t == "object" && t;
      if (!(!i && /dispose/.test(t)) && (i || (i = new V(this, n)), typeof t == "string")) {
        if (typeof i[t] > "u")
          throw new TypeError(`No method named "${t}"`);
        i[t](e);
      }
    });
  }
  static getInstance(t) {
    return A.getData(t, ls);
  }
  static getOrCreateInstance(t, e = {}) {
    return this.getInstance(t) || new this(t, typeof e == "object" ? e : null);
  }
}
const Ba = "animation", to = "te.animation", yf = {
  animation: "string",
  animationStart: "string",
  animationShowOnLoad: "boolean",
  onStart: "(null|function)",
  onEnd: "(null|function)",
  onHide: "(null|function)",
  onShow: "(null|function)",
  animationOnScroll: "(string)",
  animationWindowHeight: "number",
  animationOffset: "(number|string)",
  animationDelay: "(number|string)",
  animationReverse: "boolean",
  animationInterval: "(number|string)",
  animationRepeat: "(number|boolean)",
  animationReset: "boolean"
}, wf = {
  animation: "fade",
  animationStart: "onClick",
  animationShowOnLoad: !0,
  onStart: null,
  onEnd: null,
  onHide: null,
  onShow: null,
  animationOnScroll: "once",
  animationWindowHeight: 0,
  animationOffset: 0,
  animationDelay: 0,
  animationReverse: !1,
  animationInterval: 0,
  animationRepeat: !1,
  animationReset: !1
};
class wr {
  constructor(t, e) {
    this._element = t, this._animateElement = this._getAnimateElement(), this._isFirstScroll = !0, this._repeatAnimateOnScroll = !0, this._options = this._getConfig(e), this._element && (A.setData(t, to, this), this._init());
  }
  // Getters
  static get NAME() {
    return Ba;
  }
  // Public
  init() {
    this._init();
  }
  startAnimation() {
    this._startAnimation();
  }
  stopAnimation() {
    this._clearAnimationClass();
  }
  changeAnimationType(t) {
    this._options.animation = t;
  }
  dispose() {
    c.off(this._element, "mousedown"), c.off(this._animateElement, "animationend"), c.off(window, "scroll"), c.off(this._element, "mouseover"), A.removeData(this._element, to), this._element = null, this._animateElement = null, this._isFirstScroll = null, this._repeatAnimateOnScroll = null, this._options = null;
  }
  // Private
  _init() {
    switch (this._options.animationStart) {
      case "onHover":
        this._bindHoverEvents();
        break;
      case "onLoad":
        this._startAnimation();
        break;
      case "onScroll":
        this._bindScrollEvents();
        break;
      case "onClick":
        this._bindClickEvents();
        break;
    }
    this._bindTriggerOnEndCallback(), this._options.animationReset && this._bindResetAnimationAfterFinish();
  }
  _getAnimateElement() {
    const t = h.getDataAttribute(
      this._element,
      "animation-target"
    );
    return t ? d.find(t)[0] : this._element;
  }
  _getConfig(t) {
    const e = h.getDataAttributes(this._animateElement);
    return t = {
      ...wf,
      ...e,
      ...t
    }, I(Ba, t, yf), t;
  }
  _animateOnScroll() {
    const t = h.offset(this._animateElement).top, e = this._animateElement.offsetHeight, i = window.innerHeight, n = t + this._options.animationOffset <= i && t + this._options.animationOffset + e >= 0, o = this._animateElement.style.visibility === "visible";
    switch (!0) {
      case (n && this._isFirstScroll):
        this._isFirstScroll = !1, this._startAnimation();
        break;
      case (!n && this._isFirstScroll):
        this._isFirstScroll = !1, this._hideAnimateElement();
        break;
      case (n && !o && this._repeatAnimateOnScroll):
        this._options.animationOnScroll !== "repeat" && (this._repeatAnimateOnScroll = !1), this._callback(this._options.onShow), this._showAnimateElement(), this._startAnimation();
        break;
      case (!n && o && this._repeatAnimateOnScroll):
        this._hideAnimateElement(), this._clearAnimationClass(), this._callback(this._options.onHide);
        break;
    }
  }
  _addAnimatedClass() {
    h.addClass(
      this._animateElement,
      `animate-${this._options.animation}`
    );
  }
  _clearAnimationClass() {
    this._animateElement.classList.remove(`animate-${this._options.animation}`);
  }
  _startAnimation() {
    this._callback(this._options.onStart), this._addAnimatedClass(), this._options.animationRepeat && !this._options.animationInterval && this._setAnimationRepeat(), this._options.animationReverse && this._setAnimationReverse(), this._options.animationDelay && this._setAnimationDelay(), this._options.animationDuration && this._setAnimationDuration(), this._options.animationInterval && this._setAnimationInterval();
  }
  _setAnimationReverse() {
    h.style(this._animateElement, {
      animationIterationCount: this._options.animationRepeat === !0 ? "infinite" : "2",
      animationDirection: "alternate"
    });
  }
  _setAnimationDuration() {
    h.style(this._animateElement, {
      animationDuration: `${this._options.animationDuration}ms`
    });
  }
  _setAnimationDelay() {
    h.style(this._animateElement, {
      animationDelay: `${this._options.animationDelay}ms`
    });
  }
  _setAnimationRepeat() {
    h.style(this._animateElement, {
      animationIterationCount: this._options.animationRepeat === !0 ? "infinite" : this._options.animationRepeat
    });
  }
  _setAnimationInterval() {
    c.on(this._animateElement, "animationend", () => {
      this._clearAnimationClass(), setTimeout(() => {
        this._addAnimatedClass();
      }, this._options.animationInterval);
    });
  }
  _hideAnimateElement() {
    h.style(this._animateElement, { visibility: "hidden" });
  }
  _showAnimateElement() {
    h.style(this._animateElement, { visibility: "visible" });
  }
  _bindResetAnimationAfterFinish() {
    c.on(this._animateElement, "animationend", () => {
      this._clearAnimationClass();
    });
  }
  _bindTriggerOnEndCallback() {
    c.on(this._animateElement, "animationend", () => {
      this._callback(this._options.onEnd);
    });
  }
  _bindScrollEvents() {
    this._options.animationShowOnLoad || this._animateOnScroll(), c.on(window, "scroll", () => {
      this._animateOnScroll();
    });
  }
  _bindClickEvents() {
    c.on(this._element, "mousedown", () => {
      this._startAnimation();
    });
  }
  _bindHoverEvents() {
    c.one(this._element, "mouseover", () => {
      this._startAnimation();
    }), c.one(this._animateElement, "animationend", () => {
      setTimeout(() => {
        this._bindHoverEvents();
      }, 100);
    });
  }
  _callback(t) {
    t instanceof Function && t();
  }
  // Static
  static autoInit(t) {
    t._init();
  }
  static jQueryInterface(t) {
    new wr(this[0], t).init();
  }
  static getInstance(t) {
    return A.getData(t, to);
  }
  static getOrCreateInstance(t, e = {}) {
    return this.getInstance(t) || new this(t, typeof e == "object" ? e : null);
  }
}
const kf = {
  property: "color",
  defaultValue: null,
  inherit: !0
}, De = (s, t) => {
  const { property: e, defaultValue: i, inherit: n } = { ...kf, ...t }, o = document.createElement("div");
  o.classList.add(s), document.body.appendChild(o);
  const a = window.getComputedStyle(o)[e] || i, p = window.getComputedStyle(o.parentElement)[e];
  return document.body.removeChild(o), !n && p && a === p ? i : a || i;
}, eo = "ripple", ds = "te.ripple", xf = "rgba({{color}}, 0.2) 0, rgba({{color}}, 0.3) 40%, rgba({{color}}, 0.4) 50%, rgba({{color}}, 0.5) 60%, rgba({{color}}, 0) 70%", Of = ["[data-te-ripple-init]"], us = [0, 0, 0], Sf = [
  {
    name: "primary",
    gradientColor: De("text-primary", { defaultValue: "#3B71CA", inherit: !1 })
  },
  {
    name: "secondary",
    gradientColor: De("text-secondary", { defaultValue: "#9FA6B2", inherit: !1 })
  },
  {
    name: "success",
    gradientColor: De("text-success", { defaultValue: "#14A44D", inherit: !1 })
  },
  {
    name: "danger",
    gradientColor: De("text-danger", { defaultValue: "#DC4C64", inherit: !1 })
  },
  {
    name: "warning",
    gradientColor: De("text-warning", { defaultValue: "#E4A11B", inherit: !1 })
  },
  {
    name: "info",
    gradientColor: De("text-info", { defaultValue: "#54B4D3", inherit: !1 })
  },
  {
    name: "light",
    gradientColor: "#fbfbfb"
  },
  {
    name: "dark",
    gradientColor: "#262626"
  }
], Ha = 0.5, If = {
  rippleCentered: !1,
  rippleColor: "",
  rippleColorDark: "",
  rippleDuration: "500ms",
  rippleRadius: 0,
  rippleUnbound: !1
}, Df = {
  rippleCentered: "boolean",
  rippleColor: "string",
  rippleColorDark: "string",
  rippleDuration: "string",
  rippleRadius: "number",
  rippleUnbound: "boolean"
}, $f = {
  ripple: "relative overflow-hidden inline-block align-bottom",
  rippleWave: "rounded-[50%] opacity-50 pointer-events-none absolute touch-none scale-0 transition-[transform,_opacity] ease-[cubic-bezier(0,0,0.15,1),_cubic-bezier(0,0,0.15,1)] z-[999]",
  unbound: "overflow-visible"
}, Lf = {
  ripple: "string",
  rippleWave: "string",
  unbound: "string"
};
class ei {
  constructor(t, e, i) {
    this._element = t, this._options = this._getConfig(e), this._classes = this._getClasses(i), this._element && (A.setData(t, ds, this), h.addClass(this._element, this._classes.ripple)), this._clickHandler = this._createRipple.bind(this), this._rippleTimer = null, this._isMinWidthSet = !1, this._initialClasses = null, this.init();
  }
  // Getters
  static get NAME() {
    return eo;
  }
  // Public
  init() {
    this._addClickEvent(this._element);
  }
  dispose() {
    A.removeData(this._element, ds), c.off(this._element, "click", this._clickHandler), this._element = null, this._options = null;
  }
  // Private
  _autoInit(t) {
    Of.forEach((e) => {
      d.closest(t.target, e) && (this._element = d.closest(t.target, e));
    }), this._element.style.minWidth || (h.style(this._element, {
      "min-width": getComputedStyle(this._element).width
    }), this._isMinWidthSet = !0), this._options = this._getConfig(), this._classes = this._getClasses(), this._initialClasses = [...this._element.classList], h.addClass(this._element, this._classes.ripple), this._createRipple(t);
  }
  _addClickEvent(t) {
    c.on(t, "mousedown", this._clickHandler);
  }
  _createRipple(t) {
    this._element.className.indexOf(this._classes.ripple) < 0 && h.addClass(this._element, this._classes.ripple);
    const { layerX: e, layerY: i } = t, n = t.offsetX || e, o = t.offsetY || i, r = this._element.offsetHeight, a = this._element.offsetWidth, l = this._durationToMsNumber(this._options.rippleDuration), p = {
      offsetX: this._options.rippleCentered ? r / 2 : n,
      offsetY: this._options.rippleCentered ? a / 2 : o,
      height: r,
      width: a
    }, u = this._getDiameter(p), _ = this._options.rippleRadius || u / 2, f = {
      delay: l * Ha,
      duration: l - l * Ha
    }, g = {
      left: this._options.rippleCentered ? `${a / 2 - _}px` : `${n - _}px`,
      top: this._options.rippleCentered ? `${r / 2 - _}px` : `${o - _}px`,
      height: `${this._options.rippleRadius * 2 || u}px`,
      width: `${this._options.rippleRadius * 2 || u}px`,
      transitionDelay: `0s, ${f.delay}ms`,
      transitionDuration: `${l}ms, ${f.duration}ms`
    }, m = $("div");
    this._createHTMLRipple({
      wrapper: this._element,
      ripple: m,
      styles: g
    }), this._removeHTMLRipple({ ripple: m, duration: l });
  }
  _createHTMLRipple({ wrapper: t, ripple: e, styles: i }) {
    Object.keys(i).forEach(
      (n) => e.style[n] = i[n]
    ), h.addClass(e, this._classes.rippleWave), e.setAttribute("data-te-ripple-ref", ""), this._addColor(e, t), this._toggleUnbound(t), this._appendRipple(e, t);
  }
  _removeHTMLRipple({ ripple: t, duration: e }) {
    this._rippleTimer && (clearTimeout(this._rippleTimer), this._rippleTimer = null), t && setTimeout(() => {
      t.classList.add("!opacity-0");
    }, 10), this._rippleTimer = setTimeout(() => {
      if (t && (t.remove(), this._element)) {
        d.find("[data-te-ripple-ref]", this._element).forEach(
          (n) => {
            n.remove();
          }
        ), this._isMinWidthSet && (h.style(this._element, { "min-width": "" }), this._isMinWidthSet = !1);
        const i = this._initialClasses ? this._addedNewRippleClasses(
          this._classes.ripple,
          this._initialClasses
        ) : this._classes.ripple.split(" ");
        h.removeClass(this._element, i);
      }
    }, e);
  }
  _addedNewRippleClasses(t, e) {
    return t.split(" ").filter(
      (i) => e.findIndex((n) => i === n) === -1
    );
  }
  _durationToMsNumber(t) {
    return Number(t.replace("ms", "").replace("s", "000"));
  }
  _getConfig(t = {}) {
    const e = h.getDataAttributes(this._element);
    return t = {
      ...If,
      ...e,
      ...t
    }, I(eo, t, Df), t;
  }
  _getClasses(t = {}) {
    const e = h.getDataClassAttributes(this._element);
    return t = {
      ...$f,
      ...e,
      ...t
    }, I(eo, t, Lf), t;
  }
  _getDiameter({ offsetX: t, offsetY: e, height: i, width: n }) {
    const o = e <= i / 2, r = t <= n / 2, a = (f, g) => Math.sqrt(f ** 2 + g ** 2), l = e === i / 2 && t === n / 2, p = {
      first: o === !0 && r === !1,
      second: o === !0 && r === !0,
      third: o === !1 && r === !0,
      fourth: o === !1 && r === !1
    }, u = {
      topLeft: a(t, e),
      topRight: a(n - t, e),
      bottomLeft: a(t, i - e),
      bottomRight: a(n - t, i - e)
    };
    let _ = 0;
    return l || p.fourth ? _ = u.topLeft : p.third ? _ = u.topRight : p.second ? _ = u.bottomRight : p.first && (_ = u.bottomLeft), _ * 2;
  }
  _appendRipple(t, e) {
    e.appendChild(t), setTimeout(() => {
      h.addClass(t, "opacity-0 scale-100");
    }, 50);
  }
  _toggleUnbound(t) {
    this._options.rippleUnbound === !0 ? h.addClass(t, this._classes.unbound) : h.removeClass(t, this._classes.unbound);
  }
  _addColor(t) {
    let e = this._options.rippleColor || "rgb(0,0,0)";
    (localStorage.theme === "dark" || !("theme" in localStorage) && window.matchMedia("(prefers-color-scheme: dark)").matches) && (e = this._options.rippleColorDark || this._options.rippleColor);
    const i = Sf.find(
      (r) => r.name === e.toLowerCase()
    ), n = i ? this._colorToRGB(i.gradientColor).join(",") : this._colorToRGB(e).join(","), o = xf.split("{{color}}").join(`${n}`);
    t.style.backgroundImage = `radial-gradient(circle, ${o})`;
  }
  _colorToRGB(t) {
    function e(o) {
      return o.length < 7 && (o = `#${o[1]}${o[1]}${o[2]}${o[2]}${o[3]}${o[3]}`), [
        parseInt(o.substr(1, 2), 16),
        parseInt(o.substr(3, 2), 16),
        parseInt(o.substr(5, 2), 16)
      ];
    }
    function i(o) {
      const r = document.body.appendChild(
        document.createElement("fictum")
      ), a = "rgb(1, 2, 3)";
      return r.style.color = a, r.style.color !== a || (r.style.color = o, r.style.color === a || r.style.color === "") ? us : (o = getComputedStyle(r).color, document.body.removeChild(r), o);
    }
    function n(o) {
      return o = o.match(/[.\d]+/g).map((r) => +Number(r)), o.length = 3, o;
    }
    return t.toLowerCase() === "transparent" ? us : t[0] === "#" ? e(t) : (t.indexOf("rgb") === -1 && (t = i(t)), t.indexOf("rgb") === 0 ? n(t) : us);
  }
  // Static
  static autoInitial(t) {
    return function(e) {
      t._autoInit(e);
    };
  }
  static jQueryInterface(t) {
    return this.each(function() {
      return A.getData(this, ds) ? null : new ei(this, t);
    });
  }
  static getInstance(t) {
    return A.getData(t, ds);
  }
  static getOrCreateInstance(t, e = {}) {
    return this.getInstance(t) || new this(t, typeof e == "object" ? e : null);
  }
}
function tt(s) {
  return s.getDate();
}
function zs(s) {
  return s.getDay();
}
function Y(s) {
  return s.getMonth();
}
function B(s) {
  return s.getFullYear();
}
function Nf(s, t, e) {
  const i = e.startDay, n = i > 0 ? 7 - i : 0, r = new Date(s, t).getDay() + n;
  return r >= 7 ? r - 7 : r;
}
function Go(s) {
  return Mf(s).getDate();
}
function Mf(s) {
  return Ct(s.getFullYear(), s.getMonth() + 1, 0);
}
function je() {
  return /* @__PURE__ */ new Date();
}
function at(s, t) {
  return lt(s, t * 12);
}
function lt(s, t) {
  const e = Ct(
    s.getFullYear(),
    s.getMonth() + t,
    s.getDate()
  ), i = tt(s), n = tt(e);
  return i !== n && e.setDate(0), e;
}
function $e(s, t) {
  return Ct(s.getFullYear(), s.getMonth(), s.getDate() + t);
}
function Ct(s, t, e) {
  const i = new Date(s, t, e);
  return s >= 0 && s < 100 && i.setFullYear(i.getFullYear() - 1900), i;
}
function Va(s) {
  const t = s.split("-"), e = t[0], i = t[1], n = t[2];
  return Ct(e, i, n);
}
function Rf(s) {
  return !Number.isNaN(s.getTime());
}
function Fe(s, t) {
  return B(s) - B(t) || Y(s) - Y(t) || tt(s) - tt(t);
}
function me(s, t) {
  return s.setHours(0, 0, 0, 0), t.setHours(0, 0, 0, 0), s.getTime() === t.getTime();
}
function Us(s, t) {
  const i = B(s) - Bf();
  return Pf(i, t);
}
function Pf(s, t) {
  return (s % t + t) % t;
}
function Bf(s, t, e) {
  let i = 0;
  return e ? i = B(e) - s + 1 : t && (i = B(t)), i;
}
function _n(s, t, e, i, n, o) {
  const r = /* @__PURE__ */ new Date();
  r.setHours(0, 0, 0, 0);
  const a = t && Fe(s, t) <= -1, l = e && Fe(s, e) >= 1, p = n && Fe(s, r) <= -1, u = o && Fe(s, r) >= 1, _ = i && i(s) === !1;
  return a || l || _ || p || u;
}
function _h(s, t, e, i, n, o) {
  const r = /* @__PURE__ */ new Date(), a = i && B(i), l = i && Y(i), p = e && B(e), u = e && Y(e), _ = B(r), f = Y(r), g = l && a && (t > a || t === a && s > l), m = u && p && (t < p || t === p && s < u), b = n && (t < _ || t === _ && s < f), v = o && (t > _ || t === _ && s > f);
  return g || m || b || v;
}
function qo(s, t, e, i, n) {
  const o = t && B(t), r = e && B(e), a = B(/* @__PURE__ */ new Date()), l = r && s > r, p = o && s < o, u = i && s < a, _ = n && s > a;
  return l || p || u || _;
}
function Hf(s, t, e, i, n, o, r, a) {
  const l = /* @__PURE__ */ new Date();
  return l.setHours(0, 0, 0, 0), (s && o && Fe(o, l) < 0 || s) && (o = l), o && Pi(
    t,
    o,
    e,
    i,
    n,
    o,
    r,
    a
  );
}
function Vf(s, t, e, i, n, o, r, a) {
  const l = /* @__PURE__ */ new Date();
  return l.setHours(0, 0, 0, 0), (s && n && Fe(n, l) < 0 || s) && (n = l), n && Pi(
    t,
    n,
    e,
    i,
    n,
    o,
    r,
    a
  );
}
function Pi(s, t, e, i, n, o, r, a) {
  return e === "days" ? B(s) === B(t) && Y(s) === Y(t) : e === "months" ? B(s) === B(t) : e === "years" ? B(t) >= a && B(t) <= r : !1;
}
const Wf = "data-te-datepicker-modal-container-ref", Ff = "data-te-datepicker-dropdown-container-ref", Yf = "data-te-dropdown-backdrop-ref", jf = "data-te-datepicker-date-text-ref", Wa = "data-te-datepicker-view-ref", Kf = "data-te-datepicker-previous-button-ref", zf = "data-te-datepicker-next-button-ref", Uf = "data-te-datepicker-ok-button-ref", Xf = "data-te-datepicker-cancel-button-ref", Gf = "data-te-datepicker-clear-button-ref", qf = "data-te-datepicker-view-change-button-ref";
function Zf(s, t, e, i, n, o, r, a, l, p) {
  const u = Y(s), _ = B(s), f = tt(s), g = zs(s), m = $("div"), b = `
        ${Fa(
    s,
    u,
    _,
    t,
    e,
    i,
    n,
    o,
    r,
    a,
    p
  )}
    `, v = `
      ${Jf(f, g, u, n, p)}
      ${Fa(
    s,
    u,
    _,
    t,
    e,
    i,
    n,
    o,
    r,
    a,
    p
  )}
    `;
  return n.inline ? (h.addClass(m, p.datepickerDropdownContainer), m.setAttribute(Ff, l), m.innerHTML = b) : (h.addClass(m, p.modalContainer), m.setAttribute(Wf, l), m.innerHTML = v), m;
}
function Qf(s) {
  const t = $("div");
  return h.addClass(t, s), t.setAttribute(Yf, ""), t;
}
function Jf(s, t, e, i, n) {
  return `
      <div class="${n.datepickerHeader}" data-te-datepicker-header>
        <div class="${n.datepickerTitle}">
          <span class="${n.datepickerTitleText}">${i.title}</span>
        </div>
        <div class="${n.datepickerDate}">
          <span class="${n.datepickerDateText}" ${jf} >${i.weekdaysShort[t]}, ${i.monthsShort[e]} ${s}</span>
        </div>
      </div>
    `;
}
function Fa(s, t, e, i, n, o, r, a, l, p, u) {
  let _;
  return r.inline ? _ = `
    <div class="${u.datepickerMain}">
      ${ja(t, e, r, u)}
      <div class="${u.datepickerView}" ${Wa} tabindex="0">
        ${Ya(
    s,
    e,
    i,
    n,
    o,
    r,
    a,
    l,
    p,
    u
  )}
      </div>
    </div>
  ` : _ = `
    <div class="${u.datepickerMain}">
      ${ja(t, e, r, u)}
      <div class="${u.datepickerView}" ${Wa} tabindex="0">
        ${Ya(
    s,
    e,
    i,
    n,
    o,
    r,
    a,
    l,
    p,
    u
  )}
      </div>
      ${tm(r, u)}
    </div>
  `, _;
}
function Ya(s, t, e, i, n, o, r, a, l, p) {
  let u;
  return o.view === "days" ? u = Xs(s, e, o, p) : o.view === "months" ? u = Gs(
    t,
    i,
    n,
    o,
    r,
    p
  ) : u = qs(
    s,
    i,
    o,
    a,
    l,
    p
  ), u;
}
function ja(s, t, e, i) {
  return `
    <div class="${i.datepickerDateControls}">
      <button class="${i.datepickerViewChangeButton}" aria-label="${e.switchToMultiYearViewLabel}" ${qf}>
        ${e.monthsFull[s]} ${t} ${Lt(
    e,
    i
  )}
      </button>
      <div class="${i.datepickerArrowControls}">
        <button class="${i.datepickerPreviousButton}" aria-label="${e.prevMonthLabel}" ${Kf}>${e.changeMonthIconTemplate}</button>
        <button class="${i.datepickerNextButton}" aria-label="${e.nextMonthLabel}" ${zf}>${e.changeMonthIconTemplate}</button>
      </div>
    </div>
    `;
}
function Lt(s, t) {
  return `
  <span class="${t.datepickerViewChangeIcon}">
  ${s.viewChangeIconTemplate}
  </span>
  `;
}
function tm(s, t) {
  const e = `<button class="${t.datepickerFooterBtn}" aria-label="${s.okBtnLabel}" ${Uf}>${s.okBtnText}</button>`, i = `<button class="${t.datepickerFooterBtn}" aria-label="${s.cancelBtnLabel}" ${Xf}>${s.cancelBtnText}</button>`, n = `<button class="${t.datepickerFooterBtn} ${t.datepickerClearBtn}" aria-label="${s.clearBtnLabel}" ${Gf}>${s.clearBtnText}</button>`;
  return `
        <div class="${t.datepickerFooter}">
          
        ${s.removeClearBtn ? "" : n}
        ${s.removeCancelBtn ? "" : i}
        ${s.removeOkBtn ? "" : e}
        </div>
      `;
}
function Xs(s, t, e, i) {
  const n = em(s, t, e), r = `
      <tr>
        ${e.weekdaysNarrow.map((l, p) => `<th class="${i.datepickerDayHeading}" scope="col" aria-label="${e.weekdaysFull[p]}">${l}</th>`).join("")}
      </tr>
    `, a = n.map((l) => `
        <tr>
          ${l.map((p) => `
              <td
              class="${i.datepickerCell} ${i.datepickerCellSmall}"
              data-te-date="${B(p.date)}-${Y(
    p.date
  )}-${tt(p.date)}"
              aria-label="${p.date}"
              aria-selected="${p.isSelected}"
              ${p.isSelected ? "data-te-datepicker-cell-selected" : ""}
              ${!p.currentMonth || p.disabled ? "data-te-datepicker-cell-disabled" : ""}
              ${p.isToday ? "data-te-datepicker-cell-current" : ""}
              >
                <div
                  class="${i.datepickerCellContent} ${i.datepickerCellContentSmall}"
                  style="${p.currentMonth ? "display: block" : "display: none"}"
                  >
                  ${p.dayNumber}
                  </div>
              </td>
            `).join("")}
        </tr>
      `).join("");
  return `
      <table class="${i.datepickerTable}">
        <thead>
          ${r}
        </thead>
        <tbody>
         ${a}
        </tbody>
      </table>
    `;
}
function em(s, t, e) {
  const i = [], n = Y(s), o = Y(lt(s, -1)), r = Y(lt(s, 1)), a = B(s), l = Nf(a, n, e), p = Go(s), u = Go(lt(s, -1)), _ = 7;
  let f = 1, g = !1;
  for (let m = 1; m < _; m++) {
    const b = [];
    if (m === 1) {
      const v = u - l + 1;
      for (let y = v; y <= u; y++) {
        const C = Ct(a, o, y);
        b.push({
          date: C,
          currentMonth: g,
          isSelected: t && me(C, t),
          isToday: me(C, je()),
          dayNumber: tt(C)
        });
      }
      g = !0;
      const T = _ - b.length;
      for (let y = 0; y < T; y++) {
        const C = Ct(a, n, f);
        b.push({
          date: C,
          currentMonth: g,
          isSelected: t && me(C, t),
          isToday: me(C, je()),
          dayNumber: tt(C),
          disabled: _n(
            C,
            e.min,
            e.max,
            e.filter,
            e.disablePast,
            e.disableFuture
          )
        }), f++;
      }
    } else
      for (let v = 1; v < 8; v++) {
        f > p && (f = 1, g = !1);
        const T = Ct(
          a,
          g ? n : r,
          f
        );
        b.push({
          date: T,
          currentMonth: g,
          isSelected: t && me(T, t),
          isToday: me(T, je()),
          dayNumber: tt(T),
          disabled: _n(
            T,
            e.min,
            e.max,
            e.filter,
            e.disablePast,
            e.disableFuture
          )
        }), f++;
      }
    i.push(b);
  }
  return i;
}
function Gs(s, t, e, i, n, o) {
  const r = im(i, n), a = Y(je()), l = B(je()), p = `
      ${r.map((u) => `
          <tr>
            ${u.map((_) => {
    const f = i.monthsShort.indexOf(_);
    return `
                <td class="${o.datepickerCell} ${o.datepickerCellLarge}"
                ${_h(
      f,
      s,
      i.min,
      i.max,
      i.disablePast,
      i.disableFuture
    ) ? "data-te-datepicker-cell-disabled" : ""}
                
                data-te-month="${f}" data-te-year="${s}" aria-label="${_}, ${s}"
                ${f === e && s === t ? "data-te-datepicker-cell-selected" : ""}
                ${f === a && s === l ? "data-te-datepicker-cell-current" : ""}" data-te-month="${f}" data-te-year="${s}" aria-label="${_}, ${s}">
                  <div class="${o.datepickerCellContent} ${o.datepickerCellContentLarge}">${_}</div>
                </td>
              `;
  }).join("")}
          </tr>
        `).join("")}
    `;
  return `
      <table class="${o.datepickerTable}">
        <tbody>
         ${p}
        </tbody>
      </table>
    `;
}
function im(s, t) {
  const e = [];
  let i = [];
  for (let n = 0; n < s.monthsShort.length; n++)
    if (i.push(s.monthsShort[n]), i.length === t) {
      const o = i;
      e.push(o), i = [];
    }
  return e;
}
function qs(s, t, e, i, n, o) {
  const r = sm(s, i, n), a = B(je()), l = `
    ${r.map((p) => `
        <tr>
          ${p.map((u) => `
              <td class="${o.datepickerCell} ${o.datepickerCellLarge}"  aria-label="${u}" data-te-year="${u}"
              ${qo(
    u,
    e.min,
    e.max,
    e.disablePast,
    e.disableFuture
  ) ? "data-te-datepicker-cell-disabled" : ""}
              ${u === t ? "data-te-datepicker-cell-selected" : ""}
              ${u === a ? "data-te-datepicker-cell-current" : ""}
              >
                <div class="${o.datepickerCellContent} ${o.datepickerCellContentLarge}">${u}</div>
              </td>
            `).join("")}
        </tr>
      `).join("")}
  `;
  return `
      <table class="${o.datepickerTable}">
        <tbody>
        ${l}
        </tbody>
      </table>
    `;
}
function sm(s, t, e) {
  const i = [], n = B(s), o = Us(s, t), r = n - o;
  let a = [];
  for (let l = 0; l < t; l++)
    if (a.push(r + l), a.length === e) {
      const p = a;
      i.push(p), a = [];
    }
  return i;
}
function nm(s, t) {
  return `
    <button id="${s}" type="button" class="${t}" data-te-datepicker-toggle-button-ref data-te-datepicker-toggle-ref>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
      <path fill-rule="evenodd" d="M6.75 2.25A.75.75 0 017.5 3v1.5h9V3A.75.75 0 0118 3v1.5h.75a3 3 0 013 3v11.25a3 3 0 01-3 3H5.25a3 3 0 01-3-3V7.5a3 3 0 013-3H6V3a.75.75 0 01.75-.75zm13.5 9a1.5 1.5 0 00-1.5-1.5H5.25a1.5 1.5 0 00-1.5 1.5v7.5a1.5 1.5 0 001.5 1.5h13.5a1.5 1.5 0 001.5-1.5v-7.5z" clip-rule="evenodd" />
      </svg>  
    </button>
  `;
}
const Ke = 37, U = 38, ze = 39, z = 40, Te = 36, Ee = 35, io = 33, so = 34, it = 13, Zs = 32, we = 27, ke = 9, om = 8, rm = 46, Tt = 24, ps = 4, _s = 4, no = "datepicker", Qs = "te.datepicker", En = `.${Qs}`, am = ".data-api", lm = `close${En}`, cm = `open${En}`, hm = `dateChange${En}`, fs = `click${En}${am}`, fh = "data-te-datepicker-modal-container-ref", mh = "data-te-datepicker-dropdown-container-ref", ms = "[data-te-datepicker-toggle-ref]", dm = `[${fh}]`, um = `[${mh}]`, pm = "[data-te-datepicker-view-change-button-ref]", _m = "[data-te-datepicker-previous-button-ref]", fm = "[data-te-datepicker-next-button-ref]", mm = "[data-te-datepicker-ok-button-ref]", gm = "[data-te-datepicker-cancel-button-ref]", bm = "[data-te-datepicker-clear-button-ref]", vm = "[data-te-datepicker-view-ref]", Tm = "[data-te-datepicker-toggle-button-ref]", Em = "[data-te-datepicker-date-text-ref]", Cm = "[data-te-dropdown-backdrop-ref]", Am = "animate-[fade-in_0.3s_both] px-[auto] motion-reduce:transition-none motion-reduce:animate-none", ym = "animate-[fade-out_0.3s_both] px-[auto] motion-reduce:transition-none motion-reduce:animate-none", wm = "animate-[fade-in_0.15s_both] px-[auto] motion-reduce:transition-none motion-reduce:animate-none", km = "animate-[fade-out_0.15s_both] px-[auto] motion-reduce:transition-none motion-reduce:animate-none", xm = "flex flex-col fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[328px] h-[512px] bg-white rounded-[0.6rem] shadow-lg z-[1066] xs:max-md:landscape:w-[475px] xs:max-md:landscape:h-[360px] xs:max-md:landscape:flex-row dark:bg-zinc-700", Om = "w-full h-full fixed top-0 right-0 left-0 bottom-0 bg-black/40 z-[1065]", Sm = "relative h-full", Im = "xs:max-md:landscape:h-full h-[120px] px-6 bg-primary flex flex-col rounded-t-lg dark:bg-zinc-800", Dm = "h-8 flex flex-col justify-end", $m = "text-[10px] font-normal uppercase tracking-[1.7px] text-white", Lm = "xs:max-md:landscape:mt-24 h-[72px] flex flex-col justify-end", Nm = "text-[34px] font-normal text-white", Mm = "outline-none px-3", Rm = "px-3 pt-2.5 pb-0 flex justify-between text-black/[64]", Pm = "flex items-center outline-none p-2.5 text-neutral-500 font-medium text-[0.9rem] rounded-xl shadow-none bg-transparent m-0 border-none hover:bg-neutral-200 focus:bg-neutral-200  dark:text-white dark:hover:bg-white/10 dark:focus:bg-white/10", Bm = "mt-2.5", Hm = "p-0 w-10 h-10 leading-10 border-none outline-none m-0 text-gray-600 bg-transparent mr-6 hover:bg-neutral-200 hover:rounded-[50%] focus:bg-neutral-200 focus:rounded-[50%] dark:text-white dark:hover:bg-white/10 dark:focus:bg-white/10 [&>svg]:w-4 [&>svg]:h-4 [&>svg]:mx-auto", Vm = "p-0 w-10 h-10 leading-10 border-none outline-none m-0 text-gray-600 bg-transparent hover:bg-neutral-200 hover:rounded-[50%] focus:bg-neutral-200 focus:rounded-[50%] dark:text-white dark:hover:bg-white/10 dark:focus:bg-white/10 [&>svg]:w-4 [&>svg]:h-4 [&>svg]:rotate-180 [&>svg]:mx-auto", Wm = "h-14 flex absolute w-full bottom-0 justify-end items-center px-3", Fm = "outline-none bg-white text-primary border-none cursor-pointer py-0 px-2.5 uppercase text-[0.8rem] leading-10 font-medium h-10 tracking-[.1rem] rounded-[10px] mb-2.5 hover:bg-neutral-200 focus:bg-neutral-200 dark:bg-transparent dark:text-white dark:hover:bg-white/10 dark:focus:bg-white/10", Ym = "mr-auto", jm = "w-10 h-10 text-center text-[12px] font-normal dark:text-white", Km = "text-center data-[te-datepicker-cell-disabled]:text-neutral-300 data-[te-datepicker-cell-disabled]:cursor-default data-[te-datepicker-cell-disabled]:pointer-events-none data-[te-datepicker-cell-disabled]:hover:cursor-default hover:cursor-pointer group", zm = "w-10 h-10 xs:max-md:landscape:w-8 xs:max-md:landscape:h-8", Um = "w-[76px] h-[42px]", Xm = "mx-auto group-[:not([data-te-datepicker-cell-disabled]):not([data-te-datepicker-cell-selected]):hover]:bg-neutral-300 group-[[data-te-datepicker-cell-selected]]:bg-primary group-[[data-te-datepicker-cell-selected]]:text-white group-[:not([data-te-datepicker-cell-selected])[data-te-datepicker-cell-focused]]:bg-neutral-100 group-[[data-te-datepicker-cell-focused]]:data-[te-datepicker-cell-selected]:bg-primary group-[[data-te-datepicker-cell-current]]:border-solid group-[[data-te-datepicker-cell-current]]:border-black group-[[data-te-datepicker-cell-current]]:border dark:group-[:not([data-te-datepicker-cell-disabled]):not([data-te-datepicker-cell-selected]):hover]:bg-white/10 dark:group-[[data-te-datepicker-cell-current]]:border-white dark:text-white dark:group-[:not([data-te-datepicker-cell-selected])[data-te-datepicker-cell-focused]]:bg-white/10 dark:group-[[data-te-datepicker-cell-disabled]]:text-neutral-500", Gm = "w-9 h-9 leading-9 rounded-[50%] text-[13px]", qm = "w-[72px] h-10 leading-10 py-[1px] px-0.5 rounded-[999px]", Zm = "mx-auto w-[304px]", Qm = "flex items-center justify-content-center [&>svg]:w-5 [&>svg]:h-5 absolute outline-none border-none bg-transparent right-0.5 top-1/2 -translate-x-1/2 -translate-y-1/2 hover:text-primary focus:text-primary dark:hover:text-primary-400 dark:focus:text-primary-400 dark:text-neutral-200", Jm = "inline-block pointer-events-none ml-[3px] [&>svg]:w-4 [&>svg]:h-4 [&>svg]:fill-neutral-500 dark:[&>svg]:fill-white", tg = "w-[328px] h-[380px] bg-white rounded-lg shadow-[0px_2px_15px_-3px_rgba(0,0,0,.07),_0px_10px_20px_-2px_rgba(0,0,0,.04)] z-[1066] dark:bg-zinc-700", eg = {
  title: "Select date",
  container: "body",
  disablePast: !1,
  disableFuture: !1,
  monthsFull: [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"
  ],
  monthsShort: [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec"
  ],
  weekdaysFull: [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday"
  ],
  weekdaysShort: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
  weekdaysNarrow: ["S", "M", "T", "W", "T", "F", "S"],
  okBtnText: "Ok",
  clearBtnText: "Clear",
  cancelBtnText: "Cancel",
  okBtnLabel: "Confirm selection",
  clearBtnLabel: "Clear selection",
  cancelBtnLabel: "Cancel selection",
  nextMonthLabel: "Next month",
  prevMonthLabel: "Previous month",
  nextYearLabel: "Next year",
  prevYearLabel: "Previous year",
  changeMonthIconTemplate: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="3" stroke="currentColor" class="w-6 h-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
  </svg>
  `,
  nextMultiYearLabel: "Next 24 years",
  prevMultiYearLabel: "Previous 24 years",
  switchToMultiYearViewLabel: "Choose year and month",
  switchToMonthViewLabel: "Choose date",
  switchToDayViewLabel: "Choose date",
  startDate: null,
  startDay: 0,
  format: "dd/mm/yyyy",
  view: "days",
  viewChangeIconTemplate: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="0" stroke="currentColor" class="w-6 h-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
  </svg>
  `,
  min: null,
  max: null,
  filter: null,
  inline: !1,
  toggleButton: !0,
  disableToggleButton: !1,
  disableInput: !1,
  animations: !0,
  confirmDateOnSelect: !1,
  removeOkBtn: !1,
  removeCancelBtn: !1,
  removeClearBtn: !1
}, ig = {
  title: "string",
  container: "string",
  disablePast: "boolean",
  disableFuture: "boolean",
  monthsFull: "array",
  monthsShort: "array",
  weekdaysFull: "array",
  weekdaysShort: "array",
  weekdaysNarrow: "array",
  okBtnText: "string",
  clearBtnText: "string",
  cancelBtnText: "string",
  okBtnLabel: "string",
  clearBtnLabel: "string",
  cancelBtnLabel: "string",
  nextMonthLabel: "string",
  prevMonthLabel: "string",
  nextYearLabel: "string",
  prevYearLabel: "string",
  nextMultiYearLabel: "string",
  prevMultiYearLabel: "string",
  changeMonthIconTemplate: "string",
  switchToMultiYearViewLabel: "string",
  switchToMonthViewLabel: "string",
  switchToDayViewLabel: "string",
  startDate: "(null|string|date)",
  startDay: "number",
  format: "string",
  view: "string",
  viewChangeIconTemplate: "string",
  min: "(null|string|date)",
  max: "(null|string|date)",
  filter: "(null|function)",
  inline: "boolean",
  toggleButton: "boolean",
  disableToggleButton: "boolean",
  disableInput: "boolean",
  animations: "boolean",
  confirmDateOnSelect: "boolean",
  removeOkBtn: "boolean",
  removeCancelBtn: "boolean",
  removeClearBtn: "boolean"
}, sg = {
  fadeIn: Am,
  fadeOut: ym,
  fadeInShort: wm,
  fadeOutShort: km,
  modalContainer: xm,
  datepickerBackdrop: Om,
  datepickerMain: Sm,
  datepickerHeader: Im,
  datepickerTitle: Dm,
  datepickerTitleText: $m,
  datepickerDate: Lm,
  datepickerDateText: Nm,
  datepickerView: Mm,
  datepickerDateControls: Rm,
  datepickerViewChangeButton: Pm,
  datepickerViewChangeIcon: Jm,
  datepickerArrowControls: Bm,
  datepickerPreviousButton: Hm,
  datepickerNextButton: Vm,
  datepickerFooter: Wm,
  datepickerFooterBtn: Fm,
  datepickerClearBtn: Ym,
  datepickerDayHeading: jm,
  datepickerCell: Km,
  datepickerCellSmall: zm,
  datepickerCellLarge: Um,
  datepickerCellContent: Xm,
  datepickerCellContentSmall: Gm,
  datepickerCellContentLarge: qm,
  datepickerTable: Zm,
  datepickerToggleButton: Qm,
  datepickerDropdownContainer: tg
}, ng = {
  fadeIn: "string",
  fadeOut: "string",
  fadeInShort: "string",
  fadeOutShort: "string",
  modalContainer: "string",
  datepickerBackdrop: "string",
  datepickerMain: "string",
  datepickerHeader: "string",
  datepickerTitle: "string",
  datepickerTitleText: "string",
  datepickerDate: "string",
  datepickerDateText: "string",
  datepickerView: "string",
  datepickerDateControls: "string",
  datepickerViewChangeButton: "string",
  datepickerArrowControls: "string",
  datepickerPreviousButton: "string",
  datepickerNextButton: "string",
  datepickerFooter: "string",
  datepickerFooterBtn: "string",
  datepickerClearBtn: "string",
  datepickerDayHeading: "string",
  datepickerCell: "string",
  datepickerCellSmall: "string",
  datepickerCellLarge: "string",
  datepickerCellContent: "string",
  datepickerCellContentSmall: "string",
  datepickerCellContentLarge: "string",
  datepickerTable: "string",
  datepickerToggleButton: "string",
  datepickerDropdownContainer: "string"
};
class og {
  constructor(t, e, i) {
    this._element = t, this._input = d.findOne("input", this._element), this._options = this._getConfig(e), this._classes = this._getClasses(i), this._activeDate = /* @__PURE__ */ new Date(), this._selectedDate = null, this._selectedYear = null, this._selectedMonth = null, this._headerDate = null, this._headerYear = null, this._headerMonth = null, this._view = this._options.view, this._popper = null, this._focusTrap = null, this._isOpen = !1, this._toggleButtonId = et("datepicker-toggle-"), this._animations = !window.matchMedia("(prefers-reduced-motion: reduce)").matches && this._options.animations, this._scrollBar = new ti(), this._element && A.setData(t, Qs, this), this._init(), this.toggleButton && this._options.disableToggle && (this.toggleButton.disabled = "true"), this._options.disableInput && (this._input.disabled = "true");
  }
  // Getters
  static get NAME() {
    return no;
  }
  get container() {
    return d.findOne(
      `[${fh}='${this._toggleButtonId}']`
    ) || d.findOne(
      `[${mh}='${this._toggleButtonId}']`
    );
  }
  get options() {
    return this._options;
  }
  get activeCell() {
    let t;
    return this._view === "days" && (t = this._getActiveDayCell()), this._view === "months" && (t = this._getActiveMonthCell()), this._view === "years" && (t = this._getActiveYearCell()), t;
  }
  get activeDay() {
    return tt(this._activeDate);
  }
  get activeMonth() {
    return Y(this._activeDate);
  }
  get activeYear() {
    return B(this._activeDate);
  }
  get firstYearInView() {
    return this.activeYear - Us(this._activeDate, Tt);
  }
  get lastYearInView() {
    return this.firstYearInView + Tt - 1;
  }
  get viewChangeButton() {
    return d.findOne(pm, this.container);
  }
  get previousButton() {
    return d.findOne(_m, this.container);
  }
  get nextButton() {
    return d.findOne(fm, this.container);
  }
  get okButton() {
    return d.findOne(mm, this.container);
  }
  get cancelButton() {
    return d.findOne(gm, this.container);
  }
  get clearButton() {
    return d.findOne(bm, this.container);
  }
  get datesContainer() {
    return d.findOne(vm, this.container);
  }
  get toggleButton() {
    return d.findOne(Tm, this._element);
  }
  update(t = {}) {
    this._options = this._getConfig({ ...this._options, ...t });
  }
  _getConfig(t) {
    const e = h.getDataAttributes(this._element);
    if (t = {
      ...eg,
      ...e,
      ...t
    }, I(no, t, ig), t.max && typeof t.max == "string" && (t.max = new Date(t.max)), t.min && typeof t.min == "string" && (t.min = new Date(t.min)), t.startDay && t.startDay !== 0) {
      const i = this._getNewDaysOrderArray(t);
      t.weekdaysNarrow = i;
    }
    return t;
  }
  _getClasses(t) {
    const e = h.getDataClassAttributes(this._element);
    return t = {
      ...sg,
      ...e,
      ...t
    }, I(no, t, ng), t;
  }
  _getContainer() {
    return d.findOne(this._options.container);
  }
  _getNewDaysOrderArray(t) {
    const e = t.startDay, i = t.weekdaysNarrow;
    return i.slice(e).concat(i.slice(0, e));
  }
  _init() {
    !this.toggleButton && this._options.toggleButton && (this._appendToggleButton(), (this._input.readOnly || this._input.disabled) && (this.toggleButton.style.pointerEvents = "none")), this._listenToUserInput(), this._listenToToggleClick(), this._listenToToggleKeydown();
  }
  _appendToggleButton() {
    const t = nm(
      this._toggleButtonId,
      this._classes.datepickerToggleButton
    );
    this._element.insertAdjacentHTML("beforeend", t);
  }
  open() {
    if (this._input.readOnly || this._input.disabled)
      return;
    const t = c.trigger(this._element, cm);
    if (this._isOpen || t.defaultPrevented)
      return;
    this._setInitialDate();
    const e = Qf(this._classes.datepickerBackdrop), i = Zf(
      this._activeDate,
      this._selectedDate,
      this._selectedYear,
      this._selectedMonth,
      this._options,
      _s,
      Tt,
      ps,
      this._toggleButtonId,
      this._classes
    );
    this._options.inline ? this._openDropdown(i) : (this._openModal(e, i), this._scrollBar.hide()), this._animations && (h.addClass(this.container, this._classes.fadeIn), h.addClass(e, this._classes.fadeInShort)), this._setFocusTrap(this.container), this._listenToDateSelection(), this._addControlsListeners(), this._updateControlsDisabledState(), this._listenToEscapeClick(), this._listenToKeyboardNavigation(), this._listenToDatesContainerFocus(), this._listenToDatesContainerBlur(), this._asyncFocusDatesContainer(), this._updateViewControlsAndAttributes(this._view), this._isOpen = !0, setTimeout(() => {
      this._listenToOutsideClick();
    }, 0);
  }
  _openDropdown(t) {
    this._popper = se(this._input, t, {
      placement: "bottom-start"
    }), this._getContainer().appendChild(t);
  }
  _openModal(t, e) {
    const i = this._getContainer();
    i.appendChild(t), i.appendChild(e);
  }
  _setFocusTrap(t) {
    this._focusTrap = new zi(t, {
      event: "keydown",
      condition: (e) => e.key === "Tab"
    }), this._focusTrap.trap();
  }
  _listenToUserInput() {
    c.on(this._input, "input", (t) => {
      this._handleUserInput(t.target.value);
    });
  }
  _listenToToggleClick() {
    c.on(
      this._element,
      fs,
      ms,
      (t) => {
        t.preventDefault(), this.open();
      }
    );
  }
  _listenToToggleKeydown() {
    c.on(
      this._element,
      "keydown",
      ms,
      (t) => {
        t.keyCode === it && !this._isOpen && this.open();
      }
    );
  }
  _listenToDateSelection() {
    c.on(this.datesContainer, "click", (t) => {
      this._handleDateSelection(t);
    });
  }
  _handleDateSelection(t) {
    const e = t.target.nodeName === "DIV" ? t.target.parentNode.dataset : t.target.dataset, i = t.target.nodeName === "DIV" ? t.target.parentNode : t.target;
    if (e.teDate && this._pickDay(e.teDate, i), e.teMonth && e.teYear) {
      const n = parseInt(e.teMonth, 10), o = parseInt(e.teYear, 10);
      this._pickMonth(n, o);
    }
    if (e.teYear && !e.teMonth) {
      const n = parseInt(e.teYear, 10);
      this._pickYear(n);
    }
    this._options.inline || this._updateHeaderDate(
      this._activeDate,
      this._options.monthsShort,
      this._options.weekdaysShort
    );
  }
  _updateHeaderDate(t, e, i) {
    const n = d.findOne(
      Em,
      this.container
    ), o = Y(t), r = tt(t), a = zs(t);
    n.innerHTML = `${i[a]}, ${e[o]} ${r}`;
  }
  _addControlsListeners() {
    c.on(this.nextButton, "click", () => {
      this._view === "days" ? this.nextMonth() : this._view === "years" ? this.nextYears() : this.nextYear(), this._updateControlsDisabledState();
    }), c.on(this.previousButton, "click", () => {
      this._view === "days" ? this.previousMonth() : this._view === "years" ? this.previousYears() : this.previousYear(), this._updateControlsDisabledState();
    }), c.on(this.viewChangeButton, "click", () => {
      this._view === "days" ? this._changeView("years") : (this._view === "years" || this._view === "months") && this._changeView("days");
    }), this._options.inline || this._listenToFooterButtonsClick();
  }
  _listenToFooterButtonsClick() {
    c.on(this.okButton, "click", () => this.handleOk()), c.on(this.cancelButton, "click", () => this.handleCancel()), c.on(this.clearButton, "click", () => this.handleClear());
  }
  _listenToOutsideClick() {
    c.on(document, fs, (t) => {
      const e = t.target === this.container, i = this.container && this.container.contains(t.target);
      !e && !i && this.close();
    });
  }
  _listenToEscapeClick() {
    c.on(document, "keydown", (t) => {
      t.keyCode === we && this._isOpen && this.close();
    });
  }
  _listenToKeyboardNavigation() {
    c.on(this.datesContainer, "keydown", (t) => {
      this._handleKeydown(t);
    });
  }
  _listenToDatesContainerFocus() {
    c.on(this.datesContainer, "focus", () => {
      this._focusActiveCell(this.activeCell);
    });
  }
  _listenToDatesContainerBlur() {
    c.on(this.datesContainer, "blur", () => {
      this._removeCurrentFocusStyles();
    });
  }
  _handleKeydown(t) {
    this._view === "days" && this._handleDaysViewKeydown(t), this._view === "months" && this._handleMonthsViewKeydown(t), this._view === "years" && this._handleYearsViewKeydown(t);
  }
  _handleDaysViewKeydown(t) {
    const e = this._activeDate, i = this.activeCell;
    switch (t.keyCode) {
      case Ke:
        this._activeDate = $e(this._activeDate, W() ? 1 : -1);
        break;
      case ze:
        this._activeDate = $e(this._activeDate, W() ? -1 : 1);
        break;
      case U:
        this._activeDate = $e(this._activeDate, -7);
        break;
      case z:
        this._activeDate = $e(this._activeDate, 7);
        break;
      case Te:
        this._activeDate = $e(
          this._activeDate,
          1 - tt(this._activeDate)
        );
        break;
      case Ee:
        this._activeDate = $e(
          this._activeDate,
          Go(this._activeDate) - tt(this._activeDate)
        );
        break;
      case io:
        this._activeDate = lt(this._activeDate, -1);
        break;
      case so:
        this._activeDate = lt(this._activeDate, 1);
        break;
      case it:
      case Zs:
        this._selectDate(this._activeDate), this._handleDateSelection(t), t.preventDefault();
        return;
      default:
        return;
    }
    Pi(
      e,
      this._activeDate,
      this._view,
      Tt,
      this._options.min,
      this._options.max
    ) || this._changeView("days"), this._removeHighlightFromCell(i), this._focusActiveCell(this.activeCell), t.preventDefault();
  }
  _asyncFocusDatesContainer() {
    setTimeout(() => {
      this.datesContainer.focus();
    }, 0);
  }
  _focusActiveCell(t) {
    t && t.setAttribute("data-te-datepicker-cell-focused", "");
  }
  _removeHighlightFromCell(t) {
    t && t.removeAttribute("data-te-datepicker-cell-focused");
  }
  _getActiveDayCell() {
    const t = d.find("td", this.datesContainer);
    return Array.from(t).find((i) => {
      const n = Va(i.dataset.teDate);
      return me(n, this._activeDate);
    });
  }
  _handleMonthsViewKeydown(t) {
    const e = this._activeDate, i = this.activeCell;
    switch (t.keyCode) {
      case Ke:
        this._activeDate = lt(this._activeDate, W() ? 1 : -1);
        break;
      case ze:
        this._activeDate = lt(this._activeDate, W() ? -1 : 1);
        break;
      case U:
        this._activeDate = lt(this._activeDate, -4);
        break;
      case z:
        this._activeDate = lt(this._activeDate, 4);
        break;
      case Te:
        this._activeDate = lt(this._activeDate, -this.activeMonth);
        break;
      case Ee:
        this._activeDate = lt(this._activeDate, 11 - this.activeMonth);
        break;
      case io:
        this._activeDate = at(this._activeDate, -1);
        break;
      case so:
        this._activeDate = at(this._activeDate, 1);
        break;
      case it:
      case Zs:
        this._selectMonth(this.activeMonth);
        return;
      default:
        return;
    }
    Pi(
      e,
      this._activeDate,
      this._view,
      Tt,
      this._options.min,
      this._options.max
    ) || this._changeView("months"), this._removeHighlightFromCell(i), this._focusActiveCell(this.activeCell), t.preventDefault();
  }
  _getActiveMonthCell() {
    const t = d.find("td", this.datesContainer);
    return Array.from(t).find((i) => {
      const n = parseInt(i.dataset.teYear, 10), o = parseInt(i.dataset.teMonth, 10);
      return n === this.activeYear && o === this.activeMonth;
    });
  }
  _handleYearsViewKeydown(t) {
    const e = this._activeDate, i = this.activeCell, n = 4, o = 24;
    switch (t.keyCode) {
      case Ke:
        this._activeDate = at(this._activeDate, W() ? 1 : -1);
        break;
      case ze:
        this._activeDate = at(this._activeDate, W() ? -1 : 1);
        break;
      case U:
        this._activeDate = at(this._activeDate, -n);
        break;
      case z:
        this._activeDate = at(this._activeDate, n);
        break;
      case Te:
        this._activeDate = at(
          this._activeDate,
          -Us(this._activeDate, o)
        );
        break;
      case Ee:
        this._activeDate = at(
          this._activeDate,
          o - Us(this._activeDate, o) - 1
        );
        break;
      case io:
        this._activeDate = at(this._activeDate, -o);
        break;
      case so:
        this._activeDate = at(this._activeDate, o);
        break;
      case it:
      case Zs:
        this._selectYear(this.activeYear);
        return;
      default:
        return;
    }
    Pi(
      e,
      this._activeDate,
      this._view,
      Tt,
      this._options.min,
      this._options.max
    ) || this._changeView("years"), this._removeHighlightFromCell(i), this._focusActiveCell(this.activeCell), t.preventDefault();
  }
  _getActiveYearCell() {
    const t = d.find("td", this.datesContainer);
    return Array.from(t).find((i) => parseInt(i.dataset.teYear, 10) === this.activeYear);
  }
  _setInitialDate() {
    this._input.value ? this._handleUserInput(this._input.value) : this._options.startDate ? this._activeDate = new Date(this._options.startDate) : this._activeDate = /* @__PURE__ */ new Date();
  }
  close() {
    const t = c.trigger(this._element, lm);
    !this._isOpen || t.defaultPrevented || (this._removeDatepickerListeners(), this._animations && h.addClass(this.container, this._classes.fadeOut), this._options.inline ? this._closeDropdown() : this._closeModal(), this._isOpen = !1, this._view = this._options.view, this.toggleButton ? this.toggleButton.focus() : this._input.focus());
  }
  _closeDropdown() {
    const t = d.findOne(um), e = this._getContainer();
    window.matchMedia("(prefers-reduced-motion: reduce)").matches && (t && e.removeChild(t), this._popper && this._popper.destroy()), t.addEventListener("animationend", () => {
      t && e.removeChild(t), this._popper && this._popper.destroy();
    }), this._removeFocusTrap();
  }
  _closeModal() {
    const t = d.findOne(Cm), e = d.findOne(dm);
    !e || !t || (this._animations ? (h.addClass(t, this._classes.fadeOutShort), t.addEventListener("animationend", () => {
      this._removePicker(t, e), this._scrollBar.reset();
    })) : (this._removePicker(t, e), this._scrollBar.reset()));
  }
  _removePicker(t, e) {
    const i = this._getContainer();
    i.removeChild(t), i.removeChild(e);
  }
  _removeFocusTrap() {
    this._focusTrap && (this._focusTrap.disable(), this._focusTrap = null);
  }
  _removeDatepickerListeners() {
    c.off(this.nextButton, "click"), c.off(this.previousButton, "click"), c.off(this.viewChangeButton, "click"), c.off(this.okButton, "click"), c.off(this.cancelButton, "click"), c.off(this.clearButton, "click"), c.off(this.datesContainer, "click"), c.off(this.datesContainer, "keydown"), c.off(this.datesContainer, "focus"), c.off(this.datesContainer, "blur"), c.off(document, fs);
  }
  dispose() {
    this._isOpen && this.close(), this._removeInputAndToggleListeners();
    const t = d.findOne(
      `#${this._toggleButtonId}`
    );
    t && this._element.removeChild(t), A.removeData(this._element, Qs), this._element = null, this._input = null, this._options = null, this._activeDate = null, this._selectedDate = null, this._selectedYear = null, this._selectedMonth = null, this._headerDate = null, this._headerYear = null, this._headerMonth = null, this._view = null, this._popper = null, this._focusTrap = null;
  }
  _removeInputAndToggleListeners() {
    c.off(this._input, "input"), c.off(
      this._element,
      fs,
      ms
    ), c.off(this._element, "keydown", ms);
  }
  handleOk() {
    this._confirmSelection(this._headerDate), this.close();
  }
  _selectDate(t, e = this.activeCell) {
    const { min: i, max: n, filter: o, disablePast: r, disableFuture: a } = this._options;
    _n(t, i, n, o, r, a) || (this._removeCurrentSelectionStyles(), this._removeCurrentFocusStyles(), this._addSelectedStyles(e), this._selectedDate = t, this._selectedYear = B(t), this._selectedMonth = Y(t), this._headerDate = t, (this._options.inline || this.options.confirmDateOnSelect) && (this._confirmSelection(t), this.close()));
  }
  _selectYear(t, e = this.activeCell) {
    this._removeCurrentSelectionStyles(), this._removeCurrentFocusStyles(), this._addSelectedStyles(e), this._headerYear = t, this._asyncChangeView("months");
  }
  _selectMonth(t, e = this.activeCell) {
    this._removeCurrentSelectionStyles(), this._removeCurrentFocusStyles(), this._addSelectedStyles(e), this._headerMonth = t, this._asyncChangeView("days");
  }
  _removeSelectedStyles(t) {
    t && t.removeAttribute("data-te-datepicker-cell-selected");
  }
  _addSelectedStyles(t) {
    t && t.setAttribute("data-te-datepicker-cell-selected", "");
  }
  _confirmSelection(t) {
    if (t) {
      const e = this.formatDate(t);
      this._input.value = e, c.trigger(this._element, hm, { date: t }), c.trigger(this._input, "input");
    }
  }
  handleCancel() {
    this._selectedDate = null, this._selectedYear = null, this._selectedMonth = null, this.close();
  }
  handleClear() {
    this._selectedDate = null, this._selectedMonth = null, this._selectedYear = null, this._headerDate = null, this._headerMonth = null, this._headerYear = null, this._removeCurrentSelectionStyles(), this._input.value = "", this._setInitialDate(), this._changeView("days"), this._updateHeaderDate(
      this._activeDate,
      this._options.monthsShort,
      this._options.weekdaysShort
    );
  }
  _removeCurrentSelectionStyles() {
    const t = d.findOne(
      "[data-te-datepicker-cell-selected]",
      this.container
    );
    t && t.removeAttribute("data-te-datepicker-cell-selected");
  }
  _removeCurrentFocusStyles() {
    const t = d.findOne(
      "[data-te-datepicker-cell-focused]",
      this.container
    );
    t && t.removeAttribute("data-te-datepicker-cell-focused");
  }
  formatDate(t) {
    const e = tt(t), i = this._addLeadingZero(tt(t)), n = this._options.weekdaysShort[zs(t)], o = this._options.weekdaysFull[zs(t)], r = Y(t) + 1, a = this._addLeadingZero(Y(t) + 1), l = this._options.monthsShort[Y(t)], p = this._options.monthsFull[Y(t)], u = B(t).toString().length === 2 ? B(t) : B(t).toString().slice(2, 4), _ = B(t), f = this._options.format.split(
      /(d{1,4}|m{1,4}|y{4}|yy|!.)/g
    );
    let g = "";
    return f.forEach((m) => {
      switch (m) {
        case "dddd":
          m = m.replace(m, o);
          break;
        case "ddd":
          m = m.replace(m, n);
          break;
        case "dd":
          m = m.replace(m, i);
          break;
        case "d":
          m = m.replace(m, e);
          break;
        case "mmmm":
          m = m.replace(m, p);
          break;
        case "mmm":
          m = m.replace(m, l);
          break;
        case "mm":
          m = m.replace(m, a);
          break;
        case "m":
          m = m.replace(m, r);
          break;
        case "yyyy":
          m = m.replace(m, _);
          break;
        case "yy":
          m = m.replace(m, u);
          break;
      }
      g += m;
    }), g;
  }
  _addLeadingZero(t) {
    return parseInt(t, 10) < 10 ? `0${t}` : t;
  }
  _pickDay(t, e) {
    const i = Va(t), { min: n, max: o, filter: r, disablePast: a, disableFuture: l } = this._options;
    _n(i, n, o, r, a, l) || (this._activeDate = i, this._selectDate(i, e));
  }
  _pickYear(t) {
    const { min: e, max: i, disablePast: n, disableFuture: o } = this._options;
    if (qo(t, e, i, n, o))
      return;
    const r = Ct(t, this.activeMonth, this.activeDay);
    this._activeDate = r, this._selectedDate = r, this._selectYear(t);
  }
  _pickMonth(t, e) {
    const { min: i, max: n, disablePast: o, disableFuture: r } = this._options;
    if (_h(t, e, i, n, o, r) || qo(e, i, n, o, r))
      return;
    const a = Ct(e, t, this.activeDay);
    this._activeDate = a, this._selectMonth(t);
  }
  nextMonth() {
    const t = lt(this._activeDate, 1), e = Xs(
      t,
      this._headerDate,
      this._options,
      this._classes
    );
    this._activeDate = t, this.viewChangeButton.textContent = `${this._options.monthsFull[this.activeMonth]} ${this.activeYear}`, this.viewChangeButton.innerHTML += Lt(
      this._options,
      this._classes
    ), this.datesContainer.innerHTML = e;
  }
  previousMonth() {
    const t = lt(this._activeDate, -1);
    this._activeDate = t;
    const e = Xs(
      t,
      this._headerDate,
      this._options,
      this._classes
    );
    this.viewChangeButton.textContent = `${this._options.monthsFull[this.activeMonth]} ${this.activeYear}`, this.viewChangeButton.innerHTML += Lt(
      this._options,
      this._classes
    ), this.datesContainer.innerHTML = e;
  }
  nextYear() {
    const t = at(this._activeDate, 1);
    this._activeDate = t, this.viewChangeButton.textContent = `${this.activeYear}`, this.viewChangeButton.innerHTML += Lt(
      this._options,
      this._classes
    );
    const e = Gs(
      this.activeYear,
      this._selectedYear,
      this._selectedMonth,
      this._options,
      _s,
      this._classes
    );
    this.datesContainer.innerHTML = e;
  }
  previousYear() {
    const t = at(this._activeDate, -1);
    this._activeDate = t, this.viewChangeButton.textContent = `${this.activeYear}`, this.viewChangeButton.innerHTML += Lt(
      this._options,
      this._classes
    );
    const e = Gs(
      this.activeYear,
      this._selectedYear,
      this._selectedMonth,
      this._options,
      _s,
      this._classes
    );
    this.datesContainer.innerHTML = e;
  }
  nextYears() {
    const t = at(this._activeDate, 24);
    this._activeDate = t;
    const e = qs(
      t,
      this._selectedYear,
      this._options,
      Tt,
      ps,
      this._classes
    );
    this.viewChangeButton.textContent = `${this.firstYearInView} - ${this.lastYearInView}`, this.viewChangeButton.innerHTML += Lt(
      this._options,
      this._classes
    ), this.datesContainer.innerHTML = e;
  }
  previousYears() {
    const t = at(this._activeDate, -24);
    this._activeDate = t;
    const e = qs(
      t,
      this._selectedYear,
      this._options,
      Tt,
      ps,
      this._classes
    );
    this.viewChangeButton.textContent = `${this.firstYearInView} - ${this.lastYearInView}`, this.viewChangeButton.innerHTML += Lt(
      this._options,
      this._classes
    ), this.datesContainer.innerHTML = e;
  }
  _asyncChangeView(t) {
    setTimeout(() => {
      this._changeView(t);
    }, 0);
  }
  _changeView(t) {
    this._view = t, this.datesContainer.blur(), t === "days" && (this.datesContainer.innerHTML = Xs(
      this._activeDate,
      this._headerDate,
      this._options,
      this._classes
    )), t === "months" && (this.datesContainer.innerHTML = Gs(
      this.activeYear,
      this._selectedYear,
      this._selectedMonth,
      this._options,
      _s,
      this._classes
    )), t === "years" && (this.datesContainer.innerHTML = qs(
      this._activeDate,
      this._selectedYear,
      this._options,
      Tt,
      ps,
      this._classes
    )), this.datesContainer.focus(), this._updateViewControlsAndAttributes(t), this._updateControlsDisabledState();
  }
  _updateViewControlsAndAttributes(t) {
    t === "days" && (this.viewChangeButton.textContent = `${this._options.monthsFull[this.activeMonth]} ${this.activeYear}`, this.viewChangeButton.innerHTML += Lt(
      this._options,
      this._classes
    ), this.viewChangeButton.setAttribute(
      "aria-label",
      this._options.switchToMultiYearViewLabel
    ), this.previousButton.setAttribute(
      "aria-label",
      this._options.prevMonthLabel
    ), this.nextButton.setAttribute("aria-label", this._options.nextMonthLabel)), t === "months" && (this.viewChangeButton.textContent = `${this.activeYear}`, this.viewChangeButton.innerHTML += Lt(
      this._options,
      this._classes
    ), this.viewChangeButton.setAttribute(
      "aria-label",
      this._options.switchToDayViewLabel
    ), this.previousButton.setAttribute(
      "aria-label",
      this._options.prevYearLabel
    ), this.nextButton.setAttribute("aria-label", this._options.nextYearLabel)), t === "years" && (this.viewChangeButton.textContent = `${this.firstYearInView} - ${this.lastYearInView}`, this.viewChangeButton.innerHTML += Lt(
      this._options,
      this._classes
    ), this.viewChangeButton.setAttribute(
      "aria-label",
      this._options.switchToMonthViewLabel
    ), this.previousButton.setAttribute(
      "aria-label",
      this._options.prevMultiYearLabel
    ), this.nextButton.setAttribute(
      "aria-label",
      this._options.nextMultiYearLabel
    ));
  }
  _updateControlsDisabledState() {
    Hf(
      this._options.disableFuture,
      this._activeDate,
      this._view,
      Tt,
      this._options.min,
      this._options.max,
      this.lastYearInView,
      this.firstYearInView
    ) ? this.nextButton.disabled = !0 : this.nextButton.disabled = !1, Vf(
      this._options.disablePast,
      this._activeDate,
      this._view,
      Tt,
      this._options.min,
      this._options.max,
      this.lastYearInView,
      this.firstYearInView
    ) ? this.previousButton.disabled = !0 : this.previousButton.disabled = !1;
  }
  _handleUserInput(t) {
    const e = this._getDelimeters(this._options.format), i = this._parseDate(t, this._options.format, e);
    Rf(i) ? (this._activeDate = i, this._selectedDate = i, this._selectedYear = B(i), this._selectedMonth = Y(i), this._headerDate = i) : (this._activeDate = /* @__PURE__ */ new Date(), this._selectedDate = null, this._selectedMonth = null, this._selectedYear = null, this._headerDate = null, this._headerMonth = null, this._headerYear = null);
  }
  _getDelimeters(t) {
    return t.match(/[^(dmy)]{1,}/g);
  }
  _parseDate(t, e, i) {
    let n;
    i[0] !== i[1] ? n = i[0] + i[1] : n = i[0];
    const o = new RegExp(`[${n}]`), r = t.split(o), a = e.split(o), l = e.indexOf("mmm") !== -1, p = [];
    for (let b = 0; b < a.length; b++)
      a[b].indexOf("yy") !== -1 && (p[0] = { value: r[b], format: a[b] }), a[b].indexOf("m") !== -1 && (p[1] = { value: r[b], format: a[b] }), a[b].indexOf("d") !== -1 && a[b].length <= 2 && (p[2] = { value: r[b], format: a[b] });
    let u;
    e.indexOf("mmmm") !== -1 ? u = this._options.monthsFull : u = this._options.monthsShort;
    const _ = Number(p[0].value), f = l ? this.getMonthNumberByMonthName(p[1].value, u) : Number(p[1].value) - 1, g = Number(p[2].value);
    return Ct(_, f, g);
  }
  getMonthNumberByMonthName(t, e) {
    return e.findIndex((i) => i === t);
  }
  static getInstance(t) {
    return A.getData(t, Qs);
  }
  static getOrCreateInstance(t, e = {}) {
    return this.getInstance(t) || new this(t, typeof e == "object" ? e : null);
  }
}
const rg = ({
  format24: s,
  okLabel: t,
  cancelLabel: e,
  headID: i,
  footerID: n,
  bodyID: o,
  pickerID: r,
  clearLabel: a,
  inline: l,
  showClearBtn: p,
  amLabel: u,
  pmLabel: _
}, f) => {
  const g = `<div id='${r}' class='${f.timepickerWrapper}' data-te-timepicker-wrapper>
      <div class="${f.timepickerContainer}">
        <div class="${f.timepickerElements}" data-te-timepicker-elements-wrapper>
        <div id='${i}' class='${f.timepickerHead}' style='padding-right:${s ? 50 : 10}px'>
        <div class='${f.timepickerHeadContent}'>
            <div class="${f.timepickerCurrentWrapper}">
              <span class="${f.timepickerCurrentButtonWrapper}">
                <button type='button' class='${f.timepickerCurrentButton}' tabindex="0" data-te-timepicker-active data-te-timepicker-current data-te-timepicker-hour data-te-ripple-init>21</button>
              </span>
              <button type='button' class='${f.timepickerDot}' disabled>:</button>
            <span class="${f.timepickerCurrentButtonWrapper}">
              <button type='button' class='${f.timepickerCurrentButton}' tabindex="0" data-te-timepicker-current data-te-timepicker-minute data-te-ripple-init>21</button>
            </span>
            </div>
            ${s ? "" : `<div class="${f.timepickerModeWrapper}">
                  <button type='button' class="${f.timepickerModeAm}" tabindex="0" data-te-timepicker-am data-te-timepicker-hour-mode data-te-ripple-init>${u}</button>
                  <button class="${f.timepickerModePm}" tabindex="0" data-te-timepicker-pm data-te-timepicker-hour-mode data-te-ripple-init>${_}</button>
                </div>`}
        </div>
      </div>
      ${l ? "" : `<div id='${o}' class='${f.timepickerClockWrapper}' data-te-timepicker-clock-wrapper>
            <div class='${f.timepickerClock}' data-te-timepicker-clock>
              <span class='${f.timepickerMiddleDot}' data-te-timepicker-middle-dot></span>
              <div class='${f.timepickerHandPointer}' data-te-timepicker-hand-pointer>
                <div class='${f.timepickerPointerCircle}' data-te-timepicker-circle></div>
              </div>
              ${s ? '<div class="' + f.timepickerClockInner + '" data-te-timepicker-clock-inner></div>' : ""}
            </div>
          </div>`}
    </div>
    <div id='${n}' class='${f.timepickerFooterWrapper}'>
      <div class="${f.timepickerFooter}">
        ${p ? `<button type='button' class='${f.timepickerFooterButton}' data-te-timepicker-clear tabindex="0" data-te-ripple-init>${a}</button>` : ""}
        <button type='button' class='${f.timepickerFooterButton}' data-te-timepicker-cancel tabindex="0" data-te-ripple-init>${e}</button>
        <button type='button' class='${f.timepickerFooterButton}' data-te-timepicker-submit tabindex="0" data-te-ripple-init>${t}</button>
      </div>
    </div>
  </div>
</div>`, m = `<div id='${r}' class='${f.timepickerInlineWrapper}' data-te-timepicker-wrapper>
        <div class="${f.timepickerInlineContainer}">
          <div class="${f.timepickerInlineElements}" data-te-timepicker-elements-wrapper>
          <div id='${i}' class='${f.timepickerInlineHead}'
          style='padding-right:10px'>
          <div class='${f.timepickerInlineHeadContent}'>
              <div class="${f.timepickerCurrentWrapper}">
                <span class="${f.timepickerInlineHourWrapper}" data-te-timepicker-inline-hour-icons>
                  <span class="${f.timepickerInlineIconUp}" data-te-timepicker-icon-up data-te-timepicker-icon-inline-hour>
                    <span class="${f.timepickerInlineIconSvg}">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5">
                      <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 15.75l7.5-7.5 7.5 7.5" />
                      </svg>   
                    </span>
                  </span>
                  <button type='button' class='${f.timepickerInlineCurrentButton}' data-te-timepicker-hour data-te-timepicker-current data-te-timepicker-current-inline tabindex="0" data-te-ripple-init>21</button>
                  <span class="${f.timepickerInlineIconDown}" data-te-timepicker-icon-inline-hour data-te-timepicker-icon-down>
                    <span class="${f.timepickerInlineIconSvg}">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5">
                      <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                      </svg>  
                    </span>
                  </span>
                </span>
                <button type='button' class='${f.timepickerInlineDot}' data-te-timepicker-current-inline disabled>:</button>
              <span class="${f.timepickerCurrentMinuteWrapper}">
                <span class="${f.timepickerInlineIconUp}" data-te-timepicker-icon-up data-te-timepicker-icon-inline-minute>
                  <span class="${f.timepickerInlineIconSvg}">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 15.75l7.5-7.5 7.5 7.5" />
                    </svg>
                  </span>
                </span>
                <button type='button' class='${f.timepickerInlineCurrentButton}' data-te-timepicker-minute data-te-timepicker-current data-te-timepicker-current-inline tabindex="0" data-te-ripple-init>21</button>
                <span class="${f.timepickerInlineIconDown}" data-te-timepicker-icon-inline-minute data-te-timepicker-icon-down>
                  <span class="${f.timepickerInlineIconSvg}">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                    </svg> 
                  </span>
                </span>
              </span>
              </div>
              ${s ? "" : `<div class="${f.timepickerInlineModeWrapper}">
                      <button type='button' class="${f.timepickerInlineModeAm}" data-te-timepicker-am data-te-timepicker-hour-mode tabindex="0" data-te-ripple-init>${u}</button>
                      <button class="${f.timepickerInlineModePm}" data-te-timepicker-hour-mode data-te-timepicker-pm tabindex="0" data-te-ripple-init>${_}</button>
                      <button type='button' class='${f.timepickerInlineSubmitButton}' data-te-timepicker-submit tabindex="0" data-te-ripple-init>${t}</button>
                    </div>`}
              ${s ? `<button class='${f.timepickerInlineSubmitButton}' data-te-timepicker-submit tabindex="0" data-te-ripple-init>${t}</button>` : ""}
          </div>
        </div>
      </div>
    </div>
</div>`;
  return l ? m : g;
}, ag = (s, t, e) => {
  const { iconSVG: i } = s;
  return `
  <button id="${t}" tabindex="0" type="button" class="${e.timepickerToggleButton}" data-te-toggle="timepicker" data-te-timepicker-toggle-button data-te-timepicker-icon>
    ${i}
  </button>
`;
}, Cn = "data-te-timepicker-disabled", gs = "data-te-timepicker-active", Ce = (s) => {
  if (s === "")
    return;
  let t, e, i, n;
  return gh(s) ? (t = s.getHours(), n = t, e = s.getMinutes(), t %= 12, n === 0 && t === 0 && (i = "AM"), t = t || 12, i === void 0 && (i = Number(n) >= 12 ? "PM" : "AM"), e = e < 10 ? `0${e}` : e) : ([t, e, i] = R(s, !1), n = t, t %= 12, n === 0 && t === 0 && (i = "AM"), t = t || 12, i === void 0 && (i = Number(n) >= 12 ? "PM" : "AM")), {
    hours: t,
    minutes: e,
    amOrPm: i
  };
}, gh = (s) => s && Object.prototype.toString.call(s) === "[object Date]" && !Number.isNaN(s), Ka = (s) => {
  if (s === "")
    return;
  let t, e;
  return gh(s) ? (t = s.getHours(), e = s.getMinutes()) : [t, e] = R(s, !1), e = Number(e) < 10 ? `0${Number(e)}` : e, {
    hours: t,
    minutes: e
  };
}, lg = (s, t, e) => c.on(document, s, t, ({ target: i }) => {
  if (i.hasAttribute(gs))
    return;
  document.querySelectorAll(t).forEach((o) => {
    o.hasAttribute(gs) && (h.removeClass(o, e.opacity), o.removeAttribute(gs));
  }), h.addClass(i, e.opacity), i.setAttribute(gs, "");
}), za = ({ clientX: s, clientY: t, touches: e }, i, n = !1) => {
  const { left: o, top: r } = i.getBoundingClientRect();
  let a = {};
  return !n || !e ? a = {
    x: s - o,
    y: t - r
  } : n && Object.keys(e).length > 0 && (a = {
    x: e[0].clientX - o,
    y: e[0].clientY - r
  }), a;
}, bs = () => navigator.maxTouchPoints && navigator.maxTouchPoints > 2 && /MacIntel/.test(navigator.platform) || /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
  navigator.userAgent
), R = (s, t = !0) => t ? s.value.replace(/:/gi, " ").split(" ") : s.replace(/:/gi, " ").split(" "), bh = (s, t) => {
  const [e, i, n] = R(s, !1), [o, r, a] = R(t, !1);
  return n === "PM" && a === "AM" || n === a && e > o || i > r;
}, vh = () => {
  const s = /* @__PURE__ */ new Date(), t = s.getHours(), e = s.getMinutes();
  return `${t}:${e < 10 ? `0${e}` : e}`;
}, Gt = (s, t, e) => {
  if (!t)
    return s;
  let i = vh();
  return e && (i = `${Ce(i).hours}:${Ce(i).minutes} ${Ce(i).amOrPm}`), (s !== "" && bh(i, s) || s === "") && (s = i), s;
}, qt = (s, t, e) => {
  if (!t)
    return s;
  let i = vh();
  return e && (i = `${Ce(i).hours}:${Ce(i).minutes} ${Ce(i).amOrPm}`), (s !== "" && !bh(i, s) || s === "") && (s = i), s;
}, cg = ({ format12: s, maxTime: t, minTime: e, disablePast: i, disableFuture: n }, o, r) => {
  const a = R(o)[1];
  e = Gt(e, i, s), t = qt(t, n, s);
  const [l, p, u] = R(t, !1), [_, f, g] = R(e, !1);
  if (u !== void 0 || g !== void 0)
    return [r, a];
  if (!(l !== "" && _ === "" && Number(r) > Number(l)) && !(l === "" && _ !== "" && p === void 0 && f !== "" && Number(r) < Number(_)))
    return [r, a];
}, Ua = (s, t, e, i) => {
  s.forEach((n) => {
    t = t === "12" && i ? "0" : t, (n.textContent === "00" || Number(n.textContent === "12" && i ? "0" : n.textContent) > t) && (h.addClass(n, e.tipsDisabled), n.setAttribute(Cn, ""));
  });
}, Xa = (s, t, e, i) => {
  s.forEach((n) => {
    t = t === "12" && i ? "0" : t, n.textContent !== "00" && Number(n.textContent === "12" && i ? "0" : n.textContent) < Number(t) && (h.addClass(n, e.tipsDisabled), n.setAttribute(Cn, ""));
  });
}, Th = (s, t, e, i) => {
  if (t === "12" || t === "24")
    return;
  const n = e ? 12 : 24;
  return i === "max" ? (Number(s) === n ? 0 : Number(s)) > Number(t) : (Number(s) === n ? 0 : Number(s)) < Number(t);
}, hg = (s, t, e, i, n, o) => {
  s.forEach((r) => {
    (Th(i, e, o, "max") || Number(r.textContent) > t && Number(i) === Number(e)) && (h.addClass(r, n.tipsDisabled), r.setAttribute(Cn, ""));
  });
}, dg = (s, t, e, i, n, o) => {
  s.forEach((r) => {
    (Th(i, e, o, "min") || Number(r.textContent) < t && Number(i) === Number(e)) && (h.addClass(r, n.tipsDisabled), r.setAttribute(Cn, ""));
  });
}, ug = (s) => s.startsWith("0") ? Number(s.slice(1)) : Number(s), Bi = "timepicker", M = `data-te-${Bi}`, Ga = "[data-te-toggle]", Js = `te.${Bi}`, Pt = `.${Js}`, Bt = ".data-api", qa = `click${Pt}${Bt}`, vs = `keydown${Pt}${Bt}`, Za = `mousedown${Pt}${Bt}`, Qa = `mouseup${Pt}${Bt}`, Ja = `mousemove${Pt}${Bt}`, tl = `mouseleave${Pt}${Bt}`, el = `mouseover${Pt}${Bt}`, il = `touchmove${Pt}${Bt}`, sl = `touchend${Pt}${Bt}`, nl = `touchstart${Pt}${Bt}`, pg = `[${M}-am]`, _g = `[${M}-pm]`, fg = `[${M}-format24]`, Ts = `[${M}-current]`, Es = `[${M}-hour-mode]`, mg = `[${M}-toggle-button]`, oo = `${M}-cancel`, ol = `${M}-clear`, ro = `${M}-submit`, gg = `${M}-icon`, ao = `${M}-icon-up`, lo = `${M}-icon-down`, bg = `${M}-icon-inline-hour`, vg = `${M}-icon-inline-minute`, rl = `${M}-inline-hour-icons`, Tg = `${M}-current-inline`, Eg = "readonly", Cg = `${M}-invalid-feedback`, co = `${M}-is-invalid`, jt = `${M}-disabled`, H = `${M}-active`, Ag = `${M}-input`, ue = `${M}-clock`, mi = `${M}-clock-inner`, ho = `${M}-wrapper`, al = `${M}-clock-wrapper`, Cs = `${M}-hour`, uo = `${M}-minute`, As = `${M}-tips-element`, X = `${M}-tips-hours`, q = `${M}-tips-minutes`, ht = `${M}-tips-inner`, ys = `${M}-tips-inner-element`, ll = `${M}-middle-dot`, po = `${M}-hand-pointer`, _o = `${M}-circle`, cl = `${M}-modal`, yg = `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
  <path stroke-linecap="round" stroke-linejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
</svg>`, wg = {
  appendValidationInfo: !0,
  bodyID: "",
  cancelLabel: "Cancel",
  clearLabel: "Clear",
  closeModalOnBackdropClick: !0,
  closeModalOnMinutesClick: !1,
  container: "body",
  defaultTime: "",
  disabled: !1,
  disablePast: !1,
  disableFuture: !1,
  enableValidation: !0,
  focusInputAfterApprove: !1,
  footerID: "",
  format12: !0,
  format24: !1,
  headID: "",
  increment: !1,
  inline: !1,
  invalidLabel: "Invalid Time Format",
  maxTime: "",
  minTime: "",
  modalID: "",
  okLabel: "Ok",
  overflowHidden: !0,
  pickerID: "",
  readOnly: !1,
  showClearBtn: !0,
  switchHoursToMinutesOnClick: !0,
  iconSVG: yg,
  withIcon: !0,
  pmLabel: "PM",
  amLabel: "AM",
  animations: !0
}, kg = {
  appendValidationInfo: "boolean",
  bodyID: "string",
  cancelLabel: "string",
  clearLabel: "string",
  closeModalOnBackdropClick: "boolean",
  closeModalOnMinutesClick: "boolean",
  container: "string",
  disabled: "boolean",
  disablePast: "boolean",
  disableFuture: "boolean",
  enableValidation: "boolean",
  footerID: "string",
  format12: "boolean",
  format24: "boolean",
  headID: "string",
  increment: "boolean",
  inline: "boolean",
  invalidLabel: "string",
  modalID: "string",
  okLabel: "string",
  overflowHidden: "boolean",
  pickerID: "string",
  readOnly: "boolean",
  showClearBtn: "boolean",
  switchHoursToMinutesOnClick: "boolean",
  defaultTime: "(string|date|number)",
  iconSVG: "string",
  withIcon: "boolean",
  pmLabel: "string",
  amLabel: "string",
  animations: "boolean"
}, xg = {
  tips: "absolute rounded-[100%] w-[32px] h-[32px] text-center cursor-pointer text-[1.1rem] rounded-[100%] bg-transparent flex justify-center items-center font-light focus:outline-none selection:bg-transparent",
  tipsActive: "text-white bg-[#3b71ca] font-normal",
  tipsDisabled: "text-[#b3afaf] pointer-events-none bg-transparent",
  transform: "transition-[transform,height] ease-in-out duration-[400ms]",
  modal: "z-[1065]",
  clockAnimation: "animate-[show-up-clock_350ms_linear]",
  opacity: "!opacity-100",
  timepickerWrapper: "touch-none opacity-100 z-[1065] inset-0 bg-[#00000066] h-full flex items-center justify-center flex-col fixed",
  timepickerContainer: "flex items-center justify-center flex-col max-h-[calc(100%-64px)] overflow-y-auto shadow-[0_10px_15px_-3px_rgba(0,0,0,0.07),0_4px_6px_-2px_rgba(0,0,0,0.05)] min-[320px]:max-[825px]:landscape:rounded-lg",
  timepickerElements: "flex flex-col min-w-[310px] min-h-[325px] bg-white rounded-t-[0.6rem] min-[320px]:max-[825px]:landscape:!flex-row min-[320px]:max-[825px]:landscape:min-w-[auto] min-[320px]:max-[825px]:landscape:min-h-[auto] min-[320px]:max-[825px]:landscape:overflow-y-auto justify-around",
  timepickerHead: "bg-[#3b71ca] dark:bg-zinc-700 h-[100px] rounded-t-lg pr-[24px] pl-[50px] py-[10px] min-[320px]:max-[825px]:landscape:rounded-tr-none min-[320px]:max-[825px]:landscape:rounded-bl-none min-[320px]:max-[825px]:landscape:p-[10px] min-[320px]:max-[825px]:landscape:pr-[10px] min-[320px]:max-[825px]:landscape:h-auto min-[320px]:max-[825px]:landscape:min-h-[305px] flex flex-row items-center justify-center",
  timepickerHeadContent: "min-[320px]:max-[825px]:landscape:flex-col flex w-full justify-evenly",
  timepickerCurrentWrapper: "[direction:ltr] rtl:[direction:rtl]",
  timepickerCurrentButtonWrapper: "relative h-full",
  timepickerCurrentButton: "text-[3.75rem] font-light leading-[1.2] tracking-[-0.00833em] text-white opacity-[.54] border-none bg-transparent p-0 min-[320px]:max-[825px]:landscape:text-5xl min-[320px]:max-[825px]:landscape:font-normal cursor-pointer hover:bg-[#00000026] hover:outline-none focus:bg-[#00000026] focus:outline-none ",
  timepickerDot: "font-light leading-[1.2] tracking-[-0.00833em] text-[3.75rem] opacity-[.54] border-none bg-transparent p-0 text-white min-[320px]:max-[825px]:landscape:text-[3rem] min-[320px]:max-[825px]:landscape:font-normal",
  timepickerModeWrapper: "flex flex-col justify-center text-[18px] text-[#ffffff8a] min-[320px]:max-[825px]:landscape:!justify-around min-[320px]:max-[825px]:landscape:!flex-row",
  timepickerModeAm: "p-0 bg-transparent border-none text-white opacity-[.54] cursor-pointer hover:bg-[#00000026] hover:outline-none focus:bg-[#00000026] focus:outline-none",
  timepickerModePm: "p-0 bg-transparent border-none text-white opacity-[.54] cursor-pointer hover:bg-[#00000026] hover:outline-none focus:bg-[#00000026] focus:outline-none",
  timepickerClockWrapper: "min-w-[310px] max-w-[325px] min-h-[305px] overflow-x-hidden h-full flex justify-center flex-col items-center dark:bg-zinc-500",
  timepickerClock: "relative rounded-[100%] w-[260px] h-[260px] cursor-default my-0 mx-auto bg-[#00000012] dark:bg-zinc-600/50",
  timepickerMiddleDot: "top-1/2 left-1/2 w-[6px] h-[6px] -translate-y-1/2 -translate-x-1/2 rounded-[50%] bg-[#3b71ca] absolute",
  timepickerHandPointer: "bg-[#3b71ca] bottom-1/2 h-2/5 left-[calc(50%-1px)] rtl:!left-auto origin-[center_bottom_0] rtl:!origin-[50%_50%_0] w-[2px] absolute",
  timepickerPointerCircle: "-top-[21px] -left-[15px] w-[4px] border-[14px] border-solid border-[#3b71ca] h-[4px] box-content rounded-[100%] absolute",
  timepickerClockInner: "absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 w-[160px] h-[160px] rounded-[100%]",
  timepickerFooterWrapper: "rounded-b-lg flex justify-between items-center w-full h-[56px] px-[12px] bg-white dark:bg-zinc-500",
  timepickerFooter: "w-full flex justify-between",
  timepickerFooterButton: "text-[0.8rem] min-w-[64px] box-border font-medium leading-[40px] rounded-[10px] tracking-[0.1rem] uppercase text-[#3b71ca] dark:text-white border-none bg-transparent transition-[background-color,box-shadow,border] duration-[250ms] ease-[cubic-bezier(0.4,0,0.2,1)] delay-[0ms] outline-none py-0 px-[10px] h-[40px] mb-[10px] hover:bg-[#00000014] focus:bg-[#00000014] focus:outline-none",
  timepickerInlineWrapper: "touch-none opacity-100 z-[1065] inset-0 bg-[#00000066] h-full flex items-center justify-center flex-col rounded-lg",
  timepickerInlineContainer: "flex items-center justify-center flex-col max-h-[calc(100%-64px)] overflow-y-auto shadow-[0_10px_15px_-3px_rgba(0,0,0,0.07),0_4px_6px_-2px_rgba(0,0,0,0.05)]",
  timepickerInlineElements: "flex flex-col min-h-[auto] min-w-[310px] bg-white rounded-[0.6rem] min-[320px]:max-[825px]:landscape:!flex-row min-[320px]:max-[825px]:landscape:rounded-bl-lg min-[320px]:max-[825px]:landscape:min-w-[auto] min-[320px]:max-[825px]:landscape::min-h-[auto] min-[320px]:max-[825px]:landscape:overflow-y-auto justify-around",
  timepickerInlineHead: "bg-[#3b71ca] dark:bg-zinc-700 h-[100px] rounded-t-lg min-[320px]:max-[825px]:landscape:rounded-tr-none min-[320px]:max-[825px]:landscape:rounded-bl-none min-[320px]:max-[825px]:landscape:p-[10px] min-[320px]:max-[825px]:landscape:pr-[10px] min-[320px]:max-[825px]:landscape:h-auto min-[320px]:max-[825px]:landscape:min-h-[305px] flex flex-row items-center justify-center p-0 rounded-b-lg",
  timepickerInlineHeadContent: "min-[320px]:max-[825px]:landscape:flex-col flex w-full justify-evenly items-center",
  timepickerInlineHourWrapper: "relative h-full !opacity-100",
  timepickerCurrentMinuteWrapper: "relative h-full",
  timepickerInlineIconUp: "absolute text-white -top-[35px] opacity-0 hover:opacity-100 transition-all duration-200 ease-[ease] cursor-pointer -translate-x-1/2 -translate-y-1/2 left-1/2 w-[30px] h-[30px] flex justify-center items-center",
  timepickerInlineIconSvg: "h-4 w-4",
  timepickerInlineCurrentButton: "font-light leading-[1.2] tracking-[-0.00833em] text-white border-none bg-transparent p-0 min-[320px]:max-[825px]:landscape:text-5xl min-[320px]:max-[825px]:landscape:font-normal !opacity-100 cursor-pointer focus:bg-[#00000026] hover:outline-none focus:outline-none text-[2.5rem] hover:bg-[unset]",
  timepickerInlineIconDown: "absolute text-white -bottom-[47px] opacity-0 hover:opacity-100 transition-all duration-200 ease-[ease] cursor-pointer -translate-x-1/2 -translate-y-1/2 left-1/2 w-[30px] h-[30px] flex justify-center items-center",
  timepickerInlineDot: "font-light leading-[1.2] tracking-[-0.00833em] opacity-[.54] border-none bg-transparent p-0 text-white min-[320px]:max-[825px]:landscape:text-[3rem] min-[320px]:max-[825px]:landscape:font-normal text-[2.5rem]",
  timepickerInlineModeWrapper: "flex justify-center text-[18px] text-[#ffffff8a] min-[320px]:max-[825px]:landscape:!justify-around min-[320px]:max-[825px]:landscape:!flex-row",
  timepickerInlineModeAm: "hover:bg-[#00000026] hover:outline-none focus:bg-[#00000026] focus:outline-none p-0 bg-transparent border-none text-white opacity-[.54] cursor-pointer mr-2 ml-6",
  timepickerInlineModePm: "hover:bg-[#00000026] hover:outline-none focus:bg-[#00000026] focus:outline-none p-0 bg-transparent border-none text-white opacity-[.54] cursor-pointer",
  timepickerInlineSubmitButton: "hover:bg-[#00000014] focus:bg-[#00000014] focus:outline-none text-[0.8rem] box-border font-medium leading-[40px] tracking-[.1rem] uppercase border-none bg-transparent [transition:background-color_250ms_cubic-bezier(0.4,0,0.2,1)_0ms,box-shadow_250ms_cubic-bezier(0.4,0,0.2,1)_0ms,border_250ms_cubic-bezier(0.4,0,0.2,1)_0ms] outline-none rounded-[100%] h-[48px] min-w-[48px] inline-block ml-[30px] text-white py-1 px-2 mb-0",
  timepickerToggleButton: "h-4 w-4 ml-auto absolute outline-none border-none bg-transparent right-1.5 top-1/2 -translate-x-1/2 -translate-y-1/2 transition-all duration-300 ease-[cubic-bezier(0.25,0.1,0.25,1)] cursor-pointer hover:text-[#3b71ca] focus:text-[#3b71ca] dark:hover:text-[#3b71ca] dark:focus:text-[#3b71ca] dark:text-white"
}, Og = {
  tips: "string",
  tipsActive: "string",
  tipsDisabled: "string",
  transform: "string",
  modal: "string",
  clockAnimation: "string",
  opacity: "string",
  timepickerWrapper: "string",
  timepickerContainer: "string",
  timepickerElements: "string",
  timepickerHead: "string",
  timepickerHeadContent: "string",
  timepickerCurrentWrapper: "string",
  timepickerCurrentButtonWrapper: "string",
  timepickerCurrentButton: "string",
  timepickerDot: "string",
  timepickerModeWrapper: "string",
  timepickerModeAm: "string",
  timepickerModePm: "string",
  timepickerClockWrapper: "string",
  timepickerClock: "string",
  timepickerMiddleDot: "string",
  timepickerHandPointer: "string",
  timepickerPointerCircle: "string",
  timepickerClockInner: "string",
  timepickerFooterWrapper: "string",
  timepickerFooterButton: "string",
  timepickerInlineWrapper: "string",
  timepickerInlineContainer: "string",
  timepickerInlineElements: "string",
  timepickerInlineHead: "string",
  timepickerInlineHeadContent: "string",
  timepickerInlineHourWrapper: "string",
  timepickerCurrentMinuteWrapper: "string",
  timepickerInlineIconUp: "string",
  timepickerInlineIconSvg: "string",
  timepickerInlineCurrentButton: "string",
  timepickerInlineIconDown: "string",
  timepickerInlineDot: "string",
  timepickerInlineModeWrapper: "string",
  timepickerInlineModeAm: "string",
  timepickerInlineModePm: "string",
  timepickerInlineSubmitButton: "string",
  timepickerToggleButton: "string"
};
class Sg {
  constructor(t, e = {}, i) {
    wt(this, "_toggleAmPm", (t) => {
      t === "PM" ? (this._isPmEnabled = !0, this._isAmEnabled = !1) : t === "AM" && (this._isPmEnabled = !1, this._isAmEnabled = !0);
    });
    wt(this, "_toggleBackgroundColorCircle", (t) => {
      if (this._modal.querySelector(`${t}[${H}]`) !== null) {
        h.addStyle(this._circle, {
          backgroundColor: "#1976d2"
        });
        return;
      }
      h.addStyle(this._circle, {
        backgroundColor: "transparent"
      });
    });
    wt(this, "_toggleClassActive", (t, { textContent: e }, i) => {
      const n = [...t].find(
        (o) => Number(o) === Number(e)
      );
      return i.forEach((o) => {
        if (!o.hasAttribute(jt)) {
          if (o.textContent === n) {
            h.addClass(o, this._classes.tipsActive), o.setAttribute(H, "");
            return;
          }
          h.removeClass(o, this._classes.tipsActive), o.removeAttribute(H);
        }
      });
    });
    wt(this, "_makeMinutesDegrees", (t, e) => {
      const { increment: i } = this._options;
      return t < 0 ? (e = Math.round(360 + t / 6) % 60, t = 360 + Math.round(t / 6) * 6) : (e = Math.round(t / 6) % 60, t = Math.round(t / 6) * 6), i && (t = Math.round(t / 30) * 30, e = Math.round(t / 6) * 6 / 6, e === 60 && (e = "00")), t >= 360 && (t = 0), {
        degrees: t,
        minute: e,
        addDegrees: i ? 30 : 6
      };
    });
    wt(this, "_makeHourDegrees", (t, e, i) => {
      if (t)
        return this._hasTargetInnerClass(t) ? e < 0 ? (i = Math.round(360 + e / 30) % 24, e = 360 + e) : (i = Math.round(e / 30) + 12, i === 12 && (i = "00")) : e < 0 ? (i = Math.round(360 + e / 30) % 12, e = 360 + e) : (i = Math.round(e / 30) % 12, (i === 0 || i > 12) && (i = 12)), e >= 360 && (e = 0), {
          degrees: e,
          hour: i,
          addDegrees: 30
        };
    });
    wt(this, "_makeInnerHoursDegrees", (t, e) => (t < 0 ? (e = Math.round(360 + t / 30) % 24, t = 360 + t) : (e = Math.round(t / 30) + 12, e === 12 && (e = "00")), {
      degrees: t,
      hour: e,
      addDegrees: 30
    }));
    wt(this, "_getAppendClock", (t = [], e = `[${ue}]`, i) => {
      let { minTime: n, maxTime: o } = this._options;
      const { inline: r, format12: a, disablePast: l, disableFuture: p } = this._options;
      n = Gt(n, l, a), o = qt(o, p, a);
      const [u, _, f] = R(
        o,
        !1
      ), [g, m, b] = R(
        n,
        !1
      );
      !r && a && this._isInvalidTimeFormat && !this._AM.hasAttribute(H) && (h.addClass(this._PM, this._classes.opacity), this._PM.setAttribute(H, ""));
      const v = d.findOne(e), T = 360 / t.length;
      function y(k) {
        return k * (Math.PI / 180);
      }
      if (v === null)
        return;
      const C = (v.offsetWidth - 32) / 2, E = (v.offsetHeight - 32) / 2, w = C - 4;
      setTimeout(() => {
        let k;
        a && (k = d.findOne(
          `${Es}[${H}]`
        ).textContent), this._handleDisablingTipsMinTime(
          k,
          b,
          m,
          g
        ), this._handleDisablingTipsMaxTime(
          k,
          f,
          _,
          u
        );
      }, 0), [...t].forEach((k, D) => {
        const O = y(D * T), x = $("span"), L = $("span");
        L.innerHTML = k, h.addClass(x, this._classes.tips), x.setAttribute(i, "");
        const S = x.offsetWidth, N = x.offsetHeight;
        return h.addStyle(x, {
          left: `${C + Math.sin(O) * w - S}px`,
          bottom: `${E + Math.cos(O) * w - N}px`
        }), t.includes("05") && x.setAttribute(q, ""), t.includes("13") ? L.setAttribute(ys, "") : L.setAttribute(As, ""), x.appendChild(L), v.appendChild(x);
      });
    });
    this._element = t, this._element && A.setData(t, Js, this), this._document = document, this._options = this._getConfig(e), this._classes = this._getClasses(i), this._currentTime = null, this._toggleButtonId = et("timepicker-toggle-"), this.hoursArray = [
      "12",
      "1",
      "2",
      "3",
      "4",
      "5",
      "6",
      "7",
      "8",
      "9",
      "10",
      "11"
    ], this.innerHours = [
      "00",
      "13",
      "14",
      "15",
      "16",
      "17",
      "18",
      "19",
      "20",
      "21",
      "22",
      "23"
    ], this.minutesArray = [
      "00",
      "05",
      "10",
      "15",
      "20",
      "25",
      "30",
      "35",
      "40",
      "45",
      "50",
      "55"
    ], this.input = d.findOne("input", this._element), this.dataWithIcon = t.dataset.withIcon, this.dataToggle = t.dataset.toggle, this.customIcon = d.findOne(
      mg,
      this._element
    ), this._checkToggleButton(), this.inputFormatShow = d.findOne(
      fg,
      this._element
    ), this.inputFormat = this.inputFormatShow === null ? "" : Object.values(this.inputFormatShow.dataset)[0], this.elementToggle = d.findOne(
      Ga,
      this._element
    ), this.toggleElement = Object.values(
      t.querySelector(Ga).dataset
    )[0], this._hour = null, this._minutes = null, this._AM = null, this._PM = null, this._wrapper = null, this._modal = null, this._hand = null, this._circle = null, this._focusTrap = null, this._popper = null, this._interval = null, this._timeoutInterval = null, this._inputValue = this._options.defaultTime !== "" ? this._options.defaultTime : this.input.value, this._options.format24 && (this._options.format12 = !1, this._currentTime = Ka(this._inputValue)), this._options.format12 && (this._options.format24 = !1, this._currentTime = Ce(this._inputValue)), this._options.readOnly && this.input.setAttribute(Eg, !0), this.inputFormat === "true" && this.inputFormat !== "" && (this._options.format12 = !1, this._options.format24 = !0, this._currentTime = Ka(this._inputValue)), this._animations = !window.matchMedia("(prefers-reduced-motion: reduce)").matches && this._options.animations, this.init(), this._isHours = !0, this._isMinutes = !1, this._isInvalidTimeFormat = !1, this._isMouseMove = !1, this._isInner = !1, this._isAmEnabled = !1, this._isPmEnabled = !1, this._options.format12 && !this._options.defaultTime && (this._isPmEnabled = !0), this._objWithDataOnChange = { degrees: null }, this._scrollBar = new ti();
  }
  // Getters
  static get NAME() {
    return Bi;
  }
  // Public
  init() {
    const { format12: t, format24: e, enableValidation: i } = this._options;
    let n, o, r;
    if (this.input.setAttribute(Ag, ""), this._currentTime !== void 0) {
      const { hours: a, minutes: l, amOrPm: p } = this._currentTime;
      n = Number(a) < 10 ? 0 : "", o = `${n}${Number(a)}:${l}`, r = p, t ? this.input.value = `${o} ${r}` : e && (this.input.value = `${o}`);
    } else
      n = "", o = "", r = "", this.input.value = "";
    this.input.value.length > 0 && this.input.value !== "" && (this.input.setAttribute(H, ""), c.trigger(this.input, "input")), !(this._options === null && this._element === null) && (i && this._getValidate("keydown change blur focus"), this._handleOpen(), this._listenToToggleKeydown());
  }
  dispose() {
    this._removeModal(), this._element !== null && A.removeData(this._element, Js), setTimeout(() => {
      this._element = null, this._options = null, this.input = null, this._focusTrap = null;
    }, 350), c.off(
      this._element,
      "click",
      `[data-te-toggle='${this.toggleElement}']`
    ), c.off(
      this._element,
      "keydown",
      `[data-te-toggle='${this.toggleElement}']`
    );
  }
  update(t = {}) {
    this._options = this._getConfig({ ...this._options, ...t });
  }
  // private
  _checkToggleButton() {
    this.customIcon === null && (this.dataWithIcon !== void 0 && (this._options.withIcon = null, this.dataWithIcon === "true" && this._appendToggleButton(this._options)), this._options.withIcon && this._appendToggleButton(this._options));
  }
  _appendToggleButton() {
    const t = ag(
      this._options,
      this._toggleButtonId,
      this._classes
    );
    this.input.insertAdjacentHTML("afterend", t);
  }
  _getDomElements() {
    this._hour = d.findOne(`[${Cs}]`), this._minutes = d.findOne(`[${uo}]`), this._AM = d.findOne(pg), this._PM = d.findOne(_g), this._wrapper = d.findOne(`[${ho}]`), this._modal = d.findOne(`[${cl}]`), this._hand = d.findOne(`[${po}]`), this._circle = d.findOne(`[${_o}]`), this._clock = d.findOne(`[${ue}]`), this._clockInner = d.findOne(
      `[${mi}]`
    );
  }
  _handlerMaxMinHoursOptions(t, e, i, n, o, r) {
    if (!e && !i)
      return !0;
    const { format24: a, format12: l, disablePast: p, disableFuture: u } = this._options, { _isAmEnabled: _, _isPmEnabled: f } = this, g = r.keyCode, m = r.target.hasAttribute(mi) || r.target.hasAttribute(ht) || r.target.hasAttribute(ys);
    i = Gt(i, p, l), e = qt(e, u, l), typeof e != "number" && (e = R(e, !1)[0]);
    const b = e !== "" ? e * 30 : "", v = i !== "" ? i * 30 : "";
    t < 0 && (t = 360 + t), t = t === 360 ? 0 : t;
    const T = () => {
      const D = document.querySelectorAll(
        `[${As}]`
      ), O = document.querySelectorAll(
        `[${ys}]`
      ), x = ug(this._hour.innerText);
      let L, S, N;
      return g === U ? S = 1 : g === z && (S = -1), x === 12 && g === U ? N = 1 : x === 0 && g === U ? N = 13 : x === 0 && g === z ? N = 23 : x === 13 && g === z ? N = 0 : x === 1 && g === z ? N = 12 : N = x + S, D.forEach((P) => {
        Number(P.textContent) === N && (L = P);
      }), O.forEach((P) => {
        Number(P.textContent) === N && (L = P);
      }), !L.parentElement.hasAttribute(jt);
    }, y = () => {
      const D = i !== "" && i > 12 ? (i - 12) * 30 : "", O = e !== "" && e > 12 ? (e - 12) * 30 : "";
      if (!(D && t < D || O && t > O || e && e < 12))
        return !0;
    };
    if (a && r.type !== "keydown" && m)
      return y();
    if (r.type === "keydown")
      return T();
    const C = !o || o === "PM" && f || i !== "" && o === "AM" && _, E = !n || n === "PM" && f || e !== "" && n === "AM" && _, w = () => {
      const D = v === 360 && l ? 0 : v;
      if (i) {
        if (o === "PM" && _ || C && t < D)
          return;
      } else
        return !0;
      return !0;
    }, k = () => {
      const D = b === 360 && l ? 0 : b;
      if (e) {
        if (n === "AM" && f || E && t > D)
          return;
      } else
        return !0;
      return !0;
    };
    return w() && k();
  }
  _handleKeyboard() {
    c.on(this._document, vs, "", (t) => {
      let e, i, n;
      const {
        increment: o,
        maxTime: r,
        minTime: a,
        format12: l,
        disablePast: p,
        disableFuture: u
      } = this._options;
      let _ = R(a, !1)[0], f = R(r, !1)[0];
      const g = R(a, !1)[2], m = R(r, !1)[2];
      _ = Gt(_, p, l), f = qt(f, u, l), typeof f != "number" && (f = R(f, !1)[0]);
      const b = d.findOne(`[${q}]`) === null, v = d.findOne(`[${ht}]`) !== null, T = Number(this._hand.style.transform.replace(/[^\d-]/g, "")), y = d.find(
        `[${q}]`,
        this._modal
      ), C = d.find(
        `[${X}]`,
        this._modal
      ), E = d.find(
        `[${ht}]`,
        this._modal
      );
      let w = this._makeHourDegrees(t.target, T, e).hour;
      const { degrees: k, addDegrees: D } = this._makeHourDegrees(
        t.target,
        T,
        e
      );
      let { minute: O, degrees: x } = this._makeMinutesDegrees(T, i);
      const L = this._makeMinutesDegrees(
        T,
        i
      ).addDegrees;
      let { hour: S } = this._makeInnerHoursDegrees(
        T,
        n
      );
      if (t.keyCode === we) {
        const N = d.findOne(
          `[${oo}]`,
          this._modal
        );
        c.trigger(N, "click");
      } else if (b) {
        if (v && (t.keyCode === ze && (this._isInner = !1, h.addStyle(this._hand, {
          height: "calc(40% + 1px)"
        }), this._hour.textContent = this._setHourOrMinute(
          w > 12 ? 1 : w
        ), this._toggleClassActive(this.hoursArray, this._hour, C), this._toggleClassActive(this.innerHours, this._hour, E)), t.keyCode === Ke && (this._isInner = !0, h.addStyle(this._hand, {
          height: "21.5%"
        }), this._hour.textContent = this._setHourOrMinute(
          S >= 24 || S === "00" ? 0 : S
        ), this._toggleClassActive(this.innerHours, this._hour, E), this._toggleClassActive(
          this.hoursArray,
          this._hour - 1,
          C
        ))), t.keyCode === U) {
          if (!this._handlerMaxMinHoursOptions(
            k + 30,
            f,
            _,
            m,
            g,
            t
          ))
            return;
          h.addStyle(this._hand, {
            transform: `rotateZ(${k + D}deg)`
          }), this._isInner ? (S += 1, S === 24 ? S = 0 : (S === 25 || S === "001") && (S = 13), this._hour.textContent = this._setHourOrMinute(S), this._toggleClassActive(this.innerHours, this._hour, E)) : (w += 1, this._hour.textContent = this._setHourOrMinute(
            w > 12 ? 1 : w
          ), this._toggleClassActive(this.hoursArray, this._hour, C));
        }
        if (t.keyCode === z) {
          if (!this._handlerMaxMinHoursOptions(
            k - 30,
            f,
            _,
            m,
            g,
            t
          ))
            return;
          h.addStyle(this._hand, {
            transform: `rotateZ(${k - D}deg)`
          }), this._isInner ? (S -= 1, S === 12 ? S = 0 : S === -1 && (S = 23), this._hour.textContent = this._setHourOrMinute(S), this._toggleClassActive(this.innerHours, this._hour, E)) : (w -= 1, this._hour.textContent = this._setHourOrMinute(
            w === 0 ? 12 : w
          ), this._toggleClassActive(this.hoursArray, this._hour, C));
        }
      } else
        t.keyCode === U && (x += L, h.addStyle(this._hand, {
          transform: `rotateZ(${x}deg)`
        }), O += 1, o && (O += 4, O === "0014" && (O = 5)), this._minutes.textContent = this._setHourOrMinute(
          O > 59 ? 0 : O
        ), this._toggleClassActive(
          this.minutesArray,
          this._minutes,
          y
        ), this._toggleBackgroundColorCircle(
          `[${q}]`
        )), t.keyCode === z && (x -= L, h.addStyle(this._hand, {
          transform: `rotateZ(${x}deg)`
        }), o ? O -= 5 : O -= 1, O === -1 ? O = 59 : O === -5 && (O = 55), this._minutes.textContent = this._setHourOrMinute(O), this._toggleClassActive(
          this.minutesArray,
          this._minutes,
          y
        ), this._toggleBackgroundColorCircle(
          `[${q}]`
        ));
    });
  }
  _setActiveClassToTipsOnOpen(t, ...e) {
    if (!this._isInvalidTimeFormat)
      if (this._options.format24) {
        const i = d.find(
          `[${X}]`,
          this._modal
        ), n = d.find(
          `[${ht}]`,
          this._modal
        );
        this._addActiveClassToTip(i, t), this._addActiveClassToTip(n, t);
      } else {
        [...e].filter((n) => (n.toLowerCase() === "pm" ? (h.addClass(this._PM, this._classes.opacity), this._PM.setAttribute(H, "")) : n.toLowerCase() === "am" ? (h.addClass(this._AM, this._classes.opacity), this._AM.setAttribute(H, "")) : (h.removeClass(this._AM, this._classes.opacity), h.removeClass(this._PM, this._classes.opacity), this._AM.removeAttribute(H), this._PM.removeAttribute(H)), n));
        const i = d.find(
          `[${X}]`,
          this._modal
        );
        this._addActiveClassToTip(i, t);
      }
  }
  _setTipsAndTimesDependOnInputValue(t, e) {
    const { inline: i, format12: n } = this._options;
    if (this._isInvalidTimeFormat)
      this._hour.textContent = "12", this._minutes.textContent = "00", i || h.addStyle(this._hand, {
        transform: "rotateZ(0deg)"
      }), n && (h.addClass(this._PM, this._classes.opacity), this._PM.setAttribute(H, ""));
    else {
      const o = t > 12 ? t * 30 - 360 : t * 30;
      this._hour.textContent = t, this._minutes.textContent = e, i || (h.addStyle(this._hand, {
        transform: `rotateZ(${o}deg)`
      }), h.addStyle(this._circle, {
        backgroundColor: "#1976d2"
      }), (Number(t) > 12 || t === "00") && h.addStyle(this._hand, {
        height: "21.5%"
      }));
    }
  }
  _listenToToggleKeydown() {
    c.on(
      this._element,
      "keydown",
      `[data-te-toggle='${this.toggleElement}']`,
      (t) => {
        t.keyCode === it && (t.preventDefault(), c.trigger(this.elementToggle, "click"));
      }
    );
  }
  _handleOpen() {
    const t = this._getContainer();
    K.on(
      this._element,
      "click",
      `[data-te-toggle='${this.toggleElement}']`,
      (e) => {
        if (this._options === null)
          return;
        const i = h.getDataAttribute(this.input, "toggle") !== null ? 200 : 0;
        setTimeout(() => {
          h.addStyle(this.elementToggle, {
            pointerEvents: "none"
          }), this.elementToggle.blur();
          let n;
          R(this.input)[0] === "" ? n = ["12", "00", "PM"] : n = R(this.input);
          const { modalID: o, inline: r, format12: a } = this._options, [l, p, u] = n, _ = $("div");
          if ((Number(l) > 12 || l === "00") && (this._isInner = !0), this.input.blur(), e.target.blur(), _.innerHTML = rg(this._options, this._classes), h.addClass(_, this._classes.modal), _.setAttribute(cl, ""), _.setAttribute("role", "dialog"), _.setAttribute("tabIndex", "-1"), _.setAttribute("id", o), r ? (this._popper = se(this.input, _, {
            placement: "bottom-start"
          }), t.appendChild(_)) : (t.appendChild(_), this._scrollBar.hide()), this._getDomElements(), this._animations ? this._toggleBackdropAnimation() : h.addClass(this._wrapper, this._classes.opacity), this._setActiveClassToTipsOnOpen(l, p, u), this._appendTimes(), this._setActiveClassToTipsOnOpen(l, p, u), this._setTipsAndTimesDependOnInputValue(l, p), this.input.value === "") {
            const f = d.find(
              `[${X}]`,
              this._modal
            );
            a && (h.addClass(this._PM, this._classes.opacity), this._PM.setAttribute(H, "")), this._hour.textContent = "12", this._minutes.textContent = "00", this._addActiveClassToTip(
              f,
              Number(this._hour.textContent)
            );
          }
          if (this._handleSwitchTimeMode(), this._handleOkButton(), this._handleClose(), r)
            this._handleHoverInlineBtn(), this._handleDocumentClickInline(), this._handleInlineClicks();
          else {
            this._handleSwitchHourMinute(), this._handleClockClick(), this._handleKeyboard();
            const f = document.querySelector(
              `${Ts}[${H}]`
            );
            h.addClass(f, this._classes.opacity), h.addStyle(this._hour, {
              pointerEvents: "none"
            }), h.addStyle(this._minutes, {
              pointerEvents: ""
            });
          }
          this._focusTrap = new zi(this._wrapper, {
            event: "keydown",
            condition: ({ key: f }) => f === "Tab"
          }), this._focusTrap.trap();
        }, i);
      }
    );
  }
  _handleInlineClicks() {
    let t, e;
    const i = (g) => {
      let m = g;
      return m > 59 ? m = 0 : m < 0 && (m = 59), m;
    }, n = (g) => {
      let m = g;
      return this._options.format24 ? (m > 24 ? m = 1 : m < 0 && (m = 23), m > 23 && (m = 0)) : (m > 12 ? m = 1 : m < 1 && (m = 12), m > 12 && (m = 1)), m;
    }, o = (g) => {
      const m = n(g);
      this._hour.textContent = this._setHourOrMinute(m);
    }, r = (g) => {
      const m = i(g);
      this._minutes.textContent = this._setHourOrMinute(m);
    }, a = () => {
      t = n(t) + 1, o(t);
    }, l = () => {
      e = i(e) + 1, r(e);
    }, p = () => {
      t = n(t) - 1, o(t);
    }, u = () => {
      e = i(e) - 1, r(e);
    }, _ = () => {
      clearInterval(this._interval), clearTimeout(this._timeoutInterval);
    }, f = (g) => {
      _(), this._timeoutInterval = setTimeout(() => {
        this._interval = setInterval(g, 100);
      }, 500);
    };
    K.on(
      this._modal,
      "click mousedown mouseup touchstart touchend contextmenu",
      `[${ao}], [${lo}]`,
      (g) => {
        t = Number(this._hour.textContent), e = Number(this._minutes.textContent);
        const { target: m, type: b } = g, v = b === "mousedown" || b === "touchstart";
        m.closest(`[${ao}]`) ? m.closest(`[${ao}]`).parentNode.hasAttribute(rl) ? v ? f(a) : b === "mouseup" || b === "touchend" || b === "contextmenu" ? _() : a() : v ? f(l) : b === "mouseup" || b === "touchend" || b === "contextmenu" ? _() : l() : m.closest(`[${lo}]`) && (m.closest(`[${lo}]`).parentNode.hasAttribute(rl) ? v ? f(p) : b === "mouseup" || b === "touchend" ? _() : p() : v ? f(u) : b === "mouseup" || b === "touchend" ? _() : u());
      }
    ), c.on(window, vs, (g) => {
      const m = g.code, b = document.activeElement.hasAttribute(Cs), v = document.activeElement.hasAttribute(
        uo
      ), T = document.activeElement === document.body;
      switch (t = Number(this._hour.textContent), e = Number(this._minutes.textContent), m) {
        case "ArrowUp":
          g.preventDefault(), T || b ? (this._hour.focus(), a()) : v && l();
          break;
        case "ArrowDown":
          g.preventDefault(), T || b ? (this._hour.focus(), p()) : v && u();
          break;
      }
    });
  }
  _handleClose() {
    c.on(
      this._modal,
      "click",
      `[${ho}], [${oo}], [${ol}]`,
      ({ target: t }) => {
        const { closeModalOnBackdropClick: e } = this._options, i = () => {
          var n;
          h.addStyle(this.elementToggle, {
            pointerEvents: "auto"
          }), this._animations && this._toggleBackdropAnimation(!0), this._removeModal(), (n = this._focusTrap) == null || n.disable(), this._focusTrap = null, this.elementToggle ? this.elementToggle.focus() : this.input && this.input.focus();
        };
        if (t.hasAttribute(ol)) {
          this._toggleAmPm("PM"), this.input.value = "", this.input.removeAttribute(H);
          let n;
          R(this.input)[0] === "" ? n = ["12", "00", "PM"] : n = R(this.input);
          const [o, r, a] = n;
          this._setTipsAndTimesDependOnInputValue("12", "00"), this._setActiveClassToTipsOnOpen(o, r, a), this._hour.click();
        } else
          (t.hasAttribute(oo) || t.hasAttribute(ro) || t.hasAttribute(ho) && e) && i();
      }
    );
  }
  showValueInput() {
    return this.input.value;
  }
  _handleOkButton() {
    K.on(
      this._modal,
      "click",
      `[${ro}]`,
      () => {
        let { maxTime: t, minTime: e } = this._options;
        const {
          format12: i,
          format24: n,
          readOnly: o,
          focusInputAfterApprove: r,
          disablePast: a,
          disableFuture: l
        } = this._options, p = this._document.querySelector(
          `${Es}[${H}]`
        ), u = `${this._hour.textContent}:${this._minutes.textContent}`, _ = Number(this._hour.textContent), f = _ === 12 && i ? 0 : _, g = Number(this._minutes.textContent);
        e = Gt(e, a, i), t = qt(t, l, i);
        let [m, b, v] = R(
          t,
          !1
        ), [T, y, C] = R(
          e,
          !1
        );
        T = T === "12" && i ? "00" : T, m = m === "12" && i ? "00" : m;
        const E = f < Number(T), w = f > Number(m);
        let k = !0;
        p && (k = v === p.textContent);
        let D = !0;
        p && (D = C === p.textContent);
        const O = g > b && f === Number(m), x = g < y && f === Number(T);
        if (this.input.setAttribute(H, ""), h.addStyle(this.elementToggle, {
          pointerEvents: "auto"
        }), t !== "") {
          if (k && (w || O))
            return;
          if (v === "AM" && p.textContent === "PM")
            return;
        }
        e !== "" && (D && (E || x) || C === "PM" && p.textContent === "AM") || cg(
          this._options,
          this.input,
          this._hour.textContent
        ) !== void 0 && (this._isInvalidTimeFormat && this.input.removeAttribute(co), !o && r && this.input.focus(), h.addStyle(this.elementToggle, {
          pointerEvents: "auto"
        }), n ? this.input.value = u : p === null ? this.input.value = `${u} PM` : this.input.value = `${u} ${p.textContent}`, this._animations && this._toggleBackdropAnimation(!0), this._removeModal(), c.trigger(this.input, "input.te.timepicker"), c.trigger(this.input, "input"));
      }
    );
  }
  _handleHoverInlineBtn() {
    K.on(
      this._modal,
      "mouseover mouseleave",
      `[${Tg}]`,
      ({ type: t, target: e }) => {
        const i = d.find(
          `[${bg}]`,
          this._modal
        ), n = d.find(
          `[${vg}]`,
          this._modal
        ), o = (l, p) => l.forEach((u) => {
          if (p) {
            h.addClass(u, this._classes.opacity), u.setAttribute(H, "");
            return;
          }
          h.removeClass(u, this._classes.opacity), u.removeAttribute(H);
        }), a = e.hasAttribute(Cs) ? i : n;
        o(a, t === "mouseover");
      }
    );
  }
  _handleDocumentClickInline() {
    c.on(document, qa, ({ target: t }) => {
      if (this._modal && !this._modal.contains(t) && !t.hasAttribute(gg)) {
        if (clearInterval(this._interval), h.addStyle(this.elementToggle, {
          pointerEvents: "auto"
        }), this._removeModal(), !this._animations)
          return;
        this._toggleBackdropAnimation(!0);
      }
    });
  }
  _handleSwitchHourMinute() {
    lg(
      "click",
      Ts,
      this._classes
    ), c.on(
      this._modal,
      "click",
      Ts,
      () => {
        const { format24: t } = this._options, e = d.find(
          Ts,
          this._modal
        ), i = d.find(
          `[${q}]`,
          this._modal
        ), n = d.find(
          `[${X}]`,
          this._modal
        ), o = d.find(
          `[${ht}]`,
          this._modal
        ), r = Number(this._hour.textContent), a = Number(this._minutes.textContent), l = (p, u) => {
          n.forEach((f) => f.remove()), i.forEach((f) => f.remove()), h.addClass(this._hand, this._classes.transform), setTimeout(() => {
            h.removeClass(this._hand, this._classes.transform);
          }, 401), this._getAppendClock(p, `[${ue}]`, u);
          const _ = () => {
            const f = d.find(
              `[${X}]`,
              this._modal
            ), g = d.find(
              `[${q}]`,
              this._modal
            );
            this._addActiveClassToTip(f, r), this._addActiveClassToTip(g, a);
          };
          if (!t)
            setTimeout(() => {
              _();
            }, 401);
          else {
            const f = d.find(
              `[${ht}]`,
              this._modal
            );
            setTimeout(() => {
              this._addActiveClassToTip(f, r), _();
            }, 401);
          }
        };
        e.forEach((p) => {
          p.hasAttribute(H) && (p.hasAttribute(uo) ? (h.addClass(this._hand, this._classes.transform), h.addStyle(this._hand, {
            transform: `rotateZ(${this._minutes.textContent * 6}deg)`,
            height: "calc(40% + 1px)"
          }), t && o.length > 0 && o.forEach((u) => u.remove()), l(
            this.minutesArray,
            q
          ), this._hour.style.pointerEvents = "", this._minutes.style.pointerEvents = "none") : p.hasAttribute(Cs) && (h.addStyle(this._hand, {
            transform: `rotateZ(${this._hour.textContent * 30}deg)`
          }), Number(this._hour.textContent) > 12 ? (h.addStyle(this._hand, {
            transform: `rotateZ(${this._hour.textContent * 30 - 360}deg)`,
            height: "21.5%"
          }), Number(this._hour.textContent) > 12 && h.addStyle(this._hand, {
            height: "21.5%"
          })) : h.addStyle(this._hand, {
            height: "calc(40% + 1px)"
          }), t && this._getAppendClock(
            this.innerHours,
            `[${mi}]`,
            ht
          ), o.length > 0 && o.forEach((u) => u.remove()), l(
            this.hoursArray,
            X
          ), h.addStyle(this._hour, {
            pointerEvents: "none"
          }), h.addStyle(this._minutes, {
            pointerEvents: ""
          })));
        });
      }
    );
  }
  _handleDisablingTipsMaxTime(t, e, i, n) {
    if (!this._options.maxTime && !this._options.disableFuture)
      return;
    const o = d.find(
      `[${X}]`
    ), r = d.find(
      `[${ht}]`
    ), a = d.find(
      `[${q}]`
    );
    if (!e || e === t) {
      Ua(
        r,
        n,
        this._classes,
        this._options.format12
      ), Ua(
        o,
        n,
        this._classes,
        this._options.format12
      ), hg(
        a,
        i,
        n,
        this._hour.textContent,
        this._classes,
        this._options.format12
      );
      return;
    }
    e === "AM" && t === "PM" && (o.forEach((l) => {
      h.addClass(l, this._classes.tipsDisabled), l.setAttribute(jt, "");
    }), a.forEach((l) => {
      h.addClass(l, this._classes.tipsDisabled), l.setAttribute(jt, "");
    }));
  }
  _handleDisablingTipsMinTime(t, e, i, n) {
    if (!this._options.minTime && !this._options.disablePast)
      return;
    const o = d.find(
      `[${X}]`
    ), r = d.find(
      `[${ht}]`
    ), a = d.find(
      `[${q}]`
    );
    !e || e === t ? (Xa(
      o,
      n,
      this._classes,
      this._options.format12
    ), Xa(
      r,
      n,
      this._classes,
      this._options.format12
    ), dg(
      a,
      i,
      n,
      this._hour.textContent,
      this._classes,
      this._options.format12
    )) : e === "PM" && t === "AM" && (o.forEach((l) => {
      h.addClass(l, this._classes.tipsDisabled), l.setAttribute(jt, "");
    }), a.forEach((l) => {
      h.addClass(l, this._classes.tipsDisabled), l.setAttribute(jt, "");
    }));
  }
  _handleSwitchTimeMode() {
    c.on(
      document,
      "click",
      Es,
      ({ target: t }) => {
        let { maxTime: e, minTime: i } = this._options;
        const { disablePast: n, disableFuture: o, format12: r } = this._options;
        i = Gt(i, n, r), e = qt(e, o, r);
        const [a, l, p] = R(
          e,
          !1
        ), [u, _, f] = R(
          i,
          !1
        ), g = d.find(
          `[${X}]`
        ), m = d.find(
          `[${q}]`
        );
        (() => {
          g.forEach((v) => {
            h.removeClass(v, this._classes.tipsDisabled), v.removeAttribute(jt);
          }), m.forEach((v) => {
            h.removeClass(v, this._classes.tipsDisabled), v.removeAttribute(jt);
          });
        })(), this._handleDisablingTipsMinTime(
          t.textContent,
          f,
          _,
          u
        ), this._handleDisablingTipsMaxTime(
          t.textContent,
          p,
          l,
          a
        ), this._toggleAmPm(t.textContent), t.hasAttribute(H) || (d.find(
          Es
        ).forEach((T) => {
          T.hasAttribute(H) && (h.removeClass(T, this._classes.opacity), T.removeAttribute(H));
        }), h.addClass(t, this._classes.opacity), t.setAttribute(H, ""));
      }
    );
  }
  _handleClockClick() {
    let { maxTime: t, minTime: e } = this._options;
    const { disablePast: i, disableFuture: n, format12: o } = this._options;
    e = Gt(e, i, o), t = qt(t, n, o);
    const r = R(t, !1)[2], a = R(e, !1)[2], l = R(t, !1)[0], p = R(e, !1)[0], u = d.findOne(
      `[${al}]`
    );
    K.on(
      document,
      `${Za} ${Qa} ${Ja} ${tl} ${el} ${nl} ${il} ${sl}`,
      "",
      (_) => {
        bs() || _.preventDefault();
        const { type: f, target: g } = _, { closeModalOnMinutesClick: m, switchHoursToMinutesOnClick: b } = this._options, v = d.findOne(
          `[${q}]`,
          this._modal
        ) !== null, T = d.findOne(
          `[${X}]`,
          this._modal
        ) !== null, y = d.findOne(
          `[${ht}]`,
          this._modal
        ) !== null, C = d.find(
          `[${q}]`,
          this._modal
        ), E = za(_, u), w = u.offsetWidth / 2;
        let k = Math.atan2(E.y - w, E.x - w);
        if (bs()) {
          const L = za(_, u, !0);
          k = Math.atan2(L.y - w, L.x - w);
        }
        let D = null, O = null, x = null;
        if (f === "mousedown" || f === "mousemove" || f === "touchmove" || f === "touchstart")
          (f === "mousedown" || f === "touchstart" || f === "touchmove") && (this._hasTargetInnerClass(g) || g.hasAttribute(al) || g.hasAttribute(ue) || g.hasAttribute(q) || g.hasAttribute(X) || g.hasAttribute(_o) || g.hasAttribute(po) || g.hasAttribute(ll) || g.hasAttribute(As)) && (this._isMouseMove = !0, bs() && _.touches && (D = _.touches[0].clientX, O = _.touches[0].clientY, x = document.elementFromPoint(D, O)));
        else if (f === "mouseup" || f === "touchend") {
          if (this._isMouseMove = !1, this._hasTargetInnerClass(g) || g.hasAttribute(ue) || g.hasAttribute(X) || g.hasAttribute(_o) || g.hasAttribute(po) || g.hasAttribute(ll) || g.hasAttribute(As)) {
            if ((T || y) && b) {
              const L = Number(this._hour.textContent) > l || Number(this._hour.textContent) < p;
              if (this._options.format24 && l !== "" && p !== "" && L)
                return;
              if (this._options.format24 && p !== "" && Number(this._hour.textContent) < p)
                return;
            }
            c.trigger(this._minutes, "click");
          }
          if (v && m) {
            const L = d.findOne(
              `[${ro}]`,
              this._modal
            );
            c.trigger(L, "click");
          }
        }
        if (v) {
          let L;
          const S = Math.trunc(k * 180 / Math.PI) + 90, { degrees: N, minute: P } = this._makeMinutesDegrees(S, L);
          if (this._handlerMaxMinMinutesOptions(N, P) === void 0)
            return;
          const { degrees: ot, minute: rt } = this._handlerMaxMinMinutesOptions(N, P);
          if (this._isMouseMove) {
            if (h.addStyle(this._hand, {
              transform: `rotateZ(${ot}deg)`
            }), rt === void 0)
              return;
            const G = () => rt >= 10 || rt === "00" ? rt : `0${rt}`;
            this._minutes.textContent = G(), this._toggleClassActive(
              this.minutesArray,
              this._minutes,
              C
            ), this._toggleBackgroundColorCircle(
              `[${q}]`
            ), this._objWithDataOnChange.degreesMinutes = ot, this._objWithDataOnChange.minutes = rt;
          }
        }
        if (T || y) {
          let L, S = Math.trunc(k * 180 / Math.PI) + 90;
          if (S = Math.round(S / 30) * 30, h.addStyle(this._circle, {
            backgroundColor: "#1976d2"
          }), this._makeHourDegrees(g, S, L) === void 0)
            return;
          const N = () => {
            if (bs() && S && x) {
              const { degrees: P, hour: ot } = this._makeHourDegrees(x, S, L);
              return this._handleMoveHand(
                x,
                ot,
                P
              );
            } else {
              const { degrees: P, hour: ot } = this._makeHourDegrees(g, S, L);
              return this._handleMoveHand(g, ot, P);
            }
          };
          this._objWithDataOnChange.degreesHours = S, this._handlerMaxMinHoursOptions(
            S,
            l,
            p,
            r,
            a,
            _
          ) && N();
        }
        _.stopPropagation();
      }
    );
  }
  _hasTargetInnerClass(t) {
    return t.hasAttribute(mi) || t.hasAttribute(ht) || t.hasAttribute(ys);
  }
  _handleMoveHand(t, e, i) {
    const n = d.find(
      `[${X}]`,
      this._modal
    ), o = d.find(
      `[${ht}]`,
      this._modal
    );
    this._isMouseMove && (this._hasTargetInnerClass(t) ? h.addStyle(this._hand, {
      height: "21.5%"
    }) : h.addStyle(this._hand, {
      height: "calc(40% + 1px)"
    }), h.addStyle(this._hand, {
      transform: `rotateZ(${i}deg)`
    }), this._hour.textContent = e >= 10 || e === "00" ? e : `0${e}`, this._toggleClassActive(this.hoursArray, this._hour, n), this._toggleClassActive(this.innerHours, this._hour, o), this._objWithDataOnChange.hour = e >= 10 || e === "00" ? e : `0${e}`);
  }
  _handlerMaxMinMinutesOptions(t, e) {
    let { maxTime: i, minTime: n } = this._options;
    const { format12: o, increment: r, disablePast: a, disableFuture: l } = this._options;
    n = Gt(n, a, o), i = qt(i, l, o);
    const p = R(i, !1)[1], u = R(n, !1)[1], _ = R(i, !1)[0], f = R(n, !1)[0], g = f === "12" && o ? "0" : f, m = _ === "12" && o ? "0" : _, b = R(i, !1)[2], v = R(n, !1)[2], T = p !== "" ? p * 6 : "", y = u !== "" ? u * 6 : "", C = Number(this._hour.textContent), E = C === 12 && o ? 0 : C;
    if (!b && !v) {
      if (i !== "" && n !== "") {
        if (Number(m) === E && t > T || Number(g) === E && t < y)
          return t;
      } else if (n !== "" && E <= Number(g)) {
        if (t <= y - 6)
          return t;
      } else if (i !== "" && E >= Number(m) && t >= T + 6)
        return t;
    } else {
      if (n !== "") {
        if (v === "PM" && this._isAmEnabled)
          return;
        if (v === "PM" && this._isPmEnabled) {
          if (E < Number(g))
            return;
          if (E <= Number(g) && t <= y - 6)
            return t;
        } else if (v === "AM" && this._isAmEnabled) {
          if (E < Number(g))
            return;
          if (E <= Number(g) && t <= y - 6)
            return t;
        }
      }
      if (i !== "") {
        if (b === "AM" && this._isPmEnabled)
          return;
        if (b === "PM" && this._isPmEnabled) {
          if (E >= Number(m) && t >= T + 6)
            return t;
        } else if (b === "AM" && this._isAmEnabled && E >= Number(m) && t >= T + 6)
          return t;
      }
    }
    return r && (t = Math.round(t / 30) * 30), t < 0 ? t = 360 + t : t >= 360 && (t = 0), {
      degrees: t,
      minute: e
    };
  }
  _removeModal() {
    this._animations ? setTimeout(() => {
      this._removeModalElements(), this._scrollBar.reset();
    }, 300) : (this._removeModalElements(), this._scrollBar.reset()), K.off(
      this._document,
      `${qa} ${vs} ${Za} ${Qa} ${Ja} ${tl} ${el} ${nl} ${il} ${sl}`
    ), c.off(window, vs);
  }
  _removeModalElements() {
    this._modal && this._modal.remove();
  }
  _toggleBackdropAnimation(t = !1) {
    t ? this._wrapper.classList.add("animate-[fade-out_350ms_ease-in-out]") : (this._wrapper.classList.add("animate-[fade-in_350ms_ease-in-out]"), this._options.inline || h.addClass(this._clock, this._classes.clockAnimation)), setTimeout(() => {
      this._wrapper.classList.remove(
        "animate-[fade-out_350ms_ease-in-out]",
        "animate-[fade-in_350ms_ease-in-out]"
      );
    }, 351);
  }
  _addActiveClassToTip(t, e) {
    t.forEach((i) => {
      Number(i.textContent) === Number(e) && (h.addClass(i, this._classes.tipsActive), i.setAttribute(H, ""));
    });
  }
  _setHourOrMinute(t) {
    return t < 10 ? `0${t}` : t;
  }
  _appendTimes() {
    const { format24: t } = this._options;
    if (t) {
      this._getAppendClock(
        this.hoursArray,
        `[${ue}]`,
        X
      ), this._getAppendClock(
        this.innerHours,
        `[${mi}]`,
        ht
      );
      return;
    }
    this._getAppendClock(
      this.hoursArray,
      `[${ue}]`,
      X
    );
  }
  _getConfig(t) {
    const e = h.getDataAttributes(this._element);
    return t = {
      ...wg,
      ...e,
      ...t
    }, I(Bi, t, kg), t;
  }
  _getClasses(t) {
    const e = h.getDataClassAttributes(this._element);
    return t = {
      ...xg,
      ...e,
      ...t
    }, I(Bi, t, Og), t;
  }
  _getContainer() {
    return d.findOne(this._options.container);
  }
  _getValidate(t) {
    const { format24: e, format12: i, appendValidationInfo: n } = this._options;
    K.on(this.input, t, ({ target: o }) => {
      if (this._options === null || this.input.value === "")
        return;
      const r = /^(0?[1-9]|1[012])(:[0-5]\d) [APap][mM]$/, a = /^([01]\d|2[0-3])(:[0-5]\d)$/, l = r.test(o.value);
      if (a.test(o.value) !== !0 && e || l !== !0 && i) {
        n && this.input.setAttribute(co, ""), h.addStyle(o, { marginBottom: 0 }), this._isInvalidTimeFormat = !0;
        return;
      }
      this.input.removeAttribute(co), this._isInvalidTimeFormat = !1;
      const u = d.findOne(
        `[${Cg}]`
      );
      u !== null && u.remove();
    });
  }
  // Static
  static getInstance(t) {
    return A.getData(t, Js);
  }
  static getOrCreateInstance(t, e = {}) {
    return this.getInstance(t) || new this(t, typeof e == "object" ? e : null);
  }
}
const Ig = {
  threshold: 10,
  direction: "all"
};
let Dg = class {
  constructor(t, e) {
    this._element = t, this._startPosition = null, this._options = {
      ...Ig,
      ...e
    };
  }
  handleTouchStart(t) {
    this._startPosition = this._getCoordinates(t);
  }
  handleTouchMove(t) {
    if (!this._startPosition)
      return;
    const e = this._getCoordinates(t), i = {
      x: e.x - this._startPosition.x,
      y: e.y - this._startPosition.y
    }, n = this._getDirection(i);
    if (this._options.direction === "all") {
      if (n.y.value < this._options.threshold && n.x.value < this._options.threshold)
        return;
      const r = n.y.value > n.x.value ? n.y.direction : n.x.direction;
      c.trigger(this._element, `swipe${r}`), c.trigger(this._element, "swipe", { direction: r }), this._startPosition = null;
      return;
    }
    const o = this._options.direction === "left" || this._options === "right" ? "x" : "y";
    n[o].direction === this._options.direction && n[o].value > this._options.threshold && (c.trigger(this._element, `swipe${n[o].direction}`), this._startPosition = null);
  }
  handleTouchEnd() {
    this._startPosition = null;
  }
  _getCoordinates(t) {
    const [e] = t.touches;
    return {
      x: e.clientX,
      y: e.clientY
    };
  }
  _getDirection(t) {
    return {
      x: {
        direction: t.x < 0 ? "left" : "right",
        value: Math.abs(t.x)
      },
      y: {
        direction: t.y < 0 ? "up" : "down",
        value: Math.abs(t.y)
      }
    };
  }
}, $g = class {
  constructor(t, e = "swipe", i = {}) {
    this._element = t, this._event = e, this.swipe = new Dg(t, i), this._touchStartHandler = this._handleTouchStart.bind(this), this._touchMoveHandler = this._handleTouchMove.bind(this), this._touchEndHandler = this._handleTouchEnd.bind(this);
  }
  dispose() {
    this._element.removeEventListener("touchstart", this._touchStartHandler), this._element.removeEventListener("touchmove", this._touchMoveHandler), window.removeEventListener("touchend", this._touchEndHandler);
  }
  init() {
    this._element.addEventListener(
      "touchstart",
      (t) => this._handleTouchStart(t)
    ), this._element.addEventListener(
      "touchmove",
      (t) => this._handleTouchMove(t)
    ), window.addEventListener("touchend", (t) => this._handleTouchEnd(t));
  }
  _handleTouchStart(t) {
    this[this._event].handleTouchStart(t);
  }
  _handleTouchMove(t) {
    this[this._event].handleTouchMove(t);
  }
  _handleTouchEnd(t) {
    this[this._event].handleTouchEnd(t);
  }
};
const hl = "sidenav", ws = "te.sidenav", Lg = "data-te-sidenav-rotate-icon-ref", fo = "[data-te-sidenav-toggle-ref]", Ng = "[data-te-collapse-init]", Mg = '[data-te-sidenav-slim="true"]', Rg = '[data-te-sidenav-slim="false"]', Pg = "[data-te-sidenav-menu-ref]", Le = "[data-te-sidenav-collapse-ref]", gi = "[data-te-sidenav-link-ref]", Bg = W() ? 100 : -100, Hg = W() ? -100 : 100, Vg = {
  sidenavAccordion: "(boolean)",
  sidenavBackdrop: "(boolean)",
  sidenavBackdropClass: "(null|string)",
  sidenavCloseOnEsc: "(boolean)",
  sidenavColor: "(string)",
  sidenavContent: "(null|string)",
  sidenavExpandable: "(boolean)",
  sidenavExpandOnHover: "(boolean)",
  sidenavFocusTrap: "(boolean)",
  sidenavHidden: "(boolean)",
  sidenavMode: "(string)",
  sidenavModeBreakpointOver: "(null|string|number)",
  sidenavModeBreakpointSide: "(null|string|number)",
  sidenavModeBreakpointPush: "(null|string|number)",
  sidenavBreakpointSm: "(number)",
  sidenavBreakpointMd: "(number)",
  sidenavBreakpointLg: "(number)",
  sidenavBreakpointXl: "(number)",
  sidenavBreakpoint2xl: "(number)",
  sidenavScrollContainer: "(null|string)",
  sidenavSlim: "(boolean)",
  sidenavSlimCollapsed: "(boolean)",
  sidenavSlimWidth: "(number)",
  sidenavPosition: "(string)",
  sidenavRight: "(boolean)",
  sidenavTransitionDuration: "(number)",
  sidenavWidth: "(number)"
}, Wg = {
  sidenavAccordion: !1,
  sidenavBackdrop: !0,
  sidenavBackdropClass: null,
  sidenavCloseOnEsc: !0,
  sidenavColor: "primary",
  sidenavContent: null,
  sidenavExpandable: !0,
  sidenavExpandOnHover: !1,
  sidenavFocusTrap: !0,
  sidenavHidden: !0,
  sidenavMode: "over",
  sidenavModeBreakpointOver: null,
  sidenavModeBreakpointSide: null,
  sidenavModeBreakpointPush: null,
  sidenavBreakpointSm: 640,
  sidenavBreakpointMd: 768,
  sidenavBreakpointLg: 1024,
  sidenavBreakpointXl: 1280,
  sidenavBreakpoint2xl: 1536,
  sidenavScrollContainer: null,
  sidenavSlim: !1,
  sidenavSlimCollapsed: !1,
  sidenavSlimWidth: 77,
  sidenavPosition: "fixed",
  sidenavRight: !1,
  sidenavTransitionDuration: 300,
  sidenavWidth: 240
};
class Ci {
  constructor(t, e = {}) {
    wt(this, "_addBackdropOnInit", () => {
      this._options.sidenavHidden || (this._backdrop.show(), c.off(this._element, "transitionend", this._addBackdropOnInit));
    });
    this._element = t, this._options = e, this._ID = et(""), this._content = null, this._initialContentStyle = null, this._slimCollapsed = !1, this._activeNode = null, this._tempSlim = !1, this._backdrop = this._initializeBackDrop(), this._focusTrap = null, this._perfectScrollbar = null, this._touch = null, this._setModeFromBreakpoints(), this.escHandler = (i) => {
      i.keyCode === we && this.toggler && Mt(this.toggler) && (this._update(!1), c.off(window, "keydown", this.escHandler));
    }, this.hashHandler = () => {
      this._setActiveElements();
    }, t && (A.setData(t, ws, this), this._setup()), this.options.sidenavBackdrop && !this.options.sidenavHidden && this.options.sidenavMode === "over" && c.on(this._element, "transitionend", this._addBackdropOnInit), this._didInit = !1, this._init();
  }
  // Getters
  static get NAME() {
    return hl;
  }
  get container() {
    if (this.options.sidenavPosition === "fixed")
      return d.findOne("body");
    const t = (e) => !e.parentNode || e.parentNode === document ? e : e.parentNode.style.position === "relative" || e.parentNode.classList.contains("relative") ? e.parentNode : t(e.parentNode);
    return t(this._element);
  }
  get isVisible() {
    let t = 0, e = window.innerWidth;
    if (this.options.sidenavPosition !== "fixed") {
      const n = this.container.getBoundingClientRect();
      t = n.x, e = n.x + n.width;
    }
    const { x: i } = this._element.getBoundingClientRect();
    if (this.options.sidenavRight && !W() || !this.options.sidenavRight && W()) {
      let n = 0;
      if (this.container.scrollHeight > this.container.clientHeight && (n = this.container.offsetWidth - this.container.clientWidth), this.container.tagName === "BODY") {
        const o = document.documentElement.clientWidth;
        n = Math.abs(window.innerWidth - o);
      }
      return Math.abs(i + n - e) > 10;
    }
    return Math.abs(i - t) < 10;
  }
  get links() {
    return d.find(gi, this._element);
  }
  get navigation() {
    return d.find(Pg, this._element);
  }
  get options() {
    const t = {
      ...Wg,
      ...h.getDataAttributes(this._element),
      ...this._options
    };
    return I(hl, t, Vg), t;
  }
  get sidenavStyle() {
    return {
      width: `${this.width}px`,
      height: this.options.sidenavPosition === "fixed" ? "100vh" : "100%",
      position: this.options.sidenavPosition,
      transition: `all ${this.transitionDuration} linear`
    };
  }
  get toggler() {
    return d.find(fo).find(
      (e) => {
        const i = h.getDataAttribute(e, "target");
        return d.findOne(i) === this._element;
      }
    );
  }
  get transitionDuration() {
    return `${this.options.sidenavTransitionDuration / 1e3}s`;
  }
  get translation() {
    return this.options.sidenavRight ? Hg : Bg;
  }
  get width() {
    return this._slimCollapsed ? this.options.sidenavSlimWidth : this.options.sidenavWidth;
  }
  get isBackdropVisible() {
    return !!this._backdrop._element;
  }
  // Public
  changeMode(t) {
    this._setMode(t);
  }
  dispose() {
    c.off(window, "keydown", this.escHandler), this.options.sidenavBackdrop && this._backdrop.dispose(), c.off(window, "hashchange", this.hashHandler), this._touch.dispose(), A.removeData(this._element, ws), this._element = null;
  }
  hide() {
    this._emitEvents(!1), this._update(!1), this._options.sidenavBackdrop && this.isBackdropVisible && this._backdrop.hide();
  }
  show() {
    this._emitEvents(!0), this._update(!0), this._options.sidenavBackdrop && this._options.sidenavMode === "over" && this._backdrop.show();
  }
  toggle() {
    this._emitEvents(!this.isVisible), this._update(!this.isVisible);
  }
  toggleSlim() {
    this._setSlim(!this._slimCollapsed);
  }
  update(t) {
    this._options = t, this._setup();
  }
  getBreakpoint(t) {
    return this._transformBreakpointValuesToObject()[t];
  }
  // Private
  _init() {
    this._didInit || (c.on(
      document,
      "click",
      fo,
      Ci.toggleSidenav()
    ), this._didInit = !0);
  }
  _transformBreakpointValuesToObject() {
    return {
      sm: this.options.sidenavBreakpointSm,
      md: this.options.sidenavBreakpointMd,
      lg: this.options.sidenavBreakpointLg,
      xl: this.options.sidenavBreakpointXl,
      "2xl": this.options.sidenavBreakpoint2xl
    };
  }
  _setModeFromBreakpoints() {
    const t = window.innerWidth, e = this._transformBreakpointValuesToObject();
    if (t === void 0 || !e)
      return;
    const i = typeof this.options.sidenavModeBreakpointOver == "number" ? t - this.options.sidenavModeBreakpointOver : t - e[this.options.sidenavModeBreakpointOver], n = typeof this.options.sidenavModeBreakpointSide == "number" ? t - this.options.sidenavModeBreakpointSide : t - e[this.options.sidenavModeBreakpointSide], o = typeof this.options.sidenavModeBreakpointPush == "number" ? t - this.options.sidenavModeBreakpointPush : t - e[this.options.sidenavModeBreakpointPush], r = (l, p) => l - p < 0 ? -1 : p - l < 0 ? 1 : 0, a = [i, n, o].filter((l) => l != null && l >= 0).sort(r)[0];
    i > 0 && i === a ? (this._options.sidenavMode = "over", this._options.sidenavHidden = !0) : n > 0 && n === a ? this._options.sidenavMode = "side" : o > 0 && o === a && (this._options.sidenavMode = "push");
  }
  _collapseItems() {
    this.navigation.forEach((t) => {
      d.find(Le, t).forEach((i) => {
        Qt.getInstance(i).hide();
      });
    });
  }
  _getOffsetValue(t, { index: e, property: i, offsets: n }) {
    const o = this._getPxValue(
      this._initialContentStyle[e][n[i].property]
    ), r = t ? n[i].value : 0;
    return o + r;
  }
  _getProperty(...t) {
    return t.map((e, i) => i === 0 ? e : e[0].toUpperCase().concat(e.slice(1))).join("");
  }
  _getPxValue(t) {
    return t ? parseFloat(t) : 0;
  }
  _handleSwipe(t, e) {
    e && this._slimCollapsed && this.options.sidenavSlim && this.options.sidenavExpandable ? this.toggleSlim() : e || (this._slimCollapsed || !this.options.sidenavSlim || !this.options.sidenavExpandable ? this.toggler && Mt(this.toggler) && this.toggle() : this.toggleSlim());
  }
  _isActive(t, e) {
    return e ? e === t : t.attributes.href ? new URL(t, window.location.href).href === window.location.href : !1;
  }
  _isAllToBeCollapsed() {
    return d.find(
      Ng,
      this._element
    ).filter(
      (i) => i.getAttribute("aria-expanded") === "true"
    ).length === 0;
  }
  _isAllCollapsed() {
    return d.find(Le, this._element).filter(
      (t) => Mt(t)
    ).length === 0;
  }
  _initializeBackDrop() {
    if (!this.options.sidenavBackdrop)
      return;
    const t = this.options.sidenavBackdropClass ? this.options.sidenavBackdropClass.split(" ") : this.options.sidenavPosition ? [
      "opacity-50",
      "transition-all",
      "duration-300",
      "ease-in-out",
      this.options.sidenavPosition,
      "top-0",
      "left-0",
      "z-50",
      "bg-black/10",
      "dark:bg-black-60",
      "w-full",
      "h-full",
      this._element.id
    ] : null;
    return new Cr({
      isVisible: this.options.sidenavBackdrop,
      isAnimated: !0,
      rootElement: this._element.parentNode,
      backdropClasses: t,
      clickCallback: () => this.hide()
    });
  }
  _updateBackdrop(t) {
    if (this.options.sidenavMode === "over") {
      t ? this._backdrop.show() : this.isBackdropVisible && this._backdrop.hide();
      return;
    }
    this.isBackdropVisible && this._backdrop.hide();
  }
  _setup() {
    this._setupTouch(), this.options.sidenavFocusTrap && this._setupFocusTrap(), this._setupCollapse(), this.options.sidenavSlim && this._setupSlim(), this._setupInitialStyling(), this._setupScrolling(), this.options.sidenavContent && this._setupContent(), this._setupActiveState(), this._setupRippleEffect(), this.options.sidenavHidden || this._updateOffsets(!0, !0), this.options.sidenavMode === "over" && this._setTabindex(!0);
  }
  _setupActiveState() {
    this._setActiveElements(), this.links.forEach((t) => {
      c.on(t, "click", () => this._setActiveElements(t)), c.on(t, "keydown", (e) => {
        e.keyCode === it && this._setActiveElements(t);
      });
    }), c.on(window, "hashchange", this.hashHandler);
  }
  _setupCollapse() {
    this.navigation.forEach((t, e) => {
      d.find(Le, t).forEach(
        (n, o) => this._setupCollapseList({ list: n, index: o, menu: t, menuIndex: e })
      );
    });
  }
  _generateCollpaseID(t, e) {
    return `sidenav-collapse-${this._ID}-${e}-${t}`;
  }
  _setupCollapseList({ list: t, index: e, menu: i, menuIndex: n }) {
    const o = this._generateCollpaseID(e, n);
    t.setAttribute("id", o), t.setAttribute("data-te-collapse-item", "");
    const [r] = d.prev(t, gi);
    h.setDataAttribute(r, "collapse-init", ""), r.setAttribute("href", `#${o}`), r.setAttribute("role", "button");
    const a = Qt.getInstance(t) || new Qt(t, {
      toggle: !1,
      parent: this.options.sidenavAccordion ? i : t
    });
    (t.dataset.teSidenavStateShow === "" || t.dataset.teCollapseShow === "") && this._rotateArrow(r, !1), c.on(r, "click", (l) => {
      this._toggleCategory(l, a, t), this._tempSlim && this._isAllToBeCollapsed() && (this._setSlim(!0), this._tempSlim = !1), this.options.sidenavMode === "over" && this._focusTrap && this._focusTrap.update();
    }), c.on(
      t,
      "show.te.collapse",
      () => this._rotateArrow(r, !1)
    ), c.on(
      t,
      "hide.te.collapse",
      () => this._rotateArrow(r, !0)
    ), c.on(t, "shown.te.collapse", () => {
      this.options.sidenavMode === "over" && this._focusTrap && this._focusTrap.update();
    }), c.on(t, "hidden.te.collapse", () => {
      this._tempSlim && this._isAllCollapsed() && (this._setSlim(!0), this._tempSlim = !1), this.options.sidenavMode === "over" && this._focusTrap && this._focusTrap.update();
    });
  }
  _setupContent() {
    this._content = d.find(this.options.sidenavContent), this._content.forEach((t) => {
      const e = [
        "!p",
        "!m",
        "!px",
        "!pl",
        "!pr",
        "!mx",
        "!ml",
        "!mr",
        "!-p",
        "!-m",
        "!-px",
        "!-pl",
        "!-pr",
        "!-mx",
        "!-ml",
        "!-mr"
      ];
      [...t.classList].filter(
        (n) => e.findIndex((o) => n.includes(o)) >= 0
      ).forEach((n) => t.classList.remove(n));
    }), this._initialContentStyle = this._content.map((t) => {
      const { paddingLeft: e, paddingRight: i, marginLeft: n, marginRight: o, transition: r } = window.getComputedStyle(t);
      return { paddingLeft: e, paddingRight: i, marginLeft: n, marginRight: o, transition: r };
    });
  }
  _setupFocusTrap() {
    this._focusTrap = new zi(
      this._element,
      {
        event: "keydown",
        condition: (t) => t.keyCode === ke,
        onlyVisible: !0
      },
      this.toggler
    );
  }
  _setupInitialStyling() {
    this._setColor(), h.style(this._element, this.sidenavStyle);
  }
  _setupScrolling() {
    let t = this._element;
    if (this.options.sidenavScrollContainer) {
      t = d.findOne(
        this.options.sidenavScrollContainer,
        this._element
      );
      const i = fd(t.parentNode.children).filter(
        (n) => n !== t
      ).reduce((n, o) => n + o.clientHeight, 0);
      h.style(t, {
        maxHeight: `calc(100% - ${i}px)`,
        position: "relative"
      });
    }
    this._perfectScrollbar = new Bh(t, {
      suppressScrollX: !0,
      handlers: ["click-rail", "drag-thumb", "wheel", "touch"]
    });
  }
  _setupSlim() {
    this._slimCollapsed = this.options.sidenavSlimCollapsed, this._toggleSlimDisplay(this._slimCollapsed), this.options.sidenavExpandOnHover && (this._element.addEventListener("mouseenter", () => {
      this._slimCollapsed && this._setSlim(!1);
    }), this._element.addEventListener("mouseleave", () => {
      this._slimCollapsed || this._setSlim(!0);
    }));
  }
  _setupRippleEffect() {
    this.links.forEach((t) => {
      let e = ei.getInstance(t), i = this.options.sidenavColor;
      if (e && e._options.sidenavColor !== this.options.sidenavColor)
        e.dispose();
      else if (e)
        return;
      (localStorage.theme === "dark" || !("theme" in localStorage) && window.matchMedia("(prefers-color-scheme: dark)").matches) && (i = "white"), e = new ei(t, { rippleColor: i });
    });
  }
  _setupTouch() {
    this._touch = new $g(this._element, "swipe", { threshold: 20 }), this._touch.init(), c.on(
      this._element,
      "swipeleft",
      (t) => this._handleSwipe(t, this.options.sidenavRight)
    ), c.on(
      this._element,
      "swiperight",
      (t) => this._handleSwipe(t, !this.options.sidenavRight)
    );
  }
  _setActive(t, e) {
    t.setAttribute("data-te-sidebar-state-active", ""), this._activeNode && t.removeAttribute("data-te-sidebar-state-active"), this._activeNode = t;
    const [i] = d.parents(
      this._activeNode,
      Le
    );
    if (!i) {
      this._setActiveCategory();
      return;
    }
    const [n] = d.prev(i, gi);
    this._setActiveCategory(n), !e && !this._slimCollapsed && Qt.getInstance(i).show();
  }
  _setActiveCategory(t) {
    this.navigation.forEach((e) => {
      d.find(Le, e).forEach((n) => {
        const [o] = d.prev(n, gi);
        o !== t ? o.removeAttribute("data-te-sidenav-state-active") : o.setAttribute("data-te-sidenav-state-active", "");
      });
    });
  }
  _setActiveElements(t) {
    this.navigation.forEach((e) => {
      d.find(gi, e).filter((n) => d.next(n, Le).length === 0).forEach((n) => {
        this._isActive(n, t) && n !== this._activeNode && this._setActive(n, t);
      });
    }), t && this._updateFocus(this.isVisible);
  }
  _setColor() {
    const t = [
      "primary",
      "secondary",
      "success",
      "info",
      "warning",
      "danger",
      "light",
      "dark"
    ], { sidenavColor: e } = this.options, i = t.includes(e) ? e : "primary";
    t.forEach((n) => {
      this._element.classList.remove(`sidenav-${n}`);
    }), h.addClass(this._element, `sidenav-${i}`);
  }
  _setContentOffsets(t, e, i) {
    this._content.forEach((n, o) => {
      const r = this._getOffsetValue(t, {
        index: o,
        property: "padding",
        offsets: e
      }), a = this._getOffsetValue(t, {
        index: o,
        property: "margin",
        offsets: e
      }), l = {};
      if (i || (l.transition = `all ${this.transitionDuration} linear`), l[e.padding.property] = `${r}px`, l[e.margin.property] = `${a}px`, h.style(n, l), !!t) {
        if (i) {
          h.style(n, {
            transition: this._initialContentStyle[o].transition
          });
          return;
        }
        c.on(n, "transitionend", () => {
          h.style(n, {
            transition: this._initialContentStyle[o].transition
          });
        });
      }
    });
  }
  _setMode(t) {
    this.options.sidenavMode !== t && (this._options.sidenavMode = t, this._update(this.isVisible));
  }
  _setSlim(t) {
    const e = t ? ["collapse", "collapsed"] : ["expand", "expanded"];
    this._triggerEvents(...e), t && this._collapseItems(), this._slimCollapsed = t, this._toggleSlimDisplay(t), h.style(this._element, { width: `${this.width}px` }), this._updateOffsets(this.isVisible);
  }
  _setTabindex(t) {
    this.links.forEach((e) => {
      e.tabIndex = t ? 0 : -1;
    });
  }
  _emitEvents(t) {
    const e = t ? ["show", "shown"] : ["hide", "hidden"];
    this._triggerEvents(...e);
  }
  _rotateArrow(t, e) {
    const [i] = d.children(t, `[${Lg}]`);
    i && (e ? h.removeClass(i, "rotate-180") : h.addClass(i, "rotate-180"));
  }
  _toggleCategory(t, e) {
    t.preventDefault(), e.toggle(), this._slimCollapsed && this.options.sidenavExpandable && (this._tempSlim = !0, this._setSlim(!1));
  }
  _toggleSlimDisplay(t) {
    const e = d.find(
      Mg,
      this._element
    ), i = d.find(
      Rg,
      this._element
    ), n = () => {
      e.forEach((o) => {
        h.style(o, {
          display: this._slimCollapsed ? "unset" : "none"
        });
      }), i.forEach((o) => {
        h.style(o, {
          display: this._slimCollapsed ? "none" : "unset"
        });
      });
    };
    t ? setTimeout(
      () => n(),
      this.options.sidenavTransitionDuration
    ) : n();
  }
  async _triggerEvents(t, e) {
    c.trigger(this._element, `${t}.te.sidenav`), e && await setTimeout(() => {
      c.trigger(this._element, `${e}.te.sidenav`);
    }, this.options.sidenavTransitionDuration + 5);
  }
  _isiPhone() {
    return /iPhone|iPod/i.test(navigator.userAgent);
  }
  _update(t) {
    t && this._isiPhone() && h.addClass(this._element, "ps--scrolling-y"), this.toggler && this._updateTogglerAria(t), this._updateDisplay(t), this.options.sidenavBackdrop && this._updateBackdrop(t), this._updateOffsets(t), t && this.options.sidenavCloseOnEsc && this.options.sidenavMode !== "side" && c.on(window, "keydown", this.escHandler), this.options.sidenavFocusTrap && this._updateFocus(t);
  }
  _updateDisplay(t) {
    const e = t ? 0 : this.translation;
    h.style(this._element, {
      transform: `translateX(${e}%)`
    });
  }
  _updateFocus(t) {
    if (this._setTabindex(t), this.options.sidenavMode === "over" && this.options.sidenavFocusTrap) {
      if (t) {
        this._focusTrap.trap();
        return;
      }
      this._focusTrap.disable();
    }
    this._focusTrap.disable();
  }
  _updateOffsets(t, e = !1) {
    const [i, n] = this.options.sidenavRight ? ["right", "left"] : ["left", "right"], o = {
      property: this._getProperty("padding", i),
      value: this.options.sidenavMode === "over" ? 0 : this.width
    }, r = {
      property: this._getProperty("margin", n),
      value: this.options.sidenavMode === "push" ? -1 * this.width : 0
    };
    c.trigger(this._element, "update.te.sidenav", {
      margin: r,
      padding: o
    }), this._content && (this._content.className = "", this._setContentOffsets(t, { padding: o, margin: r }, e));
  }
  _updateTogglerAria(t) {
    this.toggler.setAttribute("aria-expanded", t);
  }
  // Static
  static toggleSidenav() {
    return function(t) {
      const e = d.closest(t.target, fo), i = h.getDataAttributes(e).target;
      d.find(i).forEach((n) => {
        (Ci.getInstance(n) || new Ci(n)).toggle();
      });
    };
  }
  static jQueryInterface(t, e) {
    return this.each(function() {
      let i = A.getData(this, ws);
      const n = typeof t == "object" && t;
      if (!(!i && /dispose/.test(t)) && (i || (i = new Ci(this, n)), typeof t == "string")) {
        if (typeof i[t] > "u")
          throw new TypeError(`No method named "${t}"`);
        i[t](e);
      }
    });
  }
  static getInstance(t) {
    return A.getData(t, ws);
  }
  static getOrCreateInstance(t, e = {}) {
    return this.getInstance(t) || new this(t, typeof e == "object" ? e : null);
  }
}
const Zo = "stepper", tn = "te.stepper", ai = `.${tn}`, Ui = `data-te-${Zo}`, Ai = "horizontal", Ot = "vertical", Fg = `onChangeStep${ai}`, Yg = `onChangedStep${ai}`, jg = {
  stepperType: "string",
  stepperLinear: "boolean",
  stepperNoEditable: "boolean",
  stepperActive: "string",
  stepperCompleted: "string",
  stepperInvalid: "string",
  stepperDisabled: "string",
  stepperVerticalBreakpoint: "number",
  stepperMobileBreakpoint: "number",
  stepperMobileBarBreakpoint: "number",
  stepperAnimationDuration: "number",
  slideInLeftAnimation: "string",
  slideOutLeftAnimation: "string",
  slideInRightAnimation: "string",
  slideOutRightAnimation: "string"
}, Kg = {
  stepperType: Ai,
  stepperLinear: !1,
  stepperNoEditable: !1,
  stepperActive: "",
  stepperCompleted: "",
  stepperInvalid: "",
  stepperDisabled: "",
  stepperVerticalBreakpoint: 0,
  stepperMobileBreakpoint: 0,
  stepperMobileBarBreakpoint: 4,
  stepperAnimationDuration: 800,
  slideInLeftAnimation: "animate-[slide-in-left_0.8s_both]",
  slideOutLeftAnimation: "animate-[slide-out-left_0.8s_both]",
  slideInRightAnimation: "animate-[slide-in-right_0.8s_both]",
  slideOutRightAnimation: "animate-[slide-out-right_0.8s_both]"
}, dl = `mousedown${ai}`, ul = `keydown${ai}`, zg = `keyup${ai}`, pl = `resize${ai}`, Kt = `[${Ui}-step-ref]`, Z = `[${Ui}-head-ref]`, _l = `[${Ui}-head-text-ref]`, ks = `[${Ui}-head-icon-ref]`, Q = `[${Ui}-content-ref]`;
class UA {
  constructor(t, e) {
    this._element = t, this._options = this._getConfig(e), this._elementHeight = 0, this._steps = d.find(`${Kt}`, this._element), this._currentView = "", this._activeStepIndex = 0, this._verticalStepperStyles = [], this._timeout = 0, this._element && (A.setData(t, tn, this), this._init());
  }
  // Getters
  static get NAME() {
    return Zo;
  }
  get activeStep() {
    return this._steps[this._activeStepIndex];
  }
  get activeStepIndex() {
    return this._activeStepIndex;
  }
  // Public
  dispose() {
    this._steps.forEach((t) => {
      c.off(t, dl), c.off(t, ul);
    }), c.off(window, pl), A.removeData(this._element, tn), this._element = null;
  }
  changeStep(t) {
    this._toggleStep(t);
  }
  nextStep() {
    this._toggleStep(this._activeStepIndex + 1);
  }
  previousStep() {
    this._toggleStep(this._activeStepIndex - 1);
  }
  // Private
  _init() {
    const t = d.find(`${Kt}`, this._element)[this._activeStepIndex].setAttribute("data-te", "active-step"), e = d.find(
      `${_l}`,
      this._element
    ), i = d.find(
      `${ks}`,
      this._element
    );
    switch (t ? (this._activeStepIndex = this._steps.indexOf(t), this._toggleStepClass(
      this._activeStepIndex,
      "add",
      this._options.stepperActive
    ), e[this._activeStepIndex].classList.add("font-medium"), i[this._activeStepIndex].classList.add("!bg-primary-100"), i[this._activeStepIndex].classList.add("!text-primary-700")) : (e[this._activeStepIndex].classList.add("font-medium"), i[this._activeStepIndex].classList.add("!bg-primary-100"), i[this._activeStepIndex].classList.add("!text-primary-700"), this._toggleStepClass(
      this._activeStepIndex,
      "add",
      this._options.stepperActive
    )), this._bindMouseDown(), this._bindKeysNavigation(), this._options.stepperType) {
      case Ot:
        this._toggleVertical();
        break;
      default:
        this._toggleHorizontal();
        break;
    }
    (this._options.stepperVerticalBreakpoint || this._options.stepperMobileBreakpoint) && this._toggleStepperView(), this._bindResize();
  }
  _getConfig(t) {
    const e = h.getDataAttributes(this._element);
    return t = {
      ...Kg,
      ...e,
      ...t
    }, I(Zo, t, jg), t;
  }
  _bindMouseDown() {
    this._steps.forEach((t) => {
      const e = d.findOne(`${Z}`, t);
      c.on(e, dl, (i) => {
        const n = d.parents(i.target, `${Kt}`)[0], o = this._steps.indexOf(n);
        i.preventDefault(), this._toggleStep(o);
      });
    });
  }
  _bindResize() {
    c.on(window, pl, () => {
      this._currentView === Ot && this._setSingleStepHeight(this.activeStep), this._currentView === Ai && this._setHeight(this.activeStep), (this._options.stepperVerticalBreakpoint || this._options.stepperMobileBreakpoint) && this._toggleStepperView();
    });
  }
  _toggleStepperView() {
    const t = this._options.stepperVerticalBreakpoint < window.innerWidth, e = this._options.stepperVerticalBreakpoint > window.innerWidth, i = this._options.stepperMobileBreakpoint > window.innerWidth;
    t && this._currentView !== Ai && this._toggleHorizontal(), e && !i && this._currentView !== Ot && (this._steps.forEach((n) => {
      const o = d.findOne(`${Q}`, n);
      this._resetStepperHeight(), this._showElement(o);
    }), this._toggleVertical());
  }
  _toggleStep(t) {
    if (this._activeStepIndex === t)
      return;
    this._options.stepperNoEditable && this._toggleDisabled();
    const e = this._activeStepIndex, i = c.trigger(
      this.activeStep,
      Fg,
      {
        currentStep: this._activeStepIndex,
        nextStep: t
      }
    );
    t > this._activeStepIndex && i.defaultPrevented || (this._showElement(
      d.findOne(`${Q}`, this._steps[t])
    ), this._toggleActive(t), t > this._activeStepIndex && this._toggleCompleted(this._activeStepIndex), this._currentView === Ai ? this._animateHorizontalStep(t) : (this._animateVerticalStep(t), this._setSingleStepHeight(this._steps[t])), this._toggleStepTabIndex(
      d.findOne(`${Z}`, this.activeStep),
      d.findOne(`${Z}`, this._steps[t])
    ), this._activeStepIndex = t, this._steps[this._activeStepIndex].setAttribute("data-te", "active-step"), this._steps.forEach((n, o) => {
      n[this._activeStepIndex] !== o && n.removeAttribute("data-te");
    }), c.trigger(this.activeStep, Yg, {
      currentStep: this._activeStepIndex,
      prevStep: e
    }));
  }
  _resetStepperHeight() {
    this._element.style.height = "";
  }
  _setStepsHeight() {
    this._steps.forEach((t) => {
      const e = d.findOne(`${Q}`, t), i = window.getComputedStyle(e);
      this._verticalStepperStyles.push({
        paddingTop: parseFloat(i.paddingTop),
        paddingBottom: parseFloat(i.paddingBottom)
      });
      const n = e.scrollHeight;
      e.style.height = `${n}px`;
    });
  }
  _setSingleStepHeight(t) {
    const e = d.findOne(`${Q}`, t), i = this.activeStep === t, n = this._steps.indexOf(t);
    let o;
    i ? (e.style.height = "", o = e.scrollHeight) : o = e.scrollHeight + this._verticalStepperStyles[n].paddingTop + this._verticalStepperStyles[n].paddingBottom, e.style.height = `${o}px`;
  }
  _toggleVertical() {
    this._currentView = Ot, this._setStepsHeight(), this._hideInactiveSteps();
  }
  _toggleHorizontal() {
    this._currentView = Ai, this._setHeight(this.activeStep), this._hideInactiveSteps();
  }
  _toggleStepperClass() {
    d.findOne(
      "[data-te-stepper-type]",
      this._element
    ) !== null && this._steps.forEach((e) => {
      d.findOne(`${Q}`, e).classList.remove("!my-0"), d.findOne(`${Q}`, e).classList.remove("!py-0"), d.findOne(`${Q}`, e).classList.remove("!h-0");
    });
  }
  _toggleStepClass(t, e, i) {
    i && this._steps[t].classList[e](i);
  }
  _bindKeysNavigation() {
    this._toggleStepTabIndex(
      !1,
      d.findOne(`${Z}`, this.activeStep)
    ), this._steps.forEach((t) => {
      const e = d.findOne(`${Z}`, t);
      c.on(e, ul, (i) => {
        const n = d.parents(
          i.currentTarget,
          `${Kt}`
        )[0], o = d.next(n, `${Kt}`)[0], r = d.prev(n, `${Kt}`)[0], a = d.findOne(
          `${Z}`,
          n
        ), l = d.findOne(
          `${Z}`,
          this.activeStep
        );
        let p = null, u = null;
        if (o && (p = d.findOne(`${Z}`, o)), r && (u = d.findOne(`${Z}`, r)), i.keyCode === Ke && this._currentView !== Ot && (u ? (this._toggleStepTabIndex(a, u), this._toggleOutlineStyles(a, u), u.focus()) : p && (this._toggleStepTabIndex(a, p), this._toggleOutlineStyles(a, p), p.focus())), i.keyCode === ze && this._currentView !== Ot && (p ? (this._toggleStepTabIndex(a, p), this._toggleOutlineStyles(a, p), p.focus()) : u && (this._toggleStepTabIndex(a, u), this._toggleOutlineStyles(a, u), u.focus())), i.keyCode === z && this._currentView === Ot && (i.preventDefault(), p && (this._toggleStepTabIndex(a, p), this._toggleOutlineStyles(a, p), p.focus())), i.keyCode === U && this._currentView === Ot && (i.preventDefault(), u && (this._toggleStepTabIndex(a, u), this._toggleOutlineStyles(a, u), u.focus())), i.keyCode === Te) {
          const _ = d.findOne(
            `${Z}`,
            this._steps[0]
          );
          this._toggleStepTabIndex(a, _), this._toggleOutlineStyles(a, _), _.focus();
        }
        if (i.keyCode === Ee) {
          const _ = this._steps[this._steps.length - 1], f = d.findOne(`${Z}`, _);
          this._toggleStepTabIndex(a, f), this._toggleOutlineStyles(a, f), f.focus();
        }
        (i.keyCode === it || i.keyCode === Zs) && (i.preventDefault(), this.changeStep(this._steps.indexOf(n))), i.keyCode === ke && (this._toggleStepTabIndex(a, l), this._toggleOutlineStyles(a, !1), l.focus());
      }), c.on(e, zg, (i) => {
        const n = d.parents(
          i.currentTarget,
          `${Kt}`
        )[0], o = d.findOne(
          `${Z}`,
          n
        ), r = d.findOne(
          `${Z}`,
          this.activeStep
        );
        i.keyCode === ke && (this._toggleStepTabIndex(o, r), this._toggleOutlineStyles(!1, r), r.focus());
      });
    });
  }
  _toggleStepTabIndex(t, e) {
    t && t.setAttribute("tabIndex", -1), e && e.setAttribute("tabIndex", 0);
  }
  _toggleOutlineStyles(t, e) {
    t && (t.style.outline = ""), e && (e.style.outline = "revert");
  }
  _toggleDisabled() {
    const t = d.find(`${Z}`, this._element), e = d.find(
      `${ks}`,
      this._element
    );
    t[this._activeStepIndex].classList.add("color-[#858585]"), t[this._activeStepIndex].classList.add("cursor-default"), e[this._activeStepIndex].classList.add("!bg-[#858585]"), this._toggleStepClass(
      this._activeStepIndex,
      "add",
      this._options.stepperDisabled
    );
  }
  _toggleActive(t) {
    const e = d.find(
      `${_l}`,
      this._element
    ), i = d.find(
      `${ks}`,
      this._element
    );
    e[t].classList.add("font-medium"), i[t].classList.add("!bg-primary-100"), i[t].classList.add("!text-primary-700"), i[t].classList.remove("!bg-success-100"), i[t].classList.remove("!text-success-700"), e[this._activeStepIndex].classList.remove("font-medium"), i[this._activeStepIndex].classList.remove("!bg-primary-100"), i[this._activeStepIndex].classList.remove(
      "!text-primary-700"
    ), this._toggleStepClass(t, "add", this._options.stepperActive), this._toggleStepClass(
      this._activeStepIndex,
      "remove",
      this._options.stepperActive
    );
  }
  _toggleCompleted(t) {
    const e = d.find(
      `${ks}`,
      this._element
    );
    this._options.stepperNoEditable ? this._steps[t].classList.add("pointer-events-none") : (e[t].classList.add("!bg-success-100"), e[t].classList.add("!text-success-700")), e[t].classList.remove("!bg-danger-100"), e[t].classList.remove("!text-danger-700"), this._toggleStepClass(t, "add", this._options.stepperCompleted), this._toggleStepClass(t, "remove", this._options.stepperInvalid);
  }
  _hideInactiveSteps() {
    this._steps.forEach((t) => {
      if (!t.getAttribute("data-te")) {
        const e = d.findOne(`${Q}`, t);
        e.classList.remove("translate-x-[150%]"), this._hideElement(e);
      }
    });
  }
  _setHeight(t) {
    const e = d.findOne(`${Q}`, t), i = getComputedStyle(e), n = d.findOne(`${Z}`, t), o = getComputedStyle(n), r = e.offsetHeight + parseFloat(i.marginTop) + parseFloat(i.marginBottom), a = n.offsetHeight + parseFloat(o.marginTop) + parseFloat(o.marginBottom);
    this._element.style.height = `${a + r}px`;
  }
  _hideElement(t) {
    !d.parents(
      t,
      `${Kt}`
    )[0].getAttribute("data-te") && this._currentView !== Ot ? t.style.display = "none" : (t.classList.add("!my-0"), t.classList.add("!py-0"), t.classList.add("!h-0"));
  }
  _showElement(t) {
    this._currentView === Ot ? (t.classList.remove("!my-0"), t.classList.remove("!py-0"), t.classList.remove("!h-0")) : t.style.display = "block";
  }
  _animateHorizontalStep(t) {
    clearTimeout(this._timeout), this._clearStepsAnimation();
    const e = t > this._activeStepIndex, i = d.findOne(
      `${Q}`,
      this._steps[t]
    ), n = d.findOne(
      `${Q}`,
      this.activeStep
    );
    let o, r;
    this._steps.forEach((a, l) => {
      const p = d.findOne(`${Q}`, a);
      l !== t && l !== this._activeStepIndex && this._hideElement(p);
    }), e ? (r = this._options.slideOutLeftAnimation, o = this._options.slideInRightAnimation) : (r = this._options.slideOutRightAnimation, o = this._options.slideInLeftAnimation), n.classList.add(r), i.classList.add(o), this._setHeight(this._steps[t]), this._timeout = setTimeout(() => {
      this._hideElement(n), this._clearStepsAnimation();
    }, this._options.stepperAnimationDuration);
  }
  _clearStepsAnimation() {
    this._steps.forEach((t) => {
      d.findOne(`${Q}`, t).classList.remove(
        this._options.slideInLeftAnimation,
        this._options.slideOutLeftAnimation,
        this._options.slideInRightAnimation,
        this._options.slideOutRightAnimation
      );
    });
  }
  _animateVerticalStep(t) {
    const e = d.findOne(
      `${Q}`,
      this._steps[t]
    ), i = d.findOne(
      `${Q}`,
      this.activeStep
    );
    this._hideElement(i), this._showElement(e);
  }
  static getInstance(t) {
    return A.getData(t, tn);
  }
  static getOrCreateInstance(t, e = {}) {
    return this.getInstance(t) || new this(t, typeof e == "object" ? e : null);
  }
}
const fl = "data-te-input-state-active", xs = "data-te-input-selected", ml = "data-te-input-multiple-active", gl = "[data-te-form-check-input]";
class bl {
  constructor(t, e, i, n, o, r, a, l, p, u, _) {
    this.id = t, this.nativeOption = e, this.multiple = i, this.value = n, this.label = o, this.selected = r, this.disabled = a, this.hidden = l, this.secondaryText = p, this.groupId = u, this.icon = _, this.node = null, this.active = !1;
  }
  select() {
    this.multiple ? this._selectMultiple() : this._selectSingle();
  }
  _selectSingle() {
    this.selected || (this.node.setAttribute(xs, ""), this.node.setAttribute("aria-selected", !0), this.selected = !0, this.nativeOption && (this.nativeOption.selected = !0));
  }
  _selectMultiple() {
    if (!this.selected) {
      const t = d.findOne(
        gl,
        this.node
      );
      t.checked = !0, this.node.setAttribute(xs, ""), this.node.setAttribute("aria-selected", !0), this.selected = !0, this.nativeOption && (this.nativeOption.selected = !0);
    }
  }
  deselect() {
    this.multiple ? this._deselectMultiple() : this._deselectSingle();
  }
  _deselectSingle() {
    this.selected && (this.node.removeAttribute(xs), this.node.setAttribute("aria-selected", !1), this.selected = !1, this.nativeOption && (this.nativeOption.selected = !1));
  }
  _deselectMultiple() {
    if (this.selected) {
      const t = d.findOne(
        gl,
        this.node
      );
      t.checked = !1, this.node.removeAttribute(xs), this.node.setAttribute("aria-selected", !1), this.selected = !1, this.nativeOption && (this.nativeOption.selected = !1);
    }
  }
  setNode(t) {
    this.node = t;
  }
  setActiveStyles() {
    if (!this.active) {
      if (this.multiple) {
        this.node.setAttribute(ml, "");
        return;
      }
      this.active = !0, this.node.setAttribute(fl, "");
    }
  }
  removeActiveStyles() {
    this.active && (this.active = !1, this.node.removeAttribute(fl)), this.multiple && this.node.removeAttribute(ml);
  }
}
class Ug {
  constructor(t = !1) {
    this._multiple = t, this._selections = [];
  }
  select(t) {
    this._multiple ? this._selections.push(t) : this._selections = [t];
  }
  deselect(t) {
    if (this._multiple) {
      const e = this._selections.findIndex(
        (i) => t === i
      );
      this._selections.splice(e, 1);
    } else
      this._selections = [];
  }
  clear() {
    this._selections = [];
  }
  get selection() {
    return this._selections[0];
  }
  get selections() {
    return this._selections;
  }
  get label() {
    return this._selections[0] && this.selection.label;
  }
  get labels() {
    return this._selections.map((t) => t.label).join(", ");
  }
  get value() {
    return this.selections[0] && this.selection.value;
  }
  get values() {
    return this._selections.map((t) => t.value);
  }
}
function Qo(s) {
  return s.filter((t) => !t.disabled).every((t) => t.selected);
}
const Xg = "data-te-select-form-outline-ref", Gg = "data-te-select-wrapper-ref", qg = "data-te-select-input-ref", Zg = "data-te-select-clear-btn-ref", Qg = "data-te-select-dropdown-container-ref", Jg = "data-te-select-dropdown-ref", tb = "data-te-select-options-wrapper-ref", eb = "data-te-select-options-list-ref", ib = "data-te-select-input-filter-ref", Eh = "data-te-select-option-ref", sb = "data-te-select-option-all-ref", nb = "data-te-select-option-text-ref", ob = "data-te-form-check-input", rb = "data-te-select-option-group-ref", ab = "data-te-select-option-group-label-ref", Ch = "data-te-select-selected", lb = `
<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
  <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
</svg>
`, cb = (s) => {
  s.code === "Tab" || s.code === "Esc" || s.preventDefault();
};
function Os(s, t, e, i, n) {
  t.selectSize === "default" && h.addClass(s, e), t.selectSize === "sm" && h.addClass(s, i), t.selectSize === "lg" && h.addClass(s, n);
}
function hb(s, t, e, i, n) {
  const o = document.createElement("div");
  o.setAttribute("id", s), o.setAttribute(Gg, "");
  const r = $("div");
  r.setAttribute(Xg, ""), h.addClass(r, i.formOutline);
  const a = $("input"), l = t.selectFilter ? "combobox" : "listbox", p = t.multiple ? "true" : "false", u = t.disabled ? "true" : "false";
  a.setAttribute(qg, ""), h.addClass(a, i.selectInput), Os(
    a,
    t,
    i.selectInputSizeDefault,
    i.selectInputSizeSm,
    i.selectInputSizeLg
  ), t.selectFormWhite && h.addClass(a, i.selectInputWhite), a.setAttribute("type", "text"), a.setAttribute("role", l), a.setAttribute("aria-multiselectable", p), a.setAttribute("aria-disabled", u), a.setAttribute("aria-haspopup", "true"), a.setAttribute("aria-expanded", !1), t.tabIndex && a.setAttribute("tabIndex", t.tabIndex), t.disabled && a.setAttribute("disabled", ""), t.selectPlaceholder !== "" && a.setAttribute("placeholder", t.selectPlaceholder), t.selectValidation ? (h.addStyle(a, {
    "pointer-events": "none",
    "caret-color": "transparent"
  }), h.addStyle(r, { cursor: "pointer" })) : a.setAttribute("readonly", "true"), t.selectValidation && (a.setAttribute("required", "true"), a.setAttribute("aria-required", "true"), a.addEventListener("keydown", cb));
  const _ = $("div");
  h.addClass(_, i.selectValidationValid);
  const f = document.createTextNode(
    `${t.selectValidFeedback}`
  );
  _.appendChild(f);
  const g = $("div");
  h.addClass(g, i.selectValidationInvalid);
  const m = document.createTextNode(
    `${t.selectInvalidFeedback}`
  );
  g.appendChild(m);
  const b = $("span");
  b.setAttribute(Zg, ""), h.addClass(b, i.selectClearBtn), Os(
    b,
    t,
    i.selectClearBtnDefault,
    i.selectClearBtnSm,
    i.selectClearBtnLg
  ), t.selectFormWhite && h.addClass(b, i.selectClearBtnWhite);
  const v = document.createTextNode("✕");
  b.appendChild(v), b.setAttribute("tabindex", "0");
  const T = $("span");
  return h.addClass(T, i.selectArrow), Os(
    T,
    t,
    i.selectArrowDefault,
    i.selectArrowSm,
    i.selectArrowLg
  ), t.selectFormWhite && h.addClass(T, i.selectArrowWhite), T.innerHTML = n || lb, r.appendChild(a), e && (h.addClass(e, i.selectLabel), Os(
    e,
    t,
    i.selectLabelSizeDefault,
    i.selectLabelSizeSm,
    i.selectLabelSizeLg
  ), t.selectFormWhite && h.addClass(e, i.selectLabelWhite), r.appendChild(e)), t.selectValidation && (r.appendChild(_), r.appendChild(g)), t.selectClearButton && r.appendChild(b), r.appendChild(T), o.appendChild(r), o;
}
function vl(s, t, e, i, n, o, r, a) {
  const l = document.createElement("div");
  l.setAttribute(Qg, ""), h.addClass(l, a.selectDropdownContainer), l.setAttribute("id", `${s}`), l.style.width = `${e}px`;
  const p = document.createElement("div");
  p.setAttribute("tabindex", 0), p.setAttribute(Jg, ""), h.addClass(p, a.dropdown);
  const u = $("div");
  u.setAttribute(tb, ""), h.addClass(u, a.optionsWrapper), h.addClass(u, a.optionsWrapperScrollbar), u.style.maxHeight = `${i}px`;
  const _ = Ah(
    o,
    n,
    t,
    a
  );
  return u.appendChild(_), t.selectFilter && p.appendChild(
    db(t.selectSearchPlaceholder, a)
  ), p.appendChild(u), r && p.appendChild(r), l.appendChild(p), l;
}
function Ah(s, t, e, i) {
  const n = $("div");
  n.setAttribute(eb, ""), h.addClass(n, i.optionsList);
  let o;
  return e.multiple ? o = pb(
    s,
    t,
    e,
    i
  ) : o = ub(s, e, i), o.forEach((r) => {
    n.appendChild(r);
  }), n;
}
function db(s, t) {
  const e = $("div");
  h.addClass(e, t.inputGroup);
  const i = $("input");
  return i.setAttribute(ib, ""), h.addClass(i, t.selectFilterInput), i.placeholder = s, i.setAttribute("role", "searchbox"), i.setAttribute("type", "text"), e.appendChild(i), e;
}
function ub(s, t, e) {
  return yh(s, t, e);
}
function pb(s, t, e, i) {
  let n = null;
  e.selectAll && (n = _b(
    t,
    s,
    e,
    i
  ));
  const o = yh(s, e, i);
  return n ? [n, ...o] : o;
}
function yh(s, t, e) {
  const i = [];
  return s.forEach((n) => {
    if (Object.prototype.hasOwnProperty.call(
      n,
      "options"
    )) {
      const r = bb(n, t, e);
      i.push(r);
    } else
      i.push(wh(n, t, e));
  }), i;
}
function _b(s, t, e, i) {
  const n = Qo(t), o = $("div");
  o.setAttribute(Eh, "");
  const r = i.selectAllOption || i.selectOption;
  return h.addClass(o, r), o.setAttribute(sb, ""), h.addStyle(o, {
    height: `${e.selectOptionHeight}px`
  }), o.setAttribute("role", "option"), o.setAttribute("aria-selected", n), n && o.setAttribute(Ch, ""), o.appendChild(kh(s, e, i)), s.setNode(o), o;
}
function wh(s, t, e) {
  if (s.node)
    return s.node;
  const i = $("div");
  return i.setAttribute(Eh, ""), h.addClass(i, e.selectOption), h.addStyle(i, {
    height: `${t.selectOptionHeight}px`
  }), h.setDataAttribute(i, "id", s.id), i.setAttribute("role", "option"), i.setAttribute("aria-selected", s.selected), i.setAttribute("aria-disabled", s.disabled), s.selected && i.setAttribute(Ch, ""), s.disabled && i.setAttribute("data-te-select-option-disabled", !0), s.hidden && h.addClass(i, "hidden"), i.appendChild(kh(s, t, e)), s.icon && i.appendChild(gb(s, e)), s.setNode(i), i;
}
function kh(s, t, e) {
  const i = $("span");
  i.setAttribute(nb, ""), h.addClass(i, e.selectOptionText);
  const n = document.createTextNode(s.label);
  return t.multiple && i.appendChild(mb(s, e)), i.appendChild(n), (s.secondaryText || typeof s.secondaryText == "number") && i.appendChild(
    fb(s.secondaryText, e)
  ), i;
}
function fb(s, t) {
  const e = $("span");
  h.addClass(e, t.selectOptionSecondaryText);
  const i = document.createTextNode(s);
  return e.appendChild(i), e;
}
function mb(s, t) {
  const e = $("input");
  e.setAttribute("type", "checkbox"), h.addClass(e, t.formCheckInput), e.setAttribute(ob, "");
  const i = $("label");
  return s.selected && e.setAttribute("checked", !0), s.disabled && e.setAttribute("disabled", !0), e.appendChild(i), e;
}
function gb(s, t) {
  const e = $("span"), i = $("img");
  return h.addClass(i, t.selectOptionIcon), i.src = s.icon, e.appendChild(i), e;
}
function bb(s, t, e) {
  const i = $("div");
  i.setAttribute(rb, ""), h.addClass(i, e.selectOptionGroup), i.setAttribute("role", "group"), i.setAttribute("id", s.id), s.hidden && h.addClass(i, "hidden");
  const n = $("label");
  return n.setAttribute(ab, ""), h.addClass(n, e.selectOptionGroupLabel), h.addStyle(n, { height: `${t.selectOptionHeight}px` }), n.setAttribute("for", s.id), n.textContent = s.label, i.appendChild(n), s.options.forEach((o) => {
    i.appendChild(wh(o, t, e));
  }), i;
}
function vb(s, t) {
  const e = $("div");
  return e.textContent = s, h.addClass(e, t.selectLabel), h.addClass(e, t.selectFakeValue), e;
}
const mo = "select", yi = "te.select", Xi = `.${yi}`, Tb = `close${Xi}`, Eb = `open${Xi}`, Tl = `optionSelect${Xi}`, El = `optionDeselect${Xi}`, Cb = `valueChange${Xi}`, Ab = "change", Cl = "data-te-select-init", xh = "data-te-select-no-results-ref", Al = "data-te-select-open", J = "data-te-input-state-active", zt = "data-te-input-focused", go = "data-te-input-disabled", yb = "data-te-select-option-group-label-ref", wb = "data-te-select-option-all-ref", bi = "data-te-select-selected", kb = "[data-te-select-label-ref]", yl = "[data-te-select-input-ref]", xb = "[data-te-select-input-filter-ref]", Ob = "[data-te-select-dropdown-ref]", Sb = "[data-te-select-options-wrapper-ref]", wl = "[data-te-select-options-list-ref]", Ib = "[data-te-select-option-ref]", Db = "[data-te-select-clear-btn-ref]", $b = "[data-te-select-custom-content-ref]", Lb = `[${xh}]`, kl = "[data-te-select-form-outline-ref]", Nb = "[data-te-select-toggle]", bo = "[data-te-input-notch-ref]", Mb = {
  selectAutoSelect: !1,
  selectContainer: "body",
  selectClearButton: !1,
  disabled: !1,
  selectDisplayedLabels: 5,
  selectFormWhite: !1,
  multiple: !1,
  selectOptionsSelectedLabel: "options selected",
  selectOptionHeight: 38,
  selectAll: !0,
  selectAllLabel: "Select all",
  selectSearchPlaceholder: "Search...",
  selectSize: "default",
  selectVisibleOptions: 5,
  selectFilter: !1,
  selectFilterDebounce: 300,
  selectNoResultText: "No results",
  selectValidation: !1,
  selectValidFeedback: "Valid",
  selectInvalidFeedback: "Invalid",
  selectPlaceholder: ""
}, Rb = {
  selectAutoSelect: "boolean",
  selectContainer: "string",
  selectClearButton: "boolean",
  disabled: "boolean",
  selectDisplayedLabels: "number",
  selectFormWhite: "boolean",
  multiple: "boolean",
  selectOptionsSelectedLabel: "string",
  selectOptionHeight: "number",
  selectAll: "boolean",
  selectAllLabel: "string",
  selectSearchPlaceholder: "string",
  selectSize: "string",
  selectVisibleOptions: "number",
  selectFilter: "boolean",
  selectFilterDebounce: "number",
  selectNoResultText: "string",
  selectValidation: "boolean",
  selectValidFeedback: "string",
  selectInvalidFeedback: "string",
  selectPlaceholder: "string"
}, Pb = {
  dropdown: "relative outline-none min-w-[100px] m-0 scale-y-[0.8] opacity-0 bg-white shadow-[0_2px_5px_0_rgba(0,0,0,0.16),_0_2px_10px_0_rgba(0,0,0,0.12)] transition duration-200 motion-reduce:transition-none data-[te-select-open]:scale-100 data-[te-select-open]:opacity-100 dark:bg-zinc-700",
  formCheckInput: "relative float-left mt-[0.15rem] mr-[8px] h-[1.125rem] w-[1.125rem] appearance-none rounded-[0.25rem] border-[0.125rem] border-solid border-neutral-300 dark:border-neutral-600 outline-none before:pointer-events-none before:absolute before:h-[0.875rem] before:w-[0.875rem] before:scale-0 before:rounded-full before:bg-transparent before:opacity-0 before:shadow-[0px_0px_0px_13px_transparent] before:content-[''] checked:border-primary dark:checked:border-primary checked:bg-primary dark:checked:bg-primary checked:before:opacity-[0.16] checked:after:absolute checked:after:ml-[0.25rem] checked:after:-mt-px checked:after:block checked:after:h-[0.8125rem] checked:after:w-[0.375rem] checked:after:rotate-45 checked:after:border-[0.125rem] checked:after:border-t-0 checked:after:border-l-0 checked:after:border-solid checked:after:border-white checked:after:bg-transparent checked:after:content-[''] hover:cursor-pointer hover:before:opacity-[0.04] hover:before:shadow-[0px_0px_0px_13px_rgba(0,0,0,0.6)] focus:shadow-none focus:transition-[border-color_0.2s] focus:before:scale-100 focus:before:opacity-[0.12] focus:before:shadow-[0px_0px_0px_13px_rgba(0,0,0,0.6)] dark:focus:before:shadow-[0px_0px_0px_13px_rgba(255,255,255,0.4)] focus:before:transition-[box-shadow_0.2s,transform_0.2s] focus:after:absolute focus:after:z-[1] focus:after:block focus:after:h-[0.875rem] focus:after:w-[0.875rem] focus:after:rounded-[0.125rem] focus:after:content-[''] checked:focus:before:scale-100 checked:focus:before:shadow-[0px_0px_0px_13px_#3b71ca] dark:checked:focus:before:shadow-[0px_0px_0px_13px_#3b71ca] checked:focus:before:transition-[box-shadow_0.2s,transform_0.2s] checked:focus:after:ml-[0.25rem] checked:focus:after:-mt-px checked:focus:after:h-[0.8125rem] checked:focus:after:w-[0.375rem] checked:focus:after:rotate-45 checked:focus:after:rounded-none checked:focus:after:border-[0.125rem] checked:focus:after:border-t-0 checked:focus:after:border-l-0 checked:focus:after:border-solid checked:focus:after:border-white checked:focus:after:bg-transparent",
  formOutline: "relative",
  initialized: "hidden",
  inputGroup: "flex items-center whitespace-nowrap p-2.5 text-center text-base font-normal leading-[1.6] text-gray-700 dark:bg-zinc-800 dark:text-gray-200 dark:placeholder:text-gray-200",
  noResult: "flex items-center px-4",
  optionsList: "list-none m-0 p-0",
  optionsWrapper: "overflow-y-auto",
  optionsWrapperScrollbar: "[&::-webkit-scrollbar]:w-1 [&::-webkit-scrollbar]:h-1 [&::-webkit-scrollbar-button]:block [&::-webkit-scrollbar-button]:h-0 [&::-webkit-scrollbar-button]:bg-transparent [&::-webkit-scrollbar-track-piece]:bg-transparent [&::-webkit-scrollbar-track-piece]:rounded-none [&::-webkit-scrollbar-track-piece]: [&::-webkit-scrollbar-track-piece]:rounded-l [&::-webkit-scrollbar-thumb]:h-[50px] [&::-webkit-scrollbar-thumb]:bg-[#999] [&::-webkit-scrollbar-thumb]:rounded",
  selectArrow: "absolute right-3 text-[0.8rem] cursor-pointer peer-focus:text-primary peer-data-[te-input-focused]:text-primary group-data-[te-was-validated]/validation:peer-valid:text-green-600 group-data-[te-was-validated]/validation:peer-invalid:text-[rgb(220,76,100)] w-5 h-5",
  selectArrowWhite: "text-gray-50 peer-focus:!text-white peer-data-[te-input-focused]:!text-white",
  selectArrowDefault: "top-2",
  selectArrowLg: "top-[13px]",
  selectArrowSm: "top-1",
  selectClearBtn: "absolute top-2 right-9 text-black cursor-pointer focus:text-primary outline-none dark:text-gray-200",
  selectClearBtnWhite: "!text-gray-50",
  selectClearBtnDefault: "top-2 text-base",
  selectClearBtnLg: "top-[11px] text-base",
  selectClearBtnSm: "top-1 text-[0.8rem]",
  selectDropdownContainer: "z-[1070]",
  selectFakeValue: "transform-none hidden data-[te-input-state-active]:block",
  selectFilterInput: "relative m-0 block w-full min-w-0 flex-auto rounded border border-solid border-gray-300 bg-transparent bg-clip-padding px-3 py-1.5 text-base font-normal text-gray-700 transition duration-300 ease-in-out motion-reduce:transition-none focus:border-primary focus:text-gray-700 focus:shadow-te-primary focus:outline-none dark:text-gray-200 dark:placeholder:text-gray-200",
  selectInput: "peer block min-h-[auto] w-full rounded border-0 bg-transparent outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-gray-200 dark:placeholder:text-gray-200 [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0 cursor-pointer data-[te-input-disabled]:bg-[#e9ecef] data-[te-input-disabled]:cursor-default group-data-[te-was-validated]/validation:mb-4 dark:data-[te-input-disabled]:bg-zinc-600",
  selectInputWhite: "!text-gray-50",
  selectInputSizeDefault: "py-[0.32rem] px-3 leading-[1.6]",
  selectInputSizeLg: "py-[0.32rem] px-3 leading-[2.15]",
  selectInputSizeSm: "py-[0.33rem] px-3 text-xs leading-[1.5]",
  selectLabel: "pointer-events-none absolute top-0 left-3 mb-0 max-w-[90%] origin-[0_0] truncate text-gray-500 transition-all duration-200 ease-out peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-gray-200 dark:peer-focus:text-gray-200 data-[te-input-state-active]:scale-[0.8] dark:peer-focus:text-primary",
  selectLabelWhite: "!text-gray-50",
  selectLabelSizeDefault: "pt-[0.37rem] leading-[1.6] peer-focus:-translate-y-[0.9rem] peer-data-[te-input-state-active]:-translate-y-[0.9rem] data-[te-input-state-active]:-translate-y-[0.9rem]",
  selectLabelSizeLg: "pt-[0.37rem] leading-[2.15] peer-focus:-translate-y-[1.15rem] peer-data-[te-input-state-active]:-translate-y-[1.15rem] data-[te-input-state-active]:-translate-y-[1.15rem]",
  selectLabelSizeSm: "pt-[0.37rem] text-xs leading-[1.5] peer-focus:-translate-y-[0.75rem] peer-data-[te-input-state-active]:-translate-y-[0.75rem] data-[te-input-state-active]:-translate-y-[0.75rem]",
  selectOption: "flex flex-row items-center justify-between w-full px-4 truncate text-gray-700 bg-transparent select-none cursor-pointer data-[te-input-multiple-active]:bg-black/5 hover:[&:not([data-te-select-option-disabled])]:bg-black/5 data-[te-input-state-active]:bg-black/5 data-[te-select-option-selected]:data-[te-input-state-active]:bg-black/5 data-[te-select-selected]:data-[te-select-option-disabled]:cursor-default data-[te-select-selected]:data-[te-select-option-disabled]:text-gray-400 data-[te-select-selected]:data-[te-select-option-disabled]:bg-transparent data-[te-select-option-selected]:bg-black/[0.02] data-[te-select-option-disabled]:text-gray-400 data-[te-select-option-disabled]:cursor-default group-data-[te-select-option-group-ref]/opt:pl-7 dark:text-gray-200 dark:hover:[&:not([data-te-select-option-disabled])]:bg-white/30 dark:data-[te-input-state-active]:bg-white/30 dark:data-[te-select-option-selected]:data-[te-input-state-active]:bg-white/30 dark:data-[te-select-option-disabled]:text-gray-400 dark:data-[te-input-multiple-active]:bg-white/30",
  selectAllOption: "",
  selectOptionGroup: "group/opt",
  selectOptionGroupLabel: "flex flex-row items-center w-full px-4 truncate bg-transparent text-black/50 select-none dark:text-gray-300",
  selectOptionIcon: "w-7 h-7 rounded-full",
  selectOptionSecondaryText: "block text-[0.8rem] text-gray-500 dark:text-gray-300",
  selectOptionText: "group",
  selectValidationValid: "hidden absolute -mt-3 w-auto text-sm text-green-600 cursor-pointer group-data-[te-was-validated]/validation:peer-valid:block",
  selectValidationInvalid: "hidden absolute -mt-3 w-auto text-sm text-[rgb(220,76,100)] cursor-pointer group-data-[te-was-validated]/validation:peer-invalid:block"
}, Bb = {
  dropdown: "string",
  formCheckInput: "string",
  formOutline: "string",
  initialized: "string",
  inputGroup: "string",
  noResult: "string",
  optionsList: "string",
  optionsWrapper: "string",
  optionsWrapperScrollbar: "string",
  selectArrow: "string",
  selectArrowDefault: "string",
  selectArrowLg: "string",
  selectArrowSm: "string",
  selectClearBtn: "string",
  selectClearBtnDefault: "string",
  selectClearBtnLg: "string",
  selectClearBtnSm: "string",
  selectDropdownContainer: "string",
  selectFakeValue: "string",
  selectFilterInput: "string",
  selectInput: "string",
  selectInputSizeDefault: "string",
  selectInputSizeLg: "string",
  selectInputSizeSm: "string",
  selectLabel: "string",
  selectLabelSizeDefault: "string",
  selectLabelSizeLg: "string",
  selectLabelSizeSm: "string",
  selectOption: "string",
  selectAllOption: "string",
  selectOptionGroup: "string",
  selectOptionGroupLabel: "string",
  selectOptionIcon: "string",
  selectOptionSecondaryText: "string",
  selectOptionText: "string"
};
class kr {
  constructor(t, e, i) {
    this._element = t, this._config = this._getConfig(e), this._classes = this._getClasses(i), this._config.selectPlaceholder && !this._config.multiple && this._addPlaceholderOption(), this._optionsToRender = this._getOptionsToRender(t), this._plainOptions = this._getPlainOptions(this._optionsToRender), this._filteredOptionsList = null, this._selectionModel = new Ug(this.multiple), this._activeOptionIndex = -1, this._activeOption = null, this._wrapperId = et("select-wrapper-"), this._dropdownContainerId = et("select-dropdown-container-"), this._selectAllId = et("select-all-"), this._debounceTimeoutId = null, this._dropdownHeight = this._config.selectOptionHeight * this._config.selectVisibleOptions, this._popper = null, this._input = null, this._label = d.next(this._element, kb)[0], this._notch = null, this._fakeValue = null, this._isFakeValueActive = !1, this._customContent = d.next(
      t,
      $b
    )[0], this._toggleButton = null, this._elementToggle = null, this._wrapper = null, this._inputEl = null, this._dropdownContainer = null, this._container = null, this._selectAllOption = null, this._init(), this._mutationObserver = null, this._isOpen = !1, this._addMutationObserver(), this._element && A.setData(t, yi, this);
  }
  static get NAME() {
    return mo;
  }
  get filterInput() {
    return d.findOne(
      xb,
      this._dropdownContainer
    );
  }
  get dropdown() {
    return d.findOne(Ob, this._dropdownContainer);
  }
  get optionsList() {
    return d.findOne(
      wl,
      this._dropdownContainer
    );
  }
  get optionsWrapper() {
    return d.findOne(
      Sb,
      this._dropdownContainer
    );
  }
  get clearButton() {
    return d.findOne(Db, this._wrapper);
  }
  get options() {
    return this._filteredOptionsList ? this._filteredOptionsList : this._plainOptions;
  }
  get value() {
    return this.multiple ? this._selectionModel.values : this._selectionModel.value;
  }
  get multiple() {
    return this._config.multiple;
  }
  get hasSelectAll() {
    return this.multiple && this._config.selectAll;
  }
  get hasSelection() {
    return this._selectionModel.selection || this._selectionModel.selections.length > 0;
  }
  _getConfig(t) {
    const e = h.getDataAttributes(this._element);
    return t = {
      ...Mb,
      ...e,
      ...t
    }, this._element.hasAttribute("multiple") && (t.multiple = !0), this._element.hasAttribute("disabled") && (t.disabled = !0), this._element.tabIndex && (t.tabIndex = this._element.getAttribute("tabIndex")), I(mo, t, Rb), t;
  }
  _getClasses(t) {
    const e = h.getDataClassAttributes(this._element);
    return t = {
      ...Pb,
      ...e,
      ...t
    }, I(mo, t, Bb), t;
  }
  _addPlaceholderOption() {
    const t = new Option("", "", !0, !0);
    t.hidden = !0, t.selected = !0, this._element.prepend(t);
  }
  _getOptionsToRender(t) {
    const e = [];
    return t.childNodes.forEach((n) => {
      if (n.nodeName === "OPTGROUP") {
        const o = {
          id: et("group-"),
          label: n.label,
          disabled: n.hasAttribute("disabled"),
          hidden: n.hasAttribute("hidden"),
          options: []
        };
        n.childNodes.forEach((a) => {
          a.nodeName === "OPTION" && o.options.push(
            this._createOptionObject(a, o)
          );
        }), e.push(o);
      } else
        n.nodeName === "OPTION" && e.push(this._createOptionObject(n));
    }), e;
  }
  _getPlainOptions(t) {
    if (!d.findOne("optgroup", this._element))
      return t;
    const i = [];
    return t.forEach((n) => {
      Object.prototype.hasOwnProperty.call(
        n,
        "options"
      ) ? n.options.forEach((r) => {
        i.push(r);
      }) : i.push(n);
    }), i;
  }
  _createOptionObject(t, e = {}) {
    const i = et("option-"), n = e.id ? e.id : null, o = e.disabled ? e.disabled : !1, r = t.selected || t.hasAttribute(bi), a = t.hasAttribute("disabled") || o, l = t.hasAttribute("hidden") || e && e.hidden, p = this.multiple, u = t.value, _ = t.label, f = h.getDataAttribute(
      t,
      "selectSecondaryText"
    ), g = h.getDataAttribute(t, "select-icon");
    return new bl(
      i,
      t,
      p,
      u,
      _,
      r,
      a,
      l,
      f,
      n,
      g
    );
  }
  _getNavigationOptions() {
    const t = this.options.filter((e) => !e.hidden);
    return this.hasSelectAll ? [this._selectAllOption, ...t] : t;
  }
  _init() {
    this._renderMaterialWrapper(), this._wrapper = d.findOne(`#${this._wrapperId}`), this._input = d.findOne(yl, this._wrapper), this._config.disabled && this._input.setAttribute(go, "");
    const t = this._config.selectContainer;
    t === "body" ? this._container = document.body : this._container = d.findOne(t), this._initOutlineInput(), this._setDefaultSelections(), this._updateInputValue(), this._appendFakeValue(), this._updateFakeLabelPosition(), this._updateLabelPosition(), this._updateClearButtonVisibility(), this._bindComponentEvents(), this.hasSelectAll && (this._selectAllOption = this._createSelectAllOption()), this._dropdownContainer = vl(
      this._dropdownContainerId,
      this._config,
      this._input.offsetWidth,
      this._dropdownHeight,
      this._selectAllOption,
      this._optionsToRender,
      this._customContent,
      this._classes
    ), this._setFirstActiveOption(), this._listenToFocusChange();
  }
  _renderMaterialWrapper() {
    const t = hb(
      this._wrapperId,
      this._config,
      this._label,
      this._classes,
      this._config.customArrow
    );
    this._element.parentNode.insertBefore(t, this._element), h.addClass(this._element, this._classes.initialized), t.appendChild(this._element);
  }
  _initOutlineInput() {
    const t = d.findOne(
      kl,
      this._wrapper
    );
    new V(
      t,
      {
        inputFormWhite: this._config.selectFormWhite
      },
      this._classes
    ).init(), this._notch = d.findOne(bo, this._wrapper);
  }
  _bindComponentEvents() {
    this._listenToComponentKeydown(), this._listenToWrapperClick(), this._listenToClearBtnClick(), this._listenToClearBtnKeydown();
  }
  _setDefaultSelections() {
    this.options.forEach((t) => {
      t.selected && this._selectionModel.select(t);
    });
  }
  _listenToComponentKeydown() {
    c.on(this._wrapper, "keydown", this._handleKeydown.bind(this));
  }
  _handleKeydown(t) {
    this._isOpen && !this._config.selectFilter ? this._handleOpenKeydown(t) : this._handleClosedKeydown(t);
  }
  _handleOpenKeydown(t) {
    const e = t.keyCode, i = e === we || e === U && t.altKey || e === ke;
    if (e === ke && this._config.selectAutoSelect && !this.multiple && this._handleAutoSelection(this._activeOption), i) {
      this.close(), this._input.focus();
      return;
    }
    switch (e) {
      case z:
        this._setNextOptionActive(), this._scrollToOption(this._activeOption);
        break;
      case U:
        this._setPreviousOptionActive(), this._scrollToOption(this._activeOption);
        break;
      case Te:
        this._setFirstOptionActive(), this._scrollToOption(this._activeOption);
        break;
      case Ee:
        this._setLastOptionActive(), this._scrollToOption(this._activeOption);
        break;
      case it:
        t.preventDefault(), this._activeOption && (this.hasSelectAll && this._activeOptionIndex === 0 ? this._handleSelectAll() : this._handleSelection(this._activeOption));
        return;
      default:
        return;
    }
    t.preventDefault();
  }
  _handleClosedKeydown(t) {
    const e = t.keyCode;
    if (e === it && t.preventDefault(), (e === it || e === z && t.altKey || e === z && this.multiple) && this.open(), this.multiple)
      switch (e) {
        case z:
          this.open();
          break;
        case U:
          this.open();
          break;
        default:
          return;
      }
    else
      switch (e) {
        case z:
          this._setNextOptionActive(), this._handleSelection(this._activeOption);
          break;
        case U:
          this._setPreviousOptionActive(), this._handleSelection(this._activeOption);
          break;
        case Te:
          this._setFirstOptionActive(), this._handleSelection(this._activeOption);
          break;
        case Ee:
          this._setLastOptionActive(), this._handleSelection(this._activeOption);
          break;
        default:
          return;
      }
    t.preventDefault();
  }
  _scrollToOption(t) {
    if (!t)
      return;
    let e;
    const i = this.options.filter((u) => !u.hidden);
    this.hasSelectAll ? e = i.indexOf(t) + 1 : e = i.indexOf(t);
    const n = this._getNumberOfGroupsBeforeOption(e), o = e + n, r = this.optionsWrapper, a = r.offsetHeight, l = this._config.selectOptionHeight, p = r.scrollTop;
    if (e > -1) {
      const u = o * l, _ = u + l > p + a;
      u < p ? r.scrollTop = u : _ ? r.scrollTop = u - a + l : r.scrollTop = p;
    }
  }
  _getNumberOfGroupsBeforeOption(t) {
    const e = this.options.filter((r) => !r.hidden), i = this._optionsToRender.filter((r) => !r.hidden), n = this.hasSelectAll ? t - 1 : t;
    let o = 0;
    for (let r = 0; r <= n; r++)
      e[r].groupId && i[o] && i[o].id && e[r].groupId === i[o].id && o++;
    return o;
  }
  _setNextOptionActive() {
    let t = this._activeOptionIndex + 1;
    const e = this._getNavigationOptions();
    if (e[t]) {
      for (; e[t].disabled; )
        if (t += 1, !e[t])
          return;
      this._updateActiveOption(e[t], t);
    }
  }
  _setPreviousOptionActive() {
    let t = this._activeOptionIndex - 1;
    const e = this._getNavigationOptions();
    if (e[t]) {
      for (; e[t].disabled; )
        if (t -= 1, !e[t])
          return;
      this._updateActiveOption(e[t], t);
    }
  }
  _setFirstOptionActive() {
    const e = this._getNavigationOptions();
    this._updateActiveOption(e[0], 0);
  }
  _setLastOptionActive() {
    const t = this._getNavigationOptions(), e = t.length - 1;
    this._updateActiveOption(t[e], e);
  }
  _updateActiveOption(t, e) {
    const i = this._activeOption;
    i && i.removeActiveStyles(), t.setActiveStyles(), this._activeOptionIndex = e, this._activeOption = t;
  }
  _listenToWrapperClick() {
    c.on(this._wrapper, "click", () => {
      this.toggle();
    });
  }
  _listenToClearBtnClick() {
    c.on(this.clearButton, "click", (t) => {
      t.preventDefault(), t.stopPropagation(), this._handleClear();
    });
  }
  _listenToClearBtnKeydown() {
    c.on(this.clearButton, "keydown", (t) => {
      t.keyCode === it && (this._handleClear(), t.preventDefault(), t.stopPropagation());
    });
  }
  _handleClear() {
    if (this.multiple)
      this._selectionModel.clear(), this._deselectAllOptions(this.options), this.hasSelectAll && this._updateSelectAllState();
    else {
      const t = this._selectionModel.selection;
      this._selectionModel.clear(), t.deselect();
    }
    this._fakeValue.textContent = "", this._updateInputValue(), this._updateFakeLabelPosition(), this._updateLabelPosition(), this._updateClearButtonVisibility(), this._emitValueChangeEvent(null), this._emitNativeChangeEvent();
  }
  _listenToOptionsClick() {
    c.on(this.optionsWrapper, "click", (t) => {
      if (t.target.hasAttribute(
        yb
      ))
        return;
      const i = t.target.nodeName === "DIV" ? t.target : d.closest(t.target, Ib);
      if (i.hasAttribute(wb)) {
        this._handleSelectAll();
        return;
      }
      const o = i.dataset.teId, r = this.options.find((a) => a.id === o);
      r && !r.disabled && this._handleSelection(r);
    });
  }
  _handleSelectAll() {
    this._selectAllOption.selected ? (this._deselectAllOptions(this.options), this._selectAllOption.deselect()) : (this._selectAllOptions(this.options), this._selectAllOption.select()), this._updateInputValue(), this._updateFakeLabelPosition(), this._updateLabelPosition(), this._updateClearButtonVisibility(), this._emitValueChangeEvent(this.value), this._emitNativeChangeEvent();
  }
  _selectAllOptions(t) {
    t.forEach((e) => {
      !e.selected && !e.disabled && (this._selectionModel.select(e), e.select());
    });
  }
  _deselectAllOptions(t) {
    t.forEach((e) => {
      e.selected && !e.disabled && (this._selectionModel.deselect(e), e.deselect());
    });
  }
  _handleSelection(t) {
    this.multiple ? (this._handleMultiSelection(t), this.hasSelectAll && this._updateSelectAllState()) : this._handleSingleSelection(t), this._updateInputValue(), this._updateFakeLabelPosition(), this._updateLabelPosition(), this._updateClearButtonVisibility();
  }
  _handleAutoSelection(t) {
    this._singleOptionSelect(t), this._updateInputValue(), this._updateFakeLabelPosition(), this._updateLabelPosition(), this._updateClearButtonVisibility();
  }
  _handleSingleSelection(t) {
    this._singleOptionSelect(t), this.close(), this._input.focus();
  }
  _singleOptionSelect(t) {
    const e = this._selectionModel.selections[0];
    e && e !== t && (this._selectionModel.deselect(e), e.deselect(), e.node.setAttribute(bi, !1), c.trigger(this._element, El, {
      value: e.value
    })), (!e || e && t !== e) && (this._selectionModel.select(t), t.select(), t.node.setAttribute(bi, !0), c.trigger(this._element, Tl, {
      value: t.value
    }), this._emitValueChangeEvent(this.value), this._emitNativeChangeEvent());
  }
  _handleMultiSelection(t) {
    t.selected ? (this._selectionModel.deselect(t), t.deselect(), t.node.setAttribute(bi, !1), c.trigger(this._element, El, {
      value: t.value
    })) : (this._selectionModel.select(t), t.select(), t.node.setAttribute(bi, !0), c.trigger(this._element, Tl, {
      value: t.value
    })), this._emitValueChangeEvent(this.value), this._emitNativeChangeEvent();
  }
  _emitValueChangeEvent(t) {
    c.trigger(this._element, Cb, { value: t });
  }
  _emitNativeChangeEvent() {
    c.trigger(this._element, Ab);
  }
  _updateInputValue() {
    const t = this.multiple ? this._selectionModel.labels : this._selectionModel.label;
    let e;
    this.multiple && this._config.selectDisplayedLabels !== -1 && this._selectionModel.selections.length > this._config.selectDisplayedLabels ? e = `${this._selectionModel.selections.length} ${this._config.selectOptionsSelectedLabel}` : e = t, !this.multiple && !this._isSelectionValid(this._selectionModel.selection) ? this._input.value = "" : this._isLabelEmpty(this._selectionModel.selection) ? this._input.value = " " : e ? this._input.value = e : this.multiple || !this._optionsToRender[0] ? this._input.value = "" : this._input.value = this._optionsToRender[0].label;
  }
  _isSelectionValid(t) {
    return !(t && (t.disabled || t.value === ""));
  }
  _isLabelEmpty(t) {
    return !!(t && t.label === "");
  }
  _appendFakeValue() {
    if (!this._selectionModel.selection || this._selectionModel._multiple)
      return;
    const t = this._selectionModel.selection.label;
    this._fakeValue = vb(t, this._classes), d.findOne(
      kl,
      this._wrapper
    ).appendChild(this._fakeValue);
  }
  _updateLabelPosition() {
    const t = this._element.hasAttribute(Cl), e = this._input.value !== "";
    this._label && (t && (e || this._isOpen || this._isFakeValueActive) ? (this._label.setAttribute(J, ""), this._notch.setAttribute(J, "")) : (this._label.removeAttribute(J), this._notch.removeAttribute(J, "")));
  }
  _updateLabelPositionWhileClosing() {
    this._label && (this._input.value !== "" || this._isFakeValueActive ? (this._label.setAttribute(J, ""), this._notch.setAttribute(J, "")) : (this._label.removeAttribute(J), this._notch.removeAttribute(J)));
  }
  _updateFakeLabelPosition() {
    this._fakeValue && (this._input.value === "" && this._fakeValue.innerHTML !== "" && !this._config.selectPlaceholder ? (this._isFakeValueActive = !0, this._fakeValue.setAttribute(J, "")) : (this._isFakeValueActive = !1, this._fakeValue.removeAttribute(J)));
  }
  _updateClearButtonVisibility() {
    if (!this.clearButton)
      return;
    this._selectionModel.selection || this._selectionModel.selections.length > 0 ? h.addStyle(this.clearButton, { display: "block" }) : h.addStyle(this.clearButton, { display: "none" });
  }
  _updateSelectAllState() {
    const t = this._selectAllOption.selected, e = Qo(this.options);
    !e && t ? this._selectAllOption.deselect() : e && !t && this._selectAllOption.select();
  }
  toggle() {
    this._isOpen ? this.close() : this.open();
  }
  open() {
    const t = this._config.disabled, e = c.trigger(this._element, Eb);
    this._isOpen || t || e.defaultPrevented || (this._openDropdown(), this._updateDropdownWidth(), this._setFirstActiveOption(), this._scrollToOption(this._activeOption), this._config.selectFilter && (setTimeout(() => {
      this.filterInput.focus();
    }, 0), this._listenToSelectSearch(), this._listenToDropdownKeydown()), this._listenToOptionsClick(), this._listenToOutsideClick(), this._listenToWindowResize(), this._isOpen = !0, this._updateLabelPosition(), this._setInputActiveStyles());
  }
  _openDropdown() {
    this._popper = se(this._input, this._dropdownContainer, {
      placement: "bottom-start",
      modifiers: [
        {
          name: "offset",
          options: {
            offset: [0, 1]
          }
        }
      ]
    }), this._container.appendChild(this._dropdownContainer), setTimeout(() => {
      this.dropdown.setAttribute(Al, "");
    }, 0);
  }
  _updateDropdownWidth() {
    const t = this._input.offsetWidth;
    h.addStyle(this._dropdownContainer, { width: `${t}px` });
  }
  _setFirstActiveOption() {
    const t = this._getNavigationOptions(), e = this._activeOption;
    e && e.removeActiveStyles();
    const i = this.multiple ? this._selectionModel.selections[0] : this._selectionModel.selection;
    i ? (this._activeOption = i, i.setActiveStyles(), this._activeOptionIndex = t.findIndex(
      (n) => n === i
    )) : (this._activeOption = null, this._activeOptionIndex = -1);
  }
  _setInputActiveStyles() {
    this._input.setAttribute(zt, ""), d.findOne(bo, this._wrapper).setAttribute(
      zt,
      ""
    );
  }
  _listenToWindowResize() {
    c.on(window, "resize", this._handleWindowResize.bind(this));
  }
  _handleWindowResize() {
    this._dropdownContainer && this._updateDropdownWidth();
  }
  _listenToSelectSearch() {
    this.filterInput.addEventListener("input", (t) => {
      const e = t.target.value, i = this._config.selectFilterDebounce;
      this._debounceFilter(e, i);
    });
  }
  _debounceFilter(t, e) {
    this._debounceTimeoutId && clearTimeout(this._debounceTimeoutId), this._debounceTimeoutId = setTimeout(() => {
      this._filterOptions(t);
    }, e);
  }
  _filterOptions(t) {
    const e = [];
    this._optionsToRender.forEach((o) => {
      const r = Object.prototype.hasOwnProperty.call(
        o,
        "options"
      ), a = !r && o.label.toLowerCase().includes(t.toLowerCase()), l = {};
      r && (l.label = o.label, l.options = this._filter(t, o.options), l.options.length > 0 && e.push(l)), a && e.push(o);
    });
    const i = this._config.selectNoResultText !== "", n = e.length !== 0;
    if (n)
      this._updateOptionsListTemplate(e), this._popper.forceUpdate(), this._filteredOptionsList = this._getPlainOptions(e), this.hasSelectAll && this._updateSelectAllState(), this._setFirstActiveOption();
    else if (!n && i) {
      const o = this._getNoResultTemplate();
      this.optionsWrapper.innerHTML = o;
    }
  }
  _updateOptionsListTemplate(t) {
    const e = d.findOne(wl, this._dropdownContainer) || d.findOne(Lb, this._dropdownContainer), i = Ah(
      t,
      this._selectAllOption,
      this._config,
      this._classes
    );
    this.optionsWrapper.removeChild(e), this.optionsWrapper.appendChild(i);
  }
  _getNoResultTemplate() {
    return `<div class="${this._classes.noResult}" ${xh} style="height: ${this._config.selectOptionHeight}px">${this._config.selectNoResultText}</div>`;
  }
  _filter(t, e) {
    const i = t.toLowerCase();
    return e.filter(
      (n) => n.label.toLowerCase().includes(i)
    );
  }
  _listenToDropdownKeydown() {
    c.on(
      this.dropdown,
      "keydown",
      this._handleOpenKeydown.bind(this)
    );
  }
  _listenToOutsideClick() {
    this._outsideClick = this._handleOutSideClick.bind(this), c.on(document, "click", this._outsideClick);
  }
  _listenToFocusChange(t = !0) {
    if (t === !1) {
      c.off(
        this._input,
        "focus",
        () => this._notch.setAttribute(zt, "")
      ), c.off(
        this._input,
        "blur",
        () => this._notch.removeAttribute(zt)
      );
      return;
    }
    c.on(
      this._input,
      "focus",
      () => this._notch.setAttribute(zt, "")
    ), c.on(
      this._input,
      "blur",
      () => this._notch.removeAttribute(zt)
    );
  }
  _handleOutSideClick(t) {
    const e = this._wrapper && this._wrapper.contains(t.target), i = t.target === this._dropdownContainer, n = this._dropdownContainer && this._dropdownContainer.contains(t.target);
    let o;
    this._toggleButton || (this._elementToggle = d.find(Nb)), this._elementToggle && this._elementToggle.forEach((r) => {
      const a = h.getDataAttribute(
        r,
        "select-toggle"
      );
      (a === this._element.id || this._element.classList.contains(a)) && (this._toggleButton = r, o = this._toggleButton.contains(t.target));
    }), !e && !i && !n && !o && this.close();
  }
  close() {
    const t = c.trigger(this._element, Tb), e = cn(
      this._dropdownContainer.children[0]
    );
    !this._isOpen || t.defaultPrevented || (this._config.selectFilter && this.hasSelectAll && (this._resetFilterState(), this._updateOptionsListTemplate(this._optionsToRender), this._config.multiple && this._updateSelectAllState()), this._removeDropdownEvents(), this.dropdown.removeAttribute(Al), setTimeout(() => {
      this._input.removeAttribute(zt), this._input.blur(), d.findOne(bo, this._wrapper).removeAttribute(
        zt
      ), this._label && !this.hasSelection && (this._label.removeAttribute(J), this._notch.setAttribute(J, ""), this._input.removeAttribute(J), this._notch.removeAttribute(J)), this._updateLabelPositionWhileClosing();
    }, 0), setTimeout(() => {
      this._container && this._dropdownContainer.parentNode === this._container && this._container.removeChild(this._dropdownContainer), this._popper.destroy(), this._isOpen = !1, c.off(this.dropdown, "transitionend");
    }, e));
  }
  _resetFilterState() {
    this.filterInput.value = "", this._filteredOptionsList = null;
  }
  _removeDropdownEvents() {
    c.off(document, "click", this._outsideClick), this._config.selectFilter && c.off(this.dropdown, "keydown"), c.off(this.optionsWrapper, "click");
  }
  _addMutationObserver() {
    this._mutationObserver = new MutationObserver(() => {
      this._wrapper && (this._updateSelections(), this._updateDisabledState());
    }), this._observeMutationObserver();
  }
  _updateSelections() {
    this._optionsToRender = this._getOptionsToRender(this._element), this._plainOptions = this._getPlainOptions(this._optionsToRender), this._selectionModel.clear(), this._setDefaultSelections(), this._updateInputValue(), this._updateFakeLabelPosition(), this._updateLabelPosition(), this._updateClearButtonVisibility(), this.hasSelectAll && this._updateSelectAllState();
    const t = this._config.filter && this.filterInput && this.filterInput.value;
    this._isOpen && !t ? (this._updateOptionsListTemplate(this._optionsToRender), this._setFirstActiveOption()) : this._isOpen && t ? (this._filterOptions(this.filterInput.value), this._setFirstActiveOption()) : this._dropdownContainer = vl(
      this._dropdownContainerId,
      this._config,
      this._input.offsetWidth,
      this._dropdownHeight,
      this._selectAllOption,
      this._optionsToRender,
      this._customContent,
      this._classes
    );
  }
  _updateDisabledState() {
    const t = d.findOne(yl, this._wrapper);
    this._element.hasAttribute("disabled") ? (this._config.disabled = !0, t.setAttribute("disabled", ""), t.setAttribute(go, "")) : (this._config.disabled = !1, t.removeAttribute("disabled"), t.removeAttribute(go));
  }
  _observeMutationObserver() {
    this._mutationObserver && this._mutationObserver.observe(this._element, {
      attributes: !0,
      childList: !0,
      characterData: !0,
      subtree: !0
    });
  }
  _disconnectMutationObserver() {
    this.mutationObserver && (this._mutationObserver.disconnect(), this._mutationObserver = null);
  }
  _createSelectAllOption() {
    const t = this._selectAllId, e = null, i = !0, n = "select-all", o = this._config.selectAllLabel, r = Qo(this.options), a = !1, l = !1, p = null, u = null, _ = null;
    return new bl(
      t,
      e,
      i,
      n,
      o,
      r,
      a,
      l,
      p,
      u,
      _
    );
  }
  dispose() {
    this._removeComponentEvents(), this._destroyMaterialSelect(), this._listenToFocusChange(!1), A.removeData(this._element, yi);
  }
  _removeComponentEvents() {
    c.off(this.input, "click"), c.off(this.wrapper, this._handleKeydown.bind(this)), c.off(this.clearButton, "click"), c.off(this.clearButton, "keydown"), c.off(window, "resize", this._handleWindowResize.bind(this));
  }
  _destroyMaterialSelect() {
    this._isOpen && this.close(), this._destroyMaterialTemplate();
  }
  _destroyMaterialTemplate() {
    const t = this._wrapper.parentNode, e = d.find("label", this._wrapper);
    t.appendChild(this._element), e.forEach((i) => {
      t.appendChild(i);
    }), e.forEach((i) => {
      i.removeAttribute(J);
    }), h.removeClass(this._element, this._classes.initialized), this._element.removeAttribute(Cl), t.removeChild(this._wrapper);
  }
  setValue(t) {
    this.options.filter((i) => i.selected).forEach((i) => i.nativeOption.selected = !1), Array.isArray(t) ? t.forEach((i) => {
      this._selectByValue(i);
    }) : this._selectByValue(t), this._updateSelections(), this._emitValueChangeEvent(this.value);
  }
  _selectByValue(t) {
    const e = this.options.find(
      (i) => i.value === t
    );
    return e ? (e.nativeOption.selected = !0, !0) : !1;
  }
  static jQueryInterface(t, e) {
    return this.each(function() {
      let i = A.getData(this, yi);
      const n = typeof t == "object" && t;
      if (!(!i && /dispose/.test(t)) && (i || (i = new kr(this, n)), typeof t == "string")) {
        if (typeof i[t] > "u")
          throw new TypeError(`No method named "${t}"`);
        i[t](e);
      }
    });
  }
  static getInstance(t) {
    return A.getData(t, yi);
  }
  static getOrCreateInstance(t, e = {}) {
    return this.getInstance(t) || new this(t, typeof e == "object" ? e : null);
  }
}
const Hb = ({ inputID: s, labelText: t }, e) => `<div data-te-chips-input-wrapper data-te-input-wrapper-init class="${e.chipsInputWrapper}">
      <input
          type="text"
          class="${e.chipsInput}"
          id="${s}"
          placeholder="Example label" />
        <label
          for="${s}"
          class="${e.chipsLabel}"
          >${t}
        </label>
      </div>
    </div>`, Vb = ({ text: s, iconSVG: t }, e) => `<div data-te-chip-init data-te-ripple-init class="${e.chipElement}">
    <span data-te-chip-text>${s}</span> 
      <span data-te-chip-close class="${e.chipCloseIcon}">
        ${t}
      </span>
  </div>`, en = "chip", Wb = `te.${en}`, Oh = "data-te-chip-close", vo = `[${Oh}]`, Fb = "delete.te.chips", Yb = "select.te.chip", jb = '<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-3 h-3"> <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" /></svg>', Kb = {
  text: "string",
  closeIcon: "boolean",
  img: "object",
  iconSVG: "string"
}, zb = {
  text: "",
  closeIcon: !1,
  img: { path: "", alt: "" },
  iconSVG: jb
}, Ub = {
  icon: "float-right pl-[8px] text-[16px] opacity-[.53] cursor-pointer fill-[#afafaf] hover:text-[#8b8b8b] transition-all duration-200 ease-in-out",
  chipElement: "flex justify-between items-center h-[32px] leading-loose py-[5px] px-[12px] mr-4 my-[5px] text-[13px] font-normal text-[#4f4f4f] cursor-pointer bg-[#eceff1] dark:text-white dark:bg-neutral-600 rounded-[16px] transition-[opacity] duration-300 ease-linear [word-wrap: break-word] shadow-none normal-case hover:!shadow-none active:bg-[#cacfd1] inline-block font-medium leading-normal text-[#4f4f4f] text-center no-underline align-middle cursor-pointer select-none border-[.125rem] border-solid border-transparent py-1.5 px-3 text-xs rounded",
  chipCloseIcon: "w-4 float-right pl-[8px] text-[16px] opacity-[.53] cursor-pointer fill-[#afafaf] hover:fill-[#8b8b8b] dark:fill-gray-400 dark:hover:fill-gray-100 transition-all duration-200 ease-in-out"
}, Xb = {
  icon: "string",
  chipElement: "string",
  chipCloseIcon: "string"
};
class vi {
  constructor(t, e = {}, i) {
    this._element = t, this._options = this._getConfig(e), this._classes = this._getClasses(i);
  }
  // Getters
  static get NAME() {
    return en;
  }
  // Public
  init() {
    this._appendCloseIcon(), this._handleDelete(), this._handleTextChip(), this._handleClickOnChip();
  }
  dispose() {
    this._element = null, this._options = null, c.off(this._element, "click");
  }
  appendChip() {
    const { text: t, closeIcon: e, iconSVG: i } = this._options;
    return Vb({ text: t, closeIcon: e, iconSVG: i }, this._classes);
  }
  // Private
  _appendCloseIcon(t = this._element) {
    if (!(d.find(vo, this._element).length > 0) && this._options.closeIcon) {
      const e = $("span");
      e.classList = this._classes.icon, e.setAttribute(Oh), e.innerHTML = this._options.iconSVG, t.insertAdjacentElement("beforeend", e);
    }
  }
  _handleClickOnChip() {
    c.on(this._element, "click", (t) => {
      const { textContent: e } = t.target, i = {};
      i.tag = e.trim(), c.trigger(Yb, { event: t, obj: i });
    });
  }
  _handleDelete() {
    d.find(
      vo,
      this._element
    ).length !== 0 && c.on(this._element, "click", vo, () => {
      c.trigger(this._element, Fb), this._element.remove();
    });
  }
  _handleTextChip() {
    this._element.innerText === "" && (this._element.innerText = this._options.text);
  }
  _getConfig(t) {
    const e = {
      ...zb,
      ...h.getDataAttributes(this._element),
      ...t
    };
    return I(en, e, Kb), e;
  }
  _getClasses(t) {
    const e = h.getDataClassAttributes(this._element);
    return t = {
      ...Ub,
      ...e,
      ...t
    }, I(en, t, Xb), t;
  }
  static getInstance(t) {
    return A.getData(t, Wb);
  }
  static getOrCreateInstance(t, e = {}) {
    return this.getInstance(t) || new this(t, typeof e == "object" ? e : null);
  }
}
const Hi = "chips", Gi = `data-te-${Hi}`, xl = `te.${Hi}`, Gb = `${Gi}-input-init`, bt = `${Gi}-active`, Ol = `${Gi}-initial`, Sh = `${Gi}-placeholder`, qb = `${Gi}-input-wrapper`, Jo = "data-te-chip-init", Ih = "data-te-chip-close", Dh = "data-te-chip-text", Zb = `[${bt}]`, tr = `[${Jo}]`, Qb = `${tr}${Zb}`, To = `[${Ih}]`, Jb = `[${qb}]`, tv = `[${Dh}]`, ev = `[${Sh}]`, iv = "data-te-input-notch-leading-ref", sv = "data-te-input-notch-middle-ref", nv = `[${iv}]`, ov = `[${sv}]`, Ne = "data-te-input-state-active", Eo = "[data-te-input-notch-ref]", rv = "add.te.chips", av = "arrowDown.te.chips", lv = "arrowLeft.te.chips", cv = "arrowRight.te.chips", hv = "arrowUp.te.chips", Sl = "delete.te.chips", Il = "select.te.chips", dv = {
  inputID: "string",
  parentSelector: "string",
  initialValues: "array",
  editable: "boolean",
  labelText: "string",
  inputClasses: "object",
  inputOptions: "object"
}, uv = {
  inputID: et("chips-input-"),
  parentSelector: "",
  initialValues: [{ tag: "init1" }, { tag: "init2" }],
  editable: !1,
  labelText: "Example label",
  inputClasses: {},
  inputOptions: {}
}, pv = {
  opacity: "opacity-0",
  inputWrapperPadding: "p-[5px]",
  transition: "transition-all duration-300 ease-[cubic-bezier(0.25,0.1,0.25,1)]",
  contentEditable: "outline-none !border-[3px] !border-solid !border-[#b2b3b4]",
  chipsInputWrapper: "relative flex items-center flex-wrap transition-all duration-300 ease-[cubic-bezier(0.25,0.1,0.25,1)]",
  chipsInput: "peer block min-h-[auto] w-[150px] rounded border-0 bg-transparent py-[0.32rem] px-3 leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-gray-200 dark:placeholder:text-gray-200 [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0",
  chipsLabel: "pointer-events-none absolute top-0 left-3 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-gray-500 transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[0.9rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-gray-200 dark:peer-focus:text-gray-200"
}, _v = {
  opacity: "string",
  inputWrapperPadding: "string",
  transition: "string",
  contentEditable: "string",
  chipsInputWrapper: "string",
  chipsInput: "string",
  chipsLabel: "string"
};
class XA extends vi {
  constructor(e, i = {}, n) {
    super(e, i);
    wt(this, "_handleBlurInput", ({ target: e }) => {
      e.value.length > 0 && this._handleCreateChip(e, e.value), this.allChips.length > 0 ? (e.setAttribute(bt, ""), this.input.setAttribute(Ne, ""), d.findOne(
        Eo,
        this.input.parentNode
      ).setAttribute(Ne, ""), this.chipsInputWrapper.classList.add(
        ...this._classes.inputWrapperPadding.split(" ")
      )) : (e.removeAttribute(bt), this.input.removeAttribute(Ne), d.findOne(
        Eo,
        this.input.parentNode
      ).removeAttribute(Ne), this.chipsInputWrapper.classList.remove(
        ...this._classes.inputWrapperPadding.split(" ")
      )), this.allChips.forEach((i) => i.removeAttribute(bt));
    });
    this._element = e, this._inputInstance = null, this._element && A.setData(e, xl, this), this._options = this._getConfig(i), this._classes = this._getClasses(n), this.numberClicks = 0, this.init();
  }
  // Getters
  static get NAME() {
    return Hi;
  }
  get activeChip() {
    return d.findOne(Qb, this._element);
  }
  get input() {
    return d.findOne("input", this._element);
  }
  get allChips() {
    return d.find(tr, this._element);
  }
  get chipsInputWrapper() {
    return d.findOne(Jb, this._element);
  }
  // Public
  init() {
    this._setChipsClass(), this._appendInputToElement(Sh), this._handleInitialValue(), this._handleInputText(), this._handleKeyboard(), this._handleChipsOnSelect(), this._handleEditable(), this._handleChipsFocus(), this._handleClicksOnChips(), this._inputInstance._getLabelWidth(), this._inputInstance._applyNotch();
  }
  dispose() {
    this._element = null, this._options = null;
  }
  // Private
  _getNotchData() {
    this._notchMiddle = d.findOne(
      ov,
      this._element
    ), this._notchLeading = d.findOne(
      nv,
      this._element
    );
  }
  _setChipsClass() {
    this._element.setAttribute(Gb, "");
  }
  _handleDeleteEvents(e) {
    const [i] = this.allChips.slice(-1);
    if (this.activeChip === null)
      i.remove(), this._handleEvents(e, Sl);
    else {
      const n = this.allChips.findIndex((a) => a === this.activeChip), o = this._handleActiveChipAfterRemove(n), r = [];
      if (this.activeChip === null)
        return;
      this.activeChip.remove(), this._handleEvents(e, Sl), this.numberClicks = n, o.setAttribute(bt, ""), this.allChips.forEach((a) => {
        a.hasAttribute(bt) && (r.push(a), r.length > 1 && this.allChips.forEach((l) => l.remove()));
      });
    }
  }
  _handleUpEvents(e) {
    this.numberClicks += 1, this.numberClicks === this.allChips.length + 1 && (this.numberClicks = 0), this._handleRightKeyboardArrow(this.numberClicks), this._handleEvents(e, cv), this._handleEvents(e, hv);
  }
  _handleDownEvents(e) {
    this.numberClicks -= 1, this.numberClicks <= 0 && (this.numberClicks = this.allChips.length), this._handleLeftKeyboardArrow(this.numberClicks), this._handleEvents(e, lv), this._handleEvents(e, av);
  }
  _keyboardEvents(e) {
    const { target: i, keyCode: n, ctrlKey: o } = e;
    i.value.length > 0 || this.allChips.length === 0 || (n === om || n === rm ? this._handleDeleteEvents(e) : n === ze || n === U ? this._handleUpEvents(e) : n === Ke || n === z ? this._handleDownEvents(e) : n === 65 && o && this._handleAddActiveClass());
  }
  _handleKeyboard() {
    c.on(
      this.input,
      "keydown",
      (e) => this._keyboardEvents(e)
    );
  }
  _handleEditable() {
    const { editable: e } = this._options;
    e && this.allChips.forEach((i) => {
      c.on(i, "dblclick", (n) => {
        const o = d.findOne(To, i);
        i.classList.add(...this._classes.contentEditable.split(" ")), i.contentEditable = !0, i.focus(), setTimeout(() => {
          h.addStyle(o, { display: "none" });
        }, 200), o.classList.add(...this._classes.opacity.split(" ")), n.target.textContent, c.trigger(i, Il, {
          event: n,
          allChips: this.allChips
        });
      }), c.on(document, "click", ({ target: n }) => {
        const o = d.findOne(To, i), r = d.findOne(tv, i), a = n === i, l = i && i.contains(n);
        !a && !l && (i.contentEditable = !1, i.classList.remove(...this._classes.contentEditable.split(" ")), r.textContent !== "" && setTimeout(() => {
          h.addStyle(o, { display: "block" }), o.classList.remove(...this._classes.opacity.split(" "));
        }, 160)), r.textContent === "" && (setTimeout(() => {
          i.classList.add(...this._classes.opacity.split(" "));
        }, 200), setTimeout(() => {
          i.remove();
        }, 300));
      });
    });
  }
  _handleRemoveActiveClass() {
    this.allChips.forEach((e) => e.removeAttribute(bt));
  }
  _handleAddActiveClass() {
    this.allChips.forEach((e) => e.setAttribute(bt, ""));
  }
  _handleRightKeyboardArrow(e) {
    this._handleRemoveActiveClass(), e === 0 && (e = 1), this._handleAddActiveClassWithKebyboard(e);
  }
  _handleLeftKeyboardArrow(e) {
    this._handleRemoveActiveClass(), this._handleAddActiveClassWithKebyboard(e);
  }
  _handleActiveChipAfterRemove(e) {
    const i = e === 0 ? 1 : e - 1;
    return this.allChips[i];
  }
  _handleClicksOnChips() {
    c.on(this._element, "click", () => {
      this.allChips.length === 0 && (this.chipsInputWrapper.classList.remove(
        ...this._classes.inputWrapperPadding.split(" ")
      ), this.input.removeAttribute(bt));
    });
  }
  _handleTextContent() {
    const e = [];
    return this.allChips.forEach((i) => e.push({ tag: i.textContent.trim() })), e;
  }
  _handleEvents(e, i) {
    const n = this._handleTextContent(), o = this.allChips.filter(
      (r) => r.hasAttribute(bt) && r
    );
    c.trigger(this._element, i, {
      event: e,
      allChips: this.allChips,
      arrOfObjects: n,
      active: o,
      activeObj: {
        tag: o.length <= 0 ? "" : o[0].textContent.trim()
      }
    });
  }
  _handleChipsFocus() {
    c.on(this._element, "click", ({ target: { attributes: e } }) => {
      const i = [...e].map((n) => n.name);
      i.includes(Jo) || i.includes(Ih) || i.includes(Dh) || this.input.focus();
    });
  }
  _handleInitialValue() {
    if (this._appendInputToElement(Ol), this._element.hasAttribute(Ol)) {
      const { initialValues: e } = this._options;
      e.forEach(
        ({ tag: i }) => this._handleCreateChip(this.input, i)
      ), d.findOne(
        Eo,
        this.input.parentNode
      ).setAttribute(Ne, ""), this.input.setAttribute(bt, ""), this.input.setAttribute(Ne, "");
    }
    this.allChips.length > 0 && (this.chipsInputWrapper.classList.add(
      ...this._classes.inputWrapperPadding.split(" ")
    ), this.chipsInputWrapper.classList.add(
      ...this._classes.transition.split(" ")
    ));
  }
  _handleKeysInputToElement(e) {
    const { keyCode: i, target: n } = e;
    if (n.hasAttribute(Jo)) {
      const o = d.findOne(To, n);
      i === it && (n.contentEditable = !1, n.classList.remove(...this._classes.contentEditable.split(" ")), n.textContent !== "" ? setTimeout(() => {
        h.addStyle(o, { display: "block" }), o.classList.remove(...this._classes.opacity.split(" "));
      }, 160) : n.textContent === "" && (setTimeout(() => {
        n.classList.add(...this._classes.opacity.split(" "));
      }, 200), setTimeout(() => {
        n.remove();
      }, 300)));
      return;
    }
    if (i === it) {
      if (n.value === "")
        return;
      this._handleCreateChip(n, n.value), this._handleRemoveActiveClass(), this.numberClicks = this.allChips.length + 1, this._handleEvents(e, rv);
    }
    this.allChips.length > 0 ? (this.chipsInputWrapper.classList.add(
      ...this._classes.inputWrapperPadding.split(" ")
    ), this.chipsInputWrapper.classList.add(
      ...this._classes.transition.split(" ")
    )) : this.chipsInputWrapper.classList.remove(
      ...this._classes.inputWrapperPadding.split(" ")
    );
  }
  _handleInputText() {
    const e = d.findOne(
      ev,
      this._element
    );
    c.on(
      this._element,
      "keyup",
      e,
      (i) => this._handleKeysInputToElement(i)
    ), c.on(this.input, "blur", (i) => this._handleBlurInput(i));
  }
  _appendInputToElement(e) {
    if (!this._element.hasAttribute(e))
      return;
    const i = Hb(this._options, this._classes);
    this._element.insertAdjacentHTML("beforeend", i);
    const n = d.findOne(
      "[data-te-chips-input-wrapper]",
      this._element
    );
    this._inputInstance = new V(
      n,
      this._options.inputOptions,
      this._options.inputClasses
    );
  }
  _handleCreateChip(e, i) {
    const n = $("div"), o = vi.getInstance(n), r = new vi(o, { text: i }, this._classes);
    this._options.parentSelector !== "" ? document.querySelector(this._options.parentSelector).insertAdjacentHTML("beforeend", r.appendChip()) : e.insertAdjacentHTML("beforebegin", r.appendChip()), e.value = "", d.find(tr).forEach((a) => {
      let l = vi.getInstance(a);
      return l || (l = new vi(a, {}, this._classes)), l.init();
    }), this._handleEditable();
  }
  _handleChipsOnSelect() {
    this.allChips.forEach((e) => {
      c.on(this._element, "click", (i) => {
        c.trigger(e, Il, {
          event: i,
          allChips: this.allChips
        });
      });
    });
  }
  _handleAddActiveClassWithKebyboard(e) {
    let i;
    this.allChips[e - 1] === void 0 ? i = this.allChips[e - 2] : i = this.allChips[e - 1], i.setAttribute(bt);
  }
  _getConfig(e) {
    const i = {
      ...uv,
      ...h.getDataAttributes(this._element),
      ...e
    };
    return I(Hi, i, dv), i;
  }
  _getClasses(e) {
    const i = h.getDataClassAttributes(this._element);
    return e = {
      ...pv,
      ...i,
      ...e
    }, I(Hi, e, _v), e;
  }
  static getInstance(e) {
    return A.getData(e, xl);
  }
  static getOrCreateInstance(e, i = {}) {
    return this.getInstance(e) || new this(e, typeof i == "object" ? i : null);
  }
}
const Ut = {
  plugins: {
    legend: {
      labels: {
        color: "rgb(102,102,102)"
      }
    }
  }
}, wi = {
  line: {
    options: {
      ...Ut,
      elements: {
        line: {
          backgroundColor: "rgba(59, 112, 202, 0.0)",
          borderColor: "rgb(59, 112, 202)",
          borderWidth: 2,
          tension: 0
        },
        point: {
          borderColor: "rgb(59, 112, 202)",
          backgroundColor: "rgb(59, 112, 202)"
        }
      },
      responsive: !0,
      legend: {
        display: !0
      },
      tooltips: {
        intersect: !1,
        mode: "index"
      },
      datasets: {
        borderColor: "red"
      },
      scales: {
        x: {
          stacked: !0,
          grid: {
            display: !1
          },
          ticks: {
            fontColor: "rgba(0,0,0, 0.5)"
          }
        },
        y: {
          stacked: !1,
          grid: {
            borderDash: [2],
            drawBorder: !1,
            zeroLineColor: "rgba(0,0,0,0)",
            zeroLineBorderDash: [2],
            zeroLineBorderDashOffset: [2]
          },
          ticks: {
            fontColor: "rgba(0,0,0, 0.5)"
          }
        }
      }
    }
  },
  bar: {
    options: {
      ...Ut,
      backgroundColor: "rgb(59, 112, 202)",
      borderWidth: 0,
      responsive: !0,
      legend: {
        display: !0
      },
      tooltips: {
        intersect: !1,
        mode: "index"
      },
      scales: {
        x: {
          stacked: !0,
          grid: {
            display: !1
          },
          ticks: {
            fontColor: "rgba(0,0,0, 0.5)"
          }
        },
        y: {
          stacked: !0,
          grid: {
            borderDash: [2],
            drawBorder: !1,
            zeroLineColor: "rgba(0,0,0,0)",
            zeroLineBorderDash: [2],
            zeroLineBorderDashOffset: [2]
          },
          ticks: {
            fontColor: "rgba(0,0,0, 0.5)"
          }
        }
      }
    }
  },
  pie: {
    options: {
      ...Ut,
      elements: {
        arc: { backgroundColor: "rgb(59, 112, 202)" }
      },
      responsive: !0,
      legend: {
        display: !0
      }
    }
  },
  doughnut: {
    options: {
      ...Ut,
      elements: {
        arc: { backgroundColor: "rgb(59, 112, 202)" }
      },
      responsive: !0,
      legend: {
        display: !0
      }
    }
  },
  polarArea: {
    options: {
      ...Ut,
      elements: {
        arc: { backgroundColor: "rgba(59, 112, 202, 0.5)" }
      },
      responsive: !0,
      legend: {
        display: !0
      }
    }
  },
  radar: {
    options: {
      ...Ut,
      elements: {
        line: {
          backgroundColor: "rgba(59, 112, 202, 0.5)",
          borderColor: "rgb(59, 112, 202)",
          borderWidth: 2
        },
        point: {
          borderColor: "rgb(59, 112, 202)",
          backgroundColor: "rgb(59, 112, 202)"
        }
      },
      responsive: !0,
      legend: {
        display: !0
      }
    }
  },
  scatter: {
    options: {
      ...Ut,
      elements: {
        line: {
          backgroundColor: "rgba(59, 112, 202, 0.5)",
          borderColor: "rgb(59, 112, 202)",
          borderWidth: 2,
          tension: 0
        },
        point: {
          borderColor: "rgb(59, 112, 202)",
          backgroundColor: "rgba(59, 112, 202, 0.5)"
        }
      },
      responsive: !0,
      legend: {
        display: !0
      },
      tooltips: {
        intersect: !1,
        mode: "index"
      },
      datasets: {
        borderColor: "red"
      },
      scales: {
        x: {
          stacked: !0,
          grid: {
            display: !1
          },
          ticks: {
            fontColor: "rgba(0,0,0, 0.5)"
          }
        },
        y: {
          stacked: !1,
          grid: {
            borderDash: [2],
            drawBorder: !1,
            zeroLineColor: "rgba(0,0,0,0)",
            zeroLineBorderDash: [2],
            zeroLineBorderDashOffset: [2]
          },
          ticks: {
            fontColor: "rgba(0,0,0, 0.5)"
          }
        }
      }
    }
  },
  bubble: {
    options: {
      ...Ut,
      elements: {
        point: {
          borderColor: "rgb(59, 112, 202)",
          backgroundColor: "rgba(59, 112, 202, 0.5)"
        }
      },
      responsive: !0,
      legend: {
        display: !0
      },
      scales: {
        x: {
          grid: {
            display: !1
          },
          ticks: {
            fontColor: "rgba(0,0,0, 0.5)"
          }
        },
        y: {
          grid: {
            borderDash: [2],
            drawBorder: !1,
            zeroLineColor: "rgba(0,0,0,0)",
            zeroLineBorderDash: [2],
            zeroLineBorderDashOffset: [2]
          },
          ticks: {
            fontColor: "rgba(0,0,0, 0.5)"
          }
        }
      }
    }
  }
};
var fv = function(t) {
  return mv(t) && !gv(t);
};
function mv(s) {
  return !!s && typeof s == "object";
}
function gv(s) {
  var t = Object.prototype.toString.call(s);
  return t === "[object RegExp]" || t === "[object Date]" || Tv(s);
}
var bv = typeof Symbol == "function" && Symbol.for, vv = bv ? Symbol.for("react.element") : 60103;
function Tv(s) {
  return s.$$typeof === vv;
}
function Ev(s) {
  return Array.isArray(s) ? [] : {};
}
function Yi(s, t) {
  return t.clone !== !1 && t.isMergeableObject(s) ? ii(Ev(s), s, t) : s;
}
function Cv(s, t, e) {
  return s.concat(t).map(function(i) {
    return Yi(i, e);
  });
}
function Av(s, t) {
  if (!t.customMerge)
    return ii;
  var e = t.customMerge(s);
  return typeof e == "function" ? e : ii;
}
function yv(s) {
  return Object.getOwnPropertySymbols ? Object.getOwnPropertySymbols(s).filter(function(t) {
    return Object.propertyIsEnumerable.call(s, t);
  }) : [];
}
function Dl(s) {
  return Object.keys(s).concat(yv(s));
}
function $h(s, t) {
  try {
    return t in s;
  } catch {
    return !1;
  }
}
function wv(s, t) {
  return $h(s, t) && !(Object.hasOwnProperty.call(s, t) && Object.propertyIsEnumerable.call(s, t));
}
function kv(s, t, e) {
  var i = {};
  return e.isMergeableObject(s) && Dl(s).forEach(function(n) {
    i[n] = Yi(s[n], e);
  }), Dl(t).forEach(function(n) {
    wv(s, n) || ($h(s, n) && e.isMergeableObject(t[n]) ? i[n] = Av(n, e)(s[n], t[n], e) : i[n] = Yi(t[n], e));
  }), i;
}
function ii(s, t, e) {
  e = e || {}, e.arrayMerge = e.arrayMerge || Cv, e.isMergeableObject = e.isMergeableObject || fv, e.cloneUnlessOtherwiseSpecified = Yi;
  var i = Array.isArray(t), n = Array.isArray(s), o = i === n;
  return o ? i ? e.arrayMerge(s, t, e) : kv(s, t, e) : Yi(t, e);
}
ii.all = function(t, e) {
  if (!Array.isArray(t))
    throw new Error("first argument should be an array");
  return t.reduce(function(i, n) {
    return ii(i, n, e);
  }, {});
};
var xv = ii, er = xv;
const $l = "chart", Ss = "te.chart", Ov = "chart", Co = (s, t, e) => {
  const i = (n, o, r) => {
    const a = n.slice();
    return o.forEach((l, p) => {
      typeof a[p] > "u" ? a[p] = r.cloneUnlessOtherwiseSpecified(
        l,
        r
      ) : r.isMergeableObject(l) ? a[p] = er(n[p], l, r) : n.indexOf(l) === -1 && a.push(l);
    }), a;
  };
  return er(e[t], s, {
    arrayMerge: i
  });
}, Sv = {
  darkTicksColor: "#fff",
  darkLabelColor: "#fff",
  darkGridLinesColor: "#555",
  darkmodeOff: "undefined",
  darkMode: null,
  darkBgColor: "#262626",
  darkBgColorLight: "#fff",
  options: null
}, Iv = {
  darkTicksColor: "string",
  darkLabelColor: "string",
  darkGridLinesColor: "string",
  darkmodeOff: "(string|null)",
  darkMode: "(string|null)",
  darkBgColor: "string",
  darkBgColorLight: "string",
  options: "(object|null)"
};
class Lh {
  constructor(t, e, i = {}, n = {}) {
    this._waitForCharts(t, e, i, n);
  }
  async _getChartjs() {
    const {
      Chart: t,
      ArcElement: e,
      LineElement: i,
      BarElement: n,
      PointElement: o,
      BarController: r,
      BubbleController: a,
      DoughnutController: l,
      LineController: p,
      PieController: u,
      PolarAreaController: _,
      RadarController: f,
      ScatterController: g,
      CategoryScale: m,
      LinearScale: b,
      LogarithmicScale: v,
      RadialLinearScale: T,
      TimeScale: y,
      TimeSeriesScale: C,
      Decimation: E,
      Filler: w,
      Legend: k,
      Title: D,
      Tooltip: O,
      SubTitle: x
    } = await __webpack_require__.e(/*! import() */ "vendors-node_modules_tw-elements_dist_js_chart_es_js").then(__webpack_require__.bind(__webpack_require__, /*! ./chart.es.js */ "./node_modules/tw-elements/dist/js/chart.es.js")).then((L) => L.f);
    return t.register(
      e,
      i,
      n,
      o,
      r,
      a,
      l,
      p,
      u,
      _,
      f,
      g,
      m,
      b,
      v,
      T,
      y,
      C,
      E,
      w,
      k,
      D,
      O,
      x
    ), t;
  }
  async _getChartDataLabels() {
    return await Promise.all(/*! import() */[__webpack_require__.e("vendors-node_modules_tw-elements_dist_js_chart_es_js"), __webpack_require__.e("vendors-node_modules_tw-elements_dist_js_chartjs-plugin-datalabels_es_js")]).then(__webpack_require__.bind(__webpack_require__, /*! ./chartjs-plugin-datalabels.es.js */ "./node_modules/tw-elements/dist/js/chartjs-plugin-datalabels.es.js"));
  }
  async _waitForCharts(t, e, i = {}, n = {}) {
    if (this._Chartjs = await this._getChartjs(), this._ChartDataLabels = await this._getChartDataLabels(), this._element = t, this._data = e, this._options = i, this._type = e.type, this._canvas = null, this._chart = null, this._darkOptions = this._getDarkConfig(n), this._darkModeClassContainer = document.querySelector("html"), this._prevConfig = null, this._observer = null, this._element && (A.setData(t, Ss, this), h.addClass(this._element, Ov), this._chartConstructor()), this._darkOptions.darkmodeOff !== null) {
      const o = this._darkOptions.darkMode === "dark" ? "dark" : this._darkOptions.darkMode === "light" ? "light" : this.systemColorMode;
      this._handleMode(o), this._observer = new MutationObserver(this._observerCallback.bind(this)), this._observer.observe(this._darkModeClassContainer, {
        attributes: !0
      });
    }
  }
  // Getters
  static get NAME() {
    return $l;
  }
  get systemColorMode() {
    return localStorage.theme || (this._darkModeClassContainer.classList.contains("dark") ? "dark" : "light");
  }
  // Public
  dispose() {
    this._observer.disconnect(), A.removeData(this._element, Ss), this._element = null;
  }
  update(t, e) {
    t && (this._data = { ...this._data, ...t }, this._chart.data = this._data);
    const i = Object.prototype.hasOwnProperty.call(
      e,
      "options"
    ) ? e : { options: { ...e } };
    this._options = er(this._options, i), this._chart.options = Co(
      this._options,
      this._type,
      wi
    ).options, this._chart.update();
  }
  setTheme(t) {
    t !== "dark" && t !== "light" || !this._data || this._handleMode(t);
  }
  // Private
  _getDarkConfig(t) {
    let e = {};
    const i = h.getDataAttributes(this._element);
    Object.keys(i).forEach(
      (p) => p.startsWith("dark") && (e[p] = i[p])
    ), e = {
      ...Sv,
      ...e
    };
    const n = {
      y: {
        ticks: {
          color: e.darkTicksColor
        },
        grid: {
          color: e.darkGridLinesColor
        }
      },
      x: {
        ticks: {
          color: e.darkTicksColor
        },
        grid: {
          color: e.darkGridLinesColor
        }
      }
    }, o = {
      r: {
        ticks: {
          color: e.darkTicksColor,
          backdropColor: e.darkBgColor
        },
        grid: {
          color: e.darkGridLinesColor
        },
        pointLabels: {
          color: e.darkTicksColor
        }
      }
    }, l = {
      scales: ["pie", "doughnut", "polarArea", "radar"].includes(this._type) ? ["polarArea", "radar"].includes(this._type) ? o : {} : n,
      plugins: {
        legend: {
          labels: {
            color: e.darkLabelColor
          }
        }
      }
    };
    return t = {
      ...e,
      options: {
        ...l
      },
      ...t
    }, I($l, t, Iv), t;
  }
  _chartConstructor() {
    if (this._data) {
      this._createCanvas();
      const t = Co(this._options, this._type, wi), e = [];
      t.dataLabelsPlugin && e.push(this._ChartDataLabels.default), this._prevConfig = t, this._chart = new this._Chartjs(this._canvas, {
        ...this._data,
        ...t,
        plugins: e
      });
    }
  }
  _createCanvas() {
    this._canvas || (this._element.nodeName === "CANVAS" ? this._canvas = this._element : (this._canvas = $("canvas"), this._element.appendChild(this._canvas)));
  }
  _handleMode(t) {
    t === "dark" ? (this._changeDatasetBorderColor(), this.update(null, this._darkOptions.options)) : (this._changeDatasetBorderColor(!1), this._prevConfig && this.update(null, this._prevConfig));
  }
  _observerCallback(t) {
    for (const e of t)
      e.type === "attributes" && this._handleMode(this.systemColorMode);
  }
  _changeDatasetBorderColor(t = !0) {
    [...this._data.data.datasets].forEach(
      (e) => ["pie", "doughnut", "polarArea"].includes(this._type) && (e.borderColor = t ? this._darkOptions.darkBgColor : this._darkOptions.darkBgColorLight)
    );
  }
  static jQueryInterface(t, e, i) {
    return this.each(function() {
      let n = A.getData(this, Ss);
      if (!(!n && /dispose/.test(t))) {
        if (!n) {
          const o = e ? Co(e, i, wi) : wi[i];
          n = new Lh(this, {
            ...t,
            ...o
          });
        }
        if (typeof t == "string") {
          if (typeof n[t] > "u")
            throw new TypeError(`No method named "${t}"`);
          n[t](e, i);
        }
      }
    });
  }
  static getInstance(t) {
    return A.getData(t, Ss);
  }
  static getOrCreateInstance(t, e = {}) {
    return this.getInstance(t) || new this(t, typeof e == "object" ? e : null);
  }
}
/*!
 * perfect-scrollbar v1.5.3
 * Copyright 2021 Hyunje Jun, MDBootstrap and Contributors
 * Licensed under MIT
 */
function Nt(s) {
  return getComputedStyle(s);
}
function ct(s, t) {
  for (var e in t) {
    var i = t[e];
    typeof i == "number" && (i = i + "px"), s.style[e] = i;
  }
  return s;
}
function Is(s) {
  var t = document.createElement("div");
  return t.className = s, t;
}
var Ll = typeof Element < "u" && (Element.prototype.matches || Element.prototype.webkitMatchesSelector || Element.prototype.mozMatchesSelector || Element.prototype.msMatchesSelector);
function Jt(s, t) {
  if (!Ll)
    throw new Error("No element matching method supported");
  return Ll.call(s, t);
}
function Ye(s) {
  s.remove ? s.remove() : s.parentNode && s.parentNode.removeChild(s);
}
function Nl(s, t) {
  return Array.prototype.filter.call(
    s.children,
    function(e) {
      return Jt(e, t);
    }
  );
}
var j = {
  main: "ps",
  rtl: "ps__rtl",
  element: {
    thumb: function(s) {
      return "ps__thumb-" + s;
    },
    rail: function(s) {
      return "ps__rail-" + s;
    },
    consuming: "ps__child--consume"
  },
  state: {
    focus: "ps--focus",
    clicking: "ps--clicking",
    active: function(s) {
      return "ps--active-" + s;
    },
    scrolling: function(s) {
      return "ps--scrolling-" + s;
    }
  }
}, Nh = { x: null, y: null };
function Mh(s, t) {
  var e = s.element.classList, i = j.state.scrolling(t);
  e.contains(i) ? clearTimeout(Nh[t]) : e.add(i);
}
function Rh(s, t) {
  Nh[t] = setTimeout(
    function() {
      return s.isAlive && s.element.classList.remove(j.state.scrolling(t));
    },
    s.settings.scrollingThreshold
  );
}
function Dv(s, t) {
  Mh(s, t), Rh(s, t);
}
var qi = function(t) {
  this.element = t, this.handlers = {};
}, Ph = { isEmpty: { configurable: !0 } };
qi.prototype.bind = function(t, e) {
  typeof this.handlers[t] > "u" && (this.handlers[t] = []), this.handlers[t].push(e), this.element.addEventListener(t, e, !1);
};
qi.prototype.unbind = function(t, e) {
  var i = this;
  this.handlers[t] = this.handlers[t].filter(function(n) {
    return e && n !== e ? !0 : (i.element.removeEventListener(t, n, !1), !1);
  });
};
qi.prototype.unbindAll = function() {
  for (var t in this.handlers)
    this.unbind(t);
};
Ph.isEmpty.get = function() {
  var s = this;
  return Object.keys(this.handlers).every(
    function(t) {
      return s.handlers[t].length === 0;
    }
  );
};
Object.defineProperties(qi.prototype, Ph);
var li = function() {
  this.eventElements = [];
};
li.prototype.eventElement = function(t) {
  var e = this.eventElements.filter(function(i) {
    return i.element === t;
  })[0];
  return e || (e = new qi(t), this.eventElements.push(e)), e;
};
li.prototype.bind = function(t, e, i) {
  this.eventElement(t).bind(e, i);
};
li.prototype.unbind = function(t, e, i) {
  var n = this.eventElement(t);
  n.unbind(e, i), n.isEmpty && this.eventElements.splice(this.eventElements.indexOf(n), 1);
};
li.prototype.unbindAll = function() {
  this.eventElements.forEach(function(t) {
    return t.unbindAll();
  }), this.eventElements = [];
};
li.prototype.once = function(t, e, i) {
  var n = this.eventElement(t), o = function(r) {
    n.unbind(e, o), i(r);
  };
  n.bind(e, o);
};
function Ds(s) {
  if (typeof window.CustomEvent == "function")
    return new CustomEvent(s);
  var t = document.createEvent("CustomEvent");
  return t.initCustomEvent(s, !1, !1, void 0), t;
}
function fn(s, t, e, i, n) {
  i === void 0 && (i = !0), n === void 0 && (n = !1);
  var o;
  if (t === "top")
    o = [
      "contentHeight",
      "containerHeight",
      "scrollTop",
      "y",
      "up",
      "down"
    ];
  else if (t === "left")
    o = [
      "contentWidth",
      "containerWidth",
      "scrollLeft",
      "x",
      "left",
      "right"
    ];
  else
    throw new Error("A proper axis should be provided");
  $v(s, e, o, i, n);
}
function $v(s, t, e, i, n) {
  var o = e[0], r = e[1], a = e[2], l = e[3], p = e[4], u = e[5];
  i === void 0 && (i = !0), n === void 0 && (n = !1);
  var _ = s.element;
  s.reach[l] = null, _[a] < 1 && (s.reach[l] = "start"), _[a] > s[o] - s[r] - 1 && (s.reach[l] = "end"), t && (_.dispatchEvent(Ds("ps-scroll-" + l)), t < 0 ? _.dispatchEvent(Ds("ps-scroll-" + p)) : t > 0 && _.dispatchEvent(Ds("ps-scroll-" + u)), i && Dv(s, l)), s.reach[l] && (t || n) && _.dispatchEvent(Ds("ps-" + l + "-reach-" + s.reach[l]));
}
function F(s) {
  return parseInt(s, 10) || 0;
}
function Lv(s) {
  return Jt(s, "input,[contenteditable]") || Jt(s, "select,[contenteditable]") || Jt(s, "textarea,[contenteditable]") || Jt(s, "button,[contenteditable]");
}
function Nv(s) {
  var t = Nt(s);
  return F(t.width) + F(t.paddingLeft) + F(t.paddingRight) + F(t.borderLeftWidth) + F(t.borderRightWidth);
}
var Ve = {
  isWebKit: typeof document < "u" && "WebkitAppearance" in document.documentElement.style,
  supportsTouch: typeof window < "u" && ("ontouchstart" in window || "maxTouchPoints" in window.navigator && window.navigator.maxTouchPoints > 0 || window.DocumentTouch && document instanceof window.DocumentTouch),
  supportsIePointer: typeof navigator < "u" && navigator.msMaxTouchPoints,
  isChrome: typeof navigator < "u" && /Chrome/i.test(navigator && navigator.userAgent)
};
function Ht(s) {
  var t = s.element, e = Math.floor(t.scrollTop), i = t.getBoundingClientRect();
  s.containerWidth = Math.round(i.width), s.containerHeight = Math.round(i.height), s.contentWidth = t.scrollWidth, s.contentHeight = t.scrollHeight, t.contains(s.scrollbarXRail) || (Nl(t, j.element.rail("x")).forEach(
    function(n) {
      return Ye(n);
    }
  ), t.appendChild(s.scrollbarXRail)), t.contains(s.scrollbarYRail) || (Nl(t, j.element.rail("y")).forEach(
    function(n) {
      return Ye(n);
    }
  ), t.appendChild(s.scrollbarYRail)), !s.settings.suppressScrollX && s.containerWidth + s.settings.scrollXMarginOffset < s.contentWidth ? (s.scrollbarXActive = !0, s.railXWidth = s.containerWidth - s.railXMarginWidth, s.railXRatio = s.containerWidth / s.railXWidth, s.scrollbarXWidth = Ml(
    s,
    F(s.railXWidth * s.containerWidth / s.contentWidth)
  ), s.scrollbarXLeft = F(
    (s.negativeScrollAdjustment + t.scrollLeft) * (s.railXWidth - s.scrollbarXWidth) / (s.contentWidth - s.containerWidth)
  )) : s.scrollbarXActive = !1, !s.settings.suppressScrollY && s.containerHeight + s.settings.scrollYMarginOffset < s.contentHeight ? (s.scrollbarYActive = !0, s.railYHeight = s.containerHeight - s.railYMarginHeight, s.railYRatio = s.containerHeight / s.railYHeight, s.scrollbarYHeight = Ml(
    s,
    F(s.railYHeight * s.containerHeight / s.contentHeight)
  ), s.scrollbarYTop = F(
    e * (s.railYHeight - s.scrollbarYHeight) / (s.contentHeight - s.containerHeight)
  )) : s.scrollbarYActive = !1, s.scrollbarXLeft >= s.railXWidth - s.scrollbarXWidth && (s.scrollbarXLeft = s.railXWidth - s.scrollbarXWidth), s.scrollbarYTop >= s.railYHeight - s.scrollbarYHeight && (s.scrollbarYTop = s.railYHeight - s.scrollbarYHeight), Mv(t, s), s.scrollbarXActive ? t.classList.add(j.state.active("x")) : (t.classList.remove(j.state.active("x")), s.scrollbarXWidth = 0, s.scrollbarXLeft = 0, t.scrollLeft = s.isRtl === !0 ? s.contentWidth : 0), s.scrollbarYActive ? t.classList.add(j.state.active("y")) : (t.classList.remove(j.state.active("y")), s.scrollbarYHeight = 0, s.scrollbarYTop = 0, t.scrollTop = 0);
}
function Ml(s, t) {
  return s.settings.minScrollbarLength && (t = Math.max(t, s.settings.minScrollbarLength)), s.settings.maxScrollbarLength && (t = Math.min(t, s.settings.maxScrollbarLength)), t;
}
function Mv(s, t) {
  var e = { width: t.railXWidth }, i = Math.floor(s.scrollTop);
  t.isRtl ? e.left = t.negativeScrollAdjustment + s.scrollLeft + t.containerWidth - t.contentWidth : e.left = s.scrollLeft, t.isScrollbarXUsingBottom ? e.bottom = t.scrollbarXBottom - i : e.top = t.scrollbarXTop + i, ct(t.scrollbarXRail, e);
  var n = { top: i, height: t.railYHeight };
  t.isScrollbarYUsingRight ? t.isRtl ? n.right = t.contentWidth - (t.negativeScrollAdjustment + s.scrollLeft) - t.scrollbarYRight - t.scrollbarYOuterWidth - 9 : n.right = t.scrollbarYRight - s.scrollLeft : t.isRtl ? n.left = t.negativeScrollAdjustment + s.scrollLeft + t.containerWidth * 2 - t.contentWidth - t.scrollbarYLeft - t.scrollbarYOuterWidth : n.left = t.scrollbarYLeft + s.scrollLeft, ct(t.scrollbarYRail, n), ct(t.scrollbarX, {
    left: t.scrollbarXLeft,
    width: t.scrollbarXWidth - t.railBorderXWidth
  }), ct(t.scrollbarY, {
    top: t.scrollbarYTop,
    height: t.scrollbarYHeight - t.railBorderYWidth
  });
}
function Rv(s) {
  s.element, s.event.bind(s.scrollbarY, "mousedown", function(t) {
    return t.stopPropagation();
  }), s.event.bind(s.scrollbarYRail, "mousedown", function(t) {
    var e = t.pageY - window.pageYOffset - s.scrollbarYRail.getBoundingClientRect().top, i = e > s.scrollbarYTop ? 1 : -1;
    s.element.scrollTop += i * s.containerHeight, Ht(s), t.stopPropagation();
  }), s.event.bind(s.scrollbarX, "mousedown", function(t) {
    return t.stopPropagation();
  }), s.event.bind(s.scrollbarXRail, "mousedown", function(t) {
    var e = t.pageX - window.pageXOffset - s.scrollbarXRail.getBoundingClientRect().left, i = e > s.scrollbarXLeft ? 1 : -1;
    s.element.scrollLeft += i * s.containerWidth, Ht(s), t.stopPropagation();
  });
}
function Pv(s) {
  Rl(s, [
    "containerWidth",
    "contentWidth",
    "pageX",
    "railXWidth",
    "scrollbarX",
    "scrollbarXWidth",
    "scrollLeft",
    "x",
    "scrollbarXRail"
  ]), Rl(s, [
    "containerHeight",
    "contentHeight",
    "pageY",
    "railYHeight",
    "scrollbarY",
    "scrollbarYHeight",
    "scrollTop",
    "y",
    "scrollbarYRail"
  ]);
}
function Rl(s, t) {
  var e = t[0], i = t[1], n = t[2], o = t[3], r = t[4], a = t[5], l = t[6], p = t[7], u = t[8], _ = s.element, f = null, g = null, m = null;
  function b(y) {
    y.touches && y.touches[0] && (y[n] = y.touches[0].pageY), _[l] = f + m * (y[n] - g), Mh(s, p), Ht(s), y.stopPropagation(), y.type.startsWith("touch") && y.changedTouches.length > 1 && y.preventDefault();
  }
  function v() {
    Rh(s, p), s[u].classList.remove(j.state.clicking), s.event.unbind(s.ownerDocument, "mousemove", b);
  }
  function T(y, C) {
    f = _[l], C && y.touches && (y[n] = y.touches[0].pageY), g = y[n], m = (s[i] - s[e]) / (s[o] - s[a]), C ? s.event.bind(s.ownerDocument, "touchmove", b) : (s.event.bind(s.ownerDocument, "mousemove", b), s.event.once(s.ownerDocument, "mouseup", v), y.preventDefault()), s[u].classList.add(j.state.clicking), y.stopPropagation();
  }
  s.event.bind(s[r], "mousedown", function(y) {
    T(y);
  }), s.event.bind(s[r], "touchstart", function(y) {
    T(y, !0);
  });
}
function Bv(s) {
  var t = s.element, e = function() {
    return Jt(t, ":hover");
  }, i = function() {
    return Jt(s.scrollbarX, ":focus") || Jt(s.scrollbarY, ":focus");
  };
  function n(o, r) {
    var a = Math.floor(t.scrollTop);
    if (o === 0) {
      if (!s.scrollbarYActive)
        return !1;
      if (a === 0 && r > 0 || a >= s.contentHeight - s.containerHeight && r < 0)
        return !s.settings.wheelPropagation;
    }
    var l = t.scrollLeft;
    if (r === 0) {
      if (!s.scrollbarXActive)
        return !1;
      if (l === 0 && o < 0 || l >= s.contentWidth - s.containerWidth && o > 0)
        return !s.settings.wheelPropagation;
    }
    return !0;
  }
  s.event.bind(s.ownerDocument, "keydown", function(o) {
    if (!(o.isDefaultPrevented && o.isDefaultPrevented() || o.defaultPrevented) && !(!e() && !i())) {
      var r = document.activeElement ? document.activeElement : s.ownerDocument.activeElement;
      if (r) {
        if (r.tagName === "IFRAME")
          r = r.contentDocument.activeElement;
        else
          for (; r.shadowRoot; )
            r = r.shadowRoot.activeElement;
        if (Lv(r))
          return;
      }
      var a = 0, l = 0;
      switch (o.which) {
        case 37:
          o.metaKey ? a = -s.contentWidth : o.altKey ? a = -s.containerWidth : a = -30;
          break;
        case 38:
          o.metaKey ? l = s.contentHeight : o.altKey ? l = s.containerHeight : l = 30;
          break;
        case 39:
          o.metaKey ? a = s.contentWidth : o.altKey ? a = s.containerWidth : a = 30;
          break;
        case 40:
          o.metaKey ? l = -s.contentHeight : o.altKey ? l = -s.containerHeight : l = -30;
          break;
        case 32:
          o.shiftKey ? l = s.containerHeight : l = -s.containerHeight;
          break;
        case 33:
          l = s.containerHeight;
          break;
        case 34:
          l = -s.containerHeight;
          break;
        case 36:
          l = s.contentHeight;
          break;
        case 35:
          l = -s.contentHeight;
          break;
        default:
          return;
      }
      s.settings.suppressScrollX && a !== 0 || s.settings.suppressScrollY && l !== 0 || (t.scrollTop -= l, t.scrollLeft += a, Ht(s), n(a, l) && o.preventDefault());
    }
  });
}
function Hv(s) {
  var t = s.element;
  function e(r, a) {
    var l = Math.floor(t.scrollTop), p = t.scrollTop === 0, u = l + t.offsetHeight === t.scrollHeight, _ = t.scrollLeft === 0, f = t.scrollLeft + t.offsetWidth === t.scrollWidth, g;
    return Math.abs(a) > Math.abs(r) ? g = p || u : g = _ || f, g ? !s.settings.wheelPropagation : !0;
  }
  function i(r) {
    var a = r.deltaX, l = -1 * r.deltaY;
    return (typeof a > "u" || typeof l > "u") && (a = -1 * r.wheelDeltaX / 6, l = r.wheelDeltaY / 6), r.deltaMode && r.deltaMode === 1 && (a *= 10, l *= 10), a !== a && l !== l && (a = 0, l = r.wheelDelta), r.shiftKey ? [-l, -a] : [a, l];
  }
  function n(r, a, l) {
    if (!Ve.isWebKit && t.querySelector("select:focus"))
      return !0;
    if (!t.contains(r))
      return !1;
    for (var p = r; p && p !== t; ) {
      if (p.classList.contains(j.element.consuming))
        return !0;
      var u = Nt(p);
      if (l && u.overflowY.match(/(scroll|auto)/)) {
        var _ = p.scrollHeight - p.clientHeight;
        if (_ > 0 && (p.scrollTop > 0 && l < 0 || p.scrollTop < _ && l > 0))
          return !0;
      }
      if (a && u.overflowX.match(/(scroll|auto)/)) {
        var f = p.scrollWidth - p.clientWidth;
        if (f > 0 && (p.scrollLeft > 0 && a < 0 || p.scrollLeft < f && a > 0))
          return !0;
      }
      p = p.parentNode;
    }
    return !1;
  }
  function o(r) {
    var a = i(r), l = a[0], p = a[1];
    if (!n(r.target, l, p)) {
      var u = !1;
      s.settings.useBothWheelAxes ? s.scrollbarYActive && !s.scrollbarXActive ? (p ? t.scrollTop -= p * s.settings.wheelSpeed : t.scrollTop += l * s.settings.wheelSpeed, u = !0) : s.scrollbarXActive && !s.scrollbarYActive && (l ? t.scrollLeft += l * s.settings.wheelSpeed : t.scrollLeft -= p * s.settings.wheelSpeed, u = !0) : (t.scrollTop -= p * s.settings.wheelSpeed, t.scrollLeft += l * s.settings.wheelSpeed), Ht(s), u = u || e(l, p), u && !r.ctrlKey && (r.stopPropagation(), r.preventDefault());
    }
  }
  typeof window.onwheel < "u" ? s.event.bind(t, "wheel", o) : typeof window.onmousewheel < "u" && s.event.bind(t, "mousewheel", o);
}
function Vv(s) {
  if (!Ve.supportsTouch && !Ve.supportsIePointer)
    return;
  var t = s.element;
  function e(m, b) {
    var v = Math.floor(t.scrollTop), T = t.scrollLeft, y = Math.abs(m), C = Math.abs(b);
    if (C > y) {
      if (b < 0 && v === s.contentHeight - s.containerHeight || b > 0 && v === 0)
        return window.scrollY === 0 && b > 0 && Ve.isChrome;
    } else if (y > C && (m < 0 && T === s.contentWidth - s.containerWidth || m > 0 && T === 0))
      return !0;
    return !0;
  }
  function i(m, b) {
    t.scrollTop -= b, t.scrollLeft -= m, Ht(s);
  }
  var n = {}, o = 0, r = {}, a = null;
  function l(m) {
    return m.targetTouches ? m.targetTouches[0] : m;
  }
  function p(m) {
    return m.pointerType && m.pointerType === "pen" && m.buttons === 0 ? !1 : !!(m.targetTouches && m.targetTouches.length === 1 || m.pointerType && m.pointerType !== "mouse" && m.pointerType !== m.MSPOINTER_TYPE_MOUSE);
  }
  function u(m) {
    if (p(m)) {
      var b = l(m);
      n.pageX = b.pageX, n.pageY = b.pageY, o = (/* @__PURE__ */ new Date()).getTime(), a !== null && clearInterval(a);
    }
  }
  function _(m, b, v) {
    if (!t.contains(m))
      return !1;
    for (var T = m; T && T !== t; ) {
      if (T.classList.contains(j.element.consuming))
        return !0;
      var y = Nt(T);
      if (v && y.overflowY.match(/(scroll|auto)/)) {
        var C = T.scrollHeight - T.clientHeight;
        if (C > 0 && (T.scrollTop > 0 && v < 0 || T.scrollTop < C && v > 0))
          return !0;
      }
      if (b && y.overflowX.match(/(scroll|auto)/)) {
        var E = T.scrollWidth - T.clientWidth;
        if (E > 0 && (T.scrollLeft > 0 && b < 0 || T.scrollLeft < E && b > 0))
          return !0;
      }
      T = T.parentNode;
    }
    return !1;
  }
  function f(m) {
    if (p(m)) {
      var b = l(m), v = { pageX: b.pageX, pageY: b.pageY }, T = v.pageX - n.pageX, y = v.pageY - n.pageY;
      if (_(m.target, T, y))
        return;
      i(T, y), n = v;
      var C = (/* @__PURE__ */ new Date()).getTime(), E = C - o;
      E > 0 && (r.x = T / E, r.y = y / E, o = C), e(T, y) && m.preventDefault();
    }
  }
  function g() {
    s.settings.swipeEasing && (clearInterval(a), a = setInterval(function() {
      if (s.isInitialized) {
        clearInterval(a);
        return;
      }
      if (!r.x && !r.y) {
        clearInterval(a);
        return;
      }
      if (Math.abs(r.x) < 0.01 && Math.abs(r.y) < 0.01) {
        clearInterval(a);
        return;
      }
      if (!s.element) {
        clearInterval(a);
        return;
      }
      i(r.x * 30, r.y * 30), r.x *= 0.8, r.y *= 0.8;
    }, 10));
  }
  Ve.supportsTouch ? (s.event.bind(t, "touchstart", u), s.event.bind(t, "touchmove", f), s.event.bind(t, "touchend", g)) : Ve.supportsIePointer && (window.PointerEvent ? (s.event.bind(t, "pointerdown", u), s.event.bind(t, "pointermove", f), s.event.bind(t, "pointerup", g)) : window.MSPointerEvent && (s.event.bind(t, "MSPointerDown", u), s.event.bind(t, "MSPointerMove", f), s.event.bind(t, "MSPointerUp", g)));
}
var Wv = function() {
  return {
    handlers: ["click-rail", "drag-thumb", "keyboard", "wheel", "touch"],
    maxScrollbarLength: null,
    minScrollbarLength: null,
    scrollingThreshold: 1e3,
    scrollXMarginOffset: 0,
    scrollYMarginOffset: 0,
    suppressScrollX: !1,
    suppressScrollY: !1,
    swipeEasing: !0,
    useBothWheelAxes: !1,
    wheelPropagation: !0,
    wheelSpeed: 1
  };
}, Fv = {
  "click-rail": Rv,
  "drag-thumb": Pv,
  keyboard: Bv,
  wheel: Hv,
  touch: Vv
}, Zi = function(t, e) {
  var i = this;
  if (e === void 0 && (e = {}), typeof t == "string" && (t = document.querySelector(t)), !t || !t.nodeName)
    throw new Error("no element is specified to initialize PerfectScrollbar");
  this.element = t, t.classList.add(j.main), this.settings = Wv();
  for (var n in e)
    this.settings[n] = e[n];
  this.containerWidth = null, this.containerHeight = null, this.contentWidth = null, this.contentHeight = null;
  var o = function() {
    return t.classList.add(j.state.focus);
  }, r = function() {
    return t.classList.remove(j.state.focus);
  };
  this.isRtl = Nt(t).direction === "rtl", this.isRtl === !0 && t.classList.add(j.rtl), this.isNegativeScroll = function() {
    var p = t.scrollLeft, u = null;
    return t.scrollLeft = -1, u = t.scrollLeft < 0, t.scrollLeft = p, u;
  }(), this.negativeScrollAdjustment = this.isNegativeScroll ? t.scrollWidth - t.clientWidth : 0, this.event = new li(), this.ownerDocument = t.ownerDocument || document, this.scrollbarXRail = Is(j.element.rail("x")), t.appendChild(this.scrollbarXRail), this.scrollbarX = Is(j.element.thumb("x")), this.scrollbarXRail.appendChild(this.scrollbarX), this.scrollbarX.setAttribute("tabindex", 0), this.event.bind(this.scrollbarX, "focus", o), this.event.bind(this.scrollbarX, "blur", r), this.scrollbarXActive = null, this.scrollbarXWidth = null, this.scrollbarXLeft = null;
  var a = Nt(this.scrollbarXRail);
  this.scrollbarXBottom = parseInt(a.bottom, 10), isNaN(this.scrollbarXBottom) ? (this.isScrollbarXUsingBottom = !1, this.scrollbarXTop = F(a.top)) : this.isScrollbarXUsingBottom = !0, this.railBorderXWidth = F(a.borderLeftWidth) + F(a.borderRightWidth), ct(this.scrollbarXRail, { display: "block" }), this.railXMarginWidth = F(a.marginLeft) + F(a.marginRight), ct(this.scrollbarXRail, { display: "" }), this.railXWidth = null, this.railXRatio = null, this.scrollbarYRail = Is(j.element.rail("y")), t.appendChild(this.scrollbarYRail), this.scrollbarY = Is(j.element.thumb("y")), this.scrollbarYRail.appendChild(this.scrollbarY), this.scrollbarY.setAttribute("tabindex", 0), this.event.bind(this.scrollbarY, "focus", o), this.event.bind(this.scrollbarY, "blur", r), this.scrollbarYActive = null, this.scrollbarYHeight = null, this.scrollbarYTop = null;
  var l = Nt(this.scrollbarYRail);
  this.scrollbarYRight = parseInt(l.right, 10), isNaN(this.scrollbarYRight) ? (this.isScrollbarYUsingRight = !1, this.scrollbarYLeft = F(l.left)) : this.isScrollbarYUsingRight = !0, this.scrollbarYOuterWidth = this.isRtl ? Nv(this.scrollbarY) : null, this.railBorderYWidth = F(l.borderTopWidth) + F(l.borderBottomWidth), ct(this.scrollbarYRail, { display: "block" }), this.railYMarginHeight = F(l.marginTop) + F(l.marginBottom), ct(this.scrollbarYRail, { display: "" }), this.railYHeight = null, this.railYRatio = null, this.reach = {
    x: t.scrollLeft <= 0 ? "start" : t.scrollLeft >= this.contentWidth - this.containerWidth ? "end" : null,
    y: t.scrollTop <= 0 ? "start" : t.scrollTop >= this.contentHeight - this.containerHeight ? "end" : null
  }, this.isAlive = !0, this.settings.handlers.forEach(function(p) {
    return Fv[p](i);
  }), this.lastScrollTop = Math.floor(t.scrollTop), this.lastScrollLeft = t.scrollLeft, this.event.bind(this.element, "scroll", function(p) {
    return i.onScroll(p);
  }), Ht(this);
};
Zi.prototype.update = function() {
  this.isAlive && (this.negativeScrollAdjustment = this.isNegativeScroll ? this.element.scrollWidth - this.element.clientWidth : 0, ct(this.scrollbarXRail, { display: "block" }), ct(this.scrollbarYRail, { display: "block" }), this.railXMarginWidth = F(Nt(this.scrollbarXRail).marginLeft) + F(Nt(this.scrollbarXRail).marginRight), this.railYMarginHeight = F(Nt(this.scrollbarYRail).marginTop) + F(Nt(this.scrollbarYRail).marginBottom), ct(this.scrollbarXRail, { display: "none" }), ct(this.scrollbarYRail, { display: "none" }), Ht(this), fn(this, "top", 0, !1, !0), fn(this, "left", 0, !1, !0), ct(this.scrollbarXRail, { display: "" }), ct(this.scrollbarYRail, { display: "" }));
};
Zi.prototype.onScroll = function(t) {
  this.isAlive && (Ht(this), fn(this, "top", this.element.scrollTop - this.lastScrollTop), fn(
    this,
    "left",
    this.element.scrollLeft - this.lastScrollLeft
  ), this.lastScrollTop = Math.floor(this.element.scrollTop), this.lastScrollLeft = this.element.scrollLeft);
};
Zi.prototype.destroy = function() {
  this.isAlive && (this.event.unbindAll(), Ye(this.scrollbarX), Ye(this.scrollbarY), Ye(this.scrollbarXRail), Ye(this.scrollbarYRail), this.removePsClasses(), this.element = null, this.scrollbarX = null, this.scrollbarY = null, this.scrollbarXRail = null, this.scrollbarYRail = null, this.isAlive = !1);
};
Zi.prototype.removePsClasses = function() {
  this.element.className = this.element.className.split(" ").filter(function(t) {
    return !t.match(/^ps([-_].+|)$/);
  }).join(" ");
};
const Ao = "perfectScrollbar", Yv = "perfect-scrollbar", $s = "te.perfectScrollbar", St = "te", It = "ps", yo = [
  { te: `scrollX.${St}.${It}`, ps: "ps-scroll-x" },
  { te: `scrollY.${St}.${It}`, ps: "ps-scroll-y" },
  { te: `scrollUp.${St}.${It}`, ps: "ps-scroll-up" },
  { te: `scrollDown.${St}.${It}`, ps: "ps-scroll-down" },
  { te: `scrollLeft.${St}.${It}`, ps: "ps-scroll-left" },
  { te: `scrollRight.${St}.${It}`, ps: "ps-scroll-right" },
  { te: `scrollXEnd.${St}.${It}`, ps: "ps-x-reach-end" },
  { te: `scrollYEnd.${St}.${It}`, ps: "ps-y-reach-end" },
  { te: `scrollXStart.${St}.${It}`, ps: "ps-x-reach-start" },
  { te: `scrollYStart.${St}.${It}`, ps: "ps-y-reach-start" }
], jv = {
  handlers: ["click-rail", "drag-thumb", "keyboard", "wheel", "touch"],
  wheelSpeed: 1,
  wheelPropagation: !0,
  swipeEasing: !0,
  minScrollbarLength: null,
  maxScrollbarLength: null,
  scrollingThreshold: 1e3,
  useBothWheelAxes: !1,
  suppressScrollX: !1,
  suppressScrollY: !1,
  scrollXMarginOffset: 0,
  scrollYMarginOffset: 0,
  positionRight: !0
}, Kv = {
  handlers: "(string|array)",
  wheelSpeed: "number",
  wheelPropagation: "boolean",
  swipeEasing: "boolean",
  minScrollbarLength: "(number|null)",
  maxScrollbarLength: "(number|null)",
  scrollingThreshold: "number",
  useBothWheelAxes: "boolean",
  suppressScrollX: "boolean",
  suppressScrollY: "boolean",
  scrollXMarginOffset: "number",
  scrollYMarginOffset: "number",
  positionRight: "boolean"
}, zv = {
  ps: "group/ps overflow-hidden [overflow-anchor:none] touch-none",
  railX: "group/x absolute bottom-0 h-[0.9375rem] hidden opacity-0 transition-[background-color,_opacity] duration-200 ease-linear motion-reduce:transition-none z-[1035] group-[&.ps--active-x]/ps:block group-hover/ps:opacity-60 group-focus/ps:opacity-60 group-[&.ps--scrolling-x]/ps:opacity-60 hover:!opacity-90 focus:!opacity-90 [&.ps--clicking]:!opacity-90 outline-none",
  railXColors: "group-[&.ps--active-x]/ps:bg-transparent hover:!bg-[#eee] focus:!bg-[#eee] [&.ps--clicking]:!bg-[#eee] dark:hover:!bg-[#555] dark:focus:!bg-[#555] dark:[&.ps--clicking]:!bg-[#555]",
  railXThumb: "absolute bottom-0.5 rounded-md h-1.5 group-focus/ps:opacity-100 group-active/ps:opacity-100 [transition:background-color_.2s_linear,_height_.2s_ease-in-out] group-hover/x:h-[11px] group-focus/x:h-[0.6875rem] group-[&.ps--clicking]/x:bg-[#999] group-[&.ps--clicking]/x:h-[11px] outline-none",
  railXThumbColors: "bg-[#aaa] group-hover/x:bg-[#999] group-focus/x:bg-[#999]",
  railY: "group/y absolute right-0 w-[0.9375rem] hidden opacity-0 transition-[background-color,_opacity] duration-200 ease-linear motion-reduce:transition-none z-[1035] group-[&.ps--active-y]/ps:block group-hover/ps:opacity-60 group-focus/ps:opacity-60 group-[&.ps--scrolling-y]/ps:opacity-60 hover:!opacity-90 focus:!opacity-90 [&.ps--clicking]:!opacity-90 outline-none",
  railYColors: "group-[&.ps--active-y]/ps:bg-transparent hover:!bg-[#eee] focus:!bg-[#eee] [&.ps--clicking]:!bg-[#eee] dark:hover:!bg-[#555] dark:focus:!bg-[#555] dark:[&.ps--clicking]:!bg-[#555]",
  railYThumb: "absolute right-0.5 rounded-md w-1.5 group-focus/ps:opacity-100 group-active/ps:opacity-100 [transition:background-color_.2s_linear,_width_.2s_ease-in-out,_opacity] group-hover/y:w-[11px] group-focus/y:w-[0.6875rem] group-[&.ps--clicking]/y:w-[11px] outline-none",
  railYThumbColors: "bg-[#aaa] group-hover/y:bg-[#999] group-focus/y:bg-[#999] group-[&.ps--clicking]/y:bg-[#999]"
}, Uv = {
  ps: "string",
  railX: "string",
  railXColors: "string",
  railXThumb: "string",
  railXThumbColors: "string",
  railY: "string",
  railYColors: "string",
  railYThumb: "string",
  railYThumbColors: "string"
};
class xr {
  constructor(t, e = {}, i = {}) {
    this._element = t, this._options = this._getConfig(e), this._classes = this._getClasses(i), this.perfectScrollbar = null, this._observer = null, this._psClasses = [
      {
        ps: "ps__rail-x",
        te: this._classes.railX,
        teColor: this._classes.railXColors
      },
      {
        ps: "ps__rail-y",
        te: this._classes.railY,
        teColor: this._classes.railYColors
      },
      {
        ps: "ps__thumb-x",
        te: this._classes.railXThumb,
        teColor: this._classes.railXThumbColors
      },
      {
        ps: "ps__thumb-y",
        te: this._classes.railYThumb,
        teColor: this._classes.railYThumbColors
      }
    ], this._element && (A.setData(t, $s, this), h.addClass(this._element, Yv)), this.init();
  }
  // Getters
  static get NAME() {
    return Ao;
  }
  get railX() {
    return d.findOne(".ps__rail-x", this._element);
  }
  get railY() {
    return d.findOne(".ps__rail-y", this._element);
  }
  _getConfig(t) {
    const e = h.getDataAttributes(this._element);
    return e.handlers !== void 0 && (e.handlers = e.handlers.split(" ")), t = {
      ...jv,
      ...e,
      ...t
    }, I(Ao, t, Kv), t;
  }
  _getClasses(t) {
    const e = h.getDataClassAttributes(this._element);
    return t = {
      ...zv,
      ...e,
      ...t
    }, I(Ao, t, Uv), t;
  }
  // Public
  dispose() {
    this._options.positionRight && this._observer.disconnect(), A.removeData(this._element, $s), this._element = null, this._dataAttrOptions = null, this._options = null, this.perfectScrollbar.destroy(), this.removeEvent(yo), this.perfectScrollbar = null;
  }
  init() {
    if (this.perfectScrollbar = new Zi(this._element, this._options), this._addPerfectScrollbarStyles(), this._updateScrollPosition(), this.perfectScrollbar.update(), this._initEvents(yo), this._options.positionRight) {
      this._observer = new ResizeObserver(() => {
        setTimeout(() => {
          this._updateScrollPosition();
        }, 100);
      });
      const t = {
        attributes: !0,
        attributeFilter: ["class", "className"]
      };
      this._observer.observe(this._element, t);
    }
  }
  _updateScrollPosition() {
    const t = getComputedStyle(this._element).getPropertyValue("height"), e = getComputedStyle(this._element).getPropertyValue("width");
    this.railX && (this.railX.style.transform = `translateY(calc(-100% + ${this._canTransform(t) ? t : "0px"}))`), this.railY && (this.railY.style.transform = `translateX(calc(-100% + ${this._canTransform(e) ? e : "0px"}))`);
  }
  _canTransform(t) {
    return t && t.includes("px");
  }
  update() {
    return this.perfectScrollbar.update();
  }
  _initEvents(t = []) {
    t.forEach(
      ({ ps: e, te: i }) => c.on(
        this._element,
        e,
        (n) => c.trigger(this._element, i, { e: n })
      )
    );
  }
  _addPerfectScrollbarStyles() {
    this._psClasses.forEach((t) => {
      const e = d.findOne(`.${t.ps}`, this._element);
      h.addClass(e, t.te), h.addClass(e, t.teColor);
    }), h.addClass(this._element, this._classes.ps), h.removeClass(this._element, "ps");
  }
  removeEvent(t) {
    let e = [];
    typeof t == "string" && (e = yo.filter(({ te: i }) => i === t)), e.forEach(({ ps: i, te: n }) => {
      c.off(this._element, i), c.off(this._element, n);
    });
  }
  // Static
  static jQueryInterface(t) {
    return this.each(function() {
      let e = A.getData(this, $s);
      const i = typeof t == "object" && t;
      if (!(!e && /dispose|hide/.test(t)) && (e || (e = new xr(this, i)), typeof t == "string")) {
        if (typeof e[t] > "u")
          throw new TypeError(`No method named "${t}"`);
        e[t]();
      }
    });
  }
  static getInstance(t) {
    return A.getData(t, $s);
  }
  static getOrCreateInstance(t, e = {}) {
    return this.getInstance(t) || new this(t, typeof e == "object" ? e : null);
  }
}
const Bh = xr, Xv = "data-te-datatable-select-ref", Gv = "data-te-datatable-pagination-nav-ref", qv = "data-te-datatable-pagination-right-ref", Zv = "data-te-datatable-pagination-left-ref", Qv = "data-te-datatable-pagination-start-ref", Jv = "data-te-datatable-pagination-end-ref", tT = ({
  text: s,
  entries: t,
  entriesOptions: e,
  fullPagination: i,
  rowsText: n,
  allText: o,
  paginationStartIconTemplate: r,
  paginationLeftIconTemplate: a,
  paginationRightIconTemplate: l,
  paginationEndIconTemplate: p,
  classes: u
}, _, f) => {
  const g = e.map((m) => m === "All" ? `<option value="${m}" ${m === t ? "selected" : ""}>${o}</option>` : `<option value="${m}" ${m === t ? "selected" : ""}>${m}</option>`).join(`
`);
  return `
<div class="${u.pagination} ${f ? `${u.paginationBordered}` : ""} ${u.borderColor} ${u.color}">
  <div class="${u.selectItemsWrapper}">  
    <p class="${u.paginationRowsText} ${_ ? `${u.loadingPaginationRowsText}` : ""}">${n}</p>
    <div class="${u.selectWrapper} ${_ ? `${u.loadingPaginationSelectWrapper}` : ""}">
      <select name="entries"
        ${_ ? "disabled" : ""} class="select" ${Xv}>
        ${g}
      </select>
    </div>
  </div>
  <div class="${u.paginationNav} ${_ ? `${u.loadingPaginationNav}` : ""}" ${Gv}>
  ${s}
  </div>
  <div class="${u.paginationButtonsWrapper}">
    ${i ? `<button data-te-ripple-init data-te-ripple-color="dark" class="${u.paginationStartButton}" ${Qv}>
           ${r}
          </button>` : ""}
    <button data-te-ripple-init data-te-ripple-color="dark" class="${u.paginationLeftButton}" ${Zv}>
      ${a}
  </button>
    <button data-te-ripple-init data-te-ripple-color="dark" class="${u.paginationRightButton}" ${qv}>
      ${l}
  </button>
    ${i ? `<button data-te-ripple-init data-te-ripple-color="dark" class="${u.paginationEndButton}" ${Jv}>
           ${p}
          </button>` : ""}
  </div>
</div>
`;
}, eT = "data-te-datatable-sort-icon-ref", iT = "data-te-datatable-header-checkbox-ref", sT = (s, t, e, i, n, o, r, a) => {
  const l = e ? `
  <th scope="col">
    <div class="${a.checkboxHeaderWrapper}">
      <input
        class="${a.checkboxHeader}"
        type="checkbox"
        value=""
        ${iT}
        />
    </div>
  </th>
  ` : '<th scope="col"></th>', p = s.map((u, _) => {
    const f = u.fixed ? s.filter((g, m) => g.fixed === u.fixed && m < _).reduce((g, m) => g + m.width, 0) : null;
    return `<th class="${a.column} ${i ? `${a.tableBordered}` : ""} ${a.borderColor} ${n ? `${a.sm}` : ""} ${u.fixed ? `${a.fixedHeader} ${a.color}` : ""} ${o ? `${a.loadingColumn}` : ""}" style="${u.fixed ? `${u.fixed === "right" ? "right" : "left"}: ${f}px;` : ""}" scope="col">${u.sort ? `<div class="${a.sortIconWrapper}"><span class="${a.sortIcon} ${o ? "invisible" : ""}" data-te-sort="${u.field}" ${eT}>${r}</span>` : ""} <span class="${u.sort ? "" : "pl-[18px]"}">${u.label}</span></div></th>`;
  });
  return [t ? l : "", ...p].join(`
`);
}, nT = "data-te-datatable-row-ref", oT = "data-te-datatable-row-checkbox-ref", rT = "data-te-datatable-cell-ref", aT = ({
  rows: s,
  columns: t,
  noFoundMessage: e,
  edit: i,
  selectable: n,
  loading: o,
  bordered: r,
  borderless: a,
  striped: l,
  hover: p,
  sm: u,
  classes: _
}) => {
  const f = s.map((g) => {
    const m = `
      <td data-te-field="checkbox" class="${r ? `${_.tableBordered} ${_.borderColor}` : ""}">
        <div class="${_.checkboxRowWrapper}">
          <input
            class="${_.checkboxRow}"
            type="checkbox"
            value=""
            data-te-row-index="${g.rowIndex}"  ${oT}/>
        </div>
      </td>`, b = t.map((v, T) => {
      const y = {};
      if (v.width && (y["min-width"] = `${v.width - 1}px`, y["max-width"] = `${v.width}px`, y.width = `${v.width}px`), v.fixed) {
        const E = t.filter((w, k) => w.fixed === v.fixed && k < T).reduce((w, k) => w + k.width, 0);
        y[v.fixed === "right" ? "right" : "left"] = `${E}px`;
      }
      return `<td style="${Object.keys(y).map((E) => `${E}: ${y[E]}`).join("; ")}" class="${_.rowItem} ${_.borderColor} ${i ? `${_.edit}` : ""} ${r ? `${_.tableBordered}` : ""} ${u ? `${_.sm}` : ""} ${v.fixed ? `${_.fixedHeader} ${_.color}` : ""}" ${rT} data-te-field="${v.field}" ${i && 'contenteditable="true"'}>${g[v.field]}</td>`;
    }).join("");
    return `<tr scope="row" class="${_.row} ${_.borderColor} ${_.rowAnimation} ${l ? `${_.striped}` : ""} ${a ? `${_.borderless}` : ""} ${p ? `${_.hoverRow}` : ""}" data-te-index="${g.rowIndex}" ${nT}>${n ? m : ""}${b}</tr>`;
  });
  return s.length > 0 || o ? f.join(`
`) : `<tr class="${_.noFoundMessageWrapper} ${_.borderColor}"><td class="${_.noFoundMessage}">${e}</td></tr>`;
}, lT = "data-te-datatable-inner-ref", cT = "data-te-datatable-header-ref", Pl = ({
  columns: s,
  rows: t,
  noFoundMessage: e,
  edit: i,
  multi: n,
  selectable: o,
  loading: r,
  loadingMessage: a,
  pagination: l,
  bordered: p,
  borderless: u,
  striped: _,
  hover: f,
  fixedHeader: g,
  sm: m,
  sortIconTemplate: b,
  classes: v
}) => {
  const T = aT({
    rows: t,
    columns: s,
    noFoundMessage: e,
    edit: i,
    loading: r,
    selectable: o,
    bordered: p,
    borderless: u,
    striped: _,
    hover: f,
    sm: m,
    classes: v
  }), y = sT(
    s,
    o,
    n,
    p,
    m,
    r,
    b,
    v
  );
  return { table: `
<div class="${v.color}" ${lT}>
  <table class="${v.table}">
    <thead class="${v.tableHeader} ${p ? `${v.tableBordered}` : ""} ${u ? `${v.borderless}` : ""} ${v.borderColor}" ${cT}>
      <tr>
        ${y}
      </tr>
    </thead>
    <tbody class="${g ? `${v.fixedHeaderBody}` : ""}">
      ${r ? "" : T}
    </tbody>
  </table>
</div>
${r ? `
  <div class="${v.loadingItemsWrapper}">
    <div class="${v.loadingProgressBarWrapper}">
      <div class="${v.loadingProgressBar}"></div>
    </div>
  </div>
<p class="${v.loadingMessage}">${a}</p>
` : ""}
${l.enable ? tT(l, r, p) : ""}
  `, rows: T, column: y };
}, hT = ({ rows: s, field: t, order: e }) => s.sort((n, o) => {
  let r = n[t], a = o[t];
  return typeof r == "string" && (r = r.toLowerCase()), typeof a == "string" && (a = a.toLowerCase()), r < a ? e === "desc" ? 1 : -1 : r > a ? e === "desc" ? -1 : 1 : 0;
}), dT = (s, t, e) => {
  if (!t)
    return s;
  const i = (n) => {
    const o = document.createElement("div");
    return o.innerHTML = n, n = o.textContent || o.innerText || "", n.toString().toLowerCase().match(t.toLowerCase());
  };
  return s.filter((n) => {
    if (e && typeof e == "string")
      return i(n[e]);
    let o = Object.values(n);
    return e && Array.isArray(e) && (o = Object.keys(n).filter((r) => e.includes(r)).map((r) => n[r])), o.filter((r) => i(r)).length > 0;
  });
}, Bl = ({ rows: s, entries: t, activePage: e }) => {
  const i = e * t;
  return s.slice(i, i + Number(t));
}, Vi = "datatable", gt = `data-te-${Vi}`, ki = `te.${Vi}`, An = `.${ki}`, uT = `[${gt}-inner-ref]`, wo = `[${gt}-cell-ref]`, pT = `[${gt}-header-ref]`, _T = `[${gt}-header-checkbox-ref]`, fT = `[${gt}-pagination-right-ref]`, mT = `[${gt}-pagination-left-ref]`, gT = `[${gt}-pagination-start-ref]`, bT = `[${gt}-pagination-end-ref]`, vT = `[${gt}-pagination-nav-ref]`, TT = `[${gt}-select-ref]`, ko = `[${gt}-sort-icon-ref]`, Ti = `[${gt}-row-ref]`, xo = `[${gt}-row-checkbox-ref]`, ET = `selectRows${An}`, Hl = `render${An}`, CT = `rowClick${An}`, AT = `update${An}`, yT = `<svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" stroke-width="3" stroke="currentColor">
  <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 10.5L12 3m0 0l7.5 7.5M12 3v18" />
</svg>`, wT = `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-4 h-4">
  <path stroke-linecap="round" stroke-linejoin="round" d="M18.75 19.5l-7.5-7.5 7.5-7.5m-6 15L5.25 12l7.5-7.5" />
</svg>`, kT = `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-4 h-4">
  <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
</svg>`, xT = `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-4 h-4">
  <path stroke-linecap="round" stroke-linejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
</svg>`, OT = `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-4 h-4">
  <path stroke-linecap="round" stroke-linejoin="round" d="M11.25 4.5l7.5 7.5-7.5 7.5m-6-15l7.5 7.5-7.5 7.5"/>
</svg>`, ST = "border-neutral-200 dark:border-neutral-500", IT = "border-none", DT = "relative float-left -ml-[1.5rem] mr-[6px] mt-[0.15rem] h-[1.125rem] w-[1.125rem] appearance-none rounded-[0.25rem] border-[0.125rem] border-solid border-neutral-300 outline-none before:pointer-events-none before:absolute before:h-[0.875rem] before:w-[0.875rem] before:scale-0 before:rounded-full before:bg-transparent before:opacity-0 before:shadow-[0px_0px_0px_13px_transparent] before:content-[''] checked:border-primary checked:bg-primary checked:before:opacity-[0.16] checked:after:absolute checked:after:-mt-px checked:after:ml-[0.25rem] checked:after:block checked:after:h-[0.8125rem] checked:after:w-[0.375rem] checked:after:rotate-45 checked:after:border-[0.125rem] checked:after:border-l-0 checked:after:border-t-0 checked:after:border-solid checked:after:border-white checked:after:bg-transparent checked:after:content-[''] hover:cursor-pointer hover:before:opacity-[0.04] hover:before:shadow-[0px_0px_0px_13px_rgba(0,0,0,0.6)] focus:shadow-none focus:transition-[border-color_0.2s] focus:before:scale-100 focus:before:opacity-[0.12] focus:before:shadow-[0px_0px_0px_13px_rgba(0,0,0,0.6)] focus:before:transition-[box-shadow_0.2s,transform_0.2s] focus:after:absolute focus:after:z-[1] focus:after:block focus:after:h-[0.875rem] focus:after:w-[0.875rem] focus:after:rounded-[0.125rem] focus:after:content-[''] checked:focus:before:scale-100 checked:focus:before:shadow-[0px_0px_0px_13px_#3b71ca] checked:focus:before:transition-[box-shadow_0.2s,transform_0.2s] checked:focus:after:-mt-px checked:focus:after:ml-[0.25rem] checked:focus:after:h-[0.8125rem] checked:focus:after:w-[0.375rem] checked:focus:after:rotate-45 checked:focus:after:rounded-none checked:focus:after:border-[0.125rem] checked:focus:after:border-l-0 checked:focus:after:border-t-0 checked:focus:after:border-solid checked:focus:after:border-white checked:focus:after:bg-transparent dark:border-neutral-600 dark:checked:border-primary dark:checked:bg-primary dark:focus:before:shadow-[0px_0px_0px_13px_rgba(255,255,255,0.4)] dark:checked:focus:before:shadow-[0px_0px_0px_13px_#3b71ca] dark:border-neutral-400", $T = "mb-[0.125rem] min-h-[1.5rem] pl-[1.5rem] ml-3 flex items-center", LT = "relative float-left -ml-[1.5rem] mr-[6px] mt-[0.15rem] h-[1.125rem] w-[1.125rem] appearance-none rounded-[0.25rem] border-[0.125rem] border-solid border-neutral-300 outline-none before:pointer-events-none before:absolute before:h-[0.875rem] before:w-[0.875rem] before:scale-0 before:rounded-full before:bg-transparent before:opacity-0 before:shadow-[0px_0px_0px_13px_transparent] before:content-[''] checked:border-primary checked:bg-primary checked:before:opacity-[0.16] checked:after:absolute checked:after:-mt-px checked:after:ml-[0.25rem] checked:after:block checked:after:h-[0.8125rem] checked:after:w-[0.375rem] checked:after:rotate-45 checked:after:border-[0.125rem] checked:after:border-l-0 checked:after:border-t-0 checked:after:border-solid checked:after:border-white checked:after:bg-transparent checked:after:content-[''] hover:cursor-pointer hover:before:opacity-[0.04] hover:before:shadow-[0px_0px_0px_13px_rgba(0,0,0,0.6)] focus:shadow-none focus:transition-[border-color_0.2s] focus:before:scale-100 focus:before:opacity-[0.12] focus:before:shadow-[0px_0px_0px_13px_rgba(0,0,0,0.6)] focus:before:transition-[box-shadow_0.2s,transform_0.2s] focus:after:absolute focus:after:z-[1] focus:after:block focus:after:h-[0.875rem] focus:after:w-[0.875rem] focus:after:rounded-[0.125rem] focus:after:content-[''] checked:focus:before:scale-100 checked:focus:before:shadow-[0px_0px_0px_13px_#3b71ca] checked:focus:before:transition-[box-shadow_0.2s,transform_0.2s] checked:focus:after:-mt-px checked:focus:after:ml-[0.25rem] checked:focus:after:h-[0.8125rem] checked:focus:after:w-[0.375rem] checked:focus:after:rotate-45 checked:focus:after:rounded-none checked:focus:after:border-[0.125rem] checked:focus:after:border-l-0 checked:focus:after:border-t-0 checked:focus:after:border-solid checked:focus:after:border-white checked:focus:after:bg-transparent dark:border-neutral-600 dark:checked:border-primary dark:checked:bg-primary dark:focus:before:shadow-[0px_0px_0px_13px_rgba(255,255,255,0.4)] dark:checked:focus:before:shadow-[0px_0px_0px_13px_#3b71ca] dark:border-neutral-400", NT = "mb-[0.125rem] min-h-[1.5rem] pl-[1.5rem] ml-3 flex items-center", MT = "bg-white dark:bg-neutral-800", RT = "py-4 pl-1 text-clip overflow-hidden text-[#212529] dark:text-white", PT = "focus:outline-none", BT = "sticky top-0 z-30", HT = "sticky z-10 bg-inherit", VT = "hover:bg-neutral-100 dark:hover:bg-neutral-700", WT = "pointer-events-none cursor-none text-neutral-400 dark:text-neutral-300", FT = "h-[2px] relative w-full overflow-hidden", YT = "text-center text-neutral-500 font-ligh text-sm my-4 dark:text-neutral-400", jT = "text-neutral-500 dark:text-neutral-300", KT = "text-neutral-500 dark:text-neutral-300", zT = "pointer-events-none cursor-none", UT = "h-full w-[45%] bg-primary-400 dark:bg-primary-600", XT = "h-full animate-[progress_3s_ease-in-out_infinite]", GT = "pl-2 py-3 font-light text-sm dark:text-neutral-300", qT = "border-b", ZT = "flex md:flex-row justify-end items-center py-2 space-x-4 text-sm flex-col leading-[1.6]", QT = "border border-t-0", JT = "order-1 my-3 md:order-none md:my-0 md:pr-1", tE = "inline-block rounded p-2.5 text-xs font-medium uppercase leading-normal transition duration-150 ease-in-out hover:bg-neutral-100 hover:text-primary-600 focus:text-primary-600 focus:outline-none focus:ring-0 active:text-primary-700 disabled:text-slate-300 disabled:hover:bg-transparent dark:hover:bg-neutral-500 dark:disabled:hover:bg-transparent dark:disabled:text-neutral-600", eE = "inline-block rounded p-2.5 font-medium uppercase leading-normal transition duration-150 ease-in-out hover:bg-neutral-100 hover:text-primary-600 focus:text-primary-600 focus:outline-none focus:ring-0 active:text-primary-700 disabled:text-slate-300 disabled:hover:bg-transparent dark:hover:bg-neutral-500 dark:disabled:hover:bg-transparent dark:disabled:text-neutral-600", iE = "font-normal order-2 mb-3 md:order-none md:mb-0", sE = "inline-block rounded p-2.5 font-medium uppercase leading-normal transition duration-150 ease-in-out hover:bg-neutral-100 hover:text-primary-600 focus:text-primary-600 focus:outline-none focus:ring-0 active:text-primary-700 disabled:text-slate-300 disabled:hover:bg-transparent dark:hover:bg-neutral-500 dark:disabled:hover:bg-transparent dark:disabled:text-neutral-600", nE = "font-light", oE = "inline-block rounded p-2.5 font-medium uppercase leading-normal transition duration-150 ease-in-out hover:bg-neutral-100 hover:text-primary-600 focus:text-primary-600 focus:outline-none focus:ring-0 active:text-primary-700 disabled:text-slate-300 disabled:hover:bg-transparent dark:hover:bg-neutral-500 dark:disabled:hover:bg-transparent dark:disabled:text-neutral-600", rE = "border-b", aE = "transition ease-in-out duration-300 motion-reduce:transition-none", lE = "whitespace-nowrap text-clip overflow-auto px-[1.4rem] py-4", cE = "relative", hE = "!bg-neutral-100 dark:!bg-neutral-600", dE = "flex items-center space-x-4 order-3 md:order-none", uE = "w-[70px]", pE = "!py-2", _E = "w-[15px] h-[10px] origin-bottom font-black mr-1 opacity-0 text-neutral-500 group-hover:opacity-100 transition hover:ease-in-out transform ease-linear duration-300 motion-reduce:transition-none dark:text-neutral-400", fE = "flex flex-row group", mE = "[&:nth-child(odd)]:bg-neutral-50 [&:nth-child(odd)]:dark:bg-neutral-700", gE = "border", bE = "border-b font-normal px-[1.4rem]", vE = "text-left text-sm font-light w-full leading-[1.6]", TE = {
  bordered: "boolean",
  borderless: "boolean",
  clickableRows: "boolean",
  defaultValue: "string",
  edit: "boolean",
  entries: "(number|string)",
  entriesOptions: "array",
  fullPagination: "boolean",
  hover: "boolean",
  loading: "boolean",
  loadingMessage: "string",
  maxWidth: "(null|number|string)",
  maxHeight: "(null|number|string)",
  multi: "boolean",
  noFoundMessage: "string",
  pagination: "boolean",
  selectable: "boolean",
  sm: "boolean",
  sortField: "(null|string)",
  sortOrder: "string",
  fixedHeader: "boolean",
  striped: "boolean",
  rowsText: "string",
  ofText: "string",
  allText: "string",
  forceSort: "boolean",
  sortIconTemplate: "string",
  paginationStartIconTemplate: "string",
  paginationEndIconTemplate: "string",
  paginationLeftIconTemplate: "string",
  paginationRightIconTemplate: "string"
}, EE = {
  bordered: !1,
  borderless: !1,
  clickableRows: !1,
  defaultValue: "-",
  edit: !1,
  entries: 10,
  entriesOptions: [10, 25, 50, 200],
  fixedHeader: !1,
  fullPagination: !1,
  hover: !1,
  loading: !1,
  loadingMessage: "Loading results...",
  maxWidth: null,
  maxHeight: null,
  multi: !1,
  noFoundMessage: "No matching results found",
  pagination: !0,
  selectable: !1,
  sm: !1,
  sortField: null,
  sortOrder: "asc",
  striped: !1,
  rowsText: "Rows per page:",
  ofText: "of",
  allText: "All",
  forceSort: !1,
  sortIconTemplate: yT,
  paginationStartIconTemplate: wT,
  paginationEndIconTemplate: OT,
  paginationLeftIconTemplate: kT,
  paginationRightIconTemplate: xT
}, CE = {
  label: "string",
  field: "string",
  fixed: "(boolean|string)",
  format: "(function|null)",
  width: "(number|null)",
  sort: "boolean",
  columnIndex: "number"
}, AE = {
  label: "",
  field: "",
  fixed: !1,
  format: null,
  width: null,
  sort: !0,
  columnIndex: 0
}, yE = {
  table: vE,
  tableHeader: bE,
  column: RT,
  pagination: ZT,
  selectWrapper: uE,
  scroll: cE,
  tableBordered: gE,
  paginationBordered: QT,
  borderless: IT,
  checkboxRowWrapper: NT,
  checkboxRow: LT,
  checkboxHeaderWrapper: $T,
  checkboxHeader: DT,
  row: rE,
  rowItem: lE,
  striped: mE,
  sortIconWrapper: fE,
  sortIcon: _E,
  paginationRowsText: nE,
  paginationNav: iE,
  paginationButtonsWrapper: JT,
  hoverRow: VT,
  borderColor: ST,
  color: MT,
  fixedHeader: BT,
  fixedHeaderBody: HT,
  selectableRow: hE,
  rowAnimation: aE,
  sm: pE,
  edit: PT,
  selectItemsWrapper: dE,
  paginationStartButton: oE,
  paginationLeftButton: eE,
  paginationRightButton: sE,
  paginationEndButton: tE,
  loadingItemsWrapper: FT,
  loadingProgressBarWrapper: XT,
  loadingProgressBar: UT,
  loadingMessage: YT,
  loadingPaginationRowsText: KT,
  loadingPaginationSelectWrapper: zT,
  loadingPaginationNav: jT,
  loadingColumn: WT,
  noFoundMessageWrapper: qT,
  noFoundMessage: GT
}, wE = {
  table: "string",
  tableHeader: "string",
  column: "string",
  pagination: "string",
  selectWrapper: "string",
  scroll: "string",
  tableBordered: "string",
  paginationBordered: "string",
  borderless: "string",
  checkboxRowWrapper: "string",
  checkboxRow: "string",
  checkboxHeaderWrapper: "string",
  checkboxHeader: "string",
  row: "string",
  rowItem: "string",
  striped: "string",
  sortIconWrapper: "string",
  sortIcon: "string",
  paginationRowsText: "string",
  paginationNav: "string",
  paginationButtonsWrapper: "string",
  hoverRow: "string",
  borderColor: "string",
  color: "string",
  fixedHeader: "string",
  fixedHeaderBody: "string",
  selectableRow: "string",
  rowAnimation: "string",
  sm: "string",
  edit: "string",
  selectItemsWrapper: "string",
  paginationStartButton: "string",
  paginationLeftButton: "string",
  paginationRightButton: "string",
  paginationEndButton: "string",
  loadingItemsWrapper: "string",
  loadingProgressBarWrapper: "string",
  loadingProgressBar: "string",
  loadingMessage: "string",
  loadingPaginationRowsText: "string",
  loadingPaginationSelectWrapper: "string",
  loadingPaginationNav: "string",
  loadingColumn: "string",
  noFoundMessageWrapper: "string",
  noFoundMessage: "string"
};
class Hh {
  constructor(t, e = {}, i = {}, n = {}) {
    this._element = t, this._options = this._getOptions(i), this._classes = this._getClasses(n), this._sortReverse = !1, this._activePage = 0, this._search = "", this._searchColumn = null, this._paginationLeft = null, this._paginationRight = null, this._paginationStart = null, this._paginationEnd = null, this._select = null, this._selectInstance = null, this._selected = [], this._checkboxes = null, this._headerCheckbox = null, this._rows = this._getRows(e.rows), this._columns = this._getColumns(e.columns), this._element && (A.setData(t, ki, this), this._perfectScrollbar = null, this._setup());
  }
  // Getters
  static get NAME() {
    return Vi;
  }
  get columns() {
    return this._columns.map((t, e) => {
      let i = {
        ...AE,
        field: `field_${e}`,
        columnIndex: e
      };
      return typeof t == "string" ? i.label = t : typeof t == "object" && (i = {
        ...i,
        ...t
      }), I("column", i, CE), i;
    });
  }
  get rows() {
    return this._rows.map((t, e) => {
      const i = {
        rowIndex: e
      };
      return Array.isArray(t) ? this.columns.forEach((n, o) => {
        t[o] === 0 ? i[n.field] = t[o] : i[n.field] = t[o] || this._options.defaultValue;
      }) : typeof t == "object" && this.columns.forEach((n) => {
        t[n.field] === 0 ? i[n.field] = t[n.field] : i[n.field] = t[n.field] || this._options.defaultValue;
      }), i;
    });
  }
  get searchResult() {
    return dT(this.rows, this._search, this._searchColumn);
  }
  get computedRows() {
    let t = [...this.searchResult];
    return this._options.sortOrder && (t = hT({
      rows: t,
      field: this._options.sortField,
      order: this._options.sortOrder
    })), this._options.pagination && (this._options.entries === "All" ? t = Bl({
      rows: t,
      entries: t.length,
      activePage: this._activePage
    }) : t = Bl({
      rows: t,
      entries: this._options.entries,
      activePage: this._activePage
    })), t;
  }
  get pages() {
    return this._options.entries === "All" ? 1 : Math.ceil(this.searchResult.length / this._options.entries);
  }
  get navigationText() {
    const t = this._activePage * this._options.entries;
    return this.searchResult.length === 0 ? `0 ${this._options.ofText} 0` : this._options.entries === "All" ? `1 - ${this.searchResult.length} ${this._options.ofText} ${this.searchResult.length}` : `${t + 1} - ${this.computedRows.length + t} ${this._options.ofText} ${this.searchResult.length}`;
  }
  get tableOptions() {
    return {
      classes: this._classes,
      columns: this.columns,
      rows: this.computedRows,
      noFoundMessage: this._options.noFoundMessage,
      edit: this._options.edit,
      loading: this._options.loading,
      loaderClass: this._options.loaderClass,
      loadingMessage: this._options.loadingMessage,
      selectable: this._options.selectable,
      multi: this._options.multi,
      bordered: this._options.bordered,
      borderless: this._options.borderless,
      striped: this._options.striped,
      hover: this._options.hover,
      fixedHeader: this._options.fixedHeader,
      sm: this._options.sm,
      sortIconTemplate: this._options.sortIconTemplate,
      pagination: {
        enable: this._options.pagination,
        text: this.navigationText,
        entries: this._options.entries,
        entriesOptions: this._options.entriesOptions,
        fullPagination: this._options.fullPagination,
        rowsText: this._options.rowsText,
        ofText: this._options.ofText,
        allText: this._options.allText,
        paginationStartIconTemplate: this._options.paginationStartIconTemplate,
        paginationLeftIconTemplate: this._options.paginationLeftIconTemplate,
        paginationRightIconTemplate: this._options.paginationRightIconTemplate,
        paginationEndIconTemplate: this._options.paginationEndIconTemplate,
        classes: this._classes
      },
      forceSort: this._options.forceSort
    };
  }
  // Public
  update(t, e = {}) {
    t && t.rows && (this._rows = t.rows), t && t.columns && (this._columns = t.columns), this._clearClassList(e), this._options = this._getOptions({ ...this._options, ...e }), this._setup(), this._performSort();
  }
  dispose() {
    this._selectInstance && this._selectInstance.dispose(), A.removeData(this._element, ki), this._removeEventListeners(), this._perfectScrollbar.destroy(), this._element = null;
  }
  search(t, e) {
    this._search = t, this._searchColumn = e, this._activePage = 0, this._options.pagination && this._toggleDisableState(), this._renderRows(), this._options.maxHeight && (this._perfectScrollbar.element.scrollTop = 0, this._perfectScrollbar.update());
  }
  sort(t, e = "asc") {
    this._options.sortOrder = e, typeof t == "string" ? this._options.sortField = this.columns.find(
      (n) => n.label === t
    ).field : this._options.sortField = t.field;
    const i = d.findOne(
      `[data-te-sort="${this._options.sortField}"]`,
      this._element
    );
    this._activePage = 0, this._toggleDisableState(), this._renderRows(), this._setActiveSortIcon(i);
  }
  setActivePage(t) {
    t < this.pages && this._changeActivePage(t);
  }
  // Private
  _getClasses(t) {
    const e = h.getDataClassAttributes(this._element);
    return t = {
      ...yE,
      ...e,
      ...t
    }, I(Vi, t, wE), t;
  }
  _changeActivePage(t) {
    this._activePage = t, this._toggleDisableState(), this._renderRows();
  }
  _clearClassList(t) {
    ["hover", "bordered", "borderless", "sm", "striped"].forEach((e) => {
      this._options[e] && !t[e] && h.removeDataAttribute(`data-te-${e}`);
    });
  }
  _emitSelectEvent() {
    c.trigger(this._element, ET, {
      selectedRows: this.rows.filter(
        (t) => this._selected.indexOf(t.rowIndex) !== -1
      ),
      selectedIndexes: this._selected,
      allSelected: this._selected.length === this.rows.length
    });
  }
  _getRows(t = []) {
    const e = d.findOne("tbody", this._element);
    return e ? [...d.find("tr", e).map((n) => d.find("td", n).map((o) => o.innerHTML)), ...t] : t;
  }
  _getColumns(t = []) {
    const e = d.findOne("thead", this._element);
    if (!e)
      return t;
    const i = d.findOne("tr", e);
    return [...d.find("th", i).map((o) => ({
      label: o.innerHTML,
      ...h.getDataAttributes(o)
    })), ...t];
  }
  _getCSSValue(t) {
    return typeof t == "string" ? t : `${t}px`;
  }
  _getOptions(t) {
    const e = {
      ...EE,
      ...h.getDataAttributes(this._element),
      ...t
    };
    return I(Vi, e, TE), e;
  }
  _setActiveRows() {
    d.find(Ti, this._element).forEach((t) => {
      this._selected.includes(h.getDataAttribute(t, "index")) ? h.addClass(t, `active ${this._classes.selectableRow}`) : h.removeClass(t, `active ${this._classes.selectableRow}`);
    });
  }
  _setEntries(t) {
    this._options = this._getOptions({
      ...this._options,
      entries: t.target.value
    }), this._activePage > this.pages - 1 && (this._activePage = this.pages - 1), this._toggleDisableState(), this._renderRows();
  }
  _setSelected() {
    d.find(xo, this._element).forEach(
      (t) => {
        const e = h.getDataAttribute(t, "rowIndex");
        t.checked = this._selected.includes(e);
      }
    ), this._setActiveRows();
  }
  _setActiveSortIcon(t) {
    d.find(ko, this._element).forEach((e) => {
      const i = this._options.sortOrder === "desc" && e === t ? 180 : 0;
      h.style(e, {
        transform: `rotate(${i}deg)`
      }), e === t && this._options.sortOrder ? h.addClass(e, "opacity-100") : h.removeClass(e, "opacity-100");
    });
  }
  _setup() {
    this._renderTable(), this._options.pagination && this._setupPagination(), this._options.edit && this._setupEditable(), this._options.clickableRows && this._setupClickableRows(), this._options.selectable && this._setupSelectable(), this._setupScroll(), this._setupSort();
  }
  _setupClickableRows() {
    d.find(Ti, this._element).forEach((t) => {
      const e = h.getDataAttribute(t, "index");
      h.addClass(t, "cursor-pointer"), c.on(t, "click", (i) => {
        d.matches(i.target, xo) || c.trigger(this._element, CT, {
          index: e,
          row: this.rows[e]
        });
      });
    });
  }
  _setupEditable() {
    d.find(Ti, this._element).forEach((t) => {
      const e = h.getDataAttribute(t, "index");
      d.find(wo, t).forEach((i) => {
        c.on(i, "input", (n) => this._updateRow(n, e));
      });
    });
  }
  _setupScroll() {
    const t = d.findOne(uT, this._element), e = {};
    if (this._options.maxHeight && (e.maxHeight = this._getCSSValue(this._options.maxHeight)), this._options.maxWidth) {
      const i = this._getCSSValue(this._options.maxWidth);
      e.maxWidth = i, h.style(this._element, { maxWidth: i });
    }
    if (h.style(t, e), h.addClass(t, `${this._classes.scroll}`), this._options.fixedHeader) {
      let i = d.find(pT, this._element);
      this._options.selectable && (i = i.filter((n, o) => (h.addClass(
        n,
        `${this._classes.fixedHeader} ${this._classes.color}`
      ), o !== 0))), i.forEach((n, o) => {
        h.addClass(
          n,
          `${this._classes.fixedHeader} ${this._classes.color}`
        ), this.columns[o].fixed && h.addClass(n, "!z-40");
      });
    }
    this._perfectScrollbar = new Bh(t);
  }
  _setupSort() {
    d.find(ko, this._element).forEach((t) => {
      const e = h.getDataAttribute(t, "sort"), [i] = d.parents(t, "th");
      if (this.columns.sort)
        h.addClass(i, "cursor-pointer");
      else
        return;
      e === this._options.sortField && this._setActiveSortIcon(t), c.on(i, "click", () => {
        this._options.sortField === e && this._options.sortOrder === "asc" ? this._options.sortOrder = "desc" : this._options.sortField === e && this._options.sortOrder === "desc" ? this._options.sortOrder = this._options.forceSort ? "asc" : null : this._options.sortOrder = "asc", this._options.sortField = e, this._activePage = 0, this._performSort(), this._setActiveSortIcon(t);
      });
    });
  }
  _performSort() {
    this._toggleDisableState(), this._renderRows();
  }
  _setupSelectable() {
    this._checkboxes = d.find(xo, this._element), this._headerCheckbox = d.findOne(
      _T,
      this._element
    ), c.on(
      this._headerCheckbox,
      "input",
      (t) => this._toggleSelectAll(t)
    ), this._checkboxes.forEach((t) => {
      const e = h.getDataAttribute(t, "rowIndex");
      c.on(
        t,
        "input",
        (i) => this._toggleSelectRow(i, e)
      );
    });
  }
  _setupPagination() {
    this._paginationRight = d.findOne(
      fT,
      this._element
    ), this._paginationLeft = d.findOne(
      mT,
      this._element
    ), c.on(
      this._paginationRight,
      "click",
      () => this._changeActivePage(this._activePage + 1)
    ), c.on(
      this._paginationLeft,
      "click",
      () => this._changeActivePage(this._activePage - 1)
    ), this._options.fullPagination && (this._paginationStart = d.findOne(
      gT,
      this._element
    ), this._paginationEnd = d.findOne(
      bT,
      this._element
    ), c.on(
      this._paginationStart,
      "click",
      () => this._changeActivePage(0)
    ), c.on(
      this._paginationEnd,
      "click",
      () => this._changeActivePage(this.pages - 1)
    )), this._toggleDisableState(), this._setupPaginationSelect();
  }
  _setupPaginationSelect() {
    this._select = d.findOne(TT, this._element), this._selectInstance = new kr(this._select), c.on(
      this._select,
      "valueChange.te.select",
      (t) => this._setEntries(t)
    );
  }
  _removeEventListeners() {
    this._options.pagination && (c.off(this._paginationRight, "click"), c.off(this._paginationLeft, "click"), c.off(this._select, "valueChange.te.select"), this._options.fullPagination && (c.off(this._paginationStart, "click"), c.off(this._paginationEnd, "click"))), this._options.edit && d.find(wo, this._element).forEach((t) => {
      c.off(t, "input");
    }), this._options.clickableRows && d.find(Ti, this._element).forEach((t) => {
      c.off(t, "click");
    }), d.find(ko, this._element).forEach((t) => {
      const [e] = d.parents(t, "th");
      c.off(e, "click");
    }), this._options.selectable && (c.off(this._headerCheckbox, "input"), this._checkboxes.forEach((t) => {
      c.off(t, "input");
    }));
  }
  _renderTable() {
    this._element.innerHTML = Pl(this.tableOptions).table, this._formatCells(), c.trigger(this._element, Hl);
  }
  _renderRows() {
    const t = d.findOne("tbody", this._element);
    if (this._options.pagination) {
      const e = d.findOne(
        vT,
        this._element
      );
      e.innerText = this.navigationText;
    }
    t.innerHTML = Pl(this.tableOptions).rows, this._formatCells(), this._options.edit && this._setupEditable(), this._options.selectable && (this._setupSelectable(), this._setSelected()), this._options.clickableRows && this._setupClickableRows(), c.trigger(this._element, Hl);
  }
  _formatCells() {
    d.find(Ti, this._element).forEach((e) => {
      const i = h.getDataAttribute(e, "index");
      d.find(wo, e).forEach((o) => {
        const r = h.getDataAttribute(o, "field"), a = this.columns.find((l) => l.field === r);
        a && a.format !== null && a.format(o, this.rows[i][r]);
      });
    });
  }
  _toggleDisableState() {
    this._options.pagination !== !1 && (this._activePage === 0 || this._options.loading ? (this._paginationLeft.setAttribute("disabled", ""), this._options.fullPagination && this._paginationStart.setAttribute("disabled", "")) : (this._paginationLeft.removeAttribute("disabled"), this._options.fullPagination && this._paginationStart.removeAttribute("disabled")), this._activePage === this.pages - 1 || this._options.loading || this.pages === 0 ? (this._paginationRight.setAttribute("disabled", ""), this._options.fullPagination && this._paginationEnd.setAttribute("disabled", "")) : (this._paginationRight.removeAttribute("disabled"), this._options.fullPagination && this._paginationEnd.removeAttribute("disabled")));
  }
  _toggleSelectAll(t) {
    t.target.checked ? this._selected = this.rows.map((e) => e.rowIndex) : this._selected = [], this._setSelected(), this._emitSelectEvent();
  }
  _toggleSelectRow(t, e) {
    t.target.checked ? this._options.multi && !this._selected.includes(e) ? this._selected = [...this._selected, e] : (this._selected = [e], this._checkboxes.forEach((i) => {
      i !== t.target && (i.checked = !1);
    })) : this._selected = this._selected.filter((i) => i !== e), this._options.multi && !t.target.checked && (this._headerCheckbox.checked = !1), this._setActiveRows(), this._emitSelectEvent();
  }
  _updateRow(t, e) {
    const i = h.getDataAttribute(t.target, "field"), n = t.target.textContent, o = this._rows[e];
    if (Array.isArray(o)) {
      const a = this.columns.find((l) => l.field === i).columnIndex;
      o[a] = n;
    } else
      o[i] = n;
    c.trigger(this._element, AT, {
      rows: this._rows,
      columns: this._columns
    });
  }
  static jQueryInterface(t, e, i) {
    return this.each(function() {
      let n = A.getData(this, ki);
      const o = typeof t == "object" && t;
      if (!(!n && /dispose/.test(t)) && (n || (n = new Hh(this, o, e)), typeof t == "string")) {
        if (typeof n[t] > "u")
          throw new TypeError(`No method named "${t}"`);
        n[t](e, i);
      }
    });
  }
  static getInstance(t) {
    return A.getData(t, ki);
  }
  static getOrCreateInstance(t, e = {}) {
    return this.getInstance(t) || new this(t, typeof e == "object" ? e : null);
  }
}
const Vl = "rating", sn = "te.rating", kE = "data-te-rating-init", xE = "[data-te-rating-icon-ref]", ci = `.${sn}`, OE = "ArrowLeft", SE = "ArrowRight", IE = {
  tooltip: "string",
  value: "(string|number)",
  readonly: "boolean",
  after: "string",
  before: "string",
  dynamic: "boolean",
  active: "string"
}, DE = {
  tooltip: "top",
  value: "",
  readonly: !1,
  after: "",
  before: "",
  dynamic: !1,
  active: "fill-current"
}, Wl = `onSelect${ci}`, $E = `onHover${ci}`, Fl = `keyup${ci}`, Yl = `focusout${ci}`, jl = `keydown${ci}`, Kl = `mousedown${ci}`;
class GA {
  constructor(t, e) {
    this._element = t, this._icons = d.find(xE, this._element), this._options = this._getConfig(e), this._index = -1, this._savedIndex = null, this._originalClassList = [], this._originalIcons = [], this._fn = {}, this._tooltips = [], this._element && (A.setData(t, sn, this), this._init());
  }
  // Getters
  static get NAME() {
    return Vl;
  }
  dispose() {
    A.removeData(this._element, sn), this._options.readonly || (c.off(this._element, Fl), c.off(this._element, Yl), c.off(this._element, jl), this._element.removeEventListener("mouseleave", this._fn.mouseleave), this._icons.forEach((t, e) => {
      c.off(t, Kl), t.removeEventListener("mouseenter", this._fn.mouseenter[e]), h.removeClass(t, "cursor-pointer");
    }), this._tooltips.forEach((t) => {
      t._element.removeAttribute(kE), t.dispose();
    }), this._icons.forEach((t) => t.removeAttribute("tabIndex"))), this._element = null;
  }
  // Private
  _init() {
    this._options.readonly || (this._bindMouseEnter(), this._bindMouseLeave(), this._bindMouseDown(), this._bindKeyDown(), this._bindKeyUp(), this._bindFocusLost(), this._icons.forEach((t) => {
      h.addClass(t, "cursor-pointer");
    })), this._options.dynamic && (this._saveOriginalClassList(), this._saveOriginalIcons()), this._setCustomText(), this._setToolTips(), this._options.value && (this._index = this._options.value - 1, this._updateRating(this._index));
  }
  _getConfig(t) {
    const e = h.getDataAttributes(this._element);
    return t = {
      ...DE,
      ...e,
      ...t
    }, I(Vl, t, IE), t;
  }
  _bindMouseEnter() {
    this._fn.mouseenter = [], this._icons.forEach((t, e) => {
      t.addEventListener(
        "mouseenter",
        // this._fn.mouseenter[i] is needed to create reference and unpin events after call dispose
        // prettier-ignore
        this._fn.mouseenter[e] = (i) => {
          this._index = this._icons.indexOf(i.target), this._updateRating(this._index), this._triggerEvents(t, $E);
        }
      );
    });
  }
  _bindMouseLeave() {
    this._element.addEventListener(
      "mouseleave",
      // this._fn.mouseleave is needed to create reference and unpin events after call dispose
      // prettier-ignore
      this._fn.mouseleave = () => {
        this._savedIndex !== null ? (this._updateRating(this._savedIndex), this._index = this._savedIndex) : this._options.value ? (this._updateRating(this._options.value - 1), this._index = this._options.value - 1) : (this._index = -1, this._clearRating());
      }
    );
  }
  _bindMouseDown() {
    this._icons.forEach((t) => {
      c.on(t, Kl, () => {
        this._setElementOutline("none"), this._savedIndex = this._index, this._triggerEvents(t, Wl);
      });
    });
  }
  _bindKeyDown() {
    this._element.tabIndex = 0, c.on(
      this._element,
      jl,
      (t) => this._updateAfterKeyDown(t)
    );
  }
  _bindKeyUp() {
    c.on(
      this._element,
      Fl,
      () => this._setElementOutline("auto")
    );
  }
  _bindFocusLost() {
    c.on(
      this._element,
      Yl,
      () => this._setElementOutline("none")
    );
  }
  _setElementOutline(t) {
    this._element.style.outline = t;
  }
  _triggerEvents(t, e) {
    c.trigger(t, e, {
      value: this._index + 1
    });
  }
  _updateAfterKeyDown(t) {
    const e = this._icons.length - 1, i = this._index;
    t.key === SE && this._index < e && (this._index += 1), t.key === OE && this._index > -1 && (this._index -= 1), i !== this._index && (this._savedIndex = this._index, this._updateRating(this._savedIndex), this._triggerEvents(this._icons[this._savedIndex], Wl));
  }
  _updateRating(t) {
    this._clearRating(), this._options.dynamic && this._restoreOriginalIcon(t), this._icons.forEach((e, i) => {
      i <= t && h.addClass(e.querySelector("svg"), this._options.active);
    });
  }
  _clearRating() {
    this._icons.forEach((t, e) => {
      const i = t.querySelector("svg");
      this._options.dynamic && (t.classList = this._originalClassList[e], i.innerHTML = this._originalIcons[e]), h.removeClass(i, this._options.active);
    });
  }
  _setToolTips() {
    this._icons.forEach((t, e) => {
      const i = h.getDataAttribute(t, "toggle");
      t.title && !i && (h.setDataAttribute(t, "toggle", "tooltip"), this._tooltips[e] = new ri(t, {
        placement: this._options.tooltip
      }));
    });
  }
  _setCustomText() {
    this._icons.forEach((t) => {
      const e = h.getDataAttribute(t, "after"), i = h.getDataAttribute(t, "before");
      e && t.insertAdjacentHTML("afterEnd", e), i && t.insertAdjacentHTML("beforeBegin", i);
    });
  }
  _saveOriginalClassList() {
    this._icons.forEach((t) => {
      const e = t.classList.value;
      this._originalClassList.push(e);
    });
  }
  _saveOriginalIcons() {
    this._icons.forEach((t) => {
      const e = t.querySelector("svg").innerHTML;
      this._originalIcons.push(e);
    });
  }
  _restoreOriginalIcon(t) {
    const e = this._originalClassList[t], i = this._originalIcons[t];
    this._icons.forEach((n, o) => {
      if (o <= t) {
        const r = n.querySelector("svg");
        r.innerHTML = i, n.classList = e;
      }
    });
  }
  // Static
  static getInstance(t) {
    return A.getData(t, sn);
  }
  static getOrCreateInstance(t, e = {}) {
    return this.getInstance(t) || new this(t, typeof e == "object" ? e : null);
  }
}
const Oo = "popconfirm", xi = "te.popconfirm", Vh = `.${xi}`, LE = `cancel${Vh}`, NE = `confirm${Vh}`, ME = "[data-te-popconfirm-body]", So = "data-te-popconfirm-popover", RE = "data-te-popconfirm-modal", zl = "data-te-popconfirm-backdrop", PE = {
  popconfirmMode: "string",
  message: "string",
  cancelText: "(null|string)",
  okText: "(null|string)",
  popconfirmIconTemplate: "string",
  cancelLabel: "(null|string)",
  confirmLabel: "(null|string)",
  position: "(null|string)"
}, BE = {
  popconfirmMode: "inline",
  message: "Are you sure?",
  cancelText: "Cancel",
  okText: "OK",
  popconfirmIconTemplate: "",
  cancelLabel: "Cancel",
  confirmLabel: "Confirm",
  position: "bottom"
}, HE = {
  backdrop: "string",
  body: "string",
  btnCancel: "string",
  btnConfirm: "string",
  btnsContainer: "string",
  fade: "string",
  icon: "string",
  message: "string",
  messageText: "string",
  modal: "string",
  popover: "string"
}, VE = {
  backdrop: "h-full w-full z-[1070] fixed top-0 left-0 bg-[#00000066] flex justify-center items-center",
  body: "p-[1rem] bg-white rounded-[0.5rem] opacity-0 dark:bg-neutral-700",
  btnCancel: "inline-block rounded bg-primary-100 px-4 pb-[5px] pt-[6px] text-xs font-medium uppercase leading-normal text-primary-700 transition duration-150 ease-in-out hover:bg-primary-accent-100 focus:bg-primary-accent-100 focus:outline-none focus:ring-0 active:bg-primary-accent-200",
  btnConfirm: "inline-block rounded bg-primary px-4 pb-[5px] pt-[6px] text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]",
  btnsContainer: "flex justify-end space-x-2",
  fade: "transition-opacity duration-[150ms] ease-linear",
  icon: "pr-2",
  message: "flex mb-3",
  messageText: "text-neutral-600 dark:text-white",
  modal: "absolute w-[300px] z-[1080] shadow-sm rounded-[0.5rem]",
  popover: "w-[300px] border-0 rounded-[0.5rem] z-[1080] shadow-sm"
};
class Wh {
  constructor(t, e, i) {
    this._element = t, this._options = this._getConfig(e), this._classes = this._getClasses(i), this._popper = null, this._cancelButton = "", this._confirmButton = "", this._isOpen = !1, this._uid = this._element.id ? `popconfirm-${this._element.id}` : et("popconfirm-"), t && A.setData(t, xi, this), this._clickHandler = this.open.bind(this), c.on(this._element, "click", this._clickHandler);
  }
  // Getters
  static get NAME() {
    return Oo;
  }
  get container() {
    return d.findOne(`#${this._uid}`);
  }
  get popconfirmBody() {
    return d.findOne(
      ME,
      this.container
    );
  }
  // Public
  dispose() {
    (this._isOpen || this.container !== null) && this.close(), A.removeData(this._element, xi), c.off(this._element, "click", this._clickHandler), this._element = null;
  }
  open() {
    this._isOpen || (this._options.popconfirmMode === "inline" ? this._openPopover(this._getPopoverTemplate()) : this._openModal(this._getModalTemplate()), this._handleCancelButtonClick(), this._handleConfirmButtonClick(), this._listenToEscapeKey(), this._listenToOutsideClick());
  }
  close() {
    if (this._isOpen) {
      if (this._popper !== null || d.findOne(`[${So}]`) !== null)
        c.on(
          this.popconfirmBody,
          "transitionend",
          this._handlePopconfirmTransitionEnd.bind(this)
        ), h.removeClass(this.popconfirmBody, "opacity-100");
      else {
        const t = d.findOne(
          `[${zl}]`
        );
        h.removeClass(this.popconfirmBody, "opacity-100"), document.body.removeChild(t), this._isOpen = !1;
      }
      c.off(document, "click", this._handleOutsideClick.bind(this)), c.off(document, "keydown", this._handleEscapeKey.bind(this));
    }
  }
  _handlePopconfirmTransitionEnd(t) {
    if (t.target !== this.popconfirmBody)
      return;
    const e = d.findOne(
      `[${So}]`
    );
    c.off(this.popconfirmBody, "transitionend"), this._isOpen && t && t.propertyName === "opacity" && (this._popper.destroy(), e && document.body.removeChild(e), this._isOpen = !1);
  }
  // Private
  _getPopoverTemplate() {
    const t = $("div"), e = this._getPopconfirmTemplate();
    return t.setAttribute(So, ""), h.addClass(t, this._classes.popover), t.id = this._uid, t.innerHTML = e, t;
  }
  _getModalTemplate() {
    const t = $("div"), e = this._getPopconfirmTemplate();
    return t.setAttribute(RE, ""), h.addClass(t, `${this._classes.modal}`), t.id = this._uid, t.innerHTML = e, t;
  }
  _getPopconfirmTemplate() {
    return `<div data-te-popconfirm-body class="${this._classes.body}">
      <p class="${this._classes.message}">
      ${this._options.popconfirmIconTemplate ? `<span class="${this._classes.icon}">${this._options.popconfirmIconTemplate}</span>` : ""}
      <span class="${this._classes.messageText}">${this._options.message}</span>
      </p>
      <div class="${this._classes.btnsContainer}">
      ${this._options.cancelText ? `<button type="button" data-te-ripple-init data-te-ripple-color="light" id="popconfirm-button-cancel" aria-label="${this._options.cancelLabel}"
        class="${this._classes.btnCancel}">${this._options.cancelText}</button>` : ""}
      <button type="button" data-te-ripple-init data-te-ripple-color="light" id="popconfirm-button-confirm"
      aria-label="${this._options.confirmLabel}"
      class="${this._classes.btnConfirm}">${this._options.okText ? this._options.okText : "Ok"}</button>
      </div>
    </div>`;
  }
  _getConfig(t) {
    return t = {
      ...BE,
      ...h.getDataAttributes(this._element),
      ...t
    }, I(Oo, t, PE), t;
  }
  _getClasses(t) {
    const e = h.getDataClassAttributes(this._element);
    return t = {
      ...VE,
      ...e,
      ...t
    }, I(Oo, t, HE), t;
  }
  _openPopover(t) {
    this._popper = se(this._element, t, {
      placement: this._translatePositionValue(),
      modifiers: [
        {
          name: "offset",
          options: {
            offset: [0, 5]
          }
        }
      ]
    }), document.body.appendChild(t), setTimeout(() => {
      h.addClass(
        this.popconfirmBody,
        `${this._classes.fade} opacity-100`
      ), this._isOpen = !0;
    }, 0);
  }
  _openModal(t) {
    const e = $("div");
    e.setAttribute(zl, ""), h.addClass(e, this._classes.backdrop), document.body.appendChild(e), e.appendChild(t), h.addClass(this.popconfirmBody, "opacity-100"), this._isOpen = !0;
  }
  _handleCancelButtonClick() {
    const t = this.container;
    this._cancelButton = d.findOne(
      "#popconfirm-button-cancel",
      t
    ), ei.getOrCreateInstance(this._cancelButton, { rippleColor: "light" }), this._cancelButton !== null && c.on(this._cancelButton, "click", () => {
      this.close(), c.trigger(this._element, LE);
    });
  }
  _handleConfirmButtonClick() {
    const t = this.container;
    this._confirmButton = d.findOne(
      "#popconfirm-button-confirm",
      t
    ), ei.getOrCreateInstance(this._confirmButton, { rippleColor: "light" }), c.on(this._confirmButton, "click", () => {
      this.close(), c.trigger(this._element, NE);
    });
  }
  _listenToEscapeKey() {
    c.on(document, "keydown", this._handleEscapeKey.bind(this));
  }
  _handleEscapeKey(t) {
    t.keyCode === we && this.close();
  }
  _listenToOutsideClick() {
    c.on(document, "click", this._handleOutsideClick.bind(this));
  }
  _handleOutsideClick(t) {
    const e = this.container, i = t.target === e, n = e && e.contains(t.target), o = t.target === this._element, r = this._element && this._element.contains(t.target);
    !i && !n && !o && !r && this.close();
  }
  _translatePositionValue() {
    switch (this._options.position) {
      case "top left":
        return "top-end";
      case "top":
        return "top";
      case "top right":
        return "top-start";
      case "bottom left":
        return "bottom-end";
      case "bottom":
        return "bottom";
      case "bottom right":
        return "bottom-start";
      case "left":
        return "left";
      case "left top":
        return "left-end";
      case "left bottom":
        return "left-start";
      case "right":
        return "right";
      case "right top":
        return "right-end";
      case "right bottom":
        return "right-start";
      case void 0:
        return "bottom";
      default:
        return "bottom";
    }
  }
  // Static
  static jQueryInterface(t, e) {
    return this.each(function() {
      const i = A.getData(this, xi), n = typeof t == "object" && t;
      if (!(!i && /dispose/.test(t))) {
        if (!i)
          return new Wh(this, n);
        if (typeof t == "string") {
          if (typeof i[t] > "u")
            throw new TypeError(`No method named "${t}"`);
          i[t](e);
        }
      }
    });
  }
  static getInstance(t) {
    return A.getData(t, xi);
  }
  static getOrCreateInstance(t, e = {}) {
    return this.getInstance(t) || new this(t, typeof e == "object" ? e : null);
  }
}
const Io = "lightbox", Oi = "te.lightbox", WE = `.${Oi}`, FE = ".data-api", Me = `click${WE}${FE}`, Fh = "[data-te-lightbox-init]", YE = `${Fh} img:not([data-te-lightbox-disabled])`, Ul = "data-te-lightbox-caption", jE = "data-te-lightbox-disabled", Dt = "data-te-lightbox-active", KE = `<svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" stroke-width="3" stroke="currentColor" class="w-4 h-4">
  <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 12h-15m0 0l6.75 6.75M4.5 12l6.75-6.75" />
</svg>
`, zE = `<svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" stroke-width="3" stroke="currentColor" class="w-4 h-4">
  <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75" />
</svg>
`, UE = `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="3" stroke="currentColor" class="w-4 h-4">
  <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 3.75v4.5m0-4.5h4.5m-4.5 0L9 9M3.75 20.25v-4.5m0 4.5h4.5m-4.5 0L9 15M20.25 3.75h-4.5m4.5 0v4.5m0-4.5L15 9m5.25 11.25h-4.5m4.5 0v-4.5m0 4.5L15 15" />
</svg>
`, XE = `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="3" stroke="currentColor" class="w-4 h-4">
  <path stroke-linecap="round" stroke-linejoin="round" d="M9 9V4.5M9 9H4.5M9 9L3.75 3.75M9 15v4.5M9 15H4.5M9 15l-5.25 5.25M15 9h4.5M15 9V4.5M15 9l5.25-5.25M15 15h4.5M15 15v4.5m0-4.5l5.25 5.25" />
</svg>
`, GE = `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="3" stroke="currentColor" class="w-4 h-4">
  <path stroke-linecap="round" stroke-linejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607zM10.5 7.5v6m3-3h-6" />
</svg>
`, qE = `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="3" stroke="currentColor" class="w-4 h-4">
<path stroke-linecap="round" stroke-linejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607zM13.5 10.5h-6" />
</svg>
`, ZE = `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="3" stroke="currentColor" class="w-4 h-4">
  <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
</svg>
`, QE = {
  container: "string",
  zoomLevel: "(number|string)",
  prevIconTemplate: "string",
  nextIconTemplate: "string",
  showFullscreenIconTemplate: "string",
  hideFullscreenIconTemplate: "string",
  zoomInIconTemplate: "string",
  closeIconTemplate: "string",
  zoomOutIconTemplate: "string",
  spinnerContent: "string"
}, JE = {
  container: "body",
  zoomLevel: 1,
  prevIconTemplate: KE,
  nextIconTemplate: zE,
  showFullscreenIconTemplate: UE,
  hideFullscreenIconTemplate: XE,
  zoomInIconTemplate: GE,
  zoomOutIconTemplate: qE,
  closeIconTemplate: ZE,
  spinnerContent: "Loading..."
}, t0 = {
  caption: "text-white text-ellipsis overflow-hidden whitespace-nowrap mx-[10px] text-center",
  captionWrapper: "fixed left-0 bottom-0 w-full h-[50px] flex justify-center items-center",
  closeBtn: "border-none bg-transparent w-[50px] h-[50px] px-4 text-[#b3b3b3] transition-colors duration-200 ease-in-out hover:text-white focus:text-white motion-reduce:transition-none outline-none",
  fullscreenBtn: "border-none bg-transparent w-[50px] h-[50px] px-4 text-[#b3b3b3] transition-colors duration-200 ease-in-out hover:text-white focus:text-white motion-reduce:transition-none outline-none",
  gallery: "invisible fixed left-0 top-0 w-full h-full z-[1100] pointer-events-none opacity-0 bg-[#000000e6] transition-all duration-[400ms] motion-reduce:transition-none",
  galleryContent: "fixed top-[50px] left-[50px] w-[calc(100%-100px)] h-[calc(100%-100px)]",
  galleryCounter: "flex justify-center items-center px-[10px] mb-0 h-full text-[#b3b3b3]",
  img: "absolute left-0 top-0 w-full max-h-full h-auto cursor-pointer pointer-events-auto",
  imgWrapper: "absolute top-0 left-0 w-full h-full opacity-0 transform scale-[0.25] transition-all duration-[400ms] ease-out pointer-events-none motion-reduce:transition-none motion-reduce:transform-none",
  leftTools: "float-left h-full",
  loader: "fixed left-0 top-0 z-[2] w-full h-full text-neutral-50 opacity-1 flex justify-center items-center pointer-events-none transition-opacity duration-[1000ms] motion-reduce:transition-none",
  nextBtn: "border-none bg-transparent w-full h-[50px] flex justify-center items-center text-[#b3b3b3] transition-colors duration-200 ease-in-out hover:text-white focus:text-white motion-reduce:transition-none outline-none",
  nextBtnWrapper: "fixed right-0 top-0 w-[50px] h-full flex justify-center items-center transition-opacity duration-[400ms] motion-reduce:transition-none",
  prevBtn: "border-none bg-transparent w-full h-[50px] flex justify-center items-center text-[#b3b3b3] transition-colors duration-200 ease-in-out hover:text-white focus:text-white motion-reduce:transition-none outline-none",
  prevBtnWrapper: "fixed left-0 top-0 w-[50px] h-full flex justify-center items-center transition-opacity duration-[400ms] motion-reduce:transition-none",
  rightTools: "float-right",
  spinner: "inline-block h-8 w-8 animate-[spinner-grow_0.75s_linear_infinite] rounded-full bg-current align-[-0.125em] motion-reduce:animate-[spinner-grow_1.5s_linear_infinite]",
  spinnerContent: "!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]",
  toolbar: "absolute top-0 left-0 w-full h-[50px] z-20 transition-opacity duration-[400ms] motion-reduce:transition-none",
  vertical: "h-full max-h-full w-auto",
  zoomBtn: "border-none bg-transparent w-[50px] h-[50px] px-4 text-[#b3b3b3] transition-colors duration-200 ease-in-out hover:text-white focus:text-white motion-reduce:transition-none outline-none"
}, e0 = {
  caption: "string",
  captionWrapper: "string",
  closeBtn: "string",
  fullscreenBtn: "string",
  gallery: "string",
  galleryContent: "string",
  galleryCounter: "string",
  img: "string",
  imgWrapper: "string",
  leftTools: "string",
  loader: "string",
  nextBtn: "string",
  nextBtnWrapper: "string",
  prevBtn: "string",
  prevBtnWrapper: "string",
  rightTools: "string",
  spinner: "string",
  spinnerContent: "string",
  toolbar: "string",
  vertical: "string",
  zoomBtn: "string"
};
class nn {
  constructor(t, e = {}, i) {
    this._element = t, this._options = e, this._classes = this._getClasses(i), this._getContainer(), this._id = `lightbox-${Math.random().toString(36).substr(2, 9)}`, this._activeImg = 0, this._images = [], this._zoom = 1, this._gallery = null, this._galleryToolbar = null, this._galleryContent = null, this._loader = null, this._imgCounter = null, this._animating = !1, this._fullscreen = !1, this._zoomBtn = null, this._fullscreenBtn = null, this._toolsToggleTimer = 0, this._mousedown = !1, this._mousedownPositionX = 0, this._mousedownPositionY = 0, this._originalPositionX = 0, this._originalPositionY = 0, this._positionX = 0, this._positionY = 0, this._zoomTimer = 0, this._tapCounter = 0, this._tapTime = 0, this._rightArrow = null, this._leftArrowWrapper = null, this._rightArrowWrapper = null, this._initiated = !1, this._multitouch = !1, this._touchZoomPosition = [], this._element && (A.setData(t, Oi, this), this.init());
  }
  // Getters
  static get NAME() {
    return Io;
  }
  get activeImg() {
    return this._activeImg;
  }
  get currentImg() {
    return d.findOne(
      `[${Dt}]`,
      this._galleryContent
    );
  }
  get options() {
    const t = {
      ...JE,
      ...h.getDataAttributes(this._element),
      ...this._options
    };
    return I(Io, t, QE), t;
  }
  // Public
  init() {
    this._initiated || (this._appendTemplate(), this._initiated = !0);
  }
  open(t = 0) {
    this._getImages(), this._setActiveImg(t), this._sortImages(), this._triggerEvents("open", "opened"), this._loadImages().then((e) => {
      this._resizeImages(e), this._toggleTemplate(), this._addEvents(), this._focusFullscreenBtn();
    });
  }
  close() {
    this.reset(), this._removeEvents(), this._toggleTemplate(), this._triggerEvents("close", "closed");
  }
  slide(t = "right") {
    this._animating === !0 || this._images.length <= 1 || (this._triggerEvents("slide", "slided"), this._beforeSlideEvents(), t === "right" && this._slideHorizontally(t), t === "left" && this._slideHorizontally(t), t === "first" && this._slideToTarget(t), t === "last" && this._slideToTarget(t), this._afterSlideEvents());
  }
  zoomIn() {
    this._zoom >= 3 || (this._triggerEvents("zoomIn", "zoomedIn"), this._zoom += parseFloat(this.options.zoomLevel), h.style(this.currentImg.parentNode, {
      transform: `scale(${this._zoom})`
    }), this._updateZoomBtn());
  }
  zoomOut() {
    this._zoom <= 1 || (this._triggerEvents("zoomOut", "zoomedOut"), this._zoom -= parseFloat(this.options.zoomLevel), h.style(this.currentImg.parentNode, {
      transform: `scale(${this._zoom})`
    }), this._updateZoomBtn(), this._updateImgPosition());
  }
  toggleFullscreen() {
    this._fullscreen === !1 ? (this._fullscreenBtn.setAttribute(Dt, ""), this._fullscreenBtn.innerHTML = this.options.hideFullscreenIconTemplate, this._gallery.requestFullscreen && this._gallery.requestFullscreen(), this._fullscreen = !0) : (this._fullscreenBtn.removeAttribute(Dt), document.exitFullscreen && document.exitFullscreen(), this._fullscreen = !1);
  }
  reset() {
    this._restoreDefaultFullscreen(), this._restoreDefaultPosition(), this._restoreDefaultZoom(), clearTimeout(this._toolsToggleTimer), clearTimeout(this._doubleTapTimer);
  }
  dispose() {
    c.off(
      document,
      Me,
      YE,
      this.toggle
    ), this._galleryContent && this._removeEvents(), this._gallery && this._gallery.remove(), A.removeData(this._element, Oi), this._element = null;
  }
  // Private
  _getClasses(t) {
    const e = h.getDataClassAttributes(this._element);
    return t = {
      ...t0,
      ...e,
      ...t
    }, I(Io, t, e0), t;
  }
  _getImages() {
    const e = d.find("img", this._element).filter(
      (i) => !i.hasAttribute(jE)
    );
    this._images = e;
  }
  _getContainer() {
    this._container = d.findOne(this.options.container);
  }
  _setActiveImg(t) {
    this._activeImg = typeof t == "number" ? t : this._images.indexOf(t.target);
  }
  _appendTemplate() {
    this._gallery = $("div"), h.addClass(this._gallery, `${this._classes.gallery}`), this._element.dataset.id = this._id, this._gallery.id = this._id, this._appendLoader(), this._appendToolbar(), this._appendContent(), this._appendArrows(), this._appendCaption(), this._container.append(this._gallery);
  }
  _appendToolbar() {
    this._galleryToolbar = $("div"), this._imgCounter = $("p"), this._fullscreenBtn = $("button"), this._zoomBtn = $("button");
    const t = $("button"), e = $("div"), i = $("div");
    h.addClass(this._galleryToolbar, `${this._classes.toolbar}`), h.addClass(this._imgCounter, `${this._classes.galleryCounter}`), h.addClass(this._fullscreenBtn, `${this._classes.fullscreenBtn}`), h.addClass(this._zoomBtn, `${this._classes.zoomInBtn}`), h.addClass(this._zoomBtn, this._classes.zoomBtn), h.addClass(e, `${this._classes.leftTools}`), h.addClass(i, `${this._classes.rightTools}`), h.addClass(t, `${this._classes.closeBtn}`), this._fullscreenBtn.innerHTML = this.options.showFullscreenIconTemplate, t.innerHTML = this.options.closeIconTemplate, this._zoomBtn.innerHTML = this.options.zoomInIconTemplate, this._fullscreenBtn.setAttribute("aria-label", "Toggle fullscreen"), this._zoomBtn.setAttribute("aria-label", "Zoom in"), t.setAttribute("aria-label", "Close"), c.on(
      this._fullscreenBtn,
      Me,
      () => this.toggleFullscreen()
    ), c.on(
      this._zoomBtn,
      Me,
      () => this._toggleZoom()
    ), c.on(t, Me, () => this.close()), e.append(this._imgCounter), i.append(this._fullscreenBtn), i.append(this._zoomBtn), i.append(t), this._galleryToolbar.append(e), this._galleryToolbar.append(i), this._gallery.append(this._galleryToolbar);
  }
  _appendContent() {
    this._galleryContent = $("div"), h.addClass(
      this._galleryContent,
      `${this._classes.galleryContent}`
    ), this._gallery.append(this._galleryContent);
  }
  _appendLoader() {
    this._loader = $("div");
    const t = $("div"), e = $("span");
    h.addClass(this._loader, `${this._classes.loader}`), h.addClass(t, `${this._classes.spinner}`), h.addClass(e, `${this._classes.spinnerContent}`), t.setAttribute("role", "status"), e.innerHTML = this.options.spinnerContent, t.append(e), this._loader.append(t), this._gallery.append(this._loader);
  }
  _appendArrows() {
    this._leftArrowWrapper = $("div"), h.addClass(
      this._leftArrowWrapper,
      `${this._classes.prevBtnWrapper}`
    );
    const t = $("button");
    t.setAttribute("aria-label", "Previous"), h.addClass(t, `${this._classes.prevBtn}`), c.on(t, Me, () => this.slide("left")), this._leftArrowWrapper.append(t), this._rightArrowWrapper = $("div"), h.addClass(
      this._rightArrowWrapper,
      `${this._classes.nextBtnWrapper}`
    ), this._rightArrow = $("button"), this._rightArrow.setAttribute("aria-label", "Next"), h.addClass(this._rightArrow, `${this._classes.nextBtn}`), c.on(this._rightArrow, Me, () => this.slide()), this._rightArrowWrapper.append(this._rightArrow), this._rightArrow.innerHTML = this.options.nextIconTemplate, t.innerHTML = this.options.prevIconTemplate, this._getImages(), !(this._images.length <= 1) && (this._gallery.append(this._leftArrowWrapper), this._gallery.append(this._rightArrowWrapper));
  }
  _appendCaption() {
    const t = $("div"), e = $("p");
    e.setAttribute(Ul, ""), h.addClass(t, `${this._classes.captionWrapper}`), h.addClass(e, `${this._classes.caption}`), t.append(e), this._gallery.append(t);
  }
  _sortImages() {
    for (let t = 0; t < this._activeImg; t++)
      this._images.push(this._images.shift());
  }
  async _loadImages() {
    const t = [], e = [];
    this._galleryContent.innerHTML = "";
    let i = 0;
    return this._images.forEach((n, o) => {
      t.push(
        new Promise((r) => {
          const a = new Image(), l = $("div");
          h.addClass(l, `${this._classes.imgWrapper}`), h.addClass(a, `${this._classes.img}`), this._addImgStyles(a, l, i, o, n), l.append(a), this._galleryContent.append(l), a.onload = r, a.src = n.dataset.teImg || n.src, e.push(a), i += 100;
        })
      );
    }), await Promise.all(t), e;
  }
  _addImgStyles(t, e, i, n, o) {
    t.alt = o.alt, t.draggable = !1, h.style(e, {
      position: "absolute",
      left: `${i}%`,
      top: 0
    }), (o.dataset.teCaption || o.dataset.teCaption === "") && (t.dataset.caption = o.dataset.teCaption), i === 0 ? (o.width < o.height && h.addClass(t, `${this._classes.vertical}`), h.style(e, { opacity: 1 }), t.setAttribute(Dt, "")) : t.removeAttribute(Dt), n === this._images.length - 1 && this._images.length > 1 && h.style(e, { left: "-100%" });
  }
  _resizeImages(t) {
    t.forEach((e) => {
      this._calculateImgSize(e);
    });
  }
  _calculateImgSize(t) {
    t.width >= t.height ? (t.style.width = "100%", t.style.maxWidth = "100%", t.style.height = "auto", t.style.top = `${(t.parentNode.offsetHeight - t.height) / 2}px`, t.style.left = 0) : (t.style.height = "100%", t.style.maxHeight = "100%", t.style.width = "auto", t.style.left = `${(t.parentNode.offsetWidth - t.width) / 2}px`, t.style.top = 0), t.width >= t.parentNode.offsetWidth && (t.style.width = `${t.parentNode.offsetWidth}px`, t.style.height = "auto", t.style.left = 0, t.style.top = `${(t.parentNode.offsetHeight - t.height) / 2}px`), t.height >= t.parentNode.offsetHeight && (t.style.height = `${t.parentNode.offsetHeight}px`, t.style.width = "auto", t.style.top = 0, t.style.left = `${(t.parentNode.offsetWidth - t.width) / 2}px`), this._positionX = parseFloat(t.style.left) || 0, this._positionY = parseFloat(t.style.top) || 0;
  }
  _onResize() {
    this._images = d.find("img", this._galleryContent), this._images.forEach((t) => {
      this._calculateImgSize(t);
    });
  }
  _onFullscreenChange() {
    (document.webkitIsFullScreen || document.mozFullScreen || document.msFullscreenElement) === void 0 && (this._fullscreen = !1, this._fullscreenBtn.innerHTML = this.options.showFullscreenIconTemplate, this._fullscreenBtn.removeAttribute(Dt));
  }
  _beforeSlideEvents() {
    this._animationStart(), this._restoreDefaultZoom(), this._restoreDefaultPosition(), this._resetDoubleTap();
  }
  _slideHorizontally(t) {
    this._images = d.find("img", this._galleryContent), this._images.forEach((e) => {
      let i;
      t === "right" ? (i = parseInt(e.parentNode.style.left, 10) - 100, i < -100 && (i = (this._images.length - 2) * 100)) : (i = parseInt(e.parentNode.style.left, 10) + 100, i === (this._images.length - 1) * 100 && (i = -100)), this._slideImg(e, i);
    }), this._updateActiveImg(t);
  }
  _slideImg(t, e) {
    e === 0 ? (t.setAttribute(Dt, ""), h.style(t.parentNode, { opacity: 1, transform: "scale(1)" })) : (t.removeAttribute(Dt), h.style(t.parentNode, {
      opacity: 0,
      transform: "scale(0.25)"
    })), t.parentNode.style.left = `${e}%`;
  }
  _slideToTarget(t) {
    t === "first" && this._activeImg === 0 || t === "last" && this._activeImg === this._images.length - 1 || (this.reset(), this._removeEvents(), this._showLoader(), this._getImages(), this._activeImg = t === "first" ? 0 : this._images.length - 1, this._sortImages(), h.style(this.currentImg.parentNode, {
      transform: "scale(0.25)",
      opacity: 0
    }), setTimeout(() => {
      this._loadImages().then((e) => {
        this._resizeImages(e), this._addEvents(), this._updateCaption(), this._hideLoader(), setTimeout(() => {
          h.style(this.currentImg.parentNode, {
            transform: "scale(1)",
            opacity: 1
          });
        }, 10);
      });
    }, 400));
  }
  _updateActiveImg(t) {
    t === "right" && (this._activeImg === this._images.length - 1 ? this._activeImg = 0 : this._activeImg++), t === "left" && (this._activeImg === 0 ? this._activeImg = this._images.length - 1 : this._activeImg--);
  }
  _afterSlideEvents() {
    this._updateCounter(), this._updateCaption();
  }
  _updateCounter() {
    this._images.length <= 1 || setTimeout(() => {
      this._imgCounter.innerHTML = `${this._activeImg + 1} / ${this._images.length}`;
    }, 200);
  }
  _updateCaption() {
    setTimeout(() => {
      let t = this.currentImg.alt;
      (this.currentImg.dataset.caption || this.currentImg.dataset.caption === "") && (t = this.currentImg.dataset.caption), d.findOne(
        `[${Ul}]`,
        this._gallery
      ).innerHTML = t;
    }, 200);
  }
  _toggleTemplate() {
    this._gallery.style.visibility === "visible" ? (h.style(this.currentImg.parentNode, {
      transform: "scale(0.25)"
    }), setTimeout(() => {
      this._hideGallery(), this._enableScroll(), this._showLoader();
    }, 100)) : (this._showGallery(), this._disableScroll(), this._updateCounter(), this._updateCaption(), this._setToolsToggleTimout(), this._hideLoader());
  }
  _showLoader() {
    h.style(this._loader, { opacity: 1 });
  }
  _hideLoader() {
    h.style(this._loader, { opacity: 0 });
  }
  _hideGallery() {
    h.style(this._gallery, {
      opacity: 0,
      pointerEvents: "none",
      visibility: "hidden"
    });
  }
  _showGallery() {
    h.style(this._gallery, {
      opacity: 1,
      pointerEvents: "initial",
      visibility: "visible"
    }), setTimeout(() => {
      h.style(this.currentImg.parentNode, { transform: "scale(1)" });
    }, 50);
  }
  _toggleZoom() {
    this._zoom !== 1 ? this.zoomOut() : this.zoomIn();
  }
  _updateZoomBtn() {
    this._zoom > 1 ? (this._zoomBtn.setAttribute(Dt, ""), this._zoomBtn.setAttribute("aria-label", "Zoom out"), this._zoomBtn.innerHTML = this.options.zoomOutIconTemplate) : (this._zoomBtn.removeAttribute(Dt), this._zoomBtn.setAttribute("aria-label", "Zoom in"), this._zoomBtn.innerHTML = this.options.zoomInIconTemplate);
  }
  _updateImgPosition() {
    this._zoom === 1 && this._restoreDefaultPosition();
  }
  _addEvents() {
    const t = d.find("img", this._galleryContent);
    this._onWindowTouchmove = this._onWindowTouchmove.bind(this), this._onWindowTouchstart = this._onWindowTouchstart.bind(this), this._onImgMousedown = this._onMousedown.bind(this), this._onImgMousemove = this._onMousemove.bind(this), this._onImgWheel = this._onZoom.bind(this), this._onImgMouseup = this._onMouseup.bind(this), this._onImgTouchend = this._onTouchend.bind(this), this._onImgDoubleClick = this._onDoubleClick.bind(this), this._onWindowResize = this._onResize.bind(this), this._onWindowFullscreenChange = this._onFullscreenChange.bind(this), this._onAnyImgAction = this._resetToolsToggler.bind(this), this._onGalleryClick = this._onBackdropClick.bind(this), this._onKeyupEvent = this._onKeyup.bind(this), this._onRightArrowKeydownEvent = this._onRightArrowKeydown.bind(this), this._onFullscreenBtnKeydownEvent = this._onFullscreenBtnKeydown.bind(this), t.forEach((e) => {
      c.on(e, "mousedown", this._onImgMousedown, {
        passive: !0
      }), c.on(e, "touchstart", this._onImgMousedown, {
        passive: !0
      }), c.on(e, "mousemove", this._onImgMousemove, {
        passive: !0
      }), c.on(e, "touchmove", this._onImgMousemove, {
        passive: !0
      }), c.on(e, "wheel", this._onImgWheel, { passive: !0 }), c.on(e, "dblclick", this._onImgDoubleClick, {
        passive: !0
      });
    }), document.addEventListener("touchmove", this._onWindowTouchmove, {
      passive: !1
    }), c.on(window, "touchstart", this._onWindowTouchstart), c.on(window, "mouseup", this._onImgMouseup), c.on(window, "touchend", this._onImgTouchend), c.on(window, "resize", this._onWindowResize), c.on(window, "orientationchange", this._onWindowResize), c.on(window, "keyup", this._onKeyupEvent), c.on(window, "fullscreenchange", this._onWindowFullscreenChange), c.on(this._gallery, "mousemove", this._onAnyImgAction), c.on(this._gallery, "click", this._onGalleryClick), c.on(
      this._rightArrow,
      "keydown",
      this._onRightArrowKeydownEvent
    ), c.on(
      this._fullscreenBtn,
      "keydown",
      this._onFullscreenBtnKeydownEvent
    );
  }
  _removeEvents() {
    d.find("img", this._galleryContent).forEach((e) => {
      c.off(e, "mousedown", this._onImgMousedown), c.off(e, "touchstart", this._onImgMousedown), c.off(e, "mousemove", this._onImgMousemove), c.off(e, "touchmove", this._onImgMousemove), c.off(e, "wheel", this._onImgWheel), c.off(e, "dblclick", this._onImgDoubleClick);
    }), document.removeEventListener("touchmove", this._onWindowTouchmove, {
      passive: !1
    }), c.off(window, "touchstart", this._onWindowTouchstart), c.off(window, "mouseup", this._onImgMouseup), c.off(window, "touchend", this._onImgTouchend), c.off(window, "resize", this._onWindowResize), c.off(window, "orientationchange", this._onWindowResize), c.off(window, "keyup", this._onKeyupEvent), c.off(
      window,
      "fullscreenchange",
      this._onWindowFullscreenChange
    ), c.off(this._gallery, "mousemove", this._onAnyImgAction), c.off(this._gallery, "click", this._onGalleryClick), c.off(
      this._rightArrow,
      "keydown",
      this._onRightArrowKeydownEvent
    ), c.off(
      this._fullscreenBtn,
      "keydown",
      this._onFullscreenBtnKeydownEvent
    );
  }
  _onMousedown(t) {
    const e = t.touches, i = e ? e[0].clientX : t.clientX, n = e ? e[0].clientY : t.clientY;
    this._originalPositionX = parseFloat(this.currentImg.style.left) || 0, this._originalPositionY = parseFloat(this.currentImg.style.top) || 0, this._positionX = this._originalPositionX, this._positionY = this._originalPositionY, this._mousedownPositionX = i * (1 / this._zoom) - this._positionX, this._mousedownPositionY = n * (1 / this._zoom) - this._positionY, this._mousedown = !0, t.type === "touchstart" && t.touches.length > 1 && (this._multitouch = !0, this._touchZoomPosition = t.touches);
  }
  _onMousemove(t) {
    if (!this._mousedown)
      return;
    const e = t.touches, i = e ? e[0].clientX : t.clientX, n = e ? e[0].clientY : t.clientY;
    if (e && this._resetToolsToggler(), !this._multitouch)
      if (this._zoom !== 1)
        this._positionX = i * (1 / this._zoom) - this._mousedownPositionX, this._positionY = n * (1 / this._zoom) - this._mousedownPositionY, h.style(this.currentImg, {
          left: `${this._positionX}px`,
          top: `${this._positionY}px`
        });
      else {
        if (this._images.length <= 1)
          return;
        this._positionX = i * (1 / this._zoom) - this._mousedownPositionX, h.style(this.currentImg, { left: `${this._positionX}px` });
      }
  }
  _onMouseup(t) {
    this._mousedown = !1, this._moveImg(t.target);
  }
  _onTouchend(t) {
    this._mousedown = !1, this._multitouch ? t.targetTouches.length === 0 && (this._multitouch = !1, this._touchZoomPosition = []) : this._multitouch || (this._checkDoubleTap(t), this._moveImg(t.target));
  }
  _calculateTouchZoom(t) {
    const e = Math.hypot(
      this._touchZoomPosition[1].pageX - this._touchZoomPosition[0].pageX,
      this._touchZoomPosition[1].pageY - this._touchZoomPosition[0].pageY
    ), i = Math.hypot(
      t.touches[1].pageX - t.touches[0].pageX,
      t.touches[1].pageY - t.touches[0].pageY
    ), n = Math.abs(e - i), o = t.view.screen.width;
    n > o * 0.03 && (e <= i ? this.zoomIn() : this.zoomOut(), this._touchZoomPosition = t.touches);
  }
  _onWindowTouchstart(t) {
    t.touches.length > 1 && (this._multitouch = !0, this._touchZoomPosition = t.touches);
  }
  _onWindowTouchmove(t) {
    t.preventDefault(), t.type === "touchmove" && t.targetTouches.length > 1 && this._calculateTouchZoom(t);
  }
  _onRightArrowKeydown(t) {
    switch (t.keyCode) {
      case 9:
        if (t.shiftKey)
          break;
        t.preventDefault(), this._focusFullscreenBtn();
        break;
    }
  }
  _onFullscreenBtnKeydown(t) {
    switch (t.keyCode) {
      case 9:
        if (!t.shiftKey)
          break;
        t.preventDefault(), this._focusRightArrow();
        break;
    }
  }
  _onKeyup(t) {
    switch (this._resetToolsToggler(), t.keyCode) {
      case 39:
        this.slide();
        break;
      case 37:
        this.slide("left");
        break;
      case 27:
        this.close();
        break;
      case 36:
        this.slide("first");
        break;
      case 35:
        this.slide("last");
        break;
      case 38:
        this.zoomIn();
        break;
      case 40:
        this.zoomOut();
        break;
    }
  }
  _focusFullscreenBtn() {
    setTimeout(() => {
      this._fullscreenBtn.focus();
    }, 100);
  }
  _focusRightArrow() {
    this._rightArrow.focus();
  }
  _moveImg(t) {
    if (this._multitouch || this._zoom !== 1 || t !== this.currentImg || this._images.length <= 1)
      return;
    const e = this._positionX - this._originalPositionX;
    e > 0 ? this.slide("left") : e < 0 && this.slide();
  }
  _checkDoubleTap(t) {
    clearTimeout(this._doubleTapTimer);
    const i = (/* @__PURE__ */ new Date()).getTime() - this._tapTime;
    this._tapCounter > 0 && i < 500 ? (this._onDoubleClick(t), this._doubleTapTimer = setTimeout(() => {
      this._tapTime = (/* @__PURE__ */ new Date()).getTime(), this._tapCounter = 0;
    }, 300)) : (this._tapCounter++, this._tapTime = (/* @__PURE__ */ new Date()).getTime());
  }
  _resetDoubleTap() {
    this._tapTime = 0, this._tapCounter = 0, clearTimeout(this._doubleTapTimer);
  }
  _onDoubleClick(t) {
    this._multitouch || (t.touches || this._setNewPositionOnZoomIn(t), this._zoom !== 1 ? this._restoreDefaultZoom() : this.zoomIn());
  }
  _onZoom(t) {
    if (t.deltaY > 0)
      this.zoomOut();
    else {
      if (this._zoom >= 3)
        return;
      this._setNewPositionOnZoomIn(t), this.zoomIn();
    }
  }
  _onBackdropClick(t) {
    this._resetToolsToggler(), t.target.tagName === "DIV" && this.close();
  }
  _setNewPositionOnZoomIn(t) {
    clearTimeout(this._zoomTimer), this._positionX = window.innerWidth / 2 - t.offsetX - 50, this._positionY = window.innerHeight / 2 - t.offsetY - 50, this.currentImg.style.transition = "all 0.5s ease-out", this.currentImg.style.left = `${this._positionX}px`, this.currentImg.style.top = `${this._positionY}px`, this._zoomTimer = setTimeout(() => {
      this.currentImg.style.transition = "none";
    }, 500);
  }
  _resetToolsToggler() {
    this._showTools(), clearTimeout(this._toolsToggleTimer), this._setToolsToggleTimout();
  }
  _setToolsToggleTimout() {
    this._toolsToggleTimer = setTimeout(() => {
      this._hideTools(), clearTimeout(this._toolsToggleTimer);
    }, 4e3);
  }
  _hideTools() {
    h.style(this._galleryToolbar, { opacity: 0 }), h.style(this._leftArrowWrapper, { opacity: 0 }), h.style(this._rightArrowWrapper, { opacity: 0 });
  }
  _showTools() {
    h.style(this._galleryToolbar, { opacity: 1 }), h.style(this._leftArrowWrapper, { opacity: 1 }), h.style(this._rightArrowWrapper, { opacity: 1 });
  }
  _disableScroll() {
    h.addClass(document.body, "overflow-y-hidden relative"), document.documentElement.scrollHeight > document.documentElement.clientHeight && h.addClass(document.body, "md:pr-[17px]");
  }
  _enableScroll() {
    setTimeout(() => {
      h.removeClass(document.body, "overflow-y-hidden relative"), h.removeClass(document.body, "md:pr-[17px]");
    }, 300);
  }
  _animationStart() {
    this._animating = !0, setTimeout(() => {
      this._animating = !1;
    }, 400);
  }
  _restoreDefaultZoom() {
    this._zoom !== 1 && (this._zoom = 1, h.style(this.currentImg.parentNode, {
      transform: `scale(${this._zoom})`
    }), this._updateZoomBtn(), this._updateImgPosition());
  }
  _restoreDefaultFullscreen() {
    this._fullscreen && this.toggleFullscreen();
  }
  _restoreDefaultPosition() {
    clearTimeout(this._zoomTimer);
    const t = this.currentImg;
    h.style(this.currentImg.parentNode, { left: 0, top: 0 }), h.style(this.currentImg, {
      transition: "all 0.5s ease-out",
      left: 0,
      top: 0
    }), this._calculateImgSize(t), setTimeout(() => {
      h.style(this.currentImg, { transition: "none" });
    }, 500);
  }
  async _triggerEvents(t, e) {
    c.trigger(this._element, `${t}.te.lightbox`), e && await setTimeout(() => {
      c.trigger(this._element, `${e}.te.lightbox`);
    }, 505);
  }
  static getInstance(t) {
    return A.getData(t, Oi);
  }
  static getOrCreateInstance(t, e = {}) {
    return this.getInstance(t) || new this(t, typeof e == "object" ? e : null);
  }
  static toggle() {
    return function(t) {
      const e = d.closest(
        t.target,
        `${Fh}`
      );
      (nn.getInstance(e) || new nn(e)).open(t);
    };
  }
  static jQueryInterface(t, e) {
    return this.each(function() {
      let i = A.getData(this, Oi);
      const n = typeof t == "object" && t;
      if (!(!i && /dispose/.test(t)) && (i || (i = new nn(this, n)), typeof t == "string")) {
        if (typeof i[t] > "u")
          throw new TypeError(`No method named "${t}"`);
        i[t](e);
      }
    });
  }
}
const i0 = {
  isRequired: "This is required",
  isEmail: "Please enter a valid email address",
  isLongerThan: "This field must be longer than {length} characters",
  isShorterThan: "This field must be shorter than {length} characters",
  isChecked: "This is required",
  isPhone: "Please enter a valid phone number",
  isNumber: "Expected value with type Number",
  isString: "Expected value with type String",
  isBoolean: "Expected value with type Boolean",
  isDate: "Please enter a valid date",
  is12hFormat: "Please enter a valid time in 12h format",
  is24hFormat: "Please enter a valid time in 24h format"
}, s0 = {
  isRequired: (s, t) => (s == null ? void 0 : s.trim()) ? !0 : t,
  isEmail: (s, t) => /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(s) ? !0 : t,
  isLongerThan: (s, t, e) => s.length > e ? !0 : t.replace("{length}", e),
  isShorterThan: (s, t, e) => s.length < e ? !0 : t.replace("{length}", e),
  isChecked: (s) => s ? !0 : "This is required",
  isPhone: (s, t) => s.length === 9 ? !0 : t,
  isNumber: (s, t) => s && !isNaN(Number(s)) ? !0 : t,
  isString: (s, t) => typeof s == "string" ? !0 : t,
  isBoolean: (s, t) => typeof s == "boolean" ? !0 : t,
  isDate: (s, t) => {
    const e = /^([0-9]{1,2})\/([0-9]{1,2})\/([0-9]{4})$/;
    return s.match(e) ? !0 : t;
  },
  is12hFormat: (s, t) => {
    const e = /^(0?[1-9]|1[0-2]):[0-5][0-9] [APap][mM]$/;
    return s.match(e) ? !0 : t;
  },
  is24hFormat: (s, t) => {
    const e = /^(?:[01]\d|2[0-3]):[0-5][0-9]$/;
    return s.match(e) ? !0 : t;
  }
}, Do = "validation", ir = "te.validation", yn = `.${ir}`, Yh = "data-te-validate", Ls = "data-te-validated", Ns = "data-te-validation-state", Ms = "data-te-validation-feedback", $o = "data-te-valid-feedback", Rs = "data-te-invalid-feedback", Xl = "data-te-validation-ruleset", n0 = "data-te-submit-btn-ref", o0 = `[${Yh}]`, r0 = "[data-te-input-notch-ref] div", a0 = `[${n0}]`, l0 = `validated${yn}`, c0 = `valid${yn}`, h0 = `invalid${yn}`, d0 = `changed${yn}`, u0 = {
  validFeedback: "string",
  invalidFeedback: "string",
  disableFeedback: "boolean",
  customRules: "object",
  customErrorMessages: "object",
  activeValidation: "boolean",
  submitCallback: "(function|null)"
}, Gl = {
  validFeedback: "Looks good!",
  invalidFeedback: "Something is wrong!",
  disableFeedback: !1,
  customRules: {},
  customErrorMessages: {},
  activeValidation: !1,
  submitCallback: null
}, p0 = {
  // default notch
  notchLeadingValid: "border-[#14a44d] dark:border-[#14a44d] group-data-[te-input-focused]:shadow-[-1px_0_0_#14a44d,_0_1px_0_0_#14a44d,_0_-1px_0_0_#14a44d] group-data-[te-input-focused]:border-[#14a44d]",
  notchMiddleValid: "border-[#14a44d] dark:border-[#14a44d] group-data-[te-input-focused]:shadow-[0_1px_0_0_#14a44d] group-data-[te-input-focused]:border-[#14a44d]",
  notchTrailingValid: "border-[#14a44d] dark:border-[#14a44d] group-data-[te-input-focused]:shadow-[1px_0_0_#14a44d,_0_-1px_0_0_#14a44d,_0_1px_0_0_#14a44d] group-data-[te-input-focused]:border-[#14a44d]",
  notchLeadingInvalid: "border-[#dc4c64] dark:border-[#dc4c64] group-data-[te-input-focused]:shadow-[-1px_0_0_#dc4c64,_0_1px_0_0_#dc4c64,_0_-1px_0_0_#dc4c64] group-data-[te-input-focused]:border-[#dc4c64]",
  notchMiddleInvalid: "border-[#dc4c64] dark:border-[#dc4c64] group-data-[te-input-focused]:shadow-[0_1px_0_0_#dc4c64] group-data-[te-input-focused]:border-[#dc4c64]",
  notchTrailingInvalid: "border-[#dc4c64] dark:border-[#dc4c64] group-data-[te-input-focused]:shadow-[1px_0_0_#dc4c64,_0_-1px_0_0_#dc4c64,_0_1px_0_0_#dc4c64] group-data-[te-input-focused]:border-[#dc4c64]",
  // basic inputs
  basicInputValid: "!border-[#14a44d] focus:!border-[#14a44d] focus:!shadow-[inset_0_0_0_1px_#14a44d]",
  basicInputInvalid: "!border-[#dc4c64] focus:!border-[#dc4c64] focus:!shadow-[inset_0_0_0_1px_#dc4c64]",
  // checkbox
  checkboxValid: "checked:!border-[#14a44d] checked:!bg-[#14a44d] checked:after:!bg-[#14a44d]",
  checkboxInvalid: "checked:!border-[#dc4c64] checked:!bg-[#dc4c64] checked:after:!bg-[#dc4c64]",
  radioValid: "checked:!border-[#14a44d] checked:after:!bg-[#14a44d]",
  radioInvalid: "checked:!border-[#dc4c64] checked:after:!bg-[#dc4c64]",
  // labels
  labelValid: "!text-[#14a44d]",
  labelInvalid: "!text-[#dc4c64]",
  // feedback
  validFeedback: "absolute top-full left-0 m-1 w-auto text-sm text-[#14a44d] animate-[fade-in_0.3s_both]",
  invalidFeedback: "absolute top-full left-0 m-1 w-auto text-sm text-[#dc4c64] animate-[fade-in_0.3s_both]",
  // element validated
  elementValidated: "mb-8"
}, _0 = {
  notchLeadingValid: "string",
  notchMiddleValid: "string",
  notchTrailingValid: "string",
  notchLeadingInvalid: "string",
  notchMiddleInvalid: "string",
  notchTrailingInvalid: "string",
  basicInputValid: "string",
  basicInputInvalid: "string",
  checkboxValid: "string",
  checkboxInvalid: "string",
  radioValid: "string",
  radioInvalid: "string",
  labelValid: "string",
  labelInvalid: "string",
  validFeedback: "string",
  invalidFeedback: "string",
  elementValidated: "string"
};
class jh extends ft {
  constructor(t, e, i) {
    super(t), this._element = t, this._element && A.setData(t, ir, this), this._config = this._getConfig(e), this._classes = this._getClasses(i), this._isValid = !0, this._shouldApplyInputEvents = !0, this._submitCallback = null, this._errorMessages = {
      ...i0,
      ...this._config.customErrorMessages
    }, this._validationElements = this._getValidationElements(), this._validationElements.forEach(({ element: n, input: o }) => {
      this._createFeedbackWrapper(n, o);
    }), this._validationObserver = this._watchForValidationChanges(), this._validationObserver.observe(this._element, { attributes: !0 }), this._submitButton = null, this._handleSubmitButton(), this._validationResult = [];
  }
  // Getters
  static get DefaultType() {
    return u0;
  }
  static get Default() {
    return Gl;
  }
  static get NAME() {
    return Do;
  }
  // Public
  dispose() {
    var t;
    (t = this._validationObserver) == null || t.disconnect(), this._validationObserver = null, this._submitCallback = null, this._element.removeAttribute(Ls), this._removeInputEvents(), this._removeValidationTraces(), this._validationResult = [], this._submitButton && c.off(this._submitButton, "click"), this._config.activeValidation && (this._validationElements.forEach((e) => {
      const { input: i } = e;
      c.off(i, "input");
    }), this._shouldApplyInputEvents = !0);
  }
  // Private
  _removeValidationTraces() {
    this._removeFeedbackWrapper(), this._validationElements.forEach(({ element: t, classes: e, initialHTML: i }) => {
      t.className = e, t.innerHTML = i, t.removeAttribute(Ns), t.removeAttribute(Rs), t.removeAttribute($o);
    }), this._validationElements = [];
  }
  _getValidationElements() {
    return d.find(
      o0,
      this._element
    ).map((e) => {
      const i = d.findOne("input", e) || d.findOne("textarea", e), n = d.findOne("select", e);
      return {
        id: i.name || i.id || (n == null ? void 0 : n.name) || et("validation-"),
        element: e,
        type: e.getAttribute(Yh),
        input: i,
        validFeedback: e.getAttribute($o),
        invalidFeedback: e.getAttribute(Rs),
        classes: e.className,
        initialHTML: e.innerHTML,
        ruleset: e.getAttribute(Xl)
      };
    });
  }
  _createFeedbackWrapper(t, e) {
    if (t.querySelectorAll(`[${Ms}]`).length > 0)
      return;
    const i = document.createElement("span");
    i.setAttribute(Ms, ""), e.parentNode.appendChild(i);
  }
  _removeFeedbackWrapper() {
    d.find(
      `[${Ms}]`,
      this._element
    ).forEach((e) => {
      e.remove();
    });
  }
  _watchForValidationChanges() {
    return new MutationObserver((e) => {
      e.forEach((i) => {
        const { attributeName: n } = i;
        n === Ls && (this._handleValidation(), this._config.activeValidation && this._shouldApplyInputEvents && this._applyInputEvents());
      });
    });
  }
  _handleValidation() {
    this._element.getAttribute(Ls) && (this._validationResult = [], this._isValid = !0, this._validationElements.forEach(
      (t) => this._validateSingleElement(t)
    ), this._emitEvents(this._isValid), this._submitCallback && this._submitCallback(this._isValid));
  }
  _validateSingleElement(t) {
    var p;
    const { element: e, type: i, input: n, ruleset: o, id: r } = t;
    o && this._validateByRuleset(t);
    const a = e.getAttribute(Ns);
    if (a !== "valid" && a !== "invalid")
      return;
    const l = a.replace(
      a.charAt(0),
      a.charAt(0).toUpperCase()
    );
    i === "input" && this._restyleNotches(e, l), i === "basic" && this._restyleBasicInputs(n, l), (i === "checkbox" || i === "radio") && this._restyleCheckboxes(n, l, i), this._restyleLabels(e, l), a === "invalid" && (this._isValid = !1), this._config.disableFeedback || this._applyFeedback(e, a), c.trigger(this._element, d0, {
      value: {
        name: r,
        result: a,
        validation: (p = this._validationResult[r]) == null ? void 0 : p.validation
      }
    });
  }
  _validateByRuleset({ element: t, type: e, invalidFeedback: i, input: n, id: o }) {
    const r = this._getRuleset(t);
    if (!r.length)
      return;
    const a = e === "checkbox" || e === "radio" ? n.checked : n.value;
    let l = "", p = [];
    for (const u of r) {
      const _ = u.callback(
        a,
        this._errorMessages[u.name] || this._config.invalidFeedback,
        u.parameter
      );
      p.push({
        result: _ === !0,
        name: u.name,
        fullName: u.fullName
      }), typeof _ == "string" && !l && (l = _);
    }
    if (this._validationResult[o] = { element: t, validation: p }, !l) {
      t.setAttribute(Ns, "valid");
      return;
    }
    t.setAttribute(Ns, "invalid"), i || t.setAttribute(Rs, l);
  }
  _handleInputChange(t) {
    this._validateSingleElement(t);
  }
  _getRuleset(t) {
    const i = t.getAttribute(Xl).split("|");
    let n = [];
    const o = {
      ...s0,
      ...this._config.customRules
    };
    return i.forEach((r) => {
      const a = this._getRuleData(r, o);
      a.callback ? n.push(a) : console.warn(`Rule ${r} does not exist`);
    }), n;
  }
  _getRuleData(t, e) {
    const i = t.split("(");
    return {
      callback: e[i[0]],
      parameter: i[1] ? i[1].split(")")[0] : null,
      name: i[0],
      fullName: t
    };
  }
  _applyFeedback(t, e) {
    const i = d.findOne(
      `[${Ms}]`,
      t
    ), n = t.getAttribute($o) || this._config.validFeedback, o = t.getAttribute(Rs) || this._config.invalidFeedback;
    h.addClass(t, this._classes.elementValidated), i.textContent = e === "valid" ? n : o, i.className = this._classes[e === "valid" ? "validFeedback" : "invalidFeedback"];
  }
  _restyleCheckboxes(t, e, i) {
    h.removeClass(t, this._classes.checkboxValid), h.removeClass(t, this._classes.checkboxInvalid), h.addClass(t, this._classes[`${i}${e}`]);
  }
  _restyleBasicInputs(t, e) {
    h.removeClass(t, this._classes.basicInputValid), h.removeClass(t, this._classes.basicInputInvalid), h.addClass(t, this._classes[`basicInput${e}`]);
  }
  _restyleNotches(t, e) {
    d.find(r0, t).forEach((n, o) => {
      let r = o === 0 ? "notchLeading" : o === 1 ? "notchMiddle" : "notchTrailing";
      n.className = "", h.addClass(n, ph[r]), r += e, h.addClass(n, this._classes[r]);
    });
  }
  _restyleLabels(t, e) {
    const i = d.find("label", t);
    i.length && i.forEach((n) => {
      h.removeClass(n, this._classes.labelValid), h.removeClass(n, this._classes.labelInvalid), h.addClass(n, this._classes[`label${e}`]);
    });
  }
  _emitEvents(t) {
    if (c.trigger(this._element, l0), t) {
      c.trigger(this._element, c0, {
        value: this._validationResult
      });
      return;
    }
    c.trigger(this._element, h0, {
      value: this._validationResult
    });
  }
  _applyInputEvents() {
    this._validationElements.forEach((t) => {
      const { input: e, element: i } = t;
      c.on(
        e,
        "input",
        () => this._handleInputChange(t)
      ), c.on(
        i,
        "valueChange.te.select",
        () => this._delayedInputChange(t)
      ), c.on(
        i,
        "itemSelect.te.autocomplete",
        () => this._delayedInputChange(t)
      );
    }), this._shouldApplyInputEvents = !1;
  }
  _removeInputEvents() {
    this._validationElements.forEach((t) => {
      const { input: e, element: i } = t;
      c.off(
        e,
        "input",
        () => this._handleInputChange(t)
      ), c.off(
        i,
        "valueChange.te.select",
        () => this._delayedInputChange(t)
      ), c.off(
        i,
        "itemSelect.te.autocomplete",
        () => this._delayedInputChange(t)
      );
    });
  }
  _delayedInputChange(t) {
    setTimeout(() => {
      this._handleInputChange(t);
    }, 10);
  }
  _handleSubmitButton() {
    this._submitButton = d.findOne(
      a0,
      this._element
    ), this._submitButton && c.on(
      this._submitButton,
      "click",
      (t) => this._handleSubmitButtonClick(t)
    );
  }
  _handleSubmitButtonClick(t) {
    if (this._element.setAttribute(Ls, !0), this._config.submitCallback) {
      this._submitCallback = (e) => this._config.submitCallback(t, e);
      return;
    }
  }
  _getConfig(t) {
    return t = {
      ...Gl,
      ...h.getDataAttributes(this._element),
      ...typeof t == "object" && t ? t : {}
    }, I(Do, t, this.constructor.DefaultType), t;
  }
  _getClasses(t) {
    const e = h.getDataClassAttributes(this._element);
    return t = {
      ...p0,
      ...e,
      ...t
    }, I(Do, t, _0), t;
  }
  // Static
  static getInstance(t) {
    return A.getData(t, ir);
  }
  static getOrCreateInstance(t, e = {}) {
    return this.getInstance(t) || new this(t, typeof e == "object" ? e : null);
  }
  static jQueryInterface(t) {
    return this.each(function() {
      const e = jh.getOrCreateInstance(this);
      if (typeof t == "string") {
        if (e[t] === void 0 || t.startsWith("_") || t === "constructor")
          throw new TypeError(`No method named "${t}"`);
        e[t](this);
      }
    });
  }
}
class Qi {
  _getCoordinates(t) {
    const [e] = t.touches;
    return {
      x: e.clientX,
      y: e.clientY
    };
  }
  _getDirection({ x: t, y: e }) {
    return {
      x: {
        direction: t < 0 ? "left" : "right",
        value: Math.abs(t)
      },
      y: {
        direction: e < 0 ? "up" : "down",
        value: Math.abs(e)
      }
    };
  }
  _getOrigin({ x: t, y: e }, { x: i, y: n }) {
    return {
      x: t - i,
      y: e - n
    };
  }
  _getDistanceBetweenTwoPoints(t, e, i, n) {
    return Math.hypot(e - t, n - i);
  }
  _getMidPoint({ x1: t, x2: e, y1: i, y2: n }) {
    return {
      x: (t + e) / 2,
      y: (i + n) / 2
    };
  }
  _getVectorLength({ x1: t, x2: e, y1: i, y2: n }) {
    return Math.sqrt((e - t) ** 2 + (n - i) ** 2);
  }
  _getRightMostTouch(t) {
    let e = null;
    const i = Number.MIN_VALUE;
    return t.forEach((n) => {
      n.clientX > i && (e = n);
    }), e;
  }
  _getAngle(t, e, i, n) {
    return Math.atan2(n - e, i - t);
  }
  _getAngularDistance(t, e) {
    return e - t;
  }
  _getCenterXY({ x1: t, x2: e, y1: i, y2: n }) {
    return {
      x: t + (e - t) / 2,
      y: i + (n - i) / 2
    };
  }
  _getPinchTouchOrigin(t) {
    const [e, i] = t, n = {
      x1: e.clientX,
      x2: i.clientX,
      y1: e.clientY,
      y2: i.clientY
    };
    return [this._getVectorLength(n), this._getCenterXY(n)];
  }
  _getPosition({ x1: t, x2: e, y1: i, y2: n }) {
    return { x1: t, x2: e, y1: i, y2: n };
  }
}
const Lo = "press", f0 = "pressup", m0 = {
  time: "number",
  pointers: "number"
}, g0 = {
  time: 250,
  pointers: 1
};
class b0 extends Qi {
  constructor(t, e = {}) {
    super(), this._element = t, this._options = this._getConfig(e), this._timer = null;
  }
  // Getters
  static get NAME() {
    return Lo;
  }
  handleTouchStart(t) {
    const { time: e, pointers: i } = this._options;
    t.touches.length === i && (this._timer = setTimeout(() => {
      c.trigger(this._element, Lo, { touch: t, time: e }), c.trigger(this._element, f0, { touch: t });
    }, e));
  }
  handleTouchEnd() {
    clearTimeout(this._timer);
  }
  _getConfig(t) {
    const e = {
      ...g0,
      ...h.getDataAttributes(this._element),
      ...t
    };
    return I(Lo, e, m0), e;
  }
}
const v0 = "swipe", T0 = {
  threshold: "number",
  direction: "string"
}, E0 = {
  threshold: 10,
  direction: "all"
};
class C0 {
  constructor(t, e) {
    this._element = t, this._startPosition = null, this._options = this._getConfig(e);
  }
  handleTouchStart(t) {
    this._startPosition = this._getCoordinates(t);
  }
  handleTouchMove(t) {
    if (!this._startPosition)
      return;
    const e = this._getCoordinates(t), i = {
      x: e.x - this._startPosition.x,
      y: e.y - this._startPosition.y
    }, n = this._getDirection(i);
    if (this._options.direction === "all") {
      if (n.y.value < this._options.threshold && n.x.value < this._options.threshold)
        return;
      const r = n.y.value > n.x.value ? n.y.direction : n.x.direction;
      c.trigger(this._element, `swipe${r}`, { touch: t }), c.trigger(this._element, "swipe", { touch: t, direction: r }), this._startPosition = null;
      return;
    }
    const o = this._options.direction === "left" || this._options === "right" ? "x" : "y";
    n[o].direction === this._options.direction && n[o].value > this._options.threshold && (c.trigger(this._element, `swipe${n[o].direction}`, {
      touch: t
    }), this._startPosition = null);
  }
  handleTouchEnd() {
    this._startPosition = null;
  }
  _getCoordinates(t) {
    const [e] = t.touches;
    return {
      x: e.clientX,
      y: e.clientY
    };
  }
  _getDirection(t) {
    return {
      x: {
        direction: t.x < 0 ? "left" : "right",
        value: Math.abs(t.x)
      },
      y: {
        direction: t.y < 0 ? "up" : "down",
        value: Math.abs(t.y)
      }
    };
  }
  _getConfig(t) {
    const e = {
      ...E0,
      ...h.getDataAttributes(this._element),
      ...t
    };
    return I(v0, e, T0), e;
  }
}
const Zt = "pan", A0 = `${Zt}start`, y0 = `${Zt}end`, w0 = `${Zt}move`, k0 = "left", x0 = "right", O0 = {
  threshold: "number",
  direction: "string",
  pointers: "number"
}, S0 = {
  threshold: 20,
  direction: "all",
  pointers: 1
};
class I0 extends Qi {
  constructor(t, e = {}) {
    super(), this._element = t, this._options = this._getConfig(e), this._startTouch = null;
  }
  // Getters
  static get NAME() {
    return Zt;
  }
  handleTouchStart(t) {
    this._startTouch = this._getCoordinates(t), this._movedTouch = t, c.trigger(this._element, A0, { touch: t });
  }
  handleTouchMove(t) {
    t.type === "touchmove" && t.preventDefault();
    const { threshold: e, direction: i } = this._options, n = this._getCoordinates(t), o = this._getCoordinates(this._movedTouch), r = this._getOrigin(n, this._startTouch), a = this._getOrigin(n, o), l = this._getDirection(r), p = this._getDirection(a), { x: u, y: _ } = l;
    if (i === "all" && (_.value > e || u.value > e)) {
      const g = _.value > u.value ? _.direction : u.direction;
      c.trigger(this._element, `${Zt}${g}`, { touch: t }), c.trigger(this._element, Zt, {
        ...a,
        touch: t
      });
    }
    const f = i === k0 || i === x0 ? "x" : "y";
    p[f].direction === i && l[f].value > e && c.trigger(this._element, `${Zt}${i}`, {
      touch: t,
      [f]: n[f] - o[f]
    }), this._movedTouch = t, c.trigger(this._element, w0, { touch: t });
  }
  handleTouchEnd(t) {
    t.type === "touchend" && t.preventDefault(), this._movedTouch = null, this._startTouch = null, c.trigger(this._element, y0, { touch: t });
  }
  _getConfig(t) {
    const e = {
      ...S0,
      ...h.getDataAttributes(this._element),
      ...t
    };
    return I(Zt, e, O0), e;
  }
}
const Ue = "pinch", D0 = `${Ue}end`, $0 = `${Ue}start`, L0 = `${Ue}move`, N0 = {
  threshold: "number",
  pointers: "number"
}, M0 = {
  threshold: 10,
  pointers: 2
};
class R0 extends Qi {
  constructor(t, e = {}) {
    super(), this._element = t, this._options = this._getConfig(e), this._startTouch = null, this._origin = null, this._touch = null, this._math = null, this._ratio = null;
  }
  // Getters
  static get NAME() {
    return Ue;
  }
  get isNumber() {
    return typeof this._startTouch == "number" && typeof this._touch == "number" && // eslint-disable-next-line no-restricted-globals
    !isNaN(this._startTouch) && // eslint-disable-next-line no-restricted-globals
    !isNaN(this._touch);
  }
  handleTouchStart(t) {
    if (t.touches.length !== this._options.pointers)
      return;
    t.type === "touchstart" && t.preventDefault();
    const [e, i] = this._getPinchTouchOrigin(t.touches);
    this._touch = e, this._origin = i, this._startTouch = this._touch, c.trigger(this._element, $0, {
      touch: t,
      ratio: this._ratio,
      origin: this._origin
    });
  }
  handleTouchMove(t) {
    const { threshold: e, pointers: i } = this._options;
    t.touches.length === i && (t.type === "touchmove" && t.preventDefault(), this._touch = this._getPinchTouchOrigin(t.touches)[0], this._ratio = this._touch / this._startTouch, this.isNumber && (this._origin.x > e || this._origin.y > e) && (this._startTouch = this._touch, c.trigger(this._element, Ue, {
      touch: t,
      ratio: this._ratio,
      origin: this._origin
    }), c.trigger(this._element, L0, {
      touch: t,
      ratio: this._ratio,
      origin: this._origin
    })));
  }
  handleTouchEnd(t) {
    this.isNumber && (this._startTouch = null, c.trigger(this._element, D0, {
      touch: t,
      ratio: this._ratio,
      origin: this._origin
    }));
  }
  _getConfig(t) {
    const e = {
      ...M0,
      ...h.getDataAttributes(this._element),
      ...t
    };
    return I(Ue, e, N0), e;
  }
}
const No = "tap", P0 = {
  interval: "number",
  time: "number",
  taps: "number",
  pointers: "number"
}, B0 = {
  interval: 500,
  time: 250,
  taps: 1,
  pointers: 1
};
class H0 extends Qi {
  constructor(t, e) {
    super(), this._element = t, this._options = this._getConfig(e), this._timer = null, this._tapCount = 0;
  }
  // Getters
  static get NAME() {
    return No;
  }
  handleTouchStart(t) {
    const { x: e, y: i } = this._getCoordinates(t), { interval: n, taps: o, pointers: r } = this._options;
    return t.touches.length === r && (this._tapCount += 1, this._tapCount === 1 && (this._timer = setTimeout(() => {
      this._tapCount = 0;
    }, n)), this._tapCount === o && (clearTimeout(this._timer), this._tapCount = 0, c.trigger(this._element, No, {
      touch: t,
      origin: {
        x: e,
        y: i
      }
    }))), t;
  }
  handleTouchEnd() {
  }
  handleTouchMove() {
  }
  _getConfig(t) {
    const e = {
      ...B0,
      ...h.getDataAttributes(this._element),
      ...t
    };
    return I(No, e, P0), e;
  }
}
const Wi = "rotate", V0 = `${Wi}end`, W0 = `${Wi}start`, F0 = {
  angle: "number",
  pointers: "number"
}, Y0 = {
  angle: 0,
  pointers: 2
};
class j0 extends Qi {
  constructor(t, e) {
    super(), this._element = t, this._options = this._getConfig(e), this._origin = {};
  }
  // Getters
  static get NAME() {
    return Wi;
  }
  handleTouchStart(t) {
    t.type === "touchstart" && t.preventDefault(), !(t.touches.length < 2) && (this._startTouch = t, this._origin = {}, c.trigger(this._element, W0, { touch: t }));
  }
  handleTouchMove(t) {
    t.type === "touchmove" && t.preventDefault();
    let e, i;
    const n = t.touches;
    if (n.length === 1 && this._options.pointers === 1) {
      const { left: o, top: r, width: a, height: l } = this._element.getBoundingClientRect();
      e = {
        x: o + a / 2,
        y: r + l / 2
      }, i = n[0];
    } else if (t.touches.length === 2 && this._options.pointers === 2) {
      const [o, r] = t.touches, a = {
        x1: r.clientX,
        x2: o.clientX,
        y1: r.clientY,
        y2: o.clientY
      };
      e = this._getMidPoint(a), i = this._getRightMostTouch(t.touches);
    } else
      return;
    this.currentAngle = this._getAngle(
      e.x,
      e.y,
      i.clientX,
      i.clientY
    ), this._origin.initialAngle ? (this._origin.change = this._getAngularDistance(
      this._origin.previousAngle,
      this.currentAngle
    ), this._origin.distance += this._origin.change) : (this._origin.initialAngle = this._origin.previousAngle = this.currentAngle, this._origin.distance = this._origin.change = 0), this._origin.previousAngle = this.currentAngle, this.rotate = {
      currentAngle: this.currentAngle,
      distance: this._origin.distance,
      change: this._origin.change
    }, c.trigger(this._element, Wi, { ...this.rotate, touch: t });
  }
  handleTouchEnd(t) {
    t.type === "touchend" && t.preventDefault(), this._origin = {}, c.trigger(this._element, V0, { touch: t });
  }
  _getConfig(t) {
    const e = {
      ...Y0,
      ...h.getDataAttributes(this._element),
      ...t
    };
    return I(Wi, e, F0), e;
  }
}
const sr = "touch", Mo = `te.${sr}`, K0 = {
  event: "string"
}, z0 = {
  event: "swipe"
};
class Kh {
  constructor(t, e = {}) {
    this._element = t, this._options = this._getConfig(e), this._event = this._options.event, this.swipe = this._event === "swipe" ? new C0(t, e) : null, this.press = this._event === "press" ? new b0(t, e) : null, this.pan = this._event === "pan" ? new I0(t, e) : null, this.pinch = this._event === "pinch" ? new R0(t, e) : null, this.tap = this._event === "tap" ? new H0(t, e) : null, this.rotate = this._event === "rotate" ? new j0(t, e) : null, this._touchStartHandler = (i) => this._handleTouchStart(i), this._touchMoveHandler = (i) => this._handleTouchMove(i), this._touchEndHandler = (i) => this._handleTouchEnd(i), c.on(this._element, "touchstart", this._touchStartHandler), c.on(this._element, "touchmove", this._touchMoveHandler), c.on(this._element, "touchend", this._touchEndHandler), this._element && A.setData(t, Mo, this);
  }
  // Getters
  static get NAME() {
    return sr;
  }
  dispose() {
    c.off(this._element, "touchstart", this._touchStartHandler), c.off(this._element, "touchmove", this._touchMoveHandler), c.off(this._element, "touchend", this._touchEndHandler), this.swipe = null, this.press = null, this.pan = null, this.pinch = null, this.tap = null, this.rotate = null;
  }
  _getConfig(t) {
    const e = {
      ...z0,
      ...h.getDataAttributes(this._element),
      ...t
    };
    return I(sr, e, K0), e;
  }
  _handleTouchStart(t) {
    this[this._event].handleTouchStart(t);
  }
  _handleTouchMove(t) {
    this[this._event].handleTouchMove && this[this._event].handleTouchMove(t);
  }
  _handleTouchEnd(t) {
    this[this._event].handleTouchEnd(t);
  }
  static jQueryInterface(t) {
    return this.each(function() {
      let e = A.getData(this, Mo);
      const i = typeof t == "object" && t;
      if (!(!e && /dispose/.test(t)) && (e || (e = new Kh(this, i)), typeof t == "string")) {
        if (typeof e[t] > "u")
          throw new TypeError(`No method named "${t}"`);
        return e[t];
      }
    });
  }
  static getInstance(t) {
    return A.getData(t, Mo);
  }
  static getOrCreateInstance(t, e = {}) {
    return this.getInstance(t) || new this(t, typeof e == "object" ? e : null);
  }
}
const nr = "smoothScroll", Si = `te.${nr}`, Or = `.${Si}`, U0 = {
  container: "string",
  offset: "number",
  easing: "string",
  duration: "number"
}, X0 = {
  container: "body",
  offset: 0,
  easing: "linear",
  duration: 500
}, G0 = `scrollStart${Or}`, q0 = `scrollEnd${Or}`, Z0 = `scrollCancel${Or}`;
class zh {
  constructor(t, e = {}) {
    this._element = t, this._options = this._getConfig(e), this._href = this._element.getAttribute("href"), this.isCancel = !1, this._element && (A.setData(t, Si, this), this._setup());
  }
  // getters
  static get NAME() {
    return nr;
  }
  get isWindow() {
    return this._options.container === "body";
  }
  get containerToScroll() {
    return this.isWindow ? document.documentElement : d.findOne(
      this._options.container,
      document.documentElement
    );
  }
  get elFromHrefExist() {
    return !!d.findOne(this._href, this.containerToScroll);
  }
  get offsetFromEl() {
    const t = this.containerToScroll.scrollTop, e = d.findOne(this._href, this.containerToScroll);
    if (this.isWindow)
      return h.offset(e).top - this._options.offset + t;
    const i = e.getBoundingClientRect().y, n = this.containerToScroll.getBoundingClientRect().y;
    return i - n - this._options.offset + t;
  }
  get easingFunction() {
    const t = this._options.easing, e = `_motion${t[0].toUpperCase()}${t.slice(1)}`;
    return this[e] ? this[e] : this._motionLinear;
  }
  // public
  dispose() {
    c.off(this._element, "click", this._handleClick), A.removeData(this._element, Si), this._element = null;
  }
  cancelScroll() {
    this.isCancel = !0;
  }
  // private
  _getConfig(t) {
    const e = {
      ...X0,
      ...h.getDataAttributes(this._element),
      ...t
    };
    return I(nr, e, U0), e;
  }
  _inViewport() {
    if (this.isWindow)
      return !0;
    const t = this.containerToScroll.getBoundingClientRect();
    return t.top >= 0 && t.bottom <= (window.innerHeight || document.documentElement.clientHeight);
  }
  _setup() {
    const t = typeof this._href < "u", e = this._href.includes("#");
    t && e && this.elFromHrefExist && (this._scrollOnClickEvent(), this._preventNativeScroll());
  }
  _scrollOnClickEvent() {
    c.on(this._element, "click", (t) => {
      this._handleClick(t);
    });
  }
  _handleClick(t) {
    t.preventDefault(), this.isCancel = !1, c.trigger(this._element, G0);
    const e = this.containerToScroll, i = this.containerToScroll.scrollTop, n = this.offsetFromEl, o = 0, r = 1 / this._options.duration, a = 4.25, l = this.easingFunction;
    this._inViewport() ? this._scrollOnNextTick(
      e,
      i,
      n,
      o,
      r,
      a,
      l
    ) : (this._scrollOnNextTick(
      document.documentElement,
      document.documentElement.scrollTop,
      this.containerToScroll.offsetTop,
      o,
      r,
      a,
      l
    ), setTimeout(() => {
      this._scrollOnNextTick(
        e,
        i,
        n,
        o,
        r,
        a,
        l
      ), this.isCancel = !1;
    }, this._options.duration));
  }
  _scrollOnNextTick(t, e, i, n, o, r, a) {
    const l = n < 0, p = n > 1, u = o <= 0;
    if (l || p || u || this.isCancel) {
      if (this.isCancel) {
        this.isInViewport && (this.isCancel = !1), c.trigger(this._element, Z0);
        return;
      }
      c.trigger(this._element, q0), t.scrollTop = i;
      return;
    }
    t.scrollTo({
      top: e - (e - i) * a(n)
    }), n += o * r, setTimeout(() => {
      this._scrollOnNextTick(
        t,
        e,
        i,
        n,
        o,
        r,
        a
      );
    });
  }
  _preventDefault(t) {
    t.preventDefault();
  }
  _preventNativeScroll() {
    let t = !1;
    try {
      window.addEventListener(
        "test",
        null,
        Object.defineProperty({}, "passive", {
          get: () => t = !0
        })
      );
    } catch (n) {
      this._scrollError = n;
    }
    const e = t ? { passive: !1 } : !1, i = "onwheel" in $("div") ? "wheel" : "mousewheel";
    this.isWindow && (this._deleteScrollOnStart(e, i), this._addScrollOnEnd(e, i), this._addScrollOnCancel(e, i));
  }
  _deleteScrollOnStart(t, e) {
    c.on(this._element, "scrollStart.te.smoothScroll", () => {
      window.addEventListener(e, this._preventDefault, t), window.addEventListener("touchmove", this._preventDefault, t);
    });
  }
  _addScrollOnEnd(t, e) {
    c.on(this._element, "scrollEnd.te.smoothScroll", () => {
      window.removeEventListener(e, this._preventDefault, t), window.removeEventListener("touchmove", this._preventDefault, t);
    });
  }
  _addScrollOnCancel(t, e) {
    c.on(this._element, "scrollCancel.te.smoothScroll", () => {
      window.removeEventListener(e, this._preventDefault, t), window.removeEventListener("touchmove", this._preventDefault, t);
    });
  }
  // Motions
  // Linear
  _motionLinear(t) {
    return t;
  }
  // Ease-In
  _motionEaseInQuad(t) {
    return t * t;
  }
  _motionEaseInCubic(t) {
    return t * t * t;
  }
  _motionEaseInQuart(t) {
    return t * t * t * t;
  }
  _motionEaseInQuint(t) {
    return t * t * t * t * t;
  }
  // Ease-In-Out
  _motionEaseInOutQuad(t) {
    return t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t;
  }
  _motionEaseInOutCubic(t) {
    return t /= 0.5, t < 1 ? t * t * t / 2 : (t -= 2, (t * t * t + 2) / 2);
  }
  _motionEaseInOutQuart(t) {
    return t /= 0.5, t < 1 ? 0.5 * t * t * t * t : (t -= 2, -(t * t * t * t - 2) / 2);
  }
  _motionEaseInOutQuint(t) {
    return t /= 0.5, t < 1 ? t * t * t * t * t / 2 : (t -= 2, (t * t * t * t * t + 2) / 2);
  }
  // Ease-Out
  _motionEaseOutQuad(t) {
    return -t * (t - 2);
  }
  _motionEaseOutCubic(t) {
    return t--, t * t * t + 1;
  }
  _motionEaseOutQuart(t) {
    return t--, -(t * t * t * t - 1);
  }
  _motionEaseOutQuint(t) {
    return t--, t * t * t * t * t + 1;
  }
  // static
  static getInstance(t) {
    return A.getData(t, Si);
  }
  static getOrCreateInstance(t, e = {}) {
    return this.getInstance(t) || new this(t, typeof e == "object" ? e : null);
  }
  static jQueryInterface(t) {
    return this.each(function() {
      let e = A.getData(this, Si);
      const i = typeof t == "object" && t;
      if (e || (e = new zh(this, i)), typeof t == "string") {
        if (typeof e[t] > "u")
          throw new TypeError(`No method named "${t}"`);
        e[t](this);
      }
    });
  }
}
const ql = "lazyLoad", Ps = "te.lazyLoad", Q0 = "[data-te-lazy-load-init]", Zl = "data-te-lazy-load", J0 = "onLoad.te.lazy", tC = "onError.te.lazy", Ql = ["img", "video"], eC = {
  lazySrc: "(string|null)",
  lazyDelay: "number",
  lazyAnimation: "string",
  lazyOffset: "number",
  lazyPlaceholder: "(string|undefined)",
  lazyError: "(string|undefined)"
}, iC = {
  lazySrc: null,
  lazyDelay: 500,
  lazyAnimation: "[fade-in_1s_ease-in-out]",
  lazyOffset: 0
};
class or {
  constructor(t, e) {
    this._element = t, this._element && A.setData(t, Ps, this), this._options = this._getConfig(e), this.scrollHandler = this._scrollHandler.bind(this), this.errorHandler = this._setElementError.bind(this), this._childrenInstances = null, this._init();
  }
  // Getters
  static get NAME() {
    return ql;
  }
  get offsetValues() {
    return this._element.getBoundingClientRect();
  }
  get inViewport() {
    if (this.parent) {
      const t = this.parent.getBoundingClientRect();
      return t.y > 0 && t.y < window.innerHeight && this.offsetValues.y >= t.y && this.offsetValues.y <= t.y + t.height && this.offsetValues.y <= window.innerHeight;
    }
    return this.offsetValues.top + this._options.lazyOffset <= window.innerHeight && this.offsetValues.bottom >= 0;
  }
  get parent() {
    const [t] = d.parents(
      this._element,
      Q0
    );
    return t;
  }
  get node() {
    return this._element.nodeName;
  }
  get isContainer() {
    return !d.matches(this._element, Ql);
  }
  // Public
  dispose() {
    A.removeData(this._element, Ps), this._animation && (this._animation.dispose(), this._animation = null), this._element = null, this._childrenInstances && this._childrenInstances.forEach((t) => t.dispose());
  }
  // Private
  _init() {
    if (this._element.setAttribute(Zl, ""), this.isContainer) {
      this._setupContainer();
      return;
    }
    this._setupElement();
  }
  _setupElement() {
    c.one(this._element, "error", this.errorHandler), this._options.lazyPlaceholder && this._setPlaceholder(), this._animation = new wr(this._element, {
      animation: `${this._options.lazyAnimation}`,
      animationStart: "onLoad"
    }), c.one(this._element, "load", () => this._scrollHandler()), this.parent && c.on(this.parent, "scroll", this.scrollHandler), c.on(window, "scroll", this.scrollHandler);
  }
  _scrollHandler() {
    this.inViewport && (this._timeout = setTimeout(() => {
      this._setSrc(), this._element.removeAttribute(Zl), this._removeAttrs(), this._animation.init();
    }, this._options.lazyDelay), this.parent && c.off(this.parent, "scroll", this.scrollHandler), c.off(window, "scroll", this.scrollHandler));
  }
  _setElementError() {
    !this._options.lazyError || this._element.src === this._options.lazyError ? this._element.alt = "404 not found" : this._element.setAttribute("src", this._options.lazyError), c.trigger(this._element, tC);
  }
  _setSrc() {
    this._element.setAttribute("src", this._options.lazySrc), c.trigger(this._element, J0);
  }
  _setPlaceholder() {
    this.node === "IMG" ? this._element.setAttribute("src", this._options.lazyPlaceholder) : this.node === "VIDEO" && this._element.setAttribute("poster", this._options.lazyPlaceholder);
  }
  _removeAttrs() {
    ["src", "delay", "animation", "placeholder", "offset", "error"].forEach(
      (t) => {
        h.removeDataAttribute(this._element, `lazy-${t}`);
      }
    );
  }
  _setupContainer() {
    this._childrenInstances = d.children(
      this._element,
      Ql
    ).map((t) => new or(t, this._options));
  }
  _getConfig(t) {
    const e = {
      ...iC,
      ...t,
      ...h.getDataAttributes(this._element)
    };
    return I(ql, e, eC), e;
  }
  // Static
  static getInstance(t) {
    return A.getData(t, Ps);
  }
  static getOrCreateInstance(t, e = {}) {
    return this.getInstance(t) || new this(t, typeof e == "object" ? e : null);
  }
  static jQueryInterface(t) {
    return this.each(function() {
      let e = A.getData(this, Ps);
      const i = typeof t == "object" && t;
      if (e || (e = new or(this, i)), typeof t == "string") {
        if (typeof e[t] > "u")
          throw new TypeError(`No method named "${t}"`);
        e[t](this);
      }
    });
  }
}
const Jl = "clipboard", Ii = "te.clipboard", sC = `.${Ii}`, nC = {
  clipboardTarget: null
}, oC = {
  clipboardTarget: "null|string"
}, rC = `copy${sC}`;
class Uh {
  constructor(t, e = {}) {
    this._element = t, this._options = e, this._element && (A.setData(t, Ii, this), this._initCopy = this._initCopy.bind(this), this._setup());
  }
  // Getters
  static get NAME() {
    return Jl;
  }
  get options() {
    const t = {
      ...nC,
      ...h.getDataAttributes(this._element),
      ...this._options
    };
    return I(Jl, t, oC), t;
  }
  get clipboardTarget() {
    return d.findOne(this.options.clipboardTarget);
  }
  get copyText() {
    const t = this.clipboardTarget.hasAttribute(
      "data-te-clipboard-text"
    ), e = this.clipboardTarget.value, i = this.clipboardTarget.textContent;
    return t ? this.clipboardTarget.getAttribute("data-te-clipboard-text") : e || i;
  }
  // Public
  dispose() {
    c.off(this._element, "click", this._initCopy), A.removeData(this._element, Ii), this._element = null;
  }
  // Private
  _setup() {
    c.on(this._element, "click", this._initCopy);
  }
  _initCopy() {
    const t = this._createNewInput();
    document.body.appendChild(t), this._selectInput(t), c.trigger(this._element, rC, {
      copyText: this.copyText
    }), t.remove();
  }
  _createNewInput() {
    const t = this.clipboardTarget.tagName === "TEXTAREA" ? "textarea" : "input", e = $(t);
    return e.value = this.copyText, h.addClass(e, "-left-[9999px] absolute"), e;
  }
  _selectInput(t) {
    t.select(), t.focus(), t.setSelectionRange(0, 99999), document.execCommand("copy");
  }
  // Static
  static jQueryInterface(t) {
    return this.each(function() {
      let e = A.getData(this, Ii);
      const i = typeof t == "object" && t;
      if (e || (e = new Uh(this, i)), typeof t == "string") {
        if (typeof e[t] > "u")
          throw new TypeError(`No method named "${t}"`);
        e[t](this);
      }
    });
  }
  static getInstance(t) {
    return A.getData(t, Ii);
  }
  static getOrCreateInstance(t, e = {}) {
    return this.getInstance(t) || new this(t, typeof e == "object" ? e : null);
  }
}
const rr = "infiniteScroll", Bs = `te.${rr}`, aC = {
  infiniteDirection: "y"
}, lC = {
  infiniteDirection: "string"
};
class Xh {
  constructor(t, e) {
    this._element = t, this._element && A.setData(t, Bs, this), this._options = this._getConfig(e), this.scrollHandler = this._scrollHandler.bind(this), this._init();
  }
  // Getters
  static get NAME() {
    return rr;
  }
  get rect() {
    return this._element.getBoundingClientRect();
  }
  get condition() {
    return this._element === window ? Math.abs(
      window.scrollY + window.innerHeight - document.documentElement.scrollHeight
    ) < 1 : this._options.infiniteDirection === "x" ? this.rect.width + this._element.scrollLeft + 10 >= this._element.scrollWidth : Math.ceil(this.rect.height + this._element.scrollTop) >= this._element.scrollHeight;
  }
  // Public
  dispose() {
    c.off(this._element, "scroll", this.scrollHandler), A.removeData(this._element, Bs), this._element = null;
  }
  // Private
  _init() {
    c.on(this._element, "scroll", () => this._scrollHandler());
  }
  _scrollHandler() {
    this.condition && c.trigger(this._element, "complete.te.infiniteScroll"), c.off(this._element, "scroll", this.scrollHandler);
  }
  _getConfig(t) {
    const e = {
      ...aC,
      ...this._element !== window ? h.getDataAttributes(this._element) : {},
      ...t
    };
    return I(rr, e, lC), e;
  }
  // Static
  static getInstance(t) {
    return A.getData(t, Bs);
  }
  static getOrCreateInstance(t, e = {}) {
    return this.getInstance(t) || new this(t, typeof e == "object" ? e : null);
  }
  static jQueryInterface(t) {
    return this.each(function() {
      let e = A.getData(this, Bs);
      const i = typeof t == "object" && t;
      if (e || (e = new Xh(this, i)), typeof t == "string") {
        if (typeof e[t] > "u")
          throw new TypeError(`No method named "${t}"`);
        e[t](this);
      }
    });
  }
}
function cC({ backdropID: s }, t) {
  const e = $("div");
  return h.addClass(
    e,
    `${t.backdrop} ${t.backdropColor}`
  ), e.id = s, e;
}
const Fi = "loadingManagement", Hs = `te.${Fi}`, hC = "[data-te-loading-icon-ref]", dC = "[data-te-loading-text-ref]", uC = `show.te.${Fi}`, pC = {
  backdrop: "(null|boolean)",
  backdropID: "(null|string|number)",
  delay: "(null|number)",
  loader: "(null|string|number)",
  parentSelector: "(null|string)",
  loadingIcon: "boolean",
  loadingText: "boolean",
  scroll: "boolean"
}, _C = {
  backdrop: !0,
  backdropID: null,
  delay: 0,
  loader: "",
  parentSelector: null,
  scroll: !0,
  loadingText: !0,
  loadingIcon: !0
}, fC = {
  loadingSpinner: "absolute top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%] flex flex-col justify-center items-center z-40",
  spinnerColor: "text-primary dark:text-primary-400",
  backdrop: "w-full h-full fixed top-0 left-0 bottom-0 right-0 z-30",
  backdropColor: "bg-[rgba(0,0,0,0.4)]"
}, mC = {
  loadingSpinner: "string",
  spinnerColor: "string",
  backdrop: "string",
  backdropColor: "string"
};
class Gh {
  constructor(t, e = {}, i) {
    this._element = t, this._options = this._getConfig(e), this._classes = this._getClasses(i), this._element && A.setData(t, Hs, this), this._backdropElement = null, this._parentElement = d.findOne(this._options.parentSelector), this._loadingIcon = d.findOne(
      hC,
      this._element
    ), this._loadingText = d.findOne(
      dC,
      this._element
    ), this.init();
  }
  // Getters
  static get NAME() {
    return Fi;
  }
  // Public
  init() {
    const t = this._loadingIcon.cloneNode(!0), e = this._loadingText.cloneNode(!0);
    this._removeElementsOnStart(), setTimeout(() => {
      h.addClass(
        this._element,
        `${this._classes.loadingSpinner} ${this._classes.spinnerColor}`
      ), this._setBackdrop(), this._setLoadingIcon(t), this._setLoadingText(e), this._setScrollOption(), c.trigger(this._element, uC);
    }, this._options.delay);
  }
  dispose() {
    A.removeData(this._element, Hs), h.removeClass(
      this._element,
      `${this._classes.loadingSpinner} ${this._classes.spinnerColor}`
    );
    const t = this._options.delay;
    setTimeout(() => {
      this._removeBackdrop(), this._backdropElement = null, this._element = null, this._options = null;
    }, t);
  }
  // Private
  _setBackdrop() {
    const { backdrop: t } = this._options;
    t && (this._backdropElement = cC(this._options, this._classes), this._parentElement !== null ? (h.addClass(this._element, "absolute"), h.addClass(this._parentElement, "relative"), h.addClass(this._backdropElement, "absolute"), this._parentElement.appendChild(this._backdropElement)) : (h.addClass(this._element, "!fixed"), document.body.appendChild(this._backdropElement), document.body.appendChild(this._element)));
  }
  _removeBackdrop() {
    const { backdrop: t } = this._options;
    t && (this._parentElement !== null ? (h.removeClass(this._element, "absolute"), h.removeClass(this._parentElement, "relative"), this._backdropElement.remove()) : (this._backdropElement.remove(), this._element.remove()));
  }
  _setLoadingIcon(t) {
    if (!this._options.loadingIcon) {
      t.remove();
      return;
    }
    this._element.appendChild(t), t.id = this._options.loader;
  }
  _setLoadingText(t) {
    if (!this._options.loadingText) {
      t.remove();
      return;
    }
    this._element.appendChild(t);
  }
  _removeElementsOnStart() {
    this._element !== null && (this._loadingIcon.remove(), this._loadingText.remove());
  }
  _setScrollOption() {
    if (this._options.scroll) {
      if (this._parentElement === null) {
        h.addClass(document.body, "overflow-auto");
        return;
      }
      h.addClass(this._parentElement, "overflow-auto");
    } else {
      if (this._parentElement === null) {
        h.addClass(document.body, "overflow-hidden");
        return;
      }
      h.addClass(this._parentElement, "overflow-hidden");
    }
  }
  _getConfig(t) {
    const e = {
      ..._C,
      ...h.getDataAttributes(this._element),
      ...t
    };
    return I(Fi, e, pC), e;
  }
  _getClasses(t) {
    const e = h.getDataClassAttributes(this._element);
    return t = {
      ...fC,
      ...e,
      ...t
    }, I(Fi, t, mC), t;
  }
  // Static
  static getInstance(t) {
    return A.getData(t, Hs);
  }
  static getOrCreateInstance(t, e = {}) {
    return this.getInstance(t) || new this(t, typeof e == "object" ? e : null);
  }
  static jQueryInterface(t) {
    return this.each(function() {
      let e = A.getData(this, Hs);
      const i = typeof t == "object" && t;
      if (e || (e = new Gh(this, i)), typeof t == "string") {
        if (typeof e[t] > "u")
          throw new TypeError(`No method named "${t}"`);
        e[t](this);
      }
    });
  }
}
const gC = (s) => {
  const t = /^(0?[1-9]|1[012])(:[0-5]\d) [APap][mM]$/, e = /^([0-9]|0[0-9]|1[0-9]|2[0-3]):[0-5][0-9](:[0-5][0-9])?$/;
  return s.match(t) || s.match(e);
}, bC = (s) => s && Object.prototype.toString.call(s) === "[object Date]" && !isNaN(s), vC = (s) => s.getMonth(), TC = (s) => s.getFullYear(), EC = (s) => s.match(/[^(dmy)]{1,}/g), CC = (s, t, e, i) => {
  let n;
  e[0] !== e[1] ? n = e[0] + e[1] : n = e[0];
  const o = new RegExp(`[${n}]`), r = s.split(o), a = t.split(o), l = t.indexOf("mmm") !== -1, p = [];
  for (let b = 0; b < a.length; b++)
    a[b].indexOf("yy") !== -1 && (p[0] = { value: r[b], format: a[b] }), a[b].indexOf("m") !== -1 && (p[1] = { value: r[b], format: a[b] }), a[b].indexOf("d") !== -1 && a[b].length <= 2 && (p[2] = { value: r[b], format: a[b] });
  let u;
  t.indexOf("mmmm") !== -1 ? u = i.monthsFull : u = i.monthsShort;
  const _ = Number(p[0].value), f = l ? AC(p[1].value, u) : Number(p[1].value) - 1, g = Number(p[2].value);
  return Ct(_, f, g);
}, AC = (s, t) => t.findIndex((e) => e === s), yC = (s, t, e) => `
  <button type="button" class="${e.pickerIcon}" data-te-datepicker-toggle-button-ref>
    ${s}
  </button>
  <button type="button" class="${e.pickerIcon}" data-te-timepicker-toggle-button-ref>
    ${t}
  </button>
`, wC = (s, t) => `
  <button type="button" class="${t.toggleButton}" data-te-date-timepicker-toggle-ref>
    ${s} 
  </button>
`, on = "datetimepicker", Di = `te.${on}`, Sr = `.${Di}`, qh = "data-te-datepicker-init", Zh = "data-te-timepicker-init", kC = "data-te-datepicker-header", xC = "data-te-datepicker-cancel-button-ref", OC = "data-te-datepicker-ok-button-ref", Ro = "data-te-timepicker-wrapper", tc = "data-te-timepicker-cancel", SC = "data-te-timepicker-submit", IC = "data-te-timepicker-clear", ec = "data-te-buttons-timepicker", DC = "data-te-date-timepicker-toggle-ref", $C = "data-te-datepicker-toggle-button-ref", LC = "data-te-timepicker-toggle-button-ref", NC = `[${Zh}]`, MC = `[${qh}]`, RC = `[${DC}]`, PC = `[${LC}]`, BC = "[data-te-input-notch-ref]", HC = "[data-te-date-timepicker-toggle-ref]", VC = "[data-te-timepicker-elements-wrapper]", WC = "[data-te-timepicker-clock-wrapper]", FC = `open${Sr}`, YC = `close${Sr}`, jC = `datetimeChange${Sr}`, ic = "close.te.datepicker", sc = "input.te.timepicker", Re = $("div"), nc = {
  inline: !1,
  toggleButton: !0,
  container: "body",
  disabled: !1,
  disablePast: !1,
  disableFuture: !1,
  defaultTime: "",
  defaultDate: "",
  timepicker: {},
  datepicker: {},
  showFormat: !1,
  dateTimepickerToggleIconTemplate: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
  <path fill-rule="evenodd" d="M6.75 2.25A.75.75 0 017.5 3v1.5h9V3A.75.75 0 0118 3v1.5h.75a3 3 0 013 3v11.25a3 3 0 01-3 3H5.25a3 3 0 01-3-3V7.5a3 3 0 013-3H6V3a.75.75 0 01.75-.75zm13.5 9a1.5 1.5 0 00-1.5-1.5H5.25a1.5 1.5 0 00-1.5 1.5v7.5a1.5 1.5 0 001.5 1.5h13.5a1.5 1.5 0 001.5-1.5v-7.5z" clip-rule="evenodd" />
  </svg>`,
  datepickerToggleIconTemplate: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
  <path fill-rule="evenodd" d="M6.75 2.25A.75.75 0 017.5 3v1.5h9V3A.75.75 0 0118 3v1.5h.75a3 3 0 013 3v11.25a3 3 0 01-3 3H5.25a3 3 0 01-3-3V7.5a3 3 0 013-3H6V3a.75.75 0 01.75-.75zm13.5 9a1.5 1.5 0 00-1.5-1.5H5.25a1.5 1.5 0 00-1.5 1.5v7.5a1.5 1.5 0 001.5 1.5h13.5a1.5 1.5 0 001.5-1.5v-7.5z" clip-rule="evenodd" />
  </svg>`,
  timepickerToggleIconTemplate: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
  <path stroke-linecap="round" stroke-linejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
  </svg>`
}, KC = {
  inline: "boolean",
  toggleButton: "boolean",
  container: "string",
  disabled: "boolean",
  disablePast: "boolean",
  disableFuture: "boolean",
  defaultTime: "(string|date|number)",
  defaultDate: "(string|date|number)",
  timepicker: "object",
  datepicker: "object",
  showFormat: "boolean",
  dateTimepickerToggleIconTemplate: "string",
  datepickerToggleIconTemplate: "string",
  timepickerToggleIconTemplate: "string"
}, zC = {
  toggleButton: "flex items-center justify-content-center [&>svg]:w-5 [&>svg]:h-5 absolute outline-none border-none bg-transparent right-0.5 top-1/2 -translate-x-1/2 -translate-y-1/2 hover:text-primary focus:text-primary dark:hover:text-primary-400 dark:focus:text-primary-400 dark:text-neutral-200",
  pickerIcon: "[&>svg]:w-6 [&>svg]:h-6 [&>svg]:mx-auto [&>svg]:pointer-events-none w-1/2 px-1.5 py-[1px] rounded-[10px] min-h-[40px] cursor-pointer outline-none border-none text-white hover:bg-primary-600 dark:hover:bg-neutral-600",
  buttonsContainer: "flex justify-evenly items-end bg-primary dark:bg-zinc-800 dark:data-[te-buttons-timepicker]:bg-zinc-700",
  timepicker: {},
  datepicker: {}
}, UC = {
  toggleButton: "string",
  pickerIcon: "string",
  buttonsContainer: "string",
  timepicker: "object",
  datepicker: "object"
};
class Qh {
  constructor(t, e, i) {
    this._element = t, this._input = d.findOne("input", this._element), this._options = this._getConfig(e), this._classes = this._getClasses(i), this._timepicker = null, this._datepicker = null, this._dateValue = this._options.defaultDate ? this._options.defaultDate : "", this._timeValue = this._options.defaultTime ? this._options.defaultTime : "", this._isInvalidTimeFormat = !1, this._format = this._options.datepicker.format ? this._options.datepicker.format : "dd/mm/yyyy", this._cancel = !1, this._scrollBar = new ti(), this._element && A.setData(t, Di, this), this._init();
  }
  // Getters
  static get NAME() {
    return on;
  }
  get toggleButton() {
    return d.findOne(RC, this._element);
  }
  get notch() {
    return d.findOne(BC, this._element);
  }
  dispose() {
    c.off(this._element, "click", this._openDatePicker), c.off(this._input, "input", this._handleInput), c.off(this._element, "click"), A.removeData(this._element, Di), this._removeTimePicker(), this._removeDatepicker(), this.toggleButton.remove(), this._options = nc, this._timepicker = null, this._datepicker = null, this._dateValue = null, this._timeValue = null, this._isInvalidTimeFormat = null;
  }
  update(t = {}) {
    const e = this._getConfig({ ...this._options, ...t });
    this.dispose(), this._options = e, this._init();
  }
  // Private
  _init() {
    this._addDatepicker(), this._addTimePicker(), this._appendToggleButton(), this._listenToToggleClick(), this._listenToUserInput(), this._disableInput(), this._setInitialDefaultInput(), this._applyFormatPlaceholder(), this._options.disablePast && this._handleTimepickerDisablePast(), this._options.disableFuture && this._handleTimepickerDisableFuture();
  }
  _removeDatepicker() {
    const t = this._element.querySelector(MC);
    t && t.remove();
  }
  _addDatepicker() {
    const t = $("div");
    t.id = this._element.id ? `datepicker-${this._element.id}` : et("datepicker-");
    const e = '<input type="text">';
    t.innerHTML = e, t.setAttribute(qh, ""), this._element.appendChild(t), h.addClass(t, "hidden");
    let i = {
      ...this._options.datepicker,
      container: this._options.container,
      disablePast: this._options.disablePast,
      disableFuture: this._options.disableFuture
    };
    (this._options.inline || this._options.datepicker.inline) && (i = { ...i, inline: !0 }), this._datepicker = new og(t, i, {
      ...this._classes.datepicker
    }), this._datepicker._input.value = this._dateValue;
  }
  _removeTimePicker() {
    const t = this._element.querySelector(NC);
    t && (t.remove(), this._scrollBar.reset());
  }
  _addTimePicker() {
    const t = $("div");
    t.id = this._element.id ? `timepicker-${this._element.id}` : et("timepicker-");
    const e = '<input type="text">';
    t.innerHTML = e, t.setAttribute(Zh, ""), this._element.appendChild(t), h.addClass(t, "hidden");
    let i = {
      ...this._options.timepicker,
      container: this._options.container
    };
    (this._options.inline || this._options.timepicker.inline) && (i = { ...i, inline: !0 }), this._timepicker = new Sg(t, i, {
      ...this._classes.timepicker
    }), this._timepicker.input.value = this._timeValue;
  }
  _addIconButtons() {
    if (h.addClass(Re, this._classes.buttonsContainer), Re.innerHTML = yC(
      this._options.datepickerToggleIconTemplate,
      this._options.timepickerToggleIconTemplate,
      this._classes
    ), Re.removeAttribute(ec), !(this._options.inline || this._options.datepicker.inline)) {
      if (this._scrollBar.hide(), this._datepicker._isOpen)
        d.findOne(
          `[${kC}]`,
          document.body
        ).appendChild(Re);
      else if (this._timepicker._modal && !this._options.timepicker.inline) {
        const t = d.findOne(
          VC,
          document.body
        ), e = d.findOne(
          WC,
          document.body
        );
        Re.setAttribute(ec, ""), t.insertBefore(Re, e);
      }
    }
  }
  _enableOrDisableToggleButton() {
    this._options.disabled ? (this.toggleButton.disabled = !0, h.addClass(this.toggleButton, "pointer-events-none")) : (this.toggleButton.disabled = !1, h.removeClass(this.toggleButton, "pointer-events-none"));
  }
  _appendToggleButton() {
    this._options.toggleButton && (this._element.insertAdjacentHTML(
      "beforeend",
      wC(
        this._options.dateTimepickerToggleIconTemplate,
        this._classes
      )
    ), this._enableOrDisableToggleButton());
  }
  _applyFormatPlaceholder() {
    this._options.showFormat && (this._input.placeholder = this._format);
  }
  _listenToCancelClick() {
    const t = d.findOne(
      `[${xC}]`,
      document.body
    );
    c.one(t, "mousedown", () => {
      this._cancel = !0, this._scrollBar.reset(), c.off(t, "mousedown");
    });
  }
  _listenToToggleClick() {
    c.on(this._element, "click", HC, (t) => {
      t.preventDefault(), this._openDatePicker();
    });
  }
  _listenToUserInput() {
    c.on(this._input, "input", (t) => {
      this._handleInput(t.target.value);
    });
  }
  _disableInput() {
    this._options.disabled && (this._input.disabled = "true");
  }
  _getConfig(t) {
    const e = h.getDataAttributes(this._element);
    return t = {
      ...nc,
      ...e,
      ...t
    }, I(on, t, KC), t;
  }
  _getClasses(t) {
    const e = h.getDataClassAttributes(this._element);
    return t = {
      ...zC,
      ...e,
      ...t
    }, I(on, t, UC), t;
  }
  _handleInput(t) {
    const e = t.split(", "), i = EC(this._format), n = e[0], o = e[1] || "", r = CC(
      n,
      this._format,
      i,
      this._datepicker._options
    );
    e.length === 2 && (bC(r) && gC(o) ? (this._dateValue = n, this._timeValue = o, this._datepicker._input.value = this._dateValue, this._datepicker._activeDate = this._dateValue, this._datepicker._selectedYear = TC(r), this._datepicker._selectedMonth = vC(r), this._datepicker._headerDate = r, this._timepicker.input.value = this._timeValue, this._timepicker._isInvalidTimeFormat = !1) : (this._datepicker._activeDate = /* @__PURE__ */ new Date(), this._datepicker._selectedDate = null, this._datepicker._selectedMonth = null, this._datepicker._selectedYear = null, this._datepicker._headerDate = null, this._datepicker._headerMonth = null, this._datepicker._headerYear = null, this._timepicker._isInvalidTimeFormat = !0));
  }
  _openDatePicker() {
    if (c.trigger(this._element, FC).defaultPrevented)
      return;
    this._datepicker.open(), this._options.inline || this._scrollBar.hide(), (this._options.inline || this._options.datepicker.inline) && this._openDropdownDate(), this._addIconButtons(), this._listenToCancelClick(), this._options.inline && this._datepicker._isOpen && h.addClass(this.toggleButton, "pointer-events-none"), c.one(this._datepicker._element, ic, () => {
      if (this._dateValue = this._datepicker._input.value, this._updateInputValue(), this._cancel) {
        this._cancel = !1;
        return;
      }
      let i = !1;
      c.on(this._datepicker.container, "click", (n) => {
        !this._datepicker._selectedDate && n.target.hasAttribute(OC) || i || (this._openTimePicker(), i = !0, setTimeout(() => {
          i = !1;
        }, 500));
      }), setTimeout(() => {
        d.findOne(
          `[${Ro}]`,
          document.body
        ) || this._scrollBar.reset();
      }, 10), this._options.inline && h.removeClass(this.toggleButton, "pointer-events-none");
    });
    const e = d.findOne(
      PC,
      document.body
    );
    c.on(e, "click", () => {
      this._datepicker.close(), this._scrollBar.hide(), c.trigger(this._datepicker._element, ic);
    });
  }
  _handleTimepickerDisablePast() {
    const t = /* @__PURE__ */ new Date();
    t.setHours(0, 0, 0, 0), c.on(
      this._datepicker._element,
      "dateChange.te.datepicker",
      () => {
        this._datepicker._selectedDate.getTime() === t.getTime() ? this._timepicker.update({ disablePast: !0 }) : this._timepicker.update({ disablePast: !1 });
      }
    );
  }
  _handleTimepickerDisableFuture() {
    const t = /* @__PURE__ */ new Date();
    t.setHours(0, 0, 0, 0), c.on(
      this._datepicker._element,
      "dateChange.te.datepicker",
      () => {
        this._datepicker._selectedDate.getTime() === t.getTime() ? this._timepicker.update({ disableFuture: !0 }) : this._timepicker.update({ disableFuture: !1 });
      }
    );
  }
  _handleEscapeKey() {
    c.one(document.body, "keyup", () => {
      setTimeout(() => {
        d.findOne(
          `[${Ro}]`,
          document.body
        ) || this._scrollBar.reset();
      }, 250);
    });
  }
  _handleCancelButton() {
    const t = d.findOne(
      `[${tc}]`,
      document.body
    );
    c.one(t, "mousedown", () => {
      this._scrollBar.reset();
    });
  }
  _openDropdownDate() {
    const t = this._datepicker._popper;
    t.state.elements.reference = this._input, this._scrollBar.reset();
  }
  _openTimePicker() {
    c.trigger(this._timepicker.elementToggle, "click"), setTimeout(() => {
      if (this._addIconButtons(), (this._options.inline || this._options.timepicker.inline) && this._openDropdownTime(), this._timepicker._modal) {
        const t = d.findOne(
          `[${tc}]`,
          document.body
        );
        this._handleEscapeKey(), this._handleCancelButton(), c.on(this._timepicker._modal, "click", (e) => {
          (e.target.hasAttribute(Ro) || e.target.hasAttribute(SC)) && setTimeout(() => {
            this._scrollBar.reset();
          }, 200), e.target.hasAttribute(IC) && c.trigger(
            this._timepicker._element,
            sc
          ), e.target.hasAttribute($C) && (c.trigger(t, "click"), setTimeout(() => {
            this._openDatePicker(), this._scrollBar.hide();
          }, 200));
        });
      }
    }), c.one(this._timepicker._element, sc, () => {
      this._timeValue = this._timepicker.input.value, this._updateInputValue(), c.trigger(this._element, YC);
    });
  }
  _openDropdownTime() {
    const t = this._timepicker._popper;
    t.state.elements.reference = this._input, t.update(), this._scrollBar.reset();
  }
  _setInitialDefaultInput() {
    (this._options.defaultDate || this._options.defaultTime) && this._updateInputValue();
  }
  _updateInputValue() {
    this._timeValue && this._dateValue && (this._input.value = `${this._dateValue}, ${this._timeValue}`, c.trigger(
      this._element,
      jC,
      { value: this._input.value }
    ).defaultPrevented) || (c.trigger(this._input, "focus"), this.notch && this.notch.removeAttribute("data-te-input-focused"));
  }
  // static
  static jQueryInterface(t, e) {
    return this.each(function() {
      let i = A.getData(this, Di);
      const n = typeof t == "object" && t;
      if (!(!i && /dispose/.test(t)) && (i || (i = new Qh(this, n)), typeof t == "string")) {
        if (typeof i[t] > "u")
          throw new TypeError(`No method named "${t}"`);
        i[t](e);
      }
    });
  }
  static getInstance(t) {
    return A.getData(t, Di);
  }
  static getOrCreateInstance(t, e = {}) {
    return this.getInstance(t) || new this(t, typeof e == "object" ? e : null);
  }
}
const rn = "sticky", $i = `te.${rn}`, Jh = `.${$i}`, XC = `active${Jh}`, GC = `inactive${Jh}`, qC = {
  stickyAnimationSticky: "",
  stickyAnimationUnsticky: "",
  stickyBoundary: !1,
  stickyDelay: 0,
  stickyDirection: "down",
  stickyMedia: 0,
  stickyOffset: 0,
  stickyPosition: "top",
  stickyZIndex: 100
}, ZC = {
  stickyAnimationSticky: "string",
  stickyAnimationUnsticky: "string",
  stickyBoundary: "(boolean|string)",
  stickyDelay: "number",
  stickyDirection: "string",
  stickyMedia: "number",
  stickyOffset: "number",
  stickyPosition: "string",
  stickyZIndex: "(string|number)"
}, QC = {
  stickyActive: ""
}, JC = {
  stickyActive: "string"
};
class td {
  constructor(t, e, i) {
    this._element = t, this._hiddenElement = null, this._elementPositionStyles = {}, this._scrollDirection = "", this._isSticked = !1, this._elementOffsetTop = null, this._scrollTop = 0, this._pushPoint = "", this._manuallyDeactivated = !1, this._element && (this._options = this._getConfig(e), this._classes = this._getClasses(i), A.setData(t, $i, this), this._init());
  }
  // Getters
  static get NAME() {
    return rn;
  }
  // Public
  dispose() {
    const { stickyAnimationUnsticky: t } = this._options;
    let { animationDuration: e } = getComputedStyle(this._element);
    e = t !== "" ? parseFloat(e) * 1e3 : 0, this._disableSticky(), setTimeout(() => {
      A.removeData(this._element, $i), this._element = null, this._options = null, this._hiddenElement = null, this._elementPositionStyles = null, this._scrollDirection = null, this._isSticked = null, this._elementOffsetTop = null, this._scrollTop = null, this._pushPoint = null, this._manuallyDeactivated = null;
    }, e);
  }
  active() {
    this._isSticked || (this._createHiddenElement(), this._enableSticky(), this._changeBoundaryPosition(), this._isSticked = !0, this._manuallyDeactivated = !1);
  }
  inactive() {
    this._isSticked && (this._disableSticky(), this._isSticked = !1, this._manuallyDeactivated = !0);
  }
  // Private
  _init() {
    this._userActivityListener();
  }
  _userActivityListener() {
    c.on(window, "resize", () => {
      this._updateElementPosition(), this._updateElementOffset();
    }), c.on(window, "scroll", () => {
      if (!this._element || window.innerWidth <= this._options.stickyMedia || this._manuallyDeactivated)
        return;
      const t = document.documentElement, { stickyDirection: e } = this._options, i = window.pageYOffset || t.scrollTop;
      this._updateElementOffset(), this._updatePushPoint(), this._updateScrollDirection(i), this._clearInProgressAnimations();
      const n = [this._scrollDirection, "both"].includes(
        e
      ), o = this._pushPoint <= i, r = o && !this._isSticked && n, a = (!o || !n) && this._isSticked;
      r && (this._createHiddenElement(), this._enableSticky(), this._changeBoundaryPosition(), this._isSticked = !0), a && (this._disableSticky(), this._isSticked = !1), this._isSticked && (this._updatePosition({ styles: this._elementPositionStyles }), this._changeBoundaryPosition()), this._scrollTop = i <= 0 ? 0 : i;
    });
  }
  _updatePushPoint() {
    this._options.stickyPosition === "top" ? this._pushPoint = this._elementOffsetTop - this._options.stickyDelay : this._pushPoint = this._elementOffsetTop + this._element.height - document.body.scrollHeight + this._options.stickyDelay;
  }
  _updateElementOffset() {
    this._hiddenElement ? this._elementOffsetTop = this._hiddenElement.offsetTop : this._elementOffsetTop = this._element.offsetTop, this._options.stickyAnimationUnsticky && (this._elementOffsetTop += this._element.height || 0);
  }
  _updateElementPosition() {
    if (this._hiddenElement) {
      const { left: t } = this._hiddenElement.getBoundingClientRect();
      this._elementPositionStyles = {
        left: `${t}px`
      };
    } else
      this._elementPositionStyles = {};
    this._setStyle(this._element, this._elementPositionStyles);
  }
  _updateScrollDirection(t) {
    t > this._scrollTop ? this._scrollDirection = "down" : this._scrollDirection = "up";
  }
  _clearInProgressAnimations() {
    const t = this._scrollDirection === "up", e = this._element.classList.contains(
      this._options.stickyAnimationUnsticky
    ), i = window.scrollY <= this._elementOffsetTop - this._element.height;
    t && e && i && (this._removeUnstickyAnimation(), this._resetStyles(), this._removeHiddenElement());
  }
  _enableSticky() {
    const {
      stickyAnimationSticky: t,
      stickyAnimationUnsticky: e,
      stickyOffset: i,
      stickyPosition: n,
      stickyZIndex: o
    } = this._options, { height: r, left: a, width: l } = this._element.getBoundingClientRect();
    t !== "" && this._toggleClass(
      t,
      e,
      this._element
    ), this._toggleClass(this._classes.stickyActive, "", this._element), this._setStyle(this._element, {
      top: n === "top" && `${0 + i}px`,
      bottom: n === "bottom" && `${0 + i}px`,
      height: `${r}px`,
      width: `${l}px`,
      left: `${a}px`,
      zIndex: `${o}`,
      position: "fixed"
    }), this._hiddenElement.hidden = !1, c.trigger(this._element, XC);
  }
  _changeBoundaryPosition() {
    const { stickyPosition: t, stickyBoundary: e, stickyOffset: i } = this._options, { height: n } = this._element.getBoundingClientRect(), o = {
      height: this._element.parentElement.getBoundingClientRect().height,
      ...this._getOffset(this._element.parentElement)
    };
    let r;
    const a = d.findOne(e);
    a ? r = this._getOffset(a).top - n - i : r = o.height + o[t] - n - i;
    const l = t === "top", p = t === "bottom", u = e, _ = r < 0, f = r > o.height - n;
    let g;
    l && (_ && u ? g = { top: `${i + r}px` } : g = { top: `${i + 0}px` }), p && (_ && u ? g = { bottom: `${i + r}px` } : f && u ? g = { bottom: `${i + o.bottom}px` } : g = { bottom: `${i + 0}px` }), this._setStyle(this._element, g);
  }
  _disableSticky() {
    const { stickyAnimationUnsticky: t, stickyAnimationSticky: e } = this._options;
    let { animationDuration: i } = getComputedStyle(this._element);
    i = t !== "" ? parseFloat(i) * 1e3 : 0, this._options.stickyAnimationUnsticky !== "" && this._toggleClass(
      t,
      e,
      this._element
    ), setTimeout(() => {
      this._element.classList.contains(e) || (this._removeUnstickyAnimation(), this._resetStyles(), this._removeHiddenElement(), this._toggleClass("", this._classes.stickyActive, this._element), c.trigger(this._element, GC));
    }, i);
  }
  _createHiddenElement() {
    this._hiddenElement || (this._hiddenElement = this._copyElement(this._element));
  }
  _removeHiddenElement() {
    this._hiddenElement && (this._hiddenElement.remove(), this._hiddenElement = null);
  }
  _removeUnstickyAnimation() {
    this._toggleClass("", this._options.stickyAnimationUnsticky, this._element);
  }
  _resetStyles() {
    this._setStyle(this._element, {
      top: null,
      bottom: null,
      position: null,
      left: null,
      zIndex: null,
      width: null,
      height: null
    });
  }
  _updatePosition({ styles: t }) {
    this._setStyle(this._element, t);
  }
  _toggleClass(t, e, i) {
    t && h.addClass(i, t), e && h.removeClass(i, e);
  }
  _getOffset(t) {
    const e = h.offset(t), i = t.getBoundingClientRect(), n = e.left === 0 && e.top === 0 ? 0 : window.innerHeight - i.bottom;
    return {
      ...e,
      bottom: n
    };
  }
  _copyElement(t) {
    const { height: e, width: i } = t.getBoundingClientRect(), n = t.cloneNode(!1);
    return n.hidden = !0, this._setStyle(n, {
      height: `${e}px`,
      width: `${i}px`,
      opacity: "0"
    }), t.parentElement.insertBefore(n, t), n;
  }
  _getConfig(t = {}) {
    const e = h.getDataAttributes(this._element);
    return t = {
      ...qC,
      ...e,
      ...t
    }, I(rn, t, ZC), t;
  }
  _getClasses(t) {
    const e = h.getDataClassAttributes(this._element);
    return t = {
      ...QC,
      ...e,
      ...t
    }, I(rn, t, JC), t;
  }
  _setStyle(t, e) {
    Object.keys(e).forEach((i) => {
      t.style[i] = e[i];
    });
  }
  static jQueryInterface(t, e) {
    return this.each(function() {
      let i = A.getData(this, $i);
      const n = typeof t == "object" && t;
      if (!(!i && /dispose|hide/.test(t)) && (i || (i = new td(this, n)), typeof t == "string")) {
        if (typeof i[t] > "u")
          throw new TypeError(`No method named "${t}"`);
        i[t](e);
      }
    });
  }
  static getInstance(t) {
    return A.getData(t, $i);
  }
  static getOrCreateInstance(t, e = {}) {
    return this.getInstance(t) || new this(t, typeof e == "object" ? e : null);
  }
}
const tA = "data-te-autocomplete-dropdown-ref", eA = "data-te-autocomplete-items-list-ref", iA = "data-te-autocomplete-item-ref", sA = "data-te-autocomplete-loader-ref";
function nA(s, t) {
  const { id: e, items: i, width: n, options: o } = s, r = $("div");
  h.addClass(r, t.dropdownContainer), h.addStyle(r, { width: `${n}px` }), r.setAttribute("id", e);
  const a = $("div");
  a.setAttribute(tA, ""), h.addClass(a, t.dropdown);
  const l = $("ul"), p = o.listHeight;
  l.setAttribute(eA, ""), h.addClass(l, t.autocompleteList), h.addClass(l, t.scrollbar), h.addStyle(l, { maxHeight: `${p}px` }), l.setAttribute("role", "listbox");
  const u = ed(i, o);
  return l.innerHTML = u, a.appendChild(l), r.appendChild(a), r;
}
function ed(s = [], t, e) {
  const i = t.displayValue, n = t.itemContent;
  return `
    ${s.map((o, r) => {
    const a = typeof n == "function" ? pn(n(o), sh, null) : i(o);
    return `<li data-te-index="${r}" role="option" class="${e}" ${iA} >${a}</li>`;
  }).join("")}
  `;
}
function oA(s) {
  const t = $("div");
  t.setAttribute(sA, ""), h.addClass(t, s.autocompleteLoader), h.addClass(t, s.spinnerIcon), t.setAttribute("role", "status");
  const e = '<span class="absolute -m-px h-px w-px overflow-hidden whitespace-nowrap border-0 p-0 [clip:rect(0,0,0,0)]">Loading...</span>';
  return t.innerHTML = e, t;
}
function rA(s, t) {
  return `<li class="${t.autocompleteItem}">${s}</li>`;
}
const Po = "autocomplete", Li = "te.autocomplete", Pe = "data-te-input-state-active", Bo = "data-te-autocomplete-item-active", oc = "data-te-input-focused", rc = "data-te-autocomplete-state-open", aA = "data-te-autocomplete-custom-content-ref", lA = "[data-te-autocomplete-dropdown-ref]", Vs = "[data-te-autocomplete-items-list-ref]", ac = "[data-te-autocomplete-item-ref]", cA = "[data-te-autocomplete-loader-ref]", hA = `[${aA}]`, dA = "[data-te-input-notch-ref]", wn = `.${Li}`, uA = `close${wn}`, pA = `open${wn}`, lc = `itemSelect${wn}`, _A = `update${wn}`, fA = {
  autoSelect: !1,
  container: "body",
  customContent: "",
  debounce: 300,
  displayValue: (s) => s,
  filter: null,
  itemContent: null,
  listHeight: 190,
  loaderCloseDelay: 300,
  noResults: "No results found",
  threshold: 0
}, mA = {
  autoSelect: "boolean",
  container: "string",
  customContent: "string",
  debounce: "number",
  displayValue: "function",
  filter: "(null|function)",
  itemContent: "(null|function)",
  listHeight: "number",
  loaderCloseDelay: "number",
  noResults: "string",
  threshold: "number"
}, gA = {
  autocompleteItem: "flex flex-row items-center justify-between w-full px-4 py-[0.4375rem] truncate text-gray-700 bg-transparent select-none cursor-pointer hover:[&:not([data-te-autocomplete-option-disabled])]:bg-black/5 data-[te-autocomplete-item-active]:bg-black/5 data-[data-te-autocomplete-option-disabled]:text-gray-400 data-[data-te-autocomplete-option-disabled]:cursor-default dark:text-gray-200 dark:hover:[&:not([data-te-autocomplete-option-disabled])]:bg-white/30 dark:data-[te-autocomplete-item-active]:bg-white/30",
  autocompleteList: "list-none m-0 p-0 overflow-y-auto",
  autocompleteLoader: "absolute right-1 top-2 w-[1.4rem] h-[1.4rem] border-[0.15em]",
  dropdown: "relative outline-none min-w-[100px] m-0 scale-y-[0.8] opacity-0 bg-white shadow-[0_2px_5px_0_rgba(0,0,0,0.16),_0_2px_10px_0_rgba(0,0,0,0.12)] transition duration-200 motion-reduce:transition-none data-[te-autocomplete-state-open]:scale-y-100 data-[te-autocomplete-state-open]:opacity-100 dark:bg-zinc-700",
  dropdownContainer: "z-[1070]",
  scrollbar: "[&::-webkit-scrollbar]:w-1 [&::-webkit-scrollbar]:h-1 [&::-webkit-scrollbar-button]:block [&::-webkit-scrollbar-button]:h-0 [&::-webkit-scrollbar-button]:bg-transparent [&::-webkit-scrollbar-track-piece]:bg-transparent [&::-webkit-scrollbar-track-piece]:rounded-none [&::-webkit-scrollbar-track-piece]: [&::-webkit-scrollbar-track-piece]:rounded-l [&::-webkit-scrollbar-thumb]:h-[50px] [&::-webkit-scrollbar-thumb]:bg-[#999] [&::-webkit-scrollbar-thumb]:rounded",
  spinnerIcon: "inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-current border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]"
}, bA = {
  autocompleteItem: "string",
  autocompleteList: "string",
  autocompleteLoader: "string",
  dropdown: "string",
  dropdownContainer: "string",
  scrollbar: "string",
  spinnerIcon: "string"
};
class id {
  constructor(t, e, i) {
    this._element = t, this._options = this._getConfig(e), this._classes = this._getClasses(i), this._getContainer(), this._input = d.findOne("input", t), this._notch = d.findOne(dA, t), this._customContent = d.findOne(
      hA,
      t
    ), this._loader = oA(this._classes), this._popper = null, this._debounceTimeoutId = null, this._loaderTimeout = null, this._activeItemIndex = -1, this._activeItem = null, this._filteredResults = null, this._lastQueryValue = null, this._canOpenOnFocus = !0, this._isOpen = !1, this._outsideClickHandler = this._handleOutsideClick.bind(this), this._inputFocusHandler = this._handleInputFocus.bind(this), this._userInputHandler = this._handleUserInput.bind(this), this._keydownHandler = this._handleKeydown.bind(this), t && A.setData(t, Li, this), this._init();
  }
  static get NAME() {
    return Po;
  }
  get filter() {
    return this._options.filter;
  }
  get dropdown() {
    return d.findOne(lA, this._dropdownContainer);
  }
  get items() {
    return d.find(ac, this._dropdownContainer);
  }
  get itemsList() {
    return d.findOne(Vs, this._dropdownContainer);
  }
  initSearch(t) {
    this._filterResults(t);
  }
  _getContainer() {
    this._container = d.findOne(this._options.container);
  }
  _getConfig(t) {
    const e = h.getDataAttributes(this._element);
    return t = {
      ...fA,
      ...e,
      ...t
    }, I(Po, t, mA), t;
  }
  _getClasses(t) {
    const e = h.getDataClassAttributes(this._element);
    return t = {
      ...gA,
      ...e,
      ...t
    }, I(Po, t, bA), t;
  }
  _init() {
    this._initDropdown(), this._updateInputState(), this._setInputAriaAttributes(), this._listenToInputFocus(), this._listenToUserInput(), this._listenToKeydown();
  }
  _initDropdown() {
    this._dropdownContainerId = this._element.id ? `autocomplete-dropdown-${this._element.id}` : et("autocomplete-dropdown-");
    const t = {
      id: this._dropdownContainerId,
      items: [],
      width: this._input.offsetWidth,
      options: this._options
    };
    if (this._dropdownContainer = nA(t, this._classes), this._options.customContent !== "") {
      const e = this._options.customContent, i = pn(
        e,
        sh,
        null
      );
      this.dropdown.insertAdjacentHTML("beforeend", i);
    }
  }
  _setInputAriaAttributes() {
    this._input.setAttribute("role", "combobox"), this._input.setAttribute("aria-expanded", !1), this._input.setAttribute("aria-owns", this._dropdownContainerId), this._input.setAttribute("aria-haspopup", !0), this._input.setAttribute("autocomplete", "off");
  }
  _updateInputState() {
    var t, e;
    this._input.value !== "" || this._isOpen ? (this._input.setAttribute(Pe, ""), (t = this._notch) == null || t.setAttribute(Pe, "")) : (this._input.removeAttribute(Pe), (e = this._notch) == null || e.removeAttribute(Pe));
  }
  _listenToInputFocus() {
    c.on(this._input, "focus", this._inputFocusHandler);
  }
  _handleInputFocus(t) {
    const { value: e } = t.target, i = this._options.threshold;
    if (!this._canOpenOnFocus) {
      this._canOpenOnFocus = !0;
      return;
    }
    e.length < i || (this._lastQueryValue !== e ? this._filterResults(e) : this.open());
  }
  _listenToWindowResize() {
    c.on(window, "resize", this._handleWindowResize.bind(this));
  }
  _handleWindowResize() {
    this._dropdownContainer && this._updateDropdownWidth();
  }
  _updateDropdownWidth() {
    const t = this._input.offsetWidth;
    h.addStyle(this._dropdownContainer, { width: `${t}px` });
  }
  _listenToUserInput() {
    c.on(this._input, "input", this._userInputHandler);
  }
  _handleUserInput(t) {
    const { value: e } = t.target, i = this._options.threshold, n = this._options.debounce;
    if (this.filter) {
      if (e.length < i) {
        this._isOpen && this.close();
        return;
      }
      this._debounceFilter(e, n);
    }
  }
  _debounceFilter(t, e) {
    this._debounceTimeoutId && clearTimeout(this._debounceTimeoutId), this._debounceTimeoutId = setTimeout(() => {
      this._filterResults(t);
    }, e);
  }
  _filterResults(t) {
    this._lastQueryValue = t;
    const e = this.filter(t);
    this._isPromise(e) ? this._asyncUpdateResults(e) : this._updateResults(e);
  }
  _isPromise(t) {
    return !!t && typeof t.then == "function";
  }
  _asyncUpdateResults(t) {
    this._resetActiveItem(), this._showLoader(), t.then((e) => {
      this._updateResults(e), this._loaderTimeout = setTimeout(() => {
        this._hideLoader(), this._loaderTimeout = null;
      }, this._options.loaderCloseDelay);
    });
  }
  _resetActiveItem() {
    const t = this._activeItem;
    t && (t.removeAttribute(Bo), this._activeItem = null, this._activeItemIndex = -1);
  }
  _showLoader() {
    this._element.appendChild(this._loader);
  }
  _hideLoader() {
    d.findOne(cA, this._element) && this._element.removeChild(this._loader);
  }
  _updateResults(t) {
    this._resetActiveItem(), this._filteredResults = t, c.trigger(this._element, _A, { results: t });
    const e = d.findOne(
      Vs,
      this._dropdownContainer
    ), i = ed(
      t,
      this._options,
      this._classes.autocompleteItem
    ), n = rA(
      this._options.noResults,
      this._classes
    );
    t.length === 0 && this._options.noResults !== "" ? e.innerHTML = n : e.innerHTML = i, this._isOpen || this.open(), this._popper && this._popper.forceUpdate();
  }
  _listenToKeydown() {
    c.on(this._element, "keydown", this._keydownHandler);
  }
  _handleKeydown(t) {
    this._isOpen ? this._handleOpenKeydown(t) : this._handleClosedKeydown(t);
  }
  _handleOpenKeydown(t) {
    const e = t.keyCode;
    if (e === ke && this._options.autoSelect && this._selectActiveItem(), e === we || e === U && t.altKey) {
      this.close(), this._input.focus();
      return;
    }
    if (e === we || e === U && t.altKey || e === ke) {
      this.close(), this._input.focus();
      return;
    }
    switch (e) {
      case z:
        this._setActiveItem(this._activeItemIndex + 1), this._scrollToItem(this._activeItem);
        break;
      case U:
        this._setActiveItem(this._activeItemIndex - 1), this._scrollToItem(this._activeItem);
        break;
      case Te:
        this._activeItemIndex > -1 ? (this._setActiveItem(0), this._scrollToItem(this._activeItem)) : this._input.setSelectionRange(0, 0);
        break;
      case Ee:
        if (this._activeItemIndex > -1)
          this._setActiveItem(this.items.length - 1), this._scrollToItem(this._activeItem);
        else {
          const n = this._input.value.length;
          this._input.setSelectionRange(n, n);
        }
        break;
      case it:
        if (t.preventDefault(), this._activeItemIndex > -1) {
          const n = this._filteredResults[this._activeItemIndex];
          this._handleSelection(n);
        }
        return;
      default:
        return;
    }
    t.preventDefault();
  }
  _setActiveItem(t) {
    const e = this.items;
    e[t] && this._updateActiveItem(e[t], t);
  }
  _updateActiveItem(t, e) {
    const i = this._activeItem;
    i && i.removeAttribute(Bo), t.setAttribute(Bo, ""), this._activeItemIndex = e, this._activeItem = t;
  }
  _scrollToItem(t) {
    if (!t)
      return;
    const e = this.itemsList, i = e.offsetHeight, n = this.items.indexOf(t), o = t.offsetHeight, r = e.scrollTop;
    if (n > -1) {
      const a = n * o, l = a + o > r + i;
      a < r ? e.scrollTop = a : l ? e.scrollTop = a - i + o : e.scrollTop = r;
    }
  }
  _handleClosedKeydown(t) {
    t.key === "Enter" && t.preventDefault();
    const e = t.keyCode;
    (e === it || e === z || e === z) && this.open();
  }
  open() {
    this._lastQueryValue === null && this._filterResults("");
    const t = c.trigger(this._element, pA);
    this._isOpen || t.defaultPrevented || (this._updateDropdownWidth(), this._listenToWindowResize(), this._popper = se(this._element, this._dropdownContainer, {
      modifiers: [
        {
          name: "offset",
          options: {
            offset: [0, 1]
          }
        }
      ]
    }), this._container.appendChild(this._dropdownContainer), this._listenToOutsideClick(), this._listenToItemsClick(), setTimeout(() => {
      this.dropdown.setAttribute(rc, ""), this._isOpen = !0, this._setInputActiveStyles(), this._updateInputState();
    }, 0));
  }
  _listenToOutsideClick() {
    c.on(document, "click", this._outsideClickHandler);
  }
  _handleOutsideClick(t) {
    const e = this._input === t.target, i = t.target === this._dropdownContainer, n = this._dropdownContainer && this._dropdownContainer.contains(t.target);
    !e && !i && !n && this.close();
  }
  _listenToItemsClick() {
    const t = d.findOne(
      Vs,
      this._dropdownContainer
    );
    c.on(t, "click", this._handleItemsClick.bind(this));
  }
  _handleItemsClick(t) {
    const e = d.closest(t.target, ac), i = h.getDataAttribute(e, "index"), n = this._filteredResults[i];
    this._handleSelection(n);
  }
  _selectActiveItem() {
    const t = this._filteredResults[this._activeItemIndex];
    if (!t)
      return;
    const e = this._options.displayValue(t);
    c.trigger(this._element, lc, {
      value: t
    }).defaultPrevented || setTimeout(() => {
      this._canOpenOnFocus = !1, this._updateInputValue(e), this._updateInputState();
    }, 0);
  }
  _handleSelection(t) {
    const e = this._options.displayValue(t), i = c.trigger(this._element, lc, {
      value: t
    });
    t !== void 0 && (i.defaultPrevented || setTimeout(() => {
      this._canOpenOnFocus = !1, this._updateInputValue(e), this._updateInputState(), this._input.focus(), this.close();
    }, 0));
  }
  _updateInputValue(t) {
    this._input.value = t;
  }
  _setInputActiveStyles() {
    this._input.setAttribute(oc, "");
  }
  close() {
    var e;
    const t = c.trigger(this._element, uA);
    !this._isOpen || t.defaultPrevented || (this._resetActiveItem(), this._removeDropdownEvents(), this.dropdown.removeAttribute(rc), c.on(
      this.dropdown,
      "transitionend",
      this._handleDropdownTransitionEnd.bind(this)
    ), this._input.removeAttribute(oc), this._input.value || (this._input.removeAttribute(Pe), (e = this._notch) == null || e.removeAttribute(Pe)));
  }
  _removeDropdownEvents() {
    const t = d.findOne(
      Vs,
      this._dropdownContainer
    );
    c.off(t, "click"), c.off(document, "click", this._outsideClickHandler), c.off(window, "resize", this._handleWindowResize.bind(this));
  }
  _handleDropdownTransitionEnd(t) {
    this._isOpen && t && t.propertyName === "opacity" && (this._popper.destroy(), this._dropdownContainer && this._container.removeChild(this._dropdownContainer), this._isOpen = !1, c.off(this.dropdown, "transitionend"), this._canOpenOnFocus = !0);
  }
  dispose() {
    this._isOpen && this.close(), this._removeInputAndElementEvents(), this._dropdownContainer.remove(), A.removeData(this._element, Li);
  }
  _removeInputAndElementEvents() {
    c.off(this._input, "focus", this._inputFocusHandler), c.off(this._input, "input", this._userInputHandler), c.off(this._element, "keydown", this._keydownHandler);
  }
  static jQueryInterface(t, e) {
    return this.each(function() {
      let i = A.getData(this, Li);
      const n = typeof t == "object" && t;
      if (!(!i && /dispose/.test(t)) && (i || (i = new id(this, n)), typeof t == "string")) {
        if (typeof i[t] > "u")
          throw new TypeError(`No method named "${t}"`);
        i[t](e);
      }
    });
  }
  static getInstance(t) {
    return A.getData(t, Li);
  }
  static getOrCreateInstance(t, e = {}) {
    return this.getInstance(t) || new this(t, typeof e == "object" ? e : null);
  }
}
const vA = (s, t) => `<div class="${s.connectContainer}" ${t}>
  <div class="${s.connect}"></div>
  </div>`, TA = (s, t) => `<div class="${s.hand}" ${t}>
    <span></span>
  </div>`, EA = (s, t) => `
    <span class="${s.tooltip}" ${t}>
      <span class="${s.tooltipValue}"></span>
    </span>
    `, pe = (s) => s.type === "touchmove" ? s.touches[0].clientX : s.clientX, an = "multiRangeSlider", ln = `te.${an}`, CA = `.${ln}`, cc = `valueChanged${CA}`, _e = "data-te-active", hc = "data-te-multi-range-slider-hand-ref", dc = "data-te-multi-range-slider-connect-ref", uc = "data-te-multi-range-slider-tooltip-ref", AA = {
  max: "number",
  min: "number",
  numberOfRanges: "number",
  startValues: "(array|string)",
  step: "(string|null|number)",
  tooltip: "boolean"
}, yA = {
  max: 100,
  min: 0,
  numberOfRanges: 2,
  startValues: [0, 100],
  step: null,
  tooltip: !1
}, wA = {
  connect: "z-10 h-full w-full bg-[#eee] will-change-transform dark:bg-[#4f4f4f]",
  connectContainer: "relative border-[1px] border-[#eee] z-0 h-full w-full overflow-hidden dark:border-[#4f4f4f]",
  container: "apperance-none relative m-auto w-full cursor-pointer h-1 border-0 bg-transparent p-0 focus:outline-none dark:border-[#4f4f4f]",
  hand: "apperance-none absolute top-[50%] border-0 -mt-1 h-4 w-4 cursor-pointer rounded-[50%] border-0 bg-primary transition-colors ease-in-out will-change-transform active:bg-[#c4d4ef] active:z-60",
  tooltip: "absolute -top-[18px] origin-[50%_50%] -translate-x-[6px] -rotate-45 scale-0 rounded-bl-none rounded-br-2xl rounded-tl-2xl rounded-tr-2xl bg-primary text-white transition-all duration-[200ms] data-[te-active]:-top-[38px] data-[te-active]:scale-100",
  tooltipValue: "block h-[30px] w-[30px] -translate-x-[6px] translate-y-[6px] rotate-45 text-center text-[10px]"
}, kA = {
  container: "string",
  connectContainer: "string",
  connect: "string",
  hand: "string",
  tooltip: "string",
  tooltipValue: "string"
};
class sd extends ft {
  constructor(t, e, i) {
    super(t), this._options = this._getConfig(e), this._mousemove = !1, this._classes = this._getClasses(i), this._maxTranslation = null, this._minTranslation = null, this._currentStepValue = null, this._canChangeStep = !1, this.init();
  }
  // Getters
  static get NAME() {
    return an;
  }
  get hands() {
    return d.find(`[${hc}]`, this._element);
  }
  get connect() {
    return d.findOne(`[${dc}]`, this._element);
  }
  get leftConnectRect() {
    return this.connect.getBoundingClientRect().left;
  }
  get handActive() {
    return d.findOne(`[${_e}]`);
  }
  get activeTooltipValue() {
    return d.find(`[${uc}]`).filter(
      (n) => n.hasAttribute(_e)
    )[0].children[0];
  }
  // Public
  init() {
    this._setContainerClasses(), this._setRangeConnectsElement(), this._setRangeHandleElements(), this._setMaxAndMinTranslation(), this._setTransofrmationOnStart(), this._handleClickEventOnHand(), this._handleEndMoveEventDocument(), this._handleClickOnRange(), this._setTooltipToHand();
  }
  dispose() {
    A.removeData(this._element, ln), this._options = null, this._mousemove = null, this._maxTranslation = null, this._minTranslation = null, this._currentStepValue = null, this._canChangeStep = null, this.hands.forEach((t) => {
      K.off(t, "mousedown touchstart"), K.off(t, "mouseup touchend");
    }), K.off(document, "mousemove touchmove"), K.off(document, "mouseup touchend"), K.off(this.connect, "mousedown touchstart");
  }
  // Private
  _setMaxAndMinTranslation() {
    this._maxTranslation = this.connect.offsetWidth - this.hands[0].offsetWidth / 2, this._minTranslation = this.connect.offsetLeft - this.hands[0].offsetWidth / 2;
  }
  _setTransofrmationOnStart() {
    const { max: t, min: e } = this._options;
    let { startValues: i } = this._options;
    typeof i == "string" && (i = JSON.parse(i.replace(/'/g, '"'))), i.length === 0 ? this.hands.forEach((n) => {
      h.setDataAttribute(
        n,
        "translation",
        Math.round(this._minTranslation)
      ), h.addStyle(n, {
        transform: `translate(${this._minTranslation}px,-25%)`
      });
    }) : this.hands.forEach((n, o) => {
      if (i[o] > t || i[o] < e)
        return;
      if (i[o] === void 0) {
        h.setDataAttribute(
          n,
          "translation",
          Math.round(this._maxTranslation)
        ), h.addStyle(n, {
          transform: `translate(${this._maxTranslation}px,-25%)`,
          zIndex: this.hands.length - o
        });
        return;
      }
      const a = (i[o] - e) / (t - e) * this.connect.offsetWidth - n.offsetWidth / 2;
      h.setDataAttribute(
        n,
        "translation",
        Math.round(a)
      ), h.addStyle(n, {
        transform: `translate(${a}px,-25%)`,
        zIndex: this.hands.length - o
      });
    });
  }
  _handleOutOfMaxRangeValue(t, e) {
    this._updateHand(t, this._maxTranslation), this._options.tooltip && (this.activeTooltipValue.innerText = e);
  }
  _handleOutOfMinRangeValue(t, e) {
    this._updateHand(t, this._minTranslation), this._options.tooltip && (this.activeTooltipValue.innerText = e);
  }
  _handleNormalMove(t, e, i) {
    this._updateHand(t, e), this._options.tooltip && (this.activeTooltipValue.innerText = Math.round(i));
  }
  _handleClickEventOnHand() {
    const { max: t, min: e, step: i } = this._options;
    this.hands.forEach((n) => {
      K.on(n, "mousedown touchstart", (o) => {
        if (this._mousemove = !0, n.setAttribute(_e, ""), this._options.tooltip && n.children[1].setAttribute(_e, ""), this._handleMoveEvent(n), this._handleEndMoveEvent(n, o), !this._canChangeStep && i !== null)
          return;
        const r = pe(o) - this.leftConnectRect - n.offsetWidth / 2, a = (pe(o) - this.leftConnectRect) / (this.connect.offsetWidth / (t - e)) % (t - e);
        r >= this._maxTranslation ? this._handleOutOfMaxRangeValue(n, t) : r <= this._minTranslation ? this._handleOutOfMinRangeValue(n, e) : this._handleNormalMove(n, r, a);
      });
    });
  }
  _setContainerClasses() {
    h.addClass(this._element, this._classes.container);
  }
  _setRangeConnectsElement() {
    this._element.insertAdjacentHTML(
      "afterbegin",
      vA(
        {
          connectContainer: this._classes.connectContainer,
          connect: this._classes.connect
        },
        dc
      )
    );
  }
  _setRangeHandleElements() {
    for (let t = 0; t < this._options.numberOfRanges; t++)
      this._element.insertAdjacentHTML(
        "beforeend",
        TA({ hand: this._classes.hand }, hc)
      );
    this.hands.forEach((t, e) => {
      t.setAttribute("aria-orientation", "horizontal"), t.setAttribute("role", "slider"), h.setDataAttribute(t, "handle", e);
    });
  }
  _setTooltipToHand() {
    this._options.tooltip && this.hands.forEach((t) => t.insertAdjacentHTML(
      "beforeend",
      EA(
        {
          tooltip: this._classes.tooltip,
          tooltipValue: this._classes.tooltipValue
        },
        uc
      )
    ));
  }
  _handleMoveEvent(t) {
    const { tooltip: e, step: i } = this._options;
    K.on(document, "mousemove touchmove", (n) => {
      n.type === "mousemove" && n.preventDefault();
      const { max: o, min: r, numberOfRanges: a } = this._options;
      if (t.hasAttribute(_e)) {
        const l = (pe(n) - this.leftConnectRect) / this.connect.offsetWidth * o;
        let p = (pe(n) - this.leftConnectRect) / (this.connect.offsetWidth / (o - r)) % (o - r) + r;
        if ((this._currentStepValue === Math.round(p) || Math.round(p) % i !== 0) && i !== null) {
          this._canChangeStep = !1;
          return;
        }
        this._canChangeStep = !0;
        let u = pe(n) - this.leftConnectRect - t.offsetWidth / 2;
        const _ = h.getDataAttribute(
          this.handActive,
          "handle"
        ), f = h.getDataAttribute(
          this.handActive,
          "translation"
        );
        if (p < r)
          u = r - t.offsetWidth / 2, p = r;
        else if (l >= o)
          return;
        const g = this.hands.map(
          (m) => h.getDataAttribute(m, "translation")
        );
        if (a < 2)
          Math.round(p) % i === 0 && i !== null ? (this._currentStepValue = Math.round(p), h.addStyle(t, {
            transform: `translate(${u}px,-25%)`
          }), e && (this.activeTooltipValue.innerText = Math.round(p))) : i === null && (h.addStyle(t, {
            transform: `translate(${u}px,-25%)`
          }), e && (this.activeTooltipValue.innerText = Math.round(p))), h.setDataAttribute(t, "translation", u);
        else {
          const m = _ > 0 && _ < a - 1;
          let b = u, v = !1;
          const T = g[_ + 1], y = g[_ - 1];
          _ === 0 && f >= T ? (b = T, v = u <= b) : _ === a - 1 && f <= y ? (b = y, v = u >= b) : m && (f >= T || f <= y) && (b = f >= T ? T : y, v = b === T ? u <= b : u >= b), Math.round(p) % i === 0 && i !== null ? (this._currentStepValue = Math.round(p), h.addStyle(t, {
            transform: `translate(${b}px,-25%)`
          }), e && b === u && this.activeTooltipValue !== null && (this.activeTooltipValue.innerText = Math.round(p))) : i === null && (h.addStyle(t, {
            transform: `translate(${b}px,-25%)`
          }), e && b === u && this.activeTooltipValue !== null && (this.activeTooltipValue.innerText = Math.round(p))), h.setDataAttribute(
            t,
            "translation",
            v ? u : b
          );
        }
        this._canChangeStep && this._handleEventChangeValuesOnRange();
      }
    });
  }
  _handleEventChangeValuesOnRange() {
    const { max: t, min: e, numberOfRanges: i } = this._options, n = (r) => {
      const a = r.getBoundingClientRect().left - this.leftConnectRect + r.offsetWidth / 2;
      let l = a / (this.connect.offsetWidth / (t - e)) % (t - e);
      return a === this.connect.offsetWidth ? l = t : l += e, h.setDataAttribute(r, "value", Math.round(l * 10) / 10), { value: l };
    };
    if (i < 2) {
      const { value: r } = n(this.hands[0]);
      c.trigger(this._element, cc, {
        values: { value: r + e, rounded: Math.round(r + e) }
      });
      return;
    }
    const o = this.hands.map((r) => n(r));
    c.trigger(this._element, cc, {
      values: {
        value: o.map(({ value: r }) => r + e),
        rounded: o.map(({ value: r }) => Math.round(r + e))
      }
    });
  }
  _resetHandState(t, e) {
    c.off(t, e), t.removeAttribute(_e), this._options.tooltip && t.children[1].removeAttribute(_e);
  }
  _handleEndMoveEventDocument() {
    K.on(document, "mouseup touchend", () => {
      this._mousemove && (this.hands.forEach((t) => {
        this._resetHandState(t, "mousemove");
      }), K.off(document, "mousemove touchmove"), this._mousemove = !1);
    });
  }
  _handleEndMoveEvent(t) {
    K.on(t, "mouseup touchend", () => {
      this._resetHandState(t, "mousemove"), K.off(document, "mousemove touchmove"), this._mousemove = !1;
    });
  }
  _handleClickOnRange() {
    this._options.step === null && K.on(this.connect, "mousedown touchstart", (t) => {
      const e = [];
      let i = 0;
      if (this.hands.forEach((n) => {
        this._mousemove = !0;
        const o = pe(t), r = n.offsetWidth, a = h.getDataAttribute(
          n,
          "translation"
        ), l = o - this.leftConnectRect - r / 2;
        this._options.numberOfRanges < 2 ? this._updateHand(n, l) : (e.push(Math.abs(l - a)), e.forEach((p, u) => {
          p < e[i] && (i = u);
        }));
      }), this._options.numberOfRanges >= 2) {
        const n = pe(t) - this.leftConnectRect - this.hands[i].offsetWidth / 2;
        this._updateAdjacentHands(i, n);
      }
      this._handleEventChangeValuesOnRange();
    });
  }
  _updateHand(t, e) {
    h.addStyle(t, {
      transform: `translate(${e}px,-25%)`
    }), h.setDataAttribute(t, "translation", e);
  }
  _updateAdjacentHands(t, e) {
    const i = this.hands[t + 1], n = this.hands[t - 1], o = i ? h.getDataAttribute(i, "translation") : void 0, r = n ? h.getDataAttribute(n, "translation") : void 0;
    i && e > o ? this._updateHand(i, e) : n && e < r ? this._updateHand(n, e) : this._updateHand(this.hands[t], e);
  }
  _getConfig(t) {
    const e = {
      ...yA,
      ...h.getDataAttributes(this._element),
      ...t
    };
    return I(an, e, AA), e;
  }
  _getClasses(t) {
    const e = h.getDataClassAttributes(this._element);
    return t = {
      ...wA,
      ...e,
      ...t
    }, I(an, t, kA), t;
  }
  static jQueryInterface(t, e) {
    return this.each(function() {
      let i = A.getData(this, ln);
      const n = typeof t == "object" && t;
      if (!(!i && /dispose|hide/.test(t)) && (i || (i = new sd(this, n)), typeof t == "string")) {
        if (typeof i[t] > "u")
          throw new TypeError(`No method named "${t}"`);
        i[t](e);
      }
    });
  }
  static getInstance(t) {
    return A.getData(t, ln);
  }
  static getOrCreateInstance(t, e = {}) {
    return this.getInstance(t) || new this(t, typeof e == "object" ? e : null);
  }
}
const xA = (s) => {
  gc(() => {
    const t = mc();
    if (t) {
      const e = s.NAME, i = t.fn[e];
      t.fn[e] = s.jQueryInterface, t.fn[e].Constructor = s, t.fn[e].noConflict = () => (t.fn[e] = i, s.jQueryInterface);
    }
  });
}, OA = (s, t) => {
  c.on(
    document,
    `click.te.${s.NAME}`,
    t,
    function(e) {
      e.preventDefault(), s.getOrCreateInstance(this).toggle();
    }
  );
}, SA = (s, t) => {
  c.on(
    document,
    `click.te.${s.NAME}.data-api`,
    t,
    function(e) {
      if (["A", "AREA"].includes(this.tagName) && e.preventDefault(), be(this))
        return;
      s.getOrCreateInstance(this).show();
    }
  );
}, IA = (s, t) => {
  c.on(
    document,
    `click.te.${s.NAME}.data-api`,
    t,
    function(e) {
      const i = te(this);
      if (["A", "AREA"].includes(this.tagName) && e.preventDefault(), be(this))
        return;
      c.one(i, s.EVENT_HIDDEN, () => {
        Mt(this) && this.focus();
      });
      const n = d.findOne(s.OPEN_SELECTOR);
      n && n !== i && s.getInstance(n).hide(), s.getOrCreateInstance(i).toggle(this);
    }
  );
}, DA = (s, t) => {
  c.on(
    document,
    `click.te.${s.NAME}`,
    t,
    (e) => {
      e.preventDefault();
      const i = e.target.closest(t);
      s.getOrCreateInstance(i).toggle();
    }
  );
}, $A = (s, t) => {
  c.on(
    document,
    `click.te.${s.NAME}`,
    t,
    function(e) {
      const i = te(this);
      ["A", "AREA"].includes(this.tagName) && e.preventDefault(), c.one(i, s.EVENT_SHOW, (r) => {
        r.defaultPrevented || c.one(i, s.EVENT_HIDDEN, () => {
          Mt(this) && this.focus();
        });
      });
      const n = d.findOne(
        `[${s.OPEN_SELECTOR}="true"]`
      );
      n && s.getInstance(n).hide(), s.getOrCreateInstance(i).toggle(this);
    }
  );
}, LA = (s, t) => {
  c.one(
    document,
    "mousedown",
    t,
    s.autoInitial(new s())
  );
}, NA = (s, t) => {
  c.on(
    document,
    `click.te.${s.NAME}.data-api`,
    t,
    function(e) {
      (e.target.tagName === "A" || e.delegateTarget && e.delegateTarget.tagName === "A") && e.preventDefault();
      const i = lr(this);
      d.find(i).forEach((o) => {
        s.getOrCreateInstance(o, { toggle: !1 }).toggle();
      });
    }
  );
}, MA = (s, t) => {
  [].slice.call(
    document.querySelectorAll(t)
  ).map(function(i) {
    return new s(i);
  });
}, RA = (s, t) => {
  [].slice.call(
    document.querySelectorAll(t)
  ).map(function(i) {
    return new s(i);
  });
}, PA = (s, t) => {
  d.find(t).forEach((e) => {
    new s(e);
  }), c.on(
    document,
    `click.te.${s.NAME}.data-api`,
    `${t} img:not([data-te-lightbox-disabled])`,
    s.toggle()
  );
}, BA = (s, t) => {
  const e = (o) => o[0] === "{" && o[o.length - 1] === "}" || o[0] === "[" && o[o.length - 1] === "]", i = (o) => typeof o != "string" ? o : e(o) ? JSON.parse(o.replace(/'/g, '"')) : o, n = (o) => {
    const r = {};
    return Object.keys(o).forEach((a) => {
      if (a.match(/dataset.*/)) {
        const l = a.slice(7, 8).toLowerCase().concat(a.slice(8));
        r[l] = i(o[a]);
      }
    }), r;
  };
  d.find(t).forEach((o) => {
    if (h.getDataAttribute(o, "chart") !== "bubble" && h.getDataAttribute(o, "chart") !== "scatter") {
      const r = h.getDataAttributes(o), a = {
        data: {
          datasets: [n(r)]
        }
      };
      return r.chart && (a.type = r.chart), r.labels && (a.data.labels = JSON.parse(r.labels.replace(/'/g, '"'))), new s(o, {
        ...a,
        ...wi[a.type]
      });
    }
    return null;
  });
};
class HA {
  constructor() {
    this.inits = [];
  }
  get initialized() {
    return this.inits;
  }
  isInited(t) {
    return this.inits.includes(t);
  }
  add(t) {
    this.isInited(t) || this.inits.push(t);
  }
}
const ar = new HA(), Ni = {
  alert: {
    name: "Alert",
    selector: "[data-te-alert-init]",
    isToggler: !1
  },
  animation: {
    name: "Animate",
    selector: "[data-te-animation-init]",
    isToggler: !1
  },
  carousel: {
    name: "Carousel",
    selector: "[data-te-carousel-init]",
    isToggler: !1
  },
  chips: {
    name: "ChipsInput",
    selector: "[data-te-chips-input-init]",
    isToggler: !1
  },
  chip: {
    name: "Chip",
    selector: "[data-te-chip-init]",
    isToggler: !1,
    onInit: "init"
  },
  datepicker: {
    name: "Datepicker",
    selector: "[data-te-datepicker-init]",
    isToggler: !1
  },
  datetimepicker: {
    name: "Datetimepicker",
    selector: "[data-te-date-timepicker-init]",
    isToggler: !1
  },
  input: {
    name: "Input",
    selector: "[data-te-input-wrapper-init]",
    isToggler: !1
  },
  perfectScrollbar: {
    name: "PerfectScrollbar",
    selector: "[data-te-perfect-scrollbar-init]",
    isToggler: !1
  },
  rating: {
    name: "Rating",
    selector: "[data-te-rating-init]",
    isToggler: !1
  },
  scrollspy: {
    name: "ScrollSpy",
    selector: "[data-te-spy='scroll']",
    isToggler: !1
  },
  select: {
    name: "Select",
    selector: "[data-te-select-init]",
    isToggler: !1
  },
  sidenav: {
    name: "Sidenav",
    selector: "[data-te-sidenav-init]",
    isToggler: !1
  },
  stepper: {
    name: "Stepper",
    selector: "[data-te-stepper-init]",
    isToggler: !1
  },
  timepicker: {
    name: "Timepicker",
    selector: "[data-te-timepicker-init]",
    isToggler: !1
  },
  toast: {
    name: "Toast",
    selector: "[data-te-toast-init]",
    isToggler: !1
  },
  datatable: {
    name: "Datatable",
    selector: "[data-te-datatable-init]"
  },
  popconfirm: {
    name: "Popconfirm",
    selector: "[data-te-toggle='popconfirm']"
  },
  validation: {
    name: "Validation",
    selector: "[data-te-validation-init]"
  },
  smoothScroll: {
    name: "SmoothScroll",
    selector: "a[data-te-smooth-scroll-init]"
  },
  lazyLoad: {
    name: "LazyLoad",
    selector: "[data-te-lazy-load-init]"
  },
  clipboard: {
    name: "Clipboard",
    selector: "[data-te-clipboard-init]"
  },
  infiniteScroll: {
    name: "InfiniteScroll",
    selector: "[data-te-infinite-scroll-init]"
  },
  loadingManagement: {
    name: "LoadingManagement",
    selector: "[data-te-loading-management-init]"
  },
  sticky: {
    name: "Sticky",
    selector: "[data-te-sticky-init]"
  },
  multiRangeSlider: {
    name: "MultiRangeSlider",
    selector: "[data-te-multi-range-slider-init]"
  },
  // advancedInits
  chart: {
    name: "Chart",
    selector: "[data-te-chart]",
    isToggler: !1,
    advanced: BA
  },
  // togglers
  button: {
    name: "Button",
    selector: "[data-te-toggle='button']",
    isToggler: !0,
    callback: DA
  },
  collapse: {
    name: "Collapse",
    selector: "[data-te-collapse-init]",
    isToggler: !0,
    callback: NA
  },
  dropdown: {
    name: "Dropdown",
    selector: "[data-te-dropdown-toggle-ref]",
    isToggler: !0,
    callback: OA
  },
  modal: {
    name: "Modal",
    selector: "[data-te-toggle='modal']",
    isToggler: !0,
    callback: $A
  },
  ripple: {
    name: "Ripple",
    selector: "[data-te-ripple-init]",
    isToggler: !0,
    callback: LA
  },
  offcanvas: {
    name: "Offcanvas",
    selector: "[data-te-offcanvas-toggle]",
    isToggler: !0,
    callback: IA
  },
  tab: {
    name: "Tab",
    selector: "[data-te-toggle='tab'], [data-te-toggle='pill'], [data-te-toggle='list']",
    isToggler: !0,
    callback: SA
  },
  tooltip: {
    name: "Tooltip",
    selector: "[data-te-toggle='tooltip']",
    isToggler: !1,
    callback: MA
  },
  popover: {
    name: "Popover",
    selector: "[data-te-toggle='popover']",
    isToggler: !0,
    callback: RA
  },
  lightbox: {
    name: "Lightbox",
    selector: "[data-te-lightbox-init]",
    isToggler: !0,
    callback: PA
  },
  touch: {
    name: "Touch",
    selector: "[data-te-touch-init]"
  }
}, VA = (s) => Ni[s.NAME] || null, WA = (s, t) => {
  if (!s || !t.allowReinits && ar.isInited(s.NAME))
    return;
  ar.add(s.NAME);
  const e = VA(s), i = (e == null ? void 0 : e.isToggler) || !1;
  if (xA(s), e != null && e.advanced) {
    e == null || e.advanced(s, e == null ? void 0 : e.selector);
    return;
  }
  if (i) {
    e == null || e.callback(s, e == null ? void 0 : e.selector);
    return;
  }
  d.find(e == null ? void 0 : e.selector).forEach((n) => {
    let o = s.getInstance(n);
    o || (o = new s(n), e != null && e.onInit && o[e.onInit]());
  });
}, FA = (s, t) => {
  s.forEach((e) => WA(e, t));
}, YA = {
  allowReinits: !1,
  checkOtherImports: !1
}, qA = (s, t = {}) => {
  t = { ...YA, ...t };
  const e = Object.keys(Ni).map((i) => {
    if (!!document.querySelector(Ni[i].selector)) {
      const o = s[Ni[i].name];
      return !o && !ar.isInited(i) && t.checkOtherImports && console.warn(
        `Please import ${Ni[i].name} from "tw-elements" package and add it to a object parameter inside "initTE" function`
      ), o;
    }
  });
  FA(e, t);
};

//# sourceMappingURL=tw-elements.es.min.js.map


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/chunk loaded */
/******/ 	(() => {
/******/ 		var deferred = [];
/******/ 		__webpack_require__.O = (result, chunkIds, fn, priority) => {
/******/ 			if(chunkIds) {
/******/ 				priority = priority || 0;
/******/ 				for(var i = deferred.length; i > 0 && deferred[i - 1][2] > priority; i--) deferred[i] = deferred[i - 1];
/******/ 				deferred[i] = [chunkIds, fn, priority];
/******/ 				return;
/******/ 			}
/******/ 			var notFulfilled = Infinity;
/******/ 			for (var i = 0; i < deferred.length; i++) {
/******/ 				var [chunkIds, fn, priority] = deferred[i];
/******/ 				var fulfilled = true;
/******/ 				for (var j = 0; j < chunkIds.length; j++) {
/******/ 					if ((priority & 1 === 0 || notFulfilled >= priority) && Object.keys(__webpack_require__.O).every((key) => (__webpack_require__.O[key](chunkIds[j])))) {
/******/ 						chunkIds.splice(j--, 1);
/******/ 					} else {
/******/ 						fulfilled = false;
/******/ 						if(priority < notFulfilled) notFulfilled = priority;
/******/ 					}
/******/ 				}
/******/ 				if(fulfilled) {
/******/ 					deferred.splice(i--, 1)
/******/ 					var r = fn();
/******/ 					if (r !== undefined) result = r;
/******/ 				}
/******/ 			}
/******/ 			return result;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/ensure chunk */
/******/ 	(() => {
/******/ 		__webpack_require__.f = {};
/******/ 		// This file contains only the entry chunk.
/******/ 		// The chunk loading function for additional chunks
/******/ 		__webpack_require__.e = (chunkId) => {
/******/ 			return Promise.all(Object.keys(__webpack_require__.f).reduce((promises, key) => {
/******/ 				__webpack_require__.f[key](chunkId, promises);
/******/ 				return promises;
/******/ 			}, []));
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/get javascript chunk filename */
/******/ 	(() => {
/******/ 		// This function allow to reference async chunks
/******/ 		__webpack_require__.u = (chunkId) => {
/******/ 			// return url for filenames based on template
/******/ 			return "" + chunkId + ".js";
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/get mini-css chunk filename */
/******/ 	(() => {
/******/ 		// This function allow to reference async chunks
/******/ 		__webpack_require__.miniCssF = (chunkId) => {
/******/ 			// return url for filenames based on template
/******/ 			return undefined;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/load script */
/******/ 	(() => {
/******/ 		var inProgress = {};
/******/ 		var dataWebpackPrefix = "wptailpack:";
/******/ 		// loadScript function to load a script via script tag
/******/ 		__webpack_require__.l = (url, done, key, chunkId) => {
/******/ 			if(inProgress[url]) { inProgress[url].push(done); return; }
/******/ 			var script, needAttach;
/******/ 			if(key !== undefined) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				for(var i = 0; i < scripts.length; i++) {
/******/ 					var s = scripts[i];
/******/ 					if(s.getAttribute("src") == url || s.getAttribute("data-webpack") == dataWebpackPrefix + key) { script = s; break; }
/******/ 				}
/******/ 			}
/******/ 			if(!script) {
/******/ 				needAttach = true;
/******/ 				script = document.createElement('script');
/******/ 		
/******/ 				script.charset = 'utf-8';
/******/ 				script.timeout = 120;
/******/ 				if (__webpack_require__.nc) {
/******/ 					script.setAttribute("nonce", __webpack_require__.nc);
/******/ 				}
/******/ 				script.setAttribute("data-webpack", dataWebpackPrefix + key);
/******/ 		
/******/ 				script.src = url;
/******/ 			}
/******/ 			inProgress[url] = [done];
/******/ 			var onScriptComplete = (prev, event) => {
/******/ 				// avoid mem leaks in IE.
/******/ 				script.onerror = script.onload = null;
/******/ 				clearTimeout(timeout);
/******/ 				var doneFns = inProgress[url];
/******/ 				delete inProgress[url];
/******/ 				script.parentNode && script.parentNode.removeChild(script);
/******/ 				doneFns && doneFns.forEach((fn) => (fn(event)));
/******/ 				if(prev) return prev(event);
/******/ 			}
/******/ 			var timeout = setTimeout(onScriptComplete.bind(null, undefined, { type: 'timeout', target: script }), 120000);
/******/ 			script.onerror = onScriptComplete.bind(null, script.onerror);
/******/ 			script.onload = onScriptComplete.bind(null, script.onload);
/******/ 			needAttach && document.head.appendChild(script);
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && !scriptUrl) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"index": 0,
/******/ 			"./style-index": 0
/******/ 		};
/******/ 		
/******/ 		__webpack_require__.f.j = (chunkId, promises) => {
/******/ 				// JSONP chunk loading for javascript
/******/ 				var installedChunkData = __webpack_require__.o(installedChunks, chunkId) ? installedChunks[chunkId] : undefined;
/******/ 				if(installedChunkData !== 0) { // 0 means "already installed".
/******/ 		
/******/ 					// a Promise means "currently loading".
/******/ 					if(installedChunkData) {
/******/ 						promises.push(installedChunkData[2]);
/******/ 					} else {
/******/ 						if("./style-index" != chunkId) {
/******/ 							// setup Promise in chunk cache
/******/ 							var promise = new Promise((resolve, reject) => (installedChunkData = installedChunks[chunkId] = [resolve, reject]));
/******/ 							promises.push(installedChunkData[2] = promise);
/******/ 		
/******/ 							// start chunk loading
/******/ 							var url = __webpack_require__.p + __webpack_require__.u(chunkId);
/******/ 							// create error before stack unwound to get useful stacktrace later
/******/ 							var error = new Error();
/******/ 							var loadingEnded = (event) => {
/******/ 								if(__webpack_require__.o(installedChunks, chunkId)) {
/******/ 									installedChunkData = installedChunks[chunkId];
/******/ 									if(installedChunkData !== 0) installedChunks[chunkId] = undefined;
/******/ 									if(installedChunkData) {
/******/ 										var errorType = event && (event.type === 'load' ? 'missing' : event.type);
/******/ 										var realSrc = event && event.target && event.target.src;
/******/ 										error.message = 'Loading chunk ' + chunkId + ' failed.\n(' + errorType + ': ' + realSrc + ')';
/******/ 										error.name = 'ChunkLoadError';
/******/ 										error.type = errorType;
/******/ 										error.request = realSrc;
/******/ 										installedChunkData[1](error);
/******/ 									}
/******/ 								}
/******/ 							};
/******/ 							__webpack_require__.l(url, loadingEnded, "chunk-" + chunkId, chunkId);
/******/ 						} else installedChunks[chunkId] = 0;
/******/ 					}
/******/ 				}
/******/ 		};
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		__webpack_require__.O.j = (chunkId) => (installedChunks[chunkId] === 0);
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = (parentChunkLoadingFunction, data) => {
/******/ 			var [chunkIds, moreModules, runtime] = data;
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			if(chunkIds.some((id) => (installedChunks[id] !== 0))) {
/******/ 				for(moduleId in moreModules) {
/******/ 					if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 						__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 					}
/******/ 				}
/******/ 				if(runtime) var result = runtime(__webpack_require__);
/******/ 			}
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkId] = 0;
/******/ 			}
/******/ 			return __webpack_require__.O(result);
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = globalThis["webpackChunkwptailpack"] = globalThis["webpackChunkwptailpack"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module depends on other loaded chunks and execution need to be delayed
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["./style-index"], () => (__webpack_require__("./public/src/js/index.js")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;
//# sourceMappingURL=index.js.map