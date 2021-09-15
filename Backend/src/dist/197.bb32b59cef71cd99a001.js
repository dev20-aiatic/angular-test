(self.webpackChunkdashboard=self.webpackChunkdashboard||[]).push([[197],{1197:(t,e,i)=>{"use strict";i.r(e),i.d(e,{AuthModule:()=>H});var n=i(899),o=i(4655),r=i(3679),a=i(8259),s=i.n(a),c=i(7716),u=i(7556),g=i(8583),l=i(3738),m=i(8295),d=i(9983),p=i(6627),h=i(1095),Z=i(4885);function f(t,e){if(1&t&&(c.TgZ(0,"p",17),c._uU(1),c.qZA()),2&t){const t=c.oxw();c.xp6(1),c.Oqu(t.Msg)}}function b(t,e){if(1&t&&(c.TgZ(0,"mat-error"),c.TgZ(1,"p"),c._uU(2),c.qZA(),c.qZA()),2&t){const t=c.oxw();c.xp6(2),c.Oqu(t.Msg)}}function _(t,e){1&t&&c._UZ(0,"mat-spinner",18)}const T=function(){return["/login"]};let A=(()=>{class t{constructor(t,e,i){this.fb=t,this.authService=e,this.router=i,this.hide=!0,this.submitted=!1,this.loading=!1,this.registerForm=this.fb.group({name:[null,[r.kI.required,r.kI.minLength(4)]],email:[null,[r.kI.required,r.kI.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,4}$")]],password:[null,[r.kI.required,r.kI.minLength(8)]]})}ngOnInit(){}register(){this.loading=!0;const{name:t,email:e,password:i}=this.registerForm.value;this.authService.signup(t,e,i).subscribe(t=>{this.Msg=t.message,s().fire("Estimado usuario",this.Msg,"success"),this.loading=!1,setTimeout(()=>this.Msg="",2500),setTimeout(()=>{this.router.navigateByUrl("/dashboard")})},t=>{this.Msg=t.error.message,this.loading=!1,setTimeout(()=>this.Msg="",2500)})}}return t.\u0275fac=function(e){return new(e||t)(c.Y36(r.qu),c.Y36(u.e),c.Y36(o.F0))},t.\u0275cmp=c.Xpm({type:t,selectors:[["app-register"]],decls:47,vars:11,consts:[[1,"body"],[1,"register"],[1,"card-header","text-center"],["class","text-danger text-left",4,"ngIf"],[3,"formGroup","ngSubmit"],[4,"ngIf"],["src","./assets/img/logo.png","width","80%"],["appearance","fill",1,"ancho"],["matInput","","type","text","autofocus","off","autocomplete","off","formControlName","name"],["matSuffix",""],["matInput","","type","email","autofocus","off","autocomplete","off","formControlName","email"],["matInput","","autocomplete","off","formControlName","password",3,"type"],["mat-icon-button","","matSuffix","",3,"click"],["class","spinner","diameter","40",4,"ngIf"],["type","submit","mat-raised-button","","color","accent",1,"ancho","boton",3,"disabled"],[1,"form-group","mt-3"],[3,"routerLink"],[1,"text-danger","text-left"],["diameter","40",1,"spinner"]],template:function(t,e){1&t&&(c.TgZ(0,"div",0),c.TgZ(1,"div",1),c.TgZ(2,"div",2),c.YNc(3,f,2,1,"p",3),c.qZA(),c.TgZ(4,"mat-card"),c.TgZ(5,"mat-card-content"),c.TgZ(6,"form",4),c.NdJ("ngSubmit",function(){return e.register()}),c.YNc(7,b,3,1,"mat-error",5),c._UZ(8,"img",6),c.TgZ(9,"h2"),c._uU(10,"Registro de usuario"),c.qZA(),c.TgZ(11,"mat-form-field",7),c.TgZ(12,"mat-label"),c._uU(13,"Nombre"),c.qZA(),c._UZ(14,"input",8),c.TgZ(15,"mat-icon",9),c._uU(16,"face"),c.qZA(),c.TgZ(17,"mat-error"),c._uU(18," Debes ingresar un nombre "),c.qZA(),c.qZA(),c.TgZ(19,"mat-form-field",7),c.TgZ(20,"mat-label"),c._uU(21,"Email"),c.qZA(),c._UZ(22,"input",10),c.TgZ(23,"mat-icon",9),c._uU(24,"email"),c.qZA(),c.TgZ(25,"mat-error"),c._uU(26," Debes ingresar un correo valido "),c.qZA(),c.qZA(),c.TgZ(27,"mat-form-field",7),c.TgZ(28,"mat-label"),c._uU(29,"Contrase\xf1a"),c.qZA(),c._UZ(30,"input",11),c.TgZ(31,"button",12),c.NdJ("click",function(){return e.hide=!e.hide}),c.TgZ(32,"mat-icon"),c._uU(33),c.qZA(),c.qZA(),c.TgZ(34,"mat-error"),c._uU(35," Debes ingresar una contrase\xf1a "),c.qZA(),c.qZA(),c._UZ(36,"br"),c.YNc(37,_,1,0,"mat-spinner",13),c._UZ(38,"br"),c.TgZ(39,"button",14),c._uU(40,"Registrarse"),c.qZA(),c._UZ(41,"br"),c.qZA(),c.qZA(),c.qZA(),c.TgZ(42,"div",15),c.TgZ(43,"p"),c._uU(44," \xbfYa tienes cuenta? "),c.TgZ(45,"a",16),c._uU(46," \xa1Inicia sesi\xf3n! "),c.qZA(),c.qZA(),c.qZA(),c.qZA(),c.qZA()),2&t&&(c.xp6(3),c.Q6J("ngIf",e.Msg),c.xp6(3),c.Q6J("formGroup",e.registerForm),c.xp6(1),c.Q6J("ngIf",e.Msg),c.xp6(23),c.Q6J("type",e.hide?"password":"text"),c.xp6(1),c.uIk("aria-label","Ocultar contrase\xf1a")("aria-pressed",e.hide),c.xp6(2),c.Oqu(e.hide?"visibility_off":"visibility"),c.xp6(4),c.Q6J("ngIf",e.loading),c.xp6(2),c.Q6J("disabled",e.registerForm.invalid),c.xp6(6),c.Q6J("routerLink",c.DdM(10,T)))},directives:[g.O5,l.a8,l.dn,r._Y,r.JL,r.sg,m.KE,m.hX,d.Nt,r.Fj,r.JJ,r.u,p.Hw,m.R9,m.TO,h.lW,o.yS,Z.$g],styles:[".body[_ngcontent-%COMP%]{display:flex;justify-content:center;height:100%;align-items:center;background-color:#f5f5f5}.register[_ngcontent-%COMP%]{width:100%;max-width:330px;text-align:center}.ancho[_ngcontent-%COMP%]{width:80%}.boton[_ngcontent-%COMP%]{height:50px}mat-card[_ngcontent-%COMP%]{max-width:400px;margin:2em auto;text-align:center}.spinner[_ngcontent-%COMP%]{margin:0 auto}"]}),t})();var x=i(8851),q=i(9075),v=i(1769);function U(t,e){if(1&t&&(c.TgZ(0,"mat-error"),c.TgZ(1,"p"),c._uU(2),c.qZA(),c.qZA()),2&t){const t=c.oxw();c.xp6(2),c.Oqu(t.Msg)}}function M(t,e){1&t&&c._UZ(0,"mat-spinner",16)}const y=function(){return["/web/register"]};let k=(()=>{class t{constructor(t,e,i,n,o){this.title=t,this.fb=e,this.authService=i,this.socialAuthService=n,this.router=o,this.pageTitle="Inicio de sesi\xf3n | Dashgular",this.loading=!1,this.hide=!0,this.loginForm=this.fb.group({email:["",[r.kI.required,r.kI.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,4}$")]],password:["",[r.kI.required,r.kI.minLength(8)]]})}ngOnInit(){this.title.setTitle(this.pageTitle),this.socialAuthService.authState.subscribe(t=>{this.user=t,this.isLoggedin=null!=t,console.log(this.user)})}loginWithGoogle(){this.socialAuthService.signIn(x.tV.PROVIDER_ID),this.socialAuthService.authState.subscribe(t=>{this.authService.loginSocial({name:t.firstName,lastname:t.lastName,email:t.email,photo:t.photoUrl}).subscribe(e=>{e.success?(this.user=t,this.isLoggedin=!0,this.router.navigateByUrl("/dashboard")):console.log("No se logue\xf3 correctamente")})})}loginWithFacebook(){this.socialAuthService.signIn(x.LP.PROVIDER_ID),this.socialAuthService.authState.subscribe(t=>{this.authService.loginSocial({name:t.firstName,lastname:t.lastName,email:t.email,photo:t.photoUrl}).subscribe(e=>{e.success?(this.user=t,this.isLoggedin=!0,this.router.navigateByUrl("/dashboard")):console.log("No se logue\xf3 correctamente")})})}toggleFieldTextType(){this.fieldTextType=!this.fieldTextType}login(){this.Msg="",this.loading=!0;const{email:t,password:e}=this.loginForm.value;this.authService.login(t,e).subscribe(t=>{this.loading=!1,this.Msg=t.message,s().fire("Mensaje",this.Msg,"success"),setTimeout(()=>this.Msg="",2500),setTimeout(()=>{this.router.navigateByUrl("/dashboard")})},t=>{this.Msg=t.error.message,this.loading=!1,setTimeout(()=>this.Msg="",2500)})}}return t.\u0275fac=function(e){return new(e||t)(c.Y36(q.Dx),c.Y36(r.qu),c.Y36(u.e),c.Y36(x.xE),c.Y36(o.F0))},t.\u0275cmp=c.Xpm({type:t,selectors:[["app-login"]],decls:47,vars:10,consts:[[1,"body"],[1,"login"],[3,"formGroup","ngSubmit"],[4,"ngIf"],["src","./assets/img/logo.png","width","80%"],["appearance","fill",1,"ancho"],["matInput","","type","email","autofocus","off","formControlName","email"],["matSuffix",""],["matInput","","autocomplete","off","formControlName","password",3,"type"],["mat-icon-button","","matSuffix","",3,"click"],["class","spinner","diameter","40",4,"ngIf"],["type","submit","mat-raised-button","","color","accent",1,"ancho","boton",3,"disabled"],["mat-raised-button","","color","red",2,"margin","10px",3,"click"],["mat-raised-button","","color","blue",2,"margin","10px",3,"click"],[1,"form-group","mt-3"],[3,"routerLink"],["diameter","40",1,"spinner"]],template:function(t,e){1&t&&(c.TgZ(0,"div",0),c.TgZ(1,"div",1),c.TgZ(2,"mat-card"),c.TgZ(3,"mat-card-content"),c.TgZ(4,"form",2),c.NdJ("ngSubmit",function(){return e.login()}),c.YNc(5,U,3,1,"mat-error",3),c._UZ(6,"img",4),c.TgZ(7,"h2"),c._uU(8,"Inicio de sesi\xf3n"),c.qZA(),c.TgZ(9,"mat-form-field",5),c.TgZ(10,"mat-label"),c._uU(11,"Email"),c.qZA(),c._UZ(12,"input",6),c.TgZ(13,"mat-icon",7),c._uU(14,"email"),c.qZA(),c.TgZ(15,"mat-error"),c._uU(16," Debes ingresar un correo valido "),c.qZA(),c.qZA(),c.TgZ(17,"mat-form-field",5),c.TgZ(18,"mat-label"),c._uU(19,"Contrase\xf1a"),c.qZA(),c._UZ(20,"input",8),c.TgZ(21,"button",9),c.NdJ("click",function(){return e.hide=!e.hide}),c.TgZ(22,"mat-icon"),c._uU(23),c.qZA(),c.qZA(),c.TgZ(24,"mat-error"),c._uU(25," Debes ingresar una contrase\xf1a "),c.qZA(),c.qZA(),c._UZ(26,"br"),c.YNc(27,M,1,0,"mat-spinner",10),c.TgZ(28,"button",11),c._uU(29,"Iniciar sesi\xf3n "),c.qZA(),c.qZA(),c._UZ(30,"br"),c._UZ(31,"mat-divider"),c._UZ(32,"br"),c.TgZ(33,"button",12),c.NdJ("click",function(){return e.loginWithGoogle()}),c._uU(34,"Google "),c.TgZ(35,"mat-icon",7),c._uU(36,"login"),c.qZA(),c.qZA(),c.TgZ(37,"button",13),c.NdJ("click",function(){return e.loginWithFacebook()}),c._uU(38,"Facebook "),c.TgZ(39,"mat-icon",7),c._uU(40,"login"),c.qZA(),c.qZA(),c._UZ(41,"br"),c.qZA(),c.qZA(),c.TgZ(42,"div",14),c.TgZ(43,"p"),c._uU(44," \xbfA\xfan no tienes cuenta? "),c.TgZ(45,"a",15),c._uU(46," \xa1Reg\xedstrate Ahora! "),c.qZA(),c.qZA(),c.qZA(),c.qZA(),c.qZA()),2&t&&(c.xp6(4),c.Q6J("formGroup",e.loginForm),c.xp6(1),c.Q6J("ngIf",e.Msg),c.xp6(15),c.Q6J("type",e.hide?"password":"text"),c.xp6(1),c.uIk("aria-label","Ocultar contrase\xf1a")("aria-pressed",e.hide),c.xp6(2),c.Oqu(e.hide?"visibility_off":"visibility"),c.xp6(4),c.Q6J("ngIf",e.loading),c.xp6(1),c.Q6J("disabled",e.loginForm.invalid),c.xp6(17),c.Q6J("routerLink",c.DdM(9,y)))},directives:[l.a8,l.dn,r._Y,r.JL,r.sg,g.O5,m.KE,m.hX,d.Nt,r.Fj,r.JJ,r.u,p.Hw,m.R9,m.TO,h.lW,v.d,o.yS,Z.$g],styles:[".body[_ngcontent-%COMP%]{display:flex;justify-content:center;height:100%;align-items:center;background-color:#f5f5f5}.login[_ngcontent-%COMP%]{width:100%;max-width:330px;text-align:center}.ancho[_ngcontent-%COMP%]{width:80%}.boton[_ngcontent-%COMP%]{height:50px}.mat-card[_ngcontent-%COMP%]{max-width:auto;margin:2em auto;text-align:center}.spinner[_ngcontent-%COMP%]{margin:0 auto}.inline-buttons[_ngcontent-%COMP%]{display:inline-block;text-align:center!important}.mat-raised-button.mat-red[_ngcontent-%COMP%]{background-color:#ff5252;color:#fff}.mat-raised-button.mat-blue[_ngcontent-%COMP%]{background-color:#42a5f5;color:#fff}"]}),t})();var I=i(5072),w=i(2522),O=i(3017),C=i(7746);let J=(()=>{class t{constructor(t,e,i,n,o){this.auth=t,this.socialAuthService=e,this.route=i,this.mobileQuery=o.matchMedia("(max-width: 600px)"),this._mobileQueryListener=()=>n.detectChanges(),this.mobileQuery.addListener(this._mobileQueryListener)}ngOnInit(){this.mobileQuery.removeListener(this._mobileQueryListener)}}return t.\u0275fac=function(e){return new(e||t)(c.Y36(u.e),c.Y36(x.xE),c.Y36(o.F0),c.Y36(c.sBO),c.Y36(I.vx))},t.\u0275cmp=c.Xpm({type:t,selectors:[["app-menu"]],decls:28,vars:11,consts:[[1,"container"],["color","primary",1,"toolbar"],["mat-icon-button","",3,"click"],[1,"app-name"],[1,"sidenav-container"],["fixedTopGap","56",3,"mode","fixedInViewport"],["snav",""],[1,"list-container"],["mat-list-item","",3,"routerLink","click"]],template:function(t,e){if(1&t){const t=c.EpF();c.TgZ(0,"div",0),c.TgZ(1,"mat-toolbar",1),c.TgZ(2,"button",2),c.NdJ("click",function(){return c.CHM(t),c.MAs(9).toggle()}),c.TgZ(3,"mat-icon"),c._uU(4,"menu"),c.qZA(),c.qZA(),c.TgZ(5,"h1",3),c._uU(6,"Dashgular App"),c.qZA(),c.qZA(),c.TgZ(7,"mat-sidenav-container",4),c.TgZ(8,"mat-sidenav",5,6),c.TgZ(10,"mat-nav-list",7),c.TgZ(11,"a",8),c.NdJ("click",function(){return c.CHM(t),c.MAs(9).toggle()}),c._uU(12,"Inicio"),c.qZA(),c._UZ(13,"mat-divider"),c.TgZ(14,"a",8),c.NdJ("click",function(){return c.CHM(t),c.MAs(9).toggle()}),c._uU(15,"Registrarse"),c.qZA(),c._UZ(16,"mat-divider"),c.TgZ(17,"a",8),c.NdJ("click",function(){return c.CHM(t),c.MAs(9).toggle()}),c._uU(18," Iniciar sesi\xf3n"),c.qZA(),c._UZ(19,"mat-divider"),c.TgZ(20,"a",8),c.NdJ("click",function(){return c.CHM(t),c.MAs(9).toggle()}),c._uU(21," Video"),c.qZA(),c._UZ(22,"mat-divider"),c.TgZ(23,"a",8),c.NdJ("click",function(){return c.CHM(t),c.MAs(9).toggle()}),c._uU(24," Blog"),c.qZA(),c._UZ(25,"mat-divider"),c.qZA(),c.qZA(),c.TgZ(26,"mat-sidenav-content"),c._UZ(27,"router-outlet"),c.qZA(),c.qZA(),c.qZA()}2&t&&(c.ekj("example-is-mobile",e.mobileQuery.matches),c.xp6(7),c.Udp("margin-top",e.mobileQuery.matches?56:0,"px"),c.xp6(1),c.Q6J("mode",e.mobileQuery.matches?"over":"side")("fixedInViewport",e.mobileQuery.matches),c.xp6(3),c.Q6J("routerLink","home"),c.xp6(3),c.Q6J("routerLink","register"),c.xp6(3),c.Q6J("routerLink","/web"),c.xp6(3),c.Q6J("routerLink","video"),c.xp6(3),c.Q6J("routerLink","posts"))},directives:[w.Ye,h.lW,p.Hw,O.TM,O.JX,C.Hk,C.Tg,o.yS,v.d,O.Rh,o.lC],styles:[".container[_ngcontent-%COMP%]{display:flex;flex-direction:column;position:absolute;top:0;bottom:0;left:0;right:0}.mobile[_ngcontent-%COMP%]   .toolbar[_ngcontent-%COMP%]{position:fixed;z-index:2}h1.app-name[_ngcontent-%COMP%]{margin-left:10px}.sidenav-container[_ngcontent-%COMP%]{flex:1}.mobile[_ngcontent-%COMP%]   .sidenav-container[_ngcontent-%COMP%]{flex:1 0 auto}.mat-sidenav[_ngcontent-%COMP%]{width:220px}"]}),t})();function S(t,e){1&t&&c._UZ(0,"app-menu")}let N=(()=>{class t{constructor(t){this.router=t,this.Loggedin&&this.router.navigateByUrl("/dashboard")}get Loggedin(){return localStorage.getItem("token")}ngOnInit(){}}return t.\u0275fac=function(e){return new(e||t)(c.Y36(o.F0))},t.\u0275cmp=c.Xpm({type:t,selectors:[["app-auth"]],decls:1,vars:1,consts:[[4,"ngIf"]],template:function(t,e){1&t&&c.YNc(0,S,1,0,"app-menu",0),2&t&&c.Q6J("ngIf",!e.Loggedin)},directives:[g.O5,J],styles:[""]}),t})();var Q=i(8844),L=i(6927),P=i(9922),Y=i(8246),F=i(4851),D=i(5257),z=i(8002),B=i(4144);const E=[{path:"",component:N,children:[{path:"",component:k},{path:"register",component:A},{path:"home",component:Q.O},{path:"video",component:L.j},{path:"post/:id",component:Y.o},{path:"posts",component:P.O},{path:"wp-login",component:F.K},{path:"newpost",component:n.Q,canActivate:[(()=>{class t{constructor(t,e){this.blogService=t,this.router=e}canActivate(t,e){return this.blogService.isLoggedIn.pipe((0,D.q)(1),(0,z.U)(t=>!(!localStorage.getItem("wp-token")||!t)||(s().fire("Error","Debe iniciar sesi\xf3n para acceder a este contenido","error"),setTimeout(()=>{this.router.navigate(["/web/wp-login"])},2e3),!1)))}}return t.\u0275fac=function(e){return new(e||t)(c.LFG(B.Z),c.LFG(o.F0))},t.\u0275prov=c.Yz7({token:t,factory:t.\u0275fac,providedIn:"root"}),t})()]},{path:"**",redirectTo:""}]}];let R=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=c.oAB({type:t}),t.\u0275inj=c.cJS({imports:[[o.Bz.forChild(E)],o.Bz]}),t})();var G=i(1963);let H=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=c.oAB({type:t}),t.\u0275inj=c.cJS({imports:[[R,o.Bz,g.ez,G.m]]}),t})()}}]);