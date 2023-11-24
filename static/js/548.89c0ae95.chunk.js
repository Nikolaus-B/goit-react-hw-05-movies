"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[548],{9548:function(n,e,t){t.r(e),t.d(e,{default:function(){return H}});var o,r,i,a,c,s,l,u,p,d=t(5861),x=t(9439),h=t(7757),f=t.n(h),m=t(8512),b=t(5705),g=t(6727),Z=t(168),v=t(5867),j=(0,v.ZP)(b.l0)(o||(o=(0,Z.Z)(["\n  display: flex;\n  justify-content: center;\n  max-width: 400px;\n  height: 50px;\n  margin: 0 auto;\n"]))),k=v.ZP.label(r||(r=(0,Z.Z)(["\n  margin-bottom: 15px;\n"]))),y=(0,v.ZP)(b.gN)(i||(i=(0,Z.Z)(["\n  width: 250px;\n  height: 40px;\n  padding: 10px;\n  font-size: 16px;\n  border: 1.5px solid #bdc3c7;\n  border-radius: 4px;\n  outline: none;\n  transition: border-color 0.3s ease-in-out;\n\n  &:focus {\n    border-color: #f1c40f;\n  }\n"]))),w=v.ZP.button(a||(a=(0,Z.Z)(["\n  margin-left: 10px;\n  height: 40px;\n  background-color: #f1c40f;\n  color: #34495e;\n  padding: 10px;\n  font-size: 16px;\n  border: none;\n  border-radius: 4px;\n  cursor: pointer;\n  transition: color 0.5s ease-in-out, background-color 0.5s ease-in-out;\n\n  &:hover {\n    color: #3498db;\n    background-color: #34495e;\n  }\n"]))),P=(0,v.ZP)(b.Bc)(c||(c=(0,Z.Z)(["\n  color: #e74c3c;\n  font-size: 14px;\n  margin-top: 5px;\n  display: block;\n"]))),S=t(184),_=g.Ry().shape({title:g.Z_().required("Required")}),q=function(n){var e=n.submitClick;return(0,S.jsx)("div",{children:(0,S.jsx)(b.J9,{initialValues:{title:""},validationSchema:_,onSubmit:function(n,t){t.resetForm(),e(n)},children:(0,S.jsxs)(j,{children:[(0,S.jsxs)(k,{children:[(0,S.jsx)(y,{name:"title",placeholder:"your movie"}),(0,S.jsx)(P,{component:"span",name:"title"})]}),(0,S.jsx)(w,{type:"submit",children:"Search"})]})})})},z=t(1087),C=v.ZP.div(s||(s=(0,Z.Z)(["\n  margin: 0 auto;\n  background-color: #ecf0f1;\n  padding: 20px;\n  border-radius: 8px;\n  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);\n  margin-top: 20px;\n  width: 400px;\n"]))),F=v.ZP.ul(l||(l=(0,Z.Z)(["\n  list-style: none;\n  padding: 0;\n  margin-top: 20px;\n"]))),N=v.ZP.li(u||(u=(0,Z.Z)(["\n  font-size: 14px;\n  margin-bottom: 8px;\n  color: #34495e;\n"]))),R=(0,v.ZP)(z.rU)(p||(p=(0,Z.Z)(["\n  text-decoration: none;\n  color: #34495e;\n  transition: color 0.3s ease-in-out;\n\n  &:hover {\n    color: #f1c40f;\n  }\n"]))),T=function(n){var e=n.onSubmit,t=n.movies,o=n.location;return(0,S.jsx)(S.Fragment,{children:(0,S.jsxs)(C,{children:[(0,S.jsx)(q,{submitClick:e}),(0,S.jsx)(F,{children:t.map((function(n){return(0,S.jsx)(N,{children:(0,S.jsx)(R,{to:"/movies/".concat(n.id),state:{from:o},children:n.title||n.name})},n.id)}))})]})})},A=t(5805),B=t(2791),D=t(5218),E=t(7689);function H(){var n,e=(0,B.useState)([]),t=(0,x.Z)(e,2),o=t[0],r=t[1],i=(0,B.useState)(!1),a=(0,x.Z)(i,2),c=a[0],s=a[1],l=(0,B.useState)(!1),u=(0,x.Z)(l,2),p=u[0],h=u[1],b=(0,E.TH)(),g=(0,z.lr)(),Z=(0,x.Z)(g,2),v=Z[0],j=Z[1],k=null!==(n=v.get("query"))&&void 0!==n?n:"";(0,B.useEffect)((function(){function n(){return(n=(0,d.Z)(f().mark((function n(){var e,t;return f().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return e=k.split("/").pop(),n.prev=1,h(!0),s(!1),n.next=6,(0,A.Ai)(e);case 6:0===(t=n.sent).length?D.ZP.error("No movie available"):r(t),n.next=13;break;case 10:n.prev=10,n.t0=n.catch(1),s(!0);case 13:return n.prev=13,h(!1),n.finish(13);case 16:case"end":return n.stop()}}),n,null,[[1,10,13,16]])})))).apply(this,arguments)}""!==k&&function(){n.apply(this,arguments)}()}),[k]);return(0,S.jsxs)(S.Fragment,{children:[c?(0,S.jsx)("p",{style:{color:" #bdc3c7"},children:"Try to reload page"}):(0,S.jsx)(T,{onSubmit:function(n){j({query:"".concat(Date.now(),"/").concat(n.title)})},movies:o,location:b}),p&&(0,S.jsx)(m.a,{})]})}}}]);
//# sourceMappingURL=548.89c0ae95.chunk.js.map