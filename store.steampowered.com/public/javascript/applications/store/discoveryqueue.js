/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
(self.webpackChunkstore = self.webpackChunkstore || []).push([
  [556],
  {
    54423: (e) => {
      e.exports = {
        "duration-app-launch": "800ms",
        DiscoveryQueueWidgetCtn:
          "discoveryqueueappwidget_DiscoveryQueueWidgetCtn_1LXqx",
        WidgetText: "discoveryqueueappwidget_WidgetText_co4IP",
        WidgetCapsule: "discoveryqueueappwidget_WidgetCapsule_ZyOLs",
        CloseButton: "discoveryqueueappwidget_CloseButton_bfN8k",
        Y: "discoveryqueueappwidget_Y_1FD7r",
      };
    },
    13043: (e, t, n) => {
      "use strict";
      n.d(t, { p: () => u });
      var i = n(85556),
        r = n(47427),
        o = n(82493),
        c = n(4030),
        s = n(20417),
        a = n(37563),
        l = n(35643);
      function u(e) {
        const { children: t, navTreeRef: n } = e,
          u = (0, i._T)(e, ["children", "navTreeRef"]),
          d = r.useRef(),
          g = (0, s.BE)(d, n),
          p = (0, a.id)(),
          A = window.__virtual_keyboard_client;
        if (p) {
          const e = window.__nav_tree_root;
          return r.createElement(
            o.Fe,
            Object.assign({}, u, {
              navTreeRef: g,
              secondary: !0,
              parentEmbeddedNavTree: e,
            }),
            r.createElement(
              l.o5,
              { factory: A },
              r.createElement(c.O, null, t),
            ),
          );
        }
        return r.createElement(r.Fragment, null, t);
      }
    },
    71472: (e, t, n) => {
      "use strict";
      n.d(t, {
        Ar: () => l,
        Wo: () => u,
        i9: () => s,
        ks: () => o,
        nQ: () => a,
        ni: () => d,
      });
      var i = n(47427),
        r = n(8285);
      function o(e, t) {
        let n;
        "string" == typeof e
          ? (n = e)
          : "location" in e
          ? (n = e.location.search)
          : "search" in e && (n = e.search);
        const i = new URLSearchParams(n.substring(1));
        if (i.has(t)) {
          const e = i.getAll(t);
          return e[e.length - 1];
        }
      }
      const c = (e) => null != e;
      function s(e, t, n, i = !1) {
        const r = new URLSearchParams(e.location.search.substring(1));
        r.delete(t),
          c(n) && r.append(t, n),
          i
            ? e.replace(`?${r.toString()}`, Object.assign({}, e.location.state))
            : e.push(`?${r.toString()}`);
      }
      function a(e, t, n) {
        s(e, t, n, !0);
      }
      function l(e, t) {
        const n = (0, r.k6)(),
          a = (0, r.TH)(),
          l = (0, i.useMemo)(() => {
            const n = o(a.search, e);
            return c(n)
              ? c(t)
                ? "boolean" == typeof t
                  ? t.constructor("false" !== n)
                  : t.constructor(n)
                : n
              : t;
          }, [a.search, e, t]),
          u = (0, i.useCallback)(
            (t) => {
              s(n, e, c(t) ? String(t) : null);
            },
            [n, e],
          );
        return [l, u];
      }
      function u(e, t, n = !1) {
        const i = new URLSearchParams(e.location.search.substring(1));
        for (const e in t)
          if (t.hasOwnProperty(e)) {
            const n = t[e];
            i.delete(e), c(n) && i.append(e, n);
          }
        n
          ? e.replace(`?${i.toString()}`, Object.assign({}, e.location.state))
          : e.push(`?${i.toString()}`);
      }
      function d(e, t) {
        u(e, t, !0);
      }
    },
    86445: (e, t, n) => {
      "use strict";
      n.r(t), n.d(t, { default: () => m });
      var i = n(47427),
        r = n(13043),
        o = n(91618),
        c = n(41130),
        s = n(74840),
        a = n(80886),
        l = n(71472),
        u = n(62613),
        d = n(3613),
        g = n(40735),
        p = n(31846),
        A = n(54423),
        v = n.n(A),
        E = n(37563);
      function m(e) {
        const { appID: t } = e,
          n = (0, g.g)(),
          [A] = (0, l.Ar)("inqueue", "0"),
          [m, D] = (0, i.useState)(!1),
          [y, b] = (0, i.useState)(!1),
          [R] = (0, a.vs)(t, { include_assets: !0 }),
          h = (0, c.L)(),
          N = i.useRef();
        i.useEffect(() => {
          var e;
          return null === (e = N.current) || void 0 === e
            ? void 0
            : e.Activate(!0);
        }, []);
        const S = (0, E.id)(),
          { eStoreDiscoveryQueueType: w, storePageFilter: M } =
            i.useMemo(() => {
              if ((null == A ? void 0 : A.length) > 0) {
                const e = A.split("_"),
                  t = Number(e[0]);
                let n;
                return (
                  e.length > 1 && (n = (0, s.M_)(e[1])),
                  { eStoreDiscoveryQueueType: t, storePageFilter: n }
                );
              }
              return { eStoreDiscoveryQueueType: 0, storePageFilter: void 0 };
            }, [A]),
          Q = i.useCallback(() => {
            b(!0);
          }, []),
          Z = i.useCallback(() => {
            D(!0);
          }, []),
          C = (0, s.ZP)(w, M);
        return n && R
          ? y
            ? null
            : i.createElement(
                r.p,
                {
                  NavigationManager: h,
                  navTreeRef: N,
                  navID: "DiscoveryQueueAppWidget",
                },
                i.createElement(
                  o.s,
                  {
                    focusable: !0,
                    className: v().DiscoveryQueueWidgetCtn,
                    onSecondaryButton: Q,
                    onOKButton: Z,
                    onOKActionDescription: (0, p.Xx)(
                      "#DiscoveryQueue_ResumeWizard",
                    ),
                    onSecondaryActionDescription: (0, p.Xx)("#Button_Close"),
                  },
                  i.createElement("img", {
                    className: v().WidgetCapsule,
                    src:
                      null == R ? void 0 : R.GetAssets().GetSmallCapsuleURL(),
                  }),
                  i.createElement(
                    "div",
                    { onClick: Z, className: v().WidgetText },
                    (0, p.Xx)("#DiscoveryQueue_ResumeWizard"),
                    (null == C ? void 0 : C.length) > 0 && ": " + C,
                  ),
                  !S &&
                    i.createElement(
                      "div",
                      { className: v().CloseButton, onClick: Q },
                      i.createElement(u.X, null),
                    ),
                  m &&
                    i.createElement(d.MS, {
                      includeAppID: t,
                      bWizardVisible: m,
                      fnCloseModal: () => D(!1),
                      eStoreDiscoveryQueueType: w,
                      storePageFilter: M,
                    }),
                ),
              )
          : null;
      }
    },
    78862: (e, t, n) => {
      "use strict";
      n.r(t), n.d(t, { default: () => d });
      var i = n(47427),
        r = n(31846),
        o = n(3613),
        c = n(40735),
        s = n(91618),
        a = n(37563),
        l = n(50898),
        u = n(90069);
      function d(e) {
        const t = (0, c.g)(),
          [n, d] = (0, i.useState)(!1),
          g = i.useCallback(() => {
            a.L7.logged_in
              ? d(!0)
              : (0, u.AM)(
                  i.createElement(l.JX, {
                    onOK: () => {
                      window.location.href = `${
                        a.De.STORE_BASE_URL
                      }login?redir=${encodeURIComponent(
                        document.location.href,
                      )}`;
                    },
                    strOKButtonText: (0, r.Xx)(
                      "#DiscoveryQueue_Error_Login_Title",
                    ),
                    strDescription: (0, r.Xx)("#DiscoveryQueue_Error_Login"),
                    strTitle: (0, r.Xx)("#DiscoveryQueue_Error_Login_Title"),
                  }),
                  window,
                );
          }, []);
        return t
          ? i.createElement(
              s.s,
              null,
              i.createElement(
                "a",
                { onClick: g, className: "experiment-button" },
                (0, r.Xx)("#DiscoveryQueue_OpenWizard"),
              ),
              n &&
                i.createElement(o.MS, {
                  bWizardVisible: n,
                  fnCloseModal: () => d(!1),
                  eStoreDiscoveryQueueType: 0,
                }),
            )
          : i.createElement(
              "div",
              { className: "experiment-button-placeholder" },
              " ",
            );
      }
    },
    89272: (e, t, n) => {
      "use strict";
      n.d(t, { Z: () => i });
      const i =
        "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyJpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoV2luZG93cykiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6QUQ5NEMwOTYzRDc4MTFFQUExREZEODRBMDBCNjdENTEiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6QUQ5NEMwOTczRDc4MTFFQUExREZEODRBMDBCNjdENTEiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDpBRDk0QzA5NDNENzgxMUVBQTFERkQ4NEEwMEI2N0Q1MSIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDpBRDk0QzA5NTNENzgxMUVBQTFERkQ4NEEwMEI2N0Q1MSIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/Po/TXacAAABMSURBVHjaYvz//z8DNQHjyDMQDICGJgDx3f/kA5DeBJhh8f+pB+JBXr4DNFeZSp69CzLwP7UjZdTAkWAgVdMh1XMK1fPyCCwPAQIMAKf/Y+3dveJlAAAAAElFTkSuQmCC";
    },
  },
]);
