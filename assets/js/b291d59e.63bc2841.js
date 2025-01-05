"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[522],{9799:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>l,contentTitle:()=>i,default:()=>o,frontMatter:()=>c,metadata:()=>s,toc:()=>j});var t=r(4848),d=r(8453);const c={sidebar_position:1},i="\u5bf9\u8c61\u6a21\u578b",s={id:"documentation/core-concepts/object-model",title:"\u5bf9\u8c61\u6a21\u578b",description:"\u865a\u5e7b\u5f15\u64ce\u7684\u5e94\u7528\u5c42\u91c7\u7528 C++/\u811a\u672c\u6df7\u5408\u5f00\u53d1\u7684\u6a21\u5f0f\uff0c\u800c Z# \u662f\u4e00\u4e2a\u975e\u5b8c\u5168\u57fa\u4e8e UObject \u7cfb\u7edf\u7684\u811a\u672c\u5f15\u64ce\uff0c\u56e0\u6b64\u65e0\u6cd5\u50cf\u84dd\u56fe\u4e00\u6837\u5c06\u5e95\u5c42\u7ec6\u8282\u5b8c\u5168\u62bd\u8c61\u6389\u3002",source:"@site/docs/documentation/core-concepts/object-model.mdx",sourceDirName:"documentation/core-concepts",slug:"/documentation/core-concepts/object-model",permalink:"/ZSharpDoc/docs/documentation/core-concepts/object-model",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"docSidebar",previous:{title:"\u6838\u5fc3\u6982\u5ff5",permalink:"/ZSharpDoc/docs/category/\u6838\u5fc3\u6982\u5ff5"},next:{title:"\u4e92\u64cd\u4f5c\u534f\u8bae",permalink:"/ZSharpDoc/docs/documentation/core-concepts/interop-protocol"}},l={},j=[{value:"\u5171\u8f6d\u6620\u5c04",id:"\u5171\u8f6d\u6620\u5c04",level:2},{value:"\u5171\u8f6d\u751f\u547d\u5468\u671f",id:"\u5171\u8f6d\u751f\u547d\u5468\u671f",level:2},{value:"\u5171\u8f6d\u5bf9\u8c61\u7684\u989c\u8272",id:"\u5171\u8f6d\u5bf9\u8c61\u7684\u989c\u8272",level:3},{value:"\u5171\u8f6d\u7c7b\u578b\u8868",id:"\u5171\u8f6d\u7c7b\u578b\u8868",level:2}];function h(e){const n={admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",li:"li",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,d.R)(),...e.components},{ZDivider:r,ZDocHeader:c}=n;return r||x("ZDivider",!0),c||x("ZDocHeader",!0),(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.header,{children:(0,t.jsx)(n.h1,{id:"\u5bf9\u8c61\u6a21\u578b",children:"\u5bf9\u8c61\u6a21\u578b"})}),"\n",(0,t.jsx)(c,{lastUpdate:"2025-01-03"}),"\n",(0,t.jsx)(n.p,{children:"\u865a\u5e7b\u5f15\u64ce\u7684\u5e94\u7528\u5c42\u91c7\u7528 C++/\u811a\u672c\u6df7\u5408\u5f00\u53d1\u7684\u6a21\u5f0f\uff0c\u800c Z# \u662f\u4e00\u4e2a\u975e\u5b8c\u5168\u57fa\u4e8e UObject \u7cfb\u7edf\u7684\u811a\u672c\u5f15\u64ce\uff0c\u56e0\u6b64\u65e0\u6cd5\u50cf\u84dd\u56fe\u4e00\u6837\u5c06\u5e95\u5c42\u7ec6\u8282\u5b8c\u5168\u62bd\u8c61\u6389\u3002\r\n\u8fd9\u610f\u5473\u7740 Z# \u4e2d\u5b58\u5728\u4e00\u4e9b\u84dd\u56fe\u4e0d\u9700\u8981\u8003\u8651\u7684\u95ee\u9898\uff0c\u7406\u89e3\u6210\u672c\u4f1a\u7a0d\u9ad8\u4e8e\u84dd\u56fe\u3002"}),"\n",(0,t.jsx)(n.p,{children:"Z# \u8981\u6c42\u5f00\u53d1\u8005\u5bf9 UObject \u548c .NET \u7684\u5bf9\u8c61\u6a21\u578b\u90fd\u6709\u4e00\u5b9a\u4e86\u89e3\uff0c\u5e76\u5728\u6b64\u57fa\u7840\u4e0a\u7406\u89e3 Z# \u7684\u5bf9\u8c61\u6a21\u578b\u3002\r\n\u8fd9\u7bc7\u6587\u7ae0\u4ecb\u7ecd\u4e86 Z# \u7684\u5bf9\u8c61\u6a21\u578b\uff0c\u5305\u542b C++ \u548c\u811a\u672c\u5bf9\u8c61\u5982\u4f55\u5efa\u7acb\u7ed1\u5b9a\uff0c\u4e24\u4fa7\u7684\u5bf9\u8c61\u751f\u547d\u5468\u671f\u5982\u4f55\u540c\u6b65\u7b49\u8bdd\u9898\u3002\r\n\u4e86\u89e3\u8fd9\u4e9b\u5185\u5bb9\u53ef\u4ee5\u5e2e\u52a9\u4f60\u6709\u6548\u907f\u514d\u4f7f\u7528 Z# \u65f6\u51fa\u73b0\u4e00\u4e9b\u8be1\u5f02\u7684\u5185\u5b58\u95ee\u9898\u3002"}),"\n",(0,t.jsx)(r,{}),"\n",(0,t.jsx)(n.h2,{id:"\u5171\u8f6d\u6620\u5c04",children:"\u5171\u8f6d\u6620\u5c04"}),"\n",(0,t.jsx)(n.p,{children:"\u811a\u672c\u5f15\u64ce\u6700\u6838\u5fc3\u7684\u804c\u8d23\u662f\u63d0\u4f9b\u4e0e\u5bbf\u4e3b\u5f15\u64ce\u4e92\u64cd\u4f5c\u7684\u80fd\u529b\uff0c\u4f46\u6258\u7ba1\u4ee3\u7801\u65e0\u6cd5\u76f4\u63a5\u7406\u89e3\u975e\u6258\u7ba1\u5bf9\u8c61\uff0c\u975e\u6258\u7ba1\u4ee3\u7801\u4e5f\u65e0\u6cd5\u76f4\u63a5\u7406\u89e3\u6258\u7ba1\u5bf9\u8c61\u3002\r\n\u56e0\u6b64\uff0c\u5f53\u4e00\u4e2a\u5bf9\u8c61\u9700\u8981\u540c\u65f6\u88ab\u4e24\u4fa7\u8bbf\u95ee\u65f6\uff0c\u5c31\u5fc5\u987b\u8981\u505a\u4ee5\u4e0b\u5904\u7406\uff1a"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["\u5bf9\u8c61\u6240\u5728\u7684\u4fa7\u76f4\u63a5\u8bbf\u95ee\u5bf9\u8c61\u672c\u8eab\uff0c\u5bf9\u8c61\u672c\u8eab\u79f0\u4e3a ",(0,t.jsx)(n.code,{children:"\u539f\u5bf9\u8c61 (Primitive Object)"}),"\uff0c\u539f\u5bf9\u8c61\u7684\u7c7b\u578b\u79f0\u4e3a ",(0,t.jsx)(n.code,{children:"\u539f\u7c7b\u578b (Primitive Type)"}),"\u3002"]}),"\n",(0,t.jsxs)(n.li,{children:["\u5bf9\u8c61\u6240\u5728\u7684\u5bf9\u4fa7\u4f7f\u7528\u4e00\u4e2a\u4ee3\u7406\u5bf9\u8c61\u95f4\u63a5\u8bbf\u95ee\uff0c\u4ee3\u7406\u5bf9\u8c61\u79f0\u4e3a ",(0,t.jsx)(n.code,{children:"\u5171\u8f6d\u5bf9\u8c61 (Conjugate Object)"}),"\uff0c\u5171\u8f6d\u5bf9\u8c61\u7684\u7c7b\u578b\u79f0\u4e3a ",(0,t.jsx)(n.code,{children:"\u5171\u8f6d\u7c7b\u578b (Conjugate Type)"}),"\u3002"]}),"\n",(0,t.jsxs)(n.li,{children:["\u5b58\u5728\u4e00\u4e2a\u539f\u5bf9\u8c61\u5230\u5171\u8f6d\u5bf9\u8c61\u7684\u9ad8\u901f\u53cc\u5411\u6620\u5c04\uff0c\u80fd\u591f\u5feb\u901f\u5728\u539f\u5bf9\u8c61\u548c\u5171\u8f6d\u5bf9\u8c61\u4e4b\u95f4\u8f6c\u6362\uff0c\u8fd9\u4e2a\u8f6c\u6362\u64cd\u4f5c\u79f0\u4e3a ",(0,t.jsx)(n.code,{children:"\u5171\u8f6d\u6620\u5c04 (Conjugate Mapping)"}),"\u3002"]}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"\u867d\u7136\u5b9a\u4e49\u4e0a\u6ca1\u6709\u9650\u5236\u539f\u5bf9\u8c61\u662f\u5c5e\u4e8e\u6258\u7ba1\u4fa7\u8fd8\u662f\u975e\u6258\u7ba1\u4fa7\uff0c\u4f46\u5b9e\u8df5\u4e0a\u6240\u6709\u9700\u8981\u5171\u8f6d\u6620\u5c04\u7684\u7c7b\u578b\u90fd\u662f\u975e\u6258\u7ba1\u4fa7\u7684\u3002\r\n\u8fd9\u662f\u56e0\u4e3a\u4e24\u4fa7\u5b58\u5728\u660e\u786e\u7684\u5c42\u7ea7\u5173\u7cfb\uff0c\u5373\u975e\u6258\u7ba1\u4fa7\u662f\u6258\u7ba1\u4fa7\u7684\u5e95\u5c42\uff0c\u56e0\u6b64\u975e\u6258\u7ba1\u4fa7\u6ca1\u6709\u7406\u7531\u4f9d\u8d56\u6258\u7ba1\u4fa7\u7684\u5177\u4f53\u7c7b\u578b\u3002"}),"\n",(0,t.jsx)(r,{}),"\n",(0,t.jsx)(n.h2,{id:"\u5171\u8f6d\u751f\u547d\u5468\u671f",children:"\u5171\u8f6d\u751f\u547d\u5468\u671f"}),"\n",(0,t.jsx)(n.p,{children:"\u7531\u4e8e UObject \u548c .NET \u90fd\u6709\u5783\u573e\u56de\u6536\u673a\u5236\uff0c\u4f46\u4e24\u8005\u5374\u5b8c\u5168\u65e0\u6cd5\u540c\u6b65\u3002\u4e0d\u662f\u539f\u5bf9\u8c61\u5148\u4e8e\u5171\u8f6d\u5bf9\u8c61\u9500\u6bc1\uff0c\u5c31\u662f\u5171\u8f6d\u5bf9\u8c61\u5148\u4e8e\u539f\u5bf9\u8c61\u9500\u6bc1\u3002"}),"\n",(0,t.jsx)(n.p,{children:"\u8fd9\u4e5f\u662f Z# \u4e0e\u84dd\u56fe\u6700\u91cd\u8981\u7684\u533a\u522b\u3002\r\n\u84dd\u56fe\u4e2d\u7684\u4efb\u4f55\u5bf9\u8c61\u548c\u5f15\u7528\u90fd\u4f9d\u6258\u4e8e UProperty\uff08\u8fd9\u79cd\u8bf4\u6cd5\u4e0d\u51c6\u786e\uff0c\u4f46\u53ef\u4ee5\u5927\u81f4\u8fd9\u4e48\u8ba4\u4e3a\uff09\uff0c\u5373\u4f7f\u662f\u5c40\u90e8\u53d8\u91cf\u3002\u8fd9\u610f\u5473\u7740\u84dd\u56fe\u4e2d\u7684\u6240\u6709\u5bf9\u8c61\u548c\u5f15\u7528\u90fd\u80fd\u6b63\u786e\u88ab GC \u7ba1\u7406\uff1b\r\n\u800c Z# \u4e0e C++ \u4e00\u6837\uff0c\u5b58\u5728\u5b64\u7acb\u5bf9\u8c61\u548c\u5f15\u7528\uff0c\u5373 GC \u770b\u4e0d\u5230\u7684\u5bf9\u8c61\u548c\u5f15\u7528\uff0c\u6bd4\u5982\u6808\u4e0a\u7684\u3001\u672a\u6ce8\u518c\u5230 GC \u7684\u5806\u4e0a\u7684\u3001\u5bc4\u5b58\u5668\u4e2d\u7684\u5bf9\u8c61\u548c\u5f15\u7528\u3002\r\n\u5b64\u7acb\u5bf9\u8c61\u548c\u5f15\u7528\u7684\u5b58\u5728\u4f7f\u5f97\u5185\u5b58\u7ba1\u7406\u53d8\u5f97\u66f4\u52a0\u590d\u6742\u3002"}),"\n",(0,t.jsx)(n.p,{children:"\u5728 C++ \u4e2d\uff0c\u8bef\u7528\u5b64\u7acb\u5bf9\u8c61\u5f80\u5f80\u4f1a\u5bfc\u81f4\u672a\u5b9a\u4e49\u884c\u4e3a\u3002\u4f46 Z# \u4f5c\u4e3a\u4e00\u4e2a\u811a\u672c\u5f15\u64ce\uff0c\u5e0c\u671b\u6700\u5927\u9650\u5ea6\u5b9e\u73b0\u5185\u5b58\u5b89\u5168\u3002"}),"\n",(0,t.jsx)(n.p,{children:"\u5bf9\u6b64\uff0cZ# \u7684\u7b56\u7565\u662f\u8ba9\u5171\u8f6d\u5bf9\u8c61\u6c38\u8fdc\u4e0d\u65e9\u4e8e\u539f\u5bf9\u8c61\u9500\u6bc1\uff08\u70ed\u91cd\u8f7d\u4f1a\u7834\u574f\u8fd9\u4e2a\u5047\u8bbe\uff0c\u4f46\u4e0d\u5728\u8fd9\u91cc\u8ba8\u8bba\uff09\u3002\r\n\u8fd9\u6837\u505a\u7684\u539f\u56e0\u662f\uff0c\u6211\u4eec\u53ef\u4ee5\u76d1\u542c\u4efb\u4f55\u6258\u7ba1\u5bf9\u8c61\u7684\u9500\u6bc1\uff0c\u4f46\u65e0\u6cd5\u76d1\u542c\u6240\u6709\u975e\u6258\u7ba1\u5bf9\u8c61\u7684\u9500\u6bc1\u3002\r\n\u5bf9\u4e8e\u65e0\u6cd5\u7cbe\u786e\u63a7\u5236\u7684\u975e\u6258\u7ba1\u5bf9\u8c61\uff0cZ# \u91c7\u7528\u4fdd\u5b88\u7b56\u7565\u2014\u2014\u53ea\u8981\u6ee1\u8db3\u88ab\u9500\u6bc1\u7684\u67d0\u4e2a\u5fc5\u8981\u975e\u5145\u5206\u6761\u4ef6\uff0c\u5c31\u63d0\u524d\u5c06\u5171\u8f6d\u5bf9\u8c61\u6807\u8bb0\u4e3a\u65e0\u6548\uff0c\u8fdb\u800c\u675c\u7edd\u4e00\u5207\u7a7a\u60ac\u5f15\u7528\u7684\u51fa\u73b0\u3002\r\n\u8fd9\u79cd\u7b56\u7565\u4f1a\u5728\u4e00\u5b9a\u7a0b\u5ea6\u4e0a\u964d\u4f4e Z# \u7684\u6613\u7528\u6027\uff0c\u4f46\u5b89\u5168\u6027\u5bf9\u4e8e\u4e00\u4e2a\u811a\u672c\u5f15\u64ce\u800c\u8a00\u662f\u7edd\u5bf9\u7684\uff0c\u6211\u4eec\u8ba4\u4e3a\u8fd9\u4e2a\u727a\u7272\u662f\u503c\u5f97\u7684\u3002"}),"\n",(0,t.jsxs)(n.p,{children:["\u8fd0\u884c\u65f6\uff0c\u6258\u7ba1\u4fa7\u53ef\u4ee5\u901a\u8fc7 ",(0,t.jsx)(n.code,{children:"IExplicitLifecycle.IsExpired"})," \u5c5e\u6027\u5224\u65ad\u4e00\u4e2a\u5171\u8f6d\u5bf9\u8c61\u662f\u5426\u5931\u6548\u3002"]}),"\n",(0,t.jsx)(n.h3,{id:"\u5171\u8f6d\u5bf9\u8c61\u7684\u989c\u8272",children:"\u5171\u8f6d\u5bf9\u8c61\u7684\u989c\u8272"}),"\n",(0,t.jsx)(n.p,{children:"\u5b9e\u9645\u4e0a\uff0c\u5982\u679c\u4e0d\u505a\u4efb\u4f55\u8865\u507f\u673a\u5236\uff0c\u4e0a\u8ff0\u673a\u5236\u4f1a\u9020\u6210\u975e\u5e38\u5927\u7684\u4e0d\u4fbf\u3002\r\n\u4f8b\u5982\uff1a\u6258\u7ba1\u4fa7\u5f97\u5230\u4e86\u4e00\u4e2a Vector \u5f15\u7528\uff0c\u4f46\u7531\u4e8e\u8fd9\u4e2a\u5f15\u7528\u53ef\u80fd\u5728\u4efb\u610f\u65f6\u523b\u88ab\u6807\u8bb0\u4e3a\u65e0\u6548\uff0c\u60f3\u7f13\u5b58\u5b83\u5c31\u4e0d\u5f97\u4e0d\u901a\u8fc7\u95f4\u63a5\u624b\u6bb5\u5b9e\u73b0\u3002"}),"\n",(0,t.jsxs)(n.p,{children:["\u4e3a\u4e86\u89e3\u51b3\u8fd9\u4e2a\u95ee\u9898\uff0cZ# \u5f15\u5165\u4e86\u989c\u8272\u7684\u6982\u5ff5\uff0c\u6309\u539f\u5bf9\u8c61\u7684\u6240\u6709\u6743\u5c06\u5171\u8f6d\u5bf9\u8c61\u8fdb\u4e00\u6b65\u5212\u5206\u4e3a ",(0,t.jsx)(n.code,{children:"\u7ea2\u8272"})," \u548c ",(0,t.jsx)(n.code,{children:"\u9ed1\u8272"}),"\uff1a"]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["\u7ea2\u8272\uff1a\u6240\u6709\u6743\u5f52\u5c5e\u4e8e ",(0,t.jsx)(n.strong,{children:"\u975e\u6258\u7ba1\u4fa7"}),"\uff0c\u6240\u6709 UObject \u90fd\u662f\u7ea2\u8272\uff0c\u539f\u5bf9\u8c61\u88ab\u56de\u6536\u65f6\u5c06\u5171\u8f6d\u5bf9\u8c61\u6807\u8bb0\u4e3a\u65e0\u6548\uff1b\u5176\u4ed6\u5171\u8f6d\u5bf9\u8c61\u7684\u6709\u6548\u671f\u90fd\u53ef\u4ee5\u7c97\u7565\u5730\u89c6\u4e3a\u4e0e\u5c40\u90e8\u53d8\u91cf\u76f8\u540c\uff0c\u5373\u4f1a\u5728\u83b7\u53d6\u5f15\u7528\u7684\u65b9\u6cd5\u8fd4\u56de\u540e\u5931\u6548\u3002"]}),"\n",(0,t.jsxs)(n.li,{children:["\u9ed1\u8272\uff1a\u6240\u6709\u6743\u5f52\u5c5e\u4e8e ",(0,t.jsx)(n.strong,{children:"\u6258\u7ba1\u4fa7"}),"\uff0c\u5f53\u4e14\u4ec5\u5f53\u5171\u8f6d\u5bf9\u8c61\u88ab\u9500\u6bc1\u6216\u663e\u5f0f\u91ca\u653e\u65f6\uff0c\u539f\u5bf9\u8c61\u624d\u4f1a\u88ab\u8fde\u5e26\u9500\u6bc1\u3002"]}),"\n"]}),"\n",(0,t.jsxs)(n.p,{children:["\u903b\u8f91\u4e0a\uff0c\u6258\u7ba1\u4fa7\u76f4\u63a5\u5b9e\u4f8b\u5316\u7684\u5171\u8f6d\u5bf9\u8c61\u662f\u9ed1\u8272\u7684\uff0c\u5176\u4ed6\u60c5\u51b5\u4e0b\u5168\u662f\u7ea2\u8272\u7684\uff1b\u8fd0\u884c\u65f6\uff0c\u6258\u7ba1\u4fa7\u53ef\u4ee5\u901a\u8fc7 ",(0,t.jsx)(n.code,{children:"IConjugate.IsBlack"})," \u5c5e\u6027\u5224\u65ad\u4e00\u4e2a\u5171\u8f6d\u5bf9\u8c61\u662f\u5426\u662f\u9ed1\u8272\u3002\r\n\u4f60\u53ef\u4ee5\u76f4\u63a5\u7f13\u5b58\u4efb\u4f55 UObject \u5f15\u7528\uff0c\u56e0\u4e3a UObject \u5171\u8f6d\u7684\u6709\u6548\u671f\u662f\u7cbe\u786e\u7ed1\u5b9a\u5230\u539f\u5bf9\u8c61\u751f\u547d\u5468\u671f\u7684\uff1b\r\n\u9664 UObject \u5916\uff0c\u6240\u6709\u5171\u8f6d\u7c7b\u578b\u90fd\u5b9e\u73b0\u4e86 ",(0,t.jsx)(n.code,{children:"ICloneable<T>"})," \u63a5\u53e3\uff0c\u4f60\u53ef\u4ee5\u901a\u8fc7 ",(0,t.jsx)(n.code,{children:"Clone()"})," \u65b9\u6cd5\u521b\u5efa\u4e00\u4e2a\u62f7\u8d1d\u3002\r\n\u6240\u6709\u7684\u5171\u8f6d\u5bf9\u8c61\u7684\u62f7\u8d1d\u90fd\u662f\u9ed1\u8272\u7684\uff0c\u8fd9\u610f\u5473\u7740\u4f60\u53ef\u4ee5\u7f13\u5b58\u7ea2\u8272\u5171\u8f6d\u7684\u62f7\u8d1d\u3002"]}),"\n",(0,t.jsx)(n.admonition,{type:"info",children:(0,t.jsx)(n.p,{children:"\u901f\u8bb0\uff1a\u7ea2\u8272\u5171\u8f6d\u7684\u6709\u6548\u671f\u8ddf\u968f\u65b9\u6cd5\uff0c\u7c7b\u4f3c\u4e8e\u503c\u7c7b\u578b\uff1b\u9ed1\u8272\u5171\u8f6d\u7684\u6709\u6548\u671f\u53d6\u51b3\u4e8e\u5783\u573e\u56de\u6536\uff0c\u7c7b\u4f3c\u4e8e\u5f15\u7528\u7c7b\u578b\u3002\r\n\u4e00\u4e2a\u5171\u8f6d\u5bf9\u8c61\u662f\u9ed1\u8272\uff0c\u610f\u5473\u7740\u4f60\u53ef\u4ee5\u5b89\u5168\u5730\u7f13\u5b58\u5b83\u7684\u5f15\u7528\u3002"})}),"\n",(0,t.jsx)(r,{}),"\n",(0,t.jsx)(n.h2,{id:"\u5171\u8f6d\u7c7b\u578b\u8868",children:"\u5171\u8f6d\u7c7b\u578b\u8868"}),"\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"\u975e\u6258\u7ba1\u7c7b\u578b"}),(0,t.jsx)(n.th,{children:"\u6258\u7ba1\u7c7b\u578b"}),(0,t.jsx)(n.th,{children:"\u5206\u7c7b"})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"UE Object"}),(0,t.jsx)(n.td,{children:"UnrealObject"}),(0,t.jsx)(n.td,{children:"User Type"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"UE Struct"}),(0,t.jsx)(n.td,{children:"UnrealScriptStructBase"}),(0,t.jsx)(n.td,{children:"User Type"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"FString"}),(0,t.jsx)(n.td,{children:"UnrealString"}),(0,t.jsx)(n.td,{children:"String"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"FUtf8String"}),(0,t.jsx)(n.td,{children:"UnrealUtf8String"}),(0,t.jsx)(n.td,{children:"String"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"FAnsiString"}),(0,t.jsx)(n.td,{children:"UnrealAnsiString"}),(0,t.jsx)(n.td,{children:"String"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"FName"}),(0,t.jsx)(n.td,{children:"UnrealName"}),(0,t.jsx)(n.td,{children:"String"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"FText"}),(0,t.jsx)(n.td,{children:"UnrealText"}),(0,t.jsx)(n.td,{children:"String"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"TSubclassOf"}),(0,t.jsx)(n.td,{children:"SubclassOf"}),(0,t.jsx)(n.td,{children:"Object Wrapper"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"TSoftClassPtr"}),(0,t.jsx)(n.td,{children:"SoftClassPtr"}),(0,t.jsx)(n.td,{children:"Object Wrapper"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"TSoftObjectPtr"}),(0,t.jsx)(n.td,{children:"SoftObjectPtr"}),(0,t.jsx)(n.td,{children:"Object Wrapper"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"TLazyObjectPtr"}),(0,t.jsx)(n.td,{children:"LazyObjectPtr"}),(0,t.jsx)(n.td,{children:"Object Wrapper"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"TWeakObjectPtr"}),(0,t.jsx)(n.td,{children:"WeakObjectPtr"}),(0,t.jsx)(n.td,{children:"Object Wrapper"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"TScriptInterface"}),(0,t.jsx)(n.td,{children:"ScriptInterface"}),(0,t.jsx)(n.td,{children:"Object Wrapper"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"TArray"}),(0,t.jsx)(n.td,{children:"UnrealArray"}),(0,t.jsx)(n.td,{children:"Container"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"TSet"}),(0,t.jsx)(n.td,{children:"UnrealSet"}),(0,t.jsx)(n.td,{children:"Container"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"TMap"}),(0,t.jsx)(n.td,{children:"UnrealMap"}),(0,t.jsx)(n.td,{children:"Container"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"TOptional"}),(0,t.jsx)(n.td,{children:"UnrealOptional"}),(0,t.jsx)(n.td,{children:"Container"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"FScriptDelegate"}),(0,t.jsx)(n.td,{children:"UnrealDelegateBase"}),(0,t.jsx)(n.td,{children:"Delegate"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"FMulticastScriptDelegate"}),(0,t.jsx)(n.td,{children:"UnrealMulticastInlineDelegateBase"}),(0,t.jsx)(n.td,{children:"Delegate"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"FSparseDelegate"}),(0,t.jsx)(n.td,{children:"UnrealMulticastSparseDelegateBase"}),(0,t.jsx)(n.td,{children:"Delegate"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"FFieldPath"}),(0,t.jsx)(n.td,{children:"FieldPath"}),(0,t.jsx)(n.td,{children:"Misc"})]})]})]})]})}function o(e={}){const{wrapper:n}={...(0,d.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(h,{...e})}):h(e)}function x(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}},8453:(e,n,r)=>{r.d(n,{R:()=>i,x:()=>s});var t=r(6540);const d={},c=t.createContext(d);function i(e){const n=t.useContext(c);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function s(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(d):e.components||d:i(e.components),t.createElement(c.Provider,{value:n},e.children)}}}]);