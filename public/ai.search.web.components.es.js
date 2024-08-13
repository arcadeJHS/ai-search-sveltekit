var tt = Object.defineProperty;
var et = (e, t, n) => t in e ? tt(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n;
var f = (e, t, n) => et(e, typeof t != "symbol" ? t + "" : t, n);
function l() {
}
function z(e) {
  return e();
}
function M() {
  return /* @__PURE__ */ Object.create(null);
}
function O(e) {
  e.forEach(z);
}
function I(e) {
  return typeof e == "function";
}
function P(e, t) {
  return e != e ? t == t : e !== t || e && typeof e == "object" || typeof e == "function";
}
function nt(e) {
  return Object.keys(e).length === 0;
}
function st(e, ...t) {
  if (e == null) {
    for (const s of t)
      s(void 0);
    return l;
  }
  const n = e.subscribe(...t);
  return n.unsubscribe ? () => n.unsubscribe() : n;
}
function D(e, t, n) {
  e.$$.on_destroy.push(st(t, n));
}
function p(e, t) {
  e.appendChild(t);
}
function rt(e, t, n) {
  const s = it(e);
  if (!s.getElementById(t)) {
    const i = b("style");
    i.id = t, i.textContent = n, ot(s, i);
  }
}
function it(e) {
  if (!e) return document;
  const t = e.getRootNode ? e.getRootNode() : e.ownerDocument;
  return t && /** @type {ShadowRoot} */
  t.host ? (
    /** @type {ShadowRoot} */
    t
  ) : e.ownerDocument;
}
function ot(e, t) {
  return p(
    /** @type {Document} */
    e.head || e,
    t
  ), t.sheet;
}
function j(e, t, n) {
  e.insertBefore(t, n || null);
}
function w(e) {
  e.parentNode && e.parentNode.removeChild(e);
}
function b(e) {
  return document.createElement(e);
}
function N(e) {
  return document.createTextNode(e);
}
function ct() {
  return N(" ");
}
function ut() {
  return N("");
}
function H(e, t, n) {
  n == null ? e.removeAttribute(t) : e.getAttribute(t) !== n && e.setAttribute(t, n);
}
function at(e) {
  return Array.from(e.childNodes);
}
function V(e, t) {
  t = "" + t, e.data !== t && (e.data = /** @type {string} */
  t);
}
function ft(e) {
  const t = {};
  return e.childNodes.forEach(
    /** @param {Element} node */
    (n) => {
      t[n.slot || "default"] = !0;
    }
  ), t;
}
let y;
function m(e) {
  y = e;
}
function lt() {
  if (!y) throw new Error("Function called outside component initialization");
  return y;
}
function $t(e) {
  lt().$$.on_mount.push(e);
}
const _ = [], R = [];
let g = [];
const q = [], dt = /* @__PURE__ */ Promise.resolve();
let C = !1;
function ht() {
  C || (C = !0, dt.then(k));
}
function A(e) {
  g.push(e);
}
const B = /* @__PURE__ */ new Set();
let d = 0;
function k() {
  if (d !== 0)
    return;
  const e = y;
  do {
    try {
      for (; d < _.length; ) {
        const t = _[d];
        d++, m(t), _t(t.$$);
      }
    } catch (t) {
      throw _.length = 0, d = 0, t;
    }
    for (m(null), _.length = 0, d = 0; R.length; ) R.pop()();
    for (let t = 0; t < g.length; t += 1) {
      const n = g[t];
      B.has(n) || (B.add(n), n());
    }
    g.length = 0;
  } while (_.length);
  for (; q.length; )
    q.pop()();
  C = !1, B.clear(), m(e);
}
function _t(e) {
  if (e.fragment !== null) {
    e.update(), O(e.before_update);
    const t = e.dirty;
    e.dirty = [-1], e.fragment && e.fragment.p(e.ctx, t), e.after_update.forEach(A);
  }
}
function pt(e) {
  const t = [], n = [];
  g.forEach((s) => e.indexOf(s) === -1 ? t.push(s) : n.push(s)), n.forEach((s) => s()), g = t;
}
const S = /* @__PURE__ */ new Set();
let gt;
function F(e, t) {
  e && e.i && (S.delete(e), e.i(t));
}
function bt(e, t, n, s) {
  if (e && e.o) {
    if (S.has(e)) return;
    S.add(e), gt.c.push(() => {
      S.delete(e);
    }), e.o(t);
  }
}
function mt(e) {
  e && e.c();
}
function G(e, t, n) {
  const { fragment: s, after_update: i } = e.$$;
  s && s.m(t, n), A(() => {
    const r = e.$$.on_mount.map(z).filter(I);
    e.$$.on_destroy ? e.$$.on_destroy.push(...r) : O(r), e.$$.on_mount = [];
  }), i.forEach(A);
}
function K(e, t) {
  const n = e.$$;
  n.fragment !== null && (pt(n.after_update), O(n.on_destroy), n.fragment && n.fragment.d(t), n.on_destroy = n.fragment = null, n.ctx = []);
}
function yt(e, t) {
  e.$$.dirty[0] === -1 && (_.push(e), ht(), e.$$.dirty.fill(0)), e.$$.dirty[t / 31 | 0] |= 1 << t % 31;
}
function Q(e, t, n, s, i, r, o = null, u = [-1]) {
  const a = y;
  m(e);
  const c = e.$$ = {
    fragment: null,
    ctx: [],
    // state
    props: r,
    update: l,
    not_equal: i,
    bound: M(),
    // lifecycle
    on_mount: [],
    on_destroy: [],
    on_disconnect: [],
    before_update: [],
    after_update: [],
    context: new Map(t.context || (a ? a.$$.context : [])),
    // everything else
    callbacks: M(),
    dirty: u,
    skip_bound: !1,
    root: t.target || a.$$.root
  };
  o && o(c.root);
  let x = !1;
  if (c.ctx = n ? n(e, t.props || {}, ($, U, ...T) => {
    const v = T.length ? T[0] : U;
    return c.ctx && i(c.ctx[$], c.ctx[$] = v) && (!c.skip_bound && c.bound[$] && c.bound[$](v), x && yt(e, $)), U;
  }) : [], c.update(), x = !0, O(c.before_update), c.fragment = s ? s(c.ctx) : !1, t.target) {
    if (t.hydrate) {
      const $ = at(t.target);
      c.fragment && c.fragment.l($), $.forEach(w);
    } else
      c.fragment && c.fragment.c();
    t.intro && F(e.$$.fragment), G(e, t.target, t.anchor), k();
  }
  m(a);
}
let W;
typeof HTMLElement == "function" && (W = class extends HTMLElement {
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
          let o;
          return {
            c: function() {
              o = b("slot"), r !== "default" && H(o, "name", r);
            },
            /**
             * @param {HTMLElement} target
             * @param {HTMLElement} [anchor]
             */
            m: function(c, x) {
              j(c, o, x);
            },
            d: function(c) {
              c && w(o);
            }
          };
        };
      };
      if (await Promise.resolve(), !this.$$cn || this.$$c)
        return;
      const n = {}, s = ft(this);
      for (const r of this.$$s)
        r in s && (n[r] = [t(r)]);
      for (const r of this.attributes) {
        const o = this.$$g_p(r.name);
        o in this.$$d || (this.$$d[o] = E(o, r.value, this.$$p_d, "toProp"));
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
            const o = E(
              r,
              this.$$d[r],
              this.$$p_d,
              "toAttribute"
            );
            o == null ? this.removeAttribute(this.$$p_d[r].attribute || r) : this.setAttribute(this.$$p_d[r].attribute || r, o);
          }
        this.$$r = !1;
      };
      this.$$c.$$.after_update.push(i), i();
      for (const r in this.$$l)
        for (const o of this.$$l[r]) {
          const u = this.$$c.$on(r, o);
          this.$$l_u.set(o, u);
        }
      this.$$l = {};
    }
  }
  // We don't need this when working within Svelte code, but for compatibility of people using this outside of Svelte
  // and setting attributes through setAttribute etc, this is helpful
  attributeChangedCallback(t, n, s) {
    var i;
    this.$$r || (t = this.$$g_p(t), this.$$d[t] = E(t, s, this.$$p_d, "toProp"), (i = this.$$c) == null || i.$set({ [t]: this.$$d[t] }));
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
function E(e, t, n, s) {
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
function X(e, t, n, s, i, r) {
  let o = class extends W {
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
    Object.defineProperty(o.prototype, u, {
      get() {
        return this.$$c && u in this.$$c ? this.$$c[u] : this.$$d[u];
      },
      set(a) {
        var c;
        a = E(u, a, t), this.$$d[u] = a, (c = this.$$c) == null || c.$set({ [u]: a });
      }
    });
  }), s.forEach((u) => {
    Object.defineProperty(o.prototype, u, {
      get() {
        var a;
        return (a = this.$$c) == null ? void 0 : a[u];
      }
    });
  }), e.element = /** @type {any} */
  o, o;
}
class Y {
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
    K(this, 1), this.$destroy = l;
  }
  /**
   * @template {Extract<keyof Events, string>} K
   * @param {K} type
   * @param {((e: Events[K]) => void) | null | undefined} callback
   * @returns {() => void}
   */
  $on(t, n) {
    if (!I(n))
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
    this.$$set && !nt(t) && (this.$$.skip_bound = !0, this.$$set(t), this.$$.skip_bound = !1);
  }
}
const wt = "4";
typeof window < "u" && (window.__svelte || (window.__svelte = { v: /* @__PURE__ */ new Set() })).v.add(wt);
const h = [];
function xt(e, t = l) {
  let n;
  const s = /* @__PURE__ */ new Set();
  function i(u) {
    if (P(e, u) && (e = u, n)) {
      const a = !h.length;
      for (const c of s)
        c[1](), h.push(c, e);
      if (a) {
        for (let c = 0; c < h.length; c += 2)
          h[c][0](h[c + 1]);
        h.length = 0;
      }
    }
  }
  function r(u) {
    i(u(e));
  }
  function o(u, a = l) {
    const c = [u, a];
    return s.add(c), s.size === 1 && (n = t(i, r) || l), u(e), () => {
      s.delete(c), s.size === 0 && n && (n(), n = null);
    };
  }
  return { set: i, update: r, subscribe: o };
}
const St = async ({ apiBaseUrl: e, language: t = "en" }) => {
  let n = `${e}/search/start`;
  const s = new URLSearchParams();
  return t && s.append("l", t), s.toString() && (n += `?${s.toString()}`), await (await fetch(n, {
    method: "GET",
    headers: {
      "Content-Type": "application/json"
    }
  })).json();
}, Et = () => {
  const { set: e, update: t, subscribe: n } = xt();
  return {
    subscribe: n,
    set: e,
    update: t,
    start: async ({ apiBaseUrl: s, language: i }) => {
      if (!s)
        throw new Error("apiBaseUrl is required");
      const r = await St({ apiBaseUrl: s, language: i });
      return e(r), r;
    }
  };
}, L = Et();
function J(e) {
  let t, n, s = (
    /*$searchStore*/
    e[0].session + ""
  ), i;
  return {
    c() {
      t = b("div"), n = b("pre"), i = N(s);
    },
    m(r, o) {
      j(r, t, o), p(t, n), p(n, i);
    },
    p(r, o) {
      o & /*$searchStore*/
      1 && s !== (s = /*$searchStore*/
      r[0].session + "") && V(i, s);
    },
    d(r) {
      r && w(t);
    }
  };
}
function kt(e) {
  let t, n = (
    /*$searchStore*/
    e[0] && J(e)
  );
  return {
    c() {
      n && n.c(), t = ut();
    },
    m(s, i) {
      n && n.m(s, i), j(s, t, i);
    },
    p(s, [i]) {
      /*$searchStore*/
      s[0] ? n ? n.p(s, i) : (n = J(s), n.c(), n.m(t.parentNode, t)) : n && (n.d(1), n = null);
    },
    i: l,
    o: l,
    d(s) {
      s && w(t), n && n.d(s);
    }
  };
}
function Ot(e, t, n) {
  let s;
  return D(e, L, (i) => n(0, s = i)), [s];
}
class Z extends Y {
  constructor(t) {
    super(), Q(this, t, Ot, kt, P, {});
  }
}
X(Z, {}, [], [], !0);
function jt(e) {
  rt(e, "svelte-aryroy", ".ai-search-container.svelte-aryroy{padding:0.5rem;border:1px solid #ccc}");
}
function Nt(e) {
  let t, n, s = JSON.stringify(
    /*$searchStore*/
    e[0],
    null,
    2
  ) + "", i, r, o, u;
  return o = new Z({}), {
    c() {
      t = b("div"), n = b("pre"), i = N(s), r = ct(), mt(o.$$.fragment), H(t, "class", "ai-search-container svelte-aryroy");
    },
    m(a, c) {
      j(a, t, c), p(t, n), p(n, i), p(t, r), G(o, t, null), u = !0;
    },
    p(a, [c]) {
      (!u || c & /*$searchStore*/
      1) && s !== (s = JSON.stringify(
        /*$searchStore*/
        a[0],
        null,
        2
      ) + "") && V(i, s);
    },
    i(a) {
      u || (F(o.$$.fragment, a), u = !0);
    },
    o(a) {
      bt(o.$$.fragment, a), u = !1;
    },
    d(a) {
      a && w(t), K(o);
    }
  };
}
function Bt(e, t, n) {
  let s;
  D(e, L, (o) => n(0, s = o));
  let { apiBaseUrl: i } = t, { language: r } = t;
  return $t(async () => {
    await L.start({ apiBaseUrl: i, language: r });
  }), e.$$set = (o) => {
    "apiBaseUrl" in o && n(1, i = o.apiBaseUrl), "language" in o && n(2, r = o.language);
  }, [s, i, r];
}
class Ct extends Y {
  constructor(t) {
    super(), Q(this, t, Bt, Nt, P, { apiBaseUrl: 1, language: 2 }, jt);
  }
  get apiBaseUrl() {
    return this.$$.ctx[1];
  }
  set apiBaseUrl(t) {
    this.$$set({ apiBaseUrl: t }), k();
  }
  get language() {
    return this.$$.ctx[2];
  }
  set language(t) {
    this.$$set({ language: t }), k();
  }
}
customElements.define("stg-ai-search-container", X(Ct, { apiBaseUrl: { reflect: !0, type: "String", attribute: "api-base-url" }, language: { reflect: !0, type: "String", attribute: "language" } }, [], [], !0));
export {
  Ct as AiSearchContainer
};
