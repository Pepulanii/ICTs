(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{42:function(e,t,c){},43:function(e,t,c){},53:function(e,t,c){},54:function(e,t,c){},73:function(e,t,c){},74:function(e,t,c){},75:function(e,t,c){},76:function(e,t,c){},77:function(e,t,c){"use strict";c.r(t);var n=c(2),s=c(14),i=c.n(s),a=(c(42),c(3)),j=(c(43),c.p+"static/media/user.4a000e6c.svg"),r=c(5),l=c(21),b=c(1),o=function(e){e.sidebarOpen;var t=e.openSidebar;return Object(b.jsxs)("nav",{className:"navbar",children:[Object(b.jsx)("div",{className:"nav_icon",onCLick:function(){return t()},children:Object(b.jsx)("i",{className:"fa fa-bars"})}),Object(b.jsxs)("div",{className:"navbar__left",children:[Object(b.jsx)(r.b,{to:"/stock",children:"Messages"}),Object(b.jsx)(r.b,{to:"/stock",children:"News Feed"}),Object(b.jsx)(r.b,{to:"/stock",children:"About Us"})]}),Object(b.jsxs)("div",{className:"navbar__right",children:[Object(b.jsx)(r.b,{to:"",children:Object(b.jsx)(l.b,{})}),Object(b.jsx)(r.b,{to:"",children:Object(b.jsx)(l.a,{})}),Object(b.jsx)(r.b,{to:"",children:Object(b.jsx)("img",{width:"30",src:j,alt:"user"})})]})]})},d=(c(53),c.p+"static/media/ZM_Coat_of_Arms.99c8ebf7.png"),O=c(33),h=c(22),x=c(35),u=c(16),p=c(34),m=c(36),v=c(37),f=function(e){var t=e.sidebarOpen,c=e.closeSidebar;return Object(b.jsxs)("div",{className:t?"sidebar-responsive":"",id:"sidebar",children:[Object(b.jsxs)("div",{className:"sidebar__title",children:[Object(b.jsxs)("div",{className:"sidebar__img",children:[Object(b.jsx)("img",{src:d,alt:"ZMC"}),Object(b.jsx)("br",{})]}),Object(b.jsx)("i",{onClick:function(){return c()},children:Object(b.jsx)(O.a,{size:30})})]}),Object(b.jsxs)("div",{className:"sidebar__menu",children:[Object(b.jsxs)("div",{className:"sidebar__link sidebar_home",children:[Object(b.jsx)(h.a,{size:20}),Object(b.jsx)(r.b,{to:"/",children:"  HOME"})]}),Object(b.jsx)("h2",{children:" SERVICES"}),Object(b.jsxs)("div",{className:"sidebar__link",children:[Object(b.jsx)(h.b,{size:20}),Object(b.jsx)(r.b,{to:"/stock",children:"  Existing Services"})]}),Object(b.jsxs)("div",{className:"sidebar__link",children:[Object(b.jsx)(p.a,{size:20}),Object(b.jsx)(r.b,{to:"/stock",children:"  GSB"})]}),Object(b.jsx)("div",{className:"sidebar__link",children:Object(b.jsx)(r.b,{to:"/stock",children:"  E-Services"})}),Object(b.jsxs)("div",{className:"sidebar__link",children:[Object(b.jsx)(x.a,{size:20}),Object(b.jsx)(r.b,{to:"/stock",children:"  Mobile Services"})]}),Object(b.jsxs)("div",{className:"sidebar__link",children:[Object(b.jsx)(u.b,{size:20}),Object(b.jsx)(r.b,{to:"addservice",children:"  Add A Service"})]}),Object(b.jsx)("h2",{children:"TAXABLE SERVICES"}),Object(b.jsxs)("div",{className:"sidebar__link",children:[Object(b.jsx)(u.a,{size:20}),Object(b.jsx)(r.b,{to:"/stock",children:"  Add A Taxable Service"})]}),Object(b.jsx)("h2",{children:"PROPOSED SERVICES"}),Object(b.jsxs)("div",{className:"sidebar__link",children:[Object(b.jsx)(m.a,{size:20}),Object(b.jsx)(r.b,{to:"/stock",children:"  Pending projects"})]}),Object(b.jsxs)("div",{className:"sidebar__link",children:[Object(b.jsx)(v.a,{size:20}),Object(b.jsx)(r.b,{to:"/propose",children:"Propose A Service"})]}),Object(b.jsxs)("div",{className:"sidebar__logout",children:[Object(b.jsx)(u.c,{size:30}),Object(b.jsx)(r.b,{to:"#",children:"  Log Out"})]})]})]})},S=c(4),_=(c(54),c(12)),g=c.n(_);var N=function(){var e=Object(n.useState)([]),t=Object(a.a)(e,2),c=t[0],s=t[1];return Object(n.useEffect)((function(){g.a.get("http://localhost:3001/api/get").then((function(e){s(e.data)}))}),[]),Object(b.jsx)("div",{className:"home_container",children:Object(b.jsxs)("table",{children:[Object(b.jsx)("thead",{children:Object(b.jsxs)("tr",{children:[Object(b.jsx)("th",{children:"MIS"}),Object(b.jsx)("th",{children:"Description"}),Object(b.jsx)("th",{children:"Year Launched"}),Object(b.jsx)("th",{children:"Ministry"})]})}),Object(b.jsx)("tbody",{children:c.map((function(e){return Object(b.jsxs)("tr",{children:[Object(b.jsx)("td",{children:e.MIS_Name}),Object(b.jsxs)("td",{children:[e.MIS_Description," "]}),Object(b.jsx)("td",{children:e.MIS_Launch_Year}),Object(b.jsx)("td",{children:e.Institution_Name})]})}))})]})})};var y=function(){return Object(b.jsx)("div",{children:"This is the E-Services page"})};var C=function(){return Object(b.jsx)("div",{children:Object(b.jsx)("h1",{children:"This is the messages component"})})};var I=function(){return Object(b.jsx)("div",{children:Object(b.jsx)("h1",{children:"This is the about page..."})})},M=(c(73),c(15));c(31);M.a.configure();var k=function(){var e=function(){Object(M.a)("Successful Insert!")},t=Object(n.useState)(""),c=Object(a.a)(t,2),s=c[0],i=c[1],j=Object(n.useState)(1),r=Object(a.a)(j,2),l=r[0],o=r[1],d=Object(n.useState)(""),O=Object(a.a)(d,2),h=O[0],x=O[1],u=Object(n.useState)(2e3),p=Object(a.a)(u,2),m=p[0],v=p[1],f=Object(n.useState)("Disabled"),S=Object(a.a)(f,2),_=S[0],N=S[1],y=Object(n.useState)(""),C=Object(a.a)(y,2),I=C[0],k=C[1],E=Object(n.useState)(""),w=Object(a.a)(E,2),A=w[0],T=w[1],D=Object(n.useState)("Revenue"),L=Object(a.a)(D,2),P=L[0],R=L[1],z=Object(n.useState)(""),q=Object(a.a)(z,2),Y=q[0],B=q[1],H=Object(n.useState)(""),U=Object(a.a)(H,2),F=U[0],G=U[1],V=Object(n.useState)(""),J=Object(a.a)(V,2),W=J[0],Z=J[1],K=Object(n.useState)(""),X=Object(a.a)(K,2),Q=X[0],$=X[1],ee=Object(n.useState)(0),te=Object(a.a)(ee,2),ce=te[0],ne=te[1],se=Object(n.useState)(0),ie=Object(a.a)(se,2),ae=ie[0],je=ie[1],re=Object(n.useState)(0),le=Object(a.a)(re,2),be=le[0],oe=le[1],de=Object(n.useState)("Online"),Oe=Object(a.a)(de,2),he=Oe[0],xe=Oe[1];return Object(b.jsxs)("div",{className:"form-basic",children:[Object(b.jsx)("h1",{children:"ADD A MIS SYSTEM TO THE DATABASE"}),Object(b.jsxs)("div",{className:"form-row",children:[Object(b.jsx)("div",{class:"form-row",children:Object(b.jsxs)("label",{children:[Object(b.jsx)("span",{children:"Name of Technology"}),Object(b.jsx)("input",{type:"text",name:"Name",onChange:function(e){i(e.target.value)}})]})}),Object(b.jsx)("div",{class:"form-row",children:Object(b.jsxs)("label",{children:[Object(b.jsx)("span",{children:"Institution"}),Object(b.jsx)("input",{type:"text",name:"Institution",onChange:function(e){o(e.target.value)}})]})}),Object(b.jsx)("div",{className:"form-row",children:Object(b.jsxs)("label",{children:[Object(b.jsx)("span",{children:"Description"}),Object(b.jsx)("textarea",{type:"text",name:"Description",rows:"10",cols:"40",onChange:function(e){x(e.target.value)}})]})}),Object(b.jsx)("div",{className:"form-row",children:Object(b.jsxs)("label",{children:[Object(b.jsx)("span",{children:"Year Launched"}),Object(b.jsxs)("select",{name:"LaunchYear",onChange:function(e){v(e.target.value)},children:[Object(b.jsx)("option",{value:"2000",children:"2000"}),Object(b.jsx)("option",{value:"2001",children:"2001"}),Object(b.jsx)("option",{value:"2002",children:"2002"}),Object(b.jsx)("option",{value:"2003",children:"2003"}),Object(b.jsx)("option",{value:"2004",children:"2004"}),Object(b.jsx)("option",{value:"2005",children:"2005"}),Object(b.jsx)("option",{value:"2006",children:"2006"}),Object(b.jsx)("option",{value:"2007",children:"2007"}),Object(b.jsx)("option",{value:"2008",children:"2008"}),Object(b.jsx)("option",{value:"2009",children:"2009"}),Object(b.jsx)("option",{value:"2010",children:"2010"}),Object(b.jsx)("option",{value:"2011",children:"2011"}),Object(b.jsx)("option",{value:"2012",children:"2012"}),Object(b.jsx)("option",{value:"2013",children:"2013"}),Object(b.jsx)("option",{value:"2014",children:"2014"}),Object(b.jsx)("option",{value:"2015",children:"2015"}),Object(b.jsx)("option",{value:"2016",children:"2016"}),Object(b.jsx)("option",{value:"2017",children:"2017"}),Object(b.jsx)("option",{value:"2018",children:"2018"}),Object(b.jsx)("option",{value:"2019",children:"2019"}),Object(b.jsx)("option",{value:"2020",children:"2020"}),Object(b.jsx)("option",{value:"2021",children:"2021"})]})]})}),Object(b.jsx)("div",{className:"form-row",children:Object(b.jsxs)("label",{children:[Object(b.jsx)("span",{children:"Mobile Enabled"}),Object(b.jsxs)("select",{name:"MobileEnabled",onChange:function(e){N(e.target.value)},children:[Object(b.jsx)("option",{value:"Enabled",children:"Enabled"}),Object(b.jsx)("option",{value:"Disabled",children:"Disabled"})]})]})}),Object(b.jsx)("div",{className:"form-row",children:Object(b.jsxs)("label",{children:[Object(b.jsx)("span",{children:"Serial Number"}),Object(b.jsx)("input",{type:"text",name:"SerialNumber",onChange:function(e){k(e.target.value)}})]})}),Object(b.jsx)("div",{className:"form-row",children:Object(b.jsxs)("label",{children:[Object(b.jsx)("span",{children:"System category"}),Object(b.jsxs)("select",{name:"SystemName",onChange:function(e){T(e.target.value)},children:[Object(b.jsx)("option",{value:"E-payslip",children:"E-payslip"}),Object(b.jsx)("option",{value:"FISP",children:"FISP"})]})]})}),Object(b.jsx)("div",{className:"form-row",children:Object(b.jsxs)("label",{children:[Object(b.jsx)("span",{children:"Kind of service"}),Object(b.jsxs)("select",{name:"ServiceType",onChange:function(e){R(e.target.value)},children:[Object(b.jsx)("option",{value:"Revenue Collection",children:"Revenue Collection"}),Object(b.jsx)("option",{value:"Information Collection",children:"Information Collection"}),Object(b.jsx)("option",{value:"Information Dissemination",children:"Information Dissemination"}),Object(b.jsx)("option",{value:"Other",children:"Other"})]})]})}),Object(b.jsx)("div",{className:"form-row",children:Object(b.jsxs)("label",{children:[Object(b.jsx)("span",{children:"Hosting Location"}),Object(b.jsx)("input",{type:"text",name:"Location",onChange:function(e){B(e.target.value)}})]})}),Object(b.jsx)("div",{className:"form-row",children:Object(b.jsxs)("label",{children:[Object(b.jsx)("span",{children:"Platform"}),Object(b.jsx)("input",{type:"text",name:"Platform",onChange:function(e){G(e.target.value)}})]})}),Object(b.jsx)("div",{className:"form-row",children:Object(b.jsxs)("label",{children:[Object(b.jsx)("span",{children:"Source Code Ownership"}),Object(b.jsx)("input",{type:"text",name:"SourceCode",onChange:function(e){Z(e.target.value)}})]})}),Object(b.jsx)("div",{className:"form-row",children:Object(b.jsxs)("label",{children:[Object(b.jsx)("span",{children:"Proprietary / Open Source?"}),Object(b.jsxs)("select",{name:"CodeType",onChange:function(e){$(e.target.value)},children:[Object(b.jsx)("option",{value:"Open Source",children:"Open Source"}),Object(b.jsx)("option",{value:"Proprietary",children:"Proprietary"})]})]})}),Object(b.jsx)("div",{className:"form-row",children:Object(b.jsxs)("label",{children:[Object(b.jsx)("span",{children:"Licensing Cost"}),Object(b.jsx)("input",{type:"text",name:"LicencingCost",onChange:function(e){ne(e.target.value)}})]})}),Object(b.jsx)("div",{className:"form-row",children:Object(b.jsxs)("label",{children:[Object(b.jsx)("span",{children:"Annual Revenue"}),Object(b.jsx)("input",{type:"text",name:"AnnualRevenue",onChange:function(e){je(e.target.value)}})]})}),Object(b.jsx)("div",{className:"form-row",children:Object(b.jsxs)("label",{children:[Object(b.jsx)("span",{children:"Number Of Registered Users"}),Object(b.jsx)("input",{type:"text",name:"Users",onChange:function(e){oe(e.target.value)}})]})}),Object(b.jsxs)("div",{className:"form-row",children:[Object(b.jsx)("label",{children:Object(b.jsx)("span",{children:"Type Of Access"})}),Object(b.jsxs)("div",{className:"form-radio-buttons",children:[Object(b.jsx)("div",{children:Object(b.jsxs)("label",{children:[Object(b.jsx)("input",{type:"radio",name:"Access",value:"Online",onChange:function(e){xe(e.target.value)}}),Object(b.jsx)("span",{children:"Online"})]})}),Object(b.jsx)("div",{children:Object(b.jsxs)("label",{children:[Object(b.jsx)("input",{type:"radio",name:"Access",value:"GWAN",onChange:function(e){xe(e.target.value)}}),Object(b.jsx)("span",{children:"GWAN"})]})})]})]}),Object(b.jsx)("div",{className:"form-row",children:Object(b.jsx)("button",{onClick:function(){g.a.post("http://localhost:3001/api/insert_MIS",{MIS_Name:s,MIS_Institution:l,MIS_Description:h,MIS_Launch_Year:m,MIS_Mobile_Enabled:_,MIS_Serial_Number:I,MIS_System_Name:A,MIS_Service_Type:P,MIS_Host_Location:Y,MIS_Platform:F,MIS_Source_Code:W,MIS_Code_Type:Q,MIS_Licencing_Cost:ce,MIS_Anual_Revenue:ae,MIS_Number_of_Users:be,MIS_Accessibility:he}).then((function(){alert("successful insert")})).then({notify:e})},children:"Submit"})})]})]})};c(74);var E=function(){var e=Object(n.useState)(""),t=Object(a.a)(e,2),c=t[0],s=t[1],i=Object(n.useState)(""),j=Object(a.a)(i,2),r=j[0],l=j[1],o=Object(n.useState)(""),d=Object(a.a)(o,2),O=d[0],h=d[1],x=Object(n.useState)(""),u=Object(a.a)(x,2),p=u[0],m=u[1],v=Object(n.useState)(""),f=Object(a.a)(v,2),S=f[0],_=f[1],N=Object(n.useState)(""),y=Object(a.a)(N,2),C=y[0],I=y[1];return Object(b.jsxs)("div",{className:"propose_tech",children:[Object(b.jsx)("h1",{className:"header_prop",children:"Propose a project that you would like to see developed"}),Object(b.jsxs)("div",{className:"form",children:[Object(b.jsx)("label",{children:"Name of Technology"}),Object(b.jsx)("input",{type:"text",name:"name",onChange:function(e){s(e.target.value)}}),Object(b.jsx)("label",{children:"Category"}),Object(b.jsx)("input",{type:"text",name:"category",onChange:function(e){l(e.target.value)}}),Object(b.jsx)("label",{children:"Priority"}),Object(b.jsx)("input",{type:"text",name:"priority",onChange:function(e){h(e.target.value)}}),Object(b.jsx)("label",{children:"Enter a Requirement"}),Object(b.jsx)("input",{type:"text",name:"requirement_1",onChange:function(e){m(e.target.value)}}),Object(b.jsx)("label",{children:"Enter a Requirement"}),Object(b.jsx)("input",{type:"text",name:"requirement_2",onChange:function(e){_(e.target.value)}}),Object(b.jsx)("label",{children:"Enter a Requirement"}),Object(b.jsx)("input",{type:"text",name:"requirement_3",onChange:function(e){I(e.target.value)}}),Object(b.jsx)("button",{onClick:function(){g.a.post("http://localhost:3001/api/insert_propose",{name:c,category:r,priority:O,requirement_1:p,requirement_2:S,requirement_3:C}).then((function(){alert("successful insert")}))},children:"Submit"})]})]})},w=c.p+"static/media/const.16028d65.png";c(75);var A=function(){return Object(b.jsx)("div",{className:"stock_container",children:Object(b.jsx)("img",{height:"700",src:w,alt:"construction"})})},T=(c(76),function(){var e=Object(n.useState)(!1),t=Object(a.a)(e,2),c=t[0],s=t[1];return Object(b.jsx)("div",{className:"container",children:Object(b.jsxs)(r.a,{children:[Object(b.jsx)(o,{sidebarOpen:c,openSidebar:function(){s(!0)}}),Object(b.jsx)(f,{sidebarOpen:c,closeSidebar:function(){s(!1)}}),Object(b.jsxs)(S.c,{children:[Object(b.jsx)(S.a,{exact:!0,path:"/",component:N}),Object(b.jsx)(S.a,{exact:!0,path:"/eservices",component:y}),Object(b.jsx)(S.a,{exact:!0,path:"/messages",component:C}),Object(b.jsx)(S.a,{exact:!0,path:"/about",component:I}),Object(b.jsx)(S.a,{exact:!0,path:"/addservice",component:k}),Object(b.jsx)(S.a,{exact:!0,path:"/propose",component:E}),Object(b.jsx)(S.a,{exact:!0,path:"/stock",component:A})]})]})})});i.a.render(Object(b.jsx)(T,{}),document.getElementById("root"))}},[[77,1,2]]]);
//# sourceMappingURL=main.13603558.chunk.js.map