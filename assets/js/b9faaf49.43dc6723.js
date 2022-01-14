"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[909],{3905:function(e,t,n){n.d(t,{Zo:function(){return l},kt:function(){return p}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var u=r.createContext({}),s=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},l=function(e){var t=s(e.components);return r.createElement(u.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,u=e.parentName,l=a(e,["components","mdxType","originalType","parentName"]),m=s(n),p=o,f=m["".concat(u,".").concat(p)]||m[p]||d[p]||i;return n?r.createElement(f,c(c({ref:t},l),{},{components:n})):r.createElement(f,c({ref:t},l))}));function p(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,c=new Array(i);c[0]=m;var a={};for(var u in t)hasOwnProperty.call(t,u)&&(a[u]=t[u]);a.originalType=e,a.mdxType="string"==typeof e?e:o,c[1]=a;for(var s=2;s<i;s++)c[s]=n[s];return r.createElement.apply(null,c)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},1293:function(e,t,n){n.d(t,{Z:function(){return i}});var r=n(7294),o=n(9960);var i=function(e){var t=e.cards;return r.createElement("div",{className:"container",style:{padding:15}},r.createElement("div",{className:"row is-multiline"},t.map((function(e,t){return r.createElement("div",{className:"col col--4",key:t,style:{padding:5}},r.createElement(o.Z,{className:"card",to:e.route,style:{height:"100%",textAlign:"center"}},r.createElement("div",{className:"card__body"},r.createElement("h4",null,e.title),r.createElement("p",null,e.description))))}))))}},5752:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return u},contentTitle:function(){return s},metadata:function(){return l},toc:function(){return m},default:function(){return f}});var r=n(3117),o=n(102),i=(n(7294),n(3905)),c=n(1293),a=["components"],u={sidebar_position:1,title:"Introduction"},s=void 0,l={unversionedId:"internal-documentation/introduction",id:"internal-documentation/introduction",title:"Introduction",description:"const frameworkComponents = [",source:"@site/docs/internal-documentation/introduction.mdx",sourceDirName:"internal-documentation",slug:"/internal-documentation/introduction",permalink:"/internal-documentation/introduction",editUrl:"https://github.com/0xsequence/docs/edit/master/docs/internal-documentation/introduction.mdx",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1,title:"Introduction"},sidebar:"tutorialSidebar",previous:{title:"Community & Support",permalink:"/community_support"},next:{title:"File Structure",permalink:"/internal-documentation/file-structure"}},d=[{title:"File Structure",description:"A summary of the Basic File Structure and how Docusaurus works.",route:"/internal-documentation/file-structure"},{title:"MDX Syntax Features",description:"A summary of the basic syntax of Markdown + MDX features. (includes creating tabs, tables, hidden content) ",route:"/internal-documentation/introduction"}],m=[{value:"Basics",id:"basics",children:[],level:2},{value:"Components of docs",id:"components-of-docs",children:[],level:2}],p={toc:m};function f(e){var t=e.components,n=(0,o.Z)(e,a);return(0,i.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"This is documentaiton is for reference on how to write documentation for this website."),(0,i.kt)("h2",{id:"basics"},"Basics"),(0,i.kt)("p",null,"The /docs folder contains ",(0,i.kt)("inlineCode",{parentName:"p"},".mdx")," files, these are markdown + jsx files... which means you can simply use\nmarkdown + also add jsx to it..."),(0,i.kt)("h2",{id:"components-of-docs"},"Components of docs"),(0,i.kt)("br",null),(0,i.kt)(c.Z,{cards:d,mdxType:"Cards"}))}f.isMDXComponent=!0}}]);