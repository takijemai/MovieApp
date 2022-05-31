"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[3823],{3823:(_,p,l)=>{l.r(p),l.d(p,{LoginPageModule:()=>M});var m=l(9808),c=l(4182),g=l(4433),u=l(3442),e=l(5e3),f=l(4941),h=l(2796),v=l(4586);let S=(()=>{class o{constructor(){}}return o.\u0275fac=function(t){return new(t||o)},o.\u0275prov=e.Yz7({token:o,factory:o.\u0275fac,providedIn:"root"}),o})(),b=(()=>{class o{constructor(t,i,n,r){this.afs=t,this.afAuth=i,this.storage=n,this.storageService=r}getMovies(){return new Promise((t,i)=>{this.afAuth.user.subscribe(n=>{n&&(this.snapshotChangesSubscription=this.afs.collection("users").doc(n.uid).collection("movies").snapshotChanges(),t(this.snapshotChangesSubscription))})})}getMovie(t){return new Promise((i,n)=>{this.afAuth.user.subscribe(r=>{r&&(this.snapshotChangesSubscription=this.afs.doc("users/"+r.uid+"/movies/"+t).valueChanges().subscribe(s=>{i(s)},s=>{n(s)}))})})}createMovie(t){return new Promise((i,n)=>{const r=JSON.parse(localStorage.getItem("user"));this.afs.collection("users").doc(r.uid).collection("movies").add(t).then(s=>i(s),s=>n(s))})}updateMovie(t,i){return new Promise((n,r)=>{const s=JSON.parse(localStorage.getItem("user"));this.afs.collection("users").doc(s.uid).collection("movies").doc(t).set(i).then(d=>n(d),d=>r(d))})}deleteMovie(t){return new Promise((i,n)=>{const r=JSON.parse(localStorage.getItem("user"));this.afs.collection("users").doc(r.uid).collection("movies").doc(t).delete().then(s=>i(s),s=>n(s))})}unsubscribeOnLogOut(){this.snapshotChangesSubscription.unsubscribe()}}return o.\u0275fac=function(t){return new(t||o)(e.LFG(h.ST),e.LFG(f.zQ),e.LFG(v.Q1),e.LFG(S))},o.\u0275prov=e.Yz7({token:o,factory:o.\u0275fac,providedIn:"root"}),o})(),L=(()=>{class o{constructor(t,i,n,r){this.afAuth=t,this.router=i,this.dbService=n,this.afs=r,this.afAuth.authState.subscribe(s=>{s?(this.userData=s,localStorage.setItem("user",JSON.stringify(this.userData)),JSON.parse(localStorage.getItem("user"))):(localStorage.setItem("user",null),JSON.parse(localStorage.getItem("user")))})}doLogin(t){return new Promise((i,n)=>{this.afAuth.signInWithEmailAndPassword(t.email,t.password).then(r=>i(r),r=>n(r))})}doLogout(){return new Promise((t,i)=>{this.afAuth.signOut().then(()=>{localStorage.removeItem("user"),this.router.navigate(["../login"]),t()}).catch(n=>{console.log(n),i()})})}signup(t){return new Promise((i,n)=>{this.afAuth.createUserWithEmailAndPassword(t.email,t.password).then(r=>{i(r),console.log(r)}).catch(r=>n(r))})}}return o.\u0275fac=function(t){return new(t||o)(e.LFG(f.zQ),e.LFG(u.F0),e.LFG(b),e.LFG(h.ST))},o.\u0275prov=e.Yz7({token:o,factory:o.\u0275fac,providedIn:"root"}),o})();function P(o,a){if(1&o&&(e.TgZ(0,"div",11),e._uU(1),e.qZA()),2&o){const t=e.oxw().$implicit;e.xp6(1),e.hij(" ",t.message," ")}}function Z(o,a){if(1&o&&(e.ynx(0),e.YNc(1,P,2,1,"div",12),e.BQk()),2&o){const t=a.$implicit,i=e.oxw();e.xp6(1),e.Q6J("ngIf",i.formValidation.get("email").hasError(t.type)&&(i.formValidation.get("email").dirty||i.formValidation.get("email").touched))}}function A(o,a){if(1&o&&(e.TgZ(0,"div",11),e._uU(1),e.qZA()),2&o){const t=e.oxw().$implicit;e.xp6(1),e.hij(" ",t.message," ")}}function y(o,a){if(1&o&&(e.ynx(0),e.YNc(1,A,2,1,"div",12),e.BQk()),2&o){const t=a.$implicit,i=e.oxw();e.xp6(1),e.Q6J("ngIf",i.formValidation.get("password").hasError(t.type)&&(i.formValidation.get("password").dirty||i.formValidation.get("password").touched))}}const w=[{path:"",component:(()=>{class o{constructor(t,i,n){this.authService=t,this.formBuilder=i,this.router=n,this.errorMessage="",this.formValidationMessages={email:[{type:"required",message:"El email es un campo obligatorio."},{type:"pattern",message:"El formato del email no es correcto."}],password:[{type:"required",message:"La contrase\xf1a es un campo obligatorio."},{type:"minlength",message:"La l\xf3ngitud m\xednima de una contrase\xf1a es 6 caracteres."}]}}ngOnInit(){this.formValidation=this.formBuilder.group({email:new c.NI("",c.kI.compose([c.kI.required,c.kI.pattern("^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$")])),password:new c.NI("",c.kI.compose([c.kI.minLength(6),c.kI.required]))})}tryLogin(t){this.authService.doLogin(t).then(i=>{this.router.navigate(["../movie"])},i=>{this.errorMessage=i.message,console.log(i)})}}return o.\u0275fac=function(t){return new(t||o)(e.Y36(L),e.Y36(c.qu),e.Y36(u.F0))},o.\u0275cmp=e.Xpm({type:o,selectors:[["app-login"]],decls:29,vars:4,consts:[["src","../../assets/img/loginn.png","alt","",1,"img"],["id","loginForm","formGroup","formValidation",1,"form",3,"ngSubmit"],[1,"label-title"],[1,"form-group"],["position","floating","color","primary"],["type","text","formControlName","email",1,"form-control"],[4,"ngFor","ngForOf"],["type","password","formControlName","password",1,"form-control"],[1,"div-button-login"],["id","btnSubmit","type","submit",3,"disabled"],[1,"div-label-error"],[1,"error-message"],["class","error-message",4,"ngIf"]],template:function(t,i){1&t&&(e.TgZ(0,"ion-header")(1,"ion-toolbar")(2,"ion-title"),e._uU(3,"Login"),e.qZA(),e._UZ(4,"ion-back-button"),e.qZA()(),e.TgZ(5,"ion-content"),e._UZ(6,"img",0),e.TgZ(7,"form",1),e.NdJ("ngSubmit",function(){return i.tryLogin(i.formValidation.value)}),e.TgZ(8,"ion-item")(9,"ion-label",2),e._uU(10,"Please Insert Your corrects Informations: "),e.qZA()(),e.TgZ(11,"ion-item",3)(12,"ion-label",4),e._uU(13,"Email: "),e.qZA(),e._UZ(14,"ion-input",5),e.qZA(),e.TgZ(15,"div"),e.YNc(16,Z,2,1,"ng-container",6),e.qZA(),e.TgZ(17,"ion-item",3)(18,"ion-label",4),e._uU(19,"Password: "),e.qZA(),e._UZ(20,"ion-input",7),e.qZA(),e.TgZ(21,"div"),e.YNc(22,y,2,1,"ng-container",6),e.qZA(),e.TgZ(23,"div",8)(24,"ion-button",9),e._uU(25,"LogIn "),e.qZA()(),e.TgZ(26,"div",10)(27,"ion-label",11),e._uU(28),e.qZA()()()()),2&t&&(e.xp6(16),e.Q6J("ngForOf",i.formValidationMessages.email),e.xp6(6),e.Q6J("ngForOf",i.formValidationMessages.password),e.xp6(2),e.Q6J("disabled",!i.formValidation.valid),e.xp6(4),e.Oqu(i.errorMessage))},directives:[g.Gu,g.sr,g.wd,g.oU,g.cs,g.W2,c._Y,c.JL,g.Ie,g.Q$,g.pK,g.j9,c.JJ,m.sg,m.O5,g.YG],styles:[".form[_ngcontent-%COMP%]{margin-top:50px}.label-title[_ngcontent-%COMP%]{font-weight:500;margin-bottom:20px}.div-button-login[_ngcontent-%COMP%]{text-align:center;margin-top:20px}.div-label-error[_ngcontent-%COMP%]{text-align:center;margin-top:10px}.error-message[_ngcontent-%COMP%]{color:var(--ion-color-danger);font-size:smaller;padding:10px}.img[_ngcontent-%COMP%]{height:40%}"]}),o})()}];let I=(()=>{class o{}return o.\u0275fac=function(t){return new(t||o)},o.\u0275mod=e.oAB({type:o}),o.\u0275inj=e.cJS({imports:[[u.Bz.forChild(w)],u.Bz]}),o})(),M=(()=>{class o{}return o.\u0275fac=function(t){return new(t||o)},o.\u0275mod=e.oAB({type:o}),o.\u0275inj=e.cJS({imports:[[m.ez,c.u5,g.Pc,I]]}),o})()}}]);