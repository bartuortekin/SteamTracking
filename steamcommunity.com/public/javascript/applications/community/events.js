/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
(self.webpackChunkcommunity = self.webpackChunkcommunity || []).push([
  [2136],
  {
    92242: (e) => {
      e.exports = {
        "duration-app-launch": "800ms",
        Container: "_3DZHUf7uLxFhqpWQ03npUj",
        StoreHeaderAdjust: "_1BdU3ODLnmsZ3KbvtJiHnd",
        SectionButtonCtn: "_1GTuE6_ao1Qwvew5Lusg6U",
        SectionButton: "_1-yPTyNLjIAr7TpssNaC3w",
        EventsSummariesCtn: "_2UHtoCnFCyDjJS4BJk7mwt",
        LatestUpdateButtonCtn: "fKrItA-LyyNbtBHpBCjT7",
        LatestUpdateIcon: "zbw9bsuwCymNm_EVq-TxJ",
        LatestUpdateButton: "_3F6YMCF6Zs8AuGfzk0Ir85",
      };
    },
    87699: (e, t, n) => {
      "use strict";
      n.d(t, { C: () => c, R: () => l });
      var a = n(85556),
        o = n(54842),
        s = n(35427),
        r = n(64936),
        i = n(82071);
      class l {
        constructor() {
          (this.m_mapBroadcasterSteamIDToEvents = new Map()),
            (this.m_mapBroadcasterSteamIDData = new Map()),
            (0, o.rC)(this);
        }
        static GetBBCodeParam(e, t, n = "") {
          const a = new RegExp(`\\W${t}\\W*=\\W*\\"(.*?)\\"`, "gmi").exec(e);
          return a ? a[1] : n;
        }
        static ParseCalendarEventPresentersFromText(e) {
          const t = /\[\W*speaker(\W[\s\S]*?)\]([\s\S]*?)\[\W*\/speaker\W*\]/gi,
            n = new Array();
          for (;;) {
            const a = t.exec(e);
            if (null === a) break;
            const o = a[1],
              r = a[2],
              i = l.GetBBCodeParam(o, "steamid"),
              c = {
                steamID: i ? new s.K(i) : void 0,
                name: l.GetBBCodeParam(o, "name"),
                title: l.GetBBCodeParam(o, "title"),
                company: l.GetBBCodeParam(o, "company"),
                photo: l.GetBBCodeParam(o, "photo"),
                bio: r,
              };
            n.push(c);
          }
          return n;
        }
        static ParseEventModelPresenters(e, t) {
          const n = e.GetDescriptionWithFallback(t);
          return l.ParseCalendarEventPresentersFromText(n);
        }
        static ParseEventAppReferencesFromText(e) {
          const t = /\/\/store\.steampowered\.com\/app\/(\d+)/gi,
            n = new Set();
          for (;;) {
            const a = t.exec(e);
            if (null === a) break;
            const o = a[1];
            n.add(Number(o));
          }
          return n;
        }
        static ParseEventModelAppReferences(e, t) {
          var n;
          const a = e.GetDescriptionWithFallback(t),
            o = l.ParseEventAppReferencesFromText(a);
          if (
            null === (n = e.jsondata) || void 0 === n
              ? void 0
              : n.referenced_appids
          )
            for (const t of e.jsondata.referenced_appids) o.add(t);
          return o;
        }
        BuildBroadcasterSteamIDToActiveEventMap(e) {
          return (0, a.mG)(this, void 0, void 0, function* () {
            const t = r.JW.GetTimeNowWithOverride(),
              n = e.GetCalendarItemsInTimeRange(t - 3600, t);
            for (const e of n.rgCalendarItems)
              i.j1.QueueLoadPartnerEvent(e.clanid, e.unique_id);
            const a = n.rgCalendarItems.map((e) =>
                i.j1.LoadPartnerEventFromClanEventGIDAndClanSteamID(
                  s.K.InitFromClanID(e.clanid),
                  e.unique_id,
                  0,
                ),
              ),
              o = yield Promise.all(a),
              l = new Map();
            for (const e of o)
              if (e && !(e.endTime && e.endTime < t))
                for (const t of e.GetBroadcastWhitelistAsSteamIDs())
                  l.has(t) ? l.get(t).push(e) : l.set(t, [e]);
            return l;
          });
        }
        IsBroadcasterAlreadyBound(e, t) {
          const n = this.m_mapBroadcasterSteamIDToEvents.get(e),
            a = n ? n.length : 0;
          if ((t ? t.length : 0) != a) return !1;
          for (let e = 0; e < a; e++) if (n[e] != t[e].GID) return !1;
          return !0;
        }
        static BuildSteamIDToPresenterMapFromEventList(e, t) {
          let n = new Map();
          for (const a of e) {
            if (!a) continue;
            const e = l.ParseEventModelPresenters(a, t);
            for (const t of e)
              t.steamID && n.set(t.steamID.ConvertTo64BitString(), t);
          }
          return n;
        }
        RemoveCachedDataIfNotInMap(e) {
          const t = new Array();
          this.m_mapBroadcasterSteamIDToEvents.forEach((n, a) => {
            e.has(a) || t.push(a);
          }),
            t.forEach((e) => {
              this.m_mapBroadcasterSteamIDData.delete(e),
                this.m_mapBroadcasterSteamIDToEvents.delete(e);
            });
        }
        static BuildAppIDRefsForEventList(e, t) {
          const n = new Set();
          for (const a of e) {
            l.ParseEventModelAppReferences(a, t).forEach((e) => n.add(e));
          }
          return Array.from(n);
        }
        UpdateCachedDataFromEvents(e, t) {
          e.forEach((e, n) => {
            if (this.IsBroadcasterAlreadyBound(n, e)) return;
            const a = {
              m_mapPresenters: l.BuildSteamIDToPresenterMapFromEventList(e, t),
              m_rgAppIDs: l.BuildAppIDRefsForEventList(e, t),
            };
            this.m_mapBroadcasterSteamIDData.set(n, a),
              this.m_mapBroadcasterSteamIDToEvents.set(
                n,
                e.map((e) => e.GID),
              );
          });
        }
        SynchronizeEventsWithBroadcasts(e, t) {
          return (0, a.mG)(this, void 0, void 0, function* () {
            const n = yield this.BuildBroadcasterSteamIDToActiveEventMap(e);
            this.RemoveCachedDataIfNotInMap(n),
              this.UpdateCachedDataFromEvents(n, t);
          });
        }
        GetPresenterMapForBroadcasterSteamID(e) {
          var t;
          return null === (t = this.m_mapBroadcasterSteamIDData.get(e)) ||
            void 0 === t
            ? void 0
            : t.m_mapPresenters;
        }
        GetAppIDListForBroadcasterSteamID(e) {
          var t;
          return null === (t = this.m_mapBroadcasterSteamIDData.get(e)) ||
            void 0 === t
            ? void 0
            : t.m_rgAppIDs;
        }
      }
      (0, a.gn)([o.LO], l.prototype, "m_mapBroadcasterSteamIDData", void 0);
      const c = new l();
    },
    82227: (e, t, n) => {
      "use strict";
      n.d(t, { M: () => w, q: () => _ });
      var a = n(85556),
        o = n(47427),
        s = n(27605),
        r = n(37563),
        i = n(77936),
        l = n(35427),
        c = n(31959),
        d = n(74257),
        m = n(94621),
        p = n(18538),
        u = n(49513),
        v = n(32144),
        h = n(45167),
        E = n(10162),
        I = n(91494),
        S = n(73941);
      let D = class extends o.Component {
        constructor() {
          super(...arguments), (this.m_clanSteamID = new l.K(r.JA.CLANSTEAMID));
        }
        componentDidMount() {
          d.wk.GetEditModel() &&
            "view" === this.props.mode &&
            d.wk.GetEditModel().ClearDirty();
        }
        componentDidUpdate(e) {
          d.wk.GetEditModel() &&
            "view" === this.props.mode &&
            d.wk.GetEditModel().ClearDirty();
        }
        render() {
          const { mode: e } = this.props;
          if ("view" === e) {
            let e = d.wk.GetEditModel().GetEventModel(),
              t = (0, i.jM)(r.De.LANGUAGE);
            return e.BHasSaleEnabled()
              ? o.createElement(
                  E.SV,
                  null,
                  o.createElement(I.oS, {
                    eventModel: e,
                    bIsPreview: !0,
                    language: t,
                  }),
                )
              : o.createElement(
                  o.Fragment,
                  null,
                  o.createElement(c.TY, {
                    event: e,
                    lang: t,
                    partnerEventStore: d.wk,
                    emoticonStore: h.F,
                    adminPanel: o.createElement(u.H, {
                      eventModel: e,
                      partnerEventStore: d.wk,
                    }),
                    otherEventRow: o.createElement(v._G, {
                      clanAccountID: e.clanSteamID.GetAccountID(),
                      trackingLocation: 6,
                      gidAnnouncement: e.AnnouncementGID,
                      partnerEventStore: d.wk,
                      bViewAllShowInfiniteScroll: !e.BIsOGGEvent(),
                    }),
                  }),
                );
          }
          return o.createElement(m.H, {
            editModel: d.wk.GetEditModel(),
            appid_or_vanity_str: this.props.match.params.appid_or_vanity_str,
            gid: this.props.match.params.gid,
            bDisplaySale: "previewsale" === e,
          });
        }
      };
      D = (0, a.gn)([s.Pi], D);
      const _ = (0, p.M)(D),
        w = (e) =>
          o.createElement(
            S.R0,
            Object.assign({}, e, {
              key: e.match.params.oldAnnouncementGID,
              bClearDirty: !0,
              bPreview: !1,
              bPreventRedirect: !0,
            }),
          );
    },
    96832: (e, t, n) => {
      "use strict";
      n.r(t), n.d(t, { default: () => x });
      var a = n(760),
        o = n(82227),
        s = n(47427),
        r = n(8285),
        i = n(77581),
        l = n(45944),
        c = n(42855),
        d = n(82071),
        m = n(81913),
        p = n(7765),
        u = n.n(p),
        v = n(69406),
        h = n(37563),
        E = n(85556),
        I = n(27605),
        S = n(20417),
        D = n(27784),
        _ = n(46882),
        w = n(93243),
        f = n(31846),
        B = n(54842);
      let G = class extends s.Component {
        constructor() {
          super(...arguments),
            (this.state = {
              bShowModal: !1,
              bLoadedLandingState: this.props.bPreventDismiss,
            });
        }
        componentDidMount() {
          this.props.bPreventDismiss
            ? this.LoadAppAndFirstEvent()
            : (window.fnPartnerEvent_ShowInfiniteScroll = (e, t) => {
                this.setState({ bShowModal: !0, appid: e, announcementGID: t });
              });
        }
        LoadAppAndFirstEvent() {
          var e;
          return (0, E.mG)(this, void 0, void 0, function* () {
            const t = (0, h.kQ)(
              "eventinfinitescrolllanding",
              "application_config",
            );
            let n;
            t && "string" == typeof t && (n = t);
            const a = window.location.href.startsWith(
                h.De.COMMUNITY_BASE_URL + "groups",
              ),
              o = a
                ? yield w.sV.LoadOGGClanInfoForGroupVanity(
                    this.props.match.params.appid_or_vanity_str,
                  )
                : yield w.sV.LoadOGGClanInfoForIdentifier(
                    this.props.match.params.appid_or_vanity_str,
                  );
            if ((console.log("output: ", (0, B.ZN)(o), a), o))
              if (o.partner_events_enabled) {
                const t = yield d.j1.LoadAdjacentPartnerEventsByAnnouncement(
                  n,
                  o.clanSteamID,
                  o.appid,
                  3,
                  3,
                );
                this.setState({
                  bLoadedLandingState: !1,
                  bShowModal: !0,
                  appid: o.appid,
                  clanSteamID: o.clanSteamID,
                  announcementGID:
                    null === (e = null == t ? void 0 : t[0]) || void 0 === e
                      ? void 0
                      : e.AnnouncementGID,
                });
              } else this.setState({ bLoadedLandingState: !1 });
            else
              console.error(
                "EventInfiniteScrollLanding: failed to load clan info for " +
                  this.props.match.params.appid_or_vanity_str,
              ),
                this.setState({ bLoadedLandingState: !1 });
          });
        }
        HideModal() {
          this.props.bPreventDismiss || this.setState({ bShowModal: !1 });
        }
        render() {
          const { bPreventDismiss: e } = this.props;
          return this.state.bShowModal
            ? s.createElement(D.x, {
                appid: this.state.appid,
                announcementGID: this.state.announcementGID,
                clanSteamID: this.state.clanSteamID,
                closeModal: this.HideModal,
                partnerEventStore: d.j1,
                trackingLocation: this.props.trackingLocation,
                showAppHeader: !0,
                bPrimaryPageFeature: e,
              })
            : this.state.bLoadedLandingState
            ? s.createElement(_.V, { string: (0, f.Xx)("#Loading") })
            : s.createElement("div", null);
        }
      };
      (0, E.gn)([S.ak], G.prototype, "HideModal", null),
        (G = (0, E.gn)([I.Pi], G));
      var g = n(82493),
        L = n(91618),
        M = n(3783),
        b = n(13049),
        A = n(32144),
        C = n(62613),
        k = n(92242);
      class P extends s.Component {
        constructor(e) {
          super(e),
            (this.state = {
              events: null,
              bShowModal: !1,
              modalInitialEvent: null,
              bPreLoaded: !1,
              announcementGIDList: [],
              last_update_event: null,
            });
          const t = (0, b.b)("EventWebRowEmbed");
          this.ValidateStoreDefault(t) &&
            ((this.state.bPreLoaded = t.bPreLoaded),
            (this.state.announcementGIDList = t.announcementGIDList),
            (this.state.last_update_event = t.last_update_event),
            (this.state.events = []),
            this.state.announcementGIDList.forEach((e) => {
              const t = d.j1.GetClanEventFromAnnouncementGID(e);
              t && this.state.events.push(t);
            }));
        }
        componentDidMount() {
          return (0, E.mG)(this, void 0, void 0, function* () {
            const {
              appid: e,
              event_customization: t,
              partnerEventStore: n,
              trackingLocation: a,
            } = this.props;
            if (!this.state.bPreLoaded) {
              const o = yield n.LoadAdjacentPartnerEvents(
                null,
                null,
                e,
                0,
                2,
                t,
              );
              if ((this.setState({ events: o }), a && o && o.length > 0)) {
                const e = c.cb.Get().GetTracker();
                this.state.events
                  .filter((e) => e.BIsPartnerEvent())
                  .forEach((t) =>
                    e.MarkEventShown(t.GID, t.clanSteamID.GetAccountID(), a),
                  ),
                  e.Flush();
              }
            }
            window.fnPartnerEvent_ShowInfiniteScroll = (e, t) => {
              this.setState({
                bShowModal: !0,
                announcementGID: t,
                modalInitialEvent: void 0,
              });
            };
          });
        }
        ValidateStoreDefault(e) {
          const t = e;
          return (
            !(!t || "object" != typeof t) &&
            void 0 !== t.bPreLoaded &&
            "boolean" == typeof t.bPreLoaded &&
            Array.isArray(t.announcementGIDList)
          );
        }
        ShowModal(e) {
          const { trackingLocation: t } = this.props;
          this.setState({
            bShowModal: !0,
            modalInitialEvent: e,
            announcementGID: void 0,
          });
          const n = c.cb.Get().GetTracker();
          e &&
            e.BIsPartnerEvent() &&
            n.MarkEventRead(e.GID, e.clanSteamID.GetAccountID(), t) &&
            n.Flush();
        }
        ShowLatestUpdateModal() {
          const {
              event_gid: e,
              announcement_gid: t,
              clan_account_id: n,
            } = this.state.last_update_event,
            { trackingLocation: a } = this.props;
          this.setState({
            bShowModal: !0,
            modalInitialEvent: void 0,
            announcementGID: t,
          });
          const o = c.cb.Get().GetTracker();
          e && o.MarkEventRead(e, n, a) && o.Flush();
        }
        CloseModal() {
          this.setState({ bShowModal: !1, modalInitialEvent: null });
        }
        BHasLastUpdateEvent() {
          var e;
          return Boolean(
            null === (e = this.state.last_update_event) || void 0 === e
              ? void 0
              : e.rtime,
          );
        }
        BShouldShowLastUpdateEvent() {
          const { last_update_event: e, events: t } = this.state;
          return (
            !(
              !this.BHasLastUpdateEvent() ||
              !(null == e ? void 0 : e.announcement_gid)
            ) && !(null == t ? void 0 : t.length)
          );
        }
        render() {
          var e, t, n;
          const a = this.state.events;
          if (!a)
            return s.createElement(
              "div",
              { className: u().FlexCenter },
              s.createElement(_.V, { size: "medium", position: "center" }),
            );
          const o = window.screen.width <= 500 ? 1 : 2,
            r = Boolean(null == a ? void 0 : a.length),
            i = this.BHasLastUpdateEvent(),
            l = this.BShouldShowLastUpdateEvent()
              ? this.state.last_update_event.announcement_gid
              : void 0,
            { strClassName: c } = this.props;
          return s.createElement(
            g.Ks,
            { className: c },
            this.state.bShowModal &&
              s.createElement(
                y,
                Object.assign({}, this.props, {
                  announcementGID:
                    this.state.announcementGID ||
                    (null === (e = this.state.modalInitialEvent) || void 0 === e
                      ? void 0
                      : e.AnnouncementGID),
                  eventModel: this.state.modalInitialEvent,
                  closeModal: this.CloseModal,
                }),
              ),
            r &&
              s.createElement(
                "div",
                null,
                s.createElement(
                  "h2",
                  null,
                  (0, f.Xx)("#EventBrowse_RecentEvents"),
                ),
                !(null === (t = this.context) || void 0 === t
                  ? void 0
                  : t.IN_GAMEPADUI) &&
                  s.createElement(
                    "div",
                    { className: k.SectionButtonCtn },
                    this.props.bViewAllShowInfiniteScroll
                      ? s.createElement(
                          g.Ks,
                          {
                            className: k.SectionButton,
                            onClick: () => this.ShowModal(a[0]),
                          },
                          (0, f.Xx)("#EventBrowse_MoreEventsBtn"),
                        )
                      : s.createElement(
                          m.JW,
                          {
                            eventModel: a[0],
                            route: m.Ue.k_eViewWebSiteHub,
                            className: k.SectionButton,
                          },
                          (0, f.Xx)("#EventBrowse_MoreEventsBtn"),
                        ),
                  ),
                s.createElement(
                  "div",
                  { className: k.EventsSummariesCtn },
                  a.slice(0, o).map((e) => {
                    const t =
                      1 === a.length && window.screen.width > 500 ? A.KE : A.T4;
                    return s.createElement(t, {
                      key: e.GID,
                      event: e,
                      onClick: (t) => {
                        this.ShowModal(e),
                          t.stopPropagation(),
                          t.preventDefault();
                      },
                    });
                  }),
                ),
              ),
            Boolean(i && l) &&
              s.createElement(T, {
                nUpdateTime: this.state.last_update_event.rtime,
                announcementGID: l,
                onClick: this.ShowLatestUpdateModal,
              }),
            Boolean(
              i &&
                !l &&
                !(null === (n = this.context) || void 0 === n
                  ? void 0
                  : n.IN_GAMEPADUI),
            ) &&
              s.createElement(U, {
                nUpdateTime: this.state.last_update_event.rtime,
                onClick: this.ShowLatestUpdateModal,
              }),
          );
        }
      }
      function y(e) {
        const {
            appid: t,
            partnerEventStore: n,
            trackingLocation: a,
            announcementGID: o,
            eventModel: r,
            closeModal: i,
          } = e,
          l = (0, h.id)();
        return s.createElement(D.x, {
          className: l ? void 0 : k.StoreHeaderAdjust,
          eventClassName: l ? k.GamePadUIWidthAdjust : void 0,
          appid: t,
          trackingLocation: a,
          announcementGID: o,
          partnerEventStore: n,
          eventModel: r,
          closeModal: i,
        });
      }
      function U(e) {
        return s.createElement(
          "div",
          { className: k.LatestUpdateButtonCtn },
          s.createElement(
            "div",
            { className: k.LatestUpdateIcon },
            s.createElement(C.BNo, null),
          ),
          s.createElement(
            g.Ks,
            { className: k.LatestUpdateButton, onClick: e.onClick },
            (0, f.Xx)(
              "#EventBrowse_LatestUpdateTime_Button",
              (0, f.m9)(e.nUpdateTime),
            ),
          ),
        );
      }
      function T(e) {
        const { nUpdateTime: t, announcementGID: n, onClick: a } = e,
          o = n ? d.j1.GetClanEventFromAnnouncementGID(n) : null,
          r = (e) => {
            null == a || a(), e.stopPropagation(), e.preventDefault();
          };
        return s.createElement(
          "div",
          null,
          s.createElement(
            "h2",
            null,
            (0, f.Xx)("#EventBrowse_LastUpdateDate", (0, f.m9)(t)),
          ),
          s.createElement(
            "div",
            { className: k.SectionButtonCtn },
            s.createElement(
              "div",
              { className: k.SectionButton, onClick: r },
              (0, f.Xx)("#EventBrowse_ViewLatestUpdate"),
            ),
          ),
          Boolean(o) &&
            s.createElement(
              L.s,
              {
                className: k.EventsSummariesCtn,
                "flow-children": "column",
                navEntryPreferPosition: M.c4.PREFERRED_CHILD,
              },
              s.createElement(A.KE, { event: o, onClick: r }),
            ),
        );
      }
      (P.contextType = h.E_),
        (0, E.gn)([S.ak], P.prototype, "ShowModal", null),
        (0, E.gn)([S.ak], P.prototype, "ShowLatestUpdateModal", null),
        (0, E.gn)([S.ak], P.prototype, "CloseModal", null);
      var F = n(74257),
        W = n(64936);
      class N extends s.Component {
        render() {
          const { appid: e } = this.props;
          let t = W.JW.GetTimeNowWithOverrideAsDate(),
            n = new Date(t.setUTCHours(0, 0, 0, 0) - 15552e6),
            a = Math.floor(n.getTime() / 1e3);
          return s.createElement(
            "div",
            {
              className:
                "detailBox altFooter greenlight_home_box section announcements_row",
            },
            s.createElement(P, {
              appid: e,
              partnerEventStore: F.wk,
              event_customization: {
                require_tags: ["workshop"],
                rtime_oldestevent: a,
              },
              strClassName: k.Container,
              trackingLocation: 6,
              bViewAllShowInfiniteScroll: !0,
            }),
          );
        }
      }
      function x(e) {
        const [t, n] = s.useState(!0);
        return (
          s.useEffect(() => {
            l.Q8.Init(new i.J(h.De.WEBAPI_BASE_URL)),
              d.j1.Init(),
              Promise.all([c.cb.InitGlobal()]).then(() => n(!1));
          }, []),
          t
            ? null
            : s.createElement(
                m.uX.Provider,
                { value: { bCanUseLink: !0 } },
                s.createElement(
                  r.rs,
                  null,
                  s.createElement(r.AW, {
                    exact: !0,
                    path: a.W3.ViewEventDetails(
                      ":appid_or_vanity_str",
                      ":oldAnnouncementGID(\\d+)",
                    ),
                    render: (e) => s.createElement(o.M, Object.assign({}, e)),
                  }),
                  s.createElement(r.AW, {
                    exact: !0,
                    path: a.W3.Listing(":appid_or_vanity_str"),
                    render: (e) =>
                      s.createElement(
                        G,
                        Object.assign(
                          {
                            key:
                              "InfScroll_NoDismissApp_" + e.match.params.appid,
                          },
                          e,
                          { bPreventDismiss: !0, trackingLocation: 6 },
                        ),
                      ),
                  }),
                  s.createElement(r.AW, {
                    exact: !0,
                    path: a.W3.WorkshopHub(":appid(\\d+)"),
                    render: (e) =>
                      s.createElement(
                        N,
                        Object.assign({}, e, {
                          appid: +e.match.params.appid,
                          key: "Workshop" + e.match.params.appid,
                        }),
                      ),
                  }),
                  s.createElement(r.AW, {
                    path: a.W3.AppHub(":appid"),
                    render: (e) =>
                      s.createElement(
                        G,
                        Object.assign({}, e, {
                          key: "InfScroll_App_" + e.match.params.appid,
                          trackingLocation: 6,
                        }),
                      ),
                  }),
                  s.createElement(r.AW, {
                    path: a.W3.GroupHub(":group_vanity"),
                    render: (e) =>
                      s.createElement(
                        G,
                        Object.assign({}, e, {
                          key: "InfScroll_App_" + e.match.params.group_vanity,
                          trackingLocation: 6,
                        }),
                      ),
                  }),
                  s.createElement(r.AW, { component: v.R }),
                ),
              )
        );
      }
    },
  },
]);
