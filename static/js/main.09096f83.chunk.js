(this.webpackJsonpreact_carousel=this.webpackJsonpreact_carousel||[]).push([[0],[,,,,,,,,,function(e,t,n){},function(e,t,n){},,function(e,t,n){},function(e,t,n){"use strict";n.r(t);var a=n(4),i=n.n(a),c=n(2),s=n(1),r=(n(9),n(10),n(0)),l=function(e){var t=e.lengthMove,n=e.setLengthMove,a=e.images,i=e.step,c=e.frameSize,s=e.itemWidth,l=e.animationDuration,o=e.infinite,b=function(e){var r=e.target,l=document.querySelector("[data-cy=next]"),b=document.querySelector("[data-cy=prev]"),u=a.length*s,d=c*s,m=i*s;if(r instanceof HTMLElement&&l instanceof HTMLElement&&b instanceof HTMLElement)switch(r.dataset.cy){case"next":if(o&&Math.abs(t)===u-d){n(0);break}if(!o&&Math.abs(t)===u-d){l.disabled=!0;break}n(t-m),Math.abs(t)>u-2*d?(n(-1*(u-d)),b.disabled=!1):b.disabled=!1;break;case"prev":if(o&&!t){n(-1*(u-d));break}if(!o&&!t){b.disabled=!0;break}n(t+m),t+d>0?(n(0),l.disabled=!1):l.disabled=!1}};return Object(r.jsx)("div",{className:"Carousel",style:{width:"".concat(a.length*s,"px")},children:Object(r.jsxs)("div",{className:"container",style:{width:"".concat(c*s,"px")},children:[Object(r.jsx)("ul",{className:"Carousel__list",style:{transform:"translateX(".concat(t,"px)"),transition:"all ".concat(l,"ms")},children:a.map((function(e,t){return Object(r.jsx)("li",{children:Object(r.jsx)("img",{src:e,alt:"".concat(t+1),style:{width:"".concat(s,"px"),height:"".concat(s,"px")}})},e)}))}),Object(r.jsxs)("div",{className:"Carousel__buttons",children:[Object(r.jsx)("button",{type:"button","data-cy":"prev",onClick:b,children:"Prev"}),Object(r.jsx)("button",{type:"button","data-cy":"next",onClick:b,children:"Next"})]})]})})},o=(n(12),function(e){var t=e.members,n=e.lengthMove,a=e.pace,i=e.frame,c=e.size,s=e.speed,l=e.infinite,o=e.setLengthMove,b=e.enteredStep,u=e.enteredFrame,d=e.enteredSize,m=e.enteredSpeed,j=e.setInfinite,g=document.querySelector("[data-cy=next]"),p=document.querySelector("[data-cy=prev]"),h=function(e,a,s,r){+e.target.value&&+e.target.value!==s?a(+e.target.value):a(r);var l=n/s*+e.target.value,b=(t-+e.target.value)*c*-1,u=-1*n+c*i;switch(e.target.getAttribute("name")){case"size":o(l);break;case"frame":u===t*c&&o(b),i+1!==t&&g instanceof HTMLElement&&p instanceof HTMLElement&&(p.disabled=!1,g.disabled=!1)}};return Object(r.jsxs)("form",{className:"form",children:[Object(r.jsxs)("label",{children:["Step:",Object(r.jsx)("input",{type:"number",value:a,min:1,max:t,onChange:function(e){return h(e,b,a,3)}})]}),Object(r.jsxs)("label",{children:["Frame:",Object(r.jsx)("input",{type:"number",name:"frame",value:i,min:1,max:t,onChange:function(e){return h(e,u,i,3)}})]}),Object(r.jsxs)("label",{children:["Size:",Object(r.jsx)("input",{type:"number",name:"size",value:c,min:30,max:500,onChange:function(e){return h(e,d,c,130)}})]}),Object(r.jsxs)("label",{children:["Speed:",Object(r.jsx)("input",{type:"number",value:s,min:0,max:9e3,onChange:function(e){return h(e,m,s,1e3)}})]}),Object(r.jsxs)("label",{children:["Infinite:",Object(r.jsx)("input",{type:"checkbox",name:"infinite",onChange:function(){j(!l),!l&&g instanceof HTMLElement&&p instanceof HTMLElement&&(p.disabled=!1,g.disabled=!1)}})]})]})}),b=["./img/1.png","./img/2.png","./img/3.png","./img/4.png","./img/5.png","./img/6.png","./img/7.png","./img/8.png","./img/9.png","./img/10.png"],u=function(){var e=Object(s.useState)(0),t=Object(c.a)(e,2),n=t[0],a=t[1],i=Object(s.useState)(3),u=Object(c.a)(i,2),d=u[0],m=u[1],j=Object(s.useState)(3),g=Object(c.a)(j,2),p=g[0],h=g[1],f=Object(s.useState)(130),x=Object(c.a)(f,2),O=x[0],v=x[1],y=Object(s.useState)(1e3),S=Object(c.a)(y,2),M=S[0],k=S[1],C=Object(s.useState)(!1),L=Object(c.a)(C,2),z=L[0],w=L[1];return Object(r.jsxs)("div",{className:"App",children:[Object(r.jsx)("h1",{"data-cy":"title",children:"Carousel with ".concat(b.length," images")}),Object(r.jsx)(o,{members:b.length,lengthMove:n,pace:d,frame:p,size:O,speed:M,infinite:z,setLengthMove:a,enteredStep:m,enteredFrame:h,enteredSize:v,enteredSpeed:k,setInfinite:w}),Object(r.jsx)(l,{images:b,lengthMove:n,setLengthMove:a,step:d,frameSize:p,itemWidth:O,animationDuration:M,infinite:z})]})};i.a.render(Object(r.jsx)(u,{}),document.getElementById("root"))}],[[13,1,2]]]);
//# sourceMappingURL=main.09096f83.chunk.js.map