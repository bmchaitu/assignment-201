(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{132:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(11),s=a.n(c),o=(a(98),a(15)),i=a(14),l=a(12),u=a(18),d=a(190),j=a(178),p=a(176),b=a(188),m=a(28),h=a(134),g=a(174),O=a(50),x=a.n(O),f=a(177),v=a(171),y=a(22),w=a.n(y),k=a(35),S=a(27),E=a.n(S),I=a(25),U=a(3),N=Object(v.a)((function(e){return{root:{height:"100vh"},image:{backgroundImage:"url(https://www.sdxcentral.com/wp-content/uploads/2020/10/What-are-Cloud-Service-Providers.jpg)",backgroundRepeat:"no-repeat",backgroundSize:"cover",backgroundPosition:"center"},paper:{margin:e.spacing(8,4),display:"flex",flexDirection:"column",alignItems:"center"},avatar:{margin:e.spacing(1),backgroundColor:e.palette.secondary.main},form:{width:"100%",marginTop:e.spacing(1)},submit:{margin:e.spacing(3,0,2)}}}));var R=Object(I.b)((function(e){return{user:e.user}}),{getUser:function(e){return function(){var t=Object(k.a)(w.a.mark((function t(a){var n,r;return w.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,E.a.post("/signin",e);case 3:n=t.sent,r=n.data,localStorage.setItem("auth-token",r.token),a({type:"GET_USER",payload:Object(l.a)(Object(l.a)({},r),{},{username:e.username,loggedIn:!0})}),t.next=12;break;case 9:t.prev=9,t.t0=t.catch(0),alert("Error:",t.t0.response.data.message);case 12:case"end":return t.stop()}}),t,null,[[0,9]])})));return function(e){return t.apply(this,arguments)}}()}})((function(e){var t=e.user,a=e.getUser,n=Object(o.f)(),c=N(),s=r.a.useState({username:"",password:""}),O=Object(u.a)(s,2),v=O[0],y=O[1],w=function(e){y(Object(l.a)(Object(l.a)({},v),{},Object(i.a)({},e.target.name,e.target.value)))};return Object(U.jsxs)(g.a,{container:!0,component:"main",className:c.root,children:[Object(U.jsx)(p.a,{}),Object(U.jsx)(g.a,{item:!0,xs:!1,sm:4,md:7,className:c.image}),Object(U.jsx)(g.a,{item:!0,xs:12,sm:8,md:5,component:h.a,elevation:6,square:!0,children:Object(U.jsxs)("div",{className:c.paper,children:[Object(U.jsx)(d.a,{className:c.avatar,children:Object(U.jsx)(x.a,{})}),Object(U.jsx)(f.a,{component:"h1",variant:"h5",children:"Sign in"}),Object(U.jsxs)("form",{className:c.form,noValidate:!0,onSubmit:function(e){e.preventDefault(),a(v),t.error?alert(t.error):n.push("/dashboard")},children:[Object(U.jsx)(b.a,{variant:"outlined",margin:"normal",required:!0,fullWidth:!0,id:"username",label:"Email Address",name:"username",autoComplete:"email",autoFocus:!0,value:v.username,onChange:w}),Object(U.jsx)(b.a,{variant:"outlined",margin:"normal",required:!0,fullWidth:!0,name:"password",label:"Password",type:"password",id:"password",autoComplete:"current-password",value:v.password,onChange:w}),Object(U.jsx)(j.a,{type:"submit",fullWidth:!0,variant:"contained",color:"primary",className:c.submit,children:"Sign In"}),Object(U.jsx)(g.a,{container:!0,children:Object(U.jsx)(g.a,{item:!0,children:Object(U.jsx)(m.b,{to:"/register",variant:"body2",children:"Don't have an account? Sign Up"})})})]})]})})]})})),C=a(179),D=Object(v.a)((function(e){return{paper:{marginTop:e.spacing(8),display:"flex",flexDirection:"column",alignItems:"center"},avatar:{margin:e.spacing(1),backgroundColor:e.palette.secondary.main},form:{width:"100%",marginTop:e.spacing(3)},submit:{margin:e.spacing(3,0,2)}}})),W=Object(I.b)((function(e){return{user:e.user}}),{setUser:function(e){return console.log("setting user"),function(){var t=Object(k.a)(w.a.mark((function t(a){var n,r;return w.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,E.a.post("/signup",e);case 3:n=t.sent,r=n.data,a({type:"SET_USER",payload:{token:r.token,username:r.username}}),t.next=11;break;case 8:t.prev=8,t.t0=t.catch(0),alert("Signup Error",t.t0.response.data.message);case 11:case"end":return t.stop()}}),t,null,[[0,8]])})));return function(e){return t.apply(this,arguments)}}()}})((function(e){var t=D(),a=r.a.useState({username:"",password:""}),n=Object(u.a)(a,2),c=n[0],s=n[1],h=Object(o.f)(),O=function(e){s(Object(l.a)(Object(l.a)({},c),{},Object(i.a)({},e.target.name,e.target.value)))};return Object(U.jsxs)(C.a,{component:"main",maxWidth:"xs",children:[Object(U.jsx)(p.a,{}),Object(U.jsxs)("div",{className:t.paper,children:[Object(U.jsx)(d.a,{className:t.avatar,children:Object(U.jsx)(x.a,{})}),Object(U.jsx)(f.a,{component:"h1",variant:"h5",children:"Sign up"}),Object(U.jsxs)("form",{className:t.form,onSubmit:function(t){t.preventDefault(),console.log("handled"),e.setUser(c),h.push("/")},noValidate:!0,children:[Object(U.jsxs)(g.a,{container:!0,spacing:2,children:[Object(U.jsx)(g.a,{item:!0,xs:12,children:Object(U.jsx)(b.a,{variant:"outlined",required:!0,fullWidth:!0,id:"username",label:"Email Address",name:"username",autoComplete:"email",onChange:O,value:c.username})}),Object(U.jsx)(g.a,{item:!0,xs:12,children:Object(U.jsx)(b.a,{variant:"outlined",required:!0,fullWidth:!0,name:"password",label:"Password",type:"password",id:"password",onChange:O,value:c.password,autoComplete:"current-password"})})]}),Object(U.jsx)(j.a,{type:"submit",fullWidth:!0,variant:"contained",color:"primary",className:t.submit,children:"Sign Up"}),Object(U.jsx)(g.a,{container:!0,justify:"flex-end",children:Object(U.jsx)(g.a,{item:!0,children:Object(U.jsx)(m.b,{to:"/",variant:"body2",children:"Already have an account? Sign in"})})})]})]})]})})),_=a(79),T=a.n(_),A=a(183),F=a(187),L=a(186),G=a(182),P=a(184),q=a(185),B=a(76),M=a.n(B),V=a(82),z=a(78),J=a.n(z),K=a(189),X={width:"100%",height:"150px",borderWidth:2,borderColor:"rgb(102, 102, 102)",borderStyle:"dashed",borderRadius:5};var H=function(e){var t=Object(n.useState)(null),a=Object(u.a)(t,2),r=a[0],c=a[1],s=Object(n.useRef)();return Object(U.jsxs)("div",{children:[Object(U.jsxs)("form",{onSubmit:function(e){if(e.preventDefault(),null!==r){var t=new FormData;t.append("myfile",r);var a={headers:{"x-auth-token":localStorage.getItem("auth-token"),"content-type":"multipart/form-data"}};E.a.post("/upload",t,a).then((function(e){200===e.status&&(console.log("uploaded"),c(null))})).catch((function(e){console.log("Error")}))}},children:[Object(U.jsx)(V.a,{ref:s,onDrop:function(e){0!==e.length&&c(e[0])},children:function(e){var t=e.getRootProps,a=e.getInputProps;e.acceptedFiles;return Object(U.jsx)("div",{className:"container",style:{display:"flex"},children:Object(U.jsxs)("div",Object(l.a)(Object(l.a)({style:X},t({className:"dropzone"})),{},{children:[Object(U.jsx)("input",Object(l.a)({},a())),Object(U.jsx)("p",{style:{textAlign:"center"},children:"Drag 'n' drop some files here or Click here to select"})]}))})}}),Object(U.jsx)("div",{className:"upload_button_container",style:{width:"100%"},children:Object(U.jsx)(j.a,{variant:"contained",color:"default",startIcon:Object(U.jsx)(J.a,{}),type:"submit",style:{margin:"20px auto",display:"flex"},children:"Upload"})})]}),console.log(r),r&&Object(U.jsx)("div",{className:"files_pending",children:Object(U.jsx)(K.a,{label:r&&r.name,color:"primary"})})]})},Q={upload_container:{width:"500px",margin:"0px auto"}},Y=function(){return Object(U.jsx)("div",{className:"upload_container",style:Q.upload_container,children:Object(U.jsx)(H,{})})},Z=a(180),$=a(181),ee=Object(v.a)((function(e){return{toolbar:e.mixins.toolbar,content:{marginTop:50,flexGrow:1,backgroundColor:e.palette.background.default,padding:e.spacing(3)},table:{minWidth:650},root:{flexGrow:1,display:"flex"},menuButton:{marginRight:e.spacing(2)},title:{justifyContent:"flex-end",alignItems:"flex-end"}}}));function te(e){var t=e.files,a=ee(),n=function(){var e=Object(k.a)(w.a.mark((function e(t,a){return w.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:E()({url:"/file/".concat(t),method:"GET",responseType:"blob"}).then((function(e){var t=window.URL.createObjectURL(new Blob([e.data])),n=document.createElement("a");n.href=t,n.setAttribute("download",a),document.body.appendChild(n),n.click()}));case 1:case"end":return e.stop()}}),e)})));return function(t,a){return e.apply(this,arguments)}}();return Object(U.jsx)(r.a.Fragment,{children:Object(U.jsx)(G.a,{component:h.a,style:{overflowX:"auto"},children:Object(U.jsxs)(A.a,{className:a.table,"aria-label":"simple table",children:[Object(U.jsx)(P.a,{children:Object(U.jsxs)(q.a,{children:[Object(U.jsx)(L.a,{style:{fontWeight:1e3},children:"File Name"}),Object(U.jsx)(L.a,{style:{fontWeight:1e3},align:"right",children:"File Size"}),Object(U.jsx)(L.a,{style:{fontWeight:1e3},align:"right",children:"Type"}),Object(U.jsx)(L.a,{style:{fontWeight:1e3},align:"right",children:"Date Uploaded"}),Object(U.jsx)(L.a,{style:{fontWeight:1e3},align:"right",children:"Download"})]})}),Object(U.jsx)(F.a,{children:t.map((function(e){return Object(U.jsxs)(q.a,{children:[Object(U.jsx)(L.a,{component:"th",scope:"row",children:e.aliases}),Object(U.jsxs)(L.a,{align:"right",children:[e.length/1e3," KB"]}),Object(U.jsx)(L.a,{align:"right",children:M.a.extension(e.contentType)}),Object(U.jsx)(L.a,{align:"right",children:new Date(e.uploadDate).toLocaleDateString("en-US")}),Object(U.jsx)(L.a,{align:"right",children:Object(U.jsx)(j.a,{onClick:function(){n(e.filename,e.aliases)},children:Object(U.jsx)(T.a,{})})})]},e._id)}))})]})})})}var ae=Object(I.b)((function(e){return{user:e.user}}),{removeUser:function(){return{type:"REMOVE_USER",payload:{user:"",loggedIn:!1,token:null}}}})((function(e){var t=ee(),a=Object(n.useState)([]),c=Object(u.a)(a,2),s=c[0],i=c[1],l=Object(o.f)(),d=function(){var e=Object(k.a)(w.a.mark((function e(){var t;return w.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,E.a.get("/files",{headers:{"x-auth-token":localStorage.getItem("auth-token")}});case 2:t=e.sent,i(t.data);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(n.useEffect)((function(){d()}),[]),Object(U.jsxs)(r.a.Fragment,{children:[Object(U.jsx)("div",{className:t.root,children:Object(U.jsx)(Z.a,{position:"static",children:Object(U.jsx)($.a,{children:Object(U.jsx)(j.a,{className:t.title,onClick:function(){localStorage.removeItem("auth-token"),e.removeUser(),l.push("/")},color:"inherit",children:"LogOut"})})})}),Object(U.jsxs)("main",{className:t.content,children:[Object(U.jsx)(Y,{}),Object(U.jsx)("div",{className:t.toolbar,style:{marginTop:20},children:s.length>0?Object(U.jsx)(te,{files:s}):Object(U.jsx)("h4",{children:"There are currently no files"})})]})]})}));var ne=Object(I.b)((function(e){return{user:e.user}}),{loadUser:function(e){return function(){var t=Object(k.a)(w.a.mark((function t(a){var n,r;return w.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,E.a.post("/validate",null,{headers:{"x-auth-token":e}});case 3:n=t.sent,r=n.data,console.log(r),a({type:"LOAD_USER",payload:{username:r.username,token:e,loggedIn:!0}}),t.next=12;break;case 9:t.prev=9,t.t0=t.catch(0),alert("Error:",t.t0.response.data.message);case 12:case"end":return t.stop()}}),t,null,[[0,9]])})));return function(e){return t.apply(this,arguments)}}()}})((function(e){var t=e.user,a=e.loadUser;return r.a.useEffect((function(){var e=localStorage.getItem("auth-token");console.log(e),e&&a(e)}),[]),Object(U.jsxs)(o.c,{children:[Object(U.jsx)(o.a,{exact:!0,path:"/",component:R}),Object(U.jsx)(o.a,{exact:!0,path:"/register",component:W}),Object(U.jsx)(o.a,{exact:!0,path:"/dashboard",component:t.loggedIn?ae:W})]})})),re=a(39),ce={user:"",token:null,loggedIn:!1,error:null},se=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ce,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"GET_USER":return Object(l.a)(Object(l.a)({},e),{},{user:t.payload.username,token:t.payload.token,loggedIn:t.payload.loggedIn});case"LOG_ERROR":return Object(l.a)(Object(l.a)({},e),{},{error:t.payload.error});case"SET_USER":return Object(l.a)(Object(l.a)({},e),{},{username:t.payload.username,token:t.payload.token});case"LOAD_USER":return Object(l.a)(Object(l.a)({},e),{},{user:t.payload.username,token:t.payload.token,loggedIn:t.payload.loggedIn});case"REMOVE_USER":return{user:t.payload.uername,token:t.payload.token,loggedIn:t.payload.loggedIn};default:return e}},oe=Object(re.combineReducers)({user:se}),ie=a(80),le=a(81),ue=[ie.a],de=Object(re.createStore)(oe,{},Object(le.composeWithDevTools)(re.applyMiddleware.apply(void 0,ue)));s.a.render(Object(U.jsx)(r.a.StrictMode,{children:Object(U.jsx)(I.a,{store:de,children:Object(U.jsx)(m.a,{children:Object(U.jsx)(ne,{})})})}),document.getElementById("root"))},98:function(e,t,a){}},[[132,1,2]]]);
//# sourceMappingURL=main.4866efb8.chunk.js.map