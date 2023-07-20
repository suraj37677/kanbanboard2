function ZE(e, t) {
  for (var n = 0; n < t.length; n++) {
    const r = t[n];
    if (typeof r != "string" && !Array.isArray(r)) {
      for (const o in r)
        if (o !== "default" && !(o in e)) {
          const i = Object.getOwnPropertyDescriptor(r, o);
          i &&
            Object.defineProperty(
              e,
              o,
              i.get ? i : { enumerable: !0, get: () => r[o] }
            );
        }
    }
  }
  return Object.freeze(
    Object.defineProperty(e, Symbol.toStringTag, { value: "Module" })
  );
}
(function () {
  const t = document.createElement("link").relList;
  if (t && t.supports && t.supports("modulepreload")) return;
  for (const o of document.querySelectorAll('link[rel="modulepreload"]')) r(o);
  new MutationObserver((o) => {
    for (const i of o)
      if (i.type === "childList")
        for (const a of i.addedNodes)
          a.tagName === "LINK" && a.rel === "modulepreload" && r(a);
  }).observe(document, { childList: !0, subtree: !0 });
  function n(o) {
    const i = {};
    return (
      o.integrity && (i.integrity = o.integrity),
      o.referrerPolicy && (i.referrerPolicy = o.referrerPolicy),
      o.crossOrigin === "use-credentials"
        ? (i.credentials = "include")
        : o.crossOrigin === "anonymous"
        ? (i.credentials = "omit")
        : (i.credentials = "same-origin"),
      i
    );
  }
  function r(o) {
    if (o.ep) return;
    o.ep = !0;
    const i = n(o);
    fetch(o.href, i);
  }
})();
function _c(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default")
    ? e.default
    : e;
}
function JE(e) {
  if (e.__esModule) return e;
  var t = e.default;
  if (typeof t == "function") {
    var n = function r() {
      if (this instanceof r) {
        var o = [null];
        o.push.apply(o, arguments);
        var i = Function.bind.apply(t, o);
        return new i();
      }
      return t.apply(this, arguments);
    };
    n.prototype = t.prototype;
  } else n = {};
  return (
    Object.defineProperty(n, "__esModule", { value: !0 }),
    Object.keys(e).forEach(function (r) {
      var o = Object.getOwnPropertyDescriptor(e, r);
      Object.defineProperty(
        n,
        r,
        o.get
          ? o
          : {
              enumerable: !0,
              get: function () {
                return e[r];
              },
            }
      );
    }),
    n
  );
}
var gb = { exports: {} },
  Pc = {},
  yb = { exports: {} },
  ke = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var os = Symbol.for("react.element"),
  e2 = Symbol.for("react.portal"),
  t2 = Symbol.for("react.fragment"),
  n2 = Symbol.for("react.strict_mode"),
  r2 = Symbol.for("react.profiler"),
  o2 = Symbol.for("react.provider"),
  i2 = Symbol.for("react.context"),
  a2 = Symbol.for("react.forward_ref"),
  l2 = Symbol.for("react.suspense"),
  s2 = Symbol.for("react.memo"),
  u2 = Symbol.for("react.lazy"),
  Og = Symbol.iterator;
function c2(e) {
  return e === null || typeof e != "object"
    ? null
    : ((e = (Og && e[Og]) || e["@@iterator"]),
      typeof e == "function" ? e : null);
}
var bb = {
    isMounted: function () {
      return !1;
    },
    enqueueForceUpdate: function () {},
    enqueueReplaceState: function () {},
    enqueueSetState: function () {},
  },
  xb = Object.assign,
  Sb = {};
function ga(e, t, n) {
  (this.props = e),
    (this.context = t),
    (this.refs = Sb),
    (this.updater = n || bb);
}
ga.prototype.isReactComponent = {};
ga.prototype.setState = function (e, t) {
  if (typeof e != "object" && typeof e != "function" && e != null)
    throw Error(
      "setState(...): takes an object of state variables to update or a function which returns an object of state variables."
    );
  this.updater.enqueueSetState(this, e, t, "setState");
};
ga.prototype.forceUpdate = function (e) {
  this.updater.enqueueForceUpdate(this, e, "forceUpdate");
};
function wb() {}
wb.prototype = ga.prototype;
function Xv(e, t, n) {
  (this.props = e),
    (this.context = t),
    (this.refs = Sb),
    (this.updater = n || bb);
}
var Qv = (Xv.prototype = new wb());
Qv.constructor = Xv;
xb(Qv, ga.prototype);
Qv.isPureReactComponent = !0;
var Mg = Array.isArray,
  Cb = Object.prototype.hasOwnProperty,
  Zv = { current: null },
  Rb = { key: !0, ref: !0, __self: !0, __source: !0 };
function Eb(e, t, n) {
  var r,
    o = {},
    i = null,
    a = null;
  if (t != null)
    for (r in (t.ref !== void 0 && (a = t.ref),
    t.key !== void 0 && (i = "" + t.key),
    t))
      Cb.call(t, r) && !Rb.hasOwnProperty(r) && (o[r] = t[r]);
  var l = arguments.length - 2;
  if (l === 1) o.children = n;
  else if (1 < l) {
    for (var s = Array(l), u = 0; u < l; u++) s[u] = arguments[u + 2];
    o.children = s;
  }
  if (e && e.defaultProps)
    for (r in ((l = e.defaultProps), l)) o[r] === void 0 && (o[r] = l[r]);
  return {
    $$typeof: os,
    type: e,
    key: i,
    ref: a,
    props: o,
    _owner: Zv.current,
  };
}
function d2(e, t) {
  return {
    $$typeof: os,
    type: e.type,
    key: t,
    ref: e.ref,
    props: e.props,
    _owner: e._owner,
  };
}
function Jv(e) {
  return typeof e == "object" && e !== null && e.$$typeof === os;
}
function f2(e) {
  var t = { "=": "=0", ":": "=2" };
  return (
    "$" +
    e.replace(/[=:]/g, function (n) {
      return t[n];
    })
  );
}
var $g = /\/+/g;
function ff(e, t) {
  return typeof e == "object" && e !== null && e.key != null
    ? f2("" + e.key)
    : t.toString(36);
}
function yu(e, t, n, r, o) {
  var i = typeof e;
  (i === "undefined" || i === "boolean") && (e = null);
  var a = !1;
  if (e === null) a = !0;
  else
    switch (i) {
      case "string":
      case "number":
        a = !0;
        break;
      case "object":
        switch (e.$$typeof) {
          case os:
          case e2:
            a = !0;
        }
    }
  if (a)
    return (
      (a = e),
      (o = o(a)),
      (e = r === "" ? "." + ff(a, 0) : r),
      Mg(o)
        ? ((n = ""),
          e != null && (n = e.replace($g, "$&/") + "/"),
          yu(o, t, n, "", function (u) {
            return u;
          }))
        : o != null &&
          (Jv(o) &&
            (o = d2(
              o,
              n +
                (!o.key || (a && a.key === o.key)
                  ? ""
                  : ("" + o.key).replace($g, "$&/") + "/") +
                e
            )),
          t.push(o)),
      1
    );
  if (((a = 0), (r = r === "" ? "." : r + ":"), Mg(e)))
    for (var l = 0; l < e.length; l++) {
      i = e[l];
      var s = r + ff(i, l);
      a += yu(i, t, n, s, o);
    }
  else if (((s = c2(e)), typeof s == "function"))
    for (e = s.call(e), l = 0; !(i = e.next()).done; )
      (i = i.value), (s = r + ff(i, l++)), (a += yu(i, t, n, s, o));
  else if (i === "object")
    throw (
      ((t = String(e)),
      Error(
        "Objects are not valid as a React child (found: " +
          (t === "[object Object]"
            ? "object with keys {" + Object.keys(e).join(", ") + "}"
            : t) +
          "). If you meant to render a collection of children, use an array instead."
      ))
    );
  return a;
}
function Ls(e, t, n) {
  if (e == null) return e;
  var r = [],
    o = 0;
  return (
    yu(e, r, "", "", function (i) {
      return t.call(n, i, o++);
    }),
    r
  );
}
function p2(e) {
  if (e._status === -1) {
    var t = e._result;
    (t = t()),
      t.then(
        function (n) {
          (e._status === 0 || e._status === -1) &&
            ((e._status = 1), (e._result = n));
        },
        function (n) {
          (e._status === 0 || e._status === -1) &&
            ((e._status = 2), (e._result = n));
        }
      ),
      e._status === -1 && ((e._status = 0), (e._result = t));
  }
  if (e._status === 1) return e._result.default;
  throw e._result;
}
var tn = { current: null },
  bu = { transition: null },
  v2 = {
    ReactCurrentDispatcher: tn,
    ReactCurrentBatchConfig: bu,
    ReactCurrentOwner: Zv,
  };
ke.Children = {
  map: Ls,
  forEach: function (e, t, n) {
    Ls(
      e,
      function () {
        t.apply(this, arguments);
      },
      n
    );
  },
  count: function (e) {
    var t = 0;
    return (
      Ls(e, function () {
        t++;
      }),
      t
    );
  },
  toArray: function (e) {
    return (
      Ls(e, function (t) {
        return t;
      }) || []
    );
  },
  only: function (e) {
    if (!Jv(e))
      throw Error(
        "React.Children.only expected to receive a single React element child."
      );
    return e;
  },
};
ke.Component = ga;
ke.Fragment = t2;
ke.Profiler = r2;
ke.PureComponent = Xv;
ke.StrictMode = n2;
ke.Suspense = l2;
ke.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = v2;
ke.cloneElement = function (e, t, n) {
  if (e == null)
    throw Error(
      "React.cloneElement(...): The argument must be a React element, but you passed " +
        e +
        "."
    );
  var r = xb({}, e.props),
    o = e.key,
    i = e.ref,
    a = e._owner;
  if (t != null) {
    if (
      (t.ref !== void 0 && ((i = t.ref), (a = Zv.current)),
      t.key !== void 0 && (o = "" + t.key),
      e.type && e.type.defaultProps)
    )
      var l = e.type.defaultProps;
    for (s in t)
      Cb.call(t, s) &&
        !Rb.hasOwnProperty(s) &&
        (r[s] = t[s] === void 0 && l !== void 0 ? l[s] : t[s]);
  }
  var s = arguments.length - 2;
  if (s === 1) r.children = n;
  else if (1 < s) {
    l = Array(s);
    for (var u = 0; u < s; u++) l[u] = arguments[u + 2];
    r.children = l;
  }
  return { $$typeof: os, type: e.type, key: o, ref: i, props: r, _owner: a };
};
ke.createContext = function (e) {
  return (
    (e = {
      $$typeof: i2,
      _currentValue: e,
      _currentValue2: e,
      _threadCount: 0,
      Provider: null,
      Consumer: null,
      _defaultValue: null,
      _globalName: null,
    }),
    (e.Provider = { $$typeof: o2, _context: e }),
    (e.Consumer = e)
  );
};
ke.createElement = Eb;
ke.createFactory = function (e) {
  var t = Eb.bind(null, e);
  return (t.type = e), t;
};
ke.createRef = function () {
  return { current: null };
};
ke.forwardRef = function (e) {
  return { $$typeof: a2, render: e };
};
ke.isValidElement = Jv;
ke.lazy = function (e) {
  return { $$typeof: u2, _payload: { _status: -1, _result: e }, _init: p2 };
};
ke.memo = function (e, t) {
  return { $$typeof: s2, type: e, compare: t === void 0 ? null : t };
};
ke.startTransition = function (e) {
  var t = bu.transition;
  bu.transition = {};
  try {
    e();
  } finally {
    bu.transition = t;
  }
};
ke.unstable_act = function () {
  throw Error("act(...) is not supported in production builds of React.");
};
ke.useCallback = function (e, t) {
  return tn.current.useCallback(e, t);
};
ke.useContext = function (e) {
  return tn.current.useContext(e);
};
ke.useDebugValue = function () {};
ke.useDeferredValue = function (e) {
  return tn.current.useDeferredValue(e);
};
ke.useEffect = function (e, t) {
  return tn.current.useEffect(e, t);
};
ke.useId = function () {
  return tn.current.useId();
};
ke.useImperativeHandle = function (e, t, n) {
  return tn.current.useImperativeHandle(e, t, n);
};
ke.useInsertionEffect = function (e, t) {
  return tn.current.useInsertionEffect(e, t);
};
ke.useLayoutEffect = function (e, t) {
  return tn.current.useLayoutEffect(e, t);
};
ke.useMemo = function (e, t) {
  return tn.current.useMemo(e, t);
};
ke.useReducer = function (e, t, n) {
  return tn.current.useReducer(e, t, n);
};
ke.useRef = function (e) {
  return tn.current.useRef(e);
};
ke.useState = function (e) {
  return tn.current.useState(e);
};
ke.useSyncExternalStore = function (e, t, n) {
  return tn.current.useSyncExternalStore(e, t, n);
};
ke.useTransition = function () {
  return tn.current.useTransition();
};
ke.version = "18.2.0";
yb.exports = ke;
var S = yb.exports;
const oe = _c(S),
  xp = ZE({ __proto__: null, default: oe }, [S]);
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var h2 = S,
  m2 = Symbol.for("react.element"),
  g2 = Symbol.for("react.fragment"),
  y2 = Object.prototype.hasOwnProperty,
  b2 = h2.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
  x2 = { key: !0, ref: !0, __self: !0, __source: !0 };
function Tb(e, t, n) {
  var r,
    o = {},
    i = null,
    a = null;
  n !== void 0 && (i = "" + n),
    t.key !== void 0 && (i = "" + t.key),
    t.ref !== void 0 && (a = t.ref);
  for (r in t) y2.call(t, r) && !x2.hasOwnProperty(r) && (o[r] = t[r]);
  if (e && e.defaultProps)
    for (r in ((t = e.defaultProps), t)) o[r] === void 0 && (o[r] = t[r]);
  return {
    $$typeof: m2,
    type: e,
    key: i,
    ref: a,
    props: o,
    _owner: b2.current,
  };
}
Pc.Fragment = g2;
Pc.jsx = Tb;
Pc.jsxs = Tb;
gb.exports = Pc;
var w = gb.exports,
  Sp = {},
  _b = { exports: {} },
  In = {},
  Pb = { exports: {} },
  kb = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ (function (e) {
  function t(U, X) {
    var W = U.length;
    U.push(X);
    e: for (; 0 < W; ) {
      var ee = (W - 1) >>> 1,
        k = U[ee];
      if (0 < o(k, X)) (U[ee] = X), (U[W] = k), (W = ee);
      else break e;
    }
  }
  function n(U) {
    return U.length === 0 ? null : U[0];
  }
  function r(U) {
    if (U.length === 0) return null;
    var X = U[0],
      W = U.pop();
    if (W !== X) {
      U[0] = W;
      e: for (var ee = 0, k = U.length, L = k >>> 1; ee < L; ) {
        var O = 2 * (ee + 1) - 1,
          H = U[O],
          Y = O + 1,
          se = U[Y];
        if (0 > o(H, W))
          Y < k && 0 > o(se, H)
            ? ((U[ee] = se), (U[Y] = W), (ee = Y))
            : ((U[ee] = H), (U[O] = W), (ee = O));
        else if (Y < k && 0 > o(se, W)) (U[ee] = se), (U[Y] = W), (ee = Y);
        else break e;
      }
    }
    return X;
  }
  function o(U, X) {
    var W = U.sortIndex - X.sortIndex;
    return W !== 0 ? W : U.id - X.id;
  }
  if (typeof performance == "object" && typeof performance.now == "function") {
    var i = performance;
    e.unstable_now = function () {
      return i.now();
    };
  } else {
    var a = Date,
      l = a.now();
    e.unstable_now = function () {
      return a.now() - l;
    };
  }
  var s = [],
    u = [],
    c = 1,
    d = null,
    f = 3,
    p = !1,
    h = !1,
    g = !1,
    x = typeof setTimeout == "function" ? setTimeout : null,
    v = typeof clearTimeout == "function" ? clearTimeout : null,
    m = typeof setImmediate < "u" ? setImmediate : null;
  typeof navigator < "u" &&
    navigator.scheduling !== void 0 &&
    navigator.scheduling.isInputPending !== void 0 &&
    navigator.scheduling.isInputPending.bind(navigator.scheduling);
  function y(U) {
    for (var X = n(u); X !== null; ) {
      if (X.callback === null) r(u);
      else if (X.startTime <= U)
        r(u), (X.sortIndex = X.expirationTime), t(s, X);
      else break;
      X = n(u);
    }
  }
  function b(U) {
    if (((g = !1), y(U), !h))
      if (n(s) !== null) (h = !0), q(C);
      else {
        var X = n(u);
        X !== null && re(b, X.startTime - U);
      }
  }
  function C(U, X) {
    (h = !1), g && ((g = !1), v(D), (D = -1)), (p = !0);
    var W = f;
    try {
      for (
        y(X), d = n(s);
        d !== null && (!(d.expirationTime > X) || (U && !M()));

      ) {
        var ee = d.callback;
        if (typeof ee == "function") {
          (d.callback = null), (f = d.priorityLevel);
          var k = ee(d.expirationTime <= X);
          (X = e.unstable_now()),
            typeof k == "function" ? (d.callback = k) : d === n(s) && r(s),
            y(X);
        } else r(s);
        d = n(s);
      }
      if (d !== null) var L = !0;
      else {
        var O = n(u);
        O !== null && re(b, O.startTime - X), (L = !1);
      }
      return L;
    } finally {
      (d = null), (f = W), (p = !1);
    }
  }
  var R = !1,
    E = null,
    D = -1,
    A = 5,
    I = -1;
  function M() {
    return !(e.unstable_now() - I < A);
  }
  function J() {
    if (E !== null) {
      var U = e.unstable_now();
      I = U;
      var X = !0;
      try {
        X = E(!0, U);
      } finally {
        X ? V() : ((R = !1), (E = null));
      }
    } else R = !1;
  }
  var V;
  if (typeof m == "function")
    V = function () {
      m(J);
    };
  else if (typeof MessageChannel < "u") {
    var j = new MessageChannel(),
      z = j.port2;
    (j.port1.onmessage = J),
      (V = function () {
        z.postMessage(null);
      });
  } else
    V = function () {
      x(J, 0);
    };
  function q(U) {
    (E = U), R || ((R = !0), V());
  }
  function re(U, X) {
    D = x(function () {
      U(e.unstable_now());
    }, X);
  }
  (e.unstable_IdlePriority = 5),
    (e.unstable_ImmediatePriority = 1),
    (e.unstable_LowPriority = 4),
    (e.unstable_NormalPriority = 3),
    (e.unstable_Profiling = null),
    (e.unstable_UserBlockingPriority = 2),
    (e.unstable_cancelCallback = function (U) {
      U.callback = null;
    }),
    (e.unstable_continueExecution = function () {
      h || p || ((h = !0), q(C));
    }),
    (e.unstable_forceFrameRate = function (U) {
      0 > U || 125 < U
        ? console.error(
            "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"
          )
        : (A = 0 < U ? Math.floor(1e3 / U) : 5);
    }),
    (e.unstable_getCurrentPriorityLevel = function () {
      return f;
    }),
    (e.unstable_getFirstCallbackNode = function () {
      return n(s);
    }),
    (e.unstable_next = function (U) {
      switch (f) {
        case 1:
        case 2:
        case 3:
          var X = 3;
          break;
        default:
          X = f;
      }
      var W = f;
      f = X;
      try {
        return U();
      } finally {
        f = W;
      }
    }),
    (e.unstable_pauseExecution = function () {}),
    (e.unstable_requestPaint = function () {}),
    (e.unstable_runWithPriority = function (U, X) {
      switch (U) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          break;
        default:
          U = 3;
      }
      var W = f;
      f = U;
      try {
        return X();
      } finally {
        f = W;
      }
    }),
    (e.unstable_scheduleCallback = function (U, X, W) {
      var ee = e.unstable_now();
      switch (
        (typeof W == "object" && W !== null
          ? ((W = W.delay), (W = typeof W == "number" && 0 < W ? ee + W : ee))
          : (W = ee),
        U)
      ) {
        case 1:
          var k = -1;
          break;
        case 2:
          k = 250;
          break;
        case 5:
          k = 1073741823;
          break;
        case 4:
          k = 1e4;
          break;
        default:
          k = 5e3;
      }
      return (
        (k = W + k),
        (U = {
          id: c++,
          callback: X,
          priorityLevel: U,
          startTime: W,
          expirationTime: k,
          sortIndex: -1,
        }),
        W > ee
          ? ((U.sortIndex = W),
            t(u, U),
            n(s) === null &&
              U === n(u) &&
              (g ? (v(D), (D = -1)) : (g = !0), re(b, W - ee)))
          : ((U.sortIndex = k), t(s, U), h || p || ((h = !0), q(C))),
        U
      );
    }),
    (e.unstable_shouldYield = M),
    (e.unstable_wrapCallback = function (U) {
      var X = f;
      return function () {
        var W = f;
        f = X;
        try {
          return U.apply(this, arguments);
        } finally {
          f = W;
        }
      };
    });
})(kb);
Pb.exports = kb;
var S2 = Pb.exports;
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Db = S,
  kn = S2;
function Z(e) {
  for (
    var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, n = 1;
    n < arguments.length;
    n++
  )
    t += "&args[]=" + encodeURIComponent(arguments[n]);
  return (
    "Minified React error #" +
    e +
    "; visit " +
    t +
    " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
  );
}
var Ib = new Set(),
  Tl = {};
function ii(e, t) {
  qi(e, t), qi(e + "Capture", t);
}
function qi(e, t) {
  for (Tl[e] = t, e = 0; e < t.length; e++) Ib.add(t[e]);
}
var Lr = !(
    typeof window > "u" ||
    typeof window.document > "u" ||
    typeof window.document.createElement > "u"
  ),
  wp = Object.prototype.hasOwnProperty,
  w2 =
    /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
  Lg = {},
  Bg = {};
function C2(e) {
  return wp.call(Bg, e)
    ? !0
    : wp.call(Lg, e)
    ? !1
    : w2.test(e)
    ? (Bg[e] = !0)
    : ((Lg[e] = !0), !1);
}
function R2(e, t, n, r) {
  if (n !== null && n.type === 0) return !1;
  switch (typeof t) {
    case "function":
    case "symbol":
      return !0;
    case "boolean":
      return r
        ? !1
        : n !== null
        ? !n.acceptsBooleans
        : ((e = e.toLowerCase().slice(0, 5)), e !== "data-" && e !== "aria-");
    default:
      return !1;
  }
}
function E2(e, t, n, r) {
  if (t === null || typeof t > "u" || R2(e, t, n, r)) return !0;
  if (r) return !1;
  if (n !== null)
    switch (n.type) {
      case 3:
        return !t;
      case 4:
        return t === !1;
      case 5:
        return isNaN(t);
      case 6:
        return isNaN(t) || 1 > t;
    }
  return !1;
}
function nn(e, t, n, r, o, i, a) {
  (this.acceptsBooleans = t === 2 || t === 3 || t === 4),
    (this.attributeName = r),
    (this.attributeNamespace = o),
    (this.mustUseProperty = n),
    (this.propertyName = e),
    (this.type = t),
    (this.sanitizeURL = i),
    (this.removeEmptyString = a);
}
var Ft = {};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style"
  .split(" ")
  .forEach(function (e) {
    Ft[e] = new nn(e, 0, !1, e, null, !1, !1);
  });
[
  ["acceptCharset", "accept-charset"],
  ["className", "class"],
  ["htmlFor", "for"],
  ["httpEquiv", "http-equiv"],
].forEach(function (e) {
  var t = e[0];
  Ft[t] = new nn(t, 1, !1, e[1], null, !1, !1);
});
["contentEditable", "draggable", "spellCheck", "value"].forEach(function (e) {
  Ft[e] = new nn(e, 2, !1, e.toLowerCase(), null, !1, !1);
});
[
  "autoReverse",
  "externalResourcesRequired",
  "focusable",
  "preserveAlpha",
].forEach(function (e) {
  Ft[e] = new nn(e, 2, !1, e, null, !1, !1);
});
"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope"
  .split(" ")
  .forEach(function (e) {
    Ft[e] = new nn(e, 3, !1, e.toLowerCase(), null, !1, !1);
  });
["checked", "multiple", "muted", "selected"].forEach(function (e) {
  Ft[e] = new nn(e, 3, !0, e, null, !1, !1);
});
["capture", "download"].forEach(function (e) {
  Ft[e] = new nn(e, 4, !1, e, null, !1, !1);
});
["cols", "rows", "size", "span"].forEach(function (e) {
  Ft[e] = new nn(e, 6, !1, e, null, !1, !1);
});
["rowSpan", "start"].forEach(function (e) {
  Ft[e] = new nn(e, 5, !1, e.toLowerCase(), null, !1, !1);
});
var eh = /[\-:]([a-z])/g;
function th(e) {
  return e[1].toUpperCase();
}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height"
  .split(" ")
  .forEach(function (e) {
    var t = e.replace(eh, th);
    Ft[t] = new nn(t, 1, !1, e, null, !1, !1);
  });
"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type"
  .split(" ")
  .forEach(function (e) {
    var t = e.replace(eh, th);
    Ft[t] = new nn(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
  });
["xml:base", "xml:lang", "xml:space"].forEach(function (e) {
  var t = e.replace(eh, th);
  Ft[t] = new nn(t, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1);
});
["tabIndex", "crossOrigin"].forEach(function (e) {
  Ft[e] = new nn(e, 1, !1, e.toLowerCase(), null, !1, !1);
});
Ft.xlinkHref = new nn(
  "xlinkHref",
  1,
  !1,
  "xlink:href",
  "http://www.w3.org/1999/xlink",
  !0,
  !1
);
["src", "href", "action", "formAction"].forEach(function (e) {
  Ft[e] = new nn(e, 1, !1, e.toLowerCase(), null, !0, !0);
});
function nh(e, t, n, r) {
  var o = Ft.hasOwnProperty(t) ? Ft[t] : null;
  (o !== null
    ? o.type !== 0
    : r ||
      !(2 < t.length) ||
      (t[0] !== "o" && t[0] !== "O") ||
      (t[1] !== "n" && t[1] !== "N")) &&
    (E2(t, n, o, r) && (n = null),
    r || o === null
      ? C2(t) && (n === null ? e.removeAttribute(t) : e.setAttribute(t, "" + n))
      : o.mustUseProperty
      ? (e[o.propertyName] = n === null ? (o.type === 3 ? !1 : "") : n)
      : ((t = o.attributeName),
        (r = o.attributeNamespace),
        n === null
          ? e.removeAttribute(t)
          : ((o = o.type),
            (n = o === 3 || (o === 4 && n === !0) ? "" : "" + n),
            r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))));
}
var Vr = Db.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
  Bs = Symbol.for("react.element"),
  Ci = Symbol.for("react.portal"),
  Ri = Symbol.for("react.fragment"),
  rh = Symbol.for("react.strict_mode"),
  Cp = Symbol.for("react.profiler"),
  Ab = Symbol.for("react.provider"),
  Nb = Symbol.for("react.context"),
  oh = Symbol.for("react.forward_ref"),
  Rp = Symbol.for("react.suspense"),
  Ep = Symbol.for("react.suspense_list"),
  ih = Symbol.for("react.memo"),
  Qr = Symbol.for("react.lazy"),
  Ob = Symbol.for("react.offscreen"),
  Fg = Symbol.iterator;
function _a(e) {
  return e === null || typeof e != "object"
    ? null
    : ((e = (Fg && e[Fg]) || e["@@iterator"]),
      typeof e == "function" ? e : null);
}
var at = Object.assign,
  pf;
function Za(e) {
  if (pf === void 0)
    try {
      throw Error();
    } catch (n) {
      var t = n.stack.trim().match(/\n( *(at )?)/);
      pf = (t && t[1]) || "";
    }
  return (
    `
` +
    pf +
    e
  );
}
var vf = !1;
function hf(e, t) {
  if (!e || vf) return "";
  vf = !0;
  var n = Error.prepareStackTrace;
  Error.prepareStackTrace = void 0;
  try {
    if (t)
      if (
        ((t = function () {
          throw Error();
        }),
        Object.defineProperty(t.prototype, "props", {
          set: function () {
            throw Error();
          },
        }),
        typeof Reflect == "object" && Reflect.construct)
      ) {
        try {
          Reflect.construct(t, []);
        } catch (u) {
          var r = u;
        }
        Reflect.construct(e, [], t);
      } else {
        try {
          t.call();
        } catch (u) {
          r = u;
        }
        e.call(t.prototype);
      }
    else {
      try {
        throw Error();
      } catch (u) {
        r = u;
      }
      e();
    }
  } catch (u) {
    if (u && r && typeof u.stack == "string") {
      for (
        var o = u.stack.split(`
`),
          i = r.stack.split(`
`),
          a = o.length - 1,
          l = i.length - 1;
        1 <= a && 0 <= l && o[a] !== i[l];

      )
        l--;
      for (; 1 <= a && 0 <= l; a--, l--)
        if (o[a] !== i[l]) {
          if (a !== 1 || l !== 1)
            do
              if ((a--, l--, 0 > l || o[a] !== i[l])) {
                var s =
                  `
` + o[a].replace(" at new ", " at ");
                return (
                  e.displayName &&
                    s.includes("<anonymous>") &&
                    (s = s.replace("<anonymous>", e.displayName)),
                  s
                );
              }
            while (1 <= a && 0 <= l);
          break;
        }
    }
  } finally {
    (vf = !1), (Error.prepareStackTrace = n);
  }
  return (e = e ? e.displayName || e.name : "") ? Za(e) : "";
}
function T2(e) {
  switch (e.tag) {
    case 5:
      return Za(e.type);
    case 16:
      return Za("Lazy");
    case 13:
      return Za("Suspense");
    case 19:
      return Za("SuspenseList");
    case 0:
    case 2:
    case 15:
      return (e = hf(e.type, !1)), e;
    case 11:
      return (e = hf(e.type.render, !1)), e;
    case 1:
      return (e = hf(e.type, !0)), e;
    default:
      return "";
  }
}
function Tp(e) {
  if (e == null) return null;
  if (typeof e == "function") return e.displayName || e.name || null;
  if (typeof e == "string") return e;
  switch (e) {
    case Ri:
      return "Fragment";
    case Ci:
      return "Portal";
    case Cp:
      return "Profiler";
    case rh:
      return "StrictMode";
    case Rp:
      return "Suspense";
    case Ep:
      return "SuspenseList";
  }
  if (typeof e == "object")
    switch (e.$$typeof) {
      case Nb:
        return (e.displayName || "Context") + ".Consumer";
      case Ab:
        return (e._context.displayName || "Context") + ".Provider";
      case oh:
        var t = e.render;
        return (
          (e = e.displayName),
          e ||
            ((e = t.displayName || t.name || ""),
            (e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef")),
          e
        );
      case ih:
        return (
          (t = e.displayName || null), t !== null ? t : Tp(e.type) || "Memo"
        );
      case Qr:
        (t = e._payload), (e = e._init);
        try {
          return Tp(e(t));
        } catch {}
    }
  return null;
}
function _2(e) {
  var t = e.type;
  switch (e.tag) {
    case 24:
      return "Cache";
    case 9:
      return (t.displayName || "Context") + ".Consumer";
    case 10:
      return (t._context.displayName || "Context") + ".Provider";
    case 18:
      return "DehydratedFragment";
    case 11:
      return (
        (e = t.render),
        (e = e.displayName || e.name || ""),
        t.displayName || (e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef")
      );
    case 7:
      return "Fragment";
    case 5:
      return t;
    case 4:
      return "Portal";
    case 3:
      return "Root";
    case 6:
      return "Text";
    case 16:
      return Tp(t);
    case 8:
      return t === rh ? "StrictMode" : "Mode";
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
      if (typeof t == "function") return t.displayName || t.name || null;
      if (typeof t == "string") return t;
  }
  return null;
}
function xo(e) {
  switch (typeof e) {
    case "boolean":
    case "number":
    case "string":
    case "undefined":
      return e;
    case "object":
      return e;
    default:
      return "";
  }
}
function Mb(e) {
  var t = e.type;
  return (
    (e = e.nodeName) &&
    e.toLowerCase() === "input" &&
    (t === "checkbox" || t === "radio")
  );
}
function P2(e) {
  var t = Mb(e) ? "checked" : "value",
    n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t),
    r = "" + e[t];
  if (
    !e.hasOwnProperty(t) &&
    typeof n < "u" &&
    typeof n.get == "function" &&
    typeof n.set == "function"
  ) {
    var o = n.get,
      i = n.set;
    return (
      Object.defineProperty(e, t, {
        configurable: !0,
        get: function () {
          return o.call(this);
        },
        set: function (a) {
          (r = "" + a), i.call(this, a);
        },
      }),
      Object.defineProperty(e, t, { enumerable: n.enumerable }),
      {
        getValue: function () {
          return r;
        },
        setValue: function (a) {
          r = "" + a;
        },
        stopTracking: function () {
          (e._valueTracker = null), delete e[t];
        },
      }
    );
  }
}
function Fs(e) {
  e._valueTracker || (e._valueTracker = P2(e));
}
function $b(e) {
  if (!e) return !1;
  var t = e._valueTracker;
  if (!t) return !0;
  var n = t.getValue(),
    r = "";
  return (
    e && (r = Mb(e) ? (e.checked ? "true" : "false") : e.value),
    (e = r),
    e !== n ? (t.setValue(e), !0) : !1
  );
}
function Lu(e) {
  if (((e = e || (typeof document < "u" ? document : void 0)), typeof e > "u"))
    return null;
  try {
    return e.activeElement || e.body;
  } catch {
    return e.body;
  }
}
function _p(e, t) {
  var n = t.checked;
  return at({}, t, {
    defaultChecked: void 0,
    defaultValue: void 0,
    value: void 0,
    checked: n ?? e._wrapperState.initialChecked,
  });
}
function jg(e, t) {
  var n = t.defaultValue == null ? "" : t.defaultValue,
    r = t.checked != null ? t.checked : t.defaultChecked;
  (n = xo(t.value != null ? t.value : n)),
    (e._wrapperState = {
      initialChecked: r,
      initialValue: n,
      controlled:
        t.type === "checkbox" || t.type === "radio"
          ? t.checked != null
          : t.value != null,
    });
}
function Lb(e, t) {
  (t = t.checked), t != null && nh(e, "checked", t, !1);
}
function Pp(e, t) {
  Lb(e, t);
  var n = xo(t.value),
    r = t.type;
  if (n != null)
    r === "number"
      ? ((n === 0 && e.value === "") || e.value != n) && (e.value = "" + n)
      : e.value !== "" + n && (e.value = "" + n);
  else if (r === "submit" || r === "reset") {
    e.removeAttribute("value");
    return;
  }
  t.hasOwnProperty("value")
    ? kp(e, t.type, n)
    : t.hasOwnProperty("defaultValue") && kp(e, t.type, xo(t.defaultValue)),
    t.checked == null &&
      t.defaultChecked != null &&
      (e.defaultChecked = !!t.defaultChecked);
}
function zg(e, t, n) {
  if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
    var r = t.type;
    if (
      !(
        (r !== "submit" && r !== "reset") ||
        (t.value !== void 0 && t.value !== null)
      )
    )
      return;
    (t = "" + e._wrapperState.initialValue),
      n || t === e.value || (e.value = t),
      (e.defaultValue = t);
  }
  (n = e.name),
    n !== "" && (e.name = ""),
    (e.defaultChecked = !!e._wrapperState.initialChecked),
    n !== "" && (e.name = n);
}
function kp(e, t, n) {
  (t !== "number" || Lu(e.ownerDocument) !== e) &&
    (n == null
      ? (e.defaultValue = "" + e._wrapperState.initialValue)
      : e.defaultValue !== "" + n && (e.defaultValue = "" + n));
}
var Ja = Array.isArray;
function Bi(e, t, n, r) {
  if (((e = e.options), t)) {
    t = {};
    for (var o = 0; o < n.length; o++) t["$" + n[o]] = !0;
    for (n = 0; n < e.length; n++)
      (o = t.hasOwnProperty("$" + e[n].value)),
        e[n].selected !== o && (e[n].selected = o),
        o && r && (e[n].defaultSelected = !0);
  } else {
    for (n = "" + xo(n), t = null, o = 0; o < e.length; o++) {
      if (e[o].value === n) {
        (e[o].selected = !0), r && (e[o].defaultSelected = !0);
        return;
      }
      t !== null || e[o].disabled || (t = e[o]);
    }
    t !== null && (t.selected = !0);
  }
}
function Dp(e, t) {
  if (t.dangerouslySetInnerHTML != null) throw Error(Z(91));
  return at({}, t, {
    value: void 0,
    defaultValue: void 0,
    children: "" + e._wrapperState.initialValue,
  });
}
function Ug(e, t) {
  var n = t.value;
  if (n == null) {
    if (((n = t.children), (t = t.defaultValue), n != null)) {
      if (t != null) throw Error(Z(92));
      if (Ja(n)) {
        if (1 < n.length) throw Error(Z(93));
        n = n[0];
      }
      t = n;
    }
    t == null && (t = ""), (n = t);
  }
  e._wrapperState = { initialValue: xo(n) };
}
function Bb(e, t) {
  var n = xo(t.value),
    r = xo(t.defaultValue);
  n != null &&
    ((n = "" + n),
    n !== e.value && (e.value = n),
    t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)),
    r != null && (e.defaultValue = "" + r);
}
function Vg(e) {
  var t = e.textContent;
  t === e._wrapperState.initialValue && t !== "" && t !== null && (e.value = t);
}
function Fb(e) {
  switch (e) {
    case "svg":
      return "http://www.w3.org/2000/svg";
    case "math":
      return "http://www.w3.org/1998/Math/MathML";
    default:
      return "http://www.w3.org/1999/xhtml";
  }
}
function Ip(e, t) {
  return e == null || e === "http://www.w3.org/1999/xhtml"
    ? Fb(t)
    : e === "http://www.w3.org/2000/svg" && t === "foreignObject"
    ? "http://www.w3.org/1999/xhtml"
    : e;
}
var js,
  jb = (function (e) {
    return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction
      ? function (t, n, r, o) {
          MSApp.execUnsafeLocalFunction(function () {
            return e(t, n, r, o);
          });
        }
      : e;
  })(function (e, t) {
    if (e.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in e)
      e.innerHTML = t;
    else {
      for (
        js = js || document.createElement("div"),
          js.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>",
          t = js.firstChild;
        e.firstChild;

      )
        e.removeChild(e.firstChild);
      for (; t.firstChild; ) e.appendChild(t.firstChild);
    }
  });
function _l(e, t) {
  if (t) {
    var n = e.firstChild;
    if (n && n === e.lastChild && n.nodeType === 3) {
      n.nodeValue = t;
      return;
    }
  }
  e.textContent = t;
}
var ll = {
    animationIterationCount: !0,
    aspectRatio: !0,
    borderImageOutset: !0,
    borderImageSlice: !0,
    borderImageWidth: !0,
    boxFlex: !0,
    boxFlexGroup: !0,
    boxOrdinalGroup: !0,
    columnCount: !0,
    columns: !0,
    flex: !0,
    flexGrow: !0,
    flexPositive: !0,
    flexShrink: !0,
    flexNegative: !0,
    flexOrder: !0,
    gridArea: !0,
    gridRow: !0,
    gridRowEnd: !0,
    gridRowSpan: !0,
    gridRowStart: !0,
    gridColumn: !0,
    gridColumnEnd: !0,
    gridColumnSpan: !0,
    gridColumnStart: !0,
    fontWeight: !0,
    lineClamp: !0,
    lineHeight: !0,
    opacity: !0,
    order: !0,
    orphans: !0,
    tabSize: !0,
    widows: !0,
    zIndex: !0,
    zoom: !0,
    fillOpacity: !0,
    floodOpacity: !0,
    stopOpacity: !0,
    strokeDasharray: !0,
    strokeDashoffset: !0,
    strokeMiterlimit: !0,
    strokeOpacity: !0,
    strokeWidth: !0,
  },
  k2 = ["Webkit", "ms", "Moz", "O"];
Object.keys(ll).forEach(function (e) {
  k2.forEach(function (t) {
    (t = t + e.charAt(0).toUpperCase() + e.substring(1)), (ll[t] = ll[e]);
  });
});
function zb(e, t, n) {
  return t == null || typeof t == "boolean" || t === ""
    ? ""
    : n || typeof t != "number" || t === 0 || (ll.hasOwnProperty(e) && ll[e])
    ? ("" + t).trim()
    : t + "px";
}
function Ub(e, t) {
  e = e.style;
  for (var n in t)
    if (t.hasOwnProperty(n)) {
      var r = n.indexOf("--") === 0,
        o = zb(n, t[n], r);
      n === "float" && (n = "cssFloat"), r ? e.setProperty(n, o) : (e[n] = o);
    }
}
var D2 = at(
  { menuitem: !0 },
  {
    area: !0,
    base: !0,
    br: !0,
    col: !0,
    embed: !0,
    hr: !0,
    img: !0,
    input: !0,
    keygen: !0,
    link: !0,
    meta: !0,
    param: !0,
    source: !0,
    track: !0,
    wbr: !0,
  }
);
function Ap(e, t) {
  if (t) {
    if (D2[e] && (t.children != null || t.dangerouslySetInnerHTML != null))
      throw Error(Z(137, e));
    if (t.dangerouslySetInnerHTML != null) {
      if (t.children != null) throw Error(Z(60));
      if (
        typeof t.dangerouslySetInnerHTML != "object" ||
        !("__html" in t.dangerouslySetInnerHTML)
      )
        throw Error(Z(61));
    }
    if (t.style != null && typeof t.style != "object") throw Error(Z(62));
  }
}
function Np(e, t) {
  if (e.indexOf("-") === -1) return typeof t.is == "string";
  switch (e) {
    case "annotation-xml":
    case "color-profile":
    case "font-face":
    case "font-face-src":
    case "font-face-uri":
    case "font-face-format":
    case "font-face-name":
    case "missing-glyph":
      return !1;
    default:
      return !0;
  }
}
var Op = null;
function ah(e) {
  return (
    (e = e.target || e.srcElement || window),
    e.correspondingUseElement && (e = e.correspondingUseElement),
    e.nodeType === 3 ? e.parentNode : e
  );
}
var Mp = null,
  Fi = null,
  ji = null;
function Wg(e) {
  if ((e = ls(e))) {
    if (typeof Mp != "function") throw Error(Z(280));
    var t = e.stateNode;
    t && ((t = Nc(t)), Mp(e.stateNode, e.type, t));
  }
}
function Vb(e) {
  Fi ? (ji ? ji.push(e) : (ji = [e])) : (Fi = e);
}
function Wb() {
  if (Fi) {
    var e = Fi,
      t = ji;
    if (((ji = Fi = null), Wg(e), t)) for (e = 0; e < t.length; e++) Wg(t[e]);
  }
}
function Hb(e, t) {
  return e(t);
}
function Gb() {}
var mf = !1;
function Kb(e, t, n) {
  if (mf) return e(t, n);
  mf = !0;
  try {
    return Hb(e, t, n);
  } finally {
    (mf = !1), (Fi !== null || ji !== null) && (Gb(), Wb());
  }
}
function Pl(e, t) {
  var n = e.stateNode;
  if (n === null) return null;
  var r = Nc(n);
  if (r === null) return null;
  n = r[t];
  e: switch (t) {
    case "onClick":
    case "onClickCapture":
    case "onDoubleClick":
    case "onDoubleClickCapture":
    case "onMouseDown":
    case "onMouseDownCapture":
    case "onMouseMove":
    case "onMouseMoveCapture":
    case "onMouseUp":
    case "onMouseUpCapture":
    case "onMouseEnter":
      (r = !r.disabled) ||
        ((e = e.type),
        (r = !(
          e === "button" ||
          e === "input" ||
          e === "select" ||
          e === "textarea"
        ))),
        (e = !r);
      break e;
    default:
      e = !1;
  }
  if (e) return null;
  if (n && typeof n != "function") throw Error(Z(231, t, typeof n));
  return n;
}
var $p = !1;
if (Lr)
  try {
    var Pa = {};
    Object.defineProperty(Pa, "passive", {
      get: function () {
        $p = !0;
      },
    }),
      window.addEventListener("test", Pa, Pa),
      window.removeEventListener("test", Pa, Pa);
  } catch {
    $p = !1;
  }
function I2(e, t, n, r, o, i, a, l, s) {
  var u = Array.prototype.slice.call(arguments, 3);
  try {
    t.apply(n, u);
  } catch (c) {
    this.onError(c);
  }
}
var sl = !1,
  Bu = null,
  Fu = !1,
  Lp = null,
  A2 = {
    onError: function (e) {
      (sl = !0), (Bu = e);
    },
  };
function N2(e, t, n, r, o, i, a, l, s) {
  (sl = !1), (Bu = null), I2.apply(A2, arguments);
}
function O2(e, t, n, r, o, i, a, l, s) {
  if ((N2.apply(this, arguments), sl)) {
    if (sl) {
      var u = Bu;
      (sl = !1), (Bu = null);
    } else throw Error(Z(198));
    Fu || ((Fu = !0), (Lp = u));
  }
}
function ai(e) {
  var t = e,
    n = e;
  if (e.alternate) for (; t.return; ) t = t.return;
  else {
    e = t;
    do (t = e), t.flags & 4098 && (n = t.return), (e = t.return);
    while (e);
  }
  return t.tag === 3 ? n : null;
}
function qb(e) {
  if (e.tag === 13) {
    var t = e.memoizedState;
    if (
      (t === null && ((e = e.alternate), e !== null && (t = e.memoizedState)),
      t !== null)
    )
      return t.dehydrated;
  }
  return null;
}
function Hg(e) {
  if (ai(e) !== e) throw Error(Z(188));
}
function M2(e) {
  var t = e.alternate;
  if (!t) {
    if (((t = ai(e)), t === null)) throw Error(Z(188));
    return t !== e ? null : e;
  }
  for (var n = e, r = t; ; ) {
    var o = n.return;
    if (o === null) break;
    var i = o.alternate;
    if (i === null) {
      if (((r = o.return), r !== null)) {
        n = r;
        continue;
      }
      break;
    }
    if (o.child === i.child) {
      for (i = o.child; i; ) {
        if (i === n) return Hg(o), e;
        if (i === r) return Hg(o), t;
        i = i.sibling;
      }
      throw Error(Z(188));
    }
    if (n.return !== r.return) (n = o), (r = i);
    else {
      for (var a = !1, l = o.child; l; ) {
        if (l === n) {
          (a = !0), (n = o), (r = i);
          break;
        }
        if (l === r) {
          (a = !0), (r = o), (n = i);
          break;
        }
        l = l.sibling;
      }
      if (!a) {
        for (l = i.child; l; ) {
          if (l === n) {
            (a = !0), (n = i), (r = o);
            break;
          }
          if (l === r) {
            (a = !0), (r = i), (n = o);
            break;
          }
          l = l.sibling;
        }
        if (!a) throw Error(Z(189));
      }
    }
    if (n.alternate !== r) throw Error(Z(190));
  }
  if (n.tag !== 3) throw Error(Z(188));
  return n.stateNode.current === n ? e : t;
}
function Yb(e) {
  return (e = M2(e)), e !== null ? Xb(e) : null;
}
function Xb(e) {
  if (e.tag === 5 || e.tag === 6) return e;
  for (e = e.child; e !== null; ) {
    var t = Xb(e);
    if (t !== null) return t;
    e = e.sibling;
  }
  return null;
}
var Qb = kn.unstable_scheduleCallback,
  Gg = kn.unstable_cancelCallback,
  $2 = kn.unstable_shouldYield,
  L2 = kn.unstable_requestPaint,
  vt = kn.unstable_now,
  B2 = kn.unstable_getCurrentPriorityLevel,
  lh = kn.unstable_ImmediatePriority,
  Zb = kn.unstable_UserBlockingPriority,
  ju = kn.unstable_NormalPriority,
  F2 = kn.unstable_LowPriority,
  Jb = kn.unstable_IdlePriority,
  kc = null,
  Sr = null;
function j2(e) {
  if (Sr && typeof Sr.onCommitFiberRoot == "function")
    try {
      Sr.onCommitFiberRoot(kc, e, void 0, (e.current.flags & 128) === 128);
    } catch {}
}
var sr = Math.clz32 ? Math.clz32 : V2,
  z2 = Math.log,
  U2 = Math.LN2;
function V2(e) {
  return (e >>>= 0), e === 0 ? 32 : (31 - ((z2(e) / U2) | 0)) | 0;
}
var zs = 64,
  Us = 4194304;
function el(e) {
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
function zu(e, t) {
  var n = e.pendingLanes;
  if (n === 0) return 0;
  var r = 0,
    o = e.suspendedLanes,
    i = e.pingedLanes,
    a = n & 268435455;
  if (a !== 0) {
    var l = a & ~o;
    l !== 0 ? (r = el(l)) : ((i &= a), i !== 0 && (r = el(i)));
  } else (a = n & ~o), a !== 0 ? (r = el(a)) : i !== 0 && (r = el(i));
  if (r === 0) return 0;
  if (
    t !== 0 &&
    t !== r &&
    !(t & o) &&
    ((o = r & -r), (i = t & -t), o >= i || (o === 16 && (i & 4194240) !== 0))
  )
    return t;
  if ((r & 4 && (r |= n & 16), (t = e.entangledLanes), t !== 0))
    for (e = e.entanglements, t &= r; 0 < t; )
      (n = 31 - sr(t)), (o = 1 << n), (r |= e[n]), (t &= ~o);
  return r;
}
function W2(e, t) {
  switch (e) {
    case 1:
    case 2:
    case 4:
      return t + 250;
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
      return t + 5e3;
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
function H2(e, t) {
  for (
    var n = e.suspendedLanes,
      r = e.pingedLanes,
      o = e.expirationTimes,
      i = e.pendingLanes;
    0 < i;

  ) {
    var a = 31 - sr(i),
      l = 1 << a,
      s = o[a];
    s === -1
      ? (!(l & n) || l & r) && (o[a] = W2(l, t))
      : s <= t && (e.expiredLanes |= l),
      (i &= ~l);
  }
}
function Bp(e) {
  return (
    (e = e.pendingLanes & -1073741825),
    e !== 0 ? e : e & 1073741824 ? 1073741824 : 0
  );
}
function ex() {
  var e = zs;
  return (zs <<= 1), !(zs & 4194240) && (zs = 64), e;
}
function gf(e) {
  for (var t = [], n = 0; 31 > n; n++) t.push(e);
  return t;
}
function is(e, t, n) {
  (e.pendingLanes |= t),
    t !== 536870912 && ((e.suspendedLanes = 0), (e.pingedLanes = 0)),
    (e = e.eventTimes),
    (t = 31 - sr(t)),
    (e[t] = n);
}
function G2(e, t) {
  var n = e.pendingLanes & ~t;
  (e.pendingLanes = t),
    (e.suspendedLanes = 0),
    (e.pingedLanes = 0),
    (e.expiredLanes &= t),
    (e.mutableReadLanes &= t),
    (e.entangledLanes &= t),
    (t = e.entanglements);
  var r = e.eventTimes;
  for (e = e.expirationTimes; 0 < n; ) {
    var o = 31 - sr(n),
      i = 1 << o;
    (t[o] = 0), (r[o] = -1), (e[o] = -1), (n &= ~i);
  }
}
function sh(e, t) {
  var n = (e.entangledLanes |= t);
  for (e = e.entanglements; n; ) {
    var r = 31 - sr(n),
      o = 1 << r;
    (o & t) | (e[r] & t) && (e[r] |= t), (n &= ~o);
  }
}
var je = 0;
function tx(e) {
  return (e &= -e), 1 < e ? (4 < e ? (e & 268435455 ? 16 : 536870912) : 4) : 1;
}
var nx,
  uh,
  rx,
  ox,
  ix,
  Fp = !1,
  Vs = [],
  ao = null,
  lo = null,
  so = null,
  kl = new Map(),
  Dl = new Map(),
  eo = [],
  K2 =
    "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(
      " "
    );
function Kg(e, t) {
  switch (e) {
    case "focusin":
    case "focusout":
      ao = null;
      break;
    case "dragenter":
    case "dragleave":
      lo = null;
      break;
    case "mouseover":
    case "mouseout":
      so = null;
      break;
    case "pointerover":
    case "pointerout":
      kl.delete(t.pointerId);
      break;
    case "gotpointercapture":
    case "lostpointercapture":
      Dl.delete(t.pointerId);
  }
}
function ka(e, t, n, r, o, i) {
  return e === null || e.nativeEvent !== i
    ? ((e = {
        blockedOn: t,
        domEventName: n,
        eventSystemFlags: r,
        nativeEvent: i,
        targetContainers: [o],
      }),
      t !== null && ((t = ls(t)), t !== null && uh(t)),
      e)
    : ((e.eventSystemFlags |= r),
      (t = e.targetContainers),
      o !== null && t.indexOf(o) === -1 && t.push(o),
      e);
}
function q2(e, t, n, r, o) {
  switch (t) {
    case "focusin":
      return (ao = ka(ao, e, t, n, r, o)), !0;
    case "dragenter":
      return (lo = ka(lo, e, t, n, r, o)), !0;
    case "mouseover":
      return (so = ka(so, e, t, n, r, o)), !0;
    case "pointerover":
      var i = o.pointerId;
      return kl.set(i, ka(kl.get(i) || null, e, t, n, r, o)), !0;
    case "gotpointercapture":
      return (
        (i = o.pointerId), Dl.set(i, ka(Dl.get(i) || null, e, t, n, r, o)), !0
      );
  }
  return !1;
}
function ax(e) {
  var t = zo(e.target);
  if (t !== null) {
    var n = ai(t);
    if (n !== null) {
      if (((t = n.tag), t === 13)) {
        if (((t = qb(n)), t !== null)) {
          (e.blockedOn = t),
            ix(e.priority, function () {
              rx(n);
            });
          return;
        }
      } else if (t === 3 && n.stateNode.current.memoizedState.isDehydrated) {
        e.blockedOn = n.tag === 3 ? n.stateNode.containerInfo : null;
        return;
      }
    }
  }
  e.blockedOn = null;
}
function xu(e) {
  if (e.blockedOn !== null) return !1;
  for (var t = e.targetContainers; 0 < t.length; ) {
    var n = jp(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
    if (n === null) {
      n = e.nativeEvent;
      var r = new n.constructor(n.type, n);
      (Op = r), n.target.dispatchEvent(r), (Op = null);
    } else return (t = ls(n)), t !== null && uh(t), (e.blockedOn = n), !1;
    t.shift();
  }
  return !0;
}
function qg(e, t, n) {
  xu(e) && n.delete(t);
}
function Y2() {
  (Fp = !1),
    ao !== null && xu(ao) && (ao = null),
    lo !== null && xu(lo) && (lo = null),
    so !== null && xu(so) && (so = null),
    kl.forEach(qg),
    Dl.forEach(qg);
}
function Da(e, t) {
  e.blockedOn === t &&
    ((e.blockedOn = null),
    Fp ||
      ((Fp = !0),
      kn.unstable_scheduleCallback(kn.unstable_NormalPriority, Y2)));
}
function Il(e) {
  function t(o) {
    return Da(o, e);
  }
  if (0 < Vs.length) {
    Da(Vs[0], e);
    for (var n = 1; n < Vs.length; n++) {
      var r = Vs[n];
      r.blockedOn === e && (r.blockedOn = null);
    }
  }
  for (
    ao !== null && Da(ao, e),
      lo !== null && Da(lo, e),
      so !== null && Da(so, e),
      kl.forEach(t),
      Dl.forEach(t),
      n = 0;
    n < eo.length;
    n++
  )
    (r = eo[n]), r.blockedOn === e && (r.blockedOn = null);
  for (; 0 < eo.length && ((n = eo[0]), n.blockedOn === null); )
    ax(n), n.blockedOn === null && eo.shift();
}
var zi = Vr.ReactCurrentBatchConfig,
  Uu = !0;
function X2(e, t, n, r) {
  var o = je,
    i = zi.transition;
  zi.transition = null;
  try {
    (je = 1), ch(e, t, n, r);
  } finally {
    (je = o), (zi.transition = i);
  }
}
function Q2(e, t, n, r) {
  var o = je,
    i = zi.transition;
  zi.transition = null;
  try {
    (je = 4), ch(e, t, n, r);
  } finally {
    (je = o), (zi.transition = i);
  }
}
function ch(e, t, n, r) {
  if (Uu) {
    var o = jp(e, t, n, r);
    if (o === null) _f(e, t, r, Vu, n), Kg(e, r);
    else if (q2(o, e, t, n, r)) r.stopPropagation();
    else if ((Kg(e, r), t & 4 && -1 < K2.indexOf(e))) {
      for (; o !== null; ) {
        var i = ls(o);
        if (
          (i !== null && nx(i),
          (i = jp(e, t, n, r)),
          i === null && _f(e, t, r, Vu, n),
          i === o)
        )
          break;
        o = i;
      }
      o !== null && r.stopPropagation();
    } else _f(e, t, r, null, n);
  }
}
var Vu = null;
function jp(e, t, n, r) {
  if (((Vu = null), (e = ah(r)), (e = zo(e)), e !== null))
    if (((t = ai(e)), t === null)) e = null;
    else if (((n = t.tag), n === 13)) {
      if (((e = qb(t)), e !== null)) return e;
      e = null;
    } else if (n === 3) {
      if (t.stateNode.current.memoizedState.isDehydrated)
        return t.tag === 3 ? t.stateNode.containerInfo : null;
      e = null;
    } else t !== e && (e = null);
  return (Vu = e), null;
}
function lx(e) {
  switch (e) {
    case "cancel":
    case "click":
    case "close":
    case "contextmenu":
    case "copy":
    case "cut":
    case "auxclick":
    case "dblclick":
    case "dragend":
    case "dragstart":
    case "drop":
    case "focusin":
    case "focusout":
    case "input":
    case "invalid":
    case "keydown":
    case "keypress":
    case "keyup":
    case "mousedown":
    case "mouseup":
    case "paste":
    case "pause":
    case "play":
    case "pointercancel":
    case "pointerdown":
    case "pointerup":
    case "ratechange":
    case "reset":
    case "resize":
    case "seeked":
    case "submit":
    case "touchcancel":
    case "touchend":
    case "touchstart":
    case "volumechange":
    case "change":
    case "selectionchange":
    case "textInput":
    case "compositionstart":
    case "compositionend":
    case "compositionupdate":
    case "beforeblur":
    case "afterblur":
    case "beforeinput":
    case "blur":
    case "fullscreenchange":
    case "focus":
    case "hashchange":
    case "popstate":
    case "select":
    case "selectstart":
      return 1;
    case "drag":
    case "dragenter":
    case "dragexit":
    case "dragleave":
    case "dragover":
    case "mousemove":
    case "mouseout":
    case "mouseover":
    case "pointermove":
    case "pointerout":
    case "pointerover":
    case "scroll":
    case "toggle":
    case "touchmove":
    case "wheel":
    case "mouseenter":
    case "mouseleave":
    case "pointerenter":
    case "pointerleave":
      return 4;
    case "message":
      switch (B2()) {
        case lh:
          return 1;
        case Zb:
          return 4;
        case ju:
        case F2:
          return 16;
        case Jb:
          return 536870912;
        default:
          return 16;
      }
    default:
      return 16;
  }
}
var no = null,
  dh = null,
  Su = null;
function sx() {
  if (Su) return Su;
  var e,
    t = dh,
    n = t.length,
    r,
    o = "value" in no ? no.value : no.textContent,
    i = o.length;
  for (e = 0; e < n && t[e] === o[e]; e++);
  var a = n - e;
  for (r = 1; r <= a && t[n - r] === o[i - r]; r++);
  return (Su = o.slice(e, 1 < r ? 1 - r : void 0));
}
function wu(e) {
  var t = e.keyCode;
  return (
    "charCode" in e
      ? ((e = e.charCode), e === 0 && t === 13 && (e = 13))
      : (e = t),
    e === 10 && (e = 13),
    32 <= e || e === 13 ? e : 0
  );
}
function Ws() {
  return !0;
}
function Yg() {
  return !1;
}
function An(e) {
  function t(n, r, o, i, a) {
    (this._reactName = n),
      (this._targetInst = o),
      (this.type = r),
      (this.nativeEvent = i),
      (this.target = a),
      (this.currentTarget = null);
    for (var l in e)
      e.hasOwnProperty(l) && ((n = e[l]), (this[l] = n ? n(i) : i[l]));
    return (
      (this.isDefaultPrevented = (
        i.defaultPrevented != null ? i.defaultPrevented : i.returnValue === !1
      )
        ? Ws
        : Yg),
      (this.isPropagationStopped = Yg),
      this
    );
  }
  return (
    at(t.prototype, {
      preventDefault: function () {
        this.defaultPrevented = !0;
        var n = this.nativeEvent;
        n &&
          (n.preventDefault
            ? n.preventDefault()
            : typeof n.returnValue != "unknown" && (n.returnValue = !1),
          (this.isDefaultPrevented = Ws));
      },
      stopPropagation: function () {
        var n = this.nativeEvent;
        n &&
          (n.stopPropagation
            ? n.stopPropagation()
            : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0),
          (this.isPropagationStopped = Ws));
      },
      persist: function () {},
      isPersistent: Ws,
    }),
    t
  );
}
var ya = {
    eventPhase: 0,
    bubbles: 0,
    cancelable: 0,
    timeStamp: function (e) {
      return e.timeStamp || Date.now();
    },
    defaultPrevented: 0,
    isTrusted: 0,
  },
  fh = An(ya),
  as = at({}, ya, { view: 0, detail: 0 }),
  Z2 = An(as),
  yf,
  bf,
  Ia,
  Dc = at({}, as, {
    screenX: 0,
    screenY: 0,
    clientX: 0,
    clientY: 0,
    pageX: 0,
    pageY: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    getModifierState: ph,
    button: 0,
    buttons: 0,
    relatedTarget: function (e) {
      return e.relatedTarget === void 0
        ? e.fromElement === e.srcElement
          ? e.toElement
          : e.fromElement
        : e.relatedTarget;
    },
    movementX: function (e) {
      return "movementX" in e
        ? e.movementX
        : (e !== Ia &&
            (Ia && e.type === "mousemove"
              ? ((yf = e.screenX - Ia.screenX), (bf = e.screenY - Ia.screenY))
              : (bf = yf = 0),
            (Ia = e)),
          yf);
    },
    movementY: function (e) {
      return "movementY" in e ? e.movementY : bf;
    },
  }),
  Xg = An(Dc),
  J2 = at({}, Dc, { dataTransfer: 0 }),
  eT = An(J2),
  tT = at({}, as, { relatedTarget: 0 }),
  xf = An(tT),
  nT = at({}, ya, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
  rT = An(nT),
  oT = at({}, ya, {
    clipboardData: function (e) {
      return "clipboardData" in e ? e.clipboardData : window.clipboardData;
    },
  }),
  iT = An(oT),
  aT = at({}, ya, { data: 0 }),
  Qg = An(aT),
  lT = {
    Esc: "Escape",
    Spacebar: " ",
    Left: "ArrowLeft",
    Up: "ArrowUp",
    Right: "ArrowRight",
    Down: "ArrowDown",
    Del: "Delete",
    Win: "OS",
    Menu: "ContextMenu",
    Apps: "ContextMenu",
    Scroll: "ScrollLock",
    MozPrintableKey: "Unidentified",
  },
  sT = {
    8: "Backspace",
    9: "Tab",
    12: "Clear",
    13: "Enter",
    16: "Shift",
    17: "Control",
    18: "Alt",
    19: "Pause",
    20: "CapsLock",
    27: "Escape",
    32: " ",
    33: "PageUp",
    34: "PageDown",
    35: "End",
    36: "Home",
    37: "ArrowLeft",
    38: "ArrowUp",
    39: "ArrowRight",
    40: "ArrowDown",
    45: "Insert",
    46: "Delete",
    112: "F1",
    113: "F2",
    114: "F3",
    115: "F4",
    116: "F5",
    117: "F6",
    118: "F7",
    119: "F8",
    120: "F9",
    121: "F10",
    122: "F11",
    123: "F12",
    144: "NumLock",
    145: "ScrollLock",
    224: "Meta",
  },
  uT = {
    Alt: "altKey",
    Control: "ctrlKey",
    Meta: "metaKey",
    Shift: "shiftKey",
  };
function cT(e) {
  var t = this.nativeEvent;
  return t.getModifierState ? t.getModifierState(e) : (e = uT[e]) ? !!t[e] : !1;
}
function ph() {
  return cT;
}
var dT = at({}, as, {
    key: function (e) {
      if (e.key) {
        var t = lT[e.key] || e.key;
        if (t !== "Unidentified") return t;
      }
      return e.type === "keypress"
        ? ((e = wu(e)), e === 13 ? "Enter" : String.fromCharCode(e))
        : e.type === "keydown" || e.type === "keyup"
        ? sT[e.keyCode] || "Unidentified"
        : "";
    },
    code: 0,
    location: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    repeat: 0,
    locale: 0,
    getModifierState: ph,
    charCode: function (e) {
      return e.type === "keypress" ? wu(e) : 0;
    },
    keyCode: function (e) {
      return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
    },
    which: function (e) {
      return e.type === "keypress"
        ? wu(e)
        : e.type === "keydown" || e.type === "keyup"
        ? e.keyCode
        : 0;
    },
  }),
  fT = An(dT),
  pT = at({}, Dc, {
    pointerId: 0,
    width: 0,
    height: 0,
    pressure: 0,
    tangentialPressure: 0,
    tiltX: 0,
    tiltY: 0,
    twist: 0,
    pointerType: 0,
    isPrimary: 0,
  }),
  Zg = An(pT),
  vT = at({}, as, {
    touches: 0,
    targetTouches: 0,
    changedTouches: 0,
    altKey: 0,
    metaKey: 0,
    ctrlKey: 0,
    shiftKey: 0,
    getModifierState: ph,
  }),
  hT = An(vT),
  mT = at({}, ya, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
  gT = An(mT),
  yT = at({}, Dc, {
    deltaX: function (e) {
      return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0;
    },
    deltaY: function (e) {
      return "deltaY" in e
        ? e.deltaY
        : "wheelDeltaY" in e
        ? -e.wheelDeltaY
        : "wheelDelta" in e
        ? -e.wheelDelta
        : 0;
    },
    deltaZ: 0,
    deltaMode: 0,
  }),
  bT = An(yT),
  xT = [9, 13, 27, 32],
  vh = Lr && "CompositionEvent" in window,
  ul = null;
Lr && "documentMode" in document && (ul = document.documentMode);
var ST = Lr && "TextEvent" in window && !ul,
  ux = Lr && (!vh || (ul && 8 < ul && 11 >= ul)),
  Jg = String.fromCharCode(32),
  ey = !1;
function cx(e, t) {
  switch (e) {
    case "keyup":
      return xT.indexOf(t.keyCode) !== -1;
    case "keydown":
      return t.keyCode !== 229;
    case "keypress":
    case "mousedown":
    case "focusout":
      return !0;
    default:
      return !1;
  }
}
function dx(e) {
  return (e = e.detail), typeof e == "object" && "data" in e ? e.data : null;
}
var Ei = !1;
function wT(e, t) {
  switch (e) {
    case "compositionend":
      return dx(t);
    case "keypress":
      return t.which !== 32 ? null : ((ey = !0), Jg);
    case "textInput":
      return (e = t.data), e === Jg && ey ? null : e;
    default:
      return null;
  }
}
function CT(e, t) {
  if (Ei)
    return e === "compositionend" || (!vh && cx(e, t))
      ? ((e = sx()), (Su = dh = no = null), (Ei = !1), e)
      : null;
  switch (e) {
    case "paste":
      return null;
    case "keypress":
      if (!(t.ctrlKey || t.altKey || t.metaKey) || (t.ctrlKey && t.altKey)) {
        if (t.char && 1 < t.char.length) return t.char;
        if (t.which) return String.fromCharCode(t.which);
      }
      return null;
    case "compositionend":
      return ux && t.locale !== "ko" ? null : t.data;
    default:
      return null;
  }
}
var RT = {
  color: !0,
  date: !0,
  datetime: !0,
  "datetime-local": !0,
  email: !0,
  month: !0,
  number: !0,
  password: !0,
  range: !0,
  search: !0,
  tel: !0,
  text: !0,
  time: !0,
  url: !0,
  week: !0,
};
function ty(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return t === "input" ? !!RT[e.type] : t === "textarea";
}
function fx(e, t, n, r) {
  Vb(r),
    (t = Wu(t, "onChange")),
    0 < t.length &&
      ((n = new fh("onChange", "change", null, n, r)),
      e.push({ event: n, listeners: t }));
}
var cl = null,
  Al = null;
function ET(e) {
  Cx(e, 0);
}
function Ic(e) {
  var t = Pi(e);
  if ($b(t)) return e;
}
function TT(e, t) {
  if (e === "change") return t;
}
var px = !1;
if (Lr) {
  var Sf;
  if (Lr) {
    var wf = "oninput" in document;
    if (!wf) {
      var ny = document.createElement("div");
      ny.setAttribute("oninput", "return;"),
        (wf = typeof ny.oninput == "function");
    }
    Sf = wf;
  } else Sf = !1;
  px = Sf && (!document.documentMode || 9 < document.documentMode);
}
function ry() {
  cl && (cl.detachEvent("onpropertychange", vx), (Al = cl = null));
}
function vx(e) {
  if (e.propertyName === "value" && Ic(Al)) {
    var t = [];
    fx(t, Al, e, ah(e)), Kb(ET, t);
  }
}
function _T(e, t, n) {
  e === "focusin"
    ? (ry(), (cl = t), (Al = n), cl.attachEvent("onpropertychange", vx))
    : e === "focusout" && ry();
}
function PT(e) {
  if (e === "selectionchange" || e === "keyup" || e === "keydown")
    return Ic(Al);
}
function kT(e, t) {
  if (e === "click") return Ic(t);
}
function DT(e, t) {
  if (e === "input" || e === "change") return Ic(t);
}
function IT(e, t) {
  return (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t);
}
var cr = typeof Object.is == "function" ? Object.is : IT;
function Nl(e, t) {
  if (cr(e, t)) return !0;
  if (typeof e != "object" || e === null || typeof t != "object" || t === null)
    return !1;
  var n = Object.keys(e),
    r = Object.keys(t);
  if (n.length !== r.length) return !1;
  for (r = 0; r < n.length; r++) {
    var o = n[r];
    if (!wp.call(t, o) || !cr(e[o], t[o])) return !1;
  }
  return !0;
}
function oy(e) {
  for (; e && e.firstChild; ) e = e.firstChild;
  return e;
}
function iy(e, t) {
  var n = oy(e);
  e = 0;
  for (var r; n; ) {
    if (n.nodeType === 3) {
      if (((r = e + n.textContent.length), e <= t && r >= t))
        return { node: n, offset: t - e };
      e = r;
    }
    e: {
      for (; n; ) {
        if (n.nextSibling) {
          n = n.nextSibling;
          break e;
        }
        n = n.parentNode;
      }
      n = void 0;
    }
    n = oy(n);
  }
}
function hx(e, t) {
  return e && t
    ? e === t
      ? !0
      : e && e.nodeType === 3
      ? !1
      : t && t.nodeType === 3
      ? hx(e, t.parentNode)
      : "contains" in e
      ? e.contains(t)
      : e.compareDocumentPosition
      ? !!(e.compareDocumentPosition(t) & 16)
      : !1
    : !1;
}
function mx() {
  for (var e = window, t = Lu(); t instanceof e.HTMLIFrameElement; ) {
    try {
      var n = typeof t.contentWindow.location.href == "string";
    } catch {
      n = !1;
    }
    if (n) e = t.contentWindow;
    else break;
    t = Lu(e.document);
  }
  return t;
}
function hh(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return (
    t &&
    ((t === "input" &&
      (e.type === "text" ||
        e.type === "search" ||
        e.type === "tel" ||
        e.type === "url" ||
        e.type === "password")) ||
      t === "textarea" ||
      e.contentEditable === "true")
  );
}
function AT(e) {
  var t = mx(),
    n = e.focusedElem,
    r = e.selectionRange;
  if (
    t !== n &&
    n &&
    n.ownerDocument &&
    hx(n.ownerDocument.documentElement, n)
  ) {
    if (r !== null && hh(n)) {
      if (
        ((t = r.start),
        (e = r.end),
        e === void 0 && (e = t),
        "selectionStart" in n)
      )
        (n.selectionStart = t), (n.selectionEnd = Math.min(e, n.value.length));
      else if (
        ((e = ((t = n.ownerDocument || document) && t.defaultView) || window),
        e.getSelection)
      ) {
        e = e.getSelection();
        var o = n.textContent.length,
          i = Math.min(r.start, o);
        (r = r.end === void 0 ? i : Math.min(r.end, o)),
          !e.extend && i > r && ((o = r), (r = i), (i = o)),
          (o = iy(n, i));
        var a = iy(n, r);
        o &&
          a &&
          (e.rangeCount !== 1 ||
            e.anchorNode !== o.node ||
            e.anchorOffset !== o.offset ||
            e.focusNode !== a.node ||
            e.focusOffset !== a.offset) &&
          ((t = t.createRange()),
          t.setStart(o.node, o.offset),
          e.removeAllRanges(),
          i > r
            ? (e.addRange(t), e.extend(a.node, a.offset))
            : (t.setEnd(a.node, a.offset), e.addRange(t)));
      }
    }
    for (t = [], e = n; (e = e.parentNode); )
      e.nodeType === 1 &&
        t.push({ element: e, left: e.scrollLeft, top: e.scrollTop });
    for (typeof n.focus == "function" && n.focus(), n = 0; n < t.length; n++)
      (e = t[n]),
        (e.element.scrollLeft = e.left),
        (e.element.scrollTop = e.top);
  }
}
var NT = Lr && "documentMode" in document && 11 >= document.documentMode,
  Ti = null,
  zp = null,
  dl = null,
  Up = !1;
function ay(e, t, n) {
  var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
  Up ||
    Ti == null ||
    Ti !== Lu(r) ||
    ((r = Ti),
    "selectionStart" in r && hh(r)
      ? (r = { start: r.selectionStart, end: r.selectionEnd })
      : ((r = (
          (r.ownerDocument && r.ownerDocument.defaultView) ||
          window
        ).getSelection()),
        (r = {
          anchorNode: r.anchorNode,
          anchorOffset: r.anchorOffset,
          focusNode: r.focusNode,
          focusOffset: r.focusOffset,
        })),
    (dl && Nl(dl, r)) ||
      ((dl = r),
      (r = Wu(zp, "onSelect")),
      0 < r.length &&
        ((t = new fh("onSelect", "select", null, t, n)),
        e.push({ event: t, listeners: r }),
        (t.target = Ti))));
}
function Hs(e, t) {
  var n = {};
  return (
    (n[e.toLowerCase()] = t.toLowerCase()),
    (n["Webkit" + e] = "webkit" + t),
    (n["Moz" + e] = "moz" + t),
    n
  );
}
var _i = {
    animationend: Hs("Animation", "AnimationEnd"),
    animationiteration: Hs("Animation", "AnimationIteration"),
    animationstart: Hs("Animation", "AnimationStart"),
    transitionend: Hs("Transition", "TransitionEnd"),
  },
  Cf = {},
  gx = {};
Lr &&
  ((gx = document.createElement("div").style),
  "AnimationEvent" in window ||
    (delete _i.animationend.animation,
    delete _i.animationiteration.animation,
    delete _i.animationstart.animation),
  "TransitionEvent" in window || delete _i.transitionend.transition);
function Ac(e) {
  if (Cf[e]) return Cf[e];
  if (!_i[e]) return e;
  var t = _i[e],
    n;
  for (n in t) if (t.hasOwnProperty(n) && n in gx) return (Cf[e] = t[n]);
  return e;
}
var yx = Ac("animationend"),
  bx = Ac("animationiteration"),
  xx = Ac("animationstart"),
  Sx = Ac("transitionend"),
  wx = new Map(),
  ly =
    "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
      " "
    );
function Ro(e, t) {
  wx.set(e, t), ii(t, [e]);
}
for (var Rf = 0; Rf < ly.length; Rf++) {
  var Ef = ly[Rf],
    OT = Ef.toLowerCase(),
    MT = Ef[0].toUpperCase() + Ef.slice(1);
  Ro(OT, "on" + MT);
}
Ro(yx, "onAnimationEnd");
Ro(bx, "onAnimationIteration");
Ro(xx, "onAnimationStart");
Ro("dblclick", "onDoubleClick");
Ro("focusin", "onFocus");
Ro("focusout", "onBlur");
Ro(Sx, "onTransitionEnd");
qi("onMouseEnter", ["mouseout", "mouseover"]);
qi("onMouseLeave", ["mouseout", "mouseover"]);
qi("onPointerEnter", ["pointerout", "pointerover"]);
qi("onPointerLeave", ["pointerout", "pointerover"]);
ii(
  "onChange",
  "change click focusin focusout input keydown keyup selectionchange".split(" ")
);
ii(
  "onSelect",
  "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
    " "
  )
);
ii("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]);
ii(
  "onCompositionEnd",
  "compositionend focusout keydown keypress keyup mousedown".split(" ")
);
ii(
  "onCompositionStart",
  "compositionstart focusout keydown keypress keyup mousedown".split(" ")
);
ii(
  "onCompositionUpdate",
  "compositionupdate focusout keydown keypress keyup mousedown".split(" ")
);
var tl =
    "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
      " "
    ),
  $T = new Set("cancel close invalid load scroll toggle".split(" ").concat(tl));
function sy(e, t, n) {
  var r = e.type || "unknown-event";
  (e.currentTarget = n), O2(r, t, void 0, e), (e.currentTarget = null);
}
function Cx(e, t) {
  t = (t & 4) !== 0;
  for (var n = 0; n < e.length; n++) {
    var r = e[n],
      o = r.event;
    r = r.listeners;
    e: {
      var i = void 0;
      if (t)
        for (var a = r.length - 1; 0 <= a; a--) {
          var l = r[a],
            s = l.instance,
            u = l.currentTarget;
          if (((l = l.listener), s !== i && o.isPropagationStopped())) break e;
          sy(o, l, u), (i = s);
        }
      else
        for (a = 0; a < r.length; a++) {
          if (
            ((l = r[a]),
            (s = l.instance),
            (u = l.currentTarget),
            (l = l.listener),
            s !== i && o.isPropagationStopped())
          )
            break e;
          sy(o, l, u), (i = s);
        }
    }
  }
  if (Fu) throw ((e = Lp), (Fu = !1), (Lp = null), e);
}
function Ye(e, t) {
  var n = t[Kp];
  n === void 0 && (n = t[Kp] = new Set());
  var r = e + "__bubble";
  n.has(r) || (Rx(t, e, 2, !1), n.add(r));
}
function Tf(e, t, n) {
  var r = 0;
  t && (r |= 4), Rx(n, e, r, t);
}
var Gs = "_reactListening" + Math.random().toString(36).slice(2);
function Ol(e) {
  if (!e[Gs]) {
    (e[Gs] = !0),
      Ib.forEach(function (n) {
        n !== "selectionchange" && ($T.has(n) || Tf(n, !1, e), Tf(n, !0, e));
      });
    var t = e.nodeType === 9 ? e : e.ownerDocument;
    t === null || t[Gs] || ((t[Gs] = !0), Tf("selectionchange", !1, t));
  }
}
function Rx(e, t, n, r) {
  switch (lx(t)) {
    case 1:
      var o = X2;
      break;
    case 4:
      o = Q2;
      break;
    default:
      o = ch;
  }
  (n = o.bind(null, t, n, e)),
    (o = void 0),
    !$p ||
      (t !== "touchstart" && t !== "touchmove" && t !== "wheel") ||
      (o = !0),
    r
      ? o !== void 0
        ? e.addEventListener(t, n, { capture: !0, passive: o })
        : e.addEventListener(t, n, !0)
      : o !== void 0
      ? e.addEventListener(t, n, { passive: o })
      : e.addEventListener(t, n, !1);
}
function _f(e, t, n, r, o) {
  var i = r;
  if (!(t & 1) && !(t & 2) && r !== null)
    e: for (;;) {
      if (r === null) return;
      var a = r.tag;
      if (a === 3 || a === 4) {
        var l = r.stateNode.containerInfo;
        if (l === o || (l.nodeType === 8 && l.parentNode === o)) break;
        if (a === 4)
          for (a = r.return; a !== null; ) {
            var s = a.tag;
            if (
              (s === 3 || s === 4) &&
              ((s = a.stateNode.containerInfo),
              s === o || (s.nodeType === 8 && s.parentNode === o))
            )
              return;
            a = a.return;
          }
        for (; l !== null; ) {
          if (((a = zo(l)), a === null)) return;
          if (((s = a.tag), s === 5 || s === 6)) {
            r = i = a;
            continue e;
          }
          l = l.parentNode;
        }
      }
      r = r.return;
    }
  Kb(function () {
    var u = i,
      c = ah(n),
      d = [];
    e: {
      var f = wx.get(e);
      if (f !== void 0) {
        var p = fh,
          h = e;
        switch (e) {
          case "keypress":
            if (wu(n) === 0) break e;
          case "keydown":
          case "keyup":
            p = fT;
            break;
          case "focusin":
            (h = "focus"), (p = xf);
            break;
          case "focusout":
            (h = "blur"), (p = xf);
            break;
          case "beforeblur":
          case "afterblur":
            p = xf;
            break;
          case "click":
            if (n.button === 2) break e;
          case "auxclick":
          case "dblclick":
          case "mousedown":
          case "mousemove":
          case "mouseup":
          case "mouseout":
          case "mouseover":
          case "contextmenu":
            p = Xg;
            break;
          case "drag":
          case "dragend":
          case "dragenter":
          case "dragexit":
          case "dragleave":
          case "dragover":
          case "dragstart":
          case "drop":
            p = eT;
            break;
          case "touchcancel":
          case "touchend":
          case "touchmove":
          case "touchstart":
            p = hT;
            break;
          case yx:
          case bx:
          case xx:
            p = rT;
            break;
          case Sx:
            p = gT;
            break;
          case "scroll":
            p = Z2;
            break;
          case "wheel":
            p = bT;
            break;
          case "copy":
          case "cut":
          case "paste":
            p = iT;
            break;
          case "gotpointercapture":
          case "lostpointercapture":
          case "pointercancel":
          case "pointerdown":
          case "pointermove":
          case "pointerout":
          case "pointerover":
          case "pointerup":
            p = Zg;
        }
        var g = (t & 4) !== 0,
          x = !g && e === "scroll",
          v = g ? (f !== null ? f + "Capture" : null) : f;
        g = [];
        for (var m = u, y; m !== null; ) {
          y = m;
          var b = y.stateNode;
          if (
            (y.tag === 5 &&
              b !== null &&
              ((y = b),
              v !== null && ((b = Pl(m, v)), b != null && g.push(Ml(m, b, y)))),
            x)
          )
            break;
          m = m.return;
        }
        0 < g.length &&
          ((f = new p(f, h, null, n, c)), d.push({ event: f, listeners: g }));
      }
    }
    if (!(t & 7)) {
      e: {
        if (
          ((f = e === "mouseover" || e === "pointerover"),
          (p = e === "mouseout" || e === "pointerout"),
          f &&
            n !== Op &&
            (h = n.relatedTarget || n.fromElement) &&
            (zo(h) || h[Br]))
        )
          break e;
        if (
          (p || f) &&
          ((f =
            c.window === c
              ? c
              : (f = c.ownerDocument)
              ? f.defaultView || f.parentWindow
              : window),
          p
            ? ((h = n.relatedTarget || n.toElement),
              (p = u),
              (h = h ? zo(h) : null),
              h !== null &&
                ((x = ai(h)), h !== x || (h.tag !== 5 && h.tag !== 6)) &&
                (h = null))
            : ((p = null), (h = u)),
          p !== h)
        ) {
          if (
            ((g = Xg),
            (b = "onMouseLeave"),
            (v = "onMouseEnter"),
            (m = "mouse"),
            (e === "pointerout" || e === "pointerover") &&
              ((g = Zg),
              (b = "onPointerLeave"),
              (v = "onPointerEnter"),
              (m = "pointer")),
            (x = p == null ? f : Pi(p)),
            (y = h == null ? f : Pi(h)),
            (f = new g(b, m + "leave", p, n, c)),
            (f.target = x),
            (f.relatedTarget = y),
            (b = null),
            zo(c) === u &&
              ((g = new g(v, m + "enter", h, n, c)),
              (g.target = y),
              (g.relatedTarget = x),
              (b = g)),
            (x = b),
            p && h)
          )
            t: {
              for (g = p, v = h, m = 0, y = g; y; y = fi(y)) m++;
              for (y = 0, b = v; b; b = fi(b)) y++;
              for (; 0 < m - y; ) (g = fi(g)), m--;
              for (; 0 < y - m; ) (v = fi(v)), y--;
              for (; m--; ) {
                if (g === v || (v !== null && g === v.alternate)) break t;
                (g = fi(g)), (v = fi(v));
              }
              g = null;
            }
          else g = null;
          p !== null && uy(d, f, p, g, !1),
            h !== null && x !== null && uy(d, x, h, g, !0);
        }
      }
      e: {
        if (
          ((f = u ? Pi(u) : window),
          (p = f.nodeName && f.nodeName.toLowerCase()),
          p === "select" || (p === "input" && f.type === "file"))
        )
          var C = TT;
        else if (ty(f))
          if (px) C = DT;
          else {
            C = PT;
            var R = _T;
          }
        else
          (p = f.nodeName) &&
            p.toLowerCase() === "input" &&
            (f.type === "checkbox" || f.type === "radio") &&
            (C = kT);
        if (C && (C = C(e, u))) {
          fx(d, C, n, c);
          break e;
        }
        R && R(e, f, u),
          e === "focusout" &&
            (R = f._wrapperState) &&
            R.controlled &&
            f.type === "number" &&
            kp(f, "number", f.value);
      }
      switch (((R = u ? Pi(u) : window), e)) {
        case "focusin":
          (ty(R) || R.contentEditable === "true") &&
            ((Ti = R), (zp = u), (dl = null));
          break;
        case "focusout":
          dl = zp = Ti = null;
          break;
        case "mousedown":
          Up = !0;
          break;
        case "contextmenu":
        case "mouseup":
        case "dragend":
          (Up = !1), ay(d, n, c);
          break;
        case "selectionchange":
          if (NT) break;
        case "keydown":
        case "keyup":
          ay(d, n, c);
      }
      var E;
      if (vh)
        e: {
          switch (e) {
            case "compositionstart":
              var D = "onCompositionStart";
              break e;
            case "compositionend":
              D = "onCompositionEnd";
              break e;
            case "compositionupdate":
              D = "onCompositionUpdate";
              break e;
          }
          D = void 0;
        }
      else
        Ei
          ? cx(e, n) && (D = "onCompositionEnd")
          : e === "keydown" && n.keyCode === 229 && (D = "onCompositionStart");
      D &&
        (ux &&
          n.locale !== "ko" &&
          (Ei || D !== "onCompositionStart"
            ? D === "onCompositionEnd" && Ei && (E = sx())
            : ((no = c),
              (dh = "value" in no ? no.value : no.textContent),
              (Ei = !0))),
        (R = Wu(u, D)),
        0 < R.length &&
          ((D = new Qg(D, e, null, n, c)),
          d.push({ event: D, listeners: R }),
          E ? (D.data = E) : ((E = dx(n)), E !== null && (D.data = E)))),
        (E = ST ? wT(e, n) : CT(e, n)) &&
          ((u = Wu(u, "onBeforeInput")),
          0 < u.length &&
            ((c = new Qg("onBeforeInput", "beforeinput", null, n, c)),
            d.push({ event: c, listeners: u }),
            (c.data = E)));
    }
    Cx(d, t);
  });
}
function Ml(e, t, n) {
  return { instance: e, listener: t, currentTarget: n };
}
function Wu(e, t) {
  for (var n = t + "Capture", r = []; e !== null; ) {
    var o = e,
      i = o.stateNode;
    o.tag === 5 &&
      i !== null &&
      ((o = i),
      (i = Pl(e, n)),
      i != null && r.unshift(Ml(e, i, o)),
      (i = Pl(e, t)),
      i != null && r.push(Ml(e, i, o))),
      (e = e.return);
  }
  return r;
}
function fi(e) {
  if (e === null) return null;
  do e = e.return;
  while (e && e.tag !== 5);
  return e || null;
}
function uy(e, t, n, r, o) {
  for (var i = t._reactName, a = []; n !== null && n !== r; ) {
    var l = n,
      s = l.alternate,
      u = l.stateNode;
    if (s !== null && s === r) break;
    l.tag === 5 &&
      u !== null &&
      ((l = u),
      o
        ? ((s = Pl(n, i)), s != null && a.unshift(Ml(n, s, l)))
        : o || ((s = Pl(n, i)), s != null && a.push(Ml(n, s, l)))),
      (n = n.return);
  }
  a.length !== 0 && e.push({ event: t, listeners: a });
}
var LT = /\r\n?/g,
  BT = /\u0000|\uFFFD/g;
function cy(e) {
  return (typeof e == "string" ? e : "" + e)
    .replace(
      LT,
      `
`
    )
    .replace(BT, "");
}
function Ks(e, t, n) {
  if (((t = cy(t)), cy(e) !== t && n)) throw Error(Z(425));
}
function Hu() {}
var Vp = null,
  Wp = null;
function Hp(e, t) {
  return (
    e === "textarea" ||
    e === "noscript" ||
    typeof t.children == "string" ||
    typeof t.children == "number" ||
    (typeof t.dangerouslySetInnerHTML == "object" &&
      t.dangerouslySetInnerHTML !== null &&
      t.dangerouslySetInnerHTML.__html != null)
  );
}
var Gp = typeof setTimeout == "function" ? setTimeout : void 0,
  FT = typeof clearTimeout == "function" ? clearTimeout : void 0,
  dy = typeof Promise == "function" ? Promise : void 0,
  jT =
    typeof queueMicrotask == "function"
      ? queueMicrotask
      : typeof dy < "u"
      ? function (e) {
          return dy.resolve(null).then(e).catch(zT);
        }
      : Gp;
function zT(e) {
  setTimeout(function () {
    throw e;
  });
}
function Pf(e, t) {
  var n = t,
    r = 0;
  do {
    var o = n.nextSibling;
    if ((e.removeChild(n), o && o.nodeType === 8))
      if (((n = o.data), n === "/$")) {
        if (r === 0) {
          e.removeChild(o), Il(t);
          return;
        }
        r--;
      } else (n !== "$" && n !== "$?" && n !== "$!") || r++;
    n = o;
  } while (n);
  Il(t);
}
function uo(e) {
  for (; e != null; e = e.nextSibling) {
    var t = e.nodeType;
    if (t === 1 || t === 3) break;
    if (t === 8) {
      if (((t = e.data), t === "$" || t === "$!" || t === "$?")) break;
      if (t === "/$") return null;
    }
  }
  return e;
}
function fy(e) {
  e = e.previousSibling;
  for (var t = 0; e; ) {
    if (e.nodeType === 8) {
      var n = e.data;
      if (n === "$" || n === "$!" || n === "$?") {
        if (t === 0) return e;
        t--;
      } else n === "/$" && t++;
    }
    e = e.previousSibling;
  }
  return null;
}
var ba = Math.random().toString(36).slice(2),
  br = "__reactFiber$" + ba,
  $l = "__reactProps$" + ba,
  Br = "__reactContainer$" + ba,
  Kp = "__reactEvents$" + ba,
  UT = "__reactListeners$" + ba,
  VT = "__reactHandles$" + ba;
function zo(e) {
  var t = e[br];
  if (t) return t;
  for (var n = e.parentNode; n; ) {
    if ((t = n[Br] || n[br])) {
      if (
        ((n = t.alternate),
        t.child !== null || (n !== null && n.child !== null))
      )
        for (e = fy(e); e !== null; ) {
          if ((n = e[br])) return n;
          e = fy(e);
        }
      return t;
    }
    (e = n), (n = e.parentNode);
  }
  return null;
}
function ls(e) {
  return (
    (e = e[br] || e[Br]),
    !e || (e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3) ? null : e
  );
}
function Pi(e) {
  if (e.tag === 5 || e.tag === 6) return e.stateNode;
  throw Error(Z(33));
}
function Nc(e) {
  return e[$l] || null;
}
var qp = [],
  ki = -1;
function Eo(e) {
  return { current: e };
}
function Qe(e) {
  0 > ki || ((e.current = qp[ki]), (qp[ki] = null), ki--);
}
function Ge(e, t) {
  ki++, (qp[ki] = e.current), (e.current = t);
}
var So = {},
  Kt = Eo(So),
  fn = Eo(!1),
  Yo = So;
function Yi(e, t) {
  var n = e.type.contextTypes;
  if (!n) return So;
  var r = e.stateNode;
  if (r && r.__reactInternalMemoizedUnmaskedChildContext === t)
    return r.__reactInternalMemoizedMaskedChildContext;
  var o = {},
    i;
  for (i in n) o[i] = t[i];
  return (
    r &&
      ((e = e.stateNode),
      (e.__reactInternalMemoizedUnmaskedChildContext = t),
      (e.__reactInternalMemoizedMaskedChildContext = o)),
    o
  );
}
function pn(e) {
  return (e = e.childContextTypes), e != null;
}
function Gu() {
  Qe(fn), Qe(Kt);
}
function py(e, t, n) {
  if (Kt.current !== So) throw Error(Z(168));
  Ge(Kt, t), Ge(fn, n);
}
function Ex(e, t, n) {
  var r = e.stateNode;
  if (((t = t.childContextTypes), typeof r.getChildContext != "function"))
    return n;
  r = r.getChildContext();
  for (var o in r) if (!(o in t)) throw Error(Z(108, _2(e) || "Unknown", o));
  return at({}, n, r);
}
function Ku(e) {
  return (
    (e =
      ((e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext) || So),
    (Yo = Kt.current),
    Ge(Kt, e),
    Ge(fn, fn.current),
    !0
  );
}
function vy(e, t, n) {
  var r = e.stateNode;
  if (!r) throw Error(Z(169));
  n
    ? ((e = Ex(e, t, Yo)),
      (r.__reactInternalMemoizedMergedChildContext = e),
      Qe(fn),
      Qe(Kt),
      Ge(Kt, e))
    : Qe(fn),
    Ge(fn, n);
}
var Ar = null,
  Oc = !1,
  kf = !1;
function Tx(e) {
  Ar === null ? (Ar = [e]) : Ar.push(e);
}
function WT(e) {
  (Oc = !0), Tx(e);
}
function To() {
  if (!kf && Ar !== null) {
    kf = !0;
    var e = 0,
      t = je;
    try {
      var n = Ar;
      for (je = 1; e < n.length; e++) {
        var r = n[e];
        do r = r(!0);
        while (r !== null);
      }
      (Ar = null), (Oc = !1);
    } catch (o) {
      throw (Ar !== null && (Ar = Ar.slice(e + 1)), Qb(lh, To), o);
    } finally {
      (je = t), (kf = !1);
    }
  }
  return null;
}
var Di = [],
  Ii = 0,
  qu = null,
  Yu = 0,
  Fn = [],
  jn = 0,
  Xo = null,
  Nr = 1,
  Or = "";
function No(e, t) {
  (Di[Ii++] = Yu), (Di[Ii++] = qu), (qu = e), (Yu = t);
}
function _x(e, t, n) {
  (Fn[jn++] = Nr), (Fn[jn++] = Or), (Fn[jn++] = Xo), (Xo = e);
  var r = Nr;
  e = Or;
  var o = 32 - sr(r) - 1;
  (r &= ~(1 << o)), (n += 1);
  var i = 32 - sr(t) + o;
  if (30 < i) {
    var a = o - (o % 5);
    (i = (r & ((1 << a) - 1)).toString(32)),
      (r >>= a),
      (o -= a),
      (Nr = (1 << (32 - sr(t) + o)) | (n << o) | r),
      (Or = i + e);
  } else (Nr = (1 << i) | (n << o) | r), (Or = e);
}
function mh(e) {
  e.return !== null && (No(e, 1), _x(e, 1, 0));
}
function gh(e) {
  for (; e === qu; )
    (qu = Di[--Ii]), (Di[Ii] = null), (Yu = Di[--Ii]), (Di[Ii] = null);
  for (; e === Xo; )
    (Xo = Fn[--jn]),
      (Fn[jn] = null),
      (Or = Fn[--jn]),
      (Fn[jn] = null),
      (Nr = Fn[--jn]),
      (Fn[jn] = null);
}
var En = null,
  Cn = null,
  tt = !1,
  ar = null;
function Px(e, t) {
  var n = zn(5, null, null, 0);
  (n.elementType = "DELETED"),
    (n.stateNode = t),
    (n.return = e),
    (t = e.deletions),
    t === null ? ((e.deletions = [n]), (e.flags |= 16)) : t.push(n);
}
function hy(e, t) {
  switch (e.tag) {
    case 5:
      var n = e.type;
      return (
        (t =
          t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase()
            ? null
            : t),
        t !== null
          ? ((e.stateNode = t), (En = e), (Cn = uo(t.firstChild)), !0)
          : !1
      );
    case 6:
      return (
        (t = e.pendingProps === "" || t.nodeType !== 3 ? null : t),
        t !== null ? ((e.stateNode = t), (En = e), (Cn = null), !0) : !1
      );
    case 13:
      return (
        (t = t.nodeType !== 8 ? null : t),
        t !== null
          ? ((n = Xo !== null ? { id: Nr, overflow: Or } : null),
            (e.memoizedState = {
              dehydrated: t,
              treeContext: n,
              retryLane: 1073741824,
            }),
            (n = zn(18, null, null, 0)),
            (n.stateNode = t),
            (n.return = e),
            (e.child = n),
            (En = e),
            (Cn = null),
            !0)
          : !1
      );
    default:
      return !1;
  }
}
function Yp(e) {
  return (e.mode & 1) !== 0 && (e.flags & 128) === 0;
}
function Xp(e) {
  if (tt) {
    var t = Cn;
    if (t) {
      var n = t;
      if (!hy(e, t)) {
        if (Yp(e)) throw Error(Z(418));
        t = uo(n.nextSibling);
        var r = En;
        t && hy(e, t)
          ? Px(r, n)
          : ((e.flags = (e.flags & -4097) | 2), (tt = !1), (En = e));
      }
    } else {
      if (Yp(e)) throw Error(Z(418));
      (e.flags = (e.flags & -4097) | 2), (tt = !1), (En = e);
    }
  }
}
function my(e) {
  for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; )
    e = e.return;
  En = e;
}
function qs(e) {
  if (e !== En) return !1;
  if (!tt) return my(e), (tt = !0), !1;
  var t;
  if (
    ((t = e.tag !== 3) &&
      !(t = e.tag !== 5) &&
      ((t = e.type),
      (t = t !== "head" && t !== "body" && !Hp(e.type, e.memoizedProps))),
    t && (t = Cn))
  ) {
    if (Yp(e)) throw (kx(), Error(Z(418)));
    for (; t; ) Px(e, t), (t = uo(t.nextSibling));
  }
  if ((my(e), e.tag === 13)) {
    if (((e = e.memoizedState), (e = e !== null ? e.dehydrated : null), !e))
      throw Error(Z(317));
    e: {
      for (e = e.nextSibling, t = 0; e; ) {
        if (e.nodeType === 8) {
          var n = e.data;
          if (n === "/$") {
            if (t === 0) {
              Cn = uo(e.nextSibling);
              break e;
            }
            t--;
          } else (n !== "$" && n !== "$!" && n !== "$?") || t++;
        }
        e = e.nextSibling;
      }
      Cn = null;
    }
  } else Cn = En ? uo(e.stateNode.nextSibling) : null;
  return !0;
}
function kx() {
  for (var e = Cn; e; ) e = uo(e.nextSibling);
}
function Xi() {
  (Cn = En = null), (tt = !1);
}
function yh(e) {
  ar === null ? (ar = [e]) : ar.push(e);
}
var HT = Vr.ReactCurrentBatchConfig;
function rr(e, t) {
  if (e && e.defaultProps) {
    (t = at({}, t)), (e = e.defaultProps);
    for (var n in e) t[n] === void 0 && (t[n] = e[n]);
    return t;
  }
  return t;
}
var Xu = Eo(null),
  Qu = null,
  Ai = null,
  bh = null;
function xh() {
  bh = Ai = Qu = null;
}
function Sh(e) {
  var t = Xu.current;
  Qe(Xu), (e._currentValue = t);
}
function Qp(e, t, n) {
  for (; e !== null; ) {
    var r = e.alternate;
    if (
      ((e.childLanes & t) !== t
        ? ((e.childLanes |= t), r !== null && (r.childLanes |= t))
        : r !== null && (r.childLanes & t) !== t && (r.childLanes |= t),
      e === n)
    )
      break;
    e = e.return;
  }
}
function Ui(e, t) {
  (Qu = e),
    (bh = Ai = null),
    (e = e.dependencies),
    e !== null &&
      e.firstContext !== null &&
      (e.lanes & t && (dn = !0), (e.firstContext = null));
}
function Gn(e) {
  var t = e._currentValue;
  if (bh !== e)
    if (((e = { context: e, memoizedValue: t, next: null }), Ai === null)) {
      if (Qu === null) throw Error(Z(308));
      (Ai = e), (Qu.dependencies = { lanes: 0, firstContext: e });
    } else Ai = Ai.next = e;
  return t;
}
var Uo = null;
function wh(e) {
  Uo === null ? (Uo = [e]) : Uo.push(e);
}
function Dx(e, t, n, r) {
  var o = t.interleaved;
  return (
    o === null ? ((n.next = n), wh(t)) : ((n.next = o.next), (o.next = n)),
    (t.interleaved = n),
    Fr(e, r)
  );
}
function Fr(e, t) {
  e.lanes |= t;
  var n = e.alternate;
  for (n !== null && (n.lanes |= t), n = e, e = e.return; e !== null; )
    (e.childLanes |= t),
      (n = e.alternate),
      n !== null && (n.childLanes |= t),
      (n = e),
      (e = e.return);
  return n.tag === 3 ? n.stateNode : null;
}
var Zr = !1;
function Ch(e) {
  e.updateQueue = {
    baseState: e.memoizedState,
    firstBaseUpdate: null,
    lastBaseUpdate: null,
    shared: { pending: null, interleaved: null, lanes: 0 },
    effects: null,
  };
}
function Ix(e, t) {
  (e = e.updateQueue),
    t.updateQueue === e &&
      (t.updateQueue = {
        baseState: e.baseState,
        firstBaseUpdate: e.firstBaseUpdate,
        lastBaseUpdate: e.lastBaseUpdate,
        shared: e.shared,
        effects: e.effects,
      });
}
function Mr(e, t) {
  return {
    eventTime: e,
    lane: t,
    tag: 0,
    payload: null,
    callback: null,
    next: null,
  };
}
function co(e, t, n) {
  var r = e.updateQueue;
  if (r === null) return null;
  if (((r = r.shared), Ne & 2)) {
    var o = r.pending;
    return (
      o === null ? (t.next = t) : ((t.next = o.next), (o.next = t)),
      (r.pending = t),
      Fr(e, n)
    );
  }
  return (
    (o = r.interleaved),
    o === null ? ((t.next = t), wh(r)) : ((t.next = o.next), (o.next = t)),
    (r.interleaved = t),
    Fr(e, n)
  );
}
function Cu(e, t, n) {
  if (
    ((t = t.updateQueue), t !== null && ((t = t.shared), (n & 4194240) !== 0))
  ) {
    var r = t.lanes;
    (r &= e.pendingLanes), (n |= r), (t.lanes = n), sh(e, n);
  }
}
function gy(e, t) {
  var n = e.updateQueue,
    r = e.alternate;
  if (r !== null && ((r = r.updateQueue), n === r)) {
    var o = null,
      i = null;
    if (((n = n.firstBaseUpdate), n !== null)) {
      do {
        var a = {
          eventTime: n.eventTime,
          lane: n.lane,
          tag: n.tag,
          payload: n.payload,
          callback: n.callback,
          next: null,
        };
        i === null ? (o = i = a) : (i = i.next = a), (n = n.next);
      } while (n !== null);
      i === null ? (o = i = t) : (i = i.next = t);
    } else o = i = t;
    (n = {
      baseState: r.baseState,
      firstBaseUpdate: o,
      lastBaseUpdate: i,
      shared: r.shared,
      effects: r.effects,
    }),
      (e.updateQueue = n);
    return;
  }
  (e = n.lastBaseUpdate),
    e === null ? (n.firstBaseUpdate = t) : (e.next = t),
    (n.lastBaseUpdate = t);
}
function Zu(e, t, n, r) {
  var o = e.updateQueue;
  Zr = !1;
  var i = o.firstBaseUpdate,
    a = o.lastBaseUpdate,
    l = o.shared.pending;
  if (l !== null) {
    o.shared.pending = null;
    var s = l,
      u = s.next;
    (s.next = null), a === null ? (i = u) : (a.next = u), (a = s);
    var c = e.alternate;
    c !== null &&
      ((c = c.updateQueue),
      (l = c.lastBaseUpdate),
      l !== a &&
        (l === null ? (c.firstBaseUpdate = u) : (l.next = u),
        (c.lastBaseUpdate = s)));
  }
  if (i !== null) {
    var d = o.baseState;
    (a = 0), (c = u = s = null), (l = i);
    do {
      var f = l.lane,
        p = l.eventTime;
      if ((r & f) === f) {
        c !== null &&
          (c = c.next =
            {
              eventTime: p,
              lane: 0,
              tag: l.tag,
              payload: l.payload,
              callback: l.callback,
              next: null,
            });
        e: {
          var h = e,
            g = l;
          switch (((f = t), (p = n), g.tag)) {
            case 1:
              if (((h = g.payload), typeof h == "function")) {
                d = h.call(p, d, f);
                break e;
              }
              d = h;
              break e;
            case 3:
              h.flags = (h.flags & -65537) | 128;
            case 0:
              if (
                ((h = g.payload),
                (f = typeof h == "function" ? h.call(p, d, f) : h),
                f == null)
              )
                break e;
              d = at({}, d, f);
              break e;
            case 2:
              Zr = !0;
          }
        }
        l.callback !== null &&
          l.lane !== 0 &&
          ((e.flags |= 64),
          (f = o.effects),
          f === null ? (o.effects = [l]) : f.push(l));
      } else
        (p = {
          eventTime: p,
          lane: f,
          tag: l.tag,
          payload: l.payload,
          callback: l.callback,
          next: null,
        }),
          c === null ? ((u = c = p), (s = d)) : (c = c.next = p),
          (a |= f);
      if (((l = l.next), l === null)) {
        if (((l = o.shared.pending), l === null)) break;
        (f = l),
          (l = f.next),
          (f.next = null),
          (o.lastBaseUpdate = f),
          (o.shared.pending = null);
      }
    } while (1);
    if (
      (c === null && (s = d),
      (o.baseState = s),
      (o.firstBaseUpdate = u),
      (o.lastBaseUpdate = c),
      (t = o.shared.interleaved),
      t !== null)
    ) {
      o = t;
      do (a |= o.lane), (o = o.next);
      while (o !== t);
    } else i === null && (o.shared.lanes = 0);
    (Zo |= a), (e.lanes = a), (e.memoizedState = d);
  }
}
function yy(e, t, n) {
  if (((e = t.effects), (t.effects = null), e !== null))
    for (t = 0; t < e.length; t++) {
      var r = e[t],
        o = r.callback;
      if (o !== null) {
        if (((r.callback = null), (r = n), typeof o != "function"))
          throw Error(Z(191, o));
        o.call(r);
      }
    }
}
var Ax = new Db.Component().refs;
function Zp(e, t, n, r) {
  (t = e.memoizedState),
    (n = n(r, t)),
    (n = n == null ? t : at({}, t, n)),
    (e.memoizedState = n),
    e.lanes === 0 && (e.updateQueue.baseState = n);
}
var Mc = {
  isMounted: function (e) {
    return (e = e._reactInternals) ? ai(e) === e : !1;
  },
  enqueueSetState: function (e, t, n) {
    e = e._reactInternals;
    var r = Zt(),
      o = po(e),
      i = Mr(r, o);
    (i.payload = t),
      n != null && (i.callback = n),
      (t = co(e, i, o)),
      t !== null && (ur(t, e, o, r), Cu(t, e, o));
  },
  enqueueReplaceState: function (e, t, n) {
    e = e._reactInternals;
    var r = Zt(),
      o = po(e),
      i = Mr(r, o);
    (i.tag = 1),
      (i.payload = t),
      n != null && (i.callback = n),
      (t = co(e, i, o)),
      t !== null && (ur(t, e, o, r), Cu(t, e, o));
  },
  enqueueForceUpdate: function (e, t) {
    e = e._reactInternals;
    var n = Zt(),
      r = po(e),
      o = Mr(n, r);
    (o.tag = 2),
      t != null && (o.callback = t),
      (t = co(e, o, r)),
      t !== null && (ur(t, e, r, n), Cu(t, e, r));
  },
};
function by(e, t, n, r, o, i, a) {
  return (
    (e = e.stateNode),
    typeof e.shouldComponentUpdate == "function"
      ? e.shouldComponentUpdate(r, i, a)
      : t.prototype && t.prototype.isPureReactComponent
      ? !Nl(n, r) || !Nl(o, i)
      : !0
  );
}
function Nx(e, t, n) {
  var r = !1,
    o = So,
    i = t.contextType;
  return (
    typeof i == "object" && i !== null
      ? (i = Gn(i))
      : ((o = pn(t) ? Yo : Kt.current),
        (r = t.contextTypes),
        (i = (r = r != null) ? Yi(e, o) : So)),
    (t = new t(n, i)),
    (e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null),
    (t.updater = Mc),
    (e.stateNode = t),
    (t._reactInternals = e),
    r &&
      ((e = e.stateNode),
      (e.__reactInternalMemoizedUnmaskedChildContext = o),
      (e.__reactInternalMemoizedMaskedChildContext = i)),
    t
  );
}
function xy(e, t, n, r) {
  (e = t.state),
    typeof t.componentWillReceiveProps == "function" &&
      t.componentWillReceiveProps(n, r),
    typeof t.UNSAFE_componentWillReceiveProps == "function" &&
      t.UNSAFE_componentWillReceiveProps(n, r),
    t.state !== e && Mc.enqueueReplaceState(t, t.state, null);
}
function Jp(e, t, n, r) {
  var o = e.stateNode;
  (o.props = n), (o.state = e.memoizedState), (o.refs = Ax), Ch(e);
  var i = t.contextType;
  typeof i == "object" && i !== null
    ? (o.context = Gn(i))
    : ((i = pn(t) ? Yo : Kt.current), (o.context = Yi(e, i))),
    (o.state = e.memoizedState),
    (i = t.getDerivedStateFromProps),
    typeof i == "function" && (Zp(e, t, i, n), (o.state = e.memoizedState)),
    typeof t.getDerivedStateFromProps == "function" ||
      typeof o.getSnapshotBeforeUpdate == "function" ||
      (typeof o.UNSAFE_componentWillMount != "function" &&
        typeof o.componentWillMount != "function") ||
      ((t = o.state),
      typeof o.componentWillMount == "function" && o.componentWillMount(),
      typeof o.UNSAFE_componentWillMount == "function" &&
        o.UNSAFE_componentWillMount(),
      t !== o.state && Mc.enqueueReplaceState(o, o.state, null),
      Zu(e, n, o, r),
      (o.state = e.memoizedState)),
    typeof o.componentDidMount == "function" && (e.flags |= 4194308);
}
function Aa(e, t, n) {
  if (
    ((e = n.ref), e !== null && typeof e != "function" && typeof e != "object")
  ) {
    if (n._owner) {
      if (((n = n._owner), n)) {
        if (n.tag !== 1) throw Error(Z(309));
        var r = n.stateNode;
      }
      if (!r) throw Error(Z(147, e));
      var o = r,
        i = "" + e;
      return t !== null &&
        t.ref !== null &&
        typeof t.ref == "function" &&
        t.ref._stringRef === i
        ? t.ref
        : ((t = function (a) {
            var l = o.refs;
            l === Ax && (l = o.refs = {}),
              a === null ? delete l[i] : (l[i] = a);
          }),
          (t._stringRef = i),
          t);
    }
    if (typeof e != "string") throw Error(Z(284));
    if (!n._owner) throw Error(Z(290, e));
  }
  return e;
}
function Ys(e, t) {
  throw (
    ((e = Object.prototype.toString.call(t)),
    Error(
      Z(
        31,
        e === "[object Object]"
          ? "object with keys {" + Object.keys(t).join(", ") + "}"
          : e
      )
    ))
  );
}
function Sy(e) {
  var t = e._init;
  return t(e._payload);
}
function Ox(e) {
  function t(v, m) {
    if (e) {
      var y = v.deletions;
      y === null ? ((v.deletions = [m]), (v.flags |= 16)) : y.push(m);
    }
  }
  function n(v, m) {
    if (!e) return null;
    for (; m !== null; ) t(v, m), (m = m.sibling);
    return null;
  }
  function r(v, m) {
    for (v = new Map(); m !== null; )
      m.key !== null ? v.set(m.key, m) : v.set(m.index, m), (m = m.sibling);
    return v;
  }
  function o(v, m) {
    return (v = vo(v, m)), (v.index = 0), (v.sibling = null), v;
  }
  function i(v, m, y) {
    return (
      (v.index = y),
      e
        ? ((y = v.alternate),
          y !== null
            ? ((y = y.index), y < m ? ((v.flags |= 2), m) : y)
            : ((v.flags |= 2), m))
        : ((v.flags |= 1048576), m)
    );
  }
  function a(v) {
    return e && v.alternate === null && (v.flags |= 2), v;
  }
  function l(v, m, y, b) {
    return m === null || m.tag !== 6
      ? ((m = $f(y, v.mode, b)), (m.return = v), m)
      : ((m = o(m, y)), (m.return = v), m);
  }
  function s(v, m, y, b) {
    var C = y.type;
    return C === Ri
      ? c(v, m, y.props.children, b, y.key)
      : m !== null &&
        (m.elementType === C ||
          (typeof C == "object" &&
            C !== null &&
            C.$$typeof === Qr &&
            Sy(C) === m.type))
      ? ((b = o(m, y.props)), (b.ref = Aa(v, m, y)), (b.return = v), b)
      : ((b = ku(y.type, y.key, y.props, null, v.mode, b)),
        (b.ref = Aa(v, m, y)),
        (b.return = v),
        b);
  }
  function u(v, m, y, b) {
    return m === null ||
      m.tag !== 4 ||
      m.stateNode.containerInfo !== y.containerInfo ||
      m.stateNode.implementation !== y.implementation
      ? ((m = Lf(y, v.mode, b)), (m.return = v), m)
      : ((m = o(m, y.children || [])), (m.return = v), m);
  }
  function c(v, m, y, b, C) {
    return m === null || m.tag !== 7
      ? ((m = Ko(y, v.mode, b, C)), (m.return = v), m)
      : ((m = o(m, y)), (m.return = v), m);
  }
  function d(v, m, y) {
    if ((typeof m == "string" && m !== "") || typeof m == "number")
      return (m = $f("" + m, v.mode, y)), (m.return = v), m;
    if (typeof m == "object" && m !== null) {
      switch (m.$$typeof) {
        case Bs:
          return (
            (y = ku(m.type, m.key, m.props, null, v.mode, y)),
            (y.ref = Aa(v, null, m)),
            (y.return = v),
            y
          );
        case Ci:
          return (m = Lf(m, v.mode, y)), (m.return = v), m;
        case Qr:
          var b = m._init;
          return d(v, b(m._payload), y);
      }
      if (Ja(m) || _a(m))
        return (m = Ko(m, v.mode, y, null)), (m.return = v), m;
      Ys(v, m);
    }
    return null;
  }
  function f(v, m, y, b) {
    var C = m !== null ? m.key : null;
    if ((typeof y == "string" && y !== "") || typeof y == "number")
      return C !== null ? null : l(v, m, "" + y, b);
    if (typeof y == "object" && y !== null) {
      switch (y.$$typeof) {
        case Bs:
          return y.key === C ? s(v, m, y, b) : null;
        case Ci:
          return y.key === C ? u(v, m, y, b) : null;
        case Qr:
          return (C = y._init), f(v, m, C(y._payload), b);
      }
      if (Ja(y) || _a(y)) return C !== null ? null : c(v, m, y, b, null);
      Ys(v, y);
    }
    return null;
  }
  function p(v, m, y, b, C) {
    if ((typeof b == "string" && b !== "") || typeof b == "number")
      return (v = v.get(y) || null), l(m, v, "" + b, C);
    if (typeof b == "object" && b !== null) {
      switch (b.$$typeof) {
        case Bs:
          return (v = v.get(b.key === null ? y : b.key) || null), s(m, v, b, C);
        case Ci:
          return (v = v.get(b.key === null ? y : b.key) || null), u(m, v, b, C);
        case Qr:
          var R = b._init;
          return p(v, m, y, R(b._payload), C);
      }
      if (Ja(b) || _a(b)) return (v = v.get(y) || null), c(m, v, b, C, null);
      Ys(m, b);
    }
    return null;
  }
  function h(v, m, y, b) {
    for (
      var C = null, R = null, E = m, D = (m = 0), A = null;
      E !== null && D < y.length;
      D++
    ) {
      E.index > D ? ((A = E), (E = null)) : (A = E.sibling);
      var I = f(v, E, y[D], b);
      if (I === null) {
        E === null && (E = A);
        break;
      }
      e && E && I.alternate === null && t(v, E),
        (m = i(I, m, D)),
        R === null ? (C = I) : (R.sibling = I),
        (R = I),
        (E = A);
    }
    if (D === y.length) return n(v, E), tt && No(v, D), C;
    if (E === null) {
      for (; D < y.length; D++)
        (E = d(v, y[D], b)),
          E !== null &&
            ((m = i(E, m, D)), R === null ? (C = E) : (R.sibling = E), (R = E));
      return tt && No(v, D), C;
    }
    for (E = r(v, E); D < y.length; D++)
      (A = p(E, v, D, y[D], b)),
        A !== null &&
          (e && A.alternate !== null && E.delete(A.key === null ? D : A.key),
          (m = i(A, m, D)),
          R === null ? (C = A) : (R.sibling = A),
          (R = A));
    return (
      e &&
        E.forEach(function (M) {
          return t(v, M);
        }),
      tt && No(v, D),
      C
    );
  }
  function g(v, m, y, b) {
    var C = _a(y);
    if (typeof C != "function") throw Error(Z(150));
    if (((y = C.call(y)), y == null)) throw Error(Z(151));
    for (
      var R = (C = null), E = m, D = (m = 0), A = null, I = y.next();
      E !== null && !I.done;
      D++, I = y.next()
    ) {
      E.index > D ? ((A = E), (E = null)) : (A = E.sibling);
      var M = f(v, E, I.value, b);
      if (M === null) {
        E === null && (E = A);
        break;
      }
      e && E && M.alternate === null && t(v, E),
        (m = i(M, m, D)),
        R === null ? (C = M) : (R.sibling = M),
        (R = M),
        (E = A);
    }
    if (I.done) return n(v, E), tt && No(v, D), C;
    if (E === null) {
      for (; !I.done; D++, I = y.next())
        (I = d(v, I.value, b)),
          I !== null &&
            ((m = i(I, m, D)), R === null ? (C = I) : (R.sibling = I), (R = I));
      return tt && No(v, D), C;
    }
    for (E = r(v, E); !I.done; D++, I = y.next())
      (I = p(E, v, D, I.value, b)),
        I !== null &&
          (e && I.alternate !== null && E.delete(I.key === null ? D : I.key),
          (m = i(I, m, D)),
          R === null ? (C = I) : (R.sibling = I),
          (R = I));
    return (
      e &&
        E.forEach(function (J) {
          return t(v, J);
        }),
      tt && No(v, D),
      C
    );
  }
  function x(v, m, y, b) {
    if (
      (typeof y == "object" &&
        y !== null &&
        y.type === Ri &&
        y.key === null &&
        (y = y.props.children),
      typeof y == "object" && y !== null)
    ) {
      switch (y.$$typeof) {
        case Bs:
          e: {
            for (var C = y.key, R = m; R !== null; ) {
              if (R.key === C) {
                if (((C = y.type), C === Ri)) {
                  if (R.tag === 7) {
                    n(v, R.sibling),
                      (m = o(R, y.props.children)),
                      (m.return = v),
                      (v = m);
                    break e;
                  }
                } else if (
                  R.elementType === C ||
                  (typeof C == "object" &&
                    C !== null &&
                    C.$$typeof === Qr &&
                    Sy(C) === R.type)
                ) {
                  n(v, R.sibling),
                    (m = o(R, y.props)),
                    (m.ref = Aa(v, R, y)),
                    (m.return = v),
                    (v = m);
                  break e;
                }
                n(v, R);
                break;
              } else t(v, R);
              R = R.sibling;
            }
            y.type === Ri
              ? ((m = Ko(y.props.children, v.mode, b, y.key)),
                (m.return = v),
                (v = m))
              : ((b = ku(y.type, y.key, y.props, null, v.mode, b)),
                (b.ref = Aa(v, m, y)),
                (b.return = v),
                (v = b));
          }
          return a(v);
        case Ci:
          e: {
            for (R = y.key; m !== null; ) {
              if (m.key === R)
                if (
                  m.tag === 4 &&
                  m.stateNode.containerInfo === y.containerInfo &&
                  m.stateNode.implementation === y.implementation
                ) {
                  n(v, m.sibling),
                    (m = o(m, y.children || [])),
                    (m.return = v),
                    (v = m);
                  break e;
                } else {
                  n(v, m);
                  break;
                }
              else t(v, m);
              m = m.sibling;
            }
            (m = Lf(y, v.mode, b)), (m.return = v), (v = m);
          }
          return a(v);
        case Qr:
          return (R = y._init), x(v, m, R(y._payload), b);
      }
      if (Ja(y)) return h(v, m, y, b);
      if (_a(y)) return g(v, m, y, b);
      Ys(v, y);
    }
    return (typeof y == "string" && y !== "") || typeof y == "number"
      ? ((y = "" + y),
        m !== null && m.tag === 6
          ? (n(v, m.sibling), (m = o(m, y)), (m.return = v), (v = m))
          : (n(v, m), (m = $f(y, v.mode, b)), (m.return = v), (v = m)),
        a(v))
      : n(v, m);
  }
  return x;
}
var Qi = Ox(!0),
  Mx = Ox(!1),
  ss = {},
  wr = Eo(ss),
  Ll = Eo(ss),
  Bl = Eo(ss);
function Vo(e) {
  if (e === ss) throw Error(Z(174));
  return e;
}
function Rh(e, t) {
  switch ((Ge(Bl, t), Ge(Ll, e), Ge(wr, ss), (e = t.nodeType), e)) {
    case 9:
    case 11:
      t = (t = t.documentElement) ? t.namespaceURI : Ip(null, "");
      break;
    default:
      (e = e === 8 ? t.parentNode : t),
        (t = e.namespaceURI || null),
        (e = e.tagName),
        (t = Ip(t, e));
  }
  Qe(wr), Ge(wr, t);
}
function Zi() {
  Qe(wr), Qe(Ll), Qe(Bl);
}
function $x(e) {
  Vo(Bl.current);
  var t = Vo(wr.current),
    n = Ip(t, e.type);
  t !== n && (Ge(Ll, e), Ge(wr, n));
}
function Eh(e) {
  Ll.current === e && (Qe(wr), Qe(Ll));
}
var ot = Eo(0);
function Ju(e) {
  for (var t = e; t !== null; ) {
    if (t.tag === 13) {
      var n = t.memoizedState;
      if (
        n !== null &&
        ((n = n.dehydrated), n === null || n.data === "$?" || n.data === "$!")
      )
        return t;
    } else if (t.tag === 19 && t.memoizedProps.revealOrder !== void 0) {
      if (t.flags & 128) return t;
    } else if (t.child !== null) {
      (t.child.return = t), (t = t.child);
      continue;
    }
    if (t === e) break;
    for (; t.sibling === null; ) {
      if (t.return === null || t.return === e) return null;
      t = t.return;
    }
    (t.sibling.return = t.return), (t = t.sibling);
  }
  return null;
}
var Df = [];
function Th() {
  for (var e = 0; e < Df.length; e++)
    Df[e]._workInProgressVersionPrimary = null;
  Df.length = 0;
}
var Ru = Vr.ReactCurrentDispatcher,
  If = Vr.ReactCurrentBatchConfig,
  Qo = 0,
  it = null,
  xt = null,
  Tt = null,
  ec = !1,
  fl = !1,
  Fl = 0,
  GT = 0;
function Ut() {
  throw Error(Z(321));
}
function _h(e, t) {
  if (t === null) return !1;
  for (var n = 0; n < t.length && n < e.length; n++)
    if (!cr(e[n], t[n])) return !1;
  return !0;
}
function Ph(e, t, n, r, o, i) {
  if (
    ((Qo = i),
    (it = t),
    (t.memoizedState = null),
    (t.updateQueue = null),
    (t.lanes = 0),
    (Ru.current = e === null || e.memoizedState === null ? XT : QT),
    (e = n(r, o)),
    fl)
  ) {
    i = 0;
    do {
      if (((fl = !1), (Fl = 0), 25 <= i)) throw Error(Z(301));
      (i += 1),
        (Tt = xt = null),
        (t.updateQueue = null),
        (Ru.current = ZT),
        (e = n(r, o));
    } while (fl);
  }
  if (
    ((Ru.current = tc),
    (t = xt !== null && xt.next !== null),
    (Qo = 0),
    (Tt = xt = it = null),
    (ec = !1),
    t)
  )
    throw Error(Z(300));
  return e;
}
function kh() {
  var e = Fl !== 0;
  return (Fl = 0), e;
}
function mr() {
  var e = {
    memoizedState: null,
    baseState: null,
    baseQueue: null,
    queue: null,
    next: null,
  };
  return Tt === null ? (it.memoizedState = Tt = e) : (Tt = Tt.next = e), Tt;
}
function Kn() {
  if (xt === null) {
    var e = it.alternate;
    e = e !== null ? e.memoizedState : null;
  } else e = xt.next;
  var t = Tt === null ? it.memoizedState : Tt.next;
  if (t !== null) (Tt = t), (xt = e);
  else {
    if (e === null) throw Error(Z(310));
    (xt = e),
      (e = {
        memoizedState: xt.memoizedState,
        baseState: xt.baseState,
        baseQueue: xt.baseQueue,
        queue: xt.queue,
        next: null,
      }),
      Tt === null ? (it.memoizedState = Tt = e) : (Tt = Tt.next = e);
  }
  return Tt;
}
function jl(e, t) {
  return typeof t == "function" ? t(e) : t;
}
function Af(e) {
  var t = Kn(),
    n = t.queue;
  if (n === null) throw Error(Z(311));
  n.lastRenderedReducer = e;
  var r = xt,
    o = r.baseQueue,
    i = n.pending;
  if (i !== null) {
    if (o !== null) {
      var a = o.next;
      (o.next = i.next), (i.next = a);
    }
    (r.baseQueue = o = i), (n.pending = null);
  }
  if (o !== null) {
    (i = o.next), (r = r.baseState);
    var l = (a = null),
      s = null,
      u = i;
    do {
      var c = u.lane;
      if ((Qo & c) === c)
        s !== null &&
          (s = s.next =
            {
              lane: 0,
              action: u.action,
              hasEagerState: u.hasEagerState,
              eagerState: u.eagerState,
              next: null,
            }),
          (r = u.hasEagerState ? u.eagerState : e(r, u.action));
      else {
        var d = {
          lane: c,
          action: u.action,
          hasEagerState: u.hasEagerState,
          eagerState: u.eagerState,
          next: null,
        };
        s === null ? ((l = s = d), (a = r)) : (s = s.next = d),
          (it.lanes |= c),
          (Zo |= c);
      }
      u = u.next;
    } while (u !== null && u !== i);
    s === null ? (a = r) : (s.next = l),
      cr(r, t.memoizedState) || (dn = !0),
      (t.memoizedState = r),
      (t.baseState = a),
      (t.baseQueue = s),
      (n.lastRenderedState = r);
  }
  if (((e = n.interleaved), e !== null)) {
    o = e;
    do (i = o.lane), (it.lanes |= i), (Zo |= i), (o = o.next);
    while (o !== e);
  } else o === null && (n.lanes = 0);
  return [t.memoizedState, n.dispatch];
}
function Nf(e) {
  var t = Kn(),
    n = t.queue;
  if (n === null) throw Error(Z(311));
  n.lastRenderedReducer = e;
  var r = n.dispatch,
    o = n.pending,
    i = t.memoizedState;
  if (o !== null) {
    n.pending = null;
    var a = (o = o.next);
    do (i = e(i, a.action)), (a = a.next);
    while (a !== o);
    cr(i, t.memoizedState) || (dn = !0),
      (t.memoizedState = i),
      t.baseQueue === null && (t.baseState = i),
      (n.lastRenderedState = i);
  }
  return [i, r];
}
function Lx() {}
function Bx(e, t) {
  var n = it,
    r = Kn(),
    o = t(),
    i = !cr(r.memoizedState, o);
  if (
    (i && ((r.memoizedState = o), (dn = !0)),
    (r = r.queue),
    Dh(zx.bind(null, n, r, e), [e]),
    r.getSnapshot !== t || i || (Tt !== null && Tt.memoizedState.tag & 1))
  ) {
    if (
      ((n.flags |= 2048),
      zl(9, jx.bind(null, n, r, o, t), void 0, null),
      _t === null)
    )
      throw Error(Z(349));
    Qo & 30 || Fx(n, t, o);
  }
  return o;
}
function Fx(e, t, n) {
  (e.flags |= 16384),
    (e = { getSnapshot: t, value: n }),
    (t = it.updateQueue),
    t === null
      ? ((t = { lastEffect: null, stores: null }),
        (it.updateQueue = t),
        (t.stores = [e]))
      : ((n = t.stores), n === null ? (t.stores = [e]) : n.push(e));
}
function jx(e, t, n, r) {
  (t.value = n), (t.getSnapshot = r), Ux(t) && Vx(e);
}
function zx(e, t, n) {
  return n(function () {
    Ux(t) && Vx(e);
  });
}
function Ux(e) {
  var t = e.getSnapshot;
  e = e.value;
  try {
    var n = t();
    return !cr(e, n);
  } catch {
    return !0;
  }
}
function Vx(e) {
  var t = Fr(e, 1);
  t !== null && ur(t, e, 1, -1);
}
function wy(e) {
  var t = mr();
  return (
    typeof e == "function" && (e = e()),
    (t.memoizedState = t.baseState = e),
    (e = {
      pending: null,
      interleaved: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: jl,
      lastRenderedState: e,
    }),
    (t.queue = e),
    (e = e.dispatch = YT.bind(null, it, e)),
    [t.memoizedState, e]
  );
}
function zl(e, t, n, r) {
  return (
    (e = { tag: e, create: t, destroy: n, deps: r, next: null }),
    (t = it.updateQueue),
    t === null
      ? ((t = { lastEffect: null, stores: null }),
        (it.updateQueue = t),
        (t.lastEffect = e.next = e))
      : ((n = t.lastEffect),
        n === null
          ? (t.lastEffect = e.next = e)
          : ((r = n.next), (n.next = e), (e.next = r), (t.lastEffect = e))),
    e
  );
}
function Wx() {
  return Kn().memoizedState;
}
function Eu(e, t, n, r) {
  var o = mr();
  (it.flags |= e),
    (o.memoizedState = zl(1 | t, n, void 0, r === void 0 ? null : r));
}
function $c(e, t, n, r) {
  var o = Kn();
  r = r === void 0 ? null : r;
  var i = void 0;
  if (xt !== null) {
    var a = xt.memoizedState;
    if (((i = a.destroy), r !== null && _h(r, a.deps))) {
      o.memoizedState = zl(t, n, i, r);
      return;
    }
  }
  (it.flags |= e), (o.memoizedState = zl(1 | t, n, i, r));
}
function Cy(e, t) {
  return Eu(8390656, 8, e, t);
}
function Dh(e, t) {
  return $c(2048, 8, e, t);
}
function Hx(e, t) {
  return $c(4, 2, e, t);
}
function Gx(e, t) {
  return $c(4, 4, e, t);
}
function Kx(e, t) {
  if (typeof t == "function")
    return (
      (e = e()),
      t(e),
      function () {
        t(null);
      }
    );
  if (t != null)
    return (
      (e = e()),
      (t.current = e),
      function () {
        t.current = null;
      }
    );
}
function qx(e, t, n) {
  return (
    (n = n != null ? n.concat([e]) : null), $c(4, 4, Kx.bind(null, t, e), n)
  );
}
function Ih() {}
function Yx(e, t) {
  var n = Kn();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && _h(t, r[1])
    ? r[0]
    : ((n.memoizedState = [e, t]), e);
}
function Xx(e, t) {
  var n = Kn();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && _h(t, r[1])
    ? r[0]
    : ((e = e()), (n.memoizedState = [e, t]), e);
}
function Qx(e, t, n) {
  return Qo & 21
    ? (cr(n, t) || ((n = ex()), (it.lanes |= n), (Zo |= n), (e.baseState = !0)),
      t)
    : (e.baseState && ((e.baseState = !1), (dn = !0)), (e.memoizedState = n));
}
function KT(e, t) {
  var n = je;
  (je = n !== 0 && 4 > n ? n : 4), e(!0);
  var r = If.transition;
  If.transition = {};
  try {
    e(!1), t();
  } finally {
    (je = n), (If.transition = r);
  }
}
function Zx() {
  return Kn().memoizedState;
}
function qT(e, t, n) {
  var r = po(e);
  if (
    ((n = {
      lane: r,
      action: n,
      hasEagerState: !1,
      eagerState: null,
      next: null,
    }),
    Jx(e))
  )
    eS(t, n);
  else if (((n = Dx(e, t, n, r)), n !== null)) {
    var o = Zt();
    ur(n, e, r, o), tS(n, t, r);
  }
}
function YT(e, t, n) {
  var r = po(e),
    o = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null };
  if (Jx(e)) eS(t, o);
  else {
    var i = e.alternate;
    if (
      e.lanes === 0 &&
      (i === null || i.lanes === 0) &&
      ((i = t.lastRenderedReducer), i !== null)
    )
      try {
        var a = t.lastRenderedState,
          l = i(a, n);
        if (((o.hasEagerState = !0), (o.eagerState = l), cr(l, a))) {
          var s = t.interleaved;
          s === null
            ? ((o.next = o), wh(t))
            : ((o.next = s.next), (s.next = o)),
            (t.interleaved = o);
          return;
        }
      } catch {
      } finally {
      }
    (n = Dx(e, t, o, r)),
      n !== null && ((o = Zt()), ur(n, e, r, o), tS(n, t, r));
  }
}
function Jx(e) {
  var t = e.alternate;
  return e === it || (t !== null && t === it);
}
function eS(e, t) {
  fl = ec = !0;
  var n = e.pending;
  n === null ? (t.next = t) : ((t.next = n.next), (n.next = t)),
    (e.pending = t);
}
function tS(e, t, n) {
  if (n & 4194240) {
    var r = t.lanes;
    (r &= e.pendingLanes), (n |= r), (t.lanes = n), sh(e, n);
  }
}
var tc = {
    readContext: Gn,
    useCallback: Ut,
    useContext: Ut,
    useEffect: Ut,
    useImperativeHandle: Ut,
    useInsertionEffect: Ut,
    useLayoutEffect: Ut,
    useMemo: Ut,
    useReducer: Ut,
    useRef: Ut,
    useState: Ut,
    useDebugValue: Ut,
    useDeferredValue: Ut,
    useTransition: Ut,
    useMutableSource: Ut,
    useSyncExternalStore: Ut,
    useId: Ut,
    unstable_isNewReconciler: !1,
  },
  XT = {
    readContext: Gn,
    useCallback: function (e, t) {
      return (mr().memoizedState = [e, t === void 0 ? null : t]), e;
    },
    useContext: Gn,
    useEffect: Cy,
    useImperativeHandle: function (e, t, n) {
      return (
        (n = n != null ? n.concat([e]) : null),
        Eu(4194308, 4, Kx.bind(null, t, e), n)
      );
    },
    useLayoutEffect: function (e, t) {
      return Eu(4194308, 4, e, t);
    },
    useInsertionEffect: function (e, t) {
      return Eu(4, 2, e, t);
    },
    useMemo: function (e, t) {
      var n = mr();
      return (
        (t = t === void 0 ? null : t), (e = e()), (n.memoizedState = [e, t]), e
      );
    },
    useReducer: function (e, t, n) {
      var r = mr();
      return (
        (t = n !== void 0 ? n(t) : t),
        (r.memoizedState = r.baseState = t),
        (e = {
          pending: null,
          interleaved: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: e,
          lastRenderedState: t,
        }),
        (r.queue = e),
        (e = e.dispatch = qT.bind(null, it, e)),
        [r.memoizedState, e]
      );
    },
    useRef: function (e) {
      var t = mr();
      return (e = { current: e }), (t.memoizedState = e);
    },
    useState: wy,
    useDebugValue: Ih,
    useDeferredValue: function (e) {
      return (mr().memoizedState = e);
    },
    useTransition: function () {
      var e = wy(!1),
        t = e[0];
      return (e = KT.bind(null, e[1])), (mr().memoizedState = e), [t, e];
    },
    useMutableSource: function () {},
    useSyncExternalStore: function (e, t, n) {
      var r = it,
        o = mr();
      if (tt) {
        if (n === void 0) throw Error(Z(407));
        n = n();
      } else {
        if (((n = t()), _t === null)) throw Error(Z(349));
        Qo & 30 || Fx(r, t, n);
      }
      o.memoizedState = n;
      var i = { value: n, getSnapshot: t };
      return (
        (o.queue = i),
        Cy(zx.bind(null, r, i, e), [e]),
        (r.flags |= 2048),
        zl(9, jx.bind(null, r, i, n, t), void 0, null),
        n
      );
    },
    useId: function () {
      var e = mr(),
        t = _t.identifierPrefix;
      if (tt) {
        var n = Or,
          r = Nr;
        (n = (r & ~(1 << (32 - sr(r) - 1))).toString(32) + n),
          (t = ":" + t + "R" + n),
          (n = Fl++),
          0 < n && (t += "H" + n.toString(32)),
          (t += ":");
      } else (n = GT++), (t = ":" + t + "r" + n.toString(32) + ":");
      return (e.memoizedState = t);
    },
    unstable_isNewReconciler: !1,
  },
  QT = {
    readContext: Gn,
    useCallback: Yx,
    useContext: Gn,
    useEffect: Dh,
    useImperativeHandle: qx,
    useInsertionEffect: Hx,
    useLayoutEffect: Gx,
    useMemo: Xx,
    useReducer: Af,
    useRef: Wx,
    useState: function () {
      return Af(jl);
    },
    useDebugValue: Ih,
    useDeferredValue: function (e) {
      var t = Kn();
      return Qx(t, xt.memoizedState, e);
    },
    useTransition: function () {
      var e = Af(jl)[0],
        t = Kn().memoizedState;
      return [e, t];
    },
    useMutableSource: Lx,
    useSyncExternalStore: Bx,
    useId: Zx,
    unstable_isNewReconciler: !1,
  },
  ZT = {
    readContext: Gn,
    useCallback: Yx,
    useContext: Gn,
    useEffect: Dh,
    useImperativeHandle: qx,
    useInsertionEffect: Hx,
    useLayoutEffect: Gx,
    useMemo: Xx,
    useReducer: Nf,
    useRef: Wx,
    useState: function () {
      return Nf(jl);
    },
    useDebugValue: Ih,
    useDeferredValue: function (e) {
      var t = Kn();
      return xt === null ? (t.memoizedState = e) : Qx(t, xt.memoizedState, e);
    },
    useTransition: function () {
      var e = Nf(jl)[0],
        t = Kn().memoizedState;
      return [e, t];
    },
    useMutableSource: Lx,
    useSyncExternalStore: Bx,
    useId: Zx,
    unstable_isNewReconciler: !1,
  };
function Ji(e, t) {
  try {
    var n = "",
      r = t;
    do (n += T2(r)), (r = r.return);
    while (r);
    var o = n;
  } catch (i) {
    o =
      `
Error generating stack: ` +
      i.message +
      `
` +
      i.stack;
  }
  return { value: e, source: t, stack: o, digest: null };
}
function Of(e, t, n) {
  return { value: e, source: null, stack: n ?? null, digest: t ?? null };
}
function ev(e, t) {
  try {
    console.error(t.value);
  } catch (n) {
    setTimeout(function () {
      throw n;
    });
  }
}
var JT = typeof WeakMap == "function" ? WeakMap : Map;
function nS(e, t, n) {
  (n = Mr(-1, n)), (n.tag = 3), (n.payload = { element: null });
  var r = t.value;
  return (
    (n.callback = function () {
      rc || ((rc = !0), (cv = r)), ev(e, t);
    }),
    n
  );
}
function rS(e, t, n) {
  (n = Mr(-1, n)), (n.tag = 3);
  var r = e.type.getDerivedStateFromError;
  if (typeof r == "function") {
    var o = t.value;
    (n.payload = function () {
      return r(o);
    }),
      (n.callback = function () {
        ev(e, t);
      });
  }
  var i = e.stateNode;
  return (
    i !== null &&
      typeof i.componentDidCatch == "function" &&
      (n.callback = function () {
        ev(e, t),
          typeof r != "function" &&
            (fo === null ? (fo = new Set([this])) : fo.add(this));
        var a = t.stack;
        this.componentDidCatch(t.value, {
          componentStack: a !== null ? a : "",
        });
      }),
    n
  );
}
function Ry(e, t, n) {
  var r = e.pingCache;
  if (r === null) {
    r = e.pingCache = new JT();
    var o = new Set();
    r.set(t, o);
  } else (o = r.get(t)), o === void 0 && ((o = new Set()), r.set(t, o));
  o.has(n) || (o.add(n), (e = p_.bind(null, e, t, n)), t.then(e, e));
}
function Ey(e) {
  do {
    var t;
    if (
      ((t = e.tag === 13) &&
        ((t = e.memoizedState), (t = t !== null ? t.dehydrated !== null : !0)),
      t)
    )
      return e;
    e = e.return;
  } while (e !== null);
  return null;
}
function Ty(e, t, n, r, o) {
  return e.mode & 1
    ? ((e.flags |= 65536), (e.lanes = o), e)
    : (e === t
        ? (e.flags |= 65536)
        : ((e.flags |= 128),
          (n.flags |= 131072),
          (n.flags &= -52805),
          n.tag === 1 &&
            (n.alternate === null
              ? (n.tag = 17)
              : ((t = Mr(-1, 1)), (t.tag = 2), co(n, t, 1))),
          (n.lanes |= 1)),
      e);
}
var e_ = Vr.ReactCurrentOwner,
  dn = !1;
function Qt(e, t, n, r) {
  t.child = e === null ? Mx(t, null, n, r) : Qi(t, e.child, n, r);
}
function _y(e, t, n, r, o) {
  n = n.render;
  var i = t.ref;
  return (
    Ui(t, o),
    (r = Ph(e, t, n, r, i, o)),
    (n = kh()),
    e !== null && !dn
      ? ((t.updateQueue = e.updateQueue),
        (t.flags &= -2053),
        (e.lanes &= ~o),
        jr(e, t, o))
      : (tt && n && mh(t), (t.flags |= 1), Qt(e, t, r, o), t.child)
  );
}
function Py(e, t, n, r, o) {
  if (e === null) {
    var i = n.type;
    return typeof i == "function" &&
      !Fh(i) &&
      i.defaultProps === void 0 &&
      n.compare === null &&
      n.defaultProps === void 0
      ? ((t.tag = 15), (t.type = i), oS(e, t, i, r, o))
      : ((e = ku(n.type, null, r, t, t.mode, o)),
        (e.ref = t.ref),
        (e.return = t),
        (t.child = e));
  }
  if (((i = e.child), !(e.lanes & o))) {
    var a = i.memoizedProps;
    if (
      ((n = n.compare), (n = n !== null ? n : Nl), n(a, r) && e.ref === t.ref)
    )
      return jr(e, t, o);
  }
  return (
    (t.flags |= 1),
    (e = vo(i, r)),
    (e.ref = t.ref),
    (e.return = t),
    (t.child = e)
  );
}
function oS(e, t, n, r, o) {
  if (e !== null) {
    var i = e.memoizedProps;
    if (Nl(i, r) && e.ref === t.ref)
      if (((dn = !1), (t.pendingProps = r = i), (e.lanes & o) !== 0))
        e.flags & 131072 && (dn = !0);
      else return (t.lanes = e.lanes), jr(e, t, o);
  }
  return tv(e, t, n, r, o);
}
function iS(e, t, n) {
  var r = t.pendingProps,
    o = r.children,
    i = e !== null ? e.memoizedState : null;
  if (r.mode === "hidden")
    if (!(t.mode & 1))
      (t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        Ge(Oi, Sn),
        (Sn |= n);
    else {
      if (!(n & 1073741824))
        return (
          (e = i !== null ? i.baseLanes | n : n),
          (t.lanes = t.childLanes = 1073741824),
          (t.memoizedState = {
            baseLanes: e,
            cachePool: null,
            transitions: null,
          }),
          (t.updateQueue = null),
          Ge(Oi, Sn),
          (Sn |= e),
          null
        );
      (t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        (r = i !== null ? i.baseLanes : n),
        Ge(Oi, Sn),
        (Sn |= r);
    }
  else
    i !== null ? ((r = i.baseLanes | n), (t.memoizedState = null)) : (r = n),
      Ge(Oi, Sn),
      (Sn |= r);
  return Qt(e, t, o, n), t.child;
}
function aS(e, t) {
  var n = t.ref;
  ((e === null && n !== null) || (e !== null && e.ref !== n)) &&
    ((t.flags |= 512), (t.flags |= 2097152));
}
function tv(e, t, n, r, o) {
  var i = pn(n) ? Yo : Kt.current;
  return (
    (i = Yi(t, i)),
    Ui(t, o),
    (n = Ph(e, t, n, r, i, o)),
    (r = kh()),
    e !== null && !dn
      ? ((t.updateQueue = e.updateQueue),
        (t.flags &= -2053),
        (e.lanes &= ~o),
        jr(e, t, o))
      : (tt && r && mh(t), (t.flags |= 1), Qt(e, t, n, o), t.child)
  );
}
function ky(e, t, n, r, o) {
  if (pn(n)) {
    var i = !0;
    Ku(t);
  } else i = !1;
  if ((Ui(t, o), t.stateNode === null))
    Tu(e, t), Nx(t, n, r), Jp(t, n, r, o), (r = !0);
  else if (e === null) {
    var a = t.stateNode,
      l = t.memoizedProps;
    a.props = l;
    var s = a.context,
      u = n.contextType;
    typeof u == "object" && u !== null
      ? (u = Gn(u))
      : ((u = pn(n) ? Yo : Kt.current), (u = Yi(t, u)));
    var c = n.getDerivedStateFromProps,
      d =
        typeof c == "function" ||
        typeof a.getSnapshotBeforeUpdate == "function";
    d ||
      (typeof a.UNSAFE_componentWillReceiveProps != "function" &&
        typeof a.componentWillReceiveProps != "function") ||
      ((l !== r || s !== u) && xy(t, a, r, u)),
      (Zr = !1);
    var f = t.memoizedState;
    (a.state = f),
      Zu(t, r, a, o),
      (s = t.memoizedState),
      l !== r || f !== s || fn.current || Zr
        ? (typeof c == "function" && (Zp(t, n, c, r), (s = t.memoizedState)),
          (l = Zr || by(t, n, l, r, f, s, u))
            ? (d ||
                (typeof a.UNSAFE_componentWillMount != "function" &&
                  typeof a.componentWillMount != "function") ||
                (typeof a.componentWillMount == "function" &&
                  a.componentWillMount(),
                typeof a.UNSAFE_componentWillMount == "function" &&
                  a.UNSAFE_componentWillMount()),
              typeof a.componentDidMount == "function" && (t.flags |= 4194308))
            : (typeof a.componentDidMount == "function" && (t.flags |= 4194308),
              (t.memoizedProps = r),
              (t.memoizedState = s)),
          (a.props = r),
          (a.state = s),
          (a.context = u),
          (r = l))
        : (typeof a.componentDidMount == "function" && (t.flags |= 4194308),
          (r = !1));
  } else {
    (a = t.stateNode),
      Ix(e, t),
      (l = t.memoizedProps),
      (u = t.type === t.elementType ? l : rr(t.type, l)),
      (a.props = u),
      (d = t.pendingProps),
      (f = a.context),
      (s = n.contextType),
      typeof s == "object" && s !== null
        ? (s = Gn(s))
        : ((s = pn(n) ? Yo : Kt.current), (s = Yi(t, s)));
    var p = n.getDerivedStateFromProps;
    (c =
      typeof p == "function" ||
      typeof a.getSnapshotBeforeUpdate == "function") ||
      (typeof a.UNSAFE_componentWillReceiveProps != "function" &&
        typeof a.componentWillReceiveProps != "function") ||
      ((l !== d || f !== s) && xy(t, a, r, s)),
      (Zr = !1),
      (f = t.memoizedState),
      (a.state = f),
      Zu(t, r, a, o);
    var h = t.memoizedState;
    l !== d || f !== h || fn.current || Zr
      ? (typeof p == "function" && (Zp(t, n, p, r), (h = t.memoizedState)),
        (u = Zr || by(t, n, u, r, f, h, s) || !1)
          ? (c ||
              (typeof a.UNSAFE_componentWillUpdate != "function" &&
                typeof a.componentWillUpdate != "function") ||
              (typeof a.componentWillUpdate == "function" &&
                a.componentWillUpdate(r, h, s),
              typeof a.UNSAFE_componentWillUpdate == "function" &&
                a.UNSAFE_componentWillUpdate(r, h, s)),
            typeof a.componentDidUpdate == "function" && (t.flags |= 4),
            typeof a.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024))
          : (typeof a.componentDidUpdate != "function" ||
              (l === e.memoizedProps && f === e.memoizedState) ||
              (t.flags |= 4),
            typeof a.getSnapshotBeforeUpdate != "function" ||
              (l === e.memoizedProps && f === e.memoizedState) ||
              (t.flags |= 1024),
            (t.memoizedProps = r),
            (t.memoizedState = h)),
        (a.props = r),
        (a.state = h),
        (a.context = s),
        (r = u))
      : (typeof a.componentDidUpdate != "function" ||
          (l === e.memoizedProps && f === e.memoizedState) ||
          (t.flags |= 4),
        typeof a.getSnapshotBeforeUpdate != "function" ||
          (l === e.memoizedProps && f === e.memoizedState) ||
          (t.flags |= 1024),
        (r = !1));
  }
  return nv(e, t, n, r, i, o);
}
function nv(e, t, n, r, o, i) {
  aS(e, t);
  var a = (t.flags & 128) !== 0;
  if (!r && !a) return o && vy(t, n, !1), jr(e, t, i);
  (r = t.stateNode), (e_.current = t);
  var l =
    a && typeof n.getDerivedStateFromError != "function" ? null : r.render();
  return (
    (t.flags |= 1),
    e !== null && a
      ? ((t.child = Qi(t, e.child, null, i)), (t.child = Qi(t, null, l, i)))
      : Qt(e, t, l, i),
    (t.memoizedState = r.state),
    o && vy(t, n, !0),
    t.child
  );
}
function lS(e) {
  var t = e.stateNode;
  t.pendingContext
    ? py(e, t.pendingContext, t.pendingContext !== t.context)
    : t.context && py(e, t.context, !1),
    Rh(e, t.containerInfo);
}
function Dy(e, t, n, r, o) {
  return Xi(), yh(o), (t.flags |= 256), Qt(e, t, n, r), t.child;
}
var rv = { dehydrated: null, treeContext: null, retryLane: 0 };
function ov(e) {
  return { baseLanes: e, cachePool: null, transitions: null };
}
function sS(e, t, n) {
  var r = t.pendingProps,
    o = ot.current,
    i = !1,
    a = (t.flags & 128) !== 0,
    l;
  if (
    ((l = a) ||
      (l = e !== null && e.memoizedState === null ? !1 : (o & 2) !== 0),
    l
      ? ((i = !0), (t.flags &= -129))
      : (e === null || e.memoizedState !== null) && (o |= 1),
    Ge(ot, o & 1),
    e === null)
  )
    return (
      Xp(t),
      (e = t.memoizedState),
      e !== null && ((e = e.dehydrated), e !== null)
        ? (t.mode & 1
            ? e.data === "$!"
              ? (t.lanes = 8)
              : (t.lanes = 1073741824)
            : (t.lanes = 1),
          null)
        : ((a = r.children),
          (e = r.fallback),
          i
            ? ((r = t.mode),
              (i = t.child),
              (a = { mode: "hidden", children: a }),
              !(r & 1) && i !== null
                ? ((i.childLanes = 0), (i.pendingProps = a))
                : (i = Fc(a, r, 0, null)),
              (e = Ko(e, r, n, null)),
              (i.return = t),
              (e.return = t),
              (i.sibling = e),
              (t.child = i),
              (t.child.memoizedState = ov(n)),
              (t.memoizedState = rv),
              e)
            : Ah(t, a))
    );
  if (((o = e.memoizedState), o !== null && ((l = o.dehydrated), l !== null)))
    return t_(e, t, a, r, l, o, n);
  if (i) {
    (i = r.fallback), (a = t.mode), (o = e.child), (l = o.sibling);
    var s = { mode: "hidden", children: r.children };
    return (
      !(a & 1) && t.child !== o
        ? ((r = t.child),
          (r.childLanes = 0),
          (r.pendingProps = s),
          (t.deletions = null))
        : ((r = vo(o, s)), (r.subtreeFlags = o.subtreeFlags & 14680064)),
      l !== null ? (i = vo(l, i)) : ((i = Ko(i, a, n, null)), (i.flags |= 2)),
      (i.return = t),
      (r.return = t),
      (r.sibling = i),
      (t.child = r),
      (r = i),
      (i = t.child),
      (a = e.child.memoizedState),
      (a =
        a === null
          ? ov(n)
          : {
              baseLanes: a.baseLanes | n,
              cachePool: null,
              transitions: a.transitions,
            }),
      (i.memoizedState = a),
      (i.childLanes = e.childLanes & ~n),
      (t.memoizedState = rv),
      r
    );
  }
  return (
    (i = e.child),
    (e = i.sibling),
    (r = vo(i, { mode: "visible", children: r.children })),
    !(t.mode & 1) && (r.lanes = n),
    (r.return = t),
    (r.sibling = null),
    e !== null &&
      ((n = t.deletions),
      n === null ? ((t.deletions = [e]), (t.flags |= 16)) : n.push(e)),
    (t.child = r),
    (t.memoizedState = null),
    r
  );
}
function Ah(e, t) {
  return (
    (t = Fc({ mode: "visible", children: t }, e.mode, 0, null)),
    (t.return = e),
    (e.child = t)
  );
}
function Xs(e, t, n, r) {
  return (
    r !== null && yh(r),
    Qi(t, e.child, null, n),
    (e = Ah(t, t.pendingProps.children)),
    (e.flags |= 2),
    (t.memoizedState = null),
    e
  );
}
function t_(e, t, n, r, o, i, a) {
  if (n)
    return t.flags & 256
      ? ((t.flags &= -257), (r = Of(Error(Z(422)))), Xs(e, t, a, r))
      : t.memoizedState !== null
      ? ((t.child = e.child), (t.flags |= 128), null)
      : ((i = r.fallback),
        (o = t.mode),
        (r = Fc({ mode: "visible", children: r.children }, o, 0, null)),
        (i = Ko(i, o, a, null)),
        (i.flags |= 2),
        (r.return = t),
        (i.return = t),
        (r.sibling = i),
        (t.child = r),
        t.mode & 1 && Qi(t, e.child, null, a),
        (t.child.memoizedState = ov(a)),
        (t.memoizedState = rv),
        i);
  if (!(t.mode & 1)) return Xs(e, t, a, null);
  if (o.data === "$!") {
    if (((r = o.nextSibling && o.nextSibling.dataset), r)) var l = r.dgst;
    return (r = l), (i = Error(Z(419))), (r = Of(i, r, void 0)), Xs(e, t, a, r);
  }
  if (((l = (a & e.childLanes) !== 0), dn || l)) {
    if (((r = _t), r !== null)) {
      switch (a & -a) {
        case 4:
          o = 2;
          break;
        case 16:
          o = 8;
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
          o = 32;
          break;
        case 536870912:
          o = 268435456;
          break;
        default:
          o = 0;
      }
      (o = o & (r.suspendedLanes | a) ? 0 : o),
        o !== 0 &&
          o !== i.retryLane &&
          ((i.retryLane = o), Fr(e, o), ur(r, e, o, -1));
    }
    return Bh(), (r = Of(Error(Z(421)))), Xs(e, t, a, r);
  }
  return o.data === "$?"
    ? ((t.flags |= 128),
      (t.child = e.child),
      (t = v_.bind(null, e)),
      (o._reactRetry = t),
      null)
    : ((e = i.treeContext),
      (Cn = uo(o.nextSibling)),
      (En = t),
      (tt = !0),
      (ar = null),
      e !== null &&
        ((Fn[jn++] = Nr),
        (Fn[jn++] = Or),
        (Fn[jn++] = Xo),
        (Nr = e.id),
        (Or = e.overflow),
        (Xo = t)),
      (t = Ah(t, r.children)),
      (t.flags |= 4096),
      t);
}
function Iy(e, t, n) {
  e.lanes |= t;
  var r = e.alternate;
  r !== null && (r.lanes |= t), Qp(e.return, t, n);
}
function Mf(e, t, n, r, o) {
  var i = e.memoizedState;
  i === null
    ? (e.memoizedState = {
        isBackwards: t,
        rendering: null,
        renderingStartTime: 0,
        last: r,
        tail: n,
        tailMode: o,
      })
    : ((i.isBackwards = t),
      (i.rendering = null),
      (i.renderingStartTime = 0),
      (i.last = r),
      (i.tail = n),
      (i.tailMode = o));
}
function uS(e, t, n) {
  var r = t.pendingProps,
    o = r.revealOrder,
    i = r.tail;
  if ((Qt(e, t, r.children, n), (r = ot.current), r & 2))
    (r = (r & 1) | 2), (t.flags |= 128);
  else {
    if (e !== null && e.flags & 128)
      e: for (e = t.child; e !== null; ) {
        if (e.tag === 13) e.memoizedState !== null && Iy(e, n, t);
        else if (e.tag === 19) Iy(e, n, t);
        else if (e.child !== null) {
          (e.child.return = e), (e = e.child);
          continue;
        }
        if (e === t) break e;
        for (; e.sibling === null; ) {
          if (e.return === null || e.return === t) break e;
          e = e.return;
        }
        (e.sibling.return = e.return), (e = e.sibling);
      }
    r &= 1;
  }
  if ((Ge(ot, r), !(t.mode & 1))) t.memoizedState = null;
  else
    switch (o) {
      case "forwards":
        for (n = t.child, o = null; n !== null; )
          (e = n.alternate),
            e !== null && Ju(e) === null && (o = n),
            (n = n.sibling);
        (n = o),
          n === null
            ? ((o = t.child), (t.child = null))
            : ((o = n.sibling), (n.sibling = null)),
          Mf(t, !1, o, n, i);
        break;
      case "backwards":
        for (n = null, o = t.child, t.child = null; o !== null; ) {
          if (((e = o.alternate), e !== null && Ju(e) === null)) {
            t.child = o;
            break;
          }
          (e = o.sibling), (o.sibling = n), (n = o), (o = e);
        }
        Mf(t, !0, n, null, i);
        break;
      case "together":
        Mf(t, !1, null, null, void 0);
        break;
      default:
        t.memoizedState = null;
    }
  return t.child;
}
function Tu(e, t) {
  !(t.mode & 1) &&
    e !== null &&
    ((e.alternate = null), (t.alternate = null), (t.flags |= 2));
}
function jr(e, t, n) {
  if (
    (e !== null && (t.dependencies = e.dependencies),
    (Zo |= t.lanes),
    !(n & t.childLanes))
  )
    return null;
  if (e !== null && t.child !== e.child) throw Error(Z(153));
  if (t.child !== null) {
    for (
      e = t.child, n = vo(e, e.pendingProps), t.child = n, n.return = t;
      e.sibling !== null;

    )
      (e = e.sibling), (n = n.sibling = vo(e, e.pendingProps)), (n.return = t);
    n.sibling = null;
  }
  return t.child;
}
function n_(e, t, n) {
  switch (t.tag) {
    case 3:
      lS(t), Xi();
      break;
    case 5:
      $x(t);
      break;
    case 1:
      pn(t.type) && Ku(t);
      break;
    case 4:
      Rh(t, t.stateNode.containerInfo);
      break;
    case 10:
      var r = t.type._context,
        o = t.memoizedProps.value;
      Ge(Xu, r._currentValue), (r._currentValue = o);
      break;
    case 13:
      if (((r = t.memoizedState), r !== null))
        return r.dehydrated !== null
          ? (Ge(ot, ot.current & 1), (t.flags |= 128), null)
          : n & t.child.childLanes
          ? sS(e, t, n)
          : (Ge(ot, ot.current & 1),
            (e = jr(e, t, n)),
            e !== null ? e.sibling : null);
      Ge(ot, ot.current & 1);
      break;
    case 19:
      if (((r = (n & t.childLanes) !== 0), e.flags & 128)) {
        if (r) return uS(e, t, n);
        t.flags |= 128;
      }
      if (
        ((o = t.memoizedState),
        o !== null &&
          ((o.rendering = null), (o.tail = null), (o.lastEffect = null)),
        Ge(ot, ot.current),
        r)
      )
        break;
      return null;
    case 22:
    case 23:
      return (t.lanes = 0), iS(e, t, n);
  }
  return jr(e, t, n);
}
var cS, iv, dS, fS;
cS = function (e, t) {
  for (var n = t.child; n !== null; ) {
    if (n.tag === 5 || n.tag === 6) e.appendChild(n.stateNode);
    else if (n.tag !== 4 && n.child !== null) {
      (n.child.return = n), (n = n.child);
      continue;
    }
    if (n === t) break;
    for (; n.sibling === null; ) {
      if (n.return === null || n.return === t) return;
      n = n.return;
    }
    (n.sibling.return = n.return), (n = n.sibling);
  }
};
iv = function () {};
dS = function (e, t, n, r) {
  var o = e.memoizedProps;
  if (o !== r) {
    (e = t.stateNode), Vo(wr.current);
    var i = null;
    switch (n) {
      case "input":
        (o = _p(e, o)), (r = _p(e, r)), (i = []);
        break;
      case "select":
        (o = at({}, o, { value: void 0 })),
          (r = at({}, r, { value: void 0 })),
          (i = []);
        break;
      case "textarea":
        (o = Dp(e, o)), (r = Dp(e, r)), (i = []);
        break;
      default:
        typeof o.onClick != "function" &&
          typeof r.onClick == "function" &&
          (e.onclick = Hu);
    }
    Ap(n, r);
    var a;
    n = null;
    for (u in o)
      if (!r.hasOwnProperty(u) && o.hasOwnProperty(u) && o[u] != null)
        if (u === "style") {
          var l = o[u];
          for (a in l) l.hasOwnProperty(a) && (n || (n = {}), (n[a] = ""));
        } else
          u !== "dangerouslySetInnerHTML" &&
            u !== "children" &&
            u !== "suppressContentEditableWarning" &&
            u !== "suppressHydrationWarning" &&
            u !== "autoFocus" &&
            (Tl.hasOwnProperty(u)
              ? i || (i = [])
              : (i = i || []).push(u, null));
    for (u in r) {
      var s = r[u];
      if (
        ((l = o != null ? o[u] : void 0),
        r.hasOwnProperty(u) && s !== l && (s != null || l != null))
      )
        if (u === "style")
          if (l) {
            for (a in l)
              !l.hasOwnProperty(a) ||
                (s && s.hasOwnProperty(a)) ||
                (n || (n = {}), (n[a] = ""));
            for (a in s)
              s.hasOwnProperty(a) &&
                l[a] !== s[a] &&
                (n || (n = {}), (n[a] = s[a]));
          } else n || (i || (i = []), i.push(u, n)), (n = s);
        else
          u === "dangerouslySetInnerHTML"
            ? ((s = s ? s.__html : void 0),
              (l = l ? l.__html : void 0),
              s != null && l !== s && (i = i || []).push(u, s))
            : u === "children"
            ? (typeof s != "string" && typeof s != "number") ||
              (i = i || []).push(u, "" + s)
            : u !== "suppressContentEditableWarning" &&
              u !== "suppressHydrationWarning" &&
              (Tl.hasOwnProperty(u)
                ? (s != null && u === "onScroll" && Ye("scroll", e),
                  i || l === s || (i = []))
                : (i = i || []).push(u, s));
    }
    n && (i = i || []).push("style", n);
    var u = i;
    (t.updateQueue = u) && (t.flags |= 4);
  }
};
fS = function (e, t, n, r) {
  n !== r && (t.flags |= 4);
};
function Na(e, t) {
  if (!tt)
    switch (e.tailMode) {
      case "hidden":
        t = e.tail;
        for (var n = null; t !== null; )
          t.alternate !== null && (n = t), (t = t.sibling);
        n === null ? (e.tail = null) : (n.sibling = null);
        break;
      case "collapsed":
        n = e.tail;
        for (var r = null; n !== null; )
          n.alternate !== null && (r = n), (n = n.sibling);
        r === null
          ? t || e.tail === null
            ? (e.tail = null)
            : (e.tail.sibling = null)
          : (r.sibling = null);
    }
}
function Vt(e) {
  var t = e.alternate !== null && e.alternate.child === e.child,
    n = 0,
    r = 0;
  if (t)
    for (var o = e.child; o !== null; )
      (n |= o.lanes | o.childLanes),
        (r |= o.subtreeFlags & 14680064),
        (r |= o.flags & 14680064),
        (o.return = e),
        (o = o.sibling);
  else
    for (o = e.child; o !== null; )
      (n |= o.lanes | o.childLanes),
        (r |= o.subtreeFlags),
        (r |= o.flags),
        (o.return = e),
        (o = o.sibling);
  return (e.subtreeFlags |= r), (e.childLanes = n), t;
}
function r_(e, t, n) {
  var r = t.pendingProps;
  switch ((gh(t), t.tag)) {
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
      return Vt(t), null;
    case 1:
      return pn(t.type) && Gu(), Vt(t), null;
    case 3:
      return (
        (r = t.stateNode),
        Zi(),
        Qe(fn),
        Qe(Kt),
        Th(),
        r.pendingContext &&
          ((r.context = r.pendingContext), (r.pendingContext = null)),
        (e === null || e.child === null) &&
          (qs(t)
            ? (t.flags |= 4)
            : e === null ||
              (e.memoizedState.isDehydrated && !(t.flags & 256)) ||
              ((t.flags |= 1024), ar !== null && (pv(ar), (ar = null)))),
        iv(e, t),
        Vt(t),
        null
      );
    case 5:
      Eh(t);
      var o = Vo(Bl.current);
      if (((n = t.type), e !== null && t.stateNode != null))
        dS(e, t, n, r, o),
          e.ref !== t.ref && ((t.flags |= 512), (t.flags |= 2097152));
      else {
        if (!r) {
          if (t.stateNode === null) throw Error(Z(166));
          return Vt(t), null;
        }
        if (((e = Vo(wr.current)), qs(t))) {
          (r = t.stateNode), (n = t.type);
          var i = t.memoizedProps;
          switch (((r[br] = t), (r[$l] = i), (e = (t.mode & 1) !== 0), n)) {
            case "dialog":
              Ye("cancel", r), Ye("close", r);
              break;
            case "iframe":
            case "object":
            case "embed":
              Ye("load", r);
              break;
            case "video":
            case "audio":
              for (o = 0; o < tl.length; o++) Ye(tl[o], r);
              break;
            case "source":
              Ye("error", r);
              break;
            case "img":
            case "image":
            case "link":
              Ye("error", r), Ye("load", r);
              break;
            case "details":
              Ye("toggle", r);
              break;
            case "input":
              jg(r, i), Ye("invalid", r);
              break;
            case "select":
              (r._wrapperState = { wasMultiple: !!i.multiple }),
                Ye("invalid", r);
              break;
            case "textarea":
              Ug(r, i), Ye("invalid", r);
          }
          Ap(n, i), (o = null);
          for (var a in i)
            if (i.hasOwnProperty(a)) {
              var l = i[a];
              a === "children"
                ? typeof l == "string"
                  ? r.textContent !== l &&
                    (i.suppressHydrationWarning !== !0 &&
                      Ks(r.textContent, l, e),
                    (o = ["children", l]))
                  : typeof l == "number" &&
                    r.textContent !== "" + l &&
                    (i.suppressHydrationWarning !== !0 &&
                      Ks(r.textContent, l, e),
                    (o = ["children", "" + l]))
                : Tl.hasOwnProperty(a) &&
                  l != null &&
                  a === "onScroll" &&
                  Ye("scroll", r);
            }
          switch (n) {
            case "input":
              Fs(r), zg(r, i, !0);
              break;
            case "textarea":
              Fs(r), Vg(r);
              break;
            case "select":
            case "option":
              break;
            default:
              typeof i.onClick == "function" && (r.onclick = Hu);
          }
          (r = o), (t.updateQueue = r), r !== null && (t.flags |= 4);
        } else {
          (a = o.nodeType === 9 ? o : o.ownerDocument),
            e === "http://www.w3.org/1999/xhtml" && (e = Fb(n)),
            e === "http://www.w3.org/1999/xhtml"
              ? n === "script"
                ? ((e = a.createElement("div")),
                  (e.innerHTML = "<script></script>"),
                  (e = e.removeChild(e.firstChild)))
                : typeof r.is == "string"
                ? (e = a.createElement(n, { is: r.is }))
                : ((e = a.createElement(n)),
                  n === "select" &&
                    ((a = e),
                    r.multiple
                      ? (a.multiple = !0)
                      : r.size && (a.size = r.size)))
              : (e = a.createElementNS(e, n)),
            (e[br] = t),
            (e[$l] = r),
            cS(e, t, !1, !1),
            (t.stateNode = e);
          e: {
            switch (((a = Np(n, r)), n)) {
              case "dialog":
                Ye("cancel", e), Ye("close", e), (o = r);
                break;
              case "iframe":
              case "object":
              case "embed":
                Ye("load", e), (o = r);
                break;
              case "video":
              case "audio":
                for (o = 0; o < tl.length; o++) Ye(tl[o], e);
                o = r;
                break;
              case "source":
                Ye("error", e), (o = r);
                break;
              case "img":
              case "image":
              case "link":
                Ye("error", e), Ye("load", e), (o = r);
                break;
              case "details":
                Ye("toggle", e), (o = r);
                break;
              case "input":
                jg(e, r), (o = _p(e, r)), Ye("invalid", e);
                break;
              case "option":
                o = r;
                break;
              case "select":
                (e._wrapperState = { wasMultiple: !!r.multiple }),
                  (o = at({}, r, { value: void 0 })),
                  Ye("invalid", e);
                break;
              case "textarea":
                Ug(e, r), (o = Dp(e, r)), Ye("invalid", e);
                break;
              default:
                o = r;
            }
            Ap(n, o), (l = o);
            for (i in l)
              if (l.hasOwnProperty(i)) {
                var s = l[i];
                i === "style"
                  ? Ub(e, s)
                  : i === "dangerouslySetInnerHTML"
                  ? ((s = s ? s.__html : void 0), s != null && jb(e, s))
                  : i === "children"
                  ? typeof s == "string"
                    ? (n !== "textarea" || s !== "") && _l(e, s)
                    : typeof s == "number" && _l(e, "" + s)
                  : i !== "suppressContentEditableWarning" &&
                    i !== "suppressHydrationWarning" &&
                    i !== "autoFocus" &&
                    (Tl.hasOwnProperty(i)
                      ? s != null && i === "onScroll" && Ye("scroll", e)
                      : s != null && nh(e, i, s, a));
              }
            switch (n) {
              case "input":
                Fs(e), zg(e, r, !1);
                break;
              case "textarea":
                Fs(e), Vg(e);
                break;
              case "option":
                r.value != null && e.setAttribute("value", "" + xo(r.value));
                break;
              case "select":
                (e.multiple = !!r.multiple),
                  (i = r.value),
                  i != null
                    ? Bi(e, !!r.multiple, i, !1)
                    : r.defaultValue != null &&
                      Bi(e, !!r.multiple, r.defaultValue, !0);
                break;
              default:
                typeof o.onClick == "function" && (e.onclick = Hu);
            }
            switch (n) {
              case "button":
              case "input":
              case "select":
              case "textarea":
                r = !!r.autoFocus;
                break e;
              case "img":
                r = !0;
                break e;
              default:
                r = !1;
            }
          }
          r && (t.flags |= 4);
        }
        t.ref !== null && ((t.flags |= 512), (t.flags |= 2097152));
      }
      return Vt(t), null;
    case 6:
      if (e && t.stateNode != null) fS(e, t, e.memoizedProps, r);
      else {
        if (typeof r != "string" && t.stateNode === null) throw Error(Z(166));
        if (((n = Vo(Bl.current)), Vo(wr.current), qs(t))) {
          if (
            ((r = t.stateNode),
            (n = t.memoizedProps),
            (r[br] = t),
            (i = r.nodeValue !== n) && ((e = En), e !== null))
          )
            switch (e.tag) {
              case 3:
                Ks(r.nodeValue, n, (e.mode & 1) !== 0);
                break;
              case 5:
                e.memoizedProps.suppressHydrationWarning !== !0 &&
                  Ks(r.nodeValue, n, (e.mode & 1) !== 0);
            }
          i && (t.flags |= 4);
        } else
          (r = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(r)),
            (r[br] = t),
            (t.stateNode = r);
      }
      return Vt(t), null;
    case 13:
      if (
        (Qe(ot),
        (r = t.memoizedState),
        e === null ||
          (e.memoizedState !== null && e.memoizedState.dehydrated !== null))
      ) {
        if (tt && Cn !== null && t.mode & 1 && !(t.flags & 128))
          kx(), Xi(), (t.flags |= 98560), (i = !1);
        else if (((i = qs(t)), r !== null && r.dehydrated !== null)) {
          if (e === null) {
            if (!i) throw Error(Z(318));
            if (
              ((i = t.memoizedState),
              (i = i !== null ? i.dehydrated : null),
              !i)
            )
              throw Error(Z(317));
            i[br] = t;
          } else
            Xi(), !(t.flags & 128) && (t.memoizedState = null), (t.flags |= 4);
          Vt(t), (i = !1);
        } else ar !== null && (pv(ar), (ar = null)), (i = !0);
        if (!i) return t.flags & 65536 ? t : null;
      }
      return t.flags & 128
        ? ((t.lanes = n), t)
        : ((r = r !== null),
          r !== (e !== null && e.memoizedState !== null) &&
            r &&
            ((t.child.flags |= 8192),
            t.mode & 1 &&
              (e === null || ot.current & 1 ? St === 0 && (St = 3) : Bh())),
          t.updateQueue !== null && (t.flags |= 4),
          Vt(t),
          null);
    case 4:
      return (
        Zi(), iv(e, t), e === null && Ol(t.stateNode.containerInfo), Vt(t), null
      );
    case 10:
      return Sh(t.type._context), Vt(t), null;
    case 17:
      return pn(t.type) && Gu(), Vt(t), null;
    case 19:
      if ((Qe(ot), (i = t.memoizedState), i === null)) return Vt(t), null;
      if (((r = (t.flags & 128) !== 0), (a = i.rendering), a === null))
        if (r) Na(i, !1);
        else {
          if (St !== 0 || (e !== null && e.flags & 128))
            for (e = t.child; e !== null; ) {
              if (((a = Ju(e)), a !== null)) {
                for (
                  t.flags |= 128,
                    Na(i, !1),
                    r = a.updateQueue,
                    r !== null && ((t.updateQueue = r), (t.flags |= 4)),
                    t.subtreeFlags = 0,
                    r = n,
                    n = t.child;
                  n !== null;

                )
                  (i = n),
                    (e = r),
                    (i.flags &= 14680066),
                    (a = i.alternate),
                    a === null
                      ? ((i.childLanes = 0),
                        (i.lanes = e),
                        (i.child = null),
                        (i.subtreeFlags = 0),
                        (i.memoizedProps = null),
                        (i.memoizedState = null),
                        (i.updateQueue = null),
                        (i.dependencies = null),
                        (i.stateNode = null))
                      : ((i.childLanes = a.childLanes),
                        (i.lanes = a.lanes),
                        (i.child = a.child),
                        (i.subtreeFlags = 0),
                        (i.deletions = null),
                        (i.memoizedProps = a.memoizedProps),
                        (i.memoizedState = a.memoizedState),
                        (i.updateQueue = a.updateQueue),
                        (i.type = a.type),
                        (e = a.dependencies),
                        (i.dependencies =
                          e === null
                            ? null
                            : {
                                lanes: e.lanes,
                                firstContext: e.firstContext,
                              })),
                    (n = n.sibling);
                return Ge(ot, (ot.current & 1) | 2), t.child;
              }
              e = e.sibling;
            }
          i.tail !== null &&
            vt() > ea &&
            ((t.flags |= 128), (r = !0), Na(i, !1), (t.lanes = 4194304));
        }
      else {
        if (!r)
          if (((e = Ju(a)), e !== null)) {
            if (
              ((t.flags |= 128),
              (r = !0),
              (n = e.updateQueue),
              n !== null && ((t.updateQueue = n), (t.flags |= 4)),
              Na(i, !0),
              i.tail === null && i.tailMode === "hidden" && !a.alternate && !tt)
            )
              return Vt(t), null;
          } else
            2 * vt() - i.renderingStartTime > ea &&
              n !== 1073741824 &&
              ((t.flags |= 128), (r = !0), Na(i, !1), (t.lanes = 4194304));
        i.isBackwards
          ? ((a.sibling = t.child), (t.child = a))
          : ((n = i.last),
            n !== null ? (n.sibling = a) : (t.child = a),
            (i.last = a));
      }
      return i.tail !== null
        ? ((t = i.tail),
          (i.rendering = t),
          (i.tail = t.sibling),
          (i.renderingStartTime = vt()),
          (t.sibling = null),
          (n = ot.current),
          Ge(ot, r ? (n & 1) | 2 : n & 1),
          t)
        : (Vt(t), null);
    case 22:
    case 23:
      return (
        Lh(),
        (r = t.memoizedState !== null),
        e !== null && (e.memoizedState !== null) !== r && (t.flags |= 8192),
        r && t.mode & 1
          ? Sn & 1073741824 && (Vt(t), t.subtreeFlags & 6 && (t.flags |= 8192))
          : Vt(t),
        null
      );
    case 24:
      return null;
    case 25:
      return null;
  }
  throw Error(Z(156, t.tag));
}
function o_(e, t) {
  switch ((gh(t), t.tag)) {
    case 1:
      return (
        pn(t.type) && Gu(),
        (e = t.flags),
        e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 3:
      return (
        Zi(),
        Qe(fn),
        Qe(Kt),
        Th(),
        (e = t.flags),
        e & 65536 && !(e & 128) ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 5:
      return Eh(t), null;
    case 13:
      if (
        (Qe(ot), (e = t.memoizedState), e !== null && e.dehydrated !== null)
      ) {
        if (t.alternate === null) throw Error(Z(340));
        Xi();
      }
      return (
        (e = t.flags), e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 19:
      return Qe(ot), null;
    case 4:
      return Zi(), null;
    case 10:
      return Sh(t.type._context), null;
    case 22:
    case 23:
      return Lh(), null;
    case 24:
      return null;
    default:
      return null;
  }
}
var Qs = !1,
  Ht = !1,
  i_ = typeof WeakSet == "function" ? WeakSet : Set,
  fe = null;
function Ni(e, t) {
  var n = e.ref;
  if (n !== null)
    if (typeof n == "function")
      try {
        n(null);
      } catch (r) {
        ct(e, t, r);
      }
    else n.current = null;
}
function av(e, t, n) {
  try {
    n();
  } catch (r) {
    ct(e, t, r);
  }
}
var Ay = !1;
function a_(e, t) {
  if (((Vp = Uu), (e = mx()), hh(e))) {
    if ("selectionStart" in e)
      var n = { start: e.selectionStart, end: e.selectionEnd };
    else
      e: {
        n = ((n = e.ownerDocument) && n.defaultView) || window;
        var r = n.getSelection && n.getSelection();
        if (r && r.rangeCount !== 0) {
          n = r.anchorNode;
          var o = r.anchorOffset,
            i = r.focusNode;
          r = r.focusOffset;
          try {
            n.nodeType, i.nodeType;
          } catch {
            n = null;
            break e;
          }
          var a = 0,
            l = -1,
            s = -1,
            u = 0,
            c = 0,
            d = e,
            f = null;
          t: for (;;) {
            for (
              var p;
              d !== n || (o !== 0 && d.nodeType !== 3) || (l = a + o),
                d !== i || (r !== 0 && d.nodeType !== 3) || (s = a + r),
                d.nodeType === 3 && (a += d.nodeValue.length),
                (p = d.firstChild) !== null;

            )
              (f = d), (d = p);
            for (;;) {
              if (d === e) break t;
              if (
                (f === n && ++u === o && (l = a),
                f === i && ++c === r && (s = a),
                (p = d.nextSibling) !== null)
              )
                break;
              (d = f), (f = d.parentNode);
            }
            d = p;
          }
          n = l === -1 || s === -1 ? null : { start: l, end: s };
        } else n = null;
      }
    n = n || { start: 0, end: 0 };
  } else n = null;
  for (
    Wp = { focusedElem: e, selectionRange: n }, Uu = !1, fe = t;
    fe !== null;

  )
    if (((t = fe), (e = t.child), (t.subtreeFlags & 1028) !== 0 && e !== null))
      (e.return = t), (fe = e);
    else
      for (; fe !== null; ) {
        t = fe;
        try {
          var h = t.alternate;
          if (t.flags & 1024)
            switch (t.tag) {
              case 0:
              case 11:
              case 15:
                break;
              case 1:
                if (h !== null) {
                  var g = h.memoizedProps,
                    x = h.memoizedState,
                    v = t.stateNode,
                    m = v.getSnapshotBeforeUpdate(
                      t.elementType === t.type ? g : rr(t.type, g),
                      x
                    );
                  v.__reactInternalSnapshotBeforeUpdate = m;
                }
                break;
              case 3:
                var y = t.stateNode.containerInfo;
                y.nodeType === 1
                  ? (y.textContent = "")
                  : y.nodeType === 9 &&
                    y.documentElement &&
                    y.removeChild(y.documentElement);
                break;
              case 5:
              case 6:
              case 4:
              case 17:
                break;
              default:
                throw Error(Z(163));
            }
        } catch (b) {
          ct(t, t.return, b);
        }
        if (((e = t.sibling), e !== null)) {
          (e.return = t.return), (fe = e);
          break;
        }
        fe = t.return;
      }
  return (h = Ay), (Ay = !1), h;
}
function pl(e, t, n) {
  var r = t.updateQueue;
  if (((r = r !== null ? r.lastEffect : null), r !== null)) {
    var o = (r = r.next);
    do {
      if ((o.tag & e) === e) {
        var i = o.destroy;
        (o.destroy = void 0), i !== void 0 && av(t, n, i);
      }
      o = o.next;
    } while (o !== r);
  }
}
function Lc(e, t) {
  if (
    ((t = t.updateQueue), (t = t !== null ? t.lastEffect : null), t !== null)
  ) {
    var n = (t = t.next);
    do {
      if ((n.tag & e) === e) {
        var r = n.create;
        n.destroy = r();
      }
      n = n.next;
    } while (n !== t);
  }
}
function lv(e) {
  var t = e.ref;
  if (t !== null) {
    var n = e.stateNode;
    switch (e.tag) {
      case 5:
        e = n;
        break;
      default:
        e = n;
    }
    typeof t == "function" ? t(e) : (t.current = e);
  }
}
function pS(e) {
  var t = e.alternate;
  t !== null && ((e.alternate = null), pS(t)),
    (e.child = null),
    (e.deletions = null),
    (e.sibling = null),
    e.tag === 5 &&
      ((t = e.stateNode),
      t !== null &&
        (delete t[br], delete t[$l], delete t[Kp], delete t[UT], delete t[VT])),
    (e.stateNode = null),
    (e.return = null),
    (e.dependencies = null),
    (e.memoizedProps = null),
    (e.memoizedState = null),
    (e.pendingProps = null),
    (e.stateNode = null),
    (e.updateQueue = null);
}
function vS(e) {
  return e.tag === 5 || e.tag === 3 || e.tag === 4;
}
function Ny(e) {
  e: for (;;) {
    for (; e.sibling === null; ) {
      if (e.return === null || vS(e.return)) return null;
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
function sv(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6)
    (e = e.stateNode),
      t
        ? n.nodeType === 8
          ? n.parentNode.insertBefore(e, t)
          : n.insertBefore(e, t)
        : (n.nodeType === 8
            ? ((t = n.parentNode), t.insertBefore(e, n))
            : ((t = n), t.appendChild(e)),
          (n = n._reactRootContainer),
          n != null || t.onclick !== null || (t.onclick = Hu));
  else if (r !== 4 && ((e = e.child), e !== null))
    for (sv(e, t, n), e = e.sibling; e !== null; ) sv(e, t, n), (e = e.sibling);
}
function uv(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6)
    (e = e.stateNode), t ? n.insertBefore(e, t) : n.appendChild(e);
  else if (r !== 4 && ((e = e.child), e !== null))
    for (uv(e, t, n), e = e.sibling; e !== null; ) uv(e, t, n), (e = e.sibling);
}
var Mt = null,
  ir = !1;
function qr(e, t, n) {
  for (n = n.child; n !== null; ) hS(e, t, n), (n = n.sibling);
}
function hS(e, t, n) {
  if (Sr && typeof Sr.onCommitFiberUnmount == "function")
    try {
      Sr.onCommitFiberUnmount(kc, n);
    } catch {}
  switch (n.tag) {
    case 5:
      Ht || Ni(n, t);
    case 6:
      var r = Mt,
        o = ir;
      (Mt = null),
        qr(e, t, n),
        (Mt = r),
        (ir = o),
        Mt !== null &&
          (ir
            ? ((e = Mt),
              (n = n.stateNode),
              e.nodeType === 8 ? e.parentNode.removeChild(n) : e.removeChild(n))
            : Mt.removeChild(n.stateNode));
      break;
    case 18:
      Mt !== null &&
        (ir
          ? ((e = Mt),
            (n = n.stateNode),
            e.nodeType === 8
              ? Pf(e.parentNode, n)
              : e.nodeType === 1 && Pf(e, n),
            Il(e))
          : Pf(Mt, n.stateNode));
      break;
    case 4:
      (r = Mt),
        (o = ir),
        (Mt = n.stateNode.containerInfo),
        (ir = !0),
        qr(e, t, n),
        (Mt = r),
        (ir = o);
      break;
    case 0:
    case 11:
    case 14:
    case 15:
      if (
        !Ht &&
        ((r = n.updateQueue), r !== null && ((r = r.lastEffect), r !== null))
      ) {
        o = r = r.next;
        do {
          var i = o,
            a = i.destroy;
          (i = i.tag),
            a !== void 0 && (i & 2 || i & 4) && av(n, t, a),
            (o = o.next);
        } while (o !== r);
      }
      qr(e, t, n);
      break;
    case 1:
      if (
        !Ht &&
        (Ni(n, t),
        (r = n.stateNode),
        typeof r.componentWillUnmount == "function")
      )
        try {
          (r.props = n.memoizedProps),
            (r.state = n.memoizedState),
            r.componentWillUnmount();
        } catch (l) {
          ct(n, t, l);
        }
      qr(e, t, n);
      break;
    case 21:
      qr(e, t, n);
      break;
    case 22:
      n.mode & 1
        ? ((Ht = (r = Ht) || n.memoizedState !== null), qr(e, t, n), (Ht = r))
        : qr(e, t, n);
      break;
    default:
      qr(e, t, n);
  }
}
function Oy(e) {
  var t = e.updateQueue;
  if (t !== null) {
    e.updateQueue = null;
    var n = e.stateNode;
    n === null && (n = e.stateNode = new i_()),
      t.forEach(function (r) {
        var o = h_.bind(null, e, r);
        n.has(r) || (n.add(r), r.then(o, o));
      });
  }
}
function er(e, t) {
  var n = t.deletions;
  if (n !== null)
    for (var r = 0; r < n.length; r++) {
      var o = n[r];
      try {
        var i = e,
          a = t,
          l = a;
        e: for (; l !== null; ) {
          switch (l.tag) {
            case 5:
              (Mt = l.stateNode), (ir = !1);
              break e;
            case 3:
              (Mt = l.stateNode.containerInfo), (ir = !0);
              break e;
            case 4:
              (Mt = l.stateNode.containerInfo), (ir = !0);
              break e;
          }
          l = l.return;
        }
        if (Mt === null) throw Error(Z(160));
        hS(i, a, o), (Mt = null), (ir = !1);
        var s = o.alternate;
        s !== null && (s.return = null), (o.return = null);
      } catch (u) {
        ct(o, t, u);
      }
    }
  if (t.subtreeFlags & 12854)
    for (t = t.child; t !== null; ) mS(t, e), (t = t.sibling);
}
function mS(e, t) {
  var n = e.alternate,
    r = e.flags;
  switch (e.tag) {
    case 0:
    case 11:
    case 14:
    case 15:
      if ((er(t, e), vr(e), r & 4)) {
        try {
          pl(3, e, e.return), Lc(3, e);
        } catch (g) {
          ct(e, e.return, g);
        }
        try {
          pl(5, e, e.return);
        } catch (g) {
          ct(e, e.return, g);
        }
      }
      break;
    case 1:
      er(t, e), vr(e), r & 512 && n !== null && Ni(n, n.return);
      break;
    case 5:
      if (
        (er(t, e),
        vr(e),
        r & 512 && n !== null && Ni(n, n.return),
        e.flags & 32)
      ) {
        var o = e.stateNode;
        try {
          _l(o, "");
        } catch (g) {
          ct(e, e.return, g);
        }
      }
      if (r & 4 && ((o = e.stateNode), o != null)) {
        var i = e.memoizedProps,
          a = n !== null ? n.memoizedProps : i,
          l = e.type,
          s = e.updateQueue;
        if (((e.updateQueue = null), s !== null))
          try {
            l === "input" && i.type === "radio" && i.name != null && Lb(o, i),
              Np(l, a);
            var u = Np(l, i);
            for (a = 0; a < s.length; a += 2) {
              var c = s[a],
                d = s[a + 1];
              c === "style"
                ? Ub(o, d)
                : c === "dangerouslySetInnerHTML"
                ? jb(o, d)
                : c === "children"
                ? _l(o, d)
                : nh(o, c, d, u);
            }
            switch (l) {
              case "input":
                Pp(o, i);
                break;
              case "textarea":
                Bb(o, i);
                break;
              case "select":
                var f = o._wrapperState.wasMultiple;
                o._wrapperState.wasMultiple = !!i.multiple;
                var p = i.value;
                p != null
                  ? Bi(o, !!i.multiple, p, !1)
                  : f !== !!i.multiple &&
                    (i.defaultValue != null
                      ? Bi(o, !!i.multiple, i.defaultValue, !0)
                      : Bi(o, !!i.multiple, i.multiple ? [] : "", !1));
            }
            o[$l] = i;
          } catch (g) {
            ct(e, e.return, g);
          }
      }
      break;
    case 6:
      if ((er(t, e), vr(e), r & 4)) {
        if (e.stateNode === null) throw Error(Z(162));
        (o = e.stateNode), (i = e.memoizedProps);
        try {
          o.nodeValue = i;
        } catch (g) {
          ct(e, e.return, g);
        }
      }
      break;
    case 3:
      if (
        (er(t, e), vr(e), r & 4 && n !== null && n.memoizedState.isDehydrated)
      )
        try {
          Il(t.containerInfo);
        } catch (g) {
          ct(e, e.return, g);
        }
      break;
    case 4:
      er(t, e), vr(e);
      break;
    case 13:
      er(t, e),
        vr(e),
        (o = e.child),
        o.flags & 8192 &&
          ((i = o.memoizedState !== null),
          (o.stateNode.isHidden = i),
          !i ||
            (o.alternate !== null && o.alternate.memoizedState !== null) ||
            (Mh = vt())),
        r & 4 && Oy(e);
      break;
    case 22:
      if (
        ((c = n !== null && n.memoizedState !== null),
        e.mode & 1 ? ((Ht = (u = Ht) || c), er(t, e), (Ht = u)) : er(t, e),
        vr(e),
        r & 8192)
      ) {
        if (
          ((u = e.memoizedState !== null),
          (e.stateNode.isHidden = u) && !c && e.mode & 1)
        )
          for (fe = e, c = e.child; c !== null; ) {
            for (d = fe = c; fe !== null; ) {
              switch (((f = fe), (p = f.child), f.tag)) {
                case 0:
                case 11:
                case 14:
                case 15:
                  pl(4, f, f.return);
                  break;
                case 1:
                  Ni(f, f.return);
                  var h = f.stateNode;
                  if (typeof h.componentWillUnmount == "function") {
                    (r = f), (n = f.return);
                    try {
                      (t = r),
                        (h.props = t.memoizedProps),
                        (h.state = t.memoizedState),
                        h.componentWillUnmount();
                    } catch (g) {
                      ct(r, n, g);
                    }
                  }
                  break;
                case 5:
                  Ni(f, f.return);
                  break;
                case 22:
                  if (f.memoizedState !== null) {
                    $y(d);
                    continue;
                  }
              }
              p !== null ? ((p.return = f), (fe = p)) : $y(d);
            }
            c = c.sibling;
          }
        e: for (c = null, d = e; ; ) {
          if (d.tag === 5) {
            if (c === null) {
              c = d;
              try {
                (o = d.stateNode),
                  u
                    ? ((i = o.style),
                      typeof i.setProperty == "function"
                        ? i.setProperty("display", "none", "important")
                        : (i.display = "none"))
                    : ((l = d.stateNode),
                      (s = d.memoizedProps.style),
                      (a =
                        s != null && s.hasOwnProperty("display")
                          ? s.display
                          : null),
                      (l.style.display = zb("display", a)));
              } catch (g) {
                ct(e, e.return, g);
              }
            }
          } else if (d.tag === 6) {
            if (c === null)
              try {
                d.stateNode.nodeValue = u ? "" : d.memoizedProps;
              } catch (g) {
                ct(e, e.return, g);
              }
          } else if (
            ((d.tag !== 22 && d.tag !== 23) ||
              d.memoizedState === null ||
              d === e) &&
            d.child !== null
          ) {
            (d.child.return = d), (d = d.child);
            continue;
          }
          if (d === e) break e;
          for (; d.sibling === null; ) {
            if (d.return === null || d.return === e) break e;
            c === d && (c = null), (d = d.return);
          }
          c === d && (c = null), (d.sibling.return = d.return), (d = d.sibling);
        }
      }
      break;
    case 19:
      er(t, e), vr(e), r & 4 && Oy(e);
      break;
    case 21:
      break;
    default:
      er(t, e), vr(e);
  }
}
function vr(e) {
  var t = e.flags;
  if (t & 2) {
    try {
      e: {
        for (var n = e.return; n !== null; ) {
          if (vS(n)) {
            var r = n;
            break e;
          }
          n = n.return;
        }
        throw Error(Z(160));
      }
      switch (r.tag) {
        case 5:
          var o = r.stateNode;
          r.flags & 32 && (_l(o, ""), (r.flags &= -33));
          var i = Ny(e);
          uv(e, i, o);
          break;
        case 3:
        case 4:
          var a = r.stateNode.containerInfo,
            l = Ny(e);
          sv(e, l, a);
          break;
        default:
          throw Error(Z(161));
      }
    } catch (s) {
      ct(e, e.return, s);
    }
    e.flags &= -3;
  }
  t & 4096 && (e.flags &= -4097);
}
function l_(e, t, n) {
  (fe = e), gS(e);
}
function gS(e, t, n) {
  for (var r = (e.mode & 1) !== 0; fe !== null; ) {
    var o = fe,
      i = o.child;
    if (o.tag === 22 && r) {
      var a = o.memoizedState !== null || Qs;
      if (!a) {
        var l = o.alternate,
          s = (l !== null && l.memoizedState !== null) || Ht;
        l = Qs;
        var u = Ht;
        if (((Qs = a), (Ht = s) && !u))
          for (fe = o; fe !== null; )
            (a = fe),
              (s = a.child),
              a.tag === 22 && a.memoizedState !== null
                ? Ly(o)
                : s !== null
                ? ((s.return = a), (fe = s))
                : Ly(o);
        for (; i !== null; ) (fe = i), gS(i), (i = i.sibling);
        (fe = o), (Qs = l), (Ht = u);
      }
      My(e);
    } else
      o.subtreeFlags & 8772 && i !== null ? ((i.return = o), (fe = i)) : My(e);
  }
}
function My(e) {
  for (; fe !== null; ) {
    var t = fe;
    if (t.flags & 8772) {
      var n = t.alternate;
      try {
        if (t.flags & 8772)
          switch (t.tag) {
            case 0:
            case 11:
            case 15:
              Ht || Lc(5, t);
              break;
            case 1:
              var r = t.stateNode;
              if (t.flags & 4 && !Ht)
                if (n === null) r.componentDidMount();
                else {
                  var o =
                    t.elementType === t.type
                      ? n.memoizedProps
                      : rr(t.type, n.memoizedProps);
                  r.componentDidUpdate(
                    o,
                    n.memoizedState,
                    r.__reactInternalSnapshotBeforeUpdate
                  );
                }
              var i = t.updateQueue;
              i !== null && yy(t, i, r);
              break;
            case 3:
              var a = t.updateQueue;
              if (a !== null) {
                if (((n = null), t.child !== null))
                  switch (t.child.tag) {
                    case 5:
                      n = t.child.stateNode;
                      break;
                    case 1:
                      n = t.child.stateNode;
                  }
                yy(t, a, n);
              }
              break;
            case 5:
              var l = t.stateNode;
              if (n === null && t.flags & 4) {
                n = l;
                var s = t.memoizedProps;
                switch (t.type) {
                  case "button":
                  case "input":
                  case "select":
                  case "textarea":
                    s.autoFocus && n.focus();
                    break;
                  case "img":
                    s.src && (n.src = s.src);
                }
              }
              break;
            case 6:
              break;
            case 4:
              break;
            case 12:
              break;
            case 13:
              if (t.memoizedState === null) {
                var u = t.alternate;
                if (u !== null) {
                  var c = u.memoizedState;
                  if (c !== null) {
                    var d = c.dehydrated;
                    d !== null && Il(d);
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
              throw Error(Z(163));
          }
        Ht || (t.flags & 512 && lv(t));
      } catch (f) {
        ct(t, t.return, f);
      }
    }
    if (t === e) {
      fe = null;
      break;
    }
    if (((n = t.sibling), n !== null)) {
      (n.return = t.return), (fe = n);
      break;
    }
    fe = t.return;
  }
}
function $y(e) {
  for (; fe !== null; ) {
    var t = fe;
    if (t === e) {
      fe = null;
      break;
    }
    var n = t.sibling;
    if (n !== null) {
      (n.return = t.return), (fe = n);
      break;
    }
    fe = t.return;
  }
}
function Ly(e) {
  for (; fe !== null; ) {
    var t = fe;
    try {
      switch (t.tag) {
        case 0:
        case 11:
        case 15:
          var n = t.return;
          try {
            Lc(4, t);
          } catch (s) {
            ct(t, n, s);
          }
          break;
        case 1:
          var r = t.stateNode;
          if (typeof r.componentDidMount == "function") {
            var o = t.return;
            try {
              r.componentDidMount();
            } catch (s) {
              ct(t, o, s);
            }
          }
          var i = t.return;
          try {
            lv(t);
          } catch (s) {
            ct(t, i, s);
          }
          break;
        case 5:
          var a = t.return;
          try {
            lv(t);
          } catch (s) {
            ct(t, a, s);
          }
      }
    } catch (s) {
      ct(t, t.return, s);
    }
    if (t === e) {
      fe = null;
      break;
    }
    var l = t.sibling;
    if (l !== null) {
      (l.return = t.return), (fe = l);
      break;
    }
    fe = t.return;
  }
}
var s_ = Math.ceil,
  nc = Vr.ReactCurrentDispatcher,
  Nh = Vr.ReactCurrentOwner,
  Vn = Vr.ReactCurrentBatchConfig,
  Ne = 0,
  _t = null,
  yt = null,
  Bt = 0,
  Sn = 0,
  Oi = Eo(0),
  St = 0,
  Ul = null,
  Zo = 0,
  Bc = 0,
  Oh = 0,
  vl = null,
  cn = null,
  Mh = 0,
  ea = 1 / 0,
  Dr = null,
  rc = !1,
  cv = null,
  fo = null,
  Zs = !1,
  ro = null,
  oc = 0,
  hl = 0,
  dv = null,
  _u = -1,
  Pu = 0;
function Zt() {
  return Ne & 6 ? vt() : _u !== -1 ? _u : (_u = vt());
}
function po(e) {
  return e.mode & 1
    ? Ne & 2 && Bt !== 0
      ? Bt & -Bt
      : HT.transition !== null
      ? (Pu === 0 && (Pu = ex()), Pu)
      : ((e = je),
        e !== 0 || ((e = window.event), (e = e === void 0 ? 16 : lx(e.type))),
        e)
    : 1;
}
function ur(e, t, n, r) {
  if (50 < hl) throw ((hl = 0), (dv = null), Error(Z(185)));
  is(e, n, r),
    (!(Ne & 2) || e !== _t) &&
      (e === _t && (!(Ne & 2) && (Bc |= n), St === 4 && to(e, Bt)),
      vn(e, r),
      n === 1 && Ne === 0 && !(t.mode & 1) && ((ea = vt() + 500), Oc && To()));
}
function vn(e, t) {
  var n = e.callbackNode;
  H2(e, t);
  var r = zu(e, e === _t ? Bt : 0);
  if (r === 0)
    n !== null && Gg(n), (e.callbackNode = null), (e.callbackPriority = 0);
  else if (((t = r & -r), e.callbackPriority !== t)) {
    if ((n != null && Gg(n), t === 1))
      e.tag === 0 ? WT(By.bind(null, e)) : Tx(By.bind(null, e)),
        jT(function () {
          !(Ne & 6) && To();
        }),
        (n = null);
    else {
      switch (tx(r)) {
        case 1:
          n = lh;
          break;
        case 4:
          n = Zb;
          break;
        case 16:
          n = ju;
          break;
        case 536870912:
          n = Jb;
          break;
        default:
          n = ju;
      }
      n = ES(n, yS.bind(null, e));
    }
    (e.callbackPriority = t), (e.callbackNode = n);
  }
}
function yS(e, t) {
  if (((_u = -1), (Pu = 0), Ne & 6)) throw Error(Z(327));
  var n = e.callbackNode;
  if (Vi() && e.callbackNode !== n) return null;
  var r = zu(e, e === _t ? Bt : 0);
  if (r === 0) return null;
  if (r & 30 || r & e.expiredLanes || t) t = ic(e, r);
  else {
    t = r;
    var o = Ne;
    Ne |= 2;
    var i = xS();
    (_t !== e || Bt !== t) && ((Dr = null), (ea = vt() + 500), Go(e, t));
    do
      try {
        d_();
        break;
      } catch (l) {
        bS(e, l);
      }
    while (1);
    xh(),
      (nc.current = i),
      (Ne = o),
      yt !== null ? (t = 0) : ((_t = null), (Bt = 0), (t = St));
  }
  if (t !== 0) {
    if (
      (t === 2 && ((o = Bp(e)), o !== 0 && ((r = o), (t = fv(e, o)))), t === 1)
    )
      throw ((n = Ul), Go(e, 0), to(e, r), vn(e, vt()), n);
    if (t === 6) to(e, r);
    else {
      if (
        ((o = e.current.alternate),
        !(r & 30) &&
          !u_(o) &&
          ((t = ic(e, r)),
          t === 2 && ((i = Bp(e)), i !== 0 && ((r = i), (t = fv(e, i)))),
          t === 1))
      )
        throw ((n = Ul), Go(e, 0), to(e, r), vn(e, vt()), n);
      switch (((e.finishedWork = o), (e.finishedLanes = r), t)) {
        case 0:
        case 1:
          throw Error(Z(345));
        case 2:
          Oo(e, cn, Dr);
          break;
        case 3:
          if (
            (to(e, r), (r & 130023424) === r && ((t = Mh + 500 - vt()), 10 < t))
          ) {
            if (zu(e, 0) !== 0) break;
            if (((o = e.suspendedLanes), (o & r) !== r)) {
              Zt(), (e.pingedLanes |= e.suspendedLanes & o);
              break;
            }
            e.timeoutHandle = Gp(Oo.bind(null, e, cn, Dr), t);
            break;
          }
          Oo(e, cn, Dr);
          break;
        case 4:
          if ((to(e, r), (r & 4194240) === r)) break;
          for (t = e.eventTimes, o = -1; 0 < r; ) {
            var a = 31 - sr(r);
            (i = 1 << a), (a = t[a]), a > o && (o = a), (r &= ~i);
          }
          if (
            ((r = o),
            (r = vt() - r),
            (r =
              (120 > r
                ? 120
                : 480 > r
                ? 480
                : 1080 > r
                ? 1080
                : 1920 > r
                ? 1920
                : 3e3 > r
                ? 3e3
                : 4320 > r
                ? 4320
                : 1960 * s_(r / 1960)) - r),
            10 < r)
          ) {
            e.timeoutHandle = Gp(Oo.bind(null, e, cn, Dr), r);
            break;
          }
          Oo(e, cn, Dr);
          break;
        case 5:
          Oo(e, cn, Dr);
          break;
        default:
          throw Error(Z(329));
      }
    }
  }
  return vn(e, vt()), e.callbackNode === n ? yS.bind(null, e) : null;
}
function fv(e, t) {
  var n = vl;
  return (
    e.current.memoizedState.isDehydrated && (Go(e, t).flags |= 256),
    (e = ic(e, t)),
    e !== 2 && ((t = cn), (cn = n), t !== null && pv(t)),
    e
  );
}
function pv(e) {
  cn === null ? (cn = e) : cn.push.apply(cn, e);
}
function u_(e) {
  for (var t = e; ; ) {
    if (t.flags & 16384) {
      var n = t.updateQueue;
      if (n !== null && ((n = n.stores), n !== null))
        for (var r = 0; r < n.length; r++) {
          var o = n[r],
            i = o.getSnapshot;
          o = o.value;
          try {
            if (!cr(i(), o)) return !1;
          } catch {
            return !1;
          }
        }
    }
    if (((n = t.child), t.subtreeFlags & 16384 && n !== null))
      (n.return = t), (t = n);
    else {
      if (t === e) break;
      for (; t.sibling === null; ) {
        if (t.return === null || t.return === e) return !0;
        t = t.return;
      }
      (t.sibling.return = t.return), (t = t.sibling);
    }
  }
  return !0;
}
function to(e, t) {
  for (
    t &= ~Oh,
      t &= ~Bc,
      e.suspendedLanes |= t,
      e.pingedLanes &= ~t,
      e = e.expirationTimes;
    0 < t;

  ) {
    var n = 31 - sr(t),
      r = 1 << n;
    (e[n] = -1), (t &= ~r);
  }
}
function By(e) {
  if (Ne & 6) throw Error(Z(327));
  Vi();
  var t = zu(e, 0);
  if (!(t & 1)) return vn(e, vt()), null;
  var n = ic(e, t);
  if (e.tag !== 0 && n === 2) {
    var r = Bp(e);
    r !== 0 && ((t = r), (n = fv(e, r)));
  }
  if (n === 1) throw ((n = Ul), Go(e, 0), to(e, t), vn(e, vt()), n);
  if (n === 6) throw Error(Z(345));
  return (
    (e.finishedWork = e.current.alternate),
    (e.finishedLanes = t),
    Oo(e, cn, Dr),
    vn(e, vt()),
    null
  );
}
function $h(e, t) {
  var n = Ne;
  Ne |= 1;
  try {
    return e(t);
  } finally {
    (Ne = n), Ne === 0 && ((ea = vt() + 500), Oc && To());
  }
}
function Jo(e) {
  ro !== null && ro.tag === 0 && !(Ne & 6) && Vi();
  var t = Ne;
  Ne |= 1;
  var n = Vn.transition,
    r = je;
  try {
    if (((Vn.transition = null), (je = 1), e)) return e();
  } finally {
    (je = r), (Vn.transition = n), (Ne = t), !(Ne & 6) && To();
  }
}
function Lh() {
  (Sn = Oi.current), Qe(Oi);
}
function Go(e, t) {
  (e.finishedWork = null), (e.finishedLanes = 0);
  var n = e.timeoutHandle;
  if ((n !== -1 && ((e.timeoutHandle = -1), FT(n)), yt !== null))
    for (n = yt.return; n !== null; ) {
      var r = n;
      switch ((gh(r), r.tag)) {
        case 1:
          (r = r.type.childContextTypes), r != null && Gu();
          break;
        case 3:
          Zi(), Qe(fn), Qe(Kt), Th();
          break;
        case 5:
          Eh(r);
          break;
        case 4:
          Zi();
          break;
        case 13:
          Qe(ot);
          break;
        case 19:
          Qe(ot);
          break;
        case 10:
          Sh(r.type._context);
          break;
        case 22:
        case 23:
          Lh();
      }
      n = n.return;
    }
  if (
    ((_t = e),
    (yt = e = vo(e.current, null)),
    (Bt = Sn = t),
    (St = 0),
    (Ul = null),
    (Oh = Bc = Zo = 0),
    (cn = vl = null),
    Uo !== null)
  ) {
    for (t = 0; t < Uo.length; t++)
      if (((n = Uo[t]), (r = n.interleaved), r !== null)) {
        n.interleaved = null;
        var o = r.next,
          i = n.pending;
        if (i !== null) {
          var a = i.next;
          (i.next = o), (r.next = a);
        }
        n.pending = r;
      }
    Uo = null;
  }
  return e;
}
function bS(e, t) {
  do {
    var n = yt;
    try {
      if ((xh(), (Ru.current = tc), ec)) {
        for (var r = it.memoizedState; r !== null; ) {
          var o = r.queue;
          o !== null && (o.pending = null), (r = r.next);
        }
        ec = !1;
      }
      if (
        ((Qo = 0),
        (Tt = xt = it = null),
        (fl = !1),
        (Fl = 0),
        (Nh.current = null),
        n === null || n.return === null)
      ) {
        (St = 1), (Ul = t), (yt = null);
        break;
      }
      e: {
        var i = e,
          a = n.return,
          l = n,
          s = t;
        if (
          ((t = Bt),
          (l.flags |= 32768),
          s !== null && typeof s == "object" && typeof s.then == "function")
        ) {
          var u = s,
            c = l,
            d = c.tag;
          if (!(c.mode & 1) && (d === 0 || d === 11 || d === 15)) {
            var f = c.alternate;
            f
              ? ((c.updateQueue = f.updateQueue),
                (c.memoizedState = f.memoizedState),
                (c.lanes = f.lanes))
              : ((c.updateQueue = null), (c.memoizedState = null));
          }
          var p = Ey(a);
          if (p !== null) {
            (p.flags &= -257),
              Ty(p, a, l, i, t),
              p.mode & 1 && Ry(i, u, t),
              (t = p),
              (s = u);
            var h = t.updateQueue;
            if (h === null) {
              var g = new Set();
              g.add(s), (t.updateQueue = g);
            } else h.add(s);
            break e;
          } else {
            if (!(t & 1)) {
              Ry(i, u, t), Bh();
              break e;
            }
            s = Error(Z(426));
          }
        } else if (tt && l.mode & 1) {
          var x = Ey(a);
          if (x !== null) {
            !(x.flags & 65536) && (x.flags |= 256),
              Ty(x, a, l, i, t),
              yh(Ji(s, l));
            break e;
          }
        }
        (i = s = Ji(s, l)),
          St !== 4 && (St = 2),
          vl === null ? (vl = [i]) : vl.push(i),
          (i = a);
        do {
          switch (i.tag) {
            case 3:
              (i.flags |= 65536), (t &= -t), (i.lanes |= t);
              var v = nS(i, s, t);
              gy(i, v);
              break e;
            case 1:
              l = s;
              var m = i.type,
                y = i.stateNode;
              if (
                !(i.flags & 128) &&
                (typeof m.getDerivedStateFromError == "function" ||
                  (y !== null &&
                    typeof y.componentDidCatch == "function" &&
                    (fo === null || !fo.has(y))))
              ) {
                (i.flags |= 65536), (t &= -t), (i.lanes |= t);
                var b = rS(i, l, t);
                gy(i, b);
                break e;
              }
          }
          i = i.return;
        } while (i !== null);
      }
      wS(n);
    } catch (C) {
      (t = C), yt === n && n !== null && (yt = n = n.return);
      continue;
    }
    break;
  } while (1);
}
function xS() {
  var e = nc.current;
  return (nc.current = tc), e === null ? tc : e;
}
function Bh() {
  (St === 0 || St === 3 || St === 2) && (St = 4),
    _t === null || (!(Zo & 268435455) && !(Bc & 268435455)) || to(_t, Bt);
}
function ic(e, t) {
  var n = Ne;
  Ne |= 2;
  var r = xS();
  (_t !== e || Bt !== t) && ((Dr = null), Go(e, t));
  do
    try {
      c_();
      break;
    } catch (o) {
      bS(e, o);
    }
  while (1);
  if ((xh(), (Ne = n), (nc.current = r), yt !== null)) throw Error(Z(261));
  return (_t = null), (Bt = 0), St;
}
function c_() {
  for (; yt !== null; ) SS(yt);
}
function d_() {
  for (; yt !== null && !$2(); ) SS(yt);
}
function SS(e) {
  var t = RS(e.alternate, e, Sn);
  (e.memoizedProps = e.pendingProps),
    t === null ? wS(e) : (yt = t),
    (Nh.current = null);
}
function wS(e) {
  var t = e;
  do {
    var n = t.alternate;
    if (((e = t.return), t.flags & 32768)) {
      if (((n = o_(n, t)), n !== null)) {
        (n.flags &= 32767), (yt = n);
        return;
      }
      if (e !== null)
        (e.flags |= 32768), (e.subtreeFlags = 0), (e.deletions = null);
      else {
        (St = 6), (yt = null);
        return;
      }
    } else if (((n = r_(n, t, Sn)), n !== null)) {
      yt = n;
      return;
    }
    if (((t = t.sibling), t !== null)) {
      yt = t;
      return;
    }
    yt = t = e;
  } while (t !== null);
  St === 0 && (St = 5);
}
function Oo(e, t, n) {
  var r = je,
    o = Vn.transition;
  try {
    (Vn.transition = null), (je = 1), f_(e, t, n, r);
  } finally {
    (Vn.transition = o), (je = r);
  }
  return null;
}
function f_(e, t, n, r) {
  do Vi();
  while (ro !== null);
  if (Ne & 6) throw Error(Z(327));
  n = e.finishedWork;
  var o = e.finishedLanes;
  if (n === null) return null;
  if (((e.finishedWork = null), (e.finishedLanes = 0), n === e.current))
    throw Error(Z(177));
  (e.callbackNode = null), (e.callbackPriority = 0);
  var i = n.lanes | n.childLanes;
  if (
    (G2(e, i),
    e === _t && ((yt = _t = null), (Bt = 0)),
    (!(n.subtreeFlags & 2064) && !(n.flags & 2064)) ||
      Zs ||
      ((Zs = !0),
      ES(ju, function () {
        return Vi(), null;
      })),
    (i = (n.flags & 15990) !== 0),
    n.subtreeFlags & 15990 || i)
  ) {
    (i = Vn.transition), (Vn.transition = null);
    var a = je;
    je = 1;
    var l = Ne;
    (Ne |= 4),
      (Nh.current = null),
      a_(e, n),
      mS(n, e),
      AT(Wp),
      (Uu = !!Vp),
      (Wp = Vp = null),
      (e.current = n),
      l_(n),
      L2(),
      (Ne = l),
      (je = a),
      (Vn.transition = i);
  } else e.current = n;
  if (
    (Zs && ((Zs = !1), (ro = e), (oc = o)),
    (i = e.pendingLanes),
    i === 0 && (fo = null),
    j2(n.stateNode),
    vn(e, vt()),
    t !== null)
  )
    for (r = e.onRecoverableError, n = 0; n < t.length; n++)
      (o = t[n]), r(o.value, { componentStack: o.stack, digest: o.digest });
  if (rc) throw ((rc = !1), (e = cv), (cv = null), e);
  return (
    oc & 1 && e.tag !== 0 && Vi(),
    (i = e.pendingLanes),
    i & 1 ? (e === dv ? hl++ : ((hl = 0), (dv = e))) : (hl = 0),
    To(),
    null
  );
}
function Vi() {
  if (ro !== null) {
    var e = tx(oc),
      t = Vn.transition,
      n = je;
    try {
      if (((Vn.transition = null), (je = 16 > e ? 16 : e), ro === null))
        var r = !1;
      else {
        if (((e = ro), (ro = null), (oc = 0), Ne & 6)) throw Error(Z(331));
        var o = Ne;
        for (Ne |= 4, fe = e.current; fe !== null; ) {
          var i = fe,
            a = i.child;
          if (fe.flags & 16) {
            var l = i.deletions;
            if (l !== null) {
              for (var s = 0; s < l.length; s++) {
                var u = l[s];
                for (fe = u; fe !== null; ) {
                  var c = fe;
                  switch (c.tag) {
                    case 0:
                    case 11:
                    case 15:
                      pl(8, c, i);
                  }
                  var d = c.child;
                  if (d !== null) (d.return = c), (fe = d);
                  else
                    for (; fe !== null; ) {
                      c = fe;
                      var f = c.sibling,
                        p = c.return;
                      if ((pS(c), c === u)) {
                        fe = null;
                        break;
                      }
                      if (f !== null) {
                        (f.return = p), (fe = f);
                        break;
                      }
                      fe = p;
                    }
                }
              }
              var h = i.alternate;
              if (h !== null) {
                var g = h.child;
                if (g !== null) {
                  h.child = null;
                  do {
                    var x = g.sibling;
                    (g.sibling = null), (g = x);
                  } while (g !== null);
                }
              }
              fe = i;
            }
          }
          if (i.subtreeFlags & 2064 && a !== null) (a.return = i), (fe = a);
          else
            e: for (; fe !== null; ) {
              if (((i = fe), i.flags & 2048))
                switch (i.tag) {
                  case 0:
                  case 11:
                  case 15:
                    pl(9, i, i.return);
                }
              var v = i.sibling;
              if (v !== null) {
                (v.return = i.return), (fe = v);
                break e;
              }
              fe = i.return;
            }
        }
        var m = e.current;
        for (fe = m; fe !== null; ) {
          a = fe;
          var y = a.child;
          if (a.subtreeFlags & 2064 && y !== null) (y.return = a), (fe = y);
          else
            e: for (a = m; fe !== null; ) {
              if (((l = fe), l.flags & 2048))
                try {
                  switch (l.tag) {
                    case 0:
                    case 11:
                    case 15:
                      Lc(9, l);
                  }
                } catch (C) {
                  ct(l, l.return, C);
                }
              if (l === a) {
                fe = null;
                break e;
              }
              var b = l.sibling;
              if (b !== null) {
                (b.return = l.return), (fe = b);
                break e;
              }
              fe = l.return;
            }
        }
        if (
          ((Ne = o), To(), Sr && typeof Sr.onPostCommitFiberRoot == "function")
        )
          try {
            Sr.onPostCommitFiberRoot(kc, e);
          } catch {}
        r = !0;
      }
      return r;
    } finally {
      (je = n), (Vn.transition = t);
    }
  }
  return !1;
}
function Fy(e, t, n) {
  (t = Ji(n, t)),
    (t = nS(e, t, 1)),
    (e = co(e, t, 1)),
    (t = Zt()),
    e !== null && (is(e, 1, t), vn(e, t));
}
function ct(e, t, n) {
  if (e.tag === 3) Fy(e, e, n);
  else
    for (; t !== null; ) {
      if (t.tag === 3) {
        Fy(t, e, n);
        break;
      } else if (t.tag === 1) {
        var r = t.stateNode;
        if (
          typeof t.type.getDerivedStateFromError == "function" ||
          (typeof r.componentDidCatch == "function" &&
            (fo === null || !fo.has(r)))
        ) {
          (e = Ji(n, e)),
            (e = rS(t, e, 1)),
            (t = co(t, e, 1)),
            (e = Zt()),
            t !== null && (is(t, 1, e), vn(t, e));
          break;
        }
      }
      t = t.return;
    }
}
function p_(e, t, n) {
  var r = e.pingCache;
  r !== null && r.delete(t),
    (t = Zt()),
    (e.pingedLanes |= e.suspendedLanes & n),
    _t === e &&
      (Bt & n) === n &&
      (St === 4 || (St === 3 && (Bt & 130023424) === Bt && 500 > vt() - Mh)
        ? Go(e, 0)
        : (Oh |= n)),
    vn(e, t);
}
function CS(e, t) {
  t === 0 &&
    (e.mode & 1
      ? ((t = Us), (Us <<= 1), !(Us & 130023424) && (Us = 4194304))
      : (t = 1));
  var n = Zt();
  (e = Fr(e, t)), e !== null && (is(e, t, n), vn(e, n));
}
function v_(e) {
  var t = e.memoizedState,
    n = 0;
  t !== null && (n = t.retryLane), CS(e, n);
}
function h_(e, t) {
  var n = 0;
  switch (e.tag) {
    case 13:
      var r = e.stateNode,
        o = e.memoizedState;
      o !== null && (n = o.retryLane);
      break;
    case 19:
      r = e.stateNode;
      break;
    default:
      throw Error(Z(314));
  }
  r !== null && r.delete(t), CS(e, n);
}
var RS;
RS = function (e, t, n) {
  if (e !== null)
    if (e.memoizedProps !== t.pendingProps || fn.current) dn = !0;
    else {
      if (!(e.lanes & n) && !(t.flags & 128)) return (dn = !1), n_(e, t, n);
      dn = !!(e.flags & 131072);
    }
  else (dn = !1), tt && t.flags & 1048576 && _x(t, Yu, t.index);
  switch (((t.lanes = 0), t.tag)) {
    case 2:
      var r = t.type;
      Tu(e, t), (e = t.pendingProps);
      var o = Yi(t, Kt.current);
      Ui(t, n), (o = Ph(null, t, r, e, o, n));
      var i = kh();
      return (
        (t.flags |= 1),
        typeof o == "object" &&
        o !== null &&
        typeof o.render == "function" &&
        o.$$typeof === void 0
          ? ((t.tag = 1),
            (t.memoizedState = null),
            (t.updateQueue = null),
            pn(r) ? ((i = !0), Ku(t)) : (i = !1),
            (t.memoizedState =
              o.state !== null && o.state !== void 0 ? o.state : null),
            Ch(t),
            (o.updater = Mc),
            (t.stateNode = o),
            (o._reactInternals = t),
            Jp(t, r, e, n),
            (t = nv(null, t, r, !0, i, n)))
          : ((t.tag = 0), tt && i && mh(t), Qt(null, t, o, n), (t = t.child)),
        t
      );
    case 16:
      r = t.elementType;
      e: {
        switch (
          (Tu(e, t),
          (e = t.pendingProps),
          (o = r._init),
          (r = o(r._payload)),
          (t.type = r),
          (o = t.tag = g_(r)),
          (e = rr(r, e)),
          o)
        ) {
          case 0:
            t = tv(null, t, r, e, n);
            break e;
          case 1:
            t = ky(null, t, r, e, n);
            break e;
          case 11:
            t = _y(null, t, r, e, n);
            break e;
          case 14:
            t = Py(null, t, r, rr(r.type, e), n);
            break e;
        }
        throw Error(Z(306, r, ""));
      }
      return t;
    case 0:
      return (
        (r = t.type),
        (o = t.pendingProps),
        (o = t.elementType === r ? o : rr(r, o)),
        tv(e, t, r, o, n)
      );
    case 1:
      return (
        (r = t.type),
        (o = t.pendingProps),
        (o = t.elementType === r ? o : rr(r, o)),
        ky(e, t, r, o, n)
      );
    case 3:
      e: {
        if ((lS(t), e === null)) throw Error(Z(387));
        (r = t.pendingProps),
          (i = t.memoizedState),
          (o = i.element),
          Ix(e, t),
          Zu(t, r, null, n);
        var a = t.memoizedState;
        if (((r = a.element), i.isDehydrated))
          if (
            ((i = {
              element: r,
              isDehydrated: !1,
              cache: a.cache,
              pendingSuspenseBoundaries: a.pendingSuspenseBoundaries,
              transitions: a.transitions,
            }),
            (t.updateQueue.baseState = i),
            (t.memoizedState = i),
            t.flags & 256)
          ) {
            (o = Ji(Error(Z(423)), t)), (t = Dy(e, t, r, n, o));
            break e;
          } else if (r !== o) {
            (o = Ji(Error(Z(424)), t)), (t = Dy(e, t, r, n, o));
            break e;
          } else
            for (
              Cn = uo(t.stateNode.containerInfo.firstChild),
                En = t,
                tt = !0,
                ar = null,
                n = Mx(t, null, r, n),
                t.child = n;
              n;

            )
              (n.flags = (n.flags & -3) | 4096), (n = n.sibling);
        else {
          if ((Xi(), r === o)) {
            t = jr(e, t, n);
            break e;
          }
          Qt(e, t, r, n);
        }
        t = t.child;
      }
      return t;
    case 5:
      return (
        $x(t),
        e === null && Xp(t),
        (r = t.type),
        (o = t.pendingProps),
        (i = e !== null ? e.memoizedProps : null),
        (a = o.children),
        Hp(r, o) ? (a = null) : i !== null && Hp(r, i) && (t.flags |= 32),
        aS(e, t),
        Qt(e, t, a, n),
        t.child
      );
    case 6:
      return e === null && Xp(t), null;
    case 13:
      return sS(e, t, n);
    case 4:
      return (
        Rh(t, t.stateNode.containerInfo),
        (r = t.pendingProps),
        e === null ? (t.child = Qi(t, null, r, n)) : Qt(e, t, r, n),
        t.child
      );
    case 11:
      return (
        (r = t.type),
        (o = t.pendingProps),
        (o = t.elementType === r ? o : rr(r, o)),
        _y(e, t, r, o, n)
      );
    case 7:
      return Qt(e, t, t.pendingProps, n), t.child;
    case 8:
      return Qt(e, t, t.pendingProps.children, n), t.child;
    case 12:
      return Qt(e, t, t.pendingProps.children, n), t.child;
    case 10:
      e: {
        if (
          ((r = t.type._context),
          (o = t.pendingProps),
          (i = t.memoizedProps),
          (a = o.value),
          Ge(Xu, r._currentValue),
          (r._currentValue = a),
          i !== null)
        )
          if (cr(i.value, a)) {
            if (i.children === o.children && !fn.current) {
              t = jr(e, t, n);
              break e;
            }
          } else
            for (i = t.child, i !== null && (i.return = t); i !== null; ) {
              var l = i.dependencies;
              if (l !== null) {
                a = i.child;
                for (var s = l.firstContext; s !== null; ) {
                  if (s.context === r) {
                    if (i.tag === 1) {
                      (s = Mr(-1, n & -n)), (s.tag = 2);
                      var u = i.updateQueue;
                      if (u !== null) {
                        u = u.shared;
                        var c = u.pending;
                        c === null
                          ? (s.next = s)
                          : ((s.next = c.next), (c.next = s)),
                          (u.pending = s);
                      }
                    }
                    (i.lanes |= n),
                      (s = i.alternate),
                      s !== null && (s.lanes |= n),
                      Qp(i.return, n, t),
                      (l.lanes |= n);
                    break;
                  }
                  s = s.next;
                }
              } else if (i.tag === 10) a = i.type === t.type ? null : i.child;
              else if (i.tag === 18) {
                if (((a = i.return), a === null)) throw Error(Z(341));
                (a.lanes |= n),
                  (l = a.alternate),
                  l !== null && (l.lanes |= n),
                  Qp(a, n, t),
                  (a = i.sibling);
              } else a = i.child;
              if (a !== null) a.return = i;
              else
                for (a = i; a !== null; ) {
                  if (a === t) {
                    a = null;
                    break;
                  }
                  if (((i = a.sibling), i !== null)) {
                    (i.return = a.return), (a = i);
                    break;
                  }
                  a = a.return;
                }
              i = a;
            }
        Qt(e, t, o.children, n), (t = t.child);
      }
      return t;
    case 9:
      return (
        (o = t.type),
        (r = t.pendingProps.children),
        Ui(t, n),
        (o = Gn(o)),
        (r = r(o)),
        (t.flags |= 1),
        Qt(e, t, r, n),
        t.child
      );
    case 14:
      return (
        (r = t.type),
        (o = rr(r, t.pendingProps)),
        (o = rr(r.type, o)),
        Py(e, t, r, o, n)
      );
    case 15:
      return oS(e, t, t.type, t.pendingProps, n);
    case 17:
      return (
        (r = t.type),
        (o = t.pendingProps),
        (o = t.elementType === r ? o : rr(r, o)),
        Tu(e, t),
        (t.tag = 1),
        pn(r) ? ((e = !0), Ku(t)) : (e = !1),
        Ui(t, n),
        Nx(t, r, o),
        Jp(t, r, o, n),
        nv(null, t, r, !0, e, n)
      );
    case 19:
      return uS(e, t, n);
    case 22:
      return iS(e, t, n);
  }
  throw Error(Z(156, t.tag));
};
function ES(e, t) {
  return Qb(e, t);
}
function m_(e, t, n, r) {
  (this.tag = e),
    (this.key = n),
    (this.sibling =
      this.child =
      this.return =
      this.stateNode =
      this.type =
      this.elementType =
        null),
    (this.index = 0),
    (this.ref = null),
    (this.pendingProps = t),
    (this.dependencies =
      this.memoizedState =
      this.updateQueue =
      this.memoizedProps =
        null),
    (this.mode = r),
    (this.subtreeFlags = this.flags = 0),
    (this.deletions = null),
    (this.childLanes = this.lanes = 0),
    (this.alternate = null);
}
function zn(e, t, n, r) {
  return new m_(e, t, n, r);
}
function Fh(e) {
  return (e = e.prototype), !(!e || !e.isReactComponent);
}
function g_(e) {
  if (typeof e == "function") return Fh(e) ? 1 : 0;
  if (e != null) {
    if (((e = e.$$typeof), e === oh)) return 11;
    if (e === ih) return 14;
  }
  return 2;
}
function vo(e, t) {
  var n = e.alternate;
  return (
    n === null
      ? ((n = zn(e.tag, t, e.key, e.mode)),
        (n.elementType = e.elementType),
        (n.type = e.type),
        (n.stateNode = e.stateNode),
        (n.alternate = e),
        (e.alternate = n))
      : ((n.pendingProps = t),
        (n.type = e.type),
        (n.flags = 0),
        (n.subtreeFlags = 0),
        (n.deletions = null)),
    (n.flags = e.flags & 14680064),
    (n.childLanes = e.childLanes),
    (n.lanes = e.lanes),
    (n.child = e.child),
    (n.memoizedProps = e.memoizedProps),
    (n.memoizedState = e.memoizedState),
    (n.updateQueue = e.updateQueue),
    (t = e.dependencies),
    (n.dependencies =
      t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }),
    (n.sibling = e.sibling),
    (n.index = e.index),
    (n.ref = e.ref),
    n
  );
}
function ku(e, t, n, r, o, i) {
  var a = 2;
  if (((r = e), typeof e == "function")) Fh(e) && (a = 1);
  else if (typeof e == "string") a = 5;
  else
    e: switch (e) {
      case Ri:
        return Ko(n.children, o, i, t);
      case rh:
        (a = 8), (o |= 8);
        break;
      case Cp:
        return (
          (e = zn(12, n, t, o | 2)), (e.elementType = Cp), (e.lanes = i), e
        );
      case Rp:
        return (e = zn(13, n, t, o)), (e.elementType = Rp), (e.lanes = i), e;
      case Ep:
        return (e = zn(19, n, t, o)), (e.elementType = Ep), (e.lanes = i), e;
      case Ob:
        return Fc(n, o, i, t);
      default:
        if (typeof e == "object" && e !== null)
          switch (e.$$typeof) {
            case Ab:
              a = 10;
              break e;
            case Nb:
              a = 9;
              break e;
            case oh:
              a = 11;
              break e;
            case ih:
              a = 14;
              break e;
            case Qr:
              (a = 16), (r = null);
              break e;
          }
        throw Error(Z(130, e == null ? e : typeof e, ""));
    }
  return (
    (t = zn(a, n, t, o)), (t.elementType = e), (t.type = r), (t.lanes = i), t
  );
}
function Ko(e, t, n, r) {
  return (e = zn(7, e, r, t)), (e.lanes = n), e;
}
function Fc(e, t, n, r) {
  return (
    (e = zn(22, e, r, t)),
    (e.elementType = Ob),
    (e.lanes = n),
    (e.stateNode = { isHidden: !1 }),
    e
  );
}
function $f(e, t, n) {
  return (e = zn(6, e, null, t)), (e.lanes = n), e;
}
function Lf(e, t, n) {
  return (
    (t = zn(4, e.children !== null ? e.children : [], e.key, t)),
    (t.lanes = n),
    (t.stateNode = {
      containerInfo: e.containerInfo,
      pendingChildren: null,
      implementation: e.implementation,
    }),
    t
  );
}
function y_(e, t, n, r, o) {
  (this.tag = t),
    (this.containerInfo = e),
    (this.finishedWork =
      this.pingCache =
      this.current =
      this.pendingChildren =
        null),
    (this.timeoutHandle = -1),
    (this.callbackNode = this.pendingContext = this.context = null),
    (this.callbackPriority = 0),
    (this.eventTimes = gf(0)),
    (this.expirationTimes = gf(-1)),
    (this.entangledLanes =
      this.finishedLanes =
      this.mutableReadLanes =
      this.expiredLanes =
      this.pingedLanes =
      this.suspendedLanes =
      this.pendingLanes =
        0),
    (this.entanglements = gf(0)),
    (this.identifierPrefix = r),
    (this.onRecoverableError = o),
    (this.mutableSourceEagerHydrationData = null);
}
function jh(e, t, n, r, o, i, a, l, s) {
  return (
    (e = new y_(e, t, n, l, s)),
    t === 1 ? ((t = 1), i === !0 && (t |= 8)) : (t = 0),
    (i = zn(3, null, null, t)),
    (e.current = i),
    (i.stateNode = e),
    (i.memoizedState = {
      element: r,
      isDehydrated: n,
      cache: null,
      transitions: null,
      pendingSuspenseBoundaries: null,
    }),
    Ch(i),
    e
  );
}
function b_(e, t, n) {
  var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
  return {
    $$typeof: Ci,
    key: r == null ? null : "" + r,
    children: e,
    containerInfo: t,
    implementation: n,
  };
}
function TS(e) {
  if (!e) return So;
  e = e._reactInternals;
  e: {
    if (ai(e) !== e || e.tag !== 1) throw Error(Z(170));
    var t = e;
    do {
      switch (t.tag) {
        case 3:
          t = t.stateNode.context;
          break e;
        case 1:
          if (pn(t.type)) {
            t = t.stateNode.__reactInternalMemoizedMergedChildContext;
            break e;
          }
      }
      t = t.return;
    } while (t !== null);
    throw Error(Z(171));
  }
  if (e.tag === 1) {
    var n = e.type;
    if (pn(n)) return Ex(e, n, t);
  }
  return t;
}
function _S(e, t, n, r, o, i, a, l, s) {
  return (
    (e = jh(n, r, !0, e, o, i, a, l, s)),
    (e.context = TS(null)),
    (n = e.current),
    (r = Zt()),
    (o = po(n)),
    (i = Mr(r, o)),
    (i.callback = t ?? null),
    co(n, i, o),
    (e.current.lanes = o),
    is(e, o, r),
    vn(e, r),
    e
  );
}
function jc(e, t, n, r) {
  var o = t.current,
    i = Zt(),
    a = po(o);
  return (
    (n = TS(n)),
    t.context === null ? (t.context = n) : (t.pendingContext = n),
    (t = Mr(i, a)),
    (t.payload = { element: e }),
    (r = r === void 0 ? null : r),
    r !== null && (t.callback = r),
    (e = co(o, t, a)),
    e !== null && (ur(e, o, a, i), Cu(e, o, a)),
    a
  );
}
function ac(e) {
  if (((e = e.current), !e.child)) return null;
  switch (e.child.tag) {
    case 5:
      return e.child.stateNode;
    default:
      return e.child.stateNode;
  }
}
function jy(e, t) {
  if (((e = e.memoizedState), e !== null && e.dehydrated !== null)) {
    var n = e.retryLane;
    e.retryLane = n !== 0 && n < t ? n : t;
  }
}
function zh(e, t) {
  jy(e, t), (e = e.alternate) && jy(e, t);
}
function x_() {
  return null;
}
var PS =
  typeof reportError == "function"
    ? reportError
    : function (e) {
        console.error(e);
      };
function Uh(e) {
  this._internalRoot = e;
}
zc.prototype.render = Uh.prototype.render = function (e) {
  var t = this._internalRoot;
  if (t === null) throw Error(Z(409));
  jc(e, t, null, null);
};
zc.prototype.unmount = Uh.prototype.unmount = function () {
  var e = this._internalRoot;
  if (e !== null) {
    this._internalRoot = null;
    var t = e.containerInfo;
    Jo(function () {
      jc(null, e, null, null);
    }),
      (t[Br] = null);
  }
};
function zc(e) {
  this._internalRoot = e;
}
zc.prototype.unstable_scheduleHydration = function (e) {
  if (e) {
    var t = ox();
    e = { blockedOn: null, target: e, priority: t };
    for (var n = 0; n < eo.length && t !== 0 && t < eo[n].priority; n++);
    eo.splice(n, 0, e), n === 0 && ax(e);
  }
};
function Vh(e) {
  return !(!e || (e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11));
}
function Uc(e) {
  return !(
    !e ||
    (e.nodeType !== 1 &&
      e.nodeType !== 9 &&
      e.nodeType !== 11 &&
      (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "))
  );
}
function zy() {}
function S_(e, t, n, r, o) {
  if (o) {
    if (typeof r == "function") {
      var i = r;
      r = function () {
        var u = ac(a);
        i.call(u);
      };
    }
    var a = _S(t, r, e, 0, null, !1, !1, "", zy);
    return (
      (e._reactRootContainer = a),
      (e[Br] = a.current),
      Ol(e.nodeType === 8 ? e.parentNode : e),
      Jo(),
      a
    );
  }
  for (; (o = e.lastChild); ) e.removeChild(o);
  if (typeof r == "function") {
    var l = r;
    r = function () {
      var u = ac(s);
      l.call(u);
    };
  }
  var s = jh(e, 0, !1, null, null, !1, !1, "", zy);
  return (
    (e._reactRootContainer = s),
    (e[Br] = s.current),
    Ol(e.nodeType === 8 ? e.parentNode : e),
    Jo(function () {
      jc(t, s, n, r);
    }),
    s
  );
}
function Vc(e, t, n, r, o) {
  var i = n._reactRootContainer;
  if (i) {
    var a = i;
    if (typeof o == "function") {
      var l = o;
      o = function () {
        var s = ac(a);
        l.call(s);
      };
    }
    jc(t, a, e, o);
  } else a = S_(n, t, e, o, r);
  return ac(a);
}
nx = function (e) {
  switch (e.tag) {
    case 3:
      var t = e.stateNode;
      if (t.current.memoizedState.isDehydrated) {
        var n = el(t.pendingLanes);
        n !== 0 &&
          (sh(t, n | 1), vn(t, vt()), !(Ne & 6) && ((ea = vt() + 500), To()));
      }
      break;
    case 13:
      Jo(function () {
        var r = Fr(e, 1);
        if (r !== null) {
          var o = Zt();
          ur(r, e, 1, o);
        }
      }),
        zh(e, 1);
  }
};
uh = function (e) {
  if (e.tag === 13) {
    var t = Fr(e, 134217728);
    if (t !== null) {
      var n = Zt();
      ur(t, e, 134217728, n);
    }
    zh(e, 134217728);
  }
};
rx = function (e) {
  if (e.tag === 13) {
    var t = po(e),
      n = Fr(e, t);
    if (n !== null) {
      var r = Zt();
      ur(n, e, t, r);
    }
    zh(e, t);
  }
};
ox = function () {
  return je;
};
ix = function (e, t) {
  var n = je;
  try {
    return (je = e), t();
  } finally {
    je = n;
  }
};
Mp = function (e, t, n) {
  switch (t) {
    case "input":
      if ((Pp(e, n), (t = n.name), n.type === "radio" && t != null)) {
        for (n = e; n.parentNode; ) n = n.parentNode;
        for (
          n = n.querySelectorAll(
            "input[name=" + JSON.stringify("" + t) + '][type="radio"]'
          ),
            t = 0;
          t < n.length;
          t++
        ) {
          var r = n[t];
          if (r !== e && r.form === e.form) {
            var o = Nc(r);
            if (!o) throw Error(Z(90));
            $b(r), Pp(r, o);
          }
        }
      }
      break;
    case "textarea":
      Bb(e, n);
      break;
    case "select":
      (t = n.value), t != null && Bi(e, !!n.multiple, t, !1);
  }
};
Hb = $h;
Gb = Jo;
var w_ = { usingClientEntryPoint: !1, Events: [ls, Pi, Nc, Vb, Wb, $h] },
  Oa = {
    findFiberByHostInstance: zo,
    bundleType: 0,
    version: "18.2.0",
    rendererPackageName: "react-dom",
  },
  C_ = {
    bundleType: Oa.bundleType,
    version: Oa.version,
    rendererPackageName: Oa.rendererPackageName,
    rendererConfig: Oa.rendererConfig,
    overrideHookState: null,
    overrideHookStateDeletePath: null,
    overrideHookStateRenamePath: null,
    overrideProps: null,
    overridePropsDeletePath: null,
    overridePropsRenamePath: null,
    setErrorHandler: null,
    setSuspenseHandler: null,
    scheduleUpdate: null,
    currentDispatcherRef: Vr.ReactCurrentDispatcher,
    findHostInstanceByFiber: function (e) {
      return (e = Yb(e)), e === null ? null : e.stateNode;
    },
    findFiberByHostInstance: Oa.findFiberByHostInstance || x_,
    findHostInstancesForRefresh: null,
    scheduleRefresh: null,
    scheduleRoot: null,
    setRefreshHandler: null,
    getCurrentFiber: null,
    reconcilerVersion: "18.2.0-next-9e3b772b8-20220608",
  };
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
  var Js = __REACT_DEVTOOLS_GLOBAL_HOOK__;
  if (!Js.isDisabled && Js.supportsFiber)
    try {
      (kc = Js.inject(C_)), (Sr = Js);
    } catch {}
}
In.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = w_;
In.createPortal = function (e, t) {
  var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
  if (!Vh(t)) throw Error(Z(200));
  return b_(e, t, null, n);
};
In.createRoot = function (e, t) {
  if (!Vh(e)) throw Error(Z(299));
  var n = !1,
    r = "",
    o = PS;
  return (
    t != null &&
      (t.unstable_strictMode === !0 && (n = !0),
      t.identifierPrefix !== void 0 && (r = t.identifierPrefix),
      t.onRecoverableError !== void 0 && (o = t.onRecoverableError)),
    (t = jh(e, 1, !1, null, null, n, !1, r, o)),
    (e[Br] = t.current),
    Ol(e.nodeType === 8 ? e.parentNode : e),
    new Uh(t)
  );
};
In.findDOMNode = function (e) {
  if (e == null) return null;
  if (e.nodeType === 1) return e;
  var t = e._reactInternals;
  if (t === void 0)
    throw typeof e.render == "function"
      ? Error(Z(188))
      : ((e = Object.keys(e).join(",")), Error(Z(268, e)));
  return (e = Yb(t)), (e = e === null ? null : e.stateNode), e;
};
In.flushSync = function (e) {
  return Jo(e);
};
In.hydrate = function (e, t, n) {
  if (!Uc(t)) throw Error(Z(200));
  return Vc(null, e, t, !0, n);
};
In.hydrateRoot = function (e, t, n) {
  if (!Vh(e)) throw Error(Z(405));
  var r = (n != null && n.hydratedSources) || null,
    o = !1,
    i = "",
    a = PS;
  if (
    (n != null &&
      (n.unstable_strictMode === !0 && (o = !0),
      n.identifierPrefix !== void 0 && (i = n.identifierPrefix),
      n.onRecoverableError !== void 0 && (a = n.onRecoverableError)),
    (t = _S(t, null, e, 1, n ?? null, o, !1, i, a)),
    (e[Br] = t.current),
    Ol(e),
    r)
  )
    for (e = 0; e < r.length; e++)
      (n = r[e]),
        (o = n._getVersion),
        (o = o(n._source)),
        t.mutableSourceEagerHydrationData == null
          ? (t.mutableSourceEagerHydrationData = [n, o])
          : t.mutableSourceEagerHydrationData.push(n, o);
  return new zc(t);
};
In.render = function (e, t, n) {
  if (!Uc(t)) throw Error(Z(200));
  return Vc(null, e, t, !1, n);
};
In.unmountComponentAtNode = function (e) {
  if (!Uc(e)) throw Error(Z(40));
  return e._reactRootContainer
    ? (Jo(function () {
        Vc(null, null, e, !1, function () {
          (e._reactRootContainer = null), (e[Br] = null);
        });
      }),
      !0)
    : !1;
};
In.unstable_batchedUpdates = $h;
In.unstable_renderSubtreeIntoContainer = function (e, t, n, r) {
  if (!Uc(n)) throw Error(Z(200));
  if (e == null || e._reactInternals === void 0) throw Error(Z(38));
  return Vc(e, t, n, !1, r);
};
In.version = "18.2.0-next-9e3b772b8-20220608";
function kS() {
  if (
    !(
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" ||
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"
    )
  )
    try {
      __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(kS);
    } catch (e) {
      console.error(e);
    }
}
kS(), (_b.exports = In);
var Wc = _b.exports;
const Mi = _c(Wc);
var Uy = Wc;
(Sp.createRoot = Uy.createRoot), (Sp.hydrateRoot = Uy.hydrateRoot);
var DS = { exports: {} },
  R_ = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED",
  E_ = R_,
  T_ = E_;
function IS() {}
function AS() {}
AS.resetWarningCache = IS;
var __ = function () {
  function e(r, o, i, a, l, s) {
    if (s !== T_) {
      var u = new Error(
        "Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types"
      );
      throw ((u.name = "Invariant Violation"), u);
    }
  }
  e.isRequired = e;
  function t() {
    return e;
  }
  var n = {
    array: e,
    bigint: e,
    bool: e,
    func: e,
    number: e,
    object: e,
    string: e,
    symbol: e,
    any: e,
    arrayOf: t,
    element: e,
    elementType: e,
    instanceOf: t,
    node: e,
    objectOf: t,
    oneOf: t,
    oneOfType: t,
    shape: t,
    exact: t,
    checkPropTypes: AS,
    resetWarningCache: IS,
  };
  return (n.PropTypes = n), n;
};
DS.exports = __();
var P_ = DS.exports;
const Vy = _c(P_);
function T() {
  return (
    (T = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
              Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    T.apply(this, arguments)
  );
}
function Bo(e) {
  return e !== null && typeof e == "object" && e.constructor === Object;
}
function NS(e) {
  if (!Bo(e)) return e;
  const t = {};
  return (
    Object.keys(e).forEach((n) => {
      t[n] = NS(e[n]);
    }),
    t
  );
}
function $r(e, t, n = { clone: !0 }) {
  const r = n.clone ? T({}, e) : e;
  return (
    Bo(e) &&
      Bo(t) &&
      Object.keys(t).forEach((o) => {
        o !== "__proto__" &&
          (Bo(t[o]) && o in e && Bo(e[o])
            ? (r[o] = $r(e[o], t[o], n))
            : n.clone
            ? (r[o] = Bo(t[o]) ? NS(t[o]) : t[o])
            : (r[o] = t[o]));
      }),
    r
  );
}
function ta(e) {
  let t = "https://mui.com/production-error/?code=" + e;
  for (let n = 1; n < arguments.length; n += 1)
    t += "&args[]=" + encodeURIComponent(arguments[n]);
  return "Minified MUI error #" + e + "; visit " + t + " for the full message.";
}
function pe(e) {
  if (typeof e != "string") throw new Error(ta(7));
  return e.charAt(0).toUpperCase() + e.slice(1);
}
function vv(...e) {
  return e.reduce(
    (t, n) =>
      n == null
        ? t
        : function (...o) {
            t.apply(this, o), n.apply(this, o);
          },
    () => {}
  );
}
function OS(e, t = 166) {
  let n;
  function r(...o) {
    const i = () => {
      e.apply(this, o);
    };
    clearTimeout(n), (n = setTimeout(i, t));
  }
  return (
    (r.clear = () => {
      clearTimeout(n);
    }),
    r
  );
}
function k_(e, t) {
  return () => null;
}
function D_(e, t) {
  return S.isValidElement(e) && t.indexOf(e.type.muiName) !== -1;
}
function Jt(e) {
  return (e && e.ownerDocument) || document;
}
function na(e) {
  return Jt(e).defaultView || window;
}
function I_(e, t) {
  return () => null;
}
function lc(e, t) {
  typeof e == "function" ? e(t) : e && (e.current = t);
}
const A_ = typeof window < "u" ? S.useLayoutEffect : S.useEffect,
  wo = A_;
let Wy = 0;
function N_(e) {
  const [t, n] = S.useState(e),
    r = e || t;
  return (
    S.useEffect(() => {
      t == null && ((Wy += 1), n(`mui-${Wy}`));
    }, [t]),
    r
  );
}
const Hy = xp["useId"];
function Wh(e) {
  if (Hy !== void 0) {
    const t = Hy();
    return e ?? t;
  }
  return N_(e);
}
function O_(e, t, n, r, o) {
  return null;
}
function Hh({ controlled: e, default: t, name: n, state: r = "value" }) {
  const { current: o } = S.useRef(e !== void 0),
    [i, a] = S.useState(t),
    l = o ? e : i,
    s = S.useCallback((u) => {
      o || a(u);
    }, []);
  return [l, s];
}
function oo(e) {
  const t = S.useRef(e);
  return (
    wo(() => {
      t.current = e;
    }),
    S.useCallback((...n) => (0, t.current)(...n), [])
  );
}
function en(...e) {
  return S.useMemo(
    () =>
      e.every((t) => t == null)
        ? null
        : (t) => {
            e.forEach((n) => {
              lc(n, t);
            });
          },
    e
  );
}
let Hc = !0,
  hv = !1,
  Gy;
const M_ = {
  text: !0,
  search: !0,
  url: !0,
  tel: !0,
  email: !0,
  password: !0,
  number: !0,
  date: !0,
  month: !0,
  week: !0,
  time: !0,
  datetime: !0,
  "datetime-local": !0,
};
function $_(e) {
  const { type: t, tagName: n } = e;
  return !!(
    (n === "INPUT" && M_[t] && !e.readOnly) ||
    (n === "TEXTAREA" && !e.readOnly) ||
    e.isContentEditable
  );
}
function L_(e) {
  e.metaKey || e.altKey || e.ctrlKey || (Hc = !0);
}
function Bf() {
  Hc = !1;
}
function B_() {
  this.visibilityState === "hidden" && hv && (Hc = !0);
}
function F_(e) {
  e.addEventListener("keydown", L_, !0),
    e.addEventListener("mousedown", Bf, !0),
    e.addEventListener("pointerdown", Bf, !0),
    e.addEventListener("touchstart", Bf, !0),
    e.addEventListener("visibilitychange", B_, !0);
}
function j_(e) {
  const { target: t } = e;
  try {
    return t.matches(":focus-visible");
  } catch {}
  return Hc || $_(t);
}
function Gh() {
  const e = S.useCallback((o) => {
      o != null && F_(o.ownerDocument);
    }, []),
    t = S.useRef(!1);
  function n() {
    return t.current
      ? ((hv = !0),
        window.clearTimeout(Gy),
        (Gy = window.setTimeout(() => {
          hv = !1;
        }, 100)),
        (t.current = !1),
        !0)
      : !1;
  }
  function r(o) {
    return j_(o) ? ((t.current = !0), !0) : !1;
  }
  return { isFocusVisibleRef: t, onFocus: r, onBlur: n, ref: e };
}
function MS(e) {
  const t = e.documentElement.clientWidth;
  return Math.abs(window.innerWidth - t);
}
const z_ = (e) => {
    const t = S.useRef({});
    return (
      S.useEffect(() => {
        t.current = e;
      }),
      t.current
    );
  },
  $S = z_;
function Kh(e, t) {
  const n = T({}, t);
  return (
    Object.keys(e).forEach((r) => {
      if (r.toString().match(/^(components|slots)$/)) n[r] = T({}, e[r], n[r]);
      else if (r.toString().match(/^(componentsProps|slotProps)$/)) {
        const o = e[r] || {},
          i = t[r];
        (n[r] = {}),
          !i || !Object.keys(i)
            ? (n[r] = o)
            : !o || !Object.keys(o)
            ? (n[r] = i)
            : ((n[r] = T({}, i)),
              Object.keys(o).forEach((a) => {
                n[r][a] = Kh(o[a], i[a]);
              }));
      } else n[r] === void 0 && (n[r] = e[r]);
    }),
    n
  );
}
function dt(e, t, n = void 0) {
  const r = {};
  return (
    Object.keys(e).forEach((o) => {
      r[o] = e[o]
        .reduce((i, a) => {
          if (a) {
            const l = t(a);
            l !== "" && i.push(l), n && n[a] && i.push(n[a]);
          }
          return i;
        }, [])
        .join(" ");
    }),
    r
  );
}
const Ky = (e) => e,
  U_ = () => {
    let e = Ky;
    return {
      configure(t) {
        e = t;
      },
      generate(t) {
        return e(t);
      },
      reset() {
        e = Ky;
      },
    };
  },
  V_ = U_(),
  qh = V_,
  W_ = {
    active: "active",
    checked: "checked",
    completed: "completed",
    disabled: "disabled",
    readOnly: "readOnly",
    error: "error",
    expanded: "expanded",
    focused: "focused",
    focusVisible: "focusVisible",
    required: "required",
    selected: "selected",
  };
function lt(e, t, n = "Mui") {
  const r = W_[t];
  return r ? `${n}-${r}` : `${qh.generate(e)}-${t}`;
}
function Ke(e, t, n = "Mui") {
  const r = {};
  return (
    t.forEach((o) => {
      r[o] = lt(e, o, n);
    }),
    r
  );
}
const Gc = "$$material";
function xe(e, t) {
  if (e == null) return {};
  var n = {},
    r = Object.keys(e),
    o,
    i;
  for (i = 0; i < r.length; i++)
    (o = r[i]), !(t.indexOf(o) >= 0) && (n[o] = e[o]);
  return n;
}
function LS(e) {
  var t = Object.create(null);
  return function (n) {
    return t[n] === void 0 && (t[n] = e(n)), t[n];
  };
}
var H_ =
    /^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|download|draggable|encType|enterKeyHint|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/,
  G_ = LS(function (e) {
    return (
      H_.test(e) ||
      (e.charCodeAt(0) === 111 &&
        e.charCodeAt(1) === 110 &&
        e.charCodeAt(2) < 91)
    );
  });
function K_(e) {
  if (e.sheet) return e.sheet;
  for (var t = 0; t < document.styleSheets.length; t++)
    if (document.styleSheets[t].ownerNode === e) return document.styleSheets[t];
}
function q_(e) {
  var t = document.createElement("style");
  return (
    t.setAttribute("data-emotion", e.key),
    e.nonce !== void 0 && t.setAttribute("nonce", e.nonce),
    t.appendChild(document.createTextNode("")),
    t.setAttribute("data-s", ""),
    t
  );
}
var Y_ = (function () {
    function e(n) {
      var r = this;
      (this._insertTag = function (o) {
        var i;
        r.tags.length === 0
          ? r.insertionPoint
            ? (i = r.insertionPoint.nextSibling)
            : r.prepend
            ? (i = r.container.firstChild)
            : (i = r.before)
          : (i = r.tags[r.tags.length - 1].nextSibling),
          r.container.insertBefore(o, i),
          r.tags.push(o);
      }),
        (this.isSpeedy = n.speedy === void 0 ? !0 : n.speedy),
        (this.tags = []),
        (this.ctr = 0),
        (this.nonce = n.nonce),
        (this.key = n.key),
        (this.container = n.container),
        (this.prepend = n.prepend),
        (this.insertionPoint = n.insertionPoint),
        (this.before = null);
    }
    var t = e.prototype;
    return (
      (t.hydrate = function (r) {
        r.forEach(this._insertTag);
      }),
      (t.insert = function (r) {
        this.ctr % (this.isSpeedy ? 65e3 : 1) === 0 &&
          this._insertTag(q_(this));
        var o = this.tags[this.tags.length - 1];
        if (this.isSpeedy) {
          var i = K_(o);
          try {
            i.insertRule(r, i.cssRules.length);
          } catch {}
        } else o.appendChild(document.createTextNode(r));
        this.ctr++;
      }),
      (t.flush = function () {
        this.tags.forEach(function (r) {
          return r.parentNode && r.parentNode.removeChild(r);
        }),
          (this.tags = []),
          (this.ctr = 0);
      }),
      e
    );
  })(),
  Wt = "-ms-",
  sc = "-moz-",
  Me = "-webkit-",
  BS = "comm",
  Yh = "rule",
  Xh = "decl",
  X_ = "@import",
  FS = "@keyframes",
  Q_ = "@layer",
  Z_ = Math.abs,
  Kc = String.fromCharCode,
  J_ = Object.assign;
function eP(e, t) {
  return $t(e, 0) ^ 45
    ? (((((((t << 2) ^ $t(e, 0)) << 2) ^ $t(e, 1)) << 2) ^ $t(e, 2)) << 2) ^
        $t(e, 3)
    : 0;
}
function jS(e) {
  return e.trim();
}
function tP(e, t) {
  return (e = t.exec(e)) ? e[0] : e;
}
function $e(e, t, n) {
  return e.replace(t, n);
}
function mv(e, t) {
  return e.indexOf(t);
}
function $t(e, t) {
  return e.charCodeAt(t) | 0;
}
function Vl(e, t, n) {
  return e.slice(t, n);
}
function gr(e) {
  return e.length;
}
function Qh(e) {
  return e.length;
}
function eu(e, t) {
  return t.push(e), e;
}
function nP(e, t) {
  return e.map(t).join("");
}
var qc = 1,
  ra = 1,
  zS = 0,
  yn = 0,
  gt = 0,
  xa = "";
function Yc(e, t, n, r, o, i, a) {
  return {
    value: e,
    root: t,
    parent: n,
    type: r,
    props: o,
    children: i,
    line: qc,
    column: ra,
    length: a,
    return: "",
  };
}
function Ma(e, t) {
  return J_(Yc("", null, null, "", null, null, 0), e, { length: -e.length }, t);
}
function rP() {
  return gt;
}
function oP() {
  return (
    (gt = yn > 0 ? $t(xa, --yn) : 0), ra--, gt === 10 && ((ra = 1), qc--), gt
  );
}
function Tn() {
  return (
    (gt = yn < zS ? $t(xa, yn++) : 0), ra++, gt === 10 && ((ra = 1), qc++), gt
  );
}
function Cr() {
  return $t(xa, yn);
}
function Du() {
  return yn;
}
function us(e, t) {
  return Vl(xa, e, t);
}
function Wl(e) {
  switch (e) {
    case 0:
    case 9:
    case 10:
    case 13:
    case 32:
      return 5;
    case 33:
    case 43:
    case 44:
    case 47:
    case 62:
    case 64:
    case 126:
    case 59:
    case 123:
    case 125:
      return 4;
    case 58:
      return 3;
    case 34:
    case 39:
    case 40:
    case 91:
      return 2;
    case 41:
    case 93:
      return 1;
  }
  return 0;
}
function US(e) {
  return (qc = ra = 1), (zS = gr((xa = e))), (yn = 0), [];
}
function VS(e) {
  return (xa = ""), e;
}
function Iu(e) {
  return jS(us(yn - 1, gv(e === 91 ? e + 2 : e === 40 ? e + 1 : e)));
}
function iP(e) {
  for (; (gt = Cr()) && gt < 33; ) Tn();
  return Wl(e) > 2 || Wl(gt) > 3 ? "" : " ";
}
function aP(e, t) {
  for (
    ;
    --t &&
    Tn() &&
    !(gt < 48 || gt > 102 || (gt > 57 && gt < 65) || (gt > 70 && gt < 97));

  );
  return us(e, Du() + (t < 6 && Cr() == 32 && Tn() == 32));
}
function gv(e) {
  for (; Tn(); )
    switch (gt) {
      case e:
        return yn;
      case 34:
      case 39:
        e !== 34 && e !== 39 && gv(gt);
        break;
      case 40:
        e === 41 && gv(e);
        break;
      case 92:
        Tn();
        break;
    }
  return yn;
}
function lP(e, t) {
  for (; Tn() && e + gt !== 47 + 10; )
    if (e + gt === 42 + 42 && Cr() === 47) break;
  return "/*" + us(t, yn - 1) + "*" + Kc(e === 47 ? e : Tn());
}
function sP(e) {
  for (; !Wl(Cr()); ) Tn();
  return us(e, yn);
}
function uP(e) {
  return VS(Au("", null, null, null, [""], (e = US(e)), 0, [0], e));
}
function Au(e, t, n, r, o, i, a, l, s) {
  for (
    var u = 0,
      c = 0,
      d = a,
      f = 0,
      p = 0,
      h = 0,
      g = 1,
      x = 1,
      v = 1,
      m = 0,
      y = "",
      b = o,
      C = i,
      R = r,
      E = y;
    x;

  )
    switch (((h = m), (m = Tn()))) {
      case 40:
        if (h != 108 && $t(E, d - 1) == 58) {
          mv((E += $e(Iu(m), "&", "&\f")), "&\f") != -1 && (v = -1);
          break;
        }
      case 34:
      case 39:
      case 91:
        E += Iu(m);
        break;
      case 9:
      case 10:
      case 13:
      case 32:
        E += iP(h);
        break;
      case 92:
        E += aP(Du() - 1, 7);
        continue;
      case 47:
        switch (Cr()) {
          case 42:
          case 47:
            eu(cP(lP(Tn(), Du()), t, n), s);
            break;
          default:
            E += "/";
        }
        break;
      case 123 * g:
        l[u++] = gr(E) * v;
      case 125 * g:
      case 59:
      case 0:
        switch (m) {
          case 0:
          case 125:
            x = 0;
          case 59 + c:
            v == -1 && (E = $e(E, /\f/g, "")),
              p > 0 &&
                gr(E) - d &&
                eu(
                  p > 32
                    ? Yy(E + ";", r, n, d - 1)
                    : Yy($e(E, " ", "") + ";", r, n, d - 2),
                  s
                );
            break;
          case 59:
            E += ";";
          default:
            if (
              (eu((R = qy(E, t, n, u, c, o, l, y, (b = []), (C = []), d)), i),
              m === 123)
            )
              if (c === 0) Au(E, t, R, R, b, i, d, l, C);
              else
                switch (f === 99 && $t(E, 3) === 110 ? 100 : f) {
                  case 100:
                  case 108:
                  case 109:
                  case 115:
                    Au(
                      e,
                      R,
                      R,
                      r && eu(qy(e, R, R, 0, 0, o, l, y, o, (b = []), d), C),
                      o,
                      C,
                      d,
                      l,
                      r ? b : C
                    );
                    break;
                  default:
                    Au(E, R, R, R, [""], C, 0, l, C);
                }
        }
        (u = c = p = 0), (g = v = 1), (y = E = ""), (d = a);
        break;
      case 58:
        (d = 1 + gr(E)), (p = h);
      default:
        if (g < 1) {
          if (m == 123) --g;
          else if (m == 125 && g++ == 0 && oP() == 125) continue;
        }
        switch (((E += Kc(m)), m * g)) {
          case 38:
            v = c > 0 ? 1 : ((E += "\f"), -1);
            break;
          case 44:
            (l[u++] = (gr(E) - 1) * v), (v = 1);
            break;
          case 64:
            Cr() === 45 && (E += Iu(Tn())),
              (f = Cr()),
              (c = d = gr((y = E += sP(Du())))),
              m++;
            break;
          case 45:
            h === 45 && gr(E) == 2 && (g = 0);
        }
    }
  return i;
}
function qy(e, t, n, r, o, i, a, l, s, u, c) {
  for (
    var d = o - 1, f = o === 0 ? i : [""], p = Qh(f), h = 0, g = 0, x = 0;
    h < r;
    ++h
  )
    for (var v = 0, m = Vl(e, d + 1, (d = Z_((g = a[h])))), y = e; v < p; ++v)
      (y = jS(g > 0 ? f[v] + " " + m : $e(m, /&\f/g, f[v]))) && (s[x++] = y);
  return Yc(e, t, n, o === 0 ? Yh : l, s, u, c);
}
function cP(e, t, n) {
  return Yc(e, t, n, BS, Kc(rP()), Vl(e, 2, -2), 0);
}
function Yy(e, t, n, r) {
  return Yc(e, t, n, Xh, Vl(e, 0, r), Vl(e, r + 1, -1), r);
}
function Wi(e, t) {
  for (var n = "", r = Qh(e), o = 0; o < r; o++) n += t(e[o], o, e, t) || "";
  return n;
}
function dP(e, t, n, r) {
  switch (e.type) {
    case Q_:
      if (e.children.length) break;
    case X_:
    case Xh:
      return (e.return = e.return || e.value);
    case BS:
      return "";
    case FS:
      return (e.return = e.value + "{" + Wi(e.children, r) + "}");
    case Yh:
      e.value = e.props.join(",");
  }
  return gr((n = Wi(e.children, r)))
    ? (e.return = e.value + "{" + n + "}")
    : "";
}
function fP(e) {
  var t = Qh(e);
  return function (n, r, o, i) {
    for (var a = "", l = 0; l < t; l++) a += e[l](n, r, o, i) || "";
    return a;
  };
}
function pP(e) {
  return function (t) {
    t.root || ((t = t.return) && e(t));
  };
}
var vP = function (t, n, r) {
    for (
      var o = 0, i = 0;
      (o = i), (i = Cr()), o === 38 && i === 12 && (n[r] = 1), !Wl(i);

    )
      Tn();
    return us(t, yn);
  },
  hP = function (t, n) {
    var r = -1,
      o = 44;
    do
      switch (Wl(o)) {
        case 0:
          o === 38 && Cr() === 12 && (n[r] = 1), (t[r] += vP(yn - 1, n, r));
          break;
        case 2:
          t[r] += Iu(o);
          break;
        case 4:
          if (o === 44) {
            (t[++r] = Cr() === 58 ? "&\f" : ""), (n[r] = t[r].length);
            break;
          }
        default:
          t[r] += Kc(o);
      }
    while ((o = Tn()));
    return t;
  },
  mP = function (t, n) {
    return VS(hP(US(t), n));
  },
  Xy = new WeakMap(),
  gP = function (t) {
    if (!(t.type !== "rule" || !t.parent || t.length < 1)) {
      for (
        var n = t.value,
          r = t.parent,
          o = t.column === r.column && t.line === r.line;
        r.type !== "rule";

      )
        if (((r = r.parent), !r)) return;
      if (
        !(t.props.length === 1 && n.charCodeAt(0) !== 58 && !Xy.get(r)) &&
        !o
      ) {
        Xy.set(t, !0);
        for (
          var i = [], a = mP(n, i), l = r.props, s = 0, u = 0;
          s < a.length;
          s++
        )
          for (var c = 0; c < l.length; c++, u++)
            t.props[u] = i[s] ? a[s].replace(/&\f/g, l[c]) : l[c] + " " + a[s];
      }
    }
  },
  yP = function (t) {
    if (t.type === "decl") {
      var n = t.value;
      n.charCodeAt(0) === 108 &&
        n.charCodeAt(2) === 98 &&
        ((t.return = ""), (t.value = ""));
    }
  };
function WS(e, t) {
  switch (eP(e, t)) {
    case 5103:
      return Me + "print-" + e + e;
    case 5737:
    case 4201:
    case 3177:
    case 3433:
    case 1641:
    case 4457:
    case 2921:
    case 5572:
    case 6356:
    case 5844:
    case 3191:
    case 6645:
    case 3005:
    case 6391:
    case 5879:
    case 5623:
    case 6135:
    case 4599:
    case 4855:
    case 4215:
    case 6389:
    case 5109:
    case 5365:
    case 5621:
    case 3829:
      return Me + e + e;
    case 5349:
    case 4246:
    case 4810:
    case 6968:
    case 2756:
      return Me + e + sc + e + Wt + e + e;
    case 6828:
    case 4268:
      return Me + e + Wt + e + e;
    case 6165:
      return Me + e + Wt + "flex-" + e + e;
    case 5187:
      return (
        Me + e + $e(e, /(\w+).+(:[^]+)/, Me + "box-$1$2" + Wt + "flex-$1$2") + e
      );
    case 5443:
      return Me + e + Wt + "flex-item-" + $e(e, /flex-|-self/, "") + e;
    case 4675:
      return (
        Me +
        e +
        Wt +
        "flex-line-pack" +
        $e(e, /align-content|flex-|-self/, "") +
        e
      );
    case 5548:
      return Me + e + Wt + $e(e, "shrink", "negative") + e;
    case 5292:
      return Me + e + Wt + $e(e, "basis", "preferred-size") + e;
    case 6060:
      return (
        Me +
        "box-" +
        $e(e, "-grow", "") +
        Me +
        e +
        Wt +
        $e(e, "grow", "positive") +
        e
      );
    case 4554:
      return Me + $e(e, /([^-])(transform)/g, "$1" + Me + "$2") + e;
    case 6187:
      return (
        $e(
          $e($e(e, /(zoom-|grab)/, Me + "$1"), /(image-set)/, Me + "$1"),
          e,
          ""
        ) + e
      );
    case 5495:
    case 3959:
      return $e(e, /(image-set\([^]*)/, Me + "$1$`$1");
    case 4968:
      return (
        $e(
          $e(e, /(.+:)(flex-)?(.*)/, Me + "box-pack:$3" + Wt + "flex-pack:$3"),
          /s.+-b[^;]+/,
          "justify"
        ) +
        Me +
        e +
        e
      );
    case 4095:
    case 3583:
    case 4068:
    case 2532:
      return $e(e, /(.+)-inline(.+)/, Me + "$1$2") + e;
    case 8116:
    case 7059:
    case 5753:
    case 5535:
    case 5445:
    case 5701:
    case 4933:
    case 4677:
    case 5533:
    case 5789:
    case 5021:
    case 4765:
      if (gr(e) - 1 - t > 6)
        switch ($t(e, t + 1)) {
          case 109:
            if ($t(e, t + 4) !== 45) break;
          case 102:
            return (
              $e(
                e,
                /(.+:)(.+)-([^]+)/,
                "$1" +
                  Me +
                  "$2-$3$1" +
                  sc +
                  ($t(e, t + 3) == 108 ? "$3" : "$2-$3")
              ) + e
            );
          case 115:
            return ~mv(e, "stretch")
              ? WS($e(e, "stretch", "fill-available"), t) + e
              : e;
        }
      break;
    case 4949:
      if ($t(e, t + 1) !== 115) break;
    case 6444:
      switch ($t(e, gr(e) - 3 - (~mv(e, "!important") && 10))) {
        case 107:
          return $e(e, ":", ":" + Me) + e;
        case 101:
          return (
            $e(
              e,
              /(.+:)([^;!]+)(;|!.+)?/,
              "$1" +
                Me +
                ($t(e, 14) === 45 ? "inline-" : "") +
                "box$3$1" +
                Me +
                "$2$3$1" +
                Wt +
                "$2box$3"
            ) + e
          );
      }
      break;
    case 5936:
      switch ($t(e, t + 11)) {
        case 114:
          return Me + e + Wt + $e(e, /[svh]\w+-[tblr]{2}/, "tb") + e;
        case 108:
          return Me + e + Wt + $e(e, /[svh]\w+-[tblr]{2}/, "tb-rl") + e;
        case 45:
          return Me + e + Wt + $e(e, /[svh]\w+-[tblr]{2}/, "lr") + e;
      }
      return Me + e + Wt + e + e;
  }
  return e;
}
var bP = function (t, n, r, o) {
    if (t.length > -1 && !t.return)
      switch (t.type) {
        case Xh:
          t.return = WS(t.value, t.length);
          break;
        case FS:
          return Wi([Ma(t, { value: $e(t.value, "@", "@" + Me) })], o);
        case Yh:
          if (t.length)
            return nP(t.props, function (i) {
              switch (tP(i, /(::plac\w+|:read-\w+)/)) {
                case ":read-only":
                case ":read-write":
                  return Wi(
                    [Ma(t, { props: [$e(i, /:(read-\w+)/, ":" + sc + "$1")] })],
                    o
                  );
                case "::placeholder":
                  return Wi(
                    [
                      Ma(t, {
                        props: [$e(i, /:(plac\w+)/, ":" + Me + "input-$1")],
                      }),
                      Ma(t, { props: [$e(i, /:(plac\w+)/, ":" + sc + "$1")] }),
                      Ma(t, { props: [$e(i, /:(plac\w+)/, Wt + "input-$1")] }),
                    ],
                    o
                  );
              }
              return "";
            });
      }
  },
  xP = [bP],
  SP = function (t) {
    var n = t.key;
    if (n === "css") {
      var r = document.querySelectorAll("style[data-emotion]:not([data-s])");
      Array.prototype.forEach.call(r, function (g) {
        var x = g.getAttribute("data-emotion");
        x.indexOf(" ") !== -1 &&
          (document.head.appendChild(g), g.setAttribute("data-s", ""));
      });
    }
    var o = t.stylisPlugins || xP,
      i = {},
      a,
      l = [];
    (a = t.container || document.head),
      Array.prototype.forEach.call(
        document.querySelectorAll('style[data-emotion^="' + n + ' "]'),
        function (g) {
          for (
            var x = g.getAttribute("data-emotion").split(" "), v = 1;
            v < x.length;
            v++
          )
            i[x[v]] = !0;
          l.push(g);
        }
      );
    var s,
      u = [gP, yP];
    {
      var c,
        d = [
          dP,
          pP(function (g) {
            c.insert(g);
          }),
        ],
        f = fP(u.concat(o, d)),
        p = function (x) {
          return Wi(uP(x), f);
        };
      s = function (x, v, m, y) {
        (c = m),
          p(x ? x + "{" + v.styles + "}" : v.styles),
          y && (h.inserted[v.name] = !0);
      };
    }
    var h = {
      key: n,
      sheet: new Y_({
        key: n,
        container: a,
        nonce: t.nonce,
        speedy: t.speedy,
        prepend: t.prepend,
        insertionPoint: t.insertionPoint,
      }),
      nonce: t.nonce,
      inserted: i,
      registered: {},
      insert: s,
    };
    return h.sheet.hydrate(l), h;
  },
  HS = { exports: {} },
  ze = {};
/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Dt = typeof Symbol == "function" && Symbol.for,
  Zh = Dt ? Symbol.for("react.element") : 60103,
  Jh = Dt ? Symbol.for("react.portal") : 60106,
  Xc = Dt ? Symbol.for("react.fragment") : 60107,
  Qc = Dt ? Symbol.for("react.strict_mode") : 60108,
  Zc = Dt ? Symbol.for("react.profiler") : 60114,
  Jc = Dt ? Symbol.for("react.provider") : 60109,
  ed = Dt ? Symbol.for("react.context") : 60110,
  em = Dt ? Symbol.for("react.async_mode") : 60111,
  td = Dt ? Symbol.for("react.concurrent_mode") : 60111,
  nd = Dt ? Symbol.for("react.forward_ref") : 60112,
  rd = Dt ? Symbol.for("react.suspense") : 60113,
  wP = Dt ? Symbol.for("react.suspense_list") : 60120,
  od = Dt ? Symbol.for("react.memo") : 60115,
  id = Dt ? Symbol.for("react.lazy") : 60116,
  CP = Dt ? Symbol.for("react.block") : 60121,
  RP = Dt ? Symbol.for("react.fundamental") : 60117,
  EP = Dt ? Symbol.for("react.responder") : 60118,
  TP = Dt ? Symbol.for("react.scope") : 60119;
function Nn(e) {
  if (typeof e == "object" && e !== null) {
    var t = e.$$typeof;
    switch (t) {
      case Zh:
        switch (((e = e.type), e)) {
          case em:
          case td:
          case Xc:
          case Zc:
          case Qc:
          case rd:
            return e;
          default:
            switch (((e = e && e.$$typeof), e)) {
              case ed:
              case nd:
              case id:
              case od:
              case Jc:
                return e;
              default:
                return t;
            }
        }
      case Jh:
        return t;
    }
  }
}
function GS(e) {
  return Nn(e) === td;
}
ze.AsyncMode = em;
ze.ConcurrentMode = td;
ze.ContextConsumer = ed;
ze.ContextProvider = Jc;
ze.Element = Zh;
ze.ForwardRef = nd;
ze.Fragment = Xc;
ze.Lazy = id;
ze.Memo = od;
ze.Portal = Jh;
ze.Profiler = Zc;
ze.StrictMode = Qc;
ze.Suspense = rd;
ze.isAsyncMode = function (e) {
  return GS(e) || Nn(e) === em;
};
ze.isConcurrentMode = GS;
ze.isContextConsumer = function (e) {
  return Nn(e) === ed;
};
ze.isContextProvider = function (e) {
  return Nn(e) === Jc;
};
ze.isElement = function (e) {
  return typeof e == "object" && e !== null && e.$$typeof === Zh;
};
ze.isForwardRef = function (e) {
  return Nn(e) === nd;
};
ze.isFragment = function (e) {
  return Nn(e) === Xc;
};
ze.isLazy = function (e) {
  return Nn(e) === id;
};
ze.isMemo = function (e) {
  return Nn(e) === od;
};
ze.isPortal = function (e) {
  return Nn(e) === Jh;
};
ze.isProfiler = function (e) {
  return Nn(e) === Zc;
};
ze.isStrictMode = function (e) {
  return Nn(e) === Qc;
};
ze.isSuspense = function (e) {
  return Nn(e) === rd;
};
ze.isValidElementType = function (e) {
  return (
    typeof e == "string" ||
    typeof e == "function" ||
    e === Xc ||
    e === td ||
    e === Zc ||
    e === Qc ||
    e === rd ||
    e === wP ||
    (typeof e == "object" &&
      e !== null &&
      (e.$$typeof === id ||
        e.$$typeof === od ||
        e.$$typeof === Jc ||
        e.$$typeof === ed ||
        e.$$typeof === nd ||
        e.$$typeof === RP ||
        e.$$typeof === EP ||
        e.$$typeof === TP ||
        e.$$typeof === CP))
  );
};
ze.typeOf = Nn;
HS.exports = ze;
var _P = HS.exports,
  tm = _P,
  PP = {
    childContextTypes: !0,
    contextType: !0,
    contextTypes: !0,
    defaultProps: !0,
    displayName: !0,
    getDefaultProps: !0,
    getDerivedStateFromError: !0,
    getDerivedStateFromProps: !0,
    mixins: !0,
    propTypes: !0,
    type: !0,
  },
  kP = {
    name: !0,
    length: !0,
    prototype: !0,
    caller: !0,
    callee: !0,
    arguments: !0,
    arity: !0,
  },
  DP = {
    $$typeof: !0,
    render: !0,
    defaultProps: !0,
    displayName: !0,
    propTypes: !0,
  },
  KS = {
    $$typeof: !0,
    compare: !0,
    defaultProps: !0,
    displayName: !0,
    propTypes: !0,
    type: !0,
  },
  nm = {};
nm[tm.ForwardRef] = DP;
nm[tm.Memo] = KS;
function Qy(e) {
  return tm.isMemo(e) ? KS : nm[e.$$typeof] || PP;
}
var IP = Object.defineProperty,
  AP = Object.getOwnPropertyNames,
  Zy = Object.getOwnPropertySymbols,
  NP = Object.getOwnPropertyDescriptor,
  OP = Object.getPrototypeOf,
  Jy = Object.prototype;
function qS(e, t, n) {
  if (typeof t != "string") {
    if (Jy) {
      var r = OP(t);
      r && r !== Jy && qS(e, r, n);
    }
    var o = AP(t);
    Zy && (o = o.concat(Zy(t)));
    for (var i = Qy(e), a = Qy(t), l = 0; l < o.length; ++l) {
      var s = o[l];
      if (!kP[s] && !(n && n[s]) && !(a && a[s]) && !(i && i[s])) {
        var u = NP(t, s);
        try {
          IP(e, s, u);
        } catch {}
      }
    }
  }
  return e;
}
var MP = qS;
const e0 = _c(MP);
var $P = !0;
function LP(e, t, n) {
  var r = "";
  return (
    n.split(" ").forEach(function (o) {
      e[o] !== void 0 ? t.push(e[o] + ";") : (r += o + " ");
    }),
    r
  );
}
var YS = function (t, n, r) {
    var o = t.key + "-" + n.name;
    (r === !1 || $P === !1) &&
      t.registered[o] === void 0 &&
      (t.registered[o] = n.styles);
  },
  BP = function (t, n, r) {
    YS(t, n, r);
    var o = t.key + "-" + n.name;
    if (t.inserted[n.name] === void 0) {
      var i = n;
      do t.insert(n === i ? "." + o : "", i, t.sheet, !0), (i = i.next);
      while (i !== void 0);
    }
  };
function FP(e) {
  for (var t = 0, n, r = 0, o = e.length; o >= 4; ++r, o -= 4)
    (n =
      (e.charCodeAt(r) & 255) |
      ((e.charCodeAt(++r) & 255) << 8) |
      ((e.charCodeAt(++r) & 255) << 16) |
      ((e.charCodeAt(++r) & 255) << 24)),
      (n = (n & 65535) * 1540483477 + (((n >>> 16) * 59797) << 16)),
      (n ^= n >>> 24),
      (t =
        ((n & 65535) * 1540483477 + (((n >>> 16) * 59797) << 16)) ^
        ((t & 65535) * 1540483477 + (((t >>> 16) * 59797) << 16)));
  switch (o) {
    case 3:
      t ^= (e.charCodeAt(r + 2) & 255) << 16;
    case 2:
      t ^= (e.charCodeAt(r + 1) & 255) << 8;
    case 1:
      (t ^= e.charCodeAt(r) & 255),
        (t = (t & 65535) * 1540483477 + (((t >>> 16) * 59797) << 16));
  }
  return (
    (t ^= t >>> 13),
    (t = (t & 65535) * 1540483477 + (((t >>> 16) * 59797) << 16)),
    ((t ^ (t >>> 15)) >>> 0).toString(36)
  );
}
var jP = {
    animationIterationCount: 1,
    aspectRatio: 1,
    borderImageOutset: 1,
    borderImageSlice: 1,
    borderImageWidth: 1,
    boxFlex: 1,
    boxFlexGroup: 1,
    boxOrdinalGroup: 1,
    columnCount: 1,
    columns: 1,
    flex: 1,
    flexGrow: 1,
    flexPositive: 1,
    flexShrink: 1,
    flexNegative: 1,
    flexOrder: 1,
    gridRow: 1,
    gridRowEnd: 1,
    gridRowSpan: 1,
    gridRowStart: 1,
    gridColumn: 1,
    gridColumnEnd: 1,
    gridColumnSpan: 1,
    gridColumnStart: 1,
    msGridRow: 1,
    msGridRowSpan: 1,
    msGridColumn: 1,
    msGridColumnSpan: 1,
    fontWeight: 1,
    lineHeight: 1,
    opacity: 1,
    order: 1,
    orphans: 1,
    tabSize: 1,
    widows: 1,
    zIndex: 1,
    zoom: 1,
    WebkitLineClamp: 1,
    fillOpacity: 1,
    floodOpacity: 1,
    stopOpacity: 1,
    strokeDasharray: 1,
    strokeDashoffset: 1,
    strokeMiterlimit: 1,
    strokeOpacity: 1,
    strokeWidth: 1,
  },
  zP = /[A-Z]|^ms/g,
  UP = /_EMO_([^_]+?)_([^]*?)_EMO_/g,
  XS = function (t) {
    return t.charCodeAt(1) === 45;
  },
  t0 = function (t) {
    return t != null && typeof t != "boolean";
  },
  Ff = LS(function (e) {
    return XS(e) ? e : e.replace(zP, "-$&").toLowerCase();
  }),
  n0 = function (t, n) {
    switch (t) {
      case "animation":
      case "animationName":
        if (typeof n == "string")
          return n.replace(UP, function (r, o, i) {
            return (yr = { name: o, styles: i, next: yr }), o;
          });
    }
    return jP[t] !== 1 && !XS(t) && typeof n == "number" && n !== 0
      ? n + "px"
      : n;
  };
function Hl(e, t, n) {
  if (n == null) return "";
  if (n.__emotion_styles !== void 0) return n;
  switch (typeof n) {
    case "boolean":
      return "";
    case "object": {
      if (n.anim === 1)
        return (yr = { name: n.name, styles: n.styles, next: yr }), n.name;
      if (n.styles !== void 0) {
        var r = n.next;
        if (r !== void 0)
          for (; r !== void 0; )
            (yr = { name: r.name, styles: r.styles, next: yr }), (r = r.next);
        var o = n.styles + ";";
        return o;
      }
      return VP(e, t, n);
    }
    case "function": {
      if (e !== void 0) {
        var i = yr,
          a = n(e);
        return (yr = i), Hl(e, t, a);
      }
      break;
    }
  }
  if (t == null) return n;
  var l = t[n];
  return l !== void 0 ? l : n;
}
function VP(e, t, n) {
  var r = "";
  if (Array.isArray(n))
    for (var o = 0; o < n.length; o++) r += Hl(e, t, n[o]) + ";";
  else
    for (var i in n) {
      var a = n[i];
      if (typeof a != "object")
        t != null && t[a] !== void 0
          ? (r += i + "{" + t[a] + "}")
          : t0(a) && (r += Ff(i) + ":" + n0(i, a) + ";");
      else if (
        Array.isArray(a) &&
        typeof a[0] == "string" &&
        (t == null || t[a[0]] === void 0)
      )
        for (var l = 0; l < a.length; l++)
          t0(a[l]) && (r += Ff(i) + ":" + n0(i, a[l]) + ";");
      else {
        var s = Hl(e, t, a);
        switch (i) {
          case "animation":
          case "animationName": {
            r += Ff(i) + ":" + s + ";";
            break;
          }
          default:
            r += i + "{" + s + "}";
        }
      }
    }
  return r;
}
var r0 = /label:\s*([^\s;\n{]+)\s*(;|$)/g,
  yr,
  QS = function (t, n, r) {
    if (
      t.length === 1 &&
      typeof t[0] == "object" &&
      t[0] !== null &&
      t[0].styles !== void 0
    )
      return t[0];
    var o = !0,
      i = "";
    yr = void 0;
    var a = t[0];
    a == null || a.raw === void 0
      ? ((o = !1), (i += Hl(r, n, a)))
      : (i += a[0]);
    for (var l = 1; l < t.length; l++) (i += Hl(r, n, t[l])), o && (i += a[l]);
    r0.lastIndex = 0;
    for (var s = "", u; (u = r0.exec(i)) !== null; ) s += "-" + u[1];
    var c = FP(i) + s;
    return { name: c, styles: i, next: yr };
  },
  WP = function (t) {
    return t();
  },
  HP = xp["useInsertionEffect"] ? xp["useInsertionEffect"] : !1,
  GP = HP || WP,
  ZS = S.createContext(typeof HTMLElement < "u" ? SP({ key: "css" }) : null);
ZS.Provider;
var KP = function (t) {
    return S.forwardRef(function (n, r) {
      var o = S.useContext(ZS);
      return t(n, o, r);
    });
  },
  JS = S.createContext({});
function qP() {
  for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
    t[n] = arguments[n];
  return QS(t);
}
var rm = function () {
    var t = qP.apply(void 0, arguments),
      n = "animation-" + t.name;
    return {
      name: n,
      styles: "@keyframes " + n + "{" + t.styles + "}",
      anim: 1,
      toString: function () {
        return "_EMO_" + this.name + "_" + this.styles + "_EMO_";
      },
    };
  },
  YP = G_,
  XP = function (t) {
    return t !== "theme";
  },
  o0 = function (t) {
    return typeof t == "string" && t.charCodeAt(0) > 96 ? YP : XP;
  },
  i0 = function (t, n, r) {
    var o;
    if (n) {
      var i = n.shouldForwardProp;
      o =
        t.__emotion_forwardProp && i
          ? function (a) {
              return t.__emotion_forwardProp(a) && i(a);
            }
          : i;
    }
    return typeof o != "function" && r && (o = t.__emotion_forwardProp), o;
  },
  QP = function (t) {
    var n = t.cache,
      r = t.serialized,
      o = t.isStringTag;
    return (
      YS(n, r, o),
      GP(function () {
        return BP(n, r, o);
      }),
      null
    );
  },
  ZP = function e(t, n) {
    var r = t.__emotion_real === t,
      o = (r && t.__emotion_base) || t,
      i,
      a;
    n !== void 0 && ((i = n.label), (a = n.target));
    var l = i0(t, n, r),
      s = l || o0(o),
      u = !s("as");
    return function () {
      var c = arguments,
        d =
          r && t.__emotion_styles !== void 0 ? t.__emotion_styles.slice(0) : [];
      if (
        (i !== void 0 && d.push("label:" + i + ";"),
        c[0] == null || c[0].raw === void 0)
      )
        d.push.apply(d, c);
      else {
        d.push(c[0][0]);
        for (var f = c.length, p = 1; p < f; p++) d.push(c[p], c[0][p]);
      }
      var h = KP(function (g, x, v) {
        var m = (u && g.as) || o,
          y = "",
          b = [],
          C = g;
        if (g.theme == null) {
          C = {};
          for (var R in g) C[R] = g[R];
          C.theme = S.useContext(JS);
        }
        typeof g.className == "string"
          ? (y = LP(x.registered, b, g.className))
          : g.className != null && (y = g.className + " ");
        var E = QS(d.concat(b), x.registered, C);
        (y += x.key + "-" + E.name), a !== void 0 && (y += " " + a);
        var D = u && l === void 0 ? o0(m) : s,
          A = {};
        for (var I in g) (u && I === "as") || (D(I) && (A[I] = g[I]));
        return (
          (A.className = y),
          (A.ref = v),
          S.createElement(
            S.Fragment,
            null,
            S.createElement(QP, {
              cache: x,
              serialized: E,
              isStringTag: typeof m == "string",
            }),
            S.createElement(m, A)
          )
        );
      });
      return (
        (h.displayName =
          i !== void 0
            ? i
            : "Styled(" +
              (typeof o == "string"
                ? o
                : o.displayName || o.name || "Component") +
              ")"),
        (h.defaultProps = t.defaultProps),
        (h.__emotion_real = h),
        (h.__emotion_base = o),
        (h.__emotion_styles = d),
        (h.__emotion_forwardProp = l),
        Object.defineProperty(h, "toString", {
          value: function () {
            return "." + a;
          },
        }),
        (h.withComponent = function (g, x) {
          return e(g, T({}, n, x, { shouldForwardProp: i0(h, x, !0) })).apply(
            void 0,
            d
          );
        }),
        h
      );
    };
  },
  JP = [
    "a",
    "abbr",
    "address",
    "area",
    "article",
    "aside",
    "audio",
    "b",
    "base",
    "bdi",
    "bdo",
    "big",
    "blockquote",
    "body",
    "br",
    "button",
    "canvas",
    "caption",
    "cite",
    "code",
    "col",
    "colgroup",
    "data",
    "datalist",
    "dd",
    "del",
    "details",
    "dfn",
    "dialog",
    "div",
    "dl",
    "dt",
    "em",
    "embed",
    "fieldset",
    "figcaption",
    "figure",
    "footer",
    "form",
    "h1",
    "h2",
    "h3",
    "h4",
    "h5",
    "h6",
    "head",
    "header",
    "hgroup",
    "hr",
    "html",
    "i",
    "iframe",
    "img",
    "input",
    "ins",
    "kbd",
    "keygen",
    "label",
    "legend",
    "li",
    "link",
    "main",
    "map",
    "mark",
    "marquee",
    "menu",
    "menuitem",
    "meta",
    "meter",
    "nav",
    "noscript",
    "object",
    "ol",
    "optgroup",
    "option",
    "output",
    "p",
    "param",
    "picture",
    "pre",
    "progress",
    "q",
    "rp",
    "rt",
    "ruby",
    "s",
    "samp",
    "script",
    "section",
    "select",
    "small",
    "source",
    "span",
    "strong",
    "style",
    "sub",
    "summary",
    "sup",
    "table",
    "tbody",
    "td",
    "textarea",
    "tfoot",
    "th",
    "thead",
    "time",
    "title",
    "tr",
    "track",
    "u",
    "ul",
    "var",
    "video",
    "wbr",
    "circle",
    "clipPath",
    "defs",
    "ellipse",
    "foreignObject",
    "g",
    "image",
    "line",
    "linearGradient",
    "mask",
    "path",
    "pattern",
    "polygon",
    "polyline",
    "radialGradient",
    "rect",
    "stop",
    "svg",
    "text",
    "tspan",
  ],
  yv = ZP.bind();
JP.forEach(function (e) {
  yv[e] = yv(e);
});
/**
 * @mui/styled-engine v5.12.3
 *
 * @license MIT
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ function ew(e, t) {
  return yv(e, t);
}
const ek = (e, t) => {
    Array.isArray(e.__emotion_styles) &&
      (e.__emotion_styles = t(e.__emotion_styles));
  },
  tk = ["values", "unit", "step"],
  nk = (e) => {
    const t = Object.keys(e).map((n) => ({ key: n, val: e[n] })) || [];
    return (
      t.sort((n, r) => n.val - r.val),
      t.reduce((n, r) => T({}, n, { [r.key]: r.val }), {})
    );
  };
function rk(e) {
  const {
      values: t = { xs: 0, sm: 600, md: 900, lg: 1200, xl: 1536 },
      unit: n = "px",
      step: r = 5,
    } = e,
    o = xe(e, tk),
    i = nk(t),
    a = Object.keys(i);
  function l(f) {
    return `@media (min-width:${typeof t[f] == "number" ? t[f] : f}${n})`;
  }
  function s(f) {
    return `@media (max-width:${
      (typeof t[f] == "number" ? t[f] : f) - r / 100
    }${n})`;
  }
  function u(f, p) {
    const h = a.indexOf(p);
    return `@media (min-width:${
      typeof t[f] == "number" ? t[f] : f
    }${n}) and (max-width:${
      (h !== -1 && typeof t[a[h]] == "number" ? t[a[h]] : p) - r / 100
    }${n})`;
  }
  function c(f) {
    return a.indexOf(f) + 1 < a.length ? u(f, a[a.indexOf(f) + 1]) : l(f);
  }
  function d(f) {
    const p = a.indexOf(f);
    return p === 0
      ? l(a[1])
      : p === a.length - 1
      ? s(a[p])
      : u(f, a[a.indexOf(f) + 1]).replace("@media", "@media not all and");
  }
  return T(
    {
      keys: a,
      values: i,
      up: l,
      down: s,
      between: u,
      only: c,
      not: d,
      unit: n,
    },
    o
  );
}
const ok = { borderRadius: 4 },
  ik = ok;
function ml(e, t) {
  return t ? $r(e, t, { clone: !1 }) : e;
}
const om = { xs: 0, sm: 600, md: 900, lg: 1200, xl: 1536 },
  a0 = {
    keys: ["xs", "sm", "md", "lg", "xl"],
    up: (e) => `@media (min-width:${om[e]}px)`,
  };
function zr(e, t, n) {
  const r = e.theme || {};
  if (Array.isArray(t)) {
    const i = r.breakpoints || a0;
    return t.reduce((a, l, s) => ((a[i.up(i.keys[s])] = n(t[s])), a), {});
  }
  if (typeof t == "object") {
    const i = r.breakpoints || a0;
    return Object.keys(t).reduce((a, l) => {
      if (Object.keys(i.values || om).indexOf(l) !== -1) {
        const s = i.up(l);
        a[s] = n(t[l], l);
      } else {
        const s = l;
        a[s] = t[s];
      }
      return a;
    }, {});
  }
  return n(t);
}
function ak(e = {}) {
  var t;
  return (
    ((t = e.keys) == null
      ? void 0
      : t.reduce((r, o) => {
          const i = e.up(o);
          return (r[i] = {}), r;
        }, {})) || {}
  );
}
function lk(e, t) {
  return e.reduce((n, r) => {
    const o = n[r];
    return (!o || Object.keys(o).length === 0) && delete n[r], n;
  }, t);
}
function ad(e, t, n = !0) {
  if (!t || typeof t != "string") return null;
  if (e && e.vars && n) {
    const r = `vars.${t}`
      .split(".")
      .reduce((o, i) => (o && o[i] ? o[i] : null), e);
    if (r != null) return r;
  }
  return t.split(".").reduce((r, o) => (r && r[o] != null ? r[o] : null), e);
}
function uc(e, t, n, r = n) {
  let o;
  return (
    typeof e == "function"
      ? (o = e(n))
      : Array.isArray(e)
      ? (o = e[n] || r)
      : (o = ad(e, n) || r),
    t && (o = t(o, r, e)),
    o
  );
}
function Fe(e) {
  const { prop: t, cssProperty: n = e.prop, themeKey: r, transform: o } = e,
    i = (a) => {
      if (a[t] == null) return null;
      const l = a[t],
        s = a.theme,
        u = ad(s, r) || {};
      return zr(a, l, (d) => {
        let f = uc(u, o, d);
        return (
          d === f &&
            typeof d == "string" &&
            (f = uc(u, o, `${t}${d === "default" ? "" : pe(d)}`, d)),
          n === !1 ? f : { [n]: f }
        );
      });
    };
  return (i.propTypes = {}), (i.filterProps = [t]), i;
}
function sk(e) {
  const t = {};
  return (n) => (t[n] === void 0 && (t[n] = e(n)), t[n]);
}
const uk = { m: "margin", p: "padding" },
  ck = {
    t: "Top",
    r: "Right",
    b: "Bottom",
    l: "Left",
    x: ["Left", "Right"],
    y: ["Top", "Bottom"],
  },
  l0 = { marginX: "mx", marginY: "my", paddingX: "px", paddingY: "py" },
  dk = sk((e) => {
    if (e.length > 2)
      if (l0[e]) e = l0[e];
      else return [e];
    const [t, n] = e.split(""),
      r = uk[t],
      o = ck[n] || "";
    return Array.isArray(o) ? o.map((i) => r + i) : [r + o];
  }),
  im = [
    "m",
    "mt",
    "mr",
    "mb",
    "ml",
    "mx",
    "my",
    "margin",
    "marginTop",
    "marginRight",
    "marginBottom",
    "marginLeft",
    "marginX",
    "marginY",
    "marginInline",
    "marginInlineStart",
    "marginInlineEnd",
    "marginBlock",
    "marginBlockStart",
    "marginBlockEnd",
  ],
  am = [
    "p",
    "pt",
    "pr",
    "pb",
    "pl",
    "px",
    "py",
    "padding",
    "paddingTop",
    "paddingRight",
    "paddingBottom",
    "paddingLeft",
    "paddingX",
    "paddingY",
    "paddingInline",
    "paddingInlineStart",
    "paddingInlineEnd",
    "paddingBlock",
    "paddingBlockStart",
    "paddingBlockEnd",
  ];
[...im, ...am];
function cs(e, t, n, r) {
  var o;
  const i = (o = ad(e, t, !1)) != null ? o : n;
  return typeof i == "number"
    ? (a) => (typeof a == "string" ? a : i * a)
    : Array.isArray(i)
    ? (a) => (typeof a == "string" ? a : i[a])
    : typeof i == "function"
    ? i
    : () => {};
}
function tw(e) {
  return cs(e, "spacing", 8);
}
function ds(e, t) {
  if (typeof t == "string" || t == null) return t;
  const n = Math.abs(t),
    r = e(n);
  return t >= 0 ? r : typeof r == "number" ? -r : `-${r}`;
}
function fk(e, t) {
  return (n) => e.reduce((r, o) => ((r[o] = ds(t, n)), r), {});
}
function pk(e, t, n, r) {
  if (t.indexOf(n) === -1) return null;
  const o = dk(n),
    i = fk(o, r),
    a = e[n];
  return zr(e, a, i);
}
function nw(e, t) {
  const n = tw(e.theme);
  return Object.keys(e)
    .map((r) => pk(e, t, r, n))
    .reduce(ml, {});
}
function st(e) {
  return nw(e, im);
}
st.propTypes = {};
st.filterProps = im;
function ut(e) {
  return nw(e, am);
}
ut.propTypes = {};
ut.filterProps = am;
function vk(e = 8) {
  if (e.mui) return e;
  const t = tw({ spacing: e }),
    n = (...r) =>
      (r.length === 0 ? [1] : r)
        .map((i) => {
          const a = t(i);
          return typeof a == "number" ? `${a}px` : a;
        })
        .join(" ");
  return (n.mui = !0), n;
}
function ld(...e) {
  const t = e.reduce(
      (r, o) => (
        o.filterProps.forEach((i) => {
          r[i] = o;
        }),
        r
      ),
      {}
    ),
    n = (r) => Object.keys(r).reduce((o, i) => (t[i] ? ml(o, t[i](r)) : o), {});
  return (
    (n.propTypes = {}),
    (n.filterProps = e.reduce((r, o) => r.concat(o.filterProps), [])),
    n
  );
}
function xr(e) {
  return typeof e != "number" ? e : `${e}px solid`;
}
const hk = Fe({ prop: "border", themeKey: "borders", transform: xr }),
  mk = Fe({ prop: "borderTop", themeKey: "borders", transform: xr }),
  gk = Fe({ prop: "borderRight", themeKey: "borders", transform: xr }),
  yk = Fe({ prop: "borderBottom", themeKey: "borders", transform: xr }),
  bk = Fe({ prop: "borderLeft", themeKey: "borders", transform: xr }),
  xk = Fe({ prop: "borderColor", themeKey: "palette" }),
  Sk = Fe({ prop: "borderTopColor", themeKey: "palette" }),
  wk = Fe({ prop: "borderRightColor", themeKey: "palette" }),
  Ck = Fe({ prop: "borderBottomColor", themeKey: "palette" }),
  Rk = Fe({ prop: "borderLeftColor", themeKey: "palette" }),
  sd = (e) => {
    if (e.borderRadius !== void 0 && e.borderRadius !== null) {
      const t = cs(e.theme, "shape.borderRadius", 4),
        n = (r) => ({ borderRadius: ds(t, r) });
      return zr(e, e.borderRadius, n);
    }
    return null;
  };
sd.propTypes = {};
sd.filterProps = ["borderRadius"];
ld(hk, mk, gk, yk, bk, xk, Sk, wk, Ck, Rk, sd);
const ud = (e) => {
  if (e.gap !== void 0 && e.gap !== null) {
    const t = cs(e.theme, "spacing", 8),
      n = (r) => ({ gap: ds(t, r) });
    return zr(e, e.gap, n);
  }
  return null;
};
ud.propTypes = {};
ud.filterProps = ["gap"];
const cd = (e) => {
  if (e.columnGap !== void 0 && e.columnGap !== null) {
    const t = cs(e.theme, "spacing", 8),
      n = (r) => ({ columnGap: ds(t, r) });
    return zr(e, e.columnGap, n);
  }
  return null;
};
cd.propTypes = {};
cd.filterProps = ["columnGap"];
const dd = (e) => {
  if (e.rowGap !== void 0 && e.rowGap !== null) {
    const t = cs(e.theme, "spacing", 8),
      n = (r) => ({ rowGap: ds(t, r) });
    return zr(e, e.rowGap, n);
  }
  return null;
};
dd.propTypes = {};
dd.filterProps = ["rowGap"];
const Ek = Fe({ prop: "gridColumn" }),
  Tk = Fe({ prop: "gridRow" }),
  _k = Fe({ prop: "gridAutoFlow" }),
  Pk = Fe({ prop: "gridAutoColumns" }),
  kk = Fe({ prop: "gridAutoRows" }),
  Dk = Fe({ prop: "gridTemplateColumns" }),
  Ik = Fe({ prop: "gridTemplateRows" }),
  Ak = Fe({ prop: "gridTemplateAreas" }),
  Nk = Fe({ prop: "gridArea" });
ld(ud, cd, dd, Ek, Tk, _k, Pk, kk, Dk, Ik, Ak, Nk);
function Hi(e, t) {
  return t === "grey" ? t : e;
}
const Ok = Fe({ prop: "color", themeKey: "palette", transform: Hi }),
  Mk = Fe({
    prop: "bgcolor",
    cssProperty: "backgroundColor",
    themeKey: "palette",
    transform: Hi,
  }),
  $k = Fe({ prop: "backgroundColor", themeKey: "palette", transform: Hi });
ld(Ok, Mk, $k);
function wn(e) {
  return e <= 1 && e !== 0 ? `${e * 100}%` : e;
}
const Lk = Fe({ prop: "width", transform: wn }),
  lm = (e) => {
    if (e.maxWidth !== void 0 && e.maxWidth !== null) {
      const t = (n) => {
        var r, o, i;
        return {
          maxWidth:
            ((r = e.theme) == null ||
            (o = r.breakpoints) == null ||
            (i = o.values) == null
              ? void 0
              : i[n]) ||
            om[n] ||
            wn(n),
        };
      };
      return zr(e, e.maxWidth, t);
    }
    return null;
  };
lm.filterProps = ["maxWidth"];
const Bk = Fe({ prop: "minWidth", transform: wn }),
  Fk = Fe({ prop: "height", transform: wn }),
  jk = Fe({ prop: "maxHeight", transform: wn }),
  zk = Fe({ prop: "minHeight", transform: wn });
Fe({ prop: "size", cssProperty: "width", transform: wn });
Fe({ prop: "size", cssProperty: "height", transform: wn });
const Uk = Fe({ prop: "boxSizing" });
ld(Lk, lm, Bk, Fk, jk, zk, Uk);
const Vk = {
    border: { themeKey: "borders", transform: xr },
    borderTop: { themeKey: "borders", transform: xr },
    borderRight: { themeKey: "borders", transform: xr },
    borderBottom: { themeKey: "borders", transform: xr },
    borderLeft: { themeKey: "borders", transform: xr },
    borderColor: { themeKey: "palette" },
    borderTopColor: { themeKey: "palette" },
    borderRightColor: { themeKey: "palette" },
    borderBottomColor: { themeKey: "palette" },
    borderLeftColor: { themeKey: "palette" },
    borderRadius: { themeKey: "shape.borderRadius", style: sd },
    color: { themeKey: "palette", transform: Hi },
    bgcolor: {
      themeKey: "palette",
      cssProperty: "backgroundColor",
      transform: Hi,
    },
    backgroundColor: { themeKey: "palette", transform: Hi },
    p: { style: ut },
    pt: { style: ut },
    pr: { style: ut },
    pb: { style: ut },
    pl: { style: ut },
    px: { style: ut },
    py: { style: ut },
    padding: { style: ut },
    paddingTop: { style: ut },
    paddingRight: { style: ut },
    paddingBottom: { style: ut },
    paddingLeft: { style: ut },
    paddingX: { style: ut },
    paddingY: { style: ut },
    paddingInline: { style: ut },
    paddingInlineStart: { style: ut },
    paddingInlineEnd: { style: ut },
    paddingBlock: { style: ut },
    paddingBlockStart: { style: ut },
    paddingBlockEnd: { style: ut },
    m: { style: st },
    mt: { style: st },
    mr: { style: st },
    mb: { style: st },
    ml: { style: st },
    mx: { style: st },
    my: { style: st },
    margin: { style: st },
    marginTop: { style: st },
    marginRight: { style: st },
    marginBottom: { style: st },
    marginLeft: { style: st },
    marginX: { style: st },
    marginY: { style: st },
    marginInline: { style: st },
    marginInlineStart: { style: st },
    marginInlineEnd: { style: st },
    marginBlock: { style: st },
    marginBlockStart: { style: st },
    marginBlockEnd: { style: st },
    displayPrint: {
      cssProperty: !1,
      transform: (e) => ({ "@media print": { display: e } }),
    },
    display: {},
    overflow: {},
    textOverflow: {},
    visibility: {},
    whiteSpace: {},
    flexBasis: {},
    flexDirection: {},
    flexWrap: {},
    justifyContent: {},
    alignItems: {},
    alignContent: {},
    order: {},
    flex: {},
    flexGrow: {},
    flexShrink: {},
    alignSelf: {},
    justifyItems: {},
    justifySelf: {},
    gap: { style: ud },
    rowGap: { style: dd },
    columnGap: { style: cd },
    gridColumn: {},
    gridRow: {},
    gridAutoFlow: {},
    gridAutoColumns: {},
    gridAutoRows: {},
    gridTemplateColumns: {},
    gridTemplateRows: {},
    gridTemplateAreas: {},
    gridArea: {},
    position: {},
    zIndex: { themeKey: "zIndex" },
    top: {},
    right: {},
    bottom: {},
    left: {},
    boxShadow: { themeKey: "shadows" },
    width: { transform: wn },
    maxWidth: { style: lm },
    minWidth: { transform: wn },
    height: { transform: wn },
    maxHeight: { transform: wn },
    minHeight: { transform: wn },
    boxSizing: {},
    fontFamily: { themeKey: "typography" },
    fontSize: { themeKey: "typography" },
    fontStyle: { themeKey: "typography" },
    fontWeight: { themeKey: "typography" },
    letterSpacing: {},
    textTransform: {},
    lineHeight: {},
    textAlign: {},
    typography: { cssProperty: !1, themeKey: "typography" },
  },
  fd = Vk;
function Wk(...e) {
  const t = e.reduce((r, o) => r.concat(Object.keys(o)), []),
    n = new Set(t);
  return e.every((r) => n.size === Object.keys(r).length);
}
function Hk(e, t) {
  return typeof e == "function" ? e(t) : e;
}
function Gk() {
  function e(n, r, o, i) {
    const a = { [n]: r, theme: o },
      l = i[n];
    if (!l) return { [n]: r };
    const { cssProperty: s = n, themeKey: u, transform: c, style: d } = l;
    if (r == null) return null;
    if (u === "typography" && r === "inherit") return { [n]: r };
    const f = ad(o, u) || {};
    return d
      ? d(a)
      : zr(a, r, (h) => {
          let g = uc(f, c, h);
          return (
            h === g &&
              typeof h == "string" &&
              (g = uc(f, c, `${n}${h === "default" ? "" : pe(h)}`, h)),
            s === !1 ? g : { [s]: g }
          );
        });
  }
  function t(n) {
    var r;
    const { sx: o, theme: i = {} } = n || {};
    if (!o) return null;
    const a = (r = i.unstable_sxConfig) != null ? r : fd;
    function l(s) {
      let u = s;
      if (typeof s == "function") u = s(i);
      else if (typeof s != "object") return s;
      if (!u) return null;
      const c = ak(i.breakpoints),
        d = Object.keys(c);
      let f = c;
      return (
        Object.keys(u).forEach((p) => {
          const h = Hk(u[p], i);
          if (h != null)
            if (typeof h == "object")
              if (a[p]) f = ml(f, e(p, h, i, a));
              else {
                const g = zr({ theme: i }, h, (x) => ({ [p]: x }));
                Wk(g, h) ? (f[p] = t({ sx: h, theme: i })) : (f = ml(f, g));
              }
            else f = ml(f, e(p, h, i, a));
        }),
        lk(d, f)
      );
    }
    return Array.isArray(o) ? o.map(l) : l(o);
  }
  return t;
}
const rw = Gk();
rw.filterProps = ["sx"];
const pd = rw,
  Kk = ["breakpoints", "palette", "spacing", "shape"];
function sm(e = {}, ...t) {
  const { breakpoints: n = {}, palette: r = {}, spacing: o, shape: i = {} } = e,
    a = xe(e, Kk),
    l = rk(n),
    s = vk(o);
  let u = $r(
    {
      breakpoints: l,
      direction: "ltr",
      components: {},
      palette: T({ mode: "light" }, r),
      spacing: s,
      shape: T({}, ik, i),
    },
    a
  );
  return (
    (u = t.reduce((c, d) => $r(c, d), u)),
    (u.unstable_sxConfig = T({}, fd, a == null ? void 0 : a.unstable_sxConfig)),
    (u.unstable_sx = function (d) {
      return pd({ sx: d, theme: this });
    }),
    u
  );
}
function qk(e) {
  return Object.keys(e).length === 0;
}
function ow(e = null) {
  const t = S.useContext(JS);
  return !t || qk(t) ? e : t;
}
const Yk = sm();
function um(e = Yk) {
  return ow(e);
}
const Xk = ["sx"],
  Qk = (e) => {
    var t, n;
    const r = { systemProps: {}, otherProps: {} },
      o =
        (t =
          e == null || (n = e.theme) == null ? void 0 : n.unstable_sxConfig) !=
        null
          ? t
          : fd;
    return (
      Object.keys(e).forEach((i) => {
        o[i] ? (r.systemProps[i] = e[i]) : (r.otherProps[i] = e[i]);
      }),
      r
    );
  };
function iw(e) {
  const { sx: t } = e,
    n = xe(e, Xk),
    { systemProps: r, otherProps: o } = Qk(n);
  let i;
  return (
    Array.isArray(t)
      ? (i = [r, ...t])
      : typeof t == "function"
      ? (i = (...a) => {
          const l = t(...a);
          return Bo(l) ? T({}, r, l) : r;
        })
      : (i = T({}, r, t)),
    T({}, o, { sx: i })
  );
}
function aw(e) {
  var t,
    n,
    r = "";
  if (typeof e == "string" || typeof e == "number") r += e;
  else if (typeof e == "object")
    if (Array.isArray(e))
      for (t = 0; t < e.length; t++)
        e[t] && (n = aw(e[t])) && (r && (r += " "), (r += n));
    else for (t in e) e[t] && (r && (r += " "), (r += t));
  return r;
}
function we() {
  for (var e, t, n = 0, r = ""; n < arguments.length; )
    (e = arguments[n++]) && (t = aw(e)) && (r && (r += " "), (r += t));
  return r;
}
const Zk = ["className", "component"];
function Jk(e = {}) {
  const {
      themeId: t,
      defaultTheme: n,
      defaultClassName: r = "MuiBox-root",
      generateClassName: o,
    } = e,
    i = ew("div", {
      shouldForwardProp: (l) => l !== "theme" && l !== "sx" && l !== "as",
    })(pd);
  return S.forwardRef(function (s, u) {
    const c = um(n),
      d = iw(s),
      { className: f, component: p = "div" } = d,
      h = xe(d, Zk);
    return w.jsx(
      i,
      T(
        {
          as: p,
          ref: u,
          className: we(f, o ? o(r) : r),
          theme: (t && c[t]) || c,
        },
        h
      )
    );
  });
}
const eD = ["variant"];
function s0(e) {
  return e.length === 0;
}
function lw(e) {
  const { variant: t } = e,
    n = xe(e, eD);
  let r = t || "";
  return (
    Object.keys(n)
      .sort()
      .forEach((o) => {
        o === "color"
          ? (r += s0(r) ? e[o] : pe(e[o]))
          : (r += `${s0(r) ? o : pe(o)}${pe(e[o].toString())}`);
      }),
    r
  );
}
const tD = [
  "name",
  "slot",
  "skipVariantsResolver",
  "skipSx",
  "overridesResolver",
];
function nD(e) {
  return Object.keys(e).length === 0;
}
function rD(e) {
  return typeof e == "string" && e.charCodeAt(0) > 96;
}
const oD = (e, t) =>
    t.components && t.components[e] && t.components[e].styleOverrides
      ? t.components[e].styleOverrides
      : null,
  iD = (e, t) => {
    let n = [];
    t &&
      t.components &&
      t.components[e] &&
      t.components[e].variants &&
      (n = t.components[e].variants);
    const r = {};
    return (
      n.forEach((o) => {
        const i = lw(o.props);
        r[i] = o.style;
      }),
      r
    );
  },
  aD = (e, t, n, r) => {
    var o, i;
    const { ownerState: a = {} } = e,
      l = [],
      s =
        n == null || (o = n.components) == null || (i = o[r]) == null
          ? void 0
          : i.variants;
    return (
      s &&
        s.forEach((u) => {
          let c = !0;
          Object.keys(u.props).forEach((d) => {
            a[d] !== u.props[d] && e[d] !== u.props[d] && (c = !1);
          }),
            c && l.push(t[lw(u.props)]);
        }),
      l
    );
  };
function Nu(e) {
  return e !== "ownerState" && e !== "theme" && e !== "sx" && e !== "as";
}
const lD = sm();
function $a({ defaultTheme: e, theme: t, themeId: n }) {
  return nD(t) ? e : t[n] || t;
}
function sD(e = {}) {
  const {
      themeId: t,
      defaultTheme: n = lD,
      rootShouldForwardProp: r = Nu,
      slotShouldForwardProp: o = Nu,
    } = e,
    i = (a) =>
      pd(T({}, a, { theme: $a(T({}, a, { defaultTheme: n, themeId: t })) }));
  return (
    (i.__mui_systemSx = !0),
    (a, l = {}) => {
      ek(a, (b) => b.filter((C) => !(C != null && C.__mui_systemSx)));
      const {
          name: s,
          slot: u,
          skipVariantsResolver: c,
          skipSx: d,
          overridesResolver: f,
        } = l,
        p = xe(l, tD),
        h = c !== void 0 ? c : (u && u !== "Root") || !1,
        g = d || !1;
      let x,
        v = Nu;
      u === "Root" ? (v = r) : u ? (v = o) : rD(a) && (v = void 0);
      const m = ew(a, T({ shouldForwardProp: v, label: x }, p)),
        y = (b, ...C) => {
          const R = C
            ? C.map((I) =>
                typeof I == "function" && I.__emotion_real !== I
                  ? (M) =>
                      I(
                        T({}, M, {
                          theme: $a(T({}, M, { defaultTheme: n, themeId: t })),
                        })
                      )
                  : I
              )
            : [];
          let E = b;
          s &&
            f &&
            R.push((I) => {
              const M = $a(T({}, I, { defaultTheme: n, themeId: t })),
                J = oD(s, M);
              if (J) {
                const V = {};
                return (
                  Object.entries(J).forEach(([j, z]) => {
                    V[j] =
                      typeof z == "function" ? z(T({}, I, { theme: M })) : z;
                  }),
                  f(I, V)
                );
              }
              return null;
            }),
            s &&
              !h &&
              R.push((I) => {
                const M = $a(T({}, I, { defaultTheme: n, themeId: t }));
                return aD(I, iD(s, M), M, s);
              }),
            g || R.push(i);
          const D = R.length - C.length;
          if (Array.isArray(b) && D > 0) {
            const I = new Array(D).fill("");
            (E = [...b, ...I]), (E.raw = [...b.raw, ...I]);
          } else
            typeof b == "function" &&
              b.__emotion_real !== b &&
              (E = (I) =>
                b(
                  T({}, I, {
                    theme: $a(T({}, I, { defaultTheme: n, themeId: t })),
                  })
                ));
          const A = m(E, ...R);
          return a.muiName && (A.muiName = a.muiName), A;
        };
      return m.withConfig && (y.withConfig = m.withConfig), y;
    }
  );
}
function uD(e) {
  const { theme: t, name: n, props: r } = e;
  return !t ||
    !t.components ||
    !t.components[n] ||
    !t.components[n].defaultProps
    ? r
    : Kh(t.components[n].defaultProps, r);
}
function cD({ props: e, name: t, defaultTheme: n, themeId: r }) {
  let o = um(n);
  return r && (o = o[r] || o), uD({ theme: o, name: t, props: e });
}
function cm(e, t = 0, n = 1) {
  return Math.min(Math.max(t, e), n);
}
function dD(e) {
  e = e.slice(1);
  const t = new RegExp(`.{1,${e.length >= 6 ? 2 : 1}}`, "g");
  let n = e.match(t);
  return (
    n && n[0].length === 1 && (n = n.map((r) => r + r)),
    n
      ? `rgb${n.length === 4 ? "a" : ""}(${n
          .map((r, o) =>
            o < 3
              ? parseInt(r, 16)
              : Math.round((parseInt(r, 16) / 255) * 1e3) / 1e3
          )
          .join(", ")})`
      : ""
  );
}
function ei(e) {
  if (e.type) return e;
  if (e.charAt(0) === "#") return ei(dD(e));
  const t = e.indexOf("("),
    n = e.substring(0, t);
  if (["rgb", "rgba", "hsl", "hsla", "color"].indexOf(n) === -1)
    throw new Error(ta(9, e));
  let r = e.substring(t + 1, e.length - 1),
    o;
  if (n === "color") {
    if (
      ((r = r.split(" ")),
      (o = r.shift()),
      r.length === 4 && r[3].charAt(0) === "/" && (r[3] = r[3].slice(1)),
      ["srgb", "display-p3", "a98-rgb", "prophoto-rgb", "rec-2020"].indexOf(
        o
      ) === -1)
    )
      throw new Error(ta(10, o));
  } else r = r.split(",");
  return (
    (r = r.map((i) => parseFloat(i))), { type: n, values: r, colorSpace: o }
  );
}
function vd(e) {
  const { type: t, colorSpace: n } = e;
  let { values: r } = e;
  return (
    t.indexOf("rgb") !== -1
      ? (r = r.map((o, i) => (i < 3 ? parseInt(o, 10) : o)))
      : t.indexOf("hsl") !== -1 && ((r[1] = `${r[1]}%`), (r[2] = `${r[2]}%`)),
    t.indexOf("color") !== -1
      ? (r = `${n} ${r.join(" ")}`)
      : (r = `${r.join(", ")}`),
    `${t}(${r})`
  );
}
function fD(e) {
  e = ei(e);
  const { values: t } = e,
    n = t[0],
    r = t[1] / 100,
    o = t[2] / 100,
    i = r * Math.min(o, 1 - o),
    a = (u, c = (u + n / 30) % 12) =>
      o - i * Math.max(Math.min(c - 3, 9 - c, 1), -1);
  let l = "rgb";
  const s = [
    Math.round(a(0) * 255),
    Math.round(a(8) * 255),
    Math.round(a(4) * 255),
  ];
  return (
    e.type === "hsla" && ((l += "a"), s.push(t[3])), vd({ type: l, values: s })
  );
}
function u0(e) {
  e = ei(e);
  let t = e.type === "hsl" || e.type === "hsla" ? ei(fD(e)).values : e.values;
  return (
    (t = t.map(
      (n) => (
        e.type !== "color" && (n /= 255),
        n <= 0.03928 ? n / 12.92 : ((n + 0.055) / 1.055) ** 2.4
      )
    )),
    Number((0.2126 * t[0] + 0.7152 * t[1] + 0.0722 * t[2]).toFixed(3))
  );
}
function pD(e, t) {
  const n = u0(e),
    r = u0(t);
  return (Math.max(n, r) + 0.05) / (Math.min(n, r) + 0.05);
}
function Gt(e, t) {
  return (
    (e = ei(e)),
    (t = cm(t)),
    (e.type === "rgb" || e.type === "hsl") && (e.type += "a"),
    e.type === "color" ? (e.values[3] = `/${t}`) : (e.values[3] = t),
    vd(e)
  );
}
function sw(e, t) {
  if (((e = ei(e)), (t = cm(t)), e.type.indexOf("hsl") !== -1))
    e.values[2] *= 1 - t;
  else if (e.type.indexOf("rgb") !== -1 || e.type.indexOf("color") !== -1)
    for (let n = 0; n < 3; n += 1) e.values[n] *= 1 - t;
  return vd(e);
}
function uw(e, t) {
  if (((e = ei(e)), (t = cm(t)), e.type.indexOf("hsl") !== -1))
    e.values[2] += (100 - e.values[2]) * t;
  else if (e.type.indexOf("rgb") !== -1)
    for (let n = 0; n < 3; n += 1) e.values[n] += (255 - e.values[n]) * t;
  else if (e.type.indexOf("color") !== -1)
    for (let n = 0; n < 3; n += 1) e.values[n] += (1 - e.values[n]) * t;
  return vd(e);
}
function vD(e, t) {
  return T(
    {
      toolbar: {
        minHeight: 56,
        [e.up("xs")]: { "@media (orientation: landscape)": { minHeight: 48 } },
        [e.up("sm")]: { minHeight: 64 },
      },
    },
    t
  );
}
const hD = { black: "#000", white: "#fff" },
  Gl = hD,
  mD = {
    50: "#fafafa",
    100: "#f5f5f5",
    200: "#eeeeee",
    300: "#e0e0e0",
    400: "#bdbdbd",
    500: "#9e9e9e",
    600: "#757575",
    700: "#616161",
    800: "#424242",
    900: "#212121",
    A100: "#f5f5f5",
    A200: "#eeeeee",
    A400: "#bdbdbd",
    A700: "#616161",
  },
  gD = mD,
  yD = {
    50: "#f3e5f5",
    100: "#e1bee7",
    200: "#ce93d8",
    300: "#ba68c8",
    400: "#ab47bc",
    500: "#9c27b0",
    600: "#8e24aa",
    700: "#7b1fa2",
    800: "#6a1b9a",
    900: "#4a148c",
    A100: "#ea80fc",
    A200: "#e040fb",
    A400: "#d500f9",
    A700: "#aa00ff",
  },
  pi = yD,
  bD = {
    50: "#ffebee",
    100: "#ffcdd2",
    200: "#ef9a9a",
    300: "#e57373",
    400: "#ef5350",
    500: "#f44336",
    600: "#e53935",
    700: "#d32f2f",
    800: "#c62828",
    900: "#b71c1c",
    A100: "#ff8a80",
    A200: "#ff5252",
    A400: "#ff1744",
    A700: "#d50000",
  },
  vi = bD,
  xD = {
    50: "#fff3e0",
    100: "#ffe0b2",
    200: "#ffcc80",
    300: "#ffb74d",
    400: "#ffa726",
    500: "#ff9800",
    600: "#fb8c00",
    700: "#f57c00",
    800: "#ef6c00",
    900: "#e65100",
    A100: "#ffd180",
    A200: "#ffab40",
    A400: "#ff9100",
    A700: "#ff6d00",
  },
  La = xD,
  SD = {
    50: "#e3f2fd",
    100: "#bbdefb",
    200: "#90caf9",
    300: "#64b5f6",
    400: "#42a5f5",
    500: "#2196f3",
    600: "#1e88e5",
    700: "#1976d2",
    800: "#1565c0",
    900: "#0d47a1",
    A100: "#82b1ff",
    A200: "#448aff",
    A400: "#2979ff",
    A700: "#2962ff",
  },
  hi = SD,
  wD = {
    50: "#e1f5fe",
    100: "#b3e5fc",
    200: "#81d4fa",
    300: "#4fc3f7",
    400: "#29b6f6",
    500: "#03a9f4",
    600: "#039be5",
    700: "#0288d1",
    800: "#0277bd",
    900: "#01579b",
    A100: "#80d8ff",
    A200: "#40c4ff",
    A400: "#00b0ff",
    A700: "#0091ea",
  },
  mi = wD,
  CD = {
    50: "#e8f5e9",
    100: "#c8e6c9",
    200: "#a5d6a7",
    300: "#81c784",
    400: "#66bb6a",
    500: "#4caf50",
    600: "#43a047",
    700: "#388e3c",
    800: "#2e7d32",
    900: "#1b5e20",
    A100: "#b9f6ca",
    A200: "#69f0ae",
    A400: "#00e676",
    A700: "#00c853",
  },
  gi = CD,
  RD = ["mode", "contrastThreshold", "tonalOffset"],
  c0 = {
    text: {
      primary: "rgba(0, 0, 0, 0.87)",
      secondary: "rgba(0, 0, 0, 0.6)",
      disabled: "rgba(0, 0, 0, 0.38)",
    },
    divider: "rgba(0, 0, 0, 0.12)",
    background: { paper: Gl.white, default: Gl.white },
    action: {
      active: "rgba(0, 0, 0, 0.54)",
      hover: "rgba(0, 0, 0, 0.04)",
      hoverOpacity: 0.04,
      selected: "rgba(0, 0, 0, 0.08)",
      selectedOpacity: 0.08,
      disabled: "rgba(0, 0, 0, 0.26)",
      disabledBackground: "rgba(0, 0, 0, 0.12)",
      disabledOpacity: 0.38,
      focus: "rgba(0, 0, 0, 0.12)",
      focusOpacity: 0.12,
      activatedOpacity: 0.12,
    },
  },
  jf = {
    text: {
      primary: Gl.white,
      secondary: "rgba(255, 255, 255, 0.7)",
      disabled: "rgba(255, 255, 255, 0.5)",
      icon: "rgba(255, 255, 255, 0.5)",
    },
    divider: "rgba(255, 255, 255, 0.12)",
    background: { paper: "#121212", default: "#121212" },
    action: {
      active: Gl.white,
      hover: "rgba(255, 255, 255, 0.08)",
      hoverOpacity: 0.08,
      selected: "rgba(255, 255, 255, 0.16)",
      selectedOpacity: 0.16,
      disabled: "rgba(255, 255, 255, 0.3)",
      disabledBackground: "rgba(255, 255, 255, 0.12)",
      disabledOpacity: 0.38,
      focus: "rgba(255, 255, 255, 0.12)",
      focusOpacity: 0.12,
      activatedOpacity: 0.24,
    },
  };
function d0(e, t, n, r) {
  const o = r.light || r,
    i = r.dark || r * 1.5;
  e[t] ||
    (e.hasOwnProperty(n)
      ? (e[t] = e[n])
      : t === "light"
      ? (e.light = uw(e.main, o))
      : t === "dark" && (e.dark = sw(e.main, i)));
}
function ED(e = "light") {
  return e === "dark"
    ? { main: hi[200], light: hi[50], dark: hi[400] }
    : { main: hi[700], light: hi[400], dark: hi[800] };
}
function TD(e = "light") {
  return e === "dark"
    ? { main: pi[200], light: pi[50], dark: pi[400] }
    : { main: pi[500], light: pi[300], dark: pi[700] };
}
function _D(e = "light") {
  return e === "dark"
    ? { main: vi[500], light: vi[300], dark: vi[700] }
    : { main: vi[700], light: vi[400], dark: vi[800] };
}
function PD(e = "light") {
  return e === "dark"
    ? { main: mi[400], light: mi[300], dark: mi[700] }
    : { main: mi[700], light: mi[500], dark: mi[900] };
}
function kD(e = "light") {
  return e === "dark"
    ? { main: gi[400], light: gi[300], dark: gi[700] }
    : { main: gi[800], light: gi[500], dark: gi[900] };
}
function DD(e = "light") {
  return e === "dark"
    ? { main: La[400], light: La[300], dark: La[700] }
    : { main: "#ed6c02", light: La[500], dark: La[900] };
}
function ID(e) {
  const {
      mode: t = "light",
      contrastThreshold: n = 3,
      tonalOffset: r = 0.2,
    } = e,
    o = xe(e, RD),
    i = e.primary || ED(t),
    a = e.secondary || TD(t),
    l = e.error || _D(t),
    s = e.info || PD(t),
    u = e.success || kD(t),
    c = e.warning || DD(t);
  function d(g) {
    return pD(g, jf.text.primary) >= n ? jf.text.primary : c0.text.primary;
  }
  const f = ({
      color: g,
      name: x,
      mainShade: v = 500,
      lightShade: m = 300,
      darkShade: y = 700,
    }) => {
      if (
        ((g = T({}, g)),
        !g.main && g[v] && (g.main = g[v]),
        !g.hasOwnProperty("main"))
      )
        throw new Error(ta(11, x ? ` (${x})` : "", v));
      if (typeof g.main != "string")
        throw new Error(ta(12, x ? ` (${x})` : "", JSON.stringify(g.main)));
      return (
        d0(g, "light", m, r),
        d0(g, "dark", y, r),
        g.contrastText || (g.contrastText = d(g.main)),
        g
      );
    },
    p = { dark: jf, light: c0 };
  return $r(
    T(
      {
        common: T({}, Gl),
        mode: t,
        primary: f({ color: i, name: "primary" }),
        secondary: f({
          color: a,
          name: "secondary",
          mainShade: "A400",
          lightShade: "A200",
          darkShade: "A700",
        }),
        error: f({ color: l, name: "error" }),
        warning: f({ color: c, name: "warning" }),
        info: f({ color: s, name: "info" }),
        success: f({ color: u, name: "success" }),
        grey: gD,
        contrastThreshold: n,
        getContrastText: d,
        augmentColor: f,
        tonalOffset: r,
      },
      p[t]
    ),
    o
  );
}
const AD = [
  "fontFamily",
  "fontSize",
  "fontWeightLight",
  "fontWeightRegular",
  "fontWeightMedium",
  "fontWeightBold",
  "htmlFontSize",
  "allVariants",
  "pxToRem",
];
function ND(e) {
  return Math.round(e * 1e5) / 1e5;
}
const f0 = { textTransform: "uppercase" },
  p0 = '"Roboto", "Helvetica", "Arial", sans-serif';
function OD(e, t) {
  const n = typeof t == "function" ? t(e) : t,
    {
      fontFamily: r = p0,
      fontSize: o = 14,
      fontWeightLight: i = 300,
      fontWeightRegular: a = 400,
      fontWeightMedium: l = 500,
      fontWeightBold: s = 700,
      htmlFontSize: u = 16,
      allVariants: c,
      pxToRem: d,
    } = n,
    f = xe(n, AD),
    p = o / 14,
    h = d || ((v) => `${(v / u) * p}rem`),
    g = (v, m, y, b, C) =>
      T(
        { fontFamily: r, fontWeight: v, fontSize: h(m), lineHeight: y },
        r === p0 ? { letterSpacing: `${ND(b / m)}em` } : {},
        C,
        c
      ),
    x = {
      h1: g(i, 96, 1.167, -1.5),
      h2: g(i, 60, 1.2, -0.5),
      h3: g(a, 48, 1.167, 0),
      h4: g(a, 34, 1.235, 0.25),
      h5: g(a, 24, 1.334, 0),
      h6: g(l, 20, 1.6, 0.15),
      subtitle1: g(a, 16, 1.75, 0.15),
      subtitle2: g(l, 14, 1.57, 0.1),
      body1: g(a, 16, 1.5, 0.15),
      body2: g(a, 14, 1.43, 0.15),
      button: g(l, 14, 1.75, 0.4, f0),
      caption: g(a, 12, 1.66, 0.4),
      overline: g(a, 12, 2.66, 1, f0),
      inherit: {
        fontFamily: "inherit",
        fontWeight: "inherit",
        fontSize: "inherit",
        lineHeight: "inherit",
        letterSpacing: "inherit",
      },
    };
  return $r(
    T(
      {
        htmlFontSize: u,
        pxToRem: h,
        fontFamily: r,
        fontSize: o,
        fontWeightLight: i,
        fontWeightRegular: a,
        fontWeightMedium: l,
        fontWeightBold: s,
      },
      x
    ),
    f,
    { clone: !1 }
  );
}
const MD = 0.2,
  $D = 0.14,
  LD = 0.12;
function et(...e) {
  return [
    `${e[0]}px ${e[1]}px ${e[2]}px ${e[3]}px rgba(0,0,0,${MD})`,
    `${e[4]}px ${e[5]}px ${e[6]}px ${e[7]}px rgba(0,0,0,${$D})`,
    `${e[8]}px ${e[9]}px ${e[10]}px ${e[11]}px rgba(0,0,0,${LD})`,
  ].join(",");
}
const BD = [
    "none",
    et(0, 2, 1, -1, 0, 1, 1, 0, 0, 1, 3, 0),
    et(0, 3, 1, -2, 0, 2, 2, 0, 0, 1, 5, 0),
    et(0, 3, 3, -2, 0, 3, 4, 0, 0, 1, 8, 0),
    et(0, 2, 4, -1, 0, 4, 5, 0, 0, 1, 10, 0),
    et(0, 3, 5, -1, 0, 5, 8, 0, 0, 1, 14, 0),
    et(0, 3, 5, -1, 0, 6, 10, 0, 0, 1, 18, 0),
    et(0, 4, 5, -2, 0, 7, 10, 1, 0, 2, 16, 1),
    et(0, 5, 5, -3, 0, 8, 10, 1, 0, 3, 14, 2),
    et(0, 5, 6, -3, 0, 9, 12, 1, 0, 3, 16, 2),
    et(0, 6, 6, -3, 0, 10, 14, 1, 0, 4, 18, 3),
    et(0, 6, 7, -4, 0, 11, 15, 1, 0, 4, 20, 3),
    et(0, 7, 8, -4, 0, 12, 17, 2, 0, 5, 22, 4),
    et(0, 7, 8, -4, 0, 13, 19, 2, 0, 5, 24, 4),
    et(0, 7, 9, -4, 0, 14, 21, 2, 0, 5, 26, 4),
    et(0, 8, 9, -5, 0, 15, 22, 2, 0, 6, 28, 5),
    et(0, 8, 10, -5, 0, 16, 24, 2, 0, 6, 30, 5),
    et(0, 8, 11, -5, 0, 17, 26, 2, 0, 6, 32, 5),
    et(0, 9, 11, -5, 0, 18, 28, 2, 0, 7, 34, 6),
    et(0, 9, 12, -6, 0, 19, 29, 2, 0, 7, 36, 6),
    et(0, 10, 13, -6, 0, 20, 31, 3, 0, 8, 38, 7),
    et(0, 10, 13, -6, 0, 21, 33, 3, 0, 8, 40, 7),
    et(0, 10, 14, -6, 0, 22, 35, 3, 0, 8, 42, 7),
    et(0, 11, 14, -7, 0, 23, 36, 3, 0, 9, 44, 8),
    et(0, 11, 15, -7, 0, 24, 38, 3, 0, 9, 46, 8),
  ],
  FD = BD,
  jD = ["duration", "easing", "delay"],
  zD = {
    easeInOut: "cubic-bezier(0.4, 0, 0.2, 1)",
    easeOut: "cubic-bezier(0.0, 0, 0.2, 1)",
    easeIn: "cubic-bezier(0.4, 0, 1, 1)",
    sharp: "cubic-bezier(0.4, 0, 0.6, 1)",
  },
  UD = {
    shortest: 150,
    shorter: 200,
    short: 250,
    standard: 300,
    complex: 375,
    enteringScreen: 225,
    leavingScreen: 195,
  };
function v0(e) {
  return `${Math.round(e)}ms`;
}
function VD(e) {
  if (!e) return 0;
  const t = e / 36;
  return Math.round((4 + 15 * t ** 0.25 + t / 5) * 10);
}
function WD(e) {
  const t = T({}, zD, e.easing),
    n = T({}, UD, e.duration);
  return T(
    {
      getAutoHeightDuration: VD,
      create: (o = ["all"], i = {}) => {
        const {
          duration: a = n.standard,
          easing: l = t.easeInOut,
          delay: s = 0,
        } = i;
        return (
          xe(i, jD),
          (Array.isArray(o) ? o : [o])
            .map(
              (u) =>
                `${u} ${typeof a == "string" ? a : v0(a)} ${l} ${
                  typeof s == "string" ? s : v0(s)
                }`
            )
            .join(",")
        );
      },
    },
    e,
    { easing: t, duration: n }
  );
}
const HD = {
    mobileStepper: 1e3,
    fab: 1050,
    speedDial: 1050,
    appBar: 1100,
    drawer: 1200,
    modal: 1300,
    snackbar: 1400,
    tooltip: 1500,
  },
  GD = HD,
  KD = [
    "breakpoints",
    "mixins",
    "spacing",
    "palette",
    "transitions",
    "typography",
    "shape",
  ];
function cw(e = {}, ...t) {
  const {
      mixins: n = {},
      palette: r = {},
      transitions: o = {},
      typography: i = {},
    } = e,
    a = xe(e, KD);
  if (e.vars) throw new Error(ta(18));
  const l = ID(r),
    s = sm(e);
  let u = $r(s, {
    mixins: vD(s.breakpoints, n),
    palette: l,
    shadows: FD.slice(),
    typography: OD(l, i),
    transitions: WD(o),
    zIndex: T({}, GD),
  });
  return (
    (u = $r(u, a)),
    (u = t.reduce((c, d) => $r(c, d), u)),
    (u.unstable_sxConfig = T({}, fd, a == null ? void 0 : a.unstable_sxConfig)),
    (u.unstable_sx = function (d) {
      return pd({ sx: d, theme: this });
    }),
    u
  );
}
const qD = cw(),
  dm = qD;
function fs() {
  const e = um(dm);
  return e[Gc] || e;
}
function ft({ props: e, name: t }) {
  return cD({ props: e, name: t, defaultTheme: dm, themeId: Gc });
}
const hd = (e) => Nu(e) && e !== "classes",
  YD = sD({ themeId: Gc, defaultTheme: dm, rootShouldForwardProp: hd }),
  Ee = YD,
  XD = (e) => {
    let t;
    return (
      e < 1 ? (t = 5.11916 * e ** 2) : (t = 4.5 * Math.log(e + 1) + 2),
      (t / 100).toFixed(2)
    );
  },
  h0 = XD;
function dw(e) {
  return typeof e == "string";
}
function nl(e, t, n) {
  return e === void 0 || dw(e)
    ? t
    : T({}, t, { ownerState: T({}, t.ownerState, n) });
}
const QD = { disableDefaultClasses: !1 },
  ZD = S.createContext(QD);
function fw(e) {
  const { disableDefaultClasses: t } = S.useContext(ZD);
  return (n) => (t ? "" : e(n));
}
function JD(e, t = []) {
  if (e === void 0) return {};
  const n = {};
  return (
    Object.keys(e)
      .filter(
        (r) =>
          r.match(/^on[A-Z]/) && typeof e[r] == "function" && !t.includes(r)
      )
      .forEach((r) => {
        n[r] = e[r];
      }),
    n
  );
}
function bv(e, t) {
  return typeof e == "function" ? e(t) : e;
}
function m0(e) {
  if (e === void 0) return {};
  const t = {};
  return (
    Object.keys(e)
      .filter((n) => !(n.match(/^on[A-Z]/) && typeof e[n] == "function"))
      .forEach((n) => {
        t[n] = e[n];
      }),
    t
  );
}
function eI(e) {
  const {
    getSlotProps: t,
    additionalProps: n,
    externalSlotProps: r,
    externalForwardedProps: o,
    className: i,
  } = e;
  if (!t) {
    const p = we(
        o == null ? void 0 : o.className,
        r == null ? void 0 : r.className,
        i,
        n == null ? void 0 : n.className
      ),
      h = T(
        {},
        n == null ? void 0 : n.style,
        o == null ? void 0 : o.style,
        r == null ? void 0 : r.style
      ),
      g = T({}, n, o, r);
    return (
      p.length > 0 && (g.className = p),
      Object.keys(h).length > 0 && (g.style = h),
      { props: g, internalRef: void 0 }
    );
  }
  const a = JD(T({}, o, r)),
    l = m0(r),
    s = m0(o),
    u = t(a),
    c = we(
      u == null ? void 0 : u.className,
      n == null ? void 0 : n.className,
      i,
      o == null ? void 0 : o.className,
      r == null ? void 0 : r.className
    ),
    d = T(
      {},
      u == null ? void 0 : u.style,
      n == null ? void 0 : n.style,
      o == null ? void 0 : o.style,
      r == null ? void 0 : r.style
    ),
    f = T({}, u, n, s, l);
  return (
    c.length > 0 && (f.className = c),
    Object.keys(d).length > 0 && (f.style = d),
    { props: f, internalRef: u.ref }
  );
}
const tI = ["elementType", "externalSlotProps", "ownerState"];
function Kl(e) {
  var t;
  const { elementType: n, externalSlotProps: r, ownerState: o } = e,
    i = xe(e, tI),
    a = bv(r, o),
    { props: l, internalRef: s } = eI(T({}, i, { externalSlotProps: a })),
    u = en(
      s,
      a == null ? void 0 : a.ref,
      (t = e.additionalProps) == null ? void 0 : t.ref
    );
  return nl(n, T({}, l, { ref: u }), o);
}
function nI(e) {
  const {
      badgeContent: t,
      invisible: n = !1,
      max: r = 99,
      showZero: o = !1,
    } = e,
    i = $S({ badgeContent: t, max: r });
  let a = n;
  n === !1 && t === 0 && !o && (a = !0);
  const { badgeContent: l, max: s = r } = a ? i : e,
    u = l && Number(l) > s ? `${s}+` : l;
  return { badgeContent: l, invisible: a, max: s, displayValue: u };
}
const rI = [
  "input",
  "select",
  "textarea",
  "a[href]",
  "button",
  "[tabindex]",
  "audio[controls]",
  "video[controls]",
  '[contenteditable]:not([contenteditable="false"])',
].join(",");
function oI(e) {
  const t = parseInt(e.getAttribute("tabindex") || "", 10);
  return Number.isNaN(t)
    ? e.contentEditable === "true" ||
      ((e.nodeName === "AUDIO" ||
        e.nodeName === "VIDEO" ||
        e.nodeName === "DETAILS") &&
        e.getAttribute("tabindex") === null)
      ? 0
      : e.tabIndex
    : t;
}
function iI(e) {
  if (e.tagName !== "INPUT" || e.type !== "radio" || !e.name) return !1;
  const t = (r) => e.ownerDocument.querySelector(`input[type="radio"]${r}`);
  let n = t(`[name="${e.name}"]:checked`);
  return n || (n = t(`[name="${e.name}"]`)), n !== e;
}
function aI(e) {
  return !(
    e.disabled ||
    (e.tagName === "INPUT" && e.type === "hidden") ||
    iI(e)
  );
}
function lI(e) {
  const t = [],
    n = [];
  return (
    Array.from(e.querySelectorAll(rI)).forEach((r, o) => {
      const i = oI(r);
      i === -1 ||
        !aI(r) ||
        (i === 0
          ? t.push(r)
          : n.push({ documentOrder: o, tabIndex: i, node: r }));
    }),
    n
      .sort((r, o) =>
        r.tabIndex === o.tabIndex
          ? r.documentOrder - o.documentOrder
          : r.tabIndex - o.tabIndex
      )
      .map((r) => r.node)
      .concat(t)
  );
}
function sI() {
  return !0;
}
function uI(e) {
  const {
      children: t,
      disableAutoFocus: n = !1,
      disableEnforceFocus: r = !1,
      disableRestoreFocus: o = !1,
      getTabbable: i = lI,
      isEnabled: a = sI,
      open: l,
    } = e,
    s = S.useRef(!1),
    u = S.useRef(null),
    c = S.useRef(null),
    d = S.useRef(null),
    f = S.useRef(null),
    p = S.useRef(!1),
    h = S.useRef(null),
    g = en(t.ref, h),
    x = S.useRef(null);
  S.useEffect(() => {
    !l || !h.current || (p.current = !n);
  }, [n, l]),
    S.useEffect(() => {
      if (!l || !h.current) return;
      const y = Jt(h.current);
      return (
        h.current.contains(y.activeElement) ||
          (h.current.hasAttribute("tabIndex") ||
            h.current.setAttribute("tabIndex", "-1"),
          p.current && h.current.focus()),
        () => {
          o ||
            (d.current &&
              d.current.focus &&
              ((s.current = !0), d.current.focus()),
            (d.current = null));
        }
      );
    }, [l]),
    S.useEffect(() => {
      if (!l || !h.current) return;
      const y = Jt(h.current),
        b = (E) => {
          const { current: D } = h;
          if (D !== null) {
            if (!y.hasFocus() || r || !a() || s.current) {
              s.current = !1;
              return;
            }
            if (!D.contains(y.activeElement)) {
              if (
                (E && f.current !== E.target) ||
                y.activeElement !== f.current
              )
                f.current = null;
              else if (f.current !== null) return;
              if (!p.current) return;
              let M = [];
              if (
                ((y.activeElement === u.current ||
                  y.activeElement === c.current) &&
                  (M = i(h.current)),
                M.length > 0)
              ) {
                var A, I;
                const J = !!(
                    (A = x.current) != null &&
                    A.shiftKey &&
                    ((I = x.current) == null ? void 0 : I.key) === "Tab"
                  ),
                  V = M[0],
                  j = M[M.length - 1];
                typeof V != "string" &&
                  typeof j != "string" &&
                  (J ? j.focus() : V.focus());
              } else D.focus();
            }
          }
        },
        C = (E) => {
          (x.current = E),
            !(r || !a() || E.key !== "Tab") &&
              y.activeElement === h.current &&
              E.shiftKey &&
              ((s.current = !0), c.current && c.current.focus());
        };
      y.addEventListener("focusin", b), y.addEventListener("keydown", C, !0);
      const R = setInterval(() => {
        y.activeElement && y.activeElement.tagName === "BODY" && b(null);
      }, 50);
      return () => {
        clearInterval(R),
          y.removeEventListener("focusin", b),
          y.removeEventListener("keydown", C, !0);
      };
    }, [n, r, o, a, l, i]);
  const v = (y) => {
      d.current === null && (d.current = y.relatedTarget),
        (p.current = !0),
        (f.current = y.target);
      const b = t.props.onFocus;
      b && b(y);
    },
    m = (y) => {
      d.current === null && (d.current = y.relatedTarget), (p.current = !0);
    };
  return w.jsxs(S.Fragment, {
    children: [
      w.jsx("div", {
        tabIndex: l ? 0 : -1,
        onFocus: m,
        ref: u,
        "data-testid": "sentinelStart",
      }),
      S.cloneElement(t, { ref: g, onFocus: v }),
      w.jsx("div", {
        tabIndex: l ? 0 : -1,
        onFocus: m,
        ref: c,
        "data-testid": "sentinelEnd",
      }),
    ],
  });
}
var hn = "top",
  qn = "bottom",
  Yn = "right",
  mn = "left",
  fm = "auto",
  ps = [hn, qn, Yn, mn],
  oa = "start",
  ql = "end",
  cI = "clippingParents",
  pw = "viewport",
  Ba = "popper",
  dI = "reference",
  g0 = ps.reduce(function (e, t) {
    return e.concat([t + "-" + oa, t + "-" + ql]);
  }, []),
  vw = [].concat(ps, [fm]).reduce(function (e, t) {
    return e.concat([t, t + "-" + oa, t + "-" + ql]);
  }, []),
  fI = "beforeRead",
  pI = "read",
  vI = "afterRead",
  hI = "beforeMain",
  mI = "main",
  gI = "afterMain",
  yI = "beforeWrite",
  bI = "write",
  xI = "afterWrite",
  SI = [fI, pI, vI, hI, mI, gI, yI, bI, xI];
function Er(e) {
  return e ? (e.nodeName || "").toLowerCase() : null;
}
function Dn(e) {
  if (e == null) return window;
  if (e.toString() !== "[object Window]") {
    var t = e.ownerDocument;
    return (t && t.defaultView) || window;
  }
  return e;
}
function ti(e) {
  var t = Dn(e).Element;
  return e instanceof t || e instanceof Element;
}
function Wn(e) {
  var t = Dn(e).HTMLElement;
  return e instanceof t || e instanceof HTMLElement;
}
function pm(e) {
  if (typeof ShadowRoot > "u") return !1;
  var t = Dn(e).ShadowRoot;
  return e instanceof t || e instanceof ShadowRoot;
}
function wI(e) {
  var t = e.state;
  Object.keys(t.elements).forEach(function (n) {
    var r = t.styles[n] || {},
      o = t.attributes[n] || {},
      i = t.elements[n];
    !Wn(i) ||
      !Er(i) ||
      (Object.assign(i.style, r),
      Object.keys(o).forEach(function (a) {
        var l = o[a];
        l === !1 ? i.removeAttribute(a) : i.setAttribute(a, l === !0 ? "" : l);
      }));
  });
}
function CI(e) {
  var t = e.state,
    n = {
      popper: {
        position: t.options.strategy,
        left: "0",
        top: "0",
        margin: "0",
      },
      arrow: { position: "absolute" },
      reference: {},
    };
  return (
    Object.assign(t.elements.popper.style, n.popper),
    (t.styles = n),
    t.elements.arrow && Object.assign(t.elements.arrow.style, n.arrow),
    function () {
      Object.keys(t.elements).forEach(function (r) {
        var o = t.elements[r],
          i = t.attributes[r] || {},
          a = Object.keys(t.styles.hasOwnProperty(r) ? t.styles[r] : n[r]),
          l = a.reduce(function (s, u) {
            return (s[u] = ""), s;
          }, {});
        !Wn(o) ||
          !Er(o) ||
          (Object.assign(o.style, l),
          Object.keys(i).forEach(function (s) {
            o.removeAttribute(s);
          }));
      });
    }
  );
}
const RI = {
  name: "applyStyles",
  enabled: !0,
  phase: "write",
  fn: wI,
  effect: CI,
  requires: ["computeStyles"],
};
function Rr(e) {
  return e.split("-")[0];
}
var qo = Math.max,
  cc = Math.min,
  ia = Math.round;
function xv() {
  var e = navigator.userAgentData;
  return e != null && e.brands && Array.isArray(e.brands)
    ? e.brands
        .map(function (t) {
          return t.brand + "/" + t.version;
        })
        .join(" ")
    : navigator.userAgent;
}
function hw() {
  return !/^((?!chrome|android).)*safari/i.test(xv());
}
function aa(e, t, n) {
  t === void 0 && (t = !1), n === void 0 && (n = !1);
  var r = e.getBoundingClientRect(),
    o = 1,
    i = 1;
  t &&
    Wn(e) &&
    ((o = (e.offsetWidth > 0 && ia(r.width) / e.offsetWidth) || 1),
    (i = (e.offsetHeight > 0 && ia(r.height) / e.offsetHeight) || 1));
  var a = ti(e) ? Dn(e) : window,
    l = a.visualViewport,
    s = !hw() && n,
    u = (r.left + (s && l ? l.offsetLeft : 0)) / o,
    c = (r.top + (s && l ? l.offsetTop : 0)) / i,
    d = r.width / o,
    f = r.height / i;
  return {
    width: d,
    height: f,
    top: c,
    right: u + d,
    bottom: c + f,
    left: u,
    x: u,
    y: c,
  };
}
function vm(e) {
  var t = aa(e),
    n = e.offsetWidth,
    r = e.offsetHeight;
  return (
    Math.abs(t.width - n) <= 1 && (n = t.width),
    Math.abs(t.height - r) <= 1 && (r = t.height),
    { x: e.offsetLeft, y: e.offsetTop, width: n, height: r }
  );
}
function mw(e, t) {
  var n = t.getRootNode && t.getRootNode();
  if (e.contains(t)) return !0;
  if (n && pm(n)) {
    var r = t;
    do {
      if (r && e.isSameNode(r)) return !0;
      r = r.parentNode || r.host;
    } while (r);
  }
  return !1;
}
function Ur(e) {
  return Dn(e).getComputedStyle(e);
}
function EI(e) {
  return ["table", "td", "th"].indexOf(Er(e)) >= 0;
}
function _o(e) {
  return ((ti(e) ? e.ownerDocument : e.document) || window.document)
    .documentElement;
}
function md(e) {
  return Er(e) === "html"
    ? e
    : e.assignedSlot || e.parentNode || (pm(e) ? e.host : null) || _o(e);
}
function y0(e) {
  return !Wn(e) || Ur(e).position === "fixed" ? null : e.offsetParent;
}
function TI(e) {
  var t = /firefox/i.test(xv()),
    n = /Trident/i.test(xv());
  if (n && Wn(e)) {
    var r = Ur(e);
    if (r.position === "fixed") return null;
  }
  var o = md(e);
  for (pm(o) && (o = o.host); Wn(o) && ["html", "body"].indexOf(Er(o)) < 0; ) {
    var i = Ur(o);
    if (
      i.transform !== "none" ||
      i.perspective !== "none" ||
      i.contain === "paint" ||
      ["transform", "perspective"].indexOf(i.willChange) !== -1 ||
      (t && i.willChange === "filter") ||
      (t && i.filter && i.filter !== "none")
    )
      return o;
    o = o.parentNode;
  }
  return null;
}
function vs(e) {
  for (var t = Dn(e), n = y0(e); n && EI(n) && Ur(n).position === "static"; )
    n = y0(n);
  return n &&
    (Er(n) === "html" || (Er(n) === "body" && Ur(n).position === "static"))
    ? t
    : n || TI(e) || t;
}
function hm(e) {
  return ["top", "bottom"].indexOf(e) >= 0 ? "x" : "y";
}
function gl(e, t, n) {
  return qo(e, cc(t, n));
}
function _I(e, t, n) {
  var r = gl(e, t, n);
  return r > n ? n : r;
}
function gw() {
  return { top: 0, right: 0, bottom: 0, left: 0 };
}
function yw(e) {
  return Object.assign({}, gw(), e);
}
function bw(e, t) {
  return t.reduce(function (n, r) {
    return (n[r] = e), n;
  }, {});
}
var PI = function (t, n) {
  return (
    (t =
      typeof t == "function"
        ? t(Object.assign({}, n.rects, { placement: n.placement }))
        : t),
    yw(typeof t != "number" ? t : bw(t, ps))
  );
};
function kI(e) {
  var t,
    n = e.state,
    r = e.name,
    o = e.options,
    i = n.elements.arrow,
    a = n.modifiersData.popperOffsets,
    l = Rr(n.placement),
    s = hm(l),
    u = [mn, Yn].indexOf(l) >= 0,
    c = u ? "height" : "width";
  if (!(!i || !a)) {
    var d = PI(o.padding, n),
      f = vm(i),
      p = s === "y" ? hn : mn,
      h = s === "y" ? qn : Yn,
      g =
        n.rects.reference[c] + n.rects.reference[s] - a[s] - n.rects.popper[c],
      x = a[s] - n.rects.reference[s],
      v = vs(i),
      m = v ? (s === "y" ? v.clientHeight || 0 : v.clientWidth || 0) : 0,
      y = g / 2 - x / 2,
      b = d[p],
      C = m - f[c] - d[h],
      R = m / 2 - f[c] / 2 + y,
      E = gl(b, R, C),
      D = s;
    n.modifiersData[r] = ((t = {}), (t[D] = E), (t.centerOffset = E - R), t);
  }
}
function DI(e) {
  var t = e.state,
    n = e.options,
    r = n.element,
    o = r === void 0 ? "[data-popper-arrow]" : r;
  o != null &&
    ((typeof o == "string" && ((o = t.elements.popper.querySelector(o)), !o)) ||
      (mw(t.elements.popper, o) && (t.elements.arrow = o)));
}
const II = {
  name: "arrow",
  enabled: !0,
  phase: "main",
  fn: kI,
  effect: DI,
  requires: ["popperOffsets"],
  requiresIfExists: ["preventOverflow"],
};
function la(e) {
  return e.split("-")[1];
}
var AI = { top: "auto", right: "auto", bottom: "auto", left: "auto" };
function NI(e, t) {
  var n = e.x,
    r = e.y,
    o = t.devicePixelRatio || 1;
  return { x: ia(n * o) / o || 0, y: ia(r * o) / o || 0 };
}
function b0(e) {
  var t,
    n = e.popper,
    r = e.popperRect,
    o = e.placement,
    i = e.variation,
    a = e.offsets,
    l = e.position,
    s = e.gpuAcceleration,
    u = e.adaptive,
    c = e.roundOffsets,
    d = e.isFixed,
    f = a.x,
    p = f === void 0 ? 0 : f,
    h = a.y,
    g = h === void 0 ? 0 : h,
    x = typeof c == "function" ? c({ x: p, y: g }) : { x: p, y: g };
  (p = x.x), (g = x.y);
  var v = a.hasOwnProperty("x"),
    m = a.hasOwnProperty("y"),
    y = mn,
    b = hn,
    C = window;
  if (u) {
    var R = vs(n),
      E = "clientHeight",
      D = "clientWidth";
    if (
      (R === Dn(n) &&
        ((R = _o(n)),
        Ur(R).position !== "static" &&
          l === "absolute" &&
          ((E = "scrollHeight"), (D = "scrollWidth"))),
      (R = R),
      o === hn || ((o === mn || o === Yn) && i === ql))
    ) {
      b = qn;
      var A = d && R === C && C.visualViewport ? C.visualViewport.height : R[E];
      (g -= A - r.height), (g *= s ? 1 : -1);
    }
    if (o === mn || ((o === hn || o === qn) && i === ql)) {
      y = Yn;
      var I = d && R === C && C.visualViewport ? C.visualViewport.width : R[D];
      (p -= I - r.width), (p *= s ? 1 : -1);
    }
  }
  var M = Object.assign({ position: l }, u && AI),
    J = c === !0 ? NI({ x: p, y: g }, Dn(n)) : { x: p, y: g };
  if (((p = J.x), (g = J.y), s)) {
    var V;
    return Object.assign(
      {},
      M,
      ((V = {}),
      (V[b] = m ? "0" : ""),
      (V[y] = v ? "0" : ""),
      (V.transform =
        (C.devicePixelRatio || 1) <= 1
          ? "translate(" + p + "px, " + g + "px)"
          : "translate3d(" + p + "px, " + g + "px, 0)"),
      V)
    );
  }
  return Object.assign(
    {},
    M,
    ((t = {}),
    (t[b] = m ? g + "px" : ""),
    (t[y] = v ? p + "px" : ""),
    (t.transform = ""),
    t)
  );
}
function OI(e) {
  var t = e.state,
    n = e.options,
    r = n.gpuAcceleration,
    o = r === void 0 ? !0 : r,
    i = n.adaptive,
    a = i === void 0 ? !0 : i,
    l = n.roundOffsets,
    s = l === void 0 ? !0 : l,
    u = {
      placement: Rr(t.placement),
      variation: la(t.placement),
      popper: t.elements.popper,
      popperRect: t.rects.popper,
      gpuAcceleration: o,
      isFixed: t.options.strategy === "fixed",
    };
  t.modifiersData.popperOffsets != null &&
    (t.styles.popper = Object.assign(
      {},
      t.styles.popper,
      b0(
        Object.assign({}, u, {
          offsets: t.modifiersData.popperOffsets,
          position: t.options.strategy,
          adaptive: a,
          roundOffsets: s,
        })
      )
    )),
    t.modifiersData.arrow != null &&
      (t.styles.arrow = Object.assign(
        {},
        t.styles.arrow,
        b0(
          Object.assign({}, u, {
            offsets: t.modifiersData.arrow,
            position: "absolute",
            adaptive: !1,
            roundOffsets: s,
          })
        )
      )),
    (t.attributes.popper = Object.assign({}, t.attributes.popper, {
      "data-popper-placement": t.placement,
    }));
}
const MI = {
  name: "computeStyles",
  enabled: !0,
  phase: "beforeWrite",
  fn: OI,
  data: {},
};
var tu = { passive: !0 };
function $I(e) {
  var t = e.state,
    n = e.instance,
    r = e.options,
    o = r.scroll,
    i = o === void 0 ? !0 : o,
    a = r.resize,
    l = a === void 0 ? !0 : a,
    s = Dn(t.elements.popper),
    u = [].concat(t.scrollParents.reference, t.scrollParents.popper);
  return (
    i &&
      u.forEach(function (c) {
        c.addEventListener("scroll", n.update, tu);
      }),
    l && s.addEventListener("resize", n.update, tu),
    function () {
      i &&
        u.forEach(function (c) {
          c.removeEventListener("scroll", n.update, tu);
        }),
        l && s.removeEventListener("resize", n.update, tu);
    }
  );
}
const LI = {
  name: "eventListeners",
  enabled: !0,
  phase: "write",
  fn: function () {},
  effect: $I,
  data: {},
};
var BI = { left: "right", right: "left", bottom: "top", top: "bottom" };
function Ou(e) {
  return e.replace(/left|right|bottom|top/g, function (t) {
    return BI[t];
  });
}
var FI = { start: "end", end: "start" };
function x0(e) {
  return e.replace(/start|end/g, function (t) {
    return FI[t];
  });
}
function mm(e) {
  var t = Dn(e),
    n = t.pageXOffset,
    r = t.pageYOffset;
  return { scrollLeft: n, scrollTop: r };
}
function gm(e) {
  return aa(_o(e)).left + mm(e).scrollLeft;
}
function jI(e, t) {
  var n = Dn(e),
    r = _o(e),
    o = n.visualViewport,
    i = r.clientWidth,
    a = r.clientHeight,
    l = 0,
    s = 0;
  if (o) {
    (i = o.width), (a = o.height);
    var u = hw();
    (u || (!u && t === "fixed")) && ((l = o.offsetLeft), (s = o.offsetTop));
  }
  return { width: i, height: a, x: l + gm(e), y: s };
}
function zI(e) {
  var t,
    n = _o(e),
    r = mm(e),
    o = (t = e.ownerDocument) == null ? void 0 : t.body,
    i = qo(
      n.scrollWidth,
      n.clientWidth,
      o ? o.scrollWidth : 0,
      o ? o.clientWidth : 0
    ),
    a = qo(
      n.scrollHeight,
      n.clientHeight,
      o ? o.scrollHeight : 0,
      o ? o.clientHeight : 0
    ),
    l = -r.scrollLeft + gm(e),
    s = -r.scrollTop;
  return (
    Ur(o || n).direction === "rtl" &&
      (l += qo(n.clientWidth, o ? o.clientWidth : 0) - i),
    { width: i, height: a, x: l, y: s }
  );
}
function ym(e) {
  var t = Ur(e),
    n = t.overflow,
    r = t.overflowX,
    o = t.overflowY;
  return /auto|scroll|overlay|hidden/.test(n + o + r);
}
function xw(e) {
  return ["html", "body", "#document"].indexOf(Er(e)) >= 0
    ? e.ownerDocument.body
    : Wn(e) && ym(e)
    ? e
    : xw(md(e));
}
function yl(e, t) {
  var n;
  t === void 0 && (t = []);
  var r = xw(e),
    o = r === ((n = e.ownerDocument) == null ? void 0 : n.body),
    i = Dn(r),
    a = o ? [i].concat(i.visualViewport || [], ym(r) ? r : []) : r,
    l = t.concat(a);
  return o ? l : l.concat(yl(md(a)));
}
function Sv(e) {
  return Object.assign({}, e, {
    left: e.x,
    top: e.y,
    right: e.x + e.width,
    bottom: e.y + e.height,
  });
}
function UI(e, t) {
  var n = aa(e, !1, t === "fixed");
  return (
    (n.top = n.top + e.clientTop),
    (n.left = n.left + e.clientLeft),
    (n.bottom = n.top + e.clientHeight),
    (n.right = n.left + e.clientWidth),
    (n.width = e.clientWidth),
    (n.height = e.clientHeight),
    (n.x = n.left),
    (n.y = n.top),
    n
  );
}
function S0(e, t, n) {
  return t === pw ? Sv(jI(e, n)) : ti(t) ? UI(t, n) : Sv(zI(_o(e)));
}
function VI(e) {
  var t = yl(md(e)),
    n = ["absolute", "fixed"].indexOf(Ur(e).position) >= 0,
    r = n && Wn(e) ? vs(e) : e;
  return ti(r)
    ? t.filter(function (o) {
        return ti(o) && mw(o, r) && Er(o) !== "body";
      })
    : [];
}
function WI(e, t, n, r) {
  var o = t === "clippingParents" ? VI(e) : [].concat(t),
    i = [].concat(o, [n]),
    a = i[0],
    l = i.reduce(function (s, u) {
      var c = S0(e, u, r);
      return (
        (s.top = qo(c.top, s.top)),
        (s.right = cc(c.right, s.right)),
        (s.bottom = cc(c.bottom, s.bottom)),
        (s.left = qo(c.left, s.left)),
        s
      );
    }, S0(e, a, r));
  return (
    (l.width = l.right - l.left),
    (l.height = l.bottom - l.top),
    (l.x = l.left),
    (l.y = l.top),
    l
  );
}
function Sw(e) {
  var t = e.reference,
    n = e.element,
    r = e.placement,
    o = r ? Rr(r) : null,
    i = r ? la(r) : null,
    a = t.x + t.width / 2 - n.width / 2,
    l = t.y + t.height / 2 - n.height / 2,
    s;
  switch (o) {
    case hn:
      s = { x: a, y: t.y - n.height };
      break;
    case qn:
      s = { x: a, y: t.y + t.height };
      break;
    case Yn:
      s = { x: t.x + t.width, y: l };
      break;
    case mn:
      s = { x: t.x - n.width, y: l };
      break;
    default:
      s = { x: t.x, y: t.y };
  }
  var u = o ? hm(o) : null;
  if (u != null) {
    var c = u === "y" ? "height" : "width";
    switch (i) {
      case oa:
        s[u] = s[u] - (t[c] / 2 - n[c] / 2);
        break;
      case ql:
        s[u] = s[u] + (t[c] / 2 - n[c] / 2);
        break;
    }
  }
  return s;
}
function Yl(e, t) {
  t === void 0 && (t = {});
  var n = t,
    r = n.placement,
    o = r === void 0 ? e.placement : r,
    i = n.strategy,
    a = i === void 0 ? e.strategy : i,
    l = n.boundary,
    s = l === void 0 ? cI : l,
    u = n.rootBoundary,
    c = u === void 0 ? pw : u,
    d = n.elementContext,
    f = d === void 0 ? Ba : d,
    p = n.altBoundary,
    h = p === void 0 ? !1 : p,
    g = n.padding,
    x = g === void 0 ? 0 : g,
    v = yw(typeof x != "number" ? x : bw(x, ps)),
    m = f === Ba ? dI : Ba,
    y = e.rects.popper,
    b = e.elements[h ? m : f],
    C = WI(ti(b) ? b : b.contextElement || _o(e.elements.popper), s, c, a),
    R = aa(e.elements.reference),
    E = Sw({ reference: R, element: y, strategy: "absolute", placement: o }),
    D = Sv(Object.assign({}, y, E)),
    A = f === Ba ? D : R,
    I = {
      top: C.top - A.top + v.top,
      bottom: A.bottom - C.bottom + v.bottom,
      left: C.left - A.left + v.left,
      right: A.right - C.right + v.right,
    },
    M = e.modifiersData.offset;
  if (f === Ba && M) {
    var J = M[o];
    Object.keys(I).forEach(function (V) {
      var j = [Yn, qn].indexOf(V) >= 0 ? 1 : -1,
        z = [hn, qn].indexOf(V) >= 0 ? "y" : "x";
      I[V] += J[z] * j;
    });
  }
  return I;
}
function HI(e, t) {
  t === void 0 && (t = {});
  var n = t,
    r = n.placement,
    o = n.boundary,
    i = n.rootBoundary,
    a = n.padding,
    l = n.flipVariations,
    s = n.allowedAutoPlacements,
    u = s === void 0 ? vw : s,
    c = la(r),
    d = c
      ? l
        ? g0
        : g0.filter(function (h) {
            return la(h) === c;
          })
      : ps,
    f = d.filter(function (h) {
      return u.indexOf(h) >= 0;
    });
  f.length === 0 && (f = d);
  var p = f.reduce(function (h, g) {
    return (
      (h[g] = Yl(e, { placement: g, boundary: o, rootBoundary: i, padding: a })[
        Rr(g)
      ]),
      h
    );
  }, {});
  return Object.keys(p).sort(function (h, g) {
    return p[h] - p[g];
  });
}
function GI(e) {
  if (Rr(e) === fm) return [];
  var t = Ou(e);
  return [x0(e), t, x0(t)];
}
function KI(e) {
  var t = e.state,
    n = e.options,
    r = e.name;
  if (!t.modifiersData[r]._skip) {
    for (
      var o = n.mainAxis,
        i = o === void 0 ? !0 : o,
        a = n.altAxis,
        l = a === void 0 ? !0 : a,
        s = n.fallbackPlacements,
        u = n.padding,
        c = n.boundary,
        d = n.rootBoundary,
        f = n.altBoundary,
        p = n.flipVariations,
        h = p === void 0 ? !0 : p,
        g = n.allowedAutoPlacements,
        x = t.options.placement,
        v = Rr(x),
        m = v === x,
        y = s || (m || !h ? [Ou(x)] : GI(x)),
        b = [x].concat(y).reduce(function (O, H) {
          return O.concat(
            Rr(H) === fm
              ? HI(t, {
                  placement: H,
                  boundary: c,
                  rootBoundary: d,
                  padding: u,
                  flipVariations: h,
                  allowedAutoPlacements: g,
                })
              : H
          );
        }, []),
        C = t.rects.reference,
        R = t.rects.popper,
        E = new Map(),
        D = !0,
        A = b[0],
        I = 0;
      I < b.length;
      I++
    ) {
      var M = b[I],
        J = Rr(M),
        V = la(M) === oa,
        j = [hn, qn].indexOf(J) >= 0,
        z = j ? "width" : "height",
        q = Yl(t, {
          placement: M,
          boundary: c,
          rootBoundary: d,
          altBoundary: f,
          padding: u,
        }),
        re = j ? (V ? Yn : mn) : V ? qn : hn;
      C[z] > R[z] && (re = Ou(re));
      var U = Ou(re),
        X = [];
      if (
        (i && X.push(q[J] <= 0),
        l && X.push(q[re] <= 0, q[U] <= 0),
        X.every(function (O) {
          return O;
        }))
      ) {
        (A = M), (D = !1);
        break;
      }
      E.set(M, X);
    }
    if (D)
      for (
        var W = h ? 3 : 1,
          ee = function (H) {
            var Y = b.find(function (se) {
              var ie = E.get(se);
              if (ie)
                return ie.slice(0, H).every(function (te) {
                  return te;
                });
            });
            if (Y) return (A = Y), "break";
          },
          k = W;
        k > 0;
        k--
      ) {
        var L = ee(k);
        if (L === "break") break;
      }
    t.placement !== A &&
      ((t.modifiersData[r]._skip = !0), (t.placement = A), (t.reset = !0));
  }
}
const qI = {
  name: "flip",
  enabled: !0,
  phase: "main",
  fn: KI,
  requiresIfExists: ["offset"],
  data: { _skip: !1 },
};
function w0(e, t, n) {
  return (
    n === void 0 && (n = { x: 0, y: 0 }),
    {
      top: e.top - t.height - n.y,
      right: e.right - t.width + n.x,
      bottom: e.bottom - t.height + n.y,
      left: e.left - t.width - n.x,
    }
  );
}
function C0(e) {
  return [hn, Yn, qn, mn].some(function (t) {
    return e[t] >= 0;
  });
}
function YI(e) {
  var t = e.state,
    n = e.name,
    r = t.rects.reference,
    o = t.rects.popper,
    i = t.modifiersData.preventOverflow,
    a = Yl(t, { elementContext: "reference" }),
    l = Yl(t, { altBoundary: !0 }),
    s = w0(a, r),
    u = w0(l, o, i),
    c = C0(s),
    d = C0(u);
  (t.modifiersData[n] = {
    referenceClippingOffsets: s,
    popperEscapeOffsets: u,
    isReferenceHidden: c,
    hasPopperEscaped: d,
  }),
    (t.attributes.popper = Object.assign({}, t.attributes.popper, {
      "data-popper-reference-hidden": c,
      "data-popper-escaped": d,
    }));
}
const XI = {
  name: "hide",
  enabled: !0,
  phase: "main",
  requiresIfExists: ["preventOverflow"],
  fn: YI,
};
function QI(e, t, n) {
  var r = Rr(e),
    o = [mn, hn].indexOf(r) >= 0 ? -1 : 1,
    i = typeof n == "function" ? n(Object.assign({}, t, { placement: e })) : n,
    a = i[0],
    l = i[1];
  return (
    (a = a || 0),
    (l = (l || 0) * o),
    [mn, Yn].indexOf(r) >= 0 ? { x: l, y: a } : { x: a, y: l }
  );
}
function ZI(e) {
  var t = e.state,
    n = e.options,
    r = e.name,
    o = n.offset,
    i = o === void 0 ? [0, 0] : o,
    a = vw.reduce(function (c, d) {
      return (c[d] = QI(d, t.rects, i)), c;
    }, {}),
    l = a[t.placement],
    s = l.x,
    u = l.y;
  t.modifiersData.popperOffsets != null &&
    ((t.modifiersData.popperOffsets.x += s),
    (t.modifiersData.popperOffsets.y += u)),
    (t.modifiersData[r] = a);
}
const JI = {
  name: "offset",
  enabled: !0,
  phase: "main",
  requires: ["popperOffsets"],
  fn: ZI,
};
function eA(e) {
  var t = e.state,
    n = e.name;
  t.modifiersData[n] = Sw({
    reference: t.rects.reference,
    element: t.rects.popper,
    strategy: "absolute",
    placement: t.placement,
  });
}
const tA = {
  name: "popperOffsets",
  enabled: !0,
  phase: "read",
  fn: eA,
  data: {},
};
function nA(e) {
  return e === "x" ? "y" : "x";
}
function rA(e) {
  var t = e.state,
    n = e.options,
    r = e.name,
    o = n.mainAxis,
    i = o === void 0 ? !0 : o,
    a = n.altAxis,
    l = a === void 0 ? !1 : a,
    s = n.boundary,
    u = n.rootBoundary,
    c = n.altBoundary,
    d = n.padding,
    f = n.tether,
    p = f === void 0 ? !0 : f,
    h = n.tetherOffset,
    g = h === void 0 ? 0 : h,
    x = Yl(t, { boundary: s, rootBoundary: u, padding: d, altBoundary: c }),
    v = Rr(t.placement),
    m = la(t.placement),
    y = !m,
    b = hm(v),
    C = nA(b),
    R = t.modifiersData.popperOffsets,
    E = t.rects.reference,
    D = t.rects.popper,
    A =
      typeof g == "function"
        ? g(Object.assign({}, t.rects, { placement: t.placement }))
        : g,
    I =
      typeof A == "number"
        ? { mainAxis: A, altAxis: A }
        : Object.assign({ mainAxis: 0, altAxis: 0 }, A),
    M = t.modifiersData.offset ? t.modifiersData.offset[t.placement] : null,
    J = { x: 0, y: 0 };
  if (R) {
    if (i) {
      var V,
        j = b === "y" ? hn : mn,
        z = b === "y" ? qn : Yn,
        q = b === "y" ? "height" : "width",
        re = R[b],
        U = re + x[j],
        X = re - x[z],
        W = p ? -D[q] / 2 : 0,
        ee = m === oa ? E[q] : D[q],
        k = m === oa ? -D[q] : -E[q],
        L = t.elements.arrow,
        O = p && L ? vm(L) : { width: 0, height: 0 },
        H = t.modifiersData["arrow#persistent"]
          ? t.modifiersData["arrow#persistent"].padding
          : gw(),
        Y = H[j],
        se = H[z],
        ie = gl(0, E[q], O[q]),
        te = y ? E[q] / 2 - W - ie - Y - I.mainAxis : ee - ie - Y - I.mainAxis,
        Se = y
          ? -E[q] / 2 + W + ie + se + I.mainAxis
          : k + ie + se + I.mainAxis,
        ye = t.elements.arrow && vs(t.elements.arrow),
        be = ye ? (b === "y" ? ye.clientTop || 0 : ye.clientLeft || 0) : 0,
        Re = (V = M == null ? void 0 : M[b]) != null ? V : 0,
        Be = re + te - Re - be,
        Ue = re + Se - Re,
        Oe = gl(p ? cc(U, Be) : U, re, p ? qo(X, Ue) : X);
      (R[b] = Oe), (J[b] = Oe - re);
    }
    if (l) {
      var ge,
        jt = b === "x" ? hn : mn,
        wt = b === "x" ? qn : Yn,
        Ze = R[C],
        Ct = C === "y" ? "height" : "width",
        It = Ze + x[jt],
        zt = Ze - x[wt],
        ht = [hn, mn].indexOf(v) !== -1,
        Je = (ge = M == null ? void 0 : M[C]) != null ? ge : 0,
        Zn = ht ? It : Ze - E[Ct] - D[Ct] - Je + I.altAxis,
        Jn = ht ? Ze + E[Ct] + D[Ct] - Je - I.altAxis : zt,
        Mn = p && ht ? _I(Zn, Ze, Jn) : gl(p ? Zn : It, Ze, p ? Jn : zt);
      (R[C] = Mn), (J[C] = Mn - Ze);
    }
    t.modifiersData[r] = J;
  }
}
const oA = {
  name: "preventOverflow",
  enabled: !0,
  phase: "main",
  fn: rA,
  requiresIfExists: ["offset"],
};
function iA(e) {
  return { scrollLeft: e.scrollLeft, scrollTop: e.scrollTop };
}
function aA(e) {
  return e === Dn(e) || !Wn(e) ? mm(e) : iA(e);
}
function lA(e) {
  var t = e.getBoundingClientRect(),
    n = ia(t.width) / e.offsetWidth || 1,
    r = ia(t.height) / e.offsetHeight || 1;
  return n !== 1 || r !== 1;
}
function sA(e, t, n) {
  n === void 0 && (n = !1);
  var r = Wn(t),
    o = Wn(t) && lA(t),
    i = _o(t),
    a = aa(e, o, n),
    l = { scrollLeft: 0, scrollTop: 0 },
    s = { x: 0, y: 0 };
  return (
    (r || (!r && !n)) &&
      ((Er(t) !== "body" || ym(i)) && (l = aA(t)),
      Wn(t)
        ? ((s = aa(t, !0)), (s.x += t.clientLeft), (s.y += t.clientTop))
        : i && (s.x = gm(i))),
    {
      x: a.left + l.scrollLeft - s.x,
      y: a.top + l.scrollTop - s.y,
      width: a.width,
      height: a.height,
    }
  );
}
function uA(e) {
  var t = new Map(),
    n = new Set(),
    r = [];
  e.forEach(function (i) {
    t.set(i.name, i);
  });
  function o(i) {
    n.add(i.name);
    var a = [].concat(i.requires || [], i.requiresIfExists || []);
    a.forEach(function (l) {
      if (!n.has(l)) {
        var s = t.get(l);
        s && o(s);
      }
    }),
      r.push(i);
  }
  return (
    e.forEach(function (i) {
      n.has(i.name) || o(i);
    }),
    r
  );
}
function cA(e) {
  var t = uA(e);
  return SI.reduce(function (n, r) {
    return n.concat(
      t.filter(function (o) {
        return o.phase === r;
      })
    );
  }, []);
}
function dA(e) {
  var t;
  return function () {
    return (
      t ||
        (t = new Promise(function (n) {
          Promise.resolve().then(function () {
            (t = void 0), n(e());
          });
        })),
      t
    );
  };
}
function fA(e) {
  var t = e.reduce(function (n, r) {
    var o = n[r.name];
    return (
      (n[r.name] = o
        ? Object.assign({}, o, r, {
            options: Object.assign({}, o.options, r.options),
            data: Object.assign({}, o.data, r.data),
          })
        : r),
      n
    );
  }, {});
  return Object.keys(t).map(function (n) {
    return t[n];
  });
}
var R0 = { placement: "bottom", modifiers: [], strategy: "absolute" };
function E0() {
  for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
    t[n] = arguments[n];
  return !t.some(function (r) {
    return !(r && typeof r.getBoundingClientRect == "function");
  });
}
function pA(e) {
  e === void 0 && (e = {});
  var t = e,
    n = t.defaultModifiers,
    r = n === void 0 ? [] : n,
    o = t.defaultOptions,
    i = o === void 0 ? R0 : o;
  return function (l, s, u) {
    u === void 0 && (u = i);
    var c = {
        placement: "bottom",
        orderedModifiers: [],
        options: Object.assign({}, R0, i),
        modifiersData: {},
        elements: { reference: l, popper: s },
        attributes: {},
        styles: {},
      },
      d = [],
      f = !1,
      p = {
        state: c,
        setOptions: function (v) {
          var m = typeof v == "function" ? v(c.options) : v;
          g(),
            (c.options = Object.assign({}, i, c.options, m)),
            (c.scrollParents = {
              reference: ti(l)
                ? yl(l)
                : l.contextElement
                ? yl(l.contextElement)
                : [],
              popper: yl(s),
            });
          var y = cA(fA([].concat(r, c.options.modifiers)));
          return (
            (c.orderedModifiers = y.filter(function (b) {
              return b.enabled;
            })),
            h(),
            p.update()
          );
        },
        forceUpdate: function () {
          if (!f) {
            var v = c.elements,
              m = v.reference,
              y = v.popper;
            if (E0(m, y)) {
              (c.rects = {
                reference: sA(m, vs(y), c.options.strategy === "fixed"),
                popper: vm(y),
              }),
                (c.reset = !1),
                (c.placement = c.options.placement),
                c.orderedModifiers.forEach(function (I) {
                  return (c.modifiersData[I.name] = Object.assign({}, I.data));
                });
              for (var b = 0; b < c.orderedModifiers.length; b++) {
                if (c.reset === !0) {
                  (c.reset = !1), (b = -1);
                  continue;
                }
                var C = c.orderedModifiers[b],
                  R = C.fn,
                  E = C.options,
                  D = E === void 0 ? {} : E,
                  A = C.name;
                typeof R == "function" &&
                  (c = R({ state: c, options: D, name: A, instance: p }) || c);
              }
            }
          }
        },
        update: dA(function () {
          return new Promise(function (x) {
            p.forceUpdate(), x(c);
          });
        }),
        destroy: function () {
          g(), (f = !0);
        },
      };
    if (!E0(l, s)) return p;
    p.setOptions(u).then(function (x) {
      !f && u.onFirstUpdate && u.onFirstUpdate(x);
    });
    function h() {
      c.orderedModifiers.forEach(function (x) {
        var v = x.name,
          m = x.options,
          y = m === void 0 ? {} : m,
          b = x.effect;
        if (typeof b == "function") {
          var C = b({ state: c, name: v, instance: p, options: y }),
            R = function () {};
          d.push(C || R);
        }
      });
    }
    function g() {
      d.forEach(function (x) {
        return x();
      }),
        (d = []);
    }
    return p;
  };
}
var vA = [LI, tA, MI, RI, JI, qI, oA, II, XI],
  hA = pA({ defaultModifiers: vA });
function mA(e) {
  return typeof e == "function" ? e() : e;
}
const gA = S.forwardRef(function (t, n) {
    const { children: r, container: o, disablePortal: i = !1 } = t,
      [a, l] = S.useState(null),
      s = en(S.isValidElement(r) ? r.ref : null, n);
    if (
      (wo(() => {
        i || l(mA(o) || document.body);
      }, [o, i]),
      wo(() => {
        if (a && !i)
          return (
            lc(n, a),
            () => {
              lc(n, null);
            }
          );
      }, [n, a, i]),
      i)
    ) {
      if (S.isValidElement(r)) {
        const u = { ref: s };
        return S.cloneElement(r, u);
      }
      return w.jsx(S.Fragment, { children: r });
    }
    return w.jsx(S.Fragment, { children: a && Wc.createPortal(r, a) });
  }),
  ww = gA;
function yA(e) {
  return lt("MuiPopper", e);
}
Ke("MuiPopper", ["root"]);
const bA = [
    "anchorEl",
    "children",
    "direction",
    "disablePortal",
    "modifiers",
    "open",
    "placement",
    "popperOptions",
    "popperRef",
    "slotProps",
    "slots",
    "TransitionProps",
    "ownerState",
  ],
  xA = [
    "anchorEl",
    "children",
    "container",
    "direction",
    "disablePortal",
    "keepMounted",
    "modifiers",
    "open",
    "placement",
    "popperOptions",
    "popperRef",
    "style",
    "transition",
    "slotProps",
    "slots",
  ];
function SA(e, t) {
  if (t === "ltr") return e;
  switch (e) {
    case "bottom-end":
      return "bottom-start";
    case "bottom-start":
      return "bottom-end";
    case "top-end":
      return "top-start";
    case "top-start":
      return "top-end";
    default:
      return e;
  }
}
function wv(e) {
  return typeof e == "function" ? e() : e;
}
function wA(e) {
  return e.nodeType !== void 0;
}
const CA = () => dt({ root: ["root"] }, fw(yA)),
  RA = {},
  EA = S.forwardRef(function (t, n) {
    var r;
    const {
        anchorEl: o,
        children: i,
        direction: a,
        disablePortal: l,
        modifiers: s,
        open: u,
        placement: c,
        popperOptions: d,
        popperRef: f,
        slotProps: p = {},
        slots: h = {},
        TransitionProps: g,
      } = t,
      x = xe(t, bA),
      v = S.useRef(null),
      m = en(v, n),
      y = S.useRef(null),
      b = en(y, f),
      C = S.useRef(b);
    wo(() => {
      C.current = b;
    }, [b]),
      S.useImperativeHandle(f, () => y.current, []);
    const R = SA(c, a),
      [E, D] = S.useState(R),
      [A, I] = S.useState(wv(o));
    S.useEffect(() => {
      y.current && y.current.forceUpdate();
    }),
      S.useEffect(() => {
        o && I(wv(o));
      }, [o]),
      wo(() => {
        if (!A || !u) return;
        const z = (U) => {
          D(U.placement);
        };
        let q = [
          { name: "preventOverflow", options: { altBoundary: l } },
          { name: "flip", options: { altBoundary: l } },
          {
            name: "onUpdate",
            enabled: !0,
            phase: "afterWrite",
            fn: ({ state: U }) => {
              z(U);
            },
          },
        ];
        s != null && (q = q.concat(s)),
          d && d.modifiers != null && (q = q.concat(d.modifiers));
        const re = hA(A, v.current, T({ placement: R }, d, { modifiers: q }));
        return (
          C.current(re),
          () => {
            re.destroy(), C.current(null);
          }
        );
      }, [A, l, s, u, d, R]);
    const M = { placement: E };
    g !== null && (M.TransitionProps = g);
    const J = CA(),
      V = (r = h.root) != null ? r : "div",
      j = Kl({
        elementType: V,
        externalSlotProps: p.root,
        externalForwardedProps: x,
        additionalProps: { role: "tooltip", ref: m },
        ownerState: t,
        className: J.root,
      });
    return w.jsx(V, T({}, j, { children: typeof i == "function" ? i(M) : i }));
  }),
  TA = S.forwardRef(function (t, n) {
    const {
        anchorEl: r,
        children: o,
        container: i,
        direction: a = "ltr",
        disablePortal: l = !1,
        keepMounted: s = !1,
        modifiers: u,
        open: c,
        placement: d = "bottom",
        popperOptions: f = RA,
        popperRef: p,
        style: h,
        transition: g = !1,
        slotProps: x = {},
        slots: v = {},
      } = t,
      m = xe(t, xA),
      [y, b] = S.useState(!0),
      C = () => {
        b(!1);
      },
      R = () => {
        b(!0);
      };
    if (!s && !c && (!g || y)) return null;
    let E;
    if (i) E = i;
    else if (r) {
      const I = wv(r);
      E = I && wA(I) ? Jt(I).body : Jt(null).body;
    }
    const D = !c && s && (!g || y) ? "none" : void 0,
      A = g ? { in: c, onEnter: C, onExited: R } : void 0;
    return w.jsx(ww, {
      disablePortal: l,
      container: E,
      children: w.jsx(
        EA,
        T(
          {
            anchorEl: r,
            direction: a,
            disablePortal: l,
            modifiers: u,
            ref: n,
            open: g ? !y : c,
            placement: d,
            popperOptions: f,
            popperRef: p,
            slotProps: x,
            slots: v,
          },
          m,
          {
            style: T({ position: "fixed", top: 0, left: 0, display: D }, h),
            TransitionProps: A,
            children: o,
          }
        )
      ),
    });
  }),
  _A = TA;
function PA(e) {
  const t = Jt(e);
  return t.body === e
    ? na(e).innerWidth > t.documentElement.clientWidth
    : e.scrollHeight > e.clientHeight;
}
function bl(e, t) {
  t ? e.setAttribute("aria-hidden", "true") : e.removeAttribute("aria-hidden");
}
function T0(e) {
  return parseInt(na(e).getComputedStyle(e).paddingRight, 10) || 0;
}
function kA(e) {
  const n =
      [
        "TEMPLATE",
        "SCRIPT",
        "STYLE",
        "LINK",
        "MAP",
        "META",
        "NOSCRIPT",
        "PICTURE",
        "COL",
        "COLGROUP",
        "PARAM",
        "SLOT",
        "SOURCE",
        "TRACK",
      ].indexOf(e.tagName) !== -1,
    r = e.tagName === "INPUT" && e.getAttribute("type") === "hidden";
  return n || r;
}
function _0(e, t, n, r, o) {
  const i = [t, n, ...r];
  [].forEach.call(e.children, (a) => {
    const l = i.indexOf(a) === -1,
      s = !kA(a);
    l && s && bl(a, o);
  });
}
function zf(e, t) {
  let n = -1;
  return e.some((r, o) => (t(r) ? ((n = o), !0) : !1)), n;
}
function DA(e, t) {
  const n = [],
    r = e.container;
  if (!t.disableScrollLock) {
    if (PA(r)) {
      const a = MS(Jt(r));
      n.push({ value: r.style.paddingRight, property: "padding-right", el: r }),
        (r.style.paddingRight = `${T0(r) + a}px`);
      const l = Jt(r).querySelectorAll(".mui-fixed");
      [].forEach.call(l, (s) => {
        n.push({
          value: s.style.paddingRight,
          property: "padding-right",
          el: s,
        }),
          (s.style.paddingRight = `${T0(s) + a}px`);
      });
    }
    let i;
    if (r.parentNode instanceof DocumentFragment) i = Jt(r).body;
    else {
      const a = r.parentElement,
        l = na(r);
      i =
        (a == null ? void 0 : a.nodeName) === "HTML" &&
        l.getComputedStyle(a).overflowY === "scroll"
          ? a
          : r;
    }
    n.push(
      { value: i.style.overflow, property: "overflow", el: i },
      { value: i.style.overflowX, property: "overflow-x", el: i },
      { value: i.style.overflowY, property: "overflow-y", el: i }
    ),
      (i.style.overflow = "hidden");
  }
  return () => {
    n.forEach(({ value: i, el: a, property: l }) => {
      i ? a.style.setProperty(l, i) : a.style.removeProperty(l);
    });
  };
}
function IA(e) {
  const t = [];
  return (
    [].forEach.call(e.children, (n) => {
      n.getAttribute("aria-hidden") === "true" && t.push(n);
    }),
    t
  );
}
class AA {
  constructor() {
    (this.containers = void 0),
      (this.modals = void 0),
      (this.modals = []),
      (this.containers = []);
  }
  add(t, n) {
    let r = this.modals.indexOf(t);
    if (r !== -1) return r;
    (r = this.modals.length),
      this.modals.push(t),
      t.modalRef && bl(t.modalRef, !1);
    const o = IA(n);
    _0(n, t.mount, t.modalRef, o, !0);
    const i = zf(this.containers, (a) => a.container === n);
    return i !== -1
      ? (this.containers[i].modals.push(t), r)
      : (this.containers.push({
          modals: [t],
          container: n,
          restore: null,
          hiddenSiblings: o,
        }),
        r);
  }
  mount(t, n) {
    const r = zf(this.containers, (i) => i.modals.indexOf(t) !== -1),
      o = this.containers[r];
    o.restore || (o.restore = DA(o, n));
  }
  remove(t, n = !0) {
    const r = this.modals.indexOf(t);
    if (r === -1) return r;
    const o = zf(this.containers, (a) => a.modals.indexOf(t) !== -1),
      i = this.containers[o];
    if (
      (i.modals.splice(i.modals.indexOf(t), 1),
      this.modals.splice(r, 1),
      i.modals.length === 0)
    )
      i.restore && i.restore(),
        t.modalRef && bl(t.modalRef, n),
        _0(i.container, t.mount, t.modalRef, i.hiddenSiblings, !1),
        this.containers.splice(o, 1);
    else {
      const a = i.modals[i.modals.length - 1];
      a.modalRef && bl(a.modalRef, !1);
    }
    return r;
  }
  isTopModal(t) {
    return this.modals.length > 0 && this.modals[this.modals.length - 1] === t;
  }
}
function NA(e) {
  return lt("MuiModal", e);
}
Ke("MuiModal", ["root", "hidden", "backdrop"]);
const OA = [
    "children",
    "closeAfterTransition",
    "container",
    "disableAutoFocus",
    "disableEnforceFocus",
    "disableEscapeKeyDown",
    "disablePortal",
    "disableRestoreFocus",
    "disableScrollLock",
    "hideBackdrop",
    "keepMounted",
    "manager",
    "onBackdropClick",
    "onClose",
    "onKeyDown",
    "open",
    "onTransitionEnter",
    "onTransitionExited",
    "slotProps",
    "slots",
  ],
  MA = (e) => {
    const { open: t, exited: n } = e;
    return dt(
      { root: ["root", !t && n && "hidden"], backdrop: ["backdrop"] },
      fw(NA)
    );
  };
function $A(e) {
  return typeof e == "function" ? e() : e;
}
function LA(e) {
  return e ? e.props.hasOwnProperty("in") : !1;
}
const BA = new AA(),
  FA = S.forwardRef(function (t, n) {
    var r, o;
    const {
        children: i,
        closeAfterTransition: a = !1,
        container: l,
        disableAutoFocus: s = !1,
        disableEnforceFocus: u = !1,
        disableEscapeKeyDown: c = !1,
        disablePortal: d = !1,
        disableRestoreFocus: f = !1,
        disableScrollLock: p = !1,
        hideBackdrop: h = !1,
        keepMounted: g = !1,
        manager: x = BA,
        onBackdropClick: v,
        onClose: m,
        onKeyDown: y,
        open: b,
        onTransitionEnter: C,
        onTransitionExited: R,
        slotProps: E = {},
        slots: D = {},
      } = t,
      A = xe(t, OA),
      I = x,
      [M, J] = S.useState(!b),
      V = S.useRef({}),
      j = S.useRef(null),
      z = S.useRef(null),
      q = en(z, n),
      re = LA(i),
      U = (r = t["aria-hidden"]) != null ? r : !0,
      X = () => Jt(j.current),
      W = () => (
        (V.current.modalRef = z.current),
        (V.current.mountNode = j.current),
        V.current
      ),
      ee = () => {
        I.mount(W(), { disableScrollLock: p }),
          z.current && (z.current.scrollTop = 0);
      },
      k = oo(() => {
        const ge = $A(l) || X().body;
        I.add(W(), ge), z.current && ee();
      }),
      L = S.useCallback(() => I.isTopModal(W()), [I]),
      O = oo((ge) => {
        (j.current = ge),
          !(!ge || !z.current) && (b && L() ? ee() : bl(z.current, U));
      }),
      H = S.useCallback(() => {
        I.remove(W(), U);
      }, [I, U]);
    S.useEffect(
      () => () => {
        H();
      },
      [H]
    ),
      S.useEffect(() => {
        b ? k() : (!re || !a) && H();
      }, [b, H, re, a, k]);
    const Y = T({}, t, {
        closeAfterTransition: a,
        disableAutoFocus: s,
        disableEnforceFocus: u,
        disableEscapeKeyDown: c,
        disablePortal: d,
        disableRestoreFocus: f,
        disableScrollLock: p,
        exited: M,
        hideBackdrop: h,
        keepMounted: g,
      }),
      se = MA(Y),
      ie = () => {
        J(!1), C && C();
      },
      te = () => {
        J(!0), R && R(), a && H();
      },
      Se = (ge) => {
        ge.target === ge.currentTarget &&
          (v && v(ge), m && m(ge, "backdropClick"));
      },
      ye = (ge) => {
        y && y(ge),
          !(ge.key !== "Escape" || !L()) &&
            (c || (ge.stopPropagation(), m && m(ge, "escapeKeyDown")));
      },
      be = {};
    i.props.tabIndex === void 0 && (be.tabIndex = "-1"),
      re &&
        ((be.onEnter = vv(ie, i.props.onEnter)),
        (be.onExited = vv(te, i.props.onExited)));
    const Re = (o = D.root) != null ? o : "div",
      Be = Kl({
        elementType: Re,
        externalSlotProps: E.root,
        externalForwardedProps: A,
        additionalProps: { ref: q, role: "presentation", onKeyDown: ye },
        className: se.root,
        ownerState: Y,
      }),
      Ue = D.backdrop,
      Oe = Kl({
        elementType: Ue,
        externalSlotProps: E.backdrop,
        additionalProps: { "aria-hidden": !0, onClick: Se, open: b },
        className: se.backdrop,
        ownerState: Y,
      });
    return !g && !b && (!re || M)
      ? null
      : w.jsx(ww, {
          ref: O,
          container: l,
          disablePortal: d,
          children: w.jsxs(
            Re,
            T({}, Be, {
              children: [
                !h && Ue ? w.jsx(Ue, T({}, Oe)) : null,
                w.jsx(uI, {
                  disableEnforceFocus: u,
                  disableAutoFocus: s,
                  disableRestoreFocus: f,
                  isEnabled: L,
                  open: b,
                  children: S.cloneElement(i, be),
                }),
              ],
            })
          ),
        });
  }),
  jA = FA;
function Cv(e, t) {
  return (
    (Cv = Object.setPrototypeOf
      ? Object.setPrototypeOf.bind()
      : function (r, o) {
          return (r.__proto__ = o), r;
        }),
    Cv(e, t)
  );
}
function gd(e, t) {
  (e.prototype = Object.create(t.prototype)),
    (e.prototype.constructor = e),
    Cv(e, t);
}
const P0 = { disabled: !1 },
  dc = oe.createContext(null);
var zA = function (t) {
    return t.scrollTop;
  },
  rl = "unmounted",
  Mo = "exited",
  $o = "entering",
  wi = "entered",
  Rv = "exiting",
  Wr = (function (e) {
    gd(t, e);
    function t(r, o) {
      var i;
      i = e.call(this, r, o) || this;
      var a = o,
        l = a && !a.isMounting ? r.enter : r.appear,
        s;
      return (
        (i.appearStatus = null),
        r.in
          ? l
            ? ((s = Mo), (i.appearStatus = $o))
            : (s = wi)
          : r.unmountOnExit || r.mountOnEnter
          ? (s = rl)
          : (s = Mo),
        (i.state = { status: s }),
        (i.nextCallback = null),
        i
      );
    }
    t.getDerivedStateFromProps = function (o, i) {
      var a = o.in;
      return a && i.status === rl ? { status: Mo } : null;
    };
    var n = t.prototype;
    return (
      (n.componentDidMount = function () {
        this.updateStatus(!0, this.appearStatus);
      }),
      (n.componentDidUpdate = function (o) {
        var i = null;
        if (o !== this.props) {
          var a = this.state.status;
          this.props.in
            ? a !== $o && a !== wi && (i = $o)
            : (a === $o || a === wi) && (i = Rv);
        }
        this.updateStatus(!1, i);
      }),
      (n.componentWillUnmount = function () {
        this.cancelNextCallback();
      }),
      (n.getTimeouts = function () {
        var o = this.props.timeout,
          i,
          a,
          l;
        return (
          (i = a = l = o),
          o != null &&
            typeof o != "number" &&
            ((i = o.exit),
            (a = o.enter),
            (l = o.appear !== void 0 ? o.appear : a)),
          { exit: i, enter: a, appear: l }
        );
      }),
      (n.updateStatus = function (o, i) {
        if ((o === void 0 && (o = !1), i !== null))
          if ((this.cancelNextCallback(), i === $o)) {
            if (this.props.unmountOnExit || this.props.mountOnEnter) {
              var a = this.props.nodeRef
                ? this.props.nodeRef.current
                : Mi.findDOMNode(this);
              a && zA(a);
            }
            this.performEnter(o);
          } else this.performExit();
        else
          this.props.unmountOnExit &&
            this.state.status === Mo &&
            this.setState({ status: rl });
      }),
      (n.performEnter = function (o) {
        var i = this,
          a = this.props.enter,
          l = this.context ? this.context.isMounting : o,
          s = this.props.nodeRef ? [l] : [Mi.findDOMNode(this), l],
          u = s[0],
          c = s[1],
          d = this.getTimeouts(),
          f = l ? d.appear : d.enter;
        if ((!o && !a) || P0.disabled) {
          this.safeSetState({ status: wi }, function () {
            i.props.onEntered(u);
          });
          return;
        }
        this.props.onEnter(u, c),
          this.safeSetState({ status: $o }, function () {
            i.props.onEntering(u, c),
              i.onTransitionEnd(f, function () {
                i.safeSetState({ status: wi }, function () {
                  i.props.onEntered(u, c);
                });
              });
          });
      }),
      (n.performExit = function () {
        var o = this,
          i = this.props.exit,
          a = this.getTimeouts(),
          l = this.props.nodeRef ? void 0 : Mi.findDOMNode(this);
        if (!i || P0.disabled) {
          this.safeSetState({ status: Mo }, function () {
            o.props.onExited(l);
          });
          return;
        }
        this.props.onExit(l),
          this.safeSetState({ status: Rv }, function () {
            o.props.onExiting(l),
              o.onTransitionEnd(a.exit, function () {
                o.safeSetState({ status: Mo }, function () {
                  o.props.onExited(l);
                });
              });
          });
      }),
      (n.cancelNextCallback = function () {
        this.nextCallback !== null &&
          (this.nextCallback.cancel(), (this.nextCallback = null));
      }),
      (n.safeSetState = function (o, i) {
        (i = this.setNextCallback(i)), this.setState(o, i);
      }),
      (n.setNextCallback = function (o) {
        var i = this,
          a = !0;
        return (
          (this.nextCallback = function (l) {
            a && ((a = !1), (i.nextCallback = null), o(l));
          }),
          (this.nextCallback.cancel = function () {
            a = !1;
          }),
          this.nextCallback
        );
      }),
      (n.onTransitionEnd = function (o, i) {
        this.setNextCallback(i);
        var a = this.props.nodeRef
            ? this.props.nodeRef.current
            : Mi.findDOMNode(this),
          l = o == null && !this.props.addEndListener;
        if (!a || l) {
          setTimeout(this.nextCallback, 0);
          return;
        }
        if (this.props.addEndListener) {
          var s = this.props.nodeRef
              ? [this.nextCallback]
              : [a, this.nextCallback],
            u = s[0],
            c = s[1];
          this.props.addEndListener(u, c);
        }
        o != null && setTimeout(this.nextCallback, o);
      }),
      (n.render = function () {
        var o = this.state.status;
        if (o === rl) return null;
        var i = this.props,
          a = i.children;
        i.in,
          i.mountOnEnter,
          i.unmountOnExit,
          i.appear,
          i.enter,
          i.exit,
          i.timeout,
          i.addEndListener,
          i.onEnter,
          i.onEntering,
          i.onEntered,
          i.onExit,
          i.onExiting,
          i.onExited,
          i.nodeRef;
        var l = xe(i, [
          "children",
          "in",
          "mountOnEnter",
          "unmountOnExit",
          "appear",
          "enter",
          "exit",
          "timeout",
          "addEndListener",
          "onEnter",
          "onEntering",
          "onEntered",
          "onExit",
          "onExiting",
          "onExited",
          "nodeRef",
        ]);
        return oe.createElement(
          dc.Provider,
          { value: null },
          typeof a == "function"
            ? a(o, l)
            : oe.cloneElement(oe.Children.only(a), l)
        );
      }),
      t
    );
  })(oe.Component);
Wr.contextType = dc;
Wr.propTypes = {};
function yi() {}
Wr.defaultProps = {
  in: !1,
  mountOnEnter: !1,
  unmountOnExit: !1,
  appear: !1,
  enter: !0,
  exit: !0,
  onEnter: yi,
  onEntering: yi,
  onEntered: yi,
  onExit: yi,
  onExiting: yi,
  onExited: yi,
};
Wr.UNMOUNTED = rl;
Wr.EXITED = Mo;
Wr.ENTERING = $o;
Wr.ENTERED = wi;
Wr.EXITING = Rv;
const Cw = Wr;
function UA(e) {
  if (e === void 0)
    throw new ReferenceError(
      "this hasn't been initialised - super() hasn't been called"
    );
  return e;
}
function bm(e, t) {
  var n = function (i) {
      return t && S.isValidElement(i) ? t(i) : i;
    },
    r = Object.create(null);
  return (
    e &&
      S.Children.map(e, function (o) {
        return o;
      }).forEach(function (o) {
        r[o.key] = n(o);
      }),
    r
  );
}
function VA(e, t) {
  (e = e || {}), (t = t || {});
  function n(c) {
    return c in t ? t[c] : e[c];
  }
  var r = Object.create(null),
    o = [];
  for (var i in e) i in t ? o.length && ((r[i] = o), (o = [])) : o.push(i);
  var a,
    l = {};
  for (var s in t) {
    if (r[s])
      for (a = 0; a < r[s].length; a++) {
        var u = r[s][a];
        l[r[s][a]] = n(u);
      }
    l[s] = n(s);
  }
  for (a = 0; a < o.length; a++) l[o[a]] = n(o[a]);
  return l;
}
function Wo(e, t, n) {
  return n[t] != null ? n[t] : e.props[t];
}
function WA(e, t) {
  return bm(e.children, function (n) {
    return S.cloneElement(n, {
      onExited: t.bind(null, n),
      in: !0,
      appear: Wo(n, "appear", e),
      enter: Wo(n, "enter", e),
      exit: Wo(n, "exit", e),
    });
  });
}
function HA(e, t, n) {
  var r = bm(e.children),
    o = VA(t, r);
  return (
    Object.keys(o).forEach(function (i) {
      var a = o[i];
      if (S.isValidElement(a)) {
        var l = i in t,
          s = i in r,
          u = t[i],
          c = S.isValidElement(u) && !u.props.in;
        s && (!l || c)
          ? (o[i] = S.cloneElement(a, {
              onExited: n.bind(null, a),
              in: !0,
              exit: Wo(a, "exit", e),
              enter: Wo(a, "enter", e),
            }))
          : !s && l && !c
          ? (o[i] = S.cloneElement(a, { in: !1 }))
          : s &&
            l &&
            S.isValidElement(u) &&
            (o[i] = S.cloneElement(a, {
              onExited: n.bind(null, a),
              in: u.props.in,
              exit: Wo(a, "exit", e),
              enter: Wo(a, "enter", e),
            }));
      }
    }),
    o
  );
}
var GA =
    Object.values ||
    function (e) {
      return Object.keys(e).map(function (t) {
        return e[t];
      });
    },
  KA = {
    component: "div",
    childFactory: function (t) {
      return t;
    },
  },
  xm = (function (e) {
    gd(t, e);
    function t(r, o) {
      var i;
      i = e.call(this, r, o) || this;
      var a = i.handleExited.bind(UA(i));
      return (
        (i.state = {
          contextValue: { isMounting: !0 },
          handleExited: a,
          firstRender: !0,
        }),
        i
      );
    }
    var n = t.prototype;
    return (
      (n.componentDidMount = function () {
        (this.mounted = !0),
          this.setState({ contextValue: { isMounting: !1 } });
      }),
      (n.componentWillUnmount = function () {
        this.mounted = !1;
      }),
      (t.getDerivedStateFromProps = function (o, i) {
        var a = i.children,
          l = i.handleExited,
          s = i.firstRender;
        return { children: s ? WA(o, l) : HA(o, a, l), firstRender: !1 };
      }),
      (n.handleExited = function (o, i) {
        var a = bm(this.props.children);
        o.key in a ||
          (o.props.onExited && o.props.onExited(i),
          this.mounted &&
            this.setState(function (l) {
              var s = T({}, l.children);
              return delete s[o.key], { children: s };
            }));
      }),
      (n.render = function () {
        var o = this.props,
          i = o.component,
          a = o.childFactory,
          l = xe(o, ["component", "childFactory"]),
          s = this.state.contextValue,
          u = GA(this.state.children).map(a);
        return (
          delete l.appear,
          delete l.enter,
          delete l.exit,
          i === null
            ? oe.createElement(dc.Provider, { value: s }, u)
            : oe.createElement(
                dc.Provider,
                { value: s },
                oe.createElement(i, l, u)
              )
        );
      }),
      t
    );
  })(oe.Component);
xm.propTypes = {};
xm.defaultProps = KA;
const qA = xm,
  Rw = (e) => e.scrollTop;
function fc(e, t) {
  var n, r;
  const { timeout: o, easing: i, style: a = {} } = e;
  return {
    duration:
      (n = a.transitionDuration) != null
        ? n
        : typeof o == "number"
        ? o
        : o[t.mode] || 0,
    easing:
      (r = a.transitionTimingFunction) != null
        ? r
        : typeof i == "object"
        ? i[t.mode]
        : i,
    delay: a.transitionDelay,
  };
}
const YA = [
    "addEndListener",
    "appear",
    "children",
    "easing",
    "in",
    "onEnter",
    "onEntered",
    "onEntering",
    "onExit",
    "onExited",
    "onExiting",
    "style",
    "timeout",
    "TransitionComponent",
  ],
  XA = { entering: { opacity: 1 }, entered: { opacity: 1 } },
  QA = S.forwardRef(function (t, n) {
    const r = fs(),
      o = {
        enter: r.transitions.duration.enteringScreen,
        exit: r.transitions.duration.leavingScreen,
      },
      {
        addEndListener: i,
        appear: a = !0,
        children: l,
        easing: s,
        in: u,
        onEnter: c,
        onEntered: d,
        onEntering: f,
        onExit: p,
        onExited: h,
        onExiting: g,
        style: x,
        timeout: v = o,
        TransitionComponent: m = Cw,
      } = t,
      y = xe(t, YA),
      b = S.useRef(null),
      C = en(b, l.ref, n),
      R = (j) => (z) => {
        if (j) {
          const q = b.current;
          z === void 0 ? j(q) : j(q, z);
        }
      },
      E = R(f),
      D = R((j, z) => {
        Rw(j);
        const q = fc({ style: x, timeout: v, easing: s }, { mode: "enter" });
        (j.style.webkitTransition = r.transitions.create("opacity", q)),
          (j.style.transition = r.transitions.create("opacity", q)),
          c && c(j, z);
      }),
      A = R(d),
      I = R(g),
      M = R((j) => {
        const z = fc({ style: x, timeout: v, easing: s }, { mode: "exit" });
        (j.style.webkitTransition = r.transitions.create("opacity", z)),
          (j.style.transition = r.transitions.create("opacity", z)),
          p && p(j);
      }),
      J = R(h),
      V = (j) => {
        i && i(b.current, j);
      };
    return w.jsx(
      m,
      T(
        {
          appear: a,
          in: u,
          nodeRef: b,
          onEnter: D,
          onEntered: A,
          onEntering: E,
          onExit: M,
          onExited: J,
          onExiting: I,
          addEndListener: V,
          timeout: v,
        },
        y,
        {
          children: (j, z) =>
            S.cloneElement(
              l,
              T(
                {
                  style: T(
                    {
                      opacity: 0,
                      visibility: j === "exited" && !u ? "hidden" : void 0,
                    },
                    XA[j],
                    x,
                    l.props.style
                  ),
                  ref: C,
                },
                z
              )
            ),
        }
      )
    );
  }),
  Ew = QA;
function ZA(e) {
  return lt("MuiBackdrop", e);
}
Ke("MuiBackdrop", ["root", "invisible"]);
const JA = [
    "children",
    "className",
    "component",
    "components",
    "componentsProps",
    "invisible",
    "open",
    "slotProps",
    "slots",
    "TransitionComponent",
    "transitionDuration",
  ],
  eN = (e) => {
    const { classes: t, invisible: n } = e;
    return dt({ root: ["root", n && "invisible"] }, ZA, t);
  },
  tN = Ee("div", {
    name: "MuiBackdrop",
    slot: "Root",
    overridesResolver: (e, t) => {
      const { ownerState: n } = e;
      return [t.root, n.invisible && t.invisible];
    },
  })(({ ownerState: e }) =>
    T(
      {
        position: "fixed",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        right: 0,
        bottom: 0,
        top: 0,
        left: 0,
        backgroundColor: "rgba(0, 0, 0, 0.5)",
        WebkitTapHighlightColor: "transparent",
      },
      e.invisible && { backgroundColor: "transparent" }
    )
  ),
  nN = S.forwardRef(function (t, n) {
    var r, o, i;
    const a = ft({ props: t, name: "MuiBackdrop" }),
      {
        children: l,
        className: s,
        component: u = "div",
        components: c = {},
        componentsProps: d = {},
        invisible: f = !1,
        open: p,
        slotProps: h = {},
        slots: g = {},
        TransitionComponent: x = Ew,
        transitionDuration: v,
      } = a,
      m = xe(a, JA),
      y = T({}, a, { component: u, invisible: f }),
      b = eN(y),
      C = (r = h.root) != null ? r : d.root;
    return w.jsx(
      x,
      T({ in: p, timeout: v }, m, {
        children: w.jsx(
          tN,
          T({ "aria-hidden": !0 }, C, {
            as: (o = (i = g.root) != null ? i : c.Root) != null ? o : u,
            className: we(b.root, s, C == null ? void 0 : C.className),
            ownerState: T({}, y, C == null ? void 0 : C.ownerState),
            classes: b,
            ref: n,
            children: l,
          })
        ),
      })
    );
  }),
  Tw = nN,
  rN = [
    "BackdropComponent",
    "BackdropProps",
    "classes",
    "className",
    "closeAfterTransition",
    "children",
    "container",
    "component",
    "components",
    "componentsProps",
    "disableAutoFocus",
    "disableEnforceFocus",
    "disableEscapeKeyDown",
    "disablePortal",
    "disableRestoreFocus",
    "disableScrollLock",
    "hideBackdrop",
    "keepMounted",
    "onBackdropClick",
    "onClose",
    "open",
    "slotProps",
    "slots",
    "theme",
  ],
  oN = Ee("div", {
    name: "MuiModal",
    slot: "Root",
    overridesResolver: (e, t) => {
      const { ownerState: n } = e;
      return [t.root, !n.open && n.exited && t.hidden];
    },
  })(({ theme: e, ownerState: t }) =>
    T(
      {
        position: "fixed",
        zIndex: (e.vars || e).zIndex.modal,
        right: 0,
        bottom: 0,
        top: 0,
        left: 0,
      },
      !t.open && t.exited && { visibility: "hidden" }
    )
  ),
  iN = Ee(Tw, {
    name: "MuiModal",
    slot: "Backdrop",
    overridesResolver: (e, t) => t.backdrop,
  })({ zIndex: -1 }),
  aN = S.forwardRef(function (t, n) {
    var r, o, i, a, l, s;
    const u = ft({ name: "MuiModal", props: t }),
      {
        BackdropComponent: c = iN,
        BackdropProps: d,
        classes: f,
        className: p,
        closeAfterTransition: h = !1,
        children: g,
        container: x,
        component: v,
        components: m = {},
        componentsProps: y = {},
        disableAutoFocus: b = !1,
        disableEnforceFocus: C = !1,
        disableEscapeKeyDown: R = !1,
        disablePortal: E = !1,
        disableRestoreFocus: D = !1,
        disableScrollLock: A = !1,
        hideBackdrop: I = !1,
        keepMounted: M = !1,
        onBackdropClick: J,
        onClose: V,
        open: j,
        slotProps: z,
        slots: q,
        theme: re,
      } = u,
      U = xe(u, rN),
      [X, W] = S.useState(!0),
      ee = {
        container: x,
        closeAfterTransition: h,
        disableAutoFocus: b,
        disableEnforceFocus: C,
        disableEscapeKeyDown: R,
        disablePortal: E,
        disableRestoreFocus: D,
        disableScrollLock: A,
        hideBackdrop: I,
        keepMounted: M,
        onBackdropClick: J,
        onClose: V,
        open: j,
      },
      k = T({}, u, ee, { exited: X }),
      L =
        (r = (o = q == null ? void 0 : q.root) != null ? o : m.Root) != null
          ? r
          : oN,
      O =
        (i = (a = q == null ? void 0 : q.backdrop) != null ? a : m.Backdrop) !=
        null
          ? i
          : c,
      H = (l = z == null ? void 0 : z.root) != null ? l : y.root,
      Y = (s = z == null ? void 0 : z.backdrop) != null ? s : y.backdrop;
    return w.jsx(
      jA,
      T(
        {
          slots: { root: L, backdrop: O },
          slotProps: {
            root: () =>
              T({}, bv(H, k), !dw(L) && { as: v, theme: re }, {
                className: we(
                  p,
                  H == null ? void 0 : H.className,
                  f == null ? void 0 : f.root,
                  !k.open && k.exited && (f == null ? void 0 : f.hidden)
                ),
              }),
            backdrop: () =>
              T({}, d, bv(Y, k), {
                className: we(
                  Y == null ? void 0 : Y.className,
                  f == null ? void 0 : f.backdrop
                ),
              }),
          },
          onTransitionEnter: () => W(!1),
          onTransitionExited: () => W(!0),
          ref: n,
        },
        U,
        ee,
        { children: g }
      )
    );
  }),
  _w = aN;
function lN(e) {
  return lt("MuiPaper", e);
}
Ke("MuiPaper", [
  "root",
  "rounded",
  "outlined",
  "elevation",
  "elevation0",
  "elevation1",
  "elevation2",
  "elevation3",
  "elevation4",
  "elevation5",
  "elevation6",
  "elevation7",
  "elevation8",
  "elevation9",
  "elevation10",
  "elevation11",
  "elevation12",
  "elevation13",
  "elevation14",
  "elevation15",
  "elevation16",
  "elevation17",
  "elevation18",
  "elevation19",
  "elevation20",
  "elevation21",
  "elevation22",
  "elevation23",
  "elevation24",
]);
const sN = ["className", "component", "elevation", "square", "variant"],
  uN = (e) => {
    const { square: t, elevation: n, variant: r, classes: o } = e,
      i = {
        root: [
          "root",
          r,
          !t && "rounded",
          r === "elevation" && `elevation${n}`,
        ],
      };
    return dt(i, lN, o);
  },
  cN = Ee("div", {
    name: "MuiPaper",
    slot: "Root",
    overridesResolver: (e, t) => {
      const { ownerState: n } = e;
      return [
        t.root,
        t[n.variant],
        !n.square && t.rounded,
        n.variant === "elevation" && t[`elevation${n.elevation}`],
      ];
    },
  })(({ theme: e, ownerState: t }) => {
    var n;
    return T(
      {
        backgroundColor: (e.vars || e).palette.background.paper,
        color: (e.vars || e).palette.text.primary,
        transition: e.transitions.create("box-shadow"),
      },
      !t.square && { borderRadius: e.shape.borderRadius },
      t.variant === "outlined" && {
        border: `1px solid ${(e.vars || e).palette.divider}`,
      },
      t.variant === "elevation" &&
        T(
          { boxShadow: (e.vars || e).shadows[t.elevation] },
          !e.vars &&
            e.palette.mode === "dark" && {
              backgroundImage: `linear-gradient(${Gt(
                "#fff",
                h0(t.elevation)
              )}, ${Gt("#fff", h0(t.elevation))})`,
            },
          e.vars && {
            backgroundImage:
              (n = e.vars.overlays) == null ? void 0 : n[t.elevation],
          }
        )
    );
  }),
  dN = S.forwardRef(function (t, n) {
    const r = ft({ props: t, name: "MuiPaper" }),
      {
        className: o,
        component: i = "div",
        elevation: a = 1,
        square: l = !1,
        variant: s = "elevation",
      } = r,
      u = xe(r, sN),
      c = T({}, r, { component: i, elevation: a, square: l, variant: s }),
      d = uN(c);
    return w.jsx(
      cN,
      T({ as: i, ownerState: c, className: we(d.root, o), ref: n }, u)
    );
  }),
  hs = dN;
function fN(e) {
  return lt("MuiDialog", e);
}
const pN = Ke("MuiDialog", [
    "root",
    "scrollPaper",
    "scrollBody",
    "container",
    "paper",
    "paperScrollPaper",
    "paperScrollBody",
    "paperWidthFalse",
    "paperWidthXs",
    "paperWidthSm",
    "paperWidthMd",
    "paperWidthLg",
    "paperWidthXl",
    "paperFullWidth",
    "paperFullScreen",
  ]),
  Uf = pN,
  vN = S.createContext({}),
  Pw = vN,
  hN = [
    "aria-describedby",
    "aria-labelledby",
    "BackdropComponent",
    "BackdropProps",
    "children",
    "className",
    "disableEscapeKeyDown",
    "fullScreen",
    "fullWidth",
    "maxWidth",
    "onBackdropClick",
    "onClose",
    "open",
    "PaperComponent",
    "PaperProps",
    "scroll",
    "TransitionComponent",
    "transitionDuration",
    "TransitionProps",
  ],
  mN = Ee(Tw, {
    name: "MuiDialog",
    slot: "Backdrop",
    overrides: (e, t) => t.backdrop,
  })({ zIndex: -1 }),
  gN = (e) => {
    const {
        classes: t,
        scroll: n,
        maxWidth: r,
        fullWidth: o,
        fullScreen: i,
      } = e,
      a = {
        root: ["root"],
        container: ["container", `scroll${pe(n)}`],
        paper: [
          "paper",
          `paperScroll${pe(n)}`,
          `paperWidth${pe(String(r))}`,
          o && "paperFullWidth",
          i && "paperFullScreen",
        ],
      };
    return dt(a, fN, t);
  },
  yN = Ee(_w, {
    name: "MuiDialog",
    slot: "Root",
    overridesResolver: (e, t) => t.root,
  })({ "@media print": { position: "absolute !important" } }),
  bN = Ee("div", {
    name: "MuiDialog",
    slot: "Container",
    overridesResolver: (e, t) => {
      const { ownerState: n } = e;
      return [t.container, t[`scroll${pe(n.scroll)}`]];
    },
  })(({ ownerState: e }) =>
    T(
      { height: "100%", "@media print": { height: "auto" }, outline: 0 },
      e.scroll === "paper" && {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      },
      e.scroll === "body" && {
        overflowY: "auto",
        overflowX: "hidden",
        textAlign: "center",
        "&:after": {
          content: '""',
          display: "inline-block",
          verticalAlign: "middle",
          height: "100%",
          width: "0",
        },
      }
    )
  ),
  xN = Ee(hs, {
    name: "MuiDialog",
    slot: "Paper",
    overridesResolver: (e, t) => {
      const { ownerState: n } = e;
      return [
        t.paper,
        t[`scrollPaper${pe(n.scroll)}`],
        t[`paperWidth${pe(String(n.maxWidth))}`],
        n.fullWidth && t.paperFullWidth,
        n.fullScreen && t.paperFullScreen,
      ];
    },
  })(({ theme: e, ownerState: t }) =>
    T(
      {
        margin: 32,
        position: "relative",
        overflowY: "auto",
        "@media print": { overflowY: "visible", boxShadow: "none" },
      },
      t.scroll === "paper" && {
        display: "flex",
        flexDirection: "column",
        maxHeight: "calc(100% - 64px)",
      },
      t.scroll === "body" && {
        display: "inline-block",
        verticalAlign: "middle",
        textAlign: "left",
      },
      !t.maxWidth && { maxWidth: "calc(100% - 64px)" },
      t.maxWidth === "xs" && {
        maxWidth:
          e.breakpoints.unit === "px"
            ? Math.max(e.breakpoints.values.xs, 444)
            : `${e.breakpoints.values.xs}${e.breakpoints.unit}`,
        [`&.${Uf.paperScrollBody}`]: {
          [e.breakpoints.down(Math.max(e.breakpoints.values.xs, 444) + 32 * 2)]:
            { maxWidth: "calc(100% - 64px)" },
        },
      },
      t.maxWidth &&
        t.maxWidth !== "xs" && {
          maxWidth: `${e.breakpoints.values[t.maxWidth]}${e.breakpoints.unit}`,
          [`&.${Uf.paperScrollBody}`]: {
            [e.breakpoints.down(e.breakpoints.values[t.maxWidth] + 32 * 2)]: {
              maxWidth: "calc(100% - 64px)",
            },
          },
        },
      t.fullWidth && { width: "calc(100% - 64px)" },
      t.fullScreen && {
        margin: 0,
        width: "100%",
        maxWidth: "100%",
        height: "100%",
        maxHeight: "none",
        borderRadius: 0,
        [`&.${Uf.paperScrollBody}`]: { margin: 0, maxWidth: "100%" },
      }
    )
  ),
  SN = S.forwardRef(function (t, n) {
    const r = ft({ props: t, name: "MuiDialog" }),
      o = fs(),
      i = {
        enter: o.transitions.duration.enteringScreen,
        exit: o.transitions.duration.leavingScreen,
      },
      {
        "aria-describedby": a,
        "aria-labelledby": l,
        BackdropComponent: s,
        BackdropProps: u,
        children: c,
        className: d,
        disableEscapeKeyDown: f = !1,
        fullScreen: p = !1,
        fullWidth: h = !1,
        maxWidth: g = "sm",
        onBackdropClick: x,
        onClose: v,
        open: m,
        PaperComponent: y = hs,
        PaperProps: b = {},
        scroll: C = "paper",
        TransitionComponent: R = Ew,
        transitionDuration: E = i,
        TransitionProps: D,
      } = r,
      A = xe(r, hN),
      I = T({}, r, {
        disableEscapeKeyDown: f,
        fullScreen: p,
        fullWidth: h,
        maxWidth: g,
        scroll: C,
      }),
      M = gN(I),
      J = S.useRef(),
      V = (re) => {
        J.current = re.target === re.currentTarget;
      },
      j = (re) => {
        J.current &&
          ((J.current = null), x && x(re), v && v(re, "backdropClick"));
      },
      z = Wh(l),
      q = S.useMemo(() => ({ titleId: z }), [z]);
    return w.jsx(
      yN,
      T(
        {
          className: we(M.root, d),
          closeAfterTransition: !0,
          components: { Backdrop: mN },
          componentsProps: { backdrop: T({ transitionDuration: E, as: s }, u) },
          disableEscapeKeyDown: f,
          onClose: v,
          open: m,
          ref: n,
          onClick: j,
          ownerState: I,
        },
        A,
        {
          children: w.jsx(
            R,
            T({ appear: !0, in: m, timeout: E, role: "presentation" }, D, {
              children: w.jsx(bN, {
                className: we(M.container),
                onMouseDown: V,
                ownerState: I,
                children: w.jsx(
                  xN,
                  T(
                    {
                      as: y,
                      elevation: 24,
                      role: "dialog",
                      "aria-describedby": a,
                      "aria-labelledby": z,
                    },
                    b,
                    {
                      className: we(M.paper, b.className),
                      ownerState: I,
                      children: w.jsx(Pw.Provider, { value: q, children: c }),
                    }
                  )
                ),
              }),
            })
          ),
        }
      )
    );
  }),
  kw = SN;
function wN(e) {
  return lt("MuiTypography", e);
}
Ke("MuiTypography", [
  "root",
  "h1",
  "h2",
  "h3",
  "h4",
  "h5",
  "h6",
  "subtitle1",
  "subtitle2",
  "body1",
  "body2",
  "inherit",
  "button",
  "caption",
  "overline",
  "alignLeft",
  "alignRight",
  "alignCenter",
  "alignJustify",
  "noWrap",
  "gutterBottom",
  "paragraph",
]);
const CN = [
    "align",
    "className",
    "component",
    "gutterBottom",
    "noWrap",
    "paragraph",
    "variant",
    "variantMapping",
  ],
  RN = (e) => {
    const {
        align: t,
        gutterBottom: n,
        noWrap: r,
        paragraph: o,
        variant: i,
        classes: a,
      } = e,
      l = {
        root: [
          "root",
          i,
          e.align !== "inherit" && `align${pe(t)}`,
          n && "gutterBottom",
          r && "noWrap",
          o && "paragraph",
        ],
      };
    return dt(l, wN, a);
  },
  EN = Ee("span", {
    name: "MuiTypography",
    slot: "Root",
    overridesResolver: (e, t) => {
      const { ownerState: n } = e;
      return [
        t.root,
        n.variant && t[n.variant],
        n.align !== "inherit" && t[`align${pe(n.align)}`],
        n.noWrap && t.noWrap,
        n.gutterBottom && t.gutterBottom,
        n.paragraph && t.paragraph,
      ];
    },
  })(({ theme: e, ownerState: t }) =>
    T(
      { margin: 0 },
      t.variant && e.typography[t.variant],
      t.align !== "inherit" && { textAlign: t.align },
      t.noWrap && {
        overflow: "hidden",
        textOverflow: "ellipsis",
        whiteSpace: "nowrap",
      },
      t.gutterBottom && { marginBottom: "0.35em" },
      t.paragraph && { marginBottom: 16 }
    )
  ),
  k0 = {
    h1: "h1",
    h2: "h2",
    h3: "h3",
    h4: "h4",
    h5: "h5",
    h6: "h6",
    subtitle1: "h6",
    subtitle2: "h6",
    body1: "p",
    body2: "p",
    inherit: "p",
  },
  TN = {
    primary: "primary.main",
    textPrimary: "text.primary",
    secondary: "secondary.main",
    textSecondary: "text.secondary",
    error: "error.main",
  },
  _N = (e) => TN[e] || e,
  PN = S.forwardRef(function (t, n) {
    const r = ft({ props: t, name: "MuiTypography" }),
      o = _N(r.color),
      i = iw(T({}, r, { color: o })),
      {
        align: a = "inherit",
        className: l,
        component: s,
        gutterBottom: u = !1,
        noWrap: c = !1,
        paragraph: d = !1,
        variant: f = "body1",
        variantMapping: p = k0,
      } = i,
      h = xe(i, CN),
      g = T({}, i, {
        align: a,
        color: o,
        className: l,
        component: s,
        gutterBottom: u,
        noWrap: c,
        paragraph: d,
        variant: f,
        variantMapping: p,
      }),
      x = s || (d ? "p" : p[f] || k0[f]) || "span",
      v = RN(g);
    return w.jsx(
      EN,
      T({ as: x, ref: n, ownerState: g, className: we(v.root, l) }, h)
    );
  }),
  Sm = PN;
function kN(e) {
  return lt("MuiDialogTitle", e);
}
const DN = Ke("MuiDialogTitle", ["root"]),
  IN = DN,
  AN = ["className", "id"],
  NN = (e) => {
    const { classes: t } = e;
    return dt({ root: ["root"] }, kN, t);
  },
  ON = Ee(Sm, {
    name: "MuiDialogTitle",
    slot: "Root",
    overridesResolver: (e, t) => t.root,
  })({ padding: "16px 24px", flex: "0 0 auto" }),
  MN = S.forwardRef(function (t, n) {
    const r = ft({ props: t, name: "MuiDialogTitle" }),
      { className: o, id: i } = r,
      a = xe(r, AN),
      l = r,
      s = NN(l),
      { titleId: u = i } = S.useContext(Pw);
    return w.jsx(
      ON,
      T(
        {
          component: "h2",
          className: we(s.root, o),
          ownerState: l,
          ref: n,
          variant: "h6",
          id: i ?? u,
        },
        a
      )
    );
  }),
  $N = MN;
function LN(e) {
  return lt("MuiDialogContent", e);
}
Ke("MuiDialogContent", ["root", "dividers"]);
const BN = ["className", "dividers"],
  FN = (e) => {
    const { classes: t, dividers: n } = e;
    return dt({ root: ["root", n && "dividers"] }, LN, t);
  },
  jN = Ee("div", {
    name: "MuiDialogContent",
    slot: "Root",
    overridesResolver: (e, t) => {
      const { ownerState: n } = e;
      return [t.root, n.dividers && t.dividers];
    },
  })(({ theme: e, ownerState: t }) =>
    T(
      {
        flex: "1 1 auto",
        WebkitOverflowScrolling: "touch",
        overflowY: "auto",
        padding: "20px 24px",
      },
      t.dividers
        ? {
            padding: "16px 24px",
            borderTop: `1px solid ${(e.vars || e).palette.divider}`,
            borderBottom: `1px solid ${(e.vars || e).palette.divider}`,
          }
        : { [`.${IN.root} + &`]: { paddingTop: 0 } }
    )
  ),
  zN = S.forwardRef(function (t, n) {
    const r = ft({ props: t, name: "MuiDialogContent" }),
      { className: o, dividers: i = !1 } = r,
      a = xe(r, BN),
      l = T({}, r, { dividers: i }),
      s = FN(l);
    return w.jsx(jN, T({ className: we(s.root, o), ownerState: l, ref: n }, a));
  }),
  Dw = zN;
function UN(e) {
  const {
      className: t,
      classes: n,
      pulsate: r = !1,
      rippleX: o,
      rippleY: i,
      rippleSize: a,
      in: l,
      onExited: s,
      timeout: u,
    } = e,
    [c, d] = S.useState(!1),
    f = we(t, n.ripple, n.rippleVisible, r && n.ripplePulsate),
    p = { width: a, height: a, top: -(a / 2) + i, left: -(a / 2) + o },
    h = we(n.child, c && n.childLeaving, r && n.childPulsate);
  return (
    !l && !c && d(!0),
    S.useEffect(() => {
      if (!l && s != null) {
        const g = setTimeout(s, u);
        return () => {
          clearTimeout(g);
        };
      }
    }, [s, l, u]),
    w.jsx("span", {
      className: f,
      style: p,
      children: w.jsx("span", { className: h }),
    })
  );
}
const VN = Ke("MuiTouchRipple", [
    "root",
    "ripple",
    "rippleVisible",
    "ripplePulsate",
    "child",
    "childLeaving",
    "childPulsate",
  ]),
  Bn = VN,
  WN = ["center", "classes", "className"];
let yd = (e) => e,
  D0,
  I0,
  A0,
  N0;
const Ev = 550,
  HN = 80,
  GN = rm(
    D0 ||
      (D0 = yd`
  0% {
    transform: scale(0);
    opacity: 0.1;
  }

  100% {
    transform: scale(1);
    opacity: 0.3;
  }
`)
  ),
  KN = rm(
    I0 ||
      (I0 = yd`
  0% {
    opacity: 1;
  }

  100% {
    opacity: 0;
  }
`)
  ),
  qN = rm(
    A0 ||
      (A0 = yd`
  0% {
    transform: scale(1);
  }

  50% {
    transform: scale(0.92);
  }

  100% {
    transform: scale(1);
  }
`)
  ),
  YN = Ee("span", { name: "MuiTouchRipple", slot: "Root" })({
    overflow: "hidden",
    pointerEvents: "none",
    position: "absolute",
    zIndex: 0,
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    borderRadius: "inherit",
  }),
  XN = Ee(UN, { name: "MuiTouchRipple", slot: "Ripple" })(
    N0 ||
      (N0 = yd`
  opacity: 0;
  position: absolute;

  &.${0} {
    opacity: 0.3;
    transform: scale(1);
    animation-name: ${0};
    animation-duration: ${0}ms;
    animation-timing-function: ${0};
  }

  &.${0} {
    animation-duration: ${0}ms;
  }

  & .${0} {
    opacity: 1;
    display: block;
    width: 100%;
    height: 100%;
    border-radius: 50%;
    background-color: currentColor;
  }

  & .${0} {
    opacity: 0;
    animation-name: ${0};
    animation-duration: ${0}ms;
    animation-timing-function: ${0};
  }

  & .${0} {
    position: absolute;
    /* @noflip */
    left: 0px;
    top: 0;
    animation-name: ${0};
    animation-duration: 2500ms;
    animation-timing-function: ${0};
    animation-iteration-count: infinite;
    animation-delay: 200ms;
  }
`),
    Bn.rippleVisible,
    GN,
    Ev,
    ({ theme: e }) => e.transitions.easing.easeInOut,
    Bn.ripplePulsate,
    ({ theme: e }) => e.transitions.duration.shorter,
    Bn.child,
    Bn.childLeaving,
    KN,
    Ev,
    ({ theme: e }) => e.transitions.easing.easeInOut,
    Bn.childPulsate,
    qN,
    ({ theme: e }) => e.transitions.easing.easeInOut
  ),
  QN = S.forwardRef(function (t, n) {
    const r = ft({ props: t, name: "MuiTouchRipple" }),
      { center: o = !1, classes: i = {}, className: a } = r,
      l = xe(r, WN),
      [s, u] = S.useState([]),
      c = S.useRef(0),
      d = S.useRef(null);
    S.useEffect(() => {
      d.current && (d.current(), (d.current = null));
    }, [s]);
    const f = S.useRef(!1),
      p = S.useRef(null),
      h = S.useRef(null),
      g = S.useRef(null);
    S.useEffect(
      () => () => {
        clearTimeout(p.current);
      },
      []
    );
    const x = S.useCallback(
        (b) => {
          const {
            pulsate: C,
            rippleX: R,
            rippleY: E,
            rippleSize: D,
            cb: A,
          } = b;
          u((I) => [
            ...I,
            w.jsx(
              XN,
              {
                classes: {
                  ripple: we(i.ripple, Bn.ripple),
                  rippleVisible: we(i.rippleVisible, Bn.rippleVisible),
                  ripplePulsate: we(i.ripplePulsate, Bn.ripplePulsate),
                  child: we(i.child, Bn.child),
                  childLeaving: we(i.childLeaving, Bn.childLeaving),
                  childPulsate: we(i.childPulsate, Bn.childPulsate),
                },
                timeout: Ev,
                pulsate: C,
                rippleX: R,
                rippleY: E,
                rippleSize: D,
              },
              c.current
            ),
          ]),
            (c.current += 1),
            (d.current = A);
        },
        [i]
      ),
      v = S.useCallback(
        (b = {}, C = {}, R = () => {}) => {
          const {
            pulsate: E = !1,
            center: D = o || C.pulsate,
            fakeElement: A = !1,
          } = C;
          if ((b == null ? void 0 : b.type) === "mousedown" && f.current) {
            f.current = !1;
            return;
          }
          (b == null ? void 0 : b.type) === "touchstart" && (f.current = !0);
          const I = A ? null : g.current,
            M = I
              ? I.getBoundingClientRect()
              : { width: 0, height: 0, left: 0, top: 0 };
          let J, V, j;
          if (
            D ||
            b === void 0 ||
            (b.clientX === 0 && b.clientY === 0) ||
            (!b.clientX && !b.touches)
          )
            (J = Math.round(M.width / 2)), (V = Math.round(M.height / 2));
          else {
            const { clientX: z, clientY: q } =
              b.touches && b.touches.length > 0 ? b.touches[0] : b;
            (J = Math.round(z - M.left)), (V = Math.round(q - M.top));
          }
          if (D)
            (j = Math.sqrt((2 * M.width ** 2 + M.height ** 2) / 3)),
              j % 2 === 0 && (j += 1);
          else {
            const z =
                Math.max(Math.abs((I ? I.clientWidth : 0) - J), J) * 2 + 2,
              q = Math.max(Math.abs((I ? I.clientHeight : 0) - V), V) * 2 + 2;
            j = Math.sqrt(z ** 2 + q ** 2);
          }
          b != null && b.touches
            ? h.current === null &&
              ((h.current = () => {
                x({ pulsate: E, rippleX: J, rippleY: V, rippleSize: j, cb: R });
              }),
              (p.current = setTimeout(() => {
                h.current && (h.current(), (h.current = null));
              }, HN)))
            : x({ pulsate: E, rippleX: J, rippleY: V, rippleSize: j, cb: R });
        },
        [o, x]
      ),
      m = S.useCallback(() => {
        v({}, { pulsate: !0 });
      }, [v]),
      y = S.useCallback((b, C) => {
        if (
          (clearTimeout(p.current),
          (b == null ? void 0 : b.type) === "touchend" && h.current)
        ) {
          h.current(),
            (h.current = null),
            (p.current = setTimeout(() => {
              y(b, C);
            }));
          return;
        }
        (h.current = null),
          u((R) => (R.length > 0 ? R.slice(1) : R)),
          (d.current = C);
      }, []);
    return (
      S.useImperativeHandle(n, () => ({ pulsate: m, start: v, stop: y }), [
        m,
        v,
        y,
      ]),
      w.jsx(
        YN,
        T({ className: we(Bn.root, i.root, a), ref: g }, l, {
          children: w.jsx(qA, { component: null, exit: !0, children: s }),
        })
      )
    );
  }),
  ZN = QN;
function JN(e) {
  return lt("MuiButtonBase", e);
}
const e4 = Ke("MuiButtonBase", ["root", "disabled", "focusVisible"]),
  t4 = e4,
  n4 = [
    "action",
    "centerRipple",
    "children",
    "className",
    "component",
    "disabled",
    "disableRipple",
    "disableTouchRipple",
    "focusRipple",
    "focusVisibleClassName",
    "LinkComponent",
    "onBlur",
    "onClick",
    "onContextMenu",
    "onDragLeave",
    "onFocus",
    "onFocusVisible",
    "onKeyDown",
    "onKeyUp",
    "onMouseDown",
    "onMouseLeave",
    "onMouseUp",
    "onTouchEnd",
    "onTouchMove",
    "onTouchStart",
    "tabIndex",
    "TouchRippleProps",
    "touchRippleRef",
    "type",
  ],
  r4 = (e) => {
    const {
        disabled: t,
        focusVisible: n,
        focusVisibleClassName: r,
        classes: o,
      } = e,
      a = dt({ root: ["root", t && "disabled", n && "focusVisible"] }, JN, o);
    return n && r && (a.root += ` ${r}`), a;
  },
  o4 = Ee("button", {
    name: "MuiButtonBase",
    slot: "Root",
    overridesResolver: (e, t) => t.root,
  })({
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    position: "relative",
    boxSizing: "border-box",
    WebkitTapHighlightColor: "transparent",
    backgroundColor: "transparent",
    outline: 0,
    border: 0,
    margin: 0,
    borderRadius: 0,
    padding: 0,
    cursor: "pointer",
    userSelect: "none",
    verticalAlign: "middle",
    MozAppearance: "none",
    WebkitAppearance: "none",
    textDecoration: "none",
    color: "inherit",
    "&::-moz-focus-inner": { borderStyle: "none" },
    [`&.${t4.disabled}`]: { pointerEvents: "none", cursor: "default" },
    "@media print": { colorAdjust: "exact" },
  }),
  i4 = S.forwardRef(function (t, n) {
    const r = ft({ props: t, name: "MuiButtonBase" }),
      {
        action: o,
        centerRipple: i = !1,
        children: a,
        className: l,
        component: s = "button",
        disabled: u = !1,
        disableRipple: c = !1,
        disableTouchRipple: d = !1,
        focusRipple: f = !1,
        LinkComponent: p = "a",
        onBlur: h,
        onClick: g,
        onContextMenu: x,
        onDragLeave: v,
        onFocus: m,
        onFocusVisible: y,
        onKeyDown: b,
        onKeyUp: C,
        onMouseDown: R,
        onMouseLeave: E,
        onMouseUp: D,
        onTouchEnd: A,
        onTouchMove: I,
        onTouchStart: M,
        tabIndex: J = 0,
        TouchRippleProps: V,
        touchRippleRef: j,
        type: z,
      } = r,
      q = xe(r, n4),
      re = S.useRef(null),
      U = S.useRef(null),
      X = en(U, j),
      { isFocusVisibleRef: W, onFocus: ee, onBlur: k, ref: L } = Gh(),
      [O, H] = S.useState(!1);
    u && O && H(!1),
      S.useImperativeHandle(
        o,
        () => ({
          focusVisible: () => {
            H(!0), re.current.focus();
          },
        }),
        []
      );
    const [Y, se] = S.useState(!1);
    S.useEffect(() => {
      se(!0);
    }, []);
    const ie = Y && !c && !u;
    S.useEffect(() => {
      O && f && !c && Y && U.current.pulsate();
    }, [c, f, O, Y]);
    function te(he, $, B = d) {
      return oo((K) => ($ && $(K), !B && U.current && U.current[he](K), !0));
    }
    const Se = te("start", R),
      ye = te("stop", x),
      be = te("stop", v),
      Re = te("stop", D),
      Be = te("stop", (he) => {
        O && he.preventDefault(), E && E(he);
      }),
      Ue = te("start", M),
      Oe = te("stop", A),
      ge = te("stop", I),
      jt = te(
        "stop",
        (he) => {
          k(he), W.current === !1 && H(!1), h && h(he);
        },
        !1
      ),
      wt = oo((he) => {
        re.current || (re.current = he.currentTarget),
          ee(he),
          W.current === !0 && (H(!0), y && y(he)),
          m && m(he);
      }),
      Ze = () => {
        const he = re.current;
        return s && s !== "button" && !(he.tagName === "A" && he.href);
      },
      Ct = S.useRef(!1),
      It = oo((he) => {
        f &&
          !Ct.current &&
          O &&
          U.current &&
          he.key === " " &&
          ((Ct.current = !0),
          U.current.stop(he, () => {
            U.current.start(he);
          })),
          he.target === he.currentTarget &&
            Ze() &&
            he.key === " " &&
            he.preventDefault(),
          b && b(he),
          he.target === he.currentTarget &&
            Ze() &&
            he.key === "Enter" &&
            !u &&
            (he.preventDefault(), g && g(he));
      }),
      zt = oo((he) => {
        f &&
          he.key === " " &&
          U.current &&
          O &&
          !he.defaultPrevented &&
          ((Ct.current = !1),
          U.current.stop(he, () => {
            U.current.pulsate(he);
          })),
          C && C(he),
          g &&
            he.target === he.currentTarget &&
            Ze() &&
            he.key === " " &&
            !he.defaultPrevented &&
            g(he);
      });
    let ht = s;
    ht === "button" && (q.href || q.to) && (ht = p);
    const Je = {};
    ht === "button"
      ? ((Je.type = z === void 0 ? "button" : z), (Je.disabled = u))
      : (!q.href && !q.to && (Je.role = "button"),
        u && (Je["aria-disabled"] = u));
    const Zn = en(n, L, re),
      Jn = T({}, r, {
        centerRipple: i,
        component: s,
        disabled: u,
        disableRipple: c,
        disableTouchRipple: d,
        focusRipple: f,
        tabIndex: J,
        focusVisible: O,
      }),
      Mn = r4(Jn);
    return w.jsxs(
      o4,
      T(
        {
          as: ht,
          className: we(Mn.root, l),
          ownerState: Jn,
          onBlur: jt,
          onClick: g,
          onContextMenu: ye,
          onFocus: wt,
          onKeyDown: It,
          onKeyUp: zt,
          onMouseDown: Se,
          onMouseLeave: Be,
          onMouseUp: Re,
          onDragLeave: be,
          onTouchEnd: Oe,
          onTouchMove: ge,
          onTouchStart: Ue,
          ref: Zn,
          tabIndex: u ? -1 : J,
          type: z,
        },
        Je,
        q,
        { children: [a, ie ? w.jsx(ZN, T({ ref: X, center: i }, V)) : null] }
      )
    );
  }),
  bd = i4;
function a4(e) {
  return lt("MuiIconButton", e);
}
const l4 = Ke("MuiIconButton", [
    "root",
    "disabled",
    "colorInherit",
    "colorPrimary",
    "colorSecondary",
    "colorError",
    "colorInfo",
    "colorSuccess",
    "colorWarning",
    "edgeStart",
    "edgeEnd",
    "sizeSmall",
    "sizeMedium",
    "sizeLarge",
  ]),
  s4 = l4,
  u4 = [
    "edge",
    "children",
    "className",
    "color",
    "disabled",
    "disableFocusRipple",
    "size",
  ],
  c4 = (e) => {
    const { classes: t, disabled: n, color: r, edge: o, size: i } = e,
      a = {
        root: [
          "root",
          n && "disabled",
          r !== "default" && `color${pe(r)}`,
          o && `edge${pe(o)}`,
          `size${pe(i)}`,
        ],
      };
    return dt(a, a4, t);
  },
  d4 = Ee(bd, {
    name: "MuiIconButton",
    slot: "Root",
    overridesResolver: (e, t) => {
      const { ownerState: n } = e;
      return [
        t.root,
        n.color !== "default" && t[`color${pe(n.color)}`],
        n.edge && t[`edge${pe(n.edge)}`],
        t[`size${pe(n.size)}`],
      ];
    },
  })(
    ({ theme: e, ownerState: t }) =>
      T(
        {
          textAlign: "center",
          flex: "0 0 auto",
          fontSize: e.typography.pxToRem(24),
          padding: 8,
          borderRadius: "50%",
          overflow: "visible",
          color: (e.vars || e).palette.action.active,
          transition: e.transitions.create("background-color", {
            duration: e.transitions.duration.shortest,
          }),
        },
        !t.disableRipple && {
          "&:hover": {
            backgroundColor: e.vars
              ? `rgba(${e.vars.palette.action.activeChannel} / ${e.vars.palette.action.hoverOpacity})`
              : Gt(e.palette.action.active, e.palette.action.hoverOpacity),
            "@media (hover: none)": { backgroundColor: "transparent" },
          },
        },
        t.edge === "start" && { marginLeft: t.size === "small" ? -3 : -12 },
        t.edge === "end" && { marginRight: t.size === "small" ? -3 : -12 }
      ),
    ({ theme: e, ownerState: t }) => {
      var n;
      const r = (n = (e.vars || e).palette) == null ? void 0 : n[t.color];
      return T(
        {},
        t.color === "inherit" && { color: "inherit" },
        t.color !== "inherit" &&
          t.color !== "default" &&
          T(
            { color: r == null ? void 0 : r.main },
            !t.disableRipple && {
              "&:hover": T(
                {},
                r && {
                  backgroundColor: e.vars
                    ? `rgba(${r.mainChannel} / ${e.vars.palette.action.hoverOpacity})`
                    : Gt(r.main, e.palette.action.hoverOpacity),
                },
                { "@media (hover: none)": { backgroundColor: "transparent" } }
              ),
            }
          ),
        t.size === "small" && {
          padding: 5,
          fontSize: e.typography.pxToRem(18),
        },
        t.size === "large" && {
          padding: 12,
          fontSize: e.typography.pxToRem(28),
        },
        {
          [`&.${s4.disabled}`]: {
            backgroundColor: "transparent",
            color: (e.vars || e).palette.action.disabled,
          },
        }
      );
    }
  ),
  f4 = S.forwardRef(function (t, n) {
    const r = ft({ props: t, name: "MuiIconButton" }),
      {
        edge: o = !1,
        children: i,
        className: a,
        color: l = "default",
        disabled: s = !1,
        disableFocusRipple: u = !1,
        size: c = "medium",
      } = r,
      d = xe(r, u4),
      f = T({}, r, {
        edge: o,
        color: l,
        disabled: s,
        disableFocusRipple: u,
        size: c,
      }),
      p = c4(f);
    return w.jsx(
      d4,
      T(
        {
          className: we(p.root, a),
          centerRipple: !0,
          focusRipple: !u,
          disabled: s,
          ref: n,
          ownerState: f,
        },
        d,
        { children: i }
      )
    );
  }),
  Fo = f4;
var wm = {},
  Iw = { exports: {} };
(function (e) {
  function t(n) {
    return n && n.__esModule ? n : { default: n };
  }
  (e.exports = t), (e.exports.__esModule = !0), (e.exports.default = e.exports);
})(Iw);
var rn = Iw.exports,
  Vf = {};
function p4(e) {
  return lt("MuiSvgIcon", e);
}
Ke("MuiSvgIcon", [
  "root",
  "colorPrimary",
  "colorSecondary",
  "colorAction",
  "colorError",
  "colorDisabled",
  "fontSizeInherit",
  "fontSizeSmall",
  "fontSizeMedium",
  "fontSizeLarge",
]);
const v4 = [
    "children",
    "className",
    "color",
    "component",
    "fontSize",
    "htmlColor",
    "inheritViewBox",
    "titleAccess",
    "viewBox",
  ],
  h4 = (e) => {
    const { color: t, fontSize: n, classes: r } = e,
      o = {
        root: ["root", t !== "inherit" && `color${pe(t)}`, `fontSize${pe(n)}`],
      };
    return dt(o, p4, r);
  },
  m4 = Ee("svg", {
    name: "MuiSvgIcon",
    slot: "Root",
    overridesResolver: (e, t) => {
      const { ownerState: n } = e;
      return [
        t.root,
        n.color !== "inherit" && t[`color${pe(n.color)}`],
        t[`fontSize${pe(n.fontSize)}`],
      ];
    },
  })(({ theme: e, ownerState: t }) => {
    var n, r, o, i, a, l, s, u, c, d, f, p, h, g, x, v, m;
    return {
      userSelect: "none",
      width: "1em",
      height: "1em",
      display: "inline-block",
      fill: "currentColor",
      flexShrink: 0,
      transition:
        (n = e.transitions) == null || (r = n.create) == null
          ? void 0
          : r.call(n, "fill", {
              duration:
                (o = e.transitions) == null || (i = o.duration) == null
                  ? void 0
                  : i.shorter,
            }),
      fontSize: {
        inherit: "inherit",
        small:
          ((a = e.typography) == null || (l = a.pxToRem) == null
            ? void 0
            : l.call(a, 20)) || "1.25rem",
        medium:
          ((s = e.typography) == null || (u = s.pxToRem) == null
            ? void 0
            : u.call(s, 24)) || "1.5rem",
        large:
          ((c = e.typography) == null || (d = c.pxToRem) == null
            ? void 0
            : d.call(c, 35)) || "2.1875rem",
      }[t.fontSize],
      color:
        (f =
          (p = (e.vars || e).palette) == null || (h = p[t.color]) == null
            ? void 0
            : h.main) != null
          ? f
          : {
              action:
                (g = (e.vars || e).palette) == null || (x = g.action) == null
                  ? void 0
                  : x.active,
              disabled:
                (v = (e.vars || e).palette) == null || (m = v.action) == null
                  ? void 0
                  : m.disabled,
              inherit: void 0,
            }[t.color],
    };
  }),
  Aw = S.forwardRef(function (t, n) {
    const r = ft({ props: t, name: "MuiSvgIcon" }),
      {
        children: o,
        className: i,
        color: a = "inherit",
        component: l = "svg",
        fontSize: s = "medium",
        htmlColor: u,
        inheritViewBox: c = !1,
        titleAccess: d,
        viewBox: f = "0 0 24 24",
      } = r,
      p = xe(r, v4),
      h = T({}, r, {
        color: a,
        component: l,
        fontSize: s,
        instanceFontSize: t.fontSize,
        inheritViewBox: c,
        viewBox: f,
      }),
      g = {};
    c || (g.viewBox = f);
    const x = h4(h);
    return w.jsxs(
      m4,
      T(
        {
          as: l,
          className: we(x.root, i),
          focusable: "false",
          color: u,
          "aria-hidden": d ? void 0 : !0,
          role: d ? "img" : void 0,
          ref: n,
        },
        g,
        p,
        {
          ownerState: h,
          children: [o, d ? w.jsx("title", { children: d }) : null],
        }
      )
    );
  });
Aw.muiName = "SvgIcon";
const O0 = Aw;
function g4(e, t) {
  function n(r, o) {
    return w.jsx(
      O0,
      T({ "data-testid": `${t}Icon`, ref: o }, r, { children: e })
    );
  }
  return (n.muiName = O0.muiName), S.memo(S.forwardRef(n));
}
const y4 = {
    configure: (e) => {
      qh.configure(e);
    },
  },
  b4 = Object.freeze(
    Object.defineProperty(
      {
        __proto__: null,
        capitalize: pe,
        createChainedFunction: vv,
        createSvgIcon: g4,
        debounce: OS,
        deprecatedPropType: k_,
        isMuiElement: D_,
        ownerDocument: Jt,
        ownerWindow: na,
        requirePropFactory: I_,
        setRef: lc,
        unstable_ClassNameGenerator: y4,
        unstable_useEnhancedEffect: wo,
        unstable_useId: Wh,
        unsupportedProp: O_,
        useControlled: Hh,
        useEventCallback: oo,
        useForkRef: en,
        useIsFocusVisible: Gh,
      },
      Symbol.toStringTag,
      { value: "Module" }
    )
  ),
  x4 = JE(b4);
var M0;
function on() {
  return (
    M0 ||
      ((M0 = 1),
      (function (e) {
        Object.defineProperty(e, "__esModule", { value: !0 }),
          Object.defineProperty(e, "default", {
            enumerable: !0,
            get: function () {
              return t.createSvgIcon;
            },
          });
        var t = x4;
      })(Vf)),
    Vf
  );
}
var S4 = rn;
Object.defineProperty(wm, "__esModule", { value: !0 });
var xd = (wm.default = void 0),
  w4 = S4(on()),
  C4 = w,
  R4 = (0, w4.default)(
    (0, C4.jsx)("path", {
      d: "M19 6.41 17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z",
    }),
    "Close"
  );
xd = wm.default = R4;
var Nw = {
    color: void 0,
    size: void 0,
    className: void 0,
    style: void 0,
    attr: void 0,
  },
  $0 = oe.createContext && oe.createContext(Nw),
  ho =
    (globalThis && globalThis.__assign) ||
    function () {
      return (
        (ho =
          Object.assign ||
          function (e) {
            for (var t, n = 1, r = arguments.length; n < r; n++) {
              t = arguments[n];
              for (var o in t)
                Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
            }
            return e;
          }),
        ho.apply(this, arguments)
      );
    },
  E4 =
    (globalThis && globalThis.__rest) ||
    function (e, t) {
      var n = {};
      for (var r in e)
        Object.prototype.hasOwnProperty.call(e, r) &&
          t.indexOf(r) < 0 &&
          (n[r] = e[r]);
      if (e != null && typeof Object.getOwnPropertySymbols == "function")
        for (var o = 0, r = Object.getOwnPropertySymbols(e); o < r.length; o++)
          t.indexOf(r[o]) < 0 &&
            Object.prototype.propertyIsEnumerable.call(e, r[o]) &&
            (n[r[o]] = e[r[o]]);
      return n;
    };
function Ow(e) {
  return (
    e &&
    e.map(function (t, n) {
      return oe.createElement(t.tag, ho({ key: n }, t.attr), Ow(t.child));
    })
  );
}
function On(e) {
  return function (t) {
    return oe.createElement(T4, ho({ attr: ho({}, e.attr) }, t), Ow(e.child));
  };
}
function T4(e) {
  var t = function (n) {
    var r = e.attr,
      o = e.size,
      i = e.title,
      a = E4(e, ["attr", "size", "title"]),
      l = o || n.size || "1em",
      s;
    return (
      n.className && (s = n.className),
      e.className && (s = (s ? s + " " : "") + e.className),
      oe.createElement(
        "svg",
        ho(
          { stroke: "currentColor", fill: "currentColor", strokeWidth: "0" },
          n.attr,
          r,
          a,
          {
            className: s,
            style: ho(ho({ color: e.color || n.color }, n.style), e.style),
            height: l,
            width: l,
            xmlns: "http://www.w3.org/2000/svg",
          }
        ),
        i && oe.createElement("title", null, i),
        e.children
      )
    );
  };
  return $0 !== void 0
    ? oe.createElement($0.Consumer, null, function (n) {
        return t(n);
      })
    : t(Nw);
}
function _4(e) {
  return On({
    tag: "svg",
    attr: { viewBox: "0 0 15 15", fill: "none" },
    child: [
      {
        tag: "path",
        attr: {
          fillRule: "evenodd",
          clipRule: "evenodd",
          d: "M0 1.5C0 1.22386 0.223858 1 0.5 1H2.5C2.77614 1 3 1.22386 3 1.5C3 1.77614 2.77614 2 2.5 2H0.5C0.223858 2 0 1.77614 0 1.5ZM4 1.5C4 1.22386 4.22386 1 4.5 1H14.5C14.7761 1 15 1.22386 15 1.5C15 1.77614 14.7761 2 14.5 2H4.5C4.22386 2 4 1.77614 4 1.5ZM4 4.5C4 4.22386 4.22386 4 4.5 4H11.5C11.7761 4 12 4.22386 12 4.5C12 4.77614 11.7761 5 11.5 5H4.5C4.22386 5 4 4.77614 4 4.5ZM0 7.5C0 7.22386 0.223858 7 0.5 7H2.5C2.77614 7 3 7.22386 3 7.5C3 7.77614 2.77614 8 2.5 8H0.5C0.223858 8 0 7.77614 0 7.5ZM4 7.5C4 7.22386 4.22386 7 4.5 7H14.5C14.7761 7 15 7.22386 15 7.5C15 7.77614 14.7761 8 14.5 8H4.5C4.22386 8 4 7.77614 4 7.5ZM4 10.5C4 10.2239 4.22386 10 4.5 10H11.5C11.7761 10 12 10.2239 12 10.5C12 10.7761 11.7761 11 11.5 11H4.5C4.22386 11 4 10.7761 4 10.5ZM0 13.5C0 13.2239 0.223858 13 0.5 13H2.5C2.77614 13 3 13.2239 3 13.5C3 13.7761 2.77614 14 2.5 14H0.5C0.223858 14 0 13.7761 0 13.5ZM4 13.5C4 13.2239 4.22386 13 4.5 13H14.5C14.7761 13 15 13.2239 15 13.5C15 13.7761 14.7761 14 14.5 14H4.5C4.22386 14 4 13.7761 4 13.5Z",
          fill: "currentColor",
        },
      },
    ],
  })(e);
}
function P4(e) {
  return On({
    tag: "svg",
    attr: { viewBox: "0 0 15 15", fill: "none" },
    child: [
      {
        tag: "path",
        attr: {
          fillRule: "evenodd",
          clipRule: "evenodd",
          d: "M0.877075 7.49988C0.877075 3.84219 3.84222 0.877045 7.49991 0.877045C11.1576 0.877045 14.1227 3.84219 14.1227 7.49988C14.1227 11.1575 11.1576 14.1227 7.49991 14.1227C3.84222 14.1227 0.877075 11.1575 0.877075 7.49988ZM7.49991 1.82704C4.36689 1.82704 1.82708 4.36686 1.82708 7.49988C1.82708 10.6329 4.36689 13.1727 7.49991 13.1727C10.6329 13.1727 13.1727 10.6329 13.1727 7.49988C13.1727 4.36686 10.6329 1.82704 7.49991 1.82704ZM9.85358 5.14644C10.0488 5.3417 10.0488 5.65829 9.85358 5.85355L8.20713 7.49999L9.85358 9.14644C10.0488 9.3417 10.0488 9.65829 9.85358 9.85355C9.65832 10.0488 9.34173 10.0488 9.14647 9.85355L7.50002 8.2071L5.85358 9.85355C5.65832 10.0488 5.34173 10.0488 5.14647 9.85355C4.95121 9.65829 4.95121 9.3417 5.14647 9.14644L6.79292 7.49999L5.14647 5.85355C4.95121 5.65829 4.95121 5.3417 5.14647 5.14644C5.34173 4.95118 5.65832 4.95118 5.85358 5.14644L7.50002 6.79289L9.14647 5.14644C9.34173 4.95118 9.65832 4.95118 9.85358 5.14644Z",
          fill: "currentColor",
        },
      },
    ],
  })(e);
}
const k4 = "_mainContainer_cpaer_3",
  D4 = "_container_cpaer_13",
  I4 = "_activityDiv_cpaer_29",
  A4 = "_editableDiv_cpaer_41",
  N4 = "_showBtn_cpaer_53",
  O4 = "_headingUsername_cpaer_75",
  M4 = "_userProfile_cpaer_97",
  $4 = "_userProfileDiv_cpaer_133",
  L4 = "_editedArea_cpaer_141",
  B4 = "_saveBtnDiv_cpaer_173",
  F4 = "_tetContainDiv_cpaer_223",
  j4 = "_activityBox_cpaer_251",
  z4 = "_comment_cpaer_267",
  U4 = "_time_cpaer_285",
  sn = {
    mainContainer: k4,
    container: D4,
    activityDiv: I4,
    editableDiv: A4,
    showBtn: N4,
    headingUsername: O4,
    userProfile: M4,
    userProfileDiv: $4,
    editedArea: L4,
    saveBtnDiv: B4,
    tetContainDiv: F4,
    activityBox: j4,
    comment: z4,
    time: U4,
  };
function V4(e) {
  const t = new Error(e);
  if (t.stack === void 0)
    try {
      throw t;
    } catch {}
  return t;
}
var W4 = V4,
  Te = W4;
function H4(e) {
  return !!e && typeof e.then == "function";
}
var Xe = H4;
function G4(e, t) {
  if (e != null) return e;
  throw Te(t ?? "Got unexpected null or undefined");
}
var nt = G4;
function Ce(e, t, n) {
  return (
    t in e
      ? Object.defineProperty(e, t, {
          value: n,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (e[t] = n),
    e
  );
}
class Sd {
  getValue() {
    throw Te("BaseLoadable");
  }
  toPromise() {
    throw Te("BaseLoadable");
  }
  valueMaybe() {
    throw Te("BaseLoadable");
  }
  valueOrThrow() {
    throw Te(`Loadable expected value, but in "${this.state}" state`);
  }
  promiseMaybe() {
    throw Te("BaseLoadable");
  }
  promiseOrThrow() {
    throw Te(`Loadable expected promise, but in "${this.state}" state`);
  }
  errorMaybe() {
    throw Te("BaseLoadable");
  }
  errorOrThrow() {
    throw Te(`Loadable expected error, but in "${this.state}" state`);
  }
  is(t) {
    return t.state === this.state && t.contents === this.contents;
  }
  map(t) {
    throw Te("BaseLoadable");
  }
}
class K4 extends Sd {
  constructor(t) {
    super(),
      Ce(this, "state", "hasValue"),
      Ce(this, "contents", void 0),
      (this.contents = t);
  }
  getValue() {
    return this.contents;
  }
  toPromise() {
    return Promise.resolve(this.contents);
  }
  valueMaybe() {
    return this.contents;
  }
  valueOrThrow() {
    return this.contents;
  }
  promiseMaybe() {}
  errorMaybe() {}
  map(t) {
    try {
      const n = t(this.contents);
      return Xe(n) ? ni(n) : sa(n) ? n : ms(n);
    } catch (n) {
      return Xe(n) ? ni(n.next(() => this.map(t))) : wd(n);
    }
  }
}
class q4 extends Sd {
  constructor(t) {
    super(),
      Ce(this, "state", "hasError"),
      Ce(this, "contents", void 0),
      (this.contents = t);
  }
  getValue() {
    throw this.contents;
  }
  toPromise() {
    return Promise.reject(this.contents);
  }
  valueMaybe() {}
  promiseMaybe() {}
  errorMaybe() {
    return this.contents;
  }
  errorOrThrow() {
    return this.contents;
  }
  map(t) {
    return this;
  }
}
class Mw extends Sd {
  constructor(t) {
    super(),
      Ce(this, "state", "loading"),
      Ce(this, "contents", void 0),
      (this.contents = t);
  }
  getValue() {
    throw this.contents;
  }
  toPromise() {
    return this.contents;
  }
  valueMaybe() {}
  promiseMaybe() {
    return this.contents;
  }
  promiseOrThrow() {
    return this.contents;
  }
  errorMaybe() {}
  map(t) {
    return ni(
      this.contents
        .then((n) => {
          const r = t(n);
          if (sa(r)) {
            const o = r;
            switch (o.state) {
              case "hasValue":
                return o.contents;
              case "hasError":
                throw o.contents;
              case "loading":
                return o.contents;
            }
          }
          return r;
        })
        .catch((n) => {
          if (Xe(n)) return n.then(() => this.map(t).contents);
          throw n;
        })
    );
  }
}
function ms(e) {
  return Object.freeze(new K4(e));
}
function wd(e) {
  return Object.freeze(new q4(e));
}
function ni(e) {
  return Object.freeze(new Mw(e));
}
function $w() {
  return Object.freeze(new Mw(new Promise(() => {})));
}
function Y4(e) {
  return e.every((t) => t.state === "hasValue")
    ? ms(e.map((t) => t.contents))
    : e.some((t) => t.state === "hasError")
    ? wd(
        nt(
          e.find((t) => t.state === "hasError"),
          "Invalid loadable passed to loadableAll"
        ).contents
      )
    : ni(Promise.all(e.map((t) => t.contents)));
}
function Lw(e) {
  const n = (
      Array.isArray(e) ? e : Object.getOwnPropertyNames(e).map((o) => e[o])
    ).map((o) => (sa(o) ? o : Xe(o) ? ni(o) : ms(o))),
    r = Y4(n);
  return Array.isArray(e)
    ? r
    : r.map((o) =>
        Object.getOwnPropertyNames(e).reduce(
          (i, a, l) => ({ ...i, [a]: o[l] }),
          {}
        )
      );
}
function sa(e) {
  return e instanceof Sd;
}
const X4 = {
  of: (e) => (Xe(e) ? ni(e) : sa(e) ? e : ms(e)),
  error: (e) => wd(e),
  loading: () => $w(),
  all: Lw,
  isLoadable: sa,
};
var li = {
    loadableWithValue: ms,
    loadableWithError: wd,
    loadableWithPromise: ni,
    loadableLoading: $w,
    loadableAll: Lw,
    isLoadable: sa,
    RecoilLoadable: X4,
  },
  Q4 = li.loadableWithValue,
  Z4 = li.loadableWithError,
  J4 = li.loadableWithPromise,
  eO = li.loadableLoading,
  tO = li.loadableAll,
  nO = li.isLoadable,
  rO = li.RecoilLoadable,
  gs = Object.freeze({
    __proto__: null,
    loadableWithValue: Q4,
    loadableWithError: Z4,
    loadableWithPromise: J4,
    loadableLoading: eO,
    loadableAll: tO,
    isLoadable: nO,
    RecoilLoadable: rO,
  });
const Tv = {
  RECOIL_DUPLICATE_ATOM_KEY_CHECKING_ENABLED: !0,
  RECOIL_GKS_ENABLED: new Set([
    "recoil_hamt_2020",
    "recoil_sync_external_store",
    "recoil_suppress_rerender_in_callback",
    "recoil_memory_managament_2020",
  ]),
};
function oO(e, t) {
  var n, r;
  const o =
    (n = process.env[e]) === null ||
    n === void 0 ||
    (r = n.toLowerCase()) === null ||
    r === void 0
      ? void 0
      : r.trim();
  if (o == null || o === "") return;
  if (!["true", "false"].includes(o))
    throw Te(`({}).${e} value must be 'true', 'false', or empty: ${o}`);
  t(o === "true");
}
function iO(e, t) {
  var n;
  const r = (n = process.env[e]) === null || n === void 0 ? void 0 : n.trim();
  r == null || r === "" || t(r.split(/\s*,\s*|\s+/));
}
function aO() {
  var e;
  typeof process > "u" ||
    (((e = process) === null || e === void 0 ? void 0 : e.env) != null &&
      (oO("RECOIL_DUPLICATE_ATOM_KEY_CHECKING_ENABLED", (t) => {
        Tv.RECOIL_DUPLICATE_ATOM_KEY_CHECKING_ENABLED = t;
      }),
      iO("RECOIL_GKS_ENABLED", (t) => {
        t.forEach((n) => {
          Tv.RECOIL_GKS_ENABLED.add(n);
        });
      })));
}
aO();
var Sa = Tv;
function Cd(e) {
  return Sa.RECOIL_GKS_ENABLED.has(e);
}
Cd.setPass = (e) => {
  Sa.RECOIL_GKS_ENABLED.add(e);
};
Cd.setFail = (e) => {
  Sa.RECOIL_GKS_ENABLED.delete(e);
};
Cd.clear = () => {
  Sa.RECOIL_GKS_ENABLED.clear();
};
var We = Cd;
function lO(e, t, { error: n } = {}) {
  return null;
}
var sO = lO,
  Cm = sO,
  Wf,
  Hf,
  Gf;
const uO =
    (Wf = oe.createMutableSource) !== null && Wf !== void 0
      ? Wf
      : oe.unstable_createMutableSource,
  Bw =
    (Hf = oe.useMutableSource) !== null && Hf !== void 0
      ? Hf
      : oe.unstable_useMutableSource,
  Fw =
    (Gf = oe.useSyncExternalStore) !== null && Gf !== void 0
      ? Gf
      : oe.unstable_useSyncExternalStore;
function cO() {
  var e;
  const { ReactCurrentDispatcher: t, ReactCurrentOwner: n } =
    oe.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
  return (
    ((e = t == null ? void 0 : t.current) !== null && e !== void 0
      ? e
      : n.currentDispatcher
    ).useSyncExternalStore != null
  );
}
function dO() {
  return We("recoil_transition_support")
    ? { mode: "TRANSITION_SUPPORT", early: !0, concurrent: !0 }
    : We("recoil_sync_external_store") && Fw != null
    ? { mode: "SYNC_EXTERNAL_STORE", early: !0, concurrent: !1 }
    : We("recoil_mutable_source") &&
      Bw != null &&
      typeof window < "u" &&
      !window.$disableRecoilValueMutableSource_TEMP_HACK_DO_NOT_USE
    ? We("recoil_suppress_rerender_in_callback")
      ? { mode: "MUTABLE_SOURCE", early: !0, concurrent: !0 }
      : { mode: "MUTABLE_SOURCE", early: !1, concurrent: !1 }
    : We("recoil_suppress_rerender_in_callback")
    ? { mode: "LEGACY", early: !0, concurrent: !1 }
    : { mode: "LEGACY", early: !1, concurrent: !1 };
}
function fO() {
  return !1;
}
var ys = {
  createMutableSource: uO,
  useMutableSource: Bw,
  useSyncExternalStore: Fw,
  currentRendererSupportsUseSyncExternalStore: cO,
  reactMode: dO,
  isFastRefreshEnabled: fO,
};
class Rm {
  constructor(t) {
    Ce(this, "key", void 0), (this.key = t);
  }
  toJSON() {
    return { key: this.key };
  }
}
class jw extends Rm {}
class zw extends Rm {}
function pO(e) {
  return e instanceof jw || e instanceof zw;
}
var Rd = {
    AbstractRecoilValue: Rm,
    RecoilState: jw,
    RecoilValueReadOnly: zw,
    isRecoilValue: pO,
  },
  vO = Rd.AbstractRecoilValue,
  hO = Rd.RecoilState,
  mO = Rd.RecoilValueReadOnly,
  gO = Rd.isRecoilValue,
  ua = Object.freeze({
    __proto__: null,
    AbstractRecoilValue: vO,
    RecoilState: hO,
    RecoilValueReadOnly: mO,
    isRecoilValue: gO,
  });
function yO(e, t) {
  return (function* () {
    let n = 0;
    for (const r of e) yield t(r, n++);
  })();
}
var Ed = yO;
class Uw {}
const bO = new Uw(),
  ri = new Map(),
  Em = new Map();
function xO(e) {
  return Ed(e, (t) => nt(Em.get(t)));
}
function SO(e) {
  if (ri.has(e)) {
    const t = `Duplicate atom key "${e}". This is a FATAL ERROR in
      production. But it is safe to ignore this warning if it occurred because of
      hot module replacement.`;
    console.warn(t);
  }
}
function wO(e) {
  Sa.RECOIL_DUPLICATE_ATOM_KEY_CHECKING_ENABLED && SO(e.key), ri.set(e.key, e);
  const t =
    e.set == null
      ? new ua.RecoilValueReadOnly(e.key)
      : new ua.RecoilState(e.key);
  return Em.set(e.key, t), t;
}
class Vw extends Error {}
function CO(e) {
  const t = ri.get(e);
  if (t == null) throw new Vw(`Missing definition for RecoilValue: "${e}""`);
  return t;
}
function RO(e) {
  return ri.get(e);
}
const pc = new Map();
function EO(e) {
  var t;
  if (!We("recoil_memory_managament_2020")) return;
  const n = ri.get(e);
  if (
    n != null &&
    (t = n.shouldDeleteConfigOnRelease) !== null &&
    t !== void 0 &&
    t.call(n)
  ) {
    var r;
    ri.delete(e), (r = Ww(e)) === null || r === void 0 || r(), pc.delete(e);
  }
}
function TO(e, t) {
  We("recoil_memory_managament_2020") &&
    (t === void 0 ? pc.delete(e) : pc.set(e, t));
}
function Ww(e) {
  return pc.get(e);
}
var bn = {
  nodes: ri,
  recoilValues: Em,
  registerNode: wO,
  getNode: CO,
  getNodeMaybe: RO,
  deleteNodeConfigIfPossible: EO,
  setConfigDeletionHandler: TO,
  getConfigDeletionHandler: Ww,
  recoilValuesForKeys: xO,
  NodeMissingError: Vw,
  DefaultValue: Uw,
  DEFAULT_VALUE: bO,
};
function _O(e, t) {
  t();
}
var PO = { enqueueExecution: _O };
function kO(e, t) {
  return (t = { exports: {} }), e(t, t.exports), t.exports;
}
var DO = kO(function (e) {
  var t =
      typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
        ? function (P) {
            return typeof P;
          }
        : function (P) {
            return P &&
              typeof Symbol == "function" &&
              P.constructor === Symbol &&
              P !== Symbol.prototype
              ? "symbol"
              : typeof P;
          },
    n = {},
    r = 5,
    o = Math.pow(2, r),
    i = o - 1,
    a = o / 2,
    l = o / 4,
    s = {},
    u = function (_) {
      return function () {
        return _;
      };
    },
    c = (n.hash = function (P) {
      var _ = typeof P > "u" ? "undefined" : t(P);
      if (_ === "number") return P;
      _ !== "string" && (P += "");
      for (var N = 0, F = 0, G = P.length; F < G; ++F) {
        var Q = P.charCodeAt(F);
        N = ((N << 5) - N + Q) | 0;
      }
      return N;
    }),
    d = function (_) {
      return (
        (_ -= (_ >> 1) & 1431655765),
        (_ = (_ & 858993459) + ((_ >> 2) & 858993459)),
        (_ = (_ + (_ >> 4)) & 252645135),
        (_ += _ >> 8),
        (_ += _ >> 16),
        _ & 127
      );
    },
    f = function (_, N) {
      return (N >>> _) & i;
    },
    p = function (_) {
      return 1 << _;
    },
    h = function (_, N) {
      return d(_ & (N - 1));
    },
    g = function (_, N, F, G) {
      var Q = G;
      if (!_) {
        var ce = G.length;
        Q = new Array(ce);
        for (var ae = 0; ae < ce; ++ae) Q[ae] = G[ae];
      }
      return (Q[N] = F), Q;
    },
    x = function (_, N, F) {
      var G = F.length - 1,
        Q = 0,
        ce = 0,
        ae = F;
      if (_) Q = ce = N;
      else for (ae = new Array(G); Q < N; ) ae[ce++] = F[Q++];
      for (++Q; Q <= G; ) ae[ce++] = F[Q++];
      return _ && (ae.length = G), ae;
    },
    v = function (_, N, F, G) {
      var Q = G.length;
      if (_) {
        for (var ce = Q; ce >= N; ) G[ce--] = G[ce];
        return (G[N] = F), G;
      }
      for (var ae = 0, le = 0, me = new Array(Q + 1); ae < N; )
        me[le++] = G[ae++];
      for (me[N] = F; ae < Q; ) me[++le] = G[ae++];
      return me;
    },
    m = 1,
    y = 2,
    b = 3,
    C = 4,
    R = { __hamt_isEmpty: !0 },
    E = function (_) {
      return _ === R || (_ && _.__hamt_isEmpty);
    },
    D = function (_, N, F, G) {
      return { type: m, edit: _, hash: N, key: F, value: G, _modify: U };
    },
    A = function (_, N, F) {
      return { type: y, edit: _, hash: N, children: F, _modify: X };
    },
    I = function (_, N, F) {
      return { type: b, edit: _, mask: N, children: F, _modify: W };
    },
    M = function (_, N, F) {
      return { type: C, edit: _, size: N, children: F, _modify: ee };
    },
    J = function (_) {
      return _ === R || _.type === m || _.type === y;
    },
    V = function (_, N, F, G, Q) {
      for (var ce = [], ae = G, le = 0, me = 0; ae; ++me)
        ae & 1 && (ce[me] = Q[le++]), (ae >>>= 1);
      return (ce[N] = F), M(_, le + 1, ce);
    },
    j = function (_, N, F, G) {
      for (
        var Q = new Array(N - 1), ce = 0, ae = 0, le = 0, me = G.length;
        le < me;
        ++le
      )
        if (le !== F) {
          var Ie = G[le];
          Ie && !E(Ie) && ((Q[ce++] = Ie), (ae |= 1 << le));
        }
      return I(_, ae, Q);
    },
    z = function P(_, N, F, G, Q, ce) {
      if (F === Q) return A(_, F, [ce, G]);
      var ae = f(N, F),
        le = f(N, Q);
      return I(
        _,
        p(ae) | p(le),
        ae === le ? [P(_, N + r, F, G, Q, ce)] : ae < le ? [G, ce] : [ce, G]
      );
    },
    q = function (_, N, F, G, Q, ce, ae, le) {
      for (var me = Q.length, Ie = 0; Ie < me; ++Ie) {
        var pt = Q[Ie];
        if (F(ae, pt.key)) {
          var qe = pt.value,
            rt = ce(qe);
          return rt === qe
            ? Q
            : rt === s
            ? (--le.value, x(_, Ie, Q))
            : g(_, Ie, D(N, G, ae, rt), Q);
        }
      }
      var Rt = ce();
      return Rt === s ? Q : (++le.value, g(_, me, D(N, G, ae, Rt), Q));
    },
    re = function (_, N) {
      return _ === N.edit;
    },
    U = function (_, N, F, G, Q, ce, ae) {
      if (N(ce, this.key)) {
        var le = G(this.value);
        return le === this.value
          ? this
          : le === s
          ? (--ae.value, R)
          : re(_, this)
          ? ((this.value = le), this)
          : D(_, Q, ce, le);
      }
      var me = G();
      return me === s
        ? this
        : (++ae.value, z(_, F, this.hash, this, Q, D(_, Q, ce, me)));
    },
    X = function (_, N, F, G, Q, ce, ae) {
      if (Q === this.hash) {
        var le = re(_, this),
          me = q(le, _, N, this.hash, this.children, G, ce, ae);
        return me === this.children
          ? this
          : me.length > 1
          ? A(_, this.hash, me)
          : me[0];
      }
      var Ie = G();
      return Ie === s
        ? this
        : (++ae.value, z(_, F, this.hash, this, Q, D(_, Q, ce, Ie)));
    },
    W = function (_, N, F, G, Q, ce, ae) {
      var le = this.mask,
        me = this.children,
        Ie = f(F, Q),
        pt = p(Ie),
        qe = h(le, pt),
        rt = le & pt,
        Rt = rt ? me[qe] : R,
        an = Rt._modify(_, N, F + r, G, Q, ce, ae);
      if (Rt === an) return this;
      var pr = re(_, this),
        qt = le,
        ln = void 0;
      if (rt && E(an)) {
        if (((qt &= ~pt), !qt)) return R;
        if (me.length <= 2 && J(me[qe ^ 1])) return me[qe ^ 1];
        ln = x(pr, qe, me);
      } else if (!rt && !E(an)) {
        if (me.length >= a) return V(_, Ie, an, le, me);
        (qt |= pt), (ln = v(pr, qe, an, me));
      } else ln = g(pr, qe, an, me);
      return pr ? ((this.mask = qt), (this.children = ln), this) : I(_, qt, ln);
    },
    ee = function (_, N, F, G, Q, ce, ae) {
      var le = this.size,
        me = this.children,
        Ie = f(F, Q),
        pt = me[Ie],
        qe = (pt || R)._modify(_, N, F + r, G, Q, ce, ae);
      if (pt === qe) return this;
      var rt = re(_, this),
        Rt = void 0;
      if (E(pt) && !E(qe)) ++le, (Rt = g(rt, Ie, qe, me));
      else if (!E(pt) && E(qe)) {
        if ((--le, le <= l)) return j(_, le, Ie, me);
        Rt = g(rt, Ie, R, me);
      } else Rt = g(rt, Ie, qe, me);
      return rt ? ((this.size = le), (this.children = Rt), this) : M(_, le, Rt);
    };
  R._modify = function (P, _, N, F, G, Q, ce) {
    var ae = F();
    return ae === s ? R : (++ce.value, D(P, G, Q, ae));
  };
  function k(P, _, N, F, G) {
    (this._editable = P),
      (this._edit = _),
      (this._config = N),
      (this._root = F),
      (this._size = G);
  }
  k.prototype.setTree = function (P, _) {
    return this._editable
      ? ((this._root = P), (this._size = _), this)
      : P === this._root
      ? this
      : new k(this._editable, this._edit, this._config, P, _);
  };
  var L = (n.tryGetHash = function (P, _, N, F) {
    for (var G = F._root, Q = 0, ce = F._config.keyEq; ; )
      switch (G.type) {
        case m:
          return ce(N, G.key) ? G.value : P;
        case y: {
          if (_ === G.hash)
            for (var ae = G.children, le = 0, me = ae.length; le < me; ++le) {
              var Ie = ae[le];
              if (ce(N, Ie.key)) return Ie.value;
            }
          return P;
        }
        case b: {
          var pt = f(Q, _),
            qe = p(pt);
          if (G.mask & qe) {
            (G = G.children[h(G.mask, qe)]), (Q += r);
            break;
          }
          return P;
        }
        case C: {
          if (((G = G.children[f(Q, _)]), G)) {
            Q += r;
            break;
          }
          return P;
        }
        default:
          return P;
      }
  });
  k.prototype.tryGetHash = function (P, _, N) {
    return L(P, _, N, this);
  };
  var O = (n.tryGet = function (P, _, N) {
    return L(P, N._config.hash(_), _, N);
  });
  k.prototype.tryGet = function (P, _) {
    return O(P, _, this);
  };
  var H = (n.getHash = function (P, _, N) {
    return L(void 0, P, _, N);
  });
  (k.prototype.getHash = function (P, _) {
    return H(P, _, this);
  }),
    (n.get = function (P, _) {
      return L(void 0, _._config.hash(P), P, _);
    }),
    (k.prototype.get = function (P, _) {
      return O(_, P, this);
    });
  var Y = (n.has = function (P, _, N) {
    return L(s, P, _, N) !== s;
  });
  k.prototype.hasHash = function (P, _) {
    return Y(P, _, this);
  };
  var se = (n.has = function (P, _) {
    return Y(_._config.hash(P), P, _);
  });
  k.prototype.has = function (P) {
    return se(P, this);
  };
  var ie = function (_, N) {
    return _ === N;
  };
  (n.make = function (P) {
    return new k(
      0,
      0,
      { keyEq: (P && P.keyEq) || ie, hash: (P && P.hash) || c },
      R,
      0
    );
  }),
    (n.empty = n.make());
  var te = (n.isEmpty = function (P) {
    return P && !!E(P._root);
  });
  k.prototype.isEmpty = function () {
    return te(this);
  };
  var Se = (n.modifyHash = function (P, _, N, F) {
    var G = { value: F._size },
      Q = F._root._modify(
        F._editable ? F._edit : NaN,
        F._config.keyEq,
        0,
        P,
        _,
        N,
        G
      );
    return F.setTree(Q, G.value);
  });
  k.prototype.modifyHash = function (P, _, N) {
    return Se(N, P, _, this);
  };
  var ye = (n.modify = function (P, _, N) {
    return Se(P, N._config.hash(_), _, N);
  });
  k.prototype.modify = function (P, _) {
    return ye(_, P, this);
  };
  var be = (n.setHash = function (P, _, N, F) {
    return Se(u(N), P, _, F);
  });
  k.prototype.setHash = function (P, _, N) {
    return be(P, _, N, this);
  };
  var Re = (n.set = function (P, _, N) {
    return be(N._config.hash(P), P, _, N);
  });
  k.prototype.set = function (P, _) {
    return Re(P, _, this);
  };
  var Be = u(s),
    Ue = (n.removeHash = function (P, _, N) {
      return Se(Be, P, _, N);
    });
  k.prototype.removeHash = k.prototype.deleteHash = function (P, _) {
    return Ue(P, _, this);
  };
  var Oe = (n.remove = function (P, _) {
    return Ue(_._config.hash(P), P, _);
  });
  k.prototype.remove = k.prototype.delete = function (P) {
    return Oe(P, this);
  };
  var ge = (n.beginMutation = function (P) {
    return new k(P._editable + 1, P._edit + 1, P._config, P._root, P._size);
  });
  k.prototype.beginMutation = function () {
    return ge(this);
  };
  var jt = (n.endMutation = function (P) {
    return (P._editable = P._editable && P._editable - 1), P;
  });
  k.prototype.endMutation = function () {
    return jt(this);
  };
  var wt = (n.mutate = function (P, _) {
    var N = ge(_);
    return P(N), jt(N);
  });
  k.prototype.mutate = function (P) {
    return wt(P, this);
  };
  var Ze = function (_) {
      return _ && Ct(_[0], _[1], _[2], _[3], _[4]);
    },
    Ct = function (_, N, F, G, Q) {
      for (; F < _; ) {
        var ce = N[F++];
        if (ce && !E(ce)) return It(ce, G, [_, N, F, G, Q]);
      }
      return Ze(Q);
    },
    It = function (_, N, F) {
      switch (_.type) {
        case m:
          return { value: N(_), rest: F };
        case y:
        case C:
        case b:
          var G = _.children;
          return Ct(G.length, G, 0, N, F);
        default:
          return Ze(F);
      }
    },
    zt = { done: !0 };
  function ht(P) {
    this.v = P;
  }
  (ht.prototype.next = function () {
    if (!this.v) return zt;
    var P = this.v;
    return (this.v = Ze(P.rest)), P;
  }),
    (ht.prototype[Symbol.iterator] = function () {
      return this;
    });
  var Je = function (_, N) {
      return new ht(It(_._root, N));
    },
    Zn = function (_) {
      return [_.key, _.value];
    },
    Jn = (n.entries = function (P) {
      return Je(P, Zn);
    });
  k.prototype.entries = k.prototype[Symbol.iterator] = function () {
    return Jn(this);
  };
  var Mn = function (_) {
      return _.key;
    },
    he = (n.keys = function (P) {
      return Je(P, Mn);
    });
  k.prototype.keys = function () {
    return he(this);
  };
  var $ = function (_) {
      return _.value;
    },
    B =
      (n.values =
      k.prototype.values =
        function (P) {
          return Je(P, $);
        });
  k.prototype.values = function () {
    return B(this);
  };
  var K = (n.fold = function (P, _, N) {
    var F = N._root;
    if (F.type === m) return P(_, F.value, F.key);
    for (var G = [F.children], Q = void 0; (Q = G.pop()); )
      for (var ce = 0, ae = Q.length; ce < ae; ) {
        var le = Q[ce++];
        le &&
          le.type &&
          (le.type === m ? (_ = P(_, le.value, le.key)) : G.push(le.children));
      }
    return _;
  });
  k.prototype.fold = function (P, _) {
    return K(P, _, this);
  };
  var ue = (n.forEach = function (P, _) {
    return K(
      function (N, F, G) {
        return P(F, G, _);
      },
      null,
      _
    );
  });
  k.prototype.forEach = function (P) {
    return ue(P, this);
  };
  var de = (n.count = function (P) {
    return P._size;
  });
  (k.prototype.count = function () {
    return de(this);
  }),
    Object.defineProperty(k.prototype, "size", { get: k.prototype.count }),
    e.exports ? (e.exports = n) : ((void 0).hamt = n);
});
class IO {
  constructor(t) {
    Ce(this, "_map", void 0),
      (this._map = new Map(t == null ? void 0 : t.entries()));
  }
  keys() {
    return this._map.keys();
  }
  entries() {
    return this._map.entries();
  }
  get(t) {
    return this._map.get(t);
  }
  has(t) {
    return this._map.has(t);
  }
  set(t, n) {
    return this._map.set(t, n), this;
  }
  delete(t) {
    return this._map.delete(t), this;
  }
  clone() {
    return _m(this);
  }
  toMap() {
    return new Map(this._map);
  }
}
class Tm {
  constructor(t) {
    if ((Ce(this, "_hamt", DO.empty.beginMutation()), t instanceof Tm)) {
      const n = t._hamt.endMutation();
      (t._hamt = n.beginMutation()), (this._hamt = n.beginMutation());
    } else if (t) for (const [n, r] of t.entries()) this._hamt.set(n, r);
  }
  keys() {
    return this._hamt.keys();
  }
  entries() {
    return this._hamt.entries();
  }
  get(t) {
    return this._hamt.get(t);
  }
  has(t) {
    return this._hamt.has(t);
  }
  set(t, n) {
    return this._hamt.set(t, n), this;
  }
  delete(t) {
    return this._hamt.delete(t), this;
  }
  clone() {
    return _m(this);
  }
  toMap() {
    return new Map(this._hamt);
  }
}
function _m(e) {
  return We("recoil_hamt_2020") ? new Tm(e) : new IO(e);
}
var AO = { persistentMap: _m },
  NO = AO.persistentMap,
  OO = Object.freeze({ __proto__: null, persistentMap: NO });
function MO(e, ...t) {
  const n = new Set();
  e: for (const r of e) {
    for (const o of t) if (o.has(r)) continue e;
    n.add(r);
  }
  return n;
}
var xl = MO;
function $O(e, t) {
  const n = new Map();
  return (
    e.forEach((r, o) => {
      n.set(o, t(r, o));
    }),
    n
  );
}
var vc = $O;
function LO() {
  return { nodeDeps: new Map(), nodeToNodeSubscriptions: new Map() };
}
function BO(e) {
  return {
    nodeDeps: vc(e.nodeDeps, (t) => new Set(t)),
    nodeToNodeSubscriptions: vc(e.nodeToNodeSubscriptions, (t) => new Set(t)),
  };
}
function Kf(e, t, n, r) {
  const { nodeDeps: o, nodeToNodeSubscriptions: i } = n,
    a = o.get(e);
  if (a && r && a !== r.nodeDeps.get(e)) return;
  o.set(e, t);
  const l = a == null ? t : xl(t, a);
  for (const s of l) i.has(s) || i.set(s, new Set()), nt(i.get(s)).add(e);
  if (a) {
    const s = xl(a, t);
    for (const u of s) {
      if (!i.has(u)) return;
      const c = nt(i.get(u));
      c.delete(e), c.size === 0 && i.delete(u);
    }
  }
}
function FO(e, t, n, r) {
  var o, i, a, l;
  const s = n.getState();
  r === s.currentTree.version ||
    r === ((o = s.nextTree) === null || o === void 0 ? void 0 : o.version) ||
    (i = s.previousTree) === null ||
    i === void 0 ||
    i.version;
  const u = n.getGraph(r);
  if (
    (Kf(e, t, u),
    r === ((a = s.previousTree) === null || a === void 0 ? void 0 : a.version))
  ) {
    const d = n.getGraph(s.currentTree.version);
    Kf(e, t, d, u);
  }
  if (
    r ===
      ((l = s.previousTree) === null || l === void 0 ? void 0 : l.version) ||
    r === s.currentTree.version
  ) {
    var c;
    const d = (c = s.nextTree) === null || c === void 0 ? void 0 : c.version;
    if (d !== void 0) {
      const f = n.getGraph(d);
      Kf(e, t, f, u);
    }
  }
}
var bs = { cloneGraph: BO, graph: LO, saveDepsToStore: FO };
let jO = 0;
const zO = () => jO++;
let UO = 0;
const VO = () => UO++;
let WO = 0;
const HO = () => WO++;
var Td = {
  getNextTreeStateVersion: zO,
  getNextStoreID: VO,
  getNextComponentID: HO,
};
const { persistentMap: L0 } = OO,
  { graph: GO } = bs,
  { getNextTreeStateVersion: Hw } = Td;
function Gw() {
  const e = Hw();
  return {
    version: e,
    stateID: e,
    transactionMetadata: {},
    dirtyAtoms: new Set(),
    atomValues: L0(),
    nonvalidatedAtoms: L0(),
  };
}
function KO() {
  const e = Gw();
  return {
    currentTree: e,
    nextTree: null,
    previousTree: null,
    commitDepth: 0,
    knownAtoms: new Set(),
    knownSelectors: new Set(),
    transactionSubscriptions: new Map(),
    nodeTransactionSubscriptions: new Map(),
    nodeToComponentSubscriptions: new Map(),
    queuedComponentCallbacks_DEPRECATED: [],
    suspendedComponentResolvers: new Set(),
    graphsByVersion: new Map().set(e.version, GO()),
    retention: {
      referenceCounts: new Map(),
      nodesRetainedByZone: new Map(),
      retainablesToCheckForRelease: new Set(),
    },
    nodeCleanupFunctions: new Map(),
  };
}
var Kw = {
  makeEmptyTreeState: Gw,
  makeEmptyStoreState: KO,
  getNextTreeStateVersion: Hw,
};
class qw {}
function qO() {
  return new qw();
}
var _d = { RetentionZone: qw, retentionZone: qO };
function YO(e, t) {
  const n = new Set(e);
  return n.add(t), n;
}
function XO(e, t) {
  const n = new Set(e);
  return n.delete(t), n;
}
function QO(e, t, n) {
  const r = new Map(e);
  return r.set(t, n), r;
}
function ZO(e, t, n) {
  const r = new Map(e);
  return r.set(t, n(r.get(t))), r;
}
function JO(e, t) {
  const n = new Map(e);
  return n.delete(t), n;
}
function eM(e, t) {
  const n = new Map(e);
  return t.forEach((r) => n.delete(r)), n;
}
var Yw = {
  setByAddingToSet: YO,
  setByDeletingFromSet: XO,
  mapBySettingInMap: QO,
  mapByUpdatingInMap: ZO,
  mapByDeletingFromMap: JO,
  mapByDeletingMultipleFromMap: eM,
};
function* tM(e, t) {
  let n = 0;
  for (const r of e) t(r, n++) && (yield r);
}
var Pm = tM;
function nM(e, t) {
  return new Proxy(e, {
    get: (r, o) => (!(o in r) && o in t && (r[o] = t[o]()), r[o]),
    ownKeys: (r) => Object.keys(r),
  });
}
var Xw = nM;
const { getNode: xs, getNodeMaybe: rM, recoilValuesForKeys: B0 } = bn,
  { RetentionZone: F0 } = _d,
  { setByAddingToSet: oM } = Yw,
  iM = Object.freeze(new Set());
class aM extends Error {}
function lM(e, t, n) {
  if (!We("recoil_memory_managament_2020")) return () => {};
  const { nodesRetainedByZone: r } = e.getState().retention;
  function o(i) {
    let a = r.get(i);
    a || r.set(i, (a = new Set())), a.add(t);
  }
  if (n instanceof F0) o(n);
  else if (Array.isArray(n)) for (const i of n) o(i);
  return () => {
    if (!We("recoil_memory_managament_2020")) return;
    const { retention: i } = e.getState();
    function a(l) {
      const s = i.nodesRetainedByZone.get(l);
      s == null || s.delete(t),
        s && s.size === 0 && i.nodesRetainedByZone.delete(l);
    }
    if (n instanceof F0) a(n);
    else if (Array.isArray(n)) for (const l of n) a(l);
  };
}
function km(e, t, n, r) {
  const o = e.getState();
  if (o.nodeCleanupFunctions.has(n)) return;
  const i = xs(n),
    a = lM(e, n, i.retainedBy),
    l = i.init(e, t, r);
  o.nodeCleanupFunctions.set(n, () => {
    l(), a();
  });
}
function sM(e, t, n) {
  km(e, e.getState().currentTree, t, n);
}
function uM(e, t) {
  var n;
  const r = e.getState();
  (n = r.nodeCleanupFunctions.get(t)) === null || n === void 0 || n(),
    r.nodeCleanupFunctions.delete(t);
}
function cM(e, t, n) {
  return km(e, t, n, "get"), xs(n).get(e, t);
}
function Qw(e, t, n) {
  return xs(n).peek(e, t);
}
function dM(e, t, n) {
  var r;
  const o = rM(t);
  return (
    o == null || (r = o.invalidate) === null || r === void 0 || r.call(o, e),
    {
      ...e,
      atomValues: e.atomValues.clone().delete(t),
      nonvalidatedAtoms: e.nonvalidatedAtoms.clone().set(t, n),
      dirtyAtoms: oM(e.dirtyAtoms, t),
    }
  );
}
function fM(e, t, n, r) {
  const o = xs(n);
  if (o.set == null) throw new aM(`Attempt to set read-only RecoilValue: ${n}`);
  const i = o.set;
  return km(e, t, n, "set"), i(e, t, r);
}
function pM(e, t, n) {
  const r = e.getState(),
    o = e.getGraph(t.version),
    i = xs(n).nodeType;
  return Xw(
    { type: i },
    {
      loadable: () => Qw(e, t, n),
      isActive: () => r.knownAtoms.has(n) || r.knownSelectors.has(n),
      isSet: () => (i === "selector" ? !1 : t.atomValues.has(n)),
      isModified: () => t.dirtyAtoms.has(n),
      deps: () => {
        var a;
        return B0((a = o.nodeDeps.get(n)) !== null && a !== void 0 ? a : []);
      },
      subscribers: () => {
        var a, l;
        return {
          nodes: B0(Pm(Zw(e, t, new Set([n])), (s) => s !== n)),
          components: Ed(
            (a =
              (l = r.nodeToComponentSubscriptions.get(n)) === null ||
              l === void 0
                ? void 0
                : l.values()) !== null && a !== void 0
              ? a
              : [],
            ([s]) => ({ name: s })
          ),
        };
      },
    }
  );
}
function Zw(e, t, n) {
  const r = new Set(),
    o = Array.from(n),
    i = e.getGraph(t.version);
  for (let l = o.pop(); l; l = o.pop()) {
    var a;
    r.add(l);
    const s =
      (a = i.nodeToNodeSubscriptions.get(l)) !== null && a !== void 0 ? a : iM;
    for (const u of s) r.has(u) || o.push(u);
  }
  return r;
}
var Po = {
  getNodeLoadable: cM,
  peekNodeLoadable: Qw,
  setNodeValue: fM,
  initializeNode: sM,
  cleanUpNode: uM,
  setUnvalidatedAtomValue_DEPRECATED: dM,
  peekNodeInfo: pM,
  getDownstreamNodes: Zw,
};
let Jw = null;
function vM(e) {
  Jw = e;
}
function hM() {
  var e;
  (e = Jw) === null || e === void 0 || e();
}
var eC = { setInvalidateMemoizedSnapshot: vM, invalidateMemoizedSnapshot: hM };
const { getDownstreamNodes: mM, getNodeLoadable: tC, setNodeValue: gM } = Po,
  { getNextComponentID: yM } = Td,
  { getNode: bM, getNodeMaybe: nC } = bn,
  { DefaultValue: Dm } = bn,
  { reactMode: xM } = ys,
  {
    AbstractRecoilValue: SM,
    RecoilState: wM,
    RecoilValueReadOnly: CM,
    isRecoilValue: RM,
  } = ua,
  { invalidateMemoizedSnapshot: EM } = eC;
function TM(e, { key: t }, n = e.getState().currentTree) {
  var r, o;
  const i = e.getState();
  n.version === i.currentTree.version ||
    n.version ===
      ((r = i.nextTree) === null || r === void 0 ? void 0 : r.version) ||
    (n.version, (o = i.previousTree) === null || o === void 0 || o.version);
  const a = tC(e, n, t);
  return a.state === "loading" && a.contents.catch(() => {}), a;
}
function _M(e, t) {
  const n = e.clone();
  return (
    t.forEach((r, o) => {
      r.state === "hasValue" && r.contents instanceof Dm
        ? n.delete(o)
        : n.set(o, r);
    }),
    n
  );
}
function PM(e, t, { key: n }, r) {
  if (typeof r == "function") {
    const o = tC(e, t, n);
    if (o.state === "loading") {
      const i = `Tried to set atom or selector "${n}" using an updater function while the current state is pending, this is not currently supported.`;
      throw Te(i);
    } else if (o.state === "hasError") throw o.contents;
    return r(o.contents);
  } else return r;
}
function kM(e, t, n) {
  if (n.type === "set") {
    const { recoilValue: o, valueOrUpdater: i } = n,
      a = PM(e, t, o, i),
      l = gM(e, t, o.key, a);
    for (const [s, u] of l.entries()) _v(t, s, u);
  } else if (n.type === "setLoadable") {
    const {
      recoilValue: { key: o },
      loadable: i,
    } = n;
    _v(t, o, i);
  } else if (n.type === "markModified") {
    const {
      recoilValue: { key: o },
    } = n;
    t.dirtyAtoms.add(o);
  } else if (n.type === "setUnvalidated") {
    var r;
    const {
        recoilValue: { key: o },
        unvalidatedValue: i,
      } = n,
      a = nC(o);
    a == null || (r = a.invalidate) === null || r === void 0 || r.call(a, t),
      t.atomValues.delete(o),
      t.nonvalidatedAtoms.set(o, i),
      t.dirtyAtoms.add(o);
  } else Cm(`Unknown action ${n.type}`);
}
function _v(e, t, n) {
  n.state === "hasValue" && n.contents instanceof Dm
    ? e.atomValues.delete(t)
    : e.atomValues.set(t, n),
    e.dirtyAtoms.add(t),
    e.nonvalidatedAtoms.delete(t);
}
function rC(e, t) {
  e.replaceState((n) => {
    const r = oC(n);
    for (const o of t) kM(e, r, o);
    return iC(e, r), EM(), r;
  });
}
function Pd(e, t) {
  if (Sl.length) {
    const n = Sl[Sl.length - 1];
    let r = n.get(e);
    r || n.set(e, (r = [])), r.push(t);
  } else rC(e, [t]);
}
const Sl = [];
function DM() {
  const e = new Map();
  return (
    Sl.push(e),
    () => {
      for (const [t, n] of e) rC(t, n);
      Sl.pop();
    }
  );
}
function oC(e) {
  return {
    ...e,
    atomValues: e.atomValues.clone(),
    nonvalidatedAtoms: e.nonvalidatedAtoms.clone(),
    dirtyAtoms: new Set(e.dirtyAtoms),
  };
}
function iC(e, t) {
  const n = mM(e, t, t.dirtyAtoms);
  for (const i of n) {
    var r, o;
    (r = nC(i)) === null ||
      r === void 0 ||
      (o = r.invalidate) === null ||
      o === void 0 ||
      o.call(r, t);
  }
}
function aC(e, t, n) {
  Pd(e, { type: "set", recoilValue: t, valueOrUpdater: n });
}
function IM(e, t, n) {
  if (n instanceof Dm) return aC(e, t, n);
  Pd(e, { type: "setLoadable", recoilValue: t, loadable: n });
}
function AM(e, t) {
  Pd(e, { type: "markModified", recoilValue: t });
}
function NM(e, t, n) {
  Pd(e, { type: "setUnvalidated", recoilValue: t, unvalidatedValue: n });
}
function OM(e, { key: t }, n, r = null) {
  const o = yM(),
    i = e.getState();
  i.nodeToComponentSubscriptions.has(t) ||
    i.nodeToComponentSubscriptions.set(t, new Map()),
    nt(i.nodeToComponentSubscriptions.get(t)).set(o, [
      r ?? "<not captured>",
      n,
    ]);
  const a = xM();
  if (a.early && (a.mode === "LEGACY" || a.mode === "MUTABLE_SOURCE")) {
    const l = e.getState().nextTree;
    l && l.dirtyAtoms.has(t) && n(l);
  }
  return {
    release: () => {
      const l = e.getState(),
        s = l.nodeToComponentSubscriptions.get(t);
      s === void 0 ||
        !s.has(o) ||
        (s.delete(o), s.size === 0 && l.nodeToComponentSubscriptions.delete(t));
    },
  };
}
function MM(e, t) {
  var n;
  const { currentTree: r } = e.getState(),
    o = bM(t.key);
  (n = o.clearCache) === null || n === void 0 || n.call(o, e, r);
}
var _r = {
  RecoilValueReadOnly: CM,
  AbstractRecoilValue: SM,
  RecoilState: wM,
  getRecoilValueAsLoadable: TM,
  setRecoilValue: aC,
  setRecoilValueLoadable: IM,
  markRecoilValueModified: AM,
  setUnvalidatedRecoilValue: NM,
  subscribeToRecoilValue: OM,
  isRecoilValue: RM,
  applyAtomValueWrites: _M,
  batchStart: DM,
  writeLoadableToTreeState: _v,
  invalidateDownstreams: iC,
  copyTreeState: oC,
  refreshRecoilValue: MM,
};
function $M(e, t, n) {
  const r = e.entries();
  let o = r.next();
  for (; !o.done; ) {
    const i = o.value;
    if (t.call(n, i[1], i[0], e)) return !0;
    o = r.next();
  }
  return !1;
}
var LM = $M;
const { cleanUpNode: BM } = Po,
  { deleteNodeConfigIfPossible: FM, getNode: lC } = bn,
  { RetentionZone: sC } = _d,
  jM = 12e4,
  uC = new Set();
function cC(e, t) {
  const n = e.getState(),
    r = n.currentTree;
  if (n.nextTree) return;
  const o = new Set();
  for (const a of t)
    if (a instanceof sC) for (const l of WM(n, a)) o.add(l);
    else o.add(a);
  const i = zM(e, o);
  for (const a of i) VM(e, r, a);
}
function zM(e, t) {
  const n = e.getState(),
    r = n.currentTree,
    o = e.getGraph(r.version),
    i = new Set(),
    a = new Set();
  return l(t), i;
  function l(s) {
    const u = new Set(),
      c = UM(e, r, s, i, a);
    for (const h of c) {
      var d;
      if (lC(h).retainedBy === "recoilRoot") {
        a.add(h);
        continue;
      }
      if (
        ((d = n.retention.referenceCounts.get(h)) !== null && d !== void 0
          ? d
          : 0) > 0
      ) {
        a.add(h);
        continue;
      }
      if (dC(h).some((x) => n.retention.referenceCounts.get(x))) {
        a.add(h);
        continue;
      }
      const g = o.nodeToNodeSubscriptions.get(h);
      if (g && LM(g, (x) => a.has(x))) {
        a.add(h);
        continue;
      }
      i.add(h), u.add(h);
    }
    const f = new Set();
    for (const h of u)
      for (const g of (p = o.nodeDeps.get(h)) !== null && p !== void 0
        ? p
        : uC) {
        var p;
        i.has(g) || f.add(g);
      }
    f.size && l(f);
  }
}
function UM(e, t, n, r, o) {
  const i = e.getGraph(t.version),
    a = [],
    l = new Set();
  for (; n.size > 0; ) s(nt(n.values().next().value));
  return a;
  function s(u) {
    if (r.has(u) || o.has(u)) {
      n.delete(u);
      return;
    }
    if (l.has(u)) return;
    const c = i.nodeToNodeSubscriptions.get(u);
    if (c) for (const d of c) s(d);
    l.add(u), n.delete(u), a.push(u);
  }
}
function VM(e, t, n) {
  if (!We("recoil_memory_managament_2020")) return;
  BM(e, n);
  const r = e.getState();
  r.knownAtoms.delete(n),
    r.knownSelectors.delete(n),
    r.nodeTransactionSubscriptions.delete(n),
    r.retention.referenceCounts.delete(n);
  const o = dC(n);
  for (const s of o) {
    var i;
    (i = r.retention.nodesRetainedByZone.get(s)) === null ||
      i === void 0 ||
      i.delete(n);
  }
  t.atomValues.delete(n), t.dirtyAtoms.delete(n), t.nonvalidatedAtoms.delete(n);
  const a = r.graphsByVersion.get(t.version);
  if (a) {
    const s = a.nodeDeps.get(n);
    if (s !== void 0) {
      a.nodeDeps.delete(n);
      for (const u of s) {
        var l;
        (l = a.nodeToNodeSubscriptions.get(u)) === null ||
          l === void 0 ||
          l.delete(n);
      }
    }
    a.nodeToNodeSubscriptions.delete(n);
  }
  FM(n);
}
function WM(e, t) {
  var n;
  return (n = e.retention.nodesRetainedByZone.get(t)) !== null && n !== void 0
    ? n
    : uC;
}
function dC(e) {
  const t = lC(e).retainedBy;
  return t === void 0 || t === "components" || t === "recoilRoot"
    ? []
    : t instanceof sC
    ? [t]
    : t;
}
function HM(e, t) {
  const n = e.getState();
  n.nextTree
    ? n.retention.retainablesToCheckForRelease.add(t)
    : cC(e, new Set([t]));
}
function GM(e, t, n) {
  var r;
  if (!We("recoil_memory_managament_2020")) return;
  const o = e.getState().retention.referenceCounts,
    i = ((r = o.get(t)) !== null && r !== void 0 ? r : 0) + n;
  i === 0 ? fC(e, t) : o.set(t, i);
}
function fC(e, t) {
  if (!We("recoil_memory_managament_2020")) return;
  e.getState().retention.referenceCounts.delete(t), HM(e, t);
}
function KM(e) {
  if (!We("recoil_memory_managament_2020")) return;
  const t = e.getState();
  cC(e, t.retention.retainablesToCheckForRelease),
    t.retention.retainablesToCheckForRelease.clear();
}
function qM(e) {
  return e === void 0 ? "recoilRoot" : e;
}
var si = {
  SUSPENSE_TIMEOUT_MS: jM,
  updateRetainCount: GM,
  updateRetainCountToZero: fC,
  releaseScheduledRetainablesNow: KM,
  retainedByOptionWithDefault: qM,
};
const { unstable_batchedUpdates: YM } = Mi;
var XM = { unstable_batchedUpdates: YM };
const { unstable_batchedUpdates: QM } = XM;
var ZM = { unstable_batchedUpdates: QM };
const { batchStart: JM } = _r,
  { unstable_batchedUpdates: e$ } = ZM;
let Im = e$ || ((e) => e());
const t$ = (e) => {
    Im = e;
  },
  n$ = () => Im,
  r$ = (e) => {
    Im(() => {
      let t = () => {};
      try {
        (t = JM()), e();
      } finally {
        t();
      }
    });
  };
var kd = { getBatcher: n$, setBatcher: t$, batchUpdates: r$ };
function* o$(e) {
  for (const t of e) for (const n of t) yield n;
}
var pC = o$;
const vC = typeof Window > "u" || typeof window > "u",
  i$ = (e) => !vC && (e === window || e instanceof Window),
  a$ = typeof navigator < "u" && navigator.product === "ReactNative";
var Dd = { isSSR: vC, isReactNative: a$, isWindow: i$ };
function l$(e, t) {
  let n;
  return (...r) => {
    n || (n = {});
    const o = t(...r);
    return Object.hasOwnProperty.call(n, o) || (n[o] = e(...r)), n[o];
  };
}
function s$(e, t) {
  let n, r;
  return (...o) => {
    const i = t(...o);
    return n === i || ((n = i), (r = e(...o))), r;
  };
}
function u$(e, t) {
  let n, r;
  return [
    (...a) => {
      const l = t(...a);
      return n === l || ((n = l), (r = e(...a))), r;
    },
    () => {
      n = null;
    },
  ];
}
var c$ = {
  memoizeWithArgsHash: l$,
  memoizeOneWithArgsHash: s$,
  memoizeOneWithArgsHashAndInvalidation: u$,
};
const { batchUpdates: Pv } = kd,
  { initializeNode: d$, peekNodeInfo: f$ } = Po,
  { graph: p$ } = bs,
  { getNextStoreID: v$ } = Td,
  { DEFAULT_VALUE: h$, recoilValues: j0, recoilValuesForKeys: z0 } = bn,
  {
    AbstractRecoilValue: m$,
    getRecoilValueAsLoadable: g$,
    setRecoilValue: U0,
    setUnvalidatedRecoilValue: y$,
  } = _r,
  { updateRetainCount: Mu } = si,
  { setInvalidateMemoizedSnapshot: b$ } = eC,
  { getNextTreeStateVersion: x$, makeEmptyStoreState: S$ } = Kw,
  { isSSR: w$ } = Dd,
  { memoizeOneWithArgsHashAndInvalidation: C$ } = c$;
class Id {
  constructor(t, n) {
    Ce(this, "_store", void 0),
      Ce(this, "_refCount", 1),
      Ce(
        this,
        "getLoadable",
        (r) => (this.checkRefCount_INTERNAL(), g$(this._store, r))
      ),
      Ce(
        this,
        "getPromise",
        (r) => (this.checkRefCount_INTERNAL(), this.getLoadable(r).toPromise())
      ),
      Ce(this, "getNodes_UNSTABLE", (r) => {
        if (
          (this.checkRefCount_INTERNAL(),
          (r == null ? void 0 : r.isModified) === !0)
        ) {
          if ((r == null ? void 0 : r.isInitialized) === !1) return [];
          const a = this._store.getState().currentTree;
          return z0(a.dirtyAtoms);
        }
        const o = this._store.getState().knownAtoms,
          i = this._store.getState().knownSelectors;
        return (r == null ? void 0 : r.isInitialized) == null
          ? j0.values()
          : r.isInitialized === !0
          ? z0(pC([o, i]))
          : Pm(j0.values(), ({ key: a }) => !o.has(a) && !i.has(a));
      }),
      Ce(
        this,
        "getInfo_UNSTABLE",
        ({ key: r }) => (
          this.checkRefCount_INTERNAL(),
          f$(this._store, this._store.getState().currentTree, r)
        )
      ),
      Ce(this, "map", (r) => {
        this.checkRefCount_INTERNAL();
        const o = new kv(this, Pv);
        return r(o), o;
      }),
      Ce(this, "asyncMap", async (r) => {
        this.checkRefCount_INTERNAL();
        const o = new kv(this, Pv);
        return o.retain(), await r(o), o.autoRelease_INTERNAL(), o;
      }),
      (this._store = {
        storeID: v$(),
        parentStoreID: n,
        getState: () => t,
        replaceState: (r) => {
          t.currentTree = r(t.currentTree);
        },
        getGraph: (r) => {
          const o = t.graphsByVersion;
          if (o.has(r)) return nt(o.get(r));
          const i = p$();
          return o.set(r, i), i;
        },
        subscribeToTransactions: () => ({ release: () => {} }),
        addTransactionMetadata: () => {
          throw Te("Cannot subscribe to Snapshots");
        },
      });
    for (const r of this._store.getState().knownAtoms)
      d$(this._store, r, "get"), Mu(this._store, r, 1);
    this.autoRelease_INTERNAL();
  }
  retain() {
    this._refCount <= 0, this._refCount++;
    let t = !1;
    return () => {
      t || ((t = !0), this._release());
    };
  }
  autoRelease_INTERNAL() {
    w$ || window.setTimeout(() => this._release(), 10);
  }
  _release() {
    if ((this._refCount--, this._refCount === 0)) {
      if (
        (this._store.getState().nodeCleanupFunctions.forEach((t) => t()),
        this._store.getState().nodeCleanupFunctions.clear(),
        !We("recoil_memory_managament_2020"))
      )
        return;
    } else this._refCount < 0;
  }
  isRetained() {
    return this._refCount > 0;
  }
  checkRefCount_INTERNAL() {
    We("recoil_memory_managament_2020") && this._refCount <= 0;
  }
  getStore_INTERNAL() {
    return this.checkRefCount_INTERNAL(), this._store;
  }
  getID() {
    return (
      this.checkRefCount_INTERNAL(), this._store.getState().currentTree.stateID
    );
  }
  getStoreID() {
    return this.checkRefCount_INTERNAL(), this._store.storeID;
  }
}
function hC(e, t, n = !1) {
  const r = e.getState(),
    o = n ? x$() : t.version;
  return {
    currentTree: {
      version: n ? o : t.version,
      stateID: n ? o : t.stateID,
      transactionMetadata: { ...t.transactionMetadata },
      dirtyAtoms: new Set(t.dirtyAtoms),
      atomValues: t.atomValues.clone(),
      nonvalidatedAtoms: t.nonvalidatedAtoms.clone(),
    },
    commitDepth: 0,
    nextTree: null,
    previousTree: null,
    knownAtoms: new Set(r.knownAtoms),
    knownSelectors: new Set(r.knownSelectors),
    transactionSubscriptions: new Map(),
    nodeTransactionSubscriptions: new Map(),
    nodeToComponentSubscriptions: new Map(),
    queuedComponentCallbacks_DEPRECATED: [],
    suspendedComponentResolvers: new Set(),
    graphsByVersion: new Map().set(o, e.getGraph(t.version)),
    retention: {
      referenceCounts: new Map(),
      nodesRetainedByZone: new Map(),
      retainablesToCheckForRelease: new Set(),
    },
    nodeCleanupFunctions: new Map(
      Ed(r.nodeCleanupFunctions.entries(), ([i]) => [i, () => {}])
    ),
  };
}
function R$(e) {
  const t = new Id(S$());
  return e != null ? t.map(e) : t;
}
const [V0, mC] = C$(
  (e, t) => {
    var n;
    const r = e.getState(),
      o =
        t === "latest"
          ? (n = r.nextTree) !== null && n !== void 0
            ? n
            : r.currentTree
          : nt(r.previousTree);
    return new Id(hC(e, o), e.storeID);
  },
  (e, t) => {
    var n, r;
    return (
      String(t) +
      String(e.storeID) +
      String(
        (n = e.getState().nextTree) === null || n === void 0
          ? void 0
          : n.version
      ) +
      String(e.getState().currentTree.version) +
      String(
        (r = e.getState().previousTree) === null || r === void 0
          ? void 0
          : r.version
      )
    );
  }
);
b$(mC);
function E$(e, t = "latest") {
  const n = V0(e, t);
  return n.isRetained() ? n : (mC(), V0(e, t));
}
class kv extends Id {
  constructor(t, n) {
    super(
      hC(
        t.getStore_INTERNAL(),
        t.getStore_INTERNAL().getState().currentTree,
        !0
      ),
      t.getStoreID()
    ),
      Ce(this, "_batch", void 0),
      Ce(this, "set", (r, o) => {
        this.checkRefCount_INTERNAL();
        const i = this.getStore_INTERNAL();
        this._batch(() => {
          Mu(i, r.key, 1), U0(this.getStore_INTERNAL(), r, o);
        });
      }),
      Ce(this, "reset", (r) => {
        this.checkRefCount_INTERNAL();
        const o = this.getStore_INTERNAL();
        this._batch(() => {
          Mu(o, r.key, 1), U0(this.getStore_INTERNAL(), r, h$);
        });
      }),
      Ce(this, "setUnvalidatedAtomValues_DEPRECATED", (r) => {
        this.checkRefCount_INTERNAL();
        const o = this.getStore_INTERNAL();
        Pv(() => {
          for (const [i, a] of r.entries()) Mu(o, i, 1), y$(o, new m$(i), a);
        });
      }),
      (this._batch = n);
  }
}
var Ad = {
    Snapshot: Id,
    MutableSnapshot: kv,
    freshSnapshot: R$,
    cloneSnapshot: E$,
  },
  T$ = Ad.Snapshot,
  _$ = Ad.MutableSnapshot,
  P$ = Ad.freshSnapshot,
  k$ = Ad.cloneSnapshot,
  Nd = Object.freeze({
    __proto__: null,
    Snapshot: T$,
    MutableSnapshot: _$,
    freshSnapshot: P$,
    cloneSnapshot: k$,
  });
function D$(...e) {
  const t = new Set();
  for (const n of e) for (const r of n) t.add(r);
  return t;
}
var I$ = D$;
const { useRef: A$ } = oe;
function N$(e) {
  const t = A$(e);
  return t.current === e && typeof e == "function" && (t.current = e()), t;
}
var W0 = N$;
const { getNextTreeStateVersion: O$, makeEmptyStoreState: gC } = Kw,
  {
    cleanUpNode: M$,
    getDownstreamNodes: $$,
    initializeNode: L$,
    setNodeValue: B$,
    setUnvalidatedAtomValue_DEPRECATED: F$,
  } = Po,
  { graph: j$ } = bs,
  { cloneGraph: z$ } = bs,
  { getNextStoreID: yC } = Td,
  { createMutableSource: qf, reactMode: bC } = ys,
  { applyAtomValueWrites: U$ } = _r,
  { releaseScheduledRetainablesNow: xC } = si,
  { freshSnapshot: V$ } = Nd,
  {
    useCallback: W$,
    useContext: SC,
    useEffect: Dv,
    useMemo: H$,
    useRef: G$,
    useState: K$,
  } = oe;
function Fa() {
  throw Te("This component must be used inside a <RecoilRoot> component.");
}
const wC = Object.freeze({
  storeID: yC(),
  getState: Fa,
  replaceState: Fa,
  getGraph: Fa,
  subscribeToTransactions: Fa,
  addTransactionMetadata: Fa,
});
let Iv = !1;
function H0(e) {
  if (Iv)
    throw Te(
      "An atom update was triggered within the execution of a state updater function. State updater functions provided to Recoil must be pure functions."
    );
  const t = e.getState();
  if (t.nextTree === null) {
    We("recoil_memory_managament_2020") &&
      We("recoil_release_on_cascading_update_killswitch_2021") &&
      t.commitDepth > 0 &&
      xC(e);
    const n = t.currentTree.version,
      r = O$();
    (t.nextTree = {
      ...t.currentTree,
      version: r,
      stateID: r,
      dirtyAtoms: new Set(),
      transactionMetadata: {},
    }),
      t.graphsByVersion.set(r, z$(nt(t.graphsByVersion.get(n))));
  }
}
const CC = oe.createContext({ current: wC }),
  Od = () => SC(CC),
  RC = oe.createContext(null);
function q$() {
  return SC(RC);
}
function Am(e, t, n) {
  const r = $$(e, n, n.dirtyAtoms);
  for (const o of r) {
    const i = t.nodeToComponentSubscriptions.get(o);
    if (i) for (const [a, [l, s]] of i) s(n);
  }
}
function EC(e) {
  const t = e.getState(),
    n = t.currentTree,
    r = n.dirtyAtoms;
  if (r.size) {
    for (const [o, i] of t.nodeTransactionSubscriptions)
      if (r.has(o)) for (const [a, l] of i) l(e);
    for (const [o, i] of t.transactionSubscriptions) i(e);
    (!bC().early || t.suspendedComponentResolvers.size > 0) &&
      (Am(e, t, n),
      t.suspendedComponentResolvers.forEach((o) => o()),
      t.suspendedComponentResolvers.clear());
  }
  t.queuedComponentCallbacks_DEPRECATED.forEach((o) => o(n)),
    t.queuedComponentCallbacks_DEPRECATED.splice(
      0,
      t.queuedComponentCallbacks_DEPRECATED.length
    );
}
function Y$(e) {
  const t = e.getState();
  t.commitDepth++;
  try {
    const { nextTree: n } = t;
    if (n == null) return;
    (t.previousTree = t.currentTree),
      (t.currentTree = n),
      (t.nextTree = null),
      EC(e),
      t.previousTree != null
        ? t.graphsByVersion.delete(t.previousTree.version)
        : Cm(
            "Ended batch with no previous state, which is unexpected",
            "recoil"
          ),
      (t.previousTree = null),
      We("recoil_memory_managament_2020") && n == null && xC(e);
  } finally {
    t.commitDepth--;
  }
}
function X$({ setNotifyBatcherOfChange: e }) {
  const t = Od(),
    [, n] = K$([]);
  return (
    e(() => n({})),
    Dv(
      () => (
        e(() => n({})),
        () => {
          e(() => {});
        }
      ),
      [e]
    ),
    Dv(() => {
      PO.enqueueExecution("Batcher", () => {
        Y$(t.current);
      });
    }),
    null
  );
}
function Q$(e, t) {
  const n = gC();
  return (
    t({
      set: (r, o) => {
        const i = n.currentTree,
          a = B$(e, i, r.key, o),
          l = new Set(a.keys()),
          s = i.nonvalidatedAtoms.clone();
        for (const u of l) s.delete(u);
        n.currentTree = {
          ...i,
          dirtyAtoms: I$(i.dirtyAtoms, l),
          atomValues: U$(i.atomValues, a),
          nonvalidatedAtoms: s,
        };
      },
      setUnvalidatedAtomValues: (r) => {
        r.forEach((o, i) => {
          n.currentTree = F$(n.currentTree, i, o);
        });
      },
    }),
    n
  );
}
function Z$(e) {
  const t = V$(e),
    n = t.getStore_INTERNAL().getState();
  return (
    t.retain(),
    n.nodeCleanupFunctions.forEach((r) => r()),
    n.nodeCleanupFunctions.clear(),
    n
  );
}
let G0 = 0;
function J$({
  initializeState_DEPRECATED: e,
  initializeState: t,
  store_INTERNAL: n,
  children: r,
}) {
  let o;
  const i = (p) => {
      const h = o.current.graphsByVersion;
      if (h.has(p)) return nt(h.get(p));
      const g = j$();
      return h.set(p, g), g;
    },
    a = (p, h) => {
      if (h == null) {
        const { transactionSubscriptions: g } = d.current.getState(),
          x = G0++;
        return (
          g.set(x, p),
          {
            release: () => {
              g.delete(x);
            },
          }
        );
      } else {
        const { nodeTransactionSubscriptions: g } = d.current.getState();
        g.has(h) || g.set(h, new Map());
        const x = G0++;
        return (
          nt(g.get(h)).set(x, p),
          {
            release: () => {
              const v = g.get(h);
              v && (v.delete(x), v.size === 0 && g.delete(h));
            },
          }
        );
      }
    },
    l = (p) => {
      H0(d.current);
      for (const h of Object.keys(p))
        nt(d.current.getState().nextTree).transactionMetadata[h] = p[h];
    },
    s = (p) => {
      H0(d.current);
      const h = nt(o.current.nextTree);
      let g;
      try {
        (Iv = !0), (g = p(h));
      } finally {
        Iv = !1;
      }
      g !== h &&
        ((o.current.nextTree = g),
        bC().early && Am(d.current, o.current, g),
        nt(u.current)());
    },
    u = G$(null),
    c = W$(
      (p) => {
        u.current = p;
      },
      [u]
    ),
    d = W0(
      () =>
        n ?? {
          storeID: yC(),
          getState: () => o.current,
          replaceState: s,
          getGraph: i,
          subscribeToTransactions: a,
          addTransactionMetadata: l,
        }
    );
  n != null && (d.current = n),
    (o = W0(() => (e != null ? Q$(d.current, e) : t != null ? Z$(t) : gC())));
  const f = H$(
    () => (qf == null ? void 0 : qf(o, () => o.current.currentTree.version)),
    [o]
  );
  return (
    Dv(() => {
      const p = d.current;
      for (const h of new Set(p.getState().knownAtoms)) L$(p, h, "get");
      return () => {
        for (const h of p.getState().knownAtoms) M$(p, h);
      };
    }, [d]),
    oe.createElement(
      CC.Provider,
      { value: d },
      oe.createElement(
        RC.Provider,
        { value: f },
        oe.createElement(X$, { setNotifyBatcherOfChange: c }),
        r
      )
    )
  );
}
function e3(e) {
  const { override: t, ...n } = e,
    r = Od();
  return t === !1 && r.current !== wC ? e.children : oe.createElement(J$, n);
}
function t3() {
  return Od().current.storeID;
}
var Hr = {
  RecoilRoot: e3,
  useStoreRef: Od,
  useRecoilMutableSource: q$,
  useRecoilStoreID: t3,
  notifyComponents_FOR_TESTING: Am,
  sendEndOfBatchNotifications_FOR_TESTING: EC,
};
function n3(e, t) {
  if (e === t) return !0;
  if (e.length !== t.length) return !1;
  for (let n = 0, r = e.length; n < r; n++) if (e[n] !== t[n]) return !1;
  return !0;
}
var r3 = n3;
const { useEffect: o3, useRef: i3 } = oe;
function a3(e) {
  const t = i3();
  return (
    o3(() => {
      t.current = e;
    }),
    t.current
  );
}
var TC = a3;
const { useStoreRef: l3 } = Hr,
  { SUSPENSE_TIMEOUT_MS: s3 } = si,
  { updateRetainCount: ja } = si,
  { RetentionZone: u3 } = _d,
  { useEffect: c3, useRef: d3 } = oe,
  { isSSR: K0 } = Dd;
function f3(e) {
  if (We("recoil_memory_managament_2020")) return p3(e);
}
function p3(e) {
  const n = (Array.isArray(e) ? e : [e]).map((a) =>
      a instanceof u3 ? a : a.key
    ),
    r = l3();
  c3(() => {
    if (!We("recoil_memory_managament_2020")) return;
    const a = r.current;
    if (o.current && !K0) window.clearTimeout(o.current), (o.current = null);
    else for (const l of n) ja(a, l, 1);
    return () => {
      for (const l of n) ja(a, l, -1);
    };
  }, [r, ...n]);
  const o = d3(),
    i = TC(n);
  if (!K0 && (i === void 0 || !r3(i, n))) {
    const a = r.current;
    for (const l of n) ja(a, l, 1);
    if (i) for (const l of i) ja(a, l, -1);
    o.current && window.clearTimeout(o.current),
      (o.current = window.setTimeout(() => {
        o.current = null;
        for (const l of n) ja(a, l, -1);
      }, s3));
  }
}
var Nm = f3;
function v3() {
  return "<component name not available>";
}
var Ss = v3;
const { batchUpdates: h3 } = kd,
  { DEFAULT_VALUE: _C } = bn,
  {
    currentRendererSupportsUseSyncExternalStore: m3,
    reactMode: wa,
    useMutableSource: g3,
    useSyncExternalStore: y3,
  } = ys,
  { useRecoilMutableSource: b3, useStoreRef: Pr } = Hr,
  {
    AbstractRecoilValue: Av,
    getRecoilValueAsLoadable: ws,
    setRecoilValue: hc,
    setUnvalidatedRecoilValue: x3,
    subscribeToRecoilValue: ca,
  } = _r,
  {
    useCallback: gn,
    useEffect: da,
    useMemo: PC,
    useRef: wl,
    useState: Om,
  } = oe,
  { setByAddingToSet: S3 } = Yw,
  { isSSR: w3 } = Dd;
function Mm(e, t, n) {
  if (e.state === "hasValue") return e.contents;
  throw e.state === "loading"
    ? new Promise((o) => {
        const i = n.current.getState().suspendedComponentResolvers;
        i.add(o),
          w3 &&
            Xe(e.contents) &&
            e.contents.finally(() => {
              i.delete(o);
            });
      })
    : e.state === "hasError"
    ? e.contents
    : Te(`Invalid value of loadable atom "${t.key}"`);
}
function C3() {
  const e = Ss(),
    t = Pr(),
    [, n] = Om([]),
    r = wl(new Set());
  r.current = new Set();
  const o = wl(new Set()),
    i = wl(new Map()),
    a = gn(
      (s) => {
        const u = i.current.get(s);
        u && (u.release(), i.current.delete(s));
      },
      [i]
    ),
    l = gn((s, u) => {
      i.current.has(u) && n([]);
    }, []);
  return (
    da(() => {
      const s = t.current;
      xl(r.current, o.current).forEach((u) => {
        if (i.current.has(u)) return;
        const c = ca(s, new Av(u), (f) => l(f, u), e);
        i.current.set(u, c),
          s.getState().nextTree
            ? s.getState().queuedComponentCallbacks_DEPRECATED.push(() => {
                l(s.getState(), u);
              })
            : l(s.getState(), u);
      }),
        xl(o.current, r.current).forEach((u) => {
          a(u);
        }),
        (o.current = r.current);
    }),
    da(() => {
      const s = i.current;
      return (
        xl(r.current, new Set(s.keys())).forEach((u) => {
          const c = ca(t.current, new Av(u), (d) => l(d, u), e);
          s.set(u, c);
        }),
        () => s.forEach((u, c) => a(c))
      );
    }, [e, t, a, l]),
    PC(() => {
      function s(h) {
        return (g) => {
          hc(t.current, h, g);
        };
      }
      function u(h) {
        return () => hc(t.current, h, _C);
      }
      function c(h) {
        var g;
        r.current.has(h.key) || (r.current = S3(r.current, h.key));
        const x = t.current.getState();
        return ws(
          t.current,
          h,
          wa().early && (g = x.nextTree) !== null && g !== void 0
            ? g
            : x.currentTree
        );
      }
      function d(h) {
        const g = c(h);
        return Mm(g, h, t);
      }
      function f(h) {
        return [d(h), s(h)];
      }
      function p(h) {
        return [c(h), s(h)];
      }
      return {
        getRecoilValue: d,
        getRecoilValueLoadable: c,
        getRecoilState: f,
        getRecoilStateLoadable: p,
        getSetRecoilState: s,
        getResetRecoilState: u,
      };
    }, [r, t])
  );
}
const R3 = { current: 0 };
function E3(e) {
  const t = Pr(),
    n = Ss(),
    r = gn(() => {
      var l;
      const s = t.current,
        u = s.getState(),
        c =
          wa().early && (l = u.nextTree) !== null && l !== void 0
            ? l
            : u.currentTree;
      return { loadable: ws(s, e, c), key: e.key };
    }, [t, e]),
    o = gn((l) => {
      let s;
      return () => {
        var u, c;
        const d = l();
        return (u = s) !== null &&
          u !== void 0 &&
          u.loadable.is(d.loadable) &&
          ((c = s) === null || c === void 0 ? void 0 : c.key) === d.key
          ? s
          : ((s = d), d);
      };
    }, []),
    i = PC(() => o(r), [r, o]),
    a = gn(
      (l) => {
        const s = t.current;
        return ca(s, e, l, n).release;
      },
      [t, e, n]
    );
  return y3(a, i, i).loadable;
}
function T3(e) {
  const t = Pr(),
    n = gn(() => {
      var u;
      const c = t.current,
        d = c.getState(),
        f =
          wa().early && (u = d.nextTree) !== null && u !== void 0
            ? u
            : d.currentTree;
      return ws(c, e, f);
    }, [t, e]),
    r = gn(() => n(), [n]),
    o = Ss(),
    i = gn(
      (u, c) => {
        const d = t.current;
        return ca(
          d,
          e,
          () => {
            if (!We("recoil_suppress_rerender_in_callback")) return c();
            const p = n();
            s.current.is(p) || c(), (s.current = p);
          },
          o
        ).release;
      },
      [t, e, o, n]
    ),
    a = b3();
  if (a == null)
    throw Te(
      "Recoil hooks must be used in components contained within a <RecoilRoot> component."
    );
  const l = g3(a, r, i),
    s = wl(l);
  return (
    da(() => {
      s.current = l;
    }),
    l
  );
}
function Nv(e) {
  const t = Pr(),
    n = Ss(),
    r = gn(() => {
      var s;
      const u = t.current,
        c = u.getState(),
        d =
          wa().early && (s = c.nextTree) !== null && s !== void 0
            ? s
            : c.currentTree;
      return ws(u, e, d);
    }, [t, e]),
    o = gn(() => ({ loadable: r(), key: e.key }), [r, e.key]),
    i = gn(
      (s) => {
        const u = o();
        return s.loadable.is(u.loadable) && s.key === u.key ? s : u;
      },
      [o]
    );
  da(() => {
    const s = ca(
      t.current,
      e,
      (u) => {
        l(i);
      },
      n
    );
    return l(i), s.release;
  }, [n, e, t, i]);
  const [a, l] = Om(o);
  return a.key !== e.key ? o().loadable : a.loadable;
}
function _3(e) {
  const t = Pr(),
    [, n] = Om([]),
    r = Ss(),
    o = gn(() => {
      var l;
      const s = t.current,
        u = s.getState(),
        c =
          wa().early && (l = u.nextTree) !== null && l !== void 0
            ? l
            : u.currentTree;
      return ws(s, e, c);
    }, [t, e]),
    i = o(),
    a = wl(i);
  return (
    da(() => {
      a.current = i;
    }),
    da(() => {
      const l = t.current,
        s = l.getState(),
        u = ca(
          l,
          e,
          (d) => {
            var f;
            if (!We("recoil_suppress_rerender_in_callback")) return n([]);
            const p = o();
            ((f = a.current) !== null && f !== void 0 && f.is(p)) || n(p),
              (a.current = p);
          },
          r
        );
      if (s.nextTree)
        l.getState().queuedComponentCallbacks_DEPRECATED.push(() => {
          (a.current = null), n([]);
        });
      else {
        var c;
        if (!We("recoil_suppress_rerender_in_callback")) return n([]);
        const d = o();
        ((c = a.current) !== null && c !== void 0 && c.is(d)) || n(d),
          (a.current = d);
      }
      return u.release;
    }, [r, o, e, t]),
    i
  );
}
function $m(e) {
  return (
    We("recoil_memory_managament_2020") && Nm(e),
    {
      TRANSITION_SUPPORT: Nv,
      SYNC_EXTERNAL_STORE: m3() ? E3 : Nv,
      MUTABLE_SOURCE: T3,
      LEGACY: _3,
    }[wa().mode](e)
  );
}
function kC(e) {
  const t = Pr(),
    n = $m(e);
  return Mm(n, e, t);
}
function Md(e) {
  const t = Pr();
  return gn(
    (n) => {
      hc(t.current, e, n);
    },
    [t, e]
  );
}
function P3(e) {
  const t = Pr();
  return gn(() => {
    hc(t.current, e, _C);
  }, [t, e]);
}
function k3(e) {
  return [kC(e), Md(e)];
}
function D3(e) {
  return [$m(e), Md(e)];
}
function I3() {
  const e = Pr();
  return (t, n = {}) => {
    h3(() => {
      e.current.addTransactionMetadata(n),
        t.forEach((r, o) => x3(e.current, new Av(o), r));
    });
  };
}
function DC(e) {
  return We("recoil_memory_managament_2020") && Nm(e), Nv(e);
}
function IC(e) {
  const t = Pr(),
    n = DC(e);
  return Mm(n, e, t);
}
function A3(e) {
  return [IC(e), Md(e)];
}
var N3 = {
  recoilComponentGetRecoilValueCount_FOR_TESTING: R3,
  useRecoilInterface: C3,
  useRecoilState: k3,
  useRecoilStateLoadable: D3,
  useRecoilValue: kC,
  useRecoilValueLoadable: $m,
  useResetRecoilState: P3,
  useSetRecoilState: Md,
  useSetUnvalidatedAtomValues: I3,
  useRecoilValueLoadable_TRANSITION_SUPPORT_UNSTABLE: DC,
  useRecoilValue_TRANSITION_SUPPORT_UNSTABLE: IC,
  useRecoilState_TRANSITION_SUPPORT_UNSTABLE: A3,
};
function O3(e, t) {
  const n = new Map();
  for (const [r, o] of e) t(o, r) && n.set(r, o);
  return n;
}
var M3 = O3;
function $3(e, t) {
  const n = new Set();
  for (const r of e) t(r) && n.add(r);
  return n;
}
var L3 = $3;
function B3(...e) {
  const t = new Map();
  for (let n = 0; n < e.length; n++) {
    const r = e[n].keys();
    let o;
    for (; !(o = r.next()).done; ) t.set(o.value, e[n].get(o.value));
  }
  return t;
}
var F3 = B3;
const { batchUpdates: j3 } = kd,
  { DEFAULT_VALUE: z3, getNode: AC, nodes: U3 } = bn,
  { useStoreRef: Lm } = Hr,
  { AbstractRecoilValue: V3, setRecoilValueLoadable: W3 } = _r,
  { SUSPENSE_TIMEOUT_MS: H3 } = si,
  { cloneSnapshot: mc } = Nd,
  { useCallback: $d, useEffect: NC, useRef: q0, useState: G3 } = oe,
  { isSSR: Y0 } = Dd;
function Ld(e) {
  const t = Lm();
  NC(() => t.current.subscribeToTransactions(e).release, [e, t]);
}
function X0(e) {
  const t = e.atomValues.toMap(),
    n = vc(
      M3(t, (r, o) => {
        const a = AC(o).persistence_UNSTABLE;
        return a != null && a.type !== "none" && r.state === "hasValue";
      }),
      (r) => r.contents
    );
  return F3(e.nonvalidatedAtoms.toMap(), n);
}
function K3(e) {
  Ld(
    $d(
      (t) => {
        let n = t.getState().previousTree;
        const r = t.getState().currentTree;
        n || (n = t.getState().currentTree);
        const o = X0(r),
          i = X0(n),
          a = vc(U3, (s) => {
            var u, c, d, f;
            return {
              persistence_UNSTABLE: {
                type:
                  (u =
                    (c = s.persistence_UNSTABLE) === null || c === void 0
                      ? void 0
                      : c.type) !== null && u !== void 0
                    ? u
                    : "none",
                backButton:
                  (d =
                    (f = s.persistence_UNSTABLE) === null || f === void 0
                      ? void 0
                      : f.backButton) !== null && d !== void 0
                    ? d
                    : !1,
              },
            };
          }),
          l = L3(r.dirtyAtoms, (s) => o.has(s) || i.has(s));
        e({
          atomValues: o,
          previousAtomValues: i,
          atomInfo: a,
          modifiedAtoms: l,
          transactionMetadata: { ...r.transactionMetadata },
        });
      },
      [e]
    )
  );
}
function q3(e) {
  Ld(
    $d(
      (t) => {
        const n = mc(t, "latest"),
          r = mc(t, "previous");
        e({ snapshot: n, previousSnapshot: r });
      },
      [e]
    )
  );
}
function Y3() {
  const e = Lm(),
    [t, n] = G3(() => mc(e.current)),
    r = TC(t),
    o = q0(),
    i = q0();
  if (
    (Ld($d((l) => n(mc(l)), [])),
    NC(() => {
      const l = t.retain();
      if (o.current && !Y0) {
        var s;
        window.clearTimeout(o.current),
          (o.current = null),
          (s = i.current) === null || s === void 0 || s.call(i),
          (i.current = null);
      }
      return () => {
        window.setTimeout(l, 10);
      };
    }, [t]),
    r !== t && !Y0)
  ) {
    if (o.current) {
      var a;
      window.clearTimeout(o.current),
        (o.current = null),
        (a = i.current) === null || a === void 0 || a.call(i),
        (i.current = null);
    }
    (i.current = t.retain()),
      (o.current = window.setTimeout(() => {
        var l;
        (o.current = null),
          (l = i.current) === null || l === void 0 || l.call(i),
          (i.current = null);
      }, H3));
  }
  return t;
}
function OC(e, t) {
  var n;
  const r = e.getState(),
    o = (n = r.nextTree) !== null && n !== void 0 ? n : r.currentTree,
    i = t.getStore_INTERNAL().getState().currentTree;
  j3(() => {
    const a = new Set();
    for (const u of [o.atomValues.keys(), i.atomValues.keys()])
      for (const c of u) {
        var l, s;
        ((l = o.atomValues.get(c)) === null || l === void 0
          ? void 0
          : l.contents) !==
          ((s = i.atomValues.get(c)) === null || s === void 0
            ? void 0
            : s.contents) &&
          AC(c).shouldRestoreFromSnapshots &&
          a.add(c);
      }
    a.forEach((u) => {
      W3(e, new V3(u), i.atomValues.has(u) ? nt(i.atomValues.get(u)) : z3);
    }),
      e.replaceState((u) => ({ ...u, stateID: t.getID() }));
  });
}
function X3() {
  const e = Lm();
  return $d((t) => OC(e.current, t), [e]);
}
var MC = {
  useRecoilSnapshot: Y3,
  gotoSnapshot: OC,
  useGotoRecoilSnapshot: X3,
  useRecoilTransactionObserver: q3,
  useTransactionObservation_DEPRECATED: K3,
  useTransactionSubscription_DEPRECATED: Ld,
};
const { peekNodeInfo: Q3 } = Po,
  { useStoreRef: Z3 } = Hr;
function J3() {
  const e = Z3();
  return ({ key: t }) => Q3(e.current, e.current.getState().currentTree, t);
}
var eL = J3;
const { reactMode: tL } = ys,
  { RecoilRoot: nL, useStoreRef: rL } = Hr,
  { useMemo: oL } = oe;
function iL() {
  tL().mode === "MUTABLE_SOURCE" &&
    console.warn(
      "Warning: There are known issues using useRecoilBridgeAcrossReactRoots() in recoil_mutable_source rendering mode.  Please consider upgrading to recoil_sync_external_store mode."
    );
  const e = rL().current;
  return oL(() => {
    function t({ children: n }) {
      return oe.createElement(nL, { store_INTERNAL: e }, n);
    }
    return t;
  }, [e]);
}
var aL = iL;
const { loadableWithValue: lL } = gs,
  { initializeNode: sL } = Po,
  { DEFAULT_VALUE: uL, getNode: cL } = bn,
  {
    copyTreeState: dL,
    getRecoilValueAsLoadable: fL,
    invalidateDownstreams: pL,
    writeLoadableToTreeState: vL,
  } = _r;
function Q0(e) {
  return cL(e.key).nodeType === "atom";
}
class hL {
  constructor(t, n) {
    Ce(this, "_store", void 0),
      Ce(this, "_treeState", void 0),
      Ce(this, "_changes", void 0),
      Ce(this, "get", (r) => {
        if (this._changes.has(r.key)) return this._changes.get(r.key);
        if (!Q0(r))
          throw Te("Reading selectors within atomicUpdate is not supported");
        const o = fL(this._store, r, this._treeState);
        if (o.state === "hasValue") return o.contents;
        throw o.state === "hasError"
          ? o.contents
          : Te(
              `Expected Recoil atom ${r.key} to have a value, but it is in a loading state.`
            );
      }),
      Ce(this, "set", (r, o) => {
        if (!Q0(r))
          throw Te("Setting selectors within atomicUpdate is not supported");
        if (typeof o == "function") {
          const i = this.get(r);
          this._changes.set(r.key, o(i));
        } else sL(this._store, r.key, "set"), this._changes.set(r.key, o);
      }),
      Ce(this, "reset", (r) => {
        this.set(r, uL);
      }),
      (this._store = t),
      (this._treeState = n),
      (this._changes = new Map());
  }
  newTreeState_INTERNAL() {
    if (this._changes.size === 0) return this._treeState;
    const t = dL(this._treeState);
    for (const [n, r] of this._changes) vL(t, n, lL(r));
    return pL(this._store, t), t;
  }
}
function mL(e) {
  return (t) => {
    e.replaceState((n) => {
      const r = new hL(e, n);
      return t(r), r.newTreeState_INTERNAL();
    });
  };
}
var gL = { atomicUpdater: mL },
  yL = gL.atomicUpdater,
  $C = Object.freeze({ __proto__: null, atomicUpdater: yL });
function bL(e, t) {
  if (!e) throw new Error(t);
}
var xL = bL,
  ol = xL;
const { atomicUpdater: SL } = $C,
  { batchUpdates: wL } = kd,
  { DEFAULT_VALUE: CL } = bn,
  { useStoreRef: RL } = Hr,
  { refreshRecoilValue: EL, setRecoilValue: Z0 } = _r,
  { cloneSnapshot: TL } = Nd,
  { gotoSnapshot: _L } = MC,
  { useCallback: PL } = oe;
class LC {}
const kL = new LC();
function BC(e, t, n, r) {
  let o = kL,
    i;
  if (
    (wL(() => {
      const l =
        "useRecoilCallback() expects a function that returns a function: it accepts a function of the type (RecoilInterface) => (Args) => ReturnType and returns a callback function (Args) => ReturnType, where RecoilInterface is an object {snapshot, set, ...} and Args and ReturnType are the argument and return types of the callback you want to create.  Please see the docs at recoiljs.org for details.";
      if (typeof t != "function") throw Te(l);
      const s = Xw(
          {
            ...(r ?? {}),
            set: (c, d) => Z0(e, c, d),
            reset: (c) => Z0(e, c, CL),
            refresh: (c) => EL(e, c),
            gotoSnapshot: (c) => _L(e, c),
            transact_UNSTABLE: (c) => SL(e)(c),
          },
          {
            snapshot: () => {
              const c = TL(e);
              return (i = c.retain()), c;
            },
          }
        ),
        u = t(s);
      if (typeof u != "function") throw Te(l);
      o = u(...n);
    }),
    o instanceof LC && ol(!1),
    Xe(o))
  )
    o = o.finally(() => {
      var l;
      (l = i) === null || l === void 0 || l();
    });
  else {
    var a;
    (a = i) === null || a === void 0 || a();
  }
  return o;
}
function DL(e, t) {
  const n = RL();
  return PL((...r) => BC(n.current, e, r), t != null ? [...t, n] : void 0);
}
var FC = { recoilCallback: BC, useRecoilCallback: DL };
const { useStoreRef: IL } = Hr,
  { refreshRecoilValue: AL } = _r,
  { useCallback: NL } = oe;
function OL(e) {
  const t = IL();
  return NL(() => {
    const n = t.current;
    AL(n, e);
  }, [e, t]);
}
var ML = OL;
const { atomicUpdater: $L } = $C,
  { useStoreRef: LL } = Hr,
  { useMemo: BL } = oe;
function FL(e, t) {
  const n = LL();
  return BL(
    () =>
      (...r) => {
        $L(n.current)((i) => {
          e(i)(...r);
        });
      },
    t != null ? [...t, n] : void 0
  );
}
var jL = FL;
class zL {
  constructor(t) {
    Ce(this, "value", void 0), (this.value = t);
  }
}
var UL = { WrappedValue: zL },
  VL = UL.WrappedValue,
  jC = Object.freeze({ __proto__: null, WrappedValue: VL });
const { isFastRefreshEnabled: WL } = ys;
class J0 extends Error {}
class HL {
  constructor(t) {
    var n, r, o;
    Ce(this, "_name", void 0),
      Ce(this, "_numLeafs", void 0),
      Ce(this, "_root", void 0),
      Ce(this, "_onHit", void 0),
      Ce(this, "_onSet", void 0),
      Ce(this, "_mapNodeValue", void 0),
      (this._name = t == null ? void 0 : t.name),
      (this._numLeafs = 0),
      (this._root = null),
      (this._onHit =
        (n = t == null ? void 0 : t.onHit) !== null && n !== void 0
          ? n
          : () => {}),
      (this._onSet =
        (r = t == null ? void 0 : t.onSet) !== null && r !== void 0
          ? r
          : () => {}),
      (this._mapNodeValue =
        (o = t == null ? void 0 : t.mapNodeValue) !== null && o !== void 0
          ? o
          : (i) => i);
  }
  size() {
    return this._numLeafs;
  }
  root() {
    return this._root;
  }
  get(t, n) {
    var r;
    return (r = this.getLeafNode(t, n)) === null || r === void 0
      ? void 0
      : r.value;
  }
  getLeafNode(t, n) {
    if (this._root == null) return;
    let r = this._root;
    for (; r; ) {
      if ((n == null || n.onNodeVisit(r), r.type === "leaf"))
        return this._onHit(r), r;
      const o = this._mapNodeValue(t(r.nodeKey));
      r = r.branches.get(o);
    }
  }
  set(t, n, r) {
    const o = () => {
      var i, a, l, s;
      let u, c;
      for (const [x, v] of t) {
        var d, f, p;
        const m = this._root;
        if ((m == null ? void 0 : m.type) === "leaf")
          throw this.invalidCacheError();
        const y = u;
        if (
          ((u = y ? y.branches.get(c) : m),
          (u =
            (d = u) !== null && d !== void 0
              ? d
              : {
                  type: "branch",
                  nodeKey: x,
                  parent: y,
                  branches: new Map(),
                  branchKey: c,
                }),
          u.type !== "branch" || u.nodeKey !== x)
        )
          throw this.invalidCacheError();
        y == null || y.branches.set(c, u),
          r == null ||
            (f = r.onNodeVisit) === null ||
            f === void 0 ||
            f.call(r, u),
          (c = this._mapNodeValue(v)),
          (this._root = (p = this._root) !== null && p !== void 0 ? p : u);
      }
      const h = u
        ? (i = u) === null || i === void 0
          ? void 0
          : i.branches.get(c)
        : this._root;
      if (h != null && (h.type !== "leaf" || h.branchKey !== c))
        throw this.invalidCacheError();
      const g = { type: "leaf", value: n, parent: u, branchKey: c };
      (a = u) === null || a === void 0 || a.branches.set(c, g),
        (this._root = (l = this._root) !== null && l !== void 0 ? l : g),
        this._numLeafs++,
        this._onSet(g),
        r == null ||
          (s = r.onNodeVisit) === null ||
          s === void 0 ||
          s.call(r, g);
    };
    try {
      o();
    } catch (i) {
      if (i instanceof J0) this.clear(), o();
      else throw i;
    }
  }
  delete(t) {
    const n = this.root();
    if (!n) return !1;
    if (t === n) return (this._root = null), (this._numLeafs = 0), !0;
    let r = t.parent,
      o = t.branchKey;
    for (; r; ) {
      var i;
      if ((r.branches.delete(o), r === n))
        return (
          r.branches.size === 0
            ? ((this._root = null), (this._numLeafs = 0))
            : this._numLeafs--,
          !0
        );
      if (r.branches.size > 0) break;
      (o = (i = r) === null || i === void 0 ? void 0 : i.branchKey),
        (r = r.parent);
    }
    for (; r !== n; r = r.parent) if (r == null) return !1;
    return this._numLeafs--, !0;
  }
  clear() {
    (this._numLeafs = 0), (this._root = null);
  }
  invalidCacheError() {
    const t = WL()
      ? "Possible Fast Refresh module reload detected.  This may also be caused by an selector returning inconsistent values. Resetting cache."
      : "Invalid cache values.  This happens when selectors do not return consistent values for the same input dependency values.  That may also be caused when using Fast Refresh to change a selector implementation.  Resetting cache.";
    throw (Cm(t + (this._name != null ? ` - ${this._name}` : "")), new J0());
  }
}
var GL = { TreeCache: HL },
  KL = GL.TreeCache,
  zC = Object.freeze({ __proto__: null, TreeCache: KL });
class qL {
  constructor(t) {
    var n;
    Ce(this, "_maxSize", void 0),
      Ce(this, "_size", void 0),
      Ce(this, "_head", void 0),
      Ce(this, "_tail", void 0),
      Ce(this, "_map", void 0),
      Ce(this, "_keyMapper", void 0),
      (this._maxSize = t.maxSize),
      (this._size = 0),
      (this._head = null),
      (this._tail = null),
      (this._map = new Map()),
      (this._keyMapper =
        (n = t.mapKey) !== null && n !== void 0 ? n : (r) => r);
  }
  head() {
    return this._head;
  }
  tail() {
    return this._tail;
  }
  size() {
    return this._size;
  }
  maxSize() {
    return this._maxSize;
  }
  has(t) {
    return this._map.has(this._keyMapper(t));
  }
  get(t) {
    const n = this._keyMapper(t),
      r = this._map.get(n);
    if (r) return this.set(t, r.value), r.value;
  }
  set(t, n) {
    const r = this._keyMapper(t);
    this._map.get(r) && this.delete(t);
    const i = this.head(),
      a = { key: t, right: i, left: null, value: n };
    i ? (i.left = a) : (this._tail = a),
      this._map.set(r, a),
      (this._head = a),
      this._size++,
      this._maybeDeleteLRU();
  }
  _maybeDeleteLRU() {
    this.size() > this.maxSize() && this.deleteLru();
  }
  deleteLru() {
    const t = this.tail();
    t && this.delete(t.key);
  }
  delete(t) {
    const n = this._keyMapper(t);
    if (!this._size || !this._map.has(n)) return;
    const r = nt(this._map.get(n)),
      o = r.right,
      i = r.left;
    o && (o.left = r.left),
      i && (i.right = r.right),
      r === this.head() && (this._head = o),
      r === this.tail() && (this._tail = i),
      this._map.delete(n),
      this._size--;
  }
  clear() {
    (this._size = 0),
      (this._head = null),
      (this._tail = null),
      (this._map = new Map());
  }
}
var YL = { LRUCache: qL },
  XL = YL.LRUCache,
  UC = Object.freeze({ __proto__: null, LRUCache: XL });
const { LRUCache: QL } = UC,
  { TreeCache: ZL } = zC;
function JL({ name: e, maxSize: t, mapNodeValue: n = (r) => r }) {
  const r = new QL({ maxSize: t }),
    o = new ZL({
      name: e,
      mapNodeValue: n,
      onHit: (i) => {
        r.set(i, !0);
      },
      onSet: (i) => {
        const a = r.tail();
        r.set(i, !0), a && o.size() > t && o.delete(a.key);
      },
    });
  return o;
}
var e1 = JL;
function nr(e, t, n) {
  if (typeof e == "string" && !e.includes('"') && !e.includes("\\"))
    return `"${e}"`;
  switch (typeof e) {
    case "undefined":
      return "";
    case "boolean":
      return e ? "true" : "false";
    case "number":
    case "symbol":
      return String(e);
    case "string":
      return JSON.stringify(e);
    case "function":
      if ((t == null ? void 0 : t.allowFunctions) !== !0)
        throw Te("Attempt to serialize function in a Recoil cache key");
      return `__FUNCTION(${e.name})__`;
  }
  if (e === null) return "null";
  if (typeof e != "object") {
    var r;
    return (r = JSON.stringify(e)) !== null && r !== void 0 ? r : "";
  }
  if (Xe(e)) return "__PROMISE__";
  if (Array.isArray(e)) return `[${e.map((o, i) => nr(o, t, i.toString()))}]`;
  if (typeof e.toJSON == "function") return nr(e.toJSON(n), t, n);
  if (e instanceof Map) {
    const o = {};
    for (const [i, a] of e) o[typeof i == "string" ? i : nr(i, t)] = a;
    return nr(o, t, n);
  }
  return e instanceof Set
    ? nr(
        Array.from(e).sort((o, i) => nr(o, t).localeCompare(nr(i, t))),
        t,
        n
      )
    : Symbol !== void 0 &&
      e[Symbol.iterator] != null &&
      typeof e[Symbol.iterator] == "function"
    ? nr(Array.from(e), t, n)
    : `{${Object.keys(e)
        .filter((o) => e[o] !== void 0)
        .sort()
        .map((o) => `${nr(o, t)}:${nr(e[o], t, o)}`)
        .join(",")}}`;
}
function e5(e, t = { allowFunctions: !1 }) {
  return nr(e, t);
}
var Bd = e5;
const { TreeCache: t5 } = zC,
  nu = { equality: "reference", eviction: "keep-all", maxSize: 1 / 0 };
function n5(
  {
    equality: e = nu.equality,
    eviction: t = nu.eviction,
    maxSize: n = nu.maxSize,
  } = nu,
  r
) {
  const o = r5(e);
  return o5(t, n, o, r);
}
function r5(e) {
  switch (e) {
    case "reference":
      return (t) => t;
    case "value":
      return (t) => Bd(t);
  }
  throw Te(`Unrecognized equality policy ${e}`);
}
function o5(e, t, n, r) {
  switch (e) {
    case "keep-all":
      return new t5({ name: r, mapNodeValue: n });
    case "lru":
      return e1({ name: r, maxSize: nt(t), mapNodeValue: n });
    case "most-recent":
      return e1({ name: r, maxSize: 1, mapNodeValue: n });
  }
  throw Te(`Unrecognized eviction policy ${e}`);
}
var i5 = n5;
function a5(e) {
  return () => null;
}
var l5 = { startPerfBlock: a5 };
const {
    isLoadable: s5,
    loadableWithError: ru,
    loadableWithPromise: u5,
    loadableWithValue: Yf,
  } = gs,
  { WrappedValue: VC } = jC,
  { getNodeLoadable: ou, peekNodeLoadable: c5, setNodeValue: d5 } = Po,
  { saveDepsToStore: f5 } = bs,
  {
    DEFAULT_VALUE: p5,
    getConfigDeletionHandler: v5,
    getNode: h5,
    registerNode: t1,
  } = bn,
  { isRecoilValue: m5 } = ua,
  { markRecoilValueModified: n1 } = _r,
  { retainedByOptionWithDefault: g5 } = si,
  { recoilCallback: y5 } = FC,
  { startPerfBlock: b5 } = l5;
class WC {}
const za = new WC(),
  Ua = [],
  iu = new Map(),
  x5 = (() => {
    let e = 0;
    return () => e++;
  })();
function HC(e) {
  let t = null;
  const { key: n, get: r, cachePolicy_UNSTABLE: o } = e,
    i = e.set != null ? e.set : void 0,
    a = new Set(),
    l = i5(o ?? { equality: "reference", eviction: "keep-all" }, n),
    s = g5(e.retainedBy_UNSTABLE),
    u = new Map();
  let c = 0;
  function d() {
    return !We("recoil_memory_managament_2020") || c > 0;
  }
  function f(k) {
    return (
      k.getState().knownSelectors.add(n),
      c++,
      () => {
        c--;
      }
    );
  }
  function p() {
    return v5(n) !== void 0 && !d();
  }
  function h(k, L, O, H, Y) {
    q(L, H, Y), g(k, O);
  }
  function g(k, L) {
    j(k, L) && V(k), v(L, !0);
  }
  function x(k, L) {
    j(k, L) && (nt(I(k)).stateVersions.clear(), v(L, !1));
  }
  function v(k, L) {
    const O = iu.get(k);
    if (O != null) {
      for (const H of O) n1(H, nt(t));
      L && iu.delete(k);
    }
  }
  function m(k, L) {
    let O = iu.get(L);
    O == null && iu.set(L, (O = new Set())), O.add(k);
  }
  function y(k, L, O, H, Y, se) {
    return L.then((ie) => {
      if (!d()) throw (V(k), za);
      const te = Yf(ie);
      return h(k, O, Y, te, H), ie;
    }).catch((ie) => {
      if (!d()) throw (V(k), za);
      if (Xe(ie)) return b(k, ie, O, H, Y, se);
      const te = ru(ie);
      throw (h(k, O, Y, te, H), ie);
    });
  }
  function b(k, L, O, H, Y, se) {
    return L.then((ie) => {
      if (!d()) throw (V(k), za);
      se.loadingDepKey != null && se.loadingDepPromise === L
        ? O.atomValues.set(se.loadingDepKey, Yf(ie))
        : k.getState().knownSelectors.forEach((be) => {
            O.atomValues.delete(be);
          });
      const te = E(k, O);
      if (te && te.state !== "loading") {
        if (((j(k, Y) || I(k) == null) && g(k, Y), te.state === "hasValue"))
          return te.contents;
        throw te.contents;
      }
      if (!j(k, Y)) {
        const be = A(k, O);
        if (be != null) return be.loadingLoadable.contents;
      }
      const [Se, ye] = R(k, O, Y);
      if (
        (Se.state !== "loading" && h(k, O, Y, Se, ye), Se.state === "hasError")
      )
        throw Se.contents;
      return Se.contents;
    }).catch((ie) => {
      if (ie instanceof WC) throw za;
      if (!d()) throw (V(k), za);
      const te = ru(ie);
      throw (h(k, O, Y, te, H), ie);
    });
  }
  function C(k, L, O, H) {
    var Y, se, ie, te;
    if (
      j(k, H) ||
      L.version ===
        ((Y = k.getState()) === null ||
        Y === void 0 ||
        (se = Y.currentTree) === null ||
        se === void 0
          ? void 0
          : se.version) ||
      L.version ===
        ((ie = k.getState()) === null ||
        ie === void 0 ||
        (te = ie.nextTree) === null ||
        te === void 0
          ? void 0
          : te.version)
    ) {
      var Se, ye, be;
      f5(
        n,
        O,
        k,
        (Se =
          (ye = k.getState()) === null ||
          ye === void 0 ||
          (be = ye.nextTree) === null ||
          be === void 0
            ? void 0
            : be.version) !== null && Se !== void 0
          ? Se
          : k.getState().currentTree.version
      );
    }
    for (const Re of O) a.add(Re);
  }
  function R(k, L, O) {
    const H = b5(n);
    let Y = !0,
      se = !0;
    const ie = () => {
      H(), (se = !1);
    };
    let te,
      Se = !1,
      ye;
    const be = { loadingDepKey: null, loadingDepPromise: null },
      Re = new Map();
    function Be({ key: Oe }) {
      const ge = ou(k, L, Oe);
      switch (
        (Re.set(Oe, ge),
        Y || (C(k, L, new Set(Re.keys()), O), x(k, O)),
        ge.state)
      ) {
        case "hasValue":
          return ge.contents;
        case "hasError":
          throw ge.contents;
        case "loading":
          throw (
            ((be.loadingDepKey = Oe),
            (be.loadingDepPromise = ge.contents),
            ge.contents)
          );
      }
      throw Te("Invalid Loadable state");
    }
    const Ue =
      (Oe) =>
      (...ge) => {
        if (se)
          throw Te(
            "Callbacks from getCallback() should only be called asynchronously after the selector is evalutated.  It can be used for selectors to return objects with callbacks that can work with Recoil state without a subscription."
          );
        return t == null && ol(!1), y5(k, Oe, ge, { node: t });
      };
    try {
      (te = r({ get: Be, getCallback: Ue })),
        (te = m5(te) ? Be(te) : te),
        s5(te) && (te.state === "hasError" && (Se = !0), (te = te.contents)),
        Xe(te) ? (te = y(k, te, L, Re, O, be).finally(ie)) : ie(),
        (te = te instanceof VC ? te.value : te);
    } catch (Oe) {
      (te = Oe),
        Xe(te) ? (te = b(k, te, L, Re, O, be).finally(ie)) : ((Se = !0), ie());
    }
    return (
      Se ? (ye = ru(te)) : Xe(te) ? (ye = u5(te)) : (ye = Yf(te)),
      (Y = !1),
      J(k, O, Re),
      C(k, L, new Set(Re.keys()), O),
      [ye, Re]
    );
  }
  function E(k, L) {
    let O = L.atomValues.get(n);
    if (O != null) return O;
    const H = new Set();
    try {
      O = l.get(
        (se) => (typeof se != "string" && ol(!1), ou(k, L, se).contents),
        {
          onNodeVisit: (se) => {
            se.type === "branch" && se.nodeKey !== n && H.add(se.nodeKey);
          },
        }
      );
    } catch (se) {
      throw Te(`Problem with cache lookup for selector "${n}": ${se.message}`);
    }
    if (O) {
      var Y;
      L.atomValues.set(n, O),
        C(
          k,
          L,
          H,
          (Y = I(k)) === null || Y === void 0 ? void 0 : Y.executionID
        );
    }
    return O;
  }
  function D(k, L) {
    const O = E(k, L);
    if (O != null) return V(k), O;
    const H = A(k, L);
    if (H != null) {
      var Y;
      return (
        ((Y = H.loadingLoadable) === null || Y === void 0
          ? void 0
          : Y.state) === "loading" && m(k, H.executionID),
        H.loadingLoadable
      );
    }
    const se = x5(),
      [ie, te] = R(k, L, se);
    return (
      ie.state === "loading"
        ? (M(k, se, ie, te, L), m(k, se))
        : (V(k), q(L, ie, te)),
      ie
    );
  }
  function A(k, L) {
    const O = pC([
      u.has(k) ? [nt(u.get(k))] : [],
      Ed(
        Pm(u, ([Y]) => Y !== k),
        ([, Y]) => Y
      ),
    ]);
    function H(Y) {
      for (const [se, ie] of Y) if (!ou(k, L, se).is(ie)) return !0;
      return !1;
    }
    for (const Y of O) {
      if (
        Y.stateVersions.get(L.version) ||
        !H(Y.depValuesDiscoveredSoFarDuringAsyncWork)
      )
        return Y.stateVersions.set(L.version, !0), Y;
      Y.stateVersions.set(L.version, !1);
    }
  }
  function I(k) {
    return u.get(k);
  }
  function M(k, L, O, H, Y) {
    u.set(k, {
      depValuesDiscoveredSoFarDuringAsyncWork: H,
      executionID: L,
      loadingLoadable: O,
      stateVersions: new Map([[Y.version, !0]]),
    });
  }
  function J(k, L, O) {
    if (j(k, L)) {
      const H = I(k);
      H != null && (H.depValuesDiscoveredSoFarDuringAsyncWork = O);
    }
  }
  function V(k) {
    u.delete(k);
  }
  function j(k, L) {
    var O;
    return L === ((O = I(k)) === null || O === void 0 ? void 0 : O.executionID);
  }
  function z(k) {
    return Array.from(k.entries()).map(([L, O]) => [L, O.contents]);
  }
  function q(k, L, O) {
    k.atomValues.set(n, L);
    try {
      l.set(z(O), L);
    } catch (H) {
      throw Te(`Problem with setting cache for selector "${n}": ${H.message}`);
    }
  }
  function re(k) {
    if (Ua.includes(n)) {
      const L = `Recoil selector has circular dependencies: ${Ua.slice(
        Ua.indexOf(n)
      ).join(" → ")}`;
      return ru(Te(L));
    }
    Ua.push(n);
    try {
      return k();
    } finally {
      Ua.pop();
    }
  }
  function U(k, L) {
    const O = L.atomValues.get(n);
    return (
      O ??
      l.get((H) => {
        var Y;
        return (
          typeof H != "string" && ol(!1),
          (Y = c5(k, L, H)) === null || Y === void 0 ? void 0 : Y.contents
        );
      })
    );
  }
  function X(k, L) {
    return re(() => D(k, L));
  }
  function W(k) {
    k.atomValues.delete(n);
  }
  function ee(k, L) {
    t == null && ol(!1);
    for (const H of a) {
      var O;
      const Y = h5(H);
      (O = Y.clearCache) === null || O === void 0 || O.call(Y, k, L);
    }
    a.clear(), W(L), l.clear(), n1(k, t);
  }
  return i != null
    ? (t = t1({
        key: n,
        nodeType: "selector",
        peek: U,
        get: X,
        set: (L, O, H) => {
          let Y = !1;
          const se = new Map();
          function ie({ key: be }) {
            if (Y)
              throw Te(
                "Recoil: Async selector sets are not currently supported."
              );
            const Re = ou(L, O, be);
            if (Re.state === "hasValue") return Re.contents;
            if (Re.state === "loading") {
              const Be = `Getting value of asynchronous atom or selector "${be}" in a pending state while setting selector "${n}" is not yet supported.`;
              throw Te(Be);
            } else throw Re.contents;
          }
          function te(be, Re) {
            if (Y)
              throw Te(
                "Recoil: Async selector sets are not currently supported."
              );
            const Be = typeof Re == "function" ? Re(ie(be)) : Re;
            d5(L, O, be.key, Be).forEach((Oe, ge) => se.set(ge, Oe));
          }
          function Se(be) {
            te(be, p5);
          }
          const ye = i({ set: te, get: ie, reset: Se }, H);
          if (ye !== void 0)
            throw Xe(ye)
              ? Te("Recoil: Async selector sets are not currently supported.")
              : Te("Recoil: selector set should be a void function.");
          return (Y = !0), se;
        },
        init: f,
        invalidate: W,
        clearCache: ee,
        shouldDeleteConfigOnRelease: p,
        dangerouslyAllowMutability: e.dangerouslyAllowMutability,
        shouldRestoreFromSnapshots: !1,
        retainedBy: s,
      }))
    : (t = t1({
        key: n,
        nodeType: "selector",
        peek: U,
        get: X,
        init: f,
        invalidate: W,
        clearCache: ee,
        shouldDeleteConfigOnRelease: p,
        dangerouslyAllowMutability: e.dangerouslyAllowMutability,
        shouldRestoreFromSnapshots: !1,
        retainedBy: s,
      }));
}
HC.value = (e) => new VC(e);
var fa = HC;
const {
    isLoadable: S5,
    loadableWithError: Xf,
    loadableWithPromise: Qf,
    loadableWithValue: bi,
  } = gs,
  { WrappedValue: GC } = jC,
  { peekNodeInfo: w5 } = Po,
  {
    DEFAULT_VALUE: jo,
    DefaultValue: Jr,
    getConfigDeletionHandler: KC,
    registerNode: C5,
    setConfigDeletionHandler: R5,
  } = bn,
  { isRecoilValue: E5 } = ua,
  {
    getRecoilValueAsLoadable: T5,
    markRecoilValueModified: _5,
    setRecoilValue: r1,
    setRecoilValueLoadable: P5,
  } = _r,
  { retainedByOptionWithDefault: k5 } = si,
  Va = (e) => (e instanceof GC ? e.value : e);
function D5(e) {
  const { key: t, persistence_UNSTABLE: n } = e,
    r = k5(e.retainedBy_UNSTABLE);
  let o = 0;
  function i(m) {
    return Qf(
      m
        .then((y) => ((a = bi(y)), y))
        .catch((y) => {
          throw ((a = Xf(y)), y);
        })
    );
  }
  let a = Xe(e.default)
    ? i(e.default)
    : S5(e.default)
    ? e.default.state === "loading"
      ? i(e.default.contents)
      : e.default
    : bi(Va(e.default));
  a.contents;
  let l;
  const s = new Map();
  function u(m) {
    return m;
  }
  function c(m, y) {
    const b = y
      .then((C) => {
        var R, E;
        return (
          ((E = (
            (R = m.getState().nextTree) !== null && R !== void 0
              ? R
              : m.getState().currentTree
          ).atomValues.get(t)) === null || E === void 0
            ? void 0
            : E.contents) === b && r1(m, v, C),
          C
        );
      })
      .catch((C) => {
        var R, E;
        throw (
          (((E = (
            (R = m.getState().nextTree) !== null && R !== void 0
              ? R
              : m.getState().currentTree
          ).atomValues.get(t)) === null || E === void 0
            ? void 0
            : E.contents) === b && P5(m, v, Xf(C)),
          C)
        );
      });
    return b;
  }
  function d(m, y, b) {
    var C;
    o++;
    const R = () => {
      var V;
      o--,
        (V = s.get(m)) === null || V === void 0 || V.forEach((j) => j()),
        s.delete(m);
    };
    if ((m.getState().knownAtoms.add(t), a.state === "loading")) {
      const V = () => {
        var j;
        ((j = m.getState().nextTree) !== null && j !== void 0
          ? j
          : m.getState().currentTree
        ).atomValues.has(t) || _5(m, v);
      };
      a.contents.finally(V);
    }
    const E = (C = e.effects) !== null && C !== void 0 ? C : e.effects_UNSTABLE;
    if (E != null) {
      let re = function (L) {
          if (j && L.key === t) {
            const O = V;
            return O instanceof Jr
              ? f(m, y)
              : Xe(O)
              ? Qf(O.then((H) => (H instanceof Jr ? a.toPromise() : H)))
              : bi(O);
          }
          return T5(m, L);
        },
        U = function (L) {
          return re(L).toPromise();
        },
        X = function (L) {
          var O;
          const H = w5(
            m,
            (O = m.getState().nextTree) !== null && O !== void 0
              ? O
              : m.getState().currentTree,
            L.key
          );
          return j && L.key === t && !(V instanceof Jr)
            ? { ...H, isSet: !0, loadable: re(L) }
            : H;
        };
      var I = re,
        M = U,
        J = X;
      let V = jo,
        j = !0,
        z = !1,
        q = null;
      const W = (L) => (O) => {
          if (j) {
            const H = re(v),
              Y = H.state === "hasValue" ? H.contents : jo;
            (V = typeof O == "function" ? O(Y) : O),
              Xe(V) &&
                (V = V.then((se) => ((q = { effect: L, value: se }), se)));
          } else {
            if (Xe(O))
              throw Te("Setting atoms to async values is not implemented.");
            typeof O != "function" && (q = { effect: L, value: Va(O) }),
              r1(
                m,
                v,
                typeof O == "function"
                  ? (H) => {
                      const Y = Va(O(H));
                      return (q = { effect: L, value: Y }), Y;
                    }
                  : Va(O)
              );
          }
        },
        ee = (L) => () => W(L)(jo),
        k = (L) => (O) => {
          var H;
          const { release: Y } = m.subscribeToTransactions((se) => {
            var ie;
            let { currentTree: te, previousTree: Se } = se.getState();
            Se || (Se = te);
            const ye =
              (ie = te.atomValues.get(t)) !== null && ie !== void 0 ? ie : a;
            if (ye.state === "hasValue") {
              var be, Re, Be, Ue;
              const Oe = ye.contents,
                ge =
                  (be = Se.atomValues.get(t)) !== null && be !== void 0
                    ? be
                    : a,
                jt = ge.state === "hasValue" ? ge.contents : jo;
              ((Re = q) === null || Re === void 0 ? void 0 : Re.effect) !== L ||
              ((Be = q) === null || Be === void 0 ? void 0 : Be.value) !== Oe
                ? O(Oe, jt, !te.atomValues.has(t))
                : ((Ue = q) === null || Ue === void 0 ? void 0 : Ue.effect) ===
                    L && (q = null);
            }
          }, t);
          s.set(m, [...((H = s.get(m)) !== null && H !== void 0 ? H : []), Y]);
        };
      for (const L of E)
        try {
          const O = L({
            node: v,
            storeID: m.storeID,
            parentStoreID_UNSTABLE: m.parentStoreID,
            trigger: b,
            setSelf: W(L),
            resetSelf: ee(L),
            onSet: k(L),
            getPromise: U,
            getLoadable: re,
            getInfo_UNSTABLE: X,
          });
          if (O != null) {
            var D;
            s.set(m, [
              ...((D = s.get(m)) !== null && D !== void 0 ? D : []),
              O,
            ]);
          }
        } catch (O) {
          (V = O), (z = !0);
        }
      if (((j = !1), !(V instanceof Jr))) {
        var A;
        const L = z ? Xf(V) : Xe(V) ? Qf(c(m, V)) : bi(Va(V));
        L.contents,
          y.atomValues.set(t, L),
          (A = m.getState().nextTree) === null ||
            A === void 0 ||
            A.atomValues.set(t, L);
      }
    }
    return R;
  }
  function f(m, y) {
    var b, C;
    return (b = (C = y.atomValues.get(t)) !== null && C !== void 0 ? C : l) !==
      null && b !== void 0
      ? b
      : a;
  }
  function p(m, y) {
    if (y.atomValues.has(t)) return nt(y.atomValues.get(t));
    if (y.nonvalidatedAtoms.has(t)) {
      if (l != null) return l;
      if (n == null) return a;
      const b = y.nonvalidatedAtoms.get(t),
        C = n.validator(b, jo);
      return (l = C instanceof Jr ? a : bi(C)), l;
    } else return a;
  }
  function h() {
    l = void 0;
  }
  function g(m, y, b) {
    if (y.atomValues.has(t)) {
      const C = nt(y.atomValues.get(t));
      if (C.state === "hasValue" && b === C.contents) return new Map();
    } else if (!y.nonvalidatedAtoms.has(t) && b instanceof Jr) return new Map();
    return (l = void 0), new Map().set(t, bi(b));
  }
  function x() {
    return KC(t) !== void 0 && o <= 0;
  }
  const v = C5({
    key: t,
    nodeType: "atom",
    peek: f,
    get: p,
    set: g,
    init: d,
    invalidate: h,
    shouldDeleteConfigOnRelease: x,
    dangerouslyAllowMutability: e.dangerouslyAllowMutability,
    persistence_UNSTABLE: e.persistence_UNSTABLE
      ? {
          type: e.persistence_UNSTABLE.type,
          backButton: e.persistence_UNSTABLE.backButton,
        }
      : void 0,
    shouldRestoreFromSnapshots: !0,
    retainedBy: r,
  });
  return v;
}
function Bm(e) {
  const { ...t } = e,
    n = "default" in e ? e.default : new Promise(() => {});
  return E5(n) ? I5({ ...t, default: n }) : D5({ ...t, default: n });
}
function I5(e) {
  const t = Bm({
      ...e,
      default: jo,
      persistence_UNSTABLE:
        e.persistence_UNSTABLE === void 0
          ? void 0
          : {
              ...e.persistence_UNSTABLE,
              validator: (r) =>
                r instanceof Jr
                  ? r
                  : nt(e.persistence_UNSTABLE).validator(r, jo),
            },
      effects: e.effects,
      effects_UNSTABLE: e.effects_UNSTABLE,
    }),
    n = fa({
      key: `${e.key}__withFallback`,
      get: ({ get: r }) => {
        const o = r(t);
        return o instanceof Jr ? e.default : o;
      },
      set: ({ set: r }, o) => r(t, o),
      cachePolicy_UNSTABLE: { eviction: "most-recent" },
      dangerouslyAllowMutability: e.dangerouslyAllowMutability,
    });
  return R5(n.key, KC(e.key)), n;
}
Bm.value = (e) => new GC(e);
var qC = Bm;
class A5 {
  constructor(t) {
    var n;
    Ce(this, "_map", void 0),
      Ce(this, "_keyMapper", void 0),
      (this._map = new Map()),
      (this._keyMapper =
        (n = t == null ? void 0 : t.mapKey) !== null && n !== void 0
          ? n
          : (r) => r);
  }
  size() {
    return this._map.size;
  }
  has(t) {
    return this._map.has(this._keyMapper(t));
  }
  get(t) {
    return this._map.get(this._keyMapper(t));
  }
  set(t, n) {
    this._map.set(this._keyMapper(t), n);
  }
  delete(t) {
    this._map.delete(this._keyMapper(t));
  }
  clear() {
    this._map.clear();
  }
}
var N5 = { MapCache: A5 },
  O5 = N5.MapCache,
  M5 = Object.freeze({ __proto__: null, MapCache: O5 });
const { LRUCache: o1 } = UC,
  { MapCache: $5 } = M5,
  au = { equality: "reference", eviction: "none", maxSize: 1 / 0 };
function L5({
  equality: e = au.equality,
  eviction: t = au.eviction,
  maxSize: n = au.maxSize,
} = au) {
  const r = B5(e);
  return F5(t, n, r);
}
function B5(e) {
  switch (e) {
    case "reference":
      return (t) => t;
    case "value":
      return (t) => Bd(t);
  }
  throw Te(`Unrecognized equality policy ${e}`);
}
function F5(e, t, n) {
  switch (e) {
    case "keep-all":
      return new $5({ mapKey: n });
    case "lru":
      return new o1({ mapKey: n, maxSize: nt(t) });
    case "most-recent":
      return new o1({ mapKey: n, maxSize: 1 });
  }
  throw Te(`Unrecognized eviction policy ${e}`);
}
var YC = L5;
const { setConfigDeletionHandler: j5 } = bn;
function z5(e) {
  var t, n;
  const r = YC({
    equality:
      (t =
        (n = e.cachePolicyForParams_UNSTABLE) === null || n === void 0
          ? void 0
          : n.equality) !== null && t !== void 0
        ? t
        : "value",
    eviction: "keep-all",
  });
  return (o) => {
    var i, a;
    const l = r.get(o);
    if (l != null) return l;
    const { cachePolicyForParams_UNSTABLE: s, ...u } = e,
      c = "default" in e ? e.default : new Promise(() => {}),
      d = qC({
        ...u,
        key: `${e.key}__${(i = Bd(o)) !== null && i !== void 0 ? i : "void"}`,
        default: typeof c == "function" ? c(o) : c,
        retainedBy_UNSTABLE:
          typeof e.retainedBy_UNSTABLE == "function"
            ? e.retainedBy_UNSTABLE(o)
            : e.retainedBy_UNSTABLE,
        effects:
          typeof e.effects == "function"
            ? e.effects(o)
            : typeof e.effects_UNSTABLE == "function"
            ? e.effects_UNSTABLE(o)
            : (a = e.effects) !== null && a !== void 0
            ? a
            : e.effects_UNSTABLE,
      });
    return (
      r.set(o, d),
      j5(d.key, () => {
        r.delete(o);
      }),
      d
    );
  };
}
var U5 = z5;
const { setConfigDeletionHandler: V5 } = bn;
let W5 = 0;
function H5(e) {
  var t, n;
  const r = YC({
    equality:
      (t =
        (n = e.cachePolicyForParams_UNSTABLE) === null || n === void 0
          ? void 0
          : n.equality) !== null && t !== void 0
        ? t
        : "value",
    eviction: "keep-all",
  });
  return (o) => {
    var i;
    let a;
    try {
      a = r.get(o);
    } catch (f) {
      throw Te(`Problem with cache lookup for selector ${e.key}: ${f.message}`);
    }
    if (a != null) return a;
    const l = `${e.key}__selectorFamily/${
        (i = Bd(o, { allowFunctions: !0 })) !== null && i !== void 0
          ? i
          : "void"
      }/${W5++}`,
      s = (f) => e.get(o)(f),
      u = e.cachePolicy_UNSTABLE,
      c =
        typeof e.retainedBy_UNSTABLE == "function"
          ? e.retainedBy_UNSTABLE(o)
          : e.retainedBy_UNSTABLE;
    let d;
    if (e.set != null) {
      const f = e.set;
      d = fa({
        key: l,
        get: s,
        set: (h, g) => f(o)(h, g),
        cachePolicy_UNSTABLE: u,
        dangerouslyAllowMutability: e.dangerouslyAllowMutability,
        retainedBy_UNSTABLE: c,
      });
    } else
      d = fa({
        key: l,
        get: s,
        cachePolicy_UNSTABLE: u,
        dangerouslyAllowMutability: e.dangerouslyAllowMutability,
        retainedBy_UNSTABLE: c,
      });
    return (
      r.set(o, d),
      V5(d.key, () => {
        r.delete(o);
      }),
      d
    );
  };
}
var ko = H5;
const G5 = ko({
  key: "__constant",
  get: (e) => () => e,
  cachePolicyForParams_UNSTABLE: { equality: "reference" },
});
function K5(e) {
  return G5(e);
}
var q5 = K5;
const Y5 = ko({
  key: "__error",
  get: (e) => () => {
    throw Te(e);
  },
  cachePolicyForParams_UNSTABLE: { equality: "reference" },
});
function X5(e) {
  return Y5(e);
}
var Q5 = X5;
function Z5(e) {
  return e;
}
var J5 = Z5;
const {
  loadableWithError: XC,
  loadableWithPromise: QC,
  loadableWithValue: ZC,
} = gs;
function Fd(e, t) {
  const n = Array(t.length).fill(void 0),
    r = Array(t.length).fill(void 0);
  for (const [o, i] of t.entries())
    try {
      n[o] = e(i);
    } catch (a) {
      r[o] = a;
    }
  return [n, r];
}
function eB(e) {
  return e != null && !Xe(e);
}
function jd(e) {
  return Array.isArray(e) ? e : Object.getOwnPropertyNames(e).map((t) => e[t]);
}
function Ov(e, t) {
  return Array.isArray(e)
    ? t
    : Object.getOwnPropertyNames(e).reduce(
        (n, r, o) => ({ ...n, [r]: t[o] }),
        {}
      );
}
function Gi(e, t, n) {
  const r = n.map((o, i) => (o == null ? ZC(t[i]) : Xe(o) ? QC(o) : XC(o)));
  return Ov(e, r);
}
function tB(e, t) {
  return t.map((n, r) => (n === void 0 ? e[r] : n));
}
const nB = ko({
    key: "__waitForNone",
    get:
      (e) =>
      ({ get: t }) => {
        const n = jd(e),
          [r, o] = Fd(t, n);
        return Gi(e, r, o);
      },
    dangerouslyAllowMutability: !0,
  }),
  rB = ko({
    key: "__waitForAny",
    get:
      (e) =>
      ({ get: t }) => {
        const n = jd(e),
          [r, o] = Fd(t, n);
        return o.some((i) => !Xe(i))
          ? Gi(e, r, o)
          : new Promise((i) => {
              for (const [a, l] of o.entries())
                Xe(l) &&
                  l
                    .then((s) => {
                      (r[a] = s), (o[a] = void 0), i(Gi(e, r, o));
                    })
                    .catch((s) => {
                      (o[a] = s), i(Gi(e, r, o));
                    });
            });
      },
    dangerouslyAllowMutability: !0,
  }),
  oB = ko({
    key: "__waitForAll",
    get:
      (e) =>
      ({ get: t }) => {
        const n = jd(e),
          [r, o] = Fd(t, n);
        if (o.every((a) => a == null)) return Ov(e, r);
        const i = o.find(eB);
        if (i != null) throw i;
        return Promise.all(o).then((a) => Ov(e, tB(r, a)));
      },
    dangerouslyAllowMutability: !0,
  }),
  iB = ko({
    key: "__waitForAllSettled",
    get:
      (e) =>
      ({ get: t }) => {
        const n = jd(e),
          [r, o] = Fd(t, n);
        return o.every((i) => !Xe(i))
          ? Gi(e, r, o)
          : Promise.all(
              o.map((i, a) =>
                Xe(i)
                  ? i
                      .then((l) => {
                        (r[a] = l), (o[a] = void 0);
                      })
                      .catch((l) => {
                        (r[a] = void 0), (o[a] = l);
                      })
                  : null
              )
            ).then(() => Gi(e, r, o));
      },
    dangerouslyAllowMutability: !0,
  }),
  aB = ko({
    key: "__noWait",
    get:
      (e) =>
      ({ get: t }) => {
        try {
          return fa.value(ZC(t(e)));
        } catch (n) {
          return fa.value(Xe(n) ? QC(n) : XC(n));
        }
      },
    dangerouslyAllowMutability: !0,
  });
var lB = {
  waitForNone: nB,
  waitForAny: rB,
  waitForAll: oB,
  waitForAllSettled: iB,
  noWait: aB,
};
const { RecoilLoadable: sB } = gs,
  { DefaultValue: uB } = bn,
  { RecoilRoot: cB, useRecoilStoreID: dB } = Hr,
  { isRecoilValue: fB } = ua,
  { retentionZone: pB } = _d,
  { freshSnapshot: vB } = Nd,
  {
    useRecoilState: hB,
    useRecoilState_TRANSITION_SUPPORT_UNSTABLE: mB,
    useRecoilStateLoadable: gB,
    useRecoilValue: yB,
    useRecoilValue_TRANSITION_SUPPORT_UNSTABLE: bB,
    useRecoilValueLoadable: xB,
    useRecoilValueLoadable_TRANSITION_SUPPORT_UNSTABLE: SB,
    useResetRecoilState: wB,
    useSetRecoilState: CB,
  } = N3,
  {
    useGotoRecoilSnapshot: RB,
    useRecoilSnapshot: EB,
    useRecoilTransactionObserver: TB,
  } = MC,
  { useRecoilCallback: _B } = FC,
  {
    noWait: PB,
    waitForAll: kB,
    waitForAllSettled: DB,
    waitForAny: IB,
    waitForNone: AB,
  } = lB;
var zd = {
    DefaultValue: uB,
    isRecoilValue: fB,
    RecoilLoadable: sB,
    RecoilEnv: Sa,
    RecoilRoot: cB,
    useRecoilStoreID: dB,
    useRecoilBridgeAcrossReactRoots_UNSTABLE: aL,
    atom: qC,
    selector: fa,
    atomFamily: U5,
    selectorFamily: ko,
    constSelector: q5,
    errorSelector: Q5,
    readOnlySelector: J5,
    noWait: PB,
    waitForNone: AB,
    waitForAny: IB,
    waitForAll: kB,
    waitForAllSettled: DB,
    useRecoilValue: yB,
    useRecoilValueLoadable: xB,
    useRecoilState: hB,
    useRecoilStateLoadable: gB,
    useSetRecoilState: CB,
    useResetRecoilState: wB,
    useGetRecoilValueInfo_UNSTABLE: eL,
    useRecoilRefresher_UNSTABLE: ML,
    useRecoilValueLoadable_TRANSITION_SUPPORT_UNSTABLE: SB,
    useRecoilValue_TRANSITION_SUPPORT_UNSTABLE: bB,
    useRecoilState_TRANSITION_SUPPORT_UNSTABLE: mB,
    useRecoilCallback: _B,
    useRecoilTransaction_UNSTABLE: jL,
    useGotoRecoilSnapshot: RB,
    useRecoilSnapshot: EB,
    useRecoilTransactionObserver_UNSTABLE: TB,
    snapshot_UNSTABLE: vB,
    useRetain: Nm,
    retentionZone: pB,
  },
  NB = zd.RecoilRoot,
  Fm = zd.atom,
  Tr = zd.useRecoilValue,
  Xn = zd.useRecoilState;
const ui = Fm({
    key: "card Array",
    default: JSON.parse(localStorage.getItem("data")) || [],
  }),
  Ud = Fm({ key: "task details", default: {} }),
  dr = Fm({ key: "dark mode", default: !1 });
function OB() {
  const e = Tr(dr),
    [t, n] = S.useState(!0),
    [r, o] = S.useState(""),
    [i, a] = Xn(ui),
    l = Tr(Ud),
    s = i.findIndex((y) => y.id === l.mainId),
    u = [...i[s].task],
    c = u.findIndex((y) => y.id === l.id),
    [d, f] = S.useState(!1),
    [p, h] = S.useState(""),
    g = (y) => {
      o(y.target.value);
    },
    x = () => {
      n(!1);
    },
    v = () => {
      if (!r) {
        h("Enter something");
        return;
      }
      const y = [...u[c].Comment],
        b = { ...u[c] };
      y.unshift({
        activity: r,
        time:
          new Date(Date.now()).getHours() +
          ":" +
          new Date(Date.now()).getMinutes(),
      });
      const C = { ...b, Comment: y },
        R = u.map((D) => (D.id === l.id ? C : D)),
        E = i.map((D) => (D.id === l.mainId ? { ...D, task: R } : D));
      a(E), localStorage.setItem("data", JSON.stringify(E)), n(!0), o("");
    },
    m = () => {
      f(!d);
    };
  return w.jsxs("div", {
    className: sn.mainContainer,
    children: [
      w.jsxs("div", {
        className: sn.container,
        children: [
          w.jsxs("div", {
            className: sn.activityDiv,
            children: [w.jsx(_4, {}), w.jsx("h3", { children: "Activity" })],
          }),
          w.jsx("button", {
            className: sn.showBtn,
            onClick: m,
            children: d ? "Hide details" : "Show details",
          }),
        ],
      }),
      w.jsxs("div", {
        className: sn.editableDiv,
        style: { alignItems: t ? "center" : "self-start" },
        children: [
          w.jsx("h3", { className: sn.headingUsername, children: "PR" }),
          t
            ? w.jsx("span", {
                className: sn.editedArea,
                onClick: x,
                children: "Write a comment...",
              })
            : w.jsxs("div", {
                className: sn.tetContainDiv,
                children: [
                  w.jsx("textarea", {
                    style: e
                      ? {
                          backgroundColor: "transparent",
                          color: "white",
                          borderColor: "white",
                        }
                      : null,
                    cols: "58",
                    rows: "4",
                    value: r,
                    onChange: g,
                    placeholder: "Enter Comments here....",
                  }),
                  p && w.jsx("span", { style: { color: "red" }, children: p }),
                  w.jsxs("div", {
                    className: sn.saveBtnDiv,
                    children: [
                      w.jsx("button", { onClick: v, children: "Save" }),
                      w.jsx("input", { type: "checkbox" }),
                      w.jsx("p", { children: "Watch" }),
                    ],
                  }),
                ],
              }),
        ],
      }),
      w.jsx("div", {
        className: sn.comments,
        children: d
          ? u[c].Comment.map((y, b) =>
              w.jsxs(
                "div",
                {
                  className: sn.comment,
                  children: [
                    w.jsx("h3", { className: sn.userProfile, children: "PR" }),
                    w.jsx("span", {
                      style: {
                        display: "flex",
                        flexDirection: "row",
                        gap: "1rem",
                      },
                      children: w.jsxs("span", {
                        className: sn.activityBox,
                        children: [
                          w.jsx("p", {
                            style: { fontSize: "18px" },
                            children: y.activity,
                          }),
                          w.jsxs("span", {
                            className: sn.time,
                            children: ["Time:", y.time],
                          }),
                        ],
                      }),
                    }),
                  ],
                },
                b
              )
            )
          : "",
      }),
    ],
  });
}
const MB = "_descriptionConatiner_1mimo_1",
  $B = "_header_1mimo_21",
  LB = "_content_1mimo_55",
  BB = "_darkContent_1mimo_83",
  FB = "_editorBox_1mimo_95",
  jB = "_bottomSection_1mimo_119",
  zB = "_btnContainer_1mimo_155",
  UB = "_saveBtn_1mimo_169",
  VB = "_cancelBtn_1mimo_195",
  WB = "_description_1mimo_1",
  HB = "_editBtn_1mimo_223",
  tr = {
    descriptionConatiner: MB,
    header: $B,
    content: LB,
    darkContent: BB,
    editorBox: FB,
    bottomSection: jB,
    btnContainer: zB,
    saveBtn: UB,
    cancelBtn: VB,
    description: WB,
    editBtn: HB,
  };
function GB(e) {
  return On({
    tag: "svg",
    attr: { viewBox: "0 0 24 24", fill: "none" },
    child: [
      { tag: "path", attr: { d: "M4 4H8V8H4V4Z", fill: "currentColor" } },
      { tag: "path", attr: { d: "M4 10H8V14H4V10Z", fill: "currentColor" } },
      { tag: "path", attr: { d: "M8 16H4V20H8V16Z", fill: "currentColor" } },
      { tag: "path", attr: { d: "M10 4H14V8H10V4Z", fill: "currentColor" } },
      { tag: "path", attr: { d: "M14 10H10V14H14V10Z", fill: "currentColor" } },
      { tag: "path", attr: { d: "M10 16H14V20H10V16Z", fill: "currentColor" } },
      { tag: "path", attr: { d: "M20 4H16V8H20V4Z", fill: "currentColor" } },
      { tag: "path", attr: { d: "M16 10H20V14H16V10Z", fill: "currentColor" } },
      { tag: "path", attr: { d: "M20 16H16V20H20V16Z", fill: "currentColor" } },
    ],
  })(e);
}
function KB(e) {
  return On({
    tag: "svg",
    attr: { viewBox: "0 0 24 24", fill: "none" },
    child: [
      {
        tag: "path",
        attr: {
          d: "M4 6C4 5.44772 4.44772 5 5 5H19C19.5523 5 20 5.44772 20 6C20 6.55228 19.5523 7 19 7H5C4.44772 7 4 6.55228 4 6Z",
          fill: "currentColor",
        },
      },
      {
        tag: "path",
        attr: {
          d: "M4 18C4 17.4477 4.44772 17 5 17H19C19.5523 17 20 17.4477 20 18C20 18.5523 19.5523 19 19 19H5C4.44772 19 4 18.5523 4 18Z",
          fill: "currentColor",
        },
      },
      {
        tag: "path",
        attr: {
          d: "M5 11C4.44772 11 4 11.4477 4 12C4 12.5523 4.44772 13 5 13H13C13.5523 13 14 12.5523 14 12C14 11.4477 13.5523 11 13 11H5Z",
          fill: "currentColor",
        },
      },
    ],
  })(e);
}
function qB(e) {
  return On({
    tag: "svg",
    attr: { version: "1.1", viewBox: "0 0 17 17" },
    child: [
      { tag: "g", attr: {}, child: [] },
      {
        tag: "path",
        attr: {
          d: "M16.469 2.222h-1.927c-0.292 0-0.531 0.234-0.531 0.521v0.667l-10.995 4.030v-0.27c0-0.43-0.358-0.781-0.797-0.781h-1.422c-0.439 0-0.797 0.351-0.797 0.781v4.688c0 0.429 0.358 0.781 0.797 0.781h1.422c0.438 0 0.797-0.352 0.797-0.781v-0.331l1.034 0.189c-0.023 0.163-0.038 0.326-0.038 0.491 0 1.897 1.561 3.441 3.479 3.441 1.657 0 3.030-1.128 3.38-2.682l3.14 0.576v0.659c0 0.287 0.239 0.521 0.531 0.521h1.927c0.292 0 0.531-0.234 0.531-0.521v-11.458c0-0.287-0.239-0.521-0.531-0.521zM7.491 14.648c-1.367 0-2.479-1.095-2.479-2.441 0-0.104 0.027-0.205 0.040-0.308l4.84 0.888c-0.264 1.082-1.235 1.861-2.401 1.861zM16 13.722h-0.989v-1.013l-12.995-2.383v1.312h-1.016v-4.25h1.016v1.484l12.995-4.763v-0.887h0.989v10.5z",
        },
      },
    ],
  })(e);
}
function YB(e) {
  return On({
    tag: "svg",
    attr: { viewBox: "0 0 1024 1024" },
    child: [
      {
        tag: "path",
        attr: {
          d: "M864 256H736v-80c0-35.3-28.7-64-64-64H352c-35.3 0-64 28.7-64 64v80H160c-17.7 0-32 14.3-32 32v32c0 4.4 3.6 8 8 8h60.4l24.7 523c1.6 34.1 29.8 61 63.9 61h454c34.2 0 62.3-26.8 63.9-61l24.7-523H888c4.4 0 8-3.6 8-8v-32c0-17.7-14.3-32-32-32zm-200 0H360v-72h304v72z",
        },
      },
    ],
  })(e);
}
function XB(e) {
  return On({
    tag: "svg",
    attr: { viewBox: "0 0 1024 1024" },
    child: [
      {
        tag: "path",
        attr: {
          d: "M908.1 353.1l-253.9-36.9L540.7 86.1c-3.1-6.3-8.2-11.4-14.5-14.5-15.8-7.8-35-1.3-42.9 14.5L369.8 316.2l-253.9 36.9c-7 1-13.4 4.3-18.3 9.3a32.05 32.05 0 0 0 .6 45.3l183.7 179.1-43.4 252.9a31.95 31.95 0 0 0 46.4 33.7L512 754l227.1 119.4c6.2 3.3 13.4 4.4 20.3 3.2 17.4-3 29.1-19.5 26.1-36.9l-43.4-252.9 183.7-179.1c5-4.9 8.3-11.3 9.3-18.3 2.7-17.5-9.5-33.7-27-36.3z",
        },
      },
    ],
  })(e);
}
function QB(e) {
  return On({
    tag: "svg",
    attr: { t: "1569683368540", viewBox: "0 0 1024 1024", version: "1.1" },
    child: [
      { tag: "defs", attr: {}, child: [] },
      {
        tag: "path",
        attr: {
          d: "M899.1 869.6l-53-305.6H864c14.4 0 26-11.6 26-26V346c0-14.4-11.6-26-26-26H618V138c0-14.4-11.6-26-26-26H432c-14.4 0-26 11.6-26 26v182H160c-14.4 0-26 11.6-26 26v192c0 14.4 11.6 26 26 26h17.9l-53 305.6c-0.3 1.5-0.4 3-0.4 4.4 0 14.4 11.6 26 26 26h723c1.5 0 3-0.1 4.4-0.4 14.2-2.4 23.7-15.9 21.2-30zM204 390h272V182h72v208h272v104H204V390z m468 440V674c0-4.4-3.6-8-8-8h-48c-4.4 0-8 3.6-8 8v156H416V674c0-4.4-3.6-8-8-8h-48c-4.4 0-8 3.6-8 8v156H202.8l45.1-260H776l45.1 260H672z",
        },
      },
    ],
  })(e);
}
function ZB(e) {
  return On({
    tag: "svg",
    attr: { viewBox: "0 0 1024 1024" },
    child: [
      {
        tag: "path",
        attr: {
          d: "M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372 372 166.6 372 372-166.6 372-372 372z",
        },
      },
      {
        tag: "path",
        attr: {
          d: "M464 336a48 48 0 1 0 96 0 48 48 0 1 0-96 0zm72 112h-48c-4.4 0-8 3.6-8 8v272c0 4.4 3.6 8 8 8h48c4.4 0 8-3.6 8-8V456c0-4.4-3.6-8-8-8z",
        },
      },
    ],
  })(e);
}
function JB(e) {
  return On({
    tag: "svg",
    attr: { viewBox: "0 0 1024 1024" },
    child: [
      {
        tag: "path",
        attr: {
          d: "M574 665.4a8.03 8.03 0 0 0-11.3 0L446.5 781.6c-53.8 53.8-144.6 59.5-204 0-59.5-59.5-53.8-150.2 0-204l116.2-116.2c3.1-3.1 3.1-8.2 0-11.3l-39.8-39.8a8.03 8.03 0 0 0-11.3 0L191.4 526.5c-84.6 84.6-84.6 221.5 0 306s221.5 84.6 306 0l116.2-116.2c3.1-3.1 3.1-8.2 0-11.3L574 665.4zm258.6-474c-84.6-84.6-221.5-84.6-306 0L410.3 307.6a8.03 8.03 0 0 0 0 11.3l39.7 39.7c3.1 3.1 8.2 3.1 11.3 0l116.2-116.2c53.8-53.8 144.6-59.5 204 0 59.5 59.5 53.8 150.2 0 204L665.3 562.6a8.03 8.03 0 0 0 0 11.3l39.8 39.8c3.1 3.1 8.2 3.1 11.3 0l116.2-116.2c84.5-84.6 84.5-221.5 0-306.1zM610.1 372.3a8.03 8.03 0 0 0-11.3 0L372.3 598.7a8.03 8.03 0 0 0 0 11.3l39.6 39.6c3.1 3.1 8.2 3.1 11.3 0l226.4-226.4c3.1-3.1 3.1-8.2 0-11.3l-39.5-39.6z",
        },
      },
    ],
  })(e);
}
function e6(e) {
  return On({
    tag: "svg",
    attr: { viewBox: "0 0 1024 1024" },
    child: [
      {
        tag: "path",
        attr: {
          d: "M908.1 353.1l-253.9-36.9L540.7 86.1c-3.1-6.3-8.2-11.4-14.5-14.5-15.8-7.8-35-1.3-42.9 14.5L369.8 316.2l-253.9 36.9c-7 1-13.4 4.3-18.3 9.3a32.05 32.05 0 0 0 .6 45.3l183.7 179.1-43.4 252.9a31.95 31.95 0 0 0 46.4 33.7L512 754l227.1 119.4c6.2 3.3 13.4 4.4 20.3 3.2 17.4-3 29.1-19.5 26.1-36.9l-43.4-252.9 183.7-179.1c5-4.9 8.3-11.3 9.3-18.3 2.7-17.5-9.5-33.7-27-36.3zM664.8 561.6l36.1 210.3L512 672.7 323.1 772l36.1-210.3-152.8-149L417.6 382 512 190.7 606.4 382l211.2 30.7-152.8 148.9z",
        },
      },
    ],
  })(e);
}
const t6 = () => {
    const e = Tr(dr),
      [t, n] = Xn(Ud),
      [r, o] = S.useState(!1),
      [i, a] = S.useState(""),
      [l, s] = Xn(ui),
      u = l.findIndex((g) => g.id === t.mainId),
      d = [...l[u].task].findIndex((g) => g.id === t.id);
    function f() {
      o(!r), a("");
    }
    const p = () => {
      if (!i) return;
      const g = l.findIndex((R) => R.id === t.mainId),
        x = [...l[g].task],
        v = x.findIndex((R) => R.id === t.id),
        y = { ...x[v], description: i },
        b = x.map((R) => (R.id === t.id ? y : R)),
        C = l.map((R) => (R.id == t.mainId ? { ...R, task: b } : R));
      s(C), localStorage.setItem("data", JSON.stringify(C)), o(!1), a("");
    };
    function h() {
      o(!0), a(l[u].task[d].description);
    }
    return w.jsxs("div", {
      className: tr.descriptionConatiner,
      children: [
        w.jsxs("div", {
          className: tr.header,
          children: [
            w.jsx(KB, {}),
            w.jsx("h3", { children: "Description" }),
            r && w.jsx("p", { children: w.jsx(ZB, {}) }),
            !r && l[u].task[d].description
              ? w.jsx("button", {
                  className: tr.editBtn,
                  onClick: h,
                  children: "Edit",
                })
              : null,
          ],
        }),
        w.jsx("div", {
          className: `${tr.content} ${e ? tr.darkContent : null} `,
          children: r
            ? w.jsxs("div", {
                style: { display: "flex", flexDirection: "column" },
                children: [
                  w.jsx("div", {
                    children: w.jsx("textarea", {
                      placeholder: "Enter desription here...",
                      id: "",
                      cols: "62",
                      rows: "4",
                      value: i,
                      onChange: (g) => a(g.target.value),
                    }),
                  }),
                  w.jsxs("div", {
                    className: tr.bottomSection,
                    children: [
                      w.jsxs("div", {
                        className: tr.btnContainer,
                        children: [
                          w.jsx("button", {
                            className: tr.saveBtn,
                            onClick: p,
                            children: "Save",
                          }),
                          w.jsx("button", {
                            className: tr.cancelBtn,
                            onClick: f,
                            children: "Cancel",
                          }),
                        ],
                      }),
                      w.jsxs("span", {
                        children: [
                          w.jsx(qB, { color: "blue" }),
                          w.jsx("p", { children: "Share Feedback" }),
                        ],
                      }),
                    ],
                  }),
                ],
              })
            : !l[u].task[d].description &&
              w.jsx("div", {
                className: tr.editorBox,
                onClick: f,
                children: "Add a more detailed description",
              }),
        }),
        w.jsx("div", {
          className: tr.description,
          children: !r && w.jsx("p", { children: l[u].task[d].description }),
        }),
      ],
    });
  },
  n6 = "_title_div_cqlfl_1",
  r6 = "_title_text_cqlfl_17",
  o6 = "_dark_cqlfl_31",
  i6 = "_title_box_cqlfl_39",
  lu = { title_div: n6, title_text: r6, dark: o6, title_box: i6 };
var jm = {},
  a6 = rn;
Object.defineProperty(jm, "__esModule", { value: !0 });
var JC = (jm.default = void 0),
  l6 = a6(on()),
  s6 = w,
  u6 = (0, l6.default)(
    (0, s6.jsx)("path", {
      d: "M21 3H3c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h18c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 13H3V5h18v11z",
    }),
    "VideoLabel"
  );
JC = jm.default = u6;
function c6() {
  const [e, t] = S.useState(""),
    [n, r] = Xn(Ud),
    [o, i] = Xn(ui),
    a = Tr(dr);
  function l(d) {
    t(d.target.value);
  }
  const s = () => {
      const d = o.findIndex((g) => g.id === n.mainId),
        f = o[d].task.map((g) => {
          if (g.id === n.id) {
            const x = { ...g };
            return (x.title = e), x;
          }
          return g;
        }),
        p = { ...o[d], task: f },
        h = o.map((g) => (g.id === n.mainId ? p : g));
      i(h), localStorage.setItem("data", JSON.stringify(h));
    },
    u = o.findIndex((d) => d.id === n.mainId),
    c = o[u].task.findIndex((d) => d.id === n.id);
  return (
    oe.useEffect(() => {
      t(o[u].task[c].title);
    }, []),
    w.jsxs("div", {
      className: lu.title_div,
      children: [
        w.jsx(JC, { fontSize: "small" }),
        w.jsxs("div", {
          className: lu.title_text,
          children: [
            w.jsx("input", {
              type: "text",
              value: e,
              onChange: (d) => l(d),
              onBlur: s,
              className: `${lu.title_box}  ${a ? lu.dark : null}`,
            }),
            w.jsxs("span", {
              children: ["in list ", w.jsx("u", { children: o[u].title })],
            }),
          ],
        }),
      ],
    })
  );
}
/**
 * @remix-run/router v1.6.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ function Le() {
  return (
    (Le = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
              Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    Le.apply(this, arguments)
  );
}
var mt;
(function (e) {
  (e.Pop = "POP"), (e.Push = "PUSH"), (e.Replace = "REPLACE");
})(mt || (mt = {}));
const i1 = "popstate";
function d6(e) {
  e === void 0 && (e = {});
  function t(r, o) {
    let { pathname: i, search: a, hash: l } = r.location;
    return Xl(
      "",
      { pathname: i, search: a, hash: l },
      (o.state && o.state.usr) || null,
      (o.state && o.state.key) || "default"
    );
  }
  function n(r, o) {
    return typeof o == "string" ? o : Cs(o);
  }
  return p6(t, n, null, e);
}
function _e(e, t) {
  if (e === !1 || e === null || typeof e > "u") throw new Error(t);
}
function pa(e, t) {
  if (!e) {
    typeof console < "u" && console.warn(t);
    try {
      throw new Error(t);
    } catch {}
  }
}
function f6() {
  return Math.random().toString(36).substr(2, 8);
}
function a1(e, t) {
  return { usr: e.state, key: e.key, idx: t };
}
function Xl(e, t, n, r) {
  return (
    n === void 0 && (n = null),
    Le(
      { pathname: typeof e == "string" ? e : e.pathname, search: "", hash: "" },
      typeof t == "string" ? Gr(t) : t,
      { state: n, key: (t && t.key) || r || f6() }
    )
  );
}
function Cs(e) {
  let { pathname: t = "/", search: n = "", hash: r = "" } = e;
  return (
    n && n !== "?" && (t += n.charAt(0) === "?" ? n : "?" + n),
    r && r !== "#" && (t += r.charAt(0) === "#" ? r : "#" + r),
    t
  );
}
function Gr(e) {
  let t = {};
  if (e) {
    let n = e.indexOf("#");
    n >= 0 && ((t.hash = e.substr(n)), (e = e.substr(0, n)));
    let r = e.indexOf("?");
    r >= 0 && ((t.search = e.substr(r)), (e = e.substr(0, r))),
      e && (t.pathname = e);
  }
  return t;
}
function p6(e, t, n, r) {
  r === void 0 && (r = {});
  let { window: o = document.defaultView, v5Compat: i = !1 } = r,
    a = o.history,
    l = mt.Pop,
    s = null,
    u = c();
  u == null && ((u = 0), a.replaceState(Le({}, a.state, { idx: u }), ""));
  function c() {
    return (a.state || { idx: null }).idx;
  }
  function d() {
    l = mt.Pop;
    let x = c(),
      v = x == null ? null : x - u;
    (u = x), s && s({ action: l, location: g.location, delta: v });
  }
  function f(x, v) {
    l = mt.Push;
    let m = Xl(g.location, x, v);
    n && n(m, x), (u = c() + 1);
    let y = a1(m, u),
      b = g.createHref(m);
    try {
      a.pushState(y, "", b);
    } catch {
      o.location.assign(b);
    }
    i && s && s({ action: l, location: g.location, delta: 1 });
  }
  function p(x, v) {
    l = mt.Replace;
    let m = Xl(g.location, x, v);
    n && n(m, x), (u = c());
    let y = a1(m, u),
      b = g.createHref(m);
    a.replaceState(y, "", b),
      i && s && s({ action: l, location: g.location, delta: 0 });
  }
  function h(x) {
    let v = o.location.origin !== "null" ? o.location.origin : o.location.href,
      m = typeof x == "string" ? x : Cs(x);
    return (
      _e(
        v,
        "No window.location.(origin|href) available to create URL for href: " +
          m
      ),
      new URL(m, v)
    );
  }
  let g = {
    get action() {
      return l;
    },
    get location() {
      return e(o, a);
    },
    listen(x) {
      if (s) throw new Error("A history only accepts one active listener");
      return (
        o.addEventListener(i1, d),
        (s = x),
        () => {
          o.removeEventListener(i1, d), (s = null);
        }
      );
    },
    createHref(x) {
      return t(o, x);
    },
    createURL: h,
    encodeLocation(x) {
      let v = h(x);
      return { pathname: v.pathname, search: v.search, hash: v.hash };
    },
    push: f,
    replace: p,
    go(x) {
      return a.go(x);
    },
  };
  return g;
}
var bt;
(function (e) {
  (e.data = "data"),
    (e.deferred = "deferred"),
    (e.redirect = "redirect"),
    (e.error = "error");
})(bt || (bt = {}));
const v6 = new Set([
  "lazy",
  "caseSensitive",
  "path",
  "id",
  "index",
  "children",
]);
function h6(e) {
  return e.index === !0;
}
function eR(e, t, n, r) {
  return (
    n === void 0 && (n = []),
    r === void 0 && (r = {}),
    e.map((o, i) => {
      let a = [...n, i],
        l = typeof o.id == "string" ? o.id : a.join("-");
      if (
        (_e(
          o.index !== !0 || !o.children,
          "Cannot specify children on an index route"
        ),
        _e(
          !r[l],
          'Found a route id collision on id "' +
            l +
            `".  Route id's must be globally unique within Data Router usages`
        ),
        h6(o))
      ) {
        let s = Le({}, o, t(o), { id: l });
        return (r[l] = s), s;
      } else {
        let s = Le({}, o, t(o), { id: l, children: void 0 });
        return (
          (r[l] = s), o.children && (s.children = eR(o.children, t, a, r)), s
        );
      }
    })
  );
}
function $i(e, t, n) {
  n === void 0 && (n = "/");
  let r = typeof t == "string" ? Gr(t) : t,
    o = Rs(r.pathname || "/", n);
  if (o == null) return null;
  let i = tR(e);
  m6(i);
  let a = null;
  for (let l = 0; a == null && l < i.length; ++l) a = E6(i[l], P6(o));
  return a;
}
function tR(e, t, n, r) {
  t === void 0 && (t = []), n === void 0 && (n = []), r === void 0 && (r = "");
  let o = (i, a, l) => {
    let s = {
      relativePath: l === void 0 ? i.path || "" : l,
      caseSensitive: i.caseSensitive === !0,
      childrenIndex: a,
      route: i,
    };
    s.relativePath.startsWith("/") &&
      (_e(
        s.relativePath.startsWith(r),
        'Absolute route path "' +
          s.relativePath +
          '" nested under path ' +
          ('"' + r + '" is not valid. An absolute child route path ') +
          "must start with the combined path of all its parent routes."
      ),
      (s.relativePath = s.relativePath.slice(r.length)));
    let u = mo([r, s.relativePath]),
      c = n.concat(s);
    i.children &&
      i.children.length > 0 &&
      (_e(
        i.index !== !0,
        "Index routes must not have child routes. Please remove " +
          ('all child routes from route path "' + u + '".')
      ),
      tR(i.children, t, c, u)),
      !(i.path == null && !i.index) &&
        t.push({ path: u, score: C6(u, i.index), routesMeta: c });
  };
  return (
    e.forEach((i, a) => {
      var l;
      if (i.path === "" || !((l = i.path) != null && l.includes("?"))) o(i, a);
      else for (let s of nR(i.path)) o(i, a, s);
    }),
    t
  );
}
function nR(e) {
  let t = e.split("/");
  if (t.length === 0) return [];
  let [n, ...r] = t,
    o = n.endsWith("?"),
    i = n.replace(/\?$/, "");
  if (r.length === 0) return o ? [i, ""] : [i];
  let a = nR(r.join("/")),
    l = [];
  return (
    l.push(...a.map((s) => (s === "" ? i : [i, s].join("/")))),
    o && l.push(...a),
    l.map((s) => (e.startsWith("/") && s === "" ? "/" : s))
  );
}
function m6(e) {
  e.sort((t, n) =>
    t.score !== n.score
      ? n.score - t.score
      : R6(
          t.routesMeta.map((r) => r.childrenIndex),
          n.routesMeta.map((r) => r.childrenIndex)
        )
  );
}
const g6 = /^:\w+$/,
  y6 = 3,
  b6 = 2,
  x6 = 1,
  S6 = 10,
  w6 = -2,
  l1 = (e) => e === "*";
function C6(e, t) {
  let n = e.split("/"),
    r = n.length;
  return (
    n.some(l1) && (r += w6),
    t && (r += b6),
    n
      .filter((o) => !l1(o))
      .reduce((o, i) => o + (g6.test(i) ? y6 : i === "" ? x6 : S6), r)
  );
}
function R6(e, t) {
  return e.length === t.length && e.slice(0, -1).every((r, o) => r === t[o])
    ? e[e.length - 1] - t[t.length - 1]
    : 0;
}
function E6(e, t) {
  let { routesMeta: n } = e,
    r = {},
    o = "/",
    i = [];
  for (let a = 0; a < n.length; ++a) {
    let l = n[a],
      s = a === n.length - 1,
      u = o === "/" ? t : t.slice(o.length) || "/",
      c = T6(
        { path: l.relativePath, caseSensitive: l.caseSensitive, end: s },
        u
      );
    if (!c) return null;
    Object.assign(r, c.params);
    let d = l.route;
    i.push({
      params: r,
      pathname: mo([o, c.pathname]),
      pathnameBase: A6(mo([o, c.pathnameBase])),
      route: d,
    }),
      c.pathnameBase !== "/" && (o = mo([o, c.pathnameBase]));
  }
  return i;
}
function T6(e, t) {
  typeof e == "string" && (e = { path: e, caseSensitive: !1, end: !0 });
  let [n, r] = _6(e.path, e.caseSensitive, e.end),
    o = t.match(n);
  if (!o) return null;
  let i = o[0],
    a = i.replace(/(.)\/+$/, "$1"),
    l = o.slice(1);
  return {
    params: r.reduce((u, c, d) => {
      if (c === "*") {
        let f = l[d] || "";
        a = i.slice(0, i.length - f.length).replace(/(.)\/+$/, "$1");
      }
      return (u[c] = k6(l[d] || "", c)), u;
    }, {}),
    pathname: i,
    pathnameBase: a,
    pattern: e,
  };
}
function _6(e, t, n) {
  t === void 0 && (t = !1),
    n === void 0 && (n = !0),
    pa(
      e === "*" || !e.endsWith("*") || e.endsWith("/*"),
      'Route path "' +
        e +
        '" will be treated as if it were ' +
        ('"' + e.replace(/\*$/, "/*") + '" because the `*` character must ') +
        "always follow a `/` in the pattern. To get rid of this warning, " +
        ('please change the route path to "' + e.replace(/\*$/, "/*") + '".')
    );
  let r = [],
    o =
      "^" +
      e
        .replace(/\/*\*?$/, "")
        .replace(/^\/*/, "/")
        .replace(/[\\.*+^$?{}|()[\]]/g, "\\$&")
        .replace(/\/:(\w+)/g, (a, l) => (r.push(l), "/([^\\/]+)"));
  return (
    e.endsWith("*")
      ? (r.push("*"),
        (o += e === "*" || e === "/*" ? "(.*)$" : "(?:\\/(.+)|\\/*)$"))
      : n
      ? (o += "\\/*$")
      : e !== "" && e !== "/" && (o += "(?:(?=\\/|$))"),
    [new RegExp(o, t ? void 0 : "i"), r]
  );
}
function P6(e) {
  try {
    return decodeURI(e);
  } catch (t) {
    return (
      pa(
        !1,
        'The URL path "' +
          e +
          '" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent ' +
          ("encoding (" + t + ").")
      ),
      e
    );
  }
}
function k6(e, t) {
  try {
    return decodeURIComponent(e);
  } catch (n) {
    return (
      pa(
        !1,
        'The value for the URL param "' +
          t +
          '" will not be decoded because' +
          (' the string "' +
            e +
            '" is a malformed URL segment. This is probably') +
          (" due to a bad percent encoding (" + n + ").")
      ),
      e
    );
  }
}
function Rs(e, t) {
  if (t === "/") return e;
  if (!e.toLowerCase().startsWith(t.toLowerCase())) return null;
  let n = t.endsWith("/") ? t.length - 1 : t.length,
    r = e.charAt(n);
  return r && r !== "/" ? null : e.slice(n) || "/";
}
function D6(e, t) {
  t === void 0 && (t = "/");
  let {
    pathname: n,
    search: r = "",
    hash: o = "",
  } = typeof e == "string" ? Gr(e) : e;
  return {
    pathname: n ? (n.startsWith("/") ? n : I6(n, t)) : t,
    search: N6(r),
    hash: O6(o),
  };
}
function I6(e, t) {
  let n = t.replace(/\/+$/, "").split("/");
  return (
    e.split("/").forEach((o) => {
      o === ".." ? n.length > 1 && n.pop() : o !== "." && n.push(o);
    }),
    n.length > 1 ? n.join("/") : "/"
  );
}
function Zf(e, t, n, r) {
  return (
    "Cannot include a '" +
    e +
    "' character in a manually specified " +
    ("`to." +
      t +
      "` field [" +
      JSON.stringify(r) +
      "].  Please separate it out to the ") +
    ("`to." + n + "` field. Alternatively you may provide the full path as ") +
    'a string in <Link to="..."> and the router will parse it for you.'
  );
}
function zm(e) {
  return e.filter(
    (t, n) => n === 0 || (t.route.path && t.route.path.length > 0)
  );
}
function rR(e, t, n, r) {
  r === void 0 && (r = !1);
  let o;
  typeof e == "string"
    ? (o = Gr(e))
    : ((o = Le({}, e)),
      _e(
        !o.pathname || !o.pathname.includes("?"),
        Zf("?", "pathname", "search", o)
      ),
      _e(
        !o.pathname || !o.pathname.includes("#"),
        Zf("#", "pathname", "hash", o)
      ),
      _e(!o.search || !o.search.includes("#"), Zf("#", "search", "hash", o)));
  let i = e === "" || o.pathname === "",
    a = i ? "/" : o.pathname,
    l;
  if (r || a == null) l = n;
  else {
    let d = t.length - 1;
    if (a.startsWith("..")) {
      let f = a.split("/");
      for (; f[0] === ".."; ) f.shift(), (d -= 1);
      o.pathname = f.join("/");
    }
    l = d >= 0 ? t[d] : "/";
  }
  let s = D6(o, l),
    u = a && a !== "/" && a.endsWith("/"),
    c = (i || a === ".") && n.endsWith("/");
  return !s.pathname.endsWith("/") && (u || c) && (s.pathname += "/"), s;
}
const mo = (e) => e.join("/").replace(/\/\/+/g, "/"),
  A6 = (e) => e.replace(/\/+$/, "").replace(/^\/*/, "/"),
  N6 = (e) => (!e || e === "?" ? "" : e.startsWith("?") ? e : "?" + e),
  O6 = (e) => (!e || e === "#" ? "" : e.startsWith("#") ? e : "#" + e);
class Um {
  constructor(t, n, r, o) {
    o === void 0 && (o = !1),
      (this.status = t),
      (this.statusText = n || ""),
      (this.internal = o),
      r instanceof Error
        ? ((this.data = r.toString()), (this.error = r))
        : (this.data = r);
  }
}
function oR(e) {
  return (
    e != null &&
    typeof e.status == "number" &&
    typeof e.statusText == "string" &&
    typeof e.internal == "boolean" &&
    "data" in e
  );
}
const iR = ["post", "put", "patch", "delete"],
  M6 = new Set(iR),
  $6 = ["get", ...iR],
  L6 = new Set($6),
  B6 = new Set([301, 302, 303, 307, 308]),
  F6 = new Set([307, 308]),
  Jf = {
    state: "idle",
    location: void 0,
    formMethod: void 0,
    formAction: void 0,
    formEncType: void 0,
    formData: void 0,
  },
  j6 = {
    state: "idle",
    data: void 0,
    formMethod: void 0,
    formAction: void 0,
    formEncType: void 0,
    formData: void 0,
  },
  s1 = { state: "unblocked", proceed: void 0, reset: void 0, location: void 0 },
  aR = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,
  lR =
    typeof window < "u" &&
    typeof window.document < "u" &&
    typeof window.document.createElement < "u",
  z6 = !lR,
  U6 = (e) => ({ hasErrorBoundary: !!e.hasErrorBoundary });
function V6(e) {
  _e(
    e.routes.length > 0,
    "You must provide a non-empty routes array to createRouter"
  );
  let t;
  if (e.mapRouteProperties) t = e.mapRouteProperties;
  else if (e.detectErrorBoundary) {
    let $ = e.detectErrorBoundary;
    t = (B) => ({ hasErrorBoundary: $(B) });
  } else t = U6;
  let n = {},
    r = eR(e.routes, t, void 0, n),
    o,
    i = e.basename || "/",
    a = Le({ v7_normalizeFormMethod: !1, v7_prependBasename: !1 }, e.future),
    l = null,
    s = new Set(),
    u = null,
    c = null,
    d = null,
    f = e.hydrationData != null,
    p = $i(r, e.history.location, i),
    h = null;
  if (p == null) {
    let $ = or(404, { pathname: e.history.location.pathname }),
      { matches: B, route: K } = h1(r);
    (p = B), (h = { [K.id]: $ });
  }
  let g =
      !p.some(($) => $.route.lazy) &&
      (!p.some(($) => $.route.loader) || e.hydrationData != null),
    x,
    v = {
      historyAction: e.history.action,
      location: e.history.location,
      matches: p,
      initialized: g,
      navigation: Jf,
      restoreScrollPosition: e.hydrationData != null ? !1 : null,
      preventScrollReset: !1,
      revalidation: "idle",
      loaderData: (e.hydrationData && e.hydrationData.loaderData) || {},
      actionData: (e.hydrationData && e.hydrationData.actionData) || null,
      errors: (e.hydrationData && e.hydrationData.errors) || h,
      fetchers: new Map(),
      blockers: new Map(),
    },
    m = mt.Pop,
    y = !1,
    b,
    C = !1,
    R = !1,
    E = [],
    D = [],
    A = new Map(),
    I = 0,
    M = -1,
    J = new Map(),
    V = new Set(),
    j = new Map(),
    z = new Map(),
    q = new Map(),
    re = !1;
  function U() {
    return (
      (l = e.history.listen(($) => {
        let { action: B, location: K, delta: ue } = $;
        if (re) {
          re = !1;
          return;
        }
        pa(
          q.size === 0 || ue != null,
          "You are trying to use a blocker on a POP navigation to a location that was not created by @remix-run/router. This will fail silently in production. This can happen if you are navigating outside the router via `window.history.pushState`/`window.location.hash` instead of using router navigation APIs.  This can also happen if you are using createHashRouter and the user manually changes the URL."
        );
        let de = ht({
          currentLocation: v.location,
          nextLocation: K,
          historyAction: B,
        });
        if (de && ue != null) {
          (re = !0),
            e.history.go(ue * -1),
            zt(de, {
              state: "blocked",
              location: K,
              proceed() {
                zt(de, {
                  state: "proceeding",
                  proceed: void 0,
                  reset: void 0,
                  location: K,
                }),
                  e.history.go(ue);
              },
              reset() {
                It(de), ee({ blockers: new Map(x.state.blockers) });
              },
            });
          return;
        }
        return H(B, K);
      })),
      v.initialized || H(mt.Pop, v.location),
      x
    );
  }
  function X() {
    l && l(),
      s.clear(),
      b && b.abort(),
      v.fetchers.forEach(($, B) => Oe(B)),
      v.blockers.forEach(($, B) => It(B));
  }
  function W($) {
    return s.add($), () => s.delete($);
  }
  function ee($) {
    (v = Le({}, v, $)), s.forEach((B) => B(v));
  }
  function k($, B) {
    var K, ue;
    let de =
        v.actionData != null &&
        v.navigation.formMethod != null &&
        Ir(v.navigation.formMethod) &&
        v.navigation.state === "loading" &&
        ((K = $.state) == null ? void 0 : K._isRedirect) !== !0,
      P;
    B.actionData
      ? Object.keys(B.actionData).length > 0
        ? (P = B.actionData)
        : (P = null)
      : de
      ? (P = v.actionData)
      : (P = null);
    let _ = B.loaderData
      ? v1(v.loaderData, B.loaderData, B.matches || [], B.errors)
      : v.loaderData;
    for (let [F] of q) It(F);
    let N =
      y === !0 ||
      (v.navigation.formMethod != null &&
        Ir(v.navigation.formMethod) &&
        ((ue = $.state) == null ? void 0 : ue._isRedirect) !== !0);
    o && ((r = o), (o = void 0)),
      ee(
        Le({}, B, {
          actionData: P,
          loaderData: _,
          historyAction: m,
          location: $,
          initialized: !0,
          navigation: Jf,
          revalidation: "idle",
          restoreScrollPosition: Mn($, B.matches || v.matches),
          preventScrollReset: N,
          blockers: new Map(v.blockers),
        })
      ),
      C ||
        m === mt.Pop ||
        (m === mt.Push
          ? e.history.push($, $.state)
          : m === mt.Replace && e.history.replace($, $.state)),
      (m = mt.Pop),
      (y = !1),
      (C = !1),
      (R = !1),
      (E = []),
      (D = []);
  }
  async function L($, B) {
    if (typeof $ == "number") {
      e.history.go($);
      return;
    }
    let K = Mv(
        v.location,
        v.matches,
        i,
        a.v7_prependBasename,
        $,
        B == null ? void 0 : B.fromRouteId,
        B == null ? void 0 : B.relative
      ),
      {
        path: ue,
        submission: de,
        error: P,
      } = u1(a.v7_normalizeFormMethod, !1, K, B),
      _ = v.location,
      N = Xl(v.location, ue, B && B.state);
    N = Le({}, N, e.history.encodeLocation(N));
    let F = B && B.replace != null ? B.replace : void 0,
      G = mt.Push;
    F === !0
      ? (G = mt.Replace)
      : F === !1 ||
        (de != null &&
          Ir(de.formMethod) &&
          de.formAction === v.location.pathname + v.location.search &&
          (G = mt.Replace));
    let Q =
        B && "preventScrollReset" in B ? B.preventScrollReset === !0 : void 0,
      ce = ht({ currentLocation: _, nextLocation: N, historyAction: G });
    if (ce) {
      zt(ce, {
        state: "blocked",
        location: N,
        proceed() {
          zt(ce, {
            state: "proceeding",
            proceed: void 0,
            reset: void 0,
            location: N,
          }),
            L($, B);
        },
        reset() {
          It(ce), ee({ blockers: new Map(v.blockers) });
        },
      });
      return;
    }
    return await H(G, N, {
      submission: de,
      pendingError: P,
      preventScrollReset: Q,
      replace: B && B.replace,
    });
  }
  function O() {
    if (
      (Be(),
      ee({ revalidation: "loading" }),
      v.navigation.state !== "submitting")
    ) {
      if (v.navigation.state === "idle") {
        H(v.historyAction, v.location, { startUninterruptedRevalidation: !0 });
        return;
      }
      H(m || v.historyAction, v.navigation.location, {
        overrideNavigation: v.navigation,
      });
    }
  }
  async function H($, B, K) {
    b && b.abort(),
      (b = null),
      (m = $),
      (C = (K && K.startUninterruptedRevalidation) === !0),
      Jn(v.location, v.matches),
      (y = (K && K.preventScrollReset) === !0);
    let ue = o || r,
      de = K && K.overrideNavigation,
      P = $i(ue, B, i);
    if (!P) {
      let ae = or(404, { pathname: B.pathname }),
        { matches: le, route: me } = h1(ue);
      Je(), k(B, { matches: le, loaderData: {}, errors: { [me.id]: ae } });
      return;
    }
    if (
      q6(v.location, B) &&
      !(K && K.submission && Ir(K.submission.formMethod))
    ) {
      k(B, { matches: P });
      return;
    }
    b = new AbortController();
    let _ = Ha(e.history, B, b.signal, K && K.submission),
      N,
      F;
    if (K && K.pendingError) F = { [Li(P).route.id]: K.pendingError };
    else if (K && K.submission && Ir(K.submission.formMethod)) {
      let ae = await Y(_, B, K.submission, P, { replace: K.replace });
      if (ae.shortCircuited) return;
      (N = ae.pendingActionData),
        (F = ae.pendingActionError),
        (de = Le({ state: "loading", location: B }, K.submission)),
        (_ = new Request(_.url, { signal: _.signal }));
    }
    let {
      shortCircuited: G,
      loaderData: Q,
      errors: ce,
    } = await se(
      _,
      B,
      P,
      de,
      K && K.submission,
      K && K.fetcherSubmission,
      K && K.replace,
      N,
      F
    );
    G ||
      ((b = null),
      k(
        B,
        Le({ matches: P }, N ? { actionData: N } : {}, {
          loaderData: Q,
          errors: ce,
        })
      ));
  }
  async function Y($, B, K, ue, de) {
    Be();
    let P = Le({ state: "submitting", location: B }, K);
    ee({ navigation: P });
    let _,
      N = $v(ue, B);
    if (!N.route.action && !N.route.lazy)
      _ = {
        type: bt.error,
        error: or(405, {
          method: $.method,
          pathname: B.pathname,
          routeId: N.route.id,
        }),
      };
    else if (((_ = await Wa("action", $, N, ue, n, t, i)), $.signal.aborted))
      return { shortCircuited: !0 };
    if (Ki(_)) {
      let F;
      return (
        de && de.replace != null
          ? (F = de.replace)
          : (F = _.location === v.location.pathname + v.location.search),
        await be(v, _, { submission: K, replace: F }),
        { shortCircuited: !0 }
      );
    }
    if (Cl(_)) {
      let F = Li(ue, N.route.id);
      return (
        (de && de.replace) !== !0 && (m = mt.Push),
        { pendingActionData: {}, pendingActionError: { [F.route.id]: _.error } }
      );
    }
    if (Ho(_)) throw or(400, { type: "defer-action" });
    return { pendingActionData: { [N.route.id]: _.data } };
  }
  async function se($, B, K, ue, de, P, _, N, F) {
    let G = ue;
    G ||
      (G = Le(
        {
          state: "loading",
          location: B,
          formMethod: void 0,
          formAction: void 0,
          formEncType: void 0,
          formData: void 0,
        },
        de
      ));
    let Q =
        de || P
          ? de || P
          : G.formMethod && G.formAction && G.formData && G.formEncType
          ? {
              formMethod: G.formMethod,
              formAction: G.formAction,
              formData: G.formData,
              formEncType: G.formEncType,
            }
          : void 0,
      ce = o || r,
      [ae, le] = c1(e.history, v, K, Q, B, R, E, D, j, ce, i, N, F);
    if (
      (Je(
        (De) =>
          !(K && K.some((Et) => Et.route.id === De)) ||
          (ae && ae.some((Et) => Et.route.id === De))
      ),
      ae.length === 0 && le.length === 0)
    ) {
      let De = wt();
      return (
        k(
          B,
          Le(
            { matches: K, loaderData: {}, errors: F || null },
            N ? { actionData: N } : {},
            De ? { fetchers: new Map(v.fetchers) } : {}
          )
        ),
        { shortCircuited: !0 }
      );
    }
    if (!C) {
      le.forEach((Et) => {
        let Kr = v.fetchers.get(Et.key),
          kr = {
            state: "loading",
            data: Kr && Kr.data,
            formMethod: void 0,
            formAction: void 0,
            formEncType: void 0,
            formData: void 0,
            " _hasFetcherDoneAnything ": !0,
          };
        v.fetchers.set(Et.key, kr);
      });
      let De = N || v.actionData;
      ee(
        Le(
          { navigation: G },
          De
            ? Object.keys(De).length === 0
              ? { actionData: null }
              : { actionData: De }
            : {},
          le.length > 0 ? { fetchers: new Map(v.fetchers) } : {}
        )
      );
    }
    (M = ++I),
      le.forEach((De) => {
        De.controller && A.set(De.key, De.controller);
      });
    let me = () => le.forEach((De) => ge(De.key));
    b && b.signal.addEventListener("abort", me);
    let {
      results: Ie,
      loaderResults: pt,
      fetcherResults: qe,
    } = await Re(v.matches, K, ae, le, $);
    if ($.signal.aborted) return { shortCircuited: !0 };
    b && b.signal.removeEventListener("abort", me),
      le.forEach((De) => A.delete(De.key));
    let rt = m1(Ie);
    if (rt) return await be(v, rt, { replace: _ }), { shortCircuited: !0 };
    let { loaderData: Rt, errors: an } = p1(v, K, ae, pt, F, le, qe, z);
    z.forEach((De, Et) => {
      De.subscribe((Kr) => {
        (Kr || De.done) && z.delete(Et);
      });
    });
    let pr = wt(),
      qt = Ze(M),
      ln = pr || qt || le.length > 0;
    return Le(
      { loaderData: Rt, errors: an },
      ln ? { fetchers: new Map(v.fetchers) } : {}
    );
  }
  function ie($) {
    return v.fetchers.get($) || j6;
  }
  function te($, B, K, ue) {
    if (z6)
      throw new Error(
        "router.fetch() was called during the server render, but it shouldn't be. You are likely calling a useFetcher() method in the body of your component. Try moving it to a useEffect or a callback."
      );
    A.has($) && ge($);
    let de = o || r,
      P = Mv(
        v.location,
        v.matches,
        i,
        a.v7_prependBasename,
        K,
        B,
        ue == null ? void 0 : ue.relative
      ),
      _ = $i(de, P, i);
    if (!_) {
      Ue($, B, or(404, { pathname: P }));
      return;
    }
    let { path: N, submission: F } = u1(a.v7_normalizeFormMethod, !0, P, ue),
      G = $v(_, N);
    if (((y = (ue && ue.preventScrollReset) === !0), F && Ir(F.formMethod))) {
      Se($, B, N, G, _, F);
      return;
    }
    j.set($, { routeId: B, path: N }), ye($, B, N, G, _, F);
  }
  async function Se($, B, K, ue, de, P) {
    if ((Be(), j.delete($), !ue.route.action && !ue.route.lazy)) {
      let At = or(405, { method: P.formMethod, pathname: K, routeId: B });
      Ue($, B, At);
      return;
    }
    let _ = v.fetchers.get($),
      N = Le({ state: "submitting" }, P, {
        data: _ && _.data,
        " _hasFetcherDoneAnything ": !0,
      });
    v.fetchers.set($, N), ee({ fetchers: new Map(v.fetchers) });
    let F = new AbortController(),
      G = Ha(e.history, K, F.signal, P);
    A.set($, F);
    let Q = await Wa("action", G, ue, de, n, t, i);
    if (G.signal.aborted) {
      A.get($) === F && A.delete($);
      return;
    }
    if (Ki(Q)) {
      A.delete($), V.add($);
      let At = Le({ state: "loading" }, P, {
        data: void 0,
        " _hasFetcherDoneAnything ": !0,
      });
      return (
        v.fetchers.set($, At),
        ee({ fetchers: new Map(v.fetchers) }),
        be(v, Q, { submission: P, isFetchActionRedirect: !0 })
      );
    }
    if (Cl(Q)) {
      Ue($, B, Q.error);
      return;
    }
    if (Ho(Q)) throw or(400, { type: "defer-action" });
    let ce = v.navigation.location || v.location,
      ae = Ha(e.history, ce, F.signal),
      le = o || r,
      me =
        v.navigation.state !== "idle"
          ? $i(le, v.navigation.location, i)
          : v.matches;
    _e(me, "Didn't find any matches after fetcher action");
    let Ie = ++I;
    J.set($, Ie);
    let pt = Le({ state: "loading", data: Q.data }, P, {
      " _hasFetcherDoneAnything ": !0,
    });
    v.fetchers.set($, pt);
    let [qe, rt] = c1(
      e.history,
      v,
      me,
      P,
      ce,
      R,
      E,
      D,
      j,
      le,
      i,
      { [ue.route.id]: Q.data },
      void 0
    );
    rt
      .filter((At) => At.key !== $)
      .forEach((At) => {
        let di = At.key,
          Ta = v.fetchers.get(di),
          $s = {
            state: "loading",
            data: Ta && Ta.data,
            formMethod: void 0,
            formAction: void 0,
            formEncType: void 0,
            formData: void 0,
            " _hasFetcherDoneAnything ": !0,
          };
        v.fetchers.set(di, $s), At.controller && A.set(di, At.controller);
      }),
      ee({ fetchers: new Map(v.fetchers) });
    let Rt = () => rt.forEach((At) => ge(At.key));
    F.signal.addEventListener("abort", Rt);
    let {
      results: an,
      loaderResults: pr,
      fetcherResults: qt,
    } = await Re(v.matches, me, qe, rt, ae);
    if (F.signal.aborted) return;
    F.signal.removeEventListener("abort", Rt),
      J.delete($),
      A.delete($),
      rt.forEach((At) => A.delete(At.key));
    let ln = m1(an);
    if (ln) return be(v, ln);
    let { loaderData: De, errors: Et } = p1(
        v,
        v.matches,
        qe,
        pr,
        void 0,
        rt,
        qt,
        z
      ),
      Kr = {
        state: "idle",
        data: Q.data,
        formMethod: void 0,
        formAction: void 0,
        formEncType: void 0,
        formData: void 0,
        " _hasFetcherDoneAnything ": !0,
      };
    v.fetchers.set($, Kr);
    let kr = Ze(Ie);
    v.navigation.state === "loading" && Ie > M
      ? (_e(m, "Expected pending action"),
        b && b.abort(),
        k(v.navigation.location, {
          matches: me,
          loaderData: De,
          errors: Et,
          fetchers: new Map(v.fetchers),
        }))
      : (ee(
          Le(
            { errors: Et, loaderData: v1(v.loaderData, De, me, Et) },
            kr ? { fetchers: new Map(v.fetchers) } : {}
          )
        ),
        (R = !1));
  }
  async function ye($, B, K, ue, de, P) {
    let _ = v.fetchers.get($),
      N = Le(
        {
          state: "loading",
          formMethod: void 0,
          formAction: void 0,
          formEncType: void 0,
          formData: void 0,
        },
        P,
        { data: _ && _.data, " _hasFetcherDoneAnything ": !0 }
      );
    v.fetchers.set($, N), ee({ fetchers: new Map(v.fetchers) });
    let F = new AbortController(),
      G = Ha(e.history, K, F.signal);
    A.set($, F);
    let Q = await Wa("loader", G, ue, de, n, t, i);
    if (
      (Ho(Q) && (Q = (await dR(Q, G.signal, !0)) || Q),
      A.get($) === F && A.delete($),
      G.signal.aborted)
    )
      return;
    if (Ki(Q)) {
      V.add($), await be(v, Q);
      return;
    }
    if (Cl(Q)) {
      let ae = Li(v.matches, B);
      v.fetchers.delete($),
        ee({
          fetchers: new Map(v.fetchers),
          errors: { [ae.route.id]: Q.error },
        });
      return;
    }
    _e(!Ho(Q), "Unhandled fetcher deferred data");
    let ce = {
      state: "idle",
      data: Q.data,
      formMethod: void 0,
      formAction: void 0,
      formEncType: void 0,
      formData: void 0,
      " _hasFetcherDoneAnything ": !0,
    };
    v.fetchers.set($, ce), ee({ fetchers: new Map(v.fetchers) });
  }
  async function be($, B, K) {
    var ue;
    let {
      submission: de,
      replace: P,
      isFetchActionRedirect: _,
    } = K === void 0 ? {} : K;
    B.revalidate && (R = !0);
    let N = Xl(
      $.location,
      B.location,
      Le({ _isRedirect: !0 }, _ ? { _isFetchActionRedirect: !0 } : {})
    );
    if (
      (_e(N, "Expected a location on the redirect navigation"),
      aR.test(B.location) &&
        lR &&
        typeof ((ue = window) == null ? void 0 : ue.location) < "u")
    ) {
      let le = e.history.createURL(B.location),
        me = Rs(le.pathname, i) == null;
      if (window.location.origin !== le.origin || me) {
        P
          ? window.location.replace(B.location)
          : window.location.assign(B.location);
        return;
      }
    }
    b = null;
    let F = P === !0 ? mt.Replace : mt.Push,
      {
        formMethod: G,
        formAction: Q,
        formEncType: ce,
        formData: ae,
      } = $.navigation;
    !de &&
      G &&
      Q &&
      ae &&
      ce &&
      (de = { formMethod: G, formAction: Q, formEncType: ce, formData: ae }),
      F6.has(B.status) && de && Ir(de.formMethod)
        ? await H(F, N, {
            submission: Le({}, de, { formAction: B.location }),
            preventScrollReset: y,
          })
        : _
        ? await H(F, N, {
            overrideNavigation: {
              state: "loading",
              location: N,
              formMethod: void 0,
              formAction: void 0,
              formEncType: void 0,
              formData: void 0,
            },
            fetcherSubmission: de,
            preventScrollReset: y,
          })
        : await H(F, N, {
            overrideNavigation: {
              state: "loading",
              location: N,
              formMethod: de ? de.formMethod : void 0,
              formAction: de ? de.formAction : void 0,
              formEncType: de ? de.formEncType : void 0,
              formData: de ? de.formData : void 0,
            },
            preventScrollReset: y,
          });
  }
  async function Re($, B, K, ue, de) {
    let P = await Promise.all([
        ...K.map((F) => Wa("loader", de, F, B, n, t, i)),
        ...ue.map((F) =>
          F.matches && F.match && F.controller
            ? Wa(
                "loader",
                Ha(e.history, F.path, F.controller.signal),
                F.match,
                F.matches,
                n,
                t,
                i
              )
            : { type: bt.error, error: or(404, { pathname: F.path }) }
        ),
      ]),
      _ = P.slice(0, K.length),
      N = P.slice(K.length);
    return (
      await Promise.all([
        g1(
          $,
          K,
          _,
          _.map(() => de.signal),
          !1,
          v.loaderData
        ),
        g1(
          $,
          ue.map((F) => F.match),
          N,
          ue.map((F) => (F.controller ? F.controller.signal : null)),
          !0
        ),
      ]),
      { results: P, loaderResults: _, fetcherResults: N }
    );
  }
  function Be() {
    (R = !0),
      E.push(...Je()),
      j.forEach(($, B) => {
        A.has(B) && (D.push(B), ge(B));
      });
  }
  function Ue($, B, K) {
    let ue = Li(v.matches, B);
    Oe($), ee({ errors: { [ue.route.id]: K }, fetchers: new Map(v.fetchers) });
  }
  function Oe($) {
    A.has($) && ge($),
      j.delete($),
      J.delete($),
      V.delete($),
      v.fetchers.delete($);
  }
  function ge($) {
    let B = A.get($);
    _e(B, "Expected fetch controller: " + $), B.abort(), A.delete($);
  }
  function jt($) {
    for (let B of $) {
      let ue = {
        state: "idle",
        data: ie(B).data,
        formMethod: void 0,
        formAction: void 0,
        formEncType: void 0,
        formData: void 0,
        " _hasFetcherDoneAnything ": !0,
      };
      v.fetchers.set(B, ue);
    }
  }
  function wt() {
    let $ = [],
      B = !1;
    for (let K of V) {
      let ue = v.fetchers.get(K);
      _e(ue, "Expected fetcher: " + K),
        ue.state === "loading" && (V.delete(K), $.push(K), (B = !0));
    }
    return jt($), B;
  }
  function Ze($) {
    let B = [];
    for (let [K, ue] of J)
      if (ue < $) {
        let de = v.fetchers.get(K);
        _e(de, "Expected fetcher: " + K),
          de.state === "loading" && (ge(K), J.delete(K), B.push(K));
      }
    return jt(B), B.length > 0;
  }
  function Ct($, B) {
    let K = v.blockers.get($) || s1;
    return q.get($) !== B && q.set($, B), K;
  }
  function It($) {
    v.blockers.delete($), q.delete($);
  }
  function zt($, B) {
    let K = v.blockers.get($) || s1;
    _e(
      (K.state === "unblocked" && B.state === "blocked") ||
        (K.state === "blocked" && B.state === "blocked") ||
        (K.state === "blocked" && B.state === "proceeding") ||
        (K.state === "blocked" && B.state === "unblocked") ||
        (K.state === "proceeding" && B.state === "unblocked"),
      "Invalid blocker state transition: " + K.state + " -> " + B.state
    ),
      v.blockers.set($, B),
      ee({ blockers: new Map(v.blockers) });
  }
  function ht($) {
    let { currentLocation: B, nextLocation: K, historyAction: ue } = $;
    if (q.size === 0) return;
    q.size > 1 && pa(!1, "A router only supports one blocker at a time");
    let de = Array.from(q.entries()),
      [P, _] = de[de.length - 1],
      N = v.blockers.get(P);
    if (
      !(N && N.state === "proceeding") &&
      _({ currentLocation: B, nextLocation: K, historyAction: ue })
    )
      return P;
  }
  function Je($) {
    let B = [];
    return (
      z.forEach((K, ue) => {
        (!$ || $(ue)) && (K.cancel(), B.push(ue), z.delete(ue));
      }),
      B
    );
  }
  function Zn($, B, K) {
    if (
      ((u = $), (d = B), (c = K || ((ue) => ue.key)), !f && v.navigation === Jf)
    ) {
      f = !0;
      let ue = Mn(v.location, v.matches);
      ue != null && ee({ restoreScrollPosition: ue });
    }
    return () => {
      (u = null), (d = null), (c = null);
    };
  }
  function Jn($, B) {
    if (u && c && d) {
      let K = B.map((de) => y1(de, v.loaderData)),
        ue = c($, K) || $.key;
      u[ue] = d();
    }
  }
  function Mn($, B) {
    if (u && c && d) {
      let K = B.map((P) => y1(P, v.loaderData)),
        ue = c($, K) || $.key,
        de = u[ue];
      if (typeof de == "number") return de;
    }
    return null;
  }
  function he($) {
    o = $;
  }
  return (
    (x = {
      get basename() {
        return i;
      },
      get state() {
        return v;
      },
      get routes() {
        return r;
      },
      initialize: U,
      subscribe: W,
      enableScrollRestoration: Zn,
      navigate: L,
      fetch: te,
      revalidate: O,
      createHref: ($) => e.history.createHref($),
      encodeLocation: ($) => e.history.encodeLocation($),
      getFetcher: ie,
      deleteFetcher: Oe,
      dispose: X,
      getBlocker: Ct,
      deleteBlocker: It,
      _internalFetchControllers: A,
      _internalActiveDeferreds: z,
      _internalSetRoutes: he,
    }),
    x
  );
}
function W6(e) {
  return e != null && "formData" in e;
}
function Mv(e, t, n, r, o, i, a) {
  let l, s;
  if (i != null && a !== "path") {
    l = [];
    for (let c of t)
      if ((l.push(c), c.route.id === i)) {
        s = c;
        break;
      }
  } else (l = t), (s = t[t.length - 1]);
  let u = rR(
    o || ".",
    zm(l).map((c) => c.pathnameBase),
    Rs(e.pathname, n) || e.pathname,
    a === "path"
  );
  return (
    o == null && ((u.search = e.search), (u.hash = e.hash)),
    (o == null || o === "" || o === ".") &&
      s &&
      s.route.index &&
      !Vm(u.search) &&
      (u.search = u.search ? u.search.replace(/^\?/, "?index&") : "?index"),
    r &&
      n !== "/" &&
      (u.pathname = u.pathname === "/" ? n : mo([n, u.pathname])),
    Cs(u)
  );
}
function u1(e, t, n, r) {
  if (!r || !W6(r)) return { path: n };
  if (r.formMethod && !Q6(r.formMethod))
    return { path: n, error: or(405, { method: r.formMethod }) };
  let o;
  if (r.formData) {
    let l = r.formMethod || "get";
    if (
      ((o = {
        formMethod: e ? l.toUpperCase() : l.toLowerCase(),
        formAction: cR(n),
        formEncType:
          (r && r.formEncType) || "application/x-www-form-urlencoded",
        formData: r.formData,
      }),
      Ir(o.formMethod))
    )
      return { path: n, submission: o };
  }
  let i = Gr(n),
    a = uR(r.formData);
  return (
    t && i.search && Vm(i.search) && a.append("index", ""),
    (i.search = "?" + a),
    { path: Cs(i), submission: o }
  );
}
function H6(e, t) {
  let n = e;
  if (t) {
    let r = e.findIndex((o) => o.route.id === t);
    r >= 0 && (n = e.slice(0, r));
  }
  return n;
}
function c1(e, t, n, r, o, i, a, l, s, u, c, d, f) {
  let p = f ? Object.values(f)[0] : d ? Object.values(d)[0] : void 0,
    h = e.createURL(t.location),
    g = e.createURL(o),
    x = f ? Object.keys(f)[0] : void 0,
    m = H6(n, x).filter((b, C) => {
      if (b.route.lazy) return !0;
      if (b.route.loader == null) return !1;
      if (G6(t.loaderData, t.matches[C], b) || a.some((D) => D === b.route.id))
        return !0;
      let R = t.matches[C],
        E = b;
      return d1(
        b,
        Le(
          {
            currentUrl: h,
            currentParams: R.params,
            nextUrl: g,
            nextParams: E.params,
          },
          r,
          {
            actionResult: p,
            defaultShouldRevalidate:
              i ||
              h.pathname + h.search === g.pathname + g.search ||
              h.search !== g.search ||
              sR(R, E),
          }
        )
      );
    }),
    y = [];
  return (
    s.forEach((b, C) => {
      if (!n.some((A) => A.route.id === b.routeId)) return;
      let R = $i(u, b.path, c);
      if (!R) {
        y.push({
          key: C,
          routeId: b.routeId,
          path: b.path,
          matches: null,
          match: null,
          controller: null,
        });
        return;
      }
      let E = $v(R, b.path);
      if (l.includes(C)) {
        y.push({
          key: C,
          routeId: b.routeId,
          path: b.path,
          matches: R,
          match: E,
          controller: new AbortController(),
        });
        return;
      }
      d1(
        E,
        Le(
          {
            currentUrl: h,
            currentParams: t.matches[t.matches.length - 1].params,
            nextUrl: g,
            nextParams: n[n.length - 1].params,
          },
          r,
          { actionResult: p, defaultShouldRevalidate: i }
        )
      ) &&
        y.push({
          key: C,
          routeId: b.routeId,
          path: b.path,
          matches: R,
          match: E,
          controller: new AbortController(),
        });
    }),
    [m, y]
  );
}
function G6(e, t, n) {
  let r = !t || n.route.id !== t.route.id,
    o = e[n.route.id] === void 0;
  return r || o;
}
function sR(e, t) {
  let n = e.route.path;
  return (
    e.pathname !== t.pathname ||
    (n != null && n.endsWith("*") && e.params["*"] !== t.params["*"])
  );
}
function d1(e, t) {
  if (e.route.shouldRevalidate) {
    let n = e.route.shouldRevalidate(t);
    if (typeof n == "boolean") return n;
  }
  return t.defaultShouldRevalidate;
}
async function f1(e, t, n) {
  if (!e.lazy) return;
  let r = await e.lazy();
  if (!e.lazy) return;
  let o = n[e.id];
  _e(o, "No route found in manifest");
  let i = {};
  for (let a in r) {
    let s = o[a] !== void 0 && a !== "hasErrorBoundary";
    pa(
      !s,
      'Route "' +
        o.id +
        '" has a static property "' +
        a +
        '" defined but its lazy function is also returning a value for this property. ' +
        ('The lazy route property "' + a + '" will be ignored.')
    ),
      !s && !v6.has(a) && (i[a] = r[a]);
  }
  Object.assign(o, i), Object.assign(o, Le({}, t(o), { lazy: void 0 }));
}
async function Wa(e, t, n, r, o, i, a, l, s, u) {
  l === void 0 && (l = !1), s === void 0 && (s = !1);
  let c,
    d,
    f,
    p = (x) => {
      let v,
        m = new Promise((y, b) => (v = b));
      return (
        (f = () => v()),
        t.signal.addEventListener("abort", f),
        Promise.race([x({ request: t, params: n.params, context: u }), m])
      );
    };
  try {
    let x = n.route[e];
    if (n.route.lazy)
      if (x) d = (await Promise.all([p(x), f1(n.route, i, o)]))[0];
      else if ((await f1(n.route, i, o), (x = n.route[e]), x)) d = await p(x);
      else if (e === "action") {
        let v = new URL(t.url),
          m = v.pathname + v.search;
        throw or(405, { method: t.method, pathname: m, routeId: n.route.id });
      } else return { type: bt.data, data: void 0 };
    else if (x) d = await p(x);
    else {
      let v = new URL(t.url),
        m = v.pathname + v.search;
      throw or(404, { pathname: m });
    }
    _e(
      d !== void 0,
      "You defined " +
        (e === "action" ? "an action" : "a loader") +
        " for route " +
        ('"' +
          n.route.id +
          "\" but didn't return anything from your `" +
          e +
          "` ") +
        "function. Please return a value or `null`."
    );
  } catch (x) {
    (c = bt.error), (d = x);
  } finally {
    f && t.signal.removeEventListener("abort", f);
  }
  if (X6(d)) {
    let x = d.status;
    if (B6.has(x)) {
      let y = d.headers.get("Location");
      if (
        (_e(
          y,
          "Redirects returned/thrown from loaders/actions must have a Location header"
        ),
        !aR.test(y))
      )
        y = Mv(new URL(t.url), r.slice(0, r.indexOf(n) + 1), a, !0, y);
      else if (!l) {
        let b = new URL(t.url),
          C = y.startsWith("//") ? new URL(b.protocol + y) : new URL(y),
          R = Rs(C.pathname, a) != null;
        C.origin === b.origin && R && (y = C.pathname + C.search + C.hash);
      }
      if (l) throw (d.headers.set("Location", y), d);
      return {
        type: bt.redirect,
        status: x,
        location: y,
        revalidate: d.headers.get("X-Remix-Revalidate") !== null,
      };
    }
    if (s) throw { type: c || bt.data, response: d };
    let v,
      m = d.headers.get("Content-Type");
    return (
      m && /\bapplication\/json\b/.test(m)
        ? (v = await d.json())
        : (v = await d.text()),
      c === bt.error
        ? { type: c, error: new Um(x, d.statusText, v), headers: d.headers }
        : { type: bt.data, data: v, statusCode: d.status, headers: d.headers }
    );
  }
  if (c === bt.error) return { type: c, error: d };
  if (Y6(d)) {
    var h, g;
    return {
      type: bt.deferred,
      deferredData: d,
      statusCode: (h = d.init) == null ? void 0 : h.status,
      headers:
        ((g = d.init) == null ? void 0 : g.headers) &&
        new Headers(d.init.headers),
    };
  }
  return { type: bt.data, data: d };
}
function Ha(e, t, n, r) {
  let o = e.createURL(cR(t)).toString(),
    i = { signal: n };
  if (r && Ir(r.formMethod)) {
    let { formMethod: a, formEncType: l, formData: s } = r;
    (i.method = a.toUpperCase()),
      (i.body = l === "application/x-www-form-urlencoded" ? uR(s) : s);
  }
  return new Request(o, i);
}
function uR(e) {
  let t = new URLSearchParams();
  for (let [n, r] of e.entries()) t.append(n, r instanceof File ? r.name : r);
  return t;
}
function K6(e, t, n, r, o) {
  let i = {},
    a = null,
    l,
    s = !1,
    u = {};
  return (
    n.forEach((c, d) => {
      let f = t[d].route.id;
      if (
        (_e(!Ki(c), "Cannot handle redirect results in processLoaderData"),
        Cl(c))
      ) {
        let p = Li(e, f),
          h = c.error;
        r && ((h = Object.values(r)[0]), (r = void 0)),
          (a = a || {}),
          a[p.route.id] == null && (a[p.route.id] = h),
          (i[f] = void 0),
          s || ((s = !0), (l = oR(c.error) ? c.error.status : 500)),
          c.headers && (u[f] = c.headers);
      } else
        Ho(c)
          ? (o.set(f, c.deferredData), (i[f] = c.deferredData.data))
          : (i[f] = c.data),
          c.statusCode != null &&
            c.statusCode !== 200 &&
            !s &&
            (l = c.statusCode),
          c.headers && (u[f] = c.headers);
    }),
    r && ((a = r), (i[Object.keys(r)[0]] = void 0)),
    { loaderData: i, errors: a, statusCode: l || 200, loaderHeaders: u }
  );
}
function p1(e, t, n, r, o, i, a, l) {
  let { loaderData: s, errors: u } = K6(t, n, r, o, l);
  for (let c = 0; c < i.length; c++) {
    let { key: d, match: f, controller: p } = i[c];
    _e(
      a !== void 0 && a[c] !== void 0,
      "Did not find corresponding fetcher result"
    );
    let h = a[c];
    if (!(p && p.signal.aborted))
      if (Cl(h)) {
        let g = Li(e.matches, f == null ? void 0 : f.route.id);
        (u && u[g.route.id]) || (u = Le({}, u, { [g.route.id]: h.error })),
          e.fetchers.delete(d);
      } else if (Ki(h)) _e(!1, "Unhandled fetcher revalidation redirect");
      else if (Ho(h)) _e(!1, "Unhandled fetcher deferred data");
      else {
        let g = {
          state: "idle",
          data: h.data,
          formMethod: void 0,
          formAction: void 0,
          formEncType: void 0,
          formData: void 0,
          " _hasFetcherDoneAnything ": !0,
        };
        e.fetchers.set(d, g);
      }
  }
  return { loaderData: s, errors: u };
}
function v1(e, t, n, r) {
  let o = Le({}, t);
  for (let i of n) {
    let a = i.route.id;
    if (
      (t.hasOwnProperty(a)
        ? t[a] !== void 0 && (o[a] = t[a])
        : e[a] !== void 0 && i.route.loader && (o[a] = e[a]),
      r && r.hasOwnProperty(a))
    )
      break;
  }
  return o;
}
function Li(e, t) {
  return (
    (t ? e.slice(0, e.findIndex((r) => r.route.id === t) + 1) : [...e])
      .reverse()
      .find((r) => r.route.hasErrorBoundary === !0) || e[0]
  );
}
function h1(e) {
  let t = e.find((n) => n.index || !n.path || n.path === "/") || {
    id: "__shim-error-route__",
  };
  return {
    matches: [{ params: {}, pathname: "", pathnameBase: "", route: t }],
    route: t,
  };
}
function or(e, t) {
  let { pathname: n, routeId: r, method: o, type: i } = t === void 0 ? {} : t,
    a = "Unknown Server Error",
    l = "Unknown @remix-run/router error";
  return (
    e === 400
      ? ((a = "Bad Request"),
        o && n && r
          ? (l =
              "You made a " +
              o +
              ' request to "' +
              n +
              '" but ' +
              ('did not provide a `loader` for route "' + r + '", ') +
              "so there is no way to handle the request.")
          : i === "defer-action" && (l = "defer() is not supported in actions"))
      : e === 403
      ? ((a = "Forbidden"),
        (l = 'Route "' + r + '" does not match URL "' + n + '"'))
      : e === 404
      ? ((a = "Not Found"), (l = 'No route matches URL "' + n + '"'))
      : e === 405 &&
        ((a = "Method Not Allowed"),
        o && n && r
          ? (l =
              "You made a " +
              o.toUpperCase() +
              ' request to "' +
              n +
              '" but ' +
              ('did not provide an `action` for route "' + r + '", ') +
              "so there is no way to handle the request.")
          : o && (l = 'Invalid request method "' + o.toUpperCase() + '"')),
    new Um(e || 500, a, new Error(l), !0)
  );
}
function m1(e) {
  for (let t = e.length - 1; t >= 0; t--) {
    let n = e[t];
    if (Ki(n)) return n;
  }
}
function cR(e) {
  let t = typeof e == "string" ? Gr(e) : e;
  return Cs(Le({}, t, { hash: "" }));
}
function q6(e, t) {
  return e.pathname !== t.pathname || e.search !== t.search
    ? !1
    : e.hash === ""
    ? t.hash !== ""
    : e.hash === t.hash
    ? !0
    : t.hash !== "";
}
function Ho(e) {
  return e.type === bt.deferred;
}
function Cl(e) {
  return e.type === bt.error;
}
function Ki(e) {
  return (e && e.type) === bt.redirect;
}
function Y6(e) {
  let t = e;
  return (
    t &&
    typeof t == "object" &&
    typeof t.data == "object" &&
    typeof t.subscribe == "function" &&
    typeof t.cancel == "function" &&
    typeof t.resolveData == "function"
  );
}
function X6(e) {
  return (
    e != null &&
    typeof e.status == "number" &&
    typeof e.statusText == "string" &&
    typeof e.headers == "object" &&
    typeof e.body < "u"
  );
}
function Q6(e) {
  return L6.has(e.toLowerCase());
}
function Ir(e) {
  return M6.has(e.toLowerCase());
}
async function g1(e, t, n, r, o, i) {
  for (let a = 0; a < n.length; a++) {
    let l = n[a],
      s = t[a];
    if (!s) continue;
    let u = e.find((d) => d.route.id === s.route.id),
      c = u != null && !sR(u, s) && (i && i[s.route.id]) !== void 0;
    if (Ho(l) && (o || c)) {
      let d = r[a];
      _e(d, "Expected an AbortSignal for revalidating fetcher deferred result"),
        await dR(l, d, o).then((f) => {
          f && (n[a] = f || n[a]);
        });
    }
  }
}
async function dR(e, t, n) {
  if ((n === void 0 && (n = !1), !(await e.deferredData.resolveData(t)))) {
    if (n)
      try {
        return { type: bt.data, data: e.deferredData.unwrappedData };
      } catch (o) {
        return { type: bt.error, error: o };
      }
    return { type: bt.data, data: e.deferredData.data };
  }
}
function Vm(e) {
  return new URLSearchParams(e).getAll("index").some((t) => t === "");
}
function y1(e, t) {
  let { route: n, pathname: r, params: o } = e;
  return { id: n.id, pathname: r, params: o, data: t[n.id], handle: n.handle };
}
function $v(e, t) {
  let n = typeof t == "string" ? Gr(t).search : t.search;
  if (e[e.length - 1].route.index && Vm(n || "")) return e[e.length - 1];
  let r = zm(e);
  return r[r.length - 1];
}
/**
 * React Router v6.11.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ function gc() {
  return (
    (gc = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
              Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    gc.apply(this, arguments)
  );
}
const Wm = S.createContext(null),
  fR = S.createContext(null),
  Vd = S.createContext(null),
  Wd = S.createContext(null),
  ci = S.createContext({ outlet: null, matches: [], isDataRoute: !1 }),
  pR = S.createContext(null);
function Hd() {
  return S.useContext(Wd) != null;
}
function vR() {
  return Hd() || _e(!1), S.useContext(Wd).location;
}
function hR(e) {
  S.useContext(Vd).static || S.useLayoutEffect(e);
}
function mR() {
  let { isDataRoute: e } = S.useContext(ci);
  return e ? d8() : Z6();
}
function Z6() {
  Hd() || _e(!1);
  let { basename: e, navigator: t } = S.useContext(Vd),
    { matches: n } = S.useContext(ci),
    { pathname: r } = vR(),
    o = JSON.stringify(zm(n).map((l) => l.pathnameBase)),
    i = S.useRef(!1);
  return (
    hR(() => {
      i.current = !0;
    }),
    S.useCallback(
      function (l, s) {
        if ((s === void 0 && (s = {}), !i.current)) return;
        if (typeof l == "number") {
          t.go(l);
          return;
        }
        let u = rR(l, JSON.parse(o), r, s.relative === "path");
        e !== "/" &&
          (u.pathname = u.pathname === "/" ? e : mo([e, u.pathname])),
          (s.replace ? t.replace : t.push)(u, s.state, s);
      },
      [e, t, o, r]
    )
  );
}
const J6 = S.createContext(null);
function e8(e) {
  let t = S.useContext(ci).outlet;
  return t && S.createElement(J6.Provider, { value: e }, t);
}
function t8(e, t, n) {
  Hd() || _e(!1);
  let { navigator: r } = S.useContext(Vd),
    { matches: o } = S.useContext(ci),
    i = o[o.length - 1],
    a = i ? i.params : {};
  i && i.pathname;
  let l = i ? i.pathnameBase : "/";
  i && i.route;
  let s = vR(),
    u;
  if (t) {
    var c;
    let g = typeof t == "string" ? Gr(t) : t;
    l === "/" || ((c = g.pathname) != null && c.startsWith(l)) || _e(!1),
      (u = g);
  } else u = s;
  let d = u.pathname || "/",
    f = l === "/" ? d : d.slice(l.length) || "/",
    p = $i(e, { pathname: f }),
    h = a8(
      p &&
        p.map((g) =>
          Object.assign({}, g, {
            params: Object.assign({}, a, g.params),
            pathname: mo([
              l,
              r.encodeLocation
                ? r.encodeLocation(g.pathname).pathname
                : g.pathname,
            ]),
            pathnameBase:
              g.pathnameBase === "/"
                ? l
                : mo([
                    l,
                    r.encodeLocation
                      ? r.encodeLocation(g.pathnameBase).pathname
                      : g.pathnameBase,
                  ]),
          })
        ),
      o,
      n
    );
  return t && h
    ? S.createElement(
        Wd.Provider,
        {
          value: {
            location: gc(
              {
                pathname: "/",
                search: "",
                hash: "",
                state: null,
                key: "default",
              },
              u
            ),
            navigationType: mt.Pop,
          },
        },
        h
      )
    : h;
}
function n8() {
  let e = c8(),
    t = oR(e)
      ? e.status + " " + e.statusText
      : e instanceof Error
      ? e.message
      : JSON.stringify(e),
    n = e instanceof Error ? e.stack : null,
    o = { padding: "0.5rem", backgroundColor: "rgba(200,200,200, 0.5)" },
    i = null;
  return S.createElement(
    S.Fragment,
    null,
    S.createElement("h2", null, "Unexpected Application Error!"),
    S.createElement("h3", { style: { fontStyle: "italic" } }, t),
    n ? S.createElement("pre", { style: o }, n) : null,
    i
  );
}
const r8 = S.createElement(n8, null);
class o8 extends S.Component {
  constructor(t) {
    super(t),
      (this.state = {
        location: t.location,
        revalidation: t.revalidation,
        error: t.error,
      });
  }
  static getDerivedStateFromError(t) {
    return { error: t };
  }
  static getDerivedStateFromProps(t, n) {
    return n.location !== t.location ||
      (n.revalidation !== "idle" && t.revalidation === "idle")
      ? { error: t.error, location: t.location, revalidation: t.revalidation }
      : {
          error: t.error || n.error,
          location: n.location,
          revalidation: t.revalidation || n.revalidation,
        };
  }
  componentDidCatch(t, n) {
    console.error(
      "React Router caught the following error during render",
      t,
      n
    );
  }
  render() {
    return this.state.error
      ? S.createElement(
          ci.Provider,
          { value: this.props.routeContext },
          S.createElement(pR.Provider, {
            value: this.state.error,
            children: this.props.component,
          })
        )
      : this.props.children;
  }
}
function i8(e) {
  let { routeContext: t, match: n, children: r } = e,
    o = S.useContext(Wm);
  return (
    o &&
      o.static &&
      o.staticContext &&
      (n.route.errorElement || n.route.ErrorBoundary) &&
      (o.staticContext._deepestRenderedBoundaryId = n.route.id),
    S.createElement(ci.Provider, { value: t }, r)
  );
}
function a8(e, t, n) {
  var r;
  if ((t === void 0 && (t = []), n === void 0 && (n = null), e == null)) {
    var o;
    if ((o = n) != null && o.errors) e = n.matches;
    else return null;
  }
  let i = e,
    a = (r = n) == null ? void 0 : r.errors;
  if (a != null) {
    let l = i.findIndex(
      (s) => s.route.id && (a == null ? void 0 : a[s.route.id])
    );
    l >= 0 || _e(!1), (i = i.slice(0, Math.min(i.length, l + 1)));
  }
  return i.reduceRight((l, s, u) => {
    let c = s.route.id ? (a == null ? void 0 : a[s.route.id]) : null,
      d = null;
    n && (d = s.route.errorElement || r8);
    let f = t.concat(i.slice(0, u + 1)),
      p = () => {
        let h;
        return (
          c
            ? (h = d)
            : s.route.Component
            ? (h = S.createElement(s.route.Component, null))
            : s.route.element
            ? (h = s.route.element)
            : (h = l),
          S.createElement(i8, {
            match: s,
            routeContext: { outlet: l, matches: f, isDataRoute: n != null },
            children: h,
          })
        );
      };
    return n && (s.route.ErrorBoundary || s.route.errorElement || u === 0)
      ? S.createElement(o8, {
          location: n.location,
          revalidation: n.revalidation,
          component: d,
          error: c,
          children: p(),
          routeContext: { outlet: null, matches: f, isDataRoute: !0 },
        })
      : p();
  }, null);
}
var Lv;
(function (e) {
  (e.UseBlocker = "useBlocker"),
    (e.UseRevalidator = "useRevalidator"),
    (e.UseNavigateStable = "useNavigate");
})(Lv || (Lv = {}));
var Ql;
(function (e) {
  (e.UseBlocker = "useBlocker"),
    (e.UseLoaderData = "useLoaderData"),
    (e.UseActionData = "useActionData"),
    (e.UseRouteError = "useRouteError"),
    (e.UseNavigation = "useNavigation"),
    (e.UseRouteLoaderData = "useRouteLoaderData"),
    (e.UseMatches = "useMatches"),
    (e.UseRevalidator = "useRevalidator"),
    (e.UseNavigateStable = "useNavigate"),
    (e.UseRouteId = "useRouteId");
})(Ql || (Ql = {}));
function l8(e) {
  let t = S.useContext(Wm);
  return t || _e(!1), t;
}
function s8(e) {
  let t = S.useContext(fR);
  return t || _e(!1), t;
}
function u8(e) {
  let t = S.useContext(ci);
  return t || _e(!1), t;
}
function gR(e) {
  let t = u8(),
    n = t.matches[t.matches.length - 1];
  return n.route.id || _e(!1), n.route.id;
}
function c8() {
  var e;
  let t = S.useContext(pR),
    n = s8(Ql.UseRouteError),
    r = gR(Ql.UseRouteError);
  return t || ((e = n.errors) == null ? void 0 : e[r]);
}
function d8() {
  let { router: e } = l8(Lv.UseNavigateStable),
    t = gR(Ql.UseNavigateStable),
    n = S.useRef(!1);
  return (
    hR(() => {
      n.current = !0;
    }),
    S.useCallback(
      function (o, i) {
        i === void 0 && (i = {}),
          n.current &&
            (typeof o == "number"
              ? e.navigate(o)
              : e.navigate(o, gc({ fromRouteId: t }, i)));
      },
      [e, t]
    )
  );
}
function f8(e) {
  let { fallbackElement: t, router: n } = e,
    [r, o] = S.useState(n.state);
  S.useLayoutEffect(() => n.subscribe(o), [n, o]);
  let i = S.useMemo(
      () => ({
        createHref: n.createHref,
        encodeLocation: n.encodeLocation,
        go: (s) => n.navigate(s),
        push: (s, u, c) =>
          n.navigate(s, {
            state: u,
            preventScrollReset: c == null ? void 0 : c.preventScrollReset,
          }),
        replace: (s, u, c) =>
          n.navigate(s, {
            replace: !0,
            state: u,
            preventScrollReset: c == null ? void 0 : c.preventScrollReset,
          }),
      }),
      [n]
    ),
    a = n.basename || "/",
    l = S.useMemo(
      () => ({ router: n, navigator: i, static: !1, basename: a }),
      [n, i, a]
    );
  return S.createElement(
    S.Fragment,
    null,
    S.createElement(
      Wm.Provider,
      { value: l },
      S.createElement(
        fR.Provider,
        { value: r },
        S.createElement(
          h8,
          {
            basename: n.basename,
            location: n.state.location,
            navigationType: n.state.historyAction,
            navigator: i,
          },
          n.state.initialized
            ? S.createElement(p8, { routes: n.routes, state: r })
            : t
        )
      )
    ),
    null
  );
}
function p8(e) {
  let { routes: t, state: n } = e;
  return t8(t, void 0, n);
}
function v8(e) {
  return e8(e.context);
}
function Bv(e) {
  _e(!1);
}
function h8(e) {
  let {
    basename: t = "/",
    children: n = null,
    location: r,
    navigationType: o = mt.Pop,
    navigator: i,
    static: a = !1,
  } = e;
  Hd() && _e(!1);
  let l = t.replace(/^\/*/, "/"),
    s = S.useMemo(() => ({ basename: l, navigator: i, static: a }), [l, i, a]);
  typeof r == "string" && (r = Gr(r));
  let {
      pathname: u = "/",
      search: c = "",
      hash: d = "",
      state: f = null,
      key: p = "default",
    } = r,
    h = S.useMemo(() => {
      let g = Rs(u, l);
      return g == null
        ? null
        : {
            location: { pathname: g, search: c, hash: d, state: f, key: p },
            navigationType: o,
          };
    }, [l, u, c, d, f, p, o]);
  return h == null
    ? null
    : S.createElement(
        Vd.Provider,
        { value: s },
        S.createElement(Wd.Provider, { children: n, value: h })
      );
}
var b1;
(function (e) {
  (e[(e.pending = 0)] = "pending"),
    (e[(e.success = 1)] = "success"),
    (e[(e.error = 2)] = "error");
})(b1 || (b1 = {}));
new Promise(() => {});
function Fv(e, t) {
  t === void 0 && (t = []);
  let n = [];
  return (
    S.Children.forEach(e, (r, o) => {
      if (!S.isValidElement(r)) return;
      let i = [...t, o];
      if (r.type === S.Fragment) {
        n.push.apply(n, Fv(r.props.children, i));
        return;
      }
      r.type !== Bv && _e(!1), !r.props.index || !r.props.children || _e(!1);
      let a = {
        id: r.props.id || i.join("-"),
        caseSensitive: r.props.caseSensitive,
        element: r.props.element,
        Component: r.props.Component,
        index: r.props.index,
        path: r.props.path,
        loader: r.props.loader,
        action: r.props.action,
        errorElement: r.props.errorElement,
        ErrorBoundary: r.props.ErrorBoundary,
        hasErrorBoundary:
          r.props.ErrorBoundary != null || r.props.errorElement != null,
        shouldRevalidate: r.props.shouldRevalidate,
        handle: r.props.handle,
        lazy: r.props.lazy,
      };
      r.props.children && (a.children = Fv(r.props.children, i)), n.push(a);
    }),
    n
  );
}
function m8(e) {
  let t = {
    hasErrorBoundary: e.ErrorBoundary != null || e.errorElement != null,
  };
  return (
    e.Component &&
      Object.assign(t, {
        element: S.createElement(e.Component),
        Component: void 0,
      }),
    e.ErrorBoundary &&
      Object.assign(t, {
        errorElement: S.createElement(e.ErrorBoundary),
        ErrorBoundary: void 0,
      }),
    t
  );
}
/**
 * React Router DOM v6.11.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ function yc() {
  return (
    (yc = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
              Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    yc.apply(this, arguments)
  );
}
function g8(e, t) {
  return V6({
    basename: t == null ? void 0 : t.basename,
    future: yc({}, t == null ? void 0 : t.future, { v7_prependBasename: !0 }),
    history: d6({ window: t == null ? void 0 : t.window }),
    hydrationData: (t == null ? void 0 : t.hydrationData) || y8(),
    routes: e,
    mapRouteProperties: m8,
  }).initialize();
}
function y8() {
  var e;
  let t = (e = window) == null ? void 0 : e.__staticRouterHydrationData;
  return t && t.errors && (t = yc({}, t, { errors: b8(t.errors) })), t;
}
function b8(e) {
  if (!e) return null;
  let t = Object.entries(e),
    n = {};
  for (let [r, o] of t)
    if (o && o.__type === "RouteErrorResponse")
      n[r] = new Um(o.status, o.statusText, o.data, o.internal === !0);
    else if (o && o.__type === "Error") {
      let i = new Error(o.message);
      (i.stack = ""), (n[r] = i);
    } else n[r] = o;
  return n;
}
var x1;
(function (e) {
  (e.UseScrollRestoration = "useScrollRestoration"),
    (e.UseSubmitImpl = "useSubmitImpl"),
    (e.UseFetcher = "useFetcher");
})(x1 || (x1 = {}));
var S1;
(function (e) {
  (e.UseFetchers = "useFetchers"),
    (e.UseScrollRestoration = "useScrollRestoration");
})(S1 || (S1 = {}));
const x8 = Ee(kw)(({ theme: e }) => ({
  "& .MuiDialogContent-root": { padding: e.spacing(2) },
  "& .MuiDialogActions-root": { padding: e.spacing(1) },
}));
Vy.node, Vy.func.isRequired;
function S8() {
  const e = Tr(dr),
    t = mR();
  return w.jsx("div", {
    children: w.jsxs(x8, {
      "aria-labelledby": "customized-dialog-title",
      open: !0,
      PaperProps: e
        ? {
            sx: {
              position: "relative",
              height: "80vh",
              width: "100vw",
              backgroundColor: "black",
              color: "white",
              border: "1px solid white",
              borderRadius: "0.5rem",
            },
          }
        : { sx: { position: "relative", height: "80vh", width: "100vw" } },
      children: [
        w.jsx(Fo, {
          "aria-label": "close",
          sx: {
            position: "absolute",
            width: "5%",
            top: "0.5rem",
            right: "1rem",
          },
          onClick: () => {
            t("/");
          },
          children: w.jsx(xd, { sx: e ? { color: "white" } : null }),
        }),
        w.jsxs(Dw, { children: [w.jsx(c6, {}), w.jsx(t6, {}), w.jsx(OB, {})] }),
      ],
    }),
  });
}
var Hm = {},
  w8 = rn;
Object.defineProperty(Hm, "__esModule", { value: !0 });
var yR = (Hm.default = void 0),
  C8 = w8(on()),
  R8 = w,
  E8 = (0, C8.default)(
    (0, R8.jsx)("path", {
      d: "M10 6 8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z",
    }),
    "NavigateNext"
  );
yR = Hm.default = E8;
function T8(e) {
  return lt("MuiAppBar", e);
}
Ke("MuiAppBar", [
  "root",
  "positionFixed",
  "positionAbsolute",
  "positionSticky",
  "positionStatic",
  "positionRelative",
  "colorDefault",
  "colorPrimary",
  "colorSecondary",
  "colorInherit",
  "colorTransparent",
]);
const _8 = ["className", "color", "enableColorOnDark", "position"],
  P8 = (e) => {
    const { color: t, position: n, classes: r } = e,
      o = { root: ["root", `color${pe(t)}`, `position${pe(n)}`] };
    return dt(o, T8, r);
  },
  su = (e, t) => (e ? `${e == null ? void 0 : e.replace(")", "")}, ${t})` : t),
  k8 = Ee(hs, {
    name: "MuiAppBar",
    slot: "Root",
    overridesResolver: (e, t) => {
      const { ownerState: n } = e;
      return [t.root, t[`position${pe(n.position)}`], t[`color${pe(n.color)}`]];
    },
  })(({ theme: e, ownerState: t }) => {
    const n =
      e.palette.mode === "light" ? e.palette.grey[100] : e.palette.grey[900];
    return T(
      {
        display: "flex",
        flexDirection: "column",
        width: "100%",
        boxSizing: "border-box",
        flexShrink: 0,
      },
      t.position === "fixed" && {
        position: "fixed",
        zIndex: (e.vars || e).zIndex.appBar,
        top: 0,
        left: "auto",
        right: 0,
        "@media print": { position: "absolute" },
      },
      t.position === "absolute" && {
        position: "absolute",
        zIndex: (e.vars || e).zIndex.appBar,
        top: 0,
        left: "auto",
        right: 0,
      },
      t.position === "sticky" && {
        position: "sticky",
        zIndex: (e.vars || e).zIndex.appBar,
        top: 0,
        left: "auto",
        right: 0,
      },
      t.position === "static" && { position: "static" },
      t.position === "relative" && { position: "relative" },
      !e.vars &&
        T(
          {},
          t.color === "default" && {
            backgroundColor: n,
            color: e.palette.getContrastText(n),
          },
          t.color &&
            t.color !== "default" &&
            t.color !== "inherit" &&
            t.color !== "transparent" && {
              backgroundColor: e.palette[t.color].main,
              color: e.palette[t.color].contrastText,
            },
          t.color === "inherit" && { color: "inherit" },
          e.palette.mode === "dark" &&
            !t.enableColorOnDark && { backgroundColor: null, color: null },
          t.color === "transparent" &&
            T(
              { backgroundColor: "transparent", color: "inherit" },
              e.palette.mode === "dark" && { backgroundImage: "none" }
            )
        ),
      e.vars &&
        T(
          {},
          t.color === "default" && {
            "--AppBar-background": t.enableColorOnDark
              ? e.vars.palette.AppBar.defaultBg
              : su(
                  e.vars.palette.AppBar.darkBg,
                  e.vars.palette.AppBar.defaultBg
                ),
            "--AppBar-color": t.enableColorOnDark
              ? e.vars.palette.text.primary
              : su(
                  e.vars.palette.AppBar.darkColor,
                  e.vars.palette.text.primary
                ),
          },
          t.color &&
            !t.color.match(/^(default|inherit|transparent)$/) && {
              "--AppBar-background": t.enableColorOnDark
                ? e.vars.palette[t.color].main
                : su(
                    e.vars.palette.AppBar.darkBg,
                    e.vars.palette[t.color].main
                  ),
              "--AppBar-color": t.enableColorOnDark
                ? e.vars.palette[t.color].contrastText
                : su(
                    e.vars.palette.AppBar.darkColor,
                    e.vars.palette[t.color].contrastText
                  ),
            },
          {
            backgroundColor: "var(--AppBar-background)",
            color: t.color === "inherit" ? "inherit" : "var(--AppBar-color)",
          },
          t.color === "transparent" && {
            backgroundImage: "none",
            backgroundColor: "transparent",
            color: "inherit",
          }
        )
    );
  }),
  D8 = S.forwardRef(function (t, n) {
    const r = ft({ props: t, name: "MuiAppBar" }),
      {
        className: o,
        color: i = "primary",
        enableColorOnDark: a = !1,
        position: l = "fixed",
      } = r,
      s = xe(r, _8),
      u = T({}, r, { color: i, position: l, enableColorOnDark: a }),
      c = P8(u);
    return w.jsx(
      k8,
      T(
        {
          square: !0,
          component: "header",
          ownerState: u,
          elevation: 4,
          className: we(c.root, o, l === "fixed" && "mui-fixed"),
          ref: n,
        },
        s
      )
    );
  }),
  I8 = D8,
  A8 = cw(),
  N8 = Jk({
    themeId: Gc,
    defaultTheme: A8,
    defaultClassName: "MuiBox-root",
    generateClassName: qh.generate,
  }),
  uu = N8;
function O8(e) {
  return lt("MuiToolbar", e);
}
Ke("MuiToolbar", ["root", "gutters", "regular", "dense"]);
const M8 = ["className", "component", "disableGutters", "variant"],
  $8 = (e) => {
    const { classes: t, disableGutters: n, variant: r } = e;
    return dt({ root: ["root", !n && "gutters", r] }, O8, t);
  },
  L8 = Ee("div", {
    name: "MuiToolbar",
    slot: "Root",
    overridesResolver: (e, t) => {
      const { ownerState: n } = e;
      return [t.root, !n.disableGutters && t.gutters, t[n.variant]];
    },
  })(
    ({ theme: e, ownerState: t }) =>
      T(
        { position: "relative", display: "flex", alignItems: "center" },
        !t.disableGutters && {
          paddingLeft: e.spacing(2),
          paddingRight: e.spacing(2),
          [e.breakpoints.up("sm")]: {
            paddingLeft: e.spacing(3),
            paddingRight: e.spacing(3),
          },
        },
        t.variant === "dense" && { minHeight: 48 }
      ),
    ({ theme: e, ownerState: t }) => t.variant === "regular" && e.mixins.toolbar
  ),
  B8 = S.forwardRef(function (t, n) {
    const r = ft({ props: t, name: "MuiToolbar" }),
      {
        className: o,
        component: i = "div",
        disableGutters: a = !1,
        variant: l = "regular",
      } = r,
      s = xe(r, M8),
      u = T({}, r, { component: i, disableGutters: a, variant: l }),
      c = $8(u);
    return w.jsx(
      L8,
      T({ as: i, className: we(c.root, o), ref: n, ownerState: u }, s)
    );
  }),
  F8 = B8;
function j8(e) {
  return lt("MuiBadge", e);
}
const z8 = Ke("MuiBadge", [
    "root",
    "badge",
    "dot",
    "standard",
    "anchorOriginTopRight",
    "anchorOriginBottomRight",
    "anchorOriginTopLeft",
    "anchorOriginBottomLeft",
    "invisible",
    "colorError",
    "colorInfo",
    "colorPrimary",
    "colorSecondary",
    "colorSuccess",
    "colorWarning",
    "overlapRectangular",
    "overlapCircular",
    "anchorOriginTopLeftCircular",
    "anchorOriginTopLeftRectangular",
    "anchorOriginTopRightCircular",
    "anchorOriginTopRightRectangular",
    "anchorOriginBottomLeftCircular",
    "anchorOriginBottomLeftRectangular",
    "anchorOriginBottomRightCircular",
    "anchorOriginBottomRightRectangular",
  ]),
  Yr = z8,
  U8 = [
    "anchorOrigin",
    "className",
    "classes",
    "component",
    "components",
    "componentsProps",
    "children",
    "overlap",
    "color",
    "invisible",
    "max",
    "badgeContent",
    "slots",
    "slotProps",
    "showZero",
    "variant",
  ],
  ep = 10,
  tp = 4,
  V8 = (e) => {
    const {
        color: t,
        anchorOrigin: n,
        invisible: r,
        overlap: o,
        variant: i,
        classes: a = {},
      } = e,
      l = {
        root: ["root"],
        badge: [
          "badge",
          i,
          r && "invisible",
          `anchorOrigin${pe(n.vertical)}${pe(n.horizontal)}`,
          `anchorOrigin${pe(n.vertical)}${pe(n.horizontal)}${pe(o)}`,
          `overlap${pe(o)}`,
          t !== "default" && `color${pe(t)}`,
        ],
      };
    return dt(l, j8, a);
  },
  W8 = Ee("span", {
    name: "MuiBadge",
    slot: "Root",
    overridesResolver: (e, t) => t.root,
  })({
    position: "relative",
    display: "inline-flex",
    verticalAlign: "middle",
    flexShrink: 0,
  }),
  H8 = Ee("span", {
    name: "MuiBadge",
    slot: "Badge",
    overridesResolver: (e, t) => {
      const { ownerState: n } = e;
      return [
        t.badge,
        t[n.variant],
        t[
          `anchorOrigin${pe(n.anchorOrigin.vertical)}${pe(
            n.anchorOrigin.horizontal
          )}${pe(n.overlap)}`
        ],
        n.color !== "default" && t[`color${pe(n.color)}`],
        n.invisible && t.invisible,
      ];
    },
  })(({ theme: e, ownerState: t }) =>
    T(
      {
        display: "flex",
        flexDirection: "row",
        flexWrap: "wrap",
        justifyContent: "center",
        alignContent: "center",
        alignItems: "center",
        position: "absolute",
        boxSizing: "border-box",
        fontFamily: e.typography.fontFamily,
        fontWeight: e.typography.fontWeightMedium,
        fontSize: e.typography.pxToRem(12),
        minWidth: ep * 2,
        lineHeight: 1,
        padding: "0 6px",
        height: ep * 2,
        borderRadius: ep,
        zIndex: 1,
        transition: e.transitions.create("transform", {
          easing: e.transitions.easing.easeInOut,
          duration: e.transitions.duration.enteringScreen,
        }),
      },
      t.color !== "default" && {
        backgroundColor: (e.vars || e).palette[t.color].main,
        color: (e.vars || e).palette[t.color].contrastText,
      },
      t.variant === "dot" && {
        borderRadius: tp,
        height: tp * 2,
        minWidth: tp * 2,
        padding: 0,
      },
      t.anchorOrigin.vertical === "top" &&
        t.anchorOrigin.horizontal === "right" &&
        t.overlap === "rectangular" && {
          top: 0,
          right: 0,
          transform: "scale(1) translate(50%, -50%)",
          transformOrigin: "100% 0%",
          [`&.${Yr.invisible}`]: { transform: "scale(0) translate(50%, -50%)" },
        },
      t.anchorOrigin.vertical === "bottom" &&
        t.anchorOrigin.horizontal === "right" &&
        t.overlap === "rectangular" && {
          bottom: 0,
          right: 0,
          transform: "scale(1) translate(50%, 50%)",
          transformOrigin: "100% 100%",
          [`&.${Yr.invisible}`]: { transform: "scale(0) translate(50%, 50%)" },
        },
      t.anchorOrigin.vertical === "top" &&
        t.anchorOrigin.horizontal === "left" &&
        t.overlap === "rectangular" && {
          top: 0,
          left: 0,
          transform: "scale(1) translate(-50%, -50%)",
          transformOrigin: "0% 0%",
          [`&.${Yr.invisible}`]: {
            transform: "scale(0) translate(-50%, -50%)",
          },
        },
      t.anchorOrigin.vertical === "bottom" &&
        t.anchorOrigin.horizontal === "left" &&
        t.overlap === "rectangular" && {
          bottom: 0,
          left: 0,
          transform: "scale(1) translate(-50%, 50%)",
          transformOrigin: "0% 100%",
          [`&.${Yr.invisible}`]: { transform: "scale(0) translate(-50%, 50%)" },
        },
      t.anchorOrigin.vertical === "top" &&
        t.anchorOrigin.horizontal === "right" &&
        t.overlap === "circular" && {
          top: "14%",
          right: "14%",
          transform: "scale(1) translate(50%, -50%)",
          transformOrigin: "100% 0%",
          [`&.${Yr.invisible}`]: { transform: "scale(0) translate(50%, -50%)" },
        },
      t.anchorOrigin.vertical === "bottom" &&
        t.anchorOrigin.horizontal === "right" &&
        t.overlap === "circular" && {
          bottom: "14%",
          right: "14%",
          transform: "scale(1) translate(50%, 50%)",
          transformOrigin: "100% 100%",
          [`&.${Yr.invisible}`]: { transform: "scale(0) translate(50%, 50%)" },
        },
      t.anchorOrigin.vertical === "top" &&
        t.anchorOrigin.horizontal === "left" &&
        t.overlap === "circular" && {
          top: "14%",
          left: "14%",
          transform: "scale(1) translate(-50%, -50%)",
          transformOrigin: "0% 0%",
          [`&.${Yr.invisible}`]: {
            transform: "scale(0) translate(-50%, -50%)",
          },
        },
      t.anchorOrigin.vertical === "bottom" &&
        t.anchorOrigin.horizontal === "left" &&
        t.overlap === "circular" && {
          bottom: "14%",
          left: "14%",
          transform: "scale(1) translate(-50%, 50%)",
          transformOrigin: "0% 100%",
          [`&.${Yr.invisible}`]: { transform: "scale(0) translate(-50%, 50%)" },
        },
      t.invisible && {
        transition: e.transitions.create("transform", {
          easing: e.transitions.easing.easeInOut,
          duration: e.transitions.duration.leavingScreen,
        }),
      }
    )
  ),
  G8 = S.forwardRef(function (t, n) {
    var r, o, i, a, l, s;
    const u = ft({ props: t, name: "MuiBadge" }),
      {
        anchorOrigin: c = { vertical: "top", horizontal: "right" },
        className: d,
        component: f,
        components: p = {},
        componentsProps: h = {},
        children: g,
        overlap: x = "rectangular",
        color: v = "default",
        invisible: m = !1,
        max: y = 99,
        badgeContent: b,
        slots: C,
        slotProps: R,
        showZero: E = !1,
        variant: D = "standard",
      } = u,
      A = xe(u, U8),
      {
        badgeContent: I,
        invisible: M,
        max: J,
        displayValue: V,
      } = nI({ max: y, invisible: m, badgeContent: b, showZero: E }),
      j = $S({
        anchorOrigin: c,
        color: v,
        overlap: x,
        variant: D,
        badgeContent: b,
      }),
      z = M || (I == null && D !== "dot"),
      {
        color: q = v,
        overlap: re = x,
        anchorOrigin: U = c,
        variant: X = D,
      } = z ? j : u,
      W = X !== "dot" ? V : void 0,
      ee = T({}, u, {
        badgeContent: I,
        invisible: z,
        max: J,
        displayValue: W,
        showZero: E,
        anchorOrigin: U,
        color: q,
        overlap: re,
        variant: X,
      }),
      k = V8(ee),
      L =
        (r = (o = C == null ? void 0 : C.root) != null ? o : p.Root) != null
          ? r
          : W8,
      O =
        (i = (a = C == null ? void 0 : C.badge) != null ? a : p.Badge) != null
          ? i
          : H8,
      H = (l = R == null ? void 0 : R.root) != null ? l : h.root,
      Y = (s = R == null ? void 0 : R.badge) != null ? s : h.badge,
      se = Kl({
        elementType: L,
        externalSlotProps: H,
        externalForwardedProps: A,
        additionalProps: { ref: n, as: f },
        ownerState: ee,
        className: we(H == null ? void 0 : H.className, k.root, d),
      }),
      ie = Kl({
        elementType: O,
        externalSlotProps: Y,
        ownerState: ee,
        className: we(k.badge, Y == null ? void 0 : Y.className),
      });
    return w.jsxs(
      L,
      T({}, se, { children: [g, w.jsx(O, T({}, ie, { children: W }))] })
    );
  }),
  w1 = G8;
var Gm = {},
  K8 = rn;
Object.defineProperty(Gm, "__esModule", { value: !0 });
var bR = (Gm.default = void 0),
  q8 = K8(on()),
  Y8 = w,
  X8 = (0, q8.default)(
    (0, Y8.jsx)("path", {
      d: "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 4c1.93 0 3.5 1.57 3.5 3.5S13.93 13 12 13s-3.5-1.57-3.5-3.5S10.07 6 12 6zm0 14c-2.03 0-4.43-.82-6.14-2.88C7.55 15.8 9.68 15 12 15s4.45.8 6.14 2.12C16.43 19.18 14.03 20 12 20z",
    }),
    "AccountCircle"
  );
bR = Gm.default = X8;
var Km = {},
  Q8 = rn;
Object.defineProperty(Km, "__esModule", { value: !0 });
var xR = (Km.default = void 0),
  Z8 = Q8(on()),
  J8 = w,
  eF = (0, Z8.default)(
    (0, J8.jsx)("path", {
      d: "M12 8c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z",
    }),
    "MoreVert"
  );
xR = Km.default = eF;
var qm = {},
  tF = rn;
Object.defineProperty(qm, "__esModule", { value: !0 });
var SR = (qm.default = void 0),
  nF = tF(on()),
  rF = w,
  oF = (0, nF.default)(
    (0, rF.jsx)("path", {
      d: "M11 18h2v-2h-2v2zm1-16C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm0-14c-2.21 0-4 1.79-4 4h2c0-1.1.9-2 2-2s2 .9 2 2c0 2-3 1.75-3 5h2c0-2.25 3-2.5 3-5 0-2.21-1.79-4-4-4z",
    }),
    "HelpOutline"
  );
SR = qm.default = oF;
function iF(e) {
  return On({
    tag: "svg",
    attr: { fill: "currentColor", viewBox: "0 0 16 16" },
    child: [
      {
        tag: "path",
        attr: {
          d: "M8 15A7 7 0 1 0 8 1v14zm0 1A8 8 0 1 1 8 0a8 8 0 0 1 0 16z",
        },
      },
    ],
  })(e);
}
function aF(e) {
  return On({
    tag: "svg",
    attr: { fill: "currentColor", viewBox: "0 0 16 16" },
    child: [
      {
        tag: "path",
        attr: {
          d: "M14.1 0H1.903C.852 0 .002.85 0 1.9v12.19A1.902 1.902 0 0 0 1.902 16h12.199A1.902 1.902 0 0 0 16 14.09V1.9A1.902 1.902 0 0 0 14.1 0ZM7 11.367a.636.636 0 0 1-.64.633H3.593a.633.633 0 0 1-.63-.633V3.583c0-.348.281-.631.63-.633h2.765c.35.002.632.284.633.633L7 11.367Zm6.052-3.5a.633.633 0 0 1-.64.633h-2.78A.636.636 0 0 1 9 7.867V3.583a.636.636 0 0 1 .633-.633h2.778c.35.002.631.285.631.633l.01 4.284Z",
        },
      },
    ],
  })(e);
}
const lF = [
  "addEndListener",
  "appear",
  "children",
  "easing",
  "in",
  "onEnter",
  "onEntered",
  "onEntering",
  "onExit",
  "onExited",
  "onExiting",
  "style",
  "timeout",
  "TransitionComponent",
];
function jv(e) {
  return `scale(${e}, ${e ** 2})`;
}
const sF = {
    entering: { opacity: 1, transform: jv(1) },
    entered: { opacity: 1, transform: "none" },
  },
  np =
    typeof navigator < "u" &&
    /^((?!chrome|android).)*(safari|mobile)/i.test(navigator.userAgent) &&
    /(os |version\/)15(.|_)4/i.test(navigator.userAgent),
  wR = S.forwardRef(function (t, n) {
    const {
        addEndListener: r,
        appear: o = !0,
        children: i,
        easing: a,
        in: l,
        onEnter: s,
        onEntered: u,
        onEntering: c,
        onExit: d,
        onExited: f,
        onExiting: p,
        style: h,
        timeout: g = "auto",
        TransitionComponent: x = Cw,
      } = t,
      v = xe(t, lF),
      m = S.useRef(),
      y = S.useRef(),
      b = fs(),
      C = S.useRef(null),
      R = en(C, i.ref, n),
      E = (z) => (q) => {
        if (z) {
          const re = C.current;
          q === void 0 ? z(re) : z(re, q);
        }
      },
      D = E(c),
      A = E((z, q) => {
        Rw(z);
        const {
          duration: re,
          delay: U,
          easing: X,
        } = fc({ style: h, timeout: g, easing: a }, { mode: "enter" });
        let W;
        g === "auto"
          ? ((W = b.transitions.getAutoHeightDuration(z.clientHeight)),
            (y.current = W))
          : (W = re),
          (z.style.transition = [
            b.transitions.create("opacity", { duration: W, delay: U }),
            b.transitions.create("transform", {
              duration: np ? W : W * 0.666,
              delay: U,
              easing: X,
            }),
          ].join(",")),
          s && s(z, q);
      }),
      I = E(u),
      M = E(p),
      J = E((z) => {
        const {
          duration: q,
          delay: re,
          easing: U,
        } = fc({ style: h, timeout: g, easing: a }, { mode: "exit" });
        let X;
        g === "auto"
          ? ((X = b.transitions.getAutoHeightDuration(z.clientHeight)),
            (y.current = X))
          : (X = q),
          (z.style.transition = [
            b.transitions.create("opacity", { duration: X, delay: re }),
            b.transitions.create("transform", {
              duration: np ? X : X * 0.666,
              delay: np ? re : re || X * 0.333,
              easing: U,
            }),
          ].join(",")),
          (z.style.opacity = 0),
          (z.style.transform = jv(0.75)),
          d && d(z);
      }),
      V = E(f),
      j = (z) => {
        g === "auto" && (m.current = setTimeout(z, y.current || 0)),
          r && r(C.current, z);
      };
    return (
      S.useEffect(
        () => () => {
          clearTimeout(m.current);
        },
        []
      ),
      w.jsx(
        x,
        T(
          {
            appear: o,
            in: l,
            nodeRef: C,
            onEnter: A,
            onEntered: I,
            onEntering: D,
            onExit: J,
            onExited: V,
            onExiting: M,
            addEndListener: j,
            timeout: g === "auto" ? null : g,
          },
          v,
          {
            children: (z, q) =>
              S.cloneElement(
                i,
                T(
                  {
                    style: T(
                      {
                        opacity: 0,
                        transform: jv(0.75),
                        visibility: z === "exited" && !l ? "hidden" : void 0,
                      },
                      sF[z],
                      h,
                      i.props.style
                    ),
                    ref: R,
                  },
                  q
                )
              ),
          }
        )
      )
    );
  });
wR.muiSupportAuto = !0;
const zv = wR,
  uF = [
    "anchorEl",
    "component",
    "components",
    "componentsProps",
    "container",
    "disablePortal",
    "keepMounted",
    "modifiers",
    "open",
    "placement",
    "popperOptions",
    "popperRef",
    "transition",
    "slots",
    "slotProps",
  ],
  cF = Ee(_A, {
    name: "MuiPopper",
    slot: "Root",
    overridesResolver: (e, t) => t.root,
  })({}),
  dF = S.forwardRef(function (t, n) {
    var r;
    const o = ow(),
      i = ft({ props: t, name: "MuiPopper" }),
      {
        anchorEl: a,
        component: l,
        components: s,
        componentsProps: u,
        container: c,
        disablePortal: d,
        keepMounted: f,
        modifiers: p,
        open: h,
        placement: g,
        popperOptions: x,
        popperRef: v,
        transition: m,
        slots: y,
        slotProps: b,
      } = i,
      C = xe(i, uF),
      R =
        (r = y == null ? void 0 : y.root) != null
          ? r
          : s == null
          ? void 0
          : s.Root,
      E = T(
        {
          anchorEl: a,
          container: c,
          disablePortal: d,
          keepMounted: f,
          modifiers: p,
          open: h,
          placement: g,
          popperOptions: x,
          popperRef: v,
          transition: m,
        },
        C
      );
    return w.jsx(
      cF,
      T(
        {
          as: l,
          direction: o == null ? void 0 : o.direction,
          slots: { root: R },
          slotProps: b ?? u,
        },
        E,
        { ref: n }
      )
    );
  }),
  CR = dF;
function fF(e) {
  return lt("MuiTooltip", e);
}
const pF = Ke("MuiTooltip", [
    "popper",
    "popperInteractive",
    "popperArrow",
    "popperClose",
    "tooltip",
    "tooltipArrow",
    "touch",
    "tooltipPlacementLeft",
    "tooltipPlacementRight",
    "tooltipPlacementTop",
    "tooltipPlacementBottom",
    "arrow",
  ]),
  io = pF,
  vF = [
    "arrow",
    "children",
    "classes",
    "components",
    "componentsProps",
    "describeChild",
    "disableFocusListener",
    "disableHoverListener",
    "disableInteractive",
    "disableTouchListener",
    "enterDelay",
    "enterNextDelay",
    "enterTouchDelay",
    "followCursor",
    "id",
    "leaveDelay",
    "leaveTouchDelay",
    "onClose",
    "onOpen",
    "open",
    "placement",
    "PopperComponent",
    "PopperProps",
    "slotProps",
    "slots",
    "title",
    "TransitionComponent",
    "TransitionProps",
  ];
function hF(e) {
  return Math.round(e * 1e5) / 1e5;
}
const mF = (e) => {
    const {
        classes: t,
        disableInteractive: n,
        arrow: r,
        touch: o,
        placement: i,
      } = e,
      a = {
        popper: ["popper", !n && "popperInteractive", r && "popperArrow"],
        tooltip: [
          "tooltip",
          r && "tooltipArrow",
          o && "touch",
          `tooltipPlacement${pe(i.split("-")[0])}`,
        ],
        arrow: ["arrow"],
      };
    return dt(a, fF, t);
  },
  gF = Ee(CR, {
    name: "MuiTooltip",
    slot: "Popper",
    overridesResolver: (e, t) => {
      const { ownerState: n } = e;
      return [
        t.popper,
        !n.disableInteractive && t.popperInteractive,
        n.arrow && t.popperArrow,
        !n.open && t.popperClose,
      ];
    },
  })(({ theme: e, ownerState: t, open: n }) =>
    T(
      { zIndex: (e.vars || e).zIndex.tooltip, pointerEvents: "none" },
      !t.disableInteractive && { pointerEvents: "auto" },
      !n && { pointerEvents: "none" },
      t.arrow && {
        [`&[data-popper-placement*="bottom"] .${io.arrow}`]: {
          top: 0,
          marginTop: "-0.71em",
          "&::before": { transformOrigin: "0 100%" },
        },
        [`&[data-popper-placement*="top"] .${io.arrow}`]: {
          bottom: 0,
          marginBottom: "-0.71em",
          "&::before": { transformOrigin: "100% 0" },
        },
        [`&[data-popper-placement*="right"] .${io.arrow}`]: T(
          {},
          t.isRtl
            ? { right: 0, marginRight: "-0.71em" }
            : { left: 0, marginLeft: "-0.71em" },
          {
            height: "1em",
            width: "0.71em",
            "&::before": { transformOrigin: "100% 100%" },
          }
        ),
        [`&[data-popper-placement*="left"] .${io.arrow}`]: T(
          {},
          t.isRtl
            ? { left: 0, marginLeft: "-0.71em" }
            : { right: 0, marginRight: "-0.71em" },
          {
            height: "1em",
            width: "0.71em",
            "&::before": { transformOrigin: "0 0" },
          }
        ),
      }
    )
  ),
  yF = Ee("div", {
    name: "MuiTooltip",
    slot: "Tooltip",
    overridesResolver: (e, t) => {
      const { ownerState: n } = e;
      return [
        t.tooltip,
        n.touch && t.touch,
        n.arrow && t.tooltipArrow,
        t[`tooltipPlacement${pe(n.placement.split("-")[0])}`],
      ];
    },
  })(({ theme: e, ownerState: t }) =>
    T(
      {
        backgroundColor: e.vars
          ? e.vars.palette.Tooltip.bg
          : Gt(e.palette.grey[700], 0.92),
        borderRadius: (e.vars || e).shape.borderRadius,
        color: (e.vars || e).palette.common.white,
        fontFamily: e.typography.fontFamily,
        padding: "4px 8px",
        fontSize: e.typography.pxToRem(11),
        maxWidth: 300,
        margin: 2,
        wordWrap: "break-word",
        fontWeight: e.typography.fontWeightMedium,
      },
      t.arrow && { position: "relative", margin: 0 },
      t.touch && {
        padding: "8px 16px",
        fontSize: e.typography.pxToRem(14),
        lineHeight: `${hF(16 / 14)}em`,
        fontWeight: e.typography.fontWeightRegular,
      },
      {
        [`.${io.popper}[data-popper-placement*="left"] &`]: T(
          { transformOrigin: "right center" },
          t.isRtl
            ? T({ marginLeft: "14px" }, t.touch && { marginLeft: "24px" })
            : T({ marginRight: "14px" }, t.touch && { marginRight: "24px" })
        ),
        [`.${io.popper}[data-popper-placement*="right"] &`]: T(
          { transformOrigin: "left center" },
          t.isRtl
            ? T({ marginRight: "14px" }, t.touch && { marginRight: "24px" })
            : T({ marginLeft: "14px" }, t.touch && { marginLeft: "24px" })
        ),
        [`.${io.popper}[data-popper-placement*="top"] &`]: T(
          { transformOrigin: "center bottom", marginBottom: "14px" },
          t.touch && { marginBottom: "24px" }
        ),
        [`.${io.popper}[data-popper-placement*="bottom"] &`]: T(
          { transformOrigin: "center top", marginTop: "14px" },
          t.touch && { marginTop: "24px" }
        ),
      }
    )
  ),
  bF = Ee("span", {
    name: "MuiTooltip",
    slot: "Arrow",
    overridesResolver: (e, t) => t.arrow,
  })(({ theme: e }) => ({
    overflow: "hidden",
    position: "absolute",
    width: "1em",
    height: "0.71em",
    boxSizing: "border-box",
    color: e.vars ? e.vars.palette.Tooltip.bg : Gt(e.palette.grey[700], 0.9),
    "&::before": {
      content: '""',
      margin: "auto",
      display: "block",
      width: "100%",
      height: "100%",
      backgroundColor: "currentColor",
      transform: "rotate(45deg)",
    },
  }));
let cu = !1,
  rp = null,
  Ga = { x: 0, y: 0 };
function du(e, t) {
  return (n) => {
    t && t(n), e(n);
  };
}
const xF = S.forwardRef(function (t, n) {
    var r, o, i, a, l, s, u, c, d, f, p, h, g, x, v, m, y, b, C;
    const R = ft({ props: t, name: "MuiTooltip" }),
      {
        arrow: E = !1,
        children: D,
        components: A = {},
        componentsProps: I = {},
        describeChild: M = !1,
        disableFocusListener: J = !1,
        disableHoverListener: V = !1,
        disableInteractive: j = !1,
        disableTouchListener: z = !1,
        enterDelay: q = 100,
        enterNextDelay: re = 0,
        enterTouchDelay: U = 700,
        followCursor: X = !1,
        id: W,
        leaveDelay: ee = 0,
        leaveTouchDelay: k = 1500,
        onClose: L,
        onOpen: O,
        open: H,
        placement: Y = "bottom",
        PopperComponent: se,
        PopperProps: ie = {},
        slotProps: te = {},
        slots: Se = {},
        title: ye,
        TransitionComponent: be = zv,
        TransitionProps: Re,
      } = R,
      Be = xe(R, vF),
      Ue = fs(),
      Oe = Ue.direction === "rtl",
      [ge, jt] = S.useState(),
      [wt, Ze] = S.useState(null),
      Ct = S.useRef(!1),
      It = j || X,
      zt = S.useRef(),
      ht = S.useRef(),
      Je = S.useRef(),
      Zn = S.useRef(),
      [Jn, Mn] = Hh({
        controlled: H,
        default: !1,
        name: "Tooltip",
        state: "open",
      });
    let he = Jn;
    const $ = Wh(W),
      B = S.useRef(),
      K = S.useCallback(() => {
        B.current !== void 0 &&
          ((document.body.style.WebkitUserSelect = B.current),
          (B.current = void 0)),
          clearTimeout(Zn.current);
      }, []);
    S.useEffect(
      () => () => {
        clearTimeout(zt.current),
          clearTimeout(ht.current),
          clearTimeout(Je.current),
          K();
      },
      [K]
    );
    const ue = (Pe) => {
        clearTimeout(rp), (cu = !0), Mn(!0), O && !he && O(Pe);
      },
      de = oo((Pe) => {
        clearTimeout(rp),
          (rp = setTimeout(() => {
            cu = !1;
          }, 800 + ee)),
          Mn(!1),
          L && he && L(Pe),
          clearTimeout(zt.current),
          (zt.current = setTimeout(() => {
            Ct.current = !1;
          }, Ue.transitions.duration.shortest));
      }),
      P = (Pe) => {
        (Ct.current && Pe.type !== "touchstart") ||
          (ge && ge.removeAttribute("title"),
          clearTimeout(ht.current),
          clearTimeout(Je.current),
          q || (cu && re)
            ? (ht.current = setTimeout(
                () => {
                  ue(Pe);
                },
                cu ? re : q
              ))
            : ue(Pe));
      },
      _ = (Pe) => {
        clearTimeout(ht.current),
          clearTimeout(Je.current),
          (Je.current = setTimeout(() => {
            de(Pe);
          }, ee));
      },
      { isFocusVisibleRef: N, onBlur: F, onFocus: G, ref: Q } = Gh(),
      [, ce] = S.useState(!1),
      ae = (Pe) => {
        F(Pe), N.current === !1 && (ce(!1), _(Pe));
      },
      le = (Pe) => {
        ge || jt(Pe.currentTarget), G(Pe), N.current === !0 && (ce(!0), P(Pe));
      },
      me = (Pe) => {
        Ct.current = !0;
        const xn = D.props;
        xn.onTouchStart && xn.onTouchStart(Pe);
      },
      Ie = P,
      pt = _,
      qe = (Pe) => {
        me(Pe),
          clearTimeout(Je.current),
          clearTimeout(zt.current),
          K(),
          (B.current = document.body.style.WebkitUserSelect),
          (document.body.style.WebkitUserSelect = "none"),
          (Zn.current = setTimeout(() => {
            (document.body.style.WebkitUserSelect = B.current), P(Pe);
          }, U));
      },
      rt = (Pe) => {
        D.props.onTouchEnd && D.props.onTouchEnd(Pe),
          K(),
          clearTimeout(Je.current),
          (Je.current = setTimeout(() => {
            de(Pe);
          }, k));
      };
    S.useEffect(() => {
      if (!he) return;
      function Pe(xn) {
        (xn.key === "Escape" || xn.key === "Esc") && de(xn);
      }
      return (
        document.addEventListener("keydown", Pe),
        () => {
          document.removeEventListener("keydown", Pe);
        }
      );
    }, [de, he]);
    const Rt = en(D.ref, Q, jt, n);
    !ye && ye !== 0 && (he = !1);
    const an = S.useRef(),
      pr = (Pe) => {
        const xn = D.props;
        xn.onMouseMove && xn.onMouseMove(Pe),
          (Ga = { x: Pe.clientX, y: Pe.clientY }),
          an.current && an.current.update();
      },
      qt = {},
      ln = typeof ye == "string";
    M
      ? ((qt.title = !he && ln && !V ? ye : null),
        (qt["aria-describedby"] = he ? $ : null))
      : ((qt["aria-label"] = ln ? ye : null),
        (qt["aria-labelledby"] = he && !ln ? $ : null));
    const De = T(
        {},
        qt,
        Be,
        D.props,
        {
          className: we(Be.className, D.props.className),
          onTouchStart: me,
          ref: Rt,
        },
        X ? { onMouseMove: pr } : {}
      ),
      Et = {};
    z || ((De.onTouchStart = qe), (De.onTouchEnd = rt)),
      V ||
        ((De.onMouseOver = du(Ie, De.onMouseOver)),
        (De.onMouseLeave = du(pt, De.onMouseLeave)),
        It || ((Et.onMouseOver = Ie), (Et.onMouseLeave = pt))),
      J ||
        ((De.onFocus = du(le, De.onFocus)),
        (De.onBlur = du(ae, De.onBlur)),
        It || ((Et.onFocus = le), (Et.onBlur = ae)));
    const Kr = S.useMemo(() => {
        var Pe;
        let xn = [
          {
            name: "arrow",
            enabled: !!wt,
            options: { element: wt, padding: 4 },
          },
        ];
        return (
          (Pe = ie.popperOptions) != null &&
            Pe.modifiers &&
            (xn = xn.concat(ie.popperOptions.modifiers)),
          T({}, ie.popperOptions, { modifiers: xn })
        );
      }, [wt, ie]),
      kr = T({}, R, {
        isRtl: Oe,
        arrow: E,
        disableInteractive: It,
        placement: Y,
        PopperComponentProp: se,
        touch: Ct.current,
      }),
      At = mF(kr),
      di = (r = (o = Se.popper) != null ? o : A.Popper) != null ? r : gF,
      Ta =
        (i =
          (a = (l = Se.transition) != null ? l : A.Transition) != null
            ? a
            : be) != null
          ? i
          : zv,
      $s = (s = (u = Se.tooltip) != null ? u : A.Tooltip) != null ? s : yF,
      Ng = (c = (d = Se.arrow) != null ? d : A.Arrow) != null ? c : bF,
      qE = nl(
        di,
        T({}, ie, (f = te.popper) != null ? f : I.popper, {
          className: we(
            At.popper,
            ie == null ? void 0 : ie.className,
            (p = (h = te.popper) != null ? h : I.popper) == null
              ? void 0
              : p.className
          ),
        }),
        kr
      ),
      YE = nl(
        Ta,
        T({}, Re, (g = te.transition) != null ? g : I.transition),
        kr
      ),
      XE = nl(
        $s,
        T({}, (x = te.tooltip) != null ? x : I.tooltip, {
          className: we(
            At.tooltip,
            (v = (m = te.tooltip) != null ? m : I.tooltip) == null
              ? void 0
              : v.className
          ),
        }),
        kr
      ),
      QE = nl(
        Ng,
        T({}, (y = te.arrow) != null ? y : I.arrow, {
          className: we(
            At.arrow,
            (b = (C = te.arrow) != null ? C : I.arrow) == null
              ? void 0
              : b.className
          ),
        }),
        kr
      );
    return w.jsxs(S.Fragment, {
      children: [
        S.cloneElement(D, De),
        w.jsx(
          di,
          T(
            {
              as: se ?? CR,
              placement: Y,
              anchorEl: X
                ? {
                    getBoundingClientRect: () => ({
                      top: Ga.y,
                      left: Ga.x,
                      right: Ga.x,
                      bottom: Ga.y,
                      width: 0,
                      height: 0,
                    }),
                  }
                : ge,
              popperRef: an,
              open: ge ? he : !1,
              id: $,
              transition: !0,
            },
            Et,
            qE,
            {
              popperOptions: Kr,
              children: ({ TransitionProps: Pe }) =>
                w.jsx(
                  Ta,
                  T({ timeout: Ue.transitions.duration.shorter }, Pe, YE, {
                    children: w.jsxs(
                      $s,
                      T({}, XE, {
                        children: [
                          ye,
                          E ? w.jsx(Ng, T({}, QE, { ref: Ze })) : null,
                        ],
                      })
                    ),
                  })
                ),
            }
          )
        ),
      ],
    });
  }),
  SF = xF;
var Ve = {};
/**
 * @license React
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Ym = Symbol.for("react.element"),
  Xm = Symbol.for("react.portal"),
  Gd = Symbol.for("react.fragment"),
  Kd = Symbol.for("react.strict_mode"),
  qd = Symbol.for("react.profiler"),
  Yd = Symbol.for("react.provider"),
  Xd = Symbol.for("react.context"),
  wF = Symbol.for("react.server_context"),
  Qd = Symbol.for("react.forward_ref"),
  Zd = Symbol.for("react.suspense"),
  Jd = Symbol.for("react.suspense_list"),
  ef = Symbol.for("react.memo"),
  tf = Symbol.for("react.lazy"),
  CF = Symbol.for("react.offscreen"),
  RR;
RR = Symbol.for("react.module.reference");
function Qn(e) {
  if (typeof e == "object" && e !== null) {
    var t = e.$$typeof;
    switch (t) {
      case Ym:
        switch (((e = e.type), e)) {
          case Gd:
          case qd:
          case Kd:
          case Zd:
          case Jd:
            return e;
          default:
            switch (((e = e && e.$$typeof), e)) {
              case wF:
              case Xd:
              case Qd:
              case tf:
              case ef:
              case Yd:
                return e;
              default:
                return t;
            }
        }
      case Xm:
        return t;
    }
  }
}
Ve.ContextConsumer = Xd;
Ve.ContextProvider = Yd;
Ve.Element = Ym;
Ve.ForwardRef = Qd;
Ve.Fragment = Gd;
Ve.Lazy = tf;
Ve.Memo = ef;
Ve.Portal = Xm;
Ve.Profiler = qd;
Ve.StrictMode = Kd;
Ve.Suspense = Zd;
Ve.SuspenseList = Jd;
Ve.isAsyncMode = function () {
  return !1;
};
Ve.isConcurrentMode = function () {
  return !1;
};
Ve.isContextConsumer = function (e) {
  return Qn(e) === Xd;
};
Ve.isContextProvider = function (e) {
  return Qn(e) === Yd;
};
Ve.isElement = function (e) {
  return typeof e == "object" && e !== null && e.$$typeof === Ym;
};
Ve.isForwardRef = function (e) {
  return Qn(e) === Qd;
};
Ve.isFragment = function (e) {
  return Qn(e) === Gd;
};
Ve.isLazy = function (e) {
  return Qn(e) === tf;
};
Ve.isMemo = function (e) {
  return Qn(e) === ef;
};
Ve.isPortal = function (e) {
  return Qn(e) === Xm;
};
Ve.isProfiler = function (e) {
  return Qn(e) === qd;
};
Ve.isStrictMode = function (e) {
  return Qn(e) === Kd;
};
Ve.isSuspense = function (e) {
  return Qn(e) === Zd;
};
Ve.isSuspenseList = function (e) {
  return Qn(e) === Jd;
};
Ve.isValidElementType = function (e) {
  return (
    typeof e == "string" ||
    typeof e == "function" ||
    e === Gd ||
    e === qd ||
    e === Kd ||
    e === Zd ||
    e === Jd ||
    e === CF ||
    (typeof e == "object" &&
      e !== null &&
      (e.$$typeof === tf ||
        e.$$typeof === ef ||
        e.$$typeof === Yd ||
        e.$$typeof === Xd ||
        e.$$typeof === Qd ||
        e.$$typeof === RR ||
        e.getModuleId !== void 0))
  );
};
Ve.typeOf = Qn;
const RF = S.createContext({}),
  Uv = RF;
function EF(e) {
  return lt("MuiList", e);
}
Ke("MuiList", ["root", "padding", "dense", "subheader"]);
const TF = [
    "children",
    "className",
    "component",
    "dense",
    "disablePadding",
    "subheader",
  ],
  _F = (e) => {
    const { classes: t, disablePadding: n, dense: r, subheader: o } = e;
    return dt(
      { root: ["root", !n && "padding", r && "dense", o && "subheader"] },
      EF,
      t
    );
  },
  PF = Ee("ul", {
    name: "MuiList",
    slot: "Root",
    overridesResolver: (e, t) => {
      const { ownerState: n } = e;
      return [
        t.root,
        !n.disablePadding && t.padding,
        n.dense && t.dense,
        n.subheader && t.subheader,
      ];
    },
  })(({ ownerState: e }) =>
    T(
      { listStyle: "none", margin: 0, padding: 0, position: "relative" },
      !e.disablePadding && { paddingTop: 8, paddingBottom: 8 },
      e.subheader && { paddingTop: 0 }
    )
  ),
  kF = S.forwardRef(function (t, n) {
    const r = ft({ props: t, name: "MuiList" }),
      {
        children: o,
        className: i,
        component: a = "ul",
        dense: l = !1,
        disablePadding: s = !1,
        subheader: u,
      } = r,
      c = xe(r, TF),
      d = S.useMemo(() => ({ dense: l }), [l]),
      f = T({}, r, { component: a, dense: l, disablePadding: s }),
      p = _F(f);
    return w.jsx(Uv.Provider, {
      value: d,
      children: w.jsxs(
        PF,
        T({ as: a, className: we(p.root, i), ref: n, ownerState: f }, c, {
          children: [u, o],
        })
      ),
    });
  }),
  DF = kF,
  IF = [
    "actions",
    "autoFocus",
    "autoFocusItem",
    "children",
    "className",
    "disabledItemsFocusable",
    "disableListWrap",
    "onKeyDown",
    "variant",
  ];
function op(e, t, n) {
  return e === t
    ? e.firstChild
    : t && t.nextElementSibling
    ? t.nextElementSibling
    : n
    ? null
    : e.firstChild;
}
function C1(e, t, n) {
  return e === t
    ? n
      ? e.firstChild
      : e.lastChild
    : t && t.previousElementSibling
    ? t.previousElementSibling
    : n
    ? null
    : e.lastChild;
}
function ER(e, t) {
  if (t === void 0) return !0;
  let n = e.innerText;
  return (
    n === void 0 && (n = e.textContent),
    (n = n.trim().toLowerCase()),
    n.length === 0
      ? !1
      : t.repeating
      ? n[0] === t.keys[0]
      : n.indexOf(t.keys.join("")) === 0
  );
}
function Ka(e, t, n, r, o, i) {
  let a = !1,
    l = o(e, t, t ? n : !1);
  for (; l; ) {
    if (l === e.firstChild) {
      if (a) return !1;
      a = !0;
    }
    const s = r ? !1 : l.disabled || l.getAttribute("aria-disabled") === "true";
    if (!l.hasAttribute("tabindex") || !ER(l, i) || s) l = o(e, l, n);
    else return l.focus(), !0;
  }
  return !1;
}
const AF = S.forwardRef(function (t, n) {
    const {
        actions: r,
        autoFocus: o = !1,
        autoFocusItem: i = !1,
        children: a,
        className: l,
        disabledItemsFocusable: s = !1,
        disableListWrap: u = !1,
        onKeyDown: c,
        variant: d = "selectedMenu",
      } = t,
      f = xe(t, IF),
      p = S.useRef(null),
      h = S.useRef({
        keys: [],
        repeating: !0,
        previousKeyMatched: !0,
        lastTime: null,
      });
    wo(() => {
      o && p.current.focus();
    }, [o]),
      S.useImperativeHandle(
        r,
        () => ({
          adjustStyleForScrollbar: (y, b) => {
            const C = !p.current.style.width;
            if (y.clientHeight < p.current.clientHeight && C) {
              const R = `${MS(Jt(y))}px`;
              (p.current.style[
                b.direction === "rtl" ? "paddingLeft" : "paddingRight"
              ] = R),
                (p.current.style.width = `calc(100% + ${R})`);
            }
            return p.current;
          },
        }),
        []
      );
    const g = (y) => {
        const b = p.current,
          C = y.key,
          R = Jt(b).activeElement;
        if (C === "ArrowDown") y.preventDefault(), Ka(b, R, u, s, op);
        else if (C === "ArrowUp") y.preventDefault(), Ka(b, R, u, s, C1);
        else if (C === "Home") y.preventDefault(), Ka(b, null, u, s, op);
        else if (C === "End") y.preventDefault(), Ka(b, null, u, s, C1);
        else if (C.length === 1) {
          const E = h.current,
            D = C.toLowerCase(),
            A = performance.now();
          E.keys.length > 0 &&
            (A - E.lastTime > 500
              ? ((E.keys = []), (E.repeating = !0), (E.previousKeyMatched = !0))
              : E.repeating && D !== E.keys[0] && (E.repeating = !1)),
            (E.lastTime = A),
            E.keys.push(D);
          const I = R && !E.repeating && ER(R, E);
          E.previousKeyMatched && (I || Ka(b, R, !1, s, op, E))
            ? y.preventDefault()
            : (E.previousKeyMatched = !1);
        }
        c && c(y);
      },
      x = en(p, n);
    let v = -1;
    S.Children.forEach(a, (y, b) => {
      S.isValidElement(y) &&
        (y.props.disabled ||
          (((d === "selectedMenu" && y.props.selected) || v === -1) && (v = b)),
        v === b &&
          (y.props.disabled ||
            y.props.muiSkipListHighlight ||
            y.type.muiSkipListHighlight) &&
          ((v += 1), v >= a.length && (v = -1)));
    });
    const m = S.Children.map(a, (y, b) => {
      if (b === v) {
        const C = {};
        return (
          i && (C.autoFocus = !0),
          y.props.tabIndex === void 0 &&
            d === "selectedMenu" &&
            (C.tabIndex = 0),
          S.cloneElement(y, C)
        );
      }
      return y;
    });
    return w.jsx(
      DF,
      T(
        {
          role: "menu",
          ref: x,
          className: l,
          onKeyDown: g,
          tabIndex: o ? 0 : -1,
        },
        f,
        { children: m }
      )
    );
  }),
  NF = AF;
function OF(e) {
  return lt("MuiPopover", e);
}
Ke("MuiPopover", ["root", "paper"]);
const MF = ["onEntering"],
  $F = [
    "action",
    "anchorEl",
    "anchorOrigin",
    "anchorPosition",
    "anchorReference",
    "children",
    "className",
    "container",
    "elevation",
    "marginThreshold",
    "open",
    "PaperProps",
    "transformOrigin",
    "TransitionComponent",
    "transitionDuration",
    "TransitionProps",
  ];
function R1(e, t) {
  let n = 0;
  return (
    typeof t == "number"
      ? (n = t)
      : t === "center"
      ? (n = e.height / 2)
      : t === "bottom" && (n = e.height),
    n
  );
}
function E1(e, t) {
  let n = 0;
  return (
    typeof t == "number"
      ? (n = t)
      : t === "center"
      ? (n = e.width / 2)
      : t === "right" && (n = e.width),
    n
  );
}
function T1(e) {
  return [e.horizontal, e.vertical]
    .map((t) => (typeof t == "number" ? `${t}px` : t))
    .join(" ");
}
function ip(e) {
  return typeof e == "function" ? e() : e;
}
const LF = (e) => {
    const { classes: t } = e;
    return dt({ root: ["root"], paper: ["paper"] }, OF, t);
  },
  BF = Ee(_w, {
    name: "MuiPopover",
    slot: "Root",
    overridesResolver: (e, t) => t.root,
  })({}),
  FF = Ee(hs, {
    name: "MuiPopover",
    slot: "Paper",
    overridesResolver: (e, t) => t.paper,
  })({
    position: "absolute",
    overflowY: "auto",
    overflowX: "hidden",
    minWidth: 16,
    minHeight: 16,
    maxWidth: "calc(100% - 32px)",
    maxHeight: "calc(100% - 32px)",
    outline: 0,
  }),
  jF = S.forwardRef(function (t, n) {
    const r = ft({ props: t, name: "MuiPopover" }),
      {
        action: o,
        anchorEl: i,
        anchorOrigin: a = { vertical: "top", horizontal: "left" },
        anchorPosition: l,
        anchorReference: s = "anchorEl",
        children: u,
        className: c,
        container: d,
        elevation: f = 8,
        marginThreshold: p = 16,
        open: h,
        PaperProps: g = {},
        transformOrigin: x = { vertical: "top", horizontal: "left" },
        TransitionComponent: v = zv,
        transitionDuration: m = "auto",
        TransitionProps: { onEntering: y } = {},
      } = r,
      b = xe(r.TransitionProps, MF),
      C = xe(r, $F),
      R = S.useRef(),
      E = en(R, g.ref),
      D = T({}, r, {
        anchorOrigin: a,
        anchorReference: s,
        elevation: f,
        marginThreshold: p,
        PaperProps: g,
        transformOrigin: x,
        TransitionComponent: v,
        transitionDuration: m,
        TransitionProps: b,
      }),
      A = LF(D),
      I = S.useCallback(() => {
        if (s === "anchorPosition") return l;
        const W = ip(i),
          k = (
            W && W.nodeType === 1 ? W : Jt(R.current).body
          ).getBoundingClientRect();
        return {
          top: k.top + R1(k, a.vertical),
          left: k.left + E1(k, a.horizontal),
        };
      }, [i, a.horizontal, a.vertical, l, s]),
      M = S.useCallback(
        (W) => ({
          vertical: R1(W, x.vertical),
          horizontal: E1(W, x.horizontal),
        }),
        [x.horizontal, x.vertical]
      ),
      J = S.useCallback(
        (W) => {
          const ee = { width: W.offsetWidth, height: W.offsetHeight },
            k = M(ee);
          if (s === "none")
            return { top: null, left: null, transformOrigin: T1(k) };
          const L = I();
          let O = L.top - k.vertical,
            H = L.left - k.horizontal;
          const Y = O + ee.height,
            se = H + ee.width,
            ie = na(ip(i)),
            te = ie.innerHeight - p,
            Se = ie.innerWidth - p;
          if (O < p) {
            const ye = O - p;
            (O -= ye), (k.vertical += ye);
          } else if (Y > te) {
            const ye = Y - te;
            (O -= ye), (k.vertical += ye);
          }
          if (H < p) {
            const ye = H - p;
            (H -= ye), (k.horizontal += ye);
          } else if (se > Se) {
            const ye = se - Se;
            (H -= ye), (k.horizontal += ye);
          }
          return {
            top: `${Math.round(O)}px`,
            left: `${Math.round(H)}px`,
            transformOrigin: T1(k),
          };
        },
        [i, s, I, M, p]
      ),
      [V, j] = S.useState(h),
      z = S.useCallback(() => {
        const W = R.current;
        if (!W) return;
        const ee = J(W);
        ee.top !== null && (W.style.top = ee.top),
          ee.left !== null && (W.style.left = ee.left),
          (W.style.transformOrigin = ee.transformOrigin),
          j(!0);
      }, [J]),
      q = (W, ee) => {
        y && y(W, ee), z();
      },
      re = () => {
        j(!1);
      };
    S.useEffect(() => {
      h && z();
    }),
      S.useImperativeHandle(
        o,
        () =>
          h
            ? {
                updatePosition: () => {
                  z();
                },
              }
            : null,
        [h, z]
      ),
      S.useEffect(() => {
        if (!h) return;
        const W = OS(() => {
            z();
          }),
          ee = na(i);
        return (
          ee.addEventListener("resize", W),
          () => {
            W.clear(), ee.removeEventListener("resize", W);
          }
        );
      }, [i, h, z]);
    let U = m;
    m === "auto" && !v.muiSupportAuto && (U = void 0);
    const X = d || (i ? Jt(ip(i)).body : void 0);
    return w.jsx(
      BF,
      T(
        {
          BackdropProps: { invisible: !0 },
          className: we(A.root, c),
          container: X,
          open: h,
          ref: n,
          ownerState: D,
        },
        C,
        {
          children: w.jsx(
            v,
            T(
              { appear: !0, in: h, onEntering: q, onExited: re, timeout: U },
              b,
              {
                children: w.jsx(
                  FF,
                  T(
                    { elevation: f },
                    g,
                    { ref: E, className: we(A.paper, g.className) },
                    V ? void 0 : { style: T({}, g.style, { opacity: 0 }) },
                    { ownerState: D, children: u }
                  )
                ),
              }
            )
          ),
        }
      )
    );
  }),
  TR = jF;
function zF(e) {
  return lt("MuiMenu", e);
}
Ke("MuiMenu", ["root", "paper", "list"]);
const UF = ["onEntering"],
  VF = [
    "autoFocus",
    "children",
    "disableAutoFocusItem",
    "MenuListProps",
    "onClose",
    "open",
    "PaperProps",
    "PopoverClasses",
    "transitionDuration",
    "TransitionProps",
    "variant",
  ],
  WF = { vertical: "top", horizontal: "right" },
  HF = { vertical: "top", horizontal: "left" },
  GF = (e) => {
    const { classes: t } = e;
    return dt({ root: ["root"], paper: ["paper"], list: ["list"] }, zF, t);
  },
  KF = Ee(TR, {
    shouldForwardProp: (e) => hd(e) || e === "classes",
    name: "MuiMenu",
    slot: "Root",
    overridesResolver: (e, t) => t.root,
  })({}),
  qF = Ee(hs, {
    name: "MuiMenu",
    slot: "Paper",
    overridesResolver: (e, t) => t.paper,
  })({ maxHeight: "calc(100% - 96px)", WebkitOverflowScrolling: "touch" }),
  YF = Ee(NF, {
    name: "MuiMenu",
    slot: "List",
    overridesResolver: (e, t) => t.list,
  })({ outline: 0 }),
  XF = S.forwardRef(function (t, n) {
    const r = ft({ props: t, name: "MuiMenu" }),
      {
        autoFocus: o = !0,
        children: i,
        disableAutoFocusItem: a = !1,
        MenuListProps: l = {},
        onClose: s,
        open: u,
        PaperProps: c = {},
        PopoverClasses: d,
        transitionDuration: f = "auto",
        TransitionProps: { onEntering: p } = {},
        variant: h = "selectedMenu",
      } = r,
      g = xe(r.TransitionProps, UF),
      x = xe(r, VF),
      v = fs(),
      m = v.direction === "rtl",
      y = T({}, r, {
        autoFocus: o,
        disableAutoFocusItem: a,
        MenuListProps: l,
        onEntering: p,
        PaperProps: c,
        transitionDuration: f,
        TransitionProps: g,
        variant: h,
      }),
      b = GF(y),
      C = o && !a && u,
      R = S.useRef(null),
      E = (I, M) => {
        R.current && R.current.adjustStyleForScrollbar(I, v), p && p(I, M);
      },
      D = (I) => {
        I.key === "Tab" && (I.preventDefault(), s && s(I, "tabKeyDown"));
      };
    let A = -1;
    return (
      S.Children.map(i, (I, M) => {
        S.isValidElement(I) &&
          (I.props.disabled ||
            (((h === "selectedMenu" && I.props.selected) || A === -1) &&
              (A = M)));
      }),
      w.jsx(
        KF,
        T(
          {
            onClose: s,
            anchorOrigin: {
              vertical: "bottom",
              horizontal: m ? "right" : "left",
            },
            transformOrigin: m ? WF : HF,
            PaperProps: T({ as: qF }, c, {
              classes: T({}, c.classes, { root: b.paper }),
            }),
            className: b.root,
            open: u,
            ref: n,
            transitionDuration: f,
            TransitionProps: T({ onEntering: E }, g),
            ownerState: y,
          },
          x,
          {
            classes: d,
            children: w.jsx(
              YF,
              T(
                {
                  onKeyDown: D,
                  actions: R,
                  autoFocus: o && (A === -1 || a),
                  autoFocusItem: C,
                  variant: h,
                },
                l,
                { className: we(b.list, l.className), children: i }
              )
            ),
          }
        )
      )
    );
  }),
  _R = XF,
  QF = Ke("MuiDivider", [
    "root",
    "absolute",
    "fullWidth",
    "inset",
    "middle",
    "flexItem",
    "light",
    "vertical",
    "withChildren",
    "withChildrenVertical",
    "textAlignRight",
    "textAlignLeft",
    "wrapper",
    "wrapperVertical",
  ]),
  _1 = QF,
  ZF = Ke("MuiListItemIcon", ["root", "alignItemsFlexStart"]),
  P1 = ZF,
  JF = Ke("MuiListItemText", [
    "root",
    "multiline",
    "dense",
    "inset",
    "primary",
    "secondary",
  ]),
  k1 = JF;
function ej(e) {
  return lt("MuiMenuItem", e);
}
const tj = Ke("MuiMenuItem", [
    "root",
    "focusVisible",
    "dense",
    "disabled",
    "divider",
    "gutters",
    "selected",
  ]),
  qa = tj,
  nj = [
    "autoFocus",
    "component",
    "dense",
    "divider",
    "disableGutters",
    "focusVisibleClassName",
    "role",
    "tabIndex",
    "className",
  ],
  rj = (e, t) => {
    const { ownerState: n } = e;
    return [
      t.root,
      n.dense && t.dense,
      n.divider && t.divider,
      !n.disableGutters && t.gutters,
    ];
  },
  oj = (e) => {
    const {
        disabled: t,
        dense: n,
        divider: r,
        disableGutters: o,
        selected: i,
        classes: a,
      } = e,
      s = dt(
        {
          root: [
            "root",
            n && "dense",
            t && "disabled",
            !o && "gutters",
            r && "divider",
            i && "selected",
          ],
        },
        ej,
        a
      );
    return T({}, a, s);
  },
  ij = Ee(bd, {
    shouldForwardProp: (e) => hd(e) || e === "classes",
    name: "MuiMenuItem",
    slot: "Root",
    overridesResolver: rj,
  })(({ theme: e, ownerState: t }) =>
    T(
      {},
      e.typography.body1,
      {
        display: "flex",
        justifyContent: "flex-start",
        alignItems: "center",
        position: "relative",
        textDecoration: "none",
        minHeight: 48,
        paddingTop: 6,
        paddingBottom: 6,
        boxSizing: "border-box",
        whiteSpace: "nowrap",
      },
      !t.disableGutters && { paddingLeft: 16, paddingRight: 16 },
      t.divider && {
        borderBottom: `1px solid ${(e.vars || e).palette.divider}`,
        backgroundClip: "padding-box",
      },
      {
        "&:hover": {
          textDecoration: "none",
          backgroundColor: (e.vars || e).palette.action.hover,
          "@media (hover: none)": { backgroundColor: "transparent" },
        },
        [`&.${qa.selected}`]: {
          backgroundColor: e.vars
            ? `rgba(${e.vars.palette.primary.mainChannel} / ${e.vars.palette.action.selectedOpacity})`
            : Gt(e.palette.primary.main, e.palette.action.selectedOpacity),
          [`&.${qa.focusVisible}`]: {
            backgroundColor: e.vars
              ? `rgba(${e.vars.palette.primary.mainChannel} / calc(${e.vars.palette.action.selectedOpacity} + ${e.vars.palette.action.focusOpacity}))`
              : Gt(
                  e.palette.primary.main,
                  e.palette.action.selectedOpacity +
                    e.palette.action.focusOpacity
                ),
          },
        },
        [`&.${qa.selected}:hover`]: {
          backgroundColor: e.vars
            ? `rgba(${e.vars.palette.primary.mainChannel} / calc(${e.vars.palette.action.selectedOpacity} + ${e.vars.palette.action.hoverOpacity}))`
            : Gt(
                e.palette.primary.main,
                e.palette.action.selectedOpacity + e.palette.action.hoverOpacity
              ),
          "@media (hover: none)": {
            backgroundColor: e.vars
              ? `rgba(${e.vars.palette.primary.mainChannel} / ${e.vars.palette.action.selectedOpacity})`
              : Gt(e.palette.primary.main, e.palette.action.selectedOpacity),
          },
        },
        [`&.${qa.focusVisible}`]: {
          backgroundColor: (e.vars || e).palette.action.focus,
        },
        [`&.${qa.disabled}`]: {
          opacity: (e.vars || e).palette.action.disabledOpacity,
        },
        [`& + .${_1.root}`]: {
          marginTop: e.spacing(1),
          marginBottom: e.spacing(1),
        },
        [`& + .${_1.inset}`]: { marginLeft: 52 },
        [`& .${k1.root}`]: { marginTop: 0, marginBottom: 0 },
        [`& .${k1.inset}`]: { paddingLeft: 36 },
        [`& .${P1.root}`]: { minWidth: 36 },
      },
      !t.dense && { [e.breakpoints.up("sm")]: { minHeight: "auto" } },
      t.dense &&
        T(
          { minHeight: 32, paddingTop: 4, paddingBottom: 4 },
          e.typography.body2,
          { [`& .${P1.root} svg`]: { fontSize: "1.25rem" } }
        )
    )
  ),
  aj = S.forwardRef(function (t, n) {
    const r = ft({ props: t, name: "MuiMenuItem" }),
      {
        autoFocus: o = !1,
        component: i = "li",
        dense: a = !1,
        divider: l = !1,
        disableGutters: s = !1,
        focusVisibleClassName: u,
        role: c = "menuitem",
        tabIndex: d,
        className: f,
      } = r,
      p = xe(r, nj),
      h = S.useContext(Uv),
      g = S.useMemo(
        () => ({ dense: a || h.dense || !1, disableGutters: s }),
        [h.dense, a, s]
      ),
      x = S.useRef(null);
    wo(() => {
      o && x.current && x.current.focus();
    }, [o]);
    const v = T({}, r, { dense: g.dense, divider: l, disableGutters: s }),
      m = oj(r),
      y = en(x, n);
    let b;
    return (
      r.disabled || (b = d !== void 0 ? d : -1),
      w.jsx(Uv.Provider, {
        value: g,
        children: w.jsx(
          ij,
          T(
            {
              ref: y,
              role: c,
              tabIndex: b,
              component: i,
              focusVisibleClassName: we(m.focusVisible, u),
              className: we(m.root, f),
            },
            p,
            { ownerState: v, classes: m }
          )
        ),
      })
    );
  }),
  il = aj;
function lj() {
  const [e, t] = oe.useState(null),
    n = !!e,
    [r, o] = Xn(dr);
  function i() {
    o(!r);
  }
  const a = (s) => {
      t(s.currentTarget);
    },
    l = () => {
      t(null);
    };
  return w.jsx(uu, {
    sx: { flexGrow: 1 },
    children: w.jsx(I8, {
      position: "static",
      sx: { padding: 0 },
      children: w.jsxs(F8, {
        sx: {
          backgroundColor: "#424242",
          padding: 0,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          minHeight: { xs: "1rem", sm: "1rem" },
        },
        children: [
          w.jsx(Fo, {
            size: "large",
            edge: "start",
            color: "inherit",
            "aria-label": "open drawer",
            children: w.jsx(GB, {}),
          }),
          w.jsxs(Sm, {
            variant: "h6",
            noWrap: !0,
            component: "div",
            sx: { display: { xs: "none", sm: "block" }, fontWeight: "bold" },
            children: [
              w.jsx(aF, {
                style: { marginRight: "0.5rem", marginTop: "0.5rem" },
              }),
              "Trello",
            ],
          }),
          w.jsx(uu, {
            sx: {
              flexGrow: 1,
              paddingLeft: "1rem",
              display: "flex",
              alignItems: "center",
            },
          }),
          w.jsxs(uu, {
            sx: { display: { xs: "none", md: "flex" } },
            children: [
              w.jsx(Fo, {
                size: "large",
                "aria-label": "show 17 new notifications",
                color: "inherit",
                href: "https://trello.com/",
                target: "_blank",
                children: w.jsx(w1, {
                  badgeContent: 0,
                  color: "error",
                  children: w.jsx(SR, {}),
                }),
              }),
              w.jsx(SF, {
                title: r ? "Light mode" : "Dark mode",
                children: w.jsx(Fo, {
                  "aria-label": "show 17 new notifications",
                  color: "inherit",
                  onClick: i,
                  children: w.jsx(w1, {
                    badgeContent: 0,
                    color: "error",
                    children: w.jsx(iF, { size: 20 }),
                  }),
                }),
              }),
              w.jsx(Fo, {
                onClick: a,
                size: "large",
                edge: "end",
                "aria-label": "account of current user",
                "aria-haspopup": "true",
                color: "inherit",
                children: w.jsx(bR, {}),
              }),
              w.jsxs(_R, {
                id: "basic-menu",
                anchorEl: e,
                open: n,
                onClose: l,
                MenuListProps: { "aria-labelledby": "basic-button" },
                children: [
                  w.jsx(il, { onClick: l, children: "Riya singh" }),
                  w.jsx(il, { onClick: l, children: "suraj sahoo" }),
                  w.jsx(il, { onClick: l, children: "Ashish Mahale" }),
                  w.jsx(il, { onClick: l, children: "Anshul Mishra" }),
                ],
              }),
            ],
          }),
          w.jsx(uu, {
            sx: { display: { xs: "flex", md: "none" } },
            children: w.jsx(Fo, {
              size: "large",
              "aria-label": "show more",
              "aria-haspopup": "true",
              color: "inherit",
              children: w.jsx(xR, {}),
            }),
          }),
        ],
      }),
    }),
  });
}
const sj = "_card_16sm5_3",
  uj = "_dark_16sm5_33",
  cj = "_cardHeading_16sm5_45",
  dj = "_iconSpan_16sm5_87",
  fj = "_editableDiv_16sm5_113",
  xi = { card: sj, dark: uj, cardHeading: cj, iconSpan: dj, editableDiv: fj };
var Qm = {},
  pj = rn;
Object.defineProperty(Qm, "__esModule", { value: !0 });
var Zm = (Qm.default = void 0),
  vj = pj(on()),
  hj = w,
  mj = (0, vj.default)(
    (0, hj.jsx)("path", {
      d: "M6 10c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm12 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm-6 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z",
    }),
    "MoreHoriz"
  );
Zm = Qm.default = mj;
const gj = "_container_c65c0_1",
  yj = "_buttonDiv_c65c0_19",
  bj = "_dark_c65c0_51",
  xj = "_moreIcons_c65c0_59",
  Sj = "_inputBtn_c65c0_97",
  wj = "_btnDiv_c65c0_115",
  Cj = "_btnAdd_c65c0_165",
  Rj = "_closeBtn_c65c0_207",
  hr = {
    container: gj,
    buttonDiv: yj,
    dark: bj,
    moreIcons: xj,
    inputBtn: Sj,
    btnDiv: wj,
    btnAdd: Cj,
    closeBtn: Rj,
  };
var Jm = {},
  Ej = rn;
Object.defineProperty(Jm, "__esModule", { value: !0 });
var PR = (Jm.default = void 0),
  Tj = Ej(on()),
  _j = w,
  Pj = (0, Tj.default)(
    (0, _j.jsx)("path", { d: "M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z" }),
    "Add"
  );
PR = Jm.default = Pj;
var eg = {},
  kj = rn;
Object.defineProperty(eg, "__esModule", { value: !0 });
var kR = (eg.default = void 0),
  Dj = kj(on()),
  Ij = w,
  Aj = (0, Dj.default)(
    (0, Ij.jsx)("path", {
      d: "M20 4H4c-1.11 0-1.99.89-1.99 2L2 18c0 1.11.89 2 2 2h10v-2H4v-6h18V6c0-1.11-.89-2-2-2zm0 4H4V6h16v2zm4 9v2h-3v3h-2v-3h-3v-2h3v-3h2v3h3z",
    }),
    "AddCard"
  );
kR = eg.default = Aj;
function Nj({
  name: e,
  setName: t,
  addList: n,
  errorText: r,
  setErrorText: o,
}) {
  const i = Tr(dr),
    [a, l] = S.useState(!0),
    s = () => {
      l(!a);
    },
    u = () => {
      l(!a), o("");
    },
    c = a
      ? w.jsxs("div", {
          className: hr.container,
          children: [
            w.jsxs("p", {
              className: `${hr.buttonDiv} ${i ? hr.dark : null}`,
              onClick: s,
              children: [w.jsx(PR, {}), "Add a Card"],
            }),
            w.jsx("span", {
              className: `${hr.moreIcons} ${i ? hr.dark : null}`,
              children: w.jsx(kR, {}),
            }),
          ],
        })
      : w.jsxs("div", {
          className: `${hr.btnDiv} ${i ? hr.dark : null}`,
          children: [
            w.jsx("input", {
              type: "text",
              placeholder: "Enter a title for this card....",
              onChange: (d) => t(d.target.value),
              value: e,
            }),
            r && w.jsx("span", { style: { color: "red" }, children: r }),
            w.jsxs("div", {
              className: hr.inputBtn,
              children: [
                w.jsxs("div", {
                  className: hr.btnAdd,
                  children: [
                    w.jsx("button", { onClick: n, children: "Add Card" }),
                    w.jsx("span", {
                      onClick: u,
                      children: w.jsx(xd, { className: hr.closeBtn }),
                    }),
                  ],
                }),
                w.jsx(Zm, {}),
              ],
            }),
          ],
        });
  return w.jsx("div", { children: c });
}
const Oj = "_task_box_1pvqp_3",
  Mj = "_dark_1pvqp_37",
  $j = "_task_1pvqp_3",
  Lj = "_edit_1pvqp_67",
  Bj = "_darkEdit_1pvqp_91",
  Fj = "_hiddenEdit_1pvqp_99",
  jj = "_deleteBtn_1pvqp_107",
  Io = {
    task_box: Oj,
    dark: Mj,
    task: $j,
    edit: Lj,
    darkEdit: Bj,
    hiddenEdit: Fj,
    deleteBtn: jj,
  };
var tg = {},
  zj = rn;
Object.defineProperty(tg, "__esModule", { value: !0 });
var DR = (tg.default = void 0),
  Uj = zj(on()),
  Vj = w,
  Wj = (0, Uj.default)(
    (0, Vj.jsx)("path", {
      d: "M3 21h3.75L17.81 9.94l-3.75-3.75L3 17.25V21zm2-2.92 9.06-9.06.92.92L5.92 19H5v-.92zM18.37 3.29a.9959.9959 0 0 0-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83c.39-.39.39-1.02 0-1.41l-2.34-2.34z",
    }),
    "ModeEditOutlined"
  );
DR = tg.default = Wj;
function Hj({ task: e, mainId: t }) {
  const [n, r] = Xn(Ud),
    o = Tr(dr),
    [i, a] = Xn(ui),
    { title: l, id: s } = e,
    [u, c] = S.useState(!1),
    d = mR(),
    f = () => {
      r({ mainId: t, id: s }), d(`/details/${s}`);
    },
    p = () => {
      const h = i.map((g) => {
        if (g.id == t) {
          const x = { ...g },
            m = [...x.task].filter((y) => y.id !== s);
          return (x.task = [...m]), x;
        } else return g;
      });
      a(h), localStorage.setItem("data", JSON.stringify(h));
    };
  return w.jsxs("div", {
    className: `${Io.task_box} ${o ? Io.dark : null}`,
    onMouseOver: () => c(!0),
    onMouseOut: () => c(!1),
    children: [
      w.jsx("span", { className: Io.task, children: l }),
      w.jsxs("div", {
        className: u ? `${Io.edit} ${o ? Io.darkEdit : ""}` : Io.hiddenEdit,
        children: [
          w.jsx(DR, { sx: o ? { color: "white" } : null, onClick: f }),
          w.jsx("button", {
            className: Io.deleteBtn,
            children: w.jsx(YB, { color: "red", onClick: p }),
          }),
        ],
      }),
    ],
  });
}
function Zl(e) {
  return (
    (Zl =
      typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
        ? function (t) {
            return typeof t;
          }
        : function (t) {
            return t &&
              typeof Symbol == "function" &&
              t.constructor === Symbol &&
              t !== Symbol.prototype
              ? "symbol"
              : typeof t;
          }),
    Zl(e)
  );
}
function Gj(e, t) {
  if (Zl(e) !== "object" || e === null) return e;
  var n = e[Symbol.toPrimitive];
  if (n !== void 0) {
    var r = n.call(e, t || "default");
    if (Zl(r) !== "object") return r;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function Kj(e) {
  var t = Gj(e, "string");
  return Zl(t) === "symbol" ? t : String(t);
}
function qj(e, t, n) {
  return (
    (t = Kj(t)),
    t in e
      ? Object.defineProperty(e, t, {
          value: n,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (e[t] = n),
    e
  );
}
function D1(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t &&
      (r = r.filter(function (o) {
        return Object.getOwnPropertyDescriptor(e, o).enumerable;
      })),
      n.push.apply(n, r);
  }
  return n;
}
function I1(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? arguments[t] : {};
    t % 2
      ? D1(Object(n), !0).forEach(function (r) {
          qj(e, r, n[r]);
        })
      : Object.getOwnPropertyDescriptors
      ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
      : D1(Object(n)).forEach(function (r) {
          Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(n, r));
        });
  }
  return e;
}
function un(e) {
  return (
    "Minified Redux error #" +
    e +
    "; visit https://redux.js.org/Errors?code=" +
    e +
    " for the full message or use the non-minified dev environment for full errors. "
  );
}
var A1 = (function () {
    return (typeof Symbol == "function" && Symbol.observable) || "@@observable";
  })(),
  ap = function () {
    return Math.random().toString(36).substring(7).split("").join(".");
  },
  N1 = {
    INIT: "@@redux/INIT" + ap(),
    REPLACE: "@@redux/REPLACE" + ap(),
    PROBE_UNKNOWN_ACTION: function () {
      return "@@redux/PROBE_UNKNOWN_ACTION" + ap();
    },
  };
function Yj(e) {
  if (typeof e != "object" || e === null) return !1;
  for (var t = e; Object.getPrototypeOf(t) !== null; )
    t = Object.getPrototypeOf(t);
  return Object.getPrototypeOf(e) === t;
}
function IR(e, t, n) {
  var r;
  if (
    (typeof t == "function" && typeof n == "function") ||
    (typeof n == "function" && typeof arguments[3] == "function")
  )
    throw new Error(un(0));
  if (
    (typeof t == "function" && typeof n > "u" && ((n = t), (t = void 0)),
    typeof n < "u")
  ) {
    if (typeof n != "function") throw new Error(un(1));
    return n(IR)(e, t);
  }
  if (typeof e != "function") throw new Error(un(2));
  var o = e,
    i = t,
    a = [],
    l = a,
    s = !1;
  function u() {
    l === a && (l = a.slice());
  }
  function c() {
    if (s) throw new Error(un(3));
    return i;
  }
  function d(g) {
    if (typeof g != "function") throw new Error(un(4));
    if (s) throw new Error(un(5));
    var x = !0;
    return (
      u(),
      l.push(g),
      function () {
        if (x) {
          if (s) throw new Error(un(6));
          (x = !1), u();
          var m = l.indexOf(g);
          l.splice(m, 1), (a = null);
        }
      }
    );
  }
  function f(g) {
    if (!Yj(g)) throw new Error(un(7));
    if (typeof g.type > "u") throw new Error(un(8));
    if (s) throw new Error(un(9));
    try {
      (s = !0), (i = o(i, g));
    } finally {
      s = !1;
    }
    for (var x = (a = l), v = 0; v < x.length; v++) {
      var m = x[v];
      m();
    }
    return g;
  }
  function p(g) {
    if (typeof g != "function") throw new Error(un(10));
    (o = g), f({ type: N1.REPLACE });
  }
  function h() {
    var g,
      x = d;
    return (
      (g = {
        subscribe: function (m) {
          if (typeof m != "object" || m === null) throw new Error(un(11));
          function y() {
            m.next && m.next(c());
          }
          y();
          var b = x(y);
          return { unsubscribe: b };
        },
      }),
      (g[A1] = function () {
        return this;
      }),
      g
    );
  }
  return (
    f({ type: N1.INIT }),
    (r = { dispatch: f, subscribe: d, getState: c, replaceReducer: p }),
    (r[A1] = h),
    r
  );
}
function O1(e, t) {
  return function () {
    return t(e.apply(this, arguments));
  };
}
function M1(e, t) {
  if (typeof e == "function") return O1(e, t);
  if (typeof e != "object" || e === null) throw new Error(un(16));
  var n = {};
  for (var r in e) {
    var o = e[r];
    typeof o == "function" && (n[r] = O1(o, t));
  }
  return n;
}
function AR() {
  for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
    t[n] = arguments[n];
  return t.length === 0
    ? function (r) {
        return r;
      }
    : t.length === 1
    ? t[0]
    : t.reduce(function (r, o) {
        return function () {
          return r(o.apply(void 0, arguments));
        };
      });
}
function Xj() {
  for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
    t[n] = arguments[n];
  return function (r) {
    return function () {
      var o = r.apply(void 0, arguments),
        i = function () {
          throw new Error(un(15));
        },
        a = {
          getState: o.getState,
          dispatch: function () {
            return i.apply(void 0, arguments);
          },
        },
        l = t.map(function (s) {
          return s(a);
        });
      return (
        (i = AR.apply(void 0, l)(o.dispatch)),
        I1(I1({}, o), {}, { dispatch: i })
      );
    };
  };
}
var NR = oe.createContext(null);
function Qj(e) {
  e();
}
var OR = Qj,
  Zj = function (t) {
    return (OR = t);
  },
  Jj = function () {
    return OR;
  };
function ez() {
  var e = Jj(),
    t = null,
    n = null;
  return {
    clear: function () {
      (t = null), (n = null);
    },
    notify: function () {
      e(function () {
        for (var o = t; o; ) o.callback(), (o = o.next);
      });
    },
    get: function () {
      for (var o = [], i = t; i; ) o.push(i), (i = i.next);
      return o;
    },
    subscribe: function (o) {
      var i = !0,
        a = (n = { callback: o, next: null, prev: n });
      return (
        a.prev ? (a.prev.next = a) : (t = a),
        function () {
          !i ||
            t === null ||
            ((i = !1),
            a.next ? (a.next.prev = a.prev) : (n = a.prev),
            a.prev ? (a.prev.next = a.next) : (t = a.next));
        }
      );
    },
  };
}
var $1 = {
  notify: function () {},
  get: function () {
    return [];
  },
};
function MR(e, t) {
  var n,
    r = $1;
  function o(d) {
    return s(), r.subscribe(d);
  }
  function i() {
    r.notify();
  }
  function a() {
    c.onStateChange && c.onStateChange();
  }
  function l() {
    return !!n;
  }
  function s() {
    n || ((n = t ? t.addNestedSub(a) : e.subscribe(a)), (r = ez()));
  }
  function u() {
    n && (n(), (n = void 0), r.clear(), (r = $1));
  }
  var c = {
    addNestedSub: o,
    notifyNestedSubs: i,
    handleChangeWrapper: a,
    isSubscribed: l,
    trySubscribe: s,
    tryUnsubscribe: u,
    getListeners: function () {
      return r;
    },
  };
  return c;
}
var $R =
  typeof window < "u" &&
  typeof window.document < "u" &&
  typeof window.document.createElement < "u"
    ? S.useLayoutEffect
    : S.useEffect;
function tz(e) {
  var t = e.store,
    n = e.context,
    r = e.children,
    o = S.useMemo(
      function () {
        var l = MR(t);
        return { store: t, subscription: l };
      },
      [t]
    ),
    i = S.useMemo(
      function () {
        return t.getState();
      },
      [t]
    );
  $R(
    function () {
      var l = o.subscription;
      return (
        (l.onStateChange = l.notifyNestedSubs),
        l.trySubscribe(),
        i !== t.getState() && l.notifyNestedSubs(),
        function () {
          l.tryUnsubscribe(), (l.onStateChange = null);
        }
      );
    },
    [o, i]
  );
  var a = n || NR;
  return oe.createElement(a.Provider, { value: o }, r);
}
var LR = { exports: {} },
  He = {};
/** @license React v17.0.2
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var nf = 60103,
  rf = 60106,
  Es = 60107,
  Ts = 60108,
  _s = 60114,
  Ps = 60109,
  ks = 60110,
  Ds = 60112,
  Is = 60113,
  ng = 60120,
  As = 60115,
  Ns = 60116,
  BR = 60121,
  FR = 60122,
  jR = 60117,
  zR = 60129,
  UR = 60131;
if (typeof Symbol == "function" && Symbol.for) {
  var Nt = Symbol.for;
  (nf = Nt("react.element")),
    (rf = Nt("react.portal")),
    (Es = Nt("react.fragment")),
    (Ts = Nt("react.strict_mode")),
    (_s = Nt("react.profiler")),
    (Ps = Nt("react.provider")),
    (ks = Nt("react.context")),
    (Ds = Nt("react.forward_ref")),
    (Is = Nt("react.suspense")),
    (ng = Nt("react.suspense_list")),
    (As = Nt("react.memo")),
    (Ns = Nt("react.lazy")),
    (BR = Nt("react.block")),
    (FR = Nt("react.server.block")),
    (jR = Nt("react.fundamental")),
    (zR = Nt("react.debug_trace_mode")),
    (UR = Nt("react.legacy_hidden"));
}
function fr(e) {
  if (typeof e == "object" && e !== null) {
    var t = e.$$typeof;
    switch (t) {
      case nf:
        switch (((e = e.type), e)) {
          case Es:
          case _s:
          case Ts:
          case Is:
          case ng:
            return e;
          default:
            switch (((e = e && e.$$typeof), e)) {
              case ks:
              case Ds:
              case Ns:
              case As:
              case Ps:
                return e;
              default:
                return t;
            }
        }
      case rf:
        return t;
    }
  }
}
var nz = Ps,
  rz = nf,
  oz = Ds,
  iz = Es,
  az = Ns,
  lz = As,
  sz = rf,
  uz = _s,
  cz = Ts,
  dz = Is;
He.ContextConsumer = ks;
He.ContextProvider = nz;
He.Element = rz;
He.ForwardRef = oz;
He.Fragment = iz;
He.Lazy = az;
He.Memo = lz;
He.Portal = sz;
He.Profiler = uz;
He.StrictMode = cz;
He.Suspense = dz;
He.isAsyncMode = function () {
  return !1;
};
He.isConcurrentMode = function () {
  return !1;
};
He.isContextConsumer = function (e) {
  return fr(e) === ks;
};
He.isContextProvider = function (e) {
  return fr(e) === Ps;
};
He.isElement = function (e) {
  return typeof e == "object" && e !== null && e.$$typeof === nf;
};
He.isForwardRef = function (e) {
  return fr(e) === Ds;
};
He.isFragment = function (e) {
  return fr(e) === Es;
};
He.isLazy = function (e) {
  return fr(e) === Ns;
};
He.isMemo = function (e) {
  return fr(e) === As;
};
He.isPortal = function (e) {
  return fr(e) === rf;
};
He.isProfiler = function (e) {
  return fr(e) === _s;
};
He.isStrictMode = function (e) {
  return fr(e) === Ts;
};
He.isSuspense = function (e) {
  return fr(e) === Is;
};
He.isValidElementType = function (e) {
  return (
    typeof e == "string" ||
    typeof e == "function" ||
    e === Es ||
    e === _s ||
    e === zR ||
    e === Ts ||
    e === Is ||
    e === ng ||
    e === UR ||
    (typeof e == "object" &&
      e !== null &&
      (e.$$typeof === Ns ||
        e.$$typeof === As ||
        e.$$typeof === Ps ||
        e.$$typeof === ks ||
        e.$$typeof === Ds ||
        e.$$typeof === jR ||
        e.$$typeof === BR ||
        e[0] === FR))
  );
};
He.typeOf = fr;
LR.exports = He;
var fz = LR.exports,
  pz = [
    "getDisplayName",
    "methodName",
    "renderCountProp",
    "shouldHandleStateChanges",
    "storeKey",
    "withRef",
    "forwardRef",
    "context",
  ],
  vz = ["reactReduxForwardedRef"],
  hz = [],
  mz = [null, null];
function gz(e, t) {
  var n = e[1];
  return [t.payload, n + 1];
}
function L1(e, t, n) {
  $R(function () {
    return e.apply(void 0, t);
  }, n);
}
function yz(e, t, n, r, o, i, a) {
  (e.current = r),
    (t.current = o),
    (n.current = !1),
    i.current && ((i.current = null), a());
}
function bz(e, t, n, r, o, i, a, l, s, u) {
  if (e) {
    var c = !1,
      d = null,
      f = function () {
        if (!c) {
          var g = t.getState(),
            x,
            v;
          try {
            x = r(g, o.current);
          } catch (m) {
            (v = m), (d = m);
          }
          v || (d = null),
            x === i.current
              ? a.current || s()
              : ((i.current = x),
                (l.current = x),
                (a.current = !0),
                u({ type: "STORE_UPDATED", payload: { error: v } }));
        }
      };
    (n.onStateChange = f), n.trySubscribe(), f();
    var p = function () {
      if (((c = !0), n.tryUnsubscribe(), (n.onStateChange = null), d)) throw d;
    };
    return p;
  }
}
var xz = function () {
  return [null, 0];
};
function Sz(e, t) {
  t === void 0 && (t = {});
  var n = t,
    r = n.getDisplayName,
    o =
      r === void 0
        ? function (y) {
            return "ConnectAdvanced(" + y + ")";
          }
        : r,
    i = n.methodName,
    a = i === void 0 ? "connectAdvanced" : i,
    l = n.renderCountProp,
    s = l === void 0 ? void 0 : l,
    u = n.shouldHandleStateChanges,
    c = u === void 0 ? !0 : u,
    d = n.storeKey,
    f = d === void 0 ? "store" : d;
  n.withRef;
  var p = n.forwardRef,
    h = p === void 0 ? !1 : p,
    g = n.context,
    x = g === void 0 ? NR : g,
    v = xe(n, pz),
    m = x;
  return function (b) {
    var C = b.displayName || b.name || "Component",
      R = o(C),
      E = T({}, v, {
        getDisplayName: o,
        methodName: a,
        renderCountProp: s,
        shouldHandleStateChanges: c,
        storeKey: f,
        displayName: R,
        wrappedComponentName: C,
        WrappedComponent: b,
      }),
      D = v.pure;
    function A(j) {
      return e(j.dispatch, E);
    }
    var I = D
      ? S.useMemo
      : function (j) {
          return j();
        };
    function M(j) {
      var z = S.useMemo(
          function () {
            var wt = j.reactReduxForwardedRef,
              Ze = xe(j, vz);
            return [j.context, wt, Ze];
          },
          [j]
        ),
        q = z[0],
        re = z[1],
        U = z[2],
        X = S.useMemo(
          function () {
            return q &&
              q.Consumer &&
              fz.isContextConsumer(oe.createElement(q.Consumer, null))
              ? q
              : m;
          },
          [q, m]
        ),
        W = S.useContext(X),
        ee = !!j.store && !!j.store.getState && !!j.store.dispatch;
      W && W.store;
      var k = ee ? j.store : W.store,
        L = S.useMemo(
          function () {
            return A(k);
          },
          [k]
        ),
        O = S.useMemo(
          function () {
            if (!c) return mz;
            var wt = MR(k, ee ? null : W.subscription),
              Ze = wt.notifyNestedSubs.bind(wt);
            return [wt, Ze];
          },
          [k, ee, W]
        ),
        H = O[0],
        Y = O[1],
        se = S.useMemo(
          function () {
            return ee ? W : T({}, W, { subscription: H });
          },
          [ee, W, H]
        ),
        ie = S.useReducer(gz, hz, xz),
        te = ie[0],
        Se = te[0],
        ye = ie[1];
      if (Se && Se.error) throw Se.error;
      var be = S.useRef(),
        Re = S.useRef(U),
        Be = S.useRef(),
        Ue = S.useRef(!1),
        Oe = I(
          function () {
            return Be.current && U === Re.current
              ? Be.current
              : L(k.getState(), U);
          },
          [k, Se, U]
        );
      L1(yz, [Re, be, Ue, U, Oe, Be, Y]),
        L1(bz, [c, k, H, L, Re, be, Ue, Be, Y, ye], [k, H, L]);
      var ge = S.useMemo(
          function () {
            return oe.createElement(b, T({}, Oe, { ref: re }));
          },
          [re, b, Oe]
        ),
        jt = S.useMemo(
          function () {
            return c ? oe.createElement(X.Provider, { value: se }, ge) : ge;
          },
          [X, ge, se]
        );
      return jt;
    }
    var J = D ? oe.memo(M) : M;
    if (((J.WrappedComponent = b), (J.displayName = M.displayName = R), h)) {
      var V = oe.forwardRef(function (z, q) {
        return oe.createElement(J, T({}, z, { reactReduxForwardedRef: q }));
      });
      return (V.displayName = R), (V.WrappedComponent = b), e0(V, b);
    }
    return e0(J, b);
  };
}
function B1(e, t) {
  return e === t ? e !== 0 || t !== 0 || 1 / e === 1 / t : e !== e && t !== t;
}
function lp(e, t) {
  if (B1(e, t)) return !0;
  if (typeof e != "object" || e === null || typeof t != "object" || t === null)
    return !1;
  var n = Object.keys(e),
    r = Object.keys(t);
  if (n.length !== r.length) return !1;
  for (var o = 0; o < n.length; o++)
    if (!Object.prototype.hasOwnProperty.call(t, n[o]) || !B1(e[n[o]], t[n[o]]))
      return !1;
  return !0;
}
function wz(e, t) {
  var n = {},
    r = function (a) {
      var l = e[a];
      typeof l == "function" &&
        (n[a] = function () {
          return t(l.apply(void 0, arguments));
        });
    };
  for (var o in e) r(o);
  return n;
}
function rg(e) {
  return function (n, r) {
    var o = e(n, r);
    function i() {
      return o;
    }
    return (i.dependsOnOwnProps = !1), i;
  };
}
function F1(e) {
  return e.dependsOnOwnProps !== null && e.dependsOnOwnProps !== void 0
    ? !!e.dependsOnOwnProps
    : e.length !== 1;
}
function VR(e, t) {
  return function (r, o) {
    o.displayName;
    var i = function (l, s) {
      return i.dependsOnOwnProps ? i.mapToProps(l, s) : i.mapToProps(l);
    };
    return (
      (i.dependsOnOwnProps = !0),
      (i.mapToProps = function (l, s) {
        (i.mapToProps = e), (i.dependsOnOwnProps = F1(e));
        var u = i(l, s);
        return (
          typeof u == "function" &&
            ((i.mapToProps = u), (i.dependsOnOwnProps = F1(u)), (u = i(l, s))),
          u
        );
      }),
      i
    );
  };
}
function Cz(e) {
  return typeof e == "function" ? VR(e) : void 0;
}
function Rz(e) {
  return e
    ? void 0
    : rg(function (t) {
        return { dispatch: t };
      });
}
function Ez(e) {
  return e && typeof e == "object"
    ? rg(function (t) {
        return wz(e, t);
      })
    : void 0;
}
const Tz = [Cz, Rz, Ez];
function _z(e) {
  return typeof e == "function" ? VR(e) : void 0;
}
function Pz(e) {
  return e
    ? void 0
    : rg(function () {
        return {};
      });
}
const kz = [_z, Pz];
function Dz(e, t, n) {
  return T({}, n, e, t);
}
function Iz(e) {
  return function (n, r) {
    r.displayName;
    var o = r.pure,
      i = r.areMergedPropsEqual,
      a = !1,
      l;
    return function (u, c, d) {
      var f = e(u, c, d);
      return a ? (!o || !i(f, l)) && (l = f) : ((a = !0), (l = f)), l;
    };
  };
}
function Az(e) {
  return typeof e == "function" ? Iz(e) : void 0;
}
function Nz(e) {
  return e
    ? void 0
    : function () {
        return Dz;
      };
}
const Oz = [Az, Nz];
var Mz = ["initMapStateToProps", "initMapDispatchToProps", "initMergeProps"];
function $z(e, t, n, r) {
  return function (i, a) {
    return n(e(i, a), t(r, a), a);
  };
}
function Lz(e, t, n, r, o) {
  var i = o.areStatesEqual,
    a = o.areOwnPropsEqual,
    l = o.areStatePropsEqual,
    s = !1,
    u,
    c,
    d,
    f,
    p;
  function h(y, b) {
    return (
      (u = y),
      (c = b),
      (d = e(u, c)),
      (f = t(r, c)),
      (p = n(d, f, c)),
      (s = !0),
      p
    );
  }
  function g() {
    return (
      (d = e(u, c)), t.dependsOnOwnProps && (f = t(r, c)), (p = n(d, f, c)), p
    );
  }
  function x() {
    return (
      e.dependsOnOwnProps && (d = e(u, c)),
      t.dependsOnOwnProps && (f = t(r, c)),
      (p = n(d, f, c)),
      p
    );
  }
  function v() {
    var y = e(u, c),
      b = !l(y, d);
    return (d = y), b && (p = n(d, f, c)), p;
  }
  function m(y, b) {
    var C = !a(b, c),
      R = !i(y, u, b, c);
    return (u = y), (c = b), C && R ? g() : C ? x() : R ? v() : p;
  }
  return function (b, C) {
    return s ? m(b, C) : h(b, C);
  };
}
function Bz(e, t) {
  var n = t.initMapStateToProps,
    r = t.initMapDispatchToProps,
    o = t.initMergeProps,
    i = xe(t, Mz),
    a = n(e, i),
    l = r(e, i),
    s = o(e, i),
    u = i.pure ? Lz : $z;
  return u(a, l, s, e, i);
}
var Fz = [
  "pure",
  "areStatesEqual",
  "areOwnPropsEqual",
  "areStatePropsEqual",
  "areMergedPropsEqual",
];
function sp(e, t, n) {
  for (var r = t.length - 1; r >= 0; r--) {
    var o = t[r](e);
    if (o) return o;
  }
  return function (i, a) {
    throw new Error(
      "Invalid value of type " +
        typeof e +
        " for " +
        n +
        " argument when connecting component " +
        a.wrappedComponentName +
        "."
    );
  };
}
function jz(e, t) {
  return e === t;
}
function zz(e) {
  var t = e === void 0 ? {} : e,
    n = t.connectHOC,
    r = n === void 0 ? Sz : n,
    o = t.mapStateToPropsFactories,
    i = o === void 0 ? kz : o,
    a = t.mapDispatchToPropsFactories,
    l = a === void 0 ? Tz : a,
    s = t.mergePropsFactories,
    u = s === void 0 ? Oz : s,
    c = t.selectorFactory,
    d = c === void 0 ? Bz : c;
  return function (p, h, g, x) {
    x === void 0 && (x = {});
    var v = x,
      m = v.pure,
      y = m === void 0 ? !0 : m,
      b = v.areStatesEqual,
      C = b === void 0 ? jz : b,
      R = v.areOwnPropsEqual,
      E = R === void 0 ? lp : R,
      D = v.areStatePropsEqual,
      A = D === void 0 ? lp : D,
      I = v.areMergedPropsEqual,
      M = I === void 0 ? lp : I,
      J = xe(v, Fz),
      V = sp(p, i, "mapStateToProps"),
      j = sp(h, l, "mapDispatchToProps"),
      z = sp(g, u, "mergeProps");
    return r(
      d,
      T(
        {
          methodName: "connect",
          getDisplayName: function (re) {
            return "Connect(" + re + ")";
          },
          shouldHandleStateChanges: !!p,
          initMapStateToProps: V,
          initMapDispatchToProps: j,
          initMergeProps: z,
          pure: y,
          areStatesEqual: C,
          areOwnPropsEqual: E,
          areStatePropsEqual: A,
          areMergedPropsEqual: M,
        },
        J
      )
    );
  };
}
const WR = zz();
Zj(Wc.unstable_batchedUpdates);
function Uz(e, t) {
  if (e.length !== t.length) return !1;
  for (var n = 0; n < e.length; n++) if (e[n] !== t[n]) return !1;
  return !0;
}
function HR(e, t) {
  var n = S.useState(function () {
      return { inputs: t, result: e() };
    })[0],
    r = S.useRef(!0),
    o = S.useRef(n),
    i = r.current || !!(t && o.current.inputs && Uz(t, o.current.inputs)),
    a = i ? o.current : { inputs: t, result: e() };
  return (
    S.useEffect(
      function () {
        (r.current = !1), (o.current = a);
      },
      [a]
    ),
    a.result
  );
}
function Vz(e, t) {
  return HR(function () {
    return e;
  }, t);
}
var Ae = HR,
  ve = Vz,
  Wz = !0,
  up = "Invariant failed";
function Hz(e, t) {
  if (!e) {
    if (Wz) throw new Error(up);
    var n = typeof t == "function" ? t() : t,
      r = n ? "".concat(up, ": ").concat(n) : up;
    throw new Error(r);
  }
}
var lr = function (t) {
    var n = t.top,
      r = t.right,
      o = t.bottom,
      i = t.left,
      a = r - i,
      l = o - n,
      s = {
        top: n,
        right: r,
        bottom: o,
        left: i,
        width: a,
        height: l,
        x: i,
        y: n,
        center: { x: (r + i) / 2, y: (o + n) / 2 },
      };
    return s;
  },
  og = function (t, n) {
    return {
      top: t.top - n.top,
      left: t.left - n.left,
      bottom: t.bottom + n.bottom,
      right: t.right + n.right,
    };
  },
  j1 = function (t, n) {
    return {
      top: t.top + n.top,
      left: t.left + n.left,
      bottom: t.bottom - n.bottom,
      right: t.right - n.right,
    };
  },
  Gz = function (t, n) {
    return {
      top: t.top + n.y,
      left: t.left + n.x,
      bottom: t.bottom + n.y,
      right: t.right + n.x,
    };
  },
  cp = { top: 0, right: 0, bottom: 0, left: 0 },
  ig = function (t) {
    var n = t.borderBox,
      r = t.margin,
      o = r === void 0 ? cp : r,
      i = t.border,
      a = i === void 0 ? cp : i,
      l = t.padding,
      s = l === void 0 ? cp : l,
      u = lr(og(n, o)),
      c = lr(j1(n, a)),
      d = lr(j1(c, s));
    return {
      marginBox: u,
      borderBox: lr(n),
      paddingBox: c,
      contentBox: d,
      margin: o,
      border: a,
      padding: s,
    };
  },
  $n = function (t) {
    var n = t.slice(0, -2),
      r = t.slice(-2);
    if (r !== "px") return 0;
    var o = Number(n);
    return isNaN(o) && Hz(!1), o;
  },
  Kz = function () {
    return { x: window.pageXOffset, y: window.pageYOffset };
  },
  bc = function (t, n) {
    var r = t.borderBox,
      o = t.border,
      i = t.margin,
      a = t.padding,
      l = Gz(r, n);
    return ig({ borderBox: l, border: o, margin: i, padding: a });
  },
  xc = function (t, n) {
    return n === void 0 && (n = Kz()), bc(t, n);
  },
  GR = function (t, n) {
    var r = {
        top: $n(n.marginTop),
        right: $n(n.marginRight),
        bottom: $n(n.marginBottom),
        left: $n(n.marginLeft),
      },
      o = {
        top: $n(n.paddingTop),
        right: $n(n.paddingRight),
        bottom: $n(n.paddingBottom),
        left: $n(n.paddingLeft),
      },
      i = {
        top: $n(n.borderTopWidth),
        right: $n(n.borderRightWidth),
        bottom: $n(n.borderBottomWidth),
        left: $n(n.borderLeftWidth),
      };
    return ig({ borderBox: t, margin: r, padding: o, border: i });
  },
  KR = function (t) {
    var n = t.getBoundingClientRect(),
      r = window.getComputedStyle(t);
    return GR(n, r);
  },
  z1 =
    Number.isNaN ||
    function (t) {
      return typeof t == "number" && t !== t;
    };
function qz(e, t) {
  return !!(e === t || (z1(e) && z1(t)));
}
function Yz(e, t) {
  if (e.length !== t.length) return !1;
  for (var n = 0; n < e.length; n++) if (!qz(e[n], t[n])) return !1;
  return !0;
}
function Pt(e, t) {
  t === void 0 && (t = Yz);
  var n,
    r = [],
    o,
    i = !1;
  function a() {
    for (var l = [], s = 0; s < arguments.length; s++) l[s] = arguments[s];
    return (
      (i && n === this && t(l, r)) ||
        ((o = e.apply(this, l)), (i = !0), (n = this), (r = l)),
      o
    );
  }
  return a;
}
var Xz = function (t) {
  var n = [],
    r = null,
    o = function () {
      for (var a = arguments.length, l = new Array(a), s = 0; s < a; s++)
        l[s] = arguments[s];
      (n = l),
        !r &&
          (r = requestAnimationFrame(function () {
            (r = null), t.apply(void 0, n);
          }));
    };
  return (
    (o.cancel = function () {
      r && (cancelAnimationFrame(r), (r = null));
    }),
    o
  );
};
const Jl = Xz;
function qR(e, t) {}
qR.bind(null, "warn");
qR.bind(null, "error");
function go() {}
function Qz(e, t) {
  return T({}, e, {}, t);
}
function Un(e, t, n) {
  var r = t.map(function (o) {
    var i = Qz(n, o.options);
    return (
      e.addEventListener(o.eventName, o.fn, i),
      function () {
        e.removeEventListener(o.eventName, o.fn, i);
      }
    );
  });
  return function () {
    r.forEach(function (i) {
      i();
    });
  };
}
var Zz = "Invariant failed";
function Sc(e) {
  this.message = e;
}
Sc.prototype.toString = function () {
  return this.message;
};
function ne(e, t) {
  if (!e) throw new Sc(Zz);
}
var Jz = (function (e) {
    gd(t, e);
    function t() {
      for (var r, o = arguments.length, i = new Array(o), a = 0; a < o; a++)
        i[a] = arguments[a];
      return (
        (r = e.call.apply(e, [this].concat(i)) || this),
        (r.callbacks = null),
        (r.unbind = go),
        (r.onWindowError = function (l) {
          var s = r.getCallbacks();
          s.isDragging() && s.tryAbort();
          var u = l.error;
          u instanceof Sc && l.preventDefault();
        }),
        (r.getCallbacks = function () {
          if (!r.callbacks)
            throw new Error("Unable to find AppCallbacks in <ErrorBoundary/>");
          return r.callbacks;
        }),
        (r.setCallbacks = function (l) {
          r.callbacks = l;
        }),
        r
      );
    }
    var n = t.prototype;
    return (
      (n.componentDidMount = function () {
        this.unbind = Un(window, [
          { eventName: "error", fn: this.onWindowError },
        ]);
      }),
      (n.componentDidCatch = function (o) {
        if (o instanceof Sc) {
          this.setState({});
          return;
        }
        throw o;
      }),
      (n.componentWillUnmount = function () {
        this.unbind();
      }),
      (n.render = function () {
        return this.props.children(this.setCallbacks);
      }),
      t
    );
  })(oe.Component),
  e7 = `
  Press space bar to start a drag.
  When dragging you can use the arrow keys to move the item around and escape to cancel.
  Some screen readers may require you to be in focus mode or to use your pass through key
`,
  wc = function (t) {
    return t + 1;
  },
  t7 = function (t) {
    return (
      `
  You have lifted an item in position ` +
      wc(t.source.index) +
      `
`
    );
  },
  YR = function (t, n) {
    var r = t.droppableId === n.droppableId,
      o = wc(t.index),
      i = wc(n.index);
    return r
      ? `
      You have moved the item from position ` +
          o +
          `
      to position ` +
          i +
          `
    `
      : `
    You have moved the item from position ` +
          o +
          `
    in list ` +
          t.droppableId +
          `
    to list ` +
          n.droppableId +
          `
    in position ` +
          i +
          `
  `;
  },
  XR = function (t, n, r) {
    var o = n.droppableId === r.droppableId;
    return o
      ? `
      The item ` +
          t +
          `
      has been combined with ` +
          r.draggableId
      : `
      The item ` +
          t +
          `
      in list ` +
          n.droppableId +
          `
      has been combined with ` +
          r.draggableId +
          `
      in list ` +
          r.droppableId +
          `
    `;
  },
  n7 = function (t) {
    var n = t.destination;
    if (n) return YR(t.source, n);
    var r = t.combine;
    return r
      ? XR(t.draggableId, t.source, r)
      : "You are over an area that cannot be dropped on";
  },
  U1 = function (t) {
    return (
      `
  The item has returned to its starting position
  of ` +
      wc(t.index) +
      `
`
    );
  },
  r7 = function (t) {
    if (t.reason === "CANCEL")
      return (
        `
      Movement cancelled.
      ` +
        U1(t.source) +
        `
    `
      );
    var n = t.destination,
      r = t.combine;
    return n
      ? `
      You have dropped the item.
      ` +
          YR(t.source, n) +
          `
    `
      : r
      ? `
      You have dropped the item.
      ` +
        XR(t.draggableId, t.source, r) +
        `
    `
      : `
    The item has been dropped while not over a drop area.
    ` +
        U1(t.source) +
        `
  `;
  },
  $u = {
    dragHandleUsageInstructions: e7,
    onDragStart: t7,
    onDragUpdate: n7,
    onDragEnd: r7,
  },
  kt = { x: 0, y: 0 },
  Lt = function (t, n) {
    return { x: t.x + n.x, y: t.y + n.y };
  },
  Rn = function (t, n) {
    return { x: t.x - n.x, y: t.y - n.y };
  },
  yo = function (t, n) {
    return t.x === n.x && t.y === n.y;
  },
  Ca = function (t) {
    return { x: t.x !== 0 ? -t.x : 0, y: t.y !== 0 ? -t.y : 0 };
  },
  oi = function (t, n, r) {
    var o;
    return (
      r === void 0 && (r = 0),
      (o = {}),
      (o[t] = n),
      (o[t === "x" ? "y" : "x"] = r),
      o
    );
  },
  es = function (t, n) {
    return Math.sqrt(Math.pow(n.x - t.x, 2) + Math.pow(n.y - t.y, 2));
  },
  V1 = function (t, n) {
    return Math.min.apply(
      Math,
      n.map(function (r) {
        return es(t, r);
      })
    );
  },
  QR = function (t) {
    return function (n) {
      return { x: t(n.x), y: t(n.y) };
    };
  },
  o7 = function (e, t) {
    var n = lr({
      top: Math.max(t.top, e.top),
      right: Math.min(t.right, e.right),
      bottom: Math.min(t.bottom, e.bottom),
      left: Math.max(t.left, e.left),
    });
    return n.width <= 0 || n.height <= 0 ? null : n;
  },
  Os = function (t, n) {
    return {
      top: t.top + n.y,
      left: t.left + n.x,
      bottom: t.bottom + n.y,
      right: t.right + n.x,
    };
  },
  W1 = function (t) {
    return [
      { x: t.left, y: t.top },
      { x: t.right, y: t.top },
      { x: t.left, y: t.bottom },
      { x: t.right, y: t.bottom },
    ];
  },
  i7 = { top: 0, right: 0, bottom: 0, left: 0 },
  a7 = function (t, n) {
    return n ? Os(t, n.scroll.diff.displacement) : t;
  },
  l7 = function (t, n, r) {
    if (r && r.increasedBy) {
      var o;
      return T(
        {},
        t,
        ((o = {}), (o[n.end] = t[n.end] + r.increasedBy[n.line]), o)
      );
    }
    return t;
  },
  s7 = function (t, n) {
    return n && n.shouldClipSubject ? o7(n.pageMarginBox, t) : lr(t);
  },
  va = function (e) {
    var t = e.page,
      n = e.withPlaceholder,
      r = e.axis,
      o = e.frame,
      i = a7(t.marginBox, o),
      a = l7(i, r, n),
      l = s7(a, o);
    return { page: t, withPlaceholder: n, active: l };
  },
  ag = function (e, t) {
    e.frame || ne(!1);
    var n = e.frame,
      r = Rn(t, n.scroll.initial),
      o = Ca(r),
      i = T({}, n, {
        scroll: {
          initial: n.scroll.initial,
          current: t,
          diff: { value: r, displacement: o },
          max: n.scroll.max,
        },
      }),
      a = va({
        page: e.subject.page,
        withPlaceholder: e.subject.withPlaceholder,
        axis: e.axis,
        frame: i,
      }),
      l = T({}, e, { frame: i, subject: a });
    return l;
  };
function Cc(e) {
  return Object.values
    ? Object.values(e)
    : Object.keys(e).map(function (t) {
        return e[t];
      });
}
function lg(e, t) {
  if (e.findIndex) return e.findIndex(t);
  for (var n = 0; n < e.length; n++) if (t(e[n])) return n;
  return -1;
}
function Do(e, t) {
  if (e.find) return e.find(t);
  var n = lg(e, t);
  if (n !== -1) return e[n];
}
function ZR(e) {
  return Array.prototype.slice.call(e);
}
var JR = Pt(function (e) {
    return e.reduce(function (t, n) {
      return (t[n.descriptor.id] = n), t;
    }, {});
  }),
  eE = Pt(function (e) {
    return e.reduce(function (t, n) {
      return (t[n.descriptor.id] = n), t;
    }, {});
  }),
  of = Pt(function (e) {
    return Cc(e);
  }),
  u7 = Pt(function (e) {
    return Cc(e);
  }),
  Ra = Pt(function (e, t) {
    var n = u7(t)
      .filter(function (r) {
        return e === r.descriptor.droppableId;
      })
      .sort(function (r, o) {
        return r.descriptor.index - o.descriptor.index;
      });
    return n;
  });
function sg(e) {
  return e.at && e.at.type === "REORDER" ? e.at.destination : null;
}
function af(e) {
  return e.at && e.at.type === "COMBINE" ? e.at.combine : null;
}
var lf = Pt(function (e, t) {
    return t.filter(function (n) {
      return n.descriptor.id !== e.descriptor.id;
    });
  }),
  c7 = function (e) {
    var t = e.isMovingForward,
      n = e.draggable,
      r = e.destination,
      o = e.insideDestination,
      i = e.previousImpact;
    if (!r.isCombineEnabled) return null;
    var a = sg(i);
    if (!a) return null;
    function l(g) {
      var x = {
        type: "COMBINE",
        combine: { draggableId: g, droppableId: r.descriptor.id },
      };
      return T({}, i, { at: x });
    }
    var s = i.displaced.all,
      u = s.length ? s[0] : null;
    if (t) return u ? l(u) : null;
    var c = lf(n, o);
    if (!u) {
      if (!c.length) return null;
      var d = c[c.length - 1];
      return l(d.descriptor.id);
    }
    var f = lg(c, function (g) {
      return g.descriptor.id === u;
    });
    f === -1 && ne(!1);
    var p = f - 1;
    if (p < 0) return null;
    var h = c[p];
    return l(h.descriptor.id);
  },
  Ea = function (e, t) {
    return e.descriptor.droppableId === t.descriptor.id;
  },
  tE = { point: kt, value: 0 },
  ts = { invisible: {}, visible: {}, all: [] },
  d7 = { displaced: ts, displacedBy: tE, at: null },
  Hn = function (e, t) {
    return function (n) {
      return e <= n && n <= t;
    };
  },
  nE = function (e) {
    var t = Hn(e.top, e.bottom),
      n = Hn(e.left, e.right);
    return function (r) {
      var o = t(r.top) && t(r.bottom) && n(r.left) && n(r.right);
      if (o) return !0;
      var i = t(r.top) || t(r.bottom),
        a = n(r.left) || n(r.right),
        l = i && a;
      if (l) return !0;
      var s = r.top < e.top && r.bottom > e.bottom,
        u = r.left < e.left && r.right > e.right,
        c = s && u;
      if (c) return !0;
      var d = (s && a) || (u && i);
      return d;
    };
  },
  f7 = function (e) {
    var t = Hn(e.top, e.bottom),
      n = Hn(e.left, e.right);
    return function (r) {
      var o = t(r.top) && t(r.bottom) && n(r.left) && n(r.right);
      return o;
    };
  },
  ug = {
    direction: "vertical",
    line: "y",
    crossAxisLine: "x",
    start: "top",
    end: "bottom",
    size: "height",
    crossAxisStart: "left",
    crossAxisEnd: "right",
    crossAxisSize: "width",
  },
  rE = {
    direction: "horizontal",
    line: "x",
    crossAxisLine: "y",
    start: "left",
    end: "right",
    size: "width",
    crossAxisStart: "top",
    crossAxisEnd: "bottom",
    crossAxisSize: "height",
  },
  p7 = function (e) {
    return function (t) {
      var n = Hn(t.top, t.bottom),
        r = Hn(t.left, t.right);
      return function (o) {
        return e === ug ? n(o.top) && n(o.bottom) : r(o.left) && r(o.right);
      };
    };
  },
  v7 = function (t, n) {
    var r = n.frame ? n.frame.scroll.diff.displacement : kt;
    return Os(t, r);
  },
  h7 = function (t, n, r) {
    return n.subject.active ? r(n.subject.active)(t) : !1;
  },
  m7 = function (t, n, r) {
    return r(n)(t);
  },
  cg = function (t) {
    var n = t.target,
      r = t.destination,
      o = t.viewport,
      i = t.withDroppableDisplacement,
      a = t.isVisibleThroughFrameFn,
      l = i ? v7(n, r) : n;
    return h7(l, r, a) && m7(l, o, a);
  },
  g7 = function (t) {
    return cg(T({}, t, { isVisibleThroughFrameFn: nE }));
  },
  oE = function (t) {
    return cg(T({}, t, { isVisibleThroughFrameFn: f7 }));
  },
  y7 = function (t) {
    return cg(T({}, t, { isVisibleThroughFrameFn: p7(t.destination.axis) }));
  },
  b7 = function (t, n, r) {
    if (typeof r == "boolean") return r;
    if (!n) return !0;
    var o = n.invisible,
      i = n.visible;
    if (o[t]) return !1;
    var a = i[t];
    return a ? a.shouldAnimate : !0;
  };
function x7(e, t) {
  var n = e.page.marginBox,
    r = { top: t.point.y, right: 0, bottom: 0, left: t.point.x };
  return lr(og(n, r));
}
function ns(e) {
  var t = e.afterDragging,
    n = e.destination,
    r = e.displacedBy,
    o = e.viewport,
    i = e.forceShouldAnimate,
    a = e.last;
  return t.reduce(
    function (s, u) {
      var c = x7(u, r),
        d = u.descriptor.id;
      s.all.push(d);
      var f = g7({
        target: c,
        destination: n,
        viewport: o,
        withDroppableDisplacement: !0,
      });
      if (!f) return (s.invisible[u.descriptor.id] = !0), s;
      var p = b7(d, a, i),
        h = { draggableId: d, shouldAnimate: p };
      return (s.visible[d] = h), s;
    },
    { all: [], visible: {}, invisible: {} }
  );
}
function S7(e, t) {
  if (!e.length) return 0;
  var n = e[e.length - 1].descriptor.index;
  return t.inHomeList ? n : n + 1;
}
function H1(e) {
  var t = e.insideDestination,
    n = e.inHomeList,
    r = e.displacedBy,
    o = e.destination,
    i = S7(t, { inHomeList: n });
  return {
    displaced: ts,
    displacedBy: r,
    at: {
      type: "REORDER",
      destination: { droppableId: o.descriptor.id, index: i },
    },
  };
}
function Rc(e) {
  var t = e.draggable,
    n = e.insideDestination,
    r = e.destination,
    o = e.viewport,
    i = e.displacedBy,
    a = e.last,
    l = e.index,
    s = e.forceShouldAnimate,
    u = Ea(t, r);
  if (l == null)
    return H1({
      insideDestination: n,
      inHomeList: u,
      displacedBy: i,
      destination: r,
    });
  var c = Do(n, function (g) {
    return g.descriptor.index === l;
  });
  if (!c)
    return H1({
      insideDestination: n,
      inHomeList: u,
      displacedBy: i,
      destination: r,
    });
  var d = lf(t, n),
    f = n.indexOf(c),
    p = d.slice(f),
    h = ns({
      afterDragging: p,
      destination: r,
      displacedBy: i,
      last: a,
      viewport: o.frame,
      forceShouldAnimate: s,
    });
  return {
    displaced: h,
    displacedBy: i,
    at: {
      type: "REORDER",
      destination: { droppableId: r.descriptor.id, index: l },
    },
  };
}
function Co(e, t) {
  return !!t.effected[e];
}
var w7 = function (e) {
    var t = e.isMovingForward,
      n = e.destination,
      r = e.draggables,
      o = e.combine,
      i = e.afterCritical;
    if (!n.isCombineEnabled) return null;
    var a = o.draggableId,
      l = r[a],
      s = l.descriptor.index,
      u = Co(a, i);
    return u ? (t ? s : s - 1) : t ? s + 1 : s;
  },
  C7 = function (e) {
    var t = e.isMovingForward,
      n = e.isInHomeList,
      r = e.insideDestination,
      o = e.location;
    if (!r.length) return null;
    var i = o.index,
      a = t ? i + 1 : i - 1,
      l = r[0].descriptor.index,
      s = r[r.length - 1].descriptor.index,
      u = n ? s : s + 1;
    return a < l || a > u ? null : a;
  },
  R7 = function (e) {
    var t = e.isMovingForward,
      n = e.isInHomeList,
      r = e.draggable,
      o = e.draggables,
      i = e.destination,
      a = e.insideDestination,
      l = e.previousImpact,
      s = e.viewport,
      u = e.afterCritical,
      c = l.at;
    if ((c || ne(!1), c.type === "REORDER")) {
      var d = C7({
        isMovingForward: t,
        isInHomeList: n,
        location: c.destination,
        insideDestination: a,
      });
      return d == null
        ? null
        : Rc({
            draggable: r,
            insideDestination: a,
            destination: i,
            viewport: s,
            last: l.displaced,
            displacedBy: l.displacedBy,
            index: d,
          });
    }
    var f = w7({
      isMovingForward: t,
      destination: i,
      displaced: l.displaced,
      draggables: o,
      combine: c.combine,
      afterCritical: u,
    });
    return f == null
      ? null
      : Rc({
          draggable: r,
          insideDestination: a,
          destination: i,
          viewport: s,
          last: l.displaced,
          displacedBy: l.displacedBy,
          index: f,
        });
  },
  E7 = function (e) {
    var t = e.displaced,
      n = e.afterCritical,
      r = e.combineWith,
      o = e.displacedBy,
      i = !!(t.visible[r] || t.invisible[r]);
    return Co(r, n) ? (i ? kt : Ca(o.point)) : i ? o.point : kt;
  },
  T7 = function (e) {
    var t = e.afterCritical,
      n = e.impact,
      r = e.draggables,
      o = af(n);
    o || ne(!1);
    var i = o.draggableId,
      a = r[i].page.borderBox.center,
      l = E7({
        displaced: n.displaced,
        afterCritical: t,
        combineWith: i,
        displacedBy: n.displacedBy,
      });
    return Lt(a, l);
  },
  iE = function (t, n) {
    return n.margin[t.start] + n.borderBox[t.size] / 2;
  },
  _7 = function (t, n) {
    return n.margin[t.end] + n.borderBox[t.size] / 2;
  },
  dg = function (t, n, r) {
    return (
      n[t.crossAxisStart] +
      r.margin[t.crossAxisStart] +
      r.borderBox[t.crossAxisSize] / 2
    );
  },
  G1 = function (t) {
    var n = t.axis,
      r = t.moveRelativeTo,
      o = t.isMoving;
    return oi(n.line, r.marginBox[n.end] + iE(n, o), dg(n, r.marginBox, o));
  },
  K1 = function (t) {
    var n = t.axis,
      r = t.moveRelativeTo,
      o = t.isMoving;
    return oi(n.line, r.marginBox[n.start] - _7(n, o), dg(n, r.marginBox, o));
  },
  P7 = function (t) {
    var n = t.axis,
      r = t.moveInto,
      o = t.isMoving;
    return oi(n.line, r.contentBox[n.start] + iE(n, o), dg(n, r.contentBox, o));
  },
  k7 = function (e) {
    var t = e.impact,
      n = e.draggable,
      r = e.draggables,
      o = e.droppable,
      i = e.afterCritical,
      a = Ra(o.descriptor.id, r),
      l = n.page,
      s = o.axis;
    if (!a.length) return P7({ axis: s, moveInto: o.page, isMoving: l });
    var u = t.displaced,
      c = t.displacedBy,
      d = u.all[0];
    if (d) {
      var f = r[d];
      if (Co(d, i)) return K1({ axis: s, moveRelativeTo: f.page, isMoving: l });
      var p = bc(f.page, c.point);
      return K1({ axis: s, moveRelativeTo: p, isMoving: l });
    }
    var h = a[a.length - 1];
    if (h.descriptor.id === n.descriptor.id) return l.borderBox.center;
    if (Co(h.descriptor.id, i)) {
      var g = bc(h.page, Ca(i.displacedBy.point));
      return G1({ axis: s, moveRelativeTo: g, isMoving: l });
    }
    return G1({ axis: s, moveRelativeTo: h.page, isMoving: l });
  },
  Vv = function (e, t) {
    var n = e.frame;
    return n ? Lt(t, n.scroll.diff.displacement) : t;
  },
  D7 = function (t) {
    var n = t.impact,
      r = t.draggable,
      o = t.droppable,
      i = t.draggables,
      a = t.afterCritical,
      l = r.page.borderBox.center,
      s = n.at;
    return !o || !s
      ? l
      : s.type === "REORDER"
      ? k7({
          impact: n,
          draggable: r,
          draggables: i,
          droppable: o,
          afterCritical: a,
        })
      : T7({ impact: n, draggables: i, afterCritical: a });
  },
  sf = function (e) {
    var t = D7(e),
      n = e.droppable,
      r = n ? Vv(n, t) : t;
    return r;
  },
  aE = function (e, t) {
    var n = Rn(t, e.scroll.initial),
      r = Ca(n),
      o = lr({
        top: t.y,
        bottom: t.y + e.frame.height,
        left: t.x,
        right: t.x + e.frame.width,
      }),
      i = {
        frame: o,
        scroll: {
          initial: e.scroll.initial,
          max: e.scroll.max,
          current: t,
          diff: { value: n, displacement: r },
        },
      };
    return i;
  };
function q1(e, t) {
  return e.map(function (n) {
    return t[n];
  });
}
function I7(e, t) {
  for (var n = 0; n < t.length; n++) {
    var r = t[n].visible[e];
    if (r) return r;
  }
  return null;
}
var A7 = function (e) {
    var t = e.impact,
      n = e.viewport,
      r = e.destination,
      o = e.draggables,
      i = e.maxScrollChange,
      a = aE(n, Lt(n.scroll.current, i)),
      l = r.frame ? ag(r, Lt(r.frame.scroll.current, i)) : r,
      s = t.displaced,
      u = ns({
        afterDragging: q1(s.all, o),
        destination: r,
        displacedBy: t.displacedBy,
        viewport: a.frame,
        last: s,
        forceShouldAnimate: !1,
      }),
      c = ns({
        afterDragging: q1(s.all, o),
        destination: l,
        displacedBy: t.displacedBy,
        viewport: n.frame,
        last: s,
        forceShouldAnimate: !1,
      }),
      d = {},
      f = {},
      p = [s, u, c];
    s.all.forEach(function (g) {
      var x = I7(g, p);
      if (x) {
        f[g] = x;
        return;
      }
      d[g] = !0;
    });
    var h = T({}, t, { displaced: { all: s.all, invisible: d, visible: f } });
    return h;
  },
  N7 = function (e, t) {
    return Lt(e.scroll.diff.displacement, t);
  },
  fg = function (e) {
    var t = e.pageBorderBoxCenter,
      n = e.draggable,
      r = e.viewport,
      o = N7(r, t),
      i = Rn(o, n.page.borderBox.center);
    return Lt(n.client.borderBox.center, i);
  },
  lE = function (e) {
    var t = e.draggable,
      n = e.destination,
      r = e.newPageBorderBoxCenter,
      o = e.viewport,
      i = e.withDroppableDisplacement,
      a = e.onlyOnMainAxis,
      l = a === void 0 ? !1 : a,
      s = Rn(r, t.page.borderBox.center),
      u = Os(t.page.borderBox, s),
      c = {
        target: u,
        destination: n,
        withDroppableDisplacement: i,
        viewport: o,
      };
    return l ? y7(c) : oE(c);
  },
  O7 = function (e) {
    var t = e.isMovingForward,
      n = e.draggable,
      r = e.destination,
      o = e.draggables,
      i = e.previousImpact,
      a = e.viewport,
      l = e.previousPageBorderBoxCenter,
      s = e.previousClientSelection,
      u = e.afterCritical;
    if (!r.isEnabled) return null;
    var c = Ra(r.descriptor.id, o),
      d = Ea(n, r),
      f =
        c7({
          isMovingForward: t,
          draggable: n,
          destination: r,
          insideDestination: c,
          previousImpact: i,
        }) ||
        R7({
          isMovingForward: t,
          isInHomeList: d,
          draggable: n,
          draggables: o,
          destination: r,
          insideDestination: c,
          previousImpact: i,
          viewport: a,
          afterCritical: u,
        });
    if (!f) return null;
    var p = sf({
        impact: f,
        draggable: n,
        droppable: r,
        draggables: o,
        afterCritical: u,
      }),
      h = lE({
        draggable: n,
        destination: r,
        newPageBorderBoxCenter: p,
        viewport: a.frame,
        withDroppableDisplacement: !1,
        onlyOnMainAxis: !0,
      });
    if (h) {
      var g = fg({ pageBorderBoxCenter: p, draggable: n, viewport: a });
      return { clientSelection: g, impact: f, scrollJumpRequest: null };
    }
    var x = Rn(p, l),
      v = A7({
        impact: f,
        viewport: a,
        destination: r,
        draggables: o,
        maxScrollChange: x,
      });
    return { clientSelection: s, impact: v, scrollJumpRequest: x };
  },
  Yt = function (t) {
    var n = t.subject.active;
    return n || ne(!1), n;
  },
  M7 = function (e) {
    var t = e.isMovingForward,
      n = e.pageBorderBoxCenter,
      r = e.source,
      o = e.droppables,
      i = e.viewport,
      a = r.subject.active;
    if (!a) return null;
    var l = r.axis,
      s = Hn(a[l.start], a[l.end]),
      u = of(o)
        .filter(function (d) {
          return d !== r;
        })
        .filter(function (d) {
          return d.isEnabled;
        })
        .filter(function (d) {
          return !!d.subject.active;
        })
        .filter(function (d) {
          return nE(i.frame)(Yt(d));
        })
        .filter(function (d) {
          var f = Yt(d);
          return t
            ? a[l.crossAxisEnd] < f[l.crossAxisEnd]
            : f[l.crossAxisStart] < a[l.crossAxisStart];
        })
        .filter(function (d) {
          var f = Yt(d),
            p = Hn(f[l.start], f[l.end]);
          return s(f[l.start]) || s(f[l.end]) || p(a[l.start]) || p(a[l.end]);
        })
        .sort(function (d, f) {
          var p = Yt(d)[l.crossAxisStart],
            h = Yt(f)[l.crossAxisStart];
          return t ? p - h : h - p;
        })
        .filter(function (d, f, p) {
          return Yt(d)[l.crossAxisStart] === Yt(p[0])[l.crossAxisStart];
        });
    if (!u.length) return null;
    if (u.length === 1) return u[0];
    var c = u.filter(function (d) {
      var f = Hn(Yt(d)[l.start], Yt(d)[l.end]);
      return f(n[l.line]);
    });
    return c.length === 1
      ? c[0]
      : c.length > 1
      ? c.sort(function (d, f) {
          return Yt(d)[l.start] - Yt(f)[l.start];
        })[0]
      : u.sort(function (d, f) {
          var p = V1(n, W1(Yt(d))),
            h = V1(n, W1(Yt(f)));
          return p !== h ? p - h : Yt(d)[l.start] - Yt(f)[l.start];
        })[0];
  },
  Y1 = function (t, n) {
    var r = t.page.borderBox.center;
    return Co(t.descriptor.id, n) ? Rn(r, n.displacedBy.point) : r;
  },
  $7 = function (t, n) {
    var r = t.page.borderBox;
    return Co(t.descriptor.id, n) ? Os(r, Ca(n.displacedBy.point)) : r;
  },
  L7 = function (e) {
    var t = e.pageBorderBoxCenter,
      n = e.viewport,
      r = e.destination,
      o = e.insideDestination,
      i = e.afterCritical,
      a = o
        .filter(function (l) {
          return oE({
            target: $7(l, i),
            destination: r,
            viewport: n.frame,
            withDroppableDisplacement: !0,
          });
        })
        .sort(function (l, s) {
          var u = es(t, Vv(r, Y1(l, i))),
            c = es(t, Vv(r, Y1(s, i)));
          return u < c
            ? -1
            : c < u
            ? 1
            : l.descriptor.index - s.descriptor.index;
        });
    return a[0] || null;
  },
  Ms = Pt(function (t, n) {
    var r = n[t.line];
    return { value: r, point: oi(t.line, r) };
  }),
  B7 = function (t, n, r) {
    var o = t.axis;
    if (t.descriptor.mode === "virtual") return oi(o.line, n[o.line]);
    var i = t.subject.page.contentBox[o.size],
      a = Ra(t.descriptor.id, r),
      l = a.reduce(function (c, d) {
        return c + d.client.marginBox[o.size];
      }, 0),
      s = l + n[o.line],
      u = s - i;
    return u <= 0 ? null : oi(o.line, u);
  },
  sE = function (t, n) {
    return T({}, t, { scroll: T({}, t.scroll, { max: n }) });
  },
  uE = function (t, n, r) {
    var o = t.frame;
    Ea(n, t) && ne(!1), t.subject.withPlaceholder && ne(!1);
    var i = Ms(t.axis, n.displaceBy).point,
      a = B7(t, i, r),
      l = {
        placeholderSize: i,
        increasedBy: a,
        oldFrameMaxScroll: t.frame ? t.frame.scroll.max : null,
      };
    if (!o) {
      var s = va({
        page: t.subject.page,
        withPlaceholder: l,
        axis: t.axis,
        frame: t.frame,
      });
      return T({}, t, { subject: s });
    }
    var u = a ? Lt(o.scroll.max, a) : o.scroll.max,
      c = sE(o, u),
      d = va({
        page: t.subject.page,
        withPlaceholder: l,
        axis: t.axis,
        frame: c,
      });
    return T({}, t, { subject: d, frame: c });
  },
  F7 = function (t) {
    var n = t.subject.withPlaceholder;
    n || ne(!1);
    var r = t.frame;
    if (!r) {
      var o = va({
        page: t.subject.page,
        axis: t.axis,
        frame: null,
        withPlaceholder: null,
      });
      return T({}, t, { subject: o });
    }
    var i = n.oldFrameMaxScroll;
    i || ne(!1);
    var a = sE(r, i),
      l = va({
        page: t.subject.page,
        axis: t.axis,
        frame: a,
        withPlaceholder: null,
      });
    return T({}, t, { subject: l, frame: a });
  },
  j7 = function (e) {
    var t = e.previousPageBorderBoxCenter,
      n = e.moveRelativeTo,
      r = e.insideDestination,
      o = e.draggable,
      i = e.draggables,
      a = e.destination,
      l = e.viewport,
      s = e.afterCritical;
    if (!n) {
      if (r.length) return null;
      var u = {
          displaced: ts,
          displacedBy: tE,
          at: {
            type: "REORDER",
            destination: { droppableId: a.descriptor.id, index: 0 },
          },
        },
        c = sf({
          impact: u,
          draggable: o,
          droppable: a,
          draggables: i,
          afterCritical: s,
        }),
        d = Ea(o, a) ? a : uE(a, o, i),
        f = lE({
          draggable: o,
          destination: d,
          newPageBorderBoxCenter: c,
          viewport: l.frame,
          withDroppableDisplacement: !1,
          onlyOnMainAxis: !0,
        });
      return f ? u : null;
    }
    var p = t[a.axis.line] <= n.page.borderBox.center[a.axis.line],
      h = (function () {
        var x = n.descriptor.index;
        return n.descriptor.id === o.descriptor.id || p ? x : x + 1;
      })(),
      g = Ms(a.axis, o.displaceBy);
    return Rc({
      draggable: o,
      insideDestination: r,
      destination: a,
      viewport: l,
      displacedBy: g,
      last: ts,
      index: h,
    });
  },
  z7 = function (e) {
    var t = e.isMovingForward,
      n = e.previousPageBorderBoxCenter,
      r = e.draggable,
      o = e.isOver,
      i = e.draggables,
      a = e.droppables,
      l = e.viewport,
      s = e.afterCritical,
      u = M7({
        isMovingForward: t,
        pageBorderBoxCenter: n,
        source: o,
        droppables: a,
        viewport: l,
      });
    if (!u) return null;
    var c = Ra(u.descriptor.id, i),
      d = L7({
        pageBorderBoxCenter: n,
        viewport: l,
        destination: u,
        insideDestination: c,
        afterCritical: s,
      }),
      f = j7({
        previousPageBorderBoxCenter: n,
        destination: u,
        draggable: r,
        draggables: i,
        moveRelativeTo: d,
        insideDestination: c,
        viewport: l,
        afterCritical: s,
      });
    if (!f) return null;
    var p = sf({
        impact: f,
        draggable: r,
        droppable: u,
        draggables: i,
        afterCritical: s,
      }),
      h = fg({ pageBorderBoxCenter: p, draggable: r, viewport: l });
    return { clientSelection: h, impact: f, scrollJumpRequest: null };
  },
  _n = function (e) {
    var t = e.at;
    return t
      ? t.type === "REORDER"
        ? t.destination.droppableId
        : t.combine.droppableId
      : null;
  },
  U7 = function (t, n) {
    var r = _n(t);
    return r ? n[r] : null;
  },
  V7 = function (e) {
    var t = e.state,
      n = e.type,
      r = U7(t.impact, t.dimensions.droppables),
      o = !!r,
      i = t.dimensions.droppables[t.critical.droppable.id],
      a = r || i,
      l = a.axis.direction,
      s =
        (l === "vertical" && (n === "MOVE_UP" || n === "MOVE_DOWN")) ||
        (l === "horizontal" && (n === "MOVE_LEFT" || n === "MOVE_RIGHT"));
    if (s && !o) return null;
    var u = n === "MOVE_DOWN" || n === "MOVE_RIGHT",
      c = t.dimensions.draggables[t.critical.draggable.id],
      d = t.current.page.borderBoxCenter,
      f = t.dimensions,
      p = f.draggables,
      h = f.droppables;
    return s
      ? O7({
          isMovingForward: u,
          previousPageBorderBoxCenter: d,
          draggable: c,
          destination: a,
          draggables: p,
          viewport: t.viewport,
          previousClientSelection: t.current.client.selection,
          previousImpact: t.impact,
          afterCritical: t.afterCritical,
        })
      : z7({
          isMovingForward: u,
          previousPageBorderBoxCenter: d,
          draggable: c,
          isOver: a,
          draggables: p,
          droppables: h,
          viewport: t.viewport,
          afterCritical: t.afterCritical,
        });
  };
function Lo(e) {
  return e.phase === "DRAGGING" || e.phase === "COLLECTING";
}
function cE(e) {
  var t = Hn(e.top, e.bottom),
    n = Hn(e.left, e.right);
  return function (o) {
    return t(o.y) && n(o.x);
  };
}
function W7(e, t) {
  return (
    e.left < t.right && e.right > t.left && e.top < t.bottom && e.bottom > t.top
  );
}
function H7(e) {
  var t = e.pageBorderBox,
    n = e.draggable,
    r = e.candidates,
    o = n.page.borderBox.center,
    i = r
      .map(function (a) {
        var l = a.axis,
          s = oi(
            a.axis.line,
            t.center[l.line],
            a.page.borderBox.center[l.crossAxisLine]
          );
        return { id: a.descriptor.id, distance: es(o, s) };
      })
      .sort(function (a, l) {
        return l.distance - a.distance;
      });
  return i[0] ? i[0].id : null;
}
function G7(e) {
  var t = e.pageBorderBox,
    n = e.draggable,
    r = e.droppables,
    o = of(r).filter(function (i) {
      if (!i.isEnabled) return !1;
      var a = i.subject.active;
      if (!a || !W7(t, a)) return !1;
      if (cE(a)(t.center)) return !0;
      var l = i.axis,
        s = a.center[l.crossAxisLine],
        u = t[l.crossAxisStart],
        c = t[l.crossAxisEnd],
        d = Hn(a[l.crossAxisStart], a[l.crossAxisEnd]),
        f = d(u),
        p = d(c);
      return !f && !p ? !0 : f ? u < s : c > s;
    });
  return o.length
    ? o.length === 1
      ? o[0].descriptor.id
      : H7({ pageBorderBox: t, draggable: n, candidates: o })
    : null;
}
var dE = function (t, n) {
    return lr(Os(t, n));
  },
  K7 = function (e, t) {
    var n = e.frame;
    return n ? dE(t, n.scroll.diff.value) : t;
  };
function fE(e) {
  var t = e.displaced,
    n = e.id;
  return !!(t.visible[n] || t.invisible[n]);
}
function q7(e) {
  var t = e.draggable,
    n = e.closest,
    r = e.inHomeList;
  return n
    ? r && n.descriptor.index > t.descriptor.index
      ? n.descriptor.index - 1
      : n.descriptor.index
    : null;
}
var Y7 = function (e) {
    var t = e.pageBorderBoxWithDroppableScroll,
      n = e.draggable,
      r = e.destination,
      o = e.insideDestination,
      i = e.last,
      a = e.viewport,
      l = e.afterCritical,
      s = r.axis,
      u = Ms(r.axis, n.displaceBy),
      c = u.value,
      d = t[s.start],
      f = t[s.end],
      p = lf(n, o),
      h = Do(p, function (x) {
        var v = x.descriptor.id,
          m = x.page.borderBox.center[s.line],
          y = Co(v, l),
          b = fE({ displaced: i, id: v });
        return y ? (b ? f <= m : d < m - c) : b ? f <= m + c : d < m;
      }),
      g = q7({ draggable: n, closest: h, inHomeList: Ea(n, r) });
    return Rc({
      draggable: n,
      insideDestination: o,
      destination: r,
      viewport: a,
      last: i,
      displacedBy: u,
      index: g,
    });
  },
  X7 = 4,
  Q7 = function (e) {
    var t = e.draggable,
      n = e.pageBorderBoxWithDroppableScroll,
      r = e.previousImpact,
      o = e.destination,
      i = e.insideDestination,
      a = e.afterCritical;
    if (!o.isCombineEnabled) return null;
    var l = o.axis,
      s = Ms(o.axis, t.displaceBy),
      u = s.value,
      c = n[l.start],
      d = n[l.end],
      f = lf(t, i),
      p = Do(f, function (g) {
        var x = g.descriptor.id,
          v = g.page.borderBox,
          m = v[l.size],
          y = m / X7,
          b = Co(x, a),
          C = fE({ displaced: r.displaced, id: x });
        return b
          ? C
            ? d > v[l.start] + y && d < v[l.end] - y
            : c > v[l.start] - u + y && c < v[l.end] - u - y
          : C
          ? d > v[l.start] + u + y && d < v[l.end] + u - y
          : c > v[l.start] + y && c < v[l.end] - y;
      });
    if (!p) return null;
    var h = {
      displacedBy: s,
      displaced: r.displaced,
      at: {
        type: "COMBINE",
        combine: { draggableId: p.descriptor.id, droppableId: o.descriptor.id },
      },
    };
    return h;
  },
  pE = function (e) {
    var t = e.pageOffset,
      n = e.draggable,
      r = e.draggables,
      o = e.droppables,
      i = e.previousImpact,
      a = e.viewport,
      l = e.afterCritical,
      s = dE(n.page.borderBox, t),
      u = G7({ pageBorderBox: s, draggable: n, droppables: o });
    if (!u) return d7;
    var c = o[u],
      d = Ra(c.descriptor.id, r),
      f = K7(c, s);
    return (
      Q7({
        pageBorderBoxWithDroppableScroll: f,
        draggable: n,
        previousImpact: i,
        destination: c,
        insideDestination: d,
        afterCritical: l,
      }) ||
      Y7({
        pageBorderBoxWithDroppableScroll: f,
        draggable: n,
        destination: c,
        insideDestination: d,
        last: i.displaced,
        viewport: a,
        afterCritical: l,
      })
    );
  },
  pg = function (e, t) {
    var n;
    return T({}, e, ((n = {}), (n[t.descriptor.id] = t), n));
  },
  Z7 = function (t) {
    var n = t.previousImpact,
      r = t.impact,
      o = t.droppables,
      i = _n(n),
      a = _n(r);
    if (!i || i === a) return o;
    var l = o[i];
    if (!l.subject.withPlaceholder) return o;
    var s = F7(l);
    return pg(o, s);
  },
  J7 = function (e) {
    var t = e.draggable,
      n = e.draggables,
      r = e.droppables,
      o = e.previousImpact,
      i = e.impact,
      a = Z7({ previousImpact: o, impact: i, droppables: r }),
      l = _n(i);
    if (!l) return a;
    var s = r[l];
    if (Ea(t, s) || s.subject.withPlaceholder) return a;
    var u = uE(s, t, n);
    return pg(a, u);
  },
  Rl = function (e) {
    var t = e.state,
      n = e.clientSelection,
      r = e.dimensions,
      o = e.viewport,
      i = e.impact,
      a = e.scrollJumpRequest,
      l = o || t.viewport,
      s = r || t.dimensions,
      u = n || t.current.client.selection,
      c = Rn(u, t.initial.client.selection),
      d = {
        offset: c,
        selection: u,
        borderBoxCenter: Lt(t.initial.client.borderBoxCenter, c),
      },
      f = {
        selection: Lt(d.selection, l.scroll.current),
        borderBoxCenter: Lt(d.borderBoxCenter, l.scroll.current),
        offset: Lt(d.offset, l.scroll.diff.value),
      },
      p = { client: d, page: f };
    if (t.phase === "COLLECTING")
      return T({ phase: "COLLECTING" }, t, {
        dimensions: s,
        viewport: l,
        current: p,
      });
    var h = s.draggables[t.critical.draggable.id],
      g =
        i ||
        pE({
          pageOffset: f.offset,
          draggable: h,
          draggables: s.draggables,
          droppables: s.droppables,
          previousImpact: t.impact,
          viewport: l,
          afterCritical: t.afterCritical,
        }),
      x = J7({
        draggable: h,
        impact: g,
        previousImpact: t.impact,
        draggables: s.draggables,
        droppables: s.droppables,
      }),
      v = T({}, t, {
        current: p,
        dimensions: { draggables: s.draggables, droppables: x },
        impact: g,
        viewport: l,
        scrollJumpRequest: a || null,
        forceShouldAnimate: a ? !1 : null,
      });
    return v;
  };
function e9(e, t) {
  return e.map(function (n) {
    return t[n];
  });
}
var vE = function (e) {
    var t = e.impact,
      n = e.viewport,
      r = e.draggables,
      o = e.destination,
      i = e.forceShouldAnimate,
      a = t.displaced,
      l = e9(a.all, r),
      s = ns({
        afterDragging: l,
        destination: o,
        displacedBy: t.displacedBy,
        viewport: n.frame,
        forceShouldAnimate: i,
        last: a,
      });
    return T({}, t, { displaced: s });
  },
  hE = function (e) {
    var t = e.impact,
      n = e.draggable,
      r = e.droppable,
      o = e.draggables,
      i = e.viewport,
      a = e.afterCritical,
      l = sf({
        impact: t,
        draggable: n,
        draggables: o,
        droppable: r,
        afterCritical: a,
      });
    return fg({ pageBorderBoxCenter: l, draggable: n, viewport: i });
  },
  mE = function (e) {
    var t = e.state,
      n = e.dimensions,
      r = e.viewport;
    t.movementMode !== "SNAP" && ne(!1);
    var o = t.impact,
      i = r || t.viewport,
      a = n || t.dimensions,
      l = a.draggables,
      s = a.droppables,
      u = l[t.critical.draggable.id],
      c = _n(o);
    c || ne(!1);
    var d = s[c],
      f = vE({ impact: o, viewport: i, destination: d, draggables: l }),
      p = hE({
        impact: f,
        draggable: u,
        droppable: d,
        draggables: l,
        viewport: i,
        afterCritical: t.afterCritical,
      });
    return Rl({
      impact: f,
      clientSelection: p,
      state: t,
      dimensions: a,
      viewport: i,
    });
  },
  t9 = function (e) {
    return { index: e.index, droppableId: e.droppableId };
  },
  gE = function (e) {
    var t = e.draggable,
      n = e.home,
      r = e.draggables,
      o = e.viewport,
      i = Ms(n.axis, t.displaceBy),
      a = Ra(n.descriptor.id, r),
      l = a.indexOf(t);
    l === -1 && ne(!1);
    var s = a.slice(l + 1),
      u = s.reduce(function (p, h) {
        return (p[h.descriptor.id] = !0), p;
      }, {}),
      c = {
        inVirtualList: n.descriptor.mode === "virtual",
        displacedBy: i,
        effected: u,
      },
      d = ns({
        afterDragging: s,
        destination: n,
        displacedBy: i,
        last: null,
        viewport: o.frame,
        forceShouldAnimate: !1,
      }),
      f = {
        displaced: d,
        displacedBy: i,
        at: { type: "REORDER", destination: t9(t.descriptor) },
      };
    return { impact: f, afterCritical: c };
  },
  n9 = function (e, t) {
    return { draggables: e.draggables, droppables: pg(e.droppables, t) };
  },
  r9 = function (e) {
    var t = e.draggable,
      n = e.offset,
      r = e.initialWindowScroll,
      o = bc(t.client, n),
      i = xc(o, r),
      a = T({}, t, {
        placeholder: T({}, t.placeholder, { client: o }),
        client: o,
        page: i,
      });
    return a;
  },
  o9 = function (e) {
    var t = e.frame;
    return t || ne(!1), t;
  },
  i9 = function (e) {
    var t = e.additions,
      n = e.updatedDroppables,
      r = e.viewport,
      o = r.scroll.diff.value;
    return t.map(function (i) {
      var a = i.descriptor.droppableId,
        l = n[a],
        s = o9(l),
        u = s.scroll.diff.value,
        c = Lt(o, u),
        d = r9({
          draggable: i,
          offset: c,
          initialWindowScroll: r.scroll.initial,
        });
      return d;
    });
  },
  a9 = function (e) {
    var t = e.state,
      n = e.published,
      r = n.modified.map(function (y) {
        var b = t.dimensions.droppables[y.droppableId],
          C = ag(b, y.scroll);
        return C;
      }),
      o = T({}, t.dimensions.droppables, {}, JR(r)),
      i = eE(
        i9({
          additions: n.additions,
          updatedDroppables: o,
          viewport: t.viewport,
        })
      ),
      a = T({}, t.dimensions.draggables, {}, i);
    n.removals.forEach(function (y) {
      delete a[y];
    });
    var l = { droppables: o, draggables: a },
      s = _n(t.impact),
      u = s ? l.droppables[s] : null,
      c = l.draggables[t.critical.draggable.id],
      d = l.droppables[t.critical.droppable.id],
      f = gE({ draggable: c, home: d, draggables: a, viewport: t.viewport }),
      p = f.impact,
      h = f.afterCritical,
      g = u && u.isCombineEnabled ? t.impact : p,
      x = pE({
        pageOffset: t.current.page.offset,
        draggable: l.draggables[t.critical.draggable.id],
        draggables: l.draggables,
        droppables: l.droppables,
        previousImpact: g,
        viewport: t.viewport,
        afterCritical: h,
      }),
      v = T({ phase: "DRAGGING" }, t, {
        phase: "DRAGGING",
        impact: x,
        onLiftImpact: p,
        dimensions: l,
        afterCritical: h,
        forceShouldAnimate: !1,
      });
    if (t.phase === "COLLECTING") return v;
    var m = T({ phase: "DROP_PENDING" }, v, {
      phase: "DROP_PENDING",
      reason: t.reason,
      isWaiting: !1,
    });
    return m;
  },
  Wv = function (t) {
    return t.movementMode === "SNAP";
  },
  dp = function (t, n, r) {
    var o = n9(t.dimensions, n);
    return !Wv(t) || r
      ? Rl({ state: t, dimensions: o })
      : mE({ state: t, dimensions: o });
  };
function fp(e) {
  return e.isDragging && e.movementMode === "SNAP"
    ? T({ phase: "DRAGGING" }, e, { scrollJumpRequest: null })
    : e;
}
var X1 = { phase: "IDLE", completed: null, shouldFlush: !1 },
  l9 = function (e, t) {
    if ((e === void 0 && (e = X1), t.type === "FLUSH"))
      return T({}, X1, { shouldFlush: !0 });
    if (t.type === "INITIAL_PUBLISH") {
      e.phase !== "IDLE" && ne(!1);
      var n = t.payload,
        r = n.critical,
        o = n.clientSelection,
        i = n.viewport,
        a = n.dimensions,
        l = n.movementMode,
        s = a.draggables[r.draggable.id],
        u = a.droppables[r.droppable.id],
        c = {
          selection: o,
          borderBoxCenter: s.client.borderBox.center,
          offset: kt,
        },
        d = {
          client: c,
          page: {
            selection: Lt(c.selection, i.scroll.initial),
            borderBoxCenter: Lt(c.selection, i.scroll.initial),
            offset: Lt(c.selection, i.scroll.diff.value),
          },
        },
        f = of(a.droppables).every(function (ye) {
          return !ye.isFixedOnPage;
        }),
        p = gE({
          draggable: s,
          home: u,
          draggables: a.draggables,
          viewport: i,
        }),
        h = p.impact,
        g = p.afterCritical,
        x = {
          phase: "DRAGGING",
          isDragging: !0,
          critical: r,
          movementMode: l,
          dimensions: a,
          initial: d,
          current: d,
          isWindowScrollAllowed: f,
          impact: h,
          afterCritical: g,
          onLiftImpact: h,
          viewport: i,
          scrollJumpRequest: null,
          forceShouldAnimate: null,
        };
      return x;
    }
    if (t.type === "COLLECTION_STARTING") {
      if (e.phase === "COLLECTING" || e.phase === "DROP_PENDING") return e;
      e.phase !== "DRAGGING" && ne(!1);
      var v = T({ phase: "COLLECTING" }, e, { phase: "COLLECTING" });
      return v;
    }
    if (t.type === "PUBLISH_WHILE_DRAGGING")
      return (
        e.phase === "COLLECTING" || e.phase === "DROP_PENDING" || ne(!1),
        a9({ state: e, published: t.payload })
      );
    if (t.type === "MOVE") {
      if (e.phase === "DROP_PENDING") return e;
      Lo(e) || ne(!1);
      var m = t.payload.client;
      return yo(m, e.current.client.selection)
        ? e
        : Rl({ state: e, clientSelection: m, impact: Wv(e) ? e.impact : null });
    }
    if (t.type === "UPDATE_DROPPABLE_SCROLL") {
      if (e.phase === "DROP_PENDING" || e.phase === "COLLECTING") return fp(e);
      Lo(e) || ne(!1);
      var y = t.payload,
        b = y.id,
        C = y.newScroll,
        R = e.dimensions.droppables[b];
      if (!R) return e;
      var E = ag(R, C);
      return dp(e, E, !1);
    }
    if (t.type === "UPDATE_DROPPABLE_IS_ENABLED") {
      if (e.phase === "DROP_PENDING") return e;
      Lo(e) || ne(!1);
      var D = t.payload,
        A = D.id,
        I = D.isEnabled,
        M = e.dimensions.droppables[A];
      M || ne(!1), M.isEnabled === I && ne(!1);
      var J = T({}, M, { isEnabled: I });
      return dp(e, J, !0);
    }
    if (t.type === "UPDATE_DROPPABLE_IS_COMBINE_ENABLED") {
      if (e.phase === "DROP_PENDING") return e;
      Lo(e) || ne(!1);
      var V = t.payload,
        j = V.id,
        z = V.isCombineEnabled,
        q = e.dimensions.droppables[j];
      q || ne(!1), q.isCombineEnabled === z && ne(!1);
      var re = T({}, q, { isCombineEnabled: z });
      return dp(e, re, !0);
    }
    if (t.type === "MOVE_BY_WINDOW_SCROLL") {
      if (e.phase === "DROP_PENDING" || e.phase === "DROP_ANIMATING") return e;
      Lo(e) || ne(!1), e.isWindowScrollAllowed || ne(!1);
      var U = t.payload.newScroll;
      if (yo(e.viewport.scroll.current, U)) return fp(e);
      var X = aE(e.viewport, U);
      return Wv(e)
        ? mE({ state: e, viewport: X })
        : Rl({ state: e, viewport: X });
    }
    if (t.type === "UPDATE_VIEWPORT_MAX_SCROLL") {
      if (!Lo(e)) return e;
      var W = t.payload.maxScroll;
      if (yo(W, e.viewport.scroll.max)) return e;
      var ee = T({}, e.viewport, {
        scroll: T({}, e.viewport.scroll, { max: W }),
      });
      return T({ phase: "DRAGGING" }, e, { viewport: ee });
    }
    if (
      t.type === "MOVE_UP" ||
      t.type === "MOVE_DOWN" ||
      t.type === "MOVE_LEFT" ||
      t.type === "MOVE_RIGHT"
    ) {
      if (e.phase === "COLLECTING" || e.phase === "DROP_PENDING") return e;
      e.phase !== "DRAGGING" && ne(!1);
      var k = V7({ state: e, type: t.type });
      return k
        ? Rl({
            state: e,
            impact: k.impact,
            clientSelection: k.clientSelection,
            scrollJumpRequest: k.scrollJumpRequest,
          })
        : e;
    }
    if (t.type === "DROP_PENDING") {
      var L = t.payload.reason;
      e.phase !== "COLLECTING" && ne(!1);
      var O = T({ phase: "DROP_PENDING" }, e, {
        phase: "DROP_PENDING",
        isWaiting: !0,
        reason: L,
      });
      return O;
    }
    if (t.type === "DROP_ANIMATE") {
      var H = t.payload,
        Y = H.completed,
        se = H.dropDuration,
        ie = H.newHomeClientOffset;
      e.phase === "DRAGGING" || e.phase === "DROP_PENDING" || ne(!1);
      var te = {
        phase: "DROP_ANIMATING",
        completed: Y,
        dropDuration: se,
        newHomeClientOffset: ie,
        dimensions: e.dimensions,
      };
      return te;
    }
    if (t.type === "DROP_COMPLETE") {
      var Se = t.payload.completed;
      return { phase: "IDLE", completed: Se, shouldFlush: !1 };
    }
    return e;
  },
  s9 = function (t) {
    return { type: "BEFORE_INITIAL_CAPTURE", payload: t };
  },
  u9 = function (t) {
    return { type: "LIFT", payload: t };
  },
  c9 = function (t) {
    return { type: "INITIAL_PUBLISH", payload: t };
  },
  d9 = function (t) {
    return { type: "PUBLISH_WHILE_DRAGGING", payload: t };
  },
  f9 = function () {
    return { type: "COLLECTION_STARTING", payload: null };
  },
  p9 = function (t) {
    return { type: "UPDATE_DROPPABLE_SCROLL", payload: t };
  },
  v9 = function (t) {
    return { type: "UPDATE_DROPPABLE_IS_ENABLED", payload: t };
  },
  h9 = function (t) {
    return { type: "UPDATE_DROPPABLE_IS_COMBINE_ENABLED", payload: t };
  },
  yE = function (t) {
    return { type: "MOVE", payload: t };
  },
  m9 = function (t) {
    return { type: "MOVE_BY_WINDOW_SCROLL", payload: t };
  },
  g9 = function (t) {
    return { type: "UPDATE_VIEWPORT_MAX_SCROLL", payload: t };
  },
  y9 = function () {
    return { type: "MOVE_UP", payload: null };
  },
  b9 = function () {
    return { type: "MOVE_DOWN", payload: null };
  },
  x9 = function () {
    return { type: "MOVE_RIGHT", payload: null };
  },
  S9 = function () {
    return { type: "MOVE_LEFT", payload: null };
  },
  vg = function () {
    return { type: "FLUSH", payload: null };
  },
  w9 = function (t) {
    return { type: "DROP_ANIMATE", payload: t };
  },
  hg = function (t) {
    return { type: "DROP_COMPLETE", payload: t };
  },
  bE = function (t) {
    return { type: "DROP", payload: t };
  },
  C9 = function (t) {
    return { type: "DROP_PENDING", payload: t };
  },
  xE = function () {
    return { type: "DROP_ANIMATION_FINISHED", payload: null };
  },
  R9 = function (e) {
    return function (t) {
      var n = t.getState,
        r = t.dispatch;
      return function (o) {
        return function (i) {
          if (i.type !== "LIFT") {
            o(i);
            return;
          }
          var a = i.payload,
            l = a.id,
            s = a.clientSelection,
            u = a.movementMode,
            c = n();
          c.phase === "DROP_ANIMATING" && r(hg({ completed: c.completed })),
            n().phase !== "IDLE" && ne(!1),
            r(vg()),
            r(s9({ draggableId: l, movementMode: u }));
          var d = { shouldPublishImmediately: u === "SNAP" },
            f = { draggableId: l, scrollOptions: d },
            p = e.startPublishing(f),
            h = p.critical,
            g = p.dimensions,
            x = p.viewport;
          r(
            c9({
              critical: h,
              dimensions: g,
              clientSelection: s,
              movementMode: u,
              viewport: x,
            })
          );
        };
      };
    };
  },
  E9 = function (e) {
    return function () {
      return function (t) {
        return function (n) {
          n.type === "INITIAL_PUBLISH" && e.dragging(),
            n.type === "DROP_ANIMATE" &&
              e.dropping(n.payload.completed.result.reason),
            (n.type === "FLUSH" || n.type === "DROP_COMPLETE") && e.resting(),
            t(n);
        };
      };
    };
  },
  mg = {
    outOfTheWay: "cubic-bezier(0.2, 0, 0, 1)",
    drop: "cubic-bezier(.2,1,.1,1)",
  },
  rs = { opacity: { drop: 0, combining: 0.7 }, scale: { drop: 0.75 } },
  gg = { outOfTheWay: 0.2, minDropTime: 0.33, maxDropTime: 0.55 },
  Ao = gg.outOfTheWay + "s " + mg.outOfTheWay,
  El = {
    fluid: "opacity " + Ao,
    snap: "transform " + Ao + ", opacity " + Ao,
    drop: function (t) {
      var n = t + "s " + mg.drop;
      return "transform " + n + ", opacity " + n;
    },
    outOfTheWay: "transform " + Ao,
    placeholder: "height " + Ao + ", width " + Ao + ", margin " + Ao,
  },
  Q1 = function (t) {
    return yo(t, kt) ? null : "translate(" + t.x + "px, " + t.y + "px)";
  },
  Hv = {
    moveTo: Q1,
    drop: function (t, n) {
      var r = Q1(t);
      return r ? (n ? r + " scale(" + rs.scale.drop + ")" : r) : null;
    },
  },
  Gv = gg.minDropTime,
  SE = gg.maxDropTime,
  T9 = SE - Gv,
  Z1 = 1500,
  _9 = 0.6,
  P9 = function (e) {
    var t = e.current,
      n = e.destination,
      r = e.reason,
      o = es(t, n);
    if (o <= 0) return Gv;
    if (o >= Z1) return SE;
    var i = o / Z1,
      a = Gv + T9 * i,
      l = r === "CANCEL" ? a * _9 : a;
    return Number(l.toFixed(2));
  },
  k9 = function (e) {
    var t = e.impact,
      n = e.draggable,
      r = e.dimensions,
      o = e.viewport,
      i = e.afterCritical,
      a = r.draggables,
      l = r.droppables,
      s = _n(t),
      u = s ? l[s] : null,
      c = l[n.descriptor.droppableId],
      d = hE({
        impact: t,
        draggable: n,
        draggables: a,
        afterCritical: i,
        droppable: u || c,
        viewport: o,
      }),
      f = Rn(d, n.client.borderBox.center);
    return f;
  },
  D9 = function (e) {
    var t = e.draggables,
      n = e.reason,
      r = e.lastImpact,
      o = e.home,
      i = e.viewport,
      a = e.onLiftImpact;
    if (!r.at || n !== "DROP") {
      var l = vE({
        draggables: t,
        impact: a,
        destination: o,
        viewport: i,
        forceShouldAnimate: !0,
      });
      return { impact: l, didDropInsideDroppable: !1 };
    }
    if (r.at.type === "REORDER")
      return { impact: r, didDropInsideDroppable: !0 };
    var s = T({}, r, { displaced: ts });
    return { impact: s, didDropInsideDroppable: !0 };
  },
  I9 = function (e) {
    var t = e.getState,
      n = e.dispatch;
    return function (r) {
      return function (o) {
        if (o.type !== "DROP") {
          r(o);
          return;
        }
        var i = t(),
          a = o.payload.reason;
        if (i.phase === "COLLECTING") {
          n(C9({ reason: a }));
          return;
        }
        if (i.phase !== "IDLE") {
          var l = i.phase === "DROP_PENDING" && i.isWaiting;
          l && ne(!1),
            i.phase === "DRAGGING" || i.phase === "DROP_PENDING" || ne(!1);
          var s = i.critical,
            u = i.dimensions,
            c = u.draggables[i.critical.draggable.id],
            d = D9({
              reason: a,
              lastImpact: i.impact,
              afterCritical: i.afterCritical,
              onLiftImpact: i.onLiftImpact,
              home: i.dimensions.droppables[i.critical.droppable.id],
              viewport: i.viewport,
              draggables: i.dimensions.draggables,
            }),
            f = d.impact,
            p = d.didDropInsideDroppable,
            h = p ? sg(f) : null,
            g = p ? af(f) : null,
            x = { index: s.draggable.index, droppableId: s.droppable.id },
            v = {
              draggableId: c.descriptor.id,
              type: c.descriptor.type,
              source: x,
              reason: a,
              mode: i.movementMode,
              destination: h,
              combine: g,
            },
            m = k9({
              impact: f,
              draggable: c,
              dimensions: u,
              viewport: i.viewport,
              afterCritical: i.afterCritical,
            }),
            y = {
              critical: i.critical,
              afterCritical: i.afterCritical,
              result: v,
              impact: f,
            },
            b = !yo(i.current.client.offset, m) || !!v.combine;
          if (!b) {
            n(hg({ completed: y }));
            return;
          }
          var C = P9({
              current: i.current.client.offset,
              destination: m,
              reason: a,
            }),
            R = { newHomeClientOffset: m, dropDuration: C, completed: y };
          n(w9(R));
        }
      };
    };
  },
  wE = function () {
    return { x: window.pageXOffset, y: window.pageYOffset };
  };
function A9(e) {
  return {
    eventName: "scroll",
    options: { passive: !0, capture: !1 },
    fn: function (n) {
      (n.target !== window && n.target !== window.document) || e();
    },
  };
}
function N9(e) {
  var t = e.onWindowScroll;
  function n() {
    t(wE());
  }
  var r = Jl(n),
    o = A9(r),
    i = go;
  function a() {
    return i !== go;
  }
  function l() {
    a() && ne(!1), (i = Un(window, [o]));
  }
  function s() {
    a() || ne(!1), r.cancel(), i(), (i = go);
  }
  return { start: l, stop: s, isActive: a };
}
var O9 = function (t) {
    return (
      t.type === "DROP_COMPLETE" ||
      t.type === "DROP_ANIMATE" ||
      t.type === "FLUSH"
    );
  },
  M9 = function (e) {
    var t = N9({
      onWindowScroll: function (r) {
        e.dispatch(m9({ newScroll: r }));
      },
    });
    return function (n) {
      return function (r) {
        !t.isActive() && r.type === "INITIAL_PUBLISH" && t.start(),
          t.isActive() && O9(r) && t.stop(),
          n(r);
      };
    };
  },
  $9 = function (e) {
    var t = !1,
      n = !1,
      r = setTimeout(function () {
        n = !0;
      }),
      o = function (a) {
        t || n || ((t = !0), e(a), clearTimeout(r));
      };
    return (
      (o.wasCalled = function () {
        return t;
      }),
      o
    );
  },
  L9 = function () {
    var e = [],
      t = function (i) {
        var a = lg(e, function (u) {
          return u.timerId === i;
        });
        a === -1 && ne(!1);
        var l = e.splice(a, 1),
          s = l[0];
        s.callback();
      },
      n = function (i) {
        var a = setTimeout(function () {
            return t(a);
          }),
          l = { timerId: a, callback: i };
        e.push(l);
      },
      r = function () {
        if (e.length) {
          var i = [].concat(e);
          (e.length = 0),
            i.forEach(function (a) {
              clearTimeout(a.timerId), a.callback();
            });
        }
      };
    return { add: n, flush: r };
  },
  B9 = function (t, n) {
    return t == null && n == null
      ? !0
      : t == null || n == null
      ? !1
      : t.droppableId === n.droppableId && t.index === n.index;
  },
  F9 = function (t, n) {
    return t == null && n == null
      ? !0
      : t == null || n == null
      ? !1
      : t.draggableId === n.draggableId && t.droppableId === n.droppableId;
  },
  j9 = function (t, n) {
    if (t === n) return !0;
    var r =
        t.draggable.id === n.draggable.id &&
        t.draggable.droppableId === n.draggable.droppableId &&
        t.draggable.type === n.draggable.type &&
        t.draggable.index === n.draggable.index,
      o =
        t.droppable.id === n.droppable.id &&
        t.droppable.type === n.droppable.type;
    return r && o;
  },
  Ya = function (t, n) {
    n();
  },
  fu = function (t, n) {
    return {
      draggableId: t.draggable.id,
      type: t.droppable.type,
      source: { droppableId: t.droppable.id, index: t.draggable.index },
      mode: n,
    };
  },
  pp = function (t, n, r, o) {
    if (!t) {
      r(o(n));
      return;
    }
    var i = $9(r),
      a = { announce: i };
    t(n, a), i.wasCalled() || r(o(n));
  },
  z9 = function (e, t) {
    var n = L9(),
      r = null,
      o = function (f, p) {
        r && ne(!1),
          Ya("onBeforeCapture", function () {
            var h = e().onBeforeCapture;
            if (h) {
              var g = { draggableId: f, mode: p };
              h(g);
            }
          });
      },
      i = function (f, p) {
        r && ne(!1),
          Ya("onBeforeDragStart", function () {
            var h = e().onBeforeDragStart;
            h && h(fu(f, p));
          });
      },
      a = function (f, p) {
        r && ne(!1);
        var h = fu(f, p);
        (r = {
          mode: p,
          lastCritical: f,
          lastLocation: h.source,
          lastCombine: null,
        }),
          n.add(function () {
            Ya("onDragStart", function () {
              return pp(e().onDragStart, h, t, $u.onDragStart);
            });
          });
      },
      l = function (f, p) {
        var h = sg(p),
          g = af(p);
        r || ne(!1);
        var x = !j9(f, r.lastCritical);
        x && (r.lastCritical = f);
        var v = !B9(r.lastLocation, h);
        v && (r.lastLocation = h);
        var m = !F9(r.lastCombine, g);
        if ((m && (r.lastCombine = g), !(!x && !v && !m))) {
          var y = T({}, fu(f, r.mode), { combine: g, destination: h });
          n.add(function () {
            Ya("onDragUpdate", function () {
              return pp(e().onDragUpdate, y, t, $u.onDragUpdate);
            });
          });
        }
      },
      s = function () {
        r || ne(!1), n.flush();
      },
      u = function (f) {
        r || ne(!1),
          (r = null),
          Ya("onDragEnd", function () {
            return pp(e().onDragEnd, f, t, $u.onDragEnd);
          });
      },
      c = function () {
        if (r) {
          var f = T({}, fu(r.lastCritical, r.mode), {
            combine: null,
            destination: null,
            reason: "CANCEL",
          });
          u(f);
        }
      };
    return {
      beforeCapture: o,
      beforeStart: i,
      start: a,
      update: l,
      flush: s,
      drop: u,
      abort: c,
    };
  },
  U9 = function (e, t) {
    var n = z9(e, t);
    return function (r) {
      return function (o) {
        return function (i) {
          if (i.type === "BEFORE_INITIAL_CAPTURE") {
            n.beforeCapture(i.payload.draggableId, i.payload.movementMode);
            return;
          }
          if (i.type === "INITIAL_PUBLISH") {
            var a = i.payload.critical;
            n.beforeStart(a, i.payload.movementMode),
              o(i),
              n.start(a, i.payload.movementMode);
            return;
          }
          if (i.type === "DROP_COMPLETE") {
            var l = i.payload.completed.result;
            n.flush(), o(i), n.drop(l);
            return;
          }
          if ((o(i), i.type === "FLUSH")) {
            n.abort();
            return;
          }
          var s = r.getState();
          s.phase === "DRAGGING" && n.update(s.critical, s.impact);
        };
      };
    };
  },
  V9 = function (e) {
    return function (t) {
      return function (n) {
        if (n.type !== "DROP_ANIMATION_FINISHED") {
          t(n);
          return;
        }
        var r = e.getState();
        r.phase !== "DROP_ANIMATING" && ne(!1),
          e.dispatch(hg({ completed: r.completed }));
      };
    };
  },
  W9 = function (e) {
    var t = null,
      n = null;
    function r() {
      n && (cancelAnimationFrame(n), (n = null)), t && (t(), (t = null));
    }
    return function (o) {
      return function (i) {
        if (
          ((i.type === "FLUSH" ||
            i.type === "DROP_COMPLETE" ||
            i.type === "DROP_ANIMATION_FINISHED") &&
            r(),
          o(i),
          i.type === "DROP_ANIMATE")
        ) {
          var a = {
            eventName: "scroll",
            options: { capture: !0, passive: !1, once: !0 },
            fn: function () {
              var s = e.getState();
              s.phase === "DROP_ANIMATING" && e.dispatch(xE());
            },
          };
          n = requestAnimationFrame(function () {
            (n = null), (t = Un(window, [a]));
          });
        }
      };
    };
  },
  H9 = function (e) {
    return function () {
      return function (t) {
        return function (n) {
          (n.type === "DROP_COMPLETE" ||
            n.type === "FLUSH" ||
            n.type === "DROP_ANIMATE") &&
            e.stopPublishing(),
            t(n);
        };
      };
    };
  },
  G9 = function (e) {
    var t = !1;
    return function () {
      return function (n) {
        return function (r) {
          if (r.type === "INITIAL_PUBLISH") {
            (t = !0),
              e.tryRecordFocus(r.payload.critical.draggable.id),
              n(r),
              e.tryRestoreFocusRecorded();
            return;
          }
          if ((n(r), !!t)) {
            if (r.type === "FLUSH") {
              (t = !1), e.tryRestoreFocusRecorded();
              return;
            }
            if (r.type === "DROP_COMPLETE") {
              t = !1;
              var o = r.payload.completed.result;
              o.combine &&
                e.tryShiftRecord(o.draggableId, o.combine.draggableId),
                e.tryRestoreFocusRecorded();
            }
          }
        };
      };
    };
  },
  K9 = function (t) {
    return (
      t.type === "DROP_COMPLETE" ||
      t.type === "DROP_ANIMATE" ||
      t.type === "FLUSH"
    );
  },
  q9 = function (e) {
    return function (t) {
      return function (n) {
        return function (r) {
          if (K9(r)) {
            e.stop(), n(r);
            return;
          }
          if (r.type === "INITIAL_PUBLISH") {
            n(r);
            var o = t.getState();
            o.phase !== "DRAGGING" && ne(!1), e.start(o);
            return;
          }
          n(r), e.scroll(t.getState());
        };
      };
    };
  },
  Y9 = function (e) {
    return function (t) {
      return function (n) {
        if ((t(n), n.type === "PUBLISH_WHILE_DRAGGING")) {
          var r = e.getState();
          r.phase === "DROP_PENDING" &&
            (r.isWaiting || e.dispatch(bE({ reason: r.reason })));
        }
      };
    };
  },
  X9 = AR,
  Q9 = function (e) {
    var t = e.dimensionMarshal,
      n = e.focusMarshal,
      r = e.styleMarshal,
      o = e.getResponders,
      i = e.announce,
      a = e.autoScroller;
    return IR(
      l9,
      X9(Xj(E9(r), H9(t), R9(t), I9, V9, W9, Y9, q9(a), M9, G9(n), U9(o, i)))
    );
  },
  vp = function () {
    return { additions: {}, removals: {}, modified: {} };
  };
function Z9(e) {
  var t = e.registry,
    n = e.callbacks,
    r = vp(),
    o = null,
    i = function () {
      o ||
        (n.collectionStarting(),
        (o = requestAnimationFrame(function () {
          o = null;
          var c = r,
            d = c.additions,
            f = c.removals,
            p = c.modified,
            h = Object.keys(d)
              .map(function (v) {
                return t.draggable.getById(v).getDimension(kt);
              })
              .sort(function (v, m) {
                return v.descriptor.index - m.descriptor.index;
              }),
            g = Object.keys(p).map(function (v) {
              var m = t.droppable.getById(v),
                y = m.callbacks.getScrollWhileDragging();
              return { droppableId: v, scroll: y };
            }),
            x = { additions: h, removals: Object.keys(f), modified: g };
          (r = vp()), n.publish(x);
        })));
    },
    a = function (c) {
      var d = c.descriptor.id;
      (r.additions[d] = c),
        (r.modified[c.descriptor.droppableId] = !0),
        r.removals[d] && delete r.removals[d],
        i();
    },
    l = function (c) {
      var d = c.descriptor;
      (r.removals[d.id] = !0),
        (r.modified[d.droppableId] = !0),
        r.additions[d.id] && delete r.additions[d.id],
        i();
    },
    s = function () {
      o && (cancelAnimationFrame(o), (o = null), (r = vp()));
    };
  return { add: a, remove: l, stop: s };
}
var CE = function (e) {
    var t = e.scrollHeight,
      n = e.scrollWidth,
      r = e.height,
      o = e.width,
      i = Rn({ x: n, y: t }, { x: o, y: r }),
      a = { x: Math.max(0, i.x), y: Math.max(0, i.y) };
    return a;
  },
  RE = function () {
    var e = document.documentElement;
    return e || ne(!1), e;
  },
  EE = function () {
    var e = RE(),
      t = CE({
        scrollHeight: e.scrollHeight,
        scrollWidth: e.scrollWidth,
        width: e.clientWidth,
        height: e.clientHeight,
      });
    return t;
  },
  J9 = function () {
    var e = wE(),
      t = EE(),
      n = e.y,
      r = e.x,
      o = RE(),
      i = o.clientWidth,
      a = o.clientHeight,
      l = r + i,
      s = n + a,
      u = lr({ top: n, left: r, right: l, bottom: s }),
      c = {
        frame: u,
        scroll: {
          initial: e,
          current: e,
          max: t,
          diff: { value: kt, displacement: kt },
        },
      };
    return c;
  },
  eU = function (e) {
    var t = e.critical,
      n = e.scrollOptions,
      r = e.registry,
      o = J9(),
      i = o.scroll.current,
      a = t.droppable,
      l = r.droppable.getAllByType(a.type).map(function (d) {
        return d.callbacks.getDimensionAndWatchScroll(i, n);
      }),
      s = r.draggable.getAllByType(t.draggable.type).map(function (d) {
        return d.getDimension(i);
      }),
      u = { draggables: eE(s), droppables: JR(l) },
      c = { dimensions: u, critical: t, viewport: o };
    return c;
  };
function J1(e, t, n) {
  if (n.descriptor.id === t.id || n.descriptor.type !== t.type) return !1;
  var r = e.droppable.getById(n.descriptor.droppableId);
  return r.descriptor.mode === "virtual";
}
var tU = function (e, t) {
    var n = null,
      r = Z9({
        callbacks: {
          publish: t.publishWhileDragging,
          collectionStarting: t.collectionStarting,
        },
        registry: e,
      }),
      o = function (p, h) {
        e.droppable.exists(p) || ne(!1),
          n && t.updateDroppableIsEnabled({ id: p, isEnabled: h });
      },
      i = function (p, h) {
        n &&
          (e.droppable.exists(p) || ne(!1),
          t.updateDroppableIsCombineEnabled({ id: p, isCombineEnabled: h }));
      },
      a = function (p, h) {
        n &&
          (e.droppable.exists(p) || ne(!1),
          t.updateDroppableScroll({ id: p, newScroll: h }));
      },
      l = function (p, h) {
        n && e.droppable.getById(p).callbacks.scroll(h);
      },
      s = function () {
        if (n) {
          r.stop();
          var p = n.critical.droppable;
          e.droppable.getAllByType(p.type).forEach(function (h) {
            return h.callbacks.dragStopped();
          }),
            n.unsubscribe(),
            (n = null);
        }
      },
      u = function (p) {
        n || ne(!1);
        var h = n.critical.draggable;
        p.type === "ADDITION" && J1(e, h, p.value) && r.add(p.value),
          p.type === "REMOVAL" && J1(e, h, p.value) && r.remove(p.value);
      },
      c = function (p) {
        n && ne(!1);
        var h = e.draggable.getById(p.draggableId),
          g = e.droppable.getById(h.descriptor.droppableId),
          x = { draggable: h.descriptor, droppable: g.descriptor },
          v = e.subscribe(u);
        return (
          (n = { critical: x, unsubscribe: v }),
          eU({ critical: x, registry: e, scrollOptions: p.scrollOptions })
        );
      },
      d = {
        updateDroppableIsEnabled: o,
        updateDroppableIsCombineEnabled: i,
        scrollDroppable: l,
        updateDroppableScroll: a,
        startPublishing: c,
        stopPublishing: s,
      };
    return d;
  },
  TE = function (e, t) {
    return e.phase === "IDLE"
      ? !0
      : e.phase !== "DROP_ANIMATING" || e.completed.result.draggableId === t
      ? !1
      : e.completed.result.reason === "DROP";
  },
  nU = function (e) {
    window.scrollBy(e.x, e.y);
  },
  rU = Pt(function (e) {
    return of(e).filter(function (t) {
      return !(!t.isEnabled || !t.frame);
    });
  }),
  oU = function (t, n) {
    var r = Do(rU(n), function (o) {
      return o.frame || ne(!1), cE(o.frame.pageMarginBox)(t);
    });
    return r;
  },
  iU = function (e) {
    var t = e.center,
      n = e.destination,
      r = e.droppables;
    if (n) {
      var o = r[n];
      return o.frame ? o : null;
    }
    var i = oU(t, r);
    return i;
  },
  bo = {
    startFromPercentage: 0.25,
    maxScrollAtPercentage: 0.05,
    maxPixelScroll: 28,
    ease: function (t) {
      return Math.pow(t, 2);
    },
    durationDampening: { stopDampeningAt: 1200, accelerateAt: 360 },
  },
  aU = function (e, t) {
    var n = e[t.size] * bo.startFromPercentage,
      r = e[t.size] * bo.maxScrollAtPercentage,
      o = { startScrollingFrom: n, maxScrollValueAt: r };
    return o;
  },
  _E = function (e) {
    var t = e.startOfRange,
      n = e.endOfRange,
      r = e.current,
      o = n - t;
    if (o === 0) return 0;
    var i = r - t,
      a = i / o;
    return a;
  },
  yg = 1,
  lU = function (e, t) {
    if (e > t.startScrollingFrom) return 0;
    if (e <= t.maxScrollValueAt) return bo.maxPixelScroll;
    if (e === t.startScrollingFrom) return yg;
    var n = _E({
        startOfRange: t.maxScrollValueAt,
        endOfRange: t.startScrollingFrom,
        current: e,
      }),
      r = 1 - n,
      o = bo.maxPixelScroll * bo.ease(r);
    return Math.ceil(o);
  },
  eb = bo.durationDampening.accelerateAt,
  tb = bo.durationDampening.stopDampeningAt,
  sU = function (e, t) {
    var n = t,
      r = tb,
      o = Date.now(),
      i = o - n;
    if (i >= tb) return e;
    if (i < eb) return yg;
    var a = _E({ startOfRange: eb, endOfRange: r, current: i }),
      l = e * bo.ease(a);
    return Math.ceil(l);
  },
  nb = function (e) {
    var t = e.distanceToEdge,
      n = e.thresholds,
      r = e.dragStartTime,
      o = e.shouldUseTimeDampening,
      i = lU(t, n);
    return i === 0 ? 0 : o ? Math.max(sU(i, r), yg) : i;
  },
  rb = function (e) {
    var t = e.container,
      n = e.distanceToEdges,
      r = e.dragStartTime,
      o = e.axis,
      i = e.shouldUseTimeDampening,
      a = aU(t, o),
      l = n[o.end] < n[o.start];
    return l
      ? nb({
          distanceToEdge: n[o.end],
          thresholds: a,
          dragStartTime: r,
          shouldUseTimeDampening: i,
        })
      : -1 *
          nb({
            distanceToEdge: n[o.start],
            thresholds: a,
            dragStartTime: r,
            shouldUseTimeDampening: i,
          });
  },
  uU = function (e) {
    var t = e.container,
      n = e.subject,
      r = e.proposedScroll,
      o = n.height > t.height,
      i = n.width > t.width;
    return !i && !o ? r : i && o ? null : { x: i ? 0 : r.x, y: o ? 0 : r.y };
  },
  cU = QR(function (e) {
    return e === 0 ? 0 : e;
  }),
  PE = function (e) {
    var t = e.dragStartTime,
      n = e.container,
      r = e.subject,
      o = e.center,
      i = e.shouldUseTimeDampening,
      a = {
        top: o.y - n.top,
        right: n.right - o.x,
        bottom: n.bottom - o.y,
        left: o.x - n.left,
      },
      l = rb({
        container: n,
        distanceToEdges: a,
        dragStartTime: t,
        axis: ug,
        shouldUseTimeDampening: i,
      }),
      s = rb({
        container: n,
        distanceToEdges: a,
        dragStartTime: t,
        axis: rE,
        shouldUseTimeDampening: i,
      }),
      u = cU({ x: s, y: l });
    if (yo(u, kt)) return null;
    var c = uU({ container: n, subject: r, proposedScroll: u });
    return c ? (yo(c, kt) ? null : c) : null;
  },
  dU = QR(function (e) {
    return e === 0 ? 0 : e > 0 ? 1 : -1;
  }),
  bg = (function () {
    var e = function (n, r) {
      return n < 0 ? n : n > r ? n - r : 0;
    };
    return function (t) {
      var n = t.current,
        r = t.max,
        o = t.change,
        i = Lt(n, o),
        a = { x: e(i.x, r.x), y: e(i.y, r.y) };
      return yo(a, kt) ? null : a;
    };
  })(),
  kE = function (t) {
    var n = t.max,
      r = t.current,
      o = t.change,
      i = { x: Math.max(r.x, n.x), y: Math.max(r.y, n.y) },
      a = dU(o),
      l = bg({ max: i, current: r, change: a });
    return !l || (a.x !== 0 && l.x === 0) || (a.y !== 0 && l.y === 0);
  },
  xg = function (t, n) {
    return kE({ current: t.scroll.current, max: t.scroll.max, change: n });
  },
  fU = function (t, n) {
    if (!xg(t, n)) return null;
    var r = t.scroll.max,
      o = t.scroll.current;
    return bg({ current: o, max: r, change: n });
  },
  Sg = function (t, n) {
    var r = t.frame;
    return r
      ? kE({ current: r.scroll.current, max: r.scroll.max, change: n })
      : !1;
  },
  pU = function (t, n) {
    var r = t.frame;
    return !r || !Sg(t, n)
      ? null
      : bg({ current: r.scroll.current, max: r.scroll.max, change: n });
  },
  vU = function (e) {
    var t = e.viewport,
      n = e.subject,
      r = e.center,
      o = e.dragStartTime,
      i = e.shouldUseTimeDampening,
      a = PE({
        dragStartTime: o,
        container: t.frame,
        subject: n,
        center: r,
        shouldUseTimeDampening: i,
      });
    return a && xg(t, a) ? a : null;
  },
  hU = function (e) {
    var t = e.droppable,
      n = e.subject,
      r = e.center,
      o = e.dragStartTime,
      i = e.shouldUseTimeDampening,
      a = t.frame;
    if (!a) return null;
    var l = PE({
      dragStartTime: o,
      container: a.pageMarginBox,
      subject: n,
      center: r,
      shouldUseTimeDampening: i,
    });
    return l && Sg(t, l) ? l : null;
  },
  ob = function (e) {
    var t = e.state,
      n = e.dragStartTime,
      r = e.shouldUseTimeDampening,
      o = e.scrollWindow,
      i = e.scrollDroppable,
      a = t.current.page.borderBoxCenter,
      l = t.dimensions.draggables[t.critical.draggable.id],
      s = l.page.marginBox;
    if (t.isWindowScrollAllowed) {
      var u = t.viewport,
        c = vU({
          dragStartTime: n,
          viewport: u,
          subject: s,
          center: a,
          shouldUseTimeDampening: r,
        });
      if (c) {
        o(c);
        return;
      }
    }
    var d = iU({
      center: a,
      destination: _n(t.impact),
      droppables: t.dimensions.droppables,
    });
    if (d) {
      var f = hU({
        dragStartTime: n,
        droppable: d,
        subject: s,
        center: a,
        shouldUseTimeDampening: r,
      });
      f && i(d.descriptor.id, f);
    }
  },
  mU = function (e) {
    var t = e.scrollWindow,
      n = e.scrollDroppable,
      r = Jl(t),
      o = Jl(n),
      i = null,
      a = function (c) {
        i || ne(!1);
        var d = i,
          f = d.shouldUseTimeDampening,
          p = d.dragStartTime;
        ob({
          state: c,
          scrollWindow: r,
          scrollDroppable: o,
          dragStartTime: p,
          shouldUseTimeDampening: f,
        });
      },
      l = function (c) {
        i && ne(!1);
        var d = Date.now(),
          f = !1,
          p = function () {
            f = !0;
          };
        ob({
          state: c,
          dragStartTime: 0,
          shouldUseTimeDampening: !1,
          scrollWindow: p,
          scrollDroppable: p,
        }),
          (i = { dragStartTime: d, shouldUseTimeDampening: f }),
          f && a(c);
      },
      s = function () {
        i && (r.cancel(), o.cancel(), (i = null));
      };
    return { start: l, stop: s, scroll: a };
  },
  gU = function (e) {
    var t = e.move,
      n = e.scrollDroppable,
      r = e.scrollWindow,
      o = function (u, c) {
        var d = Lt(u.current.client.selection, c);
        t({ client: d });
      },
      i = function (u, c) {
        if (!Sg(u, c)) return c;
        var d = pU(u, c);
        if (!d) return n(u.descriptor.id, c), null;
        var f = Rn(c, d);
        n(u.descriptor.id, f);
        var p = Rn(c, f);
        return p;
      },
      a = function (u, c, d) {
        if (!u || !xg(c, d)) return d;
        var f = fU(c, d);
        if (!f) return r(d), null;
        var p = Rn(d, f);
        r(p);
        var h = Rn(d, p);
        return h;
      },
      l = function (u) {
        var c = u.scrollJumpRequest;
        if (c) {
          var d = _n(u.impact);
          d || ne(!1);
          var f = i(u.dimensions.droppables[d], c);
          if (f) {
            var p = u.viewport,
              h = a(u.isWindowScrollAllowed, p, f);
            h && o(u, h);
          }
        }
      };
    return l;
  },
  yU = function (e) {
    var t = e.scrollDroppable,
      n = e.scrollWindow,
      r = e.move,
      o = mU({ scrollWindow: n, scrollDroppable: t }),
      i = gU({ move: r, scrollWindow: n, scrollDroppable: t }),
      a = function (u) {
        if (u.phase === "DRAGGING") {
          if (u.movementMode === "FLUID") {
            o.scroll(u);
            return;
          }
          u.scrollJumpRequest && i(u);
        }
      },
      l = { scroll: a, start: o.start, stop: o.stop };
    return l;
  },
  ha = "data-rbd",
  ma = (function () {
    var e = ha + "-drag-handle";
    return {
      base: e,
      draggableId: e + "-draggable-id",
      contextId: e + "-context-id",
    };
  })(),
  Kv = (function () {
    var e = ha + "-draggable";
    return { base: e, contextId: e + "-context-id", id: e + "-id" };
  })(),
  bU = (function () {
    var e = ha + "-droppable";
    return { base: e, contextId: e + "-context-id", id: e + "-id" };
  })(),
  ib = { contextId: ha + "-scroll-container-context-id" },
  xU = function (t) {
    return function (n) {
      return "[" + n + '="' + t + '"]';
    };
  },
  Xa = function (t, n) {
    return t
      .map(function (r) {
        var o = r.styles[n];
        return o ? r.selector + " { " + o + " }" : "";
      })
      .join(" ");
  },
  SU = "pointer-events: none;",
  wU = function (e) {
    var t = xU(e),
      n = (function () {
        var l = `
      cursor: -webkit-grab;
      cursor: grab;
    `;
        return {
          selector: t(ma.contextId),
          styles: {
            always: `
          -webkit-touch-callout: none;
          -webkit-tap-highlight-color: rgba(0,0,0,0);
          touch-action: manipulation;
        `,
            resting: l,
            dragging: SU,
            dropAnimating: l,
          },
        };
      })(),
      r = (function () {
        var l =
          `
      transition: ` +
          El.outOfTheWay +
          `;
    `;
        return {
          selector: t(Kv.contextId),
          styles: { dragging: l, dropAnimating: l, userCancel: l },
        };
      })(),
      o = {
        selector: t(bU.contextId),
        styles: { always: "overflow-anchor: none;" },
      },
      i = {
        selector: "body",
        styles: {
          dragging: `
        cursor: grabbing;
        cursor: -webkit-grabbing;
        user-select: none;
        -webkit-user-select: none;
        -moz-user-select: none;
        -ms-user-select: none;
        overflow-anchor: none;
      `,
        },
      },
      a = [r, n, o, i];
    return {
      always: Xa(a, "always"),
      resting: Xa(a, "resting"),
      dragging: Xa(a, "dragging"),
      dropAnimating: Xa(a, "dropAnimating"),
      userCancel: Xa(a, "userCancel"),
    };
  },
  Pn =
    typeof window < "u" &&
    typeof window.document < "u" &&
    typeof window.document.createElement < "u"
      ? S.useLayoutEffect
      : S.useEffect,
  hp = function () {
    var t = document.querySelector("head");
    return t || ne(!1), t;
  },
  ab = function (t) {
    var n = document.createElement("style");
    return t && n.setAttribute("nonce", t), (n.type = "text/css"), n;
  };
function CU(e, t) {
  var n = Ae(
      function () {
        return wU(e);
      },
      [e]
    ),
    r = S.useRef(null),
    o = S.useRef(null),
    i = ve(
      Pt(function (d) {
        var f = o.current;
        f || ne(!1), (f.textContent = d);
      }),
      []
    ),
    a = ve(function (d) {
      var f = r.current;
      f || ne(!1), (f.textContent = d);
    }, []);
  Pn(
    function () {
      (!r.current && !o.current) || ne(!1);
      var d = ab(t),
        f = ab(t);
      return (
        (r.current = d),
        (o.current = f),
        d.setAttribute(ha + "-always", e),
        f.setAttribute(ha + "-dynamic", e),
        hp().appendChild(d),
        hp().appendChild(f),
        a(n.always),
        i(n.resting),
        function () {
          var p = function (g) {
            var x = g.current;
            x || ne(!1), hp().removeChild(x), (g.current = null);
          };
          p(r), p(o);
        }
      );
    },
    [t, a, i, n.always, n.resting, e]
  );
  var l = ve(
      function () {
        return i(n.dragging);
      },
      [i, n.dragging]
    ),
    s = ve(
      function (d) {
        if (d === "DROP") {
          i(n.dropAnimating);
          return;
        }
        i(n.userCancel);
      },
      [i, n.dropAnimating, n.userCancel]
    ),
    u = ve(
      function () {
        o.current && i(n.resting);
      },
      [i, n.resting]
    ),
    c = Ae(
      function () {
        return { dragging: l, dropping: s, resting: u };
      },
      [l, s, u]
    );
  return c;
}
var DE = function (e) {
  return e && e.ownerDocument ? e.ownerDocument.defaultView : window;
};
function uf(e) {
  return e instanceof DE(e).HTMLElement;
}
function RU(e, t) {
  var n = "[" + ma.contextId + '="' + e + '"]',
    r = ZR(document.querySelectorAll(n));
  if (!r.length) return null;
  var o = Do(r, function (i) {
    return i.getAttribute(ma.draggableId) === t;
  });
  return !o || !uf(o) ? null : o;
}
function EU(e) {
  var t = S.useRef({}),
    n = S.useRef(null),
    r = S.useRef(null),
    o = S.useRef(!1),
    i = ve(function (f, p) {
      var h = { id: f, focus: p };
      return (
        (t.current[f] = h),
        function () {
          var x = t.current,
            v = x[f];
          v !== h && delete x[f];
        }
      );
    }, []),
    a = ve(
      function (f) {
        var p = RU(e, f);
        p && p !== document.activeElement && p.focus();
      },
      [e]
    ),
    l = ve(function (f, p) {
      n.current === f && (n.current = p);
    }, []),
    s = ve(
      function () {
        r.current ||
          (o.current &&
            (r.current = requestAnimationFrame(function () {
              r.current = null;
              var f = n.current;
              f && a(f);
            })));
      },
      [a]
    ),
    u = ve(function (f) {
      n.current = null;
      var p = document.activeElement;
      p && p.getAttribute(ma.draggableId) === f && (n.current = f);
    }, []);
  Pn(function () {
    return (
      (o.current = !0),
      function () {
        o.current = !1;
        var f = r.current;
        f && cancelAnimationFrame(f);
      }
    );
  }, []);
  var c = Ae(
    function () {
      return {
        register: i,
        tryRecordFocus: u,
        tryRestoreFocusRecorded: s,
        tryShiftRecord: l,
      };
    },
    [i, u, s, l]
  );
  return c;
}
function TU() {
  var e = { draggables: {}, droppables: {} },
    t = [];
  function n(d) {
    return (
      t.push(d),
      function () {
        var p = t.indexOf(d);
        p !== -1 && t.splice(p, 1);
      }
    );
  }
  function r(d) {
    t.length &&
      t.forEach(function (f) {
        return f(d);
      });
  }
  function o(d) {
    return e.draggables[d] || null;
  }
  function i(d) {
    var f = o(d);
    return f || ne(!1), f;
  }
  var a = {
    register: function (f) {
      (e.draggables[f.descriptor.id] = f), r({ type: "ADDITION", value: f });
    },
    update: function (f, p) {
      var h = e.draggables[p.descriptor.id];
      h &&
        h.uniqueId === f.uniqueId &&
        (delete e.draggables[p.descriptor.id],
        (e.draggables[f.descriptor.id] = f));
    },
    unregister: function (f) {
      var p = f.descriptor.id,
        h = o(p);
      h &&
        f.uniqueId === h.uniqueId &&
        (delete e.draggables[p], r({ type: "REMOVAL", value: f }));
    },
    getById: i,
    findById: o,
    exists: function (f) {
      return !!o(f);
    },
    getAllByType: function (f) {
      return Cc(e.draggables).filter(function (p) {
        return p.descriptor.type === f;
      });
    },
  };
  function l(d) {
    return e.droppables[d] || null;
  }
  function s(d) {
    var f = l(d);
    return f || ne(!1), f;
  }
  var u = {
    register: function (f) {
      e.droppables[f.descriptor.id] = f;
    },
    unregister: function (f) {
      var p = l(f.descriptor.id);
      p && f.uniqueId === p.uniqueId && delete e.droppables[f.descriptor.id];
    },
    getById: s,
    findById: l,
    exists: function (f) {
      return !!l(f);
    },
    getAllByType: function (f) {
      return Cc(e.droppables).filter(function (p) {
        return p.descriptor.type === f;
      });
    },
  };
  function c() {
    (e.draggables = {}), (e.droppables = {}), (t.length = 0);
  }
  return { draggable: a, droppable: u, subscribe: n, clean: c };
}
function _U() {
  var e = Ae(TU, []);
  return (
    S.useEffect(
      function () {
        return function () {
          requestAnimationFrame(e.clean);
        };
      },
      [e]
    ),
    e
  );
}
var wg = oe.createContext(null),
  Ec = function () {
    var e = document.body;
    return e || ne(!1), e;
  },
  PU = {
    position: "absolute",
    width: "1px",
    height: "1px",
    margin: "-1px",
    border: "0",
    padding: "0",
    overflow: "hidden",
    clip: "rect(0 0 0 0)",
    "clip-path": "inset(100%)",
  },
  kU = function (t) {
    return "rbd-announcement-" + t;
  };
function DU(e) {
  var t = Ae(
      function () {
        return kU(e);
      },
      [e]
    ),
    n = S.useRef(null);
  S.useEffect(
    function () {
      var i = document.createElement("div");
      return (
        (n.current = i),
        (i.id = t),
        i.setAttribute("aria-live", "assertive"),
        i.setAttribute("aria-atomic", "true"),
        T(i.style, PU),
        Ec().appendChild(i),
        function () {
          setTimeout(function () {
            var s = Ec();
            s.contains(i) && s.removeChild(i),
              i === n.current && (n.current = null);
          });
        }
      );
    },
    [t]
  );
  var r = ve(function (o) {
    var i = n.current;
    if (i) {
      i.textContent = o;
      return;
    }
  }, []);
  return r;
}
var IU = 0,
  AU = { separator: "::" };
function Cg(e, t) {
  return (
    t === void 0 && (t = AU),
    Ae(
      function () {
        return "" + e + t.separator + IU++;
      },
      [t.separator, e]
    )
  );
}
function NU(e) {
  var t = e.contextId,
    n = e.uniqueId;
  return "rbd-hidden-text-" + t + "-" + n;
}
function OU(e) {
  var t = e.contextId,
    n = e.text,
    r = Cg("hidden-text", { separator: "-" }),
    o = Ae(
      function () {
        return NU({ contextId: t, uniqueId: r });
      },
      [r, t]
    );
  return (
    S.useEffect(
      function () {
        var a = document.createElement("div");
        return (
          (a.id = o),
          (a.textContent = n),
          (a.style.display = "none"),
          Ec().appendChild(a),
          function () {
            var s = Ec();
            s.contains(a) && s.removeChild(a);
          }
        );
      },
      [o, n]
    ),
    o
  );
}
var cf = oe.createContext(null);
function IE(e) {
  var t = S.useRef(e);
  return (
    S.useEffect(function () {
      t.current = e;
    }),
    t
  );
}
function MU() {
  var e = null;
  function t() {
    return !!e;
  }
  function n(a) {
    return a === e;
  }
  function r(a) {
    e && ne(!1);
    var l = { abandon: a };
    return (e = l), l;
  }
  function o() {
    e || ne(!1), (e = null);
  }
  function i() {
    e && (e.abandon(), o());
  }
  return { isClaimed: t, isActive: n, claim: r, release: o, tryAbandon: i };
}
var $U = 9,
  LU = 13,
  Rg = 27,
  AE = 32,
  BU = 33,
  FU = 34,
  jU = 35,
  zU = 36,
  UU = 37,
  VU = 38,
  WU = 39,
  HU = 40,
  pu,
  GU = ((pu = {}), (pu[LU] = !0), (pu[$U] = !0), pu),
  NE = function (e) {
    GU[e.keyCode] && e.preventDefault();
  },
  df = (function () {
    var e = "visibilitychange";
    if (typeof document > "u") return e;
    var t = [e, "ms" + e, "webkit" + e, "moz" + e, "o" + e],
      n = Do(t, function (r) {
        return "on" + r in document;
      });
    return n || e;
  })(),
  OE = 0,
  lb = 5;
function KU(e, t) {
  return Math.abs(t.x - e.x) >= lb || Math.abs(t.y - e.y) >= lb;
}
var sb = { type: "IDLE" };
function qU(e) {
  var t = e.cancel,
    n = e.completed,
    r = e.getPhase,
    o = e.setPhase;
  return [
    {
      eventName: "mousemove",
      fn: function (a) {
        var l = a.button,
          s = a.clientX,
          u = a.clientY;
        if (l === OE) {
          var c = { x: s, y: u },
            d = r();
          if (d.type === "DRAGGING") {
            a.preventDefault(), d.actions.move(c);
            return;
          }
          d.type !== "PENDING" && ne(!1);
          var f = d.point;
          if (KU(f, c)) {
            a.preventDefault();
            var p = d.actions.fluidLift(c);
            o({ type: "DRAGGING", actions: p });
          }
        }
      },
    },
    {
      eventName: "mouseup",
      fn: function (a) {
        var l = r();
        if (l.type !== "DRAGGING") {
          t();
          return;
        }
        a.preventDefault(), l.actions.drop({ shouldBlockNextClick: !0 }), n();
      },
    },
    {
      eventName: "mousedown",
      fn: function (a) {
        r().type === "DRAGGING" && a.preventDefault(), t();
      },
    },
    {
      eventName: "keydown",
      fn: function (a) {
        var l = r();
        if (l.type === "PENDING") {
          t();
          return;
        }
        if (a.keyCode === Rg) {
          a.preventDefault(), t();
          return;
        }
        NE(a);
      },
    },
    { eventName: "resize", fn: t },
    {
      eventName: "scroll",
      options: { passive: !0, capture: !1 },
      fn: function () {
        r().type === "PENDING" && t();
      },
    },
    {
      eventName: "webkitmouseforcedown",
      fn: function (a) {
        var l = r();
        if (
          (l.type === "IDLE" && ne(!1), l.actions.shouldRespectForcePress())
        ) {
          t();
          return;
        }
        a.preventDefault();
      },
    },
    { eventName: df, fn: t },
  ];
}
function YU(e) {
  var t = S.useRef(sb),
    n = S.useRef(go),
    r = Ae(
      function () {
        return {
          eventName: "mousedown",
          fn: function (d) {
            if (
              !d.defaultPrevented &&
              d.button === OE &&
              !(d.ctrlKey || d.metaKey || d.shiftKey || d.altKey)
            ) {
              var f = e.findClosestDraggableId(d);
              if (f) {
                var p = e.tryGetLock(f, a, { sourceEvent: d });
                if (p) {
                  d.preventDefault();
                  var h = { x: d.clientX, y: d.clientY };
                  n.current(), u(p, h);
                }
              }
            }
          },
        };
      },
      [e]
    ),
    o = Ae(
      function () {
        return {
          eventName: "webkitmouseforcewillbegin",
          fn: function (d) {
            if (!d.defaultPrevented) {
              var f = e.findClosestDraggableId(d);
              if (f) {
                var p = e.findOptionsForDraggable(f);
                p &&
                  (p.shouldRespectForcePress ||
                    (e.canGetLock(f) && d.preventDefault()));
              }
            }
          },
        };
      },
      [e]
    ),
    i = ve(
      function () {
        var d = { passive: !1, capture: !0 };
        n.current = Un(window, [o, r], d);
      },
      [o, r]
    ),
    a = ve(
      function () {
        var c = t.current;
        c.type !== "IDLE" && ((t.current = sb), n.current(), i());
      },
      [i]
    ),
    l = ve(
      function () {
        var c = t.current;
        a(),
          c.type === "DRAGGING" &&
            c.actions.cancel({ shouldBlockNextClick: !0 }),
          c.type === "PENDING" && c.actions.abort();
      },
      [a]
    ),
    s = ve(
      function () {
        var d = { capture: !0, passive: !1 },
          f = qU({
            cancel: l,
            completed: a,
            getPhase: function () {
              return t.current;
            },
            setPhase: function (h) {
              t.current = h;
            },
          });
        n.current = Un(window, f, d);
      },
      [l, a]
    ),
    u = ve(
      function (d, f) {
        t.current.type !== "IDLE" && ne(!1),
          (t.current = { type: "PENDING", point: f, actions: d }),
          s();
      },
      [s]
    );
  Pn(
    function () {
      return (
        i(),
        function () {
          n.current();
        }
      );
    },
    [i]
  );
}
var Si;
function XU() {}
var QU =
  ((Si = {}), (Si[FU] = !0), (Si[BU] = !0), (Si[zU] = !0), (Si[jU] = !0), Si);
function ZU(e, t) {
  function n() {
    t(), e.cancel();
  }
  function r() {
    t(), e.drop();
  }
  return [
    {
      eventName: "keydown",
      fn: function (i) {
        if (i.keyCode === Rg) {
          i.preventDefault(), n();
          return;
        }
        if (i.keyCode === AE) {
          i.preventDefault(), r();
          return;
        }
        if (i.keyCode === HU) {
          i.preventDefault(), e.moveDown();
          return;
        }
        if (i.keyCode === VU) {
          i.preventDefault(), e.moveUp();
          return;
        }
        if (i.keyCode === WU) {
          i.preventDefault(), e.moveRight();
          return;
        }
        if (i.keyCode === UU) {
          i.preventDefault(), e.moveLeft();
          return;
        }
        if (QU[i.keyCode]) {
          i.preventDefault();
          return;
        }
        NE(i);
      },
    },
    { eventName: "mousedown", fn: n },
    { eventName: "mouseup", fn: n },
    { eventName: "click", fn: n },
    { eventName: "touchstart", fn: n },
    { eventName: "resize", fn: n },
    { eventName: "wheel", fn: n, options: { passive: !0 } },
    { eventName: df, fn: n },
  ];
}
function JU(e) {
  var t = S.useRef(XU),
    n = Ae(
      function () {
        return {
          eventName: "keydown",
          fn: function (i) {
            if (i.defaultPrevented || i.keyCode !== AE) return;
            var a = e.findClosestDraggableId(i);
            if (!a) return;
            var l = e.tryGetLock(a, c, { sourceEvent: i });
            if (!l) return;
            i.preventDefault();
            var s = !0,
              u = l.snapLift();
            t.current();
            function c() {
              s || ne(!1), (s = !1), t.current(), r();
            }
            t.current = Un(window, ZU(u, c), { capture: !0, passive: !1 });
          },
        };
      },
      [e]
    ),
    r = ve(
      function () {
        var i = { passive: !1, capture: !0 };
        t.current = Un(window, [n], i);
      },
      [n]
    );
  Pn(
    function () {
      return (
        r(),
        function () {
          t.current();
        }
      );
    },
    [r]
  );
}
var mp = { type: "IDLE" },
  eV = 120,
  tV = 0.15;
function nV(e) {
  var t = e.cancel,
    n = e.getPhase;
  return [
    { eventName: "orientationchange", fn: t },
    { eventName: "resize", fn: t },
    {
      eventName: "contextmenu",
      fn: function (o) {
        o.preventDefault();
      },
    },
    {
      eventName: "keydown",
      fn: function (o) {
        if (n().type !== "DRAGGING") {
          t();
          return;
        }
        o.keyCode === Rg && o.preventDefault(), t();
      },
    },
    { eventName: df, fn: t },
  ];
}
function rV(e) {
  var t = e.cancel,
    n = e.completed,
    r = e.getPhase;
  return [
    {
      eventName: "touchmove",
      options: { capture: !1 },
      fn: function (i) {
        var a = r();
        if (a.type !== "DRAGGING") {
          t();
          return;
        }
        a.hasMoved = !0;
        var l = i.touches[0],
          s = l.clientX,
          u = l.clientY,
          c = { x: s, y: u };
        i.preventDefault(), a.actions.move(c);
      },
    },
    {
      eventName: "touchend",
      fn: function (i) {
        var a = r();
        if (a.type !== "DRAGGING") {
          t();
          return;
        }
        i.preventDefault(), a.actions.drop({ shouldBlockNextClick: !0 }), n();
      },
    },
    {
      eventName: "touchcancel",
      fn: function (i) {
        if (r().type !== "DRAGGING") {
          t();
          return;
        }
        i.preventDefault(), t();
      },
    },
    {
      eventName: "touchforcechange",
      fn: function (i) {
        var a = r();
        a.type === "IDLE" && ne(!1);
        var l = i.touches[0];
        if (l) {
          var s = l.force >= tV;
          if (s) {
            var u = a.actions.shouldRespectForcePress();
            if (a.type === "PENDING") {
              u && t();
              return;
            }
            if (u) {
              if (a.hasMoved) {
                i.preventDefault();
                return;
              }
              t();
              return;
            }
            i.preventDefault();
          }
        }
      },
    },
    { eventName: df, fn: t },
  ];
}
function oV(e) {
  var t = S.useRef(mp),
    n = S.useRef(go),
    r = ve(function () {
      return t.current;
    }, []),
    o = ve(function (p) {
      t.current = p;
    }, []),
    i = Ae(
      function () {
        return {
          eventName: "touchstart",
          fn: function (p) {
            if (!p.defaultPrevented) {
              var h = e.findClosestDraggableId(p);
              if (h) {
                var g = e.tryGetLock(h, l, { sourceEvent: p });
                if (g) {
                  var x = p.touches[0],
                    v = x.clientX,
                    m = x.clientY,
                    y = { x: v, y: m };
                  n.current(), d(g, y);
                }
              }
            }
          },
        };
      },
      [e]
    ),
    a = ve(
      function () {
        var p = { capture: !0, passive: !1 };
        n.current = Un(window, [i], p);
      },
      [i]
    ),
    l = ve(
      function () {
        var f = t.current;
        f.type !== "IDLE" &&
          (f.type === "PENDING" && clearTimeout(f.longPressTimerId),
          o(mp),
          n.current(),
          a());
      },
      [a, o]
    ),
    s = ve(
      function () {
        var f = t.current;
        l(),
          f.type === "DRAGGING" &&
            f.actions.cancel({ shouldBlockNextClick: !0 }),
          f.type === "PENDING" && f.actions.abort();
      },
      [l]
    ),
    u = ve(
      function () {
        var p = { capture: !0, passive: !1 },
          h = { cancel: s, completed: l, getPhase: r },
          g = Un(window, rV(h), p),
          x = Un(window, nV(h), p);
        n.current = function () {
          g(), x();
        };
      },
      [s, r, l]
    ),
    c = ve(
      function () {
        var p = r();
        p.type !== "PENDING" && ne(!1);
        var h = p.actions.fluidLift(p.point);
        o({ type: "DRAGGING", actions: h, hasMoved: !1 });
      },
      [r, o]
    ),
    d = ve(
      function (p, h) {
        r().type !== "IDLE" && ne(!1);
        var g = setTimeout(c, eV);
        o({ type: "PENDING", point: h, actions: p, longPressTimerId: g }), u();
      },
      [u, r, o, c]
    );
  Pn(
    function () {
      return (
        a(),
        function () {
          n.current();
          var h = r();
          h.type === "PENDING" && (clearTimeout(h.longPressTimerId), o(mp));
        }
      );
    },
    [r, a, o]
  ),
    Pn(function () {
      var p = Un(window, [
        {
          eventName: "touchmove",
          fn: function () {},
          options: { capture: !1, passive: !1 },
        },
      ]);
      return p;
    }, []);
}
var iV = {
  input: !0,
  button: !0,
  textarea: !0,
  select: !0,
  option: !0,
  optgroup: !0,
  video: !0,
  audio: !0,
};
function ME(e, t) {
  if (t == null) return !1;
  var n = !!iV[t.tagName.toLowerCase()];
  if (n) return !0;
  var r = t.getAttribute("contenteditable");
  return r === "true" || r === "" ? !0 : t === e ? !1 : ME(e, t.parentElement);
}
function aV(e, t) {
  var n = t.target;
  return uf(n) ? ME(e, n) : !1;
}
var lV = function (e) {
  return lr(e.getBoundingClientRect()).center;
};
function sV(e) {
  return e instanceof DE(e).Element;
}
var uV = (function () {
  var e = "matches";
  if (typeof document > "u") return e;
  var t = [e, "msMatchesSelector", "webkitMatchesSelector"],
    n = Do(t, function (r) {
      return r in Element.prototype;
    });
  return n || e;
})();
function $E(e, t) {
  return e == null ? null : e[uV](t) ? e : $E(e.parentElement, t);
}
function cV(e, t) {
  return e.closest ? e.closest(t) : $E(e, t);
}
function dV(e) {
  return "[" + ma.contextId + '="' + e + '"]';
}
function fV(e, t) {
  var n = t.target;
  if (!sV(n)) return null;
  var r = dV(e),
    o = cV(n, r);
  return !o || !uf(o) ? null : o;
}
function pV(e, t) {
  var n = fV(e, t);
  return n ? n.getAttribute(ma.draggableId) : null;
}
function vV(e, t) {
  var n = "[" + Kv.contextId + '="' + e + '"]',
    r = ZR(document.querySelectorAll(n)),
    o = Do(r, function (i) {
      return i.getAttribute(Kv.id) === t;
    });
  return !o || !uf(o) ? null : o;
}
function hV(e) {
  e.preventDefault();
}
function vu(e) {
  var t = e.expected,
    n = e.phase,
    r = e.isLockActive;
  return e.shouldWarn, !(!r() || t !== n);
}
function LE(e) {
  var t = e.lockAPI,
    n = e.store,
    r = e.registry,
    o = e.draggableId;
  if (t.isClaimed()) return !1;
  var i = r.draggable.findById(o);
  return !(!i || !i.options.isEnabled || !TE(n.getState(), o));
}
function mV(e) {
  var t = e.lockAPI,
    n = e.contextId,
    r = e.store,
    o = e.registry,
    i = e.draggableId,
    a = e.forceSensorStop,
    l = e.sourceEvent,
    s = LE({ lockAPI: t, store: r, registry: o, draggableId: i });
  if (!s) return null;
  var u = o.draggable.getById(i),
    c = vV(n, u.descriptor.id);
  if (!c || (l && !u.options.canDragInteractiveElements && aV(c, l)))
    return null;
  var d = t.claim(a || go),
    f = "PRE_DRAG";
  function p() {
    return u.options.shouldRespectForcePress;
  }
  function h() {
    return t.isActive(d);
  }
  function g(R, E) {
    vu({ expected: R, phase: f, isLockActive: h, shouldWarn: !0 }) &&
      r.dispatch(E());
  }
  var x = g.bind(null, "DRAGGING");
  function v(R) {
    function E() {
      t.release(), (f = "COMPLETED");
    }
    f !== "PRE_DRAG" && (E(), f !== "PRE_DRAG" && ne(!1)),
      r.dispatch(u9(R.liftActionArgs)),
      (f = "DRAGGING");
    function D(A, I) {
      if (
        (I === void 0 && (I = { shouldBlockNextClick: !1 }),
        R.cleanup(),
        I.shouldBlockNextClick)
      ) {
        var M = Un(window, [
          {
            eventName: "click",
            fn: hV,
            options: { once: !0, passive: !1, capture: !0 },
          },
        ]);
        setTimeout(M);
      }
      E(), r.dispatch(bE({ reason: A }));
    }
    return T(
      {
        isActive: function () {
          return vu({
            expected: "DRAGGING",
            phase: f,
            isLockActive: h,
            shouldWarn: !1,
          });
        },
        shouldRespectForcePress: p,
        drop: function (I) {
          return D("DROP", I);
        },
        cancel: function (I) {
          return D("CANCEL", I);
        },
      },
      R.actions
    );
  }
  function m(R) {
    var E = Jl(function (A) {
        x(function () {
          return yE({ client: A });
        });
      }),
      D = v({
        liftActionArgs: { id: i, clientSelection: R, movementMode: "FLUID" },
        cleanup: function () {
          return E.cancel();
        },
        actions: { move: E },
      });
    return T({}, D, { move: E });
  }
  function y() {
    var R = {
      moveUp: function () {
        return x(y9);
      },
      moveRight: function () {
        return x(x9);
      },
      moveDown: function () {
        return x(b9);
      },
      moveLeft: function () {
        return x(S9);
      },
    };
    return v({
      liftActionArgs: { id: i, clientSelection: lV(c), movementMode: "SNAP" },
      cleanup: go,
      actions: R,
    });
  }
  function b() {
    var R = vu({
      expected: "PRE_DRAG",
      phase: f,
      isLockActive: h,
      shouldWarn: !0,
    });
    R && t.release();
  }
  var C = {
    isActive: function () {
      return vu({
        expected: "PRE_DRAG",
        phase: f,
        isLockActive: h,
        shouldWarn: !1,
      });
    },
    shouldRespectForcePress: p,
    fluidLift: m,
    snapLift: y,
    abort: b,
  };
  return C;
}
var gV = [YU, JU, oV];
function yV(e) {
  var t = e.contextId,
    n = e.store,
    r = e.registry,
    o = e.customSensors,
    i = e.enableDefaultSensors,
    a = [].concat(i ? gV : [], o || []),
    l = S.useState(function () {
      return MU();
    })[0],
    s = ve(
      function (m, y) {
        m.isDragging && !y.isDragging && l.tryAbandon();
      },
      [l]
    );
  Pn(
    function () {
      var m = n.getState(),
        y = n.subscribe(function () {
          var b = n.getState();
          s(m, b), (m = b);
        });
      return y;
    },
    [l, n, s]
  ),
    Pn(
      function () {
        return l.tryAbandon;
      },
      [l.tryAbandon]
    );
  for (
    var u = ve(
        function (v) {
          return LE({ lockAPI: l, registry: r, store: n, draggableId: v });
        },
        [l, r, n]
      ),
      c = ve(
        function (v, m, y) {
          return mV({
            lockAPI: l,
            registry: r,
            contextId: t,
            store: n,
            draggableId: v,
            forceSensorStop: m,
            sourceEvent: y && y.sourceEvent ? y.sourceEvent : null,
          });
        },
        [t, l, r, n]
      ),
      d = ve(
        function (v) {
          return pV(t, v);
        },
        [t]
      ),
      f = ve(
        function (v) {
          var m = r.draggable.findById(v);
          return m ? m.options : null;
        },
        [r.draggable]
      ),
      p = ve(
        function () {
          l.isClaimed() &&
            (l.tryAbandon(), n.getState().phase !== "IDLE" && n.dispatch(vg()));
        },
        [l, n]
      ),
      h = ve(l.isClaimed, [l]),
      g = Ae(
        function () {
          return {
            canGetLock: u,
            tryGetLock: c,
            findClosestDraggableId: d,
            findOptionsForDraggable: f,
            tryReleaseLock: p,
            isLockClaimed: h,
          };
        },
        [u, c, d, f, p, h]
      ),
      x = 0;
    x < a.length;
    x++
  )
    a[x](g);
}
var bV = function (t) {
  return {
    onBeforeCapture: t.onBeforeCapture,
    onBeforeDragStart: t.onBeforeDragStart,
    onDragStart: t.onDragStart,
    onDragEnd: t.onDragEnd,
    onDragUpdate: t.onDragUpdate,
  };
};
function Qa(e) {
  return e.current || ne(!1), e.current;
}
function xV(e) {
  var t = e.contextId,
    n = e.setCallbacks,
    r = e.sensors,
    o = e.nonce,
    i = e.dragHandleUsageInstructions,
    a = S.useRef(null),
    l = IE(e),
    s = ve(
      function () {
        return bV(l.current);
      },
      [l]
    ),
    u = DU(t),
    c = OU({ contextId: t, text: i }),
    d = CU(t, o),
    f = ve(function (A) {
      Qa(a).dispatch(A);
    }, []),
    p = Ae(
      function () {
        return M1(
          {
            publishWhileDragging: d9,
            updateDroppableScroll: p9,
            updateDroppableIsEnabled: v9,
            updateDroppableIsCombineEnabled: h9,
            collectionStarting: f9,
          },
          f
        );
      },
      [f]
    ),
    h = _U(),
    g = Ae(
      function () {
        return tU(h, p);
      },
      [h, p]
    ),
    x = Ae(
      function () {
        return yU(
          T(
            { scrollWindow: nU, scrollDroppable: g.scrollDroppable },
            M1({ move: yE }, f)
          )
        );
      },
      [g.scrollDroppable, f]
    ),
    v = EU(t),
    m = Ae(
      function () {
        return Q9({
          announce: u,
          autoScroller: x,
          dimensionMarshal: g,
          focusMarshal: v,
          getResponders: s,
          styleMarshal: d,
        });
      },
      [u, x, g, v, s, d]
    );
  a.current = m;
  var y = ve(function () {
      var A = Qa(a),
        I = A.getState();
      I.phase !== "IDLE" && A.dispatch(vg());
    }, []),
    b = ve(function () {
      var A = Qa(a).getState();
      return A.isDragging || A.phase === "DROP_ANIMATING";
    }, []),
    C = Ae(
      function () {
        return { isDragging: b, tryAbort: y };
      },
      [b, y]
    );
  n(C);
  var R = ve(function (A) {
      return TE(Qa(a).getState(), A);
    }, []),
    E = ve(function () {
      return Lo(Qa(a).getState());
    }, []),
    D = Ae(
      function () {
        return {
          marshal: g,
          focus: v,
          contextId: t,
          canLift: R,
          isMovementAllowed: E,
          dragHandleUsageInstructionsId: c,
          registry: h,
        };
      },
      [t, g, c, v, R, E, h]
    );
  return (
    yV({
      contextId: t,
      store: m,
      registry: h,
      customSensors: r,
      enableDefaultSensors: e.enableDefaultSensors !== !1,
    }),
    S.useEffect(
      function () {
        return y;
      },
      [y]
    ),
    oe.createElement(
      cf.Provider,
      { value: D },
      oe.createElement(tz, { context: wg, store: m }, e.children)
    )
  );
}
var SV = 0;
function wV() {
  return Ae(function () {
    return "" + SV++;
  }, []);
}
function CV(e) {
  var t = wV(),
    n = e.dragHandleUsageInstructions || $u.dragHandleUsageInstructions;
  return oe.createElement(Jz, null, function (r) {
    return oe.createElement(
      xV,
      {
        nonce: e.nonce,
        contextId: t,
        setCallbacks: r,
        dragHandleUsageInstructions: n,
        enableDefaultSensors: e.enableDefaultSensors,
        sensors: e.sensors,
        onBeforeCapture: e.onBeforeCapture,
        onBeforeDragStart: e.onBeforeDragStart,
        onDragStart: e.onDragStart,
        onDragUpdate: e.onDragUpdate,
        onDragEnd: e.onDragEnd,
      },
      e.children
    );
  });
}
var BE = function (t) {
    return function (n) {
      return t === n;
    };
  },
  RV = BE("scroll"),
  EV = BE("auto"),
  ub = function (t, n) {
    return n(t.overflowX) || n(t.overflowY);
  },
  TV = function (t) {
    var n = window.getComputedStyle(t),
      r = { overflowX: n.overflowX, overflowY: n.overflowY };
    return ub(r, RV) || ub(r, EV);
  },
  _V = function () {
    return !1;
  },
  PV = function e(t) {
    return t == null
      ? null
      : t === document.body
      ? _V()
        ? t
        : null
      : t === document.documentElement
      ? null
      : TV(t)
      ? t
      : e(t.parentElement);
  },
  qv = function (e) {
    return { x: e.scrollLeft, y: e.scrollTop };
  },
  kV = function e(t) {
    if (!t) return !1;
    var n = window.getComputedStyle(t);
    return n.position === "fixed" ? !0 : e(t.parentElement);
  },
  DV = function (e) {
    var t = PV(e),
      n = kV(e);
    return { closestScrollable: t, isFixedOnPage: n };
  },
  IV = function (e) {
    var t = e.descriptor,
      n = e.isEnabled,
      r = e.isCombineEnabled,
      o = e.isFixedOnPage,
      i = e.direction,
      a = e.client,
      l = e.page,
      s = e.closest,
      u = (function () {
        if (!s) return null;
        var p = s.scrollSize,
          h = s.client,
          g = CE({
            scrollHeight: p.scrollHeight,
            scrollWidth: p.scrollWidth,
            height: h.paddingBox.height,
            width: h.paddingBox.width,
          });
        return {
          pageMarginBox: s.page.marginBox,
          frameClient: h,
          scrollSize: p,
          shouldClipSubject: s.shouldClipSubject,
          scroll: {
            initial: s.scroll,
            current: s.scroll,
            max: g,
            diff: { value: kt, displacement: kt },
          },
        };
      })(),
      c = i === "vertical" ? ug : rE,
      d = va({ page: l, withPlaceholder: null, axis: c, frame: u }),
      f = {
        descriptor: t,
        isCombineEnabled: r,
        isFixedOnPage: o,
        axis: c,
        isEnabled: n,
        client: a,
        page: l,
        frame: u,
        subject: d,
      };
    return f;
  },
  AV = function (t, n) {
    var r = KR(t);
    if (!n || t !== n) return r;
    var o = r.paddingBox.top - n.scrollTop,
      i = r.paddingBox.left - n.scrollLeft,
      a = o + n.scrollHeight,
      l = i + n.scrollWidth,
      s = { top: o, right: l, bottom: a, left: i },
      u = og(s, r.border),
      c = ig({
        borderBox: u,
        margin: r.margin,
        border: r.border,
        padding: r.padding,
      });
    return c;
  },
  NV = function (e) {
    var t = e.ref,
      n = e.descriptor,
      r = e.env,
      o = e.windowScroll,
      i = e.direction,
      a = e.isDropDisabled,
      l = e.isCombineEnabled,
      s = e.shouldClipSubject,
      u = r.closestScrollable,
      c = AV(t, u),
      d = xc(c, o),
      f = (function () {
        if (!u) return null;
        var h = KR(u),
          g = { scrollHeight: u.scrollHeight, scrollWidth: u.scrollWidth };
        return {
          client: h,
          page: xc(h, o),
          scroll: qv(u),
          scrollSize: g,
          shouldClipSubject: s,
        };
      })(),
      p = IV({
        descriptor: n,
        isEnabled: !a,
        isCombineEnabled: l,
        isFixedOnPage: r.isFixedOnPage,
        direction: i,
        client: c,
        page: d,
        closest: f,
      });
    return p;
  },
  OV = { passive: !1 },
  MV = { passive: !0 },
  cb = function (e) {
    return e.shouldPublishImmediately ? OV : MV;
  };
function Tc(e) {
  var t = S.useContext(e);
  return t || ne(!1), t;
}
var hu = function (t) {
  return (t && t.env.closestScrollable) || null;
};
function $V(e) {
  var t = S.useRef(null),
    n = Tc(cf),
    r = Cg("droppable"),
    o = n.registry,
    i = n.marshal,
    a = IE(e),
    l = Ae(
      function () {
        return { id: e.droppableId, type: e.type, mode: e.mode };
      },
      [e.droppableId, e.mode, e.type]
    ),
    s = S.useRef(l),
    u = Ae(
      function () {
        return Pt(function (b, C) {
          t.current || ne(!1);
          var R = { x: b, y: C };
          i.updateDroppableScroll(l.id, R);
        });
      },
      [l.id, i]
    ),
    c = ve(function () {
      var b = t.current;
      return !b || !b.env.closestScrollable ? kt : qv(b.env.closestScrollable);
    }, []),
    d = ve(
      function () {
        var b = c();
        u(b.x, b.y);
      },
      [c, u]
    ),
    f = Ae(
      function () {
        return Jl(d);
      },
      [d]
    ),
    p = ve(
      function () {
        var b = t.current,
          C = hu(b);
        (b && C) || ne(!1);
        var R = b.scrollOptions;
        if (R.shouldPublishImmediately) {
          d();
          return;
        }
        f();
      },
      [f, d]
    ),
    h = ve(
      function (b, C) {
        t.current && ne(!1);
        var R = a.current,
          E = R.getDroppableRef();
        E || ne(!1);
        var D = DV(E),
          A = { ref: E, descriptor: l, env: D, scrollOptions: C };
        t.current = A;
        var I = NV({
            ref: E,
            descriptor: l,
            env: D,
            windowScroll: b,
            direction: R.direction,
            isDropDisabled: R.isDropDisabled,
            isCombineEnabled: R.isCombineEnabled,
            shouldClipSubject: !R.ignoreContainerClipping,
          }),
          M = D.closestScrollable;
        return (
          M &&
            (M.setAttribute(ib.contextId, n.contextId),
            M.addEventListener("scroll", p, cb(A.scrollOptions))),
          I
        );
      },
      [n.contextId, l, p, a]
    ),
    g = ve(function () {
      var b = t.current,
        C = hu(b);
      return (b && C) || ne(!1), qv(C);
    }, []),
    x = ve(
      function () {
        var b = t.current;
        b || ne(!1);
        var C = hu(b);
        (t.current = null),
          C &&
            (f.cancel(),
            C.removeAttribute(ib.contextId),
            C.removeEventListener("scroll", p, cb(b.scrollOptions)));
      },
      [p, f]
    ),
    v = ve(function (b) {
      var C = t.current;
      C || ne(!1);
      var R = hu(C);
      R || ne(!1), (R.scrollTop += b.y), (R.scrollLeft += b.x);
    }, []),
    m = Ae(
      function () {
        return {
          getDimensionAndWatchScroll: h,
          getScrollWhileDragging: g,
          dragStopped: x,
          scroll: v,
        };
      },
      [x, h, g, v]
    ),
    y = Ae(
      function () {
        return { uniqueId: r, descriptor: l, callbacks: m };
      },
      [m, l, r]
    );
  Pn(
    function () {
      return (
        (s.current = y.descriptor),
        o.droppable.register(y),
        function () {
          t.current && x(), o.droppable.unregister(y);
        }
      );
    },
    [m, l, x, y, i, o.droppable]
  ),
    Pn(
      function () {
        t.current &&
          i.updateDroppableIsEnabled(s.current.id, !e.isDropDisabled);
      },
      [e.isDropDisabled, i]
    ),
    Pn(
      function () {
        t.current &&
          i.updateDroppableIsCombineEnabled(s.current.id, e.isCombineEnabled);
      },
      [e.isCombineEnabled, i]
    );
}
function gp() {}
var db = { width: 0, height: 0, margin: i7 },
  LV = function (t) {
    var n = t.isAnimatingOpenOnMount,
      r = t.placeholder,
      o = t.animate;
    return n || o === "close"
      ? db
      : {
          height: r.client.borderBox.height,
          width: r.client.borderBox.width,
          margin: r.client.margin,
        };
  },
  BV = function (t) {
    var n = t.isAnimatingOpenOnMount,
      r = t.placeholder,
      o = t.animate,
      i = LV({ isAnimatingOpenOnMount: n, placeholder: r, animate: o });
    return {
      display: r.display,
      boxSizing: "border-box",
      width: i.width,
      height: i.height,
      marginTop: i.margin.top,
      marginRight: i.margin.right,
      marginBottom: i.margin.bottom,
      marginLeft: i.margin.left,
      flexShrink: "0",
      flexGrow: "0",
      pointerEvents: "none",
      transition: o !== "none" ? El.placeholder : null,
    };
  };
function FV(e) {
  var t = S.useRef(null),
    n = ve(function () {
      t.current && (clearTimeout(t.current), (t.current = null));
    }, []),
    r = e.animate,
    o = e.onTransitionEnd,
    i = e.onClose,
    a = e.contextId,
    l = S.useState(e.animate === "open"),
    s = l[0],
    u = l[1];
  S.useEffect(
    function () {
      return s
        ? r !== "open"
          ? (n(), u(!1), gp)
          : t.current
          ? gp
          : ((t.current = setTimeout(function () {
              (t.current = null), u(!1);
            })),
            n)
        : gp;
    },
    [r, s, n]
  );
  var c = ve(
      function (f) {
        f.propertyName === "height" && (o(), r === "close" && i());
      },
      [r, i, o]
    ),
    d = BV({
      isAnimatingOpenOnMount: s,
      animate: e.animate,
      placeholder: e.placeholder,
    });
  return oe.createElement(e.placeholder.tagName, {
    style: d,
    "data-rbd-placeholder-context-id": a,
    onTransitionEnd: c,
    ref: e.innerRef,
  });
}
var jV = oe.memo(FV),
  Eg = oe.createContext(null),
  zV = (function (e) {
    gd(t, e);
    function t() {
      for (var r, o = arguments.length, i = new Array(o), a = 0; a < o; a++)
        i[a] = arguments[a];
      return (
        (r = e.call.apply(e, [this].concat(i)) || this),
        (r.state = {
          isVisible: !!r.props.on,
          data: r.props.on,
          animate: r.props.shouldAnimate && r.props.on ? "open" : "none",
        }),
        (r.onClose = function () {
          r.state.animate === "close" && r.setState({ isVisible: !1 });
        }),
        r
      );
    }
    t.getDerivedStateFromProps = function (o, i) {
      return o.shouldAnimate
        ? o.on
          ? { isVisible: !0, data: o.on, animate: "open" }
          : i.isVisible
          ? { isVisible: !0, data: i.data, animate: "close" }
          : { isVisible: !1, animate: "close", data: null }
        : { isVisible: !!o.on, data: o.on, animate: "none" };
    };
    var n = t.prototype;
    return (
      (n.render = function () {
        if (!this.state.isVisible) return null;
        var o = {
          onClose: this.onClose,
          data: this.state.data,
          animate: this.state.animate,
        };
        return this.props.children(o);
      }),
      t
    );
  })(oe.PureComponent),
  fb = { dragging: 5e3, dropAnimating: 4500 },
  UV = function (t, n) {
    return n ? El.drop(n.duration) : t ? El.snap : El.fluid;
  },
  VV = function (t, n) {
    return t ? (n ? rs.opacity.drop : rs.opacity.combining) : null;
  },
  WV = function (t) {
    return t.forceShouldAnimate != null
      ? t.forceShouldAnimate
      : t.mode === "SNAP";
  };
function HV(e) {
  var t = e.dimension,
    n = t.client,
    r = e.offset,
    o = e.combineWith,
    i = e.dropping,
    a = !!o,
    l = WV(e),
    s = !!i,
    u = s ? Hv.drop(r, a) : Hv.moveTo(r),
    c = {
      position: "fixed",
      top: n.marginBox.top,
      left: n.marginBox.left,
      boxSizing: "border-box",
      width: n.borderBox.width,
      height: n.borderBox.height,
      transition: UV(l, i),
      transform: u,
      opacity: VV(a, s),
      zIndex: s ? fb.dropAnimating : fb.dragging,
      pointerEvents: "none",
    };
  return c;
}
function GV(e) {
  return {
    transform: Hv.moveTo(e.offset),
    transition: e.shouldAnimateDisplacement ? null : "none",
  };
}
function KV(e) {
  return e.type === "DRAGGING" ? HV(e) : GV(e);
}
function qV(e, t, n) {
  n === void 0 && (n = kt);
  var r = window.getComputedStyle(t),
    o = t.getBoundingClientRect(),
    i = GR(o, r),
    a = xc(i, n),
    l = { client: i, tagName: t.tagName.toLowerCase(), display: r.display },
    s = { x: i.marginBox.width, y: i.marginBox.height },
    u = { descriptor: e, placeholder: l, displaceBy: s, client: i, page: a };
  return u;
}
function YV(e) {
  var t = Cg("draggable"),
    n = e.descriptor,
    r = e.registry,
    o = e.getDraggableRef,
    i = e.canDragInteractiveElements,
    a = e.shouldRespectForcePress,
    l = e.isEnabled,
    s = Ae(
      function () {
        return {
          canDragInteractiveElements: i,
          shouldRespectForcePress: a,
          isEnabled: l,
        };
      },
      [i, l, a]
    ),
    u = ve(
      function (p) {
        var h = o();
        return h || ne(!1), qV(n, h, p);
      },
      [n, o]
    ),
    c = Ae(
      function () {
        return { uniqueId: t, descriptor: n, options: s, getDimension: u };
      },
      [n, u, s, t]
    ),
    d = S.useRef(c),
    f = S.useRef(!0);
  Pn(
    function () {
      return (
        r.draggable.register(d.current),
        function () {
          return r.draggable.unregister(d.current);
        }
      );
    },
    [r.draggable]
  ),
    Pn(
      function () {
        if (f.current) {
          f.current = !1;
          return;
        }
        var p = d.current;
        (d.current = c), r.draggable.update(c, p);
      },
      [c, r.draggable]
    );
}
function XV(e) {
  e.preventDefault();
}
function QV(e) {
  var t = S.useRef(null),
    n = ve(function (A) {
      t.current = A;
    }, []),
    r = ve(function () {
      return t.current;
    }, []),
    o = Tc(cf),
    i = o.contextId,
    a = o.dragHandleUsageInstructionsId,
    l = o.registry,
    s = Tc(Eg),
    u = s.type,
    c = s.droppableId,
    d = Ae(
      function () {
        return { id: e.draggableId, index: e.index, type: u, droppableId: c };
      },
      [e.draggableId, e.index, u, c]
    ),
    f = e.children,
    p = e.draggableId,
    h = e.isEnabled,
    g = e.shouldRespectForcePress,
    x = e.canDragInteractiveElements,
    v = e.isClone,
    m = e.mapped,
    y = e.dropAnimationFinished;
  if (!v) {
    var b = Ae(
      function () {
        return {
          descriptor: d,
          registry: l,
          getDraggableRef: r,
          canDragInteractiveElements: x,
          shouldRespectForcePress: g,
          isEnabled: h,
        };
      },
      [d, l, r, x, g, h]
    );
    YV(b);
  }
  var C = Ae(
      function () {
        return h
          ? {
              tabIndex: 0,
              role: "button",
              "aria-describedby": a,
              "data-rbd-drag-handle-draggable-id": p,
              "data-rbd-drag-handle-context-id": i,
              draggable: !1,
              onDragStart: XV,
            }
          : null;
      },
      [i, a, p, h]
    ),
    R = ve(
      function (A) {
        m.type === "DRAGGING" &&
          m.dropping &&
          A.propertyName === "transform" &&
          y();
      },
      [y, m]
    ),
    E = Ae(
      function () {
        var A = KV(m),
          I = m.type === "DRAGGING" && m.dropping ? R : null,
          M = {
            innerRef: n,
            draggableProps: {
              "data-rbd-draggable-context-id": i,
              "data-rbd-draggable-id": p,
              style: A,
              onTransitionEnd: I,
            },
            dragHandleProps: C,
          };
        return M;
      },
      [i, C, p, m, R, n]
    ),
    D = Ae(
      function () {
        return {
          draggableId: d.id,
          type: d.type,
          source: { index: d.index, droppableId: d.droppableId },
        };
      },
      [d.droppableId, d.id, d.index, d.type]
    );
  return f(E, m.snapshot, D);
}
var FE = function (e, t) {
    return e === t;
  },
  jE = function (e) {
    var t = e.combine,
      n = e.destination;
    return n ? n.droppableId : t ? t.droppableId : null;
  },
  ZV = function (t) {
    return t.combine ? t.combine.draggableId : null;
  },
  JV = function (t) {
    return t.at && t.at.type === "COMBINE" ? t.at.combine.draggableId : null;
  };
function eW() {
  var e = Pt(function (o, i) {
      return { x: o, y: i };
    }),
    t = Pt(function (o, i, a, l, s) {
      return {
        isDragging: !0,
        isClone: i,
        isDropAnimating: !!s,
        dropAnimation: s,
        mode: o,
        draggingOver: a,
        combineWith: l,
        combineTargetFor: null,
      };
    }),
    n = Pt(function (o, i, a, l, s, u, c) {
      return {
        mapped: {
          type: "DRAGGING",
          dropping: null,
          draggingOver: s,
          combineWith: u,
          mode: i,
          offset: o,
          dimension: a,
          forceShouldAnimate: c,
          snapshot: t(i, l, s, u, null),
        },
      };
    }),
    r = function (i, a) {
      if (i.isDragging) {
        if (i.critical.draggable.id !== a.draggableId) return null;
        var l = i.current.client.offset,
          s = i.dimensions.draggables[a.draggableId],
          u = _n(i.impact),
          c = JV(i.impact),
          d = i.forceShouldAnimate;
        return n(e(l.x, l.y), i.movementMode, s, a.isClone, u, c, d);
      }
      if (i.phase === "DROP_ANIMATING") {
        var f = i.completed;
        if (f.result.draggableId !== a.draggableId) return null;
        var p = a.isClone,
          h = i.dimensions.draggables[a.draggableId],
          g = f.result,
          x = g.mode,
          v = jE(g),
          m = ZV(g),
          y = i.dropDuration,
          b = {
            duration: y,
            curve: mg.drop,
            moveTo: i.newHomeClientOffset,
            opacity: m ? rs.opacity.drop : null,
            scale: m ? rs.scale.drop : null,
          };
        return {
          mapped: {
            type: "DRAGGING",
            offset: i.newHomeClientOffset,
            dimension: h,
            dropping: b,
            draggingOver: v,
            combineWith: m,
            mode: x,
            forceShouldAnimate: null,
            snapshot: t(x, p, v, m, b),
          },
        };
      }
      return null;
    };
  return r;
}
function zE(e) {
  return {
    isDragging: !1,
    isDropAnimating: !1,
    isClone: !1,
    dropAnimation: null,
    mode: null,
    draggingOver: null,
    combineTargetFor: e,
    combineWith: null,
  };
}
var tW = {
  mapped: {
    type: "SECONDARY",
    offset: kt,
    combineTargetFor: null,
    shouldAnimateDisplacement: !0,
    snapshot: zE(null),
  },
};
function nW() {
  var e = Pt(function (a, l) {
      return { x: a, y: l };
    }),
    t = Pt(zE),
    n = Pt(function (a, l, s) {
      return (
        l === void 0 && (l = null),
        {
          mapped: {
            type: "SECONDARY",
            offset: a,
            combineTargetFor: l,
            shouldAnimateDisplacement: s,
            snapshot: t(l),
          },
        }
      );
    }),
    r = function (l) {
      return l ? n(kt, l, !0) : null;
    },
    o = function (l, s, u, c) {
      var d = u.displaced.visible[l],
        f = !!(c.inVirtualList && c.effected[l]),
        p = af(u),
        h = p && p.draggableId === l ? s : null;
      if (!d) {
        if (!f) return r(h);
        if (u.displaced.invisible[l]) return null;
        var g = Ca(c.displacedBy.point),
          x = e(g.x, g.y);
        return n(x, h, !0);
      }
      if (f) return r(h);
      var v = u.displacedBy.point,
        m = e(v.x, v.y);
      return n(m, h, d.shouldAnimate);
    },
    i = function (l, s) {
      if (l.isDragging)
        return l.critical.draggable.id === s.draggableId
          ? null
          : o(
              s.draggableId,
              l.critical.draggable.id,
              l.impact,
              l.afterCritical
            );
      if (l.phase === "DROP_ANIMATING") {
        var u = l.completed;
        return u.result.draggableId === s.draggableId
          ? null
          : o(s.draggableId, u.result.draggableId, u.impact, u.afterCritical);
      }
      return null;
    };
  return i;
}
var rW = function () {
    var t = eW(),
      n = nW(),
      r = function (i, a) {
        return t(i, a) || n(i, a) || tW;
      };
    return r;
  },
  oW = { dropAnimationFinished: xE },
  iW = WR(rW, oW, null, { context: wg, pure: !0, areStatePropsEqual: FE })(QV);
function UE(e) {
  var t = Tc(Eg),
    n = t.isUsingCloneFor;
  return n === e.draggableId && !e.isClone ? null : oe.createElement(iW, e);
}
function pb(e) {
  var t = typeof e.isDragDisabled == "boolean" ? !e.isDragDisabled : !0,
    n = !!e.disableInteractiveElementBlocking,
    r = !!e.shouldRespectForcePress;
  return oe.createElement(
    UE,
    T({}, e, {
      isClone: !1,
      isEnabled: t,
      canDragInteractiveElements: n,
      shouldRespectForcePress: r,
    })
  );
}
function aW(e) {
  var t = S.useContext(cf);
  t || ne(!1);
  var n = t.contextId,
    r = t.isMovementAllowed,
    o = S.useRef(null),
    i = S.useRef(null),
    a = e.children,
    l = e.droppableId,
    s = e.type,
    u = e.mode,
    c = e.direction,
    d = e.ignoreContainerClipping,
    f = e.isDropDisabled,
    p = e.isCombineEnabled,
    h = e.snapshot,
    g = e.useClone,
    x = e.updateViewportMaxScroll,
    v = e.getContainerForClone,
    m = ve(function () {
      return o.current;
    }, []),
    y = ve(function (M) {
      o.current = M;
    }, []);
  ve(function () {
    return i.current;
  }, []);
  var b = ve(function (M) {
      i.current = M;
    }, []),
    C = ve(
      function () {
        r() && x({ maxScroll: EE() });
      },
      [r, x]
    );
  $V({
    droppableId: l,
    type: s,
    mode: u,
    direction: c,
    isDropDisabled: f,
    isCombineEnabled: p,
    ignoreContainerClipping: d,
    getDroppableRef: m,
  });
  var R = oe.createElement(
      zV,
      { on: e.placeholder, shouldAnimate: e.shouldAnimatePlaceholder },
      function (M) {
        var J = M.onClose,
          V = M.data,
          j = M.animate;
        return oe.createElement(jV, {
          placeholder: V,
          onClose: J,
          innerRef: b,
          animate: j,
          contextId: n,
          onTransitionEnd: C,
        });
      }
    ),
    E = Ae(
      function () {
        return {
          innerRef: y,
          placeholder: R,
          droppableProps: {
            "data-rbd-droppable-id": l,
            "data-rbd-droppable-context-id": n,
          },
        };
      },
      [n, l, R, y]
    ),
    D = g ? g.dragging.draggableId : null,
    A = Ae(
      function () {
        return { droppableId: l, type: s, isUsingCloneFor: D };
      },
      [l, D, s]
    );
  function I() {
    if (!g) return null;
    var M = g.dragging,
      J = g.render,
      V = oe.createElement(
        UE,
        {
          draggableId: M.draggableId,
          index: M.source.index,
          isClone: !0,
          isEnabled: !0,
          shouldRespectForcePress: !1,
          canDragInteractiveElements: !0,
        },
        function (j, z) {
          return J(j, z, M);
        }
      );
    return Mi.createPortal(V, v());
  }
  return oe.createElement(Eg.Provider, { value: A }, a(E, h), I());
}
var yp = function (t, n) {
    return t === n.droppable.type;
  },
  vb = function (t, n) {
    return n.draggables[t.draggable.id];
  },
  lW = function () {
    var t = {
        placeholder: null,
        shouldAnimatePlaceholder: !0,
        snapshot: {
          isDraggingOver: !1,
          draggingOverWith: null,
          draggingFromThisWith: null,
          isUsingPlaceholder: !1,
        },
        useClone: null,
      },
      n = T({}, t, { shouldAnimatePlaceholder: !1 }),
      r = Pt(function (a) {
        return {
          draggableId: a.id,
          type: a.type,
          source: { index: a.index, droppableId: a.droppableId },
        };
      }),
      o = Pt(function (a, l, s, u, c, d) {
        var f = c.descriptor.id,
          p = c.descriptor.droppableId === a;
        if (p) {
          var h = d ? { render: d, dragging: r(c.descriptor) } : null,
            g = {
              isDraggingOver: s,
              draggingOverWith: s ? f : null,
              draggingFromThisWith: f,
              isUsingPlaceholder: !0,
            };
          return {
            placeholder: c.placeholder,
            shouldAnimatePlaceholder: !1,
            snapshot: g,
            useClone: h,
          };
        }
        if (!l) return n;
        if (!u) return t;
        var x = {
          isDraggingOver: s,
          draggingOverWith: f,
          draggingFromThisWith: null,
          isUsingPlaceholder: !0,
        };
        return {
          placeholder: c.placeholder,
          shouldAnimatePlaceholder: !0,
          snapshot: x,
          useClone: null,
        };
      }),
      i = function (l, s) {
        var u = s.droppableId,
          c = s.type,
          d = !s.isDropDisabled,
          f = s.renderClone;
        if (l.isDragging) {
          var p = l.critical;
          if (!yp(c, p)) return n;
          var h = vb(p, l.dimensions),
            g = _n(l.impact) === u;
          return o(u, d, g, g, h, f);
        }
        if (l.phase === "DROP_ANIMATING") {
          var x = l.completed;
          if (!yp(c, x.critical)) return n;
          var v = vb(x.critical, l.dimensions);
          return o(u, d, jE(x.result) === u, _n(x.impact) === u, v, f);
        }
        if (l.phase === "IDLE" && l.completed && !l.shouldFlush) {
          var m = l.completed;
          if (!yp(c, m.critical)) return n;
          var y = _n(m.impact) === u,
            b = !!(m.impact.at && m.impact.at.type === "COMBINE"),
            C = m.critical.droppable.id === u;
          return y ? (b ? t : n) : C ? t : n;
        }
        return n;
      };
    return i;
  },
  sW = { updateViewportMaxScroll: g9 };
function uW() {
  return document.body || ne(!1), document.body;
}
var cW = {
    mode: "standard",
    type: "DEFAULT",
    direction: "vertical",
    isDropDisabled: !1,
    isCombineEnabled: !1,
    ignoreContainerClipping: !1,
    renderClone: null,
    getContainerForClone: uW,
  },
  Tg = WR(lW, sW, null, { context: wg, pure: !0, areStatePropsEqual: FE })(aW);
Tg.defaultProps = cW;
let mu;
const dW = new Uint8Array(16);
function fW() {
  if (
    !mu &&
    ((mu =
      typeof crypto < "u" &&
      crypto.getRandomValues &&
      crypto.getRandomValues.bind(crypto)),
    !mu)
  )
    throw new Error(
      "crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported"
    );
  return mu(dW);
}
const Ot = [];
for (let e = 0; e < 256; ++e) Ot.push((e + 256).toString(16).slice(1));
function pW(e, t = 0) {
  return (
    Ot[e[t + 0]] +
    Ot[e[t + 1]] +
    Ot[e[t + 2]] +
    Ot[e[t + 3]] +
    "-" +
    Ot[e[t + 4]] +
    Ot[e[t + 5]] +
    "-" +
    Ot[e[t + 6]] +
    Ot[e[t + 7]] +
    "-" +
    Ot[e[t + 8]] +
    Ot[e[t + 9]] +
    "-" +
    Ot[e[t + 10]] +
    Ot[e[t + 11]] +
    Ot[e[t + 12]] +
    Ot[e[t + 13]] +
    Ot[e[t + 14]] +
    Ot[e[t + 15]]
  ).toLowerCase();
}
const vW =
    typeof crypto < "u" && crypto.randomUUID && crypto.randomUUID.bind(crypto),
  hb = { randomUUID: vW };
function Yv(e, t, n) {
  if (hb.randomUUID && !t && !e) return hb.randomUUID();
  e = e || {};
  const r = e.random || (e.rng || fW)();
  if (((r[6] = (r[6] & 15) | 64), (r[8] = (r[8] & 63) | 128), t)) {
    n = n || 0;
    for (let o = 0; o < 16; ++o) t[n + o] = r[o];
    return t;
  }
  return pW(r);
}
function hW(e) {
  const t = Tr(dr),
    { id: n, title: r, date: o, task: i } = e.card,
    [a, l] = oe.useState(null),
    s = e.index,
    [u, c] = S.useState(""),
    [d, f] = Xn(ui),
    [p, h] = S.useState(!0),
    [g, x] = S.useState(""),
    [v, m] = S.useState(""),
    y = d[s].task || [],
    b = d[s].id,
    C = !!a,
    R = (M) => {
      l(M.currentTarget);
    },
    E = () => {
      l(null);
    },
    D = () => {
      if (!u) {
        m("enter the title for this card");
        return;
      }
      const M = d.map((J) => {
        if (J.id == n) {
          const V = { ...J },
            j = [...V.task];
          return (
            j.push({
              id: Yv(),
              title: u,
              date: new Date(),
              Comment: [
                {
                  activity: `added ${u} card to ${J.title} `,
                  time:
                    new Date(Date.now()).getHours() +
                    ":" +
                    new Date(Date.now()).getMinutes(),
                },
              ],
              description: "",
              listName: J.title,
            }),
            (V.task = [...j]),
            V
          );
        } else return J;
      });
      m(""), f(M), localStorage.setItem("data", JSON.stringify(M)), c("");
    },
    A = () => {
      h(!1), x(d[s].title);
    },
    I = () => {
      const M = d.map((J, V) => {
        if (V === s) {
          const j = { ...J };
          return (j.title = g), j;
        }
        return J;
      });
      f(M), localStorage.setItem("data", JSON.stringify(M)), h(!0);
    };
  return w.jsx(
    pb,
    {
      draggableId: n,
      index: s,
      children: (M) =>
        w.jsx("div", {
          ref: M.innerRef,
          ...M.draggableProps,
          ...M.dragHandleProps,
          children: w.jsx(Tg, {
            droppableId: n,
            children: (J, V) =>
              w.jsxs("div", {
                ...J.droppableProps,
                ref: J.innerRef,
                className: `${xi.card} ${t ? xi.dark : ""}`,
                style: { background: V.isDraggingOver ? "lightblue" : "" },
                children: [
                  w.jsxs("div", {
                    className: xi.cardHeading,
                    children: [
                      p
                        ? w.jsx("span", { onClick: A, children: r })
                        : w.jsx("input", {
                            onBlur: I,
                            onChange: (j) => x(j.target.value),
                            value: g,
                            type: "text",
                            style: t
                              ? {
                                  backgroundColor: "transparent",
                                  color: "white",
                                }
                              : null,
                          }),
                      w.jsx("span", {
                        className: xi.iconSpan,
                        children: w.jsx(Fo, {
                          onClick: R,
                          children: w.jsx(Zm, {
                            sx: t ? { color: "white" } : null,
                          }),
                        }),
                      }),
                    ],
                  }),
                  w.jsx(_R, {
                    id: "demo-positioned-menu",
                    "aria-labelledby": "demo-positioned-button",
                    anchorEl: a,
                    open: C,
                    onClose: E,
                    anchorOrigin: { vertical: "top", horizontal: "left" },
                    transformOrigin: { vertical: "top", horizontal: "left" },
                    children: w.jsx(il, {
                      onClick: () => {
                        const j = d.filter((z) => z.id !== b);
                        f(j), localStorage.setItem("data", JSON.stringify(j));
                      },
                      children: "Delete",
                    }),
                  }),
                  w.jsx("div", {
                    className: xi.taskDiv,
                    children: y.map((j, z) =>
                      w.jsx(
                        pb,
                        {
                          draggableId: j.id,
                          index: z,
                          children: (q, re) =>
                            w.jsx("div", {
                              ref: q.innerRef,
                              ...q.draggableProps,
                              ...q.dragHandleProps,
                              style: {
                                userSelect: "none",
                                ...q.draggableProps.style,
                              },
                              children: w.jsx(
                                Hj,
                                { task: j, index: z, mainId: b },
                                j.id
                              ),
                            }),
                        },
                        j.id
                      )
                    ),
                  }),
                  w.jsx("div", {
                    className: xi.editableDiv,
                    children: w.jsx(Nj, {
                      name: u,
                      setName: c,
                      addList: D,
                      errorText: v,
                      setErrorText: m,
                    }),
                  }),
                ],
              }),
          }),
        }),
    },
    n
  );
}
const mW = "_board_outer_7cgaz_1",
  gW = "_board_7cgaz_1",
  yW = "_dragCard_7cgaz_39",
  bp = { board_outer: mW, board: gW, dragCard: yW },
  bW = "_addListContainer_sh5d4_1",
  xW = "_dark_sh5d4_27",
  SW = "_addList_sh5d4_1",
  mb = { addListContainer: bW, dark: xW, addList: SW };
var _g = {},
  wW = rn;
Object.defineProperty(_g, "__esModule", { value: !0 });
var Pg = (_g.default = void 0),
  CW = wW(on()),
  RW = w,
  EW = (0, CW.default)(
    (0, RW.jsx)("path", { d: "M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z" }),
    "AddOutlined"
  );
Pg = _g.default = EW;
const TW = ({
  handleAddList: e,
  listTitle: t,
  setListTitle: n,
  errorText: r,
  setErrorText: o,
}) => {
  const [i, a] = oe.useState(!1),
    l = Tr(dr);
  function s() {
    a(!1), o("");
  }
  return w.jsx(w.Fragment, {
    children: i
      ? w.jsxs("div", {
          className: mb.addList,
          style: l ? { backgroundColor: "black", color: "white" } : null,
          children: [
            w.jsx("input", {
              type: "text",
              placeholder: "Enter List Title...",
              value: t,
              onChange: (u) => n(u.target.value),
              style: l
                ? { backgroundColor: "transparent", color: "white" }
                : null,
            }),
            r && w.jsx("span", { style: { color: "red" }, children: r }),
            w.jsxs("span", {
              children: [
                w.jsx("button", { onClick: e, children: "Add List" }),
                w.jsx(xd, { onClick: s }),
              ],
            }),
          ],
        })
      : w.jsxs("div", {
          className: mb.addListContainer,
          onClick: () => a(!0),
          children: [
            w.jsx(Pg, {}),
            w.jsx("p", { children: "Add Another List" }),
          ],
        }),
  });
};
function _W() {
  const [e, t] = Xn(ui),
    [n, r] = oe.useState(""),
    [o, i] = oe.useState(""),
    a = (s) => {
      if (!s.destination) return;
      const { source: u, destination: c } = s;
      if (s.type == "COLUMN") {
        const d = [...e],
          [f] = d.splice(u.index, 1);
        d.splice(c.index, 0, f),
          t(d),
          localStorage.setItem("data", JSON.stringify(d));
        return;
      }
      if (u.droppableId !== c.droppableId) {
        const d = e.filter((m) => {
            if (m.id === u.droppableId) return m;
          }),
          f = e.filter((m) => {
            if (m.id === c.droppableId) return m;
          }),
          p = [...d[0].task],
          h = [...f[0].task],
          [g] = p.splice(u.index, 1),
          x = [...g.Comment];
        x.unshift({
          activity: `move this card from ${d[0].title} to ${f[0].title}`,
          time:
            new Date(Date.now()).getHours() +
            ":" +
            new Date(Date.now()).getMinutes(),
        }),
          h.splice(c.index, 0, { ...g, listName: f[0].title, Comment: x });
        const v = e.map((m) =>
          m.id === c.droppableId
            ? { ...m, task: h }
            : m.id === u.droppableId
            ? { ...m, task: p }
            : m
        );
        t(v), localStorage.setItem("data", JSON.stringify(v));
      } else {
        const [d] = e.filter((g) => {
            if (g.id === u.droppableId) return g;
          }),
          f = [...d.task],
          [p] = f.splice(u.index, 1);
        f.splice(c.index, 0, p);
        const h = e.map((g) =>
          g.id === c.droppableId ? { ...g, task: f } : g
        );
        t(h), localStorage.setItem("data", JSON.stringify(h));
      }
    };
  function l() {
    n.length !== 0
      ? (t([...e, { id: Yv(), title: `${n}`, date: new Date(), task: [] }]),
        localStorage.setItem(
          "data",
          JSON.stringify([
            ...e,
            { id: Yv(), title: `${n}`, date: new Date(), task: [] },
          ])
        ),
        i(""),
        r(""))
      : i("enter the title for list");
  }
  return w.jsx(CV, {
    onDragEnd: (s) => a(s),
    children: w.jsx("div", {
      children: w.jsx("div", {
        className: bp.board_outer,
        children: w.jsxs("div", {
          className: bp.board,
          children: [
            w.jsx(Tg, {
              droppableId: "board",
              type: "COLUMN",
              direction: "horizontal",
              children: (s) =>
                w.jsx("div", {
                  ...s.droppableProps,
                  ref: s.innerRef,
                  className: bp.dragCard,
                  children: e.map((u, c) =>
                    w.jsx(hW, { card: u, index: c }, u.id)
                  ),
                }),
            }),
            w.jsx(TW, {
              handleAddList: l,
              listTitle: n,
              setListTitle: r,
              errorText: o,
              setErrorText: i,
            }),
          ],
        }),
      }),
    }),
  });
}
const PW = "_header_1mimx_3",
  kW = "_logoBtn_1mimx_23",
  DW = "_sideBarOptions_1mimx_45",
  IW = "_optionInner_1mimx_89",
  Ln = { header: PW, logoBtn: kW, sideBarOptions: DW, optionInner: IW };
var kg = {},
  AW = rn;
Object.defineProperty(kg, "__esModule", { value: !0 });
var VE = (kg.default = void 0),
  NW = AW(on()),
  OW = w,
  MW = (0, NW.default)(
    (0, OW.jsx)("path", { d: "M15.41 7.41 14 6l-6 6 6 6 1.41-1.41L10.83 12z" }),
    "NavigateBefore"
  );
VE = kg.default = MW;
var Dg = {},
  $W = rn;
Object.defineProperty(Dg, "__esModule", { value: !0 });
var WE = (Dg.default = void 0),
  LW = $W(on()),
  BW = w,
  FW = (0, LW.default)(
    (0, BW.jsx)("path", { d: "M16.59 8.59 12 13.17 7.41 8.59 6 10l6 6 6-6z" }),
    "ExpandMore"
  );
WE = Dg.default = FW;
var Ig = {},
  jW = rn;
Object.defineProperty(Ig, "__esModule", { value: !0 });
var HE = (Ig.default = void 0),
  zW = jW(on()),
  UW = w,
  VW = (0, zW.default)(
    (0, UW.jsx)("path", {
      d: "M19.43 12.98c.04-.32.07-.64.07-.98 0-.34-.03-.66-.07-.98l2.11-1.65c.19-.15.24-.42.12-.64l-2-3.46c-.09-.16-.26-.25-.44-.25-.06 0-.12.01-.17.03l-2.49 1c-.52-.4-1.08-.73-1.69-.98l-.38-2.65C14.46 2.18 14.25 2 14 2h-4c-.25 0-.46.18-.49.42l-.38 2.65c-.61.25-1.17.59-1.69.98l-2.49-1c-.06-.02-.12-.03-.18-.03-.17 0-.34.09-.43.25l-2 3.46c-.13.22-.07.49.12.64l2.11 1.65c-.04.32-.07.65-.07.98 0 .33.03.66.07.98l-2.11 1.65c-.19.15-.24.42-.12.64l2 3.46c.09.16.26.25.44.25.06 0 .12-.01.17-.03l2.49-1c.52.4 1.08.73 1.69.98l.38 2.65c.03.24.24.42.49.42h4c.25 0 .46-.18.49-.42l.38-2.65c.61-.25 1.17-.59 1.69-.98l2.49 1c.06.02.12.03.18.03.17 0 .34-.09.43-.25l2-3.46c.12-.22.07-.49-.12-.64l-2.11-1.65zm-1.98-1.71c.04.31.05.52.05.73 0 .21-.02.43-.05.73l-.14 1.13.89.7 1.08.84-.7 1.21-1.27-.51-1.04-.42-.9.68c-.43.32-.84.56-1.25.73l-1.06.43-.16 1.13-.2 1.35h-1.4l-.19-1.35-.16-1.13-1.06-.43c-.43-.18-.83-.41-1.23-.71l-.91-.7-1.06.43-1.27.51-.7-1.21 1.08-.84.89-.7-.14-1.13c-.03-.31-.05-.54-.05-.74s.02-.43.05-.73l.14-1.13-.89-.7-1.08-.84.7-1.21 1.27.51 1.04.42.9-.68c.43-.32.84-.56 1.25-.73l1.06-.43.16-1.13.2-1.35h1.39l.19 1.35.16 1.13 1.06.43c.43.18.83.41 1.23.71l.91.7 1.06-.43 1.27-.51.7 1.21-1.07.85-.89.7.14 1.13zM12 8c-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4-1.79-4-4-4zm0 6c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2z",
    }),
    "SettingsOutlined"
  );
HE = Ig.default = VW;
var Ag = {},
  WW = rn;
Object.defineProperty(Ag, "__esModule", { value: !0 });
var GE = (Ag.default = void 0),
  HW = WW(on()),
  GW = w,
  KW = (0, HW.default)(
    (0, GW.jsx)("path", {
      d: "M12 5.9c1.16 0 2.1.94 2.1 2.1s-.94 2.1-2.1 2.1S9.9 9.16 9.9 8s.94-2.1 2.1-2.1m0 9c2.97 0 6.1 1.46 6.1 2.1v1.1H5.9V17c0-.64 3.13-2.1 6.1-2.1M12 4C9.79 4 8 5.79 8 8s1.79 4 4 4 4-1.79 4-4-1.79-4-4-4zm0 9c-2.67 0-8 1.34-8 4v3h16v-3c0-2.66-5.33-4-8-4z",
    }),
    "PersonOutlineOutlined"
  );
GE = Ag.default = KW;
const qW = S.createContext(void 0),
  YW = qW;
function XW() {
  return S.useContext(YW);
}
function QW(e) {
  return lt("MuiButton", e);
}
const ZW = Ke("MuiButton", [
    "root",
    "text",
    "textInherit",
    "textPrimary",
    "textSecondary",
    "textSuccess",
    "textError",
    "textInfo",
    "textWarning",
    "outlined",
    "outlinedInherit",
    "outlinedPrimary",
    "outlinedSecondary",
    "outlinedSuccess",
    "outlinedError",
    "outlinedInfo",
    "outlinedWarning",
    "contained",
    "containedInherit",
    "containedPrimary",
    "containedSecondary",
    "containedSuccess",
    "containedError",
    "containedInfo",
    "containedWarning",
    "disableElevation",
    "focusVisible",
    "disabled",
    "colorInherit",
    "textSizeSmall",
    "textSizeMedium",
    "textSizeLarge",
    "outlinedSizeSmall",
    "outlinedSizeMedium",
    "outlinedSizeLarge",
    "containedSizeSmall",
    "containedSizeMedium",
    "containedSizeLarge",
    "sizeMedium",
    "sizeSmall",
    "sizeLarge",
    "fullWidth",
    "startIcon",
    "endIcon",
    "iconSizeSmall",
    "iconSizeMedium",
    "iconSizeLarge",
  ]),
  gu = ZW,
  JW = S.createContext({}),
  eH = JW,
  tH = [
    "children",
    "color",
    "component",
    "className",
    "disabled",
    "disableElevation",
    "disableFocusRipple",
    "endIcon",
    "focusVisibleClassName",
    "fullWidth",
    "size",
    "startIcon",
    "type",
    "variant",
  ],
  nH = (e) => {
    const {
        color: t,
        disableElevation: n,
        fullWidth: r,
        size: o,
        variant: i,
        classes: a,
      } = e,
      l = {
        root: [
          "root",
          i,
          `${i}${pe(t)}`,
          `size${pe(o)}`,
          `${i}Size${pe(o)}`,
          t === "inherit" && "colorInherit",
          n && "disableElevation",
          r && "fullWidth",
        ],
        label: ["label"],
        startIcon: ["startIcon", `iconSize${pe(o)}`],
        endIcon: ["endIcon", `iconSize${pe(o)}`],
      },
      s = dt(l, QW, a);
    return T({}, a, s);
  },
  KE = (e) =>
    T(
      {},
      e.size === "small" && { "& > *:nth-of-type(1)": { fontSize: 18 } },
      e.size === "medium" && { "& > *:nth-of-type(1)": { fontSize: 20 } },
      e.size === "large" && { "& > *:nth-of-type(1)": { fontSize: 22 } }
    ),
  rH = Ee(bd, {
    shouldForwardProp: (e) => hd(e) || e === "classes",
    name: "MuiButton",
    slot: "Root",
    overridesResolver: (e, t) => {
      const { ownerState: n } = e;
      return [
        t.root,
        t[n.variant],
        t[`${n.variant}${pe(n.color)}`],
        t[`size${pe(n.size)}`],
        t[`${n.variant}Size${pe(n.size)}`],
        n.color === "inherit" && t.colorInherit,
        n.disableElevation && t.disableElevation,
        n.fullWidth && t.fullWidth,
      ];
    },
  })(
    ({ theme: e, ownerState: t }) => {
      var n, r;
      const o =
          e.palette.mode === "light"
            ? e.palette.grey[300]
            : e.palette.grey[800],
        i =
          e.palette.mode === "light"
            ? e.palette.grey.A100
            : e.palette.grey[700];
      return T(
        {},
        e.typography.button,
        {
          minWidth: 64,
          padding: "6px 16px",
          borderRadius: (e.vars || e).shape.borderRadius,
          transition: e.transitions.create(
            ["background-color", "box-shadow", "border-color", "color"],
            { duration: e.transitions.duration.short }
          ),
          "&:hover": T(
            {
              textDecoration: "none",
              backgroundColor: e.vars
                ? `rgba(${e.vars.palette.text.primaryChannel} / ${e.vars.palette.action.hoverOpacity})`
                : Gt(e.palette.text.primary, e.palette.action.hoverOpacity),
              "@media (hover: none)": { backgroundColor: "transparent" },
            },
            t.variant === "text" &&
              t.color !== "inherit" && {
                backgroundColor: e.vars
                  ? `rgba(${e.vars.palette[t.color].mainChannel} / ${
                      e.vars.palette.action.hoverOpacity
                    })`
                  : Gt(e.palette[t.color].main, e.palette.action.hoverOpacity),
                "@media (hover: none)": { backgroundColor: "transparent" },
              },
            t.variant === "outlined" &&
              t.color !== "inherit" && {
                border: `1px solid ${(e.vars || e).palette[t.color].main}`,
                backgroundColor: e.vars
                  ? `rgba(${e.vars.palette[t.color].mainChannel} / ${
                      e.vars.palette.action.hoverOpacity
                    })`
                  : Gt(e.palette[t.color].main, e.palette.action.hoverOpacity),
                "@media (hover: none)": { backgroundColor: "transparent" },
              },
            t.variant === "contained" && {
              backgroundColor: e.vars
                ? e.vars.palette.Button.inheritContainedHoverBg
                : i,
              boxShadow: (e.vars || e).shadows[4],
              "@media (hover: none)": {
                boxShadow: (e.vars || e).shadows[2],
                backgroundColor: (e.vars || e).palette.grey[300],
              },
            },
            t.variant === "contained" &&
              t.color !== "inherit" && {
                backgroundColor: (e.vars || e).palette[t.color].dark,
                "@media (hover: none)": {
                  backgroundColor: (e.vars || e).palette[t.color].main,
                },
              }
          ),
          "&:active": T(
            {},
            t.variant === "contained" && { boxShadow: (e.vars || e).shadows[8] }
          ),
          [`&.${gu.focusVisible}`]: T(
            {},
            t.variant === "contained" && { boxShadow: (e.vars || e).shadows[6] }
          ),
          [`&.${gu.disabled}`]: T(
            { color: (e.vars || e).palette.action.disabled },
            t.variant === "outlined" && {
              border: `1px solid ${
                (e.vars || e).palette.action.disabledBackground
              }`,
            },
            t.variant === "contained" && {
              color: (e.vars || e).palette.action.disabled,
              boxShadow: (e.vars || e).shadows[0],
              backgroundColor: (e.vars || e).palette.action.disabledBackground,
            }
          ),
        },
        t.variant === "text" && { padding: "6px 8px" },
        t.variant === "text" &&
          t.color !== "inherit" && {
            color: (e.vars || e).palette[t.color].main,
          },
        t.variant === "outlined" && {
          padding: "5px 15px",
          border: "1px solid currentColor",
        },
        t.variant === "outlined" &&
          t.color !== "inherit" && {
            color: (e.vars || e).palette[t.color].main,
            border: e.vars
              ? `1px solid rgba(${e.vars.palette[t.color].mainChannel} / 0.5)`
              : `1px solid ${Gt(e.palette[t.color].main, 0.5)}`,
          },
        t.variant === "contained" && {
          color: e.vars
            ? e.vars.palette.text.primary
            : (n = (r = e.palette).getContrastText) == null
            ? void 0
            : n.call(r, e.palette.grey[300]),
          backgroundColor: e.vars
            ? e.vars.palette.Button.inheritContainedBg
            : o,
          boxShadow: (e.vars || e).shadows[2],
        },
        t.variant === "contained" &&
          t.color !== "inherit" && {
            color: (e.vars || e).palette[t.color].contrastText,
            backgroundColor: (e.vars || e).palette[t.color].main,
          },
        t.color === "inherit" && {
          color: "inherit",
          borderColor: "currentColor",
        },
        t.size === "small" &&
          t.variant === "text" && {
            padding: "4px 5px",
            fontSize: e.typography.pxToRem(13),
          },
        t.size === "large" &&
          t.variant === "text" && {
            padding: "8px 11px",
            fontSize: e.typography.pxToRem(15),
          },
        t.size === "small" &&
          t.variant === "outlined" && {
            padding: "3px 9px",
            fontSize: e.typography.pxToRem(13),
          },
        t.size === "large" &&
          t.variant === "outlined" && {
            padding: "7px 21px",
            fontSize: e.typography.pxToRem(15),
          },
        t.size === "small" &&
          t.variant === "contained" && {
            padding: "4px 10px",
            fontSize: e.typography.pxToRem(13),
          },
        t.size === "large" &&
          t.variant === "contained" && {
            padding: "8px 22px",
            fontSize: e.typography.pxToRem(15),
          },
        t.fullWidth && { width: "100%" }
      );
    },
    ({ ownerState: e }) =>
      e.disableElevation && {
        boxShadow: "none",
        "&:hover": { boxShadow: "none" },
        [`&.${gu.focusVisible}`]: { boxShadow: "none" },
        "&:active": { boxShadow: "none" },
        [`&.${gu.disabled}`]: { boxShadow: "none" },
      }
  ),
  oH = Ee("span", {
    name: "MuiButton",
    slot: "StartIcon",
    overridesResolver: (e, t) => {
      const { ownerState: n } = e;
      return [t.startIcon, t[`iconSize${pe(n.size)}`]];
    },
  })(({ ownerState: e }) =>
    T(
      { display: "inherit", marginRight: 8, marginLeft: -4 },
      e.size === "small" && { marginLeft: -2 },
      KE(e)
    )
  ),
  iH = Ee("span", {
    name: "MuiButton",
    slot: "EndIcon",
    overridesResolver: (e, t) => {
      const { ownerState: n } = e;
      return [t.endIcon, t[`iconSize${pe(n.size)}`]];
    },
  })(({ ownerState: e }) =>
    T(
      { display: "inherit", marginRight: -4, marginLeft: 8 },
      e.size === "small" && { marginRight: -2 },
      KE(e)
    )
  ),
  aH = S.forwardRef(function (t, n) {
    const r = S.useContext(eH),
      o = Kh(r, t),
      i = ft({ props: o, name: "MuiButton" }),
      {
        children: a,
        color: l = "primary",
        component: s = "button",
        className: u,
        disabled: c = !1,
        disableElevation: d = !1,
        disableFocusRipple: f = !1,
        endIcon: p,
        focusVisibleClassName: h,
        fullWidth: g = !1,
        size: x = "medium",
        startIcon: v,
        type: m,
        variant: y = "text",
      } = i,
      b = xe(i, tH),
      C = T({}, i, {
        color: l,
        component: s,
        disabled: c,
        disableElevation: d,
        disableFocusRipple: f,
        fullWidth: g,
        size: x,
        type: m,
        variant: y,
      }),
      R = nH(C),
      E =
        v && w.jsx(oH, { className: R.startIcon, ownerState: C, children: v }),
      D = p && w.jsx(iH, { className: R.endIcon, ownerState: C, children: p });
    return w.jsxs(
      rH,
      T(
        {
          ownerState: C,
          className: we(r.className, R.root, u),
          component: s,
          disabled: c,
          focusRipple: !f,
          focusVisibleClassName: we(R.focusVisible, h),
          ref: n,
          type: m,
        },
        b,
        { classes: R, children: [E, a, D] }
      )
    );
  }),
  al = aH;
function lH(e) {
  return lt("PrivateSwitchBase", e);
}
Ke("PrivateSwitchBase", [
  "root",
  "checked",
  "disabled",
  "input",
  "edgeStart",
  "edgeEnd",
]);
const sH = [
    "autoFocus",
    "checked",
    "checkedIcon",
    "className",
    "defaultChecked",
    "disabled",
    "disableFocusRipple",
    "edge",
    "icon",
    "id",
    "inputProps",
    "inputRef",
    "name",
    "onBlur",
    "onChange",
    "onFocus",
    "readOnly",
    "required",
    "tabIndex",
    "type",
    "value",
  ],
  uH = (e) => {
    const { classes: t, checked: n, disabled: r, edge: o } = e,
      i = {
        root: ["root", n && "checked", r && "disabled", o && `edge${pe(o)}`],
        input: ["input"],
      };
    return dt(i, lH, t);
  },
  cH = Ee(bd)(({ ownerState: e }) =>
    T(
      { padding: 9, borderRadius: "50%" },
      e.edge === "start" && { marginLeft: e.size === "small" ? -3 : -12 },
      e.edge === "end" && { marginRight: e.size === "small" ? -3 : -12 }
    )
  ),
  dH = Ee("input")({
    cursor: "inherit",
    position: "absolute",
    opacity: 0,
    width: "100%",
    height: "100%",
    top: 0,
    left: 0,
    margin: 0,
    padding: 0,
    zIndex: 1,
  }),
  fH = S.forwardRef(function (t, n) {
    const {
        autoFocus: r,
        checked: o,
        checkedIcon: i,
        className: a,
        defaultChecked: l,
        disabled: s,
        disableFocusRipple: u = !1,
        edge: c = !1,
        icon: d,
        id: f,
        inputProps: p,
        inputRef: h,
        name: g,
        onBlur: x,
        onChange: v,
        onFocus: m,
        readOnly: y,
        required: b = !1,
        tabIndex: C,
        type: R,
        value: E,
      } = t,
      D = xe(t, sH),
      [A, I] = Hh({
        controlled: o,
        default: !!l,
        name: "SwitchBase",
        state: "checked",
      }),
      M = XW(),
      J = (X) => {
        m && m(X), M && M.onFocus && M.onFocus(X);
      },
      V = (X) => {
        x && x(X), M && M.onBlur && M.onBlur(X);
      },
      j = (X) => {
        if (X.nativeEvent.defaultPrevented) return;
        const W = X.target.checked;
        I(W), v && v(X, W);
      };
    let z = s;
    M && typeof z > "u" && (z = M.disabled);
    const q = R === "checkbox" || R === "radio",
      re = T({}, t, {
        checked: A,
        disabled: z,
        disableFocusRipple: u,
        edge: c,
      }),
      U = uH(re);
    return w.jsxs(
      cH,
      T(
        {
          component: "span",
          className: we(U.root, a),
          centerRipple: !0,
          focusRipple: !u,
          disabled: z,
          tabIndex: null,
          role: void 0,
          onFocus: J,
          onBlur: V,
          ownerState: re,
          ref: n,
        },
        D,
        {
          children: [
            w.jsx(
              dH,
              T(
                {
                  autoFocus: r,
                  checked: o,
                  defaultChecked: l,
                  className: U.input,
                  disabled: z,
                  id: q ? f : void 0,
                  name: g,
                  onChange: j,
                  readOnly: y,
                  ref: h,
                  required: b,
                  ownerState: re,
                  tabIndex: C,
                  type: R,
                },
                R === "checkbox" && E === void 0 ? {} : { value: E },
                p
              )
            ),
            A ? i : d,
          ],
        }
      )
    );
  }),
  pH = fH;
function vH(e) {
  return lt("MuiSwitch", e);
}
const hH = Ke("MuiSwitch", [
    "root",
    "edgeStart",
    "edgeEnd",
    "switchBase",
    "colorPrimary",
    "colorSecondary",
    "sizeSmall",
    "sizeMedium",
    "checked",
    "disabled",
    "input",
    "thumb",
    "track",
  ]),
  Xt = hH,
  mH = ["className", "color", "edge", "size", "sx"],
  gH = (e) => {
    const {
        classes: t,
        edge: n,
        size: r,
        color: o,
        checked: i,
        disabled: a,
      } = e,
      l = {
        root: ["root", n && `edge${pe(n)}`, `size${pe(r)}`],
        switchBase: [
          "switchBase",
          `color${pe(o)}`,
          i && "checked",
          a && "disabled",
        ],
        thumb: ["thumb"],
        track: ["track"],
        input: ["input"],
      },
      s = dt(l, vH, t);
    return T({}, t, s);
  },
  yH = Ee("span", {
    name: "MuiSwitch",
    slot: "Root",
    overridesResolver: (e, t) => {
      const { ownerState: n } = e;
      return [t.root, n.edge && t[`edge${pe(n.edge)}`], t[`size${pe(n.size)}`]];
    },
  })(({ ownerState: e }) =>
    T(
      {
        display: "inline-flex",
        width: 34 + 12 * 2,
        height: 14 + 12 * 2,
        overflow: "hidden",
        padding: 12,
        boxSizing: "border-box",
        position: "relative",
        flexShrink: 0,
        zIndex: 0,
        verticalAlign: "middle",
        "@media print": { colorAdjust: "exact" },
      },
      e.edge === "start" && { marginLeft: -8 },
      e.edge === "end" && { marginRight: -8 },
      e.size === "small" && {
        width: 40,
        height: 24,
        padding: 7,
        [`& .${Xt.thumb}`]: { width: 16, height: 16 },
        [`& .${Xt.switchBase}`]: {
          padding: 4,
          [`&.${Xt.checked}`]: { transform: "translateX(16px)" },
        },
      }
    )
  ),
  bH = Ee(pH, {
    name: "MuiSwitch",
    slot: "SwitchBase",
    overridesResolver: (e, t) => {
      const { ownerState: n } = e;
      return [
        t.switchBase,
        { [`& .${Xt.input}`]: t.input },
        n.color !== "default" && t[`color${pe(n.color)}`],
      ];
    },
  })(
    ({ theme: e }) => ({
      position: "absolute",
      top: 0,
      left: 0,
      zIndex: 1,
      color: e.vars
        ? e.vars.palette.Switch.defaultColor
        : `${
            e.palette.mode === "light"
              ? e.palette.common.white
              : e.palette.grey[300]
          }`,
      transition: e.transitions.create(["left", "transform"], {
        duration: e.transitions.duration.shortest,
      }),
      [`&.${Xt.checked}`]: { transform: "translateX(20px)" },
      [`&.${Xt.disabled}`]: {
        color: e.vars
          ? e.vars.palette.Switch.defaultDisabledColor
          : `${
              e.palette.mode === "light"
                ? e.palette.grey[100]
                : e.palette.grey[600]
            }`,
      },
      [`&.${Xt.checked} + .${Xt.track}`]: { opacity: 0.5 },
      [`&.${Xt.disabled} + .${Xt.track}`]: {
        opacity: e.vars
          ? e.vars.opacity.switchTrackDisabled
          : `${e.palette.mode === "light" ? 0.12 : 0.2}`,
      },
      [`& .${Xt.input}`]: { left: "-100%", width: "300%" },
    }),
    ({ theme: e, ownerState: t }) =>
      T(
        {
          "&:hover": {
            backgroundColor: e.vars
              ? `rgba(${e.vars.palette.action.activeChannel} / ${e.vars.palette.action.hoverOpacity})`
              : Gt(e.palette.action.active, e.palette.action.hoverOpacity),
            "@media (hover: none)": { backgroundColor: "transparent" },
          },
        },
        t.color !== "default" && {
          [`&.${Xt.checked}`]: {
            color: (e.vars || e).palette[t.color].main,
            "&:hover": {
              backgroundColor: e.vars
                ? `rgba(${e.vars.palette[t.color].mainChannel} / ${
                    e.vars.palette.action.hoverOpacity
                  })`
                : Gt(e.palette[t.color].main, e.palette.action.hoverOpacity),
              "@media (hover: none)": { backgroundColor: "transparent" },
            },
            [`&.${Xt.disabled}`]: {
              color: e.vars
                ? e.vars.palette.Switch[`${t.color}DisabledColor`]
                : `${
                    e.palette.mode === "light"
                      ? uw(e.palette[t.color].main, 0.62)
                      : sw(e.palette[t.color].main, 0.55)
                  }`,
            },
          },
          [`&.${Xt.checked} + .${Xt.track}`]: {
            backgroundColor: (e.vars || e).palette[t.color].main,
          },
        }
      )
  ),
  xH = Ee("span", {
    name: "MuiSwitch",
    slot: "Track",
    overridesResolver: (e, t) => t.track,
  })(({ theme: e }) => ({
    height: "100%",
    width: "100%",
    borderRadius: 14 / 2,
    zIndex: -1,
    transition: e.transitions.create(["opacity", "background-color"], {
      duration: e.transitions.duration.shortest,
    }),
    backgroundColor: e.vars
      ? e.vars.palette.common.onBackground
      : `${
          e.palette.mode === "light"
            ? e.palette.common.black
            : e.palette.common.white
        }`,
    opacity: e.vars
      ? e.vars.opacity.switchTrack
      : `${e.palette.mode === "light" ? 0.38 : 0.3}`,
  })),
  SH = Ee("span", {
    name: "MuiSwitch",
    slot: "Thumb",
    overridesResolver: (e, t) => t.thumb,
  })(({ theme: e }) => ({
    boxShadow: (e.vars || e).shadows[1],
    backgroundColor: "currentColor",
    width: 20,
    height: 20,
    borderRadius: "50%",
  })),
  wH = S.forwardRef(function (t, n) {
    const r = ft({ props: t, name: "MuiSwitch" }),
      {
        className: o,
        color: i = "primary",
        edge: a = !1,
        size: l = "medium",
        sx: s,
      } = r,
      u = xe(r, mH),
      c = T({}, r, { color: i, edge: a, size: l }),
      d = gH(c),
      f = w.jsx(SH, { className: d.thumb, ownerState: c });
    return w.jsxs(yH, {
      className: we(d.root, o),
      sx: s,
      ownerState: c,
      children: [
        w.jsx(
          bH,
          T(
            {
              type: "checkbox",
              icon: f,
              checkedIcon: f,
              ref: n,
              ownerState: c,
            },
            u,
            { classes: T({}, d, { root: d.switchBase }) }
          )
        ),
        w.jsx(xH, { className: d.track, ownerState: c }),
      ],
    });
  }),
  CH = wH;
function RH({ open: e, setOpen: t }) {
  const n = Tr(dr),
    [r, o] = S.useState(""),
    [i, a] = S.useState([
      "Riya singh",
      "suraj sahoo",
      "Ashish mahale",
      "Anshul Mishra",
    ]),
    [l, s] = S.useState(!1),
    [u, c] = S.useState(!1),
    [d, f] = S.useState("");
  function p() {
    t(!1), f(""), c(!1), s(!1);
  }
  function h() {
    r && (a([...i, r]), o(""));
  }
  function g() {
    s(!l);
  }
  function x() {
    const y = window.location.href;
    f(y);
  }
  function v() {
    navigator.clipboard
      .writeText(d)
      .then(() => {
        c(!0);
      })
      .catch((y) => {
        console.error("Error copying link to clipboard:", y);
      });
  }
  function m(y) {
    const b = [...i];
    b.splice(y, 1), a(b);
  }
  return w.jsx(w.Fragment, {
    children: w.jsxs(kw, {
      open: e,
      onClose: p,
      children: [
        w.jsx($N, {
          sx: n ? { backgroundColor: "black", color: "white" } : null,
          children: w.jsxs("span", {
            style: { display: "flex", justifyContent: "space-between" },
            children: [
              "Add Members",
              w.jsx("p", {
                onClick: p,
                style: { cursor: "pointer" },
                children: w.jsx(P4, {}),
              }),
            ],
          }),
        }),
        w.jsxs(Dw, {
          sx: n
            ? { backgroundColor: "black", color: "white" }
            : { marginTop: "1rem" },
          children: [
            w.jsxs("div", {
              children: [
                w.jsx("input", {
                  style: {
                    height: "2.3rem",
                    padding: "0.5rem",
                    outline: "none",
                  },
                  placeholder: "Add new members",
                  value: r,
                  onChange: (y) => o(y.target.value),
                }),
                w.jsx(al, {
                  variant: "contained",
                  onClick: h,
                  sx: { marginLeft: "1rem", width: "5rem" },
                  children: "Add",
                }),
              ],
            }),
            w.jsxs("div", {
              style: {
                display: "flex",
                flexDirection: "column",
                marginTop: "1rem",
                alignItems: "center",
              },
              children: [
                w.jsxs("p", {
                  style: { display: "flex", alignItems: "center" },
                  children: [
                    " ",
                    w.jsx(JB, { size: 20 }),
                    " Invite someone to this workspace with a link",
                  ],
                }),
                w.jsx(al, {
                  onClick: x,
                  children: w.jsx("u", { children: "Create Link" }),
                }),
              ],
            }),
            d &&
              w.jsxs(w.Fragment, {
                children: [
                  w.jsx("a", {
                    style: {
                      color: "blue",
                      marginTop: "0.5rem",
                      marginRight: "4rem",
                    },
                    children: d,
                  }),
                  " ",
                  w.jsx(al, { onClick: v, children: "copy link" }),
                ],
              }),
            w.jsx("br", {}),
            u && w.jsx("span", { children: "Link copied to clipboard!" }),
            w.jsx("br", {}),
            w.jsx(al, {
              variant: "contained",
              onClick: g,
              sx: { marginTop: "1rem", marginBottom: "1rem" },
              children: l ? "Hide Members" : "Show Members",
            }),
            l
              ? i.map((y, b) =>
                  w.jsx(
                    "ul",
                    {
                      style: { marginTop: "0.5rem", marginLeft: "1rem" },
                      children: w.jsxs("div", {
                        style: {
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "space-between",
                        },
                        children: [
                          w.jsxs("li", { children: [y, " "] }, b),
                          w.jsx("p", {
                            style: {
                              color: "red",
                              fontSize: "12px",
                              cursor: "pointer",
                            },
                            onClick: () => m(b),
                            children: "Remove",
                          }),
                        ],
                      }),
                    },
                    b
                  )
                )
              : "",
          ],
        }),
      ],
    }),
  });
}
function EH({ openPop: e, changeTheme: t, setAnchorEl: n, anchorEl: r }) {
  const [o, i] = Xn(dr),
    [a, l] = S.useState(!1),
    s = open ? "simple-popover" : void 0,
    u = (d) => {
      l(d.target.checked), i(!o);
    },
    c = () => {
      n(null);
    };
  return w.jsx("div", {
    children: w.jsx(TR, {
      id: s,
      open: e,
      anchorEl: r,
      onClose: c,
      anchorOrigin: { vertical: "bottom", horizontal: "left" },
      children: w.jsxs(Sm, {
        sx: o ? { backgroundColor: "black", color: "white", p: 2 } : { p: 2 },
        children: [
          w.jsx(al, {
            variant: "contained",
            onClick: t,
            sx: o
              ? {
                  backgroundColor: "#707070",
                  color: "white",
                  marginBottom: "1rem",
                }
              : {
                  backgroundColor: "white",
                  color: "black",
                  marginBottom: "1rem",
                },
            children: "Change Theme",
          }),
          w.jsx("br", {}),
          w.jsx("strong", { children: "Dark Mode" }),
          w.jsx(CH, {
            checked: !!o,
            onChange: u,
            inputProps: { "aria-label": "controlled" },
          }),
        ],
      }),
    }),
  });
}
function TH({
  collapsed: e,
  setCollapsed: t,
  handleCollapse: n,
  changeTheme: r,
}) {
  const [o, i] = oe.useState("Board Name"),
    [a, l] = oe.useState(!1),
    [s, u] = oe.useState(!1),
    [c, d] = oe.useState(null),
    [f, p] = Xn(ui);
  let h = localStorage.getItem("board name");
  function g(C) {
    i(C.target.value), localStorage.setItem("board name", C.target.value);
  }
  function x() {
    l(!a);
  }
  function v() {
    u(!0);
  }
  const m = (C) => {
      d(C.currentTarget);
    },
    y = !!c,
    b = () => {
      p([]), localStorage.setItem("data", null);
    };
  return w.jsxs(w.Fragment, {
    children: [
      w.jsxs("div", {
        className: Ln.header,
        children: [
          w.jsx("button", { className: Ln.logoBtn, children: "T" }),
          w.jsxs("div", {
            style: { display: "flex", flexDirection: "column" },
            children: [
              w.jsx("h4", { children: " Trello Workspace" }),
              w.jsx("p", { children: "Free" }),
            ],
          }),
          w.jsx(VE, { onClick: n, sx: { fontSize: "1.2rem" } }),
        ],
      }),
      w.jsx("hr", { style: { width: "100%", height: "0.5px" } }),
      w.jsx("div", {
        className: Ln.sideBarOptions,
        children: w.jsxs("div", {
          className: Ln.optionInner,
          onClick: b,
          children: [
            w.jsx(QB, { sx: { fontSize: "1.2rem" } }),
            w.jsx("p", { children: "Clear List" }),
          ],
        }),
      }),
      w.jsxs("div", {
        className: Ln.sideBarOptions,
        children: [
          w.jsxs("div", {
            className: Ln.optionInner,
            children: [
              w.jsx(GE, { sx: { fontSize: "1.2rem" } }),
              w.jsx("p", { children: "Members" }),
            ],
          }),
          w.jsx(Pg, { onClick: v, sx: { fontSize: "1.2rem" } }),
        ],
      }),
      w.jsxs("div", {
        className: Ln.sideBarOptions,
        children: [
          w.jsxs("div", {
            className: Ln.optionInner,
            children: [
              w.jsx(HE, { sx: { fontSize: "1.2rem" } }),
              w.jsx("p", { children: "Workspace Settings" }),
            ],
          }),
          w.jsx(WE, { onClick: m, sx: { fontSize: "1.2rem" } }),
        ],
      }),
      w.jsxs("div", {
        className: Ln.sideBarOptions,
        children: [
          w.jsx("h4", { children: "Your Boards" }),
          w.jsx("div", { className: Ln.optionInner }),
        ],
      }),
      w.jsxs("div", {
        className: Ln.sideBarOptions,
        children: [
          w.jsx("input", { type: "text", value: h || o, onChange: g }),
          w.jsx("div", {
            className: Ln.optionInner,
            children: w.jsx("p", {
              onClick: x,
              children: a ? w.jsx(XB, {}) : w.jsx(e6, {}),
            }),
          }),
        ],
      }),
      w.jsx(RH, { open: s, setOpen: u }),
      w.jsx(EH, {
        openPop: y,
        handleClick: m,
        setAnchorEl: d,
        anchorEl: c,
        changeTheme: r,
      }),
    ],
  });
}
const _H = "_HomeContainer_1a4ff_11",
  PH = "_Navbar_1a4ff_27",
  kH = "_container_1a4ff_37",
  DH = "_boardContainer_1a4ff_53",
  IH = "_collapsed_1a4ff_71",
  AH = "_sideBarContainer_1a4ff_79",
  NH = "_expandBtn_1a4ff_1",
  Xr = {
    HomeContainer: _H,
    Navbar: PH,
    container: kH,
    boardContainer: DH,
    collapsed: IH,
    sideBarContainer: AH,
    expandBtn: NH,
  },
  OH = "/assets/first-https://www.pexels.com/photo/paper-roses-1020478/",
  MH = "/assets/clone-a9b6fa5f.jpg",
  $H = "/assets/MImage-f8114435.jpg",
  LH = "/assets/gxupdate-57a59a30.jpg",
  BH = "/assets/Webb-d6b64ec4.jpg",
  FH = () => {
    const [e, t] = oe.useState(!1),
      [n, r] = oe.useState(0),
      o = [OH, MH, $H, LH, BH],
      i = () => {
        t(!e);
      },
      a = () => {
        o.length - 1 > n ? r(n + 1) : r(0);
      };
    return w.jsxs("div", {
      className: Xr.HomeContainer,
      children: [
        w.jsx("div", { className: Xr.Navbar, children: w.jsx(lj, {}) }),
        w.jsxs("div", {
          className: Xr.container,
          children: [
            w.jsx("div", {
              className: ` ${Xr.sideBarContainer} ${e ? Xr.collapsed : null}`,
              children: e
                ? w.jsx("button", {
                    id: Xr.expandBtn,
                    onClick: i,
                    children: w.jsx(yR, { sx: { fontSize: "1.5rem" } }),
                  })
                : w.jsx(TH, {
                    collapsed: e,
                    setCollapsed: t,
                    handleCollapse: i,
                    changeTheme: a,
                  }),
            }),
            w.jsx("div", {
              className: ` ${Xr.boardContainer} ${e ? Xr.collapsed : null}`,
              style: { backgroundImage: `url(${o[n]})` },
              children: w.jsx(_W, {}),
            }),
          ],
        }),
      ],
    });
  };
function jH() {
  const e = g8(
    Fv(
      w.jsx(Bv, {
        path: "/",
        element: w.jsxs(w.Fragment, {
          children: [w.jsx(FH, {}), w.jsx(v8, {})],
        }),
        children: w.jsx(Bv, { path: "/details/:id", element: w.jsx(S8, {}) }),
      })
    )
  );
  return w.jsx(NB, { children: w.jsx(f8, { router: e }) });
}
Sp.createRoot(document.getElementById("root")).render(w.jsx(jH, {}));
