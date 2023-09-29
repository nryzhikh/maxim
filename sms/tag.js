(function() {
    try {
        (function() {
            function Wa(a, b, c, d) {
                var e = this;
                return N(window, "c.i", function() {
                    function f(z) {
                        (z = Gb(k, l, "", z)(k, l)) && (A(z.then) ? z.then(g) : g(z));
                        return z
                    }
                    function g(z) {
                        z && (A(z) ? n.push(z) : Xa(z) && r(function(S) {
                            var Ga = S[0];
                            S = S[1];
                            A(S) && ("u" === Ga ? n.push(S) : h(S, Ga))
                        }, ba(z)))
                    }
                    function h(z, S, Ga) {
                        e[S] = od(k, l, Ga || B, S, z)
                    }
                    var k = window;
                    (!k || isNaN(a) && !a) && Hb();
                    var l = pd(a, qd, b, c, d)
                      , n = []
                      , B = [Ib, Gb, Jb]
                      , I = r(C, rd)
                      , T = D(l);
                    l.id || ca(pa("Invalid Metrika id: " + l.id, !0));
                    var Ia = Ha.g("counters", {});
                    if (Ia[T])
                        return Ia[T];
                    Ia[T] = e;
                    Ha.l("counters", Ia);
                    Ha.na("counter", e);
                    r(function(z) {
                        z(k, l)
                    }, Kb);
                    r(f, sd);
                    f(td);
                    h(ud(k, l, n), "destruct", [Ib, Jb]);
                    Ja(k, x([k, I, f, 1, "a.i"], vd));
                    r(f, qa)
                })()
            }
            function wd(a, b) {
                var c = "" + b
                  , d = {
                    id: 1,
                    K: "0"
                }
                  , e = xd(c);
                e ? d.id = e : -1 === c.indexOf(":") ? (c = da(c),
                d.id = c) : (c = c.split(":"),
                e = c[1],
                d.id = da(c[0]),
                d.K = yd(e) ? "1" : "0");
                return [Ka(a, d), d]
            }
            function zd(a, b, c, d) {
                void 0 === c && (c = O);
                void 0 === d && (d = !1);
                var e = Lb(a);
                if (b && A(b.push)) {
                    var f = b.push;
                    b.push = function() {
                        var g = F(arguments)
                          , h = g[0];
                        d && e.D(h);
                        g = f.apply(b, g);
                        d || e.D(h);
                        return g
                    }
                    ;
                    a = {
                        Ha: e,
                        unsubscribe: function() {
                            b.push = f
                        }
                    };
                    c(a);
                    r(e.D, b);
                    return a
                }
            }
            function Ad(a) {
                var b = O
                  , c = null
                  , d = a.length;
                if (0 !== a.length && a[0]) {
                    var e = a.slice(-1)[0];
                    A(e) && (b = e,
                    d = a.length + -1);
                    var f = a.slice(-2)[0];
                    A(f) && (b = f,
                    c = e,
                    d = a.length + -2);
                    d = a.slice(0, d);
                    return {
                        ya: c,
                        xa: b,
                        H: 1 === d.length ? a[0] : Bd(d)
                    }
                }
            }
            function Cd(a, b, c, d, e) {
                var f = x([a, d, e], Ya);
                return c.then(f, function(g) {
                    f();
                    Mb(a, b, g)
                })
            }
            function Nb(a, b) {
                return {
                    G: function(c, d) {
                        var e = (c.L || {}).H
                          , f = c.N;
                        f = void 0 === f ? {} : f;
                        if (e && !f.I && c.m && c.o) {
                            var g = Za(a, e)
                              , h = Ob(a)
                              , k = c.m.g("pv");
                            g && !c.o.nohit && (k ? encodeURIComponent(g).length > Dd ? h.push([c.m, e]) : c.o["site-info"] = g : (f.I = g,
                            c.N = f,
                            c.T || (c.T = {}),
                            c.T.Fa = !0))
                        }
                        d()
                    },
                    V: function(c, d) {
                        var e = Ob(a)
                          , f = Ka(a, b)
                          , g = f && f.params;
                        g && (f = ra(q(La, U(c.m)), e),
                        r(function(h) {
                            g(h[1]);
                            h = Pb(a)(h, e);
                            e.splice(h, 1)
                        }, f));
                        d()
                    }
                }
            }
            function Ka(a, b) {
                var c = P(a).g("counters", {})
                  , d = D(b);
                return c[d]
            }
            function Qb(a, b) {
                P(a).l("dce:" + b, !0);
                var c = P(a).g("dclq:" + b);
                c && (r(function(d) {
                    var e = d[0];
                    d = d[1];
                    V.apply(void 0, W([Ed(a, b)[e]], d))
                }, c),
                c.splice(0, c.length))
            }
            function Fd(a, b, c) {
                b = D(b);
                a = Rb(a);
                c = v({
                    Wa: a(ia)
                }, c);
                return Gd()(Hd(b, c))
            }
            function Hd(a, b) {
                return function(c) {
                    var d = c[a];
                    d ? (d.La = b,
                    d.Na = !0,
                    d.Ma ? d.Ma(b) : d.promise = y.resolve(b)) : c[a] = {
                        promise: y.resolve(b),
                        La: b,
                        Na: !0
                    }
                }
            }
            function sa(a) {
                return $a(a) ? u(a, Id) : !1
            }
            function Id(a, b, c) {
                return new y(function(d, e) {
                    var f, g, h = "_ymjsp" + ea(a), k = v((f = {},
                    f.callback = h,
                    f), c.$), l = x([a, h], Jd);
                    a[h] = function(B) {
                        try {
                            l(),
                            Ma(n),
                            d(B)
                        } catch (I) {
                            e(I)
                        }
                    }
                    ;
                    k.wmode = "5";
                    var n = Kd(a, (g = {},
                    g.src = Sb(b, c, k),
                    g));
                    if (!n)
                        return l(),
                        e(pa("jp.s"));
                    f = u(n, Ma);
                    f = q(f, u(ta(c.R), e));
                    g = Na(a, f, c.ca || 1E4);
                    g = x([a, g], Tb);
                    n.onload = g;
                    n.onerror = q(l, g, f)
                }
                )
            }
            function Jd(a, b) {
                try {
                    delete a[b]
                } catch (c) {
                    a[b] = void 0
                }
            }
            function ua(a) {
                var b = $a(a);
                return b ? x([a, b], Ld) : !1
            }
            function Ld(a, b, c, d) {
                return new y(function(e, f) {
                    var g = Ub(a)
                      , h = b("img")
                      , k = q(u(h, Ma), u(ta(d.R), f))
                      , l = Na(a, k, d.ca || 3E3);
                    h.onerror = k;
                    h.onload = q(u(h, Ma), u(null, e), x([a, l], Tb));
                    k = v({}, d.$);
                    delete k.wmode;
                    h.src = Sb(c, d, k);
                    Vb(a) && (v(h.style, {
                        position: "absolute",
                        visibility: "hidden",
                        width: "0px",
                        height: "0px"
                    }),
                    g.appendChild(h))
                }
                )
            }
            function va(a) {
                var b;
                if (b = m(a, "XMLHttpRequest"))
                    if (b = "withCredentials"in new a.XMLHttpRequest) {
                        a: {
                            if (Md.test(a.location.host) && a.opera && A(a.opera.version) && (b = a.opera.version(),
                            "string" === typeof b && "12" === b.split(".")[0])) {
                                b = !0;
                                break a
                            }
                            b = !1
                        }
                        b = !b
                    }
                return b ? u(a, Nd) : !1
            }
            function Nd(a, b, c) {
                var d, e = new a.XMLHttpRequest, f = c.I, g = v(c.va ? (d = {},
                d.wmode = "7",
                d) : {}, c.$);
                return new y(function(h, k) {
                    e.open(c.Ua || "GET", b + "?" + Wb(g), !0);
                    e.withCredentials = !1 !== c.ib;
                    c.ca && (e.timeout = c.ca);
                    Xb(ba, Yb(function(n) {
                        e.setRequestHeader(n[0], n[1])
                    }))(c.U);
                    var l = x([a, e, ta(c.R), c.va, c.gb, h, k], Od);
                    e.onreadystatechange = l;
                    try {
                        e.send(f)
                    } catch (n) {}
                }
                )
            }
            function Od(a, b, c, d, e, f, g, h) {
                if (4 === b.readyState)
                    if (200 === b.status || e || g(c),
                    e)
                        200 === b.status ? f(b.responseText) : g(pa("http." + b.status + ".st." + b.statusText + ".rt." + ("" + b.responseText).substring(0, 50)));
                    else {
                        e = null;
                        if (d)
                            try {
                                (e = ab(a, b.responseText)) || g(c)
                            } catch (k) {
                                g(c)
                            }
                        f(e)
                    }
                return h
            }
            function Sb(a, b, c) {
                (c = Wb(c)) && (a += "?" + c);
                b.I && (a += (c ? "&" : "?") + b.I);
                return a
            }
            function Pd(a, b, c) {
                var d = r(La, Zb[b] || bb);
                r(function(e) {
                    return d.unshift(e)
                }, Qd);
                return r(q(wa([a, c]), V), d)
            }
            function $b(a, b) {
                var c = ja(a)
                  , d = c.href
                  , e = c.host
                  , f = -1;
                if ("string" !== typeof b || G(b))
                    return d;
                c = b.replace(ac, "");
                if (-1 !== c.search(Rd))
                    return c;
                var g = c.charAt(0);
                if ("?" === g && (f = d.search(/\?/),
                -1 === f) || "#" === g && (f = d.search(/#/),
                -1 === f))
                    return d + c;
                if (-1 !== f)
                    return d.substr(0, f) + c;
                if ("/" === g) {
                    if (f = d.indexOf(e),
                    -1 !== f)
                        return d.substr(0, f + e.length) + c
                } else
                    return d = d.split("/"),
                    d[d.length - 1] = c,
                    J("/", d);
                return ""
            }
            function bc(a, b) {
                return {
                    G: function(c, d) {
                        var e = cc(b);
                        e = x([c, e, d], Sd);
                        Td(a, b, e)
                    },
                    V: function(c, d) {
                        var e = c.m
                          , f = cc(b);
                        if (e) {
                            var g = f.B;
                            f.ia === e && g && (r(V, g),
                            f.B = null)
                        }
                        d()
                    }
                }
            }
            function Sd(a, b, c) {
                var d = a.m;
                d ? (a = a.m) && a.g("pv") && !a.g("ar") ? (b.ia = d,
                c()) : b.B ? b.B.push(c) : c() : c()
            }
            function Td(a, b, c) {
                if (cb(a) && ka(a)) {
                    var d = Ud(b);
                    if (!d.Ea) {
                        d.Ea = !0;
                        b = db(a, b);
                        if (!b) {
                            c();
                            return
                        }
                        d.B = [];
                        var e = function() {
                            d.B && (r(V, d.B),
                            d.B = null)
                        };
                        la(a, e, 3E3);
                        b.za.A(["initToChild"], e)
                    }
                    d.B ? d.B.push(c) : c()
                } else
                    c()
            }
            function dc(a) {
                return function(b, c) {
                    return {
                        G: function(d, e) {
                            var f = d.m
                              , g = d.o;
                            f && g && r(function(h) {
                                var k = ec[h];
                                k && (k = K("bi:" + h, k, null)(b, c, d),
                                f.Qa(h, k))
                            }, a || Vd());
                            e()
                        }
                    }
                }
            }
            function Wd(a, b) {
                var c = xa(a);
                b.A(["initToParent"], function(d) {
                    var e = d[0];
                    d = d[1];
                    window.window && (c.children[d.counterId] = {
                        info: d,
                        window: e.source
                    })
                }).A(["initToChild"], function(d) {
                    var e = d[0];
                    d = d[1];
                    e.source === a.parent && b.D("parentConnect", [e, d])
                }).A(["parentConnect"], function(d) {
                    var e = d[1];
                    e.counterId && (c.M[e.counterId] = {
                        info: e,
                        window: d[0].source
                    })
                })
            }
            function Xd(a) {
                if (ma("MutationObserver", a.MutationObserver)) {
                    var b = xa(a).children
                      , c = new a.MutationObserver(function() {
                        r(function(d) {
                            m(b[d], "window.window") || delete b[d]
                        }, na(b))
                    }
                    );
                    Yd(a)(fc(O, function() {
                        c.observe(a.document.body, {
                            subtree: !0,
                            childList: !0
                        })
                    }))
                }
            }
            function Zd(a, b) {
                return function(c, d) {
                    var e, f = {
                        W: X(a)(ia),
                        key: a.Math.random(),
                        dir: 0
                    };
                    c.length && (f.W = da(c[0]),
                    f.key = parseFloat(c[1]),
                    f.dir = da(c[2]));
                    v(d, b);
                    var g = (e = {
                        data: d
                    },
                    e.__yminfo = J(":", ["__yminfo", f.W, f.key, f.dir]),
                    e);
                    return {
                        ka: f,
                        qa: Za(a, g) || ""
                    }
                }
            }
            function Yd(a, b) {
                function c(e) {
                    m(b, d) ? e() : la(a, u(e, c), 100)
                }
                void 0 === b && (b = a);
                var d = (b.nodeType ? "contentWindow." : "") + "document.body";
                return Y(function(e, f) {
                    c(f)
                })
            }
            function ya(a, b) {
                var c = b.X
                  , d = c || "uid";
                c = c ? a.location.hostname : void 0;
                var e = gc(a)
                  , f = hc(a)
                  , g = X(a)(eb)
                  , h = ic(a, b)
                  , k = h[0];
                h = h[1];
                var l = e.g("d");
                $d(a, b);
                var n = !1;
                !h && k && (h = k,
                n = !0);
                if (!h)
                    h = J("", [g, ea(a, 1E6, 999999999)]),
                    n = !0;
                else if (!l || 15768E3 < g - da(l))
                    n = !0;
                n && !b.Y && (e.l(d, h, 525600, c),
                e.l("d", "" + g, 525600, c));
                f.l(d, h);
                return h
            }
            function ic(a, b) {
                var c = hc(a)
                  , d = gc(a)
                  , e = b.X || "uid";
                return [c.g(e), d.g(e)]
            }
            function fb(a, b, c, d, e, f, g) {
                void 0 === g && (g = !1);
                if (ae(a, jc, b)) {
                    var h = b + "=" + encodeURIComponent(c) + ";";
                    if (d) {
                        var k = new Date;
                        k.setTime(k.getTime() + 6E4 * d);
                        h += "expires=" + k.toUTCString() + ";"
                    }
                    e && (d = e.replace(be, ""),
                    h += "domain=" + d + ";");
                    try {
                        a.document.cookie = h + ("path=" + (f || "/")),
                        g || (kc(a)[b] = c)
                    } catch (l) {}
                }
            }
            function jc(a, b) {
                var c = kc(a);
                return c ? c[b] || null : null
            }
            function lc(a) {
                try {
                    var b = a.document.cookie;
                    if (!L(b)) {
                        var c = {};
                        r(function(d) {
                            var e = d.split("=");
                            d = e[1];
                            e = mc(e[0]);
                            var f = "";
                            try {
                                f = decodeURIComponent(d)
                            } catch (g) {}
                            c[e] = mc(f)
                        }, (b || "").split(";"));
                        return c
                    }
                } catch (d) {}
                return null
            }
            function ae(a, b, c) {
                return !nc.length || Oa(c, ce) ? !0 : E(function(d, e) {
                    return d && e(a, b, c)
                }, !0, nc)
            }
            function oc(a) {
                var b = P(a)
                  , c = b.g("hitId");
                c || (c = ea(a),
                b.l("hitId", c));
                return c
            }
            function ja(a) {
                return E(function(b, c) {
                    var d = m(a, "location." + c);
                    b[c] = d ? "" + d : "";
                    return b
                }, {}, de)
            }
            function Kd(a, b) {
                var c = a.document
                  , d = v({
                    type: "text/javascript",
                    charset: "utf-8",
                    async: !0
                }, b)
                  , e = $a(a);
                if (e) {
                    var f = e("script");
                    Xb(ba, Yb(function(l) {
                        var n = l[0];
                        l = l[1];
                        "async" === n && l ? f.async = !0 : f[n] = l
                    }))(d);
                    try {
                        var g = Z("getElementsByTagName", c)
                          , h = g("head")[0];
                        if (!h) {
                            var k = g("html")[0];
                            h = e("head");
                            k && k.appendChild(h)
                        }
                        h.insertBefore(f, h.firstChild);
                        return f
                    } catch (l) {}
                }
            }
            function mc(a, b) {
                if (a) {
                    var c = pc ? pc.call(a) : ("" + a).replace(ac, "");
                    return b && c.length > b ? c.substring(0, b) : c
                }
                return ""
            }
            function ee(a, b, c) {
                c = Z("dispatchEvent", c || a.document);
                var d = null
                  , e = m(a, "Event.prototype.constructor");
                if (e && (ma("(Event|Object|constructor)", e) || qc(a) && "[object Event]" === "" + e))
                    try {
                        d = new a.Event(b)
                    } catch (f) {
                        if ((a = Z("createEvent", m(a, "document"))) && A(a)) {
                            try {
                                d = a(b)
                            } catch (g) {}
                            d && d.initEvent && d.initEvent(b, !1, !1)
                        }
                    }
                d && c(d)
            }
            function Ub(a) {
                var b = m(a, "document") || {}
                  , c = b.documentElement;
                if ("CSS1Compat" !== b.compatMode) {
                    a = m(a, "document");
                    try {
                        var d = a.getElementsByTagName("body")[0]
                    } catch (e) {
                        d = null
                    }
                    c = d || c
                }
                return c
            }
            function Ma(a) {
                var b = a && a.parentNode;
                b && b.removeChild(a)
            }
            function rc(a, b, c) {
                void 0 === b && (b = "");
                void 0 === c && (c = "_ym");
                var d = "" + c + b + "_";
                return {
                    ab: fe(a),
                    g: function(e, f) {
                        var g = sc(a, "" + d + e);
                        return za(g) && !G(f) ? f : g
                    },
                    l: function(e, f) {
                        tc(a, "" + d + e, f);
                        return this
                    },
                    ga: function(e) {
                        uc(a, "" + d + e);
                        return this
                    }
                }
            }
            function tc(a, b, c) {
                var d = gb(a);
                a = Za(a, c);
                if (!za(a))
                    try {
                        d.setItem(b, a)
                    } catch (e) {}
            }
            function sc(a, b) {
                var c = gb(a);
                try {
                    return ab(a, c.getItem(b))
                } catch (d) {}
                return null
            }
            function uc(a, b) {
                var c = gb(a);
                try {
                    c.removeItem(b)
                } catch (d) {}
            }
            function gb(a) {
                try {
                    return a.localStorage
                } catch (b) {}
                return null
            }
            function Za(a, b, c) {
                try {
                    return a.JSON.stringify(b, null, c)
                } catch (d) {
                    return null
                }
            }
            function vc(a) {
                return {
                    G: function(b, c) {
                        var d = a.document
                          , e = b.m;
                        if (e && wc(a)) {
                            var f = Pa(a)
                              , g = function(h) {
                                wc(a) || (f.sa(d, xc, g),
                                c());
                                return h
                            };
                            f.A(d, xc, g);
                            e.l("pr", "1")
                        } else
                            c()
                    }
                }
            }
            function ge(a, b, c) {
                var d = he(a, b);
                return function(e) {
                    return yc(c, e, !0).then(function() {
                        var f = e.ta || {}
                          , g = f.Xa
                          , h = void 0 === g ? "" : g;
                        g = f.aa;
                        var k = void 0 === g ? "" : g;
                        f = f.Za;
                        f = r(function(l) {
                            return "https://" + ("" + h + l || zc) + "/" + k
                        }, void 0 === f ? [zc] : f);
                        return d(e, f)
                    }).then(function(f) {
                        var g = f.Oa;
                        f = f.Ra;
                        e.eb = g;
                        e.fb = f;
                        return yc(c, e).then(u(g, C))
                    })
                }
            }
            function he(a, b) {
                return function(c, d) {
                    return Ac(a, b, d, c)
                }
            }
            function Ac(a, b, c, d, e, f) {
                var g;
                void 0 === e && (e = 0);
                void 0 === f && (f = 0);
                var h = v({
                    R: []
                }, d.N)
                  , k = b[f]
                  , l = k[0];
                k = k[1];
                var n = c[e];
                h.U && h.U["Content-Type"] || !h.I || (h.U = v({}, h.U, (g = {},
                g["Content-Type"] = "application/x-www-form-urlencoded",
                g)),
                h.I = "site-info=" + Bc(h.I));
                h.Ua = h.I ? "POST" : "GET";
                h.$ = ie(a, d, l);
                h.aa = (d.ta || {}).aa;
                h.R.push(l);
                v(d.N, h);
                return k("" + n + (d.T && d.T.Fa ? "/1" : ""), h).then(function(B) {
                    return {
                        Oa: B,
                        Ra: e
                    }
                })["catch"](function(B) {
                    var I = f + 1 >= b.length
                      , T = e + 1 >= c.length;
                    I && T && ca(B);
                    return Ac(a, b, c, d, !T && I ? e + 1 : e, I ? 0 : f + 1)
                })
            }
            function ie(a, b) {
                var c = v({}, b.o)
                  , d = X(a);
                b.m && (c["browser-info"] = Qa(b.m.P()).l("st", d(eb)).Pa());
                return c
            }
            function Wb(a) {
                return a ? q(ba, je(function(b, c) {
                    var d = c[0]
                      , e = c[1];
                    G(e) || L(e) || b.push(d + "=" + Bc(e));
                    return b
                }, []), ke("&"))(a) : ""
            }
            function Bc(a) {
                try {
                    return encodeURIComponent(a)
                } catch (b) {}
                a = J("", ra(function(b) {
                    return 55296 >= b.charCodeAt(0)
                }, a.split("")));
                return encodeURIComponent(a)
            }
            function yc(a, b, c) {
                void 0 === c && (c = !1);
                return new y(function(d, e) {
                    function f(k, l) {
                        l();
                        d()
                    }
                    var g = a.slice();
                    g.push({
                        G: f,
                        V: f
                    });
                    var h = Cc(g, function(k, l) {
                        var n = c ? k.G : k.V;
                        if (n)
                            try {
                                n(b, l)
                            } catch (B) {
                                h(le),
                                e(B)
                            }
                        else
                            l()
                    });
                    h(Dc)
                }
                )
            }
            function Ja(a, b, c) {
                var d = c || "as";
                if (a.postMessage && !a.attachEvent) {
                    c = Pa(a);
                    var e = "__ym__promise_" + ea(a) + "_" + ea(a)
                      , f = O;
                    d = N(a, d, function(g) {
                        try {
                            var h = g.data
                        } catch (k) {
                            return
                        }
                        h === e && (f(),
                        g.stopPropagation && g.stopPropagation(),
                        b())
                    });
                    f = c.A(a, ["message"], d);
                    a.postMessage(e, "*")
                } else
                    la(a, b, 0, d)
            }
            function vd(a, b, c, d, e) {
                void 0 === d && (d = 1);
                void 0 === e && (e = "itc");
                b = Cc(b, c);
                me(a, b, d)(fc(N(a, e), O))
            }
            function me(a, b, c, d) {
                void 0 === c && (c = 1);
                void 0 === d && (d = ne);
                hb = Infinity === c;
                return Y(function(e, f) {
                    function g() {
                        try {
                            var k = b(d(a, c));
                            h = h.concat(k)
                        } catch (l) {
                            return e(l)
                        }
                        b(oe);
                        if (b(Ra))
                            return f(h),
                            Ec(a);
                        hb ? (b(d(a, 1E4)),
                        f(h),
                        Ec(a)) : la(a, g, 100)
                    }
                    var h = [];
                    pe(g)
                })
            }
            function Ec(a) {
                if (ib.length) {
                    var b = ib.shift();
                    hb ? b() : la(a, b, 100)
                } else
                    jb = !1
            }
            function pe(a) {
                jb ? ib.push(a) : (jb = !0,
                a())
            }
            function fc(a, b) {
                return function(c) {
                    return c(a, b)
                }
            }
            function Cc(a, b) {
                void 0 === b && (b = C);
                return Y({
                    S: a,
                    ja: b,
                    ba: !1,
                    C: 0
                })
            }
            function Dc(a) {
                function b() {
                    function d() {
                        c = !0;
                        a.C += 1
                    }
                    c = !1;
                    a.ja(a.S[a.C], function() {
                        d()
                    });
                    c || (a.C += 1,
                    d = u(a, Dc))
                }
                for (var c = !0; !Ra(a) && c; )
                    b()
            }
            function ne(a, b) {
                return function(c) {
                    var d = X(a)
                      , e = d(ia);
                    return qe(function(f, g) {
                        d(ia) - e >= b && g(re)
                    })(c)
                }
            }
            function se(a) {
                Ra(a) && ca(pa("i"));
                var b = a.ja(a.S[a.C]);
                a.C += 1;
                return b
            }
            function oe(a) {
                a.ba = !1
            }
            function re(a) {
                a.ba = !0
            }
            function le(a) {
                a.C = a.S.length
            }
            function Ra(a) {
                return a.ba || a.S.length <= a.C
            }
            function eb(a) {
                return Math.round(ia(a) / 1E3)
            }
            function ia(a) {
                var b = a.da;
                return 0 !== b ? b : kb(a.P, a.Z)
            }
            function Rb(a) {
                var b = Pa(a)
                  , c = Fc(a)
                  , d = {
                    P: a,
                    da: 0,
                    Z: c,
                    $a: kb(a, c)
                }
                  , e = c[1];
                c[0] && e || b.A(a, ["beforeunload", "unload"], function() {
                    0 === d.da && (d.da = kb(a, d.Z))
                });
                return Y(d)
            }
            function te(a) {
                return (10 > a ? "0" : "") + a
            }
            function la(a, b, c, d) {
                return Na(a, N(a, "d.err." + (d || "def"), b), c)
            }
            function ue(a) {
                var b = {};
                return {
                    A: function(c, d) {
                        r(function(e) {
                            m(b, e) || (b[e] = Lb(a));
                            b[e].A(d)
                        }, c);
                        return this
                    },
                    ma: function(c, d) {
                        r(function(e) {
                            m(b, e) && b[e].ma(d)
                        }, c);
                        return this
                    },
                    D: function(c, d) {
                        return m(b, c) ? N(a, "e." + d, b[c].D)(d) : []
                    }
                }
            }
            function Lb(a) {
                var b = []
                  , c = {};
                c.bb = b;
                c.A = q(aa("push", b), u(c, C));
                c.ma = q(fa(lb(a))(b), fa(aa("splice", b))(1), u(c, C));
                c.D = q(C, fa(V), ve(b));
                return c
            }
            function Gc(a, b, c, d, e) {
                var f = a.addEventListener && a.removeEventListener
                  , g = !f && a.attachEvent && a.detachEvent;
                if (f || g)
                    if (e = e ? f ? "removeEventListener" : "detachEvent" : f ? "addEventListener" : "attachEvent",
                    f)
                        a[e](b, c, d);
                    else
                        a[e]("on" + b, c)
            }
            function K(a, b, c) {
                return function() {
                    return N(arguments[0], a, b, c).apply(this, arguments)
                }
            }
            function N(a, b, c, d, e) {
                var f = c || ca;
                return function() {
                    var g = d;
                    try {
                        g = f.apply(e || null, arguments)
                    } catch (h) {
                        Mb(a, b, h)
                    }
                    return g
                }
            }
            function kb(a, b) {
                var c = b || Fc(a)
                  , d = c[0];
                c = c[1];
                return !isNaN(d) && A(c) ? Math.round(c() + d) : a.Date.now ? a.Date.now() : (new a.Date).getTime()
            }
            function Fc(a) {
                a = m(a, "performance") || m(a, "webkitPerformance");
                var b = m(a, "timing.navigationStart")
                  , c = m(a, "now");
                c && (c = Q(c, a));
                return [b, c]
            }
            function Mb(a, b, c) {
                var d = "u.a.e"
                  , e = "";
                c && ("object" === typeof c ? (c.unk && ca(c),
                d = c.message,
                e = "string" === typeof c.stack && c.stack.replace(/\n/g, "\\n") || "n.s.e.s") : d = "" + c);
                we(d) || xe(q(aa("indexOf", d), U(-1), Hc), ye) || ze(d) && .1 <= a.Math.random() || r(q(C, wa(["jserrs", d, b, e]), V), Ae)
            }
            function Hb() {
                var a = F(arguments);
                return ca(ta(a))
            }
            function ta(a) {
                var b = "";
                oa(a) ? b = J(".", a) : "string" === typeof a && (b = a);
                return pa("err.kn(25)" + b)
            }
            function Be(a) {
                this.message = a
            }
            function pd(a, b, c, d, e) {
                var f = "object" === typeof a ? a : {
                    id: a,
                    K: d,
                    Va: e,
                    H: c
                };
                return E(function(g, h) {
                    var k = h[1]
                      , l = k.Ga;
                    k = f[k.Ka];
                    g[h[0]] = l ? l(k) : k;
                    return g
                }, {}, ba(b))
            }
            function wc(a) {
                return Oa("prerender", r(u(m(a, "document"), m), ["webkitVisibilityState", "visibilityState"]))
            }
            function ea(a, b, c) {
                var d = G(c);
                G(b) && d ? (d = 1,
                b = 1073741824) : d ? d = 1 : (d = b,
                b = c);
                return a.Math.floor(a.Math.random() * (b - d)) + d
            }
            function Ce() {
                var a = F(arguments)
                  , b = a[0];
                for (a = a.slice(1); a.length; ) {
                    var c = a.shift(), d;
                    for (d in c)
                        mb(c, d) && (b[d] = c[d]);
                    mb(c, "toString") && (b.toString = c.toString)
                }
                return b
            }
            function De(a) {
                return G(a) ? [] : Sa(function(b, c) {
                    b.push([c, a[c]]);
                    return b
                }, [], Ic(a))
            }
            function Ic(a) {
                var b = [], c;
                for (c in a)
                    mb(a, c) && b.push(c);
                return b
            }
            function Jc(a, b) {
                r(q(C, aa("push", a)), b);
                return a
            }
            function Ee(a) {
                return a ? oa(a) ? a : Ta ? Ta(a) : "number" === typeof a.length && 0 <= a.length ? Kc(a) : [] : []
            }
            function nb(a, b, c) {
                return c ? a : b
            }
            function Fe(a, b) {
                return Sa(function(c, d, e) {
                    c.push(a(d, e));
                    return c
                }, [], b)
            }
            function Ge(a, b) {
                if (!Lc(a))
                    return !0;
                try {
                    b.call({
                        0: !0,
                        length: -Math.pow(2, 32) + 1
                    }, function() {
                        throw 1;
                    })
                } catch (c) {
                    return !1
                }
                return !0
            }
            function oa(a) {
                if (Aa)
                    return Aa(a);
                (Aa = H(Array.isArray, "isArray")) || (Aa = He);
                return Aa(a)
            }
            function Ie(a, b) {
                for (var c = "", d = 0; d < b.length; d += 1)
                    c += "" + (d ? a : "") + b[d];
                return c
            }
            function Je(a, b) {
                return 1 <= Mc(U(a), b).length
            }
            function Ke(a, b) {
                for (var c = 0; c < b.length; c += 1)
                    if (a.call(b, b[c], c))
                        return b[c]
            }
            function Mc(a, b) {
                return Sa(function(c, d, e) {
                    a(d, e) && c.push(d);
                    return c
                }, [], b)
            }
            function Ya(a, b, c) {
                try {
                    if (A(b)) {
                        var d = F(arguments).slice(3);
                        L(c) ? b.apply(void 0, d) : Q.apply(void 0, W([b, c], d))()
                    }
                } catch (e) {
                    Na(a, u(e, ca), 0)
                }
            }
            function ca(a) {
                throw a;
            }
            function Na(a, b, c) {
                return Z("setTimeout", a)(b, c)
            }
            function Tb(a, b) {
                return Z("clearTimeout", a)(b)
            }
            function Ba() {
                return {}
            }
            function Z(a, b) {
                var c = m(b, a)
                  , d = m(b, "constructor.prototype." + a) || c;
                try {
                    if (d && d.apply)
                        return function() {
                            return d.apply(b, arguments)
                        }
                } catch (e) {
                    return c
                }
                return d
            }
            function Nc(a, b, c) {
                return function() {
                    var d = F(arguments)
                      , e = d[0];
                    d = d.slice(1);
                    var f = P(e)
                      , g = c ? "global" : "m25"
                      , h = f.g(g, {})
                      , k = m(h, a);
                    k || (k = p(b),
                    h[a] = k,
                    f.l(g, h));
                    return k.apply(void 0, W([e], d))
                }
            }
            function Bd(a, b) {
                void 0 === b && (b = {});
                if (!a || 1 > a.length)
                    return b;
                E(function(c, d, e) {
                    if (e === a.length - 1)
                        return c;
                    e === a.length - 2 ? c[d] = a[e + 1] : c[d] || (c[d] = {});
                    return c[d]
                }, b, a);
                return b
            }
            function mb(a, b) {
                return L(a) ? !1 : ob.call(a, b)
            }
            function p(a, b) {
                var c = []
                  , d = [];
                var e = b ? b : C;
                return function() {
                    var f = F(arguments)
                      , g = e.apply(void 0, f)
                      , h = Le(g, d);
                    if (-1 !== h)
                        return c[h];
                    f = a.apply(void 0, f);
                    c.push(f);
                    d.push(g);
                    return f
                }
            }
            function lb(a) {
                if (pb)
                    return pb;
                var b = !1;
                try {
                    b = [].indexOf && 0 === [void 0].indexOf(void 0)
                } catch (d) {}
                var c = a.Array && a.Array.prototype && H(a.Array.prototype.indexOf, "indexOf");
                return pb = a = b && c ? function(d, e) {
                    return c.call(e, d)
                }
                : Me
            }
            function Me(a, b) {
                for (var c = 0; c < b.length; c += 1)
                    if (b[c] === a)
                        return c;
                return -1
            }
            function V(a, b) {
                return b ? a(b) : a()
            }
            function q() {
                var a = F(arguments)
                  , b = a.shift();
                return function() {
                    var c = b.apply(void 0, arguments);
                    return E(Oc, c, a)
                }
            }
            function je(a, b) {
                return x([a, b], E)
            }
            function Sa(a, b, c) {
                for (var d = 0, e = c.length; d < e; )
                    b = a(b, c[d], d),
                    d += 1;
                return b
            }
            function aa(a, b) {
                return Q(b[a], b)
            }
            function u(a, b) {
                return Q(b, null, a)
            }
            function x(a, b) {
                return Q.apply(void 0, W([b, null], a))
            }
            function Ne() {
                var a = F(arguments)
                  , b = a[0]
                  , c = a[1]
                  , d = a.slice(2);
                return function() {
                    var e = W(d, F(arguments));
                    if (Function.prototype.call)
                        return Function.prototype.call.apply(b, W([c], e));
                    if (c) {
                        for (var f = "_b"; c[f]; )
                            f += "_" + f.length;
                        c[f] = b;
                        e = c[f] && Pc(f, e, c);
                        delete c[f];
                        return e
                    }
                    return Pc(b, e)
                }
            }
            function Pc(a, b, c) {
                void 0 === b && (b = []);
                c = c || {};
                var d = b.length
                  , e = a;
                A(e) && (e = "d",
                c[e] = a);
                var f;
                d ? 1 === d ? f = c[e](b[0]) : 2 === d ? f = c[e](b[0], b[1]) : 3 === d ? f = c[e](b[0], b[1], b[2]) : 4 === d && (f = c[e](b[0], b[1], b[2], b[3])) : f = c[e]();
                return f
            }
            function F(a) {
                if (Ta)
                    try {
                        return Ta(a)
                    } catch (b) {}
                return Kc(a)
            }
            function Kc(a) {
                for (var b = a.length, c = [], d = 0; d < b; d += 1)
                    c.push(a[d]);
                return c
            }
            function Xa(a) {
                return !za(a) && !G(a) && "[object Object]" === Qc(a)
            }
            function L(a) {
                return G(a) || za(a)
            }
            function A(a) {
                return "function" === typeof a
            }
            function fa(a) {
                return function(b) {
                    return function(c) {
                        return a(c, b)
                    }
                }
            }
            function M(a) {
                return function(b) {
                    return function(c) {
                        return a(b, c)
                    }
                }
            }
            function Oc(a, b) {
                return b(a)
            }
            function Qc(a) {
                return Object.prototype.toString.call(a)
            }
            function H(a, b) {
                return ma(b, a) && a
            }
            function ma(a, b) {
                if (!b || "function" !== typeof b)
                    return !1;
                try {
                    var c = "" + b
                } catch (h) {
                    return !1
                }
                var d = c.length;
                if (d > 35 + a.length)
                    return !1;
                for (var e = d - 13, f = 0, g = 8; g < d; g += 1) {
                    f = "[native code]"[f] === c[g] || 7 === f && "-" === c[g] ? f + 1 : 0;
                    if (12 === f)
                        return !0;
                    if (!f && g > e)
                        break
                }
                return !1
            }
            function O() {}
            function Hc(a) {
                return !a
            }
            function Ca(a, b) {
                return b
            }
            function C(a) {
                return a
            }
            function W() {
                for (var a = 0, b = 0, c = arguments.length; b < c; b++)
                    a += arguments[b].length;
                a = Array(a);
                var d = 0;
                for (b = 0; b < c; b++)
                    for (var e = arguments[b], f = 0, g = e.length; f < g; f++,
                    d++)
                        a[d] = e[f];
                return a
            }
            function m(a, b) {
                return a ? E(function(c, d) {
                    if (L(c))
                        return c;
                    try {
                        return c[d]
                    } catch (e) {}
                    return null
                }, a, b.split(".")) : null
            }
            function Oe() {}
            function Pe(a, b) {
                return function() {
                    a.apply(b, arguments)
                }
            }
            function w(a) {
                if (!(this instanceof w))
                    throw new TypeError("Promises must be constructed via new");
                if ("function" !== typeof a)
                    throw new TypeError("not a function");
                this.F = 0;
                this.ea = !1;
                this.J = void 0;
                this.O = [];
                Rc(a, this)
            }
            function Sc(a, b) {
                for (; 3 === a.F; )
                    a = a.J;
                0 === a.F ? a.O.push(b) : (a.ea = !0,
                w.fa(function() {
                    var c = 1 === a.F ? b.Ia : b.Ja;
                    if (null === c)
                        (1 === a.F ? qb : Da)(b.promise, a.J);
                    else {
                        try {
                            var d = c(a.J)
                        } catch (e) {
                            Da(b.promise, e);
                            return
                        }
                        qb(b.promise, d)
                    }
                }))
            }
            function qb(a, b) {
                try {
                    if (b === a)
                        throw new TypeError("A promise cannot be resolved with itself.");
                    if (b && ("object" === typeof b || "function" === typeof b)) {
                        var c = b.then;
                        if (b instanceof w) {
                            a.F = 3;
                            a.J = b;
                            rb(a);
                            return
                        }
                        if ("function" === typeof c) {
                            Rc(Pe(c, b), a);
                            return
                        }
                    }
                    a.F = 1;
                    a.J = b;
                    rb(a)
                } catch (d) {
                    Da(a, d)
                }
            }
            function Da(a, b) {
                a.F = 2;
                a.J = b;
                rb(a)
            }
            function rb(a) {
                2 === a.F && 0 === a.O.length && w.fa(function() {
                    a.ea || w.wa(a.J)
                });
                for (var b = 0, c = a.O.length; b < c; b++)
                    Sc(a, a.O[b]);
                a.O = null
            }
            function Qe(a, b, c) {
                this.Ia = "function" === typeof a ? a : null;
                this.Ja = "function" === typeof b ? b : null;
                this.promise = c
            }
            function Rc(a, b) {
                var c = !1;
                try {
                    a(function(d) {
                        c || (c = !0,
                        qb(b, d))
                    }, function(d) {
                        c || (c = !0,
                        Da(b, d))
                    })
                } catch (d) {
                    c || (c = !0,
                    Da(b, d))
                }
            }
            function ab(a, b) {
                if (!b)
                    return null;
                try {
                    return a.JSON.parse(b)
                } catch (c) {
                    return null
                }
            }
            function Tc(a, b, c, d, e) {
                void 0 === e && (e = !1);
                return fb(a, b, "", -100, c, d, e)
            }
            function Gb(a, b, c, d) {
                return function() {
                    if (Ka(a, b)) {
                        var e = F(arguments);
                        return d.apply(void 0, e)
                    }
                }
            }
            function Jb(a, b, c, d) {
                return function() {
                    var e = F(arguments);
                    e = d.apply(void 0, e);
                    return G(e) ? Ka(a, b) : e
                }
            }
            function Ib(a, b, c, d) {
                return N(a, "cm." + c, d)
            }
            function od(a, b, c, d, e) {
                return c.length && e ? x(E(function(f, g, h) {
                    return c[h] ? f.concat(x([a, b, d], g)) : f
                }, [], c), q)()(e) : e
            }
            var Ea = {
                construct: "Metrika",
                callbackPostfix: "",
                version: "public",
                host: "mc.yandex.ru"
            }, U = M(function(a, b) {
                return a === b
            }), Y = M(Oc), za = U(null), G = U(void 0), Ta = H(Array.from, "from"), Uc = H(Function.prototype.bind, "bind"), Q = Uc ? function() {
                var a = F(arguments);
                return Uc.apply(a[0], W([a[1]], a.slice(2)))
            }
            : Ne, wa = M(x), Vc = H(Array.prototype.reduce, "reduce"), E = Vc ? function(a, b, c) {
                return Vc.call(c, a, b)
            }
            : Sa, Xb = q, pb, Le = lb(window), ob = Object.prototype.hasOwnProperty, P = p(function(a) {
                a = a.Ya = a.Ya || {};
                var b = a._metrika = a._metrika || {};
                return {
                    na: function(c, d) {
                        ob.call(b, c) || (b[c] = d);
                        return this
                    },
                    l: function(c, d) {
                        b[c] = d;
                        return this
                    },
                    g: function(c, d) {
                        var e = b[c];
                        return ob.call(b, c) || G(d) ? e : d
                    }
                }
            }), R = fa(m), Wc = H(Array.prototype.filter, "filter"), ra = Wc ? function(a, b) {
                return Wc.call(b, a)
            }
            : Mc, ha = u(Boolean, ra), Re = ma("find", Array.prototype.find) ? function(a, b) {
                return Array.prototype.find.call(b, a)
            }
            : Ke, Oa = Array.prototype.includes ? function(a, b) {
                return Array.prototype.includes.call(b, a)
            }
            : Je, Se = fa(Oa), Xc = H(Array.prototype.join, "join"), J = Xc ? function(a, b) {
                return Xc.call(b, a)
            }
            : Ie, ke = M(J), Te = p(function(a) {
                a = m(a, "navigator") || {};
                var b = m(a, "userAgent") || "";
                return {
                    Da: -1 < (m(a, "vendor") || "").indexOf("Apple"),
                    Sa: b
                }
            }), Ua = p(R("navigator.userAgent")), sb = /Firefox\/([0-9]+)/i, Lc = p(function(a) {
                var b = m(a, "document.documentElement.style")
                  , c = m(a, "InstallTrigger");
                a = -1 !== (m(a, "navigator.userAgent") || "").toLowerCase().search(sb);
                sb.lastIndex = 0;
                return !(!(b && "MozAppearance"in b) || L(c)) || a
            }), Aa, He = q(Qc, U("[object Array]")), Yc = H(Array.prototype.map, "map"), r = Yc && Ge(window, Array.prototype.map) ? function(a, b) {
                return b && 0 < b.length ? Yc.call(b, a) : []
            }
            : Fe, Yb = M(r), ve = fa(r), xe = nb(function(a, b) {
                return Array.prototype.some.call(b, a)
            }, function(a, b) {
                for (var c = 0; c < b.length; c += 1)
                    if (c in b && a.call(b, b[c], c))
                        return !0;
                return !1
            }, ma("some", Array.prototype.some)), Pb = p(lb), La = R("0"), da = fa(parseInt)(10), ba = Object.entries ? function(a) {
                return a ? Object.entries(a) : []
            }
            : De, na = Object.keys ? Object.keys : Ic, v = Object.assign || Ce, Ue = M(function(a, b) {
                return v({}, a, b)
            }), Ve = p(q(Ua, aa("test", /ipad|iphone|ipod/i))), Vb = p(function(a) {
                a = Te(a);
                var b = a.Sa;
                return a.Da && !b.match("CriOS")
            }), We = "other none unknown wifi ethernet bluetooth cellular wimax mixed".split(" "), Xe = p(function(a) {
                var b = m(a, "navigator.connection.type");
                if (G(b))
                    return null;
                a = Pb(a)(b, We);
                return -1 === a ? b : "" + a
            }), qc = p(q(R("document.addEventListener"), Hc)), Ye = p(function(a) {
                var b = m(a, "navigator") || {};
                return E(function(c, d) {
                    return c || m(b, d)
                }, "", ["language", "userLanguage", "browserLanguage", "systemLanguage"])
            }), ka = p(function(a) {
                var b = !1;
                try {
                    b = a.top !== a
                } catch (c) {}
                return b
            }), Ze = p(function(a) {
                var b = !1;
                try {
                    b = a.top.contentWindow
                } catch (c) {}
                return b
            }), $e = p(function(a) {
                var b = !1;
                try {
                    b = a.navigator.javaEnabled()
                } catch (c) {}
                return b
            }), af = p(function(a) {
                var b = Ua(a) || ""
                  , c = b.match(/Mac OS X ([0-9]+)_([0-9]+)/);
                c = c ? [+c[1], +c[2]] : [0, 0];
                b = b.match(/iPhone OS ([1-9]+)_([0-9]+)/);
                return 14 <= (b ? +b[1] : 0) ? !0 : (Ve(a) || 10 < c[0] || 10 === c[0] && 13 <= c[1]) && Vb(a)
            }), bf = /Edg\/(\d+)\./, cb = p(function(a) {
                var b;
                if (!(b = af(a)))
                    a: {
                        if (Lc(a) && (b = Ua(a).match(sb)) && b.length) {
                            b = 68 <= +b[1];
                            break a
                        }
                        b = !1
                    }
                if (!b)
                    a: {
                        if ((a = Ua(a)) && (a = a.match(bf)) && 1 < a.length) {
                            b = 79 <= da(a[1]);
                            break a
                        }
                        b = !1
                    }
                return b
            }), tb = Ea.construct, zc = Ea.host, ub = qc(window), cf = ub ? 512 : 2048, Dd = ub ? 512 : 2048, df = ub ? 100 : 400, ef = [], D = p(function(a) {
                return a.id + ":" + a.K
            }), yd = U("1"), ff = setTimeout;
            w.prototype["catch"] = function(a) {
                return this.then(null, a)
            }
            ;
            w.prototype.then = function(a, b) {
                var c = new this.constructor(Oe);
                Sc(this, new Qe(a,b,c));
                return c
            }
            ;
            w.prototype["finally"] = function(a) {
                var b = this.constructor;
                return this.then(function(c) {
                    return b.resolve(a()).then(function() {
                        return c
                    })
                }, function(c) {
                    return b.resolve(a()).then(function() {
                        return b.reject(c)
                    })
                })
            }
            ;
            w.all = function(a) {
                return new w(function(b, c) {
                    function d(h, k) {
                        try {
                            if (k && ("object" === typeof k || "function" === typeof k)) {
                                var l = k.then;
                                if ("function" === typeof l) {
                                    l.call(k, function(n) {
                                        d(h, n)
                                    }, c);
                                    return
                                }
                            }
                            e[h] = k;
                            0 === --f && b(e)
                        } catch (n) {
                            c(n)
                        }
                    }
                    if (!a || "undefined" === typeof a.length)
                        return c(new TypeError("Promise.all accepts an array"));
                    var e = Array.prototype.slice.call(a);
                    if (0 === e.length)
                        return b([]);
                    for (var f = e.length, g = 0; g < e.length; g++)
                        d(g, e[g])
                }
                )
            }
            ;
            w.resolve = function(a) {
                return a && "object" === typeof a && a.constructor === w ? a : new w(function(b) {
                    b(a)
                }
                )
            }
            ;
            w.reject = function(a) {
                return new w(function(b, c) {
                    c(a)
                }
                )
            }
            ;
            w.race = function(a) {
                return new w(function(b, c) {
                    if (!a || "undefined" === typeof a.length)
                        return c(new TypeError("Promise.race accepts an array"));
                    for (var d = 0, e = a.length; d < e; d++)
                        w.resolve(a[d]).then(b, c)
                }
                )
            }
            ;
            w.fa = "function" === typeof setImmediate && function(a) {
                setImmediate(a)
            }
            || function(a) {
                ff(a, 0)
            }
            ;
            w.wa = function(a) {
                "undefined" !== typeof console && console && console.warn("Possible Unhandled Promise Rejection:", a)
            }
            ;
            var y = window.Promise
              , gf = H(y, "Promise")
              , Zc = H(m(y, "resolve"), "resolve")
              , $c = H(m(y, "reject"), "reject")
              , ad = H(m(y, "all"), "all");
            if (Oa(!1, [gf, Zc, $c, ad]))
                y = w;
            else {
                var Va = function(a) {
                    return new Promise(a)
                };
                Va.resolve = Q(Zc, y);
                Va.reject = Q($c, y);
                Va.all = Q(ad, y);
                y = Va
            }
            var rd = []
              , qa = []
              , sd = []
              , Kb = []
              , bd = []
              , cd = []
              , hf = Se([26812653])
              , jf = p(q(R("id"), hf), D)
              , vb = {
                id: "id",
                ua: "ut",
                K: "type",
                X: "ldc",
                Y: "nck",
                Ba: "url",
                Aa: "referrer"
            }
              , kf = /^\d+$/
              , wb = {
                id: function(a) {
                    a = "" + (a || "0");
                    kf.test(a) || (a = "0");
                    try {
                        var b = da(a)
                    } catch (c) {
                        b = 0
                    }
                    return b
                },
                K: function(a) {
                    return "" + (a || 0 === a ? a : "0")
                },
                Y: Boolean,
                ua: Boolean
            };
            vb.H = "params";
            wb.H = function(a) {
                return Xa(a) || oa(a) ? a : null
            }
            ;
            vb.ra = "triggerEvent";
            wb.ra = Boolean;
            var qd = E(function(a, b) {
                var c = b[0];
                a[c] = {
                    Ka: b[1],
                    Ga: wb[c]
                };
                return a
            }, {}, ba(vb)), ye = ["http.0.st..rt.", "network error occurred", "send beacon", "Content Security Policy", "DOM Exception 18"], Fa, pa = function(a) {
                return function(b, c) {
                    void 0 === c && (c = !1);
                    if (Fa)
                        var d = new Fa(b);
                    else
                        ma("Error", a.Error) ? (Fa = a.Error,
                        d = new a.Error(b)) : (Fa = Be,
                        d = new Fa(b));
                    c && (d.unk = !0);
                    return d
                }
            }(window), ze = aa("test", /^http./), we = aa("test", /^err.kn/), Ae = [], lf = p(function(a) {
                var b = !1;
                if (!a.addEventListener)
                    return b;
                try {
                    var c = Object.defineProperty({}, "passive", {
                        get: function() {
                            b = !0;
                            return 1
                        }
                    });
                    a.addEventListener("test", O, c)
                } catch (d) {}
                return b
            }), mf = M(function(a, b) {
                return a ? v({
                    capture: !0,
                    passive: !0
                }, b || {}) : !!b
            }), Pa = p(function(a) {
                a = lf(a);
                var b = mf(a)
                  , c = {};
                return v(c, {
                    A: function(d, e, f, g) {
                        r(function(h) {
                            var k = b(g);
                            Gc(d, h, f, k, !1)
                        }, e);
                        return Q(c.sa, c, d, e, f, g)
                    },
                    sa: function(d, e, f, g) {
                        r(function(h) {
                            var k = b(g);
                            Gc(d, h, f, k, !0)
                        }, e)
                    }
                })
            }), X = p(Rb), qe = M(function(a, b) {
                for (var c = []; !Ra(b); ) {
                    var d = se(b);
                    a(d, function(e) {
                        return e(b)
                    });
                    c.push(d)
                }
                return c
            }), ib = [], jb = !1, hb = !1, Qa = M(function(a, b) {
                var c = b || {};
                return {
                    P: u(c, C),
                    g: function(d, e) {
                        var f = c[d];
                        return G(f) && !G(e) ? e : f
                    },
                    l: function(d, e) {
                        c[d] = e;
                        return this
                    },
                    Qa: function(d, e) {
                        return "" === e || L(e) ? this : this.l(d, e)
                    },
                    Pa: u(c, a)
                }
            })(function(a) {
                var b = "";
                a = E(function(c, d) {
                    var e = d[0]
                      , f = "" + e + ":" + d[1];
                    "t" === e ? b = f : c.push(f);
                    return c
                }, [], ba(a));
                b && a.push(b);
                return J(":", a)
            }), xb, nf = (xb = {},
            xb.w = [[function(a, b) {
                return {
                    G: function(c, d) {
                        var e, f = c.o;
                        f = (e = {},
                        e["page-url"] = f && f["page-url"] || "",
                        e.charset = "utf-8",
                        e);
                        "0" !== b.K && (f["cnt-class"] = b.K);
                        c.m || (c.m = Qa());
                        e = c.m;
                        var g = c.N;
                        f = {
                            ta: {
                                aa: "watch/" + b.id
                            },
                            N: v(void 0 === g ? {} : g, {
                                va: !(!e.g("pv") || e.g("ar") || e.g("wh"))
                            }),
                            o: v(c.o || {}, f)
                        };
                        v(c, f);
                        d()
                    }
                }
            }
            , 1]],
            xb), yb = function(a) {
                return function(b, c, d) {
                    return function(e, f) {
                        var g = r(q(La, wa([b, f]), V), nf[a] || []);
                        g = Jc(g, d);
                        return ge(b, c, g)(e)
                    }
                }
            }("w"), xc = ["webkitvisibilitychange", "visibilitychange"], of = {}, zb = x([1, null], nb), pf = x([1, 0], nb), fe = p(function(a) {
                tc(a, "_ymBRC", "1");
                var b = "1" !== sc(a, "_ymBRC");
                b || uc(a, "_ymBRC");
                return b
            }), hc = p(rc), dd = p(rc, function(a, b, c) {
                return "" + b + c
            }), qf = p(function(a) {
                a = m(a, "document") || {};
                return ("" + (a.characterSet || a.charset || "")).toLowerCase()
            }), $a = p(q(R("document"), u("createElement", Z))), ac = /^\s+|\s+$/g, pc = H(String.prototype.trim, "trim"), de = "hash host hostname href pathname port protocol search".split(" "), rf = /(?:^|\.)(?:(ya\.ru)|(?:yandex)\.(\w+|com?\.\w+))$/, sf = p(function(a) {
                a = ja(a).hostname;
                var b = !1;
                a && (b = -1 !== a.search(rf));
                return b
            }), ed = /\/$/, tf = p(q(X, Y(function(a) {
                return -(new a.P.Date).getTimezoneOffset()
            }))), uf = q(X, Y(function(a) {
                a = new a.P.Date;
                return J("", r(te, [a.getFullYear(), a.getMonth() + 1, a.getDate(), a.getHours(), a.getMinutes(), a.getSeconds()]))
            })), vf = q(X, Y(eb)), wf = p(q(X, Y(function(a) {
                return a.Z[0]
            }))), xf = p(Ba), ce = ["metrika_enabled"], nc = [], kc = Nc("gsc", lc), be = /:\d+$/, yf = p(function(a) {
                var b = (ja(a).host || "").split(".");
                return 1 === b.length ? b[0] : E(function(c, d, e) {
                    e += 1;
                    2 <= e && !c && (e = J(".", b.slice(-e)),
                    fb(a, "metrika_enabled", "1", 0, e, void 0, !0),
                    (d = (d = lc(a)) && d.metrika_enabled) && Tc(a, "metrika_enabled", e, void 0, !0),
                    d && (c = e));
                    return c
                }, "", b)
            }), gc = p(function(a, b, c) {
                void 0 === b && (b = "_ym_");
                void 0 === c && (c = "");
                var d = yf(a)
                  , e = 1 === (d || "").split(".").length ? d : "." + d
                  , f = c ? "_" + c : "";
                return {
                    ga: function(g, h, k) {
                        Tc(a, "" + b + g + f, h || e, k);
                        return this
                    },
                    g: function(g) {
                        return jc(a, "" + b + g + f)
                    },
                    l: function(g, h, k, l, n) {
                        fb(a, "" + b + g + f, h, k, l || e, n);
                        return this
                    }
                }
            }), $d = Nc("r", function(a, b) {
                var c = ic(a, b)
                  , d = c[0];
                return !c[1] && d
            }), xa = p(function() {
                return {
                    M: {},
                    pending: {},
                    children: {}
                }
            }), Ab = R("postMessage"), zf = K("s.f", function(a, b, c, d, e) {
                b = b(d);
                var f = xa(a)
                  , g = J(":", [b.ka.W, b.ka.key]);
                if (Ab(c)) {
                    f.pending[g] = e;
                    try {
                        c.postMessage(b.qa, "*")
                    } catch (h) {
                        delete f.pending[g];
                        return
                    }
                    la(a, function() {
                        delete f.pending[g]
                    }, 5E3, "if.s")
                }
            }), Af = K("s.fh", function(a, b, c, d, e, f) {
                var g = null
                  , h = null
                  , k = xa(a)
                  , l = null;
                try {
                    g = ab(a, f.data),
                    h = g.__yminfo,
                    l = g.data
                } catch (n) {
                    return
                }
                if (!L(h) && h.substring && "__yminfo" === h.substring(0, 8) && !L(l) && (g = h.split(":"),
                4 === g.length))
                    if (h = b.id,
                    b = g[1],
                    a = g[2],
                    g = g[3],
                    !oa(l) && l.type && "0" === g && l.counterId) {
                        if (!l.toCounter || l.toCounter == h) {
                            k = null;
                            try {
                                k = f.source
                            } catch (n) {}
                            !za(k) && Ab(k) && (f = d.D(l.type, [f, l]),
                            e = r(q(C, Ue(e)), f.concat([{}])),
                            l = c([b, a, l.counterId], e),
                            k.postMessage(l.qa, "*"))
                        }
                    } else
                        g === "" + h && oa(l) && ra(function(n) {
                            return !(!n.hid || !n.counterId)
                        }, l).length === l.length && (c = k.pending[J(":", [b, a])]) && c.apply(null, [f].concat(l))
            }), db = p(function(a, b) {
                var c, d = Z("getElementsByTagName", m(a, "document")), e = xa(a), f = Ab(a), g = ue(a), h = Pa(a);
                if (!d || !f)
                    return null;
                d = d.call(a.document, "iframe");
                f = (c = {},
                c.counterId = b.id,
                c.hid = "" + oc(a),
                c);
                cb(a) && (f.duid = ya(a, b));
                Wd(a, g);
                Xd(a);
                c = Zd(a, f);
                var k = x([a, u([], c)], zf);
                r(function(l) {
                    var n = null;
                    try {
                        n = l.contentWindow
                    } catch (B) {}
                    n && k(n, {
                        type: "initToChild"
                    }, function(B, I) {
                        g.D("initToParent", [B, I])
                    })
                }, d);
                ka(a) && k(a.parent, {
                    type: "initToParent"
                }, function(l, n) {
                    g.D("parentConnect", [l, n])
                });
                h.A(a, ["message"], x([a, b, c, g, f], Af));
                return {
                    za: g,
                    M: e.M,
                    children: e.children,
                    hb: k
                }
            }, q(Ca, D)), Bf = p(function(a, b) {
                if (!cb(a) || !ka(a))
                    return ya(a, b);
                var c = db(a, b);
                return c && c.M[b.id] ? c.M[b.id].info.duid || ya(a, b) : ya(a, b)
            }, function(a, b) {
                return "{" + b.X + b.Y
            }), Cf = p(function(a) {
                a = P(a);
                var b = a.g("counterNum", 0) + 1;
                a.l("counterNum", b);
                return b
            }, q(Ca, D)), t, ec = (t = {},
            t.vf = u(Ea.version, C),
            t.nt = Xe,
            t.fp = function(a, b, c) {
                if (c.o && c.o.nohit)
                    return null;
                b = D(b);
                c = xf(a);
                if (c[b])
                    return null;
                a: {
                    var d = wf(a)
                      , e = m(a, "performance.getEntriesByType");
                    if (A(e)) {
                        if (a = ra(q(C, R("name"), U("first-contentful-paint")), e.call(a.performance, "paint")),
                        a.length) {
                            a = a[0].startTime;
                            break a
                        }
                    } else {
                        e = m(a, "chrome.loadTimes");
                        if (A(e) && (e = e.call(a.chrome),
                        e = m(e, "firstPaintTime"),
                        d && e)) {
                            a = 1E3 * e - d;
                            break a
                        }
                        if (a = m(a, "performance.timing.msFirstPaint")) {
                            a -= d;
                            break a
                        }
                    }
                    a = void 0
                }
                return a ? (c[b] = a,
                Math.round(a)) : null
            }
            ,
            t.fu = function(a, b, c) {
                var d = c.o;
                if (!d)
                    return null;
                b = (m(a, "document.referrer") || "").replace(ed, "");
                c = (d["page-ref"] || "").replace(ed, "");
                d = d["page-url"];
                a = ja(a).href !== d;
                b = b !== c;
                c = 0;
                a && b ? c = 3 : b ? c = 1 : a && (c = 2);
                return c
            }
            ,
            t.en = qf,
            t.la = Ye,
            t.ut = function(a, b, c) {
                var d = c.L;
                c = c.o;
                d = d && d.cb;
                c && (sf(a) || b.ua || d) && (c.ut = "noindex");
                return null
            }
            ,
            t.v = u("25", C),
            t.cn = Cf,
            t.dp = function(a) {
                var b = P(a)
                  , c = b.g("bt", {});
                if (G(b.g("bt"))) {
                    var d = m(a, "navigator.getBattery");
                    try {
                        c.p = d && d.call(a.navigator)
                    } catch (e) {}
                    b.l("bt", c);
                    c.p && c.p.then && c.p.then(N(a, "bi:dp.p", function(e) {
                        c.Ta = m(e, "charging") && 0 === m(e, "chargingTime")
                    }))
                }
                return pf(c.Ta)
            }
            ,
            t.ls = p(function(a, b) {
                var c = dd(a, b.id)
                  , d = X(a)
                  , e = c.g("lsid");
                return +e ? e : (d = ea(a, 0, d(ia)),
                c.l("lsid", d),
                d)
            }, Ca),
            t.hid = oc,
            t.phid = function(a, b) {
                if (!ka(a))
                    return null;
                var c = db(a, b);
                if (!c)
                    return null;
                var d = na(c.M);
                return d.length ? c.M[d[0]].info.hid : null
            }
            ,
            t.z = tf,
            t.i = uf,
            t.et = vf,
            t.c = q(R("navigator.cookieEnabled"), zb),
            t.rn = q(C, ea),
            t.rqn = function(a, b, c) {
                c = c.o;
                if (!c || c.nohit)
                    return null;
                b = D(b);
                a = dd(a, b);
                b = (a.g("reqNum", 0) || 0) + 1;
                a.l("reqNum", b);
                if (a.g("reqNum") === b)
                    return b;
                a.ga("reqNum");
                return null
            }
            ,
            t.u = Bf,
            t.w = function(a) {
                var b = m(a, "visualViewport.width");
                var c = m(a, "visualViewport.height")
                  , d = m(a, "visualViewport.scale");
                (b = L(b) || L(c) ? null : [Math.floor(b), Math.floor(c), d]) ? (c = b[2],
                a = [a.Math.round(b[0] * c), a.Math.round(b[1] * c)]) : (b = Ub(a),
                a = [m(b, "clientWidth") || a.innerWidth, m(b, "clientHeight") || a.innerHeight]);
                return a[0] + "x" + a[1]
            }
            ,
            t.s = function(a) {
                var b = m(a, "screen");
                if (b) {
                    a = m(b, "width");
                    var c = m(b, "height");
                    b = m(b, "colorDepth") || m(b, "pixelDepth");
                    return J("x", [a, c, b])
                }
                return null
            }
            ,
            t.sk = R("devicePixelRatio"),
            t.ifr = q(ka, zb),
            t.j = q($e, zb),
            t.sti = function(a) {
                return ka(a) ? Ze(a) ? "1" : null : null
            }
            ,
            t), Vd = p(function() {
                return Jc(na(ec), na(of))
            }), Ud = p(Ba, D), cc = p(function() {
                return {
                    ia: null,
                    B: []
                }
            }, D), Rd = /^[a-z][\w.+-]+:/i, Bb, bb = [[vc, 1], [bc, 2], [dc(), 3], [function(a) {
                return {
                    G: function(b, c) {
                        var d = b.m;
                        if (d) {
                            var e = a.document.title;
                            b.L && b.L.title && (e = b.L.title);
                            var f = Z("getElementsByTagName", a.document);
                            "string" !== typeof e && f && (e = f("title"),
                            e = (e = m(e, "0.innerHtml")) ? e : "");
                            e = e.slice(0, df);
                            d.l("t", e)
                        }
                        c()
                    }
                }
            }
            , 4]], Qd = [], fd = u(bb, function(a, b, c) {
                for (var d = [b, c], e = -1E4, f = 0; f < a.length; f += 1) {
                    var g = a[f]
                      , h = g[0];
                    g = g[1];
                    if (c === g && h === b)
                        return;
                    if (c < g && c >= e) {
                        a.splice(f, 0, d);
                        return
                    }
                    e = g
                }
                a.push(d)
            }), Zb = (Bb = {},
            Bb.h = bb,
            Bb);
            fd(function(a) {
                return {
                    G: function(b, c) {
                        var d = b.o;
                        if (!b.m || !d)
                            return c();
                        var e = d["page-ref"]
                          , f = d["page-url"];
                        e && f !== e ? d["page-ref"] = $b(a, e) : delete d["page-ref"];
                        d["page-url"] = $b(a, f).slice(0, cf);
                        return c()
                    }
                }
            }, -100);
            var Md = /[^a-z0-9.:-]/, Cb, Db = {}, Df = ha([0, 0, [va, 2], sa && [sa, 3], [ua, 4]]), gd = ha([0, 0, va, sa, ua]), hd = [va];
            hd.push(sa);
            var Ef = ha(hd);
            ha([ua]);
            ha([0, va]);
            ha([0, ua]);
            ha([0, va, sa, ua]);
            var id = (Cb = {},
            Cb.h = Ef,
            Cb), Ff = p(function(a, b) {
                var c = Db["*"] ? Db["*"] : b && Db[b];
                c || (c = b ? id[b] || [] : gd);
                c = E(function(d, e) {
                    var f = e(a);
                    if (f) {
                        var g = Re(q(La, U(e)), Df);
                        g && d.push([g[1], f])
                    }
                    return d
                }, [], c);
                c.length || Hb();
                return c
            }, Ca), Eb, Gf = Q(y.reject, y, ta()), jd = (Eb = {},
            Eb.h = yb,
            Eb), kd = K("g.sen", function(a, b, c) {
                var d = Ff(a, b);
                c = c ? Pd(a, b, c) : [];
                var e = jd[b]
                  , f = e ? e(a, d, c) : yb(a, d, c);
                return function() {
                    var g = F(arguments)
                      , h = g[0];
                    g = g.slice(1);
                    var k = h.N;
                    h = v(h, {
                        N: v(void 0 === k ? {} : k, {
                            R: [b]
                        })
                    });
                    return f.apply(void 0, W([h], g))
                }
            }, Gf), Gd = p(q(Ba, Y)), Ed = p(function() {
                return {
                    log: O,
                    warn: O,
                    error: O
                }
            }, Ca), Hf = K("p.dc", function(a, b) {
                var c = D(b);
                Qb(a, "");
                Qb(a, c)
            }), td = K("h.p", function(a, b) {
                var c, d, e = kd(a, "h", b), f = b.Ba || "" + ja(a).href, g = b.Aa || a.document.referrer;
                f = {
                    m: Qa((c = {},
                    c.pv = 1,
                    c)),
                    o: (d = {},
                    d["page-url"] = f,
                    d["page-ref"] = g,
                    d),
                    L: {}
                };
                f.L.H = b.H;
                return e(f, b).then(function(h) {
                    h && Ja(a, x([a, b, h], Fd))
                })["catch"](N(a, "h.g.s"))
            }), Fb = ["yandex_metrika_callback" + Ea.callbackPostfix, "yandex_metrika_callbacks" + Ea.callbackPostfix], If = K("cb.i", function(a) {
                var b = Fb[0]
                  , c = Fb[1];
                if (A(a[b]))
                    a[b]();
                "object" === typeof a[c] && r(function(d, e) {
                    a[c][e] = null;
                    Ya(a, d)
                }, a[c]);
                r(function(d) {
                    try {
                        delete a[d]
                    } catch (e) {
                        a[d] = void 0
                    }
                }, Fb)
            }), Ob = p(function() {
                return []
            }), Jf = p(Ba, D), Kf = K("pa.int", function(a, b) {
                var c;
                return c = {},
                c.params = function() {
                    var d, e, f = F(arguments), g = Ad(f);
                    if (!g)
                        return null;
                    f = g.ya;
                    var h = g.H;
                    g = g.xa;
                    if (!Xa(h) && !oa(h))
                        return null;
                    var k = kd(a, "1", b)
                      , l = Jf(b).url;
                    jf(b);
                    var n = h;
                    n.__ym && (n = v({}, h),
                    n.__ym = E(function(B, I) {
                        var T = m(h, "__ym." + I);
                        T && (B[I] = T);
                        return B
                    }, {}, ef),
                    na(n.__ym).length || delete n.__ym,
                    na(n));
                    n = JSON.stringify(n);
                    k = k({
                        L: {
                            H: h
                        },
                        m: Qa((d = {},
                        d.pa = 1,
                        d.ar = 1,
                        d)),
                        o: (e = {},
                        e["page-url"] = l || ja(a).href,
                        e)
                    }, b).then(O);
                    return Cd(a, "p.s", k, g, f)
                }
                ,
                c
            }), Lf = M(function(a, b) {
                b.Ha.A(a)
            }), Mf = K("guid.int", function(a, b) {
                var c;
                return c = {},
                c.getClientID = function(d) {
                    var e = ya(a, b);
                    d && Ya(a, d, null, e);
                    return e
                }
                ,
                c
            }), Nf = K("trigger.in", function(a, b) {
                b.ra && Ja(a, x([a, "yacounter" + b.id + "inited"], ee), "t.i")
            }), ld = {}, md = p(Ba), xd = q(aa("exec", /counterID=(\d+)/), R("1")), nd = M(function(a, b) {
                var c = md(a)
                  , d = Ee(b)
                  , e = d[0]
                  , f = d[1]
                  , g = d.slice(2);
                if (f) {
                    d = wd(a, e);
                    var h = d[0]
                      , k = d[1];
                    d = D(k);
                    c[d] || (c[d] = {});
                    c = c[d];
                    b.ha || ld[f] && E(function(l, n) {
                        return l || !!n(a, k, g, h)
                    }, !1, ld[f]) || ("init" === f ? (b.ha = !0,
                    h || (a["yaCounter" + k.id] = new a.Ya[tb](v({}, g[0], k)))) : h && h[f] && c.Ca ? (h[f].apply(h, g),
                    b.ha = !0) : (d = c.oa,
                    d || (d = [],
                    c.oa = d),
                    d.push(W([e, f], g))))
                }
            }), ud = K("destruct.e", function(a, b, c) {
                return function() {
                    var d = P(a)
                      , e = b.id;
                    r(function(f, g) {
                        return A(f) && N(a, "dest.fr." + g, f)()
                    }, c);
                    delete d.g("counters")[D(b)];
                    delete a["yaCounter" + e]
                }
            }), Ha = P(window);
            Ha.na("hitParam", {});
            jd["1"] = yb;
            qa.push(Kf);
            id["1"] = gd;
            fd(Nb, -1);
            Zb["1"] = [[Nb, -1], [vc, 1], [bc, 2], [dc(), 3]];
            qa.push(Mf);
            qa.push(Nf);
            (function() {
                var a = P(window);
                bd.push(function(b, c) {
                    c.counters = a.g("getCounters")
                })
            }
            )();
            Kb.push(Hf);
            qa.push(function(a, b) {
                var c = md(a)
                  , d = D(b)
                  , e = c[d];
                e || (e = {},
                c[d] = e);
                e.Ca = !0;
                if (c = e.oa)
                    d = nd(a),
                    r(d, c)
            });
            cd.push(function(a) {
                var b = m(a, "ym");
                if (b) {
                    var c = m(b, "a");
                    c || (b.a = [],
                    c = b.a);
                    b = nd(a);
                    Ja(a, x([a, c, Lf(b), !0], zd))
                }
            });
            window.Ya && Wa && (window.Ya[tb] = Wa,
            If(window),
            r(q(wa([window, window.Ya[tb]]), V), bd));
            r(q(wa([window]), V), cd)
        }
        )()
    } catch (Wa) {}
    ;
}
).call(this)
