(self.webpackChunkdashboard=self.webpackChunkdashboard||[]).push([[215],{3215:(t,e,n)=>{"use strict";n.r(e),n.d(e,{DashboardModule:()=>lt});var a=n(6183),o=n(8583),i=n(8246),r=n(4655),l=n(5072),c=n(8002),s=n(7349),m=n(7716),u=n(3396),d=n(7556),p=n(8851),g=n(2522),Z=n(1095),f=n(6627),h=n(3017),b=n(7746),A=n(1769);function _(t,e){if(1&t){const t=m.EpF();m.TgZ(0,"a",10),m.NdJ("click",function(){return m.CHM(t),m.oxw().logout()}),m._uU(1,"Cerrar sesi\xf3n"),m.qZA()}}let q=(()=>{class t{constructor(t,e,n,a,o){this.auth=t,this.socialAuthService=e,this.route=n,this.mobileQuery=o.matchMedia("(max-width: 600px)"),this._mobileQueryListener=()=>a.detectChanges(),this.mobileQuery.addListener(this._mobileQueryListener)}ngOnInit(){this.mobileQuery.removeListener(this._mobileQueryListener)}get userData(){return this.auth.userlogged}logout(){this.auth.logout(),this.socialAuthService.signOut()}}return t.\u0275fac=function(e){return new(e||t)(m.Y36(d.e),m.Y36(p.xE),m.Y36(r.F0),m.Y36(m.sBO),m.Y36(l.vx))},t.\u0275cmp=m.Xpm({type:t,selectors:[["app-sidebar"]],decls:30,vars:13,consts:[[1,"container"],["color","primary",1,"toolbar"],["mat-icon-button","",3,"click"],[1,"app-name"],[1,"sidenav-container",3,"hasBackdrop"],["fixedTopGap","56",3,"mode","fixedInViewport"],["snav",""],[1,"list-container"],["mat-list-item","",3,"routerLink","click"],["mat-list-item","","mat-list-item","",3,"click",4,"ngIf"],["mat-list-item","","mat-list-item","",3,"click"]],template:function(t,e){if(1&t){const t=m.EpF();m.TgZ(0,"div",0),m.TgZ(1,"mat-toolbar",1),m.TgZ(2,"button",2),m.NdJ("click",function(){return m.CHM(t),m.MAs(9).toggle()}),m.TgZ(3,"mat-icon"),m._uU(4,"menu"),m.qZA(),m.qZA(),m.TgZ(5,"h1",3),m._uU(6,"Dashgular App"),m.qZA(),m.qZA(),m.TgZ(7,"mat-sidenav-container",4),m.TgZ(8,"mat-sidenav",5,6),m.TgZ(10,"mat-nav-list",7),m.TgZ(11,"a",8),m.NdJ("click",function(){return m.CHM(t),m.MAs(9).toggle()}),m._uU(12," Inicio "),m.qZA(),m._UZ(13,"mat-divider"),m.TgZ(14,"a",8),m.NdJ("click",function(){return m.CHM(t),m.MAs(9).toggle()}),m._uU(15," Video"),m.qZA(),m._UZ(16,"mat-divider"),m._UZ(17,"mat-divider"),m.TgZ(18,"a",8),m.NdJ("click",function(){return m.CHM(t),m.MAs(9).toggle()}),m._uU(19," Blog"),m.qZA(),m._UZ(20,"mat-divider"),m.TgZ(21,"a",8),m.NdJ("click",function(){return m.CHM(t),m.MAs(9).toggle()}),m._uU(22," Registros "),m.qZA(),m._UZ(23,"mat-divider"),m.TgZ(24,"a",8),m.NdJ("click",function(){return m.CHM(t),m.MAs(9).toggle()}),m._uU(25," Perfil"),m.qZA(),m._UZ(26,"mat-divider"),m.YNc(27,_,2,0,"a",9),m.qZA(),m.qZA(),m.TgZ(28,"mat-sidenav-content"),m._UZ(29,"router-outlet"),m.qZA(),m.qZA(),m.qZA()}2&t&&(m.ekj("example-is-mobile",e.mobileQuery.matches),m.xp6(7),m.Udp("margin-top",e.mobileQuery.matches?56:0,"px"),m.Q6J("hasBackdrop",!0),m.xp6(1),m.Q6J("mode",e.mobileQuery.matches?"over":"side")("fixedInViewport",e.mobileQuery.matches),m.xp6(3),m.Q6J("routerLink","/dashboard"),m.xp6(3),m.Q6J("routerLink","/dashboard/video"),m.xp6(4),m.Q6J("routerLink","/dashboard/posts"),m.xp6(3),m.Q6J("routerLink","/dashboard/history"),m.xp6(3),m.Q6J("routerLink","/dashboard/profile"),m.xp6(3),m.Q6J("ngIf",e.auth.getInfo("token")))},directives:[g.Ye,Z.lW,f.Hw,h.TM,h.JX,b.Hk,b.Tg,r.yS,A.d,o.O5,h.Rh,r.lC],styles:[".container[_ngcontent-%COMP%]{display:flex;flex-direction:column;position:absolute;top:0;bottom:0;left:0;right:0}.mobile[_ngcontent-%COMP%]   .toolbar[_ngcontent-%COMP%]{position:fixed;z-index:2}h1.app-name[_ngcontent-%COMP%]{margin-left:10px}.sidenav-container[_ngcontent-%COMP%]{flex:1}.mobile[_ngcontent-%COMP%]   .sidenav-container[_ngcontent-%COMP%]{flex:1 0 auto}.mat-sidenav[_ngcontent-%COMP%]{width:220px;display:flex;align-items:flex-start}.protoolbar[_ngcontent-%COMP%]{color:#000;background-color:#f5f5f5;display:flex;height:15vh}.avatar[_ngcontent-%COMP%]{margin-left:5px;width:50px;height:50px;border-radius:50%}.username[_ngcontent-%COMP%]{margin-top:15px;margin-left:15px;font-size:20px}"]}),t})(),x=(()=>{class t{constructor(t,e,n){this.breakpointObserver=t,this.router=e,this.wpAuthService=n,this.isHandset$=this.breakpointObserver.observe(l.u3.Handset).pipe((0,c.U)(t=>t.matches),(0,s.d)()),this.sideBarOpen=!0,this.initializeApp(),this.Loggedin&&this.router.navigateByUrl("/dashboard")}ngOnInit(){}sideBarToggler(){this.sideBarOpen=!this.sideBarOpen}get Loggedin(){return localStorage.getItem("token")}initializeApp(){this.wpAuthService.autoAuthUser()}}return t.\u0275fac=function(e){return new(e||t)(m.Y36(l.Yg),m.Y36(r.F0),m.Y36(u.w))},t.\u0275cmp=m.Xpm({type:t,selectors:[["app-dashboard"]],decls:1,vars:0,template:function(t,e){1&t&&m._UZ(0,"app-sidebar")},directives:[q],styles:["[_nghost-%COMP%]{display:flex;flex-direction:column;height:100%}"]}),t})();function T(t,e,n,a,o,i,r){try{var l=t[i](r),c=l.value}catch(s){return void n(s)}l.done?e(c):Promise.resolve(c).then(a,o)}function C(t){return function(){var e=this,n=arguments;return new Promise(function(a,o){var i=t.apply(e,n);function r(t){T(i,a,o,r,l,"next",t)}function l(t){T(i,a,o,r,l,"throw",t)}r(void 0)})}}var v=n(2789);function U(t,e){1&t&&(m.TgZ(0,"mat-header-cell"),m._uU(1," ID. "),m.qZA())}function k(t,e){if(1&t&&(m.TgZ(0,"mat-cell"),m._uU(1),m.qZA()),2&t){const t=e.$implicit;m.xp6(1),m.hij(" ",t.user_Id," ")}}function M(t,e){1&t&&(m.TgZ(0,"mat-header-cell"),m._uU(1," Nombre "),m.qZA())}function y(t,e){if(1&t&&(m.TgZ(0,"mat-cell"),m._uU(1),m.qZA()),2&t){const t=e.$implicit;m.xp6(1),m.hij(" ",t.name," ")}}function w(t,e){1&t&&(m.TgZ(0,"mat-header-cell"),m._uU(1," Correo "),m.qZA())}function O(t,e){if(1&t&&(m.TgZ(0,"mat-cell"),m._uU(1),m.qZA()),2&t){const t=e.$implicit;m.xp6(1),m.hij(" ",t.email," ")}}function I(t,e){1&t&&(m.TgZ(0,"mat-header-cell"),m._uU(1," Creado "),m.qZA())}function J(t,e){if(1&t&&(m.TgZ(0,"mat-cell"),m._uU(1),m.ALo(2,"date"),m.qZA()),2&t){const t=e.$implicit;m.xp6(1),m.hij(" ",m.xi3(2,1,t.createdAt,"MMM d, y, h:mm:ss a")," ")}}function Q(t,e){1&t&&(m.TgZ(0,"mat-header-cell"),m._uU(1," \xdaltima modificaci\xf3n "),m.qZA())}function P(t,e){if(1&t&&(m.TgZ(0,"mat-cell"),m._uU(1),m.ALo(2,"date"),m.qZA()),2&t){const t=e.$implicit;m.xp6(1),m.hij(" ",m.xi3(2,1,t.updatedAt,"MMM d, y, h:mm:ss a")," ")}}function N(t,e){1&t&&m._UZ(0,"mat-header-row")}function L(t,e){1&t&&m._UZ(0,"mat-row")}let D=(()=>{class t{constructor(t){this.auth=t,this.displayedColumns=["ID","Nombre","Correo","Creado","Mod"],this.dataSource=new v.by}ngOnInit(){var t=this;return C(function*(){t.auth.getUsers().subscribe(e=>{t.users=e,t.dataSource.data=t.users})})()}onResize(t){this.breakpoint=t.target.innerWidth<=400?1:4}}return t.\u0275fac=function(e){return new(e||t)(m.Y36(d.e))},t.\u0275cmp=m.Xpm({type:t,selectors:[["app-history"]],decls:21,vars:3,consts:[[1,"span"],[1,"mat-elevation-z8",3,"dataSource"],["matColumnDef","ID"],[4,"matHeaderCellDef"],[4,"matCellDef"],["matColumnDef","Nombre"],["matColumnDef","Correo"],["matColumnDef","Creado"],["matColumnDef","Mod"],[4,"matHeaderRowDef"],[4,"matRowDef","matRowDefColumns"]],template:function(t,e){1&t&&(m.TgZ(0,"mat-toolbar"),m.TgZ(1,"span",0),m._uU(2,"Registros de eventos"),m.qZA(),m.qZA(),m.TgZ(3,"mat-table",1),m.ynx(4,2),m.YNc(5,U,2,0,"mat-header-cell",3),m.YNc(6,k,2,1,"mat-cell",4),m.BQk(),m.ynx(7,5),m.YNc(8,M,2,0,"mat-header-cell",3),m.YNc(9,y,2,1,"mat-cell",4),m.BQk(),m.ynx(10,6),m.YNc(11,w,2,0,"mat-header-cell",3),m.YNc(12,O,2,1,"mat-cell",4),m.BQk(),m.ynx(13,7),m.YNc(14,I,2,0,"mat-header-cell",3),m.YNc(15,J,3,4,"mat-cell",4),m.BQk(),m.ynx(16,8),m.YNc(17,Q,2,0,"mat-header-cell",3),m.YNc(18,P,3,4,"mat-cell",4),m.BQk(),m.YNc(19,N,1,0,"mat-header-row",9),m.YNc(20,L,1,0,"mat-row",10),m.qZA()),2&t&&(m.xp6(3),m.Q6J("dataSource",e.dataSource),m.xp6(16),m.Q6J("matHeaderRowDef",e.displayedColumns),m.xp6(1),m.Q6J("matRowDefColumns",e.displayedColumns))},directives:[g.Ye,v.BZ,v.w1,v.fO,v.Dz,v.as,v.nj,v.ge,v.ev,v.XQ,v.Gk],pipes:[o.uU],styles:["span[_ngcontent-%COMP%], table[_ngcontent-%COMP%]{width:100%}span[_ngcontent-%COMP%]{text-align:center;display:inline-block}.mat-form-field[_ngcontent-%COMP%]{font-size:14px;width:100%}"]}),t})();var Y=n(8844),B=n(3679),j=n(1841);new j.WM({"Content-Type":"application/json"});let S=(()=>{class t{constructor(t){this.http=t,this.locationsUrl="https://raw.githubusercontent.com/valer0ck/departamentos-ciudades-colombia/master/ciudades.json"}getDepartments(){return this.http.get(`${this.locationsUrl}`).toPromise()}}return t.\u0275fac=function(e){return new(e||t)(m.LFG(j.eN))},t.\u0275prov=m.Yz7({token:t,factory:t.\u0275fac,providedIn:"root"}),t})();var z=n(4929),H=n(3738),F=n(5384),R=n(8295),E=n(9983),$=n(3220),X=n(7441),V=n(2458);function W(t,e){if(1&t&&(m.TgZ(0,"mat-option",31),m._uU(1),m.qZA()),2&t){const t=e.$implicit;m.s9C("value",t.region),m.xp6(1),m.Oqu(t.region)}}function G(t,e){if(1&t&&(m.TgZ(0,"mat-option",31),m._uU(1),m.qZA()),2&t){const t=e.$implicit;m.s9C("value",t),m.xp6(1),m.Oqu(t.city)}}let K=(()=>{class t{constructor(t,e,n){this.fb=t,this.auth=e,this.webService=n,this.hideRequiredControl=new B.NI(!1),this.floatLabelControl=new B.NI("auto"),this.profileForm=this.fb.group({name:["",B.kI.required],lastname:["",B.kI.required],natIdCard:["",[B.kI.required,B.kI.minLength(9),B.kI.pattern(/^[0-9]\d*$/)]],DoB:["",B.kI.required],city:["",B.kI.required],department:["",B.kI.required],country:["",B.kI.required],postalcode:["",B.kI.compose([B.kI.required,B.kI.minLength(5),B.kI.maxLength(5)])],career:["",B.kI.required],skill_Id:["",B.kI.required],description:["",B.kI.required]}),this.profiles=[],this.departments=[],this.cities=[]}ngOnInit(){var t=this;return C(function*(){t.departments=yield t.webService.getDepartments()})()}deparmentChangeAction(t){this.city="";let e=this.departments.find(e=>e.region===t);e?(this.cities=e.cities,this.cities&&(this.city=this.cities[0])):this.cities=[]}get userData(){return this.auth.userlogged}onResize(t){this.breakpoint=t.target.innerWidth<=400?1:4}}return t.\u0275fac=function(e){return new(e||t)(m.Y36(B.qu),m.Y36(d.e),m.Y36(S))},t.\u0275cmp=m.Xpm({type:t,selectors:[["app-profile"]],decls:102,vars:18,consts:[[1,"span"],[1,"grid-container"],["rowHeight","400px",3,"cols","resize"],[1,"dashboard-card"],["novalidate","",3,"formGroup"],[1,"form-control-static"],["mat-icon-button","","aria-label","Toggle menu",1,"more-button",3,"matMenuTriggerFor"],["xPosition","before"],["menu","matMenu"],["mat-menu-item",""],[1,"dashboard-card-content"],[1,"mainContainer"],["appearance","fill",1,"mid-width",3,"floatLabel"],["matInput","","placeholder","Ej. Pepito","formControlName","name"],["matInput","","placeholder","Ej.","formControlName","lastname"],["matInput","","maxlength","13","placeholder","Ej. 44785210","type","number","formControlName","natIdCard"],["natIdCard",""],["matInput","","formControlName","DoB",1,"form-control",3,"matDatepicker"],["matSuffix","",3,"for"],["touchUi",""],["DateofBirth",""],["matInput","","placeholder","Ej. Abogado","formControlName","career"],["formControlName","skill_Id"],["value","option"],["matInput","","placeholder","Ej. Perez","formControlName","country"],["formControlName","department",3,"ngModel","ngModelChange","selectionChange"],["value","0"],[3,"value",4,"ngFor","ngForOf"],["name","city","formControlName","city"],["appearance","fill",1,"full-width"],["matInput","","placeholder","Ej. Empresario desde hace 12 a\xf1os..."],[3,"value"]],template:function(t,e){if(1&t&&(m.TgZ(0,"mat-toolbar"),m.TgZ(1,"span",0),m._uU(2,"Perfil"),m.qZA(),m.qZA(),m.TgZ(3,"div",1),m.TgZ(4,"mat-grid-list",2),m.NdJ("resize",function(t){return e.onResize(t)},!1,m.Jf7),m.TgZ(5,"mat-grid-tile"),m.TgZ(6,"mat-card",3),m.TgZ(7,"form",4),m.TgZ(8,"mat-card-header"),m.TgZ(9,"mat-card-title"),m._uU(10," Profile de "),m.TgZ(11,"p",5),m._uU(12,"{{userData.user.name}"),m.qZA(),m.TgZ(13,"button",6),m.TgZ(14,"mat-icon"),m._uU(15,"more_vert"),m.qZA(),m.qZA(),m.TgZ(16,"mat-menu",7,8),m.TgZ(18,"button",9),m._uU(19,"Expandir"),m.qZA(),m.TgZ(20,"button",9),m._uU(21,"Remover"),m.qZA(),m.qZA(),m.qZA(),m.qZA(),m.TgZ(22,"mat-card-content",10),m.TgZ(23,"div",11),m.TgZ(24,"mat-form-field",12),m.TgZ(25,"mat-label"),m._uU(26,"Nombre"),m.qZA(),m._UZ(27,"input",13),m.qZA(),m.TgZ(28,"mat-form-field",12),m.TgZ(29,"mat-label"),m._uU(30,"Apellido"),m.qZA(),m._UZ(31,"input",14),m.qZA(),m.TgZ(32,"mat-form-field",12),m.TgZ(33,"mat-label"),m._uU(34,"C\xe9dula"),m.qZA(),m._UZ(35,"input",15,16),m.qZA(),m.qZA(),m.TgZ(37,"div",11),m.TgZ(38,"mat-form-field",12),m.TgZ(39,"mat-label"),m._uU(40,"Fecha de nacimiento"),m.qZA(),m._UZ(41,"input",17),m._UZ(42,"mat-datepicker-toggle",18),m._UZ(43,"mat-datepicker",19,20),m.qZA(),m.TgZ(45,"mat-form-field",12),m.TgZ(46,"mat-label"),m._uU(47,"Profesi\xf3n"),m.qZA(),m._UZ(48,"input",21),m.qZA(),m.TgZ(49,"mat-form-field",12),m.TgZ(50,"mat-select",22),m.TgZ(51,"mat-option"),m._uU(52,"-- Sin seleccionar --"),m.qZA(),m.TgZ(53,"mat-option",23),m._uU(54,"Option"),m.qZA(),m.qZA(),m.TgZ(55,"mat-label"),m.TgZ(56,"mat-icon"),m._uU(57,"pen"),m.qZA(),m._uU(58,"Habilidad"),m.qZA(),m.qZA(),m.qZA(),m.TgZ(59,"div",11),m.TgZ(60,"mat-form-field",12),m.TgZ(61,"mat-label"),m._uU(62,"Pa\xeds"),m.qZA(),m._UZ(63,"input",24),m.qZA(),m.TgZ(64,"mat-form-field",12),m.TgZ(65,"mat-select",25),m.NdJ("ngModelChange",function(t){return e.department=t})("selectionChange",function(){return e.deparmentChangeAction(e.department)}),m.TgZ(66,"mat-option",26),m._uU(67,"-- Sin seleccionar --"),m.qZA(),m.YNc(68,W,2,2,"mat-option",27),m.qZA(),m.TgZ(69,"mat-label"),m.TgZ(70,"mat-icon"),m._uU(71,"face"),m.qZA(),m._uU(72," Departamento"),m.qZA(),m.qZA(),m.TgZ(73,"mat-form-field",12),m.TgZ(74,"mat-select",28),m.TgZ(75,"mat-option"),m._uU(76,"-- Sin seleccionar --"),m.qZA(),m.YNc(77,G,2,2,"mat-option",27),m.qZA(),m.TgZ(78,"mat-label"),m.TgZ(79,"mat-icon"),m._uU(80,"book"),m.qZA(),m._uU(81," Municipio"),m.qZA(),m.qZA(),m.qZA(),m.qZA(),m.qZA(),m.qZA(),m.qZA(),m.TgZ(82,"mat-grid-tile"),m.TgZ(83,"mat-card",3),m.TgZ(84,"mat-card-header"),m.TgZ(85,"mat-card-title"),m._uU(86," Comentario "),m.TgZ(87,"button",6),m.TgZ(88,"mat-icon"),m._uU(89,"more_vert"),m.qZA(),m.qZA(),m.TgZ(90,"mat-menu",7,8),m.TgZ(92,"button",9),m._uU(93,"Expandir"),m.qZA(),m.TgZ(94,"button",9),m._uU(95,"Remover"),m.qZA(),m.qZA(),m.qZA(),m.qZA(),m.TgZ(96,"mat-card-content",10),m.TgZ(97,"div"),m.TgZ(98,"mat-form-field",29),m.TgZ(99,"mat-label"),m._uU(100,"Descripci\xf3n"),m.qZA(),m._UZ(101,"textarea",30),m.qZA(),m.qZA(),m.qZA(),m.qZA(),m.qZA(),m.qZA(),m.qZA()),2&t){const t=m.MAs(17),n=m.MAs(44);m.xp6(4),m.Q6J("cols",1),m.xp6(3),m.Q6J("formGroup",e.profileForm),m.xp6(6),m.Q6J("matMenuTriggerFor",t),m.xp6(11),m.Q6J("floatLabel",e.floatLabelControl.value),m.xp6(4),m.Q6J("floatLabel",e.floatLabelControl.value),m.xp6(4),m.Q6J("floatLabel",e.floatLabelControl.value),m.xp6(6),m.Q6J("floatLabel",e.floatLabelControl.value),m.xp6(3),m.Q6J("matDatepicker",n),m.xp6(1),m.Q6J("for",n),m.xp6(3),m.Q6J("floatLabel",e.floatLabelControl.value),m.xp6(4),m.Q6J("floatLabel",e.floatLabelControl.value),m.xp6(11),m.Q6J("floatLabel",e.floatLabelControl.value),m.xp6(4),m.Q6J("floatLabel",e.floatLabelControl.value),m.xp6(1),m.Q6J("ngModel",e.department),m.xp6(3),m.Q6J("ngForOf",e.departments),m.xp6(5),m.Q6J("floatLabel",e.floatLabelControl.value),m.xp6(4),m.Q6J("ngForOf",e.cities),m.xp6(10),m.Q6J("matMenuTriggerFor",t)}},directives:[g.Ye,z.Il,z.DX,H.a8,B._Y,B.JL,B.sg,H.dk,H.n5,Z.lW,F.p6,f.Hw,F.VK,F.OP,H.dn,R.KE,R.hX,E.Nt,B.Fj,B.JJ,B.u,B.wV,B.nD,$.hl,$.nW,R.R9,$.Mq,X.gD,V.ey,o.sg],styles:[".grid-container[_ngcontent-%COMP%]{margin:20px}.dashboard-card[_ngcontent-%COMP%]{position:absolute;top:15px;left:15px;right:15px;bottom:15px}.more-button[_ngcontent-%COMP%]{position:absolute;top:5px;right:10px}.dashboard-card-content[_ngcontent-%COMP%]{text-align:center;flex-grow:1;align-items:center;max-height:100%;justify-content:center;align-items:stretch}.dashboard-card-content[_ngcontent-%COMP%], mat-card[_ngcontent-%COMP%]{display:flex;flex-direction:column}span[_ngcontent-%COMP%]{text-align:center;display:inline-block}.full-width[_ngcontent-%COMP%], span[_ngcontent-%COMP%]{width:100%}.mid-width[_ngcontent-%COMP%]{width:90%}.mat-radio-button[_ngcontent-%COMP%]{display:block;margin:5px 0}.mainContainer[_ngcontent-%COMP%]{display:flex;flex-direction:row;flex-wrap:wrap;align-items:center}.mainContainer[_ngcontent-%COMP%] > *[_ngcontent-%COMP%]{flex:1;margin-right:15px}"]}),t})();var tt=n(6927),et=n(9922),nt=n(899),at=n(4851);const ot=[{path:"",component:x,children:[{path:"",component:Y.O},{path:"profile",component:K},{path:"history",component:D},{path:"video",component:tt.j},{path:"post/:id",component:i.o},{path:"posts",component:et.O},{path:"newpost",component:nt.Q},{path:"post/login",component:at.K},{path:":user_Id",component:x},{path:"**",redirectTo:""}]}];let it=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=m.oAB({type:t}),t.\u0275inj=m.cJS({imports:[[r.Bz.forChild(ot)],r.Bz]}),t})();var rt=n(326);let lt=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=m.oAB({type:t}),t.\u0275inj=m.cJS({providers:[{provide:rt.yK,useValue:{latencyThreshold:100}}],imports:[[o.ez,it,a.m,h.SJ]]}),t})()}}]);