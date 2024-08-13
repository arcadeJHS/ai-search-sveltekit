var F = Object.defineProperty;
var G = (e, t, n) => t in e ? F(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n;
var f = (e, t, n) => G(e, typeof t != "symbol" ? t + "" : t, n);
function l() {
}
function U(e) {
  return e();
}
function T() {
  return /* @__PURE__ */ Object.create(null);
}
function x(e) {
  e.forEach(U);
}
function q(e) {
  return typeof e == "function";
}
function A(e, t) {
  return e != e ? t == t : e !== t || e && typeof e == "object" || typeof e == "function";
}
function K(e) {
  return Object.keys(e).length === 0;
}
function Q(e, ...t) {
  if (e == null) {
    for (const s of t)
      s(void 0);
    return l;
  }
  const n = e.subscribe(...t);
  return n.unsubscribe ? () => n.unsubscribe() : n;
}
function W(e, t, n) {
  e.$$.on_destroy.push(Q(t, n));
}
function w(e, t) {
  e.appendChild(t);
}
function N(e, t, n) {
  e.insertBefore(t, n || null);
}
function k(e) {
  e.parentNode && e.parentNode.removeChild(e);
}
function E(e) {
  return document.createElement(e);
}
function j(e) {
  return document.createTextNode(e);
}
function X(e, t, n, s) {
  return e.addEventListener(t, n, s), () => e.removeEventListener(t, n, s);
}
function Y(e, t, n) {
  n == null ? e.removeAttribute(t) : e.getAttribute(t) !== n && e.setAttribute(t, n);
}
function Z(e) {
  return Array.from(e.childNodes);
}
function v(e, t) {
  t = "" + t, e.data !== t && (e.data = /** @type {string} */
  t);
}
function tt(e) {
  const t = {};
  return e.childNodes.forEach(
    /** @param {Element} node */
    (n) => {
      t[n.slot || "default"] = !0;
    }
  ), t;
}
let m;
function p(e) {
  m = e;
}
function et() {
  if (!m) throw new Error("Function called outside component initialization");
  return m;
}
function nt(e) {
  et().$$.on_mount.push(e);
}
const _ = [], J = [];
let b = [];
const R = [], st = /* @__PURE__ */ Promise.resolve();
let C = !1;
function rt() {
  C || (C = !0, st.then(z));
}
function L(e) {
  b.push(e);
}
const S = /* @__PURE__ */ new Set();
let h = 0;
function z() {
  if (h !== 0)
    return;
  const e = m;
  do {
    try {
      for (; h < _.length; ) {
        const t = _[h];
        h++, p(t), it(t.$$);
      }
    } catch (t) {
      throw _.length = 0, h = 0, t;
    }
    for (p(null), _.length = 0, h = 0; J.length; ) J.pop()();
    for (let t = 0; t < b.length; t += 1) {
      const n = b[t];
      S.has(n) || (S.add(n), n());
    }
    b.length = 0;
  } while (_.length);
  for (; R.length; )
    R.pop()();
  C = !1, S.clear(), p(e);
}
function it(e) {
  if (e.fragment !== null) {
    e.update(), x(e.before_update);
    const t = e.dirty;
    e.dirty = [-1], e.fragment && e.fragment.p(e.ctx, t), e.after_update.forEach(L);
  }
}
function ct(e) {
  const t = [], n = [];
  b.forEach((s) => e.indexOf(s) === -1 ? t.push(s) : n.push(s)), n.forEach((s) => s()), b = t;
}
const ot = /* @__PURE__ */ new Set();
function ut(e, t) {
  e && e.i && (ot.delete(e), e.i(t));
}
function $t(e, t, n) {
  const { fragment: s, after_update: i } = e.$$;
  s && s.m(t, n), L(() => {
    const r = e.$$.on_mount.map(U).filter(q);
    e.$$.on_destroy ? e.$$.on_destroy.push(...r) : x(r), e.$$.on_mount = [];
  }), i.forEach(L);
}
function ft(e, t) {
  const n = e.$$;
  n.fragment !== null && (ct(n.after_update), x(n.on_destroy), n.fragment && n.fragment.d(t), n.on_destroy = n.fragment = null, n.ctx = []);
}
function lt(e, t) {
  e.$$.dirty[0] === -1 && (_.push(e), rt(), e.$$.dirty.fill(0)), e.$$.dirty[t / 31 | 0] |= 1 << t % 31;
}
function I(e, t, n, s, i, r, c = null, u = [-1]) {
  const $ = m;
  p(e);
  const o = e.$$ = {
    fragment: null,
    ctx: [],
    // state
    props: r,
    update: l,
    not_equal: i,
    bound: T(),
    // lifecycle
    on_mount: [],
    on_destroy: [],
    on_disconnect: [],
    before_update: [],
    after_update: [],
    context: new Map(t.context || ($ ? $.$$.context : [])),
    // everything else
    callbacks: T(),
    dirty: u,
    skip_bound: !1,
    root: t.target || $.$$.root
  };
  c && c(o.root);
  let g = !1;
  if (o.ctx = n ? n(e, t.props || {}, (a, P, ...B) => {
    const M = B.length ? B[0] : P;
    return o.ctx && i(o.ctx[a], o.ctx[a] = M) && (!o.skip_bound && o.bound[a] && o.bound[a](M), g && lt(e, a)), P;
  }) : [], o.update(), g = !0, x(o.before_update), o.fragment = s ? s(o.ctx) : !1, t.target) {
    if (t.hydrate) {
      const a = Z(t.target);
      o.fragment && o.fragment.l(a), a.forEach(k);
    } else
      o.fragment && o.fragment.c();
    t.intro && ut(e.$$.fragment), $t(e, t.target, t.anchor), z();
  }
  p($);
}
let H;
typeof HTMLElement == "function" && (H = class extends HTMLElement {
  constructor(t, n, s) {
    super();
    /** The Svelte component constructor */
    f(this, "$$ctor");
    /** Slots */
    f(this, "$$s");
    /** The Svelte component instance */
    f(this, "$$c");
    /** Whether or not the custom element is connected */
    f(this, "$$cn", !1);
    /** Component props data */
    f(this, "$$d", {});
    /** `true` if currently in the process of reflecting component props back to attributes */
    f(this, "$$r", !1);
    /** @type {Record<string, CustomElementPropDefinition>} Props definition (name, reflected, type etc) */
    f(this, "$$p_d", {});
    /** @type {Record<string, Function[]>} Event listeners */
    f(this, "$$l", {});
    /** @type {Map<Function, Function>} Event listener unsubscribe functions */
    f(this, "$$l_u", /* @__PURE__ */ new Map());
    this.$$ctor = t, this.$$s = n, s && this.attachShadow({ mode: "open" });
  }
  addEventListener(t, n, s) {
    if (this.$$l[t] = this.$$l[t] || [], this.$$l[t].push(n), this.$$c) {
      const i = this.$$c.$on(t, n);
      this.$$l_u.set(n, i);
    }
    super.addEventListener(t, n, s);
  }
  removeEventListener(t, n, s) {
    if (super.removeEventListener(t, n, s), this.$$c) {
      const i = this.$$l_u.get(n);
      i && (i(), this.$$l_u.delete(n));
    }
  }
  async connectedCallback() {
    if (this.$$cn = !0, !this.$$c) {
      let t = function(r) {
        return () => {
          let c;
          return {
            c: function() {
              c = E("slot"), r !== "default" && Y(c, "name", r);
            },
            /**
             * @param {HTMLElement} target
             * @param {HTMLElement} [anchor]
             */
            m: function(o, g) {
              N(o, c, g);
            },
            d: function(o) {
              o && k(c);
            }
          };
        };
      };
      if (await Promise.resolve(), !this.$$cn || this.$$c)
        return;
      const n = {}, s = tt(this);
      for (const r of this.$$s)
        r in s && (n[r] = [t(r)]);
      for (const r of this.attributes) {
        const c = this.$$g_p(r.name);
        c in this.$$d || (this.$$d[c] = y(c, r.value, this.$$p_d, "toProp"));
      }
      for (const r in this.$$p_d)
        !(r in this.$$d) && this[r] !== void 0 && (this.$$d[r] = this[r], delete this[r]);
      this.$$c = new this.$$ctor({
        target: this.shadowRoot || this,
        props: {
          ...this.$$d,
          $$slots: n,
          $$scope: {
            ctx: []
          }
        }
      });
      const i = () => {
        this.$$r = !0;
        for (const r in this.$$p_d)
          if (this.$$d[r] = this.$$c.$$.ctx[this.$$c.$$.props[r]], this.$$p_d[r].reflect) {
            const c = y(
              r,
              this.$$d[r],
              this.$$p_d,
              "toAttribute"
            );
            c == null ? this.removeAttribute(this.$$p_d[r].attribute || r) : this.setAttribute(this.$$p_d[r].attribute || r, c);
          }
        this.$$r = !1;
      };
      this.$$c.$$.after_update.push(i), i();
      for (const r in this.$$l)
        for (const c of this.$$l[r]) {
          const u = this.$$c.$on(r, c);
          this.$$l_u.set(c, u);
        }
      this.$$l = {};
    }
  }
  // We don't need this when working within Svelte code, but for compatibility of people using this outside of Svelte
  // and setting attributes through setAttribute etc, this is helpful
  attributeChangedCallback(t, n, s) {
    var i;
    this.$$r || (t = this.$$g_p(t), this.$$d[t] = y(t, s, this.$$p_d, "toProp"), (i = this.$$c) == null || i.$set({ [t]: this.$$d[t] }));
  }
  disconnectedCallback() {
    this.$$cn = !1, Promise.resolve().then(() => {
      !this.$$cn && this.$$c && (this.$$c.$destroy(), this.$$c = void 0);
    });
  }
  $$g_p(t) {
    return Object.keys(this.$$p_d).find(
      (n) => this.$$p_d[n].attribute === t || !this.$$p_d[n].attribute && n.toLowerCase() === t
    ) || t;
  }
});
function y(e, t, n, s) {
  var r;
  const i = (r = n[e]) == null ? void 0 : r.type;
  if (t = i === "Boolean" && typeof t != "boolean" ? t != null : t, !s || !n[e])
    return t;
  if (s === "toAttribute")
    switch (i) {
      case "Object":
      case "Array":
        return t == null ? null : JSON.stringify(t);
      case "Boolean":
        return t ? "" : null;
      case "Number":
        return t ?? null;
      default:
        return t;
    }
  else
    switch (i) {
      case "Object":
      case "Array":
        return t && JSON.parse(t);
      case "Boolean":
        return t;
      case "Number":
        return t != null ? +t : t;
      default:
        return t;
    }
}
function V(e, t, n, s, i, r) {
  let c = class extends H {
    constructor() {
      super(e, n, i), this.$$p_d = t;
    }
    static get observedAttributes() {
      return Object.keys(t).map(
        (u) => (t[u].attribute || u).toLowerCase()
      );
    }
  };
  return Object.keys(t).forEach((u) => {
    Object.defineProperty(c.prototype, u, {
      get() {
        return this.$$c && u in this.$$c ? this.$$c[u] : this.$$d[u];
      },
      set($) {
        var o;
        $ = y(u, $, t), this.$$d[u] = $, (o = this.$$c) == null || o.$set({ [u]: $ });
      }
    });
  }), s.forEach((u) => {
    Object.defineProperty(c.prototype, u, {
      get() {
        var $;
        return ($ = this.$$c) == null ? void 0 : $[u];
      }
    });
  }), e.element = /** @type {any} */
  c, c;
}
class D {
  constructor() {
    /**
     * ### PRIVATE API
     *
     * Do not use, may change at any time
     *
     * @type {any}
     */
    f(this, "$$");
    /**
     * ### PRIVATE API
     *
     * Do not use, may change at any time
     *
     * @type {any}
     */
    f(this, "$$set");
  }
  /** @returns {void} */
  $destroy() {
    ft(this, 1), this.$destroy = l;
  }
  /**
   * @template {Extract<keyof Events, string>} K
   * @param {K} type
   * @param {((e: Events[K]) => void) | null | undefined} callback
   * @returns {() => void}
   */
  $on(t, n) {
    if (!q(n))
      return l;
    const s = this.$$.callbacks[t] || (this.$$.callbacks[t] = []);
    return s.push(n), () => {
      const i = s.indexOf(n);
      i !== -1 && s.splice(i, 1);
    };
  }
  /**
   * @param {Partial<Props>} props
   * @returns {void}
   */
  $set(t) {
    this.$$set && !K(t) && (this.$$.skip_bound = !0, this.$$set(t), this.$$.skip_bound = !1);
  }
}
const at = "4";
typeof window < "u" && (window.__svelte || (window.__svelte = { v: /* @__PURE__ */ new Set() })).v.add(at);
const d = [];
function ht(e, t = l) {
  let n;
  const s = /* @__PURE__ */ new Set();
  function i(u) {
    if (A(e, u) && (e = u, n)) {
      const $ = !d.length;
      for (const o of s)
        o[1](), d.push(o, e);
      if ($) {
        for (let o = 0; o < d.length; o += 2)
          d[o][0](d[o + 1]);
        d.length = 0;
      }
    }
  }
  function r(u) {
    i(u(e));
  }
  function c(u, $ = l) {
    const o = [u, $];
    return s.add(o), s.size === 1 && (n = t(i, r) || l), u(e), () => {
      s.delete(o), s.size === 0 && n && (n(), n = null);
    };
  }
  return { set: i, update: r, subscribe: c };
}
const dt = "http://localhost:8099", _t = () => {
  const e = {}, { subscribe: t, set: n } = ht(e);
  return {
    subscribe: t,
    set: (s) => n(s),
    start: async ({ language: s } = {}) => {
      const i = new URLSearchParams();
      s && i.append("l", s);
      let r = `${dt}/search/start`;
      return i.toString() && (r += `?${i.toString()}`), await (await fetch(r, {
        method: "GET",
        headers: {
          "Content-Type": "application/json"
        }
      })).json();
    }
  };
}, O = _t();
function bt(e) {
  let t, n, s = JSON.stringify(
    /*$search*/
    e[0],
    null,
    2
  ) + "", i;
  return {
    c() {
      t = E("div"), n = E("pre"), i = j(s);
    },
    m(r, c) {
      N(r, t, c), w(t, n), w(n, i);
    },
    p(r, [c]) {
      c & /*$search*/
      1 && s !== (s = JSON.stringify(
        /*$search*/
        r[0],
        null,
        2
      ) + "") && v(i, s);
    },
    i: l,
    o: l,
    d(r) {
      r && k(t);
    }
  };
}
function pt(e, t, n) {
  let s;
  return W(e, O, (i) => n(0, s = i)), nt(async () => {
    let i = await O.start({ language: "it" });
    O.set(i);
  }), [s];
}
class mt extends D {
  constructor(t) {
    super(), I(this, t, pt, bt, A, {});
  }
}
customElements.define("stg-chat-search", V(mt, {}, [], [], !0));
function gt(e) {
  let t, n, s, i, r;
  return {
    c() {
      t = E("button"), n = j("count is "), s = j(
        /*count*/
        e[0]
      );
    },
    m(c, u) {
      N(c, t, u), w(t, n), w(t, s), i || (r = X(
        t,
        "click",
        /*increment*/
        e[1]
      ), i = !0);
    },
    p(c, [u]) {
      u & /*count*/
      1 && v(
        s,
        /*count*/
        c[0]
      );
    },
    i: l,
    o: l,
    d(c) {
      c && k(t), i = !1, r();
    }
  };
}
function yt(e, t, n) {
  let s = 0;
  return [s, () => {
    n(0, s += 1);
  }];
}
class wt extends D {
  constructor(t) {
    super(), I(this, t, yt, gt, A, {});
  }
}
customElements.define("stg-counter", V(wt, {}, [], [], !0));
export {
  mt as ChatSearch,
  wt as Counter
};
