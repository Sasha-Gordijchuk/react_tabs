(this.webpackJsonpreact_tabs=this.webpackJsonpreact_tabs||[]).push([[0],{12:function(t,e,c){},14:function(t,e,c){"use strict";c.r(e);var n=c(3),a=c.n(n),i=c(5),s=c(1),b=(c(10),c(11),c(12),c(4)),d=c.n(b),r=c(0),o=function(t){var e=t.tabs,c=t.selectedTabId,n=t.onTabSelected;return Object(r.jsxs)("div",{"data-cy":"TabsComponent",children:[Object(r.jsx)("div",{className:"tabs is-boxed",children:Object(r.jsx)("ul",{children:e.map((function(t){var e=t.id,a=t.title;return Object(r.jsx)("li",{"data-cy":"Tab",className:d()({"is-active":c===e}),children:Object(r.jsx)("a",{href:"#".concat(e),"data-cy":"TabLink",onClick:function(){return n(e)},children:a})},e)}))})}),Object(r.jsx)("div",{className:"block","data-cy":"TabContent",children:e.map((function(t){return t.id===c&&t.content}))})]})},l=[{id:"tab-1",title:"Tab 1",content:"Some text 1"},{id:"tab-2",title:"Tab 2",content:"Some text 2"},{id:"tab-3",title:"Tab 3",content:"Some text 3"}],j=function(){var t=Object(s.useState)("tab-1"),e=Object(i.a)(t,2),c=e[0],n=e[1];return Object(r.jsxs)("div",{className:"section",children:[Object(r.jsxs)("h1",{className:"title",children:["Selected tab is ",l.map((function(t){return t.id===c&&t.title}))]}),Object(r.jsx)(o,{tabs:l,selectedTabId:c,onTabSelected:function(t){t!==c&&n(t)}})]})};a.a.render(Object(r.jsx)(j,{}),document.getElementById("root"))}},[[14,1,2]]]);
//# sourceMappingURL=main.4aa6c4a5.chunk.js.map