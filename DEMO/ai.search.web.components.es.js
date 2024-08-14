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
function V(e, t, n) {
  const s = xt(e);
  if (!s.getElementById(t)) {
    const i = d("style");
    i.id = t, i.textContent = n, Et(s, i);
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
function v(e, t, n) {
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
function F(e) {
  return document.createTextNode(e);
}
function N() {
  return F(" ");
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
    const i = e.$$.callbacks[t];
    if (i) {
      const o = kt(
        /** @type {string} */
        t,
        n,
        { cancelable: s }
      );
      return i.slice().forEach((u) => {
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
const x = [], tt = [];
let E = [];
const et = [], Ut = /* @__PURE__ */ Promise.resolve();
let D = !1;
function Bt() {
  D || (D = !0, Ut.then(S));
}
function H(e) {
  E.push(e);
}
const q = /* @__PURE__ */ new Set();
let y = 0;
function S() {
  if (y !== 0)
    return;
  const e = A;
  do {
    try {
      for (; y < x.length; ) {
        const t = x[y];
        y++, k(t), Lt(t.$$);
      }
    } catch (t) {
      throw x.length = 0, y = 0, t;
    }
    for (k(null), x.length = 0, y = 0; tt.length; ) tt.pop()();
    for (let t = 0; t < E.length; t += 1) {
      const n = E[t];
      q.has(n) || (q.add(n), n());
    }
    E.length = 0;
  } while (x.length);
  for (; et.length; )
    et.pop()();
  D = !1, q.clear(), k(e);
}
function Lt(e) {
  if (e.fragment !== null) {
    e.update(), j(e.before_update);
    const t = e.dirty;
    e.dirty = [-1], e.fragment && e.fragment.p(e.ctx, t), e.after_update.forEach(H);
  }
}
function Pt(e) {
  const t = [], n = [];
  E.forEach((s) => e.indexOf(s) === -1 ? t.push(s) : n.push(s)), n.forEach((s) => s()), E = t;
}
const B = /* @__PURE__ */ new Set();
let b;
function It() {
  b = {
    r: 0,
    c: [],
    p: b
    // parent group
  };
}
function Mt() {
  b.r || j(b.c), b = b.p;
}
function _(e, t) {
  e && e.i && (B.delete(e), e.i(t));
}
function O(e, t, n, s) {
  if (e && e.o) {
    if (B.has(e)) return;
    B.add(e), b.c.push(() => {
      B.delete(e), s && (n && e.d(1), s());
    }), e.o(t);
  } else s && s();
}
function P(e) {
  return (e == null ? void 0 : e.length) !== void 0 ? e : Array.from(e);
}
function G(e) {
  e && e.c();
}
function M(e, t, n) {
  const { fragment: s, after_update: i } = e.$$;
  s && s.m(t, n), H(() => {
    const o = e.$$.on_mount.map(ct).filter(ut);
    e.$$.on_destroy ? e.$$.on_destroy.push(...o) : j(o), e.$$.on_mount = [];
  }), i.forEach(H);
}
function T(e, t) {
  const n = e.$$;
  n.fragment !== null && (Pt(n.after_update), j(n.on_destroy), n.fragment && n.fragment.d(t), n.on_destroy = n.fragment = null, n.ctx = []);
}
function Tt(e, t) {
  e.$$.dirty[0] === -1 && (x.push(e), Bt(), e.$$.dirty.fill(0)), e.$$.dirty[t / 31 | 0] |= 1 << t % 31;
}
function z(e, t, n, s, i, o, u = null, r = [-1]) {
  const c = A;
  k(e);
  const l = e.$$ = {
    fragment: null,
    ctx: [],
    // state
    props: o,
    update: g,
    not_equal: i,
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
    dirty: r,
    skip_bound: !1,
    root: t.target || c.$$.root
  };
  u && u(l.root);
  let a = !1;
  if (l.ctx = n ? n(e, t.props || {}, (f, K, ...Q) => {
    const W = Q.length ? Q[0] : K;
    return l.ctx && i(l.ctx[f], l.ctx[f] = W) && (!l.skip_bound && l.bound[f] && l.bound[f](W), a && Tt(e, f)), K;
  }) : [], l.update(), a = !0, j(l.before_update), l.fragment = s ? s(l.ctx) : !1, t.target) {
    if (t.hydrate) {
      const f = jt(t.target);
      l.fragment && l.fragment.l(f), f.forEach(p);
    } else
      l.fragment && l.fragment.c();
    t.intro && _(e.$$.fragment), M(e, t.target, t.anchor), S();
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
              v(l, u, a);
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
        u in this.$$d || (this.$$d[u] = L(u, o.value, this.$$p_d, "toProp"));
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
      const i = () => {
        this.$$r = !0;
        for (const o in this.$$p_d)
          if (this.$$d[o] = this.$$c.$$.ctx[this.$$c.$$.props[o]], this.$$p_d[o].reflect) {
            const u = L(
              o,
              this.$$d[o],
              this.$$p_d,
              "toAttribute"
            );
            u == null ? this.removeAttribute(this.$$p_d[o].attribute || o) : this.setAttribute(this.$$p_d[o].attribute || o, u);
          }
        this.$$r = !1;
      };
      this.$$c.$$.after_update.push(i), i();
      for (const o in this.$$l)
        for (const u of this.$$l[o]) {
          const r = this.$$c.$on(o, u);
          this.$$l_u.set(u, r);
        }
      this.$$l = {};
    }
  }
  // We don't need this when working within Svelte code, but for compatibility of people using this outside of Svelte
  // and setting attributes through setAttribute etc, this is helpful
  attributeChangedCallback(t, n, s) {
    var i;
    this.$$r || (t = this.$$g_p(t), this.$$d[t] = L(t, s, this.$$p_d, "toProp"), (i = this.$$c) == null || i.$set({ [t]: this.$$d[t] }));
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
function L(e, t, n, s) {
  var o;
  const i = (o = n[e]) == null ? void 0 : o.type;
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
function J(e, t, n, s, i, o) {
  let u = class extends $t {
    constructor() {
      super(e, n, i), this.$$p_d = t;
    }
    static get observedAttributes() {
      return Object.keys(t).map(
        (r) => (t[r].attribute || r).toLowerCase()
      );
    }
  };
  return Object.keys(t).forEach((r) => {
    Object.defineProperty(u.prototype, r, {
      get() {
        return this.$$c && r in this.$$c ? this.$$c[r] : this.$$d[r];
      },
      set(c) {
        var l;
        c = L(r, c, t), this.$$d[r] = c, (l = this.$$c) == null || l.$set({ [r]: c });
      }
    });
  }), s.forEach((r) => {
    Object.defineProperty(u.prototype, r, {
      get() {
        var c;
        return (c = this.$$c) == null ? void 0 : c[r];
      }
    });
  }), e.element = /** @type {any} */
  u, u;
}
class R {
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
    T(this, 1), this.$destroy = g;
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
      const i = s.indexOf(n);
      i !== -1 && s.splice(i, 1);
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
  function i(r) {
    if (C(e, r) && (e = r, n)) {
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
  function o(r) {
    i(r(e));
  }
  function u(r, c = g) {
    const l = [r, c];
    return s.add(l), s.size === 1 && (n = t(i, o) || g), r(e), () => {
      s.delete(l), s.size === 0 && n && (n(), n = null);
    };
  }
  return { set: i, update: o, subscribe: u };
}
var I = /* @__PURE__ */ ((e) => (e.User = "user", e.Agent = "agent", e))(I || {});
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
      const i = await Rt(e, {
        language: s
      }), { session: o, l: u, message: r, filters: c, selection: l } = i, a = {
        role: I.Agent,
        content: r
      };
      return t.update((f) => (f.session = o, f.l = u, f.messages = [...f.messages, a], f.filters = c, f.selections = l, f)), i;
    },
    addMessage: (n) => {
      t.update((s) => (s.messages = [...s.messages, n], s));
    },
    search: async (n) => {
      const i = yt(t).session;
      if (!i)
        throw new Error("Session is required");
      const o = await qt(e, {
        session: i,
        message: n
      }), { l: u, message: r, filters: c, selection: l } = o, a = {
        role: I.Agent,
        content: r
      };
      return t.update((f) => (f.l = u, f.messages = [...f.messages, a], f.filters = c, f.selections = l, f)), o;
    }
  };
}, U = Dt();
function Ht(e) {
  V(e, "svelte-sjuln4", ".ai-chat-user-input-form.svelte-sjuln4{display:flex;justify-content:space-between;padding-top:1rem}.ai-chat-user-input-form-input.svelte-sjuln4{display:flex;flex-grow:1;line-height:2em;padding:0 0.5rem;font-family:var(--font-body);font-size:0.8em;border:1px solid var(--color-text);border-top-left-radius:4px;border-bottom-left-radius:4px}.ai-chat-user-input-form-button.svelte-sjuln4{margin-left:0.1rem;background:white;font-family:var(--font-body);font-size:0.8em;border:1px solid var(--color-text);border-top-right-radius:4px;border-bottom-right-radius:4px}");
}
function Vt(e) {
  let t, n, s, i, o, u;
  return {
    c() {
      t = d("form"), n = d("input"), s = N(), i = d("button"), i.textContent = "Ask AI", m(n, "class", "ai-chat-user-input-form-input svelte-sjuln4"), m(i, "type", "submit"), m(i, "class", "ai-chat-user-input-form-button svelte-sjuln4"), m(t, "class", "ai-chat-user-input-form svelte-sjuln4");
    },
    m(r, c) {
      v(r, t, c), h(t, n), Z(
        n,
        /*userInput*/
        e[0]
      ), h(t, s), h(t, i), o || (u = [
        Y(
          n,
          "input",
          /*input_input_handler*/
          e[2]
        ),
        Y(t, "submit", St(
          /*submit_handler*/
          e[3]
        ))
      ], o = !0);
    },
    p(r, [c]) {
      c & /*userInput*/
      1 && n.value !== /*userInput*/
      r[0] && Z(
        n,
        /*userInput*/
        r[0]
      );
    },
    i: g,
    o: g,
    d(r) {
      r && p(t), o = !1, j(u);
    }
  };
}
function Ft(e, t, n) {
  const s = Ct();
  let i;
  const o = (c) => {
    i && (s("userInput", { content: c }), n(0, i = void 0));
  };
  function u() {
    i = this.value, n(0, i);
  }
  return [i, o, u, () => {
    o(i);
  }];
}
class gt extends R {
  constructor(t) {
    super(), z(this, t, Ft, Vt, C, {}, Ht);
  }
}
J(gt, {}, [], [], !0);
function Gt(e) {
  V(e, "svelte-uhbklr", ".ai-chat.svelte-uhbklr{display:flex;flex-direction:column;flex-grow:1;justify-content:space-between}.ai-chat-messages.svelte-uhbklr{padding-bottom:1rem;overflow-y:auto;flex-grow:1}");
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
  ) + "", i, o;
  return {
    c() {
      t = d("div"), n = d("pre"), i = F(s), o = N(), ht(t, "margin", "1rem 0");
    },
    m(u, r) {
      v(u, t, r), h(t, n), h(n, i), h(t, o);
    },
    p(u, r) {
      r & /*messages*/
      1 && s !== (s = JSON.stringify(
        /*message*/
        u[2],
        null,
        2
      ) + "") && ft(i, s);
    },
    d(u) {
      u && p(t);
    }
  };
}
function Kt(e) {
  let t, n, s, i, o, u = P(
    /*messages*/
    e[0]
  ), r = [];
  for (let c = 0; c < u.length; c += 1)
    r[c] = st(nt(e, u, c));
  return i = new gt({}), i.$on(
    "userInput",
    /*userInput_handler*/
    e[1]
  ), {
    c() {
      t = d("div"), n = d("div");
      for (let c = 0; c < r.length; c += 1)
        r[c].c();
      s = N(), G(i.$$.fragment), m(n, "class", "ai-chat-messages svelte-uhbklr"), m(t, "class", "ai-chat svelte-uhbklr");
    },
    m(c, l) {
      v(c, t, l), h(t, n);
      for (let a = 0; a < r.length; a += 1)
        r[a] && r[a].m(n, null);
      h(t, s), M(i, t, null), o = !0;
    },
    p(c, [l]) {
      if (l & /*JSON, messages*/
      1) {
        u = P(
          /*messages*/
          c[0]
        );
        let a;
        for (a = 0; a < u.length; a += 1) {
          const f = nt(c, u, a);
          r[a] ? r[a].p(f, l) : (r[a] = st(f), r[a].c(), r[a].m(n, null));
        }
        for (; a < r.length; a += 1)
          r[a].d(1);
        r.length = u.length;
      }
    },
    i(c) {
      o || (_(i.$$.fragment, c), o = !0);
    },
    o(c) {
      O(i.$$.fragment, c), o = !1;
    },
    d(c) {
      c && p(t), at(r, c), T(i);
    }
  };
}
function Qt(e, t, n) {
  let { messages: s } = t;
  function i(o) {
    Nt.call(this, e, o);
  }
  return e.$$set = (o) => {
    "messages" in o && n(0, s = o.messages);
  }, [s, i];
}
class mt extends R {
  constructor(t) {
    super(), z(this, t, Qt, Kt, C, { messages: 0 }, Gt);
  }
  get messages() {
    return this.$$.ctx[0];
  }
  set messages(t) {
    this.$$set({ messages: t }), S();
  }
}
J(mt, { messages: {} }, [], [], !0);
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
  ) + "", i, o;
  return {
    c() {
      t = d("div"), n = d("pre"), i = F(s), o = N(), ht(t, "margin", "1rem 0");
    },
    m(u, r) {
      v(u, t, r), h(t, n), h(n, i), h(t, o);
    },
    p(u, r) {
      r & /*results*/
      1 && s !== (s = JSON.stringify(
        /*result*/
        u[1],
        null,
        2
      ) + "") && ft(i, s);
    },
    d(u) {
      u && p(t);
    }
  };
}
function Wt(e) {
  let t, n, s = P(
    /*results*/
    e[0]
  ), i = [];
  for (let o = 0; o < s.length; o += 1)
    i[o] = it(rt(e, s, o));
  return {
    c() {
      t = d("div"), n = d("div");
      for (let o = 0; o < i.length; o += 1)
        i[o].c();
    },
    m(o, u) {
      v(o, t, u), h(t, n);
      for (let r = 0; r < i.length; r += 1)
        i[r] && i[r].m(n, null);
    },
    p(o, [u]) {
      if (u & /*JSON, results*/
      1) {
        s = P(
          /*results*/
          o[0]
        );
        let r;
        for (r = 0; r < s.length; r += 1) {
          const c = rt(o, s, r);
          i[r] ? i[r].p(c, u) : (i[r] = it(c), i[r].c(), i[r].m(n, null));
        }
        for (; r < i.length; r += 1)
          i[r].d(1);
        i.length = s.length;
      }
    },
    i: g,
    o: g,
    d(o) {
      o && p(t), at(i, o);
    }
  };
}
function Xt(e, t, n) {
  let { results: s } = t;
  return e.$$set = (i) => {
    "results" in i && n(0, s = i.results);
  }, [s];
}
class pt extends R {
  constructor(t) {
    super(), z(this, t, Xt, Wt, C, { results: 0 });
  }
  get results() {
    return this.$$.ctx[0];
  }
  set results(t) {
    this.$$set({ results: t }), S();
  }
}
J(pt, { results: {} }, [], [], !0);
function Yt(e) {
  V(e, "svelte-hbdnov", ".ai-search-container.svelte-hbdnov.svelte-hbdnov{--font-body:Helvetica, 'Trebuchet MS', Verdana, sans-serif;--color-text:rgba(18, 18, 18, 0.8);display:grid;grid-template-columns:1fr 1fr;gap:0.2rem;height:100%;width:100%;font-family:var(--font-body);font-size:1.2em;color:var(--color-text)}.ai-search-container.svelte-hbdnov .svelte-hbdnov{box-sizing:border-box}.column.svelte-hbdnov.svelte-hbdnov{display:flex;flex-direction:column;overflow-y:hidden;padding:1rem}.left.svelte-hbdnov.svelte-hbdnov{border-right:1px solid var(--color-text)}");
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
    m(s, i) {
      M(t, s, i), n = !0;
    },
    p(s, i) {
      const o = {};
      i & /*$searchStore*/
      1 && (o.messages = /*$searchStore*/
      s[0].messages), t.$set(o);
    },
    i(s) {
      n || (_(t.$$.fragment, s), n = !0);
    },
    o(s) {
      O(t.$$.fragment, s), n = !1;
    },
    d(s) {
      T(t, s);
    }
  };
}
function Zt(e) {
  let t, n, s, i, o, u, r = (
    /*$searchStore*/
    e[0] && ot(e)
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
      t = d("div"), n = d("div"), r && r.c(), s = N(), i = d("div"), G(o.$$.fragment), m(n, "class", "column left svelte-hbdnov"), m(i, "class", "column right svelte-hbdnov"), m(t, "class", "ai-search-container svelte-hbdnov");
    },
    m(c, l) {
      v(c, t, l), h(t, n), r && r.m(n, null), h(t, s), h(t, i), M(o, i, null), u = !0;
    },
    p(c, [l]) {
      /*$searchStore*/
      c[0] ? r ? (r.p(c, l), l & /*$searchStore*/
      1 && _(r, 1)) : (r = ot(c), r.c(), _(r, 1), r.m(n, null)) : r && (It(), O(r, 1, 1, () => {
        r = null;
      }), Mt());
      const a = {};
      l & /*$searchStore*/
      1 && (a.results = /*$searchStore*/
      c[0].selections), o.$set(a);
    },
    i(c) {
      u || (_(r), _(o.$$.fragment, c), u = !0);
    },
    o(c) {
      O(r), O(o.$$.fragment, c), u = !1;
    },
    d(c) {
      c && p(t), r && r.d(), T(o);
    }
  };
}
function te(e, t, n) {
  let s;
  wt(e, U, (r) => n(0, s = r));
  let { apiBaseUrl: i } = t, { language: o } = t;
  At(async () => {
    await U.start(i, { language: o });
  });
  const u = async (r) => {
    const c = r.detail.content;
    if (!c)
      return;
    const l = { role: I.User, content: c };
    U.addMessage(l), await U.search(c);
  };
  return e.$$set = (r) => {
    "apiBaseUrl" in r && n(2, i = r.apiBaseUrl), "language" in r && n(3, o = r.language);
  }, [s, u, i, o];
}
class ee extends R {
  constructor(t) {
    super(), z(this, t, te, Zt, C, { apiBaseUrl: 2, language: 3 }, Yt);
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
customElements.define("stg-ai-search-container", J(ee, { apiBaseUrl: { reflect: !0, type: "String", attribute: "api-base-url" }, language: { reflect: !0, type: "String", attribute: "language" } }, [], [], !1));
export {
  ee as AiSearchContainer
};
