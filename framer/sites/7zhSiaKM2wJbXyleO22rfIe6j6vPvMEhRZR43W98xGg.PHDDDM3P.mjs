import "./chunk-42U43NKG.mjs";
import {$ as f, Aa as Tt, Ba as g, Ca as i, Ea as Xe, F as c, Fa as s, Ga as Se, Ha as Me, I as ke, Ia as St, N as xt, O as Ye, Q as x, T as fe, V as er, W as te, X as me, Y as ut, _ as _e, b as r, e as we, ea as ce, g as $e, ga as Te, ha as ze, i as ye, ia as Be, j as H, ja as wt, k as _, l as ve, m as L, ma as yt, n as l, na as X, o as se, oa as vt, q as ht, r as e, ra as bt, s as t, sa as kt, t as xr, u as he, v as be, va as Ae, w as p, wa as Ie, x as gt, xa as _t, y as Pe, ya as ur, za as rr} from "./chunk-4XUABYHS.mjs";
import {a as Rt} from "./chunk-2AFFERTO.mjs";
import "./chunk-HZL4YIMB.mjs";
import {a as Qn, b as k, c as y} from "./chunk-A3IIQ6X3.mjs";
var Yt = {
    position: "relative",
    width: "100%",
    height: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center"
}
  , Jn = {
    ...Yt,
    borderRadius: 6,
    background: "rgba(136, 85, 255, 0.3)",
    color: "#85F",
    border: "1px dashed #85F",
    flexDirection: "column"
}
  , wr = {
    onClick: {
        type: x.EventHandler
    },
    onMouseEnter: {
        type: x.EventHandler
    },
    onMouseLeave: {
        type: x.EventHandler
    }
}
  , Kn = {
    type: x.Number,
    title: "Font Size",
    min: 2,
    max: 200,
    step: 1,
    displayStepper: !0
}
  , $n = {
    font: {
        type: x.Boolean,
        title: "Font",
        defaultValue: !1,
        disabledTitle: "Default",
        enabledTitle: "Custom"
    },
    fontFamily: {
        type: x.String,
        title: "Family",
        placeholder: "Inter",
        hidden: ({font: a}) => !a
    },
    fontWeight: {
        type: x.Enum,
        title: "Weight",
        options: [100, 200, 300, 400, 500, 600, 700, 800, 900],
        optionTitles: ["Thin", "Extra-light", "Light", "Regular", "Medium", "Semi-bold", "Bold", "Extra-bold", "Black"],
        hidden: ({font: a}) => !a
    }
};
function yr(a, m) {
    return zt(!0, a, m)
}
function vr(a, m) {
    return zt(!1, a, m)
}
function zt(a, m, d=!0) {
    let h = er();
    _( () => {
        d && h === a && m()
    }
    , [h])
}
var eo = () => {
    if (typeof k < "u") {
        let a = k.userAgent.toLowerCase();
        return (a.indexOf("safari") > -1 || a.indexOf("framermobile") > -1 || a.indexOf("framerx") > -1) && a.indexOf("chrome") < 0
    } else
        return !1
}
  , br = () => L( () => eo(), []);
function kr() {
    return L( () => Ye.current(), [])
}
function _r() {
    return L( () => Ye.current() === Ye.canvas, [])
}
function Tr(a) {
    let {borderRadius: m, isMixedBorderRadius: d, topLeftRadius: h, topRightRadius: w, bottomRightRadius: v, bottomLeftRadius: B} = a;
    return L( () => d ? `${h}px ${w}px ${v}px ${B}px` : `${m}px`, [m, d, h, w, v, B])
}
var Sr = {
    borderRadius: {
        title: "Radius",
        type: x.FusedNumber,
        toggleKey: "isMixedBorderRadius",
        toggleTitles: ["Radius", "Radius per corner"],
        valueKeys: ["topLeftRadius", "topRightRadius", "bottomRightRadius", "bottomLeftRadius"],
        valueLabels: ["TL", "TR", "BR", "BL"],
        min: 0
    }
};
var ao = {
    padding: {
        type: x.FusedNumber,
        toggleKey: "paddingPerSide",
        toggleTitles: ["Padding", "Padding per side"],
        valueKeys: ["paddingTop", "paddingRight", "paddingBottom", "paddingLeft"],
        valueLabels: ["T", "R", "B", "L"],
        min: 0,
        title: "Padding"
    }
};
var It;
(function(a) {
    a.Fill = "fill",
    a.Contain = "contain",
    a.Cover = "cover",
    a.None = "none",
    a.ScaleDown = "scale-down"
}
)(It || (It = {}));
var Ft;
(function(a) {
    a.Video = "Upload",
    a.Url = "URL"
}
)(Ft || (Ft = {}));
var no = "https://framerusercontent.com/assets/MLWPbW1dUQawJLhhun3dBwpgJak.mp4";
function oo(a) {
    let {width: m, height: d, topLeft: h, topRight: w, bottomRight: v, bottomLeft: B, id: n, children: F, ...Y} = a;
    return Y
}
function Fe(a) {
    let m = oo(a);
    return e(so, {
        ...m
    })
}
function io(a) {
    let m = er()
      , d = l(!1)
      , h = l(!1)
      , w = ye(n => {
        if (!a.current)
            return;
        let F = (n === 1 ? .999 : n) * a.current.duration
          , Y = Math.abs(a.current.currentTime - F) < .1;
        a.current.duration > 0 && !Y && (a.current.currentTime = F)
    }
    , [])
      , v = ye( () => {
        let n = a.current;
        if (!n)
            return;
        n.preload = "auto",
        !(n.currentTime > 0 && n.onplaying && !n.paused && !n.ended && n.readyState >= n.HAVE_CURRENT_DATA) && n && !d.current && m && (d.current = !0,
        h.current = !0,
        n.play().catch(Y => {}
        ).finally( () => d.current = !1))
    }
    , [])
      , B = ye( () => {
        !a.current || d.current || (a.current.pause(),
        h.current = !1)
    }
    , []);
    return {
        play: v,
        pause: B,
        setProgress: w,
        isPlaying: h
    }
}
function lo({playingProp: a, muted: m, loop: d, playsinline: h, controls: w}) {
    let[v] = se( () => a)
      , [B,n] = se(!1);
    a !== v && !B && n(!0);
    let F = v && m && d && h && !w && !B, Y;
    return F ? Y = "on-viewport" : v ? Y = "on-mount" : Y = "no-autoplay",
    Y
}
var so = $e(function(m) {
    let {srcType: d="URL", srcUrl: h, srcFile: w="", posterEnabled: v=!1, controls: B=!1, playing: n=!0, loop: F=!0, muted: Y=!0, playsinline: C=!0, restartOnEnter: J=!1, objectFit: U="cover", backgroundColor: j="rgba(0,0,0,0)", radius: o=0, volume: ae=25, startTime: ne=0, poster: V, playing: R, progress: O, onSeeked: M, onPause: D, onPlay: b, onEnd: u, onClick: N, onMouseEnter: Z, onMouseLeave: E, onMouseDown: $, onMouseUp: ge} = m
      , W = l()
      , oe = br()
      , q = l(null)
      , ee = l(null)
      , xe = _r()
      , pe = kr()
      , de = xe || pe === Ye.export
      , sr = Tr(m)
      , G = de ? "no-autoplay" : lo({
        playingProp: R,
        muted: Y,
        loop: F,
        playsinline: C,
        controls: B
    })
      , Oe = de ? !0 : Pe(W)
      , fr = de ? !1 : Pe(W, {
        margin: "10%",
        once: !0
    })
      , ie = ne === 100 ? 99.9 : ne
      , {play: Re, pause: Ee, setProgress: le, isPlaying: Le} = io(W);
    _( () => {
        de || G !== "on-viewport" && (R ? Re() : Ee())
    }
    , [G, R]),
    _( () => {
        de || (Oe && R && G !== "no-autoplay" && Re(),
        G === "on-viewport" && Ee())
    }
    , [G, Oe, R]),
    _( () => {
        !xe || V || v || ie || !W.current || (W.current.currentTime = .01)
    }
    , [v, V, ie]);
    let je = l(!1);
    _( () => {
        if (!je.current) {
            je.current = !0;
            return
        }
        let A = xr(O) ? O.get() : (O ?? 0) * .01;
        le((A ?? 0) || (ie ?? 0) / 100)
    }
    , [ie, w, h, O]),
    _( () => {
        if (xr(O))
            return O.on("change", A => le(A))
    }
    , [O]),
    yr( () => {
        q.current !== null && W.current && (!ee && F || !q.current) && Re()
    }
    ),
    vr( () => {
        W.current && (ee.current = W.current.ended,
        q.current = W.current.paused,
        Ee())
    }
    );
    let Qe = L( () => {
        let A = "";
        if (d === "URL")
            return h + A;
        if (d === "Upload")
            return w + A
    }
    , [d, w, h, ie]);
    _( () => {
        oe && W.current && G === "on-mount" && setTimeout( () => Re(), 50)
    }
    , []),
    _( () => {
        W.current && !Y && (W.current.volume = (ae ?? 0) / 100)
    }
    , [ae]);
    let Je = () => {
        let A = W.current;
        A && (A.currentTime < .3 && ie > 0 && le((ie ?? 0) * .01),
        (Le.current || G === "on-mount" || R && G === "on-viewport" && Oe) && Re())
    }
    ;
    return e("video", {
        onClick: N,
        onMouseEnter: Z,
        onMouseLeave: E,
        onMouseDown: $,
        onMouseUp: ge,
        src: Qe,
        loop: F,
        ref: W,
        onSeeked: A => M?.(A),
        onPause: A => D?.(A),
        onPlay: A => b?.(A),
        onEnded: A => u?.(A),
        autoPlay: Le.current || G === "on-mount" || R && G === "on-viewport" && Oe,
        preload: Le.current ? "auto" : de && !V ? "metadata" : G !== "on-mount" && !fr ? "none" : "metadata",
        poster: v && !w && h === no ? "https://framerusercontent.com/images/5ILRvlYXf72kHSVHqpa3snGzjU.jpg" : v && V ? V : void 0,
        onLoadedData: Je,
        controls: B,
        muted: de ? !0 : Y,
        playsInline: C,
        style: {
            cursor: N ? "pointer" : "auto",
            width: "100%",
            height: "100%",
            borderRadius: sr,
            display: "block",
            objectFit: U,
            backgroundColor: j,
            objectPosition: "50% 50%"
        }
    })
});
Fe.displayName = "Video";
function fo(a) {
    return a.charAt(0).toUpperCase() + a.slice(1)
}
function mo(a) {
    return (a.match(/[A-Z]{2,}|[A-Z][a-z]+|[a-z]+|[A-Z]|\d+/gu) || []).map(fo).join(" ")
}
var Ct = ["cover", "fill", "contain", "scale-down", "none"];
fe(Fe, {
    srcType: {
        type: x.Enum,
        displaySegmentedControl: !0,
        title: "Source",
        options: ["URL", "Upload"]
    },
    srcUrl: {
        type: x.String,
        title: "URL",
        defaultValue: "https://framerusercontent.com/assets/MLWPbW1dUQawJLhhun3dBwpgJak.mp4",
        hidden(a) {
            return a.srcType === "Upload"
        }
    },
    srcFile: {
        type: x.File,
        title: "File",
        allowedFileTypes: ["mp4", "webm"],
        hidden(a) {
            return a.srcType === "URL"
        }
    },
    playing: {
        type: x.Boolean,
        title: "Playing",
        enabledTitle: "Yes",
        disabledTitle: "No"
    },
    ...Sr,
    posterEnabled: {
        type: x.Boolean,
        title: "Poster",
        enabledTitle: "Yes",
        disabledTitle: "No"
    },
    poster: {
        type: x.Image,
        title: "Image",
        hidden: ({posterEnabled: a}) => !a,
        description: "We recommend adding a poster. [Learn more](https://www.framer.com/help/articles/how-are-videos-optimized-in-framer/)."
    },
    backgroundColor: {
        type: x.Color,
        title: "Background",
        defaultValue: "rgba(0,0,0,0)"
    },
    startTime: {
        title: "Start Time",
        type: x.Number,
        min: 0,
        max: 100,
        step: .1,
        unit: "%"
    },
    loop: {
        type: x.Boolean,
        title: "Loop",
        enabledTitle: "Yes",
        disabledTitle: "No"
    },
    objectFit: {
        type: x.Enum,
        title: "Fit",
        options: Ct,
        optionTitles: Ct.map(mo)
    },
    controls: {
        type: x.Boolean,
        title: "Controls",
        enabledTitle: "Show",
        disabledTitle: "Hide",
        defaultValue: !1
    },
    muted: {
        type: x.Boolean,
        title: "Muted",
        enabledTitle: "Yes",
        disabledTitle: "No"
    },
    volume: {
        type: x.Number,
        max: 100,
        min: 0,
        unit: "%",
        hidden: ({muted: a}) => a,
        defaultValue: 25
    },
    onEnd: {
        type: x.EventHandler
    },
    onSeeked: {
        type: x.EventHandler
    },
    onPause: {
        type: x.EventHandler
    },
    onPlay: {
        type: x.EventHandler
    },
    ...wr
});
var co = "framer-q8Ttd"
  , po = {
    XvqTw0Be9: "framer-v-jjcw9a"
};
var ho = {
    bounce: .2,
    delay: 0,
    duration: .4,
    type: "spring"
}
  , go = ({value: a, children: m}) => {
    let d = H(he)
      , h = a ?? d.transition
      , w = L( () => ({
        ...d,
        transition: h
    }), [JSON.stringify(h)]);
    return e(he.Provider, {
        value: w,
        children: m
    })
}
  , xo = p(r)
  , uo = ({height: a, id: m, subtitle: d, title: h, width: w, ...v}) => {
    var B, n;
    return {
        ...v,
        WuF2iG84P: (B = d ?? v.WuF2iG84P) !== null && B !== void 0 ? B : "Set up the component by adding background and bouncer elements to the component properties.",
        yeAnKbEUZ: (n = h ?? v.yeAnKbEUZ) !== null && n !== void 0 ? n : "Screen Saver"
    }
}
  , wo = (a, m) => a.layoutDependency ? m.join("-") + a.layoutDependency : m.join("-")
  , yo = we(function(a, m) {
    let {activeLocale: d, setLocale: h} = ke()
      , {style: w, className: v, layoutId: B, variant: n, yeAnKbEUZ: F, WuF2iG84P: Y, ...C} = uo(a)
      , {baseVariant: J, classNames: U, clearLoadingGesture: j, gestureHandlers: o, gestureVariant: ae, isLoading: ne, setGestureState: V, setVariant: R, variants: O} = Ae({
        defaultVariant: "XvqTw0Be9",
        variant: n,
        variantClassNames: po
    })
      , M = wo(a, O)
      , D = l(null)
      , b = ve()
      , u = []
      , N = Te();
    return e(be, {
        id: B ?? b,
        children: e(xo, {
            animate: O,
            initial: !1,
            children: e(go, {
                value: ho,
                children: e(p.div, {
                    ...C,
                    ...o,
                    className: te(co, ...u, "framer-jjcw9a", v, U),
                    "data-framer-name": "Default",
                    layoutDependency: M,
                    layoutId: "XvqTw0Be9",
                    ref: m ?? D,
                    style: {
                        backgroundColor: "rgba(136, 85, 255, 0.1)",
                        ...w
                    },
                    children: t(p.div, {
                        className: "framer-uh2i08",
                        layoutDependency: M,
                        layoutId: "aM7oiNoFL",
                        children: [e(Xe, {
                            className: "framer-flw0dh",
                            "data-framer-name": "Logo",
                            layout: "position",
                            layoutDependency: M,
                            layoutId: "GthLmGmBt",
                            opacity: 1,
                            svg: '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 28 28"><g id="ss11036020200_1"><path d="M 0 0 L 28 0 L 28 28 L 0 28 Z" fill="transparent"></path><path d="M 21 7.113 C 21 7.041 21.029 6.971 21.079 6.921 L 27.534 0.465 C 27.613 0.388 27.73 0.365 27.831 0.407 C 27.933 0.449 28 0.548 28 0.658 L 28 13.888 C 28 13.96 27.971 14.028 27.921 14.079 L 21 21 Z M 7 21 L 7 7.658 C 7 7.548 6.933 7.449 6.831 7.407 C 6.73 7.365 6.613 7.388 6.534 7.465 L 0.079 13.921 C 0.028 13.972 0 14.041 0 14.113 L 0 27.728 C 0 27.877 0.122 28 0.273 28 L 13.888 28 C 13.96 28 14.028 27.971 14.079 27.921 L 21 21 Z" fill="rgb(153, 102, 255)"></path></g></svg>',
                            svgContentId: 11036020200,
                            withExternalLayout: !0
                        }), t(p.div, {
                            className: "framer-k3ullq",
                            layoutDependency: M,
                            layoutId: "E3DQBYSAf",
                            children: [e(i, {
                                __fromCanvasComponent: !0,
                                children: e(r, {
                                    children: e(p.p, {
                                        style: {
                                            "--font-selector": "SW50ZXItQm9sZA==",
                                            "--framer-font-family": '"Inter", "Inter Placeholder", sans-serif',
                                            "--framer-font-size": "11px",
                                            "--framer-font-weight": "700",
                                            "--framer-letter-spacing": "-0.02em",
                                            "--framer-line-height": "1em",
                                            "--framer-text-alignment": "center",
                                            "--framer-text-color": "var(--extracted-r6o4lv, rgb(153, 102, 255))"
                                        },
                                        children: "Screen Saver"
                                    })
                                }),
                                className: "framer-q0gs4u",
                                "data-framer-name": "Title",
                                fonts: ["Inter-Bold"],
                                layoutDependency: M,
                                layoutId: "UqJwZqJjg",
                                style: {
                                    "--extracted-r6o4lv": "rgb(153, 102, 255)",
                                    "--framer-link-text-color": "rgb(0, 153, 255)",
                                    "--framer-link-text-decoration": "underline"
                                },
                                text: F,
                                verticalAlignment: "top",
                                withExternalLayout: !0
                            }), e(i, {
                                __fromCanvasComponent: !0,
                                children: e(r, {
                                    children: e(p.p, {
                                        style: {
                                            "--framer-font-size": "11px",
                                            "--framer-letter-spacing": "-0.03em",
                                            "--framer-line-height": "1.4em",
                                            "--framer-text-alignment": "center",
                                            "--framer-text-color": "var(--extracted-r6o4lv, rgba(153, 102, 255, 0.7))"
                                        },
                                        children: "Set up the component by adding background and bouncer elements to the component properties."
                                    })
                                }),
                                className: "framer-g5dqhc",
                                "data-framer-name": "Subtitle",
                                fonts: ["Inter"],
                                layoutDependency: M,
                                layoutId: "RJ7UF99m8",
                                style: {
                                    "--extracted-r6o4lv": "rgba(153, 102, 255, 0.7)",
                                    "--framer-link-text-color": "rgb(0, 153, 255)",
                                    "--framer-link-text-decoration": "underline"
                                },
                                text: Y,
                                verticalAlignment: "top",
                                withExternalLayout: !0
                            })]
                        })]
                    })
                })
            })
        })
    })
})
  , vo = ["@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }", ".framer-q8Ttd.framer-qanqo2, .framer-q8Ttd .framer-qanqo2 { display: block; }", ".framer-q8Ttd.framer-jjcw9a { align-content: center; align-items: center; display: flex; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: 200px; justify-content: center; overflow: hidden; padding: 0px; position: relative; width: 400px; }", ".framer-q8Ttd .framer-uh2i08 { align-content: center; align-items: center; display: flex; flex: 1 0 0px; flex-direction: column; flex-wrap: nowrap; gap: 16px; height: min-content; justify-content: center; overflow: hidden; padding: 0px 20px 0px 20px; position: relative; width: 1px; }", ".framer-q8Ttd .framer-flw0dh { flex: none; height: 28px; position: relative; width: 28px; }", ".framer-q8Ttd .framer-k3ullq { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 12px; height: min-content; justify-content: center; max-width: 200px; overflow: hidden; padding: 0px; position: relative; width: 100%; }", ".framer-q8Ttd .framer-q0gs4u, .framer-q8Ttd .framer-g5dqhc { flex: none; height: auto; position: relative; white-space: pre-wrap; width: 100%; word-break: break-word; word-wrap: break-word; }", "@supports (background: -webkit-named-image(i)) and (not (font-palette:dark)) { .framer-q8Ttd.framer-jjcw9a, .framer-q8Ttd .framer-uh2i08, .framer-q8Ttd .framer-k3ullq { gap: 0px; } .framer-q8Ttd.framer-jjcw9a > * { margin: 0px; margin-left: calc(10px / 2); margin-right: calc(10px / 2); } .framer-q8Ttd.framer-jjcw9a > :first-child { margin-left: 0px; } .framer-q8Ttd.framer-jjcw9a > :last-child { margin-right: 0px; } .framer-q8Ttd .framer-uh2i08 > * { margin: 0px; margin-bottom: calc(16px / 2); margin-top: calc(16px / 2); } .framer-q8Ttd .framer-uh2i08 > :first-child, .framer-q8Ttd .framer-k3ullq > :first-child { margin-top: 0px; } .framer-q8Ttd .framer-uh2i08 > :last-child, .framer-q8Ttd .framer-k3ullq > :last-child { margin-bottom: 0px; } .framer-q8Ttd .framer-k3ullq > * { margin: 0px; margin-bottom: calc(12px / 2); margin-top: calc(12px / 2); } }"]
  , qe = _e(yo, vo, "framer-q8Ttd")
  , Wt = qe;
qe.displayName = "Utils/Component Message";
qe.defaultProps = {
    height: 200,
    width: 400
};
fe(qe, {
    yeAnKbEUZ: {
        defaultValue: "Screen Saver",
        displayTextArea: !1,
        title: "Title",
        type: x.String
    },
    WuF2iG84P: {
        defaultValue: "Set up the component by adding background and bouncer elements to the component properties.",
        displayTextArea: !1,
        title: "Subtitle",
        type: x.String
    }
});
Se(qe, [{
    explicitInter: !0,
    fonts: [{
        family: "Inter",
        source: "framer",
        style: "normal",
        unicodeRange: "U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F",
        url: "https://framerusercontent.com/assets/DpPBYI0sL4fYLgAkX8KXOPVt7c.woff2",
        weight: "700"
    }, {
        family: "Inter",
        source: "framer",
        style: "normal",
        unicodeRange: "U+0301, U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116",
        url: "https://framerusercontent.com/assets/4RAEQdEOrcnDkhHiiCbJOw92Lk.woff2",
        weight: "700"
    }, {
        family: "Inter",
        source: "framer",
        style: "normal",
        unicodeRange: "U+1F00-1FFF",
        url: "https://framerusercontent.com/assets/1K3W8DizY3v4emK8Mb08YHxTbs.woff2",
        weight: "700"
    }, {
        family: "Inter",
        source: "framer",
        style: "normal",
        unicodeRange: "U+0370-03FF",
        url: "https://framerusercontent.com/assets/tUSCtfYVM1I1IchuyCwz9gDdQ.woff2",
        weight: "700"
    }, {
        family: "Inter",
        source: "framer",
        style: "normal",
        unicodeRange: "U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF",
        url: "https://framerusercontent.com/assets/VgYFWiwsAC5OYxAycRXXvhze58.woff2",
        weight: "700"
    }, {
        family: "Inter",
        source: "framer",
        style: "normal",
        unicodeRange: "U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD",
        url: "https://framerusercontent.com/assets/DXD0Q7LSl7HEvDzucnyLnGBHM.woff2",
        weight: "700"
    }, {
        family: "Inter",
        source: "framer",
        style: "normal",
        unicodeRange: "U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB",
        url: "https://framerusercontent.com/assets/GIryZETIX4IFypco5pYZONKhJIo.woff2",
        weight: "700"
    }, {
        family: "Inter",
        source: "framer",
        style: "normal",
        unicodeRange: "U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F",
        url: "https://framerusercontent.com/assets/5vvr9Vy74if2I6bQbJvbw7SY1pQ.woff2",
        weight: "400"
    }, {
        family: "Inter",
        source: "framer",
        style: "normal",
        unicodeRange: "U+0301, U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116",
        url: "https://framerusercontent.com/assets/EOr0mi4hNtlgWNn9if640EZzXCo.woff2",
        weight: "400"
    }, {
        family: "Inter",
        source: "framer",
        style: "normal",
        unicodeRange: "U+1F00-1FFF",
        url: "https://framerusercontent.com/assets/Y9k9QrlZAqio88Klkmbd8VoMQc.woff2",
        weight: "400"
    }, {
        family: "Inter",
        source: "framer",
        style: "normal",
        unicodeRange: "U+0370-03FF",
        url: "https://framerusercontent.com/assets/OYrD2tBIBPvoJXiIHnLoOXnY9M.woff2",
        weight: "400"
    }, {
        family: "Inter",
        source: "framer",
        style: "normal",
        unicodeRange: "U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF",
        url: "https://framerusercontent.com/assets/JeYwfuaPfZHQhEG8U5gtPDZ7WQ.woff2",
        weight: "400"
    }, {
        family: "Inter",
        source: "framer",
        style: "normal",
        unicodeRange: "U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD",
        url: "https://framerusercontent.com/assets/vQyevYAyHtARFwPqUzQGpnDs.woff2",
        weight: "400"
    }, {
        family: "Inter",
        source: "framer",
        style: "normal",
        unicodeRange: "U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB",
        url: "https://framerusercontent.com/assets/b6Y37FthZeALduNqHicBT6FutY.woff2",
        weight: "400"
    }]
}], {
    supportsExplicitInterCodegen: !0
});
var Ot = ({title: a, subtitle: m, style: d}) => e(Wt, {
    yeAnKbEUZ: a,
    WuF2iG84P: m,
    style: {
        width: "100%",
        height: "100%",
        ...d
    }
});
var Et = $e( ({mode: a, media: m, currentTime: d, imageFit: h, videoRef: w, display: v, poster: B, posterEnabled: n}) => {
    let F = {
        width: "100%",
        height: "100%",
        objectFit: h,
        position: "absolute",
        top: 0,
        left: 0,
        display: v
    };
    return _( () => {
        if (a === "video" && w?.current && d !== void 0) {
            let Y = w.current;
            Math.abs(Y.currentTime - d) > .1 && (Y.currentTime = d)
        }
    }
    , [a, w, d]),
    a === "image" ? e("img", {
        src: m.src,
        style: F,
        alt: ""
    }) : e("video", {
        ref: w,
        src: m,
        style: F,
        preload: "auto",
        muted: !0,
        playsInline: !0,
        poster: n ? B : void 0
    })
}
);
function Ce({mode: a, images: m, video: d, scrollAreaHeight: h, imageFit: w, frameRate: v=30, sequenceStartOffset: B=0, triggerPosition: n="text-align-top", poster: F, posterEnabled: Y}) {
    let[C,J] = se({
        loadedMedia: [],
        currentTime: 0,
        videoDuration: 0,
        isVideoMetadataLoaded: !1
    })
      , U = l(null)
      , j = l(null)
      , o = gt(0)
      , ae = l(0)
      , ne = L( () => 1e3 / v, [v])
      , V = l(null);
    _( () => {
        if (a === "image") {
            let b = m.map(u => {
                let N = new Image;
                return N.src = u,
                N
            }
            );
            J(u => ({
                ...u,
                loadedMedia: b
            }))
        } else
            J(b => ({
                ...b,
                loadedMedia: [],
                isVideoMetadataLoaded: !1
            }))
    }
    , [m, a]),
    _( () => {
        if (a === "video" && U.current) {
            let b = () => {
                J(u => ({
                    ...u,
                    videoDuration: U.current.duration,
                    isVideoMetadataLoaded: !0
                }))
            }
            ;
            return U.current.addEventListener("loadedmetadata", b),
            U.current.load(),
            () => {
                U.current?.removeEventListener("loadedmetadata", b)
            }
        }
    }
    , [a, d]);
    let R = b => {
        let Z = (oe => {
            let q = oe;
            for (; q && q !== document.body; ) {
                if (y.getComputedStyle(q).position === "sticky")
                    return q;
                q = q.parentElement
            }
            return null
        }
        )(b) || b
          , E = Z.style.position;
        Z.style.position = "static";
        let $ = Z.getBoundingClientRect()
          , ge = y.pageYOffset || document.documentElement.scrollTop
          , W = $.top + ge;
        return Z.style.position = E,
        W
    }
      , O = ye(b => {
        if (!j.current)
            return;
        let u = performance.now();
        if (a === "video" && u - ae.current < ne)
            return;
        let N = j.current.getBoundingClientRect()
          , Z = y.innerHeight
          , E = document.documentElement.scrollHeight
          , $ = 0;
        switch (n) {
        case "text-align-middle":
            $ = Z / 2;
            break;
        case "text-align-bottom":
            $ = Z;
            break;
        default:
            $ = 0
        }
        let ge = j.current;
        if (V.current === null && N.top <= $ && (V.current = R(j.current)),
        V.current !== null) {
            let W = b - V.current
              , oe = E - V.current
              , q = Math.min(h, oe)
              , ee = Math.max(0, Math.min(W / q, 1));
            if (a === "image") {
                let xe = Math.floor(ee * (C.loadedMedia.length - 1));
                J(pe => ({
                    ...pe,
                    currentTime: Math.min(xe, pe.loadedMedia.length - 1)
                }))
            } else if (a === "video" && C.videoDuration > 0) {
                let xe = ee * C.videoDuration;
                J(pe => ({
                    ...pe,
                    currentTime: Math.min(xe, pe.videoDuration)
                }))
            }
        }
        ae.current = u
    }
    , [a, n, h, C.loadedMedia.length, C.videoDuration, ne])
      , M = ye( () => {
        requestAnimationFrame( () => {
            let b = y.scrollY;
            o.set(b),
            O(b)
        }
        )
    }
    , [o, O]);
    return _( () => (y.addEventListener("scroll", M, {
        passive: !0
    }),
    () => {
        y.removeEventListener("scroll", M),
        V.current = null
    }
    ), [M, d]),
    _( () => {
        let b = y.scrollY;
        if (a === "video" && C.isVideoMetadataLoaded) {
            let u = y.scrollY;
            o.set(u),
            O(u)
        }
        a === "image" && (o.set(b),
        O(b))
    }
    , [a, C.isVideoMetadataLoaded, O]),
    L( () => a === "image" && m.length === 0 || a === "video" && !d, [a, m, d]) ? e(Ot, {
        title: "Scroll Media Component",
        subtitle: a === "video" ? "Upload a video file on the right properties panel." : "Upload your images/video on the right properties panel."
    }) : e("div", {
        ref: j,
        style: {
            width: "100%",
            height: "100%",
            position: "relative"
        },
        children: a === "image" ? C.loadedMedia.map( (b, u) => e(Et, {
            mode: "image",
            media: b,
            imageFit: w,
            display: u === Math.floor(C.currentTime) ? "block" : "none"
        }, u)) : e(Et, {
            mode: "video",
            media: d,
            currentTime: C.currentTime,
            imageFit: w,
            videoRef: U,
            display: "block",
            poster: F,
            posterEnabled: Y
        })
    })
}
Ce.displayName = "Scroll Media";
Ce.defaultProps = {
    mode: "image",
    images: [],
    video: "",
    scrollAreaHeight: 5e3,
    imageFit: "cover",
    frameRate: 30,
    sequenceStartOffset: 0,
    triggerPosition: "text-align-top",
    posterEnabled: !1,
    poster: ""
};
fe(Ce, {
    mode: {
        type: x.Enum,
        title: "Mode",
        options: ["image", "video"],
        optionTitles: ["Image", "Video"],
        displaySegmentedControl: !0,
        segmentedControlDirection: "vertical"
    },
    images: {
        type: x.Array,
        title: "Images",
        propertyControl: {
            type: x.Image
        },
        hidden: ({mode: a}) => a !== "image"
    },
    video: {
        type: x.File,
        title: "Video",
        allowedFileTypes: ["mp4"],
        hidden: ({mode: a}) => a !== "video"
    },
    imageFit: {
        type: x.Enum,
        title: "Media Fit",
        options: ["cover", "contain"],
        optionTitles: ["Cover", "Contain"],
        displaySegmentedControl: !0,
        segmentedControlDirection: "horizontal"
    },
    posterEnabled: {
        type: x.Boolean,
        title: "Poster",
        enabledTitle: "Yes",
        disabledTitle: "No",
        description: "I recommend adding a poster. [Learn more](https://framer.com/help/articles/how-are-videos-optimized-in-framer/).",
        hidden: ({mode: a}) => a !== "video"
    },
    poster: {
        type: x.Image,
        title: " ",
        hidden: ({mode: a, posterEnabled: m}) => a !== "video" || !m
    },
    triggerPosition: {
        type: x.Enum,
        title: "Start",
        options: ["text-align-top", "text-align-middle", "text-align-bottom"],
        optionTitles: ["Top", "Center", "Bottom"],
        optionIcons: ["text-align-top", "text-align-middle", "text-align-bottom"],
        displaySegmentedControl: !0,
        segmentedControlDirection: "horizontal"
    },
    scrollAreaHeight: {
        type: x.Number,
        title: "Length",
        description: "Rule of thumb: 500 for each second of the video. So for a 10s video, set length to 5000.",
        min: 10,
        max: 1e5,
        step: 100
    },
    frameRate: {
        type: x.Number,
        title: "FPS",
        min: 1,
        max: 60,
        step: 1,
        hidden: ({mode: a}) => a !== "video"
    },
    sequenceStartOffset: {
        type: x.Number,
        title: "Offset",
        min: 0,
        max: 1e4,
        step: 100,
        description: "More components at [Framer University](https://frameruni.link/cc)."
    }
});
var Rr = {};
Qn(Rr, {
    __FramerMetadata__: () => Wo,
    default: () => tr
});
ur.loadFonts([]);
var Lt = [{
    explicitInter: !0,
    fonts: []
}]
  , Vt = [".framer-FjHIW .framer-styles-preset-1aiv2r6:not(.rich-text-wrapper), .framer-FjHIW .framer-styles-preset-1aiv2r6.rich-text-wrapper a { --framer-link-current-text-color: #111111; --framer-link-current-text-decoration: underline; --framer-link-hover-text-color: #9879e0; --framer-link-hover-text-decoration: underline; --framer-link-text-color: #ffffff; }"]
  , Nt = "framer-FjHIW";
var ko = ["owpePC4Pv", "UDOHaWLpP", "qnHMqSvJN", "sXVbkoiQ5", "F9RUsMvIK"]
  , _o = "framer-dolyA"
  , To = {
    F9RUsMvIK: "framer-v-45shry",
    owpePC4Pv: "framer-v-1y22ezq",
    qnHMqSvJN: "framer-v-1lzzbp8",
    sXVbkoiQ5: "framer-v-vadf3e",
    UDOHaWLpP: "framer-v-125cpj9"
};
function K(a, ...m) {
    let d = {};
    return m?.forEach(h => h && Object.assign(d, a[h])),
    d
}
var So = {
    damping: 40,
    delay: 0,
    mass: 1,
    stiffness: 400,
    type: "spring"
}
  , Ro = {
    bounce: .2,
    delay: 0,
    duration: .3,
    type: "spring"
}
  , At = {
    damping: 40,
    delay: 0,
    mass: 1,
    stiffness: 600,
    type: "spring"
}
  , Xt = ({value: a, children: m}) => {
    let d = H(he)
      , h = a ?? d.transition
      , w = L( () => ({
        ...d,
        transition: h
    }), [JSON.stringify(h)]);
    return e(he.Provider, {
        value: w,
        children: m
    })
}
  , Ut = a => {
    if (typeof a != "number")
        return a;
    if (Number.isFinite(a))
        return Math.max(0, a) + "px"
}
  , Yo = p.create(r)
  , zo = {
    "Phone Open": "qnHMqSvJN",
    "Variant 4": "sXVbkoiQ5",
    Default: "owpePC4Pv",
    hidden: "F9RUsMvIK",
    Phone: "UDOHaWLpP"
}
  , Bo = ({height: a, id: m, padding2: d, width: h, ...w}) => ({
    ...w,
    HnpxiRJex: d ?? w.HnpxiRJex ?? "10px",
    variant: zo[w.variant] ?? w.variant ?? "owpePC4Pv"
})
  , Io = (a, m) => a.layoutDependency ? m.join("-") + a.layoutDependency : m.join("-")
  , Fo = we(function(a, m) {
    let d = l(null)
      , h = m ?? d
      , w = ve()
      , {activeLocale: v, setLocale: B} = ke()
      , n = Te()
      , {style: F, className: Y, layoutId: C, variant: J, HnpxiRJex: U, ...j} = Bo(a)
      , {baseVariant: o, classNames: ae, clearLoadingGesture: ne, gestureHandlers: V, gestureVariant: R, isLoading: O, setGestureState: M, setVariant: D, variants: b} = Ae({
        cycleOrder: ko,
        defaultVariant: "owpePC4Pv",
        ref: h,
        variant: J,
        variantClassNames: To
    })
      , u = Io(a, b)
      , {activeVariantCallback: N, delay: Z} = bt(o)
      , E = N(async (...ee) => {
        D("qnHMqSvJN")
    }
    )
      , $ = N(async (...ee) => {
        D("UDOHaWLpP")
    }
    )
      , ge = N(async (...ee) => {
        D("sXVbkoiQ5")
    }
    )
      , oe = te(_o, ...[Nt])
      , q = () => !!["UDOHaWLpP", "qnHMqSvJN"].includes(o);
    return e(be, {
        id: C ?? w,
        children: e(Yo, {
            animate: b,
            initial: !1,
            children: e(Xt, {
                value: So,
                ...K({
                    F9RUsMvIK: {
                        value: Ro
                    }
                }, o, R),
                children: t(p.nav, {
                    ...j,
                    ...V,
                    className: te(oe, "framer-1y22ezq", Y, ae),
                    "data-framer-name": "Default",
                    "data-hide-scrollbars": !0,
                    layoutDependency: u,
                    layoutId: "owpePC4Pv",
                    ref: h,
                    style: {
                        backgroundColor: "rgb(0, 1, 0)",
                        ...F
                    },
                    ...K({
                        F9RUsMvIK: {
                            "data-framer-name": "hidden"
                        },
                        qnHMqSvJN: {
                            "data-framer-name": "Phone Open"
                        },
                        sXVbkoiQ5: {
                            "data-framer-name": "Variant 4"
                        },
                        UDOHaWLpP: {
                            "data-framer-name": "Phone"
                        }
                    }, o, R),
                    children: [t(p.div, {
                        className: "framer-tffeg2",
                        "data-framer-name": "Name",
                        layoutDependency: u,
                        layoutId: "SYbWna1zR",
                        ...K({
                            qnHMqSvJN: {
                                "data-highlight": !0,
                                onTap: $
                            },
                            UDOHaWLpP: {
                                "data-highlight": !0,
                                onTap: E
                            }
                        }, o, R),
                        children: [e(p.div, {
                            className: "framer-11z5z9j",
                            "data-framer-name": "Logo and Name",
                            layoutDependency: u,
                            layoutId: "Ee3QWq8mU",
                            children: e(g, {
                                background: {
                                    alt: "",
                                    fit: "fill",
                                    loading: s((n?.y || 0) + (20 + ((n?.height || 64) - 40 - 60) / 2) + 0 + 0),
                                    pixelHeight: 810,
                                    pixelWidth: 1440,
                                    src: "https://framerusercontent.com/images/GWYYAUDxyxDSbOiBd3gQDdefdq4.svg"
                                },
                                className: "framer-jjdjyd",
                                layoutDependency: u,
                                layoutId: "sATRhDdPq",
                                ...K({
                                    qnHMqSvJN: {
                                        background: {
                                            alt: "",
                                            fit: "fill",
                                            loading: s((n?.y || 0) + 0 + 0 + 2 + 0),
                                            pixelHeight: 810,
                                            pixelWidth: 1440,
                                            src: "https://framerusercontent.com/images/GWYYAUDxyxDSbOiBd3gQDdefdq4.svg"
                                        }
                                    },
                                    sXVbkoiQ5: {
                                        background: {
                                            alt: "",
                                            fit: "fill",
                                            loading: s((n?.y || 0) + (9 + ((n?.height || 64) - 18 - 53) / 2) + 0 + 0),
                                            pixelHeight: 810,
                                            pixelWidth: 1440,
                                            src: "https://framerusercontent.com/images/GWYYAUDxyxDSbOiBd3gQDdefdq4.svg"
                                        }
                                    },
                                    UDOHaWLpP: {
                                        background: {
                                            alt: "",
                                            fit: "fill",
                                            loading: s((n?.y || 0) + 0 + 0 + 2 + 0),
                                            pixelHeight: 810,
                                            pixelWidth: 1440,
                                            src: "https://framerusercontent.com/images/GWYYAUDxyxDSbOiBd3gQDdefdq4.svg"
                                        }
                                    }
                                }, o, R)
                            })
                        }), q() && t(p.div, {
                            className: "framer-88lvat",
                            "data-framer-name": "Icon",
                            layoutDependency: u,
                            layoutId: "Oo86FiWVF",
                            children: [e(p.div, {
                                className: "framer-j2eoz4",
                                "data-framer-name": "Top",
                                layoutDependency: u,
                                layoutId: "NGXuHrgOe",
                                style: {
                                    backgroundColor: "rgb(153, 153, 153)",
                                    borderBottomLeftRadius: 10,
                                    borderBottomRightRadius: 10,
                                    borderTopLeftRadius: 10,
                                    borderTopRightRadius: 10,
                                    rotate: 0
                                },
                                variants: {
                                    qnHMqSvJN: {
                                        rotate: 45
                                    }
                                }
                            }), e(p.div, {
                                className: "framer-11a8cz8",
                                "data-framer-name": "Bottom",
                                layoutDependency: u,
                                layoutId: "NdgFA87HL",
                                style: {
                                    backgroundColor: "rgb(153, 153, 153)",
                                    borderBottomLeftRadius: 10,
                                    borderBottomRightRadius: 10,
                                    borderTopLeftRadius: 10,
                                    borderTopRightRadius: 10,
                                    rotate: 0
                                },
                                variants: {
                                    qnHMqSvJN: {
                                        rotate: -45
                                    }
                                }
                            })]
                        })]
                    }), e(Xt, {
                        ...K({
                            qnHMqSvJN: {
                                value: At
                            },
                            UDOHaWLpP: {
                                value: At
                            }
                        }, o, R),
                        children: t(p.div, {
                            className: "framer-6du44v",
                            "data-framer-name": "Links",
                            layoutDependency: u,
                            layoutId: "ucx6hBDTd",
                            style: {
                                opacity: 1
                            },
                            variants: {
                                F9RUsMvIK: {
                                    opacity: 1
                                },
                                qnHMqSvJN: {
                                    opacity: 1
                                },
                                sXVbkoiQ5: {
                                    opacity: 1
                                },
                                UDOHaWLpP: {
                                    opacity: 0
                                }
                            },
                            children: [e(p.div, {
                                className: "framer-1qqpu5c",
                                "data-framer-name": "Inline Link",
                                layoutDependency: u,
                                layoutId: "S3fqtAhbZ",
                                children: e(i, {
                                    __fromCanvasComponent: !0,
                                    children: e(r, {
                                        children: e(p.p, {
                                            style: {
                                                "--font-selector": "SW50ZXItTWVkaXVt",
                                                "--framer-font-family": '"Inter", "Inter Placeholder", sans-serif',
                                                "--framer-font-size": "15px",
                                                "--framer-font-weight": "500",
                                                "--framer-letter-spacing": "-0.01em",
                                                "--framer-line-height": "2em",
                                                "--framer-text-alignment": "left",
                                                "--framer-text-color": "var(--extracted-r6o4lv, rgb(255, 255, 255))"
                                            },
                                            children: e(X, {
                                                href: {
                                                    hash: ":RtiW4BHW6",
                                                    webPageId: "Z9xpqCjmE"
                                                },
                                                motionChild: !0,
                                                nodeId: "XBsmUVIVP",
                                                openInNewTab: !1,
                                                relValues: [],
                                                scopeId: "gnmTpWXne",
                                                smoothScroll: !1,
                                                children: e(p.a, {
                                                    className: "framer-styles-preset-1aiv2r6",
                                                    "data-styles-preset": "hQWOM2asv",
                                                    children: "Home"
                                                })
                                            })
                                        })
                                    }),
                                    className: "framer-12lwirj",
                                    fonts: ["Inter-Medium"],
                                    layoutDependency: u,
                                    layoutId: "XBsmUVIVP",
                                    style: {
                                        "--extracted-r6o4lv": "rgb(255, 255, 255)",
                                        "--framer-paragraph-spacing": "0px"
                                    },
                                    verticalAlignment: "top",
                                    withExternalLayout: !0,
                                    ...K({
                                        sXVbkoiQ5: {
                                            children: e(r, {
                                                children: e(p.p, {
                                                    style: {
                                                        "--font-selector": "SW50ZXItTWVkaXVt",
                                                        "--framer-font-family": '"Inter", "Inter Placeholder", sans-serif',
                                                        "--framer-font-size": "11px",
                                                        "--framer-font-weight": "500",
                                                        "--framer-letter-spacing": "-0.01em",
                                                        "--framer-line-height": "2em",
                                                        "--framer-text-alignment": "left",
                                                        "--framer-text-color": "var(--extracted-r6o4lv, rgb(255, 255, 255))"
                                                    },
                                                    children: e(X, {
                                                        href: {
                                                            hash: ":RtiW4BHW6",
                                                            webPageId: "Z9xpqCjmE"
                                                        },
                                                        motionChild: !0,
                                                        nodeId: "XBsmUVIVP",
                                                        openInNewTab: !1,
                                                        relValues: [],
                                                        scopeId: "gnmTpWXne",
                                                        smoothScroll: !1,
                                                        children: e(p.a, {
                                                            className: "framer-styles-preset-1aiv2r6",
                                                            "data-styles-preset": "hQWOM2asv",
                                                            children: "Home"
                                                        })
                                                    })
                                                })
                                            })
                                        }
                                    }, o, R)
                                })
                            }), e(p.div, {
                                className: "framer-hj6ug4",
                                "data-framer-name": "Inline Link",
                                layoutDependency: u,
                                layoutId: "LpcpMlbVK",
                                children: e(i, {
                                    __fromCanvasComponent: !0,
                                    children: e(r, {
                                        children: e(p.p, {
                                            style: {
                                                "--font-selector": "SW50ZXItTWVkaXVt",
                                                "--framer-font-family": '"Inter", "Inter Placeholder", sans-serif',
                                                "--framer-font-size": "15px",
                                                "--framer-font-weight": "500",
                                                "--framer-letter-spacing": "-0.01em",
                                                "--framer-line-height": "2em",
                                                "--framer-text-alignment": "left",
                                                "--framer-text-color": "var(--extracted-r6o4lv, rgb(255, 255, 255))"
                                            },
                                            children: e(X, {
                                                href: {
                                                    hash: ":pmcqn1EJe",
                                                    webPageId: "Z9xpqCjmE"
                                                },
                                                motionChild: !0,
                                                nodeId: "MyhOYm_3N",
                                                openInNewTab: !1,
                                                relValues: [],
                                                scopeId: "gnmTpWXne",
                                                smoothScroll: !1,
                                                children: e(p.a, {
                                                    className: "framer-styles-preset-1aiv2r6",
                                                    "data-styles-preset": "hQWOM2asv",
                                                    children: "Features"
                                                })
                                            })
                                        })
                                    }),
                                    className: "framer-8c5o1e",
                                    fonts: ["Inter-Medium"],
                                    layoutDependency: u,
                                    layoutId: "MyhOYm_3N",
                                    style: {
                                        "--extracted-r6o4lv": "rgb(255, 255, 255)",
                                        "--framer-paragraph-spacing": "0px"
                                    },
                                    verticalAlignment: "top",
                                    withExternalLayout: !0,
                                    ...K({
                                        qnHMqSvJN: {
                                            children: e(r, {
                                                children: e(p.p, {
                                                    style: {
                                                        "--font-selector": "SW50ZXItTWVkaXVt",
                                                        "--framer-font-family": '"Inter", "Inter Placeholder", sans-serif',
                                                        "--framer-font-size": "15px",
                                                        "--framer-font-weight": "500",
                                                        "--framer-letter-spacing": "-0.01em",
                                                        "--framer-line-height": "2em",
                                                        "--framer-text-alignment": "left",
                                                        "--framer-text-color": "var(--extracted-r6o4lv, rgb(255, 255, 255))"
                                                    },
                                                    children: e(X, {
                                                        href: {
                                                            hash: ":NUB0U5ILA",
                                                            webPageId: "Z9xpqCjmE"
                                                        },
                                                        motionChild: !0,
                                                        nodeId: "MyhOYm_3N",
                                                        openInNewTab: !1,
                                                        relValues: [],
                                                        scopeId: "gnmTpWXne",
                                                        smoothScroll: !1,
                                                        children: e(p.a, {
                                                            className: "framer-styles-preset-1aiv2r6",
                                                            "data-styles-preset": "hQWOM2asv",
                                                            children: "Features"
                                                        })
                                                    })
                                                })
                                            })
                                        },
                                        sXVbkoiQ5: {
                                            children: e(r, {
                                                children: e(p.p, {
                                                    style: {
                                                        "--font-selector": "SW50ZXItTWVkaXVt",
                                                        "--framer-font-family": '"Inter", "Inter Placeholder", sans-serif',
                                                        "--framer-font-size": "11px",
                                                        "--framer-font-weight": "500",
                                                        "--framer-letter-spacing": "-0.01em",
                                                        "--framer-line-height": "2em",
                                                        "--framer-text-alignment": "left",
                                                        "--framer-text-color": "var(--extracted-r6o4lv, rgb(255, 255, 255))"
                                                    },
                                                    children: e(X, {
                                                        href: {
                                                            hash: ":yoBjMEn3L",
                                                            webPageId: "Z9xpqCjmE"
                                                        },
                                                        motionChild: !0,
                                                        nodeId: "MyhOYm_3N",
                                                        openInNewTab: !1,
                                                        relValues: [],
                                                        scopeId: "gnmTpWXne",
                                                        smoothScroll: !1,
                                                        children: e(p.a, {
                                                            className: "framer-styles-preset-1aiv2r6",
                                                            "data-styles-preset": "hQWOM2asv",
                                                            children: "Features"
                                                        })
                                                    })
                                                })
                                            })
                                        }
                                    }, o, R)
                                })
                            }), e(p.div, {
                                className: "framer-1qiicn1",
                                "data-framer-name": "Inline Link",
                                layoutDependency: u,
                                layoutId: "DUFuwbWdr",
                                children: e(i, {
                                    __fromCanvasComponent: !0,
                                    children: e(r, {
                                        children: e(p.p, {
                                            style: {
                                                "--font-selector": "SW50ZXItTWVkaXVt",
                                                "--framer-font-family": '"Inter", "Inter Placeholder", sans-serif',
                                                "--framer-font-size": "15px",
                                                "--framer-font-weight": "500",
                                                "--framer-letter-spacing": "-0.01em",
                                                "--framer-line-height": "2em",
                                                "--framer-text-alignment": "left",
                                                "--framer-text-color": "var(--extracted-r6o4lv, rgb(255, 255, 255))"
                                            },
                                            children: e(X, {
                                                href: {
                                                    hash: ":LKzTPkwFG",
                                                    webPageId: "Z9xpqCjmE"
                                                },
                                                motionChild: !0,
                                                nodeId: "P1andZj6J",
                                                openInNewTab: !1,
                                                relValues: [],
                                                scopeId: "gnmTpWXne",
                                                smoothScroll: !1,
                                                children: e(p.a, {
                                                    className: "framer-styles-preset-1aiv2r6",
                                                    "data-styles-preset": "hQWOM2asv",
                                                    children: "How It Works"
                                                })
                                            })
                                        })
                                    }),
                                    className: "framer-1fe8e68",
                                    fonts: ["Inter-Medium"],
                                    layoutDependency: u,
                                    layoutId: "P1andZj6J",
                                    style: {
                                        "--extracted-r6o4lv": "rgb(255, 255, 255)",
                                        "--framer-paragraph-spacing": "0px"
                                    },
                                    verticalAlignment: "top",
                                    withExternalLayout: !0,
                                    ...K({
                                        qnHMqSvJN: {
                                            children: e(r, {
                                                children: e(p.p, {
                                                    style: {
                                                        "--font-selector": "SW50ZXItTWVkaXVt",
                                                        "--framer-font-family": '"Inter", "Inter Placeholder", sans-serif',
                                                        "--framer-font-size": "15px",
                                                        "--framer-font-weight": "500",
                                                        "--framer-letter-spacing": "-0.01em",
                                                        "--framer-line-height": "2em",
                                                        "--framer-text-alignment": "left",
                                                        "--framer-text-color": "var(--extracted-r6o4lv, rgb(255, 255, 255))"
                                                    },
                                                    children: e(X, {
                                                        href: {
                                                            hash: ":FPoP1GpCA",
                                                            webPageId: "Z9xpqCjmE"
                                                        },
                                                        motionChild: !0,
                                                        nodeId: "P1andZj6J",
                                                        openInNewTab: !1,
                                                        relValues: [],
                                                        scopeId: "gnmTpWXne",
                                                        smoothScroll: !1,
                                                        children: e(p.a, {
                                                            className: "framer-styles-preset-1aiv2r6",
                                                            "data-styles-preset": "hQWOM2asv",
                                                            children: "How It Works"
                                                        })
                                                    })
                                                })
                                            })
                                        },
                                        sXVbkoiQ5: {
                                            children: e(r, {
                                                children: e(p.p, {
                                                    style: {
                                                        "--font-selector": "SW50ZXItTWVkaXVt",
                                                        "--framer-font-family": '"Inter", "Inter Placeholder", sans-serif',
                                                        "--framer-font-size": "11px",
                                                        "--framer-font-weight": "500",
                                                        "--framer-letter-spacing": "-0.01em",
                                                        "--framer-line-height": "2em",
                                                        "--framer-text-alignment": "left",
                                                        "--framer-text-color": "var(--extracted-r6o4lv, rgb(255, 255, 255))"
                                                    },
                                                    children: e(X, {
                                                        href: {
                                                            hash: ":feQACshiT",
                                                            webPageId: "Z9xpqCjmE"
                                                        },
                                                        motionChild: !0,
                                                        nodeId: "P1andZj6J",
                                                        openInNewTab: !1,
                                                        relValues: [],
                                                        scopeId: "gnmTpWXne",
                                                        smoothScroll: !1,
                                                        children: e(p.a, {
                                                            className: "framer-styles-preset-1aiv2r6",
                                                            "data-styles-preset": "hQWOM2asv",
                                                            children: "How It Works"
                                                        })
                                                    })
                                                })
                                            })
                                        }
                                    }, o, R)
                                })
                            }), e(p.div, {
                                className: "framer-oauqip",
                                "data-framer-name": "Inline Link",
                                layoutDependency: u,
                                layoutId: "kcg5jcyye",
                                style: {
                                    "--border-bottom-width": "0px",
                                    "--border-color": "rgba(0, 0, 0, 0)",
                                    "--border-left-width": "0px",
                                    "--border-right-width": "0px",
                                    "--border-style": "solid",
                                    "--border-top-width": "0px"
                                },
                                variants: {
                                    F9RUsMvIK: {
                                        "--border-bottom-width": "0px",
                                        "--border-left-width": "0px",
                                        "--border-right-width": "0px",
                                        "--border-top-width": "0px"
                                    },
                                    qnHMqSvJN: {
                                        "--border-bottom-width": "0px",
                                        "--border-left-width": "0px",
                                        "--border-right-width": "0px",
                                        "--border-top-width": "0px"
                                    },
                                    sXVbkoiQ5: {
                                        "--border-bottom-width": "0px",
                                        "--border-left-width": "0px",
                                        "--border-right-width": "0px",
                                        "--border-top-width": "0px"
                                    },
                                    UDOHaWLpP: {
                                        "--border-bottom-width": "1px",
                                        "--border-color": "rgb(34, 34, 34)",
                                        "--border-left-width": "0px",
                                        "--border-right-width": "0px",
                                        "--border-style": "solid",
                                        "--border-top-width": "0px"
                                    }
                                },
                                ...K({
                                    UDOHaWLpP: {
                                        "data-border": !0
                                    }
                                }, o, R),
                                children: e(i, {
                                    __fromCanvasComponent: !0,
                                    children: e(r, {
                                        children: e(p.p, {
                                            style: {
                                                "--font-selector": "SW50ZXItTWVkaXVt",
                                                "--framer-font-family": '"Inter", "Inter Placeholder", sans-serif',
                                                "--framer-font-size": "15px",
                                                "--framer-font-weight": "500",
                                                "--framer-letter-spacing": "-0.01em",
                                                "--framer-line-height": "2em",
                                                "--framer-text-alignment": "left",
                                                "--framer-text-color": "var(--extracted-r6o4lv, rgb(255, 255, 255))"
                                            },
                                            children: e(X, {
                                                href: {
                                                    hash: ":CsuD50u94",
                                                    webPageId: "Z9xpqCjmE"
                                                },
                                                motionChild: !0,
                                                nodeId: "SVwAIS42v",
                                                openInNewTab: !1,
                                                relValues: [],
                                                scopeId: "gnmTpWXne",
                                                smoothScroll: !1,
                                                children: e(p.a, {
                                                    className: "framer-styles-preset-1aiv2r6",
                                                    "data-styles-preset": "hQWOM2asv",
                                                    children: "Enterprise Solutions"
                                                })
                                            })
                                        })
                                    }),
                                    className: "framer-2n240h",
                                    fonts: ["Inter-Medium"],
                                    layoutDependency: u,
                                    layoutId: "SVwAIS42v",
                                    style: {
                                        "--extracted-r6o4lv": "rgb(255, 255, 255)",
                                        "--framer-paragraph-spacing": "0px"
                                    },
                                    verticalAlignment: "top",
                                    withExternalLayout: !0,
                                    ...K({
                                        qnHMqSvJN: {
                                            verticalAlignment: "center"
                                        },
                                        sXVbkoiQ5: {
                                            children: e(r, {
                                                children: e(p.p, {
                                                    style: {
                                                        "--font-selector": "SW50ZXItTWVkaXVt",
                                                        "--framer-font-family": '"Inter", "Inter Placeholder", sans-serif',
                                                        "--framer-font-size": "11px",
                                                        "--framer-font-weight": "500",
                                                        "--framer-letter-spacing": "-0.01em",
                                                        "--framer-line-height": "2em",
                                                        "--framer-text-alignment": "left",
                                                        "--framer-text-color": "var(--extracted-r6o4lv, rgb(255, 255, 255))"
                                                    },
                                                    children: e(X, {
                                                        href: {
                                                            hash: ":CsuD50u94",
                                                            webPageId: "Z9xpqCjmE"
                                                        },
                                                        motionChild: !0,
                                                        nodeId: "SVwAIS42v",
                                                        openInNewTab: !1,
                                                        relValues: [],
                                                        scopeId: "gnmTpWXne",
                                                        smoothScroll: !1,
                                                        children: e(p.a, {
                                                            className: "framer-styles-preset-1aiv2r6",
                                                            "data-styles-preset": "hQWOM2asv",
                                                            children: "Enterprise Solutions"
                                                        })
                                                    })
                                                })
                                            })
                                        },
                                        UDOHaWLpP: {
                                            verticalAlignment: "center"
                                        }
                                    }, o, R)
                                })
                            }), e(p.div, {
                                className: "framer-3xm5by",
                                "data-framer-name": "Inline Link",
                                layoutDependency: u,
                                layoutId: "SHtHdsqHr",
                                children: e(i, {
                                    __fromCanvasComponent: !0,
                                    children: e(r, {
                                        children: e(p.p, {
                                            style: {
                                                "--font-selector": "SW50ZXItTWVkaXVt",
                                                "--framer-font-family": '"Inter", "Inter Placeholder", sans-serif',
                                                "--framer-font-size": "15px",
                                                "--framer-font-weight": "500",
                                                "--framer-letter-spacing": "-0.01em",
                                                "--framer-line-height": "2em",
                                                "--framer-text-alignment": "left",
                                                "--framer-text-color": "var(--extracted-r6o4lv, rgb(255, 255, 255))"
                                            },
                                            children: e(X, {
                                                href: {
                                                    hash: ":SKMMJY2Am",
                                                    webPageId: "Z9xpqCjmE"
                                                },
                                                motionChild: !0,
                                                nodeId: "ZFt7YDOPh",
                                                openInNewTab: !1,
                                                relValues: [],
                                                scopeId: "gnmTpWXne",
                                                smoothScroll: !1,
                                                children: e(p.a, {
                                                    className: "framer-styles-preset-1aiv2r6",
                                                    "data-styles-preset": "hQWOM2asv",
                                                    children: "Sustainability"
                                                })
                                            })
                                        })
                                    }),
                                    className: "framer-ezbeye",
                                    fonts: ["Inter-Medium"],
                                    layoutDependency: u,
                                    layoutId: "ZFt7YDOPh",
                                    style: {
                                        "--extracted-r6o4lv": "rgb(255, 255, 255)",
                                        "--framer-paragraph-spacing": "0px"
                                    },
                                    verticalAlignment: "top",
                                    withExternalLayout: !0,
                                    ...K({
                                        qnHMqSvJN: {
                                            verticalAlignment: "center"
                                        },
                                        sXVbkoiQ5: {
                                            children: e(r, {
                                                children: e(p.p, {
                                                    style: {
                                                        "--font-selector": "SW50ZXItTWVkaXVt",
                                                        "--framer-font-family": '"Inter", "Inter Placeholder", sans-serif',
                                                        "--framer-font-size": "11px",
                                                        "--framer-font-weight": "500",
                                                        "--framer-letter-spacing": "-0.01em",
                                                        "--framer-line-height": "2em",
                                                        "--framer-text-alignment": "left",
                                                        "--framer-text-color": "var(--extracted-r6o4lv, rgb(255, 255, 255))"
                                                    },
                                                    children: e(X, {
                                                        href: {
                                                            hash: ":SKMMJY2Am",
                                                            webPageId: "Z9xpqCjmE"
                                                        },
                                                        motionChild: !0,
                                                        nodeId: "ZFt7YDOPh",
                                                        openInNewTab: !1,
                                                        relValues: [],
                                                        scopeId: "gnmTpWXne",
                                                        smoothScroll: !1,
                                                        children: e(p.a, {
                                                            className: "framer-styles-preset-1aiv2r6",
                                                            "data-styles-preset": "hQWOM2asv",
                                                            children: "Sustainability"
                                                        })
                                                    })
                                                })
                                            })
                                        },
                                        UDOHaWLpP: {
                                            verticalAlignment: "center"
                                        }
                                    }, o, R)
                                })
                            })]
                        })
                    }), e(p.div, {
                        className: "framer-n6rn29",
                        "data-framer-name": "Links",
                        layoutDependency: u,
                        layoutId: "Bzaj3EkSq",
                        children: t(p.div, {
                            className: "framer-cv54fh",
                            "data-framer-name": "Inline Link",
                            layoutDependency: u,
                            layoutId: "uWK86vbvB",
                            children: [e(X, {
                                href: {
                                    hash: ":r1eMr7ujb",
                                    webPageId: "Z9xpqCjmE"
                                },
                                motionChild: !0,
                                nodeId: "U1HXZTeqF",
                                openInNewTab: !1,
                                scopeId: "gnmTpWXne",
                                children: e(p.a, {
                                    className: "framer-icu0y9 framer-m2yrnn",
                                    layoutDependency: u,
                                    layoutId: "U1HXZTeqF",
                                    style: {
                                        "--1gzjjgl": Ut(U),
                                        background: "linear-gradient(270deg, rgb(104, 69, 183) 0%, rgb(53, 34, 96) 100%)",
                                        borderBottomLeftRadius: 20,
                                        borderBottomRightRadius: 20,
                                        borderTopLeftRadius: 20,
                                        borderTopRightRadius: 20
                                    },
                                    children: e(i, {
                                        __fromCanvasComponent: !0,
                                        children: e(r, {
                                            children: e(p.p, {
                                                style: {
                                                    "--font-selector": "SW50ZXItTWVkaXVt",
                                                    "--framer-font-family": '"Inter", "Inter Placeholder", sans-serif',
                                                    "--framer-font-size": "15px",
                                                    "--framer-font-weight": "500",
                                                    "--framer-letter-spacing": "-0.01em",
                                                    "--framer-line-height": "2em",
                                                    "--framer-text-alignment": "left",
                                                    "--framer-text-color": "var(--extracted-r6o4lv, rgb(255, 255, 255))"
                                                },
                                                children: "Try Beta"
                                            })
                                        }),
                                        className: "framer-98w0a9",
                                        fonts: ["Inter-Medium"],
                                        layoutDependency: u,
                                        layoutId: "SULLsvuCl",
                                        style: {
                                            "--extracted-r6o4lv": "rgb(255, 255, 255)",
                                            "--framer-paragraph-spacing": "0px"
                                        },
                                        verticalAlignment: "top",
                                        withExternalLayout: !0,
                                        ...K({
                                            sXVbkoiQ5: {
                                                children: e(r, {
                                                    children: e(p.p, {
                                                        style: {
                                                            "--font-selector": "SW50ZXItTWVkaXVt",
                                                            "--framer-font-family": '"Inter", "Inter Placeholder", sans-serif',
                                                            "--framer-font-size": "10px",
                                                            "--framer-font-weight": "500",
                                                            "--framer-letter-spacing": "-0.01em",
                                                            "--framer-line-height": "2em",
                                                            "--framer-text-alignment": "left",
                                                            "--framer-text-color": "var(--extracted-r6o4lv, rgb(255, 255, 255))"
                                                        },
                                                        children: "Try Beta"
                                                    })
                                                })
                                            }
                                        }, o, R)
                                    })
                                })
                            }), e(X, {
                                href: {
                                    hash: ":r1eMr7ujb",
                                    webPageId: "Z9xpqCjmE"
                                },
                                motionChild: !0,
                                nodeId: "uYL_TkY1b",
                                openInNewTab: !1,
                                scopeId: "gnmTpWXne",
                                children: e(p.a, {
                                    className: "framer-8n9ndk framer-m2yrnn",
                                    layoutDependency: u,
                                    layoutId: "uYL_TkY1b",
                                    style: {
                                        "--1gzjjgl": Ut(U),
                                        background: "linear-gradient(180deg, rgb(110, 73, 193) 0%, rgb(146, 107, 228) 49.009031003659906%, rgb(199, 149, 245) 100%)",
                                        borderBottomLeftRadius: 20,
                                        borderBottomRightRadius: 20,
                                        borderTopLeftRadius: 20,
                                        borderTopRightRadius: 20
                                    },
                                    children: e(i, {
                                        __fromCanvasComponent: !0,
                                        children: e(r, {
                                            children: e(p.p, {
                                                style: {
                                                    "--font-selector": "SW50ZXItTWVkaXVt",
                                                    "--framer-font-family": '"Inter", "Inter Placeholder", sans-serif',
                                                    "--framer-font-size": "15px",
                                                    "--framer-font-weight": "500",
                                                    "--framer-letter-spacing": "-0.01em",
                                                    "--framer-line-height": "2em",
                                                    "--framer-text-alignment": "left"
                                                },
                                                children: "Schedule Demo"
                                            })
                                        }),
                                        className: "framer-1s775f5",
                                        fonts: ["Inter-Medium"],
                                        layoutDependency: u,
                                        layoutId: "vcJeyDhEI",
                                        style: {
                                            "--framer-paragraph-spacing": "0px"
                                        },
                                        verticalAlignment: "top",
                                        withExternalLayout: !0,
                                        ...K({
                                            sXVbkoiQ5: {
                                                "data-highlight": !0,
                                                children: e(r, {
                                                    children: e(p.p, {
                                                        style: {
                                                            "--font-selector": "SW50ZXItQm9sZA==",
                                                            "--framer-font-family": '"Inter", "Inter Placeholder", sans-serif',
                                                            "--framer-font-size": "10px",
                                                            "--framer-font-weight": "700",
                                                            "--framer-letter-spacing": "-0.01em",
                                                            "--framer-line-height": "2em",
                                                            "--framer-text-alignment": "left"
                                                        },
                                                        children: "Schedule Demo"
                                                    })
                                                }),
                                                fonts: ["Inter-Bold"],
                                                onTap: ge
                                            }
                                        }, o, R)
                                    })
                                })
                            })]
                        })
                    })]
                })
            })
        })
    })
})
  , Co = ["@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }", ".framer-dolyA.framer-m2yrnn, .framer-dolyA .framer-m2yrnn { display: block; }", ".framer-dolyA.framer-1y22ezq { align-content: center; align-items: center; display: flex; flex-direction: row; flex-wrap: nowrap; gap: 20px; height: 64px; justify-content: flex-start; overflow: visible; padding: 20px; position: relative; width: 1200px; }", ".framer-dolyA .framer-tffeg2 { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 20px; height: min-content; justify-content: flex-start; overflow: visible; padding: 0px; position: relative; width: min-content; }", ".framer-dolyA .framer-11z5z9j { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 20px; height: min-content; justify-content: center; overflow: visible; padding: 0px; position: relative; width: min-content; }", ".framer-dolyA .framer-jjdjyd { aspect-ratio: 2.8260869565217392 / 1; flex: none; height: var(--framer-aspect-ratio-supported, 60px); position: relative; width: 172px; }", ".framer-dolyA .framer-88lvat { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 10px; height: 40px; justify-content: center; overflow: hidden; padding: 0px; position: relative; width: 40px; }", ".framer-dolyA .framer-j2eoz4, .framer-dolyA .framer-11a8cz8 { flex: none; height: 2px; overflow: hidden; position: relative; width: 20px; will-change: var(--framer-will-change-override, transform); }", ".framer-dolyA .framer-6du44v { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 32px; height: min-content; justify-content: center; overflow: hidden; padding: 0px; position: relative; width: 54%; }", ".framer-dolyA .framer-1qqpu5c, .framer-dolyA .framer-hj6ug4, .framer-dolyA .framer-1qiicn1, .framer-dolyA .framer-oauqip, .framer-dolyA .framer-3xm5by, .framer-dolyA .framer-cv54fh { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: visible; padding: 0px; position: relative; width: min-content; }", ".framer-dolyA .framer-12lwirj, .framer-dolyA .framer-8c5o1e, .framer-dolyA .framer-1fe8e68, .framer-dolyA .framer-2n240h, .framer-dolyA .framer-ezbeye, .framer-dolyA .framer-98w0a9, .framer-dolyA .framer-1s775f5 { -webkit-user-select: none; flex: none; height: auto; position: relative; user-select: none; white-space: pre; width: auto; }", ".framer-dolyA .framer-n6rn29 { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 0px; height: 30px; justify-content: center; overflow: hidden; padding: 0px; position: relative; width: 28%; }", ".framer-dolyA .framer-icu0y9 { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 0px; height: 30px; justify-content: center; overflow: visible; padding: var(--1gzjjgl); position: relative; text-decoration: none; width: 129px; }", ".framer-dolyA .framer-8n9ndk { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 0px; height: 30px; justify-content: center; overflow: visible; padding: var(--1gzjjgl); position: relative; text-decoration: none; width: 153px; }", ".framer-dolyA.framer-v-125cpj9.framer-1y22ezq { flex-direction: column; gap: 0px; overflow: hidden; padding: 0px; width: 390px; }", ".framer-dolyA.framer-v-125cpj9 .framer-tffeg2 { cursor: pointer; gap: unset; height: 64px; justify-content: space-between; order: 0; padding: 0px 10px 0px 20px; width: 100%; z-index: 2; }", ".framer-dolyA.framer-v-125cpj9 .framer-11z5z9j, .framer-dolyA.framer-v-125cpj9 .framer-hj6ug4, .framer-dolyA.framer-v-1lzzbp8 .framer-11z5z9j, .framer-dolyA.framer-v-1lzzbp8 .framer-1qqpu5c { order: 0; }", ".framer-dolyA.framer-v-125cpj9 .framer-88lvat, .framer-dolyA.framer-v-1lzzbp8 .framer-88lvat { height: 44px; order: 1; width: 44px; }", ".framer-dolyA.framer-v-125cpj9 .framer-6du44v { align-content: flex-start; align-items: flex-start; flex-direction: column; gap: 0px; justify-content: flex-start; order: 1; padding: 0px 20px 0px 20px; width: 100%; z-index: 2; }", ".framer-dolyA.framer-v-125cpj9 .framer-1qqpu5c, .framer-dolyA.framer-v-1lzzbp8 .framer-hj6ug4 { order: 1; }", ".framer-dolyA.framer-v-125cpj9 .framer-1qiicn1, .framer-dolyA.framer-v-125cpj9 .framer-n6rn29, .framer-dolyA.framer-v-1lzzbp8 .framer-1qiicn1 { order: 2; }", ".framer-dolyA.framer-v-125cpj9 .framer-oauqip { gap: 15px; height: 56px; justify-content: flex-start; order: 3; overflow: hidden; width: 100%; }", ".framer-dolyA.framer-v-125cpj9 .framer-3xm5by { gap: 15px; height: 56px; justify-content: flex-start; order: 4; overflow: hidden; width: 100%; }", ".framer-dolyA.framer-v-1lzzbp8.framer-1y22ezq { flex-direction: column; gap: 0px; height: min-content; max-height: calc(var(--framer-viewport-height, 100vh) * 1); overflow: auto; overscroll-behavior: contain; padding: 0px; width: min-content; }", ".framer-dolyA.framer-v-1lzzbp8 .framer-tffeg2 { cursor: pointer; gap: unset; height: 64px; justify-content: space-between; order: 0; padding: 0px 10px 0px 20px; width: 390px; z-index: 2; }", ".framer-dolyA.framer-v-1lzzbp8 .framer-6du44v { align-content: flex-start; align-items: flex-start; flex-direction: column; gap: 0px; justify-content: flex-start; order: 1; padding: 10px 20px 0px 20px; width: 390px; z-index: 2; }", ".framer-dolyA.framer-v-1lzzbp8 .framer-oauqip { height: 31px; justify-content: flex-start; order: 3; overflow: hidden; width: 100%; }", ".framer-dolyA.framer-v-1lzzbp8 .framer-3xm5by { gap: 15px; height: 30px; justify-content: flex-start; order: 4; overflow: hidden; width: 100%; }", ".framer-dolyA.framer-v-1lzzbp8 .framer-n6rn29 { gap: 34px; height: 100px; order: 2; padding: 50px; width: 303px; }", ".framer-dolyA.framer-v-vadf3e.framer-1y22ezq { gap: 8px; padding: 9px; width: 810px; }", ".framer-dolyA.framer-v-vadf3e .framer-jjdjyd { height: var(--framer-aspect-ratio-supported, 54px); order: 0; width: 151px; }", ".framer-dolyA.framer-v-vadf3e .framer-6du44v { gap: 22px; }", ".framer-dolyA.framer-v-vadf3e .framer-n6rn29 { width: 23%; }", ".framer-dolyA.framer-v-vadf3e .framer-cv54fh { width: 110%; }", ".framer-dolyA.framer-v-vadf3e .framer-icu0y9 { width: 70px; }", ".framer-dolyA.framer-v-vadf3e .framer-8n9ndk { width: 93px; }", ".framer-dolyA.framer-v-vadf3e .framer-1s775f5 { cursor: pointer; }", ".framer-dolyA.framer-v-45shry.framer-1y22ezq { overflow: hidden; }", ...Vt, '.framer-dolyA[data-hide-scrollbars="true"]::-webkit-scrollbar, .framer-dolyA [data-hide-scrollbars="true"]::-webkit-scrollbar { width: 0px; height: 0px; }', '.framer-dolyA[data-hide-scrollbars="true"]::-webkit-scrollbar-thumb, .framer-dolyA [data-hide-scrollbars="true"]::-webkit-scrollbar-thumb { background: transparent; }', '.framer-dolyA[data-hide-scrollbars="true"], .framer-dolyA [data-hide-scrollbars="true"] { scrollbar-width: none; }', '.framer-dolyA[data-border="true"]::after, .framer-dolyA [data-border="true"]::after { content: ""; border-width: var(--border-top-width, 0) var(--border-right-width, 0) var(--border-bottom-width, 0) var(--border-left-width, 0); border-color: var(--border-color, none); border-style: var(--border-style, none); width: 100%; height: 100%; position: absolute; box-sizing: border-box; left: 0; top: 0; border-radius: inherit; pointer-events: none; }']
  , He = _e(Fo, Co, "framer-dolyA")
  , tr = He;
He.displayName = "Navigation";
He.defaultProps = {
    height: 64,
    width: 1200
};
fe(He, {
    variant: {
        options: ["owpePC4Pv", "UDOHaWLpP", "qnHMqSvJN", "sXVbkoiQ5", "F9RUsMvIK"],
        optionTitles: ["Default", "Phone", "Phone Open", "Variant 4", "hidden"],
        title: "Variant",
        type: x.Enum
    },
    HnpxiRJex: {
        defaultValue: "10px",
        title: "Padding 2",
        type: x.Padding
    }
});
Se(He, [{
    explicitInter: !0,
    fonts: [{
        family: "Inter",
        source: "framer",
        style: "normal",
        unicodeRange: "U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F",
        url: "https://framerusercontent.com/assets/5A3Ce6C9YYmCjpQx9M4inSaKU.woff2",
        weight: "500"
    }, {
        family: "Inter",
        source: "framer",
        style: "normal",
        unicodeRange: "U+0301, U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116",
        url: "https://framerusercontent.com/assets/Qx95Xyt0Ka3SGhinnbXIGpEIyP4.woff2",
        weight: "500"
    }, {
        family: "Inter",
        source: "framer",
        style: "normal",
        unicodeRange: "U+1F00-1FFF",
        url: "https://framerusercontent.com/assets/6mJuEAguuIuMog10gGvH5d3cl8.woff2",
        weight: "500"
    }, {
        family: "Inter",
        source: "framer",
        style: "normal",
        unicodeRange: "U+0370-03FF",
        url: "https://framerusercontent.com/assets/xYYWaj7wCU5zSQH0eXvSaS19wo.woff2",
        weight: "500"
    }, {
        family: "Inter",
        source: "framer",
        style: "normal",
        unicodeRange: "U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF",
        url: "https://framerusercontent.com/assets/otTaNuNpVK4RbdlT7zDDdKvQBA.woff2",
        weight: "500"
    }, {
        family: "Inter",
        source: "framer",
        style: "normal",
        unicodeRange: "U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD",
        url: "https://framerusercontent.com/assets/d3tHnaQIAeqiE5hGcRw4mmgWYU.woff2",
        weight: "500"
    }, {
        family: "Inter",
        source: "framer",
        style: "normal",
        unicodeRange: "U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB",
        url: "https://framerusercontent.com/assets/DolVirEGb34pEXEp8t8FQBSK4.woff2",
        weight: "500"
    }, {
        family: "Inter",
        source: "framer",
        style: "normal",
        unicodeRange: "U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F",
        url: "https://framerusercontent.com/assets/DpPBYI0sL4fYLgAkX8KXOPVt7c.woff2",
        weight: "700"
    }, {
        family: "Inter",
        source: "framer",
        style: "normal",
        unicodeRange: "U+0301, U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116",
        url: "https://framerusercontent.com/assets/4RAEQdEOrcnDkhHiiCbJOw92Lk.woff2",
        weight: "700"
    }, {
        family: "Inter",
        source: "framer",
        style: "normal",
        unicodeRange: "U+1F00-1FFF",
        url: "https://framerusercontent.com/assets/1K3W8DizY3v4emK8Mb08YHxTbs.woff2",
        weight: "700"
    }, {
        family: "Inter",
        source: "framer",
        style: "normal",
        unicodeRange: "U+0370-03FF",
        url: "https://framerusercontent.com/assets/tUSCtfYVM1I1IchuyCwz9gDdQ.woff2",
        weight: "700"
    }, {
        family: "Inter",
        source: "framer",
        style: "normal",
        unicodeRange: "U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF",
        url: "https://framerusercontent.com/assets/VgYFWiwsAC5OYxAycRXXvhze58.woff2",
        weight: "700"
    }, {
        family: "Inter",
        source: "framer",
        style: "normal",
        unicodeRange: "U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD",
        url: "https://framerusercontent.com/assets/DXD0Q7LSl7HEvDzucnyLnGBHM.woff2",
        weight: "700"
    }, {
        family: "Inter",
        source: "framer",
        style: "normal",
        unicodeRange: "U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB",
        url: "https://framerusercontent.com/assets/GIryZETIX4IFypco5pYZONKhJIo.woff2",
        weight: "700"
    }]
}, ...St(Lt)], {
    supportsExplicitInterCodegen: !0
});
var Wo = {
    exports: {
        default: {
            type: "reactComponent",
            name: "FramergnmTpWXne",
            slots: [],
            annotations: {
                framerColorSyntax: "true",
                framerAutoSizeImages: "true",
                framerIntrinsicHeight: "64",
                framerIntrinsicWidth: "1200",
                framerVariables: '{"HnpxiRJex":"padding2"}',
                framerCanvasComponentVariantDetails: '{"propertyName":"variant","data":{"default":{"layout":["fixed","fixed"]},"UDOHaWLpP":{"layout":["fixed","fixed"]},"qnHMqSvJN":{"layout":["auto","auto"],"constraints":[null,null,null,"100vh"]},"sXVbkoiQ5":{"layout":["fixed","fixed"]},"F9RUsMvIK":{"layout":["fixed","fixed"]}}}',
                framerContractVersion: "1",
                framerComponentViewportWidth: "true",
                framerDisplayContentsDiv: "false",
                framerImmutableVariables: "true"
            }
        },
        Props: {
            type: "tsType",
            annotations: {
                framerContractVersion: "1"
            }
        },
        __FramerMetadata__: {
            type: "variable"
        }
    }
};
var Oo = ce(p.div)
  , Eo = {
    vqjq_gDvV: {
        hover: !0,
        pressed: !0
    }
}
  , Lo = ["vqjq_gDvV", "Trt2tAxdt", "BdFFQnJT_", "DrEOuWleU", "J_GwbDXLO"]
  , Vo = "framer-dF4iw"
  , No = {
    BdFFQnJT_: "framer-v-n6lcgg",
    DrEOuWleU: "framer-v-gmh4wz",
    J_GwbDXLO: "framer-v-1qhousb",
    Trt2tAxdt: "framer-v-ewm2fm",
    vqjq_gDvV: "framer-v-9ac87k"
};
function jt(a, ...m) {
    let d = {};
    return m?.forEach(h => h && Object.assign(d, a[h])),
    d
}
var Ao = {
    delay: 0,
    duration: .2,
    ease: [.44, 0, .56, 1],
    type: "tween"
}
  , Xo = {
    delay: 0,
    duration: 1,
    ease: [0, 0, 1, 1],
    type: "tween"
}
  , Uo = {
    opacity: 1,
    rotate: 360,
    rotateX: 0,
    rotateY: 0,
    scale: 1,
    skewX: 0,
    skewY: 0,
    x: 0,
    y: 0
}
  , jo = (a, m) => `translateX(-50%) ${m}`
  , Po = ({value: a, children: m}) => {
    let d = H(he)
      , h = a ?? d.transition
      , w = L( () => ({
        ...d,
        transition: h
    }), [JSON.stringify(h)]);
    return e(he.Provider, {
        value: w,
        children: m
    })
}
  , Mo = p.create(r)
  , qo = {
    Default: "vqjq_gDvV",
    Disabled: "BdFFQnJT_",
    Error: "J_GwbDXLO",
    Loading: "Trt2tAxdt",
    Success: "DrEOuWleU"
}
  , Ho = ({height: a, id: m, width: d, ...h}) => ({
    ...h,
    variant: qo[h.variant] ?? h.variant ?? "vqjq_gDvV"
})
  , Do = (a, m) => a.layoutDependency ? m.join("-") + a.layoutDependency : m.join("-")
  , Go = we(function(a, m) {
    let d = l(null)
      , h = m ?? d
      , w = ve()
      , {activeLocale: v, setLocale: B} = ke()
      , n = Te()
      , {style: F, className: Y, layoutId: C, variant: J, ...U} = Ho(a)
      , {baseVariant: j, classNames: o, clearLoadingGesture: ae, gestureHandlers: ne, gestureVariant: V, isLoading: R, setGestureState: O, setVariant: M, variants: D} = Ae({
        cycleOrder: Lo,
        defaultVariant: "vqjq_gDvV",
        enabledGestures: Eo,
        ref: h,
        variant: J,
        variantClassNames: No
    })
      , b = Do(a, D)
      , N = te(Vo, ...[])
      , Z = () => j !== "Trt2tAxdt"
      , E = () => j === "Trt2tAxdt";
    return e(be, {
        id: C ?? w,
        children: e(Mo, {
            animate: D,
            initial: !1,
            children: e(Po, {
                value: Ao,
                children: t(p.button, {
                    ...U,
                    ...ne,
                    className: te(N, "framer-9ac87k", Y, o),
                    "data-framer-name": "Default",
                    "data-reset": "button",
                    layoutDependency: b,
                    layoutId: "vqjq_gDvV",
                    ref: h,
                    style: {
                        background: "linear-gradient(270deg, rgb(104, 69, 183) 0%, rgb(53, 34, 96) 100%)",
                        backgroundColor: "rgba(0, 0, 0, 0)",
                        borderBottomLeftRadius: 10,
                        borderBottomRightRadius: 10,
                        borderTopLeftRadius: 10,
                        borderTopRightRadius: 10,
                        opacity: 1,
                        ...F
                    },
                    variants: {
                        "vqjq_gDvV-hover": {
                            backgroundColor: "rgba(0, 0, 0, 0)",
                            opacity: 1
                        },
                        "vqjq_gDvV-pressed": {
                            backgroundColor: "rgba(0, 0, 0, 0)",
                            opacity: 1
                        },
                        BdFFQnJT_: {
                            background: "linear-gradient(270deg, rgb(51, 51, 51) 0%, rgb(51, 51, 51) 100%)",
                            backgroundColor: "rgb(51, 51, 51)",
                            opacity: .5
                        },
                        DrEOuWleU: {
                            backgroundColor: "rgba(0, 0, 0, 0)",
                            opacity: 1
                        },
                        J_GwbDXLO: {
                            background: "linear-gradient(270deg, rgba(255, 34, 68, 0.15) 0%, rgba(255, 34, 68, 0.15) 100%)",
                            backgroundColor: "rgba(255, 34, 68, 0.15)",
                            opacity: 1
                        }
                    },
                    ...jt({
                        "vqjq_gDvV-hover": {
                            "data-framer-name": void 0
                        },
                        "vqjq_gDvV-pressed": {
                            "data-framer-name": void 0
                        },
                        BdFFQnJT_: {
                            "data-framer-name": "Disabled"
                        },
                        DrEOuWleU: {
                            "data-framer-name": "Success"
                        },
                        J_GwbDXLO: {
                            "data-framer-name": "Error"
                        },
                        Trt2tAxdt: {
                            "data-framer-name": "Loading"
                        }
                    }, j, V),
                    children: [Z() && e(i, {
                        __fromCanvasComponent: !0,
                        children: e(r, {
                            children: e(p.p, {
                                style: {
                                    "--font-selector": "SW50ZXItU2VtaUJvbGQ=",
                                    "--framer-font-family": '"Inter", "Inter Placeholder", sans-serif',
                                    "--framer-font-size": "14px",
                                    "--framer-font-weight": "600",
                                    "--framer-text-color": "var(--extracted-r6o4lv, rgb(255, 255, 255))"
                                },
                                children: "Submit"
                            })
                        }),
                        className: "framer-tmt9k",
                        fonts: ["Inter-SemiBold"],
                        layoutDependency: b,
                        layoutId: "mJMjUI9Q4",
                        style: {
                            "--extracted-r6o4lv": "rgb(255, 255, 255)",
                            "--framer-link-text-color": "rgb(0, 153, 255)",
                            "--framer-link-text-decoration": "underline"
                        },
                        variants: {
                            J_GwbDXLO: {
                                "--extracted-r6o4lv": "rgb(255, 34, 68)"
                            }
                        },
                        verticalAlignment: "top",
                        withExternalLayout: !0,
                        ...jt({
                            DrEOuWleU: {
                                children: e(r, {
                                    children: e(p.p, {
                                        style: {
                                            "--font-selector": "SW50ZXItU2VtaUJvbGQ=",
                                            "--framer-font-family": '"Inter", "Inter Placeholder", sans-serif',
                                            "--framer-font-size": "14px",
                                            "--framer-font-weight": "600",
                                            "--framer-text-color": "var(--extracted-r6o4lv, rgb(255, 255, 255))"
                                        },
                                        children: "Thank you"
                                    })
                                })
                            },
                            J_GwbDXLO: {
                                children: e(r, {
                                    children: e(p.p, {
                                        style: {
                                            "--font-selector": "SW50ZXItU2VtaUJvbGQ=",
                                            "--framer-font-family": '"Inter", "Inter Placeholder", sans-serif',
                                            "--framer-font-size": "14px",
                                            "--framer-font-weight": "600",
                                            "--framer-text-color": "var(--extracted-r6o4lv, rgb(255, 34, 68))"
                                        },
                                        children: "Something went wrong"
                                    })
                                })
                            }
                        }, j, V)
                    }), E() && e(p.div, {
                        className: "framer-ecj8ru",
                        "data-framer-name": "Spinner",
                        layoutDependency: b,
                        layoutId: "hIeB_xaFd",
                        style: {
                            mask: "url('https://framerusercontent.com/images/pGiXYozQ3mE4cilNOItfe2L2fUA.svg') alpha no-repeat center / cover add",
                            WebkitMask: "url('https://framerusercontent.com/images/pGiXYozQ3mE4cilNOItfe2L2fUA.svg') alpha no-repeat center / cover add"
                        },
                        children: e(Oo, {
                            __framer__loop: Uo,
                            __framer__loopEffectEnabled: !0,
                            __framer__loopRepeatDelay: 0,
                            __framer__loopRepeatType: "loop",
                            __framer__loopTransition: Xo,
                            __perspectiveFX: !1,
                            __smartComponentFX: !0,
                            __targetOpacity: 1,
                            className: "framer-17kxs1r",
                            "data-framer-name": "Conic",
                            layoutDependency: b,
                            layoutId: "g2uAtTZaX",
                            style: {
                                background: "conic-gradient(from 180deg at 50% 50%, rgb(68, 204, 255) 0deg, rgb(68, 204, 255) 360deg)",
                                backgroundColor: "rgb(68, 204, 255)",
                                mask: "none",
                                WebkitMask: "none"
                            },
                            variants: {
                                Trt2tAxdt: {
                                    background: "conic-gradient(from 0deg at 50% 50%, rgba(255, 255, 255, 0) 7.208614864864882deg, rgb(255, 255, 255) 342deg)",
                                    backgroundColor: "rgba(0, 0, 0, 0)",
                                    mask: "url('https://framerusercontent.com/images/pGiXYozQ3mE4cilNOItfe2L2fUA.svg') alpha no-repeat center / cover add",
                                    WebkitMask: "url('https://framerusercontent.com/images/pGiXYozQ3mE4cilNOItfe2L2fUA.svg') alpha no-repeat center / cover add"
                                }
                            },
                            children: e(p.div, {
                                className: "framer-axgpb5",
                                "data-framer-name": "Rounding",
                                layoutDependency: b,
                                layoutId: "EwkzHoiQE",
                                style: {
                                    backgroundColor: "rgb(255, 255, 255)",
                                    borderBottomLeftRadius: 1,
                                    borderBottomRightRadius: 1,
                                    borderTopLeftRadius: 1,
                                    borderTopRightRadius: 1
                                },
                                transformTemplate: jo
                            })
                        })
                    })]
                })
            })
        })
    })
})
  , Zo = ["@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }", ".framer-dF4iw.framer-1jh0ty6, .framer-dF4iw .framer-1jh0ty6 { display: block; }", ".framer-dF4iw.framer-9ac87k { align-content: center; align-items: center; cursor: pointer; display: flex; flex-direction: row; flex-wrap: nowrap; gap: 0px; height: 40px; justify-content: center; overflow: visible; padding: 0px; position: relative; width: 240px; }", ".framer-dF4iw .framer-tmt9k { -webkit-user-select: none; flex: none; height: auto; position: relative; user-select: none; white-space: pre; width: auto; }", ".framer-dF4iw .framer-ecj8ru { aspect-ratio: 1 / 1; flex: none; gap: 10px; height: var(--framer-aspect-ratio-supported, 20px); overflow: hidden; position: relative; width: 20px; }", ".framer-dF4iw .framer-17kxs1r { bottom: 0px; flex: none; left: 0px; overflow: visible; position: absolute; right: 0px; top: 0px; }", ".framer-dF4iw .framer-axgpb5 { aspect-ratio: 1 / 1; flex: none; height: var(--framer-aspect-ratio-supported, 2px); left: 50%; overflow: visible; position: absolute; top: 0px; width: 2px; }", ".framer-dF4iw.framer-v-ewm2fm.framer-9ac87k, .framer-dF4iw.framer-v-n6lcgg.framer-9ac87k, .framer-dF4iw.framer-v-gmh4wz.framer-9ac87k, .framer-dF4iw.framer-v-1qhousb.framer-9ac87k { cursor: unset; }", ".framer-dF4iw.framer-v-ewm2fm .framer-17kxs1r { overflow: hidden; }"]
  , De = _e(Go, Zo, "framer-dF4iw")
  , Yr = De;
De.displayName = "Button";
De.defaultProps = {
    height: 40,
    width: 240
};
fe(De, {
    variant: {
        options: ["vqjq_gDvV", "Trt2tAxdt", "BdFFQnJT_", "DrEOuWleU", "J_GwbDXLO"],
        optionTitles: ["Default", "Loading", "Disabled", "Success", "Error"],
        title: "Variant",
        type: x.Enum
    }
});
Se(De, [{
    explicitInter: !0,
    fonts: [{
        family: "Inter",
        source: "framer",
        style: "normal",
        unicodeRange: "U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F",
        url: "https://framerusercontent.com/assets/hyOgCu0Xnghbimh0pE8QTvtt2AU.woff2",
        weight: "600"
    }, {
        family: "Inter",
        source: "framer",
        style: "normal",
        unicodeRange: "U+0301, U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116",
        url: "https://framerusercontent.com/assets/NeGmSOXrPBfEFIy5YZeHq17LEDA.woff2",
        weight: "600"
    }, {
        family: "Inter",
        source: "framer",
        style: "normal",
        unicodeRange: "U+1F00-1FFF",
        url: "https://framerusercontent.com/assets/oYaAX5himiTPYuN8vLWnqBbfD2s.woff2",
        weight: "600"
    }, {
        family: "Inter",
        source: "framer",
        style: "normal",
        unicodeRange: "U+0370-03FF",
        url: "https://framerusercontent.com/assets/lEJLP4R0yuCaMCjSXYHtJw72M.woff2",
        weight: "600"
    }, {
        family: "Inter",
        source: "framer",
        style: "normal",
        unicodeRange: "U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF",
        url: "https://framerusercontent.com/assets/cRJyLNuTJR5jbyKzGi33wU9cqIQ.woff2",
        weight: "600"
    }, {
        family: "Inter",
        source: "framer",
        style: "normal",
        unicodeRange: "U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD",
        url: "https://framerusercontent.com/assets/1ZFS7N918ojhhd0nQWdj3jz4w.woff2",
        weight: "600"
    }, {
        family: "Inter",
        source: "framer",
        style: "normal",
        unicodeRange: "U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB",
        url: "https://framerusercontent.com/assets/A0Wcc7NgXMjUuFdquHDrIZpzZw0.woff2",
        weight: "600"
    }]
}], {
    supportsExplicitInterCodegen: !0
});
function Qo() {
    return _( () => {
        let a = document.getElementById("bgVideo");
        a && (a.setAttribute("playsinline", "true"),
        a.setAttribute("preload", "auto"),
        a.setAttribute("autoplay", "true"),
        a.setAttribute("muted", "true"),
        a.setAttribute("loop", "true"),
        a.style.width = "100%",
        a.style.height = "100%",
        a.style.objectFit = "cover",
        a.style.imageRendering = "auto",
        a.style.maxWidth = "none",
        a.style.maxHeight = "none")
    }
    , []),
    {}
}
function zr(a) {
    return m => (H(me),
    e(a, {
        ...m,
        ...Qo(m)
    }))
}
zr.displayName = "FixBgVideoOnly";
function Jo() {
    return {
        dangerouslySetInnerHTML: {
            __html: `
                DEMOCRATISE AI-DRIVEN STYLE 
                <span style="
                    display:inline-block;
                    font-size: 18px;
                    color: #8C52FF;
                    position: relative;
                    top: -4px;
                    margin: 0 6px;
                ">\u25A0</span>
                AND PERSONALIZATION TO 
                <span style="
                    display:inline-block;
                    font-size: 18px;
                    color: #8C52FF;
                    position: relative;
                    top: -4px;
                    margin: 0 6px;
                ">\u25A0</span>
                CREATE A MORE 
                <span style="
                    display:inline-block;
                    font-size: 18px;
                    color: #8C52FF;
                    position: relative;
                    top: -4px;
                    margin: 0 6px;
                ">\u25A0</span>
                SUSTAINABLE, CIRCULAR FASHION ECONOMY!
            `
        },
        style: {
            fontSize: 48,
            fontWeight: 900,
            lineHeight: 1.2,
            color: "white",
            whiteSpace: "normal"
        }
    }
}
function Br(a) {
    return m => (H(me),
    e(a, {
        ...m,
        ...Jo(m)
    }))
}
Br.displayName = "FixTextWithSquares";
function Ko() {
    let[a,m] = se(!1)
      , [d,h] = se(0);
    return _( () => {
        let w = () => {
            let v = y.scrollY;
            v < 1600 ? m(!1) : v > d ? m(!0) : m(!1),
            h(v)
        }
        ;
        return y.addEventListener("scroll", w),
        () => y.removeEventListener("scroll", w)
    }
    , [d]),
    {
        style: {
            opacity: a ? 0 : 1,
            y: a ? -100 : 0,
            transition: "opacity 0.4s ease, transform 0.4s ease",
            pointerEvents: a ? "none" : "auto",
            width: "100%",
            left: 0,
            right: 0,
            top: 0,
            position: "fixed",
            zIndex: 9999
        }
    }
}
function Ir(a) {
    return m => (H(me),
    e(a, {
        ...m,
        ...Ko(m)
    }))
}
Ir.displayName = "HideNavbarOnScroll";
function $o() {
    let a = useRef(null)
      , m = Pe(a, {
        amount: .5
    });
    return _( () => {
        let d = document.getElementById("videocontainer");
        if (!d)
            return;
        let h = d.querySelector("video");
        h && (m ? h.play().catch(w => console.log("Erro ao dar play:", w)) : h.pause())
    }
    , [m]),
    {
        ref: a
    }
}
function ar(a) {
    return m => (H(me),
    e(a, {
        ...m,
        ...$o(m)
    }))
}
ar.displayName = "PlayPauseInView";
function ei() {
    let a = l(null);
    return _( () => {
        a.current && (a.current.playbackRate = 1.2)
    }
    , []),
    {
        ref: a,
        autoPlay: !0,
        loop: !0,
        muted: !0
    }
}
function Fr(a) {
    return m => (H(me),
    e(a, {
        ...m,
        ...ei(m)
    }))
}
Fr.displayName = "SmoothLoop";
var ri = Me(tr)
  , ti = _t(Ie(tr, {
    nodeId: "op91TCGiN",
    override: Ir,
    scopeId: "Z9xpqCjmE"
}), Rr)
  , I = ce(g)
  , ai = Me(Ce)
  , ni = Ie(Ce, {
    nodeId: "EZN0350Sz",
    override: Fr,
    scopeId: "Z9xpqCjmE"
})
  , z = ce(p.div)
  , oi = Me(Fe)
  , ii = ce(Ie(p.div, {
    nodeId: "XXEezqMXu",
    override: zr,
    scopeId: "Z9xpqCjmE"
}))
  , Q = ce(i)
  , li = ce(Ie(p.div, {
    nodeId: "GC2YhhMmn",
    override: ar,
    scopeId: "Z9xpqCjmE"
}))
  , si = ce(Ie(p.div, {
    nodeId: "XazZSUVbK",
    override: ar,
    scopeId: "Z9xpqCjmE"
}))
  , fi = ce(Ie(p.div, {
    nodeId: "E0qGawwNT",
    override: Br,
    scopeId: "Z9xpqCjmE"
}))
  , mi = Me(Yr)
  , ci = {
    GxJaybyYR: "(min-width: 1400px)",
    hIWTqwvPm: "(min-width: 810px) and (max-width: 1399px)",
    jUuLb2ZS_: "(max-width: 809px)"
}
  , Ge = () => typeof document < "u"
  , pi = "framer-kfa3l"
  , di = {
    GxJaybyYR: "framer-v-uh1o9d",
    hIWTqwvPm: "framer-v-z10mb2",
    jUuLb2ZS_: "framer-v-f5yxu5"
}
  , P = (a, m) => `translateX(-50%) ${m}`
  , nr = {
    delay: 0,
    duration: 1,
    ease: [.44, 0, .56, 1],
    type: "tween"
}
  , or = {
    opacity: 1,
    rotate: 0,
    rotateX: 0,
    rotateY: 0,
    scale: 1,
    skewX: 0,
    skewY: 0,
    x: 0,
    y: 15
}
  , ir = (a, m) => `translate(-50%, -50%) ${m}`
  , Pt = {
    bounce: .25,
    delay: 0,
    duration: .45,
    type: "spring"
}
  , S = {
    opacity: 1,
    rotate: 0,
    rotateX: 0,
    rotateY: 0,
    scale: 1.1,
    skewX: 0,
    skewY: 0,
    transition: Pt
}
  , Ze = {
    opacity: 1,
    rotate: 0,
    rotateX: 0,
    rotateY: 0,
    scale: 1.5,
    skewX: 0,
    skewY: 0,
    transition: Pt
}
  , Cr = {
    delay: 0,
    duration: 3,
    ease: [.44, 0, .56, 1],
    type: "tween"
}
  , Wr = {
    opacity: 0,
    rotate: 0,
    rotateX: 0,
    rotateY: 0,
    scale: .4,
    skewX: 0,
    skewY: 0,
    x: 0,
    y: 0
}
  , hi = (a, m, d) => {
    switch (a.state) {
    case "success":
        return m.success ?? d;
    case "pending":
        return m.pending ?? d;
    case "error":
        return m.error ?? d;
    case "incomplete":
        return m.incomplete ?? d
    }
}
  , gi = ({value: a}) => yt() ? null : e("style", {
    dangerouslySetInnerHTML: {
        __html: a
    },
    "data-framer-html-style": ""
})
  , xi = {
    Desktop: "GxJaybyYR",
    Phone: "jUuLb2ZS_",
    Tablet: "hIWTqwvPm"
}
  , ui = ({height: a, id: m, width: d, ...h}) => ({
    ...h,
    variant: xi[h.variant] ?? h.variant ?? "GxJaybyYR"
})
  , wi = we(function(a, m) {
    let d = l(null)
      , h = m ?? d
      , w = ve()
      , {activeLocale: v, setLocale: B} = ke()
      , n = Te()
      , {style: F, className: Y, layoutId: C, variant: J, ...U} = ui(a)
      , j = L( () => Rt(void 0, v), [void 0, v]);
    xt(j);
    let[o,ae] = kt(J, ci, !1)
      , ne = void 0
      , R = te(pi, ...[])
      , O = c("RtiW4BHW6")
      , M = l(null)
      , D = l(null)
      , b = c("rQDxBWB_3")
      , u = l(null)
      , N = l(null)
      , Z = l(null)
      , E = () => !Ge() || o === "jUuLb2ZS_"
      , $ = c("f7swpG67i")
      , ge = l(null)
      , W = c("V9O6sCVTl")
      , oe = l(null)
      , q = c("XXEezqMXu")
      , ee = l(null)
      , xe = c("KlOJNVF_u")
      , pe = l(null)
      , de = c("KeJe0B_xM")
      , sr = c("NUB0U5ILA")
      , G = l(null)
      , Oe = c("OihehVzHx")
      , fr = l(null)
      , ie = l(null)
      , Re = c("WaP13SeO9")
      , Ee = l(null)
      , le = l(null)
      , Le = l(null)
      , je = l(null)
      , Qe = l(null)
      , Je = l(null)
      , A = c("MMxsase0y")
      , Mt = c("YFODfJezE")
      , qt = c("pHhhxPUZT")
      , Ht = c("g6aZBJv2W")
      , Dt = c("GYnlg6mcJ")
      , Gt = c("nD_oq8kR9")
      , Or = l(null)
      , Zt = c("hgs8BSARo")
      , Qt = c("VpZxxwxd0")
      , Jt = l(null)
      , Kt = c("FPoP1GpCA")
      , $t = l(null)
      , ea = c("dUsdg9oRi")
      , mr = l(null)
      , ra = c("keJkBAn19")
      , ta = l(null)
      , aa = c("sZldjcy7U")
      , na = l(null)
      , Er = l(null)
      , oa = c("qND4WuigO")
      , Lr = l(null)
      , ia = c("gruiAZGPS")
      , la = c("rNBQ8j5Sa")
      , sa = l(null)
      , Vr = l(null)
      , fa = c("yrlahjWCL")
      , Nr = l(null)
      , ma = c("aNOtpQJaa")
      , re = () => !Ge() || o === "hIWTqwvPm"
      , ca = c("DIAOEWH49")
      , pa = l(null)
      , da = c("ViDjXMLcb")
      , Ar = l(null)
      , ha = c("GC2YhhMmn")
      , ga = l(null)
      , xa = c("n3A85bMFv")
      , ua = l(null)
      , wa = c("MeOBuvVJu")
      , ya = c("zptrXyLRx")
      , cr = l(null)
      , va = c("yoBjMEn3L")
      , ba = l(null)
      , Xr = l(null)
      , ka = c("gZtleereA")
      , Ur = l(null)
      , Ve = l(null)
      , jr = l(null)
      , Pr = l(null)
      , Mr = l(null)
      , qr = l(null)
      , _a = c("fts6RYc2p")
      , Ta = c("tgMKJJexi")
      , Sa = c("C60W1w7uc")
      , Ra = c("FAYzCzeLQ")
      , Ya = c("SJ1PW_dV3")
      , za = c("AqL2QhPij")
      , Hr = l(null)
      , Ba = c("aI1wAp5Ip")
      , Ia = c("grkLnkCXw")
      , Fa = l(null)
      , Ca = c("feQACshiT")
      , pr = l(null)
      , Wa = c("NCdCPURSf")
      , Oa = l(null)
      , Ea = c("Y6X5CXx3l")
      , La = l(null)
      , Dr = l(null)
      , Va = c("inM0vBLuY")
      , Gr = l(null)
      , Na = c("SNjiRs7WN")
      , Aa = c("zDyR2DHIK")
      , Xa = l(null)
      , Zr = l(null)
      , Ua = c("RcK3G_P5Q")
      , Qr = l(null)
      , ja = c("fK12ljxbJ")
      , ue = () => Ge() ? !["hIWTqwvPm", "jUuLb2ZS_"].includes(o) : !0
      , Pa = c("Sqxo3LhNr")
      , Ma = l(null)
      , qa = c("uOu3oCaP7")
      , Jr = l(null)
      , Ha = c("XazZSUVbK")
      , Da = l(null)
      , Ga = c("AUHMKHElg")
      , Za = l(null)
      , Qa = c("UKmMcUkWB")
      , Ja = c("S9UTsr8Xg")
      , Ke = l(null)
      , Ka = c("pmcqn1EJe")
      , $a = l(null)
      , en = c("piA7okTsE")
      , rn = l(null)
      , tn = c("kuJkQxXEy")
      , an = l(null)
      , Kr = l(null)
      , Ne = l(null)
      , $r = l(null)
      , et = l(null)
      , rt = l(null)
      , tt = l(null)
      , nn = c("WnnjXPlmc")
      , on = c("Hhtx7SE02")
      , ln = c("e31u_zqTJ")
      , sn = c("ojpGpfRV5")
      , fn = c("JRZezuxbF")
      , mn = c("JSyJmcgae")
      , at = l(null)
      , cn = c("fmci_4tn7")
      , pn = c("Nza3o0fvp")
      , dn = l(null)
      , hn = c("LKzTPkwFG")
      , gn = l(null)
      , xn = c("GU_1L_sU6")
      , dr = l(null)
      , un = c("KMRS0dvGi")
      , wn = l(null)
      , nt = l(null)
      , yn = c("F7SP3yteX")
      , vn = c("VJHWmCfBR")
      , bn = l(null)
      , kn = c("oyKN_ut7y")
      , _n = l(null)
      , ot = l(null)
      , Tn = c("H0NpQuOUx")
      , Sn = c("Zy2Op13O0")
      , Rn = l(null)
      , Yn = c("KJfVaoeea")
      , zn = l(null)
      , Bn = c("CsuD50u94")
      , In = l(null)
      , Fn = c("yrCYqJm90")
      , Cn = l(null)
      , hr = l(null)
      , Wn = c("no8GiZ_UF")
      , it = l(null)
      , On = c("p_2hSLzC2")
      , gr = l(null)
      , En = c("fzwJNpn4P")
      , Ln = c("SKMMJY2Am")
      , lt = l(null)
      , st = l(null)
      , Vn = c("u3Cxga2lK")
      , ft = l(null)
      , Nn = c("g1NviVPYF")
      , mt = l(null)
      , An = c("qHMzfkRj6")
      , ct = l(null)
      , Xn = c("E0qGawwNT")
      , Un = l(null)
      , pt = () => Ge() ? o !== "hIWTqwvPm" : !0
      , jn = c("XsAlzgEZr")
      , dt = () => Ge() ? o !== "jUuLb2ZS_" : !0
      , Pn = c("X07d10DY5")
      , Mn = l(null)
      , qn = c("r1eMr7ujb")
      , Hn = l(null)
      , Dn = c("APx6DtMxl")
      , Gn = l(null);
    return wt({}),
    e(ut.Provider, {
        value: {
            primaryVariantId: "GxJaybyYR",
            variantClassNames: di
        },
        children: t(be, {
            id: C ?? w,
            children: [e(gi, {
                value: "html body { background: rgb(0, 1, 0); }"
            }), t(p.div, {
                ...U,
                className: te(R, "framer-uh1o9d", Y),
                ref: h,
                style: {
                    ...F
                },
                children: [e(ze, {
                    height: 64,
                    width: `min(100vw, ${n?.width || "100vw"})`,
                    y: 0,
                    children: e(f, {
                        breakpoint: o,
                        overrides: {
                            hIWTqwvPm: {
                                transformTemplate: void 0
                            },
                            jUuLb2ZS_: {
                                transformTemplate: void 0
                            }
                        },
                        children: e(Be, {
                            className: "framer-s1041m-container",
                            id: "s1041m",
                            layoutScroll: !0,
                            nodeId: "op91TCGiN",
                            rendersWithMotion: !0,
                            scopeId: "Z9xpqCjmE",
                            transformTemplate: P,
                            children: e(f, {
                                breakpoint: o,
                                overrides: {
                                    hIWTqwvPm: {
                                        style: {
                                            height: "100%",
                                            maxWidth: "100%",
                                            width: "100%"
                                        },
                                        variant: "sXVbkoiQ5"
                                    },
                                    jUuLb2ZS_: {
                                        style: {
                                            height: "100%",
                                            maxWidth: "100%",
                                            width: "100%"
                                        },
                                        variant: "UDOHaWLpP"
                                    }
                                },
                                children: e(ti, {
                                    height: "100%",
                                    HnpxiRJex: "0px",
                                    id: "op91TCGiN",
                                    layoutId: "op91TCGiN",
                                    style: {
                                        maxWidth: "100%",
                                        width: "100%"
                                    },
                                    variant: "owpePC4Pv",
                                    width: "100%"
                                })
                            })
                        })
                    })
                }), e("div", {
                    className: "framer-byykkr",
                    "data-framer-name": "logo inicial",
                    id: O,
                    ref: M,
                    children: e("div", {
                        className: "framer-i1t814",
                        "data-framer-name": "scroll container",
                        children: t("div", {
                            className: "framer-25cz4n",
                            children: [e(f, {
                                breakpoint: o,
                                overrides: {
                                    hIWTqwvPm: {
                                        __framer__spring: {
                                            damping: 60,
                                            delay: 0,
                                            duration: .3,
                                            ease: [.44, 0, .56, 1],
                                            mass: 1,
                                            stiffness: 500,
                                            type: "spring"
                                        },
                                        __framer__transformTargets: [{
                                            target: {
                                                opacity: 1,
                                                rotate: 0,
                                                rotateX: 0,
                                                rotateY: 0,
                                                scale: 1,
                                                skewX: 0,
                                                skewY: 0,
                                                x: 0,
                                                y: 0
                                            }
                                        }, {
                                            ref: u,
                                            target: {
                                                opacity: 0,
                                                rotate: 0,
                                                rotateX: 0,
                                                rotateY: 0,
                                                scale: 0,
                                                skewX: 0,
                                                skewY: 0,
                                                x: 0,
                                                y: 0
                                            }
                                        }],
                                        background: {
                                            alt: "",
                                            fit: "fit",
                                            loading: s((n?.y || 0) + 0 + 0 + 0 + 0 + 0 + 0 + 346),
                                            pixelHeight: 3316,
                                            pixelWidth: 13251,
                                            positionX: "center",
                                            positionY: "center",
                                            src: "https://framerusercontent.com/images/LLMFzYCMjhoQUZxaand9vV2QA.png"
                                        }
                                    },
                                    jUuLb2ZS_: {
                                        __framer__spring: void 0,
                                        __framer__transformTargets: [{
                                            target: {
                                                opacity: 1,
                                                rotate: 0,
                                                rotateX: 0,
                                                rotateY: 0,
                                                scale: 1,
                                                skewX: 0,
                                                skewY: 0,
                                                x: 0,
                                                y: 0
                                            }
                                        }, {
                                            ref: N,
                                            target: {
                                                opacity: 0,
                                                rotate: 0,
                                                rotateX: 0,
                                                rotateY: 0,
                                                scale: 0,
                                                skewX: 0,
                                                skewY: 0,
                                                x: 0,
                                                y: 0
                                            }
                                        }],
                                        background: {
                                            alt: "",
                                            fit: "fit",
                                            loading: s((n?.y || 0) + 0 + 0 + 0 + 0 + 0 + 0 + 208),
                                            pixelHeight: 3316,
                                            pixelWidth: 13251,
                                            positionX: "center",
                                            positionY: "center",
                                            src: "https://framerusercontent.com/images/LLMFzYCMjhoQUZxaand9vV2QA.png"
                                        }
                                    }
                                },
                                children: e(I, {
                                    __framer__spring: {
                                        bounce: .2,
                                        damping: 60,
                                        delay: 0,
                                        duration: .3,
                                        durationBasedSpring: !0,
                                        ease: [.44, 0, .56, 1],
                                        mass: 1,
                                        stiffness: 500,
                                        type: "spring"
                                    },
                                    __framer__styleTransformEffectEnabled: !0,
                                    __framer__transformTargets: [{
                                        target: {
                                            opacity: 1,
                                            rotate: 0,
                                            rotateX: 0,
                                            rotateY: 0,
                                            scale: 1,
                                            skewX: 0,
                                            skewY: 0,
                                            x: 0,
                                            y: 0
                                        }
                                    }, {
                                        ref: D,
                                        target: {
                                            opacity: 1,
                                            rotate: 0,
                                            rotateX: 0,
                                            rotateY: 0,
                                            scale: 0,
                                            skewX: 0,
                                            skewY: 0,
                                            x: 0,
                                            y: 0
                                        }
                                    }],
                                    __framer__transformTrigger: "onScrollTarget",
                                    __framer__transformViewportThreshold: 1,
                                    __perspectiveFX: !1,
                                    __targetOpacity: 1,
                                    background: {
                                        alt: "",
                                        fit: "fit",
                                        loading: s((n?.y || 0) + 0 + 0 + 0 + 0 + 0 + 0 + 150),
                                        pixelHeight: 3316,
                                        pixelWidth: 13251,
                                        positionX: "center",
                                        positionY: "center",
                                        src: "https://framerusercontent.com/images/LLMFzYCMjhoQUZxaand9vV2QA.png"
                                    },
                                    className: "framer-goticv",
                                    id: b,
                                    ref: Z
                                })
                            }), e(ze, {
                                children: e(f, {
                                    breakpoint: o,
                                    overrides: {
                                        hIWTqwvPm: {
                                            style: {
                                                scale: 1.5
                                            }
                                        }
                                    },
                                    children: e(Be, {
                                        className: "framer-beccjk-container",
                                        id: "beccjk",
                                        isAuthoredByUser: !0,
                                        isModuleExternal: !0,
                                        nodeId: "EZN0350Sz",
                                        rendersWithMotion: !0,
                                        scopeId: "Z9xpqCjmE",
                                        children: e(f, {
                                            breakpoint: o,
                                            overrides: {
                                                hIWTqwvPm: {
                                                    video: "https://framerusercontent.com/assets/sBcIfkTid8jykLHIOsoyPKKQ.mp4"
                                                },
                                                jUuLb2ZS_: {
                                                    video: "https://framerusercontent.com/assets/sBcIfkTid8jykLHIOsoyPKKQ.mp4"
                                                }
                                            },
                                            children: e(ni, {
                                                frameRate: 60,
                                                height: "100%",
                                                id: "EZN0350Sz",
                                                imageFit: "contain",
                                                images: [],
                                                layoutId: "EZN0350Sz",
                                                mode: "video",
                                                posterEnabled: !1,
                                                scrollAreaHeight: 1e3,
                                                sequenceStartOffset: 0,
                                                style: {
                                                    height: "100%",
                                                    width: "100%"
                                                },
                                                triggerPosition: "text-align-top",
                                                video: "https://framerusercontent.com/assets/eTzu4qklCp3YL04TJK7aqEudic.mp4",
                                                width: "100%"
                                            })
                                        })
                                    })
                                })
                            }), e(z, {
                                __framer__loop: or,
                                __framer__loopEffectEnabled: !0,
                                __framer__loopPauseOffscreen: !0,
                                __framer__loopRepeatDelay: 0,
                                __framer__loopRepeatType: "mirror",
                                __framer__loopTransition: nr,
                                __perspectiveFX: !1,
                                __targetOpacity: 1,
                                className: "framer-1chij47",
                                children: e(f, {
                                    breakpoint: o,
                                    overrides: {
                                        hIWTqwvPm: {
                                            __framer__transformTargets: [{
                                                target: {
                                                    opacity: 1,
                                                    rotate: 0,
                                                    rotateX: 0,
                                                    rotateY: 0,
                                                    scale: 1,
                                                    skewX: 0,
                                                    skewY: 0,
                                                    x: 0,
                                                    y: 0
                                                }
                                            }, {
                                                ref: u,
                                                target: {
                                                    opacity: 0,
                                                    rotate: 0,
                                                    rotateX: 0,
                                                    rotateY: 0,
                                                    scale: 0,
                                                    skewX: 0,
                                                    skewY: 0,
                                                    x: 0,
                                                    y: 0
                                                }
                                            }],
                                            background: {
                                                alt: "",
                                                fit: "fill",
                                                loading: s((n?.y || 0) + 0 + 0 + 0 + 0 + 0 + 0 + 0 + 1085.6 + 2),
                                                pixelHeight: 810,
                                                pixelWidth: 1440,
                                                sizes: "68px",
                                                src: "https://framerusercontent.com/images/acqW8Kz2g9r3WrtDGNrX48mxgs.svg",
                                                srcSet: "https://framerusercontent.com/images/acqW8Kz2g9r3WrtDGNrX48mxgs.svg?scale-down-to=512 512w,https://framerusercontent.com/images/acqW8Kz2g9r3WrtDGNrX48mxgs.svg?scale-down-to=1024 1024w,https://framerusercontent.com/images/acqW8Kz2g9r3WrtDGNrX48mxgs.svg 1440w"
                                            }
                                        },
                                        jUuLb2ZS_: {
                                            __framer__spring: void 0,
                                            __framer__transformTargets: [{
                                                target: {
                                                    opacity: 1,
                                                    rotate: 0,
                                                    rotateX: 0,
                                                    rotateY: 0,
                                                    scale: 1,
                                                    skewX: 0,
                                                    skewY: 0,
                                                    x: 0,
                                                    y: 0
                                                }
                                            }, {
                                                ref: N,
                                                target: {
                                                    opacity: 0,
                                                    rotate: 0,
                                                    rotateX: 0,
                                                    rotateY: 0,
                                                    scale: 0,
                                                    skewX: 0,
                                                    skewY: 0,
                                                    x: 0,
                                                    y: 0
                                                }
                                            }],
                                            background: {
                                                alt: "",
                                                fit: "fill",
                                                loading: s((n?.y || 0) + 0 + 0 + 0 + 0 + 0 + 0 + 0 + 673 + 34),
                                                pixelHeight: 810,
                                                pixelWidth: 1440,
                                                sizes: "40px",
                                                src: "https://framerusercontent.com/images/acqW8Kz2g9r3WrtDGNrX48mxgs.svg",
                                                srcSet: "https://framerusercontent.com/images/acqW8Kz2g9r3WrtDGNrX48mxgs.svg?scale-down-to=512 512w,https://framerusercontent.com/images/acqW8Kz2g9r3WrtDGNrX48mxgs.svg?scale-down-to=1024 1024w,https://framerusercontent.com/images/acqW8Kz2g9r3WrtDGNrX48mxgs.svg 1440w"
                                            }
                                        }
                                    },
                                    children: e(I, {
                                        __framer__spring: {
                                            damping: 60,
                                            delay: 0,
                                            duration: .3,
                                            ease: [.44, 0, .56, 1],
                                            mass: 1,
                                            stiffness: 500,
                                            type: "spring"
                                        },
                                        __framer__styleTransformEffectEnabled: !0,
                                        __framer__transformTargets: [{
                                            target: {
                                                opacity: 1,
                                                rotate: 0,
                                                rotateX: 0,
                                                rotateY: 0,
                                                scale: 1,
                                                skewX: 0,
                                                skewY: 0,
                                                x: 0,
                                                y: 0
                                            }
                                        }, {
                                            ref: D,
                                            target: {
                                                opacity: 1,
                                                rotate: 0,
                                                rotateX: 0,
                                                rotateY: 0,
                                                scale: 0,
                                                skewX: 0,
                                                skewY: 0,
                                                x: 0,
                                                y: 0
                                            }
                                        }],
                                        __framer__transformTrigger: "onScrollTarget",
                                        __framer__transformViewportThreshold: 1,
                                        __perspectiveFX: !1,
                                        __targetOpacity: 1,
                                        background: {
                                            alt: "",
                                            fit: "fill",
                                            loading: s((n?.y || 0) + 0 + 0 + 0 + 0 + 0 + 0 + 0 + 660 + 67),
                                            pixelHeight: 810,
                                            pixelWidth: 1440,
                                            sizes: "82px",
                                            src: "https://framerusercontent.com/images/acqW8Kz2g9r3WrtDGNrX48mxgs.svg",
                                            srcSet: "https://framerusercontent.com/images/acqW8Kz2g9r3WrtDGNrX48mxgs.svg?scale-down-to=512 512w,https://framerusercontent.com/images/acqW8Kz2g9r3WrtDGNrX48mxgs.svg?scale-down-to=1024 1024w,https://framerusercontent.com/images/acqW8Kz2g9r3WrtDGNrX48mxgs.svg 1440w"
                                        },
                                        className: "framer-11yv9vs"
                                    })
                                })
                            })]
                        })
                    })
                }), E() && t("div", {
                    className: "framer-12ibgdq hidden-uh1o9d hidden-z10mb2",
                    "data-framer-name": "wrapper",
                    id: $,
                    ref: ge,
                    children: [t(z, {
                        __framer__spring: {
                            bounce: .2,
                            damping: 60,
                            delay: 0,
                            duration: .3,
                            durationBasedSpring: !0,
                            ease: [.44, 0, .56, 1],
                            mass: 1,
                            stiffness: 500,
                            type: "spring"
                        },
                        __framer__styleTransformEffectEnabled: !0,
                        __framer__transformTargets: [{
                            target: {
                                opacity: .5,
                                rotate: 0,
                                rotateX: 0,
                                rotateY: 0,
                                scale: 0,
                                skewX: 0,
                                skewY: 0,
                                x: 0,
                                y: 0
                            }
                        }, {
                            target: {
                                opacity: 1,
                                rotate: 0,
                                rotateX: 0,
                                rotateY: 0,
                                scale: 1,
                                skewX: 0,
                                skewY: 0,
                                x: 0,
                                y: 0
                            }
                        }],
                        __framer__transformTrigger: "onInView",
                        __perspectiveFX: !1,
                        __targetOpacity: 1,
                        className: "framer-13k1162",
                        "data-framer-name": "video styles",
                        id: W,
                        ref: N,
                        children: [t("div", {
                            className: "framer-15sb1cc",
                            children: [e("div", {
                                className: "framer-yg2dgm",
                                children: e(i, {
                                    __fromCanvasComponent: !0,
                                    children: e(r, {
                                        children: e("h2", {
                                            style: {
                                                "--font-selector": "R0Y7Q2hhdSBQaGlsb21lbmUgT25lLXJlZ3VsYXI=",
                                                "--framer-font-family": '"Chau Philomene One", "Chau Philomene One Placeholder", sans-serif',
                                                "--framer-font-open-type-features": "'cv01' on, 'cv09' on, 'cv11' on, 'cv05' on, 'ss03' on",
                                                "--framer-font-size": "14px",
                                                "--framer-letter-spacing": "-0.03em",
                                                "--framer-line-height": "1em",
                                                "--framer-text-alignment": "center",
                                                "--framer-text-color": "var(--token-8961fb69-0ea3-46ab-8b8e-1f9187ebd1a9, rgb(255, 255, 255))"
                                            },
                                            children: "WELCOME TO STYLEGENIE"
                                        })
                                    }),
                                    className: "framer-xdcg00",
                                    fonts: ["GF;Chau Philomene One-regular"],
                                    id: "xdcg00",
                                    verticalAlignment: "top",
                                    withExternalLayout: !0
                                })
                            }), e("div", {
                                className: "framer-16o19yu",
                                children: e(i, {
                                    __fromCanvasComponent: !0,
                                    children: t(r, {
                                        children: [e("p", {
                                            style: {
                                                "--font-selector": "R0Y7QmV2YW4tcmVndWxhcg==",
                                                "--framer-font-family": '"Bevan", "Bevan Placeholder", serif',
                                                "--framer-font-open-type-features": "'cv09' on, 'cv01' on, 'cv05' on, 'ss03' on",
                                                "--framer-font-size": "19px",
                                                "--framer-letter-spacing": "-0.01em",
                                                "--framer-line-height": "1.1em",
                                                "--framer-text-alignment": "center",
                                                "--framer-text-color": "rgb(255, 252, 252)"
                                            },
                                            children: "UNLOCK THE POWER OF"
                                        }), e("p", {
                                            style: {
                                                "--font-selector": "R0Y7QmV2YW4tcmVndWxhcg==",
                                                "--framer-font-family": '"Bevan", "Bevan Placeholder", serif',
                                                "--framer-font-open-type-features": "'cv09' on, 'cv01' on, 'cv05' on, 'ss03' on",
                                                "--framer-font-size": "19px",
                                                "--framer-letter-spacing": "-0.01em",
                                                "--framer-line-height": "1.1em",
                                                "--framer-text-alignment": "center",
                                                "--framer-text-color": "rgb(255, 252, 252)"
                                            },
                                            children: "AI-DRIVEN PERSONAL STYLE"
                                        })]
                                    }),
                                    className: "framer-kg1clb",
                                    fonts: ["GF;Bevan-regular"],
                                    verticalAlignment: "top",
                                    withExternalLayout: !0
                                })
                            })]
                        }), t("div", {
                            className: "framer-1ruvm1x",
                            children: [e(f, {
                                breakpoint: o,
                                overrides: {
                                    jUuLb2ZS_: {
                                        background: {
                                            alt: "",
                                            fit: "fill",
                                            loading: s((n?.y || 0) + 0 + 2200 + 0 + 0 + 0 + 180.1961 + 231.6078 - 94),
                                            pixelHeight: 1440,
                                            pixelWidth: 1440,
                                            src: "https://framerusercontent.com/images/wEDaJSqh3MsJnu67DrLfBckNiOQ.gif"
                                        }
                                    }
                                },
                                children: e(g, {
                                    background: {
                                        alt: "",
                                        fit: "fill",
                                        pixelHeight: 1440,
                                        pixelWidth: 1440,
                                        src: "https://framerusercontent.com/images/wEDaJSqh3MsJnu67DrLfBckNiOQ.gif"
                                    },
                                    className: "framer-1rafmoy"
                                })
                            }), e("div", {
                                className: "framer-fwex1c",
                                children: e(ii, {
                                    __framer__styleTransformEffectEnabled: !0,
                                    __framer__transformTargets: [{
                                        target: {
                                            opacity: 1,
                                            rotate: 0,
                                            rotateX: 0,
                                            rotateY: 0,
                                            scale: 1,
                                            skewX: 0,
                                            skewY: 0,
                                            x: 0,
                                            y: 0
                                        }
                                    }, {
                                        ref: oe,
                                        target: {
                                            opacity: 1,
                                            rotate: 0,
                                            rotateX: 0,
                                            rotateY: 0,
                                            scale: 2.6,
                                            skewX: 0,
                                            skewY: 0,
                                            x: -2,
                                            y: 0
                                        }
                                    }],
                                    __framer__transformTrigger: "onScrollTarget",
                                    __framer__transformViewportThreshold: 1,
                                    __perspectiveFX: !1,
                                    __targetOpacity: 1,
                                    className: "framer-lzh2f",
                                    "data-framer-name": "videocontainer",
                                    id: q,
                                    ref: ee,
                                    children: e(ze, {
                                        children: e(Be, {
                                            className: "framer-14dh6i9-container",
                                            id: "14dh6i9",
                                            isAuthoredByUser: !0,
                                            isModuleExternal: !0,
                                            nodeId: "ZgZ5o7y9L",
                                            rendersWithMotion: !0,
                                            scopeId: "Z9xpqCjmE",
                                            style: {
                                                transformPerspective: 500
                                            },
                                            children: e(Fe, {
                                                backgroundColor: "rgba(0, 0, 0, 0)",
                                                borderRadius: 12,
                                                bottomLeftRadius: 12,
                                                bottomRightRadius: 12,
                                                controls: !1,
                                                height: "100%",
                                                id: "ZgZ5o7y9L",
                                                isMixedBorderRadius: !1,
                                                layoutId: "ZgZ5o7y9L",
                                                loop: !0,
                                                muted: !0,
                                                objectFit: "cover",
                                                playing: !0,
                                                posterEnabled: !0,
                                                srcFile: "https://framerusercontent.com/assets/un6TVfkx4zwKvl6VyRjjCSydvo.mp4",
                                                srcType: "Upload",
                                                srcUrl: "https://framerusercontent.com/assets/MLWPbW1dUQawJLhhun3dBwpgJak.mp4",
                                                startTime: 0,
                                                style: {
                                                    height: "100%",
                                                    width: "100%"
                                                },
                                                topLeftRadius: 12,
                                                topRightRadius: 12,
                                                volume: 25,
                                                width: "100%"
                                            })
                                        })
                                    })
                                })
                            }), e(f, {
                                breakpoint: o,
                                overrides: {
                                    jUuLb2ZS_: {
                                        background: {
                                            alt: "",
                                            fit: "fill",
                                            loading: s((n?.y || 0) + 0 + 2200 + 0 + 0 + 0 + 180.1961 + 41),
                                            pixelHeight: 1440,
                                            pixelWidth: 1440,
                                            src: "https://framerusercontent.com/images/wEDaJSqh3MsJnu67DrLfBckNiOQ.gif"
                                        }
                                    }
                                },
                                children: e(g, {
                                    background: {
                                        alt: "",
                                        fit: "fill",
                                        pixelHeight: 1440,
                                        pixelWidth: 1440,
                                        src: "https://framerusercontent.com/images/wEDaJSqh3MsJnu67DrLfBckNiOQ.gif"
                                    },
                                    className: "framer-trj8mo"
                                })
                            })]
                        }), t("div", {
                            className: "framer-pgifn4",
                            id: xe,
                            ref: pe,
                            children: [e("div", {
                                className: "framer-107him8",
                                children: e(i, {
                                    __fromCanvasComponent: !0,
                                    children: e(r, {
                                        children: e("h2", {
                                            style: {
                                                "--font-selector": "R0Y7T3BlbiBTYW5zLTgwMA==",
                                                "--framer-font-family": '"Open Sans", "Open Sans Placeholder", sans-serif',
                                                "--framer-font-open-type-features": "'cv01' on, 'cv09' on, 'cv11' on, 'cv05' on, 'ss03' on",
                                                "--framer-font-size": "11px",
                                                "--framer-font-weight": "800",
                                                "--framer-line-height": "1em",
                                                "--framer-text-alignment": "center",
                                                "--framer-text-color": "var(--token-8961fb69-0ea3-46ab-8b8e-1f9187ebd1a9, rgb(255, 255, 255))"
                                            },
                                            children: "Say goodbye to doom scrolling \u2014 Empower your customers with AI-driven outfit discovery "
                                        })
                                    }),
                                    className: "framer-13kq0mv",
                                    fonts: ["GF;Open Sans-800"],
                                    verticalAlignment: "center",
                                    withExternalLayout: !0
                                })
                            }), e("div", {
                                className: "framer-n43iaz",
                                children: e(i, {
                                    __fromCanvasComponent: !0,
                                    children: e(r, {
                                        children: e("p", {
                                            style: {
                                                "--font-selector": "R0Y7T3BlbiBTYW5zLXJlZ3VsYXI=",
                                                "--framer-font-family": '"Open Sans", "Open Sans Placeholder", sans-serif',
                                                "--framer-font-open-type-features": "'cv09' on, 'cv01' on, 'cv05' on, 'ss03' on",
                                                "--framer-font-size": "9px",
                                                "--framer-letter-spacing": "-0.01em",
                                                "--framer-line-height": "1.1em",
                                                "--framer-text-alignment": "center",
                                                "--framer-text-color": "rgb(255, 252, 252)"
                                            },
                                            children: "One prompt is all it takes to turn browsers into buyers!"
                                        })
                                    }),
                                    className: "framer-1r1hdin",
                                    fonts: ["GF;Open Sans-regular"],
                                    transformTemplate: ir,
                                    verticalAlignment: "top",
                                    withExternalLayout: !0
                                })
                            })]
                        })]
                    }), e("div", {
                        className: "framer-1y5br3g",
                        "data-framer-name": "tempovideo",
                        id: de,
                        ref: oe
                    })]
                }), E() && e(f, {
                    breakpoint: o,
                    overrides: {
                        jUuLb2ZS_: {
                            background: {
                                alt: "",
                                fit: "fill",
                                loading: s((n?.y || 0) + 0 + 3289),
                                pixelHeight: 810,
                                pixelWidth: 1440,
                                sizes: `calc((${n?.width || "100vw"} - 40px) * 1.1171)`,
                                src: "https://framerusercontent.com/images/HECtok0V6TbZ1bMdAo0kVVe8ck.svg",
                                srcSet: "https://framerusercontent.com/images/HECtok0V6TbZ1bMdAo0kVVe8ck.svg?scale-down-to=512 512w,https://framerusercontent.com/images/HECtok0V6TbZ1bMdAo0kVVe8ck.svg?scale-down-to=1024 1024w,https://framerusercontent.com/images/HECtok0V6TbZ1bMdAo0kVVe8ck.svg 1440w"
                            }
                        }
                    },
                    children: t(g, {
                        background: {
                            alt: "",
                            fit: "fill",
                            pixelHeight: 810,
                            pixelWidth: 1440,
                            src: "https://framerusercontent.com/images/HECtok0V6TbZ1bMdAo0kVVe8ck.svg",
                            srcSet: "https://framerusercontent.com/images/HECtok0V6TbZ1bMdAo0kVVe8ck.svg?scale-down-to=512 512w,https://framerusercontent.com/images/HECtok0V6TbZ1bMdAo0kVVe8ck.svg?scale-down-to=1024 1024w,https://framerusercontent.com/images/HECtok0V6TbZ1bMdAo0kVVe8ck.svg 1440w"
                        },
                        className: "framer-1nd1jkq hidden-uh1o9d hidden-z10mb2",
                        id: sr,
                        ref: G,
                        children: [e(Q, {
                            __framer__spring: {
                                bounce: .2,
                                damping: 60,
                                delay: 0,
                                duration: 10,
                                durationBasedSpring: !0,
                                ease: [.44, 0, .56, 1],
                                mass: 1,
                                stiffness: 500,
                                type: "spring"
                            },
                            __framer__styleTransformEffectEnabled: !0,
                            __framer__transformTargets: [{
                                target: {
                                    opacity: .4,
                                    rotate: 0,
                                    rotateX: 50,
                                    rotateY: 50,
                                    scale: .2,
                                    skewX: 0,
                                    skewY: 0,
                                    x: 200,
                                    y: 10
                                }
                            }, {
                                ref: G,
                                target: {
                                    opacity: 1,
                                    rotate: 0,
                                    rotateX: 0,
                                    rotateY: 0,
                                    scale: 1,
                                    skewX: 0,
                                    skewY: 0,
                                    x: 0,
                                    y: 0
                                }
                            }],
                            __framer__transformTrigger: "onScrollTarget",
                            __framer__transformViewportThreshold: 1,
                            __fromCanvasComponent: !0,
                            __perspectiveFX: !1,
                            __targetOpacity: 1,
                            children: t(r, {
                                children: [e("p", {
                                    style: {
                                        "--font-selector": "R0Y7QmV2YW4tcmVndWxhcg==",
                                        "--framer-font-family": '"Bevan", "Bevan Placeholder", serif',
                                        "--framer-font-open-type-features": "'cv09' on, 'cv01' on, 'cv05' on, 'ss03' on",
                                        "--framer-font-size": "19px",
                                        "--framer-letter-spacing": "-0.01em",
                                        "--framer-line-height": "1.1em",
                                        "--framer-text-alignment": "center",
                                        "--framer-text-color": "rgb(255, 252, 252)"
                                    },
                                    children: "FASHION IS WHAT YOU SELL"
                                }), e("p", {
                                    style: {
                                        "--font-selector": "R0Y7QmV2YW4tcmVndWxhcg==",
                                        "--framer-font-family": '"Bevan", "Bevan Placeholder", serif',
                                        "--framer-font-open-type-features": "'cv09' on, 'cv01' on, 'cv05' on, 'ss03' on",
                                        "--framer-font-size": "19px",
                                        "--framer-letter-spacing": "-0.01em",
                                        "--framer-line-height": "1.1em",
                                        "--framer-text-alignment": "center",
                                        "--framer-text-color": "rgb(255, 252, 252)"
                                    },
                                    children: "STYLE IS HOW YOU SELL IT"
                                })]
                            }),
                            className: "framer-3lw1kd",
                            fonts: ["GF;Bevan-regular"],
                            verticalAlignment: "top",
                            withExternalLayout: !0
                        }), e(Q, {
                            __framer__styleTransformEffectEnabled: !0,
                            __framer__transformTargets: [{
                                target: {
                                    opacity: .5,
                                    rotate: 0,
                                    rotateX: 0,
                                    rotateY: 0,
                                    scale: 0,
                                    skewX: 0,
                                    skewY: 0,
                                    x: 0,
                                    y: 0
                                }
                            }, {
                                ref: G,
                                target: {
                                    opacity: 1,
                                    rotate: 0,
                                    rotateX: 0,
                                    rotateY: 0,
                                    scale: 1,
                                    skewX: 0,
                                    skewY: 0,
                                    x: 0,
                                    y: 0
                                }
                            }],
                            __framer__transformTrigger: "onScrollTarget",
                            __framer__transformViewportThreshold: 1,
                            __fromCanvasComponent: !0,
                            __perspectiveFX: !1,
                            __targetOpacity: 1,
                            children: e(r, {
                                children: e("h2", {
                                    style: {
                                        "--font-selector": "R0Y7T3BlbiBTYW5zLTgwMA==",
                                        "--framer-font-family": '"Open Sans", "Open Sans Placeholder", sans-serif',
                                        "--framer-font-open-type-features": "'cv01' on, 'cv09' on, 'cv11' on, 'cv05' on, 'ss03' on",
                                        "--framer-font-size": "12px",
                                        "--framer-font-weight": "800",
                                        "--framer-line-height": "1em",
                                        "--framer-text-alignment": "center",
                                        "--framer-text-color": "var(--token-8961fb69-0ea3-46ab-8b8e-1f9187ebd1a9, rgb(255, 255, 255))"
                                    },
                                    children: "Meet your AI-Powered Personal Stylist"
                                })
                            }),
                            className: "framer-1ssd7un",
                            fonts: ["GF;Open Sans-800"],
                            verticalAlignment: "center",
                            withExternalLayout: !0
                        })]
                    })
                }), E() && t("div", {
                    className: "framer-kc3w0k hidden-uh1o9d hidden-z10mb2",
                    "data-framer-name": "scroll animation section",
                    id: Oe,
                    ref: fr,
                    children: [t("div", {
                        className: "framer-1llrxhd",
                        "data-framer-name": "sticky",
                        children: [t(z, {
                            __framer__spring: {
                                bounce: .2,
                                damping: 60,
                                delay: 0,
                                duration: 1,
                                durationBasedSpring: !0,
                                ease: [.44, 0, .56, 1],
                                mass: 1,
                                stiffness: 500,
                                type: "spring"
                            },
                            __framer__styleTransformEffectEnabled: !0,
                            __framer__transformTargets: [{
                                target: {
                                    opacity: 0,
                                    rotate: 0,
                                    rotateX: 0,
                                    rotateY: 0,
                                    scale: .5,
                                    skewX: 0,
                                    skewY: 0,
                                    x: -180,
                                    y: 0
                                }
                            }, {
                                ref: ie,
                                target: {
                                    opacity: 1,
                                    rotate: 0,
                                    rotateX: 0,
                                    rotateY: 0,
                                    scale: 1,
                                    skewX: 0,
                                    skewY: 0,
                                    x: 0,
                                    y: 0
                                }
                            }],
                            __framer__transformTrigger: "onScrollTarget",
                            __framer__transformViewportThreshold: 1,
                            __perspectiveFX: !1,
                            __targetOpacity: 1,
                            className: "framer-zjxd8j",
                            id: Re,
                            ref: ie,
                            children: [e(i, {
                                __fromCanvasComponent: !0,
                                children: e(r, {
                                    children: e("p", {
                                        style: {
                                            "--font-selector": "R0Y7QmV2YW4tcmVndWxhcg==",
                                            "--framer-font-family": '"Bevan", "Bevan Placeholder", serif',
                                            "--framer-font-open-type-features": "'cv09' on, 'cv01' on, 'cv05' on, 'ss03' on",
                                            "--framer-font-size": "14px",
                                            "--framer-letter-spacing": "-0.01em",
                                            "--framer-line-height": "1.1em",
                                            "--framer-text-alignment": "left",
                                            "--framer-text-color": "rgb(255, 252, 252)"
                                        },
                                        children: "COMPLETE  LOOKS  STYLED  IN SECONDS"
                                    })
                                }),
                                className: "framer-omw5sb",
                                fonts: ["GF;Bevan-regular"],
                                verticalAlignment: "top",
                                withExternalLayout: !0
                            }), e(i, {
                                __fromCanvasComponent: !0,
                                children: e(r, {
                                    children: t("h2", {
                                        style: {
                                            "--font-selector": "R0Y7T3BlbiBTYW5zLTgwMA==",
                                            "--framer-font-family": '"Open Sans", "Open Sans Placeholder", sans-serif',
                                            "--framer-font-open-type-features": "'cv01' on, 'cv09' on, 'cv11' on, 'cv05' on, 'ss03' on",
                                            "--framer-font-size": "9px",
                                            "--framer-font-weight": "800",
                                            "--framer-line-height": "1em",
                                            "--framer-text-alignment": "left",
                                            "--framer-text-color": "var(--token-8961fb69-0ea3-46ab-8b8e-1f9187ebd1a9, rgb(255, 255, 255))"
                                        },
                                        children: ["We turn your catalog into full looks tailored to each customer\u2019s style, body type, and budget.", e("br", {}), e("br", {}), "Smart, scalable, and ready to convert."]
                                    })
                                }),
                                className: "framer-e6g5z6",
                                fonts: ["GF;Open Sans-800"],
                                verticalAlignment: "center",
                                withExternalLayout: !0
                            })]
                        }), t("div", {
                            className: "framer-se4qp",
                            children: [e(f, {
                                breakpoint: o,
                                overrides: {
                                    jUuLb2ZS_: {
                                        background: {
                                            alt: "",
                                            fit: "fill",
                                            loading: s((n?.y || 0) + 0 + 3477 + 0 + 0 + 0 + 222 + 300 - 73),
                                            pixelHeight: 810,
                                            pixelWidth: 1440,
                                            src: "https://framerusercontent.com/images/ohUvSeqcea4gEOi3G9mVoqXnveQ.svg"
                                        }
                                    }
                                },
                                children: e(I, {
                                    __framer__spring: {
                                        bounce: .2,
                                        damping: 60,
                                        delay: 0,
                                        duration: 1,
                                        durationBasedSpring: !0,
                                        ease: [.44, 0, .56, 1],
                                        mass: 1,
                                        stiffness: 500,
                                        type: "spring"
                                    },
                                    __framer__styleTransformEffectEnabled: !0,
                                    __framer__transformTargets: [{
                                        target: {
                                            opacity: 1,
                                            rotate: 0,
                                            rotateX: 0,
                                            rotateY: 0,
                                            scale: .5,
                                            skewX: 0,
                                            skewY: 0,
                                            x: 139,
                                            y: 58
                                        }
                                    }, {
                                        ref: Ee,
                                        target: {
                                            opacity: 1,
                                            rotate: 0,
                                            rotateX: 0,
                                            rotateY: 0,
                                            scale: 1,
                                            skewX: 0,
                                            skewY: 0,
                                            x: 0,
                                            y: 0
                                        }
                                    }, {
                                        ref: le,
                                        target: {
                                            opacity: 1,
                                            rotate: 0,
                                            rotateX: 0,
                                            rotateY: 0,
                                            scale: .8,
                                            skewX: 0,
                                            skewY: 0,
                                            x: -110,
                                            y: 142
                                        }
                                    }],
                                    __framer__transformTrigger: "onScrollTarget",
                                    __framer__transformViewportThreshold: 1,
                                    __perspectiveFX: !1,
                                    __targetOpacity: 1,
                                    background: {
                                        alt: "",
                                        fit: "fill",
                                        pixelHeight: 810,
                                        pixelWidth: 1440,
                                        src: "https://framerusercontent.com/images/ohUvSeqcea4gEOi3G9mVoqXnveQ.svg"
                                    },
                                    className: "framer-9p9op5",
                                    "data-framer-name": "image 5",
                                    whileHover: S
                                })
                            }), e(f, {
                                breakpoint: o,
                                overrides: {
                                    jUuLb2ZS_: {
                                        background: {
                                            alt: "",
                                            fit: "fill",
                                            loading: s((n?.y || 0) + 0 + 3477 + 0 + 0 + 0 + 222 + 300 - 73),
                                            pixelHeight: 810,
                                            pixelWidth: 1440,
                                            src: "https://framerusercontent.com/images/c0RPswH9Cd8OuaHzxyf86XJB2RM.svg"
                                        }
                                    }
                                },
                                children: e(I, {
                                    __framer__spring: {
                                        bounce: .2,
                                        damping: 60,
                                        delay: 0,
                                        duration: 1,
                                        durationBasedSpring: !0,
                                        ease: [.44, 0, .56, 1],
                                        mass: 1,
                                        stiffness: 500,
                                        type: "spring"
                                    },
                                    __framer__styleTransformEffectEnabled: !0,
                                    __framer__transformTargets: [{
                                        target: {
                                            opacity: 1,
                                            rotate: 0,
                                            rotateX: 0,
                                            rotateY: 0,
                                            scale: .5,
                                            skewX: 0,
                                            skewY: 0,
                                            x: 139,
                                            y: 58
                                        }
                                    }, {
                                        ref: Le,
                                        target: {
                                            opacity: 1,
                                            rotate: 0,
                                            rotateX: 0,
                                            rotateY: 0,
                                            scale: 1,
                                            skewX: 0,
                                            skewY: 0,
                                            x: 0,
                                            y: 0
                                        }
                                    }, {
                                        ref: le,
                                        target: {
                                            opacity: 1,
                                            rotate: 0,
                                            rotateX: 0,
                                            rotateY: 0,
                                            scale: .8,
                                            skewX: 0,
                                            skewY: 0,
                                            x: -50,
                                            y: 49
                                        }
                                    }],
                                    __framer__transformTrigger: "onScrollTarget",
                                    __framer__transformViewportThreshold: 1,
                                    __perspectiveFX: !1,
                                    __targetOpacity: 1,
                                    background: {
                                        alt: "",
                                        fit: "fill",
                                        pixelHeight: 810,
                                        pixelWidth: 1440,
                                        src: "https://framerusercontent.com/images/c0RPswH9Cd8OuaHzxyf86XJB2RM.svg"
                                    },
                                    className: "framer-lyc4nt",
                                    "data-framer-name": "image 4",
                                    whileHover: S
                                })
                            }), e(f, {
                                breakpoint: o,
                                overrides: {
                                    jUuLb2ZS_: {
                                        background: {
                                            alt: "",
                                            fit: "fill",
                                            loading: s((n?.y || 0) + 0 + 3477 + 0 + 0 + 0 + 222 + 300 - 73),
                                            pixelHeight: 810,
                                            pixelWidth: 1440,
                                            src: "https://framerusercontent.com/images/2ekNET4EbNc8yTzDY7v36sJ1uno.svg"
                                        }
                                    }
                                },
                                children: e(I, {
                                    __framer__spring: {
                                        bounce: .2,
                                        damping: 60,
                                        delay: 0,
                                        duration: 1,
                                        durationBasedSpring: !0,
                                        ease: [.44, 0, .56, 1],
                                        mass: 1,
                                        stiffness: 500,
                                        type: "spring"
                                    },
                                    __framer__styleTransformEffectEnabled: !0,
                                    __framer__transformTargets: [{
                                        target: {
                                            opacity: 1,
                                            rotate: 0,
                                            rotateX: 0,
                                            rotateY: 0,
                                            scale: .5,
                                            skewX: 0,
                                            skewY: 0,
                                            x: 139,
                                            y: 58
                                        }
                                    }, {
                                        ref: je,
                                        target: {
                                            opacity: 1,
                                            rotate: 0,
                                            rotateX: 0,
                                            rotateY: 0,
                                            scale: 1,
                                            skewX: 0,
                                            skewY: 0,
                                            x: 0,
                                            y: 0
                                        }
                                    }, {
                                        ref: le,
                                        target: {
                                            opacity: 1,
                                            rotate: 0,
                                            rotateX: 0,
                                            rotateY: 0,
                                            scale: .8,
                                            skewX: 0,
                                            skewY: 0,
                                            x: 0,
                                            y: -45
                                        }
                                    }],
                                    __framer__transformTrigger: "onScrollTarget",
                                    __framer__transformViewportThreshold: 1,
                                    __perspectiveFX: !1,
                                    __targetOpacity: 1,
                                    background: {
                                        alt: "",
                                        fit: "fill",
                                        pixelHeight: 810,
                                        pixelWidth: 1440,
                                        src: "https://framerusercontent.com/images/2ekNET4EbNc8yTzDY7v36sJ1uno.svg"
                                    },
                                    className: "framer-17xolk9",
                                    "data-framer-name": "image 3",
                                    whileHover: S
                                })
                            }), e(f, {
                                breakpoint: o,
                                overrides: {
                                    jUuLb2ZS_: {
                                        background: {
                                            alt: "",
                                            fit: "fill",
                                            loading: s((n?.y || 0) + 0 + 3477 + 0 + 0 + 0 + 222 + 300 - 73),
                                            pixelHeight: 810,
                                            pixelWidth: 1440,
                                            src: "https://framerusercontent.com/images/Hw0CjS6gqIBxLqy5oEWp4ZoOgeo.svg"
                                        }
                                    }
                                },
                                children: e(I, {
                                    __framer__spring: {
                                        bounce: .2,
                                        damping: 60,
                                        delay: 0,
                                        duration: 1,
                                        durationBasedSpring: !0,
                                        ease: [.44, 0, .56, 1],
                                        mass: 1,
                                        stiffness: 500,
                                        type: "spring"
                                    },
                                    __framer__styleTransformEffectEnabled: !0,
                                    __framer__transformTargets: [{
                                        target: {
                                            opacity: 1,
                                            rotate: 0,
                                            rotateX: 0,
                                            rotateY: 0,
                                            scale: .5,
                                            skewX: 0,
                                            skewY: 0,
                                            x: 139,
                                            y: 58
                                        }
                                    }, {
                                        ref: Qe,
                                        target: {
                                            opacity: 1,
                                            rotate: 0,
                                            rotateX: 0,
                                            rotateY: 0,
                                            scale: 1,
                                            skewX: 0,
                                            skewY: 0,
                                            x: 0,
                                            y: 0
                                        }
                                    }, {
                                        ref: le,
                                        target: {
                                            opacity: 1,
                                            rotate: 0,
                                            rotateX: 0,
                                            rotateY: 0,
                                            scale: .8,
                                            skewX: 0,
                                            skewY: 0,
                                            x: 50,
                                            y: -134
                                        }
                                    }],
                                    __framer__transformTrigger: "onScrollTarget",
                                    __framer__transformViewportThreshold: 1,
                                    __perspectiveFX: !1,
                                    __targetOpacity: 1,
                                    background: {
                                        alt: "",
                                        fit: "fill",
                                        pixelHeight: 810,
                                        pixelWidth: 1440,
                                        src: "https://framerusercontent.com/images/Hw0CjS6gqIBxLqy5oEWp4ZoOgeo.svg"
                                    },
                                    className: "framer-qsoosy",
                                    "data-framer-name": "image 2",
                                    whileHover: S
                                })
                            }), e(f, {
                                breakpoint: o,
                                overrides: {
                                    jUuLb2ZS_: {
                                        background: {
                                            alt: "",
                                            fit: "fill",
                                            loading: s((n?.y || 0) + 0 + 3477 + 0 + 0 + 0 + 222 + 300 - 73),
                                            pixelHeight: 810,
                                            pixelWidth: 1440,
                                            src: "https://framerusercontent.com/images/R5P57hWNyoplNi1Vi8D0TuqmeWE.svg"
                                        }
                                    }
                                },
                                children: e(I, {
                                    __framer__spring: {
                                        bounce: .2,
                                        damping: 60,
                                        delay: 0,
                                        duration: 1,
                                        durationBasedSpring: !0,
                                        ease: [.44, 0, .56, 1],
                                        mass: 1,
                                        stiffness: 500,
                                        type: "spring"
                                    },
                                    __framer__styleTransformEffectEnabled: !0,
                                    __framer__transformTargets: [{
                                        target: {
                                            opacity: 1,
                                            rotate: 0,
                                            rotateX: 0,
                                            rotateY: 0,
                                            scale: .5,
                                            skewX: 0,
                                            skewY: 0,
                                            x: 139,
                                            y: 58
                                        }
                                    }, {
                                        ref: Je,
                                        target: {
                                            opacity: 1,
                                            rotate: 0,
                                            rotateX: 0,
                                            rotateY: 0,
                                            scale: 1,
                                            skewX: 0,
                                            skewY: 0,
                                            x: 0,
                                            y: 0
                                        }
                                    }, {
                                        ref: le,
                                        target: {
                                            opacity: 1,
                                            rotate: 0,
                                            rotateX: 0,
                                            rotateY: 0,
                                            scale: .8,
                                            skewX: 0,
                                            skewY: 0,
                                            x: 110,
                                            y: -225
                                        }
                                    }],
                                    __framer__transformTrigger: "onScrollTarget",
                                    __framer__transformViewportThreshold: 1,
                                    __perspectiveFX: !1,
                                    __targetOpacity: 1,
                                    background: {
                                        alt: "",
                                        fit: "fill",
                                        pixelHeight: 810,
                                        pixelWidth: 1440,
                                        src: "https://framerusercontent.com/images/R5P57hWNyoplNi1Vi8D0TuqmeWE.svg"
                                    },
                                    className: "framer-q586bv",
                                    "data-framer-name": "image 1",
                                    whileHover: S
                                })
                            })]
                        })]
                    }), e("div", {
                        className: "framer-119iu8q",
                        "data-framer-name": "trigger entrada",
                        id: A,
                        ref: Je
                    }), e("div", {
                        className: "framer-h8qp1y",
                        "data-framer-name": "trigger entrada",
                        id: Mt,
                        ref: Qe
                    }), e("div", {
                        className: "framer-oppvie",
                        "data-framer-name": "trigger entrada",
                        id: qt,
                        ref: je
                    }), e("div", {
                        className: "framer-4rabfo",
                        "data-framer-name": "trigger entrada",
                        id: Ht,
                        ref: Le
                    }), e("div", {
                        className: "framer-1y83kvd",
                        "data-framer-name": "trigger entrada",
                        id: Dt,
                        ref: Ee
                    }), e("div", {
                        className: "framer-ynn9o9",
                        "data-framer-name": "trigger saida",
                        id: Gt,
                        ref: le
                    })]
                }), E() && e("div", {
                    className: "framer-11hg4ni hidden-uh1o9d hidden-z10mb2"
                }), E() && t("div", {
                    className: "framer-esna13 hidden-uh1o9d hidden-z10mb2",
                    children: [e("div", {
                        className: "framer-1hadqxw",
                        "data-framer-name": "fundo teste"
                    }), t(z, {
                        __framer__spring: {
                            bounce: .2,
                            damping: 60,
                            delay: 0,
                            duration: 1,
                            durationBasedSpring: !0,
                            ease: [.44, 0, .56, 1],
                            mass: 1,
                            stiffness: 500,
                            type: "spring"
                        },
                        __framer__styleTransformEffectEnabled: !0,
                        __framer__transformTargets: [{
                            target: {
                                opacity: 1,
                                rotate: 0,
                                rotateX: 0,
                                rotateY: 0,
                                scale: .5,
                                skewX: 0,
                                skewY: 0,
                                x: 0,
                                y: 200
                            }
                        }, {
                            ref: Or,
                            target: {
                                opacity: 1,
                                rotate: 0,
                                rotateX: 0,
                                rotateY: 0,
                                scale: 1,
                                skewX: 0,
                                skewY: 0,
                                x: 0,
                                y: 0
                            }
                        }],
                        __framer__transformTrigger: "onScrollTarget",
                        __framer__transformViewportThreshold: 1,
                        __perspectiveFX: !1,
                        __targetOpacity: 1,
                        className: "framer-1vlh3ay",
                        id: Zt,
                        ref: Or,
                        children: [e(p.div, {
                            className: "framer-wmjea8",
                            whileHover: S,
                            children: e(f, {
                                breakpoint: o,
                                overrides: {
                                    jUuLb2ZS_: {
                                        background: {
                                            alt: "",
                                            fit: "fill",
                                            loading: s((n?.y || 0) + 0 + 5646 + 0 + 128 + 28 + 36 + 0 + 0),
                                            pixelHeight: 4826,
                                            pixelWidth: 3403,
                                            src: "https://framerusercontent.com/images/jQ8jRLaOTILr9WPk66HtzrqTNs.png"
                                        }
                                    }
                                },
                                children: e(g, {
                                    background: {
                                        alt: "",
                                        fit: "fill",
                                        pixelHeight: 4826,
                                        pixelWidth: 3403,
                                        src: "https://framerusercontent.com/images/jQ8jRLaOTILr9WPk66HtzrqTNs.png"
                                    },
                                    className: "framer-1wsrdu2"
                                })
                            })
                        }), e("div", {
                            className: "framer-wklxf8",
                            children: e(i, {
                                __fromCanvasComponent: !0,
                                children: e(r, {
                                    children: t("h2", {
                                        style: {
                                            "--font-selector": "R0Y7QmV2YW4tcmVndWxhcg==",
                                            "--framer-font-family": '"Bevan", "Bevan Placeholder", serif',
                                            "--framer-font-open-type-features": "'cv01' on, 'cv09' on, 'cv11' on, 'cv05' on, 'ss03' on",
                                            "--framer-font-size": "7px",
                                            "--framer-line-height": "2em",
                                            "--framer-text-alignment": "center"
                                        },
                                        children: [t("span", {
                                            style: {
                                                "--framer-font-size": "11px"
                                            },
                                            children: [" Better fit. Fewer returns.", e("br", {})]
                                        }), "Let customers preview looks on their own bodies \u2014 before they buy."]
                                    })
                                }),
                                className: "framer-1ddnxhl",
                                fonts: ["GF;Bevan-regular"],
                                verticalAlignment: "center",
                                whileHover: S,
                                withExternalLayout: !0
                            })
                        }), t("div", {
                            className: "framer-u7cdek",
                            children: [e(i, {
                                __fromCanvasComponent: !0,
                                children: e(r, {
                                    children: e("p", {
                                        style: {
                                            "--font-selector": "R0Y7QmV2YW4tcmVndWxhcg==",
                                            "--framer-font-family": '"Bevan", "Bevan Placeholder", serif',
                                            "--framer-font-open-type-features": "'cv09' on, 'cv01' on, 'cv05' on, 'ss03' on",
                                            "--framer-font-size": "25px",
                                            "--framer-letter-spacing": "-0.01em",
                                            "--framer-line-height": "0.9em",
                                            "--framer-text-alignment": "center",
                                            "--framer-text-color": "rgb(119, 61, 235)"
                                        },
                                        children: e("span", {
                                            "data-text-fill": "true",
                                            style: {
                                                backgroundImage: "linear-gradient(72deg, rgb(142, 95, 237) 0%, rgb(21, 4, 56) 100%)"
                                            },
                                            children: "VIRTUAL TRY-ON"
                                        })
                                    })
                                }),
                                className: "framer-ihz4ov",
                                fonts: ["GF;Bevan-regular"],
                                verticalAlignment: "top",
                                whileHover: S,
                                withExternalLayout: !0
                            }), e(i, {
                                __fromCanvasComponent: !0,
                                children: e(r, {
                                    children: e("h2", {
                                        style: {
                                            "--font-selector": "R0Y7QmV2YW4tcmVndWxhcg==",
                                            "--framer-font-family": '"Bevan", "Bevan Placeholder", serif',
                                            "--framer-font-open-type-features": "'cv01' on, 'cv09' on, 'cv11' on, 'cv05' on, 'ss03' on",
                                            "--framer-font-size": "11px",
                                            "--framer-line-height": "2em",
                                            "--framer-text-alignment": "center"
                                        },
                                        children: "Welcome to the future of try-ons!"
                                    })
                                }),
                                className: "framer-13ma9my",
                                fonts: ["GF;Bevan-regular"],
                                verticalAlignment: "center",
                                whileHover: S,
                                withExternalLayout: !0
                            })]
                        })]
                    })]
                }), E() && e("div", {
                    className: "framer-ht5efm hidden-uh1o9d hidden-z10mb2",
                    children: e("div", {
                        className: "framer-19pwc27",
                        "data-framer-name": "genie",
                        id: Qt,
                        ref: Jt,
                        children: e("div", {
                            className: "framer-15bw18o",
                            children: t("div", {
                                className: "framer-mr7u9n",
                                children: [e(i, {
                                    __fromCanvasComponent: !0,
                                    children: t(r, {
                                        children: [e("p", {
                                            style: {
                                                "--font-selector": "R0Y7T3BlbiBTYW5zLTgwMA==",
                                                "--framer-font-family": '"Open Sans", "Open Sans Placeholder", sans-serif',
                                                "--framer-font-size": "13px",
                                                "--framer-font-weight": "800",
                                                "--framer-text-color": "rgb(255, 255, 255)"
                                            },
                                            children: "Feels like magic. Powered by AI."
                                        }), e("p", {
                                            children: e("br", {
                                                className: "trailing-break"
                                            })
                                        })]
                                    }),
                                    className: "framer-cjuhtn",
                                    fonts: ["GF;Open Sans-800"],
                                    transformTemplate: P,
                                    verticalAlignment: "top",
                                    withExternalLayout: !0
                                }), e(f, {
                                    breakpoint: o,
                                    overrides: {
                                        jUuLb2ZS_: {
                                            background: {
                                                alt: "",
                                                fit: "fit",
                                                loading: s((n?.y || 0) + 0 + 6345 + 0 + -35 + 0 + 0 + 0 + 0 + 181),
                                                pixelHeight: 3048,
                                                pixelWidth: 3911,
                                                positionX: "center",
                                                positionY: "center",
                                                src: "https://framerusercontent.com/images/nNZ1FLg4OsykwahLDztjen6Itk.png"
                                            }
                                        }
                                    },
                                    children: e(g, {
                                        background: {
                                            alt: "",
                                            fit: "fit",
                                            pixelHeight: 3048,
                                            pixelWidth: 3911,
                                            positionX: "center",
                                            positionY: "center",
                                            src: "https://framerusercontent.com/images/nNZ1FLg4OsykwahLDztjen6Itk.png"
                                        },
                                        className: "framer-1ke0ypo"
                                    })
                                }), e(i, {
                                    __fromCanvasComponent: !0,
                                    children: t(r, {
                                        children: [e("p", {
                                            style: {
                                                "--font-selector": "R0Y7QmV2YW4tcmVndWxhcg==",
                                                "--framer-font-family": '"Bevan", "Bevan Placeholder", serif',
                                                "--framer-font-size": "44px",
                                                "--framer-line-height": "1em",
                                                "--framer-text-alignment": "center",
                                                "--framer-text-color": "rgb(255, 255, 255)"
                                            },
                                            children: "MEET"
                                        }), e("p", {
                                            style: {
                                                "--font-selector": "R0Y7QmV2YW4tcmVndWxhcg==",
                                                "--framer-font-family": '"Bevan", "Bevan Placeholder", serif',
                                                "--framer-font-size": "44px",
                                                "--framer-line-height": "1em",
                                                "--framer-text-alignment": "center",
                                                "--framer-text-color": "rgb(255, 255, 255)"
                                            },
                                            children: "THE GENIE"
                                        }), e("p", {
                                            style: {
                                                "--framer-line-height": "1em",
                                                "--framer-text-alignment": "center"
                                            },
                                            children: e("br", {
                                                className: "trailing-break"
                                            })
                                        })]
                                    }),
                                    className: "framer-ism1jy",
                                    fonts: ["GF;Bevan-regular"],
                                    transformTemplate: P,
                                    verticalAlignment: "top",
                                    withExternalLayout: !0
                                }), e(f, {
                                    breakpoint: o,
                                    overrides: {
                                        jUuLb2ZS_: {
                                            background: {
                                                alt: "",
                                                fit: "fill",
                                                loading: s((n?.y || 0) + 0 + 6345 + 0 + -35 + 0 + 0 + 0 + 0 + 182),
                                                pixelHeight: 3375,
                                                pixelWidth: 6e3,
                                                src: "https://framerusercontent.com/images/WAMnjYi3mIJFJMfEjcpTILxh8YQ.png"
                                            }
                                        }
                                    },
                                    children: e(I, {
                                        __framer__loop: or,
                                        __framer__loopEffectEnabled: !0,
                                        __framer__loopPauseOffscreen: !0,
                                        __framer__loopRepeatDelay: 0,
                                        __framer__loopRepeatType: "mirror",
                                        __framer__loopTransition: nr,
                                        __perspectiveFX: !1,
                                        __targetOpacity: 1,
                                        background: {
                                            alt: "",
                                            fit: "fill",
                                            pixelHeight: 3375,
                                            pixelWidth: 6e3,
                                            src: "https://framerusercontent.com/images/WAMnjYi3mIJFJMfEjcpTILxh8YQ.png"
                                        },
                                        className: "framer-1uzfrql"
                                    })
                                }), e("div", {
                                    className: "framer-1unue0t",
                                    children: e(f, {
                                        breakpoint: o,
                                        overrides: {
                                            jUuLb2ZS_: {
                                                background: {
                                                    alt: "",
                                                    fit: "fill",
                                                    loading: s((n?.y || 0) + 0 + 6345 + 0 + -35 + 0 + 0 + 0 + 0 + 0 + 10.5 + 280 + 57),
                                                    pixelHeight: 3375,
                                                    pixelWidth: 6e3,
                                                    sizes: "135px",
                                                    src: "https://framerusercontent.com/images/vCcLIA2IdKAhft2XrHtnsEhjKlU.png",
                                                    srcSet: "https://framerusercontent.com/images/vCcLIA2IdKAhft2XrHtnsEhjKlU.png?scale-down-to=512 512w,https://framerusercontent.com/images/vCcLIA2IdKAhft2XrHtnsEhjKlU.png?scale-down-to=1024 1024w,https://framerusercontent.com/images/vCcLIA2IdKAhft2XrHtnsEhjKlU.png?scale-down-to=2048 2048w,https://framerusercontent.com/images/vCcLIA2IdKAhft2XrHtnsEhjKlU.png?scale-down-to=4096 4096w,https://framerusercontent.com/images/vCcLIA2IdKAhft2XrHtnsEhjKlU.png 6000w"
                                                }
                                            }
                                        },
                                        children: e(g, {
                                            background: {
                                                alt: "",
                                                fit: "fill",
                                                pixelHeight: 3375,
                                                pixelWidth: 6e3,
                                                sizes: "135px",
                                                src: "https://framerusercontent.com/images/vCcLIA2IdKAhft2XrHtnsEhjKlU.png",
                                                srcSet: "https://framerusercontent.com/images/vCcLIA2IdKAhft2XrHtnsEhjKlU.png?scale-down-to=512 512w,https://framerusercontent.com/images/vCcLIA2IdKAhft2XrHtnsEhjKlU.png?scale-down-to=1024 1024w,https://framerusercontent.com/images/vCcLIA2IdKAhft2XrHtnsEhjKlU.png?scale-down-to=2048 2048w,https://framerusercontent.com/images/vCcLIA2IdKAhft2XrHtnsEhjKlU.png?scale-down-to=4096 4096w,https://framerusercontent.com/images/vCcLIA2IdKAhft2XrHtnsEhjKlU.png 6000w"
                                            },
                                            className: "framer-piilp8"
                                        })
                                    })
                                }), e(i, {
                                    __fromCanvasComponent: !0,
                                    children: e(r, {
                                        children: e("p", {
                                            style: {
                                                "--font-selector": "R0Y7T3BlbiBTYW5zLTgwMA==",
                                                "--framer-font-family": '"Open Sans", "Open Sans Placeholder", sans-serif',
                                                "--framer-font-size": "11px",
                                                "--framer-font-weight": "800",
                                                "--framer-line-height": "1.1em",
                                                "--framer-text-alignment": "center",
                                                "--framer-text-color": "rgb(255, 255, 255)"
                                            },
                                            children: e("strong", {
                                                children: "Always on. Always learning. Always styling to sell."
                                            })
                                        })
                                    }),
                                    className: "framer-397755",
                                    fonts: ["GF;Open Sans-800"],
                                    transformTemplate: P,
                                    verticalAlignment: "top",
                                    withExternalLayout: !0
                                }), e(i, {
                                    __fromCanvasComponent: !0,
                                    children: e(r, {
                                        children: e("p", {
                                            style: {
                                                "--font-selector": "R0Y7T3BlbiBTYW5zLXJlZ3VsYXI=",
                                                "--framer-font-family": '"Open Sans", "Open Sans Placeholder", sans-serif',
                                                "--framer-font-size": "10px",
                                                "--framer-line-height": "1.1em",
                                                "--framer-text-alignment": "justify",
                                                "--framer-text-color": "rgb(255, 255, 255)"
                                            },
                                            children: "Genie grants styling wishes faster than any team ever could \u2014 transforming static catalogs into full outfits tailored to each shopper."
                                        })
                                    }),
                                    className: "framer-10lfxus",
                                    fonts: ["GF;Open Sans-regular"],
                                    transformTemplate: P,
                                    verticalAlignment: "top",
                                    withExternalLayout: !0
                                }), e(i, {
                                    __fromCanvasComponent: !0,
                                    children: e(r, {
                                        children: e("p", {
                                            style: {
                                                "--font-selector": "R0Y7T3BlbiBTYW5zLTgwMA==",
                                                "--framer-font-family": '"Open Sans", "Open Sans Placeholder", sans-serif',
                                                "--framer-font-size": "11px",
                                                "--framer-font-weight": "800",
                                                "--framer-line-height": "1.1em",
                                                "--framer-text-alignment": "center",
                                                "--framer-text-color": "rgb(255, 255, 255)"
                                            },
                                            children: "Our AI stylist \u2014 the smartest hire you\u2019ll ever make."
                                        })
                                    }),
                                    className: "framer-sr98gc",
                                    fonts: ["GF;Open Sans-800"],
                                    transformTemplate: P,
                                    verticalAlignment: "top",
                                    withExternalLayout: !0
                                })]
                            })
                        })
                    })
                }), E() && t("div", {
                    className: "framer-19tksoy hidden-uh1o9d hidden-z10mb2",
                    "data-framer-name": "tudo",
                    id: Kt,
                    ref: $t,
                    children: [t("div", {
                        className: "framer-l970go",
                        id: ea,
                        ref: mr,
                        children: [e(Q, {
                            __framer__spring: {
                                bounce: .2,
                                damping: 60,
                                delay: 0,
                                duration: 10,
                                durationBasedSpring: !0,
                                ease: [.44, 0, .56, 1],
                                mass: 1,
                                stiffness: 500,
                                type: "spring"
                            },
                            __framer__styleTransformEffectEnabled: !0,
                            __framer__transformTargets: [{
                                target: {
                                    opacity: .4,
                                    rotate: 0,
                                    rotateX: 50,
                                    rotateY: 50,
                                    scale: .2,
                                    skewX: 0,
                                    skewY: 0,
                                    x: 100,
                                    y: 10
                                }
                            }, {
                                ref: mr,
                                target: {
                                    opacity: 1,
                                    rotate: 0,
                                    rotateX: 0,
                                    rotateY: 0,
                                    scale: 1,
                                    skewX: 0,
                                    skewY: 0,
                                    x: 0,
                                    y: 0
                                }
                            }],
                            __framer__transformTrigger: "onScrollTarget",
                            __framer__transformViewportThreshold: 1,
                            __fromCanvasComponent: !0,
                            __perspectiveFX: !1,
                            __targetOpacity: 1,
                            children: e(r, {
                                children: e("p", {
                                    style: {
                                        "--font-selector": "R0Y7QmV2YW4tcmVndWxhcg==",
                                        "--framer-font-family": '"Bevan", "Bevan Placeholder", serif',
                                        "--framer-font-open-type-features": "'cv09' on, 'cv01' on, 'cv05' on, 'ss03' on",
                                        "--framer-font-size": "31px",
                                        "--framer-letter-spacing": "-0.01em",
                                        "--framer-line-height": "1.1em",
                                        "--framer-text-alignment": "center",
                                        "--framer-text-color": "rgb(255, 252, 252)"
                                    },
                                    children: "HOW IT WORKS"
                                })
                            }),
                            className: "framer-1s0yav5",
                            fonts: ["GF;Bevan-regular"],
                            verticalAlignment: "top",
                            withExternalLayout: !0
                        }), e(Q, {
                            __framer__spring: {
                                bounce: .2,
                                damping: 60,
                                delay: 0,
                                duration: 10,
                                durationBasedSpring: !0,
                                ease: [.44, 0, .56, 1],
                                mass: 1,
                                stiffness: 500,
                                type: "spring"
                            },
                            __framer__styleTransformEffectEnabled: !0,
                            __framer__transformTargets: [{
                                target: {
                                    opacity: .5,
                                    rotate: 0,
                                    rotateX: 0,
                                    rotateY: 0,
                                    scale: 0,
                                    skewX: 0,
                                    skewY: 0,
                                    x: 0,
                                    y: 25
                                }
                            }, {
                                ref: mr,
                                target: {
                                    opacity: 1,
                                    rotate: 0,
                                    rotateX: 0,
                                    rotateY: 0,
                                    scale: 1,
                                    skewX: 0,
                                    skewY: 0,
                                    x: 0,
                                    y: 0
                                }
                            }],
                            __framer__transformTrigger: "onScrollTarget",
                            __framer__transformViewportThreshold: 1,
                            __fromCanvasComponent: !0,
                            __perspectiveFX: !1,
                            __targetOpacity: 1,
                            children: e(r, {
                                children: e("h2", {
                                    style: {
                                        "--font-selector": "R0Y7T3BlbiBTYW5zLTgwMA==",
                                        "--framer-font-family": '"Open Sans", "Open Sans Placeholder", sans-serif',
                                        "--framer-font-open-type-features": "'cv01' on, 'cv09' on, 'cv11' on, 'cv05' on, 'ss03' on",
                                        "--framer-font-size": "11px",
                                        "--framer-font-weight": "800",
                                        "--framer-line-height": "1em",
                                        "--framer-text-alignment": "center",
                                        "--framer-text-color": "var(--token-8961fb69-0ea3-46ab-8b8e-1f9187ebd1a9, rgb(255, 255, 255))"
                                    },
                                    children: "Get styled by the Genie in just 4 simple steps!"
                                })
                            }),
                            className: "framer-12nt9qy",
                            fonts: ["GF;Open Sans-800"],
                            verticalAlignment: "center",
                            withExternalLayout: !0
                        })]
                    }), e("div", {
                        className: "framer-xagwny",
                        "data-framer-name": "the platform",
                        children: t("div", {
                            className: "framer-1oefz6s",
                            id: ra,
                            ref: ta,
                            children: [t("div", {
                                className: "framer-16p2ow7",
                                id: aa,
                                ref: na,
                                children: [t(z, {
                                    __framer__spring: {
                                        bounce: .2,
                                        damping: 60,
                                        delay: 0,
                                        duration: 5,
                                        durationBasedSpring: !0,
                                        ease: [.44, 0, .56, 1],
                                        mass: 1,
                                        stiffness: 500,
                                        type: "spring"
                                    },
                                    __framer__styleTransformEffectEnabled: !0,
                                    __framer__transformTargets: [{
                                        target: {
                                            opacity: 0,
                                            rotate: 0,
                                            rotateX: 0,
                                            rotateY: 0,
                                            scale: .5,
                                            skewX: 0,
                                            skewY: 0,
                                            x: 0,
                                            y: 0
                                        }
                                    }, {
                                        ref: Er,
                                        target: {
                                            opacity: 1,
                                            rotate: 0,
                                            rotateX: 0,
                                            rotateY: 0,
                                            scale: 1,
                                            skewX: 0,
                                            skewY: 0,
                                            x: 0,
                                            y: 0
                                        }
                                    }],
                                    __framer__transformTrigger: "onScrollTarget",
                                    __framer__transformViewportThreshold: 1,
                                    __perspectiveFX: !1,
                                    __targetOpacity: 1,
                                    className: "framer-smx3t1",
                                    id: oa,
                                    ref: Er,
                                    children: [e("div", {
                                        className: "framer-zv0mpw",
                                        children: e(i, {
                                            __fromCanvasComponent: !0,
                                            children: e(r, {
                                                children: e("ol", {
                                                    style: {
                                                        "--font-selector": "R0Y7T3BlbiBTYW5zLTgwMA==",
                                                        "--framer-font-family": '"Open Sans", "Open Sans Placeholder", sans-serif',
                                                        "--framer-font-size": "20px",
                                                        "--framer-font-weight": "800",
                                                        "--framer-letter-spacing": "0.01em",
                                                        "--framer-line-height": "1em",
                                                        "--framer-text-alignment": "left",
                                                        "--framer-text-color": "rgb(255, 250, 250)"
                                                    },
                                                    children: e("li", {
                                                        children: e("p", {
                                                            children: "Start with a Prompt"
                                                        })
                                                    })
                                                })
                                            }),
                                            className: "framer-8xskzj",
                                            fonts: ["GF;Open Sans-800"],
                                            verticalAlignment: "top",
                                            withExternalLayout: !0
                                        })
                                    }), e("div", {
                                        className: "framer-cl0k9v",
                                        children: e(f, {
                                            breakpoint: o,
                                            overrides: {
                                                jUuLb2ZS_: {
                                                    background: {
                                                        alt: "",
                                                        fit: "fill",
                                                        loading: s((n?.y || 0) + 0 + 6872 + 0 + 267 + 0 + 0 + 0 + 0 + 0 + 6.5 + 0 + 41.0892 + 25.4981),
                                                        pixelHeight: 810,
                                                        pixelWidth: 1440,
                                                        src: "https://framerusercontent.com/images/OFusmVZIko6zZR7owr2mkFR9E.svg"
                                                    }
                                                }
                                            },
                                            children: e(g, {
                                                background: {
                                                    alt: "",
                                                    fit: "fill",
                                                    pixelHeight: 810,
                                                    pixelWidth: 1440,
                                                    src: "https://framerusercontent.com/images/OFusmVZIko6zZR7owr2mkFR9E.svg"
                                                },
                                                className: "framer-123apfe"
                                            })
                                        })
                                    }), e("div", {
                                        className: "framer-1md29su",
                                        children: e(i, {
                                            __fromCanvasComponent: !0,
                                            children: t(r, {
                                                children: [e("p", {
                                                    style: {
                                                        "--font-selector": "R0Y7T3BlbiBTYW5zLXJlZ3VsYXI=",
                                                        "--framer-font-family": '"Open Sans", "Open Sans Placeholder", sans-serif',
                                                        "--framer-font-size": "10px",
                                                        "--framer-line-height": "1.1em",
                                                        "--framer-text-alignment": "center",
                                                        "--framer-text-color": "rgb(255, 255, 255)"
                                                    },
                                                    children: " Let shoppers search by style, vibe, or photo."
                                                }), e("p", {
                                                    style: {
                                                        "--font-selector": "R0Y7T3BlbiBTYW5zLXJlZ3VsYXI=",
                                                        "--framer-font-family": '"Open Sans", "Open Sans Placeholder", sans-serif',
                                                        "--framer-font-size": "10px",
                                                        "--framer-line-height": "1.1em",
                                                        "--framer-text-alignment": "center",
                                                        "--framer-text-color": "rgb(255, 255, 255)"
                                                    },
                                                    children: "Whether they type, talk, or upload a picture \u2014 your customers tell Genie what they want, and we take it from there."
                                                })]
                                            }),
                                            className: "framer-1q1tmow",
                                            fonts: ["GF;Open Sans-regular"],
                                            verticalAlignment: "top",
                                            withExternalLayout: !0
                                        })
                                    })]
                                }), t(z, {
                                    __framer__spring: {
                                        bounce: .2,
                                        damping: 60,
                                        delay: 0,
                                        duration: 5,
                                        durationBasedSpring: !0,
                                        ease: [.44, 0, .56, 1],
                                        mass: 1,
                                        stiffness: 500,
                                        type: "spring"
                                    },
                                    __framer__styleTransformEffectEnabled: !0,
                                    __framer__transformTargets: [{
                                        target: {
                                            opacity: 0,
                                            rotate: 0,
                                            rotateX: 0,
                                            rotateY: 0,
                                            scale: .5,
                                            skewX: 0,
                                            skewY: 0,
                                            x: 0,
                                            y: 0
                                        }
                                    }, {
                                        ref: Lr,
                                        target: {
                                            opacity: 1,
                                            rotate: 0,
                                            rotateX: 0,
                                            rotateY: 0,
                                            scale: 1,
                                            skewX: 0,
                                            skewY: 0,
                                            x: 0,
                                            y: 0
                                        }
                                    }],
                                    __framer__transformTrigger: "onScrollTarget",
                                    __framer__transformViewportThreshold: 1,
                                    __perspectiveFX: !1,
                                    __targetOpacity: 1,
                                    className: "framer-3dpb7r",
                                    id: ia,
                                    ref: Lr,
                                    children: [e("div", {
                                        className: "framer-1n6v6ls",
                                        children: e(i, {
                                            __fromCanvasComponent: !0,
                                            children: e(r, {
                                                children: e("ol", {
                                                    start: "2",
                                                    style: {
                                                        "--font-selector": "R0Y7T3BlbiBTYW5zLTgwMA==",
                                                        "--framer-font-family": '"Open Sans", "Open Sans Placeholder", sans-serif',
                                                        "--framer-font-size": "20px",
                                                        "--framer-font-weight": "800",
                                                        "--framer-letter-spacing": "0.01em",
                                                        "--framer-line-height": "1em",
                                                        "--framer-text-alignment": "left",
                                                        "--framer-text-color": "rgb(255, 250, 250)"
                                                    },
                                                    children: e("li", {
                                                        children: e("p", {
                                                            children: "Meet the Genie"
                                                        })
                                                    })
                                                })
                                            }),
                                            className: "framer-4whsas",
                                            fonts: ["GF;Open Sans-800"],
                                            verticalAlignment: "top",
                                            withExternalLayout: !0
                                        })
                                    }), e("div", {
                                        className: "framer-1tqh75r",
                                        children: e(f, {
                                            breakpoint: o,
                                            overrides: {
                                                jUuLb2ZS_: {
                                                    background: {
                                                        alt: "",
                                                        fit: "fill",
                                                        loading: s((n?.y || 0) + 0 + 6872 + 0 + 267 + 0 + 0 + 0 + 0 + 0 + 420.5 + 0 + 27.3402 + 17.5491),
                                                        pixelHeight: 810,
                                                        pixelWidth: 1440,
                                                        src: "https://framerusercontent.com/images/KpX2fGDNVcbWNHZLjPnHejP8ctQ.svg"
                                                    }
                                                }
                                            },
                                            children: e(g, {
                                                background: {
                                                    alt: "",
                                                    fit: "fill",
                                                    pixelHeight: 810,
                                                    pixelWidth: 1440,
                                                    src: "https://framerusercontent.com/images/KpX2fGDNVcbWNHZLjPnHejP8ctQ.svg"
                                                },
                                                className: "framer-14cwdtv"
                                            })
                                        })
                                    }), e("div", {
                                        className: "framer-v1xzuh",
                                        children: e(i, {
                                            __fromCanvasComponent: !0,
                                            children: t(r, {
                                                children: [e("p", {
                                                    style: {
                                                        "--font-selector": "R0Y7T3BlbiBTYW5zLXJlZ3VsYXI=",
                                                        "--framer-font-family": '"Open Sans", "Open Sans Placeholder", sans-serif',
                                                        "--framer-font-size": "10px",
                                                        "--framer-line-height": "1.1em",
                                                        "--framer-text-alignment": "center",
                                                        "--framer-text-color": "rgb(255, 255, 255)"
                                                    },
                                                    children: "Personalised looks. In seconds."
                                                }), e("p", {
                                                    style: {
                                                        "--font-selector": "R0Y7T3BlbiBTYW5zLXJlZ3VsYXI=",
                                                        "--framer-font-family": '"Open Sans", "Open Sans Placeholder", sans-serif',
                                                        "--framer-font-size": "10px",
                                                        "--framer-line-height": "1.1em",
                                                        "--framer-text-alignment": "center",
                                                        "--framer-text-color": "rgb(255, 255, 255)"
                                                    },
                                                    children: "See your catalog turn into complete outfits, tailored to each shopper\u2019s body type, vibe, and budget \u2014 no extra work needed."
                                                })]
                                            }),
                                            className: "framer-16ufbej",
                                            fonts: ["GF;Open Sans-regular"],
                                            verticalAlignment: "top",
                                            withExternalLayout: !0
                                        })
                                    })]
                                })]
                            }), t("div", {
                                className: "framer-1h2owc5",
                                id: la,
                                ref: sa,
                                children: [t(z, {
                                    __framer__spring: {
                                        bounce: .2,
                                        damping: 60,
                                        delay: 0,
                                        duration: 5,
                                        durationBasedSpring: !0,
                                        ease: [.44, 0, .56, 1],
                                        mass: 1,
                                        stiffness: 500,
                                        type: "spring"
                                    },
                                    __framer__styleTransformEffectEnabled: !0,
                                    __framer__transformTargets: [{
                                        target: {
                                            opacity: 0,
                                            rotate: 0,
                                            rotateX: 0,
                                            rotateY: 0,
                                            scale: .5,
                                            skewX: 0,
                                            skewY: 0,
                                            x: 0,
                                            y: 0
                                        }
                                    }, {
                                        ref: Vr,
                                        target: {
                                            opacity: 1,
                                            rotate: 0,
                                            rotateX: 0,
                                            rotateY: 0,
                                            scale: 1,
                                            skewX: 0,
                                            skewY: 0,
                                            x: 0,
                                            y: 0
                                        }
                                    }],
                                    __framer__transformTrigger: "onScrollTarget",
                                    __framer__transformViewportThreshold: 1,
                                    __perspectiveFX: !1,
                                    __targetOpacity: 1,
                                    className: "framer-1gpml6i",
                                    id: fa,
                                    ref: Vr,
                                    children: [e("div", {
                                        className: "framer-16o2vu7",
                                        children: e(i, {
                                            __fromCanvasComponent: !0,
                                            children: e(r, {
                                                children: e("ol", {
                                                    start: "3",
                                                    style: {
                                                        "--font-selector": "R0Y7T3BlbiBTYW5zLTgwMA==",
                                                        "--framer-font-family": '"Open Sans", "Open Sans Placeholder", sans-serif',
                                                        "--framer-font-size": "20px",
                                                        "--framer-font-weight": "800",
                                                        "--framer-letter-spacing": "0.01em",
                                                        "--framer-line-height": "1em",
                                                        "--framer-text-alignment": "left",
                                                        "--framer-text-color": "rgb(255, 250, 250)"
                                                    },
                                                    children: e("li", {
                                                        children: e("p", {
                                                            children: "Customise the Look"
                                                        })
                                                    })
                                                })
                                            }),
                                            className: "framer-17bumu0",
                                            fonts: ["GF;Open Sans-800"],
                                            verticalAlignment: "bottom",
                                            withExternalLayout: !0
                                        })
                                    }), e("div", {
                                        className: "framer-18c6tx8",
                                        children: e(f, {
                                            breakpoint: o,
                                            overrides: {
                                                jUuLb2ZS_: {
                                                    background: {
                                                        alt: "",
                                                        fit: "fill",
                                                        loading: s((n?.y || 0) + 0 + 6872 + 0 + 267 + 0 + 0 + 0 + 759 + 0 + -.5 + 10 + 51.512 + 18.3859),
                                                        pixelHeight: 810,
                                                        pixelWidth: 1440,
                                                        src: "https://framerusercontent.com/images/UeVBF6ZUPyLNoAx3XYrrBxateyM.svg"
                                                    }
                                                }
                                            },
                                            children: e(g, {
                                                background: {
                                                    alt: "",
                                                    fit: "fill",
                                                    pixelHeight: 810,
                                                    pixelWidth: 1440,
                                                    src: "https://framerusercontent.com/images/UeVBF6ZUPyLNoAx3XYrrBxateyM.svg"
                                                },
                                                className: "framer-p4al08"
                                            })
                                        })
                                    }), e("div", {
                                        className: "framer-1fn8rbt",
                                        children: e(i, {
                                            __fromCanvasComponent: !0,
                                            children: t(r, {
                                                children: [e("p", {
                                                    style: {
                                                        "--font-selector": "R0Y7T3BlbiBTYW5zLXJlZ3VsYXI=",
                                                        "--framer-font-family": '"Open Sans", "Open Sans Placeholder", sans-serif',
                                                        "--framer-font-size": "10px",
                                                        "--framer-line-height": "1.1em",
                                                        "--framer-text-alignment": "center",
                                                        "--framer-text-color": "rgb(255, 255, 255)"
                                                    },
                                                    children: "Talk to the Genie to tweak the look."
                                                }), e("p", {
                                                    style: {
                                                        "--font-selector": "R0Y7T3BlbiBTYW5zLXJlZ3VsYXI=",
                                                        "--framer-font-family": '"Open Sans", "Open Sans Placeholder", sans-serif',
                                                        "--framer-font-size": "10px",
                                                        "--framer-line-height": "1.1em",
                                                        "--framer-text-alignment": "center",
                                                        "--framer-text-color": "rgb(255, 255, 255)"
                                                    },
                                                    children: "Your customers can swap, remove, or add items to perfect the look \u2014 driving more engagement and increasing average cart size."
                                                })]
                                            }),
                                            className: "framer-1l8b7di",
                                            fonts: ["GF;Open Sans-regular"],
                                            verticalAlignment: "top",
                                            withExternalLayout: !0
                                        })
                                    })]
                                }), t(z, {
                                    __framer__spring: {
                                        bounce: .2,
                                        damping: 60,
                                        delay: 0,
                                        duration: 5,
                                        durationBasedSpring: !0,
                                        ease: [.44, 0, .56, 1],
                                        mass: 1,
                                        stiffness: 500,
                                        type: "spring"
                                    },
                                    __framer__styleTransformEffectEnabled: !0,
                                    __framer__transformTargets: [{
                                        target: {
                                            opacity: 0,
                                            rotate: 0,
                                            rotateX: 0,
                                            rotateY: 0,
                                            scale: .5,
                                            skewX: 0,
                                            skewY: 0,
                                            x: 0,
                                            y: 0
                                        }
                                    }, {
                                        ref: Nr,
                                        target: {
                                            opacity: 1,
                                            rotate: 0,
                                            rotateX: 0,
                                            rotateY: 0,
                                            scale: 1,
                                            skewX: 0,
                                            skewY: 0,
                                            x: 0,
                                            y: 0
                                        }
                                    }],
                                    __framer__transformTrigger: "onScrollTarget",
                                    __framer__transformViewportThreshold: 1,
                                    __perspectiveFX: !1,
                                    __targetOpacity: 1,
                                    className: "framer-oqw3p1",
                                    id: ma,
                                    ref: Nr,
                                    children: [e("div", {
                                        className: "framer-31zs4b",
                                        children: e(i, {
                                            __fromCanvasComponent: !0,
                                            children: e(r, {
                                                children: e("ol", {
                                                    start: "4",
                                                    style: {
                                                        "--font-selector": "R0Y7T3BlbiBTYW5zLTgwMA==",
                                                        "--framer-font-family": '"Open Sans", "Open Sans Placeholder", sans-serif',
                                                        "--framer-font-size": "20px",
                                                        "--framer-font-weight": "800",
                                                        "--framer-letter-spacing": "0.01em",
                                                        "--framer-line-height": "1em",
                                                        "--framer-text-alignment": "left",
                                                        "--framer-text-color": "rgb(255, 250, 250)"
                                                    },
                                                    children: e("li", {
                                                        children: e("p", {
                                                            children: "Virtual Try-On"
                                                        })
                                                    })
                                                })
                                            }),
                                            className: "framer-6hogf",
                                            fonts: ["GF;Open Sans-800"],
                                            verticalAlignment: "top",
                                            withExternalLayout: !0
                                        })
                                    }), e("div", {
                                        className: "framer-1xdkyse",
                                        children: e(f, {
                                            breakpoint: o,
                                            overrides: {
                                                jUuLb2ZS_: {
                                                    background: {
                                                        alt: "",
                                                        fit: "fill",
                                                        loading: s((n?.y || 0) + 0 + 6872 + 0 + 267 + 0 + 0 + 0 + 759 + 0 + 385.5 + 10 + 29.0116 + 21.8707),
                                                        pixelHeight: 810,
                                                        pixelWidth: 1440,
                                                        src: "https://framerusercontent.com/images/mOxus2s7JRZi445BEEn3qM4io6E.svg"
                                                    }
                                                }
                                            },
                                            children: e(g, {
                                                background: {
                                                    alt: "",
                                                    fit: "fill",
                                                    pixelHeight: 810,
                                                    pixelWidth: 1440,
                                                    src: "https://framerusercontent.com/images/mOxus2s7JRZi445BEEn3qM4io6E.svg"
                                                },
                                                className: "framer-1hi01b3"
                                            })
                                        })
                                    }), e("div", {
                                        className: "framer-1qx3dm",
                                        children: e(i, {
                                            __fromCanvasComponent: !0,
                                            children: t(r, {
                                                children: [e("p", {
                                                    style: {
                                                        "--font-selector": "R0Y7T3BlbiBTYW5zLXJlZ3VsYXI=",
                                                        "--framer-font-family": '"Open Sans", "Open Sans Placeholder", sans-serif',
                                                        "--framer-font-size": "10px",
                                                        "--framer-line-height": "1.1em",
                                                        "--framer-text-alignment": "center",
                                                        "--framer-text-color": "rgb(255, 255, 255)"
                                                    },
                                                    children: "Let them see before they buy."
                                                }), e("p", {
                                                    style: {
                                                        "--font-selector": "R0Y7T3BlbiBTYW5zLXJlZ3VsYXI=",
                                                        "--framer-font-family": '"Open Sans", "Open Sans Placeholder", sans-serif',
                                                        "--framer-font-size": "10px",
                                                        "--framer-line-height": "1.1em",
                                                        "--framer-text-alignment": "center",
                                                        "--framer-text-color": "rgb(255, 255, 255)"
                                                    },
                                                    children: "Outfits rendered on real bodies. Confidence goes up. "
                                                }), e("p", {
                                                    style: {
                                                        "--font-selector": "R0Y7T3BlbiBTYW5zLXJlZ3VsYXI=",
                                                        "--framer-font-family": '"Open Sans", "Open Sans Placeholder", sans-serif',
                                                        "--framer-font-size": "10px",
                                                        "--framer-line-height": "1.1em",
                                                        "--framer-text-alignment": "center",
                                                        "--framer-text-color": "rgb(255, 255, 255)"
                                                    },
                                                    children: "Returns go down."
                                                })]
                                            }),
                                            className: "framer-1beud41",
                                            fonts: ["GF;Open Sans-regular"],
                                            verticalAlignment: "top",
                                            withExternalLayout: !0
                                        })
                                    })]
                                })]
                            })]
                        })
                    }), e("div", {
                        className: "framer-1yzaovq",
                        "data-framer-name": "the platform"
                    })]
                }), re() && t("div", {
                    className: "framer-q3t4ff hidden-uh1o9d hidden-f5yxu5",
                    "data-framer-name": "wrapper",
                    id: ca,
                    ref: pa,
                    children: [t(z, {
                        __framer__spring: {
                            bounce: .2,
                            damping: 60,
                            delay: 0,
                            duration: .3,
                            durationBasedSpring: !0,
                            ease: [.44, 0, .56, 1],
                            mass: 1,
                            stiffness: 500,
                            type: "spring"
                        },
                        __framer__styleTransformEffectEnabled: !0,
                        __framer__transformTargets: [{
                            target: {
                                opacity: .5,
                                rotate: 0,
                                rotateX: 0,
                                rotateY: 0,
                                scale: 0,
                                skewX: 0,
                                skewY: 0,
                                x: 0,
                                y: 0
                            }
                        }, {
                            target: {
                                opacity: 1,
                                rotate: 0,
                                rotateX: 0,
                                rotateY: 0,
                                scale: 1,
                                skewX: 0,
                                skewY: 0,
                                x: 0,
                                y: 0
                            }
                        }],
                        __framer__transformTrigger: "onInView",
                        __perspectiveFX: !1,
                        __targetOpacity: 1,
                        className: "framer-1poiqvj",
                        "data-framer-name": "video styles",
                        id: da,
                        ref: u,
                        children: [t("div", {
                            className: "framer-1xnvsaw",
                            children: [e("div", {
                                className: "framer-10qm9c9",
                                children: e(i, {
                                    __fromCanvasComponent: !0,
                                    children: e(r, {
                                        children: e("h2", {
                                            style: {
                                                "--font-selector": "R0Y7Q2hhdSBQaGlsb21lbmUgT25lLXJlZ3VsYXI=",
                                                "--framer-font-family": '"Chau Philomene One", "Chau Philomene One Placeholder", sans-serif',
                                                "--framer-font-open-type-features": "'cv01' on, 'cv09' on, 'cv11' on, 'cv05' on, 'ss03' on",
                                                "--framer-font-size": "14px",
                                                "--framer-letter-spacing": "-0.03em",
                                                "--framer-line-height": "1em",
                                                "--framer-text-alignment": "center",
                                                "--framer-text-color": "var(--token-8961fb69-0ea3-46ab-8b8e-1f9187ebd1a9, rgb(255, 255, 255))"
                                            },
                                            children: "WELCOME TO STYLEGENIE"
                                        })
                                    }),
                                    className: "framer-1x5gj0e",
                                    fonts: ["GF;Chau Philomene One-regular"],
                                    id: "1x5gj0e",
                                    verticalAlignment: "top",
                                    withExternalLayout: !0
                                })
                            }), e("div", {
                                className: "framer-8rrk40",
                                children: e(i, {
                                    __fromCanvasComponent: !0,
                                    children: t(r, {
                                        children: [e("p", {
                                            style: {
                                                "--font-selector": "R0Y7QmV2YW4tcmVndWxhcg==",
                                                "--framer-font-family": '"Bevan", "Bevan Placeholder", serif',
                                                "--framer-font-open-type-features": "'cv09' on, 'cv01' on, 'cv05' on, 'ss03' on",
                                                "--framer-font-size": "40px",
                                                "--framer-letter-spacing": "-0.01em",
                                                "--framer-line-height": "1.1em",
                                                "--framer-text-alignment": "center",
                                                "--framer-text-color": "rgb(255, 252, 252)"
                                            },
                                            children: "UNLOCK THE POWER OF"
                                        }), e("p", {
                                            style: {
                                                "--font-selector": "R0Y7QmV2YW4tcmVndWxhcg==",
                                                "--framer-font-family": '"Bevan", "Bevan Placeholder", serif',
                                                "--framer-font-open-type-features": "'cv09' on, 'cv01' on, 'cv05' on, 'ss03' on",
                                                "--framer-font-size": "40px",
                                                "--framer-letter-spacing": "-0.01em",
                                                "--framer-line-height": "1.1em",
                                                "--framer-text-alignment": "center",
                                                "--framer-text-color": "rgb(255, 252, 252)"
                                            },
                                            children: "AI-DRIVEN PERSONAL STYLE"
                                        })]
                                    }),
                                    className: "framer-kuvfj5",
                                    fonts: ["GF;Bevan-regular"],
                                    verticalAlignment: "top",
                                    withExternalLayout: !0
                                })
                            })]
                        }), t("div", {
                            className: "framer-1y5zp8r",
                            children: [e(f, {
                                breakpoint: o,
                                overrides: {
                                    hIWTqwvPm: {
                                        background: {
                                            alt: "",
                                            fit: "fill",
                                            loading: s((n?.y || 0) + 0 + 2240 + 0 + 0 + 0 + 220 + 395.003 - 135),
                                            pixelHeight: 1440,
                                            pixelWidth: 1440,
                                            src: "https://framerusercontent.com/images/wEDaJSqh3MsJnu67DrLfBckNiOQ.gif"
                                        }
                                    }
                                },
                                children: e(g, {
                                    background: {
                                        alt: "",
                                        fit: "fill",
                                        pixelHeight: 1440,
                                        pixelWidth: 1440,
                                        src: "https://framerusercontent.com/images/wEDaJSqh3MsJnu67DrLfBckNiOQ.gif"
                                    },
                                    className: "framer-116oiz3"
                                })
                            }), e("div", {
                                className: "framer-19ajcws",
                                children: e(li, {
                                    __framer__spring: {
                                        damping: 60,
                                        delay: 0,
                                        duration: .3,
                                        ease: [.44, 0, .56, 1],
                                        mass: 1,
                                        stiffness: 500,
                                        type: "spring"
                                    },
                                    __framer__styleTransformEffectEnabled: !0,
                                    __framer__transformTargets: [{
                                        target: {
                                            opacity: 1,
                                            rotate: 0,
                                            rotateX: 0,
                                            rotateY: 0,
                                            scale: 1,
                                            skewX: 0,
                                            skewY: 0,
                                            x: 0,
                                            y: 0
                                        }
                                    }, {
                                        ref: Ar,
                                        target: {
                                            opacity: 1,
                                            rotate: 0,
                                            rotateX: 0,
                                            rotateY: 0,
                                            scale: 2.8,
                                            skewX: 0,
                                            skewY: 0,
                                            x: 0,
                                            y: 0
                                        }
                                    }],
                                    __framer__transformTrigger: "onScrollTarget",
                                    __framer__transformViewportThreshold: 1,
                                    __perspectiveFX: !1,
                                    __targetOpacity: 1,
                                    className: "framer-hg2l27",
                                    "data-framer-name": "videocontainer",
                                    id: ha,
                                    ref: ga,
                                    children: e(ze, {
                                        children: e(Be, {
                                            className: "framer-1sysmx9-container",
                                            id: "1sysmx9",
                                            isAuthoredByUser: !0,
                                            isModuleExternal: !0,
                                            nodeId: "FfzsZ0FB1",
                                            rendersWithMotion: !0,
                                            scopeId: "Z9xpqCjmE",
                                            style: {
                                                transformPerspective: 500
                                            },
                                            children: e(Fe, {
                                                backgroundColor: "rgba(0, 0, 0, 0)",
                                                borderRadius: 12,
                                                bottomLeftRadius: 12,
                                                bottomRightRadius: 12,
                                                controls: !1,
                                                height: "100%",
                                                id: "FfzsZ0FB1",
                                                isMixedBorderRadius: !1,
                                                layoutId: "FfzsZ0FB1",
                                                loop: !0,
                                                muted: !0,
                                                objectFit: "cover",
                                                playing: !0,
                                                posterEnabled: !0,
                                                srcFile: "https://framerusercontent.com/assets/un6TVfkx4zwKvl6VyRjjCSydvo.mp4",
                                                srcType: "Upload",
                                                srcUrl: "https://framerusercontent.com/assets/MLWPbW1dUQawJLhhun3dBwpgJak.mp4",
                                                startTime: 0,
                                                style: {
                                                    height: "100%",
                                                    width: "100%"
                                                },
                                                topLeftRadius: 12,
                                                topRightRadius: 12,
                                                volume: 25,
                                                width: "100%"
                                            })
                                        })
                                    })
                                })
                            }), e(f, {
                                breakpoint: o,
                                overrides: {
                                    hIWTqwvPm: {
                                        background: {
                                            alt: "",
                                            fit: "fill",
                                            loading: s((n?.y || 0) + 0 + 2240 + 0 + 0 + 0 + 220 + 22),
                                            pixelHeight: 1440,
                                            pixelWidth: 1440,
                                            src: "https://framerusercontent.com/images/wEDaJSqh3MsJnu67DrLfBckNiOQ.gif"
                                        }
                                    }
                                },
                                children: e(g, {
                                    background: {
                                        alt: "",
                                        fit: "fill",
                                        pixelHeight: 1440,
                                        pixelWidth: 1440,
                                        src: "https://framerusercontent.com/images/wEDaJSqh3MsJnu67DrLfBckNiOQ.gif"
                                    },
                                    className: "framer-h7laz2"
                                })
                            })]
                        }), t("div", {
                            className: "framer-16na4vu",
                            id: xa,
                            ref: ua,
                            children: [e("div", {
                                className: "framer-11dc5wb",
                                children: e(i, {
                                    __fromCanvasComponent: !0,
                                    children: e(r, {
                                        children: e("h2", {
                                            style: {
                                                "--font-selector": "R0Y7T3BlbiBTYW5zLTgwMA==",
                                                "--framer-font-family": '"Open Sans", "Open Sans Placeholder", sans-serif',
                                                "--framer-font-open-type-features": "'cv01' on, 'cv09' on, 'cv11' on, 'cv05' on, 'ss03' on",
                                                "--framer-font-size": "14px",
                                                "--framer-font-weight": "800",
                                                "--framer-line-height": "1em",
                                                "--framer-text-alignment": "center",
                                                "--framer-text-color": "var(--token-8961fb69-0ea3-46ab-8b8e-1f9187ebd1a9, rgb(255, 255, 255))"
                                            },
                                            children: "Say goodbye to doom scrolling \u2014 Empower your customers with AI-driven outfit discovery "
                                        })
                                    }),
                                    className: "framer-wlkxgz",
                                    fonts: ["GF;Open Sans-800"],
                                    verticalAlignment: "center",
                                    withExternalLayout: !0
                                })
                            }), e("div", {
                                className: "framer-17rxw01",
                                children: e(i, {
                                    __fromCanvasComponent: !0,
                                    children: e(r, {
                                        children: e("p", {
                                            style: {
                                                "--font-selector": "R0Y7T3BlbiBTYW5zLXJlZ3VsYXI=",
                                                "--framer-font-family": '"Open Sans", "Open Sans Placeholder", sans-serif',
                                                "--framer-font-open-type-features": "'cv09' on, 'cv01' on, 'cv05' on, 'ss03' on",
                                                "--framer-font-size": "15px",
                                                "--framer-letter-spacing": "-0.01em",
                                                "--framer-line-height": "1.1em",
                                                "--framer-text-alignment": "center",
                                                "--framer-text-color": "rgb(255, 252, 252)"
                                            },
                                            children: "One prompt is all it takes to turn browsers into buyers!"
                                        })
                                    }),
                                    className: "framer-1x0arrs",
                                    fonts: ["GF;Open Sans-regular"],
                                    transformTemplate: ir,
                                    verticalAlignment: "top",
                                    withExternalLayout: !0
                                })
                            })]
                        })]
                    }), e("div", {
                        className: "framer-16mkqyd",
                        "data-framer-name": "tempovideo",
                        id: wa,
                        ref: Ar
                    })]
                }), re() && e(f, {
                    breakpoint: o,
                    overrides: {
                        hIWTqwvPm: {
                            background: {
                                alt: "",
                                fit: "fill",
                                loading: s((n?.y || 0) + 0 + 3641),
                                pixelHeight: 810,
                                pixelWidth: 1440,
                                sizes: `calc(${n?.width || "100vw"} - 40px)`,
                                src: "https://framerusercontent.com/images/HECtok0V6TbZ1bMdAo0kVVe8ck.svg",
                                srcSet: "https://framerusercontent.com/images/HECtok0V6TbZ1bMdAo0kVVe8ck.svg?scale-down-to=512 512w,https://framerusercontent.com/images/HECtok0V6TbZ1bMdAo0kVVe8ck.svg?scale-down-to=1024 1024w,https://framerusercontent.com/images/HECtok0V6TbZ1bMdAo0kVVe8ck.svg 1440w"
                            }
                        }
                    },
                    children: t(g, {
                        background: {
                            alt: "",
                            fit: "fill",
                            pixelHeight: 810,
                            pixelWidth: 1440,
                            src: "https://framerusercontent.com/images/HECtok0V6TbZ1bMdAo0kVVe8ck.svg",
                            srcSet: "https://framerusercontent.com/images/HECtok0V6TbZ1bMdAo0kVVe8ck.svg?scale-down-to=512 512w,https://framerusercontent.com/images/HECtok0V6TbZ1bMdAo0kVVe8ck.svg?scale-down-to=1024 1024w,https://framerusercontent.com/images/HECtok0V6TbZ1bMdAo0kVVe8ck.svg 1440w"
                        },
                        className: "framer-5y5svz hidden-uh1o9d hidden-f5yxu5",
                        id: ya,
                        ref: cr,
                        children: [e(Q, {
                            __framer__spring: {
                                bounce: .2,
                                damping: 60,
                                delay: 0,
                                duration: 10,
                                durationBasedSpring: !0,
                                ease: [.44, 0, .56, 1],
                                mass: 1,
                                stiffness: 500,
                                type: "spring"
                            },
                            __framer__styleTransformEffectEnabled: !0,
                            __framer__transformTargets: [{
                                target: {
                                    opacity: .4,
                                    rotate: 0,
                                    rotateX: 50,
                                    rotateY: 50,
                                    scale: .2,
                                    skewX: 0,
                                    skewY: 0,
                                    x: 200,
                                    y: 10
                                }
                            }, {
                                ref: cr,
                                target: {
                                    opacity: 1,
                                    rotate: 0,
                                    rotateX: 0,
                                    rotateY: 0,
                                    scale: 1,
                                    skewX: 0,
                                    skewY: 0,
                                    x: 0,
                                    y: 0
                                }
                            }],
                            __framer__transformTrigger: "onScrollTarget",
                            __framer__transformViewportThreshold: 1,
                            __fromCanvasComponent: !0,
                            __perspectiveFX: !1,
                            __targetOpacity: 1,
                            children: t(r, {
                                children: [e("p", {
                                    style: {
                                        "--font-selector": "R0Y7QmV2YW4tcmVndWxhcg==",
                                        "--framer-font-family": '"Bevan", "Bevan Placeholder", serif',
                                        "--framer-font-open-type-features": "'cv09' on, 'cv01' on, 'cv05' on, 'ss03' on",
                                        "--framer-font-size": "40px",
                                        "--framer-letter-spacing": "-0.01em",
                                        "--framer-line-height": "1.1em",
                                        "--framer-text-alignment": "center",
                                        "--framer-text-color": "rgb(255, 252, 252)"
                                    },
                                    children: "FASHION IS WHAT YOU SELL"
                                }), e("p", {
                                    style: {
                                        "--font-selector": "R0Y7QmV2YW4tcmVndWxhcg==",
                                        "--framer-font-family": '"Bevan", "Bevan Placeholder", serif',
                                        "--framer-font-open-type-features": "'cv09' on, 'cv01' on, 'cv05' on, 'ss03' on",
                                        "--framer-font-size": "40px",
                                        "--framer-letter-spacing": "-0.01em",
                                        "--framer-line-height": "1.1em",
                                        "--framer-text-alignment": "center",
                                        "--framer-text-color": "rgb(255, 252, 252)"
                                    },
                                    children: "STYLE IS HOW YOU SELL IT"
                                })]
                            }),
                            className: "framer-1vl0tbd",
                            fonts: ["GF;Bevan-regular"],
                            verticalAlignment: "top",
                            withExternalLayout: !0
                        }), e(Q, {
                            __framer__spring: {
                                bounce: .2,
                                damping: 60,
                                delay: 0,
                                duration: 10,
                                durationBasedSpring: !0,
                                ease: [.44, 0, .56, 1],
                                mass: 1,
                                stiffness: 500,
                                type: "spring"
                            },
                            __framer__styleTransformEffectEnabled: !0,
                            __framer__transformTargets: [{
                                target: {
                                    opacity: .5,
                                    rotate: 0,
                                    rotateX: 0,
                                    rotateY: 0,
                                    scale: 0,
                                    skewX: 0,
                                    skewY: 0,
                                    x: 0,
                                    y: 0
                                }
                            }, {
                                ref: cr,
                                target: {
                                    opacity: 1,
                                    rotate: 0,
                                    rotateX: 0,
                                    rotateY: 0,
                                    scale: 1,
                                    skewX: 0,
                                    skewY: 0,
                                    x: 0,
                                    y: 0
                                }
                            }],
                            __framer__transformTrigger: "onScrollTarget",
                            __framer__transformViewportThreshold: 1,
                            __fromCanvasComponent: !0,
                            __perspectiveFX: !1,
                            __targetOpacity: 1,
                            children: e(r, {
                                children: e("h2", {
                                    style: {
                                        "--font-selector": "R0Y7T3BlbiBTYW5zLTgwMA==",
                                        "--framer-font-family": '"Open Sans", "Open Sans Placeholder", sans-serif',
                                        "--framer-font-open-type-features": "'cv01' on, 'cv09' on, 'cv11' on, 'cv05' on, 'ss03' on",
                                        "--framer-font-size": "18px",
                                        "--framer-font-weight": "800",
                                        "--framer-line-height": "1em",
                                        "--framer-text-alignment": "center",
                                        "--framer-text-color": "var(--token-8961fb69-0ea3-46ab-8b8e-1f9187ebd1a9, rgb(255, 255, 255))"
                                    },
                                    children: "Meet your AI-Powered Personal Stylist"
                                })
                            }),
                            className: "framer-1303agm",
                            fonts: ["GF;Open Sans-800"],
                            verticalAlignment: "center",
                            withExternalLayout: !0
                        })]
                    })
                }), re() && t("div", {
                    className: "framer-505jbb hidden-uh1o9d hidden-f5yxu5",
                    "data-framer-name": "scroll animation section",
                    id: va,
                    ref: ba,
                    children: [t("div", {
                        className: "framer-1rrb0k5",
                        "data-framer-name": "sticky",
                        children: [t(z, {
                            __framer__spring: {
                                bounce: .2,
                                damping: 60,
                                delay: 0,
                                duration: 1,
                                durationBasedSpring: !0,
                                ease: [.44, 0, .56, 1],
                                mass: 1,
                                stiffness: 500,
                                type: "spring"
                            },
                            __framer__styleTransformEffectEnabled: !0,
                            __framer__transformTargets: [{
                                target: {
                                    opacity: 0,
                                    rotate: 0,
                                    rotateX: 0,
                                    rotateY: 0,
                                    scale: .5,
                                    skewX: 0,
                                    skewY: 0,
                                    x: -350,
                                    y: 0
                                }
                            }, {
                                ref: Xr,
                                target: {
                                    opacity: 1,
                                    rotate: 0,
                                    rotateX: 0,
                                    rotateY: 0,
                                    scale: 1,
                                    skewX: 0,
                                    skewY: 0,
                                    x: 0,
                                    y: 0
                                }
                            }],
                            __framer__transformTrigger: "onScrollTarget",
                            __framer__transformViewportThreshold: 1,
                            __perspectiveFX: !1,
                            __targetOpacity: 1,
                            className: "framer-11nhb1q",
                            id: ka,
                            ref: Xr,
                            children: [e(i, {
                                __fromCanvasComponent: !0,
                                children: e(r, {
                                    children: e("p", {
                                        style: {
                                            "--font-selector": "R0Y7QmV2YW4tcmVndWxhcg==",
                                            "--framer-font-family": '"Bevan", "Bevan Placeholder", serif',
                                            "--framer-font-open-type-features": "'cv09' on, 'cv01' on, 'cv05' on, 'ss03' on",
                                            "--framer-font-size": "30px",
                                            "--framer-letter-spacing": "-0.01em",
                                            "--framer-line-height": "1.1em",
                                            "--framer-text-alignment": "left",
                                            "--framer-text-color": "rgb(255, 252, 252)"
                                        },
                                        children: "COMPLETE  LOOKS  STYLED  IN SECONDS"
                                    })
                                }),
                                className: "framer-15zwwre",
                                fonts: ["GF;Bevan-regular"],
                                verticalAlignment: "top",
                                withExternalLayout: !0
                            }), e(i, {
                                __fromCanvasComponent: !0,
                                children: e(r, {
                                    children: t("h2", {
                                        style: {
                                            "--font-selector": "R0Y7T3BlbiBTYW5zLTgwMA==",
                                            "--framer-font-family": '"Open Sans", "Open Sans Placeholder", sans-serif',
                                            "--framer-font-open-type-features": "'cv01' on, 'cv09' on, 'cv11' on, 'cv05' on, 'ss03' on",
                                            "--framer-font-size": "12px",
                                            "--framer-font-weight": "800",
                                            "--framer-line-height": "1em",
                                            "--framer-text-alignment": "left",
                                            "--framer-text-color": "var(--token-8961fb69-0ea3-46ab-8b8e-1f9187ebd1a9, rgb(255, 255, 255))"
                                        },
                                        children: ["We turn your catalog into full looks tailored to each customer\u2019s style, body type, and budget.", e("br", {}), e("br", {}), "Smart, scalable, and ready to convert."]
                                    })
                                }),
                                className: "framer-tkdotx",
                                fonts: ["GF;Open Sans-800"],
                                verticalAlignment: "center",
                                withExternalLayout: !0
                            })]
                        }), t("div", {
                            className: "framer-1qg3b7p",
                            children: [e(f, {
                                breakpoint: o,
                                overrides: {
                                    hIWTqwvPm: {
                                        background: {
                                            alt: "",
                                            fit: "fill",
                                            loading: s((n?.y || 0) + 0 + 4108 + 0 + 0 + 0 + 384 + 300 - 172),
                                            pixelHeight: 810,
                                            pixelWidth: 1440,
                                            src: "https://framerusercontent.com/images/ohUvSeqcea4gEOi3G9mVoqXnveQ.svg"
                                        }
                                    }
                                },
                                children: e(I, {
                                    __framer__spring: {
                                        bounce: .2,
                                        damping: 60,
                                        delay: 0,
                                        duration: 3,
                                        durationBasedSpring: !0,
                                        ease: [.44, 0, .56, 1],
                                        mass: 1,
                                        stiffness: 500,
                                        type: "spring"
                                    },
                                    __framer__styleTransformEffectEnabled: !0,
                                    __framer__transformTargets: [{
                                        target: {
                                            opacity: 1,
                                            rotate: 0,
                                            rotateX: 0,
                                            rotateY: 0,
                                            scale: .4,
                                            skewX: 0,
                                            skewY: 0,
                                            x: 300,
                                            y: 0
                                        }
                                    }, {
                                        ref: Ur,
                                        target: {
                                            opacity: 1,
                                            rotate: 0,
                                            rotateX: 0,
                                            rotateY: 0,
                                            scale: 1,
                                            skewX: 0,
                                            skewY: 0,
                                            x: 0,
                                            y: 0
                                        }
                                    }, {
                                        ref: Ve,
                                        target: {
                                            opacity: 1,
                                            rotate: 0,
                                            rotateX: 0,
                                            rotateY: 0,
                                            scale: .7,
                                            skewX: 0,
                                            skewY: 0,
                                            x: -220,
                                            y: 520
                                        }
                                    }],
                                    __framer__transformTrigger: "onScrollTarget",
                                    __framer__transformViewportThreshold: 1,
                                    __perspectiveFX: !1,
                                    __targetOpacity: 1,
                                    background: {
                                        alt: "",
                                        fit: "fill",
                                        pixelHeight: 810,
                                        pixelWidth: 1440,
                                        src: "https://framerusercontent.com/images/ohUvSeqcea4gEOi3G9mVoqXnveQ.svg"
                                    },
                                    className: "framer-14x43xm",
                                    "data-framer-name": "image 5",
                                    whileHover: S
                                })
                            }), e(f, {
                                breakpoint: o,
                                overrides: {
                                    hIWTqwvPm: {
                                        background: {
                                            alt: "",
                                            fit: "fill",
                                            loading: s((n?.y || 0) + 0 + 4108 + 0 + 0 + 0 + 384 + 300 - 172),
                                            pixelHeight: 810,
                                            pixelWidth: 1440,
                                            src: "https://framerusercontent.com/images/c0RPswH9Cd8OuaHzxyf86XJB2RM.svg"
                                        }
                                    }
                                },
                                children: e(I, {
                                    __framer__spring: {
                                        bounce: .2,
                                        damping: 60,
                                        delay: 0,
                                        duration: 3,
                                        durationBasedSpring: !0,
                                        ease: [.44, 0, .56, 1],
                                        mass: 1,
                                        stiffness: 500,
                                        type: "spring"
                                    },
                                    __framer__styleTransformEffectEnabled: !0,
                                    __framer__transformTargets: [{
                                        target: {
                                            opacity: 1,
                                            rotate: 0,
                                            rotateX: 0,
                                            rotateY: 0,
                                            scale: .4,
                                            skewX: 0,
                                            skewY: 0,
                                            x: 300,
                                            y: 0
                                        }
                                    }, {
                                        ref: jr,
                                        target: {
                                            opacity: 1,
                                            rotate: 0,
                                            rotateX: 0,
                                            rotateY: 0,
                                            scale: 1,
                                            skewX: 0,
                                            skewY: 0,
                                            x: 0,
                                            y: 0
                                        }
                                    }, {
                                        ref: Ve,
                                        target: {
                                            opacity: 1,
                                            rotate: 0,
                                            rotateX: 0,
                                            rotateY: 0,
                                            scale: .7,
                                            skewX: 0,
                                            skewY: 0,
                                            x: -120,
                                            y: 327
                                        }
                                    }],
                                    __framer__transformTrigger: "onScrollTarget",
                                    __framer__transformViewportThreshold: 1,
                                    __perspectiveFX: !1,
                                    __targetOpacity: 1,
                                    background: {
                                        alt: "",
                                        fit: "fill",
                                        pixelHeight: 810,
                                        pixelWidth: 1440,
                                        src: "https://framerusercontent.com/images/c0RPswH9Cd8OuaHzxyf86XJB2RM.svg"
                                    },
                                    className: "framer-1k2p28v",
                                    "data-framer-name": "image 4",
                                    whileHover: S
                                })
                            }), e(f, {
                                breakpoint: o,
                                overrides: {
                                    hIWTqwvPm: {
                                        background: {
                                            alt: "",
                                            fit: "fill",
                                            loading: s((n?.y || 0) + 0 + 4108 + 0 + 0 + 0 + 384 + 300 - 172),
                                            pixelHeight: 810,
                                            pixelWidth: 1440,
                                            src: "https://framerusercontent.com/images/2ekNET4EbNc8yTzDY7v36sJ1uno.svg"
                                        }
                                    }
                                },
                                children: e(I, {
                                    __framer__spring: {
                                        bounce: .2,
                                        damping: 60,
                                        delay: 0,
                                        duration: 3,
                                        durationBasedSpring: !0,
                                        ease: [.44, 0, .56, 1],
                                        mass: 1,
                                        stiffness: 500,
                                        type: "spring"
                                    },
                                    __framer__styleTransformEffectEnabled: !0,
                                    __framer__transformTargets: [{
                                        target: {
                                            opacity: 1,
                                            rotate: 0,
                                            rotateX: 0,
                                            rotateY: 0,
                                            scale: .4,
                                            skewX: 0,
                                            skewY: 0,
                                            x: 300,
                                            y: 0
                                        }
                                    }, {
                                        ref: Pr,
                                        target: {
                                            opacity: 1,
                                            rotate: 0,
                                            rotateX: 0,
                                            rotateY: 0,
                                            scale: 1,
                                            skewX: 0,
                                            skewY: 0,
                                            x: 0,
                                            y: 0
                                        }
                                    }, {
                                        ref: Ve,
                                        target: {
                                            opacity: 1,
                                            rotate: 0,
                                            rotateX: 0,
                                            rotateY: 0,
                                            scale: .7,
                                            skewX: 0,
                                            skewY: 0,
                                            x: 0,
                                            y: 148
                                        }
                                    }],
                                    __framer__transformTrigger: "onScrollTarget",
                                    __framer__transformViewportThreshold: 1,
                                    __perspectiveFX: !1,
                                    __targetOpacity: 1,
                                    background: {
                                        alt: "",
                                        fit: "fill",
                                        pixelHeight: 810,
                                        pixelWidth: 1440,
                                        src: "https://framerusercontent.com/images/2ekNET4EbNc8yTzDY7v36sJ1uno.svg"
                                    },
                                    className: "framer-1jctund",
                                    "data-framer-name": "image 3",
                                    whileHover: S
                                })
                            }), e(f, {
                                breakpoint: o,
                                overrides: {
                                    hIWTqwvPm: {
                                        background: {
                                            alt: "",
                                            fit: "fill",
                                            loading: s((n?.y || 0) + 0 + 4108 + 0 + 0 + 0 + 384 + 300 - 172),
                                            pixelHeight: 810,
                                            pixelWidth: 1440,
                                            src: "https://framerusercontent.com/images/Hw0CjS6gqIBxLqy5oEWp4ZoOgeo.svg"
                                        }
                                    }
                                },
                                children: e(I, {
                                    __framer__spring: {
                                        bounce: .2,
                                        damping: 60,
                                        delay: 0,
                                        duration: 3,
                                        durationBasedSpring: !0,
                                        ease: [.44, 0, .56, 1],
                                        mass: 1,
                                        stiffness: 500,
                                        type: "spring"
                                    },
                                    __framer__styleTransformEffectEnabled: !0,
                                    __framer__transformTargets: [{
                                        target: {
                                            opacity: 1,
                                            rotate: 0,
                                            rotateX: 0,
                                            rotateY: 0,
                                            scale: .4,
                                            skewX: 0,
                                            skewY: 0,
                                            x: 300,
                                            y: 0
                                        }
                                    }, {
                                        ref: Mr,
                                        target: {
                                            opacity: 1,
                                            rotate: 0,
                                            rotateX: 0,
                                            rotateY: 0,
                                            scale: 1,
                                            skewX: 0,
                                            skewY: 0,
                                            x: 0,
                                            y: 0
                                        }
                                    }, {
                                        ref: Ve,
                                        target: {
                                            opacity: 1,
                                            rotate: 0,
                                            rotateX: 0,
                                            rotateY: 0,
                                            scale: .7,
                                            skewX: 0,
                                            skewY: 0,
                                            x: 120,
                                            y: -40
                                        }
                                    }],
                                    __framer__transformTrigger: "onScrollTarget",
                                    __framer__transformViewportThreshold: 1,
                                    __perspectiveFX: !1,
                                    __targetOpacity: 1,
                                    background: {
                                        alt: "",
                                        fit: "fill",
                                        pixelHeight: 810,
                                        pixelWidth: 1440,
                                        src: "https://framerusercontent.com/images/Hw0CjS6gqIBxLqy5oEWp4ZoOgeo.svg"
                                    },
                                    className: "framer-khhgog",
                                    "data-framer-name": "image 2",
                                    whileHover: S
                                })
                            }), e(f, {
                                breakpoint: o,
                                overrides: {
                                    hIWTqwvPm: {
                                        background: {
                                            alt: "",
                                            fit: "fill",
                                            loading: s((n?.y || 0) + 0 + 4108 + 0 + 0 + 0 + 384 + 300 - 172),
                                            pixelHeight: 810,
                                            pixelWidth: 1440,
                                            src: "https://framerusercontent.com/images/R5P57hWNyoplNi1Vi8D0TuqmeWE.svg"
                                        }
                                    }
                                },
                                children: e(I, {
                                    __framer__spring: {
                                        bounce: .2,
                                        damping: 60,
                                        delay: 0,
                                        duration: 3,
                                        durationBasedSpring: !0,
                                        ease: [.44, 0, .56, 1],
                                        mass: 1,
                                        stiffness: 500,
                                        type: "spring"
                                    },
                                    __framer__styleTransformEffectEnabled: !0,
                                    __framer__transformTargets: [{
                                        target: {
                                            opacity: 1,
                                            rotate: 0,
                                            rotateX: 0,
                                            rotateY: 0,
                                            scale: .4,
                                            skewX: 0,
                                            skewY: 0,
                                            x: 300,
                                            y: 0
                                        }
                                    }, {
                                        ref: qr,
                                        target: {
                                            opacity: 1,
                                            rotate: 0,
                                            rotateX: 0,
                                            rotateY: 0,
                                            scale: 1,
                                            skewX: 0,
                                            skewY: 0,
                                            x: 0,
                                            y: 0
                                        }
                                    }, {
                                        ref: Ve,
                                        target: {
                                            opacity: 1,
                                            rotate: 0,
                                            rotateX: 0,
                                            rotateY: 0,
                                            scale: .7,
                                            skewX: 0,
                                            skewY: 0,
                                            x: 220,
                                            y: -220
                                        }
                                    }],
                                    __framer__transformTrigger: "onScrollTarget",
                                    __framer__transformViewportThreshold: 1,
                                    __perspectiveFX: !1,
                                    __targetOpacity: 1,
                                    background: {
                                        alt: "",
                                        fit: "fill",
                                        pixelHeight: 810,
                                        pixelWidth: 1440,
                                        src: "https://framerusercontent.com/images/R5P57hWNyoplNi1Vi8D0TuqmeWE.svg"
                                    },
                                    className: "framer-1ax8dbx",
                                    "data-framer-name": "image 1",
                                    whileHover: S
                                })
                            })]
                        })]
                    }), e("div", {
                        className: "framer-18qjirh",
                        "data-framer-name": "trigger entrada",
                        id: _a,
                        ref: qr
                    }), e("div", {
                        className: "framer-1snwdw4",
                        "data-framer-name": "trigger entrada",
                        id: Ta,
                        ref: Mr
                    }), e("div", {
                        className: "framer-1b4qpr7",
                        "data-framer-name": "trigger entrada",
                        id: Sa,
                        ref: Pr
                    }), e("div", {
                        className: "framer-14sp9wp",
                        "data-framer-name": "trigger entrada",
                        id: Ra,
                        ref: jr
                    }), e("div", {
                        className: "framer-ao4pa1",
                        "data-framer-name": "trigger entrada",
                        id: Ya,
                        ref: Ur
                    }), e("div", {
                        className: "framer-d595rp",
                        "data-framer-name": "trigger saida",
                        id: za,
                        ref: Ve
                    })]
                }), re() && e("div", {
                    className: "framer-q6j4k8 hidden-uh1o9d hidden-f5yxu5"
                }), re() && t("div", {
                    className: "framer-hczyl2 hidden-uh1o9d hidden-f5yxu5",
                    id: "hczyl2",
                    children: [e("div", {
                        className: "framer-yurhem",
                        "data-framer-name": "fundo teste"
                    }), t(z, {
                        __framer__spring: {
                            bounce: .2,
                            damping: 60,
                            delay: 0,
                            duration: 1,
                            durationBasedSpring: !0,
                            ease: [.44, 0, .56, 1],
                            mass: 1,
                            stiffness: 500,
                            type: "spring"
                        },
                        __framer__styleTransformEffectEnabled: !0,
                        __framer__transformTargets: [{
                            target: {
                                opacity: 1,
                                rotate: 0,
                                rotateX: 0,
                                rotateY: 0,
                                scale: .5,
                                skewX: 0,
                                skewY: 0,
                                x: 0,
                                y: 200
                            }
                        }, {
                            ref: Hr,
                            target: {
                                opacity: 1,
                                rotate: 0,
                                rotateX: 0,
                                rotateY: 0,
                                scale: 1,
                                skewX: 0,
                                skewY: 0,
                                x: 0,
                                y: 0
                            }
                        }],
                        __framer__transformTrigger: "onScrollTarget",
                        __framer__transformViewportThreshold: 1,
                        __perspectiveFX: !1,
                        __targetOpacity: 1,
                        className: "framer-ven34v",
                        id: Ba,
                        ref: Hr,
                        children: [e(p.div, {
                            className: "framer-s0y5bc",
                            whileHover: S,
                            children: e(f, {
                                breakpoint: o,
                                overrides: {
                                    hIWTqwvPm: {
                                        background: {
                                            alt: "",
                                            fit: "fill",
                                            loading: s((n?.y || 0) + 0 + 6619 + 0 + 187 + 0 + 0),
                                            pixelHeight: 5269,
                                            pixelWidth: 3403,
                                            src: "https://framerusercontent.com/images/jRFjA3jFPR8PObKOBFrX1cPo1s.png"
                                        }
                                    }
                                },
                                children: e(g, {
                                    background: {
                                        alt: "",
                                        fit: "fill",
                                        pixelHeight: 5269,
                                        pixelWidth: 3403,
                                        src: "https://framerusercontent.com/images/jRFjA3jFPR8PObKOBFrX1cPo1s.png"
                                    },
                                    className: "framer-1q3pgfs"
                                })
                            })
                        }), t("div", {
                            className: "framer-18i96us",
                            children: [e(i, {
                                __fromCanvasComponent: !0,
                                children: e(r, {
                                    children: e("p", {
                                        style: {
                                            "--font-selector": "R0Y7QmV2YW4tcmVndWxhcg==",
                                            "--framer-font-family": '"Bevan", "Bevan Placeholder", serif',
                                            "--framer-font-open-type-features": "'cv09' on, 'cv01' on, 'cv05' on, 'ss03' on",
                                            "--framer-font-size": "35px",
                                            "--framer-letter-spacing": "-0.01em",
                                            "--framer-line-height": "1.1em",
                                            "--framer-text-alignment": "left",
                                            "--framer-text-color": "rgb(119, 61, 235)"
                                        },
                                        children: e("span", {
                                            "data-text-fill": "true",
                                            style: {
                                                backgroundImage: "linear-gradient(72deg, rgb(142, 95, 237) 0%, rgb(21, 4, 56) 100%)"
                                            },
                                            children: "VIRTUAL TRY-ON"
                                        })
                                    })
                                }),
                                className: "framer-1mabez5",
                                fonts: ["GF;Bevan-regular"],
                                verticalAlignment: "top",
                                whileHover: S,
                                withExternalLayout: !0
                            }), e(i, {
                                __fromCanvasComponent: !0,
                                children: t(r, {
                                    children: [t("h2", {
                                        style: {
                                            "--font-selector": "R0Y7T3BlbiBTYW5zLTgwMA==",
                                            "--framer-font-family": '"Open Sans", "Open Sans Placeholder", sans-serif',
                                            "--framer-font-open-type-features": "'cv01' on, 'cv09' on, 'cv11' on, 'cv05' on, 'ss03' on",
                                            "--framer-font-size": "11px",
                                            "--framer-font-weight": "800",
                                            "--framer-line-height": "2em",
                                            "--framer-text-alignment": "left"
                                        },
                                        children: [e("span", {
                                            style: {
                                                "--font-selector": "R0Y7QmV2YW4tcmVndWxhcg==",
                                                "--framer-font-family": '"Bevan", "Bevan Placeholder", serif',
                                                "--framer-font-size": "16px",
                                                "--framer-font-weight": "400"
                                            },
                                            children: "Welcome to the future of try-ons!"
                                        }), e("br", {}), e("span", {
                                            style: {
                                                "--framer-font-size": "16px"
                                            },
                                            children: " "
                                        }), e("span", {
                                            style: {
                                                "--font-selector": "R0Y7QmV2YW4tcmVndWxhcg==",
                                                "--framer-font-family": '"Bevan", "Bevan Placeholder", serif',
                                                "--framer-font-size": "16px",
                                                "--framer-font-weight": "400"
                                            },
                                            children: "Better fit. Fewer returns."
                                        }), e("br", {}), e("br", {}), "Let customers preview looks on their own bodies \u2014 before they buy."]
                                    }), e("h2", {
                                        style: {
                                            "--font-selector": "R0Y7T3BlbiBTYW5zLTgwMA==",
                                            "--framer-font-family": '"Open Sans", "Open Sans Placeholder", sans-serif',
                                            "--framer-font-open-type-features": "'cv01' on, 'cv09' on, 'cv11' on, 'cv05' on, 'ss03' on",
                                            "--framer-font-weight": "800",
                                            "--framer-line-height": "2em",
                                            "--framer-text-alignment": "left"
                                        },
                                        children: e("br", {
                                            className: "trailing-break"
                                        })
                                    })]
                                }),
                                className: "framer-1c0ynbl",
                                fonts: ["GF;Open Sans-800", "GF;Bevan-regular"],
                                verticalAlignment: "center",
                                whileHover: S,
                                withExternalLayout: !0
                            })]
                        })]
                    })]
                }), re() && e("div", {
                    className: "framer-p9o0oe hidden-uh1o9d hidden-f5yxu5",
                    children: e("div", {
                        className: "framer-qqjtt2",
                        "data-framer-name": "genie",
                        id: Ia,
                        ref: Fa,
                        children: e("div", {
                            className: "framer-lda471",
                            children: t("div", {
                                className: "framer-522wlg",
                                children: [re() && t("div", {
                                    className: "framer-4lrq9p hidden-uh1o9d",
                                    children: [e(i, {
                                        __fromCanvasComponent: !0,
                                        children: e(r, {
                                            children: e("p", {
                                                style: {
                                                    "--font-selector": "R0Y7T3BlbiBTYW5zLTgwMA==",
                                                    "--framer-font-family": '"Open Sans", "Open Sans Placeholder", sans-serif',
                                                    "--framer-font-size": "14px",
                                                    "--framer-font-weight": "800",
                                                    "--framer-line-height": "1.1em",
                                                    "--framer-text-alignment": "left",
                                                    "--framer-text-color": "rgb(255, 255, 255)"
                                                },
                                                children: "Our AI stylist \u2014 the smartest hire you\u2019ll ever make."
                                            })
                                        }),
                                        className: "framer-cjiuin",
                                        fonts: ["GF;Open Sans-800"],
                                        verticalAlignment: "top",
                                        withExternalLayout: !0
                                    }), e(i, {
                                        __fromCanvasComponent: !0,
                                        children: e(r, {
                                            children: e("p", {
                                                style: {
                                                    "--font-selector": "R0Y7T3BlbiBTYW5zLXJlZ3VsYXI=",
                                                    "--framer-font-family": '"Open Sans", "Open Sans Placeholder", sans-serif',
                                                    "--framer-font-size": "14px",
                                                    "--framer-line-height": "1.1em",
                                                    "--framer-text-alignment": "left",
                                                    "--framer-text-color": "rgb(255, 255, 255)"
                                                },
                                                children: "Genie grants styling wishes faster than any team ever could \u2014 transforming static catalogs into full outfits tailored to each shopper."
                                            })
                                        }),
                                        className: "framer-tn2aqa",
                                        fonts: ["GF;Open Sans-regular"],
                                        verticalAlignment: "top",
                                        withExternalLayout: !0
                                    }), e(i, {
                                        __fromCanvasComponent: !0,
                                        children: e(r, {
                                            children: e("p", {
                                                style: {
                                                    "--font-selector": "R0Y7T3BlbiBTYW5zLTgwMA==",
                                                    "--framer-font-family": '"Open Sans", "Open Sans Placeholder", sans-serif',
                                                    "--framer-font-size": "14px",
                                                    "--framer-font-weight": "800",
                                                    "--framer-line-height": "1.1em",
                                                    "--framer-text-alignment": "left",
                                                    "--framer-text-color": "rgb(255, 255, 255)"
                                                },
                                                children: e("strong", {
                                                    children: "Always on. Always learning. Always styling to sell."
                                                })
                                            })
                                        }),
                                        className: "framer-1t47u2w",
                                        fonts: ["GF;Open Sans-800"],
                                        verticalAlignment: "top",
                                        withExternalLayout: !0
                                    })]
                                }), e(i, {
                                    __fromCanvasComponent: !0,
                                    children: t(r, {
                                        children: [e("p", {
                                            style: {
                                                "--font-selector": "R0Y7T3BlbiBTYW5zLTgwMA==",
                                                "--framer-font-family": '"Open Sans", "Open Sans Placeholder", sans-serif',
                                                "--framer-font-size": "17px",
                                                "--framer-font-weight": "800",
                                                "--framer-text-color": "rgb(255, 255, 255)"
                                            },
                                            children: "Feels like magic. Powered by AI."
                                        }), e("p", {
                                            children: e("br", {
                                                className: "trailing-break"
                                            })
                                        })]
                                    }),
                                    className: "framer-3ta07r",
                                    fonts: ["GF;Open Sans-800"],
                                    transformTemplate: P,
                                    verticalAlignment: "top",
                                    withExternalLayout: !0
                                }), e(f, {
                                    breakpoint: o,
                                    overrides: {
                                        hIWTqwvPm: {
                                            background: {
                                                alt: "",
                                                fit: "fit",
                                                loading: s((n?.y || 0) + 0 + 7311 + 0 + 26.5 + 0 + 0 + 0 + 0 + 232),
                                                pixelHeight: 3048,
                                                pixelWidth: 3911,
                                                positionX: "center",
                                                positionY: "center",
                                                src: "https://framerusercontent.com/images/nNZ1FLg4OsykwahLDztjen6Itk.png"
                                            }
                                        }
                                    },
                                    children: e(g, {
                                        background: {
                                            alt: "",
                                            fit: "fit",
                                            pixelHeight: 3048,
                                            pixelWidth: 3911,
                                            positionX: "center",
                                            positionY: "center",
                                            src: "https://framerusercontent.com/images/nNZ1FLg4OsykwahLDztjen6Itk.png"
                                        },
                                        className: "framer-1tuba9p"
                                    })
                                }), e(i, {
                                    __fromCanvasComponent: !0,
                                    children: t(r, {
                                        children: [e("p", {
                                            style: {
                                                "--font-selector": "R0Y7QmV2YW4tcmVndWxhcg==",
                                                "--framer-font-family": '"Bevan", "Bevan Placeholder", serif',
                                                "--framer-font-size": "80px",
                                                "--framer-line-height": "1em",
                                                "--framer-text-alignment": "center",
                                                "--framer-text-color": "rgb(255, 255, 255)"
                                            },
                                            children: "MEET"
                                        }), e("p", {
                                            style: {
                                                "--font-selector": "R0Y7QmV2YW4tcmVndWxhcg==",
                                                "--framer-font-family": '"Bevan", "Bevan Placeholder", serif',
                                                "--framer-font-size": "80px",
                                                "--framer-line-height": "1em",
                                                "--framer-text-alignment": "center",
                                                "--framer-text-color": "rgb(255, 255, 255)"
                                            },
                                            children: "THE GENIE"
                                        }), e("p", {
                                            style: {
                                                "--framer-line-height": "1em",
                                                "--framer-text-alignment": "center"
                                            },
                                            children: e("br", {
                                                className: "trailing-break"
                                            })
                                        })]
                                    }),
                                    className: "framer-1r4i13s",
                                    fonts: ["GF;Bevan-regular"],
                                    transformTemplate: P,
                                    verticalAlignment: "top",
                                    withExternalLayout: !0
                                }), e(f, {
                                    breakpoint: o,
                                    overrides: {
                                        hIWTqwvPm: {
                                            background: {
                                                alt: "",
                                                fit: "fill",
                                                loading: s((n?.y || 0) + 0 + 7311 + 0 + 26.5 + 0 + 0 + 0 + 0 + 250),
                                                pixelHeight: 3375,
                                                pixelWidth: 6e3,
                                                src: "https://framerusercontent.com/images/WAMnjYi3mIJFJMfEjcpTILxh8YQ.png"
                                            }
                                        }
                                    },
                                    children: e(I, {
                                        __framer__loop: or,
                                        __framer__loopEffectEnabled: !0,
                                        __framer__loopPauseOffscreen: !0,
                                        __framer__loopRepeatDelay: 0,
                                        __framer__loopRepeatType: "mirror",
                                        __framer__loopTransition: nr,
                                        __perspectiveFX: !1,
                                        __targetOpacity: 1,
                                        background: {
                                            alt: "",
                                            fit: "fill",
                                            pixelHeight: 3375,
                                            pixelWidth: 6e3,
                                            src: "https://framerusercontent.com/images/WAMnjYi3mIJFJMfEjcpTILxh8YQ.png"
                                        },
                                        className: "framer-avyt08"
                                    })
                                }), e("div", {
                                    className: "framer-ayzpm5",
                                    children: e(f, {
                                        breakpoint: o,
                                        overrides: {
                                            hIWTqwvPm: {
                                                background: {
                                                    alt: "",
                                                    fit: "fill",
                                                    loading: s((n?.y || 0) + 0 + 7311 + 0 + 26.5 + 0 + 0 + 0 + 0 + 0 + -52 + 650 + -41),
                                                    pixelHeight: 3375,
                                                    pixelWidth: 6e3,
                                                    sizes: "227px",
                                                    src: "https://framerusercontent.com/images/vCcLIA2IdKAhft2XrHtnsEhjKlU.png",
                                                    srcSet: "https://framerusercontent.com/images/vCcLIA2IdKAhft2XrHtnsEhjKlU.png?scale-down-to=512 512w,https://framerusercontent.com/images/vCcLIA2IdKAhft2XrHtnsEhjKlU.png?scale-down-to=1024 1024w,https://framerusercontent.com/images/vCcLIA2IdKAhft2XrHtnsEhjKlU.png?scale-down-to=2048 2048w,https://framerusercontent.com/images/vCcLIA2IdKAhft2XrHtnsEhjKlU.png?scale-down-to=4096 4096w,https://framerusercontent.com/images/vCcLIA2IdKAhft2XrHtnsEhjKlU.png 6000w"
                                                }
                                            }
                                        },
                                        children: e(g, {
                                            background: {
                                                alt: "",
                                                fit: "fill",
                                                pixelHeight: 3375,
                                                pixelWidth: 6e3,
                                                sizes: "227px",
                                                src: "https://framerusercontent.com/images/vCcLIA2IdKAhft2XrHtnsEhjKlU.png",
                                                srcSet: "https://framerusercontent.com/images/vCcLIA2IdKAhft2XrHtnsEhjKlU.png?scale-down-to=512 512w,https://framerusercontent.com/images/vCcLIA2IdKAhft2XrHtnsEhjKlU.png?scale-down-to=1024 1024w,https://framerusercontent.com/images/vCcLIA2IdKAhft2XrHtnsEhjKlU.png?scale-down-to=2048 2048w,https://framerusercontent.com/images/vCcLIA2IdKAhft2XrHtnsEhjKlU.png?scale-down-to=4096 4096w,https://framerusercontent.com/images/vCcLIA2IdKAhft2XrHtnsEhjKlU.png 6000w"
                                            },
                                            className: "framer-1iiq7do"
                                        })
                                    })
                                })]
                            })
                        })
                    })
                }), re() && t("div", {
                    className: "framer-a27yy hidden-uh1o9d hidden-f5yxu5",
                    "data-framer-name": "tudo",
                    children: [t("div", {
                        className: "framer-qktkil",
                        id: Ca,
                        ref: pr,
                        children: [e(Q, {
                            __framer__spring: {
                                bounce: .2,
                                damping: 60,
                                delay: 0,
                                duration: 10,
                                durationBasedSpring: !0,
                                ease: [.44, 0, .56, 1],
                                mass: 1,
                                stiffness: 500,
                                type: "spring"
                            },
                            __framer__styleTransformEffectEnabled: !0,
                            __framer__transformTargets: [{
                                target: {
                                    opacity: .4,
                                    rotate: 0,
                                    rotateX: 50,
                                    rotateY: 50,
                                    scale: .2,
                                    skewX: 0,
                                    skewY: 0,
                                    x: 200,
                                    y: 10
                                }
                            }, {
                                ref: pr,
                                target: {
                                    opacity: 1,
                                    rotate: 0,
                                    rotateX: 0,
                                    rotateY: 0,
                                    scale: 1,
                                    skewX: 0,
                                    skewY: 0,
                                    x: 0,
                                    y: 0
                                }
                            }],
                            __framer__transformTrigger: "onScrollTarget",
                            __framer__transformViewportThreshold: 1,
                            __fromCanvasComponent: !0,
                            __perspectiveFX: !1,
                            __targetOpacity: 1,
                            children: e(r, {
                                children: e("p", {
                                    style: {
                                        "--font-selector": "R0Y7QmV2YW4tcmVndWxhcg==",
                                        "--framer-font-family": '"Bevan", "Bevan Placeholder", serif',
                                        "--framer-font-open-type-features": "'cv09' on, 'cv01' on, 'cv05' on, 'ss03' on",
                                        "--framer-font-size": "59px",
                                        "--framer-letter-spacing": "-0.01em",
                                        "--framer-line-height": "1.1em",
                                        "--framer-text-alignment": "center",
                                        "--framer-text-color": "rgb(255, 252, 252)"
                                    },
                                    children: "HOW IT WORKS"
                                })
                            }),
                            className: "framer-46ah2l",
                            fonts: ["GF;Bevan-regular"],
                            verticalAlignment: "top",
                            withExternalLayout: !0
                        }), e(Q, {
                            __framer__spring: {
                                bounce: .2,
                                damping: 60,
                                delay: 0,
                                duration: 10,
                                durationBasedSpring: !0,
                                ease: [.44, 0, .56, 1],
                                mass: 1,
                                stiffness: 500,
                                type: "spring"
                            },
                            __framer__styleTransformEffectEnabled: !0,
                            __framer__transformTargets: [{
                                target: {
                                    opacity: 0,
                                    rotate: 0,
                                    rotateX: 0,
                                    rotateY: 0,
                                    scale: .5,
                                    skewX: 0,
                                    skewY: 0,
                                    x: 0,
                                    y: 26
                                }
                            }, {
                                ref: pr,
                                target: {
                                    opacity: 1,
                                    rotate: 0,
                                    rotateX: 0,
                                    rotateY: 0,
                                    scale: 1,
                                    skewX: 0,
                                    skewY: 0,
                                    x: 0,
                                    y: 0
                                }
                            }],
                            __framer__transformTrigger: "onScrollTarget",
                            __framer__transformViewportThreshold: 1,
                            __fromCanvasComponent: !0,
                            __perspectiveFX: !1,
                            __targetOpacity: 1,
                            children: e(r, {
                                children: e("h2", {
                                    style: {
                                        "--font-selector": "R0Y7T3BlbiBTYW5zLTgwMA==",
                                        "--framer-font-family": '"Open Sans", "Open Sans Placeholder", sans-serif',
                                        "--framer-font-open-type-features": "'cv01' on, 'cv09' on, 'cv11' on, 'cv05' on, 'ss03' on",
                                        "--framer-font-size": "17px",
                                        "--framer-font-weight": "800",
                                        "--framer-line-height": "1em",
                                        "--framer-text-alignment": "center",
                                        "--framer-text-color": "var(--token-8961fb69-0ea3-46ab-8b8e-1f9187ebd1a9, rgb(255, 255, 255))"
                                    },
                                    children: "Get styled by the Genie in just 4 simple steps!"
                                })
                            }),
                            className: "framer-18u40ml",
                            fonts: ["GF;Open Sans-800"],
                            verticalAlignment: "center",
                            withExternalLayout: !0
                        })]
                    }), e("div", {
                        className: "framer-1wlvv8f",
                        "data-framer-name": "the platform",
                        children: t("div", {
                            className: "framer-10hla1p",
                            id: Wa,
                            ref: Oa,
                            children: [t("div", {
                                className: "framer-1nvp3nw",
                                id: Ea,
                                ref: La,
                                children: [t(z, {
                                    __framer__spring: {
                                        bounce: .2,
                                        damping: 60,
                                        delay: 0,
                                        duration: 5,
                                        durationBasedSpring: !0,
                                        ease: [.44, 0, .56, 1],
                                        mass: 1,
                                        stiffness: 500,
                                        type: "spring"
                                    },
                                    __framer__styleTransformEffectEnabled: !0,
                                    __framer__transformTargets: [{
                                        target: {
                                            opacity: 0,
                                            rotate: 0,
                                            rotateX: 0,
                                            rotateY: 0,
                                            scale: .5,
                                            skewX: 0,
                                            skewY: 0,
                                            x: 0,
                                            y: 0
                                        }
                                    }, {
                                        ref: Dr,
                                        target: {
                                            opacity: 1,
                                            rotate: 0,
                                            rotateX: 0,
                                            rotateY: 0,
                                            scale: 1,
                                            skewX: 0,
                                            skewY: 0,
                                            x: 0,
                                            y: 0
                                        }
                                    }],
                                    __framer__transformTrigger: "onScrollTarget",
                                    __framer__transformViewportThreshold: 1,
                                    __perspectiveFX: !1,
                                    __targetOpacity: 1,
                                    className: "framer-gtr2ck",
                                    id: Va,
                                    ref: Dr,
                                    children: [e("div", {
                                        className: "framer-1jfadyv",
                                        children: e(i, {
                                            __fromCanvasComponent: !0,
                                            children: e(r, {
                                                children: e("ol", {
                                                    style: {
                                                        "--font-selector": "R0Y7T3BlbiBTYW5zLTgwMA==",
                                                        "--framer-font-family": '"Open Sans", "Open Sans Placeholder", sans-serif',
                                                        "--framer-font-size": "25px",
                                                        "--framer-font-weight": "800",
                                                        "--framer-letter-spacing": "0.01em",
                                                        "--framer-line-height": "1em",
                                                        "--framer-text-alignment": "center",
                                                        "--framer-text-color": "rgb(255, 250, 250)"
                                                    },
                                                    children: e("li", {
                                                        children: e("p", {
                                                            children: "Start with a Prompt"
                                                        })
                                                    })
                                                })
                                            }),
                                            className: "framer-13a2zq4",
                                            fonts: ["GF;Open Sans-800"],
                                            transformTemplate: P,
                                            verticalAlignment: "top",
                                            withExternalLayout: !0
                                        })
                                    }), e("div", {
                                        className: "framer-1wx2m91",
                                        children: e(f, {
                                            breakpoint: o,
                                            overrides: {
                                                hIWTqwvPm: {
                                                    background: {
                                                        alt: "",
                                                        fit: "fill",
                                                        loading: s((n?.y || 0) + 0 + 8358 + 0 + 304 + 0 + 0 + 24 + 0 + 0 + 10.5 + 10 + 24.3 + 33.875),
                                                        pixelHeight: 810,
                                                        pixelWidth: 1440,
                                                        src: "https://framerusercontent.com/images/OFusmVZIko6zZR7owr2mkFR9E.svg"
                                                    }
                                                }
                                            },
                                            children: e(g, {
                                                background: {
                                                    alt: "",
                                                    fit: "fill",
                                                    pixelHeight: 810,
                                                    pixelWidth: 1440,
                                                    src: "https://framerusercontent.com/images/OFusmVZIko6zZR7owr2mkFR9E.svg"
                                                },
                                                className: "framer-1grb3e8"
                                            })
                                        })
                                    }), e("div", {
                                        className: "framer-b9cwpp",
                                        children: e(i, {
                                            __fromCanvasComponent: !0,
                                            children: t(r, {
                                                children: [e("p", {
                                                    style: {
                                                        "--font-selector": "R0Y7T3BlbiBTYW5zLXJlZ3VsYXI=",
                                                        "--framer-font-family": '"Open Sans", "Open Sans Placeholder", sans-serif',
                                                        "--framer-font-size": "17px",
                                                        "--framer-line-height": "1.1em",
                                                        "--framer-text-alignment": "center",
                                                        "--framer-text-color": "rgb(255, 255, 255)"
                                                    },
                                                    children: " Let shoppers search by style, vibe, or photo."
                                                }), e("p", {
                                                    style: {
                                                        "--font-selector": "R0Y7T3BlbiBTYW5zLXJlZ3VsYXI=",
                                                        "--framer-font-family": '"Open Sans", "Open Sans Placeholder", sans-serif',
                                                        "--framer-font-size": "17px",
                                                        "--framer-line-height": "1.1em",
                                                        "--framer-text-alignment": "center",
                                                        "--framer-text-color": "rgb(255, 255, 255)"
                                                    },
                                                    children: "Whether they type, talk, or upload a picture \u2014 your customers tell Genie what they want, and we take it from there."
                                                })]
                                            }),
                                            className: "framer-1mzmf1n",
                                            fonts: ["GF;Open Sans-regular"],
                                            verticalAlignment: "top",
                                            withExternalLayout: !0
                                        })
                                    })]
                                }), t(z, {
                                    __framer__spring: {
                                        bounce: .2,
                                        damping: 60,
                                        delay: 0,
                                        duration: 5,
                                        durationBasedSpring: !0,
                                        ease: [.44, 0, .56, 1],
                                        mass: 1,
                                        stiffness: 500,
                                        type: "spring"
                                    },
                                    __framer__styleTransformEffectEnabled: !0,
                                    __framer__transformTargets: [{
                                        target: {
                                            opacity: 0,
                                            rotate: 0,
                                            rotateX: 0,
                                            rotateY: 0,
                                            scale: .5,
                                            skewX: 0,
                                            skewY: 0,
                                            x: 0,
                                            y: 0
                                        }
                                    }, {
                                        ref: Gr,
                                        target: {
                                            opacity: 1,
                                            rotate: 0,
                                            rotateX: 0,
                                            rotateY: 0,
                                            scale: 1,
                                            skewX: 0,
                                            skewY: 0,
                                            x: 0,
                                            y: 0
                                        }
                                    }],
                                    __framer__transformTrigger: "onScrollTarget",
                                    __framer__transformViewportThreshold: 1,
                                    __perspectiveFX: !1,
                                    __targetOpacity: 1,
                                    className: "framer-zplo17",
                                    id: Na,
                                    ref: Gr,
                                    children: [e("div", {
                                        className: "framer-13ex4jk",
                                        children: e(i, {
                                            __fromCanvasComponent: !0,
                                            children: e(r, {
                                                children: e("ol", {
                                                    start: "2",
                                                    style: {
                                                        "--font-selector": "R0Y7T3BlbiBTYW5zLTgwMA==",
                                                        "--framer-font-family": '"Open Sans", "Open Sans Placeholder", sans-serif',
                                                        "--framer-font-size": "25px",
                                                        "--framer-font-weight": "800",
                                                        "--framer-letter-spacing": "0.01em",
                                                        "--framer-line-height": "1em",
                                                        "--framer-text-alignment": "center",
                                                        "--framer-text-color": "rgb(255, 250, 250)"
                                                    },
                                                    children: e("li", {
                                                        children: e("p", {
                                                            children: "Meet the Genie"
                                                        })
                                                    })
                                                })
                                            }),
                                            className: "framer-17qdjjb",
                                            fonts: ["GF;Open Sans-800"],
                                            transformTemplate: P,
                                            verticalAlignment: "top",
                                            withExternalLayout: !0
                                        })
                                    }), e("div", {
                                        className: "framer-9qkbwo",
                                        children: e(f, {
                                            breakpoint: o,
                                            overrides: {
                                                hIWTqwvPm: {
                                                    background: {
                                                        alt: "",
                                                        fit: "fill",
                                                        loading: s((n?.y || 0) + 0 + 8358 + 0 + 304 + 0 + 0 + 24 + 0 + 0 + 570.5 + 10 + 25.1748 + 41.1245),
                                                        pixelHeight: 810,
                                                        pixelWidth: 1440,
                                                        src: "https://framerusercontent.com/images/KpX2fGDNVcbWNHZLjPnHejP8ctQ.svg"
                                                    }
                                                }
                                            },
                                            children: e(g, {
                                                background: {
                                                    alt: "",
                                                    fit: "fill",
                                                    pixelHeight: 810,
                                                    pixelWidth: 1440,
                                                    src: "https://framerusercontent.com/images/KpX2fGDNVcbWNHZLjPnHejP8ctQ.svg"
                                                },
                                                className: "framer-j9ydhx"
                                            })
                                        })
                                    }), e("div", {
                                        className: "framer-1sr8g5f",
                                        children: e(i, {
                                            __fromCanvasComponent: !0,
                                            children: t(r, {
                                                children: [e("p", {
                                                    style: {
                                                        "--font-selector": "R0Y7T3BlbiBTYW5zLXJlZ3VsYXI=",
                                                        "--framer-font-family": '"Open Sans", "Open Sans Placeholder", sans-serif',
                                                        "--framer-font-size": "17px",
                                                        "--framer-line-height": "1.1em",
                                                        "--framer-text-alignment": "center",
                                                        "--framer-text-color": "rgb(255, 255, 255)"
                                                    },
                                                    children: "Personalised looks. In seconds."
                                                }), e("p", {
                                                    style: {
                                                        "--font-selector": "R0Y7T3BlbiBTYW5zLXJlZ3VsYXI=",
                                                        "--framer-font-family": '"Open Sans", "Open Sans Placeholder", sans-serif',
                                                        "--framer-font-size": "17px",
                                                        "--framer-line-height": "1.1em",
                                                        "--framer-text-alignment": "center",
                                                        "--framer-text-color": "rgb(255, 255, 255)"
                                                    },
                                                    children: "See your catalog turn into complete outfits, tailored to each shopper\u2019s body type, vibe, and budget \u2014 no extra work needed."
                                                })]
                                            }),
                                            className: "framer-kwmql4",
                                            fonts: ["GF;Open Sans-regular"],
                                            verticalAlignment: "top",
                                            withExternalLayout: !0
                                        })
                                    })]
                                })]
                            }), t("div", {
                                className: "framer-1gprt1d",
                                id: Aa,
                                ref: Xa,
                                children: [t(z, {
                                    __framer__spring: {
                                        bounce: .2,
                                        damping: 60,
                                        delay: 0,
                                        duration: 5,
                                        durationBasedSpring: !0,
                                        ease: [.44, 0, .56, 1],
                                        mass: 1,
                                        stiffness: 500,
                                        type: "spring"
                                    },
                                    __framer__styleTransformEffectEnabled: !0,
                                    __framer__transformTargets: [{
                                        target: {
                                            opacity: 0,
                                            rotate: 0,
                                            rotateX: 0,
                                            rotateY: 0,
                                            scale: .5,
                                            skewX: 0,
                                            skewY: 0,
                                            x: 0,
                                            y: 0
                                        }
                                    }, {
                                        ref: Zr,
                                        target: {
                                            opacity: 1,
                                            rotate: 0,
                                            rotateX: 0,
                                            rotateY: 0,
                                            scale: 1,
                                            skewX: 0,
                                            skewY: 0,
                                            x: 0,
                                            y: 0
                                        }
                                    }],
                                    __framer__transformTrigger: "onScrollTarget",
                                    __framer__transformViewportThreshold: 1,
                                    __perspectiveFX: !1,
                                    __targetOpacity: 1,
                                    className: "framer-815zgw",
                                    id: Ua,
                                    ref: Zr,
                                    children: [e("div", {
                                        className: "framer-1hb3vd8",
                                        children: e(i, {
                                            __fromCanvasComponent: !0,
                                            children: e(r, {
                                                children: e("ol", {
                                                    start: "3",
                                                    style: {
                                                        "--font-selector": "R0Y7T3BlbiBTYW5zLTgwMA==",
                                                        "--framer-font-family": '"Open Sans", "Open Sans Placeholder", sans-serif',
                                                        "--framer-font-size": "25px",
                                                        "--framer-font-weight": "800",
                                                        "--framer-letter-spacing": "0.01em",
                                                        "--framer-line-height": "1em",
                                                        "--framer-text-alignment": "center",
                                                        "--framer-text-color": "rgb(255, 250, 250)"
                                                    },
                                                    children: e("li", {
                                                        children: e("p", {
                                                            children: "Customise the Look"
                                                        })
                                                    })
                                                })
                                            }),
                                            className: "framer-3cusiw",
                                            fonts: ["GF;Open Sans-800"],
                                            verticalAlignment: "bottom",
                                            withExternalLayout: !0
                                        })
                                    }), e("div", {
                                        className: "framer-10p8i3v",
                                        children: e(f, {
                                            breakpoint: o,
                                            overrides: {
                                                hIWTqwvPm: {
                                                    background: {
                                                        alt: "",
                                                        fit: "fill",
                                                        loading: s((n?.y || 0) + 0 + 8358 + 0 + 304 + 0 + 0 + 24 + 1109 + 0 + 35.5 + 10 + 15.45 + 34.95),
                                                        pixelHeight: 810,
                                                        pixelWidth: 1440,
                                                        src: "https://framerusercontent.com/images/UeVBF6ZUPyLNoAx3XYrrBxateyM.svg"
                                                    }
                                                }
                                            },
                                            children: e(g, {
                                                background: {
                                                    alt: "",
                                                    fit: "fill",
                                                    pixelHeight: 810,
                                                    pixelWidth: 1440,
                                                    src: "https://framerusercontent.com/images/UeVBF6ZUPyLNoAx3XYrrBxateyM.svg"
                                                },
                                                className: "framer-1r33q9d"
                                            })
                                        })
                                    }), e("div", {
                                        className: "framer-1u97i4",
                                        children: e(i, {
                                            __fromCanvasComponent: !0,
                                            children: t(r, {
                                                children: [e("p", {
                                                    style: {
                                                        "--font-selector": "R0Y7T3BlbiBTYW5zLXJlZ3VsYXI=",
                                                        "--framer-font-family": '"Open Sans", "Open Sans Placeholder", sans-serif',
                                                        "--framer-font-size": "17px",
                                                        "--framer-line-height": "1.1em",
                                                        "--framer-text-alignment": "center",
                                                        "--framer-text-color": "rgb(255, 255, 255)"
                                                    },
                                                    children: "Talk to the Genie to tweak the look."
                                                }), e("p", {
                                                    style: {
                                                        "--font-selector": "R0Y7T3BlbiBTYW5zLXJlZ3VsYXI=",
                                                        "--framer-font-family": '"Open Sans", "Open Sans Placeholder", sans-serif',
                                                        "--framer-font-size": "17px",
                                                        "--framer-line-height": "1.1em",
                                                        "--framer-text-alignment": "center",
                                                        "--framer-text-color": "rgb(255, 255, 255)"
                                                    },
                                                    children: "Your customers can swap, remove, or add items to perfect the look \u2014 driving more engagement and increasing average cart size."
                                                })]
                                            }),
                                            className: "framer-11uonxh",
                                            fonts: ["GF;Open Sans-regular"],
                                            verticalAlignment: "top",
                                            withExternalLayout: !0
                                        })
                                    })]
                                }), t(z, {
                                    __framer__spring: {
                                        bounce: .2,
                                        damping: 60,
                                        delay: 0,
                                        duration: 5,
                                        durationBasedSpring: !0,
                                        ease: [.44, 0, .56, 1],
                                        mass: 1,
                                        stiffness: 500,
                                        type: "spring"
                                    },
                                    __framer__styleTransformEffectEnabled: !0,
                                    __framer__transformTargets: [{
                                        target: {
                                            opacity: 0,
                                            rotate: 0,
                                            rotateX: 0,
                                            rotateY: 0,
                                            scale: .5,
                                            skewX: 0,
                                            skewY: 0,
                                            x: 0,
                                            y: 0
                                        }
                                    }, {
                                        ref: Qr,
                                        target: {
                                            opacity: 1,
                                            rotate: 0,
                                            rotateX: 0,
                                            rotateY: 0,
                                            scale: 1,
                                            skewX: 0,
                                            skewY: 0,
                                            x: 0,
                                            y: 0
                                        }
                                    }],
                                    __framer__transformTrigger: "onScrollTarget",
                                    __framer__transformViewportThreshold: 1,
                                    __perspectiveFX: !1,
                                    __targetOpacity: 1,
                                    className: "framer-yd75dw",
                                    id: ja,
                                    ref: Qr,
                                    children: [e("div", {
                                        className: "framer-cbsxeq",
                                        children: e(i, {
                                            __fromCanvasComponent: !0,
                                            children: e(r, {
                                                children: e("ol", {
                                                    start: "4",
                                                    style: {
                                                        "--font-selector": "R0Y7T3BlbiBTYW5zLTgwMA==",
                                                        "--framer-font-family": '"Open Sans", "Open Sans Placeholder", sans-serif',
                                                        "--framer-font-size": "25px",
                                                        "--framer-font-weight": "800",
                                                        "--framer-letter-spacing": "0.01em",
                                                        "--framer-line-height": "1em",
                                                        "--framer-text-alignment": "center",
                                                        "--framer-text-color": "rgb(255, 250, 250)"
                                                    },
                                                    children: e("li", {
                                                        children: e("p", {
                                                            children: "Virtual Try-On"
                                                        })
                                                    })
                                                })
                                            }),
                                            className: "framer-15og7xk",
                                            fonts: ["GF;Open Sans-800"],
                                            verticalAlignment: "top",
                                            withExternalLayout: !0
                                        })
                                    }), e("div", {
                                        className: "framer-zayrq3",
                                        children: e(f, {
                                            breakpoint: o,
                                            overrides: {
                                                hIWTqwvPm: {
                                                    background: {
                                                        alt: "",
                                                        fit: "fill",
                                                        loading: s((n?.y || 0) + 0 + 8358 + 0 + 304 + 0 + 0 + 24 + 1109 + 0 + 595.5 + 10 + 17.55 + 33.875),
                                                        pixelHeight: 810,
                                                        pixelWidth: 1440,
                                                        src: "https://framerusercontent.com/images/mOxus2s7JRZi445BEEn3qM4io6E.svg"
                                                    }
                                                }
                                            },
                                            children: e(g, {
                                                background: {
                                                    alt: "",
                                                    fit: "fill",
                                                    pixelHeight: 810,
                                                    pixelWidth: 1440,
                                                    src: "https://framerusercontent.com/images/mOxus2s7JRZi445BEEn3qM4io6E.svg"
                                                },
                                                className: "framer-c9s063"
                                            })
                                        })
                                    }), e("div", {
                                        className: "framer-1ij3zaz",
                                        children: e(i, {
                                            __fromCanvasComponent: !0,
                                            children: t(r, {
                                                children: [e("p", {
                                                    style: {
                                                        "--font-selector": "R0Y7T3BlbiBTYW5zLXJlZ3VsYXI=",
                                                        "--framer-font-family": '"Open Sans", "Open Sans Placeholder", sans-serif',
                                                        "--framer-font-size": "17px",
                                                        "--framer-line-height": "1.1em",
                                                        "--framer-text-alignment": "center",
                                                        "--framer-text-color": "rgb(255, 255, 255)"
                                                    },
                                                    children: "Let them see before they buy."
                                                }), e("p", {
                                                    style: {
                                                        "--font-selector": "R0Y7T3BlbiBTYW5zLXJlZ3VsYXI=",
                                                        "--framer-font-family": '"Open Sans", "Open Sans Placeholder", sans-serif',
                                                        "--framer-font-size": "17px",
                                                        "--framer-line-height": "1.1em",
                                                        "--framer-text-alignment": "center",
                                                        "--framer-text-color": "rgb(255, 255, 255)"
                                                    },
                                                    children: "Outfits rendered on real bodies. Confidence goes up. "
                                                }), e("p", {
                                                    style: {
                                                        "--font-selector": "R0Y7T3BlbiBTYW5zLXJlZ3VsYXI=",
                                                        "--framer-font-family": '"Open Sans", "Open Sans Placeholder", sans-serif',
                                                        "--framer-font-size": "17px",
                                                        "--framer-line-height": "1.1em",
                                                        "--framer-text-alignment": "center",
                                                        "--framer-text-color": "rgb(255, 255, 255)"
                                                    },
                                                    children: "Returns go down."
                                                })]
                                            }),
                                            className: "framer-ms9cl8",
                                            fonts: ["GF;Open Sans-regular"],
                                            verticalAlignment: "top",
                                            withExternalLayout: !0
                                        })
                                    })]
                                })]
                            })]
                        })
                    }), e("div", {
                        className: "framer-15p99av",
                        "data-framer-name": "the platform"
                    })]
                }), ue() && t("div", {
                    className: "framer-4b2mr0 hidden-z10mb2 hidden-f5yxu5",
                    "data-framer-name": "wrapper",
                    id: Pa,
                    ref: Ma,
                    children: [t(z, {
                        __framer__spring: {
                            bounce: .2,
                            damping: 60,
                            delay: 0,
                            duration: .3,
                            durationBasedSpring: !0,
                            ease: [.44, 0, .56, 1],
                            mass: 1,
                            stiffness: 500,
                            type: "spring"
                        },
                        __framer__styleTransformEffectEnabled: !0,
                        __framer__transformTargets: [{
                            target: {
                                opacity: .5,
                                rotate: 0,
                                rotateX: 0,
                                rotateY: 0,
                                scale: 0,
                                skewX: 0,
                                skewY: 0,
                                x: 0,
                                y: 0
                            }
                        }, {
                            target: {
                                opacity: 1,
                                rotate: 0,
                                rotateX: 0,
                                rotateY: 0,
                                scale: 1,
                                skewX: 0,
                                skewY: 0,
                                x: 0,
                                y: 0
                            }
                        }],
                        __framer__transformTrigger: "onInView",
                        __perspectiveFX: !1,
                        __targetOpacity: 1,
                        className: "framer-1athwap",
                        "data-framer-name": "video styles",
                        id: qa,
                        ref: D,
                        children: [t("div", {
                            className: "framer-1czpofu",
                            children: [e("div", {
                                className: "framer-11k71nj",
                                children: e(i, {
                                    __fromCanvasComponent: !0,
                                    children: e(r, {
                                        children: e("h2", {
                                            style: {
                                                "--font-selector": "R0Y7Q2hhdSBQaGlsb21lbmUgT25lLXJlZ3VsYXI=",
                                                "--framer-font-family": '"Chau Philomene One", "Chau Philomene One Placeholder", sans-serif',
                                                "--framer-font-open-type-features": "'cv01' on, 'cv09' on, 'cv11' on, 'cv05' on, 'ss03' on",
                                                "--framer-letter-spacing": "-0.03em",
                                                "--framer-line-height": "1em",
                                                "--framer-text-alignment": "center",
                                                "--framer-text-color": "var(--token-8961fb69-0ea3-46ab-8b8e-1f9187ebd1a9, rgb(255, 255, 255))"
                                            },
                                            children: "WELCOME TO STYLEGENIE"
                                        })
                                    }),
                                    className: "framer-k46dnd",
                                    fonts: ["GF;Chau Philomene One-regular"],
                                    id: "k46dnd",
                                    verticalAlignment: "top",
                                    withExternalLayout: !0
                                })
                            }), e("div", {
                                className: "framer-16efs0b",
                                children: e(i, {
                                    __fromCanvasComponent: !0,
                                    children: t(r, {
                                        children: [e("p", {
                                            style: {
                                                "--font-selector": "R0Y7QmV2YW4tcmVndWxhcg==",
                                                "--framer-font-family": '"Bevan", "Bevan Placeholder", serif',
                                                "--framer-font-open-type-features": "'cv09' on, 'cv01' on, 'cv05' on, 'ss03' on",
                                                "--framer-font-size": "40px",
                                                "--framer-letter-spacing": "-0.01em",
                                                "--framer-line-height": "1.1em",
                                                "--framer-text-alignment": "center",
                                                "--framer-text-color": "rgb(255, 252, 252)"
                                            },
                                            children: "UNLOCK THE POWER OF"
                                        }), e("p", {
                                            style: {
                                                "--font-selector": "R0Y7QmV2YW4tcmVndWxhcg==",
                                                "--framer-font-family": '"Bevan", "Bevan Placeholder", serif',
                                                "--framer-font-open-type-features": "'cv09' on, 'cv01' on, 'cv05' on, 'ss03' on",
                                                "--framer-font-size": "40px",
                                                "--framer-letter-spacing": "-0.01em",
                                                "--framer-line-height": "1.1em",
                                                "--framer-text-alignment": "center",
                                                "--framer-text-color": "rgb(255, 252, 252)"
                                            },
                                            children: "AI-DRIVEN PERSONAL STYLE"
                                        })]
                                    }),
                                    className: "framer-fvyyt2",
                                    fonts: ["GF;Bevan-regular"],
                                    verticalAlignment: "top",
                                    withExternalLayout: !0
                                })
                            })]
                        }), t("div", {
                            className: "framer-1qswyvc",
                            children: [e(g, {
                                background: {
                                    alt: "",
                                    fit: "fill",
                                    loading: s((n?.y || 0) + 0 + 2e3 + 0 + 0 + 0 + 170 + 399.967 - 120),
                                    pixelHeight: 1440,
                                    pixelWidth: 1440,
                                    src: "https://framerusercontent.com/images/wEDaJSqh3MsJnu67DrLfBckNiOQ.gif"
                                },
                                className: "framer-k2qy8d"
                            }), e("div", {
                                className: "framer-drqtnb",
                                children: e(si, {
                                    __framer__spring: {
                                        bounce: .2,
                                        damping: 60,
                                        delay: 0,
                                        duration: .3,
                                        durationBasedSpring: !0,
                                        ease: [.44, 0, .56, 1],
                                        mass: 1,
                                        stiffness: 500,
                                        type: "spring"
                                    },
                                    __framer__styleTransformEffectEnabled: !0,
                                    __framer__transformTargets: [{
                                        target: {
                                            opacity: 1,
                                            rotate: 0,
                                            rotateX: 0,
                                            rotateY: 0,
                                            scale: 1,
                                            skewX: 0,
                                            skewY: 0,
                                            x: 0,
                                            y: 0
                                        }
                                    }, {
                                        ref: Jr,
                                        target: {
                                            opacity: 1,
                                            rotate: 0,
                                            rotateX: 0,
                                            rotateY: 0,
                                            scale: 3,
                                            skewX: 0,
                                            skewY: 0,
                                            x: 0,
                                            y: -30
                                        }
                                    }],
                                    __framer__transformTrigger: "onScrollTarget",
                                    __framer__transformViewportThreshold: 1,
                                    __perspectiveFX: !1,
                                    __targetOpacity: 1,
                                    className: "framer-12dswl3",
                                    "data-framer-name": "videocontainer",
                                    id: Ha,
                                    ref: Da,
                                    children: e(ze, {
                                        children: e(Be, {
                                            className: "framer-1yj7q7g-container",
                                            id: "1yj7q7g",
                                            isAuthoredByUser: !0,
                                            isModuleExternal: !0,
                                            nodeId: "ZcFZEyb16",
                                            rendersWithMotion: !0,
                                            scopeId: "Z9xpqCjmE",
                                            style: {
                                                transformPerspective: 500
                                            },
                                            children: e(Fe, {
                                                backgroundColor: "rgba(0, 0, 0, 0)",
                                                borderRadius: 12,
                                                bottomLeftRadius: 12,
                                                bottomRightRadius: 12,
                                                controls: !1,
                                                height: "100%",
                                                id: "ZcFZEyb16",
                                                isMixedBorderRadius: !1,
                                                layoutId: "ZcFZEyb16",
                                                loop: !0,
                                                muted: !0,
                                                objectFit: "cover",
                                                playing: !0,
                                                posterEnabled: !0,
                                                srcFile: "https://framerusercontent.com/assets/un6TVfkx4zwKvl6VyRjjCSydvo.mp4",
                                                srcType: "Upload",
                                                srcUrl: "https://framerusercontent.com/assets/MLWPbW1dUQawJLhhun3dBwpgJak.mp4",
                                                startTime: 0,
                                                style: {
                                                    height: "100%",
                                                    width: "100%"
                                                },
                                                topLeftRadius: 12,
                                                topRightRadius: 12,
                                                volume: 25,
                                                width: "100%"
                                            })
                                        })
                                    })
                                })
                            }), e(g, {
                                background: {
                                    alt: "",
                                    fit: "fill",
                                    loading: s((n?.y || 0) + 0 + 2e3 + 0 + 0 + 0 + 170 + 10),
                                    pixelHeight: 1440,
                                    pixelWidth: 1440,
                                    src: "https://framerusercontent.com/images/wEDaJSqh3MsJnu67DrLfBckNiOQ.gif"
                                },
                                className: "framer-108pbqm"
                            })]
                        }), t("div", {
                            className: "framer-ptat6i",
                            id: Ga,
                            ref: Za,
                            children: [e("div", {
                                className: "framer-1bdl4c9",
                                children: e(i, {
                                    __fromCanvasComponent: !0,
                                    children: e(r, {
                                        children: e("h2", {
                                            style: {
                                                "--font-selector": "R0Y7T3BlbiBTYW5zLTgwMA==",
                                                "--framer-font-family": '"Open Sans", "Open Sans Placeholder", sans-serif',
                                                "--framer-font-open-type-features": "'cv01' on, 'cv09' on, 'cv11' on, 'cv05' on, 'ss03' on",
                                                "--framer-font-size": "18px",
                                                "--framer-font-weight": "800",
                                                "--framer-line-height": "1em",
                                                "--framer-text-alignment": "center",
                                                "--framer-text-color": "var(--token-8961fb69-0ea3-46ab-8b8e-1f9187ebd1a9, rgb(255, 255, 255))"
                                            },
                                            children: "Say goodbye to doom scrolling \u2014 Empower your customers with AI-driven outfit discovery "
                                        })
                                    }),
                                    className: "framer-5uzghb",
                                    fonts: ["GF;Open Sans-800"],
                                    verticalAlignment: "center",
                                    withExternalLayout: !0
                                })
                            }), e("div", {
                                className: "framer-6i4i84",
                                children: e(i, {
                                    __fromCanvasComponent: !0,
                                    children: e(r, {
                                        children: e("p", {
                                            style: {
                                                "--font-selector": "R0Y7T3BlbiBTYW5zLXJlZ3VsYXI=",
                                                "--framer-font-family": '"Open Sans", "Open Sans Placeholder", sans-serif',
                                                "--framer-font-open-type-features": "'cv09' on, 'cv01' on, 'cv05' on, 'ss03' on",
                                                "--framer-font-size": "17px",
                                                "--framer-letter-spacing": "-0.01em",
                                                "--framer-line-height": "1.1em",
                                                "--framer-text-alignment": "center",
                                                "--framer-text-color": "rgb(255, 252, 252)"
                                            },
                                            children: "One prompt is all it takes to turn browsers into buyers!"
                                        })
                                    }),
                                    className: "framer-1xedi5c",
                                    fonts: ["GF;Open Sans-regular"],
                                    transformTemplate: ir,
                                    verticalAlignment: "top",
                                    withExternalLayout: !0
                                })
                            })]
                        })]
                    }), e("div", {
                        className: "framer-4lav07",
                        "data-framer-name": "tempovideo",
                        id: Qa,
                        ref: Jr
                    })]
                }), ue() && t(g, {
                    background: {
                        alt: "",
                        fit: "fill",
                        loading: s((n?.y || 0) + 0 + 4e3),
                        pixelHeight: 810,
                        pixelWidth: 1440,
                        sizes: `calc((${n?.width || "100vw"} - 40px) * 1.025)`,
                        src: "https://framerusercontent.com/images/HECtok0V6TbZ1bMdAo0kVVe8ck.svg",
                        srcSet: "https://framerusercontent.com/images/HECtok0V6TbZ1bMdAo0kVVe8ck.svg?scale-down-to=512 512w,https://framerusercontent.com/images/HECtok0V6TbZ1bMdAo0kVVe8ck.svg?scale-down-to=1024 1024w,https://framerusercontent.com/images/HECtok0V6TbZ1bMdAo0kVVe8ck.svg 1440w"
                    },
                    className: "framer-1oeyh68 hidden-z10mb2 hidden-f5yxu5",
                    id: Ja,
                    ref: Ke,
                    children: [e(Q, {
                        __framer__spring: {
                            bounce: .2,
                            damping: 60,
                            delay: 0,
                            duration: 10,
                            durationBasedSpring: !0,
                            ease: [.44, 0, .56, 1],
                            mass: 1,
                            stiffness: 500,
                            type: "spring"
                        },
                        __framer__styleTransformEffectEnabled: !0,
                        __framer__transformTargets: [{
                            target: {
                                opacity: .4,
                                rotate: 0,
                                rotateX: 50,
                                rotateY: 50,
                                scale: .2,
                                skewX: 0,
                                skewY: 0,
                                x: 200,
                                y: 10
                            }
                        }, {
                            ref: Ke,
                            target: {
                                opacity: 1,
                                rotate: 0,
                                rotateX: 0,
                                rotateY: 0,
                                scale: 1,
                                skewX: 0,
                                skewY: 0,
                                x: 0,
                                y: 0
                            }
                        }],
                        __framer__transformTrigger: "onScrollTarget",
                        __framer__transformViewportThreshold: 1,
                        __fromCanvasComponent: !0,
                        __perspectiveFX: !1,
                        __targetOpacity: 1,
                        children: t(r, {
                            children: [e("p", {
                                style: {
                                    "--font-selector": "R0Y7QmV2YW4tcmVndWxhcg==",
                                    "--framer-font-family": '"Bevan", "Bevan Placeholder", serif',
                                    "--framer-font-open-type-features": "'cv09' on, 'cv01' on, 'cv05' on, 'ss03' on",
                                    "--framer-font-size": "40px",
                                    "--framer-letter-spacing": "-0.01em",
                                    "--framer-line-height": "1.1em",
                                    "--framer-text-alignment": "center",
                                    "--framer-text-color": "rgb(255, 252, 252)"
                                },
                                children: "FASHION IS WHAT YOU SELL"
                            }), e("p", {
                                style: {
                                    "--font-selector": "R0Y7QmV2YW4tcmVndWxhcg==",
                                    "--framer-font-family": '"Bevan", "Bevan Placeholder", serif',
                                    "--framer-font-open-type-features": "'cv09' on, 'cv01' on, 'cv05' on, 'ss03' on",
                                    "--framer-font-size": "40px",
                                    "--framer-letter-spacing": "-0.01em",
                                    "--framer-line-height": "1.1em",
                                    "--framer-text-alignment": "center",
                                    "--framer-text-color": "rgb(255, 252, 252)"
                                },
                                children: "STYLE IS HOW YOU SELL IT"
                            })]
                        }),
                        className: "framer-1e8qd7w",
                        fonts: ["GF;Bevan-regular"],
                        id: Ka,
                        ref: $a,
                        verticalAlignment: "top",
                        withExternalLayout: !0
                    }), e(Q, {
                        __framer__spring: {
                            bounce: .2,
                            damping: 60,
                            delay: 0,
                            duration: 10,
                            durationBasedSpring: !0,
                            ease: [.44, 0, .56, 1],
                            mass: 1,
                            stiffness: 500,
                            type: "spring"
                        },
                        __framer__styleTransformEffectEnabled: !0,
                        __framer__transformTargets: [{
                            target: {
                                opacity: .5,
                                rotate: 0,
                                rotateX: 0,
                                rotateY: 0,
                                scale: 0,
                                skewX: 0,
                                skewY: 0,
                                x: 0,
                                y: 25
                            }
                        }, {
                            ref: Ke,
                            target: {
                                opacity: 1,
                                rotate: 0,
                                rotateX: 0,
                                rotateY: 0,
                                scale: 1,
                                skewX: 0,
                                skewY: 0,
                                x: 0,
                                y: 0
                            }
                        }],
                        __framer__transformTrigger: "onScrollTarget",
                        __framer__transformViewportThreshold: 1,
                        __fromCanvasComponent: !0,
                        __perspectiveFX: !1,
                        __targetOpacity: 1,
                        children: e(r, {
                            children: e("h2", {
                                style: {
                                    "--font-selector": "R0Y7T3BlbiBTYW5zLTgwMA==",
                                    "--framer-font-family": '"Open Sans", "Open Sans Placeholder", sans-serif',
                                    "--framer-font-open-type-features": "'cv01' on, 'cv09' on, 'cv11' on, 'cv05' on, 'ss03' on",
                                    "--framer-font-size": "18px",
                                    "--framer-font-weight": "800",
                                    "--framer-line-height": "1em",
                                    "--framer-text-alignment": "center",
                                    "--framer-text-color": "var(--token-8961fb69-0ea3-46ab-8b8e-1f9187ebd1a9, rgb(255, 255, 255))"
                                },
                                children: "Meet your AI-Powered Personal Stylist"
                            })
                        }),
                        className: "framer-1pxpif6",
                        fonts: ["GF;Open Sans-800"],
                        verticalAlignment: "center",
                        withExternalLayout: !0
                    })]
                }), ue() && t("div", {
                    className: "framer-y24iki hidden-z10mb2 hidden-f5yxu5",
                    "data-framer-name": "scroll animation section",
                    id: en,
                    ref: rn,
                    children: [t("div", {
                        className: "framer-1fnxgk7",
                        "data-framer-name": "sticky",
                        children: [t(z, {
                            __framer__spring: {
                                bounce: .2,
                                damping: 60,
                                delay: 0,
                                duration: 1,
                                durationBasedSpring: !0,
                                ease: [.44, 0, .56, 1],
                                mass: 1,
                                stiffness: 500,
                                type: "spring"
                            },
                            __framer__styleTransformEffectEnabled: !0,
                            __framer__transformTargets: [{
                                target: {
                                    opacity: 0,
                                    rotate: 0,
                                    rotateX: 0,
                                    rotateY: 0,
                                    scale: .5,
                                    skewX: 0,
                                    skewY: 0,
                                    x: -356,
                                    y: 0
                                }
                            }, {
                                ref: Ke,
                                target: {
                                    opacity: 1,
                                    rotate: 0,
                                    rotateX: 0,
                                    rotateY: 0,
                                    scale: 1,
                                    skewX: 0,
                                    skewY: 0,
                                    x: 0,
                                    y: 0
                                }
                            }],
                            __framer__transformTrigger: "onScrollTarget",
                            __framer__transformViewportThreshold: .5,
                            __perspectiveFX: !1,
                            __targetOpacity: 1,
                            className: "framer-hdbj3k",
                            id: tn,
                            ref: an,
                            children: [e(i, {
                                __fromCanvasComponent: !0,
                                children: e(r, {
                                    children: e("p", {
                                        style: {
                                            "--font-selector": "R0Y7QmV2YW4tcmVndWxhcg==",
                                            "--framer-font-family": '"Bevan", "Bevan Placeholder", serif',
                                            "--framer-font-open-type-features": "'cv09' on, 'cv01' on, 'cv05' on, 'ss03' on",
                                            "--framer-font-size": "30px",
                                            "--framer-letter-spacing": "-0.01em",
                                            "--framer-line-height": "1.1em",
                                            "--framer-text-alignment": "left",
                                            "--framer-text-color": "rgb(255, 252, 252)"
                                        },
                                        children: "COMPLETE  LOOKS  STYLED  IN SECONDS"
                                    })
                                }),
                                className: "framer-19weock",
                                fonts: ["GF;Bevan-regular"],
                                verticalAlignment: "top",
                                withExternalLayout: !0
                            }), e(i, {
                                __fromCanvasComponent: !0,
                                children: e(r, {
                                    children: t("h2", {
                                        style: {
                                            "--font-selector": "R0Y7T3BlbiBTYW5zLTgwMA==",
                                            "--framer-font-family": '"Open Sans", "Open Sans Placeholder", sans-serif',
                                            "--framer-font-open-type-features": "'cv01' on, 'cv09' on, 'cv11' on, 'cv05' on, 'ss03' on",
                                            "--framer-font-size": "18px",
                                            "--framer-font-weight": "800",
                                            "--framer-line-height": "1em",
                                            "--framer-text-alignment": "left",
                                            "--framer-text-color": "var(--token-8961fb69-0ea3-46ab-8b8e-1f9187ebd1a9, rgb(255, 255, 255))"
                                        },
                                        children: ["We turn your catalog into full looks tailored to each customer\u2019s style, body type, and budget.", e("br", {}), e("br", {}), "Smart, scalable, and ready to convert."]
                                    })
                                }),
                                className: "framer-2ast8c",
                                fonts: ["GF;Open Sans-800"],
                                verticalAlignment: "center",
                                withExternalLayout: !0
                            })]
                        }), t("div", {
                            className: "framer-9cte6t",
                            children: [e(I, {
                                __framer__spring: {
                                    bounce: .2,
                                    damping: 60,
                                    delay: 0,
                                    duration: 3,
                                    durationBasedSpring: !0,
                                    ease: [.44, 0, .56, 1],
                                    mass: 1,
                                    stiffness: 500,
                                    type: "spring"
                                },
                                __framer__styleTransformEffectEnabled: !0,
                                __framer__transformTargets: [{
                                    target: {
                                        opacity: 1,
                                        rotate: 0,
                                        rotateX: 0,
                                        rotateY: 0,
                                        scale: .4,
                                        skewX: 0,
                                        skewY: 0,
                                        x: 582,
                                        y: 0
                                    }
                                }, {
                                    ref: Kr,
                                    target: {
                                        opacity: 1,
                                        rotate: 0,
                                        rotateX: 0,
                                        rotateY: 0,
                                        scale: 1,
                                        skewX: 0,
                                        skewY: 0,
                                        x: 0,
                                        y: 0
                                    }
                                }, {
                                    ref: Ne,
                                    target: {
                                        opacity: 1,
                                        rotate: 0,
                                        rotateX: 0,
                                        rotateY: 0,
                                        scale: .8,
                                        skewX: 0,
                                        skewY: 0,
                                        x: -550,
                                        y: 200
                                    }
                                }],
                                __framer__transformTrigger: "onScrollTarget",
                                __framer__transformViewportThreshold: 1,
                                __perspectiveFX: !1,
                                __targetOpacity: 1,
                                background: {
                                    alt: "",
                                    fit: "fill",
                                    loading: s((n?.y || 0) + 0 + 4714 + 0 + 0 + 0 + 287 + 300 - 208),
                                    pixelHeight: 810,
                                    pixelWidth: 1440,
                                    src: "https://framerusercontent.com/images/ohUvSeqcea4gEOi3G9mVoqXnveQ.svg"
                                },
                                className: "framer-1a5kdcf",
                                "data-framer-name": "image 5",
                                whileHover: S
                            }), e(I, {
                                __framer__spring: {
                                    bounce: .2,
                                    damping: 60,
                                    delay: 0,
                                    duration: 3,
                                    durationBasedSpring: !0,
                                    ease: [.44, 0, .56, 1],
                                    mass: 1,
                                    stiffness: 500,
                                    type: "spring"
                                },
                                __framer__styleTransformEffectEnabled: !0,
                                __framer__transformTargets: [{
                                    target: {
                                        opacity: 1,
                                        rotate: 0,
                                        rotateX: 0,
                                        rotateY: 0,
                                        scale: .4,
                                        skewX: 0,
                                        skewY: 0,
                                        x: 582,
                                        y: 0
                                    }
                                }, {
                                    ref: $r,
                                    target: {
                                        opacity: 1,
                                        rotate: 0,
                                        rotateX: 0,
                                        rotateY: 0,
                                        scale: 1,
                                        skewX: 0,
                                        skewY: 0,
                                        x: 0,
                                        y: 0
                                    }
                                }, {
                                    ref: Ne,
                                    target: {
                                        opacity: 1,
                                        rotate: 0,
                                        rotateX: 0,
                                        rotateY: 0,
                                        scale: .8,
                                        skewX: 0,
                                        skewY: 0,
                                        x: -279,
                                        y: 111
                                    }
                                }],
                                __framer__transformTrigger: "onScrollTarget",
                                __framer__transformViewportThreshold: 1,
                                __perspectiveFX: !1,
                                __targetOpacity: 1,
                                background: {
                                    alt: "",
                                    fit: "fill",
                                    loading: s((n?.y || 0) + 0 + 4714 + 0 + 0 + 0 + 287 + 300 - 208),
                                    pixelHeight: 810,
                                    pixelWidth: 1440,
                                    src: "https://framerusercontent.com/images/c0RPswH9Cd8OuaHzxyf86XJB2RM.svg"
                                },
                                className: "framer-1awe7m6",
                                "data-framer-name": "image 4",
                                whileHover: S
                            }), e(I, {
                                __framer__spring: {
                                    bounce: .2,
                                    damping: 60,
                                    delay: 0,
                                    duration: 3,
                                    durationBasedSpring: !0,
                                    ease: [.44, 0, .56, 1],
                                    mass: 1,
                                    stiffness: 500,
                                    type: "spring"
                                },
                                __framer__styleTransformEffectEnabled: !0,
                                __framer__transformTargets: [{
                                    target: {
                                        opacity: 1,
                                        rotate: 0,
                                        rotateX: 0,
                                        rotateY: 0,
                                        scale: .4,
                                        skewX: 0,
                                        skewY: 0,
                                        x: 582,
                                        y: 0
                                    }
                                }, {
                                    ref: et,
                                    target: {
                                        opacity: 1,
                                        rotate: 0,
                                        rotateX: 0,
                                        rotateY: 0,
                                        scale: 1,
                                        skewX: 0,
                                        skewY: 0,
                                        x: 0,
                                        y: 0
                                    }
                                }, {
                                    ref: Ne,
                                    target: {
                                        opacity: 1,
                                        rotate: 0,
                                        rotateX: 0,
                                        rotateY: 0,
                                        scale: .8,
                                        skewX: 0,
                                        skewY: 0,
                                        x: 0,
                                        y: 0
                                    }
                                }],
                                __framer__transformTrigger: "onScrollTarget",
                                __framer__transformViewportThreshold: 1,
                                __perspectiveFX: !1,
                                __targetOpacity: 1,
                                background: {
                                    alt: "",
                                    fit: "fill",
                                    loading: s((n?.y || 0) + 0 + 4714 + 0 + 0 + 0 + 287 + 300 - 208),
                                    pixelHeight: 810,
                                    pixelWidth: 1440,
                                    src: "https://framerusercontent.com/images/2ekNET4EbNc8yTzDY7v36sJ1uno.svg"
                                },
                                className: "framer-1nz3709",
                                "data-framer-name": "image 3",
                                whileHover: S
                            }), e(I, {
                                __framer__spring: {
                                    bounce: .2,
                                    damping: 60,
                                    delay: 0,
                                    duration: 3,
                                    durationBasedSpring: !0,
                                    ease: [.44, 0, .56, 1],
                                    mass: 1,
                                    stiffness: 500,
                                    type: "spring"
                                },
                                __framer__styleTransformEffectEnabled: !0,
                                __framer__transformTargets: [{
                                    target: {
                                        opacity: 1,
                                        rotate: 0,
                                        rotateX: 0,
                                        rotateY: 0,
                                        scale: .4,
                                        skewX: 0,
                                        skewY: 0,
                                        x: 572,
                                        y: 0
                                    }
                                }, {
                                    ref: rt,
                                    target: {
                                        opacity: 1,
                                        rotate: 0,
                                        rotateX: 0,
                                        rotateY: 0,
                                        scale: 1,
                                        skewX: 0,
                                        skewY: 0,
                                        x: 0,
                                        y: 0
                                    }
                                }, {
                                    ref: Ne,
                                    target: {
                                        opacity: 1,
                                        rotate: 0,
                                        rotateX: 0,
                                        rotateY: 0,
                                        scale: .8,
                                        skewX: 0,
                                        skewY: 0,
                                        x: 279,
                                        y: -111
                                    }
                                }],
                                __framer__transformTrigger: "onScrollTarget",
                                __framer__transformViewportThreshold: 1,
                                __perspectiveFX: !1,
                                __targetOpacity: 1,
                                background: {
                                    alt: "",
                                    fit: "fill",
                                    loading: s((n?.y || 0) + 0 + 4714 + 0 + 0 + 0 + 287 + 300 - 208),
                                    pixelHeight: 810,
                                    pixelWidth: 1440,
                                    src: "https://framerusercontent.com/images/Hw0CjS6gqIBxLqy5oEWp4ZoOgeo.svg"
                                },
                                className: "framer-ahyea1",
                                "data-framer-name": "image 2",
                                whileHover: S
                            }), e(I, {
                                __framer__spring: {
                                    bounce: .2,
                                    damping: 60,
                                    delay: 0,
                                    duration: 3,
                                    durationBasedSpring: !0,
                                    ease: [.44, 0, .56, 1],
                                    mass: 1,
                                    stiffness: 500,
                                    type: "spring"
                                },
                                __framer__styleTransformEffectEnabled: !0,
                                __framer__transformTargets: [{
                                    target: {
                                        opacity: 1,
                                        rotate: 0,
                                        rotateX: 0,
                                        rotateY: 0,
                                        scale: .4,
                                        skewX: 0,
                                        skewY: 0,
                                        x: 582,
                                        y: 0
                                    }
                                }, {
                                    ref: tt,
                                    target: {
                                        opacity: 1,
                                        rotate: 0,
                                        rotateX: 0,
                                        rotateY: 0,
                                        scale: 1,
                                        skewX: 0,
                                        skewY: 0,
                                        x: 0,
                                        y: 0
                                    }
                                }, {
                                    ref: Ne,
                                    target: {
                                        opacity: 1,
                                        rotate: 0,
                                        rotateX: 0,
                                        rotateY: 0,
                                        scale: .8,
                                        skewX: 0,
                                        skewY: 0,
                                        x: 550,
                                        y: -200
                                    }
                                }],
                                __framer__transformTrigger: "onScrollTarget",
                                __framer__transformViewportThreshold: 1,
                                __perspectiveFX: !1,
                                __targetOpacity: 1,
                                background: {
                                    alt: "",
                                    fit: "fill",
                                    loading: s((n?.y || 0) + 0 + 4714 + 0 + 0 + 0 + 287 + 300 - 208),
                                    pixelHeight: 810,
                                    pixelWidth: 1440,
                                    src: "https://framerusercontent.com/images/R5P57hWNyoplNi1Vi8D0TuqmeWE.svg"
                                },
                                className: "framer-1g1oln4",
                                "data-framer-name": "image 1",
                                whileHover: S
                            })]
                        })]
                    }), e("div", {
                        className: "framer-1cm6hr3",
                        "data-framer-name": "trigger entrada",
                        id: nn,
                        ref: tt
                    }), e("div", {
                        className: "framer-y372pi",
                        "data-framer-name": "trigger entrada",
                        id: on,
                        ref: rt
                    }), e("div", {
                        className: "framer-y1ptdr",
                        "data-framer-name": "trigger entrada",
                        id: ln,
                        ref: et
                    }), e("div", {
                        className: "framer-3n9j5o",
                        "data-framer-name": "trigger entrada",
                        id: sn,
                        ref: $r
                    }), e("div", {
                        className: "framer-1nillj6",
                        "data-framer-name": "trigger entrada",
                        id: fn,
                        ref: Kr
                    }), e("div", {
                        className: "framer-1ww1to2",
                        "data-framer-name": "trigger saida",
                        id: mn,
                        ref: Ne
                    })]
                }), ue() && e("div", {
                    className: "framer-1wbh2as hidden-z10mb2 hidden-f5yxu5"
                }), ue() && t("div", {
                    className: "framer-1jiugos hidden-z10mb2 hidden-f5yxu5",
                    children: [e("div", {
                        className: "framer-1r0qfps",
                        "data-framer-name": "fundo teste"
                    }), t(z, {
                        __framer__spring: {
                            bounce: .2,
                            damping: 60,
                            delay: 0,
                            duration: 1,
                            durationBasedSpring: !0,
                            ease: [.44, 0, .56, 1],
                            mass: 1,
                            stiffness: 500,
                            type: "spring"
                        },
                        __framer__styleTransformEffectEnabled: !0,
                        __framer__transformTargets: [{
                            target: {
                                opacity: 1,
                                rotate: 0,
                                rotateX: 0,
                                rotateY: 0,
                                scale: .5,
                                skewX: 0,
                                skewY: 0,
                                x: 0,
                                y: 200
                            }
                        }, {
                            ref: at,
                            target: {
                                opacity: 1,
                                rotate: 0,
                                rotateX: 0,
                                rotateY: 0,
                                scale: 1,
                                skewX: 0,
                                skewY: 0,
                                x: 0,
                                y: 0
                            }
                        }],
                        __framer__transformTrigger: "onScrollTarget",
                        __framer__transformViewportThreshold: 1,
                        __perspectiveFX: !1,
                        __targetOpacity: 1,
                        className: "framer-z8e3ee",
                        id: cn,
                        ref: at,
                        children: [e(p.div, {
                            className: "framer-1on9din",
                            whileHover: S,
                            children: e(g, {
                                background: {
                                    alt: "",
                                    fit: "fill",
                                    loading: s((n?.y || 0) + 0 + 7034 + 0 + 145 + 68 + 0),
                                    pixelHeight: 5269,
                                    pixelWidth: 3403,
                                    src: "https://framerusercontent.com/images/jRFjA3jFPR8PObKOBFrX1cPo1s.png"
                                },
                                className: "framer-181mz0h"
                            })
                        }), t("div", {
                            className: "framer-1xxtny6",
                            children: [e(i, {
                                __fromCanvasComponent: !0,
                                children: e(r, {
                                    children: e("p", {
                                        style: {
                                            "--font-selector": "R0Y7QmV2YW4tcmVndWxhcg==",
                                            "--framer-font-family": '"Bevan", "Bevan Placeholder", serif',
                                            "--framer-font-open-type-features": "'cv09' on, 'cv01' on, 'cv05' on, 'ss03' on",
                                            "--framer-font-size": "50px",
                                            "--framer-letter-spacing": "-0.01em",
                                            "--framer-line-height": "1.1em",
                                            "--framer-text-alignment": "left",
                                            "--framer-text-color": "rgb(119, 61, 235)"
                                        },
                                        children: e("span", {
                                            "data-text-fill": "true",
                                            style: {
                                                backgroundImage: "linear-gradient(72deg, rgb(142, 95, 237) 0%, rgb(21, 4, 56) 100%)"
                                            },
                                            children: "VIRTUAL TRY-ON"
                                        })
                                    })
                                }),
                                className: "framer-1ybdm8r",
                                fonts: ["GF;Bevan-regular"],
                                verticalAlignment: "top",
                                whileHover: S,
                                withExternalLayout: !0
                            }), e(i, {
                                __fromCanvasComponent: !0,
                                children: t(r, {
                                    children: [t("h2", {
                                        style: {
                                            "--font-selector": "R0Y7T3BlbiBTYW5zLTgwMA==",
                                            "--framer-font-family": '"Open Sans", "Open Sans Placeholder", sans-serif',
                                            "--framer-font-open-type-features": "'cv01' on, 'cv09' on, 'cv11' on, 'cv05' on, 'ss03' on",
                                            "--framer-font-weight": "800",
                                            "--framer-line-height": "2em",
                                            "--framer-text-alignment": "left"
                                        },
                                        children: [e("span", {
                                            style: {
                                                "--font-selector": "R0Y7QmV2YW4tcmVndWxhcg==",
                                                "--framer-font-family": '"Bevan", "Bevan Placeholder", serif',
                                                "--framer-font-size": "24px",
                                                "--framer-font-weight": "400"
                                            },
                                            children: "Welcome to the future of try-ons!"
                                        }), e("span", {
                                            style: {
                                                "--framer-font-size": "24px"
                                            },
                                            children: e("br", {})
                                        }), e("span", {
                                            style: {
                                                "--framer-font-size": "24px"
                                            },
                                            children: " "
                                        }), e("span", {
                                            style: {
                                                "--font-selector": "R0Y7QmV2YW4tcmVndWxhcg==",
                                                "--framer-font-family": '"Bevan", "Bevan Placeholder", serif',
                                                "--framer-font-size": "24px",
                                                "--framer-font-weight": "400"
                                            },
                                            children: "Better fit. Fewer returns."
                                        }), e("br", {}), e("br", {}), "Let customers preview looks on their own bodies \u2014 before they buy."]
                                    }), e("h2", {
                                        style: {
                                            "--font-selector": "R0Y7T3BlbiBTYW5zLTgwMA==",
                                            "--framer-font-family": '"Open Sans", "Open Sans Placeholder", sans-serif',
                                            "--framer-font-open-type-features": "'cv01' on, 'cv09' on, 'cv11' on, 'cv05' on, 'ss03' on",
                                            "--framer-font-weight": "800",
                                            "--framer-line-height": "2em",
                                            "--framer-text-alignment": "left"
                                        },
                                        children: e("br", {
                                            className: "trailing-break"
                                        })
                                    })]
                                }),
                                className: "framer-frtpwg",
                                fonts: ["GF;Open Sans-800", "GF;Bevan-regular"],
                                verticalAlignment: "center",
                                whileHover: S,
                                withExternalLayout: !0
                            })]
                        })]
                    })]
                }), ue() && e("div", {
                    className: "framer-ytrha9 hidden-z10mb2 hidden-f5yxu5",
                    children: t("div", {
                        className: "framer-1uk3m45",
                        "data-framer-name": "genie",
                        id: pn,
                        ref: dn,
                        children: [e("div", {
                            className: "framer-1bqiyhg",
                            children: t("div", {
                                className: "framer-lxctym",
                                children: [e(i, {
                                    __fromCanvasComponent: !0,
                                    children: t(r, {
                                        children: [e("p", {
                                            style: {
                                                "--font-selector": "R0Y7T3BlbiBTYW5zLTgwMA==",
                                                "--framer-font-family": '"Open Sans", "Open Sans Placeholder", sans-serif',
                                                "--framer-font-size": "17px",
                                                "--framer-font-weight": "800",
                                                "--framer-text-color": "rgb(255, 255, 255)"
                                            },
                                            children: "Feels like magic. Powered by AI."
                                        }), e("p", {
                                            children: e("br", {
                                                className: "trailing-break"
                                            })
                                        })]
                                    }),
                                    className: "framer-8nywxs",
                                    fonts: ["GF;Open Sans-800"],
                                    transformTemplate: P,
                                    verticalAlignment: "top",
                                    withExternalLayout: !0
                                }), e(g, {
                                    background: {
                                        alt: "",
                                        fit: "fit",
                                        loading: s((n?.y || 0) + 0 + 7892 + 0 + 45 + 0 + 0 + 0 + 0 + 213.5292),
                                        pixelHeight: 3048,
                                        pixelWidth: 3911,
                                        positionX: "center",
                                        positionY: "center",
                                        src: "https://framerusercontent.com/images/nNZ1FLg4OsykwahLDztjen6Itk.png"
                                    },
                                    className: "framer-1r8e45i"
                                }), e(i, {
                                    __fromCanvasComponent: !0,
                                    children: t(r, {
                                        children: [e("p", {
                                            style: {
                                                "--font-selector": "R0Y7QmV2YW4tcmVndWxhcg==",
                                                "--framer-font-family": '"Bevan", "Bevan Placeholder", serif',
                                                "--framer-font-size": "80px",
                                                "--framer-line-height": "1em",
                                                "--framer-text-alignment": "center",
                                                "--framer-text-color": "rgb(255, 255, 255)"
                                            },
                                            children: "MEET"
                                        }), e("p", {
                                            style: {
                                                "--font-selector": "R0Y7QmV2YW4tcmVndWxhcg==",
                                                "--framer-font-family": '"Bevan", "Bevan Placeholder", serif',
                                                "--framer-font-size": "80px",
                                                "--framer-line-height": "1em",
                                                "--framer-text-alignment": "center",
                                                "--framer-text-color": "rgb(255, 255, 255)"
                                            },
                                            children: "THE GENIE"
                                        }), e("p", {
                                            style: {
                                                "--framer-line-height": "1em",
                                                "--framer-text-alignment": "center"
                                            },
                                            children: e("br", {
                                                className: "trailing-break"
                                            })
                                        })]
                                    }),
                                    className: "framer-gywxo8",
                                    fonts: ["GF;Bevan-regular"],
                                    transformTemplate: P,
                                    verticalAlignment: "top",
                                    withExternalLayout: !0
                                }), e(I, {
                                    __framer__loop: or,
                                    __framer__loopEffectEnabled: !0,
                                    __framer__loopPauseOffscreen: !0,
                                    __framer__loopRepeatDelay: 0,
                                    __framer__loopRepeatType: "mirror",
                                    __framer__loopTransition: nr,
                                    __perspectiveFX: !1,
                                    __targetOpacity: 1,
                                    background: {
                                        alt: "",
                                        fit: "fill",
                                        loading: s((n?.y || 0) + 0 + 7892 + 0 + 45 + 0 + 0 + 0 + 0 + 958 - 727),
                                        pixelHeight: 3375,
                                        pixelWidth: 6e3,
                                        src: "https://framerusercontent.com/images/WAMnjYi3mIJFJMfEjcpTILxh8YQ.png"
                                    },
                                    className: "framer-t8z4m2"
                                }), e("div", {
                                    className: "framer-cx8bu4",
                                    children: e(g, {
                                        background: {
                                            alt: "",
                                            fit: "fill",
                                            loading: s((n?.y || 0) + 0 + 7892 + 0 + 45 + 0 + 0 + 0 + 0 + 0 + 134.5 + 540 + -50),
                                            pixelHeight: 3375,
                                            pixelWidth: 6e3,
                                            sizes: "227px",
                                            src: "https://framerusercontent.com/images/vCcLIA2IdKAhft2XrHtnsEhjKlU.png",
                                            srcSet: "https://framerusercontent.com/images/vCcLIA2IdKAhft2XrHtnsEhjKlU.png?scale-down-to=512 512w,https://framerusercontent.com/images/vCcLIA2IdKAhft2XrHtnsEhjKlU.png?scale-down-to=1024 1024w,https://framerusercontent.com/images/vCcLIA2IdKAhft2XrHtnsEhjKlU.png?scale-down-to=2048 2048w,https://framerusercontent.com/images/vCcLIA2IdKAhft2XrHtnsEhjKlU.png?scale-down-to=4096 4096w,https://framerusercontent.com/images/vCcLIA2IdKAhft2XrHtnsEhjKlU.png 6000w"
                                        },
                                        className: "framer-o2ficv"
                                    })
                                })]
                            })
                        }), e("div", {
                            className: "framer-1osea3l",
                            children: t("div", {
                                className: "framer-yiqo7j",
                                children: [e(i, {
                                    __fromCanvasComponent: !0,
                                    children: e(r, {
                                        children: e("p", {
                                            style: {
                                                "--font-selector": "R0Y7T3BlbiBTYW5zLTgwMA==",
                                                "--framer-font-family": '"Open Sans", "Open Sans Placeholder", sans-serif',
                                                "--framer-font-size": "14px",
                                                "--framer-font-weight": "800",
                                                "--framer-line-height": "1.1em",
                                                "--framer-text-alignment": "justify",
                                                "--framer-text-color": "rgb(255, 255, 255)"
                                            },
                                            children: "Our AI stylist \u2014 the smartest hire you\u2019ll ever make."
                                        })
                                    }),
                                    className: "framer-5jsvtk",
                                    fonts: ["GF;Open Sans-800"],
                                    verticalAlignment: "top",
                                    withExternalLayout: !0
                                }), e(i, {
                                    __fromCanvasComponent: !0,
                                    children: e(r, {
                                        children: e("p", {
                                            style: {
                                                "--font-selector": "R0Y7T3BlbiBTYW5zLXJlZ3VsYXI=",
                                                "--framer-font-family": '"Open Sans", "Open Sans Placeholder", sans-serif',
                                                "--framer-font-size": "14px",
                                                "--framer-line-height": "1.1em",
                                                "--framer-text-alignment": "justify",
                                                "--framer-text-color": "rgb(255, 255, 255)"
                                            },
                                            children: "Agent of agents, the Genie grants styling wishes faster than any team ever could \u2014 transforming static catalogs into full outfits tailored to each shopper."
                                        })
                                    }),
                                    className: "framer-aqzhdl",
                                    fonts: ["GF;Open Sans-regular"],
                                    verticalAlignment: "top",
                                    withExternalLayout: !0
                                }), e(i, {
                                    __fromCanvasComponent: !0,
                                    children: e(r, {
                                        children: e("p", {
                                            style: {
                                                "--font-selector": "R0Y7T3BlbiBTYW5zLTgwMA==",
                                                "--framer-font-family": '"Open Sans", "Open Sans Placeholder", sans-serif',
                                                "--framer-font-size": "14px",
                                                "--framer-font-weight": "800",
                                                "--framer-line-height": "1.1em",
                                                "--framer-text-alignment": "justify",
                                                "--framer-text-color": "rgb(255, 255, 255)"
                                            },
                                            children: e("strong", {
                                                children: "Always on. Always learning. Always styling to sell."
                                            })
                                        })
                                    }),
                                    className: "framer-14akbzn",
                                    fonts: ["GF;Open Sans-800"],
                                    verticalAlignment: "top",
                                    withExternalLayout: !0
                                })]
                            })
                        })]
                    })
                }), ue() && t("div", {
                    className: "framer-1vdl146 hidden-z10mb2 hidden-f5yxu5",
                    "data-framer-name": "tudo",
                    id: hn,
                    ref: gn,
                    children: [t("div", {
                        className: "framer-zdcsod",
                        id: xn,
                        ref: dr,
                        children: [e(Q, {
                            __framer__spring: {
                                bounce: .2,
                                damping: 60,
                                delay: 0,
                                duration: 10,
                                durationBasedSpring: !0,
                                ease: [.44, 0, .56, 1],
                                mass: 1,
                                stiffness: 500,
                                type: "spring"
                            },
                            __framer__styleTransformEffectEnabled: !0,
                            __framer__transformTargets: [{
                                target: {
                                    opacity: .4,
                                    rotate: 0,
                                    rotateX: 50,
                                    rotateY: 50,
                                    scale: .2,
                                    skewX: 0,
                                    skewY: 0,
                                    x: 200,
                                    y: 10
                                }
                            }, {
                                ref: dr,
                                target: {
                                    opacity: 1,
                                    rotate: 0,
                                    rotateX: 0,
                                    rotateY: 0,
                                    scale: 1,
                                    skewX: 0,
                                    skewY: 0,
                                    x: 0,
                                    y: 0
                                }
                            }],
                            __framer__transformTrigger: "onScrollTarget",
                            __framer__transformViewportThreshold: 1,
                            __fromCanvasComponent: !0,
                            __perspectiveFX: !1,
                            __targetOpacity: 1,
                            children: e(r, {
                                children: e("p", {
                                    style: {
                                        "--font-selector": "R0Y7QmV2YW4tcmVndWxhcg==",
                                        "--framer-font-family": '"Bevan", "Bevan Placeholder", serif',
                                        "--framer-font-open-type-features": "'cv09' on, 'cv01' on, 'cv05' on, 'ss03' on",
                                        "--framer-font-size": "61px",
                                        "--framer-letter-spacing": "-0.01em",
                                        "--framer-line-height": "1.1em",
                                        "--framer-text-alignment": "center",
                                        "--framer-text-color": "rgb(255, 252, 252)"
                                    },
                                    children: "HOW IT WORKS"
                                })
                            }),
                            className: "framer-kpgfz8",
                            fonts: ["GF;Bevan-regular"],
                            verticalAlignment: "top",
                            withExternalLayout: !0
                        }), e(Q, {
                            __framer__spring: {
                                bounce: .2,
                                damping: 60,
                                delay: 0,
                                duration: 10,
                                durationBasedSpring: !0,
                                ease: [.44, 0, .56, 1],
                                mass: 1,
                                stiffness: 500,
                                type: "spring"
                            },
                            __framer__styleTransformEffectEnabled: !0,
                            __framer__transformTargets: [{
                                target: {
                                    opacity: .5,
                                    rotate: 0,
                                    rotateX: 0,
                                    rotateY: 0,
                                    scale: 0,
                                    skewX: 0,
                                    skewY: 0,
                                    x: 0,
                                    y: 25
                                }
                            }, {
                                ref: dr,
                                target: {
                                    opacity: 1,
                                    rotate: 0,
                                    rotateX: 0,
                                    rotateY: 0,
                                    scale: 1,
                                    skewX: 0,
                                    skewY: 0,
                                    x: 0,
                                    y: 0
                                }
                            }],
                            __framer__transformTrigger: "onScrollTarget",
                            __framer__transformViewportThreshold: 1,
                            __fromCanvasComponent: !0,
                            __perspectiveFX: !1,
                            __targetOpacity: 1,
                            children: e(r, {
                                children: e("h2", {
                                    style: {
                                        "--font-selector": "R0Y7T3BlbiBTYW5zLTgwMA==",
                                        "--framer-font-family": '"Open Sans", "Open Sans Placeholder", sans-serif',
                                        "--framer-font-open-type-features": "'cv01' on, 'cv09' on, 'cv11' on, 'cv05' on, 'ss03' on",
                                        "--framer-font-size": "18px",
                                        "--framer-font-weight": "800",
                                        "--framer-line-height": "1em",
                                        "--framer-text-alignment": "center",
                                        "--framer-text-color": "var(--token-8961fb69-0ea3-46ab-8b8e-1f9187ebd1a9, rgb(255, 255, 255))"
                                    },
                                    children: "Get styled by the Genie in just 4 simple steps!"
                                })
                            }),
                            className: "framer-mrinvh",
                            fonts: ["GF;Open Sans-800"],
                            verticalAlignment: "center",
                            withExternalLayout: !0
                        })]
                    }), e("div", {
                        className: "framer-t0mmmq",
                        "data-framer-name": "the platform",
                        children: t("div", {
                            className: "framer-p7d8ab",
                            id: un,
                            ref: wn,
                            children: [t(z, {
                                __framer__spring: {
                                    bounce: .2,
                                    damping: 60,
                                    delay: 0,
                                    duration: 5,
                                    durationBasedSpring: !0,
                                    ease: [.44, 0, .56, 1],
                                    mass: 1,
                                    stiffness: 500,
                                    type: "spring"
                                },
                                __framer__styleTransformEffectEnabled: !0,
                                __framer__transformTargets: [{
                                    target: {
                                        opacity: .5,
                                        rotate: 0,
                                        rotateX: 0,
                                        rotateY: 0,
                                        scale: 0,
                                        skewX: 0,
                                        skewY: 0,
                                        x: 0,
                                        y: 0
                                    }
                                }, {
                                    ref: nt,
                                    target: {
                                        opacity: 1,
                                        rotate: 0,
                                        rotateX: 0,
                                        rotateY: 0,
                                        scale: 1,
                                        skewX: 0,
                                        skewY: 0,
                                        x: 0,
                                        y: 0
                                    }
                                }],
                                __framer__transformTrigger: "onScrollTarget",
                                __framer__transformViewportThreshold: 1,
                                __perspectiveFX: !1,
                                __targetOpacity: 1,
                                className: "framer-gwvnp3",
                                id: yn,
                                ref: nt,
                                children: [t("div", {
                                    className: "framer-m76uf7",
                                    id: vn,
                                    ref: bn,
                                    children: [e("div", {
                                        className: "framer-b8nm33",
                                        children: e(i, {
                                            __fromCanvasComponent: !0,
                                            children: e(r, {
                                                children: e("ol", {
                                                    style: {
                                                        "--font-selector": "R0Y7T3BlbiBTYW5zLTgwMA==",
                                                        "--framer-font-family": '"Open Sans", "Open Sans Placeholder", sans-serif',
                                                        "--framer-font-size": "25px",
                                                        "--framer-font-weight": "800",
                                                        "--framer-letter-spacing": "0.01em",
                                                        "--framer-line-height": "1em",
                                                        "--framer-text-alignment": "center",
                                                        "--framer-text-color": "rgb(255, 250, 250)"
                                                    },
                                                    children: e("li", {
                                                        children: e("p", {
                                                            children: "Start with a Prompt"
                                                        })
                                                    })
                                                })
                                            }),
                                            className: "framer-bugq5b",
                                            fonts: ["GF;Open Sans-800"],
                                            transformTemplate: P,
                                            verticalAlignment: "top",
                                            withExternalLayout: !0
                                        })
                                    }), e("div", {
                                        className: "framer-p3b5yg",
                                        children: e(g, {
                                            background: {
                                                alt: "",
                                                fit: "fill",
                                                loading: s((n?.y || 0) + 0 + 8940 + 0 + 244 + 0 + 0 + 48 + 0 + 35 + 10 + 24.3 + 33.875),
                                                pixelHeight: 810,
                                                pixelWidth: 1440,
                                                src: "https://framerusercontent.com/images/OFusmVZIko6zZR7owr2mkFR9E.svg"
                                            },
                                            className: "framer-1nbyjao"
                                        })
                                    }), e("div", {
                                        className: "framer-3k4wuw",
                                        children: e(i, {
                                            __fromCanvasComponent: !0,
                                            children: t(r, {
                                                children: [e("p", {
                                                    style: {
                                                        "--font-selector": "R0Y7T3BlbiBTYW5zLXJlZ3VsYXI=",
                                                        "--framer-font-family": '"Open Sans", "Open Sans Placeholder", sans-serif',
                                                        "--framer-font-size": "17px",
                                                        "--framer-line-height": "1.1em",
                                                        "--framer-text-alignment": "center",
                                                        "--framer-text-color": "rgb(255, 255, 255)"
                                                    },
                                                    children: " Let shoppers search by style, vibe, or photo."
                                                }), e("p", {
                                                    style: {
                                                        "--font-selector": "R0Y7T3BlbiBTYW5zLXJlZ3VsYXI=",
                                                        "--framer-font-family": '"Open Sans", "Open Sans Placeholder", sans-serif',
                                                        "--framer-font-size": "17px",
                                                        "--framer-line-height": "1.1em",
                                                        "--framer-text-alignment": "center",
                                                        "--framer-text-color": "rgb(255, 255, 255)"
                                                    },
                                                    children: "Whether they type, talk, or upload a picture \u2014 your customers tell Genie what they want, and we take it from there."
                                                })]
                                            }),
                                            className: "framer-17xvgno",
                                            fonts: ["GF;Open Sans-regular"],
                                            verticalAlignment: "top",
                                            withExternalLayout: !0
                                        })
                                    })]
                                }), t("div", {
                                    className: "framer-nqv177",
                                    id: kn,
                                    ref: _n,
                                    children: [e("div", {
                                        className: "framer-btear0",
                                        children: e(i, {
                                            __fromCanvasComponent: !0,
                                            children: e(r, {
                                                children: e("ol", {
                                                    start: "2",
                                                    style: {
                                                        "--font-selector": "R0Y7T3BlbiBTYW5zLTgwMA==",
                                                        "--framer-font-family": '"Open Sans", "Open Sans Placeholder", sans-serif',
                                                        "--framer-font-size": "25px",
                                                        "--framer-font-weight": "800",
                                                        "--framer-letter-spacing": "0.01em",
                                                        "--framer-line-height": "1em",
                                                        "--framer-text-alignment": "center",
                                                        "--framer-text-color": "rgb(255, 250, 250)"
                                                    },
                                                    children: e("li", {
                                                        children: e("p", {
                                                            children: "Meet the Genie"
                                                        })
                                                    })
                                                })
                                            }),
                                            className: "framer-vqljsn",
                                            fonts: ["GF;Open Sans-800"],
                                            transformTemplate: P,
                                            verticalAlignment: "top",
                                            withExternalLayout: !0
                                        })
                                    }), e("div", {
                                        className: "framer-1wuch4",
                                        children: e(g, {
                                            background: {
                                                alt: "",
                                                fit: "fill",
                                                loading: s((n?.y || 0) + 0 + 8940 + 0 + 244 + 0 + 0 + 48 + 0 + 35 + 10 + 24.3 + 33.875),
                                                pixelHeight: 810,
                                                pixelWidth: 1440,
                                                src: "https://framerusercontent.com/images/KpX2fGDNVcbWNHZLjPnHejP8ctQ.svg"
                                            },
                                            className: "framer-lbfzg2"
                                        })
                                    }), e("div", {
                                        className: "framer-esi5ld",
                                        children: e(i, {
                                            __fromCanvasComponent: !0,
                                            children: t(r, {
                                                children: [e("p", {
                                                    style: {
                                                        "--font-selector": "R0Y7T3BlbiBTYW5zLXJlZ3VsYXI=",
                                                        "--framer-font-family": '"Open Sans", "Open Sans Placeholder", sans-serif',
                                                        "--framer-font-size": "17px",
                                                        "--framer-line-height": "1.1em",
                                                        "--framer-text-alignment": "center",
                                                        "--framer-text-color": "rgb(255, 255, 255)"
                                                    },
                                                    children: "Personalised looks. In seconds."
                                                }), e("p", {
                                                    style: {
                                                        "--font-selector": "R0Y7T3BlbiBTYW5zLXJlZ3VsYXI=",
                                                        "--framer-font-family": '"Open Sans", "Open Sans Placeholder", sans-serif',
                                                        "--framer-font-size": "17px",
                                                        "--framer-line-height": "1.1em",
                                                        "--framer-text-alignment": "center",
                                                        "--framer-text-color": "rgb(255, 255, 255)"
                                                    },
                                                    children: "See your catalog turn into complete outfits, tailored to each shopper\u2019s body type, vibe, and budget \u2014 no extra work needed."
                                                })]
                                            }),
                                            className: "framer-venlic",
                                            fonts: ["GF;Open Sans-regular"],
                                            verticalAlignment: "top",
                                            withExternalLayout: !0
                                        })
                                    })]
                                })]
                            }), t(z, {
                                __framer__spring: {
                                    bounce: .2,
                                    damping: 60,
                                    delay: 0,
                                    duration: 5,
                                    durationBasedSpring: !0,
                                    ease: [.44, 0, .56, 1],
                                    mass: 1,
                                    stiffness: 500,
                                    type: "spring"
                                },
                                __framer__styleTransformEffectEnabled: !0,
                                __framer__transformTargets: [{
                                    target: {
                                        opacity: .5,
                                        rotate: 0,
                                        rotateX: 0,
                                        rotateY: 0,
                                        scale: 0,
                                        skewX: 0,
                                        skewY: 0,
                                        x: 0,
                                        y: 0
                                    }
                                }, {
                                    ref: ot,
                                    target: {
                                        opacity: 1,
                                        rotate: 0,
                                        rotateX: 0,
                                        rotateY: 0,
                                        scale: 1,
                                        skewX: 0,
                                        skewY: 0,
                                        x: 0,
                                        y: 0
                                    }
                                }],
                                __framer__transformTrigger: "onScrollTarget",
                                __framer__transformViewportThreshold: 1,
                                __perspectiveFX: !1,
                                __targetOpacity: 1,
                                className: "framer-ploybk",
                                id: Tn,
                                ref: ot,
                                children: [t("div", {
                                    className: "framer-7bv15f",
                                    id: Sn,
                                    ref: Rn,
                                    children: [e("div", {
                                        className: "framer-19qsmor",
                                        children: e(i, {
                                            __fromCanvasComponent: !0,
                                            children: e(r, {
                                                children: e("ol", {
                                                    start: "3",
                                                    style: {
                                                        "--font-selector": "R0Y7T3BlbiBTYW5zLTgwMA==",
                                                        "--framer-font-family": '"Open Sans", "Open Sans Placeholder", sans-serif',
                                                        "--framer-font-size": "25px",
                                                        "--framer-font-weight": "800",
                                                        "--framer-letter-spacing": "0.01em",
                                                        "--framer-line-height": "1em",
                                                        "--framer-text-alignment": "center",
                                                        "--framer-text-color": "rgb(255, 250, 250)"
                                                    },
                                                    children: e("li", {
                                                        children: e("p", {
                                                            children: "Customise the Look"
                                                        })
                                                    })
                                                })
                                            }),
                                            className: "framer-19qnoar",
                                            fonts: ["GF;Open Sans-800"],
                                            verticalAlignment: "bottom",
                                            withExternalLayout: !0
                                        })
                                    }), e("div", {
                                        className: "framer-q9j9xy",
                                        children: e(g, {
                                            background: {
                                                alt: "",
                                                fit: "fill",
                                                loading: s((n?.y || 0) + 0 + 8940 + 0 + 244 + 0 + 0 + 48 + 590 + 33.5 + 10 + 15.45 + 34.95),
                                                pixelHeight: 2971,
                                                pixelWidth: 5300,
                                                src: "https://framerusercontent.com/images/dNel7YPwgYlrNL70FkMx9Vpj4SE.png"
                                            },
                                            className: "framer-gqdwqf"
                                        })
                                    }), e("div", {
                                        className: "framer-1l4om1r",
                                        children: e(i, {
                                            __fromCanvasComponent: !0,
                                            children: t(r, {
                                                children: [e("p", {
                                                    style: {
                                                        "--font-selector": "R0Y7T3BlbiBTYW5zLXJlZ3VsYXI=",
                                                        "--framer-font-family": '"Open Sans", "Open Sans Placeholder", sans-serif',
                                                        "--framer-font-size": "17px",
                                                        "--framer-line-height": "1.1em",
                                                        "--framer-text-alignment": "center",
                                                        "--framer-text-color": "rgb(255, 255, 255)"
                                                    },
                                                    children: "Talk to the Genie to tweak the look."
                                                }), e("p", {
                                                    style: {
                                                        "--font-selector": "R0Y7T3BlbiBTYW5zLXJlZ3VsYXI=",
                                                        "--framer-font-family": '"Open Sans", "Open Sans Placeholder", sans-serif',
                                                        "--framer-font-size": "17px",
                                                        "--framer-line-height": "1.1em",
                                                        "--framer-text-alignment": "center",
                                                        "--framer-text-color": "rgb(255, 255, 255)"
                                                    },
                                                    children: "Your customers can swap, remove, or add items to perfect the look \u2014 driving more engagement and increasing average cart size."
                                                })]
                                            }),
                                            className: "framer-1r25e1r",
                                            fonts: ["GF;Open Sans-regular"],
                                            verticalAlignment: "top",
                                            withExternalLayout: !0
                                        })
                                    })]
                                }), t("div", {
                                    className: "framer-6wp1lp",
                                    id: Yn,
                                    ref: zn,
                                    children: [e("div", {
                                        className: "framer-7fiz28",
                                        children: e(i, {
                                            __fromCanvasComponent: !0,
                                            children: e(r, {
                                                children: e("ol", {
                                                    start: "4",
                                                    style: {
                                                        "--font-selector": "R0Y7T3BlbiBTYW5zLTgwMA==",
                                                        "--framer-font-family": '"Open Sans", "Open Sans Placeholder", sans-serif',
                                                        "--framer-font-size": "25px",
                                                        "--framer-font-weight": "800",
                                                        "--framer-letter-spacing": "0.01em",
                                                        "--framer-line-height": "1em",
                                                        "--framer-text-alignment": "center",
                                                        "--framer-text-color": "rgb(255, 250, 250)"
                                                    },
                                                    children: e("li", {
                                                        children: e("p", {
                                                            children: "Virtual Try-On"
                                                        })
                                                    })
                                                })
                                            }),
                                            className: "framer-1w8ef83",
                                            fonts: ["GF;Open Sans-800"],
                                            verticalAlignment: "top",
                                            withExternalLayout: !0
                                        })
                                    }), e("div", {
                                        className: "framer-1cftgks",
                                        children: e(g, {
                                            background: {
                                                alt: "",
                                                fit: "fill",
                                                loading: s((n?.y || 0) + 0 + 8940 + 0 + 244 + 0 + 0 + 48 + 590 + 33.5 + 10 + 17.55 + 33.875),
                                                pixelHeight: 810,
                                                pixelWidth: 1440,
                                                src: "https://framerusercontent.com/images/sFawTxF57nlRNr0LZfiVPfmo1uQ.svg"
                                            },
                                            className: "framer-5f09k2"
                                        })
                                    }), e("div", {
                                        className: "framer-6g1bk5",
                                        children: e(i, {
                                            __fromCanvasComponent: !0,
                                            children: t(r, {
                                                children: [e("p", {
                                                    style: {
                                                        "--font-selector": "R0Y7T3BlbiBTYW5zLXJlZ3VsYXI=",
                                                        "--framer-font-family": '"Open Sans", "Open Sans Placeholder", sans-serif',
                                                        "--framer-font-size": "17px",
                                                        "--framer-line-height": "1.1em",
                                                        "--framer-text-alignment": "center",
                                                        "--framer-text-color": "rgb(255, 255, 255)"
                                                    },
                                                    children: "Let them see before they buy."
                                                }), e("p", {
                                                    style: {
                                                        "--font-selector": "R0Y7T3BlbiBTYW5zLXJlZ3VsYXI=",
                                                        "--framer-font-family": '"Open Sans", "Open Sans Placeholder", sans-serif',
                                                        "--framer-font-size": "17px",
                                                        "--framer-line-height": "1.1em",
                                                        "--framer-text-alignment": "center",
                                                        "--framer-text-color": "rgb(255, 255, 255)"
                                                    },
                                                    children: "Outfits rendered on real bodies. Confidence goes up. "
                                                }), e("p", {
                                                    style: {
                                                        "--font-selector": "R0Y7T3BlbiBTYW5zLXJlZ3VsYXI=",
                                                        "--framer-font-family": '"Open Sans", "Open Sans Placeholder", sans-serif',
                                                        "--framer-font-size": "17px",
                                                        "--framer-line-height": "1.1em",
                                                        "--framer-text-alignment": "center",
                                                        "--framer-text-color": "rgb(255, 255, 255)"
                                                    },
                                                    children: "Returns go down."
                                                })]
                                            }),
                                            className: "framer-belxxy",
                                            fonts: ["GF;Open Sans-regular"],
                                            verticalAlignment: "top",
                                            withExternalLayout: !0
                                        })
                                    })]
                                })]
                            })]
                        })
                    }), e("div", {
                        className: "framer-1g85bb3",
                        "data-framer-name": "the platform"
                    })]
                }), t("div", {
                    className: "framer-1tus60m",
                    "data-framer-name": "WHY STYLEGENIE",
                    id: Bn,
                    ref: In,
                    children: [t("div", {
                        className: "framer-1oqx6wn",
                        id: Fn,
                        ref: Cn,
                        children: [e(f, {
                            breakpoint: o,
                            overrides: {
                                hIWTqwvPm: {
                                    children: t(r, {
                                        children: [e("p", {
                                            style: {
                                                "--font-selector": "R0Y7QmV2YW4tcmVndWxhcg==",
                                                "--framer-font-family": '"Bevan", "Bevan Placeholder", serif',
                                                "--framer-font-open-type-features": "'cv09' on, 'cv01' on, 'cv05' on, 'ss03' on",
                                                "--framer-font-size": "41px",
                                                "--framer-letter-spacing": "-0.01em",
                                                "--framer-line-height": "1.1em",
                                                "--framer-text-alignment": "center"
                                            },
                                            children: "WHY CHOOSE  "
                                        }), e("p", {
                                            style: {
                                                "--font-selector": "R0Y7QmV2YW4tcmVndWxhcg==",
                                                "--framer-font-family": '"Bevan", "Bevan Placeholder", serif',
                                                "--framer-font-open-type-features": "'cv09' on, 'cv01' on, 'cv05' on, 'ss03' on",
                                                "--framer-font-size": "41px",
                                                "--framer-letter-spacing": "-0.01em",
                                                "--framer-line-height": "1.1em",
                                                "--framer-text-alignment": "center",
                                                "--framer-text-color": "rgb(255, 252, 252)"
                                            },
                                            children: e("br", {
                                                className: "trailing-break"
                                            })
                                        }), e("p", {
                                            style: {
                                                "--font-selector": "R0Y7QmV2YW4tcmVndWxhcg==",
                                                "--framer-font-family": '"Bevan", "Bevan Placeholder", serif',
                                                "--framer-font-open-type-features": "'cv09' on, 'cv01' on, 'cv05' on, 'ss03' on",
                                                "--framer-font-size": "41px",
                                                "--framer-letter-spacing": "-0.01em",
                                                "--framer-line-height": "1.1em",
                                                "--framer-text-alignment": "center"
                                            },
                                            children: "FOR YOUR BUSINESS"
                                        })]
                                    })
                                },
                                jUuLb2ZS_: {
                                    children: t(r, {
                                        children: [e("p", {
                                            style: {
                                                "--font-selector": "R0Y7QmV2YW4tcmVndWxhcg==",
                                                "--framer-font-family": '"Bevan", "Bevan Placeholder", serif',
                                                "--framer-font-open-type-features": "'cv09' on, 'cv01' on, 'cv05' on, 'ss03' on",
                                                "--framer-font-size": "23px",
                                                "--framer-letter-spacing": "-0.01em",
                                                "--framer-line-height": "1.1em",
                                                "--framer-text-alignment": "center"
                                            },
                                            children: "WHY CHOOSE  "
                                        }), e("p", {
                                            style: {
                                                "--font-selector": "R0Y7QmV2YW4tcmVndWxhcg==",
                                                "--framer-font-family": '"Bevan", "Bevan Placeholder", serif',
                                                "--framer-font-open-type-features": "'cv09' on, 'cv01' on, 'cv05' on, 'ss03' on",
                                                "--framer-font-size": "23px",
                                                "--framer-letter-spacing": "-0.01em",
                                                "--framer-line-height": "1.1em",
                                                "--framer-text-alignment": "center",
                                                "--framer-text-color": "rgb(255, 252, 252)"
                                            },
                                            children: e("br", {
                                                className: "trailing-break"
                                            })
                                        }), e("p", {
                                            style: {
                                                "--font-selector": "R0Y7QmV2YW4tcmVndWxhcg==",
                                                "--framer-font-family": '"Bevan", "Bevan Placeholder", serif',
                                                "--framer-font-open-type-features": "'cv09' on, 'cv01' on, 'cv05' on, 'ss03' on",
                                                "--framer-font-size": "23px",
                                                "--framer-letter-spacing": "-0.01em",
                                                "--framer-line-height": "1.1em",
                                                "--framer-text-alignment": "center"
                                            },
                                            children: "FOR YOUR BUSINESS"
                                        })]
                                    })
                                }
                            },
                            children: e(Q, {
                                __framer__spring: {
                                    bounce: .2,
                                    damping: 60,
                                    delay: 0,
                                    duration: 10,
                                    durationBasedSpring: !0,
                                    ease: [.44, 0, .56, 1],
                                    mass: 1,
                                    stiffness: 500,
                                    type: "spring"
                                },
                                __framer__styleTransformEffectEnabled: !0,
                                __framer__transformTargets: [{
                                    target: {
                                        opacity: 0,
                                        rotate: 0,
                                        rotateX: 0,
                                        rotateY: 0,
                                        scale: 0,
                                        skewX: 0,
                                        skewY: 0,
                                        x: 0,
                                        y: 10
                                    }
                                }, {
                                    ref: hr,
                                    target: {
                                        opacity: 1,
                                        rotate: 0,
                                        rotateX: 0,
                                        rotateY: 0,
                                        scale: 1,
                                        skewX: 0,
                                        skewY: 0,
                                        x: 0,
                                        y: 0
                                    }
                                }],
                                __framer__transformTrigger: "onScrollTarget",
                                __framer__transformViewportThreshold: 1,
                                __fromCanvasComponent: !0,
                                __perspectiveFX: !1,
                                __targetOpacity: 1,
                                children: t(r, {
                                    children: [e("p", {
                                        style: {
                                            "--font-selector": "R0Y7QmV2YW4tcmVndWxhcg==",
                                            "--framer-font-family": '"Bevan", "Bevan Placeholder", serif',
                                            "--framer-font-open-type-features": "'cv09' on, 'cv01' on, 'cv05' on, 'ss03' on",
                                            "--framer-font-size": "57px",
                                            "--framer-letter-spacing": "-0.01em",
                                            "--framer-line-height": "1.1em",
                                            "--framer-text-alignment": "center"
                                        },
                                        children: "WHY CHOOSE  "
                                    }), e("p", {
                                        style: {
                                            "--font-selector": "R0Y7QmV2YW4tcmVndWxhcg==",
                                            "--framer-font-family": '"Bevan", "Bevan Placeholder", serif',
                                            "--framer-font-open-type-features": "'cv09' on, 'cv01' on, 'cv05' on, 'ss03' on",
                                            "--framer-font-size": "61px",
                                            "--framer-letter-spacing": "-0.01em",
                                            "--framer-line-height": "1.1em",
                                            "--framer-text-alignment": "center",
                                            "--framer-text-color": "rgb(255, 252, 252)"
                                        },
                                        children: e("br", {
                                            className: "trailing-break"
                                        })
                                    }), e("p", {
                                        style: {
                                            "--font-selector": "R0Y7QmV2YW4tcmVndWxhcg==",
                                            "--framer-font-family": '"Bevan", "Bevan Placeholder", serif',
                                            "--framer-font-open-type-features": "'cv09' on, 'cv01' on, 'cv05' on, 'ss03' on",
                                            "--framer-font-size": "57px",
                                            "--framer-letter-spacing": "-0.01em",
                                            "--framer-line-height": "1.1em",
                                            "--framer-text-alignment": "center"
                                        },
                                        children: "FOR YOUR BUSINESS"
                                    })]
                                }),
                                className: "framer-1w1p1b5",
                                fonts: ["GF;Bevan-regular"],
                                id: Wn,
                                ref: hr,
                                verticalAlignment: "top",
                                withExternalLayout: !0
                            })
                        }), e(f, {
                            breakpoint: o,
                            overrides: {
                                hIWTqwvPm: {
                                    background: {
                                        alt: "",
                                        fit: "fill",
                                        loading: s((n?.y || 0) + 0 + 10961 + 35 + 0 + 48),
                                        pixelHeight: 810,
                                        pixelWidth: 1440,
                                        src: "https://framerusercontent.com/images/4KeyfgZZPg1d8JrsclupquWnLVc.svg"
                                    }
                                },
                                jUuLb2ZS_: {
                                    background: {
                                        alt: "",
                                        fit: "fill",
                                        loading: s((n?.y || 0) + 0 + 8686 + 0 + 0 + 192.838),
                                        pixelHeight: 810,
                                        pixelWidth: 1440,
                                        src: "https://framerusercontent.com/images/4KeyfgZZPg1d8JrsclupquWnLVc.svg"
                                    }
                                }
                            },
                            children: e(I, {
                                __framer__spring: {
                                    bounce: .2,
                                    damping: 60,
                                    delay: 0,
                                    duration: 10,
                                    durationBasedSpring: !0,
                                    ease: [.44, 0, .56, 1],
                                    mass: 1,
                                    stiffness: 500,
                                    type: "spring"
                                },
                                __framer__styleTransformEffectEnabled: !0,
                                __framer__transformTargets: [{
                                    target: {
                                        opacity: 1,
                                        rotate: 137,
                                        rotateX: 0,
                                        rotateY: 0,
                                        scale: .2,
                                        skewX: 0,
                                        skewY: 0,
                                        x: 0,
                                        y: 10
                                    }
                                }, {
                                    ref: hr,
                                    target: {
                                        opacity: 1,
                                        rotate: 0,
                                        rotateX: 0,
                                        rotateY: 0,
                                        scale: 1,
                                        skewX: 0,
                                        skewY: 0,
                                        x: 0,
                                        y: 0
                                    }
                                }],
                                __framer__transformTrigger: "onScrollTarget",
                                __framer__transformViewportThreshold: 1,
                                __perspectiveFX: !1,
                                __targetOpacity: 1,
                                background: {
                                    alt: "",
                                    fit: "fill",
                                    loading: s((n?.y || 0) + 0 + 10498 + 35 + 0 + 430.1443),
                                    pixelHeight: 810,
                                    pixelWidth: 1440,
                                    src: "https://framerusercontent.com/images/4KeyfgZZPg1d8JrsclupquWnLVc.svg"
                                },
                                className: "framer-shw5ug"
                            })
                        })]
                    }), t(z, {
                        __framer__spring: {
                            bounce: .2,
                            damping: 60,
                            delay: 0,
                            duration: 1,
                            durationBasedSpring: !0,
                            ease: [.44, 0, .56, 1],
                            mass: 1,
                            stiffness: 500,
                            type: "spring"
                        },
                        __framer__styleTransformEffectEnabled: !0,
                        __framer__transformTargets: [{
                            target: {
                                opacity: .5,
                                rotate: 0,
                                rotateX: 0,
                                rotateY: 0,
                                scale: 0,
                                skewX: 0,
                                skewY: 0,
                                x: 0,
                                y: 200
                            }
                        }, {
                            ref: it,
                            target: {
                                opacity: 1,
                                rotate: 0,
                                rotateX: 0,
                                rotateY: 0,
                                scale: 1,
                                skewX: 0,
                                skewY: 0,
                                x: 0,
                                y: 0
                            }
                        }],
                        __framer__transformTrigger: "onScrollTarget",
                        __framer__transformViewportThreshold: 1,
                        __perspectiveFX: !1,
                        __targetOpacity: 1,
                        className: "framer-5cn6be",
                        id: On,
                        ref: it,
                        children: [t("div", {
                            className: "framer-1fu82au",
                            children: [ue() && e(g, {
                                background: {
                                    alt: "",
                                    fit: "fill",
                                    loading: s((n?.y || 0) + 0 + 10498 + 35 + 972.5 + -2.8282 + 215.4172),
                                    pixelHeight: 810,
                                    pixelWidth: 1440,
                                    sizes: "684px",
                                    src: "https://framerusercontent.com/images/xhSm5yH6vIee9f1SOBiWBL1GCU.svg",
                                    srcSet: "https://framerusercontent.com/images/xhSm5yH6vIee9f1SOBiWBL1GCU.svg?scale-down-to=512 512w,https://framerusercontent.com/images/xhSm5yH6vIee9f1SOBiWBL1GCU.svg?scale-down-to=1024 1024w,https://framerusercontent.com/images/xhSm5yH6vIee9f1SOBiWBL1GCU.svg 1440w"
                                },
                                className: "framer-1k5vi0w hidden-z10mb2 hidden-f5yxu5"
                            }), re() && e(f, {
                                breakpoint: o,
                                overrides: {
                                    hIWTqwvPm: {
                                        background: {
                                            alt: "",
                                            fit: "fill",
                                            loading: s((n?.y || 0) + 0 + 10961 + 35 + 167 + -2.1125 + 207.8034),
                                            pixelHeight: 810,
                                            pixelWidth: 1440,
                                            sizes: "405px",
                                            src: "https://framerusercontent.com/images/xhSm5yH6vIee9f1SOBiWBL1GCU.svg",
                                            srcSet: "https://framerusercontent.com/images/xhSm5yH6vIee9f1SOBiWBL1GCU.svg?scale-down-to=512 512w,https://framerusercontent.com/images/xhSm5yH6vIee9f1SOBiWBL1GCU.svg?scale-down-to=1024 1024w,https://framerusercontent.com/images/xhSm5yH6vIee9f1SOBiWBL1GCU.svg 1440w"
                                        }
                                    }
                                },
                                children: e(g, {
                                    background: {
                                        alt: "",
                                        fit: "fill",
                                        pixelHeight: 810,
                                        pixelWidth: 1440,
                                        src: "https://framerusercontent.com/images/xhSm5yH6vIee9f1SOBiWBL1GCU.svg",
                                        srcSet: "https://framerusercontent.com/images/xhSm5yH6vIee9f1SOBiWBL1GCU.svg?scale-down-to=512 512w,https://framerusercontent.com/images/xhSm5yH6vIee9f1SOBiWBL1GCU.svg?scale-down-to=1024 1024w,https://framerusercontent.com/images/xhSm5yH6vIee9f1SOBiWBL1GCU.svg 1440w"
                                    },
                                    className: "framer-rdmi20 hidden-uh1o9d hidden-f5yxu5"
                                })
                            }), E() && e(f, {
                                breakpoint: o,
                                overrides: {
                                    jUuLb2ZS_: {
                                        background: {
                                            alt: "",
                                            fit: "fill",
                                            loading: s((n?.y || 0) + 0 + 8686 + 0 + 455.5 + 0 + -33.8668 + 291.0345 - 232),
                                            pixelHeight: 810,
                                            pixelWidth: 1440,
                                            sizes: "389px",
                                            src: "https://framerusercontent.com/images/xhSm5yH6vIee9f1SOBiWBL1GCU.svg",
                                            srcSet: "https://framerusercontent.com/images/xhSm5yH6vIee9f1SOBiWBL1GCU.svg?scale-down-to=512 512w,https://framerusercontent.com/images/xhSm5yH6vIee9f1SOBiWBL1GCU.svg?scale-down-to=1024 1024w,https://framerusercontent.com/images/xhSm5yH6vIee9f1SOBiWBL1GCU.svg 1440w"
                                        }
                                    }
                                },
                                children: e(g, {
                                    background: {
                                        alt: "",
                                        fit: "fill",
                                        pixelHeight: 810,
                                        pixelWidth: 1440,
                                        src: "https://framerusercontent.com/images/xhSm5yH6vIee9f1SOBiWBL1GCU.svg",
                                        srcSet: "https://framerusercontent.com/images/xhSm5yH6vIee9f1SOBiWBL1GCU.svg?scale-down-to=512 512w,https://framerusercontent.com/images/xhSm5yH6vIee9f1SOBiWBL1GCU.svg?scale-down-to=1024 1024w,https://framerusercontent.com/images/xhSm5yH6vIee9f1SOBiWBL1GCU.svg 1440w"
                                    },
                                    className: "framer-kt6qi5 hidden-uh1o9d hidden-z10mb2"
                                })
                            })]
                        }), e("div", {
                            className: "framer-c61lzi",
                            children: t("div", {
                                className: "framer-wp5sgy",
                                children: [t("div", {
                                    className: "framer-8ip0ci",
                                    children: [e(f, {
                                        breakpoint: o,
                                        overrides: {
                                            hIWTqwvPm: {
                                                background: {
                                                    alt: "",
                                                    fit: "fill",
                                                    loading: s((n?.y || 0) + 0 + 10961 + 35 + 167 + 0 + 0 + -2.3336 + 0 + 102.9475),
                                                    pixelHeight: 810,
                                                    pixelWidth: 1440,
                                                    sizes: `calc(max(((${n?.width || "100vw"} - 40px) * 1.0519 - 10px) / 2, 1px) * 0.1474)`,
                                                    src: "https://framerusercontent.com/images/HMy6MlqVcfHWlCI5SK0K19LohWU.svg",
                                                    srcSet: "https://framerusercontent.com/images/HMy6MlqVcfHWlCI5SK0K19LohWU.svg?scale-down-to=512 512w,https://framerusercontent.com/images/HMy6MlqVcfHWlCI5SK0K19LohWU.svg?scale-down-to=1024 1024w,https://framerusercontent.com/images/HMy6MlqVcfHWlCI5SK0K19LohWU.svg 1440w"
                                                }
                                            },
                                            jUuLb2ZS_: {
                                                background: {
                                                    alt: "",
                                                    fit: "fill",
                                                    loading: s((n?.y || 0) + 0 + 8686 + 0 + 455.5 + 0 + 267.1677 + 0 + 28.5 + 0 + 27.9459),
                                                    pixelHeight: 810,
                                                    pixelWidth: 1440,
                                                    sizes: "83.6975px",
                                                    src: "https://framerusercontent.com/images/HMy6MlqVcfHWlCI5SK0K19LohWU.svg",
                                                    srcSet: "https://framerusercontent.com/images/HMy6MlqVcfHWlCI5SK0K19LohWU.svg?scale-down-to=512 512w,https://framerusercontent.com/images/HMy6MlqVcfHWlCI5SK0K19LohWU.svg?scale-down-to=1024 1024w,https://framerusercontent.com/images/HMy6MlqVcfHWlCI5SK0K19LohWU.svg 1440w"
                                                }
                                            }
                                        },
                                        children: e(g, {
                                            background: {
                                                alt: "",
                                                fit: "fill",
                                                loading: s((n?.y || 0) + 0 + 10498 + 35 + 972.5 + 0 + 0 + 101.3928 + 0 + 41.0033),
                                                pixelHeight: 810,
                                                pixelWidth: 1440,
                                                sizes: `calc(max(((${n?.width || "100vw"} - 40px) * 1.0294 - 10px) / 2, 1px) * 0.1194)`,
                                                src: "https://framerusercontent.com/images/HMy6MlqVcfHWlCI5SK0K19LohWU.svg",
                                                srcSet: "https://framerusercontent.com/images/HMy6MlqVcfHWlCI5SK0K19LohWU.svg?scale-down-to=512 512w,https://framerusercontent.com/images/HMy6MlqVcfHWlCI5SK0K19LohWU.svg?scale-down-to=1024 1024w,https://framerusercontent.com/images/HMy6MlqVcfHWlCI5SK0K19LohWU.svg 1440w"
                                            },
                                            className: "framer-5szxxp",
                                            whileHover: Ze
                                        })
                                    }), e(f, {
                                        breakpoint: o,
                                        overrides: {
                                            hIWTqwvPm: {
                                                background: {
                                                    alt: "",
                                                    fit: "fill",
                                                    loading: s((n?.y || 0) + 0 + 10961 + 35 + 167 + 0 + 0 + -2.3336 + 0 + 202.3922),
                                                    pixelHeight: 810,
                                                    pixelWidth: 1440,
                                                    sizes: `calc(max(((${n?.width || "100vw"} - 40px) * 1.0519 - 10px) / 2, 1px) * 0.1474)`,
                                                    src: "https://framerusercontent.com/images/cUBOF2TaxPbGsXl3cACTFCoY0g.svg",
                                                    srcSet: "https://framerusercontent.com/images/cUBOF2TaxPbGsXl3cACTFCoY0g.svg?scale-down-to=512 512w,https://framerusercontent.com/images/cUBOF2TaxPbGsXl3cACTFCoY0g.svg?scale-down-to=1024 1024w,https://framerusercontent.com/images/cUBOF2TaxPbGsXl3cACTFCoY0g.svg 1440w"
                                                }
                                            },
                                            jUuLb2ZS_: {
                                                background: {
                                                    alt: "",
                                                    fit: "fill",
                                                    loading: s((n?.y || 0) + 0 + 8686 + 0 + 455.5 + 0 + 267.1677 + 0 + 28.5 + 0 + 133.5531),
                                                    pixelHeight: 810,
                                                    pixelWidth: 1440,
                                                    sizes: "83.6975px",
                                                    src: "https://framerusercontent.com/images/cUBOF2TaxPbGsXl3cACTFCoY0g.svg",
                                                    srcSet: "https://framerusercontent.com/images/cUBOF2TaxPbGsXl3cACTFCoY0g.svg?scale-down-to=512 512w,https://framerusercontent.com/images/cUBOF2TaxPbGsXl3cACTFCoY0g.svg?scale-down-to=1024 1024w,https://framerusercontent.com/images/cUBOF2TaxPbGsXl3cACTFCoY0g.svg 1440w"
                                                }
                                            }
                                        },
                                        children: e(g, {
                                            background: {
                                                alt: "",
                                                fit: "fill",
                                                loading: s((n?.y || 0) + 0 + 10498 + 35 + 972.5 + 0 + 0 + 101.3928 + 0 + 156.5097),
                                                pixelHeight: 810,
                                                pixelWidth: 1440,
                                                sizes: `calc(max(((${n?.width || "100vw"} - 40px) * 1.0294 - 10px) / 2, 1px) * 0.1194)`,
                                                src: "https://framerusercontent.com/images/cUBOF2TaxPbGsXl3cACTFCoY0g.svg",
                                                srcSet: "https://framerusercontent.com/images/cUBOF2TaxPbGsXl3cACTFCoY0g.svg?scale-down-to=512 512w,https://framerusercontent.com/images/cUBOF2TaxPbGsXl3cACTFCoY0g.svg?scale-down-to=1024 1024w,https://framerusercontent.com/images/cUBOF2TaxPbGsXl3cACTFCoY0g.svg 1440w"
                                            },
                                            className: "framer-1wobtab",
                                            whileHover: Ze
                                        })
                                    }), e(f, {
                                        breakpoint: o,
                                        overrides: {
                                            hIWTqwvPm: {
                                                background: {
                                                    alt: "",
                                                    fit: "fill",
                                                    loading: s((n?.y || 0) + 0 + 10961 + 35 + 167 + 0 + 0 + -2.3336 + 0 + 315.3922),
                                                    pixelHeight: 810,
                                                    pixelWidth: 1440,
                                                    sizes: `calc(max(((${n?.width || "100vw"} - 40px) * 1.0519 - 10px) / 2, 1px) * 0.1474)`,
                                                    src: "https://framerusercontent.com/images/oHph7pEIkrVsccTOm9C3seF7MNQ.svg",
                                                    srcSet: "https://framerusercontent.com/images/oHph7pEIkrVsccTOm9C3seF7MNQ.svg?scale-down-to=512 512w,https://framerusercontent.com/images/oHph7pEIkrVsccTOm9C3seF7MNQ.svg?scale-down-to=1024 1024w,https://framerusercontent.com/images/oHph7pEIkrVsccTOm9C3seF7MNQ.svg 1440w"
                                                }
                                            },
                                            jUuLb2ZS_: {
                                                background: {
                                                    alt: "",
                                                    fit: "fill",
                                                    loading: s((n?.y || 0) + 0 + 8686 + 0 + 455.5 + 0 + 267.1677 + 0 + 28.5 + 0 + 222.5531),
                                                    pixelHeight: 810,
                                                    pixelWidth: 1440,
                                                    sizes: "83.6975px",
                                                    src: "https://framerusercontent.com/images/oHph7pEIkrVsccTOm9C3seF7MNQ.svg",
                                                    srcSet: "https://framerusercontent.com/images/oHph7pEIkrVsccTOm9C3seF7MNQ.svg?scale-down-to=512 512w,https://framerusercontent.com/images/oHph7pEIkrVsccTOm9C3seF7MNQ.svg?scale-down-to=1024 1024w,https://framerusercontent.com/images/oHph7pEIkrVsccTOm9C3seF7MNQ.svg 1440w"
                                                }
                                            }
                                        },
                                        children: e(g, {
                                            background: {
                                                alt: "",
                                                fit: "fill",
                                                loading: s((n?.y || 0) + 0 + 10498 + 35 + 972.5 + 0 + 0 + 101.3928 + 0 + 273.5097),
                                                pixelHeight: 810,
                                                pixelWidth: 1440,
                                                sizes: `calc(max(((${n?.width || "100vw"} - 40px) * 1.0294 - 10px) / 2, 1px) * 0.1194)`,
                                                src: "https://framerusercontent.com/images/oHph7pEIkrVsccTOm9C3seF7MNQ.svg",
                                                srcSet: "https://framerusercontent.com/images/oHph7pEIkrVsccTOm9C3seF7MNQ.svg?scale-down-to=512 512w,https://framerusercontent.com/images/oHph7pEIkrVsccTOm9C3seF7MNQ.svg?scale-down-to=1024 1024w,https://framerusercontent.com/images/oHph7pEIkrVsccTOm9C3seF7MNQ.svg 1440w"
                                            },
                                            className: "framer-8czzsb",
                                            whileHover: Ze
                                        })
                                    }), e(f, {
                                        breakpoint: o,
                                        overrides: {
                                            hIWTqwvPm: {
                                                background: {
                                                    alt: "",
                                                    fit: "fill",
                                                    loading: s((n?.y || 0) + 0 + 10961 + 35 + 167 + 0 + 0 + -2.3336 + 0 + 414.9475),
                                                    pixelHeight: 810,
                                                    pixelWidth: 1440,
                                                    sizes: `calc(max(((${n?.width || "100vw"} - 40px) * 1.0519 - 10px) / 2, 1px) * 0.1474)`,
                                                    src: "https://framerusercontent.com/images/2WwosLxGuMmImwcwXT1LuOcrpo.svg",
                                                    srcSet: "https://framerusercontent.com/images/2WwosLxGuMmImwcwXT1LuOcrpo.svg?scale-down-to=512 512w,https://framerusercontent.com/images/2WwosLxGuMmImwcwXT1LuOcrpo.svg?scale-down-to=1024 1024w,https://framerusercontent.com/images/2WwosLxGuMmImwcwXT1LuOcrpo.svg 1440w"
                                                }
                                            },
                                            jUuLb2ZS_: {
                                                background: {
                                                    alt: "",
                                                    fit: "fill",
                                                    loading: s((n?.y || 0) + 0 + 8686 + 0 + 455.5 + 0 + 267.1677 + 0 + 28.5 + 0 + 328.9459),
                                                    pixelHeight: 810,
                                                    pixelWidth: 1440,
                                                    sizes: "83.6975px",
                                                    src: "https://framerusercontent.com/images/2WwosLxGuMmImwcwXT1LuOcrpo.svg",
                                                    srcSet: "https://framerusercontent.com/images/2WwosLxGuMmImwcwXT1LuOcrpo.svg?scale-down-to=512 512w,https://framerusercontent.com/images/2WwosLxGuMmImwcwXT1LuOcrpo.svg?scale-down-to=1024 1024w,https://framerusercontent.com/images/2WwosLxGuMmImwcwXT1LuOcrpo.svg 1440w"
                                                }
                                            }
                                        },
                                        children: e(g, {
                                            background: {
                                                alt: "",
                                                fit: "fill",
                                                loading: s((n?.y || 0) + 0 + 10498 + 35 + 972.5 + 0 + 0 + 101.3928 + 0 + 392.0033),
                                                pixelHeight: 810,
                                                pixelWidth: 1440,
                                                sizes: `calc(max(((${n?.width || "100vw"} - 40px) * 1.0294 - 10px) / 2, 1px) * 0.1194)`,
                                                src: "https://framerusercontent.com/images/2WwosLxGuMmImwcwXT1LuOcrpo.svg",
                                                srcSet: "https://framerusercontent.com/images/2WwosLxGuMmImwcwXT1LuOcrpo.svg?scale-down-to=512 512w,https://framerusercontent.com/images/2WwosLxGuMmImwcwXT1LuOcrpo.svg?scale-down-to=1024 1024w,https://framerusercontent.com/images/2WwosLxGuMmImwcwXT1LuOcrpo.svg 1440w"
                                            },
                                            className: "framer-1nru97z",
                                            whileHover: Ze
                                        })
                                    }), e(f, {
                                        breakpoint: o,
                                        overrides: {
                                            hIWTqwvPm: {
                                                background: {
                                                    alt: "",
                                                    fit: "fill",
                                                    loading: s((n?.y || 0) + 0 + 10961 + 35 + 167 + 0 + 0 + -2.3336 + 0 + 508.3922),
                                                    pixelHeight: 810,
                                                    pixelWidth: 1440,
                                                    sizes: `calc(max(((${n?.width || "100vw"} - 40px) * 1.0519 - 10px) / 2, 1px) * 0.1474)`,
                                                    src: "https://framerusercontent.com/images/M3WHwIRS6Al5QXBL0WEgDjmtLY.svg",
                                                    srcSet: "https://framerusercontent.com/images/M3WHwIRS6Al5QXBL0WEgDjmtLY.svg?scale-down-to=512 512w,https://framerusercontent.com/images/M3WHwIRS6Al5QXBL0WEgDjmtLY.svg?scale-down-to=1024 1024w,https://framerusercontent.com/images/M3WHwIRS6Al5QXBL0WEgDjmtLY.svg 1440w"
                                                }
                                            },
                                            jUuLb2ZS_: {
                                                background: {
                                                    alt: "",
                                                    fit: "fill",
                                                    loading: s((n?.y || 0) + 0 + 8686 + 0 + 455.5 + 0 + 267.1677 + 0 + 28.5 + 0 + 421.5531),
                                                    pixelHeight: 810,
                                                    pixelWidth: 1440,
                                                    sizes: "83.6975px",
                                                    src: "https://framerusercontent.com/images/M3WHwIRS6Al5QXBL0WEgDjmtLY.svg",
                                                    srcSet: "https://framerusercontent.com/images/M3WHwIRS6Al5QXBL0WEgDjmtLY.svg?scale-down-to=512 512w,https://framerusercontent.com/images/M3WHwIRS6Al5QXBL0WEgDjmtLY.svg?scale-down-to=1024 1024w,https://framerusercontent.com/images/M3WHwIRS6Al5QXBL0WEgDjmtLY.svg 1440w"
                                                }
                                            }
                                        },
                                        children: e(g, {
                                            background: {
                                                alt: "",
                                                fit: "fill",
                                                loading: s((n?.y || 0) + 0 + 10498 + 35 + 972.5 + 0 + 0 + 101.3928 + 0 + 501.5097),
                                                pixelHeight: 810,
                                                pixelWidth: 1440,
                                                sizes: `calc(max(((${n?.width || "100vw"} - 40px) * 1.0294 - 10px) / 2, 1px) * 0.1194)`,
                                                src: "https://framerusercontent.com/images/M3WHwIRS6Al5QXBL0WEgDjmtLY.svg",
                                                srcSet: "https://framerusercontent.com/images/M3WHwIRS6Al5QXBL0WEgDjmtLY.svg?scale-down-to=512 512w,https://framerusercontent.com/images/M3WHwIRS6Al5QXBL0WEgDjmtLY.svg?scale-down-to=1024 1024w,https://framerusercontent.com/images/M3WHwIRS6Al5QXBL0WEgDjmtLY.svg 1440w"
                                            },
                                            className: "framer-1h02pb2",
                                            whileHover: Ze
                                        })
                                    })]
                                }), t("div", {
                                    className: "framer-3xx0y",
                                    children: [t("div", {
                                        className: "framer-911bwy",
                                        children: [e(f, {
                                            breakpoint: o,
                                            overrides: {
                                                hIWTqwvPm: {
                                                    children: e(r, {
                                                        children: e("p", {
                                                            style: {
                                                                "--font-selector": "R0Y7T3BlbiBTYW5zLTgwMA==",
                                                                "--framer-font-family": '"Open Sans", "Open Sans Placeholder", sans-serif',
                                                                "--framer-font-size": "14px",
                                                                "--framer-font-weight": "800"
                                                            },
                                                            children: "Analytics Dashboard"
                                                        })
                                                    }),
                                                    verticalAlignment: "bottom"
                                                },
                                                jUuLb2ZS_: {
                                                    children: e(r, {
                                                        children: e("p", {
                                                            style: {
                                                                "--font-selector": "R0Y7T3BlbiBTYW5zLTgwMA==",
                                                                "--framer-font-family": '"Open Sans", "Open Sans Placeholder", sans-serif',
                                                                "--framer-font-size": "12px",
                                                                "--framer-font-weight": "800"
                                                            },
                                                            children: "Analytics Dashboard"
                                                        })
                                                    }),
                                                    verticalAlignment: "bottom"
                                                }
                                            },
                                            children: e(i, {
                                                __fromCanvasComponent: !0,
                                                children: e(r, {
                                                    children: e("p", {
                                                        style: {
                                                            "--font-selector": "R0Y7T3BlbiBTYW5zLTgwMA==",
                                                            "--framer-font-family": '"Open Sans", "Open Sans Placeholder", sans-serif',
                                                            "--framer-font-size": "18px",
                                                            "--framer-font-weight": "800"
                                                        },
                                                        children: "Analytics Dashboard"
                                                    })
                                                }),
                                                className: "framer-ansm8o",
                                                fonts: ["GF;Open Sans-800"],
                                                verticalAlignment: "center",
                                                withExternalLayout: !0
                                            })
                                        }), e(f, {
                                            breakpoint: o,
                                            overrides: {
                                                hIWTqwvPm: {
                                                    children: e(r, {
                                                        children: e("p", {
                                                            style: {
                                                                "--font-selector": "R0Y7T3BlbiBTYW5zLTUwMA==",
                                                                "--framer-font-family": '"Open Sans", "Open Sans Placeholder", sans-serif',
                                                                "--framer-font-size": "13px",
                                                                "--framer-font-weight": "500"
                                                            },
                                                            children: "Track engagement, conversions, and styling performance \u2014 and optimize in real time."
                                                        })
                                                    })
                                                },
                                                jUuLb2ZS_: {
                                                    children: e(r, {
                                                        children: e("p", {
                                                            style: {
                                                                "--font-selector": "R0Y7T3BlbiBTYW5zLTUwMA==",
                                                                "--framer-font-family": '"Open Sans", "Open Sans Placeholder", sans-serif',
                                                                "--framer-font-size": "10px",
                                                                "--framer-font-weight": "500"
                                                            },
                                                            children: "Track engagement, conversions, and styling performance \u2014 and optimize in real time."
                                                        })
                                                    })
                                                }
                                            },
                                            children: e(i, {
                                                __fromCanvasComponent: !0,
                                                children: e(r, {
                                                    children: e("p", {
                                                        style: {
                                                            "--font-selector": "R0Y7T3BlbiBTYW5zLTUwMA==",
                                                            "--framer-font-family": '"Open Sans", "Open Sans Placeholder", sans-serif',
                                                            "--framer-font-weight": "500"
                                                        },
                                                        children: "Track engagement, conversions, and styling performance \u2014 and optimize in real time."
                                                    })
                                                }),
                                                className: "framer-1kbmr15",
                                                fonts: ["GF;Open Sans-500"],
                                                verticalAlignment: "center",
                                                withExternalLayout: !0
                                            })
                                        })]
                                    }), t("div", {
                                        className: "framer-30m72b",
                                        children: [e(f, {
                                            breakpoint: o,
                                            overrides: {
                                                hIWTqwvPm: {
                                                    children: e(r, {
                                                        children: e("p", {
                                                            style: {
                                                                "--font-selector": "R0Y7T3BlbiBTYW5zLTgwMA==",
                                                                "--framer-font-family": '"Open Sans", "Open Sans Placeholder", sans-serif',
                                                                "--framer-font-size": "14px",
                                                                "--framer-font-weight": "800"
                                                            },
                                                            children: "AI-Powered Personalization at Scale"
                                                        })
                                                    }),
                                                    verticalAlignment: "bottom"
                                                },
                                                jUuLb2ZS_: {
                                                    children: e(r, {
                                                        children: e("p", {
                                                            style: {
                                                                "--font-selector": "R0Y7T3BlbiBTYW5zLTgwMA==",
                                                                "--framer-font-family": '"Open Sans", "Open Sans Placeholder", sans-serif',
                                                                "--framer-font-size": "12px",
                                                                "--framer-font-weight": "800"
                                                            },
                                                            children: "AI-Powered Personalization at Scale"
                                                        })
                                                    }),
                                                    verticalAlignment: "bottom"
                                                }
                                            },
                                            children: e(i, {
                                                __fromCanvasComponent: !0,
                                                children: e(r, {
                                                    children: e("p", {
                                                        style: {
                                                            "--font-selector": "R0Y7T3BlbiBTYW5zLTgwMA==",
                                                            "--framer-font-family": '"Open Sans", "Open Sans Placeholder", sans-serif',
                                                            "--framer-font-size": "18px",
                                                            "--framer-font-weight": "800"
                                                        },
                                                        children: "AI-Powered Personalization at Scale"
                                                    })
                                                }),
                                                className: "framer-1o844a5",
                                                fonts: ["GF;Open Sans-800"],
                                                verticalAlignment: "center",
                                                withExternalLayout: !0
                                            })
                                        }), e(f, {
                                            breakpoint: o,
                                            overrides: {
                                                hIWTqwvPm: {
                                                    children: e(r, {
                                                        children: e("p", {
                                                            style: {
                                                                "--font-selector": "R0Y7T3BlbiBTYW5zLTUwMA==",
                                                                "--framer-font-family": '"Open Sans", "Open Sans Placeholder", sans-serif',
                                                                "--framer-font-size": "13px",
                                                                "--framer-font-weight": "500"
                                                            },
                                                            children: "Tailor every interaction based on your customer\u2019s body type, style, and behavior \u2014 no manual tagging needed."
                                                        })
                                                    })
                                                },
                                                jUuLb2ZS_: {
                                                    children: e(r, {
                                                        children: e("p", {
                                                            style: {
                                                                "--font-selector": "R0Y7T3BlbiBTYW5zLTUwMA==",
                                                                "--framer-font-family": '"Open Sans", "Open Sans Placeholder", sans-serif',
                                                                "--framer-font-size": "10px",
                                                                "--framer-font-weight": "500"
                                                            },
                                                            children: "Tailor every interaction based on your customer\u2019s body type, style, and behavior \u2014 no manual tagging needed."
                                                        })
                                                    })
                                                }
                                            },
                                            children: e(i, {
                                                __fromCanvasComponent: !0,
                                                children: e(r, {
                                                    children: e("p", {
                                                        style: {
                                                            "--font-selector": "R0Y7T3BlbiBTYW5zLTUwMA==",
                                                            "--framer-font-family": '"Open Sans", "Open Sans Placeholder", sans-serif',
                                                            "--framer-font-weight": "500"
                                                        },
                                                        children: "Tailor every interaction based on your customer\u2019s body type, style, and behavior \u2014 no manual tagging needed."
                                                    })
                                                }),
                                                className: "framer-1oenfuu",
                                                fonts: ["GF;Open Sans-500"],
                                                verticalAlignment: "center",
                                                withExternalLayout: !0
                                            })
                                        })]
                                    }), t("div", {
                                        className: "framer-18zon55",
                                        children: [e(f, {
                                            breakpoint: o,
                                            overrides: {
                                                hIWTqwvPm: {
                                                    children: e(r, {
                                                        children: e("p", {
                                                            style: {
                                                                "--font-selector": "R0Y7T3BlbiBTYW5zLTgwMA==",
                                                                "--framer-font-family": '"Open Sans", "Open Sans Placeholder", sans-serif',
                                                                "--framer-font-size": "14px",
                                                                "--framer-font-weight": "800"
                                                            },
                                                            children: "Reduce Return Rates"
                                                        })
                                                    }),
                                                    verticalAlignment: "bottom"
                                                },
                                                jUuLb2ZS_: {
                                                    children: e(r, {
                                                        children: e("p", {
                                                            style: {
                                                                "--font-selector": "R0Y7T3BlbiBTYW5zLTgwMA==",
                                                                "--framer-font-family": '"Open Sans", "Open Sans Placeholder", sans-serif',
                                                                "--framer-font-size": "12px",
                                                                "--framer-font-weight": "800"
                                                            },
                                                            children: "Reduce Return Rates"
                                                        })
                                                    }),
                                                    verticalAlignment: "bottom"
                                                }
                                            },
                                            children: e(i, {
                                                __fromCanvasComponent: !0,
                                                children: e(r, {
                                                    children: e("p", {
                                                        style: {
                                                            "--font-selector": "R0Y7T3BlbiBTYW5zLTgwMA==",
                                                            "--framer-font-family": '"Open Sans", "Open Sans Placeholder", sans-serif',
                                                            "--framer-font-size": "18px",
                                                            "--framer-font-weight": "800"
                                                        },
                                                        children: "Reduce Return Rates"
                                                    })
                                                }),
                                                className: "framer-hqeet7",
                                                fonts: ["GF;Open Sans-800"],
                                                verticalAlignment: "center",
                                                withExternalLayout: !0
                                            })
                                        }), e(f, {
                                            breakpoint: o,
                                            overrides: {
                                                hIWTqwvPm: {
                                                    children: e(r, {
                                                        children: e("p", {
                                                            style: {
                                                                "--font-selector": "R0Y7T3BlbiBTYW5zLTUwMA==",
                                                                "--framer-font-family": '"Open Sans", "Open Sans Placeholder", sans-serif',
                                                                "--framer-font-size": "13px",
                                                                "--framer-font-weight": "500"
                                                            },
                                                            children: "Customers try on before they buy and see complete outfits that fit \u2014 increasing purchase confidence and reducing returns"
                                                        })
                                                    })
                                                },
                                                jUuLb2ZS_: {
                                                    children: e(r, {
                                                        children: e("p", {
                                                            style: {
                                                                "--font-selector": "R0Y7T3BlbiBTYW5zLTUwMA==",
                                                                "--framer-font-family": '"Open Sans", "Open Sans Placeholder", sans-serif',
                                                                "--framer-font-size": "10px",
                                                                "--framer-font-weight": "500"
                                                            },
                                                            children: "Customers try on before they buy and see complete outfits that fit \u2014 increasing purchase confidence and reducing returns"
                                                        })
                                                    })
                                                }
                                            },
                                            children: e(i, {
                                                __fromCanvasComponent: !0,
                                                children: e(r, {
                                                    children: e("p", {
                                                        style: {
                                                            "--font-selector": "R0Y7T3BlbiBTYW5zLTUwMA==",
                                                            "--framer-font-family": '"Open Sans", "Open Sans Placeholder", sans-serif',
                                                            "--framer-font-weight": "500"
                                                        },
                                                        children: "Customers try on before they buy and see complete outfits that fit \u2014 increasing purchase confidence and reducing returns"
                                                    })
                                                }),
                                                className: "framer-1qpv3jm",
                                                fonts: ["GF;Open Sans-500"],
                                                verticalAlignment: "center",
                                                withExternalLayout: !0
                                            })
                                        })]
                                    }), t("div", {
                                        className: "framer-18ckclz",
                                        children: [e(f, {
                                            breakpoint: o,
                                            overrides: {
                                                hIWTqwvPm: {
                                                    children: e(r, {
                                                        children: e("p", {
                                                            style: {
                                                                "--font-selector": "R0Y7T3BlbiBTYW5zLTgwMA==",
                                                                "--framer-font-family": '"Open Sans", "Open Sans Placeholder", sans-serif',
                                                                "--framer-font-size": "14px",
                                                                "--framer-font-weight": "800"
                                                            },
                                                            children: "Boost Conversion & Engagement"
                                                        })
                                                    }),
                                                    verticalAlignment: "bottom"
                                                },
                                                jUuLb2ZS_: {
                                                    children: e(r, {
                                                        children: e("p", {
                                                            style: {
                                                                "--font-selector": "R0Y7T3BlbiBTYW5zLTgwMA==",
                                                                "--framer-font-family": '"Open Sans", "Open Sans Placeholder", sans-serif',
                                                                "--framer-font-size": "12px",
                                                                "--framer-font-weight": "800"
                                                            },
                                                            children: "Boost Conversion & Engagement"
                                                        })
                                                    }),
                                                    verticalAlignment: "bottom"
                                                }
                                            },
                                            children: e(i, {
                                                __fromCanvasComponent: !0,
                                                children: e(r, {
                                                    children: e("p", {
                                                        style: {
                                                            "--font-selector": "R0Y7T3BlbiBTYW5zLTgwMA==",
                                                            "--framer-font-family": '"Open Sans", "Open Sans Placeholder", sans-serif',
                                                            "--framer-font-size": "18px",
                                                            "--framer-font-weight": "800"
                                                        },
                                                        children: "Boost Conversion & Engagement"
                                                    })
                                                }),
                                                className: "framer-1h3490z",
                                                fonts: ["GF;Open Sans-800"],
                                                verticalAlignment: "center",
                                                withExternalLayout: !0
                                            })
                                        }), e(f, {
                                            breakpoint: o,
                                            overrides: {
                                                hIWTqwvPm: {
                                                    children: e(r, {
                                                        children: e("p", {
                                                            style: {
                                                                "--font-selector": "R0Y7T3BlbiBTYW5zLTUwMA==",
                                                                "--framer-font-family": '"Open Sans", "Open Sans Placeholder", sans-serif',
                                                                "--framer-font-size": "13px",
                                                                "--framer-font-weight": "500"
                                                            },
                                                            children: "Make your store feel curated for each visitor. More time spent, more cart adds, more purchases."
                                                        })
                                                    })
                                                },
                                                jUuLb2ZS_: {
                                                    children: e(r, {
                                                        children: e("p", {
                                                            style: {
                                                                "--font-selector": "R0Y7T3BlbiBTYW5zLTUwMA==",
                                                                "--framer-font-family": '"Open Sans", "Open Sans Placeholder", sans-serif',
                                                                "--framer-font-size": "10px",
                                                                "--framer-font-weight": "500"
                                                            },
                                                            children: "Make your store feel curated for each visitor. More time spent, more cart adds, more purchases."
                                                        })
                                                    })
                                                }
                                            },
                                            children: e(i, {
                                                __fromCanvasComponent: !0,
                                                children: e(r, {
                                                    children: e("p", {
                                                        style: {
                                                            "--font-selector": "R0Y7T3BlbiBTYW5zLTUwMA==",
                                                            "--framer-font-family": '"Open Sans", "Open Sans Placeholder", sans-serif',
                                                            "--framer-font-weight": "500"
                                                        },
                                                        children: "Make your store feel curated for each visitor. More time spent, more cart adds, more purchases."
                                                    })
                                                }),
                                                className: "framer-1l6y5qk",
                                                fonts: ["GF;Open Sans-500"],
                                                verticalAlignment: "center",
                                                withExternalLayout: !0
                                            })
                                        })]
                                    }), t("div", {
                                        className: "framer-1qrkf86",
                                        children: [e(f, {
                                            breakpoint: o,
                                            overrides: {
                                                hIWTqwvPm: {
                                                    children: e(r, {
                                                        children: e("p", {
                                                            style: {
                                                                "--font-selector": "R0Y7T3BlbiBTYW5zLTgwMA==",
                                                                "--framer-font-family": '"Open Sans", "Open Sans Placeholder", sans-serif',
                                                                "--framer-font-size": "14px",
                                                                "--framer-font-weight": "800"
                                                            },
                                                            children: "Plug & Play Integration"
                                                        })
                                                    }),
                                                    verticalAlignment: "bottom"
                                                },
                                                jUuLb2ZS_: {
                                                    children: e(r, {
                                                        children: e("p", {
                                                            style: {
                                                                "--font-selector": "R0Y7T3BlbiBTYW5zLTgwMA==",
                                                                "--framer-font-family": '"Open Sans", "Open Sans Placeholder", sans-serif',
                                                                "--framer-font-size": "12px",
                                                                "--framer-font-weight": "800"
                                                            },
                                                            children: "Plug & Play Integration"
                                                        })
                                                    }),
                                                    verticalAlignment: "bottom"
                                                }
                                            },
                                            children: e(i, {
                                                __fromCanvasComponent: !0,
                                                children: e(r, {
                                                    children: e("p", {
                                                        style: {
                                                            "--font-selector": "R0Y7T3BlbiBTYW5zLTgwMA==",
                                                            "--framer-font-family": '"Open Sans", "Open Sans Placeholder", sans-serif',
                                                            "--framer-font-size": "18px",
                                                            "--framer-font-weight": "800"
                                                        },
                                                        children: "Plug & Play Integration"
                                                    })
                                                }),
                                                className: "framer-p4i1z1",
                                                fonts: ["GF;Open Sans-800"],
                                                verticalAlignment: "center",
                                                withExternalLayout: !0
                                            })
                                        }), e(f, {
                                            breakpoint: o,
                                            overrides: {
                                                hIWTqwvPm: {
                                                    children: e(r, {
                                                        children: e("p", {
                                                            style: {
                                                                "--font-selector": "R0Y7T3BlbiBTYW5zLTUwMA==",
                                                                "--framer-font-family": '"Open Sans", "Open Sans Placeholder", sans-serif',
                                                                "--framer-font-size": "13px",
                                                                "--framer-font-weight": "500"
                                                            },
                                                            children: "Seamlessly integrate with your existing e-commerce stack."
                                                        })
                                                    })
                                                },
                                                jUuLb2ZS_: {
                                                    children: e(r, {
                                                        children: e("p", {
                                                            style: {
                                                                "--font-selector": "R0Y7T3BlbiBTYW5zLTUwMA==",
                                                                "--framer-font-family": '"Open Sans", "Open Sans Placeholder", sans-serif',
                                                                "--framer-font-size": "10px",
                                                                "--framer-font-weight": "500"
                                                            },
                                                            children: "Seamlessly integrate with your existing e-commerce stack."
                                                        })
                                                    })
                                                }
                                            },
                                            children: e(i, {
                                                __fromCanvasComponent: !0,
                                                children: e(r, {
                                                    children: e("p", {
                                                        style: {
                                                            "--font-selector": "R0Y7T3BlbiBTYW5zLTUwMA==",
                                                            "--framer-font-family": '"Open Sans", "Open Sans Placeholder", sans-serif',
                                                            "--framer-font-weight": "500"
                                                        },
                                                        children: "Seamlessly integrate with your existing e-commerce stack."
                                                    })
                                                }),
                                                className: "framer-2sjz6f",
                                                fonts: ["GF;Open Sans-500"],
                                                verticalAlignment: "center",
                                                withExternalLayout: !0
                                            })
                                        })]
                                    })]
                                })]
                            })
                        })]
                    })]
                }), t("div", {
                    className: "framer-1k6c40s",
                    children: [t(z, {
                        __framer__spring: {
                            bounce: .2,
                            damping: 60,
                            delay: 0,
                            duration: 1,
                            durationBasedSpring: !0,
                            ease: [.44, 0, .56, 1],
                            mass: 1,
                            stiffness: 500,
                            type: "spring"
                        },
                        __framer__styleTransformEffectEnabled: !0,
                        __framer__transformTargets: [{
                            target: {
                                opacity: .5,
                                rotate: 0,
                                rotateX: 0,
                                rotateY: 0,
                                scale: .5,
                                skewX: 0,
                                skewY: 0,
                                x: 0,
                                y: 67
                            }
                        }, {
                            ref: gr,
                            target: {
                                opacity: 1,
                                rotate: 0,
                                rotateX: 0,
                                rotateY: 0,
                                scale: 1,
                                skewX: 0,
                                skewY: 0,
                                x: 0,
                                y: 0
                            }
                        }],
                        __framer__transformTrigger: "onScrollTarget",
                        __framer__transformViewportThreshold: 1,
                        __perspectiveFX: !1,
                        __targetOpacity: 1,
                        className: "framer-qgslc3",
                        id: En,
                        ref: gr,
                        children: [e(f, {
                            breakpoint: o,
                            overrides: {
                                hIWTqwvPm: {
                                    children: t(r, {
                                        children: [e("p", {
                                            style: {
                                                "--font-selector": "R0Y7QmV2YW4tcmVndWxhcg==",
                                                "--framer-font-family": '"Bevan", "Bevan Placeholder", serif',
                                                "--framer-font-size": "34px"
                                            },
                                            children: "BUILD FOR FASHION TEAMS"
                                        }), e("p", {
                                            style: {
                                                "--font-selector": "R0Y7T3BlbiBTYW5zLTUwMA==",
                                                "--framer-font-family": '"Open Sans", "Open Sans Placeholder", sans-serif',
                                                "--framer-font-size": "10px",
                                                "--framer-font-weight": "500"
                                            },
                                            children: e("br", {
                                                className: "trailing-break"
                                            })
                                        })]
                                    })
                                },
                                jUuLb2ZS_: {
                                    children: t(r, {
                                        children: [e("p", {
                                            style: {
                                                "--font-selector": "R0Y7QmV2YW4tcmVndWxhcg==",
                                                "--framer-font-family": '"Bevan", "Bevan Placeholder", serif',
                                                "--framer-font-size": "19px"
                                            },
                                            children: "BUILD FOR FASHION TEAMS"
                                        }), e("p", {
                                            style: {
                                                "--font-selector": "R0Y7T3BlbiBTYW5zLTUwMA==",
                                                "--framer-font-family": '"Open Sans", "Open Sans Placeholder", sans-serif',
                                                "--framer-font-size": "10px",
                                                "--framer-font-weight": "500"
                                            },
                                            children: e("br", {
                                                className: "trailing-break"
                                            })
                                        })]
                                    })
                                }
                            },
                            children: e(i, {
                                __fromCanvasComponent: !0,
                                children: t(r, {
                                    children: [e("p", {
                                        style: {
                                            "--font-selector": "R0Y7QmV2YW4tcmVndWxhcg==",
                                            "--framer-font-family": '"Bevan", "Bevan Placeholder", serif',
                                            "--framer-font-size": "38px"
                                        },
                                        children: "BUILD FOR FASHION TEAMS"
                                    }), e("p", {
                                        style: {
                                            "--font-selector": "R0Y7T3BlbiBTYW5zLTUwMA==",
                                            "--framer-font-family": '"Open Sans", "Open Sans Placeholder", sans-serif',
                                            "--framer-font-size": "10px",
                                            "--framer-font-weight": "500"
                                        },
                                        children: e("br", {
                                            className: "trailing-break"
                                        })
                                    })]
                                }),
                                className: "framer-5urhml",
                                fonts: ["GF;Bevan-regular", "GF;Open Sans-500"],
                                verticalAlignment: "top",
                                withExternalLayout: !0
                            })
                        }), e(f, {
                            breakpoint: o,
                            overrides: {
                                hIWTqwvPm: {
                                    children: e(r, {
                                        children: e("p", {
                                            style: {
                                                "--font-selector": "R0Y7QmV2YW4tcmVndWxhcg==",
                                                "--framer-font-family": '"Bevan", "Bevan Placeholder", serif',
                                                "--framer-font-size": "20px"
                                            },
                                            children: "Designed to deliver value across your entire organisation!"
                                        })
                                    })
                                },
                                jUuLb2ZS_: {
                                    children: e(r, {
                                        children: e("p", {
                                            style: {
                                                "--font-selector": "R0Y7QmV2YW4tcmVndWxhcg==",
                                                "--framer-font-family": '"Bevan", "Bevan Placeholder", serif',
                                                "--framer-font-size": "10px"
                                            },
                                            children: "Designed to deliver value across your entire organisation!"
                                        })
                                    })
                                }
                            },
                            children: e(i, {
                                __fromCanvasComponent: !0,
                                children: e(r, {
                                    children: e("p", {
                                        style: {
                                            "--font-selector": "R0Y7QmV2YW4tcmVndWxhcg==",
                                            "--framer-font-family": '"Bevan", "Bevan Placeholder", serif',
                                            "--framer-font-size": "25px"
                                        },
                                        children: "Designed to deliver value across your entire organisation!"
                                    })
                                }),
                                className: "framer-p0j319",
                                fonts: ["GF;Bevan-regular"],
                                verticalAlignment: "top",
                                withExternalLayout: !0
                            })
                        })]
                    }), t(z, {
                        __framer__spring: {
                            bounce: .2,
                            damping: 60,
                            delay: 0,
                            duration: 5,
                            durationBasedSpring: !0,
                            ease: [.44, 0, .56, 1],
                            mass: 1,
                            stiffness: 500,
                            type: "spring"
                        },
                        __framer__styleTransformEffectEnabled: !0,
                        __framer__transformTargets: [{
                            target: {
                                opacity: .5,
                                rotate: 0,
                                rotateX: 0,
                                rotateY: 0,
                                scale: .1,
                                skewX: 0,
                                skewY: 0,
                                x: 0,
                                y: 100
                            }
                        }, {
                            ref: gr,
                            target: {
                                opacity: 1,
                                rotate: 0,
                                rotateX: 0,
                                rotateY: 0,
                                scale: 1,
                                skewX: 0,
                                skewY: 0,
                                x: 0,
                                y: 0
                            }
                        }],
                        __framer__transformTrigger: "onScrollTarget",
                        __framer__transformViewportThreshold: 1,
                        __perspectiveFX: !1,
                        __targetOpacity: 1,
                        className: "framer-d5kh8",
                        children: [t(p.div, {
                            className: "framer-14z6cch",
                            whileHover: S,
                            children: [e("div", {
                                className: "framer-1y7shll",
                                children: e(f, {
                                    breakpoint: o,
                                    overrides: {
                                        hIWTqwvPm: {
                                            background: {
                                                alt: "",
                                                fit: "fill",
                                                loading: s((n?.y || 0) + 0 + 11790 + 0 + 197.9954 + 60.9941 + 0 + 0 + 0 + 5.006),
                                                pixelHeight: 810,
                                                pixelWidth: 1440,
                                                sizes: "329px",
                                                src: "https://framerusercontent.com/images/xHB11mGghIy0xU3VOIbHnfnM5A.svg",
                                                srcSet: "https://framerusercontent.com/images/xHB11mGghIy0xU3VOIbHnfnM5A.svg?scale-down-to=512 512w,https://framerusercontent.com/images/xHB11mGghIy0xU3VOIbHnfnM5A.svg?scale-down-to=1024 1024w,https://framerusercontent.com/images/xHB11mGghIy0xU3VOIbHnfnM5A.svg 1440w"
                                            }
                                        },
                                        jUuLb2ZS_: {
                                            background: {
                                                alt: "",
                                                fit: "fill",
                                                loading: s((n?.y || 0) + 0 + 9652 + 0 + 139.8304 + 0 + 30.3513 + 0 + 0 + 0 + -2.4534),
                                                pixelHeight: 810,
                                                pixelWidth: 1440,
                                                sizes: `calc((${n?.width || "100vw"} - 40px) * 1.2286)`,
                                                src: "https://framerusercontent.com/images/xHB11mGghIy0xU3VOIbHnfnM5A.svg",
                                                srcSet: "https://framerusercontent.com/images/xHB11mGghIy0xU3VOIbHnfnM5A.svg?scale-down-to=512 512w,https://framerusercontent.com/images/xHB11mGghIy0xU3VOIbHnfnM5A.svg?scale-down-to=1024 1024w,https://framerusercontent.com/images/xHB11mGghIy0xU3VOIbHnfnM5A.svg 1440w"
                                            }
                                        }
                                    },
                                    children: e(g, {
                                        background: {
                                            alt: "",
                                            fit: "fill",
                                            loading: s((n?.y || 0) + 0 + 11596 + 0 + 217.968 + 63.516 + 0 + 0 + 0 + .9979),
                                            pixelHeight: 810,
                                            pixelWidth: 1440,
                                            sizes: "518px",
                                            src: "https://framerusercontent.com/images/xHB11mGghIy0xU3VOIbHnfnM5A.svg",
                                            srcSet: "https://framerusercontent.com/images/xHB11mGghIy0xU3VOIbHnfnM5A.svg?scale-down-to=512 512w,https://framerusercontent.com/images/xHB11mGghIy0xU3VOIbHnfnM5A.svg?scale-down-to=1024 1024w,https://framerusercontent.com/images/xHB11mGghIy0xU3VOIbHnfnM5A.svg 1440w"
                                        },
                                        className: "framer-psij4w"
                                    })
                                })
                            }), t("div", {
                                className: "framer-1d6noty",
                                children: [e(f, {
                                    breakpoint: o,
                                    overrides: {
                                        hIWTqwvPm: {
                                            children: e(r, {
                                                children: e("p", {
                                                    style: {
                                                        "--font-selector": "R0Y7QmV2YW4tcmVndWxhcg==",
                                                        "--framer-font-family": '"Bevan", "Bevan Placeholder", serif',
                                                        "--framer-font-size": "15px",
                                                        "--framer-text-alignment": "center",
                                                        "--framer-text-color": "rgb(255, 247, 247)"
                                                    },
                                                    children: "Merch Teams"
                                                })
                                            })
                                        },
                                        jUuLb2ZS_: {
                                            children: e(r, {
                                                children: e("p", {
                                                    style: {
                                                        "--font-selector": "R0Y7QmV2YW4tcmVndWxhcg==",
                                                        "--framer-font-family": '"Bevan", "Bevan Placeholder", serif',
                                                        "--framer-font-size": "15px",
                                                        "--framer-text-alignment": "center",
                                                        "--framer-text-color": "rgb(255, 247, 247)"
                                                    },
                                                    children: "Merch Teams"
                                                })
                                            })
                                        }
                                    },
                                    children: e(i, {
                                        __fromCanvasComponent: !0,
                                        children: e(r, {
                                            children: e("p", {
                                                style: {
                                                    "--font-selector": "R0Y7QmV2YW4tcmVndWxhcg==",
                                                    "--framer-font-family": '"Bevan", "Bevan Placeholder", serif',
                                                    "--framer-font-size": "22px",
                                                    "--framer-text-alignment": "center",
                                                    "--framer-text-color": "rgb(255, 247, 247)"
                                                },
                                                children: "Merch Teams"
                                            })
                                        }),
                                        className: "framer-1ap39fd",
                                        fonts: ["GF;Bevan-regular"],
                                        verticalAlignment: "top",
                                        withExternalLayout: !0
                                    })
                                }), e(f, {
                                    breakpoint: o,
                                    overrides: {
                                        hIWTqwvPm: {
                                            children: e(r, {
                                                children: e("p", {
                                                    style: {
                                                        "--font-selector": "R0Y7T3BlbiBTYW5zLXJlZ3VsYXI=",
                                                        "--framer-font-family": '"Open Sans", "Open Sans Placeholder", sans-serif',
                                                        "--framer-font-size": "10px",
                                                        "--framer-text-alignment": "center",
                                                        "--framer-text-color": "rgb(255, 247, 247)"
                                                    },
                                                    children: "Discover what customers want styled \u2014 not just what sells."
                                                })
                                            })
                                        },
                                        jUuLb2ZS_: {
                                            children: e(r, {
                                                children: e("p", {
                                                    style: {
                                                        "--font-selector": "R0Y7T3BlbiBTYW5zLXJlZ3VsYXI=",
                                                        "--framer-font-family": '"Open Sans", "Open Sans Placeholder", sans-serif',
                                                        "--framer-font-size": "10px",
                                                        "--framer-text-alignment": "center",
                                                        "--framer-text-color": "rgb(255, 247, 247)"
                                                    },
                                                    children: "Discover what customers want styled \u2014 not just what sells."
                                                })
                                            })
                                        }
                                    },
                                    children: e(i, {
                                        __fromCanvasComponent: !0,
                                        children: e(r, {
                                            children: e("p", {
                                                style: {
                                                    "--font-selector": "R0Y7T3BlbiBTYW5zLXJlZ3VsYXI=",
                                                    "--framer-font-family": '"Open Sans", "Open Sans Placeholder", sans-serif',
                                                    "--framer-text-alignment": "center",
                                                    "--framer-text-color": "rgb(255, 247, 247)"
                                                },
                                                children: "Discover what customers want styled \u2014 not just what sells."
                                            })
                                        }),
                                        className: "framer-elgbdp",
                                        fonts: ["GF;Open Sans-regular"],
                                        verticalAlignment: "top",
                                        withExternalLayout: !0
                                    })
                                })]
                            })]
                        }), t(p.div, {
                            className: "framer-yjogl3",
                            whileHover: S,
                            children: [e("div", {
                                className: "framer-1jf833m",
                                children: e(f, {
                                    breakpoint: o,
                                    overrides: {
                                        hIWTqwvPm: {
                                            background: {
                                                alt: "",
                                                fit: "fill",
                                                loading: s((n?.y || 0) + 0 + 11790 + 0 + 197.9954 + 60.9941 + 0 + 0 + 0 + .006),
                                                pixelHeight: 810,
                                                pixelWidth: 1440,
                                                sizes: "192px",
                                                src: "https://framerusercontent.com/images/rJQ7EnJSAUUSVDB5KEBUZER34A.svg",
                                                srcSet: "https://framerusercontent.com/images/rJQ7EnJSAUUSVDB5KEBUZER34A.svg?scale-down-to=512 512w,https://framerusercontent.com/images/rJQ7EnJSAUUSVDB5KEBUZER34A.svg?scale-down-to=1024 1024w,https://framerusercontent.com/images/rJQ7EnJSAUUSVDB5KEBUZER34A.svg 1440w"
                                            }
                                        },
                                        jUuLb2ZS_: {
                                            background: {
                                                alt: "",
                                                fit: "fill",
                                                loading: s((n?.y || 0) + 0 + 9652 + 0 + 139.8304 + 0 + 350.3129 + 0 + 0 + 0 + -7.9534),
                                                pixelHeight: 810,
                                                pixelWidth: 1440,
                                                sizes: `calc((${n?.width || "100vw"} - 40px) * 1.2086)`,
                                                src: "https://framerusercontent.com/images/rJQ7EnJSAUUSVDB5KEBUZER34A.svg",
                                                srcSet: "https://framerusercontent.com/images/rJQ7EnJSAUUSVDB5KEBUZER34A.svg?scale-down-to=512 512w,https://framerusercontent.com/images/rJQ7EnJSAUUSVDB5KEBUZER34A.svg?scale-down-to=1024 1024w,https://framerusercontent.com/images/rJQ7EnJSAUUSVDB5KEBUZER34A.svg 1440w"
                                            }
                                        }
                                    },
                                    children: e(g, {
                                        background: {
                                            alt: "",
                                            fit: "fill",
                                            loading: s((n?.y || 0) + 0 + 11596 + 0 + 217.968 + 63.516 + 0 + 0 + 0 + -11.0021),
                                            pixelHeight: 810,
                                            pixelWidth: 1440,
                                            sizes: "364px",
                                            src: "https://framerusercontent.com/images/rJQ7EnJSAUUSVDB5KEBUZER34A.svg",
                                            srcSet: "https://framerusercontent.com/images/rJQ7EnJSAUUSVDB5KEBUZER34A.svg?scale-down-to=512 512w,https://framerusercontent.com/images/rJQ7EnJSAUUSVDB5KEBUZER34A.svg?scale-down-to=1024 1024w,https://framerusercontent.com/images/rJQ7EnJSAUUSVDB5KEBUZER34A.svg 1440w"
                                        },
                                        className: "framer-wl3smy"
                                    })
                                })
                            }), t("div", {
                                className: "framer-1fff2ar",
                                children: [e(f, {
                                    breakpoint: o,
                                    overrides: {
                                        hIWTqwvPm: {
                                            children: e(r, {
                                                children: e("p", {
                                                    style: {
                                                        "--font-selector": "R0Y7QmV2YW4tcmVndWxhcg==",
                                                        "--framer-font-family": '"Bevan", "Bevan Placeholder", serif',
                                                        "--framer-font-size": "15px",
                                                        "--framer-text-alignment": "center",
                                                        "--framer-text-color": "rgb(255, 247, 247)"
                                                    },
                                                    children: "E-Commerce Teams"
                                                })
                                            })
                                        },
                                        jUuLb2ZS_: {
                                            children: e(r, {
                                                children: e("p", {
                                                    style: {
                                                        "--font-selector": "R0Y7QmV2YW4tcmVndWxhcg==",
                                                        "--framer-font-family": '"Bevan", "Bevan Placeholder", serif',
                                                        "--framer-font-size": "15px",
                                                        "--framer-text-alignment": "center",
                                                        "--framer-text-color": "rgb(255, 247, 247)"
                                                    },
                                                    children: "E-Commerce Teams"
                                                })
                                            })
                                        }
                                    },
                                    children: e(i, {
                                        __fromCanvasComponent: !0,
                                        children: e(r, {
                                            children: e("p", {
                                                style: {
                                                    "--font-selector": "R0Y7QmV2YW4tcmVndWxhcg==",
                                                    "--framer-font-family": '"Bevan", "Bevan Placeholder", serif',
                                                    "--framer-font-size": "22px",
                                                    "--framer-text-alignment": "center",
                                                    "--framer-text-color": "rgb(255, 247, 247)"
                                                },
                                                children: "E-Commerce Teams"
                                            })
                                        }),
                                        className: "framer-9gmle2",
                                        fonts: ["GF;Bevan-regular"],
                                        verticalAlignment: "top",
                                        withExternalLayout: !0
                                    })
                                }), e(f, {
                                    breakpoint: o,
                                    overrides: {
                                        hIWTqwvPm: {
                                            children: e(r, {
                                                children: e("p", {
                                                    style: {
                                                        "--font-selector": "R0Y7T3BlbiBTYW5zLXJlZ3VsYXI=",
                                                        "--framer-font-family": '"Open Sans", "Open Sans Placeholder", sans-serif',
                                                        "--framer-font-size": "10px",
                                                        "--framer-text-alignment": "center",
                                                        "--framer-text-color": "rgb(255, 247, 247)"
                                                    },
                                                    children: "Turn static catalogs into dynamic outfit journeys that convert and monitor performance with real-time dashboards."
                                                })
                                            })
                                        },
                                        jUuLb2ZS_: {
                                            children: e(r, {
                                                children: e("p", {
                                                    style: {
                                                        "--font-selector": "R0Y7T3BlbiBTYW5zLXJlZ3VsYXI=",
                                                        "--framer-font-family": '"Open Sans", "Open Sans Placeholder", sans-serif',
                                                        "--framer-font-size": "10px",
                                                        "--framer-text-alignment": "center",
                                                        "--framer-text-color": "rgb(255, 247, 247)"
                                                    },
                                                    children: "Turn static catalogs into dynamic outfit journeys that convert and monitor performance with real-time dashboards."
                                                })
                                            })
                                        }
                                    },
                                    children: e(i, {
                                        __fromCanvasComponent: !0,
                                        children: e(r, {
                                            children: e("p", {
                                                style: {
                                                    "--font-selector": "R0Y7T3BlbiBTYW5zLXJlZ3VsYXI=",
                                                    "--framer-font-family": '"Open Sans", "Open Sans Placeholder", sans-serif',
                                                    "--framer-text-alignment": "center",
                                                    "--framer-text-color": "rgb(255, 247, 247)"
                                                },
                                                children: "Turn static catalogs into dynamic outfit journeys that convert and monitor performance with real-time dashboards."
                                            })
                                        }),
                                        className: "framer-1nndn2f",
                                        fonts: ["GF;Open Sans-regular"],
                                        verticalAlignment: "top",
                                        withExternalLayout: !0
                                    })
                                })]
                            })]
                        }), t(p.div, {
                            className: "framer-1bm82vi",
                            whileHover: S,
                            children: [e("div", {
                                className: "framer-r35jn4",
                                children: e(f, {
                                    breakpoint: o,
                                    overrides: {
                                        hIWTqwvPm: {
                                            background: {
                                                alt: "",
                                                fit: "fill",
                                                loading: s((n?.y || 0) + 0 + 11790 + 0 + 197.9954 + 60.9941 + 0 + 0 + 0 + -1.494),
                                                pixelHeight: 810,
                                                pixelWidth: 1440,
                                                sizes: "262px",
                                                src: "https://framerusercontent.com/images/FSPTXaBT9xRp0q05yolzJCXsa0.svg",
                                                srcSet: "https://framerusercontent.com/images/FSPTXaBT9xRp0q05yolzJCXsa0.svg?scale-down-to=512 512w,https://framerusercontent.com/images/FSPTXaBT9xRp0q05yolzJCXsa0.svg?scale-down-to=1024 1024w,https://framerusercontent.com/images/FSPTXaBT9xRp0q05yolzJCXsa0.svg 1440w"
                                            }
                                        },
                                        jUuLb2ZS_: {
                                            background: {
                                                alt: "",
                                                fit: "fill",
                                                loading: s((n?.y || 0) + 0 + 9652 + 0 + 139.8304 + 0 + 670.2745 + 0 + 0 + 0 + -10.4534),
                                                pixelHeight: 810,
                                                pixelWidth: 1440,
                                                sizes: `calc((${n?.width || "100vw"} - 40px) * 1.2286)`,
                                                src: "https://framerusercontent.com/images/FSPTXaBT9xRp0q05yolzJCXsa0.svg",
                                                srcSet: "https://framerusercontent.com/images/FSPTXaBT9xRp0q05yolzJCXsa0.svg?scale-down-to=512 512w,https://framerusercontent.com/images/FSPTXaBT9xRp0q05yolzJCXsa0.svg?scale-down-to=1024 1024w,https://framerusercontent.com/images/FSPTXaBT9xRp0q05yolzJCXsa0.svg 1440w"
                                            }
                                        }
                                    },
                                    children: e(g, {
                                        background: {
                                            alt: "",
                                            fit: "fill",
                                            loading: s((n?.y || 0) + 0 + 11596 + 0 + 217.968 + 63.516 + 0 + 0 + 0 + -10.5021),
                                            pixelHeight: 810,
                                            pixelWidth: 1440,
                                            sizes: "431px",
                                            src: "https://framerusercontent.com/images/FSPTXaBT9xRp0q05yolzJCXsa0.svg",
                                            srcSet: "https://framerusercontent.com/images/FSPTXaBT9xRp0q05yolzJCXsa0.svg?scale-down-to=512 512w,https://framerusercontent.com/images/FSPTXaBT9xRp0q05yolzJCXsa0.svg?scale-down-to=1024 1024w,https://framerusercontent.com/images/FSPTXaBT9xRp0q05yolzJCXsa0.svg 1440w"
                                        },
                                        className: "framer-19ssksq"
                                    })
                                })
                            }), t("div", {
                                className: "framer-hjmsrk",
                                children: [e(f, {
                                    breakpoint: o,
                                    overrides: {
                                        hIWTqwvPm: {
                                            children: e(r, {
                                                children: e("p", {
                                                    style: {
                                                        "--font-selector": "R0Y7QmV2YW4tcmVndWxhcg==",
                                                        "--framer-font-family": '"Bevan", "Bevan Placeholder", serif',
                                                        "--framer-font-size": "15px",
                                                        "--framer-text-alignment": "center",
                                                        "--framer-text-color": "rgb(255, 247, 247)"
                                                    },
                                                    children: "Marketing Teams"
                                                })
                                            })
                                        },
                                        jUuLb2ZS_: {
                                            children: e(r, {
                                                children: e("p", {
                                                    style: {
                                                        "--font-selector": "R0Y7QmV2YW4tcmVndWxhcg==",
                                                        "--framer-font-family": '"Bevan", "Bevan Placeholder", serif',
                                                        "--framer-font-size": "15px",
                                                        "--framer-text-alignment": "center",
                                                        "--framer-text-color": "rgb(255, 247, 247)"
                                                    },
                                                    children: "Marketing Teams"
                                                })
                                            })
                                        }
                                    },
                                    children: e(i, {
                                        __fromCanvasComponent: !0,
                                        children: e(r, {
                                            children: e("p", {
                                                style: {
                                                    "--font-selector": "R0Y7QmV2YW4tcmVndWxhcg==",
                                                    "--framer-font-family": '"Bevan", "Bevan Placeholder", serif',
                                                    "--framer-font-size": "22px",
                                                    "--framer-text-alignment": "center",
                                                    "--framer-text-color": "rgb(255, 247, 247)"
                                                },
                                                children: "Marketing Teams"
                                            })
                                        }),
                                        className: "framer-z3l9nr",
                                        fonts: ["GF;Bevan-regular"],
                                        verticalAlignment: "top",
                                        withExternalLayout: !0
                                    })
                                }), e(f, {
                                    breakpoint: o,
                                    overrides: {
                                        hIWTqwvPm: {
                                            children: e(r, {
                                                children: e("p", {
                                                    style: {
                                                        "--font-selector": "R0Y7T3BlbiBTYW5zLXJlZ3VsYXI=",
                                                        "--framer-font-family": '"Open Sans", "Open Sans Placeholder", sans-serif',
                                                        "--framer-font-size": "10px",
                                                        "--framer-text-alignment": "center",
                                                        "--framer-text-color": "rgb(255, 247, 247)"
                                                    },
                                                    children: "Run smarter campaigns with look-based targeting and try-on insights."
                                                })
                                            })
                                        },
                                        jUuLb2ZS_: {
                                            children: e(r, {
                                                children: e("p", {
                                                    style: {
                                                        "--font-selector": "R0Y7T3BlbiBTYW5zLXJlZ3VsYXI=",
                                                        "--framer-font-family": '"Open Sans", "Open Sans Placeholder", sans-serif',
                                                        "--framer-font-size": "10px",
                                                        "--framer-text-alignment": "center",
                                                        "--framer-text-color": "rgb(255, 247, 247)"
                                                    },
                                                    children: "Run smarter campaigns with look-based targeting and try-on insights."
                                                })
                                            })
                                        }
                                    },
                                    children: e(i, {
                                        __fromCanvasComponent: !0,
                                        children: e(r, {
                                            children: e("p", {
                                                style: {
                                                    "--font-selector": "R0Y7T3BlbiBTYW5zLXJlZ3VsYXI=",
                                                    "--framer-font-family": '"Open Sans", "Open Sans Placeholder", sans-serif',
                                                    "--framer-text-alignment": "center",
                                                    "--framer-text-color": "rgb(255, 247, 247)"
                                                },
                                                children: "Run smarter campaigns with look-based targeting and try-on insights."
                                            })
                                        }),
                                        className: "framer-6kl804",
                                        fonts: ["GF;Open Sans-regular"],
                                        verticalAlignment: "top",
                                        withExternalLayout: !0
                                    })
                                })]
                            })]
                        }), t(p.div, {
                            className: "framer-sy99h3",
                            whileHover: S,
                            children: [e("div", {
                                className: "framer-trl2k6",
                                children: e(f, {
                                    breakpoint: o,
                                    overrides: {
                                        hIWTqwvPm: {
                                            background: {
                                                alt: "",
                                                fit: "fill",
                                                loading: s((n?.y || 0) + 0 + 11790 + 0 + 197.9954 + 60.9941 + 0 + 0 + 0 + -.994),
                                                pixelHeight: 810,
                                                pixelWidth: 1440,
                                                sizes: "230px",
                                                src: "https://framerusercontent.com/images/Rn0jLKdqNzfkGtjmOyDLRIXEkI.svg",
                                                srcSet: "https://framerusercontent.com/images/Rn0jLKdqNzfkGtjmOyDLRIXEkI.svg?scale-down-to=512 512w,https://framerusercontent.com/images/Rn0jLKdqNzfkGtjmOyDLRIXEkI.svg?scale-down-to=1024 1024w,https://framerusercontent.com/images/Rn0jLKdqNzfkGtjmOyDLRIXEkI.svg 1440w"
                                            }
                                        },
                                        jUuLb2ZS_: {
                                            background: {
                                                alt: "",
                                                fit: "fill",
                                                loading: s((n?.y || 0) + 0 + 9652 + 0 + 139.8304 + 0 + 990.2361 + 0 + 0 + 0 + -26.9534),
                                                pixelHeight: 810,
                                                pixelWidth: 1440,
                                                sizes: `calc((${n?.width || "100vw"} - 40px) * 1.0857)`,
                                                src: "https://framerusercontent.com/images/Rn0jLKdqNzfkGtjmOyDLRIXEkI.svg",
                                                srcSet: "https://framerusercontent.com/images/Rn0jLKdqNzfkGtjmOyDLRIXEkI.svg?scale-down-to=512 512w,https://framerusercontent.com/images/Rn0jLKdqNzfkGtjmOyDLRIXEkI.svg?scale-down-to=1024 1024w,https://framerusercontent.com/images/Rn0jLKdqNzfkGtjmOyDLRIXEkI.svg 1440w"
                                            }
                                        }
                                    },
                                    children: e(g, {
                                        background: {
                                            alt: "",
                                            fit: "fill",
                                            loading: s((n?.y || 0) + 0 + 11596 + 0 + 217.968 + 63.516 + 0 + 0 + 0 + -12.0021),
                                            pixelHeight: 810,
                                            pixelWidth: 1440,
                                            sizes: "318px",
                                            src: "https://framerusercontent.com/images/Rn0jLKdqNzfkGtjmOyDLRIXEkI.svg",
                                            srcSet: "https://framerusercontent.com/images/Rn0jLKdqNzfkGtjmOyDLRIXEkI.svg?scale-down-to=512 512w,https://framerusercontent.com/images/Rn0jLKdqNzfkGtjmOyDLRIXEkI.svg?scale-down-to=1024 1024w,https://framerusercontent.com/images/Rn0jLKdqNzfkGtjmOyDLRIXEkI.svg 1440w"
                                        },
                                        className: "framer-mzifvm"
                                    })
                                })
                            }), t("div", {
                                className: "framer-rczefk",
                                children: [e(f, {
                                    breakpoint: o,
                                    overrides: {
                                        hIWTqwvPm: {
                                            children: e(r, {
                                                children: e("p", {
                                                    style: {
                                                        "--font-selector": "R0Y7QmV2YW4tcmVndWxhcg==",
                                                        "--framer-font-family": '"Bevan", "Bevan Placeholder", serif',
                                                        "--framer-font-size": "15px",
                                                        "--framer-text-alignment": "center",
                                                        "--framer-text-color": "rgb(255, 247, 247)"
                                                    },
                                                    children: "Tech Teams"
                                                })
                                            })
                                        },
                                        jUuLb2ZS_: {
                                            children: e(r, {
                                                children: e("p", {
                                                    style: {
                                                        "--font-selector": "R0Y7QmV2YW4tcmVndWxhcg==",
                                                        "--framer-font-family": '"Bevan", "Bevan Placeholder", serif',
                                                        "--framer-font-size": "15px",
                                                        "--framer-text-alignment": "center",
                                                        "--framer-text-color": "rgb(255, 247, 247)"
                                                    },
                                                    children: "Tech Teams"
                                                })
                                            })
                                        }
                                    },
                                    children: e(i, {
                                        __fromCanvasComponent: !0,
                                        children: e(r, {
                                            children: e("p", {
                                                style: {
                                                    "--font-selector": "R0Y7QmV2YW4tcmVndWxhcg==",
                                                    "--framer-font-family": '"Bevan", "Bevan Placeholder", serif',
                                                    "--framer-font-size": "22px",
                                                    "--framer-text-alignment": "center",
                                                    "--framer-text-color": "rgb(255, 247, 247)"
                                                },
                                                children: "Tech Teams"
                                            })
                                        }),
                                        className: "framer-c9ded1",
                                        fonts: ["GF;Bevan-regular"],
                                        verticalAlignment: "top",
                                        withExternalLayout: !0
                                    })
                                }), e(f, {
                                    breakpoint: o,
                                    overrides: {
                                        hIWTqwvPm: {
                                            children: e(r, {
                                                children: e("p", {
                                                    style: {
                                                        "--font-selector": "R0Y7T3BlbiBTYW5zLXJlZ3VsYXI=",
                                                        "--framer-font-family": '"Open Sans", "Open Sans Placeholder", sans-serif',
                                                        "--framer-font-size": "10px",
                                                        "--framer-text-alignment": "center",
                                                        "--framer-text-color": "rgb(255, 247, 247)"
                                                    },
                                                    children: "Launch AI styling instantly \u2014 no in-house dev needed."
                                                })
                                            })
                                        },
                                        jUuLb2ZS_: {
                                            children: e(r, {
                                                children: e("p", {
                                                    style: {
                                                        "--font-selector": "R0Y7T3BlbiBTYW5zLXJlZ3VsYXI=",
                                                        "--framer-font-family": '"Open Sans", "Open Sans Placeholder", sans-serif',
                                                        "--framer-font-size": "10px",
                                                        "--framer-text-alignment": "center",
                                                        "--framer-text-color": "rgb(255, 247, 247)"
                                                    },
                                                    children: "Launch AI styling instantly \u2014 no in-house dev needed."
                                                })
                                            })
                                        }
                                    },
                                    children: e(i, {
                                        __fromCanvasComponent: !0,
                                        children: e(r, {
                                            children: e("p", {
                                                style: {
                                                    "--font-selector": "R0Y7T3BlbiBTYW5zLXJlZ3VsYXI=",
                                                    "--framer-font-family": '"Open Sans", "Open Sans Placeholder", sans-serif',
                                                    "--framer-text-alignment": "center",
                                                    "--framer-text-color": "rgb(255, 247, 247)"
                                                },
                                                children: "Launch AI styling instantly \u2014 no in-house dev needed."
                                            })
                                        }),
                                        className: "framer-j0me11",
                                        fonts: ["GF;Open Sans-regular"],
                                        verticalAlignment: "top",
                                        withExternalLayout: !0
                                    })
                                })]
                            })]
                        })]
                    })]
                }), t("div", {
                    className: "framer-9gh2gt",
                    children: [e("div", {
                        className: "framer-12bym6p",
                        id: Ln,
                        ref: lt,
                        children: e(f, {
                            breakpoint: o,
                            overrides: {
                                hIWTqwvPm: {
                                    children: t(r, {
                                        children: [e("p", {
                                            style: {
                                                "--font-selector": "R0Y7QmV2YW4tcmVndWxhcg==",
                                                "--framer-font-family": '"Bevan", "Bevan Placeholder", serif',
                                                "--framer-font-size": "45px",
                                                "--framer-text-alignment": "center",
                                                "--framer-text-color": "rgb(255, 255, 255)"
                                            },
                                            children: "REIMAGINING FASHION "
                                        }), e("p", {
                                            style: {
                                                "--font-selector": "R0Y7QmV2YW4tcmVndWxhcg==",
                                                "--framer-font-family": '"Bevan", "Bevan Placeholder", serif',
                                                "--framer-font-size": "45px",
                                                "--framer-text-alignment": "center",
                                                "--framer-text-color": "rgb(255, 255, 255)"
                                            },
                                            children: "WITH PURPOSE"
                                        })]
                                    })
                                },
                                jUuLb2ZS_: {
                                    children: t(r, {
                                        children: [e("p", {
                                            style: {
                                                "--font-selector": "R0Y7QmV2YW4tcmVndWxhcg==",
                                                "--framer-font-family": '"Bevan", "Bevan Placeholder", serif',
                                                "--framer-font-size": "21px",
                                                "--framer-text-alignment": "center",
                                                "--framer-text-color": "rgb(255, 255, 255)"
                                            },
                                            children: "REIMAGINING FASHION "
                                        }), e("p", {
                                            style: {
                                                "--font-selector": "R0Y7QmV2YW4tcmVndWxhcg==",
                                                "--framer-font-family": '"Bevan", "Bevan Placeholder", serif',
                                                "--framer-font-size": "21px",
                                                "--framer-text-alignment": "center",
                                                "--framer-text-color": "rgb(255, 255, 255)"
                                            },
                                            children: "WITH PURPOSE"
                                        })]
                                    })
                                }
                            },
                            children: e(Q, {
                                __framer__spring: {
                                    bounce: .2,
                                    damping: 60,
                                    delay: 0,
                                    duration: 10,
                                    durationBasedSpring: !0,
                                    ease: [.44, 0, .56, 1],
                                    mass: 1,
                                    stiffness: 500,
                                    type: "spring"
                                },
                                __framer__styleTransformEffectEnabled: !0,
                                __framer__transformTargets: [{
                                    target: {
                                        opacity: .4,
                                        rotate: 0,
                                        rotateX: 50,
                                        rotateY: 50,
                                        scale: .2,
                                        skewX: 0,
                                        skewY: 0,
                                        x: 200,
                                        y: 10
                                    }
                                }, {
                                    ref: lt,
                                    target: {
                                        opacity: 1,
                                        rotate: 0,
                                        rotateX: 0,
                                        rotateY: 0,
                                        scale: 1,
                                        skewX: 0,
                                        skewY: 0,
                                        x: 0,
                                        y: 0
                                    }
                                }],
                                __framer__transformTrigger: "onScrollTarget",
                                __framer__transformViewportThreshold: 1,
                                __fromCanvasComponent: !0,
                                __perspectiveFX: !1,
                                __targetOpacity: 1,
                                children: t(r, {
                                    children: [e("p", {
                                        style: {
                                            "--font-selector": "R0Y7QmV2YW4tcmVndWxhcg==",
                                            "--framer-font-family": '"Bevan", "Bevan Placeholder", serif',
                                            "--framer-font-size": "58px",
                                            "--framer-text-alignment": "center",
                                            "--framer-text-color": "rgb(255, 255, 255)"
                                        },
                                        children: "REIMAGINING FASHION "
                                    }), e("p", {
                                        style: {
                                            "--font-selector": "R0Y7QmV2YW4tcmVndWxhcg==",
                                            "--framer-font-family": '"Bevan", "Bevan Placeholder", serif',
                                            "--framer-font-size": "58px",
                                            "--framer-text-alignment": "center",
                                            "--framer-text-color": "rgb(255, 255, 255)"
                                        },
                                        children: "WITH PURPOSE"
                                    })]
                                }),
                                className: "framer-1hydxja",
                                fonts: ["GF;Bevan-regular"],
                                verticalAlignment: "top",
                                withExternalLayout: !0
                            })
                        })
                    }), t("div", {
                        className: "framer-11ygdyh",
                        children: [t("div", {
                            className: "framer-vw8zh7",
                            children: [e("div", {
                                className: "framer-14urzcs",
                                children: e(f, {
                                    breakpoint: o,
                                    overrides: {
                                        hIWTqwvPm: {
                                            transformTemplate: P
                                        },
                                        jUuLb2ZS_: {
                                            children: e(r, {
                                                children: e("p", {
                                                    style: {
                                                        "--font-selector": "R0Y7QmV2YW4tcmVndWxhcg==",
                                                        "--framer-font-family": '"Bevan", "Bevan Placeholder", serif',
                                                        "--framer-font-size": "18px",
                                                        "--framer-text-color": "rgb(255, 255, 255)"
                                                    },
                                                    children: "01"
                                                })
                                            })
                                        }
                                    },
                                    children: e(i, {
                                        __fromCanvasComponent: !0,
                                        children: e(r, {
                                            children: e("p", {
                                                style: {
                                                    "--font-selector": "R0Y7QmV2YW4tcmVndWxhcg==",
                                                    "--framer-font-family": '"Bevan", "Bevan Placeholder", serif',
                                                    "--framer-font-size": "47px",
                                                    "--framer-text-color": "rgb(255, 255, 255)"
                                                },
                                                children: "01"
                                            })
                                        }),
                                        className: "framer-ythhg",
                                        fonts: ["GF;Bevan-regular"],
                                        verticalAlignment: "center",
                                        withExternalLayout: !0
                                    })
                                })
                            }), e(f, {
                                breakpoint: o,
                                overrides: {
                                    hIWTqwvPm: {
                                        svg: '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 1 135" overflow="visible"><path d="M 0 0 L 0 135" fill="rgb(255, 255, 255)" stroke-width="2" stroke="rgb(255, 255, 255)"></path></svg>'
                                    },
                                    jUuLb2ZS_: {
                                        svg: '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 1 161" overflow="visible"><path d="M 0 0 L 0 161" fill="rgb(255, 255, 255)" stroke-width="2" stroke="rgb(255, 255, 255)"></path></svg>'
                                    }
                                },
                                children: e(Xe, {
                                    className: "framer-myj7w4",
                                    opacity: 1,
                                    requiresOverflowVisible: !0,
                                    svg: '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 1 218" overflow="visible"><path d="M 0 0 L 0 218" fill="rgb(255, 255, 255)" stroke-width="2" stroke="rgb(255, 255, 255)"></path></svg>',
                                    withExternalLayout: !0
                                })
                            }), e("div", {
                                className: "framer-1jyf10c",
                                children: e(f, {
                                    breakpoint: o,
                                    overrides: {
                                        jUuLb2ZS_: {
                                            children: e(r, {
                                                children: e("p", {
                                                    style: {
                                                        "--font-selector": "R0Y7QmV2YW4tcmVndWxhcg==",
                                                        "--framer-font-family": '"Bevan", "Bevan Placeholder", serif',
                                                        "--framer-font-size": "18px",
                                                        "--framer-text-color": "rgb(255, 255, 255)"
                                                    },
                                                    children: "02"
                                                })
                                            })
                                        }
                                    },
                                    children: e(i, {
                                        __fromCanvasComponent: !0,
                                        children: e(r, {
                                            children: e("p", {
                                                style: {
                                                    "--font-selector": "R0Y7QmV2YW4tcmVndWxhcg==",
                                                    "--framer-font-family": '"Bevan", "Bevan Placeholder", serif',
                                                    "--framer-font-size": "47px",
                                                    "--framer-text-color": "rgb(255, 255, 255)"
                                                },
                                                children: "02"
                                            })
                                        }),
                                        className: "framer-19yblb3",
                                        fonts: ["GF;Bevan-regular"],
                                        verticalAlignment: "top",
                                        withExternalLayout: !0
                                    })
                                })
                            }), e(f, {
                                breakpoint: o,
                                overrides: {
                                    hIWTqwvPm: {
                                        svg: '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 1 135" overflow="visible"><path d="M 0 0 L 0 135" fill="rgb(255, 255, 255)" stroke-width="2" stroke="rgb(255, 255, 255)"></path></svg>'
                                    },
                                    jUuLb2ZS_: {
                                        svg: '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 1 146" overflow="visible"><path d="M 0 0 L 0 146" fill="rgb(255, 255, 255)" stroke-width="2" stroke="rgb(255, 255, 255)"></path></svg>'
                                    }
                                },
                                children: e(Xe, {
                                    className: "framer-ko5b48",
                                    opacity: 1,
                                    requiresOverflowVisible: !0,
                                    svg: '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 1 218" overflow="visible"><path d="M 0 0 L 0 218" fill="rgb(255, 255, 255)" stroke-width="2" stroke="rgb(255, 255, 255)"></path></svg>',
                                    withExternalLayout: !0
                                })
                            }), e("div", {
                                className: "framer-4dsxhw",
                                children: e(f, {
                                    breakpoint: o,
                                    overrides: {
                                        hIWTqwvPm: {
                                            transformTemplate: P
                                        },
                                        jUuLb2ZS_: {
                                            children: e(r, {
                                                children: e("p", {
                                                    style: {
                                                        "--font-selector": "R0Y7QmV2YW4tcmVndWxhcg==",
                                                        "--framer-font-family": '"Bevan", "Bevan Placeholder", serif',
                                                        "--framer-font-size": "18px",
                                                        "--framer-text-color": "rgb(255, 255, 255)"
                                                    },
                                                    children: "03"
                                                })
                                            })
                                        }
                                    },
                                    children: e(i, {
                                        __fromCanvasComponent: !0,
                                        children: e(r, {
                                            children: e("p", {
                                                style: {
                                                    "--font-selector": "R0Y7QmV2YW4tcmVndWxhcg==",
                                                    "--framer-font-family": '"Bevan", "Bevan Placeholder", serif',
                                                    "--framer-font-size": "47px",
                                                    "--framer-text-color": "rgb(255, 255, 255)"
                                                },
                                                children: "03"
                                            })
                                        }),
                                        className: "framer-vjjziw",
                                        fonts: ["GF;Bevan-regular"],
                                        verticalAlignment: "top",
                                        withExternalLayout: !0
                                    })
                                })
                            }), e(f, {
                                breakpoint: o,
                                overrides: {
                                    hIWTqwvPm: {
                                        svg: '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 1 110" overflow="visible"><path d="M 0 0 L 0 110" fill="rgb(255, 255, 255)" stroke-width="2" stroke="rgb(255, 255, 255)"></path></svg>'
                                    },
                                    jUuLb2ZS_: {
                                        svg: '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 1 135" overflow="visible"><path d="M 0 0 L 0 135" fill="rgb(255, 255, 255)" stroke-width="2" stroke="rgb(255, 255, 255)"></path></svg>'
                                    }
                                },
                                children: e(Xe, {
                                    className: "framer-t5dvqj",
                                    opacity: 1,
                                    requiresOverflowVisible: !0,
                                    svg: '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 1 200" overflow="visible"><path d="M 0 0 L 0 200" fill="rgb(255, 255, 255)" stroke-width="2" stroke="rgb(255, 255, 255)"></path></svg>',
                                    withExternalLayout: !0
                                })
                            })]
                        }), t("div", {
                            className: "framer-ndcw5g",
                            children: [t(z, {
                                __framer__spring: {
                                    bounce: .2,
                                    damping: 60,
                                    delay: 0,
                                    duration: 1,
                                    durationBasedSpring: !0,
                                    ease: [.44, 0, .56, 1],
                                    mass: 1,
                                    stiffness: 500,
                                    type: "spring"
                                },
                                __framer__styleTransformEffectEnabled: !0,
                                __framer__transformTargets: [{
                                    target: {
                                        opacity: .5,
                                        rotate: 0,
                                        rotateX: 0,
                                        rotateY: 0,
                                        scale: 0,
                                        skewX: 0,
                                        skewY: 0,
                                        x: 0,
                                        y: 165
                                    }
                                }, {
                                    ref: st,
                                    target: {
                                        opacity: 1,
                                        rotate: 0,
                                        rotateX: 0,
                                        rotateY: 0,
                                        scale: 1,
                                        skewX: 0,
                                        skewY: 0,
                                        x: 0,
                                        y: 0
                                    }
                                }],
                                __framer__transformTrigger: "onScrollTarget",
                                __framer__transformViewportThreshold: 1,
                                __perspectiveFX: !1,
                                __targetOpacity: 1,
                                className: "framer-1ngdyxu",
                                id: Vn,
                                ref: st,
                                children: [e(f, {
                                    breakpoint: o,
                                    overrides: {
                                        hIWTqwvPm: {
                                            children: e(r, {
                                                children: e("p", {
                                                    style: {
                                                        "--font-selector": "R0Y7QmV2YW4tcmVndWxhcg==",
                                                        "--framer-font-family": '"Bevan", "Bevan Placeholder", serif',
                                                        "--framer-font-size": "29px",
                                                        "--framer-text-color": "rgb(255, 255, 255)"
                                                    },
                                                    children: "Why Fashion Needs Reinvention"
                                                })
                                            })
                                        },
                                        jUuLb2ZS_: {
                                            children: e(r, {
                                                children: e("p", {
                                                    style: {
                                                        "--font-selector": "R0Y7QmV2YW4tcmVndWxhcg==",
                                                        "--framer-font-family": '"Bevan", "Bevan Placeholder", serif',
                                                        "--framer-font-size": "14px",
                                                        "--framer-text-color": "rgb(255, 255, 255)"
                                                    },
                                                    children: "Why Fashion Needs Reinvention"
                                                })
                                            })
                                        }
                                    },
                                    children: e(i, {
                                        __fromCanvasComponent: !0,
                                        children: e(r, {
                                            children: e("p", {
                                                style: {
                                                    "--font-selector": "R0Y7QmV2YW4tcmVndWxhcg==",
                                                    "--framer-font-family": '"Bevan", "Bevan Placeholder", serif',
                                                    "--framer-font-size": "37px",
                                                    "--framer-text-color": "rgb(255, 255, 255)"
                                                },
                                                children: "Why Fashion Needs Reinvention"
                                            })
                                        }),
                                        className: "framer-b7xdw6",
                                        fonts: ["GF;Bevan-regular"],
                                        verticalAlignment: "top",
                                        withExternalLayout: !0
                                    })
                                }), e(f, {
                                    breakpoint: o,
                                    overrides: {
                                        hIWTqwvPm: {
                                            children: t(r, {
                                                children: [e("p", {
                                                    style: {
                                                        "--font-selector": "R0Y7T3BlbiBTYW5zLXJlZ3VsYXI=",
                                                        "--framer-font-family": '"Open Sans", "Open Sans Placeholder", sans-serif',
                                                        "--framer-font-size": "13px",
                                                        "--framer-line-height": "1.5em",
                                                        "--framer-text-color": "rgb(255, 255, 255)"
                                                    },
                                                    children: "The way we shop for fashion is broken."
                                                }), e("p", {
                                                    style: {
                                                        "--font-selector": "R0Y7T3BlbiBTYW5zLXJlZ3VsYXI=",
                                                        "--framer-font-family": '"Open Sans", "Open Sans Placeholder", sans-serif',
                                                        "--framer-font-size": "13px",
                                                        "--framer-line-height": "1.5em",
                                                        "--framer-text-color": "rgb(255, 255, 255)"
                                                    },
                                                    children: "Less than 10% of retailers use AI to personalise the experience, resulting in generic suggestions, high return rates, and wasted stock."
                                                }), e("p", {
                                                    style: {
                                                        "--font-selector": "R0Y7T3BlbiBTYW5zLTcwMGl0YWxpYw==",
                                                        "--framer-font-family": '"Open Sans", "Open Sans Placeholder", sans-serif',
                                                        "--framer-font-size": "13px",
                                                        "--framer-font-style": "italic",
                                                        "--framer-font-weight": "700",
                                                        "--framer-line-height": "1.5em",
                                                        "--framer-text-color": "rgb(255, 255, 255)"
                                                    },
                                                    children: "It's frustrating for customers. Expensive for brands. And unsustainable for the planet."
                                                })]
                                            })
                                        },
                                        jUuLb2ZS_: {
                                            children: t(r, {
                                                children: [e("p", {
                                                    style: {
                                                        "--font-selector": "R0Y7T3BlbiBTYW5zLXJlZ3VsYXI=",
                                                        "--framer-font-family": '"Open Sans", "Open Sans Placeholder", sans-serif',
                                                        "--framer-font-size": "11px",
                                                        "--framer-line-height": "1.5em",
                                                        "--framer-text-color": "rgb(255, 255, 255)"
                                                    },
                                                    children: "The way we shop for fashion is broken."
                                                }), e("p", {
                                                    style: {
                                                        "--font-selector": "R0Y7T3BlbiBTYW5zLXJlZ3VsYXI=",
                                                        "--framer-font-family": '"Open Sans", "Open Sans Placeholder", sans-serif',
                                                        "--framer-font-size": "11px",
                                                        "--framer-line-height": "1.5em",
                                                        "--framer-text-color": "rgb(255, 255, 255)"
                                                    },
                                                    children: "Less than 10% of retailers use AI to personalise the experience, resulting in generic suggestions, high return rates, and wasted stock."
                                                }), e("p", {
                                                    style: {
                                                        "--font-selector": "R0Y7T3BlbiBTYW5zLTcwMGl0YWxpYw==",
                                                        "--framer-font-family": '"Open Sans", "Open Sans Placeholder", sans-serif',
                                                        "--framer-font-size": "11px",
                                                        "--framer-font-style": "italic",
                                                        "--framer-font-weight": "700",
                                                        "--framer-line-height": "1.5em",
                                                        "--framer-text-color": "rgb(255, 255, 255)"
                                                    },
                                                    children: "It's frustrating for customers. Expensive for brands. And unsustainable for the planet."
                                                })]
                                            })
                                        }
                                    },
                                    children: e(i, {
                                        __fromCanvasComponent: !0,
                                        children: t(r, {
                                            children: [e("p", {
                                                style: {
                                                    "--font-selector": "R0Y7T3BlbiBTYW5zLXJlZ3VsYXI=",
                                                    "--framer-font-family": '"Open Sans", "Open Sans Placeholder", sans-serif',
                                                    "--framer-line-height": "1.5em",
                                                    "--framer-text-color": "rgb(255, 255, 255)"
                                                },
                                                children: "The way we shop for fashion is broken."
                                            }), e("p", {
                                                style: {
                                                    "--font-selector": "R0Y7T3BlbiBTYW5zLXJlZ3VsYXI=",
                                                    "--framer-font-family": '"Open Sans", "Open Sans Placeholder", sans-serif',
                                                    "--framer-line-height": "1.5em",
                                                    "--framer-text-color": "rgb(255, 255, 255)"
                                                },
                                                children: "Less than 10% of retailers use AI to personalise the experience, resulting in generic suggestions, high return rates, and wasted stock."
                                            }), e("p", {
                                                style: {
                                                    "--font-selector": "R0Y7T3BlbiBTYW5zLTcwMGl0YWxpYw==",
                                                    "--framer-font-family": '"Open Sans", "Open Sans Placeholder", sans-serif',
                                                    "--framer-font-size": "18px",
                                                    "--framer-font-style": "italic",
                                                    "--framer-font-weight": "700",
                                                    "--framer-line-height": "1.5em",
                                                    "--framer-text-color": "rgb(255, 255, 255)"
                                                },
                                                children: "It's frustrating for customers. Expensive for brands. And unsustainable for the planet."
                                            })]
                                        }),
                                        className: "framer-lx8g7e",
                                        fonts: ["GF;Open Sans-regular", "GF;Open Sans-700italic"],
                                        verticalAlignment: "top",
                                        withExternalLayout: !0
                                    })
                                }), e(f, {
                                    breakpoint: o,
                                    overrides: {
                                        hIWTqwvPm: {
                                            children: e(r, {
                                                children: e("p", {
                                                    style: {
                                                        "--font-selector": "R0Y7QmV2YW4taXRhbGlj",
                                                        "--framer-font-family": '"Bevan", "Bevan Placeholder", serif',
                                                        "--framer-font-size": "15px",
                                                        "--framer-font-style": "italic",
                                                        "--framer-line-height": "1.5em",
                                                        "--framer-text-color": "rgb(255, 255, 255)"
                                                    },
                                                    children: "We believe fashion deserves better \u2014 for shoppers, brands, and the planet."
                                                })
                                            })
                                        },
                                        jUuLb2ZS_: {
                                            children: e(r, {
                                                children: e("p", {
                                                    style: {
                                                        "--font-selector": "R0Y7QmV2YW4taXRhbGlj",
                                                        "--framer-font-family": '"Bevan", "Bevan Placeholder", serif',
                                                        "--framer-font-size": "11px",
                                                        "--framer-font-style": "italic",
                                                        "--framer-line-height": "1.5em",
                                                        "--framer-text-color": "rgb(255, 255, 255)"
                                                    },
                                                    children: "We believe fashion deserves better \u2014 for shoppers, brands, and the planet."
                                                })
                                            })
                                        }
                                    },
                                    children: e(i, {
                                        __fromCanvasComponent: !0,
                                        children: e(r, {
                                            children: e("p", {
                                                style: {
                                                    "--font-selector": "R0Y7QmV2YW4taXRhbGlj",
                                                    "--framer-font-family": '"Bevan", "Bevan Placeholder", serif',
                                                    "--framer-font-size": "19px",
                                                    "--framer-font-style": "italic",
                                                    "--framer-line-height": "1.5em",
                                                    "--framer-text-color": "rgb(255, 255, 255)"
                                                },
                                                children: "We believe fashion deserves better \u2014 for shoppers, brands, and the planet."
                                            })
                                        }),
                                        className: "framer-1jyvv5p",
                                        fonts: ["GF;Bevan-italic"],
                                        verticalAlignment: "top",
                                        withExternalLayout: !0
                                    })
                                })]
                            }), t(z, {
                                __framer__spring: {
                                    bounce: .2,
                                    damping: 60,
                                    delay: 0,
                                    duration: 1,
                                    durationBasedSpring: !0,
                                    ease: [.44, 0, .56, 1],
                                    mass: 1,
                                    stiffness: 500,
                                    type: "spring"
                                },
                                __framer__styleTransformEffectEnabled: !0,
                                __framer__transformTargets: [{
                                    target: {
                                        opacity: .5,
                                        rotate: 0,
                                        rotateX: 0,
                                        rotateY: 0,
                                        scale: 0,
                                        skewX: 0,
                                        skewY: 0,
                                        x: 0,
                                        y: 165
                                    }
                                }, {
                                    ref: ft,
                                    target: {
                                        opacity: 1,
                                        rotate: 0,
                                        rotateX: 0,
                                        rotateY: 0,
                                        scale: 1,
                                        skewX: 0,
                                        skewY: 0,
                                        x: 0,
                                        y: 0
                                    }
                                }],
                                __framer__transformTrigger: "onScrollTarget",
                                __framer__transformViewportThreshold: 1,
                                __perspectiveFX: !1,
                                __targetOpacity: 1,
                                className: "framer-njvj5g",
                                id: Nn,
                                ref: ft,
                                children: [e(f, {
                                    breakpoint: o,
                                    overrides: {
                                        hIWTqwvPm: {
                                            children: e(r, {
                                                children: e("p", {
                                                    style: {
                                                        "--font-selector": "R0Y7QmV2YW4tcmVndWxhcg==",
                                                        "--framer-font-family": '"Bevan", "Bevan Placeholder", serif',
                                                        "--framer-font-size": "29px",
                                                        "--framer-text-color": "rgb(255, 255, 255)"
                                                    },
                                                    children: "Our Vision for the Future of Style"
                                                })
                                            })
                                        },
                                        jUuLb2ZS_: {
                                            children: e(r, {
                                                children: e("p", {
                                                    style: {
                                                        "--font-selector": "R0Y7QmV2YW4tcmVndWxhcg==",
                                                        "--framer-font-family": '"Bevan", "Bevan Placeholder", serif',
                                                        "--framer-font-size": "14px",
                                                        "--framer-text-color": "rgb(255, 255, 255)"
                                                    },
                                                    children: "Our Vision for the Future of Style"
                                                })
                                            })
                                        }
                                    },
                                    children: e(i, {
                                        __fromCanvasComponent: !0,
                                        children: e(r, {
                                            children: e("p", {
                                                style: {
                                                    "--font-selector": "R0Y7QmV2YW4tcmVndWxhcg==",
                                                    "--framer-font-family": '"Bevan", "Bevan Placeholder", serif',
                                                    "--framer-font-size": "37px",
                                                    "--framer-text-color": "rgb(255, 255, 255)"
                                                },
                                                children: "Our Vision for the Future of Style"
                                            })
                                        }),
                                        className: "framer-u2hos1",
                                        fonts: ["GF;Bevan-regular"],
                                        verticalAlignment: "top",
                                        withExternalLayout: !0
                                    })
                                }), e(f, {
                                    breakpoint: o,
                                    overrides: {
                                        hIWTqwvPm: {
                                            children: t(r, {
                                                children: [e("p", {
                                                    style: {
                                                        "--font-selector": "R0Y7T3BlbiBTYW5zLXJlZ3VsYXI=",
                                                        "--framer-font-family": '"Open Sans", "Open Sans Placeholder", sans-serif',
                                                        "--framer-font-size": "15px",
                                                        "--framer-line-height": "1.5em",
                                                        "--framer-text-color": "rgb(255, 255, 255)"
                                                    },
                                                    children: "We envision a world where fashion is personal, intelligent, and sustainable. Where every outfit is curated to fit your vibe, body, and budget \u2014 powered by AI.."
                                                }), e("p", {
                                                    style: {
                                                        "--font-selector": "R0Y7T3BlbiBTYW5zLTcwMGl0YWxpYw==",
                                                        "--framer-font-family": '"Open Sans", "Open Sans Placeholder", sans-serif',
                                                        "--framer-font-size": "15px",
                                                        "--framer-font-style": "italic",
                                                        "--framer-font-weight": "700",
                                                        "--framer-line-height": "1.5em",
                                                        "--framer-text-color": "rgb(255, 255, 255)"
                                                    },
                                                    children: "A world where data helps reduce waste, not create it."
                                                })]
                                            })
                                        },
                                        jUuLb2ZS_: {
                                            children: t(r, {
                                                children: [e("p", {
                                                    style: {
                                                        "--font-selector": "R0Y7T3BlbiBTYW5zLXJlZ3VsYXI=",
                                                        "--framer-font-family": '"Open Sans", "Open Sans Placeholder", sans-serif',
                                                        "--framer-font-size": "11px",
                                                        "--framer-line-height": "1.5em",
                                                        "--framer-text-color": "rgb(255, 255, 255)"
                                                    },
                                                    children: "We envision a world where fashion is personal, intelligent, and sustainable. Where every outfit is curated to fit your vibe, body, and budget \u2014 powered by AI.."
                                                }), e("p", {
                                                    style: {
                                                        "--font-selector": "R0Y7T3BlbiBTYW5zLTcwMGl0YWxpYw==",
                                                        "--framer-font-family": '"Open Sans", "Open Sans Placeholder", sans-serif',
                                                        "--framer-font-size": "11px",
                                                        "--framer-font-style": "italic",
                                                        "--framer-font-weight": "700",
                                                        "--framer-line-height": "1.5em",
                                                        "--framer-text-color": "rgb(255, 255, 255)"
                                                    },
                                                    children: "A world where data helps reduce waste, not create it."
                                                })]
                                            })
                                        }
                                    },
                                    children: e(i, {
                                        __fromCanvasComponent: !0,
                                        children: t(r, {
                                            children: [e("p", {
                                                style: {
                                                    "--font-selector": "R0Y7T3BlbiBTYW5zLXJlZ3VsYXI=",
                                                    "--framer-font-family": '"Open Sans", "Open Sans Placeholder", sans-serif',
                                                    "--framer-line-height": "1.5em",
                                                    "--framer-text-color": "rgb(255, 255, 255)"
                                                },
                                                children: "We envision a world where fashion is personal, intelligent, and sustainable. Where every outfit is curated to fit your vibe, body, and budget \u2014 powered by AI.."
                                            }), e("p", {
                                                style: {
                                                    "--font-selector": "R0Y7T3BlbiBTYW5zLTcwMGl0YWxpYw==",
                                                    "--framer-font-family": '"Open Sans", "Open Sans Placeholder", sans-serif',
                                                    "--framer-font-size": "18px",
                                                    "--framer-font-style": "italic",
                                                    "--framer-font-weight": "700",
                                                    "--framer-line-height": "1.5em",
                                                    "--framer-text-color": "rgb(255, 255, 255)"
                                                },
                                                children: "A world where data helps reduce waste, not create it."
                                            })]
                                        }),
                                        className: "framer-x0lvhv",
                                        fonts: ["GF;Open Sans-regular", "GF;Open Sans-700italic"],
                                        verticalAlignment: "top",
                                        withExternalLayout: !0
                                    })
                                }), e(f, {
                                    breakpoint: o,
                                    overrides: {
                                        hIWTqwvPm: {
                                            children: e(r, {
                                                children: e("p", {
                                                    style: {
                                                        "--font-selector": "R0Y7QmV2YW4taXRhbGlj",
                                                        "--framer-font-family": '"Bevan", "Bevan Placeholder", serif',
                                                        "--framer-font-size": "15px",
                                                        "--framer-font-style": "italic",
                                                        "--framer-line-height": "1.5em",
                                                        "--framer-text-color": "rgb(255, 255, 255)"
                                                    },
                                                    children: "StyleGenie transforms how people shop and how brands connect."
                                                })
                                            })
                                        },
                                        jUuLb2ZS_: {
                                            children: e(r, {
                                                children: e("p", {
                                                    style: {
                                                        "--font-selector": "R0Y7QmV2YW4taXRhbGlj",
                                                        "--framer-font-family": '"Bevan", "Bevan Placeholder", serif',
                                                        "--framer-font-size": "11px",
                                                        "--framer-font-style": "italic",
                                                        "--framer-line-height": "1.5em",
                                                        "--framer-text-color": "rgb(255, 255, 255)"
                                                    },
                                                    children: "StyleGenie transforms how people shop and how brands connect."
                                                })
                                            })
                                        }
                                    },
                                    children: e(i, {
                                        __fromCanvasComponent: !0,
                                        children: e(r, {
                                            children: e("p", {
                                                style: {
                                                    "--font-selector": "R0Y7QmV2YW4taXRhbGlj",
                                                    "--framer-font-family": '"Bevan", "Bevan Placeholder", serif',
                                                    "--framer-font-size": "19px",
                                                    "--framer-font-style": "italic",
                                                    "--framer-line-height": "1.5em",
                                                    "--framer-text-color": "rgb(255, 255, 255)"
                                                },
                                                children: "StyleGenie transforms how people shop and how brands connect."
                                            })
                                        }),
                                        className: "framer-kwbevs",
                                        fonts: ["GF;Bevan-italic"],
                                        verticalAlignment: "top",
                                        withExternalLayout: !0
                                    })
                                })]
                            }), t(z, {
                                __framer__spring: {
                                    bounce: .2,
                                    damping: 60,
                                    delay: 0,
                                    duration: 1,
                                    durationBasedSpring: !0,
                                    ease: [.44, 0, .56, 1],
                                    mass: 1,
                                    stiffness: 500,
                                    type: "spring"
                                },
                                __framer__styleTransformEffectEnabled: !0,
                                __framer__transformTargets: [{
                                    target: {
                                        opacity: .5,
                                        rotate: 0,
                                        rotateX: 0,
                                        rotateY: 0,
                                        scale: 0,
                                        skewX: 0,
                                        skewY: 0,
                                        x: 0,
                                        y: 165
                                    }
                                }, {
                                    ref: mt,
                                    target: {
                                        opacity: 1,
                                        rotate: 0,
                                        rotateX: 0,
                                        rotateY: 0,
                                        scale: 1,
                                        skewX: 0,
                                        skewY: 0,
                                        x: 0,
                                        y: 0
                                    }
                                }],
                                __framer__transformTrigger: "onScrollTarget",
                                __framer__transformViewportThreshold: 1,
                                __perspectiveFX: !1,
                                __targetOpacity: 1,
                                className: "framer-c88mtb",
                                id: An,
                                ref: mt,
                                children: [e(f, {
                                    breakpoint: o,
                                    overrides: {
                                        hIWTqwvPm: {
                                            children: e(r, {
                                                children: e("p", {
                                                    style: {
                                                        "--font-selector": "R0Y7QmV2YW4tcmVndWxhcg==",
                                                        "--framer-font-family": '"Bevan", "Bevan Placeholder", serif',
                                                        "--framer-font-size": "29px",
                                                        "--framer-text-color": "rgb(255, 255, 255)"
                                                    },
                                                    children: "Style With Impact"
                                                })
                                            })
                                        },
                                        jUuLb2ZS_: {
                                            children: e(r, {
                                                children: e("p", {
                                                    style: {
                                                        "--font-selector": "R0Y7QmV2YW4tcmVndWxhcg==",
                                                        "--framer-font-family": '"Bevan", "Bevan Placeholder", serif',
                                                        "--framer-font-size": "14px",
                                                        "--framer-text-color": "rgb(255, 255, 255)"
                                                    },
                                                    children: "Style With Impact"
                                                })
                                            })
                                        }
                                    },
                                    children: e(i, {
                                        __fromCanvasComponent: !0,
                                        children: e(r, {
                                            children: e("p", {
                                                style: {
                                                    "--font-selector": "R0Y7QmV2YW4tcmVndWxhcg==",
                                                    "--framer-font-family": '"Bevan", "Bevan Placeholder", serif',
                                                    "--framer-font-size": "37px",
                                                    "--framer-text-color": "rgb(255, 255, 255)"
                                                },
                                                children: "Style With Impact"
                                            })
                                        }),
                                        className: "framer-bjsxjy",
                                        fonts: ["GF;Bevan-regular"],
                                        verticalAlignment: "top",
                                        withExternalLayout: !0
                                    })
                                }), e(f, {
                                    breakpoint: o,
                                    overrides: {
                                        hIWTqwvPm: {
                                            children: e(r, {
                                                children: t("p", {
                                                    style: {
                                                        "--font-selector": "R0Y7T3BlbiBTYW5zLXJlZ3VsYXI=",
                                                        "--framer-font-family": '"Open Sans", "Open Sans Placeholder", sans-serif',
                                                        "--framer-font-size": "13px",
                                                        "--framer-line-height": "1.5em",
                                                        "--framer-text-color": "rgb(255, 255, 255)"
                                                    },
                                                    children: ["By improving search systems and reducing returns, we help brands lower unsold stock and waste, ", e("span", {
                                                        style: {
                                                            "--font-selector": "R0Y7T3BlbiBTYW5zLTcwMGl0YWxpYw==",
                                                            "--framer-font-style": "italic",
                                                            "--framer-font-weight": "700"
                                                        },
                                                        children: "powering a more sustainable fashion economy!"
                                                    })]
                                                })
                                            })
                                        },
                                        jUuLb2ZS_: {
                                            children: e(r, {
                                                children: t("p", {
                                                    style: {
                                                        "--font-selector": "R0Y7T3BlbiBTYW5zLXJlZ3VsYXI=",
                                                        "--framer-font-family": '"Open Sans", "Open Sans Placeholder", sans-serif',
                                                        "--framer-font-size": "11px",
                                                        "--framer-line-height": "1.5em",
                                                        "--framer-text-color": "rgb(255, 255, 255)"
                                                    },
                                                    children: ["By improving search systems and reducing returns, we help brands lower unsold stock and waste, ", e("span", {
                                                        style: {
                                                            "--font-selector": "R0Y7T3BlbiBTYW5zLTcwMGl0YWxpYw==",
                                                            "--framer-font-style": "italic",
                                                            "--framer-font-weight": "700"
                                                        },
                                                        children: "powering a more sustainable fashion economy!"
                                                    })]
                                                })
                                            })
                                        }
                                    },
                                    children: e(i, {
                                        __fromCanvasComponent: !0,
                                        children: e(r, {
                                            children: t("p", {
                                                style: {
                                                    "--font-selector": "R0Y7T3BlbiBTYW5zLXJlZ3VsYXI=",
                                                    "--framer-font-family": '"Open Sans", "Open Sans Placeholder", sans-serif',
                                                    "--framer-line-height": "1.5em",
                                                    "--framer-text-color": "rgb(255, 255, 255)"
                                                },
                                                children: ["By improving search systems and reducing returns, we help brands lower unsold stock and waste, ", e("span", {
                                                    style: {
                                                        "--font-selector": "R0Y7T3BlbiBTYW5zLTcwMGl0YWxpYw==",
                                                        "--framer-font-size": "18px",
                                                        "--framer-font-style": "italic",
                                                        "--framer-font-weight": "700"
                                                    },
                                                    children: "powering a more sustainable fashion economy!"
                                                })]
                                            })
                                        }),
                                        className: "framer-1scf6su",
                                        fonts: ["GF;Open Sans-regular", "GF;Open Sans-700italic"],
                                        verticalAlignment: "top",
                                        withExternalLayout: !0
                                    })
                                }), e(f, {
                                    breakpoint: o,
                                    overrides: {
                                        hIWTqwvPm: {
                                            children: e(r, {
                                                children: e("p", {
                                                    style: {
                                                        "--font-selector": "R0Y7QmV2YW4taXRhbGlj",
                                                        "--framer-font-family": '"Bevan", "Bevan Placeholder", serif',
                                                        "--framer-font-size": "15px",
                                                        "--framer-font-style": "italic",
                                                        "--framer-line-height": "1.5em",
                                                        "--framer-text-color": "rgb(255, 255, 255)"
                                                    },
                                                    children: "Because responsible fashion isn\u2019t a trend \u2014 It\u2019s the future."
                                                })
                                            })
                                        },
                                        jUuLb2ZS_: {
                                            children: e(r, {
                                                children: e("p", {
                                                    style: {
                                                        "--font-selector": "R0Y7QmV2YW4taXRhbGlj",
                                                        "--framer-font-family": '"Bevan", "Bevan Placeholder", serif',
                                                        "--framer-font-size": "11px",
                                                        "--framer-font-style": "italic",
                                                        "--framer-line-height": "1.5em",
                                                        "--framer-text-color": "rgb(255, 255, 255)"
                                                    },
                                                    children: "Because responsible fashion isn\u2019t a trend \u2014 It\u2019s the future."
                                                })
                                            })
                                        }
                                    },
                                    children: e(i, {
                                        __fromCanvasComponent: !0,
                                        children: e(r, {
                                            children: e("p", {
                                                style: {
                                                    "--font-selector": "R0Y7QmV2YW4taXRhbGlj",
                                                    "--framer-font-family": '"Bevan", "Bevan Placeholder", serif',
                                                    "--framer-font-size": "19px",
                                                    "--framer-font-style": "italic",
                                                    "--framer-line-height": "1.5em",
                                                    "--framer-text-color": "rgb(255, 255, 255)"
                                                },
                                                children: "Because responsible fashion isn\u2019t a trend \u2014 It\u2019s the future."
                                            })
                                        }),
                                        className: "framer-1ou2yi9",
                                        fonts: ["GF;Bevan-italic"],
                                        verticalAlignment: "top",
                                        withExternalLayout: !0
                                    })
                                })]
                            })]
                        }), e("div", {
                            className: "framer-kft55k",
                            children: e(f, {
                                breakpoint: o,
                                overrides: {
                                    hIWTqwvPm: {
                                        background: {
                                            alt: "",
                                            fit: "fill",
                                            loading: s((n?.y || 0) + 0 + 12444 + 0 + 287.685 + -82.991 + 66),
                                            pixelHeight: 810,
                                            pixelWidth: 1440,
                                            sizes: `calc((${n?.width || "100vw"} - 40px) * 1.0519 + 796px)`,
                                            src: "https://framerusercontent.com/images/Mf9Px8f9GxY1nhZkPRGotoHNAQ.svg",
                                            srcSet: "https://framerusercontent.com/images/Mf9Px8f9GxY1nhZkPRGotoHNAQ.svg?scale-down-to=512 512w,https://framerusercontent.com/images/Mf9Px8f9GxY1nhZkPRGotoHNAQ.svg?scale-down-to=1024 1024w,https://framerusercontent.com/images/Mf9Px8f9GxY1nhZkPRGotoHNAQ.svg 1440w"
                                        }
                                    },
                                    jUuLb2ZS_: {
                                        background: {
                                            alt: "",
                                            fit: "fill",
                                            loading: s((n?.y || 0) + 0 + 11101 + 0 + 88.478 + -58 + 113),
                                            pixelHeight: 810,
                                            pixelWidth: 1440,
                                            sizes: "870px",
                                            src: "https://framerusercontent.com/images/Mf9Px8f9GxY1nhZkPRGotoHNAQ.svg",
                                            srcSet: "https://framerusercontent.com/images/Mf9Px8f9GxY1nhZkPRGotoHNAQ.svg?scale-down-to=512 512w,https://framerusercontent.com/images/Mf9Px8f9GxY1nhZkPRGotoHNAQ.svg?scale-down-to=1024 1024w,https://framerusercontent.com/images/Mf9Px8f9GxY1nhZkPRGotoHNAQ.svg 1440w"
                                        }
                                    }
                                },
                                children: e(g, {
                                    background: {
                                        alt: "",
                                        fit: "fill",
                                        loading: s((n?.y || 0) + 0 + 12372 + 50 + 290.0002 + 68.9778 + 44.5),
                                        pixelHeight: 810,
                                        pixelWidth: 1440,
                                        sizes: "1748px",
                                        src: "https://framerusercontent.com/images/Mf9Px8f9GxY1nhZkPRGotoHNAQ.svg",
                                        srcSet: "https://framerusercontent.com/images/Mf9Px8f9GxY1nhZkPRGotoHNAQ.svg?scale-down-to=512 512w,https://framerusercontent.com/images/Mf9Px8f9GxY1nhZkPRGotoHNAQ.svg?scale-down-to=1024 1024w,https://framerusercontent.com/images/Mf9Px8f9GxY1nhZkPRGotoHNAQ.svg 1440w"
                                    },
                                    className: "framer-gl2ii2"
                                })
                            })
                        })]
                    })]
                }), e(f, {
                    breakpoint: o,
                    overrides: {
                        hIWTqwvPm: {
                            __framer__styleTransformEffectEnabled: void 0
                        }
                    },
                    children: t(fi, {
                        __framer__spring: {
                            bounce: .2,
                            damping: 60,
                            delay: 0,
                            duration: 1,
                            durationBasedSpring: !0,
                            ease: [.44, 0, .56, 1],
                            mass: 1,
                            stiffness: 500,
                            type: "spring"
                        },
                        __framer__styleTransformEffectEnabled: !0,
                        __framer__transformTargets: [{
                            target: {
                                opacity: .5,
                                rotate: 0,
                                rotateX: 0,
                                rotateY: 0,
                                scale: 0,
                                skewX: 0,
                                skewY: 0,
                                x: 0,
                                y: 58
                            }
                        }, {
                            ref: ct,
                            target: {
                                opacity: 1,
                                rotate: 0,
                                rotateX: 0,
                                rotateY: 0,
                                scale: 1,
                                skewX: 0,
                                skewY: 0,
                                x: 0,
                                y: 0
                            }
                        }],
                        __framer__transformTrigger: "onScrollTarget",
                        __framer__transformViewportThreshold: 1,
                        __perspectiveFX: !1,
                        __targetOpacity: 1,
                        className: "framer-17z7sjv",
                        id: Xn,
                        ref: Un,
                        children: [pt() && e(f, {
                            breakpoint: o,
                            overrides: {
                                jUuLb2ZS_: {
                                    children: t(r, {
                                        children: [e("p", {
                                            style: {
                                                "--font-selector": "R0Y7QmV2YW4tcmVndWxhcg==",
                                                "--framer-font-family": '"Bevan", "Bevan Placeholder", serif',
                                                "--framer-font-size": "25px",
                                                "--framer-text-alignment": "center",
                                                "--framer-text-color": "rgb(255, 255, 255)"
                                            },
                                            children: " DEMOCRATISE "
                                        }), e("p", {
                                            style: {
                                                "--font-selector": "R0Y7QmV2YW4tcmVndWxhcg==",
                                                "--framer-font-family": '"Bevan", "Bevan Placeholder", serif',
                                                "--framer-font-size": "25px",
                                                "--framer-text-alignment": "center",
                                                "--framer-text-color": "rgb(255, 255, 255)"
                                            },
                                            children: "AI-DRIVEN"
                                        }), t("p", {
                                            style: {
                                                "--font-selector": "R0Y7QmV2YW4tcmVndWxhcg==",
                                                "--framer-font-family": '"Bevan", "Bevan Placeholder", serif',
                                                "--framer-font-size": "25px",
                                                "--framer-text-alignment": "center",
                                                "--framer-text-color": "rgb(255, 255, 255)"
                                            },
                                            children: [" STYLE  ", e("span", {
                                                style: {
                                                    "--framer-text-color": "rgb(140, 82, 255)"
                                                },
                                                children: " \u25A0 "
                                            }), " AND PERSONALIZATION "]
                                        }), t("p", {
                                            style: {
                                                "--font-selector": "R0Y7QmV2YW4tcmVndWxhcg==",
                                                "--framer-font-family": '"Bevan", "Bevan Placeholder", serif',
                                                "--framer-font-size": "25px",
                                                "--framer-text-alignment": "center",
                                                "--framer-text-color": "rgb(255, 255, 255)"
                                            },
                                            children: ["TO  ", e("span", {
                                                style: {
                                                    "--framer-text-color": "rgb(140, 82, 255)"
                                                },
                                                children: "\u25A0"
                                            }), "  CREATE "]
                                        }), t("p", {
                                            style: {
                                                "--font-selector": "R0Y7QmV2YW4tcmVndWxhcg==",
                                                "--framer-font-family": '"Bevan", "Bevan Placeholder", serif',
                                                "--framer-font-size": "25px",
                                                "--framer-text-alignment": "center",
                                                "--framer-text-color": "rgb(255, 255, 255)"
                                            },
                                            children: ["A MORE  ", e("span", {
                                                style: {
                                                    "--framer-text-color": "rgb(140, 82, 255)"
                                                },
                                                children: "\u25A0"
                                            }), "     SUSTAINABLE,"]
                                        }), e("p", {
                                            style: {
                                                "--font-selector": "R0Y7QmV2YW4tcmVndWxhcg==",
                                                "--framer-font-family": '"Bevan", "Bevan Placeholder", serif',
                                                "--framer-font-size": "25px",
                                                "--framer-text-alignment": "center",
                                                "--framer-text-color": "rgb(255, 255, 255)"
                                            },
                                            children: "CIRCULAR "
                                        }), e("p", {
                                            style: {
                                                "--font-selector": "R0Y7QmV2YW4tcmVndWxhcg==",
                                                "--framer-font-family": '"Bevan", "Bevan Placeholder", serif',
                                                "--framer-font-size": "25px",
                                                "--framer-text-alignment": "center",
                                                "--framer-text-color": "rgb(255, 255, 255)"
                                            },
                                            children: "FASHION ECONOMY!"
                                        })]
                                    })
                                }
                            },
                            children: e(i, {
                                __fromCanvasComponent: !0,
                                children: t(r, {
                                    children: [e("p", {
                                        style: {
                                            "--font-selector": "R0Y7QmV2YW4tcmVndWxhcg==",
                                            "--framer-font-family": '"Bevan", "Bevan Placeholder", serif',
                                            "--framer-font-size": "89px",
                                            "--framer-text-alignment": "center",
                                            "--framer-text-color": "rgb(255, 255, 255)"
                                        },
                                        children: " DEMOCRATISE "
                                    }), e("p", {
                                        style: {
                                            "--font-selector": "R0Y7QmV2YW4tcmVndWxhcg==",
                                            "--framer-font-family": '"Bevan", "Bevan Placeholder", serif',
                                            "--framer-font-size": "89px",
                                            "--framer-text-alignment": "center",
                                            "--framer-text-color": "rgb(255, 255, 255)"
                                        },
                                        children: "AI-DRIVEN"
                                    }), t("p", {
                                        style: {
                                            "--font-selector": "R0Y7QmV2YW4tcmVndWxhcg==",
                                            "--framer-font-family": '"Bevan", "Bevan Placeholder", serif',
                                            "--framer-font-size": "89px",
                                            "--framer-text-alignment": "center",
                                            "--framer-text-color": "rgb(255, 255, 255)"
                                        },
                                        children: [" STYLE  ", e("span", {
                                            style: {
                                                "--framer-text-color": "rgb(140, 82, 255)"
                                            },
                                            children: " \u25A0 "
                                        }), " AND PERSONALIZATION "]
                                    }), t("p", {
                                        style: {
                                            "--font-selector": "R0Y7QmV2YW4tcmVndWxhcg==",
                                            "--framer-font-family": '"Bevan", "Bevan Placeholder", serif',
                                            "--framer-font-size": "89px",
                                            "--framer-text-alignment": "center",
                                            "--framer-text-color": "rgb(255, 255, 255)"
                                        },
                                        children: ["TO  ", e("span", {
                                            style: {
                                                "--framer-text-color": "rgb(140, 82, 255)"
                                            },
                                            children: "\u25A0"
                                        }), "  CREATE A MORE  ", e("span", {
                                            style: {
                                                "--framer-text-color": "rgb(140, 82, 255)"
                                            },
                                            children: "\u25A0"
                                        }), "     SUSTAINABLE,"]
                                    }), e("p", {
                                        style: {
                                            "--font-selector": "R0Y7QmV2YW4tcmVndWxhcg==",
                                            "--framer-font-family": '"Bevan", "Bevan Placeholder", serif',
                                            "--framer-font-size": "89px",
                                            "--framer-text-alignment": "center",
                                            "--framer-text-color": "rgb(255, 255, 255)"
                                        },
                                        children: "CIRCULAR "
                                    }), e("p", {
                                        style: {
                                            "--font-selector": "R0Y7QmV2YW4tcmVndWxhcg==",
                                            "--framer-font-family": '"Bevan", "Bevan Placeholder", serif',
                                            "--framer-font-size": "89px",
                                            "--framer-text-alignment": "center",
                                            "--framer-text-color": "rgb(255, 255, 255)"
                                        },
                                        children: "FASHION ECONOMY!"
                                    })]
                                }),
                                className: "framer-q88r2 hidden-z10mb2",
                                fonts: ["GF;Bevan-regular"],
                                transformTemplate: ir,
                                verticalAlignment: "top",
                                withExternalLayout: !0
                            })
                        }), t(p.div, {
                            className: "framer-1xuybu2",
                            children: [e(f, {
                                breakpoint: o,
                                overrides: {
                                    hIWTqwvPm: {
                                        background: {
                                            alt: "",
                                            fit: "fill",
                                            loading: s((n?.y || 0) + 0 + 13744 + 186 + 0),
                                            pixelHeight: 1200,
                                            pixelWidth: 1200,
                                            src: "https://framerusercontent.com/images/3weH5CUqelwVTBS7pTDWrMpGV4M.png"
                                        }
                                    },
                                    jUuLb2ZS_: {
                                        background: {
                                            alt: "",
                                            fit: "fill",
                                            loading: s((n?.y || 0) + 0 + 11931 + -1 + 113),
                                            pixelHeight: 1200,
                                            pixelWidth: 1200,
                                            src: "https://framerusercontent.com/images/3weH5CUqelwVTBS7pTDWrMpGV4M.png"
                                        }
                                    }
                                },
                                children: e(I, {
                                    __framer__loop: Wr,
                                    __framer__loopEffectEnabled: !0,
                                    __framer__loopPauseOffscreen: !1,
                                    __framer__loopRepeatDelay: 0,
                                    __framer__loopRepeatType: "mirror",
                                    __framer__loopTransition: Cr,
                                    __perspectiveFX: !1,
                                    __targetOpacity: 1,
                                    background: {
                                        alt: "",
                                        fit: "fill",
                                        loading: s((n?.y || 0) + 0 + 14120 + 310.5 + 47),
                                        pixelHeight: 1200,
                                        pixelWidth: 1200,
                                        src: "https://framerusercontent.com/images/3weH5CUqelwVTBS7pTDWrMpGV4M.png"
                                    },
                                    className: "framer-137pxu2"
                                })
                            }), e(f, {
                                breakpoint: o,
                                overrides: {
                                    hIWTqwvPm: {
                                        background: {
                                            alt: "",
                                            fit: "fill",
                                            loading: s((n?.y || 0) + 0 + 13744 + 186 + 296 - 162),
                                            pixelHeight: 640,
                                            pixelWidth: 640,
                                            src: "https://framerusercontent.com/images/aVNOZIv9x9aEEkOxCwrnKvfzLM4.png"
                                        }
                                    },
                                    jUuLb2ZS_: {
                                        background: {
                                            alt: "",
                                            fit: "fill",
                                            loading: s((n?.y || 0) + 0 + 11931 + -1 + 174.5),
                                            pixelHeight: 640,
                                            pixelWidth: 640,
                                            src: "https://framerusercontent.com/images/aVNOZIv9x9aEEkOxCwrnKvfzLM4.png"
                                        }
                                    }
                                },
                                children: e(I, {
                                    __framer__loop: Wr,
                                    __framer__loopEffectEnabled: !0,
                                    __framer__loopPauseOffscreen: !1,
                                    __framer__loopRepeatDelay: 1,
                                    __framer__loopRepeatType: "mirror",
                                    __framer__loopTransition: Cr,
                                    __perspectiveFX: !1,
                                    __targetOpacity: 1,
                                    background: {
                                        alt: "",
                                        fit: "fill",
                                        loading: s((n?.y || 0) + 0 + 14120 + 310.5 + 515 - 265.5),
                                        pixelHeight: 640,
                                        pixelWidth: 640,
                                        src: "https://framerusercontent.com/images/aVNOZIv9x9aEEkOxCwrnKvfzLM4.png"
                                    },
                                    className: "framer-1ofrke4"
                                })
                            }), e(f, {
                                breakpoint: o,
                                overrides: {
                                    hIWTqwvPm: {
                                        background: {
                                            alt: "",
                                            fit: "fill",
                                            loading: s((n?.y || 0) + 0 + 13744 + 186 + 296 - 92),
                                            pixelHeight: 1200,
                                            pixelWidth: 1200,
                                            src: "https://framerusercontent.com/images/aVXJQuE6gwrBslh9aFOKb18SmIs.png"
                                        }
                                    },
                                    jUuLb2ZS_: {
                                        background: {
                                            alt: "",
                                            fit: "fill",
                                            loading: s((n?.y || 0) + 0 + 11931 + -1 + 381 - 175),
                                            pixelHeight: 1200,
                                            pixelWidth: 1200,
                                            src: "https://framerusercontent.com/images/aVXJQuE6gwrBslh9aFOKb18SmIs.png"
                                        }
                                    }
                                },
                                children: e(I, {
                                    __framer__loop: Wr,
                                    __framer__loopEffectEnabled: !0,
                                    __framer__loopPauseOffscreen: !1,
                                    __framer__loopRepeatDelay: 2,
                                    __framer__loopRepeatType: "mirror",
                                    __framer__loopTransition: Cr,
                                    __perspectiveFX: !1,
                                    __targetOpacity: 1,
                                    background: {
                                        alt: "",
                                        fit: "fill",
                                        loading: s((n?.y || 0) + 0 + 14120 + 310.5 + 515 - 135),
                                        pixelHeight: 1200,
                                        pixelWidth: 1200,
                                        src: "https://framerusercontent.com/images/aVXJQuE6gwrBslh9aFOKb18SmIs.png"
                                    },
                                    className: "framer-1z0mszj"
                                })
                            })]
                        }), re() && e(i, {
                            __fromCanvasComponent: !0,
                            children: t(r, {
                                children: [e("p", {
                                    style: {
                                        "--font-selector": "R0Y7QmV2YW4tcmVndWxhcg==",
                                        "--framer-font-family": '"Bevan", "Bevan Placeholder", serif',
                                        "--framer-font-size": "45px",
                                        "--framer-line-height": "1.5em",
                                        "--framer-text-alignment": "center",
                                        "--framer-text-color": "rgb(255, 255, 255)"
                                    },
                                    children: " DEMOCRATISE "
                                }), e("p", {
                                    style: {
                                        "--font-selector": "R0Y7QmV2YW4tcmVndWxhcg==",
                                        "--framer-font-family": '"Bevan", "Bevan Placeholder", serif',
                                        "--framer-font-size": "45px",
                                        "--framer-line-height": "1.5em",
                                        "--framer-text-alignment": "center",
                                        "--framer-text-color": "rgb(255, 255, 255)"
                                    },
                                    children: "AI-DRIVEN "
                                }), t("p", {
                                    style: {
                                        "--font-selector": "R0Y7QmV2YW4tcmVndWxhcg==",
                                        "--framer-font-family": '"Bevan", "Bevan Placeholder", serif',
                                        "--framer-font-size": "45px",
                                        "--framer-line-height": "1.5em",
                                        "--framer-text-alignment": "center",
                                        "--framer-text-color": "rgb(255, 255, 255)"
                                    },
                                    children: ["STYLE ", e("span", {
                                        style: {
                                            "--font-selector": "R0Y7T3BlbiBTYW5zLXJlZ3VsYXI=",
                                            "--framer-font-family": '"Open Sans", "Open Sans Placeholder", sans-serif',
                                            "--framer-text-color": "rgb(110, 73, 193)"
                                        },
                                        children: "\u25A0 "
                                    }), "AND PERSONALIZATION "]
                                }), t("p", {
                                    style: {
                                        "--font-selector": "R0Y7QmV2YW4tcmVndWxhcg==",
                                        "--framer-font-family": '"Bevan", "Bevan Placeholder", serif',
                                        "--framer-font-size": "45px",
                                        "--framer-line-height": "1.5em",
                                        "--framer-text-alignment": "center",
                                        "--framer-text-color": "rgb(255, 255, 255)"
                                    },
                                    children: ["TO ", e("span", {
                                        style: {
                                            "--font-selector": "R0Y7T3BlbiBTYW5zLXJlZ3VsYXI=",
                                            "--framer-font-family": '"Open Sans", "Open Sans Placeholder", sans-serif',
                                            "--framer-text-color": "rgb(110, 73, 193)"
                                        },
                                        children: "\u25A0 "
                                    }), "CREATE A "]
                                }), t("p", {
                                    style: {
                                        "--font-selector": "R0Y7QmV2YW4tcmVndWxhcg==",
                                        "--framer-font-family": '"Bevan", "Bevan Placeholder", serif',
                                        "--framer-font-size": "45px",
                                        "--framer-line-height": "1.5em",
                                        "--framer-text-alignment": "center",
                                        "--framer-text-color": "rgb(255, 255, 255)"
                                    },
                                    children: ["MORE ", e("span", {
                                        style: {
                                            "--font-selector": "R0Y7T3BlbiBTYW5zLXJlZ3VsYXI=",
                                            "--framer-font-family": '"Open Sans", "Open Sans Placeholder", sans-serif',
                                            "--framer-text-color": "rgb(110, 73, 193)"
                                        },
                                        children: "\u25A0"
                                    }), "  "]
                                }), e("p", {
                                    style: {
                                        "--font-selector": "R0Y7QmV2YW4tcmVndWxhcg==",
                                        "--framer-font-family": '"Bevan", "Bevan Placeholder", serif',
                                        "--framer-font-size": "45px",
                                        "--framer-line-height": "1.5em",
                                        "--framer-text-alignment": "center",
                                        "--framer-text-color": "rgb(255, 255, 255)"
                                    },
                                    children: "SUSTAINABLE, CIRCULAR"
                                }), e("p", {
                                    style: {
                                        "--font-selector": "R0Y7QmV2YW4tcmVndWxhcg==",
                                        "--framer-font-family": '"Bevan", "Bevan Placeholder", serif',
                                        "--framer-font-size": "45px",
                                        "--framer-line-height": "1.5em",
                                        "--framer-text-alignment": "center",
                                        "--framer-text-color": "rgb(255, 255, 255)"
                                    },
                                    children: " FASHION ECONOMY!"
                                })]
                            }),
                            className: "framer-1ecv4ql hidden-uh1o9d hidden-f5yxu5",
                            fonts: ["GF;Bevan-regular", "GF;Open Sans-regular"],
                            verticalAlignment: "center",
                            withExternalLayout: !0
                        }), pt() && e(f, {
                            breakpoint: o,
                            overrides: {
                                jUuLb2ZS_: {
                                    children: e(r, {
                                        children: e("p", {
                                            style: {
                                                "--font-selector": "R0Y7T3BlbiBTYW5zLTcwMA==",
                                                "--framer-font-family": '"Open Sans", "Open Sans Placeholder", sans-serif',
                                                "--framer-font-size": "7px",
                                                "--framer-font-weight": "700",
                                                "--framer-line-height": "1.5em",
                                                "--framer-text-alignment": "center",
                                                "--framer-text-color": "rgb(255, 255, 255)"
                                            },
                                            children: "OUR MISSION IS TO"
                                        })
                                    }),
                                    transformTemplate: P
                                }
                            },
                            children: e(i, {
                                __fromCanvasComponent: !0,
                                children: e(r, {
                                    children: e("p", {
                                        style: {
                                            "--font-selector": "R0Y7T3BlbiBTYW5zLTcwMA==",
                                            "--framer-font-family": '"Open Sans", "Open Sans Placeholder", sans-serif',
                                            "--framer-font-size": "13px",
                                            "--framer-font-weight": "700",
                                            "--framer-line-height": "1.5em",
                                            "--framer-text-alignment": "center",
                                            "--framer-text-color": "rgb(255, 255, 255)"
                                        },
                                        children: "OUR MISSION IS TO"
                                    })
                                }),
                                className: "framer-q3kq32 hidden-z10mb2",
                                fonts: ["GF;Open Sans-700"],
                                id: jn,
                                ref: ct,
                                verticalAlignment: "top",
                                withExternalLayout: !0
                            })
                        }), dt() && e(f, {
                            breakpoint: o,
                            overrides: {
                                hIWTqwvPm: {
                                    background: {
                                        alt: "",
                                        fit: "fill",
                                        loading: s((n?.y || 0) + 0 + 13744 + 30),
                                        pixelHeight: 1440,
                                        pixelWidth: 1440,
                                        src: "https://framerusercontent.com/images/wEDaJSqh3MsJnu67DrLfBckNiOQ.gif"
                                    }
                                }
                            },
                            children: e(g, {
                                background: {
                                    alt: "",
                                    fit: "fill",
                                    loading: s((n?.y || 0) + 0 + 14120 + 82),
                                    pixelHeight: 1440,
                                    pixelWidth: 1440,
                                    src: "https://framerusercontent.com/images/wEDaJSqh3MsJnu67DrLfBckNiOQ.gif"
                                },
                                className: "framer-40zkvf hidden-f5yxu5"
                            })
                        }), dt() && e(f, {
                            breakpoint: o,
                            overrides: {
                                hIWTqwvPm: {
                                    background: {
                                        alt: "",
                                        fit: "fill",
                                        loading: s((n?.y || 0) + 0 + 13744 + 145),
                                        pixelHeight: 1440,
                                        pixelWidth: 1440,
                                        src: "https://framerusercontent.com/images/wEDaJSqh3MsJnu67DrLfBckNiOQ.gif"
                                    }
                                }
                            },
                            children: e(g, {
                                background: {
                                    alt: "",
                                    fit: "fill",
                                    loading: s((n?.y || 0) + 0 + 14120 + 247),
                                    pixelHeight: 1440,
                                    pixelWidth: 1440,
                                    src: "https://framerusercontent.com/images/wEDaJSqh3MsJnu67DrLfBckNiOQ.gif"
                                },
                                className: "framer-17anys9 hidden-f5yxu5"
                            })
                        }), E() && e(f, {
                            breakpoint: o,
                            overrides: {
                                jUuLb2ZS_: {
                                    background: {
                                        alt: "",
                                        fit: "fill",
                                        loading: s((n?.y || 0) + 0 + 11931 + 84),
                                        pixelHeight: 1440,
                                        pixelWidth: 1440,
                                        src: "https://framerusercontent.com/images/wEDaJSqh3MsJnu67DrLfBckNiOQ.gif"
                                    }
                                }
                            },
                            children: e(g, {
                                background: {
                                    alt: "",
                                    fit: "fill",
                                    pixelHeight: 1440,
                                    pixelWidth: 1440,
                                    src: "https://framerusercontent.com/images/wEDaJSqh3MsJnu67DrLfBckNiOQ.gif"
                                },
                                className: "framer-16j4j9j hidden-uh1o9d hidden-z10mb2"
                            })
                        }), E() && e(f, {
                            breakpoint: o,
                            overrides: {
                                jUuLb2ZS_: {
                                    background: {
                                        alt: "",
                                        fit: "fill",
                                        loading: s((n?.y || 0) + 0 + 11931 + 15),
                                        pixelHeight: 1440,
                                        pixelWidth: 1440,
                                        src: "https://framerusercontent.com/images/wEDaJSqh3MsJnu67DrLfBckNiOQ.gif"
                                    }
                                }
                            },
                            children: e(g, {
                                background: {
                                    alt: "",
                                    fit: "fill",
                                    pixelHeight: 1440,
                                    pixelWidth: 1440,
                                    src: "https://framerusercontent.com/images/wEDaJSqh3MsJnu67DrLfBckNiOQ.gif"
                                },
                                className: "framer-1g77uag hidden-uh1o9d hidden-z10mb2"
                            })
                        }), re() && e(i, {
                            __fromCanvasComponent: !0,
                            children: e(r, {
                                children: e("p", {
                                    style: {
                                        "--font-selector": "R0Y7T3BlbiBTYW5zLTcwMA==",
                                        "--framer-font-family": '"Open Sans", "Open Sans Placeholder", sans-serif',
                                        "--framer-font-size": "13px",
                                        "--framer-font-weight": "700",
                                        "--framer-line-height": "1.5em",
                                        "--framer-text-alignment": "center",
                                        "--framer-text-color": "rgb(255, 255, 255)"
                                    },
                                    children: "OUR MISSION IS TO"
                                })
                            }),
                            className: "framer-g29xyi hidden-uh1o9d hidden-f5yxu5",
                            fonts: ["GF;Open Sans-700"],
                            id: Pn,
                            ref: Mn,
                            verticalAlignment: "top",
                            withExternalLayout: !0
                        })]
                    })
                }), t("div", {
                    className: "framer-aa38u3",
                    children: [e("div", {
                        className: "framer-19zefj2",
                        id: qn,
                        ref: Hn,
                        children: e("div", {
                            className: "framer-nc2ah7",
                            children: e(f, {
                                breakpoint: o,
                                overrides: {
                                    hIWTqwvPm: {
                                        background: {
                                            alt: "",
                                            fit: "fill",
                                            loading: s((n?.y || 0) + 0 + 14412 + -2.6841 + 0 + 0 + 294 - 206.5),
                                            pixelHeight: 3375,
                                            pixelWidth: 6e3,
                                            sizes: "208.0286px",
                                            src: "https://framerusercontent.com/images/HxYt6NJYmQXLPkov9ODcDyrztTU.png",
                                            srcSet: "https://framerusercontent.com/images/HxYt6NJYmQXLPkov9ODcDyrztTU.png?scale-down-to=512 512w,https://framerusercontent.com/images/HxYt6NJYmQXLPkov9ODcDyrztTU.png?scale-down-to=1024 1024w,https://framerusercontent.com/images/HxYt6NJYmQXLPkov9ODcDyrztTU.png?scale-down-to=2048 2048w,https://framerusercontent.com/images/HxYt6NJYmQXLPkov9ODcDyrztTU.png?scale-down-to=4096 4096w,https://framerusercontent.com/images/HxYt6NJYmQXLPkov9ODcDyrztTU.png 6000w"
                                        }
                                    },
                                    jUuLb2ZS_: {
                                        background: {
                                            alt: "",
                                            fit: "fill",
                                            loading: s((n?.y || 0) + 0 + 12313 + -2.0596 + 0 + 0 + 216 - 173),
                                            pixelHeight: 3375,
                                            pixelWidth: 6e3,
                                            sizes: "183px",
                                            src: "https://framerusercontent.com/images/HxYt6NJYmQXLPkov9ODcDyrztTU.png",
                                            srcSet: "https://framerusercontent.com/images/HxYt6NJYmQXLPkov9ODcDyrztTU.png?scale-down-to=512 512w,https://framerusercontent.com/images/HxYt6NJYmQXLPkov9ODcDyrztTU.png?scale-down-to=1024 1024w,https://framerusercontent.com/images/HxYt6NJYmQXLPkov9ODcDyrztTU.png?scale-down-to=2048 2048w,https://framerusercontent.com/images/HxYt6NJYmQXLPkov9ODcDyrztTU.png?scale-down-to=4096 4096w,https://framerusercontent.com/images/HxYt6NJYmQXLPkov9ODcDyrztTU.png 6000w"
                                        }
                                    }
                                },
                                children: e(g, {
                                    background: {
                                        alt: "",
                                        fit: "fill",
                                        loading: s((n?.y || 0) + 0 + 15346 + -2.1395 + 0 + 0 + 281 - 280),
                                        pixelHeight: 3375,
                                        pixelWidth: 6e3,
                                        sizes: "424px",
                                        src: "https://framerusercontent.com/images/HxYt6NJYmQXLPkov9ODcDyrztTU.png",
                                        srcSet: "https://framerusercontent.com/images/HxYt6NJYmQXLPkov9ODcDyrztTU.png?scale-down-to=512 512w,https://framerusercontent.com/images/HxYt6NJYmQXLPkov9ODcDyrztTU.png?scale-down-to=1024 1024w,https://framerusercontent.com/images/HxYt6NJYmQXLPkov9ODcDyrztTU.png?scale-down-to=2048 2048w,https://framerusercontent.com/images/HxYt6NJYmQXLPkov9ODcDyrztTU.png?scale-down-to=4096 4096w,https://framerusercontent.com/images/HxYt6NJYmQXLPkov9ODcDyrztTU.png 6000w"
                                    },
                                    className: "framer-1ya4hkd"
                                })
                            })
                        })
                    }), t("div", {
                        className: "framer-pg5pnc",
                        children: [e(f, {
                            breakpoint: o,
                            overrides: {
                                hIWTqwvPm: {
                                    children: t(r, {
                                        children: [e("p", {
                                            style: {
                                                "--font-selector": "R0Y7QmV2YW4tcmVndWxhcg==",
                                                "--framer-font-family": '"Bevan", "Bevan Placeholder", serif',
                                                "--framer-font-size": "44px",
                                                "--framer-text-alignment": "center"
                                            },
                                            children: "READY TO BOOST "
                                        }), e("p", {
                                            style: {
                                                "--font-selector": "R0Y7QmV2YW4tcmVndWxhcg==",
                                                "--framer-font-family": '"Bevan", "Bevan Placeholder", serif',
                                                "--framer-font-size": "44px",
                                                "--framer-text-alignment": "center"
                                            },
                                            children: "YOUR STYLING GAME? "
                                        })]
                                    })
                                },
                                jUuLb2ZS_: {
                                    children: t(r, {
                                        children: [e("p", {
                                            style: {
                                                "--font-selector": "R0Y7QmV2YW4tcmVndWxhcg==",
                                                "--framer-font-family": '"Bevan", "Bevan Placeholder", serif',
                                                "--framer-font-size": "21px",
                                                "--framer-text-alignment": "center"
                                            },
                                            children: "READY TO BOOST "
                                        }), e("p", {
                                            style: {
                                                "--font-selector": "R0Y7QmV2YW4tcmVndWxhcg==",
                                                "--framer-font-family": '"Bevan", "Bevan Placeholder", serif',
                                                "--framer-font-size": "21px",
                                                "--framer-text-alignment": "center"
                                            },
                                            children: "YOUR STYLING GAME? "
                                        })]
                                    })
                                }
                            },
                            children: e(i, {
                                __fromCanvasComponent: !0,
                                children: t(r, {
                                    children: [e("p", {
                                        style: {
                                            "--font-selector": "R0Y7QmV2YW4tcmVndWxhcg==",
                                            "--framer-font-family": '"Bevan", "Bevan Placeholder", serif',
                                            "--framer-font-size": "71px",
                                            "--framer-text-alignment": "center"
                                        },
                                        children: "READY TO BOOST "
                                    }), e("p", {
                                        style: {
                                            "--font-selector": "R0Y7QmV2YW4tcmVndWxhcg==",
                                            "--framer-font-family": '"Bevan", "Bevan Placeholder", serif',
                                            "--framer-font-size": "71px",
                                            "--framer-text-alignment": "center"
                                        },
                                        children: "YOUR STYLING GAME? "
                                    })]
                                }),
                                className: "framer-wbdrk",
                                fonts: ["GF;Bevan-regular"],
                                verticalAlignment: "top",
                                withExternalLayout: !0
                            })
                        }), e(f, {
                            breakpoint: o,
                            overrides: {
                                hIWTqwvPm: {
                                    children: e(r, {
                                        children: e("p", {
                                            style: {
                                                "--font-selector": "R0Y7T3BlbiBTYW5zLTcwMA==",
                                                "--framer-font-family": '"Open Sans", "Open Sans Placeholder", sans-serif',
                                                "--framer-font-size": "18px",
                                                "--framer-font-weight": "700",
                                                "--framer-text-alignment": "center",
                                                "--framer-text-color": "rgb(255, 252, 252)"
                                            },
                                            children: "Join our waiting list or talk to our team if you have any questions! "
                                        })
                                    })
                                },
                                jUuLb2ZS_: {
                                    children: e(r, {
                                        children: e("p", {
                                            style: {
                                                "--font-selector": "R0Y7T3BlbiBTYW5zLTcwMA==",
                                                "--framer-font-family": '"Open Sans", "Open Sans Placeholder", sans-serif',
                                                "--framer-font-size": "8px",
                                                "--framer-font-weight": "700",
                                                "--framer-text-alignment": "center",
                                                "--framer-text-color": "rgb(255, 252, 252)"
                                            },
                                            children: "Join our waiting list or talk to our team if you have any questions! "
                                        })
                                    })
                                }
                            },
                            children: e(i, {
                                __fromCanvasComponent: !0,
                                children: e(r, {
                                    children: e("p", {
                                        style: {
                                            "--font-selector": "R0Y7T3BlbiBTYW5zLTcwMA==",
                                            "--framer-font-family": '"Open Sans", "Open Sans Placeholder", sans-serif',
                                            "--framer-font-size": "20px",
                                            "--framer-font-weight": "700",
                                            "--framer-text-alignment": "center",
                                            "--framer-text-color": "rgb(255, 252, 252)"
                                        },
                                        children: "Join our waiting list or talk to our team if you have any questions! "
                                    })
                                }),
                                className: "framer-10mpfro",
                                fonts: ["GF;Open Sans-700"],
                                verticalAlignment: "top",
                                withExternalLayout: !0
                            })
                        }), e(vt, {
                            action: "https://api.framer.com/forms/v1/forms/853ffd8a-bdbe-464e-83b1-3b6f10dc6415/submit",
                            className: "framer-1lj5fmb",
                            nodeId: "W7TJmwe8P",
                            children: Zn => t(ht, {
                                children: [t("label", {
                                    className: "framer-hipyx8",
                                    children: [e(i, {
                                        __fromCanvasComponent: !0,
                                        children: e(r, {
                                            children: e("p", {
                                                style: {
                                                    "--font-selector": "SW50ZXItTWVkaXVt",
                                                    "--framer-font-family": '"Inter", "Inter Placeholder", sans-serif',
                                                    "--framer-font-size": "12px",
                                                    "--framer-font-weight": "500",
                                                    "--framer-text-color": "rgb(255, 255, 255)"
                                                },
                                                children: "Name"
                                            })
                                        }),
                                        className: "framer-18l427n",
                                        fonts: ["Inter-Medium"],
                                        verticalAlignment: "top",
                                        withExternalLayout: !0
                                    }), e(rr, {
                                        className: "framer-q4vqpw",
                                        inputName: "Name",
                                        placeholder: "",
                                        type: "text"
                                    })]
                                }), t("label", {
                                    className: "framer-utn562",
                                    children: [e(i, {
                                        __fromCanvasComponent: !0,
                                        children: e(r, {
                                            children: e("p", {
                                                style: {
                                                    "--font-selector": "SW50ZXItTWVkaXVt",
                                                    "--framer-font-family": '"Inter", "Inter Placeholder", sans-serif',
                                                    "--framer-font-size": "12px",
                                                    "--framer-font-weight": "500",
                                                    "--framer-text-color": "rgb(255, 255, 255)"
                                                },
                                                children: "Email"
                                            })
                                        }),
                                        className: "framer-l6ds24",
                                        fonts: ["Inter-Medium"],
                                        verticalAlignment: "top",
                                        withExternalLayout: !0
                                    }), e(rr, {
                                        className: "framer-10gtzy9",
                                        inputName: "Email",
                                        placeholder: "",
                                        type: "email"
                                    })]
                                }), t("label", {
                                    className: "framer-1wjnsyw",
                                    children: [e(i, {
                                        __fromCanvasComponent: !0,
                                        children: e(r, {
                                            children: e("p", {
                                                style: {
                                                    "--font-selector": "SW50ZXItTWVkaXVt",
                                                    "--framer-font-family": '"Inter", "Inter Placeholder", sans-serif',
                                                    "--framer-font-size": "12px",
                                                    "--framer-font-weight": "500",
                                                    "--framer-text-color": "rgb(255, 255, 255)"
                                                },
                                                children: "Message"
                                            })
                                        }),
                                        className: "framer-1qlh4z9",
                                        fonts: ["Inter-Medium"],
                                        verticalAlignment: "top",
                                        withExternalLayout: !0
                                    }), e(rr, {
                                        className: "framer-i8xdc8",
                                        inputName: "Message",
                                        placeholder: "",
                                        type: "textarea"
                                    })]
                                }), t("label", {
                                    className: "framer-1q4m86x",
                                    children: [e(Tt, {
                                        className: "framer-1dryl97",
                                        defaultChecked: !1,
                                        inputName: "Newsletter",
                                        type: "checkbox"
                                    }), e(i, {
                                        __fromCanvasComponent: !0,
                                        children: e(r, {
                                            children: e("p", {
                                                style: {
                                                    "--font-selector": "SW50ZXItTWVkaXVt",
                                                    "--framer-font-family": '"Inter", "Inter Placeholder", sans-serif',
                                                    "--framer-font-size": "12px",
                                                    "--framer-font-weight": "500",
                                                    "--framer-text-color": "rgb(255, 255, 255)"
                                                },
                                                children: "Subscribe to Newsletter"
                                            })
                                        }),
                                        className: "framer-3phft0",
                                        fonts: ["Inter-Medium"],
                                        verticalAlignment: "top",
                                        withExternalLayout: !0
                                    })]
                                }), e(f, {
                                    breakpoint: o,
                                    overrides: {
                                        jUuLb2ZS_: {
                                            width: "283px"
                                        }
                                    },
                                    children: e(ze, {
                                        height: 40,
                                        width: "591px",
                                        children: e(Be, {
                                            className: "framer-1stpjkv-container",
                                            nodeId: "JBCnt_FUl",
                                            scopeId: "Z9xpqCjmE",
                                            children: e(Yr, {
                                                height: "100%",
                                                id: "JBCnt_FUl",
                                                layoutId: "JBCnt_FUl",
                                                style: {
                                                    height: "100%",
                                                    width: "100%"
                                                },
                                                type: "submit",
                                                variant: hi(Zn, {
                                                    error: "J_GwbDXLO",
                                                    incomplete: "BdFFQnJT_",
                                                    pending: "vqjq_gDvV",
                                                    success: "DrEOuWleU"
                                                }, "vqjq_gDvV"),
                                                width: "100%"
                                            })
                                        })
                                    })
                                })]
                            })
                        })]
                    })]
                }), e("div", {
                    className: "framer-v8mk4j",
                    id: Dn,
                    ref: Gn,
                    children: t("div", {
                        className: "framer-1rd4anb",
                        "data-border": !0,
                        "data-framer-name": "Footer",
                        children: [t("div", {
                            className: "framer-13idvb8",
                            children: [e("div", {
                                className: "framer-1ah5x78",
                                children: e(f, {
                                    breakpoint: o,
                                    overrides: {
                                        jUuLb2ZS_: {
                                            background: {
                                                alt: "",
                                                fit: "fill",
                                                pixelHeight: 3316,
                                                pixelWidth: 16202,
                                                sizes: "136px",
                                                src: "https://framerusercontent.com/images/un1bYcm0W74lrQ8GACd9u3LvpvE.png",
                                                srcSet: "https://framerusercontent.com/images/un1bYcm0W74lrQ8GACd9u3LvpvE.png?scale-down-to=512 512w,https://framerusercontent.com/images/un1bYcm0W74lrQ8GACd9u3LvpvE.png?scale-down-to=1024 1024w,https://framerusercontent.com/images/un1bYcm0W74lrQ8GACd9u3LvpvE.png?scale-down-to=2048 2048w,https://framerusercontent.com/images/un1bYcm0W74lrQ8GACd9u3LvpvE.png?scale-down-to=4096 4096w,https://framerusercontent.com/images/un1bYcm0W74lrQ8GACd9u3LvpvE.png 16202w"
                                            }
                                        }
                                    },
                                    children: e(g, {
                                        background: {
                                            alt: "",
                                            fit: "fill",
                                            pixelHeight: 3316,
                                            pixelWidth: 16202,
                                            sizes: "197px",
                                            src: "https://framerusercontent.com/images/un1bYcm0W74lrQ8GACd9u3LvpvE.png",
                                            srcSet: "https://framerusercontent.com/images/un1bYcm0W74lrQ8GACd9u3LvpvE.png?scale-down-to=512 512w,https://framerusercontent.com/images/un1bYcm0W74lrQ8GACd9u3LvpvE.png?scale-down-to=1024 1024w,https://framerusercontent.com/images/un1bYcm0W74lrQ8GACd9u3LvpvE.png?scale-down-to=2048 2048w,https://framerusercontent.com/images/un1bYcm0W74lrQ8GACd9u3LvpvE.png?scale-down-to=4096 4096w,https://framerusercontent.com/images/un1bYcm0W74lrQ8GACd9u3LvpvE.png 16202w"
                                        },
                                        className: "framer-srx16x"
                                    })
                                })
                            }), e(f, {
                                breakpoint: o,
                                overrides: {
                                    jUuLb2ZS_: {
                                        children: e(r, {
                                            children: t("p", {
                                                style: {
                                                    "--font-selector": "SW50ZXItVmFyaWFibGVWRj1JbTl3YzNvaUlESTBMQ0FpZDJkb2RDSWdOVEF3",
                                                    "--framer-font-family": '"Inter Variable", "Inter Placeholder", sans-serif',
                                                    "--framer-font-open-type-features": "'cv01' on, 'cv09' on, 'cv11' on, 'cv05' on",
                                                    "--framer-font-size": "8px",
                                                    "--framer-font-variation-axes": '"opsz" 24, "wght" 500',
                                                    "--framer-letter-spacing": "-0.01em",
                                                    "--framer-line-height": "1em",
                                                    "--framer-text-alignment": "left",
                                                    "--framer-text-color": "rgb(255, 255, 255)"
                                                },
                                                children: ["Revolutionizing fashion with AI-powered personal styling and virtual try-on technology. Discover your perfect style effortlessly.", e("br", {}), e("br", {}), e("br", {}), "\xA9 2025 StyleGenie\xAE. All rights reserved."]
                                            })
                                        })
                                    }
                                },
                                children: e(i, {
                                    __fromCanvasComponent: !0,
                                    children: e(r, {
                                        children: t("p", {
                                            style: {
                                                "--font-selector": "SW50ZXItVmFyaWFibGVWRj1JbTl3YzNvaUlESTBMQ0FpZDJkb2RDSWdOVEF3",
                                                "--framer-font-family": '"Inter Variable", "Inter Placeholder", sans-serif',
                                                "--framer-font-open-type-features": "'cv01' on, 'cv09' on, 'cv11' on, 'cv05' on",
                                                "--framer-font-size": "15px",
                                                "--framer-font-variation-axes": '"opsz" 24, "wght" 500',
                                                "--framer-letter-spacing": "-0.01em",
                                                "--framer-line-height": "1em",
                                                "--framer-text-alignment": "left",
                                                "--framer-text-color": "rgb(255, 255, 255)"
                                            },
                                            children: ["Revolutionizing fashion with AI-powered personal styling and virtual try-on technology. Discover your perfect style effortlessly.", e("br", {}), e("br", {}), e("br", {}), "\xA9 2025 StyleGenie\xAE. All rights reserved."]
                                        })
                                    }),
                                    className: "framer-np7w2p",
                                    fonts: ["Inter-Variable"],
                                    verticalAlignment: "top",
                                    withExternalLayout: !0
                                })
                            })]
                        }), t("div", {
                            className: "framer-175cs1u",
                            children: [t("div", {
                                className: "framer-1ux6aie",
                                children: [e("div", {
                                    className: "framer-1ezbl7o",
                                    children: e(X, {
                                        href: "https://www.instagram.com/stylegenieai/",
                                        motionChild: !0,
                                        nodeId: "I4n4hXJkH",
                                        openInNewTab: !0,
                                        scopeId: "Z9xpqCjmE",
                                        children: e(g, {
                                            as: "a",
                                            background: {
                                                alt: "",
                                                fit: "fill",
                                                pixelHeight: 2048,
                                                pixelWidth: 2048,
                                                src: "https://framerusercontent.com/images/HOIQh7GOGY8LZnJdblYO0AIFmqU.png"
                                            },
                                            className: "framer-1t40v9d framer-1lbkkwe"
                                        })
                                    })
                                }), e("div", {
                                    className: "framer-1huym3x",
                                    children: e(X, {
                                        href: "https://www.linkedin.com/company/stylegenie/posts/?feedView=all",
                                        motionChild: !0,
                                        nodeId: "y9ftHkqhZ",
                                        openInNewTab: !0,
                                        scopeId: "Z9xpqCjmE",
                                        children: e(g, {
                                            as: "a",
                                            background: {
                                                alt: "",
                                                fit: "fill",
                                                pixelHeight: 800,
                                                pixelWidth: 800,
                                                src: "https://framerusercontent.com/images/Lrs4WfUVyKRn50XE93nvz0VIwQ.png"
                                            },
                                            className: "framer-1jhggc0 framer-1lbkkwe"
                                        })
                                    })
                                }), e("div", {
                                    className: "framer-h7576z",
                                    children: e(g, {
                                        background: {
                                            alt: "",
                                            fit: "fill",
                                            pixelHeight: 600,
                                            pixelWidth: 600,
                                            src: "https://framerusercontent.com/images/dRuZzWoymWzwDg7v4sF7KBcT4.png"
                                        },
                                        className: "framer-1bos2om"
                                    })
                                })]
                            }), e("div", {
                                className: "framer-r0pktg",
                                children: e(f, {
                                    breakpoint: o,
                                    overrides: {
                                        jUuLb2ZS_: {
                                            children: e(r, {
                                                children: e("p", {
                                                    style: {
                                                        "--font-selector": "SW50ZXItVmFyaWFibGVWRj1JbTl3YzNvaUlESTBMQ0FpZDJkb2RDSWdOVEF3",
                                                        "--framer-font-family": '"Inter Variable", "Inter Placeholder", sans-serif',
                                                        "--framer-font-open-type-features": "'cv01' on, 'cv09' on, 'cv11' on, 'cv05' on",
                                                        "--framer-font-size": "7px",
                                                        "--framer-font-variation-axes": '"opsz" 24, "wght" 500',
                                                        "--framer-letter-spacing": "-0.01em",
                                                        "--framer-line-height": "1em",
                                                        "--framer-text-alignment": "center",
                                                        "--framer-text-color": "var(--token-8961fb69-0ea3-46ab-8b8e-1f9187ebd1a9, rgb(255, 255, 255))"
                                                    },
                                                    children: "Made with \u2764\uFE0F for fashion enthusiasts worldwide"
                                                })
                                            })
                                        }
                                    },
                                    children: e(i, {
                                        __fromCanvasComponent: !0,
                                        children: e(r, {
                                            children: e("p", {
                                                style: {
                                                    "--font-selector": "SW50ZXItVmFyaWFibGVWRj1JbTl3YzNvaUlESTBMQ0FpZDJkb2RDSWdOVEF3",
                                                    "--framer-font-family": '"Inter Variable", "Inter Placeholder", sans-serif',
                                                    "--framer-font-open-type-features": "'cv01' on, 'cv09' on, 'cv11' on, 'cv05' on",
                                                    "--framer-font-size": "15px",
                                                    "--framer-font-variation-axes": '"opsz" 24, "wght" 500',
                                                    "--framer-letter-spacing": "-0.01em",
                                                    "--framer-line-height": "1em",
                                                    "--framer-text-alignment": "center",
                                                    "--framer-text-color": "var(--token-8961fb69-0ea3-46ab-8b8e-1f9187ebd1a9, rgb(255, 255, 255))"
                                                },
                                                children: "Made with \u2764\uFE0F for fashion enthusiasts worldwide"
                                            })
                                        }),
                                        className: "framer-cof6k3",
                                        fonts: ["Inter-Variable"],
                                        verticalAlignment: "top",
                                        withExternalLayout: !0
                                    })
                                })
                            })]
                        })]
                    })
                })]
            }), e("div", {
                id: "overlay"
            })]
        })
    })
})
  , yi = ["@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }", ".framer-kfa3l.framer-1lbkkwe, .framer-kfa3l .framer-1lbkkwe { display: block; }", ".framer-kfa3l.framer-uh1o9d { align-content: center; align-items: center; background-color: #000100; display: flex; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: flex-start; overflow: visible; padding: 0px 20px 0px 20px; position: relative; width: 1400px; }", ".framer-kfa3l .framer-s1041m-container { flex: none; height: auto; left: 50%; max-width: 100%; position: fixed; top: 0px; transform: translateX(-50%); width: 100%; z-index: 2; }", ".framer-kfa3l .framer-byykkr { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: center; overflow: visible; padding: 0px; position: relative; width: 100%; z-index: 1; }", ".framer-kfa3l .framer-i1t814 { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: 2000px; justify-content: flex-start; max-width: 100%; overflow: visible; padding: 0px; position: sticky; top: 0px; width: 100%; z-index: 1; }", ".framer-kfa3l .framer-25cz4n { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: 100vh; justify-content: flex-start; overflow: visible; padding: 0px; position: sticky; top: 0px; width: 100%; z-index: 1; }", ".framer-kfa3l .framer-goticv { flex: none; height: 377px; left: calc(50.00000000000002% - 582px / 2); position: absolute; top: 150px; width: 582px; z-index: 3; }", ".framer-kfa3l .framer-beccjk-container { flex: none; height: 660px; position: sticky; top: 0px; width: 1360px; z-index: 1; }", ".framer-kfa3l .framer-1chij47 { align-content: center; align-items: center; display: flex; flex: 1 0 0px; flex-direction: row; flex-wrap: nowrap; gap: 0px; height: 1px; justify-content: center; padding: 0px 20px 150px 0px; position: relative; width: 100%; z-index: 3; }", ".framer-kfa3l .framer-11yv9vs { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: 56px; justify-content: center; padding: 3px; position: relative; width: 82px; }", ".framer-kfa3l .framer-12ibgdq { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 10px; height: 1089px; justify-content: flex-start; overflow: visible; padding: 0px; position: relative; width: 350px; z-index: 1; }", ".framer-kfa3l .framer-13k1162 { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 44px; height: 577px; justify-content: center; overflow: visible; padding: 0px; position: sticky; top: 0px; width: 112%; z-index: 1; }", ".framer-kfa3l .framer-15sb1cc { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 10px; height: 115px; justify-content: flex-start; overflow: visible; padding: 0px; position: relative; width: 100%; z-index: 1; }", ".framer-kfa3l .framer-yg2dgm, .framer-kfa3l .framer-10qm9c9, .framer-kfa3l .framer-11k71nj { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: center; overflow: visible; padding: 15px 0px 15px 0px; position: relative; width: 100%; }", ".framer-kfa3l .framer-xdcg00 { --framer-link-text-color: #0099ff; --framer-link-text-decoration: underline; flex: none; height: auto; position: relative; white-space: pre-wrap; width: 385px; word-break: break-word; word-wrap: break-word; z-index: 1; }", ".framer-kfa3l .framer-16o19yu, .framer-kfa3l .framer-15bw18o, .framer-kfa3l .framer-8rrk40, .framer-kfa3l .framer-lda471, .framer-kfa3l .framer-16efs0b, .framer-kfa3l .framer-1bqiyhg { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: hidden; padding: 0px; position: relative; width: 100%; }", ".framer-kfa3l .framer-kg1clb, .framer-kfa3l .framer-3lw1kd, .framer-kfa3l .framer-omw5sb, .framer-kfa3l .framer-1s0yav5, .framer-kfa3l .framer-kuvfj5, .framer-kfa3l .framer-46ah2l, .framer-kfa3l .framer-fvyyt2, .framer-kfa3l .framer-1e8qd7w, .framer-kfa3l .framer-19weock, .framer-kfa3l .framer-5jsvtk, .framer-kfa3l .framer-aqzhdl, .framer-kfa3l .framer-14akbzn, .framer-kfa3l .framer-kpgfz8, .framer-kfa3l .framer-1w1p1b5 { --framer-link-text-color: #0099ff; --framer-link-text-decoration: underline; flex: none; height: auto; position: relative; white-space: pre-wrap; width: 100%; word-break: break-word; word-wrap: break-word; z-index: 1; }", ".framer-kfa3l .framer-1ruvm1x { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: wrap; gap: 0px; height: 40%; justify-content: center; overflow: visible; padding: 0px; position: relative; width: 391px; z-index: 1; }", ".framer-kfa3l .framer-1rafmoy { bottom: 26px; flex: none; height: 68px; left: 42px; position: absolute; width: 61px; z-index: 1; }", ".framer-kfa3l .framer-fwex1c { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: 94%; justify-content: center; overflow: visible; padding: 0px; position: relative; width: 98%; z-index: 10; }", ".framer-kfa3l .framer-lzh2f, .framer-kfa3l .framer-hg2l27, .framer-kfa3l .framer-12dswl3 { align-content: center; align-items: center; border-bottom-left-radius: 31px; border-bottom-right-radius: 31px; border-top-left-radius: 31px; border-top-right-radius: 31px; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 0px; height: 86%; justify-content: center; overflow: visible; padding: 0px; position: relative; width: 24%; z-index: 10; }", ".framer-kfa3l .framer-14dh6i9-container { flex: none; height: 43%; mix-blend-mode: multiply; position: relative; width: 161%; z-index: 3; }", ".framer-kfa3l .framer-trj8mo { flex: none; height: 48px; left: 278px; position: absolute; top: 41px; width: 67px; z-index: 1; }", ".framer-kfa3l .framer-pgifn4 { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 10px; height: 100px; justify-content: flex-start; overflow: visible; padding: 25px 0px 0px 0px; position: relative; width: 100%; z-index: -1; }", ".framer-kfa3l .framer-107him8, .framer-kfa3l .framer-1bdl4c9 { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: 29px; justify-content: center; overflow: visible; padding: 0px; position: relative; width: 100%; }", ".framer-kfa3l .framer-13kq0mv { --framer-link-text-color: #0099ff; --framer-link-text-decoration: underline; flex: none; height: 107%; position: relative; white-space: pre-wrap; width: 81%; word-break: break-word; word-wrap: break-word; z-index: 1; }", ".framer-kfa3l .framer-n43iaz, .framer-kfa3l .framer-17rxw01, .framer-kfa3l .framer-6i4i84 { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; min-height: 19px; overflow: visible; padding: 0px; position: relative; width: 100%; }", ".framer-kfa3l .framer-1r1hdin { --framer-link-text-color: #0099ff; --framer-link-text-decoration: underline; flex: none; height: auto; left: 49%; position: absolute; top: 47%; transform: translate(-50%, -50%); white-space: pre-wrap; width: 387px; word-break: break-word; word-wrap: break-word; z-index: 1; }", ".framer-kfa3l .framer-1y5br3g { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 10px; height: 518px; justify-content: center; overflow: visible; padding: 0px; position: relative; width: 391px; }", ".framer-kfa3l .framer-1nd1jkq { -webkit-mask: linear-gradient(91deg, rgba(0, 0, 0, 0) 0%, rgba(0,0,0,1) 7.567589562218469%, rgba(0,0,0,1) 90.09009009009009%, rgba(0, 0, 0, 0) 99.81982256915119%) add; align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 6px; height: 188px; justify-content: center; mask: linear-gradient(91deg, rgba(0,0,0,0) 0%, rgba(0,0,0,1) 7.567589562218469%, rgba(0,0,0,1) 90.09009009009009%, rgba(0, 0, 0, 0) 99.81982256915119%) add; overflow: hidden; padding: 50px 0px 50px 0px; position: relative; width: 112%; }", ".framer-kfa3l .framer-1ssd7un { --framer-link-text-color: #0099ff; --framer-link-text-decoration: underline; flex: none; height: 42%; position: relative; white-space: pre-wrap; width: 100%; word-break: break-word; word-wrap: break-word; z-index: 1; }", ".framer-kfa3l .framer-kc3w0k { align-content: center; align-items: center; background: linear-gradient(180deg, #000000 0%, rgb(47, 25, 75) 52.97296197564753%, rgb(6, 4, 9) 81.44144281610713%, rgb(0, 1, 0) 99.09909909909909%); display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: 2124px; justify-content: flex-start; overflow: visible; padding: 0px; position: relative; width: 111%; z-index: 10; }", ".framer-kfa3l .framer-1llrxhd { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 10px; height: 63.18181818181819vh; justify-content: flex-start; overflow: visible; padding: 0px; position: sticky; top: 0px; width: 369px; z-index: 1; }", ".framer-kfa3l .framer-zjxd8j { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: flex-start; overflow: visible; padding: 74px 10px 0px 10px; position: relative; width: 100%; }", ".framer-kfa3l .framer-e6g5z6 { --framer-link-text-color: #0099ff; --framer-link-text-decoration: underline; flex: none; height: 61px; position: relative; white-space: pre-wrap; width: 348px; word-break: break-word; word-wrap: break-word; z-index: 1; }", ".framer-kfa3l .framer-se4qp { flex: none; height: 300px; overflow: visible; position: relative; width: 392px; }", ".framer-kfa3l .framer-9p9op5, .framer-kfa3l .framer-lyc4nt, .framer-kfa3l .framer-17xolk9, .framer-kfa3l .framer-qsoosy { border-bottom-left-radius: 17px; border-bottom-right-radius: 17px; border-top-left-radius: 17px; border-top-right-radius: 17px; bottom: -59px; box-shadow: 8px 10px 14px 0px rgba(0, 0, 0, 0.25); flex: none; height: 132px; left: calc(51.00000000000002% - 176px / 2); position: absolute; width: 176px; will-change: var(--framer-will-change-effect-override, transform); }", ".framer-kfa3l .framer-q586bv { border-bottom-left-radius: 17px; border-bottom-right-radius: 17px; border-top-left-radius: 17px; border-top-right-radius: 17px; bottom: -59px; box-shadow: 8px 10px 14px 0px rgba(0, 0, 0, 0.3); flex: none; height: 132px; left: calc(51.00000000000002% - 176px / 2); position: absolute; width: 176px; will-change: var(--framer-will-change-effect-override, transform); }", ".framer-kfa3l .framer-119iu8q, .framer-kfa3l .framer-h8qp1y, .framer-kfa3l .framer-4rabfo, .framer-kfa3l .framer-1y83kvd { flex: none; height: 165px; overflow: hidden; position: relative; width: 369px; }", ".framer-kfa3l .framer-oppvie { flex: none; height: 164px; overflow: hidden; position: relative; width: 369px; }", ".framer-kfa3l .framer-ynn9o9 { flex: none; height: 188px; overflow: hidden; position: relative; width: 369px; }", ".framer-kfa3l .framer-11hg4ni { flex: none; height: 45px; overflow: hidden; position: relative; width: 386px; z-index: -1; }", ".framer-kfa3l .framer-esna13 { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 10px; height: 699px; justify-content: center; overflow: visible; padding: 0px; position: relative; width: 103%; }", ".framer-kfa3l .framer-1hadqxw { background: linear-gradient(180deg, #000100 1.441441570316349%, rgb(6, 4, 11) 14.414414414414415%, rgb(16, 9, 27) 33.1531421558277%, rgb(47, 25, 75) 60.90093389287725%, rgb(16, 9, 27) 76.57657657657657%, rgb(0, 1, 0) 100%); flex: none; height: 699px; left: calc(50.00000000000002% - 108.33333333333333% / 2); overflow: hidden; position: absolute; top: 0px; width: 108%; z-index: 1; }", ".framer-kfa3l .framer-1vlh3ay { align-content: center; align-items: center; background-color: #e7e4df; border-bottom-left-radius: 13px; border-bottom-right-radius: 13px; border-top-left-radius: 13px; border-top-right-radius: 13px; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: flex-start; overflow: hidden; padding: 28px 0px 28px 0px; position: relative; width: 304px; will-change: var(--framer-will-change-override, transform); z-index: 10; }", ".framer-kfa3l .framer-wmjea8 { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: visible; padding: 0px 70px 0px 0px; position: relative; width: 90%; will-change: var(--framer-will-change-effect-override, transform); z-index: 1; }", ".framer-kfa3l .framer-1wsrdu2 { flex: none; height: 288px; position: relative; width: 200px; }", ".framer-kfa3l .framer-wklxf8 { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: 63px; justify-content: center; overflow: hidden; padding: 0px; position: relative; width: 334px; }", ".framer-kfa3l .framer-1ddnxhl { --framer-link-text-color: #0099ff; --framer-link-text-decoration: underline; flex: none; height: 74px; position: relative; white-space: pre-wrap; width: 284px; will-change: var(--framer-will-change-effect-override, transform); word-break: break-word; word-wrap: break-word; z-index: 10; }", ".framer-kfa3l .framer-u7cdek { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: 36px; justify-content: center; overflow: visible; padding: 10px 0px 0px 0px; position: relative; width: 100%; z-index: 10; }", ".framer-kfa3l .framer-ihz4ov, .framer-kfa3l .framer-1mabez5, .framer-kfa3l .framer-1ybdm8r { --framer-link-text-color: #0099ff; --framer-link-text-decoration: underline; flex: none; height: auto; position: relative; white-space: pre-wrap; width: 100%; will-change: var(--framer-will-change-effect-override, transform); word-break: break-word; word-wrap: break-word; z-index: 10; }", ".framer-kfa3l .framer-13ma9my { --framer-link-text-color: #0099ff; --framer-link-text-decoration: underline; flex: none; height: 30px; position: relative; white-space: pre-wrap; width: 100%; will-change: var(--framer-will-change-effect-override, transform); word-break: break-word; word-wrap: break-word; z-index: 10; }", ".framer-kfa3l .framer-ht5efm { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 10px; height: 527px; justify-content: flex-end; overflow: hidden; padding: 0px; position: relative; width: 111%; }", ".framer-kfa3l .framer-19pwc27, .framer-kfa3l .framer-qqjtt2, .framer-kfa3l .framer-1uk3m45 { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: wrap; gap: 10px; height: min-content; justify-content: center; overflow: hidden; padding: 0px; position: relative; width: 100%; }", ".framer-kfa3l .framer-mr7u9n { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 10px; height: 562px; justify-content: center; overflow: hidden; padding: 0px; position: relative; width: 380px; z-index: 1; }", ".framer-kfa3l .framer-cjuhtn { --framer-link-text-color: #0099ff; --framer-link-text-decoration: underline; flex: none; height: auto; left: 50%; position: absolute; top: 75px; transform: translateX(-50%); white-space: pre; width: auto; z-index: 1; }", ".framer-kfa3l .framer-1ke0ypo { flex: none; height: 257px; left: -20px; position: absolute; right: -5px; top: 181px; z-index: 1; }", ".framer-kfa3l .framer-ism1jy, .framer-kfa3l .framer-1r4i13s, .framer-kfa3l .framer-gywxo8 { --framer-link-text-color: #0099ff; --framer-link-text-decoration: underline; flex: none; height: auto; left: 50%; position: absolute; top: 121px; transform: translateX(-50%); white-space: pre; width: auto; z-index: 1; }", ".framer-kfa3l .framer-1uzfrql { flex: none; height: 271px; left: calc(49.73684210526318% - 331px / 2); position: absolute; top: 182px; width: 331px; z-index: 1; }", ".framer-kfa3l .framer-1unue0t { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: 541px; justify-content: center; overflow: hidden; padding: 280px 0px 0px 100px; position: relative; width: 384px; z-index: 1; }", ".framer-kfa3l .framer-piilp8 { flex: none; height: 147px; position: relative; width: 135px; z-index: 1; }", ".framer-kfa3l .framer-397755 { --framer-link-text-color: #0099ff; --framer-link-text-decoration: underline; bottom: 10px; flex: none; height: auto; left: 48%; position: absolute; transform: translateX(-50%); white-space: pre-wrap; width: 314px; word-break: break-word; word-wrap: break-word; z-index: 1; }", ".framer-kfa3l .framer-10lfxus { --framer-link-text-color: #0099ff; --framer-link-text-decoration: underline; bottom: 34px; flex: none; height: auto; left: 50%; position: absolute; transform: translateX(-50%); white-space: pre-wrap; width: 314px; word-break: break-word; word-wrap: break-word; z-index: 1; }", ".framer-kfa3l .framer-sr98gc { --framer-link-text-color: #0099ff; --framer-link-text-decoration: underline; bottom: 81px; flex: none; height: auto; left: 50%; position: absolute; transform: translateX(-50%); white-space: pre-wrap; width: 314px; word-break: break-word; word-wrap: break-word; z-index: 1; }", ".framer-kfa3l .framer-19tksoy { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: 1814px; justify-content: flex-start; overflow: visible; padding: 0px; position: relative; width: 103%; z-index: 1; }", ".framer-kfa3l .framer-l970go { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 12px; height: 267px; justify-content: center; overflow: visible; padding: 30px 0px 0px 0px; position: relative; width: 100%; z-index: 1; }", ".framer-kfa3l .framer-12nt9qy, .framer-kfa3l .framer-mrinvh { --framer-link-text-color: #0099ff; --framer-link-text-decoration: underline; flex: none; height: 32px; position: relative; white-space: pre-wrap; width: 100%; word-break: break-word; word-wrap: break-word; z-index: 1; }", ".framer-kfa3l .framer-xagwny { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: visible; padding: 0px; position: relative; width: min-content; z-index: 1; }", ".framer-kfa3l .framer-1oefz6s { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: flex-start; overflow: hidden; padding: 0px; position: relative; width: 387px; }", ".framer-kfa3l .framer-16p2ow7 { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 61px; height: 759px; justify-content: center; max-width: 1300px; overflow: hidden; padding: 0px; position: relative; width: 377px; z-index: 1; }", ".framer-kfa3l .framer-smx3t1 { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: 353px; justify-content: center; overflow: hidden; padding: 0px; position: relative; width: 100%; }", ".framer-kfa3l .framer-zv0mpw, .framer-kfa3l .framer-1jfadyv, .framer-kfa3l .framer-b8nm33 { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 0px; height: 10%; justify-content: center; overflow: hidden; padding: 0px; position: relative; width: 100%; }", ".framer-kfa3l .framer-8xskzj { --framer-link-text-color: #0099ff; --framer-link-text-decoration: underline; bottom: 5px; flex: none; height: auto; position: absolute; right: 9px; white-space: pre-wrap; width: 306px; word-break: break-word; word-wrap: break-word; z-index: 10; }", ".framer-kfa3l .framer-cl0k9v { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 0px; height: 73%; justify-content: center; overflow: hidden; padding: 0px; position: relative; width: 100%; }", ".framer-kfa3l .framer-123apfe { border-bottom-left-radius: 9px; border-bottom-right-radius: 9px; border-top-left-radius: 9px; border-top-right-radius: 9px; box-shadow: 0.44458393117674855px 0.44458393117674855px 0.4401156375583131px -0.7000000000000001px rgba(0, 0, 0, 0.69), 1.2107201073158649px 1.2107201073158649px 1.1985517572027335px -1.4000000000000001px rgba(0, 0, 0, 0.67), 2.658303156997136px 2.658303156997136px 2.6315858642671945px -2.1px rgba(0, 0, 0, 0.63), 5.900826050459001px 5.900826050459001px 5.841519760834508px -2.8000000000000003px rgba(0, 0, 0, 0.54), 15px 15px 14.849242404917497px -3.5px rgba(0, 0, 0, 0.3); flex: none; height: 208px; position: relative; width: 361px; }", ".framer-kfa3l .framer-1md29su { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: 13%; justify-content: center; overflow: hidden; padding: 0px 50px 20px 50px; position: relative; width: 100%; }", ".framer-kfa3l .framer-1q1tmow, .framer-kfa3l .framer-16ufbej, .framer-kfa3l .framer-1l8b7di, .framer-kfa3l .framer-1beud41, .framer-kfa3l .framer-ms9cl8, .framer-kfa3l .framer-17xvgno, .framer-kfa3l .framer-venlic, .framer-kfa3l .framer-1r25e1r, .framer-kfa3l .framer-belxxy { --framer-link-text-color: #0099ff; --framer-link-text-decoration: underline; flex: 1 0 0px; height: 100%; position: relative; white-space: pre-wrap; width: 1px; word-break: break-word; word-wrap: break-word; z-index: 1; }", ".framer-kfa3l .framer-3dpb7r { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 3px 5px; height: 332px; justify-content: center; overflow: hidden; padding: 0px; position: relative; width: 100%; z-index: 1; }", ".framer-kfa3l .framer-1n6v6ls, .framer-kfa3l .framer-13ex4jk, .framer-kfa3l .framer-btear0 { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: 10%; justify-content: center; overflow: hidden; padding: 0px; position: relative; width: 100%; }", ".framer-kfa3l .framer-4whsas { --framer-link-text-color: #0099ff; --framer-link-text-decoration: underline; bottom: 3px; flex: none; height: auto; position: absolute; right: 13px; white-space: pre-wrap; width: 277px; word-break: break-word; word-wrap: break-word; z-index: 10; }", ".framer-kfa3l .framer-1tqh75r { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: 74%; justify-content: center; overflow: hidden; padding: 0px; position: relative; width: 100%; }", ".framer-kfa3l .framer-14cwdtv { border-bottom-left-radius: 9px; border-bottom-right-radius: 9px; border-top-left-radius: 9px; border-top-right-radius: 9px; box-shadow: 0.39809593676181976px 0.5971439051427296px 0.5023743593920137px -0.875px rgba(0, 0, 0, 0.68), 1.207253071552259px 1.8108796073283884px 1.5234844981800728px -1.75px rgba(0, 0, 0, 0.65), 3.1913267607422307px 4.786990141113346px 4.027272295415779px -2.625px rgba(0, 0, 0, 0.57), 10px 15px 12.61942946412396px -3.5px rgba(0, 0, 0, 0.3); flex: none; height: 210px; position: relative; width: 361px; }", ".framer-kfa3l .framer-v1xzuh, .framer-kfa3l .framer-b9cwpp, .framer-kfa3l .framer-1sr8g5f, .framer-kfa3l .framer-1u97i4, .framer-kfa3l .framer-1ij3zaz, .framer-kfa3l .framer-3k4wuw, .framer-kfa3l .framer-esi5ld, .framer-kfa3l .framer-1l4om1r, .framer-kfa3l .framer-6g1bk5 { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: 20%; justify-content: center; overflow: hidden; padding: 0px 50px 20px 50px; position: relative; width: 100%; }", ".framer-kfa3l .framer-1h2owc5 { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: 723px; justify-content: center; max-width: 1300px; overflow: hidden; padding: 0px; position: relative; width: 379px; z-index: 1; }", ".framer-kfa3l .framer-1gpml6i { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 5px; height: 386px; justify-content: center; overflow: hidden; padding: 10px 0px 0px 0px; position: relative; width: 100%; }", ".framer-kfa3l .framer-16o2vu7, .framer-kfa3l .framer-1hb3vd8, .framer-kfa3l .framer-19qsmor { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 0px; height: 7%; justify-content: center; overflow: visible; padding: 0px; position: relative; width: 100%; }", ".framer-kfa3l .framer-17bumu0 { --framer-link-text-color: #0099ff; --framer-link-text-decoration: underline; flex: none; height: 103%; position: absolute; right: 1px; top: -1px; white-space: pre-wrap; width: 311px; word-break: break-word; word-wrap: break-word; z-index: 10; }", ".framer-kfa3l .framer-18c6tx8 { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: 65%; justify-content: center; overflow: hidden; padding: 0px; position: relative; width: 100%; }", ".framer-kfa3l .framer-p4al08, .framer-kfa3l .framer-1hi01b3 { border-bottom-left-radius: 9px; border-bottom-right-radius: 9px; border-top-left-radius: 9px; border-top-right-radius: 9px; box-shadow: 0.39809593676181976px 0.5971439051427296px 0.5023743593920137px -0.875px rgba(0, 0, 0, 0.68), 1.207253071552259px 1.8108796073283884px 1.5234844981800728px -1.75px rgba(0, 0, 0, 0.65), 3.1913267607422307px 4.786990141113346px 4.027272295415779px -2.625px rgba(0, 0, 0, 0.57), 10px 15px 12.61942946412396px -3.5px rgba(0, 0, 0, 0.3); flex: none; height: 209px; position: relative; width: 361px; }", ".framer-kfa3l .framer-1fn8rbt { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: 14%; justify-content: center; overflow: hidden; padding: 0px 50px 20px 50px; position: relative; width: 100%; }", ".framer-kfa3l .framer-oqw3p1 { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: 338px; justify-content: center; overflow: hidden; padding: 10px 0px 0px 0px; position: relative; width: 100%; z-index: 1; }", ".framer-kfa3l .framer-31zs4b, .framer-kfa3l .framer-cbsxeq, .framer-kfa3l .framer-7fiz28 { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: 7%; justify-content: center; overflow: hidden; padding: 0px; position: relative; width: 100%; }", ".framer-kfa3l .framer-6hogf { --framer-link-text-color: #0099ff; --framer-link-text-decoration: underline; flex: none; height: 56%; position: relative; white-space: pre-wrap; width: 210px; word-break: break-word; word-wrap: break-word; z-index: 10; }", ".framer-kfa3l .framer-1xdkyse, .framer-kfa3l .framer-5cn6be { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: 77%; justify-content: center; overflow: hidden; padding: 0px; position: relative; width: 100%; }", ".framer-kfa3l .framer-1qx3dm { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: 12%; justify-content: center; overflow: hidden; padding: 0px 50px 20px 50px; position: relative; width: 100%; }", ".framer-kfa3l .framer-1yzaovq { background: linear-gradient(180deg, #000100 0%, rgb(17, 12, 30) 17.29730829462275%, rgb(116, 73, 184) 46.12613712345158%, rgb(157, 107, 227) 100%); flex: none; gap: 10px; height: 89%; left: calc(50.00000000000002% - 108.33333333333333% / 2); overflow: visible; position: absolute; top: calc(55.733186328555696% - 88.53362734288865% / 2); width: 108%; z-index: 0; }", ".framer-kfa3l .framer-q3t4ff { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 10px; height: 1401px; justify-content: flex-start; overflow: visible; padding: 0px; position: relative; width: 100%; z-index: 1; }", ".framer-kfa3l .framer-1poiqvj { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: 730px; justify-content: flex-start; overflow: visible; padding: 0px; position: sticky; top: 0px; width: 807px; z-index: 1; }", ".framer-kfa3l .framer-1xnvsaw { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 44px; height: 220px; justify-content: flex-start; overflow: visible; padding: 0px; position: relative; width: 100%; z-index: 1; }", ".framer-kfa3l .framer-1x5gj0e { --framer-link-text-color: #0099ff; --framer-link-text-decoration: underline; flex: none; height: auto; position: relative; white-space: pre-wrap; width: 809px; word-break: break-word; word-wrap: break-word; z-index: 1; }", ".framer-kfa3l .framer-1y5zp8r { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: wrap; gap: 0px; height: 54%; justify-content: center; overflow: visible; padding: 0px; position: relative; width: 794px; z-index: 1; }", ".framer-kfa3l .framer-116oiz3 { bottom: 24px; flex: none; height: 111px; left: 110px; position: absolute; width: 130px; z-index: 1; }", ".framer-kfa3l .framer-19ajcws { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: 100%; justify-content: center; overflow: visible; padding: 0px; position: relative; width: 60%; z-index: 10; }", ".framer-kfa3l .framer-1sysmx9-container { flex: none; height: 46%; mix-blend-mode: multiply; position: relative; width: 246%; z-index: 3; }", ".framer-kfa3l .framer-h7laz2 { flex: none; height: 86px; left: 553px; position: absolute; top: 22px; width: 121px; z-index: 1; }", ".framer-kfa3l .framer-16na4vu { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 15px; height: 176px; justify-content: flex-start; overflow: visible; padding: 25px 0px 0px 0px; position: relative; width: 100%; z-index: -1; }", ".framer-kfa3l .framer-11dc5wb { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: 48px; justify-content: center; overflow: visible; padding: 0px; position: relative; width: 100%; }", ".framer-kfa3l .framer-wlkxgz, .framer-kfa3l .framer-5uzghb { --framer-link-text-color: #0099ff; --framer-link-text-decoration: underline; flex: none; height: 106%; position: relative; white-space: pre; width: auto; z-index: 1; }", ".framer-kfa3l .framer-1x0arrs { --framer-link-text-color: #0099ff; --framer-link-text-decoration: underline; flex: none; height: auto; left: 50%; position: absolute; top: 47%; transform: translate(-50%, -50%); white-space: pre-wrap; width: 453px; word-break: break-word; word-wrap: break-word; z-index: 1; }", ".framer-kfa3l .framer-16mkqyd { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 10px; height: 156px; justify-content: center; overflow: visible; padding: 0px; position: relative; width: 771px; }", ".framer-kfa3l .framer-5y5svz { -webkit-mask: linear-gradient(90deg, rgba(0, 0, 0, 0) 0%, rgba(0,0,0,1) 6%, rgba(0,0,0,1) 93.3333800719665%, rgba(0, 0, 0, 0) 100.18018430417723%) add; align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: 467px; justify-content: flex-end; mask: linear-gradient(90deg, rgba(0,0,0,0) 0%, rgba(0,0,0,1) 6%, rgba(0,0,0,1) 93.3333800719665%, rgba(0, 0, 0, 0) 100.18018430417723%) add; overflow: hidden; padding: 50px 0px 50px 0px; position: relative; width: 100%; }", ".framer-kfa3l .framer-1vl0tbd { --framer-link-text-color: #0099ff; --framer-link-text-decoration: underline; flex: none; height: auto; position: relative; white-space: pre-wrap; width: 104%; word-break: break-word; word-wrap: break-word; z-index: 1; }", ".framer-kfa3l .framer-1303agm { --framer-link-text-color: #0099ff; --framer-link-text-decoration: underline; flex: none; height: 40%; position: relative; white-space: pre-wrap; width: 100%; word-break: break-word; word-wrap: break-word; z-index: 1; }", ".framer-kfa3l .framer-505jbb { -webkit-user-select: none; align-content: center; align-items: center; background: linear-gradient(180deg, #000000 0%, rgb(47, 25, 75) 52.97296197564753%, rgb(6, 4, 9) 81.44144281610713%, rgb(0, 1, 0) 99.09909909909909%); display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: 1870px; justify-content: flex-start; overflow: visible; padding: 0px; position: relative; user-select: none; width: 105%; z-index: 10; }", ".framer-kfa3l .framer-1rrb0k5 { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 18px; height: 36.04255319148936vh; justify-content: flex-start; overflow: visible; padding: 0px; position: sticky; top: 0px; width: 100%; z-index: 1; }", ".framer-kfa3l .framer-11nhb1q { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 18px; height: min-content; justify-content: flex-start; overflow: visible; padding: 50px 0px 56px 40px; position: relative; width: 798px; z-index: 10; }", ".framer-kfa3l .framer-15zwwre { --framer-link-text-color: #0099ff; --framer-link-text-decoration: underline; flex: none; height: auto; position: relative; white-space: pre-wrap; width: 765px; word-break: break-word; word-wrap: break-word; z-index: 1; }", ".framer-kfa3l .framer-tkdotx { --framer-link-text-color: #0099ff; --framer-link-text-decoration: underline; flex: none; height: 77px; position: relative; white-space: pre-wrap; width: 763px; word-break: break-word; word-wrap: break-word; z-index: 1; }", ".framer-kfa3l .framer-1qg3b7p, .framer-kfa3l .framer-9cte6t { flex: none; height: 300px; overflow: visible; position: relative; width: 400px; }", ".framer-kfa3l .framer-14x43xm, .framer-kfa3l .framer-1k2p28v, .framer-kfa3l .framer-1jctund, .framer-kfa3l .framer-khhgog { border-bottom-left-radius: 17px; border-bottom-right-radius: 17px; border-top-left-radius: 17px; border-top-right-radius: 17px; bottom: -128px; box-shadow: 8px 10px 14px 0px rgba(0, 0, 0, 0.25); flex: none; height: 300px; position: absolute; right: -10px; width: 400px; will-change: var(--framer-will-change-effect-override, transform); }", ".framer-kfa3l .framer-1ax8dbx { border-bottom-left-radius: 17px; border-bottom-right-radius: 17px; border-top-left-radius: 17px; border-top-right-radius: 17px; bottom: -128px; box-shadow: 8px 10px 14px 0px rgba(0, 0, 0, 0.3); flex: none; height: 300px; position: absolute; right: -10px; width: 400px; will-change: var(--framer-will-change-effect-override, transform); }", ".framer-kfa3l .framer-18qjirh, .framer-kfa3l .framer-1b4qpr7 { flex: none; height: 164px; overflow: hidden; position: relative; width: 785px; }", ".framer-kfa3l .framer-1snwdw4 { flex: none; height: 166px; overflow: hidden; position: relative; width: 785px; }", ".framer-kfa3l .framer-14sp9wp, .framer-kfa3l .framer-ao4pa1 { flex: none; height: 165px; overflow: hidden; position: relative; width: 785px; }", ".framer-kfa3l .framer-d595rp { flex: none; height: 188px; overflow: hidden; position: relative; width: 785px; }", ".framer-kfa3l .framer-q6j4k8 { flex: none; height: 641px; overflow: hidden; position: relative; width: 100%; z-index: -1; }", ".framer-kfa3l .framer-hczyl2 { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 10px; height: 692px; justify-content: center; overflow: hidden; padding: 0px; position: relative; width: 806px; z-index: 0; }", ".framer-kfa3l .framer-yurhem { background: linear-gradient(180deg, #000100 1.441441570316349%, rgb(6, 4, 11) 14.414414414414415%, rgb(16, 9, 27) 33.1531421558277%, rgb(47, 25, 75) 60.90093389287725%, rgb(16, 9, 27) 76.57657657657657%, rgb(0, 1, 0) 100%); bottom: 0px; flex: none; left: calc(50.00000000000002% - 100.1240694789082% / 2); overflow: hidden; position: absolute; top: 0px; width: 100%; z-index: 1; }", ".framer-kfa3l .framer-ven34v { align-content: center; align-items: center; background-color: #e7e4df; border-bottom-left-radius: 13px; border-bottom-right-radius: 13px; border-top-left-radius: 13px; border-top-right-radius: 13px; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: flex-start; overflow: hidden; padding: 0px; position: relative; width: 673px; will-change: var(--framer-will-change-override, transform); z-index: 10; }", ".framer-kfa3l .framer-s0y5bc { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: visible; padding: 0px 50px 0px 0px; position: relative; width: 38%; will-change: var(--framer-will-change-effect-override, transform); z-index: 1; }", ".framer-kfa3l .framer-1q3pgfs { flex: none; height: 318px; position: relative; width: 187px; }", ".framer-kfa3l .framer-18i96us { align-content: center; align-items: center; align-self: stretch; display: flex; flex: 1 0 0px; flex-direction: column; flex-wrap: nowrap; gap: 89px; height: auto; justify-content: center; overflow: visible; padding: 0px; position: relative; width: 1px; z-index: 10; }", ".framer-kfa3l .framer-1c0ynbl { --framer-link-text-color: #0099ff; --framer-link-text-decoration: underline; flex: none; height: 44px; position: relative; white-space: pre-wrap; width: 100%; will-change: var(--framer-will-change-effect-override, transform); word-break: break-word; word-wrap: break-word; z-index: 10; }", ".framer-kfa3l .framer-p9o0oe { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 10px; height: 1047px; justify-content: center; overflow: hidden; padding: 0px; position: relative; width: 100%; }", ".framer-kfa3l .framer-522wlg { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 10px; height: 994px; justify-content: center; overflow: hidden; padding: 0px; position: relative; width: 806px; z-index: 1; }", ".framer-kfa3l .framer-4lrq9p { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 15px; height: min-content; justify-content: flex-start; overflow: hidden; padding: 10px 0px 0px 350px; position: relative; width: 806px; z-index: 1; }", ".framer-kfa3l .framer-cjiuin { --framer-link-text-color: #0099ff; --framer-link-text-decoration: underline; flex: none; height: auto; position: relative; white-space: pre-wrap; width: 372px; word-break: break-word; word-wrap: break-word; z-index: 1; }", ".framer-kfa3l .framer-tn2aqa { --framer-link-text-color: #0099ff; --framer-link-text-decoration: underline; flex: none; height: auto; position: relative; white-space: pre-wrap; width: 368px; word-break: break-word; word-wrap: break-word; z-index: 1; }", ".framer-kfa3l .framer-1t47u2w { --framer-link-text-color: #0099ff; --framer-link-text-decoration: underline; flex: none; height: auto; position: relative; white-space: pre-wrap; width: 374px; word-break: break-word; word-wrap: break-word; z-index: 1; }", ".framer-kfa3l .framer-3ta07r, .framer-kfa3l .framer-8nywxs { --framer-link-text-color: #0099ff; --framer-link-text-decoration: underline; flex: none; height: auto; left: 50%; position: absolute; top: 59px; transform: translateX(-50%); white-space: pre; width: auto; z-index: 1; }", ".framer-kfa3l .framer-1tuba9p, .framer-kfa3l .framer-1r8e45i { flex: none; height: 556px; left: calc(50.29411764705885% - 1332px / 2); position: absolute; top: calc(51.307847082494995% - 556px / 2); width: 1332px; z-index: 1; }", ".framer-kfa3l .framer-avyt08 { flex: none; height: 572px; left: calc(50.78571428571431% - 784px / 2); position: absolute; top: calc(53.92354124748493% - 572px / 2); width: 784px; z-index: 1; }", ".framer-kfa3l .framer-ayzpm5 { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: 817px; justify-content: center; overflow: hidden; padding: 650px 0px 0px 200px; position: relative; width: 100%; z-index: 1; }", ".framer-kfa3l .framer-1iiq7do, .framer-kfa3l .framer-o2ficv { flex: none; height: 249px; position: relative; width: 227px; z-index: 1; }", ".framer-kfa3l .framer-a27yy { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 10px; height: 2603px; justify-content: flex-start; overflow: visible; padding: 0px; position: relative; width: 103%; }", ".framer-kfa3l .framer-qktkil { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 30px; height: 294px; justify-content: center; overflow: visible; padding: 30px 0px 0px 0px; position: relative; width: 100%; z-index: 1; }", ".framer-kfa3l .framer-18u40ml { --framer-link-text-color: #0099ff; --framer-link-text-decoration: underline; flex: none; height: 15px; position: relative; white-space: pre-wrap; width: 100%; word-break: break-word; word-wrap: break-word; z-index: 1; }", ".framer-kfa3l .framer-1wlvv8f { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 50px; height: min-content; justify-content: center; overflow: visible; padding: 0px; position: relative; width: 100%; z-index: 1; }", ".framer-kfa3l .framer-10hla1p { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: flex-start; overflow: hidden; padding: 24px 0px 24px 0px; position: relative; width: 789px; }", ".framer-kfa3l .framer-1nvp3nw { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 50px; height: 1109px; justify-content: center; max-width: 1300px; overflow: hidden; padding: 0px; position: relative; width: 803px; z-index: 1; }", ".framer-kfa3l .framer-gtr2ck, .framer-kfa3l .framer-815zgw { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 3px; height: 510px; justify-content: center; overflow: hidden; padding: 10px 0px 0px 0px; position: relative; width: 100%; }", ".framer-kfa3l .framer-13a2zq4, .framer-kfa3l .framer-bugq5b { --framer-link-text-color: #0099ff; --framer-link-text-decoration: underline; bottom: 3px; flex: none; height: auto; left: 50%; position: absolute; transform: translateX(-50%); white-space: pre-wrap; width: 329px; word-break: break-word; word-wrap: break-word; z-index: 10; }", ".framer-kfa3l .framer-1wx2m91, .framer-kfa3l .framer-p3b5yg { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 0px; height: 81%; justify-content: center; overflow: hidden; padding: 0px; position: relative; width: 100%; }", ".framer-kfa3l .framer-1grb3e8, .framer-kfa3l .framer-1nbyjao { border-bottom-left-radius: 9px; border-bottom-right-radius: 9px; border-top-left-radius: 9px; border-top-right-radius: 9px; box-shadow: 0.44458393117674855px 0.44458393117674855px 0.4401156375583131px -0.7000000000000001px rgba(0, 0, 0, 0.69), 1.2107201073158649px 1.2107201073158649px 1.1985517572027335px -1.4000000000000001px rgba(0, 0, 0, 0.67), 2.658303156997136px 2.658303156997136px 2.6315858642671945px -2.1px rgba(0, 0, 0, 0.63), 5.900826050459001px 5.900826050459001px 5.841519760834508px -2.8000000000000003px rgba(0, 0, 0, 0.54), 15px 15px 14.849242404917497px -3.5px rgba(0, 0, 0, 0.3); flex: none; height: 335px; position: relative; width: 620px; }", ".framer-kfa3l .framer-1mzmf1n { --framer-link-text-color: #0099ff; --framer-link-text-decoration: underline; flex: none; height: 78px; position: relative; white-space: pre-wrap; width: 616px; word-break: break-word; word-wrap: break-word; z-index: 1; }", ".framer-kfa3l .framer-zplo17 { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 3px 5px; height: 528px; justify-content: center; overflow: hidden; padding: 10px 0px 0px 0px; position: relative; width: 100%; z-index: 1; }", ".framer-kfa3l .framer-17qdjjb, .framer-kfa3l .framer-vqljsn { --framer-link-text-color: #0099ff; --framer-link-text-decoration: underline; bottom: 3px; flex: none; height: auto; left: 50%; position: absolute; transform: translateX(-50%); white-space: pre-wrap; width: 295px; word-break: break-word; word-wrap: break-word; z-index: 10; }", ".framer-kfa3l .framer-9qkbwo, .framer-kfa3l .framer-10p8i3v, .framer-kfa3l .framer-zayrq3, .framer-kfa3l .framer-1wuch4, .framer-kfa3l .framer-q9j9xy, .framer-kfa3l .framer-1cftgks { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: 81%; justify-content: center; overflow: hidden; padding: 0px; position: relative; width: 100%; }", ".framer-kfa3l .framer-j9ydhx, .framer-kfa3l .framer-1r33q9d, .framer-kfa3l .framer-c9s063, .framer-kfa3l .framer-lbfzg2, .framer-kfa3l .framer-gqdwqf, .framer-kfa3l .framer-5f09k2 { border-bottom-left-radius: 9px; border-bottom-right-radius: 9px; border-top-left-radius: 9px; border-top-right-radius: 9px; box-shadow: 0.39809593676181976px 0.5971439051427296px 0.5023743593920137px -0.875px rgba(0, 0, 0, 0.68), 1.207253071552259px 1.8108796073283884px 1.5234844981800728px -1.75px rgba(0, 0, 0, 0.65), 3.1913267607422307px 4.786990141113346px 4.027272295415779px -2.625px rgba(0, 0, 0, 0.57), 10px 15px 12.61942946412396px -3.5px rgba(0, 0, 0, 0.3); flex: none; height: 335px; position: relative; width: 620px; }", ".framer-kfa3l .framer-kwmql4 { --framer-link-text-color: #0099ff; --framer-link-text-decoration: underline; flex: none; height: 82px; position: relative; white-space: pre-wrap; width: 620px; word-break: break-word; word-wrap: break-word; z-index: 1; }", ".framer-kfa3l .framer-1gprt1d { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 50px 0px; height: 1141px; justify-content: center; max-width: 1300px; overflow: hidden; padding: 0px; position: relative; width: 803px; z-index: 1; }", ".framer-kfa3l .framer-3cusiw, .framer-kfa3l .framer-19qnoar { --framer-link-text-color: #0099ff; --framer-link-text-decoration: underline; flex: none; height: 100%; left: calc(50.00000000000002% - 340px / 2); position: absolute; top: calc(52.94117647058826% - 100% / 2); white-space: pre-wrap; width: 340px; word-break: break-word; word-wrap: break-word; z-index: 10; }", ".framer-kfa3l .framer-11uonxh { --framer-link-text-color: #0099ff; --framer-link-text-decoration: underline; flex: none; height: 78px; position: relative; white-space: pre-wrap; width: 627px; word-break: break-word; word-wrap: break-word; z-index: 1; }", ".framer-kfa3l .framer-yd75dw { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: 510px; justify-content: center; overflow: hidden; padding: 10px 0px 0px 0px; position: relative; width: 100%; z-index: 1; }", ".framer-kfa3l .framer-15og7xk, .framer-kfa3l .framer-1w8ef83 { --framer-link-text-color: #0099ff; --framer-link-text-decoration: underline; flex: none; height: 56%; position: relative; white-space: pre-wrap; width: 275px; word-break: break-word; word-wrap: break-word; z-index: 10; }", ".framer-kfa3l .framer-15p99av { background: linear-gradient(180deg, #000100 0%, rgb(17, 12, 30) 17.29730829462275%, rgb(116, 73, 184) 46.12613712345158%, rgb(157, 107, 227) 100%); bottom: 0px; flex: none; gap: 10px; height: 88%; left: calc(50.00000000000002% - 102.27272727272727% / 2); overflow: visible; position: absolute; width: 102%; z-index: 0; }", ".framer-kfa3l .framer-4b2mr0 { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 10px; height: 200vh; justify-content: flex-start; overflow: visible; padding: 0px; position: relative; width: 100%; z-index: 1; }", ".framer-kfa3l .framer-1athwap { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: 730px; justify-content: flex-start; overflow: visible; padding: 0px; position: sticky; top: 0px; width: 1360px; z-index: 1; }", ".framer-kfa3l .framer-1czpofu { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 10px; height: 170px; justify-content: flex-start; overflow: visible; padding: 0px; position: relative; width: 100%; z-index: 1; }", ".framer-kfa3l .framer-k46dnd { --framer-link-text-color: #0099ff; --framer-link-text-decoration: underline; flex: none; height: auto; position: relative; white-space: pre-wrap; width: 1360px; word-break: break-word; word-wrap: break-word; z-index: 1; }", ".framer-kfa3l .framer-1qswyvc { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: wrap; gap: 0px; height: 55%; justify-content: center; overflow: visible; padding: 0px; position: relative; width: 1360px; z-index: 1; }", ".framer-kfa3l .framer-k2qy8d { bottom: 9px; flex: none; height: 111px; left: 265px; position: absolute; width: 130px; z-index: 1; }", ".framer-kfa3l .framer-drqtnb { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: 100%; justify-content: center; overflow: visible; padding: 0px; position: relative; width: 100%; z-index: 10; }", ".framer-kfa3l .framer-1yj7q7g-container { flex: none; height: 63%; mix-blend-mode: multiply; position: relative; width: 116%; z-index: 3; }", ".framer-kfa3l .framer-108pbqm { flex: none; height: 86px; left: 924px; position: absolute; top: 10px; width: 121px; z-index: 1; }", ".framer-kfa3l .framer-ptat6i { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 15px; height: 119px; justify-content: flex-start; overflow: visible; padding: 25px 0px 0px 0px; position: relative; width: 100%; z-index: -1; }", ".framer-kfa3l .framer-1xedi5c { --framer-link-text-color: #0099ff; --framer-link-text-decoration: underline; flex: none; height: auto; left: 50%; position: absolute; top: 47%; transform: translate(-50%, -50%); white-space: pre-wrap; width: 862px; word-break: break-word; word-wrap: break-word; z-index: 1; }", ".framer-kfa3l .framer-4lav07 { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 10px; height: 472px; justify-content: center; overflow: visible; padding: 0px; position: relative; width: 1360px; }", ".framer-kfa3l .framer-1oeyh68 { -webkit-mask: linear-gradient(90deg, rgba(0, 0, 0, 0) 0%, rgba(0,0,0,1) 12%, rgba(0,0,0,1) 85%, rgba(0, 0, 0, 0) 100%) add; align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 20px; height: 714px; justify-content: center; mask: linear-gradient(90deg, rgba(0,0,0,0) 0%, rgba(0,0,0,1) 12%, rgba(0,0,0,1) 85%, rgba(0, 0, 0, 0) 100%) add; overflow: visible; padding: 80px 0px 40px 0px; position: relative; width: 102%; z-index: 1; }", ".framer-kfa3l .framer-1pxpif6 { --framer-link-text-color: #0099ff; --framer-link-text-decoration: underline; flex: none; height: 13%; position: relative; white-space: pre-wrap; width: 100%; word-break: break-word; word-wrap: break-word; z-index: 1; }", ".framer-kfa3l .framer-y24iki { align-content: center; align-items: center; background: linear-gradient(180deg, #000000 0%, rgb(47, 25, 75) 52.97296197564753%, rgb(6, 4, 9) 81.44144281610713%, rgb(0, 1, 0) 99.09909909909909%); display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: 2200px; justify-content: flex-start; overflow: visible; padding: 0px; position: relative; width: 103%; z-index: 5; }", ".framer-kfa3l .framer-1fnxgk7 { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 10px; height: 97.22222222222221vh; justify-content: flex-start; overflow: visible; padding: 0px; position: sticky; top: 0px; width: 1360px; z-index: 1; }", ".framer-kfa3l .framer-hdbj3k { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 17px; height: min-content; justify-content: flex-start; overflow: visible; padding: 34px 40px 0px 40px; position: relative; width: 100%; }", ".framer-kfa3l .framer-2ast8c { --framer-link-text-color: #0099ff; --framer-link-text-decoration: underline; flex: none; height: 61px; position: relative; white-space: pre-wrap; width: 100%; word-break: break-word; word-wrap: break-word; z-index: 1; }", ".framer-kfa3l .framer-1a5kdcf, .framer-kfa3l .framer-1awe7m6, .framer-kfa3l .framer-1nz3709, .framer-kfa3l .framer-ahyea1 { border-bottom-left-radius: 17px; border-bottom-right-radius: 17px; border-top-left-radius: 17px; border-top-right-radius: 17px; bottom: -92px; box-shadow: 8px 10px 14px 0px rgba(0, 0, 0, 0.25); flex: none; height: 300px; position: absolute; right: -10px; width: 400px; will-change: var(--framer-will-change-effect-override, transform); z-index: 3; }", ".framer-kfa3l .framer-1g1oln4 { border-bottom-left-radius: 17px; border-bottom-right-radius: 17px; border-top-left-radius: 17px; border-top-right-radius: 17px; bottom: -92px; box-shadow: 8px 10px 14px 0px rgba(0, 0, 0, 0.3); flex: none; height: 300px; position: absolute; right: -10px; width: 400px; will-change: var(--framer-will-change-effect-override, transform); z-index: 3; }", ".framer-kfa3l .framer-1cm6hr3, .framer-kfa3l .framer-y1ptdr, .framer-kfa3l .framer-3n9j5o { flex: none; height: 164px; overflow: hidden; position: relative; width: 1360px; }", ".framer-kfa3l .framer-y372pi, .framer-kfa3l .framer-1nillj6 { flex: none; height: 165px; overflow: hidden; position: relative; width: 1360px; }", ".framer-kfa3l .framer-1ww1to2 { flex: none; height: 188px; overflow: hidden; position: relative; width: 1360px; }", ".framer-kfa3l .framer-1wbh2as { background-color: #000100; flex: none; gap: 10px; height: 120px; overflow: hidden; position: relative; width: 100%; z-index: 0; }", ".framer-kfa3l .framer-1jiugos { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 10px; height: 858px; justify-content: center; overflow: visible; padding: 0px; position: relative; width: 103%; }", ".framer-kfa3l .framer-1r0qfps { background: linear-gradient(180deg, #000100 1.441441570316349%, rgb(6, 4, 11) 14.414414414414415%, rgb(16, 9, 27) 33.1531421558277%, rgb(47, 25, 75) 60.90093389287725%, rgb(16, 9, 27) 76.57657657657657%, rgb(0, 1, 0) 100%); bottom: 0px; flex: none; height: 880px; left: 0px; overflow: hidden; position: absolute; width: 100%; z-index: 1; }", ".framer-kfa3l .framer-z8e3ee { align-content: center; align-items: center; background-color: #e7e4df; border-bottom-left-radius: 13px; border-bottom-right-radius: 13px; border-top-left-radius: 13px; border-top-right-radius: 13px; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: flex-start; overflow: visible; padding: 68px 0px 24px 0px; position: relative; width: 1189px; z-index: 10; }", ".framer-kfa3l .framer-1on9din { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: visible; padding: 0px 50px 0px 0px; position: relative; width: 42%; will-change: var(--framer-will-change-effect-override, transform); z-index: 1; }", ".framer-kfa3l .framer-181mz0h { flex: none; height: 476px; position: relative; width: 365px; }", ".framer-kfa3l .framer-1xxtny6 { align-content: center; align-items: center; align-self: stretch; display: flex; flex: 1 0 0px; flex-direction: column; flex-wrap: nowrap; gap: 89px; height: auto; justify-content: center; overflow: visible; padding: 0px 0px 50px 0px; position: relative; width: 1px; z-index: 10; }", ".framer-kfa3l .framer-frtpwg { --framer-link-text-color: #0099ff; --framer-link-text-decoration: underline; flex: none; height: 126px; position: relative; white-space: pre-wrap; width: 100%; will-change: var(--framer-will-change-effect-override, transform); word-break: break-word; word-wrap: break-word; z-index: 10; }", ".framer-kfa3l .framer-ytrha9 { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 10px; height: 1048px; justify-content: center; overflow: hidden; padding: 0px; position: relative; width: 100%; }", ".framer-kfa3l .framer-lxctym { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 10px; height: 958px; justify-content: center; overflow: hidden; padding: 0px; position: relative; width: 100%; z-index: 1; }", ".framer-kfa3l .framer-t8z4m2 { bottom: 134px; flex: none; height: 593px; left: calc(50.80882352941178% - 825px / 2); position: absolute; width: 825px; z-index: 1; }", ".framer-kfa3l .framer-cx8bu4 { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: 689px; justify-content: center; overflow: hidden; padding: 540px 0px 0px 200px; position: relative; width: 100%; z-index: 1; }", ".framer-kfa3l .framer-1osea3l { align-content: flex-end; align-items: flex-end; bottom: 0px; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: flex-end; left: 50%; overflow: hidden; padding: 0px 90px 0px 0px; position: absolute; transform: translateX(-50%); width: 1360px; z-index: 1; }", ".framer-kfa3l .framer-yiqo7j { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 10px; height: 137px; justify-content: center; overflow: hidden; padding: 0px 100px 0px 0px; position: relative; width: 518px; }", ".framer-kfa3l .framer-1vdl146 { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 10px; height: 1558px; justify-content: flex-start; overflow: visible; padding: 0px; position: relative; width: 103%; }", ".framer-kfa3l .framer-zdcsod { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 30px; height: 234px; justify-content: flex-end; overflow: visible; padding: 30px 0px 0px 0px; position: relative; width: 100%; z-index: 1; }", ".framer-kfa3l .framer-t0mmmq { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: visible; padding: 0px; position: relative; width: 100%; z-index: 1; }", ".framer-kfa3l .framer-p7d8ab { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: flex-start; overflow: hidden; padding: 48px 0px 48px 0px; position: relative; width: 1400px; }", ".framer-kfa3l .framer-gwvnp3 { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 0px; height: 580px; justify-content: center; max-width: 1300px; overflow: hidden; padding: 0px; position: relative; width: 1300px; z-index: 1; }", ".framer-kfa3l .framer-m76uf7, .framer-kfa3l .framer-7bv15f { align-content: center; align-items: center; display: flex; flex: 1 0 0px; flex-direction: column; flex-wrap: nowrap; gap: 3px; height: 510px; justify-content: center; overflow: hidden; padding: 10px 0px 0px 0px; position: relative; width: 1px; }", ".framer-kfa3l .framer-nqv177 { align-content: center; align-items: center; display: flex; flex: 1 0 0px; flex-direction: column; flex-wrap: nowrap; gap: 3px 5px; height: 510px; justify-content: center; overflow: hidden; padding: 10px 0px 0px 0px; position: relative; width: 1px; z-index: 1; }", ".framer-kfa3l .framer-ploybk { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px 0px; height: 577px; justify-content: center; max-width: 1300px; overflow: hidden; padding: 0px; position: relative; width: 1300px; z-index: 1; }", ".framer-kfa3l .framer-6wp1lp { align-content: center; align-items: center; display: flex; flex: 1 0 0px; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: 510px; justify-content: center; overflow: hidden; padding: 10px 0px 0px 0px; position: relative; width: 1px; z-index: 1; }", ".framer-kfa3l .framer-1g85bb3 { background: linear-gradient(180deg, #000100 0%, rgb(17, 12, 30) 17.29730829462275%, rgb(116, 73, 184) 46.12613712345158%, rgb(157, 107, 227) 100%); flex: none; gap: 10px; height: 89%; left: calc(50.00000000000002% - 100% / 2); overflow: visible; position: absolute; top: calc(55.71245186136075% - 88.51091142490372% / 2); width: 100%; z-index: 0; }", ".framer-kfa3l .framer-1tus60m { align-content: center; align-items: center; background: linear-gradient(180deg, #9d6be3 15.315315315315313%, rgb(149, 108, 196) 50.45045045045045%, rgb(199, 150, 244) 80%); display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 10px; height: 1098px; justify-content: flex-start; overflow: visible; padding: 35px 0px 0px 0px; position: relative; width: 103%; }", ".framer-kfa3l .framer-1oqx6wn { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: visible; padding: 0px; position: relative; width: 100%; }", ".framer-kfa3l .framer-shw5ug { -webkit-filter: drop-shadow(6px -3px 6px rgba(0, 0, 0, 0.56)); filter: drop-shadow(6px -3px 6px rgba(0, 0, 0, 0.56)); flex: none; height: 107px; left: calc(50.00000000000002% - 506px / 2); overflow: visible; position: absolute; top: calc(50.2487562189055% - 107px / 2); width: 506px; z-index: 10; }", ".framer-kfa3l .framer-1fu82au { flex: 1 0 0px; height: 101%; overflow: hidden; position: relative; width: 1px; }", ".framer-kfa3l .framer-1k5vi0w { flex: none; height: 430px; position: absolute; right: -10px; top: calc(52.14384508990321% - 430px / 2); width: 684px; }", ".framer-kfa3l .framer-rdmi20 { flex: none; height: 255px; position: absolute; right: -14px; top: calc(54.3831168831169% - 255px / 2); width: 405px; }", ".framer-kfa3l .framer-kt6qi5 { bottom: 8px; flex: none; height: 224px; left: 0px; position: absolute; width: 389px; }", ".framer-kfa3l .framer-c61lzi { align-content: center; align-items: center; display: flex; flex: 1 0 0px; flex-direction: column; flex-wrap: nowrap; gap: 60px; height: 100%; justify-content: center; overflow: hidden; padding: 0px; position: relative; width: 1px; }", ".framer-kfa3l .framer-wp5sgy { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: hidden; padding: 0px; position: relative; width: 100%; }", ".framer-kfa3l .framer-8ip0ci { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 58px; height: 617px; justify-content: center; overflow: hidden; padding: 20px 0px 0px 25px; position: relative; width: 17%; }", ".framer-kfa3l .framer-5szxxp { flex: none; height: 11%; left: calc(60.50420168067229% - 69.74789915966386% / 2); position: absolute; top: calc(12.1555915721232% - 11.021069692058347% / 2); width: 70%; will-change: var(--framer-will-change-effect-override, transform); z-index: 1; }", ".framer-kfa3l .framer-1wobtab { flex: none; height: 11%; left: calc(60.50420168067229% - 69.74789915966386% / 2); position: absolute; top: calc(30.95623987034038% - 11.183144246353322% / 2); width: 70%; will-change: var(--framer-will-change-effect-override, transform); z-index: 1; }", ".framer-kfa3l .framer-8czzsb { flex: none; height: 11%; left: calc(60.50420168067229% - 69.74789915966386% / 2); position: absolute; top: calc(49.918962722852534% - 11.183144246353322% / 2); width: 70%; will-change: var(--framer-will-change-effect-override, transform); z-index: 1; }", ".framer-kfa3l .framer-1nru97z { flex: none; height: 11%; left: calc(60.50420168067229% - 69.74789915966386% / 2); position: absolute; top: calc(69.04376012965967% - 11.021069692058347% / 2); width: 70%; will-change: var(--framer-will-change-effect-override, transform); z-index: 1; }", ".framer-kfa3l .framer-1h02pb2 { flex: none; height: 11%; left: calc(60.50420168067229% - 69.74789915966386% / 2); position: absolute; top: calc(86.871961102107% - 11.183144246353322% / 2); width: 70%; will-change: var(--framer-will-change-effect-override, transform); z-index: 1; }", ".framer-kfa3l .framer-3xx0y { align-content: center; align-items: center; align-self: stretch; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 29px; height: auto; justify-content: center; overflow: hidden; padding: 0px 50px 0px 0px; position: relative; width: 81%; }", ".framer-kfa3l .framer-911bwy { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: 93px; justify-content: flex-start; overflow: hidden; padding: 0px; position: relative; width: 480px; z-index: 1; }", ".framer-kfa3l .framer-ansm8o, .framer-kfa3l .framer-1o844a5, .framer-kfa3l .framer-hqeet7, .framer-kfa3l .framer-1h3490z, .framer-kfa3l .framer-p4i1z1, .framer-kfa3l .framer-elgbdp, .framer-kfa3l .framer-1nndn2f, .framer-kfa3l .framer-6kl804, .framer-kfa3l .framer-j0me11 { --framer-link-text-color: #0099ff; --framer-link-text-decoration: underline; flex: 1 0 0px; height: 1px; position: relative; white-space: pre-wrap; width: 100%; word-break: break-word; word-wrap: break-word; }", ".framer-kfa3l .framer-1kbmr15, .framer-kfa3l .framer-1oenfuu, .framer-kfa3l .framer-1qpv3jm, .framer-kfa3l .framer-1l6y5qk, .framer-kfa3l .framer-2sjz6f { --framer-link-text-color: #0099ff; --framer-link-text-decoration: underline; flex: 1 0 0px; height: 1px; position: relative; white-space: pre-wrap; width: 100%; word-break: break-word; word-wrap: break-word; z-index: 1; }", ".framer-kfa3l .framer-30m72b { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: 96px; justify-content: flex-start; overflow: hidden; padding: 0px; position: relative; width: 480px; z-index: 1; }", ".framer-kfa3l .framer-18zon55 { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: 100px; justify-content: flex-start; overflow: hidden; padding: 0px; position: relative; width: 480px; z-index: 1; }", ".framer-kfa3l .framer-18ckclz { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: 85px; justify-content: flex-start; overflow: hidden; padding: 0px; position: relative; width: 480px; z-index: 1; }", ".framer-kfa3l .framer-1qrkf86 { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: 70px; justify-content: flex-start; overflow: hidden; padding: 0px; position: relative; width: 480px; z-index: 1; }", ".framer-kfa3l .framer-1k6c40s { align-content: center; align-items: center; background: linear-gradient(0deg, #7449b8 0.36036044627696545%, rgb(149, 108, 196) 50.81077781883446%, rgb(199, 150, 244) 95.49555735545115%); display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 10px; height: 776px; justify-content: center; overflow: hidden; padding: 0px; position: relative; width: 103%; }", ".framer-kfa3l .framer-qgslc3 { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: 27%; justify-content: center; overflow: hidden; padding: 0px; position: relative; width: 100%; }", ".framer-kfa3l .framer-5urhml, .framer-kfa3l .framer-p0j319, .framer-kfa3l .framer-19yblb3, .framer-kfa3l .framer-vjjziw, .framer-kfa3l .framer-wbdrk, .framer-kfa3l .framer-10mpfro, .framer-kfa3l .framer-cof6k3 { --framer-link-text-color: #0099ff; --framer-link-text-decoration: underline; flex: none; height: auto; position: relative; white-space: pre; width: auto; }", ".framer-kfa3l .framer-d5kh8 { align-content: center; align-items: center; display: flex; flex: 1 0 0px; flex-direction: row; flex-wrap: nowrap; gap: 35px; height: 1px; justify-content: center; overflow: hidden; padding: 0px; position: relative; width: 100%; }", ".framer-kfa3l .framer-14z6cch, .framer-kfa3l .framer-yjogl3, .framer-kfa3l .framer-1bm82vi, .framer-kfa3l .framer-sy99h3 { align-content: center; align-items: center; background: linear-gradient(128deg, #000000 -0.3603603388812091%, rgb(16, 9, 27) 18.37840037302928%, rgb(47, 25, 75) 49.72974072705518%, rgb(16, 9, 27) 83.24326523789415%, rgb(0, 0, 0) 100%); border-bottom-left-radius: 25px; border-bottom-right-radius: 25px; border-top-left-radius: 25px; border-top-right-radius: 25px; box-shadow: 9px 12px 19px 0px rgba(0, 0, 0, 0.46); display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 8px; height: 431px; justify-content: center; overflow: hidden; padding: 0px; position: relative; width: 289px; will-change: var(--framer-will-change-effect-override, transform); }", ".framer-kfa3l .framer-1y7shll { -webkit-mask: linear-gradient(0deg, rgba(0, 0, 0, 0) 0%, rgba(0,0,0,1) 34.5946165892455%) add; align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 10px; height: 62%; justify-content: center; mask: linear-gradient(0deg, rgba(0,0,0,0) 0%, rgba(0,0,0,1) 34.5946165892455%) add; overflow: hidden; padding: 0px; position: relative; width: 100%; }", ".framer-kfa3l .framer-psij4w { flex: none; height: 266px; position: relative; width: 518px; }", ".framer-kfa3l .framer-1d6noty, .framer-kfa3l .framer-1fff2ar, .framer-kfa3l .framer-hjmsrk, .framer-kfa3l .framer-rczefk { align-content: center; align-items: center; display: flex; flex: 1 0 0px; flex-direction: column; flex-wrap: nowrap; gap: 10px; height: 1px; justify-content: center; overflow: hidden; padding: 0px 20px 0px 20px; position: relative; width: 100%; }", ".framer-kfa3l .framer-1ap39fd, .framer-kfa3l .framer-9gmle2, .framer-kfa3l .framer-z3l9nr, .framer-kfa3l .framer-c9ded1 { --framer-link-text-color: #0099ff; --framer-link-text-decoration: underline; flex: none; height: 25%; position: relative; white-space: pre-wrap; width: 100%; word-break: break-word; word-wrap: break-word; }", ".framer-kfa3l .framer-1jf833m { -webkit-mask: linear-gradient(0deg, rgba(0, 0, 0, 0) 0%, rgba(0,0,0,1) 37.477510469453826%) add; align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 10px; height: 62%; justify-content: center; mask: linear-gradient(0deg, rgba(0,0,0,0) 0%, rgba(0,0,0,1) 37.477510469453826%) add; overflow: hidden; padding: 0px; position: relative; width: 100%; }", ".framer-kfa3l .framer-wl3smy { flex: none; height: 290px; position: relative; width: 364px; }", ".framer-kfa3l .framer-r35jn4 { -webkit-mask: linear-gradient(0deg, rgba(0, 0, 0, 0) 0%, rgba(0,0,0,1) 39.27931227125563%) add; align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 10px; height: 62%; justify-content: center; mask: linear-gradient(0deg, rgba(0,0,0,0) 0%, rgba(0,0,0,1) 39.27931227125563%) add; overflow: hidden; padding: 0px; position: relative; width: 100%; }", ".framer-kfa3l .framer-19ssksq { flex: none; height: 289px; position: relative; width: 431px; }", ".framer-kfa3l .framer-trl2k6 { -webkit-mask: linear-gradient(0deg, rgba(0, 0, 0, 0) 0%, rgba(0,0,0,1) 28.000000000000004%) add; align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 10px; height: 62%; justify-content: center; mask: linear-gradient(0deg, rgba(0,0,0,0) 0%, rgba(0,0,0,1) 28.000000000000004%) add; overflow: hidden; padding: 0px; position: relative; width: 100%; }", ".framer-kfa3l .framer-mzifvm { flex: none; height: 292px; position: relative; width: 318px; }", ".framer-kfa3l .framer-9gh2gt { align-content: center; align-items: center; background: linear-gradient(180deg, #7449b8 0%, rgb(47, 30, 74) 26%, rgb(17, 11, 31) 52%, rgb(5, 3, 10) 80.00000274933137%, rgb(0, 1, 0) 97.65765903232334%); display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 10px; height: 1748px; justify-content: flex-start; overflow: hidden; padding: 50px 0px 0px 0px; position: relative; width: 103%; }", ".framer-kfa3l .framer-12bym6p { align-content: flex-end; align-items: flex-end; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: 16%; justify-content: flex-end; overflow: hidden; padding: 0px; position: relative; width: 100%; }", ".framer-kfa3l .framer-1hydxja { --framer-link-text-color: #0099ff; --framer-link-text-decoration: underline; flex: 1 0 0px; height: auto; position: relative; white-space: pre-wrap; width: 1px; word-break: break-word; word-wrap: break-word; }", ".framer-kfa3l .framer-11ygdyh { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 0px; height: 71%; justify-content: center; overflow: hidden; padding: 0px; position: relative; width: 100%; z-index: 1; }", ".framer-kfa3l .framer-vw8zh7 { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 257px; height: 1196px; justify-content: flex-start; overflow: hidden; padding: 75px 0px 150px 0px; position: relative; width: 176px; }", ".framer-kfa3l .framer-14urzcs { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 10px; height: 12%; justify-content: center; overflow: hidden; padding: 0px; position: relative; width: 100%; z-index: 1; }", ".framer-kfa3l .framer-ythhg { --framer-link-text-color: #0099ff; --framer-link-text-decoration: underline; flex: 1 0 0px; height: 1px; position: relative; white-space: pre; width: auto; }", ".framer-kfa3l .framer-myj7w4 { height: 218px; left: 88px; position: absolute; top: 196px; width: 1px; }", ".framer-kfa3l .framer-1jyf10c { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 10px; height: 11%; justify-content: center; overflow: hidden; padding: 30px 0px 0px 0px; position: relative; width: 100%; z-index: 1; }", ".framer-kfa3l .framer-ko5b48 { height: 218px; left: 88px; position: absolute; top: 577px; width: 1px; }", ".framer-kfa3l .framer-4dsxhw { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 10px; height: 12%; justify-content: center; overflow: hidden; padding: 30px 0px 0px 0px; position: relative; width: 100%; z-index: 1; }", ".framer-kfa3l .framer-t5dvqj { height: 200px; left: 88px; position: absolute; top: 957px; width: 1px; }", ".framer-kfa3l .framer-ndcw5g { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 108px; height: 100%; justify-content: center; overflow: hidden; padding: 0px; position: relative; width: 1229px; }", ".framer-kfa3l .framer-1ngdyxu { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 50px; height: min-content; justify-content: center; overflow: hidden; padding: 0px; position: relative; width: 100%; }", ".framer-kfa3l .framer-b7xdw6, .framer-kfa3l .framer-1jyvv5p, .framer-kfa3l .framer-u2hos1, .framer-kfa3l .framer-kwbevs, .framer-kfa3l .framer-bjsxjy, .framer-kfa3l .framer-1ou2yi9 { --framer-link-text-color: #0099ff; --framer-link-text-decoration: underline; flex: none; height: auto; position: relative; white-space: pre-wrap; width: 100%; word-break: break-word; word-wrap: break-word; }", ".framer-kfa3l .framer-lx8g7e, .framer-kfa3l .framer-x0lvhv { --framer-link-text-color: #0099ff; --framer-link-text-decoration: underline; flex: none; height: auto; position: relative; white-space: pre-wrap; width: 64%; word-break: break-word; word-wrap: break-word; }", ".framer-kfa3l .framer-njvj5g { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 50px; height: min-content; justify-content: center; overflow: hidden; padding: 10px 0px 0px 0px; position: relative; width: 100%; }", ".framer-kfa3l .framer-c88mtb { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 46px; height: min-content; justify-content: center; overflow: hidden; padding: 0px; position: relative; width: 100%; }", ".framer-kfa3l .framer-1scf6su { --framer-link-text-color: #0099ff; --framer-link-text-decoration: underline; flex: none; height: auto; position: relative; white-space: pre-wrap; width: 62%; word-break: break-word; word-wrap: break-word; }", ".framer-kfa3l .framer-kft55k { flex: none; height: 1126px; left: 0px; overflow: hidden; position: absolute; right: 0px; top: calc(52.710592160133466% - 1126px / 2); z-index: -1; }", ".framer-kfa3l .framer-gl2ii2 { flex: none; height: 1045px; position: absolute; right: -754px; top: calc(50.35523978685615% - 1045px / 2); width: 1748px; }", ".framer-kfa3l .framer-17z7sjv { border-bottom-left-radius: 100px; flex: none; height: 1226px; overflow: hidden; position: relative; width: 103%; will-change: var(--framer-will-change-override, transform); }", ".framer-kfa3l .framer-q88r2 { --framer-link-text-color: #0099ff; --framer-link-text-decoration: underline; flex: none; height: auto; left: 49%; position: absolute; top: 51%; transform: translate(-50%, -50%); white-space: pre-wrap; width: 1096px; word-break: break-word; word-wrap: break-word; }", ".framer-kfa3l .framer-1xuybu2 { flex: none; height: 515px; left: calc(49.357142857142875% - 525px / 2); overflow: hidden; position: absolute; top: calc(46.329526916802635% - 515px / 2); width: 525px; }", ".framer-kfa3l .framer-137pxu2 { align-content: center; align-items: center; border-bottom-left-radius: 11px; border-bottom-right-radius: 11px; border-top-left-radius: 11px; border-top-right-radius: 11px; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: 135px; justify-content: center; left: 262px; overflow: hidden; padding: 0px; position: absolute; top: 47px; width: 150px; will-change: var(--framer-will-change-override, transform); }", ".framer-kfa3l .framer-1ofrke4 { align-content: center; align-items: center; border-bottom-left-radius: 11px; border-bottom-right-radius: 11px; border-top-left-radius: 11px; border-top-right-radius: 11px; bottom: 131px; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: 135px; justify-content: center; left: 0px; overflow: hidden; padding: 0px; position: absolute; width: 150px; will-change: var(--framer-will-change-override, transform); }", ".framer-kfa3l .framer-1z0mszj { align-content: center; align-items: center; border-bottom-left-radius: 11px; border-bottom-right-radius: 11px; border-top-left-radius: 11px; border-top-right-radius: 11px; bottom: 0px; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: 135px; justify-content: center; overflow: hidden; padding: 0px; position: absolute; right: 0px; width: 150px; will-change: var(--framer-will-change-override, transform); }", ".framer-kfa3l .framer-1ecv4ql { --framer-link-text-color: #0099ff; --framer-link-text-decoration: underline; flex: none; height: 608px; left: calc(49.938499384993875% - 644px / 2); position: absolute; top: calc(54.041916167664695% - 608px / 2); white-space: pre-wrap; width: 644px; word-break: break-word; word-wrap: break-word; }", ".framer-kfa3l .framer-q3kq32 { --framer-link-text-color: #0099ff; --framer-link-text-decoration: underline; flex: none; height: 20px; left: calc(49.21428571428574% - 1108px / 2); position: absolute; top: 42px; white-space: pre-wrap; width: 1108px; word-break: break-word; word-wrap: break-word; z-index: 1; }", ".framer-kfa3l .framer-40zkvf { flex: none; height: 86px; left: 1166px; position: absolute; top: 82px; width: 121px; z-index: 1; }", ".framer-kfa3l .framer-17anys9 { flex: none; height: 111px; left: 78px; position: absolute; top: 247px; width: 130px; z-index: 1; }", ".framer-kfa3l .framer-16j4j9j { flex: none; height: 50px; left: 12px; position: absolute; top: 84px; width: 58px; z-index: 1; }", ".framer-kfa3l .framer-1g77uag { flex: none; height: 57px; left: 308px; position: absolute; top: 15px; width: 67px; z-index: 1; }", ".framer-kfa3l .framer-g29xyi { --framer-link-text-color: #0099ff; --framer-link-text-decoration: underline; flex: none; height: 9px; left: calc(49.938499384993875% - 810px / 2); position: absolute; top: 14px; white-space: pre-wrap; width: 810px; word-break: break-word; word-wrap: break-word; z-index: 1; }", ".framer-kfa3l .framer-aa38u3 { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 10px; height: 1074px; justify-content: flex-end; overflow: hidden; padding: 0px 0px 50px 0px; position: relative; width: 103%; }", ".framer-kfa3l .framer-19zefj2 { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 10px; height: 100%; justify-content: flex-start; left: 0px; overflow: hidden; padding: 0px 0px 69px 0px; position: absolute; right: 0px; top: calc(49.90079365079367% - 100.1984126984127% / 2); z-index: 1; }", ".framer-kfa3l .framer-nc2ah7 { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: 281px; justify-content: flex-start; overflow: hidden; padding: 0px; position: relative; width: 1400px; }", ".framer-kfa3l .framer-1ya4hkd { border-bottom-left-radius: 25px; border-bottom-right-radius: 25px; border-top-left-radius: 25px; border-top-right-radius: 25px; bottom: 0px; flex: none; height: 280px; left: calc(47.928571428571445% - 30.28571428571429% / 2); overflow: hidden; position: absolute; width: 30%; will-change: var(--framer-will-change-override, transform); z-index: 1; }", ".framer-kfa3l .framer-pg5pnc { align-content: center; align-items: center; background: linear-gradient(90deg, #6e49c1 0%, rgb(146, 107, 228) 35.67570866765203%, rgb(199, 150, 244) 71.3513623486768%, rgb(199, 150, 244) 100%); border-bottom-left-radius: 25px; border-bottom-right-radius: 25px; border-top-left-radius: 25px; border-top-right-radius: 25px; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 34px; height: 918px; justify-content: flex-start; overflow: hidden; padding: 200px 0px 0px 0px; position: relative; width: 85%; will-change: var(--framer-will-change-override, transform); }", ".framer-kfa3l .framer-1lj5fmb { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 20px; height: min-content; justify-content: flex-start; overflow: hidden; padding: 20px; position: relative; width: 631px; z-index: 10; }", ".framer-kfa3l .framer-hipyx8, .framer-kfa3l .framer-utn562, .framer-kfa3l .framer-1wjnsyw { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: flex-start; padding: 0px; position: relative; width: 100%; }", ".framer-kfa3l .framer-18l427n, .framer-kfa3l .framer-l6ds24, .framer-kfa3l .framer-1qlh4z9 { flex: none; height: auto; position: relative; white-space: pre; width: auto; }", '.framer-kfa3l .framer-q4vqpw { --framer-input-background: #ffffff; --framer-input-border-bottom-width: 1px; --framer-input-border-color: rgba(97, 87, 87, 0.1); --framer-input-border-left-width: 1px; --framer-input-border-radius-bottom-left: 10px; --framer-input-border-radius-bottom-right: 10px; --framer-input-border-radius-top-left: 10px; --framer-input-border-radius-top-right: 10px; --framer-input-border-right-width: 1px; --framer-input-border-style: solid; --framer-input-border-top-width: 1px; --framer-input-box-shadow: 0px 0px 20px -10px #000000; --framer-input-focused-border-color: #c796f4; --framer-input-focused-border-style: solid; --framer-input-focused-border-width: 1px; --framer-input-focused-box-shadow: 0px 0px 30px -5px #000000; --framer-input-focused-transition: all 0.3s cubic-bezier(0.44,0,0.56,1) 0s; --framer-input-font-color: #050505; --framer-input-font-family: "Inter"; --framer-input-font-letter-spacing: 0em; --framer-input-font-line-height: 1.2em; --framer-input-font-size: 14px; --framer-input-font-weight: 400; --framer-input-icon-color: #999999; --framer-input-padding: 12px; --framer-input-placeholder-color: #000000; flex: none; height: 40px; position: relative; width: 100%; }', '.framer-kfa3l .framer-10gtzy9 { --framer-input-background: #fffafa; --framer-input-border-bottom-width: 1px; --framer-input-border-color: rgba(97, 87, 87, 0.1); --framer-input-border-left-width: 1px; --framer-input-border-radius-bottom-left: 10px; --framer-input-border-radius-bottom-right: 10px; --framer-input-border-radius-top-left: 10px; --framer-input-border-radius-top-right: 10px; --framer-input-border-right-width: 1px; --framer-input-border-style: solid; --framer-input-border-top-width: 1px; --framer-input-box-shadow: 0px 0px 20px 0px rgba(0, 0, 0, 0.25); --framer-input-focused-border-color: #c68aff; --framer-input-focused-border-style: solid; --framer-input-focused-border-width: 1px; --framer-input-focused-box-shadow: 0px 0px 30px -5px #000000; --framer-input-focused-transition: all 0.3s cubic-bezier(0.44,0,0.56,1) 0s; --framer-input-font-color: #030303; --framer-input-font-family: "Inter"; --framer-input-font-letter-spacing: 0em; --framer-input-font-line-height: 1.2em; --framer-input-font-size: 14px; --framer-input-font-weight: 400; --framer-input-icon-color: #999999; --framer-input-padding: 12px; --framer-input-placeholder-color: #000000; flex: none; height: 40px; position: relative; width: 100%; }', '.framer-kfa3l .framer-i8xdc8 { --framer-input-background: #fff5f5; --framer-input-border-bottom-width: 1px; --framer-input-border-color: rgba(97, 87, 87, 0.1); --framer-input-border-left-width: 1px; --framer-input-border-radius-bottom-left: 10px; --framer-input-border-radius-bottom-right: 10px; --framer-input-border-radius-top-left: 10px; --framer-input-border-radius-top-right: 10px; --framer-input-border-right-width: 1px; --framer-input-border-style: solid; --framer-input-border-top-width: 1px; --framer-input-box-shadow: 0px 0px 20px 0px rgba(0, 0, 0, 0.25); --framer-input-focused-border-color: #c68aff; --framer-input-focused-border-style: solid; --framer-input-focused-border-width: 1px; --framer-input-focused-box-shadow: 0px 0px 30px -5px #000000; --framer-input-focused-transition: all 0.3s cubic-bezier(0.44,0,0.56,1) 0s; --framer-input-font-color: #000000; --framer-input-font-family: "Inter"; --framer-input-font-letter-spacing: 0em; --framer-input-font-line-height: 1.2em; --framer-input-font-size: 14px; --framer-input-font-weight: 400; --framer-input-icon-color: #999999; --framer-input-padding: 12px; --framer-input-placeholder-color: #000000; --framer-input-wrapper-height: auto; --framer-textarea-resize: vertical; flex: none; height: auto; min-height: 100px; position: relative; width: 100%; }', ".framer-kfa3l .framer-1q4m86x { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: flex-start; padding: 0px; position: relative; width: 100%; }", ".framer-kfa3l .framer-1dryl97 { --framer-input-background: #ffffff; --framer-input-boolean-checked-background: #0099ff; --framer-input-border-bottom-width: 1px; --framer-input-border-color: rgba(136, 136, 136, 0.2); --framer-input-border-left-width: 1px; --framer-input-border-radius-bottom-left: 4px; --framer-input-border-radius-bottom-right: 4px; --framer-input-border-radius-top-left: 4px; --framer-input-border-radius-top-right: 4px; --framer-input-border-right-width: 1px; --framer-input-border-style: solid; --framer-input-border-top-width: 1px; --framer-input-focused-border-color: #0099ff; --framer-input-focused-border-style: solid; --framer-input-focused-border-width: 1px; --framer-input-icon-color: #ffffff; aspect-ratio: 1 / 1; flex: none; height: var(--framer-aspect-ratio-supported, 16px); position: relative; width: 16px; }", ".framer-kfa3l .framer-3phft0 { -webkit-user-select: none; flex: none; height: auto; position: relative; user-select: none; white-space: pre; width: auto; }", ".framer-kfa3l .framer-1stpjkv-container { flex: none; height: 40px; position: relative; width: 100%; }", ".framer-kfa3l .framer-v8mk4j { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: 360px; justify-content: center; overflow: hidden; padding: 0px; position: relative; width: 100%; }", ".framer-kfa3l .framer-1rd4anb { --border-bottom-width: 0px; --border-color: var(--token-d084cbd4-b115-44e5-81d9-5657e7d17569, #191919); --border-left-width: 0px; --border-right-width: 0px; --border-style: solid; --border-top-width: 1px; align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: wrap; gap: 40px 40px; height: 70%; justify-content: center; max-width: 100%; overflow: hidden; padding: 0px; position: relative; width: 100%; z-index: 1; }", ".framer-kfa3l .framer-13idvb8 { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: 100%; justify-content: center; overflow: visible; padding: 0px 0px 0px 100px; position: relative; width: 52%; }", ".framer-kfa3l .framer-1ah5x78 { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: 27%; justify-content: flex-start; overflow: hidden; padding: 0px; position: relative; width: 96%; }", ".framer-kfa3l .framer-srx16x { flex: none; height: 40px; position: relative; width: 197px; }", ".framer-kfa3l .framer-np7w2p { --framer-link-text-color: #0099ff; --framer-link-text-decoration: underline; flex: none; height: auto; position: relative; white-space: pre-wrap; width: 86%; word-break: break-word; word-wrap: break-word; }", ".framer-kfa3l .framer-175cs1u { align-content: flex-start; align-items: flex-start; display: flex; flex: 1 0 0px; flex-direction: column; flex-wrap: nowrap; gap: 51px; height: 99%; justify-content: center; overflow: visible; padding: 0px; position: relative; width: 1px; }", ".framer-kfa3l .framer-1ux6aie { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: 74px; justify-content: center; overflow: hidden; padding: 0px; position: relative; width: 100%; }", ".framer-kfa3l .framer-1ezbl7o, .framer-kfa3l .framer-1huym3x, .framer-kfa3l .framer-h7576z { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: 139%; justify-content: center; overflow: hidden; padding: 0px; position: relative; width: 24%; }", ".framer-kfa3l .framer-1t40v9d { aspect-ratio: 0.9868421052631579 / 1; flex: none; height: var(--framer-aspect-ratio-supported, 40px); position: relative; text-decoration: none; width: 27%; }", ".framer-kfa3l .framer-1jhggc0 { aspect-ratio: 1.0128205128205128 / 1; border-bottom-left-radius: 4px; border-bottom-right-radius: 4px; border-top-left-radius: 4px; border-top-right-radius: 4px; flex: none; height: var(--framer-aspect-ratio-supported, 38px); position: relative; text-decoration: none; width: 27%; }", ".framer-kfa3l .framer-1bos2om { aspect-ratio: 1.1111111111111112 / 1; border-bottom-left-radius: 7px; border-bottom-right-radius: 7px; border-top-left-radius: 7px; border-top-right-radius: 7px; flex: none; height: var(--framer-aspect-ratio-supported, 36px); position: relative; width: 27%; }", ".framer-kfa3l .framer-r0pktg { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: hidden; padding: 0px; position: relative; width: 100%; }", '.framer-kfa3l[data-border="true"]::after, .framer-kfa3l [data-border="true"]::after { content: ""; border-width: var(--border-top-width, 0) var(--border-right-width, 0) var(--border-bottom-width, 0) var(--border-left-width, 0); border-color: var(--border-color, none); border-style: var(--border-style, none); width: 100%; height: 100%; position: absolute; box-sizing: border-box; left: 0; top: 0; border-radius: inherit; pointer-events: none; }', "@media (min-width: 810px) and (max-width: 1399px) { .framer-kfa3l.framer-uh1o9d { width: 810px; } .framer-kfa3l .framer-s1041m-container { height: 64px; left: calc(50.24691358024693% - min(100%, 100%) / 2); order: 0; transform: unset; } .framer-kfa3l .framer-byykkr { height: 2240px; justify-content: flex-start; order: 1; } .framer-kfa3l .framer-i1t814 { height: 2240px; } .framer-kfa3l .framer-25cz4n { gap: 138px; height: 1180px; justify-content: flex-end; } .framer-kfa3l .framer-goticv { height: 384px; left: calc(49.35064935064937% - 605px / 2); order: 0; top: calc(45.59322033898307% - 384px / 2); width: 605px; } .framer-kfa3l .framer-beccjk-container { height: 714px; order: 1; width: 511px; } .framer-kfa3l .framer-1chij47 { flex: none; height: 8%; order: 2; } .framer-kfa3l .framer-11yv9vs { gap: 0px; height: 39px; left: calc(48.311688311688336% - 68px / 2); order: 0; padding: 0px; position: absolute; top: 2px; width: 68px; z-index: 1; } .framer-kfa3l .framer-q3t4ff { order: 9; } .framer-kfa3l .framer-5y5svz { order: 10; } .framer-kfa3l .framer-1vl0tbd, .framer-kfa3l .framer-11nhb1q, .framer-kfa3l .framer-cjiuin, .framer-kfa3l .framer-3ta07r { order: 0; } .framer-kfa3l .framer-1303agm, .framer-kfa3l .framer-1qg3b7p, .framer-kfa3l .framer-tn2aqa, .framer-kfa3l .framer-1tuba9p { order: 1; } .framer-kfa3l .framer-505jbb { order: 11; } .framer-kfa3l .framer-q6j4k8 { order: 12; } .framer-kfa3l .framer-hczyl2 { order: 13; } .framer-kfa3l .framer-p9o0oe { order: 14; } .framer-kfa3l .framer-4lrq9p { order: 5; } .framer-kfa3l .framer-1t47u2w, .framer-kfa3l .framer-1r4i13s, .framer-kfa3l .framer-kft55k { order: 2; } .framer-kfa3l .framer-avyt08 { order: 3; } .framer-kfa3l .framer-ayzpm5 { order: 4; } .framer-kfa3l .framer-a27yy { order: 15; } .framer-kfa3l .framer-1tus60m { height: 829px; order: 23; width: 105%; } .framer-kfa3l .framer-1oqx6wn { height: 157px; } .framer-kfa3l .framer-1w1p1b5 { height: 74%; } .framer-kfa3l .framer-shw5ug { -webkit-filter: drop-shadow(5px 1px 4px rgba(0, 0, 0, 0.56)); filter: drop-shadow(5px 1px 4px rgba(0, 0, 0, 0.56)); height: 78px; left: calc(49.198520345252795% - 372px / 2); top: calc(55.41401273885352% - 78px / 2); width: 372px; } .framer-kfa3l .framer-5szxxp { height: 6%; left: calc(50.00000000000002% - 86.10056925996204% / 2); top: calc(19.935170178282032% - 6.499536364661934% / 2); width: 86%; } .framer-kfa3l .framer-1wobtab { height: 7%; left: calc(47.05882352941179% - 86.10056925996204% / 2); top: calc(36.1426256077796% - 6.675199509652799% / 2); width: 86%; } .framer-kfa3l .framer-8czzsb { height: 7%; left: calc(44.11764705882355% - 86.10056925996204% / 2); top: calc(54.45705024311185% - 6.675199509652799% / 2); width: 86%; } .framer-kfa3l .framer-1nru97z { height: 6%; left: calc(44.11764705882355% - 86.10056925996204% / 2); top: calc(70.50243111831445% - 6.49953636466193% / 2); width: 86%; } .framer-kfa3l .framer-1h02pb2 { height: 7%; left: calc(50.00000000000002% - 86.10056925996204% / 2); top: calc(85.73743922204217% - 6.675199509652799% / 2); width: 86%; } .framer-kfa3l .framer-3xx0y { gap: 11px; padding: 0px 40px 0px 20px; width: 75%; } .framer-kfa3l .framer-911bwy { height: 14%; width: 112%; } .framer-kfa3l .framer-30m72b, .framer-kfa3l .framer-18zon55, .framer-kfa3l .framer-18ckclz, .framer-kfa3l .framer-1qrkf86 { width: 112%; } .framer-kfa3l .framer-1o844a5 { width: 99%; } .framer-kfa3l .framer-hqeet7, .framer-kfa3l .framer-1qpv3jm { flex: none; height: 50%; } .framer-kfa3l .framer-1k6c40s { height: 654px; order: 24; width: 105%; } .framer-kfa3l .framer-qgslc3 { height: 24%; } .framer-kfa3l .framer-d5kh8 { flex: none; gap: 11px; height: 65%; } .framer-kfa3l .framer-14z6cch, .framer-kfa3l .framer-yjogl3, .framer-kfa3l .framer-1bm82vi, .framer-kfa3l .framer-sy99h3 { height: 302px; width: 23%; } .framer-kfa3l .framer-1y7shll, .framer-kfa3l .framer-1jf833m, .framer-kfa3l .framer-r35jn4, .framer-kfa3l .framer-trl2k6 { height: 61%; } .framer-kfa3l .framer-psij4w { height: 173px; width: 329px; } .framer-kfa3l .framer-1d6noty, .framer-kfa3l .framer-1fff2ar, .framer-kfa3l .framer-hjmsrk, .framer-kfa3l .framer-rczefk { padding: 0px 10px 0px 10px; } .framer-kfa3l .framer-wl3smy { height: 183px; width: 192px; } .framer-kfa3l .framer-19ssksq { height: 186px; width: 262px; } .framer-kfa3l .framer-mzifvm { height: 185px; width: 230px; } .framer-kfa3l .framer-9gh2gt { height: 1300px; justify-content: center; order: 25; padding: 0px; width: 105%; } .framer-kfa3l .framer-12bym6p { align-content: flex-start; align-items: flex-start; height: 14%; justify-content: center; width: 93%; } .framer-kfa3l .framer-1hydxja { flex: none; white-space: pre; width: auto; } .framer-kfa3l .framer-11ygdyh { height: 70%; justify-content: flex-start; } .framer-kfa3l .framer-vw8zh7 { height: 1285px; order: 0; } .framer-kfa3l .framer-14urzcs { height: 16%; } .framer-kfa3l .framer-ythhg { bottom: -36px; flex: none; height: 131px; left: 50%; position: absolute; transform: translateX(-50%); z-index: 1; } .framer-kfa3l .framer-myj7w4 { height: 135px; top: 285px; } .framer-kfa3l .framer-1jyf10c { height: min-content; } .framer-kfa3l .framer-ko5b48 { height: 135px; top: 643px; } .framer-kfa3l .framer-vjjziw { left: 49%; position: absolute; top: 18px; transform: translateX(-50%); z-index: 1; } .framer-kfa3l .framer-t5dvqj { height: 110px; top: 948px; } .framer-kfa3l .framer-ndcw5g { gap: 96px; order: 1; padding: 0px 0px 40px 0px; width: 616px; } .framer-kfa3l .framer-1ngdyxu, .framer-kfa3l .framer-c88mtb { gap: 32px; } .framer-kfa3l .framer-lx8g7e { width: 71%; } .framer-kfa3l .framer-1jyvv5p { width: 70%; } .framer-kfa3l .framer-njvj5g { gap: 34px; } .framer-kfa3l .framer-x0lvhv { width: 78%; } .framer-kfa3l .framer-kwbevs { width: 86%; } .framer-kfa3l .framer-1scf6su { width: 77%; } .framer-kfa3l .framer-1ou2yi9 { width: 82%; } .framer-kfa3l .framer-gl2ii2 { height: 920px; left: -4px; right: -792px; top: calc(46.71403197158084% - 920px / 2); width: unset; } .framer-kfa3l .framer-17z7sjv { height: 668px; order: 26; width: 106%; } .framer-kfa3l .framer-1xuybu2 { height: 296px; left: calc(49.938499384993875% - 294px / 2); top: calc(50.00000000000002% - 296px / 2); width: 294px; z-index: 1; } .framer-kfa3l .framer-137pxu2 { height: 92px; left: 128px; top: 0px; width: 102px; z-index: 2; } .framer-kfa3l .framer-1ofrke4 { bottom: 70px; height: 92px; width: 102px; z-index: 2; } .framer-kfa3l .framer-1z0mszj { height: 92px; width: 102px; z-index: 2; } .framer-kfa3l .framer-40zkvf { left: 640px; top: 30px; } .framer-kfa3l .framer-17anys9 { bottom: 438px; height: unset; left: 57px; top: 145px; width: 127px; } .framer-kfa3l .framer-aa38u3 { height: 1144px; order: 27; padding: 100px 0px 50px 0px; width: 105%; } .framer-kfa3l .framer-19zefj2 { height: 105%; right: unset; top: calc(52.42537313432838% - 105.31716417910448% / 2); width: 100%; } .framer-kfa3l .framer-nc2ah7 { height: 294px; width: 809px; } .framer-kfa3l .framer-1ya4hkd { bottom: -10px; height: 217px; left: calc(50.06180469715701% - 25.71428571428571% / 2); width: 26%; } .framer-kfa3l .framer-pg5pnc { gap: 48px; padding: 150px 0px 0px 0px; } .framer-kfa3l .framer-v8mk4j { order: 28; } .framer-kfa3l .framer-13idvb8 { padding: 0px 0px 0px 50px; } .framer-kfa3l .framer-1t40v9d { height: 27%; width: var(--framer-aspect-ratio-supported, 28px); } .framer-kfa3l .framer-1jhggc0 { height: 26%; width: var(--framer-aspect-ratio-supported, 28px); } .framer-kfa3l .framer-1bos2om { height: 24%; width: var(--framer-aspect-ratio-supported, 28px); }}", "@media (max-width: 809px) { .framer-kfa3l.framer-uh1o9d { width: 390px; } .framer-kfa3l .framer-s1041m-container { height: 64px; left: calc(50.00000000000002% - min(100%, 100%) / 2); transform: unset; z-index: 10; } .framer-kfa3l .framer-byykkr { justify-content: flex-start; } .framer-kfa3l .framer-i1t814 { align-content: flex-start; align-items: flex-start; gap: 40px; height: 2200px; padding: 0px 0px 40px 0px; } .framer-kfa3l .framer-25cz4n { gap: 6px; height: 91.35071090047393vh; justify-content: center; } .framer-kfa3l .framer-goticv { height: 252px; left: 0px; order: 0; right: 0px; top: 208px; width: unset; } .framer-kfa3l .framer-beccjk-container { height: 667px; order: 1; width: 99%; } .framer-kfa3l .framer-1chij47, .framer-kfa3l .framer-trj8mo, .framer-kfa3l .framer-wklxf8, .framer-kfa3l .framer-1yzaovq { order: 2; } .framer-kfa3l .framer-11yv9vs { height: 32px; left: calc(48.00000000000002% - 40px / 2); order: 0; position: absolute; top: 34px; width: 40px; z-index: 1; } .framer-kfa3l .framer-1rafmoy, .framer-kfa3l .framer-u7cdek, .framer-kfa3l .framer-l970go { order: 0; } .framer-kfa3l .framer-fwex1c, .framer-kfa3l .framer-wmjea8, .framer-kfa3l .framer-xagwny { order: 1; } .framer-kfa3l .framer-1tus60m { height: 966px; padding: 0px; width: 112%; } .framer-kfa3l .framer-1oqx6wn { padding: 33px 0px 33px 0px; } .framer-kfa3l .framer-shw5ug { height: 41px; left: calc(50.12787723785168% - 192px / 2); top: calc(47.88732394366199% - 41px / 2); width: 192px; } .framer-kfa3l .framer-5cn6be { flex-direction: column; height: 81%; } .framer-kfa3l .framer-1fu82au { flex: none; height: 37%; width: 100%; } .framer-kfa3l .framer-c61lzi { flex: none; height: 548px; width: 391px; z-index: 1; } .framer-kfa3l .framer-8ip0ci { height: 491px; order: 0; width: 31%; } .framer-kfa3l .framer-5szxxp { left: calc(60.00000000000002% - 69.74789915966386% / 2); top: calc(11.201629327902262% - 11.021069692058347% / 2); } .framer-kfa3l .framer-1wobtab { left: calc(60.00000000000002% - 69.74789915966386% / 2); top: calc(32.79022403258658% - 11.183144246353322% / 2); } .framer-kfa3l .framer-8czzsb { left: calc(60.00000000000002% - 69.74789915966386% / 2); top: calc(50.9164969450102% - 11.183144246353322% / 2); } .framer-kfa3l .framer-1nru97z { left: calc(60.00000000000002% - 69.74789915966386% / 2); top: calc(72.50509164969452% - 11.021069692058347% / 2); } .framer-kfa3l .framer-1h02pb2 { left: calc(60.00000000000002% - 69.74789915966386% / 2); top: calc(91.4460285132383% - 11.183144246353322% / 2); } .framer-kfa3l .framer-3xx0y { order: 1; padding: 0px 20px 0px 0px; width: 65%; } .framer-kfa3l .framer-911bwy { height: 55px; width: 100%; } .framer-kfa3l .framer-30m72b { height: 76px; width: 100%; } .framer-kfa3l .framer-18zon55, .framer-kfa3l .framer-18ckclz { height: 71px; width: 100%; } .framer-kfa3l .framer-1qrkf86 { height: 49px; width: 100%; } .framer-kfa3l .framer-1k6c40s { height: 1449px; justify-content: flex-start; width: 111%; } .framer-kfa3l .framer-qgslc3 { height: 9%; } .framer-kfa3l .framer-d5kh8 { flex: none; flex-direction: column; height: 90%; } .framer-kfa3l .framer-14z6cch, .framer-kfa3l .framer-yjogl3, .framer-kfa3l .framer-1bm82vi, .framer-kfa3l .framer-sy99h3 { height: 285px; width: 62%; } .framer-kfa3l .framer-1y7shll, .framer-kfa3l .framer-1jf833m, .framer-kfa3l .framer-r35jn4, .framer-kfa3l .framer-trl2k6 { height: 64%; } .framer-kfa3l .framer-psij4w { height: 186px; width: 178%; } .framer-kfa3l .framer-wl3smy { height: 197px; width: 176%; } .framer-kfa3l .framer-19ssksq { height: 202px; width: 178%; } .framer-kfa3l .framer-mzifvm { height: 235px; width: 158%; } .framer-kfa3l .framer-9gh2gt { gap: 0px; height: 830px; padding: 0px; width: 111%; } .framer-kfa3l .framer-12bym6p { height: 11%; } .framer-kfa3l .framer-11ygdyh { gap: 11px; height: 89%; justify-content: flex-start; width: 102%; } .framer-kfa3l .framer-vw8zh7 { gap: 176px; height: 961px; width: 63px; } .framer-kfa3l .framer-14urzcs { height: 19%; } .framer-kfa3l .framer-ythhg { bottom: -30px; flex: none; height: 91px; left: 32px; order: 0; position: absolute; z-index: 1; } .framer-kfa3l .framer-myj7w4 { height: 161px; left: 38px; top: 222px; } .framer-kfa3l .framer-1jyf10c { height: 10%; padding: 0px; } .framer-kfa3l .framer-19yblb3 { bottom: 13px; left: 30px; order: 0; position: absolute; z-index: 1; } .framer-kfa3l .framer-ko5b48 { height: 146px; left: 42px; top: 470px; } .framer-kfa3l .framer-4dsxhw { height: 13%; } .framer-kfa3l .framer-vjjziw { left: 30px; order: 0; position: absolute; top: -3px; z-index: 1; } .framer-kfa3l .framer-t5dvqj { height: 135px; left: 39px; top: 675px; } .framer-kfa3l .framer-ndcw5g { align-content: flex-start; align-items: flex-start; gap: 54px; width: 80%; } .framer-kfa3l .framer-1ngdyxu { gap: 14px; } .framer-kfa3l .framer-b7xdw6, .framer-kfa3l .framer-lx8g7e, .framer-kfa3l .framer-kwbevs { width: 93%; } .framer-kfa3l .framer-1jyvv5p { width: 92%; } .framer-kfa3l .framer-njvj5g { gap: 10px; } .framer-kfa3l .framer-u2hos1 { width: 80%; } .framer-kfa3l .framer-x0lvhv { width: 95%; } .framer-kfa3l .framer-c88mtb { gap: 15px; } .framer-kfa3l .framer-bjsxjy { width: 99%; } .framer-kfa3l .framer-1scf6su, .framer-kfa3l .framer-1ou2yi9 { width: 90%; } .framer-kfa3l .framer-kft55k { bottom: -110px; height: unset; left: calc(49.87405541561715% - 388px / 2); right: unset; top: -58px; width: 388px; } .framer-kfa3l .framer-gl2ii2 { height: 472px; left: -61px; right: -421px; top: 113px; width: unset; } .framer-kfa3l .framer-17z7sjv { height: 382px; width: 111%; } .framer-kfa3l .framer-q88r2 { left: 49%; top: 51%; width: 386px; } .framer-kfa3l .framer-1xuybu2 { height: 381px; left: -4px; top: -1px; width: 391px; } .framer-kfa3l .framer-137pxu2 { border-bottom-left-radius: 5px; border-bottom-right-radius: 5px; border-top-left-radius: 5px; border-top-right-radius: 5px; height: 45px; left: 193px; top: 113px; width: 45px; } .framer-kfa3l .framer-1ofrke4 { border-bottom-left-radius: 5px; border-bottom-right-radius: 5px; border-top-left-radius: 5px; border-top-right-radius: 5px; bottom: unset; height: 45px; left: 133px; top: calc(51.70603674540685% - 45px / 2); width: 45px; } .framer-kfa3l .framer-1z0mszj { border-bottom-left-radius: 5px; border-bottom-right-radius: 5px; border-top-left-radius: 5px; border-top-right-radius: 5px; bottom: 130px; height: 45px; left: 233px; right: unset; width: 45px; } .framer-kfa3l .framer-q3kq32 { height: auto; left: 50%; top: 15px; transform: translateX(-50%); width: 79%; } .framer-kfa3l .framer-aa38u3 { height: 818px; width: 389px; } .framer-kfa3l .framer-19zefj2 { height: 100%; right: unset; top: -2px; width: 100%; } .framer-kfa3l .framer-nc2ah7 { height: 216px; width: 389px; } .framer-kfa3l .framer-1ya4hkd { height: 173px; left: calc(49.10025706940876% - 47.04370179948586% / 2); width: 47%; } .framer-kfa3l .framer-pg5pnc { gap: 14px; height: 662px; padding: 125px 0px 0px 0px; width: 85%; } .framer-kfa3l .framer-1lj5fmb { width: 323px; } .framer-kfa3l .framer-v8mk4j { flex-direction: column; height: 192px; justify-content: flex-start; } .framer-kfa3l .framer-1rd4anb { gap: 40px 0px; height: 98%; justify-content: flex-start; padding: 50px 0px 50px 0px; } .framer-kfa3l .framer-13idvb8 { height: 181%; padding: 0px; width: 50%; } .framer-kfa3l .framer-srx16x { height: 26px; width: 136px; } .framer-kfa3l .framer-175cs1u { gap: 16px; height: 111%; } .framer-kfa3l .framer-1ezbl7o { height: 54%; width: 34%; } .framer-kfa3l .framer-1t40v9d { height: var(--framer-aspect-ratio-supported, 18px); width: 30%; } .framer-kfa3l .framer-1jhggc0 { border-bottom-left-radius: 5px; border-bottom-right-radius: 5px; border-top-left-radius: 5px; border-top-right-radius: 5px; height: 18%; width: var(--framer-aspect-ratio-supported, 19px); } .framer-kfa3l .framer-1bos2om { border-bottom-left-radius: 5px; border-bottom-right-radius: 5px; border-top-left-radius: 5px; border-top-right-radius: 5px; height: 16%; width: var(--framer-aspect-ratio-supported, 19px); }}"]
  , lr = _e(wi, yi, "framer-kfa3l")
  , If = lr;
lr.displayName = "Desktop Test";
lr.defaultProps = {
    height: 16364,
    width: 1400
};
var We = [{
    defaultValue: 14,
    maxValue: 32,
    minValue: 14,
    name: "Optical size",
    tag: "opsz"
}, {
    defaultValue: 400,
    maxValue: 900,
    minValue: 100,
    name: "Weight",
    tag: "wght"
}];
Se(lr, [{
    explicitInter: !0,
    fonts: [{
        family: "Chau Philomene One",
        openType: !0,
        source: "google",
        style: "normal",
        url: "https://fonts.gstatic.com/s/chauphilomeneone/v15/55xxezRsPtfie1vPY49qzdgSlJiHRQFsmYx7QMISdQ.woff2",
        weight: "400"
    }, {
        family: "Bevan",
        openType: !0,
        source: "google",
        style: "normal",
        url: "https://fonts.gstatic.com/s/bevan/v25/4iCj6KZ0a9NXjF8fUir7tlSJ.woff2",
        weight: "400"
    }, {
        family: "Open Sans",
        openType: !0,
        source: "google",
        style: "normal",
        url: "https://fonts.gstatic.com/s/opensans/v43/memSYaGs126MiZpBA-UvWbX2vVnXBbObj2OVZyOOSr4dVJWUgshZ1y4iY1M2xLER.woff2",
        weight: "800"
    }, {
        family: "Open Sans",
        openType: !0,
        source: "google",
        style: "normal",
        url: "https://fonts.gstatic.com/s/opensans/v43/memSYaGs126MiZpBA-UvWbX2vVnXBbObj2OVZyOOSr4dVJWUgsjZ0C4iY1M2xLER.woff2",
        weight: "400"
    }, {
        family: "Open Sans",
        source: "google",
        style: "normal",
        url: "https://fonts.gstatic.com/s/opensans/v43/memSYaGs126MiZpBA-UvWbX2vVnXBbObj2OVZyOOSr4dVJWUgsjr0C4iY1M2xLER.woff2",
        weight: "500"
    }, {
        family: "Open Sans",
        source: "google",
        style: "italic",
        url: "https://fonts.gstatic.com/s/opensans/v43/memQYaGs126MiZpBA-UFUIcVXSCEkx2cmqvXlWq8tWZ0Pw86hd0RkyFjaVIUwaERZjA.woff2",
        weight: "700"
    }, {
        family: "Bevan",
        source: "google",
        style: "italic",
        url: "https://fonts.gstatic.com/s/bevan/v25/4iCt6KZ0a9NXjG8YWCvZs0SJD4U.woff2",
        weight: "400"
    }, {
        family: "Open Sans",
        source: "google",
        style: "normal",
        url: "https://fonts.gstatic.com/s/opensans/v43/memSYaGs126MiZpBA-UvWbX2vVnXBbObj2OVZyOOSr4dVJWUgsg-1y4iY1M2xLER.woff2",
        weight: "700"
    }, {
        family: "Inter",
        source: "framer",
        style: "normal",
        unicodeRange: "U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F",
        url: "https://framerusercontent.com/assets/5A3Ce6C9YYmCjpQx9M4inSaKU.woff2",
        weight: "500"
    }, {
        family: "Inter",
        source: "framer",
        style: "normal",
        unicodeRange: "U+0301, U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116",
        url: "https://framerusercontent.com/assets/Qx95Xyt0Ka3SGhinnbXIGpEIyP4.woff2",
        weight: "500"
    }, {
        family: "Inter",
        source: "framer",
        style: "normal",
        unicodeRange: "U+1F00-1FFF",
        url: "https://framerusercontent.com/assets/6mJuEAguuIuMog10gGvH5d3cl8.woff2",
        weight: "500"
    }, {
        family: "Inter",
        source: "framer",
        style: "normal",
        unicodeRange: "U+0370-03FF",
        url: "https://framerusercontent.com/assets/xYYWaj7wCU5zSQH0eXvSaS19wo.woff2",
        weight: "500"
    }, {
        family: "Inter",
        source: "framer",
        style: "normal",
        unicodeRange: "U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF",
        url: "https://framerusercontent.com/assets/otTaNuNpVK4RbdlT7zDDdKvQBA.woff2",
        weight: "500"
    }, {
        family: "Inter",
        source: "framer",
        style: "normal",
        unicodeRange: "U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD",
        url: "https://framerusercontent.com/assets/d3tHnaQIAeqiE5hGcRw4mmgWYU.woff2",
        weight: "500"
    }, {
        family: "Inter",
        source: "framer",
        style: "normal",
        unicodeRange: "U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB",
        url: "https://framerusercontent.com/assets/DolVirEGb34pEXEp8t8FQBSK4.woff2",
        weight: "500"
    }, {
        family: "Inter",
        source: "framer",
        style: "normal",
        unicodeRange: "U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F",
        url: "https://framerusercontent.com/assets/5vvr9Vy74if2I6bQbJvbw7SY1pQ.woff2",
        weight: "400"
    }, {
        family: "Inter",
        source: "framer",
        style: "normal",
        unicodeRange: "U+0301, U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116",
        url: "https://framerusercontent.com/assets/EOr0mi4hNtlgWNn9if640EZzXCo.woff2",
        weight: "400"
    }, {
        family: "Inter",
        source: "framer",
        style: "normal",
        unicodeRange: "U+1F00-1FFF",
        url: "https://framerusercontent.com/assets/Y9k9QrlZAqio88Klkmbd8VoMQc.woff2",
        weight: "400"
    }, {
        family: "Inter",
        source: "framer",
        style: "normal",
        unicodeRange: "U+0370-03FF",
        url: "https://framerusercontent.com/assets/OYrD2tBIBPvoJXiIHnLoOXnY9M.woff2",
        weight: "400"
    }, {
        family: "Inter",
        source: "framer",
        style: "normal",
        unicodeRange: "U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF",
        url: "https://framerusercontent.com/assets/JeYwfuaPfZHQhEG8U5gtPDZ7WQ.woff2",
        weight: "400"
    }, {
        family: "Inter",
        source: "framer",
        style: "normal",
        unicodeRange: "U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD",
        url: "https://framerusercontent.com/assets/vQyevYAyHtARFwPqUzQGpnDs.woff2",
        weight: "400"
    }, {
        family: "Inter",
        source: "framer",
        style: "normal",
        unicodeRange: "U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB",
        url: "https://framerusercontent.com/assets/b6Y37FthZeALduNqHicBT6FutY.woff2",
        weight: "400"
    }, {
        family: "Inter",
        source: "framer",
        style: "normal",
        unicodeRange: "U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F",
        url: "https://framerusercontent.com/assets/mYcqTSergLb16PdbJJQMl9ebYm4.woff2",
        variationAxes: We,
        weight: "400"
    }, {
        family: "Inter",
        source: "framer",
        style: "normal",
        unicodeRange: "U+0301, U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116",
        url: "https://framerusercontent.com/assets/ZRl8AlxwsX1m7xS1eJCiSPbztg.woff2",
        variationAxes: We,
        weight: "400"
    }, {
        family: "Inter",
        source: "framer",
        style: "normal",
        unicodeRange: "U+1F00-1FFF",
        url: "https://framerusercontent.com/assets/nhSQpBRqFmXNUBY2p5SENQ8NplQ.woff2",
        variationAxes: We,
        weight: "400"
    }, {
        family: "Inter",
        source: "framer",
        style: "normal",
        unicodeRange: "U+0370-03FF",
        url: "https://framerusercontent.com/assets/DYHjxG0qXjopUuruoacfl5SA.woff2",
        variationAxes: We,
        weight: "400"
    }, {
        family: "Inter",
        source: "framer",
        style: "normal",
        unicodeRange: "U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF",
        url: "https://framerusercontent.com/assets/s7NH6sl7w4NU984r5hcmo1tPSYo.woff2",
        variationAxes: We,
        weight: "400"
    }, {
        family: "Inter",
        source: "framer",
        style: "normal",
        unicodeRange: "U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD",
        url: "https://framerusercontent.com/assets/7lw0VWkeXrGYJT05oB3DsFy8BaY.woff2",
        variationAxes: We,
        weight: "400"
    }, {
        family: "Inter",
        source: "framer",
        style: "normal",
        unicodeRange: "U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB",
        url: "https://framerusercontent.com/assets/wx5nfqEgOXnxuFaxB0Mn9OhmcZA.woff2",
        variationAxes: We,
        weight: "400"
    }]
}, ...ri, ...ai, ...oi, ...mi], {
    supportsExplicitInterCodegen: !0
});
var Ff = {
    exports: {
        Props: {
            type: "tsType",
            annotations: {
                framerContractVersion: "1"
            }
        },
        default: {
            type: "reactComponent",
            name: "FramerZ9xpqCjmE",
            slots: [],
            annotations: {
                framerImmutableVariables: "true",
                framerScrollSections: '{"RtiW4BHW6":{"pattern":":RtiW4BHW6","name":"inicio"},"rQDxBWB_3":{"pattern":":rQDxBWB_3","name":"logo-inicial"},"f7swpG67i":{"pattern":":f7swpG67i","name":"wrapper"},"V9O6sCVTl":{"pattern":":V9O6sCVTl","name":"videoinicio"},"XXEezqMXu":{"pattern":":XXEezqMXu","name":"bgvideo"},"KlOJNVF_u":{"pattern":":KlOJNVF_u","name":"frase"},"KeJe0B_xM":{"pattern":":KeJe0B_xM","name":"tempovideocerto"},"NUB0U5ILA":{"pattern":":NUB0U5ILA","name":"entradaarte"},"OihehVzHx":{"pattern":":OihehVzHx","name":"features"},"WaP13SeO9":{"pattern":":WaP13SeO9","name":"titulo"},"MMxsase0y":{"pattern":":MMxsase0y","name":"triggerentrada1"},"YFODfJezE":{"pattern":":YFODfJezE","name":"triggerentrada2"},"pHhhxPUZT":{"pattern":":pHhhxPUZT","name":"triggerentrada3"},"g6aZBJv2W":{"pattern":":g6aZBJv2W","name":"triggerentrada4"},"GYnlg6mcJ":{"pattern":":GYnlg6mcJ","name":"triggerentrada5"},"nD_oq8kR9":{"pattern":":nD_oq8kR9","name":"saida"},"hgs8BSARo":{"pattern":":hgs8BSARo","name":"vtcelular"},"VpZxxwxd0":{"pattern":":VpZxxwxd0","name":"the-genie"},"FPoP1GpCA":{"pattern":":FPoP1GpCA","name":"how-it-works-cell"},"dUsdg9oRi":{"pattern":":dUsdg9oRi","name":"howit-works"},"keJkBAn19":{"pattern":":keJkBAn19","name":"steps"},"sZldjcy7U":{"pattern":":sZldjcy7U","name":"howitworks1"},"qND4WuigO":{"pattern":":qND4WuigO","name":"promptcel"},"gruiAZGPS":{"pattern":":gruiAZGPS","name":"geniecel"},"rNBQ8j5Sa":{"pattern":":rNBQ8j5Sa","name":"howitworks2"},"yrlahjWCL":{"pattern":":yrlahjWCL","name":"customisecel"},"aNOtpQJaa":{"pattern":":aNOtpQJaa","name":"try-oncel"},"DIAOEWH49":{"pattern":":DIAOEWH49","name":"wrapper"},"ViDjXMLcb":{"pattern":":ViDjXMLcb","name":"video"},"GC2YhhMmn":{"pattern":":GC2YhhMmn","name":"videocontainer"},"n3A85bMFv":{"pattern":":n3A85bMFv","name":"frase"},"MeOBuvVJu":{"pattern":":MeOBuvVJu","name":"tempovideo"},"zptrXyLRx":{"pattern":":zptrXyLRx","name":"looks-entrada-titulo"},"yoBjMEn3L":{"pattern":":yoBjMEn3L","name":"features"},"gZtleereA":{"pattern":":gZtleereA","name":"titulo"},"fts6RYc2p":{"pattern":":fts6RYc2p","name":"triggerentrada1"},"tgMKJJexi":{"pattern":":tgMKJJexi","name":"triggerentrada2"},"C60W1w7uc":{"pattern":":C60W1w7uc","name":"triggerentrada3"},"FAYzCzeLQ":{"pattern":":FAYzCzeLQ","name":"triggerentrada4"},"SJ1PW_dV3":{"pattern":":SJ1PW_dV3","name":"triggerentrada5"},"AqL2QhPij":{"pattern":":AqL2QhPij","name":"saida"},"aI1wAp5Ip":{"pattern":":aI1wAp5Ip","name":"tryonfeature"},"grkLnkCXw":{"pattern":":grkLnkCXw","name":"the-genie"},"feQACshiT":{"pattern":":feQACshiT","name":"howit-works-tablet"},"NCdCPURSf":{"pattern":":NCdCPURSf","name":"steps"},"Y6X5CXx3l":{"pattern":":Y6X5CXx3l","name":"howitworks1"},"inM0vBLuY":{"pattern":":inM0vBLuY","name":"prompt-right"},"SNjiRs7WN":{"pattern":":SNjiRs7WN","name":"genie-right"},"zDyR2DHIK":{"pattern":":zDyR2DHIK","name":"howitworks2"},"RcK3G_P5Q":{"pattern":":RcK3G_P5Q","name":"customise"},"fK12ljxbJ":{"pattern":":fK12ljxbJ","name":"try-on"},"Sqxo3LhNr":{"pattern":":Sqxo3LhNr","name":"wrapper"},"uOu3oCaP7":{"pattern":":uOu3oCaP7","name":"video"},"XazZSUVbK":{"pattern":":XazZSUVbK","name":"videocontainer"},"AUHMKHElg":{"pattern":":AUHMKHElg","name":"frase"},"UKmMcUkWB":{"pattern":":UKmMcUkWB","name":"tempovideo"},"S9UTsr8Xg":{"pattern":":S9UTsr8Xg","name":"looks-entrada-titulo"},"pmcqn1EJe":{"pattern":":pmcqn1EJe","name":"featurescerto"},"piA7okTsE":{"pattern":":piA7okTsE","name":"features"},"kuJkQxXEy":{"pattern":":kuJkQxXEy","name":"titulo"},"WnnjXPlmc":{"pattern":":WnnjXPlmc","name":"triggerentrada1"},"Hhtx7SE02":{"pattern":":Hhtx7SE02","name":"triggerentrada2"},"e31u_zqTJ":{"pattern":":e31u_zqTJ","name":"triggerentrada3"},"ojpGpfRV5":{"pattern":":ojpGpfRV5","name":"triggerentrada4"},"JRZezuxbF":{"pattern":":JRZezuxbF","name":"triggerentrada5"},"JSyJmcgae":{"pattern":":JSyJmcgae","name":"saida"},"fmci_4tn7":{"pattern":":fmci_4tn7","name":"titulo"},"Nza3o0fvp":{"pattern":":Nza3o0fvp","name":"the-genie"},"LKzTPkwFG":{"pattern":":LKzTPkwFG","name":"howitworkscome\xE7o"},"GU_1L_sU6":{"pattern":":GU_1L_sU6","name":"howit-works"},"KMRS0dvGi":{"pattern":":KMRS0dvGi","name":"steps"},"F7SP3yteX":{"pattern":":F7SP3yteX","name":"howitworks1"},"VJHWmCfBR":{"pattern":":VJHWmCfBR","name":"prompt"},"oyKN_ut7y":{"pattern":":oyKN_ut7y","name":"genie"},"H0NpQuOUx":{"pattern":":H0NpQuOUx","name":"howitworks2"},"Zy2Op13O0":{"pattern":":Zy2Op13O0","name":"customise"},"KJfVaoeea":{"pattern":":KJfVaoeea","name":"try-on"},"CsuD50u94":{"pattern":":CsuD50u94","name":"enterprise"},"yrCYqJm90":{"pattern":":yrCYqJm90","name":"whychoosesections"},"no8GiZ_UF":{"pattern":":no8GiZ_UF","name":"whytitulo"},"p_2hSLzC2":{"pattern":":p_2hSLzC2","name":"whysections"},"fzwJNpn4P":{"pattern":":fzwJNpn4P","name":"fashionteams"},"SKMMJY2Am":{"pattern":":SKMMJY2Am","name":"fashion-with-purpose"},"u3Cxga2lK":{"pattern":":u3Cxga2lK","name":"why-reinvention"},"g1NviVPYF":{"pattern":":g1NviVPYF","name":"future-of-style"},"qHMzfkRj6":{"pattern":":qHMzfkRj6","name":"style-with-impact"},"E0qGawwNT":{"pattern":":E0qGawwNT","name":"mission"},"XsAlzgEZr":{"pattern":":XsAlzgEZr","name":"mission-name"},"X07d10DY5":{"pattern":":X07d10DY5","name":"mission-name"},"r1eMr7ujb":{"pattern":":r1eMr7ujb","name":"schedule-demo"},"APx6DtMxl":{"pattern":":APx6DtMxl","name":"footer"}}',
                framerIntrinsicWidth: "1400",
                framerIntrinsicHeight: "16364",
                framerResponsiveScreen: "",
                framerAutoSizeImages: "true",
                framerDisplayContentsDiv: "false",
                framerCanvasComponentVariantDetails: '{"propertyName":"variant","data":{"default":{"layout":["fixed","auto"]},"hIWTqwvPm":{"layout":["fixed","auto"]},"jUuLb2ZS_":{"layout":["fixed","auto"]}}}',
                framerColorSyntax: "true",
                framerContractVersion: "1",
                framerComponentViewportWidth: "true",
                framerAcceptsLayoutTemplate: "true"
            }
        },
        __FramerMetadata__: {
            type: "variable"
        }
    }
};
export {Ff as __FramerMetadata__, If as default};
//# sourceMappingURL=7zhSiaKM2wJbXyleO22rfIe6j6vPvMEhRZR43W98xGg.PHDDDM3P.mjs.map
