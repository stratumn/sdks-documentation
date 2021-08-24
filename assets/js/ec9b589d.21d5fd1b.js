(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{86:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return l})),n.d(t,"toc",(function(){return s})),n.d(t,"default",(function(){return f}));var r=n(3),a=n(7),o=(n(0),n(93)),c=(n(96),n(97),["components"]),i={title:"\u274c Error during an action"},l={unversionedId:"faq/action_error",id:"faq/action_error",isDocsHomePage:!1,title:"\u274c Error during an action",description:"Action not allowed at one stage of the workflow",source:"@site/docs/faq/action_error.mdx",slug:"/faq/action_error",permalink:"/sdks-documentation/docs/faq/action_error",editUrl:"https://github.com/stratumn/sdks-documentation/blob/master/docs/faq/action_error.mdx",version:"current",sidebar:"faq",previous:{title:"\ud83d\udd11 Connection issue",permalink:"/sdks-documentation/docs/faq/connection"}},s=[{value:"Action not allowed at one stage of the workflow",id:"action-not-allowed-at-one-stage-of-the-workflow",children:[]},{value:"If the form data does not match the expected data",id:"if-the-form-data-does-not-match-the-expected-data",children:[]}],u={toc:s};function f(e){var t=e.components,n=Object(a.a)(e,c);return Object(o.b)("wrapper",Object(r.a)({},u,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("h2",{id:"action-not-allowed-at-one-stage-of-the-workflow"},"Action not allowed at one stage of the workflow"),Object(o.b)("p",null,"If an action is not allowed at one point of the workflow, you will get an error like :"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-json"},'{\n  "errors": [\n    {\n      "message": "action \\"actionName\\" not in next actions of \\"groupName\\"",\n      "locations": [{ "line": 2, "column": 17 }],\n      "path": ["createLink"],\n      "status": 400\n    }\n  ],\n  "data": { "createLink": null }\n}\n')),Object(o.b)("p",null,"In that case, you should verify if the action you are trying to perform should be done at this stage of the workflow,\nand by the group you are trying to perform the action with.\nIf so, please contact the Stratum's support team."),Object(o.b)("h2",{id:"if-the-form-data-does-not-match-the-expected-data"},"If the form data does not match the expected data"),Object(o.b)("p",null,"In that case, you will get an error like :"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-json"},'{\n  "errors": [\n    {\n      "message": "Form data is not valid: [ should have required property propertyName]",\n      "locations": [{ "line": 2, "column": 17 }],\n      "path": ["createLink"],\n      "status": 400\n    }\n  ],\n  "data": { "createLink": null }\n}\n')),Object(o.b)("p",null,"In that case, you should verify the specifications to check that the data you're sending is correct.\nIf so, please contact the Stratum's support team."))}f.isMDXComponent=!0},91:function(e,t,n){"use strict";function r(e){var t,n,a="";if("string"==typeof e||"number"==typeof e)a+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=r(e[t]))&&(a&&(a+=" "),a+=n);else for(t in e)e[t]&&(a&&(a+=" "),a+=t);return a}t.a=function(){for(var e,t,n=0,a="";n<arguments.length;)(e=arguments[n++])&&(t=r(e))&&(a&&(a+=" "),a+=t);return a}},93:function(e,t,n){"use strict";n.d(t,"a",(function(){return f})),n.d(t,"b",(function(){return m}));var r=n(0),a=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=a.a.createContext({}),u=function(e){var t=a.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},f=function(e){var t=u(e.components);return a.a.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},p=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,c=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),f=u(n),p=r,m=f["".concat(c,".").concat(p)]||f[p]||d[p]||o;return n?a.a.createElement(m,i(i({ref:t},s),{},{components:n})):a.a.createElement(m,i({ref:t},s))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,c=new Array(o);c[0]=p;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:r,c[1]=i;for(var s=2;s<o;s++)c[s]=n[s];return a.a.createElement.apply(null,c)}return a.a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},94:function(e,t,n){"use strict";var r=n(0),a=n(95);t.a=function(){var e=Object(r.useContext)(a.a);if(null==e)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return e}},95:function(e,t,n){"use strict";var r=n(0),a=Object(r.createContext)(void 0);t.a=a},96:function(e,t,n){"use strict";var r=n(0),a=n.n(r),o=n(94),c=n(91),i=n(56),l=n.n(i);var s=37,u=39;t.a=function(e){var t=e.lazy,n=e.block,i=e.defaultValue,f=e.values,d=e.groupId,p=e.className,m=Object(o.a)(),b=m.tabGroupChoices,h=m.setTabGroupChoices,v=Object(r.useState)(i),y=v[0],g=v[1],O=r.Children.toArray(e.children),w=[];if(null!=d){var j=b[d];null!=j&&j!==y&&f.some((function(e){return e.value===j}))&&g(j)}var k=function(e){var t=e.target,n=w.indexOf(t),r=O[n].props.value;g(r),null!=d&&(h(d,r),setTimeout((function(){var e,n,r,a,o,c,i,s;(e=t.getBoundingClientRect(),n=e.top,r=e.left,a=e.bottom,o=e.right,c=window,i=c.innerHeight,s=c.innerWidth,n>=0&&o<=s&&a<=i&&r>=0)||(t.scrollIntoView({block:"center",behavior:"smooth"}),t.classList.add(l.a.tabItemActive),setTimeout((function(){return t.classList.remove(l.a.tabItemActive)}),2e3))}),150))},x=function(e){var t,n;switch(e.keyCode){case u:var r=w.indexOf(e.target)+1;n=w[r]||w[0];break;case s:var a=w.indexOf(e.target)-1;n=w[a]||w[w.length-1]}null===(t=n)||void 0===t||t.focus()};return a.a.createElement("div",{className:"tabs-container"},a.a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:Object(c.a)("tabs",{"tabs--block":n},p)},f.map((function(e){var t=e.value,n=e.label;return a.a.createElement("li",{role:"tab",tabIndex:y===t?0:-1,"aria-selected":y===t,className:Object(c.a)("tabs__item",l.a.tabItem,{"tabs__item--active":y===t}),key:t,ref:function(e){return w.push(e)},onKeyDown:x,onFocus:k,onClick:k},n)}))),t?Object(r.cloneElement)(O.filter((function(e){return e.props.value===y}))[0],{className:"margin-vert--md"}):a.a.createElement("div",{className:"margin-vert--md"},O.map((function(e,t){return Object(r.cloneElement)(e,{key:t,hidden:e.props.value!==y})}))))}},97:function(e,t,n){"use strict";var r=n(0),a=n.n(r);t.a=function(e){var t=e.children,n=e.hidden,r=e.className;return a.a.createElement("div",{role:"tabpanel",hidden:n,className:r},t)}}}]);