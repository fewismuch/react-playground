import Pe, { useRef as Z, useState as ur, useEffect as Q } from "react";
var ee = { exports: {} }, N = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Se;
function cr() {
  if (Se)
    return N;
  Se = 1;
  var m = Pe, b = Symbol.for("react.element"), x = Symbol.for("react.fragment"), h = Object.prototype.hasOwnProperty, S = m.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, C = { key: !0, ref: !0, __self: !0, __source: !0 };
  function O(g, f, E) {
    var l, d = {}, R = null, T = null;
    E !== void 0 && (R = "" + E), f.key !== void 0 && (R = "" + f.key), f.ref !== void 0 && (T = f.ref);
    for (l in f)
      h.call(f, l) && !C.hasOwnProperty(l) && (d[l] = f[l]);
    if (g && g.defaultProps)
      for (l in f = g.defaultProps, f)
        d[l] === void 0 && (d[l] = f[l]);
    return { $$typeof: b, type: g, key: R, ref: T, props: d, _owner: S.current };
  }
  return N.Fragment = x, N.jsx = O, N.jsxs = O, N;
}
var L = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Oe;
function fr() {
  return Oe || (Oe = 1, {}.NODE_ENV !== "production" && function() {
    var m = Pe, b = Symbol.for("react.element"), x = Symbol.for("react.portal"), h = Symbol.for("react.fragment"), S = Symbol.for("react.strict_mode"), C = Symbol.for("react.profiler"), O = Symbol.for("react.provider"), g = Symbol.for("react.context"), f = Symbol.for("react.forward_ref"), E = Symbol.for("react.suspense"), l = Symbol.for("react.suspense_list"), d = Symbol.for("react.memo"), R = Symbol.for("react.lazy"), T = Symbol.for("react.offscreen"), A = Symbol.iterator, W = "@@iterator";
    function Ce(e) {
      if (e === null || typeof e != "object")
        return null;
      var r = A && e[A] || e[W];
      return typeof r == "function" ? r : null;
    }
    var j = m.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function p(e) {
      {
        for (var r = arguments.length, t = new Array(r > 1 ? r - 1 : 0), n = 1; n < r; n++)
          t[n - 1] = arguments[n];
        je("error", e, t);
      }
    }
    function je(e, r, t) {
      {
        var n = j.ReactDebugCurrentFrame, o = n.getStackAddendum();
        o !== "" && (r += "%s", t = t.concat([o]));
        var s = t.map(function(i) {
          return String(i);
        });
        s.unshift("Warning: " + r), Function.prototype.apply.call(console[e], console, s);
      }
    }
    var De = !1, ke = !1, Ae = !1, Fe = !1, Ie = !1, re;
    re = Symbol.for("react.module.reference");
    function Ne(e) {
      return !!(typeof e == "string" || typeof e == "function" || e === h || e === C || Ie || e === S || e === E || e === l || Fe || e === T || De || ke || Ae || typeof e == "object" && e !== null && (e.$$typeof === R || e.$$typeof === d || e.$$typeof === O || e.$$typeof === g || e.$$typeof === f || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      e.$$typeof === re || e.getModuleId !== void 0));
    }
    function Le(e, r, t) {
      var n = e.displayName;
      if (n)
        return n;
      var o = r.displayName || r.name || "";
      return o !== "" ? t + "(" + o + ")" : t;
    }
    function te(e) {
      return e.displayName || "Context";
    }
    function _(e) {
      if (e == null)
        return null;
      if (typeof e.tag == "number" && p("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof e == "function")
        return e.displayName || e.name || null;
      if (typeof e == "string")
        return e;
      switch (e) {
        case h:
          return "Fragment";
        case x:
          return "Portal";
        case C:
          return "Profiler";
        case S:
          return "StrictMode";
        case E:
          return "Suspense";
        case l:
          return "SuspenseList";
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case g:
            var r = e;
            return te(r) + ".Consumer";
          case O:
            var t = e;
            return te(t._context) + ".Provider";
          case f:
            return Le(e, e.render, "ForwardRef");
          case d:
            var n = e.displayName || null;
            return n !== null ? n : _(e.type) || "Memo";
          case R: {
            var o = e, s = o._payload, i = o._init;
            try {
              return _(i(s));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var P = Object.assign, F = 0, ne, ae, ie, oe, se, le, ue;
    function ce() {
    }
    ce.__reactDisabledLog = !0;
    function We() {
      {
        if (F === 0) {
          ne = console.log, ae = console.info, ie = console.warn, oe = console.error, se = console.group, le = console.groupCollapsed, ue = console.groupEnd;
          var e = {
            configurable: !0,
            enumerable: !0,
            value: ce,
            writable: !0
          };
          Object.defineProperties(console, {
            info: e,
            log: e,
            warn: e,
            error: e,
            group: e,
            groupCollapsed: e,
            groupEnd: e
          });
        }
        F++;
      }
    }
    function Me() {
      {
        if (F--, F === 0) {
          var e = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: P({}, e, {
              value: ne
            }),
            info: P({}, e, {
              value: ae
            }),
            warn: P({}, e, {
              value: ie
            }),
            error: P({}, e, {
              value: oe
            }),
            group: P({}, e, {
              value: se
            }),
            groupCollapsed: P({}, e, {
              value: le
            }),
            groupEnd: P({}, e, {
              value: ue
            })
          });
        }
        F < 0 && p("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var B = j.ReactCurrentDispatcher, X;
    function M(e, r, t) {
      {
        if (X === void 0)
          try {
            throw Error();
          } catch (o) {
            var n = o.stack.trim().match(/\n( *(at )?)/);
            X = n && n[1] || "";
          }
        return `
` + X + e;
      }
    }
    var q = !1, U;
    {
      var Ue = typeof WeakMap == "function" ? WeakMap : Map;
      U = new Ue();
    }
    function fe(e, r) {
      if (!e || q)
        return "";
      {
        var t = U.get(e);
        if (t !== void 0)
          return t;
      }
      var n;
      q = !0;
      var o = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var s;
      s = B.current, B.current = null, We();
      try {
        if (r) {
          var i = function() {
            throw Error();
          };
          if (Object.defineProperty(i.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(i, []);
            } catch (w) {
              n = w;
            }
            Reflect.construct(e, [], i);
          } else {
            try {
              i.call();
            } catch (w) {
              n = w;
            }
            e.call(i.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (w) {
            n = w;
          }
          e();
        }
      } catch (w) {
        if (w && n && typeof w.stack == "string") {
          for (var a = w.stack.split(`
`), v = n.stack.split(`
`), u = a.length - 1, c = v.length - 1; u >= 1 && c >= 0 && a[u] !== v[c]; )
            c--;
          for (; u >= 1 && c >= 0; u--, c--)
            if (a[u] !== v[c]) {
              if (u !== 1 || c !== 1)
                do
                  if (u--, c--, c < 0 || a[u] !== v[c]) {
                    var y = `
` + a[u].replace(" at new ", " at ");
                    return e.displayName && y.includes("<anonymous>") && (y = y.replace("<anonymous>", e.displayName)), typeof e == "function" && U.set(e, y), y;
                  }
                while (u >= 1 && c >= 0);
              break;
            }
        }
      } finally {
        q = !1, B.current = s, Me(), Error.prepareStackTrace = o;
      }
      var k = e ? e.displayName || e.name : "", xe = k ? M(k) : "";
      return typeof e == "function" && U.set(e, xe), xe;
    }
    function $e(e, r, t) {
      return fe(e, !1);
    }
    function Ye(e) {
      var r = e.prototype;
      return !!(r && r.isReactComponent);
    }
    function $(e, r, t) {
      if (e == null)
        return "";
      if (typeof e == "function")
        return fe(e, Ye(e));
      if (typeof e == "string")
        return M(e);
      switch (e) {
        case E:
          return M("Suspense");
        case l:
          return M("SuspenseList");
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case f:
            return $e(e.render);
          case d:
            return $(e.type, r, t);
          case R: {
            var n = e, o = n._payload, s = n._init;
            try {
              return $(s(o), r, t);
            } catch {
            }
          }
        }
      return "";
    }
    var Y = Object.prototype.hasOwnProperty, de = {}, pe = j.ReactDebugCurrentFrame;
    function V(e) {
      if (e) {
        var r = e._owner, t = $(e.type, e._source, r ? r.type : null);
        pe.setExtraStackFrame(t);
      } else
        pe.setExtraStackFrame(null);
    }
    function Ve(e, r, t, n, o) {
      {
        var s = Function.call.bind(Y);
        for (var i in e)
          if (s(e, i)) {
            var a = void 0;
            try {
              if (typeof e[i] != "function") {
                var v = Error((n || "React class") + ": " + t + " type `" + i + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof e[i] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw v.name = "Invariant Violation", v;
              }
              a = e[i](r, i, n, t, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (u) {
              a = u;
            }
            a && !(a instanceof Error) && (V(o), p("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", n || "React class", t, i, typeof a), V(null)), a instanceof Error && !(a.message in de) && (de[a.message] = !0, V(o), p("Failed %s type: %s", t, a.message), V(null));
          }
      }
    }
    var Be = Array.isArray;
    function G(e) {
      return Be(e);
    }
    function Xe(e) {
      {
        var r = typeof Symbol == "function" && Symbol.toStringTag, t = r && e[Symbol.toStringTag] || e.constructor.name || "Object";
        return t;
      }
    }
    function qe(e) {
      try {
        return ve(e), !1;
      } catch {
        return !0;
      }
    }
    function ve(e) {
      return "" + e;
    }
    function me(e) {
      if (qe(e))
        return p("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", Xe(e)), ve(e);
    }
    var I = j.ReactCurrentOwner, Ge = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, ge, ye, z;
    z = {};
    function ze(e) {
      if (Y.call(e, "ref")) {
        var r = Object.getOwnPropertyDescriptor(e, "ref").get;
        if (r && r.isReactWarning)
          return !1;
      }
      return e.ref !== void 0;
    }
    function Je(e) {
      if (Y.call(e, "key")) {
        var r = Object.getOwnPropertyDescriptor(e, "key").get;
        if (r && r.isReactWarning)
          return !1;
      }
      return e.key !== void 0;
    }
    function He(e, r) {
      if (typeof e.ref == "string" && I.current && r && I.current.stateNode !== r) {
        var t = _(I.current.type);
        z[t] || (p('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', _(I.current.type), e.ref), z[t] = !0);
      }
    }
    function Ke(e, r) {
      {
        var t = function() {
          ge || (ge = !0, p("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", r));
        };
        t.isReactWarning = !0, Object.defineProperty(e, "key", {
          get: t,
          configurable: !0
        });
      }
    }
    function Ze(e, r) {
      {
        var t = function() {
          ye || (ye = !0, p("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", r));
        };
        t.isReactWarning = !0, Object.defineProperty(e, "ref", {
          get: t,
          configurable: !0
        });
      }
    }
    var Qe = function(e, r, t, n, o, s, i) {
      var a = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: b,
        // Built-in properties that belong on the element
        type: e,
        key: r,
        ref: t,
        props: i,
        // Record the component responsible for creating this element.
        _owner: s
      };
      return a._store = {}, Object.defineProperty(a._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: !1
      }), Object.defineProperty(a, "_self", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: n
      }), Object.defineProperty(a, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: o
      }), Object.freeze && (Object.freeze(a.props), Object.freeze(a)), a;
    };
    function er(e, r, t, n, o) {
      {
        var s, i = {}, a = null, v = null;
        t !== void 0 && (me(t), a = "" + t), Je(r) && (me(r.key), a = "" + r.key), ze(r) && (v = r.ref, He(r, o));
        for (s in r)
          Y.call(r, s) && !Ge.hasOwnProperty(s) && (i[s] = r[s]);
        if (e && e.defaultProps) {
          var u = e.defaultProps;
          for (s in u)
            i[s] === void 0 && (i[s] = u[s]);
        }
        if (a || v) {
          var c = typeof e == "function" ? e.displayName || e.name || "Unknown" : e;
          a && Ke(i, c), v && Ze(i, c);
        }
        return Qe(e, a, v, o, n, I.current, i);
      }
    }
    var J = j.ReactCurrentOwner, he = j.ReactDebugCurrentFrame;
    function D(e) {
      if (e) {
        var r = e._owner, t = $(e.type, e._source, r ? r.type : null);
        he.setExtraStackFrame(t);
      } else
        he.setExtraStackFrame(null);
    }
    var H;
    H = !1;
    function K(e) {
      return typeof e == "object" && e !== null && e.$$typeof === b;
    }
    function be() {
      {
        if (J.current) {
          var e = _(J.current.type);
          if (e)
            return `

Check the render method of \`` + e + "`.";
        }
        return "";
      }
    }
    function rr(e) {
      {
        if (e !== void 0) {
          var r = e.fileName.replace(/^.*[\\\/]/, ""), t = e.lineNumber;
          return `

Check your code at ` + r + ":" + t + ".";
        }
        return "";
      }
    }
    var Ee = {};
    function tr(e) {
      {
        var r = be();
        if (!r) {
          var t = typeof e == "string" ? e : e.displayName || e.name;
          t && (r = `

Check the top-level render call using <` + t + ">.");
        }
        return r;
      }
    }
    function Re(e, r) {
      {
        if (!e._store || e._store.validated || e.key != null)
          return;
        e._store.validated = !0;
        var t = tr(r);
        if (Ee[t])
          return;
        Ee[t] = !0;
        var n = "";
        e && e._owner && e._owner !== J.current && (n = " It was passed a child from " + _(e._owner.type) + "."), D(e), p('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', t, n), D(null);
      }
    }
    function _e(e, r) {
      {
        if (typeof e != "object")
          return;
        if (G(e))
          for (var t = 0; t < e.length; t++) {
            var n = e[t];
            K(n) && Re(n, r);
          }
        else if (K(e))
          e._store && (e._store.validated = !0);
        else if (e) {
          var o = Ce(e);
          if (typeof o == "function" && o !== e.entries)
            for (var s = o.call(e), i; !(i = s.next()).done; )
              K(i.value) && Re(i.value, r);
        }
      }
    }
    function nr(e) {
      {
        var r = e.type;
        if (r == null || typeof r == "string")
          return;
        var t;
        if (typeof r == "function")
          t = r.propTypes;
        else if (typeof r == "object" && (r.$$typeof === f || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        r.$$typeof === d))
          t = r.propTypes;
        else
          return;
        if (t) {
          var n = _(r);
          Ve(t, e.props, "prop", n, e);
        } else if (r.PropTypes !== void 0 && !H) {
          H = !0;
          var o = _(r);
          p("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", o || "Unknown");
        }
        typeof r.getDefaultProps == "function" && !r.getDefaultProps.isReactClassApproved && p("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function ar(e) {
      {
        for (var r = Object.keys(e.props), t = 0; t < r.length; t++) {
          var n = r[t];
          if (n !== "children" && n !== "key") {
            D(e), p("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", n), D(null);
            break;
          }
        }
        e.ref !== null && (D(e), p("Invalid attribute `ref` supplied to `React.Fragment`."), D(null));
      }
    }
    function we(e, r, t, n, o, s) {
      {
        var i = Ne(e);
        if (!i) {
          var a = "";
          (e === void 0 || typeof e == "object" && e !== null && Object.keys(e).length === 0) && (a += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var v = rr(o);
          v ? a += v : a += be();
          var u;
          e === null ? u = "null" : G(e) ? u = "array" : e !== void 0 && e.$$typeof === b ? (u = "<" + (_(e.type) || "Unknown") + " />", a = " Did you accidentally export a JSX literal instead of a component?") : u = typeof e, p("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", u, a);
        }
        var c = er(e, r, t, o, s);
        if (c == null)
          return c;
        if (i) {
          var y = r.children;
          if (y !== void 0)
            if (n)
              if (G(y)) {
                for (var k = 0; k < y.length; k++)
                  _e(y[k], e);
                Object.freeze && Object.freeze(y);
              } else
                p("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              _e(y, e);
        }
        return e === h ? ar(c) : nr(c), c;
      }
    }
    function ir(e, r, t) {
      return we(e, r, t, !0);
    }
    function or(e, r, t) {
      return we(e, r, t, !1);
    }
    var sr = or, lr = ir;
    L.Fragment = h, L.jsx = sr, L.jsxs = lr;
  }()), L;
}
({}).NODE_ENV === "production" ? ee.exports = cr() : ee.exports = fr();
var Te = ee.exports;
const dr = (m) => {
  const b = "//unpkg.com/es-module-shims@1.8.0/dist/es-module-shims.js", x = typeof import.meta > "u" ? m.replace("<!-- es-module-shims -->", `<script async src="${b}"><\/script>`) : m;
  return URL.createObjectURL(new Blob([x], { type: "text/html" }));
}, pr = `<!doctype html>
<html lang="en">
<head>
  <meta charset="UTF-8"/>
  <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
  <title>Preview</title>
  <!-- es-module-shims -->
  <style>
    * {
      padding: 0;
      margin: 0;
    }
  </style>
</head>
<body>
<script type="importmap">
  {
    "imports": {
      "react": "https://esm.sh/react@18.2.0",
      "react-dom/client": "https://esm.sh/react-dom@18.2.0"
    }
  }
<\/script>
<script>

<\/script>
<script type="module">
  import React, {useState, useEffect} from 'react';
  import ReactDOM from 'react-dom/client';
  import {Playground} from 'https://esm.sh/react-exercise-playground@#version#'

  const App = () => {
    const [sandboxProps, setSandboxProps] = useState(null);

    useEffect(() => {
      window.addEventListener('message', ({data}) => {
        if (data?.type === 'SANDBOX_RUN') {
          data.data.onFilesChange = (val) => {
            window.parent.postMessage({type: 'SANDBOX_ON_FILES_CHANGE', message: val})
          }
          setSandboxProps(data.data)
        }
      })
    }, [])

    return sandboxProps ? React.createElement(React.StrictMode, null, React.createElement(Playground, sandboxProps)) : null
  };

  window.addEventListener('load', () => {
    window.parent.postMessage({type: 'SANDBOX_LOADED', message: ''})
    const root = document.getElementById('root')
    ReactDOM.createRoot(root).render(React.createElement(App, null))
  })
<\/script>
<div id="root">
  <div style="position:absolute;top: 0;left:0;width:100%;height:100%;display: flex;justify-content: center;align-items: center;">
    Loading...
  </div>
</div>
</body>
</html>
`, vr = "react-exercise-playground", mr = "react-exercise-playground是一个react在线代码编辑器可实时预览运行效果", gr = "0.1.93", yr = {
  ".": {
    import: {
      types: "./dist/@types/Playground/index.d.ts",
      default: "./dist/index.mjs"
    }
  },
  "./PlaygroundSandbox": {
    import: {
      types: "./dist/@types/Playground/PlaygroundSandbox.d.ts",
      default: "./dist/PlaygroundSandbox.mjs"
    }
  }
}, hr = [
  "dist/*"
], br = {
  type: "git",
  url: "https://github.com/fewismuch/react-playground.git"
}, Er = {
  url: "https://github.com/fewismuch/react-playground/issues",
  email: "779205344@qq.com"
}, Rr = [
  "react",
  "react-playground",
  "playground",
  "react-live",
  "live-editor",
  "codeSandbox",
  "sandbox",
  "live"
], _r = "fewismuch", wr = "MIT", xr = {
  dev: "vite",
  build: "vite build && tsc",
  docs: "vite build && tsc",
  preview: "vite preview",
  prepare: "husky install",
  report: "tsc && vite build",
  prepublish: "npm run docs && npm run build && npm publish"
}, Sr = {
  "@babel/standalone": "^7.23.1",
  "@monaco-editor/react": "^4.5.2",
  "@typescript/ata": "^0.9.4",
  allotment: "^1.19.3",
  classnames: "^2.3.2",
  fflate: "^0.8.1",
  "file-saver": "^2.0.5",
  jszip: "^3.10.1",
  "monaco-editor": "^0.43.0",
  "monaco-jsx-syntax-highlight": "^1.2.0",
  react: "^18.2.0",
  "react-copy-to-clipboard": "^5.1.0",
  "react-dom": "^18.2.0"
}, Or = {
  react: ">=18.2.0",
  "react-dom": ">=18.2.0"
}, Tr = {
  "@types/babel__standalone": "^7.1.5",
  "@types/file-saver": "^2.0.5",
  "@types/node": "^20.8.10",
  "@types/react": "^18.2.15",
  "@types/react-dom": "^18.2.7",
  "@typescript-eslint/eslint-plugin": "^6.8.0",
  "@typescript-eslint/parser": "^6.8.0",
  "@vitejs/plugin-react-swc": "^3.3.2",
  eslint: "^8.45.0",
  "eslint-config-prettier": "^9.0.0",
  "eslint-config-standard": "^17.1.0",
  "eslint-plugin-import": "^2.28.1",
  "eslint-plugin-n": "^16.2.0",
  "eslint-plugin-prettier": "^5.0.1",
  "eslint-plugin-promise": "^6.1.1",
  "eslint-plugin-react": "^7.33.2",
  "eslint-plugin-react-hooks": "^4.6.0",
  "eslint-plugin-react-refresh": "^0.4.3",
  "eslint-plugin-standard": "^5.0.0",
  husky: "^8.0.3",
  less: "^4.1.3",
  "less-loader": "^11.1.2",
  "lint-staged": "^15.0.2",
  prettier: "^3.0.3",
  "rollup-plugin-visualizer": "^5.9.2",
  stylelint: "^15.11.0",
  "stylelint-config-css-modules": "^4.3.0",
  "stylelint-config-prettier": "^9.0.5",
  "stylelint-config-recommended-less": "^2.0.0",
  "stylelint-config-standard": "^34.0.0",
  "stylelint-less": "^2.0.0",
  "stylelint-order": "^6.0.3",
  "stylelint-prettier": "^4.0.2",
  typescript: "^5.0.2",
  vite: "^4.4.5",
  "vite-plugin-cdn-import": "^0.3.5",
  "vite-plugin-css-injected-by-js": "^3.3.0"
}, Pr = {
  name: vr,
  description: mr,
  private: !1,
  version: gr,
  exports: yr,
  files: hr,
  repository: br,
  bugs: Er,
  keywords: Rr,
  author: _r,
  license: wr,
  scripts: xr,
  dependencies: Sr,
  peerDependencies: Or,
  devDependencies: Tr,
  "lint-staged": {
    "src/**/*.{js,jsx,ts,tsx}": [
      "eslint --max-warnings 0"
    ],
    "src/**/*.{css,less,scss}": [
      "stylelint --max-warnings 0"
    ]
  }
}, Cr = pr.replace("#version#", Pr.version), jr = dr(Cr) + window.location.hash, kr = (m) => {
  const { width: b = "100vw", height: x = "100vh" } = m, h = Z(null), S = Z(!1), [C, O] = ur(!1), g = Z(null), f = (l) => {
    l.forEach((d) => {
      d.isIntersecting && O(!0);
    });
  }, E = (l) => {
    var T, A, W;
    const { type: d, message: R } = l.data;
    d === "SANDBOX_LOADED" ? ((A = (T = h.current) == null ? void 0 : T.contentWindow) == null || A.postMessage({
      type: "SANDBOX_RUN",
      data: {
        ...m,
        onFilesChange: void 0
      }
    }), S.current = !0) : d === "SANDBOX_ON_FILES_CHANGE" && ((W = m.onFilesChange) == null || W.call(m, R));
  };
  return Q(() => {
    const l = new IntersectionObserver(f, {
      threshold: 0.2
    });
    return g.current && l.observe(g.current), () => {
      g.current && l.unobserve(g.current);
    };
  }, []), Q(() => (window.addEventListener("message", E), () => {
    window.removeEventListener("message", E);
  }), []), Q(() => {
    var l, d;
    S.current && ((d = (l = h.current) == null ? void 0 : l.contentWindow) == null || d.postMessage({
      type: "SANDBOX_RUN",
      data: {
        ...m,
        onFilesChange: void 0
      }
    }));
  }, [m]), /* @__PURE__ */ Te.jsx("div", { ref: g, style: { width: b, height: x }, children: C ? /* @__PURE__ */ Te.jsx(
    "iframe",
    {
      ref: h,
      src: jr,
      style: {
        width: "100%",
        height: "100%",
        padding: 0,
        border: "none"
      },
      sandbox: "allow-popups-to-escape-sandbox allow-scripts allow-popups allow-forms allow-pointer-lock allow-top-navigation allow-modals allow-same-origin"
    }
  ) : null });
};
export {
  kr as S,
  dr as g,
  Te as j
};
