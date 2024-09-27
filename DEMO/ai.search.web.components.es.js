var Cs = Object.defineProperty;
var Ms = (e, t, r) => t in e ? Cs(e, t, { enumerable: !0, configurable: !0, writable: !0, value: r }) : e[t] = r;
var we = (e, t, r) => Ms(e, typeof t != "symbol" ? t + "" : t, r);
function q() {
}
const tr = (e) => e;
function ne(e, t) {
  for (const r in t) e[r] = t[r];
  return (
    /** @type {T & S} */
    e
  );
}
function gn(e) {
  return e();
}
function ai() {
  return /* @__PURE__ */ Object.create(null);
}
function Ce(e) {
  e.forEach(gn);
}
function Le(e) {
  return typeof e == "function";
}
function J(e, t) {
  return e != e ? t == t : e !== t || e && typeof e == "object" || typeof e == "function";
}
let Tt;
function Br(e, t) {
  return e === t ? !0 : (Tt || (Tt = document.createElement("a")), Tt.href = t, e === Tt.href);
}
function Hs(e) {
  return Object.keys(e).length === 0;
}
function Rr(e, ...t) {
  if (e == null) {
    for (const i of t)
      i(void 0);
    return q;
  }
  const r = e.subscribe(...t);
  return r.unsubscribe ? () => r.unsubscribe() : r;
}
function wt(e) {
  let t;
  return Rr(e, (r) => t = r)(), t;
}
function oe(e, t, r) {
  e.$$.on_destroy.push(Rr(t, r));
}
function Ie(e, t, r, i) {
  if (e) {
    const n = mn(e, t, r, i);
    return e[0](n);
  }
}
function mn(e, t, r, i) {
  return e[1] && i ? ne(r.ctx.slice(), e[1](i(t))) : r.ctx;
}
function Se(e, t, r, i) {
  if (e[2] && i) {
    const n = e[2](i(r));
    if (t.dirty === void 0)
      return n;
    if (typeof n == "object") {
      const s = [], a = Math.max(t.dirty.length, n.length);
      for (let o = 0; o < a; o += 1)
        s[o] = t.dirty[o] | n[o];
      return s;
    }
    return t.dirty | n;
  }
  return t.dirty;
}
function Re(e, t, r, i, n, s) {
  if (n) {
    const a = mn(t, r, i, s);
    e.p(a, n);
  }
}
function $e(e) {
  if (e.ctx.length > 32) {
    const t = [], r = e.ctx.length / 32;
    for (let i = 0; i < r; i++)
      t[i] = -1;
    return t;
  }
  return -1;
}
function dt(e) {
  const t = {};
  for (const r in e) r[0] !== "$" && (t[r] = e[r]);
  return t;
}
function ye(e, t) {
  const r = {};
  t = new Set(t);
  for (const i in e) !t.has(i) && i[0] !== "$" && (r[i] = e[i]);
  return r;
}
function pn(e) {
  const t = {};
  for (const r in e)
    t[r] = !0;
  return t;
}
function ie(e) {
  return e ?? "";
}
const _n = typeof window < "u";
let $r = _n ? () => window.performance.now() : () => Date.now(), Dr = _n ? (e) => requestAnimationFrame(e) : q;
const at = /* @__PURE__ */ new Set();
function vn(e) {
  at.forEach((t) => {
    t.c(e) || (at.delete(t), t.f());
  }), at.size !== 0 && Dr(vn);
}
function Fr(e) {
  let t;
  return at.size === 0 && Dr(vn), {
    promise: new Promise((r) => {
      at.add(t = { c: e, f: r });
    }),
    abort() {
      at.delete(t);
    }
  };
}
const bn = typeof window < "u" ? window : typeof globalThis < "u" ? globalThis : (
  // @ts-ignore Node typings have this
  global
);
let wn = !1;
function Os() {
  wn = !0;
}
function xs() {
  wn = !1;
}
function v(e, t) {
  e.appendChild(t);
}
function Me(e, t, r) {
  const i = jr(e);
  if (!i.getElementById(t)) {
    const n = k("style");
    n.id = t, n.textContent = r, kn(i, n);
  }
}
function jr(e) {
  if (!e) return document;
  const t = e.getRootNode ? e.getRootNode() : e.ownerDocument;
  return t && /** @type {ShadowRoot} */
  t.host ? (
    /** @type {ShadowRoot} */
    t
  ) : e.ownerDocument;
}
function Ns(e) {
  const t = k("style");
  return t.textContent = "/* empty */", kn(jr(e), t), t.sheet;
}
function kn(e, t) {
  return v(
    /** @type {Document} */
    e.head || e,
    t
  ), t.sheet;
}
function O(e, t, r) {
  e.insertBefore(t, r || null);
}
function M(e) {
  e.parentNode && e.parentNode.removeChild(e);
}
function rr(e, t) {
  for (let r = 0; r < e.length; r += 1)
    e[r] && e[r].d(t);
}
function k(e) {
  return document.createElement(e);
}
function ot(e) {
  return document.createElementNS("http://www.w3.org/2000/svg", e);
}
function G(e) {
  return document.createTextNode(e);
}
function $() {
  return G(" ");
}
function ve() {
  return G("");
}
function Z(e, t, r, i) {
  return e.addEventListener(t, r, i), () => e.removeEventListener(t, r, i);
}
function yn(e) {
  return function(t) {
    return t.preventDefault(), e.call(this, t);
  };
}
function d(e, t, r) {
  r == null ? e.removeAttribute(t) : e.getAttribute(t) !== r && e.setAttribute(t, r);
}
const Ls = ["width", "height"];
function Be(e, t) {
  const r = Object.getOwnPropertyDescriptors(e.__proto__);
  for (const i in t)
    t[i] == null ? e.removeAttribute(i) : i === "style" ? e.style.cssText = t[i] : i === "__value" ? e.value = e[i] = t[i] : r[i] && r[i].set && Ls.indexOf(i) === -1 ? e[i] = t[i] : d(e, i, t[i]);
}
function Is(e) {
  return Array.from(e.childNodes);
}
function A(e, t) {
  t = "" + t, e.data !== t && (e.data = /** @type {string} */
  t);
}
function Wt(e, t) {
  e.value = t ?? "";
}
function At(e, t, r, i) {
  r == null ? e.style.removeProperty(t) : e.style.setProperty(t, r, "");
}
function T(e, t, r) {
  e.classList.toggle(t, !!r);
}
function Bn(e, t, { bubbles: r = !1, cancelable: i = !1 } = {}) {
  return new CustomEvent(e, { detail: t, bubbles: r, cancelable: i });
}
function Ss(e) {
  const t = {};
  return e.childNodes.forEach(
    /** @param {Element} node */
    (r) => {
      t[r.slot || "default"] = !0;
    }
  ), t;
}
function oi(e, t) {
  return new e(t);
}
const Jt = /* @__PURE__ */ new Map();
let Xt = 0;
function Rs(e) {
  let t = 5381, r = e.length;
  for (; r--; ) t = (t << 5) - t ^ e.charCodeAt(r);
  return t >>> 0;
}
function $s(e, t) {
  const r = { stylesheet: Ns(t), rules: {} };
  return Jt.set(e, r), r;
}
function Qt(e, t, r, i, n, s, a, o = 0) {
  const l = 16.666 / i;
  let c = `{
`;
  for (let b = 0; b <= 1; b += l) {
    const C = t + (r - t) * s(b);
    c += b * 100 + `%{${a(C, 1 - C)}}
`;
  }
  const u = c + `100% {${a(r, 1 - r)}}
}`, h = `__svelte_${Rs(u)}_${o}`, f = jr(e), { stylesheet: g, rules: m } = Jt.get(f) || $s(f, e);
  m[h] || (m[h] = !0, g.insertRule(`@keyframes ${h} ${u}`, g.cssRules.length));
  const p = e.style.animation || "";
  return e.style.animation = `${p ? `${p}, ` : ""}${h} ${i}ms linear ${n}ms 1 both`, Xt += 1, h;
}
function Kt(e, t) {
  const r = (e.style.animation || "").split(", "), i = r.filter(
    t ? (s) => s.indexOf(t) < 0 : (s) => s.indexOf("__svelte") === -1
    // remove all Svelte animations
  ), n = r.length - i.length;
  n && (e.style.animation = i.join(", "), Xt -= n, Xt || Ds());
}
function Ds() {
  Dr(() => {
    Xt || (Jt.forEach((e) => {
      const { ownerNode: t } = e.stylesheet;
      t && M(t);
    }), Jt.clear());
  });
}
let Ot;
function Pt(e) {
  Ot = e;
}
function zr() {
  if (!Ot) throw new Error("Function called outside component initialization");
  return Ot;
}
function Qe(e) {
  zr().$$.on_mount.push(e);
}
function Fs(e) {
  zr().$$.on_destroy.push(e);
}
function Ke() {
  const e = zr();
  return (t, r, { cancelable: i = !1 } = {}) => {
    const n = e.$$.callbacks[t];
    if (n) {
      const s = Bn(
        /** @type {string} */
        t,
        r,
        { cancelable: i }
      );
      return n.slice().forEach((a) => {
        a.call(e, s);
      }), !s.defaultPrevented;
    }
    return !0;
  };
}
function js(e, t) {
  const r = e.$$.callbacks[t.type];
  r && r.slice().forEach((i) => i.call(this, t));
}
const st = [], ke = [];
let lt = [];
const li = [], Pn = /* @__PURE__ */ Promise.resolve();
let Pr = !1;
function Cn() {
  Pr || (Pr = !0, Pn.then(P));
}
function Tr() {
  return Cn(), Pn;
}
function Ve(e) {
  lt.push(e);
}
const dr = /* @__PURE__ */ new Set();
let rt = 0;
function P() {
  if (rt !== 0)
    return;
  const e = Ot;
  do {
    try {
      for (; rt < st.length; ) {
        const t = st[rt];
        rt++, Pt(t), zs(t.$$);
      }
    } catch (t) {
      throw st.length = 0, rt = 0, t;
    }
    for (Pt(null), st.length = 0, rt = 0; ke.length; ) ke.pop()();
    for (let t = 0; t < lt.length; t += 1) {
      const r = lt[t];
      dr.has(r) || (dr.add(r), r());
    }
    lt.length = 0;
  } while (st.length);
  for (; li.length; )
    li.pop()();
  Pr = !1, dr.clear(), Pt(e);
}
function zs(e) {
  if (e.fragment !== null) {
    e.update(), Ce(e.before_update);
    const t = e.dirty;
    e.dirty = [-1], e.fragment && e.fragment.p(e.ctx, t), e.after_update.forEach(Ve);
  }
}
function Ts(e) {
  const t = [], r = [];
  lt.forEach((i) => e.indexOf(i) === -1 ? t.push(i) : r.push(i)), r.forEach((i) => i()), lt = t;
}
let kt;
function Ur() {
  return kt || (kt = Promise.resolve(), kt.then(() => {
    kt = null;
  })), kt;
}
function Ae(e, t, r) {
  e.dispatchEvent(Bn(`${t ? "intro" : "outro"}${r}`));
}
const Et = /* @__PURE__ */ new Set();
let Ne;
function ee() {
  Ne = {
    r: 0,
    c: [],
    p: Ne
    // parent group
  };
}
function te() {
  Ne.r || Ce(Ne.c), Ne = Ne.p;
}
function w(e, t) {
  e && e.i && (Et.delete(e), e.i(t));
}
function B(e, t, r, i) {
  if (e && e.o) {
    if (Et.has(e)) return;
    Et.add(e), Ne.c.push(() => {
      Et.delete(e), i && (r && e.d(1), i());
    }), e.o(t);
  } else i && i();
}
const Vr = { duration: 0 };
function Us(e, t, r) {
  const i = { direction: "in" };
  let n = t(e, r, i), s = !1, a, o, l = 0;
  function c() {
    a && Kt(e, a);
  }
  function u() {
    const {
      delay: f = 0,
      duration: g = 300,
      easing: m = tr,
      tick: p = q,
      css: b
    } = n || Vr;
    b && (a = Qt(e, 0, 1, g, f, m, b, l++)), p(0, 1);
    const C = $r() + f, H = C + g;
    o && o.abort(), s = !0, Ve(() => Ae(e, !0, "start")), o = Fr((_) => {
      if (s) {
        if (_ >= H)
          return p(1, 0), Ae(e, !0, "end"), c(), s = !1;
        if (_ >= C) {
          const L = m((_ - C) / g);
          p(L, 1 - L);
        }
      }
      return s;
    });
  }
  let h = !1;
  return {
    start() {
      h || (h = !0, Kt(e), Le(n) ? (n = n(i), Ur().then(u)) : u());
    },
    invalidate() {
      h = !1;
    },
    end() {
      s && (c(), s = !1);
    }
  };
}
function Vs(e, t, r) {
  const i = { direction: "out" };
  let n = t(e, r, i), s = !0, a;
  const o = Ne;
  o.r += 1;
  let l;
  function c() {
    const {
      delay: u = 0,
      duration: h = 300,
      easing: f = tr,
      tick: g = q,
      css: m
    } = n || Vr;
    m && (a = Qt(e, 1, 0, h, u, f, m));
    const p = $r() + u, b = p + h;
    Ve(() => Ae(e, !1, "start")), "inert" in e && (l = /** @type {HTMLElement} */
    e.inert, e.inert = !0), Fr((C) => {
      if (s) {
        if (C >= b)
          return g(0, 1), Ae(e, !1, "end"), --o.r || Ce(o.c), !1;
        if (C >= p) {
          const H = f((C - p) / h);
          g(1 - H, H);
        }
      }
      return s;
    });
  }
  return Le(n) ? Ur().then(() => {
    n = n(i), c();
  }) : c(), {
    end(u) {
      u && "inert" in e && (e.inert = l), u && n.tick && n.tick(1, 0), s && (a && Kt(e, a), s = !1);
    }
  };
}
function ci(e, t, r, i) {
  let s = t(e, r, { direction: "both" }), a = i ? 0 : 1, o = null, l = null, c = null, u;
  function h() {
    c && Kt(e, c);
  }
  function f(m, p) {
    const b = (
      /** @type {Program['d']} */
      m.b - a
    );
    return p *= Math.abs(b), {
      a,
      b: m.b,
      d: b,
      duration: p,
      start: m.start,
      end: m.start + p,
      group: m.group
    };
  }
  function g(m) {
    const {
      delay: p = 0,
      duration: b = 300,
      easing: C = tr,
      tick: H = q,
      css: _
    } = s || Vr, L = {
      start: $r() + p,
      b: m
    };
    m || (L.group = Ne, Ne.r += 1), "inert" in e && (m ? u !== void 0 && (e.inert = u) : (u = /** @type {HTMLElement} */
    e.inert, e.inert = !0)), o || l ? l = L : (_ && (h(), c = Qt(e, a, m, b, p, C, _)), m && H(0, 1), o = f(L, b), Ve(() => Ae(e, m, "start")), Fr((x) => {
      if (l && x > l.start && (o = f(l, b), l = null, Ae(e, o.b, "start"), _ && (h(), c = Qt(
        e,
        a,
        o.b,
        o.duration,
        0,
        C,
        s.css
      ))), o) {
        if (x >= o.end)
          H(a = o.b, 1 - a), Ae(e, o.b, "end"), l || (o.b ? h() : --o.group.r || Ce(o.group.c)), o = null;
        else if (x >= o.start) {
          const D = x - o.start;
          a = o.a + o.d * C(D / o.duration), H(a, 1 - a);
        }
      }
      return !!(o || l);
    }));
  }
  return {
    run(m) {
      Le(s) ? Ur().then(() => {
        s = s({ direction: m ? "in" : "out" }), g(m);
      }) : g(m);
    },
    end() {
      h(), o = l = null;
    }
  };
}
function Ee(e) {
  return (e == null ? void 0 : e.length) !== void 0 ? e : Array.from(e);
}
function gt(e, t) {
  const r = {}, i = {}, n = { $$scope: 1 };
  let s = e.length;
  for (; s--; ) {
    const a = e[s], o = t[s];
    if (o) {
      for (const l in a)
        l in o || (i[l] = 1);
      for (const l in o)
        n[l] || (r[l] = o[l], n[l] = 1);
      e[s] = o;
    } else
      for (const l in a)
        n[l] = 1;
  }
  for (const a in i)
    a in r || (r[a] = void 0);
  return r;
}
function E(e) {
  e && e.c();
}
function U(e, t, r) {
  const { fragment: i, after_update: n } = e.$$;
  i && i.m(t, r), Ve(() => {
    const s = e.$$.on_mount.map(gn).filter(Le);
    e.$$.on_destroy ? e.$$.on_destroy.push(...s) : Ce(s), e.$$.on_mount = [];
  }), n.forEach(Ve);
}
function V(e, t) {
  const r = e.$$;
  r.fragment !== null && (Ts(r.after_update), Ce(r.on_destroy), r.fragment && r.fragment.d(t), r.on_destroy = r.fragment = null, r.ctx = []);
}
function Es(e, t) {
  e.$$.dirty[0] === -1 && (st.push(e), Cn(), e.$$.dirty.fill(0)), e.$$.dirty[t / 31 | 0] |= 1 << t % 31;
}
function X(e, t, r, i, n, s, a = null, o = [-1]) {
  const l = Ot;
  Pt(e);
  const c = e.$$ = {
    fragment: null,
    ctx: [],
    // state
    props: s,
    update: q,
    not_equal: n,
    bound: ai(),
    // lifecycle
    on_mount: [],
    on_destroy: [],
    on_disconnect: [],
    before_update: [],
    after_update: [],
    context: new Map(t.context || (l ? l.$$.context : [])),
    // everything else
    callbacks: ai(),
    dirty: o,
    skip_bound: !1,
    root: t.target || l.$$.root
  };
  a && a(c.root);
  let u = !1;
  if (c.ctx = r ? r(e, t.props || {}, (h, f, ...g) => {
    const m = g.length ? g[0] : f;
    return c.ctx && n(c.ctx[h], c.ctx[h] = m) && (!c.skip_bound && c.bound[h] && c.bound[h](m), u && Es(e, h)), f;
  }) : [], c.update(), u = !0, Ce(c.before_update), c.fragment = i ? i(c.ctx) : !1, t.target) {
    if (t.hydrate) {
      Os();
      const h = Is(t.target);
      c.fragment && c.fragment.l(h), h.forEach(M);
    } else
      c.fragment && c.fragment.c();
    t.intro && w(e.$$.fragment), U(e, t.target, t.anchor), xs(), P();
  }
  Pt(l);
}
let Mn;
typeof HTMLElement == "function" && (Mn = class extends HTMLElement {
  constructor(t, r, i) {
    super();
    /** The Svelte component constructor */
    we(this, "$$ctor");
    /** Slots */
    we(this, "$$s");
    /** The Svelte component instance */
    we(this, "$$c");
    /** Whether or not the custom element is connected */
    we(this, "$$cn", !1);
    /** Component props data */
    we(this, "$$d", {});
    /** `true` if currently in the process of reflecting component props back to attributes */
    we(this, "$$r", !1);
    /** @type {Record<string, CustomElementPropDefinition>} Props definition (name, reflected, type etc) */
    we(this, "$$p_d", {});
    /** @type {Record<string, Function[]>} Event listeners */
    we(this, "$$l", {});
    /** @type {Map<Function, Function>} Event listener unsubscribe functions */
    we(this, "$$l_u", /* @__PURE__ */ new Map());
    this.$$ctor = t, this.$$s = r, i && this.attachShadow({ mode: "open" });
  }
  addEventListener(t, r, i) {
    if (this.$$l[t] = this.$$l[t] || [], this.$$l[t].push(r), this.$$c) {
      const n = this.$$c.$on(t, r);
      this.$$l_u.set(r, n);
    }
    super.addEventListener(t, r, i);
  }
  removeEventListener(t, r, i) {
    if (super.removeEventListener(t, r, i), this.$$c) {
      const n = this.$$l_u.get(r);
      n && (n(), this.$$l_u.delete(r));
    }
  }
  async connectedCallback() {
    if (this.$$cn = !0, !this.$$c) {
      let t = function(s) {
        return () => {
          let a;
          return {
            c: function() {
              a = k("slot"), s !== "default" && d(a, "name", s);
            },
            /**
             * @param {HTMLElement} target
             * @param {HTMLElement} [anchor]
             */
            m: function(c, u) {
              O(c, a, u);
            },
            d: function(c) {
              c && M(a);
            }
          };
        };
      };
      if (await Promise.resolve(), !this.$$cn || this.$$c)
        return;
      const r = {}, i = Ss(this);
      for (const s of this.$$s)
        s in i && (r[s] = [t(s)]);
      for (const s of this.attributes) {
        const a = this.$$g_p(s.name);
        a in this.$$d || (this.$$d[a] = qt(a, s.value, this.$$p_d, "toProp"));
      }
      for (const s in this.$$p_d)
        !(s in this.$$d) && this[s] !== void 0 && (this.$$d[s] = this[s], delete this[s]);
      this.$$c = new this.$$ctor({
        target: this.shadowRoot || this,
        props: {
          ...this.$$d,
          $$slots: r,
          $$scope: {
            ctx: []
          }
        }
      });
      const n = () => {
        this.$$r = !0;
        for (const s in this.$$p_d)
          if (this.$$d[s] = this.$$c.$$.ctx[this.$$c.$$.props[s]], this.$$p_d[s].reflect) {
            const a = qt(
              s,
              this.$$d[s],
              this.$$p_d,
              "toAttribute"
            );
            a == null ? this.removeAttribute(this.$$p_d[s].attribute || s) : this.setAttribute(this.$$p_d[s].attribute || s, a);
          }
        this.$$r = !1;
      };
      this.$$c.$$.after_update.push(n), n();
      for (const s in this.$$l)
        for (const a of this.$$l[s]) {
          const o = this.$$c.$on(s, a);
          this.$$l_u.set(a, o);
        }
      this.$$l = {};
    }
  }
  // We don't need this when working within Svelte code, but for compatibility of people using this outside of Svelte
  // and setting attributes through setAttribute etc, this is helpful
  attributeChangedCallback(t, r, i) {
    var n;
    this.$$r || (t = this.$$g_p(t), this.$$d[t] = qt(t, i, this.$$p_d, "toProp"), (n = this.$$c) == null || n.$set({ [t]: this.$$d[t] }));
  }
  disconnectedCallback() {
    this.$$cn = !1, Promise.resolve().then(() => {
      !this.$$cn && this.$$c && (this.$$c.$destroy(), this.$$c = void 0);
    });
  }
  $$g_p(t) {
    return Object.keys(this.$$p_d).find(
      (r) => this.$$p_d[r].attribute === t || !this.$$p_d[r].attribute && r.toLowerCase() === t
    ) || t;
  }
});
function qt(e, t, r, i) {
  var s;
  const n = (s = r[e]) == null ? void 0 : s.type;
  if (t = n === "Boolean" && typeof t != "boolean" ? t != null : t, !i || !r[e])
    return t;
  if (i === "toAttribute")
    switch (n) {
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
    switch (n) {
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
function Q(e, t, r, i, n, s) {
  let a = class extends Mn {
    constructor() {
      super(e, r, n), this.$$p_d = t;
    }
    static get observedAttributes() {
      return Object.keys(t).map(
        (o) => (t[o].attribute || o).toLowerCase()
      );
    }
  };
  return Object.keys(t).forEach((o) => {
    Object.defineProperty(a.prototype, o, {
      get() {
        return this.$$c && o in this.$$c ? this.$$c[o] : this.$$d[o];
      },
      set(l) {
        var c;
        l = qt(o, l, t), this.$$d[o] = l, (c = this.$$c) == null || c.$set({ [o]: l });
      }
    });
  }), i.forEach((o) => {
    Object.defineProperty(a.prototype, o, {
      get() {
        var l;
        return (l = this.$$c) == null ? void 0 : l[o];
      }
    });
  }), e.element = /** @type {any} */
  a, a;
}
class K {
  constructor() {
    /**
     * ### PRIVATE API
     *
     * Do not use, may change at any time
     *
     * @type {any}
     */
    we(this, "$$");
    /**
     * ### PRIVATE API
     *
     * Do not use, may change at any time
     *
     * @type {any}
     */
    we(this, "$$set");
  }
  /** @returns {void} */
  $destroy() {
    V(this, 1), this.$destroy = q;
  }
  /**
   * @template {Extract<keyof Events, string>} K
   * @param {K} type
   * @param {((e: Events[K]) => void) | null | undefined} callback
   * @returns {() => void}
   */
  $on(t, r) {
    if (!Le(r))
      return q;
    const i = this.$$.callbacks[t] || (this.$$.callbacks[t] = []);
    return i.push(r), () => {
      const n = i.indexOf(r);
      n !== -1 && i.splice(n, 1);
    };
  }
  /**
   * @param {Partial<Props>} props
   * @returns {void}
   */
  $set(t) {
    this.$$set && !Hs(t) && (this.$$.skip_bound = !0, this.$$set(t), this.$$.skip_bound = !1);
  }
}
const qs = '"./variables.module.css"', Gs = "var(--ai-search-font-base, 'Bricolage Grotesque', sans-serif)", Ws = 'var(--ai-search-font-headings, "Lato", sans-serif)', As = "var(--ai-search-color-dark, #212121)", Js = "_base_55aig_4", Je = {
  variables: qs,
  fontBase: Gs,
  fontHeadings: Ws,
  dark: As,
  base: Js
}, it = [];
function Xs(e, t) {
  return {
    subscribe: mt(e, t).subscribe
  };
}
function mt(e, t = q) {
  let r;
  const i = /* @__PURE__ */ new Set();
  function n(o) {
    if (J(e, o) && (e = o, r)) {
      const l = !it.length;
      for (const c of i)
        c[1](), it.push(c, e);
      if (l) {
        for (let c = 0; c < it.length; c += 2)
          it[c][0](it[c + 1]);
        it.length = 0;
      }
    }
  }
  function s(o) {
    n(o(e));
  }
  function a(o, l = q) {
    const c = [o, l];
    return i.add(c), i.size === 1 && (r = t(n, s) || q), o(e), () => {
      i.delete(c), i.size === 0 && r && (r(), r = null);
    };
  }
  return { set: n, update: s, subscribe: a };
}
function ze(e, t, r) {
  const i = !Array.isArray(e), n = i ? [e] : e;
  if (!n.every(Boolean))
    throw new Error("derived() expects stores as input, got a falsy value");
  const s = t.length < 2;
  return Xs(r, (a, o) => {
    let l = !1;
    const c = [];
    let u = 0, h = q;
    const f = () => {
      if (u)
        return;
      h();
      const m = t(i ? c[0] : c, a, o);
      s ? a(m) : h = Le(m) ? m : q;
    }, g = n.map(
      (m, p) => Rr(
        m,
        (b) => {
          c[p] = b, u &= ~(1 << p), l && f();
        },
        () => {
          u |= 1 << p;
        }
      )
    );
    return l = !0, f(), function() {
      Ce(g), h(), l = !1;
    };
  });
}
function Qs(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var Ks = function(t) {
  return Ys(t) && !Zs(t);
};
function Ys(e) {
  return !!e && typeof e == "object";
}
function Zs(e) {
  var t = Object.prototype.toString.call(e);
  return t === "[object RegExp]" || t === "[object Date]" || ra(e);
}
var ea = typeof Symbol == "function" && Symbol.for, ta = ea ? Symbol.for("react.element") : 60103;
function ra(e) {
  return e.$$typeof === ta;
}
function ia(e) {
  return Array.isArray(e) ? [] : {};
}
function xt(e, t) {
  return t.clone !== !1 && t.isMergeableObject(e) ? ct(ia(e), e, t) : e;
}
function na(e, t, r) {
  return e.concat(t).map(function(i) {
    return xt(i, r);
  });
}
function sa(e, t) {
  if (!t.customMerge)
    return ct;
  var r = t.customMerge(e);
  return typeof r == "function" ? r : ct;
}
function aa(e) {
  return Object.getOwnPropertySymbols ? Object.getOwnPropertySymbols(e).filter(function(t) {
    return Object.propertyIsEnumerable.call(e, t);
  }) : [];
}
function ui(e) {
  return Object.keys(e).concat(aa(e));
}
function Hn(e, t) {
  try {
    return t in e;
  } catch {
    return !1;
  }
}
function oa(e, t) {
  return Hn(e, t) && !(Object.hasOwnProperty.call(e, t) && Object.propertyIsEnumerable.call(e, t));
}
function la(e, t, r) {
  var i = {};
  return r.isMergeableObject(e) && ui(e).forEach(function(n) {
    i[n] = xt(e[n], r);
  }), ui(t).forEach(function(n) {
    oa(e, n) || (Hn(e, n) && r.isMergeableObject(t[n]) ? i[n] = sa(n, r)(e[n], t[n], r) : i[n] = xt(t[n], r));
  }), i;
}
function ct(e, t, r) {
  r = r || {}, r.arrayMerge = r.arrayMerge || na, r.isMergeableObject = r.isMergeableObject || Ks, r.cloneUnlessOtherwiseSpecified = xt;
  var i = Array.isArray(t), n = Array.isArray(e), s = i === n;
  return s ? i ? r.arrayMerge(e, t, r) : la(e, t, r) : xt(t, r);
}
ct.all = function(t, r) {
  if (!Array.isArray(t))
    throw new Error("first argument should be an array");
  return t.reduce(function(i, n) {
    return ct(i, n, r);
  }, {});
};
var ca = ct, ua = ca;
const fa = /* @__PURE__ */ Qs(ua);
var Cr = function(e, t) {
  return Cr = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(r, i) {
    r.__proto__ = i;
  } || function(r, i) {
    for (var n in i) Object.prototype.hasOwnProperty.call(i, n) && (r[n] = i[n]);
  }, Cr(e, t);
};
function ir(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Class extends value " + String(t) + " is not a constructor or null");
  Cr(e, t);
  function r() {
    this.constructor = e;
  }
  e.prototype = t === null ? Object.create(t) : (r.prototype = t.prototype, new r());
}
var z = function() {
  return z = Object.assign || function(t) {
    for (var r, i = 1, n = arguments.length; i < n; i++) {
      r = arguments[i];
      for (var s in r) Object.prototype.hasOwnProperty.call(r, s) && (t[s] = r[s]);
    }
    return t;
  }, z.apply(this, arguments);
};
function ha(e, t) {
  var r = {};
  for (var i in e) Object.prototype.hasOwnProperty.call(e, i) && t.indexOf(i) < 0 && (r[i] = e[i]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function")
    for (var n = 0, i = Object.getOwnPropertySymbols(e); n < i.length; n++)
      t.indexOf(i[n]) < 0 && Object.prototype.propertyIsEnumerable.call(e, i[n]) && (r[i[n]] = e[i[n]]);
  return r;
}
function gr(e, t, r) {
  if (r || arguments.length === 2) for (var i = 0, n = t.length, s; i < n; i++)
    (s || !(i in t)) && (s || (s = Array.prototype.slice.call(t, 0, i)), s[i] = t[i]);
  return e.concat(s || Array.prototype.slice.call(t));
}
var F;
(function(e) {
  e[e.EXPECT_ARGUMENT_CLOSING_BRACE = 1] = "EXPECT_ARGUMENT_CLOSING_BRACE", e[e.EMPTY_ARGUMENT = 2] = "EMPTY_ARGUMENT", e[e.MALFORMED_ARGUMENT = 3] = "MALFORMED_ARGUMENT", e[e.EXPECT_ARGUMENT_TYPE = 4] = "EXPECT_ARGUMENT_TYPE", e[e.INVALID_ARGUMENT_TYPE = 5] = "INVALID_ARGUMENT_TYPE", e[e.EXPECT_ARGUMENT_STYLE = 6] = "EXPECT_ARGUMENT_STYLE", e[e.INVALID_NUMBER_SKELETON = 7] = "INVALID_NUMBER_SKELETON", e[e.INVALID_DATE_TIME_SKELETON = 8] = "INVALID_DATE_TIME_SKELETON", e[e.EXPECT_NUMBER_SKELETON = 9] = "EXPECT_NUMBER_SKELETON", e[e.EXPECT_DATE_TIME_SKELETON = 10] = "EXPECT_DATE_TIME_SKELETON", e[e.UNCLOSED_QUOTE_IN_ARGUMENT_STYLE = 11] = "UNCLOSED_QUOTE_IN_ARGUMENT_STYLE", e[e.EXPECT_SELECT_ARGUMENT_OPTIONS = 12] = "EXPECT_SELECT_ARGUMENT_OPTIONS", e[e.EXPECT_PLURAL_ARGUMENT_OFFSET_VALUE = 13] = "EXPECT_PLURAL_ARGUMENT_OFFSET_VALUE", e[e.INVALID_PLURAL_ARGUMENT_OFFSET_VALUE = 14] = "INVALID_PLURAL_ARGUMENT_OFFSET_VALUE", e[e.EXPECT_SELECT_ARGUMENT_SELECTOR = 15] = "EXPECT_SELECT_ARGUMENT_SELECTOR", e[e.EXPECT_PLURAL_ARGUMENT_SELECTOR = 16] = "EXPECT_PLURAL_ARGUMENT_SELECTOR", e[e.EXPECT_SELECT_ARGUMENT_SELECTOR_FRAGMENT = 17] = "EXPECT_SELECT_ARGUMENT_SELECTOR_FRAGMENT", e[e.EXPECT_PLURAL_ARGUMENT_SELECTOR_FRAGMENT = 18] = "EXPECT_PLURAL_ARGUMENT_SELECTOR_FRAGMENT", e[e.INVALID_PLURAL_ARGUMENT_SELECTOR = 19] = "INVALID_PLURAL_ARGUMENT_SELECTOR", e[e.DUPLICATE_PLURAL_ARGUMENT_SELECTOR = 20] = "DUPLICATE_PLURAL_ARGUMENT_SELECTOR", e[e.DUPLICATE_SELECT_ARGUMENT_SELECTOR = 21] = "DUPLICATE_SELECT_ARGUMENT_SELECTOR", e[e.MISSING_OTHER_CLAUSE = 22] = "MISSING_OTHER_CLAUSE", e[e.INVALID_TAG = 23] = "INVALID_TAG", e[e.INVALID_TAG_NAME = 25] = "INVALID_TAG_NAME", e[e.UNMATCHED_CLOSING_TAG = 26] = "UNMATCHED_CLOSING_TAG", e[e.UNCLOSED_TAG = 27] = "UNCLOSED_TAG";
})(F || (F = {}));
var Y;
(function(e) {
  e[e.literal = 0] = "literal", e[e.argument = 1] = "argument", e[e.number = 2] = "number", e[e.date = 3] = "date", e[e.time = 4] = "time", e[e.select = 5] = "select", e[e.plural = 6] = "plural", e[e.pound = 7] = "pound", e[e.tag = 8] = "tag";
})(Y || (Y = {}));
var ut;
(function(e) {
  e[e.number = 0] = "number", e[e.dateTime = 1] = "dateTime";
})(ut || (ut = {}));
function fi(e) {
  return e.type === Y.literal;
}
function da(e) {
  return e.type === Y.argument;
}
function On(e) {
  return e.type === Y.number;
}
function xn(e) {
  return e.type === Y.date;
}
function Nn(e) {
  return e.type === Y.time;
}
function Ln(e) {
  return e.type === Y.select;
}
function In(e) {
  return e.type === Y.plural;
}
function ga(e) {
  return e.type === Y.pound;
}
function Sn(e) {
  return e.type === Y.tag;
}
function Rn(e) {
  return !!(e && typeof e == "object" && e.type === ut.number);
}
function Mr(e) {
  return !!(e && typeof e == "object" && e.type === ut.dateTime);
}
var $n = /[ \xA0\u1680\u2000-\u200A\u202F\u205F\u3000]/, ma = /(?:[Eec]{1,6}|G{1,5}|[Qq]{1,5}|(?:[yYur]+|U{1,5})|[ML]{1,5}|d{1,2}|D{1,3}|F{1}|[abB]{1,5}|[hkHK]{1,2}|w{1,2}|W{1}|m{1,2}|s{1,2}|[zZOvVxX]{1,4})(?=([^']*'[^']*')*[^']*$)/g;
function pa(e) {
  var t = {};
  return e.replace(ma, function(r) {
    var i = r.length;
    switch (r[0]) {
      case "G":
        t.era = i === 4 ? "long" : i === 5 ? "narrow" : "short";
        break;
      case "y":
        t.year = i === 2 ? "2-digit" : "numeric";
        break;
      case "Y":
      case "u":
      case "U":
      case "r":
        throw new RangeError("`Y/u/U/r` (year) patterns are not supported, use `y` instead");
      case "q":
      case "Q":
        throw new RangeError("`q/Q` (quarter) patterns are not supported");
      case "M":
      case "L":
        t.month = ["numeric", "2-digit", "short", "long", "narrow"][i - 1];
        break;
      case "w":
      case "W":
        throw new RangeError("`w/W` (week) patterns are not supported");
      case "d":
        t.day = ["numeric", "2-digit"][i - 1];
        break;
      case "D":
      case "F":
      case "g":
        throw new RangeError("`D/F/g` (day) patterns are not supported, use `d` instead");
      case "E":
        t.weekday = i === 4 ? "long" : i === 5 ? "narrow" : "short";
        break;
      case "e":
        if (i < 4)
          throw new RangeError("`e..eee` (weekday) patterns are not supported");
        t.weekday = ["short", "long", "narrow", "short"][i - 4];
        break;
      case "c":
        if (i < 4)
          throw new RangeError("`c..ccc` (weekday) patterns are not supported");
        t.weekday = ["short", "long", "narrow", "short"][i - 4];
        break;
      case "a":
        t.hour12 = !0;
        break;
      case "b":
      case "B":
        throw new RangeError("`b/B` (period) patterns are not supported, use `a` instead");
      case "h":
        t.hourCycle = "h12", t.hour = ["numeric", "2-digit"][i - 1];
        break;
      case "H":
        t.hourCycle = "h23", t.hour = ["numeric", "2-digit"][i - 1];
        break;
      case "K":
        t.hourCycle = "h11", t.hour = ["numeric", "2-digit"][i - 1];
        break;
      case "k":
        t.hourCycle = "h24", t.hour = ["numeric", "2-digit"][i - 1];
        break;
      case "j":
      case "J":
      case "C":
        throw new RangeError("`j/J/C` (hour) patterns are not supported, use `h/H/K/k` instead");
      case "m":
        t.minute = ["numeric", "2-digit"][i - 1];
        break;
      case "s":
        t.second = ["numeric", "2-digit"][i - 1];
        break;
      case "S":
      case "A":
        throw new RangeError("`S/A` (second) patterns are not supported, use `s` instead");
      case "z":
        t.timeZoneName = i < 4 ? "short" : "long";
        break;
      case "Z":
      case "O":
      case "v":
      case "V":
      case "X":
      case "x":
        throw new RangeError("`Z/O/v/V/X/x` (timeZone) patterns are not supported, use `z` instead");
    }
    return "";
  }), t;
}
var _a = /[\t-\r \x85\u200E\u200F\u2028\u2029]/i;
function va(e) {
  if (e.length === 0)
    throw new Error("Number skeleton cannot be empty");
  for (var t = e.split(_a).filter(function(f) {
    return f.length > 0;
  }), r = [], i = 0, n = t; i < n.length; i++) {
    var s = n[i], a = s.split("/");
    if (a.length === 0)
      throw new Error("Invalid number skeleton");
    for (var o = a[0], l = a.slice(1), c = 0, u = l; c < u.length; c++) {
      var h = u[c];
      if (h.length === 0)
        throw new Error("Invalid number skeleton");
    }
    r.push({ stem: o, options: l });
  }
  return r;
}
function ba(e) {
  return e.replace(/^(.*?)-/, "");
}
var hi = /^\.(?:(0+)(\*)?|(#+)|(0+)(#+))$/g, Dn = /^(@+)?(\+|#+)?[rs]?$/g, wa = /(\*)(0+)|(#+)(0+)|(0+)/g, Fn = /^(0+)$/;
function di(e) {
  var t = {};
  return e[e.length - 1] === "r" ? t.roundingPriority = "morePrecision" : e[e.length - 1] === "s" && (t.roundingPriority = "lessPrecision"), e.replace(Dn, function(r, i, n) {
    return typeof n != "string" ? (t.minimumSignificantDigits = i.length, t.maximumSignificantDigits = i.length) : n === "+" ? t.minimumSignificantDigits = i.length : i[0] === "#" ? t.maximumSignificantDigits = i.length : (t.minimumSignificantDigits = i.length, t.maximumSignificantDigits = i.length + (typeof n == "string" ? n.length : 0)), "";
  }), t;
}
function jn(e) {
  switch (e) {
    case "sign-auto":
      return {
        signDisplay: "auto"
      };
    case "sign-accounting":
    case "()":
      return {
        currencySign: "accounting"
      };
    case "sign-always":
    case "+!":
      return {
        signDisplay: "always"
      };
    case "sign-accounting-always":
    case "()!":
      return {
        signDisplay: "always",
        currencySign: "accounting"
      };
    case "sign-except-zero":
    case "+?":
      return {
        signDisplay: "exceptZero"
      };
    case "sign-accounting-except-zero":
    case "()?":
      return {
        signDisplay: "exceptZero",
        currencySign: "accounting"
      };
    case "sign-never":
    case "+_":
      return {
        signDisplay: "never"
      };
  }
}
function ka(e) {
  var t;
  if (e[0] === "E" && e[1] === "E" ? (t = {
    notation: "engineering"
  }, e = e.slice(2)) : e[0] === "E" && (t = {
    notation: "scientific"
  }, e = e.slice(1)), t) {
    var r = e.slice(0, 2);
    if (r === "+!" ? (t.signDisplay = "always", e = e.slice(2)) : r === "+?" && (t.signDisplay = "exceptZero", e = e.slice(2)), !Fn.test(e))
      throw new Error("Malformed concise eng/scientific notation");
    t.minimumIntegerDigits = e.length;
  }
  return t;
}
function gi(e) {
  var t = {}, r = jn(e);
  return r || t;
}
function ya(e) {
  for (var t = {}, r = 0, i = e; r < i.length; r++) {
    var n = i[r];
    switch (n.stem) {
      case "percent":
      case "%":
        t.style = "percent";
        continue;
      case "%x100":
        t.style = "percent", t.scale = 100;
        continue;
      case "currency":
        t.style = "currency", t.currency = n.options[0];
        continue;
      case "group-off":
      case ",_":
        t.useGrouping = !1;
        continue;
      case "precision-integer":
      case ".":
        t.maximumFractionDigits = 0;
        continue;
      case "measure-unit":
      case "unit":
        t.style = "unit", t.unit = ba(n.options[0]);
        continue;
      case "compact-short":
      case "K":
        t.notation = "compact", t.compactDisplay = "short";
        continue;
      case "compact-long":
      case "KK":
        t.notation = "compact", t.compactDisplay = "long";
        continue;
      case "scientific":
        t = z(z(z({}, t), { notation: "scientific" }), n.options.reduce(function(l, c) {
          return z(z({}, l), gi(c));
        }, {}));
        continue;
      case "engineering":
        t = z(z(z({}, t), { notation: "engineering" }), n.options.reduce(function(l, c) {
          return z(z({}, l), gi(c));
        }, {}));
        continue;
      case "notation-simple":
        t.notation = "standard";
        continue;
      case "unit-width-narrow":
        t.currencyDisplay = "narrowSymbol", t.unitDisplay = "narrow";
        continue;
      case "unit-width-short":
        t.currencyDisplay = "code", t.unitDisplay = "short";
        continue;
      case "unit-width-full-name":
        t.currencyDisplay = "name", t.unitDisplay = "long";
        continue;
      case "unit-width-iso-code":
        t.currencyDisplay = "symbol";
        continue;
      case "scale":
        t.scale = parseFloat(n.options[0]);
        continue;
      case "rounding-mode-floor":
        t.roundingMode = "floor";
        continue;
      case "rounding-mode-ceiling":
        t.roundingMode = "ceil";
        continue;
      case "rounding-mode-down":
        t.roundingMode = "trunc";
        continue;
      case "rounding-mode-up":
        t.roundingMode = "expand";
        continue;
      case "rounding-mode-half-even":
        t.roundingMode = "halfEven";
        continue;
      case "rounding-mode-half-down":
        t.roundingMode = "halfTrunc";
        continue;
      case "rounding-mode-half-up":
        t.roundingMode = "halfExpand";
        continue;
      case "integer-width":
        if (n.options.length > 1)
          throw new RangeError("integer-width stems only accept a single optional option");
        n.options[0].replace(wa, function(l, c, u, h, f, g) {
          if (c)
            t.minimumIntegerDigits = u.length;
          else {
            if (h && f)
              throw new Error("We currently do not support maximum integer digits");
            if (g)
              throw new Error("We currently do not support exact integer digits");
          }
          return "";
        });
        continue;
    }
    if (Fn.test(n.stem)) {
      t.minimumIntegerDigits = n.stem.length;
      continue;
    }
    if (hi.test(n.stem)) {
      if (n.options.length > 1)
        throw new RangeError("Fraction-precision stems only accept a single optional option");
      n.stem.replace(hi, function(l, c, u, h, f, g) {
        return u === "*" ? t.minimumFractionDigits = c.length : h && h[0] === "#" ? t.maximumFractionDigits = h.length : f && g ? (t.minimumFractionDigits = f.length, t.maximumFractionDigits = f.length + g.length) : (t.minimumFractionDigits = c.length, t.maximumFractionDigits = c.length), "";
      });
      var s = n.options[0];
      s === "w" ? t = z(z({}, t), { trailingZeroDisplay: "stripIfInteger" }) : s && (t = z(z({}, t), di(s)));
      continue;
    }
    if (Dn.test(n.stem)) {
      t = z(z({}, t), di(n.stem));
      continue;
    }
    var a = jn(n.stem);
    a && (t = z(z({}, t), a));
    var o = ka(n.stem);
    o && (t = z(z({}, t), o));
  }
  return t;
}
var Ut = {
  "001": [
    "H",
    "h"
  ],
  AC: [
    "H",
    "h",
    "hb",
    "hB"
  ],
  AD: [
    "H",
    "hB"
  ],
  AE: [
    "h",
    "hB",
    "hb",
    "H"
  ],
  AF: [
    "H",
    "hb",
    "hB",
    "h"
  ],
  AG: [
    "h",
    "hb",
    "H",
    "hB"
  ],
  AI: [
    "H",
    "h",
    "hb",
    "hB"
  ],
  AL: [
    "h",
    "H",
    "hB"
  ],
  AM: [
    "H",
    "hB"
  ],
  AO: [
    "H",
    "hB"
  ],
  AR: [
    "H",
    "h",
    "hB",
    "hb"
  ],
  AS: [
    "h",
    "H"
  ],
  AT: [
    "H",
    "hB"
  ],
  AU: [
    "h",
    "hb",
    "H",
    "hB"
  ],
  AW: [
    "H",
    "hB"
  ],
  AX: [
    "H"
  ],
  AZ: [
    "H",
    "hB",
    "h"
  ],
  BA: [
    "H",
    "hB",
    "h"
  ],
  BB: [
    "h",
    "hb",
    "H",
    "hB"
  ],
  BD: [
    "h",
    "hB",
    "H"
  ],
  BE: [
    "H",
    "hB"
  ],
  BF: [
    "H",
    "hB"
  ],
  BG: [
    "H",
    "hB",
    "h"
  ],
  BH: [
    "h",
    "hB",
    "hb",
    "H"
  ],
  BI: [
    "H",
    "h"
  ],
  BJ: [
    "H",
    "hB"
  ],
  BL: [
    "H",
    "hB"
  ],
  BM: [
    "h",
    "hb",
    "H",
    "hB"
  ],
  BN: [
    "hb",
    "hB",
    "h",
    "H"
  ],
  BO: [
    "H",
    "hB",
    "h",
    "hb"
  ],
  BQ: [
    "H"
  ],
  BR: [
    "H",
    "hB"
  ],
  BS: [
    "h",
    "hb",
    "H",
    "hB"
  ],
  BT: [
    "h",
    "H"
  ],
  BW: [
    "H",
    "h",
    "hb",
    "hB"
  ],
  BY: [
    "H",
    "h"
  ],
  BZ: [
    "H",
    "h",
    "hb",
    "hB"
  ],
  CA: [
    "h",
    "hb",
    "H",
    "hB"
  ],
  CC: [
    "H",
    "h",
    "hb",
    "hB"
  ],
  CD: [
    "hB",
    "H"
  ],
  CF: [
    "H",
    "h",
    "hB"
  ],
  CG: [
    "H",
    "hB"
  ],
  CH: [
    "H",
    "hB",
    "h"
  ],
  CI: [
    "H",
    "hB"
  ],
  CK: [
    "H",
    "h",
    "hb",
    "hB"
  ],
  CL: [
    "H",
    "h",
    "hB",
    "hb"
  ],
  CM: [
    "H",
    "h",
    "hB"
  ],
  CN: [
    "H",
    "hB",
    "hb",
    "h"
  ],
  CO: [
    "h",
    "H",
    "hB",
    "hb"
  ],
  CP: [
    "H"
  ],
  CR: [
    "H",
    "h",
    "hB",
    "hb"
  ],
  CU: [
    "H",
    "h",
    "hB",
    "hb"
  ],
  CV: [
    "H",
    "hB"
  ],
  CW: [
    "H",
    "hB"
  ],
  CX: [
    "H",
    "h",
    "hb",
    "hB"
  ],
  CY: [
    "h",
    "H",
    "hb",
    "hB"
  ],
  CZ: [
    "H"
  ],
  DE: [
    "H",
    "hB"
  ],
  DG: [
    "H",
    "h",
    "hb",
    "hB"
  ],
  DJ: [
    "h",
    "H"
  ],
  DK: [
    "H"
  ],
  DM: [
    "h",
    "hb",
    "H",
    "hB"
  ],
  DO: [
    "h",
    "H",
    "hB",
    "hb"
  ],
  DZ: [
    "h",
    "hB",
    "hb",
    "H"
  ],
  EA: [
    "H",
    "h",
    "hB",
    "hb"
  ],
  EC: [
    "H",
    "hB",
    "h",
    "hb"
  ],
  EE: [
    "H",
    "hB"
  ],
  EG: [
    "h",
    "hB",
    "hb",
    "H"
  ],
  EH: [
    "h",
    "hB",
    "hb",
    "H"
  ],
  ER: [
    "h",
    "H"
  ],
  ES: [
    "H",
    "hB",
    "h",
    "hb"
  ],
  ET: [
    "hB",
    "hb",
    "h",
    "H"
  ],
  FI: [
    "H"
  ],
  FJ: [
    "h",
    "hb",
    "H",
    "hB"
  ],
  FK: [
    "H",
    "h",
    "hb",
    "hB"
  ],
  FM: [
    "h",
    "hb",
    "H",
    "hB"
  ],
  FO: [
    "H",
    "h"
  ],
  FR: [
    "H",
    "hB"
  ],
  GA: [
    "H",
    "hB"
  ],
  GB: [
    "H",
    "h",
    "hb",
    "hB"
  ],
  GD: [
    "h",
    "hb",
    "H",
    "hB"
  ],
  GE: [
    "H",
    "hB",
    "h"
  ],
  GF: [
    "H",
    "hB"
  ],
  GG: [
    "H",
    "h",
    "hb",
    "hB"
  ],
  GH: [
    "h",
    "H"
  ],
  GI: [
    "H",
    "h",
    "hb",
    "hB"
  ],
  GL: [
    "H",
    "h"
  ],
  GM: [
    "h",
    "hb",
    "H",
    "hB"
  ],
  GN: [
    "H",
    "hB"
  ],
  GP: [
    "H",
    "hB"
  ],
  GQ: [
    "H",
    "hB",
    "h",
    "hb"
  ],
  GR: [
    "h",
    "H",
    "hb",
    "hB"
  ],
  GT: [
    "H",
    "h",
    "hB",
    "hb"
  ],
  GU: [
    "h",
    "hb",
    "H",
    "hB"
  ],
  GW: [
    "H",
    "hB"
  ],
  GY: [
    "h",
    "hb",
    "H",
    "hB"
  ],
  HK: [
    "h",
    "hB",
    "hb",
    "H"
  ],
  HN: [
    "H",
    "h",
    "hB",
    "hb"
  ],
  HR: [
    "H",
    "hB"
  ],
  HU: [
    "H",
    "h"
  ],
  IC: [
    "H",
    "h",
    "hB",
    "hb"
  ],
  ID: [
    "H"
  ],
  IE: [
    "H",
    "h",
    "hb",
    "hB"
  ],
  IL: [
    "H",
    "hB"
  ],
  IM: [
    "H",
    "h",
    "hb",
    "hB"
  ],
  IN: [
    "h",
    "H"
  ],
  IO: [
    "H",
    "h",
    "hb",
    "hB"
  ],
  IQ: [
    "h",
    "hB",
    "hb",
    "H"
  ],
  IR: [
    "hB",
    "H"
  ],
  IS: [
    "H"
  ],
  IT: [
    "H",
    "hB"
  ],
  JE: [
    "H",
    "h",
    "hb",
    "hB"
  ],
  JM: [
    "h",
    "hb",
    "H",
    "hB"
  ],
  JO: [
    "h",
    "hB",
    "hb",
    "H"
  ],
  JP: [
    "H",
    "K",
    "h"
  ],
  KE: [
    "hB",
    "hb",
    "H",
    "h"
  ],
  KG: [
    "H",
    "h",
    "hB",
    "hb"
  ],
  KH: [
    "hB",
    "h",
    "H",
    "hb"
  ],
  KI: [
    "h",
    "hb",
    "H",
    "hB"
  ],
  KM: [
    "H",
    "h",
    "hB",
    "hb"
  ],
  KN: [
    "h",
    "hb",
    "H",
    "hB"
  ],
  KP: [
    "h",
    "H",
    "hB",
    "hb"
  ],
  KR: [
    "h",
    "H",
    "hB",
    "hb"
  ],
  KW: [
    "h",
    "hB",
    "hb",
    "H"
  ],
  KY: [
    "h",
    "hb",
    "H",
    "hB"
  ],
  KZ: [
    "H",
    "hB"
  ],
  LA: [
    "H",
    "hb",
    "hB",
    "h"
  ],
  LB: [
    "h",
    "hB",
    "hb",
    "H"
  ],
  LC: [
    "h",
    "hb",
    "H",
    "hB"
  ],
  LI: [
    "H",
    "hB",
    "h"
  ],
  LK: [
    "H",
    "h",
    "hB",
    "hb"
  ],
  LR: [
    "h",
    "hb",
    "H",
    "hB"
  ],
  LS: [
    "h",
    "H"
  ],
  LT: [
    "H",
    "h",
    "hb",
    "hB"
  ],
  LU: [
    "H",
    "h",
    "hB"
  ],
  LV: [
    "H",
    "hB",
    "hb",
    "h"
  ],
  LY: [
    "h",
    "hB",
    "hb",
    "H"
  ],
  MA: [
    "H",
    "h",
    "hB",
    "hb"
  ],
  MC: [
    "H",
    "hB"
  ],
  MD: [
    "H",
    "hB"
  ],
  ME: [
    "H",
    "hB",
    "h"
  ],
  MF: [
    "H",
    "hB"
  ],
  MG: [
    "H",
    "h"
  ],
  MH: [
    "h",
    "hb",
    "H",
    "hB"
  ],
  MK: [
    "H",
    "h",
    "hb",
    "hB"
  ],
  ML: [
    "H"
  ],
  MM: [
    "hB",
    "hb",
    "H",
    "h"
  ],
  MN: [
    "H",
    "h",
    "hb",
    "hB"
  ],
  MO: [
    "h",
    "hB",
    "hb",
    "H"
  ],
  MP: [
    "h",
    "hb",
    "H",
    "hB"
  ],
  MQ: [
    "H",
    "hB"
  ],
  MR: [
    "h",
    "hB",
    "hb",
    "H"
  ],
  MS: [
    "H",
    "h",
    "hb",
    "hB"
  ],
  MT: [
    "H",
    "h"
  ],
  MU: [
    "H",
    "h"
  ],
  MV: [
    "H",
    "h"
  ],
  MW: [
    "h",
    "hb",
    "H",
    "hB"
  ],
  MX: [
    "H",
    "h",
    "hB",
    "hb"
  ],
  MY: [
    "hb",
    "hB",
    "h",
    "H"
  ],
  MZ: [
    "H",
    "hB"
  ],
  NA: [
    "h",
    "H",
    "hB",
    "hb"
  ],
  NC: [
    "H",
    "hB"
  ],
  NE: [
    "H"
  ],
  NF: [
    "H",
    "h",
    "hb",
    "hB"
  ],
  NG: [
    "H",
    "h",
    "hb",
    "hB"
  ],
  NI: [
    "H",
    "h",
    "hB",
    "hb"
  ],
  NL: [
    "H",
    "hB"
  ],
  NO: [
    "H",
    "h"
  ],
  NP: [
    "H",
    "h",
    "hB"
  ],
  NR: [
    "H",
    "h",
    "hb",
    "hB"
  ],
  NU: [
    "H",
    "h",
    "hb",
    "hB"
  ],
  NZ: [
    "h",
    "hb",
    "H",
    "hB"
  ],
  OM: [
    "h",
    "hB",
    "hb",
    "H"
  ],
  PA: [
    "h",
    "H",
    "hB",
    "hb"
  ],
  PE: [
    "H",
    "hB",
    "h",
    "hb"
  ],
  PF: [
    "H",
    "h",
    "hB"
  ],
  PG: [
    "h",
    "H"
  ],
  PH: [
    "h",
    "hB",
    "hb",
    "H"
  ],
  PK: [
    "h",
    "hB",
    "H"
  ],
  PL: [
    "H",
    "h"
  ],
  PM: [
    "H",
    "hB"
  ],
  PN: [
    "H",
    "h",
    "hb",
    "hB"
  ],
  PR: [
    "h",
    "H",
    "hB",
    "hb"
  ],
  PS: [
    "h",
    "hB",
    "hb",
    "H"
  ],
  PT: [
    "H",
    "hB"
  ],
  PW: [
    "h",
    "H"
  ],
  PY: [
    "H",
    "h",
    "hB",
    "hb"
  ],
  QA: [
    "h",
    "hB",
    "hb",
    "H"
  ],
  RE: [
    "H",
    "hB"
  ],
  RO: [
    "H",
    "hB"
  ],
  RS: [
    "H",
    "hB",
    "h"
  ],
  RU: [
    "H"
  ],
  RW: [
    "H",
    "h"
  ],
  SA: [
    "h",
    "hB",
    "hb",
    "H"
  ],
  SB: [
    "h",
    "hb",
    "H",
    "hB"
  ],
  SC: [
    "H",
    "h",
    "hB"
  ],
  SD: [
    "h",
    "hB",
    "hb",
    "H"
  ],
  SE: [
    "H"
  ],
  SG: [
    "h",
    "hb",
    "H",
    "hB"
  ],
  SH: [
    "H",
    "h",
    "hb",
    "hB"
  ],
  SI: [
    "H",
    "hB"
  ],
  SJ: [
    "H"
  ],
  SK: [
    "H"
  ],
  SL: [
    "h",
    "hb",
    "H",
    "hB"
  ],
  SM: [
    "H",
    "h",
    "hB"
  ],
  SN: [
    "H",
    "h",
    "hB"
  ],
  SO: [
    "h",
    "H"
  ],
  SR: [
    "H",
    "hB"
  ],
  SS: [
    "h",
    "hb",
    "H",
    "hB"
  ],
  ST: [
    "H",
    "hB"
  ],
  SV: [
    "H",
    "h",
    "hB",
    "hb"
  ],
  SX: [
    "H",
    "h",
    "hb",
    "hB"
  ],
  SY: [
    "h",
    "hB",
    "hb",
    "H"
  ],
  SZ: [
    "h",
    "hb",
    "H",
    "hB"
  ],
  TA: [
    "H",
    "h",
    "hb",
    "hB"
  ],
  TC: [
    "h",
    "hb",
    "H",
    "hB"
  ],
  TD: [
    "h",
    "H",
    "hB"
  ],
  TF: [
    "H",
    "h",
    "hB"
  ],
  TG: [
    "H",
    "hB"
  ],
  TH: [
    "H",
    "h"
  ],
  TJ: [
    "H",
    "h"
  ],
  TL: [
    "H",
    "hB",
    "hb",
    "h"
  ],
  TM: [
    "H",
    "h"
  ],
  TN: [
    "h",
    "hB",
    "hb",
    "H"
  ],
  TO: [
    "h",
    "H"
  ],
  TR: [
    "H",
    "hB"
  ],
  TT: [
    "h",
    "hb",
    "H",
    "hB"
  ],
  TW: [
    "hB",
    "hb",
    "h",
    "H"
  ],
  TZ: [
    "hB",
    "hb",
    "H",
    "h"
  ],
  UA: [
    "H",
    "hB",
    "h"
  ],
  UG: [
    "hB",
    "hb",
    "H",
    "h"
  ],
  UM: [
    "h",
    "hb",
    "H",
    "hB"
  ],
  US: [
    "h",
    "hb",
    "H",
    "hB"
  ],
  UY: [
    "H",
    "h",
    "hB",
    "hb"
  ],
  UZ: [
    "H",
    "hB",
    "h"
  ],
  VA: [
    "H",
    "h",
    "hB"
  ],
  VC: [
    "h",
    "hb",
    "H",
    "hB"
  ],
  VE: [
    "h",
    "H",
    "hB",
    "hb"
  ],
  VG: [
    "h",
    "hb",
    "H",
    "hB"
  ],
  VI: [
    "h",
    "hb",
    "H",
    "hB"
  ],
  VN: [
    "H",
    "h"
  ],
  VU: [
    "h",
    "H"
  ],
  WF: [
    "H",
    "hB"
  ],
  WS: [
    "h",
    "H"
  ],
  XK: [
    "H",
    "hB",
    "h"
  ],
  YE: [
    "h",
    "hB",
    "hb",
    "H"
  ],
  YT: [
    "H",
    "hB"
  ],
  ZA: [
    "H",
    "h",
    "hb",
    "hB"
  ],
  ZM: [
    "h",
    "hb",
    "H",
    "hB"
  ],
  ZW: [
    "H",
    "h"
  ],
  "af-ZA": [
    "H",
    "h",
    "hB",
    "hb"
  ],
  "ar-001": [
    "h",
    "hB",
    "hb",
    "H"
  ],
  "ca-ES": [
    "H",
    "h",
    "hB"
  ],
  "en-001": [
    "h",
    "hb",
    "H",
    "hB"
  ],
  "es-BO": [
    "H",
    "h",
    "hB",
    "hb"
  ],
  "es-BR": [
    "H",
    "h",
    "hB",
    "hb"
  ],
  "es-EC": [
    "H",
    "h",
    "hB",
    "hb"
  ],
  "es-ES": [
    "H",
    "h",
    "hB",
    "hb"
  ],
  "es-GQ": [
    "H",
    "h",
    "hB",
    "hb"
  ],
  "es-PE": [
    "H",
    "h",
    "hB",
    "hb"
  ],
  "fr-CA": [
    "H",
    "h",
    "hB"
  ],
  "gl-ES": [
    "H",
    "h",
    "hB"
  ],
  "gu-IN": [
    "hB",
    "hb",
    "h",
    "H"
  ],
  "hi-IN": [
    "hB",
    "h",
    "H"
  ],
  "it-CH": [
    "H",
    "h",
    "hB"
  ],
  "it-IT": [
    "H",
    "h",
    "hB"
  ],
  "kn-IN": [
    "hB",
    "h",
    "H"
  ],
  "ml-IN": [
    "hB",
    "h",
    "H"
  ],
  "mr-IN": [
    "hB",
    "hb",
    "h",
    "H"
  ],
  "pa-IN": [
    "hB",
    "hb",
    "h",
    "H"
  ],
  "ta-IN": [
    "hB",
    "h",
    "hb",
    "H"
  ],
  "te-IN": [
    "hB",
    "h",
    "H"
  ],
  "zu-ZA": [
    "H",
    "hB",
    "hb",
    "h"
  ]
};
function Ba(e, t) {
  for (var r = "", i = 0; i < e.length; i++) {
    var n = e.charAt(i);
    if (n === "j") {
      for (var s = 0; i + 1 < e.length && e.charAt(i + 1) === n; )
        s++, i++;
      var a = 1 + (s & 1), o = s < 2 ? 1 : 3 + (s >> 1), l = "a", c = Pa(t);
      for ((c == "H" || c == "k") && (o = 0); o-- > 0; )
        r += l;
      for (; a-- > 0; )
        r = c + r;
    } else n === "J" ? r += "H" : r += n;
  }
  return r;
}
function Pa(e) {
  var t = e.hourCycle;
  if (t === void 0 && // @ts-ignore hourCycle(s) is not identified yet
  e.hourCycles && // @ts-ignore
  e.hourCycles.length && (t = e.hourCycles[0]), t)
    switch (t) {
      case "h24":
        return "k";
      case "h23":
        return "H";
      case "h12":
        return "h";
      case "h11":
        return "K";
      default:
        throw new Error("Invalid hourCycle");
    }
  var r = e.language, i;
  r !== "root" && (i = e.maximize().region);
  var n = Ut[i || ""] || Ut[r || ""] || Ut["".concat(r, "-001")] || Ut["001"];
  return n[0];
}
var mr, Ca = new RegExp("^".concat($n.source, "*")), Ma = new RegExp("".concat($n.source, "*$"));
function j(e, t) {
  return { start: e, end: t };
}
var Ha = !!String.prototype.startsWith && "_a".startsWith("a", 1), Oa = !!String.fromCodePoint, xa = !!Object.fromEntries, Na = !!String.prototype.codePointAt, La = !!String.prototype.trimStart, Ia = !!String.prototype.trimEnd, Sa = !!Number.isSafeInteger, Ra = Sa ? Number.isSafeInteger : function(e) {
  return typeof e == "number" && isFinite(e) && Math.floor(e) === e && Math.abs(e) <= 9007199254740991;
}, Hr = !0;
try {
  var $a = Tn("([^\\p{White_Space}\\p{Pattern_Syntax}]*)", "yu");
  Hr = ((mr = $a.exec("a")) === null || mr === void 0 ? void 0 : mr[0]) === "a";
} catch {
  Hr = !1;
}
var mi = Ha ? (
  // Native
  function(t, r, i) {
    return t.startsWith(r, i);
  }
) : (
  // For IE11
  function(t, r, i) {
    return t.slice(i, i + r.length) === r;
  }
), Or = Oa ? String.fromCodePoint : (
  // IE11
  function() {
    for (var t = [], r = 0; r < arguments.length; r++)
      t[r] = arguments[r];
    for (var i = "", n = t.length, s = 0, a; n > s; ) {
      if (a = t[s++], a > 1114111)
        throw RangeError(a + " is not a valid code point");
      i += a < 65536 ? String.fromCharCode(a) : String.fromCharCode(((a -= 65536) >> 10) + 55296, a % 1024 + 56320);
    }
    return i;
  }
), pi = (
  // native
  xa ? Object.fromEntries : (
    // Ponyfill
    function(t) {
      for (var r = {}, i = 0, n = t; i < n.length; i++) {
        var s = n[i], a = s[0], o = s[1];
        r[a] = o;
      }
      return r;
    }
  )
), zn = Na ? (
  // Native
  function(t, r) {
    return t.codePointAt(r);
  }
) : (
  // IE 11
  function(t, r) {
    var i = t.length;
    if (!(r < 0 || r >= i)) {
      var n = t.charCodeAt(r), s;
      return n < 55296 || n > 56319 || r + 1 === i || (s = t.charCodeAt(r + 1)) < 56320 || s > 57343 ? n : (n - 55296 << 10) + (s - 56320) + 65536;
    }
  }
), Da = La ? (
  // Native
  function(t) {
    return t.trimStart();
  }
) : (
  // Ponyfill
  function(t) {
    return t.replace(Ca, "");
  }
), Fa = Ia ? (
  // Native
  function(t) {
    return t.trimEnd();
  }
) : (
  // Ponyfill
  function(t) {
    return t.replace(Ma, "");
  }
);
function Tn(e, t) {
  return new RegExp(e, t);
}
var xr;
if (Hr) {
  var _i = Tn("([^\\p{White_Space}\\p{Pattern_Syntax}]*)", "yu");
  xr = function(t, r) {
    var i;
    _i.lastIndex = r;
    var n = _i.exec(t);
    return (i = n[1]) !== null && i !== void 0 ? i : "";
  };
} else
  xr = function(t, r) {
    for (var i = []; ; ) {
      var n = zn(t, r);
      if (n === void 0 || Un(n) || Ua(n))
        break;
      i.push(n), r += n >= 65536 ? 2 : 1;
    }
    return Or.apply(void 0, i);
  };
var ja = (
  /** @class */
  function() {
    function e(t, r) {
      r === void 0 && (r = {}), this.message = t, this.position = { offset: 0, line: 1, column: 1 }, this.ignoreTag = !!r.ignoreTag, this.locale = r.locale, this.requiresOtherClause = !!r.requiresOtherClause, this.shouldParseSkeletons = !!r.shouldParseSkeletons;
    }
    return e.prototype.parse = function() {
      if (this.offset() !== 0)
        throw Error("parser can only be used once");
      return this.parseMessage(0, "", !1);
    }, e.prototype.parseMessage = function(t, r, i) {
      for (var n = []; !this.isEOF(); ) {
        var s = this.char();
        if (s === 123) {
          var a = this.parseArgument(t, i);
          if (a.err)
            return a;
          n.push(a.val);
        } else {
          if (s === 125 && t > 0)
            break;
          if (s === 35 && (r === "plural" || r === "selectordinal")) {
            var o = this.clonePosition();
            this.bump(), n.push({
              type: Y.pound,
              location: j(o, this.clonePosition())
            });
          } else if (s === 60 && !this.ignoreTag && this.peek() === 47) {
            if (i)
              break;
            return this.error(F.UNMATCHED_CLOSING_TAG, j(this.clonePosition(), this.clonePosition()));
          } else if (s === 60 && !this.ignoreTag && Nr(this.peek() || 0)) {
            var a = this.parseTag(t, r);
            if (a.err)
              return a;
            n.push(a.val);
          } else {
            var a = this.parseLiteral(t, r);
            if (a.err)
              return a;
            n.push(a.val);
          }
        }
      }
      return { val: n, err: null };
    }, e.prototype.parseTag = function(t, r) {
      var i = this.clonePosition();
      this.bump();
      var n = this.parseTagName();
      if (this.bumpSpace(), this.bumpIf("/>"))
        return {
          val: {
            type: Y.literal,
            value: "<".concat(n, "/>"),
            location: j(i, this.clonePosition())
          },
          err: null
        };
      if (this.bumpIf(">")) {
        var s = this.parseMessage(t + 1, r, !0);
        if (s.err)
          return s;
        var a = s.val, o = this.clonePosition();
        if (this.bumpIf("</")) {
          if (this.isEOF() || !Nr(this.char()))
            return this.error(F.INVALID_TAG, j(o, this.clonePosition()));
          var l = this.clonePosition(), c = this.parseTagName();
          return n !== c ? this.error(F.UNMATCHED_CLOSING_TAG, j(l, this.clonePosition())) : (this.bumpSpace(), this.bumpIf(">") ? {
            val: {
              type: Y.tag,
              value: n,
              children: a,
              location: j(i, this.clonePosition())
            },
            err: null
          } : this.error(F.INVALID_TAG, j(o, this.clonePosition())));
        } else
          return this.error(F.UNCLOSED_TAG, j(i, this.clonePosition()));
      } else
        return this.error(F.INVALID_TAG, j(i, this.clonePosition()));
    }, e.prototype.parseTagName = function() {
      var t = this.offset();
      for (this.bump(); !this.isEOF() && Ta(this.char()); )
        this.bump();
      return this.message.slice(t, this.offset());
    }, e.prototype.parseLiteral = function(t, r) {
      for (var i = this.clonePosition(), n = ""; ; ) {
        var s = this.tryParseQuote(r);
        if (s) {
          n += s;
          continue;
        }
        var a = this.tryParseUnquoted(t, r);
        if (a) {
          n += a;
          continue;
        }
        var o = this.tryParseLeftAngleBracket();
        if (o) {
          n += o;
          continue;
        }
        break;
      }
      var l = j(i, this.clonePosition());
      return {
        val: { type: Y.literal, value: n, location: l },
        err: null
      };
    }, e.prototype.tryParseLeftAngleBracket = function() {
      return !this.isEOF() && this.char() === 60 && (this.ignoreTag || // If at the opening tag or closing tag position, bail.
      !za(this.peek() || 0)) ? (this.bump(), "<") : null;
    }, e.prototype.tryParseQuote = function(t) {
      if (this.isEOF() || this.char() !== 39)
        return null;
      switch (this.peek()) {
        case 39:
          return this.bump(), this.bump(), "'";
        case 123:
        case 60:
        case 62:
        case 125:
          break;
        case 35:
          if (t === "plural" || t === "selectordinal")
            break;
          return null;
        default:
          return null;
      }
      this.bump();
      var r = [this.char()];
      for (this.bump(); !this.isEOF(); ) {
        var i = this.char();
        if (i === 39)
          if (this.peek() === 39)
            r.push(39), this.bump();
          else {
            this.bump();
            break;
          }
        else
          r.push(i);
        this.bump();
      }
      return Or.apply(void 0, r);
    }, e.prototype.tryParseUnquoted = function(t, r) {
      if (this.isEOF())
        return null;
      var i = this.char();
      return i === 60 || i === 123 || i === 35 && (r === "plural" || r === "selectordinal") || i === 125 && t > 0 ? null : (this.bump(), Or(i));
    }, e.prototype.parseArgument = function(t, r) {
      var i = this.clonePosition();
      if (this.bump(), this.bumpSpace(), this.isEOF())
        return this.error(F.EXPECT_ARGUMENT_CLOSING_BRACE, j(i, this.clonePosition()));
      if (this.char() === 125)
        return this.bump(), this.error(F.EMPTY_ARGUMENT, j(i, this.clonePosition()));
      var n = this.parseIdentifierIfPossible().value;
      if (!n)
        return this.error(F.MALFORMED_ARGUMENT, j(i, this.clonePosition()));
      if (this.bumpSpace(), this.isEOF())
        return this.error(F.EXPECT_ARGUMENT_CLOSING_BRACE, j(i, this.clonePosition()));
      switch (this.char()) {
        case 125:
          return this.bump(), {
            val: {
              type: Y.argument,
              // value does not include the opening and closing braces.
              value: n,
              location: j(i, this.clonePosition())
            },
            err: null
          };
        case 44:
          return this.bump(), this.bumpSpace(), this.isEOF() ? this.error(F.EXPECT_ARGUMENT_CLOSING_BRACE, j(i, this.clonePosition())) : this.parseArgumentOptions(t, r, n, i);
        default:
          return this.error(F.MALFORMED_ARGUMENT, j(i, this.clonePosition()));
      }
    }, e.prototype.parseIdentifierIfPossible = function() {
      var t = this.clonePosition(), r = this.offset(), i = xr(this.message, r), n = r + i.length;
      this.bumpTo(n);
      var s = this.clonePosition(), a = j(t, s);
      return { value: i, location: a };
    }, e.prototype.parseArgumentOptions = function(t, r, i, n) {
      var s, a = this.clonePosition(), o = this.parseIdentifierIfPossible().value, l = this.clonePosition();
      switch (o) {
        case "":
          return this.error(F.EXPECT_ARGUMENT_TYPE, j(a, l));
        case "number":
        case "date":
        case "time": {
          this.bumpSpace();
          var c = null;
          if (this.bumpIf(",")) {
            this.bumpSpace();
            var u = this.clonePosition(), h = this.parseSimpleArgStyleIfPossible();
            if (h.err)
              return h;
            var f = Fa(h.val);
            if (f.length === 0)
              return this.error(F.EXPECT_ARGUMENT_STYLE, j(this.clonePosition(), this.clonePosition()));
            var g = j(u, this.clonePosition());
            c = { style: f, styleLocation: g };
          }
          var m = this.tryParseArgumentClose(n);
          if (m.err)
            return m;
          var p = j(n, this.clonePosition());
          if (c && mi(c == null ? void 0 : c.style, "::", 0)) {
            var b = Da(c.style.slice(2));
            if (o === "number") {
              var h = this.parseNumberSkeletonFromString(b, c.styleLocation);
              return h.err ? h : {
                val: { type: Y.number, value: i, location: p, style: h.val },
                err: null
              };
            } else {
              if (b.length === 0)
                return this.error(F.EXPECT_DATE_TIME_SKELETON, p);
              var C = b;
              this.locale && (C = Ba(b, this.locale));
              var f = {
                type: ut.dateTime,
                pattern: C,
                location: c.styleLocation,
                parsedOptions: this.shouldParseSkeletons ? pa(C) : {}
              }, H = o === "date" ? Y.date : Y.time;
              return {
                val: { type: H, value: i, location: p, style: f },
                err: null
              };
            }
          }
          return {
            val: {
              type: o === "number" ? Y.number : o === "date" ? Y.date : Y.time,
              value: i,
              location: p,
              style: (s = c == null ? void 0 : c.style) !== null && s !== void 0 ? s : null
            },
            err: null
          };
        }
        case "plural":
        case "selectordinal":
        case "select": {
          var _ = this.clonePosition();
          if (this.bumpSpace(), !this.bumpIf(","))
            return this.error(F.EXPECT_SELECT_ARGUMENT_OPTIONS, j(_, z({}, _)));
          this.bumpSpace();
          var L = this.parseIdentifierIfPossible(), x = 0;
          if (o !== "select" && L.value === "offset") {
            if (!this.bumpIf(":"))
              return this.error(F.EXPECT_PLURAL_ARGUMENT_OFFSET_VALUE, j(this.clonePosition(), this.clonePosition()));
            this.bumpSpace();
            var h = this.tryParseDecimalInteger(F.EXPECT_PLURAL_ARGUMENT_OFFSET_VALUE, F.INVALID_PLURAL_ARGUMENT_OFFSET_VALUE);
            if (h.err)
              return h;
            this.bumpSpace(), L = this.parseIdentifierIfPossible(), x = h.val;
          }
          var D = this.tryParsePluralOrSelectOptions(t, o, r, L);
          if (D.err)
            return D;
          var m = this.tryParseArgumentClose(n);
          if (m.err)
            return m;
          var R = j(n, this.clonePosition());
          return o === "select" ? {
            val: {
              type: Y.select,
              value: i,
              options: pi(D.val),
              location: R
            },
            err: null
          } : {
            val: {
              type: Y.plural,
              value: i,
              options: pi(D.val),
              offset: x,
              pluralType: o === "plural" ? "cardinal" : "ordinal",
              location: R
            },
            err: null
          };
        }
        default:
          return this.error(F.INVALID_ARGUMENT_TYPE, j(a, l));
      }
    }, e.prototype.tryParseArgumentClose = function(t) {
      return this.isEOF() || this.char() !== 125 ? this.error(F.EXPECT_ARGUMENT_CLOSING_BRACE, j(t, this.clonePosition())) : (this.bump(), { val: !0, err: null });
    }, e.prototype.parseSimpleArgStyleIfPossible = function() {
      for (var t = 0, r = this.clonePosition(); !this.isEOF(); ) {
        var i = this.char();
        switch (i) {
          case 39: {
            this.bump();
            var n = this.clonePosition();
            if (!this.bumpUntil("'"))
              return this.error(F.UNCLOSED_QUOTE_IN_ARGUMENT_STYLE, j(n, this.clonePosition()));
            this.bump();
            break;
          }
          case 123: {
            t += 1, this.bump();
            break;
          }
          case 125: {
            if (t > 0)
              t -= 1;
            else
              return {
                val: this.message.slice(r.offset, this.offset()),
                err: null
              };
            break;
          }
          default:
            this.bump();
            break;
        }
      }
      return {
        val: this.message.slice(r.offset, this.offset()),
        err: null
      };
    }, e.prototype.parseNumberSkeletonFromString = function(t, r) {
      var i = [];
      try {
        i = va(t);
      } catch {
        return this.error(F.INVALID_NUMBER_SKELETON, r);
      }
      return {
        val: {
          type: ut.number,
          tokens: i,
          location: r,
          parsedOptions: this.shouldParseSkeletons ? ya(i) : {}
        },
        err: null
      };
    }, e.prototype.tryParsePluralOrSelectOptions = function(t, r, i, n) {
      for (var s, a = !1, o = [], l = /* @__PURE__ */ new Set(), c = n.value, u = n.location; ; ) {
        if (c.length === 0) {
          var h = this.clonePosition();
          if (r !== "select" && this.bumpIf("=")) {
            var f = this.tryParseDecimalInteger(F.EXPECT_PLURAL_ARGUMENT_SELECTOR, F.INVALID_PLURAL_ARGUMENT_SELECTOR);
            if (f.err)
              return f;
            u = j(h, this.clonePosition()), c = this.message.slice(h.offset, this.offset());
          } else
            break;
        }
        if (l.has(c))
          return this.error(r === "select" ? F.DUPLICATE_SELECT_ARGUMENT_SELECTOR : F.DUPLICATE_PLURAL_ARGUMENT_SELECTOR, u);
        c === "other" && (a = !0), this.bumpSpace();
        var g = this.clonePosition();
        if (!this.bumpIf("{"))
          return this.error(r === "select" ? F.EXPECT_SELECT_ARGUMENT_SELECTOR_FRAGMENT : F.EXPECT_PLURAL_ARGUMENT_SELECTOR_FRAGMENT, j(this.clonePosition(), this.clonePosition()));
        var m = this.parseMessage(t + 1, r, i);
        if (m.err)
          return m;
        var p = this.tryParseArgumentClose(g);
        if (p.err)
          return p;
        o.push([
          c,
          {
            value: m.val,
            location: j(g, this.clonePosition())
          }
        ]), l.add(c), this.bumpSpace(), s = this.parseIdentifierIfPossible(), c = s.value, u = s.location;
      }
      return o.length === 0 ? this.error(r === "select" ? F.EXPECT_SELECT_ARGUMENT_SELECTOR : F.EXPECT_PLURAL_ARGUMENT_SELECTOR, j(this.clonePosition(), this.clonePosition())) : this.requiresOtherClause && !a ? this.error(F.MISSING_OTHER_CLAUSE, j(this.clonePosition(), this.clonePosition())) : { val: o, err: null };
    }, e.prototype.tryParseDecimalInteger = function(t, r) {
      var i = 1, n = this.clonePosition();
      this.bumpIf("+") || this.bumpIf("-") && (i = -1);
      for (var s = !1, a = 0; !this.isEOF(); ) {
        var o = this.char();
        if (o >= 48 && o <= 57)
          s = !0, a = a * 10 + (o - 48), this.bump();
        else
          break;
      }
      var l = j(n, this.clonePosition());
      return s ? (a *= i, Ra(a) ? { val: a, err: null } : this.error(r, l)) : this.error(t, l);
    }, e.prototype.offset = function() {
      return this.position.offset;
    }, e.prototype.isEOF = function() {
      return this.offset() === this.message.length;
    }, e.prototype.clonePosition = function() {
      return {
        offset: this.position.offset,
        line: this.position.line,
        column: this.position.column
      };
    }, e.prototype.char = function() {
      var t = this.position.offset;
      if (t >= this.message.length)
        throw Error("out of bound");
      var r = zn(this.message, t);
      if (r === void 0)
        throw Error("Offset ".concat(t, " is at invalid UTF-16 code unit boundary"));
      return r;
    }, e.prototype.error = function(t, r) {
      return {
        val: null,
        err: {
          kind: t,
          message: this.message,
          location: r
        }
      };
    }, e.prototype.bump = function() {
      if (!this.isEOF()) {
        var t = this.char();
        t === 10 ? (this.position.line += 1, this.position.column = 1, this.position.offset += 1) : (this.position.column += 1, this.position.offset += t < 65536 ? 1 : 2);
      }
    }, e.prototype.bumpIf = function(t) {
      if (mi(this.message, t, this.offset())) {
        for (var r = 0; r < t.length; r++)
          this.bump();
        return !0;
      }
      return !1;
    }, e.prototype.bumpUntil = function(t) {
      var r = this.offset(), i = this.message.indexOf(t, r);
      return i >= 0 ? (this.bumpTo(i), !0) : (this.bumpTo(this.message.length), !1);
    }, e.prototype.bumpTo = function(t) {
      if (this.offset() > t)
        throw Error("targetOffset ".concat(t, " must be greater than or equal to the current offset ").concat(this.offset()));
      for (t = Math.min(t, this.message.length); ; ) {
        var r = this.offset();
        if (r === t)
          break;
        if (r > t)
          throw Error("targetOffset ".concat(t, " is at invalid UTF-16 code unit boundary"));
        if (this.bump(), this.isEOF())
          break;
      }
    }, e.prototype.bumpSpace = function() {
      for (; !this.isEOF() && Un(this.char()); )
        this.bump();
    }, e.prototype.peek = function() {
      if (this.isEOF())
        return null;
      var t = this.char(), r = this.offset(), i = this.message.charCodeAt(r + (t >= 65536 ? 2 : 1));
      return i ?? null;
    }, e;
  }()
);
function Nr(e) {
  return e >= 97 && e <= 122 || e >= 65 && e <= 90;
}
function za(e) {
  return Nr(e) || e === 47;
}
function Ta(e) {
  return e === 45 || e === 46 || e >= 48 && e <= 57 || e === 95 || e >= 97 && e <= 122 || e >= 65 && e <= 90 || e == 183 || e >= 192 && e <= 214 || e >= 216 && e <= 246 || e >= 248 && e <= 893 || e >= 895 && e <= 8191 || e >= 8204 && e <= 8205 || e >= 8255 && e <= 8256 || e >= 8304 && e <= 8591 || e >= 11264 && e <= 12271 || e >= 12289 && e <= 55295 || e >= 63744 && e <= 64975 || e >= 65008 && e <= 65533 || e >= 65536 && e <= 983039;
}
function Un(e) {
  return e >= 9 && e <= 13 || e === 32 || e === 133 || e >= 8206 && e <= 8207 || e === 8232 || e === 8233;
}
function Ua(e) {
  return e >= 33 && e <= 35 || e === 36 || e >= 37 && e <= 39 || e === 40 || e === 41 || e === 42 || e === 43 || e === 44 || e === 45 || e >= 46 && e <= 47 || e >= 58 && e <= 59 || e >= 60 && e <= 62 || e >= 63 && e <= 64 || e === 91 || e === 92 || e === 93 || e === 94 || e === 96 || e === 123 || e === 124 || e === 125 || e === 126 || e === 161 || e >= 162 && e <= 165 || e === 166 || e === 167 || e === 169 || e === 171 || e === 172 || e === 174 || e === 176 || e === 177 || e === 182 || e === 187 || e === 191 || e === 215 || e === 247 || e >= 8208 && e <= 8213 || e >= 8214 && e <= 8215 || e === 8216 || e === 8217 || e === 8218 || e >= 8219 && e <= 8220 || e === 8221 || e === 8222 || e === 8223 || e >= 8224 && e <= 8231 || e >= 8240 && e <= 8248 || e === 8249 || e === 8250 || e >= 8251 && e <= 8254 || e >= 8257 && e <= 8259 || e === 8260 || e === 8261 || e === 8262 || e >= 8263 && e <= 8273 || e === 8274 || e === 8275 || e >= 8277 && e <= 8286 || e >= 8592 && e <= 8596 || e >= 8597 && e <= 8601 || e >= 8602 && e <= 8603 || e >= 8604 && e <= 8607 || e === 8608 || e >= 8609 && e <= 8610 || e === 8611 || e >= 8612 && e <= 8613 || e === 8614 || e >= 8615 && e <= 8621 || e === 8622 || e >= 8623 && e <= 8653 || e >= 8654 && e <= 8655 || e >= 8656 && e <= 8657 || e === 8658 || e === 8659 || e === 8660 || e >= 8661 && e <= 8691 || e >= 8692 && e <= 8959 || e >= 8960 && e <= 8967 || e === 8968 || e === 8969 || e === 8970 || e === 8971 || e >= 8972 && e <= 8991 || e >= 8992 && e <= 8993 || e >= 8994 && e <= 9e3 || e === 9001 || e === 9002 || e >= 9003 && e <= 9083 || e === 9084 || e >= 9085 && e <= 9114 || e >= 9115 && e <= 9139 || e >= 9140 && e <= 9179 || e >= 9180 && e <= 9185 || e >= 9186 && e <= 9254 || e >= 9255 && e <= 9279 || e >= 9280 && e <= 9290 || e >= 9291 && e <= 9311 || e >= 9472 && e <= 9654 || e === 9655 || e >= 9656 && e <= 9664 || e === 9665 || e >= 9666 && e <= 9719 || e >= 9720 && e <= 9727 || e >= 9728 && e <= 9838 || e === 9839 || e >= 9840 && e <= 10087 || e === 10088 || e === 10089 || e === 10090 || e === 10091 || e === 10092 || e === 10093 || e === 10094 || e === 10095 || e === 10096 || e === 10097 || e === 10098 || e === 10099 || e === 10100 || e === 10101 || e >= 10132 && e <= 10175 || e >= 10176 && e <= 10180 || e === 10181 || e === 10182 || e >= 10183 && e <= 10213 || e === 10214 || e === 10215 || e === 10216 || e === 10217 || e === 10218 || e === 10219 || e === 10220 || e === 10221 || e === 10222 || e === 10223 || e >= 10224 && e <= 10239 || e >= 10240 && e <= 10495 || e >= 10496 && e <= 10626 || e === 10627 || e === 10628 || e === 10629 || e === 10630 || e === 10631 || e === 10632 || e === 10633 || e === 10634 || e === 10635 || e === 10636 || e === 10637 || e === 10638 || e === 10639 || e === 10640 || e === 10641 || e === 10642 || e === 10643 || e === 10644 || e === 10645 || e === 10646 || e === 10647 || e === 10648 || e >= 10649 && e <= 10711 || e === 10712 || e === 10713 || e === 10714 || e === 10715 || e >= 10716 && e <= 10747 || e === 10748 || e === 10749 || e >= 10750 && e <= 11007 || e >= 11008 && e <= 11055 || e >= 11056 && e <= 11076 || e >= 11077 && e <= 11078 || e >= 11079 && e <= 11084 || e >= 11085 && e <= 11123 || e >= 11124 && e <= 11125 || e >= 11126 && e <= 11157 || e === 11158 || e >= 11159 && e <= 11263 || e >= 11776 && e <= 11777 || e === 11778 || e === 11779 || e === 11780 || e === 11781 || e >= 11782 && e <= 11784 || e === 11785 || e === 11786 || e === 11787 || e === 11788 || e === 11789 || e >= 11790 && e <= 11798 || e === 11799 || e >= 11800 && e <= 11801 || e === 11802 || e === 11803 || e === 11804 || e === 11805 || e >= 11806 && e <= 11807 || e === 11808 || e === 11809 || e === 11810 || e === 11811 || e === 11812 || e === 11813 || e === 11814 || e === 11815 || e === 11816 || e === 11817 || e >= 11818 && e <= 11822 || e === 11823 || e >= 11824 && e <= 11833 || e >= 11834 && e <= 11835 || e >= 11836 && e <= 11839 || e === 11840 || e === 11841 || e === 11842 || e >= 11843 && e <= 11855 || e >= 11856 && e <= 11857 || e === 11858 || e >= 11859 && e <= 11903 || e >= 12289 && e <= 12291 || e === 12296 || e === 12297 || e === 12298 || e === 12299 || e === 12300 || e === 12301 || e === 12302 || e === 12303 || e === 12304 || e === 12305 || e >= 12306 && e <= 12307 || e === 12308 || e === 12309 || e === 12310 || e === 12311 || e === 12312 || e === 12313 || e === 12314 || e === 12315 || e === 12316 || e === 12317 || e >= 12318 && e <= 12319 || e === 12320 || e === 12336 || e === 64830 || e === 64831 || e >= 65093 && e <= 65094;
}
function Lr(e) {
  e.forEach(function(t) {
    if (delete t.location, Ln(t) || In(t))
      for (var r in t.options)
        delete t.options[r].location, Lr(t.options[r].value);
    else On(t) && Rn(t.style) || (xn(t) || Nn(t)) && Mr(t.style) ? delete t.style.location : Sn(t) && Lr(t.children);
  });
}
function Va(e, t) {
  t === void 0 && (t = {}), t = z({ shouldParseSkeletons: !0, requiresOtherClause: !0 }, t);
  var r = new ja(e, t).parse();
  if (r.err) {
    var i = SyntaxError(F[r.err.kind]);
    throw i.location = r.err.location, i.originalMessage = r.err.message, i;
  }
  return t != null && t.captureLocation || Lr(r.val), r.val;
}
function pr(e, t) {
  var r = t && t.cache ? t.cache : Ja, i = t && t.serializer ? t.serializer : Aa, n = t && t.strategy ? t.strategy : qa;
  return n(e, {
    cache: r,
    serializer: i
  });
}
function Ea(e) {
  return e == null || typeof e == "number" || typeof e == "boolean";
}
function Vn(e, t, r, i) {
  var n = Ea(i) ? i : r(i), s = t.get(n);
  return typeof s > "u" && (s = e.call(this, i), t.set(n, s)), s;
}
function En(e, t, r) {
  var i = Array.prototype.slice.call(arguments, 3), n = r(i), s = t.get(n);
  return typeof s > "u" && (s = e.apply(this, i), t.set(n, s)), s;
}
function Er(e, t, r, i, n) {
  return r.bind(t, e, i, n);
}
function qa(e, t) {
  var r = e.length === 1 ? Vn : En;
  return Er(e, this, r, t.cache.create(), t.serializer);
}
function Ga(e, t) {
  return Er(e, this, En, t.cache.create(), t.serializer);
}
function Wa(e, t) {
  return Er(e, this, Vn, t.cache.create(), t.serializer);
}
var Aa = function() {
  return JSON.stringify(arguments);
};
function qr() {
  this.cache = /* @__PURE__ */ Object.create(null);
}
qr.prototype.get = function(e) {
  return this.cache[e];
};
qr.prototype.set = function(e, t) {
  this.cache[e] = t;
};
var Ja = {
  create: function() {
    return new qr();
  }
}, _r = {
  variadic: Ga,
  monadic: Wa
}, ft;
(function(e) {
  e.MISSING_VALUE = "MISSING_VALUE", e.INVALID_VALUE = "INVALID_VALUE", e.MISSING_INTL_API = "MISSING_INTL_API";
})(ft || (ft = {}));
var nr = (
  /** @class */
  function(e) {
    ir(t, e);
    function t(r, i, n) {
      var s = e.call(this, r) || this;
      return s.code = i, s.originalMessage = n, s;
    }
    return t.prototype.toString = function() {
      return "[formatjs Error: ".concat(this.code, "] ").concat(this.message);
    }, t;
  }(Error)
), vi = (
  /** @class */
  function(e) {
    ir(t, e);
    function t(r, i, n, s) {
      return e.call(this, 'Invalid values for "'.concat(r, '": "').concat(i, '". Options are "').concat(Object.keys(n).join('", "'), '"'), ft.INVALID_VALUE, s) || this;
    }
    return t;
  }(nr)
), Xa = (
  /** @class */
  function(e) {
    ir(t, e);
    function t(r, i, n) {
      return e.call(this, 'Value for "'.concat(r, '" must be of type ').concat(i), ft.INVALID_VALUE, n) || this;
    }
    return t;
  }(nr)
), Qa = (
  /** @class */
  function(e) {
    ir(t, e);
    function t(r, i) {
      return e.call(this, 'The intl string context variable "'.concat(r, '" was not provided to the string "').concat(i, '"'), ft.MISSING_VALUE, i) || this;
    }
    return t;
  }(nr)
), le;
(function(e) {
  e[e.literal = 0] = "literal", e[e.object = 1] = "object";
})(le || (le = {}));
function Ka(e) {
  return e.length < 2 ? e : e.reduce(function(t, r) {
    var i = t[t.length - 1];
    return !i || i.type !== le.literal || r.type !== le.literal ? t.push(r) : i.value += r.value, t;
  }, []);
}
function Ya(e) {
  return typeof e == "function";
}
function Gt(e, t, r, i, n, s, a) {
  if (e.length === 1 && fi(e[0]))
    return [
      {
        type: le.literal,
        value: e[0].value
      }
    ];
  for (var o = [], l = 0, c = e; l < c.length; l++) {
    var u = c[l];
    if (fi(u)) {
      o.push({
        type: le.literal,
        value: u.value
      });
      continue;
    }
    if (ga(u)) {
      typeof s == "number" && o.push({
        type: le.literal,
        value: r.getNumberFormat(t).format(s)
      });
      continue;
    }
    var h = u.value;
    if (!(n && h in n))
      throw new Qa(h, a);
    var f = n[h];
    if (da(u)) {
      (!f || typeof f == "string" || typeof f == "number") && (f = typeof f == "string" || typeof f == "number" ? String(f) : ""), o.push({
        type: typeof f == "string" ? le.literal : le.object,
        value: f
      });
      continue;
    }
    if (xn(u)) {
      var g = typeof u.style == "string" ? i.date[u.style] : Mr(u.style) ? u.style.parsedOptions : void 0;
      o.push({
        type: le.literal,
        value: r.getDateTimeFormat(t, g).format(f)
      });
      continue;
    }
    if (Nn(u)) {
      var g = typeof u.style == "string" ? i.time[u.style] : Mr(u.style) ? u.style.parsedOptions : i.time.medium;
      o.push({
        type: le.literal,
        value: r.getDateTimeFormat(t, g).format(f)
      });
      continue;
    }
    if (On(u)) {
      var g = typeof u.style == "string" ? i.number[u.style] : Rn(u.style) ? u.style.parsedOptions : void 0;
      g && g.scale && (f = f * (g.scale || 1)), o.push({
        type: le.literal,
        value: r.getNumberFormat(t, g).format(f)
      });
      continue;
    }
    if (Sn(u)) {
      var m = u.children, p = u.value, b = n[p];
      if (!Ya(b))
        throw new Xa(p, "function", a);
      var C = Gt(m, t, r, i, n, s), H = b(C.map(function(x) {
        return x.value;
      }));
      Array.isArray(H) || (H = [H]), o.push.apply(o, H.map(function(x) {
        return {
          type: typeof x == "string" ? le.literal : le.object,
          value: x
        };
      }));
    }
    if (Ln(u)) {
      var _ = u.options[f] || u.options.other;
      if (!_)
        throw new vi(u.value, f, Object.keys(u.options), a);
      o.push.apply(o, Gt(_.value, t, r, i, n));
      continue;
    }
    if (In(u)) {
      var _ = u.options["=".concat(f)];
      if (!_) {
        if (!Intl.PluralRules)
          throw new nr(`Intl.PluralRules is not available in this environment.
Try polyfilling it using "@formatjs/intl-pluralrules"
`, ft.MISSING_INTL_API, a);
        var L = r.getPluralRules(t, { type: u.pluralType }).select(f - (u.offset || 0));
        _ = u.options[L] || u.options.other;
      }
      if (!_)
        throw new vi(u.value, f, Object.keys(u.options), a);
      o.push.apply(o, Gt(_.value, t, r, i, n, f - (u.offset || 0)));
      continue;
    }
  }
  return Ka(o);
}
function Za(e, t) {
  return t ? z(z(z({}, e || {}), t || {}), Object.keys(e).reduce(function(r, i) {
    return r[i] = z(z({}, e[i]), t[i] || {}), r;
  }, {})) : e;
}
function eo(e, t) {
  return t ? Object.keys(e).reduce(function(r, i) {
    return r[i] = Za(e[i], t[i]), r;
  }, z({}, e)) : e;
}
function vr(e) {
  return {
    create: function() {
      return {
        get: function(t) {
          return e[t];
        },
        set: function(t, r) {
          e[t] = r;
        }
      };
    }
  };
}
function to(e) {
  return e === void 0 && (e = {
    number: {},
    dateTime: {},
    pluralRules: {}
  }), {
    getNumberFormat: pr(function() {
      for (var t, r = [], i = 0; i < arguments.length; i++)
        r[i] = arguments[i];
      return new ((t = Intl.NumberFormat).bind.apply(t, gr([void 0], r, !1)))();
    }, {
      cache: vr(e.number),
      strategy: _r.variadic
    }),
    getDateTimeFormat: pr(function() {
      for (var t, r = [], i = 0; i < arguments.length; i++)
        r[i] = arguments[i];
      return new ((t = Intl.DateTimeFormat).bind.apply(t, gr([void 0], r, !1)))();
    }, {
      cache: vr(e.dateTime),
      strategy: _r.variadic
    }),
    getPluralRules: pr(function() {
      for (var t, r = [], i = 0; i < arguments.length; i++)
        r[i] = arguments[i];
      return new ((t = Intl.PluralRules).bind.apply(t, gr([void 0], r, !1)))();
    }, {
      cache: vr(e.pluralRules),
      strategy: _r.variadic
    })
  };
}
var qn = (
  /** @class */
  function() {
    function e(t, r, i, n) {
      var s = this;
      if (r === void 0 && (r = e.defaultLocale), this.formatterCache = {
        number: {},
        dateTime: {},
        pluralRules: {}
      }, this.format = function(l) {
        var c = s.formatToParts(l);
        if (c.length === 1)
          return c[0].value;
        var u = c.reduce(function(h, f) {
          return !h.length || f.type !== le.literal || typeof h[h.length - 1] != "string" ? h.push(f.value) : h[h.length - 1] += f.value, h;
        }, []);
        return u.length <= 1 ? u[0] || "" : u;
      }, this.formatToParts = function(l) {
        return Gt(s.ast, s.locales, s.formatters, s.formats, l, void 0, s.message);
      }, this.resolvedOptions = function() {
        var l;
        return {
          locale: ((l = s.resolvedLocale) === null || l === void 0 ? void 0 : l.toString()) || Intl.NumberFormat.supportedLocalesOf(s.locales)[0]
        };
      }, this.getAst = function() {
        return s.ast;
      }, this.locales = r, this.resolvedLocale = e.resolveLocale(r), typeof t == "string") {
        if (this.message = t, !e.__parse)
          throw new TypeError("IntlMessageFormat.__parse must be set to process `message` of type `string`");
        var a = n || {}, o = ha(a, ["formatters"]);
        this.ast = e.__parse(t, z(z({}, o), { locale: this.resolvedLocale }));
      } else
        this.ast = t;
      if (!Array.isArray(this.ast))
        throw new TypeError("A message must be provided as a String or AST.");
      this.formats = eo(e.formats, i), this.formatters = n && n.formatters || to(this.formatterCache);
    }
    return Object.defineProperty(e, "defaultLocale", {
      get: function() {
        return e.memoizedDefaultLocale || (e.memoizedDefaultLocale = new Intl.NumberFormat().resolvedOptions().locale), e.memoizedDefaultLocale;
      },
      enumerable: !1,
      configurable: !0
    }), e.memoizedDefaultLocale = null, e.resolveLocale = function(t) {
      if (!(typeof Intl.Locale > "u")) {
        var r = Intl.NumberFormat.supportedLocalesOf(t);
        return r.length > 0 ? new Intl.Locale(r[0]) : new Intl.Locale(typeof t == "string" ? t : t[0]);
      }
    }, e.__parse = Va, e.formats = {
      number: {
        integer: {
          maximumFractionDigits: 0
        },
        currency: {
          style: "currency"
        },
        percent: {
          style: "percent"
        }
      },
      date: {
        short: {
          month: "numeric",
          day: "numeric",
          year: "2-digit"
        },
        medium: {
          month: "short",
          day: "numeric",
          year: "numeric"
        },
        long: {
          month: "long",
          day: "numeric",
          year: "numeric"
        },
        full: {
          weekday: "long",
          month: "long",
          day: "numeric",
          year: "numeric"
        }
      },
      time: {
        short: {
          hour: "numeric",
          minute: "numeric"
        },
        medium: {
          hour: "numeric",
          minute: "numeric",
          second: "numeric"
        },
        long: {
          hour: "numeric",
          minute: "numeric",
          second: "numeric",
          timeZoneName: "short"
        },
        full: {
          hour: "numeric",
          minute: "numeric",
          second: "numeric",
          timeZoneName: "short"
        }
      }
    }, e;
  }()
);
function ro(e, t) {
  if (t == null)
    return;
  if (t in e)
    return e[t];
  const r = t.split(".");
  let i = e;
  for (let n = 0; n < r.length; n++)
    if (typeof i == "object") {
      if (n > 0) {
        const s = r.slice(n, r.length).join(".");
        if (s in i) {
          i = i[s];
          break;
        }
      }
      i = i[r[n]];
    } else
      i = void 0;
  return i;
}
const Ue = {}, io = (e, t, r) => r && (t in Ue || (Ue[t] = {}), e in Ue[t] || (Ue[t][e] = r), r), Gn = (e, t) => {
  if (t == null)
    return;
  if (t in Ue && e in Ue[t])
    return Ue[t][e];
  const r = Lt(t);
  for (let i = 0; i < r.length; i++) {
    const n = r[i], s = so(n, e);
    if (s)
      return io(e, t, s);
  }
};
let Gr;
const pt = mt({});
function no(e) {
  return Gr[e] || null;
}
function Wr(e) {
  return e in Gr;
}
function so(e, t) {
  if (!Wr(e))
    return null;
  const r = no(e);
  return ro(r, t);
}
function ao(e) {
  if (e == null)
    return;
  const t = Lt(e);
  for (let r = 0; r < t.length; r++) {
    const i = t[r];
    if (Wr(i))
      return i;
  }
}
function oo(e, ...t) {
  delete Ue[e], pt.update((r) => (r[e] = fa.all([r[e] || {}, ...t]), r));
}
ze(
  [pt],
  ([e]) => Object.keys(e)
);
pt.subscribe((e) => Gr = e);
const Ct = {};
function lo(e) {
  Ct[e] = /* @__PURE__ */ new Set();
}
function co(e, t) {
  Ct[e].delete(t), Ct[e].size === 0 && delete Ct[e];
}
function Mt(e) {
  return Ct[e];
}
function uo(e) {
  return Lt(e).map((t) => {
    const r = Mt(t);
    return [t, r ? [...r] : []];
  }).filter(([, t]) => t.length > 0);
}
function Yt(e) {
  return e == null ? !1 : Lt(e).some(
    (t) => {
      var r;
      return (r = Mt(t)) == null ? void 0 : r.size;
    }
  );
}
function fo(e, t) {
  return Promise.all(
    t.map((i) => (co(e, i), i().then((n) => n.default || n)))
  ).then((i) => oo(e, ...i));
}
const yt = {};
function Ar(e) {
  if (!Yt(e))
    return e in yt ? yt[e] : Promise.resolve();
  const t = uo(e);
  return yt[e] = Promise.all(
    t.map(
      ([r, i]) => fo(r, i)
    )
  ).then(() => {
    if (Yt(e))
      return Ar(e);
    delete yt[e];
  }), yt[e];
}
function sr(e, t) {
  Mt(e) || lo(e);
  const r = Mt(e);
  Mt(e).has(t) || (Wr(e) || pt.update((i) => (i[e] = {}, i)), r.add(t));
}
var bi = Object.getOwnPropertySymbols, ho = Object.prototype.hasOwnProperty, go = Object.prototype.propertyIsEnumerable, mo = (e, t) => {
  var r = {};
  for (var i in e)
    ho.call(e, i) && t.indexOf(i) < 0 && (r[i] = e[i]);
  if (e != null && bi)
    for (var i of bi(e))
      t.indexOf(i) < 0 && go.call(e, i) && (r[i] = e[i]);
  return r;
};
const po = {
  number: {
    scientific: { notation: "scientific" },
    engineering: { notation: "engineering" },
    compactLong: { notation: "compact", compactDisplay: "long" },
    compactShort: { notation: "compact", compactDisplay: "short" }
  },
  date: {
    short: { month: "numeric", day: "numeric", year: "2-digit" },
    medium: { month: "short", day: "numeric", year: "numeric" },
    long: { month: "long", day: "numeric", year: "numeric" },
    full: { weekday: "long", month: "long", day: "numeric", year: "numeric" }
  },
  time: {
    short: { hour: "numeric", minute: "numeric" },
    medium: { hour: "numeric", minute: "numeric", second: "numeric" },
    long: {
      hour: "numeric",
      minute: "numeric",
      second: "numeric",
      timeZoneName: "short"
    },
    full: {
      hour: "numeric",
      minute: "numeric",
      second: "numeric",
      timeZoneName: "short"
    }
  }
};
function _o({ locale: e, id: t }) {
  console.warn(
    `[svelte-i18n] The message "${t}" was not found in "${Lt(
      e
    ).join('", "')}".${Yt(Te()) ? `

Note: there are at least one loader still registered to this locale that wasn't executed.` : ""}`
  );
}
const vo = {
  fallbackLocale: null,
  loadingDelay: 200,
  formats: po,
  warnOnMissingMessages: !0,
  handleMissingMessage: void 0,
  ignoreTag: !0
}, Bt = vo;
function Xe() {
  return Bt;
}
function bo(e) {
  const t = e, { formats: r } = t, i = mo(t, ["formats"]);
  let n = e.fallbackLocale;
  if (e.initialLocale)
    try {
      qn.resolveLocale(e.initialLocale) && (n = e.initialLocale);
    } catch {
      console.warn(
        `[svelte-i18n] The initial locale "${e.initialLocale}" is not a valid locale.`
      );
    }
  return i.warnOnMissingMessages && (delete i.warnOnMissingMessages, i.handleMissingMessage == null ? i.handleMissingMessage = _o : console.warn(
    '[svelte-i18n] The "warnOnMissingMessages" option is deprecated. Please use the "handleMissingMessage" option instead.'
  )), Object.assign(Bt, i, { initialLocale: n }), r && ("number" in r && Object.assign(Bt.formats.number, r.number), "date" in r && Object.assign(Bt.formats.date, r.date), "time" in r && Object.assign(Bt.formats.time, r.time)), _t.set(n);
}
const br = mt(!1);
var wo = Object.defineProperty, ko = Object.defineProperties, yo = Object.getOwnPropertyDescriptors, wi = Object.getOwnPropertySymbols, Bo = Object.prototype.hasOwnProperty, Po = Object.prototype.propertyIsEnumerable, ki = (e, t, r) => t in e ? wo(e, t, { enumerable: !0, configurable: !0, writable: !0, value: r }) : e[t] = r, Co = (e, t) => {
  for (var r in t || (t = {}))
    Bo.call(t, r) && ki(e, r, t[r]);
  if (wi)
    for (var r of wi(t))
      Po.call(t, r) && ki(e, r, t[r]);
  return e;
}, Mo = (e, t) => ko(e, yo(t));
let Ir;
const Zt = mt(null);
function yi(e) {
  return e.split("-").map((t, r, i) => i.slice(0, r + 1).join("-")).reverse();
}
function Lt(e, t = Xe().fallbackLocale) {
  const r = yi(e);
  return t ? [.../* @__PURE__ */ new Set([...r, ...yi(t)])] : r;
}
function Te() {
  return Ir ?? void 0;
}
Zt.subscribe((e) => {
  Ir = e ?? void 0, typeof window < "u" && e != null && document.documentElement.setAttribute("lang", e);
});
const Ho = (e) => {
  if (e && ao(e) && Yt(e)) {
    const { loadingDelay: t } = Xe();
    let r;
    return typeof window < "u" && Te() != null && t ? r = window.setTimeout(
      () => br.set(!0),
      t
    ) : br.set(!0), Ar(e).then(() => {
      Zt.set(e);
    }).finally(() => {
      clearTimeout(r), br.set(!1);
    });
  }
  return Zt.set(e);
}, _t = Mo(Co({}, Zt), {
  set: Ho
}), Oo = () => typeof window > "u" ? null : window.navigator.language || window.navigator.languages[0], ar = (e) => {
  const t = /* @__PURE__ */ Object.create(null);
  return (i) => {
    const n = JSON.stringify(i);
    return n in t ? t[n] : t[n] = e(i);
  };
};
var xo = Object.defineProperty, er = Object.getOwnPropertySymbols, Wn = Object.prototype.hasOwnProperty, An = Object.prototype.propertyIsEnumerable, Bi = (e, t, r) => t in e ? xo(e, t, { enumerable: !0, configurable: !0, writable: !0, value: r }) : e[t] = r, Jr = (e, t) => {
  for (var r in t || (t = {}))
    Wn.call(t, r) && Bi(e, r, t[r]);
  if (er)
    for (var r of er(t))
      An.call(t, r) && Bi(e, r, t[r]);
  return e;
}, vt = (e, t) => {
  var r = {};
  for (var i in e)
    Wn.call(e, i) && t.indexOf(i) < 0 && (r[i] = e[i]);
  if (e != null && er)
    for (var i of er(e))
      t.indexOf(i) < 0 && An.call(e, i) && (r[i] = e[i]);
  return r;
};
const Nt = (e, t) => {
  const { formats: r } = Xe();
  if (e in r && t in r[e])
    return r[e][t];
  throw new Error(`[svelte-i18n] Unknown "${t}" ${e} format.`);
}, No = ar(
  (e) => {
    var t = e, { locale: r, format: i } = t, n = vt(t, ["locale", "format"]);
    if (r == null)
      throw new Error('[svelte-i18n] A "locale" must be set to format numbers');
    return i && (n = Nt("number", i)), new Intl.NumberFormat(r, n);
  }
), Lo = ar(
  (e) => {
    var t = e, { locale: r, format: i } = t, n = vt(t, ["locale", "format"]);
    if (r == null)
      throw new Error('[svelte-i18n] A "locale" must be set to format dates');
    return i ? n = Nt("date", i) : Object.keys(n).length === 0 && (n = Nt("date", "short")), new Intl.DateTimeFormat(r, n);
  }
), Io = ar(
  (e) => {
    var t = e, { locale: r, format: i } = t, n = vt(t, ["locale", "format"]);
    if (r == null)
      throw new Error(
        '[svelte-i18n] A "locale" must be set to format time values'
      );
    return i ? n = Nt("time", i) : Object.keys(n).length === 0 && (n = Nt("time", "short")), new Intl.DateTimeFormat(r, n);
  }
), So = (e = {}) => {
  var t = e, {
    locale: r = Te()
  } = t, i = vt(t, [
    "locale"
  ]);
  return No(Jr({ locale: r }, i));
}, Ro = (e = {}) => {
  var t = e, {
    locale: r = Te()
  } = t, i = vt(t, [
    "locale"
  ]);
  return Lo(Jr({ locale: r }, i));
}, $o = (e = {}) => {
  var t = e, {
    locale: r = Te()
  } = t, i = vt(t, [
    "locale"
  ]);
  return Io(Jr({ locale: r }, i));
}, Do = ar(
  // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
  (e, t = Te()) => new qn(e, t, Xe().formats, {
    ignoreTag: Xe().ignoreTag
  })
), Fo = (e, t = {}) => {
  var r, i, n, s;
  let a = t;
  typeof e == "object" && (a = e, e = a.id);
  const {
    values: o,
    locale: l = Te(),
    default: c
  } = a;
  if (l == null)
    throw new Error(
      "[svelte-i18n] Cannot format a message without first setting the initial locale."
    );
  let u = Gn(e, l);
  if (!u)
    u = (s = (n = (i = (r = Xe()).handleMissingMessage) == null ? void 0 : i.call(r, { locale: l, id: e, defaultValue: c })) != null ? n : c) != null ? s : e;
  else if (typeof u != "string")
    return console.warn(
      `[svelte-i18n] Message with id "${e}" must be of type "string", found: "${typeof u}". Gettin its value through the "$format" method is deprecated; use the "json" method instead.`
    ), u;
  if (!o)
    return u;
  let h = u;
  try {
    h = Do(u, l).format(o);
  } catch (f) {
    f instanceof Error && console.warn(
      `[svelte-i18n] Message "${e}" has syntax error:`,
      f.message
    );
  }
  return h;
}, jo = (e, t) => $o(t).format(e), zo = (e, t) => Ro(t).format(e), To = (e, t) => So(t).format(e), Uo = (e, t = Te()) => Gn(e, t), Ye = ze([_t, pt], () => Fo);
ze([_t], () => jo);
ze([_t], () => zo);
ze([_t], () => To);
ze([_t, pt], () => Uo);
function Vo(e) {
  return Ar(Te() || Xe().initialLocale);
}
function Eo(e, t) {
  t && t !== "lg" && t !== "sm" && t !== "xs" ? e.style.fontSize = t.replace("x", "em") : e.style.fontSize = "";
}
function qo(e, t, r, i, n, s = 1, a = "", o = "") {
  let l = 1, c = 1;
  n && (n == "horizontal" ? l = -1 : n == "vertical" ? c = -1 : l = c = -1), typeof e == "string" && (e = parseFloat(e)), typeof t == "string" && (t = parseFloat(t)), typeof r == "string" && (r = parseFloat(r));
  const u = `${t * s}${a}`, h = `${r * s}${a}`;
  let f = `translate(${u},${h}) scale(${l * e},${c * e})`;
  return i && (f += ` rotate(${i}${o})`), f;
}
function Go(e) {
  Me(e, "svelte-bvo74f", ".svelte-fa-base{height:1em;overflow:visible;transform-origin:center;vertical-align:-0.125em}.svelte-fa-fw{text-align:center;width:1.25em}.svelte-fa-pull-left.svelte-bvo74f{float:left}.svelte-fa-pull-right.svelte-bvo74f{float:right}.svelte-fa-size-lg.svelte-bvo74f{font-size:1.33333em;line-height:0.75em;vertical-align:-0.225em}.svelte-fa-size-sm.svelte-bvo74f{font-size:0.875em}.svelte-fa-size-xs.svelte-bvo74f{font-size:0.75em}.spin.svelte-bvo74f{animation:svelte-bvo74f-spin 2s 0s infinite linear}.pulse.svelte-bvo74f{animation:svelte-bvo74f-spin 1s infinite steps(8)}@keyframes svelte-bvo74f-spin{0%{transform:rotate(0deg)}100%{transform:rotate(360deg)}}");
}
function Pi(e) {
  let t, r, i, n, s, a, o;
  function l(h, f) {
    return typeof /*i*/
    h[16][4] == "string" ? Ao : Wo;
  }
  let c = l(e), u = c(e);
  return {
    c() {
      t = ot("svg"), r = ot("g"), i = ot("g"), u.c(), d(
        i,
        "transform",
        /*transform*/
        e[15]
      ), d(r, "transform", n = "translate(" + /*i*/
      e[16][0] / 2 + " " + /*i*/
      e[16][1] / 2 + ")"), d(r, "transform-origin", s = /*i*/
      e[16][0] / 4 + " 0"), d(
        t,
        "id",
        /*id*/
        e[1]
      ), d(t, "class", a = "svelte-fa svelte-fa-base " + /*clazz*/
      e[0] + " svelte-bvo74f"), d(
        t,
        "style",
        /*style*/
        e[2]
      ), d(t, "viewBox", o = "0 0 " + /*i*/
      e[16][0] + " " + /*i*/
      e[16][1]), d(t, "aria-hidden", "true"), d(t, "role", "img"), d(t, "xmlns", "http://www.w3.org/2000/svg"), T(
        t,
        "pulse",
        /*pulse*/
        e[8]
      ), T(
        t,
        "svelte-fa-size-lg",
        /*size*/
        e[3] === "lg"
      ), T(
        t,
        "svelte-fa-size-sm",
        /*size*/
        e[3] === "sm"
      ), T(
        t,
        "svelte-fa-size-xs",
        /*size*/
        e[3] === "xs"
      ), T(
        t,
        "svelte-fa-fw",
        /*fw*/
        e[5]
      ), T(
        t,
        "svelte-fa-pull-left",
        /*pull*/
        e[6] === "left"
      ), T(
        t,
        "svelte-fa-pull-right",
        /*pull*/
        e[6] === "right"
      ), T(
        t,
        "spin",
        /*spin*/
        e[7]
      );
    },
    m(h, f) {
      O(h, t, f), v(t, r), v(r, i), u.m(i, null), e[23](t);
    },
    p(h, f) {
      c === (c = l(h)) && u ? u.p(h, f) : (u.d(1), u = c(h), u && (u.c(), u.m(i, null))), f & /*transform*/
      32768 && d(
        i,
        "transform",
        /*transform*/
        h[15]
      ), f & /*i*/
      65536 && n !== (n = "translate(" + /*i*/
      h[16][0] / 2 + " " + /*i*/
      h[16][1] / 2 + ")") && d(r, "transform", n), f & /*i*/
      65536 && s !== (s = /*i*/
      h[16][0] / 4 + " 0") && d(r, "transform-origin", s), f & /*id*/
      2 && d(
        t,
        "id",
        /*id*/
        h[1]
      ), f & /*clazz*/
      1 && a !== (a = "svelte-fa svelte-fa-base " + /*clazz*/
      h[0] + " svelte-bvo74f") && d(t, "class", a), f & /*style*/
      4 && d(
        t,
        "style",
        /*style*/
        h[2]
      ), f & /*i*/
      65536 && o !== (o = "0 0 " + /*i*/
      h[16][0] + " " + /*i*/
      h[16][1]) && d(t, "viewBox", o), f & /*clazz, pulse*/
      257 && T(
        t,
        "pulse",
        /*pulse*/
        h[8]
      ), f & /*clazz, size*/
      9 && T(
        t,
        "svelte-fa-size-lg",
        /*size*/
        h[3] === "lg"
      ), f & /*clazz, size*/
      9 && T(
        t,
        "svelte-fa-size-sm",
        /*size*/
        h[3] === "sm"
      ), f & /*clazz, size*/
      9 && T(
        t,
        "svelte-fa-size-xs",
        /*size*/
        h[3] === "xs"
      ), f & /*clazz, fw*/
      33 && T(
        t,
        "svelte-fa-fw",
        /*fw*/
        h[5]
      ), f & /*clazz, pull*/
      65 && T(
        t,
        "svelte-fa-pull-left",
        /*pull*/
        h[6] === "left"
      ), f & /*clazz, pull*/
      65 && T(
        t,
        "svelte-fa-pull-right",
        /*pull*/
        h[6] === "right"
      ), f & /*clazz, spin*/
      129 && T(
        t,
        "spin",
        /*spin*/
        h[7]
      );
    },
    d(h) {
      h && M(t), u.d(), e[23](null);
    }
  };
}
function Wo(e) {
  let t, r, i, n, s, a, o, l, c, u;
  return {
    c() {
      t = ot("path"), a = ot("path"), d(t, "d", r = /*i*/
      e[16][4][0]), d(t, "fill", i = /*secondaryColor*/
      e[10] || /*color*/
      e[4] || "currentColor"), d(t, "fill-opacity", n = /*swapOpacity*/
      e[13] != !1 ? (
        /*primaryOpacity*/
        e[11]
      ) : (
        /*secondaryOpacity*/
        e[12]
      )), d(t, "transform", s = "translate(" + /*i*/
      e[16][0] / -2 + " " + /*i*/
      e[16][1] / -2 + ")"), d(a, "d", o = /*i*/
      e[16][4][1]), d(a, "fill", l = /*primaryColor*/
      e[9] || /*color*/
      e[4] || "currentColor"), d(a, "fill-opacity", c = /*swapOpacity*/
      e[13] != !1 ? (
        /*secondaryOpacity*/
        e[12]
      ) : (
        /*primaryOpacity*/
        e[11]
      )), d(a, "transform", u = "translate(" + /*i*/
      e[16][0] / -2 + " " + /*i*/
      e[16][1] / -2 + ")");
    },
    m(h, f) {
      O(h, t, f), O(h, a, f);
    },
    p(h, f) {
      f & /*i*/
      65536 && r !== (r = /*i*/
      h[16][4][0]) && d(t, "d", r), f & /*secondaryColor, color*/
      1040 && i !== (i = /*secondaryColor*/
      h[10] || /*color*/
      h[4] || "currentColor") && d(t, "fill", i), f & /*swapOpacity, primaryOpacity, secondaryOpacity*/
      14336 && n !== (n = /*swapOpacity*/
      h[13] != !1 ? (
        /*primaryOpacity*/
        h[11]
      ) : (
        /*secondaryOpacity*/
        h[12]
      )) && d(t, "fill-opacity", n), f & /*i*/
      65536 && s !== (s = "translate(" + /*i*/
      h[16][0] / -2 + " " + /*i*/
      h[16][1] / -2 + ")") && d(t, "transform", s), f & /*i*/
      65536 && o !== (o = /*i*/
      h[16][4][1]) && d(a, "d", o), f & /*primaryColor, color*/
      528 && l !== (l = /*primaryColor*/
      h[9] || /*color*/
      h[4] || "currentColor") && d(a, "fill", l), f & /*swapOpacity, secondaryOpacity, primaryOpacity*/
      14336 && c !== (c = /*swapOpacity*/
      h[13] != !1 ? (
        /*secondaryOpacity*/
        h[12]
      ) : (
        /*primaryOpacity*/
        h[11]
      )) && d(a, "fill-opacity", c), f & /*i*/
      65536 && u !== (u = "translate(" + /*i*/
      h[16][0] / -2 + " " + /*i*/
      h[16][1] / -2 + ")") && d(a, "transform", u);
    },
    d(h) {
      h && (M(t), M(a));
    }
  };
}
function Ao(e) {
  let t, r, i, n;
  return {
    c() {
      t = ot("path"), d(t, "d", r = /*i*/
      e[16][4]), d(t, "fill", i = /*color*/
      e[4] || /*primaryColor*/
      e[9] || "currentColor"), d(t, "transform", n = "translate(" + /*i*/
      e[16][0] / -2 + " " + /*i*/
      e[16][1] / -2 + ")");
    },
    m(s, a) {
      O(s, t, a);
    },
    p(s, a) {
      a & /*i*/
      65536 && r !== (r = /*i*/
      s[16][4]) && d(t, "d", r), a & /*color, primaryColor*/
      528 && i !== (i = /*color*/
      s[4] || /*primaryColor*/
      s[9] || "currentColor") && d(t, "fill", i), a & /*i*/
      65536 && n !== (n = "translate(" + /*i*/
      s[16][0] / -2 + " " + /*i*/
      s[16][1] / -2 + ")") && d(t, "transform", n);
    },
    d(s) {
      s && M(t);
    }
  };
}
function Jo(e) {
  let t, r = (
    /*i*/
    e[16][4] && Pi(e)
  );
  return {
    c() {
      r && r.c(), t = ve();
    },
    m(i, n) {
      r && r.m(i, n), O(i, t, n);
    },
    p(i, [n]) {
      /*i*/
      i[16][4] ? r ? r.p(i, n) : (r = Pi(i), r.c(), r.m(t.parentNode, t)) : r && (r.d(1), r = null);
    },
    i: q,
    o: q,
    d(i) {
      i && M(t), r && r.d(i);
    }
  };
}
function Xo(e, t, r) {
  let i, n, { class: s = void 0 } = t, { id: a = void 0 } = t, { style: o = void 0 } = t, { icon: l } = t, { size: c = void 0 } = t, { color: u = void 0 } = t, { fw: h = !1 } = t, { pull: f = void 0 } = t, { scale: g = 1 } = t, { translateX: m = 0 } = t, { translateY: p = 0 } = t, { rotate: b = void 0 } = t, { flip: C = void 0 } = t, { spin: H = !1 } = t, { pulse: _ = !1 } = t, { primaryColor: L = "" } = t, { secondaryColor: x = "" } = t, { primaryOpacity: D = 1 } = t, { secondaryOpacity: R = 0.4 } = t, { swapOpacity: y = !1 } = t, re;
  function ce(N) {
    ke[N ? "unshift" : "push"](() => {
      re = N, r(14, re);
    });
  }
  return e.$$set = (N) => {
    "class" in N && r(0, s = N.class), "id" in N && r(1, a = N.id), "style" in N && r(2, o = N.style), "icon" in N && r(17, l = N.icon), "size" in N && r(3, c = N.size), "color" in N && r(4, u = N.color), "fw" in N && r(5, h = N.fw), "pull" in N && r(6, f = N.pull), "scale" in N && r(18, g = N.scale), "translateX" in N && r(19, m = N.translateX), "translateY" in N && r(20, p = N.translateY), "rotate" in N && r(21, b = N.rotate), "flip" in N && r(22, C = N.flip), "spin" in N && r(7, H = N.spin), "pulse" in N && r(8, _ = N.pulse), "primaryColor" in N && r(9, L = N.primaryColor), "secondaryColor" in N && r(10, x = N.secondaryColor), "primaryOpacity" in N && r(11, D = N.primaryOpacity), "secondaryOpacity" in N && r(12, R = N.secondaryOpacity), "swapOpacity" in N && r(13, y = N.swapOpacity);
  }, e.$$.update = () => {
    e.$$.dirty & /*svgElement, size*/
    16392 && re && c && Eo(re, c), e.$$.dirty & /*icon*/
    131072 && r(16, i = l && l.icon || [0, 0, "", [], ""]), e.$$.dirty & /*scale, translateX, translateY, rotate, flip*/
    8126464 && r(15, n = qo(g, m, p, b, C, 512));
  }, [
    s,
    a,
    o,
    c,
    u,
    h,
    f,
    H,
    _,
    L,
    x,
    D,
    R,
    y,
    re,
    n,
    i,
    l,
    g,
    m,
    p,
    b,
    C,
    ce
  ];
}
class me extends K {
  constructor(t) {
    super(), X(
      this,
      t,
      Xo,
      Jo,
      J,
      {
        class: 0,
        id: 1,
        style: 2,
        icon: 17,
        size: 3,
        color: 4,
        fw: 5,
        pull: 6,
        scale: 18,
        translateX: 19,
        translateY: 20,
        rotate: 21,
        flip: 22,
        spin: 7,
        pulse: 8,
        primaryColor: 9,
        secondaryColor: 10,
        primaryOpacity: 11,
        secondaryOpacity: 12,
        swapOpacity: 13
      },
      Go
    );
  }
  get class() {
    return this.$$.ctx[0];
  }
  set class(t) {
    this.$$set({ class: t }), P();
  }
  get id() {
    return this.$$.ctx[1];
  }
  set id(t) {
    this.$$set({ id: t }), P();
  }
  get style() {
    return this.$$.ctx[2];
  }
  set style(t) {
    this.$$set({ style: t }), P();
  }
  get icon() {
    return this.$$.ctx[17];
  }
  set icon(t) {
    this.$$set({ icon: t }), P();
  }
  get size() {
    return this.$$.ctx[3];
  }
  set size(t) {
    this.$$set({ size: t }), P();
  }
  get color() {
    return this.$$.ctx[4];
  }
  set color(t) {
    this.$$set({ color: t }), P();
  }
  get fw() {
    return this.$$.ctx[5];
  }
  set fw(t) {
    this.$$set({ fw: t }), P();
  }
  get pull() {
    return this.$$.ctx[6];
  }
  set pull(t) {
    this.$$set({ pull: t }), P();
  }
  get scale() {
    return this.$$.ctx[18];
  }
  set scale(t) {
    this.$$set({ scale: t }), P();
  }
  get translateX() {
    return this.$$.ctx[19];
  }
  set translateX(t) {
    this.$$set({ translateX: t }), P();
  }
  get translateY() {
    return this.$$.ctx[20];
  }
  set translateY(t) {
    this.$$set({ translateY: t }), P();
  }
  get rotate() {
    return this.$$.ctx[21];
  }
  set rotate(t) {
    this.$$set({ rotate: t }), P();
  }
  get flip() {
    return this.$$.ctx[22];
  }
  set flip(t) {
    this.$$set({ flip: t }), P();
  }
  get spin() {
    return this.$$.ctx[7];
  }
  set spin(t) {
    this.$$set({ spin: t }), P();
  }
  get pulse() {
    return this.$$.ctx[8];
  }
  set pulse(t) {
    this.$$set({ pulse: t }), P();
  }
  get primaryColor() {
    return this.$$.ctx[9];
  }
  set primaryColor(t) {
    this.$$set({ primaryColor: t }), P();
  }
  get secondaryColor() {
    return this.$$.ctx[10];
  }
  set secondaryColor(t) {
    this.$$set({ secondaryColor: t }), P();
  }
  get primaryOpacity() {
    return this.$$.ctx[11];
  }
  set primaryOpacity(t) {
    this.$$set({ primaryOpacity: t }), P();
  }
  get secondaryOpacity() {
    return this.$$.ctx[12];
  }
  set secondaryOpacity(t) {
    this.$$set({ secondaryOpacity: t }), P();
  }
  get swapOpacity() {
    return this.$$.ctx[13];
  }
  set swapOpacity(t) {
    this.$$set({ swapOpacity: t }), P();
  }
}
Q(me, { class: {}, id: {}, style: {}, icon: {}, size: {}, color: {}, fw: { type: "Boolean" }, pull: {}, scale: {}, translateX: {}, translateY: {}, rotate: {}, flip: {}, spin: { type: "Boolean" }, pulse: { type: "Boolean" }, primaryColor: {}, secondaryColor: {}, primaryOpacity: {}, secondaryOpacity: {}, swapOpacity: { type: "Boolean" } }, [], [], !0);
const Qo = {
  prefix: "fas",
  iconName: "lightbulb",
  icon: [384, 512, [128161], "f0eb", "M272 384c9.6-31.9 29.5-59.1 49.2-86.2c0 0 0 0 0 0c5.2-7.1 10.4-14.2 15.4-21.4c19.8-28.5 31.4-63 31.4-100.3C368 78.8 289.2 0 192 0S16 78.8 16 176c0 37.3 11.6 71.9 31.4 100.3c5 7.2 10.2 14.3 15.4 21.4c0 0 0 0 0 0c19.8 27.1 39.7 54.4 49.2 86.2l160 0zM192 512c44.2 0 80-35.8 80-80l0-16-160 0 0 16c0 44.2 35.8 80 80 80zM112 176c0 8.8-7.2 16-16 16s-16-7.2-16-16c0-61.9 50.1-112 112-112c8.8 0 16 7.2 16 16s-7.2 16-16 16c-44.2 0-80 35.8-80 80z"]
}, Ko = {
  prefix: "fas",
  iconName: "star",
  icon: [576, 512, [11088, 61446], "f005", "M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z"]
}, Yo = {
  prefix: "fas",
  iconName: "circle-arrow-up",
  icon: [512, 512, ["arrow-circle-up"], "f0aa", "M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM385 215c9.4 9.4 9.4 24.6 0 33.9s-24.6 9.4-33.9 0l-71-71L280 392c0 13.3-10.7 24-24 24s-24-10.7-24-24l0-214.1-71 71c-9.4 9.4-24.6 9.4-33.9 0s-9.4-24.6 0-33.9L239 103c9.4-9.4 24.6-9.4 33.9 0L385 215z"]
}, Zo = {
  prefix: "fas",
  iconName: "circle-play",
  icon: [512, 512, [61469, "play-circle"], "f144", "M0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256zM188.3 147.1c-7.6 4.2-12.3 12.3-12.3 20.9l0 176c0 8.7 4.7 16.7 12.3 20.9s16.8 4.1 24.3-.5l144-88c7.1-4.4 11.5-12.1 11.5-20.5s-4.4-16.1-11.5-20.5l-144-88c-7.4-4.5-16.7-4.7-24.3-.5z"]
}, el = {
  prefix: "fas",
  iconName: "pause",
  icon: [320, 512, [9208], "f04c", "M48 64C21.5 64 0 85.5 0 112L0 400c0 26.5 21.5 48 48 48l32 0c26.5 0 48-21.5 48-48l0-288c0-26.5-21.5-48-48-48L48 64zm192 0c-26.5 0-48 21.5-48 48l0 288c0 26.5 21.5 48 48 48l32 0c26.5 0 48-21.5 48-48l0-288c0-26.5-21.5-48-48-48l-32 0z"]
}, tl = {
  prefix: "fas",
  iconName: "volume-high",
  icon: [640, 512, [128266, "volume-up"], "f028", "M533.6 32.5C598.5 85.2 640 165.8 640 256s-41.5 170.7-106.4 223.5c-10.3 8.4-25.4 6.8-33.8-3.5s-6.8-25.4 3.5-33.8C557.5 398.2 592 331.2 592 256s-34.5-142.2-88.7-186.3c-10.3-8.4-11.8-23.5-3.5-33.8s23.5-11.8 33.8-3.5zM473.1 107c43.2 35.2 70.9 88.9 70.9 149s-27.7 113.8-70.9 149c-10.3 8.4-25.4 6.8-33.8-3.5s-6.8-25.4 3.5-33.8C475.3 341.3 496 301.1 496 256s-20.7-85.3-53.2-111.8c-10.3-8.4-11.8-23.5-3.5-33.8s23.5-11.8 33.8-3.5zm-60.5 74.5C434.1 199.1 448 225.9 448 256s-13.9 56.9-35.4 74.5c-10.3 8.4-25.4 6.8-33.8-3.5s-6.8-25.4 3.5-33.8C393.1 284.4 400 271 400 256s-6.9-28.4-17.7-37.3c-10.3-8.4-11.8-23.5-3.5-33.8s23.5-11.8 33.8-3.5zM301.1 34.8C312.6 40 320 51.4 320 64l0 384c0 12.6-7.4 24-18.9 29.2s-25 3.1-34.4-5.3L131.8 352 64 352c-35.3 0-64-28.7-64-64l0-64c0-35.3 28.7-64 64-64l67.8 0L266.7 40.1c9.4-8.4 22.9-10.4 34.4-5.3z"]
}, rl = tl, il = {
  prefix: "fas",
  iconName: "location-dot",
  icon: [384, 512, ["map-marker-alt"], "f3c5", "M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 128a64 64 0 1 1 0 128 64 64 0 1 1 0-128z"]
}, nl = {
  prefix: "fas",
  iconName: "play",
  icon: [384, 512, [9654], "f04b", "M73 39c-14.8-9.1-33.4-9.4-48.5-.9S0 62.6 0 80L0 432c0 17.4 9.4 33.4 24.5 41.9s33.7 8.1 48.5-.9L361 297c14.3-8.7 23-24.2 23-41s-8.7-32.2-23-41L73 39z"]
}, sl = {
  prefix: "fas",
  iconName: "volume-xmark",
  icon: [576, 512, ["volume-mute", "volume-times"], "f6a9", "M301.1 34.8C312.6 40 320 51.4 320 64l0 384c0 12.6-7.4 24-18.9 29.2s-25 3.1-34.4-5.3L131.8 352 64 352c-35.3 0-64-28.7-64-64l0-64c0-35.3 28.7-64 64-64l67.8 0L266.7 40.1c9.4-8.4 22.9-10.4 34.4-5.3zM425 167l55 55 55-55c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9l-55 55 55 55c9.4 9.4 9.4 24.6 0 33.9s-24.6 9.4-33.9 0l-55-55-55 55c-9.4 9.4-24.6 9.4-33.9 0s-9.4-24.6 0-33.9l55-55-55-55c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0z"]
}, al = sl, ol = {
  prefix: "fas",
  iconName: "chevron-right",
  icon: [320, 512, [9002], "f054", "M310.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L242.7 256 73.4 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z"]
}, ll = {
  prefix: "fas",
  iconName: "spinner",
  icon: [512, 512, [], "f110", "M304 48a48 48 0 1 0 -96 0 48 48 0 1 0 96 0zm0 416a48 48 0 1 0 -96 0 48 48 0 1 0 96 0zM48 304a48 48 0 1 0 0-96 48 48 0 1 0 0 96zm464-48a48 48 0 1 0 -96 0 48 48 0 1 0 96 0zM142.9 437A48 48 0 1 0 75 369.1 48 48 0 1 0 142.9 437zm0-294.2A48 48 0 1 0 75 75a48 48 0 1 0 67.9 67.9zM369.1 437A48 48 0 1 0 437 369.1 48 48 0 1 0 369.1 437z"]
}, cl = {
  prefix: "fas",
  iconName: "paper-plane",
  icon: [512, 512, [61913], "f1d8", "M498.1 5.6c10.1 7 15.4 19.1 13.5 31.2l-64 416c-1.5 9.7-7.4 18.2-16 23s-18.9 5.4-28 1.6L284 427.7l-68.5 74.1c-8.9 9.7-22.9 12.9-35.2 8.1S160 493.2 160 480l0-83.6c0-4 1.5-7.8 4.2-10.8L331.8 202.8c5.8-6.3 5.6-16-.4-22s-15.7-6.4-22-.7L106 360.8 17.7 316.6C7.1 311.3 .3 300.7 0 288.9s5.9-22.8 16.1-28.7l448-256c10.7-6.1 23.9-5.5 34 1.4z"]
}, ul = '"./variables.module.css"', fl = "var(--ai-search-font-base, 'Bricolage Grotesque', sans-serif)", hl = "var(--ai-search-color-primary, #ff6600)", dl = "#ffffff", gl = "_glyphButton_w27et_4", ml = "_iconButton_w27et_12 _glyphButton_w27et_4", pl = "_linkButton_w27et_18 _glyphButton_w27et_4", _l = "_outlined_w27et_26 _glyphButton_w27et_4", vl = "_primaryButton_w27et_38", pe = {
  variables: ul,
  fontBase: fl,
  primary: hl,
  white: dl,
  glyphButton: gl,
  iconButton: ml,
  linkButton: pl,
  outlined: _l,
  primaryButton: vl
};
function bl(e) {
  Me(e, "svelte-1j52fuv", ".ai-search-query.svelte-1j52fuv.svelte-1j52fuv.svelte-1j52fuv{padding:0.6rem 0.9rem;background-color:var(--ai-search-query-background, #ffffff);border:1px solid #dcdcdd;border-radius:10px}.ai-search-query.svelte-1j52fuv.svelte-1j52fuv.svelte-1j52fuv:hover{cursor:pointer;border-color:#ff6600}.ai-search-query--active.svelte-1j52fuv.svelte-1j52fuv.svelte-1j52fuv:hover{cursor:default}.ai-search-query--active.svelte-1j52fuv>p.svelte-1j52fuv.svelte-1j52fuv{color:#ffffff}.ai-search-query.svelte-1j52fuv>p.svelte-1j52fuv.svelte-1j52fuv{font-weight:bold;margin-bottom:0;padding-right:1rem;text-align:left}.ai-search-query.svelte-1j52fuv>div.svelte-1j52fuv.svelte-1j52fuv{display:flex;justify-content:space-between}.ai-search-query.svelte-1j52fuv>div.svelte-1j52fuv>span.svelte-1j52fuv{font-size:0.8em;opacity:0.6}.ai-search-query--active.svelte-1j52fuv>div.svelte-1j52fuv>span.svelte-1j52fuv{color:#ffffff;opacity:0.9}");
}
function wl(e) {
  let t, r, i = (
    /*query*/
    e[0].content + ""
  ), n, s, a, o, l = (
    /*$_*/
    e[2]("results", {
      values: { count: (
        /*query*/
        e[0].resultsCount
      ) }
    }) + ""
  ), c, u, h, f, g, m, p;
  return h = new me({
    props: {
      icon: ol,
      color: (
        /*active*/
        e[1] ? "#ffffff" : "inherit"
      )
    }
  }), {
    c() {
      t = k("button"), r = k("p"), n = G(i), s = $(), a = k("div"), o = k("span"), c = G(l), u = $(), E(h.$$.fragment), d(r, "class", "svelte-1j52fuv"), d(o, "class", "svelte-1j52fuv"), d(a, "class", "svelte-1j52fuv"), d(t, "class", f = ie(`${Je.base} ai-search-query ${/*active*/
      e[1] ? pe.primaryButton : ""}`) + " svelte-1j52fuv"), T(t, "ai-search-query--active", !!/*active*/
      e[1]);
    },
    m(b, C) {
      O(b, t, C), v(t, r), v(r, n), v(t, s), v(t, a), v(a, o), v(o, c), v(a, u), U(h, a, null), g = !0, m || (p = [
        Z(
          t,
          "click",
          /*click_handler*/
          e[4]
        ),
        Z(
          t,
          "keydown",
          /*keydown_handler*/
          e[5]
        )
      ], m = !0);
    },
    p(b, [C]) {
      (!g || C & /*query*/
      1) && i !== (i = /*query*/
      b[0].content + "") && A(n, i), (!g || C & /*$_, query*/
      5) && l !== (l = /*$_*/
      b[2]("results", {
        values: { count: (
          /*query*/
          b[0].resultsCount
        ) }
      }) + "") && A(c, l);
      const H = {};
      C & /*active*/
      2 && (H.color = /*active*/
      b[1] ? "#ffffff" : "inherit"), h.$set(H), (!g || C & /*active*/
      2 && f !== (f = ie(`${Je.base} ai-search-query ${/*active*/
      b[1] ? pe.primaryButton : ""}`) + " svelte-1j52fuv")) && d(t, "class", f), (!g || C & /*active, active*/
      2) && T(t, "ai-search-query--active", !!/*active*/
      b[1]);
    },
    i(b) {
      g || (w(h.$$.fragment, b), g = !0);
    },
    o(b) {
      B(h.$$.fragment, b), g = !1;
    },
    d(b) {
      b && M(t), V(h), m = !1, Ce(p);
    }
  };
}
function kl(e, t, r) {
  let i;
  oe(e, Ye, (c) => r(2, i = c));
  let { query: n } = t, { active: s } = t;
  const a = Ke(), o = () => a("click"), l = (c) => c.key === "Enter" && a("click");
  return e.$$set = (c) => {
    "query" in c && r(0, n = c.query), "active" in c && r(1, s = c.active);
  }, [n, s, i, a, o, l];
}
class Jn extends K {
  constructor(t) {
    super(), X(this, t, kl, wl, J, { query: 0, active: 1 }, bl);
  }
  get query() {
    return this.$$.ctx[0];
  }
  set query(t) {
    this.$$set({ query: t }), P();
  }
  get active() {
    return this.$$.ctx[1];
  }
  set active(t) {
    this.$$set({ active: t }), P();
  }
}
Q(Jn, { query: {}, active: {} }, [], [], !0);
const yl = Jn, Bl = {
  prefix: "far",
  iconName: "comment",
  icon: [512, 512, [128489, 61669], "f075", "M123.6 391.3c12.9-9.4 29.6-11.8 44.6-6.4c26.5 9.6 56.2 15.1 87.8 15.1c124.7 0 208-80.5 208-160s-83.3-160-208-160S48 160.5 48 240c0 32 12.4 62.8 35.7 89.2c8.6 9.7 12.8 22.5 11.8 35.5c-1.4 18.1-5.7 34.7-11.3 49.4c17-7.9 31.1-16.7 39.4-22.7zM21.2 431.9c1.8-2.7 3.5-5.4 5.1-8.1c10-16.6 19.5-38.4 21.4-62.9C17.7 326.8 0 285.1 0 240C0 125.1 114.6 32 256 32s256 93.1 256 208s-114.6 208-256 208c-37.1 0-72.3-6.4-104.1-17.9c-11.9 8.7-31.3 20.6-54.3 30.6c-15.1 6.6-32.3 12.6-50.1 16.1c-.8 .2-1.6 .3-2.4 .5c-4.4 .8-8.7 1.5-13.2 1.9c-.2 0-.5 .1-.7 .1c-5.1 .5-10.2 .8-15.3 .8c-6.5 0-12.3-3.9-14.8-9.9c-2.5-6-1.1-12.8 3.4-17.4c4.1-4.2 7.8-8.7 11.3-13.5c1.7-2.3 3.3-4.6 4.8-6.9l.3-.5z"]
};
var Ht = /* @__PURE__ */ ((e) => (e.User = "user", e.Agent = "agent", e))(Ht || {});
const Pl = () => crypto.randomUUID ? crypto.randomUUID() : "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, (e) => (crypto.getRandomValues(new Uint8Array(1))[0] & 15 | (e === "x" ? 0 : 8)).toString(16)), nt = "BASE_URL", Vt = "LANGUAGE", Ci = () => ({
  session: null,
  messages: [],
  currentResultsSetKey: null,
  responses: {},
  status: "idle",
  error: null
}), Cl = async (e, t) => {
  const r = await fetch(e, t);
  if (r.headers.get("content-type") !== "application/json")
    throw new TypeError(`Server error: Invalid response content-type - expected application/json, got ${r.headers.get("content-type")}`);
  const i = await r.json();
  if (!r.ok)
    throw new Error(`Server error: ${i.error}`);
  return i;
}, wr = (e, t) => ({
  key: Pl(),
  role: e,
  content: t
}), Ml = () => {
  const e = mt({
    ...Ci(),
    [nt]: "",
    [Vt]: "en"
  }), t = (l) => {
    e.update((c) => ({ ...c, ...l(c) }));
  }, r = (l, c = null) => {
    t(() => ({ status: l, error: c }));
  }, i = (l) => {
    t((c) => ({ messages: [...c.messages, l] }));
  }, n = async (l, c, u) => {
    const { [nt]: h } = wt(e), f = `${h}${l}`;
    return await Cl(f, {
      method: c,
      headers: { "Content-Type": "application/json" },
      body: u ? JSON.stringify(u) : void 0
    });
  }, s = async ({ language: l }) => {
    const { [nt]: c } = wt(e);
    if (!c) throw new Error("apiBaseUrl is required");
    r("starting");
    try {
      const u = await n(`/search/start?l=${l}`, "GET"), { session: h, l: f, message: g } = u, m = wr(Ht.Agent, g);
      return t((p) => ({
        session: h,
        messages: [...p.messages, m],
        responses: { ...p.responses, [m.key]: u },
        status: "idle",
        [Vt]: f
      })), u;
    } catch (u) {
      r("error", u.message);
    }
  }, a = async () => {
    const { session: l } = wt(e);
    if (!l) throw new Error("Ending session error: session is required");
    r("ending");
    try {
      const c = await n(`/search/end/${l}`, "DELETE");
      return t(() => ({
        status: "idle"
      })), c;
    } catch (c) {
      r("error", c.message);
    }
  }, o = async (l) => {
    const { session: c } = wt(e);
    if (!c) throw new Error("Session is required");
    const u = wr(Ht.User, l);
    i(u), t(() => ({ currentResultsSetKey: null })), r("searching");
    try {
      const h = await n(`/search/message/${c}`, "POST", { message: l }), f = wr(Ht.Agent, h.message);
      return t((g) => ({
        messages: [...g.messages, f],
        responses: { ...g.responses, [u.key]: { ...h, query: l } },
        currentResultsSetKey: u.key,
        status: "idle"
      })), h;
    } catch (h) {
      r("error", h.message);
    }
  };
  return {
    subscribe: e.subscribe,
    set: e.set,
    update: e.update,
    setBaseUrl: (l) => t(() => ({ [nt]: l })),
    start: s,
    reset: async () => {
      await a();
      const { [nt]: l, [Vt]: c } = wt(e);
      return e.set({ ...Ci(), [nt]: l, [Vt]: c }), await s({ language: c });
    },
    search: o,
    selectResultsSet: (l) => t(() => ({ currentResultsSetKey: l }))
  };
}, Pe = Ml(), or = ze(Pe, (e) => e.messages.filter((i) => i.role === Ht.User).map((i) => {
  var n;
  return {
    ...i,
    resultsCount: ((n = e.responses[i.key]) == null ? void 0 : n.selection.length) ?? 0
  };
}));
function Hl(e) {
  Me(e, "svelte-9bpd08", ".wc-ai-search-queries.svelte-9bpd08.svelte-9bpd08{height:100%;overflow-y:auto}.wc-ai-search-queries.svelte-9bpd08>div.svelte-9bpd08{display:flex;flex-direction:column-reverse;gap:0.5rem}");
}
function Mi(e, t, r) {
  const i = e.slice();
  return i[9] = t[r], i;
}
function Hi(e) {
  let t, r, i = Ee(
    /*$userQueriesStore*/
    e[1]
  ), n = [];
  for (let a = 0; a < i.length; a += 1)
    n[a] = Oi(Mi(e, i, a));
  const s = (a) => B(n[a], 1, 1, () => {
    n[a] = null;
  });
  return {
    c() {
      t = k("div");
      for (let a = 0; a < n.length; a += 1)
        n[a].c();
      d(t, "class", "svelte-9bpd08");
    },
    m(a, o) {
      O(a, t, o);
      for (let l = 0; l < n.length; l += 1)
        n[l] && n[l].m(t, null);
      r = !0;
    },
    p(a, o) {
      if (o & /*$userQueriesStore, $searchStore, selectResultsSet*/
      26) {
        i = Ee(
          /*$userQueriesStore*/
          a[1]
        );
        let l;
        for (l = 0; l < i.length; l += 1) {
          const c = Mi(a, i, l);
          n[l] ? (n[l].p(c, o), w(n[l], 1)) : (n[l] = Oi(c), n[l].c(), w(n[l], 1), n[l].m(t, null));
        }
        for (ee(), l = i.length; l < n.length; l += 1)
          s(l);
        te();
      }
    },
    i(a) {
      if (!r) {
        for (let o = 0; o < i.length; o += 1)
          w(n[o]);
        r = !0;
      }
    },
    o(a) {
      n = n.filter(Boolean);
      for (let o = 0; o < n.length; o += 1)
        B(n[o]);
      r = !1;
    },
    d(a) {
      a && M(t), rr(n, a);
    }
  };
}
function Oi(e) {
  let t, r;
  function i() {
    return (
      /*click_handler*/
      e[5](
        /*query*/
        e[9]
      )
    );
  }
  return t = new yl({
    props: {
      query: (
        /*query*/
        e[9]
      ),
      active: (
        /*query*/
        e[9].key === /*$searchStore*/
        e[3].currentResultsSetKey
      )
    }
  }), t.$on("click", i), {
    c() {
      E(t.$$.fragment);
    },
    m(n, s) {
      U(t, n, s), r = !0;
    },
    p(n, s) {
      e = n;
      const a = {};
      s & /*$userQueriesStore*/
      2 && (a.query = /*query*/
      e[9]), s & /*$userQueriesStore, $searchStore*/
      10 && (a.active = /*query*/
      e[9].key === /*$searchStore*/
      e[3].currentResultsSetKey), t.$set(a);
    },
    i(n) {
      r || (w(t.$$.fragment, n), r = !0);
    },
    o(n) {
      B(t.$$.fragment, n), r = !1;
    },
    d(n) {
      V(t, n);
    }
  };
}
function Ol(e) {
  let t, r, i, n = (
    /*$userQueriesStore*/
    e[1] && Hi(e)
  );
  return {
    c() {
      t = k("div"), n && n.c(), d(t, "class", r = ie(`wc-ai-search-queries ${/*className*/
      e[0]}`) + " svelte-9bpd08");
    },
    m(s, a) {
      O(s, t, a), n && n.m(t, null), e[6](t), i = !0;
    },
    p(s, [a]) {
      /*$userQueriesStore*/
      s[1] ? n ? (n.p(s, a), a & /*$userQueriesStore*/
      2 && w(n, 1)) : (n = Hi(s), n.c(), w(n, 1), n.m(t, null)) : n && (ee(), B(n, 1, 1, () => {
        n = null;
      }), te()), (!i || a & /*className*/
      1 && r !== (r = ie(`wc-ai-search-queries ${/*className*/
      s[0]}`) + " svelte-9bpd08")) && d(t, "class", r);
    },
    i(s) {
      i || (w(n), i = !0);
    },
    o(s) {
      B(n), i = !1;
    },
    d(s) {
      s && M(t), n && n.d(), e[6](null);
    }
  };
}
function xl(e, t, r) {
  let i, n;
  oe(e, or, (f) => r(1, i = f)), oe(e, Pe, (f) => r(3, n = f));
  let { class: s = "" } = t, a;
  const o = Ke(), l = async () => {
    await Tr(), a == null || a.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, c = (f) => {
    Pe.selectResultsSet(f), o("querySelected");
  };
  Qe(() => {
    l();
  });
  const u = (f) => c(f.key);
  function h(f) {
    ke[f ? "unshift" : "push"](() => {
      a = f, r(2, a);
    });
  }
  return e.$$set = (f) => {
    "class" in f && r(0, s = f.class);
  }, e.$$.update = () => {
    e.$$.dirty & /*$userQueriesStore*/
    2 && l();
  }, [
    s,
    i,
    a,
    n,
    c,
    u,
    h
  ];
}
class Xn extends K {
  constructor(t) {
    super(), X(this, t, xl, Ol, J, { class: 0 }, Hl);
  }
  get class() {
    return this.$$.ctx[0];
  }
  set class(t) {
    this.$$set({ class: t }), P();
  }
}
customElements.define("stg-ai-search-queries", Q(Xn, { class: {} }, [], [], !1));
const Nl = Xn;
function Ll(e, ...t) {
  return e.addEventListener(...t), () => e.removeEventListener(...t);
}
function Qn(e) {
  let t = "";
  if (typeof e == "string" || typeof e == "number")
    t += e;
  else if (typeof e == "object")
    if (Array.isArray(e))
      t = e.map(Qn).filter(Boolean).join(" ");
    else
      for (let r in e)
        e[r] && (t && (t += " "), t += r);
  return t;
}
const ht = (...e) => e.map(Qn).filter(Boolean).join(" ");
function Xr(e) {
  if (!e) return 0;
  let { transitionDuration: t, transitionDelay: r } = window.getComputedStyle(e);
  const i = Number.parseFloat(t), n = Number.parseFloat(r);
  return !i && !n ? 0 : (t = t.split(",")[0], r = r.split(",")[0], (Number.parseFloat(t) + Number.parseFloat(r)) * 1e3);
}
function Il(e) {
  return e.style.display = "block", {
    duration: Xr(e),
    tick: (r) => {
      r === 0 && e.classList.add("show");
    }
  };
}
function Sl(e) {
  return e.classList.remove("show"), {
    duration: Xr(e),
    tick: (r) => {
      r === 0 && (e.style.display = "none");
    }
  };
}
function xi(e, { delay: t = 0, duration: r = 400, easing: i = tr } = {}) {
  const n = +getComputedStyle(e).opacity;
  return {
    delay: t,
    duration: r,
    easing: i,
    css: (s) => `opacity: ${s * n}`
  };
}
const Rl = (e) => ({}), Ni = (e) => ({});
function Li(e) {
  let t, r, i, n, s, a, o, l = (
    /*heading*/
    (e[3] || /*$$slots*/
    e[11].heading) && Ii(e)
  ), c = (
    /*showClose*/
    e[6] && Si(e)
  );
  const u = [Dl, $l], h = [];
  function f(p, b) {
    return (
      /*children*/
      p[1] ? 0 : 1
    );
  }
  n = f(e), s = h[n] = u[n](e);
  let g = [
    /*$$restProps*/
    e[10],
    { "data-bs-theme": (
      /*theme*/
      e[4]
    ) },
    { class: (
      /*classes*/
      e[8]
    ) },
    { role: "alert" }
  ], m = {};
  for (let p = 0; p < g.length; p += 1)
    m = ne(m, g[p]);
  return {
    c() {
      t = k("div"), l && l.c(), r = $(), c && c.c(), i = $(), s.c(), Be(t, m);
    },
    m(p, b) {
      O(p, t, b), l && l.m(t, null), v(t, r), c && c.m(t, null), v(t, i), h[n].m(t, null), o = !0;
    },
    p(p, b) {
      e = p, /*heading*/
      e[3] || /*$$slots*/
      e[11].heading ? l ? (l.p(e, b), b & /*heading, $$slots*/
      2056 && w(l, 1)) : (l = Ii(e), l.c(), w(l, 1), l.m(t, r)) : l && (ee(), B(l, 1, 1, () => {
        l = null;
      }), te()), /*showClose*/
      e[6] ? c ? c.p(e, b) : (c = Si(e), c.c(), c.m(t, i)) : c && (c.d(1), c = null);
      let C = n;
      n = f(e), n === C ? h[n].p(e, b) : (ee(), B(h[C], 1, 1, () => {
        h[C] = null;
      }), te(), s = h[n], s ? s.p(e, b) : (s = h[n] = u[n](e), s.c()), w(s, 1), s.m(t, null)), Be(t, m = gt(g, [
        b & /*$$restProps*/
        1024 && /*$$restProps*/
        e[10],
        (!o || b & /*theme*/
        16) && { "data-bs-theme": (
          /*theme*/
          e[4]
        ) },
        (!o || b & /*classes*/
        256) && { class: (
          /*classes*/
          e[8]
        ) },
        { role: "alert" }
      ]));
    },
    i(p) {
      o || (w(l), w(s), p && Ve(() => {
        o && (a || (a = ci(
          t,
          xi,
          /*transition*/
          e[5],
          !0
        )), a.run(1));
      }), o = !0);
    },
    o(p) {
      B(l), B(s), p && (a || (a = ci(
        t,
        xi,
        /*transition*/
        e[5],
        !1
      )), a.run(0)), o = !1;
    },
    d(p) {
      p && M(t), l && l.d(), c && c.d(), h[n].d(), p && a && a.end();
    }
  };
}
function Ii(e) {
  let t, r, i;
  const n = (
    /*#slots*/
    e[19].heading
  ), s = Ie(
    n,
    e,
    /*$$scope*/
    e[18],
    Ni
  );
  return {
    c() {
      t = k("h4"), r = G(
        /*heading*/
        e[3]
      ), s && s.c(), d(t, "class", "alert-heading");
    },
    m(a, o) {
      O(a, t, o), v(t, r), s && s.m(t, null), i = !0;
    },
    p(a, o) {
      (!i || o & /*heading*/
      8) && A(
        r,
        /*heading*/
        a[3]
      ), s && s.p && (!i || o & /*$$scope*/
      262144) && Re(
        s,
        n,
        a,
        /*$$scope*/
        a[18],
        i ? Se(
          n,
          /*$$scope*/
          a[18],
          o,
          Rl
        ) : $e(
          /*$$scope*/
          a[18]
        ),
        Ni
      );
    },
    i(a) {
      i || (w(s, a), i = !0);
    },
    o(a) {
      B(s, a), i = !1;
    },
    d(a) {
      a && M(t), s && s.d(a);
    }
  };
}
function Si(e) {
  let t, r, i;
  return {
    c() {
      t = k("button"), d(t, "type", "button"), d(
        t,
        "class",
        /*closeClassNames*/
        e[7]
      ), d(
        t,
        "aria-label",
        /*closeAriaLabel*/
        e[2]
      );
    },
    m(n, s) {
      O(n, t, s), r || (i = Z(t, "click", function() {
        Le(
          /*handleToggle*/
          e[9]
        ) && e[9].apply(this, arguments);
      }), r = !0);
    },
    p(n, s) {
      e = n, s & /*closeClassNames*/
      128 && d(
        t,
        "class",
        /*closeClassNames*/
        e[7]
      ), s & /*closeAriaLabel*/
      4 && d(
        t,
        "aria-label",
        /*closeAriaLabel*/
        e[2]
      );
    },
    d(n) {
      n && M(t), r = !1, i();
    }
  };
}
function $l(e) {
  let t;
  const r = (
    /*#slots*/
    e[19].default
  ), i = Ie(
    r,
    e,
    /*$$scope*/
    e[18],
    null
  );
  return {
    c() {
      i && i.c();
    },
    m(n, s) {
      i && i.m(n, s), t = !0;
    },
    p(n, s) {
      i && i.p && (!t || s & /*$$scope*/
      262144) && Re(
        i,
        r,
        n,
        /*$$scope*/
        n[18],
        t ? Se(
          r,
          /*$$scope*/
          n[18],
          s,
          null
        ) : $e(
          /*$$scope*/
          n[18]
        ),
        null
      );
    },
    i(n) {
      t || (w(i, n), t = !0);
    },
    o(n) {
      B(i, n), t = !1;
    },
    d(n) {
      i && i.d(n);
    }
  };
}
function Dl(e) {
  let t;
  return {
    c() {
      t = G(
        /*children*/
        e[1]
      );
    },
    m(r, i) {
      O(r, t, i);
    },
    p(r, i) {
      i & /*children*/
      2 && A(
        t,
        /*children*/
        r[1]
      );
    },
    i: q,
    o: q,
    d(r) {
      r && M(t);
    }
  };
}
function Fl(e) {
  let t, r, i = (
    /*isOpen*/
    e[0] && Li(e)
  );
  return {
    c() {
      i && i.c(), t = ve();
    },
    m(n, s) {
      i && i.m(n, s), O(n, t, s), r = !0;
    },
    p(n, [s]) {
      /*isOpen*/
      n[0] ? i ? (i.p(n, s), s & /*isOpen*/
      1 && w(i, 1)) : (i = Li(n), i.c(), w(i, 1), i.m(t.parentNode, t)) : i && (ee(), B(i, 1, 1, () => {
        i = null;
      }), te());
    },
    i(n) {
      r || (w(i), r = !0);
    },
    o(n) {
      B(i), r = !1;
    },
    d(n) {
      n && M(t), i && i.d(n);
    }
  };
}
function jl(e, t, r) {
  let i, n, s, a;
  const o = [
    "class",
    "children",
    "closeAriaLabel",
    "closeClassName",
    "color",
    "dismissible",
    "fade",
    "heading",
    "isOpen",
    "toggle",
    "theme",
    "transition"
  ];
  let l = ye(t, o), { $$slots: c = {}, $$scope: u } = t;
  const h = pn(c);
  let { class: f = "" } = t, { children: g = void 0 } = t, { closeAriaLabel: m = "Close" } = t, { closeClassName: p = "" } = t, { color: b = "success" } = t, { dismissible: C = !1 } = t, { fade: H = !0 } = t, { heading: _ = "" } = t, { isOpen: L = !0 } = t, { toggle: x = void 0 } = t, { theme: D = void 0 } = t, { transition: R = { duration: H ? 400 : 0 } } = t;
  return e.$$set = (y) => {
    t = ne(ne({}, t), dt(y)), r(10, l = ye(t, o)), "class" in y && r(12, f = y.class), "children" in y && r(1, g = y.children), "closeAriaLabel" in y && r(2, m = y.closeAriaLabel), "closeClassName" in y && r(13, p = y.closeClassName), "color" in y && r(14, b = y.color), "dismissible" in y && r(15, C = y.dismissible), "fade" in y && r(16, H = y.fade), "heading" in y && r(3, _ = y.heading), "isOpen" in y && r(0, L = y.isOpen), "toggle" in y && r(17, x = y.toggle), "theme" in y && r(4, D = y.theme), "transition" in y && r(5, R = y.transition), "$$scope" in y && r(18, u = y.$$scope);
  }, e.$$.update = () => {
    e.$$.dirty & /*dismissible, toggle*/
    163840 && r(6, i = C || x), e.$$.dirty & /*toggle*/
    131072 && r(9, n = x || (() => r(0, L = !1))), e.$$.dirty & /*className, color, showClose*/
    20544 && r(8, s = ht(f, "alert", `alert-${b}`, { "alert-dismissible": i })), e.$$.dirty & /*closeClassName*/
    8192 && r(7, a = ht("btn-close", p));
  }, [
    L,
    g,
    m,
    _,
    D,
    R,
    i,
    a,
    s,
    n,
    l,
    h,
    f,
    p,
    b,
    C,
    H,
    x,
    u,
    c
  ];
}
class Kn extends K {
  constructor(t) {
    super(), X(this, t, jl, Fl, J, {
      class: 12,
      children: 1,
      closeAriaLabel: 2,
      closeClassName: 13,
      color: 14,
      dismissible: 15,
      fade: 16,
      heading: 3,
      isOpen: 0,
      toggle: 17,
      theme: 4,
      transition: 5
    });
  }
  get class() {
    return this.$$.ctx[12];
  }
  set class(t) {
    this.$$set({ class: t }), P();
  }
  get children() {
    return this.$$.ctx[1];
  }
  set children(t) {
    this.$$set({ children: t }), P();
  }
  get closeAriaLabel() {
    return this.$$.ctx[2];
  }
  set closeAriaLabel(t) {
    this.$$set({ closeAriaLabel: t }), P();
  }
  get closeClassName() {
    return this.$$.ctx[13];
  }
  set closeClassName(t) {
    this.$$set({ closeClassName: t }), P();
  }
  get color() {
    return this.$$.ctx[14];
  }
  set color(t) {
    this.$$set({ color: t }), P();
  }
  get dismissible() {
    return this.$$.ctx[15];
  }
  set dismissible(t) {
    this.$$set({ dismissible: t }), P();
  }
  get fade() {
    return this.$$.ctx[16];
  }
  set fade(t) {
    this.$$set({ fade: t }), P();
  }
  get heading() {
    return this.$$.ctx[3];
  }
  set heading(t) {
    this.$$set({ heading: t }), P();
  }
  get isOpen() {
    return this.$$.ctx[0];
  }
  set isOpen(t) {
    this.$$set({ isOpen: t }), P();
  }
  get toggle() {
    return this.$$.ctx[17];
  }
  set toggle(t) {
    this.$$set({ toggle: t }), P();
  }
  get theme() {
    return this.$$.ctx[4];
  }
  set theme(t) {
    this.$$set({ theme: t }), P();
  }
  get transition() {
    return this.$$.ctx[5];
  }
  set transition(t) {
    this.$$set({ transition: t }), P();
  }
}
Q(Kn, { class: {}, children: {}, closeAriaLabel: {}, closeClassName: {}, color: {}, dismissible: { type: "Boolean" }, fade: { type: "Boolean" }, heading: {}, isOpen: { type: "Boolean" }, toggle: {}, theme: {}, transition: {} }, ["heading", "default"], [], !0);
function zl(e) {
  let t, r;
  const i = (
    /*#slots*/
    e[1].default
  ), n = Ie(
    i,
    e,
    /*$$scope*/
    e[0],
    null
  );
  return {
    c() {
      t = k("div"), n && n.c();
    },
    m(s, a) {
      O(s, t, a), n && n.m(t, null), r = !0;
    },
    p(s, [a]) {
      n && n.p && (!r || a & /*$$scope*/
      1) && Re(
        n,
        i,
        s,
        /*$$scope*/
        s[0],
        r ? Se(
          i,
          /*$$scope*/
          s[0],
          a,
          null
        ) : $e(
          /*$$scope*/
          s[0]
        ),
        null
      );
    },
    i(s) {
      r || (w(n, s), r = !0);
    },
    o(s) {
      B(n, s), r = !1;
    },
    d(s) {
      s && M(t), n && n.d(s);
    }
  };
}
function Tl(e, t, r) {
  let { $$slots: i = {}, $$scope: n } = t;
  return e.$$set = (s) => {
    "$$scope" in s && r(0, n = s.$$scope);
  }, [n, i];
}
class Yn extends K {
  constructor(t) {
    super(), X(this, t, Tl, zl, J, {});
  }
}
Q(Yn, {}, ["default"], [], !0);
function Ul(e) {
  let t, r;
  const i = (
    /*#slots*/
    e[3].default
  ), n = Ie(
    i,
    e,
    /*$$scope*/
    e[2],
    null
  );
  let s = [
    /*$$restProps*/
    e[1]
  ], a = {};
  for (let o = 0; o < s.length; o += 1)
    a = ne(a, s[o]);
  return {
    c() {
      t = k("div"), n && n.c(), Be(t, a);
    },
    m(o, l) {
      O(o, t, l), n && n.m(t, null), e[4](t), r = !0;
    },
    p(o, [l]) {
      n && n.p && (!r || l & /*$$scope*/
      4) && Re(
        n,
        i,
        o,
        /*$$scope*/
        o[2],
        r ? Se(
          i,
          /*$$scope*/
          o[2],
          l,
          null
        ) : $e(
          /*$$scope*/
          o[2]
        ),
        null
      ), Be(t, a = gt(s, [l & /*$$restProps*/
      2 && /*$$restProps*/
      o[1]]));
    },
    i(o) {
      r || (w(n, o), r = !0);
    },
    o(o) {
      B(n, o), r = !1;
    },
    d(o) {
      o && M(t), n && n.d(o), e[4](null);
    }
  };
}
function Vl(e, t, r) {
  const i = [];
  let n = ye(t, i), { $$slots: s = {}, $$scope: a } = t, o, l;
  Qe(() => {
    l = document.createElement("div"), document.body.appendChild(l), l.appendChild(o);
  }), Fs(() => {
    l && document.body.removeChild(l);
  });
  function c(u) {
    ke[u ? "unshift" : "push"](() => {
      o = u, r(0, o);
    });
  }
  return e.$$set = (u) => {
    t = ne(ne({}, t), dt(u)), r(1, n = ye(t, i)), "$$scope" in u && r(2, a = u.$$scope);
  }, [o, n, a, s, c];
}
class Zn extends K {
  constructor(t) {
    super(), X(this, t, Vl, Ul, J, {});
  }
}
Q(Zn, {}, ["default"], [], !0);
function Ri(e) {
  let t, r, i, n, s, a, o = [
    { role: "presentation" },
    /*$$restProps*/
    e[3],
    { class: (
      /*classes*/
      e[2]
    ) }
  ], l = {};
  for (let c = 0; c < o.length; c += 1)
    l = ne(l, o[c]);
  return {
    c() {
      t = k("div"), Be(t, l), T(
        t,
        "fade",
        /*fade*/
        e[1]
      );
    },
    m(c, u) {
      O(c, t, u), n = !0, s || (a = Z(
        t,
        "click",
        /*click_handler*/
        e[5]
      ), s = !0);
    },
    p(c, u) {
      Be(t, l = gt(o, [
        { role: "presentation" },
        u & /*$$restProps*/
        8 && /*$$restProps*/
        c[3],
        (!n || u & /*classes*/
        4) && { class: (
          /*classes*/
          c[2]
        ) }
      ])), T(
        t,
        "fade",
        /*fade*/
        c[1]
      );
    },
    i(c) {
      n || (c && Ve(() => {
        n && (i && i.end(1), r = Us(t, Il, {}), r.start());
      }), n = !0);
    },
    o(c) {
      r && r.invalidate(), c && (i = Vs(t, Sl, {})), n = !1;
    },
    d(c) {
      c && M(t), c && i && i.end(), s = !1, a();
    }
  };
}
function El(e) {
  let t, r = (
    /*isOpen*/
    e[0] && Ri(e)
  );
  return {
    c() {
      r && r.c(), t = ve();
    },
    m(i, n) {
      r && r.m(i, n), O(i, t, n);
    },
    p(i, [n]) {
      /*isOpen*/
      i[0] ? r ? (r.p(i, n), n & /*isOpen*/
      1 && w(r, 1)) : (r = Ri(i), r.c(), w(r, 1), r.m(t.parentNode, t)) : r && (ee(), B(r, 1, 1, () => {
        r = null;
      }), te());
    },
    i(i) {
      w(r);
    },
    o(i) {
      B(r);
    },
    d(i) {
      i && M(t), r && r.d(i);
    }
  };
}
function ql(e, t, r) {
  let i;
  const n = ["class", "isOpen", "fade"];
  let s = ye(t, n), { class: a = "" } = t, { isOpen: o = !1 } = t, { fade: l = !0 } = t;
  function c(u) {
    js.call(this, e, u);
  }
  return e.$$set = (u) => {
    t = ne(ne({}, t), dt(u)), r(3, s = ye(t, n)), "class" in u && r(4, a = u.class), "isOpen" in u && r(0, o = u.isOpen), "fade" in u && r(1, l = u.fade);
  }, e.$$.update = () => {
    e.$$.dirty & /*className*/
    16 && r(2, i = ht(a, "offcanvas-backdrop"));
  }, [o, l, i, s, a, c];
}
class es extends K {
  constructor(t) {
    super(), X(this, t, ql, El, J, { class: 4, isOpen: 0, fade: 1 });
  }
  get class() {
    return this.$$.ctx[4];
  }
  set class(t) {
    this.$$set({ class: t }), P();
  }
  get isOpen() {
    return this.$$.ctx[0];
  }
  set isOpen(t) {
    this.$$set({ isOpen: t }), P();
  }
  get fade() {
    return this.$$.ctx[1];
  }
  set fade(t) {
    this.$$set({ fade: t }), P();
  }
}
Q(es, { class: {}, isOpen: { type: "Boolean" }, fade: { type: "Boolean" } }, [], [], !0);
function Gl(e) {
  let t, r;
  const i = (
    /*#slots*/
    e[4].default
  ), n = Ie(
    i,
    e,
    /*$$scope*/
    e[3],
    null
  );
  let s = [
    /*$$restProps*/
    e[1],
    { class: (
      /*classes*/
      e[0]
    ) }
  ], a = {};
  for (let o = 0; o < s.length; o += 1)
    a = ne(a, s[o]);
  return {
    c() {
      t = k("div"), n && n.c(), Be(t, a);
    },
    m(o, l) {
      O(o, t, l), n && n.m(t, null), r = !0;
    },
    p(o, [l]) {
      n && n.p && (!r || l & /*$$scope*/
      8) && Re(
        n,
        i,
        o,
        /*$$scope*/
        o[3],
        r ? Se(
          i,
          /*$$scope*/
          o[3],
          l,
          null
        ) : $e(
          /*$$scope*/
          o[3]
        ),
        null
      ), Be(t, a = gt(s, [
        l & /*$$restProps*/
        2 && /*$$restProps*/
        o[1],
        (!r || l & /*classes*/
        1) && { class: (
          /*classes*/
          o[0]
        ) }
      ]));
    },
    i(o) {
      r || (w(n, o), r = !0);
    },
    o(o) {
      B(n, o), r = !1;
    },
    d(o) {
      o && M(t), n && n.d(o);
    }
  };
}
function Wl(e, t, r) {
  let i;
  const n = ["class"];
  let s = ye(t, n), { $$slots: a = {}, $$scope: o } = t, { class: l = "" } = t;
  return e.$$set = (c) => {
    t = ne(ne({}, t), dt(c)), r(1, s = ye(t, n)), "class" in c && r(2, l = c.class), "$$scope" in c && r(3, o = c.$$scope);
  }, e.$$.update = () => {
    e.$$.dirty & /*className*/
    4 && r(0, i = ht(l, "offcanvas-body"));
  }, [i, s, l, o, a];
}
class ts extends K {
  constructor(t) {
    super(), X(this, t, Wl, Gl, J, { class: 2 });
  }
  get class() {
    return this.$$.ctx[2];
  }
  set class(t) {
    this.$$set({ class: t }), P();
  }
}
Q(ts, { class: {} }, ["default"], [], !0);
const Al = (e) => ({}), $i = (e) => ({});
function Jl(e) {
  let t;
  const r = (
    /*#slots*/
    e[7].default
  ), i = Ie(
    r,
    e,
    /*$$scope*/
    e[6],
    null
  );
  return {
    c() {
      i && i.c();
    },
    m(n, s) {
      i && i.m(n, s), t = !0;
    },
    p(n, s) {
      i && i.p && (!t || s & /*$$scope*/
      64) && Re(
        i,
        r,
        n,
        /*$$scope*/
        n[6],
        t ? Se(
          r,
          /*$$scope*/
          n[6],
          s,
          null
        ) : $e(
          /*$$scope*/
          n[6]
        ),
        null
      );
    },
    i(n) {
      t || (w(i, n), t = !0);
    },
    o(n) {
      B(i, n), t = !1;
    },
    d(n) {
      i && i.d(n);
    }
  };
}
function Xl(e) {
  let t;
  return {
    c() {
      t = G(
        /*children*/
        e[0]
      );
    },
    m(r, i) {
      O(r, t, i);
    },
    p(r, i) {
      i & /*children*/
      1 && A(
        t,
        /*children*/
        r[0]
      );
    },
    i: q,
    o: q,
    d(r) {
      r && M(t);
    }
  };
}
function Di(e) {
  let t, r, i;
  return {
    c() {
      t = k("button"), d(
        t,
        "aria-label",
        /*closeAriaLabel*/
        e[1]
      ), d(t, "class", "btn-close"), d(t, "type", "button");
    },
    m(n, s) {
      O(n, t, s), r || (i = Z(t, "click", function() {
        Le(
          /*toggle*/
          e[2]
        ) && e[2].apply(this, arguments);
      }), r = !0);
    },
    p(n, s) {
      e = n, s & /*closeAriaLabel*/
      2 && d(
        t,
        "aria-label",
        /*closeAriaLabel*/
        e[1]
      );
    },
    d(n) {
      n && M(t), r = !1, i();
    }
  };
}
function Ql(e) {
  let t, r = typeof /*toggle*/
  e[2] == "function" && Di(e);
  return {
    c() {
      r && r.c(), t = ve();
    },
    m(i, n) {
      r && r.m(i, n), O(i, t, n);
    },
    p(i, n) {
      typeof /*toggle*/
      i[2] == "function" ? r ? r.p(i, n) : (r = Di(i), r.c(), r.m(t.parentNode, t)) : r && (r.d(1), r = null);
    },
    d(i) {
      i && M(t), r && r.d(i);
    }
  };
}
function Kl(e) {
  let t, r, i, n, s, a;
  const o = [Xl, Jl], l = [];
  function c(p, b) {
    return (
      /*children*/
      p[0] ? 0 : 1
    );
  }
  i = c(e), n = l[i] = o[i](e);
  const u = (
    /*#slots*/
    e[7].close
  ), h = Ie(
    u,
    e,
    /*$$scope*/
    e[6],
    $i
  ), f = h || Ql(e);
  let g = [
    /*$$restProps*/
    e[4],
    { class: (
      /*classes*/
      e[3]
    ) }
  ], m = {};
  for (let p = 0; p < g.length; p += 1)
    m = ne(m, g[p]);
  return {
    c() {
      t = k("div"), r = k("h5"), n.c(), s = $(), f && f.c(), d(r, "class", "offcanvas-title"), Be(t, m);
    },
    m(p, b) {
      O(p, t, b), v(t, r), l[i].m(r, null), v(t, s), f && f.m(t, null), a = !0;
    },
    p(p, [b]) {
      let C = i;
      i = c(p), i === C ? l[i].p(p, b) : (ee(), B(l[C], 1, 1, () => {
        l[C] = null;
      }), te(), n = l[i], n ? n.p(p, b) : (n = l[i] = o[i](p), n.c()), w(n, 1), n.m(r, null)), h ? h.p && (!a || b & /*$$scope*/
      64) && Re(
        h,
        u,
        p,
        /*$$scope*/
        p[6],
        a ? Se(
          u,
          /*$$scope*/
          p[6],
          b,
          Al
        ) : $e(
          /*$$scope*/
          p[6]
        ),
        $i
      ) : f && f.p && (!a || b & /*closeAriaLabel, toggle*/
      6) && f.p(p, a ? b : -1), Be(t, m = gt(g, [
        b & /*$$restProps*/
        16 && /*$$restProps*/
        p[4],
        (!a || b & /*classes*/
        8) && { class: (
          /*classes*/
          p[3]
        ) }
      ]));
    },
    i(p) {
      a || (w(n), w(f, p), a = !0);
    },
    o(p) {
      B(n), B(f, p), a = !1;
    },
    d(p) {
      p && M(t), l[i].d(), f && f.d(p);
    }
  };
}
function Yl(e, t, r) {
  let i;
  const n = ["class", "children", "closeAriaLabel", "toggle"];
  let s = ye(t, n), { $$slots: a = {}, $$scope: o } = t, { class: l = "" } = t, { children: c = void 0 } = t, { closeAriaLabel: u = "Close" } = t, { toggle: h = void 0 } = t;
  return e.$$set = (f) => {
    t = ne(ne({}, t), dt(f)), r(4, s = ye(t, n)), "class" in f && r(5, l = f.class), "children" in f && r(0, c = f.children), "closeAriaLabel" in f && r(1, u = f.closeAriaLabel), "toggle" in f && r(2, h = f.toggle), "$$scope" in f && r(6, o = f.$$scope);
  }, e.$$.update = () => {
    e.$$.dirty & /*className*/
    32 && r(3, i = ht(l, "offcanvas-header"));
  }, [
    c,
    u,
    h,
    i,
    s,
    l,
    o,
    a
  ];
}
class rs extends K {
  constructor(t) {
    super(), X(this, t, Yl, Kl, J, {
      class: 5,
      children: 0,
      closeAriaLabel: 1,
      toggle: 2
    });
  }
  get class() {
    return this.$$.ctx[5];
  }
  set class(t) {
    this.$$set({ class: t }), P();
  }
  get children() {
    return this.$$.ctx[0];
  }
  set children(t) {
    this.$$set({ children: t }), P();
  }
  get closeAriaLabel() {
    return this.$$.ctx[1];
  }
  set closeAriaLabel(t) {
    this.$$set({ closeAriaLabel: t }), P();
  }
  get toggle() {
    return this.$$.ctx[2];
  }
  set toggle(t) {
    this.$$set({ toggle: t }), P();
  }
}
Q(rs, { class: {}, children: {}, closeAriaLabel: {}, toggle: {} }, ["default", "close"], [], !0);
const { document: Zl } = bn;
function ec(e) {
  Me(e, "svelte-xe7n9u", ".overflow-noscroll{overflow:hidden;padding-right:0px}");
}
const tc = (e) => ({}), Fi = (e) => ({});
function ji(e) {
  let t, r;
  return t = new rs({
    props: {
      toggle: (
        /*toggle*/
        e[7]
      ),
      $$slots: { default: [rc] },
      $$scope: { ctx: e }
    }
  }), {
    c() {
      E(t.$$.fragment);
    },
    m(i, n) {
      U(t, i, n), r = !0;
    },
    p(i, n) {
      const s = {};
      n & /*toggle*/
      128 && (s.toggle = /*toggle*/
      i[7]), n & /*$$scope, header*/
      536870928 && (s.$$scope = { dirty: n, ctx: i }), t.$set(s);
    },
    i(i) {
      r || (w(t.$$.fragment, i), r = !0);
    },
    o(i) {
      B(t.$$.fragment, i), r = !1;
    },
    d(i) {
      V(t, i);
    }
  };
}
function zi(e) {
  let t;
  return {
    c() {
      t = G(
        /*header*/
        e[4]
      );
    },
    m(r, i) {
      O(r, t, i);
    },
    p(r, i) {
      i & /*header*/
      16 && A(
        t,
        /*header*/
        r[4]
      );
    },
    d(r) {
      r && M(t);
    }
  };
}
function rc(e) {
  let t, r, i = (
    /*header*/
    e[4] && zi(e)
  );
  const n = (
    /*#slots*/
    e[27].header
  ), s = Ie(
    n,
    e,
    /*$$scope*/
    e[29],
    Fi
  );
  return {
    c() {
      i && i.c(), t = $(), s && s.c();
    },
    m(a, o) {
      i && i.m(a, o), O(a, t, o), s && s.m(a, o), r = !0;
    },
    p(a, o) {
      /*header*/
      a[4] ? i ? i.p(a, o) : (i = zi(a), i.c(), i.m(t.parentNode, t)) : i && (i.d(1), i = null), s && s.p && (!r || o & /*$$scope*/
      536870912) && Re(
        s,
        n,
        a,
        /*$$scope*/
        a[29],
        r ? Se(
          n,
          /*$$scope*/
          a[29],
          o,
          tc
        ) : $e(
          /*$$scope*/
          a[29]
        ),
        Fi
      );
    },
    i(a) {
      r || (w(s, a), r = !0);
    },
    o(a) {
      B(s, a), r = !1;
    },
    d(a) {
      a && M(t), i && i.d(a), s && s.d(a);
    }
  };
}
function ic(e) {
  let t;
  const r = (
    /*#slots*/
    e[27].default
  ), i = Ie(
    r,
    e,
    /*$$scope*/
    e[29],
    null
  );
  return {
    c() {
      i && i.c();
    },
    m(n, s) {
      i && i.m(n, s), t = !0;
    },
    p(n, s) {
      i && i.p && (!t || s & /*$$scope*/
      536870912) && Re(
        i,
        r,
        n,
        /*$$scope*/
        n[29],
        t ? Se(
          r,
          /*$$scope*/
          n[29],
          s,
          null
        ) : $e(
          /*$$scope*/
          n[29]
        ),
        null
      );
    },
    i(n) {
      t || (w(i, n), t = !0);
    },
    o(n) {
      B(i, n), t = !1;
    },
    d(n) {
      i && i.d(n);
    }
  };
}
function nc(e) {
  let t, r;
  return t = new ts({
    props: {
      $$slots: { default: [sc] },
      $$scope: { ctx: e }
    }
  }), {
    c() {
      E(t.$$.fragment);
    },
    m(i, n) {
      U(t, i, n), r = !0;
    },
    p(i, n) {
      const s = {};
      n & /*$$scope*/
      536870912 && (s.$$scope = { dirty: n, ctx: i }), t.$set(s);
    },
    i(i) {
      r || (w(t.$$.fragment, i), r = !0);
    },
    o(i) {
      B(t.$$.fragment, i), r = !1;
    },
    d(i) {
      V(t, i);
    }
  };
}
function sc(e) {
  let t;
  const r = (
    /*#slots*/
    e[27].default
  ), i = Ie(
    r,
    e,
    /*$$scope*/
    e[29],
    null
  );
  return {
    c() {
      i && i.c();
    },
    m(n, s) {
      i && i.m(n, s), t = !0;
    },
    p(n, s) {
      i && i.p && (!t || s & /*$$scope*/
      536870912) && Re(
        i,
        r,
        n,
        /*$$scope*/
        n[29],
        t ? Se(
          r,
          /*$$scope*/
          n[29],
          s,
          null
        ) : $e(
          /*$$scope*/
          n[29]
        ),
        null
      );
    },
    i(n) {
      t || (w(i, n), t = !0);
    },
    o(n) {
      B(i, n), t = !1;
    },
    d(n) {
      i && i.d(n);
    }
  };
}
function Ti(e) {
  let t, r;
  return t = new es({
    props: {
      fade: (
        /*fade*/
        e[3]
      ),
      isOpen: (
        /*isOpen*/
        e[0]
      )
    }
  }), t.$on("click", function() {
    Le(
      /*toggle*/
      e[7] || void 0
    ) && /*toggle*/
    (e[7] || void 0).apply(this, arguments);
  }), {
    c() {
      E(t.$$.fragment);
    },
    m(i, n) {
      U(t, i, n), r = !0;
    },
    p(i, n) {
      e = i;
      const s = {};
      n & /*fade*/
      8 && (s.fade = /*fade*/
      e[3]), n & /*isOpen*/
      1 && (s.isOpen = /*isOpen*/
      e[0]), t.$set(s);
    },
    i(i) {
      r || (w(t.$$.fragment, i), r = !0);
    },
    o(i) {
      B(t.$$.fragment, i), r = !1;
    },
    d(i) {
      V(t, i);
    }
  };
}
function ac(e) {
  let t, r, i, n, s, a, o, l, c, u, h, f = (
    /*toggle*/
    (e[7] || /*header*/
    e[4] || /*$$slots*/
    e[14].header) && ji(e)
  );
  const g = [nc, ic], m = [];
  function p(_, L) {
    return (
      /*body*/
      _[2] ? 0 : 1
    );
  }
  i = p(e), n = m[i] = g[i](e);
  let b = [
    /*$$restProps*/
    e[13],
    {
      "aria-hidden": s = /*isOpen*/
      e[0] ? void 0 : !0
    },
    {
      "aria-modal": a = /*isOpen*/
      e[0] ? !0 : void 0
    },
    { class: (
      /*classes*/
      e[11]
    ) },
    {
      role: o = /*isOpen*/
      e[0] ? "dialog" : void 0
    },
    { "data-bs-theme": (
      /*theme*/
      e[6]
    ) },
    {
      style: l = `visibility: ${/*isOpen*/
      e[0] || /*isTransitioning*/
      e[8] ? "visible" : "hidden"};${/*style*/
      e[5]}`
    },
    { tabindex: "-1" }
  ], C = {};
  for (let _ = 0; _ < b.length; _ += 1)
    C = ne(C, b[_]);
  let H = (
    /*backdrop*/
    e[1] && Ti(e)
  );
  return {
    c() {
      t = k("div"), f && f.c(), r = $(), n.c(), c = $(), H && H.c(), u = ve(), Be(t, C);
    },
    m(_, L) {
      O(_, t, L), f && f.m(t, null), v(t, r), m[i].m(t, null), e[28](t), O(_, c, L), H && H.m(_, L), O(_, u, L), h = !0;
    },
    p(_, L) {
      /*toggle*/
      _[7] || /*header*/
      _[4] || /*$$slots*/
      _[14].header ? f ? (f.p(_, L), L & /*toggle, header, $$slots*/
      16528 && w(f, 1)) : (f = ji(_), f.c(), w(f, 1), f.m(t, r)) : f && (ee(), B(f, 1, 1, () => {
        f = null;
      }), te());
      let x = i;
      i = p(_), i === x ? m[i].p(_, L) : (ee(), B(m[x], 1, 1, () => {
        m[x] = null;
      }), te(), n = m[i], n ? n.p(_, L) : (n = m[i] = g[i](_), n.c()), w(n, 1), n.m(t, null)), Be(t, C = gt(b, [
        L & /*$$restProps*/
        8192 && /*$$restProps*/
        _[13],
        (!h || L & /*isOpen*/
        1 && s !== (s = /*isOpen*/
        _[0] ? void 0 : !0)) && { "aria-hidden": s },
        (!h || L & /*isOpen*/
        1 && a !== (a = /*isOpen*/
        _[0] ? !0 : void 0)) && { "aria-modal": a },
        (!h || L & /*classes*/
        2048) && { class: (
          /*classes*/
          _[11]
        ) },
        (!h || L & /*isOpen*/
        1 && o !== (o = /*isOpen*/
        _[0] ? "dialog" : void 0)) && { role: o },
        (!h || L & /*theme*/
        64) && { "data-bs-theme": (
          /*theme*/
          _[6]
        ) },
        (!h || L & /*isOpen, isTransitioning, style*/
        289 && l !== (l = `visibility: ${/*isOpen*/
        _[0] || /*isTransitioning*/
        _[8] ? "visible" : "hidden"};${/*style*/
        _[5]}`)) && { style: l },
        { tabindex: "-1" }
      ])), /*backdrop*/
      _[1] ? H ? (H.p(_, L), L & /*backdrop*/
      2 && w(H, 1)) : (H = Ti(_), H.c(), w(H, 1), H.m(u.parentNode, u)) : H && (ee(), B(H, 1, 1, () => {
        H = null;
      }), te());
    },
    i(_) {
      h || (w(f), w(n), w(H), h = !0);
    },
    o(_) {
      B(f), B(n), B(H), h = !1;
    },
    d(_) {
      _ && (M(t), M(c), M(u)), f && f.d(), m[i].d(), e[28](null), H && H.d(_);
    }
  };
}
function oc(e) {
  let t, r, i, n, s, a;
  var o = (
    /*outer*/
    e[10]
  );
  function l(c, u) {
    return {
      props: {
        $$slots: { default: [ac] },
        $$scope: { ctx: c }
      }
    };
  }
  return o && (r = oi(o, l(e))), {
    c() {
      t = $(), r && E(r.$$.fragment), i = ve();
    },
    m(c, u) {
      O(c, t, u), r && U(r, c, u), O(c, i, u), n = !0, s || (a = Z(Zl.body, "mousedown", function() {
        Le(
          /*handleMouseDown*/
          e[12]
        ) && e[12].apply(this, arguments);
      }), s = !0);
    },
    p(c, [u]) {
      if (e = c, u & /*outer*/
      1024 && o !== (o = /*outer*/
      e[10])) {
        if (r) {
          ee();
          const h = r;
          B(h.$$.fragment, 1, 0, () => {
            V(h, 1);
          }), te();
        }
        o ? (r = oi(o, l(e)), E(r.$$.fragment), w(r.$$.fragment, 1), U(r, i.parentNode, i)) : r = null;
      } else if (o) {
        const h = {};
        u & /*$$scope, fade, isOpen, toggle, backdrop, $$restProps, classes, theme, isTransitioning, style, element, body, header, $$slots*/
        536898559 && (h.$$scope = { dirty: u, ctx: e }), r.$set(h);
      }
    },
    i(c) {
      n || (r && w(r.$$.fragment, c), n = !0);
    },
    o(c) {
      r && B(r.$$.fragment, c), n = !1;
    },
    d(c) {
      c && (M(t), M(i)), r && V(r, c), s = !1, a();
    }
  };
}
function lc(e, t, r) {
  let i, n, s;
  const a = [
    "class",
    "backdrop",
    "body",
    "container",
    "fade",
    "header",
    "isOpen",
    "keyboard",
    "placement",
    "scroll",
    "sm",
    "md",
    "lg",
    "xl",
    "xxl",
    "style",
    "theme",
    "toggle"
  ];
  let o = ye(t, a), { $$slots: l = {}, $$scope: c } = t;
  const u = pn(l), h = Ke();
  let { class: f = "" } = t, { backdrop: g = !0 } = t, { body: m = !0 } = t, { container: p = "body" } = t, { fade: b = !0 } = t, { header: C = "" } = t, { isOpen: H = !1 } = t, { keyboard: _ = !0 } = t, { placement: L = "start" } = t, { scroll: x = !1 } = t, { sm: D = !1 } = t, { md: R = !1 } = t, { lg: y = !1 } = t, { xl: re = !1 } = t, { xxl: ce = !1 } = t, { style: N = "" } = t, { theme: qe = null } = t, { toggle: De = void 0 } = t, be, Fe = !1, je, Oe;
  Qe(() => r(25, be = document.body));
  function Ze(I) {
    ke[I ? "unshift" : "push"](() => {
      je = I, r(9, je);
    });
  }
  return e.$$set = (I) => {
    t = ne(ne({}, t), dt(I)), r(13, o = ye(t, a)), "class" in I && r(15, f = I.class), "backdrop" in I && r(1, g = I.backdrop), "body" in I && r(2, m = I.body), "container" in I && r(16, p = I.container), "fade" in I && r(3, b = I.fade), "header" in I && r(4, C = I.header), "isOpen" in I && r(0, H = I.isOpen), "keyboard" in I && r(17, _ = I.keyboard), "placement" in I && r(18, L = I.placement), "scroll" in I && r(19, x = I.scroll), "sm" in I && r(20, D = I.sm), "md" in I && r(21, R = I.md), "lg" in I && r(22, y = I.lg), "xl" in I && r(23, re = I.xl), "xxl" in I && r(24, ce = I.xxl), "style" in I && r(5, N = I.style), "theme" in I && r(6, qe = I.theme), "toggle" in I && r(7, De = I.toggle), "$$scope" in I && r(29, c = I.$$scope);
  }, e.$$.update = () => {
    e.$$.dirty & /*element, isOpen*/
    513 && je && (r(0, H), r(9, je), r(8, Fe = !0), h(H ? "opening" : "closing"), setTimeout(
      () => {
        r(8, Fe = !1), h(H ? "open" : "close");
      },
      Xr(je)
    )), e.$$.dirty & /*bodyElement, scroll, isOpen, isTransitioning*/
    34078977 && be && !x && be.classList.toggle("overflow-noscroll", H || Fe), e.$$.dirty & /*isOpen, toggle, keyboard*/
    131201 && H && De && typeof window < "u" && r(26, Oe = Ll(document, "keydown", (I) => {
      I.key && I.key === "Escape" && _ && De();
    })), e.$$.dirty & /*isOpen, removeEscListener*/
    67108865 && !H && Oe && Oe(), e.$$.dirty & /*backdrop, toggle, bodyElement, isOpen*/
    33554563 && r(12, i = g && De && be && H ? (I) => {
      I.target === be && De();
    } : void 0), e.$$.dirty & /*sm, md, lg, xl, xxl, isOpen, placement, className*/
    32800769 && r(11, n = ht(
      {
        offcanvas: !D && !R && !y && !re && !ce,
        "offcanvas-sm": D,
        "offcanvas-md": R,
        "offcanvas-lg": y,
        "offcanvas-xl": re,
        "offcanvas-xxl": ce,
        show: H
      },
      `offcanvas-${L}`,
      f
    )), e.$$.dirty & /*container*/
    65536 && r(10, s = p === "inline" ? Yn : Zn);
  }, [
    H,
    g,
    m,
    b,
    C,
    N,
    qe,
    De,
    Fe,
    je,
    s,
    n,
    i,
    o,
    u,
    f,
    p,
    _,
    L,
    x,
    D,
    R,
    y,
    re,
    ce,
    be,
    Oe,
    l,
    Ze,
    c
  ];
}
class is extends K {
  constructor(t) {
    super(), X(
      this,
      t,
      lc,
      oc,
      J,
      {
        class: 15,
        backdrop: 1,
        body: 2,
        container: 16,
        fade: 3,
        header: 4,
        isOpen: 0,
        keyboard: 17,
        placement: 18,
        scroll: 19,
        sm: 20,
        md: 21,
        lg: 22,
        xl: 23,
        xxl: 24,
        style: 5,
        theme: 6,
        toggle: 7
      },
      ec
    );
  }
  get class() {
    return this.$$.ctx[15];
  }
  set class(t) {
    this.$$set({ class: t }), P();
  }
  get backdrop() {
    return this.$$.ctx[1];
  }
  set backdrop(t) {
    this.$$set({ backdrop: t }), P();
  }
  get body() {
    return this.$$.ctx[2];
  }
  set body(t) {
    this.$$set({ body: t }), P();
  }
  get container() {
    return this.$$.ctx[16];
  }
  set container(t) {
    this.$$set({ container: t }), P();
  }
  get fade() {
    return this.$$.ctx[3];
  }
  set fade(t) {
    this.$$set({ fade: t }), P();
  }
  get header() {
    return this.$$.ctx[4];
  }
  set header(t) {
    this.$$set({ header: t }), P();
  }
  get isOpen() {
    return this.$$.ctx[0];
  }
  set isOpen(t) {
    this.$$set({ isOpen: t }), P();
  }
  get keyboard() {
    return this.$$.ctx[17];
  }
  set keyboard(t) {
    this.$$set({ keyboard: t }), P();
  }
  get placement() {
    return this.$$.ctx[18];
  }
  set placement(t) {
    this.$$set({ placement: t }), P();
  }
  get scroll() {
    return this.$$.ctx[19];
  }
  set scroll(t) {
    this.$$set({ scroll: t }), P();
  }
  get sm() {
    return this.$$.ctx[20];
  }
  set sm(t) {
    this.$$set({ sm: t }), P();
  }
  get md() {
    return this.$$.ctx[21];
  }
  set md(t) {
    this.$$set({ md: t }), P();
  }
  get lg() {
    return this.$$.ctx[22];
  }
  set lg(t) {
    this.$$set({ lg: t }), P();
  }
  get xl() {
    return this.$$.ctx[23];
  }
  set xl(t) {
    this.$$set({ xl: t }), P();
  }
  get xxl() {
    return this.$$.ctx[24];
  }
  set xxl(t) {
    this.$$set({ xxl: t }), P();
  }
  get style() {
    return this.$$.ctx[5];
  }
  set style(t) {
    this.$$set({ style: t }), P();
  }
  get theme() {
    return this.$$.ctx[6];
  }
  set theme(t) {
    this.$$set({ theme: t }), P();
  }
  get toggle() {
    return this.$$.ctx[7];
  }
  set toggle(t) {
    this.$$set({ toggle: t }), P();
  }
}
Q(is, { class: {}, backdrop: { type: "Boolean" }, body: { type: "Boolean" }, container: {}, fade: { type: "Boolean" }, header: {}, isOpen: { type: "Boolean" }, keyboard: { type: "Boolean" }, placement: {}, scroll: { type: "Boolean" }, sm: { type: "Boolean" }, md: { type: "Boolean" }, lg: { type: "Boolean" }, xl: { type: "Boolean" }, xxl: { type: "Boolean" }, style: {}, theme: {}, toggle: {} }, ["header", "default"], [], !0);
const { document: kr } = bn;
function Ui(e) {
  let t;
  return {
    c() {
      t = k("link"), d(t, "rel", "stylesheet"), d(t, "href", "https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.2/font/bootstrap-icons.min.css");
    },
    m(r, i) {
      O(r, t, i);
    },
    d(r) {
      r && M(t);
    }
  };
}
function cc(e) {
  let t, r, i = (
    /*icons*/
    e[0] && Ui()
  );
  return {
    c() {
      t = k("link"), i && i.c(), r = ve(), d(t, "rel", "stylesheet"), d(t, "href", "https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css");
    },
    m(n, s) {
      v(kr.head, t), i && i.m(kr.head, null), v(kr.head, r);
    },
    p(n, [s]) {
      /*icons*/
      n[0] ? i || (i = Ui(), i.c(), i.m(r.parentNode, r)) : i && (i.d(1), i = null);
    },
    i: q,
    o: q,
    d(n) {
      M(t), i && i.d(n), M(r);
    }
  };
}
function uc(e, t, r) {
  let { icons: i = !0 } = t, { theme: n = void 0 } = t;
  return e.$$set = (s) => {
    "icons" in s && r(0, i = s.icons), "theme" in s && r(1, n = s.theme);
  }, e.$$.update = () => {
    e.$$.dirty & /*theme*/
    2 && typeof document < "u" && n !== void 0 && (n === "auto" && window.matchMedia("(prefers-color-scheme: dark)").matches ? document.documentElement.setAttribute("data-bs-theme", "dark") : document.documentElement.setAttribute("data-bs-theme", n));
  }, [i, n];
}
class ns extends K {
  constructor(t) {
    super(), X(this, t, uc, cc, J, { icons: 0, theme: 1 });
  }
  get icons() {
    return this.$$.ctx[0];
  }
  set icons(t) {
    this.$$set({ icons: t }), P();
  }
  get theme() {
    return this.$$.ctx[1];
  }
  set theme(t) {
    this.$$set({ theme: t }), P();
  }
}
Q(ns, { icons: { type: "Boolean" }, theme: {} }, [], [], !0);
const fc = '"./variables.module.css"', hc = "#ffffff", dc = "_offcanvasBottomShow_bh7id_4", gc = {
  variables: fc,
  white: hc,
  offcanvasBottomShow: dc
}, mc = "_noPadding_equa7_1", pc = {
  noPadding: mc
};
function _c(e) {
  let t, r;
  return t = new Nl({ props: { class: pc.noPadding } }), t.$on(
    "querySelected",
    /*toggle*/
    e[3]
  ), {
    c() {
      E(t.$$.fragment);
    },
    m(i, n) {
      U(t, i, n), r = !0;
    },
    p: q,
    i(i) {
      r || (w(t.$$.fragment, i), r = !0);
    },
    o(i) {
      B(t.$$.fragment, i), r = !1;
    },
    d(i) {
      V(t, i);
    }
  };
}
function vc(e) {
  let t, r, i, n, s, a, o, l, c;
  return r = new me({ props: { icon: Bl, size: "2x" } }), a = new is({
    props: {
      isOpen: (
        /*isOpen*/
        e[1]
      ),
      toggle: (
        /*toggle*/
        e[3]
      ),
      backdrop: !1,
      placement: "bottom",
      class: `${gc.offcanvasBottomShow}`,
      $$slots: { default: [_c] },
      $$scope: { ctx: e }
    }
  }), {
    c() {
      t = k("button"), E(r.$$.fragment), s = $(), E(a.$$.fragment), d(t, "class", i = `${pe.iconButton} ${/*className*/
      e[0]}`), d(t, "title", n = /*$t*/
      e[2]("user_queries.show"));
    },
    m(u, h) {
      O(u, t, h), U(r, t, null), O(u, s, h), U(a, u, h), o = !0, l || (c = Z(
        t,
        "click",
        /*toggle*/
        e[3]
      ), l = !0);
    },
    p(u, [h]) {
      (!o || h & /*className*/
      1 && i !== (i = `${pe.iconButton} ${/*className*/
      u[0]}`)) && d(t, "class", i), (!o || h & /*$t*/
      4 && n !== (n = /*$t*/
      u[2]("user_queries.show"))) && d(t, "title", n);
      const f = {};
      h & /*isOpen*/
      2 && (f.isOpen = /*isOpen*/
      u[1]), h & /*$$scope*/
      16 && (f.$$scope = { dirty: h, ctx: u }), a.$set(f);
    },
    i(u) {
      o || (w(r.$$.fragment, u), w(a.$$.fragment, u), o = !0);
    },
    o(u) {
      B(r.$$.fragment, u), B(a.$$.fragment, u), o = !1;
    },
    d(u) {
      u && (M(t), M(s)), V(r), V(a, u), l = !1, c();
    }
  };
}
function bc(e, t, r) {
  let i;
  oe(e, Ye, (o) => r(2, i = o));
  let { class: n = "" } = t, s = !1;
  const a = () => {
    r(1, s = !s);
  };
  return e.$$set = (o) => {
    "class" in o && r(0, n = o.class);
  }, [n, s, i, a];
}
class ss extends K {
  constructor(t) {
    super(), X(this, t, bc, vc, J, { class: 0 });
  }
  get class() {
    return this.$$.ctx[0];
  }
  set class(t) {
    this.$$set({ class: t }), P();
  }
}
Q(ss, { class: {} }, [], [], !0);
const wc = ss;
function kc(e) {
  let t, r = (
    /*$t*/
    e[0]("new_search") + ""
  ), i, n, s;
  return {
    c() {
      t = k("button"), i = G(r), d(t, "class", `${pe.linkButton} ${Je.base}`);
    },
    m(a, o) {
      O(a, t, o), v(t, i), n || (s = Z(
        t,
        "click",
        /*click_handler*/
        e[2]
      ), n = !0);
    },
    p(a, [o]) {
      o & /*$t*/
      1 && r !== (r = /*$t*/
      a[0]("new_search") + "") && A(i, r);
    },
    i: q,
    o: q,
    d(a) {
      a && M(t), n = !1, s();
    }
  };
}
function yc(e, t, r) {
  let i;
  oe(e, Ye, (a) => r(0, i = a));
  const n = Ke();
  return [i, n, () => n("click")];
}
class as extends K {
  constructor(t) {
    super(), X(this, t, yc, kc, J, {});
  }
}
Q(as, {}, [], [], !0);
const Bc = as;
var os = /* @__PURE__ */ ((e) => (e[e.CorporateEvent = 1] = "CorporateEvent", e[e.Wedding = 2] = "Wedding", e[e.Party = 3] = "Party", e[e.Birthday = 4] = "Birthday", e[e.ClubEvent = 6] = "ClubEvent", e[e.Festival = 7] = "Festival", e[e.ReligiousCeremony = 8] = "ReligiousCeremony", e[e.Ceremony = 9] = "Ceremony", e[e.SeasonalEvent = 13] = "SeasonalEvent", e[e.AmbientMusic = 16] = "AmbientMusic", e[e.PartyForKids = 17] = "PartyForKids", e[e.EventForBarRestaurant = 18] = "EventForBarRestaurant", e[e.EventForHotel = 19] = "EventForHotel", e[e.RetirementHome = 20] = "RetirementHome", e[e.Other = 999] = "Other", e))(os || {}), ls = /* @__PURE__ */ ((e) => (e[e.Band = 1] = "Band", e[e.Musician = 2] = "Musician", e[e.DJ = 3] = "DJ", e[e.Ensemble = 4] = "Ensemble", e[e.Entertainer = 5] = "Entertainer", e[e.Magician = 6] = "Magician", e[e.Speaker = 7] = "Speaker", e[e.Dancer = 8] = "Dancer", e[e.Photographer = 9] = "Photographer", e[e.EventRental = 10] = "EventRental", e[e.EventServices = 11] = "EventServices", e[e.TeamBuilding = 12] = "TeamBuilding", e[e.Packages = 13] = "Packages", e))(ls || {}), cs = /* @__PURE__ */ ((e) => (e[e.BigBand = 1] = "BigBand", e[e.SteelDrumPlayer = 2] = "SteelDrumPlayer", e[e.Karaoke = 3] = "Karaoke", e[e.Original = 4] = "Original", e[e.Cover = 5] = "Cover", e[e.Tribute = 6] = "Tribute", e[e.OneManBand = 7] = "OneManBand", e[e.Radio = 8] = "Radio", e[e.Lounge = 9] = "Lounge", e[e.AcousticMusic = 10] = "AcousticMusic", e[e.ACappellaGroup = 11] = "ACappellaGroup", e[e.Quartet = 12] = "Quartet", e[e.StringTrio = 13] = "StringTrio", e[e.Guggen = 14] = "Guggen", e[e.BrassBand = 15] = "BrassBand", e[e.ChamberOrchestra = 16] = "ChamberOrchestra", e[e.ClassicalDuo = 17] = "ClassicalDuo", e[e.Orchestra = 18] = "Orchestra", e[e.Choir = 19] = "Choir", e[e.Percussionist = 20] = "Percussionist", e[e.Saxophonist = 21] = "Saxophonist", e[e.Pianist = 22] = "Pianist", e[e.MaleVocalist = 23] = "MaleVocalist", e[e.Violinist = 24] = "Violinist", e[e.Flutist = 25] = "Flutist", e[e.Guitarist = 26] = "Guitarist", e[e.Cellist = 27] = "Cellist", e[e.Vocalist = 28] = "Vocalist", e[e.Keyboardist = 29] = "Keyboardist", e[e.Organist = 30] = "Organist", e[e.Crooner = 31] = "Crooner", e[e.Harpist = 32] = "Harpist", e[e.Rapper = 33] = "Rapper", e[e.Trumpeter = 34] = "Trumpeter", e[e.Club = 35] = "Club", e[e.Clown = 36] = "Clown", e[e.Comedian = 37] = "Comedian", e[e.BalloonSculptor = 38] = "BalloonSculptor", e[e.FacePainter = 39] = "FacePainter", e[e.Juggler = 40] = "Juggler", e[e.Walkacts = 41] = "Walkacts", e[e.FireJuggler = 42] = "FireJuggler", e[e.Caricaturist = 43] = "Caricaturist", e[e.SantaClaus = 44] = "SantaClaus", e[e.LivingDoll = 45] = "LivingDoll", e[e.Magician = 46] = "Magician", e[e.Mentalist = 47] = "Mentalist", e[e.MagicForKids = 48] = "MagicForKids", e[e.Presenter = 49] = "Presenter", e[e.Moderator = 50] = "Moderator", e[e.ActorActress = 51] = "ActorActress", e[e.HulaDancer = 54] = "HulaDancer", e[e.DanceGroup = 55] = "DanceGroup", e[e.CountryDancer = 56] = "CountryDancer", e[e.HipHopDancer = 57] = "HipHopDancer", e[e.TapDancer = 58] = "TapDancer", e[e.FlamencoDancer = 59] = "FlamencoDancer", e[e.TangoDancer = 60] = "TangoDancer", e[e.LatinMusicDancer = 61] = "LatinMusicDancer", e[e.Vintage = 62] = "Vintage", e[e.BellyDancer = 63] = "BellyDancer", e[e.Other = 64] = "Other", e[e.Ventriloquist = 65] = "Ventriloquist", e[e.Acrobats = 66] = "Acrobats", e[e.Bagpipes = 67] = "Bagpipes", e[e.AlpineHorn = 68] = "AlpineHorn", e[e.Harmonica = 69] = "Harmonica", e[e.Horn = 70] = "Horn", e[e.VJ = 71] = "VJ", e[e.AthleticsSpeaker = 72] = "AthleticsSpeaker", e[e.BusinessSpeaker = 73] = "BusinessSpeaker", e[e.CelebritySpeaker = 74] = "CelebritySpeaker", e[e.CorporateSpeaker = 75] = "CorporateSpeaker", e[e.InspirationalSpeaker = 76] = "InspirationalSpeaker", e[e.MotivationalSpeaker = 77] = "MotivationalSpeaker", e[e.SportsCommentator = 78] = "SportsCommentator", e[e.Cabaret = 79] = "Cabaret", e[e.Lookalike = 80] = "Lookalike", e[e.Mariachi = 81] = "Mariachi", e[e.Percussion = 82] = "Percussion", e[e.Woodwinds = 83] = "Woodwinds", e[e.Duo = 84] = "Duo", e[e.Trio = 85] = "Trio", e[e.PanFlute = 86] = "PanFlute", e[e.PianoBar = 87] = "PianoBar", e[e.Accordion = 88] = "Accordion", e[e.BodyPainter = 89] = "BodyPainter", e[e.StringQuartetAndSimilar = 90] = "StringQuartetAndSimilar", e[e.PartyDJ = 91] = "PartyDJ", e[e.BackgroundDJ = 92] = "BackgroundDJ", e[e.DJWithLiveInstruments = 93] = "DJWithLiveInstruments", e[e.DJWithSinger = 94] = "DJWithSinger", e[e.DJWithKaraoke = 95] = "DJWithKaraoke", e[e.PopRockPartyBand = 96] = "PopRockPartyBand", e[e.SchlagerOldies = 97] = "SchlagerOldies", e[e.GalaBandDanceOrchestra = 98] = "GalaBandDanceOrchestra", e[e.RockabillyPartyBand = 99] = "RockabillyPartyBand", e[e.IrishPartyBand = 100] = "IrishPartyBand", e[e.CountryPartyBand = 101] = "CountryPartyBand", e[e.LatinAmericanPartyBand = 102] = "LatinAmericanPartyBand", e[e.JazzBand = 103] = "JazzBand", e[e.FolkMusic = 104] = "FolkMusic", e[e.TicineseMusic = 105] = "TicineseMusic", e[e.GermanMusic = 106] = "GermanMusic", e[e.ItalianMusic = 107] = "ItalianMusic", e[e.SemiAcousticDuoTrioVoiceAndGuitar = 108] = "SemiAcousticDuoTrioVoiceAndGuitar", e[e.SemiAcousticDuoTrioVoiceAndPiano = 109] = "SemiAcousticDuoTrioVoiceAndPiano", e[e.SemiAcousticDuoTrioInstrumental = 110] = "SemiAcousticDuoTrioInstrumental", e[e.SoloVoiceAndGuitar = 111] = "SoloVoiceAndGuitar", e[e.SoloVoiceAndPiano = 112] = "SoloVoiceAndPiano", e[e.FemaleVocalist = 114] = "FemaleVocalist", e[e.Photographer = 115] = "Photographer", e[e.WeddingPhotographer = 116] = "WeddingPhotographer", e[e.Videographer = 118] = "Videographer", e[e.WeddingVideographer = 119] = "WeddingVideographer", e[e.InflatableCastles = 120] = "InflatableCastles", e[e.InflatablesForParties = 121] = "InflatablesForParties", e[e.PhotoBoothRental = 122] = "PhotoBoothRental", e[e.Bartender = 123] = "Bartender", e[e.Catering = 124] = "Catering", e[e.FoodTrucks = 125] = "FoodTrucks", e[e.Sommelier = 126] = "Sommelier", e[e.EventPlanner = 127] = "EventPlanner", e[e.WeddingPlanner = 128] = "WeddingPlanner", e[e.EventLimousine = 129] = "EventLimousine", e[e.EventBus = 130] = "EventBus", e[e.SportsAndGames = 131] = "SportsAndGames", e[e.NatureExperiences = 132] = "NatureExperiences", e[e.TeamEvent = 133] = "TeamEvent", e[e.Experience = 134] = "Experience", e[e.Packages = 135] = "Packages", e))(cs || {}), us = /* @__PURE__ */ ((e) => (e[e.Pop = 1] = "Pop", e[e.Rock = 2] = "Rock", e[e.Electro = 3] = "Electro", e[e.RnB = 4] = "RnB", e[e.Metal = 5] = "Metal", e[e.HouseTechno = 6] = "HouseTechno", e[e.HipHop = 7] = "HipHop", e[e.Punk = 8] = "Punk", e[e.DiscoDance = 9] = "DiscoDance", e[e.Rap = 10] = "Rap", e[e.Alternative = 11] = "Alternative", e[e.Jazz = 12] = "Jazz", e[e.Latin = 13] = "Latin", e[e.Folk = 14] = "Folk", e[e.Classical = 15] = "Classical", e[e.Reggae = 16] = "Reggae", e[e.Funk = 17] = "Funk", e[e.ChristianGospel = 18] = "ChristianGospel", e[e.Country = 19] = "Country", e[e.Ska = 20] = "Ska", e[e.WorldMusic = 21] = "WorldMusic", e[e.Blues = 22] = "Blues", e[e.Other = 23] = "Other", e[e.Lounge = 24] = "Lounge", e[e.Soul = 25] = "Soul", e[e.Swing = 26] = "Swing", e[e.Rockabilly = 27] = "Rockabilly", e[e.DanceMusic = 28] = "DanceMusic", e[e.FolkMusic = 29] = "FolkMusic", e[e.Schlager = 30] = "Schlager", e[e.OldieBands = 31] = "OldieBands", e[e.Celtic = 32] = "Celtic", e[e.Irish = 33] = "Irish", e[e.Twenties = 34] = "Twenties", e[e.Thirties = 35] = "Thirties", e[e.Forties = 36] = "Forties", e[e.Fifties = 37] = "Fifties", e[e.Sixties = 38] = "Sixties", e[e.Seventies = 39] = "Seventies", e[e.Eighties = 40] = "Eighties", e[e.Nineties = 41] = "Nineties", e[e.African = 42] = "African", e[e.Ambient = 43] = "Ambient", e[e.Flamenco = 44] = "Flamenco", e[e.Fusion = 45] = "Fusion", e[e.Greek = 46] = "Greek", e[e.Groove = 47] = "Groove", e[e.Grunge = 48] = "Grunge", e[e.Gypsy = 49] = "Gypsy", e[e.Hawaiian = 50] = "Hawaiian", e[e.HonkyTonk = 51] = "HonkyTonk", e[e.Indie = 52] = "Indie", e[e.Industrial = 53] = "Industrial", e[e.Italian = 54] = "Italian", e[e.Jam = 55] = "Jam", e[e.MiddleEastern = 56] = "MiddleEastern", e[e.NewAge = 58] = "NewAge", e[e.Polka = 59] = "Polka", e[e.Ragtime = 60] = "Ragtime", e[e.SalsaMerengue = 61] = "SalsaMerengue", e[e.SouthernRock = 62] = "SouthernRock", e[e.SurfBeach = 63] = "SurfBeach", e[e.Bluegrass = 64] = "Bluegrass", e[e.Brazilian = 65] = "Brazilian", e[e.Caribbean = 66] = "Caribbean", e[e.Cuban = 67] = "Cuban", e[e.Tango = 68] = "Tango", e[e.Christmas = 69] = "Christmas", e[e.Meditational = 70] = "Meditational", e[e.Opera = 71] = "Opera", e[e.ChamberMusic = 72] = "ChamberMusic", e[e.KidsMusic = 73] = "KidsMusic", e[e.Ticinese = 74] = "Ticinese", e[e.Jodel = 75] = "Jodel", e[e.HardRock = 76] = "HardRock", e[e.Mundart = 77] = "Mundart", e))(us || {}), _e = /* @__PURE__ */ ((e) => (e.LANGUAGE = "LANGUAGE", e.SHOW_TYPE = "SHOW_TYPE", e.ARTIST_TYPE = "ARTIST_TYPE", e.ARTIST_SUB_TYPE = "ARTIST_SUB_TYPE", e.ARTIST_GENRE = "ARTIST_GENRE", e.LOCATION = "LOCATION", e.WHEN = "WHEN", e))(_e || {});
function Vi(e, t, r) {
  const i = e.slice();
  return i[1] = t[r], i;
}
function Ei(e) {
  let t, r, i = JSON.stringify(
    /*result*/
    e[1],
    null,
    2
  ) + "", n, s;
  return {
    c() {
      t = k("div"), r = k("pre"), n = G(i), s = $(), At(t, "margin", "1rem 0");
    },
    m(a, o) {
      O(a, t, o), v(t, r), v(r, n), v(t, s);
    },
    p(a, o) {
      o & /*results*/
      1 && i !== (i = JSON.stringify(
        /*result*/
        a[1],
        null,
        2
      ) + "") && A(n, i);
    },
    d(a) {
      a && M(t);
    }
  };
}
function Pc(e) {
  let t, r = Ee(
    /*results*/
    e[0]
  ), i = [];
  for (let n = 0; n < r.length; n += 1)
    i[n] = Ei(Vi(e, r, n));
  return {
    c() {
      t = k("div");
      for (let n = 0; n < i.length; n += 1)
        i[n].c();
    },
    m(n, s) {
      O(n, t, s);
      for (let a = 0; a < i.length; a += 1)
        i[a] && i[a].m(t, null);
    },
    p(n, [s]) {
      if (s & /*JSON, results*/
      1) {
        r = Ee(
          /*results*/
          n[0]
        );
        let a;
        for (a = 0; a < r.length; a += 1) {
          const o = Vi(n, r, a);
          i[a] ? i[a].p(o, s) : (i[a] = Ei(o), i[a].c(), i[a].m(t, null));
        }
        for (; a < i.length; a += 1)
          i[a].d(1);
        i.length = r.length;
      }
    },
    i: q,
    o: q,
    d(n) {
      n && M(t), rr(i, n);
    }
  };
}
function Cc(e, t, r) {
  let { results: i } = t;
  return e.$$set = (n) => {
    "results" in n && r(0, i = n.results);
  }, [i];
}
class fs extends K {
  constructor(t) {
    super(), X(this, t, Cc, Pc, J, { results: 0 });
  }
  get results() {
    return this.$$.ctx[0];
  }
  set results(t) {
    this.$$set({ results: t }), P();
  }
}
Q(fs, { results: {} }, [], [], !0);
const df = fs;
function qi(e) {
  let t, r;
  return t = new me({
    props: {
      icon: ll,
      size: "3x",
      pulse: !0,
      color: "#ff6600"
    }
  }), {
    c() {
      E(t.$$.fragment);
    },
    m(i, n) {
      U(t, i, n), r = !0;
    },
    i(i) {
      r || (w(t.$$.fragment, i), r = !0);
    },
    o(i) {
      B(t.$$.fragment, i), r = !1;
    },
    d(i) {
      V(t, i);
    }
  };
}
function Mc(e) {
  let t, r, i = (
    /*searching*/
    e[0] && qi()
  );
  return {
    c() {
      i && i.c(), t = ve();
    },
    m(n, s) {
      i && i.m(n, s), O(n, t, s), r = !0;
    },
    p(n, [s]) {
      /*searching*/
      n[0] ? i ? s & /*searching*/
      1 && w(i, 1) : (i = qi(), i.c(), w(i, 1), i.m(t.parentNode, t)) : i && (ee(), B(i, 1, 1, () => {
        i = null;
      }), te());
    },
    i(n) {
      r || (w(i), r = !0);
    },
    o(n) {
      B(i), r = !1;
    },
    d(n) {
      n && M(t), i && i.d(n);
    }
  };
}
function Hc(e, t, r) {
  let { searching: i = !1 } = t;
  return e.$$set = (n) => {
    "searching" in n && r(0, i = n.searching);
  }, [i];
}
class hs extends K {
  constructor(t) {
    super(), X(this, t, Hc, Mc, J, { searching: 0 });
  }
  get searching() {
    return this.$$.ctx[0];
  }
  set searching(t) {
    this.$$set({ searching: t }), P();
  }
}
Q(hs, { searching: { type: "Boolean" } }, [], [], !0);
const Oc = hs, xc = "_noBorder_v12dp_1", ds = {
  noBorder: xc
}, Nc = '"./variables.module.css"', Lc = "(min-width: 768px)", Ic = "_resizeNone_r7mbc_4", Sc = "_limitMaxHeight_r7mbc_8 _resizeNone_r7mbc_4", gs = {
  variables: Nc,
  medium: Lc,
  resizeNone: Ic,
  limitMaxHeight: Sc
}, Rc = "0.5rem", $c = "9999px", Gi = (e, t, r) => {
  e.style.borderRadius = t > r ? Rc : $c;
}, yr = (e, t) => {
  if (!e) return;
  const r = (n) => {
    for (const s of n) {
      const { height: a } = s.contentRect, o = s.target;
      o === e && t(o, a);
    }
  }, i = new ResizeObserver(r);
  return i.observe(e), () => {
    i.disconnect();
  };
};
function Dc(e) {
  Me(e, "svelte-1kmqjxg", '.ai-search-user-input-form.svelte-1kmqjxg.svelte-1kmqjxg{display:flex;border:1px solid #dee2e6;background-color:#ffffff}.ai-search-user-input-form.svelte-1kmqjxg textarea.svelte-1kmqjxg{justify-content:space-between;gap:1rem;background-color:#ffffff;padding:0.5rem;border-radius:9999px;flex-grow:1;margin-right:0.5rem;width:100%;height:var(--textarea-height, "6rem")}.ai-search-user-input-form__submit-container.svelte-1kmqjxg.svelte-1kmqjxg{display:flex;align-items:flex-end;padding-bottom:0.5rem;padding-right:0.5rem}.ai-search-user-input-form__submit-container.svelte-1kmqjxg button.svelte-1kmqjxg{background-color:#ffffff!important;font-size:2rem;border-radius:50%;transition:color 0.15s ease-in-out, background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;cursor:pointer;border:0;margin:0;padding:0;width:auto;display:flex}.ai-search-user-input-form__submit-container.svelte-1kmqjxg button[disabled].svelte-1kmqjxg{opacity:0.8;cursor:default}.ai-search-user-input-form__submit-container.svelte-1kmqjxg button.svelte-1kmqjxg:hover{opacity:0.8}');
}
function Fc(e) {
  let t, r, i, n, s, a, o, l, c, u, h;
  return o = new me({
    props: { icon: Yo, color: "#ffa500" }
  }), {
    c() {
      t = k("form"), r = k("textarea"), n = $(), s = k("div"), a = k("button"), E(o.$$.fragment), d(r, "name", "user-input"), d(r, "class", ie(`${Je.base} ${ds.noBorder} ${gs.limitMaxHeight}`) + " svelte-1kmqjxg"), d(r, "rows", "1"), d(r, "placeholder", i = /*isFollowup*/
      e[2] ? (
        /*followUpPlaceholder*/
        e[1]
      ) : (
        /*placeholder*/
        e[0]
      )), d(a, "type", "submit"), a.disabled = l = !/*userInput*/
      e[6], d(a, "class", "svelte-1kmqjxg"), d(s, "class", "ai-search-user-input-form__submit-container svelte-1kmqjxg"), d(t, "class", "ai-search-user-input-form svelte-1kmqjxg");
    },
    m(f, g) {
      O(f, t, g), v(t, r), Wt(
        r,
        /*userInput*/
        e[6]
      ), e[11](r), v(t, n), v(t, s), v(s, a), U(o, a, null), e[12](s), e[14](t), c = !0, u || (h = [
        Z(
          r,
          "input",
          /*resize*/
          e[7]
        ),
        Z(
          r,
          "keydown",
          /*handleKeyDown*/
          e[9]
        ),
        Z(
          r,
          "input",
          /*textarea_1_input_handler*/
          e[10]
        ),
        Z(t, "submit", yn(
          /*submit_handler*/
          e[13]
        ))
      ], u = !0);
    },
    p(f, [g]) {
      (!c || g & /*isFollowup, followUpPlaceholder, placeholder*/
      7 && i !== (i = /*isFollowup*/
      f[2] ? (
        /*followUpPlaceholder*/
        f[1]
      ) : (
        /*placeholder*/
        f[0]
      ))) && d(r, "placeholder", i), g & /*userInput*/
      64 && Wt(
        r,
        /*userInput*/
        f[6]
      ), (!c || g & /*userInput*/
      64 && l !== (l = !/*userInput*/
      f[6])) && (a.disabled = l);
    },
    i(f) {
      c || (w(o.$$.fragment, f), c = !0);
    },
    o(f) {
      B(o.$$.fragment, f), c = !1;
    },
    d(f) {
      f && M(t), e[11](null), V(o), e[12](null), e[14](null), u = !1, Ce(h);
    }
  };
}
function jc(e, t, r) {
  let { placeholder: i = "How can I help you organizing your event?" } = t, { followUpPlaceholder: n = "Do you want to add more details?" } = t, { isFollowup: s = !1 } = t;
  const a = Ke();
  let o, l, c, u, h;
  const f = () => {
    r(3, o.style.height = "auto", o);
  }, g = () => {
    if (o) {
      if (f(), !s && o.scrollHeight < parseFloat(h)) {
        r(3, o.style.height = h, o);
        return;
      }
      u && r(3, o.style.height = `${o.scrollHeight}px`, o);
    }
  }, m = (x) => {
    u && (a("userInput", { content: x }), r(6, u = void 0), f());
  }, p = (x) => {
    x.key === "Enter" && !x.shiftKey && (x.preventDefault(), m(u));
  };
  Qe(() => {
    h = o.clientHeight + "px", r(3, o.style.height = h, o), o.focus();
    const x = yr(l, (y, re) => Gi(y, re, 42)), D = yr(o, (y, re) => Gi(y, re, 32)), R = yr(c, (y, re) => {
      y.style.alignItems = re > 42 ? "flex-end" : "center", y.style.paddingBottom = re > 42 ? "0.5rem" : "0";
    });
    return () => {
      x && x(), D && D(), R && R();
    };
  });
  function b() {
    u = this.value, r(6, u);
  }
  function C(x) {
    ke[x ? "unshift" : "push"](() => {
      o = x, r(3, o);
    });
  }
  function H(x) {
    ke[x ? "unshift" : "push"](() => {
      c = x, r(5, c);
    });
  }
  const _ = () => {
    m(u);
  };
  function L(x) {
    ke[x ? "unshift" : "push"](() => {
      l = x, r(4, l);
    });
  }
  return e.$$set = (x) => {
    "placeholder" in x && r(0, i = x.placeholder), "followUpPlaceholder" in x && r(1, n = x.followUpPlaceholder), "isFollowup" in x && r(2, s = x.isFollowup);
  }, e.$$.update = () => {
    e.$$.dirty & /*isFollowup*/
    4 && g();
  }, [
    i,
    n,
    s,
    o,
    l,
    c,
    u,
    g,
    m,
    p,
    b,
    C,
    H,
    _,
    L
  ];
}
class ms extends K {
  constructor(t) {
    super(), X(
      this,
      t,
      jc,
      Fc,
      J,
      {
        placeholder: 0,
        followUpPlaceholder: 1,
        isFollowup: 2
      },
      Dc
    );
  }
  get placeholder() {
    return this.$$.ctx[0];
  }
  set placeholder(t) {
    this.$$set({ placeholder: t }), P();
  }
  get followUpPlaceholder() {
    return this.$$.ctx[1];
  }
  set followUpPlaceholder(t) {
    this.$$set({ followUpPlaceholder: t }), P();
  }
  get isFollowup() {
    return this.$$.ctx[2];
  }
  set isFollowup(t) {
    this.$$set({ isFollowup: t }), P();
  }
}
Q(ms, { placeholder: {}, followUpPlaceholder: {}, isFollowup: { type: "Boolean" } }, [], [], !0);
const gf = ms;
function zc(e) {
  Me(e, "svelte-njfdew", '.ai-search-user-input-form.svelte-njfdew.svelte-njfdew{display:flex;border:1px solid #dee2e6;background-color:#ffffff;border-radius:0.5rem}.ai-search-user-input-form.svelte-njfdew textarea.svelte-njfdew{justify-content:space-between;gap:1rem;background-color:#ffffff;padding:0.9rem 1rem;border-radius:0.5rem;flex-grow:1;margin-right:0.5rem;width:100%;height:var(--textarea-height, "6rem")}.ai-search-user-input-form__submit-container.svelte-njfdew.svelte-njfdew{display:flex;align-items:flex-end;padding-bottom:0.5rem;padding-right:0.5rem}.ai-search-user-input-form__submit-container.svelte-njfdew button.svelte-njfdew{background-color:#ffffff!important;font-size:1.5rem;border-radius:50%;transition:color 0.15s ease-in-out, background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;cursor:pointer;border:0;margin:0;padding:0;padding-right:0.2rem;padding-bottom:0.2rem;width:auto;display:flex}.ai-search-user-input-form__submit-container.svelte-njfdew button[disabled].svelte-njfdew{opacity:0.8;cursor:default}.ai-search-user-input-form__submit-container.svelte-njfdew button.svelte-njfdew:hover{opacity:0.8}');
}
function Tc(e) {
  let t, r, i, n, s, a, o, l, c, u, h;
  return o = new me({ props: { icon: cl } }), {
    c() {
      t = k("form"), r = k("textarea"), n = $(), s = k("div"), a = k("button"), E(o.$$.fragment), d(r, "name", "user-input"), d(r, "class", ie(`${Je.base} ${ds.noBorder} ${gs.limitMaxHeight}`) + " svelte-njfdew"), d(r, "rows", "1"), d(r, "placeholder", i = /*isFollowup*/
      e[2] ? (
        /*followUpPlaceholder*/
        e[1]
      ) : (
        /*placeholder*/
        e[0]
      )), r.disabled = /*disableTextarea*/
      e[3], d(a, "type", "submit"), a.disabled = l = !/*userInput*/
      e[6] || /*disableTextarea*/
      e[3], d(a, "class", ie(pe.iconButton) + " svelte-njfdew"), d(s, "class", "ai-search-user-input-form__submit-container svelte-njfdew"), d(t, "class", "ai-search-user-input-form svelte-njfdew");
    },
    m(f, g) {
      O(f, t, g), v(t, r), Wt(
        r,
        /*userInput*/
        e[6]
      ), e[12](r), v(t, n), v(t, s), v(s, a), U(o, a, null), e[13](s), c = !0, u || (h = [
        Z(
          r,
          "input",
          /*resize*/
          e[7]
        ),
        Z(
          r,
          "keydown",
          /*handleKeyDown*/
          e[9]
        ),
        Z(
          r,
          "input",
          /*textarea_1_input_handler*/
          e[11]
        ),
        Z(t, "submit", yn(
          /*submit_handler*/
          e[14]
        ))
      ], u = !0);
    },
    p(f, [g]) {
      (!c || g & /*isFollowup, followUpPlaceholder, placeholder*/
      7 && i !== (i = /*isFollowup*/
      f[2] ? (
        /*followUpPlaceholder*/
        f[1]
      ) : (
        /*placeholder*/
        f[0]
      ))) && d(r, "placeholder", i), (!c || g & /*disableTextarea*/
      8) && (r.disabled = /*disableTextarea*/
      f[3]), g & /*userInput*/
      64 && Wt(
        r,
        /*userInput*/
        f[6]
      ), (!c || g & /*userInput, disableTextarea*/
      72 && l !== (l = !/*userInput*/
      f[6] || /*disableTextarea*/
      f[3])) && (a.disabled = l);
    },
    i(f) {
      c || (w(o.$$.fragment, f), c = !0);
    },
    o(f) {
      B(o.$$.fragment, f), c = !1;
    },
    d(f) {
      f && M(t), e[12](null), V(o), e[13](null), u = !1, Ce(h);
    }
  };
}
function Uc(e, t, r) {
  let i;
  oe(e, Ye, (y) => r(16, i = y));
  let { placeholder: n = "" } = t, { followUpPlaceholder: s = "" } = t, { isFollowup: a = !1 } = t, { focusTextarea: o = !0 } = t, { disableTextarea: l = !1 } = t;
  const c = Ke();
  let u, h, f, g;
  const m = () => {
    r(4, u.style.height = "auto", u);
  }, p = () => {
    if (u) {
      if (m(), !a && u.scrollHeight < parseFloat(g)) {
        r(4, u.style.height = g, u);
        return;
      }
      f && r(4, u.style.height = `${u.scrollHeight}px`, u);
    }
  }, b = (y) => {
    f && (c("userInput", { content: y }), r(6, f = void 0), m(), u.blur());
  }, C = (y) => {
    y.key === "Enter" && !y.shiftKey && (y.preventDefault(), b(f));
  }, H = async () => {
    await Vo(), r(0, n = i("search_input.placeholder")), r(1, s = i("search_input.placeholder_followup"));
  }, _ = async () => {
    await Tr(), u.focus();
  };
  Qe(() => {
    H(), g = u.clientHeight + "px", r(4, u.style.height = g, u);
  });
  function L() {
    f = this.value, r(6, f);
  }
  function x(y) {
    ke[y ? "unshift" : "push"](() => {
      u = y, r(4, u);
    });
  }
  function D(y) {
    ke[y ? "unshift" : "push"](() => {
      h = y, r(5, h);
    });
  }
  const R = () => {
    b(f);
  };
  return e.$$set = (y) => {
    "placeholder" in y && r(0, n = y.placeholder), "followUpPlaceholder" in y && r(1, s = y.followUpPlaceholder), "isFollowup" in y && r(2, a = y.isFollowup), "focusTextarea" in y && r(10, o = y.focusTextarea), "disableTextarea" in y && r(3, l = y.disableTextarea);
  }, e.$$.update = () => {
    e.$$.dirty & /*isFollowup*/
    4 && p(), e.$$.dirty & /*focusTextarea, textareaEl*/
    1040 && o && u && _();
  }, [
    n,
    s,
    a,
    l,
    u,
    h,
    f,
    p,
    b,
    C,
    o,
    L,
    x,
    D,
    R
  ];
}
class ps extends K {
  constructor(t) {
    super(), X(
      this,
      t,
      Uc,
      Tc,
      J,
      {
        placeholder: 0,
        followUpPlaceholder: 1,
        isFollowup: 2,
        focusTextarea: 10,
        disableTextarea: 3
      },
      zc
    );
  }
  get placeholder() {
    return this.$$.ctx[0];
  }
  set placeholder(t) {
    this.$$set({ placeholder: t }), P();
  }
  get followUpPlaceholder() {
    return this.$$.ctx[1];
  }
  set followUpPlaceholder(t) {
    this.$$set({ followUpPlaceholder: t }), P();
  }
  get isFollowup() {
    return this.$$.ctx[2];
  }
  set isFollowup(t) {
    this.$$set({ isFollowup: t }), P();
  }
  get focusTextarea() {
    return this.$$.ctx[10];
  }
  set focusTextarea(t) {
    this.$$set({ focusTextarea: t }), P();
  }
  get disableTextarea() {
    return this.$$.ctx[3];
  }
  set disableTextarea(t) {
    this.$$set({ disableTextarea: t }), P();
  }
}
Q(ps, { placeholder: {}, followUpPlaceholder: {}, isFollowup: { type: "Boolean" }, focusTextarea: { type: "Boolean" }, disableTextarea: { type: "Boolean" } }, [], [], !0);
const Vc = ps;
function Ec(e) {
  Me(e, "svelte-j43b9j", ".ai-search-suggestions.svelte-j43b9j.svelte-j43b9j{font-size:0.8rem}.ai-search-suggestions.svelte-j43b9j p.svelte-j43b9j{margin:0;padding-bottom:0.2rem}.ai-search-suggestions__tips.svelte-j43b9j.svelte-j43b9j{display:grid;grid-template-columns:repeat(2, 1fr);gap:0.3rem}.ai-search-suggestions__tip.svelte-j43b9j.svelte-j43b9j{background-color:var(--ai-search-suggestion-background, #ffffff);border:1px solid #dcdcdd;border-radius:0.4rem;padding:0.1rem 0.4rem;display:flex;align-items:start}.ai-search-suggestions__tip__icon.svelte-j43b9j.svelte-j43b9j{padding-top:0.1rem;padding-right:0.2rem}.ai-search-suggestions__tip__text.svelte-j43b9j.svelte-j43b9j{padding-left:0.2rem;opacity:0.8;display:-webkit-box;-webkit-box-orient:vertical;-webkit-line-clamp:2;line-clamp:2;overflow:hidden}.ai-search-suggestions__tip__text.svelte-j43b9j>span.svelte-j43b9j{font-style:italic}");
}
function Wi(e, t, r) {
  const i = e.slice();
  return i[4] = t[r], i;
}
function Ai(e) {
  let t, r, i, n = (
    /*$t*/
    e[1]("suggestions_tip") + ""
  ), s, a, o, l, c = Ee(
    /*visibleNotApplied*/
    e[0]
  ), u = [];
  for (let f = 0; f < c.length; f += 1)
    u[f] = Ji(Wi(e, c, f));
  const h = (f) => B(u[f], 1, 1, () => {
    u[f] = null;
  });
  return {
    c() {
      t = k("section"), r = k("header"), i = k("p"), s = G(n), a = $(), o = k("main");
      for (let f = 0; f < u.length; f += 1)
        u[f].c();
      d(i, "class", "svelte-j43b9j"), d(o, "class", "ai-search-suggestions__tips svelte-j43b9j"), d(t, "class", ie(`${Je.base} ai-search-suggestions`) + " svelte-j43b9j");
    },
    m(f, g) {
      O(f, t, g), v(t, r), v(r, i), v(i, s), v(t, a), v(t, o);
      for (let m = 0; m < u.length; m += 1)
        u[m] && u[m].m(o, null);
      l = !0;
    },
    p(f, g) {
      if ((!l || g & /*$t*/
      2) && n !== (n = /*$t*/
      f[1]("suggestions_tip") + "") && A(s, n), g & /*getCommaSeparatedString, visibleNotApplied, $t*/
      7) {
        c = Ee(
          /*visibleNotApplied*/
          f[0]
        );
        let m;
        for (m = 0; m < c.length; m += 1) {
          const p = Wi(f, c, m);
          u[m] ? (u[m].p(p, g), w(u[m], 1)) : (u[m] = Ji(p), u[m].c(), w(u[m], 1), u[m].m(o, null));
        }
        for (ee(), m = c.length; m < u.length; m += 1)
          h(m);
        te();
      }
    },
    i(f) {
      if (!l) {
        for (let g = 0; g < c.length; g += 1)
          w(u[g]);
        l = !0;
      }
    },
    o(f) {
      u = u.filter(Boolean);
      for (let g = 0; g < u.length; g += 1)
        B(u[g]);
      l = !1;
    },
    d(f) {
      f && M(t), rr(u, f);
    }
  };
}
function Ji(e) {
  let t, r, i, n, s, a, o = (
    /*$t*/
    e[1](`filters.${/*notApplied*/
    e[4]}.label`) + ""
  ), l, c, u, h = (
    /*getCommaSeparatedString*/
    e[2](
      /*notApplied*/
      e[4]
    ) + ""
  ), f, g, m;
  return i = new me({
    props: { icon: Qo, color: "#ffd528" }
  }), {
    c() {
      t = k("span"), r = k("span"), E(i.$$.fragment), n = $(), s = k("span"), a = k("strong"), l = G(o), c = G(` 
                        - 
                        `), u = k("span"), f = G(h), g = $(), d(r, "class", "ai-search-suggestions__tip__icon svelte-j43b9j"), d(u, "class", "svelte-j43b9j"), d(s, "class", "ai-search-suggestions__tip__text svelte-j43b9j"), d(t, "class", "ai-search-suggestions__tip svelte-j43b9j");
    },
    m(p, b) {
      O(p, t, b), v(t, r), U(i, r, null), v(t, n), v(t, s), v(s, a), v(a, l), v(s, c), v(s, u), v(u, f), v(t, g), m = !0;
    },
    p(p, b) {
      (!m || b & /*$t, visibleNotApplied*/
      3) && o !== (o = /*$t*/
      p[1](`filters.${/*notApplied*/
      p[4]}.label`) + "") && A(l, o), (!m || b & /*visibleNotApplied*/
      1) && h !== (h = /*getCommaSeparatedString*/
      p[2](
        /*notApplied*/
        p[4]
      ) + "") && A(f, h);
    },
    i(p) {
      m || (w(i.$$.fragment, p), m = !0);
    },
    o(p) {
      B(i.$$.fragment, p), m = !1;
    },
    d(p) {
      p && M(t), V(i);
    }
  };
}
function qc(e) {
  var n;
  let t, r, i = (
    /*visibleNotApplied*/
    ((n = e[0]) == null ? void 0 : n.length) && Ai(e)
  );
  return {
    c() {
      i && i.c(), t = ve();
    },
    m(s, a) {
      i && i.m(s, a), O(s, t, a), r = !0;
    },
    p(s, [a]) {
      var o;
      /*visibleNotApplied*/
      (o = s[0]) != null && o.length ? i ? (i.p(s, a), a & /*visibleNotApplied*/
      1 && w(i, 1)) : (i = Ai(s), i.c(), w(i, 1), i.m(t.parentNode, t)) : i && (ee(), B(i, 1, 1, () => {
        i = null;
      }), te());
    },
    i(s) {
      r || (w(i), r = !0);
    },
    o(s) {
      B(i), r = !1;
    },
    d(s) {
      s && M(t), i && i.d(s);
    }
  };
}
function Gc(e, t, r) {
  let i;
  oe(e, Ye, (o) => r(1, i = o));
  let { filters: n } = t, s = [];
  const a = (o) => (n.suggestions[o] ?? []).map((l) => {
    const c = i(`filters.${o}.values.${l}`);
    return console.log("trans:", c), c || l;
  }).join(", ");
  return e.$$set = (o) => {
    "filters" in o && r(3, n = o.filters);
  }, e.$$.update = () => {
    var o;
    e.$$.dirty & /*filters*/
    8 && r(0, s = ((o = n == null ? void 0 : n.notApplied) == null ? void 0 : o.slice(0, 4)) || []);
  }, [s, i, a, n];
}
class _s extends K {
  constructor(t) {
    super(), X(this, t, Gc, qc, J, { filters: 3 }, Ec);
  }
  get filters() {
    return this.$$.ctx[3];
  }
  set filters(t) {
    this.$$set({ filters: t }), P();
  }
}
Q(_s, { filters: {} }, [], [], !0);
const Wc = _s, Ac = (e) => ["it", "de", "fr", "en"].includes(e), Jc = {
  placeholder: "How can I help you organizing your event?",
  placeholder_followup: "Do you want to add more details?"
}, Xc = "New search", Qc = {
  show: "Show your queries"
}, Kc = "{count, plural, =0 {no results} =1 {{count} result} other {{count} results}}", Yc = "No results", Zc = "Show more", eu = {
  verified_bookings: "Verified bookings",
  reviews: "Reviews",
  from: "from",
  on_request: "on request",
  show_more: "Show more"
}, tu = "To obtain more relevant results, you could try adding", ru = {
  SHOW_TYPE: {
    label: "Event category",
    values: {
      1: "Corporate event",
      2: "Wedding",
      3: "Party",
      4: "Birthday",
      6: "Club event",
      7: "Festival",
      8: "Religious ceremony",
      9: "Ceremony",
      13: "Seasonal event",
      16: "Ambient music",
      17: "Party for kids",
      18: "Event for bar/restaurant",
      19: "Event for hotel",
      20: "Retirement home",
      999: "Other"
    }
  },
  ARTIST_TYPE: {
    label: "Artist type",
    values: {
      1: "Band",
      2: "Musician",
      3: "DJ",
      4: "Ensemble",
      5: "Entertainer",
      6: "Magician",
      7: "Speaker",
      8: "Dancer",
      9: "Photographer",
      10: "Event rental",
      11: "Event services",
      12: "Team building",
      13: "Packages"
    }
  },
  ARTIST_SUB_TYPE: {
    label: "Specific type",
    values: {
      1: "Big Band",
      2: "Steel Drum Player",
      3: "Karaoke",
      4: "Original",
      5: "Cover",
      6: "Tribute",
      7: "One Man Band",
      8: "Radio",
      9: "Lounge",
      10: "Acoustic Music",
      11: "A Cappella Group",
      12: "Quartet",
      13: "String Trio",
      14: "Guggen",
      15: "Brass Band",
      16: "Chamber Orchestra",
      17: "Classical Duo",
      18: "Orchestra",
      19: "Choir",
      20: "Percussionist",
      21: "Saxophonist",
      22: "Pianist",
      23: "Male Vocalist",
      24: "Violinist",
      25: "Flutist",
      26: "Guitarist",
      27: "Cellist",
      28: "Vocalist",
      29: "Keyboardist",
      30: "Organist",
      31: "Crooner",
      32: "Harpist",
      33: "Rapper",
      34: "Trumpeter",
      35: "Club",
      36: "Clown",
      37: "Comedian",
      38: "Balloon Sculptor",
      39: "Face Painter",
      40: "Juggler",
      41: "Walkacts",
      42: "Fire Juggler",
      43: "Caricaturist",
      44: "Santa Claus",
      45: "Living Doll",
      46: "Magician",
      47: "Mentalist",
      48: "Magic for Kids",
      49: "Presenter",
      50: "Moderator",
      51: "Actor/Actress",
      54: "Hula Dancer",
      55: "Dance Group",
      56: "Country Dancer",
      57: "Hip Hop Dancer",
      58: "Tap Dancer",
      59: "Flamenco Dancer",
      60: "Tango Dancer",
      61: "Latin Music Dancer",
      62: "Vintage",
      63: "Belly Dancer",
      64: "Other",
      65: "Ventriloquist",
      66: "Acrobats",
      67: "Bagpipes",
      68: "Alpine Horn",
      69: "Harmonica",
      70: "Horn",
      71: "VJ",
      72: "Athletics Speaker",
      73: "Business Speaker",
      74: "Celebrity Speaker",
      75: "Corporate Speaker",
      76: "Inspirational Speaker",
      77: "Motivational Speaker",
      78: "Sports Commentator",
      79: "Cabaret",
      80: "Lookalike",
      81: "Mariachi",
      82: "Percussion",
      83: "Woodwinds",
      84: "Duo",
      85: "Trio",
      86: "Pan Flute",
      87: "Piano Bar",
      88: "Accordion",
      89: "Body Painter",
      90: "String Quartet and Similar",
      91: "Party DJ",
      92: "Background DJ",
      93: "DJ with Live Instruments",
      94: "DJ with Singer",
      95: "DJ with Karaoke",
      96: "Pop Rock Party Band",
      97: "Schlager Oldies",
      98: "Gala Band/Dance Orchestra",
      99: "Rockabilly Party Band",
      100: "Irish Party Band",
      101: "Country Party Band",
      102: "Latin American Party Band",
      103: "Jazz Band",
      104: "Folk Music",
      105: "Ticinese Music",
      106: "German Music",
      107: "Italian Music",
      108: "Semi-Acoustic Duo/Trio (Voice and Guitar)",
      109: "Semi-Acoustic Duo/Trio (Voice and Piano)",
      110: "Semi-Acoustic Duo/Trio (Instrumental)",
      111: "Solo (Voice and Guitar)",
      112: "Solo (Voice and Piano)",
      113: "One-Man Band",
      114: "Female Vocalist",
      115: "Photographer",
      116: "Wedding Photographer",
      118: "Videographer",
      119: "Wedding Videographer",
      120: "Inflatable Castles",
      121: "Inflatables for Parties",
      122: "Photo Booth Rental",
      123: "Bartender",
      124: "Catering",
      125: "Food Trucks",
      126: "Sommelier",
      127: "Event Planner",
      128: "Wedding Planner",
      129: "Event Limousine",
      130: "Event Bus",
      131: "Sports and Games",
      132: "Nature Experiences",
      133: "Team Event",
      134: "Experience",
      135: "Packages"
    }
  },
  ARTIST_GENRE: {
    label: "Genre",
    values: {
      1: "Pop",
      2: "Rock",
      3: "Electro",
      4: "RnB",
      5: "Metal",
      6: "House/Techno",
      7: "Hip Hop",
      8: "Punk",
      9: "Disco/Dance",
      10: "Rap",
      11: "Alternative",
      12: "Jazz",
      13: "Latin",
      14: "Folk",
      15: "Classical",
      16: "Reggae",
      17: "Funk",
      18: "Christian/Gospel",
      19: "Country",
      20: "Ska",
      21: "World Music",
      22: "Blues",
      23: "Other",
      24: "Lounge",
      25: "Soul",
      26: "Swing",
      27: "Rockabilly",
      28: "Dance Music",
      29: "Folk Music",
      30: "Schlager",
      31: "Oldie Bands",
      32: "Celtic",
      33: "Irish",
      34: "Twenties",
      35: "Thirties",
      36: "Forties",
      37: "Fifties",
      38: "Sixties",
      39: "Seventies",
      40: "Eighties",
      41: "Nineties",
      42: "African",
      43: "Ambient",
      44: "Flamenco",
      45: "Fusion",
      46: "Greek",
      47: "Groove",
      48: "Grunge",
      49: "Gypsy",
      50: "Hawaiian",
      51: "Honky Tonk",
      52: "Indie",
      53: "Industrial",
      54: "Italian",
      55: "Jam",
      56: "Middle Eastern",
      58: "New Age",
      59: "Polka",
      60: "Ragtime",
      61: "Salsa/Merengue",
      62: "Southern Rock",
      63: "Surf/Beach",
      64: "Bluegrass",
      65: "Brazilian",
      66: "Caribbean",
      67: "Cuban",
      68: "Tango",
      69: "Christmas",
      70: "Meditational",
      71: "Opera",
      72: "Chamber Music",
      73: "Kids Music",
      74: "Ticinese",
      75: "Jodel",
      76: "Hard Rock",
      77: "Mundart"
    }
  },
  WHEN: {
    label: "When",
    values: {
      suggestion: 'Try inserting a temporal "hint": a date, a range of dates, or "end of August"'
    }
  },
  LOCATION: {
    label: "Where",
    values: {
      zurich: "Zürich",
      geneva: "Geneva",
      basel: "Basel",
      lausanne: "Lausanne",
      bern: "Bern",
      lucerne: "Lucerne",
      lugano: "Lugano"
    }
  }
}, iu = {
  search_input: Jc,
  new_search: Xc,
  user_queries: Qc,
  results: Kc,
  no_results: Yc,
  show_more: Zc,
  result: eu,
  suggestions_tip: tu,
  filters: ru
}, nu = {
  placeholder: "Wie kann ich Ihnen bei der Organisation Ihrer Veranstaltung helfen?",
  placeholder_followup: "Möchten Sie weitere Details hinzufügen?"
}, su = "eue Suche", au = {
  show: "Zeige deine Anfragen"
}, ou = "{count, plural, =0 {keine Ergebnisse} =1 {{count} Ergebnis} other {{count} Ergebnis}}", lu = "Keine Ergebnisse", cu = "Mehr anzeigen", uu = {
  verified_bookings: "geprüfte Buchungen",
  reviews: "Bewertungen",
  from: "ab",
  on_request: "auf Anfrage",
  show_more: "Mehr anzeigen"
}, fu = "Um relevantere Ergebnisse zu erhalten, könnten Sie versuchen, hinzuzufügen", hu = {
  SHOW_TYPE: {
    label: "Veranstaltungs-kategorie",
    values: {
      1: "Firmenveranstaltung",
      2: "Hochzeit",
      3: "Party",
      4: "Geburtstag",
      6: "Clubveranstaltung",
      7: "Festival",
      8: "Religiöse Zeremonie",
      9: "Zeremonie",
      13: "Saisonale Veranstaltung",
      16: "Ambient-Musik",
      17: "Kinderparty",
      18: "Veranstaltung für Bar/Restaurant",
      19: "Veranstaltung für Hotel",
      20: "Altersheim",
      999: "Andere"
    }
  },
  ARTIST_TYPE: {
    label: "Art des Unterhalters",
    values: {
      1: "Band",
      2: "Musiker",
      3: "DJ",
      4: "Ensemble",
      5: "Entertainer",
      6: "Zauberer",
      7: "Redner",
      8: "Tänzer",
      9: "Fotograf",
      10: "Eventvermietung",
      11: "Eventdienstleistungen",
      12: "Teambuilding",
      13: "Pakete"
    }
  },
  ARTIST_SUB_TYPE: {
    label: "Spezifische Art",
    values: {
      1: "Big Band",
      2: "Steel Drum Spieler",
      3: "Karaoke",
      4: "Original",
      5: "Cover",
      6: "Tribute",
      7: "One Man Band",
      8: "Radio",
      9: "Lounge",
      10: "Akustische Musik",
      11: "A Cappella Gruppe",
      12: "Quartett",
      13: "Streichtrio",
      14: "Guggen",
      15: "Blaskapelle",
      16: "Kammerorchester",
      17: "Klassisches Duo",
      18: "Orchester",
      19: "Chor",
      20: "Perkussionist",
      21: "Saxophonist",
      22: "Pianist",
      23: "Männlicher Sänger",
      24: "Geiger",
      25: "Flötist",
      26: "Gitarrist",
      27: "Cellist",
      28: "Sänger",
      29: "Keyboarder",
      30: "Organist",
      31: "Crooner",
      32: "Harfenist",
      33: "Rapper",
      34: "Trompeter",
      35: "Club",
      36: "Clown",
      37: "Komiker",
      38: "Ballonkünstler",
      39: "Gesichtsmaler",
      40: "Jongleur",
      41: "Walkacts",
      42: "Feuerjongleur",
      43: "Karikaturist",
      44: "Weihnachtsmann",
      45: "Lebende Puppe",
      46: "Zauberer",
      47: "Mentalist",
      48: "Zauberei für Kinder",
      49: "Moderator",
      50: "Moderator",
      51: "Schauspieler/Schauspielerin",
      54: "Hula-Tänzer",
      55: "Tanzgruppe",
      56: "Country-Tänzer",
      57: "Hip-Hop-Tänzer",
      58: "Stepptänzer",
      59: "Flamenco-Tänzer",
      60: "Tango-Tänzer",
      61: "Lateinamerikanischer Tänzer",
      62: "Vintage",
      63: "Bauchtänzerin",
      64: "Andere",
      65: "Bauchredner",
      66: "Akrobaten",
      67: "Dudelsackspieler",
      68: "Alphorn",
      69: "Mundharmonika",
      70: "Horn",
      71: "VJ",
      72: "Sportsprecher",
      73: "Geschäftsredner",
      74: "Prominenter Redner",
      75: "Firmenredner",
      76: "Inspirationsredner",
      77: "Motivationsredner",
      78: "Sportkommentator",
      79: "Kabarett",
      80: "Doppelgänger",
      81: "Mariachi",
      82: "Perkussion",
      83: "Holzbläser",
      84: "Duo",
      85: "Trio",
      86: "Panflöte",
      87: "Piano Bar",
      88: "Akkordeon",
      89: "Körpermaler",
      90: "Streichquartett und Ähnliches",
      91: "Party-DJ",
      92: "Hintergrund-DJ",
      93: "DJ mit Live-Instrumenten",
      94: "DJ mit Sänger",
      95: "DJ mit Karaoke",
      96: "Pop-Rock-Party-Band",
      97: "Schlager Oldies",
      98: "Gala-Band/Tanzorchester",
      99: "Rockabilly-Party-Band",
      100: "Irische Party-Band",
      101: "Country-Party-Band",
      102: "Lateinamerikanische Party-Band",
      103: "Jazz-Band",
      104: "Volksmusik",
      105: "Tessiner Musik",
      106: "Deutsche Musik",
      107: "Italienische Musik",
      108: "Semi-Akustisches Duo/Trio (Gesang und Gitarre)",
      109: "Semi-Akustisches Duo/Trio (Gesang und Klavier)",
      110: "Semi-Akustisches Duo/Trio (Instrumental)",
      111: "Solo (Gesang und Gitarre)",
      112: "Solo (Gesang und Klavier)",
      113: "One-Man-Band",
      114: "Weibliche Sängerin",
      115: "Fotograf",
      116: "Hochzeitsfotograf",
      118: "Videograf",
      119: "Hochzeitsvideograf",
      120: "Hüpfburgen",
      121: "Hüpfburgen für Partys",
      122: "Fotokabinenverleih",
      123: "Barkeeper",
      124: "Catering",
      125: "Food Trucks",
      126: "Sommelier",
      127: "Eventplaner",
      128: "Hochzeitsplaner",
      129: "Event-Limousine",
      130: "Event-Bus",
      131: "Sport und Spiele",
      132: "Naturerlebnisse",
      133: "Teamevent",
      134: "Erlebnis",
      135: "Pakete"
    }
  },
  ARTIST_GENRE: {
    label: "Genre",
    values: {
      1: "Pop",
      2: "Rock",
      3: "Elektro",
      4: "RnB",
      5: "Metal",
      6: "House/Techno",
      7: "Hip-Hop",
      8: "Punk",
      9: "Disco/Dance",
      10: "Rap",
      11: "Alternative",
      12: "Jazz",
      13: "Latin",
      14: "Folk",
      15: "Klassik",
      16: "Reggae",
      17: "Funk",
      18: "Christliche Musik/Gospel",
      19: "Country",
      20: "Ska",
      21: "Weltmusik",
      22: "Blues",
      23: "Andere",
      24: "Lounge",
      25: "Soul",
      26: "Swing",
      27: "Rockabilly",
      28: "Tanzmusik",
      29: "Volksmusik",
      30: "Schlager",
      31: "Oldie-Bands",
      32: "Keltische Musik",
      33: "Irische Musik",
      34: "Zwanziger Jahre",
      35: "Dreißiger Jahre",
      36: "Vierziger Jahre",
      37: "Fünfziger Jahre",
      38: "Sechziger Jahre",
      39: "Siebziger Jahre",
      40: "Achtziger Jahre",
      41: "Neunziger Jahre",
      42: "Afrikanische Musik",
      43: "Ambient",
      44: "Flamenco",
      45: "Fusion",
      46: "Griechische Musik",
      47: "Groove",
      48: "Grunge",
      49: "Zigeunermusik",
      50: "Hawaiianische Musik",
      51: "Honky Tonk",
      52: "Indie",
      53: "Industrial",
      54: "Italienische Musik",
      55: "Jam",
      56: "Nahöstliche Musik",
      58: "New Age",
      59: "Polka",
      60: "Ragtime",
      61: "Salsa/Merengue",
      62: "Southern Rock",
      63: "Surf/Beach",
      64: "Bluegrass",
      65: "Brasilianische Musik",
      66: "Karibische Musik",
      67: "Kubanische Musik",
      68: "Tango",
      69: "Weihnachtsmusik",
      70: "Meditationsmusik",
      71: "Oper",
      72: "Kammermusik",
      73: "Kindermusik",
      74: "Tessiner Musik",
      75: "Jodel",
      76: "Hard Rock",
      77: "Mundart"
    }
  },
  WHEN: {
    label: "Wann",
    values: {
      suggestion: 'Prova ad inserire un "suggerimento" temporale: una data, un range di date, o "fine agosto"'
    }
  },
  LOCATION: {
    label: "Wo",
    values: {
      zurich: "Zürich",
      geneva: "Genf",
      basel: "Basel",
      lausanne: "Lausanne",
      bern: "Bern",
      lucerne: "Luzern",
      lugano: "Lugano"
    }
  }
}, du = {
  search_input: nu,
  new_search: su,
  user_queries: au,
  results: ou,
  no_results: lu,
  show_more: cu,
  result: uu,
  suggestions_tip: fu,
  filters: hu
}, gu = {
  placeholder: "Comment puis-je vous aider à organiser votre événement?",
  placeholder_followup: "Voulez-vous ajouter plus de détails?"
}, mu = "Nouvelle recherche", pu = {
  show: "Affiche tes recherches"
}, _u = "{count, plural, =0 {aucun résultat} =1 {{count} résultat} other {{count} résultats}}", vu = "Aucun résultat", bu = "Voir plus", wu = {
  verified_bookings: "Bookings verifié",
  reviews: "Avis",
  from: "de",
  on_request: "sur demande",
  show_more: "Voir plus"
}, ku = "Pour obtenir des résultats plus pertinents, vous pourriez essayer d'ajouter", yu = {
  SHOW_TYPE: {
    label: "Catégorie d'événement",
    values: {
      1: "Événement d'entreprise",
      2: "Mariage",
      3: "Fête",
      4: "Anniversaire",
      6: "Événement en club",
      7: "Festival",
      8: "Cérémonie religieuse",
      9: "Cérémonie",
      13: "Événement saisonnier",
      16: "Musique d'ambiance",
      17: "Fête pour enfants",
      18: "Événement pour bar/restaurant",
      19: "Événement pour hôtel",
      20: "Maison de retraite",
      999: "Autre"
    }
  },
  ARTIST_TYPE: {
    label: "Genre d'artiste",
    values: {
      1: "Groupe",
      2: "Musicien",
      3: "DJ",
      4: "Ensemble",
      5: "Animateur",
      6: "Magicien",
      7: "Orateur",
      8: "Danseur",
      9: "Photographe",
      10: "Location d'événements",
      11: "Services événementiels",
      12: "Team building",
      13: "Forfaits"
    }
  },
  ARTIST_SUB_TYPE: {
    label: "Type spécifique",
    values: {
      1: "Grand orchestre",
      2: "Joueur de steel drum",
      3: "Karaoké",
      4: "Original",
      5: "Reprise",
      6: "Hommage",
      7: "Homme-orchestre",
      8: "Radio",
      9: "Lounge",
      10: "Musique acoustique",
      11: "Groupe a cappella",
      12: "Quatuor",
      13: "Trio à cordes",
      14: "Guggenmusik",
      15: "Fanfare",
      16: "Orchestre de chambre",
      17: "Duo classique",
      18: "Orchestre",
      19: "Chorale",
      20: "Percussionniste",
      21: "Saxophoniste",
      22: "Pianiste",
      23: "Chanteur",
      24: "Violoniste",
      25: "Flûtiste",
      26: "Guitariste",
      27: "Violoncelliste",
      28: "Chanteur/Chanteuse",
      29: "Claviériste",
      30: "Organiste",
      31: "Crooner",
      32: "Harpiste",
      33: "Rappeur",
      34: "Trompettiste",
      35: "Club",
      36: "Clown",
      37: "Comédien",
      38: "Sculpteur de ballons",
      39: "Maquilleur pour enfants",
      40: "Jongleur",
      41: "Artistes déambulatoires",
      42: "Jongleur de feu",
      43: "Caricaturiste",
      44: "Père Noël",
      45: "Statue vivante",
      46: "Magicien",
      47: "Mentaliste",
      48: "Magie pour enfants",
      49: "Présentateur",
      50: "Modérateur",
      51: "Acteur/Actrice",
      54: "Danseur de hula",
      55: "Groupe de danse",
      56: "Danseur country",
      57: "Danseur hip-hop",
      58: "Danseur de claquettes",
      59: "Danseur de flamenco",
      60: "Danseur de tango",
      61: "Danseur de musique latine",
      62: "Vintage",
      63: "Danseur du ventre",
      64: "Autre",
      65: "Ventriloque",
      66: "Acrobates",
      67: "Cornemuse",
      68: "Cor des Alpes",
      69: "Harmonica",
      70: "Cor",
      71: "VJ",
      72: "Conférencier sportif",
      73: "Conférencier d'affaires",
      74: "Conférencier célèbre",
      75: "Conférencier d'entreprise",
      76: "Conférencier inspirant",
      77: "Conférencier motivateur",
      78: "Commentateur sportif",
      79: "Cabaret",
      80: "Sosie",
      81: "Mariachi",
      82: "Percussion",
      83: "Instruments à vent",
      84: "Duo",
      85: "Trio",
      86: "Flûte de Pan",
      87: "Piano-bar",
      88: "Accordéon",
      89: "Body painter",
      90: "Quatuor à cordes et similaires",
      91: "DJ de soirée",
      92: "DJ d'ambiance",
      93: "DJ avec instruments live",
      94: "DJ avec chanteur",
      95: "DJ avec karaoké",
      96: "Groupe de fête pop-rock",
      97: "Schlager et oldies",
      98: "Orchestre de gala/danse",
      99: "Groupe de fête rockabilly",
      100: "Groupe de fête irlandais",
      101: "Groupe de fête country",
      102: "Groupe de fête latino-américain",
      103: "Groupe de jazz",
      104: "Musique folklorique",
      105: "Musique tessinoise",
      106: "Musique allemande",
      107: "Musique italienne",
      108: "Duo/Trio semi-acoustique (voix et guitare)",
      109: "Duo/Trio semi-acoustique (voix et piano)",
      110: "Duo/Trio semi-acoustique (instrumental)",
      111: "Solo (voix et guitare)",
      112: "Solo (voix et piano)",
      113: "Homme-orchestre",
      114: "Chanteuse",
      115: "Photographe",
      116: "Photographe de mariage",
      118: "Vidéaste",
      119: "Vidéaste de mariage",
      120: "Châteaux gonflables",
      121: "Structures gonflables pour fêtes",
      122: "Location de photomaton",
      123: "Barman",
      124: "Traiteur",
      125: "Food trucks",
      126: "Sommelier",
      127: "Organisateur d'événements",
      128: "Organisateur de mariage",
      129: "Limousine pour événements",
      130: "Bus pour événements",
      131: "Sports et jeux",
      132: "Expériences nature",
      133: "Événement d'équipe",
      134: "Expérience",
      135: "Forfaits"
    }
  },
  ARTIST_GENRE: {
    label: "Genre",
    values: {
      1: "Pop",
      2: "Rock",
      3: "Électro",
      4: "RnB",
      5: "Métal",
      6: "House/Techno",
      7: "Hip Hop",
      8: "Punk",
      9: "Disco/Dance",
      10: "Rap",
      11: "Alternative",
      12: "Jazz",
      13: "Latine",
      14: "Folk",
      15: "Classique",
      16: "Reggae",
      17: "Funk",
      18: "Chrétienne/Gospel",
      19: "Country",
      20: "Ska",
      21: "Musique du Monde",
      22: "Blues",
      23: "Autre",
      24: "Lounge",
      25: "Soul",
      26: "Swing",
      27: "Rockabilly",
      28: "Musique de Danse",
      29: "Musique Folk",
      30: "Schlager",
      31: "Groupes Oldies",
      32: "Celtique",
      33: "Irlandaise",
      34: "Années Vingt",
      35: "Années Trente",
      36: "Années Quarante",
      37: "Années Cinquante",
      38: "Années Soixante",
      39: "Années Soixante-dix",
      40: "Années Quatre-vingt",
      41: "Années Quatre-vingt-dix",
      42: "Africaine",
      43: "Ambiante",
      44: "Flamenco",
      45: "Fusion",
      46: "Grecque",
      47: "Groove",
      48: "Grunge",
      49: "Tzigane",
      50: "Hawaïenne",
      51: "Honky Tonk",
      52: "Indie",
      53: "Industrielle",
      54: "Italienne",
      55: "Jam",
      56: "Moyen-Orientale",
      58: "New Age",
      59: "Polka",
      60: "Ragtime",
      61: "Salsa/Merengue",
      62: "Southern Rock",
      63: "Surf/Beach",
      64: "Bluegrass",
      65: "Brésilienne",
      66: "Caribéenne",
      67: "Cubaine",
      68: "Tango",
      69: "Noël",
      70: "Méditative",
      71: "Opéra",
      72: "Musique de Chambre",
      73: "Musique pour Enfants",
      74: "Tessinoise",
      75: "Jodel",
      76: "Hard Rock",
      77: "Mundart"
    }
  },
  WHEN: {
    label: "Quand",
    values: {
      suggestion: `Essayez d'insérer une "suggestion" temporelle : une date, une plage de dates, ou "fin août"`
    }
  },
  LOCATION: {
    label: "Où",
    values: {
      zurich: "Zurich",
      geneva: "Genève",
      basel: "Bâle",
      lausanne: "Lausanne",
      bern: "Berne",
      lucerne: "Lucerne",
      lugano: "Lugano"
    }
  }
}, Bu = {
  search_input: gu,
  new_search: mu,
  user_queries: pu,
  results: _u,
  no_results: vu,
  show_more: bu,
  result: wu,
  suggestions_tip: ku,
  filters: yu
}, Pu = {
  placeholder: "Come posso aiutarti ad organizzare il tuo evento?",
  placeholder_followup: "Hai altri dettagli da aggiungere?"
}, Cu = "Nuova ricerca", Mu = {
  show: "Visualizza le tue ricerche"
}, Hu = "{count, plural, =0 {nessun risultato} =1 {{count} risultato} other {{count} risultati}}", Ou = "Nessun risultato", xu = "Mostra di più", Nu = {
  verified_bookings: "Bookings verificati",
  reviews: "Recensioni",
  from: "da",
  on_request: "su richiesta",
  show_more: "Mostra di più"
}, Lu = "Per ottenere risultati più pertinenti potresti provare ad aggiungere", Iu = {
  SHOW_TYPE: {
    label: "Categoria di evento",
    values: {
      1: "Evento aziendale",
      2: "Matrimonio",
      3: "Festa",
      4: "Compleanno",
      6: "Evento in discoteca",
      7: "Festival",
      8: "Cerimonia religiosa",
      9: "Cerimonia",
      13: "Evento stagionale",
      16: "Musica d'ambiente",
      17: "Festa per bambini",
      18: "Evento per bar/ristorante",
      19: "Evento per hotel",
      20: "Casa di riposo",
      999: "Altro"
    }
  },
  ARTIST_TYPE: {
    label: "Tipo di artista",
    values: {
      1: "Banda",
      2: "Musicista",
      3: "DJ",
      4: "Ensemble",
      5: "Intrattenitore",
      6: "Mago",
      7: "Oratore",
      8: "Ballerino",
      9: "Fotografo",
      10: "Noleggio eventi",
      11: "Servizi per eventi",
      12: "Team building",
      13: "Pacchetti"
    }
  },
  ARTIST_SUB_TYPE: {
    label: "Tipo specifico",
    values: {
      1: "Big Band",
      2: "Suonatore di Steel Drum",
      3: "Karaoke",
      4: "Originale",
      5: "Cover",
      6: "Tributo",
      7: "One Man Band",
      8: "Radio",
      9: "Lounge",
      10: "Musica Acustica",
      11: "Gruppo A Cappella",
      12: "Quartetto",
      13: "Trio d'Archi",
      14: "Guggen",
      15: "Banda di Ottoni",
      16: "Orchestra da Camera",
      17: "Duo Classico",
      18: "Orchestra",
      19: "Coro",
      20: "Percussionista",
      21: "Sassofonista",
      22: "Pianista",
      23: "Cantante Maschile",
      24: "Violinista",
      25: "Flautista",
      26: "Chitarrista",
      27: "Violoncellista",
      28: "Cantante",
      29: "Tastierista",
      30: "Organista",
      31: "Crooner",
      32: "Arpista",
      33: "Rapper",
      34: "Trombettista",
      35: "Club",
      36: "Clown",
      37: "Comico",
      38: "Scultore di Palloncini",
      39: "Truccabimbi",
      40: "Giocoliere",
      41: "Walkacts",
      42: "Giocoliere di Fuoco",
      43: "Caricaturista",
      44: "Babbo Natale",
      45: "Bambola Vivente",
      46: "Mago",
      47: "Mentalista",
      48: "Magia per Bambini",
      49: "Presentatore",
      50: "Moderatore",
      51: "Attore/Attrice",
      54: "Ballerino Hula",
      55: "Gruppo di Ballo",
      56: "Ballerino Country",
      57: "Ballerino Hip Hop",
      58: "Ballerino Tip Tap",
      59: "Ballerino Flamenco",
      60: "Ballerino Tango",
      61: "Ballerino di Musica Latina",
      62: "Vintage",
      63: "Ballerina del Ventre",
      64: "Altro",
      65: "Ventriloquo",
      66: "Acrobati",
      67: "Cornamuse",
      68: "Corno Alpino",
      69: "Armonica",
      70: "Corno",
      71: "VJ",
      72: "Oratore di Atletica",
      73: "Oratore d'Affari",
      74: "Oratore Celebrità",
      75: "Oratore Aziendale",
      76: "Oratore Ispirazionale",
      77: "Oratore Motivazionale",
      78: "Commentatore Sportivo",
      79: "Cabaret",
      80: "Sosia",
      81: "Mariachi",
      82: "Percussioni",
      83: "Legni",
      84: "Duo",
      85: "Trio",
      86: "Flauto di Pan",
      87: "Piano Bar",
      88: "Fisarmonica",
      89: "Body Painter",
      90: "Quartetto d'Archi e Simili",
      91: "DJ per Feste",
      92: "DJ di Sottofondo",
      93: "DJ con Strumenti dal Vivo",
      94: "DJ con Cantante",
      95: "DJ con Karaoke",
      96: "Band Pop Rock per Feste",
      97: "Schlager Oldies",
      98: "Band da Gala/Orchestra da Ballo",
      99: "Band Rockabilly per Feste",
      100: "Band Irlandese per Feste",
      101: "Band Country per Feste",
      102: "Band Latino-Americana per Feste",
      103: "Band Jazz",
      104: "Musica Folk",
      105: "Musica Ticinese",
      106: "Musica Tedesca",
      107: "Musica Italiana",
      108: "Duo/Trio Semi-Acustico (Voce e Chitarra)",
      109: "Duo/Trio Semi-Acustico (Voce e Pianoforte)",
      110: "Duo/Trio Semi-Acustico (Strumentale)",
      111: "Solo (Voce e Chitarra)",
      112: "Solo (Voce e Pianoforte)",
      113: "One-Man Band",
      114: "Cantante Femminile",
      115: "Fotografo",
      116: "Fotografo di Matrimoni",
      118: "Videografo",
      119: "Videografo di Matrimoni",
      120: "Castelli Gonfiabili",
      121: "Gonfiabili per Feste",
      122: "Noleggio Cabina Fotografica",
      123: "Barista",
      124: "Catering",
      125: "Food Trucks",
      126: "Sommelier",
      127: "Organizzatore di Eventi",
      128: "Organizzatore di Matrimoni",
      129: "Limousine per Eventi",
      130: "Bus per Eventi",
      131: "Sport e Giochi",
      132: "Esperienze nella Natura",
      133: "Evento di Squadra",
      134: "Esperienza",
      135: "Pacchetti"
    }
  },
  ARTIST_GENRE: {
    label: "Genere",
    values: {
      1: "Pop",
      2: "Rock",
      3: "Electro",
      4: "RnB",
      5: "Metal",
      6: "House/Techno",
      7: "Hip Hop",
      8: "Punk",
      9: "Disco/Dance",
      10: "Rap",
      11: "Alternativa",
      12: "Jazz",
      13: "Latina",
      14: "Folk",
      15: "Classica",
      16: "Reggae",
      17: "Funk",
      18: "Cristiana/Gospel",
      19: "Country",
      20: "Ska",
      21: "Musica del Mondo",
      22: "Blues",
      23: "Altro",
      24: "Lounge",
      25: "Soul",
      26: "Swing",
      27: "Rockabilly",
      28: "Musica da Ballo",
      29: "Musica Folk",
      30: "Schlager",
      31: "Band Oldies",
      32: "Celtica",
      33: "Irlandese",
      34: "Anni Venti",
      35: "Anni Trenta",
      36: "Anni Quaranta",
      37: "Anni Cinquanta",
      38: "Anni Sessanta",
      39: "Anni Settanta",
      40: "Anni Ottanta",
      41: "Anni Novanta",
      42: "Africana",
      43: "Ambient",
      44: "Flamenco",
      45: "Fusion",
      46: "Greca",
      47: "Groove",
      48: "Grunge",
      49: "Gitana",
      50: "Hawaiana",
      51: "Honky Tonk",
      52: "Indie",
      53: "Industriale",
      54: "Italiana",
      55: "Jam",
      56: "Mediorientale",
      58: "New Age",
      59: "Polka",
      60: "Ragtime",
      61: "Salsa/Merengue",
      62: "Southern Rock",
      63: "Surf/Beach",
      64: "Bluegrass",
      65: "Brasiliana",
      66: "Caraibica",
      67: "Cubana",
      68: "Tango",
      69: "Natale",
      70: "Meditativa",
      71: "Opera",
      72: "Musica da Camera",
      73: "Musica per Bambini",
      74: "Ticinese",
      75: "Jodel",
      76: "Hard Rock",
      77: "Mundart"
    }
  },
  WHEN: {
    label: "Quando",
    values: {
      suggestion: 'Prova ad inserire un "suggerimento" temporale: una data, un range di date, o "fine agosto"'
    }
  },
  LOCATION: {
    label: "Dove",
    values: {
      zurich: "Zurigo",
      geneva: "Ginevra",
      basel: "Basilea",
      lausanne: "Losanna",
      bern: "Berna",
      lucerne: "Lucerna",
      lugano: "Lugano"
    }
  }
}, Su = {
  search_input: Pu,
  new_search: Cu,
  user_queries: Mu,
  results: Hu,
  no_results: Ou,
  show_more: xu,
  result: Nu,
  suggestions_tip: Lu,
  filters: Iu
};
sr("en", () => Promise.resolve(iu));
sr("de", () => Promise.resolve(du));
sr("fr", () => Promise.resolve(Bu));
sr("it", () => Promise.resolve(Su));
const Ru = (e) => {
  bo({
    fallbackLocale: "en",
    initialLocale: e || Oo()
  });
};
function $u(e) {
  let t, r;
  return t = new ns({}), {
    c() {
      E(t.$$.fragment);
    },
    m(i, n) {
      U(t, i, n), r = !0;
    },
    p: q,
    i(i) {
      r || (w(t.$$.fragment, i), r = !0);
    },
    o(i) {
      B(t.$$.fragment, i), r = !1;
    },
    d(i) {
      V(t, i);
    }
  };
}
function Du(e, t, r) {
  let { baseUrl: i } = t, { language: n } = t;
  return Qe(async () => {
    !Ac(n) && String(n) === "ch" && r(0, n = "de"), Ru(n), Pe.setBaseUrl(i), await Pe.start({ language: n });
  }), e.$$set = (a) => {
    "baseUrl" in a && r(1, i = a.baseUrl), "language" in a && r(0, n = a.language);
  }, [n, i];
}
class vs extends K {
  constructor(t) {
    super(), X(this, t, Du, $u, J, { baseUrl: 1, language: 0 });
  }
  get baseUrl() {
    return this.$$.ctx[1];
  }
  set baseUrl(t) {
    this.$$set({ baseUrl: t }), P();
  }
  get language() {
    return this.$$.ctx[0];
  }
  set language(t) {
    this.$$set({ language: t }), P();
  }
}
customElements.define("stg-ai-search-app-shell", Q(vs, { baseUrl: { reflect: !0, type: "String", attribute: "base-url" }, language: { reflect: !0, type: "String", attribute: "language" } }, [], [], !1));
const mf = vs;
function Xi(e) {
  let t, r;
  return t = new Bc({}), t.$on(
    "click",
    /*newSearch*/
    e[1]
  ), {
    c() {
      E(t.$$.fragment);
    },
    m(i, n) {
      U(t, i, n), r = !0;
    },
    p: q,
    i(i) {
      r || (w(t.$$.fragment, i), r = !0);
    },
    o(i) {
      B(t.$$.fragment, i), r = !1;
    },
    d(i) {
      V(t, i);
    }
  };
}
function Fu(e) {
  let t, r, i = (
    /*$userQueriesStore*/
    e[0].length && Xi(e)
  );
  return {
    c() {
      i && i.c(), t = ve();
    },
    m(n, s) {
      i && i.m(n, s), O(n, t, s), r = !0;
    },
    p(n, [s]) {
      /*$userQueriesStore*/
      n[0].length ? i ? (i.p(n, s), s & /*$userQueriesStore*/
      1 && w(i, 1)) : (i = Xi(n), i.c(), w(i, 1), i.m(t.parentNode, t)) : i && (ee(), B(i, 1, 1, () => {
        i = null;
      }), te());
    },
    i(n) {
      r || (w(i), r = !0);
    },
    o(n) {
      B(i), r = !1;
    },
    d(n) {
      n && M(t), i && i.d(n);
    }
  };
}
function ju(e, t, r) {
  let i;
  return oe(e, or, (s) => r(0, i = s)), [i, async () => await Pe.reset()];
}
class bs extends K {
  constructor(t) {
    super(), X(this, t, ju, Fu, J, {});
  }
}
customElements.define("stg-ai-search-new-search-button", Q(bs, {}, [], [], !1));
const zu = bs, Qi = /* @__PURE__ */ new Set([
  _e.SHOW_TYPE,
  _e.ARTIST_TYPE,
  _e.ARTIST_SUB_TYPE,
  _e.ARTIST_GENRE,
  _e.WHEN,
  _e.LOCATION
]), Tu = {
  [_e.SHOW_TYPE]: Object.values(os).filter(Number.isInteger),
  [_e.ARTIST_TYPE]: Object.values(ls).filter(Number.isInteger),
  [_e.ARTIST_SUB_TYPE]: Object.values(cs).filter(Number.isInteger),
  [_e.ARTIST_GENRE]: Object.values(us).filter(Number.isInteger),
  [_e.LOCATION]: ["zurich", "geneva", "basel", "lausanne", "bern", "lucerne", "lugano"],
  [_e.WHEN]: ["suggestion"]
}, Uu = (e) => {
  const r = Tu[e], i = /* @__PURE__ */ new Set();
  if (r.length <= 10)
    return r;
  for (; i.size < 10; ) {
    const n = Math.floor(Math.random() * r.length);
    i.add(r[n]);
  }
  return Array.from(i);
}, Vu = ze(Pe, (e) => {
  const t = {
    query: "",
    applied: [],
    notApplied: [],
    suggestions: {}
  }, r = e.currentResultsSetKey, i = r ? e.responses[r] : void 0;
  if (!r || !i)
    return t;
  const n = i.query || "", s = new Set(
    i.filters.filter((l) => Qi.has(l.f)).map((l) => l.f)
  ), a = Array.from(Qi).filter((l) => !s.has(l)), o = a.reduce((l, c) => {
    const u = c;
    return l[u] = Uu(u), l;
  }, {});
  return {
    query: n,
    applied: i.filters,
    notApplied: a,
    suggestions: o
  };
});
function Eu(e) {
  Me(e, "svelte-1iczwg0", `.wc-ai-search-floating-user-input.svelte-1iczwg0.svelte-1iczwg0{width:100%;@media (min-width: 768px) {
        padding-bottom: 0.5rem;
    }}.wc-ai-search-floating-user-input.svelte-1iczwg0>div.svelte-1iczwg0{background-color:#f2f2f6}.wc-ai-search-floating-user-input--static.svelte-1iczwg0.svelte-1iczwg0{display:flex;justify-content:center;border-radius:0.5rem;padding:0.5rem}.wc-ai-search-floating-user-input--static.svelte-1iczwg0>div.svelte-1iczwg0{flex-grow:1;border-radius:0.5rem;padding:0.1rem;@media (min-width: 768px) {
        max-width: 50vw;
    };@media (min-width: 992px) {
        max-width: 30vw;
    }}.wc-ai-search-floating-user-input--fixed.svelte-1iczwg0.svelte-1iczwg0{position:fixed;bottom:0;left:50%;transform:translateX(-50%);z-index:10;border-radius:0.5rem;border-bottom-left-radius:0;border-bottom-right-radius:0;@media (min-width: 768px) {
        max-width: 50vw;
        box-shadow: none;
        border-bottom-left-radius: 0.5rem;
        border-bottom-right-radius: 0.5rem;
    };@media (min-width: 992px) {
        max-width: 33vw;
    }}.wc-ai-search-floating-user-input--fixed.svelte-1iczwg0>div.svelte-1iczwg0{border-radius:0;border-top-left-radius:0.5rem;border-top-right-radius:0.5rem;padding:0.5rem 0.5rem 1.5rem;box-shadow:0px 5px 20px 0px rgba(0,0,0,0.5);@media (min-width: 768px) {
        border-radius: 0.5rem;
        padding-bottom: 0.5rem;
    }}.wc-ai-search-floating-user-input__actions.svelte-1iczwg0.svelte-1iczwg0{display:none}.wc-ai-search-floating-user-input--fixed.svelte-1iczwg0>div .wc-ai-search-floating-user-input__actions.svelte-1iczwg0{display:flex;justify-content:space-between;align-items:center;padding:0.5rem 0.5rem 1rem}.wc-ai-search-floating-user-input__actions__show-queries{@media (min-width: 768px) {
        display: none;
    }}.wc-ai-search-floating-user-input__suggestions.svelte-1iczwg0.svelte-1iczwg0{margin-top:0.5rem}`);
}
function Ki(e) {
  let t, r, i, n, s;
  return r = new zu({}), n = new wc({
    props: {
      class: "wc-ai-search-floating-user-input__actions__show-queries"
    }
  }), {
    c() {
      t = k("div"), E(r.$$.fragment), i = $(), E(n.$$.fragment), d(t, "class", "wc-ai-search-floating-user-input__actions svelte-1iczwg0");
    },
    m(a, o) {
      O(a, t, o), U(r, t, null), v(t, i), U(n, t, null), s = !0;
    },
    i(a) {
      s || (w(r.$$.fragment, a), w(n.$$.fragment, a), s = !0);
    },
    o(a) {
      B(r.$$.fragment, a), B(n.$$.fragment, a), s = !1;
    },
    d(a) {
      a && M(t), V(r), V(n);
    }
  };
}
function Yi(e) {
  let t, r, i;
  return r = new Wc({
    props: { filters: (
      /*$filtersStore*/
      e[2]
    ) }
  }), {
    c() {
      t = k("div"), E(r.$$.fragment), d(t, "class", "wc-ai-search-floating-user-input__suggestions svelte-1iczwg0");
    },
    m(n, s) {
      O(n, t, s), U(r, t, null), i = !0;
    },
    p(n, s) {
      const a = {};
      s & /*$filtersStore*/
      4 && (a.filters = /*$filtersStore*/
      n[2]), r.$set(a);
    },
    i(n) {
      i || (w(r.$$.fragment, n), i = !0);
    },
    o(n) {
      B(r.$$.fragment, n), i = !1;
    },
    d(n) {
      n && M(t), V(r);
    }
  };
}
function qu(e) {
  var u, h;
  let t, r, i, n, s, a, o, l = (
    /*$searchStore*/
    e[1].session && Ki()
  );
  n = new Vc({
    props: {
      isFollowup: !!/*$userQueriesStore*/
      e[0].length,
      focusTextarea: (
        /*$searchStore*/
        e[1].status === "idle"
      ),
      disableTextarea: !!~["starting", "ending", "searching"].indexOf(
        /*$searchStore*/
        e[1].status
      )
    }
  }), n.$on(
    "userInput",
    /*onUserInput*/
    e[3]
  );
  let c = (
    /*$filtersStore*/
    ((h = (u = e[2]) == null ? void 0 : u.notApplied) == null ? void 0 : h.length) && Yi(e)
  );
  return {
    c() {
      t = k("div"), r = k("div"), l && l.c(), i = $(), s = k("div"), E(n.$$.fragment), a = $(), c && c.c(), At(s, "display", "contents"), At(s, "--textarea-height", "6rem"), d(r, "class", "svelte-1iczwg0"), d(t, "class", "wc-ai-search-floating-user-input svelte-1iczwg0"), T(
        t,
        "wc-ai-search-floating-user-input--fixed",
        /*$userQueriesStore*/
        e[0].length
      ), T(t, "wc-ai-search-floating-user-input--static", !/*$userQueriesStore*/
      e[0].length);
    },
    m(f, g) {
      O(f, t, g), v(t, r), l && l.m(r, null), v(r, i), v(r, s), U(n, s, null), v(r, a), c && c.m(r, null), o = !0;
    },
    p(f, [g]) {
      var p, b;
      /*$searchStore*/
      f[1].session ? l ? g & /*$searchStore*/
      2 && w(l, 1) : (l = Ki(), l.c(), w(l, 1), l.m(r, i)) : l && (ee(), B(l, 1, 1, () => {
        l = null;
      }), te());
      const m = {};
      g & /*$userQueriesStore*/
      1 && (m.isFollowup = !!/*$userQueriesStore*/
      f[0].length), g & /*$searchStore*/
      2 && (m.focusTextarea = /*$searchStore*/
      f[1].status === "idle"), g & /*$searchStore*/
      2 && (m.disableTextarea = !!~["starting", "ending", "searching"].indexOf(
        /*$searchStore*/
        f[1].status
      )), n.$set(m), /*$filtersStore*/
      (b = (p = f[2]) == null ? void 0 : p.notApplied) != null && b.length ? c ? (c.p(f, g), g & /*$filtersStore*/
      4 && w(c, 1)) : (c = Yi(f), c.c(), w(c, 1), c.m(r, null)) : c && (ee(), B(c, 1, 1, () => {
        c = null;
      }), te()), (!o || g & /*$userQueriesStore*/
      1) && T(
        t,
        "wc-ai-search-floating-user-input--fixed",
        /*$userQueriesStore*/
        f[0].length
      ), (!o || g & /*$userQueriesStore*/
      1) && T(t, "wc-ai-search-floating-user-input--static", !/*$userQueriesStore*/
      f[0].length);
    },
    i(f) {
      o || (w(l), w(n.$$.fragment, f), w(c), o = !0);
    },
    o(f) {
      B(l), B(n.$$.fragment, f), B(c), o = !1;
    },
    d(f) {
      f && M(t), l && l.d(), V(n), c && c.d();
    }
  };
}
function Gu(e, t, r) {
  let i, n, s;
  return oe(e, or, (o) => r(0, i = o)), oe(e, Pe, (o) => r(1, n = o)), oe(e, Vu, (o) => r(2, s = o)), [i, n, s, async (o) => {
    const l = o.detail.content;
    if (l)
      return await Pe.search(l);
  }];
}
class ws extends K {
  constructor(t) {
    super(), X(this, t, Gu, qu, J, {}, Eu);
  }
}
customElements.define("stg-ai-search-floating-user-input", Q(ws, {}, [], [], !1));
const pf = ws, Wu = () => {
  const e = mt(null), t = () => {
    e.set(null);
  };
  return {
    subscribe: e.subscribe,
    set: e.set,
    stopAllVideos: t
  };
}, Sr = Wu();
function Au(e) {
  Me(e, "svelte-z78bj", ".wc-ai-search-result__play-icon.svelte-z78bj.svelte-z78bj{position:absolute;bottom:12px;right:12px;opacity:0.8}.wc-ai-search-result__video-player-iframe.svelte-z78bj.svelte-z78bj{display:none;border-radius:6px}.wc-ai-search-result__video-player-iframe--visible.svelte-z78bj.svelte-z78bj{display:block}.wc-ai-search-result__video-controls.svelte-z78bj.svelte-z78bj{display:none;position:absolute;bottom:0;left:0;width:100%;min-height:2rem;background-color:#000000;padding:0.5rem;border-radius:0 0 6px 6px}.wc-ai-search-result__video-controls--visible.svelte-z78bj.svelte-z78bj{display:block}.wc-ai-search-result__video-controls.svelte-z78bj button.svelte-z78bj{margin:0 0.2rem;min-width:31px;border-radius:6px;background-color:#ff6600;border:none}");
}
function Zi(e) {
  let t, r, i, n, s, a, o, l;
  return {
    c() {
      t = k("button"), r = k("img"), d(r, "class", "card-img-top"), d(r, "id", i = "thumbnail-" + /*result*/
      e[0].id), d(r, "itemprop", "image"), Br(r.src, n = /*result*/
      e[0].imageUrl) || d(r, "src", n), d(r, "alt", s = /*result*/
      e[0].displayName), d(r, "title", a = /*getTitle*/
      e[3](
        /*result*/
        e[0]
      )), d(t, "class", ie(pe.glyphButton) + " svelte-z78bj");
    },
    m(c, u) {
      O(c, t, u), v(t, r), o || (l = Z(
        t,
        "click",
        /*click_handler*/
        e[10]
      ), o = !0);
    },
    p(c, u) {
      u & /*result*/
      1 && i !== (i = "thumbnail-" + /*result*/
      c[0].id) && d(r, "id", i), u & /*result*/
      1 && !Br(r.src, n = /*result*/
      c[0].imageUrl) && d(r, "src", n), u & /*result*/
      1 && s !== (s = /*result*/
      c[0].displayName) && d(r, "alt", s), u & /*result*/
      1 && a !== (a = /*getTitle*/
      c[3](
        /*result*/
        c[0]
      )) && d(r, "title", a);
    },
    d(c) {
      c && M(t), o = !1, l();
    }
  };
}
function en(e) {
  let t, r, i, n, s, a, o, l, c, u, h, f, g, m, p, b, C, H, _, L, x, D = !/*videoVisible*/
  e[2] && tn(e);
  return l = new me({
    props: { icon: nl, color: "#000000" }
  }), h = new me({
    props: { icon: el, color: "#000000" }
  }), m = new me({
    props: { icon: al, color: "#000000" }
  }), C = new me({
    props: { icon: rl, color: "#000000" }
  }), {
    c() {
      D && D.c(), t = $(), r = k("iframe"), s = $(), a = k("div"), o = k("button"), E(l.$$.fragment), c = $(), u = k("button"), E(h.$$.fragment), f = $(), g = k("button"), E(m.$$.fragment), p = $(), b = k("button"), E(C.$$.fragment), d(r, "class", "wc-ai-search-result__video-player-iframe svelte-z78bj"), d(r, "id", i = "video-player-" + /*result*/
      e[0].id), d(r, "width", "100%"), d(r, "height", "315"), Br(r.src, n = "") || d(r, "src", n), d(r, "frameborder", "0"), d(r, "allow", "autoplay"), d(r, "title", "video player"), T(
        r,
        "wc-ai-search-result__video-player-iframe--visible",
        /*videoVisible*/
        e[2]
      ), d(o, "class", ie(pe.linkButton) + " svelte-z78bj"), d(u, "class", ie(pe.linkButton) + " svelte-z78bj"), d(g, "class", ie(pe.linkButton) + " svelte-z78bj"), d(b, "class", ie(pe.linkButton) + " svelte-z78bj"), d(a, "id", H = "video-controls-" + /*result*/
      e[0].id), d(a, "class", "wc-ai-search-result__video-controls svelte-z78bj"), T(
        a,
        "wc-ai-search-result__video-controls--visible",
        /*videoVisible*/
        e[2]
      );
    },
    m(R, y) {
      D && D.m(R, y), O(R, t, y), O(R, r, y), e[12](r), O(R, s, y), O(R, a, y), v(a, o), U(l, o, null), v(a, c), v(a, u), U(h, u, null), v(a, f), v(a, g), U(m, g, null), v(a, p), v(a, b), U(C, b, null), _ = !0, L || (x = [
        Z(
          o,
          "click",
          /*playVideo*/
          e[5]
        ),
        Z(
          u,
          "click",
          /*pauseVideo*/
          e[6]
        ),
        Z(
          g,
          "click",
          /*muteVideo*/
          e[7]
        ),
        Z(
          b,
          "click",
          /*unmuteVideo*/
          e[8]
        )
      ], L = !0);
    },
    p(R, y) {
      /*videoVisible*/
      R[2] ? D && (ee(), B(D, 1, 1, () => {
        D = null;
      }), te()) : D ? (D.p(R, y), y & /*videoVisible*/
      4 && w(D, 1)) : (D = tn(R), D.c(), w(D, 1), D.m(t.parentNode, t)), (!_ || y & /*result*/
      1 && i !== (i = "video-player-" + /*result*/
      R[0].id)) && d(r, "id", i), (!_ || y & /*videoVisible*/
      4) && T(
        r,
        "wc-ai-search-result__video-player-iframe--visible",
        /*videoVisible*/
        R[2]
      ), (!_ || y & /*result*/
      1 && H !== (H = "video-controls-" + /*result*/
      R[0].id)) && d(a, "id", H), (!_ || y & /*videoVisible*/
      4) && T(
        a,
        "wc-ai-search-result__video-controls--visible",
        /*videoVisible*/
        R[2]
      );
    },
    i(R) {
      _ || (w(D), w(l.$$.fragment, R), w(h.$$.fragment, R), w(m.$$.fragment, R), w(C.$$.fragment, R), _ = !0);
    },
    o(R) {
      B(D), B(l.$$.fragment, R), B(h.$$.fragment, R), B(m.$$.fragment, R), B(C.$$.fragment, R), _ = !1;
    },
    d(R) {
      R && (M(t), M(r), M(s), M(a)), D && D.d(R), e[12](null), V(l), V(h), V(m), V(C), L = !1, Ce(x);
    }
  };
}
function tn(e) {
  let t, r, i, n, s;
  return r = new me({
    props: { icon: Zo, size: "3x" }
  }), {
    c() {
      t = k("button"), E(r.$$.fragment), d(t, "class", ie(`${pe.iconButton} wc-ai-search-result__play-icon`) + " svelte-z78bj");
    },
    m(a, o) {
      O(a, t, o), U(r, t, null), i = !0, n || (s = Z(
        t,
        "click",
        /*click_handler_1*/
        e[11]
      ), n = !0);
    },
    p: q,
    i(a) {
      i || (w(r.$$.fragment, a), i = !0);
    },
    o(a) {
      B(r.$$.fragment, a), i = !1;
    },
    d(a) {
      a && M(t), V(r), n = !1, s();
    }
  };
}
function Ju(e) {
  let t, r, i, n = !/*videoVisible*/
  e[2] && Zi(e), s = (
    /*result*/
    e[0].whois === "youtube" && /*result*/
    e[0].videoYtId && en(e)
  );
  return {
    c() {
      t = k("div"), n && n.c(), r = $(), s && s.c(), d(t, "class", "ai-search-result-video-area");
    },
    m(a, o) {
      O(a, t, o), n && n.m(t, null), v(t, r), s && s.m(t, null), i = !0;
    },
    p(a, [o]) {
      /*videoVisible*/
      a[2] ? n && (n.d(1), n = null) : n ? n.p(a, o) : (n = Zi(a), n.c(), n.m(t, r)), /*result*/
      a[0].whois === "youtube" && /*result*/
      a[0].videoYtId ? s ? (s.p(a, o), o & /*result*/
      1 && w(s, 1)) : (s = en(a), s.c(), w(s, 1), s.m(t, null)) : s && (ee(), B(s, 1, 1, () => {
        s = null;
      }), te());
    },
    i(a) {
      i || (w(s), i = !0);
    },
    o(a) {
      B(s), i = !1;
    },
    d(a) {
      a && M(t), n && n.d(), s && s.d();
    }
  };
}
function Xu(e, t, r) {
  let i;
  oe(e, Sr, (_) => r(9, i = _));
  let { result: n } = t, s, a = !1;
  const o = Ke(), l = () => {
    r(2, a = !a);
  }, c = (_) => {
    var x;
    const L = _.subtypes ? (x = _.subtypes) == null ? void 0 : x.join(", ") : null;
    return [_.artistType, L, _.location].filter(Boolean).join(" - ");
  }, u = (_) => {
    r(1, s.src = `https://www.youtube-nocookie.com/embed/${_.videoYtId}?enablejsapi=1&disablekb=1&rel=0&showinfo=0&color=white&autoplay=1`, s), s.setAttribute("allow", "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"), l(), Sr.set(_.id), o("toggleVideo", a);
  }, h = () => {
    var _;
    (_ = s.contentWindow) == null || _.postMessage('{"event":"command","func":"playVideo","args":""}', "*");
  }, f = () => {
    var _;
    (_ = s.contentWindow) == null || _.postMessage('{"event":"command","func":"pauseVideo","args":""}', "*");
  }, g = () => {
    var _;
    (_ = s.contentWindow) == null || _.postMessage('{"event":"command","func":"stopVideo","args":""}', "*");
  }, m = () => {
    var _;
    (_ = s.contentWindow) == null || _.postMessage('{"event":"command","func":"mute","args":""}', "*");
  }, p = () => {
    var _;
    (_ = s.contentWindow) == null || _.postMessage('{"event":"command","func":"unMute","args":""}', "*");
  }, b = () => u(n), C = () => u(n);
  function H(_) {
    ke[_ ? "unshift" : "push"](() => {
      s = _, r(1, s);
    });
  }
  return e.$$set = (_) => {
    "result" in _ && r(0, n = _.result);
  }, e.$$.update = () => {
    e.$$.dirty & /*videoIframe, $playingVideoStore, result*/
    515 && s != null && s.contentWindow && i !== n.id && g();
  }, [
    n,
    s,
    a,
    c,
    u,
    h,
    f,
    m,
    p,
    i,
    b,
    C,
    H
  ];
}
class ks extends K {
  constructor(t) {
    super(), X(this, t, Xu, Ju, J, { result: 0 }, Au);
  }
  get result() {
    return this.$$.ctx[0];
  }
  set result(t) {
    this.$$set({ result: t }), P();
  }
}
Q(ks, { result: {} }, [], [], !0);
function Qu(e) {
  Me(e, "svelte-1vigbvm", '.wc-ai-search-result.svelte-1vigbvm.svelte-1vigbvm{border:0;box-shadow:0 2px 10px rgba(0, 0, 0, .10);background-color:#ffffff;border-radius:7px;margin-bottom:22px}.wc-ai-search-result__top-area-images.svelte-1vigbvm.svelte-1vigbvm{position:relative}.wc-ai-search-result__date-area.svelte-1vigbvm.svelte-1vigbvm{position:absolute;bottom:12px;left:12px;height:auto;top:auto}.wc-ai-search-result__date-area--video-bar-top.svelte-1vigbvm.svelte-1vigbvm{right:14px !important;left:auto !important;top:19px !important;bottom:auto !important;z-index:2}.wc-ai-search-result__date-area.svelte-1vigbvm p.svelte-1vigbvm{margin:0;width:auto;display:inline-block;font-size:14px;font-weight:400;background:#353F47;padding:5px 16px;border-radius:4px;color:#ffffff;letter-spacing:1px;font-stretch:normal;font-style:normal;line-height:1.43}.wc-ai-search-result__date-area.svelte-1vigbvm p span.wc-ai-search-result__book.svelte-1vigbvm{font-weight:bold}.wc-ai-search-result__membership-area.svelte-1vigbvm.svelte-1vigbvm{position:absolute;top:7px;left:12px;height:auto}.wc-ai-search-result__membership-area.svelte-1vigbvm span.svelte-1vigbvm{background-position:0 0;background-repeat:no-repeat;padding-left:40px;padding-bottom:44px}.wc-ai-search-result__membership-area.svelte-1vigbvm span.rockstar.svelte-1vigbvm{background-image:url(/mem-rockstar.png)}.wc-ai-search-result__membership-area.svelte-1vigbvm span.newcomer.svelte-1vigbvm{background-image:url("/mem-newcomer.png")}.wc-ai-search-result__membership-area.svelte-1vigbvm span.free.svelte-1vigbvm{background-image:url("/mem-free.png")}.wc-ai-search-result__membership-area.svelte-1vigbvm span.trial.svelte-1vigbvm{background-image:url("/mem-trial.png")}.wc-ai-search-result__top-area-images--video-bar-top.svelte-1vigbvm .wc-ai-search-result__membership-area.svelte-1vigbvm{width:100%;top:0 !important;left:0 !important;min-height:65px !important;border-radius:6px 6px 0 0;background-color:black}.wc-ai-search-result__card-body.svelte-1vigbvm.svelte-1vigbvm{background-color:transparent !important;border:none !important;display:flex;flex-direction:column}.wc-ai-search-result__card-title.svelte-1vigbvm.svelte-1vigbvm{position:relative;margin-bottom:10px;font-weight:bold;font-size:15px}.wc-ai-search-result__card-title--shorted.svelte-1vigbvm.svelte-1vigbvm{display:-webkit-box;-webkit-line-clamp:3;line-clamp:3;-webkit-box-orient:vertical;overflow:hidden;min-height:54px}p.wc-ai-search-result__card-text.svelte-1vigbvm.svelte-1vigbvm{font-size:12px;font-weight:normal;font-stretch:normal;font-style:normal;line-height:1.5;letter-spacing:normal}p.wc-ai-search-result__card-text--shorted.svelte-1vigbvm.svelte-1vigbvm{display:-webkit-box;-webkit-line-clamp:2;line-clamp:2;-webkit-box-orient:vertical;overflow:hidden;min-height:36px}.wc-ai-search-result__city.svelte-1vigbvm span.svelte-1vigbvm{font-size:14px}.wc-ai-search-result__ratting-area.svelte-1vigbvm.svelte-1vigbvm{display:flex;justify-content:space-between;min-height:45px;flex-grow:1}.wc-ai-search-result__ratting.svelte-1vigbvm h2.svelte-1vigbvm{font-size:16px;font-weight:bold;padding:0px;margin:0px 0px}.wc-ai-search-result__ratting.svelte-1vigbvm p.svelte-1vigbvm{font-size:12px;font-weight:500;font-stretch:normal;font-style:normal;line-height:normal;letter-spacing:normal;padding:5px 0px}.wc-ai-search-result__price.svelte-1vigbvm.svelte-1vigbvm{padding-left:47px;min-height:37px}.wc-ai-search-result__price.svelte-1vigbvm p.svelte-1vigbvm{font-size:12px;font-weight:normal;font-stretch:normal;font-style:normal;line-height:normal;letter-spacing:normal;text-align:right;margin:0px 0px}.wc-ai-search-result__price.svelte-1vigbvm h2.svelte-1vigbvm{font-family:Lato;font-size:18px;font-weight:bold;font-stretch:normal;font-style:normal;line-height:normal;letter-spacing:normal;text-align:right;padding:0px;margin:0px 0px}.wc-ai-search-result__price.svelte-1vigbvm h2 span.svelte-1vigbvm{font-family:Lato;font-size:12px;font-weight:bold;font-stretch:normal;font-style:normal;line-height:normal;letter-spacing:normal;text-align:right}.wc-ai-search-result__show-more.svelte-1vigbvm.svelte-1vigbvm{text-align:center;display:block;text-decoration:none;padding:13px 20px;font-size:14px;line-height:17px;font-weight:700;border-radius:4px;margin-top:15px}');
}
function rn(e) {
  let t, r;
  return {
    c() {
      t = k("span"), d(t, "itemprop", "priceRange"), d(t, "content", r = /*getQuoteAvg*/
      e[3](
        /*result*/
        e[0].aiQuoteAvg
      )), d(t, "class", "svelte-1vigbvm");
    },
    m(i, n) {
      O(i, t, n);
    },
    p(i, n) {
      n & /*result*/
      1 && r !== (r = /*getQuoteAvg*/
      i[3](
        /*result*/
        i[0].aiQuoteAvg
      )) && d(t, "content", r);
    },
    d(i) {
      i && M(t);
    }
  };
}
function nn(e) {
  let t, r, i, n = (
    /*result*/
    e[0].bookings + ""
  ), s, a, o = (
    /*$t*/
    e[2]("result.verified_bookings") + ""
  ), l;
  return {
    c() {
      t = k("div"), r = k("p"), i = k("span"), s = G(n), a = $(), l = G(o), d(i, "class", "wc-ai-search-result__book svelte-1vigbvm"), d(r, "class", "svelte-1vigbvm"), d(t, "class", "wc-ai-search-result__date-area svelte-1vigbvm"), T(
        t,
        "wc-ai-search-result__date-area--video-bar-top",
        /*videoVisible*/
        e[1]
      );
    },
    m(c, u) {
      O(c, t, u), v(t, r), v(r, i), v(i, s), v(r, a), v(r, l);
    },
    p(c, u) {
      u & /*result*/
      1 && n !== (n = /*result*/
      c[0].bookings + "") && A(s, n), u & /*$t*/
      4 && o !== (o = /*$t*/
      c[2]("result.verified_bookings") + "") && A(l, o), u & /*videoVisible*/
      2 && T(
        t,
        "wc-ai-search-result__date-area--video-bar-top",
        /*videoVisible*/
        c[1]
      );
    },
    d(c) {
      c && M(t);
    }
  };
}
function sn(e) {
  let t, r;
  return {
    c() {
      t = k("span"), d(t, "class", r = ie(
        /*result*/
        e[0].level_css
      ) + " svelte-1vigbvm");
    },
    m(i, n) {
      O(i, t, n);
    },
    p(i, n) {
      n & /*result*/
      1 && r !== (r = ie(
        /*result*/
        i[0].level_css
      ) + " svelte-1vigbvm") && d(t, "class", r);
    },
    d(i) {
      i && M(t);
    }
  };
}
function an(e) {
  let t, r = (
    /*getSubtypesString*/
    e[4](
      /*result*/
      e[0].subtypes
    ) + ""
  ), i;
  return {
    c() {
      t = k("p"), i = G(r), d(t, "class", "wc-ai-search-result__card-text wc-ai-search-result__card-text--shorted mb-3 svelte-1vigbvm");
    },
    m(n, s) {
      O(n, t, s), v(t, i);
    },
    p(n, s) {
      s & /*result*/
      1 && r !== (r = /*getSubtypesString*/
      n[4](
        /*result*/
        n[0].subtypes
      ) + "") && A(i, r);
    },
    d(n) {
      n && M(t);
    }
  };
}
function on(e) {
  let t, r, i, n = (
    /*result*/
    e[0].location + ""
  ), s, a;
  return t = new me({ props: { icon: il } }), {
    c() {
      E(t.$$.fragment), r = $(), i = k("span"), s = G(n), d(i, "itemprop", "addressLocality"), d(i, "class", "svelte-1vigbvm");
    },
    m(o, l) {
      U(t, o, l), O(o, r, l), O(o, i, l), v(i, s), a = !0;
    },
    p(o, l) {
      (!a || l & /*result*/
      1) && n !== (n = /*result*/
      o[0].location + "") && A(s, n);
    },
    i(o) {
      a || (w(t.$$.fragment, o), a = !0);
    },
    o(o) {
      B(t.$$.fragment, o), a = !1;
    },
    d(o) {
      o && (M(r), M(i)), V(t, o);
    }
  };
}
function ln(e) {
  let t = (
    /*getRatingStars*/
    e[5](
      /*result*/
      e[0].ratingStars
    ) + ""
  ), r;
  return {
    c() {
      r = G(t);
    },
    m(i, n) {
      O(i, r, n);
    },
    p(i, n) {
      n & /*result*/
      1 && t !== (t = /*getRatingStars*/
      i[5](
        /*result*/
        i[0].ratingStars
      ) + "") && A(r, t);
    },
    d(i) {
      i && M(r);
    }
  };
}
function Ku(e) {
  let t = (
    /*$t*/
    e[2]("result.on_request") + ""
  ), r;
  return {
    c() {
      r = G(t);
    },
    m(i, n) {
      O(i, r, n);
    },
    p(i, n) {
      n & /*$t*/
      4 && t !== (t = /*$t*/
      i[2]("result.on_request") + "") && A(r, t);
    },
    d(i) {
      i && M(r);
    }
  };
}
function Yu(e) {
  let t = (
    /*result*/
    e[0].cachet_min + ""
  ), r, i, n, s = (
    /*result*/
    e[0].currency + ""
  ), a;
  return {
    c() {
      r = G(t), i = $(), n = k("span"), a = G(s), d(n, "class", "svelte-1vigbvm");
    },
    m(o, l) {
      O(o, r, l), O(o, i, l), O(o, n, l), v(n, a);
    },
    p(o, l) {
      l & /*result*/
      1 && t !== (t = /*result*/
      o[0].cachet_min + "") && A(r, t), l & /*result*/
      1 && s !== (s = /*result*/
      o[0].currency + "") && A(a, s);
    },
    d(o) {
      o && (M(r), M(i), M(n));
    }
  };
}
function Zu(e) {
  let t, r, i, n, s, a, o, l, c, u, h, f, g, m, p, b, C, H, _ = (
    /*result*/
    e[0].tagline + ""
  ), L, x, D, R, y, re, ce, N, qe, De, be, Fe, je, Oe, Ze, I, Ge, We, Qr, Kr, et, It = (
    /*result*/
    e[0].ratingVotes + ""
  ), lr, Yr, St = (
    /*$t*/
    e[2]("result.reviews") + ""
  ), cr, Zr, tt, Rt, $t = (
    /*$t*/
    e[2]("result.from") + ""
  ), ur, ei, bt, ti, He, Dt = (
    /*$t*/
    e[2]("result.show_more") + ""
  ), fr, Ft, jt, se, hr, ri, ue = (
    /*result*/
    e[0].aiQuoteAvg && rn(e)
  );
  h = new ks({ props: { result: (
    /*result*/
    e[0]
  ) } }), h.$on(
    "toggleVideo",
    /*handleToggleVideo*/
    e[6]
  );
  let fe = (
    /*result*/
    e[0].bookings && /*result*/
    e[0].bookings > 0 && nn(e)
  ), he = (
    /*result*/
    e[0].level_css && sn(e)
  ), de = (
    /*result*/
    e[0].subtypes && an(e)
  ), ae = (
    /*result*/
    e[0].location && on(e)
  );
  We = new me({
    props: {
      icon: Ko,
      color: /*result*/ e[0].ratingVotes ? "#ffd528" : "#e3e3e3",
      size: "lg"
    }
  });
  let ge = (
    /*result*/
    e[0].ratingStars && ln(e)
  );
  function ii(S, W) {
    return (
      /*result*/
      S[0].cachet_min ? Yu : Ku
    );
  }
  let zt = ii(e), xe = zt(e);
  return {
    c() {
      t = k("div"), r = k("div"), i = k("div"), n = k("meta"), a = $(), o = k("span"), c = $(), ue && ue.c(), u = $(), E(h.$$.fragment), f = $(), fe && fe.c(), g = $(), m = k("div"), he && he.c(), b = $(), C = k("div"), H = k("h5"), L = G(_), D = $(), de && de.c(), R = $(), y = k("div"), ae && ae.c(), re = $(), ce = k("div"), N = k("div"), qe = k("meta"), De = $(), be = k("meta"), je = $(), Oe = k("meta"), I = $(), Ge = k("h2"), E(We.$$.fragment), Qr = $(), ge && ge.c(), Kr = $(), et = k("p"), lr = G(It), Yr = $(), cr = G(St), Zr = $(), tt = k("div"), Rt = k("p"), ur = G($t), ei = $(), bt = k("h2"), xe.c(), ti = $(), He = k("a"), fr = G(Dt), d(n, "itemprop", "name"), d(n, "content", s = /*result*/
      e[0].displayName), d(o, "itemprop", "telephone"), d(o, "content", l = /*result*/
      e[0].telephone), d(o, "class", "svelte-1vigbvm"), d(m, "class", "wc-ai-search-result__membership-area svelte-1vigbvm"), d(i, "class", "wc-ai-search-result__top-area-images svelte-1vigbvm"), d(i, "id", p = "video-container-" + /*result*/
      e[0].id), T(
        i,
        "wc-ai-search-result__top-area-images--video-bar-top",
        /*videoVisible*/
        e[1]
      ), d(H, "class", "card-title wc-ai-search-result__card-title wc-ai-search-result__card-title--shorted svelte-1vigbvm"), d(H, "itemprop", "description"), d(H, "content", x = /*result*/
      e[0].itemprop_desc), d(y, "class", "col-12 pb-3 wc-ai-search-result__city svelte-1vigbvm"), d(y, "itemtype", "http://schema.org/PostalAddress"), d(y, "itemscope", ""), d(y, "itemprop", "address"), d(qe, "itemprop", "bestRating"), d(qe, "content", "10"), d(be, "itemprop", "ratingValue"), d(be, "content", Fe = /*result*/
      e[0].ratingStars), d(Oe, "itemprop", "reviewCount"), d(Oe, "content", Ze = /*result*/
      e[0].ratingVotes), d(Ge, "class", "svelte-1vigbvm"), d(et, "class", "svelte-1vigbvm"), d(N, "class", "wc-ai-search-result__ratting svelte-1vigbvm"), d(N, "itemprop", "aggregateRating"), d(N, "itemscope", ""), d(N, "itemtype", "http://schema.org/AggregateRating"), d(Rt, "class", "svelte-1vigbvm"), d(bt, "class", "svelte-1vigbvm"), d(tt, "class", "wc-ai-search-result__price svelte-1vigbvm"), d(ce, "class", "wc-ai-search-result__ratting-area svelte-1vigbvm"), d(He, "itemprop", "url"), d(He, "class", ie(`${pe.outlined} wc-ai-search-result__show-more`) + " svelte-1vigbvm"), d(He, "title", Ft = /*result*/
      e[0].itemprop_desc), d(He, "href", jt = "/" + /*result*/
      e[0].nickName), d(He, "target", "_blank"), d(C, "class", "card-body wc-ai-search-result__card-body svelte-1vigbvm"), d(r, "class", ie(`card h-100 ${Je.base} wc-ai-search-result`) + " svelte-1vigbvm"), d(t, "class", "col-12 col-sm-6 col-md-6 col-xl-4"), d(t, "itemscope", ""), d(t, "itemtype", "http://schema.org/LocalBusiness");
    },
    m(S, W) {
      O(S, t, W), v(t, r), v(r, i), v(i, n), v(i, a), v(i, o), v(i, c), ue && ue.m(i, null), v(i, u), U(h, i, null), v(i, f), fe && fe.m(i, null), v(i, g), v(i, m), he && he.m(m, null), v(r, b), v(r, C), v(C, H), v(H, L), v(C, D), de && de.m(C, null), v(C, R), v(C, y), ae && ae.m(y, null), v(C, re), v(C, ce), v(ce, N), v(N, qe), v(N, De), v(N, be), v(N, je), v(N, Oe), v(N, I), v(N, Ge), U(We, Ge, null), v(Ge, Qr), ge && ge.m(Ge, null), v(N, Kr), v(N, et), v(et, lr), v(et, Yr), v(et, cr), v(ce, Zr), v(ce, tt), v(tt, Rt), v(Rt, ur), v(tt, ei), v(tt, bt), xe.m(bt, null), v(C, ti), v(C, He), v(He, fr), se = !0, hr || (ri = Z(
        He,
        "click",
        /*click_handler*/
        e[7]
      ), hr = !0);
    },
    p(S, [W]) {
      (!se || W & /*result*/
      1 && s !== (s = /*result*/
      S[0].displayName)) && d(n, "content", s), (!se || W & /*result*/
      1 && l !== (l = /*result*/
      S[0].telephone)) && d(o, "content", l), /*result*/
      S[0].aiQuoteAvg ? ue ? ue.p(S, W) : (ue = rn(S), ue.c(), ue.m(i, u)) : ue && (ue.d(1), ue = null);
      const ni = {};
      W & /*result*/
      1 && (ni.result = /*result*/
      S[0]), h.$set(ni), /*result*/
      S[0].bookings && /*result*/
      S[0].bookings > 0 ? fe ? fe.p(S, W) : (fe = nn(S), fe.c(), fe.m(i, g)) : fe && (fe.d(1), fe = null), /*result*/
      S[0].level_css ? he ? he.p(S, W) : (he = sn(S), he.c(), he.m(m, null)) : he && (he.d(1), he = null), (!se || W & /*result*/
      1 && p !== (p = "video-container-" + /*result*/
      S[0].id)) && d(i, "id", p), (!se || W & /*videoVisible*/
      2) && T(
        i,
        "wc-ai-search-result__top-area-images--video-bar-top",
        /*videoVisible*/
        S[1]
      ), (!se || W & /*result*/
      1) && _ !== (_ = /*result*/
      S[0].tagline + "") && A(L, _), (!se || W & /*result*/
      1 && x !== (x = /*result*/
      S[0].itemprop_desc)) && d(H, "content", x), /*result*/
      S[0].subtypes ? de ? de.p(S, W) : (de = an(S), de.c(), de.m(C, R)) : de && (de.d(1), de = null), /*result*/
      S[0].location ? ae ? (ae.p(S, W), W & /*result*/
      1 && w(ae, 1)) : (ae = on(S), ae.c(), w(ae, 1), ae.m(y, null)) : ae && (ee(), B(ae, 1, 1, () => {
        ae = null;
      }), te()), (!se || W & /*result*/
      1 && Fe !== (Fe = /*result*/
      S[0].ratingStars)) && d(be, "content", Fe), (!se || W & /*result*/
      1 && Ze !== (Ze = /*result*/
      S[0].ratingVotes)) && d(Oe, "content", Ze);
      const si = {};
      W & /*result*/
      1 && (si.color = /*result*/
      S[0].ratingVotes ? "#ffd528" : "#e3e3e3"), We.$set(si), /*result*/
      S[0].ratingStars ? ge ? ge.p(S, W) : (ge = ln(S), ge.c(), ge.m(Ge, null)) : ge && (ge.d(1), ge = null), (!se || W & /*result*/
      1) && It !== (It = /*result*/
      S[0].ratingVotes + "") && A(lr, It), (!se || W & /*$t*/
      4) && St !== (St = /*$t*/
      S[2]("result.reviews") + "") && A(cr, St), (!se || W & /*$t*/
      4) && $t !== ($t = /*$t*/
      S[2]("result.from") + "") && A(ur, $t), zt === (zt = ii(S)) && xe ? xe.p(S, W) : (xe.d(1), xe = zt(S), xe && (xe.c(), xe.m(bt, null))), (!se || W & /*$t*/
      4) && Dt !== (Dt = /*$t*/
      S[2]("result.show_more") + "") && A(fr, Dt), (!se || W & /*result*/
      1 && Ft !== (Ft = /*result*/
      S[0].itemprop_desc)) && d(He, "title", Ft), (!se || W & /*result*/
      1 && jt !== (jt = "/" + /*result*/
      S[0].nickName)) && d(He, "href", jt);
    },
    i(S) {
      se || (w(h.$$.fragment, S), w(ae), w(We.$$.fragment, S), se = !0);
    },
    o(S) {
      B(h.$$.fragment, S), B(ae), B(We.$$.fragment, S), se = !1;
    },
    d(S) {
      S && M(t), ue && ue.d(), V(h), fe && fe.d(), he && he.d(), de && de.d(), ae && ae.d(), V(We), ge && ge.d(), xe.d(), hr = !1, ri();
    }
  };
}
function ef(e, t, r) {
  let i;
  oe(e, Ye, (h) => r(2, i = h));
  let { result: n } = t, s = !1;
  const a = (h) => h < 500 ? "$" : h < 1500 ? "$$" : "$$$", o = (h) => h == null ? void 0 : h.join(", "), l = (h) => h ? Math.round(h / 2 * 100) / 100 : 0;
  function c(h) {
    r(1, s = h.detail);
  }
  const u = () => Sr.stopAllVideos();
  return e.$$set = (h) => {
    "result" in h && r(0, n = h.result);
  }, e.$$.update = () => {
  }, [
    n,
    s,
    i,
    a,
    o,
    l,
    c,
    u
  ];
}
class ys extends K {
  constructor(t) {
    super(), X(this, t, ef, Zu, J, { result: 0 }, Qu);
  }
  get result() {
    return this.$$.ctx[0];
  }
  set result(t) {
    this.$$set({ result: t }), P();
  }
}
Q(ys, { result: {} }, [], [], !0);
const tf = ze(Pe, (e) => !e.currentResultsSetKey || !e.responses[e.currentResultsSetKey] ? [] : e.responses[e.currentResultsSetKey].selection);
function rf(e) {
  Me(e, "svelte-144z1wu", ".wc-ai-search-results.svelte-144z1wu{padding:0.5rem}.show-more.svelte-144z1wu{display:flex;justify-content:center;margin-top:1rem}");
}
function cn(e, t, r) {
  const i = e.slice();
  return i[8] = t[r], i;
}
function un(e) {
  let t, r, i, n, s, a, o, l;
  r = new Oc({
    props: {
      searching: (
        /*$searchStore*/
        e[3].status === "searching"
      )
    }
  });
  const c = [sf, nf], u = [];
  function h(g, m) {
    return (
      /*paginatedResults*/
      g[2].length ? 1 : 0
    );
  }
  s = h(e), a = u[s] = c[s](e);
  let f = (
    /*itemsToShow*/
    e[0] < /*$resultsSetStore*/
    e[1].length && hn(e)
  );
  return {
    c() {
      t = k("div"), E(r.$$.fragment), i = $(), n = k("div"), a.c(), o = $(), f && f.c(), d(n, "class", "row g-4"), d(t, "class", "container wc-ai-search-results svelte-144z1wu");
    },
    m(g, m) {
      O(g, t, m), U(r, t, null), v(t, i), v(t, n), u[s].m(n, null), v(t, o), f && f.m(t, null), l = !0;
    },
    p(g, m) {
      const p = {};
      m & /*$searchStore*/
      8 && (p.searching = /*$searchStore*/
      g[3].status === "searching"), r.$set(p);
      let b = s;
      s = h(g), s === b ? u[s].p(g, m) : (ee(), B(u[b], 1, 1, () => {
        u[b] = null;
      }), te(), a = u[s], a ? a.p(g, m) : (a = u[s] = c[s](g), a.c()), w(a, 1), a.m(n, null)), /*itemsToShow*/
      g[0] < /*$resultsSetStore*/
      g[1].length ? f ? f.p(g, m) : (f = hn(g), f.c(), f.m(t, null)) : f && (f.d(1), f = null);
    },
    i(g) {
      l || (w(r.$$.fragment, g), w(a), l = !0);
    },
    o(g) {
      B(r.$$.fragment, g), B(a), l = !1;
    },
    d(g) {
      g && M(t), V(r), u[s].d(), f && f.d();
    }
  };
}
function nf(e) {
  let t, r, i = Ee(
    /*paginatedResults*/
    e[2]
  ), n = [];
  for (let a = 0; a < i.length; a += 1)
    n[a] = fn(cn(e, i, a));
  const s = (a) => B(n[a], 1, 1, () => {
    n[a] = null;
  });
  return {
    c() {
      for (let a = 0; a < n.length; a += 1)
        n[a].c();
      t = ve();
    },
    m(a, o) {
      for (let l = 0; l < n.length; l += 1)
        n[l] && n[l].m(a, o);
      O(a, t, o), r = !0;
    },
    p(a, o) {
      if (o & /*paginatedResults*/
      4) {
        i = Ee(
          /*paginatedResults*/
          a[2]
        );
        let l;
        for (l = 0; l < i.length; l += 1) {
          const c = cn(a, i, l);
          n[l] ? (n[l].p(c, o), w(n[l], 1)) : (n[l] = fn(c), n[l].c(), w(n[l], 1), n[l].m(t.parentNode, t));
        }
        for (ee(), l = i.length; l < n.length; l += 1)
          s(l);
        te();
      }
    },
    i(a) {
      if (!r) {
        for (let o = 0; o < i.length; o += 1)
          w(n[o]);
        r = !0;
      }
    },
    o(a) {
      n = n.filter(Boolean);
      for (let o = 0; o < n.length; o += 1)
        B(n[o]);
      r = !1;
    },
    d(a) {
      a && M(t), rr(n, a);
    }
  };
}
function sf(e) {
  let t, r, i = (
    /*$t*/
    e[5]("no_results") + ""
  ), n;
  return {
    c() {
      t = k("div"), r = k("p"), n = G(i), At(r, "margin", "0.8rem"), d(t, "class", "col");
    },
    m(s, a) {
      O(s, t, a), v(t, r), v(r, n);
    },
    p(s, a) {
      a & /*$t*/
      32 && i !== (i = /*$t*/
      s[5]("no_results") + "") && A(n, i);
    },
    i: q,
    o: q,
    d(s) {
      s && M(t);
    }
  };
}
function fn(e) {
  let t, r;
  return t = new ys({ props: { result: (
    /*result*/
    e[8]
  ) } }), {
    c() {
      E(t.$$.fragment);
    },
    m(i, n) {
      U(t, i, n), r = !0;
    },
    p(i, n) {
      const s = {};
      n & /*paginatedResults*/
      4 && (s.result = /*result*/
      i[8]), t.$set(s);
    },
    i(i) {
      r || (w(t.$$.fragment, i), r = !0);
    },
    o(i) {
      B(t.$$.fragment, i), r = !1;
    },
    d(i) {
      V(t, i);
    }
  };
}
function hn(e) {
  let t, r, i = (
    /*$t*/
    e[5]("show_more") + ""
  ), n, s, a;
  return {
    c() {
      t = k("div"), r = k("button"), n = G(i), d(r, "class", ie(pe.outlined) + " svelte-144z1wu"), d(t, "class", "show-more svelte-144z1wu");
    },
    m(o, l) {
      O(o, t, l), v(t, r), v(r, n), s || (a = Z(
        r,
        "click",
        /*showMore*/
        e[6]
      ), s = !0);
    },
    p(o, l) {
      l & /*$t*/
      32 && i !== (i = /*$t*/
      o[5]("show_more") + "") && A(n, i);
    },
    d(o) {
      o && M(t), s = !1, a();
    }
  };
}
function af(e) {
  let t, r, i = (
    /*$searchStore*/
    e[3] && /*$userQueriesStore*/
    e[4].length && un(e)
  );
  return {
    c() {
      i && i.c(), t = ve();
    },
    m(n, s) {
      i && i.m(n, s), O(n, t, s), r = !0;
    },
    p(n, [s]) {
      /*$searchStore*/
      n[3] && /*$userQueriesStore*/
      n[4].length ? i ? (i.p(n, s), s & /*$searchStore, $userQueriesStore*/
      24 && w(i, 1)) : (i = un(n), i.c(), w(i, 1), i.m(t.parentNode, t)) : i && (ee(), B(i, 1, 1, () => {
        i = null;
      }), te());
    },
    i(n) {
      r || (w(i), r = !0);
    },
    o(n) {
      B(i), r = !1;
    },
    d(n) {
      n && M(t), i && i.d(n);
    }
  };
}
function of(e, t, r) {
  let i, n, s, a, o;
  oe(e, tf, (h) => r(1, n = h)), oe(e, Pe, (h) => r(3, s = h)), oe(e, or, (h) => r(4, a = h)), oe(e, Ye, (h) => r(5, o = h));
  let l = 9;
  const c = async () => {
    await Tr(), typeof window < "u" && window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, u = () => {
    r(0, l += 9);
  };
  return Qe(() => {
    c();
  }), e.$$.update = () => {
    e.$$.dirty & /*$resultsSetStore*/
    2 && c(), e.$$.dirty & /*$resultsSetStore, itemsToShow*/
    3 && r(2, i = n.slice(0, l));
  }, [
    l,
    n,
    i,
    s,
    a,
    o,
    u
  ];
}
class Bs extends K {
  constructor(t) {
    super(), X(this, t, of, af, J, {}, rf);
  }
}
customElements.define("stg-ai-search-results", Q(Bs, {}, [], [], !1));
const _f = Bs;
function lf(e) {
  Me(e, "svelte-172fzcq", "div.svelte-172fzcq{margin:0.5rem 0}");
}
function dn(e) {
  let t, r, i;
  return r = new Kn({
    props: {
      color: "danger",
      $$slots: { default: [cf] },
      $$scope: { ctx: e }
    }
  }), {
    c() {
      t = k("div"), E(r.$$.fragment), d(t, "class", "svelte-172fzcq");
    },
    m(n, s) {
      O(n, t, s), U(r, t, null), i = !0;
    },
    p(n, s) {
      const a = {};
      s & /*$$scope, errorMessage*/
      10 && (a.$$scope = { dirty: s, ctx: n }), r.$set(a);
    },
    i(n) {
      i || (w(r.$$.fragment, n), i = !0);
    },
    o(n) {
      B(r.$$.fragment, n), i = !1;
    },
    d(n) {
      n && M(t), V(r);
    }
  };
}
function cf(e) {
  let t;
  return {
    c() {
      t = G(
        /*errorMessage*/
        e[1]
      );
    },
    m(r, i) {
      O(r, t, i);
    },
    p(r, i) {
      i & /*errorMessage*/
      2 && A(
        t,
        /*errorMessage*/
        r[1]
      );
    },
    d(r) {
      r && M(t);
    }
  };
}
function uf(e) {
  let t, r, i = (
    /*showError*/
    e[0] && /*errorMessage*/
    e[1] && dn(e)
  );
  return {
    c() {
      i && i.c(), t = ve();
    },
    m(n, s) {
      i && i.m(n, s), O(n, t, s), r = !0;
    },
    p(n, [s]) {
      /*showError*/
      n[0] && /*errorMessage*/
      n[1] ? i ? (i.p(n, s), s & /*showError, errorMessage*/
      3 && w(i, 1)) : (i = dn(n), i.c(), w(i, 1), i.m(t.parentNode, t)) : i && (ee(), B(i, 1, 1, () => {
        i = null;
      }), te());
    },
    i(n) {
      r || (w(i), r = !0);
    },
    o(n) {
      B(i), r = !1;
    },
    d(n) {
      n && M(t), i && i.d(n);
    }
  };
}
function ff(e, t, r) {
  let i;
  oe(e, Pe, (a) => r(2, i = a));
  let n = !1, s = "";
  return e.$$.update = () => {
    e.$$.dirty & /*$searchStore*/
    4 && (i.status === "error" && i.error ? (r(1, s = i.error), r(0, n = !0)) : (r(0, n = !1), r(1, s = "")));
  }, [n, s, i];
}
class Ps extends K {
  constructor(t) {
    super(), X(this, t, ff, uf, J, {}, lf);
  }
}
customElements.define("stg-ai-search-error-notification", Q(Ps, {}, [], [], !1));
const vf = Ps;
export {
  Bc as AiSearchNewSearchButton,
  wc as AiSearchQueriesOffcanvasShowButton,
  yl as AiSearchQuery,
  df as AiSearchResults,
  Oc as AiSearchSearchingIcon,
  Wc as AiSearchSuggestions,
  gf as AiSearchUserInputForm,
  Vc as AiSearchUserInputFormVariant,
  mf as WcAiSearchAppShell,
  vf as WcAiSearchErrorNotification,
  pf as WcAiSearchFloatingUserInput,
  zu as WcAiSearchNewSearchButton,
  Nl as WcAiSearchQueries,
  _f as WcAiSearchResults
};
