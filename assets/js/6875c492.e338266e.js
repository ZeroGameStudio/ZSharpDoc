"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[4813],{7713:(e,t,n)=>{n.d(t,{A:()=>i});n(6540);var a=n(1312),s=n(9022),r=n(4848);function i(e){const{metadata:t}=e,{previousPage:n,nextPage:i}=t;return(0,r.jsxs)("nav",{className:"pagination-nav","aria-label":(0,a.T)({id:"theme.blog.paginator.navAriaLabel",message:"Blog list page navigation",description:"The ARIA label for the blog pagination"}),children:[n&&(0,r.jsx)(s.A,{permalink:n,title:(0,r.jsx)(a.A,{id:"theme.blog.paginator.newerEntries",description:"The label used to navigate to the newer blog posts page (previous page)",children:"Newer entries"})}),i&&(0,r.jsx)(s.A,{permalink:i,title:(0,r.jsx)(a.A,{id:"theme.blog.paginator.olderEntries",description:"The label used to navigate to the older blog posts page (next page)",children:"Older entries"}),isNext:!0})]})}},2907:(e,t,n)=>{n.d(t,{A:()=>R});n(6540);var a=n(4164),s=n(4096),r=n(4848);function i(e){let{children:t,className:n}=e;return(0,r.jsx)("article",{className:n,children:t})}var l=n(8774);const o={title:"title_f1Hy"};function c(e){let{className:t}=e;const{metadata:n,isBlogPostPage:i}=(0,s.e7)(),{permalink:c,title:d}=n,g=i?"h1":"h2";return(0,r.jsx)(g,{className:(0,a.A)(o.title,t),children:i?d:(0,r.jsx)(l.A,{to:c,children:d})})}var d=n(1312),g=n(5846),h=n(6266);const u={container:"container_mt6G"};function m(e){let{readingTime:t}=e;const n=function(){const{selectMessage:e}=(0,g.W)();return t=>{const n=Math.ceil(t);return e(n,(0,d.T)({id:"theme.blog.post.readingTime.plurals",description:'Pluralized label for "{readingTime} min read". Use as much plural forms (separated by "|") as your language support (see https://www.unicode.org/cldr/cldr-aux/charts/34/supplemental/language_plural_rules.html)',message:"One min read|{readingTime} min read"},{readingTime:n}))}}();return(0,r.jsx)(r.Fragment,{children:n(t)})}function x(e){let{date:t,formattedDate:n}=e;return(0,r.jsx)("time",{dateTime:t,children:n})}function p(){return(0,r.jsx)(r.Fragment,{children:" \xb7 "})}function j(e){let{className:t}=e;const{metadata:n}=(0,s.e7)(),{date:i,readingTime:l}=n,o=(0,h.i)({day:"numeric",month:"long",year:"numeric",timeZone:"UTC"});return(0,r.jsxs)("div",{className:(0,a.A)(u.container,"margin-vert--md",t),children:[(0,r.jsx)(x,{date:i,formattedDate:(c=i,o.format(new Date(c)))}),void 0!==l&&(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(p,{}),(0,r.jsx)(m,{readingTime:l})]})]});var c}var A=n(6913);const f={authorCol:"authorCol_Hf19",imageOnlyAuthorRow:"imageOnlyAuthorRow_pa_O",imageOnlyAuthorCol:"imageOnlyAuthorCol_G86a"};function b(e){let{className:t}=e;const{metadata:{authors:n},assets:i}=(0,s.e7)();if(0===n.length)return null;const l=n.every((e=>{let{name:t}=e;return!t})),o=1===n.length;return(0,r.jsx)("div",{className:(0,a.A)("margin-top--md margin-bottom--sm",l?f.imageOnlyAuthorRow:"row",t),children:n.map(((e,t)=>(0,r.jsx)("div",{className:(0,a.A)(!l&&(o?"col col--12":"col col--6"),l?f.imageOnlyAuthorCol:f.authorCol),children:(0,r.jsx)(A.A,{author:{...e,imageURL:i.authorsImageUrls[t]??e.imageURL}})},t)))})}function v(){return(0,r.jsxs)("header",{children:[(0,r.jsx)(c,{}),(0,r.jsx)(j,{}),(0,r.jsx)(b,{})]})}var T=n(440),y=n(7910);function N(e){let{children:t,className:n}=e;const{isBlogPostPage:i}=(0,s.e7)();return(0,r.jsx)("div",{id:i?T.LU:void 0,className:(0,a.A)("markdown",n),children:(0,r.jsx)(y.A,{children:t})})}var w=n(7559),k=n(4336),_=n(2053);function P(){return(0,r.jsx)("b",{children:(0,r.jsx)(d.A,{id:"theme.blog.post.readMore",description:"The label used in blog post item excerpts to link to full blog posts",children:"Read more"})})}function U(e){const{blogPostTitle:t,...n}=e;return(0,r.jsx)(l.A,{"aria-label":(0,d.T)({message:"Read more about {title}",id:"theme.blog.post.readMoreLabel",description:"The ARIA label for the link to full blog posts from excerpts"},{title:t}),...n,children:(0,r.jsx)(P,{})})}function F(){const{metadata:e,isBlogPostPage:t}=(0,s.e7)(),{tags:n,title:i,editUrl:l,hasTruncateMarker:o,lastUpdatedBy:c,lastUpdatedAt:d}=e,g=!t&&o,h=n.length>0;if(!(h||g||l))return null;if(t){const e=!!(l||d||c);return(0,r.jsxs)("footer",{className:"docusaurus-mt-lg",children:[h&&(0,r.jsx)("div",{className:(0,a.A)("row","margin-top--sm",w.G.blog.blogFooterEditMetaRow),children:(0,r.jsx)("div",{className:"col",children:(0,r.jsx)(_.A,{tags:n})})}),e&&(0,r.jsx)(k.A,{className:(0,a.A)("margin-top--sm",w.G.blog.blogFooterEditMetaRow),editUrl:l,lastUpdatedAt:d,lastUpdatedBy:c})]})}return(0,r.jsxs)("footer",{className:"row docusaurus-mt-lg",children:[h&&(0,r.jsx)("div",{className:(0,a.A)("col",{"col--9":g}),children:(0,r.jsx)(_.A,{tags:n})}),g&&(0,r.jsx)("div",{className:(0,a.A)("col text--right",{"col--3":h}),children:(0,r.jsx)(U,{blogPostTitle:i,to:e.permalink})})]})}function R(e){let{children:t,className:n}=e;const l=function(){const{isBlogPostPage:e}=(0,s.e7)();return e?void 0:"margin-bottom--xl"}();return(0,r.jsxs)(i,{className:(0,a.A)(l,n),children:[(0,r.jsx)(v,{}),(0,r.jsx)(N,{children:t}),(0,r.jsx)(F,{})]})}},3892:(e,t,n)=>{n.d(t,{A:()=>i});n(6540);var a=n(4096),s=n(2907),r=n(4848);function i(e){let{items:t,component:n=s.A}=e;return(0,r.jsx)(r.Fragment,{children:t.map((e=>{let{content:t}=e;return(0,r.jsx)(a.in,{content:t,children:(0,r.jsx)(n,{children:(0,r.jsx)(t,{})})},t.metadata.permalink)}))})}},3069:(e,t,n)=>{n.r(t),n.d(t,{default:()=>A});n(6540);var a=n(4164),s=n(1312),r=n(1213),i=n(7559),l=n(6461),o=n(8774),c=n(8027),d=n(7713),g=n(1463),h=n(3892),u=n(2234),m=n(1107),x=n(4848);function p(e){let{tag:t}=e;const n=(0,l.ZD)(t);return(0,x.jsxs)(x.Fragment,{children:[(0,x.jsx)(r.be,{title:n,description:t.description}),(0,x.jsx)(g.A,{tag:"blog_tags_posts"})]})}function j(e){let{tag:t,items:n,sidebar:a,listMetadata:r}=e;const i=(0,l.ZD)(t);return(0,x.jsxs)(c.A,{sidebar:a,children:[t.unlisted&&(0,x.jsx)(u.A,{}),(0,x.jsxs)("header",{className:"margin-bottom--xl",children:[(0,x.jsx)(m.A,{as:"h1",children:i}),t.description&&(0,x.jsx)("p",{children:t.description}),(0,x.jsx)(o.A,{href:t.allTagsPath,children:(0,x.jsx)(s.A,{id:"theme.tags.tagsPageLink",description:"The label of the link targeting the tag list page",children:"View All Tags"})})]}),(0,x.jsx)(h.A,{items:n}),(0,x.jsx)(d.A,{metadata:r})]})}function A(e){return(0,x.jsxs)(r.e3,{className:(0,a.A)(i.G.wrapper.blogPages,i.G.page.blogTagPostListPage),children:[(0,x.jsx)(p,{...e}),(0,x.jsx)(j,{...e})]})}},2234:(e,t,n)=>{n.d(t,{A:()=>c});n(6540);var a=n(4164),s=n(4084),r=n(7559),i=n(7293),l=n(4848);function o(e){let{className:t}=e;return(0,l.jsx)(i.A,{type:"caution",title:(0,l.jsx)(s.Rc,{}),className:(0,a.A)(t,r.G.common.unlistedBanner),children:(0,l.jsx)(s.Uh,{})})}function c(e){return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(s.AE,{}),(0,l.jsx)(o,{...e})]})}},9022:(e,t,n)=>{n.d(t,{A:()=>i});n(6540);var a=n(4164),s=n(8774),r=n(4848);function i(e){const{permalink:t,title:n,subLabel:i,isNext:l}=e;return(0,r.jsxs)(s.A,{className:(0,a.A)("pagination-nav__link",l?"pagination-nav__link--next":"pagination-nav__link--prev"),to:t,children:[i&&(0,r.jsx)("div",{className:"pagination-nav__sublabel",children:i}),(0,r.jsx)("div",{className:"pagination-nav__label",children:n})]})}},6133:(e,t,n)=>{n.d(t,{A:()=>l});n(6540);var a=n(4164),s=n(8774);const r={tag:"tag_zVej",tagRegular:"tagRegular_sFm0",tagWithCount:"tagWithCount_h2kH"};var i=n(4848);function l(e){let{permalink:t,label:n,count:l,description:o}=e;return(0,i.jsxs)(s.A,{href:t,title:o,className:(0,a.A)(r.tag,l?r.tagWithCount:r.tagRegular),children:[n,l&&(0,i.jsx)("span",{children:l})]})}},2053:(e,t,n)=>{n.d(t,{A:()=>o});n(6540);var a=n(4164),s=n(1312),r=n(6133);const i={tags:"tags_jXut",tag:"tag_QGVx"};var l=n(4848);function o(e){let{tags:t}=e;return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)("b",{children:(0,l.jsx)(s.A,{id:"theme.tags.tagsListLabel",description:"The label alongside a tag list",children:"Tags:"})}),(0,l.jsx)("ul",{className:(0,a.A)(i.tags,"padding--none","margin-left--sm"),children:t.map((e=>(0,l.jsx)("li",{className:i.tag,children:(0,l.jsx)(r.A,{...e})},e.permalink)))})]})}},6461:(e,t,n)=>{n.d(t,{ZD:()=>l,np:()=>d,uz:()=>c,wI:()=>o});n(6540);var a=n(1312),s=n(5846),r=n(4848);function i(){const{selectMessage:e}=(0,s.W)();return t=>e(t,(0,a.T)({id:"theme.blog.post.plurals",description:'Pluralized label for "{count} posts". Use as much plural forms (separated by "|") as your language support (see https://www.unicode.org/cldr/cldr-aux/charts/34/supplemental/language_plural_rules.html)',message:"One post|{count} posts"},{count:t}))}function l(e){const t=i();return(0,a.T)({id:"theme.blog.tagTitle",description:"The title of the page for a blog tag",message:'{nPosts} tagged with "{tagName}"'},{nPosts:t(e.count),tagName:e.label})}function o(e){const t=i();return(0,a.T)({id:"theme.blog.author.pageTitle",description:"The title of the page for a blog author",message:"{authorName} - {nPosts}"},{nPosts:t(e.count),authorName:e.name||e.key})}const c=()=>(0,a.T)({id:"theme.blog.authorsList.pageTitle",message:"Authors",description:"The title of the authors page"});function d(){return(0,r.jsx)(a.A,{id:"theme.blog.authorsList.viewAll",description:"The label of the link targeting the blog authors page",children:"View all authors"})}},4084:(e,t,n)=>{n.d(t,{AE:()=>o,Rc:()=>i,TT:()=>d,Uh:()=>l,Yh:()=>c});n(6540);var a=n(1312),s=n(5260),r=n(4848);function i(){return(0,r.jsx)(a.A,{id:"theme.contentVisibility.unlistedBanner.title",description:"The unlisted content banner title",children:"Unlisted page"})}function l(){return(0,r.jsx)(a.A,{id:"theme.contentVisibility.unlistedBanner.message",description:"The unlisted content banner message",children:"This page is unlisted. Search engines will not index it, and only users having a direct link can access it."})}function o(){return(0,r.jsx)(s.A,{children:(0,r.jsx)("meta",{name:"robots",content:"noindex, nofollow"})})}function c(){return(0,r.jsx)(a.A,{id:"theme.contentVisibility.draftBanner.title",description:"The draft content banner title",children:"Draft page"})}function d(){return(0,r.jsx)(a.A,{id:"theme.contentVisibility.draftBanner.message",description:"The draft content banner message",children:"This page is a draft. It will only be visible in dev and be excluded from the production build."})}},641:(e,t,n)=>{n.d(t,{A:()=>x});n(6540);var a=n(3384),s=n(2634),r=n(9522),i=n(9754),l=n(4848);var o=n(6387);function c(e){return(0,l.jsx)(s.Ay,{theme:{algorithm:r.A.darkAlgorithm},children:(0,l.jsx)(o.A,{description:e.text})})}var d=n(33);var g=n(4016),h=n(2992);function u(e){return(0,l.jsx)(s.Ay,{theme:{algorithm:r.A.darkAlgorithm},children:(0,l.jsx)(g.A,{gap:"4 0",wrap:!0,children:e.tags.map((e=>(0,l.jsx)(h.A,{color:e.color,children:e.text})))})})}function m(e){const t=[{text:"\u66f4\u65b0\u65e5\u671f\uff1a"+e.lastUpdate,color:"magenta"}],n=e.requirements?.map((e=>({text:"\u524d\u7f6e\u77e5\u8bc6\uff1a"+e,color:"cyan"}))),a=e.tags?.map((e=>({text:e.text,color:e.color})));return(0,l.jsxs)(l.Fragment,{children:[e.advanced?(0,l.jsx)(u,{tags:[{text:"\u8fdb\u9636\u5185\u5bb9",color:"red"}]}):(0,l.jsx)(l.Fragment,{}),(0,l.jsx)("div",{style:{height:e.advanced?5:0}}),(0,l.jsx)(u,{tags:t}),(0,l.jsx)("div",{style:{height:5}}),n?.length>0?(0,l.jsx)(u,{tags:n}):(0,l.jsx)(l.Fragment,{}),(0,l.jsx)("div",{style:{height:n?.length>0?5:0}}),a?.length>0?(0,l.jsx)(u,{tags:a}):(0,l.jsx)(l.Fragment,{}),(0,l.jsx)("br",{})]})}const x={...a.A,ZDivider:function(e){return(0,l.jsx)(s.Ay,{theme:{algorithm:r.A.darkAlgorithm},children:(0,l.jsx)(i.A,{children:e.text})})},ZEmpty:c,ZTextWithTips:function(e){const{title:t=e.text,text:n,tips:a,link:i,color:o="#00CCEE",width:c=300}=e,g=(0,l.jsx)("div",{style:{width:c},children:(0,l.jsx)("p",{children:a})});return(0,l.jsx)(s.Ay,{theme:{algorithm:r.A.darkAlgorithm},children:(0,l.jsx)("a",{style:{WebkitTextFillColor:o,cursor:"help"},href:i,children:(0,l.jsx)(d.A,{title:t||n,content:g,children:n})})})},ZDocHeader:m,ZTag:function(e){return(0,l.jsx)(s.Ay,{theme:{algorithm:r.A.darkAlgorithm},children:(0,l.jsx)(h.A,{color:e.color,children:e.text})})},ZTags:u,ZPlaceholder:function(){return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(m,{lastUpdate:"\u65e0"}),(0,l.jsx)(c,{text:"\u6682\u65e0\u5185\u5bb9"})]})}}}}]);