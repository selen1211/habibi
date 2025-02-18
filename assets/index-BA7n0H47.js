import {
  r as R,
  j as u,
  h as Me,
  t as Je,
  x as $e,
  d as Ve,
  a as We,
  b as Ke,
  f as D,
  A as Ye,
  H as Xe,
  P as Ge,
  e as Qe,
  R as Ze,
} from "./index-Dvc1XC7V.js";
const et = "/assets/slim1-wadI2gDo.webp",
  tt = "/assets/slim2-BlmRTgeT.webp",
  st = "/assets/slim3-xmPWFSIP.webp",
  rt = "/assets/ss-BLUq_6qX.webp",
  nt = "/assets/parallaxbg-CQ2x_Sy9.webp",
  ot = "/assets/top_background-C05PS8my.webp",
  it = "/assets/tokenomics-D6Jz022G.webp",
  at = "/assets/dwf-B05DHvIC.webp",
  ct = "/assets/tatelambo-Ijh78j6k.webp",
  lt = "/assets/saudidrift-B6vQxk1t.webp",
  ut = "/assets/drifting-BxWpkKxT.webp",
  dt = "/assets/wiz-B_wig5pq.webp",
  ft = "/assets/sell-DGYl1LgF.webp",
  ht = "/assets/harryyeh-nnA4Azkj.webp",
  mt = "/assets/molly-CS3g_QRg.webp",
  pt = "/assets/cz-DRm3Ubt6.webp",
  xt = "/assets/fink-BgmxbPB9.webp",
  bt = "/assets/davies-1bUF-YYz.webp",
  gt = "/assets/cousin-BYV_afib.webp",
  wt = "/assets/mohammad-_-XRyupF.webp",
  yt = "/assets/rookie-DxwL3RnC.webp",
  jt = "/assets/tradinglord-C8hXLTk6.webp",
  Pt = "/assets/harrymohammad-C4CVbtQ2.webp",
  Et = "/assets/rookietrading-CUufxWYA.webp",
  Nt = "/assets/bitlord-D-6evilw.webp",
  Rt = "/assets/cz-flyboard-B9Dq5DKQ.webp",
  St = "/assets/cz-flyboarding-CG7-z3N6.webp",
  At = "/assets/ocean-sapphire-DTXnB4ug.webp",
  Ot = "/assets/loomdart-larry-DFAfwL7N.webp",
  Tt = "/assets/privatejet-npG91x5Z.webp",
  _t = "/assets/richard-heart-gensler-DfcUppmt.webp",
  vt = "/assets/praying-DVJS0QoP.webp",
  Ct = "/assets/praying-scene-BhrjAZTP.webp",
  Bt = "/assets/helicopter-DFD4xzg2.webp",
  kt = "/assets/nft-nick-DcqeZBo9.mp4",
  Ft = "/assets/alex-jumping-6Ag0WJrA.webp",
  Dt = "/assets/alex-tweet-JB0zhHz3.webp",
  Lt = "/assets/catcamel-C0AfyEhj.webp",
  zt = "/assets/camel-D3uga9r4.webp",
  Ut = "/assets/mooncar-COmV9C-F.webp",
  P = "/assets/standcat-DSNl-L7F.gif",
  w = "/assets/climbcat-B2CWh55r.gif",
  Ht = "/assets/climbcatidle-QOIT04Ry.gif",
  It = "/assets/unihaxor-a9zgWp4G.jpg",
  qt = "/assets/andrei-x3PXmUsw.jpeg",
  Mt = "/assets/remilio-Dv8hUM7P.jpg",
  Jt = "/assets/nakamoto-CfwZs3wq.jpeg",
  $t = "/assets/asian-pqfa4nKu.jpeg",
  Vt = "/assets/gremlin-CB3-91vW.jpg",
  Wt = "/assets/sonic-DJBTveZX.jpg",
  Kt = "/assets/dog-wif-keff-T_N2oy1j.jpg",
  Yt = () => {
    const e = (r) => {
        let o = 0;
        for (; r; ) (o += r.offsetTop), (r = r.offsetParent);
        return o;
      },
      t = () => {
        {
          const r = document.querySelectorAll(".scroll-slide"),
            o = document.querySelectorAll(".scroll-center"),
            a = window.screen.height;
          console.log("scrollOffset: ", a),
            r.forEach((n) => {
              console.log(
                "offsetParent: ",
                e(n),
                "offsetTop: ",
                n.offsetTop,
                "offsetHeight: ",
                n.offsetHeight,
                "scrollY: ",
                window.scrollY,
                "innerHeight: ",
                window.innerHeight
              );
              const c = e(n) + n.offsetHeight,
                l = window.scrollY + window.innerHeight + 1;
              if ((n.setAttribute("data-bottom", c), l + a > c)) {
                if (
                  (console.log("trigger"),
                  console.log("Bottom of window: ", l),
                  console.log("Bottom of object: ", c),
                  n.classList.contains("activated"))
                )
                  return;
                n.classList.add("activated");
              } else n.classList.remove("activated");
            }),
            o.forEach((n) => {
              const c = n.clientHeight,
                l = n.getBoundingClientRect().top,
                m = n.getBoundingClientRect().bottom;
              l >=
                (window.innerHeight || document.documentElement.clientHeight) -
                  a -
                  c &&
              m <=
                (window.innerHeight || document.documentElement.clientHeight) -
                  a +
                  c
                ? n.classList.add("activated")
                : n.classList.remove("activated");
            });
        }
      };
    R.useEffect(() => {
      window.addEventListener("scroll", t);
    });
    const s = "text-[rgb(212,175,55)] leading-6 text-[7px] sm:text-[12px]";
    return u.jsxs("div", {
      className: "w-full h-[75vh] bg-green-900",
      children: [
        u.jsx("div", {
          className: "w-full h-full absolute",
          children: u.jsx("div", {
            className: "w-full h-full relative",
            children: u.jsx("img", {
              src: ot,
              className:
                "w-100 h-100 top-[-8rem] right-[-12rem] rotate-[320deg] opacity-10 object-cover absolute",
            }),
          }),
        }),
        u.jsxs("div", {
          className:
            "flex flex-col justify-center items-center gap-4 w-full h-[75vh] absolute scroll-slide activated",
          children: [
            u.jsx("div", {
              className: "w-[70%] md:w-[35%] mx-auto",
              children: u.jsx("img", {
                src: Me,
                className: "w-full object-cover",
              }),
            }),
            u.jsxs("div", {
              className:
                "flex flex-wrap w-fit h-[7%] md:h-20 gap-6 content-center justify-center",
              children: [
                u.jsxs("a", {
                  className: "h-full text-center text-xs",
                  href: "https://t.me/",
                  "aria-label": "telegram",
                  children: [
                    u.jsx("img", {
                      src: Je,
                      className:
                        "icon w-auto h-full object-cover hover:drop-shadow-[0_0_8px_rgba(212,175,55,1)]",
                    }),
                    u.jsx("span", { className: s, children: "Telegram" }),
                  ],
                }),
                u.jsxs("a", {
                  className: "h-full text-center text-xs",
                  href: "https://x.com/",
                  "aria-label": "twitter",
                  children: [
                    u.jsx("img", {
                      src: $e,
                      className:
                        "icon w-auto h-full object-cover hover:drop-shadow-[0_0_8px_rgba(212,175,55,1)]",
                    }),
                    u.jsx("span", { className: s, children: "Twitter" }),
                  ],
                }),
                u.jsxs("a", {
                  className: "h-full text-center text-xs",
                  href: "https://www.dextools.io/app/en/ethereum/pair-explorer/0xcomingsoon",
                  "aria-label": "dextools",
                  children: [
                    u.jsx("img", {
                      src: Ve,
                      className:
                        "icon w-auto h-full object-cover hover:drop-shadow-[0_0_8px_rgba(212,175,55,1)]",
                    }),
                    u.jsx("span", { className: s, children: "Dextools" }),
                  ],
                }),
                u.jsxs("a", {
                  className: "h-full text-center text-xs",
                  href: "https://dexscreener.com/ethereum/0xcomingsoon",
                  "aria-label": "dexscreener",
                  children: [
                    u.jsx("img", {
                      src: We,
                      className:
                        "icon w-auto h-full object-cover hover:drop-shadow-[0_0_8px_rgba(212,175,55,1)]",
                    }),
                    u.jsx("span", { className: s, children: "Dexscreener" }),
                  ],
                }),
                
              ],
            }),
            u.jsx("div", { className: "h-[4%] pt-2" }),
            u.jsx("div", {
              className:
                "w-[90%] text-[0.65rem] sm:text-md md:text-2xl text-[#E6BE8A] drop-shadow-[1px_2px_#000] text-nowrap",
              children: u.jsx("a", {
                className:
                  "text-[#E6BE8A] hover:text-[#E6BE8A] hover:opacity-90",
                href: "https://solscan.io/token/0xcomingsoon",
                target: "_blank",
                children: "CA: 0xcomingsoon",
              }),
            }),
            u.jsx("div", { className: "scroll-down" }),
          ],
        }),
      ],
    });
  };
function Xt() {
  return (
    R.useEffect(() => {
      D.fromTo(".App", { opacity: 1 }, { opacity: 0, ease: "in", duration: 2 }),
        window.scrollTo({ top: 0, behavior: "smooth" }),
        D.fromTo(
          ".App",
          { opacity: 0 },
          { opacity: 1, ease: "out", duration: 2 }
        );
    }, []),
    null
  );
}
function Gt(e) {
  const [t, s] = R.useState(!1),
    r = R.useMemo(
      () => new IntersectionObserver(([o]) => s(o.isIntersecting)),
      [e]
    );
  return R.useEffect(() => (r.observe(e.current), () => r.disconnect()), []), t;
}
const g = ({ image: e, zoomImg: t, sm: s, lg: r, op: o, video: a = !1 }) => {
  const [n, c] = R.useState(!1),
    l = R.useRef(),
    m = R.useRef(),
    h = Gt(m),
    i = () => {
      n &&
        D.fromTo(
          ".open",
          { scale: 1 },
          { scale: 0, ease: "out", duration: 0.5 }
        ),
        c(!n),
        n ||
          D.fromTo(
            ".open",
            { scale: 0 },
            { scale: 1, ease: "in", duration: 0.5 }
          );
    },
    f = (p) => {
      const x = p.composedPath().includes(m.current);
      !p.composedPath().includes(l.current) & !x & n && c(!1);
    },
    N = () => {
      h && c(!0), n && !h && c(!1);
    };
  return (
    R.useEffect(() => {
      window.addEventListener("click", f), window.addEventListener("scroll", N);
    }),
    a
      ? u.jsxs(u.Fragment, {
          children: [
            u.jsx("div", {
              className: `closed ${s.h} ${s.t} ${s.l} z-20 ${
                o || n ? "" : "opacity-50"
              } ${n ? "" : "hover:"}opacity-100 ${
                n
                  ? "drop-shadow-[0_0_7px_#fff]"
                  : "hover:drop-shadow-[0_0_7px_#fff]"
              } absolute cursor-pointer`,
              ref: m,
              children: u.jsx("img", {
                src: e,
                className: "h-full",
                onClick: i,
              }),
            }),
            u.jsx("div", {
              className: `open ${n ? "" : "hidden"} ${r.h} ${r.t} ${
                r.l
              } z-20 absolute`,
              ref: l,
              children: u.jsx("video", {
                className: "h-auto lg:max-h-80 sm:max-h-36 max-h-24",
                type: "video/mp4",
                width: 320,
                height: 320,
                muted: !0,
                autoPlay: !0,
                loop: !0,
                children: u.jsx("source", { src: t || e }),
              }),
            }),
          ],
        })
      : u.jsxs(u.Fragment, {
          children: [
            u.jsx("div", {
              className: `closed ${s.h} ${s.t} ${s.l} z-20 ${
                o || n ? "" : "opacity-50"
              } ${n ? "" : "hover:"}opacity-100 ${
                n
                  ? "drop-shadow-[0_0_7px_#fff]"
                  : "hover:drop-shadow-[0_0_7px_#fff]"
              } absolute cursor-pointer`,
              ref: m,
              children: u.jsx("img", {
                src: e,
                className: "h-full",
                onClick: i,
              }),
            }),
            u.jsx("div", {
              className: `open ${n ? "" : "hidden"} ${r.h} ${r.t} ${
                r.l
              } z-20 absolute`,
              ref: l,
              children: u.jsx("img", {
                src: t || e,
                className: "h-auto lg:max-h-96 sm:max-h-36 max-h-24",
              }),
            }),
          ],
        })
  );
};
function je(e, t) {
  return function () {
    return e.apply(t, arguments);
  };
}
const { toString: Qt } = Object.prototype,
  { getPrototypeOf: ne } = Object,
  J = ((e) => (t) => {
    const s = Qt.call(t);
    return e[s] || (e[s] = s.slice(8, -1).toLowerCase());
  })(Object.create(null)),
  O = (e) => ((e = e.toLowerCase()), (t) => J(t) === e),
  $ = (e) => (t) => typeof t === e,
  { isArray: k } = Array,
  L = $("undefined");
function Zt(e) {
  return (
    e !== null &&
    !L(e) &&
    e.constructor !== null &&
    !L(e.constructor) &&
    S(e.constructor.isBuffer) &&
    e.constructor.isBuffer(e)
  );
}
const Pe = O("ArrayBuffer");
function es(e) {
  let t;
  return (
    typeof ArrayBuffer < "u" && ArrayBuffer.isView
      ? (t = ArrayBuffer.isView(e))
      : (t = e && e.buffer && Pe(e.buffer)),
    t
  );
}
const ts = $("string"),
  S = $("function"),
  Ee = $("number"),
  V = (e) => e !== null && typeof e == "object",
  ss = (e) => e === !0 || e === !1,
  H = (e) => {
    if (J(e) !== "object") return !1;
    const t = ne(e);
    return (
      (t === null ||
        t === Object.prototype ||
        Object.getPrototypeOf(t) === null) &&
      !(Symbol.toStringTag in e) &&
      !(Symbol.iterator in e)
    );
  },
  rs = O("Date"),
  ns = O("File"),
  os = O("Blob"),
  is = O("FileList"),
  as = (e) => V(e) && S(e.pipe),
  cs = (e) => {
    let t;
    return (
      e &&
      ((typeof FormData == "function" && e instanceof FormData) ||
        (S(e.append) &&
          ((t = J(e)) === "formdata" ||
            (t === "object" &&
              S(e.toString) &&
              e.toString() === "[object FormData]"))))
    );
  },
  ls = O("URLSearchParams"),
  us = (e) =>
    e.trim ? e.trim() : e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "");
function z(e, t, { allOwnKeys: s = !1 } = {}) {
  if (e === null || typeof e > "u") return;
  let r, o;
  if ((typeof e != "object" && (e = [e]), k(e)))
    for (r = 0, o = e.length; r < o; r++) t.call(null, e[r], r, e);
  else {
    const a = s ? Object.getOwnPropertyNames(e) : Object.keys(e),
      n = a.length;
    let c;
    for (r = 0; r < n; r++) (c = a[r]), t.call(null, e[c], c, e);
  }
}
function Ne(e, t) {
  t = t.toLowerCase();
  const s = Object.keys(e);
  let r = s.length,
    o;
  for (; r-- > 0; ) if (((o = s[r]), t === o.toLowerCase())) return o;
  return null;
}
const Re =
    typeof globalThis < "u"
      ? globalThis
      : typeof self < "u"
      ? self
      : typeof window < "u"
      ? window
      : global,
  Se = (e) => !L(e) && e !== Re;
function Z() {
  const { caseless: e } = (Se(this) && this) || {},
    t = {},
    s = (r, o) => {
      const a = (e && Ne(t, o)) || o;
      H(t[a]) && H(r)
        ? (t[a] = Z(t[a], r))
        : H(r)
        ? (t[a] = Z({}, r))
        : k(r)
        ? (t[a] = r.slice())
        : (t[a] = r);
    };
  for (let r = 0, o = arguments.length; r < o; r++)
    arguments[r] && z(arguments[r], s);
  return t;
}
const ds = (e, t, s, { allOwnKeys: r } = {}) => (
    z(
      t,
      (o, a) => {
        s && S(o) ? (e[a] = je(o, s)) : (e[a] = o);
      },
      { allOwnKeys: r }
    ),
    e
  ),
  fs = (e) => (e.charCodeAt(0) === 65279 && (e = e.slice(1)), e),
  hs = (e, t, s, r) => {
    (e.prototype = Object.create(t.prototype, r)),
      (e.prototype.constructor = e),
      Object.defineProperty(e, "super", { value: t.prototype }),
      s && Object.assign(e.prototype, s);
  },
  ms = (e, t, s, r) => {
    let o, a, n;
    const c = {};
    if (((t = t || {}), e == null)) return t;
    do {
      for (o = Object.getOwnPropertyNames(e), a = o.length; a-- > 0; )
        (n = o[a]), (!r || r(n, e, t)) && !c[n] && ((t[n] = e[n]), (c[n] = !0));
      e = s !== !1 && ne(e);
    } while (e && (!s || s(e, t)) && e !== Object.prototype);
    return t;
  },
  ps = (e, t, s) => {
    (e = String(e)),
      (s === void 0 || s > e.length) && (s = e.length),
      (s -= t.length);
    const r = e.indexOf(t, s);
    return r !== -1 && r === s;
  },
  xs = (e) => {
    if (!e) return null;
    if (k(e)) return e;
    let t = e.length;
    if (!Ee(t)) return null;
    const s = new Array(t);
    for (; t-- > 0; ) s[t] = e[t];
    return s;
  },
  bs = (
    (e) => (t) =>
      e && t instanceof e
  )(typeof Uint8Array < "u" && ne(Uint8Array)),
  gs = (e, t) => {
    const r = (e && e[Symbol.iterator]).call(e);
    let o;
    for (; (o = r.next()) && !o.done; ) {
      const a = o.value;
      t.call(e, a[0], a[1]);
    }
  },
  ws = (e, t) => {
    let s;
    const r = [];
    for (; (s = e.exec(t)) !== null; ) r.push(s);
    return r;
  },
  ys = O("HTMLFormElement"),
  js = (e) =>
    e.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g, function (s, r, o) {
      return r.toUpperCase() + o;
    }),
  ue = (
    ({ hasOwnProperty: e }) =>
    (t, s) =>
      e.call(t, s)
  )(Object.prototype),
  Ps = O("RegExp"),
  Ae = (e, t) => {
    const s = Object.getOwnPropertyDescriptors(e),
      r = {};
    z(s, (o, a) => {
      let n;
      (n = t(o, a, e)) !== !1 && (r[a] = n || o);
    }),
      Object.defineProperties(e, r);
  },
  Es = (e) => {
    Ae(e, (t, s) => {
      if (S(e) && ["arguments", "caller", "callee"].indexOf(s) !== -1)
        return !1;
      const r = e[s];
      if (S(r)) {
        if (((t.enumerable = !1), "writable" in t)) {
          t.writable = !1;
          return;
        }
        t.set ||
          (t.set = () => {
            throw Error("Can not rewrite read-only method '" + s + "'");
          });
      }
    });
  },
  Ns = (e, t) => {
    const s = {},
      r = (o) => {
        o.forEach((a) => {
          s[a] = !0;
        });
      };
    return k(e) ? r(e) : r(String(e).split(t)), s;
  },
  Rs = () => {},
  Ss = (e, t) => ((e = +e), Number.isFinite(e) ? e : t),
  Y = "abcdefghijklmnopqrstuvwxyz",
  de = "0123456789",
  Oe = { DIGIT: de, ALPHA: Y, ALPHA_DIGIT: Y + Y.toUpperCase() + de },
  As = (e = 16, t = Oe.ALPHA_DIGIT) => {
    let s = "";
    const { length: r } = t;
    for (; e--; ) s += t[(Math.random() * r) | 0];
    return s;
  };
function Os(e) {
  return !!(
    e &&
    S(e.append) &&
    e[Symbol.toStringTag] === "FormData" &&
    e[Symbol.iterator]
  );
}
const Ts = (e) => {
    const t = new Array(10),
      s = (r, o) => {
        if (V(r)) {
          if (t.indexOf(r) >= 0) return;
          if (!("toJSON" in r)) {
            t[o] = r;
            const a = k(r) ? [] : {};
            return (
              z(r, (n, c) => {
                const l = s(n, o + 1);
                !L(l) && (a[c] = l);
              }),
              (t[o] = void 0),
              a
            );
          }
        }
        return r;
      };
    return s(e, 0);
  },
  _s = O("AsyncFunction"),
  vs = (e) => e && (V(e) || S(e)) && S(e.then) && S(e.catch),
  d = {
    isArray: k,
    isArrayBuffer: Pe,
    isBuffer: Zt,
    isFormData: cs,
    isArrayBufferView: es,
    isString: ts,
    isNumber: Ee,
    isBoolean: ss,
    isObject: V,
    isPlainObject: H,
    isUndefined: L,
    isDate: rs,
    isFile: ns,
    isBlob: os,
    isRegExp: Ps,
    isFunction: S,
    isStream: as,
    isURLSearchParams: ls,
    isTypedArray: bs,
    isFileList: is,
    forEach: z,
    merge: Z,
    extend: ds,
    trim: us,
    stripBOM: fs,
    inherits: hs,
    toFlatObject: ms,
    kindOf: J,
    kindOfTest: O,
    endsWith: ps,
    toArray: xs,
    forEachEntry: gs,
    matchAll: ws,
    isHTMLForm: ys,
    hasOwnProperty: ue,
    hasOwnProp: ue,
    reduceDescriptors: Ae,
    freezeMethods: Es,
    toObjectSet: Ns,
    toCamelCase: js,
    noop: Rs,
    toFiniteNumber: Ss,
    findKey: Ne,
    global: Re,
    isContextDefined: Se,
    ALPHABET: Oe,
    generateString: As,
    isSpecCompliantForm: Os,
    toJSONObject: Ts,
    isAsyncFn: _s,
    isThenable: vs,
  };
function b(e, t, s, r, o) {
  Error.call(this),
    Error.captureStackTrace
      ? Error.captureStackTrace(this, this.constructor)
      : (this.stack = new Error().stack),
    (this.message = e),
    (this.name = "AxiosError"),
    t && (this.code = t),
    s && (this.config = s),
    r && (this.request = r),
    o && (this.response = o);
}
d.inherits(b, Error, {
  toJSON: function () {
    return {
      message: this.message,
      name: this.name,
      description: this.description,
      number: this.number,
      fileName: this.fileName,
      lineNumber: this.lineNumber,
      columnNumber: this.columnNumber,
      stack: this.stack,
      config: d.toJSONObject(this.config),
      code: this.code,
      status:
        this.response && this.response.status ? this.response.status : null,
    };
  },
});
const Te = b.prototype,
  _e = {};
[
  "ERR_BAD_OPTION_VALUE",
  "ERR_BAD_OPTION",
  "ECONNABORTED",
  "ETIMEDOUT",
  "ERR_NETWORK",
  "ERR_FR_TOO_MANY_REDIRECTS",
  "ERR_DEPRECATED",
  "ERR_BAD_RESPONSE",
  "ERR_BAD_REQUEST",
  "ERR_CANCELED",
  "ERR_NOT_SUPPORT",
  "ERR_INVALID_URL",
].forEach((e) => {
  _e[e] = { value: e };
});
Object.defineProperties(b, _e);
Object.defineProperty(Te, "isAxiosError", { value: !0 });
b.from = (e, t, s, r, o, a) => {
  const n = Object.create(Te);
  return (
    d.toFlatObject(
      e,
      n,
      function (l) {
        return l !== Error.prototype;
      },
      (c) => c !== "isAxiosError"
    ),
    b.call(n, e.message, t, s, r, o),
    (n.cause = e),
    (n.name = e.name),
    a && Object.assign(n, a),
    n
  );
};
const Cs = null;
function ee(e) {
  return d.isPlainObject(e) || d.isArray(e);
}
function ve(e) {
  return d.endsWith(e, "[]") ? e.slice(0, -2) : e;
}
function fe(e, t, s) {
  return e
    ? e
        .concat(t)
        .map(function (o, a) {
          return (o = ve(o)), !s && a ? "[" + o + "]" : o;
        })
        .join(s ? "." : "")
    : t;
}
function Bs(e) {
  return d.isArray(e) && !e.some(ee);
}
const ks = d.toFlatObject(d, {}, null, function (t) {
  return /^is[A-Z]/.test(t);
});
function W(e, t, s) {
  if (!d.isObject(e)) throw new TypeError("target must be an object");
  (t = t || new FormData()),
    (s = d.toFlatObject(
      s,
      { metaTokens: !0, dots: !1, indexes: !1 },
      !1,
      function (x, j) {
        return !d.isUndefined(j[x]);
      }
    ));
  const r = s.metaTokens,
    o = s.visitor || h,
    a = s.dots,
    n = s.indexes,
    l = (s.Blob || (typeof Blob < "u" && Blob)) && d.isSpecCompliantForm(t);
  if (!d.isFunction(o)) throw new TypeError("visitor must be a function");
  function m(p) {
    if (p === null) return "";
    if (d.isDate(p)) return p.toISOString();
    if (!l && d.isBlob(p))
      throw new b("Blob is not supported. Use a Buffer instead.");
    return d.isArrayBuffer(p) || d.isTypedArray(p)
      ? l && typeof Blob == "function"
        ? new Blob([p])
        : Buffer.from(p)
      : p;
  }
  function h(p, x, j) {
    let E = p;
    if (p && !j && typeof p == "object") {
      if (d.endsWith(x, "{}"))
        (x = r ? x : x.slice(0, -2)), (p = JSON.stringify(p));
      else if (
        (d.isArray(p) && Bs(p)) ||
        ((d.isFileList(p) || d.endsWith(x, "[]")) && (E = d.toArray(p)))
      )
        return (
          (x = ve(x)),
          E.forEach(function (v, qe) {
            !(d.isUndefined(v) || v === null) &&
              t.append(
                n === !0 ? fe([x], qe, a) : n === null ? x : x + "[]",
                m(v)
              );
          }),
          !1
        );
    }
    return ee(p) ? !0 : (t.append(fe(j, x, a), m(p)), !1);
  }
  const i = [],
    f = Object.assign(ks, {
      defaultVisitor: h,
      convertValue: m,
      isVisitable: ee,
    });
  function N(p, x) {
    if (!d.isUndefined(p)) {
      if (i.indexOf(p) !== -1)
        throw Error("Circular reference detected in " + x.join("."));
      i.push(p),
        d.forEach(p, function (E, _) {
          (!(d.isUndefined(E) || E === null) &&
            o.call(t, E, d.isString(_) ? _.trim() : _, x, f)) === !0 &&
            N(E, x ? x.concat(_) : [_]);
        }),
        i.pop();
    }
  }
  if (!d.isObject(e)) throw new TypeError("data must be an object");
  return N(e), t;
}
function he(e) {
  const t = {
    "!": "%21",
    "'": "%27",
    "(": "%28",
    ")": "%29",
    "~": "%7E",
    "%20": "+",
    "%00": "\0",
  };
  return encodeURIComponent(e).replace(/[!'()~]|%20|%00/g, function (r) {
    return t[r];
  });
}
function oe(e, t) {
  (this._pairs = []), e && W(e, this, t);
}
const Ce = oe.prototype;
Ce.append = function (t, s) {
  this._pairs.push([t, s]);
};
Ce.toString = function (t) {
  const s = t
    ? function (r) {
        return t.call(this, r, he);
      }
    : he;
  return this._pairs
    .map(function (o) {
      return s(o[0]) + "=" + s(o[1]);
    }, "")
    .join("&");
};
function Fs(e) {
  return encodeURIComponent(e)
    .replace(/%3A/gi, ":")
    .replace(/%24/g, "$")
    .replace(/%2C/gi, ",")
    .replace(/%20/g, "+")
    .replace(/%5B/gi, "[")
    .replace(/%5D/gi, "]");
}
function Be(e, t, s) {
  if (!t) return e;
  const r = (s && s.encode) || Fs,
    o = s && s.serialize;
  let a;
  if (
    (o
      ? (a = o(t, s))
      : (a = d.isURLSearchParams(t) ? t.toString() : new oe(t, s).toString(r)),
    a)
  ) {
    const n = e.indexOf("#");
    n !== -1 && (e = e.slice(0, n)),
      (e += (e.indexOf("?") === -1 ? "?" : "&") + a);
  }
  return e;
}
class me {
  constructor() {
    this.handlers = [];
  }
  use(t, s, r) {
    return (
      this.handlers.push({
        fulfilled: t,
        rejected: s,
        synchronous: r ? r.synchronous : !1,
        runWhen: r ? r.runWhen : null,
      }),
      this.handlers.length - 1
    );
  }
  eject(t) {
    this.handlers[t] && (this.handlers[t] = null);
  }
  clear() {
    this.handlers && (this.handlers = []);
  }
  forEach(t) {
    d.forEach(this.handlers, function (r) {
      r !== null && t(r);
    });
  }
}
const ke = {
    silentJSONParsing: !0,
    forcedJSONParsing: !0,
    clarifyTimeoutError: !1,
  },
  Ds = typeof URLSearchParams < "u" ? URLSearchParams : oe,
  Ls = typeof FormData < "u" ? FormData : null,
  zs = typeof Blob < "u" ? Blob : null,
  Us = {
    isBrowser: !0,
    classes: { URLSearchParams: Ds, FormData: Ls, Blob: zs },
    protocols: ["http", "https", "file", "blob", "url", "data"],
  },
  Fe = typeof window < "u" && typeof document < "u",
  Hs = ((e) => Fe && ["ReactNative", "NativeScript", "NS"].indexOf(e) < 0)(
    typeof navigator < "u" && navigator.product
  ),
  Is =
    typeof WorkerGlobalScope < "u" &&
    self instanceof WorkerGlobalScope &&
    typeof self.importScripts == "function",
  qs = Object.freeze(
    Object.defineProperty(
      {
        __proto__: null,
        hasBrowserEnv: Fe,
        hasStandardBrowserEnv: Hs,
        hasStandardBrowserWebWorkerEnv: Is,
      },
      Symbol.toStringTag,
      { value: "Module" }
    )
  ),
  A = { ...qs, ...Us };
function Ms(e, t) {
  return W(
    e,
    new A.classes.URLSearchParams(),
    Object.assign(
      {
        visitor: function (s, r, o, a) {
          return A.isNode && d.isBuffer(s)
            ? (this.append(r, s.toString("base64")), !1)
            : a.defaultVisitor.apply(this, arguments);
        },
      },
      t
    )
  );
}
function Js(e) {
  return d
    .matchAll(/\w+|\[(\w*)]/g, e)
    .map((t) => (t[0] === "[]" ? "" : t[1] || t[0]));
}
function $s(e) {
  const t = {},
    s = Object.keys(e);
  let r;
  const o = s.length;
  let a;
  for (r = 0; r < o; r++) (a = s[r]), (t[a] = e[a]);
  return t;
}
function De(e) {
  function t(s, r, o, a) {
    let n = s[a++];
    if (n === "__proto__") return !0;
    const c = Number.isFinite(+n),
      l = a >= s.length;
    return (
      (n = !n && d.isArray(o) ? o.length : n),
      l
        ? (d.hasOwnProp(o, n) ? (o[n] = [o[n], r]) : (o[n] = r), !c)
        : ((!o[n] || !d.isObject(o[n])) && (o[n] = []),
          t(s, r, o[n], a) && d.isArray(o[n]) && (o[n] = $s(o[n])),
          !c)
    );
  }
  if (d.isFormData(e) && d.isFunction(e.entries)) {
    const s = {};
    return (
      d.forEachEntry(e, (r, o) => {
        t(Js(r), o, s, 0);
      }),
      s
    );
  }
  return null;
}
function Vs(e, t, s) {
  if (d.isString(e))
    try {
      return (t || JSON.parse)(e), d.trim(e);
    } catch (r) {
      if (r.name !== "SyntaxError") throw r;
    }
  return (s || JSON.stringify)(e);
}
const ie = {
  transitional: ke,
  adapter: ["xhr", "http"],
  transformRequest: [
    function (t, s) {
      const r = s.getContentType() || "",
        o = r.indexOf("application/json") > -1,
        a = d.isObject(t);
      if ((a && d.isHTMLForm(t) && (t = new FormData(t)), d.isFormData(t)))
        return o ? JSON.stringify(De(t)) : t;
      if (
        d.isArrayBuffer(t) ||
        d.isBuffer(t) ||
        d.isStream(t) ||
        d.isFile(t) ||
        d.isBlob(t)
      )
        return t;
      if (d.isArrayBufferView(t)) return t.buffer;
      if (d.isURLSearchParams(t))
        return (
          s.setContentType(
            "application/x-www-form-urlencoded;charset=utf-8",
            !1
          ),
          t.toString()
        );
      let c;
      if (a) {
        if (r.indexOf("application/x-www-form-urlencoded") > -1)
          return Ms(t, this.formSerializer).toString();
        if ((c = d.isFileList(t)) || r.indexOf("multipart/form-data") > -1) {
          const l = this.env && this.env.FormData;
          return W(c ? { "files[]": t } : t, l && new l(), this.formSerializer);
        }
      }
      return a || o ? (s.setContentType("application/json", !1), Vs(t)) : t;
    },
  ],
  transformResponse: [
    function (t) {
      const s = this.transitional || ie.transitional,
        r = s && s.forcedJSONParsing,
        o = this.responseType === "json";
      if (t && d.isString(t) && ((r && !this.responseType) || o)) {
        const n = !(s && s.silentJSONParsing) && o;
        try {
          return JSON.parse(t);
        } catch (c) {
          if (n)
            throw c.name === "SyntaxError"
              ? b.from(c, b.ERR_BAD_RESPONSE, this, null, this.response)
              : c;
        }
      }
      return t;
    },
  ],
  timeout: 0,
  xsrfCookieName: "XSRF-TOKEN",
  xsrfHeaderName: "X-XSRF-TOKEN",
  maxContentLength: -1,
  maxBodyLength: -1,
  env: { FormData: A.classes.FormData, Blob: A.classes.Blob },
  validateStatus: function (t) {
    return t >= 200 && t < 300;
  },
  headers: {
    common: {
      Accept: "application/json, text/plain, */*",
      "Content-Type": void 0,
    },
  },
};
d.forEach(["delete", "get", "head", "post", "put", "patch"], (e) => {
  ie.headers[e] = {};
});
const ae = ie,
  Ws = d.toObjectSet([
    "age",
    "authorization",
    "content-length",
    "content-type",
    "etag",
    "expires",
    "from",
    "host",
    "if-modified-since",
    "if-unmodified-since",
    "last-modified",
    "location",
    "max-forwards",
    "proxy-authorization",
    "referer",
    "retry-after",
    "user-agent",
  ]),
  Ks = (e) => {
    const t = {};
    let s, r, o;
    return (
      e &&
        e
          .split(
            `
`
          )
          .forEach(function (n) {
            (o = n.indexOf(":")),
              (s = n.substring(0, o).trim().toLowerCase()),
              (r = n.substring(o + 1).trim()),
              !(!s || (t[s] && Ws[s])) &&
                (s === "set-cookie"
                  ? t[s]
                    ? t[s].push(r)
                    : (t[s] = [r])
                  : (t[s] = t[s] ? t[s] + ", " + r : r));
          }),
      t
    );
  },
  pe = Symbol("internals");
function F(e) {
  return e && String(e).trim().toLowerCase();
}
function I(e) {
  return e === !1 || e == null ? e : d.isArray(e) ? e.map(I) : String(e);
}
function Ys(e) {
  const t = Object.create(null),
    s = /([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;
  let r;
  for (; (r = s.exec(e)); ) t[r[1]] = r[2];
  return t;
}
const Xs = (e) => /^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(e.trim());
function X(e, t, s, r, o) {
  if (d.isFunction(r)) return r.call(this, t, s);
  if ((o && (t = s), !!d.isString(t))) {
    if (d.isString(r)) return t.indexOf(r) !== -1;
    if (d.isRegExp(r)) return r.test(t);
  }
}
function Gs(e) {
  return e
    .trim()
    .toLowerCase()
    .replace(/([a-z\d])(\w*)/g, (t, s, r) => s.toUpperCase() + r);
}
function Qs(e, t) {
  const s = d.toCamelCase(" " + t);
  ["get", "set", "has"].forEach((r) => {
    Object.defineProperty(e, r + s, {
      value: function (o, a, n) {
        return this[r].call(this, t, o, a, n);
      },
      configurable: !0,
    });
  });
}
class K {
  constructor(t) {
    t && this.set(t);
  }
  set(t, s, r) {
    const o = this;
    function a(c, l, m) {
      const h = F(l);
      if (!h) throw new Error("header name must be a non-empty string");
      const i = d.findKey(o, h);
      (!i || o[i] === void 0 || m === !0 || (m === void 0 && o[i] !== !1)) &&
        (o[i || l] = I(c));
    }
    const n = (c, l) => d.forEach(c, (m, h) => a(m, h, l));
    return (
      d.isPlainObject(t) || t instanceof this.constructor
        ? n(t, s)
        : d.isString(t) && (t = t.trim()) && !Xs(t)
        ? n(Ks(t), s)
        : t != null && a(s, t, r),
      this
    );
  }
  get(t, s) {
    if (((t = F(t)), t)) {
      const r = d.findKey(this, t);
      if (r) {
        const o = this[r];
        if (!s) return o;
        if (s === !0) return Ys(o);
        if (d.isFunction(s)) return s.call(this, o, r);
        if (d.isRegExp(s)) return s.exec(o);
        throw new TypeError("parser must be boolean|regexp|function");
      }
    }
  }
  has(t, s) {
    if (((t = F(t)), t)) {
      const r = d.findKey(this, t);
      return !!(r && this[r] !== void 0 && (!s || X(this, this[r], r, s)));
    }
    return !1;
  }
  delete(t, s) {
    const r = this;
    let o = !1;
    function a(n) {
      if (((n = F(n)), n)) {
        const c = d.findKey(r, n);
        c && (!s || X(r, r[c], c, s)) && (delete r[c], (o = !0));
      }
    }
    return d.isArray(t) ? t.forEach(a) : a(t), o;
  }
  clear(t) {
    const s = Object.keys(this);
    let r = s.length,
      o = !1;
    for (; r--; ) {
      const a = s[r];
      (!t || X(this, this[a], a, t, !0)) && (delete this[a], (o = !0));
    }
    return o;
  }
  normalize(t) {
    const s = this,
      r = {};
    return (
      d.forEach(this, (o, a) => {
        const n = d.findKey(r, a);
        if (n) {
          (s[n] = I(o)), delete s[a];
          return;
        }
        const c = t ? Gs(a) : String(a).trim();
        c !== a && delete s[a], (s[c] = I(o)), (r[c] = !0);
      }),
      this
    );
  }
  concat(...t) {
    return this.constructor.concat(this, ...t);
  }
  toJSON(t) {
    const s = Object.create(null);
    return (
      d.forEach(this, (r, o) => {
        r != null && r !== !1 && (s[o] = t && d.isArray(r) ? r.join(", ") : r);
      }),
      s
    );
  }
  [Symbol.iterator]() {
    return Object.entries(this.toJSON())[Symbol.iterator]();
  }
  toString() {
    return Object.entries(this.toJSON()).map(([t, s]) => t + ": " + s).join(`
`);
  }
  get [Symbol.toStringTag]() {
    return "AxiosHeaders";
  }
  static from(t) {
    return t instanceof this ? t : new this(t);
  }
  static concat(t, ...s) {
    const r = new this(t);
    return s.forEach((o) => r.set(o)), r;
  }
  static accessor(t) {
    const r = (this[pe] = this[pe] = { accessors: {} }).accessors,
      o = this.prototype;
    function a(n) {
      const c = F(n);
      r[c] || (Qs(o, n), (r[c] = !0));
    }
    return d.isArray(t) ? t.forEach(a) : a(t), this;
  }
}
K.accessor([
  "Content-Type",
  "Content-Length",
  "Accept",
  "Accept-Encoding",
  "User-Agent",
  "Authorization",
]);
d.reduceDescriptors(K.prototype, ({ value: e }, t) => {
  let s = t[0].toUpperCase() + t.slice(1);
  return {
    get: () => e,
    set(r) {
      this[s] = r;
    },
  };
});
d.freezeMethods(K);
const T = K;
function G(e, t) {
  const s = this || ae,
    r = t || s,
    o = T.from(r.headers);
  let a = r.data;
  return (
    d.forEach(e, function (c) {
      a = c.call(s, a, o.normalize(), t ? t.status : void 0);
    }),
    o.normalize(),
    a
  );
}
function Le(e) {
  return !!(e && e.__CANCEL__);
}
function U(e, t, s) {
  b.call(this, e ?? "canceled", b.ERR_CANCELED, t, s),
    (this.name = "CanceledError");
}
d.inherits(U, b, { __CANCEL__: !0 });
function Zs(e, t, s) {
  const r = s.config.validateStatus;
  !s.status || !r || r(s.status)
    ? e(s)
    : t(
        new b(
          "Request failed with status code " + s.status,
          [b.ERR_BAD_REQUEST, b.ERR_BAD_RESPONSE][
            Math.floor(s.status / 100) - 4
          ],
          s.config,
          s.request,
          s
        )
      );
}
const er = A.hasStandardBrowserEnv
  ? {
      write(e, t, s, r, o, a) {
        const n = [e + "=" + encodeURIComponent(t)];
        d.isNumber(s) && n.push("expires=" + new Date(s).toGMTString()),
          d.isString(r) && n.push("path=" + r),
          d.isString(o) && n.push("domain=" + o),
          a === !0 && n.push("secure"),
          (document.cookie = n.join("; "));
      },
      read(e) {
        const t = document.cookie.match(
          new RegExp("(^|;\\s*)(" + e + ")=([^;]*)")
        );
        return t ? decodeURIComponent(t[3]) : null;
      },
      remove(e) {
        this.write(e, "", Date.now() - 864e5);
      },
    }
  : {
      write() {},
      read() {
        return null;
      },
      remove() {},
    };
function tr(e) {
  return /^([a-z][a-z\d+\-.]*:)?\/\//i.test(e);
}
function sr(e, t) {
  return t ? e.replace(/\/?\/$/, "") + "/" + t.replace(/^\/+/, "") : e;
}
function ze(e, t) {
  return e && !tr(t) ? sr(e, t) : t;
}
const rr = A.hasStandardBrowserEnv
  ? (function () {
      const t = /(msie|trident)/i.test(navigator.userAgent),
        s = document.createElement("a");
      let r;
      function o(a) {
        let n = a;
        return (
          t && (s.setAttribute("href", n), (n = s.href)),
          s.setAttribute("href", n),
          {
            href: s.href,
            protocol: s.protocol ? s.protocol.replace(/:$/, "") : "",
            host: s.host,
            search: s.search ? s.search.replace(/^\?/, "") : "",
            hash: s.hash ? s.hash.replace(/^#/, "") : "",
            hostname: s.hostname,
            port: s.port,
            pathname:
              s.pathname.charAt(0) === "/" ? s.pathname : "/" + s.pathname,
          }
        );
      }
      return (
        (r = o(window.location.href)),
        function (n) {
          const c = d.isString(n) ? o(n) : n;
          return c.protocol === r.protocol && c.host === r.host;
        }
      );
    })()
  : (function () {
      return function () {
        return !0;
      };
    })();
function nr(e) {
  const t = /^([-+\w]{1,25})(:?\/\/|:)/.exec(e);
  return (t && t[1]) || "";
}
function or(e, t) {
  e = e || 10;
  const s = new Array(e),
    r = new Array(e);
  let o = 0,
    a = 0,
    n;
  return (
    (t = t !== void 0 ? t : 1e3),
    function (l) {
      const m = Date.now(),
        h = r[a];
      n || (n = m), (s[o] = l), (r[o] = m);
      let i = a,
        f = 0;
      for (; i !== o; ) (f += s[i++]), (i = i % e);
      if (((o = (o + 1) % e), o === a && (a = (a + 1) % e), m - n < t)) return;
      const N = h && m - h;
      return N ? Math.round((f * 1e3) / N) : void 0;
    }
  );
}
function xe(e, t) {
  let s = 0;
  const r = or(50, 250);
  return (o) => {
    const a = o.loaded,
      n = o.lengthComputable ? o.total : void 0,
      c = a - s,
      l = r(c),
      m = a <= n;
    s = a;
    const h = {
      loaded: a,
      total: n,
      progress: n ? a / n : void 0,
      bytes: c,
      rate: l || void 0,
      estimated: l && n && m ? (n - a) / l : void 0,
      event: o,
    };
    (h[t ? "download" : "upload"] = !0), e(h);
  };
}
const ir = typeof XMLHttpRequest < "u",
  ar =
    ir &&
    function (e) {
      return new Promise(function (s, r) {
        let o = e.data;
        const a = T.from(e.headers).normalize();
        let { responseType: n, withXSRFToken: c } = e,
          l;
        function m() {
          e.cancelToken && e.cancelToken.unsubscribe(l),
            e.signal && e.signal.removeEventListener("abort", l);
        }
        let h;
        if (d.isFormData(o)) {
          if (A.hasStandardBrowserEnv || A.hasStandardBrowserWebWorkerEnv)
            a.setContentType(!1);
          else if ((h = a.getContentType()) !== !1) {
            const [x, ...j] = h
              ? h
                  .split(";")
                  .map((E) => E.trim())
                  .filter(Boolean)
              : [];
            a.setContentType([x || "multipart/form-data", ...j].join("; "));
          }
        }
        let i = new XMLHttpRequest();
        if (e.auth) {
          const x = e.auth.username || "",
            j = e.auth.password
              ? unescape(encodeURIComponent(e.auth.password))
              : "";
          a.set("Authorization", "Basic " + btoa(x + ":" + j));
        }
        const f = ze(e.baseURL, e.url);
        i.open(e.method.toUpperCase(), Be(f, e.params, e.paramsSerializer), !0),
          (i.timeout = e.timeout);
        function N() {
          if (!i) return;
          const x = T.from(
              "getAllResponseHeaders" in i && i.getAllResponseHeaders()
            ),
            E = {
              data:
                !n || n === "text" || n === "json"
                  ? i.responseText
                  : i.response,
              status: i.status,
              statusText: i.statusText,
              headers: x,
              config: e,
              request: i,
            };
          Zs(
            function (v) {
              s(v), m();
            },
            function (v) {
              r(v), m();
            },
            E
          ),
            (i = null);
        }
        if (
          ("onloadend" in i
            ? (i.onloadend = N)
            : (i.onreadystatechange = function () {
                !i ||
                  i.readyState !== 4 ||
                  (i.status === 0 &&
                    !(i.responseURL && i.responseURL.indexOf("file:") === 0)) ||
                  setTimeout(N);
              }),
          (i.onabort = function () {
            i &&
              (r(new b("Request aborted", b.ECONNABORTED, e, i)), (i = null));
          }),
          (i.onerror = function () {
            r(new b("Network Error", b.ERR_NETWORK, e, i)), (i = null);
          }),
          (i.ontimeout = function () {
            let j = e.timeout
              ? "timeout of " + e.timeout + "ms exceeded"
              : "timeout exceeded";
            const E = e.transitional || ke;
            e.timeoutErrorMessage && (j = e.timeoutErrorMessage),
              r(
                new b(
                  j,
                  E.clarifyTimeoutError ? b.ETIMEDOUT : b.ECONNABORTED,
                  e,
                  i
                )
              ),
              (i = null);
          }),
          A.hasStandardBrowserEnv &&
            (c && d.isFunction(c) && (c = c(e)), c || (c !== !1 && rr(f))))
        ) {
          const x =
            e.xsrfHeaderName && e.xsrfCookieName && er.read(e.xsrfCookieName);
          x && a.set(e.xsrfHeaderName, x);
        }
        o === void 0 && a.setContentType(null),
          "setRequestHeader" in i &&
            d.forEach(a.toJSON(), function (j, E) {
              i.setRequestHeader(E, j);
            }),
          d.isUndefined(e.withCredentials) ||
            (i.withCredentials = !!e.withCredentials),
          n && n !== "json" && (i.responseType = e.responseType),
          typeof e.onDownloadProgress == "function" &&
            i.addEventListener("progress", xe(e.onDownloadProgress, !0)),
          typeof e.onUploadProgress == "function" &&
            i.upload &&
            i.upload.addEventListener("progress", xe(e.onUploadProgress)),
          (e.cancelToken || e.signal) &&
            ((l = (x) => {
              i &&
                (r(!x || x.type ? new U(null, e, i) : x),
                i.abort(),
                (i = null));
            }),
            e.cancelToken && e.cancelToken.subscribe(l),
            e.signal &&
              (e.signal.aborted ? l() : e.signal.addEventListener("abort", l)));
        const p = nr(f);
        if (p && A.protocols.indexOf(p) === -1) {
          r(new b("Unsupported protocol " + p + ":", b.ERR_BAD_REQUEST, e));
          return;
        }
        i.send(o || null);
      });
    },
  te = { http: Cs, xhr: ar };
d.forEach(te, (e, t) => {
  if (e) {
    try {
      Object.defineProperty(e, "name", { value: t });
    } catch {}
    Object.defineProperty(e, "adapterName", { value: t });
  }
});
const be = (e) => `- ${e}`,
  cr = (e) => d.isFunction(e) || e === null || e === !1,
  Ue = {
    getAdapter: (e) => {
      e = d.isArray(e) ? e : [e];
      const { length: t } = e;
      let s, r;
      const o = {};
      for (let a = 0; a < t; a++) {
        s = e[a];
        let n;
        if (
          ((r = s),
          !cr(s) && ((r = te[(n = String(s)).toLowerCase()]), r === void 0))
        )
          throw new b(`Unknown adapter '${n}'`);
        if (r) break;
        o[n || "#" + a] = r;
      }
      if (!r) {
        const a = Object.entries(o).map(
          ([c, l]) =>
            `adapter ${c} ` +
            (l === !1
              ? "is not supported by the environment"
              : "is not available in the build")
        );
        let n = t
          ? a.length > 1
            ? `since :
` +
              a.map(be).join(`
`)
            : " " + be(a[0])
          : "as no adapter specified";
        throw new b(
          "There is no suitable adapter to dispatch the request " + n,
          "ERR_NOT_SUPPORT"
        );
      }
      return r;
    },
    adapters: te,
  };
function Q(e) {
  if (
    (e.cancelToken && e.cancelToken.throwIfRequested(),
    e.signal && e.signal.aborted)
  )
    throw new U(null, e);
}
function ge(e) {
  return (
    Q(e),
    (e.headers = T.from(e.headers)),
    (e.data = G.call(e, e.transformRequest)),
    ["post", "put", "patch"].indexOf(e.method) !== -1 &&
      e.headers.setContentType("application/x-www-form-urlencoded", !1),
    Ue.getAdapter(e.adapter || ae.adapter)(e).then(
      function (r) {
        return (
          Q(e),
          (r.data = G.call(e, e.transformResponse, r)),
          (r.headers = T.from(r.headers)),
          r
        );
      },
      function (r) {
        return (
          Le(r) ||
            (Q(e),
            r &&
              r.response &&
              ((r.response.data = G.call(e, e.transformResponse, r.response)),
              (r.response.headers = T.from(r.response.headers)))),
          Promise.reject(r)
        );
      }
    )
  );
}
const we = (e) => (e instanceof T ? { ...e } : e);
function B(e, t) {
  t = t || {};
  const s = {};
  function r(m, h, i) {
    return d.isPlainObject(m) && d.isPlainObject(h)
      ? d.merge.call({ caseless: i }, m, h)
      : d.isPlainObject(h)
      ? d.merge({}, h)
      : d.isArray(h)
      ? h.slice()
      : h;
  }
  function o(m, h, i) {
    if (d.isUndefined(h)) {
      if (!d.isUndefined(m)) return r(void 0, m, i);
    } else return r(m, h, i);
  }
  function a(m, h) {
    if (!d.isUndefined(h)) return r(void 0, h);
  }
  function n(m, h) {
    if (d.isUndefined(h)) {
      if (!d.isUndefined(m)) return r(void 0, m);
    } else return r(void 0, h);
  }
  function c(m, h, i) {
    if (i in t) return r(m, h);
    if (i in e) return r(void 0, m);
  }
  const l = {
    url: a,
    method: a,
    data: a,
    baseURL: n,
    transformRequest: n,
    transformResponse: n,
    paramsSerializer: n,
    timeout: n,
    timeoutMessage: n,
    withCredentials: n,
    withXSRFToken: n,
    adapter: n,
    responseType: n,
    xsrfCookieName: n,
    xsrfHeaderName: n,
    onUploadProgress: n,
    onDownloadProgress: n,
    decompress: n,
    maxContentLength: n,
    maxBodyLength: n,
    beforeRedirect: n,
    transport: n,
    httpAgent: n,
    httpsAgent: n,
    cancelToken: n,
    socketPath: n,
    responseEncoding: n,
    validateStatus: c,
    headers: (m, h) => o(we(m), we(h), !0),
  };
  return (
    d.forEach(Object.keys(Object.assign({}, e, t)), function (h) {
      const i = l[h] || o,
        f = i(e[h], t[h], h);
      (d.isUndefined(f) && i !== c) || (s[h] = f);
    }),
    s
  );
}
const He = "1.6.8",
  ce = {};
["object", "boolean", "number", "function", "string", "symbol"].forEach(
  (e, t) => {
    ce[e] = function (r) {
      return typeof r === e || "a" + (t < 1 ? "n " : " ") + e;
    };
  }
);
const ye = {};
ce.transitional = function (t, s, r) {
  function o(a, n) {
    return (
      "[Axios v" +
      He +
      "] Transitional option '" +
      a +
      "'" +
      n +
      (r ? ". " + r : "")
    );
  }
  return (a, n, c) => {
    if (t === !1)
      throw new b(
        o(n, " has been removed" + (s ? " in " + s : "")),
        b.ERR_DEPRECATED
      );
    return (
      s &&
        !ye[n] &&
        ((ye[n] = !0),
        console.warn(
          o(
            n,
            " has been deprecated since v" +
              s +
              " and will be removed in the near future"
          )
        )),
      t ? t(a, n, c) : !0
    );
  };
};
function lr(e, t, s) {
  if (typeof e != "object")
    throw new b("options must be an object", b.ERR_BAD_OPTION_VALUE);
  const r = Object.keys(e);
  let o = r.length;
  for (; o-- > 0; ) {
    const a = r[o],
      n = t[a];
    if (n) {
      const c = e[a],
        l = c === void 0 || n(c, a, e);
      if (l !== !0)
        throw new b("option " + a + " must be " + l, b.ERR_BAD_OPTION_VALUE);
      continue;
    }
    if (s !== !0) throw new b("Unknown option " + a, b.ERR_BAD_OPTION);
  }
}
const se = { assertOptions: lr, validators: ce },
  C = se.validators;
class M {
  constructor(t) {
    (this.defaults = t),
      (this.interceptors = { request: new me(), response: new me() });
  }
  async request(t, s) {
    try {
      return await this._request(t, s);
    } catch (r) {
      if (r instanceof Error) {
        let o;
        Error.captureStackTrace
          ? Error.captureStackTrace((o = {}))
          : (o = new Error());
        const a = o.stack ? o.stack.replace(/^.+\n/, "") : "";
        r.stack
          ? a &&
            !String(r.stack).endsWith(a.replace(/^.+\n.+\n/, "")) &&
            (r.stack +=
              `
` + a)
          : (r.stack = a);
      }
      throw r;
    }
  }
  _request(t, s) {
    typeof t == "string" ? ((s = s || {}), (s.url = t)) : (s = t || {}),
      (s = B(this.defaults, s));
    const { transitional: r, paramsSerializer: o, headers: a } = s;
    r !== void 0 &&
      se.assertOptions(
        r,
        {
          silentJSONParsing: C.transitional(C.boolean),
          forcedJSONParsing: C.transitional(C.boolean),
          clarifyTimeoutError: C.transitional(C.boolean),
        },
        !1
      ),
      o != null &&
        (d.isFunction(o)
          ? (s.paramsSerializer = { serialize: o })
          : se.assertOptions(
              o,
              { encode: C.function, serialize: C.function },
              !0
            )),
      (s.method = (s.method || this.defaults.method || "get").toLowerCase());
    let n = a && d.merge(a.common, a[s.method]);
    a &&
      d.forEach(
        ["delete", "get", "head", "post", "put", "patch", "common"],
        (p) => {
          delete a[p];
        }
      ),
      (s.headers = T.concat(n, a));
    const c = [];
    let l = !0;
    this.interceptors.request.forEach(function (x) {
      (typeof x.runWhen == "function" && x.runWhen(s) === !1) ||
        ((l = l && x.synchronous), c.unshift(x.fulfilled, x.rejected));
    });
    const m = [];
    this.interceptors.response.forEach(function (x) {
      m.push(x.fulfilled, x.rejected);
    });
    let h,
      i = 0,
      f;
    if (!l) {
      const p = [ge.bind(this), void 0];
      for (
        p.unshift.apply(p, c),
          p.push.apply(p, m),
          f = p.length,
          h = Promise.resolve(s);
        i < f;

      )
        h = h.then(p[i++], p[i++]);
      return h;
    }
    f = c.length;
    let N = s;
    for (i = 0; i < f; ) {
      const p = c[i++],
        x = c[i++];
      try {
        N = p(N);
      } catch (j) {
        x.call(this, j);
        break;
      }
    }
    try {
      h = ge.call(this, N);
    } catch (p) {
      return Promise.reject(p);
    }
    for (i = 0, f = m.length; i < f; ) h = h.then(m[i++], m[i++]);
    return h;
  }
  getUri(t) {
    t = B(this.defaults, t);
    const s = ze(t.baseURL, t.url);
    return Be(s, t.params, t.paramsSerializer);
  }
}
d.forEach(["delete", "get", "head", "options"], function (t) {
  M.prototype[t] = function (s, r) {
    return this.request(
      B(r || {}, { method: t, url: s, data: (r || {}).data })
    );
  };
});
d.forEach(["post", "put", "patch"], function (t) {
  function s(r) {
    return function (a, n, c) {
      return this.request(
        B(c || {}, {
          method: t,
          headers: r ? { "Content-Type": "multipart/form-data" } : {},
          url: a,
          data: n,
        })
      );
    };
  }
  (M.prototype[t] = s()), (M.prototype[t + "Form"] = s(!0));
});
const q = M;
class le {
  constructor(t) {
    if (typeof t != "function")
      throw new TypeError("executor must be a function.");
    let s;
    this.promise = new Promise(function (a) {
      s = a;
    });
    const r = this;
    this.promise.then((o) => {
      if (!r._listeners) return;
      let a = r._listeners.length;
      for (; a-- > 0; ) r._listeners[a](o);
      r._listeners = null;
    }),
      (this.promise.then = (o) => {
        let a;
        const n = new Promise((c) => {
          r.subscribe(c), (a = c);
        }).then(o);
        return (
          (n.cancel = function () {
            r.unsubscribe(a);
          }),
          n
        );
      }),
      t(function (a, n, c) {
        r.reason || ((r.reason = new U(a, n, c)), s(r.reason));
      });
  }
  throwIfRequested() {
    if (this.reason) throw this.reason;
  }
  subscribe(t) {
    if (this.reason) {
      t(this.reason);
      return;
    }
    this._listeners ? this._listeners.push(t) : (this._listeners = [t]);
  }
  unsubscribe(t) {
    if (!this._listeners) return;
    const s = this._listeners.indexOf(t);
    s !== -1 && this._listeners.splice(s, 1);
  }
  static source() {
    let t;
    return {
      token: new le(function (o) {
        t = o;
      }),
      cancel: t,
    };
  }
}
const ur = le;
function dr(e) {
  return function (s) {
    return e.apply(null, s);
  };
}
function fr(e) {
  return d.isObject(e) && e.isAxiosError === !0;
}
const re = {
  Continue: 100,
  SwitchingProtocols: 101,
  Processing: 102,
  EarlyHints: 103,
  Ok: 200,
  Created: 201,
  Accepted: 202,
  NonAuthoritativeInformation: 203,
  NoContent: 204,
  ResetContent: 205,
  PartialContent: 206,
  MultiStatus: 207,
  AlreadyReported: 208,
  ImUsed: 226,
  MultipleChoices: 300,
  MovedPermanently: 301,
  Found: 302,
  SeeOther: 303,
  NotModified: 304,
  UseProxy: 305,
  Unused: 306,
  TemporaryRedirect: 307,
  PermanentRedirect: 308,
  BadRequest: 400,
  Unauthorized: 401,
  PaymentRequired: 402,
  Forbidden: 403,
  NotFound: 404,
  MethodNotAllowed: 405,
  NotAcceptable: 406,
  ProxyAuthenticationRequired: 407,
  RequestTimeout: 408,
  Conflict: 409,
  Gone: 410,
  LengthRequired: 411,
  PreconditionFailed: 412,
  PayloadTooLarge: 413,
  UriTooLong: 414,
  UnsupportedMediaType: 415,
  RangeNotSatisfiable: 416,
  ExpectationFailed: 417,
  ImATeapot: 418,
  MisdirectedRequest: 421,
  UnprocessableEntity: 422,
  Locked: 423,
  FailedDependency: 424,
  TooEarly: 425,
  UpgradeRequired: 426,
  PreconditionRequired: 428,
  TooManyRequests: 429,
  RequestHeaderFieldsTooLarge: 431,
  UnavailableForLegalReasons: 451,
  InternalServerError: 500,
  NotImplemented: 501,
  BadGateway: 502,
  ServiceUnavailable: 503,
  GatewayTimeout: 504,
  HttpVersionNotSupported: 505,
  VariantAlsoNegotiates: 506,
  InsufficientStorage: 507,
  LoopDetected: 508,
  NotExtended: 510,
  NetworkAuthenticationRequired: 511,
};
Object.entries(re).forEach(([e, t]) => {
  re[t] = e;
});
const hr = re;
function Ie(e) {
  const t = new q(e),
    s = je(q.prototype.request, t);
  return (
    d.extend(s, q.prototype, t, { allOwnKeys: !0 }),
    d.extend(s, t, null, { allOwnKeys: !0 }),
    (s.create = function (o) {
      return Ie(B(e, o));
    }),
    s
  );
}
const y = Ie(ae);
y.Axios = q;
y.CanceledError = U;
y.CancelToken = ur;
y.isCancel = Le;
y.VERSION = He;
y.toFormData = W;
y.AxiosError = b;
y.Cancel = y.CanceledError;
y.all = function (t) {
  return Promise.all(t);
};
y.spread = dr;
y.isAxiosError = fr;
y.mergeConfig = B;
y.AxiosHeaders = T;
y.formToJSON = (e) => De(d.isHTMLForm(e) ? new FormData(e) : e);
y.getAdapter = Ue.getAdapter;
y.HttpStatusCode = hr;
y.default = y;
const mr = () => {
  const e = R.useRef(),
    t = R.useRef(),
    [s, r] = R.useState(0);
  (async () => {
    try {
      const l = await y.get(
        "https://api.geckoterminal.com/api/v2/networks/solana/tokens/0xcomingsoon"
      );
      r(
        (
          (l.data.data.attributes.total_supply *
            l.data.data.attributes.price_usd) /
          1e12
        ).toFixed(1)
      );
    } catch (l) {
      console.log(l);
    }
  })();
  const a = 100,
    n = (l = 0) => new Promise((m) => setTimeout(m, l)),
    c = async (l, m) => {
      await n(m * 1e3), (t.current.src = l);
    };
  return (
    R.useEffect(() => {
      console.log(s);
      const l = D.timeline(),
        h = 6370 / a;
      var i = s * h,
        f = 0;
      c(w, f),
        i <= 75
          ? l.fromTo(
              e.current,
              { xPercent: 0, yPercent: 0 },
              { yPercent: -i, ease: "out", duration: 1 }
            )
          : l.fromTo(
              e.current,
              { xPercent: 0, yPercent: 0 },
              { yPercent: -75, ease: "out", duration: 1 }
            ),
        75 < i && i <= 150
          ? (c(P, (f += 1)),
            l.to(e.current, {
              xPercent: 30,
              yPercent: -i,
              ease: "out",
              duration: 0.5,
            }),
            l.to(e.current, { xPercent: 70, ease: "out", duration: 0.5 }))
          : i > 150 &&
            (c(P, (f += 1)),
            l.to(e.current, {
              xPercent: 30,
              yPercent: -150,
              ease: "out",
              duration: 0.5,
            }),
            l.to(e.current, { xPercent: 70, ease: "out", duration: 0.5 })),
        150 < i && i <= 680
          ? (c(w, (f += 1)),
            l.to(e.current, { yPercent: -i, ease: "out", duration: 2 }))
          : i > 680 &&
            (c(w, (f += 1)),
            l.to(e.current, { yPercent: -680, ease: "out", duration: 2 })),
        680 < i && i <= 770
          ? (l.to(e.current, {
              xPercent: 120,
              yPercent: -i,
              ease: "out",
              duration: 0.5,
            }),
            c(P, (f += 2.5)),
            l.to(e.current, { xPercent: 140, ease: "out", duration: 0.5 }))
          : i > 770 &&
            (l.to(e.current, {
              xPercent: 120,
              yPercent: -770,
              ease: "out",
              duration: 0.5,
            }),
            c(P, (f += 2.5)),
            l.to(e.current, { xPercent: 140, ease: "out", duration: 0.5 })),
        770 < i && i <= 1530
          ? (c(w, (f += 0.5)),
            l.to(e.current, { yPercent: -i, ease: "out", duration: 2 }))
          : i > 1530 &&
            (c(w, (f += 0.5)),
            l.to(e.current, { yPercent: -1530, ease: "out", duration: 2 })),
        1530 < i && i <= 1600
          ? (l.to(e.current, {
              xPercent: 160,
              yPercent: -i,
              ease: "out",
              duration: 0.5,
            }),
            c(P, (f += 2.5)),
            l.to(e.current, { xPercent: 190, ease: "out", duration: 0.5 }))
          : i > 1600 &&
            (l.to(e.current, {
              xPercent: 160,
              yPercent: -1600,
              ease: "out",
              duration: 0.5,
            }),
            c(P, (f += 2.5)),
            l.to(e.current, { xPercent: 190, ease: "out", duration: 0.5 })),
        1600 < i && i <= 2500
          ? (c(w, (f += 0.5)),
            l.to(e.current, { yPercent: -i, ease: "out", duration: 2 }))
          : i > 2500 &&
            (c(w, (f += 0.5)),
            l.to(e.current, { yPercent: -2500, ease: "out", duration: 2 })),
        2500 < i && i <= 2580
          ? (l.to(e.current, {
              xPercent: 230,
              yPercent: -i,
              ease: "out",
              duration: 0.5,
            }),
            c(P, (f += 2.5)),
            l.to(e.current, { xPercent: 260, ease: "out", duration: 0.5 }))
          : i > 2580 &&
            (l.to(e.current, {
              xPercent: 230,
              yPercent: -2580,
              ease: "out",
              duration: 0.5,
            }),
            c(P, (f += 2.5)),
            l.to(e.current, { xPercent: 260, ease: "out", duration: 0.5 })),
        2580 < i && i <= 3750
          ? (c(w, (f += 0.5)),
            l.to(e.current, { yPercent: -i, ease: "out", duration: 2 }))
          : i > 3750 &&
            (c(w, (f += 0.5)),
            l.to(e.current, { yPercent: -3750, ease: "out", duration: 2 })),
        3750 < i && i <= 3825
          ? (l.to(e.current, {
              xPercent: 290,
              yPercent: -i,
              ease: "out",
              duration: 0.5,
            }),
            c(P, (f += 2.5)),
            l.to(e.current, { xPercent: 320, ease: "out", duration: 0.5 }))
          : i > 3825 &&
            (l.to(e.current, {
              xPercent: 290,
              yPercent: -3825,
              ease: "out",
              duration: 0.5,
            }),
            c(P, (f += 2.5)),
            l.to(e.current, { xPercent: 320, ease: "out", duration: 0.5 })),
        3825 < i && i <= 4470
          ? (c(w, (f += 0.5)),
            l.to(e.current, { yPercent: -i, ease: "out", duration: 2 }))
          : i > 4470 &&
            (c(w, (f += 0.5)),
            l.to(e.current, { yPercent: -4470, ease: "out", duration: 2 })),
        4470 < i && i <= 4550
          ? (l.to(e.current, {
              xPercent: 340,
              yPercent: -i,
              ease: "out",
              duration: 0.5,
            }),
            c(P, (f += 2.5)),
            l.to(e.current, { xPercent: 350, ease: "out", duration: 0.5 }))
          : i > 4550 &&
            (l.to(e.current, {
              xPercent: 340,
              yPercent: -4550,
              ease: "out",
              duration: 0.5,
            }),
            c(P, (f += 2.5)),
            l.to(e.current, { xPercent: 350, ease: "out", duration: 0.5 })),
        4550 < i && i <= 5e3
          ? (c(w, (f += 0.5)),
            l.to(e.current, { yPercent: -i, ease: "out", duration: 2 }))
          : i > 5e3 &&
            (c(w, (f += 0.5)),
            l.to(e.current, { yPercent: -5e3, ease: "out", duration: 2 })),
        5e3 < i && i <= 5060
          ? (l.to(e.current, {
              xPercent: 370,
              yPercent: -i,
              ease: "out",
              duration: 0.5,
            }),
            c(P, (f += 2.5)),
            l.to(e.current, { xPercent: 380, ease: "out", duration: 0.5 }))
          : i > 5060 &&
            (l.to(e.current, {
              xPercent: 370,
              yPercent: -5060,
              ease: "out",
              duration: 0.5,
            }),
            c(P, (f += 2.5)),
            l.to(e.current, { xPercent: 380, ease: "out", duration: 0.5 })),
        5060 < i && i <= 5450
          ? (c(w, (f += 0.5)),
            l.to(e.current, { yPercent: -i, ease: "out", duration: 2 }))
          : i > 5450 &&
            (c(w, (f += 0.5)),
            l.to(e.current, { yPercent: -5450, ease: "out", duration: 2 })),
        5450 < i && i <= 5530
          ? (l.to(e.current, {
              xPercent: 400,
              yPercent: -i,
              ease: "out",
              duration: 0.5,
            }),
            c(P, (f += 2.5)),
            l.to(e.current, { xPercent: 410, ease: "out", duration: 0.5 }))
          : i > 5530 &&
            (l.to(e.current, {
              xPercent: 400,
              yPercent: -5530,
              ease: "out",
              duration: 0.5,
            }),
            c(P, (f += 2.5)),
            l.to(e.current, { xPercent: 410, ease: "out", duration: 0.5 })),
        5530 < i && i <= 5900
          ? (c(w, (f += 0.5)),
            l.to(e.current, { yPercent: -i, ease: "out", duration: 2 }))
          : i > 5900 &&
            (c(w, (f += 0.5)),
            l.to(e.current, { yPercent: -5900, ease: "out", duration: 2 })),
        5900 < i && i <= 5950
          ? (l.to(e.current, {
              xPercent: 420,
              yPercent: -i,
              ease: "out",
              duration: 0.5,
            }),
            c(P, (f += 2.5)),
            l.to(e.current, { xPercent: 440, ease: "out", duration: 0.5 }))
          : i > 5950 &&
            (l.to(e.current, {
              xPercent: 420,
              yPercent: -5950,
              ease: "out",
              duration: 0.5,
            }),
            c(P, (f += 2.5)),
            l.to(e.current, { xPercent: 440, ease: "out", duration: 0.5 })),
        5950 < i && i <= 5980
          ? (c(w, (f += 0.5)),
            l.to(e.current, { yPercent: -i, ease: "out", duration: 2 }))
          : i > 5980 &&
            (c(w, (f += 0.5)),
            l.to(e.current, { yPercent: -5980, ease: "out", duration: 2 })),
        5980 < i && i <= 6e3
          ? l.to(e.current, {
              xPercent: 460,
              yPercent: -i,
              ease: "out",
              duration: 0.5,
            })
          : i > 6e3 &&
            l.to(e.current, {
              xPercent: 460,
              yPercent: -6e3,
              ease: "out",
              duration: 0.5,
            }),
        6e3 < i && i <= 6150
          ? l.to(e.current, { yPercent: -i, ease: "out", duration: 1 })
          : i > 6150 &&
            l.to(e.current, { yPercent: -6150, ease: "out", duration: 1 }),
        6150 < i && i <= 6230
          ? l.to(e.current, {
              xPercent: 470,
              yPercent: -i,
              ease: "out",
              duration: 0.5,
            })
          : i > 6230 &&
            l.to(e.current, {
              xPercent: 470,
              yPercent: -6230,
              ease: "out",
              duration: 0.5,
            }),
        6230 < i && i <= 6370
          ? l.to(e.current, { yPercent: -i, ease: "out", duration: 1.5 })
          : i > 6370 &&
            l.to(e.current, { yPercent: -6370, ease: "out", duration: 1.5 }),
        c(Ht, (f += 3.5));
    }, [s]),
    u.jsx("div", {
      className: "climber h-[4.5%] left-[4%] bottom-[5%] absolute",
      ref: e,
      children: u.jsx("img", {
        src: w,
        className: "h-full object-cover",
        ref: t,
      }),
    })
  );
};
function pr() {
  return u.jsx("div", {
    className: "fixed top-2 left-2 z-50",
    children: u.jsxs("a", {
      href: "/habibify",
      className:
        "inline-flex group items-center gap-x-2 rounded-full pl-3 pr-4  sm:px-4 pt-1.5 sm:pt-2.5 text-xs sm:text-sm font-semibold text-white shadow-md hover:bg-white focus-visible:outline focus-visible:outline-2 transition focus-visible:outline-offset-2 bg-slate-950 hover:text-slate-950 focus-visible:outline-[#e33e3f]",
      children: [
        u.jsx("img", {
          src: "/habibify/10.png",
          className: "h-5 w-5 sm:h-8 sm:w-8",
        }),
        u.jsxs("span", {
          className: "pb-1 sm:pb-2.5",
          children: [
            "Habibify ",
            u.jsx("span", {
              className: "hidden sm:inline",
              children: "Yourself",
            }),
          ],
        }),
      ],
    }),
  });
}
function xr() {
  return u.jsxs("div", {
    className: "App",
    children: [
      u.jsx(Ye, {}),
      u.jsx(Xt, {}),
      u.jsx(pr, {}),
      u.jsxs(Xe, {
        children: [
          u.jsx("title", { children: "Habibi" }),
          u.jsx("meta", {
            name: "description",
            content: "Yallah Habibi, See you in Dubai.",
          }),
        ],
      }),
      u.jsx(Ge, {}),
      u.jsxs("div", {
        className: "sections w-full top-0 z-0 absolute overflow-hidden",
        children: [
          u.jsx(Yt, {}),
          u.jsxs("div", {
            className: "w-full h-screen md:h-max bg-blue-900 relative",
            children: [
              u.jsx("div", {
                className:
                  "w-full h-screen md:h-full z-0 bg-gradient-to-b from-green-900 via-blue-900 to-sky-400 absolute",
              }),
              u.jsx("div", {
                className: "w-full h-full md:h-max z-10 relative",
                children: u.jsx("img", {
                  src: et,
                  className:
                    "h-[100%] md:w-[1280px] bottom-[0] mx-auto my-0 object-cover",
                }),
              }),
              u.jsx(g, {
                image: Tt,
                zoomImg: _t,
                sm: { h: "h-[4.5%]", t: "top-[5.6%]", l: "left-[20.5%]" },
                lg: { h: "h-[20%] md:h-[15%]", t: "top-[12%]", l: "left-[3%]" },
                op: !0,
              }),
              u.jsx(g, {
                image: Bt,
                zoomImg: kt,
                sm: { h: "h-[4.5%]", t: "top-[15.6%]", l: "right-[20.5%]" },
                lg: {
                  h: "h-[20%] md:h-[15%]",
                  t: "top-[0]",
                  l: "2xl:right-[12%] lg:right-[5%] right-[-30%]",
                },
                op: !0,
                video: !0,
              }),
              u.jsx(g, {
                image: ft,
                sm: { h: "h-[3.3%]", t: "bottom-[7%]", l: "left-[50%]" },
                lg: {
                  h: "h-[20%] md:h-[15%]",
                  t: "bottom-[5%]",
                  l: "left-[3%]",
                },
              }),
              u.jsx("div", {
                className:
                  "absolute top-[56.5%]  left-[30%]  sm:left-[38%] lg:left-[41.5%] font-sans font-bold opacity-75",
                children: "70th",
              }),
              u.jsx(g, {
                image: Jt,
                sm: { h: "h-[2.5%]", t: "top-[58%]", l: "left-[51%]" },
                lg: { h: "h-[9%]", t: "top-[55%]", l: "right-[10%]" },
              }),
              u.jsx("div", {
                className:
                  "absolute top-[61.5%] left-[30%]  sm:left-[36%] lg:left-[41.5%] font-sans font-bold opacity-75",
                children: "68th",
              }),
              u.jsx(g, {
                image: ht,
                sm: { h: "h-[2.6%]", t: "top-[68%]", l: "left-[45%]" },
                lg: { h: "h-[10%]", t: "top-[70%]", l: "right-[8%]" },
              }),
              u.jsx(g, {
                image: It,
                sm: {
                  h: "h-[4.9%]",
                  t: "top-[60.5%]",
                  l: "left-[45%] xl:left-[47%]",
                },
                lg: { h: "h-[10%]", t: "top-[65%]", l: "left-[20%]" },
              }),
              u.jsx(g, {
                image: pt,
                sm: {
                  h: "h-[3.3%]",
                  t: "top-[40%]",
                  l: "left-[46%] 2xl:left-[48%]",
                },
                lg: { h: "h-[15%]", t: "top-[30%]", l: "left-[5%]" },
              }),
              u.jsx(g, {
                image: qt,
                sm: { h: "h-[3.3%]", t: "top-[40%]", l: "left-[50%]" },
                lg: { h: "h-[15%]", t: "top-[30%]", l: "right-[20%]" },
              }),
              u.jsx(g, {
                image: xt,
                sm: { h: "h-[3.3%]", t: "top-[46%]", l: "left-[50%]" },
                lg: { h: "h-[15%]", t: "top-[35%]", l: "right-[5%]" },
              }),
            ],
          }),
          u.jsxs("div", {
            className: "w-full h-screen md:h-max bg-sky-400 relative",
            children: [
              u.jsx("div", {
                className:
                  "w-full h-screen md:h-full z-0 bg-gradient-to-b from-sky-400 via-sky-200 to-cyan-100 absolute",
              }),
              u.jsx("div", {
                className: "w-full h-full md:h-max z-10 relative",
                children: u.jsx("img", {
                  src: tt,
                  className:
                    "h-[100%] md:w-[1280px] bottom-[0] mx-auto my-0 object-cover",
                }),
              }),
              u.jsx("div", {
                className:
                  "w-[35%] h-[50%] top-[5%] left-[2%] z-20 absolute scroll-slide",
                children: u.jsx("img", {
                  src: it,
                  className: "w-[100%] object-cover",
                }),
              }),
              u.jsx("div", {
                className:
                  "w-[35%] h-[50%] top-[15%] left-[2%] z-20 text-sm md:text-xl text-left text-[rgb(212,175,55)] drop-shadow-[1px_2px_#000] absolute scroll-slide",
                children: u.jsx("div", {
                  className: "w-max px-[1rem] bg-green-900 rounded-xl",
                  children: "1,000,000,000 $HABIBI",
                }),
              }),
              u.jsx("div", {
                className:
                  "w-[35%] h-[50%] top-[20%] left-[2%] z-20 text-sm md:text-xl text-left text-[rgb(212,175,55)] drop-shadow-[1px_2px_#000] absolute scroll-slide",
                children: u.jsx("div", {
                  className: "w-max px-[1rem] bg-green-900 rounded-xl",
                  children: "LP Burnt",
                }),
              }),
              u.jsx("div", {
                className:
                  "w-[35%] h-[50%] top-[25%] left-[2%] z-20 text-sm md:text-xl text-left text-[rgb(212,175,55)] drop-shadow-[1px_2px_#000] absolute scroll-slide",
                children: u.jsx("div", {
                  className: "w-max px-[1rem] bg-green-900 rounded-xl",
                  children: "Contract Renounced",
                }),
              }),
              u.jsx(g, {
                image: dt,
                sm: {
                  h: "h-[4%]",
                  t: "top-[5%]",
                  l: "left-[43.5%] 2xl:left-[46%]",
                },
                lg: { h: "h-[15%]", t: "top-[0%]", l: "right-[0%]" },
              }),
              u.jsx(g, {
                image: Mt,
                sm: {
                  h: "h-[3.6%]",
                  t: "top-[16.8%]",
                  l: "left-[43.5%] 2xl:left-[45%]",
                },
                lg: { h: "h-[15%]", t: "top-[10%]", l: "right-[20%]" },
              }),
              u.jsx(g, {
                image: $t,
                sm: { h: "h-[3.6%]", t: "top-[20.9%]", l: "left-[50.5%]" },
                lg: { h: "h-[15%]", t: "top-[15%]", l: "right-[1%]" },
              }),
              u.jsx(g, {
                image: Vt,
                sm: { h: "h-[3.6%]", t: "top-[24.7%]", l: "left-[50.5%]" },
                lg: { h: "h-[15%]", t: "top-[27%]", l: "right-[21%]" },
              }),
              u.jsx(g, {
                image: Wt,
                sm: {
                  h: "h-[3.6%]",
                  t: "top-[28.5%]",
                  l: "left-[40.5%] 2xl:left-[45%]",
                },
                lg: { h: "h-[15%]", t: "top-[32%]", l: "left-[15%]" },
              }),
              u.jsx(g, {
                image: mt,
                sm: {
                  h: "h-[4%]",
                  t: "bottom-[28.5%]",
                  l: "right-[33%] lg:right-[35%] 2xl:right-[43.3%]",
                },
                lg: { h: "h-[20%]", t: "top-[55%]", l: "right-[3%]" },
              }),
              u.jsx(g, {
                image: jt,
                sm: {
                  h: "h-[4%]",
                  t: "bottom-[15%]",
                  l: "right-[33%] lg:right-[34%] 2xl:right-[43.3%]",
                },
                lg: { h: "h-[20%]", t: "top-[65%]", l: "left-[10%]" },
              }),
              u.jsx(g, {
                image: vt,
                zoomImg: Ct,
                sm: {
                  h: "h-[4%]",
                  t: "-top-[5.5%]",
                  l: "right-[50%] sm:right-[44%] md:right-[33%] xl:right-[37%] 2xl:right-[43.5%]",
                },
                lg: { h: "h-[20%]", t: "top-[-15%]", l: "right-[5%]" },
                op: !0,
              }),
            ],
          }),
          u.jsxs("div", {
            className: "w-full h-screen md:h-max bg-cyan-100 relative",
            children: [
              u.jsx("div", {
                className:
                  "w-full h-screen md:h-full z-0 bg-gradient-to-b from-cyan-100 via-amber-200 to-stone-300 absolute",
              }),
              u.jsxs("div", {
                className:
                  "h-full w-fit md:w-[1280px] bottom-[0] mx-auto my-0 z-10 relative",
                children: [
                  u.jsx("img", {
                    src: st,
                    className: "h-[100%] md:w-screen object-cover",
                  }),
                  u.jsx(mr, {}),
                ],
              }),
              u.jsx("div", {
                className: "h-[5%] bottom-[4%] left-[20%] z-20 absolute",
                children: u.jsx("img", { src: Lt, className: "h-full" }),
              }),
              u.jsx("div", {
                className: "h-[5.8%] bottom-[0] left-[20%] z-20 absolute",
                children: u.jsx("img", { src: zt, className: "h-full" }),
              }),
              u.jsx("div", {
                className: "h-[4.2%] bottom-[-1%] right-[5%] z-20 absolute",
                children: u.jsx("img", { src: Ut, className: "h-full" }),
              }),
              u.jsx(g, {
                image: at,
                sm: { h: "h-[3.4%]", t: "bottom-[31%]", l: "left-[43%]" },
                lg: {
                  h: "w-[40%] md:w-[35%]",
                  t: "bottom-[33%]",
                  l: "right-[5%]",
                },
              }),
              u.jsx(g, {
                image: gt,
                sm: { h: "h-[3.4%]", t: "bottom-[27.3%]", l: "right-[43%]" },
                lg: {
                  h: "w-[20%] md:w-[35%]",
                  t: "bottom-[25%]",
                  l: "left-[2%]",
                },
              }),
              u.jsx(g, {
                image: wt,
                sm: { h: "h-[3.4%]", t: "bottom-[23%]", l: "right-[27%]" },
                lg: {
                  h: "w-[40%] md:w-[35%]",
                  t: "bottom-[25%]",
                  l: "right-[5%]",
                },
              }),
              u.jsx(g, {
                image: yt,
                sm: {
                  h: "h-[3.4%]",
                  t: "top-[32.5%]",
                  l: "right-[26.5%] lg:right-[30%] 2xl:right-[43.3%]",
                },
                lg: {
                  h: "w-[40%] md:w-[35%]",
                  t: "bottom-[65%]",
                  l: "left-[5%]",
                },
              }),
              u.jsx(g, {
                image: Pt,
                sm: { h: "h-[3.4%]", t: "bottom-[50%]", l: "left-[43%]" },
                lg: {
                  h: "w-[30%] md:w-[35%]",
                  t: "bottom-[48%]",
                  l: "right-[5%]",
                },
              }),
              u.jsx(g, {
                image: Et,
                sm: {
                  h: "h-[3.4%]",
                  t: "bottom-[31%]",
                  l: "right-[22%] lg:right-[27%]",
                },
                lg: {
                  h: "w-[40%] md:w-[35%]",
                  t: "bottom-[20%]",
                  l: "right-[-16%]",
                },
              }),
              u.jsx(g, {
                image: Nt,
                sm: { h: "h-[3.4%]", t: "bottom-[35%]", l: "left-[42%]" },
                lg: {
                  h: "w-[40%] md:w-[35%]",
                  t: "bottom-[28%]",
                  l: "left-[20%]",
                },
              }),
              u.jsx(g, {
                image: bt,
                sm: { h: "h-[3.5%]", t: "bottom-[42.2%]", l: "left-[45%]" },
                lg: {
                  h: "w-[40%] md:w-[35%]",
                  t: "bottom-[45%]",
                  l: "left-[5%]",
                },
              }),
              u.jsx(g, {
                image: ct,
                zoomImg: Kt,
                sm: { h: "h-[6%]", t: "bottom-[0]", l: "left-[43%]" },
                lg: {
                  h: "w-[40%] md:w-[25%]",
                  t: "bottom-[10%]",
                  l: "right-[10%]",
                },
                op: !0,
              }),
              u.jsx(g, {
                image: lt,
                zoomImg: ut,
                sm: {
                  h: "h-[3%]",
                  t: "bottom-[3%]",
                  l: "left-[0] xl:left-[5%]",
                },
                lg: {
                  h: "w-[50%] md:w-[30%]",
                  t: "bottom-[13%]",
                  l: "left-[1%]",
                },
                op: !0,
              }),
              u.jsx(g, {
                image: Rt,
                zoomImg: St,
                sm: {
                  h: "h-[5%]",
                  t: "bottom-[-15%] xs:bottom-[-6%]",
                  l: "right-[45%]",
                },
                lg: {
                  h: "w-[50%] md:w-[30%]",
                  t: "bottom-[-5%]",
                  l: "left-[10%]",
                },
                op: !0,
              }),
              u.jsx(g, {
                image: Ft,
                zoomImg: Dt,
                sm: {
                  h: "h-[5%]",
                  t: "bottom-[-15%] xs:bottom-[-6%]",
                  l: "right-[30%]",
                },
                lg: {
                  h: "w-[50%] md:w-[30%]",
                  t: "bottom-[0%]",
                  l: "right-[10%]",
                },
                op: !0,
              }),
              u.jsx(g, {
                image: At,
                zoomImg: Ot,
                sm: {
                  h: "h-[5%]",
                  t: "bottom-[-15%] xs:bottom-[-6%]",
                  l: "right-[5%]",
                },
                lg: {
                  h: "w-[50%] md:w-[30%]",
                  t: "bottom-[5%]",
                  l: "right-[-12%]",
                },
                op: !0,
              }),
            ],
          }),
          u.jsx("div", {
            className: "w-screen h-fit bottom-[10vh] absolute",
            children: u.jsx("div", {
              className: "w-full h-max relative",
              children: u.jsx("img", {
                src: nt,
                className: "h-[100%] md:w-screen mx-auto my-0 object-cover",
              }),
            }),
          }),
          u.jsx("div", {
            className:
              "w-screen h-[20vh] xs-[8vh] md:h-[18vh] lg:h-[20vh] 2xl:h-[25vh] relative",
            children: u.jsx("div", {
              className:
                "w-full top-[-70%] md:top-[-55%] lg:top-[-100%] absolute",
              children: u.jsx("img", {
                src: rt,
                className: "h-[100%] md:w-screen mx-auto my-0 object-cover",
              }),
            }),
          }),
        ],
      }),
    ],
  });
}
Qe.createRoot(document.getElementById("root")).render(
  u.jsx(Ze.StrictMode, { children: u.jsx(xr, {}) })
);
