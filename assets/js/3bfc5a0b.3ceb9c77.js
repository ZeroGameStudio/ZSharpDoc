"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[137],{4020:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>a,contentTitle:()=>i,default:()=>C,frontMatter:()=>s,metadata:()=>c,toc:()=>l});var r=t(4848),o=t(8453);const s={sidebar_position:3},i="\u73af\u5883\u9694\u79bb",c={id:"documentation/core-concepts/environment-isolation",title:"\u73af\u5883\u9694\u79bb",description:"\u90e8\u5206 .NET \u5b9e\u73b0\u4e0d\u652f\u6301\u591a\u5b9e\u4f8b\uff0c\u4e5f\u4e0d\u652f\u6301\u70ed\u91cd\u542f\uff08\u5982 CoreCLR\uff09\u3002\u56e0\u6b64\uff0cZ# \u4f7f\u7528 .NET \u5185\u7f6e\u7684 AssemblyLoadContext (ALC) \u5b9e\u73b0\u73af\u5883\u9694\u79bb\u3002",source:"@site/docs/documentation/core-concepts/environment-isolation.mdx",sourceDirName:"documentation/core-concepts",slug:"/documentation/core-concepts/environment-isolation",permalink:"/ZSharpDoc/docs/documentation/core-concepts/environment-isolation",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"docSidebar",previous:{title:"\u4e92\u64cd\u4f5c\u534f\u8bae",permalink:"/ZSharpDoc/docs/documentation/core-concepts/interop-protocol"},next:{title:"\u4e3b\u8981\u7279\u6027",permalink:"/ZSharpDoc/docs/category/\u4e3b\u8981\u7279\u6027"}},a={},l=[{value:"Default ALC",id:"default-alc",level:2},{value:"Master ALC",id:"master-alc",level:2},{value:"\u751f\u547d\u5468\u671f",id:"\u751f\u547d\u5468\u671f",level:3},{value:"Slim ALC",id:"slim-alc",level:2}];function d(e){const n={admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",p:"p",...(0,o.R)(),...e.components},{ZDivider:t,ZDocHeader:s}=n;return t||L("ZDivider",!0),s||L("ZDocHeader",!0),(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.header,{children:(0,r.jsx)(n.h1,{id:"\u73af\u5883\u9694\u79bb",children:"\u73af\u5883\u9694\u79bb"})}),"\n",(0,r.jsx)(s,{lastUpdate:"2024-12-12"}),"\n",(0,r.jsxs)(n.p,{children:["\u90e8\u5206 .NET \u5b9e\u73b0\u4e0d\u652f\u6301\u591a\u5b9e\u4f8b\uff0c\u4e5f\u4e0d\u652f\u6301\u70ed\u91cd\u542f\uff08\u5982 CoreCLR\uff09\u3002\u56e0\u6b64\uff0cZ# \u4f7f\u7528 .NET \u5185\u7f6e\u7684 ",(0,r.jsx)(n.code,{children:"AssemblyLoadContext (ALC)"})," \u5b9e\u73b0\u73af\u5883\u9694\u79bb\u3002"]}),"\n",(0,r.jsx)(n.p,{children:"ALC \u662f .NET \u4e3b\u63a8\u7684\u5b9e\u73b0\u73af\u5883\u9694\u79bb\u7684\u65b9\u5f0f\u3002\r\n\u4e00\u4e2a ALC \u8868\u793a\u4e00\u4e2a\u76f8\u5bf9\u9694\u79bb\u7684\u8fd0\u884c\u73af\u5883\uff0c\u6bcf\u4e2a ALC \u90fd\u4f1a\u52a0\u8f7d\u5404\u81ea\u7684\u7a0b\u5e8f\u96c6\uff0c\u591a\u4e2a ALC \u53ef\u4ee5\u5404\u81ea\u52a0\u8f7d\u540c\u4e00\u4e2a\u7a0b\u5e8f\u96c6\u7684\u4e0d\u540c\u7248\u672c\u800c\u4e0d\u4f1a\u76f8\u4e92\u51b2\u7a81\uff1b\r\n\u5728\u89e3\u6790\u7c7b\u578b\u65f6\uff0c\u6bcf\u4e2a ALC \u90fd\u53ea\u4f1a\u5728\u81ea\u5df1\u7684\u8303\u56f4\u5185\u67e5\u627e\uff0c\u4e0d\u4f1a\u53bb\u5176\u4ed6 ALC \u4e2d\u67e5\u627e\u7c7b\u578b\uff1b\r\n\u5bf9\u4e8e\u540c\u4e00\u4e2a\u7a0b\u5e8f\u96c6\uff0c\u6bcf\u4e2a ALC \u6709\u5404\u81ea\u7684\u9759\u6001\u5b57\u6bb5\uff0c\u8fd9\u610f\u5473\u7740\u6bcf\u4e2a ALC \u6709\u81ea\u5df1\u7684\u72ec\u7acb\u5168\u5c40\u73af\u5883\u3002"}),"\n",(0,r.jsx)(t,{}),"\n",(0,r.jsx)(n.h2,{id:"default-alc",children:"Default ALC"}),"\n",(0,r.jsx)(n.p,{children:"\u8fd9\u662f .NET \u672c\u8eab\u5c31\u5b58\u5728\u7684\u6982\u5ff5\uff0c\u8fd9\u91cc\u53ea\u662f\u7b80\u5355\u4ecb\u7ecd\u4e00\u4e0b\u3002\r\n\u5728 .NET \u542f\u52a8\u65f6\uff0c\u4f1a\u81ea\u52a8\u521b\u5efa\u4e00\u4e2a ALC\uff0c\u8fd9\u5c31\u662f Default ALC\u3002\r\n\u5982\u679c\u6ca1\u6709\u663e\u5f0f\u6307\u5b9a\uff0c\u90a3\u4e48\u6240\u6709\u7a0b\u5e8f\u96c6\u90fd\u4f1a\u52a0\u8f7d\u5230 Default ALC \u4e2d\uff0c\u6240\u6709\u4ee3\u7801\u4e5f\u90fd\u662f\u8fd0\u884c\u5728 Default ALC \u4e0a\u7684\u3002\r\n\u56e0\u6b64\uff0c\u5373\u4f7f\u4f60\u5bf9 ALC \u6ca1\u6709\u4efb\u4f55\u6982\u5ff5\uff0c\u4e5f\u4e0d\u5f71\u54cd\u4f60\u4f7f\u7528 .NET \u8fdb\u884c\u5f00\u53d1\u3002"}),"\n",(0,r.jsxs)(n.p,{children:["Default ALC \u5e76\u4e0d\u50cf\u540d\u5b57\u4e00\u6837\u53ea\u662f\u4e00\u4e2a\u9ed8\u8ba4\u521b\u5efa\u7684 ALC \u800c\u5df2\u3002\u5b9e\u9645\u4e0a\uff0cDefault ALC \u662f\u4e00\u4e2a\u7279\u6b8a\u7684 ALC\uff0c\u5b83\u4e0e\u5176\u4ed6 ALC \u6709\u4e00\u4e2a\u5173\u952e\u7684\u533a\u522b\u2014\u2014\r\n\u5b83\u4f5c\u4e3a\u4e00\u4e2a ",(0,r.jsx)(n.code,{children:"\u5171\u4eab\u73af\u5883"})," \u5b58\u5728\u3002\u5c31\u662f\u8bf4\uff0c\u52a0\u8f7d\u5230 Default ALC \u4e2d\u7684\u7a0b\u5e8f\u96c6\u5c31\u50cf\u88ab\u52a0\u8f7d\u5230\u4e86\u6240\u6709 ALC \u4e2d\u4e00\u6837\uff0c\u5176\u4ed6 ALC \u5728\u89e3\u6790\u7c7b\u578b\u65f6\u4e5f\u4f1a\u67e5\u770b Default ALC\u3002\r\n\u56e0\u6b64\uff0c.NET \u7684\u6807\u51c6\u5e93\u548c Z# \u7684\u6838\u5fc3\u7ec4\u4ef6\u90fd\u4f1a\u52a0\u8f7d\u5230 Default ALC\uff0c\u6240\u6709\u4ee3\u7801\u5171\u4eab\u4e00\u4efd\u5b9e\u4f8b\uff08\u5f53\u7136\u4e5f\u5305\u62ec\u5168\u5c40\u72b6\u6001\uff09\u3002"]}),"\n",(0,r.jsx)(n.p,{children:"Default ALC \u65e0\u6cd5\u5378\u8f7d\uff0c\u8fd9\u610f\u5473\u7740\u6240\u6709\u52a0\u8f7d\u5230 Default ALC \u4e2d\u7684\u4ee3\u7801\u90fd\u65e0\u6cd5\u5b9e\u73b0\u70ed\u91cd\u8f7d\u3002\r\n\u8fd9\u662f\u5f00\u53d1\u8005\u9700\u8981\u6ce8\u610f\u7684\uff0c\u56e0\u4e3a Z# \u7684\u4e00\u4e9b\u6838\u5fc3\u7ec4\u4ef6\u4e5f\u5728 Default ALC \u4e2d\uff0c\u5e76\u4e14\u5f00\u53d1\u8005\u4e5f\u53ef\u80fd\u9700\u8981\u5c06\u4e00\u4e9b\u81ea\u5df1\u7684\u7ec4\u4ef6\u52a0\u8f7d\u5230 Default ALC \u4e2d\u3002\r\n\u5982\u679c\u5f00\u53d1\u8005\u4fee\u6539\u4e86\u8fd9\u90e8\u5206\u4ee3\u7801\uff0c\u5219\u9700\u8981\u5b8c\u5168\u91cd\u542f\u5f15\u64ce\u624d\u80fd\u751f\u6548\u3002"}),"\n",(0,r.jsx)(t,{}),"\n",(0,r.jsx)(n.h2,{id:"master-alc",children:"Master ALC"}),"\n",(0,r.jsx)(n.p,{children:"\u8fd9\u662f Z# \u4e3a\u4e86\u5b9e\u73b0\u70ed\u91cd\u8f7d\u800c\u5f15\u5165\u7684\u6982\u5ff5\u3002\r\n\u70ed\u91cd\u8f7d\u5bf9\u4e8e\u4e00\u4e2a\u811a\u672c\u5f15\u64ce\u800c\u8a00\u975e\u5e38\u91cd\u8981\uff0c\u80fd\u663e\u8457\u63d0\u5347\u5f00\u53d1\u6548\u7387\uff0c\u503c\u5f97\u7eb3\u5165\u67b6\u6784\u8bbe\u8ba1\u7684\u8003\u91cf\u4e4b\u4e2d\u3002"}),"\n",(0,r.jsx)(n.p,{children:"Master ALC \u7684\u5b9a\u4f4d\u548c Default ALC \u51e0\u4e4e\u6ca1\u4ec0\u4e48\u4e0d\u540c\uff0c\u552f\u4e00\u7684\u533a\u522b\u5c31\u662f\u53ef\u4ee5\u70ed\u91cd\u8f7d\u3002\r\n\u5982\u679c\u6ca1\u6709\u70ed\u91cd\u8f7d\u7684\u9700\u6c42\uff0cZ# \u5f88\u53ef\u80fd\u4e0d\u4f1a\u5f15\u5165 Master ALC\u3002"}),"\n",(0,r.jsxs)(n.p,{children:["Z# \u5c06\u5f00\u53d1\u671f\u4f1a\u9891\u7e41\u53d8\u52a8\u7684\u4ee3\u7801\u52a0\u8f7d\u5230 Master ALC \u4e2d\uff0c\u4ee5\u652f\u6301\u70ed\u91cd\u8f7d\u3002\u8fd9\u4e9b\u4ee3\u7801\u4e3b\u8981\u5305\u62ec\u5f15\u64ce\u7684\u80f6\u6c34\u4ee3\u7801\uff0c\u9879\u76ee\u7684\u80f6\u6c34\u4ee3\u7801\u4ee5\u53ca\u9879\u76ee\u7684\u811a\u672c\u4ee3\u7801\u3002\r\nMaster ALC \u62e5\u6709 ",(0,r.jsx)(n.code,{children:"\u5171\u8f6d\u6620\u5c04"})," \u548c ",(0,r.jsx)(n.code,{children:"ZCall"})," \u4e24\u4e2a\u6838\u5fc3\u4e92\u64cd\u4f5c\u529f\u80fd\uff0c\u51e0\u4e4e\u6240\u6709\u4e0e\u5f15\u64ce\u7684\u590d\u6742\u4ea4\u4e92\u90fd\u53d1\u751f\u5728 Master ALC \u4e0a\u3002\r\n\u6b64\u5916\uff0cMaster ALC \u6ca1\u6709\u5171\u4eab\u73af\u5883\u7684\u7279\u6027\uff0c\u8fd9\u53ef\u80fd\u662f\u4e00\u4e2a\u9644\u5e26\u7684\u597d\u5904\uff0c\u56e0\u4e3a\u8fd9\u91cc\u662f\u5e94\u7528\u5c42\u4ee3\u7801\uff0c\u7edd\u5927\u591a\u6570\u60c5\u51b5\u4e0b\u6211\u4eec\u4e0d\u4f1a\u5e0c\u671b\u5176\u4ed6 ALC \u8bbf\u95ee\u5230\u3002"]}),"\n",(0,r.jsx)(n.h3,{id:"\u751f\u547d\u5468\u671f",children:"\u751f\u547d\u5468\u671f"}),"\n",(0,r.jsx)(n.p,{children:"Master ALC \u7684\u9996\u6b21\u521b\u5efa\u7a0d\u665a\u4e8e Default ALC \u7684\u521b\u5efa\uff0c\u4f46\u51e0\u4e4e\u53ef\u4ee5\u8ba4\u4e3a\u662f\u540c\u65f6\u7684\u3002\r\n\u4e00\u4e2a\u5173\u952e\u7684\u65f6\u5e8f\u5173\u7cfb\u662f\uff0cMaster ALC \u7684\u521b\u5efa\u65e9\u4e8e UObject \u7cfb\u7edf\u7684\u521d\u59cb\u5316\uff0c\u56e0\u4e3a\u53ea\u6709\u8fd9\u6837\uff0cMaster ALC \u624d\u80fd\u6b63\u786e\u5904\u7406\u6240\u6709 UObject \u7684\u5171\u8f6d\u6620\u5c04\u3002"}),"\n",(0,r.jsxs)(n.p,{children:["\u6709\u591a\u79cd\u7b56\u7565\u63a7\u5236 Master ALC \u7684\u70ed\u91cd\u8f7d\u3002\u9ed8\u8ba4\u60c5\u51b5\u4e0b\uff0c\u5f00\u5173 PIE \u4f1a\u89e6\u53d1\u70ed\u91cd\u8f7d\u3002\u4f60\u4e5f\u53ef\u4ee5\u4f7f\u7528\u63a7\u5236\u53f0\u547d\u4ee4 ",(0,r.jsx)(n.code,{children:"z#.reloadmasteralc"})," \u6765\u663e\u5f0f\u89e6\u53d1\u70ed\u91cd\u8f7d\u3002"]}),"\n",(0,r.jsx)(n.p,{children:"\u7528\u6237\u4ee3\u7801\u53ef\u4ee5\u5047\u5b9a Master ALC \u5728\u4efb\u610f\u65f6\u523b\u90fd\u662f\u5b58\u5728\u7684\uff0c\u56e0\u4e3a Master ALC \u521b\u5efa\u7684\u65f6\u95f4\u975e\u5e38\u65e9\uff0c\u51e0\u4e4e\u6bd4\u6240\u6709\u7528\u6237\u4ee3\u7801\u90fd\u8981\u65e9\uff1b\r\n\u540c\u65f6 Master ALC \u70ed\u91cd\u8f7d\u671f\u95f4\u6ca1\u6709\u629b\u51fa\u4efb\u4f55\u4e8b\u4ef6\uff0c\u8fd9\u610f\u5473\u7740\u4e0d\u4f1a\u6709\u7528\u6237\u4ee3\u7801\u63d2\u5165\u5230\u70ed\u91cd\u8f7d\u7684\u6d41\u7a0b\u4e4b\u4e2d\u3002"}),"\n",(0,r.jsx)(n.p,{children:"\u867d\u7136\u6709\u529e\u6cd5\u80fd\u5728\u8fdb\u7a0b\u7ed3\u675f\u524d\u5f3a\u884c\u5378\u8f7d Master ALC\uff0c\u4f46\u4e0d\u5efa\u8bae\u8fd9\u6837\u505a\u3002\r\nMaster ALC \u4f5c\u4e3a\u811a\u672c\u5f15\u64ce\u7684\u6838\u5fc3\uff0c\u53ef\u80fd\u5728\u4efb\u610f\u65f6\u523b\u88ab\u5f15\u64ce\u8c03\u7528\uff0c\u4fdd\u8bc1\u5b83\u7684\u5168\u7a0b\u53ef\u7528\u662f\u4e00\u4ef6\u975e\u5e38\u91cd\u8981\u7684\u4e8b\u3002\r\n\u5982\u679c\u67d0\u4e00\u4e2a\u65f6\u523b Master ALC \u4e0d\u53ef\u7528\uff0c\u90a3\u4e48\u5f15\u64ce\u7684\u8c03\u7528\u5c06\u65e0\u6cd5\u4ea7\u751f\u7b26\u5408\u9884\u671f\u7684\u7ed3\u679c\u3002"}),"\n",(0,r.jsx)(t,{}),"\n",(0,r.jsx)(n.h2,{id:"slim-alc",children:"Slim ALC"}),"\n",(0,r.jsx)(n.p,{children:"\u8fd9\u662f Z# \u4e3a\u4e86\u65b9\u4fbf\u5f00\u53d1\u8005\u5728\u865a\u5e7b\u5f15\u64ce\u4e2d\u6267\u884c\u4e00\u4e9b\u76f8\u5bf9\u72ec\u7acb\u7684\u6258\u7ba1\u4ee3\u7801\u800c\u5f15\u5165\u7684\u6982\u5ff5\u3002\r\n\u5bf9\u4e8e\u4e00\u4e9b\u7b80\u5355\u4e14\u72ec\u7acb\u7684\u4efb\u52a1\u800c\u8a00\uff0cMaster ALC \u6709\u4e9b\u8fc7\u91cd\u4e86\u3002\r\n\u800c\u4e14\uff0c\u628a\u592a\u591a\u7a0b\u5e8f\u96c6\u52a0\u8f7d\u8fdb Master ALC \u4e5f\u4f1a\u6c61\u67d3\u4e3b\u8981\u73af\u5883\u3002\r\n\u4e3a\u6b64\uff0cZ# \u5f15\u5165\u4e86\u4e00\u79cd\u7528\u5b8c\u5373\u5f03\u7684 ALC \u6765\u6267\u884c\u7b80\u5355\u4ee3\u7801\u3002"}),"\n",(0,r.jsxs)(n.p,{children:["\u4e00\u822c\u901a\u8fc7\u63a7\u5236\u53f0\u547d\u4ee4 ",(0,r.jsx)(n.code,{children:"z#.run"})," \u6765\u5728 Slim ALC \u4e0a\u6267\u884c\u4ee3\u7801\u3002\r\n\u8fd9\u6761\u547d\u4ee4\u4f1a\u5728\u4e3b\u7ebf\u7a0b\u521b\u5efa\u4e00\u4e2a Slim ALC\uff0c\u52a0\u8f7d\u53c2\u6570\u6307\u5b9a\u7684\u7a0b\u5e8f\u96c6\u5e76\u8c03\u7528\u5b83\u7684\u5165\u53e3\u65b9\u6cd5\u3002\r\n\u5f53\u5165\u53e3\u65b9\u6cd5\u8fd4\u56de\u540e\uff0c\u8fd9\u4e2a Slim ALC \u5c31\u4f1a\u88ab\u5378\u8f7d\u3002"]}),"\n",(0,r.jsx)(n.admonition,{type:"info",children:(0,r.jsx)(n.p,{children:"Z# \u7684\u6784\u5efa\u5de5\u5177\u5c31\u662f\u8fd0\u884c\u5728 Slim ALC \u4e0a\u7684\u3002"})})]})}function C(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}function L(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}},8453:(e,n,t)=>{t.d(n,{R:()=>i,x:()=>c});var r=t(6540);const o={},s=r.createContext(o);function i(e){const n=r.useContext(s);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:i(e.components),r.createElement(s.Provider,{value:n},e.children)}}}]);