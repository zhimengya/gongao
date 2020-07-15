!function(t) {
    var e = {};
    function r(n) {
        if (e[n]) return e[n].exports;
        var o = e[n] = {
            i: n,
            l: !1,
            exports: {}
        };
        return t[n].call(o.exports, o, o.exports, r),
        o.l = !0,
        o.exports
    }
    r.m = t,
    r.c = e,
    r.d = function(t, e, n) {
        r.o(t, e) || Object.defineProperty(t, e, {
            enumerable: !0,
            get: n
        })
    },
    r.r = function(t) {
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(t, Symbol.toStringTag, {
            value: "Module"
        }),
        Object.defineProperty(t, "__esModule", {
            value: !0
        })
    },
    r.t = function(t, e) {
        if (1 & e && (t = r(t)), 8 & e) return t;
        if (4 & e && "object" == typeof t && t && t.__esModule) return t;
        var n = Object.create(null);
        if (r.r(n), Object.defineProperty(n, "default", {
            enumerable: !0,
            value: t
        }), 2 & e && "string" != typeof t) for (var o in t) r.d(n, o,
        function(e) {
            return t[e]
        }.bind(null, o));
        return n
    },
    r.n = function(t) {
        var e = t && t.__esModule ?
        function() {
            return t.
        default
        }:
        function() {
            return t
        };
        return r.d(e, "a", e),
        e
    },
    r.o = function(t, e) {
        return Object.prototype.hasOwnProperty.call(t, e)
    },
    r.p = "",
    r(r.s = 45)
} ([function(t, e) {
    var r = t.exports = "undefined" != typeof window && window.Math == Math ? window: "undefined" != typeof self && self.Math == Math ? self: Function("return this")();
    "number" == typeof __g && (__g = r)
},
function(t, e, r) {
    var n = r(29)("wks"),
    o = r(30),
    i = r(0).Symbol,
    u = "function" == typeof i; (t.exports = function(t) {
        return n[t] || (n[t] = u && i[t] || (u ? i: o)("Symbol." + t))
    }).store = n
},
function(t, e) {
    var r = t.exports = {
        version: "2.6.11"
    };
    "number" == typeof __e && (__e = r)
},
function(t, e, r) {
    var n = r(7);
    t.exports = function(t) {
        if (!n(t)) throw TypeError(t + " is not an object!");
        return t
    }
},
function(t, e, r) {
    var n = r(11),
    o = r(25);
    t.exports = r(5) ?
    function(t, e, r) {
        return n.f(t, e, o(1, r))
    }: function(t, e, r) {
        return t[e] = r,
        t
    }
},
function(t, e, r) {
    t.exports = !r(14)((function() {
        return 7 != Object.defineProperty({},
        "a", {
            get: function() {
                return 7
            }
        }).a
    }))
},
function(t, e, r) {
    var n = r(0),
    o = r(2),
    i = r(9),
    u = r(4),
    c = r(12),
    a = function(t, e, r) {
        var s, f, l, p = t & a.F,
        h = t & a.G,
        v = t & a.S,
        d = t & a.P,
        y = t & a.B,
        g = t & a.W,
        m = h ? o: o[e] || (o[e] = {}),
        x = m.prototype,
        w = h ? n: v ? n[e] : (n[e] || {}).prototype;
        for (s in h && (r = e), r)(f = !p && w && void 0 !== w[s]) && c(m, s) || (l = f ? w[s] : r[s], m[s] = h && "function" != typeof w[s] ? r[s] : y && f ? i(l, n) : g && w[s] == l ?
        function(t) {
            var e = function(e, r, n) {
                if (this instanceof t) {
                    switch (arguments.length) {
                    case 0:
                        return new t;
                    case 1:
                        return new t(e);
                    case 2:
                        return new t(e, r)
                    }
                    return new t(e, r, n)
                }
                return t.apply(this, arguments)
            };
            return e.prototype = t.prototype,
            e
        } (l) : d && "function" == typeof l ? i(Function.call, l) : l, d && ((m.virtual || (m.virtual = {}))[s] = l, t & a.R && x && !x[s] && u(x, s, l)))
    };
    a.F = 1,
    a.G = 2,
    a.S = 4,
    a.P = 8,
    a.B = 16,
    a.W = 32,
    a.U = 64,
    a.R = 128,
    t.exports = a
},
function(t, e) {
    t.exports = function(t) {
        return "object" == typeof t ? null !== t: "function" == typeof t
    }
},
function(t, e) {
    t.exports = {}
},
function(t, e, r) {
    var n = r(10);
    t.exports = function(t, e, r) {
        if (n(t), void 0 === e) return t;
        switch (r) {
        case 1:
            return function(r) {
                return t.call(e, r)
            };
        case 2:
            return function(r, n) {
                return t.call(e, r, n)
            };
        case 3:
            return function(r, n, o) {
                return t.call(e, r, n, o)
            }
        }
        return function() {
            return t.apply(e, arguments)
        }
    }
},
function(t, e) {
    t.exports = function(t) {
        if ("function" != typeof t) throw TypeError(t + " is not a function!");
        return t
    }
},
function(t, e, r) {
    var n = r(3),
    o = r(52),
    i = r(53),
    u = Object.defineProperty;
    e.f = r(5) ? Object.defineProperty: function(t, e, r) {
        if (n(t), e = i(e, !0), n(r), o) try {
            return u(t, e, r)
        } catch(t) {}
        if ("get" in r || "set" in r) throw TypeError("Accessors not supported!");
        return "value" in r && (t[e] = r.value),
        t
    }
},
function(t, e) {
    var r = {}.hasOwnProperty;
    t.exports = function(t, e) {
        return r.call(t, e)
    }
},
function(t, e) {
    var r = {}.toString;
    t.exports = function(t) {
        return r.call(t).slice(8, -1)
    }
},
function(t, e) {
    t.exports = function(t) {
        try {
            return !! t()
        } catch(t) {
            return ! 0
        }
    }
},
function(t, e, r) {
    var n = r(7),
    o = r(0).document,
    i = n(o) && n(o.createElement);
    t.exports = function(t) {
        return i ? o.createElement(t) : {}
    }
},
function(t, e, r) {
    var n = r(27),
    o = r(17);
    t.exports = function(t) {
        return n(o(t))
    }
},
function(t, e) {
    t.exports = function(t) {
        if (null == t) throw TypeError("Can't call method on  " + t);
        return t
    }
},
function(t, e) {
    var r = Math.ceil,
    n = Math.floor;
    t.exports = function(t) {
        return isNaN(t = +t) ? 0 : (t > 0 ? n: r)(t)
    }
},
function(t, e, r) {
    var n = r(29)("keys"),
    o = r(30);
    t.exports = function(t) {
        return n[t] || (n[t] = o(t))
    }
},
function(t, e) {
    t.exports = !0
},
function(t, e, r) {
    t.exports = {
    default:
        r(61),
        __esModule: !0
    }
},
function(t, e, r) {
    var n = r(11).f,
    o = r(12),
    i = r(1)("toStringTag");
    t.exports = function(t, e, r) {
        t && !o(t = r ? t: t.prototype, i) && n(t, i, {
            configurable: !0,
            value: e
        })
    }
},
function(t, e, r) {
    "use strict";
    var n = r(10);
    function o(t) {
        var e, r;
        this.promise = new t((function(t, n) {
            if (void 0 !== e || void 0 !== r) throw TypeError("Bad Promise constructor");
            e = t,
            r = n
        })),
        this.resolve = n(e),
        this.reject = n(r)
    }
    t.exports.f = function(t) {
        return new o(t)
    }
},
function(t, e, r) {
    t.exports = {
    default:
        r(50),
        __esModule: !0
    }
},
function(t, e) {
    t.exports = function(t, e) {
        return {
            enumerable: !(1 & t),
            configurable: !(2 & t),
            writable: !(4 & t),
            value: e
        }
    }
},
function(t, e, r) {
    var n = r(55),
    o = r(31);
    t.exports = Object.keys ||
    function(t) {
        return n(t, o)
    }
},
function(t, e, r) {
    var n = r(13);
    t.exports = Object("z").propertyIsEnumerable(0) ? Object: function(t) {
        return "String" == n(t) ? t.split("") : Object(t)
    }
},
function(t, e, r) {
    var n = r(18),
    o = Math.min;
    t.exports = function(t) {
        return t > 0 ? o(n(t), 9007199254740991) : 0
    }
},
function(t, e, r) {
    var n = r(2),
    o = r(0),
    i = o["__core-js_shared__"] || (o["__core-js_shared__"] = {}); (t.exports = function(t, e) {
        return i[t] || (i[t] = void 0 !== e ? e: {})
    })("versions", []).push({
        version: n.version,
        mode: r(20) ? "pure": "global",
        copyright: "© 2019 Denis Pushkarev (zloirock.ru)"
    })
},
function(t, e) {
    var r = 0,
    n = Math.random();
    t.exports = function(t) {
        return "Symbol(".concat(void 0 === t ? "": t, ")_", (++r + n).toString(36))
    }
},
function(t, e) {
    t.exports = "constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf".split(",")
},
function(t, e, r) {
    var n = r(17);
    t.exports = function(t) {
        return Object(n(t))
    }
},
function(t, e, r) {
    t.exports = {
    default:
        r(60),
        __esModule: !0
    }
},
function(t, e, r) {
    r(62);
    for (var n = r(0), o = r(4), i = r(8), u = r(1)("toStringTag"), c = "CSSRuleList,CSSStyleDeclaration,CSSValueList,ClientRectList,DOMRectList,DOMStringList,DOMTokenList,DataTransferItemList,FileList,HTMLAllCollection,HTMLCollection,HTMLFormElement,HTMLSelectElement,MediaList,MimeTypeArray,NamedNodeMap,NodeList,PaintRequestList,Plugin,PluginArray,SVGLengthList,SVGNumberList,SVGPathSegList,SVGPointList,SVGStringList,SVGTransformList,SourceBufferList,StyleSheetList,TextTrackCueList,TextTrackList,TouchList".split(","), a = 0; a < c.length; a++) {
        var s = c[a],
        f = n[s],
        l = f && f.prototype;
        l && !l[u] && o(l, u, s),
        i[s] = i.Array
    }
},
function(t, e, r) {
    "use strict";
    var n = r(20),
    o = r(6),
    i = r(65),
    u = r(4),
    c = r(8),
    a = r(66),
    s = r(22),
    f = r(69),
    l = r(1)("iterator"),
    p = !([].keys && "next" in [].keys()),
    h = function() {
        return this
    };
    t.exports = function(t, e, r, v, d, y, g) {
        a(r, e, v);
        var m, x, w, _ = function(t) {
            if (!p && t in S) return S[t];
            switch (t) {
            case "keys":
            case "values":
                return function() {
                    return new r(this, t)
                }
            }
            return function() {
                return new r(this, t)
            }
        },
        b = e + " Iterator",
        O = "values" == d,
        j = !1,
        S = t.prototype,
        P = S[l] || S["@@iterator"] || d && S[d],
        L = P || _(d),
        E = d ? O ? _("entries") : L: void 0,
        M = "Array" == e && S.entries || P;
        if (M && (w = f(M.call(new t))) !== Object.prototype && w.next && (s(w, b, !0), n || "function" == typeof w[l] || u(w, l, h)), O && P && "values" !== P.name && (j = !0, L = function() {
            return P.call(this)
        }), n && !g || !p && !j && S[l] || u(S, l, L), c[e] = L, c[b] = h, d) if (m = {
            values: O ? L: _("values"),
            keys: y ? L: _("keys"),
            entries: E
        },
        g) for (x in m) x in S || i(S, x, m[x]);
        else o(o.P + o.F * (p || j), e, m);
        return m
    }
},
function(t, e, r) {
    var n = r(0).document;
    t.exports = n && n.documentElement
},
function(t, e, r) {
    "use strict";
    var n = r(70)(!0);
    r(35)(String, "String", (function(t) {
        this._t = String(t),
        this._i = 0
    }), (function() {
        var t, e = this._t,
        r = this._i;
        return r >= e.length ? {
            value: void 0,
            done: !0
        }: (t = n(e, r), this._i += t.length, {
            value: t,
            done: !1
        })
    }))
},
function(t, e, r) {
    var n = r(39),
    o = r(1)("iterator"),
    i = r(8);
    t.exports = r(2).getIteratorMethod = function(t) {
        if (null != t) return t[o] || t["@@iterator"] || i[n(t)]
    }
},
function(t, e, r) {
    var n = r(13),
    o = r(1)("toStringTag"),
    i = "Arguments" == n(function() {
        return arguments
    } ());
    t.exports = function(t) {
        var e, r, u;
        return void 0 === t ? "Undefined": null === t ? "Null": "string" == typeof(r = function(t, e) {
            try {
                return t[e]
            } catch(t) {}
        } (e = Object(t), o)) ? r: i ? n(e) : "Object" == (u = n(e)) && "function" == typeof e.callee ? "Arguments": u
    }
},
function(t, e, r) {
    t.exports = {
    default:
        r(72),
        __esModule: !0
    }
},
function(t, e, r) {
    var n = r(3),
    o = r(10),
    i = r(1)("species");
    t.exports = function(t, e) {
        var r, u = n(t).constructor;
        return void 0 === u || null == (r = n(u)[i]) ? e: o(r)
    }
},
function(t, e, r) {
    var n, o, i, u = r(9),
    c = r(79),
    a = r(36),
    s = r(15),
    f = r(0),
    l = f.process,
    p = f.setImmediate,
    h = f.clearImmediate,
    v = f.MessageChannel,
    d = f.Dispatch,
    y = 0,
    g = {},
    m = function() {
        var t = +this;
        if (g.hasOwnProperty(t)) {
            var e = g[t];
            delete g[t],
            e()
        }
    },
    x = function(t) {
        m.call(t.data)
    };
    p && h || (p = function(t) {
        for (var e = [], r = 1; arguments.length > r;) e.push(arguments[r++]);
        return g[++y] = function() {
            c("function" == typeof t ? t: Function(t), e)
        },
        n(y),
        y
    },
    h = function(t) {
        delete g[t]
    },
    "process" == r(13)(l) ? n = function(t) {
        l.nextTick(u(m, t, 1))
    }: d && d.now ? n = function(t) {
        d.now(u(m, t, 1))
    }: v ? (i = (o = new v).port2, o.port1.onmessage = x, n = u(i.postMessage, i, 1)) : f.addEventListener && "function" == typeof postMessage && !f.importScripts ? (n = function(t) {
        f.postMessage(t + "", "*")
    },
    f.addEventListener("message", x, !1)) : n = "onreadystatechange" in s("script") ?
    function(t) {
        a.appendChild(s("script")).onreadystatechange = function() {
            a.removeChild(this),
            m.call(t)
        }
    }: function(t) {
        setTimeout(u(m, t, 1), 0)
    }),
    t.exports = {
        set: p,
        clear: h
    }
},
function(t, e) {
    t.exports = function(t) {
        try {
            return {
                e: !1,
                v: t()
            }
        } catch(t) {
            return {
                e: !0,
                v: t
            }
        }
    }
},
function(t, e, r) {
    var n = r(3),
    o = r(7),
    i = r(23);
    t.exports = function(t, e) {
        if (n(t), o(e) && e.constructor === t) return e;
        var r = i.f(t);
        return (0, r.resolve)(e),
        r.promise
    }
},
function(t, e, r) {
    "use strict";
    var n = c(r(46)),
    o = c(r(49)),
    i = c(r(87)),
    u = c(r(88));
    function c(t) {
        return t && t.__esModule ? t: {
        default:
            t
        }
    }
    if (!window.hasOwnProperty("jQuery")) throw "不包含jQuery不执行";
    var a = $("<a id='answers-btn' style='background-color: deeppink;' href='javascript:void(0);'\nclass='f14 rest acenter pater'>获 取 答 案</a>");
    $("#putIn").after(a.on("click", (function() {
        var t;
        return n.
    default.async((function(e) {
            for (;;) switch (e.prev = e.next) {
            case 0:
                if (e.prev = 0, console.log("程序开始执行"), bridge.call("loading", "正在执行中..."), t = [], $(".sec2.grays pre img").each((function(e, r) {
                    t.push({
                        src: $(r).attr("src"),
                        idx: e
                    })
                })), 0 !== t.length) {
                    e.next = 7;
                    break
                }
                throw "没有获取到题目，跳过";
            case 7:
                return console.log("开始获取图片MD5"),
                e.next = 10,
                n.
            default.awrap((0, o.
            default)(t));
            case 10:
                return t = e.sent,
                console.log("获取图片MD5完毕", t),
                console.log("开始获取题目答案"),
                e.next = 15,
                n.
            default.awrap((0, i.
            default)(t));
            case 15:
                t = e.sent,
                console.log("获取题目答案完毕", t),
                console.log("开始选择答案"),
                (0, u.
            default)(t),
                console.log("选择答案完毕"),
                e.next = 25;
                break;
            case 22:
                e.prev = 22,
                e.t0 = e.
                catch(0),
                console.error(e.t0);
            case 25:
                return e.prev = 25,
                bridge.call("dismiss"),
                e.finish(25);
            case 28:
                console.log("程序结束");
            case 29:
            case "end":
                return e.stop()
            }
        }), null, this, [[0, 22, 25, 28]])
    })))
},
function(t, e, r) {
    t.exports = r(47)
},
function(t, e, r) {
    var n = function() {
        return this
    } () || Function("return this")(),
    o = n.regeneratorRuntime && Object.getOwnPropertyNames(n).indexOf("regeneratorRuntime") >= 0,
    i = o && n.regeneratorRuntime;
    if (n.regeneratorRuntime = void 0, t.exports = r(48), o) n.regeneratorRuntime = i;
    else try {
        delete n.regeneratorRuntime
    } catch(t) {
        n.regeneratorRuntime = void 0
    }
},
function(t, e) { !
    function(e) {
        "use strict";
        var r = Object.prototype,
        n = r.hasOwnProperty,
        o = "function" == typeof Symbol ? Symbol: {},
        i = o.iterator || "@@iterator",
        u = o.asyncIterator || "@@asyncIterator",
        c = o.toStringTag || "@@toStringTag",
        a = "object" == typeof t,
        s = e.regeneratorRuntime;
        if (s) a && (t.exports = s);
        else { (s = e.regeneratorRuntime = a ? t.exports: {}).wrap = d;
            var f = {},
            l = {};
            l[i] = function() {
                return this
            };
            var p = Object.getPrototypeOf,
            h = p && p(p(P([])));
            h && h !== r && n.call(h, i) && (l = h);
            var v = x.prototype = g.prototype = Object.create(l);
            m.prototype = v.constructor = x,
            x.constructor = m,
            x[c] = m.displayName = "GeneratorFunction",
            s.isGeneratorFunction = function(t) {
                var e = "function" == typeof t && t.constructor;
                return !! e && (e === m || "GeneratorFunction" === (e.displayName || e.name))
            },
            s.mark = function(t) {
                return Object.setPrototypeOf ? Object.setPrototypeOf(t, x) : (t.__proto__ = x, c in t || (t[c] = "GeneratorFunction")),
                t.prototype = Object.create(v),
                t
            },
            s.awrap = function(t) {
                return {
                    __await: t
                }
            },
            w(_.prototype),
            _.prototype[u] = function() {
                return this
            },
            s.AsyncIterator = _,
            s.async = function(t, e, r, n) {
                var o = new _(d(t, e, r, n));
                return s.isGeneratorFunction(e) ? o: o.next().then((function(t) {
                    return t.done ? t.value: o.next()
                }))
            },
            w(v),
            v[c] = "Generator",
            v[i] = function() {
                return this
            },
            v.toString = function() {
                return "[object Generator]"
            },
            s.keys = function(t) {
                var e = [];
                for (var r in t) e.push(r);
                return e.reverse(),
                function r() {
                    for (; e.length;) {
                        var n = e.pop();
                        if (n in t) return r.value = n,
                        r.done = !1,
                        r
                    }
                    return r.done = !0,
                    r
                }
            },
            s.values = P,
            S.prototype = {
                constructor: S,
                reset: function(t) {
                    if (this.prev = 0, this.next = 0, this.sent = this._sent = void 0, this.done = !1, this.delegate = null, this.method = "next", this.arg = void 0, this.tryEntries.forEach(j), !t) for (var e in this)"t" === e.charAt(0) && n.call(this, e) && !isNaN( + e.slice(1)) && (this[e] = void 0)
                },
                stop: function() {
                    this.done = !0;
                    var t = this.tryEntries[0].completion;
                    if ("throw" === t.type) throw t.arg;
                    return this.rval
                },
                dispatchException: function(t) {
                    if (this.done) throw t;
                    var e = this;
                    function r(r, n) {
                        return u.type = "throw",
                        u.arg = t,
                        e.next = r,
                        n && (e.method = "next", e.arg = void 0),
                        !!n
                    }
                    for (var o = this.tryEntries.length - 1; o >= 0; --o) {
                        var i = this.tryEntries[o],
                        u = i.completion;
                        if ("root" === i.tryLoc) return r("end");
                        if (i.tryLoc <= this.prev) {
                            var c = n.call(i, "catchLoc"),
                            a = n.call(i, "finallyLoc");
                            if (c && a) {
                                if (this.prev < i.catchLoc) return r(i.catchLoc, !0);
                                if (this.prev < i.finallyLoc) return r(i.finallyLoc)
                            } else if (c) {
                                if (this.prev < i.catchLoc) return r(i.catchLoc, !0)
                            } else {
                                if (!a) throw new Error("try statement without catch or finally");
                                if (this.prev < i.finallyLoc) return r(i.finallyLoc)
                            }
                        }
                    }
                },
                abrupt: function(t, e) {
                    for (var r = this.tryEntries.length - 1; r >= 0; --r) {
                        var o = this.tryEntries[r];
                        if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) {
                            var i = o;
                            break
                        }
                    }
                    i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null);
                    var u = i ? i.completion: {};
                    return u.type = t,
                    u.arg = e,
                    i ? (this.method = "next", this.next = i.finallyLoc, f) : this.complete(u)
                },
                complete: function(t, e) {
                    if ("throw" === t.type) throw t.arg;
                    return "break" === t.type || "continue" === t.type ? this.next = t.arg: "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e),
                    f
                },
                finish: function(t) {
                    for (var e = this.tryEntries.length - 1; e >= 0; --e) {
                        var r = this.tryEntries[e];
                        if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc),
                        j(r),
                        f
                    }
                },
                catch: function(t) {
                    for (var e = this.tryEntries.length - 1; e >= 0; --e) {
                        var r = this.tryEntries[e];
                        if (r.tryLoc === t) {
                            var n = r.completion;
                            if ("throw" === n.type) {
                                var o = n.arg;
                                j(r)
                            }
                            return o
                        }
                    }
                    throw new Error("illegal catch attempt")
                },
                delegateYield: function(t, e, r) {
                    return this.delegate = {
                        iterator: P(t),
                        resultName: e,
                        nextLoc: r
                    },
                    "next" === this.method && (this.arg = void 0),
                    f
                }
            }
        }
        function d(t, e, r, n) {
            var o = e && e.prototype instanceof g ? e: g,
            i = Object.create(o.prototype),
            u = new S(n || []);
            return i._invoke = function(t, e, r) {
                var n = "suspendedStart";
                return function(o, i) {
                    if ("executing" === n) throw new Error("Generator is already running");
                    if ("completed" === n) {
                        if ("throw" === o) throw i;
                        return L()
                    }
                    for (r.method = o, r.arg = i;;) {
                        var u = r.delegate;
                        if (u) {
                            var c = b(u, r);
                            if (c) {
                                if (c === f) continue;
                                return c
                            }
                        }
                        if ("next" === r.method) r.sent = r._sent = r.arg;
                        else if ("throw" === r.method) {
                            if ("suspendedStart" === n) throw n = "completed",
                            r.arg;
                            r.dispatchException(r.arg)
                        } else "return" === r.method && r.abrupt("return", r.arg);
                        n = "executing";
                        var a = y(t, e, r);
                        if ("normal" === a.type) {
                            if (n = r.done ? "completed": "suspendedYield", a.arg === f) continue;
                            return {
                                value: a.arg,
                                done: r.done
                            }
                        }
                        "throw" === a.type && (n = "completed", r.method = "throw", r.arg = a.arg)
                    }
                }
            } (t, r, u),
            i
        }
        function y(t, e, r) {
            try {
                return {
                    type: "normal",
                    arg: t.call(e, r)
                }
            } catch(t) {
                return {
                    type: "throw",
                    arg: t
                }
            }
        }
        function g() {}
        function m() {}
        function x() {}
        function w(t) { ["next", "throw", "return"].forEach((function(e) {
                t[e] = function(t) {
                    return this._invoke(e, t)
                }
            }))
        }
        function _(t) {
            var e;
            this._invoke = function(r, o) {
                function i() {
                    return new Promise((function(e, i) { !
                        function e(r, o, i, u) {
                            var c = y(t[r], t, o);
                            if ("throw" !== c.type) {
                                var a = c.arg,
                                s = a.value;
                                return s && "object" == typeof s && n.call(s, "__await") ? Promise.resolve(s.__await).then((function(t) {
                                    e("next", t, i, u)
                                }), (function(t) {
                                    e("throw", t, i, u)
                                })) : Promise.resolve(s).then((function(t) {
                                    a.value = t,
                                    i(a)
                                }), u)
                            }
                            u(c.arg)
                        } (r, o, e, i)
                    }))
                }
                return e = e ? e.then(i, i) : i()
            }
        }
        function b(t, e) {
            var r = t.iterator[e.method];
            if (void 0 === r) {
                if (e.delegate = null, "throw" === e.method) {
                    if (t.iterator.
                    return && (e.method = "return", e.arg = void 0, b(t, e), "throw" === e.method)) return f;
                    e.method = "throw",
                    e.arg = new TypeError("The iterator does not provide a 'throw' method")
                }
                return f
            }
            var n = y(r, t.iterator, e.arg);
            if ("throw" === n.type) return e.method = "throw",
            e.arg = n.arg,
            e.delegate = null,
            f;
            var o = n.arg;
            return o ? o.done ? (e[t.resultName] = o.value, e.next = t.nextLoc, "return" !== e.method && (e.method = "next", e.arg = void 0), e.delegate = null, f) : o: (e.method = "throw", e.arg = new TypeError("iterator result is not an object"), e.delegate = null, f)
        }
        function O(t) {
            var e = {
                tryLoc: t[0]
            };
            1 in t && (e.catchLoc = t[1]),
            2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]),
            this.tryEntries.push(e)
        }
        function j(t) {
            var e = t.completion || {};
            e.type = "normal",
            delete e.arg,
            t.completion = e
        }
        function S(t) {
            this.tryEntries = [{
                tryLoc: "root"
            }],
            t.forEach(O, this),
            this.reset(!0)
        }
        function P(t) {
            if (t) {
                var e = t[i];
                if (e) return e.call(t);
                if ("function" == typeof t.next) return t;
                if (!isNaN(t.length)) {
                    var r = -1,
                    o = function e() {
                        for (; ++r < t.length;) if (n.call(t, r)) return e.value = t[r],
                        e.done = !1,
                        e;
                        return e.value = void 0,
                        e.done = !0,
                        e
                    };
                    return o.next = o
                }
            }
            return {
                next: L
            }
        }
        function L() {
            return {
                value: void 0,
                done: !0
            }
        }
    } (function() {
        return this
    } () || Function("return this")())
},
function(t, e, r) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    var n = c(r(24)),
    o = c(r(33)),
    i = c(r(21)),
    u = c(r(40));
    function c(t) {
        return t && t.__esModule ? t: {
        default:
            t
        }
    }
    function a(t) {
        return new u.
    default((function(e, r) {
            var i = {
                url: t.src,
                method: "get",
                dataType: "blob",
                headers: {
                    userAgent: navigator.userAgent,
                    Referer: location.href
                }
            };
            bridge.call("request", (0, o.
        default)(i), (function(r) {
                var o, i, c; (r = JSON.parse(r)).success ? (o = r.data, i = new Blob([new Uint8Array(o)]), c = new FileReader, new u.
            default((function(t, e) {
                    c.onload = function(e) {
                        var r = new SparkMD5.ArrayBuffer;
                        r.append(e.target.result),
                        t(r.end())
                    },
                    c.onerror = function() {
                        e()
                    },
                    c.readAsArrayBuffer(i)
                }))).then((function(r) {
                    e((0, n.
                default)({
                        md5:
                        r
                    },
                    t))
                })).
                catch((function() {
                    e((0, n.
                default)({
                        md5:
                        ""
                    },
                    t))
                })) : e((0, n.
            default)({
                    md5:
                    ""
                },
                t))
            }))
        }))
    }
    e.
default = function(t) {
        var e = [],
        r = !0,
        n = !1,
        o = void 0;
        try {
            for (var c, s = (0, i.
        default)(t); ! (r = (c = s.next()).done); r = !0) {
                var f = c.value;
                e.push(a(f))
            }
        } catch(t) {
            n = !0,
            o = t
        } finally {
            try { ! r && s.
                return && s.
                return ()
            } finally {
                if (n) throw o
            }
        }
        return u.
    default.all(e)
    }
},
function(t, e, r) {
    r(51),
    t.exports = r(2).Object.assign
},
function(t, e, r) {
    var n = r(6);
    n(n.S + n.F, "Object", {
        assign: r(54)
    })
},
function(t, e, r) {
    t.exports = !r(5) && !r(14)((function() {
        return 7 != Object.defineProperty(r(15)("div"), "a", {
            get: function() {
                return 7
            }
        }).a
    }))
},
function(t, e, r) {
    var n = r(7);
    t.exports = function(t, e) {
        if (!n(t)) return t;
        var r, o;
        if (e && "function" == typeof(r = t.toString) && !n(o = r.call(t))) return o;
        if ("function" == typeof(r = t.valueOf) && !n(o = r.call(t))) return o;
        if (!e && "function" == typeof(r = t.toString) && !n(o = r.call(t))) return o;
        throw TypeError("Can't convert object to primitive value")
    }
},
function(t, e, r) {
    "use strict";
    var n = r(5),
    o = r(26),
    i = r(58),
    u = r(59),
    c = r(32),
    a = r(27),
    s = Object.assign;
    t.exports = !s || r(14)((function() {
        var t = {},
        e = {},
        r = Symbol(),
        n = "abcdefghijklmnopqrst";
        return t[r] = 7,
        n.split("").forEach((function(t) {
            e[t] = t
        })),
        7 != s({},
        t)[r] || Object.keys(s({},
        e)).join("") != n
    })) ?
    function(t, e) {
        for (var r = c(t), s = arguments.length, f = 1, l = i.f, p = u.f; s > f;) for (var h, v = a(arguments[f++]), d = l ? o(v).concat(l(v)) : o(v), y = d.length, g = 0; y > g;) h = d[g++],
        n && !p.call(v, h) || (r[h] = v[h]);
        return r
    }: s
},
function(t, e, r) {
    var n = r(12),
    o = r(16),
    i = r(56)(!1),
    u = r(19)("IE_PROTO");
    t.exports = function(t, e) {
        var r, c = o(t),
        a = 0,
        s = [];
        for (r in c) r != u && n(c, r) && s.push(r);
        for (; e.length > a;) n(c, r = e[a++]) && (~i(s, r) || s.push(r));
        return s
    }
},
function(t, e, r) {
    var n = r(16),
    o = r(28),
    i = r(57);
    t.exports = function(t) {
        return function(e, r, u) {
            var c, a = n(e),
            s = o(a.length),
            f = i(u, s);
            if (t && r != r) {
                for (; s > f;) if ((c = a[f++]) != c) return ! 0
            } else for (; s > f; f++) if ((t || f in a) && a[f] === r) return t || f || 0;
            return ! t && -1
        }
    }
},
function(t, e, r) {
    var n = r(18),
    o = Math.max,
    i = Math.min;
    t.exports = function(t, e) {
        return (t = n(t)) < 0 ? o(t + e, 0) : i(t, e)
    }
},
function(t, e) {
    e.f = Object.getOwnPropertySymbols
},
function(t, e) {
    e.f = {}.propertyIsEnumerable
},
function(t, e, r) {
    var n = r(2),
    o = n.JSON || (n.JSON = {
        stringify: JSON.stringify
    });
    t.exports = function(t) {
        return o.stringify.apply(o, arguments)
    }
},
function(t, e, r) {
    r(34),
    r(37),
    t.exports = r(71)
},
function(t, e, r) {
    "use strict";
    var n = r(63),
    o = r(64),
    i = r(8),
    u = r(16);
    t.exports = r(35)(Array, "Array", (function(t, e) {
        this._t = u(t),
        this._i = 0,
        this._k = e
    }), (function() {
        var t = this._t,
        e = this._k,
        r = this._i++;
        return ! t || r >= t.length ? (this._t = void 0, o(1)) : o(0, "keys" == e ? r: "values" == e ? t[r] : [r, t[r]])
    }), "values"),
    i.Arguments = i.Array,
    n("keys"),
    n("values"),
    n("entries")
},
function(t, e) {
    t.exports = function() {}
},
function(t, e) {
    t.exports = function(t, e) {
        return {
            value: e,
            done: !!t
        }
    }
},
function(t, e, r) {
    t.exports = r(4)
},
function(t, e, r) {
    "use strict";
    var n = r(67),
    o = r(25),
    i = r(22),
    u = {};
    r(4)(u, r(1)("iterator"), (function() {
        return this
    })),
    t.exports = function(t, e, r) {
        t.prototype = n(u, {
            next: o(1, r)
        }),
        i(t, e + " Iterator")
    }
},
function(t, e, r) {
    var n = r(3),
    o = r(68),
    i = r(31),
    u = r(19)("IE_PROTO"),
    c = function() {},
    a = function() {
        var t, e = r(15)("iframe"),
        n = i.length;
        for (e.style.display = "none", r(36).appendChild(e), e.src = "javascript:", (t = e.contentWindow.document).open(), t.write("<script>document.F=Object<\/script>"), t.close(), a = t.F; n--;) delete a.prototype[i[n]];
        return a()
    };
    t.exports = Object.create ||
    function(t, e) {
        var r;
        return null !== t ? (c.prototype = n(t), r = new c, c.prototype = null, r[u] = t) : r = a(),
        void 0 === e ? r: o(r, e)
    }
},
function(t, e, r) {
    var n = r(11),
    o = r(3),
    i = r(26);
    t.exports = r(5) ? Object.defineProperties: function(t, e) {
        o(t);
        for (var r, u = i(e), c = u.length, a = 0; c > a;) n.f(t, r = u[a++], e[r]);
        return t
    }
},
function(t, e, r) {
    var n = r(12),
    o = r(32),
    i = r(19)("IE_PROTO"),
    u = Object.prototype;
    t.exports = Object.getPrototypeOf ||
    function(t) {
        return t = o(t),
        n(t, i) ? t[i] : "function" == typeof t.constructor && t instanceof t.constructor ? t.constructor.prototype: t instanceof Object ? u: null
    }
},
function(t, e, r) {
    var n = r(18),
    o = r(17);
    t.exports = function(t) {
        return function(e, r) {
            var i, u, c = String(o(e)),
            a = n(r),
            s = c.length;
            return a < 0 || a >= s ? t ? "": void 0 : (i = c.charCodeAt(a)) < 55296 || i > 56319 || a + 1 === s || (u = c.charCodeAt(a + 1)) < 56320 || u > 57343 ? t ? c.charAt(a) : i: t ? c.slice(a, a + 2) : u - 56320 + (i - 55296 << 10) + 65536
        }
    }
},
function(t, e, r) {
    var n = r(3),
    o = r(38);
    t.exports = r(2).getIterator = function(t) {
        var e = o(t);
        if ("function" != typeof e) throw TypeError(t + " is not iterable!");
        return n(e.call(t))
    }
},
function(t, e, r) {
    r(73),
    r(37),
    r(34),
    r(74),
    r(85),
    r(86),
    t.exports = r(2).Promise
},
function(t, e) {},
function(t, e, r) {
    "use strict";
    var n, o, i, u, c = r(20),
    a = r(0),
    s = r(9),
    f = r(39),
    l = r(6),
    p = r(7),
    h = r(10),
    v = r(75),
    d = r(76),
    y = r(41),
    g = r(42).set,
    m = r(80)(),
    x = r(23),
    w = r(43),
    _ = r(81),
    b = r(44),
    O = a.TypeError,
    j = a.process,
    S = j && j.versions,
    P = S && S.v8 || "",
    L = a.Promise,
    E = "process" == f(j),
    M = function() {},
    T = o = x.f,
    k = !!
    function() {
        try {
            var t = L.resolve(1),
            e = (t.constructor = {})[r(1)("species")] = function(t) {
                t(M, M)
            };
            return (E || "function" == typeof PromiseRejectionEvent) && t.then(M) instanceof e && 0 !== P.indexOf("6.6") && -1 === _.indexOf("Chrome/66")
        } catch(t) {}
    } (),
    A = function(t) {
        var e;
        return ! (!p(t) || "function" != typeof(e = t.then)) && e
    },
    R = function(t, e) {
        if (!t._n) {
            t._n = !0;
            var r = t._c;
            m((function() {
                for (var n = t._v,
                o = 1 == t._s,
                i = 0,
                u = function(e) {
                    var r, i, u, c = o ? e.ok: e.fail,
                    a = e.resolve,
                    s = e.reject,
                    f = e.domain;
                    try {
                        c ? (o || (2 == t._h && C(t), t._h = 1), !0 === c ? r = n: (f && f.enter(), r = c(n), f && (f.exit(), u = !0)), r === e.promise ? s(O("Promise-chain cycle")) : (i = A(r)) ? i.call(r, a, s) : a(r)) : s(n)
                    } catch(t) {
                        f && !u && f.exit(),
                        s(t)
                    }
                }; r.length > i;) u(r[i++]);
                t._c = [],
                t._n = !1,
                e && !t._h && F(t)
            }))
        }
    },
    F = function(t) {
        g.call(a, (function() {
            var e, r, n, o = t._v,
            i = N(t);
            if (i && (e = w((function() {
                E ? j.emit("unhandledRejection", o, t) : (r = a.onunhandledrejection) ? r({
                    promise: t,
                    reason: o
                }) : (n = a.console) && n.error && n.error("Unhandled promise rejection", o)
            })), t._h = E || N(t) ? 2 : 1), t._a = void 0, i && e.e) throw e.v
        }))
    },
    N = function(t) {
        return 1 !== t._h && 0 === (t._a || t._c).length
    },
    C = function(t) {
        g.call(a, (function() {
            var e;
            E ? j.emit("rejectionHandled", t) : (e = a.onrejectionhandled) && e({
                promise: t,
                reason: t._v
            })
        }))
    },
    G = function(t) {
        var e = this;
        e._d || (e._d = !0, (e = e._w || e)._v = t, e._s = 2, e._a || (e._a = e._c.slice()), R(e, !0))
    },
    I = function(t) {
        var e, r = this;
        if (!r._d) {
            r._d = !0,
            r = r._w || r;
            try {
                if (r === t) throw O("Promise can't be resolved itself"); (e = A(t)) ? m((function() {
                    var n = {
                        _w: r,
                        _d: !1
                    };
                    try {
                        e.call(t, s(I, n, 1), s(G, n, 1))
                    } catch(t) {
                        G.call(n, t)
                    }
                })) : (r._v = t, r._s = 1, R(r, !1))
            } catch(t) {
                G.call({
                    _w: r,
                    _d: !1
                },
                t)
            }
        }
    };
    k || (L = function(t) {
        v(this, L, "Promise", "_h"),
        h(t),
        n.call(this);
        try {
            t(s(I, this, 1), s(G, this, 1))
        } catch(t) {
            G.call(this, t)
        }
    },
    (n = function(t) {
        this._c = [],
        this._a = void 0,
        this._s = 0,
        this._d = !1,
        this._v = void 0,
        this._h = 0,
        this._n = !1
    }).prototype = r(82)(L.prototype, {
        then: function(t, e) {
            var r = T(y(this, L));
            return r.ok = "function" != typeof t || t,
            r.fail = "function" == typeof e && e,
            r.domain = E ? j.domain: void 0,
            this._c.push(r),
            this._a && this._a.push(r),
            this._s && R(this, !1),
            r.promise
        },
        catch: function(t) {
            return this.then(void 0, t)
        }
    }), i = function() {
        var t = new n;
        this.promise = t,
        this.resolve = s(I, t, 1),
        this.reject = s(G, t, 1)
    },
    x.f = T = function(t) {
        return t === L || t === u ? new i(t) : o(t)
    }),
    l(l.G + l.W + l.F * !k, {
        Promise: L
    }),
    r(22)(L, "Promise"),
    r(83)("Promise"),
    u = r(2).Promise,
    l(l.S + l.F * !k, "Promise", {
        reject: function(t) {
            var e = T(this);
            return (0, e.reject)(t),
            e.promise
        }
    }),
    l(l.S + l.F * (c || !k), "Promise", {
        resolve: function(t) {
            return b(c && this === u ? L: this, t)
        }
    }),
    l(l.S + l.F * !(k && r(84)((function(t) {
        L.all(t).
        catch(M)
    }))), "Promise", {
        all: function(t) {
            var e = this,
            r = T(e),
            n = r.resolve,
            o = r.reject,
            i = w((function() {
                var r = [],
                i = 0,
                u = 1;
                d(t, !1, (function(t) {
                    var c = i++,
                    a = !1;
                    r.push(void 0),
                    u++,
                    e.resolve(t).then((function(t) {
                        a || (a = !0, r[c] = t, --u || n(r))
                    }), o)
                })),
                --u || n(r)
            }));
            return i.e && o(i.v),
            r.promise
        },
        race: function(t) {
            var e = this,
            r = T(e),
            n = r.reject,
            o = w((function() {
                d(t, !1, (function(t) {
                    e.resolve(t).then(r.resolve, n)
                }))
            }));
            return o.e && n(o.v),
            r.promise
        }
    })
},
function(t, e) {
    t.exports = function(t, e, r, n) {
        if (! (t instanceof e) || void 0 !== n && n in t) throw TypeError(r + ": incorrect invocation!");
        return t
    }
},
function(t, e, r) {
    var n = r(9),
    o = r(77),
    i = r(78),
    u = r(3),
    c = r(28),
    a = r(38),
    s = {},
    f = {}; (e = t.exports = function(t, e, r, l, p) {
        var h, v, d, y, g = p ?
        function() {
            return t
        }: a(t),
        m = n(r, l, e ? 2 : 1),
        x = 0;
        if ("function" != typeof g) throw TypeError(t + " is not iterable!");
        if (i(g)) {
            for (h = c(t.length); h > x; x++) if ((y = e ? m(u(v = t[x])[0], v[1]) : m(t[x])) === s || y === f) return y
        } else for (d = g.call(t); ! (v = d.next()).done;) if ((y = o(d, m, v.value, e)) === s || y === f) return y
    }).BREAK = s,
    e.RETURN = f
},
function(t, e, r) {
    var n = r(3);
    t.exports = function(t, e, r, o) {
        try {
            return o ? e(n(r)[0], r[1]) : e(r)
        } catch(e) {
            var i = t.
            return;
            throw void 0 !== i && n(i.call(t)),
            e
        }
    }
},
function(t, e, r) {
    var n = r(8),
    o = r(1)("iterator"),
    i = Array.prototype;
    t.exports = function(t) {
        return void 0 !== t && (n.Array === t || i[o] === t)
    }
},
function(t, e) {
    t.exports = function(t, e, r) {
        var n = void 0 === r;
        switch (e.length) {
        case 0:
            return n ? t() : t.call(r);
        case 1:
            return n ? t(e[0]) : t.call(r, e[0]);
        case 2:
            return n ? t(e[0], e[1]) : t.call(r, e[0], e[1]);
        case 3:
            return n ? t(e[0], e[1], e[2]) : t.call(r, e[0], e[1], e[2]);
        case 4:
            return n ? t(e[0], e[1], e[2], e[3]) : t.call(r, e[0], e[1], e[2], e[3])
        }
        return t.apply(r, e)
    }
},
function(t, e, r) {
    var n = r(0),
    o = r(42).set,
    i = n.MutationObserver || n.WebKitMutationObserver,
    u = n.process,
    c = n.Promise,
    a = "process" == r(13)(u);
    t.exports = function() {
        var t, e, r, s = function() {
            var n, o;
            for (a && (n = u.domain) && n.exit(); t;) {
                o = t.fn,
                t = t.next;
                try {
                    o()
                } catch(n) {
                    throw t ? r() : e = void 0,
                    n
                }
            }
            e = void 0,
            n && n.enter()
        };
        if (a) r = function() {
            u.nextTick(s)
        };
        else if (!i || n.navigator && n.navigator.standalone) if (c && c.resolve) {
            var f = c.resolve(void 0);
            r = function() {
                f.then(s)
            }
        } else r = function() {
            o.call(n, s)
        };
        else {
            var l = !0,
            p = document.createTextNode("");
            new i(s).observe(p, {
                characterData: !0
            }),
            r = function() {
                p.data = l = !l
            }
        }
        return function(n) {
            var o = {
                fn: n,
                next: void 0
            };
            e && (e.next = o),
            t || (t = o, r()),
            e = o
        }
    }
},
function(t, e, r) {
    var n = r(0).navigator;
    t.exports = n && n.userAgent || ""
},
function(t, e, r) {
    var n = r(4);
    t.exports = function(t, e, r) {
        for (var o in e) r && t[o] ? t[o] = e[o] : n(t, o, e[o]);
        return t
    }
},
function(t, e, r) {
    "use strict";
    var n = r(0),
    o = r(2),
    i = r(11),
    u = r(5),
    c = r(1)("species");
    t.exports = function(t) {
        var e = "function" == typeof o[t] ? o[t] : n[t];
        u && e && !e[c] && i.f(e, c, {
            configurable: !0,
            get: function() {
                return this
            }
        })
    }
},
function(t, e, r) {
    var n = r(1)("iterator"),
    o = !1;
    try {
        var i = [7][n]();
        i.
        return = function() {
            o = !0
        },
        Array.from(i, (function() {
            throw 2
        }))
    } catch(t) {}
    t.exports = function(t, e) {
        if (!e && !o) return ! 1;
        var r = !1;
        try {
            var i = [7],
            u = i[n]();
            u.next = function() {
                return {
                    done: r = !0
                }
            },
            i[n] = function() {
                return u
            },
            t(i)
        } catch(t) {}
        return r
    }
},
function(t, e, r) {
    "use strict";
    var n = r(6),
    o = r(2),
    i = r(0),
    u = r(41),
    c = r(44);
    n(n.P + n.R, "Promise", {
        finally: function(t) {
            var e = u(this, o.Promise || i.Promise),
            r = "function" == typeof t;
            return this.then(r ?
            function(r) {
                return c(e, t()).then((function() {
                    return r
                }))
            }: t, r ?
            function(r) {
                return c(e, t()).then((function() {
                    throw r
                }))
            }: t)
        }
    })
},
function(t, e, r) {
    "use strict";
    var n = r(6),
    o = r(23),
    i = r(43);
    n(n.S, "Promise", {
        try: function(t) {
            var e = o.f(this),
            r = i(t);
            return (r.e ? e.reject: e.resolve)(r.v),
            e.promise
        }
    })
},
function(t, e, r) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    var n = u(r(24)),
    o = u(r(21)),
    i = u(r(40));
    function u(t) {
        return t && t.__esModule ? t: {
        default:
            t
        }
    }
    function c(t) {
        return new i.
    default((function(e, r) {
            $.ajax({
                url: "http://10.43.2.34:8888/bluedird/webview/answer/" + t.md5,
                timeout: 5e3,
                success: function(r) {
                    null != r.data ? e((0, n.
                default)({
                        answers:
                        r.data.split(",")
                    },
                    t)) : this.error()
                },
                error: function() {
                    e((0, n.
                default)({
                        answers:
                        []
                    },
                    t))
                }
            })
        }))
    }
    e.
default = function(t) {
        var e = [],
        r = !0,
        n = !1,
        u = void 0;
        try {
            for (var a, s = (0, o.
        default)(t); ! (r = (a = s.next()).done); r = !0) {
                var f = a.value;
                e.push(c(f))
            }
        } catch(t) {
            n = !0,
            u = t
        } finally {
            try { ! r && s.
                return && s.
                return ()
            } finally {
                if (n) throw u
            }
        }
        return i.
    default.all(e)
    }
},
function(t, e, r) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    var n = i(r(33)),
    o = i(r(21));
    function i(t) {
        return t && t.__esModule ? t: {
        default:
            t
        }
    }
    e.
default = function(t) {
        var e = !0,
        r = !1,
        i = void 0;
        try {
            for (var u, c = (0, o.
        default)(t); ! (e = (u = c.next()).done); e = !0) {
                var a = u.value;
                console.log("选择题目:" + a.idx + ",MD5:" + a.md5 + ",答案:" + (0, n.
            default)(a.answers));
                var s = $(".sec.post").eq(a.idx).find("ul.sec2.grays li pre"),
                f = !0,
                l = !1,
                p = void 0;
                try {
                    for (var h, v = (0, o.
                default)(a.answers); ! (f = (h = v.next()).done); f = !0) {
                        var d = h.value.toUpperCase().charCodeAt() % 65;
                        s.eq(d).click()
                    }
                } catch(t) {
                    l = !0,
                    p = t
                } finally {
                    try { ! f && v.
                        return && v.
                        return ()
                    } finally {
                        if (l) throw p
                    }
                }
            }
        } catch(t) {
            r = !0,
            i = t
        } finally {
            try { ! e && c.
                return && c.
                return ()
            } finally {
                if (r) throw i
            }
        }
    }
}]);
