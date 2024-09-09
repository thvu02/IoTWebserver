/*!

=========================================================
* Black Dashboard React - v1.2.0
=========================================================

* Product Page: https://www.creative-tim.com/product/black-dashboard-react
* Copyright 2020 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/black-dashboard-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
/*! For license information please see main.8c2fa44d.chunk.js.LICENSE.txt */
(this["webpackJsonpblack-dashboard-react"] =
  this["webpackJsonpblack-dashboard-react"] || []).push([
  [0],
  {
    195: function (e, t, a) {
      "use strict";
      a.r(t);
      var r = a(77),
        o = a(2),
        n = a.n(o),
        s = a(30),
        i = a.n(s),
        c = a(17),
        d = a(8),
        l = (a(83), a(84), a(85), a(86), a(9));
      const b = "",
        j = "white-content",
        h = Object(o.createContext)({ theme: b, changeTheme: () => {} });
      var p = a(0);
      function u(e) {
        const t = Object(o.useState)(b),
          a = Object(l.a)(t, 2),
          r = a[0],
          n = a[1];
        return (
          Object(o.useEffect)(() => {
            switch (r) {
              case j:
                document.body.classList.add("white-content");
                break;
              case b:
              default:
                document.body.classList.remove("white-content");
            }
          }, [r]),
          Object(p.jsx)(h.Provider, {
            value: {
              theme: r,
              changeTheme: function (e) {
                n(e);
              },
            },
            children: e.children,
          })
        );
      }
      const m = "blue",
        f = Object(o.createContext)({ color: m, changeColor: (e) => {} });
      function g(e) {
        const t = Object(o.useState)(m),
          a = Object(l.a)(t, 2),
          r = a[0],
          n = a[1];
        return Object(p.jsx)(f.Provider, {
          value: {
            color: r,
            changeColor: function (e) {
              n(e);
            },
          },
          children: e.children,
        });
      }
      var x = a(20),
        O = a(5),
        A = a.n(O),
        v = a(196),
        C = a(197),
        y = a(198),
        N = a(199),
        w = a(211),
        S = a(200);
      var k = function (e) {
        const t = n.a.useState(!1),
          a = Object(l.a)(t, 2),
          r = a[0],
          o = a[1],
          s = n.a.useState("navbar-transparent"),
          i = Object(l.a)(s, 2),
          c = i[0],
          d = i[1];
        n.a.useEffect(
          () => (
            window.addEventListener("resize", b),
            function () {
              window.removeEventListener("resize", b);
            }
          )
        );
        const b = () => {
          window.innerWidth < 993 && r
            ? d("bg-white")
            : d("navbar-transparent");
        };
        return Object(p.jsx)(p.Fragment, {
          children: Object(p.jsx)(v.a, {
            className: A()("navbar-absolute", c),
            expand: "lg",
            children: Object(p.jsxs)(C.a, {
              fluid: !0,
              children: [
                Object(p.jsxs)("div", {
                  className: "navbar-wrapper",
                  children: [
                    Object(p.jsx)("div", {
                      className: A()("navbar-toggle d-inline", {
                        toggled: e.sidebarOpened,
                      }),
                      children: Object(p.jsxs)(y.a, {
                        onClick: e.toggleSidebar,
                        children: [
                          Object(p.jsx)("span", {
                            className: "navbar-toggler-bar bar1",
                          }),
                          Object(p.jsx)("span", {
                            className: "navbar-toggler-bar bar2",
                          }),
                          Object(p.jsx)("span", {
                            className: "navbar-toggler-bar bar3",
                          }),
                        ],
                      }),
                    }),
                    Object(p.jsx)(N.a, {
                      onClick: (e) => e.preventDefault(),
                      children: e.brandText,
                    }),
                  ],
                }),
                Object(p.jsxs)(y.a, {
                  onClick: () => {
                    d(r ? "navbar-transparent" : "bg-white"), o(!r);
                  },
                  children: [
                    Object(p.jsx)("span", {
                      className: "navbar-toggler-bar navbar-kebab",
                    }),
                    Object(p.jsx)("span", {
                      className: "navbar-toggler-bar navbar-kebab",
                    }),
                    Object(p.jsx)("span", {
                      className: "navbar-toggler-bar navbar-kebab",
                    }),
                  ],
                }),
                Object(p.jsx)(w.a, {
                  navbar: !0,
                  isOpen: r,
                  children: Object(p.jsx)(S.a, {
                    className: "mx-auto",
                    navbar: !0,
                    children: Object(p.jsx)("a", {
                      className: "navbar-text mx-auto mb-0 h1",
                      href: "./ ",
                      children: Object(p.jsx)("h1", {
                        children: "STM32U5 Webserver Demonstration",
                      }),
                    }),
                  }),
                }),
              ],
            }),
          }),
        });
      };
      var B,
        H = a(201);
      function T(e) {
        const t = Object(d.g)(),
          a = n.a.useRef(null);
        n.a.useEffect(
          () => (
            navigator.platform.indexOf("Win") > -1 &&
              (B = new x.a(a.current, {
                suppressScrollX: !0,
                suppressScrollY: !1,
              })),
            function () {
              navigator.platform.indexOf("Win") > -1 && B.destroy();
            }
          )
        );
        const r = e.routes,
          o = e.logo;
        let s = null,
          i = null;
        return (
          void 0 !== o &&
            (void 0 !== o.outterLink
              ? ((s = Object(p.jsx)("a", {
                  href: o.outterLink,
                  className: "simple-text logo-normal",
                  target: "_blank",
                  onClick: e.toggleSidebar,
                  children: Object(p.jsx)("div", {
                    className: "logo-img",
                    children: Object(p.jsx)("img", {
                      src: o.imgSrc,
                      alt: "ST_logo_2020",
                    }),
                  }),
                })),
                (i = Object(p.jsx)("a", {
                  href: o.outterLink,
                  className: "simple-text logo-normal",
                  target: "_blank",
                  onClick: e.toggleSidebar,
                  children: o.text,
                })))
              : ((s = Object(p.jsx)(c.b, {
                  to: o.innerLink,
                  className: "simple-text logo-normal",
                  onClick: e.toggleSidebar,
                  children: Object(p.jsx)("div", {
                    className: "logo-img",
                    children: Object(p.jsx)("img", {
                      src: o.imgSrc,
                      alt: "ST_logo_2020",
                    }),
                  }),
                })),
                (i = Object(p.jsx)(c.b, {
                  to: o.innerLink,
                  className: "simple-text logo-normal",
                  onClick: e.toggleSidebar,
                  children: o.text,
                })))),
          Object(p.jsx)(f.Consumer, {
            children: ({ color: o }) =>
              Object(p.jsx)("div", {
                className: "sidebar",
                data: o,
                children: Object(p.jsxs)("div", {
                  className: "sidebar-wrapper",
                  ref: a,
                  children: [
                    null !== s || null !== i
                      ? Object(p.jsxs)("div", {
                          className: "logo",
                          children: [s, i],
                        })
                      : null,
                    Object(p.jsxs)(S.a, {
                      children: [
                        r.map((a, r) => {
                          return a.redirect
                            ? null
                            : Object(p.jsx)(
                                "li",
                                {
                                  className:
                                    ((o = a.path),
                                    (t.pathname === o ? "active" : "") +
                                      (a.pro ? " active-pro" : "")),
                                  children: Object(p.jsxs)(c.c, {
                                    to: a.layout + a.path,
                                    className: "nav-link",
                                    activeClassName: "active",
                                    onClick: e.toggleSidebar,
                                    children: [
                                      Object(p.jsx)("i", { className: a.icon }),
                                      Object(p.jsx)("p", { children: a.name }),
                                    ],
                                  }),
                                },
                                r
                              );
                          var o;
                        }),
                        Object(p.jsx)("li", {
                          className: "active-pro",
                          children: Object(p.jsx)(H.a, {
                            children: Object(p.jsx)("p", {
                              className: "text-center",
                              children: "STMicroelectronics",
                            }),
                          }),
                        }),
                      ],
                    }),
                  ],
                }),
              }),
          })
        );
      }
      T.defaultProps = { rtlActive: !1, routes: [{}] };
      var L = T,
        R = a(202),
        W = a(212),
        q = a(203);
      var D = function (e) {
          const t = n.a.useState(!1),
            a = Object(l.a)(t, 2),
            r = a[0],
            o = a[1];
          return Object(p.jsx)("div", {
            className: "fixed-plugin",
            children: Object(p.jsxs)(R.a, {
              isOpen: r,
              toggle: () => {
                o(!r);
              },
              children: [
                Object(p.jsx)(W.a, {
                  tag: "div",
                  children: Object(p.jsx)("i", {
                    className: "fa fa-cog fa-2x",
                  }),
                }),
                Object(p.jsxs)("ul", {
                  className: "dropdown-menu show",
                  children: [
                    Object(p.jsx)("li", {
                      className: "header-title",
                      children: "BACKGROUND MODE",
                    }),
                    Object(p.jsx)("li", {
                      className: "adjustments-line text-center color-change",
                      children: Object(p.jsx)(h.Consumer, {
                        children: ({ changeTheme: e }) =>
                          Object(p.jsxs)(p.Fragment, {
                            children: [
                              Object(p.jsx)("span", {
                                className: "color-label",
                                children: "LIGHT MODE",
                              }),
                              " ",
                              Object(p.jsx)(q.a, {
                                className: "light-badge mr-2",
                                onClick: () => e(j),
                              }),
                              " ",
                              Object(p.jsx)(q.a, {
                                className: "dark-badge ml-2",
                                onClick: () => e(b),
                              }),
                              " ",
                              Object(p.jsx)("span", {
                                className: "color-label",
                                children: "DARK MODE",
                              }),
                              " ",
                            ],
                          }),
                      }),
                    }),
                  ],
                }),
              ],
            }),
          });
        },
        P = a.p + "static/media/FLSTM32U5.jpg",
        F = a(204),
        E = a(205),
        X = a(206),
        V = a(207),
        G = a(208),
        M = a(209),
        z = a(210);
      var U = function (e) {
          return Object(p.jsx)(p.Fragment, {
            children: Object(p.jsx)("div", {
              className: "content",
              children: Object(p.jsxs)(F.a, {
                children: [
                  Object(p.jsx)(E.a, {
                    md: "12",
                    children: Object(p.jsxs)(X.a, {
                      children: [
                        Object(p.jsx)(V.a, {
                          className: "mb-1",
                          children: Object(p.jsx)(G.a, {
                            tag: "h3",
                            className: "text-info",
                            children: Object(p.jsx)("strong", {
                              children: "STM32U5 product",
                            }),
                          }),
                        }),
                        Object(p.jsx)(M.a, {
                          className: "mb-1",
                          style: { height: "40rem" },
                          src: P,
                        }),
                        Object(p.jsxs)(z.a, {
                          children: [
                            Object(p.jsxs)("h4", {
                              children: [
                                "The ",
                                Object(p.jsx)("span", {
                                  style: { color: "#ff8d72" },
                                  children: "STM32U5",
                                }),
                                " series offers advanced power-saving microcontrollers, based on Arm\xae ",
                                Object(p.jsx)("span", {
                                  style: { color: "#ff8d72" },
                                  children: "Cortex\xae-M33",
                                }),
                                " to meet the most demanding power/performance requirements for smart applications, including wearables, personal medical devices, home automation, and industrial sensors.",
                              ],
                            }),
                            Object(p.jsxs)("h4", {
                              children: [
                                "Offering up to 2 Mbytes of Flash (dual bank) memory and 786 Kbytes of SRAM, the ",
                                Object(p.jsx)("span", {
                                  style: { color: "#ff8d72" },
                                  children: "STM32U5",
                                }),
                                " series of microcontrollers takes performance to the next level.",
                              ],
                            }),
                            Object(p.jsxs)("h4", {
                              children: [
                                "The ",
                                Object(p.jsx)("span", {
                                  style: { color: "#ff8d72" },
                                  children: "STM32U5",
                                }),
                                " offers a large portfolio with 8 packages (from 48 to 169 pins) and supports up to 125\xb0C ambient temperature.",
                              ],
                            }),
                          ],
                        }),
                      ],
                    }),
                  }),
                  Object(p.jsx)(E.a, {
                    md: "12",
                    children: Object(p.jsxs)(X.a, {
                      children: [
                        Object(p.jsx)(V.a, {
                          className: "mb-1",
                          children: Object(p.jsx)(G.a, {
                            tag: "h3",
                            className: "text-info",
                            children: Object(p.jsx)("strong", {
                              children: "STM32U5 demonstration",
                            }),
                          }),
                        }),
                        Object(p.jsxs)(z.a, {
                          children: [
                            Object(p.jsx)("h3", {
                              className: "mb-1",
                              style: { color: "#e14eca" },
                              children: "Demonstration Overview",
                            }),
                            Object(p.jsxs)("h4", {
                              children: [
                                "This demonstration is part of ",
                                Object(p.jsx)("span", {
                                  style: { color: "#ff8d72" },
                                  children: "STM32CubeU5",
                                }),
                                " firmware. It shows how to use the MX_WiFi module to perform a HTTP requests using STM32 Cube HAL. The MX_WiFi module and a Web browser (Google Chrome in this case) are used to create a web server. This web page supports PC and phone usage. The ",
                                Object(p.jsx)("span", {
                                  style: { color: "#ff8d72" },
                                  children: "B-U585I-IOT02A",
                                }),
                                " board is the HTTP server in this demonstration. IT contains the Web page resources sent after each client requests. The ",
                                Object(p.jsx)("span", {
                                  style: { color: "#ff8d72" },
                                  children: "B-U585I-IOT02A",
                                }),
                                " board is able to decode treat and provide responses according to any client requests.",
                              ],
                            }),
                            Object(p.jsxs)("ul", {
                              className: "mb-4 h4",
                              children: [
                                Object(p.jsx)("li", {
                                  style: { color: "rgba(255, 255, 255, 0.8)" },
                                  children:
                                    "Web page resource requests (HTML page, CSS files, JS files ...).",
                                }),
                                Object(p.jsx)("li", {
                                  style: { color: "rgba(255, 255, 255, 0.8)" },
                                  children:
                                    "Sensors values requests (Temperature values, Pressure values and Humidity values).",
                                }),
                              ],
                            }),
                            Object(p.jsx)("h3", {
                              className: "mb-1",
                              style: { color: "#e14eca" },
                              children: "Demonstration Content",
                            }),
                            Object(p.jsxs)("h4", {
                              className: "mb-1",
                              children: [
                                "It consists of receiving data in real time from embedded sensors on ",
                                Object(p.jsx)("span", {
                                  style: { color: "#ff8d72" },
                                  children: "B-U585I-IOT02A",
                                }),
                                " board.",
                              ],
                            }),
                            Object(p.jsx)("h4", {
                              children:
                                "Three sensors are used in this application :",
                            }),
                            Object(p.jsxs)("ol", {
                              children: [
                                Object(p.jsx)("li", {
                                  className: "text-success h4 mb-1",
                                  children: " Temperature sensor",
                                }),
                                Object(p.jsx)("h4", {
                                  children:
                                    "The navigation to the temperature acquisition page is done by clicking on Temperature menu which appears in the side bar on the left of this page. The activation and the deactivation of temperature acquisition is done by clicking respectively on the start and stop buttons in the control panel below the data curves drawing window.",
                                }),
                                Object(p.jsx)("li", {
                                  className: "text-success h4 mb-1",
                                  children: " Pressure sensor",
                                }),
                                Object(p.jsx)("h4", {
                                  children:
                                    "The navigation to the pressure acquisition page is done by clicking on Pressure menu which appears in the side bar on the left of this page. The activation and the deactivation of pressure acquisition is done by clicking respectively on the start and stop buttons in the control panel below the data curves drawing window.",
                                }),
                                Object(p.jsx)("li", {
                                  className: "text-success h4 mb-1",
                                  children: " Humidity sensor",
                                }),
                                Object(p.jsx)("h4", {
                                  children:
                                    "The navigation to the humidity acquisition page is done by clicking on Humidity menu which appears in the side bar on the left of this page. The activation and the deactivation of humidity acquisition is done by clicking respectively on the start and stop buttons in the control panel below the data curves drawing window.",
                                }),
                              ],
                            }),
                            Object(p.jsx)("h4", {
                              children:
                                "The period of acquisition of each physical quantity measured is 1 second.",
                            }),
                          ],
                        }),
                      ],
                    }),
                  }),
                ],
              }),
            }),
          });
        },
        Q = a(19),
        I = (a(46), a(75));
      var K,
        _ = [
          {
            path: "/home",
            name: "Home",
            rtlName: "\u0627\u0644\u0631\u0645\u0648\u0632",
            icon: "fas fa-home",
            component: U,
            layout: "/admin",
          },
          {
            path: "/trung",
            name: "Trung",
            rtlName: "\u0627\u0644\u0631\u0645\u0648\u0632",
            icon: "fas fa-microchip",
            component: function (e) {
              var t = null;
              let a = {
                idle_data: (e) => {
                  let t = e
                    .getContext("2d")
                    .createLinearGradient(0, 230, 0, 50);
                  return (
                    t.addColorStop(1, "rgba(29,140,248,0.2)"),
                    t.addColorStop(0.4, "rgba(29,140,248,0.0)"),
                    t.addColorStop(0, "rgba(29,140,248,0)"),
                    {
                      datasets: [
                        {
                          fill: !0,
                          backgroundColor: t,
                          borderColor: "#1f8ef1",
                          borderWidth: 2,
                          borderDash: [],
                          borderDashOffset: 0,
                          pointBackgroundColor: "#1f8ef1",
                          pointBorderColor: "rgba(255,255,255,0)",
                          pointHoverBackgroundColor: "#1f8ef1",
                          pointBorderWidth: 20,
                          pointHoverRadius: 4,
                          pointHoverBorderWidth: 15,
                          pointRadius: 4,
                          data: [],
                        },
                      ],
                    }
                  );
                },
                idle_option: {
                  maintainAspectRatio: !1,
                  legend: { display: !1 },
                  tooltips: {
                    backgroundColor: "#f5f5f5",
                    titleFontColor: "#333",
                    bodyFontColor: "#666",
                    bodySpacing: 4,
                    xPadding: 12,
                    mode: "nearest",
                    intersect: 0,
                    position: "nearest",
                  },
                  responsive: !0,
                  scales: {
                    yAxes: [
                      {
                        barPercentage: 1.6,
                        gridLines: {
                          drawBorder: !1,
                          color: "rgba(29,140,248,0.0)",
                          zeroLineColor: "transparent",
                        },
                        ticks: { fontColor: "#9a9a9a" },
                      },
                    ],
                    xAxes: [
                      {
                        type: "realtime",
                        duration: 2e4,
                        refresh: 1e3,
                        pause: !1,
                        ttl: void 0,
                        time: { unit: "second" },
                        realtime: {
                          onRefresh: function (e) {
                            e.reset();
                          },
                          delay: 2e3,
                        },
                      },
                    ],
                  },
                },
                start_data: (e) => {
                  let t = e
                    .getContext("2d")
                    .createLinearGradient(0, 230, 0, 50);
                  return (
                    t.addColorStop(1, "rgba(29,140,248,0.2)"),
                    t.addColorStop(0.4, "rgba(29,140,248,0.0)"),
                    t.addColorStop(0, "rgba(29,140,248,0)"),
                    {
                      datasets: [
                        {
                          fill: !0,
                          backgroundColor: t,
                          borderColor: "#1f8ef1",
                          borderWidth: 2,
                          borderDash: [],
                          borderDashOffset: 0,
                          pointBackgroundColor: "#1f8ef1",
                          pointBorderColor: "rgba(255,255,255,0)",
                          pointHoverBackgroundColor: "#1f8ef1",
                          pointBorderWidth: 20,
                          pointHoverRadius: 4,
                          pointHoverBorderWidth: 15,
                          pointRadius: 4,
                          data: [],
                        },
                      ],
                    }
                  );
                },
                start_option: {
                  maintainAspectRatio: !1,
                  legend: { display: !1 },
                  tooltips: {
                    backgroundColor: "#f5f5f5",
                    titleFontColor: "#333",
                    bodyFontColor: "#666",
                    bodySpacing: 4,
                    xPadding: 12,
                    mode: "nearest",
                    intersect: 0,
                    position: "nearest",
                  },
                  responsive: !0,
                  scales: {
                    yAxes: [
                      {
                        barPercentage: 1.6,
                        gridLines: {
                          drawBorder: !1,
                          color: "rgba(29,140,248,0.0)",
                          zeroLineColor: "transparent",
                        },
                        ticks: { fontColor: "#9a9a9a" },
                      },
                    ],
                    xAxes: [
                      {
                        type: "realtime",
                        duration: 4e4,
                        refresh: 1e3,
                        pause: !0,
                        ttl: void 0,
                        time: { unit: "second" },
                        realtime: {
                          onRefresh: function (e) {
                            !(function () {
                              var e = new XMLHttpRequest();
                              (e.onreadystatechange = function () {
                                4 === e.readyState &&
                                  200 === e.status &&
                                  (t = e.response);
                              }),
                                e.open("GET", "Read_Temperature", !0),
                                e.send();
                            })(),
                              e.data.datasets.forEach(function (e) {
                                e.data.push({ x: Date.now(), y: t });
                              });
                          },
                          delay: 2e3,
                        },
                      },
                    ],
                  },
                },
                stop_data: (e) => {
                  let t = e
                    .getContext("2d")
                    .createLinearGradient(0, 230, 0, 50);
                  return (
                    t.addColorStop(1, "rgba(29,140,248,0.2)"),
                    t.addColorStop(0.4, "rgba(29,140,248,0.0)"),
                    t.addColorStop(0, "rgba(29,140,248,0)"),
                    {
                      datasets: [
                        {
                          fill: !0,
                          backgroundColor: t,
                          borderColor: "#1f8ef1",
                          borderWidth: 2,
                          borderDash: [],
                          borderDashOffset: 0,
                          pointBackgroundColor: "#1f8ef1",
                          pointBorderColor: "rgba(255,255,255,0)",
                          pointHoverBackgroundColor: "#1f8ef1",
                          pointBorderWidth: 20,
                          pointHoverRadius: 4,
                          pointHoverBorderWidth: 15,
                          pointRadius: 4,
                          data: [],
                        },
                      ],
                    }
                  );
                },
                stop_option: {
                  maintainAspectRatio: !1,
                  legend: { display: !1 },
                  tooltips: {
                    backgroundColor: "#f5f5f5",
                    titleFontColor: "#333",
                    bodyFontColor: "#666",
                    bodySpacing: 4,
                    xPadding: 12,
                    mode: "nearest",
                    intersect: 0,
                    position: "nearest",
                  },
                  responsive: !0,
                  scales: {
                    yAxes: [
                      {
                        barPercentage: 1.6,
                        gridLines: {
                          drawBorder: !1,
                          color: "rgba(29,140,248,0.0)",
                          zeroLineColor: "transparent",
                        },
                        ticks: { fontColor: "#9a9a9a" },
                      },
                    ],
                    xAxes: [
                      {
                        type: "realtime",
                        duration: 4e4,
                        refresh: 500,
                        pause: !0,
                        ttl: void 0,
                        time: { unit: "second" },
                        realtime: {
                          onRefresh: function (e) {
                            e.reset();
                          },
                          delay: 2e3,
                        },
                      },
                    ],
                  },
                },
              };
              const r = n.a.useState("idle_data"),
                o = Object(l.a)(r, 1)[0],
                s = n.a.useState("idle_option"),
                i = Object(l.a)(s, 2),
                c = i[0],
                d = i[1],
                b = (e) => {
                  d(e);
                };
              return Object(p.jsx)(p.Fragment, {
                children: Object(p.jsx)("div", {
                  className: "content",
                  children: Object(p.jsxs)(F.a, {
                    children: [
                      Object(p.jsx)(E.a, {
                        xs: "12",
                        children: Object(p.jsxs)(X.a, {
                          className: "card-chart",
                          children: [
                            Object(p.jsx)(V.a, {
                              children: Object(p.jsx)(F.a, {
                                children: Object(p.jsx)(E.a, {
                                  className: "text-left",
                                  sm: "6",
                                  children: Object(p.jsx)(G.a, {
                                    tag: "h2",
                                    children: "Temperature",
                                  }),
                                }),
                              }),
                            }),
                            Object(p.jsx)(z.a, {
                              children: Object(p.jsx)("div", {
                                className: "chart-area",
                                children: Object(p.jsx)(Q.Line, {
                                  data: a[o],
                                  options: a[c],
                                }),
                              }),
                            }),
                          ],
                        }),
                      }),
                      Object(p.jsx)(E.a, {
                        md: "12",
                        children: Object(p.jsx)(X.a, {
                          children: Object(p.jsx)(z.a, {
                            children: Object(p.jsxs)("div", {
                              className: "places-buttons",
                              children: [
                                Object(p.jsx)(F.a, {
                                  children: Object(p.jsx)(E.a, {
                                    className: "ml-auto mr-auto text-center",
                                    md: "6",
                                    children: Object(p.jsx)(G.a, {
                                      tag: "h4",
                                      children: "Control panel",
                                    }),
                                  }),
                                }),
                                Object(p.jsx)(F.a, {
                                  children: Object(p.jsx)(E.a, {
                                    className: "mx-auto mr-auto",
                                    lg: "8",
                                    children: Object(p.jsxs)(F.a, {
                                      children: [
                                        Object(p.jsx)(E.a, {
                                          md: "4",
                                          children: Object(p.jsx)(I.a, {
                                            block: !0,
                                            color: "info",
                                            className: A()({
                                              active: "start_option" === c,
                                            }),
                                            onClick: () => b("start_option"),
                                            children: "Start",
                                          }),
                                        }),
                                        Object(p.jsx)(E.a, { md: "4" }),
                                        Object(p.jsx)(E.a, {
                                          md: "4",
                                          children: Object(p.jsx)(I.a, {
                                            block: !0,
                                            color: "info",
                                            className: A()({
                                              active: "stop_option" === c,
                                            }),
                                            onClick: () => b("stop_option"),
                                            children: "Stop",
                                          }),
                                        }),
                                      ],
                                    }),
                                  }),
                                }),
                              ],
                            }),
                          }),
                        }),
                      }),
                    ],
                  }),
                }),
              });
            },
            layout: "/admin",
          },
          {
            path: "/temperature",
            name: "Temperature",
            rtlName: "\u0627\u0644\u0631\u0645\u0648\u0632",
            icon: "fas fa-temperature-low",
            component: function (e) {
              var t = null;
              let a = {
                idle_data: (e) => {
                  let t = e
                    .getContext("2d")
                    .createLinearGradient(0, 230, 0, 50);
                  return (
                    t.addColorStop(1, "rgba(29,140,248,0.2)"),
                    t.addColorStop(0.4, "rgba(29,140,248,0.0)"),
                    t.addColorStop(0, "rgba(29,140,248,0)"),
                    {
                      datasets: [
                        {
                          fill: !0,
                          backgroundColor: t,
                          borderColor: "#1f8ef1",
                          borderWidth: 2,
                          borderDash: [],
                          borderDashOffset: 0,
                          pointBackgroundColor: "#1f8ef1",
                          pointBorderColor: "rgba(255,255,255,0)",
                          pointHoverBackgroundColor: "#1f8ef1",
                          pointBorderWidth: 20,
                          pointHoverRadius: 4,
                          pointHoverBorderWidth: 15,
                          pointRadius: 4,
                          data: [],
                        },
                      ],
                    }
                  );
                },
                idle_option: {
                  maintainAspectRatio: !1,
                  legend: { display: !1 },
                  tooltips: {
                    backgroundColor: "#f5f5f5",
                    titleFontColor: "#333",
                    bodyFontColor: "#666",
                    bodySpacing: 4,
                    xPadding: 12,
                    mode: "nearest",
                    intersect: 0,
                    position: "nearest",
                  },
                  responsive: !0,
                  scales: {
                    yAxes: [
                      {
                        barPercentage: 1.6,
                        gridLines: {
                          drawBorder: !1,
                          color: "rgba(29,140,248,0.0)",
                          zeroLineColor: "transparent",
                        },
                        ticks: { fontColor: "#9a9a9a" },
                      },
                    ],
                    xAxes: [
                      {
                        type: "realtime",
                        duration: 2e4,
                        refresh: 1e3,
                        pause: !1,
                        ttl: void 0,
                        time: { unit: "second" },
                        realtime: {
                          onRefresh: function (e) {
                            e.reset();
                          },
                          delay: 2e3,
                        },
                      },
                    ],
                  },
                },
                start_data: (e) => {
                  let t = e
                    .getContext("2d")
                    .createLinearGradient(0, 230, 0, 50);
                  return (
                    t.addColorStop(1, "rgba(29,140,248,0.2)"),
                    t.addColorStop(0.4, "rgba(29,140,248,0.0)"),
                    t.addColorStop(0, "rgba(29,140,248,0)"),
                    {
                      datasets: [
                        {
                          fill: !0,
                          backgroundColor: t,
                          borderColor: "#1f8ef1",
                          borderWidth: 2,
                          borderDash: [],
                          borderDashOffset: 0,
                          pointBackgroundColor: "#1f8ef1",
                          pointBorderColor: "rgba(255,255,255,0)",
                          pointHoverBackgroundColor: "#1f8ef1",
                          pointBorderWidth: 20,
                          pointHoverRadius: 4,
                          pointHoverBorderWidth: 15,
                          pointRadius: 4,
                          data: [],
                        },
                      ],
                    }
                  );
                },
                start_option: {
                  maintainAspectRatio: !1,
                  legend: { display: !1 },
                  tooltips: {
                    backgroundColor: "#f5f5f5",
                    titleFontColor: "#333",
                    bodyFontColor: "#666",
                    bodySpacing: 4,
                    xPadding: 12,
                    mode: "nearest",
                    intersect: 0,
                    position: "nearest",
                  },
                  responsive: !0,
                  scales: {
                    yAxes: [
                      {
                        barPercentage: 1.6,
                        gridLines: {
                          drawBorder: !1,
                          color: "rgba(29,140,248,0.0)",
                          zeroLineColor: "transparent",
                        },
                        ticks: { fontColor: "#9a9a9a" },
                      },
                    ],
                    xAxes: [
                      {
                        type: "realtime",
                        duration: 4e4,
                        refresh: 1e3,
                        pause: !0,
                        ttl: void 0,
                        time: { unit: "second" },
                        realtime: {
                          onRefresh: function (e) {
                            !(function () {
                              var e = new XMLHttpRequest();
                              (e.onreadystatechange = function () {
                                4 === e.readyState &&
                                  200 === e.status &&
                                  (t = e.response);
                              }),
                                e.open("GET", "Read_Temperature", !0),
                                e.send();
                            })(),
                              e.data.datasets.forEach(function (e) {
                                e.data.push({ x: Date.now(), y: t });
                              });
                          },
                          delay: 2e3,
                        },
                      },
                    ],
                  },
                },
                stop_data: (e) => {
                  let t = e
                    .getContext("2d")
                    .createLinearGradient(0, 230, 0, 50);
                  return (
                    t.addColorStop(1, "rgba(29,140,248,0.2)"),
                    t.addColorStop(0.4, "rgba(29,140,248,0.0)"),
                    t.addColorStop(0, "rgba(29,140,248,0)"),
                    {
                      datasets: [
                        {
                          fill: !0,
                          backgroundColor: t,
                          borderColor: "#1f8ef1",
                          borderWidth: 2,
                          borderDash: [],
                          borderDashOffset: 0,
                          pointBackgroundColor: "#1f8ef1",
                          pointBorderColor: "rgba(255,255,255,0)",
                          pointHoverBackgroundColor: "#1f8ef1",
                          pointBorderWidth: 20,
                          pointHoverRadius: 4,
                          pointHoverBorderWidth: 15,
                          pointRadius: 4,
                          data: [],
                        },
                      ],
                    }
                  );
                },
                stop_option: {
                  maintainAspectRatio: !1,
                  legend: { display: !1 },
                  tooltips: {
                    backgroundColor: "#f5f5f5",
                    titleFontColor: "#333",
                    bodyFontColor: "#666",
                    bodySpacing: 4,
                    xPadding: 12,
                    mode: "nearest",
                    intersect: 0,
                    position: "nearest",
                  },
                  responsive: !0,
                  scales: {
                    yAxes: [
                      {
                        barPercentage: 1.6,
                        gridLines: {
                          drawBorder: !1,
                          color: "rgba(29,140,248,0.0)",
                          zeroLineColor: "transparent",
                        },
                        ticks: { fontColor: "#9a9a9a" },
                      },
                    ],
                    xAxes: [
                      {
                        type: "realtime",
                        duration: 4e4,
                        refresh: 500,
                        pause: !0,
                        ttl: void 0,
                        time: { unit: "second" },
                        realtime: {
                          onRefresh: function (e) {
                            e.reset();
                          },
                          delay: 2e3,
                        },
                      },
                    ],
                  },
                },
              };
              const r = n.a.useState("idle_data"),
                o = Object(l.a)(r, 1)[0],
                s = n.a.useState("idle_option"),
                i = Object(l.a)(s, 2),
                c = i[0],
                d = i[1],
                b = (e) => {
                  d(e);
                };
              return Object(p.jsx)(p.Fragment, {
                children: Object(p.jsx)("div", {
                  className: "content",
                  children: Object(p.jsxs)(F.a, {
                    children: [
                      Object(p.jsx)(E.a, {
                        xs: "12",
                        children: Object(p.jsxs)(X.a, {
                          className: "card-chart",
                          children: [
                            Object(p.jsx)(V.a, {
                              children: Object(p.jsx)(F.a, {
                                children: Object(p.jsx)(E.a, {
                                  className: "text-left",
                                  sm: "6",
                                  children: Object(p.jsx)(G.a, {
                                    tag: "h2",
                                    children: "Temperature",
                                  }),
                                }),
                              }),
                            }),
                            Object(p.jsx)(z.a, {
                              children: Object(p.jsx)("div", {
                                className: "chart-area",
                                children: Object(p.jsx)(Q.Line, {
                                  data: a[o],
                                  options: a[c],
                                }),
                              }),
                            }),
                          ],
                        }),
                      }),
                      Object(p.jsx)(E.a, {
                        md: "12",
                        children: Object(p.jsx)(X.a, {
                          children: Object(p.jsx)(z.a, {
                            children: Object(p.jsxs)("div", {
                              className: "places-buttons",
                              children: [
                                Object(p.jsx)(F.a, {
                                  children: Object(p.jsx)(E.a, {
                                    className: "ml-auto mr-auto text-center",
                                    md: "6",
                                    children: Object(p.jsx)(G.a, {
                                      tag: "h4",
                                      children: "Control panel",
                                    }),
                                  }),
                                }),
                                Object(p.jsx)(F.a, {
                                  children: Object(p.jsx)(E.a, {
                                    className: "mx-auto mr-auto",
                                    lg: "8",
                                    children: Object(p.jsxs)(F.a, {
                                      children: [
                                        Object(p.jsx)(E.a, {
                                          md: "4",
                                          children: Object(p.jsx)(I.a, {
                                            block: !0,
                                            color: "info",
                                            className: A()({
                                              active: "start_option" === c,
                                            }),
                                            onClick: () => b("start_option"),
                                            children: "Start",
                                          }),
                                        }),
                                        Object(p.jsx)(E.a, { md: "4" }),
                                        Object(p.jsx)(E.a, {
                                          md: "4",
                                          children: Object(p.jsx)(I.a, {
                                            block: !0,
                                            color: "info",
                                            className: A()({
                                              active: "stop_option" === c,
                                            }),
                                            onClick: () => b("stop_option"),
                                            children: "Stop",
                                          }),
                                        }),
                                      ],
                                    }),
                                  }),
                                }),
                              ],
                            }),
                          }),
                        }),
                      }),
                    ],
                  }),
                }),
              });
            },
            layout: "/admin",
          },
          {
            path: "/pressure",
            name: "Pressure",
            rtlName: "\u0627\u0644\u0631\u0645\u0648\u0632",
            icon: "fas fa-tachometer-alt",
            component: function (e) {
              var t = null;
              let a = {
                idle_data: (e) => {
                  let t = e
                    .getContext("2d")
                    .createLinearGradient(0, 230, 0, 50);
                  return (
                    t.addColorStop(1, "rgba(29,140,248,0.2)"),
                    t.addColorStop(0.4, "rgba(29,140,248,0.0)"),
                    t.addColorStop(0, "rgba(29,140,248,0)"),
                    {
                      datasets: [
                        {
                          fill: !0,
                          backgroundColor: t,
                          borderColor: "#1f8ef1",
                          borderWidth: 2,
                          borderDash: [],
                          borderDashOffset: 0,
                          pointBackgroundColor: "#1f8ef1",
                          pointBorderColor: "rgba(255,255,255,0)",
                          pointHoverBackgroundColor: "#1f8ef1",
                          pointBorderWidth: 20,
                          pointHoverRadius: 4,
                          pointHoverBorderWidth: 15,
                          pointRadius: 4,
                          data: [],
                        },
                      ],
                    }
                  );
                },
                idle_option: {
                  maintainAspectRatio: !1,
                  legend: { display: !1 },
                  tooltips: {
                    backgroundColor: "#f5f5f5",
                    titleFontColor: "#333",
                    bodyFontColor: "#666",
                    bodySpacing: 4,
                    xPadding: 12,
                    mode: "nearest",
                    intersect: 0,
                    position: "nearest",
                  },
                  responsive: !0,
                  scales: {
                    yAxes: [
                      {
                        barPercentage: 1.6,
                        gridLines: {
                          drawBorder: !1,
                          color: "rgba(29,140,248,0.0)",
                          zeroLineColor: "transparent",
                        },
                        ticks: { fontColor: "#9a9a9a" },
                      },
                    ],
                    xAxes: [
                      {
                        type: "realtime",
                        duration: 2e4,
                        refresh: 1e3,
                        pause: !1,
                        ttl: void 0,
                        time: { unit: "second" },
                        realtime: {
                          onRefresh: function (e) {
                            e.reset();
                          },
                          delay: 2e3,
                        },
                      },
                    ],
                  },
                },
                start_data: (e) => {
                  let t = e
                    .getContext("2d")
                    .createLinearGradient(0, 230, 0, 50);
                  return (
                    t.addColorStop(1, "rgba(29,140,248,0.2)"),
                    t.addColorStop(0.4, "rgba(29,140,248,0.0)"),
                    t.addColorStop(0, "rgba(29,140,248,0)"),
                    {
                      datasets: [
                        {
                          fill: !0,
                          backgroundColor: t,
                          borderColor: "#1f8ef1",
                          borderWidth: 2,
                          borderDash: [],
                          borderDashOffset: 0,
                          pointBackgroundColor: "#1f8ef1",
                          pointBorderColor: "rgba(255,255,255,0)",
                          pointHoverBackgroundColor: "#1f8ef1",
                          pointBorderWidth: 20,
                          pointHoverRadius: 4,
                          pointHoverBorderWidth: 15,
                          pointRadius: 4,
                          data: [],
                        },
                      ],
                    }
                  );
                },
                start_option: {
                  maintainAspectRatio: !1,
                  legend: { display: !1 },
                  tooltips: {
                    backgroundColor: "#f5f5f5",
                    titleFontColor: "#333",
                    bodyFontColor: "#666",
                    bodySpacing: 4,
                    xPadding: 12,
                    mode: "nearest",
                    intersect: 0,
                    position: "nearest",
                  },
                  responsive: !0,
                  scales: {
                    yAxes: [
                      {
                        barPercentage: 1.6,
                        gridLines: {
                          drawBorder: !1,
                          color: "rgba(29,140,248,0.0)",
                          zeroLineColor: "transparent",
                        },
                        ticks: { fontColor: "#9a9a9a" },
                      },
                    ],
                    xAxes: [
                      {
                        type: "realtime",
                        duration: 4e4,
                        refresh: 1e3,
                        pause: !0,
                        ttl: void 0,
                        time: { unit: "second" },
                        realtime: {
                          onRefresh: function (e) {
                            !(function () {
                              var e = new XMLHttpRequest();
                              (e.onreadystatechange = function () {
                                4 === e.readyState &&
                                  200 === e.status &&
                                  (t = e.response);
                              }),
                                e.open("GET", "Read_Pressure", !0),
                                e.send();
                            })(),
                              e.data.datasets.forEach(function (e) {
                                e.data.push({ x: Date.now(), y: t });
                              });
                          },
                          delay: 2e3,
                        },
                      },
                    ],
                  },
                },
                stop_data: (e) => {
                  let t = e
                    .getContext("2d")
                    .createLinearGradient(0, 230, 0, 50);
                  return (
                    t.addColorStop(1, "rgba(29,140,248,0.2)"),
                    t.addColorStop(0.4, "rgba(29,140,248,0.0)"),
                    t.addColorStop(0, "rgba(29,140,248,0)"),
                    {
                      datasets: [
                        {
                          fill: !0,
                          backgroundColor: t,
                          borderColor: "#1f8ef1",
                          borderWidth: 2,
                          borderDash: [],
                          borderDashOffset: 0,
                          pointBackgroundColor: "#1f8ef1",
                          pointBorderColor: "rgba(255,255,255,0)",
                          pointHoverBackgroundColor: "#1f8ef1",
                          pointBorderWidth: 20,
                          pointHoverRadius: 4,
                          pointHoverBorderWidth: 15,
                          pointRadius: 4,
                          data: [],
                        },
                      ],
                    }
                  );
                },
                stop_option: {
                  maintainAspectRatio: !1,
                  legend: { display: !1 },
                  tooltips: {
                    backgroundColor: "#f5f5f5",
                    titleFontColor: "#333",
                    bodyFontColor: "#666",
                    bodySpacing: 4,
                    xPadding: 12,
                    mode: "nearest",
                    intersect: 0,
                    position: "nearest",
                  },
                  responsive: !0,
                  scales: {
                    yAxes: [
                      {
                        barPercentage: 1.6,
                        gridLines: {
                          drawBorder: !1,
                          color: "rgba(29,140,248,0.0)",
                          zeroLineColor: "transparent",
                        },
                        ticks: { fontColor: "#9a9a9a" },
                      },
                    ],
                    xAxes: [
                      {
                        type: "realtime",
                        duration: 4e4,
                        refresh: 500,
                        pause: !0,
                        ttl: void 0,
                        time: { unit: "second" },
                        realtime: {
                          onRefresh: function (e) {
                            e.reset();
                          },
                          delay: 2e3,
                        },
                      },
                    ],
                  },
                },
              };
              const r = n.a.useState("idle_data"),
                o = Object(l.a)(r, 1)[0],
                s = n.a.useState("idle_option"),
                i = Object(l.a)(s, 2),
                c = i[0],
                d = i[1],
                b = (e) => {
                  d(e);
                };
              return Object(p.jsx)(p.Fragment, {
                children: Object(p.jsx)("div", {
                  className: "content",
                  children: Object(p.jsxs)(F.a, {
                    children: [
                      Object(p.jsx)(E.a, {
                        xs: "12",
                        children: Object(p.jsxs)(X.a, {
                          className: "card-chart",
                          children: [
                            Object(p.jsx)(V.a, {
                              children: Object(p.jsx)(F.a, {
                                children: Object(p.jsx)(E.a, {
                                  className: "text-left",
                                  sm: "6",
                                  children: Object(p.jsx)(G.a, {
                                    tag: "h2",
                                    children: "Pressure",
                                  }),
                                }),
                              }),
                            }),
                            Object(p.jsx)(z.a, {
                              children: Object(p.jsx)("div", {
                                className: "chart-area",
                                children: Object(p.jsx)(Q.Line, {
                                  data: a[o],
                                  options: a[c],
                                }),
                              }),
                            }),
                          ],
                        }),
                      }),
                      Object(p.jsx)(E.a, {
                        md: "12",
                        children: Object(p.jsx)(X.a, {
                          children: Object(p.jsx)(z.a, {
                            children: Object(p.jsxs)("div", {
                              className: "places-buttons",
                              children: [
                                Object(p.jsx)(F.a, {
                                  children: Object(p.jsx)(E.a, {
                                    className: "ml-auto mr-auto text-center",
                                    md: "6",
                                    children: Object(p.jsx)(G.a, {
                                      tag: "h4",
                                      children: "Control panel",
                                    }),
                                  }),
                                }),
                                Object(p.jsx)(F.a, {
                                  children: Object(p.jsx)(E.a, {
                                    className: "mx-auto mr-auto",
                                    lg: "8",
                                    children: Object(p.jsxs)(F.a, {
                                      children: [
                                        Object(p.jsx)(E.a, {
                                          md: "4",
                                          children: Object(p.jsx)(I.a, {
                                            block: !0,
                                            color: "info",
                                            className: A()({
                                              active: "start_option" === c,
                                            }),
                                            onClick: () => b("start_option"),
                                            children: "Start",
                                          }),
                                        }),
                                        Object(p.jsx)(E.a, { md: "4" }),
                                        Object(p.jsx)(E.a, {
                                          md: "4",
                                          children: Object(p.jsx)(I.a, {
                                            block: !0,
                                            color: "info",
                                            className: A()({
                                              active: "stop_option" === c,
                                            }),
                                            onClick: () => b("stop_option"),
                                            children: "Stop",
                                          }),
                                        }),
                                      ],
                                    }),
                                  }),
                                }),
                              ],
                            }),
                          }),
                        }),
                      }),
                    ],
                  }),
                }),
              });
            },
            layout: "/admin",
          },
          {
            path: "/humidity",
            name: "Humidity",
            rtlName: "\u0627\u0644\u0631\u0645\u0648\u0632",
            icon: "fas fa-tint",
            component: function (e) {
              var t = null;
              let a = {
                idle_data: (e) => {
                  let t = e
                    .getContext("2d")
                    .createLinearGradient(0, 230, 0, 50);
                  return (
                    t.addColorStop(1, "rgba(29,140,248,0.2)"),
                    t.addColorStop(0.4, "rgba(29,140,248,0.0)"),
                    t.addColorStop(0, "rgba(29,140,248,0)"),
                    {
                      datasets: [
                        {
                          fill: !0,
                          backgroundColor: t,
                          borderColor: "#1f8ef1",
                          borderWidth: 2,
                          borderDash: [],
                          borderDashOffset: 0,
                          pointBackgroundColor: "#1f8ef1",
                          pointBorderColor: "rgba(255,255,255,0)",
                          pointHoverBackgroundColor: "#1f8ef1",
                          pointBorderWidth: 20,
                          pointHoverRadius: 4,
                          pointHoverBorderWidth: 15,
                          pointRadius: 4,
                          data: [],
                        },
                      ],
                    }
                  );
                },
                idle_option: {
                  maintainAspectRatio: !1,
                  legend: { display: !1 },
                  tooltips: {
                    backgroundColor: "#f5f5f5",
                    titleFontColor: "#333",
                    bodyFontColor: "#666",
                    bodySpacing: 4,
                    xPadding: 12,
                    mode: "nearest",
                    intersect: 0,
                    position: "nearest",
                  },
                  responsive: !0,
                  scales: {
                    yAxes: [
                      {
                        barPercentage: 1.6,
                        gridLines: {
                          drawBorder: !1,
                          color: "rgba(29,140,248,0.0)",
                          zeroLineColor: "transparent",
                        },
                        ticks: { fontColor: "#9a9a9a" },
                      },
                    ],
                    xAxes: [
                      {
                        type: "realtime",
                        duration: 2e4,
                        refresh: 1e3,
                        pause: !1,
                        ttl: void 0,
                        time: { unit: "second" },
                        realtime: {
                          onRefresh: function (e) {
                            e.reset();
                          },
                          delay: 2e3,
                        },
                      },
                    ],
                  },
                },
                start_data: (e) => {
                  let t = e
                    .getContext("2d")
                    .createLinearGradient(0, 230, 0, 50);
                  return (
                    t.addColorStop(1, "rgba(29,140,248,0.2)"),
                    t.addColorStop(0.4, "rgba(29,140,248,0.0)"),
                    t.addColorStop(0, "rgba(29,140,248,0)"),
                    {
                      datasets: [
                        {
                          fill: !0,
                          backgroundColor: t,
                          borderColor: "#1f8ef1",
                          borderWidth: 2,
                          borderDash: [],
                          borderDashOffset: 0,
                          pointBackgroundColor: "#1f8ef1",
                          pointBorderColor: "rgba(255,255,255,0)",
                          pointHoverBackgroundColor: "#1f8ef1",
                          pointBorderWidth: 20,
                          pointHoverRadius: 4,
                          pointHoverBorderWidth: 15,
                          pointRadius: 4,
                          data: [],
                        },
                      ],
                    }
                  );
                },
                start_option: {
                  maintainAspectRatio: !1,
                  legend: { display: !1 },
                  tooltips: {
                    backgroundColor: "#f5f5f5",
                    titleFontColor: "#333",
                    bodyFontColor: "#666",
                    bodySpacing: 4,
                    xPadding: 12,
                    mode: "nearest",
                    intersect: 0,
                    position: "nearest",
                  },
                  responsive: !0,
                  scales: {
                    yAxes: [
                      {
                        barPercentage: 1.6,
                        gridLines: {
                          drawBorder: !1,
                          color: "rgba(29,140,248,0.0)",
                          zeroLineColor: "transparent",
                        },
                        ticks: { fontColor: "#9a9a9a" },
                      },
                    ],
                    xAxes: [
                      {
                        type: "realtime",
                        duration: 4e4,
                        refresh: 1e3,
                        pause: !0,
                        ttl: void 0,
                        time: { unit: "second" },
                        realtime: {
                          onRefresh: function (e) {
                            !(function () {
                              var e = new XMLHttpRequest();
                              (e.onreadystatechange = function () {
                                4 === e.readyState &&
                                  200 === e.status &&
                                  (t = e.response);
                              }),
                                e.open("GET", "Read_Humidity", !0),
                                e.send();
                            })(),
                              e.data.datasets.forEach(function (e) {
                                e.data.push({ x: Date.now(), y: t });
                              });
                          },
                          delay: 2e3,
                        },
                      },
                    ],
                  },
                },
                stop_data: (e) => {
                  let t = e
                    .getContext("2d")
                    .createLinearGradient(0, 230, 0, 50);
                  return (
                    t.addColorStop(1, "rgba(29,140,248,0.2)"),
                    t.addColorStop(0.4, "rgba(29,140,248,0.0)"),
                    t.addColorStop(0, "rgba(29,140,248,0)"),
                    {
                      datasets: [
                        {
                          fill: !0,
                          backgroundColor: t,
                          borderColor: "#1f8ef1",
                          borderWidth: 2,
                          borderDash: [],
                          borderDashOffset: 0,
                          pointBackgroundColor: "#1f8ef1",
                          pointBorderColor: "rgba(255,255,255,0)",
                          pointHoverBackgroundColor: "#1f8ef1",
                          pointBorderWidth: 20,
                          pointHoverRadius: 4,
                          pointHoverBorderWidth: 15,
                          pointRadius: 4,
                          data: [],
                        },
                      ],
                    }
                  );
                },
                stop_option: {
                  maintainAspectRatio: !1,
                  legend: { display: !1 },
                  tooltips: {
                    backgroundColor: "#f5f5f5",
                    titleFontColor: "#333",
                    bodyFontColor: "#666",
                    bodySpacing: 4,
                    xPadding: 12,
                    mode: "nearest",
                    intersect: 0,
                    position: "nearest",
                  },
                  responsive: !0,
                  scales: {
                    yAxes: [
                      {
                        barPercentage: 1.6,
                        gridLines: {
                          drawBorder: !1,
                          color: "rgba(29,140,248,0.0)",
                          zeroLineColor: "transparent",
                        },
                        ticks: { fontColor: "#9a9a9a" },
                      },
                    ],
                    xAxes: [
                      {
                        type: "realtime",
                        duration: 4e4,
                        refresh: 500,
                        pause: !0,
                        ttl: void 0,
                        time: { unit: "second" },
                        realtime: {
                          onRefresh: function (e) {
                            e.reset();
                          },
                          delay: 2e3,
                        },
                      },
                    ],
                  },
                },
              };
              const r = n.a.useState("idle_data"),
                o = Object(l.a)(r, 1)[0],
                s = n.a.useState("idle_option"),
                i = Object(l.a)(s, 2),
                c = i[0],
                d = i[1],
                b = (e) => {
                  d(e);
                };
              return Object(p.jsx)(p.Fragment, {
                children: Object(p.jsx)("div", {
                  className: "content",
                  children: Object(p.jsxs)(F.a, {
                    children: [
                      Object(p.jsx)(E.a, {
                        xs: "12",
                        children: Object(p.jsxs)(X.a, {
                          className: "card-chart",
                          children: [
                            Object(p.jsx)(V.a, {
                              children: Object(p.jsx)(F.a, {
                                children: Object(p.jsx)(E.a, {
                                  className: "text-left",
                                  sm: "6",
                                  children: Object(p.jsx)(G.a, {
                                    tag: "h2",
                                    children: "Humidity",
                                  }),
                                }),
                              }),
                            }),
                            Object(p.jsx)(z.a, {
                              children: Object(p.jsx)("div", {
                                className: "chart-area",
                                children: Object(p.jsx)(Q.Line, {
                                  data: a[o],
                                  options: a[c],
                                }),
                              }),
                            }),
                          ],
                        }),
                      }),
                      Object(p.jsx)(E.a, {
                        md: "12",
                        children: Object(p.jsx)(X.a, {
                          children: Object(p.jsx)(z.a, {
                            children: Object(p.jsxs)("div", {
                              className: "places-buttons",
                              children: [
                                Object(p.jsx)(F.a, {
                                  children: Object(p.jsx)(E.a, {
                                    className: "ml-auto mr-auto text-center",
                                    md: "6",
                                    children: Object(p.jsx)(G.a, {
                                      tag: "h4",
                                      children: "Control panel",
                                    }),
                                  }),
                                }),
                                Object(p.jsx)(F.a, {
                                  children: Object(p.jsx)(E.a, {
                                    className: "mx-auto mr-auto",
                                    lg: "8",
                                    children: Object(p.jsxs)(F.a, {
                                      children: [
                                        Object(p.jsx)(E.a, {
                                          md: "4",
                                          children: Object(p.jsx)(I.a, {
                                            block: !0,
                                            color: "info",
                                            className: A()({
                                              active: "start_option" === c,
                                            }),
                                            onClick: () => b("start_option"),
                                            children: "Start",
                                          }),
                                        }),
                                        Object(p.jsx)(E.a, { md: "4" }),
                                        Object(p.jsx)(E.a, {
                                          md: "4",
                                          children: Object(p.jsx)(I.a, {
                                            block: !0,
                                            color: "info",
                                            className: A()({
                                              active: "stop_option" === c,
                                            }),
                                            onClick: () => b("stop_option"),
                                            children: "Stop",
                                          }),
                                        }),
                                      ],
                                    }),
                                  }),
                                }),
                              ],
                            }),
                          }),
                        }),
                      }),
                    ],
                  }),
                }),
              });
            },
            layout: "/admin",
          },
        ];
      var Y = function (e) {
        const t = Object(d.g)(),
          a = n.a.useRef(null),
          r = n.a.useState(
            -1 !== document.documentElement.className.indexOf("nav-open")
          ),
          o = Object(l.a)(r, 2),
          s = o[0],
          i = o[1];
        n.a.useEffect(() => {
          if (navigator.platform.indexOf("Win") > -1) {
            (document.documentElement.className += " perfect-scrollbar-on"),
              document.documentElement.classList.remove(
                "perfect-scrollbar-off"
              ),
              (K = new x.a(a.current, { suppressScrollX: !0 }));
            let e = document.querySelectorAll(".table-responsive");
            for (let t = 0; t < e.length; t++) K = new x.a(e[t]);
          }
          return function () {
            navigator.platform.indexOf("Win") > -1 &&
              (K.destroy(),
              document.documentElement.classList.add("perfect-scrollbar-off"),
              document.documentElement.classList.remove(
                "perfect-scrollbar-on"
              ));
          };
        }),
          n.a.useEffect(() => {
            if (navigator.platform.indexOf("Win") > -1) {
              let e = document.querySelectorAll(".table-responsive");
              for (let t = 0; t < e.length; t++) K = new x.a(e[t]);
            }
            (document.documentElement.scrollTop = 0),
              (document.scrollingElement.scrollTop = 0),
              a.current && (a.current.scrollTop = 0);
          }, [t]);
        const c = () => {
            document.documentElement.classList.toggle("nav-open"), i(!s);
          },
          b = (e) => {
            for (let a = 0; a < _.length; a++)
              if (-1 !== t.pathname.indexOf(_[a].layout + _[a].path))
                return _[a].name;
            return "Brand";
          };
        return Object(p.jsx)(f.Consumer, {
          children: ({ color: e, changeColor: r }) => {
            return Object(p.jsxs)(n.a.Fragment, {
              children: [
                Object(p.jsxs)("div", {
                  className: "wrapper",
                  children: [
                    Object(p.jsx)(L, {
                      routes: _,
                      logo: {
                        outterLink: "https://www.st.com/",
                        imgSrc:
                          "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAT8AAADSCAYAAAA8C8dDAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAACiZJREFUeNrs3e1x1EoWBmD5FgGYDOwI1kSw4wxMBAwRYCLARABE4CECz0bgIQK8EeAM7Ay80kVQFMVyR1inv/Q8VVOu4odxSzPvnKNWt7oOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAoHgHDkEdHh4ejvofq/41/Pz3+M8rR4aM3h4cHFwIPyICbwi3Fz+EHpQVIL1a//YnTl9xgXfY/1j3r1cCj8Ld1vzHC7+ygu9iDL1DR4MKfKy6anX+imlvL1V6VOa473qrrf7+cv6yB9+7/se14KMym5qDT9ubN/QOx9A7cTTQ8mp7lxJ8J2PwubZHjW77qu+49kFoewUfTPW2hUGo/AQfTHHffZ3ouFf5sW/wDYF3Jfio3LaF4BN+aQ3Bd+QwULkPrQxE+KWp+i4663Cp366v+m6EH/sG31DtvXEkaMDHlgZjwiM+/K5VfTTgvq/6nrY0IJVfbPCtBB+N+NDagKzwiFViuztcs7l3aphS9fWv98KPGqq+4c2661//HX/e1r4OE4RfPV5kCLxt//rYB93O4QdyVH2HD+l86V/r8SZqgKzhd5Eg9O7617mjDZQUfl+Cg+9KpQeUFnxnwcGn2gOKDL/rwDZ35QgDJQbfUWDw2fEZZmSFx7xeBf3e05YWlAPtVX53AVXf2pEFSg6+dcSsriMLlB5+nwOu87mdBSg6+E60u8ASw+9y5uC7dlSB0oMvYh3vmSMLsdzq8nhzt6fD9lNbhxWEX+nmvrfvg0MKwq/0lndoT49m/rWqPhB+xZt7w9IbOy6D8Cu96hsqvrknJnaOLAi/0kWs4/3ksEIantv755XfXf9j7hUYx1Ft73h9cnianN1hphvOyWmD52YYz7N+XIt8mp/K78/erOuA4OsCP1yX/Y8rwffHjrr5b2n68b2U69yEjUv4tSviyWw3QR+u8yW/wUs+P+Pa7XeZx7UTfuz7hh2+oVcBvzqq9XjlrD2+PQy68Tykg5g4rsXuEyn8Gg6TcUb6yCl7tI+NvpfeLvmkCr/pbUpN625tiTWPTcB7aZX5i+nbQ+6FH1W0KZOMLc290/a44AuaiHqReVzbpc7yCr/GW94fWCtcWMs7Xo5Ye18Iv1pa3ug2ZRX0e993QTPJCzBMCOyCOoicdh6IJfxar/q6sbU5FYB/JGpCIHfL+9GptcJjSpvyJcF/dRpUaXybrBl2iHaj836GL43jua+LjTc1X+YcVz+mp06vyq+0NiUsmIYPcf961gXMXDYqakIgd9XnGrDKb9K3dcQ63v/3gXueYDyXnVUf/2T2ddYJO4ik41L5tRt86y7d7S1nKR5X2b/5X6oAf2sXFBC5rxtvBZ/wK7lNSXIT9RiAb53eX4q4veWwgGrbRIe2t+g2Zag6ThNXtpfO9nchEwIFHOfhtp1jp1flt683Gf7P1bh5Qppvv4ODof196VR/FzUh8KrRcan8Gqz6DseqL8dytiQTH7+oTN511gNHTHSsuq+3GeX0dOnL2VR++zvLGARn4wcm3bfg1wpwaLeX/AHZNrqOdyP4VH5Tvq2Hqu8o45+Q5RrN2HJfL7QCnP0m87GDuMs8rmeWs6n8prQpR5n/jKP+70i+y+/4IVliBdjqOt4bwSf8ampTvjkfr8XlCMBhNciSPjQmOrS9i6/6horvS2F/1vOgbdT3admWsh74acA63uG68VXGMVnHq/Krqk35latMFeBSdoTZNLqOd+PjrPKb8m2de6Ljd16Os7I5KsDhBt2zRk/77BMC1vGq/GoLvnVX9gN/LnNVgON9hy1WElETArmv9e0En/CrqU3ZNwDPs7QJbW6IEDUhsG50XNreBqu+EtqUKTZjGOU4VsMtOOcNnHbreFV+dPVtU78e9+XLUQG+7tpYDxxVxdqmXuVXTdWXcx1vzRVg7grnsSLW8Q63BX3OPC7reFV+e8u5jneOCvA6xSaov6gANxVXgNtGNyy1jlf4Nd3y/mzVv3IGYI3L4aI2LD1rbVzCr92WdwiOFlYwnGQMwF1lAXgbtGJmnbmDiFqfLPwa9aKhseQMwJo2RIiqjnJ3EB5LMOU9u/Cqr4TthiL8vSwtx24elUyCRKzj/fvSQ+Zzfux6n8pvX+eNjutwrACTt/PjNcD3BR+bVtfxbgWfym/Kt3XJ63hrrwA/d2VeS43YsHR4D1nHq/KrJvjOGg++HyvAHDOQrws8HjeNblhqHa/wm+TVQsY5BGDyLbHGkNkUdiyi1rta0aHtrabqK6FNySHplliFrZwJmRCwjlflp+qrQ9ItscagKaX62zY60aHqU/lN+ra+65b9fNr34+YES6qyI9bxljA2Ex0qv0ltytIfzH2eakeY8YO5zTzeXaPreLeCT/hpeadLuSXWf1prDcfrmevM47JhqbZ37zdsCdsNlWbTv15H3iCbeSVNyISAiQ6Vn6qvgQqwC14PPAbrrpWqr5D3kqpP+FXVppQqxYYInzJWtnO/l1Zd3tUrJc2iC79KKhzyBWCOZ/9GTQhYxyv8tLwNBuBVYLVSfWtookP41dbyLmEd71xWY1tXe+V32+g63pscG1UIv3q9cKrzHq8MbVpUdWSioxHN3+qy4HW8jzHcFHwacC4eEv39Uet4zwIvC+w1rojnDKv82uVa3/K0uo5349QKvynWTvNkESsiVjW3hmMHkfvJbFpe4TfpA3foNE9yk3Lbq6CWPWJCwDpe4VfXB7mr73myuQzHaXj612nQ709V+UWt6MjdQdi6amZPWh7ccN2nr/6G9Y8nTvU/Hqtd8H/xrxQBHlG1FrATUNRzhoVf6wHY5VtXStrKL6pdzz3R4VpfRDY4BERLuJtOxIalJewE9NRytvn95RCQQIrKadvohqUbwafyo97KL8XzkZ/PfV2skAcw2aZe5UelwbdKEHxREwLrzMG3EXzCj3qlaBtbXcf71ttH+FFn1TdUfClWRWwqrVh/G3yqPuFHvVI84yJqQiBn1TeE3ntvn1gmPIiq+obK6TrBf3U69w3aBewE9MyefSo/6gy+w0RV302DG5a+FHzCj3q969JcL4ua6Mi1omNT+aYSsOiqb3gYegp3EQ9bSvj3/+zSuwfqDb6ThGHxLmgM14IPmBp8dwkD4yhgDEcZgu/cuyePJw4BcwRf93VmN9VqiF3QPXBvEh624fac5wm2EgOCgu8sccX3MD5IaO5xHCYcx1Xgw+GBBMF3kaFN/BI0lhQTHZ8TP8sEmDkojjJNDAwugsb0OfBvvh53gwYqDb3DTNXe96ovql0M+lvfjddDKZAJD/YNh9STGj/bdV9XP9wH/v7HtKTDqozb/vWpi3uCHDOytpcpAbjK9F/fptjh5A/Hd2OnZQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACC/E+AAQDmU9KnW9/1NQAAAABJRU5ErkJggg==",
                      },
                      toggleSidebar: c,
                    }),
                    Object(p.jsxs)("div", {
                      className: "main-panel",
                      ref: a,
                      data: e,
                      children: [
                        Object(p.jsx)(k, {
                          brandText: b(t.pathname),
                          toggleSidebar: c,
                          sidebarOpened: s,
                        }),
                        Object(p.jsxs)(d.d, {
                          children: [
                            ((o = _),
                            o.map((e, t) =>
                              "/admin" === e.layout
                                ? Object(p.jsx)(
                                    d.b,
                                    {
                                      path: e.layout + e.path,
                                      component: e.component,
                                    },
                                    t
                                  )
                                : null
                            )),
                            Object(p.jsx)(d.a, {
                              from: "*",
                              to: "/admin/home",
                            }),
                          ],
                        }),
                      ],
                    }),
                  ],
                }),
                Object(p.jsx)(D, { bgColor: e, handleBgClick: r }),
              ],
            });
            var o;
          },
        });
      };
      i.a.render(
        Object(p.jsx)(u, {
          children: Object(p.jsx)(g, {
            children: Object(p.jsx)(c.a, {
              children: Object(p.jsxs)(d.d, {
                children: [
                  Object(p.jsx)(d.b, {
                    path: "/admin",
                    render: (e) => Object(p.jsx)(Y, Object(r.a)({}, e)),
                  }),
                  Object(p.jsx)(d.a, { from: "/", to: "/admin/dashboard" }),
                ],
              }),
            }),
          }),
        }),
        document.getElementById("root")
      );
    },
    83: function (e, t, a) {},
    84: function (e, t, a) {},
    85: function (e, t, a) {},
  },
  [[195, 1, 2]],
]);
//# sourceMappingURL=main.8c2fa44d.chunk.js.map