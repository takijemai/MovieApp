"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[870],{870:(J,p,r)=>{r.r(p),r.d(p,{MovielistPageModule:()=>F});var a=r(9808),u=r(4182),o=r(4433),c=r(3442),i=r(5e3),h=r(4850),m=r(520);let f=(()=>{class e{constructor(t){this.http=t,this.url="http://www.omdbapi.com/",this.apiKey="3c40cb83"}searchMovie(t){return this.http.get(`${this.url}?s=${encodeURI(t)}}&apikey=${this.apiKey}`).pipe((0,h.U)(s=>s.Search))}getdetails(t){return this.http.get(`${this.url}?i=${encodeURI(t)}&apikey=${this.apiKey}`)}}return e.\u0275fac=function(t){return new(t||e)(i.LFG(m.eN))},e.\u0275prov=i.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();var M=r(2796);const d=function(e){return["../","moviedetails",e]};function Z(e,n){if(1&e&&(i.TgZ(0,"ion-card",6)(1,"ion-card-header")(2,"ion-card-title"),i._uU(3),i.qZA(),i.TgZ(4,"ion-card-subtitle"),i._uU(5),i.qZA()(),i.TgZ(6,"ion-card-content"),i._UZ(7,"img",7),i.qZA()()),2&e){const t=n.$implicit;i.Q6J("routerLink",i.VKq(4,d,t.imdbID)),i.xp6(3),i.Oqu(t.Title),i.xp6(2),i.Oqu(t.Year),i.xp6(2),i.s9C("src",t.Poster,i.LSH)}}function P(e,n){if(1&e&&(i.TgZ(0,"ion-card")(1,"ion-card-header"),i._UZ(2,"ion-card-subtitle"),i.TgZ(3,"ion-card-title",9),i._uU(4),i.qZA()(),i.TgZ(5,"ion-card-content")(6,"ion-label"),i._uU(7),i.qZA(),i._UZ(8,"img",7),i.qZA()()),2&e){const t=n.$implicit;i.xp6(3),i.Q6J("routerLink",i.VKq(4,d,t.imdbID)),i.xp6(1),i.hij(" ",t.Title,""),i.xp6(3),i.hij(" ",t.Year,""),i.xp6(1),i.s9C("src",t.Poster,i.LSH)}}function T(e,n){if(1&e&&(i.TgZ(0,"div"),i.YNc(1,P,9,6,"ion-card",8),i.qZA()),2&e){const t=i.oxw();i.xp6(1),i.Q6J("ngForOf",t.movies)}}const y=[{path:"",component:(()=>{class e{constructor(t,s,l){this.router=t,this.peliculaservice=s,this.afs=l,this.movies=[],this.afs.collectionGroup("movies").get().subscribe(g=>{g.docs.forEach(v=>{this.movies.push(v.data()),console.log(v.data())})})}ngOnInit(){}logout(){this.router.navigate(["/home"])}search(){this.result=this.peliculaservice.searchMovie(this.pelicula)}}return e.\u0275fac=function(t){return new(t||e)(i.Y36(c.F0),i.Y36(f),i.Y36(M.ST))},e.\u0275cmp=i.Xpm({type:e,selectors:[["app-movielist"]],decls:12,vars:5,consts:[["slot","end"],[3,"click"],["slot","icon-only","name","exit-outline"],[3,"ngModel","ngModelChange","click"],[3,"routerLink",4,"ngFor","ngForOf"],[4,"ngIf"],[3,"routerLink"],["alt","",3,"src"],[4,"ngFor","ngForOf"],["color","primary",3,"routerLink"]],template:function(t,s){1&t&&(i.TgZ(0,"ion-header")(1,"ion-toolbar")(2,"ion-buttons",0)(3,"ion-button",1),i.NdJ("click",function(){return s.logout()}),i._UZ(4,"ion-icon",2),i.qZA()(),i.TgZ(5,"ion-title"),i._uU(6,"movielist"),i.qZA()()(),i.TgZ(7,"ion-content")(8,"ion-searchbar",3),i.NdJ("ngModelChange",function(g){return s.pelicula=g})("click",function(){return s.search()}),i.qZA(),i.YNc(9,Z,8,6,"ion-card",4),i.ALo(10,"async"),i.YNc(11,T,2,1,"div",5),i.qZA()),2&t&&(i.xp6(8),i.Q6J("ngModel",s.pelicula),i.xp6(1),i.Q6J("ngForOf",i.lcZ(10,3,s.result)),i.xp6(2),i.Q6J("ngIf",!s.pelicula))},directives:[o.Gu,o.sr,o.Sm,o.YG,o.gu,o.wd,o.W2,o.VI,o.j9,u.JJ,u.On,a.sg,o.PM,o.YI,c.rH,o.Zi,o.Dq,o.tO,o.FN,a.O5,o.Q$],pipes:[a.Ov],styles:[""]}),e})()}];let A=(()=>{class e{}return e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=i.oAB({type:e}),e.\u0275inj=i.cJS({imports:[[c.Bz.forChild(y)],c.Bz]}),e})(),F=(()=>{class e{}return e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=i.oAB({type:e}),e.\u0275inj=i.cJS({imports:[[a.ez,u.u5,o.Pc,A]]}),e})()}}]);