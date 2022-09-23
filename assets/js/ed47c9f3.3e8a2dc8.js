"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[5742],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>m});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),p=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=p(n),m=a,k=d["".concat(s,".").concat(m)]||d[m]||u[m]||i;return n?r.createElement(k,o(o({ref:t},c),{},{components:n})):r.createElement(k,o({ref:t},c))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var p=2;p<i;p++)o[p]=n[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},4929:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>p,default:()=>g,frontMatter:()=>s,metadata:()=>c,toc:()=>k});var r=n(7462),a=n(7294),i=n(3905);n(9960);const o="sequenceServiceList_GsuH";const l=function(e){const t=e.serviceName,n=e.serviceList;return a.createElement("div",{className:o},a.createElement("table",null,a.createElement("thead",null,a.createElement("th",{align:"left"},"Network"),a.createElement("th",{align:"left"},t," Endpoint")),a.createElement("tbody",null,n.map((function(e,t){return a.createElement("tr",null,a.createElement("td",{align:"left"},a.createElement("div",{style:{display:"flex",alignItems:"center"}},a.createElement("img",{style:{paddingRight:"8px"},src:e.logo,width:"30"}),a.createElement("span",null,e.network))),a.createElement("td",{align:"left"},e.endpoint))})))))},s={slug:"/indexer"},p="Indexer",c={unversionedId:"indexer/overview",id:"indexer/overview",title:"Indexer",description:"The Sequence Indexer is a modular web3 service that makes it easy to query blockchain token",source:"@site/docs/03-indexer/01-overview.mdx",sourceDirName:"03-indexer",slug:"/indexer",permalink:"/indexer",draft:!1,editUrl:"https://github.com/0xsequence/docs/edit/master/docs/03-indexer/01-overview.mdx",tags:[],version:"current",sidebarPosition:1,frontMatter:{slug:"/indexer"},sidebar:"sidebar",previous:{title:"Contract Audits",permalink:"/wallet/wallet-contracts/contract-audits"},next:{title:"API Usage",permalink:"/indexer/api"}},u={},d=[{network:"Ethereum",logo:"/img/networks/1.png",endpoint:"https://mainnet-indexer.sequence.app"},{network:"Polygon",logo:"/img/networks/137.png",endpoint:"https://polygon-indexer.sequence.app"},{network:"Arbitrum One",logo:"/img/networks/42161.png",endpoint:"https://arbitrum-indexer.sequence.app"},{network:"Arbitrum Nova",logo:"/img/networks/42170.png",endpoint:"https://arbitrum-nova-indexer.sequence.app"},{network:"Optimism",logo:"/img/networks/10.png",endpoint:"https://optimism-indexer.sequence.app"},{network:"BSC",logo:"/img/networks/56.png",endpoint:"https://bsc-indexer.sequence.app"},{network:"Avalanche",logo:"/img/networks/43114.png",endpoint:"https://avalanche-indexer.sequence.app"},{network:"Gnosis",logo:"/img/networks/64.png",endpoint:"https://gnosis-indexer.sequence.app"}],m=[{network:"Mumbai",logo:"/img/networks/137.png",endpoint:"https://mumbai-indexer.sequence.app"},{network:"Rinkeby",logo:"/img/networks/1.png",endpoint:"https://rinkeby-indexer.sequence.app"},{network:"BSC Testnet",logo:"/img/networks/56.png",endpoint:"https://bsc-testnet-indexer.sequence.app"}],k=[{value:"Supported Networks &amp; Endpoints",id:"supported-networks--endpoints",level:2},{value:"Getting Started",id:"getting-started",level:2},{value:"Pricing &amp; Usage",id:"pricing--usage",level:2}],h={toc:k};function g(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,r.Z)({},h,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"indexer"},"Indexer"),(0,i.kt)("p",null,"The Sequence Indexer is a modular web3 service that makes it easy to query blockchain token\nand NFT data from Ethereum-compatible networks. The Indexer ",(0,i.kt)("strong",{parentName:"p"},"automatically indexes every\nERC20, ERC721 and ERC1155 token")," from Ethereum-compatible chains. "),(0,i.kt)("p",null,"In fact, the Sequence Wallet uses the Indexer behind the scenes so it can seamlessly\nrender all token information in any wallet. But of course, the Indexer is a modular piece\nof infrastructure, and you may use it directly from your dapp, game, or even from\na server."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Features:")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Super-fast API to query all token balances, history, metadata and NFTs with multi-chain support"),(0,i.kt)("li",{parentName:"ul"},"Real-time indexing of ERC20, ERC721 and ERC1155 transactions across EVM-compatible chains"),(0,i.kt)("li",{parentName:"ul"},"Automatically detects all tokens on the chain, without the need for a contract registry"),(0,i.kt)("li",{parentName:"ul"},"Resilient to node failures and chain re-organizations"),(0,i.kt)("li",{parentName:"ul"},"Easily listen for specific events and transactions on-chain accurately with a simple API"),(0,i.kt)("li",{parentName:"ul"},"Built-in token / nft metadata support to easily render tokens in your apps / games"),(0,i.kt)("li",{parentName:"ul"},"High uptime and availability")),(0,i.kt)("h2",{id:"supported-networks--endpoints"},"Supported Networks & Endpoints"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Status:")," ",(0,i.kt)("a",{parentName:"p",href:"https://status.sequence.info"},"https://status.sequence.info")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Mainnet networks:")),(0,i.kt)(l,{serviceName:"Indexer",serviceList:d,mdxType:"SequenceServiceList"}),(0,i.kt)("br",null),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Test networks:")),(0,i.kt)(l,{serviceName:"Indexer",serviceList:m,mdxType:"SequenceServiceList"}),(0,i.kt)("h2",{id:"getting-started"},"Getting Started"),(0,i.kt)("p",null,"Here are a few example queries you can make to a blockchain from your dapp, game, or wallet: "),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/indexer/api#fetch-all-tokens--nfts-in-any-wallet"},"Fetch all tokens & NFTS in any wallet including all metadata")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/indexer/api#fetch-the-transaction-history-for-any-wallet-address"},"Fetch the transaction history for any wallet address")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/indexer/api#fetch-all-unique-tokens-in-a-particular-erc207211155-contract-including-total-supplies"},"Fetch all unique tokens in a particular ERC20/721/1155 contract, including total supplies")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/indexer/api#fetch-all-unique-tokens-in-a-particular-erc207211155-contract-including-total-supplies"},"What is the total token supply of an ERC20 token? What is the total token supply of\nall the ERC1155 tokens in a particular contract ?")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/indexer/api#fetch-the-transaction-history-for-any-token-contract-address"},"Fetch the transaction history for any token contract address"))),(0,i.kt)("p",null,"To get started, please see the ",(0,i.kt)("a",{parentName:"p",href:"/indexer/api"},"Indexer API Reference & Usage")," section."),(0,i.kt)("h2",{id:"pricing--usage"},"Pricing & Usage"),(0,i.kt)("p",null,"The Sequence Indexer is available for free with moderate request limits, but if your project\nrequires higher limits, please contact the ",(0,i.kt)("a",{parentName:"p",href:"https://pro.sequence.xyz"},"Sequence Pro")," team."))}g.isMDXComponent=!0}}]);