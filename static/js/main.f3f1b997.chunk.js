(this.webpackJsonpresume=this.webpackJsonpresume||[]).push([[0],{24:function(e,t,s){},27:function(e,t,s){},47:function(e,t,s){"use strict";s.r(t);var c=s(2),a=s(16),n=s.n(a),i=(s(24),s(6)),r=s(7),l=s(9),j=s(8),o=s(13),d=s(17),h=s.n(d),b=(s(27),s(18)),O=s(5),m=s.n(O),u=s(1),p=function(e){Object(l.a)(s,e);var t=Object(j.a)(s);function s(){return Object(i.a)(this,s),t.apply(this,arguments)}return Object(r.a)(s,[{key:"render",value:function(){if(!this.props.data)return null;var e=this.props.data.project,t=this.props.data.github,s=this.props.data.name,c=this.props.data.description;return Object(u.jsxs)("header",{id:"home",children:[Object(u.jsx)(b.a,{type:"circle",bg:!0}),Object(u.jsxs)("nav",{id:"nav-wrap",children:[Object(u.jsx)("a",{className:"mobile-btn",href:"#nav-wrap",title:"Show navigation",children:"Show navigation"}),Object(u.jsx)("a",{className:"mobile-btn",href:"#home",title:"Hide navigation",children:"Hide navigation"}),Object(u.jsxs)("ul",{id:"nav",className:"nav",children:[Object(u.jsx)("li",{className:"current",children:Object(u.jsx)("a",{className:"smoothscroll",href:"#home",children:"Home"})}),Object(u.jsx)("li",{children:Object(u.jsx)("a",{className:"smoothscroll",href:"#about",children:"About"})}),Object(u.jsx)("li",{children:Object(u.jsx)("a",{className:"smoothscroll",href:"#resume",children:"Resume"})}),Object(u.jsx)("li",{children:Object(u.jsx)("a",{className:"smoothscroll",href:"#portfolio",children:"Works"})}),Object(u.jsx)("li",{children:Object(u.jsx)("a",{className:"smoothscroll",href:"#contact",children:"Contact"})})]})]}),Object(u.jsx)("div",{className:"row banner",children:Object(u.jsxs)("div",{className:"banner-text",children:[Object(u.jsx)(m.a,{bottom:!0,children:Object(u.jsx)("h1",{className:"responsive-headline",children:s})}),Object(u.jsx)(m.a,{bottom:!0,duration:1200,children:Object(u.jsxs)("h3",{children:[c,"."]})}),Object(u.jsx)("hr",{}),Object(u.jsx)(m.a,{bottom:!0,duration:2e3,children:Object(u.jsxs)("ul",{className:"social",children:[Object(u.jsxs)("a",{href:e,className:"button btn project-btn",children:[Object(u.jsx)("i",{className:"fa fa-book"}),"Project"]}),Object(u.jsxs)("a",{href:t,className:"button btn github-btn",children:[Object(u.jsx)("i",{className:"fa fa-github"}),"Github"]})]})})]})}),Object(u.jsx)("p",{className:"scrolldown",children:Object(u.jsx)("a",{className:"smoothscroll",href:"#about",children:Object(u.jsx)("i",{className:"icon-down-circle"})})})]})}}]),s}(c.Component),x=function(e){Object(l.a)(s,e);var t=Object(j.a)(s);function s(){return Object(i.a)(this,s),t.apply(this,arguments)}return Object(r.a)(s,[{key:"render",value:function(){if(!this.props.data)return null;var e=this.props.data.social.map((function(e){return Object(u.jsx)("li",{children:Object(u.jsx)("a",{href:e.url,children:Object(u.jsx)("i",{className:e.className})})},e.name)}));return Object(u.jsx)("footer",{children:Object(u.jsxs)("div",{className:"row",children:[Object(u.jsx)(m.a,{bottom:!0,children:Object(u.jsxs)("div",{className:"twelve columns",children:[Object(u.jsx)("ul",{className:"social-links",children:e}),Object(u.jsxs)("ul",{className:"copyright",children:[Object(u.jsx)("li",{children:"\xa9 Copyright 2022 v i p i s a n a n"}),Object(u.jsxs)("li",{children:["Design by"," ",Object(u.jsx)("a",{title:"Styleshout",href:"",children:"Myself"})]})]})]})}),Object(u.jsx)("div",{id:"go-top",children:Object(u.jsx)("a",{className:"smoothscroll",title:"Back to Top",href:"#home",children:Object(u.jsx)("i",{className:"icon-up-open"})})})]})})}}]),s}(c.Component),f=function(e){Object(l.a)(s,e);var t=Object(j.a)(s);function s(){return Object(i.a)(this,s),t.apply(this,arguments)}return Object(r.a)(s,[{key:"render",value:function(){if(!this.props.data)return null;var e=this.props.data.name,t="images/"+this.props.data.image,s=this.props.data.bio,c=this.props.data.address.street,a=this.props.data.address.city,n=this.props.data.address.state,i=this.props.data.address.zip,r=this.props.data.phone,l=this.props.data.email,j=this.props.data.resumedownload;return Object(u.jsx)("section",{id:"about",children:Object(u.jsx)(m.a,{duration:1e3,children:Object(u.jsxs)("div",{className:"row",children:[Object(u.jsx)("div",{className:"three columns",children:Object(u.jsx)("img",{className:"profile-pic",src:t,alt:"Nordic Giant Profile Pic"})}),Object(u.jsxs)("div",{className:"nine columns main-col",children:[Object(u.jsx)("h2",{children:"About Me"}),Object(u.jsx)("p",{children:s}),Object(u.jsxs)("div",{className:"row",children:[Object(u.jsxs)("div",{className:"columns contact-details",children:[Object(u.jsx)("h2",{children:"Contact Details"}),Object(u.jsxs)("p",{className:"address",children:[Object(u.jsx)("span",{children:e}),Object(u.jsx)("br",{}),Object(u.jsxs)("span",{children:[c,Object(u.jsx)("br",{}),a," ",n,", ",i]}),Object(u.jsx)("br",{}),Object(u.jsx)("span",{children:r}),Object(u.jsx)("br",{}),Object(u.jsx)("span",{children:l})]})]}),Object(u.jsx)("div",{className:"columns download",children:Object(u.jsx)("p",{children:Object(u.jsxs)("a",{href:j,className:"button",children:[Object(u.jsx)("i",{className:"fa fa-download"}),"Download Resume"]})})})]})]})]})})})}}]),s}(c.Component),v=function(e){Object(l.a)(s,e);var t=Object(j.a)(s);function s(){var e;Object(i.a)(this,s);for(var c=arguments.length,a=new Array(c),n=0;n<c;n++)a[n]=arguments[n];return(e=t.call.apply(t,[this].concat(a))).state={isShown:!1},e}return Object(r.a)(s,[{key:"getRandomColor",value:function(){for(var e="#",t=0;t<6;t++)e+="0123456789ABCDEF"[Math.floor(16*Math.random())];return e}},{key:"render",value:function(){var e=this;if(!this.props.data)return null;var t=this.props.data.skillmessage,s=this.props.data.education.map((function(e){return Object(u.jsxs)("div",{children:[Object(u.jsx)("h3",{children:e.school}),Object(u.jsxs)("p",{className:"info",children:[e.degree," ",Object(u.jsx)("span",{children:"\u2022"}),Object(u.jsx)("em",{className:"date",children:e.graduated})]}),Object(u.jsx)("p",{children:e.description})]},e.school)})),c=this.props.data.work.map((function(e){return Object(u.jsxs)("div",{children:[Object(u.jsx)("h3",{children:e.company}),Object(u.jsxs)("p",{className:"info",children:[e.title,Object(u.jsx)("span",{children:"\u2022"})," ",Object(u.jsx)("em",{className:"date",children:e.years})]}),Object(u.jsx)("p",{children:e.description})]},e.company)})),a=this.props.data.skills.map((function(t){var s=e.getRandomColor(),c="bar-expand "+t.name.toLowerCase(),a=t.level;return Object(u.jsxs)("li",{onMouseEnter:function(){return e.setState({isShown:!0})},onMouseLeave:function(){return e.setState({isShown:!1})},children:[Object(u.jsx)("span",{style:{width:a,backgroundColor:s},className:c}),Object(u.jsx)("em",{children:t.name}),t.description&&e.state.isShown&&Object(u.jsx)(u.Fragment,{children:Object(u.jsx)("p",{style:{margin:"20px"},children:t.description?t.description:""})})]},t.name)}));return Object(u.jsxs)("section",{id:"resume",children:[Object(u.jsx)(m.a,{left:!0,duration:1300,children:Object(u.jsxs)("div",{className:"row education",children:[Object(u.jsx)("div",{className:"three columns header-col",children:Object(u.jsx)("h1",{children:Object(u.jsx)("span",{children:"Education"})})}),Object(u.jsx)("div",{className:"nine columns main-col",children:Object(u.jsx)("div",{className:"row item",children:Object(u.jsx)("div",{className:"twelve columns",children:s})})})]})}),Object(u.jsx)(m.a,{left:!0,duration:1300,children:Object(u.jsxs)("div",{className:"row work",children:[Object(u.jsx)("div",{className:"three columns header-col",children:Object(u.jsx)("h1",{children:Object(u.jsx)("span",{children:"Work"})})}),Object(u.jsx)("div",{className:"nine columns main-col",children:c})]})}),Object(u.jsx)(m.a,{left:!0,duration:1300,children:Object(u.jsxs)("div",{className:"row skill",children:[Object(u.jsx)("div",{className:"three columns header-col",children:Object(u.jsx)("h1",{children:Object(u.jsx)("span",{children:"Skills"})})}),Object(u.jsxs)("div",{className:"nine columns main-col",children:[Object(u.jsx)("p",{children:t}),Object(u.jsx)("div",{className:"bars",children:Object(u.jsx)("ul",{className:"skills",children:a})})]})]})})]})}}]),s}(c.Component),N=function(e){Object(l.a)(s,e);var t=Object(j.a)(s);function s(){return Object(i.a)(this,s),t.apply(this,arguments)}return Object(r.a)(s,[{key:"render",value:function(){if(!this.props.data)return null;var e=this.props.data.name,t=this.props.data.address.street,s=this.props.data.address.city,c=this.props.data.address.state,a=this.props.data.address.zip,n=this.props.data.phone;this.props.data.contactmessage;return Object(u.jsxs)("section",{id:"contact",children:[Object(u.jsx)(O.Fade,{bottom:!0,duration:1e3}),Object(u.jsx)("div",{className:"row",children:Object(u.jsx)(O.Slide,{right:!0,duration:1e3,children:Object(u.jsxs)("aside",{className:"four columns footer-widgets",children:[Object(u.jsxs)("div",{className:"widget widget_contact",children:[Object(u.jsx)("h4",{children:"Address and Phone"}),Object(u.jsxs)("p",{className:"address",children:[e,Object(u.jsx)("br",{}),t," ",Object(u.jsx)("br",{}),s,", ",c," ",a,Object(u.jsx)("br",{}),Object(u.jsx)("span",{children:n})]})]}),Object(u.jsxs)("div",{className:"widget widget_tweets",children:[Object(u.jsx)("h4",{className:"widget-title",children:"Quote"}),Object(u.jsx)("ul",{id:"twitter",children:Object(u.jsxs)("li",{children:[Object(u.jsx)("span",{children:"I'm in the process of becoming the best version of myself"}),Object(u.jsx)("b",{children:Object(u.jsx)("a",{href:"./",children:"2 Days Ago"})})]})})]})]})})})]})}}]),s}(c.Component),g=s(19),w=s.n(g),y=0,k=function(e){Object(l.a)(s,e);var t=Object(j.a)(s);function s(){return Object(i.a)(this,s),t.apply(this,arguments)}return Object(r.a)(s,[{key:"render",value:function(){if(!this.props.data)return null;var e=this.props.data.projects.map((function(e){var t="images/portfolio/"+e.image;return Object(u.jsx)("div",{className:"columns portfolio-item",children:Object(u.jsxs)("div",{className:"item-wrap",children:[Object(u.jsx)(w.a,{alt:e.title,src:t}),Object(u.jsx)("div",{style:{textAlign:"center"},children:e.title})]})},y++)}));return Object(u.jsx)("section",{id:"portfolio",children:Object(u.jsx)(m.a,{left:!0,duration:1e3,distance:"40px",children:Object(u.jsx)("div",{className:"row",children:Object(u.jsxs)("div",{className:"twelve columns collapsed",children:[Object(u.jsx)("h1",{children:"Check Out Some of My Works."}),Object(u.jsx)("div",{id:"portfolio-wrapper",className:"bgrid-quarters s-bgrid-thirds cf",children:e})]})})})})}}]),s}(c.Component),C=function(e){Object(l.a)(s,e);var t=Object(j.a)(s);function s(e){var c;return Object(i.a)(this,s),(c=t.call(this,e)).state={foo:"bar",resumeData:{}},o.a.initialize("UA-110570651-1"),o.a.pageview(window.location.pathname),c}return Object(r.a)(s,[{key:"getResumeData",value:function(){h.a.ajax({url:"./resumeData.json",dataType:"json",cache:!1,success:function(e){this.setState({resumeData:e})}.bind(this),error:function(e,t,s){console.log(s),alert(s)}})}},{key:"componentDidMount",value:function(){this.getResumeData()}},{key:"render",value:function(){return Object(u.jsxs)("div",{className:"App",children:[Object(u.jsx)(p,{data:this.state.resumeData.main}),Object(u.jsx)(f,{data:this.state.resumeData.main}),Object(u.jsx)(v,{data:this.state.resumeData.resume}),Object(u.jsx)(k,{data:this.state.resumeData.portfolio}),Object(u.jsx)(N,{data:this.state.resumeData.main}),Object(u.jsx)(x,{data:this.state.resumeData.main})]})}}]),s}(c.Component),D=function(e){e&&e instanceof Function&&s.e(3).then(s.bind(null,48)).then((function(t){var s=t.getCLS,c=t.getFID,a=t.getFCP,n=t.getLCP,i=t.getTTFB;s(e),c(e),a(e),n(e),i(e)}))};n.a.render(Object(u.jsx)(C,{}),document.getElementById("root")),D()}},[[47,1,2]]]);
//# sourceMappingURL=main.f3f1b997.chunk.js.map