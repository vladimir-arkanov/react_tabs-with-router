(this["webpackJsonpreact_tabs-with-router"]=this["webpackJsonpreact_tabs-with-router"]||[]).push([[0],{16:function(e,t,c){},18:function(e,t,c){"use strict";c.r(t);var n=c(9),a=c.n(n),s=c(4),i=(c(14),c(15),c(16),c(2)),b=c(0),j=c(6),r=c.n(j),l=c(1),o=Object(b.memo)((function(e){var t=e.to,c=e.title;return Object(l.jsx)(s.b,{to:t,className:function(e){var t=e.isActive;return r()("navbar-item",{"is-active":t})},children:c})})),d=function(){return Object(l.jsx)("h1",{className:"title",children:"Home page"})},m=Object(b.memo)((function(e){var t=e.tabs,c=e.tabId,n=void 0===c?"":c,a=Object(b.useMemo)((function(){return function(e){return e.id===n}}),[n]),i=Object(b.useMemo)((function(){return function(e){var t=e.find((function(e){return e.id===n}));return null===t||void 0===t?void 0:t.content}}),[n]);return Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)("h1",{className:"title",children:"Tabs page"}),Object(l.jsx)("div",{className:"tabs is-boxed",children:Object(l.jsx)("ul",{children:t.map((function(e){return Object(l.jsx)("li",{"data-cy":"Tab",className:r()({"is-active":a(e)}),children:Object(l.jsx)(s.b,{to:"/tabs/".concat(e.id),children:e.title})})}))})}),Object(l.jsx)("div",{className:"block","data-cy":"TabContent",children:i(t)||"Please select a tab"})]})})),O=[{id:"tab-1",title:"Tab 1",content:"Some text 1"},{id:"tab-2",title:"Tab 2",content:"Some text 2"},{id:"tab-3",title:"Tab 3",content:"Some text 3"}],x=Object(b.memo)((function(){var e=Object(i.h)().tabId;return Object(l.jsx)(m,{tabs:O,tabId:e})})),h=Object(b.memo)((function(){return Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)("nav",{className:"navbar is-light is-fixed-top is-mobile has-shadow","data-cy":"Nav",children:Object(l.jsx)("div",{className:"container",children:Object(l.jsxs)("div",{className:"navbar-brand",children:[Object(l.jsx)(o,{to:"/",title:"Home"}),Object(l.jsx)(o,{to:"tabs",title:"Tabs"})]})})}),Object(l.jsx)("div",{className:"section",children:Object(l.jsx)("div",{className:"container",children:Object(l.jsxs)(i.d,{children:[Object(l.jsx)(i.b,{path:"/",element:Object(l.jsx)(d,{})}),Object(l.jsx)(i.b,{path:"home",element:Object(l.jsx)(i.a,{to:"/",replace:!0})}),Object(l.jsxs)(i.b,{path:"tabs",element:Object(l.jsx)(x,{}),children:[Object(l.jsx)(i.b,{index:!0,element:Object(l.jsx)(x,{})}),Object(l.jsx)(i.b,{path:":tabId",element:Object(l.jsx)(x,{})})]}),Object(l.jsx)(i.b,{path:"*",element:Object(l.jsx)("h1",{className:"title",children:"Page not found"})})]})})})]})}));a.a.render(Object(l.jsx)(s.a,{children:Object(l.jsx)(h,{})}),document.getElementById("root"))}},[[18,1,2]]]);
//# sourceMappingURL=main.d75fd1e4.chunk.js.map