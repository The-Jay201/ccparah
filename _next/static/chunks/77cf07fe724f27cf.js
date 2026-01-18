(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push(["object" == typeof document ? document.currentScript : void 0, 955, (e, t, n) => {
    var r = {
            229: function(e) {
                var t, n, r, o = e.exports = {};

                function i() {
                    throw Error("setTimeout has not been defined")
                }

                function s() {
                    throw Error("clearTimeout has not been defined")
                }
                try {
                    t = "function" == typeof setTimeout ? setTimeout : i
                } catch (e) {
                    t = i
                }
                try {
                    n = "function" == typeof clearTimeout ? clearTimeout : s
                } catch (e) {
                    n = s
                }

                function a(e) {
                    if (t === setTimeout) return setTimeout(e, 0);
                    if ((t === i || !t) && setTimeout) return t = setTimeout, setTimeout(e, 0);
                    try {
                        return t(e, 0)
                    } catch (n) {
                        try {
                            return t.call(null, e, 0)
                        } catch (n) {
                            return t.call(this, e, 0)
                        }
                    }
                }
                var u = [],
                    l = !1,
                    c = -1;

                function d() {
                    l && r && (l = !1, r.length ? u = r.concat(u) : c = -1, u.length && f())
                }

                function f() {
                    if (!l) {
                        var e = a(d);
                        l = !0;
                        for (var t = u.length; t;) {
                            for (r = u, u = []; ++c < t;) r && r[c].run();
                            c = -1, t = u.length
                        }
                        r = null, l = !1,
                            function(e) {
                                if (n === clearTimeout) return clearTimeout(e);
                                if ((n === s || !n) && clearTimeout) return n = clearTimeout, clearTimeout(e);
                                try {
                                    n(e)
                                } catch (t) {
                                    try {
                                        return n.call(null, e)
                                    } catch (t) {
                                        return n.call(this, e)
                                    }
                                }
                            }(e)
                    }
                }

                function p(e, t) {
                    this.fun = e, this.array = t
                }

                function h() {}
                o.nextTick = function(e) {
                    var t = Array(arguments.length - 1);
                    if (arguments.length > 1)
                        for (var n = 1; n < arguments.length; n++) t[n - 1] = arguments[n];
                    u.push(new p(e, t)), 1 !== u.length || l || a(f)
                }, p.prototype.run = function() {
                    this.fun.apply(null, this.array)
                }, o.title = "browser", o.browser = !0, o.env = {}, o.argv = [], o.version = "", o.versions = {}, o.on = h, o.addListener = h, o.once = h, o.off = h, o.removeListener = h, o.removeAllListeners = h, o.emit = h, o.prependListener = h, o.prependOnceListener = h, o.listeners = function(e) {
                    return []
                }, o.binding = function(e) {
                    throw Error("process.binding is not supported")
                }, o.cwd = function() {
                    return "/"
                }, o.chdir = function(e) {
                    throw Error("process.chdir is not supported")
                }, o.umask = function() {
                    return 0
                }
            }
        },
        o = {};

    function i(e) {
        var t = o[e];
        if (void 0 !== t) return t.exports;
        var n = o[e] = {
                exports: {}
            },
            s = !0;
        try {
            r[e](n, n.exports, i), s = !1
        } finally {
            s && delete o[e]
        }
        return n.exports
    }
    i.ab = "/ROOT/node_modules/next/dist/compiled/process/", t.exports = i(229)
}, 461, (e, t, n) => {
    "use strict";
    var r, o;
    t.exports = (null == (r = e.g.process) ? void 0 : r.env) && "object" == typeof(null == (o = e.g.process) ? void 0 : o.env) ? e.g.process : e.r(955)
}, 8481, (e, t, n) => {
    "use strict";
    var r = Symbol.for("react.transitional.element");

    function o(e, t, n) {
        var o = null;
        if (void 0 !== n && (o = "" + n), void 0 !== t.key && (o = "" + t.key), "key" in t)
            for (var i in n = {}, t) "key" !== i && (n[i] = t[i]);
        else n = t;
        return {
            $$typeof: r,
            type: e,
            key: o,
            ref: void 0 !== (t = n.ref) ? t : null,
            props: n
        }
    }
    n.Fragment = Symbol.for("react.fragment"), n.jsx = o, n.jsxs = o
}, 1398, (e, t, n) => {
    "use strict";
    t.exports = e.r(8481)
}, 1556, (e, t, n) => {
    "use strict";
    var r = e.i(461),
        o = Symbol.for("react.transitional.element"),
        i = Symbol.for("react.portal"),
        s = Symbol.for("react.fragment"),
        a = Symbol.for("react.strict_mode"),
        u = Symbol.for("react.profiler"),
        l = Symbol.for("react.consumer"),
        c = Symbol.for("react.context"),
        d = Symbol.for("react.forward_ref"),
        f = Symbol.for("react.suspense"),
        p = Symbol.for("react.memo"),
        h = Symbol.for("react.lazy"),
        m = Symbol.for("react.activity"),
        _ = Symbol.iterator,
        y = {
            isMounted: function() {
                return !1
            },
            enqueueForceUpdate: function() {},
            enqueueReplaceState: function() {},
            enqueueSetState: function() {}
        },
        v = Object.assign,
        g = {};

    function b(e, t, n) {
        this.props = e, this.context = t, this.refs = g, this.updater = n || y
    }

    function S() {}

    function w(e, t, n) {
        this.props = e, this.context = t, this.refs = g, this.updater = n || y
    }
    b.prototype.isReactComponent = {}, b.prototype.setState = function(e, t) {
        if ("object" != typeof e && "function" != typeof e && null != e) throw Error("takes an object of state variables to update or a function which returns an object of state variables.");
        this.updater.enqueueSetState(this, e, t, "setState")
    }, b.prototype.forceUpdate = function(e) {
        this.updater.enqueueForceUpdate(this, e, "forceUpdate")
    }, S.prototype = b.prototype;
    var x = w.prototype = new S;
    x.constructor = w, v(x, b.prototype), x.isPureReactComponent = !0;
    var j = Array.isArray;

    function E() {}
    var T = {
            H: null,
            A: null,
            T: null,
            S: null
        },
        k = Object.prototype.hasOwnProperty;

    function C(e, t, n) {
        var r = n.ref;
        return {
            $$typeof: o,
            type: e,
            key: t,
            ref: void 0 !== r ? r : null,
            props: n
        }
    }

    function O(e) {
        return "object" == typeof e && null !== e && e.$$typeof === o
    }
    var R = /\/+/g;

    function P(e, t) {
        var n, r;
        return "object" == typeof e && null !== e && null != e.key ? (n = "" + e.key, r = {
            "=": "=0",
            ":": "=2"
        }, "$" + n.replace(/[=:]/g, function(e) {
            return r[e]
        })) : t.toString(36)
    }

    function N(e, t, n) {
        if (null == e) return e;
        var r = [],
            s = 0;
        return ! function e(t, n, r, s, a) {
            var u, l, c, d = typeof t;
            ("undefined" === d || "boolean" === d) && (t = null);
            var f = !1;
            if (null === t) f = !0;
            else switch (d) {
                case "bigint":
                case "string":
                case "number":
                    f = !0;
                    break;
                case "object":
                    switch (t.$$typeof) {
                        case o:
                        case i:
                            f = !0;
                            break;
                        case h:
                            return e((f = t._init)(t._payload), n, r, s, a)
                    }
            }
            if (f) return a = a(t), f = "" === s ? "." + P(t, 0) : s, j(a) ? (r = "", null != f && (r = f.replace(R, "$&/") + "/"), e(a, n, r, "", function(e) {
                return e
            })) : null != a && (O(a) && (u = a, l = r + (null == a.key || t && t.key === a.key ? "" : ("" + a.key).replace(R, "$&/") + "/") + f, a = C(u.type, l, u.props)), n.push(a)), 1;
            f = 0;
            var p = "" === s ? "." : s + ":";
            if (j(t))
                for (var m = 0; m < t.length; m++) d = p + P(s = t[m], m), f += e(s, n, r, d, a);
            else if ("function" == typeof(m = null === (c = t) || "object" != typeof c ? null : "function" == typeof(c = _ && c[_] || c["@@iterator"]) ? c : null))
                for (t = m.call(t), m = 0; !(s = t.next()).done;) d = p + P(s = s.value, m++), f += e(s, n, r, d, a);
            else if ("object" === d) {
                if ("function" == typeof t.then) return e(function(e) {
                    switch (e.status) {
                        case "fulfilled":
                            return e.value;
                        case "rejected":
                            throw e.reason;
                        default:
                            switch ("string" == typeof e.status ? e.then(E, E) : (e.status = "pending", e.then(function(t) {
                                "pending" === e.status && (e.status = "fulfilled", e.value = t)
                            }, function(t) {
                                "pending" === e.status && (e.status = "rejected", e.reason = t)
                            })), e.status) {
                                case "fulfilled":
                                    return e.value;
                                case "rejected":
                                    throw e.reason
                            }
                    }
                    throw e
                }(t), n, r, s, a);
                throw Error("Objects are not valid as a React child (found: " + ("[object Object]" === (n = String(t)) ? "object with keys {" + Object.keys(t).join(", ") + "}" : n) + "). If you meant to render a collection of children, use an array instead.")
            }
            return f
        }(e, r, "", "", function(e) {
            return t.call(n, e, s++)
        }), r
    }

    function F(e) {
        if (-1 === e._status) {
            var t = e._result;
            (t = t()).then(function(t) {
                (0 === e._status || -1 === e._status) && (e._status = 1, e._result = t)
            }, function(t) {
                (0 === e._status || -1 === e._status) && (e._status = 2, e._result = t)
            }), -1 === e._status && (e._status = 0, e._result = t)
        }
        if (1 === e._status) return e._result.default;
        throw e._result
    }
    var A = "function" == typeof reportError ? reportError : function(e) {
        if ("object" == typeof window && "function" == typeof window.ErrorEvent) {
            var t = new window.ErrorEvent("error", {
                bubbles: !0,
                cancelable: !0,
                message: "object" == typeof e && null !== e && "string" == typeof e.message ? String(e.message) : String(e),
                error: e
            });
            if (!window.dispatchEvent(t)) return
        } else if ("object" == typeof r.default && "function" == typeof r.default.emit) return void r.default.emit("uncaughtException", e);
        console.error(e)
    };
    n.Activity = m, n.Children = {
        map: N,
        forEach: function(e, t, n) {
            N(e, function() {
                t.apply(this, arguments)
            }, n)
        },
        count: function(e) {
            var t = 0;
            return N(e, function() {
                t++
            }), t
        },
        toArray: function(e) {
            return N(e, function(e) {
                return e
            }) || []
        },
        only: function(e) {
            if (!O(e)) throw Error("React.Children.only expected to receive a single React element child.");
            return e
        }
    }, n.Component = b, n.Fragment = s, n.Profiler = u, n.PureComponent = w, n.StrictMode = a, n.Suspense = f, n.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = T, n.__COMPILER_RUNTIME = {
        __proto__: null,
        c: function(e) {
            return T.H.useMemoCache(e)
        }
    }, n.cache = function(e) {
        return function() {
            return e.apply(null, arguments)
        }
    }, n.cacheSignal = function() {
        return null
    }, n.cloneElement = function(e, t, n) {
        if (null == e) throw Error("The argument must be a React element, but you passed " + e + ".");
        var r = v({}, e.props),
            o = e.key;
        if (null != t)
            for (i in void 0 !== t.key && (o = "" + t.key), t) k.call(t, i) && "key" !== i && "__self" !== i && "__source" !== i && ("ref" !== i || void 0 !== t.ref) && (r[i] = t[i]);
        var i = arguments.length - 2;
        if (1 === i) r.children = n;
        else if (1 < i) {
            for (var s = Array(i), a = 0; a < i; a++) s[a] = arguments[a + 2];
            r.children = s
        }
        return C(e.type, o, r)
    }, n.createContext = function(e) {
        return (e = {
            $$typeof: c,
            _currentValue: e,
            _currentValue2: e,
            _threadCount: 0,
            Provider: null,
            Consumer: null
        }).Provider = e, e.Consumer = {
            $$typeof: l,
            _context: e
        }, e
    }, n.createElement = function(e, t, n) {
        var r, o = {},
            i = null;
        if (null != t)
            for (r in void 0 !== t.key && (i = "" + t.key), t) k.call(t, r) && "key" !== r && "__self" !== r && "__source" !== r && (o[r] = t[r]);
        var s = arguments.length - 2;
        if (1 === s) o.children = n;
        else if (1 < s) {
            for (var a = Array(s), u = 0; u < s; u++) a[u] = arguments[u + 2];
            o.children = a
        }
        if (e && e.defaultProps)
            for (r in s = e.defaultProps) void 0 === o[r] && (o[r] = s[r]);
        return C(e, i, o)
    }, n.createRef = function() {
        return {
            current: null
        }
    }, n.forwardRef = function(e) {
        return {
            $$typeof: d,
            render: e
        }
    }, n.isValidElement = O, n.lazy = function(e) {
        return {
            $$typeof: h,
            _payload: {
                _status: -1,
                _result: e
            },
            _init: F
        }
    }, n.memo = function(e, t) {
        return {
            $$typeof: p,
            type: e,
            compare: void 0 === t ? null : t
        }
    }, n.startTransition = function(e) {
        var t = T.T,
            n = {};
        T.T = n;
        try {
            var r = e(),
                o = T.S;
            null !== o && o(n, r), "object" == typeof r && null !== r && "function" == typeof r.then && r.then(E, A)
        } catch (e) {
            A(e)
        } finally {
            null !== t && null !== n.types && (t.types = n.types), T.T = t
        }
    }, n.unstable_useCacheRefresh = function() {
        return T.H.useCacheRefresh()
    }, n.use = function(e) {
        return T.H.use(e)
    }, n.useActionState = function(e, t, n) {
        return T.H.useActionState(e, t, n)
    }, n.useCallback = function(e, t) {
        return T.H.useCallback(e, t)
    }, n.useContext = function(e) {
        return T.H.useContext(e)
    }, n.useDebugValue = function() {}, n.useDeferredValue = function(e, t) {
        return T.H.useDeferredValue(e, t)
    }, n.useEffect = function(e, t) {
        return T.H.useEffect(e, t)
    }, n.useEffectEvent = function(e) {
        return T.H.useEffectEvent(e)
    }, n.useId = function() {
        return T.H.useId()
    }, n.useImperativeHandle = function(e, t, n) {
        return T.H.useImperativeHandle(e, t, n)
    }, n.useInsertionEffect = function(e, t) {
        return T.H.useInsertionEffect(e, t)
    }, n.useLayoutEffect = function(e, t) {
        return T.H.useLayoutEffect(e, t)
    }, n.useMemo = function(e, t) {
        return T.H.useMemo(e, t)
    }, n.useOptimistic = function(e, t) {
        return T.H.useOptimistic(e, t)
    }, n.useReducer = function(e, t, n) {
        return T.H.useReducer(e, t, n)
    }, n.useRef = function(e) {
        return T.H.useRef(e)
    }, n.useState = function(e) {
        return T.H.useState(e)
    }, n.useSyncExternalStore = function(e, t, n) {
        return T.H.useSyncExternalStore(e, t, n)
    }, n.useTransition = function() {
        return T.H.useTransition()
    }, n.version = "19.2.1"
}, 1788, (e, t, n) => {
    "use strict";
    t.exports = e.r(1556)
}, 1705, (e, t, n) => {
    "use strict";
    n._ = function(e) {
        return e && e.__esModule ? e : {
            default: e
        }
    }
}, 3584, (e, t, n) => {
    "use strict";
    Object.defineProperty(n, "__esModule", {
        value: !0
    }), Object.defineProperty(n, "HeadManagerContext", {
        enumerable: !0,
        get: function() {
            return r
        }
    });
    let r = e.r(1705)._(e.r(1788)).default.createContext({})
}, 4470, (e, t, n) => {
    "use strict";
    Object.defineProperty(n, "__esModule", {
        value: !0
    }), Object.defineProperty(n, "warnOnce", {
        enumerable: !0,
        get: function() {
            return r
        }
    });
    let r = e => {}
}, 2456, (e, t, n) => {
    "use strict";

    function r(e) {
        if ("function" != typeof WeakMap) return null;
        var t = new WeakMap,
            n = new WeakMap;
        return (r = function(e) {
            return e ? n : t
        })(e)
    }
    n._ = function(e, t) {
        if (!t && e && e.__esModule) return e;
        if (null === e || "object" != typeof e && "function" != typeof e) return {
            default: e
        };
        var n = r(t);
        if (n && n.has(e)) return n.get(e);
        var o = {
                __proto__: null
            },
            i = Object.defineProperty && Object.getOwnPropertyDescriptor;
        for (var s in e)
            if ("default" !== s && Object.prototype.hasOwnProperty.call(e, s)) {
                var a = i ? Object.getOwnPropertyDescriptor(e, s) : null;
                a && (a.get || a.set) ? Object.defineProperty(o, s, a) : o[s] = e[s]
            }
        return o.default = e, n && n.set(e, o), o
    }
}, 4941, (e, t, n) => {
    "use strict";
    Object.defineProperty(n, "__esModule", {
        value: !0
    }), Object.defineProperty(n, "default", {
        enumerable: !0,
        get: function() {
            return a
        }
    });
    let r = e.r(1788),
        o = "undefined" == typeof window,
        i = o ? () => {} : r.useLayoutEffect,
        s = o ? () => {} : r.useEffect;

    function a(e) {
        let {
            headManager: t,
            reduceComponentsToState: n
        } = e;

        function a() {
            if (t && t.mountedInstances) {
                let e = r.Children.toArray(Array.from(t.mountedInstances).filter(Boolean));
                t.updateHead(n(e))
            }
        }
        return o && (t ? .mountedInstances ? .add(e.children), a()), i(() => (t ? .mountedInstances ? .add(e.children), () => {
            t ? .mountedInstances ? .delete(e.children)
        })), i(() => (t && (t._pendingUpdate = a), () => {
            t && (t._pendingUpdate = a)
        })), s(() => (t && t._pendingUpdate && (t._pendingUpdate(), t._pendingUpdate = null), () => {
            t && t._pendingUpdate && (t._pendingUpdate(), t._pendingUpdate = null)
        })), null
    }
}, 963, (e, t, n) => {
    "use strict";
    Object.defineProperty(n, "__esModule", {
        value: !0
    });
    var r = {
        default: function() {
            return m
        },
        defaultHead: function() {
            return d
        }
    };
    for (var o in r) Object.defineProperty(n, o, {
        enumerable: !0,
        get: r[o]
    });
    let i = e.r(1705),
        s = e.r(2456),
        a = e.r(1398),
        u = s._(e.r(1788)),
        l = i._(e.r(4941)),
        c = e.r(3584);

    function d() {
        return [(0, a.jsx)("meta", {
            charSet: "utf-8"
        }, "charset"), (0, a.jsx)("meta", {
            name: "viewport",
            content: "width=device-width"
        }, "viewport")]
    }

    function f(e, t) {
        return "string" == typeof t || "number" == typeof t ? e : t.type === u.default.Fragment ? e.concat(u.default.Children.toArray(t.props.children).reduce((e, t) => "string" == typeof t || "number" == typeof t ? e : e.concat(t), [])) : e.concat(t)
    }
    e.r(4470);
    let p = ["name", "httpEquiv", "charSet", "itemProp"];

    function h(e) {
        let t, n, r, o;
        return e.reduce(f, []).reverse().concat(d().reverse()).filter((t = new Set, n = new Set, r = new Set, o = {}, e => {
            let i = !0,
                s = !1;
            if (e.key && "number" != typeof e.key && e.key.indexOf("$") > 0) {
                s = !0;
                let n = e.key.slice(e.key.indexOf("$") + 1);
                t.has(n) ? i = !1 : t.add(n)
            }
            switch (e.type) {
                case "title":
                case "base":
                    n.has(e.type) ? i = !1 : n.add(e.type);
                    break;
                case "meta":
                    for (let t = 0, n = p.length; t < n; t++) {
                        let n = p[t];
                        if (e.props.hasOwnProperty(n))
                            if ("charSet" === n) r.has(n) ? i = !1 : r.add(n);
                            else {
                                let t = e.props[n],
                                    r = o[n] || new Set;
                                ("name" !== n || !s) && r.has(t) ? i = !1 : (r.add(t), o[n] = r)
                            }
                    }
            }
            return i
        })).reverse().map((e, t) => {
            let n = e.key || t;
            return u.default.cloneElement(e, {
                key: n
            })
        })
    }
    let m = function({
        children: e
    }) {
        let t = (0, u.useContext)(c.HeadManagerContext);
        return (0, a.jsx)(l.default, {
            reduceComponentsToState: h,
            headManager: t,
            children: e
        })
    };
    ("function" == typeof n.default || "object" == typeof n.default && null !== n.default) && void 0 === n.default.__esModule && (Object.defineProperty(n.default, "__esModule", {
        value: !0
    }), Object.assign(n.default, n), t.exports = n.default)
}, 9129, (e, t, n) => {
    "use strict";
    Object.defineProperty(n, "__esModule", {
        value: !0
    });
    var r = {
        DecodeError: function() {
            return y
        },
        MiddlewareNotFoundError: function() {
            return S
        },
        MissingStaticPage: function() {
            return b
        },
        NormalizeError: function() {
            return v
        },
        PageNotFoundError: function() {
            return g
        },
        SP: function() {
            return m
        },
        ST: function() {
            return _
        },
        WEB_VITALS: function() {
            return i
        },
        execOnce: function() {
            return s
        },
        getDisplayName: function() {
            return d
        },
        getLocationOrigin: function() {
            return l
        },
        getURL: function() {
            return c
        },
        isAbsoluteUrl: function() {
            return u
        },
        isResSent: function() {
            return f
        },
        loadGetInitialProps: function() {
            return h
        },
        normalizeRepeatedSlashes: function() {
            return p
        },
        stringifyError: function() {
            return w
        }
    };
    for (var o in r) Object.defineProperty(n, o, {
        enumerable: !0,
        get: r[o]
    });
    let i = ["CLS", "FCP", "FID", "INP", "LCP", "TTFB"];

    function s(e) {
        let t, n = !1;
        return (...r) => (n || (n = !0, t = e(...r)), t)
    }
    let a = /^[a-zA-Z][a-zA-Z\d+\-.]*?:/,
        u = e => a.test(e);

    function l() {
        let {
            protocol: e,
            hostname: t,
            port: n
        } = window.location;
        return `${e}//${t}${n?":"+n:""}`
    }

    function c() {
        let {
            href: e
        } = window.location, t = l();
        return e.substring(t.length)
    }

    function d(e) {
        return "string" == typeof e ? e : e.displayName || e.name || "Unknown"
    }

    function f(e) {
        return e.finished || e.headersSent
    }

    function p(e) {
        let t = e.split("?");
        return t[0].replace(/\\/g, "/").replace(/\/\/+/g, "/") + (t[1] ? `?${t.slice(1).join("?")}` : "")
    }
    async function h(e, t) {
        let n = t.res || t.ctx && t.ctx.res;
        if (!e.getInitialProps) return t.ctx && t.Component ? {
            pageProps: await h(t.Component, t.ctx)
        } : {};
        let r = await e.getInitialProps(t);
        if (n && f(n)) return r;
        if (!r) throw Object.defineProperty(Error(`"${d(e)}.getInitialProps()" should resolve to an object. But found "${r}" instead.`), "__NEXT_ERROR_CODE", {
            value: "E394",
            enumerable: !1,
            configurable: !0
        });
        return r
    }
    let m = "undefined" != typeof performance,
        _ = m && ["mark", "measure", "getEntriesByName"].every(e => "function" == typeof performance[e]);
    class y extends Error {}
    class v extends Error {}
    class g extends Error {
        constructor(e) {
            super(), this.code = "ENOENT", this.name = "PageNotFoundError", this.message = `Cannot find module for page: ${e}`
        }
    }
    class b extends Error {
        constructor(e, t) {
            super(), this.message = `Failed to load static file for page: ${e} ${t}`
        }
    }
    class S extends Error {
        constructor() {
            super(), this.code = "ENOENT", this.message = "Cannot find the middleware module"
        }
    }

    function w(e) {
        return JSON.stringify({
            message: e.message,
            stack: e.stack
        })
    }
}, 8678, (e, t, n) => {
    t.exports = e.r(963)
}, 1592, (e, t, n) => {
    "use strict";
    Object.defineProperty(n, "__esModule", {
        value: !0
    }), Object.defineProperty(n, "LoadableContext", {
        enumerable: !0,
        get: function() {
            return r
        }
    });
    let r = e.r(1705)._(e.r(1788)).default.createContext(null)
}, 2414, (e, t, n) => {
    "use strict";
    Object.defineProperty(n, "__esModule", {
        value: !0
    }), Object.defineProperty(n, "default", {
        enumerable: !0,
        get: function() {
            return f
        }
    });
    let r = e.r(1705)._(e.r(1788)),
        o = e.r(1592),
        i = [],
        s = [],
        a = !1;

    function u(e) {
        let t = e(),
            n = {
                loading: !0,
                loaded: null,
                error: null
            };
        return n.promise = t.then(e => (n.loading = !1, n.loaded = e, e)).catch(e => {
            throw n.loading = !1, n.error = e, e
        }), n
    }
    class l {
        constructor(e, t) {
            this._loadFn = e, this._opts = t, this._callbacks = new Set, this._delay = null, this._timeout = null, this.retry()
        }
        promise() {
            return this._res.promise
        }
        retry() {
            this._clearTimeouts(), this._res = this._loadFn(this._opts.loader), this._state = {
                pastDelay: !1,
                timedOut: !1
            };
            let {
                _res: e,
                _opts: t
            } = this;
            e.loading && ("number" == typeof t.delay && (0 === t.delay ? this._state.pastDelay = !0 : this._delay = setTimeout(() => {
                this._update({
                    pastDelay: !0
                })
            }, t.delay)), "number" == typeof t.timeout && (this._timeout = setTimeout(() => {
                this._update({
                    timedOut: !0
                })
            }, t.timeout))), this._res.promise.then(() => {
                this._update({}), this._clearTimeouts()
            }).catch(e => {
                this._update({}), this._clearTimeouts()
            }), this._update({})
        }
        _update(e) {
            this._state = { ...this._state,
                error: this._res.error,
                loaded: this._res.loaded,
                loading: this._res.loading,
                ...e
            }, this._callbacks.forEach(e => e())
        }
        _clearTimeouts() {
            clearTimeout(this._delay), clearTimeout(this._timeout)
        }
        getCurrentValue() {
            return this._state
        }
        subscribe(e) {
            return this._callbacks.add(e), () => {
                this._callbacks.delete(e)
            }
        }
    }

    function c(t) {
        return function(t, n) {
            let u = Object.assign({
                    loader: null,
                    loading: null,
                    delay: 200,
                    timeout: null,
                    webpack: null,
                    modules: null
                }, n),
                c = null;

            function d() {
                if (!c) {
                    let e = new l(t, u);
                    c = {
                        getCurrentValue: e.getCurrentValue.bind(e),
                        subscribe: e.subscribe.bind(e),
                        retry: e.retry.bind(e),
                        promise: e.promise.bind(e)
                    }
                }
                return c.promise()
            }
            if ("undefined" == typeof window && i.push(d), !a && "undefined" != typeof window) {
                let t = u.webpack && "function" == typeof e.t.resolveWeak ? u.webpack() : u.modules;
                t && s.push(e => {
                    for (let n of t)
                        if (e.includes(n)) return d()
                })
            }

            function f(e, t) {
                let n;
                d(), (n = r.default.useContext(o.LoadableContext)) && Array.isArray(u.modules) && u.modules.forEach(e => {
                    n(e)
                });
                let i = r.default.useSyncExternalStore(c.subscribe, c.getCurrentValue, c.getCurrentValue);
                return r.default.useImperativeHandle(t, () => ({
                    retry: c.retry
                }), []), r.default.useMemo(() => {
                    var t;
                    return i.loading || i.error ? r.default.createElement(u.loading, {
                        isLoading: i.loading,
                        pastDelay: i.pastDelay,
                        timedOut: i.timedOut,
                        error: i.error,
                        retry: c.retry
                    }) : i.loaded ? r.default.createElement((t = i.loaded) && t.default ? t.default : t, e) : null
                }, [e, i])
            }
            return f.preload = () => d(), f.displayName = "LoadableComponent", r.default.forwardRef(f)
        }(u, t)
    }

    function d(e, t) {
        let n = [];
        for (; e.length;) {
            let r = e.pop();
            n.push(r(t))
        }
        return Promise.all(n).then(() => {
            if (e.length) return d(e, t)
        })
    }
    c.preloadAll = () => new Promise((e, t) => {
        d(i).then(e, t)
    }), c.preloadReady = (e = []) => new Promise(t => {
        let n = () => (a = !0, t());
        d(s, e).then(n, n)
    }), "undefined" != typeof window && (window.__NEXT_PRELOADREADY = c.preloadReady);
    let f = c
}, 5167, (e, t, n) => {
    "use strict";
    Object.defineProperty(n, "__esModule", {
        value: !0
    });
    var r = {
        default: function() {
            return d
        },
        noSSR: function() {
            return c
        }
    };
    for (var o in r) Object.defineProperty(n, o, {
        enumerable: !0,
        get: r[o]
    });
    let i = e.r(1705),
        s = e.r(1398);
    e.r(1788);
    let a = i._(e.r(2414)),
        u = "undefined" == typeof window;

    function l(e) {
        return {
            default: e ? .default || e
        }
    }

    function c(e, t) {
        if (delete t.webpack, delete t.modules, !u) return e(t);
        let n = t.loading;
        return () => (0, s.jsx)(n, {
            error: null,
            isLoading: !0,
            pastDelay: !1,
            timedOut: !1
        })
    }

    function d(e, t) {
        let n = a.default,
            r = {
                loading: ({
                    error: e,
                    isLoading: t,
                    pastDelay: n
                }) => null
            };
        e instanceof Promise ? r.loader = () => e : "function" == typeof e ? r.loader = e : "object" == typeof e && (r = { ...r,
            ...e
        });
        let o = (r = { ...r,
            ...t
        }).loader;
        return (r.loadableGenerated && (r = { ...r,
            ...r.loadableGenerated
        }, delete r.loadableGenerated), "boolean" != typeof r.ssr || r.ssr) ? n({ ...r,
            loader: () => null != o ? o().then(l) : Promise.resolve(l(() => null))
        }) : (delete r.webpack, delete r.modules, c(n, r))
    }("function" == typeof n.default || "object" == typeof n.default && null !== n.default) && void 0 === n.default.__esModule && (Object.defineProperty(n.default, "__esModule", {
        value: !0
    }), Object.assign(n.default, n), t.exports = n.default)
}, 8489, (e, t, n) => {
    t.exports = e.r(5167)
}, 5140, e => {
    e.v({
        book: "LoadingScreen-module-scss-module__1nvT-G__book",
        fadeInTip: "LoadingScreen-module-scss-module__1nvT-G__fadeInTip",
        fadeOut: "LoadingScreen-module-scss-module__1nvT-G__fadeOut",
        flip: "LoadingScreen-module-scss-module__1nvT-G__flip",
        loader: "LoadingScreen-module-scss-module__1nvT-G__loader",
        loadingContainer: "LoadingScreen-module-scss-module__1nvT-G__loadingContainer",
        networkIcon: "LoadingScreen-module-scss-module__1nvT-G__networkIcon",
        networkTip: "LoadingScreen-module-scss-module__1nvT-G__networkTip",
        page: "LoadingScreen-module-scss-module__1nvT-G__page",
        percentage: "LoadingScreen-module-scss-module__1nvT-G__percentage",
        percentageContainer: "LoadingScreen-module-scss-module__1nvT-G__percentageContainer",
        progressBarContainer: "LoadingScreen-module-scss-module__1nvT-G__progressBarContainer",
        progressBarFill: "LoadingScreen-module-scss-module__1nvT-G__progressBarFill",
        rotate: "LoadingScreen-module-scss-module__1nvT-G__rotate",
        text: "LoadingScreen-module-scss-module__1nvT-G__text",
        tipText: "LoadingScreen-module-scss-module__1nvT-G__tipText"
    })
}, 471, e => {
    e.v({
        container: "StartScreen-module-scss-module__EhXoYq__container",
        content: "StartScreen-module-scss-module__EhXoYq__content",
        copyright: "StartScreen-module-scss-module__EhXoYq__copyright",
        fadeIn: "StartScreen-module-scss-module__EhXoYq__fadeIn",
        float: "StartScreen-module-scss-module__EhXoYq__float",
        icon: "StartScreen-module-scss-module__EhXoYq__icon",
        iconWrapper: "StartScreen-module-scss-module__EhXoYq__iconWrapper",
        slideUpFade: "StartScreen-module-scss-module__EhXoYq__slideUpFade",
        startBtn: "StartScreen-module-scss-module__EhXoYq__startBtn",
        title: "StartScreen-module-scss-module__EhXoYq__title"
    })
}, 7358, (e, t, n) => {}, 2237, (e, t, n) => {
    var r = e.i(461);
    e.r(7358);
    var o = e.r(1788),
        i = o && "object" == typeof o && "default" in o ? o : {
            default: o
        },
        s = void 0 !== r.default && r.default.env && !0,
        a = function(e) {
            return "[object String]" === Object.prototype.toString.call(e)
        },
        u = function() {
            function e(e) {
                var t = void 0 === e ? {} : e,
                    n = t.name,
                    r = void 0 === n ? "stylesheet" : n,
                    o = t.optimizeForSpeed,
                    i = void 0 === o ? s : o;
                l(a(r), "`name` must be a string"), this._name = r, this._deletedRulePlaceholder = "#" + r + "-deleted-rule____{}", l("boolean" == typeof i, "`optimizeForSpeed` must be a boolean"), this._optimizeForSpeed = i, this._serverSheet = void 0, this._tags = [], this._injected = !1, this._rulesCount = 0;
                var u = "undefined" != typeof window && document.querySelector('meta[property="csp-nonce"]');
                this._nonce = u ? u.getAttribute("content") : null
            }
            var t, n = e.prototype;
            return n.setOptimizeForSpeed = function(e) {
                    l("boolean" == typeof e, "`setOptimizeForSpeed` accepts a boolean"), l(0 === this._rulesCount, "optimizeForSpeed cannot be when rules have already been inserted"), this.flush(), this._optimizeForSpeed = e, this.inject()
                }, n.isOptimizeForSpeed = function() {
                    return this._optimizeForSpeed
                }, n.inject = function() {
                    var e = this;
                    if (l(!this._injected, "sheet already injected"), this._injected = !0, "undefined" != typeof window && this._optimizeForSpeed) {
                        this._tags[0] = this.makeStyleTag(this._name), this._optimizeForSpeed = "insertRule" in this.getSheet(), this._optimizeForSpeed || (s || console.warn("StyleSheet: optimizeForSpeed mode not supported falling back to standard mode."), this.flush(), this._injected = !0);
                        return
                    }
                    this._serverSheet = {
                        cssRules: [],
                        insertRule: function(t, n) {
                            return "number" == typeof n ? e._serverSheet.cssRules[n] = {
                                cssText: t
                            } : e._serverSheet.cssRules.push({
                                cssText: t
                            }), n
                        },
                        deleteRule: function(t) {
                            e._serverSheet.cssRules[t] = null
                        }
                    }
                }, n.getSheetForTag = function(e) {
                    if (e.sheet) return e.sheet;
                    for (var t = 0; t < document.styleSheets.length; t++)
                        if (document.styleSheets[t].ownerNode === e) return document.styleSheets[t]
                }, n.getSheet = function() {
                    return this.getSheetForTag(this._tags[this._tags.length - 1])
                }, n.insertRule = function(e, t) {
                    if (l(a(e), "`insertRule` accepts only strings"), "undefined" == typeof window) return "number" != typeof t && (t = this._serverSheet.cssRules.length), this._serverSheet.insertRule(e, t), this._rulesCount++;
                    if (this._optimizeForSpeed) {
                        var n = this.getSheet();
                        "number" != typeof t && (t = n.cssRules.length);
                        try {
                            n.insertRule(e, t)
                        } catch (t) {
                            return s || console.warn("StyleSheet: illegal rule: \n\n" + e + "\n\nSee https://stackoverflow.com/q/20007992 for more info"), -1
                        }
                    } else {
                        var r = this._tags[t];
                        this._tags.push(this.makeStyleTag(this._name, e, r))
                    }
                    return this._rulesCount++
                }, n.replaceRule = function(e, t) {
                    if (this._optimizeForSpeed || "undefined" == typeof window) {
                        var n = "undefined" != typeof window ? this.getSheet() : this._serverSheet;
                        if (t.trim() || (t = this._deletedRulePlaceholder), !n.cssRules[e]) return e;
                        n.deleteRule(e);
                        try {
                            n.insertRule(t, e)
                        } catch (r) {
                            s || console.warn("StyleSheet: illegal rule: \n\n" + t + "\n\nSee https://stackoverflow.com/q/20007992 for more info"), n.insertRule(this._deletedRulePlaceholder, e)
                        }
                    } else {
                        var r = this._tags[e];
                        l(r, "old rule at index `" + e + "` not found"), r.textContent = t
                    }
                    return e
                }, n.deleteRule = function(e) {
                    if ("undefined" == typeof window) return void this._serverSheet.deleteRule(e);
                    if (this._optimizeForSpeed) this.replaceRule(e, "");
                    else {
                        var t = this._tags[e];
                        l(t, "rule at index `" + e + "` not found"), t.parentNode.removeChild(t), this._tags[e] = null
                    }
                }, n.flush = function() {
                    this._injected = !1, this._rulesCount = 0, "undefined" != typeof window ? (this._tags.forEach(function(e) {
                        return e && e.parentNode.removeChild(e)
                    }), this._tags = []) : this._serverSheet.cssRules = []
                }, n.cssRules = function() {
                    var e = this;
                    return "undefined" == typeof window ? this._serverSheet.cssRules : this._tags.reduce(function(t, n) {
                        return n ? t = t.concat(Array.prototype.map.call(e.getSheetForTag(n).cssRules, function(t) {
                            return t.cssText === e._deletedRulePlaceholder ? null : t
                        })) : t.push(null), t
                    }, [])
                }, n.makeStyleTag = function(e, t, n) {
                    t && l(a(t), "makeStyleTag accepts only strings as second parameter");
                    var r = document.createElement("style");
                    this._nonce && r.setAttribute("nonce", this._nonce), r.type = "text/css", r.setAttribute("data-" + e, ""), t && r.appendChild(document.createTextNode(t));
                    var o = document.head || document.getElementsByTagName("head")[0];
                    return n ? o.insertBefore(r, n) : o.appendChild(r), r
                }, t = [{
                    key: "length",
                    get: function() {
                        return this._rulesCount
                    }
                }],
                function(e, t) {
                    for (var n = 0; n < t.length; n++) {
                        var r = t[n];
                        r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
                    }
                }(e.prototype, t), e
        }();

    function l(e, t) {
        if (!e) throw Error("StyleSheet: " + t + ".")
    }
    var c = function(e) {
            for (var t = 5381, n = e.length; n;) t = 33 * t ^ e.charCodeAt(--n);
            return t >>> 0
        },
        d = {};

    function f(e, t) {
        if (!t) return "jsx-" + e;
        var n = String(t),
            r = e + n;
        return d[r] || (d[r] = "jsx-" + c(e + "-" + n)), d[r]
    }

    function p(e, t) {
        "undefined" == typeof window && (t = t.replace(/\/style/gi, "\\/style"));
        var n = e + t;
        return d[n] || (d[n] = t.replace(/__jsx-style-dynamic-selector/g, e)), d[n]
    }
    var h = function() {
            function e(e) {
                var t = void 0 === e ? {} : e,
                    n = t.styleSheet,
                    r = void 0 === n ? null : n,
                    o = t.optimizeForSpeed,
                    i = void 0 !== o && o;
                this._sheet = r || new u({
                    name: "styled-jsx",
                    optimizeForSpeed: i
                }), this._sheet.inject(), r && "boolean" == typeof i && (this._sheet.setOptimizeForSpeed(i), this._optimizeForSpeed = this._sheet.isOptimizeForSpeed()), this._fromServer = void 0, this._indices = {}, this._instancesCounts = {}
            }
            var t = e.prototype;
            return t.add = function(e) {
                var t = this;
                void 0 === this._optimizeForSpeed && (this._optimizeForSpeed = Array.isArray(e.children), this._sheet.setOptimizeForSpeed(this._optimizeForSpeed), this._optimizeForSpeed = this._sheet.isOptimizeForSpeed()), "undefined" == typeof window || this._fromServer || (this._fromServer = this.selectFromServer(), this._instancesCounts = Object.keys(this._fromServer).reduce(function(e, t) {
                    return e[t] = 0, e
                }, {}));
                var n = this.getIdAndRules(e),
                    r = n.styleId,
                    o = n.rules;
                if (r in this._instancesCounts) {
                    this._instancesCounts[r] += 1;
                    return
                }
                var i = o.map(function(e) {
                    return t._sheet.insertRule(e)
                }).filter(function(e) {
                    return -1 !== e
                });
                this._indices[r] = i, this._instancesCounts[r] = 1
            }, t.remove = function(e) {
                var t = this,
                    n = this.getIdAndRules(e).styleId;
                if (function(e, t) {
                        if (!e) throw Error("StyleSheetRegistry: " + t + ".")
                    }(n in this._instancesCounts, "styleId: `" + n + "` not found"), this._instancesCounts[n] -= 1, this._instancesCounts[n] < 1) {
                    var r = this._fromServer && this._fromServer[n];
                    r ? (r.parentNode.removeChild(r), delete this._fromServer[n]) : (this._indices[n].forEach(function(e) {
                        return t._sheet.deleteRule(e)
                    }), delete this._indices[n]), delete this._instancesCounts[n]
                }
            }, t.update = function(e, t) {
                this.add(t), this.remove(e)
            }, t.flush = function() {
                this._sheet.flush(), this._sheet.inject(), this._fromServer = void 0, this._indices = {}, this._instancesCounts = {}
            }, t.cssRules = function() {
                var e = this,
                    t = this._fromServer ? Object.keys(this._fromServer).map(function(t) {
                        return [t, e._fromServer[t]]
                    }) : [],
                    n = this._sheet.cssRules();
                return t.concat(Object.keys(this._indices).map(function(t) {
                    return [t, e._indices[t].map(function(e) {
                        return n[e].cssText
                    }).join(e._optimizeForSpeed ? "" : "\n")]
                }).filter(function(e) {
                    return !!e[1]
                }))
            }, t.styles = function(e) {
                var t, n;
                return t = this.cssRules(), void 0 === (n = e) && (n = {}), t.map(function(e) {
                    var t = e[0],
                        r = e[1];
                    return i.default.createElement("style", {
                        id: "__" + t,
                        key: "__" + t,
                        nonce: n.nonce ? n.nonce : void 0,
                        dangerouslySetInnerHTML: {
                            __html: r
                        }
                    })
                })
            }, t.getIdAndRules = function(e) {
                var t = e.children,
                    n = e.dynamic,
                    r = e.id;
                if (n) {
                    var o = f(r, n);
                    return {
                        styleId: o,
                        rules: Array.isArray(t) ? t.map(function(e) {
                            return p(o, e)
                        }) : [p(o, t)]
                    }
                }
                return {
                    styleId: f(r),
                    rules: Array.isArray(t) ? t : [t]
                }
            }, t.selectFromServer = function() {
                return Array.prototype.slice.call(document.querySelectorAll('[id^="__jsx-"]')).reduce(function(e, t) {
                    return e[t.id.slice(2)] = t, e
                }, {})
            }, e
        }(),
        m = o.createContext(null);

    function _() {
        return new h
    }

    function y() {
        return o.useContext(m)
    }
    m.displayName = "StyleSheetContext";
    var v = i.default.useInsertionEffect || i.default.useLayoutEffect,
        g = "undefined" != typeof window ? _() : void 0;

    function b(e) {
        var t = g || y();
        return t && ("undefined" == typeof window ? t.add(e) : v(function() {
            return t.add(e),
                function() {
                    t.remove(e)
                }
        }, [e.id, String(e.dynamic)])), null
    }
    b.dynamic = function(e) {
        return e.map(function(e) {
            return f(e[0], e[1])
        }).join(" ")
    }, n.StyleRegistry = function(e) {
        var t = e.registry,
            n = e.children,
            r = o.useContext(m),
            s = o.useState(function() {
                return r || t || _()
            })[0];
        return i.default.createElement(m.Provider, {
            value: s
        }, n)
    }, n.createStyleRegistry = _, n.style = b, n.useStyleRegistry = y
}, 5246, (e, t, n) => {
    t.exports = e.r(2237).style
}, 477, e => {
    "use strict";
    var t = e.i(1398),
        n = e.i(8678),
        r = e.i(8489),
        o = e.i(1788),
        i = e.i(5140);
    let s = ({
        onFinished: e
    }) => {
        let [n, r] = (0, o.useState)(!0), [s, a] = (0, o.useState)(!1), [u, l] = (0, o.useState)(0);
        return ((0, o.useEffect)(() => {
            let t = 0,
                n = setInterval(() => {
                    l(Math.min(Math.round(++t / 125 * 100), 100)), t >= 125 && (clearInterval(n), a(!0), setTimeout(() => {
                        r(!1), e && e()
                    }, 800))
                }, 20);
            return () => clearInterval(n)
        }, []), n) ? (0, t.jsxs)("div", {
            className: `${i.default.loadingContainer} ${s?i.default.fadeOut:""}`,
            children: [(0, t.jsx)("div", {
                className: i.default.loader,
                children: (0, t.jsxs)("div", {
                    className: i.default.book,
                    children: [(0, t.jsx)("div", {
                        className: i.default.page
                    }), (0, t.jsx)("div", {
                        className: i.default.page
                    }), (0, t.jsx)("div", {
                        className: i.default.page
                    })]
                })
            }), (0, t.jsxs)("div", {
                className: i.default.percentageContainer,
                children: [(0, t.jsxs)("div", {
                    className: i.default.percentage,
                    children: [u, "%"]
                }), (0, t.jsx)("div", {
                    className: i.default.progressBarContainer,
                    children: (0, t.jsx)("div", {
                        className: i.default.progressBarFill,
                        style: {
                            width: `${u}%`
                        }
                    })
                })]
            }), (0, t.jsx)("div", {
                className: i.default.text,
                children: "Loading Experience"
            }), (0, t.jsxs)("div", {
                className: i.default.networkTip,
                children: [(0, t.jsx)("span", {
                    className: i.default.networkIcon,
                    children: (0, t.jsx)("svg", {
                        viewBox: "0 0 24 24",
                        width: "14",
                        height: "14",
                        fill: "currentColor",
                        children: (0, t.jsx)("path", {
                            d: "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z"
                        })
                    })
                }), (0, t.jsx)("span", {
                    className: i.default.tipText,
                    children: u < 50 ? "Optimizing assets for your connection..." : "If stuck, please check your network."
                })]
            })]
        }) : null
    };
    var a = e.i(471);
    let u = ({
        onStart: e
    }) => {
        let [n, r] = (0, o.useState)(!1);
        return (0, o.useEffect)(() => {
            let e = () => {
                window.innerWidth, window.innerHeight, r(!0)
            };
            return e(), window.addEventListener("resize", e), () => window.removeEventListener("resize", e)
        }, []), (0, t.jsxs)("div", {
            className: a.default.container,
            children: [(0, t.jsxs)("div", {
                className: a.default.content,
                children: [(0, t.jsx)("div", {
                    className: a.default.iconWrapper,
                    children: (0, t.jsx)("svg", {
                        viewBox: "0 0 24 24",
                        className: a.default.icon,
                        children: (0, t.jsx)("path", {
                            d: "M21 5c-1.11-.35-2.33-.5-3.5-.5-1.95 0-4.05.4-5.5 1.5-1.45-1.1-3.55-1.5-5.5-1.5S2.45 4.9 1 6v14.65c0 .25.25.5.5.5.1 0 .15-.05.25-.05C3.1 20.45 5.05 20 6.5 20c1.95 0 4.05.4 5.5 1.5 1.35-.85 3.8-1.5 5.5-1.5 1.65 0 3.35.3 4.75 1.05.1.05.15.05.25.05.25 0 .5-.25.5-.5V6c-.6-.45-1.25-.75-2-1zm0 13.5c-1.1-.35-2.33-.5-3.5-.5-1.7 0-4.15.65-5.5 1.5V8c1.35-.85 3.8-1.5 5.5-1.5 1.2 0 2.4.15 3.5.5v11.5z"
                        })
                    })
                }), (0, t.jsx)("h1", {
                    className: a.default.title,
                    children: "The Story Awaits"
                }), (0, t.jsx)("button", {
                    className: a.default.startBtn,
                    onClick: () => {
                        try {
                            let e = document.documentElement;
                            e.requestFullscreen ? e.requestFullscreen().catch(() => {}) : e.webkitRequestFullscreen && e.webkitRequestFullscreen(), window.scrollTo(0, 1), screen.orientation && screen.orientation.lock && screen.orientation.lock("landscape").catch(() => {})
                        } catch (e) {}
                        e()
                    },
                    children: "Enter Experience"
                })]
            }), (0, t.jsx)("div", {
                className: a.default.copyright,
                children: "© HeyTML"
            })]
        })
    };
    var l = e.i(5246);
    let c = () => (0, t.jsxs)("div", {
            style: {
                position: "fixed",
                top: 0,
                left: 0,
                width: "100vw",
                height: "100vh",
                backgroundColor: "#1a1a1a",
                zIndex: 99999,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                color: "white",
                padding: "20px",
                textAlign: "center",
                fontFamily: "sans-serif",
                boxSizing: "border-box"
            },
            className: "jsx-f408a27d6b9bfa25",
            children: [(0, t.jsx)("div", {
                style: {
                    marginBottom: "30px"
                },
                className: "jsx-f408a27d6b9bfa25",
                children: (0, t.jsx)("svg", {
                    viewBox: "0 0 24 24",
                    style: {
                        width: "60px",
                        height: "60px",
                        fill: "rgba(255,255,255,0.8)",
                        animation: "rotatePhone 4s infinite ease-in-out",
                        transformOrigin: "center center"
                    },
                    className: "jsx-f408a27d6b9bfa25",
                    children: (0, t.jsx)("path", {
                        d: "M17,1.01L7,1C5.9,1 5,1.9 5,3v18c0,1.1 0.9,2 2,2h10c1.1,0 2,-0.9 2,-2V3C19,1.9 18.1,1.01 17,1.01zM17,19H7V5h10V19z",
                        className: "jsx-f408a27d6b9bfa25"
                    })
                })
            }), (0, t.jsx)("h2", {
                style: {
                    fontSize: "1.5rem",
                    marginBottom: "10px"
                },
                className: "jsx-f408a27d6b9bfa25",
                children: "Please Rotate Your Device"
            }), (0, t.jsxs)("p", {
                style: {
                    color: "#aaa",
                    maxWidth: "300px",
                    lineHeight: "1.5",
                    margin: "0 auto"
                },
                className: "jsx-f408a27d6b9bfa25",
                children: ["This experience is designed for landscape mode.", (0, t.jsx)("br", {
                    className: "jsx-f408a27d6b9bfa25"
                }), (0, t.jsx)("br", {
                    className: "jsx-f408a27d6b9bfa25"
                }), (0, t.jsx)("strong", {
                    className: "jsx-f408a27d6b9bfa25",
                    children: "Tip:"
                }), " If rotating doesn't work, please turn off ", (0, t.jsx)("strong", {
                    className: "jsx-f408a27d6b9bfa25",
                    children: "Rotation Lock"
                }), " in your device settings."]
            }), (0, t.jsx)(l.default, {
                id: "f408a27d6b9bfa25",
                children: "@keyframes rotatePhone{0%,10%{opacity:.8;transform:rotate(0)}40%,60%{opacity:1;transform:rotate(90deg)}90%,to{opacity:0;transform:rotate(90deg)}}"
            })]
        }),
        d = (0, r.default)(() => e.A(8410), {
            loadableGenerated: {
                modules: [8595]
            },
            ssr: !1
        });

    function f() {
        let [e, r] = (0, o.useState)(!1), [i, a] = (0, o.useState)(!1), [l, f] = (0, o.useState)(!1), [p, h] = (0, o.useState)(!1);
        return (0, o.useEffect)(() => {
            let e = () => {
                h(window.innerHeight > window.innerWidth)
            };
            return e(), window.addEventListener("resize", e), () => window.removeEventListener("resize", e)
        }, []), (0, t.jsxs)(t.Fragment, {
            children: [(0, t.jsxs)(n.default, {
                children: [(0, t.jsx)("title", {
                    children: "Happy Anniversary!"
                }), (0, t.jsx)("meta", {
                    name: "description",
                    content: "Happy Anniversary!"
                }), (0, t.jsx)("meta", {
                    name: "viewport",
                    content: "width=device-width, initial-scale=1, maximum-scale=1, user-scalable=0, viewport-fit=cover"
                }), (0, t.jsx)("meta", {
                    name: "apple-mobile-web-app-capable",
                    content: "yes"
                }), (0, t.jsx)("meta", {
                    name: "apple-mobile-web-app-status-bar-style",
                    content: "black-translucent"
                })]
            }), (0, t.jsx)(s, {
                onFinished: () => {
                    r(!0), a(!0)
                }
            }), e && p && (0, t.jsx)(c, {}), (0, t.jsx)("main", {
                style: {
                    height: "100%",
                    width: "100%",
                    opacity: +!!l,
                    transition: "opacity 1s ease-in",
                    pointerEvents: l ? "all" : "none",
                    position: "fixed",
                    top: 0,
                    left: 0,
                    zIndex: 0
                },
                children: (0, t.jsx)(d, {
                    isExperienceActive: l
                })
            }), e && !p && i && !l && (0, t.jsx)(u, {
                onStart: () => {
                    a(!1), f(!0)
                }
            })]
        })
    }
    e.s(["default", () => f], 477)
}, 1899, (e, t, n) => {
    (window.__NEXT_P = window.__NEXT_P || []).push(["/", () => e.r(477)]), t.hot && t.hot.dispose(function() {
        window.__NEXT_P.push(["/"])
    })
}, 8761, e => {
    e.v(t => Promise.all(["static/chunks/4f8470767bf4a97b.js"].map(t => e.l(t))).then(() => t(3594)))
}, 8805, e => {
    e.v(t => Promise.all(["static/chunks/5ec9ab7aae3f3e76.js"].map(t => e.l(t))).then(() => t(9466)))
}, 8410, e => {
    e.v(t => Promise.all(["static/chunks/d14010013790c5c3.js", "static/chunks/f45712bdaa70048f.css"].map(t => e.l(t))).then(() => t(8595)))
}]);