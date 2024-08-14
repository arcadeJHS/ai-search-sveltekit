var bt = Object.defineProperty;
var _t = (e, t, n) => t in e ? bt(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n;
var $ = (e, t, n) => _t(e, typeof t != "symbol" ? t + "" : t, n);
function g() {
}
function ct(e) {
  return e();
}
function X() {
  return /* @__PURE__ */ Object.create(null);
}
function j(e) {
  e.forEach(ct);
}
function ut(e) {
  return typeof e == "function";
}
function C(e, t) {
  return e != e ? t == t : e !== t || e && typeof e == "object" || typeof e == "function";
}
function vt(e) {
  return Object.keys(e).length === 0;
}
function lt(e, ...t) {
  if (e == null) {
    for (const s of t)
      s(void 0);
    return g;
  }
  const n = e.subscribe(...t);
  return n.unsubscribe ? () => n.unsubscribe() : n;
}
function yt(e) {
  let t;
  return lt(e, (n) => t = n)(), t;
}
function wt(e, t, n) {
  e.$$.on_destroy.push(lt(t, n));
}
function h(e, t) {
  e.appendChild(t);
}
function F(e, t, n) {
  const s = xt(e);
  if (!s.getElementById(t)) {
    const o = d("style");
    o.id = t, o.textContent = n, Et(s, o);
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
function Et(e, t) {
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
function at(e, t) {
  for (let n = 0; n < e.length; n += 1)
    e[n] && e[n].d(t);
}
function d(e) {
  return document.createElement(e);
}
function M(e) {
  return document.createTextNode(e);
}
function N() {
  return M(" ");
}
function Y(e, t, n, s) {
  return e.addEventListener(t, n, s), () => e.removeEventListener(t, n, s);
}
function St(e) {
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
function ft(e, t) {
  t = "" + t, e.data !== t && (e.data = /** @type {string} */
  t);
}
function Z(e, t) {
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
let A;
function k(e) {
  A = e;
}
function dt() {
  if (!A) throw new Error("Function called outside component initialization");
  return A;
}
function At(e) {
  dt().$$.on_mount.push(e);
}
function Ct() {
  const e = dt();
  return (t, n, { cancelable: s = !1 } = {}) => {
    const o = e.$$.callbacks[t];
    if (o) {
      const r = kt(
        /** @type {string} */
        t,
        n,
        { cancelable: s }
      );
      return o.slice().forEach((u) => {
        u.call(e, r);
      }), !r.defaultPrevented;
    }
    return !0;
  };
}
function Nt(e, t) {
  const n = e.$$.callbacks[t.type];
  n && n.slice().forEach((s) => s.call(this, t));
}
const x = [], tt = [];
let E = [];
const et = [], Ut = /* @__PURE__ */ Promise.resolve();
let H = !1;
function Bt() {
  H || (H = !0, Ut.then(S));
}
function V(e) {
  E.push(e);
}
const D = /* @__PURE__ */ new Set();
let y = 0;
function S() {
  if (y !== 0)
    return;
  const e = A;
  do {
    try {
      for (; y < x.length; ) {
        const t = x[y];
        y++, k(t), It(t.$$);
      }
    } catch (t) {
      throw x.length = 0, y = 0, t;
    }
    for (k(null), x.length = 0, y = 0; tt.length; ) tt.pop()();
    for (let t = 0; t < E.length; t += 1) {
      const n = E[t];
      D.has(n) || (D.add(n), n());
    }
    E.length = 0;
  } while (x.length);
  for (; et.length; )
    et.pop()();
  H = !1, D.clear(), k(e);
}
function It(e) {
  if (e.fragment !== null) {
    e.update(), j(e.before_update);
    const t = e.dirty;
    e.dirty = [-1], e.fragment && e.fragment.p(e.ctx, t), e.after_update.forEach(V);
  }
}
function Lt(e) {
  const t = [], n = [];
  E.forEach((s) => e.indexOf(s) === -1 ? t.push(s) : n.push(s)), n.forEach((s) => s()), E = t;
}
const B = /* @__PURE__ */ new Set();
let _;
function Pt() {
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
  e && e.i && (B.delete(e), e.i(t));
}
function O(e, t, n, s) {
  if (e && e.o) {
    if (B.has(e)) return;
    B.add(e), _.c.push(() => {
      B.delete(e), s && (n && e.d(1), s());
    }), e.o(t);
  } else s && s();
}
function L(e) {
  return (e == null ? void 0 : e.length) !== void 0 ? e : Array.from(e);
}
function G(e) {
  e && e.c();
}
function T(e, t, n) {
  const { fragment: s, after_update: o } = e.$$;
  s && s.m(t, n), V(() => {
    const r = e.$$.on_mount.map(ct).filter(ut);
    e.$$.on_destroy ? e.$$.on_destroy.push(...r) : j(r), e.$$.on_mount = [];
  }), o.forEach(V);
}
function z(e, t) {
  const n = e.$$;
  n.fragment !== null && (Lt(n.after_update), j(n.on_destroy), n.fragment && n.fragment.d(t), n.on_destroy = n.fragment = null, n.ctx = []);
}
function Tt(e, t) {
  e.$$.dirty[0] === -1 && (x.push(e), Bt(), e.$$.dirty.fill(0)), e.$$.dirty[t / 31 | 0] |= 1 << t % 31;
}
function J(e, t, n, s, o, r, u = null, i = [-1]) {
  const c = A;
  k(e);
  const l = e.$$ = {
    fragment: null,
    ctx: [],
    // state
    props: r,
    update: g,
    not_equal: o,
    bound: X(),
    // lifecycle
    on_mount: [],
    on_destroy: [],
    on_disconnect: [],
    before_update: [],
    after_update: [],
    context: new Map(t.context || (c ? c.$$.context : [])),
    // everything else
    callbacks: X(),
    dirty: i,
    skip_bound: !1,
    root: t.target || c.$$.root
  };
  u && u(l.root);
  let a = !1;
  if (l.ctx = n ? n(e, t.props || {}, (f, K, ...Q) => {
    const W = Q.length ? Q[0] : K;
    return l.ctx && o(l.ctx[f], l.ctx[f] = W) && (!l.skip_bound && l.bound[f] && l.bound[f](W), a && Tt(e, f)), K;
  }) : [], l.update(), a = !0, j(l.before_update), l.fragment = s ? s(l.ctx) : !1, t.target) {
    if (t.hydrate) {
      const f = jt(t.target);
      l.fragment && l.fragment.l(f), f.forEach(p);
    } else
      l.fragment && l.fragment.c();
    t.intro && v(e.$$.fragment), T(e, t.target, t.anchor), S();
  }
  k(c);
}
let $t;
typeof HTMLElement == "function" && ($t = class extends HTMLElement {
  constructor(t, n, s) {
    super();
    /** The Svelte component constructor */
    $(this, "$$ctor");
    /** Slots */
    $(this, "$$s");
    /** The Svelte component instance */
    $(this, "$$c");
    /** Whether or not the custom element is connected */
    $(this, "$$cn", !1);
    /** Component props data */
    $(this, "$$d", {});
    /** `true` if currently in the process of reflecting component props back to attributes */
    $(this, "$$r", !1);
    /** @type {Record<string, CustomElementPropDefinition>} Props definition (name, reflected, type etc) */
    $(this, "$$p_d", {});
    /** @type {Record<string, Function[]>} Event listeners */
    $(this, "$$l", {});
    /** @type {Map<Function, Function>} Event listener unsubscribe functions */
    $(this, "$$l_u", /* @__PURE__ */ new Map());
    this.$$ctor = t, this.$$s = n, s && this.attachShadow({ mode: "open" });
  }
  addEventListener(t, n, s) {
    if (this.$$l[t] = this.$$l[t] || [], this.$$l[t].push(n), this.$$c) {
      const o = this.$$c.$on(t, n);
      this.$$l_u.set(n, o);
    }
    super.addEventListener(t, n, s);
  }
  removeEventListener(t, n, s) {
    if (super.removeEventListener(t, n, s), this.$$c) {
      const o = this.$$l_u.get(n);
      o && (o(), this.$$l_u.delete(n));
    }
  }
  async connectedCallback() {
    if (this.$$cn = !0, !this.$$c) {
      let t = function(r) {
        return () => {
          let u;
          return {
            c: function() {
              u = d("slot"), r !== "default" && m(u, "name", r);
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
      for (const r of this.$$s)
        r in s && (n[r] = [t(r)]);
      for (const r of this.attributes) {
        const u = this.$$g_p(r.name);
        u in this.$$d || (this.$$d[u] = I(u, r.value, this.$$p_d, "toProp"));
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
      const o = () => {
        this.$$r = !0;
        for (const r in this.$$p_d)
          if (this.$$d[r] = this.$$c.$$.ctx[this.$$c.$$.props[r]], this.$$p_d[r].reflect) {
            const u = I(
              r,
              this.$$d[r],
              this.$$p_d,
              "toAttribute"
            );
            u == null ? this.removeAttribute(this.$$p_d[r].attribute || r) : this.setAttribute(this.$$p_d[r].attribute || r, u);
          }
        this.$$r = !1;
      };
      this.$$c.$$.after_update.push(o), o();
      for (const r in this.$$l)
        for (const u of this.$$l[r]) {
          const i = this.$$c.$on(r, u);
          this.$$l_u.set(u, i);
        }
      this.$$l = {};
    }
  }
  // We don't need this when working within Svelte code, but for compatibility of people using this outside of Svelte
  // and setting attributes through setAttribute etc, this is helpful
  attributeChangedCallback(t, n, s) {
    var o;
    this.$$r || (t = this.$$g_p(t), this.$$d[t] = I(t, s, this.$$p_d, "toProp"), (o = this.$$c) == null || o.$set({ [t]: this.$$d[t] }));
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
function I(e, t, n, s) {
  var r;
  const o = (r = n[e]) == null ? void 0 : r.type;
  if (t = o === "Boolean" && typeof t != "boolean" ? t != null : t, !s || !n[e])
    return t;
  if (s === "toAttribute")
    switch (o) {
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
    switch (o) {
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
function R(e, t, n, s, o, r) {
  let u = class extends $t {
    constructor() {
      super(e, n, o), this.$$p_d = t;
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
        c = I(i, c, t), this.$$d[i] = c, (l = this.$$c) == null || l.$set({ [i]: c });
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
class q {
  constructor() {
    /**
     * ### PRIVATE API
     *
     * Do not use, may change at any time
     *
     * @type {any}
     */
    $(this, "$$");
    /**
     * ### PRIVATE API
     *
     * Do not use, may change at any time
     *
     * @type {any}
     */
    $(this, "$$set");
  }
  /** @returns {void} */
  $destroy() {
    z(this, 1), this.$destroy = g;
  }
  /**
   * @template {Extract<keyof Events, string>} K
   * @param {K} type
   * @param {((e: Events[K]) => void) | null | undefined} callback
   * @returns {() => void}
   */
  $on(t, n) {
    if (!ut(n))
      return g;
    const s = this.$$.callbacks[t] || (this.$$.callbacks[t] = []);
    return s.push(n), () => {
      const o = s.indexOf(n);
      o !== -1 && s.splice(o, 1);
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
const w = [];
function Jt(e, t = g) {
  let n;
  const s = /* @__PURE__ */ new Set();
  function o(i) {
    if (C(e, i) && (e = i, n)) {
      const c = !w.length;
      for (const l of s)
        l[1](), w.push(l, e);
      if (c) {
        for (let l = 0; l < w.length; l += 2)
          w[l][0](w[l + 1]);
        w.length = 0;
      }
    }
  }
  function r(i) {
    o(i(e));
  }
  function u(i, c = g) {
    const l = [i, c];
    return s.add(l), s.size === 1 && (n = t(o, r) || g), i(e), () => {
      s.delete(l), s.size === 0 && n && (n(), n = null);
    };
  }
  return { set: o, update: r, subscribe: u };
}
var P = /* @__PURE__ */ ((e) => (e.User = "user", e.Agent = "agent", e))(P || {});
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
      const o = await Rt(e, {
        language: s
      }), { session: r, l: u, message: i, filters: c, selection: l } = o, a = {
        role: P.Agent,
        content: i
      };
      return t.update((f) => (f.session = r, f.l = u, f.messages = [...f.messages, a], f.filters = c, f.selections = l, f)), o;
    },
    addMessage: (n) => {
      t.update((s) => (s.messages = [...s.messages, n], s));
    },
    search: async (n) => {
      const o = yt(t).session;
      if (!o)
        throw new Error("Session is required");
      const r = await qt(e, {
        session: o,
        message: n
      }), { l: u, message: i, filters: c, selection: l } = r, a = {
        role: P.Agent,
        content: i
      };
      return t.update((f) => (f.l = u, f.messages = [...f.messages, a], f.filters = c, f.selections = l, f)), r;
    }
  };
}, U = Dt();
function Ht(e) {
  F(e, "svelte-sjuln4", ".ai-chat-user-input-form.svelte-sjuln4{display:flex;justify-content:space-between;padding-top:1rem}.ai-chat-user-input-form-input.svelte-sjuln4{display:flex;flex-grow:1;line-height:2em;padding:0 0.5rem;font-family:var(--font-body);font-size:0.8em;border:1px solid var(--color-text);border-top-left-radius:4px;border-bottom-left-radius:4px}.ai-chat-user-input-form-button.svelte-sjuln4{margin-left:0.1rem;background:white;font-family:var(--font-body);font-size:0.8em;border:1px solid var(--color-text);border-top-right-radius:4px;border-bottom-right-radius:4px}");
}
function Vt(e) {
  let t, n, s, o, r, u, i;
  return {
    c() {
      t = M(`CIAO
`), n = d("form"), s = d("input"), o = N(), r = d("button"), r.textContent = "Ask AI", m(s, "class", "ai-chat-user-input-form-input svelte-sjuln4"), m(r, "type", "submit"), m(r, "class", "ai-chat-user-input-form-button svelte-sjuln4"), m(n, "class", "ai-chat-user-input-form svelte-sjuln4");
    },
    m(c, l) {
      b(c, t, l), b(c, n, l), h(n, s), Z(
        s,
        /*userInput*/
        e[0]
      ), h(n, o), h(n, r), u || (i = [
        Y(
          s,
          "input",
          /*input_input_handler*/
          e[2]
        ),
        Y(n, "submit", St(
          /*submit_handler*/
          e[3]
        ))
      ], u = !0);
    },
    p(c, [l]) {
      l & /*userInput*/
      1 && s.value !== /*userInput*/
      c[0] && Z(
        s,
        /*userInput*/
        c[0]
      );
    },
    i: g,
    o: g,
    d(c) {
      c && (p(t), p(n)), u = !1, j(i);
    }
  };
}
function Ft(e, t, n) {
  const s = Ct();
  let o;
  const r = (c) => {
    o && (s("userInput", { content: c }), n(0, o = void 0));
  };
  function u() {
    o = this.value, n(0, o);
  }
  return [o, r, u, () => {
    r(o);
  }];
}
class gt extends q {
  constructor(t) {
    super(), J(this, t, Ft, Vt, C, {}, Ht);
  }
}
R(gt, {}, [], [], !0);
function Gt(e) {
  F(e, "svelte-uhbklr", ".ai-chat.svelte-uhbklr{display:flex;flex-direction:column;flex-grow:1;justify-content:space-between}.ai-chat-messages.svelte-uhbklr{padding-bottom:1rem;overflow-y:auto;flex-grow:1}");
}
function nt(e, t, n) {
  const s = e.slice();
  return s[2] = t[n], s;
}
function st(e) {
  let t, n, s = JSON.stringify(
    /*message*/
    e[2],
    null,
    2
  ) + "", o, r;
  return {
    c() {
      t = d("div"), n = d("pre"), o = M(s), r = N(), ht(t, "margin", "1rem 0");
    },
    m(u, i) {
      b(u, t, i), h(t, n), h(n, o), h(t, r);
    },
    p(u, i) {
      i & /*messages*/
      1 && s !== (s = JSON.stringify(
        /*message*/
        u[2],
        null,
        2
      ) + "") && ft(o, s);
    },
    d(u) {
      u && p(t);
    }
  };
}
function Kt(e) {
  let t, n, s, o, r, u = L(
    /*messages*/
    e[0]
  ), i = [];
  for (let c = 0; c < u.length; c += 1)
    i[c] = st(nt(e, u, c));
  return o = new gt({}), o.$on(
    "userInput",
    /*userInput_handler*/
    e[1]
  ), {
    c() {
      t = d("div"), n = d("div");
      for (let c = 0; c < i.length; c += 1)
        i[c].c();
      s = N(), G(o.$$.fragment), m(n, "class", "ai-chat-messages svelte-uhbklr"), m(t, "class", "ai-chat svelte-uhbklr");
    },
    m(c, l) {
      b(c, t, l), h(t, n);
      for (let a = 0; a < i.length; a += 1)
        i[a] && i[a].m(n, null);
      h(t, s), T(o, t, null), r = !0;
    },
    p(c, [l]) {
      if (l & /*JSON, messages*/
      1) {
        u = L(
          /*messages*/
          c[0]
        );
        let a;
        for (a = 0; a < u.length; a += 1) {
          const f = nt(c, u, a);
          i[a] ? i[a].p(f, l) : (i[a] = st(f), i[a].c(), i[a].m(n, null));
        }
        for (; a < i.length; a += 1)
          i[a].d(1);
        i.length = u.length;
      }
    },
    i(c) {
      r || (v(o.$$.fragment, c), r = !0);
    },
    o(c) {
      O(o.$$.fragment, c), r = !1;
    },
    d(c) {
      c && p(t), at(i, c), z(o);
    }
  };
}
function Qt(e, t, n) {
  let { messages: s } = t;
  function o(r) {
    Nt.call(this, e, r);
  }
  return e.$$set = (r) => {
    "messages" in r && n(0, s = r.messages);
  }, [s, o];
}
class mt extends q {
  constructor(t) {
    super(), J(this, t, Qt, Kt, C, { messages: 0 }, Gt);
  }
  get messages() {
    return this.$$.ctx[0];
  }
  set messages(t) {
    this.$$set({ messages: t }), S();
  }
}
R(mt, { messages: {} }, [], [], !0);
function rt(e, t, n) {
  const s = e.slice();
  return s[1] = t[n], s;
}
function it(e) {
  let t, n, s = JSON.stringify(
    /*result*/
    e[1],
    null,
    2
  ) + "", o, r;
  return {
    c() {
      t = d("div"), n = d("pre"), o = M(s), r = N(), ht(t, "margin", "1rem 0");
    },
    m(u, i) {
      b(u, t, i), h(t, n), h(n, o), h(t, r);
    },
    p(u, i) {
      i & /*results*/
      1 && s !== (s = JSON.stringify(
        /*result*/
        u[1],
        null,
        2
      ) + "") && ft(o, s);
    },
    d(u) {
      u && p(t);
    }
  };
}
function Wt(e) {
  let t, n, s = L(
    /*results*/
    e[0]
  ), o = [];
  for (let r = 0; r < s.length; r += 1)
    o[r] = it(rt(e, s, r));
  return {
    c() {
      t = d("div"), n = d("div");
      for (let r = 0; r < o.length; r += 1)
        o[r].c();
    },
    m(r, u) {
      b(r, t, u), h(t, n);
      for (let i = 0; i < o.length; i += 1)
        o[i] && o[i].m(n, null);
    },
    p(r, [u]) {
      if (u & /*JSON, results*/
      1) {
        s = L(
          /*results*/
          r[0]
        );
        let i;
        for (i = 0; i < s.length; i += 1) {
          const c = rt(r, s, i);
          o[i] ? o[i].p(c, u) : (o[i] = it(c), o[i].c(), o[i].m(n, null));
        }
        for (; i < o.length; i += 1)
          o[i].d(1);
        o.length = s.length;
      }
    },
    i: g,
    o: g,
    d(r) {
      r && p(t), at(o, r);
    }
  };
}
function Xt(e, t, n) {
  let { results: s } = t;
  return e.$$set = (o) => {
    "results" in o && n(0, s = o.results);
  }, [s];
}
class pt extends q {
  constructor(t) {
    super(), J(this, t, Xt, Wt, C, { results: 0 });
  }
  get results() {
    return this.$$.ctx[0];
  }
  set results(t) {
    this.$$set({ results: t }), S();
  }
}
R(pt, { results: {} }, [], [], !0);
function Yt(e) {
  F(e, "svelte-hbdnov", ".ai-search-container.svelte-hbdnov.svelte-hbdnov{--font-body:Helvetica, 'Trebuchet MS', Verdana, sans-serif;--color-text:rgba(18, 18, 18, 0.8);display:grid;grid-template-columns:1fr 1fr;gap:0.2rem;height:100%;width:100%;font-family:var(--font-body);font-size:1.2em;color:var(--color-text)}.ai-search-container.svelte-hbdnov .svelte-hbdnov{box-sizing:border-box}.column.svelte-hbdnov.svelte-hbdnov{display:flex;flex-direction:column;overflow-y:hidden;padding:1rem}.left.svelte-hbdnov.svelte-hbdnov{border-right:1px solid var(--color-text)}");
}
function ot(e) {
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
      G(t.$$.fragment);
    },
    m(s, o) {
      T(t, s, o), n = !0;
    },
    p(s, o) {
      const r = {};
      o & /*$searchStore*/
      1 && (r.messages = /*$searchStore*/
      s[0].messages), t.$set(r);
    },
    i(s) {
      n || (v(t.$$.fragment, s), n = !0);
    },
    o(s) {
      O(t.$$.fragment, s), n = !1;
    },
    d(s) {
      z(t, s);
    }
  };
}
function Zt(e) {
  let t, n, s, o, r, u, i = (
    /*$searchStore*/
    e[0] && ot(e)
  );
  return r = new pt({
    props: {
      results: (
        /*$searchStore*/
        e[0].selections
      )
    }
  }), {
    c() {
      t = d("div"), n = d("div"), i && i.c(), s = N(), o = d("div"), G(r.$$.fragment), m(n, "class", "column left svelte-hbdnov"), m(o, "class", "column right svelte-hbdnov"), m(t, "class", "ai-search-container svelte-hbdnov");
    },
    m(c, l) {
      b(c, t, l), h(t, n), i && i.m(n, null), h(t, s), h(t, o), T(r, o, null), u = !0;
    },
    p(c, [l]) {
      /*$searchStore*/
      c[0] ? i ? (i.p(c, l), l & /*$searchStore*/
      1 && v(i, 1)) : (i = ot(c), i.c(), v(i, 1), i.m(n, null)) : i && (Pt(), O(i, 1, 1, () => {
        i = null;
      }), Mt());
      const a = {};
      l & /*$searchStore*/
      1 && (a.results = /*$searchStore*/
      c[0].selections), r.$set(a);
    },
    i(c) {
      u || (v(i), v(r.$$.fragment, c), u = !0);
    },
    o(c) {
      O(i), O(r.$$.fragment, c), u = !1;
    },
    d(c) {
      c && p(t), i && i.d(), z(r);
    }
  };
}
function te(e, t, n) {
  let s;
  wt(e, U, (i) => n(0, s = i));
  let { apiBaseUrl: o } = t, { language: r } = t;
  At(async () => {
    await U.start(o, { language: r });
  });
  const u = async (i) => {
    const c = i.detail.content;
    if (!c)
      return;
    const l = { role: P.User, content: c };
    U.addMessage(l), await U.search(c);
  };
  return e.$$set = (i) => {
    "apiBaseUrl" in i && n(2, o = i.apiBaseUrl), "language" in i && n(3, r = i.language);
  }, [s, u, o, r];
}
class ee extends q {
  constructor(t) {
    super(), J(this, t, te, Zt, C, { apiBaseUrl: 2, language: 3 }, Yt);
  }
  get apiBaseUrl() {
    return this.$$.ctx[2];
  }
  set apiBaseUrl(t) {
    this.$$set({ apiBaseUrl: t }), S();
  }
  get language() {
    return this.$$.ctx[3];
  }
  set language(t) {
    this.$$set({ language: t }), S();
  }
}
customElements.define("stg-ai-search-container", R(ee, { apiBaseUrl: { reflect: !0, type: "String", attribute: "api-base-url" }, language: { reflect: !0, type: "String", attribute: "language" } }, [], [], !1));
export {
  ee as AiSearchContainer
};
