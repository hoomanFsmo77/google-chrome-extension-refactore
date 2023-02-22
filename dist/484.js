"use strict";(self.webpackChunktemplate=self.webpackChunktemplate||[]).push([[484],{767:(e,n,t)=>{t.d(n,{Z:()=>C});var r=t(252),i=t(262),a=t(577),o=t(746),c=t(346),l=t(866),s={key:0,class:"price-card"},u={key:0,class:"out_trending_message text-left mb-[8px] w-full text-0.9 m-0 leading-1 text-red-500"},f={class:"flex justify-between items-center"},p={class:"price-details"},g=["src"],d={class:"font-700 text-1 mb-0.2"},_={class:"text-green-500 text-0.6"},h={class:"text-gray-600 text-0.8"},m=(0,r._)("span",{class:"mx-0.3"},"|",-1),v={class:"icon-wrapper"},w={class:"icon-wrapper"},x=(0,r._)("p",{class:"h6 text-center mb-0.5"},"Please sign in/sign up to continue",-1),y={class:"mb-0.5 flex justify-center"},b=["innerHTML"],k={class:"mb-0.5 flex justify-center"};const C=(0,r.aZ)({__name:"PriceCard",props:{icon:null,coinName:null,abbName:null,price:null,hasRing:null,coinId:null,outTrending:{type:Boolean},price_change_percentage_24h:null},setup:function(e){var n=e,t=(n.coinName,n.abbName,n.icon,n.price,n.price_change_percentage_24h,n.coinId,n.hasRing,n.outTrending,(0,c._)()),C=t.userFavHandler,S=t.modalFlag,U=t.closeModal,j=t.removeCoin,I=t.show,D=(0,l.OY)().userStore,T=function(){var e=(0,l.OY)(),n=e.loginStatus,t=e.userStore,r=(0,i.qj)({trigger:!1,msg:""});return{setAlert:function(e){n.value&&(t.alertHandler(e,r),r.trigger=!0)},alertModalInfo:r,closeAlertModal:function(){r.trigger=!1}}}(),Y=T.setAlert,Z=T.alertModalInfo,H=T.closeAlertModal;return function(n,t){var c=(0,r.up)("font-awesome-icon"),l=(0,r.up)("router-link");return(0,r.wg)(),(0,r.iD)(r.HY,null,[(0,i.SU)(I)?((0,r.wg)(),(0,r.iD)("div",s,[e.outTrending?((0,r.wg)(),(0,r.iD)("p",u,"This coin is out of trending now.")):(0,r.kq)("v-if",!0),e.outTrending?((0,r.wg)(),(0,r.j4)(c,{key:1,onClick:t[0]||(t[0]=function(n){return(0,i.SU)(j)(e.coinId)}),class:"absolute top-[-4px] text-light py-[4px] px-[6px] bg-red-500 rounded-full right-[-5px] cursor-pointer",icon:"fa-solid fa-x"})):(0,r.kq)("v-if",!0),(0,r._)("div",f,[(0,r._)("div",p,[(0,r._)("img",{src:e.icon,width:"30",alt:""},null,8,g),(0,r._)("div",null,[(0,r._)("p",d,[(0,r.Uk)((0,a.zw)(e.coinName)+" ",1),(0,r._)("sub",_,(0,a.zw)(e.abbName.toUpperCase()),1)]),(0,r._)("p",null,[(0,r._)("span",h,(0,a.zw)(e.price)+"$",1),m,(0,r._)("span",{class:(0,a.C_)("".concat(e.price_change_percentage_24h).includes("-")?"text-red-600":"text-green-600")},[(0,r.Wm)(c,{class:"text-0.6",icon:"".concat(e.price_change_percentage_24h).includes("-")?"fa-arrow-down-long":"fa-arrow-up-long"},null,8,["icon"]),(0,r.Uk)(" "+(0,a.zw)(e.price_change_percentage_24h.toFixed(3))+"% ",1)],2)])])]),(0,r._)("div",null,["no"===e.hasRing?((0,r.wg)(),(0,r.iD)("button",{key:0,onClick:t[1]||(t[1]=function(n){return(0,i.SU)(C)(e.coinId)})},[(0,r._)("span",v,[(0,r.Wm)(c,{class:(0,a.C_)(["text-1.1",(0,i.SU)(D).isCoinExist(e.coinId)?"text-green-600":"text-gray-600"]),icon:"fa-solid fa-heart"},null,8,["class"])])])):((0,r.wg)(),(0,r.iD)("button",{key:1,onClick:t[2]||(t[2]=function(n){return(0,i.SU)(Y)(e.coinId)})},[(0,r._)("span",w,[(0,r.Wm)(c,{class:(0,a.C_)([(0,i.SU)(D).isAlertSet(e.coinId)?"text-red-600":"text-gray-600","text-1.1"]),icon:"fa-solid fa-bell"},null,8,["class"])])]))])])])):(0,r.kq)("v-if",!0),(0,r.Wm)(o.Z,{onClose:(0,i.SU)(U),"is-shown":(0,i.SU)(S)},{default:(0,r.w5)((function(){return[x,(0,r._)("div",y,[(0,r.Wm)(l,{class:"btn btn-primary",to:{name:"index-user"},onClick:(0,i.SU)(U)},{default:(0,r.w5)((function(){return[(0,r.Uk)(" Continue ")]})),_:1},8,["onClick"])])]})),_:1},8,["onClose","is-shown"]),(0,r.Wm)(o.Z,{onClose:(0,i.SU)(H),"is-shown":(0,i.SU)(Z).trigger},{default:(0,r.w5)((function(){return[(0,r._)("p",{class:"h6 text-center mb-0.5",innerHTML:(0,i.SU)(Z).msg},null,8,b),(0,r._)("div",k,[(0,r._)("button",{class:"btn btn-primary",onClick:t[3]||(t[3]=function(){for(var e=[],n=0;n<arguments.length;n++)e[n]=arguments[n];return(0,i.SU)(H)&&(0,i.SU)(H).apply(void 0,e)})}," Close ")])]})),_:1},8,["onClose","is-shown"])],64)}}})},451:(e,n,t)=>{t.r(n),t.d(n,{default:()=>b});var r=t(252),i=t(262),a={id:"is-not-login",class:"flex flex-col justify-center items-center"},o=(0,r._)("img",{width:"250",src:"/images/login.svg",alt:""},null,-1),c=(0,r._)("h5",{class:"text-primary text-center my-0.5"},"You're not signed in yet.",-1);const l={},s=(0,t(744).Z)(l,[["render",function(e,n){var t=(0,r.up)("router-link");return(0,r.wg)(),(0,r.iD)("div",a,[o,c,(0,r.Wm)(t,{to:{name:"index-user"},class:"btn btn-warning"},{default:(0,r.w5)((function(){return[(0,r.Uk)("Login")]})),_:1})])}]]);var u=t(577),f=t(116),p=t(767),g=t(866),d=t(282),_=function(e,n,t,r){return new(t||(t=Promise))((function(i,a){function o(e){try{l(r.next(e))}catch(e){a(e)}}function c(e){try{l(r.throw(e))}catch(e){a(e)}}function l(e){var n;e.done?i(e.value):(n=e.value,n instanceof t?n:new t((function(e){e(n)}))).then(o,c)}l((r=r.apply(e,n||[])).next())}))},h=function(e,n){var t,r,i,a,o={label:0,sent:function(){if(1&i[0])throw i[1];return i[1]},trys:[],ops:[]};return a={next:c(0),throw:c(1),return:c(2)},"function"==typeof Symbol&&(a[Symbol.iterator]=function(){return this}),a;function c(c){return function(l){return function(c){if(t)throw new TypeError("Generator is already executing.");for(;a&&(a=0,c[0]&&(o=0)),o;)try{if(t=1,r&&(i=2&c[0]?r.return:c[0]?r.throw||((i=r.return)&&i.call(r),0):r.next)&&!(i=i.call(r,c[1])).done)return i;switch(r=0,i&&(c=[2&c[0],i.value]),c[0]){case 0:case 1:i=c;break;case 4:return o.label++,{value:c[1],done:!1};case 5:o.label++,r=c[1],c=[0];continue;case 7:c=o.ops.pop(),o.trys.pop();continue;default:if(!(i=o.trys,(i=i.length>0&&i[i.length-1])||6!==c[0]&&2!==c[0])){o=0;continue}if(3===c[0]&&(!i||c[1]>i[0]&&c[1]<i[3])){o.label=c[1];break}if(6===c[0]&&o.label<i[1]){o.label=i[1],i=c;break}if(i&&o.label<i[2]){o.label=i[2],o.ops.push(c);break}i[2]&&o.ops.pop(),o.trys.pop();continue}c=n.call(e,o)}catch(e){c=[6,e],r=0}finally{t=i=0}if(5&c[0])throw c[1];return{value:c[0]?c[1]:void 0,done:!0}}([c,l])}}},m=t(300),v={key:1,class:"flex justify-center items-center flex-col p-1",id:"no-fav-list"},w=[(0,r._)("img",{src:"/images/fav.svg",width:"250",alt:""},null,-1),(0,r._)("h6",{class:"text-center mt-1 text-primary"},"You are not following any cryptocurrencies yet.",-1)];const x=(0,r.aZ)({__name:"FollowingList",setup:function(e){var n=(0,g.OY)().favCoinLength,t=function(){var e=(0,g.OY)().favCoinList,n=(0,i.iH)([]),t=(0,i.iH)(!0);return(0,r.bv)((function(){return _(void 0,void 0,void 0,(function(){var r,i,a;return h(this,(function(o){switch(o.label){case 0:t.value=!0,r=e.value.join("%2C"),o.label=1;case 1:return o.trys.push([1,3,4,5]),[4,(0,d.Wg)("https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&ids=".concat(r,"&order=market_cap_desc&per_page=250&page=1&sparkline=false&price_change_percentage=24"))];case 2:return i=o.sent(),n.value=i,[3,5];case 3:return a=o.sent(),console.log(a),[3,5];case 4:return t.value=!1,[7];case 5:return[2]}}))}))})),{coinInfoContainer:n,activePreloader:t}}(),a=t.coinInfoContainer,o=t.activePreloader,c=(0,g._c)(),l=c.trendingList,s=c.trendingIds,x=function(e){if(l.value.length>0)return!s.value.includes(e)&&!m.xX.includes(e)};return function(e,t){return(0,i.SU)(n)>0?((0,r.wg)(),(0,r.iD)("section",{key:0,id:"has-fav-list",class:(0,u.C_)([{"h-[200px]":(0,i.SU)(o)},"flex justify-center relative items-center flex-col p-1"])},[(0,i.SU)(o)?((0,r.wg)(),(0,r.j4)(f.Z,{key:0})):((0,r.wg)(!0),(0,r.iD)(r.HY,{key:1},(0,r.Ko)((0,i.SU)(a),(function(e,n){return(0,r.wg)(),(0,r.j4)(p.Z,{key:n,"has-ring":"yes",icon:e.image,"coin-id":e.id,"coin-name":e.name,"abb-name":e.symbol,price:e.current_price,price_change_percentage_24h:e.price_change_percentage_24h,outTrending:x(e.id)},null,8,["icon","coin-id","coin-name","abb-name","price","price_change_percentage_24h","outTrending"])})),128))],2)):((0,r.wg)(),(0,r.iD)("section",v,w))}}});var y={id:"following",class:"overflow-y-auto p-0.5 h-[300px]"};const b=(0,r.aZ)({__name:"following",setup:function(e){var n=(0,g.OY)().loginStatus;return function(e,t){return(0,r.wg)(),(0,r.iD)("section",y,[(0,i.SU)(n)?((0,r.wg)(),(0,r.j4)(x,{key:0})):((0,r.wg)(),(0,r.j4)(s,{key:1}))])}}})}}]);