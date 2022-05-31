"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[3893],{3893:(F,v,n)=>{n.r(v),n.d(v,{MoviePageModule:()=>C});var c=n(9808),f=n(4182),i=n(4433),a=n(3442),e=n(5e3),g=n(9629);let h=(()=>{class t{constructor(o){this.dbService=o}resolve(){return this.dbService.getMovies()}}return t.\u0275fac=function(o){return new(o||t)(e.LFG(g.M))},t.\u0275prov=e.Yz7({token:t,factory:t.\u0275fac,providedIn:"root"}),t})();var d=n(655),p=n(7556),M=n(4111);const y=function(t){return["../","moviedetails",t]};function Z(t,s){if(1&t){const o=e.EpF();e.TgZ(0,"ion-item")(1,"ion-thumbnail",12),e._UZ(2,"img",13),e.qZA(),e.TgZ(3,"ion-label"),e._uU(4),e.qZA(),e.TgZ(5,"ion-button",14),e._uU(6,"Details"),e.qZA(),e.TgZ(7,"ion-button",15),e.NdJ("click",function(){const u=e.CHM(o).$implicit;return e.oxw(3).delete(u.payload.doc.data().imdbID)}),e._UZ(8,"ion-icon",16),e.qZA()()}if(2&t){const o=s.$implicit;e.xp6(2),e.Q6J("src",o.payload.doc.data().Poster,e.LSH),e.xp6(2),e.Oqu(o.payload.doc.data().Title),e.xp6(1),e.Q6J("routerLink",e.VKq(3,y,o.payload.doc.data().imdbID))}}function P(t,s){if(1&t&&(e.TgZ(0,"div",10)(1,"ion-list"),e.YNc(2,Z,9,5,"ion-item",11),e.qZA()()),2&t){const o=e.oxw(2);e.xp6(2),e.Q6J("ngForOf",o.items)}}function x(t,s){1&t&&(e.TgZ(0,"div",17)(1,"p"),e._uU(2,"There is no movie in the list"),e.qZA()())}function T(t,s){if(1&t&&(e.TgZ(0,"ion-content",7),e.YNc(1,P,3,1,"div",8),e.YNc(2,x,3,0,"div",9),e.qZA()),2&t){const o=e.oxw();e.xp6(1),e.Q6J("ngIf",o.items.length>0),e.xp6(1),e.Q6J("ngIf",0===o.items.length)}}const Y=function(){return["/addmovie"]},b=[{path:"",component:(()=>{class t{constructor(o,l,r,u,m,I,J){this.authservice=o,this.router=l,this.peliculaservice=r,this.route=u,this.loadingCtrl=m,this.alertCtrl=I,this.dbservice=J}ngOnInit(){this.route&&this.route.data&&this.getData()}getData(){return(0,d.mG)(this,void 0,void 0,function*(){const o=yield this.loadingCtrl.create({message:"Por favor, espere..."});this.presentLoading(o),this.route.data.subscribe(l=>{l.data.subscribe(r=>{o.dismiss(),this.items=r})})})}presentLoading(o){return(0,d.mG)(this,void 0,void 0,function*(){return yield o.present()})}delete(o){return(0,d.mG)(this,void 0,void 0,function*(){yield(yield this.alertCtrl.create({header:"Confirming delete",mode:"ios",message:"are you sure to delete",buttons:[{text:"no",role:"cancel"},{text:"yes",handler:()=>{console.log("delete pelicula"),this.dbservice.deleteMovie(o).then(r=>{console.log("pelicula eleminada")})}}]})).present()})}logout(){this.router.navigate(["/home"])}}return t.\u0275fac=function(o){return new(o||t)(e.Y36(p.e),e.Y36(a.F0),e.Y36(M.c),e.Y36(a.gz),e.Y36(i.HT),e.Y36(i.Br),e.Y36(g.M))},t.\u0275cmp=e.Xpm({type:t,selectors:[["app-movie"]],decls:10,vars:3,consts:[["color","tertiary"],["slot","end"],[3,"routerLink"],["slot","icon-only","name","add"],[3,"click"],["slot","icon-only","name","exit-outline"],["class","list-mini-content","padding","",4,"ngIf"],["padding","",1,"list-mini-content"],["class","list-mini",4,"ngIf"],["class","empty-list",4,"ngIf"],[1,"list-mini"],[4,"ngFor","ngForOf"],["slot","start"],["alt","",3,"src"],["fill","clear","slot","end",3,"routerLink"],["fill","clear","color","danger","slot","end",3,"click"],["name","trash","slot","icon-only"],[1,"empty-list"]],template:function(o,l){1&o&&(e.TgZ(0,"ion-header")(1,"ion-toolbar",0)(2,"ion-buttons",1)(3,"ion-button",2),e._UZ(4,"ion-icon",3),e.qZA(),e.TgZ(5,"ion-button",4),e.NdJ("click",function(){return l.logout()}),e._UZ(6,"ion-icon",5),e.qZA()(),e.TgZ(7,"ion-title"),e._uU(8," Movies "),e.qZA()()(),e.YNc(9,T,3,2,"ion-content",6)),2&o&&(e.xp6(3),e.Q6J("routerLink",e.DdM(2,Y)),e.xp6(6),e.Q6J("ngIf",l.items))},directives:[i.Gu,i.sr,i.Sm,i.YG,i.YI,a.rH,i.gu,i.wd,c.O5,i.W2,i.q_,c.sg,i.Ie,i.Bs,i.Q$],styles:[""]}),t})(),resolve:{data:h}},{path:"moviedetails/:id",loadChildren:()=>n.e(3447).then(n.bind(n,3447)).then(t=>t.MoviedetailsPageModule)}];let A=(()=>{class t{}return t.\u0275fac=function(o){return new(o||t)},t.\u0275mod=e.oAB({type:t}),t.\u0275inj=e.cJS({imports:[[a.Bz.forChild(b)],a.Bz]}),t})(),C=(()=>{class t{}return t.\u0275fac=function(o){return new(o||t)},t.\u0275mod=e.oAB({type:t}),t.\u0275inj=e.cJS({imports:[[c.ez,f.u5,i.Pc,A]]}),t})()}}]);