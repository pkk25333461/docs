"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[191],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return m}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},c=Object.keys(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),s=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},p=function(e){var t=s(e.components);return r.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,c=e.originalType,l=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),d=s(n),m=o,h=d["".concat(l,".").concat(m)]||d[m]||u[m]||c;return n?r.createElement(h,a(a({ref:t},p),{},{components:n})):r.createElement(h,a({ref:t},p))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var c=n.length,a=new Array(c);a[0]=d;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:o,a[1]=i;for(var s=2;s<c;s++)a[s]=n[s];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},9744:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return i},contentTitle:function(){return l},metadata:function(){return s},toc:function(){return p},default:function(){return d}});var r=n(3117),o=n(102),c=(n(7294),n(3905)),a=["components"],i={sidebar_position:2},l="Opening Wallet",s={unversionedId:"build-with-sequence/opening_wallet",id:"build-with-sequence/opening_wallet",title:"Opening Wallet",description:"Your dapp can connect to your user's wallet by first instantiating the Wallet provider:",source:"@site/docs/build-with-sequence/2_opening_wallet.mdx",sourceDirName:"build-with-sequence",slug:"/build-with-sequence/opening_wallet",permalink:"/build-with-sequence/opening_wallet",editUrl:"https://github.com/0xsequence/docs/edit/master/docs/build-with-sequence/2_opening_wallet.mdx",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"sidebar",previous:{title:"Installation",permalink:"/build-with-sequence/installation"},next:{title:"Get Wallet Account Address",permalink:"/build-with-sequence/get_address"}},p=[{value:"Connecting Other Dapps to Sequence Using WalletConnect",id:"connecting-other-dapps-to-sequence-using-walletconnect",children:[],level:2}],u={toc:p};function d(e){var t=e.components,n=(0,o.Z)(e,a);return(0,c.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,c.kt)("h1",{id:"opening-wallet"},"Opening Wallet"),(0,c.kt)("p",null,"Your dapp can connect to your user's wallet by first instantiating the Wallet provider:"),(0,c.kt)("pre",null,(0,c.kt)("code",{parentName:"pre",className:"language-ts"},"import { sequence } from '0xsequence'\n\n// This assumes your dapp runs on Ethereum mainnet\nconst wallet = new sequence.Wallet()\n\n// If your dapp runs on a different EVM-compatible blockchain, you can specify its name as the argument\n// const wallet = new sequence.Wallet('polygon')\n")),(0,c.kt)("p",null,"Once you have the instance, you can connect to the wallet:"),(0,c.kt)("pre",null,(0,c.kt)("code",{parentName:"pre",className:"language-ts"},"await wallet.connect({\n  app: 'Demo Dapp',\n  authorize: true\n})\n")),(0,c.kt)("h2",{id:"connecting-other-dapps-to-sequence-using-walletconnect"},"Connecting Other Dapps to Sequence Using WalletConnect"),(0,c.kt)("p",null,"Sequence already supports connecting to dapps via ",(0,c.kt)("a",{parentName:"p",href:"https://walletconnect.com"},"WalletConnect"),".\nIf your dapp already supports WalletConnect, and you don't need Sequence-specific functionality, nothing more needs to be done.\nFrom the user's perspective, the WalletConnect flow behaves as follows."),(0,c.kt)("p",null,"Taking ",(0,c.kt)("a",{parentName:"p",href:"https://app.uniswap.org"},"Uniswap")," as an example, the user is prompted to connect their wallet using one of multiple possible protocols."),(0,c.kt)("img",{src:"/img/walletconnect/connect-wallet.png"}),(0,c.kt)("p",null,"The user selects the WalletConnect option."),(0,c.kt)("img",{src:"/img/walletconnect/select-walletconnect.png"}),(0,c.kt)("p",null,"A QR code is displayed, which can be scanned by Sequence.\nAlternatively, the user can also choose to copy the connection details via their OS clipboard."),(0,c.kt)("img",{src:"/img/walletconnect/qr-code.png"}),(0,c.kt)("p",null,'Back in the Sequence interface, the user chooses "Scan".'),(0,c.kt)("img",{src:"/img/walletconnect/scan.png"}),(0,c.kt)("p",null,"The QR code from the dapp is scanned.\nAlternatively, the code is pasted from the OS clipboard if the user chose that previously."),(0,c.kt)("img",{src:"/img/walletconnect/scan-qr-code.png"}),(0,c.kt)("p",null,"The user confirms the connection request."),(0,c.kt)("img",{src:"/img/walletconnect/confirm.png"}),(0,c.kt)("p",null,"The connection succeeded, and the dapp is updated to reflect that."),(0,c.kt)("img",{src:"/img/walletconnect/success.png"}),(0,c.kt)("p",null,"While connected, the dapp is able to make signing requests to Sequence.\nSequence will always prompt for confirmation from the user for any activity initiated by the dapp."),(0,c.kt)("img",{src:"/img/walletconnect/activity.png"}),(0,c.kt)("p",null,"Once the user has finished using the dapp, they can disconnect the wallet via the session menu."),(0,c.kt)("img",{src:"/img/walletconnect/disconnect.png"}))}d.isMDXComponent=!0}}]);