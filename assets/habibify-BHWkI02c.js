import {
  c as Ju,
  g as Xo,
  r as _e,
  s as wo,
  R as Qe,
  j as J,
  t as mc,
  x as yc,
  d as _c,
  a as Sc,
  b as wc,
  h as Cc,
  A as xc,
  H as Pc,
  P as Ec,
  e as kc,
} from "./index-Dvc1XC7V.js";
var Yh = { exports: {} },
  fa = {},
  la = {},
  ce = {};
(function (d) {
  Object.defineProperty(d, "__esModule", { value: !0 }),
    (d._registerNode = d.Konva = d.glob = void 0);
  const t = Math.PI / 180;
  function n() {
    return (
      typeof window < "u" &&
      ({}.toString.call(window) === "[object Window]" ||
        {}.toString.call(window) === "[object global]")
    );
  }
  (d.glob =
    typeof Ju < "u"
      ? Ju
      : typeof window < "u"
      ? window
      : typeof WorkerGlobalScope < "u"
      ? self
      : {}),
    (d.Konva = {
      _global: d.glob,
      version: "9.3.11",
      isBrowser: n(),
      isUnminified: /param/.test(function (s) {}.toString()),
      dblClickWindow: 400,
      getAngle(s) {
        return d.Konva.angleDeg ? s * t : s;
      },
      enableTrace: !1,
      pointerEventsEnabled: !0,
      autoDrawEnabled: !0,
      hitOnDragEnabled: !1,
      capturePointerEventsEnabled: !1,
      _mouseListenClick: !1,
      _touchListenClick: !1,
      _pointerListenClick: !1,
      _mouseInDblClickWindow: !1,
      _touchInDblClickWindow: !1,
      _pointerInDblClickWindow: !1,
      _mouseDblClickPointerId: null,
      _touchDblClickPointerId: null,
      _pointerDblClickPointerId: null,
      _fixTextRendering: !1,
      pixelRatio: (typeof window < "u" && window.devicePixelRatio) || 1,
      dragDistance: 3,
      angleDeg: !0,
      showWarnings: !0,
      dragButtons: [0, 1],
      isDragging() {
        return d.Konva.DD.isDragging;
      },
      isTransforming() {
        var s;
        return (s = d.Konva.Transformer) === null || s === void 0
          ? void 0
          : s.isTransforming();
      },
      isDragReady() {
        return !!d.Konva.DD.node;
      },
      releaseCanvasOnDestroy: !0,
      document: d.glob.document,
      _injectGlobal(s) {
        d.glob.Konva = s;
      },
    });
  const a = (s) => {
    d.Konva[s.prototype.getClassName()] = s;
  };
  (d._registerNode = a), d.Konva._injectGlobal(d.Konva);
})(ce);
var Be = {};
(function (d) {
  Object.defineProperty(d, "__esModule", { value: !0 }),
    (d.Util = d.Transform = void 0);
  const t = ce;
  class n {
    constructor(w = [1, 0, 0, 1, 0, 0]) {
      (this.dirty = !1), (this.m = (w && w.slice()) || [1, 0, 0, 1, 0, 0]);
    }
    reset() {
      (this.m[0] = 1),
        (this.m[1] = 0),
        (this.m[2] = 0),
        (this.m[3] = 1),
        (this.m[4] = 0),
        (this.m[5] = 0);
    }
    copy() {
      return new n(this.m);
    }
    copyInto(w) {
      (w.m[0] = this.m[0]),
        (w.m[1] = this.m[1]),
        (w.m[2] = this.m[2]),
        (w.m[3] = this.m[3]),
        (w.m[4] = this.m[4]),
        (w.m[5] = this.m[5]);
    }
    point(w) {
      var E = this.m;
      return {
        x: E[0] * w.x + E[2] * w.y + E[4],
        y: E[1] * w.x + E[3] * w.y + E[5],
      };
    }
    translate(w, E) {
      return (
        (this.m[4] += this.m[0] * w + this.m[2] * E),
        (this.m[5] += this.m[1] * w + this.m[3] * E),
        this
      );
    }
    scale(w, E) {
      return (
        (this.m[0] *= w),
        (this.m[1] *= w),
        (this.m[2] *= E),
        (this.m[3] *= E),
        this
      );
    }
    rotate(w) {
      var E = Math.cos(w),
        N = Math.sin(w),
        G = this.m[0] * E + this.m[2] * N,
        T = this.m[1] * E + this.m[3] * N,
        z = this.m[0] * -N + this.m[2] * E,
        L = this.m[1] * -N + this.m[3] * E;
      return (
        (this.m[0] = G), (this.m[1] = T), (this.m[2] = z), (this.m[3] = L), this
      );
    }
    getTranslation() {
      return { x: this.m[4], y: this.m[5] };
    }
    skew(w, E) {
      var N = this.m[0] + this.m[2] * E,
        G = this.m[1] + this.m[3] * E,
        T = this.m[2] + this.m[0] * w,
        z = this.m[3] + this.m[1] * w;
      return (
        (this.m[0] = N), (this.m[1] = G), (this.m[2] = T), (this.m[3] = z), this
      );
    }
    multiply(w) {
      var E = this.m[0] * w.m[0] + this.m[2] * w.m[1],
        N = this.m[1] * w.m[0] + this.m[3] * w.m[1],
        G = this.m[0] * w.m[2] + this.m[2] * w.m[3],
        T = this.m[1] * w.m[2] + this.m[3] * w.m[3],
        z = this.m[0] * w.m[4] + this.m[2] * w.m[5] + this.m[4],
        L = this.m[1] * w.m[4] + this.m[3] * w.m[5] + this.m[5];
      return (
        (this.m[0] = E),
        (this.m[1] = N),
        (this.m[2] = G),
        (this.m[3] = T),
        (this.m[4] = z),
        (this.m[5] = L),
        this
      );
    }
    invert() {
      var w = 1 / (this.m[0] * this.m[3] - this.m[1] * this.m[2]),
        E = this.m[3] * w,
        N = -this.m[1] * w,
        G = -this.m[2] * w,
        T = this.m[0] * w,
        z = w * (this.m[2] * this.m[5] - this.m[3] * this.m[4]),
        L = w * (this.m[1] * this.m[4] - this.m[0] * this.m[5]);
      return (
        (this.m[0] = E),
        (this.m[1] = N),
        (this.m[2] = G),
        (this.m[3] = T),
        (this.m[4] = z),
        (this.m[5] = L),
        this
      );
    }
    getMatrix() {
      return this.m;
    }
    decompose() {
      var w = this.m[0],
        E = this.m[1],
        N = this.m[2],
        G = this.m[3],
        T = this.m[4],
        z = this.m[5],
        L = w * G - E * N;
      let O = {
        x: T,
        y: z,
        rotation: 0,
        scaleX: 0,
        scaleY: 0,
        skewX: 0,
        skewY: 0,
      };
      if (w != 0 || E != 0) {
        var K = Math.sqrt(w * w + E * E);
        (O.rotation = E > 0 ? Math.acos(w / K) : -Math.acos(w / K)),
          (O.scaleX = K),
          (O.scaleY = L / K),
          (O.skewX = (w * N + E * G) / L),
          (O.skewY = 0);
      } else if (N != 0 || G != 0) {
        var W = Math.sqrt(N * N + G * G);
        (O.rotation =
          Math.PI / 2 - (G > 0 ? Math.acos(-N / W) : -Math.acos(N / W))),
          (O.scaleX = L / W),
          (O.scaleY = W),
          (O.skewX = 0),
          (O.skewY = (w * N + E * G) / L);
      }
      return (O.rotation = d.Util._getRotation(O.rotation)), O;
    }
  }
  d.Transform = n;
  var a = "[object Array]",
    s = "[object Number]",
    l = "[object String]",
    h = "[object Boolean]",
    c = Math.PI / 180,
    f = 180 / Math.PI,
    p = "#",
    m = "",
    x = "0",
    C = "Konva warning: ",
    _ = "Konva error: ",
    y = "rgb(",
    P = {
      aliceblue: [240, 248, 255],
      antiquewhite: [250, 235, 215],
      aqua: [0, 255, 255],
      aquamarine: [127, 255, 212],
      azure: [240, 255, 255],
      beige: [245, 245, 220],
      bisque: [255, 228, 196],
      black: [0, 0, 0],
      blanchedalmond: [255, 235, 205],
      blue: [0, 0, 255],
      blueviolet: [138, 43, 226],
      brown: [165, 42, 42],
      burlywood: [222, 184, 135],
      cadetblue: [95, 158, 160],
      chartreuse: [127, 255, 0],
      chocolate: [210, 105, 30],
      coral: [255, 127, 80],
      cornflowerblue: [100, 149, 237],
      cornsilk: [255, 248, 220],
      crimson: [220, 20, 60],
      cyan: [0, 255, 255],
      darkblue: [0, 0, 139],
      darkcyan: [0, 139, 139],
      darkgoldenrod: [184, 132, 11],
      darkgray: [169, 169, 169],
      darkgreen: [0, 100, 0],
      darkgrey: [169, 169, 169],
      darkkhaki: [189, 183, 107],
      darkmagenta: [139, 0, 139],
      darkolivegreen: [85, 107, 47],
      darkorange: [255, 140, 0],
      darkorchid: [153, 50, 204],
      darkred: [139, 0, 0],
      darksalmon: [233, 150, 122],
      darkseagreen: [143, 188, 143],
      darkslateblue: [72, 61, 139],
      darkslategray: [47, 79, 79],
      darkslategrey: [47, 79, 79],
      darkturquoise: [0, 206, 209],
      darkviolet: [148, 0, 211],
      deeppink: [255, 20, 147],
      deepskyblue: [0, 191, 255],
      dimgray: [105, 105, 105],
      dimgrey: [105, 105, 105],
      dodgerblue: [30, 144, 255],
      firebrick: [178, 34, 34],
      floralwhite: [255, 255, 240],
      forestgreen: [34, 139, 34],
      fuchsia: [255, 0, 255],
      gainsboro: [220, 220, 220],
      ghostwhite: [248, 248, 255],
      gold: [255, 215, 0],
      goldenrod: [218, 165, 32],
      gray: [128, 128, 128],
      green: [0, 128, 0],
      greenyellow: [173, 255, 47],
      grey: [128, 128, 128],
      honeydew: [240, 255, 240],
      hotpink: [255, 105, 180],
      indianred: [205, 92, 92],
      indigo: [75, 0, 130],
      ivory: [255, 255, 240],
      khaki: [240, 230, 140],
      lavender: [230, 230, 250],
      lavenderblush: [255, 240, 245],
      lawngreen: [124, 252, 0],
      lemonchiffon: [255, 250, 205],
      lightblue: [173, 216, 230],
      lightcoral: [240, 128, 128],
      lightcyan: [224, 255, 255],
      lightgoldenrodyellow: [250, 250, 210],
      lightgray: [211, 211, 211],
      lightgreen: [144, 238, 144],
      lightgrey: [211, 211, 211],
      lightpink: [255, 182, 193],
      lightsalmon: [255, 160, 122],
      lightseagreen: [32, 178, 170],
      lightskyblue: [135, 206, 250],
      lightslategray: [119, 136, 153],
      lightslategrey: [119, 136, 153],
      lightsteelblue: [176, 196, 222],
      lightyellow: [255, 255, 224],
      lime: [0, 255, 0],
      limegreen: [50, 205, 50],
      linen: [250, 240, 230],
      magenta: [255, 0, 255],
      maroon: [128, 0, 0],
      mediumaquamarine: [102, 205, 170],
      mediumblue: [0, 0, 205],
      mediumorchid: [186, 85, 211],
      mediumpurple: [147, 112, 219],
      mediumseagreen: [60, 179, 113],
      mediumslateblue: [123, 104, 238],
      mediumspringgreen: [0, 250, 154],
      mediumturquoise: [72, 209, 204],
      mediumvioletred: [199, 21, 133],
      midnightblue: [25, 25, 112],
      mintcream: [245, 255, 250],
      mistyrose: [255, 228, 225],
      moccasin: [255, 228, 181],
      navajowhite: [255, 222, 173],
      navy: [0, 0, 128],
      oldlace: [253, 245, 230],
      olive: [128, 128, 0],
      olivedrab: [107, 142, 35],
      orange: [255, 165, 0],
      orangered: [255, 69, 0],
      orchid: [218, 112, 214],
      palegoldenrod: [238, 232, 170],
      palegreen: [152, 251, 152],
      paleturquoise: [175, 238, 238],
      palevioletred: [219, 112, 147],
      papayawhip: [255, 239, 213],
      peachpuff: [255, 218, 185],
      peru: [205, 133, 63],
      pink: [255, 192, 203],
      plum: [221, 160, 203],
      powderblue: [176, 224, 230],
      purple: [128, 0, 128],
      rebeccapurple: [102, 51, 153],
      red: [255, 0, 0],
      rosybrown: [188, 143, 143],
      royalblue: [65, 105, 225],
      saddlebrown: [139, 69, 19],
      salmon: [250, 128, 114],
      sandybrown: [244, 164, 96],
      seagreen: [46, 139, 87],
      seashell: [255, 245, 238],
      sienna: [160, 82, 45],
      silver: [192, 192, 192],
      skyblue: [135, 206, 235],
      slateblue: [106, 90, 205],
      slategray: [119, 128, 144],
      slategrey: [119, 128, 144],
      snow: [255, 255, 250],
      springgreen: [0, 255, 127],
      steelblue: [70, 130, 180],
      tan: [210, 180, 140],
      teal: [0, 128, 128],
      thistle: [216, 191, 216],
      transparent: [255, 255, 255, 0],
      tomato: [255, 99, 71],
      turquoise: [64, 224, 208],
      violet: [238, 130, 238],
      wheat: [245, 222, 179],
      white: [255, 255, 255],
      whitesmoke: [245, 245, 245],
      yellow: [255, 255, 0],
      yellowgreen: [154, 205, 5],
    },
    k = /rgb\((\d{1,3}),(\d{1,3}),(\d{1,3})\)/,
    R = [];
  const F =
    (typeof requestAnimationFrame < "u" && requestAnimationFrame) ||
    function (v) {
      setTimeout(v, 60);
    };
  d.Util = {
    _isElement(v) {
      return !!(v && v.nodeType == 1);
    },
    _isFunction(v) {
      return !!(v && v.constructor && v.call && v.apply);
    },
    _isPlainObject(v) {
      return !!v && v.constructor === Object;
    },
    _isArray(v) {
      return Object.prototype.toString.call(v) === a;
    },
    _isNumber(v) {
      return (
        Object.prototype.toString.call(v) === s && !isNaN(v) && isFinite(v)
      );
    },
    _isString(v) {
      return Object.prototype.toString.call(v) === l;
    },
    _isBoolean(v) {
      return Object.prototype.toString.call(v) === h;
    },
    isObject(v) {
      return v instanceof Object;
    },
    isValidSelector(v) {
      if (typeof v != "string") return !1;
      var w = v[0];
      return w === "#" || w === "." || w === w.toUpperCase();
    },
    _sign(v) {
      return v === 0 || v > 0 ? 1 : -1;
    },
    requestAnimFrame(v) {
      R.push(v),
        R.length === 1 &&
          F(function () {
            const w = R;
            (R = []),
              w.forEach(function (E) {
                E();
              });
          });
    },
    createCanvasElement() {
      var v = document.createElement("canvas");
      try {
        v.style = v.style || {};
      } catch {}
      return v;
    },
    createImageElement() {
      return document.createElement("img");
    },
    _isInDocument(v) {
      for (; (v = v.parentNode); ) if (v == document) return !0;
      return !1;
    },
    _urlToImage(v, w) {
      var E = d.Util.createImageElement();
      (E.onload = function () {
        w(E);
      }),
        (E.src = v);
    },
    _rgbToHex(v, w, E) {
      return ((1 << 24) + (v << 16) + (w << 8) + E).toString(16).slice(1);
    },
    _hexToRgb(v) {
      v = v.replace(p, m);
      var w = parseInt(v, 16);
      return { r: (w >> 16) & 255, g: (w >> 8) & 255, b: w & 255 };
    },
    getRandomColor() {
      for (
        var v = ((Math.random() * 16777215) << 0).toString(16);
        v.length < 6;

      )
        v = x + v;
      return p + v;
    },
    getRGB(v) {
      var w;
      return v in P
        ? ((w = P[v]), { r: w[0], g: w[1], b: w[2] })
        : v[0] === p
        ? this._hexToRgb(v.substring(1))
        : v.substr(0, 4) === y
        ? ((w = k.exec(v.replace(/ /g, ""))),
          {
            r: parseInt(w[1], 10),
            g: parseInt(w[2], 10),
            b: parseInt(w[3], 10),
          })
        : { r: 0, g: 0, b: 0 };
    },
    colorToRGBA(v) {
      return (
        (v = v || "black"),
        d.Util._namedColorToRBA(v) ||
          d.Util._hex3ColorToRGBA(v) ||
          d.Util._hex4ColorToRGBA(v) ||
          d.Util._hex6ColorToRGBA(v) ||
          d.Util._hex8ColorToRGBA(v) ||
          d.Util._rgbColorToRGBA(v) ||
          d.Util._rgbaColorToRGBA(v) ||
          d.Util._hslColorToRGBA(v)
      );
    },
    _namedColorToRBA(v) {
      var w = P[v.toLowerCase()];
      return w ? { r: w[0], g: w[1], b: w[2], a: 1 } : null;
    },
    _rgbColorToRGBA(v) {
      if (v.indexOf("rgb(") === 0) {
        v = v.match(/rgb\(([^)]+)\)/)[1];
        var w = v.split(/ *, */).map(Number);
        return { r: w[0], g: w[1], b: w[2], a: 1 };
      }
    },
    _rgbaColorToRGBA(v) {
      if (v.indexOf("rgba(") === 0) {
        v = v.match(/rgba\(([^)]+)\)/)[1];
        var w = v
          .split(/ *, */)
          .map((E, N) =>
            E.slice(-1) === "%"
              ? N === 3
                ? parseInt(E) / 100
                : (parseInt(E) / 100) * 255
              : Number(E)
          );
        return { r: w[0], g: w[1], b: w[2], a: w[3] };
      }
    },
    _hex8ColorToRGBA(v) {
      if (v[0] === "#" && v.length === 9)
        return {
          r: parseInt(v.slice(1, 3), 16),
          g: parseInt(v.slice(3, 5), 16),
          b: parseInt(v.slice(5, 7), 16),
          a: parseInt(v.slice(7, 9), 16) / 255,
        };
    },
    _hex6ColorToRGBA(v) {
      if (v[0] === "#" && v.length === 7)
        return {
          r: parseInt(v.slice(1, 3), 16),
          g: parseInt(v.slice(3, 5), 16),
          b: parseInt(v.slice(5, 7), 16),
          a: 1,
        };
    },
    _hex4ColorToRGBA(v) {
      if (v[0] === "#" && v.length === 5)
        return {
          r: parseInt(v[1] + v[1], 16),
          g: parseInt(v[2] + v[2], 16),
          b: parseInt(v[3] + v[3], 16),
          a: parseInt(v[4] + v[4], 16) / 255,
        };
    },
    _hex3ColorToRGBA(v) {
      if (v[0] === "#" && v.length === 4)
        return {
          r: parseInt(v[1] + v[1], 16),
          g: parseInt(v[2] + v[2], 16),
          b: parseInt(v[3] + v[3], 16),
          a: 1,
        };
    },
    _hslColorToRGBA(v) {
      if (/hsl\((\d+),\s*([\d.]+)%,\s*([\d.]+)%\)/g.test(v)) {
        const [w, ...E] = /hsl\((\d+),\s*([\d.]+)%,\s*([\d.]+)%\)/g.exec(v),
          N = Number(E[0]) / 360,
          G = Number(E[1]) / 100,
          T = Number(E[2]) / 100;
        let z, L, O;
        if (G === 0)
          return (
            (O = T * 255),
            { r: Math.round(O), g: Math.round(O), b: Math.round(O), a: 1 }
          );
        T < 0.5 ? (z = T * (1 + G)) : (z = T + G - T * G);
        const K = 2 * T - z,
          W = [0, 0, 0];
        for (let ne = 0; ne < 3; ne++)
          (L = N + (1 / 3) * -(ne - 1)),
            L < 0 && L++,
            L > 1 && L--,
            6 * L < 1
              ? (O = K + (z - K) * 6 * L)
              : 2 * L < 1
              ? (O = z)
              : 3 * L < 2
              ? (O = K + (z - K) * (2 / 3 - L) * 6)
              : (O = K),
            (W[ne] = O * 255);
        return {
          r: Math.round(W[0]),
          g: Math.round(W[1]),
          b: Math.round(W[2]),
          a: 1,
        };
      }
    },
    haveIntersection(v, w) {
      return !(
        w.x > v.x + v.width ||
        w.x + w.width < v.x ||
        w.y > v.y + v.height ||
        w.y + w.height < v.y
      );
    },
    cloneObject(v) {
      var w = {};
      for (var E in v)
        this._isPlainObject(v[E])
          ? (w[E] = this.cloneObject(v[E]))
          : this._isArray(v[E])
          ? (w[E] = this.cloneArray(v[E]))
          : (w[E] = v[E]);
      return w;
    },
    cloneArray(v) {
      return v.slice(0);
    },
    degToRad(v) {
      return v * c;
    },
    radToDeg(v) {
      return v * f;
    },
    _degToRad(v) {
      return (
        d.Util.warn(
          "Util._degToRad is removed. Please use public Util.degToRad instead."
        ),
        d.Util.degToRad(v)
      );
    },
    _radToDeg(v) {
      return (
        d.Util.warn(
          "Util._radToDeg is removed. Please use public Util.radToDeg instead."
        ),
        d.Util.radToDeg(v)
      );
    },
    _getRotation(v) {
      return t.Konva.angleDeg ? d.Util.radToDeg(v) : v;
    },
    _capitalize(v) {
      return v.charAt(0).toUpperCase() + v.slice(1);
    },
    throw(v) {
      throw new Error(_ + v);
    },
    error(v) {
      console.error(_ + v);
    },
    warn(v) {
      t.Konva.showWarnings && console.warn(C + v);
    },
    each(v, w) {
      for (var E in v) w(E, v[E]);
    },
    _inRange(v, w, E) {
      return w <= v && v < E;
    },
    _getProjectionToSegment(v, w, E, N, G, T) {
      var z,
        L,
        O,
        K = (v - E) * (v - E) + (w - N) * (w - N);
      if (K == 0) (z = v), (L = w), (O = (G - E) * (G - E) + (T - N) * (T - N));
      else {
        var W = ((G - v) * (E - v) + (T - w) * (N - w)) / K;
        W < 0
          ? ((z = v), (L = w), (O = (v - G) * (v - G) + (w - T) * (w - T)))
          : W > 1
          ? ((z = E), (L = N), (O = (E - G) * (E - G) + (N - T) * (N - T)))
          : ((z = v + W * (E - v)),
            (L = w + W * (N - w)),
            (O = (z - G) * (z - G) + (L - T) * (L - T)));
      }
      return [z, L, O];
    },
    _getProjectionToLine(v, w, E) {
      var N = d.Util.cloneObject(v),
        G = Number.MAX_VALUE;
      return (
        w.forEach(function (T, z) {
          if (!(!E && z === w.length - 1)) {
            var L = w[(z + 1) % w.length],
              O = d.Util._getProjectionToSegment(T.x, T.y, L.x, L.y, v.x, v.y),
              K = O[0],
              W = O[1],
              ne = O[2];
            ne < G && ((N.x = K), (N.y = W), (G = ne));
          }
        }),
        N
      );
    },
    _prepareArrayForTween(v, w, E) {
      var N,
        G = [],
        T = [];
      if (v.length > w.length) {
        var z = w;
        (w = v), (v = z);
      }
      for (N = 0; N < v.length; N += 2) G.push({ x: v[N], y: v[N + 1] });
      for (N = 0; N < w.length; N += 2) T.push({ x: w[N], y: w[N + 1] });
      var L = [];
      return (
        T.forEach(function (O) {
          var K = d.Util._getProjectionToLine(O, G, E);
          L.push(K.x), L.push(K.y);
        }),
        L
      );
    },
    _prepareToStringify(v) {
      var w;
      v.visitedByCircularReferenceRemoval = !0;
      for (var E in v)
        if (v.hasOwnProperty(E) && v[E] && typeof v[E] == "object") {
          if (
            ((w = Object.getOwnPropertyDescriptor(v, E)),
            v[E].visitedByCircularReferenceRemoval || d.Util._isElement(v[E]))
          )
            if (w.configurable) delete v[E];
            else return null;
          else if (d.Util._prepareToStringify(v[E]) === null)
            if (w.configurable) delete v[E];
            else return null;
        }
      return delete v.visitedByCircularReferenceRemoval, v;
    },
    _assign(v, w) {
      for (var E in w) v[E] = w[E];
      return v;
    },
    _getFirstPointerId(v) {
      return v.touches ? v.changedTouches[0].identifier : v.pointerId || 999;
    },
    releaseCanvas(...v) {
      t.Konva.releaseCanvasOnDestroy &&
        v.forEach((w) => {
          (w.width = 0), (w.height = 0);
        });
    },
    drawRoundedRectPath(v, w, E, N) {
      let G = 0,
        T = 0,
        z = 0,
        L = 0;
      typeof N == "number"
        ? (G = T = z = L = Math.min(N, w / 2, E / 2))
        : ((G = Math.min(N[0] || 0, w / 2, E / 2)),
          (T = Math.min(N[1] || 0, w / 2, E / 2)),
          (L = Math.min(N[2] || 0, w / 2, E / 2)),
          (z = Math.min(N[3] || 0, w / 2, E / 2))),
        v.moveTo(G, 0),
        v.lineTo(w - T, 0),
        v.arc(w - T, T, T, (Math.PI * 3) / 2, 0, !1),
        v.lineTo(w, E - L),
        v.arc(w - L, E - L, L, 0, Math.PI / 2, !1),
        v.lineTo(z, E),
        v.arc(z, E - z, z, Math.PI / 2, Math.PI, !1),
        v.lineTo(0, G),
        v.arc(G, G, G, Math.PI, (Math.PI * 3) / 2, !1);
    },
  };
})(Be);
var Ge = {},
  fe = {},
  re = {};
Object.defineProperty(re, "__esModule", { value: !0 });
re.getComponentValidator =
  re.getBooleanValidator =
  re.getNumberArrayValidator =
  re.getFunctionValidator =
  re.getStringOrGradientValidator =
  re.getStringValidator =
  re.getNumberOrAutoValidator =
  re.getNumberOrArrayOfNumbersValidator =
  re.getNumberValidator =
  re.alphaComponent =
  re.RGBComponent =
    void 0;
const ur = ce,
  He = Be;
function hr(d) {
  return He.Util._isString(d)
    ? '"' + d + '"'
    : Object.prototype.toString.call(d) === "[object Number]" ||
      He.Util._isBoolean(d)
    ? d
    : Object.prototype.toString.call(d);
}
function Tc(d) {
  return d > 255 ? 255 : d < 0 ? 0 : Math.round(d);
}
re.RGBComponent = Tc;
function Nc(d) {
  return d > 1 ? 1 : d < 1e-4 ? 1e-4 : d;
}
re.alphaComponent = Nc;
function Rc() {
  if (ur.Konva.isUnminified)
    return function (d, t) {
      return (
        He.Util._isNumber(d) ||
          He.Util.warn(
            hr(d) +
              ' is a not valid value for "' +
              t +
              '" attribute. The value should be a number.'
          ),
        d
      );
    };
}
re.getNumberValidator = Rc;
function bc(d) {
  if (ur.Konva.isUnminified)
    return function (t, n) {
      let a = He.Util._isNumber(t),
        s = He.Util._isArray(t) && t.length == d;
      return (
        !a &&
          !s &&
          He.Util.warn(
            hr(t) +
              ' is a not valid value for "' +
              n +
              '" attribute. The value should be a number or Array<number>(' +
              d +
              ")"
          ),
        t
      );
    };
}
re.getNumberOrArrayOfNumbersValidator = bc;
function Fc() {
  if (ur.Konva.isUnminified)
    return function (d, t) {
      var n = He.Util._isNumber(d),
        a = d === "auto";
      return (
        n ||
          a ||
          He.Util.warn(
            hr(d) +
              ' is a not valid value for "' +
              t +
              '" attribute. The value should be a number or "auto".'
          ),
        d
      );
    };
}
re.getNumberOrAutoValidator = Fc;
function Ac() {
  if (ur.Konva.isUnminified)
    return function (d, t) {
      return (
        He.Util._isString(d) ||
          He.Util.warn(
            hr(d) +
              ' is a not valid value for "' +
              t +
              '" attribute. The value should be a string.'
          ),
        d
      );
    };
}
re.getStringValidator = Ac;
function Mc() {
  if (ur.Konva.isUnminified)
    return function (d, t) {
      const n = He.Util._isString(d),
        a =
          Object.prototype.toString.call(d) === "[object CanvasGradient]" ||
          (d && d.addColorStop);
      return (
        n ||
          a ||
          He.Util.warn(
            hr(d) +
              ' is a not valid value for "' +
              t +
              '" attribute. The value should be a string or a native gradient.'
          ),
        d
      );
    };
}
re.getStringOrGradientValidator = Mc;
function Lc() {
  if (ur.Konva.isUnminified)
    return function (d, t) {
      return (
        He.Util._isFunction(d) ||
          He.Util.warn(
            hr(d) +
              ' is a not valid value for "' +
              t +
              '" attribute. The value should be a function.'
          ),
        d
      );
    };
}
re.getFunctionValidator = Lc;
function Dc() {
  if (ur.Konva.isUnminified)
    return function (d, t) {
      const n = Int8Array ? Object.getPrototypeOf(Int8Array) : null;
      return (
        (n && d instanceof n) ||
          (He.Util._isArray(d)
            ? d.forEach(function (a) {
                He.Util._isNumber(a) ||
                  He.Util.warn(
                    '"' +
                      t +
                      '" attribute has non numeric element ' +
                      a +
                      ". Make sure that all elements are numbers."
                  );
              })
            : He.Util.warn(
                hr(d) +
                  ' is a not valid value for "' +
                  t +
                  '" attribute. The value should be a array of numbers.'
              )),
        d
      );
    };
}
re.getNumberArrayValidator = Dc;
function Ic() {
  if (ur.Konva.isUnminified)
    return function (d, t) {
      var n = d === !0 || d === !1;
      return (
        n ||
          He.Util.warn(
            hr(d) +
              ' is a not valid value for "' +
              t +
              '" attribute. The value should be a boolean.'
          ),
        d
      );
    };
}
re.getBooleanValidator = Ic;
function Oc(d) {
  if (ur.Konva.isUnminified)
    return function (t, n) {
      return (
        t == null ||
          He.Util.isObject(t) ||
          He.Util.warn(
            hr(t) +
              ' is a not valid value for "' +
              n +
              '" attribute. The value should be an object with properties ' +
              d
          ),
        t
      );
    };
}
re.getComponentValidator = Oc;
(function (d) {
  Object.defineProperty(d, "__esModule", { value: !0 }), (d.Factory = void 0);
  const t = Be,
    n = re;
  var a = "get",
    s = "set";
  d.Factory = {
    addGetterSetter(l, h, c, f, p) {
      d.Factory.addGetter(l, h, c),
        d.Factory.addSetter(l, h, f, p),
        d.Factory.addOverloadedGetterSetter(l, h);
    },
    addGetter(l, h, c) {
      var f = a + t.Util._capitalize(h);
      l.prototype[f] =
        l.prototype[f] ||
        function () {
          var p = this.attrs[h];
          return p === void 0 ? c : p;
        };
    },
    addSetter(l, h, c, f) {
      var p = s + t.Util._capitalize(h);
      l.prototype[p] || d.Factory.overWriteSetter(l, h, c, f);
    },
    overWriteSetter(l, h, c, f) {
      var p = s + t.Util._capitalize(h);
      l.prototype[p] = function (m) {
        return (
          c && m !== void 0 && m !== null && (m = c.call(this, m, h)),
          this._setAttr(h, m),
          f && f.call(this),
          this
        );
      };
    },
    addComponentsGetterSetter(l, h, c, f, p) {
      var m = c.length,
        x = t.Util._capitalize,
        C = a + x(h),
        _ = s + x(h),
        y,
        P;
      l.prototype[C] = function () {
        var R = {};
        for (y = 0; y < m; y++) (P = c[y]), (R[P] = this.getAttr(h + x(P)));
        return R;
      };
      var k = (0, n.getComponentValidator)(c);
      (l.prototype[_] = function (R) {
        var F = this.attrs[h],
          v;
        f && (R = f.call(this, R)), k && k.call(this, R, h);
        for (v in R) R.hasOwnProperty(v) && this._setAttr(h + x(v), R[v]);
        return (
          R ||
            c.forEach((w) => {
              this._setAttr(h + x(w), void 0);
            }),
          this._fireChangeEvent(h, F, R),
          p && p.call(this),
          this
        );
      }),
        d.Factory.addOverloadedGetterSetter(l, h);
    },
    addOverloadedGetterSetter(l, h) {
      var c = t.Util._capitalize(h),
        f = s + c,
        p = a + c;
      l.prototype[h] = function () {
        return arguments.length ? (this[f](arguments[0]), this) : this[p]();
      };
    },
    addDeprecatedGetterSetter(l, h, c, f) {
      t.Util.error("Adding deprecated " + h);
      var p = a + t.Util._capitalize(h),
        m =
          h +
          " property is deprecated and will be removed soon. Look at Konva change log for more information.";
      (l.prototype[p] = function () {
        t.Util.error(m);
        var x = this.attrs[h];
        return x === void 0 ? c : x;
      }),
        d.Factory.addSetter(l, h, f, function () {
          t.Util.error(m);
        }),
        d.Factory.addOverloadedGetterSetter(l, h);
    },
    backCompat(l, h) {
      t.Util.each(h, function (c, f) {
        var p = l.prototype[f],
          m = a + t.Util._capitalize(c),
          x = s + t.Util._capitalize(c);
        function C() {
          p.apply(this, arguments),
            t.Util.error(
              '"' +
                c +
                '" method is deprecated and will be removed soon. Use ""' +
                f +
                '" instead.'
            );
        }
        (l.prototype[c] = C), (l.prototype[m] = C), (l.prototype[x] = C);
      });
    },
    afterSetFilter() {
      this._filterUpToDate = !1;
    },
  };
})(fe);
var Ut = {},
  lr = {};
Object.defineProperty(lr, "__esModule", { value: !0 });
lr.HitContext = lr.SceneContext = lr.Context = void 0;
const Xh = Be,
  Gc = ce;
function Uc(d) {
  var t = [],
    n = d.length,
    a = Xh.Util,
    s,
    l;
  for (s = 0; s < n; s++)
    (l = d[s]),
      a._isNumber(l)
        ? (l = Math.round(l * 1e3) / 1e3)
        : a._isString(l) || (l = l + ""),
      t.push(l);
  return t;
}
var Zu = ",",
  zc = "(",
  Bc = ")",
  Hc = "([",
  Vc = "])",
  jc = ";",
  Wc = "()",
  Kc = "=",
  eh = [
    "arc",
    "arcTo",
    "beginPath",
    "bezierCurveTo",
    "clearRect",
    "clip",
    "closePath",
    "createLinearGradient",
    "createPattern",
    "createRadialGradient",
    "drawImage",
    "ellipse",
    "fill",
    "fillText",
    "getImageData",
    "createImageData",
    "lineTo",
    "moveTo",
    "putImageData",
    "quadraticCurveTo",
    "rect",
    "roundRect",
    "restore",
    "rotate",
    "save",
    "scale",
    "setLineDash",
    "setTransform",
    "stroke",
    "strokeText",
    "transform",
    "translate",
  ],
  Yc = [
    "fillStyle",
    "strokeStyle",
    "shadowColor",
    "shadowBlur",
    "shadowOffsetX",
    "shadowOffsetY",
    "letterSpacing",
    "lineCap",
    "lineDashOffset",
    "lineJoin",
    "lineWidth",
    "miterLimit",
    "direction",
    "font",
    "textAlign",
    "textBaseline",
    "globalAlpha",
    "globalCompositeOperation",
    "imageSmoothingEnabled",
  ];
const Xc = 100;
class ga {
  constructor(t) {
    (this.canvas = t),
      Gc.Konva.enableTrace && ((this.traceArr = []), this._enableTrace());
  }
  fillShape(t) {
    t.fillEnabled() && this._fill(t);
  }
  _fill(t) {}
  strokeShape(t) {
    t.hasStroke() && this._stroke(t);
  }
  _stroke(t) {}
  fillStrokeShape(t) {
    t.attrs.fillAfterStrokeEnabled
      ? (this.strokeShape(t), this.fillShape(t))
      : (this.fillShape(t), this.strokeShape(t));
  }
  getTrace(t, n) {
    var a = this.traceArr,
      s = a.length,
      l = "",
      h,
      c,
      f,
      p;
    for (h = 0; h < s; h++)
      (c = a[h]),
        (f = c.method),
        f
          ? ((p = c.args),
            (l += f),
            t
              ? (l += Wc)
              : Xh.Util._isArray(p[0])
              ? (l += Hc + p.join(Zu) + Vc)
              : (n &&
                  (p = p.map((m) =>
                    typeof m == "number" ? Math.floor(m) : m
                  )),
                (l += zc + p.join(Zu) + Bc)))
          : ((l += c.property), t || (l += Kc + c.val)),
        (l += jc);
    return l;
  }
  clearTrace() {
    this.traceArr = [];
  }
  _trace(t) {
    var n = this.traceArr,
      a;
    n.push(t), (a = n.length), a >= Xc && n.shift();
  }
  reset() {
    var t = this.getCanvas().getPixelRatio();
    this.setTransform(1 * t, 0, 0, 1 * t, 0, 0);
  }
  getCanvas() {
    return this.canvas;
  }
  clear(t) {
    var n = this.getCanvas();
    t
      ? this.clearRect(t.x || 0, t.y || 0, t.width || 0, t.height || 0)
      : this.clearRect(
          0,
          0,
          n.getWidth() / n.pixelRatio,
          n.getHeight() / n.pixelRatio
        );
  }
  _applyLineCap(t) {
    const n = t.attrs.lineCap;
    n && this.setAttr("lineCap", n);
  }
  _applyOpacity(t) {
    var n = t.getAbsoluteOpacity();
    n !== 1 && this.setAttr("globalAlpha", n);
  }
  _applyLineJoin(t) {
    const n = t.attrs.lineJoin;
    n && this.setAttr("lineJoin", n);
  }
  setAttr(t, n) {
    this._context[t] = n;
  }
  arc(t, n, a, s, l, h) {
    this._context.arc(t, n, a, s, l, h);
  }
  arcTo(t, n, a, s, l) {
    this._context.arcTo(t, n, a, s, l);
  }
  beginPath() {
    this._context.beginPath();
  }
  bezierCurveTo(t, n, a, s, l, h) {
    this._context.bezierCurveTo(t, n, a, s, l, h);
  }
  clearRect(t, n, a, s) {
    this._context.clearRect(t, n, a, s);
  }
  clip(...t) {
    this._context.clip.apply(this._context, t);
  }
  closePath() {
    this._context.closePath();
  }
  createImageData(t, n) {
    var a = arguments;
    if (a.length === 2) return this._context.createImageData(t, n);
    if (a.length === 1) return this._context.createImageData(t);
  }
  createLinearGradient(t, n, a, s) {
    return this._context.createLinearGradient(t, n, a, s);
  }
  createPattern(t, n) {
    return this._context.createPattern(t, n);
  }
  createRadialGradient(t, n, a, s, l, h) {
    return this._context.createRadialGradient(t, n, a, s, l, h);
  }
  drawImage(t, n, a, s, l, h, c, f, p) {
    var m = arguments,
      x = this._context;
    m.length === 3
      ? x.drawImage(t, n, a)
      : m.length === 5
      ? x.drawImage(t, n, a, s, l)
      : m.length === 9 && x.drawImage(t, n, a, s, l, h, c, f, p);
  }
  ellipse(t, n, a, s, l, h, c, f) {
    this._context.ellipse(t, n, a, s, l, h, c, f);
  }
  isPointInPath(t, n, a, s) {
    return a
      ? this._context.isPointInPath(a, t, n, s)
      : this._context.isPointInPath(t, n, s);
  }
  fill(...t) {
    this._context.fill.apply(this._context, t);
  }
  fillRect(t, n, a, s) {
    this._context.fillRect(t, n, a, s);
  }
  strokeRect(t, n, a, s) {
    this._context.strokeRect(t, n, a, s);
  }
  fillText(t, n, a, s) {
    s ? this._context.fillText(t, n, a, s) : this._context.fillText(t, n, a);
  }
  measureText(t) {
    return this._context.measureText(t);
  }
  getImageData(t, n, a, s) {
    return this._context.getImageData(t, n, a, s);
  }
  lineTo(t, n) {
    this._context.lineTo(t, n);
  }
  moveTo(t, n) {
    this._context.moveTo(t, n);
  }
  rect(t, n, a, s) {
    this._context.rect(t, n, a, s);
  }
  roundRect(t, n, a, s, l) {
    this._context.roundRect(t, n, a, s, l);
  }
  putImageData(t, n, a) {
    this._context.putImageData(t, n, a);
  }
  quadraticCurveTo(t, n, a, s) {
    this._context.quadraticCurveTo(t, n, a, s);
  }
  restore() {
    this._context.restore();
  }
  rotate(t) {
    this._context.rotate(t);
  }
  save() {
    this._context.save();
  }
  scale(t, n) {
    this._context.scale(t, n);
  }
  setLineDash(t) {
    this._context.setLineDash
      ? this._context.setLineDash(t)
      : "mozDash" in this._context
      ? (this._context.mozDash = t)
      : "webkitLineDash" in this._context && (this._context.webkitLineDash = t);
  }
  getLineDash() {
    return this._context.getLineDash();
  }
  setTransform(t, n, a, s, l, h) {
    this._context.setTransform(t, n, a, s, l, h);
  }
  stroke(t) {
    t ? this._context.stroke(t) : this._context.stroke();
  }
  strokeText(t, n, a, s) {
    this._context.strokeText(t, n, a, s);
  }
  transform(t, n, a, s, l, h) {
    this._context.transform(t, n, a, s, l, h);
  }
  translate(t, n) {
    this._context.translate(t, n);
  }
  _enableTrace() {
    var t = this,
      n = eh.length,
      a = this.setAttr,
      s,
      l,
      h = function (c) {
        var f = t[c],
          p;
        t[c] = function () {
          return (
            (l = Uc(Array.prototype.slice.call(arguments, 0))),
            (p = f.apply(t, arguments)),
            t._trace({ method: c, args: l }),
            p
          );
        };
      };
    for (s = 0; s < n; s++) h(eh[s]);
    t.setAttr = function () {
      a.apply(t, arguments);
      var c = arguments[0],
        f = arguments[1];
      (c === "shadowOffsetX" || c === "shadowOffsetY" || c === "shadowBlur") &&
        (f = f / this.canvas.getPixelRatio()),
        t._trace({ property: c, val: f });
    };
  }
  _applyGlobalCompositeOperation(t) {
    const n = t.attrs.globalCompositeOperation;
    var a = !n || n === "source-over";
    a || this.setAttr("globalCompositeOperation", n);
  }
}
lr.Context = ga;
Yc.forEach(function (d) {
  Object.defineProperty(ga.prototype, d, {
    get() {
      return this._context[d];
    },
    set(t) {
      this._context[d] = t;
    },
  });
});
class qc extends ga {
  constructor(t, { willReadFrequently: n = !1 } = {}) {
    super(t),
      (this._context = t._canvas.getContext("2d", { willReadFrequently: n }));
  }
  _fillColor(t) {
    var n = t.fill();
    this.setAttr("fillStyle", n), t._fillFunc(this);
  }
  _fillPattern(t) {
    this.setAttr("fillStyle", t._getFillPattern()), t._fillFunc(this);
  }
  _fillLinearGradient(t) {
    var n = t._getLinearGradient();
    n && (this.setAttr("fillStyle", n), t._fillFunc(this));
  }
  _fillRadialGradient(t) {
    const n = t._getRadialGradient();
    n && (this.setAttr("fillStyle", n), t._fillFunc(this));
  }
  _fill(t) {
    const n = t.fill(),
      a = t.getFillPriority();
    if (n && a === "color") {
      this._fillColor(t);
      return;
    }
    const s = t.getFillPatternImage();
    if (s && a === "pattern") {
      this._fillPattern(t);
      return;
    }
    const l = t.getFillLinearGradientColorStops();
    if (l && a === "linear-gradient") {
      this._fillLinearGradient(t);
      return;
    }
    const h = t.getFillRadialGradientColorStops();
    if (h && a === "radial-gradient") {
      this._fillRadialGradient(t);
      return;
    }
    n
      ? this._fillColor(t)
      : s
      ? this._fillPattern(t)
      : l
      ? this._fillLinearGradient(t)
      : h && this._fillRadialGradient(t);
  }
  _strokeLinearGradient(t) {
    const n = t.getStrokeLinearGradientStartPoint(),
      a = t.getStrokeLinearGradientEndPoint(),
      s = t.getStrokeLinearGradientColorStops(),
      l = this.createLinearGradient(n.x, n.y, a.x, a.y);
    if (s) {
      for (var h = 0; h < s.length; h += 2) l.addColorStop(s[h], s[h + 1]);
      this.setAttr("strokeStyle", l);
    }
  }
  _stroke(t) {
    var n = t.dash(),
      a = t.getStrokeScaleEnabled();
    if (t.hasStroke()) {
      if (!a) {
        this.save();
        var s = this.getCanvas().getPixelRatio();
        this.setTransform(s, 0, 0, s, 0, 0);
      }
      this._applyLineCap(t),
        n &&
          t.dashEnabled() &&
          (this.setLineDash(n), this.setAttr("lineDashOffset", t.dashOffset())),
        this.setAttr("lineWidth", t.strokeWidth()),
        t.getShadowForStrokeEnabled() ||
          this.setAttr("shadowColor", "rgba(0,0,0,0)");
      var l = t.getStrokeLinearGradientColorStops();
      l
        ? this._strokeLinearGradient(t)
        : this.setAttr("strokeStyle", t.stroke()),
        t._strokeFunc(this),
        a || this.restore();
    }
  }
  _applyShadow(t) {
    var n,
      a,
      s,
      l = (n = t.getShadowRGBA()) !== null && n !== void 0 ? n : "black",
      h = (a = t.getShadowBlur()) !== null && a !== void 0 ? a : 5,
      c =
        (s = t.getShadowOffset()) !== null && s !== void 0 ? s : { x: 0, y: 0 },
      f = t.getAbsoluteScale(),
      p = this.canvas.getPixelRatio(),
      m = f.x * p,
      x = f.y * p;
    this.setAttr("shadowColor", l),
      this.setAttr("shadowBlur", h * Math.min(Math.abs(m), Math.abs(x))),
      this.setAttr("shadowOffsetX", c.x * m),
      this.setAttr("shadowOffsetY", c.y * x);
  }
}
lr.SceneContext = qc;
class Qc extends ga {
  constructor(t) {
    super(t),
      (this._context = t._canvas.getContext("2d", { willReadFrequently: !0 }));
  }
  _fill(t) {
    this.save(),
      this.setAttr("fillStyle", t.colorKey),
      t._fillFuncHit(this),
      this.restore();
  }
  strokeShape(t) {
    t.hasHitStroke() && this._stroke(t);
  }
  _stroke(t) {
    if (t.hasHitStroke()) {
      const l = t.getStrokeScaleEnabled();
      if (!l) {
        this.save();
        var n = this.getCanvas().getPixelRatio();
        this.setTransform(n, 0, 0, n, 0, 0);
      }
      this._applyLineCap(t);
      var a = t.hitStrokeWidth(),
        s = a === "auto" ? t.strokeWidth() : a;
      this.setAttr("lineWidth", s),
        this.setAttr("strokeStyle", t.colorKey),
        t._strokeFuncHit(this),
        l || this.restore();
    }
  }
}
lr.HitContext = Qc;
Object.defineProperty(Ut, "__esModule", { value: !0 });
Ut.HitCanvas = Ut.SceneCanvas = Ut.Canvas = void 0;
const ua = Be,
  qh = lr,
  Qh = ce,
  $c = fe,
  Jc = re;
var ta;
function Zc() {
  if (ta) return ta;
  var d = ua.Util.createCanvasElement(),
    t = d.getContext("2d");
  return (
    (ta = (function () {
      var n = Qh.Konva._global.devicePixelRatio || 1,
        a =
          t.webkitBackingStorePixelRatio ||
          t.mozBackingStorePixelRatio ||
          t.msBackingStorePixelRatio ||
          t.oBackingStorePixelRatio ||
          t.backingStorePixelRatio ||
          1;
      return n / a;
    })()),
    ua.Util.releaseCanvas(d),
    ta
  );
}
class pa {
  constructor(t) {
    (this.pixelRatio = 1),
      (this.width = 0),
      (this.height = 0),
      (this.isCache = !1);
    var n = t || {},
      a = n.pixelRatio || Qh.Konva.pixelRatio || Zc();
    (this.pixelRatio = a),
      (this._canvas = ua.Util.createCanvasElement()),
      (this._canvas.style.padding = "0"),
      (this._canvas.style.margin = "0"),
      (this._canvas.style.border = "0"),
      (this._canvas.style.background = "transparent"),
      (this._canvas.style.position = "absolute"),
      (this._canvas.style.top = "0"),
      (this._canvas.style.left = "0");
  }
  getContext() {
    return this.context;
  }
  getPixelRatio() {
    return this.pixelRatio;
  }
  setPixelRatio(t) {
    var n = this.pixelRatio;
    (this.pixelRatio = t),
      this.setSize(this.getWidth() / n, this.getHeight() / n);
  }
  setWidth(t) {
    (this.width = this._canvas.width = t * this.pixelRatio),
      (this._canvas.style.width = t + "px");
    var n = this.pixelRatio,
      a = this.getContext()._context;
    a.scale(n, n);
  }
  setHeight(t) {
    (this.height = this._canvas.height = t * this.pixelRatio),
      (this._canvas.style.height = t + "px");
    var n = this.pixelRatio,
      a = this.getContext()._context;
    a.scale(n, n);
  }
  getWidth() {
    return this.width;
  }
  getHeight() {
    return this.height;
  }
  setSize(t, n) {
    this.setWidth(t || 0), this.setHeight(n || 0);
  }
  toDataURL(t, n) {
    try {
      return this._canvas.toDataURL(t, n);
    } catch {
      try {
        return this._canvas.toDataURL();
      } catch (s) {
        return (
          ua.Util.error(
            "Unable to get data URL. " +
              s.message +
              " For more info read https://konvajs.org/docs/posts/Tainted_Canvas.html."
          ),
          ""
        );
      }
    }
  }
}
Ut.Canvas = pa;
$c.Factory.addGetterSetter(
  pa,
  "pixelRatio",
  void 0,
  (0, Jc.getNumberValidator)()
);
class e1 extends pa {
  constructor(t = { width: 0, height: 0, willReadFrequently: !1 }) {
    super(t),
      (this.context = new qh.SceneContext(this, {
        willReadFrequently: t.willReadFrequently,
      })),
      this.setSize(t.width, t.height);
  }
}
Ut.SceneCanvas = e1;
class t1 extends pa {
  constructor(t = { width: 0, height: 0 }) {
    super(t),
      (this.hitCanvas = !0),
      (this.context = new qh.HitContext(this)),
      this.setSize(t.width, t.height);
  }
}
Ut.HitCanvas = t1;
var va = {};
(function (d) {
  Object.defineProperty(d, "__esModule", { value: !0 }), (d.DD = void 0);
  const t = ce,
    n = Be;
  (d.DD = {
    get isDragging() {
      var a = !1;
      return (
        d.DD._dragElements.forEach((s) => {
          s.dragStatus === "dragging" && (a = !0);
        }),
        a
      );
    },
    justDragged: !1,
    get node() {
      var a;
      return (
        d.DD._dragElements.forEach((s) => {
          a = s.node;
        }),
        a
      );
    },
    _dragElements: new Map(),
    _drag(a) {
      const s = [];
      d.DD._dragElements.forEach((l, h) => {
        const { node: c } = l,
          f = c.getStage();
        f.setPointersPositions(a),
          l.pointerId === void 0 &&
            (l.pointerId = n.Util._getFirstPointerId(a));
        const p = f._changedPointerPositions.find((C) => C.id === l.pointerId);
        if (p) {
          if (l.dragStatus !== "dragging") {
            var m = c.dragDistance(),
              x = Math.max(
                Math.abs(p.x - l.startPointerPos.x),
                Math.abs(p.y - l.startPointerPos.y)
              );
            if (x < m || (c.startDrag({ evt: a }), !c.isDragging())) return;
          }
          c._setDragPosition(a, l), s.push(c);
        }
      }),
        s.forEach((l) => {
          l.fire("dragmove", { type: "dragmove", target: l, evt: a }, !0);
        });
    },
    _endDragBefore(a) {
      const s = [];
      d.DD._dragElements.forEach((l) => {
        const { node: h } = l,
          c = h.getStage();
        if (
          (a && c.setPointersPositions(a),
          !c._changedPointerPositions.find((m) => m.id === l.pointerId))
        )
          return;
        (l.dragStatus === "dragging" || l.dragStatus === "stopped") &&
          ((d.DD.justDragged = !0),
          (t.Konva._mouseListenClick = !1),
          (t.Konva._touchListenClick = !1),
          (t.Konva._pointerListenClick = !1),
          (l.dragStatus = "stopped"));
        const p =
          l.node.getLayer() || (l.node instanceof t.Konva.Stage && l.node);
        p && s.indexOf(p) === -1 && s.push(p);
      }),
        s.forEach((l) => {
          l.draw();
        });
    },
    _endDragAfter(a) {
      d.DD._dragElements.forEach((s, l) => {
        s.dragStatus === "stopped" &&
          s.node.fire(
            "dragend",
            { type: "dragend", target: s.node, evt: a },
            !0
          ),
          s.dragStatus !== "dragging" && d.DD._dragElements.delete(l);
      });
    },
  }),
    t.Konva.isBrowser &&
      (window.addEventListener("mouseup", d.DD._endDragBefore, !0),
      window.addEventListener("touchend", d.DD._endDragBefore, !0),
      window.addEventListener("mousemove", d.DD._drag),
      window.addEventListener("touchmove", d.DD._drag),
      window.addEventListener("mouseup", d.DD._endDragAfter, !1),
      window.addEventListener("touchend", d.DD._endDragAfter, !1));
})(va);
Object.defineProperty(Ge, "__esModule", { value: !0 });
Ge.Node = void 0;
const me = Be,
  ii = fe,
  Qn = Ut,
  Er = ce,
  bt = va,
  We = re;
var sa = "absoluteOpacity",
  ra = "allEventListeners",
  or = "absoluteTransform",
  th = "absoluteScale",
  jr = "canvas",
  r1 = "Change",
  n1 = "children",
  i1 = "konva",
  Do = "listening",
  rh = "mouseenter",
  nh = "mouseleave",
  ih = "set",
  ah = "Shape",
  oa = " ",
  sh = "stage",
  kr = "transform",
  a1 = "Stage",
  Io = "visible",
  s1 = [
    "xChange.konva",
    "yChange.konva",
    "scaleXChange.konva",
    "scaleYChange.konva",
    "skewXChange.konva",
    "skewYChange.konva",
    "rotationChange.konva",
    "offsetXChange.konva",
    "offsetYChange.konva",
    "transformsEnabledChange.konva",
  ].join(oa);
let o1 = 1;
class oe {
  constructor(t) {
    (this._id = o1++),
      (this.eventListeners = {}),
      (this.attrs = {}),
      (this.index = 0),
      (this._allEventListeners = null),
      (this.parent = null),
      (this._cache = new Map()),
      (this._attachedDepsListeners = new Map()),
      (this._lastPos = null),
      (this._batchingTransformChange = !1),
      (this._needClearTransformCache = !1),
      (this._filterUpToDate = !1),
      (this._isUnderCache = !1),
      (this._dragEventId = null),
      (this._shouldFireChangeEvents = !1),
      this.setAttrs(t),
      (this._shouldFireChangeEvents = !0);
  }
  hasChildren() {
    return !1;
  }
  _clearCache(t) {
    (t === kr || t === or) && this._cache.get(t)
      ? (this._cache.get(t).dirty = !0)
      : t
      ? this._cache.delete(t)
      : this._cache.clear();
  }
  _getCache(t, n) {
    var a = this._cache.get(t),
      s = t === kr || t === or,
      l = a === void 0 || (s && a.dirty === !0);
    return l && ((a = n.call(this)), this._cache.set(t, a)), a;
  }
  _calculate(t, n, a) {
    if (!this._attachedDepsListeners.get(t)) {
      const s = n.map((l) => l + "Change.konva").join(oa);
      this.on(s, () => {
        this._clearCache(t);
      }),
        this._attachedDepsListeners.set(t, !0);
    }
    return this._getCache(t, a);
  }
  _getCanvasCache() {
    return this._cache.get(jr);
  }
  _clearSelfAndDescendantCache(t) {
    this._clearCache(t), t === or && this.fire("absoluteTransformChange");
  }
  clearCache() {
    if (this._cache.has(jr)) {
      const { scene: t, filter: n, hit: a } = this._cache.get(jr);
      me.Util.releaseCanvas(t, n, a), this._cache.delete(jr);
    }
    return this._clearSelfAndDescendantCache(), this._requestDraw(), this;
  }
  cache(t) {
    var n = t || {},
      a = {};
    (n.x === void 0 ||
      n.y === void 0 ||
      n.width === void 0 ||
      n.height === void 0) &&
      (a = this.getClientRect({
        skipTransform: !0,
        relativeTo: this.getParent() || void 0,
      }));
    var s = Math.ceil(n.width || a.width),
      l = Math.ceil(n.height || a.height),
      h = n.pixelRatio,
      c = n.x === void 0 ? Math.floor(a.x) : n.x,
      f = n.y === void 0 ? Math.floor(a.y) : n.y,
      p = n.offset || 0,
      m = n.drawBorder || !1,
      x = n.hitCanvasPixelRatio || 1;
    if (!s || !l) {
      me.Util.error(
        "Can not cache the node. Width or height of the node equals 0. Caching is skipped."
      );
      return;
    }
    const C = Math.abs(Math.round(a.x) - c) > 0.5 ? 1 : 0,
      _ = Math.abs(Math.round(a.y) - f) > 0.5 ? 1 : 0;
    (s += p * 2 + C), (l += p * 2 + _), (c -= p), (f -= p);
    var y = new Qn.SceneCanvas({ pixelRatio: h, width: s, height: l }),
      P = new Qn.SceneCanvas({
        pixelRatio: h,
        width: 0,
        height: 0,
        willReadFrequently: !0,
      }),
      k = new Qn.HitCanvas({ pixelRatio: x, width: s, height: l }),
      R = y.getContext(),
      F = k.getContext();
    return (
      (k.isCache = !0),
      (y.isCache = !0),
      this._cache.delete(jr),
      (this._filterUpToDate = !1),
      n.imageSmoothingEnabled === !1 &&
        ((y.getContext()._context.imageSmoothingEnabled = !1),
        (P.getContext()._context.imageSmoothingEnabled = !1)),
      R.save(),
      F.save(),
      R.translate(-c, -f),
      F.translate(-c, -f),
      (this._isUnderCache = !0),
      this._clearSelfAndDescendantCache(sa),
      this._clearSelfAndDescendantCache(th),
      this.drawScene(y, this),
      this.drawHit(k, this),
      (this._isUnderCache = !1),
      R.restore(),
      F.restore(),
      m &&
        (R.save(),
        R.beginPath(),
        R.rect(0, 0, s, l),
        R.closePath(),
        R.setAttr("strokeStyle", "red"),
        R.setAttr("lineWidth", 5),
        R.stroke(),
        R.restore()),
      this._cache.set(jr, { scene: y, filter: P, hit: k, x: c, y: f }),
      this._requestDraw(),
      this
    );
  }
  isCached() {
    return this._cache.has(jr);
  }
  getClientRect(t) {
    throw new Error('abstract "getClientRect" method call');
  }
  _transformedRect(t, n) {
    var a = [
        { x: t.x, y: t.y },
        { x: t.x + t.width, y: t.y },
        { x: t.x + t.width, y: t.y + t.height },
        { x: t.x, y: t.y + t.height },
      ],
      s = 1 / 0,
      l = 1 / 0,
      h = -1 / 0,
      c = -1 / 0,
      f = this.getAbsoluteTransform(n);
    return (
      a.forEach(function (p) {
        var m = f.point(p);
        s === void 0 && ((s = h = m.x), (l = c = m.y)),
          (s = Math.min(s, m.x)),
          (l = Math.min(l, m.y)),
          (h = Math.max(h, m.x)),
          (c = Math.max(c, m.y));
      }),
      { x: s, y: l, width: h - s, height: c - l }
    );
  }
  _drawCachedSceneCanvas(t) {
    t.save(), t._applyOpacity(this), t._applyGlobalCompositeOperation(this);
    const n = this._getCanvasCache();
    t.translate(n.x, n.y);
    var a = this._getCachedSceneCanvas(),
      s = a.pixelRatio;
    t.drawImage(a._canvas, 0, 0, a.width / s, a.height / s), t.restore();
  }
  _drawCachedHitCanvas(t) {
    var n = this._getCanvasCache(),
      a = n.hit;
    t.save(),
      t.translate(n.x, n.y),
      t.drawImage(
        a._canvas,
        0,
        0,
        a.width / a.pixelRatio,
        a.height / a.pixelRatio
      ),
      t.restore();
  }
  _getCachedSceneCanvas() {
    var t = this.filters(),
      n = this._getCanvasCache(),
      a = n.scene,
      s = n.filter,
      l = s.getContext(),
      h,
      c,
      f,
      p;
    if (t) {
      if (!this._filterUpToDate) {
        var m = a.pixelRatio;
        s.setSize(a.width / a.pixelRatio, a.height / a.pixelRatio);
        try {
          for (
            h = t.length,
              l.clear(),
              l.drawImage(a._canvas, 0, 0, a.getWidth() / m, a.getHeight() / m),
              c = l.getImageData(0, 0, s.getWidth(), s.getHeight()),
              f = 0;
            f < h;
            f++
          ) {
            if (((p = t[f]), typeof p != "function")) {
              me.Util.error(
                "Filter should be type of function, but got " +
                  typeof p +
                  " instead. Please check correct filters"
              );
              continue;
            }
            p.call(this, c), l.putImageData(c, 0, 0);
          }
        } catch (x) {
          me.Util.error(
            "Unable to apply filter. " +
              x.message +
              " This post my help you https://konvajs.org/docs/posts/Tainted_Canvas.html."
          );
        }
        this._filterUpToDate = !0;
      }
      return s;
    }
    return a;
  }
  on(t, n) {
    if ((this._cache && this._cache.delete(ra), arguments.length === 3))
      return this._delegate.apply(this, arguments);
    var a = t.split(oa),
      s = a.length,
      l,
      h,
      c,
      f,
      p;
    for (l = 0; l < s; l++)
      (h = a[l]),
        (c = h.split(".")),
        (f = c[0]),
        (p = c[1] || ""),
        this.eventListeners[f] || (this.eventListeners[f] = []),
        this.eventListeners[f].push({ name: p, handler: n });
    return this;
  }
  off(t, n) {
    var a = (t || "").split(oa),
      s = a.length,
      l,
      h,
      c,
      f,
      p,
      m;
    if ((this._cache && this._cache.delete(ra), !t))
      for (h in this.eventListeners) this._off(h);
    for (l = 0; l < s; l++)
      if (((c = a[l]), (f = c.split(".")), (p = f[0]), (m = f[1]), p))
        this.eventListeners[p] && this._off(p, m, n);
      else for (h in this.eventListeners) this._off(h, m, n);
    return this;
  }
  dispatchEvent(t) {
    var n = { target: this, type: t.type, evt: t };
    return this.fire(t.type, n), this;
  }
  addEventListener(t, n) {
    return (
      this.on(t, function (a) {
        n.call(this, a.evt);
      }),
      this
    );
  }
  removeEventListener(t) {
    return this.off(t), this;
  }
  _delegate(t, n, a) {
    var s = this;
    this.on(t, function (l) {
      for (var h = l.target.findAncestors(n, !0, s), c = 0; c < h.length; c++)
        (l = me.Util.cloneObject(l)), (l.currentTarget = h[c]), a.call(h[c], l);
    });
  }
  remove() {
    return (
      this.isDragging() && this.stopDrag(),
      bt.DD._dragElements.delete(this._id),
      this._remove(),
      this
    );
  }
  _clearCaches() {
    this._clearSelfAndDescendantCache(or),
      this._clearSelfAndDescendantCache(sa),
      this._clearSelfAndDescendantCache(th),
      this._clearSelfAndDescendantCache(sh),
      this._clearSelfAndDescendantCache(Io),
      this._clearSelfAndDescendantCache(Do);
  }
  _remove() {
    this._clearCaches();
    var t = this.getParent();
    t &&
      t.children &&
      (t.children.splice(this.index, 1),
      t._setChildrenIndices(),
      (this.parent = null));
  }
  destroy() {
    return this.remove(), this.clearCache(), this;
  }
  getAttr(t) {
    var n = "get" + me.Util._capitalize(t);
    return me.Util._isFunction(this[n]) ? this[n]() : this.attrs[t];
  }
  getAncestors() {
    for (var t = this.getParent(), n = []; t; ) n.push(t), (t = t.getParent());
    return n;
  }
  getAttrs() {
    return this.attrs || {};
  }
  setAttrs(t) {
    return (
      this._batchTransformChanges(() => {
        var n, a;
        if (!t) return this;
        for (n in t)
          n !== n1 &&
            ((a = ih + me.Util._capitalize(n)),
            me.Util._isFunction(this[a])
              ? this[a](t[n])
              : this._setAttr(n, t[n]));
      }),
      this
    );
  }
  isListening() {
    return this._getCache(Do, this._isListening);
  }
  _isListening(t) {
    if (!this.listening()) return !1;
    const a = this.getParent();
    return a && a !== t && this !== t ? a._isListening(t) : !0;
  }
  isVisible() {
    return this._getCache(Io, this._isVisible);
  }
  _isVisible(t) {
    if (!this.visible()) return !1;
    const a = this.getParent();
    return a && a !== t && this !== t ? a._isVisible(t) : !0;
  }
  shouldDrawHit(t, n = !1) {
    if (t) return this._isVisible(t) && this._isListening(t);
    var a = this.getLayer(),
      s = !1;
    bt.DD._dragElements.forEach((h) => {
      h.dragStatus === "dragging" &&
        (h.node.nodeType === "Stage" || h.node.getLayer() === a) &&
        (s = !0);
    });
    var l =
      !n && !Er.Konva.hitOnDragEnabled && (s || Er.Konva.isTransforming());
    return this.isListening() && this.isVisible() && !l;
  }
  show() {
    return this.visible(!0), this;
  }
  hide() {
    return this.visible(!1), this;
  }
  getZIndex() {
    return this.index || 0;
  }
  getAbsoluteZIndex() {
    var t = this.getDepth(),
      n = this,
      a = 0,
      s,
      l,
      h,
      c;
    function f(m) {
      for (s = [], l = m.length, h = 0; h < l; h++)
        (c = m[h]),
          a++,
          c.nodeType !== ah && (s = s.concat(c.getChildren().slice())),
          c._id === n._id && (h = l);
      s.length > 0 && s[0].getDepth() <= t && f(s);
    }
    const p = this.getStage();
    return n.nodeType !== a1 && p && f(p.getChildren()), a;
  }
  getDepth() {
    for (var t = 0, n = this.parent; n; ) t++, (n = n.parent);
    return t;
  }
  _batchTransformChanges(t) {
    (this._batchingTransformChange = !0),
      t(),
      (this._batchingTransformChange = !1),
      this._needClearTransformCache &&
        (this._clearCache(kr), this._clearSelfAndDescendantCache(or)),
      (this._needClearTransformCache = !1);
  }
  setPosition(t) {
    return (
      this._batchTransformChanges(() => {
        this.x(t.x), this.y(t.y);
      }),
      this
    );
  }
  getPosition() {
    return { x: this.x(), y: this.y() };
  }
  getRelativePointerPosition() {
    const t = this.getStage();
    if (!t) return null;
    var n = t.getPointerPosition();
    if (!n) return null;
    var a = this.getAbsoluteTransform().copy();
    return a.invert(), a.point(n);
  }
  getAbsolutePosition(t) {
    let n = !1,
      a = this.parent;
    for (; a; ) {
      if (a.isCached()) {
        n = !0;
        break;
      }
      a = a.parent;
    }
    n && !t && (t = !0);
    var s = this.getAbsoluteTransform(t).getMatrix(),
      l = new me.Transform(),
      h = this.offset();
    return (l.m = s.slice()), l.translate(h.x, h.y), l.getTranslation();
  }
  setAbsolutePosition(t) {
    const { x: n, y: a, ...s } = this._clearTransform();
    (this.attrs.x = n), (this.attrs.y = a), this._clearCache(kr);
    var l = this._getAbsoluteTransform().copy();
    return (
      l.invert(),
      l.translate(t.x, t.y),
      (t = {
        x: this.attrs.x + l.getTranslation().x,
        y: this.attrs.y + l.getTranslation().y,
      }),
      this._setTransform(s),
      this.setPosition({ x: t.x, y: t.y }),
      this._clearCache(kr),
      this._clearSelfAndDescendantCache(or),
      this
    );
  }
  _setTransform(t) {
    var n;
    for (n in t) this.attrs[n] = t[n];
  }
  _clearTransform() {
    var t = {
      x: this.x(),
      y: this.y(),
      rotation: this.rotation(),
      scaleX: this.scaleX(),
      scaleY: this.scaleY(),
      offsetX: this.offsetX(),
      offsetY: this.offsetY(),
      skewX: this.skewX(),
      skewY: this.skewY(),
    };
    return (
      (this.attrs.x = 0),
      (this.attrs.y = 0),
      (this.attrs.rotation = 0),
      (this.attrs.scaleX = 1),
      (this.attrs.scaleY = 1),
      (this.attrs.offsetX = 0),
      (this.attrs.offsetY = 0),
      (this.attrs.skewX = 0),
      (this.attrs.skewY = 0),
      t
    );
  }
  move(t) {
    var n = t.x,
      a = t.y,
      s = this.x(),
      l = this.y();
    return (
      n !== void 0 && (s += n),
      a !== void 0 && (l += a),
      this.setPosition({ x: s, y: l }),
      this
    );
  }
  _eachAncestorReverse(t, n) {
    var a = [],
      s = this.getParent(),
      l,
      h;
    if (!(n && n._id === this._id)) {
      for (a.unshift(this); s && (!n || s._id !== n._id); )
        a.unshift(s), (s = s.parent);
      for (l = a.length, h = 0; h < l; h++) t(a[h]);
    }
  }
  rotate(t) {
    return this.rotation(this.rotation() + t), this;
  }
  moveToTop() {
    if (!this.parent)
      return (
        me.Util.warn("Node has no parent. moveToTop function is ignored."), !1
      );
    var t = this.index,
      n = this.parent.getChildren().length;
    return t < n - 1
      ? (this.parent.children.splice(t, 1),
        this.parent.children.push(this),
        this.parent._setChildrenIndices(),
        !0)
      : !1;
  }
  moveUp() {
    if (!this.parent)
      return (
        me.Util.warn("Node has no parent. moveUp function is ignored."), !1
      );
    var t = this.index,
      n = this.parent.getChildren().length;
    return t < n - 1
      ? (this.parent.children.splice(t, 1),
        this.parent.children.splice(t + 1, 0, this),
        this.parent._setChildrenIndices(),
        !0)
      : !1;
  }
  moveDown() {
    if (!this.parent)
      return (
        me.Util.warn("Node has no parent. moveDown function is ignored."), !1
      );
    var t = this.index;
    return t > 0
      ? (this.parent.children.splice(t, 1),
        this.parent.children.splice(t - 1, 0, this),
        this.parent._setChildrenIndices(),
        !0)
      : !1;
  }
  moveToBottom() {
    if (!this.parent)
      return (
        me.Util.warn("Node has no parent. moveToBottom function is ignored."),
        !1
      );
    var t = this.index;
    return t > 0
      ? (this.parent.children.splice(t, 1),
        this.parent.children.unshift(this),
        this.parent._setChildrenIndices(),
        !0)
      : !1;
  }
  setZIndex(t) {
    if (!this.parent)
      return (
        me.Util.warn("Node has no parent. zIndex parameter is ignored."), this
      );
    (t < 0 || t >= this.parent.children.length) &&
      me.Util.warn(
        "Unexpected value " +
          t +
          " for zIndex property. zIndex is just index of a node in children of its parent. Expected value is from 0 to " +
          (this.parent.children.length - 1) +
          "."
      );
    var n = this.index;
    return (
      this.parent.children.splice(n, 1),
      this.parent.children.splice(t, 0, this),
      this.parent._setChildrenIndices(),
      this
    );
  }
  getAbsoluteOpacity() {
    return this._getCache(sa, this._getAbsoluteOpacity);
  }
  _getAbsoluteOpacity() {
    var t = this.opacity(),
      n = this.getParent();
    return n && !n._isUnderCache && (t *= n.getAbsoluteOpacity()), t;
  }
  moveTo(t) {
    return this.getParent() !== t && (this._remove(), t.add(this)), this;
  }
  toObject() {
    var t = this.getAttrs(),
      n,
      a,
      s,
      l,
      h;
    const c = { attrs: {}, className: this.getClassName() };
    for (n in t)
      (a = t[n]),
        (h =
          me.Util.isObject(a) &&
          !me.Util._isPlainObject(a) &&
          !me.Util._isArray(a)),
        !h &&
          ((s = typeof this[n] == "function" && this[n]),
          delete t[n],
          (l = s ? s.call(this) : null),
          (t[n] = a),
          l !== a && (c.attrs[n] = a));
    return me.Util._prepareToStringify(c);
  }
  toJSON() {
    return JSON.stringify(this.toObject());
  }
  getParent() {
    return this.parent;
  }
  findAncestors(t, n, a) {
    var s = [];
    n && this._isMatch(t) && s.push(this);
    for (var l = this.parent; l; ) {
      if (l === a) return s;
      l._isMatch(t) && s.push(l), (l = l.parent);
    }
    return s;
  }
  isAncestorOf(t) {
    return !1;
  }
  findAncestor(t, n, a) {
    return this.findAncestors(t, n, a)[0];
  }
  _isMatch(t) {
    if (!t) return !1;
    if (typeof t == "function") return t(this);
    var n = t.replace(/ /g, "").split(","),
      a = n.length,
      s,
      l;
    for (s = 0; s < a; s++)
      if (
        ((l = n[s]),
        me.Util.isValidSelector(l) ||
          (me.Util.warn(
            'Selector "' +
              l +
              '" is invalid. Allowed selectors examples are "#foo", ".bar" or "Group".'
          ),
          me.Util.warn(
            'If you have a custom shape with such className, please change it to start with upper letter like "Triangle".'
          ),
          me.Util.warn("Konva is awesome, right?")),
        l.charAt(0) === "#")
      ) {
        if (this.id() === l.slice(1)) return !0;
      } else if (l.charAt(0) === ".") {
        if (this.hasName(l.slice(1))) return !0;
      } else if (this.className === l || this.nodeType === l) return !0;
    return !1;
  }
  getLayer() {
    var t = this.getParent();
    return t ? t.getLayer() : null;
  }
  getStage() {
    return this._getCache(sh, this._getStage);
  }
  _getStage() {
    var t = this.getParent();
    return t ? t.getStage() : null;
  }
  fire(t, n = {}, a) {
    return (
      (n.target = n.target || this),
      a ? this._fireAndBubble(t, n) : this._fire(t, n),
      this
    );
  }
  getAbsoluteTransform(t) {
    return t
      ? this._getAbsoluteTransform(t)
      : this._getCache(or, this._getAbsoluteTransform);
  }
  _getAbsoluteTransform(t) {
    var n;
    if (t)
      return (
        (n = new me.Transform()),
        this._eachAncestorReverse(function (s) {
          var l = s.transformsEnabled();
          l === "all"
            ? n.multiply(s.getTransform())
            : l === "position" &&
              n.translate(s.x() - s.offsetX(), s.y() - s.offsetY());
        }, t),
        n
      );
    (n = this._cache.get(or) || new me.Transform()),
      this.parent ? this.parent.getAbsoluteTransform().copyInto(n) : n.reset();
    var a = this.transformsEnabled();
    if (a === "all") n.multiply(this.getTransform());
    else if (a === "position") {
      const s = this.attrs.x || 0,
        l = this.attrs.y || 0,
        h = this.attrs.offsetX || 0,
        c = this.attrs.offsetY || 0;
      n.translate(s - h, l - c);
    }
    return (n.dirty = !1), n;
  }
  getAbsoluteScale(t) {
    for (var n = this; n; ) n._isUnderCache && (t = n), (n = n.getParent());
    const s = this.getAbsoluteTransform(t).decompose();
    return { x: s.scaleX, y: s.scaleY };
  }
  getAbsoluteRotation() {
    return this.getAbsoluteTransform().decompose().rotation;
  }
  getTransform() {
    return this._getCache(kr, this._getTransform);
  }
  _getTransform() {
    var t,
      n,
      a = this._cache.get(kr) || new me.Transform();
    a.reset();
    var s = this.x(),
      l = this.y(),
      h = Er.Konva.getAngle(this.rotation()),
      c = (t = this.attrs.scaleX) !== null && t !== void 0 ? t : 1,
      f = (n = this.attrs.scaleY) !== null && n !== void 0 ? n : 1,
      p = this.attrs.skewX || 0,
      m = this.attrs.skewY || 0,
      x = this.attrs.offsetX || 0,
      C = this.attrs.offsetY || 0;
    return (
      (s !== 0 || l !== 0) && a.translate(s, l),
      h !== 0 && a.rotate(h),
      (p !== 0 || m !== 0) && a.skew(p, m),
      (c !== 1 || f !== 1) && a.scale(c, f),
      (x !== 0 || C !== 0) && a.translate(-1 * x, -1 * C),
      (a.dirty = !1),
      a
    );
  }
  clone(t) {
    var n = me.Util.cloneObject(this.attrs),
      a,
      s,
      l,
      h,
      c;
    for (a in t) n[a] = t[a];
    var f = new this.constructor(n);
    for (a in this.eventListeners)
      for (s = this.eventListeners[a], l = s.length, h = 0; h < l; h++)
        (c = s[h]),
          c.name.indexOf(i1) < 0 &&
            (f.eventListeners[a] || (f.eventListeners[a] = []),
            f.eventListeners[a].push(c));
    return f;
  }
  _toKonvaCanvas(t) {
    t = t || {};
    var n = this.getClientRect(),
      a = this.getStage(),
      s = t.x !== void 0 ? t.x : Math.floor(n.x),
      l = t.y !== void 0 ? t.y : Math.floor(n.y),
      h = t.pixelRatio || 1,
      c = new Qn.SceneCanvas({
        width: t.width || Math.ceil(n.width) || (a ? a.width() : 0),
        height: t.height || Math.ceil(n.height) || (a ? a.height() : 0),
        pixelRatio: h,
      }),
      f = c.getContext();
    const p = new Qn.SceneCanvas({
      width: c.width / c.pixelRatio + Math.abs(s),
      height: c.height / c.pixelRatio + Math.abs(l),
      pixelRatio: c.pixelRatio,
    });
    return (
      t.imageSmoothingEnabled === !1 && (f._context.imageSmoothingEnabled = !1),
      f.save(),
      (s || l) && f.translate(-1 * s, -1 * l),
      this.drawScene(c, void 0, p),
      f.restore(),
      c
    );
  }
  toCanvas(t) {
    return this._toKonvaCanvas(t)._canvas;
  }
  toDataURL(t) {
    t = t || {};
    var n = t.mimeType || null,
      a = t.quality || null,
      s = this._toKonvaCanvas(t).toDataURL(n, a);
    return t.callback && t.callback(s), s;
  }
  toImage(t) {
    return new Promise((n, a) => {
      try {
        const s = t == null ? void 0 : t.callback;
        s && delete t.callback,
          me.Util._urlToImage(this.toDataURL(t), function (l) {
            n(l), s == null || s(l);
          });
      } catch (s) {
        a(s);
      }
    });
  }
  toBlob(t) {
    return new Promise((n, a) => {
      try {
        const s = t == null ? void 0 : t.callback;
        s && delete t.callback,
          this.toCanvas(t).toBlob(
            (l) => {
              n(l), s == null || s(l);
            },
            t == null ? void 0 : t.mimeType,
            t == null ? void 0 : t.quality
          );
      } catch (s) {
        a(s);
      }
    });
  }
  setSize(t) {
    return this.width(t.width), this.height(t.height), this;
  }
  getSize() {
    return { width: this.width(), height: this.height() };
  }
  getClassName() {
    return this.className || this.nodeType;
  }
  getType() {
    return this.nodeType;
  }
  getDragDistance() {
    return this.attrs.dragDistance !== void 0
      ? this.attrs.dragDistance
      : this.parent
      ? this.parent.getDragDistance()
      : Er.Konva.dragDistance;
  }
  _off(t, n, a) {
    var s = this.eventListeners[t],
      l,
      h,
      c;
    for (l = 0; l < s.length; l++)
      if (
        ((h = s[l].name),
        (c = s[l].handler),
        (h !== "konva" || n === "konva") && (!n || h === n) && (!a || a === c))
      ) {
        if ((s.splice(l, 1), s.length === 0)) {
          delete this.eventListeners[t];
          break;
        }
        l--;
      }
  }
  _fireChangeEvent(t, n, a) {
    this._fire(t + r1, { oldVal: n, newVal: a });
  }
  addName(t) {
    if (!this.hasName(t)) {
      var n = this.name(),
        a = n ? n + " " + t : t;
      this.name(a);
    }
    return this;
  }
  hasName(t) {
    if (!t) return !1;
    const n = this.name();
    if (!n) return !1;
    var a = (n || "").split(/\s/g);
    return a.indexOf(t) !== -1;
  }
  removeName(t) {
    var n = (this.name() || "").split(/\s/g),
      a = n.indexOf(t);
    return a !== -1 && (n.splice(a, 1), this.name(n.join(" "))), this;
  }
  setAttr(t, n) {
    var a = this[ih + me.Util._capitalize(t)];
    return me.Util._isFunction(a) ? a.call(this, n) : this._setAttr(t, n), this;
  }
  _requestDraw() {
    if (Er.Konva.autoDrawEnabled) {
      const t = this.getLayer() || this.getStage();
      t == null || t.batchDraw();
    }
  }
  _setAttr(t, n) {
    var a = this.attrs[t];
    (a === n && !me.Util.isObject(n)) ||
      (n == null ? delete this.attrs[t] : (this.attrs[t] = n),
      this._shouldFireChangeEvents && this._fireChangeEvent(t, a, n),
      this._requestDraw());
  }
  _setComponentAttr(t, n, a) {
    var s;
    a !== void 0 &&
      ((s = this.attrs[t]),
      s || (this.attrs[t] = this.getAttr(t)),
      (this.attrs[t][n] = a),
      this._fireChangeEvent(t, s, a));
  }
  _fireAndBubble(t, n, a) {
    n && this.nodeType === ah && (n.target = this);
    var s =
      (t === rh || t === nh) &&
      ((a && (this === a || (this.isAncestorOf && this.isAncestorOf(a)))) ||
        (this.nodeType === "Stage" && !a));
    if (!s) {
      this._fire(t, n);
      var l =
        (t === rh || t === nh) &&
        a &&
        a.isAncestorOf &&
        a.isAncestorOf(this) &&
        !a.isAncestorOf(this.parent);
      ((n && !n.cancelBubble) || !n) &&
        this.parent &&
        this.parent.isListening() &&
        !l &&
        (a && a.parent
          ? this._fireAndBubble.call(this.parent, t, n, a)
          : this._fireAndBubble.call(this.parent, t, n));
    }
  }
  _getProtoListeners(t) {
    var n, a, s;
    const l = (n = this._cache.get(ra)) !== null && n !== void 0 ? n : {};
    let h = l == null ? void 0 : l[t];
    if (h === void 0) {
      h = [];
      let c = Object.getPrototypeOf(this);
      for (; c; ) {
        const f =
          (s =
            (a = c.eventListeners) === null || a === void 0 ? void 0 : a[t]) !==
            null && s !== void 0
            ? s
            : [];
        h.push(...f), (c = Object.getPrototypeOf(c));
      }
      (l[t] = h), this._cache.set(ra, l);
    }
    return h;
  }
  _fire(t, n) {
    (n = n || {}), (n.currentTarget = this), (n.type = t);
    const a = this._getProtoListeners(t);
    if (a) for (var s = 0; s < a.length; s++) a[s].handler.call(this, n);
    const l = this.eventListeners[t];
    if (l) for (var s = 0; s < l.length; s++) l[s].handler.call(this, n);
  }
  draw() {
    return this.drawScene(), this.drawHit(), this;
  }
  _createDragElement(t) {
    var n = t ? t.pointerId : void 0,
      a = this.getStage(),
      s = this.getAbsolutePosition();
    if (a) {
      var l = a._getPointerById(n) || a._changedPointerPositions[0] || s;
      bt.DD._dragElements.set(this._id, {
        node: this,
        startPointerPos: l,
        offset: { x: l.x - s.x, y: l.y - s.y },
        dragStatus: "ready",
        pointerId: n,
      });
    }
  }
  startDrag(t, n = !0) {
    bt.DD._dragElements.has(this._id) || this._createDragElement(t);
    const a = bt.DD._dragElements.get(this._id);
    (a.dragStatus = "dragging"),
      this.fire(
        "dragstart",
        { type: "dragstart", target: this, evt: t && t.evt },
        n
      );
  }
  _setDragPosition(t, n) {
    const a = this.getStage()._getPointerById(n.pointerId);
    if (a) {
      var s = { x: a.x - n.offset.x, y: a.y - n.offset.y },
        l = this.dragBoundFunc();
      if (l !== void 0) {
        const h = l.call(this, s, t);
        h
          ? (s = h)
          : me.Util.warn(
              "dragBoundFunc did not return any value. That is unexpected behavior. You must return new absolute position from dragBoundFunc."
            );
      }
      (!this._lastPos || this._lastPos.x !== s.x || this._lastPos.y !== s.y) &&
        (this.setAbsolutePosition(s), this._requestDraw()),
        (this._lastPos = s);
    }
  }
  stopDrag(t) {
    const n = bt.DD._dragElements.get(this._id);
    n && (n.dragStatus = "stopped"),
      bt.DD._endDragBefore(t),
      bt.DD._endDragAfter(t);
  }
  setDraggable(t) {
    this._setAttr("draggable", t), this._dragChange();
  }
  isDragging() {
    const t = bt.DD._dragElements.get(this._id);
    return t ? t.dragStatus === "dragging" : !1;
  }
  _listenDrag() {
    this._dragCleanup(),
      this.on("mousedown.konva touchstart.konva", function (t) {
        var n = t.evt.button !== void 0,
          a = !n || Er.Konva.dragButtons.indexOf(t.evt.button) >= 0;
        if (a && !this.isDragging()) {
          var s = !1;
          bt.DD._dragElements.forEach((l) => {
            this.isAncestorOf(l.node) && (s = !0);
          }),
            s || this._createDragElement(t);
        }
      });
  }
  _dragChange() {
    if (this.attrs.draggable) this._listenDrag();
    else {
      this._dragCleanup();
      var t = this.getStage();
      if (!t) return;
      const n = bt.DD._dragElements.get(this._id),
        a = n && n.dragStatus === "dragging",
        s = n && n.dragStatus === "ready";
      a ? this.stopDrag() : s && bt.DD._dragElements.delete(this._id);
    }
  }
  _dragCleanup() {
    this.off("mousedown.konva"), this.off("touchstart.konva");
  }
  isClientRectOnScreen(t = { x: 0, y: 0 }) {
    const n = this.getStage();
    if (!n) return !1;
    const a = {
      x: -t.x,
      y: -t.y,
      width: n.width() + 2 * t.x,
      height: n.height() + 2 * t.y,
    };
    return me.Util.haveIntersection(a, this.getClientRect());
  }
  static create(t, n) {
    return me.Util._isString(t) && (t = JSON.parse(t)), this._createNode(t, n);
  }
  static _createNode(t, n) {
    var a = oe.prototype.getClassName.call(t),
      s = t.children,
      l,
      h,
      c;
    n && (t.attrs.container = n),
      Er.Konva[a] ||
        (me.Util.warn(
          'Can not find a node with class name "' +
            a +
            '". Fallback to "Shape".'
        ),
        (a = "Shape"));
    const f = Er.Konva[a];
    if (((l = new f(t.attrs)), s))
      for (h = s.length, c = 0; c < h; c++) l.add(oe._createNode(s[c]));
    return l;
  }
}
Ge.Node = oe;
oe.prototype.nodeType = "Node";
oe.prototype._attrsAffectingSize = [];
oe.prototype.eventListeners = {};
oe.prototype.on.call(oe.prototype, s1, function () {
  if (this._batchingTransformChange) {
    this._needClearTransformCache = !0;
    return;
  }
  this._clearCache(kr), this._clearSelfAndDescendantCache(or);
});
oe.prototype.on.call(oe.prototype, "visibleChange.konva", function () {
  this._clearSelfAndDescendantCache(Io);
});
oe.prototype.on.call(oe.prototype, "listeningChange.konva", function () {
  this._clearSelfAndDescendantCache(Do);
});
oe.prototype.on.call(oe.prototype, "opacityChange.konva", function () {
  this._clearSelfAndDescendantCache(sa);
});
const be = ii.Factory.addGetterSetter;
be(oe, "zIndex");
be(oe, "absolutePosition");
be(oe, "position");
be(oe, "x", 0, (0, We.getNumberValidator)());
be(oe, "y", 0, (0, We.getNumberValidator)());
be(oe, "globalCompositeOperation", "source-over", (0, We.getStringValidator)());
be(oe, "opacity", 1, (0, We.getNumberValidator)());
be(oe, "name", "", (0, We.getStringValidator)());
be(oe, "id", "", (0, We.getStringValidator)());
be(oe, "rotation", 0, (0, We.getNumberValidator)());
ii.Factory.addComponentsGetterSetter(oe, "scale", ["x", "y"]);
be(oe, "scaleX", 1, (0, We.getNumberValidator)());
be(oe, "scaleY", 1, (0, We.getNumberValidator)());
ii.Factory.addComponentsGetterSetter(oe, "skew", ["x", "y"]);
be(oe, "skewX", 0, (0, We.getNumberValidator)());
be(oe, "skewY", 0, (0, We.getNumberValidator)());
ii.Factory.addComponentsGetterSetter(oe, "offset", ["x", "y"]);
be(oe, "offsetX", 0, (0, We.getNumberValidator)());
be(oe, "offsetY", 0, (0, We.getNumberValidator)());
be(oe, "dragDistance", null, (0, We.getNumberValidator)());
be(oe, "width", 0, (0, We.getNumberValidator)());
be(oe, "height", 0, (0, We.getNumberValidator)());
be(oe, "listening", !0, (0, We.getBooleanValidator)());
be(oe, "preventDefault", !0, (0, We.getBooleanValidator)());
be(oe, "filters", null, function (d) {
  return (this._filterUpToDate = !1), d;
});
be(oe, "visible", !0, (0, We.getBooleanValidator)());
be(oe, "transformsEnabled", "all", (0, We.getStringValidator)());
be(oe, "size");
be(oe, "dragBoundFunc");
be(oe, "draggable", !1, (0, We.getBooleanValidator)());
ii.Factory.backCompat(oe, {
  rotateDeg: "rotate",
  setRotationDeg: "setRotation",
  getRotationDeg: "getRotation",
});
var Yr = {};
Object.defineProperty(Yr, "__esModule", { value: !0 });
Yr.Container = void 0;
const xn = fe,
  Co = Ge,
  ma = re;
class Xr extends Co.Node {
  constructor() {
    super(...arguments), (this.children = []);
  }
  getChildren(t) {
    if (!t) return this.children || [];
    const n = this.children || [];
    var a = [];
    return (
      n.forEach(function (s) {
        t(s) && a.push(s);
      }),
      a
    );
  }
  hasChildren() {
    return this.getChildren().length > 0;
  }
  removeChildren() {
    return (
      this.getChildren().forEach((t) => {
        (t.parent = null), (t.index = 0), t.remove();
      }),
      (this.children = []),
      this._requestDraw(),
      this
    );
  }
  destroyChildren() {
    return (
      this.getChildren().forEach((t) => {
        (t.parent = null), (t.index = 0), t.destroy();
      }),
      (this.children = []),
      this._requestDraw(),
      this
    );
  }
  add(...t) {
    if (t.length === 0) return this;
    if (t.length > 1) {
      for (var n = 0; n < t.length; n++) this.add(t[n]);
      return this;
    }
    const a = t[0];
    return a.getParent()
      ? (a.moveTo(this), this)
      : (this._validateAdd(a),
        (a.index = this.getChildren().length),
        (a.parent = this),
        a._clearCaches(),
        this.getChildren().push(a),
        this._fire("add", { child: a }),
        this._requestDraw(),
        this);
  }
  destroy() {
    return this.hasChildren() && this.destroyChildren(), super.destroy(), this;
  }
  find(t) {
    return this._generalFind(t, !1);
  }
  findOne(t) {
    var n = this._generalFind(t, !0);
    return n.length > 0 ? n[0] : void 0;
  }
  _generalFind(t, n) {
    var a = [];
    return (
      this._descendants((s) => {
        const l = s._isMatch(t);
        return l && a.push(s), !!(l && n);
      }),
      a
    );
  }
  _descendants(t) {
    let n = !1;
    const a = this.getChildren();
    for (const s of a) {
      if (((n = t(s)), n)) return !0;
      if (s.hasChildren() && ((n = s._descendants(t)), n)) return !0;
    }
    return !1;
  }
  toObject() {
    var t = Co.Node.prototype.toObject.call(this);
    return (
      (t.children = []),
      this.getChildren().forEach((n) => {
        t.children.push(n.toObject());
      }),
      t
    );
  }
  isAncestorOf(t) {
    for (var n = t.getParent(); n; ) {
      if (n._id === this._id) return !0;
      n = n.getParent();
    }
    return !1;
  }
  clone(t) {
    var n = Co.Node.prototype.clone.call(this, t);
    return (
      this.getChildren().forEach(function (a) {
        n.add(a.clone());
      }),
      n
    );
  }
  getAllIntersections(t) {
    var n = [];
    return (
      this.find("Shape").forEach((a) => {
        a.isVisible() && a.intersects(t) && n.push(a);
      }),
      n
    );
  }
  _clearSelfAndDescendantCache(t) {
    var n;
    super._clearSelfAndDescendantCache(t),
      !this.isCached() &&
        ((n = this.children) === null ||
          n === void 0 ||
          n.forEach(function (a) {
            a._clearSelfAndDescendantCache(t);
          }));
  }
  _setChildrenIndices() {
    var t;
    (t = this.children) === null ||
      t === void 0 ||
      t.forEach(function (n, a) {
        n.index = a;
      }),
      this._requestDraw();
  }
  drawScene(t, n, a) {
    var s = this.getLayer(),
      l = t || (s && s.getCanvas()),
      h = l && l.getContext(),
      c = this._getCanvasCache(),
      f = c && c.scene,
      p = l && l.isCache;
    if (!this.isVisible() && !p) return this;
    if (f) {
      h.save();
      var m = this.getAbsoluteTransform(n).getMatrix();
      h.transform(m[0], m[1], m[2], m[3], m[4], m[5]),
        this._drawCachedSceneCanvas(h),
        h.restore();
    } else this._drawChildren("drawScene", l, n, a);
    return this;
  }
  drawHit(t, n) {
    if (!this.shouldDrawHit(n)) return this;
    var a = this.getLayer(),
      s = t || (a && a.hitCanvas),
      l = s && s.getContext(),
      h = this._getCanvasCache(),
      c = h && h.hit;
    if (c) {
      l.save();
      var f = this.getAbsoluteTransform(n).getMatrix();
      l.transform(f[0], f[1], f[2], f[3], f[4], f[5]),
        this._drawCachedHitCanvas(l),
        l.restore();
    } else this._drawChildren("drawHit", s, n);
    return this;
  }
  _drawChildren(t, n, a, s) {
    var l,
      h = n && n.getContext(),
      c = this.clipWidth(),
      f = this.clipHeight(),
      p = this.clipFunc(),
      m = (typeof c == "number" && typeof f == "number") || p;
    const x = a === this;
    if (m) {
      h.save();
      var C = this.getAbsoluteTransform(a),
        _ = C.getMatrix();
      h.transform(_[0], _[1], _[2], _[3], _[4], _[5]), h.beginPath();
      let R;
      if (p) R = p.call(this, h, this);
      else {
        var y = this.clipX(),
          P = this.clipY();
        h.rect(y || 0, P || 0, c, f);
      }
      h.clip.apply(h, R),
        (_ = C.copy().invert().getMatrix()),
        h.transform(_[0], _[1], _[2], _[3], _[4], _[5]);
    }
    var k =
      !x &&
      this.globalCompositeOperation() !== "source-over" &&
      t === "drawScene";
    k && (h.save(), h._applyGlobalCompositeOperation(this)),
      (l = this.children) === null ||
        l === void 0 ||
        l.forEach(function (R) {
          R[t](n, a, s);
        }),
      k && h.restore(),
      m && h.restore();
  }
  getClientRect(t = {}) {
    var n,
      a = t.skipTransform,
      s = t.relativeTo,
      l,
      h,
      c,
      f,
      p = { x: 1 / 0, y: 1 / 0, width: 0, height: 0 },
      m = this;
    (n = this.children) === null ||
      n === void 0 ||
      n.forEach(function (P) {
        if (P.visible()) {
          var k = P.getClientRect({
            relativeTo: m,
            skipShadow: t.skipShadow,
            skipStroke: t.skipStroke,
          });
          (k.width === 0 && k.height === 0) ||
            (l === void 0
              ? ((l = k.x),
                (h = k.y),
                (c = k.x + k.width),
                (f = k.y + k.height))
              : ((l = Math.min(l, k.x)),
                (h = Math.min(h, k.y)),
                (c = Math.max(c, k.x + k.width)),
                (f = Math.max(f, k.y + k.height))));
        }
      });
    for (var x = this.find("Shape"), C = !1, _ = 0; _ < x.length; _++) {
      var y = x[_];
      if (y._isVisible(this)) {
        C = !0;
        break;
      }
    }
    return (
      C && l !== void 0
        ? (p = { x: l, y: h, width: c - l, height: f - h })
        : (p = { x: 0, y: 0, width: 0, height: 0 }),
      a ? p : this._transformedRect(p, s)
    );
  }
}
Yr.Container = Xr;
xn.Factory.addComponentsGetterSetter(Xr, "clip", ["x", "y", "width", "height"]);
xn.Factory.addGetterSetter(Xr, "clipX", void 0, (0, ma.getNumberValidator)());
xn.Factory.addGetterSetter(Xr, "clipY", void 0, (0, ma.getNumberValidator)());
xn.Factory.addGetterSetter(
  Xr,
  "clipWidth",
  void 0,
  (0, ma.getNumberValidator)()
);
xn.Factory.addGetterSetter(
  Xr,
  "clipHeight",
  void 0,
  (0, ma.getNumberValidator)()
);
xn.Factory.addGetterSetter(Xr, "clipFunc");
var $h = {},
  wt = {};
Object.defineProperty(wt, "__esModule", { value: !0 });
wt.releaseCapture =
  wt.setPointerCapture =
  wt.hasPointerCapture =
  wt.createEvent =
  wt.getCapturedShape =
    void 0;
const l1 = ce,
  ti = new Map(),
  Jh = l1.Konva._global.PointerEvent !== void 0;
function u1(d) {
  return ti.get(d);
}
wt.getCapturedShape = u1;
function qo(d) {
  return { evt: d, pointerId: d.pointerId };
}
wt.createEvent = qo;
function h1(d, t) {
  return ti.get(d) === t;
}
wt.hasPointerCapture = h1;
function d1(d, t) {
  Zh(d),
    t.getStage() &&
      (ti.set(d, t),
      Jh &&
        t._fire(
          "gotpointercapture",
          qo(new PointerEvent("gotpointercapture"))
        ));
}
wt.setPointerCapture = d1;
function Zh(d, t) {
  const n = ti.get(d);
  if (!n) return;
  const a = n.getStage();
  a && a.content,
    ti.delete(d),
    Jh &&
      n._fire("lostpointercapture", qo(new PointerEvent("lostpointercapture")));
}
wt.releaseCapture = Zh;
(function (d) {
  Object.defineProperty(d, "__esModule", { value: !0 }),
    (d.Stage = d.stages = void 0);
  const t = Be,
    n = fe,
    a = Yr,
    s = ce,
    l = Ut,
    h = va,
    c = ce,
    f = wt;
  var p = "Stage",
    m = "string",
    x = "px",
    C = "mouseout",
    _ = "mouseleave",
    y = "mouseover",
    P = "mouseenter",
    k = "mousemove",
    R = "mousedown",
    F = "mouseup",
    v = "pointermove",
    w = "pointerdown",
    E = "pointerup",
    N = "pointercancel",
    G = "lostpointercapture",
    T = "pointerout",
    z = "pointerleave",
    L = "pointerover",
    O = "pointerenter",
    K = "contextmenu",
    W = "touchstart",
    ne = "touchend",
    X = "touchmove",
    se = "touchcancel",
    ge = "wheel",
    B = 5,
    Q = [
      [P, "_pointerenter"],
      [R, "_pointerdown"],
      [k, "_pointermove"],
      [F, "_pointerup"],
      [_, "_pointerleave"],
      [W, "_pointerdown"],
      [X, "_pointermove"],
      [ne, "_pointerup"],
      [se, "_pointercancel"],
      [y, "_pointerover"],
      [ge, "_wheel"],
      [K, "_contextmenu"],
      [w, "_pointerdown"],
      [v, "_pointermove"],
      [E, "_pointerup"],
      [N, "_pointercancel"],
      [G, "_lostpointercapture"],
    ];
  const H = {
      mouse: {
        [T]: C,
        [z]: _,
        [L]: y,
        [O]: P,
        [v]: k,
        [w]: R,
        [E]: F,
        [N]: "mousecancel",
        pointerclick: "click",
        pointerdblclick: "dblclick",
      },
      touch: {
        [T]: "touchout",
        [z]: "touchleave",
        [L]: "touchover",
        [O]: "touchenter",
        [v]: X,
        [w]: W,
        [E]: ne,
        [N]: se,
        pointerclick: "tap",
        pointerdblclick: "dbltap",
      },
      pointer: {
        [T]: T,
        [z]: z,
        [L]: L,
        [O]: O,
        [v]: v,
        [w]: w,
        [E]: E,
        [N]: N,
        pointerclick: "pointerclick",
        pointerdblclick: "pointerdblclick",
      },
    },
    Y = (we) =>
      we.indexOf("pointer") >= 0
        ? "pointer"
        : we.indexOf("touch") >= 0
        ? "touch"
        : "mouse",
    ie = (we) => {
      const A = Y(we);
      if (A === "pointer") return s.Konva.pointerEventsEnabled && H.pointer;
      if (A === "touch") return H.touch;
      if (A === "mouse") return H.mouse;
    };
  function Se(we = {}) {
    return (
      (we.clipFunc || we.clipWidth || we.clipHeight) &&
        t.Util.warn(
          "Stage does not support clipping. Please use clip for Layers or Groups."
        ),
      we
    );
  }
  const ve =
    "Pointer position is missing and not registered by the stage. Looks like it is outside of the stage container. You can set it manually from event: stage.setPointersPositions(event);";
  d.stages = [];
  class nt extends a.Container {
    constructor(A) {
      super(Se(A)),
        (this._pointerPositions = []),
        (this._changedPointerPositions = []),
        this._buildDOM(),
        this._bindContentEvents(),
        d.stages.push(this),
        this.on("widthChange.konva heightChange.konva", this._resizeDOM),
        this.on("visibleChange.konva", this._checkVisibility),
        this.on(
          "clipWidthChange.konva clipHeightChange.konva clipFuncChange.konva",
          () => {
            Se(this.attrs);
          }
        ),
        this._checkVisibility();
    }
    _validateAdd(A) {
      const V = A.getType() === "Layer",
        te = A.getType() === "FastLayer";
      V || te || t.Util.throw("You may only add layers to the stage.");
    }
    _checkVisibility() {
      if (!this.content) return;
      const A = this.visible() ? "" : "none";
      this.content.style.display = A;
    }
    setContainer(A) {
      if (typeof A === m) {
        if (A.charAt(0) === ".") {
          var V = A.slice(1);
          A = document.getElementsByClassName(V)[0];
        } else {
          var te;
          A.charAt(0) !== "#" ? (te = A) : (te = A.slice(1)),
            (A = document.getElementById(te));
        }
        if (!A) throw "Can not find container in document with id " + te;
      }
      return (
        this._setAttr("container", A),
        this.content &&
          (this.content.parentElement &&
            this.content.parentElement.removeChild(this.content),
          A.appendChild(this.content)),
        this
      );
    }
    shouldDrawHit() {
      return !0;
    }
    clear() {
      var A = this.children,
        V = A.length,
        te;
      for (te = 0; te < V; te++) A[te].clear();
      return this;
    }
    clone(A) {
      return (
        A || (A = {}),
        (A.container = typeof document < "u" && document.createElement("div")),
        a.Container.prototype.clone.call(this, A)
      );
    }
    destroy() {
      super.destroy();
      var A = this.content;
      A && t.Util._isInDocument(A) && this.container().removeChild(A);
      var V = d.stages.indexOf(this);
      return (
        V > -1 && d.stages.splice(V, 1),
        t.Util.releaseCanvas(
          this.bufferCanvas._canvas,
          this.bufferHitCanvas._canvas
        ),
        this
      );
    }
    getPointerPosition() {
      const A = this._pointerPositions[0] || this._changedPointerPositions[0];
      return A ? { x: A.x, y: A.y } : (t.Util.warn(ve), null);
    }
    _getPointerById(A) {
      return this._pointerPositions.find((V) => V.id === A);
    }
    getPointersPositions() {
      return this._pointerPositions;
    }
    getStage() {
      return this;
    }
    getContent() {
      return this.content;
    }
    _toKonvaCanvas(A) {
      (A = A || {}),
        (A.x = A.x || 0),
        (A.y = A.y || 0),
        (A.width = A.width || this.width()),
        (A.height = A.height || this.height());
      var V = new l.SceneCanvas({
          width: A.width,
          height: A.height,
          pixelRatio: A.pixelRatio || 1,
        }),
        te = V.getContext()._context,
        ke = this.children;
      return (
        (A.x || A.y) && te.translate(-1 * A.x, -1 * A.y),
        ke.forEach(function (he) {
          if (he.isVisible()) {
            var Fe = he._toKonvaCanvas(A);
            te.drawImage(
              Fe._canvas,
              A.x,
              A.y,
              Fe.getWidth() / Fe.getPixelRatio(),
              Fe.getHeight() / Fe.getPixelRatio()
            );
          }
        }),
        V
      );
    }
    getIntersection(A) {
      if (!A) return null;
      var V = this.children,
        te = V.length,
        ke = te - 1,
        he;
      for (he = ke; he >= 0; he--) {
        const Fe = V[he].getIntersection(A);
        if (Fe) return Fe;
      }
      return null;
    }
    _resizeDOM() {
      var A = this.width(),
        V = this.height();
      this.content &&
        ((this.content.style.width = A + x),
        (this.content.style.height = V + x)),
        this.bufferCanvas.setSize(A, V),
        this.bufferHitCanvas.setSize(A, V),
        this.children.forEach((te) => {
          te.setSize({ width: A, height: V }), te.draw();
        });
    }
    add(A, ...V) {
      if (arguments.length > 1) {
        for (var te = 0; te < arguments.length; te++) this.add(arguments[te]);
        return this;
      }
      super.add(A);
      var ke = this.children.length;
      return (
        ke > B &&
          t.Util.warn(
            "The stage has " +
              ke +
              " layers. Recommended maximum number of layers is 3-5. Adding more layers into the stage may drop the performance. Rethink your tree structure, you can use Konva.Group."
          ),
        A.setSize({ width: this.width(), height: this.height() }),
        A.draw(),
        s.Konva.isBrowser && this.content.appendChild(A.canvas._canvas),
        this
      );
    }
    getParent() {
      return null;
    }
    getLayer() {
      return null;
    }
    hasPointerCapture(A) {
      return f.hasPointerCapture(A, this);
    }
    setPointerCapture(A) {
      f.setPointerCapture(A, this);
    }
    releaseCapture(A) {
      f.releaseCapture(A, this);
    }
    getLayers() {
      return this.children;
    }
    _bindContentEvents() {
      s.Konva.isBrowser &&
        Q.forEach(([A, V]) => {
          this.content.addEventListener(
            A,
            (te) => {
              this[V](te);
            },
            { passive: !1 }
          );
        });
    }
    _pointerenter(A) {
      this.setPointersPositions(A);
      const V = ie(A.type);
      V &&
        this._fire(V.pointerenter, {
          evt: A,
          target: this,
          currentTarget: this,
        });
    }
    _pointerover(A) {
      this.setPointersPositions(A);
      const V = ie(A.type);
      V &&
        this._fire(V.pointerover, {
          evt: A,
          target: this,
          currentTarget: this,
        });
    }
    _getTargetShape(A) {
      let V = this[A + "targetShape"];
      return V && !V.getStage() && (V = null), V;
    }
    _pointerleave(A) {
      const V = ie(A.type),
        te = Y(A.type);
      if (V) {
        this.setPointersPositions(A);
        var ke = this._getTargetShape(te),
          he =
            !(s.Konva.isDragging() || s.Konva.isTransforming()) ||
            s.Konva.hitOnDragEnabled;
        ke && he
          ? (ke._fireAndBubble(V.pointerout, { evt: A }),
            ke._fireAndBubble(V.pointerleave, { evt: A }),
            this._fire(V.pointerleave, {
              evt: A,
              target: this,
              currentTarget: this,
            }),
            (this[te + "targetShape"] = null))
          : he &&
            (this._fire(V.pointerleave, {
              evt: A,
              target: this,
              currentTarget: this,
            }),
            this._fire(V.pointerout, {
              evt: A,
              target: this,
              currentTarget: this,
            })),
          (this.pointerPos = null),
          (this._pointerPositions = []);
      }
    }
    _pointerdown(A) {
      const V = ie(A.type),
        te = Y(A.type);
      if (V) {
        this.setPointersPositions(A);
        var ke = !1;
        this._changedPointerPositions.forEach((he) => {
          var Fe = this.getIntersection(he);
          if (
            ((h.DD.justDragged = !1),
            (s.Konva["_" + te + "ListenClick"] = !0),
            !Fe || !Fe.isListening())
          ) {
            this[te + "ClickStartShape"] = void 0;
            return;
          }
          s.Konva.capturePointerEventsEnabled && Fe.setPointerCapture(he.id),
            (this[te + "ClickStartShape"] = Fe),
            Fe._fireAndBubble(V.pointerdown, { evt: A, pointerId: he.id }),
            (ke = !0);
          const Me = A.type.indexOf("touch") >= 0;
          Fe.preventDefault() && A.cancelable && Me && A.preventDefault();
        }),
          ke ||
            this._fire(V.pointerdown, {
              evt: A,
              target: this,
              currentTarget: this,
              pointerId: this._pointerPositions[0].id,
            });
      }
    }
    _pointermove(A) {
      const V = ie(A.type),
        te = Y(A.type);
      if (!V) return;
      s.Konva.isDragging() &&
        h.DD.node.preventDefault() &&
        A.cancelable &&
        A.preventDefault(),
        this.setPointersPositions(A);
      var ke =
        !(s.Konva.isDragging() || s.Konva.isTransforming()) ||
        s.Konva.hitOnDragEnabled;
      if (!ke) return;
      var he = {};
      let Fe = !1;
      var Me = this._getTargetShape(te);
      this._changedPointerPositions.forEach((Bt) => {
        const Ne = f.getCapturedShape(Bt.id) || this.getIntersection(Bt),
          fr = Bt.id,
          Ft = { evt: A, pointerId: fr };
        var gr = Me !== Ne;
        if (
          (gr &&
            Me &&
            (Me._fireAndBubble(V.pointerout, { ...Ft }, Ne),
            Me._fireAndBubble(V.pointerleave, { ...Ft }, Ne)),
          Ne)
        ) {
          if (he[Ne._id]) return;
          he[Ne._id] = !0;
        }
        Ne && Ne.isListening()
          ? ((Fe = !0),
            gr &&
              (Ne._fireAndBubble(V.pointerover, { ...Ft }, Me),
              Ne._fireAndBubble(V.pointerenter, { ...Ft }, Me),
              (this[te + "targetShape"] = Ne)),
            Ne._fireAndBubble(V.pointermove, { ...Ft }))
          : Me &&
            (this._fire(V.pointerover, {
              evt: A,
              target: this,
              currentTarget: this,
              pointerId: fr,
            }),
            (this[te + "targetShape"] = null));
      }),
        Fe ||
          this._fire(V.pointermove, {
            evt: A,
            target: this,
            currentTarget: this,
            pointerId: this._changedPointerPositions[0].id,
          });
    }
    _pointerup(A) {
      const V = ie(A.type),
        te = Y(A.type);
      if (!V) return;
      this.setPointersPositions(A);
      const ke = this[te + "ClickStartShape"],
        he = this[te + "ClickEndShape"];
      var Fe = {};
      let Me = !1;
      this._changedPointerPositions.forEach((Bt) => {
        const Ne = f.getCapturedShape(Bt.id) || this.getIntersection(Bt);
        if (Ne) {
          if ((Ne.releaseCapture(Bt.id), Fe[Ne._id])) return;
          Fe[Ne._id] = !0;
        }
        const fr = Bt.id,
          Ft = { evt: A, pointerId: fr };
        let gr = !1;
        s.Konva["_" + te + "InDblClickWindow"]
          ? ((gr = !0), clearTimeout(this[te + "DblTimeout"]))
          : h.DD.justDragged ||
            ((s.Konva["_" + te + "InDblClickWindow"] = !0),
            clearTimeout(this[te + "DblTimeout"])),
          (this[te + "DblTimeout"] = setTimeout(function () {
            s.Konva["_" + te + "InDblClickWindow"] = !1;
          }, s.Konva.dblClickWindow)),
          Ne && Ne.isListening()
            ? ((Me = !0),
              (this[te + "ClickEndShape"] = Ne),
              Ne._fireAndBubble(V.pointerup, { ...Ft }),
              s.Konva["_" + te + "ListenClick"] &&
                ke &&
                ke === Ne &&
                (Ne._fireAndBubble(V.pointerclick, { ...Ft }),
                gr &&
                  he &&
                  he === Ne &&
                  Ne._fireAndBubble(V.pointerdblclick, { ...Ft })))
            : ((this[te + "ClickEndShape"] = null),
              s.Konva["_" + te + "ListenClick"] &&
                this._fire(V.pointerclick, {
                  evt: A,
                  target: this,
                  currentTarget: this,
                  pointerId: fr,
                }),
              gr &&
                this._fire(V.pointerdblclick, {
                  evt: A,
                  target: this,
                  currentTarget: this,
                  pointerId: fr,
                }));
      }),
        Me ||
          this._fire(V.pointerup, {
            evt: A,
            target: this,
            currentTarget: this,
            pointerId: this._changedPointerPositions[0].id,
          }),
        (s.Konva["_" + te + "ListenClick"] = !1),
        A.cancelable && te !== "touch" && A.preventDefault();
    }
    _contextmenu(A) {
      this.setPointersPositions(A);
      var V = this.getIntersection(this.getPointerPosition());
      V && V.isListening()
        ? V._fireAndBubble(K, { evt: A })
        : this._fire(K, { evt: A, target: this, currentTarget: this });
    }
    _wheel(A) {
      this.setPointersPositions(A);
      var V = this.getIntersection(this.getPointerPosition());
      V && V.isListening()
        ? V._fireAndBubble(ge, { evt: A })
        : this._fire(ge, { evt: A, target: this, currentTarget: this });
    }
    _pointercancel(A) {
      this.setPointersPositions(A);
      const V =
        f.getCapturedShape(A.pointerId) ||
        this.getIntersection(this.getPointerPosition());
      V && V._fireAndBubble(E, f.createEvent(A)), f.releaseCapture(A.pointerId);
    }
    _lostpointercapture(A) {
      f.releaseCapture(A.pointerId);
    }
    setPointersPositions(A) {
      var V = this._getContentPosition(),
        te = null,
        ke = null;
      (A = A || window.event),
        A.touches !== void 0
          ? ((this._pointerPositions = []),
            (this._changedPointerPositions = []),
            Array.prototype.forEach.call(A.touches, (he) => {
              this._pointerPositions.push({
                id: he.identifier,
                x: (he.clientX - V.left) / V.scaleX,
                y: (he.clientY - V.top) / V.scaleY,
              });
            }),
            Array.prototype.forEach.call(
              A.changedTouches || A.touches,
              (he) => {
                this._changedPointerPositions.push({
                  id: he.identifier,
                  x: (he.clientX - V.left) / V.scaleX,
                  y: (he.clientY - V.top) / V.scaleY,
                });
              }
            ))
          : ((te = (A.clientX - V.left) / V.scaleX),
            (ke = (A.clientY - V.top) / V.scaleY),
            (this.pointerPos = { x: te, y: ke }),
            (this._pointerPositions = [
              { x: te, y: ke, id: t.Util._getFirstPointerId(A) },
            ]),
            (this._changedPointerPositions = [
              { x: te, y: ke, id: t.Util._getFirstPointerId(A) },
            ]));
    }
    _setPointerPosition(A) {
      t.Util.warn(
        'Method _setPointerPosition is deprecated. Use "stage.setPointersPositions(event)" instead.'
      ),
        this.setPointersPositions(A);
    }
    _getContentPosition() {
      if (!this.content || !this.content.getBoundingClientRect)
        return { top: 0, left: 0, scaleX: 1, scaleY: 1 };
      var A = this.content.getBoundingClientRect();
      return {
        top: A.top,
        left: A.left,
        scaleX: A.width / this.content.clientWidth || 1,
        scaleY: A.height / this.content.clientHeight || 1,
      };
    }
    _buildDOM() {
      if (
        ((this.bufferCanvas = new l.SceneCanvas({
          width: this.width(),
          height: this.height(),
        })),
        (this.bufferHitCanvas = new l.HitCanvas({
          pixelRatio: 1,
          width: this.width(),
          height: this.height(),
        })),
        !!s.Konva.isBrowser)
      ) {
        var A = this.container();
        if (!A) throw "Stage has no container. A container is required.";
        (A.innerHTML = ""),
          (this.content = document.createElement("div")),
          (this.content.style.position = "relative"),
          (this.content.style.userSelect = "none"),
          (this.content.className = "konvajs-content"),
          this.content.setAttribute("role", "presentation"),
          A.appendChild(this.content),
          this._resizeDOM();
      }
    }
    cache() {
      return (
        t.Util.warn(
          "Cache function is not allowed for stage. You may use cache only for layers, groups and shapes."
        ),
        this
      );
    }
    clearCache() {
      return this;
    }
    batchDraw() {
      return (
        this.getChildren().forEach(function (A) {
          A.batchDraw();
        }),
        this
      );
    }
  }
  (d.Stage = nt),
    (nt.prototype.nodeType = p),
    (0, c._registerNode)(nt),
    n.Factory.addGetterSetter(nt, "container"),
    s.Konva.isBrowser &&
      document.addEventListener("visibilitychange", () => {
        d.stages.forEach((we) => {
          we.batchDraw();
        });
      });
})($h);
var ai = {},
  $e = {};
(function (d) {
  Object.defineProperty(d, "__esModule", { value: !0 }),
    (d.Shape = d.shapes = void 0);
  const t = ce,
    n = Be,
    a = fe,
    s = Ge,
    l = re,
    h = ce,
    c = wt;
  var f = "hasShadow",
    p = "shadowRGBA",
    m = "patternImage",
    x = "linearGradient",
    C = "radialGradient";
  let _;
  function y() {
    return _ || ((_ = n.Util.createCanvasElement().getContext("2d")), _);
  }
  d.shapes = {};
  function P(z) {
    const L = this.attrs.fillRule;
    L ? z.fill(L) : z.fill();
  }
  function k(z) {
    z.stroke();
  }
  function R(z) {
    z.fill();
  }
  function F(z) {
    z.stroke();
  }
  function v() {
    this._clearCache(f);
  }
  function w() {
    this._clearCache(p);
  }
  function E() {
    this._clearCache(m);
  }
  function N() {
    this._clearCache(x);
  }
  function G() {
    this._clearCache(C);
  }
  class T extends s.Node {
    constructor(L) {
      super(L);
      let O;
      for (; (O = n.Util.getRandomColor()), !(O && !(O in d.shapes)); );
      (this.colorKey = O), (d.shapes[O] = this);
    }
    getContext() {
      return (
        n.Util.warn(
          "shape.getContext() method is deprecated. Please do not use it."
        ),
        this.getLayer().getContext()
      );
    }
    getCanvas() {
      return (
        n.Util.warn(
          "shape.getCanvas() method is deprecated. Please do not use it."
        ),
        this.getLayer().getCanvas()
      );
    }
    getSceneFunc() {
      return this.attrs.sceneFunc || this._sceneFunc;
    }
    getHitFunc() {
      return this.attrs.hitFunc || this._hitFunc;
    }
    hasShadow() {
      return this._getCache(f, this._hasShadow);
    }
    _hasShadow() {
      return (
        this.shadowEnabled() &&
        this.shadowOpacity() !== 0 &&
        !!(
          this.shadowColor() ||
          this.shadowBlur() ||
          this.shadowOffsetX() ||
          this.shadowOffsetY()
        )
      );
    }
    _getFillPattern() {
      return this._getCache(m, this.__getFillPattern);
    }
    __getFillPattern() {
      if (this.fillPatternImage()) {
        var L = y();
        const O = L.createPattern(
          this.fillPatternImage(),
          this.fillPatternRepeat() || "repeat"
        );
        if (O && O.setTransform) {
          const K = new n.Transform();
          K.translate(this.fillPatternX(), this.fillPatternY()),
            K.rotate(t.Konva.getAngle(this.fillPatternRotation())),
            K.scale(this.fillPatternScaleX(), this.fillPatternScaleY()),
            K.translate(
              -1 * this.fillPatternOffsetX(),
              -1 * this.fillPatternOffsetY()
            );
          const W = K.getMatrix(),
            ne =
              typeof DOMMatrix > "u"
                ? { a: W[0], b: W[1], c: W[2], d: W[3], e: W[4], f: W[5] }
                : new DOMMatrix(W);
          O.setTransform(ne);
        }
        return O;
      }
    }
    _getLinearGradient() {
      return this._getCache(x, this.__getLinearGradient);
    }
    __getLinearGradient() {
      var L = this.fillLinearGradientColorStops();
      if (L) {
        for (
          var O = y(),
            K = this.fillLinearGradientStartPoint(),
            W = this.fillLinearGradientEndPoint(),
            ne = O.createLinearGradient(K.x, K.y, W.x, W.y),
            X = 0;
          X < L.length;
          X += 2
        )
          ne.addColorStop(L[X], L[X + 1]);
        return ne;
      }
    }
    _getRadialGradient() {
      return this._getCache(C, this.__getRadialGradient);
    }
    __getRadialGradient() {
      var L = this.fillRadialGradientColorStops();
      if (L) {
        for (
          var O = y(),
            K = this.fillRadialGradientStartPoint(),
            W = this.fillRadialGradientEndPoint(),
            ne = O.createRadialGradient(
              K.x,
              K.y,
              this.fillRadialGradientStartRadius(),
              W.x,
              W.y,
              this.fillRadialGradientEndRadius()
            ),
            X = 0;
          X < L.length;
          X += 2
        )
          ne.addColorStop(L[X], L[X + 1]);
        return ne;
      }
    }
    getShadowRGBA() {
      return this._getCache(p, this._getShadowRGBA);
    }
    _getShadowRGBA() {
      if (this.hasShadow()) {
        var L = n.Util.colorToRGBA(this.shadowColor());
        if (L)
          return (
            "rgba(" +
            L.r +
            "," +
            L.g +
            "," +
            L.b +
            "," +
            L.a * (this.shadowOpacity() || 1) +
            ")"
          );
      }
    }
    hasFill() {
      return this._calculate(
        "hasFill",
        [
          "fillEnabled",
          "fill",
          "fillPatternImage",
          "fillLinearGradientColorStops",
          "fillRadialGradientColorStops",
        ],
        () =>
          this.fillEnabled() &&
          !!(
            this.fill() ||
            this.fillPatternImage() ||
            this.fillLinearGradientColorStops() ||
            this.fillRadialGradientColorStops()
          )
      );
    }
    hasStroke() {
      return this._calculate(
        "hasStroke",
        [
          "strokeEnabled",
          "strokeWidth",
          "stroke",
          "strokeLinearGradientColorStops",
        ],
        () =>
          this.strokeEnabled() &&
          this.strokeWidth() &&
          !!(this.stroke() || this.strokeLinearGradientColorStops())
      );
    }
    hasHitStroke() {
      const L = this.hitStrokeWidth();
      return L === "auto" ? this.hasStroke() : this.strokeEnabled() && !!L;
    }
    intersects(L) {
      var O = this.getStage();
      if (!O) return !1;
      const K = O.bufferHitCanvas;
      return (
        K.getContext().clear(),
        this.drawHit(K, void 0, !0),
        K.context.getImageData(Math.round(L.x), Math.round(L.y), 1, 1).data[3] >
          0
      );
    }
    destroy() {
      return (
        s.Node.prototype.destroy.call(this),
        delete d.shapes[this.colorKey],
        delete this.colorKey,
        this
      );
    }
    _useBufferCanvas(L) {
      var O;
      if (
        !((O = this.attrs.perfectDrawEnabled) !== null && O !== void 0 ? O : !0)
      )
        return !1;
      const W = L || this.hasFill(),
        ne = this.hasStroke(),
        X = this.getAbsoluteOpacity() !== 1;
      if (W && ne && X) return !0;
      const se = this.hasShadow(),
        ge = this.shadowForStrokeEnabled();
      return !!(W && ne && se && ge);
    }
    setStrokeHitEnabled(L) {
      n.Util.warn(
        "strokeHitEnabled property is deprecated. Please use hitStrokeWidth instead."
      ),
        L ? this.hitStrokeWidth("auto") : this.hitStrokeWidth(0);
    }
    getStrokeHitEnabled() {
      return this.hitStrokeWidth() !== 0;
    }
    getSelfRect() {
      var L = this.size();
      return {
        x: this._centroid ? -L.width / 2 : 0,
        y: this._centroid ? -L.height / 2 : 0,
        width: L.width,
        height: L.height,
      };
    }
    getClientRect(L = {}) {
      const O = L.skipTransform,
        K = L.relativeTo,
        W = this.getSelfRect(),
        X = (!L.skipStroke && this.hasStroke() && this.strokeWidth()) || 0,
        se = W.width + X,
        ge = W.height + X,
        B = !L.skipShadow && this.hasShadow(),
        Q = B ? this.shadowOffsetX() : 0,
        H = B ? this.shadowOffsetY() : 0,
        Y = se + Math.abs(Q),
        ie = ge + Math.abs(H),
        Se = (B && this.shadowBlur()) || 0,
        ve = Y + Se * 2,
        nt = ie + Se * 2,
        we = {
          width: ve,
          height: nt,
          x: -(X / 2 + Se) + Math.min(Q, 0) + W.x,
          y: -(X / 2 + Se) + Math.min(H, 0) + W.y,
        };
      return O ? we : this._transformedRect(we, K);
    }
    drawScene(L, O, K) {
      var W = this.getLayer(),
        ne = L || W.getCanvas(),
        X = ne.getContext(),
        se = this._getCanvasCache(),
        ge = this.getSceneFunc(),
        B = this.hasShadow(),
        Q,
        H,
        Y = ne.isCache,
        ie = O === this;
      if (!this.isVisible() && !ie) return this;
      if (se) {
        X.save();
        var Se = this.getAbsoluteTransform(O).getMatrix();
        return (
          X.transform(Se[0], Se[1], Se[2], Se[3], Se[4], Se[5]),
          this._drawCachedSceneCanvas(X),
          X.restore(),
          this
        );
      }
      if (!ge) return this;
      if ((X.save(), this._useBufferCanvas() && !Y)) {
        Q = this.getStage();
        const we = K || Q.bufferCanvas;
        (H = we.getContext()), H.clear(), H.save(), H._applyLineJoin(this);
        var ve = this.getAbsoluteTransform(O).getMatrix();
        H.transform(ve[0], ve[1], ve[2], ve[3], ve[4], ve[5]),
          ge.call(this, H, this),
          H.restore();
        var nt = we.pixelRatio;
        B && X._applyShadow(this),
          X._applyOpacity(this),
          X._applyGlobalCompositeOperation(this),
          X.drawImage(we._canvas, 0, 0, we.width / nt, we.height / nt);
      } else {
        if ((X._applyLineJoin(this), !ie)) {
          var ve = this.getAbsoluteTransform(O).getMatrix();
          X.transform(ve[0], ve[1], ve[2], ve[3], ve[4], ve[5]),
            X._applyOpacity(this),
            X._applyGlobalCompositeOperation(this);
        }
        B && X._applyShadow(this), ge.call(this, X, this);
      }
      return X.restore(), this;
    }
    drawHit(L, O, K = !1) {
      if (!this.shouldDrawHit(O, K)) return this;
      var W = this.getLayer(),
        ne = L || W.hitCanvas,
        X = ne && ne.getContext(),
        se = this.hitFunc() || this.sceneFunc(),
        ge = this._getCanvasCache(),
        B = ge && ge.hit;
      if (
        (this.colorKey ||
          n.Util.warn(
            "Looks like your canvas has a destroyed shape in it. Do not reuse shape after you destroyed it. If you want to reuse shape you should call remove() instead of destroy()"
          ),
        B)
      ) {
        X.save();
        var Q = this.getAbsoluteTransform(O).getMatrix();
        return (
          X.transform(Q[0], Q[1], Q[2], Q[3], Q[4], Q[5]),
          this._drawCachedHitCanvas(X),
          X.restore(),
          this
        );
      }
      if (!se) return this;
      if ((X.save(), X._applyLineJoin(this), !(this === O))) {
        var Y = this.getAbsoluteTransform(O).getMatrix();
        X.transform(Y[0], Y[1], Y[2], Y[3], Y[4], Y[5]);
      }
      return se.call(this, X, this), X.restore(), this;
    }
    drawHitFromCache(L = 0) {
      var O = this._getCanvasCache(),
        K = this._getCachedSceneCanvas(),
        W = O.hit,
        ne = W.getContext(),
        X = W.getWidth(),
        se = W.getHeight(),
        ge,
        B,
        Q,
        H,
        Y,
        ie;
      ne.clear(), ne.drawImage(K._canvas, 0, 0, X, se);
      try {
        for (
          ge = ne.getImageData(0, 0, X, se),
            B = ge.data,
            Q = B.length,
            H = n.Util._hexToRgb(this.colorKey),
            Y = 0;
          Y < Q;
          Y += 4
        )
          (ie = B[Y + 3]),
            ie > L
              ? ((B[Y] = H.r),
                (B[Y + 1] = H.g),
                (B[Y + 2] = H.b),
                (B[Y + 3] = 255))
              : (B[Y + 3] = 0);
        ne.putImageData(ge, 0, 0);
      } catch (Se) {
        n.Util.error(
          "Unable to draw hit graph from cached scene canvas. " + Se.message
        );
      }
      return this;
    }
    hasPointerCapture(L) {
      return c.hasPointerCapture(L, this);
    }
    setPointerCapture(L) {
      c.setPointerCapture(L, this);
    }
    releaseCapture(L) {
      c.releaseCapture(L, this);
    }
  }
  (d.Shape = T),
    (T.prototype._fillFunc = P),
    (T.prototype._strokeFunc = k),
    (T.prototype._fillFuncHit = R),
    (T.prototype._strokeFuncHit = F),
    (T.prototype._centroid = !1),
    (T.prototype.nodeType = "Shape"),
    (0, h._registerNode)(T),
    (T.prototype.eventListeners = {}),
    T.prototype.on.call(
      T.prototype,
      "shadowColorChange.konva shadowBlurChange.konva shadowOffsetChange.konva shadowOpacityChange.konva shadowEnabledChange.konva",
      v
    ),
    T.prototype.on.call(
      T.prototype,
      "shadowColorChange.konva shadowOpacityChange.konva shadowEnabledChange.konva",
      w
    ),
    T.prototype.on.call(
      T.prototype,
      "fillPriorityChange.konva fillPatternImageChange.konva fillPatternRepeatChange.konva fillPatternScaleXChange.konva fillPatternScaleYChange.konva fillPatternOffsetXChange.konva fillPatternOffsetYChange.konva fillPatternXChange.konva fillPatternYChange.konva fillPatternRotationChange.konva",
      E
    ),
    T.prototype.on.call(
      T.prototype,
      "fillPriorityChange.konva fillLinearGradientColorStopsChange.konva fillLinearGradientStartPointXChange.konva fillLinearGradientStartPointYChange.konva fillLinearGradientEndPointXChange.konva fillLinearGradientEndPointYChange.konva",
      N
    ),
    T.prototype.on.call(
      T.prototype,
      "fillPriorityChange.konva fillRadialGradientColorStopsChange.konva fillRadialGradientStartPointXChange.konva fillRadialGradientStartPointYChange.konva fillRadialGradientEndPointXChange.konva fillRadialGradientEndPointYChange.konva fillRadialGradientStartRadiusChange.konva fillRadialGradientEndRadiusChange.konva",
      G
    ),
    a.Factory.addGetterSetter(
      T,
      "stroke",
      void 0,
      (0, l.getStringOrGradientValidator)()
    ),
    a.Factory.addGetterSetter(T, "strokeWidth", 2, (0, l.getNumberValidator)()),
    a.Factory.addGetterSetter(T, "fillAfterStrokeEnabled", !1),
    a.Factory.addGetterSetter(
      T,
      "hitStrokeWidth",
      "auto",
      (0, l.getNumberOrAutoValidator)()
    ),
    a.Factory.addGetterSetter(
      T,
      "strokeHitEnabled",
      !0,
      (0, l.getBooleanValidator)()
    ),
    a.Factory.addGetterSetter(
      T,
      "perfectDrawEnabled",
      !0,
      (0, l.getBooleanValidator)()
    ),
    a.Factory.addGetterSetter(
      T,
      "shadowForStrokeEnabled",
      !0,
      (0, l.getBooleanValidator)()
    ),
    a.Factory.addGetterSetter(T, "lineJoin"),
    a.Factory.addGetterSetter(T, "lineCap"),
    a.Factory.addGetterSetter(T, "sceneFunc"),
    a.Factory.addGetterSetter(T, "hitFunc"),
    a.Factory.addGetterSetter(T, "dash"),
    a.Factory.addGetterSetter(T, "dashOffset", 0, (0, l.getNumberValidator)()),
    a.Factory.addGetterSetter(
      T,
      "shadowColor",
      void 0,
      (0, l.getStringValidator)()
    ),
    a.Factory.addGetterSetter(T, "shadowBlur", 0, (0, l.getNumberValidator)()),
    a.Factory.addGetterSetter(
      T,
      "shadowOpacity",
      1,
      (0, l.getNumberValidator)()
    ),
    a.Factory.addComponentsGetterSetter(T, "shadowOffset", ["x", "y"]),
    a.Factory.addGetterSetter(
      T,
      "shadowOffsetX",
      0,
      (0, l.getNumberValidator)()
    ),
    a.Factory.addGetterSetter(
      T,
      "shadowOffsetY",
      0,
      (0, l.getNumberValidator)()
    ),
    a.Factory.addGetterSetter(T, "fillPatternImage"),
    a.Factory.addGetterSetter(
      T,
      "fill",
      void 0,
      (0, l.getStringOrGradientValidator)()
    ),
    a.Factory.addGetterSetter(
      T,
      "fillPatternX",
      0,
      (0, l.getNumberValidator)()
    ),
    a.Factory.addGetterSetter(
      T,
      "fillPatternY",
      0,
      (0, l.getNumberValidator)()
    ),
    a.Factory.addGetterSetter(T, "fillLinearGradientColorStops"),
    a.Factory.addGetterSetter(T, "strokeLinearGradientColorStops"),
    a.Factory.addGetterSetter(T, "fillRadialGradientStartRadius", 0),
    a.Factory.addGetterSetter(T, "fillRadialGradientEndRadius", 0),
    a.Factory.addGetterSetter(T, "fillRadialGradientColorStops"),
    a.Factory.addGetterSetter(T, "fillPatternRepeat", "repeat"),
    a.Factory.addGetterSetter(T, "fillEnabled", !0),
    a.Factory.addGetterSetter(T, "strokeEnabled", !0),
    a.Factory.addGetterSetter(T, "shadowEnabled", !0),
    a.Factory.addGetterSetter(T, "dashEnabled", !0),
    a.Factory.addGetterSetter(T, "strokeScaleEnabled", !0),
    a.Factory.addGetterSetter(T, "fillPriority", "color"),
    a.Factory.addComponentsGetterSetter(T, "fillPatternOffset", ["x", "y"]),
    a.Factory.addGetterSetter(
      T,
      "fillPatternOffsetX",
      0,
      (0, l.getNumberValidator)()
    ),
    a.Factory.addGetterSetter(
      T,
      "fillPatternOffsetY",
      0,
      (0, l.getNumberValidator)()
    ),
    a.Factory.addComponentsGetterSetter(T, "fillPatternScale", ["x", "y"]),
    a.Factory.addGetterSetter(
      T,
      "fillPatternScaleX",
      1,
      (0, l.getNumberValidator)()
    ),
    a.Factory.addGetterSetter(
      T,
      "fillPatternScaleY",
      1,
      (0, l.getNumberValidator)()
    ),
    a.Factory.addComponentsGetterSetter(T, "fillLinearGradientStartPoint", [
      "x",
      "y",
    ]),
    a.Factory.addComponentsGetterSetter(T, "strokeLinearGradientStartPoint", [
      "x",
      "y",
    ]),
    a.Factory.addGetterSetter(T, "fillLinearGradientStartPointX", 0),
    a.Factory.addGetterSetter(T, "strokeLinearGradientStartPointX", 0),
    a.Factory.addGetterSetter(T, "fillLinearGradientStartPointY", 0),
    a.Factory.addGetterSetter(T, "strokeLinearGradientStartPointY", 0),
    a.Factory.addComponentsGetterSetter(T, "fillLinearGradientEndPoint", [
      "x",
      "y",
    ]),
    a.Factory.addComponentsGetterSetter(T, "strokeLinearGradientEndPoint", [
      "x",
      "y",
    ]),
    a.Factory.addGetterSetter(T, "fillLinearGradientEndPointX", 0),
    a.Factory.addGetterSetter(T, "strokeLinearGradientEndPointX", 0),
    a.Factory.addGetterSetter(T, "fillLinearGradientEndPointY", 0),
    a.Factory.addGetterSetter(T, "strokeLinearGradientEndPointY", 0),
    a.Factory.addComponentsGetterSetter(T, "fillRadialGradientStartPoint", [
      "x",
      "y",
    ]),
    a.Factory.addGetterSetter(T, "fillRadialGradientStartPointX", 0),
    a.Factory.addGetterSetter(T, "fillRadialGradientStartPointY", 0),
    a.Factory.addComponentsGetterSetter(T, "fillRadialGradientEndPoint", [
      "x",
      "y",
    ]),
    a.Factory.addGetterSetter(T, "fillRadialGradientEndPointX", 0),
    a.Factory.addGetterSetter(T, "fillRadialGradientEndPointY", 0),
    a.Factory.addGetterSetter(T, "fillPatternRotation", 0),
    a.Factory.addGetterSetter(
      T,
      "fillRule",
      void 0,
      (0, l.getStringValidator)()
    ),
    a.Factory.backCompat(T, {
      dashArray: "dash",
      getDashArray: "getDash",
      setDashArray: "getDash",
      drawFunc: "sceneFunc",
      getDrawFunc: "getSceneFunc",
      setDrawFunc: "setSceneFunc",
      drawHitFunc: "hitFunc",
      getDrawHitFunc: "getHitFunc",
      setDrawHitFunc: "setHitFunc",
    });
})($e);
Object.defineProperty(ai, "__esModule", { value: !0 });
ai.Layer = void 0;
const sr = Be,
  xo = Yr,
  mn = Ge,
  Qo = fe,
  oh = Ut,
  c1 = re,
  f1 = $e,
  g1 = ce;
var p1 = "#",
  v1 = "beforeDraw",
  m1 = "draw",
  e0 = [
    { x: 0, y: 0 },
    { x: -1, y: -1 },
    { x: 1, y: -1 },
    { x: 1, y: 1 },
    { x: -1, y: 1 },
  ],
  y1 = e0.length;
let Pn = class extends xo.Container {
  constructor(t) {
    super(t),
      (this.canvas = new oh.SceneCanvas()),
      (this.hitCanvas = new oh.HitCanvas({ pixelRatio: 1 })),
      (this._waitingForDraw = !1),
      this.on("visibleChange.konva", this._checkVisibility),
      this._checkVisibility(),
      this.on("imageSmoothingEnabledChange.konva", this._setSmoothEnabled),
      this._setSmoothEnabled();
  }
  createPNGStream() {
    return this.canvas._canvas.createPNGStream();
  }
  getCanvas() {
    return this.canvas;
  }
  getNativeCanvasElement() {
    return this.canvas._canvas;
  }
  getHitCanvas() {
    return this.hitCanvas;
  }
  getContext() {
    return this.getCanvas().getContext();
  }
  clear(t) {
    return (
      this.getContext().clear(t),
      this.getHitCanvas().getContext().clear(t),
      this
    );
  }
  setZIndex(t) {
    super.setZIndex(t);
    var n = this.getStage();
    return (
      n &&
        n.content &&
        (n.content.removeChild(this.getNativeCanvasElement()),
        t < n.children.length - 1
          ? n.content.insertBefore(
              this.getNativeCanvasElement(),
              n.children[t + 1].getCanvas()._canvas
            )
          : n.content.appendChild(this.getNativeCanvasElement())),
      this
    );
  }
  moveToTop() {
    mn.Node.prototype.moveToTop.call(this);
    var t = this.getStage();
    return (
      t &&
        t.content &&
        (t.content.removeChild(this.getNativeCanvasElement()),
        t.content.appendChild(this.getNativeCanvasElement())),
      !0
    );
  }
  moveUp() {
    var t = mn.Node.prototype.moveUp.call(this);
    if (!t) return !1;
    var n = this.getStage();
    return !n || !n.content
      ? !1
      : (n.content.removeChild(this.getNativeCanvasElement()),
        this.index < n.children.length - 1
          ? n.content.insertBefore(
              this.getNativeCanvasElement(),
              n.children[this.index + 1].getCanvas()._canvas
            )
          : n.content.appendChild(this.getNativeCanvasElement()),
        !0);
  }
  moveDown() {
    if (mn.Node.prototype.moveDown.call(this)) {
      var t = this.getStage();
      if (t) {
        var n = t.children;
        t.content &&
          (t.content.removeChild(this.getNativeCanvasElement()),
          t.content.insertBefore(
            this.getNativeCanvasElement(),
            n[this.index + 1].getCanvas()._canvas
          ));
      }
      return !0;
    }
    return !1;
  }
  moveToBottom() {
    if (mn.Node.prototype.moveToBottom.call(this)) {
      var t = this.getStage();
      if (t) {
        var n = t.children;
        t.content &&
          (t.content.removeChild(this.getNativeCanvasElement()),
          t.content.insertBefore(
            this.getNativeCanvasElement(),
            n[1].getCanvas()._canvas
          ));
      }
      return !0;
    }
    return !1;
  }
  getLayer() {
    return this;
  }
  remove() {
    var t = this.getNativeCanvasElement();
    return (
      mn.Node.prototype.remove.call(this),
      t &&
        t.parentNode &&
        sr.Util._isInDocument(t) &&
        t.parentNode.removeChild(t),
      this
    );
  }
  getStage() {
    return this.parent;
  }
  setSize({ width: t, height: n }) {
    return (
      this.canvas.setSize(t, n),
      this.hitCanvas.setSize(t, n),
      this._setSmoothEnabled(),
      this
    );
  }
  _validateAdd(t) {
    var n = t.getType();
    n !== "Group" &&
      n !== "Shape" &&
      sr.Util.throw("You may only add groups and shapes to a layer.");
  }
  _toKonvaCanvas(t) {
    return (
      (t = t || {}),
      (t.width = t.width || this.getWidth()),
      (t.height = t.height || this.getHeight()),
      (t.x = t.x !== void 0 ? t.x : this.x()),
      (t.y = t.y !== void 0 ? t.y : this.y()),
      mn.Node.prototype._toKonvaCanvas.call(this, t)
    );
  }
  _checkVisibility() {
    this.visible()
      ? (this.canvas._canvas.style.display = "block")
      : (this.canvas._canvas.style.display = "none");
  }
  _setSmoothEnabled() {
    this.getContext()._context.imageSmoothingEnabled =
      this.imageSmoothingEnabled();
  }
  getWidth() {
    if (this.parent) return this.parent.width();
  }
  setWidth() {
    sr.Util.warn(
      'Can not change width of layer. Use "stage.width(value)" function instead.'
    );
  }
  getHeight() {
    if (this.parent) return this.parent.height();
  }
  setHeight() {
    sr.Util.warn(
      'Can not change height of layer. Use "stage.height(value)" function instead.'
    );
  }
  batchDraw() {
    return (
      this._waitingForDraw ||
        ((this._waitingForDraw = !0),
        sr.Util.requestAnimFrame(() => {
          this.draw(), (this._waitingForDraw = !1);
        })),
      this
    );
  }
  getIntersection(t) {
    if (!this.isListening() || !this.isVisible()) return null;
    for (var n = 1, a = !1; ; ) {
      for (let s = 0; s < y1; s++) {
        const l = e0[s],
          h = this._getIntersection({ x: t.x + l.x * n, y: t.y + l.y * n }),
          c = h.shape;
        if (c) return c;
        if (((a = !!h.antialiased), !h.antialiased)) break;
      }
      if (a) n += 1;
      else return null;
    }
  }
  _getIntersection(t) {
    const n = this.hitCanvas.pixelRatio,
      a = this.hitCanvas.context.getImageData(
        Math.round(t.x * n),
        Math.round(t.y * n),
        1,
        1
      ).data,
      s = a[3];
    if (s === 255) {
      const l = sr.Util._rgbToHex(a[0], a[1], a[2]),
        h = f1.shapes[p1 + l];
      return h ? { shape: h } : { antialiased: !0 };
    } else if (s > 0) return { antialiased: !0 };
    return {};
  }
  drawScene(t, n) {
    var a = this.getLayer(),
      s = t || (a && a.getCanvas());
    return (
      this._fire(v1, { node: this }),
      this.clearBeforeDraw() && s.getContext().clear(),
      xo.Container.prototype.drawScene.call(this, s, n),
      this._fire(m1, { node: this }),
      this
    );
  }
  drawHit(t, n) {
    var a = this.getLayer(),
      s = t || (a && a.hitCanvas);
    return (
      a && a.clearBeforeDraw() && a.getHitCanvas().getContext().clear(),
      xo.Container.prototype.drawHit.call(this, s, n),
      this
    );
  }
  enableHitGraph() {
    return this.hitGraphEnabled(!0), this;
  }
  disableHitGraph() {
    return this.hitGraphEnabled(!1), this;
  }
  setHitGraphEnabled(t) {
    sr.Util.warn(
      "hitGraphEnabled method is deprecated. Please use layer.listening() instead."
    ),
      this.listening(t);
  }
  getHitGraphEnabled(t) {
    return (
      sr.Util.warn(
        "hitGraphEnabled method is deprecated. Please use layer.listening() instead."
      ),
      this.listening()
    );
  }
  toggleHitCanvas() {
    if (!(!this.parent || !this.parent.content)) {
      var t = this.parent,
        n = !!this.hitCanvas._canvas.parentNode;
      n
        ? t.content.removeChild(this.hitCanvas._canvas)
        : t.content.appendChild(this.hitCanvas._canvas);
    }
  }
  destroy() {
    return (
      sr.Util.releaseCanvas(
        this.getNativeCanvasElement(),
        this.getHitCanvas()._canvas
      ),
      super.destroy()
    );
  }
};
ai.Layer = Pn;
Pn.prototype.nodeType = "Layer";
(0, g1._registerNode)(Pn);
Qo.Factory.addGetterSetter(Pn, "imageSmoothingEnabled", !0);
Qo.Factory.addGetterSetter(Pn, "clearBeforeDraw", !0);
Qo.Factory.addGetterSetter(
  Pn,
  "hitGraphEnabled",
  !0,
  (0, c1.getBooleanValidator)()
);
var ya = {};
Object.defineProperty(ya, "__esModule", { value: !0 });
ya.FastLayer = void 0;
const _1 = Be,
  S1 = ai,
  w1 = ce;
class $o extends S1.Layer {
  constructor(t) {
    super(t),
      this.listening(!1),
      _1.Util.warn(
        'Konva.Fast layer is deprecated. Please use "new Konva.Layer({ listening: false })" instead.'
      );
  }
}
ya.FastLayer = $o;
$o.prototype.nodeType = "FastLayer";
(0, w1._registerNode)($o);
var En = {};
Object.defineProperty(En, "__esModule", { value: !0 });
En.Group = void 0;
const C1 = Be,
  x1 = Yr,
  P1 = ce;
let Jo = class extends x1.Container {
  _validateAdd(t) {
    var n = t.getType();
    n !== "Group" &&
      n !== "Shape" &&
      C1.Util.throw("You may only add groups and shapes to groups.");
  }
};
En.Group = Jo;
Jo.prototype.nodeType = "Group";
(0, P1._registerNode)(Jo);
var kn = {};
Object.defineProperty(kn, "__esModule", { value: !0 });
kn.Animation = void 0;
const Po = ce,
  lh = Be,
  Eo = (function () {
    return Po.glob.performance && Po.glob.performance.now
      ? function () {
          return Po.glob.performance.now();
        }
      : function () {
          return new Date().getTime();
        };
  })();
class Qt {
  constructor(t, n) {
    (this.id = Qt.animIdCounter++),
      (this.frame = { time: 0, timeDiff: 0, lastTime: Eo(), frameRate: 0 }),
      (this.func = t),
      this.setLayers(n);
  }
  setLayers(t) {
    let n = [];
    return t && (n = Array.isArray(t) ? t : [t]), (this.layers = n), this;
  }
  getLayers() {
    return this.layers;
  }
  addLayer(t) {
    const n = this.layers,
      a = n.length;
    for (let s = 0; s < a; s++) if (n[s]._id === t._id) return !1;
    return this.layers.push(t), !0;
  }
  isRunning() {
    const n = Qt.animations,
      a = n.length;
    for (let s = 0; s < a; s++) if (n[s].id === this.id) return !0;
    return !1;
  }
  start() {
    return (
      this.stop(),
      (this.frame.timeDiff = 0),
      (this.frame.lastTime = Eo()),
      Qt._addAnimation(this),
      this
    );
  }
  stop() {
    return Qt._removeAnimation(this), this;
  }
  _updateFrameObject(t) {
    (this.frame.timeDiff = t - this.frame.lastTime),
      (this.frame.lastTime = t),
      (this.frame.time += this.frame.timeDiff),
      (this.frame.frameRate = 1e3 / this.frame.timeDiff);
  }
  static _addAnimation(t) {
    this.animations.push(t), this._handleAnimation();
  }
  static _removeAnimation(t) {
    const n = t.id,
      a = this.animations,
      s = a.length;
    for (let l = 0; l < s; l++)
      if (a[l].id === n) {
        this.animations.splice(l, 1);
        break;
      }
  }
  static _runFrames() {
    const t = {},
      n = this.animations;
    for (let a = 0; a < n.length; a++) {
      const s = n[a],
        l = s.layers,
        h = s.func;
      s._updateFrameObject(Eo());
      const c = l.length;
      let f;
      if ((h ? (f = h.call(s, s.frame) !== !1) : (f = !0), !!f))
        for (let p = 0; p < c; p++) {
          const m = l[p];
          m._id !== void 0 && (t[m._id] = m);
        }
    }
    for (let a in t) t.hasOwnProperty(a) && t[a].batchDraw();
  }
  static _animationLoop() {
    const t = Qt;
    t.animations.length
      ? (t._runFrames(), lh.Util.requestAnimFrame(t._animationLoop))
      : (t.animRunning = !1);
  }
  static _handleAnimation() {
    this.animRunning ||
      ((this.animRunning = !0), lh.Util.requestAnimFrame(this._animationLoop));
  }
}
kn.Animation = Qt;
Qt.animations = [];
Qt.animIdCounter = 0;
Qt.animRunning = !1;
var t0 = {};
(function (d) {
  Object.defineProperty(d, "__esModule", { value: !0 }),
    (d.Easings = d.Tween = void 0);
  const t = Be,
    n = kn,
    a = Ge,
    s = ce;
  var l = { node: 1, duration: 1, easing: 1, onFinish: 1, yoyo: 1 },
    h = 1,
    c = 2,
    f = 3,
    p = 0,
    m = ["fill", "stroke", "shadowColor"];
  class x {
    constructor(y, P, k, R, F, v, w) {
      (this.prop = y),
        (this.propFunc = P),
        (this.begin = R),
        (this._pos = R),
        (this.duration = v),
        (this._change = 0),
        (this.prevPos = 0),
        (this.yoyo = w),
        (this._time = 0),
        (this._position = 0),
        (this._startTime = 0),
        (this._finish = 0),
        (this.func = k),
        (this._change = F - this.begin),
        this.pause();
    }
    fire(y) {
      var P = this[y];
      P && P();
    }
    setTime(y) {
      y > this.duration
        ? this.yoyo
          ? ((this._time = this.duration), this.reverse())
          : this.finish()
        : y < 0
        ? this.yoyo
          ? ((this._time = 0), this.play())
          : this.reset()
        : ((this._time = y), this.update());
    }
    getTime() {
      return this._time;
    }
    setPosition(y) {
      (this.prevPos = this._pos), this.propFunc(y), (this._pos = y);
    }
    getPosition(y) {
      return (
        y === void 0 && (y = this._time),
        this.func(y, this.begin, this._change, this.duration)
      );
    }
    play() {
      (this.state = c),
        (this._startTime = this.getTimer() - this._time),
        this.onEnterFrame(),
        this.fire("onPlay");
    }
    reverse() {
      (this.state = f),
        (this._time = this.duration - this._time),
        (this._startTime = this.getTimer() - this._time),
        this.onEnterFrame(),
        this.fire("onReverse");
    }
    seek(y) {
      this.pause(), (this._time = y), this.update(), this.fire("onSeek");
    }
    reset() {
      this.pause(), (this._time = 0), this.update(), this.fire("onReset");
    }
    finish() {
      this.pause(),
        (this._time = this.duration),
        this.update(),
        this.fire("onFinish");
    }
    update() {
      this.setPosition(this.getPosition(this._time)), this.fire("onUpdate");
    }
    onEnterFrame() {
      var y = this.getTimer() - this._startTime;
      this.state === c
        ? this.setTime(y)
        : this.state === f && this.setTime(this.duration - y);
    }
    pause() {
      (this.state = h), this.fire("onPause");
    }
    getTimer() {
      return new Date().getTime();
    }
  }
  class C {
    constructor(y) {
      var P = this,
        k = y.node,
        R = k._id,
        F,
        v = y.easing || d.Easings.Linear,
        w = !!y.yoyo,
        E;
      typeof y.duration > "u"
        ? (F = 0.3)
        : y.duration === 0
        ? (F = 0.001)
        : (F = y.duration),
        (this.node = k),
        (this._id = p++);
      var N =
        k.getLayer() || (k instanceof s.Konva.Stage ? k.getLayers() : null);
      N ||
        t.Util.error(
          "Tween constructor have `node` that is not in a layer. Please add node into layer first."
        ),
        (this.anim = new n.Animation(function () {
          P.tween.onEnterFrame();
        }, N)),
        (this.tween = new x(
          E,
          function (G) {
            P._tweenFunc(G);
          },
          v,
          0,
          1,
          F * 1e3,
          w
        )),
        this._addListeners(),
        C.attrs[R] || (C.attrs[R] = {}),
        C.attrs[R][this._id] || (C.attrs[R][this._id] = {}),
        C.tweens[R] || (C.tweens[R] = {});
      for (E in y) l[E] === void 0 && this._addAttr(E, y[E]);
      this.reset(),
        (this.onFinish = y.onFinish),
        (this.onReset = y.onReset),
        (this.onUpdate = y.onUpdate);
    }
    _addAttr(y, P) {
      var k = this.node,
        R = k._id,
        F,
        v,
        w,
        E,
        N,
        G,
        T,
        z;
      if (
        ((w = C.tweens[R][y]),
        w && delete C.attrs[R][w][y],
        (F = k.getAttr(y)),
        t.Util._isArray(P))
      )
        if (
          ((v = []),
          (N = Math.max(P.length, F.length)),
          y === "points" &&
            P.length !== F.length &&
            (P.length > F.length
              ? ((T = F), (F = t.Util._prepareArrayForTween(F, P, k.closed())))
              : ((G = P),
                (P = t.Util._prepareArrayForTween(P, F, k.closed())))),
          y.indexOf("fill") === 0)
        )
          for (E = 0; E < N; E++)
            if (E % 2 === 0) v.push(P[E] - F[E]);
            else {
              var L = t.Util.colorToRGBA(F[E]);
              (z = t.Util.colorToRGBA(P[E])),
                (F[E] = L),
                v.push({
                  r: z.r - L.r,
                  g: z.g - L.g,
                  b: z.b - L.b,
                  a: z.a - L.a,
                });
            }
        else for (E = 0; E < N; E++) v.push(P[E] - F[E]);
      else
        m.indexOf(y) !== -1
          ? ((F = t.Util.colorToRGBA(F)),
            (z = t.Util.colorToRGBA(P)),
            (v = { r: z.r - F.r, g: z.g - F.g, b: z.b - F.b, a: z.a - F.a }))
          : (v = P - F);
      (C.attrs[R][this._id][y] = {
        start: F,
        diff: v,
        end: P,
        trueEnd: G,
        trueStart: T,
      }),
        (C.tweens[R][y] = this._id);
    }
    _tweenFunc(y) {
      var P = this.node,
        k = C.attrs[P._id][this._id],
        R,
        F,
        v,
        w,
        E,
        N,
        G,
        T;
      for (R in k) {
        if (
          ((F = k[R]),
          (v = F.start),
          (w = F.diff),
          (T = F.end),
          t.Util._isArray(v))
        )
          if (
            ((E = []),
            (G = Math.max(v.length, T.length)),
            R.indexOf("fill") === 0)
          )
            for (N = 0; N < G; N++)
              N % 2 === 0
                ? E.push((v[N] || 0) + w[N] * y)
                : E.push(
                    "rgba(" +
                      Math.round(v[N].r + w[N].r * y) +
                      "," +
                      Math.round(v[N].g + w[N].g * y) +
                      "," +
                      Math.round(v[N].b + w[N].b * y) +
                      "," +
                      (v[N].a + w[N].a * y) +
                      ")"
                  );
          else for (N = 0; N < G; N++) E.push((v[N] || 0) + w[N] * y);
        else
          m.indexOf(R) !== -1
            ? (E =
                "rgba(" +
                Math.round(v.r + w.r * y) +
                "," +
                Math.round(v.g + w.g * y) +
                "," +
                Math.round(v.b + w.b * y) +
                "," +
                (v.a + w.a * y) +
                ")")
            : (E = v + w * y);
        P.setAttr(R, E);
      }
    }
    _addListeners() {
      (this.tween.onPlay = () => {
        this.anim.start();
      }),
        (this.tween.onReverse = () => {
          this.anim.start();
        }),
        (this.tween.onPause = () => {
          this.anim.stop();
        }),
        (this.tween.onFinish = () => {
          var y = this.node,
            P = C.attrs[y._id][this._id];
          P.points && P.points.trueEnd && y.setAttr("points", P.points.trueEnd),
            this.onFinish && this.onFinish.call(this);
        }),
        (this.tween.onReset = () => {
          var y = this.node,
            P = C.attrs[y._id][this._id];
          P.points && P.points.trueStart && y.points(P.points.trueStart),
            this.onReset && this.onReset();
        }),
        (this.tween.onUpdate = () => {
          this.onUpdate && this.onUpdate.call(this);
        });
    }
    play() {
      return this.tween.play(), this;
    }
    reverse() {
      return this.tween.reverse(), this;
    }
    reset() {
      return this.tween.reset(), this;
    }
    seek(y) {
      return this.tween.seek(y * 1e3), this;
    }
    pause() {
      return this.tween.pause(), this;
    }
    finish() {
      return this.tween.finish(), this;
    }
    destroy() {
      var y = this.node._id,
        P = this._id,
        k = C.tweens[y],
        R;
      this.pause();
      for (R in k) delete C.tweens[y][R];
      delete C.attrs[y][P];
    }
  }
  (d.Tween = C),
    (C.attrs = {}),
    (C.tweens = {}),
    (a.Node.prototype.to = function (_) {
      var y = _.onFinish;
      (_.node = this),
        (_.onFinish = function () {
          this.destroy(), y && y();
        });
      var P = new C(_);
      P.play();
    }),
    (d.Easings = {
      BackEaseIn(_, y, P, k) {
        var R = 1.70158;
        return P * (_ /= k) * _ * ((R + 1) * _ - R) + y;
      },
      BackEaseOut(_, y, P, k) {
        var R = 1.70158;
        return P * ((_ = _ / k - 1) * _ * ((R + 1) * _ + R) + 1) + y;
      },
      BackEaseInOut(_, y, P, k) {
        var R = 1.70158;
        return (_ /= k / 2) < 1
          ? (P / 2) * (_ * _ * (((R *= 1.525) + 1) * _ - R)) + y
          : (P / 2) * ((_ -= 2) * _ * (((R *= 1.525) + 1) * _ + R) + 2) + y;
      },
      ElasticEaseIn(_, y, P, k, R, F) {
        var v = 0;
        return _ === 0
          ? y
          : (_ /= k) === 1
          ? y + P
          : (F || (F = k * 0.3),
            !R || R < Math.abs(P)
              ? ((R = P), (v = F / 4))
              : (v = (F / (2 * Math.PI)) * Math.asin(P / R)),
            -(
              R *
              Math.pow(2, 10 * (_ -= 1)) *
              Math.sin(((_ * k - v) * (2 * Math.PI)) / F)
            ) + y);
      },
      ElasticEaseOut(_, y, P, k, R, F) {
        var v = 0;
        return _ === 0
          ? y
          : (_ /= k) === 1
          ? y + P
          : (F || (F = k * 0.3),
            !R || R < Math.abs(P)
              ? ((R = P), (v = F / 4))
              : (v = (F / (2 * Math.PI)) * Math.asin(P / R)),
            R *
              Math.pow(2, -10 * _) *
              Math.sin(((_ * k - v) * (2 * Math.PI)) / F) +
              P +
              y);
      },
      ElasticEaseInOut(_, y, P, k, R, F) {
        var v = 0;
        return _ === 0
          ? y
          : (_ /= k / 2) === 2
          ? y + P
          : (F || (F = k * (0.3 * 1.5)),
            !R || R < Math.abs(P)
              ? ((R = P), (v = F / 4))
              : (v = (F / (2 * Math.PI)) * Math.asin(P / R)),
            _ < 1
              ? -0.5 *
                  (R *
                    Math.pow(2, 10 * (_ -= 1)) *
                    Math.sin(((_ * k - v) * (2 * Math.PI)) / F)) +
                y
              : R *
                  Math.pow(2, -10 * (_ -= 1)) *
                  Math.sin(((_ * k - v) * (2 * Math.PI)) / F) *
                  0.5 +
                P +
                y);
      },
      BounceEaseOut(_, y, P, k) {
        return (_ /= k) < 1 / 2.75
          ? P * (7.5625 * _ * _) + y
          : _ < 2 / 2.75
          ? P * (7.5625 * (_ -= 1.5 / 2.75) * _ + 0.75) + y
          : _ < 2.5 / 2.75
          ? P * (7.5625 * (_ -= 2.25 / 2.75) * _ + 0.9375) + y
          : P * (7.5625 * (_ -= 2.625 / 2.75) * _ + 0.984375) + y;
      },
      BounceEaseIn(_, y, P, k) {
        return P - d.Easings.BounceEaseOut(k - _, 0, P, k) + y;
      },
      BounceEaseInOut(_, y, P, k) {
        return _ < k / 2
          ? d.Easings.BounceEaseIn(_ * 2, 0, P, k) * 0.5 + y
          : d.Easings.BounceEaseOut(_ * 2 - k, 0, P, k) * 0.5 + P * 0.5 + y;
      },
      EaseIn(_, y, P, k) {
        return P * (_ /= k) * _ + y;
      },
      EaseOut(_, y, P, k) {
        return -P * (_ /= k) * (_ - 2) + y;
      },
      EaseInOut(_, y, P, k) {
        return (_ /= k / 2) < 1
          ? (P / 2) * _ * _ + y
          : (-P / 2) * (--_ * (_ - 2) - 1) + y;
      },
      StrongEaseIn(_, y, P, k) {
        return P * (_ /= k) * _ * _ * _ * _ + y;
      },
      StrongEaseOut(_, y, P, k) {
        return P * ((_ = _ / k - 1) * _ * _ * _ * _ + 1) + y;
      },
      StrongEaseInOut(_, y, P, k) {
        return (_ /= k / 2) < 1
          ? (P / 2) * _ * _ * _ * _ * _ + y
          : (P / 2) * ((_ -= 2) * _ * _ * _ * _ + 2) + y;
      },
      Linear(_, y, P, k) {
        return (P * _) / k + y;
      },
    });
})(t0);
(function (d) {
  Object.defineProperty(d, "__esModule", { value: !0 }), (d.Konva = void 0);
  const t = ce,
    n = Be,
    a = Ge,
    s = Yr,
    l = $h,
    h = ai,
    c = ya,
    f = En,
    p = va,
    m = $e,
    x = kn,
    C = t0,
    _ = lr,
    y = Ut;
  (d.Konva = n.Util._assign(t.Konva, {
    Util: n.Util,
    Transform: n.Transform,
    Node: a.Node,
    Container: s.Container,
    Stage: l.Stage,
    stages: l.stages,
    Layer: h.Layer,
    FastLayer: c.FastLayer,
    Group: f.Group,
    DD: p.DD,
    Shape: m.Shape,
    shapes: m.shapes,
    Animation: x.Animation,
    Tween: C.Tween,
    Easings: C.Easings,
    Context: _.Context,
    Canvas: y.Canvas,
  })),
    (d.default = d.Konva);
})(la);
var _a = {};
Object.defineProperty(_a, "__esModule", { value: !0 });
_a.Arc = void 0;
const Sa = fe,
  E1 = $e,
  uh = ce,
  wa = re,
  k1 = ce;
class dr extends E1.Shape {
  _sceneFunc(t) {
    var n = uh.Konva.getAngle(this.angle()),
      a = this.clockwise();
    t.beginPath(),
      t.arc(0, 0, this.outerRadius(), 0, n, a),
      t.arc(0, 0, this.innerRadius(), n, 0, !a),
      t.closePath(),
      t.fillStrokeShape(this);
  }
  getWidth() {
    return this.outerRadius() * 2;
  }
  getHeight() {
    return this.outerRadius() * 2;
  }
  setWidth(t) {
    this.outerRadius(t / 2);
  }
  setHeight(t) {
    this.outerRadius(t / 2);
  }
  getSelfRect() {
    const t = this.innerRadius(),
      n = this.outerRadius(),
      a = this.clockwise(),
      s = uh.Konva.getAngle(a ? 360 - this.angle() : this.angle()),
      l = Math.cos(Math.min(s, Math.PI)),
      h = 1,
      c = Math.sin(Math.min(Math.max(Math.PI, s), (3 * Math.PI) / 2)),
      f = Math.sin(Math.min(s, Math.PI / 2)),
      p = l * (l > 0 ? t : n),
      m = h * n,
      x = c * (c > 0 ? t : n),
      C = f * (f > 0 ? n : t);
    return { x: p, y: a ? -1 * C : x, width: m - p, height: C - x };
  }
}
_a.Arc = dr;
dr.prototype._centroid = !0;
dr.prototype.className = "Arc";
dr.prototype._attrsAffectingSize = ["innerRadius", "outerRadius"];
(0, k1._registerNode)(dr);
Sa.Factory.addGetterSetter(dr, "innerRadius", 0, (0, wa.getNumberValidator)());
Sa.Factory.addGetterSetter(dr, "outerRadius", 0, (0, wa.getNumberValidator)());
Sa.Factory.addGetterSetter(dr, "angle", 0, (0, wa.getNumberValidator)());
Sa.Factory.addGetterSetter(dr, "clockwise", !1, (0, wa.getBooleanValidator)());
var Ca = {},
  si = {};
Object.defineProperty(si, "__esModule", { value: !0 });
si.Line = void 0;
const xa = fe,
  T1 = $e,
  r0 = re,
  N1 = ce;
function Oo(d, t, n, a, s, l, h) {
  var c = Math.sqrt(Math.pow(n - d, 2) + Math.pow(a - t, 2)),
    f = Math.sqrt(Math.pow(s - n, 2) + Math.pow(l - a, 2)),
    p = (h * c) / (c + f),
    m = (h * f) / (c + f),
    x = n - p * (s - d),
    C = a - p * (l - t),
    _ = n + m * (s - d),
    y = a + m * (l - t);
  return [x, C, _, y];
}
function hh(d, t) {
  var n = d.length,
    a = [],
    s,
    l;
  for (s = 2; s < n - 2; s += 2)
    (l = Oo(d[s - 2], d[s - 1], d[s], d[s + 1], d[s + 2], d[s + 3], t)),
      !isNaN(l[0]) &&
        (a.push(l[0]),
        a.push(l[1]),
        a.push(d[s]),
        a.push(d[s + 1]),
        a.push(l[2]),
        a.push(l[3]));
  return a;
}
class Nr extends T1.Shape {
  constructor(t) {
    super(t),
      this.on(
        "pointsChange.konva tensionChange.konva closedChange.konva bezierChange.konva",
        function () {
          this._clearCache("tensionPoints");
        }
      );
  }
  _sceneFunc(t) {
    var n = this.points(),
      a = n.length,
      s = this.tension(),
      l = this.closed(),
      h = this.bezier(),
      c,
      f,
      p;
    if (a) {
      if ((t.beginPath(), t.moveTo(n[0], n[1]), s !== 0 && a > 4)) {
        for (
          c = this.getTensionPoints(),
            f = c.length,
            p = l ? 0 : 4,
            l || t.quadraticCurveTo(c[0], c[1], c[2], c[3]);
          p < f - 2;

        )
          t.bezierCurveTo(c[p++], c[p++], c[p++], c[p++], c[p++], c[p++]);
        l || t.quadraticCurveTo(c[f - 2], c[f - 1], n[a - 2], n[a - 1]);
      } else if (h)
        for (p = 2; p < a; )
          t.bezierCurveTo(n[p++], n[p++], n[p++], n[p++], n[p++], n[p++]);
      else for (p = 2; p < a; p += 2) t.lineTo(n[p], n[p + 1]);
      l ? (t.closePath(), t.fillStrokeShape(this)) : t.strokeShape(this);
    }
  }
  getTensionPoints() {
    return this._getCache("tensionPoints", this._getTensionPoints);
  }
  _getTensionPoints() {
    return this.closed()
      ? this._getTensionPointsClosed()
      : hh(this.points(), this.tension());
  }
  _getTensionPointsClosed() {
    var t = this.points(),
      n = t.length,
      a = this.tension(),
      s = Oo(t[n - 2], t[n - 1], t[0], t[1], t[2], t[3], a),
      l = Oo(t[n - 4], t[n - 3], t[n - 2], t[n - 1], t[0], t[1], a),
      h = hh(t, a),
      c = [s[2], s[3]]
        .concat(h)
        .concat([
          l[0],
          l[1],
          t[n - 2],
          t[n - 1],
          l[2],
          l[3],
          s[0],
          s[1],
          t[0],
          t[1],
        ]);
    return c;
  }
  getWidth() {
    return this.getSelfRect().width;
  }
  getHeight() {
    return this.getSelfRect().height;
  }
  getSelfRect() {
    var t = this.points();
    if (t.length < 4)
      return { x: t[0] || 0, y: t[1] || 0, width: 0, height: 0 };
    this.tension() !== 0
      ? (t = [
          t[0],
          t[1],
          ...this._getTensionPoints(),
          t[t.length - 2],
          t[t.length - 1],
        ])
      : (t = this.points());
    for (
      var n = t[0], a = t[0], s = t[1], l = t[1], h, c, f = 0;
      f < t.length / 2;
      f++
    )
      (h = t[f * 2]),
        (c = t[f * 2 + 1]),
        (n = Math.min(n, h)),
        (a = Math.max(a, h)),
        (s = Math.min(s, c)),
        (l = Math.max(l, c));
    return { x: n, y: s, width: a - n, height: l - s };
  }
}
si.Line = Nr;
Nr.prototype.className = "Line";
Nr.prototype._attrsAffectingSize = ["points", "bezier", "tension"];
(0, N1._registerNode)(Nr);
xa.Factory.addGetterSetter(Nr, "closed", !1);
xa.Factory.addGetterSetter(Nr, "bezier", !1);
xa.Factory.addGetterSetter(Nr, "tension", 0, (0, r0.getNumberValidator)());
xa.Factory.addGetterSetter(Nr, "points", [], (0, r0.getNumberArrayValidator)());
var Tn = {},
  n0 = {};
(function (d) {
  Object.defineProperty(d, "__esModule", { value: !0 }),
    (d.t2length =
      d.getQuadraticArcLength =
      d.getCubicArcLength =
      d.binomialCoefficients =
      d.cValues =
      d.tValues =
        void 0),
    (d.tValues = [
      [],
      [],
      [-0.5773502691896257, 0.5773502691896257],
      [0, -0.7745966692414834, 0.7745966692414834],
      [
        -0.33998104358485626, 0.33998104358485626, -0.8611363115940526,
        0.8611363115940526,
      ],
      [
        0, -0.5384693101056831, 0.5384693101056831, -0.906179845938664,
        0.906179845938664,
      ],
      [
        0.6612093864662645, -0.6612093864662645, -0.2386191860831969,
        0.2386191860831969, -0.932469514203152, 0.932469514203152,
      ],
      [
        0, 0.4058451513773972, -0.4058451513773972, -0.7415311855993945,
        0.7415311855993945, -0.9491079123427585, 0.9491079123427585,
      ],
      [
        -0.1834346424956498, 0.1834346424956498, -0.525532409916329,
        0.525532409916329, -0.7966664774136267, 0.7966664774136267,
        -0.9602898564975363, 0.9602898564975363,
      ],
      [
        0, -0.8360311073266358, 0.8360311073266358, -0.9681602395076261,
        0.9681602395076261, -0.3242534234038089, 0.3242534234038089,
        -0.6133714327005904, 0.6133714327005904,
      ],
      [
        -0.14887433898163122, 0.14887433898163122, -0.4333953941292472,
        0.4333953941292472, -0.6794095682990244, 0.6794095682990244,
        -0.8650633666889845, 0.8650633666889845, -0.9739065285171717,
        0.9739065285171717,
      ],
      [
        0, -0.26954315595234496, 0.26954315595234496, -0.5190961292068118,
        0.5190961292068118, -0.7301520055740494, 0.7301520055740494,
        -0.8870625997680953, 0.8870625997680953, -0.978228658146057,
        0.978228658146057,
      ],
      [
        -0.1252334085114689, 0.1252334085114689, -0.3678314989981802,
        0.3678314989981802, -0.5873179542866175, 0.5873179542866175,
        -0.7699026741943047, 0.7699026741943047, -0.9041172563704749,
        0.9041172563704749, -0.9815606342467192, 0.9815606342467192,
      ],
      [
        0, -0.2304583159551348, 0.2304583159551348, -0.44849275103644687,
        0.44849275103644687, -0.6423493394403402, 0.6423493394403402,
        -0.8015780907333099, 0.8015780907333099, -0.9175983992229779,
        0.9175983992229779, -0.9841830547185881, 0.9841830547185881,
      ],
      [
        -0.10805494870734367, 0.10805494870734367, -0.31911236892788974,
        0.31911236892788974, -0.5152486363581541, 0.5152486363581541,
        -0.6872929048116855, 0.6872929048116855, -0.827201315069765,
        0.827201315069765, -0.9284348836635735, 0.9284348836635735,
        -0.9862838086968123, 0.9862838086968123,
      ],
      [
        0, -0.20119409399743451, 0.20119409399743451, -0.3941513470775634,
        0.3941513470775634, -0.5709721726085388, 0.5709721726085388,
        -0.7244177313601701, 0.7244177313601701, -0.8482065834104272,
        0.8482065834104272, -0.937273392400706, 0.937273392400706,
        -0.9879925180204854, 0.9879925180204854,
      ],
      [
        -0.09501250983763744, 0.09501250983763744, -0.2816035507792589,
        0.2816035507792589, -0.45801677765722737, 0.45801677765722737,
        -0.6178762444026438, 0.6178762444026438, -0.755404408355003,
        0.755404408355003, -0.8656312023878318, 0.8656312023878318,
        -0.9445750230732326, 0.9445750230732326, -0.9894009349916499,
        0.9894009349916499,
      ],
      [
        0, -0.17848418149584785, 0.17848418149584785, -0.3512317634538763,
        0.3512317634538763, -0.5126905370864769, 0.5126905370864769,
        -0.6576711592166907, 0.6576711592166907, -0.7815140038968014,
        0.7815140038968014, -0.8802391537269859, 0.8802391537269859,
        -0.9506755217687678, 0.9506755217687678, -0.9905754753144174,
        0.9905754753144174,
      ],
      [
        -0.0847750130417353, 0.0847750130417353, -0.2518862256915055,
        0.2518862256915055, -0.41175116146284263, 0.41175116146284263,
        -0.5597708310739475, 0.5597708310739475, -0.6916870430603532,
        0.6916870430603532, -0.8037049589725231, 0.8037049589725231,
        -0.8926024664975557, 0.8926024664975557, -0.9558239495713977,
        0.9558239495713977, -0.9915651684209309, 0.9915651684209309,
      ],
      [
        0, -0.16035864564022537, 0.16035864564022537, -0.31656409996362983,
        0.31656409996362983, -0.46457074137596094, 0.46457074137596094,
        -0.600545304661681, 0.600545304661681, -0.7209661773352294,
        0.7209661773352294, -0.8227146565371428, 0.8227146565371428,
        -0.9031559036148179, 0.9031559036148179, -0.96020815213483,
        0.96020815213483, -0.9924068438435844, 0.9924068438435844,
      ],
      [
        -0.07652652113349734, 0.07652652113349734, -0.22778585114164507,
        0.22778585114164507, -0.37370608871541955, 0.37370608871541955,
        -0.5108670019508271, 0.5108670019508271, -0.636053680726515,
        0.636053680726515, -0.7463319064601508, 0.7463319064601508,
        -0.8391169718222188, 0.8391169718222188, -0.912234428251326,
        0.912234428251326, -0.9639719272779138, 0.9639719272779138,
        -0.9931285991850949, 0.9931285991850949,
      ],
      [
        0, -0.1455618541608951, 0.1455618541608951, -0.2880213168024011,
        0.2880213168024011, -0.4243421202074388, 0.4243421202074388,
        -0.5516188358872198, 0.5516188358872198, -0.6671388041974123,
        0.6671388041974123, -0.7684399634756779, 0.7684399634756779,
        -0.8533633645833173, 0.8533633645833173, -0.9200993341504008,
        0.9200993341504008, -0.9672268385663063, 0.9672268385663063,
        -0.9937521706203895, 0.9937521706203895,
      ],
      [
        -0.06973927331972223, 0.06973927331972223, -0.20786042668822127,
        0.20786042668822127, -0.34193582089208424, 0.34193582089208424,
        -0.469355837986757, 0.469355837986757, -0.5876404035069116,
        0.5876404035069116, -0.6944872631866827, 0.6944872631866827,
        -0.7878168059792081, 0.7878168059792081, -0.8658125777203002,
        0.8658125777203002, -0.926956772187174, 0.926956772187174,
        -0.9700604978354287, 0.9700604978354287, -0.9942945854823992,
        0.9942945854823992,
      ],
      [
        0, -0.1332568242984661, 0.1332568242984661, -0.26413568097034495,
        0.26413568097034495, -0.3903010380302908, 0.3903010380302908,
        -0.5095014778460075, 0.5095014778460075, -0.6196098757636461,
        0.6196098757636461, -0.7186613631319502, 0.7186613631319502,
        -0.8048884016188399, 0.8048884016188399, -0.8767523582704416,
        0.8767523582704416, -0.9329710868260161, 0.9329710868260161,
        -0.9725424712181152, 0.9725424712181152, -0.9947693349975522,
        0.9947693349975522,
      ],
      [
        -0.06405689286260563, 0.06405689286260563, -0.1911188674736163,
        0.1911188674736163, -0.3150426796961634, 0.3150426796961634,
        -0.4337935076260451, 0.4337935076260451, -0.5454214713888396,
        0.5454214713888396, -0.6480936519369755, 0.6480936519369755,
        -0.7401241915785544, 0.7401241915785544, -0.820001985973903,
        0.820001985973903, -0.8864155270044011, 0.8864155270044011,
        -0.9382745520027328, 0.9382745520027328, -0.9747285559713095,
        0.9747285559713095, -0.9951872199970213, 0.9951872199970213,
      ],
    ]),
    (d.cValues = [
      [],
      [],
      [1, 1],
      [0.8888888888888888, 0.5555555555555556, 0.5555555555555556],
      [
        0.6521451548625461, 0.6521451548625461, 0.34785484513745385,
        0.34785484513745385,
      ],
      [
        0.5688888888888889, 0.47862867049936647, 0.47862867049936647,
        0.23692688505618908, 0.23692688505618908,
      ],
      [
        0.3607615730481386, 0.3607615730481386, 0.46791393457269104,
        0.46791393457269104, 0.17132449237917036, 0.17132449237917036,
      ],
      [
        0.4179591836734694, 0.3818300505051189, 0.3818300505051189,
        0.27970539148927664, 0.27970539148927664, 0.1294849661688697,
        0.1294849661688697,
      ],
      [
        0.362683783378362, 0.362683783378362, 0.31370664587788727,
        0.31370664587788727, 0.22238103445337448, 0.22238103445337448,
        0.10122853629037626, 0.10122853629037626,
      ],
      [
        0.3302393550012598, 0.1806481606948574, 0.1806481606948574,
        0.08127438836157441, 0.08127438836157441, 0.31234707704000286,
        0.31234707704000286, 0.26061069640293544, 0.26061069640293544,
      ],
      [
        0.29552422471475287, 0.29552422471475287, 0.26926671930999635,
        0.26926671930999635, 0.21908636251598204, 0.21908636251598204,
        0.1494513491505806, 0.1494513491505806, 0.06667134430868814,
        0.06667134430868814,
      ],
      [
        0.2729250867779006, 0.26280454451024665, 0.26280454451024665,
        0.23319376459199048, 0.23319376459199048, 0.18629021092773426,
        0.18629021092773426, 0.1255803694649046, 0.1255803694649046,
        0.05566856711617366, 0.05566856711617366,
      ],
      [
        0.24914704581340277, 0.24914704581340277, 0.2334925365383548,
        0.2334925365383548, 0.20316742672306592, 0.20316742672306592,
        0.16007832854334622, 0.16007832854334622, 0.10693932599531843,
        0.10693932599531843, 0.04717533638651183, 0.04717533638651183,
      ],
      [
        0.2325515532308739, 0.22628318026289723, 0.22628318026289723,
        0.2078160475368885, 0.2078160475368885, 0.17814598076194574,
        0.17814598076194574, 0.13887351021978725, 0.13887351021978725,
        0.09212149983772845, 0.09212149983772845, 0.04048400476531588,
        0.04048400476531588,
      ],
      [
        0.2152638534631578, 0.2152638534631578, 0.2051984637212956,
        0.2051984637212956, 0.18553839747793782, 0.18553839747793782,
        0.15720316715819355, 0.15720316715819355, 0.12151857068790319,
        0.12151857068790319, 0.08015808715976021, 0.08015808715976021,
        0.03511946033175186, 0.03511946033175186,
      ],
      [
        0.2025782419255613, 0.19843148532711158, 0.19843148532711158,
        0.1861610000155622, 0.1861610000155622, 0.16626920581699392,
        0.16626920581699392, 0.13957067792615432, 0.13957067792615432,
        0.10715922046717194, 0.10715922046717194, 0.07036604748810812,
        0.07036604748810812, 0.03075324199611727, 0.03075324199611727,
      ],
      [
        0.1894506104550685, 0.1894506104550685, 0.18260341504492358,
        0.18260341504492358, 0.16915651939500254, 0.16915651939500254,
        0.14959598881657674, 0.14959598881657674, 0.12462897125553388,
        0.12462897125553388, 0.09515851168249279, 0.09515851168249279,
        0.062253523938647894, 0.062253523938647894, 0.027152459411754096,
        0.027152459411754096,
      ],
      [
        0.17944647035620653, 0.17656270536699264, 0.17656270536699264,
        0.16800410215645004, 0.16800410215645004, 0.15404576107681028,
        0.15404576107681028, 0.13513636846852548, 0.13513636846852548,
        0.11188384719340397, 0.11188384719340397, 0.08503614831717918,
        0.08503614831717918, 0.0554595293739872, 0.0554595293739872,
        0.02414830286854793, 0.02414830286854793,
      ],
      [
        0.1691423829631436, 0.1691423829631436, 0.16427648374583273,
        0.16427648374583273, 0.15468467512626524, 0.15468467512626524,
        0.14064291467065065, 0.14064291467065065, 0.12255520671147846,
        0.12255520671147846, 0.10094204410628717, 0.10094204410628717,
        0.07642573025488905, 0.07642573025488905, 0.0497145488949698,
        0.0497145488949698, 0.02161601352648331, 0.02161601352648331,
      ],
      [
        0.1610544498487837, 0.15896884339395434, 0.15896884339395434,
        0.15276604206585967, 0.15276604206585967, 0.1426067021736066,
        0.1426067021736066, 0.12875396253933621, 0.12875396253933621,
        0.11156664554733399, 0.11156664554733399, 0.09149002162245,
        0.09149002162245, 0.06904454273764123, 0.06904454273764123,
        0.0448142267656996, 0.0448142267656996, 0.019461788229726478,
        0.019461788229726478,
      ],
      [
        0.15275338713072584, 0.15275338713072584, 0.14917298647260374,
        0.14917298647260374, 0.14209610931838204, 0.14209610931838204,
        0.13168863844917664, 0.13168863844917664, 0.11819453196151841,
        0.11819453196151841, 0.10193011981724044, 0.10193011981724044,
        0.08327674157670475, 0.08327674157670475, 0.06267204833410907,
        0.06267204833410907, 0.04060142980038694, 0.04060142980038694,
        0.017614007139152118, 0.017614007139152118,
      ],
      [
        0.14608113364969041, 0.14452440398997005, 0.14452440398997005,
        0.13988739479107315, 0.13988739479107315, 0.13226893863333747,
        0.13226893863333747, 0.12183141605372853, 0.12183141605372853,
        0.10879729916714838, 0.10879729916714838, 0.09344442345603386,
        0.09344442345603386, 0.0761001136283793, 0.0761001136283793,
        0.057134425426857205, 0.057134425426857205, 0.036953789770852494,
        0.036953789770852494, 0.016017228257774335, 0.016017228257774335,
      ],
      [
        0.13925187285563198, 0.13925187285563198, 0.13654149834601517,
        0.13654149834601517, 0.13117350478706238, 0.13117350478706238,
        0.12325237681051242, 0.12325237681051242, 0.11293229608053922,
        0.11293229608053922, 0.10041414444288096, 0.10041414444288096,
        0.08594160621706773, 0.08594160621706773, 0.06979646842452049,
        0.06979646842452049, 0.052293335152683286, 0.052293335152683286,
        0.03377490158481415, 0.03377490158481415, 0.0146279952982722,
        0.0146279952982722,
      ],
      [
        0.13365457218610619, 0.1324620394046966, 0.1324620394046966,
        0.12890572218808216, 0.12890572218808216, 0.12304908430672953,
        0.12304908430672953, 0.11499664022241136, 0.11499664022241136,
        0.10489209146454141, 0.10489209146454141, 0.09291576606003515,
        0.09291576606003515, 0.07928141177671895, 0.07928141177671895,
        0.06423242140852585, 0.06423242140852585, 0.04803767173108467,
        0.04803767173108467, 0.030988005856979445, 0.030988005856979445,
        0.013411859487141771, 0.013411859487141771,
      ],
      [
        0.12793819534675216, 0.12793819534675216, 0.1258374563468283,
        0.1258374563468283, 0.12167047292780339, 0.12167047292780339,
        0.1155056680537256, 0.1155056680537256, 0.10744427011596563,
        0.10744427011596563, 0.09761865210411388, 0.09761865210411388,
        0.08619016153195327, 0.08619016153195327, 0.0733464814110803,
        0.0733464814110803, 0.05929858491543678, 0.05929858491543678,
        0.04427743881741981, 0.04427743881741981, 0.028531388628933663,
        0.028531388628933663, 0.0123412297999872, 0.0123412297999872,
      ],
    ]),
    (d.binomialCoefficients = [[1], [1, 1], [1, 2, 1], [1, 3, 3, 1]]);
  const t = (h, c, f) => {
    let p, m, x;
    (p = f / 2), (m = 0);
    for (let _ = 0; _ < 20; _++)
      (x = p * d.tValues[20][_] + p), (m += d.cValues[20][_] * a(h, c, x));
    return p * m;
  };
  d.getCubicArcLength = t;
  const n = (h, c, f) => {
    f === void 0 && (f = 1);
    const p = h[0] - 2 * h[1] + h[2],
      m = c[0] - 2 * c[1] + c[2],
      x = 2 * h[1] - 2 * h[0],
      C = 2 * c[1] - 2 * c[0],
      _ = 4 * (p * p + m * m),
      y = 4 * (p * x + m * C),
      P = x * x + C * C;
    if (_ === 0)
      return f * Math.sqrt(Math.pow(h[2] - h[0], 2) + Math.pow(c[2] - c[0], 2));
    const k = y / (2 * _),
      R = P / _,
      F = f + k,
      v = R - k * k,
      w = F * F + v > 0 ? Math.sqrt(F * F + v) : 0,
      E = k * k + v > 0 ? Math.sqrt(k * k + v) : 0,
      N =
        k + Math.sqrt(k * k + v) !== 0
          ? v * Math.log(Math.abs((F + w) / (k + E)))
          : 0;
    return (Math.sqrt(_) / 2) * (F * w - k * E + N);
  };
  d.getQuadraticArcLength = n;
  function a(h, c, f) {
    const p = s(1, f, h),
      m = s(1, f, c),
      x = p * p + m * m;
    return Math.sqrt(x);
  }
  const s = (h, c, f) => {
      const p = f.length - 1;
      let m, x;
      if (p === 0) return 0;
      if (h === 0) {
        x = 0;
        for (let C = 0; C <= p; C++)
          x +=
            d.binomialCoefficients[p][C] *
            Math.pow(1 - c, p - C) *
            Math.pow(c, C) *
            f[C];
        return x;
      } else {
        m = new Array(p);
        for (let C = 0; C < p; C++) m[C] = p * (f[C + 1] - f[C]);
        return s(h - 1, c, m);
      }
    },
    l = (h, c, f) => {
      let p = 1,
        m = h / c,
        x = (h - f(m)) / c,
        C = 0;
      for (; p > 0.001; ) {
        const _ = f(m + x),
          y = Math.abs(h - _) / c;
        if (y < p) (p = y), (m += x);
        else {
          const P = f(m - x),
            k = Math.abs(h - P) / c;
          k < p ? ((p = k), (m -= x)) : (x /= 2);
        }
        if ((C++, C > 500)) break;
      }
      return m;
    };
  d.t2length = l;
})(n0);
Object.defineProperty(Tn, "__esModule", { value: !0 });
Tn.Path = void 0;
const R1 = fe,
  b1 = $e,
  F1 = ce,
  yn = n0;
class qe extends b1.Shape {
  constructor(t) {
    super(t),
      (this.dataArray = []),
      (this.pathLength = 0),
      this._readDataAttribute(),
      this.on("dataChange.konva", function () {
        this._readDataAttribute();
      });
  }
  _readDataAttribute() {
    (this.dataArray = qe.parsePathData(this.data())),
      (this.pathLength = qe.getPathLength(this.dataArray));
  }
  _sceneFunc(t) {
    var n = this.dataArray;
    t.beginPath();
    for (var a = !1, s = 0; s < n.length; s++) {
      var l = n[s].command,
        h = n[s].points;
      switch (l) {
        case "L":
          t.lineTo(h[0], h[1]);
          break;
        case "M":
          t.moveTo(h[0], h[1]);
          break;
        case "C":
          t.bezierCurveTo(h[0], h[1], h[2], h[3], h[4], h[5]);
          break;
        case "Q":
          t.quadraticCurveTo(h[0], h[1], h[2], h[3]);
          break;
        case "A":
          var c = h[0],
            f = h[1],
            p = h[2],
            m = h[3],
            x = h[4],
            C = h[5],
            _ = h[6],
            y = h[7],
            P = p > m ? p : m,
            k = p > m ? 1 : p / m,
            R = p > m ? m / p : 1;
          t.translate(c, f),
            t.rotate(_),
            t.scale(k, R),
            t.arc(0, 0, P, x, x + C, 1 - y),
            t.scale(1 / k, 1 / R),
            t.rotate(-_),
            t.translate(-c, -f);
          break;
        case "z":
          (a = !0), t.closePath();
          break;
      }
    }
    !a && !this.hasFill() ? t.strokeShape(this) : t.fillStrokeShape(this);
  }
  getSelfRect() {
    var t = [];
    this.dataArray.forEach(function (p) {
      if (p.command === "A") {
        var m = p.points[4],
          x = p.points[5],
          C = p.points[4] + x,
          _ = Math.PI / 180;
        if ((Math.abs(m - C) < _ && (_ = Math.abs(m - C)), x < 0))
          for (let y = m - _; y > C; y -= _) {
            const P = qe.getPointOnEllipticalArc(
              p.points[0],
              p.points[1],
              p.points[2],
              p.points[3],
              y,
              0
            );
            t.push(P.x, P.y);
          }
        else
          for (let y = m + _; y < C; y += _) {
            const P = qe.getPointOnEllipticalArc(
              p.points[0],
              p.points[1],
              p.points[2],
              p.points[3],
              y,
              0
            );
            t.push(P.x, P.y);
          }
      } else if (p.command === "C")
        for (let y = 0; y <= 1; y += 0.01) {
          const P = qe.getPointOnCubicBezier(
            y,
            p.start.x,
            p.start.y,
            p.points[0],
            p.points[1],
            p.points[2],
            p.points[3],
            p.points[4],
            p.points[5]
          );
          t.push(P.x, P.y);
        }
      else t = t.concat(p.points);
    });
    for (
      var n = t[0], a = t[0], s = t[1], l = t[1], h, c, f = 0;
      f < t.length / 2;
      f++
    )
      (h = t[f * 2]),
        (c = t[f * 2 + 1]),
        isNaN(h) || ((n = Math.min(n, h)), (a = Math.max(a, h))),
        isNaN(c) || ((s = Math.min(s, c)), (l = Math.max(l, c)));
    return { x: n, y: s, width: a - n, height: l - s };
  }
  getLength() {
    return this.pathLength;
  }
  getPointAtLength(t) {
    return qe.getPointAtLengthOfDataArray(t, this.dataArray);
  }
  static getLineLength(t, n, a, s) {
    return Math.sqrt((a - t) * (a - t) + (s - n) * (s - n));
  }
  static getPathLength(t) {
    let n = 0;
    for (var a = 0; a < t.length; ++a) n += t[a].pathLength;
    return n;
  }
  static getPointAtLengthOfDataArray(t, n) {
    var a,
      s = 0,
      l = n.length;
    if (!l) return null;
    for (; s < l && t > n[s].pathLength; ) (t -= n[s].pathLength), ++s;
    if (s === l) return (a = n[s - 1].points.slice(-2)), { x: a[0], y: a[1] };
    if (t < 0.01) return (a = n[s].points.slice(0, 2)), { x: a[0], y: a[1] };
    var h = n[s],
      c = h.points;
    switch (h.command) {
      case "L":
        return qe.getPointOnLine(t, h.start.x, h.start.y, c[0], c[1]);
      case "C":
        return qe.getPointOnCubicBezier(
          (0, yn.t2length)(t, qe.getPathLength(n), (P) =>
            (0, yn.getCubicArcLength)(
              [h.start.x, c[0], c[2], c[4]],
              [h.start.y, c[1], c[3], c[5]],
              P
            )
          ),
          h.start.x,
          h.start.y,
          c[0],
          c[1],
          c[2],
          c[3],
          c[4],
          c[5]
        );
      case "Q":
        return qe.getPointOnQuadraticBezier(
          (0, yn.t2length)(t, qe.getPathLength(n), (P) =>
            (0, yn.getQuadraticArcLength)(
              [h.start.x, c[0], c[2]],
              [h.start.y, c[1], c[3]],
              P
            )
          ),
          h.start.x,
          h.start.y,
          c[0],
          c[1],
          c[2],
          c[3]
        );
      case "A":
        var f = c[0],
          p = c[1],
          m = c[2],
          x = c[3],
          C = c[4],
          _ = c[5],
          y = c[6];
        return (
          (C += (_ * t) / h.pathLength),
          qe.getPointOnEllipticalArc(f, p, m, x, C, y)
        );
    }
    return null;
  }
  static getPointOnLine(t, n, a, s, l, h, c) {
    h === void 0 && (h = n), c === void 0 && (c = a);
    var f = (l - a) / (s - n + 1e-8),
      p = Math.sqrt((t * t) / (1 + f * f));
    s < n && (p *= -1);
    var m = f * p,
      x;
    if (s === n) x = { x: h, y: c + m };
    else if ((c - a) / (h - n + 1e-8) === f) x = { x: h + p, y: c + m };
    else {
      var C,
        _,
        y = this.getLineLength(n, a, s, l),
        P = (h - n) * (s - n) + (c - a) * (l - a);
      (P = P / (y * y)), (C = n + P * (s - n)), (_ = a + P * (l - a));
      var k = this.getLineLength(h, c, C, _),
        R = Math.sqrt(t * t - k * k);
      (p = Math.sqrt((R * R) / (1 + f * f))),
        s < n && (p *= -1),
        (m = f * p),
        (x = { x: C + p, y: _ + m });
    }
    return x;
  }
  static getPointOnCubicBezier(t, n, a, s, l, h, c, f, p) {
    function m(k) {
      return k * k * k;
    }
    function x(k) {
      return 3 * k * k * (1 - k);
    }
    function C(k) {
      return 3 * k * (1 - k) * (1 - k);
    }
    function _(k) {
      return (1 - k) * (1 - k) * (1 - k);
    }
    var y = f * m(t) + h * x(t) + s * C(t) + n * _(t),
      P = p * m(t) + c * x(t) + l * C(t) + a * _(t);
    return { x: y, y: P };
  }
  static getPointOnQuadraticBezier(t, n, a, s, l, h, c) {
    function f(_) {
      return _ * _;
    }
    function p(_) {
      return 2 * _ * (1 - _);
    }
    function m(_) {
      return (1 - _) * (1 - _);
    }
    var x = h * f(t) + s * p(t) + n * m(t),
      C = c * f(t) + l * p(t) + a * m(t);
    return { x, y: C };
  }
  static getPointOnEllipticalArc(t, n, a, s, l, h) {
    var c = Math.cos(h),
      f = Math.sin(h),
      p = { x: a * Math.cos(l), y: s * Math.sin(l) };
    return { x: t + (p.x * c - p.y * f), y: n + (p.x * f + p.y * c) };
  }
  static parsePathData(t) {
    if (!t) return [];
    var n = t,
      a = [
        "m",
        "M",
        "l",
        "L",
        "v",
        "V",
        "h",
        "H",
        "z",
        "Z",
        "c",
        "C",
        "q",
        "Q",
        "t",
        "T",
        "s",
        "S",
        "a",
        "A",
      ];
    n = n.replace(new RegExp(" ", "g"), ",");
    for (var s = 0; s < a.length; s++)
      n = n.replace(new RegExp(a[s], "g"), "|" + a[s]);
    var l = n.split("|"),
      h = [],
      c = [],
      f = 0,
      p = 0,
      m = /([-+]?((\d+\.\d+)|((\d+)|(\.\d+)))(?:e[-+]?\d+)?)/gi,
      x;
    for (s = 1; s < l.length; s++) {
      var C = l[s],
        _ = C.charAt(0);
      for (C = C.slice(1), c.length = 0; (x = m.exec(C)); ) c.push(x[0]);
      for (var y = [], P = 0, k = c.length; P < k; P++) {
        if (c[P] === "00") {
          y.push(0, 0);
          continue;
        }
        var R = parseFloat(c[P]);
        isNaN(R) ? y.push(0) : y.push(R);
      }
      for (; y.length > 0 && !isNaN(y[0]); ) {
        var F = "",
          v = [],
          w = f,
          E = p,
          N,
          G,
          T,
          z,
          L,
          O,
          K,
          W,
          ne,
          X;
        switch (_) {
          case "l":
            (f += y.shift()), (p += y.shift()), (F = "L"), v.push(f, p);
            break;
          case "L":
            (f = y.shift()), (p = y.shift()), v.push(f, p);
            break;
          case "m":
            var se = y.shift(),
              ge = y.shift();
            if (
              ((f += se),
              (p += ge),
              (F = "M"),
              h.length > 2 && h[h.length - 1].command === "z")
            ) {
              for (var B = h.length - 2; B >= 0; B--)
                if (h[B].command === "M") {
                  (f = h[B].points[0] + se), (p = h[B].points[1] + ge);
                  break;
                }
            }
            v.push(f, p), (_ = "l");
            break;
          case "M":
            (f = y.shift()),
              (p = y.shift()),
              (F = "M"),
              v.push(f, p),
              (_ = "L");
            break;
          case "h":
            (f += y.shift()), (F = "L"), v.push(f, p);
            break;
          case "H":
            (f = y.shift()), (F = "L"), v.push(f, p);
            break;
          case "v":
            (p += y.shift()), (F = "L"), v.push(f, p);
            break;
          case "V":
            (p = y.shift()), (F = "L"), v.push(f, p);
            break;
          case "C":
            v.push(y.shift(), y.shift(), y.shift(), y.shift()),
              (f = y.shift()),
              (p = y.shift()),
              v.push(f, p);
            break;
          case "c":
            v.push(f + y.shift(), p + y.shift(), f + y.shift(), p + y.shift()),
              (f += y.shift()),
              (p += y.shift()),
              (F = "C"),
              v.push(f, p);
            break;
          case "S":
            (G = f),
              (T = p),
              (N = h[h.length - 1]),
              N.command === "C" &&
                ((G = f + (f - N.points[2])), (T = p + (p - N.points[3]))),
              v.push(G, T, y.shift(), y.shift()),
              (f = y.shift()),
              (p = y.shift()),
              (F = "C"),
              v.push(f, p);
            break;
          case "s":
            (G = f),
              (T = p),
              (N = h[h.length - 1]),
              N.command === "C" &&
                ((G = f + (f - N.points[2])), (T = p + (p - N.points[3]))),
              v.push(G, T, f + y.shift(), p + y.shift()),
              (f += y.shift()),
              (p += y.shift()),
              (F = "C"),
              v.push(f, p);
            break;
          case "Q":
            v.push(y.shift(), y.shift()),
              (f = y.shift()),
              (p = y.shift()),
              v.push(f, p);
            break;
          case "q":
            v.push(f + y.shift(), p + y.shift()),
              (f += y.shift()),
              (p += y.shift()),
              (F = "Q"),
              v.push(f, p);
            break;
          case "T":
            (G = f),
              (T = p),
              (N = h[h.length - 1]),
              N.command === "Q" &&
                ((G = f + (f - N.points[0])), (T = p + (p - N.points[1]))),
              (f = y.shift()),
              (p = y.shift()),
              (F = "Q"),
              v.push(G, T, f, p);
            break;
          case "t":
            (G = f),
              (T = p),
              (N = h[h.length - 1]),
              N.command === "Q" &&
                ((G = f + (f - N.points[0])), (T = p + (p - N.points[1]))),
              (f += y.shift()),
              (p += y.shift()),
              (F = "Q"),
              v.push(G, T, f, p);
            break;
          case "A":
            (z = y.shift()),
              (L = y.shift()),
              (O = y.shift()),
              (K = y.shift()),
              (W = y.shift()),
              (ne = f),
              (X = p),
              (f = y.shift()),
              (p = y.shift()),
              (F = "A"),
              (v = this.convertEndpointToCenterParameterization(
                ne,
                X,
                f,
                p,
                K,
                W,
                z,
                L,
                O
              ));
            break;
          case "a":
            (z = y.shift()),
              (L = y.shift()),
              (O = y.shift()),
              (K = y.shift()),
              (W = y.shift()),
              (ne = f),
              (X = p),
              (f += y.shift()),
              (p += y.shift()),
              (F = "A"),
              (v = this.convertEndpointToCenterParameterization(
                ne,
                X,
                f,
                p,
                K,
                W,
                z,
                L,
                O
              ));
            break;
        }
        h.push({
          command: F || _,
          points: v,
          start: { x: w, y: E },
          pathLength: this.calcLength(w, E, F || _, v),
        });
      }
      (_ === "z" || _ === "Z") &&
        h.push({ command: "z", points: [], start: void 0, pathLength: 0 });
    }
    return h;
  }
  static calcLength(t, n, a, s) {
    var l,
      h,
      c,
      f,
      p = qe;
    switch (a) {
      case "L":
        return p.getLineLength(t, n, s[0], s[1]);
      case "C":
        return (0, yn.getCubicArcLength)(
          [t, s[0], s[2], s[4]],
          [n, s[1], s[3], s[5]],
          1
        );
      case "Q":
        return (0, yn.getQuadraticArcLength)(
          [t, s[0], s[2]],
          [n, s[1], s[3]],
          1
        );
      case "A":
        l = 0;
        var m = s[4],
          x = s[5],
          C = s[4] + x,
          _ = Math.PI / 180;
        if (
          (Math.abs(m - C) < _ && (_ = Math.abs(m - C)),
          (h = p.getPointOnEllipticalArc(s[0], s[1], s[2], s[3], m, 0)),
          x < 0)
        )
          for (f = m - _; f > C; f -= _)
            (c = p.getPointOnEllipticalArc(s[0], s[1], s[2], s[3], f, 0)),
              (l += p.getLineLength(h.x, h.y, c.x, c.y)),
              (h = c);
        else
          for (f = m + _; f < C; f += _)
            (c = p.getPointOnEllipticalArc(s[0], s[1], s[2], s[3], f, 0)),
              (l += p.getLineLength(h.x, h.y, c.x, c.y)),
              (h = c);
        return (
          (c = p.getPointOnEllipticalArc(s[0], s[1], s[2], s[3], C, 0)),
          (l += p.getLineLength(h.x, h.y, c.x, c.y)),
          l
        );
    }
    return 0;
  }
  static convertEndpointToCenterParameterization(t, n, a, s, l, h, c, f, p) {
    var m = p * (Math.PI / 180),
      x = (Math.cos(m) * (t - a)) / 2 + (Math.sin(m) * (n - s)) / 2,
      C = (-1 * Math.sin(m) * (t - a)) / 2 + (Math.cos(m) * (n - s)) / 2,
      _ = (x * x) / (c * c) + (C * C) / (f * f);
    _ > 1 && ((c *= Math.sqrt(_)), (f *= Math.sqrt(_)));
    var y = Math.sqrt(
      (c * c * (f * f) - c * c * (C * C) - f * f * (x * x)) /
        (c * c * (C * C) + f * f * (x * x))
    );
    l === h && (y *= -1), isNaN(y) && (y = 0);
    var P = (y * c * C) / f,
      k = (y * -f * x) / c,
      R = (t + a) / 2 + Math.cos(m) * P - Math.sin(m) * k,
      F = (n + s) / 2 + Math.sin(m) * P + Math.cos(m) * k,
      v = function (L) {
        return Math.sqrt(L[0] * L[0] + L[1] * L[1]);
      },
      w = function (L, O) {
        return (L[0] * O[0] + L[1] * O[1]) / (v(L) * v(O));
      },
      E = function (L, O) {
        return (L[0] * O[1] < L[1] * O[0] ? -1 : 1) * Math.acos(w(L, O));
      },
      N = E([1, 0], [(x - P) / c, (C - k) / f]),
      G = [(x - P) / c, (C - k) / f],
      T = [(-1 * x - P) / c, (-1 * C - k) / f],
      z = E(G, T);
    return (
      w(G, T) <= -1 && (z = Math.PI),
      w(G, T) >= 1 && (z = 0),
      h === 0 && z > 0 && (z = z - 2 * Math.PI),
      h === 1 && z < 0 && (z = z + 2 * Math.PI),
      [R, F, c, f, N, z, m, h]
    );
  }
}
Tn.Path = qe;
qe.prototype.className = "Path";
qe.prototype._attrsAffectingSize = ["data"];
(0, F1._registerNode)(qe);
R1.Factory.addGetterSetter(qe, "data");
Object.defineProperty(Ca, "__esModule", { value: !0 });
Ca.Arrow = void 0;
const Pa = fe,
  A1 = si,
  i0 = re,
  M1 = ce,
  dh = Tn;
class qr extends A1.Line {
  _sceneFunc(t) {
    super._sceneFunc(t);
    var n = Math.PI * 2,
      a = this.points(),
      s = a,
      l = this.tension() !== 0 && a.length > 4;
    l && (s = this.getTensionPoints());
    var h = this.pointerLength(),
      c = a.length,
      f,
      p;
    if (l) {
      const C = [
          s[s.length - 4],
          s[s.length - 3],
          s[s.length - 2],
          s[s.length - 1],
          a[c - 2],
          a[c - 1],
        ],
        _ = dh.Path.calcLength(s[s.length - 4], s[s.length - 3], "C", C),
        y = dh.Path.getPointOnQuadraticBezier(
          Math.min(1, 1 - h / _),
          C[0],
          C[1],
          C[2],
          C[3],
          C[4],
          C[5]
        );
      (f = a[c - 2] - y.x), (p = a[c - 1] - y.y);
    } else (f = a[c - 2] - a[c - 4]), (p = a[c - 1] - a[c - 3]);
    var m = (Math.atan2(p, f) + n) % n,
      x = this.pointerWidth();
    this.pointerAtEnding() &&
      (t.save(),
      t.beginPath(),
      t.translate(a[c - 2], a[c - 1]),
      t.rotate(m),
      t.moveTo(0, 0),
      t.lineTo(-h, x / 2),
      t.lineTo(-h, -x / 2),
      t.closePath(),
      t.restore(),
      this.__fillStroke(t)),
      this.pointerAtBeginning() &&
        (t.save(),
        t.beginPath(),
        t.translate(a[0], a[1]),
        l
          ? ((f = (s[0] + s[2]) / 2 - a[0]), (p = (s[1] + s[3]) / 2 - a[1]))
          : ((f = a[2] - a[0]), (p = a[3] - a[1])),
        t.rotate((Math.atan2(-p, -f) + n) % n),
        t.moveTo(0, 0),
        t.lineTo(-h, x / 2),
        t.lineTo(-h, -x / 2),
        t.closePath(),
        t.restore(),
        this.__fillStroke(t));
  }
  __fillStroke(t) {
    var n = this.dashEnabled();
    n && ((this.attrs.dashEnabled = !1), t.setLineDash([])),
      t.fillStrokeShape(this),
      n && (this.attrs.dashEnabled = !0);
  }
  getSelfRect() {
    const t = super.getSelfRect(),
      n = this.pointerWidth() / 2;
    return {
      x: t.x - n,
      y: t.y - n,
      width: t.width + n * 2,
      height: t.height + n * 2,
    };
  }
}
Ca.Arrow = qr;
qr.prototype.className = "Arrow";
(0, M1._registerNode)(qr);
Pa.Factory.addGetterSetter(
  qr,
  "pointerLength",
  10,
  (0, i0.getNumberValidator)()
);
Pa.Factory.addGetterSetter(
  qr,
  "pointerWidth",
  10,
  (0, i0.getNumberValidator)()
);
Pa.Factory.addGetterSetter(qr, "pointerAtBeginning", !1);
Pa.Factory.addGetterSetter(qr, "pointerAtEnding", !0);
var Ea = {};
Object.defineProperty(Ea, "__esModule", { value: !0 });
Ea.Circle = void 0;
const L1 = fe,
  D1 = $e,
  I1 = re,
  O1 = ce;
class Nn extends D1.Shape {
  _sceneFunc(t) {
    t.beginPath(),
      t.arc(0, 0, this.attrs.radius || 0, 0, Math.PI * 2, !1),
      t.closePath(),
      t.fillStrokeShape(this);
  }
  getWidth() {
    return this.radius() * 2;
  }
  getHeight() {
    return this.radius() * 2;
  }
  setWidth(t) {
    this.radius() !== t / 2 && this.radius(t / 2);
  }
  setHeight(t) {
    this.radius() !== t / 2 && this.radius(t / 2);
  }
}
Ea.Circle = Nn;
Nn.prototype._centroid = !0;
Nn.prototype.className = "Circle";
Nn.prototype._attrsAffectingSize = ["radius"];
(0, O1._registerNode)(Nn);
L1.Factory.addGetterSetter(Nn, "radius", 0, (0, I1.getNumberValidator)());
var ka = {};
Object.defineProperty(ka, "__esModule", { value: !0 });
ka.Ellipse = void 0;
const Zo = fe,
  G1 = $e,
  a0 = re,
  U1 = ce;
class Rr extends G1.Shape {
  _sceneFunc(t) {
    var n = this.radiusX(),
      a = this.radiusY();
    t.beginPath(),
      t.save(),
      n !== a && t.scale(1, a / n),
      t.arc(0, 0, n, 0, Math.PI * 2, !1),
      t.restore(),
      t.closePath(),
      t.fillStrokeShape(this);
  }
  getWidth() {
    return this.radiusX() * 2;
  }
  getHeight() {
    return this.radiusY() * 2;
  }
  setWidth(t) {
    this.radiusX(t / 2);
  }
  setHeight(t) {
    this.radiusY(t / 2);
  }
}
ka.Ellipse = Rr;
Rr.prototype.className = "Ellipse";
Rr.prototype._centroid = !0;
Rr.prototype._attrsAffectingSize = ["radiusX", "radiusY"];
(0, U1._registerNode)(Rr);
Zo.Factory.addComponentsGetterSetter(Rr, "radius", ["x", "y"]);
Zo.Factory.addGetterSetter(Rr, "radiusX", 0, (0, a0.getNumberValidator)());
Zo.Factory.addGetterSetter(Rr, "radiusY", 0, (0, a0.getNumberValidator)());
var Ta = {};
Object.defineProperty(Ta, "__esModule", { value: !0 });
Ta.Image = void 0;
const ko = Be,
  Qr = fe,
  z1 = $e,
  B1 = ce,
  oi = re;
let $t = class s0 extends z1.Shape {
  constructor(t) {
    super(t),
      this.on("imageChange.konva", () => {
        this._setImageLoad();
      }),
      this._setImageLoad();
  }
  _setImageLoad() {
    const t = this.image();
    (t && t.complete) ||
      (t && t.readyState === 4) ||
      (t &&
        t.addEventListener &&
        t.addEventListener("load", () => {
          this._requestDraw();
        }));
  }
  _useBufferCanvas() {
    return super._useBufferCanvas(!0);
  }
  _sceneFunc(t) {
    const n = this.getWidth(),
      a = this.getHeight(),
      s = this.cornerRadius(),
      l = this.attrs.image;
    let h;
    if (l) {
      const c = this.attrs.cropWidth,
        f = this.attrs.cropHeight;
      c && f
        ? (h = [l, this.cropX(), this.cropY(), c, f, 0, 0, n, a])
        : (h = [l, 0, 0, n, a]);
    }
    (this.hasFill() || this.hasStroke() || s) &&
      (t.beginPath(),
      s ? ko.Util.drawRoundedRectPath(t, n, a, s) : t.rect(0, 0, n, a),
      t.closePath(),
      t.fillStrokeShape(this)),
      l && (s && t.clip(), t.drawImage.apply(t, h));
  }
  _hitFunc(t) {
    var n = this.width(),
      a = this.height(),
      s = this.cornerRadius();
    t.beginPath(),
      s ? ko.Util.drawRoundedRectPath(t, n, a, s) : t.rect(0, 0, n, a),
      t.closePath(),
      t.fillStrokeShape(this);
  }
  getWidth() {
    var t, n;
    return (t = this.attrs.width) !== null && t !== void 0
      ? t
      : (n = this.image()) === null || n === void 0
      ? void 0
      : n.width;
  }
  getHeight() {
    var t, n;
    return (t = this.attrs.height) !== null && t !== void 0
      ? t
      : (n = this.image()) === null || n === void 0
      ? void 0
      : n.height;
  }
  static fromURL(t, n, a = null) {
    var s = ko.Util.createImageElement();
    (s.onload = function () {
      var l = new s0({ image: s });
      n(l);
    }),
      (s.onerror = a),
      (s.crossOrigin = "Anonymous"),
      (s.src = t);
  }
};
Ta.Image = $t;
$t.prototype.className = "Image";
(0, B1._registerNode)($t);
Qr.Factory.addGetterSetter(
  $t,
  "cornerRadius",
  0,
  (0, oi.getNumberOrArrayOfNumbersValidator)(4)
);
Qr.Factory.addGetterSetter($t, "image");
Qr.Factory.addComponentsGetterSetter($t, "crop", ["x", "y", "width", "height"]);
Qr.Factory.addGetterSetter($t, "cropX", 0, (0, oi.getNumberValidator)());
Qr.Factory.addGetterSetter($t, "cropY", 0, (0, oi.getNumberValidator)());
Qr.Factory.addGetterSetter($t, "cropWidth", 0, (0, oi.getNumberValidator)());
Qr.Factory.addGetterSetter($t, "cropHeight", 0, (0, oi.getNumberValidator)());
var Sn = {};
Object.defineProperty(Sn, "__esModule", { value: !0 });
Sn.Tag = Sn.Label = void 0;
const Na = fe,
  H1 = $e,
  V1 = En,
  el = re,
  o0 = ce;
var l0 = [
    "fontFamily",
    "fontSize",
    "fontStyle",
    "padding",
    "lineHeight",
    "text",
    "width",
    "height",
    "pointerDirection",
    "pointerWidth",
    "pointerHeight",
  ],
  j1 = "Change.konva",
  W1 = "none",
  Go = "up",
  Uo = "right",
  zo = "down",
  Bo = "left",
  K1 = l0.length;
class tl extends V1.Group {
  constructor(t) {
    super(t),
      this.on("add.konva", function (n) {
        this._addListeners(n.child), this._sync();
      });
  }
  getText() {
    return this.find("Text")[0];
  }
  getTag() {
    return this.find("Tag")[0];
  }
  _addListeners(t) {
    var n = this,
      a,
      s = function () {
        n._sync();
      };
    for (a = 0; a < K1; a++) t.on(l0[a] + j1, s);
  }
  getWidth() {
    return this.getText().width();
  }
  getHeight() {
    return this.getText().height();
  }
  _sync() {
    var t = this.getText(),
      n = this.getTag(),
      a,
      s,
      l,
      h,
      c,
      f,
      p;
    if (t && n) {
      switch (
        ((a = t.width()),
        (s = t.height()),
        (l = n.pointerDirection()),
        (h = n.pointerWidth()),
        (p = n.pointerHeight()),
        (c = 0),
        (f = 0),
        l)
      ) {
        case Go:
          (c = a / 2), (f = -1 * p);
          break;
        case Uo:
          (c = a + h), (f = s / 2);
          break;
        case zo:
          (c = a / 2), (f = s + p);
          break;
        case Bo:
          (c = -1 * h), (f = s / 2);
          break;
      }
      n.setAttrs({ x: -1 * c, y: -1 * f, width: a, height: s }),
        t.setAttrs({ x: -1 * c, y: -1 * f });
    }
  }
}
Sn.Label = tl;
tl.prototype.className = "Label";
(0, o0._registerNode)(tl);
class $r extends H1.Shape {
  _sceneFunc(t) {
    var n = this.width(),
      a = this.height(),
      s = this.pointerDirection(),
      l = this.pointerWidth(),
      h = this.pointerHeight(),
      c = this.cornerRadius();
    let f = 0,
      p = 0,
      m = 0,
      x = 0;
    typeof c == "number"
      ? (f = p = m = x = Math.min(c, n / 2, a / 2))
      : ((f = Math.min(c[0] || 0, n / 2, a / 2)),
        (p = Math.min(c[1] || 0, n / 2, a / 2)),
        (x = Math.min(c[2] || 0, n / 2, a / 2)),
        (m = Math.min(c[3] || 0, n / 2, a / 2))),
      t.beginPath(),
      t.moveTo(f, 0),
      s === Go &&
        (t.lineTo((n - l) / 2, 0),
        t.lineTo(n / 2, -1 * h),
        t.lineTo((n + l) / 2, 0)),
      t.lineTo(n - p, 0),
      t.arc(n - p, p, p, (Math.PI * 3) / 2, 0, !1),
      s === Uo &&
        (t.lineTo(n, (a - h) / 2),
        t.lineTo(n + l, a / 2),
        t.lineTo(n, (a + h) / 2)),
      t.lineTo(n, a - x),
      t.arc(n - x, a - x, x, 0, Math.PI / 2, !1),
      s === zo &&
        (t.lineTo((n + l) / 2, a),
        t.lineTo(n / 2, a + h),
        t.lineTo((n - l) / 2, a)),
      t.lineTo(m, a),
      t.arc(m, a - m, m, Math.PI / 2, Math.PI, !1),
      s === Bo &&
        (t.lineTo(0, (a + h) / 2),
        t.lineTo(-1 * l, a / 2),
        t.lineTo(0, (a - h) / 2)),
      t.lineTo(0, f),
      t.arc(f, f, f, Math.PI, (Math.PI * 3) / 2, !1),
      t.closePath(),
      t.fillStrokeShape(this);
  }
  getSelfRect() {
    var t = 0,
      n = 0,
      a = this.pointerWidth(),
      s = this.pointerHeight(),
      l = this.pointerDirection(),
      h = this.width(),
      c = this.height();
    return (
      l === Go
        ? ((n -= s), (c += s))
        : l === zo
        ? (c += s)
        : l === Bo
        ? ((t -= a * 1.5), (h += a))
        : l === Uo && (h += a * 1.5),
      { x: t, y: n, width: h, height: c }
    );
  }
}
Sn.Tag = $r;
$r.prototype.className = "Tag";
(0, o0._registerNode)($r);
Na.Factory.addGetterSetter($r, "pointerDirection", W1);
Na.Factory.addGetterSetter($r, "pointerWidth", 0, (0, el.getNumberValidator)());
Na.Factory.addGetterSetter(
  $r,
  "pointerHeight",
  0,
  (0, el.getNumberValidator)()
);
Na.Factory.addGetterSetter(
  $r,
  "cornerRadius",
  0,
  (0, el.getNumberOrArrayOfNumbersValidator)(4)
);
var li = {};
Object.defineProperty(li, "__esModule", { value: !0 });
li.Rect = void 0;
const Y1 = fe,
  X1 = $e,
  q1 = ce,
  Q1 = Be,
  $1 = re;
class Ra extends X1.Shape {
  _sceneFunc(t) {
    var n = this.cornerRadius(),
      a = this.width(),
      s = this.height();
    t.beginPath(),
      n ? Q1.Util.drawRoundedRectPath(t, a, s, n) : t.rect(0, 0, a, s),
      t.closePath(),
      t.fillStrokeShape(this);
  }
}
li.Rect = Ra;
Ra.prototype.className = "Rect";
(0, q1._registerNode)(Ra);
Y1.Factory.addGetterSetter(
  Ra,
  "cornerRadius",
  0,
  (0, $1.getNumberOrArrayOfNumbersValidator)(4)
);
var ba = {};
Object.defineProperty(ba, "__esModule", { value: !0 });
ba.RegularPolygon = void 0;
const u0 = fe,
  J1 = $e,
  h0 = re,
  Z1 = ce;
class Jr extends J1.Shape {
  _sceneFunc(t) {
    const n = this._getPoints();
    t.beginPath(), t.moveTo(n[0].x, n[0].y);
    for (var a = 1; a < n.length; a++) t.lineTo(n[a].x, n[a].y);
    t.closePath(), t.fillStrokeShape(this);
  }
  _getPoints() {
    const t = this.attrs.sides,
      n = this.attrs.radius || 0,
      a = [];
    for (var s = 0; s < t; s++)
      a.push({
        x: n * Math.sin((s * 2 * Math.PI) / t),
        y: -1 * n * Math.cos((s * 2 * Math.PI) / t),
      });
    return a;
  }
  getSelfRect() {
    const t = this._getPoints();
    var n = t[0].x,
      a = t[0].y,
      s = t[0].x,
      l = t[0].y;
    return (
      t.forEach((h) => {
        (n = Math.min(n, h.x)),
          (a = Math.max(a, h.x)),
          (s = Math.min(s, h.y)),
          (l = Math.max(l, h.y));
      }),
      { x: n, y: s, width: a - n, height: l - s }
    );
  }
  getWidth() {
    return this.radius() * 2;
  }
  getHeight() {
    return this.radius() * 2;
  }
  setWidth(t) {
    this.radius(t / 2);
  }
  setHeight(t) {
    this.radius(t / 2);
  }
}
ba.RegularPolygon = Jr;
Jr.prototype.className = "RegularPolygon";
Jr.prototype._centroid = !0;
Jr.prototype._attrsAffectingSize = ["radius"];
(0, Z1._registerNode)(Jr);
u0.Factory.addGetterSetter(Jr, "radius", 0, (0, h0.getNumberValidator)());
u0.Factory.addGetterSetter(Jr, "sides", 0, (0, h0.getNumberValidator)());
var Fa = {};
Object.defineProperty(Fa, "__esModule", { value: !0 });
Fa.Ring = void 0;
const d0 = fe,
  ef = $e,
  c0 = re,
  tf = ce;
var ch = Math.PI * 2;
class Zr extends ef.Shape {
  _sceneFunc(t) {
    t.beginPath(),
      t.arc(0, 0, this.innerRadius(), 0, ch, !1),
      t.moveTo(this.outerRadius(), 0),
      t.arc(0, 0, this.outerRadius(), ch, 0, !0),
      t.closePath(),
      t.fillStrokeShape(this);
  }
  getWidth() {
    return this.outerRadius() * 2;
  }
  getHeight() {
    return this.outerRadius() * 2;
  }
  setWidth(t) {
    this.outerRadius(t / 2);
  }
  setHeight(t) {
    this.outerRadius(t / 2);
  }
}
Fa.Ring = Zr;
Zr.prototype.className = "Ring";
Zr.prototype._centroid = !0;
Zr.prototype._attrsAffectingSize = ["innerRadius", "outerRadius"];
(0, tf._registerNode)(Zr);
d0.Factory.addGetterSetter(Zr, "innerRadius", 0, (0, c0.getNumberValidator)());
d0.Factory.addGetterSetter(Zr, "outerRadius", 0, (0, c0.getNumberValidator)());
var Aa = {};
Object.defineProperty(Aa, "__esModule", { value: !0 });
Aa.Sprite = void 0;
const en = fe,
  rf = $e,
  nf = kn,
  f0 = re,
  af = ce;
class Jt extends rf.Shape {
  constructor(t) {
    super(t),
      (this._updated = !0),
      (this.anim = new nf.Animation(() => {
        var n = this._updated;
        return (this._updated = !1), n;
      })),
      this.on("animationChange.konva", function () {
        this.frameIndex(0);
      }),
      this.on("frameIndexChange.konva", function () {
        this._updated = !0;
      }),
      this.on("frameRateChange.konva", function () {
        this.anim.isRunning() &&
          (clearInterval(this.interval), this._setInterval());
      });
  }
  _sceneFunc(t) {
    var n = this.animation(),
      a = this.frameIndex(),
      s = a * 4,
      l = this.animations()[n],
      h = this.frameOffsets(),
      c = l[s + 0],
      f = l[s + 1],
      p = l[s + 2],
      m = l[s + 3],
      x = this.image();
    if (
      ((this.hasFill() || this.hasStroke()) &&
        (t.beginPath(),
        t.rect(0, 0, p, m),
        t.closePath(),
        t.fillStrokeShape(this)),
      x)
    )
      if (h) {
        var C = h[n],
          _ = a * 2;
        t.drawImage(x, c, f, p, m, C[_ + 0], C[_ + 1], p, m);
      } else t.drawImage(x, c, f, p, m, 0, 0, p, m);
  }
  _hitFunc(t) {
    var n = this.animation(),
      a = this.frameIndex(),
      s = a * 4,
      l = this.animations()[n],
      h = this.frameOffsets(),
      c = l[s + 2],
      f = l[s + 3];
    if ((t.beginPath(), h)) {
      var p = h[n],
        m = a * 2;
      t.rect(p[m + 0], p[m + 1], c, f);
    } else t.rect(0, 0, c, f);
    t.closePath(), t.fillShape(this);
  }
  _useBufferCanvas() {
    return super._useBufferCanvas(!0);
  }
  _setInterval() {
    var t = this;
    this.interval = setInterval(function () {
      t._updateIndex();
    }, 1e3 / this.frameRate());
  }
  start() {
    if (!this.isRunning()) {
      var t = this.getLayer();
      this.anim.setLayers(t), this._setInterval(), this.anim.start();
    }
  }
  stop() {
    this.anim.stop(), clearInterval(this.interval);
  }
  isRunning() {
    return this.anim.isRunning();
  }
  _updateIndex() {
    var t = this.frameIndex(),
      n = this.animation(),
      a = this.animations(),
      s = a[n],
      l = s.length / 4;
    t < l - 1 ? this.frameIndex(t + 1) : this.frameIndex(0);
  }
}
Aa.Sprite = Jt;
Jt.prototype.className = "Sprite";
(0, af._registerNode)(Jt);
en.Factory.addGetterSetter(Jt, "animation");
en.Factory.addGetterSetter(Jt, "animations");
en.Factory.addGetterSetter(Jt, "frameOffsets");
en.Factory.addGetterSetter(Jt, "image");
en.Factory.addGetterSetter(Jt, "frameIndex", 0, (0, f0.getNumberValidator)());
en.Factory.addGetterSetter(Jt, "frameRate", 17, (0, f0.getNumberValidator)());
en.Factory.backCompat(Jt, {
  index: "frameIndex",
  getIndex: "getFrameIndex",
  setIndex: "setFrameIndex",
});
var Ma = {};
Object.defineProperty(Ma, "__esModule", { value: !0 });
Ma.Star = void 0;
const rl = fe,
  sf = $e,
  nl = re,
  of = ce;
class br extends sf.Shape {
  _sceneFunc(t) {
    var n = this.innerRadius(),
      a = this.outerRadius(),
      s = this.numPoints();
    t.beginPath(), t.moveTo(0, 0 - a);
    for (var l = 1; l < s * 2; l++) {
      var h = l % 2 === 0 ? a : n,
        c = h * Math.sin((l * Math.PI) / s),
        f = -1 * h * Math.cos((l * Math.PI) / s);
      t.lineTo(c, f);
    }
    t.closePath(), t.fillStrokeShape(this);
  }
  getWidth() {
    return this.outerRadius() * 2;
  }
  getHeight() {
    return this.outerRadius() * 2;
  }
  setWidth(t) {
    this.outerRadius(t / 2);
  }
  setHeight(t) {
    this.outerRadius(t / 2);
  }
}
Ma.Star = br;
br.prototype.className = "Star";
br.prototype._centroid = !0;
br.prototype._attrsAffectingSize = ["innerRadius", "outerRadius"];
(0, of._registerNode)(br);
rl.Factory.addGetterSetter(br, "numPoints", 5, (0, nl.getNumberValidator)());
rl.Factory.addGetterSetter(br, "innerRadius", 0, (0, nl.getNumberValidator)());
rl.Factory.addGetterSetter(br, "outerRadius", 0, (0, nl.getNumberValidator)());
var Kr = {};
Object.defineProperty(Kr, "__esModule", { value: !0 });
Kr.Text = Kr.stringToArray = void 0;
const Ho = Be,
  dt = fe,
  lf = $e,
  To = ce,
  Fr = re,
  uf = ce;
function g0(d) {
  return Array.from(d);
}
Kr.stringToArray = g0;
var _n = "auto",
  hf = "center",
  p0 = "inherit",
  $n = "justify",
  df = "Change.konva",
  cf = "2d",
  fh = "-",
  v0 = "left",
  ff = "text",
  gf = "Text",
  pf = "top",
  vf = "bottom",
  gh = "middle",
  m0 = "normal",
  mf = "px ",
  na = " ",
  yf = "right",
  ph = "rtl",
  _f = "word",
  Sf = "char",
  vh = "none",
  No = "…",
  y0 = [
    "direction",
    "fontFamily",
    "fontSize",
    "fontStyle",
    "fontVariant",
    "padding",
    "align",
    "verticalAlign",
    "lineHeight",
    "text",
    "width",
    "height",
    "wrap",
    "ellipsis",
    "letterSpacing",
  ],
  wf = y0.length;
function Cf(d) {
  return d
    .split(",")
    .map((t) => {
      t = t.trim();
      const n = t.indexOf(" ") >= 0,
        a = t.indexOf('"') >= 0 || t.indexOf("'") >= 0;
      return n && !a && (t = `"${t}"`), t;
    })
    .join(", ");
}
var ia;
function Ro() {
  return ia || ((ia = Ho.Util.createCanvasElement().getContext(cf)), ia);
}
function xf(d) {
  d.fillText(this._partialText, this._partialTextX, this._partialTextY);
}
function Pf(d) {
  d.setAttr("miterLimit", 2),
    d.strokeText(this._partialText, this._partialTextX, this._partialTextY);
}
function Ef(d) {
  return (
    (d = d || {}),
    !d.fillLinearGradientColorStops &&
      !d.fillRadialGradientColorStops &&
      !d.fillPatternImage &&
      (d.fill = d.fill || "black"),
    d
  );
}
class Ve extends lf.Shape {
  constructor(t) {
    super(Ef(t)), (this._partialTextX = 0), (this._partialTextY = 0);
    for (var n = 0; n < wf; n++) this.on(y0[n] + df, this._setTextData);
    this._setTextData();
  }
  _sceneFunc(t) {
    var n = this.textArr,
      a = n.length;
    if (this.text()) {
      var s = this.padding(),
        l = this.fontSize(),
        h = this.lineHeight() * l,
        c = this.verticalAlign(),
        f = this.direction(),
        p = 0,
        m = this.align(),
        x = this.getWidth(),
        C = this.letterSpacing(),
        _ = this.fill(),
        y = this.textDecoration(),
        P = y.indexOf("underline") !== -1,
        k = y.indexOf("line-through") !== -1,
        R;
      f = f === p0 ? t.direction : f;
      var F = h / 2,
        v = gh;
      if (To.Konva._fixTextRendering) {
        var w = this.measureSize("M");
        (v = "alphabetic"),
          (F =
            (w.fontBoundingBoxAscent - w.fontBoundingBoxDescent) / 2 + h / 2);
      }
      var E = 0,
        N = 0;
      for (
        f === ph && t.setAttr("direction", f),
          t.setAttr("font", this._getContextFont()),
          t.setAttr("textBaseline", v),
          t.setAttr("textAlign", v0),
          c === gh
            ? (p = (this.getHeight() - a * h - s * 2) / 2)
            : c === vf && (p = this.getHeight() - a * h - s * 2),
          t.translate(s, p + s),
          R = 0;
        R < a;
        R++
      ) {
        var E = 0,
          N = 0,
          G = n[R],
          T = G.text,
          z = G.width,
          L = G.lastInParagraph,
          O,
          K,
          W;
        if (
          (t.save(),
          m === yf
            ? (E += x - z - s * 2)
            : m === hf && (E += (x - z - s * 2) / 2),
          P)
        ) {
          t.save(), t.beginPath();
          let Q = To.Konva._fixTextRendering
            ? Math.round(l / 4)
            : Math.round(l / 2);
          const H = E,
            Y = F + N + Q;
          t.moveTo(H, Y),
            (O = T.split(" ").length - 1),
            (K = O === 0),
            (W = m === $n && !L ? x - s * 2 : z),
            t.lineTo(H + Math.round(W), Y),
            (t.lineWidth = l / 15);
          const ie = this._getLinearGradient();
          (t.strokeStyle = ie || _), t.stroke(), t.restore();
        }
        if (k) {
          t.save(), t.beginPath();
          let Q = To.Konva._fixTextRendering ? -Math.round(l / 4) : 0;
          t.moveTo(E, F + N + Q),
            (O = T.split(" ").length - 1),
            (K = O === 0),
            (W = m === $n && L && !K ? x - s * 2 : z),
            t.lineTo(E + Math.round(W), F + N + Q),
            (t.lineWidth = l / 15);
          const H = this._getLinearGradient();
          (t.strokeStyle = H || _), t.stroke(), t.restore();
        }
        if (f !== ph && (C !== 0 || m === $n)) {
          O = T.split(" ").length - 1;
          for (var ne = g0(T), X = 0; X < ne.length; X++) {
            var se = ne[X];
            se === " " && !L && m === $n && (E += (x - s * 2 - z) / O),
              (this._partialTextX = E),
              (this._partialTextY = F + N),
              (this._partialText = se),
              t.fillStrokeShape(this),
              (E += this.measureSize(se).width + C);
          }
        } else
          C !== 0 && t.setAttr("letterSpacing", `${C}px`),
            (this._partialTextX = E),
            (this._partialTextY = F + N),
            (this._partialText = T),
            t.fillStrokeShape(this);
        t.restore(), a > 1 && (F += h);
      }
    }
  }
  _hitFunc(t) {
    var n = this.getWidth(),
      a = this.getHeight();
    t.beginPath(), t.rect(0, 0, n, a), t.closePath(), t.fillStrokeShape(this);
  }
  setText(t) {
    var n = Ho.Util._isString(t) ? t : t == null ? "" : t + "";
    return this._setAttr(ff, n), this;
  }
  getWidth() {
    var t = this.attrs.width === _n || this.attrs.width === void 0;
    return t ? this.getTextWidth() + this.padding() * 2 : this.attrs.width;
  }
  getHeight() {
    var t = this.attrs.height === _n || this.attrs.height === void 0;
    return t
      ? this.fontSize() * this.textArr.length * this.lineHeight() +
          this.padding() * 2
      : this.attrs.height;
  }
  getTextWidth() {
    return this.textWidth;
  }
  getTextHeight() {
    return (
      Ho.Util.warn(
        "text.getTextHeight() method is deprecated. Use text.height() - for full height and text.fontSize() - for one line height."
      ),
      this.textHeight
    );
  }
  measureSize(t) {
    var n = Ro(),
      a = this.fontSize(),
      s;
    return (
      n.save(),
      (n.font = this._getContextFont()),
      (s = n.measureText(t)),
      n.restore(),
      {
        actualBoundingBoxAscent: s.actualBoundingBoxAscent,
        actualBoundingBoxDescent: s.actualBoundingBoxDescent,
        actualBoundingBoxLeft: s.actualBoundingBoxLeft,
        actualBoundingBoxRight: s.actualBoundingBoxRight,
        alphabeticBaseline: s.alphabeticBaseline,
        emHeightAscent: s.emHeightAscent,
        emHeightDescent: s.emHeightDescent,
        fontBoundingBoxAscent: s.fontBoundingBoxAscent,
        fontBoundingBoxDescent: s.fontBoundingBoxDescent,
        hangingBaseline: s.hangingBaseline,
        ideographicBaseline: s.ideographicBaseline,
        width: s.width,
        height: a,
      }
    );
  }
  _getContextFont() {
    return (
      this.fontStyle() +
      na +
      this.fontVariant() +
      na +
      (this.fontSize() + mf) +
      Cf(this.fontFamily())
    );
  }
  _addTextLine(t) {
    this.align() === $n && (t = t.trim());
    var a = this._getTextWidth(t);
    return this.textArr.push({ text: t, width: a, lastInParagraph: !1 });
  }
  _getTextWidth(t) {
    var n = this.letterSpacing(),
      a = t.length;
    return Ro().measureText(t).width + (a ? n * (a - 1) : 0);
  }
  _setTextData() {
    var t = this.text().split(`
`),
      n = +this.fontSize(),
      a = 0,
      s = this.lineHeight() * n,
      l = this.attrs.width,
      h = this.attrs.height,
      c = l !== _n && l !== void 0,
      f = h !== _n && h !== void 0,
      p = this.padding(),
      m = l - p * 2,
      x = h - p * 2,
      C = 0,
      _ = this.wrap(),
      y = _ !== vh,
      P = _ !== Sf && y,
      k = this.ellipsis();
    (this.textArr = []), (Ro().font = this._getContextFont());
    for (
      var R = k ? this._getTextWidth(No) : 0, F = 0, v = t.length;
      F < v;
      ++F
    ) {
      var w = t[F],
        E = this._getTextWidth(w);
      if (c && E > m)
        for (; w.length > 0; ) {
          for (var N = 0, G = w.length, T = "", z = 0; N < G; ) {
            var L = (N + G) >>> 1,
              O = w.slice(0, L + 1),
              K = this._getTextWidth(O) + R;
            K <= m ? ((N = L + 1), (T = O), (z = K)) : (G = L);
          }
          if (T) {
            if (P) {
              var W,
                ne = w[T.length],
                X = ne === na || ne === fh;
              X && z <= m
                ? (W = T.length)
                : (W = Math.max(T.lastIndexOf(na), T.lastIndexOf(fh)) + 1),
                W > 0 &&
                  ((N = W), (T = T.slice(0, N)), (z = this._getTextWidth(T)));
            }
            (T = T.trimRight()),
              this._addTextLine(T),
              (a = Math.max(a, z)),
              (C += s);
            var se = this._shouldHandleEllipsis(C);
            if (se) {
              this._tryToAddEllipsisToLastLine();
              break;
            }
            if (
              ((w = w.slice(N)),
              (w = w.trimLeft()),
              w.length > 0 && ((E = this._getTextWidth(w)), E <= m))
            ) {
              this._addTextLine(w), (C += s), (a = Math.max(a, E));
              break;
            }
          } else break;
        }
      else
        this._addTextLine(w),
          (C += s),
          (a = Math.max(a, E)),
          this._shouldHandleEllipsis(C) &&
            F < v - 1 &&
            this._tryToAddEllipsisToLastLine();
      if (
        (this.textArr[this.textArr.length - 1] &&
          (this.textArr[this.textArr.length - 1].lastInParagraph = !0),
        f && C + s > x)
      )
        break;
    }
    (this.textHeight = n), (this.textWidth = a);
  }
  _shouldHandleEllipsis(t) {
    var n = +this.fontSize(),
      a = this.lineHeight() * n,
      s = this.attrs.height,
      l = s !== _n && s !== void 0,
      h = this.padding(),
      c = s - h * 2,
      f = this.wrap(),
      p = f !== vh;
    return !p || (l && t + a > c);
  }
  _tryToAddEllipsisToLastLine() {
    var t = this.attrs.width,
      n = t !== _n && t !== void 0,
      a = this.padding(),
      s = t - a * 2,
      l = this.ellipsis(),
      h = this.textArr[this.textArr.length - 1];
    if (!(!h || !l)) {
      if (n) {
        var c = this._getTextWidth(h.text + No) < s;
        c || (h.text = h.text.slice(0, h.text.length - 3));
      }
      this.textArr.splice(this.textArr.length - 1, 1),
        this._addTextLine(h.text + No);
    }
  }
  getStrokeScaleEnabled() {
    return !0;
  }
  _useBufferCanvas() {
    const t =
        this.textDecoration().indexOf("underline") !== -1 ||
        this.textDecoration().indexOf("line-through") !== -1,
      n = this.hasShadow();
    return t && n ? !0 : super._useBufferCanvas();
  }
}
Kr.Text = Ve;
Ve.prototype._fillFunc = xf;
Ve.prototype._strokeFunc = Pf;
Ve.prototype.className = gf;
Ve.prototype._attrsAffectingSize = [
  "text",
  "fontSize",
  "padding",
  "wrap",
  "lineHeight",
  "letterSpacing",
];
(0, uf._registerNode)(Ve);
dt.Factory.overWriteSetter(Ve, "width", (0, Fr.getNumberOrAutoValidator)());
dt.Factory.overWriteSetter(Ve, "height", (0, Fr.getNumberOrAutoValidator)());
dt.Factory.addGetterSetter(Ve, "direction", p0);
dt.Factory.addGetterSetter(Ve, "fontFamily", "Arial");
dt.Factory.addGetterSetter(Ve, "fontSize", 12, (0, Fr.getNumberValidator)());
dt.Factory.addGetterSetter(Ve, "fontStyle", m0);
dt.Factory.addGetterSetter(Ve, "fontVariant", m0);
dt.Factory.addGetterSetter(Ve, "padding", 0, (0, Fr.getNumberValidator)());
dt.Factory.addGetterSetter(Ve, "align", v0);
dt.Factory.addGetterSetter(Ve, "verticalAlign", pf);
dt.Factory.addGetterSetter(Ve, "lineHeight", 1, (0, Fr.getNumberValidator)());
dt.Factory.addGetterSetter(Ve, "wrap", _f);
dt.Factory.addGetterSetter(Ve, "ellipsis", !1, (0, Fr.getBooleanValidator)());
dt.Factory.addGetterSetter(
  Ve,
  "letterSpacing",
  0,
  (0, Fr.getNumberValidator)()
);
dt.Factory.addGetterSetter(Ve, "text", "", (0, Fr.getStringValidator)());
dt.Factory.addGetterSetter(Ve, "textDecoration", "");
var La = {};
Object.defineProperty(La, "__esModule", { value: !0 });
La.TextPath = void 0;
const bo = Be,
  zt = fe,
  kf = $e,
  Jn = Tn,
  Fo = Kr,
  _0 = re,
  Tf = ce;
var Nf = "",
  S0 = "normal";
function w0(d) {
  d.fillText(this.partialText, 0, 0);
}
function C0(d) {
  d.strokeText(this.partialText, 0, 0);
}
class Je extends kf.Shape {
  constructor(t) {
    super(t),
      (this.dummyCanvas = bo.Util.createCanvasElement()),
      (this.dataArray = []),
      this._readDataAttribute(),
      this.on("dataChange.konva", function () {
        this._readDataAttribute(), this._setTextData();
      }),
      this.on(
        "textChange.konva alignChange.konva letterSpacingChange.konva kerningFuncChange.konva fontSizeChange.konva fontFamilyChange.konva",
        this._setTextData
      ),
      this._setTextData();
  }
  _getTextPathLength() {
    return Jn.Path.getPathLength(this.dataArray);
  }
  _getPointAtLength(t) {
    if (!this.attrs.data) return null;
    const n = this.pathLength;
    return t - 1 > n
      ? null
      : Jn.Path.getPointAtLengthOfDataArray(t, this.dataArray);
  }
  _readDataAttribute() {
    (this.dataArray = Jn.Path.parsePathData(this.attrs.data)),
      (this.pathLength = this._getTextPathLength());
  }
  _sceneFunc(t) {
    t.setAttr("font", this._getContextFont()),
      t.setAttr("textBaseline", this.textBaseline()),
      t.setAttr("textAlign", "left"),
      t.save();
    var n = this.textDecoration(),
      a = this.fill(),
      s = this.fontSize(),
      l = this.glyphInfo;
    n === "underline" && t.beginPath();
    for (var h = 0; h < l.length; h++) {
      t.save();
      var c = l[h].p0;
      t.translate(c.x, c.y),
        t.rotate(l[h].rotation),
        (this.partialText = l[h].text),
        t.fillStrokeShape(this),
        n === "underline" &&
          (h === 0 && t.moveTo(0, s / 2 + 1), t.lineTo(s, s / 2 + 1)),
        t.restore();
    }
    n === "underline" &&
      ((t.strokeStyle = a), (t.lineWidth = s / 20), t.stroke()),
      t.restore();
  }
  _hitFunc(t) {
    t.beginPath();
    var n = this.glyphInfo;
    if (n.length >= 1) {
      var a = n[0].p0;
      t.moveTo(a.x, a.y);
    }
    for (var s = 0; s < n.length; s++) {
      var l = n[s].p1;
      t.lineTo(l.x, l.y);
    }
    t.setAttr("lineWidth", this.fontSize()),
      t.setAttr("strokeStyle", this.colorKey),
      t.stroke();
  }
  getTextWidth() {
    return this.textWidth;
  }
  getTextHeight() {
    return (
      bo.Util.warn(
        "text.getTextHeight() method is deprecated. Use text.height() - for full height and text.fontSize() - for one line height."
      ),
      this.textHeight
    );
  }
  setText(t) {
    return Fo.Text.prototype.setText.call(this, t);
  }
  _getContextFont() {
    return Fo.Text.prototype._getContextFont.call(this);
  }
  _getTextSize(t) {
    var n = this.dummyCanvas,
      a = n.getContext("2d");
    a.save(), (a.font = this._getContextFont());
    var s = a.measureText(t);
    return (
      a.restore(),
      { width: s.width, height: parseInt(`${this.fontSize()}`, 10) }
    );
  }
  _setTextData() {
    const { width: t, height: n } = this._getTextSize(this.attrs.text);
    if (
      ((this.textWidth = t),
      (this.textHeight = n),
      (this.glyphInfo = []),
      !this.attrs.data)
    )
      return null;
    const a = this.letterSpacing(),
      s = this.align(),
      l = this.kerningFunc(),
      h = Math.max(
        this.textWidth + ((this.attrs.text || "").length - 1) * a,
        0
      );
    let c = 0;
    s === "center" && (c = Math.max(0, this.pathLength / 2 - h / 2)),
      s === "right" && (c = Math.max(0, this.pathLength - h));
    const f = (0, Fo.stringToArray)(this.text());
    let p = c;
    for (var m = 0; m < f.length; m++) {
      const x = this._getPointAtLength(p);
      if (!x) return;
      let C = this._getTextSize(f[m]).width + a;
      if (f[m] === " " && s === "justify") {
        const F = this.text().split(" ").length - 1;
        C += (this.pathLength - h) / F;
      }
      const _ = this._getPointAtLength(p + C);
      if (!_) return;
      const y = Jn.Path.getLineLength(x.x, x.y, _.x, _.y);
      let P = 0;
      if (l)
        try {
          P = l(f[m - 1], f[m]) * this.fontSize();
        } catch {
          P = 0;
        }
      (x.x += P), (_.x += P), (this.textWidth += P);
      const k = Jn.Path.getPointOnLine(P + y / 2, x.x, x.y, _.x, _.y),
        R = Math.atan2(_.y - x.y, _.x - x.x);
      this.glyphInfo.push({
        transposeX: k.x,
        transposeY: k.y,
        text: f[m],
        rotation: R,
        p0: x,
        p1: _,
      }),
        (p += C);
    }
  }
  getSelfRect() {
    if (!this.glyphInfo.length) return { x: 0, y: 0, width: 0, height: 0 };
    var t = [];
    this.glyphInfo.forEach(function (m) {
      t.push(m.p0.x), t.push(m.p0.y), t.push(m.p1.x), t.push(m.p1.y);
    });
    for (
      var n = t[0] || 0,
        a = t[0] || 0,
        s = t[1] || 0,
        l = t[1] || 0,
        h,
        c,
        f = 0;
      f < t.length / 2;
      f++
    )
      (h = t[f * 2]),
        (c = t[f * 2 + 1]),
        (n = Math.min(n, h)),
        (a = Math.max(a, h)),
        (s = Math.min(s, c)),
        (l = Math.max(l, c));
    var p = this.fontSize();
    return { x: n - p / 2, y: s - p / 2, width: a - n + p, height: l - s + p };
  }
  destroy() {
    return bo.Util.releaseCanvas(this.dummyCanvas), super.destroy();
  }
}
La.TextPath = Je;
Je.prototype._fillFunc = w0;
Je.prototype._strokeFunc = C0;
Je.prototype._fillFuncHit = w0;
Je.prototype._strokeFuncHit = C0;
Je.prototype.className = "TextPath";
Je.prototype._attrsAffectingSize = ["text", "fontSize", "data"];
(0, Tf._registerNode)(Je);
zt.Factory.addGetterSetter(Je, "data");
zt.Factory.addGetterSetter(Je, "fontFamily", "Arial");
zt.Factory.addGetterSetter(Je, "fontSize", 12, (0, _0.getNumberValidator)());
zt.Factory.addGetterSetter(Je, "fontStyle", S0);
zt.Factory.addGetterSetter(Je, "align", "left");
zt.Factory.addGetterSetter(
  Je,
  "letterSpacing",
  0,
  (0, _0.getNumberValidator)()
);
zt.Factory.addGetterSetter(Je, "textBaseline", "middle");
zt.Factory.addGetterSetter(Je, "fontVariant", S0);
zt.Factory.addGetterSetter(Je, "text", Nf);
zt.Factory.addGetterSetter(Je, "textDecoration", null);
zt.Factory.addGetterSetter(Je, "kerningFunc", null);
var Da = {};
Object.defineProperty(Da, "__esModule", { value: !0 });
Da.Transformer = void 0;
const Te = Be,
  Ee = fe,
  mh = Ge,
  Rf = $e,
  bf = li,
  yh = En,
  Gt = ce,
  Ar = re,
  Ff = ce;
var x0 = "tr-konva",
  Af = [
    "resizeEnabledChange",
    "rotateAnchorOffsetChange",
    "rotateEnabledChange",
    "enabledAnchorsChange",
    "anchorSizeChange",
    "borderEnabledChange",
    "borderStrokeChange",
    "borderStrokeWidthChange",
    "borderDashChange",
    "anchorStrokeChange",
    "anchorStrokeWidthChange",
    "anchorFillChange",
    "anchorCornerRadiusChange",
    "ignoreStrokeChange",
    "anchorStyleFuncChange",
  ]
    .map((d) => d + `.${x0}`)
    .join(" "),
  _h = "nodesRect",
  Mf = [
    "widthChange",
    "heightChange",
    "scaleXChange",
    "scaleYChange",
    "skewXChange",
    "skewYChange",
    "rotationChange",
    "offsetXChange",
    "offsetYChange",
    "transformsEnabledChange",
    "strokeWidthChange",
  ],
  Lf = {
    "top-left": -45,
    "top-center": 0,
    "top-right": 45,
    "middle-right": -90,
    "middle-left": 90,
    "bottom-left": -135,
    "bottom-center": 180,
    "bottom-right": 135,
  };
const Df = "ontouchstart" in Gt.Konva._global;
function If(d, t, n) {
  if (d === "rotater") return n;
  t += Te.Util.degToRad(Lf[d] || 0);
  var a = ((Te.Util.radToDeg(t) % 360) + 360) % 360;
  return Te.Util._inRange(a, 315 + 22.5, 360) || Te.Util._inRange(a, 0, 22.5)
    ? "ns-resize"
    : Te.Util._inRange(a, 45 - 22.5, 45 + 22.5)
    ? "nesw-resize"
    : Te.Util._inRange(a, 90 - 22.5, 90 + 22.5)
    ? "ew-resize"
    : Te.Util._inRange(a, 135 - 22.5, 135 + 22.5)
    ? "nwse-resize"
    : Te.Util._inRange(a, 180 - 22.5, 180 + 22.5)
    ? "ns-resize"
    : Te.Util._inRange(a, 225 - 22.5, 225 + 22.5)
    ? "nesw-resize"
    : Te.Util._inRange(a, 270 - 22.5, 270 + 22.5)
    ? "ew-resize"
    : Te.Util._inRange(a, 315 - 22.5, 315 + 22.5)
    ? "nwse-resize"
    : (Te.Util.error(
        "Transformer has unknown angle for cursor detection: " + a
      ),
      "pointer");
}
var ha = [
    "top-left",
    "top-center",
    "top-right",
    "middle-right",
    "middle-left",
    "bottom-left",
    "bottom-center",
    "bottom-right",
  ],
  Sh = 1e8;
function Of(d) {
  return {
    x:
      d.x +
      (d.width / 2) * Math.cos(d.rotation) +
      (d.height / 2) * Math.sin(-d.rotation),
    y:
      d.y +
      (d.height / 2) * Math.cos(d.rotation) +
      (d.width / 2) * Math.sin(d.rotation),
  };
}
function P0(d, t, n) {
  const a = n.x + (d.x - n.x) * Math.cos(t) - (d.y - n.y) * Math.sin(t),
    s = n.y + (d.x - n.x) * Math.sin(t) + (d.y - n.y) * Math.cos(t);
  return { ...d, rotation: d.rotation + t, x: a, y: s };
}
function Gf(d, t) {
  const n = Of(d);
  return P0(d, t, n);
}
function Uf(d, t, n) {
  let a = t;
  for (let s = 0; s < d.length; s++) {
    const l = Gt.Konva.getAngle(d[s]),
      h = Math.abs(l - t) % (Math.PI * 2);
    Math.min(h, Math.PI * 2 - h) < n && (a = l);
  }
  return a;
}
let Vo = 0,
  ye = class extends yh.Group {
    constructor(t) {
      super(t),
        (this._movingAnchorName = null),
        (this._transforming = !1),
        this._createElements(),
        (this._handleMouseMove = this._handleMouseMove.bind(this)),
        (this._handleMouseUp = this._handleMouseUp.bind(this)),
        (this.update = this.update.bind(this)),
        this.on(Af, this.update),
        this.getNode() && this.update();
    }
    attachTo(t) {
      return this.setNode(t), this;
    }
    setNode(t) {
      return (
        Te.Util.warn(
          "tr.setNode(shape), tr.node(shape) and tr.attachTo(shape) methods are deprecated. Please use tr.nodes(nodesArray) instead."
        ),
        this.setNodes([t])
      );
    }
    getNode() {
      return this._nodes && this._nodes[0];
    }
    _getEventNamespace() {
      return x0 + this._id;
    }
    setNodes(t = []) {
      this._nodes && this._nodes.length && this.detach();
      const n = t.filter((s) =>
        s.isAncestorOf(this)
          ? (Te.Util.error(
              "Konva.Transformer cannot be an a child of the node you are trying to attach"
            ),
            !1)
          : !0
      );
      (this._nodes = t = n),
        t.length === 1 && this.useSingleNodeRotation()
          ? this.rotation(t[0].getAbsoluteRotation())
          : this.rotation(0),
        this._nodes.forEach((s) => {
          const l = () => {
              this.nodes().length === 1 &&
                this.useSingleNodeRotation() &&
                this.rotation(this.nodes()[0].getAbsoluteRotation()),
                this._resetTransformCache(),
                !this._transforming && !this.isDragging() && this.update();
            },
            h = s._attrsAffectingSize
              .map((c) => c + "Change." + this._getEventNamespace())
              .join(" ");
          s.on(h, l),
            s.on(
              Mf.map((c) => c + `.${this._getEventNamespace()}`).join(" "),
              l
            ),
            s.on(`absoluteTransformChange.${this._getEventNamespace()}`, l),
            this._proxyDrag(s);
        }),
        this._resetTransformCache();
      var a = !!this.findOne(".top-left");
      return a && this.update(), this;
    }
    _proxyDrag(t) {
      let n;
      t.on(`dragstart.${this._getEventNamespace()}`, (a) => {
        (n = t.getAbsolutePosition()),
          !this.isDragging() &&
            t !== this.findOne(".back") &&
            this.startDrag(a, !1);
      }),
        t.on(`dragmove.${this._getEventNamespace()}`, (a) => {
          if (!n) return;
          const s = t.getAbsolutePosition(),
            l = s.x - n.x,
            h = s.y - n.y;
          this.nodes().forEach((c) => {
            if (c === t || c.isDragging()) return;
            const f = c.getAbsolutePosition();
            c.setAbsolutePosition({ x: f.x + l, y: f.y + h }), c.startDrag(a);
          }),
            (n = null);
        });
    }
    getNodes() {
      return this._nodes || [];
    }
    getActiveAnchor() {
      return this._movingAnchorName;
    }
    detach() {
      this._nodes &&
        this._nodes.forEach((t) => {
          t.off("." + this._getEventNamespace());
        }),
        (this._nodes = []),
        this._resetTransformCache();
    }
    _resetTransformCache() {
      this._clearCache(_h),
        this._clearCache("transform"),
        this._clearSelfAndDescendantCache("absoluteTransform");
    }
    _getNodeRect() {
      return this._getCache(_h, this.__getNodeRect);
    }
    __getNodeShape(t, n = this.rotation(), a) {
      var s = t.getClientRect({
          skipTransform: !0,
          skipShadow: !0,
          skipStroke: this.ignoreStroke(),
        }),
        l = t.getAbsoluteScale(a),
        h = t.getAbsolutePosition(a),
        c = s.x * l.x - t.offsetX() * l.x,
        f = s.y * l.y - t.offsetY() * l.y;
      const p =
          (Gt.Konva.getAngle(t.getAbsoluteRotation()) + Math.PI * 2) %
          (Math.PI * 2),
        m = {
          x: h.x + c * Math.cos(p) + f * Math.sin(-p),
          y: h.y + f * Math.cos(p) + c * Math.sin(p),
          width: s.width * l.x,
          height: s.height * l.y,
          rotation: p,
        };
      return P0(m, -Gt.Konva.getAngle(n), { x: 0, y: 0 });
    }
    __getNodeRect() {
      var t = this.getNode();
      if (!t) return { x: -Sh, y: -Sh, width: 0, height: 0, rotation: 0 };
      const n = [];
      this.nodes().map((p) => {
        const m = p.getClientRect({
          skipTransform: !0,
          skipShadow: !0,
          skipStroke: this.ignoreStroke(),
        });
        var x = [
            { x: m.x, y: m.y },
            { x: m.x + m.width, y: m.y },
            { x: m.x + m.width, y: m.y + m.height },
            { x: m.x, y: m.y + m.height },
          ],
          C = p.getAbsoluteTransform();
        x.forEach(function (_) {
          var y = C.point(_);
          n.push(y);
        });
      });
      const a = new Te.Transform();
      a.rotate(-Gt.Konva.getAngle(this.rotation()));
      var s = 1 / 0,
        l = 1 / 0,
        h = -1 / 0,
        c = -1 / 0;
      n.forEach(function (p) {
        var m = a.point(p);
        s === void 0 && ((s = h = m.x), (l = c = m.y)),
          (s = Math.min(s, m.x)),
          (l = Math.min(l, m.y)),
          (h = Math.max(h, m.x)),
          (c = Math.max(c, m.y));
      }),
        a.invert();
      const f = a.point({ x: s, y: l });
      return {
        x: f.x,
        y: f.y,
        width: h - s,
        height: c - l,
        rotation: Gt.Konva.getAngle(this.rotation()),
      };
    }
    getX() {
      return this._getNodeRect().x;
    }
    getY() {
      return this._getNodeRect().y;
    }
    getWidth() {
      return this._getNodeRect().width;
    }
    getHeight() {
      return this._getNodeRect().height;
    }
    _createElements() {
      this._createBack(),
        ha.forEach((t) => {
          this._createAnchor(t);
        }),
        this._createAnchor("rotater");
    }
    _createAnchor(t) {
      var n = new bf.Rect({
          stroke: "rgb(0, 161, 255)",
          fill: "white",
          strokeWidth: 1,
          name: t + " _anchor",
          dragDistance: 0,
          draggable: !0,
          hitStrokeWidth: Df ? 10 : "auto",
        }),
        a = this;
      n.on("mousedown touchstart", function (s) {
        a._handleMouseDown(s);
      }),
        n.on("dragstart", (s) => {
          n.stopDrag(), (s.cancelBubble = !0);
        }),
        n.on("dragend", (s) => {
          s.cancelBubble = !0;
        }),
        n.on("mouseenter", () => {
          var s = Gt.Konva.getAngle(this.rotation()),
            l = this.rotateAnchorCursor(),
            h = If(t, s, l);
          n.getStage().content && (n.getStage().content.style.cursor = h),
            (this._cursorChange = !0);
        }),
        n.on("mouseout", () => {
          n.getStage().content && (n.getStage().content.style.cursor = ""),
            (this._cursorChange = !1);
        }),
        this.add(n);
    }
    _createBack() {
      var t = new Rf.Shape({
        name: "back",
        width: 0,
        height: 0,
        draggable: !0,
        sceneFunc(n, a) {
          var s = a.getParent(),
            l = s.padding();
          n.beginPath(),
            n.rect(-l, -l, a.width() + l * 2, a.height() + l * 2),
            n.moveTo(a.width() / 2, -l),
            s.rotateEnabled() &&
              s.rotateLineVisible() &&
              n.lineTo(
                a.width() / 2,
                -s.rotateAnchorOffset() * Te.Util._sign(a.height()) - l
              ),
            n.fillStrokeShape(a);
        },
        hitFunc: (n, a) => {
          if (this.shouldOverdrawWholeArea()) {
            var s = this.padding();
            n.beginPath(),
              n.rect(-s, -s, a.width() + s * 2, a.height() + s * 2),
              n.fillStrokeShape(a);
          }
        },
      });
      this.add(t),
        this._proxyDrag(t),
        t.on("dragstart", (n) => {
          n.cancelBubble = !0;
        }),
        t.on("dragmove", (n) => {
          n.cancelBubble = !0;
        }),
        t.on("dragend", (n) => {
          n.cancelBubble = !0;
        }),
        this.on("dragmove", (n) => {
          this.update();
        });
    }
    _handleMouseDown(t) {
      this._movingAnchorName = t.target.name().split(" ")[0];
      var n = this._getNodeRect(),
        a = n.width,
        s = n.height,
        l = Math.sqrt(Math.pow(a, 2) + Math.pow(s, 2));
      (this.sin = Math.abs(s / l)),
        (this.cos = Math.abs(a / l)),
        typeof window < "u" &&
          (window.addEventListener("mousemove", this._handleMouseMove),
          window.addEventListener("touchmove", this._handleMouseMove),
          window.addEventListener("mouseup", this._handleMouseUp, !0),
          window.addEventListener("touchend", this._handleMouseUp, !0)),
        (this._transforming = !0);
      var h = t.target.getAbsolutePosition(),
        c = t.target.getStage().getPointerPosition();
      (this._anchorDragOffset = { x: c.x - h.x, y: c.y - h.y }),
        Vo++,
        this._fire("transformstart", { evt: t.evt, target: this.getNode() }),
        this._nodes.forEach((f) => {
          f._fire("transformstart", { evt: t.evt, target: f });
        });
    }
    _handleMouseMove(t) {
      var n,
        a,
        s,
        l = this.findOne("." + this._movingAnchorName),
        h = l.getStage();
      h.setPointersPositions(t);
      const c = h.getPointerPosition();
      let f = {
        x: c.x - this._anchorDragOffset.x,
        y: c.y - this._anchorDragOffset.y,
      };
      const p = l.getAbsolutePosition();
      this.anchorDragBoundFunc() && (f = this.anchorDragBoundFunc()(p, f, t)),
        l.setAbsolutePosition(f);
      const m = l.getAbsolutePosition();
      if (!(p.x === m.x && p.y === m.y)) {
        if (this._movingAnchorName === "rotater") {
          var x = this._getNodeRect();
          (n = l.x() - x.width / 2), (a = -l.y() + x.height / 2);
          let W = Math.atan2(-a, n) + Math.PI / 2;
          x.height < 0 && (W -= Math.PI);
          var C = Gt.Konva.getAngle(this.rotation());
          const ne = C + W,
            X = Gt.Konva.getAngle(this.rotationSnapTolerance()),
            ge = Uf(this.rotationSnaps(), ne, X) - x.rotation,
            B = Gf(x, ge);
          this._fitNodesInto(B, t);
          return;
        }
        var _ = this.shiftBehavior(),
          y;
        _ === "inverted"
          ? (y = this.keepRatio() && !t.shiftKey)
          : _ === "none"
          ? (y = this.keepRatio())
          : (y = this.keepRatio() || t.shiftKey);
        var v = this.centeredScaling() || t.altKey;
        if (this._movingAnchorName === "top-left") {
          if (y) {
            var P = v
              ? { x: this.width() / 2, y: this.height() / 2 }
              : {
                  x: this.findOne(".bottom-right").x(),
                  y: this.findOne(".bottom-right").y(),
                };
            s = Math.sqrt(Math.pow(P.x - l.x(), 2) + Math.pow(P.y - l.y(), 2));
            var k = this.findOne(".top-left").x() > P.x ? -1 : 1,
              R = this.findOne(".top-left").y() > P.y ? -1 : 1;
            (n = s * this.cos * k),
              (a = s * this.sin * R),
              this.findOne(".top-left").x(P.x - n),
              this.findOne(".top-left").y(P.y - a);
          }
        } else if (this._movingAnchorName === "top-center")
          this.findOne(".top-left").y(l.y());
        else if (this._movingAnchorName === "top-right") {
          if (y) {
            var P = v
              ? { x: this.width() / 2, y: this.height() / 2 }
              : {
                  x: this.findOne(".bottom-left").x(),
                  y: this.findOne(".bottom-left").y(),
                };
            s = Math.sqrt(Math.pow(l.x() - P.x, 2) + Math.pow(P.y - l.y(), 2));
            var k = this.findOne(".top-right").x() < P.x ? -1 : 1,
              R = this.findOne(".top-right").y() > P.y ? -1 : 1;
            (n = s * this.cos * k),
              (a = s * this.sin * R),
              this.findOne(".top-right").x(P.x + n),
              this.findOne(".top-right").y(P.y - a);
          }
          var F = l.position();
          this.findOne(".top-left").y(F.y),
            this.findOne(".bottom-right").x(F.x);
        } else if (this._movingAnchorName === "middle-left")
          this.findOne(".top-left").x(l.x());
        else if (this._movingAnchorName === "middle-right")
          this.findOne(".bottom-right").x(l.x());
        else if (this._movingAnchorName === "bottom-left") {
          if (y) {
            var P = v
              ? { x: this.width() / 2, y: this.height() / 2 }
              : {
                  x: this.findOne(".top-right").x(),
                  y: this.findOne(".top-right").y(),
                };
            s = Math.sqrt(Math.pow(P.x - l.x(), 2) + Math.pow(l.y() - P.y, 2));
            var k = P.x < l.x() ? -1 : 1,
              R = l.y() < P.y ? -1 : 1;
            (n = s * this.cos * k),
              (a = s * this.sin * R),
              l.x(P.x - n),
              l.y(P.y + a);
          }
          (F = l.position()),
            this.findOne(".top-left").x(F.x),
            this.findOne(".bottom-right").y(F.y);
        } else if (this._movingAnchorName === "bottom-center")
          this.findOne(".bottom-right").y(l.y());
        else if (this._movingAnchorName === "bottom-right") {
          if (y) {
            var P = v
              ? { x: this.width() / 2, y: this.height() / 2 }
              : {
                  x: this.findOne(".top-left").x(),
                  y: this.findOne(".top-left").y(),
                };
            s = Math.sqrt(Math.pow(l.x() - P.x, 2) + Math.pow(l.y() - P.y, 2));
            var k = this.findOne(".bottom-right").x() < P.x ? -1 : 1,
              R = this.findOne(".bottom-right").y() < P.y ? -1 : 1;
            (n = s * this.cos * k),
              (a = s * this.sin * R),
              this.findOne(".bottom-right").x(P.x + n),
              this.findOne(".bottom-right").y(P.y + a);
          }
        } else
          console.error(
            new Error(
              "Wrong position argument of selection resizer: " +
                this._movingAnchorName
            )
          );
        var v = this.centeredScaling() || t.altKey;
        if (v) {
          var w = this.findOne(".top-left"),
            E = this.findOne(".bottom-right"),
            N = w.x(),
            G = w.y(),
            T = this.getWidth() - E.x(),
            z = this.getHeight() - E.y();
          E.move({ x: -N, y: -G }), w.move({ x: T, y: z });
        }
        var L = this.findOne(".top-left").getAbsolutePosition();
        (n = L.x), (a = L.y);
        var O =
            this.findOne(".bottom-right").x() - this.findOne(".top-left").x(),
          K = this.findOne(".bottom-right").y() - this.findOne(".top-left").y();
        this._fitNodesInto(
          {
            x: n,
            y: a,
            width: O,
            height: K,
            rotation: Gt.Konva.getAngle(this.rotation()),
          },
          t
        );
      }
    }
    _handleMouseUp(t) {
      this._removeEvents(t);
    }
    getAbsoluteTransform() {
      return this.getTransform();
    }
    _removeEvents(t) {
      var n;
      if (this._transforming) {
        (this._transforming = !1),
          typeof window < "u" &&
            (window.removeEventListener("mousemove", this._handleMouseMove),
            window.removeEventListener("touchmove", this._handleMouseMove),
            window.removeEventListener("mouseup", this._handleMouseUp, !0),
            window.removeEventListener("touchend", this._handleMouseUp, !0));
        var a = this.getNode();
        Vo--,
          this._fire("transformend", { evt: t, target: a }),
          (n = this.getLayer()) === null || n === void 0 || n.batchDraw(),
          a &&
            this._nodes.forEach((s) => {
              var l;
              s._fire("transformend", { evt: t, target: s }),
                (l = s.getLayer()) === null || l === void 0 || l.batchDraw();
            }),
          (this._movingAnchorName = null);
      }
    }
    _fitNodesInto(t, n) {
      var a = this._getNodeRect();
      const s = 1;
      if (Te.Util._inRange(t.width, -this.padding() * 2 - s, s)) {
        this.update();
        return;
      }
      if (Te.Util._inRange(t.height, -this.padding() * 2 - s, s)) {
        this.update();
        return;
      }
      var l = new Te.Transform();
      if (
        (l.rotate(Gt.Konva.getAngle(this.rotation())),
        this._movingAnchorName &&
          t.width < 0 &&
          this._movingAnchorName.indexOf("left") >= 0)
      ) {
        const C = l.point({ x: -this.padding() * 2, y: 0 });
        (t.x += C.x),
          (t.y += C.y),
          (t.width += this.padding() * 2),
          (this._movingAnchorName = this._movingAnchorName.replace(
            "left",
            "right"
          )),
          (this._anchorDragOffset.x -= C.x),
          (this._anchorDragOffset.y -= C.y);
      } else if (
        this._movingAnchorName &&
        t.width < 0 &&
        this._movingAnchorName.indexOf("right") >= 0
      ) {
        const C = l.point({ x: this.padding() * 2, y: 0 });
        (this._movingAnchorName = this._movingAnchorName.replace(
          "right",
          "left"
        )),
          (this._anchorDragOffset.x -= C.x),
          (this._anchorDragOffset.y -= C.y),
          (t.width += this.padding() * 2);
      }
      if (
        this._movingAnchorName &&
        t.height < 0 &&
        this._movingAnchorName.indexOf("top") >= 0
      ) {
        const C = l.point({ x: 0, y: -this.padding() * 2 });
        (t.x += C.x),
          (t.y += C.y),
          (this._movingAnchorName = this._movingAnchorName.replace(
            "top",
            "bottom"
          )),
          (this._anchorDragOffset.x -= C.x),
          (this._anchorDragOffset.y -= C.y),
          (t.height += this.padding() * 2);
      } else if (
        this._movingAnchorName &&
        t.height < 0 &&
        this._movingAnchorName.indexOf("bottom") >= 0
      ) {
        const C = l.point({ x: 0, y: this.padding() * 2 });
        (this._movingAnchorName = this._movingAnchorName.replace(
          "bottom",
          "top"
        )),
          (this._anchorDragOffset.x -= C.x),
          (this._anchorDragOffset.y -= C.y),
          (t.height += this.padding() * 2);
      }
      if (this.boundBoxFunc()) {
        const C = this.boundBoxFunc()(a, t);
        C
          ? (t = C)
          : Te.Util.warn(
              "boundBoxFunc returned falsy. You should return new bound rect from it!"
            );
      }
      const h = 1e7,
        c = new Te.Transform();
      c.translate(a.x, a.y),
        c.rotate(a.rotation),
        c.scale(a.width / h, a.height / h);
      const f = new Te.Transform(),
        p = t.width / h,
        m = t.height / h;
      this.flipEnabled() === !1
        ? (f.translate(t.x, t.y),
          f.rotate(t.rotation),
          f.translate(t.width < 0 ? t.width : 0, t.height < 0 ? t.height : 0),
          f.scale(Math.abs(p), Math.abs(m)))
        : (f.translate(t.x, t.y), f.rotate(t.rotation), f.scale(p, m));
      const x = f.multiply(c.invert());
      this._nodes.forEach((C) => {
        var _;
        const y = C.getParent().getAbsoluteTransform(),
          P = C.getTransform().copy();
        P.translate(C.offsetX(), C.offsetY());
        const k = new Te.Transform();
        k.multiply(y.copy().invert()).multiply(x).multiply(y).multiply(P);
        const R = k.decompose();
        C.setAttrs(R),
          (_ = C.getLayer()) === null || _ === void 0 || _.batchDraw();
      }),
        this.rotation(Te.Util._getRotation(t.rotation)),
        this._nodes.forEach((C) => {
          this._fire("transform", { evt: n, target: C }),
            C._fire("transform", { evt: n, target: C });
        }),
        this._resetTransformCache(),
        this.update(),
        this.getLayer().batchDraw();
    }
    forceUpdate() {
      this._resetTransformCache(), this.update();
    }
    _batchChangeChild(t, n) {
      this.findOne(t).setAttrs(n);
    }
    update() {
      var t,
        n = this._getNodeRect();
      this.rotation(Te.Util._getRotation(n.rotation));
      var a = n.width,
        s = n.height,
        l = this.enabledAnchors(),
        h = this.resizeEnabled(),
        c = this.padding(),
        f = this.anchorSize();
      const p = this.find("._anchor");
      p.forEach((x) => {
        x.setAttrs({
          width: f,
          height: f,
          offsetX: f / 2,
          offsetY: f / 2,
          stroke: this.anchorStroke(),
          strokeWidth: this.anchorStrokeWidth(),
          fill: this.anchorFill(),
          cornerRadius: this.anchorCornerRadius(),
        });
      }),
        this._batchChangeChild(".top-left", {
          x: 0,
          y: 0,
          offsetX: f / 2 + c,
          offsetY: f / 2 + c,
          visible: h && l.indexOf("top-left") >= 0,
        }),
        this._batchChangeChild(".top-center", {
          x: a / 2,
          y: 0,
          offsetY: f / 2 + c,
          visible: h && l.indexOf("top-center") >= 0,
        }),
        this._batchChangeChild(".top-right", {
          x: a,
          y: 0,
          offsetX: f / 2 - c,
          offsetY: f / 2 + c,
          visible: h && l.indexOf("top-right") >= 0,
        }),
        this._batchChangeChild(".middle-left", {
          x: 0,
          y: s / 2,
          offsetX: f / 2 + c,
          visible: h && l.indexOf("middle-left") >= 0,
        }),
        this._batchChangeChild(".middle-right", {
          x: a,
          y: s / 2,
          offsetX: f / 2 - c,
          visible: h && l.indexOf("middle-right") >= 0,
        }),
        this._batchChangeChild(".bottom-left", {
          x: 0,
          y: s,
          offsetX: f / 2 + c,
          offsetY: f / 2 - c,
          visible: h && l.indexOf("bottom-left") >= 0,
        }),
        this._batchChangeChild(".bottom-center", {
          x: a / 2,
          y: s,
          offsetY: f / 2 - c,
          visible: h && l.indexOf("bottom-center") >= 0,
        }),
        this._batchChangeChild(".bottom-right", {
          x: a,
          y: s,
          offsetX: f / 2 - c,
          offsetY: f / 2 - c,
          visible: h && l.indexOf("bottom-right") >= 0,
        }),
        this._batchChangeChild(".rotater", {
          x: a / 2,
          y: -this.rotateAnchorOffset() * Te.Util._sign(s) - c,
          visible: this.rotateEnabled(),
        }),
        this._batchChangeChild(".back", {
          width: a,
          height: s,
          visible: this.borderEnabled(),
          stroke: this.borderStroke(),
          strokeWidth: this.borderStrokeWidth(),
          dash: this.borderDash(),
          x: 0,
          y: 0,
        });
      const m = this.anchorStyleFunc();
      m &&
        p.forEach((x) => {
          m(x);
        }),
        (t = this.getLayer()) === null || t === void 0 || t.batchDraw();
    }
    isTransforming() {
      return this._transforming;
    }
    stopTransform() {
      if (this._transforming) {
        this._removeEvents();
        var t = this.findOne("." + this._movingAnchorName);
        t && t.stopDrag();
      }
    }
    destroy() {
      return (
        this.getStage() &&
          this._cursorChange &&
          this.getStage().content &&
          (this.getStage().content.style.cursor = ""),
        yh.Group.prototype.destroy.call(this),
        this.detach(),
        this._removeEvents(),
        this
      );
    }
    toObject() {
      return mh.Node.prototype.toObject.call(this);
    }
    clone(t) {
      var n = mh.Node.prototype.clone.call(this, t);
      return n;
    }
    getClientRect() {
      return this.nodes().length > 0
        ? super.getClientRect()
        : { x: 0, y: 0, width: 0, height: 0 };
    }
  };
Da.Transformer = ye;
ye.isTransforming = () => Vo > 0;
function zf(d) {
  return (
    d instanceof Array ||
      Te.Util.warn("enabledAnchors value should be an array"),
    d instanceof Array &&
      d.forEach(function (t) {
        ha.indexOf(t) === -1 &&
          Te.Util.warn(
            "Unknown anchor name: " +
              t +
              ". Available names are: " +
              ha.join(", ")
          );
      }),
    d || []
  );
}
ye.prototype.className = "Transformer";
(0, Ff._registerNode)(ye);
Ee.Factory.addGetterSetter(ye, "enabledAnchors", ha, zf);
Ee.Factory.addGetterSetter(
  ye,
  "flipEnabled",
  !0,
  (0, Ar.getBooleanValidator)()
);
Ee.Factory.addGetterSetter(ye, "resizeEnabled", !0);
Ee.Factory.addGetterSetter(ye, "anchorSize", 10, (0, Ar.getNumberValidator)());
Ee.Factory.addGetterSetter(ye, "rotateEnabled", !0);
Ee.Factory.addGetterSetter(ye, "rotateLineVisible", !0);
Ee.Factory.addGetterSetter(ye, "rotationSnaps", []);
Ee.Factory.addGetterSetter(
  ye,
  "rotateAnchorOffset",
  50,
  (0, Ar.getNumberValidator)()
);
Ee.Factory.addGetterSetter(ye, "rotateAnchorCursor", "crosshair");
Ee.Factory.addGetterSetter(
  ye,
  "rotationSnapTolerance",
  5,
  (0, Ar.getNumberValidator)()
);
Ee.Factory.addGetterSetter(ye, "borderEnabled", !0);
Ee.Factory.addGetterSetter(ye, "anchorStroke", "rgb(0, 161, 255)");
Ee.Factory.addGetterSetter(
  ye,
  "anchorStrokeWidth",
  1,
  (0, Ar.getNumberValidator)()
);
Ee.Factory.addGetterSetter(ye, "anchorFill", "white");
Ee.Factory.addGetterSetter(
  ye,
  "anchorCornerRadius",
  0,
  (0, Ar.getNumberValidator)()
);
Ee.Factory.addGetterSetter(ye, "borderStroke", "rgb(0, 161, 255)");
Ee.Factory.addGetterSetter(
  ye,
  "borderStrokeWidth",
  1,
  (0, Ar.getNumberValidator)()
);
Ee.Factory.addGetterSetter(ye, "borderDash");
Ee.Factory.addGetterSetter(ye, "keepRatio", !0);
Ee.Factory.addGetterSetter(ye, "shiftBehavior", "default");
Ee.Factory.addGetterSetter(ye, "centeredScaling", !1);
Ee.Factory.addGetterSetter(ye, "ignoreStroke", !1);
Ee.Factory.addGetterSetter(ye, "padding", 0, (0, Ar.getNumberValidator)());
Ee.Factory.addGetterSetter(ye, "node");
Ee.Factory.addGetterSetter(ye, "nodes");
Ee.Factory.addGetterSetter(ye, "boundBoxFunc");
Ee.Factory.addGetterSetter(ye, "anchorDragBoundFunc");
Ee.Factory.addGetterSetter(ye, "anchorStyleFunc");
Ee.Factory.addGetterSetter(ye, "shouldOverdrawWholeArea", !1);
Ee.Factory.addGetterSetter(ye, "useSingleNodeRotation", !0);
Ee.Factory.backCompat(ye, {
  lineEnabled: "borderEnabled",
  rotateHandlerOffset: "rotateAnchorOffset",
  enabledHandlers: "enabledAnchors",
});
var Ia = {};
Object.defineProperty(Ia, "__esModule", { value: !0 });
Ia.Wedge = void 0;
const Oa = fe,
  Bf = $e,
  Hf = ce,
  E0 = re,
  Vf = ce;
class cr extends Bf.Shape {
  _sceneFunc(t) {
    t.beginPath(),
      t.arc(
        0,
        0,
        this.radius(),
        0,
        Hf.Konva.getAngle(this.angle()),
        this.clockwise()
      ),
      t.lineTo(0, 0),
      t.closePath(),
      t.fillStrokeShape(this);
  }
  getWidth() {
    return this.radius() * 2;
  }
  getHeight() {
    return this.radius() * 2;
  }
  setWidth(t) {
    this.radius(t / 2);
  }
  setHeight(t) {
    this.radius(t / 2);
  }
}
Ia.Wedge = cr;
cr.prototype.className = "Wedge";
cr.prototype._centroid = !0;
cr.prototype._attrsAffectingSize = ["radius"];
(0, Vf._registerNode)(cr);
Oa.Factory.addGetterSetter(cr, "radius", 0, (0, E0.getNumberValidator)());
Oa.Factory.addGetterSetter(cr, "angle", 0, (0, E0.getNumberValidator)());
Oa.Factory.addGetterSetter(cr, "clockwise", !1);
Oa.Factory.backCompat(cr, {
  angleDeg: "angle",
  getAngleDeg: "getAngle",
  setAngleDeg: "setAngle",
});
var Ga = {};
Object.defineProperty(Ga, "__esModule", { value: !0 });
Ga.Blur = void 0;
const wh = fe,
  jf = Ge,
  Wf = re;
function Ch() {
  (this.r = 0), (this.g = 0), (this.b = 0), (this.a = 0), (this.next = null);
}
var Kf = [
    512, 512, 456, 512, 328, 456, 335, 512, 405, 328, 271, 456, 388, 335, 292,
    512, 454, 405, 364, 328, 298, 271, 496, 456, 420, 388, 360, 335, 312, 292,
    273, 512, 482, 454, 428, 405, 383, 364, 345, 328, 312, 298, 284, 271, 259,
    496, 475, 456, 437, 420, 404, 388, 374, 360, 347, 335, 323, 312, 302, 292,
    282, 273, 265, 512, 497, 482, 468, 454, 441, 428, 417, 405, 394, 383, 373,
    364, 354, 345, 337, 328, 320, 312, 305, 298, 291, 284, 278, 271, 265, 259,
    507, 496, 485, 475, 465, 456, 446, 437, 428, 420, 412, 404, 396, 388, 381,
    374, 367, 360, 354, 347, 341, 335, 329, 323, 318, 312, 307, 302, 297, 292,
    287, 282, 278, 273, 269, 265, 261, 512, 505, 497, 489, 482, 475, 468, 461,
    454, 447, 441, 435, 428, 422, 417, 411, 405, 399, 394, 389, 383, 378, 373,
    368, 364, 359, 354, 350, 345, 341, 337, 332, 328, 324, 320, 316, 312, 309,
    305, 301, 298, 294, 291, 287, 284, 281, 278, 274, 271, 268, 265, 262, 259,
    257, 507, 501, 496, 491, 485, 480, 475, 470, 465, 460, 456, 451, 446, 442,
    437, 433, 428, 424, 420, 416, 412, 408, 404, 400, 396, 392, 388, 385, 381,
    377, 374, 370, 367, 363, 360, 357, 354, 350, 347, 344, 341, 338, 335, 332,
    329, 326, 323, 320, 318, 315, 312, 310, 307, 304, 302, 299, 297, 294, 292,
    289, 287, 285, 282, 280, 278, 275, 273, 271, 269, 267, 265, 263, 261, 259,
  ],
  Yf = [
    9, 11, 12, 13, 13, 14, 14, 15, 15, 15, 15, 16, 16, 16, 16, 17, 17, 17, 17,
    17, 17, 17, 18, 18, 18, 18, 18, 18, 18, 18, 18, 19, 19, 19, 19, 19, 19, 19,
    19, 19, 19, 19, 19, 19, 19, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20,
    20, 20, 20, 20, 20, 20, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21,
    21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 22, 22, 22, 22, 22,
    22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22,
    22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 23, 23, 23, 23, 23, 23,
    23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23,
    23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23,
    23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 24, 24, 24, 24, 24, 24, 24, 24, 24,
    24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24,
    24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24,
    24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24,
    24, 24, 24, 24, 24, 24, 24, 24,
  ];
function Xf(d, t) {
  var n = d.data,
    a = d.width,
    s = d.height,
    l,
    h,
    c,
    f,
    p,
    m,
    x,
    C,
    _,
    y,
    P,
    k,
    R,
    F,
    v,
    w,
    E,
    N,
    G,
    T,
    z,
    L,
    O,
    K,
    W = t + t + 1,
    ne = a - 1,
    X = s - 1,
    se = t + 1,
    ge = (se * (se + 1)) / 2,
    B = new Ch(),
    Q = null,
    H = B,
    Y = null,
    ie = null,
    Se = Kf[t],
    ve = Yf[t];
  for (c = 1; c < W; c++) (H = H.next = new Ch()), c === se && (Q = H);
  for (H.next = B, x = m = 0, h = 0; h < s; h++) {
    for (
      w = E = N = G = C = _ = y = P = 0,
        k = se * (T = n[m]),
        R = se * (z = n[m + 1]),
        F = se * (L = n[m + 2]),
        v = se * (O = n[m + 3]),
        C += ge * T,
        _ += ge * z,
        y += ge * L,
        P += ge * O,
        H = B,
        c = 0;
      c < se;
      c++
    )
      (H.r = T), (H.g = z), (H.b = L), (H.a = O), (H = H.next);
    for (c = 1; c < se; c++)
      (f = m + ((ne < c ? ne : c) << 2)),
        (C += (H.r = T = n[f]) * (K = se - c)),
        (_ += (H.g = z = n[f + 1]) * K),
        (y += (H.b = L = n[f + 2]) * K),
        (P += (H.a = O = n[f + 3]) * K),
        (w += T),
        (E += z),
        (N += L),
        (G += O),
        (H = H.next);
    for (Y = B, ie = Q, l = 0; l < a; l++)
      (n[m + 3] = O = (P * Se) >> ve),
        O !== 0
          ? ((O = 255 / O),
            (n[m] = ((C * Se) >> ve) * O),
            (n[m + 1] = ((_ * Se) >> ve) * O),
            (n[m + 2] = ((y * Se) >> ve) * O))
          : (n[m] = n[m + 1] = n[m + 2] = 0),
        (C -= k),
        (_ -= R),
        (y -= F),
        (P -= v),
        (k -= Y.r),
        (R -= Y.g),
        (F -= Y.b),
        (v -= Y.a),
        (f = (x + ((f = l + t + 1) < ne ? f : ne)) << 2),
        (w += Y.r = n[f]),
        (E += Y.g = n[f + 1]),
        (N += Y.b = n[f + 2]),
        (G += Y.a = n[f + 3]),
        (C += w),
        (_ += E),
        (y += N),
        (P += G),
        (Y = Y.next),
        (k += T = ie.r),
        (R += z = ie.g),
        (F += L = ie.b),
        (v += O = ie.a),
        (w -= T),
        (E -= z),
        (N -= L),
        (G -= O),
        (ie = ie.next),
        (m += 4);
    x += a;
  }
  for (l = 0; l < a; l++) {
    for (
      E = N = G = w = _ = y = P = C = 0,
        m = l << 2,
        k = se * (T = n[m]),
        R = se * (z = n[m + 1]),
        F = se * (L = n[m + 2]),
        v = se * (O = n[m + 3]),
        C += ge * T,
        _ += ge * z,
        y += ge * L,
        P += ge * O,
        H = B,
        c = 0;
      c < se;
      c++
    )
      (H.r = T), (H.g = z), (H.b = L), (H.a = O), (H = H.next);
    for (p = a, c = 1; c <= t; c++)
      (m = (p + l) << 2),
        (C += (H.r = T = n[m]) * (K = se - c)),
        (_ += (H.g = z = n[m + 1]) * K),
        (y += (H.b = L = n[m + 2]) * K),
        (P += (H.a = O = n[m + 3]) * K),
        (w += T),
        (E += z),
        (N += L),
        (G += O),
        (H = H.next),
        c < X && (p += a);
    for (m = l, Y = B, ie = Q, h = 0; h < s; h++)
      (f = m << 2),
        (n[f + 3] = O = (P * Se) >> ve),
        O > 0
          ? ((O = 255 / O),
            (n[f] = ((C * Se) >> ve) * O),
            (n[f + 1] = ((_ * Se) >> ve) * O),
            (n[f + 2] = ((y * Se) >> ve) * O))
          : (n[f] = n[f + 1] = n[f + 2] = 0),
        (C -= k),
        (_ -= R),
        (y -= F),
        (P -= v),
        (k -= Y.r),
        (R -= Y.g),
        (F -= Y.b),
        (v -= Y.a),
        (f = (l + ((f = h + se) < X ? f : X) * a) << 2),
        (C += w += Y.r = n[f]),
        (_ += E += Y.g = n[f + 1]),
        (y += N += Y.b = n[f + 2]),
        (P += G += Y.a = n[f + 3]),
        (Y = Y.next),
        (k += T = ie.r),
        (R += z = ie.g),
        (F += L = ie.b),
        (v += O = ie.a),
        (w -= T),
        (E -= z),
        (N -= L),
        (G -= O),
        (ie = ie.next),
        (m += a);
  }
}
const qf = function (t) {
  var n = Math.round(this.blurRadius());
  n > 0 && Xf(t, n);
};
Ga.Blur = qf;
wh.Factory.addGetterSetter(
  jf.Node,
  "blurRadius",
  0,
  (0, Wf.getNumberValidator)(),
  wh.Factory.afterSetFilter
);
var Ua = {};
Object.defineProperty(Ua, "__esModule", { value: !0 });
Ua.Brighten = void 0;
const xh = fe,
  Qf = Ge,
  $f = re,
  Jf = function (d) {
    var t = this.brightness() * 255,
      n = d.data,
      a = n.length,
      s;
    for (s = 0; s < a; s += 4) (n[s] += t), (n[s + 1] += t), (n[s + 2] += t);
  };
Ua.Brighten = Jf;
xh.Factory.addGetterSetter(
  Qf.Node,
  "brightness",
  0,
  (0, $f.getNumberValidator)(),
  xh.Factory.afterSetFilter
);
var za = {};
Object.defineProperty(za, "__esModule", { value: !0 });
za.Contrast = void 0;
const Ph = fe,
  Zf = Ge,
  e2 = re,
  t2 = function (d) {
    var t = Math.pow((this.contrast() + 100) / 100, 2),
      n = d.data,
      a = n.length,
      s = 150,
      l = 150,
      h = 150,
      c;
    for (c = 0; c < a; c += 4)
      (s = n[c]),
        (l = n[c + 1]),
        (h = n[c + 2]),
        (s /= 255),
        (s -= 0.5),
        (s *= t),
        (s += 0.5),
        (s *= 255),
        (l /= 255),
        (l -= 0.5),
        (l *= t),
        (l += 0.5),
        (l *= 255),
        (h /= 255),
        (h -= 0.5),
        (h *= t),
        (h += 0.5),
        (h *= 255),
        (s = s < 0 ? 0 : s > 255 ? 255 : s),
        (l = l < 0 ? 0 : l > 255 ? 255 : l),
        (h = h < 0 ? 0 : h > 255 ? 255 : h),
        (n[c] = s),
        (n[c + 1] = l),
        (n[c + 2] = h);
  };
za.Contrast = t2;
Ph.Factory.addGetterSetter(
  Zf.Node,
  "contrast",
  0,
  (0, e2.getNumberValidator)(),
  Ph.Factory.afterSetFilter
);
var Ba = {};
Object.defineProperty(Ba, "__esModule", { value: !0 });
Ba.Emboss = void 0;
const Tr = fe,
  Ha = Ge,
  r2 = Be,
  k0 = re,
  n2 = function (d) {
    var t = this.embossStrength() * 10,
      n = this.embossWhiteLevel() * 255,
      a = this.embossDirection(),
      s = this.embossBlend(),
      l = 0,
      h = 0,
      c = d.data,
      f = d.width,
      p = d.height,
      m = f * 4,
      x = p;
    switch (a) {
      case "top-left":
        (l = -1), (h = -1);
        break;
      case "top":
        (l = -1), (h = 0);
        break;
      case "top-right":
        (l = -1), (h = 1);
        break;
      case "right":
        (l = 0), (h = 1);
        break;
      case "bottom-right":
        (l = 1), (h = 1);
        break;
      case "bottom":
        (l = 1), (h = 0);
        break;
      case "bottom-left":
        (l = 1), (h = -1);
        break;
      case "left":
        (l = 0), (h = -1);
        break;
      default:
        r2.Util.error("Unknown emboss direction: " + a);
    }
    do {
      var C = (x - 1) * m,
        _ = l;
      x + _ < 1 && (_ = 0), x + _ > p && (_ = 0);
      var y = (x - 1 + _) * f * 4,
        P = f;
      do {
        var k = C + (P - 1) * 4,
          R = h;
        P + R < 1 && (R = 0), P + R > f && (R = 0);
        var F = y + (P - 1 + R) * 4,
          v = c[k] - c[F],
          w = c[k + 1] - c[F + 1],
          E = c[k + 2] - c[F + 2],
          N = v,
          G = N > 0 ? N : -N,
          T = w > 0 ? w : -w,
          z = E > 0 ? E : -E;
        if ((T > G && (N = w), z > G && (N = E), (N *= t), s)) {
          var L = c[k] + N,
            O = c[k + 1] + N,
            K = c[k + 2] + N;
          (c[k] = L > 255 ? 255 : L < 0 ? 0 : L),
            (c[k + 1] = O > 255 ? 255 : O < 0 ? 0 : O),
            (c[k + 2] = K > 255 ? 255 : K < 0 ? 0 : K);
        } else {
          var W = n - N;
          W < 0 ? (W = 0) : W > 255 && (W = 255),
            (c[k] = c[k + 1] = c[k + 2] = W);
        }
      } while (--P);
    } while (--x);
  };
Ba.Emboss = n2;
Tr.Factory.addGetterSetter(
  Ha.Node,
  "embossStrength",
  0.5,
  (0, k0.getNumberValidator)(),
  Tr.Factory.afterSetFilter
);
Tr.Factory.addGetterSetter(
  Ha.Node,
  "embossWhiteLevel",
  0.5,
  (0, k0.getNumberValidator)(),
  Tr.Factory.afterSetFilter
);
Tr.Factory.addGetterSetter(
  Ha.Node,
  "embossDirection",
  "top-left",
  null,
  Tr.Factory.afterSetFilter
);
Tr.Factory.addGetterSetter(
  Ha.Node,
  "embossBlend",
  !1,
  null,
  Tr.Factory.afterSetFilter
);
var Va = {};
Object.defineProperty(Va, "__esModule", { value: !0 });
Va.Enhance = void 0;
const Eh = fe,
  i2 = Ge,
  a2 = re;
function Ao(d, t, n, a, s) {
  var l = n - t,
    h = s - a,
    c;
  return l === 0
    ? a + h / 2
    : h === 0
    ? a
    : ((c = (d - t) / l), (c = h * c + a), c);
}
const s2 = function (d) {
  var t = d.data,
    n = t.length,
    a = t[0],
    s = a,
    l,
    h = t[1],
    c = h,
    f,
    p = t[2],
    m = p,
    x,
    C,
    _ = this.enhance();
  if (_ !== 0) {
    for (C = 0; C < n; C += 4)
      (l = t[C + 0]),
        l < a ? (a = l) : l > s && (s = l),
        (f = t[C + 1]),
        f < h ? (h = f) : f > c && (c = f),
        (x = t[C + 2]),
        x < p ? (p = x) : x > m && (m = x);
    s === a && ((s = 255), (a = 0)),
      c === h && ((c = 255), (h = 0)),
      m === p && ((m = 255), (p = 0));
    var y, P, k, R, F, v, w, E, N;
    for (
      _ > 0
        ? ((P = s + _ * (255 - s)),
          (k = a - _ * (a - 0)),
          (F = c + _ * (255 - c)),
          (v = h - _ * (h - 0)),
          (E = m + _ * (255 - m)),
          (N = p - _ * (p - 0)))
        : ((y = (s + a) * 0.5),
          (P = s + _ * (s - y)),
          (k = a + _ * (a - y)),
          (R = (c + h) * 0.5),
          (F = c + _ * (c - R)),
          (v = h + _ * (h - R)),
          (w = (m + p) * 0.5),
          (E = m + _ * (m - w)),
          (N = p + _ * (p - w))),
        C = 0;
      C < n;
      C += 4
    )
      (t[C + 0] = Ao(t[C + 0], a, s, k, P)),
        (t[C + 1] = Ao(t[C + 1], h, c, v, F)),
        (t[C + 2] = Ao(t[C + 2], p, m, N, E));
  }
};
Va.Enhance = s2;
Eh.Factory.addGetterSetter(
  i2.Node,
  "enhance",
  0,
  (0, a2.getNumberValidator)(),
  Eh.Factory.afterSetFilter
);
var ja = {};
Object.defineProperty(ja, "__esModule", { value: !0 });
ja.Grayscale = void 0;
const o2 = function (d) {
  var t = d.data,
    n = t.length,
    a,
    s;
  for (a = 0; a < n; a += 4)
    (s = 0.34 * t[a] + 0.5 * t[a + 1] + 0.16 * t[a + 2]),
      (t[a] = s),
      (t[a + 1] = s),
      (t[a + 2] = s);
};
ja.Grayscale = o2;
var Wa = {};
Object.defineProperty(Wa, "__esModule", { value: !0 });
Wa.HSL = void 0;
const wn = fe,
  il = Ge,
  al = re;
wn.Factory.addGetterSetter(
  il.Node,
  "hue",
  0,
  (0, al.getNumberValidator)(),
  wn.Factory.afterSetFilter
);
wn.Factory.addGetterSetter(
  il.Node,
  "saturation",
  0,
  (0, al.getNumberValidator)(),
  wn.Factory.afterSetFilter
);
wn.Factory.addGetterSetter(
  il.Node,
  "luminance",
  0,
  (0, al.getNumberValidator)(),
  wn.Factory.afterSetFilter
);
const l2 = function (d) {
  var t = d.data,
    n = t.length,
    a = 1,
    s = Math.pow(2, this.saturation()),
    l = Math.abs(this.hue() + 360) % 360,
    h = this.luminance() * 127,
    c,
    f = a * s * Math.cos((l * Math.PI) / 180),
    p = a * s * Math.sin((l * Math.PI) / 180),
    m = 0.299 * a + 0.701 * f + 0.167 * p,
    x = 0.587 * a - 0.587 * f + 0.33 * p,
    C = 0.114 * a - 0.114 * f - 0.497 * p,
    _ = 0.299 * a - 0.299 * f - 0.328 * p,
    y = 0.587 * a + 0.413 * f + 0.035 * p,
    P = 0.114 * a - 0.114 * f + 0.293 * p,
    k = 0.299 * a - 0.3 * f + 1.25 * p,
    R = 0.587 * a - 0.586 * f - 1.05 * p,
    F = 0.114 * a + 0.886 * f - 0.2 * p,
    v,
    w,
    E,
    N;
  for (c = 0; c < n; c += 4)
    (v = t[c + 0]),
      (w = t[c + 1]),
      (E = t[c + 2]),
      (N = t[c + 3]),
      (t[c + 0] = m * v + x * w + C * E + h),
      (t[c + 1] = _ * v + y * w + P * E + h),
      (t[c + 2] = k * v + R * w + F * E + h),
      (t[c + 3] = N);
};
Wa.HSL = l2;
var Ka = {};
Object.defineProperty(Ka, "__esModule", { value: !0 });
Ka.HSV = void 0;
const Cn = fe,
  sl = Ge,
  ol = re,
  u2 = function (d) {
    var t = d.data,
      n = t.length,
      a = Math.pow(2, this.value()),
      s = Math.pow(2, this.saturation()),
      l = Math.abs(this.hue() + 360) % 360,
      h,
      c = a * s * Math.cos((l * Math.PI) / 180),
      f = a * s * Math.sin((l * Math.PI) / 180),
      p = 0.299 * a + 0.701 * c + 0.167 * f,
      m = 0.587 * a - 0.587 * c + 0.33 * f,
      x = 0.114 * a - 0.114 * c - 0.497 * f,
      C = 0.299 * a - 0.299 * c - 0.328 * f,
      _ = 0.587 * a + 0.413 * c + 0.035 * f,
      y = 0.114 * a - 0.114 * c + 0.293 * f,
      P = 0.299 * a - 0.3 * c + 1.25 * f,
      k = 0.587 * a - 0.586 * c - 1.05 * f,
      R = 0.114 * a + 0.886 * c - 0.2 * f,
      F,
      v,
      w,
      E;
    for (h = 0; h < n; h += 4)
      (F = t[h + 0]),
        (v = t[h + 1]),
        (w = t[h + 2]),
        (E = t[h + 3]),
        (t[h + 0] = p * F + m * v + x * w),
        (t[h + 1] = C * F + _ * v + y * w),
        (t[h + 2] = P * F + k * v + R * w),
        (t[h + 3] = E);
  };
Ka.HSV = u2;
Cn.Factory.addGetterSetter(
  sl.Node,
  "hue",
  0,
  (0, ol.getNumberValidator)(),
  Cn.Factory.afterSetFilter
);
Cn.Factory.addGetterSetter(
  sl.Node,
  "saturation",
  0,
  (0, ol.getNumberValidator)(),
  Cn.Factory.afterSetFilter
);
Cn.Factory.addGetterSetter(
  sl.Node,
  "value",
  0,
  (0, ol.getNumberValidator)(),
  Cn.Factory.afterSetFilter
);
var Ya = {};
Object.defineProperty(Ya, "__esModule", { value: !0 });
Ya.Invert = void 0;
const h2 = function (d) {
  var t = d.data,
    n = t.length,
    a;
  for (a = 0; a < n; a += 4)
    (t[a] = 255 - t[a]),
      (t[a + 1] = 255 - t[a + 1]),
      (t[a + 2] = 255 - t[a + 2]);
};
Ya.Invert = h2;
var Xa = {};
Object.defineProperty(Xa, "__esModule", { value: !0 });
Xa.Kaleidoscope = void 0;
const da = fe,
  T0 = Ge,
  kh = Be,
  N0 = re;
var d2 = function (d, t, n) {
    var a = d.data,
      s = t.data,
      l = d.width,
      h = d.height,
      c = n.polarCenterX || l / 2,
      f = n.polarCenterY || h / 2,
      p,
      m,
      x,
      C = 0,
      _ = 0,
      y = 0,
      P = 0,
      k,
      R = Math.sqrt(c * c + f * f);
    (m = l - c),
      (x = h - f),
      (k = Math.sqrt(m * m + x * x)),
      (R = k > R ? k : R);
    var F = h,
      v = l,
      w,
      E,
      N = ((360 / v) * Math.PI) / 180,
      G,
      T;
    for (E = 0; E < v; E += 1)
      for (G = Math.sin(E * N), T = Math.cos(E * N), w = 0; w < F; w += 1)
        (m = Math.floor(c + ((R * w) / F) * T)),
          (x = Math.floor(f + ((R * w) / F) * G)),
          (p = (x * l + m) * 4),
          (C = a[p + 0]),
          (_ = a[p + 1]),
          (y = a[p + 2]),
          (P = a[p + 3]),
          (p = (E + w * l) * 4),
          (s[p + 0] = C),
          (s[p + 1] = _),
          (s[p + 2] = y),
          (s[p + 3] = P);
  },
  c2 = function (d, t, n) {
    var a = d.data,
      s = t.data,
      l = d.width,
      h = d.height,
      c = n.polarCenterX || l / 2,
      f = n.polarCenterY || h / 2,
      p,
      m,
      x,
      C,
      _,
      y = 0,
      P = 0,
      k = 0,
      R = 0,
      F,
      v = Math.sqrt(c * c + f * f);
    (m = l - c),
      (x = h - f),
      (F = Math.sqrt(m * m + x * x)),
      (v = F > v ? F : v);
    var w = h,
      E = l,
      N,
      G,
      T = n.polarRotation || 0,
      z,
      L;
    for (m = 0; m < l; m += 1)
      for (x = 0; x < h; x += 1)
        (C = m - c),
          (_ = x - f),
          (N = (Math.sqrt(C * C + _ * _) * w) / v),
          (G = ((Math.atan2(_, C) * 180) / Math.PI + 360 + T) % 360),
          (G = (G * E) / 360),
          (z = Math.floor(G)),
          (L = Math.floor(N)),
          (p = (L * l + z) * 4),
          (y = a[p + 0]),
          (P = a[p + 1]),
          (k = a[p + 2]),
          (R = a[p + 3]),
          (p = (x * l + m) * 4),
          (s[p + 0] = y),
          (s[p + 1] = P),
          (s[p + 2] = k),
          (s[p + 3] = R);
  };
const f2 = function (d) {
  var t = d.width,
    n = d.height,
    a,
    s,
    l,
    h,
    c,
    f,
    p,
    m,
    x,
    C,
    _ = Math.round(this.kaleidoscopePower()),
    y = Math.round(this.kaleidoscopeAngle()),
    P = Math.floor((t * (y % 360)) / 360);
  if (!(_ < 1)) {
    var k = kh.Util.createCanvasElement();
    (k.width = t), (k.height = n);
    var R = k.getContext("2d").getImageData(0, 0, t, n);
    kh.Util.releaseCanvas(k),
      d2(d, R, { polarCenterX: t / 2, polarCenterY: n / 2 });
    for (var F = t / Math.pow(2, _); F <= 8; ) (F = F * 2), (_ -= 1);
    F = Math.ceil(F);
    var v = F,
      w = 0,
      E = v,
      N = 1;
    for (P + F > t && ((w = v), (E = 0), (N = -1)), s = 0; s < n; s += 1)
      for (a = w; a !== E; a += N)
        (l = Math.round(a + P) % t),
          (x = (t * s + l) * 4),
          (c = R.data[x + 0]),
          (f = R.data[x + 1]),
          (p = R.data[x + 2]),
          (m = R.data[x + 3]),
          (C = (t * s + a) * 4),
          (R.data[C + 0] = c),
          (R.data[C + 1] = f),
          (R.data[C + 2] = p),
          (R.data[C + 3] = m);
    for (s = 0; s < n; s += 1)
      for (v = Math.floor(F), h = 0; h < _; h += 1) {
        for (a = 0; a < v + 1; a += 1)
          (x = (t * s + a) * 4),
            (c = R.data[x + 0]),
            (f = R.data[x + 1]),
            (p = R.data[x + 2]),
            (m = R.data[x + 3]),
            (C = (t * s + v * 2 - a - 1) * 4),
            (R.data[C + 0] = c),
            (R.data[C + 1] = f),
            (R.data[C + 2] = p),
            (R.data[C + 3] = m);
        v *= 2;
      }
    c2(R, d, { polarRotation: 0 });
  }
};
Xa.Kaleidoscope = f2;
da.Factory.addGetterSetter(
  T0.Node,
  "kaleidoscopePower",
  2,
  (0, N0.getNumberValidator)(),
  da.Factory.afterSetFilter
);
da.Factory.addGetterSetter(
  T0.Node,
  "kaleidoscopeAngle",
  0,
  (0, N0.getNumberValidator)(),
  da.Factory.afterSetFilter
);
var qa = {};
Object.defineProperty(qa, "__esModule", { value: !0 });
qa.Mask = void 0;
const Th = fe,
  g2 = Ge,
  p2 = re;
function aa(d, t, n) {
  var a = (n * d.width + t) * 4,
    s = [];
  return s.push(d.data[a++], d.data[a++], d.data[a++], d.data[a++]), s;
}
function Zn(d, t) {
  return Math.sqrt(
    Math.pow(d[0] - t[0], 2) +
      Math.pow(d[1] - t[1], 2) +
      Math.pow(d[2] - t[2], 2)
  );
}
function v2(d) {
  for (var t = [0, 0, 0], n = 0; n < d.length; n++)
    (t[0] += d[n][0]), (t[1] += d[n][1]), (t[2] += d[n][2]);
  return (t[0] /= d.length), (t[1] /= d.length), (t[2] /= d.length), t;
}
function m2(d, t) {
  var n = aa(d, 0, 0),
    a = aa(d, d.width - 1, 0),
    s = aa(d, 0, d.height - 1),
    l = aa(d, d.width - 1, d.height - 1),
    h = t || 10;
  if (Zn(n, a) < h && Zn(a, l) < h && Zn(l, s) < h && Zn(s, n) < h) {
    for (var c = v2([a, n, l, s]), f = [], p = 0; p < d.width * d.height; p++) {
      var m = Zn(c, [d.data[p * 4], d.data[p * 4 + 1], d.data[p * 4 + 2]]);
      f[p] = m < h ? 0 : 255;
    }
    return f;
  }
}
function y2(d, t) {
  for (var n = 0; n < d.width * d.height; n++) d.data[4 * n + 3] = t[n];
}
function _2(d, t, n) {
  for (
    var a = [1, 1, 1, 1, 0, 1, 1, 1, 1],
      s = Math.round(Math.sqrt(a.length)),
      l = Math.floor(s / 2),
      h = [],
      c = 0;
    c < n;
    c++
  )
    for (var f = 0; f < t; f++) {
      for (var p = c * t + f, m = 0, x = 0; x < s; x++)
        for (var C = 0; C < s; C++) {
          var _ = c + x - l,
            y = f + C - l;
          if (_ >= 0 && _ < n && y >= 0 && y < t) {
            var P = _ * t + y,
              k = a[x * s + C];
            m += d[P] * k;
          }
        }
      h[p] = m === 255 * 8 ? 255 : 0;
    }
  return h;
}
function S2(d, t, n) {
  for (
    var a = [1, 1, 1, 1, 1, 1, 1, 1, 1],
      s = Math.round(Math.sqrt(a.length)),
      l = Math.floor(s / 2),
      h = [],
      c = 0;
    c < n;
    c++
  )
    for (var f = 0; f < t; f++) {
      for (var p = c * t + f, m = 0, x = 0; x < s; x++)
        for (var C = 0; C < s; C++) {
          var _ = c + x - l,
            y = f + C - l;
          if (_ >= 0 && _ < n && y >= 0 && y < t) {
            var P = _ * t + y,
              k = a[x * s + C];
            m += d[P] * k;
          }
        }
      h[p] = m >= 255 * 4 ? 255 : 0;
    }
  return h;
}
function w2(d, t, n) {
  for (
    var a = [
        0.1111111111111111, 0.1111111111111111, 0.1111111111111111,
        0.1111111111111111, 0.1111111111111111, 0.1111111111111111,
        0.1111111111111111, 0.1111111111111111, 0.1111111111111111,
      ],
      s = Math.round(Math.sqrt(a.length)),
      l = Math.floor(s / 2),
      h = [],
      c = 0;
    c < n;
    c++
  )
    for (var f = 0; f < t; f++) {
      for (var p = c * t + f, m = 0, x = 0; x < s; x++)
        for (var C = 0; C < s; C++) {
          var _ = c + x - l,
            y = f + C - l;
          if (_ >= 0 && _ < n && y >= 0 && y < t) {
            var P = _ * t + y,
              k = a[x * s + C];
            m += d[P] * k;
          }
        }
      h[p] = m;
    }
  return h;
}
const C2 = function (d) {
  var t = this.threshold(),
    n = m2(d, t);
  return (
    n &&
      ((n = _2(n, d.width, d.height)),
      (n = S2(n, d.width, d.height)),
      (n = w2(n, d.width, d.height)),
      y2(d, n)),
    d
  );
};
qa.Mask = C2;
Th.Factory.addGetterSetter(
  g2.Node,
  "threshold",
  0,
  (0, p2.getNumberValidator)(),
  Th.Factory.afterSetFilter
);
var Qa = {};
Object.defineProperty(Qa, "__esModule", { value: !0 });
Qa.Noise = void 0;
const Nh = fe,
  x2 = Ge,
  P2 = re,
  E2 = function (d) {
    var t = this.noise() * 255,
      n = d.data,
      a = n.length,
      s = t / 2,
      l;
    for (l = 0; l < a; l += 4)
      (n[l + 0] += s - 2 * s * Math.random()),
        (n[l + 1] += s - 2 * s * Math.random()),
        (n[l + 2] += s - 2 * s * Math.random());
  };
Qa.Noise = E2;
Nh.Factory.addGetterSetter(
  x2.Node,
  "noise",
  0.2,
  (0, P2.getNumberValidator)(),
  Nh.Factory.afterSetFilter
);
var $a = {};
Object.defineProperty($a, "__esModule", { value: !0 });
$a.Pixelate = void 0;
const Rh = fe,
  k2 = Be,
  T2 = Ge,
  N2 = re,
  R2 = function (d) {
    var t = Math.ceil(this.pixelSize()),
      n = d.width,
      a = d.height,
      s,
      l,
      h,
      c,
      f,
      p,
      m,
      x = Math.ceil(n / t),
      C = Math.ceil(a / t),
      _,
      y,
      P,
      k,
      R,
      F,
      v,
      w = d.data;
    if (t <= 0) {
      k2.Util.error("pixelSize value can not be <= 0");
      return;
    }
    for (R = 0; R < x; R += 1)
      for (F = 0; F < C; F += 1) {
        for (
          c = 0,
            f = 0,
            p = 0,
            m = 0,
            _ = R * t,
            y = _ + t,
            P = F * t,
            k = P + t,
            v = 0,
            s = _;
          s < y;
          s += 1
        )
          if (!(s >= n))
            for (l = P; l < k; l += 1)
              l >= a ||
                ((h = (n * l + s) * 4),
                (c += w[h + 0]),
                (f += w[h + 1]),
                (p += w[h + 2]),
                (m += w[h + 3]),
                (v += 1));
        for (c = c / v, f = f / v, p = p / v, m = m / v, s = _; s < y; s += 1)
          if (!(s >= n))
            for (l = P; l < k; l += 1)
              l >= a ||
                ((h = (n * l + s) * 4),
                (w[h + 0] = c),
                (w[h + 1] = f),
                (w[h + 2] = p),
                (w[h + 3] = m));
      }
  };
$a.Pixelate = R2;
Rh.Factory.addGetterSetter(
  T2.Node,
  "pixelSize",
  8,
  (0, N2.getNumberValidator)(),
  Rh.Factory.afterSetFilter
);
var Ja = {};
Object.defineProperty(Ja, "__esModule", { value: !0 });
Ja.Posterize = void 0;
const bh = fe,
  b2 = Ge,
  F2 = re,
  A2 = function (d) {
    var t = Math.round(this.levels() * 254) + 1,
      n = d.data,
      a = n.length,
      s = 255 / t,
      l;
    for (l = 0; l < a; l += 1) n[l] = Math.floor(n[l] / s) * s;
  };
Ja.Posterize = A2;
bh.Factory.addGetterSetter(
  b2.Node,
  "levels",
  0.5,
  (0, F2.getNumberValidator)(),
  bh.Factory.afterSetFilter
);
var Za = {};
Object.defineProperty(Za, "__esModule", { value: !0 });
Za.RGB = void 0;
const ca = fe,
  ll = Ge,
  M2 = re,
  L2 = function (d) {
    var t = d.data,
      n = t.length,
      a = this.red(),
      s = this.green(),
      l = this.blue(),
      h,
      c;
    for (h = 0; h < n; h += 4)
      (c = (0.34 * t[h] + 0.5 * t[h + 1] + 0.16 * t[h + 2]) / 255),
        (t[h] = c * a),
        (t[h + 1] = c * s),
        (t[h + 2] = c * l),
        (t[h + 3] = t[h + 3]);
  };
Za.RGB = L2;
ca.Factory.addGetterSetter(ll.Node, "red", 0, function (d) {
  return (this._filterUpToDate = !1), d > 255 ? 255 : d < 0 ? 0 : Math.round(d);
});
ca.Factory.addGetterSetter(ll.Node, "green", 0, function (d) {
  return (this._filterUpToDate = !1), d > 255 ? 255 : d < 0 ? 0 : Math.round(d);
});
ca.Factory.addGetterSetter(
  ll.Node,
  "blue",
  0,
  M2.RGBComponent,
  ca.Factory.afterSetFilter
);
var es = {};
Object.defineProperty(es, "__esModule", { value: !0 });
es.RGBA = void 0;
const ri = fe,
  ts = Ge,
  D2 = re,
  I2 = function (d) {
    var t = d.data,
      n = t.length,
      a = this.red(),
      s = this.green(),
      l = this.blue(),
      h = this.alpha(),
      c,
      f;
    for (c = 0; c < n; c += 4)
      (f = 1 - h),
        (t[c] = a * h + t[c] * f),
        (t[c + 1] = s * h + t[c + 1] * f),
        (t[c + 2] = l * h + t[c + 2] * f);
  };
es.RGBA = I2;
ri.Factory.addGetterSetter(ts.Node, "red", 0, function (d) {
  return (this._filterUpToDate = !1), d > 255 ? 255 : d < 0 ? 0 : Math.round(d);
});
ri.Factory.addGetterSetter(ts.Node, "green", 0, function (d) {
  return (this._filterUpToDate = !1), d > 255 ? 255 : d < 0 ? 0 : Math.round(d);
});
ri.Factory.addGetterSetter(
  ts.Node,
  "blue",
  0,
  D2.RGBComponent,
  ri.Factory.afterSetFilter
);
ri.Factory.addGetterSetter(ts.Node, "alpha", 1, function (d) {
  return (this._filterUpToDate = !1), d > 1 ? 1 : d < 0 ? 0 : d;
});
var rs = {};
Object.defineProperty(rs, "__esModule", { value: !0 });
rs.Sepia = void 0;
const O2 = function (d) {
  var t = d.data,
    n = t.length,
    a,
    s,
    l,
    h;
  for (a = 0; a < n; a += 4)
    (s = t[a + 0]),
      (l = t[a + 1]),
      (h = t[a + 2]),
      (t[a + 0] = Math.min(255, s * 0.393 + l * 0.769 + h * 0.189)),
      (t[a + 1] = Math.min(255, s * 0.349 + l * 0.686 + h * 0.168)),
      (t[a + 2] = Math.min(255, s * 0.272 + l * 0.534 + h * 0.131));
};
rs.Sepia = O2;
var ns = {};
Object.defineProperty(ns, "__esModule", { value: !0 });
ns.Solarize = void 0;
const G2 = function (d) {
  var t = d.data,
    n = d.width,
    a = d.height,
    s = n * 4,
    l = a;
  do {
    var h = (l - 1) * s,
      c = n;
    do {
      var f = h + (c - 1) * 4,
        p = t[f],
        m = t[f + 1],
        x = t[f + 2];
      p > 127 && (p = 255 - p),
        m > 127 && (m = 255 - m),
        x > 127 && (x = 255 - x),
        (t[f] = p),
        (t[f + 1] = m),
        (t[f + 2] = x);
    } while (--c);
  } while (--l);
};
ns.Solarize = G2;
var is = {};
Object.defineProperty(is, "__esModule", { value: !0 });
is.Threshold = void 0;
const Fh = fe,
  U2 = Ge,
  z2 = re,
  B2 = function (d) {
    var t = this.threshold() * 255,
      n = d.data,
      a = n.length,
      s;
    for (s = 0; s < a; s += 1) n[s] = n[s] < t ? 0 : 255;
  };
is.Threshold = B2;
Fh.Factory.addGetterSetter(
  U2.Node,
  "threshold",
  0.5,
  (0, z2.getNumberValidator)(),
  Fh.Factory.afterSetFilter
);
Object.defineProperty(fa, "__esModule", { value: !0 });
fa.Konva = void 0;
const Ah = la,
  H2 = _a,
  V2 = Ca,
  j2 = Ea,
  W2 = ka,
  K2 = Ta,
  Mh = Sn,
  Y2 = si,
  X2 = Tn,
  q2 = li,
  Q2 = ba,
  $2 = Fa,
  J2 = Aa,
  Z2 = Ma,
  eg = Kr,
  tg = La,
  rg = Da,
  ng = Ia,
  ig = Ga,
  ag = Ua,
  sg = za,
  og = Ba,
  lg = Va,
  ug = ja,
  hg = Wa,
  dg = Ka,
  cg = Ya,
  fg = Xa,
  gg = qa,
  pg = Qa,
  vg = $a,
  mg = Ja,
  yg = Za,
  _g = es,
  Sg = rs,
  wg = ns,
  Cg = is;
fa.Konva = Ah.Konva.Util._assign(Ah.Konva, {
  Arc: H2.Arc,
  Arrow: V2.Arrow,
  Circle: j2.Circle,
  Ellipse: W2.Ellipse,
  Image: K2.Image,
  Label: Mh.Label,
  Tag: Mh.Tag,
  Line: Y2.Line,
  Path: X2.Path,
  Rect: q2.Rect,
  RegularPolygon: Q2.RegularPolygon,
  Ring: $2.Ring,
  Sprite: J2.Sprite,
  Star: Z2.Star,
  Text: eg.Text,
  TextPath: tg.TextPath,
  Transformer: rg.Transformer,
  Wedge: ng.Wedge,
  Filters: {
    Blur: ig.Blur,
    Brighten: ag.Brighten,
    Contrast: sg.Contrast,
    Emboss: og.Emboss,
    Enhance: lg.Enhance,
    Grayscale: ug.Grayscale,
    HSL: hg.HSL,
    HSV: dg.HSV,
    Invert: cg.Invert,
    Kaleidoscope: fg.Kaleidoscope,
    Mask: gg.Mask,
    Noise: pg.Noise,
    Pixelate: vg.Pixelate,
    Posterize: mg.Posterize,
    RGB: yg.RGB,
    RGBA: _g.RGBA,
    Sepia: Sg.Sepia,
    Solarize: wg.Solarize,
    Threshold: Cg.Threshold,
  },
});
var xg = Yh.exports;
Object.defineProperty(xg, "__esModule", { value: !0 });
const Pg = fa;
Yh.exports = Pg.Konva;
var jo = { exports: {} };
(function (d, t) {
  Object.defineProperty(t, "__esModule", { value: !0 }), (t.Konva = void 0);
  var n = la;
  Object.defineProperty(t, "Konva", {
    enumerable: !0,
    get: function () {
      return n.Konva;
    },
  });
  const a = la;
  d.exports = a.Konva;
})(jo, jo.exports);
var Eg = jo.exports;
const ni = Xo(Eg);
var R0 = { exports: {} },
  Mo = { exports: {} },
  Lo = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Lh;
function kg() {
  return (
    Lh ||
      ((Lh = 1),
      (function (d) {
        function t(B, Q) {
          var H = B.length;
          B.push(Q);
          e: for (; 0 < H; ) {
            var Y = (H - 1) >>> 1,
              ie = B[Y];
            if (0 < s(ie, Q)) (B[Y] = Q), (B[H] = ie), (H = Y);
            else break e;
          }
        }
        function n(B) {
          return B.length === 0 ? null : B[0];
        }
        function a(B) {
          if (B.length === 0) return null;
          var Q = B[0],
            H = B.pop();
          if (H !== Q) {
            B[0] = H;
            e: for (var Y = 0, ie = B.length, Se = ie >>> 1; Y < Se; ) {
              var ve = 2 * (Y + 1) - 1,
                nt = B[ve],
                we = ve + 1,
                A = B[we];
              if (0 > s(nt, H))
                we < ie && 0 > s(A, nt)
                  ? ((B[Y] = A), (B[we] = H), (Y = we))
                  : ((B[Y] = nt), (B[ve] = H), (Y = ve));
              else if (we < ie && 0 > s(A, H))
                (B[Y] = A), (B[we] = H), (Y = we);
              else break e;
            }
          }
          return Q;
        }
        function s(B, Q) {
          var H = B.sortIndex - Q.sortIndex;
          return H !== 0 ? H : B.id - Q.id;
        }
        if (
          typeof performance == "object" &&
          typeof performance.now == "function"
        ) {
          var l = performance;
          d.unstable_now = function () {
            return l.now();
          };
        } else {
          var h = Date,
            c = h.now();
          d.unstable_now = function () {
            return h.now() - c;
          };
        }
        var f = [],
          p = [],
          m = 1,
          x = null,
          C = 3,
          _ = !1,
          y = !1,
          P = !1,
          k = typeof setTimeout == "function" ? setTimeout : null,
          R = typeof clearTimeout == "function" ? clearTimeout : null,
          F = typeof setImmediate < "u" ? setImmediate : null;
        typeof navigator < "u" &&
          navigator.scheduling !== void 0 &&
          navigator.scheduling.isInputPending !== void 0 &&
          navigator.scheduling.isInputPending.bind(navigator.scheduling);
        function v(B) {
          for (var Q = n(p); Q !== null; ) {
            if (Q.callback === null) a(p);
            else if (Q.startTime <= B)
              a(p), (Q.sortIndex = Q.expirationTime), t(f, Q);
            else break;
            Q = n(p);
          }
        }
        function w(B) {
          if (((P = !1), v(B), !y))
            if (n(f) !== null) (y = !0), se(E);
            else {
              var Q = n(p);
              Q !== null && ge(w, Q.startTime - B);
            }
        }
        function E(B, Q) {
          (y = !1), P && ((P = !1), R(T), (T = -1)), (_ = !0);
          var H = C;
          try {
            for (
              v(Q), x = n(f);
              x !== null && (!(x.expirationTime > Q) || (B && !O()));

            ) {
              var Y = x.callback;
              if (typeof Y == "function") {
                (x.callback = null), (C = x.priorityLevel);
                var ie = Y(x.expirationTime <= Q);
                (Q = d.unstable_now()),
                  typeof ie == "function"
                    ? (x.callback = ie)
                    : x === n(f) && a(f),
                  v(Q);
              } else a(f);
              x = n(f);
            }
            if (x !== null) var Se = !0;
            else {
              var ve = n(p);
              ve !== null && ge(w, ve.startTime - Q), (Se = !1);
            }
            return Se;
          } finally {
            (x = null), (C = H), (_ = !1);
          }
        }
        var N = !1,
          G = null,
          T = -1,
          z = 5,
          L = -1;
        function O() {
          return !(d.unstable_now() - L < z);
        }
        function K() {
          if (G !== null) {
            var B = d.unstable_now();
            L = B;
            var Q = !0;
            try {
              Q = G(!0, B);
            } finally {
              Q ? W() : ((N = !1), (G = null));
            }
          } else N = !1;
        }
        var W;
        if (typeof F == "function")
          W = function () {
            F(K);
          };
        else if (typeof MessageChannel < "u") {
          var ne = new MessageChannel(),
            X = ne.port2;
          (ne.port1.onmessage = K),
            (W = function () {
              X.postMessage(null);
            });
        } else
          W = function () {
            k(K, 0);
          };
        function se(B) {
          (G = B), N || ((N = !0), W());
        }
        function ge(B, Q) {
          T = k(function () {
            B(d.unstable_now());
          }, Q);
        }
        (d.unstable_IdlePriority = 5),
          (d.unstable_ImmediatePriority = 1),
          (d.unstable_LowPriority = 4),
          (d.unstable_NormalPriority = 3),
          (d.unstable_Profiling = null),
          (d.unstable_UserBlockingPriority = 2),
          (d.unstable_cancelCallback = function (B) {
            B.callback = null;
          }),
          (d.unstable_continueExecution = function () {
            y || _ || ((y = !0), se(E));
          }),
          (d.unstable_forceFrameRate = function (B) {
            0 > B || 125 < B
              ? console.error(
                  "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"
                )
              : (z = 0 < B ? Math.floor(1e3 / B) : 5);
          }),
          (d.unstable_getCurrentPriorityLevel = function () {
            return C;
          }),
          (d.unstable_getFirstCallbackNode = function () {
            return n(f);
          }),
          (d.unstable_next = function (B) {
            switch (C) {
              case 1:
              case 2:
              case 3:
                var Q = 3;
                break;
              default:
                Q = C;
            }
            var H = C;
            C = Q;
            try {
              return B();
            } finally {
              C = H;
            }
          }),
          (d.unstable_pauseExecution = function () {}),
          (d.unstable_requestPaint = function () {}),
          (d.unstable_runWithPriority = function (B, Q) {
            switch (B) {
              case 1:
              case 2:
              case 3:
              case 4:
              case 5:
                break;
              default:
                B = 3;
            }
            var H = C;
            C = B;
            try {
              return Q();
            } finally {
              C = H;
            }
          }),
          (d.unstable_scheduleCallback = function (B, Q, H) {
            var Y = d.unstable_now();
            switch (
              (typeof H == "object" && H !== null
                ? ((H = H.delay),
                  (H = typeof H == "number" && 0 < H ? Y + H : Y))
                : (H = Y),
              B)
            ) {
              case 1:
                var ie = -1;
                break;
              case 2:
                ie = 250;
                break;
              case 5:
                ie = 1073741823;
                break;
              case 4:
                ie = 1e4;
                break;
              default:
                ie = 5e3;
            }
            return (
              (ie = H + ie),
              (B = {
                id: m++,
                callback: Q,
                priorityLevel: B,
                startTime: H,
                expirationTime: ie,
                sortIndex: -1,
              }),
              H > Y
                ? ((B.sortIndex = H),
                  t(p, B),
                  n(f) === null &&
                    B === n(p) &&
                    (P ? (R(T), (T = -1)) : (P = !0), ge(w, H - Y)))
                : ((B.sortIndex = ie), t(f, B), y || _ || ((y = !0), se(E))),
              B
            );
          }),
          (d.unstable_shouldYield = O),
          (d.unstable_wrapCallback = function (B) {
            var Q = C;
            return function () {
              var H = C;
              C = Q;
              try {
                return B.apply(this, arguments);
              } finally {
                C = H;
              }
            };
          });
      })(Lo)),
    Lo
  );
}
var Dh;
function Tg() {
  return Dh || ((Dh = 1), (Mo.exports = kg())), Mo.exports;
}
/**
 * @license React
 * react-reconciler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Ng = function (t) {
  var n = {},
    a = _e,
    s = Tg(),
    l = Object.assign;
  function h(e) {
    for (
      var r = "https://reactjs.org/docs/error-decoder.html?invariant=" + e,
        i = 1;
      i < arguments.length;
      i++
    )
      r += "&args[]=" + encodeURIComponent(arguments[i]);
    return (
      "Minified React error #" +
      e +
      "; visit " +
      r +
      " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
    );
  }
  var c = a.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
    f = Symbol.for("react.element"),
    p = Symbol.for("react.portal"),
    m = Symbol.for("react.fragment"),
    x = Symbol.for("react.strict_mode"),
    C = Symbol.for("react.profiler"),
    _ = Symbol.for("react.provider"),
    y = Symbol.for("react.context"),
    P = Symbol.for("react.forward_ref"),
    k = Symbol.for("react.suspense"),
    R = Symbol.for("react.suspense_list"),
    F = Symbol.for("react.memo"),
    v = Symbol.for("react.lazy"),
    w = Symbol.for("react.offscreen"),
    E = Symbol.iterator;
  function N(e) {
    return e === null || typeof e != "object"
      ? null
      : ((e = (E && e[E]) || e["@@iterator"]),
        typeof e == "function" ? e : null);
  }
  function G(e) {
    if (e == null) return null;
    if (typeof e == "function") return e.displayName || e.name || null;
    if (typeof e == "string") return e;
    switch (e) {
      case m:
        return "Fragment";
      case p:
        return "Portal";
      case C:
        return "Profiler";
      case x:
        return "StrictMode";
      case k:
        return "Suspense";
      case R:
        return "SuspenseList";
    }
    if (typeof e == "object")
      switch (e.$$typeof) {
        case y:
          return (e.displayName || "Context") + ".Consumer";
        case _:
          return (e._context.displayName || "Context") + ".Provider";
        case P:
          var r = e.render;
          return (
            (e = e.displayName),
            e ||
              ((e = r.displayName || r.name || ""),
              (e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef")),
            e
          );
        case F:
          return (
            (r = e.displayName || null), r !== null ? r : G(e.type) || "Memo"
          );
        case v:
          (r = e._payload), (e = e._init);
          try {
            return G(e(r));
          } catch {}
      }
    return null;
  }
  function T(e) {
    var r = e.type;
    switch (e.tag) {
      case 24:
        return "Cache";
      case 9:
        return (r.displayName || "Context") + ".Consumer";
      case 10:
        return (r._context.displayName || "Context") + ".Provider";
      case 18:
        return "DehydratedFragment";
      case 11:
        return (
          (e = r.render),
          (e = e.displayName || e.name || ""),
          r.displayName || (e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef")
        );
      case 7:
        return "Fragment";
      case 5:
        return r;
      case 4:
        return "Portal";
      case 3:
        return "Root";
      case 6:
        return "Text";
      case 16:
        return G(r);
      case 8:
        return r === x ? "StrictMode" : "Mode";
      case 22:
        return "Offscreen";
      case 12:
        return "Profiler";
      case 21:
        return "Scope";
      case 13:
        return "Suspense";
      case 19:
        return "SuspenseList";
      case 25:
        return "TracingMarker";
      case 1:
      case 0:
      case 17:
      case 2:
      case 14:
      case 15:
        if (typeof r == "function") return r.displayName || r.name || null;
        if (typeof r == "string") return r;
    }
    return null;
  }
  function z(e) {
    var r = e,
      i = e;
    if (e.alternate) for (; r.return; ) r = r.return;
    else {
      e = r;
      do (r = e), r.flags & 4098 && (i = r.return), (e = r.return);
      while (e);
    }
    return r.tag === 3 ? i : null;
  }
  function L(e) {
    if (z(e) !== e) throw Error(h(188));
  }
  function O(e) {
    var r = e.alternate;
    if (!r) {
      if (((r = z(e)), r === null)) throw Error(h(188));
      return r !== e ? null : e;
    }
    for (var i = e, o = r; ; ) {
      var u = i.return;
      if (u === null) break;
      var g = u.alternate;
      if (g === null) {
        if (((o = u.return), o !== null)) {
          i = o;
          continue;
        }
        break;
      }
      if (u.child === g.child) {
        for (g = u.child; g; ) {
          if (g === i) return L(u), e;
          if (g === o) return L(u), r;
          g = g.sibling;
        }
        throw Error(h(188));
      }
      if (i.return !== o.return) (i = u), (o = g);
      else {
        for (var S = !1, b = u.child; b; ) {
          if (b === i) {
            (S = !0), (i = u), (o = g);
            break;
          }
          if (b === o) {
            (S = !0), (o = u), (i = g);
            break;
          }
          b = b.sibling;
        }
        if (!S) {
          for (b = g.child; b; ) {
            if (b === i) {
              (S = !0), (i = g), (o = u);
              break;
            }
            if (b === o) {
              (S = !0), (o = g), (i = u);
              break;
            }
            b = b.sibling;
          }
          if (!S) throw Error(h(189));
        }
      }
      if (i.alternate !== o) throw Error(h(190));
    }
    if (i.tag !== 3) throw Error(h(188));
    return i.stateNode.current === i ? e : r;
  }
  function K(e) {
    return (e = O(e)), e !== null ? W(e) : null;
  }
  function W(e) {
    if (e.tag === 5 || e.tag === 6) return e;
    for (e = e.child; e !== null; ) {
      var r = W(e);
      if (r !== null) return r;
      e = e.sibling;
    }
    return null;
  }
  function ne(e) {
    if (e.tag === 5 || e.tag === 6) return e;
    for (e = e.child; e !== null; ) {
      if (e.tag !== 4) {
        var r = ne(e);
        if (r !== null) return r;
      }
      e = e.sibling;
    }
    return null;
  }
  var X = Array.isArray,
    se = t.getPublicInstance,
    ge = t.getRootHostContext,
    B = t.getChildHostContext,
    Q = t.prepareForCommit,
    H = t.resetAfterCommit,
    Y = t.createInstance,
    ie = t.appendInitialChild,
    Se = t.finalizeInitialChildren,
    ve = t.prepareUpdate,
    nt = t.shouldSetTextContent,
    we = t.createTextInstance,
    A = t.scheduleTimeout,
    V = t.cancelTimeout,
    te = t.noTimeout,
    ke = t.isPrimaryRenderer,
    he = t.supportsMutation,
    Fe = t.supportsPersistence,
    Me = t.supportsHydration,
    Bt = t.getInstanceFromNode,
    Ne = t.preparePortalMount,
    fr = t.getCurrentEventPriority,
    Ft = t.detachDeletedInstance,
    gr = t.supportsMicrotasks,
    O0 = t.scheduleMicrotask,
    Rn = t.supportsTestSelectors,
    G0 = t.findFiberRoot,
    U0 = t.getBoundingRect,
    z0 = t.getTextContent,
    bn = t.isHiddenSubtree,
    B0 = t.matchAccessibilityRole,
    H0 = t.setFocusIfFocusable,
    V0 = t.setupIntersectionObserver,
    j0 = t.appendChild,
    W0 = t.appendChildToContainer,
    K0 = t.commitTextUpdate,
    Y0 = t.commitMount,
    X0 = t.commitUpdate,
    q0 = t.insertBefore,
    Q0 = t.insertInContainerBefore,
    $0 = t.removeChild,
    J0 = t.removeChildFromContainer,
    dl = t.resetTextContent,
    Z0 = t.hideInstance,
    ed = t.hideTextInstance,
    td = t.unhideInstance,
    rd = t.unhideTextInstance,
    nd = t.clearContainer,
    id = t.cloneInstance,
    cl = t.createContainerChildSet,
    fl = t.appendChildToContainerChildSet,
    ad = t.finalizeContainerChildren,
    ss = t.replaceContainerChildren,
    gl = t.cloneHiddenInstance,
    pl = t.cloneHiddenTextInstance,
    sd = t.canHydrateInstance,
    od = t.canHydrateTextInstance,
    ld = t.canHydrateSuspenseInstance,
    vl = t.isSuspenseInstancePending,
    os = t.isSuspenseInstanceFallback,
    ud = t.getSuspenseInstanceFallbackErrorDetails,
    hd = t.registerSuspenseInstanceRetry,
    ui = t.getNextHydratableSibling,
    dd = t.getFirstHydratableChild,
    cd = t.getFirstHydratableChildWithinContainer,
    fd = t.getFirstHydratableChildWithinSuspenseInstance,
    gd = t.hydrateInstance,
    pd = t.hydrateTextInstance,
    vd = t.hydrateSuspenseInstance,
    md = t.getNextHydratableInstanceAfterSuspenseInstance,
    yd = t.commitHydratedContainer,
    _d = t.commitHydratedSuspenseInstance,
    Sd = t.clearSuspenseBoundary,
    wd = t.clearSuspenseBoundaryFromContainer,
    Cd = t.shouldDeleteUnhydratedTailInstances,
    xd = t.didNotMatchHydratedContainerTextInstance,
    Pd = t.didNotMatchHydratedTextInstance,
    ls;
  function Fn(e) {
    if (ls === void 0)
      try {
        throw Error();
      } catch (i) {
        var r = i.stack.trim().match(/\n( *(at )?)/);
        ls = (r && r[1]) || "";
      }
    return (
      `
` +
      ls +
      e
    );
  }
  var us = !1;
  function hs(e, r) {
    if (!e || us) return "";
    us = !0;
    var i = Error.prepareStackTrace;
    Error.prepareStackTrace = void 0;
    try {
      if (r)
        if (
          ((r = function () {
            throw Error();
          }),
          Object.defineProperty(r.prototype, "props", {
            set: function () {
              throw Error();
            },
          }),
          typeof Reflect == "object" && Reflect.construct)
        ) {
          try {
            Reflect.construct(r, []);
          } catch (j) {
            var o = j;
          }
          Reflect.construct(e, [], r);
        } else {
          try {
            r.call();
          } catch (j) {
            o = j;
          }
          e.call(r.prototype);
        }
      else {
        try {
          throw Error();
        } catch (j) {
          o = j;
        }
        e();
      }
    } catch (j) {
      if (j && o && typeof j.stack == "string") {
        for (
          var u = j.stack.split(`
`),
            g = o.stack.split(`
`),
            S = u.length - 1,
            b = g.length - 1;
          1 <= S && 0 <= b && u[S] !== g[b];

        )
          b--;
        for (; 1 <= S && 0 <= b; S--, b--)
          if (u[S] !== g[b]) {
            if (S !== 1 || b !== 1)
              do
                if ((S--, b--, 0 > b || u[S] !== g[b])) {
                  var I =
                    `
` + u[S].replace(" at new ", " at ");
                  return (
                    e.displayName &&
                      I.includes("<anonymous>") &&
                      (I = I.replace("<anonymous>", e.displayName)),
                    I
                  );
                }
              while (1 <= S && 0 <= b);
            break;
          }
      }
    } finally {
      (us = !1), (Error.prepareStackTrace = i);
    }
    return (e = e ? e.displayName || e.name : "") ? Fn(e) : "";
  }
  var Ed = Object.prototype.hasOwnProperty,
    ds = [],
    rn = -1;
  function pr(e) {
    return { current: e };
  }
  function Le(e) {
    0 > rn || ((e.current = ds[rn]), (ds[rn] = null), rn--);
  }
  function Ae(e, r) {
    rn++, (ds[rn] = e.current), (e.current = r);
  }
  var vr = {},
    st = pr(vr),
    ft = pr(!1),
    Lr = vr;
  function nn(e, r) {
    var i = e.type.contextTypes;
    if (!i) return vr;
    var o = e.stateNode;
    if (o && o.__reactInternalMemoizedUnmaskedChildContext === r)
      return o.__reactInternalMemoizedMaskedChildContext;
    var u = {},
      g;
    for (g in i) u[g] = r[g];
    return (
      o &&
        ((e = e.stateNode),
        (e.__reactInternalMemoizedUnmaskedChildContext = r),
        (e.__reactInternalMemoizedMaskedChildContext = u)),
      u
    );
  }
  function gt(e) {
    return (e = e.childContextTypes), e != null;
  }
  function hi() {
    Le(ft), Le(st);
  }
  function ml(e, r, i) {
    if (st.current !== vr) throw Error(h(168));
    Ae(st, r), Ae(ft, i);
  }
  function yl(e, r, i) {
    var o = e.stateNode;
    if (((r = r.childContextTypes), typeof o.getChildContext != "function"))
      return i;
    o = o.getChildContext();
    for (var u in o) if (!(u in r)) throw Error(h(108, T(e) || "Unknown", u));
    return l({}, i, o);
  }
  function di(e) {
    return (
      (e =
        ((e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext) ||
        vr),
      (Lr = st.current),
      Ae(st, e),
      Ae(ft, ft.current),
      !0
    );
  }
  function _l(e, r, i) {
    var o = e.stateNode;
    if (!o) throw Error(h(169));
    i
      ? ((e = yl(e, r, Lr)),
        (o.__reactInternalMemoizedMergedChildContext = e),
        Le(ft),
        Le(st),
        Ae(st, e))
      : Le(ft),
      Ae(ft, i);
  }
  var At = Math.clz32 ? Math.clz32 : Nd,
    kd = Math.log,
    Td = Math.LN2;
  function Nd(e) {
    return (e >>>= 0), e === 0 ? 32 : (31 - ((kd(e) / Td) | 0)) | 0;
  }
  var ci = 64,
    fi = 4194304;
  function An(e) {
    switch (e & -e) {
      case 1:
        return 1;
      case 2:
        return 2;
      case 4:
        return 4;
      case 8:
        return 8;
      case 16:
        return 16;
      case 32:
        return 32;
      case 64:
      case 128:
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
        return e & 4194240;
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
      case 67108864:
        return e & 130023424;
      case 134217728:
        return 134217728;
      case 268435456:
        return 268435456;
      case 536870912:
        return 536870912;
      case 1073741824:
        return 1073741824;
      default:
        return e;
    }
  }
  function gi(e, r) {
    var i = e.pendingLanes;
    if (i === 0) return 0;
    var o = 0,
      u = e.suspendedLanes,
      g = e.pingedLanes,
      S = i & 268435455;
    if (S !== 0) {
      var b = S & ~u;
      b !== 0 ? (o = An(b)) : ((g &= S), g !== 0 && (o = An(g)));
    } else (S = i & ~u), S !== 0 ? (o = An(S)) : g !== 0 && (o = An(g));
    if (o === 0) return 0;
    if (
      r !== 0 &&
      r !== o &&
      !(r & u) &&
      ((u = o & -o), (g = r & -r), u >= g || (u === 16 && (g & 4194240) !== 0))
    )
      return r;
    if ((o & 4 && (o |= i & 16), (r = e.entangledLanes), r !== 0))
      for (e = e.entanglements, r &= o; 0 < r; )
        (i = 31 - At(r)), (u = 1 << i), (o |= e[i]), (r &= ~u);
    return o;
  }
  function Rd(e, r) {
    switch (e) {
      case 1:
      case 2:
      case 4:
        return r + 250;
      case 8:
      case 16:
      case 32:
      case 64:
      case 128:
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
        return r + 5e3;
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
      case 67108864:
        return -1;
      case 134217728:
      case 268435456:
      case 536870912:
      case 1073741824:
        return -1;
      default:
        return -1;
    }
  }
  function bd(e, r) {
    for (
      var i = e.suspendedLanes,
        o = e.pingedLanes,
        u = e.expirationTimes,
        g = e.pendingLanes;
      0 < g;

    ) {
      var S = 31 - At(g),
        b = 1 << S,
        I = u[S];
      I === -1
        ? (!(b & i) || b & o) && (u[S] = Rd(b, r))
        : I <= r && (e.expiredLanes |= b),
        (g &= ~b);
    }
  }
  function cs(e) {
    return (
      (e = e.pendingLanes & -1073741825),
      e !== 0 ? e : e & 1073741824 ? 1073741824 : 0
    );
  }
  function Sl() {
    var e = ci;
    return (ci <<= 1), !(ci & 4194240) && (ci = 64), e;
  }
  function fs(e) {
    for (var r = [], i = 0; 31 > i; i++) r.push(e);
    return r;
  }
  function Mn(e, r, i) {
    (e.pendingLanes |= r),
      r !== 536870912 && ((e.suspendedLanes = 0), (e.pingedLanes = 0)),
      (e = e.eventTimes),
      (r = 31 - At(r)),
      (e[r] = i);
  }
  function Fd(e, r) {
    var i = e.pendingLanes & ~r;
    (e.pendingLanes = r),
      (e.suspendedLanes = 0),
      (e.pingedLanes = 0),
      (e.expiredLanes &= r),
      (e.mutableReadLanes &= r),
      (e.entangledLanes &= r),
      (r = e.entanglements);
    var o = e.eventTimes;
    for (e = e.expirationTimes; 0 < i; ) {
      var u = 31 - At(i),
        g = 1 << u;
      (r[u] = 0), (o[u] = -1), (e[u] = -1), (i &= ~g);
    }
  }
  function gs(e, r) {
    var i = (e.entangledLanes |= r);
    for (e = e.entanglements; i; ) {
      var o = 31 - At(i),
        u = 1 << o;
      (u & r) | (e[o] & r) && (e[o] |= r), (i &= ~u);
    }
  }
  var Ce = 0;
  function wl(e) {
    return (
      (e &= -e), 1 < e ? (4 < e ? (e & 268435455 ? 16 : 536870912) : 4) : 1
    );
  }
  var ps = s.unstable_scheduleCallback,
    Cl = s.unstable_cancelCallback,
    Ad = s.unstable_shouldYield,
    Md = s.unstable_requestPaint,
    Ze = s.unstable_now,
    vs = s.unstable_ImmediatePriority,
    Ld = s.unstable_UserBlockingPriority,
    ms = s.unstable_NormalPriority,
    Dd = s.unstable_IdlePriority,
    pi = null,
    Ht = null;
  function Id(e) {
    if (Ht && typeof Ht.onCommitFiberRoot == "function")
      try {
        Ht.onCommitFiberRoot(pi, e, void 0, (e.current.flags & 128) === 128);
      } catch {}
  }
  function Od(e, r) {
    return (e === r && (e !== 0 || 1 / e === 1 / r)) || (e !== e && r !== r);
  }
  var Mt = typeof Object.is == "function" ? Object.is : Od,
    Zt = null,
    vi = !1,
    ys = !1;
  function xl(e) {
    Zt === null ? (Zt = [e]) : Zt.push(e);
  }
  function Gd(e) {
    (vi = !0), xl(e);
  }
  function Vt() {
    if (!ys && Zt !== null) {
      ys = !0;
      var e = 0,
        r = Ce;
      try {
        var i = Zt;
        for (Ce = 1; e < i.length; e++) {
          var o = i[e];
          do o = o(!0);
          while (o !== null);
        }
        (Zt = null), (vi = !1);
      } catch (u) {
        throw (Zt !== null && (Zt = Zt.slice(e + 1)), ps(vs, Vt), u);
      } finally {
        (Ce = r), (ys = !1);
      }
    }
    return null;
  }
  var an = [],
    sn = 0,
    mi = null,
    yi = 0,
    Ct = [],
    xt = 0,
    Dr = null,
    er = 1,
    tr = "";
  function Ir(e, r) {
    (an[sn++] = yi), (an[sn++] = mi), (mi = e), (yi = r);
  }
  function Pl(e, r, i) {
    (Ct[xt++] = er), (Ct[xt++] = tr), (Ct[xt++] = Dr), (Dr = e);
    var o = er;
    e = tr;
    var u = 32 - At(o) - 1;
    (o &= ~(1 << u)), (i += 1);
    var g = 32 - At(r) + u;
    if (30 < g) {
      var S = u - (u % 5);
      (g = (o & ((1 << S) - 1)).toString(32)),
        (o >>= S),
        (u -= S),
        (er = (1 << (32 - At(r) + u)) | (i << u) | o),
        (tr = g + e);
    } else (er = (1 << g) | (i << u) | o), (tr = e);
  }
  function _s(e) {
    e.return !== null && (Ir(e, 1), Pl(e, 1, 0));
  }
  function Ss(e) {
    for (; e === mi; )
      (mi = an[--sn]), (an[sn] = null), (yi = an[--sn]), (an[sn] = null);
    for (; e === Dr; )
      (Dr = Ct[--xt]),
        (Ct[xt] = null),
        (tr = Ct[--xt]),
        (Ct[xt] = null),
        (er = Ct[--xt]),
        (Ct[xt] = null);
  }
  var _t = null,
    Pt = null,
    Ie = !1,
    Ln = !1,
    Lt = null;
  function El(e, r) {
    var i = Rt(5, null, null, 0);
    (i.elementType = "DELETED"),
      (i.stateNode = r),
      (i.return = e),
      (r = e.deletions),
      r === null ? ((e.deletions = [i]), (e.flags |= 16)) : r.push(i);
  }
  function kl(e, r) {
    switch (e.tag) {
      case 5:
        return (
          (r = sd(r, e.type, e.pendingProps)),
          r !== null ? ((e.stateNode = r), (_t = e), (Pt = dd(r)), !0) : !1
        );
      case 6:
        return (
          (r = od(r, e.pendingProps)),
          r !== null ? ((e.stateNode = r), (_t = e), (Pt = null), !0) : !1
        );
      case 13:
        if (((r = ld(r)), r !== null)) {
          var i = Dr !== null ? { id: er, overflow: tr } : null;
          return (
            (e.memoizedState = {
              dehydrated: r,
              treeContext: i,
              retryLane: 1073741824,
            }),
            (i = Rt(18, null, null, 0)),
            (i.stateNode = r),
            (i.return = e),
            (e.child = i),
            (_t = e),
            (Pt = null),
            !0
          );
        }
        return !1;
      default:
        return !1;
    }
  }
  function ws(e) {
    return (e.mode & 1) !== 0 && (e.flags & 128) === 0;
  }
  function Cs(e) {
    if (Ie) {
      var r = Pt;
      if (r) {
        var i = r;
        if (!kl(e, r)) {
          if (ws(e)) throw Error(h(418));
          r = ui(i);
          var o = _t;
          r && kl(e, r)
            ? El(o, i)
            : ((e.flags = (e.flags & -4097) | 2), (Ie = !1), (_t = e));
        }
      } else {
        if (ws(e)) throw Error(h(418));
        (e.flags = (e.flags & -4097) | 2), (Ie = !1), (_t = e);
      }
    }
  }
  function Tl(e) {
    for (
      e = e.return;
      e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13;

    )
      e = e.return;
    _t = e;
  }
  function _i(e) {
    if (!Me || e !== _t) return !1;
    if (!Ie) return Tl(e), (Ie = !0), !1;
    if (
      e.tag !== 3 &&
      (e.tag !== 5 || (Cd(e.type) && !nt(e.type, e.memoizedProps)))
    ) {
      var r = Pt;
      if (r) {
        if (ws(e)) throw (Nl(), Error(h(418)));
        for (; r; ) El(e, r), (r = ui(r));
      }
    }
    if ((Tl(e), e.tag === 13)) {
      if (!Me) throw Error(h(316));
      if (((e = e.memoizedState), (e = e !== null ? e.dehydrated : null), !e))
        throw Error(h(317));
      Pt = md(e);
    } else Pt = _t ? ui(e.stateNode) : null;
    return !0;
  }
  function Nl() {
    for (var e = Pt; e; ) e = ui(e);
  }
  function on() {
    Me && ((Pt = _t = null), (Ln = Ie = !1));
  }
  function xs(e) {
    Lt === null ? (Lt = [e]) : Lt.push(e);
  }
  var Ud = c.ReactCurrentBatchConfig;
  function Si(e, r) {
    if (Mt(e, r)) return !0;
    if (
      typeof e != "object" ||
      e === null ||
      typeof r != "object" ||
      r === null
    )
      return !1;
    var i = Object.keys(e),
      o = Object.keys(r);
    if (i.length !== o.length) return !1;
    for (o = 0; o < i.length; o++) {
      var u = i[o];
      if (!Ed.call(r, u) || !Mt(e[u], r[u])) return !1;
    }
    return !0;
  }
  function zd(e) {
    switch (e.tag) {
      case 5:
        return Fn(e.type);
      case 16:
        return Fn("Lazy");
      case 13:
        return Fn("Suspense");
      case 19:
        return Fn("SuspenseList");
      case 0:
      case 2:
      case 15:
        return (e = hs(e.type, !1)), e;
      case 11:
        return (e = hs(e.type.render, !1)), e;
      case 1:
        return (e = hs(e.type, !0)), e;
      default:
        return "";
    }
  }
  function Dn(e, r, i) {
    if (
      ((e = i.ref),
      e !== null && typeof e != "function" && typeof e != "object")
    ) {
      if (i._owner) {
        if (((i = i._owner), i)) {
          if (i.tag !== 1) throw Error(h(309));
          var o = i.stateNode;
        }
        if (!o) throw Error(h(147, e));
        var u = o,
          g = "" + e;
        return r !== null &&
          r.ref !== null &&
          typeof r.ref == "function" &&
          r.ref._stringRef === g
          ? r.ref
          : ((r = function (S) {
              var b = u.refs;
              S === null ? delete b[g] : (b[g] = S);
            }),
            (r._stringRef = g),
            r);
      }
      if (typeof e != "string") throw Error(h(284));
      if (!i._owner) throw Error(h(290, e));
    }
    return e;
  }
  function wi(e, r) {
    throw (
      ((e = Object.prototype.toString.call(r)),
      Error(
        h(
          31,
          e === "[object Object]"
            ? "object with keys {" + Object.keys(r).join(", ") + "}"
            : e
        )
      ))
    );
  }
  function Rl(e) {
    var r = e._init;
    return r(e._payload);
  }
  function bl(e) {
    function r(D, M) {
      if (e) {
        var U = D.deletions;
        U === null ? ((D.deletions = [M]), (D.flags |= 16)) : U.push(M);
      }
    }
    function i(D, M) {
      if (!e) return null;
      for (; M !== null; ) r(D, M), (M = M.sibling);
      return null;
    }
    function o(D, M) {
      for (D = new Map(); M !== null; )
        M.key !== null ? D.set(M.key, M) : D.set(M.index, M), (M = M.sibling);
      return D;
    }
    function u(D, M) {
      return (D = xr(D, M)), (D.index = 0), (D.sibling = null), D;
    }
    function g(D, M, U) {
      return (
        (D.index = U),
        e
          ? ((U = D.alternate),
            U !== null
              ? ((U = U.index), U < M ? ((D.flags |= 2), M) : U)
              : ((D.flags |= 2), M))
          : ((D.flags |= 1048576), M)
      );
    }
    function S(D) {
      return e && D.alternate === null && (D.flags |= 2), D;
    }
    function b(D, M, U, $) {
      return M === null || M.tag !== 6
        ? ((M = _o(U, D.mode, $)), (M.return = D), M)
        : ((M = u(M, U)), (M.return = D), M);
    }
    function I(D, M, U, $) {
      var ae = U.type;
      return ae === m
        ? ee(D, M, U.props.children, $, U.key)
        : M !== null &&
          (M.elementType === ae ||
            (typeof ae == "object" &&
              ae !== null &&
              ae.$$typeof === v &&
              Rl(ae) === M.type))
        ? (($ = u(M, U.props)), ($.ref = Dn(D, M, U)), ($.return = D), $)
        : (($ = Ji(U.type, U.key, U.props, null, D.mode, $)),
          ($.ref = Dn(D, M, U)),
          ($.return = D),
          $);
    }
    function j(D, M, U, $) {
      return M === null ||
        M.tag !== 4 ||
        M.stateNode.containerInfo !== U.containerInfo ||
        M.stateNode.implementation !== U.implementation
        ? ((M = So(U, D.mode, $)), (M.return = D), M)
        : ((M = u(M, U.children || [])), (M.return = D), M);
    }
    function ee(D, M, U, $, ae) {
      return M === null || M.tag !== 7
        ? ((M = Vr(U, D.mode, $, ae)), (M.return = D), M)
        : ((M = u(M, U)), (M.return = D), M);
    }
    function le(D, M, U) {
      if ((typeof M == "string" && M !== "") || typeof M == "number")
        return (M = _o("" + M, D.mode, U)), (M.return = D), M;
      if (typeof M == "object" && M !== null) {
        switch (M.$$typeof) {
          case f:
            return (
              (U = Ji(M.type, M.key, M.props, null, D.mode, U)),
              (U.ref = Dn(D, null, M)),
              (U.return = D),
              U
            );
          case p:
            return (M = So(M, D.mode, U)), (M.return = D), M;
          case v:
            var $ = M._init;
            return le(D, $(M._payload), U);
        }
        if (X(M) || N(M))
          return (M = Vr(M, D.mode, U, null)), (M.return = D), M;
        wi(D, M);
      }
      return null;
    }
    function q(D, M, U, $) {
      var ae = M !== null ? M.key : null;
      if ((typeof U == "string" && U !== "") || typeof U == "number")
        return ae !== null ? null : b(D, M, "" + U, $);
      if (typeof U == "object" && U !== null) {
        switch (U.$$typeof) {
          case f:
            return U.key === ae ? I(D, M, U, $) : null;
          case p:
            return U.key === ae ? j(D, M, U, $) : null;
          case v:
            return (ae = U._init), q(D, M, ae(U._payload), $);
        }
        if (X(U) || N(U)) return ae !== null ? null : ee(D, M, U, $, null);
        wi(D, U);
      }
      return null;
    }
    function De(D, M, U, $, ae) {
      if ((typeof $ == "string" && $ !== "") || typeof $ == "number")
        return (D = D.get(U) || null), b(M, D, "" + $, ae);
      if (typeof $ == "object" && $ !== null) {
        switch ($.$$typeof) {
          case f:
            return (
              (D = D.get($.key === null ? U : $.key) || null), I(M, D, $, ae)
            );
          case p:
            return (
              (D = D.get($.key === null ? U : $.key) || null), j(M, D, $, ae)
            );
          case v:
            var de = $._init;
            return De(D, M, U, de($._payload), ae);
        }
        if (X($) || N($)) return (D = D.get(U) || null), ee(M, D, $, ae, null);
        wi(M, $);
      }
      return null;
    }
    function Re(D, M, U, $) {
      for (
        var ae = null, de = null, ue = M, xe = (M = 0), rt = null;
        ue !== null && xe < U.length;
        xe++
      ) {
        ue.index > xe ? ((rt = ue), (ue = null)) : (rt = ue.sibling);
        var Pe = q(D, ue, U[xe], $);
        if (Pe === null) {
          ue === null && (ue = rt);
          break;
        }
        e && ue && Pe.alternate === null && r(D, ue),
          (M = g(Pe, M, xe)),
          de === null ? (ae = Pe) : (de.sibling = Pe),
          (de = Pe),
          (ue = rt);
      }
      if (xe === U.length) return i(D, ue), Ie && Ir(D, xe), ae;
      if (ue === null) {
        for (; xe < U.length; xe++)
          (ue = le(D, U[xe], $)),
            ue !== null &&
              ((M = g(ue, M, xe)),
              de === null ? (ae = ue) : (de.sibling = ue),
              (de = ue));
        return Ie && Ir(D, xe), ae;
      }
      for (ue = o(D, ue); xe < U.length; xe++)
        (rt = De(ue, D, xe, U[xe], $)),
          rt !== null &&
            (e &&
              rt.alternate !== null &&
              ue.delete(rt.key === null ? xe : rt.key),
            (M = g(rt, M, xe)),
            de === null ? (ae = rt) : (de.sibling = rt),
            (de = rt));
      return (
        e &&
          ue.forEach(function (Pr) {
            return r(D, Pr);
          }),
        Ie && Ir(D, xe),
        ae
      );
    }
    function yt(D, M, U, $) {
      var ae = N(U);
      if (typeof ae != "function") throw Error(h(150));
      if (((U = ae.call(U)), U == null)) throw Error(h(151));
      for (
        var de = (ae = null), ue = M, xe = (M = 0), rt = null, Pe = U.next();
        ue !== null && !Pe.done;
        xe++, Pe = U.next()
      ) {
        ue.index > xe ? ((rt = ue), (ue = null)) : (rt = ue.sibling);
        var Pr = q(D, ue, Pe.value, $);
        if (Pr === null) {
          ue === null && (ue = rt);
          break;
        }
        e && ue && Pr.alternate === null && r(D, ue),
          (M = g(Pr, M, xe)),
          de === null ? (ae = Pr) : (de.sibling = Pr),
          (de = Pr),
          (ue = rt);
      }
      if (Pe.done) return i(D, ue), Ie && Ir(D, xe), ae;
      if (ue === null) {
        for (; !Pe.done; xe++, Pe = U.next())
          (Pe = le(D, Pe.value, $)),
            Pe !== null &&
              ((M = g(Pe, M, xe)),
              de === null ? (ae = Pe) : (de.sibling = Pe),
              (de = Pe));
        return Ie && Ir(D, xe), ae;
      }
      for (ue = o(D, ue); !Pe.done; xe++, Pe = U.next())
        (Pe = De(ue, D, xe, Pe.value, $)),
          Pe !== null &&
            (e &&
              Pe.alternate !== null &&
              ue.delete(Pe.key === null ? xe : Pe.key),
            (M = g(Pe, M, xe)),
            de === null ? (ae = Pe) : (de.sibling = Pe),
            (de = Pe));
      return (
        e &&
          ue.forEach(function (vc) {
            return r(D, vc);
          }),
        Ie && Ir(D, xe),
        ae
      );
    }
    function ar(D, M, U, $) {
      if (
        (typeof U == "object" &&
          U !== null &&
          U.type === m &&
          U.key === null &&
          (U = U.props.children),
        typeof U == "object" && U !== null)
      ) {
        switch (U.$$typeof) {
          case f:
            e: {
              for (var ae = U.key, de = M; de !== null; ) {
                if (de.key === ae) {
                  if (((ae = U.type), ae === m)) {
                    if (de.tag === 7) {
                      i(D, de.sibling),
                        (M = u(de, U.props.children)),
                        (M.return = D),
                        (D = M);
                      break e;
                    }
                  } else if (
                    de.elementType === ae ||
                    (typeof ae == "object" &&
                      ae !== null &&
                      ae.$$typeof === v &&
                      Rl(ae) === de.type)
                  ) {
                    i(D, de.sibling),
                      (M = u(de, U.props)),
                      (M.ref = Dn(D, de, U)),
                      (M.return = D),
                      (D = M);
                    break e;
                  }
                  i(D, de);
                  break;
                } else r(D, de);
                de = de.sibling;
              }
              U.type === m
                ? ((M = Vr(U.props.children, D.mode, $, U.key)),
                  (M.return = D),
                  (D = M))
                : (($ = Ji(U.type, U.key, U.props, null, D.mode, $)),
                  ($.ref = Dn(D, M, U)),
                  ($.return = D),
                  (D = $));
            }
            return S(D);
          case p:
            e: {
              for (de = U.key; M !== null; ) {
                if (M.key === de)
                  if (
                    M.tag === 4 &&
                    M.stateNode.containerInfo === U.containerInfo &&
                    M.stateNode.implementation === U.implementation
                  ) {
                    i(D, M.sibling),
                      (M = u(M, U.children || [])),
                      (M.return = D),
                      (D = M);
                    break e;
                  } else {
                    i(D, M);
                    break;
                  }
                else r(D, M);
                M = M.sibling;
              }
              (M = So(U, D.mode, $)), (M.return = D), (D = M);
            }
            return S(D);
          case v:
            return (de = U._init), ar(D, M, de(U._payload), $);
        }
        if (X(U)) return Re(D, M, U, $);
        if (N(U)) return yt(D, M, U, $);
        wi(D, U);
      }
      return (typeof U == "string" && U !== "") || typeof U == "number"
        ? ((U = "" + U),
          M !== null && M.tag === 6
            ? (i(D, M.sibling), (M = u(M, U)), (M.return = D), (D = M))
            : (i(D, M), (M = _o(U, D.mode, $)), (M.return = D), (D = M)),
          S(D))
        : i(D, M);
    }
    return ar;
  }
  var ln = bl(!0),
    Fl = bl(!1),
    Ci = pr(null),
    xi = null,
    un = null,
    Ps = null;
  function Es() {
    Ps = un = xi = null;
  }
  function Al(e, r, i) {
    ke
      ? (Ae(Ci, r._currentValue), (r._currentValue = i))
      : (Ae(Ci, r._currentValue2), (r._currentValue2 = i));
  }
  function ks(e) {
    var r = Ci.current;
    Le(Ci), ke ? (e._currentValue = r) : (e._currentValue2 = r);
  }
  function Ts(e, r, i) {
    for (; e !== null; ) {
      var o = e.alternate;
      if (
        ((e.childLanes & r) !== r
          ? ((e.childLanes |= r), o !== null && (o.childLanes |= r))
          : o !== null && (o.childLanes & r) !== r && (o.childLanes |= r),
        e === i)
      )
        break;
      e = e.return;
    }
  }
  function hn(e, r) {
    (xi = e),
      (Ps = un = null),
      (e = e.dependencies),
      e !== null &&
        e.firstContext !== null &&
        (e.lanes & r && (pt = !0), (e.firstContext = null));
  }
  function Et(e) {
    var r = ke ? e._currentValue : e._currentValue2;
    if (Ps !== e)
      if (((e = { context: e, memoizedValue: r, next: null }), un === null)) {
        if (xi === null) throw Error(h(308));
        (un = e), (xi.dependencies = { lanes: 0, firstContext: e });
      } else un = un.next = e;
    return r;
  }
  var Or = null;
  function Ns(e) {
    Or === null ? (Or = [e]) : Or.push(e);
  }
  function Ml(e, r, i, o) {
    var u = r.interleaved;
    return (
      u === null ? ((i.next = i), Ns(r)) : ((i.next = u.next), (u.next = i)),
      (r.interleaved = i),
      jt(e, o)
    );
  }
  function jt(e, r) {
    e.lanes |= r;
    var i = e.alternate;
    for (i !== null && (i.lanes |= r), i = e, e = e.return; e !== null; )
      (e.childLanes |= r),
        (i = e.alternate),
        i !== null && (i.childLanes |= r),
        (i = e),
        (e = e.return);
    return i.tag === 3 ? i.stateNode : null;
  }
  var mr = !1;
  function Rs(e) {
    e.updateQueue = {
      baseState: e.memoizedState,
      firstBaseUpdate: null,
      lastBaseUpdate: null,
      shared: { pending: null, interleaved: null, lanes: 0 },
      effects: null,
    };
  }
  function Ll(e, r) {
    (e = e.updateQueue),
      r.updateQueue === e &&
        (r.updateQueue = {
          baseState: e.baseState,
          firstBaseUpdate: e.firstBaseUpdate,
          lastBaseUpdate: e.lastBaseUpdate,
          shared: e.shared,
          effects: e.effects,
        });
  }
  function rr(e, r) {
    return {
      eventTime: e,
      lane: r,
      tag: 0,
      payload: null,
      callback: null,
      next: null,
    };
  }
  function yr(e, r, i) {
    var o = e.updateQueue;
    if (o === null) return null;
    if (((o = o.shared), pe & 2)) {
      var u = o.pending;
      return (
        u === null ? (r.next = r) : ((r.next = u.next), (u.next = r)),
        (o.pending = r),
        jt(e, i)
      );
    }
    return (
      (u = o.interleaved),
      u === null ? ((r.next = r), Ns(o)) : ((r.next = u.next), (u.next = r)),
      (o.interleaved = r),
      jt(e, i)
    );
  }
  function Pi(e, r, i) {
    if (
      ((r = r.updateQueue), r !== null && ((r = r.shared), (i & 4194240) !== 0))
    ) {
      var o = r.lanes;
      (o &= e.pendingLanes), (i |= o), (r.lanes = i), gs(e, i);
    }
  }
  function Dl(e, r) {
    var i = e.updateQueue,
      o = e.alternate;
    if (o !== null && ((o = o.updateQueue), i === o)) {
      var u = null,
        g = null;
      if (((i = i.firstBaseUpdate), i !== null)) {
        do {
          var S = {
            eventTime: i.eventTime,
            lane: i.lane,
            tag: i.tag,
            payload: i.payload,
            callback: i.callback,
            next: null,
          };
          g === null ? (u = g = S) : (g = g.next = S), (i = i.next);
        } while (i !== null);
        g === null ? (u = g = r) : (g = g.next = r);
      } else u = g = r;
      (i = {
        baseState: o.baseState,
        firstBaseUpdate: u,
        lastBaseUpdate: g,
        shared: o.shared,
        effects: o.effects,
      }),
        (e.updateQueue = i);
      return;
    }
    (e = i.lastBaseUpdate),
      e === null ? (i.firstBaseUpdate = r) : (e.next = r),
      (i.lastBaseUpdate = r);
  }
  function Ei(e, r, i, o) {
    var u = e.updateQueue;
    mr = !1;
    var g = u.firstBaseUpdate,
      S = u.lastBaseUpdate,
      b = u.shared.pending;
    if (b !== null) {
      u.shared.pending = null;
      var I = b,
        j = I.next;
      (I.next = null), S === null ? (g = j) : (S.next = j), (S = I);
      var ee = e.alternate;
      ee !== null &&
        ((ee = ee.updateQueue),
        (b = ee.lastBaseUpdate),
        b !== S &&
          (b === null ? (ee.firstBaseUpdate = j) : (b.next = j),
          (ee.lastBaseUpdate = I)));
    }
    if (g !== null) {
      var le = u.baseState;
      (S = 0), (ee = j = I = null), (b = g);
      do {
        var q = b.lane,
          De = b.eventTime;
        if ((o & q) === q) {
          ee !== null &&
            (ee = ee.next =
              {
                eventTime: De,
                lane: 0,
                tag: b.tag,
                payload: b.payload,
                callback: b.callback,
                next: null,
              });
          e: {
            var Re = e,
              yt = b;
            switch (((q = r), (De = i), yt.tag)) {
              case 1:
                if (((Re = yt.payload), typeof Re == "function")) {
                  le = Re.call(De, le, q);
                  break e;
                }
                le = Re;
                break e;
              case 3:
                Re.flags = (Re.flags & -65537) | 128;
              case 0:
                if (
                  ((Re = yt.payload),
                  (q = typeof Re == "function" ? Re.call(De, le, q) : Re),
                  q == null)
                )
                  break e;
                le = l({}, le, q);
                break e;
              case 2:
                mr = !0;
            }
          }
          b.callback !== null &&
            b.lane !== 0 &&
            ((e.flags |= 64),
            (q = u.effects),
            q === null ? (u.effects = [b]) : q.push(b));
        } else
          (De = {
            eventTime: De,
            lane: q,
            tag: b.tag,
            payload: b.payload,
            callback: b.callback,
            next: null,
          }),
            ee === null ? ((j = ee = De), (I = le)) : (ee = ee.next = De),
            (S |= q);
        if (((b = b.next), b === null)) {
          if (((b = u.shared.pending), b === null)) break;
          (q = b),
            (b = q.next),
            (q.next = null),
            (u.lastBaseUpdate = q),
            (u.shared.pending = null);
        }
      } while (!0);
      if (
        (ee === null && (I = le),
        (u.baseState = I),
        (u.firstBaseUpdate = j),
        (u.lastBaseUpdate = ee),
        (r = u.shared.interleaved),
        r !== null)
      ) {
        u = r;
        do (S |= u.lane), (u = u.next);
        while (u !== r);
      } else g === null && (u.shared.lanes = 0);
      (Ur |= S), (e.lanes = S), (e.memoizedState = le);
    }
  }
  function Il(e, r, i) {
    if (((e = r.effects), (r.effects = null), e !== null))
      for (r = 0; r < e.length; r++) {
        var o = e[r],
          u = o.callback;
        if (u !== null) {
          if (((o.callback = null), (o = i), typeof u != "function"))
            throw Error(h(191, u));
          u.call(o);
        }
      }
  }
  var In = {},
    kt = pr(In),
    On = pr(In),
    dn = pr(In);
  function Wt(e) {
    if (e === In) throw Error(h(174));
    return e;
  }
  function bs(e, r) {
    Ae(dn, r), Ae(On, e), Ae(kt, In), (e = ge(r)), Le(kt), Ae(kt, e);
  }
  function cn() {
    Le(kt), Le(On), Le(dn);
  }
  function Ol(e) {
    var r = Wt(dn.current),
      i = Wt(kt.current);
    (r = B(i, e.type, r)), i !== r && (Ae(On, e), Ae(kt, r));
  }
  function Fs(e) {
    On.current === e && (Le(kt), Le(On));
  }
  var Ue = pr(0);
  function ki(e) {
    for (var r = e; r !== null; ) {
      if (r.tag === 13) {
        var i = r.memoizedState;
        if (i !== null && ((i = i.dehydrated), i === null || vl(i) || os(i)))
          return r;
      } else if (r.tag === 19 && r.memoizedProps.revealOrder !== void 0) {
        if (r.flags & 128) return r;
      } else if (r.child !== null) {
        (r.child.return = r), (r = r.child);
        continue;
      }
      if (r === e) break;
      for (; r.sibling === null; ) {
        if (r.return === null || r.return === e) return null;
        r = r.return;
      }
      (r.sibling.return = r.return), (r = r.sibling);
    }
    return null;
  }
  var As = [];
  function Ms() {
    for (var e = 0; e < As.length; e++) {
      var r = As[e];
      ke
        ? (r._workInProgressVersionPrimary = null)
        : (r._workInProgressVersionSecondary = null);
    }
    As.length = 0;
  }
  var Ti = c.ReactCurrentDispatcher,
    Ls = c.ReactCurrentBatchConfig,
    Gr = 0,
    ze = null,
    Ye = null,
    et = null,
    Ni = !1,
    Gn = !1,
    Un = 0,
    Bd = 0;
  function ot() {
    throw Error(h(321));
  }
  function Ds(e, r) {
    if (r === null) return !1;
    for (var i = 0; i < r.length && i < e.length; i++)
      if (!Mt(e[i], r[i])) return !1;
    return !0;
  }
  function Is(e, r, i, o, u, g) {
    if (
      ((Gr = g),
      (ze = r),
      (r.memoizedState = null),
      (r.updateQueue = null),
      (r.lanes = 0),
      (Ti.current = e === null || e.memoizedState === null ? Wd : Kd),
      (e = i(o, u)),
      Gn)
    ) {
      g = 0;
      do {
        if (((Gn = !1), (Un = 0), 25 <= g)) throw Error(h(301));
        (g += 1),
          (et = Ye = null),
          (r.updateQueue = null),
          (Ti.current = Yd),
          (e = i(o, u));
      } while (Gn);
    }
    if (
      ((Ti.current = Fi),
      (r = Ye !== null && Ye.next !== null),
      (Gr = 0),
      (et = Ye = ze = null),
      (Ni = !1),
      r)
    )
      throw Error(h(300));
    return e;
  }
  function Os() {
    var e = Un !== 0;
    return (Un = 0), e;
  }
  function Kt() {
    var e = {
      memoizedState: null,
      baseState: null,
      baseQueue: null,
      queue: null,
      next: null,
    };
    return et === null ? (ze.memoizedState = et = e) : (et = et.next = e), et;
  }
  function Tt() {
    if (Ye === null) {
      var e = ze.alternate;
      e = e !== null ? e.memoizedState : null;
    } else e = Ye.next;
    var r = et === null ? ze.memoizedState : et.next;
    if (r !== null) (et = r), (Ye = e);
    else {
      if (e === null) throw Error(h(310));
      (Ye = e),
        (e = {
          memoizedState: Ye.memoizedState,
          baseState: Ye.baseState,
          baseQueue: Ye.baseQueue,
          queue: Ye.queue,
          next: null,
        }),
        et === null ? (ze.memoizedState = et = e) : (et = et.next = e);
    }
    return et;
  }
  function zn(e, r) {
    return typeof r == "function" ? r(e) : r;
  }
  function Gs(e) {
    var r = Tt(),
      i = r.queue;
    if (i === null) throw Error(h(311));
    i.lastRenderedReducer = e;
    var o = Ye,
      u = o.baseQueue,
      g = i.pending;
    if (g !== null) {
      if (u !== null) {
        var S = u.next;
        (u.next = g.next), (g.next = S);
      }
      (o.baseQueue = u = g), (i.pending = null);
    }
    if (u !== null) {
      (g = u.next), (o = o.baseState);
      var b = (S = null),
        I = null,
        j = g;
      do {
        var ee = j.lane;
        if ((Gr & ee) === ee)
          I !== null &&
            (I = I.next =
              {
                lane: 0,
                action: j.action,
                hasEagerState: j.hasEagerState,
                eagerState: j.eagerState,
                next: null,
              }),
            (o = j.hasEagerState ? j.eagerState : e(o, j.action));
        else {
          var le = {
            lane: ee,
            action: j.action,
            hasEagerState: j.hasEagerState,
            eagerState: j.eagerState,
            next: null,
          };
          I === null ? ((b = I = le), (S = o)) : (I = I.next = le),
            (ze.lanes |= ee),
            (Ur |= ee);
        }
        j = j.next;
      } while (j !== null && j !== g);
      I === null ? (S = o) : (I.next = b),
        Mt(o, r.memoizedState) || (pt = !0),
        (r.memoizedState = o),
        (r.baseState = S),
        (r.baseQueue = I),
        (i.lastRenderedState = o);
    }
    if (((e = i.interleaved), e !== null)) {
      u = e;
      do (g = u.lane), (ze.lanes |= g), (Ur |= g), (u = u.next);
      while (u !== e);
    } else u === null && (i.lanes = 0);
    return [r.memoizedState, i.dispatch];
  }
  function Us(e) {
    var r = Tt(),
      i = r.queue;
    if (i === null) throw Error(h(311));
    i.lastRenderedReducer = e;
    var o = i.dispatch,
      u = i.pending,
      g = r.memoizedState;
    if (u !== null) {
      i.pending = null;
      var S = (u = u.next);
      do (g = e(g, S.action)), (S = S.next);
      while (S !== u);
      Mt(g, r.memoizedState) || (pt = !0),
        (r.memoizedState = g),
        r.baseQueue === null && (r.baseState = g),
        (i.lastRenderedState = g);
    }
    return [g, o];
  }
  function Gl() {}
  function Ul(e, r) {
    var i = ze,
      o = Tt(),
      u = r(),
      g = !Mt(o.memoizedState, u);
    if (
      (g && ((o.memoizedState = u), (pt = !0)),
      (o = o.queue),
      zs(Hl.bind(null, i, o, e), [e]),
      o.getSnapshot !== r || g || (et !== null && et.memoizedState.tag & 1))
    ) {
      if (
        ((i.flags |= 2048),
        Bn(9, Bl.bind(null, i, o, u, r), void 0, null),
        tt === null)
      )
        throw Error(h(349));
      Gr & 30 || zl(i, r, u);
    }
    return u;
  }
  function zl(e, r, i) {
    (e.flags |= 16384),
      (e = { getSnapshot: r, value: i }),
      (r = ze.updateQueue),
      r === null
        ? ((r = { lastEffect: null, stores: null }),
          (ze.updateQueue = r),
          (r.stores = [e]))
        : ((i = r.stores), i === null ? (r.stores = [e]) : i.push(e));
  }
  function Bl(e, r, i, o) {
    (r.value = i), (r.getSnapshot = o), Vl(r) && jl(e);
  }
  function Hl(e, r, i) {
    return i(function () {
      Vl(r) && jl(e);
    });
  }
  function Vl(e) {
    var r = e.getSnapshot;
    e = e.value;
    try {
      var i = r();
      return !Mt(e, i);
    } catch {
      return !0;
    }
  }
  function jl(e) {
    var r = jt(e, 1);
    r !== null && Nt(r, e, 1, -1);
  }
  function Wl(e) {
    var r = Kt();
    return (
      typeof e == "function" && (e = e()),
      (r.memoizedState = r.baseState = e),
      (e = {
        pending: null,
        interleaved: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: zn,
        lastRenderedState: e,
      }),
      (r.queue = e),
      (e = e.dispatch = jd.bind(null, ze, e)),
      [r.memoizedState, e]
    );
  }
  function Bn(e, r, i, o) {
    return (
      (e = { tag: e, create: r, destroy: i, deps: o, next: null }),
      (r = ze.updateQueue),
      r === null
        ? ((r = { lastEffect: null, stores: null }),
          (ze.updateQueue = r),
          (r.lastEffect = e.next = e))
        : ((i = r.lastEffect),
          i === null
            ? (r.lastEffect = e.next = e)
            : ((o = i.next), (i.next = e), (e.next = o), (r.lastEffect = e))),
      e
    );
  }
  function Kl() {
    return Tt().memoizedState;
  }
  function Ri(e, r, i, o) {
    var u = Kt();
    (ze.flags |= e),
      (u.memoizedState = Bn(1 | r, i, void 0, o === void 0 ? null : o));
  }
  function bi(e, r, i, o) {
    var u = Tt();
    o = o === void 0 ? null : o;
    var g = void 0;
    if (Ye !== null) {
      var S = Ye.memoizedState;
      if (((g = S.destroy), o !== null && Ds(o, S.deps))) {
        u.memoizedState = Bn(r, i, g, o);
        return;
      }
    }
    (ze.flags |= e), (u.memoizedState = Bn(1 | r, i, g, o));
  }
  function Yl(e, r) {
    return Ri(8390656, 8, e, r);
  }
  function zs(e, r) {
    return bi(2048, 8, e, r);
  }
  function Xl(e, r) {
    return bi(4, 2, e, r);
  }
  function ql(e, r) {
    return bi(4, 4, e, r);
  }
  function Ql(e, r) {
    if (typeof r == "function")
      return (
        (e = e()),
        r(e),
        function () {
          r(null);
        }
      );
    if (r != null)
      return (
        (e = e()),
        (r.current = e),
        function () {
          r.current = null;
        }
      );
  }
  function $l(e, r, i) {
    return (
      (i = i != null ? i.concat([e]) : null), bi(4, 4, Ql.bind(null, r, e), i)
    );
  }
  function Bs() {}
  function Jl(e, r) {
    var i = Tt();
    r = r === void 0 ? null : r;
    var o = i.memoizedState;
    return o !== null && r !== null && Ds(r, o[1])
      ? o[0]
      : ((i.memoizedState = [e, r]), e);
  }
  function Zl(e, r) {
    var i = Tt();
    r = r === void 0 ? null : r;
    var o = i.memoizedState;
    return o !== null && r !== null && Ds(r, o[1])
      ? o[0]
      : ((e = e()), (i.memoizedState = [e, r]), e);
  }
  function eu(e, r, i) {
    return Gr & 21
      ? (Mt(i, r) ||
          ((i = Sl()), (ze.lanes |= i), (Ur |= i), (e.baseState = !0)),
        r)
      : (e.baseState && ((e.baseState = !1), (pt = !0)), (e.memoizedState = i));
  }
  function Hd(e, r) {
    var i = Ce;
    (Ce = i !== 0 && 4 > i ? i : 4), e(!0);
    var o = Ls.transition;
    Ls.transition = {};
    try {
      e(!1), r();
    } finally {
      (Ce = i), (Ls.transition = o);
    }
  }
  function tu() {
    return Tt().memoizedState;
  }
  function Vd(e, r, i) {
    var o = wr(e);
    if (
      ((i = {
        lane: o,
        action: i,
        hasEagerState: !1,
        eagerState: null,
        next: null,
      }),
      ru(e))
    )
      nu(r, i);
    else if (((i = Ml(e, r, i, o)), i !== null)) {
      var u = ht();
      Nt(i, e, o, u), iu(i, r, o);
    }
  }
  function jd(e, r, i) {
    var o = wr(e),
      u = {
        lane: o,
        action: i,
        hasEagerState: !1,
        eagerState: null,
        next: null,
      };
    if (ru(e)) nu(r, u);
    else {
      var g = e.alternate;
      if (
        e.lanes === 0 &&
        (g === null || g.lanes === 0) &&
        ((g = r.lastRenderedReducer), g !== null)
      )
        try {
          var S = r.lastRenderedState,
            b = g(S, i);
          if (((u.hasEagerState = !0), (u.eagerState = b), Mt(b, S))) {
            var I = r.interleaved;
            I === null
              ? ((u.next = u), Ns(r))
              : ((u.next = I.next), (I.next = u)),
              (r.interleaved = u);
            return;
          }
        } catch {
        } finally {
        }
      (i = Ml(e, r, u, o)),
        i !== null && ((u = ht()), Nt(i, e, o, u), iu(i, r, o));
    }
  }
  function ru(e) {
    var r = e.alternate;
    return e === ze || (r !== null && r === ze);
  }
  function nu(e, r) {
    Gn = Ni = !0;
    var i = e.pending;
    i === null ? (r.next = r) : ((r.next = i.next), (i.next = r)),
      (e.pending = r);
  }
  function iu(e, r, i) {
    if (i & 4194240) {
      var o = r.lanes;
      (o &= e.pendingLanes), (i |= o), (r.lanes = i), gs(e, i);
    }
  }
  var Fi = {
      readContext: Et,
      useCallback: ot,
      useContext: ot,
      useEffect: ot,
      useImperativeHandle: ot,
      useInsertionEffect: ot,
      useLayoutEffect: ot,
      useMemo: ot,
      useReducer: ot,
      useRef: ot,
      useState: ot,
      useDebugValue: ot,
      useDeferredValue: ot,
      useTransition: ot,
      useMutableSource: ot,
      useSyncExternalStore: ot,
      useId: ot,
      unstable_isNewReconciler: !1,
    },
    Wd = {
      readContext: Et,
      useCallback: function (e, r) {
        return (Kt().memoizedState = [e, r === void 0 ? null : r]), e;
      },
      useContext: Et,
      useEffect: Yl,
      useImperativeHandle: function (e, r, i) {
        return (
          (i = i != null ? i.concat([e]) : null),
          Ri(4194308, 4, Ql.bind(null, r, e), i)
        );
      },
      useLayoutEffect: function (e, r) {
        return Ri(4194308, 4, e, r);
      },
      useInsertionEffect: function (e, r) {
        return Ri(4, 2, e, r);
      },
      useMemo: function (e, r) {
        var i = Kt();
        return (
          (r = r === void 0 ? null : r),
          (e = e()),
          (i.memoizedState = [e, r]),
          e
        );
      },
      useReducer: function (e, r, i) {
        var o = Kt();
        return (
          (r = i !== void 0 ? i(r) : r),
          (o.memoizedState = o.baseState = r),
          (e = {
            pending: null,
            interleaved: null,
            lanes: 0,
            dispatch: null,
            lastRenderedReducer: e,
            lastRenderedState: r,
          }),
          (o.queue = e),
          (e = e.dispatch = Vd.bind(null, ze, e)),
          [o.memoizedState, e]
        );
      },
      useRef: function (e) {
        var r = Kt();
        return (e = { current: e }), (r.memoizedState = e);
      },
      useState: Wl,
      useDebugValue: Bs,
      useDeferredValue: function (e) {
        return (Kt().memoizedState = e);
      },
      useTransition: function () {
        var e = Wl(!1),
          r = e[0];
        return (e = Hd.bind(null, e[1])), (Kt().memoizedState = e), [r, e];
      },
      useMutableSource: function () {},
      useSyncExternalStore: function (e, r, i) {
        var o = ze,
          u = Kt();
        if (Ie) {
          if (i === void 0) throw Error(h(407));
          i = i();
        } else {
          if (((i = r()), tt === null)) throw Error(h(349));
          Gr & 30 || zl(o, r, i);
        }
        u.memoizedState = i;
        var g = { value: i, getSnapshot: r };
        return (
          (u.queue = g),
          Yl(Hl.bind(null, o, g, e), [e]),
          (o.flags |= 2048),
          Bn(9, Bl.bind(null, o, g, i, r), void 0, null),
          i
        );
      },
      useId: function () {
        var e = Kt(),
          r = tt.identifierPrefix;
        if (Ie) {
          var i = tr,
            o = er;
          (i = (o & ~(1 << (32 - At(o) - 1))).toString(32) + i),
            (r = ":" + r + "R" + i),
            (i = Un++),
            0 < i && (r += "H" + i.toString(32)),
            (r += ":");
        } else (i = Bd++), (r = ":" + r + "r" + i.toString(32) + ":");
        return (e.memoizedState = r);
      },
      unstable_isNewReconciler: !1,
    },
    Kd = {
      readContext: Et,
      useCallback: Jl,
      useContext: Et,
      useEffect: zs,
      useImperativeHandle: $l,
      useInsertionEffect: Xl,
      useLayoutEffect: ql,
      useMemo: Zl,
      useReducer: Gs,
      useRef: Kl,
      useState: function () {
        return Gs(zn);
      },
      useDebugValue: Bs,
      useDeferredValue: function (e) {
        var r = Tt();
        return eu(r, Ye.memoizedState, e);
      },
      useTransition: function () {
        var e = Gs(zn)[0],
          r = Tt().memoizedState;
        return [e, r];
      },
      useMutableSource: Gl,
      useSyncExternalStore: Ul,
      useId: tu,
      unstable_isNewReconciler: !1,
    },
    Yd = {
      readContext: Et,
      useCallback: Jl,
      useContext: Et,
      useEffect: zs,
      useImperativeHandle: $l,
      useInsertionEffect: Xl,
      useLayoutEffect: ql,
      useMemo: Zl,
      useReducer: Us,
      useRef: Kl,
      useState: function () {
        return Us(zn);
      },
      useDebugValue: Bs,
      useDeferredValue: function (e) {
        var r = Tt();
        return Ye === null ? (r.memoizedState = e) : eu(r, Ye.memoizedState, e);
      },
      useTransition: function () {
        var e = Us(zn)[0],
          r = Tt().memoizedState;
        return [e, r];
      },
      useMutableSource: Gl,
      useSyncExternalStore: Ul,
      useId: tu,
      unstable_isNewReconciler: !1,
    };
  function Dt(e, r) {
    if (e && e.defaultProps) {
      (r = l({}, r)), (e = e.defaultProps);
      for (var i in e) r[i] === void 0 && (r[i] = e[i]);
      return r;
    }
    return r;
  }
  function Hs(e, r, i, o) {
    (r = e.memoizedState),
      (i = i(o, r)),
      (i = i == null ? r : l({}, r, i)),
      (e.memoizedState = i),
      e.lanes === 0 && (e.updateQueue.baseState = i);
  }
  var Ai = {
    isMounted: function (e) {
      return (e = e._reactInternals) ? z(e) === e : !1;
    },
    enqueueSetState: function (e, r, i) {
      e = e._reactInternals;
      var o = ht(),
        u = wr(e),
        g = rr(o, u);
      (g.payload = r),
        i != null && (g.callback = i),
        (r = yr(e, g, u)),
        r !== null && (Nt(r, e, u, o), Pi(r, e, u));
    },
    enqueueReplaceState: function (e, r, i) {
      e = e._reactInternals;
      var o = ht(),
        u = wr(e),
        g = rr(o, u);
      (g.tag = 1),
        (g.payload = r),
        i != null && (g.callback = i),
        (r = yr(e, g, u)),
        r !== null && (Nt(r, e, u, o), Pi(r, e, u));
    },
    enqueueForceUpdate: function (e, r) {
      e = e._reactInternals;
      var i = ht(),
        o = wr(e),
        u = rr(i, o);
      (u.tag = 2),
        r != null && (u.callback = r),
        (r = yr(e, u, o)),
        r !== null && (Nt(r, e, o, i), Pi(r, e, o));
    },
  };
  function au(e, r, i, o, u, g, S) {
    return (
      (e = e.stateNode),
      typeof e.shouldComponentUpdate == "function"
        ? e.shouldComponentUpdate(o, g, S)
        : r.prototype && r.prototype.isPureReactComponent
        ? !Si(i, o) || !Si(u, g)
        : !0
    );
  }
  function su(e, r, i) {
    var o = !1,
      u = vr,
      g = r.contextType;
    return (
      typeof g == "object" && g !== null
        ? (g = Et(g))
        : ((u = gt(r) ? Lr : st.current),
          (o = r.contextTypes),
          (g = (o = o != null) ? nn(e, u) : vr)),
      (r = new r(i, g)),
      (e.memoizedState =
        r.state !== null && r.state !== void 0 ? r.state : null),
      (r.updater = Ai),
      (e.stateNode = r),
      (r._reactInternals = e),
      o &&
        ((e = e.stateNode),
        (e.__reactInternalMemoizedUnmaskedChildContext = u),
        (e.__reactInternalMemoizedMaskedChildContext = g)),
      r
    );
  }
  function ou(e, r, i, o) {
    (e = r.state),
      typeof r.componentWillReceiveProps == "function" &&
        r.componentWillReceiveProps(i, o),
      typeof r.UNSAFE_componentWillReceiveProps == "function" &&
        r.UNSAFE_componentWillReceiveProps(i, o),
      r.state !== e && Ai.enqueueReplaceState(r, r.state, null);
  }
  function Vs(e, r, i, o) {
    var u = e.stateNode;
    (u.props = i), (u.state = e.memoizedState), (u.refs = {}), Rs(e);
    var g = r.contextType;
    typeof g == "object" && g !== null
      ? (u.context = Et(g))
      : ((g = gt(r) ? Lr : st.current), (u.context = nn(e, g))),
      (u.state = e.memoizedState),
      (g = r.getDerivedStateFromProps),
      typeof g == "function" && (Hs(e, r, g, i), (u.state = e.memoizedState)),
      typeof r.getDerivedStateFromProps == "function" ||
        typeof u.getSnapshotBeforeUpdate == "function" ||
        (typeof u.UNSAFE_componentWillMount != "function" &&
          typeof u.componentWillMount != "function") ||
        ((r = u.state),
        typeof u.componentWillMount == "function" && u.componentWillMount(),
        typeof u.UNSAFE_componentWillMount == "function" &&
          u.UNSAFE_componentWillMount(),
        r !== u.state && Ai.enqueueReplaceState(u, u.state, null),
        Ei(e, i, u, o),
        (u.state = e.memoizedState)),
      typeof u.componentDidMount == "function" && (e.flags |= 4194308);
  }
  function fn(e, r) {
    try {
      var i = "",
        o = r;
      do (i += zd(o)), (o = o.return);
      while (o);
      var u = i;
    } catch (g) {
      u =
        `
Error generating stack: ` +
        g.message +
        `
` +
        g.stack;
    }
    return { value: e, source: r, stack: u, digest: null };
  }
  function js(e, r, i) {
    return { value: e, source: null, stack: i ?? null, digest: r ?? null };
  }
  function Ws(e, r) {
    try {
      console.error(r.value);
    } catch (i) {
      setTimeout(function () {
        throw i;
      });
    }
  }
  var Xd = typeof WeakMap == "function" ? WeakMap : Map;
  function lu(e, r, i) {
    (i = rr(-1, i)), (i.tag = 3), (i.payload = { element: null });
    var o = r.value;
    return (
      (i.callback = function () {
        Ki || ((Ki = !0), (co = o)), Ws(e, r);
      }),
      i
    );
  }
  function uu(e, r, i) {
    (i = rr(-1, i)), (i.tag = 3);
    var o = e.type.getDerivedStateFromError;
    if (typeof o == "function") {
      var u = r.value;
      (i.payload = function () {
        return o(u);
      }),
        (i.callback = function () {
          Ws(e, r);
        });
    }
    var g = e.stateNode;
    return (
      g !== null &&
        typeof g.componentDidCatch == "function" &&
        (i.callback = function () {
          Ws(e, r),
            typeof o != "function" &&
              (_r === null ? (_r = new Set([this])) : _r.add(this));
          var S = r.stack;
          this.componentDidCatch(r.value, {
            componentStack: S !== null ? S : "",
          });
        }),
      i
    );
  }
  function hu(e, r, i) {
    var o = e.pingCache;
    if (o === null) {
      o = e.pingCache = new Xd();
      var u = new Set();
      o.set(r, u);
    } else (u = o.get(r)), u === void 0 && ((u = new Set()), o.set(r, u));
    u.has(i) || (u.add(i), (e = lc.bind(null, e, r, i)), r.then(e, e));
  }
  function du(e) {
    do {
      var r;
      if (
        ((r = e.tag === 13) &&
          ((r = e.memoizedState),
          (r = r !== null ? r.dehydrated !== null : !0)),
        r)
      )
        return e;
      e = e.return;
    } while (e !== null);
    return null;
  }
  function cu(e, r, i, o, u) {
    return e.mode & 1
      ? ((e.flags |= 65536), (e.lanes = u), e)
      : (e === r
          ? (e.flags |= 65536)
          : ((e.flags |= 128),
            (i.flags |= 131072),
            (i.flags &= -52805),
            i.tag === 1 &&
              (i.alternate === null
                ? (i.tag = 17)
                : ((r = rr(-1, 1)), (r.tag = 2), yr(i, r, 1))),
            (i.lanes |= 1)),
        e);
  }
  var qd = c.ReactCurrentOwner,
    pt = !1;
  function ct(e, r, i, o) {
    r.child = e === null ? Fl(r, null, i, o) : ln(r, e.child, i, o);
  }
  function fu(e, r, i, o, u) {
    i = i.render;
    var g = r.ref;
    return (
      hn(r, u),
      (o = Is(e, r, i, o, g, u)),
      (i = Os()),
      e !== null && !pt
        ? ((r.updateQueue = e.updateQueue),
          (r.flags &= -2053),
          (e.lanes &= ~u),
          nr(e, r, u))
        : (Ie && i && _s(r), (r.flags |= 1), ct(e, r, o, u), r.child)
    );
  }
  function gu(e, r, i, o, u) {
    if (e === null) {
      var g = i.type;
      return typeof g == "function" &&
        !yo(g) &&
        g.defaultProps === void 0 &&
        i.compare === null &&
        i.defaultProps === void 0
        ? ((r.tag = 15), (r.type = g), pu(e, r, g, o, u))
        : ((e = Ji(i.type, null, o, r, r.mode, u)),
          (e.ref = r.ref),
          (e.return = r),
          (r.child = e));
    }
    if (((g = e.child), !(e.lanes & u))) {
      var S = g.memoizedProps;
      if (
        ((i = i.compare), (i = i !== null ? i : Si), i(S, o) && e.ref === r.ref)
      )
        return nr(e, r, u);
    }
    return (
      (r.flags |= 1),
      (e = xr(g, o)),
      (e.ref = r.ref),
      (e.return = r),
      (r.child = e)
    );
  }
  function pu(e, r, i, o, u) {
    if (e !== null) {
      var g = e.memoizedProps;
      if (Si(g, o) && e.ref === r.ref)
        if (((pt = !1), (r.pendingProps = o = g), (e.lanes & u) !== 0))
          e.flags & 131072 && (pt = !0);
        else return (r.lanes = e.lanes), nr(e, r, u);
    }
    return Ks(e, r, i, o, u);
  }
  function vu(e, r, i) {
    var o = r.pendingProps,
      u = o.children,
      g = e !== null ? e.memoizedState : null;
    if (o.mode === "hidden")
      if (!(r.mode & 1))
        (r.memoizedState = {
          baseLanes: 0,
          cachePool: null,
          transitions: null,
        }),
          Ae(pn, St),
          (St |= i);
      else {
        if (!(i & 1073741824))
          return (
            (e = g !== null ? g.baseLanes | i : i),
            (r.lanes = r.childLanes = 1073741824),
            (r.memoizedState = {
              baseLanes: e,
              cachePool: null,
              transitions: null,
            }),
            (r.updateQueue = null),
            Ae(pn, St),
            (St |= e),
            null
          );
        (r.memoizedState = {
          baseLanes: 0,
          cachePool: null,
          transitions: null,
        }),
          (o = g !== null ? g.baseLanes : i),
          Ae(pn, St),
          (St |= o);
      }
    else
      g !== null ? ((o = g.baseLanes | i), (r.memoizedState = null)) : (o = i),
        Ae(pn, St),
        (St |= o);
    return ct(e, r, u, i), r.child;
  }
  function mu(e, r) {
    var i = r.ref;
    ((e === null && i !== null) || (e !== null && e.ref !== i)) &&
      ((r.flags |= 512), (r.flags |= 2097152));
  }
  function Ks(e, r, i, o, u) {
    var g = gt(i) ? Lr : st.current;
    return (
      (g = nn(r, g)),
      hn(r, u),
      (i = Is(e, r, i, o, g, u)),
      (o = Os()),
      e !== null && !pt
        ? ((r.updateQueue = e.updateQueue),
          (r.flags &= -2053),
          (e.lanes &= ~u),
          nr(e, r, u))
        : (Ie && o && _s(r), (r.flags |= 1), ct(e, r, i, u), r.child)
    );
  }
  function yu(e, r, i, o, u) {
    if (gt(i)) {
      var g = !0;
      di(r);
    } else g = !1;
    if ((hn(r, u), r.stateNode === null))
      Li(e, r), su(r, i, o), Vs(r, i, o, u), (o = !0);
    else if (e === null) {
      var S = r.stateNode,
        b = r.memoizedProps;
      S.props = b;
      var I = S.context,
        j = i.contextType;
      typeof j == "object" && j !== null
        ? (j = Et(j))
        : ((j = gt(i) ? Lr : st.current), (j = nn(r, j)));
      var ee = i.getDerivedStateFromProps,
        le =
          typeof ee == "function" ||
          typeof S.getSnapshotBeforeUpdate == "function";
      le ||
        (typeof S.UNSAFE_componentWillReceiveProps != "function" &&
          typeof S.componentWillReceiveProps != "function") ||
        ((b !== o || I !== j) && ou(r, S, o, j)),
        (mr = !1);
      var q = r.memoizedState;
      (S.state = q),
        Ei(r, o, S, u),
        (I = r.memoizedState),
        b !== o || q !== I || ft.current || mr
          ? (typeof ee == "function" &&
              (Hs(r, i, ee, o), (I = r.memoizedState)),
            (b = mr || au(r, i, b, o, q, I, j))
              ? (le ||
                  (typeof S.UNSAFE_componentWillMount != "function" &&
                    typeof S.componentWillMount != "function") ||
                  (typeof S.componentWillMount == "function" &&
                    S.componentWillMount(),
                  typeof S.UNSAFE_componentWillMount == "function" &&
                    S.UNSAFE_componentWillMount()),
                typeof S.componentDidMount == "function" &&
                  (r.flags |= 4194308))
              : (typeof S.componentDidMount == "function" &&
                  (r.flags |= 4194308),
                (r.memoizedProps = o),
                (r.memoizedState = I)),
            (S.props = o),
            (S.state = I),
            (S.context = j),
            (o = b))
          : (typeof S.componentDidMount == "function" && (r.flags |= 4194308),
            (o = !1));
    } else {
      (S = r.stateNode),
        Ll(e, r),
        (b = r.memoizedProps),
        (j = r.type === r.elementType ? b : Dt(r.type, b)),
        (S.props = j),
        (le = r.pendingProps),
        (q = S.context),
        (I = i.contextType),
        typeof I == "object" && I !== null
          ? (I = Et(I))
          : ((I = gt(i) ? Lr : st.current), (I = nn(r, I)));
      var De = i.getDerivedStateFromProps;
      (ee =
        typeof De == "function" ||
        typeof S.getSnapshotBeforeUpdate == "function") ||
        (typeof S.UNSAFE_componentWillReceiveProps != "function" &&
          typeof S.componentWillReceiveProps != "function") ||
        ((b !== le || q !== I) && ou(r, S, o, I)),
        (mr = !1),
        (q = r.memoizedState),
        (S.state = q),
        Ei(r, o, S, u);
      var Re = r.memoizedState;
      b !== le || q !== Re || ft.current || mr
        ? (typeof De == "function" && (Hs(r, i, De, o), (Re = r.memoizedState)),
          (j = mr || au(r, i, j, o, q, Re, I) || !1)
            ? (ee ||
                (typeof S.UNSAFE_componentWillUpdate != "function" &&
                  typeof S.componentWillUpdate != "function") ||
                (typeof S.componentWillUpdate == "function" &&
                  S.componentWillUpdate(o, Re, I),
                typeof S.UNSAFE_componentWillUpdate == "function" &&
                  S.UNSAFE_componentWillUpdate(o, Re, I)),
              typeof S.componentDidUpdate == "function" && (r.flags |= 4),
              typeof S.getSnapshotBeforeUpdate == "function" &&
                (r.flags |= 1024))
            : (typeof S.componentDidUpdate != "function" ||
                (b === e.memoizedProps && q === e.memoizedState) ||
                (r.flags |= 4),
              typeof S.getSnapshotBeforeUpdate != "function" ||
                (b === e.memoizedProps && q === e.memoizedState) ||
                (r.flags |= 1024),
              (r.memoizedProps = o),
              (r.memoizedState = Re)),
          (S.props = o),
          (S.state = Re),
          (S.context = I),
          (o = j))
        : (typeof S.componentDidUpdate != "function" ||
            (b === e.memoizedProps && q === e.memoizedState) ||
            (r.flags |= 4),
          typeof S.getSnapshotBeforeUpdate != "function" ||
            (b === e.memoizedProps && q === e.memoizedState) ||
            (r.flags |= 1024),
          (o = !1));
    }
    return Ys(e, r, i, o, g, u);
  }
  function Ys(e, r, i, o, u, g) {
    mu(e, r);
    var S = (r.flags & 128) !== 0;
    if (!o && !S) return u && _l(r, i, !1), nr(e, r, g);
    (o = r.stateNode), (qd.current = r);
    var b =
      S && typeof i.getDerivedStateFromError != "function" ? null : o.render();
    return (
      (r.flags |= 1),
      e !== null && S
        ? ((r.child = ln(r, e.child, null, g)), (r.child = ln(r, null, b, g)))
        : ct(e, r, b, g),
      (r.memoizedState = o.state),
      u && _l(r, i, !0),
      r.child
    );
  }
  function _u(e) {
    var r = e.stateNode;
    r.pendingContext
      ? ml(e, r.pendingContext, r.pendingContext !== r.context)
      : r.context && ml(e, r.context, !1),
      bs(e, r.containerInfo);
  }
  function Su(e, r, i, o, u) {
    return on(), xs(u), (r.flags |= 256), ct(e, r, i, o), r.child;
  }
  var Xs = { dehydrated: null, treeContext: null, retryLane: 0 };
  function qs(e) {
    return { baseLanes: e, cachePool: null, transitions: null };
  }
  function wu(e, r, i) {
    var o = r.pendingProps,
      u = Ue.current,
      g = !1,
      S = (r.flags & 128) !== 0,
      b;
    if (
      ((b = S) ||
        (b = e !== null && e.memoizedState === null ? !1 : (u & 2) !== 0),
      b
        ? ((g = !0), (r.flags &= -129))
        : (e === null || e.memoizedState !== null) && (u |= 1),
      Ae(Ue, u & 1),
      e === null)
    )
      return (
        Cs(r),
        (e = r.memoizedState),
        e !== null && ((e = e.dehydrated), e !== null)
          ? (r.mode & 1
              ? os(e)
                ? (r.lanes = 8)
                : (r.lanes = 1073741824)
              : (r.lanes = 1),
            null)
          : ((S = o.children),
            (e = o.fallback),
            g
              ? ((o = r.mode),
                (g = r.child),
                (S = { mode: "hidden", children: S }),
                !(o & 1) && g !== null
                  ? ((g.childLanes = 0), (g.pendingProps = S))
                  : (g = Zi(S, o, 0, null)),
                (e = Vr(e, o, i, null)),
                (g.return = r),
                (e.return = r),
                (g.sibling = e),
                (r.child = g),
                (r.child.memoizedState = qs(i)),
                (r.memoizedState = Xs),
                e)
              : Qs(r, S))
      );
    if (((u = e.memoizedState), u !== null && ((b = u.dehydrated), b !== null)))
      return Qd(e, r, S, o, b, u, i);
    if (g) {
      (g = o.fallback), (S = r.mode), (u = e.child), (b = u.sibling);
      var I = { mode: "hidden", children: o.children };
      return (
        !(S & 1) && r.child !== u
          ? ((o = r.child),
            (o.childLanes = 0),
            (o.pendingProps = I),
            (r.deletions = null))
          : ((o = xr(u, I)), (o.subtreeFlags = u.subtreeFlags & 14680064)),
        b !== null ? (g = xr(b, g)) : ((g = Vr(g, S, i, null)), (g.flags |= 2)),
        (g.return = r),
        (o.return = r),
        (o.sibling = g),
        (r.child = o),
        (o = g),
        (g = r.child),
        (S = e.child.memoizedState),
        (S =
          S === null
            ? qs(i)
            : {
                baseLanes: S.baseLanes | i,
                cachePool: null,
                transitions: S.transitions,
              }),
        (g.memoizedState = S),
        (g.childLanes = e.childLanes & ~i),
        (r.memoizedState = Xs),
        o
      );
    }
    return (
      (g = e.child),
      (e = g.sibling),
      (o = xr(g, { mode: "visible", children: o.children })),
      !(r.mode & 1) && (o.lanes = i),
      (o.return = r),
      (o.sibling = null),
      e !== null &&
        ((i = r.deletions),
        i === null ? ((r.deletions = [e]), (r.flags |= 16)) : i.push(e)),
      (r.child = o),
      (r.memoizedState = null),
      o
    );
  }
  function Qs(e, r) {
    return (
      (r = Zi({ mode: "visible", children: r }, e.mode, 0, null)),
      (r.return = e),
      (e.child = r)
    );
  }
  function Mi(e, r, i, o) {
    return (
      o !== null && xs(o),
      ln(r, e.child, null, i),
      (e = Qs(r, r.pendingProps.children)),
      (e.flags |= 2),
      (r.memoizedState = null),
      e
    );
  }
  function Qd(e, r, i, o, u, g, S) {
    if (i)
      return r.flags & 256
        ? ((r.flags &= -257), (o = js(Error(h(422)))), Mi(e, r, S, o))
        : r.memoizedState !== null
        ? ((r.child = e.child), (r.flags |= 128), null)
        : ((g = o.fallback),
          (u = r.mode),
          (o = Zi({ mode: "visible", children: o.children }, u, 0, null)),
          (g = Vr(g, u, S, null)),
          (g.flags |= 2),
          (o.return = r),
          (g.return = r),
          (o.sibling = g),
          (r.child = o),
          r.mode & 1 && ln(r, e.child, null, S),
          (r.child.memoizedState = qs(S)),
          (r.memoizedState = Xs),
          g);
    if (!(r.mode & 1)) return Mi(e, r, S, null);
    if (os(u))
      return (
        (o = ud(u).digest),
        (g = Error(h(419))),
        (o = js(g, o, void 0)),
        Mi(e, r, S, o)
      );
    if (((i = (S & e.childLanes) !== 0), pt || i)) {
      if (((o = tt), o !== null)) {
        switch (S & -S) {
          case 4:
            u = 2;
            break;
          case 16:
            u = 8;
            break;
          case 64:
          case 128:
          case 256:
          case 512:
          case 1024:
          case 2048:
          case 4096:
          case 8192:
          case 16384:
          case 32768:
          case 65536:
          case 131072:
          case 262144:
          case 524288:
          case 1048576:
          case 2097152:
          case 4194304:
          case 8388608:
          case 16777216:
          case 33554432:
          case 67108864:
            u = 32;
            break;
          case 536870912:
            u = 268435456;
            break;
          default:
            u = 0;
        }
        (u = u & (o.suspendedLanes | S) ? 0 : u),
          u !== 0 &&
            u !== g.retryLane &&
            ((g.retryLane = u), jt(e, u), Nt(o, e, u, -1));
      }
      return mo(), (o = js(Error(h(421)))), Mi(e, r, S, o);
    }
    return vl(u)
      ? ((r.flags |= 128),
        (r.child = e.child),
        (r = uc.bind(null, e)),
        hd(u, r),
        null)
      : ((e = g.treeContext),
        Me &&
          ((Pt = fd(u)),
          (_t = r),
          (Ie = !0),
          (Lt = null),
          (Ln = !1),
          e !== null &&
            ((Ct[xt++] = er),
            (Ct[xt++] = tr),
            (Ct[xt++] = Dr),
            (er = e.id),
            (tr = e.overflow),
            (Dr = r))),
        (r = Qs(r, o.children)),
        (r.flags |= 4096),
        r);
  }
  function Cu(e, r, i) {
    e.lanes |= r;
    var o = e.alternate;
    o !== null && (o.lanes |= r), Ts(e.return, r, i);
  }
  function $s(e, r, i, o, u) {
    var g = e.memoizedState;
    g === null
      ? (e.memoizedState = {
          isBackwards: r,
          rendering: null,
          renderingStartTime: 0,
          last: o,
          tail: i,
          tailMode: u,
        })
      : ((g.isBackwards = r),
        (g.rendering = null),
        (g.renderingStartTime = 0),
        (g.last = o),
        (g.tail = i),
        (g.tailMode = u));
  }
  function xu(e, r, i) {
    var o = r.pendingProps,
      u = o.revealOrder,
      g = o.tail;
    if ((ct(e, r, o.children, i), (o = Ue.current), o & 2))
      (o = (o & 1) | 2), (r.flags |= 128);
    else {
      if (e !== null && e.flags & 128)
        e: for (e = r.child; e !== null; ) {
          if (e.tag === 13) e.memoizedState !== null && Cu(e, i, r);
          else if (e.tag === 19) Cu(e, i, r);
          else if (e.child !== null) {
            (e.child.return = e), (e = e.child);
            continue;
          }
          if (e === r) break e;
          for (; e.sibling === null; ) {
            if (e.return === null || e.return === r) break e;
            e = e.return;
          }
          (e.sibling.return = e.return), (e = e.sibling);
        }
      o &= 1;
    }
    if ((Ae(Ue, o), !(r.mode & 1))) r.memoizedState = null;
    else
      switch (u) {
        case "forwards":
          for (i = r.child, u = null; i !== null; )
            (e = i.alternate),
              e !== null && ki(e) === null && (u = i),
              (i = i.sibling);
          (i = u),
            i === null
              ? ((u = r.child), (r.child = null))
              : ((u = i.sibling), (i.sibling = null)),
            $s(r, !1, u, i, g);
          break;
        case "backwards":
          for (i = null, u = r.child, r.child = null; u !== null; ) {
            if (((e = u.alternate), e !== null && ki(e) === null)) {
              r.child = u;
              break;
            }
            (e = u.sibling), (u.sibling = i), (i = u), (u = e);
          }
          $s(r, !0, i, null, g);
          break;
        case "together":
          $s(r, !1, null, null, void 0);
          break;
        default:
          r.memoizedState = null;
      }
    return r.child;
  }
  function Li(e, r) {
    !(r.mode & 1) &&
      e !== null &&
      ((e.alternate = null), (r.alternate = null), (r.flags |= 2));
  }
  function nr(e, r, i) {
    if (
      (e !== null && (r.dependencies = e.dependencies),
      (Ur |= r.lanes),
      !(i & r.childLanes))
    )
      return null;
    if (e !== null && r.child !== e.child) throw Error(h(153));
    if (r.child !== null) {
      for (
        e = r.child, i = xr(e, e.pendingProps), r.child = i, i.return = r;
        e.sibling !== null;

      )
        (e = e.sibling),
          (i = i.sibling = xr(e, e.pendingProps)),
          (i.return = r);
      i.sibling = null;
    }
    return r.child;
  }
  function $d(e, r, i) {
    switch (r.tag) {
      case 3:
        _u(r), on();
        break;
      case 5:
        Ol(r);
        break;
      case 1:
        gt(r.type) && di(r);
        break;
      case 4:
        bs(r, r.stateNode.containerInfo);
        break;
      case 10:
        Al(r, r.type._context, r.memoizedProps.value);
        break;
      case 13:
        var o = r.memoizedState;
        if (o !== null)
          return o.dehydrated !== null
            ? (Ae(Ue, Ue.current & 1), (r.flags |= 128), null)
            : i & r.child.childLanes
            ? wu(e, r, i)
            : (Ae(Ue, Ue.current & 1),
              (e = nr(e, r, i)),
              e !== null ? e.sibling : null);
        Ae(Ue, Ue.current & 1);
        break;
      case 19:
        if (((o = (i & r.childLanes) !== 0), e.flags & 128)) {
          if (o) return xu(e, r, i);
          r.flags |= 128;
        }
        var u = r.memoizedState;
        if (
          (u !== null &&
            ((u.rendering = null), (u.tail = null), (u.lastEffect = null)),
          Ae(Ue, Ue.current),
          o)
        )
          break;
        return null;
      case 22:
      case 23:
        return (r.lanes = 0), vu(e, r, i);
    }
    return nr(e, r, i);
  }
  function Yt(e) {
    e.flags |= 4;
  }
  function Pu(e, r) {
    if (e !== null && e.child === r.child) return !0;
    if (r.flags & 16) return !1;
    for (e = r.child; e !== null; ) {
      if (e.flags & 12854 || e.subtreeFlags & 12854) return !1;
      e = e.sibling;
    }
    return !0;
  }
  var Hn, Vn, Di, Ii;
  if (he)
    (Hn = function (e, r) {
      for (var i = r.child; i !== null; ) {
        if (i.tag === 5 || i.tag === 6) ie(e, i.stateNode);
        else if (i.tag !== 4 && i.child !== null) {
          (i.child.return = i), (i = i.child);
          continue;
        }
        if (i === r) break;
        for (; i.sibling === null; ) {
          if (i.return === null || i.return === r) return;
          i = i.return;
        }
        (i.sibling.return = i.return), (i = i.sibling);
      }
    }),
      (Vn = function () {}),
      (Di = function (e, r, i, o, u) {
        if (((e = e.memoizedProps), e !== o)) {
          var g = r.stateNode,
            S = Wt(kt.current);
          (i = ve(g, i, e, o, u, S)), (r.updateQueue = i) && Yt(r);
        }
      }),
      (Ii = function (e, r, i, o) {
        i !== o && Yt(r);
      });
  else if (Fe) {
    Hn = function (e, r, i, o) {
      for (var u = r.child; u !== null; ) {
        if (u.tag === 5) {
          var g = u.stateNode;
          i && o && (g = gl(g, u.type, u.memoizedProps, u)), ie(e, g);
        } else if (u.tag === 6)
          (g = u.stateNode),
            i && o && (g = pl(g, u.memoizedProps, u)),
            ie(e, g);
        else if (u.tag !== 4) {
          if (u.tag === 22 && u.memoizedState !== null)
            (g = u.child), g !== null && (g.return = u), Hn(e, u, !0, !0);
          else if (u.child !== null) {
            (u.child.return = u), (u = u.child);
            continue;
          }
        }
        if (u === r) break;
        for (; u.sibling === null; ) {
          if (u.return === null || u.return === r) return;
          u = u.return;
        }
        (u.sibling.return = u.return), (u = u.sibling);
      }
    };
    var Eu = function (e, r, i, o) {
      for (var u = r.child; u !== null; ) {
        if (u.tag === 5) {
          var g = u.stateNode;
          i && o && (g = gl(g, u.type, u.memoizedProps, u)), fl(e, g);
        } else if (u.tag === 6)
          (g = u.stateNode),
            i && o && (g = pl(g, u.memoizedProps, u)),
            fl(e, g);
        else if (u.tag !== 4) {
          if (u.tag === 22 && u.memoizedState !== null)
            (g = u.child), g !== null && (g.return = u), Eu(e, u, !0, !0);
          else if (u.child !== null) {
            (u.child.return = u), (u = u.child);
            continue;
          }
        }
        if (u === r) break;
        for (; u.sibling === null; ) {
          if (u.return === null || u.return === r) return;
          u = u.return;
        }
        (u.sibling.return = u.return), (u = u.sibling);
      }
    };
    (Vn = function (e, r) {
      var i = r.stateNode;
      if (!Pu(e, r)) {
        e = i.containerInfo;
        var o = cl(e);
        Eu(o, r, !1, !1), (i.pendingChildren = o), Yt(r), ad(e, o);
      }
    }),
      (Di = function (e, r, i, o, u) {
        var g = e.stateNode,
          S = e.memoizedProps;
        if ((e = Pu(e, r)) && S === o) r.stateNode = g;
        else {
          var b = r.stateNode,
            I = Wt(kt.current),
            j = null;
          S !== o && (j = ve(b, i, S, o, u, I)),
            e && j === null
              ? (r.stateNode = g)
              : ((g = id(g, j, i, S, o, r, e, b)),
                Se(g, i, o, u, I) && Yt(r),
                (r.stateNode = g),
                e ? Yt(r) : Hn(g, r, !1, !1));
        }
      }),
      (Ii = function (e, r, i, o) {
        i !== o
          ? ((e = Wt(dn.current)),
            (i = Wt(kt.current)),
            (r.stateNode = we(o, e, i, r)),
            Yt(r))
          : (r.stateNode = e.stateNode);
      });
  } else (Vn = function () {}), (Di = function () {}), (Ii = function () {});
  function jn(e, r) {
    if (!Ie)
      switch (e.tailMode) {
        case "hidden":
          r = e.tail;
          for (var i = null; r !== null; )
            r.alternate !== null && (i = r), (r = r.sibling);
          i === null ? (e.tail = null) : (i.sibling = null);
          break;
        case "collapsed":
          i = e.tail;
          for (var o = null; i !== null; )
            i.alternate !== null && (o = i), (i = i.sibling);
          o === null
            ? r || e.tail === null
              ? (e.tail = null)
              : (e.tail.sibling = null)
            : (o.sibling = null);
      }
  }
  function lt(e) {
    var r = e.alternate !== null && e.alternate.child === e.child,
      i = 0,
      o = 0;
    if (r)
      for (var u = e.child; u !== null; )
        (i |= u.lanes | u.childLanes),
          (o |= u.subtreeFlags & 14680064),
          (o |= u.flags & 14680064),
          (u.return = e),
          (u = u.sibling);
    else
      for (u = e.child; u !== null; )
        (i |= u.lanes | u.childLanes),
          (o |= u.subtreeFlags),
          (o |= u.flags),
          (u.return = e),
          (u = u.sibling);
    return (e.subtreeFlags |= o), (e.childLanes = i), r;
  }
  function Jd(e, r, i) {
    var o = r.pendingProps;
    switch ((Ss(r), r.tag)) {
      case 2:
      case 16:
      case 15:
      case 0:
      case 11:
      case 7:
      case 8:
      case 12:
      case 9:
      case 14:
        return lt(r), null;
      case 1:
        return gt(r.type) && hi(), lt(r), null;
      case 3:
        return (
          (i = r.stateNode),
          cn(),
          Le(ft),
          Le(st),
          Ms(),
          i.pendingContext &&
            ((i.context = i.pendingContext), (i.pendingContext = null)),
          (e === null || e.child === null) &&
            (_i(r)
              ? Yt(r)
              : e === null ||
                (e.memoizedState.isDehydrated && !(r.flags & 256)) ||
                ((r.flags |= 1024), Lt !== null && (po(Lt), (Lt = null)))),
          Vn(e, r),
          lt(r),
          null
        );
      case 5:
        Fs(r), (i = Wt(dn.current));
        var u = r.type;
        if (e !== null && r.stateNode != null)
          Di(e, r, u, o, i),
            e.ref !== r.ref && ((r.flags |= 512), (r.flags |= 2097152));
        else {
          if (!o) {
            if (r.stateNode === null) throw Error(h(166));
            return lt(r), null;
          }
          if (((e = Wt(kt.current)), _i(r))) {
            if (!Me) throw Error(h(175));
            (e = gd(r.stateNode, r.type, r.memoizedProps, i, e, r, !Ln)),
              (r.updateQueue = e),
              e !== null && Yt(r);
          } else {
            var g = Y(u, o, i, e, r);
            Hn(g, r, !1, !1), (r.stateNode = g), Se(g, u, o, i, e) && Yt(r);
          }
          r.ref !== null && ((r.flags |= 512), (r.flags |= 2097152));
        }
        return lt(r), null;
      case 6:
        if (e && r.stateNode != null) Ii(e, r, e.memoizedProps, o);
        else {
          if (typeof o != "string" && r.stateNode === null) throw Error(h(166));
          if (((e = Wt(dn.current)), (i = Wt(kt.current)), _i(r))) {
            if (!Me) throw Error(h(176));
            if (
              ((e = r.stateNode),
              (i = r.memoizedProps),
              (o = pd(e, i, r, !Ln)) && ((u = _t), u !== null))
            )
              switch (u.tag) {
                case 3:
                  xd(u.stateNode.containerInfo, e, i, (u.mode & 1) !== 0);
                  break;
                case 5:
                  Pd(
                    u.type,
                    u.memoizedProps,
                    u.stateNode,
                    e,
                    i,
                    (u.mode & 1) !== 0
                  );
              }
            o && Yt(r);
          } else r.stateNode = we(o, e, i, r);
        }
        return lt(r), null;
      case 13:
        if (
          (Le(Ue),
          (o = r.memoizedState),
          e === null ||
            (e.memoizedState !== null && e.memoizedState.dehydrated !== null))
        ) {
          if (Ie && Pt !== null && r.mode & 1 && !(r.flags & 128))
            Nl(), on(), (r.flags |= 98560), (u = !1);
          else if (((u = _i(r)), o !== null && o.dehydrated !== null)) {
            if (e === null) {
              if (!u) throw Error(h(318));
              if (!Me) throw Error(h(344));
              if (
                ((u = r.memoizedState),
                (u = u !== null ? u.dehydrated : null),
                !u)
              )
                throw Error(h(317));
              vd(u, r);
            } else
              on(),
                !(r.flags & 128) && (r.memoizedState = null),
                (r.flags |= 4);
            lt(r), (u = !1);
          } else Lt !== null && (po(Lt), (Lt = null)), (u = !0);
          if (!u) return r.flags & 65536 ? r : null;
        }
        return r.flags & 128
          ? ((r.lanes = i), r)
          : ((i = o !== null),
            i !== (e !== null && e.memoizedState !== null) &&
              i &&
              ((r.child.flags |= 8192),
              r.mode & 1 &&
                (e === null || Ue.current & 1 ? Xe === 0 && (Xe = 3) : mo())),
            r.updateQueue !== null && (r.flags |= 4),
            lt(r),
            null);
      case 4:
        return (
          cn(),
          Vn(e, r),
          e === null && Ne(r.stateNode.containerInfo),
          lt(r),
          null
        );
      case 10:
        return ks(r.type._context), lt(r), null;
      case 17:
        return gt(r.type) && hi(), lt(r), null;
      case 19:
        if ((Le(Ue), (u = r.memoizedState), u === null)) return lt(r), null;
        if (((o = (r.flags & 128) !== 0), (g = u.rendering), g === null))
          if (o) jn(u, !1);
          else {
            if (Xe !== 0 || (e !== null && e.flags & 128))
              for (e = r.child; e !== null; ) {
                if (((g = ki(e)), g !== null)) {
                  for (
                    r.flags |= 128,
                      jn(u, !1),
                      e = g.updateQueue,
                      e !== null && ((r.updateQueue = e), (r.flags |= 4)),
                      r.subtreeFlags = 0,
                      e = i,
                      i = r.child;
                    i !== null;

                  )
                    (o = i),
                      (u = e),
                      (o.flags &= 14680066),
                      (g = o.alternate),
                      g === null
                        ? ((o.childLanes = 0),
                          (o.lanes = u),
                          (o.child = null),
                          (o.subtreeFlags = 0),
                          (o.memoizedProps = null),
                          (o.memoizedState = null),
                          (o.updateQueue = null),
                          (o.dependencies = null),
                          (o.stateNode = null))
                        : ((o.childLanes = g.childLanes),
                          (o.lanes = g.lanes),
                          (o.child = g.child),
                          (o.subtreeFlags = 0),
                          (o.deletions = null),
                          (o.memoizedProps = g.memoizedProps),
                          (o.memoizedState = g.memoizedState),
                          (o.updateQueue = g.updateQueue),
                          (o.type = g.type),
                          (u = g.dependencies),
                          (o.dependencies =
                            u === null
                              ? null
                              : {
                                  lanes: u.lanes,
                                  firstContext: u.firstContext,
                                })),
                      (i = i.sibling);
                  return Ae(Ue, (Ue.current & 1) | 2), r.child;
                }
                e = e.sibling;
              }
            u.tail !== null &&
              Ze() > ho &&
              ((r.flags |= 128), (o = !0), jn(u, !1), (r.lanes = 4194304));
          }
        else {
          if (!o)
            if (((e = ki(g)), e !== null)) {
              if (
                ((r.flags |= 128),
                (o = !0),
                (e = e.updateQueue),
                e !== null && ((r.updateQueue = e), (r.flags |= 4)),
                jn(u, !0),
                u.tail === null &&
                  u.tailMode === "hidden" &&
                  !g.alternate &&
                  !Ie)
              )
                return lt(r), null;
            } else
              2 * Ze() - u.renderingStartTime > ho &&
                i !== 1073741824 &&
                ((r.flags |= 128), (o = !0), jn(u, !1), (r.lanes = 4194304));
          u.isBackwards
            ? ((g.sibling = r.child), (r.child = g))
            : ((e = u.last),
              e !== null ? (e.sibling = g) : (r.child = g),
              (u.last = g));
        }
        return u.tail !== null
          ? ((r = u.tail),
            (u.rendering = r),
            (u.tail = r.sibling),
            (u.renderingStartTime = Ze()),
            (r.sibling = null),
            (e = Ue.current),
            Ae(Ue, o ? (e & 1) | 2 : e & 1),
            r)
          : (lt(r), null);
      case 22:
      case 23:
        return (
          vo(),
          (i = r.memoizedState !== null),
          e !== null && (e.memoizedState !== null) !== i && (r.flags |= 8192),
          i && r.mode & 1
            ? St & 1073741824 &&
              (lt(r), he && r.subtreeFlags & 6 && (r.flags |= 8192))
            : lt(r),
          null
        );
      case 24:
        return null;
      case 25:
        return null;
    }
    throw Error(h(156, r.tag));
  }
  function Zd(e, r) {
    switch ((Ss(r), r.tag)) {
      case 1:
        return (
          gt(r.type) && hi(),
          (e = r.flags),
          e & 65536 ? ((r.flags = (e & -65537) | 128), r) : null
        );
      case 3:
        return (
          cn(),
          Le(ft),
          Le(st),
          Ms(),
          (e = r.flags),
          e & 65536 && !(e & 128) ? ((r.flags = (e & -65537) | 128), r) : null
        );
      case 5:
        return Fs(r), null;
      case 13:
        if (
          (Le(Ue), (e = r.memoizedState), e !== null && e.dehydrated !== null)
        ) {
          if (r.alternate === null) throw Error(h(340));
          on();
        }
        return (
          (e = r.flags), e & 65536 ? ((r.flags = (e & -65537) | 128), r) : null
        );
      case 19:
        return Le(Ue), null;
      case 4:
        return cn(), null;
      case 10:
        return ks(r.type._context), null;
      case 22:
      case 23:
        return vo(), null;
      case 24:
        return null;
      default:
        return null;
    }
  }
  var Oi = !1,
    ut = !1,
    ec = typeof WeakSet == "function" ? WeakSet : Set,
    Z = null;
  function gn(e, r) {
    var i = e.ref;
    if (i !== null)
      if (typeof i == "function")
        try {
          i(null);
        } catch (o) {
          Oe(e, r, o);
        }
      else i.current = null;
  }
  function Js(e, r, i) {
    try {
      i();
    } catch (o) {
      Oe(e, r, o);
    }
  }
  var ku = !1;
  function tc(e, r) {
    for (Q(e.containerInfo), Z = r; Z !== null; )
      if (((e = Z), (r = e.child), (e.subtreeFlags & 1028) !== 0 && r !== null))
        (r.return = e), (Z = r);
      else
        for (; Z !== null; ) {
          e = Z;
          try {
            var i = e.alternate;
            if (e.flags & 1024)
              switch (e.tag) {
                case 0:
                case 11:
                case 15:
                  break;
                case 1:
                  if (i !== null) {
                    var o = i.memoizedProps,
                      u = i.memoizedState,
                      g = e.stateNode,
                      S = g.getSnapshotBeforeUpdate(
                        e.elementType === e.type ? o : Dt(e.type, o),
                        u
                      );
                    g.__reactInternalSnapshotBeforeUpdate = S;
                  }
                  break;
                case 3:
                  he && nd(e.stateNode.containerInfo);
                  break;
                case 5:
                case 6:
                case 4:
                case 17:
                  break;
                default:
                  throw Error(h(163));
              }
          } catch (b) {
            Oe(e, e.return, b);
          }
          if (((r = e.sibling), r !== null)) {
            (r.return = e.return), (Z = r);
            break;
          }
          Z = e.return;
        }
    return (i = ku), (ku = !1), i;
  }
  function Wn(e, r, i) {
    var o = r.updateQueue;
    if (((o = o !== null ? o.lastEffect : null), o !== null)) {
      var u = (o = o.next);
      do {
        if ((u.tag & e) === e) {
          var g = u.destroy;
          (u.destroy = void 0), g !== void 0 && Js(r, i, g);
        }
        u = u.next;
      } while (u !== o);
    }
  }
  function Gi(e, r) {
    if (
      ((r = r.updateQueue), (r = r !== null ? r.lastEffect : null), r !== null)
    ) {
      var i = (r = r.next);
      do {
        if ((i.tag & e) === e) {
          var o = i.create;
          i.destroy = o();
        }
        i = i.next;
      } while (i !== r);
    }
  }
  function Zs(e) {
    var r = e.ref;
    if (r !== null) {
      var i = e.stateNode;
      switch (e.tag) {
        case 5:
          e = se(i);
          break;
        default:
          e = i;
      }
      typeof r == "function" ? r(e) : (r.current = e);
    }
  }
  function Tu(e) {
    var r = e.alternate;
    r !== null && ((e.alternate = null), Tu(r)),
      (e.child = null),
      (e.deletions = null),
      (e.sibling = null),
      e.tag === 5 && ((r = e.stateNode), r !== null && Ft(r)),
      (e.stateNode = null),
      (e.return = null),
      (e.dependencies = null),
      (e.memoizedProps = null),
      (e.memoizedState = null),
      (e.pendingProps = null),
      (e.stateNode = null),
      (e.updateQueue = null);
  }
  function Nu(e) {
    return e.tag === 5 || e.tag === 3 || e.tag === 4;
  }
  function Ru(e) {
    e: for (;;) {
      for (; e.sibling === null; ) {
        if (e.return === null || Nu(e.return)) return null;
        e = e.return;
      }
      for (
        e.sibling.return = e.return, e = e.sibling;
        e.tag !== 5 && e.tag !== 6 && e.tag !== 18;

      ) {
        if (e.flags & 2 || e.child === null || e.tag === 4) continue e;
        (e.child.return = e), (e = e.child);
      }
      if (!(e.flags & 2)) return e.stateNode;
    }
  }
  function eo(e, r, i) {
    var o = e.tag;
    if (o === 5 || o === 6) (e = e.stateNode), r ? Q0(i, e, r) : W0(i, e);
    else if (o !== 4 && ((e = e.child), e !== null))
      for (eo(e, r, i), e = e.sibling; e !== null; )
        eo(e, r, i), (e = e.sibling);
  }
  function to(e, r, i) {
    var o = e.tag;
    if (o === 5 || o === 6) (e = e.stateNode), r ? q0(i, e, r) : j0(i, e);
    else if (o !== 4 && ((e = e.child), e !== null))
      for (to(e, r, i), e = e.sibling; e !== null; )
        to(e, r, i), (e = e.sibling);
  }
  var it = null,
    It = !1;
  function Xt(e, r, i) {
    for (i = i.child; i !== null; ) ro(e, r, i), (i = i.sibling);
  }
  function ro(e, r, i) {
    if (Ht && typeof Ht.onCommitFiberUnmount == "function")
      try {
        Ht.onCommitFiberUnmount(pi, i);
      } catch {}
    switch (i.tag) {
      case 5:
        ut || gn(i, r);
      case 6:
        if (he) {
          var o = it,
            u = It;
          (it = null),
            Xt(e, r, i),
            (it = o),
            (It = u),
            it !== null && (It ? J0(it, i.stateNode) : $0(it, i.stateNode));
        } else Xt(e, r, i);
        break;
      case 18:
        he && it !== null && (It ? wd(it, i.stateNode) : Sd(it, i.stateNode));
        break;
      case 4:
        he
          ? ((o = it),
            (u = It),
            (it = i.stateNode.containerInfo),
            (It = !0),
            Xt(e, r, i),
            (it = o),
            (It = u))
          : (Fe && ((o = i.stateNode.containerInfo), (u = cl(o)), ss(o, u)),
            Xt(e, r, i));
        break;
      case 0:
      case 11:
      case 14:
      case 15:
        if (
          !ut &&
          ((o = i.updateQueue), o !== null && ((o = o.lastEffect), o !== null))
        ) {
          u = o = o.next;
          do {
            var g = u,
              S = g.destroy;
            (g = g.tag),
              S !== void 0 && (g & 2 || g & 4) && Js(i, r, S),
              (u = u.next);
          } while (u !== o);
        }
        Xt(e, r, i);
        break;
      case 1:
        if (
          !ut &&
          (gn(i, r),
          (o = i.stateNode),
          typeof o.componentWillUnmount == "function")
        )
          try {
            (o.props = i.memoizedProps),
              (o.state = i.memoizedState),
              o.componentWillUnmount();
          } catch (b) {
            Oe(i, r, b);
          }
        Xt(e, r, i);
        break;
      case 21:
        Xt(e, r, i);
        break;
      case 22:
        i.mode & 1
          ? ((ut = (o = ut) || i.memoizedState !== null), Xt(e, r, i), (ut = o))
          : Xt(e, r, i);
        break;
      default:
        Xt(e, r, i);
    }
  }
  function bu(e) {
    var r = e.updateQueue;
    if (r !== null) {
      e.updateQueue = null;
      var i = e.stateNode;
      i === null && (i = e.stateNode = new ec()),
        r.forEach(function (o) {
          var u = hc.bind(null, e, o);
          i.has(o) || (i.add(o), o.then(u, u));
        });
    }
  }
  function Ot(e, r) {
    var i = r.deletions;
    if (i !== null)
      for (var o = 0; o < i.length; o++) {
        var u = i[o];
        try {
          var g = e,
            S = r;
          if (he) {
            var b = S;
            e: for (; b !== null; ) {
              switch (b.tag) {
                case 5:
                  (it = b.stateNode), (It = !1);
                  break e;
                case 3:
                  (it = b.stateNode.containerInfo), (It = !0);
                  break e;
                case 4:
                  (it = b.stateNode.containerInfo), (It = !0);
                  break e;
              }
              b = b.return;
            }
            if (it === null) throw Error(h(160));
            ro(g, S, u), (it = null), (It = !1);
          } else ro(g, S, u);
          var I = u.alternate;
          I !== null && (I.return = null), (u.return = null);
        } catch (j) {
          Oe(u, r, j);
        }
      }
    if (r.subtreeFlags & 12854)
      for (r = r.child; r !== null; ) Fu(r, e), (r = r.sibling);
  }
  function Fu(e, r) {
    var i = e.alternate,
      o = e.flags;
    switch (e.tag) {
      case 0:
      case 11:
      case 14:
      case 15:
        if ((Ot(r, e), qt(e), o & 4)) {
          try {
            Wn(3, e, e.return), Gi(3, e);
          } catch (q) {
            Oe(e, e.return, q);
          }
          try {
            Wn(5, e, e.return);
          } catch (q) {
            Oe(e, e.return, q);
          }
        }
        break;
      case 1:
        Ot(r, e), qt(e), o & 512 && i !== null && gn(i, i.return);
        break;
      case 5:
        if ((Ot(r, e), qt(e), o & 512 && i !== null && gn(i, i.return), he)) {
          if (e.flags & 32) {
            var u = e.stateNode;
            try {
              dl(u);
            } catch (q) {
              Oe(e, e.return, q);
            }
          }
          if (o & 4 && ((u = e.stateNode), u != null)) {
            var g = e.memoizedProps;
            if (
              ((i = i !== null ? i.memoizedProps : g),
              (o = e.type),
              (r = e.updateQueue),
              (e.updateQueue = null),
              r !== null)
            )
              try {
                X0(u, r, o, i, g, e);
              } catch (q) {
                Oe(e, e.return, q);
              }
          }
        }
        break;
      case 6:
        if ((Ot(r, e), qt(e), o & 4 && he)) {
          if (e.stateNode === null) throw Error(h(162));
          (u = e.stateNode),
            (g = e.memoizedProps),
            (i = i !== null ? i.memoizedProps : g);
          try {
            K0(u, i, g);
          } catch (q) {
            Oe(e, e.return, q);
          }
        }
        break;
      case 3:
        if ((Ot(r, e), qt(e), o & 4)) {
          if (he && Me && i !== null && i.memoizedState.isDehydrated)
            try {
              yd(r.containerInfo);
            } catch (q) {
              Oe(e, e.return, q);
            }
          if (Fe) {
            (u = r.containerInfo), (g = r.pendingChildren);
            try {
              ss(u, g);
            } catch (q) {
              Oe(e, e.return, q);
            }
          }
        }
        break;
      case 4:
        if ((Ot(r, e), qt(e), o & 4 && Fe)) {
          (g = e.stateNode), (u = g.containerInfo), (g = g.pendingChildren);
          try {
            ss(u, g);
          } catch (q) {
            Oe(e, e.return, q);
          }
        }
        break;
      case 13:
        Ot(r, e),
          qt(e),
          (u = e.child),
          u.flags & 8192 &&
            ((g = u.memoizedState !== null),
            (u.stateNode.isHidden = g),
            !g ||
              (u.alternate !== null && u.alternate.memoizedState !== null) ||
              (uo = Ze())),
          o & 4 && bu(e);
        break;
      case 22:
        var S = i !== null && i.memoizedState !== null;
        if (
          (e.mode & 1 ? ((ut = (i = ut) || S), Ot(r, e), (ut = i)) : Ot(r, e),
          qt(e),
          o & 8192)
        ) {
          if (
            ((i = e.memoizedState !== null),
            (e.stateNode.isHidden = i) && !S && e.mode & 1)
          )
            for (Z = e, o = e.child; o !== null; ) {
              for (r = Z = o; Z !== null; ) {
                S = Z;
                var b = S.child;
                switch (S.tag) {
                  case 0:
                  case 11:
                  case 14:
                  case 15:
                    Wn(4, S, S.return);
                    break;
                  case 1:
                    gn(S, S.return);
                    var I = S.stateNode;
                    if (typeof I.componentWillUnmount == "function") {
                      var j = S,
                        ee = S.return;
                      try {
                        var le = j;
                        (I.props = le.memoizedProps),
                          (I.state = le.memoizedState),
                          I.componentWillUnmount();
                      } catch (q) {
                        Oe(j, ee, q);
                      }
                    }
                    break;
                  case 5:
                    gn(S, S.return);
                    break;
                  case 22:
                    if (S.memoizedState !== null) {
                      Lu(r);
                      continue;
                    }
                }
                b !== null ? ((b.return = S), (Z = b)) : Lu(r);
              }
              o = o.sibling;
            }
          if (he) {
            e: if (((o = null), he))
              for (r = e; ; ) {
                if (r.tag === 5) {
                  if (o === null) {
                    o = r;
                    try {
                      (u = r.stateNode),
                        i ? Z0(u) : td(r.stateNode, r.memoizedProps);
                    } catch (q) {
                      Oe(e, e.return, q);
                    }
                  }
                } else if (r.tag === 6) {
                  if (o === null)
                    try {
                      (g = r.stateNode), i ? ed(g) : rd(g, r.memoizedProps);
                    } catch (q) {
                      Oe(e, e.return, q);
                    }
                } else if (
                  ((r.tag !== 22 && r.tag !== 23) ||
                    r.memoizedState === null ||
                    r === e) &&
                  r.child !== null
                ) {
                  (r.child.return = r), (r = r.child);
                  continue;
                }
                if (r === e) break e;
                for (; r.sibling === null; ) {
                  if (r.return === null || r.return === e) break e;
                  o === r && (o = null), (r = r.return);
                }
                o === r && (o = null),
                  (r.sibling.return = r.return),
                  (r = r.sibling);
              }
          }
        }
        break;
      case 19:
        Ot(r, e), qt(e), o & 4 && bu(e);
        break;
      case 21:
        break;
      default:
        Ot(r, e), qt(e);
    }
  }
  function qt(e) {
    var r = e.flags;
    if (r & 2) {
      try {
        if (he) {
          e: {
            for (var i = e.return; i !== null; ) {
              if (Nu(i)) {
                var o = i;
                break e;
              }
              i = i.return;
            }
            throw Error(h(160));
          }
          switch (o.tag) {
            case 5:
              var u = o.stateNode;
              o.flags & 32 && (dl(u), (o.flags &= -33));
              var g = Ru(e);
              to(e, g, u);
              break;
            case 3:
            case 4:
              var S = o.stateNode.containerInfo,
                b = Ru(e);
              eo(e, b, S);
              break;
            default:
              throw Error(h(161));
          }
        }
      } catch (I) {
        Oe(e, e.return, I);
      }
      e.flags &= -3;
    }
    r & 4096 && (e.flags &= -4097);
  }
  function rc(e, r, i) {
    (Z = e), Au(e);
  }
  function Au(e, r, i) {
    for (var o = (e.mode & 1) !== 0; Z !== null; ) {
      var u = Z,
        g = u.child;
      if (u.tag === 22 && o) {
        var S = u.memoizedState !== null || Oi;
        if (!S) {
          var b = u.alternate,
            I = (b !== null && b.memoizedState !== null) || ut;
          b = Oi;
          var j = ut;
          if (((Oi = S), (ut = I) && !j))
            for (Z = u; Z !== null; )
              (S = Z),
                (I = S.child),
                S.tag === 22 && S.memoizedState !== null
                  ? Du(u)
                  : I !== null
                  ? ((I.return = S), (Z = I))
                  : Du(u);
          for (; g !== null; ) (Z = g), Au(g), (g = g.sibling);
          (Z = u), (Oi = b), (ut = j);
        }
        Mu(e);
      } else
        u.subtreeFlags & 8772 && g !== null ? ((g.return = u), (Z = g)) : Mu(e);
    }
  }
  function Mu(e) {
    for (; Z !== null; ) {
      var r = Z;
      if (r.flags & 8772) {
        var i = r.alternate;
        try {
          if (r.flags & 8772)
            switch (r.tag) {
              case 0:
              case 11:
              case 15:
                ut || Gi(5, r);
                break;
              case 1:
                var o = r.stateNode;
                if (r.flags & 4 && !ut)
                  if (i === null) o.componentDidMount();
                  else {
                    var u =
                      r.elementType === r.type
                        ? i.memoizedProps
                        : Dt(r.type, i.memoizedProps);
                    o.componentDidUpdate(
                      u,
                      i.memoizedState,
                      o.__reactInternalSnapshotBeforeUpdate
                    );
                  }
                var g = r.updateQueue;
                g !== null && Il(r, g, o);
                break;
              case 3:
                var S = r.updateQueue;
                if (S !== null) {
                  if (((i = null), r.child !== null))
                    switch (r.child.tag) {
                      case 5:
                        i = se(r.child.stateNode);
                        break;
                      case 1:
                        i = r.child.stateNode;
                    }
                  Il(r, S, i);
                }
                break;
              case 5:
                var b = r.stateNode;
                i === null && r.flags & 4 && Y0(b, r.type, r.memoizedProps, r);
                break;
              case 6:
                break;
              case 4:
                break;
              case 12:
                break;
              case 13:
                if (Me && r.memoizedState === null) {
                  var I = r.alternate;
                  if (I !== null) {
                    var j = I.memoizedState;
                    if (j !== null) {
                      var ee = j.dehydrated;
                      ee !== null && _d(ee);
                    }
                  }
                }
                break;
              case 19:
              case 17:
              case 21:
              case 22:
              case 23:
              case 25:
                break;
              default:
                throw Error(h(163));
            }
          ut || (r.flags & 512 && Zs(r));
        } catch (le) {
          Oe(r, r.return, le);
        }
      }
      if (r === e) {
        Z = null;
        break;
      }
      if (((i = r.sibling), i !== null)) {
        (i.return = r.return), (Z = i);
        break;
      }
      Z = r.return;
    }
  }
  function Lu(e) {
    for (; Z !== null; ) {
      var r = Z;
      if (r === e) {
        Z = null;
        break;
      }
      var i = r.sibling;
      if (i !== null) {
        (i.return = r.return), (Z = i);
        break;
      }
      Z = r.return;
    }
  }
  function Du(e) {
    for (; Z !== null; ) {
      var r = Z;
      try {
        switch (r.tag) {
          case 0:
          case 11:
          case 15:
            var i = r.return;
            try {
              Gi(4, r);
            } catch (I) {
              Oe(r, i, I);
            }
            break;
          case 1:
            var o = r.stateNode;
            if (typeof o.componentDidMount == "function") {
              var u = r.return;
              try {
                o.componentDidMount();
              } catch (I) {
                Oe(r, u, I);
              }
            }
            var g = r.return;
            try {
              Zs(r);
            } catch (I) {
              Oe(r, g, I);
            }
            break;
          case 5:
            var S = r.return;
            try {
              Zs(r);
            } catch (I) {
              Oe(r, S, I);
            }
        }
      } catch (I) {
        Oe(r, r.return, I);
      }
      if (r === e) {
        Z = null;
        break;
      }
      var b = r.sibling;
      if (b !== null) {
        (b.return = r.return), (Z = b);
        break;
      }
      Z = r.return;
    }
  }
  var Ui = 0,
    zi = 1,
    Bi = 2,
    Hi = 3,
    Vi = 4;
  if (typeof Symbol == "function" && Symbol.for) {
    var Kn = Symbol.for;
    (Ui = Kn("selector.component")),
      (zi = Kn("selector.has_pseudo_class")),
      (Bi = Kn("selector.role")),
      (Hi = Kn("selector.test_id")),
      (Vi = Kn("selector.text"));
  }
  function no(e) {
    var r = Bt(e);
    if (r != null) {
      if (typeof r.memoizedProps["data-testname"] != "string")
        throw Error(h(364));
      return r;
    }
    if (((e = G0(e)), e === null)) throw Error(h(362));
    return e.stateNode.current;
  }
  function io(e, r) {
    switch (r.$$typeof) {
      case Ui:
        if (e.type === r.value) return !0;
        break;
      case zi:
        e: {
          (r = r.value), (e = [e, 0]);
          for (var i = 0; i < e.length; ) {
            var o = e[i++],
              u = e[i++],
              g = r[u];
            if (o.tag !== 5 || !bn(o)) {
              for (; g != null && io(o, g); ) u++, (g = r[u]);
              if (u === r.length) {
                r = !0;
                break e;
              } else
                for (o = o.child; o !== null; ) e.push(o, u), (o = o.sibling);
            }
          }
          r = !1;
        }
        return r;
      case Bi:
        if (e.tag === 5 && B0(e.stateNode, r.value)) return !0;
        break;
      case Vi:
        if (
          (e.tag === 5 || e.tag === 6) &&
          ((e = z0(e)), e !== null && 0 <= e.indexOf(r.value))
        )
          return !0;
        break;
      case Hi:
        if (
          e.tag === 5 &&
          ((e = e.memoizedProps["data-testname"]),
          typeof e == "string" && e.toLowerCase() === r.value.toLowerCase())
        )
          return !0;
        break;
      default:
        throw Error(h(365));
    }
    return !1;
  }
  function ao(e) {
    switch (e.$$typeof) {
      case Ui:
        return "<" + (G(e.value) || "Unknown") + ">";
      case zi:
        return ":has(" + (ao(e) || "") + ")";
      case Bi:
        return '[role="' + e.value + '"]';
      case Vi:
        return '"' + e.value + '"';
      case Hi:
        return '[data-testname="' + e.value + '"]';
      default:
        throw Error(h(365));
    }
  }
  function Iu(e, r) {
    var i = [];
    e = [e, 0];
    for (var o = 0; o < e.length; ) {
      var u = e[o++],
        g = e[o++],
        S = r[g];
      if (u.tag !== 5 || !bn(u)) {
        for (; S != null && io(u, S); ) g++, (S = r[g]);
        if (g === r.length) i.push(u);
        else for (u = u.child; u !== null; ) e.push(u, g), (u = u.sibling);
      }
    }
    return i;
  }
  function so(e, r) {
    if (!Rn) throw Error(h(363));
    (e = no(e)), (e = Iu(e, r)), (r = []), (e = Array.from(e));
    for (var i = 0; i < e.length; ) {
      var o = e[i++];
      if (o.tag === 5) bn(o) || r.push(o.stateNode);
      else for (o = o.child; o !== null; ) e.push(o), (o = o.sibling);
    }
    return r;
  }
  var nc = Math.ceil,
    ji = c.ReactCurrentDispatcher,
    oo = c.ReactCurrentOwner,
    je = c.ReactCurrentBatchConfig,
    pe = 0,
    tt = null,
    Ke = null,
    at = 0,
    St = 0,
    pn = pr(0),
    Xe = 0,
    Yn = null,
    Ur = 0,
    Wi = 0,
    lo = 0,
    Xn = null,
    vt = null,
    uo = 0,
    ho = 1 / 0,
    ir = null;
  function vn() {
    ho = Ze() + 500;
  }
  var Ki = !1,
    co = null,
    _r = null,
    Yi = !1,
    Sr = null,
    Xi = 0,
    qn = 0,
    fo = null,
    qi = -1,
    Qi = 0;
  function ht() {
    return pe & 6 ? Ze() : qi !== -1 ? qi : (qi = Ze());
  }
  function wr(e) {
    return e.mode & 1
      ? pe & 2 && at !== 0
        ? at & -at
        : Ud.transition !== null
        ? (Qi === 0 && (Qi = Sl()), Qi)
        : ((e = Ce), e !== 0 ? e : fr())
      : 1;
  }
  function Nt(e, r, i, o) {
    if (50 < qn) throw ((qn = 0), (fo = null), Error(h(185)));
    Mn(e, i, o),
      (!(pe & 2) || e !== tt) &&
        (e === tt && (!(pe & 2) && (Wi |= i), Xe === 4 && Cr(e, at)),
        mt(e, o),
        i === 1 && pe === 0 && !(r.mode & 1) && (vn(), vi && Vt()));
  }
  function mt(e, r) {
    var i = e.callbackNode;
    bd(e, r);
    var o = gi(e, e === tt ? at : 0);
    if (o === 0)
      i !== null && Cl(i), (e.callbackNode = null), (e.callbackPriority = 0);
    else if (((r = o & -o), e.callbackPriority !== r)) {
      if ((i != null && Cl(i), r === 1))
        e.tag === 0 ? Gd(Gu.bind(null, e)) : xl(Gu.bind(null, e)),
          gr
            ? O0(function () {
                !(pe & 6) && Vt();
              })
            : ps(vs, Vt),
          (i = null);
      else {
        switch (wl(o)) {
          case 1:
            i = vs;
            break;
          case 4:
            i = Ld;
            break;
          case 16:
            i = ms;
            break;
          case 536870912:
            i = Dd;
            break;
          default:
            i = ms;
        }
        i = Yu(i, Ou.bind(null, e));
      }
      (e.callbackPriority = r), (e.callbackNode = i);
    }
  }
  function Ou(e, r) {
    if (((qi = -1), (Qi = 0), pe & 6)) throw Error(h(327));
    var i = e.callbackNode;
    if (Hr() && e.callbackNode !== i) return null;
    var o = gi(e, e === tt ? at : 0);
    if (o === 0) return null;
    if (o & 30 || o & e.expiredLanes || r) r = $i(e, o);
    else {
      r = o;
      var u = pe;
      pe |= 2;
      var g = Bu();
      (tt !== e || at !== r) && ((ir = null), vn(), zr(e, r));
      do
        try {
          sc();
          break;
        } catch (b) {
          zu(e, b);
        }
      while (!0);
      Es(),
        (ji.current = g),
        (pe = u),
        Ke !== null ? (r = 0) : ((tt = null), (at = 0), (r = Xe));
    }
    if (r !== 0) {
      if (
        (r === 2 && ((u = cs(e)), u !== 0 && ((o = u), (r = go(e, u)))),
        r === 1)
      )
        throw ((i = Yn), zr(e, 0), Cr(e, o), mt(e, Ze()), i);
      if (r === 6) Cr(e, o);
      else {
        if (
          ((u = e.current.alternate),
          !(o & 30) &&
            !ic(u) &&
            ((r = $i(e, o)),
            r === 2 && ((g = cs(e)), g !== 0 && ((o = g), (r = go(e, g)))),
            r === 1))
        )
          throw ((i = Yn), zr(e, 0), Cr(e, o), mt(e, Ze()), i);
        switch (((e.finishedWork = u), (e.finishedLanes = o), r)) {
          case 0:
          case 1:
            throw Error(h(345));
          case 2:
            Br(e, vt, ir);
            break;
          case 3:
            if (
              (Cr(e, o),
              (o & 130023424) === o && ((r = uo + 500 - Ze()), 10 < r))
            ) {
              if (gi(e, 0) !== 0) break;
              if (((u = e.suspendedLanes), (u & o) !== o)) {
                ht(), (e.pingedLanes |= e.suspendedLanes & u);
                break;
              }
              e.timeoutHandle = A(Br.bind(null, e, vt, ir), r);
              break;
            }
            Br(e, vt, ir);
            break;
          case 4:
            if ((Cr(e, o), (o & 4194240) === o)) break;
            for (r = e.eventTimes, u = -1; 0 < o; ) {
              var S = 31 - At(o);
              (g = 1 << S), (S = r[S]), S > u && (u = S), (o &= ~g);
            }
            if (
              ((o = u),
              (o = Ze() - o),
              (o =
                (120 > o
                  ? 120
                  : 480 > o
                  ? 480
                  : 1080 > o
                  ? 1080
                  : 1920 > o
                  ? 1920
                  : 3e3 > o
                  ? 3e3
                  : 4320 > o
                  ? 4320
                  : 1960 * nc(o / 1960)) - o),
              10 < o)
            ) {
              e.timeoutHandle = A(Br.bind(null, e, vt, ir), o);
              break;
            }
            Br(e, vt, ir);
            break;
          case 5:
            Br(e, vt, ir);
            break;
          default:
            throw Error(h(329));
        }
      }
    }
    return mt(e, Ze()), e.callbackNode === i ? Ou.bind(null, e) : null;
  }
  function go(e, r) {
    var i = Xn;
    return (
      e.current.memoizedState.isDehydrated && (zr(e, r).flags |= 256),
      (e = $i(e, r)),
      e !== 2 && ((r = vt), (vt = i), r !== null && po(r)),
      e
    );
  }
  function po(e) {
    vt === null ? (vt = e) : vt.push.apply(vt, e);
  }
  function ic(e) {
    for (var r = e; ; ) {
      if (r.flags & 16384) {
        var i = r.updateQueue;
        if (i !== null && ((i = i.stores), i !== null))
          for (var o = 0; o < i.length; o++) {
            var u = i[o],
              g = u.getSnapshot;
            u = u.value;
            try {
              if (!Mt(g(), u)) return !1;
            } catch {
              return !1;
            }
          }
      }
      if (((i = r.child), r.subtreeFlags & 16384 && i !== null))
        (i.return = r), (r = i);
      else {
        if (r === e) break;
        for (; r.sibling === null; ) {
          if (r.return === null || r.return === e) return !0;
          r = r.return;
        }
        (r.sibling.return = r.return), (r = r.sibling);
      }
    }
    return !0;
  }
  function Cr(e, r) {
    for (
      r &= ~lo,
        r &= ~Wi,
        e.suspendedLanes |= r,
        e.pingedLanes &= ~r,
        e = e.expirationTimes;
      0 < r;

    ) {
      var i = 31 - At(r),
        o = 1 << i;
      (e[i] = -1), (r &= ~o);
    }
  }
  function Gu(e) {
    if (pe & 6) throw Error(h(327));
    Hr();
    var r = gi(e, 0);
    if (!(r & 1)) return mt(e, Ze()), null;
    var i = $i(e, r);
    if (e.tag !== 0 && i === 2) {
      var o = cs(e);
      o !== 0 && ((r = o), (i = go(e, o)));
    }
    if (i === 1) throw ((i = Yn), zr(e, 0), Cr(e, r), mt(e, Ze()), i);
    if (i === 6) throw Error(h(345));
    return (
      (e.finishedWork = e.current.alternate),
      (e.finishedLanes = r),
      Br(e, vt, ir),
      mt(e, Ze()),
      null
    );
  }
  function Uu(e) {
    Sr !== null && Sr.tag === 0 && !(pe & 6) && Hr();
    var r = pe;
    pe |= 1;
    var i = je.transition,
      o = Ce;
    try {
      if (((je.transition = null), (Ce = 1), e)) return e();
    } finally {
      (Ce = o), (je.transition = i), (pe = r), !(pe & 6) && Vt();
    }
  }
  function vo() {
    (St = pn.current), Le(pn);
  }
  function zr(e, r) {
    (e.finishedWork = null), (e.finishedLanes = 0);
    var i = e.timeoutHandle;
    if ((i !== te && ((e.timeoutHandle = te), V(i)), Ke !== null))
      for (i = Ke.return; i !== null; ) {
        var o = i;
        switch ((Ss(o), o.tag)) {
          case 1:
            (o = o.type.childContextTypes), o != null && hi();
            break;
          case 3:
            cn(), Le(ft), Le(st), Ms();
            break;
          case 5:
            Fs(o);
            break;
          case 4:
            cn();
            break;
          case 13:
            Le(Ue);
            break;
          case 19:
            Le(Ue);
            break;
          case 10:
            ks(o.type._context);
            break;
          case 22:
          case 23:
            vo();
        }
        i = i.return;
      }
    if (
      ((tt = e),
      (Ke = e = xr(e.current, null)),
      (at = St = r),
      (Xe = 0),
      (Yn = null),
      (lo = Wi = Ur = 0),
      (vt = Xn = null),
      Or !== null)
    ) {
      for (r = 0; r < Or.length; r++)
        if (((i = Or[r]), (o = i.interleaved), o !== null)) {
          i.interleaved = null;
          var u = o.next,
            g = i.pending;
          if (g !== null) {
            var S = g.next;
            (g.next = u), (o.next = S);
          }
          i.pending = o;
        }
      Or = null;
    }
    return e;
  }
  function zu(e, r) {
    do {
      var i = Ke;
      try {
        if ((Es(), (Ti.current = Fi), Ni)) {
          for (var o = ze.memoizedState; o !== null; ) {
            var u = o.queue;
            u !== null && (u.pending = null), (o = o.next);
          }
          Ni = !1;
        }
        if (
          ((Gr = 0),
          (et = Ye = ze = null),
          (Gn = !1),
          (Un = 0),
          (oo.current = null),
          i === null || i.return === null)
        ) {
          (Xe = 1), (Yn = r), (Ke = null);
          break;
        }
        e: {
          var g = e,
            S = i.return,
            b = i,
            I = r;
          if (
            ((r = at),
            (b.flags |= 32768),
            I !== null && typeof I == "object" && typeof I.then == "function")
          ) {
            var j = I,
              ee = b,
              le = ee.tag;
            if (!(ee.mode & 1) && (le === 0 || le === 11 || le === 15)) {
              var q = ee.alternate;
              q
                ? ((ee.updateQueue = q.updateQueue),
                  (ee.memoizedState = q.memoizedState),
                  (ee.lanes = q.lanes))
                : ((ee.updateQueue = null), (ee.memoizedState = null));
            }
            var De = du(S);
            if (De !== null) {
              (De.flags &= -257),
                cu(De, S, b, g, r),
                De.mode & 1 && hu(g, j, r),
                (r = De),
                (I = j);
              var Re = r.updateQueue;
              if (Re === null) {
                var yt = new Set();
                yt.add(I), (r.updateQueue = yt);
              } else Re.add(I);
              break e;
            } else {
              if (!(r & 1)) {
                hu(g, j, r), mo();
                break e;
              }
              I = Error(h(426));
            }
          } else if (Ie && b.mode & 1) {
            var ar = du(S);
            if (ar !== null) {
              !(ar.flags & 65536) && (ar.flags |= 256),
                cu(ar, S, b, g, r),
                xs(fn(I, b));
              break e;
            }
          }
          (g = I = fn(I, b)),
            Xe !== 4 && (Xe = 2),
            Xn === null ? (Xn = [g]) : Xn.push(g),
            (g = S);
          do {
            switch (g.tag) {
              case 3:
                (g.flags |= 65536), (r &= -r), (g.lanes |= r);
                var D = lu(g, I, r);
                Dl(g, D);
                break e;
              case 1:
                b = I;
                var M = g.type,
                  U = g.stateNode;
                if (
                  !(g.flags & 128) &&
                  (typeof M.getDerivedStateFromError == "function" ||
                    (U !== null &&
                      typeof U.componentDidCatch == "function" &&
                      (_r === null || !_r.has(U))))
                ) {
                  (g.flags |= 65536), (r &= -r), (g.lanes |= r);
                  var $ = uu(g, b, r);
                  Dl(g, $);
                  break e;
                }
            }
            g = g.return;
          } while (g !== null);
        }
        Vu(i);
      } catch (ae) {
        (r = ae), Ke === i && i !== null && (Ke = i = i.return);
        continue;
      }
      break;
    } while (!0);
  }
  function Bu() {
    var e = ji.current;
    return (ji.current = Fi), e === null ? Fi : e;
  }
  function mo() {
    (Xe === 0 || Xe === 3 || Xe === 2) && (Xe = 4),
      tt === null || (!(Ur & 268435455) && !(Wi & 268435455)) || Cr(tt, at);
  }
  function $i(e, r) {
    var i = pe;
    pe |= 2;
    var o = Bu();
    (tt !== e || at !== r) && ((ir = null), zr(e, r));
    do
      try {
        ac();
        break;
      } catch (u) {
        zu(e, u);
      }
    while (!0);
    if ((Es(), (pe = i), (ji.current = o), Ke !== null)) throw Error(h(261));
    return (tt = null), (at = 0), Xe;
  }
  function ac() {
    for (; Ke !== null; ) Hu(Ke);
  }
  function sc() {
    for (; Ke !== null && !Ad(); ) Hu(Ke);
  }
  function Hu(e) {
    var r = Ku(e.alternate, e, St);
    (e.memoizedProps = e.pendingProps),
      r === null ? Vu(e) : (Ke = r),
      (oo.current = null);
  }
  function Vu(e) {
    var r = e;
    do {
      var i = r.alternate;
      if (((e = r.return), r.flags & 32768)) {
        if (((i = Zd(i, r)), i !== null)) {
          (i.flags &= 32767), (Ke = i);
          return;
        }
        if (e !== null)
          (e.flags |= 32768), (e.subtreeFlags = 0), (e.deletions = null);
        else {
          (Xe = 6), (Ke = null);
          return;
        }
      } else if (((i = Jd(i, r, St)), i !== null)) {
        Ke = i;
        return;
      }
      if (((r = r.sibling), r !== null)) {
        Ke = r;
        return;
      }
      Ke = r = e;
    } while (r !== null);
    Xe === 0 && (Xe = 5);
  }
  function Br(e, r, i) {
    var o = Ce,
      u = je.transition;
    try {
      (je.transition = null), (Ce = 1), oc(e, r, i, o);
    } finally {
      (je.transition = u), (Ce = o);
    }
    return null;
  }
  function oc(e, r, i, o) {
    do Hr();
    while (Sr !== null);
    if (pe & 6) throw Error(h(327));
    i = e.finishedWork;
    var u = e.finishedLanes;
    if (i === null) return null;
    if (((e.finishedWork = null), (e.finishedLanes = 0), i === e.current))
      throw Error(h(177));
    (e.callbackNode = null), (e.callbackPriority = 0);
    var g = i.lanes | i.childLanes;
    if (
      (Fd(e, g),
      e === tt && ((Ke = tt = null), (at = 0)),
      (!(i.subtreeFlags & 2064) && !(i.flags & 2064)) ||
        Yi ||
        ((Yi = !0),
        Yu(ms, function () {
          return Hr(), null;
        })),
      (g = (i.flags & 15990) !== 0),
      i.subtreeFlags & 15990 || g)
    ) {
      (g = je.transition), (je.transition = null);
      var S = Ce;
      Ce = 1;
      var b = pe;
      (pe |= 4),
        (oo.current = null),
        tc(e, i),
        Fu(i, e),
        H(e.containerInfo),
        (e.current = i),
        rc(i),
        Md(),
        (pe = b),
        (Ce = S),
        (je.transition = g);
    } else e.current = i;
    if (
      (Yi && ((Yi = !1), (Sr = e), (Xi = u)),
      (g = e.pendingLanes),
      g === 0 && (_r = null),
      Id(i.stateNode),
      mt(e, Ze()),
      r !== null)
    )
      for (o = e.onRecoverableError, i = 0; i < r.length; i++)
        (u = r[i]), o(u.value, { componentStack: u.stack, digest: u.digest });
    if (Ki) throw ((Ki = !1), (e = co), (co = null), e);
    return (
      Xi & 1 && e.tag !== 0 && Hr(),
      (g = e.pendingLanes),
      g & 1 ? (e === fo ? qn++ : ((qn = 0), (fo = e))) : (qn = 0),
      Vt(),
      null
    );
  }
  function Hr() {
    if (Sr !== null) {
      var e = wl(Xi),
        r = je.transition,
        i = Ce;
      try {
        if (((je.transition = null), (Ce = 16 > e ? 16 : e), Sr === null))
          var o = !1;
        else {
          if (((e = Sr), (Sr = null), (Xi = 0), pe & 6)) throw Error(h(331));
          var u = pe;
          for (pe |= 4, Z = e.current; Z !== null; ) {
            var g = Z,
              S = g.child;
            if (Z.flags & 16) {
              var b = g.deletions;
              if (b !== null) {
                for (var I = 0; I < b.length; I++) {
                  var j = b[I];
                  for (Z = j; Z !== null; ) {
                    var ee = Z;
                    switch (ee.tag) {
                      case 0:
                      case 11:
                      case 15:
                        Wn(8, ee, g);
                    }
                    var le = ee.child;
                    if (le !== null) (le.return = ee), (Z = le);
                    else
                      for (; Z !== null; ) {
                        ee = Z;
                        var q = ee.sibling,
                          De = ee.return;
                        if ((Tu(ee), ee === j)) {
                          Z = null;
                          break;
                        }
                        if (q !== null) {
                          (q.return = De), (Z = q);
                          break;
                        }
                        Z = De;
                      }
                  }
                }
                var Re = g.alternate;
                if (Re !== null) {
                  var yt = Re.child;
                  if (yt !== null) {
                    Re.child = null;
                    do {
                      var ar = yt.sibling;
                      (yt.sibling = null), (yt = ar);
                    } while (yt !== null);
                  }
                }
                Z = g;
              }
            }
            if (g.subtreeFlags & 2064 && S !== null) (S.return = g), (Z = S);
            else
              e: for (; Z !== null; ) {
                if (((g = Z), g.flags & 2048))
                  switch (g.tag) {
                    case 0:
                    case 11:
                    case 15:
                      Wn(9, g, g.return);
                  }
                var D = g.sibling;
                if (D !== null) {
                  (D.return = g.return), (Z = D);
                  break e;
                }
                Z = g.return;
              }
          }
          var M = e.current;
          for (Z = M; Z !== null; ) {
            S = Z;
            var U = S.child;
            if (S.subtreeFlags & 2064 && U !== null) (U.return = S), (Z = U);
            else
              e: for (S = M; Z !== null; ) {
                if (((b = Z), b.flags & 2048))
                  try {
                    switch (b.tag) {
                      case 0:
                      case 11:
                      case 15:
                        Gi(9, b);
                    }
                  } catch (ae) {
                    Oe(b, b.return, ae);
                  }
                if (b === S) {
                  Z = null;
                  break e;
                }
                var $ = b.sibling;
                if ($ !== null) {
                  ($.return = b.return), (Z = $);
                  break e;
                }
                Z = b.return;
              }
          }
          if (
            ((pe = u),
            Vt(),
            Ht && typeof Ht.onPostCommitFiberRoot == "function")
          )
            try {
              Ht.onPostCommitFiberRoot(pi, e);
            } catch {}
          o = !0;
        }
        return o;
      } finally {
        (Ce = i), (je.transition = r);
      }
    }
    return !1;
  }
  function ju(e, r, i) {
    (r = fn(i, r)),
      (r = lu(e, r, 1)),
      (e = yr(e, r, 1)),
      (r = ht()),
      e !== null && (Mn(e, 1, r), mt(e, r));
  }
  function Oe(e, r, i) {
    if (e.tag === 3) ju(e, e, i);
    else
      for (; r !== null; ) {
        if (r.tag === 3) {
          ju(r, e, i);
          break;
        } else if (r.tag === 1) {
          var o = r.stateNode;
          if (
            typeof r.type.getDerivedStateFromError == "function" ||
            (typeof o.componentDidCatch == "function" &&
              (_r === null || !_r.has(o)))
          ) {
            (e = fn(i, e)),
              (e = uu(r, e, 1)),
              (r = yr(r, e, 1)),
              (e = ht()),
              r !== null && (Mn(r, 1, e), mt(r, e));
            break;
          }
        }
        r = r.return;
      }
  }
  function lc(e, r, i) {
    var o = e.pingCache;
    o !== null && o.delete(r),
      (r = ht()),
      (e.pingedLanes |= e.suspendedLanes & i),
      tt === e &&
        (at & i) === i &&
        (Xe === 4 || (Xe === 3 && (at & 130023424) === at && 500 > Ze() - uo)
          ? zr(e, 0)
          : (lo |= i)),
      mt(e, r);
  }
  function Wu(e, r) {
    r === 0 &&
      (e.mode & 1
        ? ((r = fi), (fi <<= 1), !(fi & 130023424) && (fi = 4194304))
        : (r = 1));
    var i = ht();
    (e = jt(e, r)), e !== null && (Mn(e, r, i), mt(e, i));
  }
  function uc(e) {
    var r = e.memoizedState,
      i = 0;
    r !== null && (i = r.retryLane), Wu(e, i);
  }
  function hc(e, r) {
    var i = 0;
    switch (e.tag) {
      case 13:
        var o = e.stateNode,
          u = e.memoizedState;
        u !== null && (i = u.retryLane);
        break;
      case 19:
        o = e.stateNode;
        break;
      default:
        throw Error(h(314));
    }
    o !== null && o.delete(r), Wu(e, i);
  }
  var Ku;
  Ku = function (e, r, i) {
    if (e !== null)
      if (e.memoizedProps !== r.pendingProps || ft.current) pt = !0;
      else {
        if (!(e.lanes & i) && !(r.flags & 128)) return (pt = !1), $d(e, r, i);
        pt = !!(e.flags & 131072);
      }
    else (pt = !1), Ie && r.flags & 1048576 && Pl(r, yi, r.index);
    switch (((r.lanes = 0), r.tag)) {
      case 2:
        var o = r.type;
        Li(e, r), (e = r.pendingProps);
        var u = nn(r, st.current);
        hn(r, i), (u = Is(null, r, o, e, u, i));
        var g = Os();
        return (
          (r.flags |= 1),
          typeof u == "object" &&
          u !== null &&
          typeof u.render == "function" &&
          u.$$typeof === void 0
            ? ((r.tag = 1),
              (r.memoizedState = null),
              (r.updateQueue = null),
              gt(o) ? ((g = !0), di(r)) : (g = !1),
              (r.memoizedState =
                u.state !== null && u.state !== void 0 ? u.state : null),
              Rs(r),
              (u.updater = Ai),
              (r.stateNode = u),
              (u._reactInternals = r),
              Vs(r, o, e, i),
              (r = Ys(null, r, o, !0, g, i)))
            : ((r.tag = 0), Ie && g && _s(r), ct(null, r, u, i), (r = r.child)),
          r
        );
      case 16:
        o = r.elementType;
        e: {
          switch (
            (Li(e, r),
            (e = r.pendingProps),
            (u = o._init),
            (o = u(o._payload)),
            (r.type = o),
            (u = r.tag = cc(o)),
            (e = Dt(o, e)),
            u)
          ) {
            case 0:
              r = Ks(null, r, o, e, i);
              break e;
            case 1:
              r = yu(null, r, o, e, i);
              break e;
            case 11:
              r = fu(null, r, o, e, i);
              break e;
            case 14:
              r = gu(null, r, o, Dt(o.type, e), i);
              break e;
          }
          throw Error(h(306, o, ""));
        }
        return r;
      case 0:
        return (
          (o = r.type),
          (u = r.pendingProps),
          (u = r.elementType === o ? u : Dt(o, u)),
          Ks(e, r, o, u, i)
        );
      case 1:
        return (
          (o = r.type),
          (u = r.pendingProps),
          (u = r.elementType === o ? u : Dt(o, u)),
          yu(e, r, o, u, i)
        );
      case 3:
        e: {
          if ((_u(r), e === null)) throw Error(h(387));
          (o = r.pendingProps),
            (g = r.memoizedState),
            (u = g.element),
            Ll(e, r),
            Ei(r, o, null, i);
          var S = r.memoizedState;
          if (((o = S.element), Me && g.isDehydrated))
            if (
              ((g = {
                element: o,
                isDehydrated: !1,
                cache: S.cache,
                pendingSuspenseBoundaries: S.pendingSuspenseBoundaries,
                transitions: S.transitions,
              }),
              (r.updateQueue.baseState = g),
              (r.memoizedState = g),
              r.flags & 256)
            ) {
              (u = fn(Error(h(423)), r)), (r = Su(e, r, o, i, u));
              break e;
            } else if (o !== u) {
              (u = fn(Error(h(424)), r)), (r = Su(e, r, o, i, u));
              break e;
            } else
              for (
                Me &&
                  ((Pt = cd(r.stateNode.containerInfo)),
                  (_t = r),
                  (Ie = !0),
                  (Lt = null),
                  (Ln = !1)),
                  i = Fl(r, null, o, i),
                  r.child = i;
                i;

              )
                (i.flags = (i.flags & -3) | 4096), (i = i.sibling);
          else {
            if ((on(), o === u)) {
              r = nr(e, r, i);
              break e;
            }
            ct(e, r, o, i);
          }
          r = r.child;
        }
        return r;
      case 5:
        return (
          Ol(r),
          e === null && Cs(r),
          (o = r.type),
          (u = r.pendingProps),
          (g = e !== null ? e.memoizedProps : null),
          (S = u.children),
          nt(o, u) ? (S = null) : g !== null && nt(o, g) && (r.flags |= 32),
          mu(e, r),
          ct(e, r, S, i),
          r.child
        );
      case 6:
        return e === null && Cs(r), null;
      case 13:
        return wu(e, r, i);
      case 4:
        return (
          bs(r, r.stateNode.containerInfo),
          (o = r.pendingProps),
          e === null ? (r.child = ln(r, null, o, i)) : ct(e, r, o, i),
          r.child
        );
      case 11:
        return (
          (o = r.type),
          (u = r.pendingProps),
          (u = r.elementType === o ? u : Dt(o, u)),
          fu(e, r, o, u, i)
        );
      case 7:
        return ct(e, r, r.pendingProps, i), r.child;
      case 8:
        return ct(e, r, r.pendingProps.children, i), r.child;
      case 12:
        return ct(e, r, r.pendingProps.children, i), r.child;
      case 10:
        e: {
          if (
            ((o = r.type._context),
            (u = r.pendingProps),
            (g = r.memoizedProps),
            (S = u.value),
            Al(r, o, S),
            g !== null)
          )
            if (Mt(g.value, S)) {
              if (g.children === u.children && !ft.current) {
                r = nr(e, r, i);
                break e;
              }
            } else
              for (g = r.child, g !== null && (g.return = r); g !== null; ) {
                var b = g.dependencies;
                if (b !== null) {
                  S = g.child;
                  for (var I = b.firstContext; I !== null; ) {
                    if (I.context === o) {
                      if (g.tag === 1) {
                        (I = rr(-1, i & -i)), (I.tag = 2);
                        var j = g.updateQueue;
                        if (j !== null) {
                          j = j.shared;
                          var ee = j.pending;
                          ee === null
                            ? (I.next = I)
                            : ((I.next = ee.next), (ee.next = I)),
                            (j.pending = I);
                        }
                      }
                      (g.lanes |= i),
                        (I = g.alternate),
                        I !== null && (I.lanes |= i),
                        Ts(g.return, i, r),
                        (b.lanes |= i);
                      break;
                    }
                    I = I.next;
                  }
                } else if (g.tag === 10) S = g.type === r.type ? null : g.child;
                else if (g.tag === 18) {
                  if (((S = g.return), S === null)) throw Error(h(341));
                  (S.lanes |= i),
                    (b = S.alternate),
                    b !== null && (b.lanes |= i),
                    Ts(S, i, r),
                    (S = g.sibling);
                } else S = g.child;
                if (S !== null) S.return = g;
                else
                  for (S = g; S !== null; ) {
                    if (S === r) {
                      S = null;
                      break;
                    }
                    if (((g = S.sibling), g !== null)) {
                      (g.return = S.return), (S = g);
                      break;
                    }
                    S = S.return;
                  }
                g = S;
              }
          ct(e, r, u.children, i), (r = r.child);
        }
        return r;
      case 9:
        return (
          (u = r.type),
          (o = r.pendingProps.children),
          hn(r, i),
          (u = Et(u)),
          (o = o(u)),
          (r.flags |= 1),
          ct(e, r, o, i),
          r.child
        );
      case 14:
        return (
          (o = r.type),
          (u = Dt(o, r.pendingProps)),
          (u = Dt(o.type, u)),
          gu(e, r, o, u, i)
        );
      case 15:
        return pu(e, r, r.type, r.pendingProps, i);
      case 17:
        return (
          (o = r.type),
          (u = r.pendingProps),
          (u = r.elementType === o ? u : Dt(o, u)),
          Li(e, r),
          (r.tag = 1),
          gt(o) ? ((e = !0), di(r)) : (e = !1),
          hn(r, i),
          su(r, o, u),
          Vs(r, o, u, i),
          Ys(null, r, o, !0, e, i)
        );
      case 19:
        return xu(e, r, i);
      case 22:
        return vu(e, r, i);
    }
    throw Error(h(156, r.tag));
  };
  function Yu(e, r) {
    return ps(e, r);
  }
  function dc(e, r, i, o) {
    (this.tag = e),
      (this.key = i),
      (this.sibling =
        this.child =
        this.return =
        this.stateNode =
        this.type =
        this.elementType =
          null),
      (this.index = 0),
      (this.ref = null),
      (this.pendingProps = r),
      (this.dependencies =
        this.memoizedState =
        this.updateQueue =
        this.memoizedProps =
          null),
      (this.mode = o),
      (this.subtreeFlags = this.flags = 0),
      (this.deletions = null),
      (this.childLanes = this.lanes = 0),
      (this.alternate = null);
  }
  function Rt(e, r, i, o) {
    return new dc(e, r, i, o);
  }
  function yo(e) {
    return (e = e.prototype), !(!e || !e.isReactComponent);
  }
  function cc(e) {
    if (typeof e == "function") return yo(e) ? 1 : 0;
    if (e != null) {
      if (((e = e.$$typeof), e === P)) return 11;
      if (e === F) return 14;
    }
    return 2;
  }
  function xr(e, r) {
    var i = e.alternate;
    return (
      i === null
        ? ((i = Rt(e.tag, r, e.key, e.mode)),
          (i.elementType = e.elementType),
          (i.type = e.type),
          (i.stateNode = e.stateNode),
          (i.alternate = e),
          (e.alternate = i))
        : ((i.pendingProps = r),
          (i.type = e.type),
          (i.flags = 0),
          (i.subtreeFlags = 0),
          (i.deletions = null)),
      (i.flags = e.flags & 14680064),
      (i.childLanes = e.childLanes),
      (i.lanes = e.lanes),
      (i.child = e.child),
      (i.memoizedProps = e.memoizedProps),
      (i.memoizedState = e.memoizedState),
      (i.updateQueue = e.updateQueue),
      (r = e.dependencies),
      (i.dependencies =
        r === null ? null : { lanes: r.lanes, firstContext: r.firstContext }),
      (i.sibling = e.sibling),
      (i.index = e.index),
      (i.ref = e.ref),
      i
    );
  }
  function Ji(e, r, i, o, u, g) {
    var S = 2;
    if (((o = e), typeof e == "function")) yo(e) && (S = 1);
    else if (typeof e == "string") S = 5;
    else
      e: switch (e) {
        case m:
          return Vr(i.children, u, g, r);
        case x:
          (S = 8), (u |= 8);
          break;
        case C:
          return (
            (e = Rt(12, i, r, u | 2)), (e.elementType = C), (e.lanes = g), e
          );
        case k:
          return (e = Rt(13, i, r, u)), (e.elementType = k), (e.lanes = g), e;
        case R:
          return (e = Rt(19, i, r, u)), (e.elementType = R), (e.lanes = g), e;
        case w:
          return Zi(i, u, g, r);
        default:
          if (typeof e == "object" && e !== null)
            switch (e.$$typeof) {
              case _:
                S = 10;
                break e;
              case y:
                S = 9;
                break e;
              case P:
                S = 11;
                break e;
              case F:
                S = 14;
                break e;
              case v:
                (S = 16), (o = null);
                break e;
            }
          throw Error(h(130, e == null ? e : typeof e, ""));
      }
    return (
      (r = Rt(S, i, r, u)), (r.elementType = e), (r.type = o), (r.lanes = g), r
    );
  }
  function Vr(e, r, i, o) {
    return (e = Rt(7, e, o, r)), (e.lanes = i), e;
  }
  function Zi(e, r, i, o) {
    return (
      (e = Rt(22, e, o, r)),
      (e.elementType = w),
      (e.lanes = i),
      (e.stateNode = { isHidden: !1 }),
      e
    );
  }
  function _o(e, r, i) {
    return (e = Rt(6, e, null, r)), (e.lanes = i), e;
  }
  function So(e, r, i) {
    return (
      (r = Rt(4, e.children !== null ? e.children : [], e.key, r)),
      (r.lanes = i),
      (r.stateNode = {
        containerInfo: e.containerInfo,
        pendingChildren: null,
        implementation: e.implementation,
      }),
      r
    );
  }
  function fc(e, r, i, o, u) {
    (this.tag = r),
      (this.containerInfo = e),
      (this.finishedWork =
        this.pingCache =
        this.current =
        this.pendingChildren =
          null),
      (this.timeoutHandle = te),
      (this.callbackNode = this.pendingContext = this.context = null),
      (this.callbackPriority = 0),
      (this.eventTimes = fs(0)),
      (this.expirationTimes = fs(-1)),
      (this.entangledLanes =
        this.finishedLanes =
        this.mutableReadLanes =
        this.expiredLanes =
        this.pingedLanes =
        this.suspendedLanes =
        this.pendingLanes =
          0),
      (this.entanglements = fs(0)),
      (this.identifierPrefix = o),
      (this.onRecoverableError = u),
      Me && (this.mutableSourceEagerHydrationData = null);
  }
  function Xu(e, r, i, o, u, g, S, b, I) {
    return (
      (e = new fc(e, r, i, b, I)),
      r === 1 ? ((r = 1), g === !0 && (r |= 8)) : (r = 0),
      (g = Rt(3, null, null, r)),
      (e.current = g),
      (g.stateNode = e),
      (g.memoizedState = {
        element: o,
        isDehydrated: i,
        cache: null,
        transitions: null,
        pendingSuspenseBoundaries: null,
      }),
      Rs(g),
      e
    );
  }
  function qu(e) {
    if (!e) return vr;
    e = e._reactInternals;
    e: {
      if (z(e) !== e || e.tag !== 1) throw Error(h(170));
      var r = e;
      do {
        switch (r.tag) {
          case 3:
            r = r.stateNode.context;
            break e;
          case 1:
            if (gt(r.type)) {
              r = r.stateNode.__reactInternalMemoizedMergedChildContext;
              break e;
            }
        }
        r = r.return;
      } while (r !== null);
      throw Error(h(171));
    }
    if (e.tag === 1) {
      var i = e.type;
      if (gt(i)) return yl(e, i, r);
    }
    return r;
  }
  function Qu(e) {
    var r = e._reactInternals;
    if (r === void 0)
      throw typeof e.render == "function"
        ? Error(h(188))
        : ((e = Object.keys(e).join(",")), Error(h(268, e)));
    return (e = K(r)), e === null ? null : e.stateNode;
  }
  function $u(e, r) {
    if (((e = e.memoizedState), e !== null && e.dehydrated !== null)) {
      var i = e.retryLane;
      e.retryLane = i !== 0 && i < r ? i : r;
    }
  }
  function ea(e, r) {
    $u(e, r), (e = e.alternate) && $u(e, r);
  }
  function gc(e) {
    return (e = K(e)), e === null ? null : e.stateNode;
  }
  function pc() {
    return null;
  }
  return (
    (n.attemptContinuousHydration = function (e) {
      if (e.tag === 13) {
        var r = jt(e, 134217728);
        if (r !== null) {
          var i = ht();
          Nt(r, e, 134217728, i);
        }
        ea(e, 134217728);
      }
    }),
    (n.attemptDiscreteHydration = function (e) {
      if (e.tag === 13) {
        var r = jt(e, 1);
        if (r !== null) {
          var i = ht();
          Nt(r, e, 1, i);
        }
        ea(e, 1);
      }
    }),
    (n.attemptHydrationAtCurrentPriority = function (e) {
      if (e.tag === 13) {
        var r = wr(e),
          i = jt(e, r);
        if (i !== null) {
          var o = ht();
          Nt(i, e, r, o);
        }
        ea(e, r);
      }
    }),
    (n.attemptSynchronousHydration = function (e) {
      switch (e.tag) {
        case 3:
          var r = e.stateNode;
          if (r.current.memoizedState.isDehydrated) {
            var i = An(r.pendingLanes);
            i !== 0 && (gs(r, i | 1), mt(r, Ze()), !(pe & 6) && (vn(), Vt()));
          }
          break;
        case 13:
          Uu(function () {
            var o = jt(e, 1);
            if (o !== null) {
              var u = ht();
              Nt(o, e, 1, u);
            }
          }),
            ea(e, 1);
      }
    }),
    (n.batchedUpdates = function (e, r) {
      var i = pe;
      pe |= 1;
      try {
        return e(r);
      } finally {
        (pe = i), pe === 0 && (vn(), vi && Vt());
      }
    }),
    (n.createComponentSelector = function (e) {
      return { $$typeof: Ui, value: e };
    }),
    (n.createContainer = function (e, r, i, o, u, g, S) {
      return Xu(e, r, !1, null, i, o, u, g, S);
    }),
    (n.createHasPseudoClassSelector = function (e) {
      return { $$typeof: zi, value: e };
    }),
    (n.createHydrationContainer = function (e, r, i, o, u, g, S, b, I) {
      return (
        (e = Xu(i, o, !0, e, u, g, S, b, I)),
        (e.context = qu(null)),
        (i = e.current),
        (o = ht()),
        (u = wr(i)),
        (g = rr(o, u)),
        (g.callback = r ?? null),
        yr(i, g, u),
        (e.current.lanes = u),
        Mn(e, u, o),
        mt(e, o),
        e
      );
    }),
    (n.createPortal = function (e, r, i) {
      var o =
        3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
      return {
        $$typeof: p,
        key: o == null ? null : "" + o,
        children: e,
        containerInfo: r,
        implementation: i,
      };
    }),
    (n.createRoleSelector = function (e) {
      return { $$typeof: Bi, value: e };
    }),
    (n.createTestNameSelector = function (e) {
      return { $$typeof: Hi, value: e };
    }),
    (n.createTextSelector = function (e) {
      return { $$typeof: Vi, value: e };
    }),
    (n.deferredUpdates = function (e) {
      var r = Ce,
        i = je.transition;
      try {
        return (je.transition = null), (Ce = 16), e();
      } finally {
        (Ce = r), (je.transition = i);
      }
    }),
    (n.discreteUpdates = function (e, r, i, o, u) {
      var g = Ce,
        S = je.transition;
      try {
        return (je.transition = null), (Ce = 1), e(r, i, o, u);
      } finally {
        (Ce = g), (je.transition = S), pe === 0 && vn();
      }
    }),
    (n.findAllNodes = so),
    (n.findBoundingRects = function (e, r) {
      if (!Rn) throw Error(h(363));
      (r = so(e, r)), (e = []);
      for (var i = 0; i < r.length; i++) e.push(U0(r[i]));
      for (r = e.length - 1; 0 < r; r--) {
        i = e[r];
        for (
          var o = i.x, u = o + i.width, g = i.y, S = g + i.height, b = r - 1;
          0 <= b;
          b--
        )
          if (r !== b) {
            var I = e[b],
              j = I.x,
              ee = j + I.width,
              le = I.y,
              q = le + I.height;
            if (o >= j && g >= le && u <= ee && S <= q) {
              e.splice(r, 1);
              break;
            } else if (o !== j || i.width !== I.width || q < g || le > S) {
              if (!(g !== le || i.height !== I.height || ee < o || j > u)) {
                j > o && ((I.width += j - o), (I.x = o)),
                  ee < u && (I.width = u - j),
                  e.splice(r, 1);
                break;
              }
            } else {
              le > g && ((I.height += le - g), (I.y = g)),
                q < S && (I.height = S - le),
                e.splice(r, 1);
              break;
            }
          }
      }
      return e;
    }),
    (n.findHostInstance = Qu),
    (n.findHostInstanceWithNoPortals = function (e) {
      return (
        (e = O(e)),
        (e = e !== null ? ne(e) : null),
        e === null ? null : e.stateNode
      );
    }),
    (n.findHostInstanceWithWarning = function (e) {
      return Qu(e);
    }),
    (n.flushControlled = function (e) {
      var r = pe;
      pe |= 1;
      var i = je.transition,
        o = Ce;
      try {
        (je.transition = null), (Ce = 1), e();
      } finally {
        (Ce = o), (je.transition = i), (pe = r), pe === 0 && (vn(), Vt());
      }
    }),
    (n.flushPassiveEffects = Hr),
    (n.flushSync = Uu),
    (n.focusWithin = function (e, r) {
      if (!Rn) throw Error(h(363));
      for (e = no(e), r = Iu(e, r), r = Array.from(r), e = 0; e < r.length; ) {
        var i = r[e++];
        if (!bn(i)) {
          if (i.tag === 5 && H0(i.stateNode)) return !0;
          for (i = i.child; i !== null; ) r.push(i), (i = i.sibling);
        }
      }
      return !1;
    }),
    (n.getCurrentUpdatePriority = function () {
      return Ce;
    }),
    (n.getFindAllNodesFailureDescription = function (e, r) {
      if (!Rn) throw Error(h(363));
      var i = 0,
        o = [];
      e = [no(e), 0];
      for (var u = 0; u < e.length; ) {
        var g = e[u++],
          S = e[u++],
          b = r[S];
        if (
          (g.tag !== 5 || !bn(g)) &&
          (io(g, b) && (o.push(ao(b)), S++, S > i && (i = S)), S < r.length)
        )
          for (g = g.child; g !== null; ) e.push(g, S), (g = g.sibling);
      }
      if (i < r.length) {
        for (e = []; i < r.length; i++) e.push(ao(r[i]));
        return (
          `findAllNodes was able to match part of the selector:
  ` +
          (o.join(" > ") +
            `

No matching component was found for:
  `) +
          e.join(" > ")
        );
      }
      return null;
    }),
    (n.getPublicRootInstance = function (e) {
      if (((e = e.current), !e.child)) return null;
      switch (e.child.tag) {
        case 5:
          return se(e.child.stateNode);
        default:
          return e.child.stateNode;
      }
    }),
    (n.injectIntoDevTools = function (e) {
      if (
        ((e = {
          bundleType: e.bundleType,
          version: e.version,
          rendererPackageName: e.rendererPackageName,
          rendererConfig: e.rendererConfig,
          overrideHookState: null,
          overrideHookStateDeletePath: null,
          overrideHookStateRenamePath: null,
          overrideProps: null,
          overridePropsDeletePath: null,
          overridePropsRenamePath: null,
          setErrorHandler: null,
          setSuspenseHandler: null,
          scheduleUpdate: null,
          currentDispatcherRef: c.ReactCurrentDispatcher,
          findHostInstanceByFiber: gc,
          findFiberByHostInstance: e.findFiberByHostInstance || pc,
          findHostInstancesForRefresh: null,
          scheduleRefresh: null,
          scheduleRoot: null,
          setRefreshHandler: null,
          getCurrentFiber: null,
          reconcilerVersion: "18.3.1",
        }),
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u")
      )
        e = !1;
      else {
        var r = __REACT_DEVTOOLS_GLOBAL_HOOK__;
        if (r.isDisabled || !r.supportsFiber) e = !0;
        else {
          try {
            (pi = r.inject(e)), (Ht = r);
          } catch {}
          e = !!r.checkDCE;
        }
      }
      return e;
    }),
    (n.isAlreadyRendering = function () {
      return !1;
    }),
    (n.observeVisibleRects = function (e, r, i, o) {
      if (!Rn) throw Error(h(363));
      e = so(e, r);
      var u = V0(e, i, o).disconnect;
      return {
        disconnect: function () {
          u();
        },
      };
    }),
    (n.registerMutableSourceForHydration = function (e, r) {
      var i = r._getVersion;
      (i = i(r._source)),
        e.mutableSourceEagerHydrationData == null
          ? (e.mutableSourceEagerHydrationData = [r, i])
          : e.mutableSourceEagerHydrationData.push(r, i);
    }),
    (n.runWithPriority = function (e, r) {
      var i = Ce;
      try {
        return (Ce = e), r();
      } finally {
        Ce = i;
      }
    }),
    (n.shouldError = function () {
      return null;
    }),
    (n.shouldSuspend = function () {
      return !1;
    }),
    (n.updateContainer = function (e, r, i, o) {
      var u = r.current,
        g = ht(),
        S = wr(u);
      return (
        (i = qu(i)),
        r.context === null ? (r.context = i) : (r.pendingContext = i),
        (r = rr(g, S)),
        (r.payload = { element: e }),
        (o = o === void 0 ? null : o),
        o !== null && (r.callback = o),
        (e = yr(u, r, S)),
        e !== null && (Nt(e, u, S, g), Pi(e, u, S)),
        S
      );
    }),
    n
  );
};
R0.exports = Ng;
var Rg = R0.exports;
const bg = Xo(Rg);
var b0 = { exports: {} },
  tn = {};
/**
 * @license React
 * react-reconciler-constants.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ tn.ConcurrentRoot = 1;
tn.ContinuousEventPriority = 4;
tn.DefaultEventPriority = 16;
tn.DiscreteEventPriority = 1;
tn.IdleEventPriority = 536870912;
tn.LegacyRoot = 0;
b0.exports = tn;
var F0 = b0.exports;
const Ih = {
  children: !0,
  ref: !0,
  key: !0,
  style: !0,
  forwardedRef: !0,
  unstable_applyCache: !0,
  unstable_applyDrawHitFromCache: !0,
};
let Oh = !1,
  Gh = !1;
const ul = ".react-konva-event",
  Fg = `ReactKonva: You have a Konva node with draggable = true and position defined but no onDragMove or onDragEnd events are handled.
Position of a node will be changed during drag&drop, so you should update state of the react app as well.
Consider to add onDragMove or onDragEnd events.
For more info see: https://github.com/konvajs/react-konva/issues/256
`,
  Ag = `ReactKonva: You are using "zIndex" attribute for a Konva node.
react-konva may get confused with ordering. Just define correct order of elements in your render function of a component.
For more info see: https://github.com/konvajs/react-konva/issues/194
`,
  Mg = {};
function as(d, t, n = Mg) {
  if (
    (!Oh && "zIndex" in t && (console.warn(Ag), (Oh = !0)), !Gh && t.draggable)
  ) {
    var a = t.x !== void 0 || t.y !== void 0,
      s = t.onDragEnd || t.onDragMove;
    a && !s && (console.warn(Fg), (Gh = !0));
  }
  for (var l in n)
    if (!Ih[l]) {
      var h = l.slice(0, 2) === "on",
        c = n[l] !== t[l];
      if (h && c) {
        var f = l.substr(2).toLowerCase();
        f.substr(0, 7) === "content" &&
          (f = "content" + f.substr(7, 1).toUpperCase() + f.substr(8)),
          d.off(f, n[l]);
      }
      var p = !t.hasOwnProperty(l);
      p && d.setAttr(l, void 0);
    }
  var m = t._useStrictMode,
    x = {},
    C = !1;
  const _ = {};
  for (var l in t)
    if (!Ih[l]) {
      var h = l.slice(0, 2) === "on",
        y = n[l] !== t[l];
      if (h && y) {
        var f = l.substr(2).toLowerCase();
        f.substr(0, 7) === "content" &&
          (f = "content" + f.substr(7, 1).toUpperCase() + f.substr(8)),
          t[l] && (_[f] = t[l]);
      }
      !h &&
        (t[l] !== n[l] || (m && t[l] !== d.getAttr(l))) &&
        ((C = !0), (x[l] = t[l]));
    }
  C && (d.setAttrs(x), Mr(d));
  for (var f in _) d.on(f + ul, _[f]);
}
function Mr(d) {
  if (!ce.Konva.autoDrawEnabled) {
    var t = d.getLayer() || d.getStage();
    t && t.batchDraw();
  }
}
const A0 = {},
  Lg = {};
ni.Node.prototype._applyProps = as;
function Dg(d, t) {
  if (typeof t == "string") {
    console.error(
      `Do not use plain text as child of Konva.Node. You are using text: ${t}`
    );
    return;
  }
  d.add(t), Mr(d);
}
function Ig(d, t, n) {
  let a = ni[d];
  a ||
    (console.error(
      `Konva has no node with the type ${d}. Group will be used instead. If you use minimal version of react-konva, just import required nodes into Konva: "import "konva/lib/shapes/${d}"  If you want to render DOM elements as part of canvas tree take a look into this demo: https://konvajs.github.io/docs/react/DOM_Portal.html`
    ),
    (a = ni.Group));
  const s = {},
    l = {};
  for (var h in t) {
    var c = h.slice(0, 2) === "on";
    c ? (l[h] = t[h]) : (s[h] = t[h]);
  }
  const f = new a(s);
  return as(f, l), f;
}
function Og(d, t, n) {
  console.error(
    `Text components are not supported for now in ReactKonva. Your text is: "${d}"`
  );
}
function Gg(d, t, n) {
  return !1;
}
function Ug(d) {
  return d;
}
function zg() {
  return null;
}
function Bg() {
  return null;
}
function Hg(d, t, n, a) {
  return Lg;
}
function Vg() {}
function jg(d) {}
function Wg(d, t) {
  return !1;
}
function Kg() {
  return A0;
}
function Yg() {
  return A0;
}
const Xg = setTimeout,
  qg = clearTimeout,
  Qg = -1;
function $g(d, t) {
  return !1;
}
const Jg = !1,
  Zg = !0,
  e4 = !0;
function t4(d, t) {
  t.parent === d ? t.moveToTop() : d.add(t), Mr(d);
}
function r4(d, t) {
  t.parent === d ? t.moveToTop() : d.add(t), Mr(d);
}
function M0(d, t, n) {
  t._remove(), d.add(t), t.setZIndex(n.getZIndex()), Mr(d);
}
function n4(d, t, n) {
  M0(d, t, n);
}
function i4(d, t) {
  t.destroy(), t.off(ul), Mr(d);
}
function a4(d, t) {
  t.destroy(), t.off(ul), Mr(d);
}
function s4(d, t, n) {
  console.error(
    `Text components are not yet supported in ReactKonva. You text is: "${n}"`
  );
}
function o4(d, t, n) {}
function l4(d, t, n, a, s) {
  as(d, s, a);
}
function u4(d) {
  d.hide(), Mr(d);
}
function h4(d) {}
function d4(d, t) {
  (t.visible == null || t.visible) && d.show();
}
function c4(d, t) {}
function f4(d) {}
function g4() {}
const p4 = () => F0.DefaultEventPriority,
  v4 = Object.freeze(
    Object.defineProperty(
      {
        __proto__: null,
        appendChild: t4,
        appendChildToContainer: r4,
        appendInitialChild: Dg,
        cancelTimeout: qg,
        clearContainer: f4,
        commitMount: o4,
        commitTextUpdate: s4,
        commitUpdate: l4,
        createInstance: Ig,
        createTextInstance: Og,
        detachDeletedInstance: g4,
        finalizeInitialChildren: Gg,
        getChildHostContext: Yg,
        getCurrentEventPriority: p4,
        getPublicInstance: Ug,
        getRootHostContext: Kg,
        hideInstance: u4,
        hideTextInstance: h4,
        idlePriority: wo.unstable_IdlePriority,
        insertBefore: M0,
        insertInContainerBefore: n4,
        isPrimaryRenderer: Jg,
        noTimeout: Qg,
        now: wo.unstable_now,
        prepareForCommit: zg,
        preparePortalMount: Bg,
        prepareUpdate: Hg,
        removeChild: i4,
        removeChildFromContainer: a4,
        resetAfterCommit: Vg,
        resetTextContent: jg,
        run: wo.unstable_runWithPriority,
        scheduleTimeout: Xg,
        shouldDeprioritizeSubtree: Wg,
        shouldSetTextContent: $g,
        supportsMutation: e4,
        unhideInstance: d4,
        unhideTextInstance: c4,
        warnsIfNotActing: Zg,
      },
      Symbol.toStringTag,
      { value: "Module" }
    )
  );
var m4 = Object.defineProperty,
  y4 = Object.defineProperties,
  _4 = Object.getOwnPropertyDescriptors,
  Uh = Object.getOwnPropertySymbols,
  S4 = Object.prototype.hasOwnProperty,
  w4 = Object.prototype.propertyIsEnumerable,
  zh = (d, t, n) =>
    t in d
      ? m4(d, t, { enumerable: !0, configurable: !0, writable: !0, value: n })
      : (d[t] = n),
  Bh = (d, t) => {
    for (var n in t || (t = {})) S4.call(t, n) && zh(d, n, t[n]);
    if (Uh) for (var n of Uh(t)) w4.call(t, n) && zh(d, n, t[n]);
    return d;
  },
  C4 = (d, t) => y4(d, _4(t)),
  Hh,
  Vh;
typeof window < "u" &&
(((Hh = window.document) != null && Hh.createElement) ||
  ((Vh = window.navigator) == null ? void 0 : Vh.product) === "ReactNative")
  ? _e.useLayoutEffect
  : _e.useEffect;
function L0(d, t, n) {
  if (!d) return;
  if (n(d) === !0) return d;
  let a = t ? d.return : d.child;
  for (; a; ) {
    const s = L0(a, t, n);
    if (s) return s;
    a = t ? null : a.sibling;
  }
}
function D0(d) {
  try {
    return Object.defineProperties(d, {
      _currentRenderer: {
        get() {
          return null;
        },
        set() {},
      },
      _currentRenderer2: {
        get() {
          return null;
        },
        set() {},
      },
    });
  } catch {
    return d;
  }
}
const jh = console.error;
console.error = function () {
  const d = [...arguments].join("");
  if (d != null && d.startsWith("Warning:") && d.includes("useContext")) {
    console.error = jh;
    return;
  }
  return jh.apply(this, arguments);
};
const hl = D0(_e.createContext(null));
class I0 extends _e.Component {
  render() {
    return _e.createElement(
      hl.Provider,
      { value: this._reactInternals },
      this.props.children
    );
  }
}
function x4() {
  const d = _e.useContext(hl);
  if (d === null)
    throw new Error(
      "its-fine: useFiber must be called within a <FiberProvider />!"
    );
  const t = _e.useId();
  return _e.useMemo(() => {
    for (const a of [d, d == null ? void 0 : d.alternate]) {
      if (!a) continue;
      const s = L0(a, !1, (l) => {
        let h = l.memoizedState;
        for (; h; ) {
          if (h.memoizedState === t) return !0;
          h = h.next;
        }
      });
      if (s) return s;
    }
  }, [d, t]);
}
function P4() {
  const d = x4(),
    [t] = _e.useState(() => new Map());
  t.clear();
  let n = d;
  for (; n; ) {
    if (n.type && typeof n.type == "object") {
      const s =
        n.type._context === void 0 && n.type.Provider === n.type
          ? n.type
          : n.type._context;
      s && s !== hl && !t.has(s) && t.set(s, _e.useContext(D0(s)));
    }
    n = n.return;
  }
  return t;
}
function E4() {
  const d = P4();
  return _e.useMemo(
    () =>
      Array.from(d.keys()).reduce(
        (t, n) => (a) =>
          _e.createElement(
            t,
            null,
            _e.createElement(n.Provider, C4(Bh({}, a), { value: d.get(n) }))
          ),
        (t) => _e.createElement(I0, Bh({}, t))
      ),
    [d]
  );
}
function k4(d) {
  const t = Qe.useRef({});
  return (
    Qe.useLayoutEffect(() => {
      t.current = d;
    }),
    Qe.useLayoutEffect(
      () => () => {
        t.current = {};
      },
      []
    ),
    t.current
  );
}
const T4 = (d) => {
    const t = Qe.useRef(),
      n = Qe.useRef(),
      a = Qe.useRef(),
      s = k4(d),
      l = E4(),
      h = (c) => {
        const { forwardedRef: f } = d;
        f && (typeof f == "function" ? f(c) : (f.current = c));
      };
    return (
      Qe.useLayoutEffect(
        () => (
          (n.current = new ni.Stage({
            width: d.width,
            height: d.height,
            container: t.current,
          })),
          h(n.current),
          (a.current = ei.createContainer(n.current, F0.LegacyRoot, !1, null)),
          ei.updateContainer(Qe.createElement(l, {}, d.children), a.current),
          () => {
            ni.isBrowser &&
              (h(null),
              ei.updateContainer(null, a.current, null),
              n.current.destroy());
          }
        ),
        []
      ),
      Qe.useLayoutEffect(() => {
        h(n.current),
          as(n.current, d, s),
          ei.updateContainer(
            Qe.createElement(l, {}, d.children),
            a.current,
            null
          );
      }),
      Qe.createElement("div", {
        ref: t,
        id: d.id,
        accessKey: d.accessKey,
        className: d.className,
        role: d.role,
        style: d.style,
        tabIndex: d.tabIndex,
        title: d.title,
      })
    );
  },
  N4 = "Layer",
  R4 = "Group",
  Wo = "Image",
  b4 = "Transformer",
  ei = bg(v4);
ei.injectIntoDevTools({
  findHostInstanceByFiber: () => null,
  bundleType: 0,
  version: Qe.version,
  rendererPackageName: "react-konva",
});
const F4 = Qe.forwardRef((d, t) =>
  Qe.createElement(I0, {}, Qe.createElement(T4, { ...d, forwardedRef: t }))
);
var Wr = _e,
  A4 = function (t, n, a) {
    const s = Wr.useRef("loading"),
      l = Wr.useRef(),
      [h, c] = Wr.useState(0),
      f = Wr.useRef(),
      p = Wr.useRef(),
      m = Wr.useRef();
    return (
      (f.current !== t || p.current !== n || m.current !== a) &&
        ((s.current = "loading"),
        (l.current = void 0),
        (f.current = t),
        (p.current = n),
        (m.current = a)),
      Wr.useLayoutEffect(
        function () {
          if (!t) return;
          var x = document.createElement("img");
          function C() {
            (s.current = "loaded"), (l.current = x), c(Math.random());
          }
          function _() {
            (s.current = "failed"), (l.current = void 0), c(Math.random());
          }
          return (
            x.addEventListener("load", C),
            x.addEventListener("error", _),
            n && (x.crossOrigin = n),
            a && (x.referrerPolicy = a),
            (x.src = t),
            function () {
              x.removeEventListener("load", C),
                x.removeEventListener("error", _);
            }
          );
        },
        [t, n, a]
      ),
      [l.current, s.current]
    );
  };
const Wh = Xo(A4);
function Ko(d) {
  for (var t = [], n = 1; n < arguments.length; n++) t[n - 1] = arguments[n];
  d && d.addEventListener && d.addEventListener.apply(d, t);
}
function Yo(d) {
  for (var t = [], n = 1; n < arguments.length; n++) t[n - 1] = arguments[n];
  d && d.removeEventListener && d.removeEventListener.apply(d, t);
}
var M4 = function (d, t) {
    t === void 0 && (t = !0);
    var n = _e.useState(!1),
      a = n[0],
      s = n[1];
    return (
      _e.useEffect(
        function () {
          var l = function () {
              return s(!0);
            },
            h = function () {
              return s(!1);
            };
          t &&
            d &&
            d.current &&
            (Ko(d.current, "mouseover", l), Ko(d.current, "mouseout", h));
          var c = d.current;
          return function () {
            t && c && (Yo(c, "mouseover", l), Yo(c, "mouseout", h));
          };
        },
        [t, d]
      ),
      a
    );
  },
  L4 = function (d) {
    return "touches" in d;
  },
  Kh = function (d) {
    L4(d) && d.touches.length < 2 && d.preventDefault && d.preventDefault();
  },
  D4 = function (d, t) {
    var n = t === void 0 ? {} : t,
      a = n.isPreventDefault,
      s = a === void 0 ? !0 : a,
      l = n.delay,
      h = l === void 0 ? 300 : l,
      c = _e.useRef(),
      f = _e.useRef(),
      p = _e.useCallback(
        function (x) {
          s &&
            x.target &&
            (Ko(x.target, "touchend", Kh, { passive: !1 }),
            (f.current = x.target)),
            (c.current = setTimeout(function () {
              return d(x);
            }, h));
        },
        [d, h, s]
      ),
      m = _e.useCallback(
        function () {
          c.current && clearTimeout(c.current),
            s && f.current && Yo(f.current, "touchend", Kh);
        },
        [s]
      );
    return {
      onMouseDown: function (x) {
        return p(x);
      },
      onTouchStart: function (x) {
        return p(x);
      },
      onMouseUp: m,
      onMouseLeave: m,
      onTouchEnd: m,
    };
  };
const I4 = ({
    image: d,
    onDelete: t,
    onDragEnd: n,
    isSelected: a,
    onSelect: s,
  }) => {
    const l = _e.useRef(null),
      h = Qe.useRef(),
      c = M4(l),
      [f] = Wh(d.src),
      [p] = Wh("cancel.svg"),
      [m, x] = _e.useState(!1),
      C = () => {
        x(!0);
      };
    d.resetButtonRef.current = () => {
      x(!1);
    };
    const _ = D4(C, { delay: 200 }),
      [y, P] = _e.useState(!1),
      k = d.width,
      R = f ? (d.width * f.height) / f.width : 0;
    return (
      _e.useEffect(() => {
        c
          ? x(!0)
          : setTimeout(() => {
              x(!1);
            }, 2e3);
      }, [c]),
      Qe.useEffect(() => {
        a && (h.current.nodes([l.current]), h.current.getLayer().batchDraw());
      }, [a]),
      J.jsxs(R4, {
        draggable: !0,
        x: d.x,
        y: d.y,
        onClick: s,
        onDragStart: () => {
          P(!0), s();
        },
        onDragEnd: (F) => {
          P(!1), n(F);
        },
        onTransformEnd: (F) => {
          const v = shapeRef.current,
            w = v.scaleX(),
            E = v.scaleY();
          v.scaleX(1),
            v.scaleY(1),
            onChange({
              ...shapeProps,
              x: v.x(),
              y: v.y(),
              width: Math.max(5, v.width() * w),
              height: Math.max(v.height() * E),
            });
        },
        children: [
          J.jsx(Wo, { ref: l, width: d.width, height: R, image: f, ..._ }),
          m &&
            !y &&
            J.jsx(Wo, {
              onTouchStart: t,
              onClick: t,
              image: p,
              width: 25,
              height: 25,
              offsetX: -k / 2 - 20,
            }),
          a &&
            J.jsx(b4, {
              ref: h,
              flipEnabled: !0,
              boundBoxFunc: (F, v) =>
                Math.abs(v.width) < 5 || Math.abs(v.height) < 5 ? F : v,
            }),
        ],
      })
    );
  },
  O4 = [
    { url: "/habibify/4.png", width: 240, alt: "Habibi Keffiyeh 1" },
    { url: "/habibify/5.png", width: 240, alt: "Habibi Keffiyeh 2" },
    { url: "/habibify/6.png", width: 240, alt: "Habibi Keffiyeh 3" },
    { url: "/habibify/7.png", width: 240, alt: "Habibi Keffiyeh 4" },
    { url: "/habibify/8.png", width: 240, alt: "Habibi Keffiyeh 5" },
    { url: "/habibify/9.png", width: 240, alt: "Habibi Keffiyeh 6" },
    { url: "/habibify/10.png", width: 240, alt: "Habibi Keffiyeh 7" },
    { url: "/habibify/11.png", width: 240, alt: "Habibi Keffiyeh 8" },
    { url: "/habibify/12.png", width: 240, alt: "Habibi Keffiyeh 9" },
    { url: "/habibify/13.png", width: 240, alt: "Habibi Keffiyeh 10" },
    { url: "/habibify/14.png", width: 240, alt: "Habibi Keffiyeh 11" },
    { url: "/habibify/15.png", width: 240, alt: "Habibi Keffiyeh 12" },
  ];
function G4() {
  const [d, t] = _e.useState(null),
    [n, a] = _e.useState(600),
    [s, l] = _e.useState(600),
    [h, c] = _e.useState([]),
    [f, p] = _e.useState(null),
    m = Qe.useRef(null),
    x = window.innerWidth - 96,
    C = ({ src: v, width: w, x: E, y: N }) => {
      c((G) => [
        ...G,
        { width: w, x: E, y: N, src: v, resetButtonRef: _e.createRef() },
      ]);
    },
    _ = _e.useCallback(() => {
      h.forEach((v) => {
        v.resetButtonRef.current && v.resetButtonRef.current();
      });
    }, [h]),
    y = _e.useCallback(
      (v) => {
        v.target.attrs.id === "backgroundImage" && (_(), p(null));
      },
      [_]
    ),
    P = (v) => {
      let w = window.webkitURL || window.URL;
      w = URL.createObjectURL(v.target.files[0]);
      const E = new Image();
      (E.src = w),
        (E.onload = () => {
          const N = E.width,
            G = E.height;
          let T, z;
          x >= 600
            ? (N === G && (l(600), a(600), (T = 600), (z = 600)),
              N > G &&
                (l(600), a(600 * (G / N)), (T = 600), (z = 600 * (G / N))),
              N < G &&
                (l(600), a(600 * (G / N)), (z = 600), (T = 600 * (N / G))))
            : (N === G && (l(x), a(x), (T = x), (z = x)),
              N > G && (l(x), a(x * (G / N)), (z = x), (T = x * (G / N))),
              N < G && (l(x), a(x * (G / N)), (z = x), (T = x * (N / G)))),
            (E.height = T),
            (E.width = z),
            t(E);
        });
    };
  function k(v, w) {
    var E = document.createElement("a");
    (E.download = w),
      (E.href = v),
      document.body.appendChild(E),
      E.click(),
      document.body.removeChild(E);
  }
  const R = () => {
      _(),
        p(null),
        setTimeout(() => {
          const v = m.current.toDataURL();
          k(v, "habibified.png");
        }, 0);
    },
    F = "block text-[rgb(212,175,55)] leading-6 text-[7px] sm:text-[7px]";
  return J.jsxs("div", {
    className: "px-12 md:px-0 pb-32",
    children: [
      J.jsxs("div", {
        className:
          "flex flex-col justify-center items-center gap-4 w-full  scroll-slide activated",
        children: [
          J.jsxs("div", {
            className:
              "flex flex-row flex-wrap gap-6 content-center justify-center",
            children: [
              J.jsxs("a", {
                className:
                  "h-16 text-center text-xs flex flex-col justify-between ",
                href: "https://t.me/habibioneth/",
                "aria-label": "telegram",
                children: [
                  J.jsx("img", {
                    src: mc,
                    className:
                      "icon w-10 h-full object-cover hover:drop-shadow-[0_0_8px_rgba(212,175,55,1)]",
                  }),
                  J.jsx("span", { className: F, children: "Telegram" }),
                ],
              }),
              J.jsxs("a", {
                className:
                  "h-16 text-center text-xs flex flex-col justify-between",
                href: "https://x.com/habibioneth_erc/",
                "aria-label": "twitter",
                children: [
                  J.jsx("img", {
                    src: yc,
                    className:
                      "icon w-10 h-full object-cover hover:drop-shadow-[0_0_8px_rgba(212,175,55,1)]",
                  }),
                  J.jsx("span", { className: F, children: "Twitter" }),
                ],
              }),
              J.jsxs("a", {
                className:
                  "h-16 text-center text-xs flex flex-col justify-between",
                href: "https://www.dextools.io/app/en/ethereum/pair-explorer/0xB16320c1A105f1009f829580C22257f95b3aAacA",
                "aria-label": "dextools",
                children: [
                  J.jsx("img", {
                    src: _c,
                    className:
                      "icon w-10 h-full object-cover hover:drop-shadow-[0_0_8px_rgba(212,175,55,1)]",
                  }),
                  J.jsx("span", { className: F, children: "Dextools" }),
                ],
              }),
              J.jsxs("a", {
                className:
                  "h-16 text-center text-xs flex flex-col justify-between ",
                href: "https://dexscreener.com/ethereum/0xB16320c1A105f1009f829580C22257f95b3aAacA",
                "aria-label": "dexscreener",
                children: [
                  J.jsx("img", {
                    src: Sc,
                    className:
                      "icon w-10 h-full object-cover hover:drop-shadow-[0_0_8px_rgba(212,175,55,1)]",
                  }),
                  J.jsx("span", { className: F, children: "Dexscreener" }),
                ],
              }),
              
            
            ],
          }),
          J.jsx("div", {
            className: "w-[40%] md:w-[20%] mx-auto my-8",
            children: J.jsx("img", {
              src: Cc,
              className: "w-full object-cover",
            }),
          }),
        ],
      }),
      J.jsxs("div", {
        className: "flex flex-col md:flex-row gap-16 md:gap-x-16 mt-8",
        children: [
          J.jsx("div", {
            className: "flex-1 max-w-[600px]",
            children: J.jsxs("div", {
              className: "relative w-full h-auto",
              children: [
                J.jsx("img", {
                  className: "h-32 absolute -left-12 -top-12",
                  src: "/assets/top-left.svg",
                }),
                J.jsx("img", {
                  className: "h-32 absolute -right-12 -top-12",
                  src: "/assets/top-right.svg",
                }),
                J.jsx("img", {
                  className: "h-32 absolute -left-12 -bottom-12",
                  src: "/assets/bottom-left.svg",
                }),
                J.jsx("img", {
                  className: "h-32 absolute -right-12 -bottom-12",
                  src: "/assets/bottom-right.svg",
                }),
                !d &&
                  J.jsxs("div", {
                    className:
                      "flex flex-col text-center items-center gap-y-6 justify-center h-[600px] w-[600px] max-w-full",
                    children: [
                      J.jsx("h3", {
                        className:
                          "font-medium text-xl  enriqueta-medium text-white",
                        children: "1. Upload Your Photo/Profile Picture",
                      }),
                      J.jsx("input", {
                        type: "file",
                        id: "upload",
                        onChange: (v) => P(v),
                        hidden: !0,
                      }),
                      J.jsx("label", {
                        for: "upload",
                        className:
                          "group flex w-full rounded-xl bg-white/10 flex-col justify-center items-center p-8 border border-[#D4A664] hover:bg-white/5 transition cursor-pointer",
                        children: J.jsxs("svg", {
                          width: "212",
                          height: "209",
                          viewBox: "0 0 212 209",
                          fill: "none",
                          xmlns: "http://www.w3.org/2000/svg",
                          className:
                            "w-24 h-24 fill-white group-hover:fill-[#D4A664] transition",
                          children: [
                            J.jsxs("g", {
                              "clip-path": "url(#clip0_1_214)",
                              children: [
                                J.jsx("path", {
                                  d: "M113.952 208.796H97.284C85.0201 208.784 75.078 198.842 75.066 186.578V119.21H52.872C50.868 119.204 49.248 117.572 49.254 115.568C49.254 114.746 49.536 113.948 50.052 113.312L102.798 48.0805C104.058 46.5205 106.344 46.2805 107.904 47.5405C108.102 47.7025 108.282 47.8825 108.444 48.0805L161.19 113.294C162.444 114.86 162.192 117.146 160.626 118.4C159.984 118.916 159.192 119.192 158.37 119.198H136.176V186.596C136.146 198.854 126.21 208.784 113.952 208.796ZM60.48 111.944H78.696C80.7 111.944 82.326 113.57 82.326 115.574V186.59C82.344 194.84 89.034 201.518 97.278 201.53H113.946C122.202 201.518 128.886 194.828 128.898 186.578V115.58C128.898 113.576 130.524 111.95 132.528 111.95H150.744L105.606 56.1385L60.48 111.944Z",
                                  "fill-opacity": "0.28",
                                }),
                                J.jsx("path", {
                                  d: "M169.614 146.727H132.54C130.536 146.727 128.91 145.101 128.91 143.097C128.91 141.093 130.536 139.467 132.54 139.467H169.614C188.664 139.437 204.084 123.963 204.048 104.913C204.018 88.0348 191.784 73.6588 175.134 70.9288C173.184 70.6168 171.846 68.7988 172.116 66.8428C172.296 65.5528 172.386 64.2508 172.386 62.9488C172.404 47.5048 159.894 34.9648 144.45 34.9528C142.248 34.9528 140.058 35.2048 137.916 35.7208C135.966 36.1828 134.01 34.9768 133.542 33.0268C133.506 32.8648 133.476 32.7088 133.464 32.5408C131.964 17.1568 118.278 5.89483 102.894 7.39483C89.5798 8.69083 79.0438 19.2268 77.7478 32.5408C77.5498 34.5388 75.7738 35.9968 73.7758 35.7988C73.6138 35.7808 73.4518 35.7568 73.2898 35.7208C58.2658 32.1268 43.1758 41.3968 39.5878 56.4148C39.0778 58.5568 38.8198 60.7468 38.8198 62.9488C38.8198 64.2508 38.9098 65.5528 39.0898 66.8428C39.3598 68.7988 38.0218 70.6108 36.0718 70.9288C17.2738 74.0068 4.52984 91.7488 7.60784 110.547C10.3378 127.203 24.7138 139.437 41.5918 139.461H78.6838C80.6878 139.461 82.3138 141.087 82.3138 143.091C82.3138 145.095 80.6878 146.721 78.6838 146.721H41.6218C18.5638 146.649 -0.0721583 127.893 -0.000158283 104.835C0.0598417 85.7308 13.0738 69.1108 31.6078 64.4668C31.5838 63.9688 31.5778 63.4708 31.5778 62.9788C31.5538 43.5328 47.2978 27.7408 66.7498 27.7168C68.2138 27.7168 69.6778 27.8068 71.1298 27.9868C75.1438 8.93684 93.8458 -3.24917 112.896 0.764834C126.564 3.64483 137.238 14.3248 140.118 27.9868C159.42 25.5928 177.006 39.2968 179.4 58.5988C179.58 60.0508 179.67 61.5088 179.67 62.9668C179.67 63.4588 179.67 63.9568 179.64 64.4548C202.014 70.0408 215.622 92.7088 210.036 115.083C205.404 133.629 188.772 146.667 169.65 146.727H169.614Z",
                                  "fill-opacity": "0.28",
                                }),
                              ],
                            }),
                            J.jsx("defs", {
                              children: J.jsx("clipPath", {
                                id: "clip0_1_214",
                                children: J.jsx("rect", {
                                  width: "211.289",
                                  height: "208.797",
                                  fill: "white",
                                }),
                              }),
                            }),
                          ],
                        }),
                      }),
                      J.jsx("p", {
                        className: "text-sm",
                        children:
                          "Square images work best, but up to you, Habibi.",
                      }),
                    ],
                  }),
                d &&
                  J.jsx(F4, {
                    width: s,
                    height: n,
                    onClick: y,
                    onTap: y,
                    ref: m,
                    className: "w-full max-w-full",
                    children: J.jsxs(N4, {
                      children: [
                        J.jsx(Wo, {
                          image: d,
                          height: n,
                          width: s,
                          id: "backgroundImage",
                        }),
                        h.map((v, w) =>
                          J.jsx(
                            I4,
                            {
                              onDelete: () => {
                                const E = [...h];
                                E.splice(w, 1), c(E);
                              },
                              onDragEnd: (E) => {
                                (v.x = E.target.x()), (v.y = E.target.y());
                              },
                              onTap: () => {
                                p(w);
                              },
                              isSelected: w === f,
                              onSelect: () => {
                                p(w);
                              },
                              image: v,
                            },
                            w
                          )
                        ),
                      ],
                    }),
                  }),
              ],
            }),
          }),
          J.jsxs("div", {
            className: "flex gap-y-6 flex-col flex-1",
            children: [
              J.jsxs("div", {
                className:
                  "flex flex-col gap-y-6 border-[#D4A664] border-2 rounded-xl p-6",
                children: [
                  J.jsx("h3", {
                    className:
                      "font-medium text-xl  enriqueta-medium text-white",
                    children: "2. Pick your keffiyeh, Habibi",
                  }),
                  J.jsx("div", {
                    className: "",
                    children: O4.map((v) =>
                      J.jsx("button", {
                        className:
                          "button m-1 bg-white/10 hover:bg-white/5 transition rounded-xl border border-[#D4A664] focus:outline-none",
                        onMouseDown: () => {
                          C({ src: v.url, width: v.width, x: 128, y: 128 });
                        },
                        children: J.jsx("img", {
                          alt: v.alt,
                          src: v.url,
                          width: v.width,
                          className: "lg:w-20",
                        }),
                      })
                    ),
                  }),
                ],
              }),
              J.jsxs("div", {
                className:
                  "flex flex-col gap-y-6 border-[#D4A664] border-2 rounded-xl p-6",
                children: [
                  J.jsx("h3", {
                    className:
                      "font-medium text-xl enriqueta-medium text-white",
                    children: "3. Download your Habibified Image",
                  }),
                  J.jsx("button", {
                    class:
                      "brightness-100 group hover:shadow-lg hover:shadow-yellow-700/60 transition ease-in-out hover:scale-105 p-1 rounded-full bg-gradient-to-br from-yellow-700 via-yellow-500 to-yellow-700 hover:from-yellow-600 hover:via-yellow-700 hover:to-yellow-500 hover:border-yellow-400 focus:outline-yellow-400",
                    onClick: R,
                    children: J.jsx("div", {
                      class:
                        "px-6 py-2 backdrop-blur-xl bg-black/80 rounded-full font-bold w-full h-full",
                      children: J.jsx("div", {
                        class:
                          "group-hover:scale-100 inline-flex group-hover:text-yellow-300 text-yellow-400 gap-1",
                        children: "Download",
                      }),
                    }),
                  }),
                ],
              }),
            ],
          }),
        ],
      }),
    ],
  });
}
function U4() {
  return J.jsxs("div", {
    className: "",
    children: [
      J.jsx(xc, {}),
      J.jsxs(Pc, {
        children: [
          J.jsx("title", { children: "Habibi | Habibify Yourself" }),
          J.jsx("meta", {
            name: "description",
            content: "Yallah Habibi, See you in Dubai.",
          }),
        ],
      }),
      J.jsx(Ec, {}),
      J.jsx("div", { className: "container mx-auto", children: J.jsx(G4, {}) }),
    ],
  });
}
kc.createRoot(document.getElementById("root")).render(
  J.jsx(Qe.StrictMode, { children: J.jsx(U4, {}) })
);
