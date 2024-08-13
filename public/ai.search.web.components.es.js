var bt = Object.defineProperty;
var _t = (e, t, n) => t in e ? bt(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n;
var g = (e, t, n) => _t(e, typeof t != "symbol" ? t + "" : t, n);
function $() {
}
function ut(e) {
  return e();
}
function Y() {
  return /* @__PURE__ */ Object.create(null);
}
function j(e) {
  e.forEach(ut);
}
function lt(e) {
  return typeof e == "function";
}
function k(e, t) {
  return e != e ? t == t : e !== t || e && typeof e == "object" || typeof e == "function";
}
function vt(e) {
  return Object.keys(e).length === 0;
}
function at(e, ...t) {
  if (e == null) {
    for (const s of t)
      s(void 0);
    return $;
  }
  const n = e.subscribe(...t);
  return n.unsubscribe ? () => n.unsubscribe() : n;
}
function yt(e) {
  let t;
  return at(e, (n) => t = n)(), t;
}
function wt(e, t, n) {
  e.$$.on_destroy.push(at(t, n));
}
function h(e, t) {
  e.appendChild(t);
}
function F(e, t, n) {
  const s = xt(e);
  if (!s.getElementById(t)) {
    const r = d("style");
    r.id = t, r.textContent = n, St(s, r);
  }
}
function xt(e) {
  if (!e) return document;
  const t = e.getRootNode ? e.getRootNode() : e.ownerDocument;
  return t && /** @type {ShadowRoot} */
  t.host ? (
    /** @type {ShadowRoot} */
    t
  ) : e.ownerDocument;
}
function St(e, t) {
  return h(
    /** @type {Document} */
    e.head || e,
    t
  ), t.sheet;
}
function b(e, t, n) {
  e.insertBefore(t, n || null);
}
function p(e) {
  e.parentNode && e.parentNode.removeChild(e);
}
function ft(e, t) {
  for (let n = 0; n < e.length; n += 1)
    e[n] && e[n].d(t);
}
function d(e) {
  return document.createElement(e);
}
function J(e) {
  return document.createTextNode(e);
}
function N() {
  return J(" ");
}
function Z(e, t, n, s) {
  return e.addEventListener(t, n, s), () => e.removeEventListener(t, n, s);
}
function Et(e) {
  return function(t) {
    return t.preventDefault(), e.call(this, t);
  };
}
function m(e, t, n) {
  n == null ? e.removeAttribute(t) : e.getAttribute(t) !== n && e.setAttribute(t, n);
}
function jt(e) {
  return Array.from(e.childNodes);
}
function G(e, t) {
  t = "" + t, e.data !== t && (e.data = /** @type {string} */
  t);
}
function tt(e, t) {
  e.value = t ?? "";
}
function ht(e, t, n, s) {
  e.style.setProperty(t, n, "");
}
function kt(e, t, { bubbles: n = !1, cancelable: s = !1 } = {}) {
  return new CustomEvent(e, { detail: t, bubbles: n, cancelable: s });
}
function Ot(e) {
  const t = {};
  return e.childNodes.forEach(
    /** @param {Element} node */
    (n) => {
      t[n.slot || "default"] = !0;
    }
  ), t;
}
let C;
function O(e) {
  C = e;
}
function dt() {
  if (!C) throw new Error("Function called outside component initialization");
  return C;
}
function At(e) {
  dt().$$.on_mount.push(e);
}
function Ct() {
  const e = dt();
  return (t, n, { cancelable: s = !1 } = {}) => {
    const r = e.$$.callbacks[t];
    if (r) {
      const o = kt(
        /** @type {string} */
        t,
        n,
        { cancelable: s }
      );
      return r.slice().forEach((u) => {
        u.call(e, o);
      }), !o.defaultPrevented;
    }
    return !0;
  };
}
function Nt(e, t) {
  const n = e.$$.callbacks[t.type];
  n && n.slice().forEach((s) => s.call(this, t));
}
const S = [], et = [];
let E = [];
const nt = [], Ut = /* @__PURE__ */ Promise.resolve();
let H = !1;
function Bt() {
  H || (H = !0, Ut.then(y));
}
function V(e) {
  E.push(e);
}
const D = /* @__PURE__ */ new Set();
let w = 0;
function y() {
  if (w !== 0)
    return;
  const e = C;
  do {
    try {
      for (; w < S.length; ) {
        const t = S[w];
        w++, O(t), Lt(t.$$);
      }
    } catch (t) {
      throw S.length = 0, w = 0, t;
    }
    for (O(null), S.length = 0, w = 0; et.length; ) et.pop()();
    for (let t = 0; t < E.length; t += 1) {
      const n = E[t];
      D.has(n) || (D.add(n), n());
    }
    E.length = 0;
  } while (S.length);
  for (; nt.length; )
    nt.pop()();
  H = !1, D.clear(), O(e);
}
function Lt(e) {
  if (e.fragment !== null) {
    e.update(), j(e.before_update);
    const t = e.dirty;
    e.dirty = [-1], e.fragment && e.fragment.p(e.ctx, t), e.after_update.forEach(V);
  }
}
function Pt(e) {
  const t = [], n = [];
  E.forEach((s) => e.indexOf(s) === -1 ? t.push(s) : n.push(s)), n.forEach((s) => s()), E = t;
}
const I = /* @__PURE__ */ new Set();
let _;
function It() {
  _ = {
    r: 0,
    c: [],
    p: _
    // parent group
  };
}
function Mt() {
  _.r || j(_.c), _ = _.p;
}
function v(e, t) {
  e && e.i && (I.delete(e), e.i(t));
}
function A(e, t, n, s) {
  if (e && e.o) {
    if (I.has(e)) return;
    I.add(e), _.c.push(() => {
      I.delete(e), s && (n && e.d(1), s());
    }), e.o(t);
  } else s && s();
}
function T(e) {
  return (e == null ? void 0 : e.length) !== void 0 ? e : Array.from(e);
}
function K(e) {
  e && e.c();
}
function R(e, t, n) {
  const { fragment: s, after_update: r } = e.$$;
  s && s.m(t, n), V(() => {
    const o = e.$$.on_mount.map(ut).filter(lt);
    e.$$.on_destroy ? e.$$.on_destroy.push(...o) : j(o), e.$$.on_mount = [];
  }), r.forEach(V);
}
function q(e, t) {
  const n = e.$$;
  n.fragment !== null && (Pt(n.after_update), j(n.on_destroy), n.fragment && n.fragment.d(t), n.on_destroy = n.fragment = null, n.ctx = []);
}
function Tt(e, t) {
  e.$$.dirty[0] === -1 && (S.push(e), Bt(), e.$$.dirty.fill(0)), e.$$.dirty[t / 31 | 0] |= 1 << t % 31;
}
function U(e, t, n, s, r, o, u = null, i = [-1]) {
  const c = C;
  O(e);
  const l = e.$$ = {
    fragment: null,
    ctx: [],
    // state
    props: o,
    update: $,
    not_equal: r,
    bound: Y(),
    // lifecycle
    on_mount: [],
    on_destroy: [],
    on_disconnect: [],
    before_update: [],
    after_update: [],
    context: new Map(t.context || (c ? c.$$.context : [])),
    // everything else
    callbacks: Y(),
    dirty: i,
    skip_bound: !1,
    root: t.target || c.$$.root
  };
  u && u(l.root);
  let a = !1;
  if (l.ctx = n ? n(e, t.props || {}, (f, Q, ...W) => {
    const X = W.length ? W[0] : Q;
    return l.ctx && r(l.ctx[f], l.ctx[f] = X) && (!l.skip_bound && l.bound[f] && l.bound[f](X), a && Tt(e, f)), Q;
  }) : [], l.update(), a = !0, j(l.before_update), l.fragment = s ? s(l.ctx) : !1, t.target) {
    if (t.hydrate) {
      const f = jt(t.target);
      l.fragment && l.fragment.l(f), f.forEach(p);
    } else
      l.fragment && l.fragment.c();
    t.intro && v(e.$$.fragment), R(e, t.target, t.anchor), y();
  }
  O(c);
}
let $t;
typeof HTMLElement == "function" && ($t = class extends HTMLElement {
  constructor(t, n, s) {
    super();
    /** The Svelte component constructor */
    g(this, "$$ctor");
    /** Slots */
    g(this, "$$s");
    /** The Svelte component instance */
    g(this, "$$c");
    /** Whether or not the custom element is connected */
    g(this, "$$cn", !1);
    /** Component props data */
    g(this, "$$d", {});
    /** `true` if currently in the process of reflecting component props back to attributes */
    g(this, "$$r", !1);
    /** @type {Record<string, CustomElementPropDefinition>} Props definition (name, reflected, type etc) */
    g(this, "$$p_d", {});
    /** @type {Record<string, Function[]>} Event listeners */
    g(this, "$$l", {});
    /** @type {Map<Function, Function>} Event listener unsubscribe functions */
    g(this, "$$l_u", /* @__PURE__ */ new Map());
    this.$$ctor = t, this.$$s = n, s && this.attachShadow({ mode: "open" });
  }
  addEventListener(t, n, s) {
    if (this.$$l[t] = this.$$l[t] || [], this.$$l[t].push(n), this.$$c) {
      const r = this.$$c.$on(t, n);
      this.$$l_u.set(n, r);
    }
    super.addEventListener(t, n, s);
  }
  removeEventListener(t, n, s) {
    if (super.removeEventListener(t, n, s), this.$$c) {
      const r = this.$$l_u.get(n);
      r && (r(), this.$$l_u.delete(n));
    }
  }
  async connectedCallback() {
    if (this.$$cn = !0, !this.$$c) {
      let t = function(o) {
        return () => {
          let u;
          return {
            c: function() {
              u = d("slot"), o !== "default" && m(u, "name", o);
            },
            /**
             * @param {HTMLElement} target
             * @param {HTMLElement} [anchor]
             */
            m: function(l, a) {
              b(l, u, a);
            },
            d: function(l) {
              l && p(u);
            }
          };
        };
      };
      if (await Promise.resolve(), !this.$$cn || this.$$c)
        return;
      const n = {}, s = Ot(this);
      for (const o of this.$$s)
        o in s && (n[o] = [t(o)]);
      for (const o of this.attributes) {
        const u = this.$$g_p(o.name);
        u in this.$$d || (this.$$d[u] = M(u, o.value, this.$$p_d, "toProp"));
      }
      for (const o in this.$$p_d)
        !(o in this.$$d) && this[o] !== void 0 && (this.$$d[o] = this[o], delete this[o]);
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
      const r = () => {
        this.$$r = !0;
        for (const o in this.$$p_d)
          if (this.$$d[o] = this.$$c.$$.ctx[this.$$c.$$.props[o]], this.$$p_d[o].reflect) {
            const u = M(
              o,
              this.$$d[o],
              this.$$p_d,
              "toAttribute"
            );
            u == null ? this.removeAttribute(this.$$p_d[o].attribute || o) : this.setAttribute(this.$$p_d[o].attribute || o, u);
          }
        this.$$r = !1;
      };
      this.$$c.$$.after_update.push(r), r();
      for (const o in this.$$l)
        for (const u of this.$$l[o]) {
          const i = this.$$c.$on(o, u);
          this.$$l_u.set(u, i);
        }
      this.$$l = {};
    }
  }
  // We don't need this when working within Svelte code, but for compatibility of people using this outside of Svelte
  // and setting attributes through setAttribute etc, this is helpful
  attributeChangedCallback(t, n, s) {
    var r;
    this.$$r || (t = this.$$g_p(t), this.$$d[t] = M(t, s, this.$$p_d, "toProp"), (r = this.$$c) == null || r.$set({ [t]: this.$$d[t] }));
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
function M(e, t, n, s) {
  var o;
  const r = (o = n[e]) == null ? void 0 : o.type;
  if (t = r === "Boolean" && typeof t != "boolean" ? t != null : t, !s || !n[e])
    return t;
  if (s === "toAttribute")
    switch (r) {
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
    switch (r) {
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
function B(e, t, n, s, r, o) {
  let u = class extends $t {
    constructor() {
      super(e, n, r), this.$$p_d = t;
    }
    static get observedAttributes() {
      return Object.keys(t).map(
        (i) => (t[i].attribute || i).toLowerCase()
      );
    }
  };
  return Object.keys(t).forEach((i) => {
    Object.defineProperty(u.prototype, i, {
      get() {
        return this.$$c && i in this.$$c ? this.$$c[i] : this.$$d[i];
      },
      set(c) {
        var l;
        c = M(i, c, t), this.$$d[i] = c, (l = this.$$c) == null || l.$set({ [i]: c });
      }
    });
  }), s.forEach((i) => {
    Object.defineProperty(u.prototype, i, {
      get() {
        var c;
        return (c = this.$$c) == null ? void 0 : c[i];
      }
    });
  }), e.element = /** @type {any} */
  u, u;
}
class L {
  constructor() {
    /**
     * ### PRIVATE API
     *
     * Do not use, may change at any time
     *
     * @type {any}
     */
    g(this, "$$");
    /**
     * ### PRIVATE API
     *
     * Do not use, may change at any time
     *
     * @type {any}
     */
    g(this, "$$set");
  }
  /** @returns {void} */
  $destroy() {
    q(this, 1), this.$destroy = $;
  }
  /**
   * @template {Extract<keyof Events, string>} K
   * @param {K} type
   * @param {((e: Events[K]) => void) | null | undefined} callback
   * @returns {() => void}
   */
  $on(t, n) {
    if (!lt(n))
      return $;
    const s = this.$$.callbacks[t] || (this.$$.callbacks[t] = []);
    return s.push(n), () => {
      const r = s.indexOf(n);
      r !== -1 && s.splice(r, 1);
    };
  }
  /**
   * @param {Partial<Props>} props
   * @returns {void}
   */
  $set(t) {
    this.$$set && !vt(t) && (this.$$.skip_bound = !0, this.$$set(t), this.$$.skip_bound = !1);
  }
}
const zt = "4";
typeof window < "u" && (window.__svelte || (window.__svelte = { v: /* @__PURE__ */ new Set() })).v.add(zt);
const x = [];
function Jt(e, t = $) {
  let n;
  const s = /* @__PURE__ */ new Set();
  function r(i) {
    if (k(e, i) && (e = i, n)) {
      const c = !x.length;
      for (const l of s)
        l[1](), x.push(l, e);
      if (c) {
        for (let l = 0; l < x.length; l += 2)
          x[l][0](x[l + 1]);
        x.length = 0;
      }
    }
  }
  function o(i) {
    r(i(e));
  }
  function u(i, c = $) {
    const l = [i, c];
    return s.add(l), s.size === 1 && (n = t(r, o) || $), i(e), () => {
      s.delete(l), s.size === 0 && n && (n(), n = null);
    };
  }
  return { set: r, update: o, subscribe: u };
}
var z = /* @__PURE__ */ ((e) => (e.User = "user", e.Agent = "agent", e))(z || {});
const Rt = async (e, { language: t = "en" }) => {
  let n = `${e}/search/start`;
  const s = new URLSearchParams();
  return t && s.append("l", t), s.toString() && (n += `?${s.toString()}`), await (await fetch(n, {
    method: "GET",
    headers: {
      "Content-Type": "application/json"
    }
  })).json();
}, qt = async (e, { session: t, message: n }) => {
  const s = `${e}/search/message/${t}`;
  return await (await fetch(s, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      message: n
    })
  })).json();
}, Dt = () => {
  let e;
  const t = Jt({
    session: null,
    l: null,
    messages: [],
    filters: [],
    selections: []
  });
  return {
    subscribe: t.subscribe,
    set: t.set,
    update: t.update,
    start: async (n, { language: s }) => {
      if (!n)
        throw new Error("apiBaseUrl is required");
      e = n;
      const r = await Rt(e, {
        language: s
      }), { session: o, l: u, message: i, filters: c, selection: l } = r, a = {
        role: z.Agent,
        content: i
      };
      return t.update((f) => (f.session = o, f.l = u, f.messages = [...f.messages, a], f.filters = c, f.selections = l, f)), r;
    },
    addMessage: (n) => {
      t.update((s) => (s.messages = [...s.messages, n], s));
    },
    search: async (n) => {
      const r = yt(t).session;
      if (!r)
        throw new Error("Session is required");
      const o = await qt(e, {
        session: r,
        message: n
      }), { l: u, message: i, filters: c, selection: l } = o, a = {
        role: z.Agent,
        content: i
      };
      return t.update((f) => (f.l = u, f.messages = [...f.messages, a], f.filters = c, f.selections = l, f)), o;
    }
  };
}, P = Dt();
function Ht(e) {
  let t, n, s;
  return {
    c() {
      t = d("div"), n = d("pre"), s = J(
        /*session*/
        e[0]
      );
    },
    m(r, o) {
      b(r, t, o), h(t, n), h(n, s);
    },
    p(r, [o]) {
      o & /*session*/
      1 && G(
        s,
        /*session*/
        r[0]
      );
    },
    i: $,
    o: $,
    d(r) {
      r && p(t);
    }
  };
}
function Vt(e, t, n) {
  let { session: s } = t;
  return e.$$set = (r) => {
    "session" in r && n(0, s = r.session);
  }, [s];
}
class Ft extends L {
  constructor(t) {
    super(), U(this, t, Vt, Ht, k, { session: 0 });
  }
  get session() {
    return this.$$.ctx[0];
  }
  set session(t) {
    this.$$set({ session: t }), y();
  }
}
B(Ft, { session: {} }, [], [], !0);
function Gt(e) {
  F(e, "svelte-sjuln4", ".ai-chat-user-input-form.svelte-sjuln4{display:flex;justify-content:space-between;padding-top:1rem}.ai-chat-user-input-form-input.svelte-sjuln4{display:flex;flex-grow:1;line-height:2em;padding:0 0.5rem;font-family:var(--font-body);font-size:0.8em;border:1px solid var(--color-text);border-top-left-radius:4px;border-bottom-left-radius:4px}.ai-chat-user-input-form-button.svelte-sjuln4{margin-left:0.1rem;background:white;font-family:var(--font-body);font-size:0.8em;border:1px solid var(--color-text);border-top-right-radius:4px;border-bottom-right-radius:4px}");
}
function Kt(e) {
  let t, n, s, r, o, u;
  return {
    c() {
      t = d("form"), n = d("input"), s = N(), r = d("button"), r.textContent = "Ask AI", m(n, "class", "ai-chat-user-input-form-input svelte-sjuln4"), m(r, "type", "submit"), m(r, "class", "ai-chat-user-input-form-button svelte-sjuln4"), m(t, "class", "ai-chat-user-input-form svelte-sjuln4");
    },
    m(i, c) {
      b(i, t, c), h(t, n), tt(
        n,
        /*userInput*/
        e[0]
      ), h(t, s), h(t, r), o || (u = [
        Z(
          n,
          "input",
          /*input_input_handler*/
          e[2]
        ),
        Z(t, "submit", Et(
          /*submit_handler*/
          e[3]
        ))
      ], o = !0);
    },
    p(i, [c]) {
      c & /*userInput*/
      1 && n.value !== /*userInput*/
      i[0] && tt(
        n,
        /*userInput*/
        i[0]
      );
    },
    i: $,
    o: $,
    d(i) {
      i && p(t), o = !1, j(u);
    }
  };
}
function Qt(e, t, n) {
  const s = Ct();
  let r;
  const o = (c) => {
    r && (s("userInput", { content: c }), n(0, r = void 0));
  };
  function u() {
    r = this.value, n(0, r);
  }
  return [r, o, u, () => {
    o(r);
  }];
}
class gt extends L {
  constructor(t) {
    super(), U(this, t, Qt, Kt, k, {}, Gt);
  }
}
B(gt, {}, [], [], !0);
function Wt(e) {
  F(e, "svelte-uhbklr", ".ai-chat.svelte-uhbklr{display:flex;flex-direction:column;flex-grow:1;justify-content:space-between}.ai-chat-messages.svelte-uhbklr{padding-bottom:1rem;overflow-y:auto;flex-grow:1}");
}
function st(e, t, n) {
  const s = e.slice();
  return s[2] = t[n], s;
}
function rt(e) {
  let t, n, s = JSON.stringify(
    /*message*/
    e[2],
    null,
    2
  ) + "", r, o;
  return {
    c() {
      t = d("div"), n = d("pre"), r = J(s), o = N(), ht(t, "margin", "1rem 0");
    },
    m(u, i) {
      b(u, t, i), h(t, n), h(n, r), h(t, o);
    },
    p(u, i) {
      i & /*messages*/
      1 && s !== (s = JSON.stringify(
        /*message*/
        u[2],
        null,
        2
      ) + "") && G(r, s);
    },
    d(u) {
      u && p(t);
    }
  };
}
function Xt(e) {
  let t, n, s, r, o, u = T(
    /*messages*/
    e[0]
  ), i = [];
  for (let c = 0; c < u.length; c += 1)
    i[c] = rt(st(e, u, c));
  return r = new gt({}), r.$on(
    "userInput",
    /*userInput_handler*/
    e[1]
  ), {
    c() {
      t = d("div"), n = d("div");
      for (let c = 0; c < i.length; c += 1)
        i[c].c();
      s = N(), K(r.$$.fragment), m(n, "class", "ai-chat-messages svelte-uhbklr"), m(t, "class", "ai-chat svelte-uhbklr");
    },
    m(c, l) {
      b(c, t, l), h(t, n);
      for (let a = 0; a < i.length; a += 1)
        i[a] && i[a].m(n, null);
      h(t, s), R(r, t, null), o = !0;
    },
    p(c, [l]) {
      if (l & /*JSON, messages*/
      1) {
        u = T(
          /*messages*/
          c[0]
        );
        let a;
        for (a = 0; a < u.length; a += 1) {
          const f = st(c, u, a);
          i[a] ? i[a].p(f, l) : (i[a] = rt(f), i[a].c(), i[a].m(n, null));
        }
        for (; a < i.length; a += 1)
          i[a].d(1);
        i.length = u.length;
      }
    },
    i(c) {
      o || (v(r.$$.fragment, c), o = !0);
    },
    o(c) {
      A(r.$$.fragment, c), o = !1;
    },
    d(c) {
      c && p(t), ft(i, c), q(r);
    }
  };
}
function Yt(e, t, n) {
  let { messages: s } = t;
  function r(o) {
    Nt.call(this, e, o);
  }
  return e.$$set = (o) => {
    "messages" in o && n(0, s = o.messages);
  }, [s, r];
}
class mt extends L {
  constructor(t) {
    super(), U(this, t, Yt, Xt, k, { messages: 0 }, Wt);
  }
  get messages() {
    return this.$$.ctx[0];
  }
  set messages(t) {
    this.$$set({ messages: t }), y();
  }
}
B(mt, { messages: {} }, [], [], !0);
function it(e, t, n) {
  const s = e.slice();
  return s[1] = t[n], s;
}
function ot(e) {
  let t, n, s = JSON.stringify(
    /*result*/
    e[1],
    null,
    2
  ) + "", r, o;
  return {
    c() {
      t = d("div"), n = d("pre"), r = J(s), o = N(), ht(t, "margin", "1rem 0");
    },
    m(u, i) {
      b(u, t, i), h(t, n), h(n, r), h(t, o);
    },
    p(u, i) {
      i & /*results*/
      1 && s !== (s = JSON.stringify(
        /*result*/
        u[1],
        null,
        2
      ) + "") && G(r, s);
    },
    d(u) {
      u && p(t);
    }
  };
}
function Zt(e) {
  let t, n, s = T(
    /*results*/
    e[0]
  ), r = [];
  for (let o = 0; o < s.length; o += 1)
    r[o] = ot(it(e, s, o));
  return {
    c() {
      t = d("div"), n = d("div");
      for (let o = 0; o < r.length; o += 1)
        r[o].c();
    },
    m(o, u) {
      b(o, t, u), h(t, n);
      for (let i = 0; i < r.length; i += 1)
        r[i] && r[i].m(n, null);
    },
    p(o, [u]) {
      if (u & /*JSON, results*/
      1) {
        s = T(
          /*results*/
          o[0]
        );
        let i;
        for (i = 0; i < s.length; i += 1) {
          const c = it(o, s, i);
          r[i] ? r[i].p(c, u) : (r[i] = ot(c), r[i].c(), r[i].m(n, null));
        }
        for (; i < r.length; i += 1)
          r[i].d(1);
        r.length = s.length;
      }
    },
    i: $,
    o: $,
    d(o) {
      o && p(t), ft(r, o);
    }
  };
}
function te(e, t, n) {
  let { results: s } = t;
  return e.$$set = (r) => {
    "results" in r && n(0, s = r.results);
  }, [s];
}
class pt extends L {
  constructor(t) {
    super(), U(this, t, te, Zt, k, { results: 0 });
  }
  get results() {
    return this.$$.ctx[0];
  }
  set results(t) {
    this.$$set({ results: t }), y();
  }
}
B(pt, { results: {} }, [], [], !0);
function ee(e) {
  F(e, "svelte-hbdnov", ".ai-search-container.svelte-hbdnov.svelte-hbdnov{--font-body:Helvetica, 'Trebuchet MS', Verdana, sans-serif;--color-text:rgba(18, 18, 18, 0.8);display:grid;grid-template-columns:1fr 1fr;gap:0.2rem;height:100%;width:100%;font-family:var(--font-body);font-size:1.2em;color:var(--color-text)}.ai-search-container.svelte-hbdnov .svelte-hbdnov{box-sizing:border-box}.column.svelte-hbdnov.svelte-hbdnov{display:flex;flex-direction:column;overflow-y:hidden;padding:1rem}.left.svelte-hbdnov.svelte-hbdnov{border-right:1px solid var(--color-text)}");
}
function ct(e) {
  let t, n;
  return t = new mt({
    props: {
      messages: (
        /*$searchStore*/
        e[0].messages
      )
    }
  }), t.$on(
    "userInput",
    /*onUserInput*/
    e[1]
  ), {
    c() {
      K(t.$$.fragment);
    },
    m(s, r) {
      R(t, s, r), n = !0;
    },
    p(s, r) {
      const o = {};
      r & /*$searchStore*/
      1 && (o.messages = /*$searchStore*/
      s[0].messages), t.$set(o);
    },
    i(s) {
      n || (v(t.$$.fragment, s), n = !0);
    },
    o(s) {
      A(t.$$.fragment, s), n = !1;
    },
    d(s) {
      q(t, s);
    }
  };
}
function ne(e) {
  let t, n, s, r, o, u, i = (
    /*$searchStore*/
    e[0] && ct(e)
  );
  return o = new pt({
    props: {
      results: (
        /*$searchStore*/
        e[0].selections
      )
    }
  }), {
    c() {
      t = d("div"), n = d("div"), i && i.c(), s = N(), r = d("div"), K(o.$$.fragment), m(n, "class", "column left svelte-hbdnov"), m(r, "class", "column right svelte-hbdnov"), m(t, "class", "ai-search-container svelte-hbdnov");
    },
    m(c, l) {
      b(c, t, l), h(t, n), i && i.m(n, null), h(t, s), h(t, r), R(o, r, null), u = !0;
    },
    p(c, [l]) {
      /*$searchStore*/
      c[0] ? i ? (i.p(c, l), l & /*$searchStore*/
      1 && v(i, 1)) : (i = ct(c), i.c(), v(i, 1), i.m(n, null)) : i && (It(), A(i, 1, 1, () => {
        i = null;
      }), Mt());
      const a = {};
      l & /*$searchStore*/
      1 && (a.results = /*$searchStore*/
      c[0].selections), o.$set(a);
    },
    i(c) {
      u || (v(i), v(o.$$.fragment, c), u = !0);
    },
    o(c) {
      A(i), A(o.$$.fragment, c), u = !1;
    },
    d(c) {
      c && p(t), i && i.d(), q(o);
    }
  };
}
function se(e, t, n) {
  let s;
  wt(e, P, (i) => n(0, s = i));
  let { apiBaseUrl: r } = t, { language: o } = t;
  At(async () => {
    await P.start(r, { language: o });
  });
  const u = async (i) => {
    const c = i.detail.content;
    if (!c)
      return;
    const l = { role: z.User, content: c };
    P.addMessage(l), await P.search(c);
  };
  return e.$$set = (i) => {
    "apiBaseUrl" in i && n(2, r = i.apiBaseUrl), "language" in i && n(3, o = i.language);
  }, [s, u, r, o];
}
class re extends L {
  constructor(t) {
    super(), U(this, t, se, ne, k, { apiBaseUrl: 2, language: 3 }, ee);
  }
  get apiBaseUrl() {
    return this.$$.ctx[2];
  }
  set apiBaseUrl(t) {
    this.$$set({ apiBaseUrl: t }), y();
  }
  get language() {
    return this.$$.ctx[3];
  }
  set language(t) {
    this.$$set({ language: t }), y();
  }
}
customElements.define("stg-ai-search-container", B(re, { apiBaseUrl: { reflect: !0, type: "String", attribute: "api-base-url" }, language: { reflect: !0, type: "String", attribute: "language" } }, [], [], !1));
export {
  re as AiSearchContainer
};
