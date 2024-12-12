"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[867],{7713:(e,t,a)=>{a.d(t,{A:()=>l});a(6540);var s=a(1312),r=a(9022),n=a(4848);function l(e){const{metadata:t}=e,{previousPage:a,nextPage:l}=t;return(0,n.jsxs)("nav",{className:"pagination-nav","aria-label":(0,s.T)({id:"theme.blog.paginator.navAriaLabel",message:"Blog list page navigation",description:"The ARIA label for the blog pagination"}),children:[a&&(0,n.jsx)(r.A,{permalink:a,title:(0,n.jsx)(s.A,{id:"theme.blog.paginator.newerEntries",description:"The label used to navigate to the newer blog posts page (previous page)",children:"Newer entries"})}),l&&(0,n.jsx)(r.A,{permalink:l,title:(0,n.jsx)(s.A,{id:"theme.blog.paginator.olderEntries",description:"The label used to navigate to the older blog posts page (next page)",children:"Older entries"}),isNext:!0})]})}},2907:(e,t,a)=>{a.d(t,{A:()=>U});a(6540);var s=a(4164),r=a(4096),n=a(4848);function l(e){let{children:t,className:a}=e;return(0,n.jsx)("article",{className:a,children:t})}var i=a(8774);const o={title:"title_f1Hy"};function c(e){let{className:t}=e;const{metadata:a,isBlogPostPage:l}=(0,r.e7)(),{permalink:c,title:d}=a,g=l?"h1":"h2";return(0,n.jsx)(g,{className:(0,s.A)(o.title,t),children:l?d:(0,n.jsx)(i.A,{to:c,children:d})})}var d=a(1312),g=a(5846),h=a(6266);const u={container:"container_mt6G"};function m(e){let{readingTime:t}=e;const a=function(){const{selectMessage:e}=(0,g.W)();return t=>{const a=Math.ceil(t);return e(a,(0,d.T)({id:"theme.blog.post.readingTime.plurals",description:'Pluralized label for "{readingTime} min read". Use as much plural forms (separated by "|") as your language support (see https://www.unicode.org/cldr/cldr-aux/charts/34/supplemental/language_plural_rules.html)',message:"One min read|{readingTime} min read"},{readingTime:a}))}}();return(0,n.jsx)(n.Fragment,{children:a(t)})}function x(e){let{date:t,formattedDate:a}=e;return(0,n.jsx)("time",{dateTime:t,children:a})}function p(){return(0,n.jsx)(n.Fragment,{children:" \xb7 "})}function j(e){let{className:t}=e;const{metadata:a}=(0,r.e7)(),{date:l,readingTime:i}=a,o=(0,h.i)({day:"numeric",month:"long",year:"numeric",timeZone:"UTC"});return(0,n.jsxs)("div",{className:(0,s.A)(u.container,"margin-vert--md",t),children:[(0,n.jsx)(x,{date:l,formattedDate:(c=l,o.format(new Date(c)))}),void 0!==i&&(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(p,{}),(0,n.jsx)(m,{readingTime:i})]})]});var c}var A=a(6913);const b={authorCol:"authorCol_Hf19",imageOnlyAuthorRow:"imageOnlyAuthorRow_pa_O",imageOnlyAuthorCol:"imageOnlyAuthorCol_G86a"};function f(e){let{className:t}=e;const{metadata:{authors:a},assets:l}=(0,r.e7)();if(0===a.length)return null;const i=a.every((e=>{let{name:t}=e;return!t})),o=1===a.length;return(0,n.jsx)("div",{className:(0,s.A)("margin-top--md margin-bottom--sm",i?b.imageOnlyAuthorRow:"row",t),children:a.map(((e,t)=>(0,n.jsx)("div",{className:(0,s.A)(!i&&(o?"col col--12":"col col--6"),i?b.imageOnlyAuthorCol:b.authorCol),children:(0,n.jsx)(A.A,{author:{...e,imageURL:l.authorsImageUrls[t]??e.imageURL}})},t)))})}function v(){return(0,n.jsxs)("header",{children:[(0,n.jsx)(c,{}),(0,n.jsx)(j,{}),(0,n.jsx)(f,{})]})}var T=a(440),N=a(7910);function w(e){let{children:t,className:a}=e;const{isBlogPostPage:l}=(0,r.e7)();return(0,n.jsx)("div",{id:l?T.LU:void 0,className:(0,s.A)("markdown",a),children:(0,n.jsx)(N.A,{children:t})})}var y=a(7559),k=a(4336),_=a(2053);function P(){return(0,n.jsx)("b",{children:(0,n.jsx)(d.A,{id:"theme.blog.post.readMore",description:"The label used in blog post item excerpts to link to full blog posts",children:"Read more"})})}function C(e){const{blogPostTitle:t,...a}=e;return(0,n.jsx)(i.A,{"aria-label":(0,d.T)({message:"Read more about {title}",id:"theme.blog.post.readMoreLabel",description:"The ARIA label for the link to full blog posts from excerpts"},{title:t}),...a,children:(0,n.jsx)(P,{})})}function F(){const{metadata:e,isBlogPostPage:t}=(0,r.e7)(),{tags:a,title:l,editUrl:i,hasTruncateMarker:o,lastUpdatedBy:c,lastUpdatedAt:d}=e,g=!t&&o,h=a.length>0;if(!(h||g||i))return null;if(t){const e=!!(i||d||c);return(0,n.jsxs)("footer",{className:"docusaurus-mt-lg",children:[h&&(0,n.jsx)("div",{className:(0,s.A)("row","margin-top--sm",y.G.blog.blogFooterEditMetaRow),children:(0,n.jsx)("div",{className:"col",children:(0,n.jsx)(_.A,{tags:a})})}),e&&(0,n.jsx)(k.A,{className:(0,s.A)("margin-top--sm",y.G.blog.blogFooterEditMetaRow),editUrl:i,lastUpdatedAt:d,lastUpdatedBy:c})]})}return(0,n.jsxs)("footer",{className:"row docusaurus-mt-lg",children:[h&&(0,n.jsx)("div",{className:(0,s.A)("col",{"col--9":g}),children:(0,n.jsx)(_.A,{tags:a})}),g&&(0,n.jsx)("div",{className:(0,s.A)("col text--right",{"col--3":h}),children:(0,n.jsx)(C,{blogPostTitle:l,to:e.permalink})})]})}function U(e){let{children:t,className:a}=e;const i=function(){const{isBlogPostPage:e}=(0,r.e7)();return e?void 0:"margin-bottom--xl"}();return(0,n.jsxs)(l,{className:(0,s.A)(i,a),children:[(0,n.jsx)(v,{}),(0,n.jsx)(w,{children:t}),(0,n.jsx)(F,{})]})}},3892:(e,t,a)=>{a.d(t,{A:()=>l});a(6540);var s=a(4096),r=a(2907),n=a(4848);function l(e){let{items:t,component:a=r.A}=e;return(0,n.jsx)(n.Fragment,{children:t.map((e=>{let{content:t}=e;return(0,n.jsx)(s.in,{content:t,children:(0,n.jsx)(a,{children:(0,n.jsx)(t,{})})},t.metadata.permalink)}))})}},778:(e,t,a)=>{a.r(t),a.d(t,{default:()=>A});a(6540);var s=a(4164),r=a(1213),n=a(7559),l=a(6461),i=a(8774),o=a(4096),c=a(8027),d=a(7713),g=a(1463),h=a(3892),u=a(6913),m=a(4848);function x(e){let{author:t}=e;const a=(0,l.wI)(t);return(0,m.jsxs)(m.Fragment,{children:[(0,m.jsx)(r.be,{title:a}),(0,m.jsx)(g.A,{tag:"blog_authors_posts"})]})}function p(){const{authorsListPath:e}=(0,o.x)();return(0,m.jsx)(i.A,{href:e,children:(0,m.jsx)(l.np,{})})}function j(e){let{author:t,items:a,sidebar:s,listMetadata:r}=e;return(0,m.jsxs)(c.A,{sidebar:s,children:[(0,m.jsxs)("header",{className:"margin-bottom--xl",children:[(0,m.jsx)(u.A,{as:"h1",author:t}),t.description&&(0,m.jsx)("p",{children:t.description}),(0,m.jsx)(p,{})]}),(0,m.jsx)("hr",{}),(0,m.jsx)(h.A,{items:a}),(0,m.jsx)(d.A,{metadata:r})]})}function A(e){return(0,m.jsxs)(r.e3,{className:(0,s.A)(n.G.wrapper.blogPages,n.G.page.blogAuthorsPostsPage),children:[(0,m.jsx)(x,{...e}),(0,m.jsx)(j,{...e})]})}},9022:(e,t,a)=>{a.d(t,{A:()=>l});a(6540);var s=a(4164),r=a(8774),n=a(4848);function l(e){const{permalink:t,title:a,subLabel:l,isNext:i}=e;return(0,n.jsxs)(r.A,{className:(0,s.A)("pagination-nav__link",i?"pagination-nav__link--next":"pagination-nav__link--prev"),to:t,children:[l&&(0,n.jsx)("div",{className:"pagination-nav__sublabel",children:l}),(0,n.jsx)("div",{className:"pagination-nav__label",children:a})]})}},6133:(e,t,a)=>{a.d(t,{A:()=>i});a(6540);var s=a(4164),r=a(8774);const n={tag:"tag_zVej",tagRegular:"tagRegular_sFm0",tagWithCount:"tagWithCount_h2kH"};var l=a(4848);function i(e){let{permalink:t,label:a,count:i,description:o}=e;return(0,l.jsxs)(r.A,{href:t,title:o,className:(0,s.A)(n.tag,i?n.tagWithCount:n.tagRegular),children:[a,i&&(0,l.jsx)("span",{children:i})]})}},2053:(e,t,a)=>{a.d(t,{A:()=>o});a(6540);var s=a(4164),r=a(1312),n=a(6133);const l={tags:"tags_jXut",tag:"tag_QGVx"};var i=a(4848);function o(e){let{tags:t}=e;return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)("b",{children:(0,i.jsx)(r.A,{id:"theme.tags.tagsListLabel",description:"The label alongside a tag list",children:"Tags:"})}),(0,i.jsx)("ul",{className:(0,s.A)(l.tags,"padding--none","margin-left--sm"),children:t.map((e=>(0,i.jsx)("li",{className:l.tag,children:(0,i.jsx)(n.A,{...e})},e.permalink)))})]})}},6461:(e,t,a)=>{a.d(t,{ZD:()=>i,np:()=>d,uz:()=>c,wI:()=>o});a(6540);var s=a(1312),r=a(5846),n=a(4848);function l(){const{selectMessage:e}=(0,r.W)();return t=>e(t,(0,s.T)({id:"theme.blog.post.plurals",description:'Pluralized label for "{count} posts". Use as much plural forms (separated by "|") as your language support (see https://www.unicode.org/cldr/cldr-aux/charts/34/supplemental/language_plural_rules.html)',message:"One post|{count} posts"},{count:t}))}function i(e){const t=l();return(0,s.T)({id:"theme.blog.tagTitle",description:"The title of the page for a blog tag",message:'{nPosts} tagged with "{tagName}"'},{nPosts:t(e.count),tagName:e.label})}function o(e){const t=l();return(0,s.T)({id:"theme.blog.author.pageTitle",description:"The title of the page for a blog author",message:"{authorName} - {nPosts}"},{nPosts:t(e.count),authorName:e.name||e.key})}const c=()=>(0,s.T)({id:"theme.blog.authorsList.pageTitle",message:"Authors",description:"The title of the authors page"});function d(){return(0,n.jsx)(s.A,{id:"theme.blog.authorsList.viewAll",description:"The label of the link targeting the blog authors page",children:"View all authors"})}},641:(e,t,a)=>{a.d(t,{A:()=>x});a(6540);var s=a(3384),r=a(2634),n=a(9522),l=a(9754),i=a(4848);var o=a(6387);function c(e){return(0,i.jsx)(r.Ay,{theme:{algorithm:n.A.darkAlgorithm},children:(0,i.jsx)(o.A,{description:e.text})})}var d=a(33);var g=a(4016),h=a(2992);function u(e){return(0,i.jsx)(r.Ay,{theme:{algorithm:n.A.darkAlgorithm},children:(0,i.jsx)(g.A,{gap:"4 0",wrap:!0,children:e.tags.map((e=>(0,i.jsx)(h.A,{color:e.color,children:e.text})))})})}function m(e){const t=[{text:"\u66f4\u65b0\u65e5\u671f\uff1a"+e.lastUpdate,color:"magenta"}],a=e.requirements?.map((e=>({text:"\u524d\u7f6e\u77e5\u8bc6\uff1a"+e,color:"cyan"}))),s=e.tags?.map((e=>({text:e.text,color:e.color})));return(0,i.jsxs)(i.Fragment,{children:[e.advanced?(0,i.jsx)(u,{tags:[{text:"\u8fdb\u9636\u5185\u5bb9",color:"red"}]}):(0,i.jsx)(i.Fragment,{}),(0,i.jsx)("div",{style:{height:e.advanced?5:0}}),(0,i.jsx)(u,{tags:t}),(0,i.jsx)("div",{style:{height:5}}),a?.length>0?(0,i.jsx)(u,{tags:a}):(0,i.jsx)(i.Fragment,{}),(0,i.jsx)("div",{style:{height:a?.length>0?5:0}}),s?.length>0?(0,i.jsx)(u,{tags:s}):(0,i.jsx)(i.Fragment,{}),(0,i.jsx)("br",{})]})}const x={...s.A,ZDivider:function(e){return(0,i.jsx)(r.Ay,{theme:{algorithm:n.A.darkAlgorithm},children:(0,i.jsx)(l.A,{children:e.text})})},ZEmpty:c,ZTextWithTips:function(e){const{title:t=e.text,text:a,tips:s,link:l,color:o="#00CCEE",width:c=300}=e,g=(0,i.jsx)("div",{style:{width:c},children:(0,i.jsx)("p",{children:s})});return(0,i.jsx)(r.Ay,{theme:{algorithm:n.A.darkAlgorithm},children:(0,i.jsx)("a",{style:{WebkitTextFillColor:o,cursor:"help"},href:l,children:(0,i.jsx)(d.A,{title:t||a,content:g,children:a})})})},ZDocHeader:m,ZTag:function(e){return(0,i.jsx)(r.Ay,{theme:{algorithm:n.A.darkAlgorithm},children:(0,i.jsx)(h.A,{color:e.color,children:e.text})})},ZTags:u,ZPlaceholder:function(){return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(m,{lastUpdate:"\u65e0"}),(0,i.jsx)(c,{text:"\u6682\u65e0\u5185\u5bb9"})]})}}}}]);