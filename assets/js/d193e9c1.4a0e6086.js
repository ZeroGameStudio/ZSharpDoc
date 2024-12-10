"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[5820],{2506:(e,n,l)=>{l.r(n),l.d(n,{assets:()=>i,contentTitle:()=>s,default:()=>x,frontMatter:()=>d,metadata:()=>c,toc:()=>h});var r=l(4848),t=l(8453);const d={sidebar_position:2},s="\u4e92\u64cd\u4f5c\u534f\u8bae",c={id:"documentation/core-concepts/interop-protocol",title:"\u4e92\u64cd\u4f5c\u534f\u8bae",description:"\u4e3a\u4e86\u540c\u65f6\u652f\u6301\u591a\u79cd .NET \u8fd0\u884c\u65f6\uff0cZ# \u653e\u5f03\u4e86\u9488\u5bf9\u7279\u5b9a\u5b9e\u73b0\u7684\u4e92\u64cd\u4f5c\u65b9\u6848\uff0c\u9009\u62e9\u53ea\u4f9d\u8d56 ECMA-335 \u4e2d\u660e\u786e\u5b9a\u4e49\u7684\u7279\u6027\u6765\u5b9a\u4e49\u81ea\u5df1\u7684\u4e92\u64cd\u4f5c\u534f\u8bae\u3002",source:"@site/docs/documentation/core-concepts/interop-protocol.mdx",sourceDirName:"documentation/core-concepts",slug:"/documentation/core-concepts/interop-protocol",permalink:"/ZSharpDoc/docs/documentation/core-concepts/interop-protocol",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"docSidebar",previous:{title:"\u5bf9\u8c61\u6a21\u578b",permalink:"/ZSharpDoc/docs/documentation/core-concepts/object-model"},next:{title:"\u73af\u5883\u9694\u79bb",permalink:"/ZSharpDoc/docs/documentation/core-concepts/environment-isolation"}},i={},h=[{value:"\u51fd\u6570\u6307\u9488",id:"\u51fd\u6570\u6307\u9488",level:2},{value:"ZCall",id:"zcall",level:2},{value:"ZCallName",id:"zcallname",level:3},{value:"ZCallResolver",id:"zcallresolver",level:4},{value:"ZCallDispatcher",id:"zcalldispatcher",level:4},{value:"\u534f\u8bae\u7c7b\u578b\u8868",id:"\u534f\u8bae\u7c7b\u578b\u8868",level:4},{value:"ZCallBuffer",id:"zcallbuffer",level:3},{value:"\u5728\u6258\u7ba1\u6808\u4e0a\u5206\u914d Buffer",id:"\u5728\u6258\u7ba1\u6808\u4e0a\u5206\u914d-buffer",level:4}];function o(e){const n={admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",header:"header",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,t.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.header,{children:(0,r.jsx)(n.h1,{id:"\u4e92\u64cd\u4f5c\u534f\u8bae",children:"\u4e92\u64cd\u4f5c\u534f\u8bae"})}),"\n",(0,r.jsxs)(n.p,{children:["\u4e3a\u4e86\u540c\u65f6\u652f\u6301\u591a\u79cd .NET \u8fd0\u884c\u65f6\uff0cZ# \u653e\u5f03\u4e86\u9488\u5bf9\u7279\u5b9a\u5b9e\u73b0\u7684\u4e92\u64cd\u4f5c\u65b9\u6848\uff0c\u9009\u62e9\u53ea\u4f9d\u8d56 ",(0,r.jsx)(n.code,{children:"ECMA-335"})," \u4e2d\u660e\u786e\u5b9a\u4e49\u7684\u7279\u6027\u6765\u5b9a\u4e49\u81ea\u5df1\u7684\u4e92\u64cd\u4f5c\u534f\u8bae\u3002"]}),"\n",(0,r.jsx)(n.p,{children:"Z# \u7684\u4e92\u64cd\u4f5c\u534f\u8bae\u53ea\u9700\u8981\u8fd0\u884c\u65f6\u63d0\u4f9b\u4e24\u4e2a\u63a5\u53e3\uff1a"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-cpp",children:"int load_assembly(const void* assembly_bytes, size_t assembly_bytes_len, const void* symbol_bytes, size_t symbol_bytes_len);\r\nint get_function_pointer(const char_t* type_name, const char_t* method_name, const char_t* delegate_type_name, void** delegate);\n"})}),"\n",(0,r.jsxs)(n.p,{children:["\u4e24\u4e2a\u63a5\u53e3\u5206\u522b\u7528\u4e8e\u4ece\u5b57\u8282\u6d41\u4e2d\u52a0\u8f7d\u4e00\u4e2a\u7a0b\u5e8f\u96c6\u5230 ",(0,r.jsx)(n.code,{children:"Default ALC"})," \u548c\u4ece\u4e2d\u83b7\u53d6\u4e00\u4e2a ",(0,r.jsx)(n.code,{children:"[UnmanagedCallersOnly]"})," \u7684\u6258\u7ba1\u65b9\u6cd5\u3002"]}),"\n",(0,r.jsxs)(n.p,{children:["\u4efb\u4f55\u5b8c\u6574\u5b9e\u73b0\u4e86 ECMA-335 \u4e14\u6709\u4e0a\u8ff0\u4e24\u4e2a\u80fd\u529b\u7684 .NET 9 \u7248\u672c\u53ca\u4ee5\u4e0a\u7684\u8fd0\u884c\u65f6\uff0c\u90fd\u662f\u4e00\u4e2a\u6709\u6548\u7684 Z# \u811a\u672c\u540e\u7aef\u3002\r\n\u76ee\u524d\uff0cZ# \u652f\u6301 ",(0,r.jsx)(n.code,{children:"CoreCLR"})," \u548c ",(0,r.jsx)(n.code,{children:"Mono"})," \u4e24\u79cd\u8fd0\u884c\u65f6\u3002\r\nCoreCLR \u5728 Windows/Linux \u5e73\u53f0\u7684\u53d1\u5e03\u7248\u672c\u4e2d\u4f7f\u7528\uff0c\u6709\u66f4\u9ad8\u7684\u8fd0\u884c\u6548\u7387\uff1b\r\nMono \u5728\u5f00\u53d1\u73af\u5883\u548c\u5176\u4ed6\u5e73\u53f0\u7684\u53d1\u5e03\u7248\u672c\u4e2d\u4f7f\u7528\uff0c\u6709\u66f4\u597d\u7684\u79fb\u690d\u6027\u548c\u8c03\u8bd5\u652f\u6301\u3002"]}),"\n",(0,r.jsx)(n.h2,{id:"\u51fd\u6570\u6307\u9488",children:"\u51fd\u6570\u6307\u9488"}),"\n",(0,r.jsx)(n.p,{children:"\u5bf9\u4e8e\u90a3\u4e9b\u53ef\u7a77\u4e3e\u7684\u63a5\u53e3\uff0cZ# \u76f4\u63a5\u4f7f\u7528\u51fd\u6570\u6307\u9488\u8fdb\u884c\u8c03\u7528\u3002\r\n\u5728\u8fd9\u79cd\u6a21\u5f0f\u4e2d\uff0c\u6258\u7ba1\u7a0b\u5e8f\u96c6\u7684\u5165\u53e3\u65b9\u6cd5\u4f1a\u63a5\u53d7\u4e00\u4e2a\u5305\u542b\u975e\u6258\u7ba1\u51fd\u6570\u6307\u9488\uff08\u8f93\u5165\uff09\u548c\u6258\u7ba1\u51fd\u6570\u6307\u9488\uff08\u8f93\u51fa\uff09\u7684\u53c2\u6570\u3002\r\n\u6258\u7ba1\u4fa7\u5c06\u975e\u6258\u7ba1\u51fd\u6570\u6307\u9488\u7ed1\u5b9a\u5230\u9759\u6001\u5b57\u6bb5\u4e0a\u4f9b\u6258\u7ba1\u4ee3\u7801\u8c03\u7528\uff0c\u540c\u65f6\u7ed9\u6258\u7ba1\u51fd\u6570\u6307\u9488\u8d4b\u503c\uff0c\u8fd4\u56de\u7ed9\u975e\u6258\u7ba1\u4fa7\u3002"}),"\n",(0,r.jsx)(n.p,{children:"Z# \u6838\u5fc3\u5c42\u7684\u7ec4\u4ef6\u548c\u5f15\u64ce\u5c42\u7684\u5185\u7f6e\u53cd\u5c04\u7c7b\u578b\uff08UObject\u3001FString\u3001SoftObjectPtr\u3001TArray \u7b49\uff09\u5927\u91cf\u4f7f\u7528\u51fd\u6570\u6307\u9488\u8fdb\u884c\u4e92\u64cd\u4f5c\u3002\r\n\u8fd9\u662f\u56e0\u4e3a\u6846\u67b6\u4ee3\u7801\u76f8\u5bf9\u7a33\u5b9a\uff0c\u6240\u9700\u8981\u7684\u63a5\u53e3\u90fd\u662f\u53ef\u4ee5\u7a77\u4e3e\u7684\u3002"}),"\n",(0,r.jsx)(n.p,{children:"\u5f00\u53d1\u8005\u4e5f\u53ef\u4ee5\u9009\u62e9\u8fd9\u79cd\u6a21\u5f0f\uff0c\u4f46\u9700\u8981\u624b\u5199\u7ed1\u5b9a\u4ee3\u7801\u3002\u5efa\u8bae\u53ea\u5728\u4e92\u64cd\u4f5c\u5bc6\u96c6\u578b\u63a5\u53e3\u4e0a\u4f7f\u7528\u8fd9\u79cd\u65b9\u5f0f\u3002"}),"\n",(0,r.jsxs)(n.p,{children:["\u51fd\u6570\u6307\u9488\u7684\u901f\u5ea6\u975e\u5e38\u5feb\uff0c\u63a5\u8fd1\u4e8e\u539f\u751f\u8c03\u7528\u3002\r\n\u5982\u679c\u53c2\u6570\u7c7b\u578b\u5168\u90e8\u90fd\u662f ",(0,r.jsx)(n.code,{children:"blittable"})," \u7684\uff0c\u8fd8\u53ef\u4ee5\u4f7f\u7528 ",(0,r.jsx)(n.code,{children:"[SuppressGCTransition]"})," \u8c03\u7528\u7ea6\u5b9a\u6765\u8fdb\u4e00\u6b65\u63d0\u5347\u4e92\u64cd\u4f5c\u7684\u6027\u80fd\u3002"]}),"\n",(0,r.jsx)(n.h2,{id:"zcall",children:"ZCall"}),"\n",(0,r.jsxs)(n.p,{children:["\u5bf9\u4e8e\u90a3\u4e9b\u4e0d\u53ef\u7a77\u4e3e\u7684\u63a5\u53e3\uff0cZ# \u5b9a\u5236\u4e86\u4e00\u5957\u7edf\u4e00\u7684\u4e92\u64cd\u4f5c\u534f\u8bae\u6765\u8fdb\u884c\u8c03\u7528\uff0c\u79f0\u4e3a ",(0,r.jsx)(n.code,{children:"ZCall"}),"\u3002"]}),"\n",(0,r.jsx)(n.p,{children:"\u4e4b\u6240\u4ee5\u5b58\u5728\u4e0d\u53ef\u7a77\u4e3e\u7684\u63a5\u53e3\uff0c\u662f\u56e0\u4e3a\u865a\u5e7b\u5f15\u64ce\u91c7\u7528\u591a\u8bed\u8a00\u6df7\u5408\u5f00\u53d1\u7684\u6a21\u5f0f\u3002\r\n\u5373\u4f7f Z# \u80fd\u7a77\u4e3e\u6240\u6709\u5f15\u64ce\u63a5\u53e3\uff0c\u4e5f\u65e0\u6cd5\u77e5\u9053\u5f00\u53d1\u8005\u4f1a\u5728\u9879\u76ee\u7684 C++ \u5c42\u5b9a\u4e49\u54ea\u4e9b\u63a5\u53e3\u3002\r\n\u56e0\u6b64\uff0cZ# \u5f15\u5165\u4e86 ZCall\u3002"}),"\n",(0,r.jsxs)(n.p,{children:["ZCall \u662f\u8fdb\u7a0b\u5185\u7684\u3001\u4e8c\u8fdb\u5236\u683c\u5f0f\u7684\u901a\u4fe1\u534f\u8bae\u3002\r\n\u4e00\u6b21 ZCall \u7531 ",(0,r.jsx)(n.code,{children:"\u534f\u8bae\u540d (ZCallName)"})," \u548c ",(0,r.jsx)(n.code,{children:"\u534f\u8bae\u4f53 (ZCallBuffer)"})," \u6784\u6210\u3002"]}),"\n",(0,r.jsx)(n.h3,{id:"zcallname",children:"ZCallName"}),"\n",(0,r.jsx)(n.p,{children:"\u534f\u8bae\u540d\u662f\u4e00\u4e2a URL \u683c\u5f0f\u7684\u5b57\u7b26\u4e32\uff0c\u7531\u7c7b\u578b\u548c\u5730\u5740\u4e24\u90e8\u5206\u7ec4\u6784\u6210\u3002\r\n\u7c7b\u578b\u51b3\u5b9a\u4e86\u5982\u4f55\u5b9a\u4f4d\u51fd\u6570\uff0c\u5b9a\u4f4d\u54ea\u79cd\u51fd\u6570\uff0c\u5982\u4f55\u8c03\u7528\u51fd\u6570\uff1b\u5730\u5740\u51b3\u5b9a\u4e86\u5177\u4f53\u5b9a\u4f4d\u5230\u54ea\u4e2a\u51fd\u6570\u3002\r\n\u5f53\u5bf9\u7aef\u89e3\u6790\u4e00\u6b21 ZCall \u65f6\uff0c\u4f1a\u6839\u636e\u534f\u8bae\u540d\u786e\u5b9a\u4e00\u4e2a\u552f\u4e00\u8981\u8c03\u7528\u7684\u51fd\u6570\u3002"}),"\n",(0,r.jsxs)(n.p,{children:["\u4f8b\u5982\uff1a\u534f\u8bae\u540d ",(0,r.jsx)(n.code,{children:"uf://Script/Engine.Actor:ReceiveTick"})," \u7684\u7c7b\u578b\u662f ",(0,r.jsx)(n.code,{children:"uf"}),"\uff0c\u8868\u793a\u5b9a\u4f4d\u4e00\u4e2a UFunction\uff0c\u5e76\u901a\u8fc7 ",(0,r.jsx)(n.code,{children:"ProcessEvent"})," \u8c03\u7528\u3002\r\n\u5730\u5740\u662f ",(0,r.jsx)(n.code,{children:"Script/Engine.Actor.ReceiveTick"}),"\uff0c\u8868\u793a\u5b9a\u4f4d\u5230 ",(0,r.jsx)(n.code,{children:"AActor::ReceiveTick"})," \u51fd\u6570\u3002\r\n",(0,r.jsx)(n.code,{children:"uf"})," \u534f\u8bae\u4f7f\u7528 virtual \u8c03\u7528\uff0c\u5982\u679c this \u53c2\u6570\u91cd\u5199\u4e86 ReceiveTick\uff0c\u5219\u4f1a\u8c03\u7528\u91cd\u5199\u7248\u672c\u3002\r\n\u5982\u679c\u6539\u4e3a ",(0,r.jsx)(n.code,{children:"uf!"})," \u534f\u8bae\uff0c\u5c06\u4f7f\u7528 final \u8c03\u7528\uff0c\u610f\u5473\u7740\u6700\u7ec8\u8c03\u7528\u5230\u7684\u51fd\u6570\u4e00\u5b9a\u662f ",(0,r.jsx)(n.code,{children:"AActor::ReceiveTick"}),"\u3002"]}),"\n",(0,r.jsxs)(n.p,{children:["\u8d1f\u8d23\u5c06\u534f\u8bae\u540d\u6620\u5c04\u5230\u552f\u4e00\u51fd\u6570\u7684\u7ec4\u4ef6\u662f ",(0,r.jsx)(n.code,{children:"ZCallResolver"})," \u548c ",(0,r.jsx)(n.code,{children:"ZCallDispatcher"}),"\u3002"]}),"\n",(0,r.jsx)(n.h4,{id:"zcallresolver",children:"ZCallResolver"}),"\n",(0,r.jsx)(n.p,{children:"\u8d1f\u8d23\u63a5\u6536 ZCall \u7684\u7ec4\u4ef6\u4f1a\u6301\u6709\u4e00\u4e2a\u7531 ZCallResolver \u6784\u6210\u7684\u8d23\u4efb\u94fe\uff0c\u5f53\u7ec4\u4ef6\u6536\u5230\u4e00\u4e2a\u672a\u77e5\u7684\u534f\u8bae\u540d\u65f6\uff0c\u5c06\u4f1a\u6cbf\u8d23\u4efb\u94fe\u4f9d\u6b21\u67e5\u8be2\u3002\r\n\u6bcf\u4e2a ZCallResolver \u8d1f\u8d23\u89e3\u6790\u4e00\u5230\u591a\u79cd\u7279\u5b9a\u7c7b\u578b\u7684\u534f\u8bae\uff0c\u5982\u679c\u534f\u8bae\u7c7b\u578b\u548c\u5730\u5740\u5747\u7b26\u5408\u89c4\u8303\uff0cZCallResolver \u4f1a\u4e3a\u8be5\u534f\u8bae\u540d\u5206\u914d\u4e00\u4e2a ZCallDispatcher\u3002\r\n\u8fd9\u610f\u5473\u7740 ZCall \u662f\u53d1\u73b0\u5f0f\u7684\uff0c\u5f00\u53d1\u8005\u65e0\u9700\u624b\u52a8\u6ce8\u518c\u63a5\u53e3\u3002"}),"\n",(0,r.jsx)(n.h4,{id:"zcalldispatcher",children:"ZCallDispatcher"}),"\n",(0,r.jsx)(n.p,{children:"\u5f53\u6210\u529f\u89e3\u6790\u4e00\u4e2a\u672a\u77e5\u7684\u534f\u8bae\u540d\u65f6\uff0c\u4f1a\u4e3a\u5176\u5206\u914d\u4e00\u4e2a ZCallDispatcher\u3002\r\n\u6bcf\u4e2a ZCallDispatcher \u6709\u4e00\u4e2a\u552f\u4e00\u7684 Handle\uff0c\u89e3\u6790 Handle \u6bd4\u89e3\u6790\u534f\u8bae\u540d\u5feb\u5f97\u591a\uff0c\u5ba2\u6237\u7aef\u540e\u7eed\u53ef\u4ee5\u901a\u8fc7 Handle \u800c\u4e0d\u662f\u534f\u8bae\u540d\u6765\u8fdb\u884c\u901a\u4fe1\uff0c\u63d0\u9ad8\u4e92\u64cd\u4f5c\u7684\u6027\u80fd\u3002\r\nZCallDispatcher \u4f1a\u6839\u636e\u4e0e\u4e4b\u7ed1\u5b9a\u7684\u8def\u5f84\u5b9a\u4f4d\u5230\u8981\u8c03\u7528\u7684\u51fd\u6570\uff0c\u5e76\u5c06\u53c2\u6570\u89e3\u6790\u6210\u51fd\u6570\u53ef\u4ee5\u7406\u89e3\u7684\u5f62\u5f0f\u8fdb\u884c\u8c03\u7528\u3002"}),"\n",(0,r.jsx)(n.h4,{id:"\u534f\u8bae\u7c7b\u578b\u8868",children:"\u534f\u8bae\u7c7b\u578b\u8868"}),"\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"\u534f\u8bae\u7c7b\u578b"}),(0,r.jsx)(n.th,{children:"\u5730\u5740\u683c\u5f0f"}),(0,r.jsx)(n.th,{children:"\u903b\u8f91"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"ex"}),(0,r.jsx)(n.td,{children:"\u4e00\u4e2a\u81ea\u5b9a\u4e49\u7684\u552f\u4e00\u540d\u5b57"}),(0,r.jsx)(n.td,{children:"\u5b9a\u4f4d\u5e76\u8c03\u7528\u4e00\u4e2a\u663e\u5f0f\u6ce8\u518c\u7684\u5168\u5c40\u51fd\u6570"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"uf"}),(0,r.jsx)(n.td,{children:"\u4e00\u4e2a UFunction \u5bf9\u8c61\u7684\u8def\u5f84\u540d"}),(0,r.jsx)(n.td,{children:"\u5b9a\u4f4d\u5e76\u8c03\u7528\u4e00\u4e2a UFunction\uff0c\u6709\u591a\u6001"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"uf!"}),(0,r.jsx)(n.td,{children:"\u4e00\u4e2a UFunction \u5bf9\u8c61\u7684\u8def\u5f84\u540d"}),(0,r.jsx)(n.td,{children:"\u5b9a\u4f4d\u5e76\u8c03\u7528\u4e00\u4e2a UFunction\uff0c\u65e0\u591a\u6001"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"up"}),(0,r.jsx)(n.td,{children:"\u4e00\u4e2a FProperty \u5bf9\u8c61\u7684\u8def\u5f84\u540d"}),(0,r.jsx)(n.td,{children:"\u5b9a\u4f4d\u5e76\u8bfb/\u5199\u4e00\u4e2a UProperty\uff0c\u5177\u4f53\u662f\u8bfb\u8fd8\u662f\u5199\u53d6\u51b3\u4e8e\u7b2c\u4e8c\u4e2a\u53c2\u6570\u7684\u503c"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"m"}),(0,r.jsx)(n.td,{children:"\u4e00\u4e2a\u6258\u7ba1\u65b9\u6cd5\u6240\u5728\u7684\u7a0b\u5e8f\u96c6\u540d:\u7c7b\u8def\u5f84\u540d:\u65b9\u6cd5\u540d"}),(0,r.jsx)(n.td,{children:"\u5b9a\u4f4d\u5e76\u8c03\u7528\u4e00\u4e2a\u6258\u7ba1\u65b9\u6cd5"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"p"}),(0,r.jsx)(n.td,{children:"\u4e00\u4e2a\u6258\u7ba1\u5c5e\u6027\u6240\u5728\u7684\u7a0b\u5e8f\u96c6\u540d:\u7c7b\u8def\u5f84\u540d:\u5c5e\u6027\u540d"}),(0,r.jsx)(n.td,{children:"\u5b9a\u4f4d\u5e76\u8bfb/\u5199\u4e00\u4e2a\u6258\u7ba1\u5c5e\u6027\uff0c\u5177\u4f53\u662f\u8bfb\u8fd8\u662f\u5199\u53d6\u51b3\u4e8e\u7b2c\u4e8c\u4e2a\u53c2\u6570\u7684\u503c"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"d"}),(0,r.jsx)(n.td,{}),(0,r.jsx)(n.td,{children:"\u8c03\u7528\u7b2c\u4e00\u4e2a\u53c2\u6570\u5bf9\u5e94\u7684\u6258\u7ba1\u59d4\u6258\u5bf9\u8c61"})]})]})]}),"\n",(0,r.jsx)(n.h3,{id:"zcallbuffer",children:"ZCallBuffer"}),"\n",(0,r.jsx)(n.p,{children:"ZCallBuffer \u662f\u4e00\u5757\u7531 0~N \u4e2a\u56fa\u5b9a\u5927\u5c0f\u7684 Slot \u6784\u6210\u7684\u7f13\u51b2\u533a\u3002\r\n\u6bcf\u4e2a Slot \u8868\u793a\u4e00\u4e2a\u53c2\u6570\uff0c\u6709\u7c7b\u578b\uff081\u5b57\u8282\uff09\u548c\u503c\uff088\u5b57\u8282\uff09\u4e24\u4e2a\u5b57\u6bb5\u3002\r\n\u7c7b\u578b\u5b57\u6bb5\u4ec5\u7528\u4e8e\u6821\u9a8c\uff0c\u53ef\u4ee5\u5728\u53d1\u5e03\u7248\u672c\u4e2d\u53bb\u6389\uff0c\u57288\u5b57\u8282\u5bf9\u9f50\u7684\u60c5\u51b5\u4e0b\u53ef\u4ee5\u8ba9 Buffer \u7684\u5185\u5b58\u5360\u7528\u51cf\u534a\u3002"}),"\n",(0,r.jsx)(n.p,{children:"\u7531\u4e8e Buffer \u672c\u8eab\u4e0d\u5e26\u4efb\u4f55\u5143\u4fe1\u606f\uff0cZCall \u7684\u53d1\u8d77\u65b9\u5fc5\u987b\u4fdd\u8bc1 ZCallBuffer \u7684\u7ed3\u6784\u4e0e\u534f\u8bae\u540d\u7684\u8981\u6c42\u76f8\u5339\u914d\uff0c\u5426\u5219\u4f1a\u4ea7\u751f\u672a\u5b9a\u4e49\u884c\u4e3a\u3002\r\n\u5728\u5f00\u53d1\u73af\u5883\u4e0b\uff0c\u89e3\u6790 ZCall \u65f6\u4f1a\u6821\u9a8c\u7c7b\u578b\u5b57\u6bb5\uff0c\u4f46\u8fd9\u5e76\u4e0d\u8db3\u4ee5\u53d1\u73b0\u6240\u6709\u7c7b\u578b\u9519\u8bef\u3002"}),"\n",(0,r.jsxs)(n.p,{children:["Slot \u652f\u630113\u79cd\u7c7b\u578b\uff0c\u8fd9\u4e9b\u7c7b\u578b\u90fd\u662f ",(0,r.jsx)(n.code,{children:"blittable"})," \u4e14\u4e0d\u8d85\u8fc78\u5b57\u8282\u7684\uff1a"]}),"\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"\u7c7b\u578b"}),(0,r.jsx)(n.th,{children:"\u6258\u7ba1\u7c7b\u578b"}),(0,r.jsx)(n.th,{children:"\u975e\u6258\u7ba1\u7c7b\u578b"}),(0,r.jsx)(n.th,{children:"\u5927\u5c0f"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"UInt8"}),(0,r.jsx)(n.td,{children:"System.Byte (byte)"}),(0,r.jsx)(n.td,{children:"uint8"}),(0,r.jsx)(n.td,{children:"1"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"UInt16"}),(0,r.jsx)(n.td,{children:"System.UInt16 (ushort)"}),(0,r.jsx)(n.td,{children:"uint16"}),(0,r.jsx)(n.td,{children:"2"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"UInt32"}),(0,r.jsx)(n.td,{children:"System.UInt32 (uint)"}),(0,r.jsx)(n.td,{children:"uint32"}),(0,r.jsx)(n.td,{children:"4"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"UInt64"}),(0,r.jsx)(n.td,{children:"System.UInt64 (ulong)"}),(0,r.jsx)(n.td,{children:"uint64"}),(0,r.jsx)(n.td,{children:"8"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Int8"}),(0,r.jsx)(n.td,{children:"System.SByte (sbyte)"}),(0,r.jsx)(n.td,{children:"int8"}),(0,r.jsx)(n.td,{children:"1"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Int16"}),(0,r.jsx)(n.td,{children:"System.Int16 (short)"}),(0,r.jsx)(n.td,{children:"int16"}),(0,r.jsx)(n.td,{children:"2"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Int32"}),(0,r.jsx)(n.td,{children:"System.Int32 (int)"}),(0,r.jsx)(n.td,{children:"int32"}),(0,r.jsx)(n.td,{children:"4"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Int64"}),(0,r.jsx)(n.td,{children:"System.Int64 (long)"}),(0,r.jsx)(n.td,{children:"int64"}),(0,r.jsx)(n.td,{children:"8"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Float"}),(0,r.jsx)(n.td,{children:"System.Single (float)"}),(0,r.jsx)(n.td,{children:"float"}),(0,r.jsx)(n.td,{children:"4"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Double"}),(0,r.jsx)(n.td,{children:"System.Double (double)"}),(0,r.jsx)(n.td,{children:"double"}),(0,r.jsx)(n.td,{children:"8"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Pointer"}),(0,r.jsx)(n.td,{children:"System.IntPtr (nint)"}),(0,r.jsx)(n.td,{children:"void*"}),(0,r.jsx)(n.td,{children:"8"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"GCHandle"}),(0,r.jsx)(n.td,{children:"System.Runtime.InteropServices.GCHandle"}),(0,r.jsx)(n.td,{children:"ZSharp::FZGCHandle"}),(0,r.jsx)(n.td,{children:"8"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Conjugate"}),(0,r.jsx)(n.td,{children:"ZeroGames.ZSharp.Core.ConjugateHandle"}),(0,r.jsx)(n.td,{children:"ZSharp::FZConjugateHandle"}),(0,r.jsx)(n.td,{children:"8"})]})]})]}),"\n",(0,r.jsx)(n.p,{children:"\u5176\u4e2d\uff0cPointer \u7c7b\u578b\u7528\u4e8e\u4f20\u9012\u62e5\u6709\u590d\u6742\u7ed3\u6784\u7684\u53c2\u6570\uff1b\r\nGCHandle \u7c7b\u578b\u7528\u4e8e\u4f20\u9012\u4e00\u4e2a\u6258\u7ba1\u5bf9\u8c61\u7684\u5f15\u7528\uff1b\r\nConjugate \u7c7b\u578b\u7528\u4e8e\u4f20\u9012\u4e00\u4e2a\u5171\u8f6d\u5bf9\u8c61\u7684\u5f15\u7528\u3002"}),"\n",(0,r.jsx)(n.admonition,{type:"info",children:(0,r.jsxs)(n.p,{children:["\u5e03\u5c14\u7c7b\u578b\u4e0d\u662f ",(0,r.jsx)(n.strong,{children:"blittable"})," \u7684\uff0c\u5728\u4f7f\u7528 ZCall \u65f6\uff0c\u4e00\u822c\u7528 UInt8 \u5145\u5f53\u5e03\u5c14\u7c7b\u578b\u3002"]})}),"\n",(0,r.jsx)(n.h4,{id:"\u5728\u6258\u7ba1\u6808\u4e0a\u5206\u914d-buffer",children:"\u5728\u6258\u7ba1\u6808\u4e0a\u5206\u914d Buffer"}),"\n",(0,r.jsx)(n.p,{children:"\u7edd\u5927\u591a\u6570\u652f\u6301\u53cd\u5c04\u7684\u5f15\u64ce\u63a5\u53e3\u90fd\u4f1a\u4ee5 ZCall \u7684\u5f62\u5f0f\u5bfc\u51fa\uff0c\u6bcf\u4e2a\u63a5\u53e3\u90fd\u5bf9\u5e94\u4e00\u4e2a\u6258\u7ba1\u65b9\u6cd5\u6216\u5c5e\u6027\u3002\r\n\u56e0\u6b64\uff0c\u6bcf\u4e2a\u65b9\u6cd5\u6216\u5c5e\u6027\u5728\u6784\u9020 Buffer \u65f6\uff0c\u90fd\u53ef\u4ee5\u5728\u7f16\u8bd1\u671f\u76f4\u63a5\u786e\u5b9a\u5927\u5c0f\uff0c\u8fdb\u800c\u53ef\u4ee5\u76f4\u63a5\u5728\u6808\u4e0a\u5206\u914d\u5185\u5b58\uff0c\u663e\u8457\u63d0\u5347\u4e92\u64cd\u4f5c\u7684\u6027\u80fd\u3002"})]})}function x(e={}){const{wrapper:n}={...(0,t.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(o,{...e})}):o(e)}},8453:(e,n,l)=>{l.d(n,{R:()=>s,x:()=>c});var r=l(6540);const t={},d=r.createContext(t);function s(e){const n=r.useContext(d);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:s(e.components),r.createElement(d.Provider,{value:n},e.children)}}}]);