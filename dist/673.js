"use strict";(self.webpackChunktemplate=self.webpackChunktemplate||[]).push([[673],{866:(t,e,n)=>{n.d(e,{f7:()=>d,_c:()=>v,OY:()=>p});var r=n(305),i=n(282),o=n(300),a=function(t,e,n,r){return new(n||(n=Promise))((function(i,o){function a(t){try{c(r.next(t))}catch(t){o(t)}}function s(t){try{c(r.throw(t))}catch(t){o(t)}}function c(t){var e;t.done?i(t.value):(e=t.value,e instanceof n?e:new n((function(t){t(e)}))).then(a,s)}c((r=r.apply(t,e||[])).next())}))},s=function(t,e){var n,r,i,o,a={label:0,sent:function(){if(1&i[0])throw i[1];return i[1]},trys:[],ops:[]};return o={next:s(0),throw:s(1),return:s(2)},"function"==typeof Symbol&&(o[Symbol.iterator]=function(){return this}),o;function s(s){return function(c){return function(s){if(n)throw new TypeError("Generator is already executing.");for(;o&&(o=0,s[0]&&(a=0)),a;)try{if(n=1,r&&(i=2&s[0]?r.return:s[0]?r.throw||((i=r.return)&&i.call(r),0):r.next)&&!(i=i.call(r,s[1])).done)return i;switch(r=0,i&&(s=[2&s[0],i.value]),s[0]){case 0:case 1:i=s;break;case 4:return a.label++,{value:s[1],done:!1};case 5:a.label++,r=s[1],s=[0];continue;case 7:s=a.ops.pop(),a.trys.pop();continue;default:if(!(i=a.trys,(i=i.length>0&&i[i.length-1])||6!==s[0]&&2!==s[0])){a=0;continue}if(3===s[0]&&(!i||s[1]>i[0]&&s[1]<i[3])){a.label=s[1];break}if(6===s[0]&&a.label<i[1]){a.label=i[1],i=s;break}if(i&&a.label<i[2]){a.label=i[2],a.ops.push(s);break}i[2]&&a.ops.pop(),a.trys.pop();continue}s=e.call(t,a)}catch(t){s=[6,t],r=0}finally{n=i=0}if(5&s[0])throw s[1];return{value:s[0]?s[1]:void 0,done:!0}}([s,c])}}},c=(0,r.Q_)("popular",{state:function(){return{coinList:[],fetchFlag:!1}},getters:{getCoinList:function(t){return t.coinList},getFetchFlag:function(t){return t.fetchFlag},getFilteredCoinList:function(){return function(t){var e=[];return o.xX.forEach((function(n){t.forEach((function(t){n===t.id&&e.push(t)}))})),e}},getBitCoinPrice:function(t){if(t.fetchFlag)return t.coinList.filter((function(t){return"bitcoin"===t.id}))[0].current_price}},actions:{setCoinList:function(){return a(this,void 0,void 0,(function(){var t,e;return s(this,(function(n){switch(n.label){case 0:this.fetchFlag=!1,n.label=1;case 1:return n.trys.push([1,3,4,5]),[4,(0,i.Wg)("https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=200&page=1&sparkline=false&price_change_percentage=1h")];case 2:return t=n.sent(),this.coinList=this.getFilteredCoinList(t),[3,5];case 3:return e=n.sent(),console.warn(e,"in popular store"),[3,5];case 4:return this.fetchFlag=!0,[7];case 5:return[2]}}))}))}}}),u=n(188),l=function(t,e,n,r){return new(n||(n=Promise))((function(i,o){function a(t){try{c(r.next(t))}catch(t){o(t)}}function s(t){try{c(r.throw(t))}catch(t){o(t)}}function c(t){var e;t.done?i(t.value):(e=t.value,e instanceof n?e:new n((function(t){t(e)}))).then(a,s)}c((r=r.apply(t,e||[])).next())}))},f=function(t,e){var n,r,i,o,a={label:0,sent:function(){if(1&i[0])throw i[1];return i[1]},trys:[],ops:[]};return o={next:s(0),throw:s(1),return:s(2)},"function"==typeof Symbol&&(o[Symbol.iterator]=function(){return this}),o;function s(s){return function(c){return function(s){if(n)throw new TypeError("Generator is already executing.");for(;o&&(o=0,s[0]&&(a=0)),a;)try{if(n=1,r&&(i=2&s[0]?r.return:s[0]?r.throw||((i=r.return)&&i.call(r),0):r.next)&&!(i=i.call(r,s[1])).done)return i;switch(r=0,i&&(s=[2&s[0],i.value]),s[0]){case 0:case 1:i=s;break;case 4:return a.label++,{value:s[1],done:!1};case 5:a.label++,r=s[1],s=[0];continue;case 7:s=a.ops.pop(),a.trys.pop();continue;default:if(!(i=a.trys,(i=i.length>0&&i[i.length-1])||6!==s[0]&&2!==s[0])){a=0;continue}if(3===s[0]&&(!i||s[1]>i[0]&&s[1]<i[3])){a.label=s[1];break}if(6===s[0]&&a.label<i[1]){a.label=i[1],i=s;break}if(i&&a.label<i[2]){a.label=i[2],a.ops.push(s);break}i[2]&&a.ops.pop(),a.trys.pop();continue}s=e.call(t,a)}catch(t){s=[6,t],r=0}finally{n=i=0}if(5&s[0])throw s[1];return{value:s[0]?s[1]:void 0,done:!0}}([s,c])}}},h=(0,r.Q_)("search",{state:function(){return{searchText:"",searchResult:[],searchFlag:!1,trendingList:[],trendingFlag:!1}},getters:{getSearchResult:function(t){return t.searchResult},getSearchFlag:function(t){return t.searchFlag},getTrendingList:function(t){return t.trendingList},getTrendingFlag:function(t){return t.trendingFlag},getTrendingIds:function(t){var e=[];return t.trendingList.forEach((function(t){e.push(t.item.id)})),e}},actions:{triggerSearch:function(t){return l(this,void 0,void 0,(function(){var e,n;return f(this,(function(r){switch(r.label){case 0:this.searchText=t,this.searchFlag=!1,r.label=1;case 1:return r.trys.push([1,3,4,5]),[4,(0,i.Wg)("https://api.coingecko.com/api/v3/search",{query:{query:t}})];case 2:return e=r.sent(),this.searchResult=e.coins,[3,5];case 3:return n=r.sent(),console.warn(n,"in search store"),[3,5];case 4:return this.searchFlag=!0,[7];case 5:return[2]}}))}))},triggerTrendingList:function(){return l(this,void 0,void 0,(function(){var t,e;return f(this,(function(n){switch(n.label){case 0:this.trendingFlag=!1,n.label=1;case 1:return n.trys.push([1,3,4,5]),[4,(0,i.Wg)("https://api.coingecko.com/api/v3/search/trending")];case 2:return t=n.sent(),this.trendingList=t.coins,[3,5];case 3:return e=n.sent(),console.log(e,"in search store"),[3,5];case 4:return this.trendingFlag=!0,[7];case 5:return[2]}}))}))}}}),g=n(252),d=function(){var t=c(),e=(0,g.Fl)((function(){return t.getCoinList})),n=(0,g.Fl)((function(){return t.getFetchFlag})),r=(0,g.Fl)((function(){return t.getBitCoinPrice}));return{popularStore:t,popularCoinLists:e,fetchFlag:n,bitcoinPrice:r}},p=function(){var t=(0,u.L)(),e=(0,g.Fl)((function(){return t.getLoginStatus})),n=(0,g.Fl)((function(){return t.signUpFetchFlag})),r=(0,g.Fl)((function(){return t.signInErrorFlag})),i=(0,g.Fl)((function(){return t.email})),o=(0,g.Fl)((function(){return t.getFavCoinLength})),a=(0,g.Fl)((function(){return t.getFavCoinList}));return{loginStatus:e,userStore:t,signUpFetchFlag:n,signInErrorFlag:r,userEmail:i,favCoinLength:o,favCoinList:a}},v=function(){var t=h(),e=(0,g.Fl)((function(){return t.searchResult})),n=(0,g.Fl)((function(){return t.getSearchFlag})),r=(0,g.Fl)((function(){return t.searchText})),i=(0,g.Fl)((function(){return t.getTrendingList})),o=(0,g.Fl)((function(){return t.getTrendingFlag})),a=(0,g.Fl)((function(){return t.getTrendingIds}));return{searchStore:t,searchResult:e,searchFlag:n,searchText:r,trendingList:i,trendingFlag:o,trendingIds:a}}},346:(t,e,n)=>{n.d(e,{_:()=>o});var r=n(866),i=n(262),o=function(){var t=(0,r.OY)().userStore,e=(0,i.iH)(!1);return{userFavHandler:function(n){t.loginStatus?(e.value=!1,t.favHandler(n)):e.value=!0},modalFlag:e,closeModal:function(){e.value=!1}}}},598:(t,e,n)=>{n.d(e,{Z:()=>x});var r=n(252),i=n(577),o=n(262),a=n(746),s=n(346),c=n(866),u={key:0,class:"price-card"},l={key:0,class:"out_trending_message text-left mb-[8px] w-full text-0.9 m-0 leading-1 text-red-500"},f={class:"flex justify-between items-center"},h={class:"price-details"},g=["src"],d={class:"font-700 text-1 mb-0.2"},p={class:"text-green-500 text-0.6"},v={class:"text-gray-600 text-0.8"},m=(0,r._)("span",{class:"mx-0.3"},"|",-1),w={class:"icon-wrapper"},y={key:1},b={class:"icon-wrapper"},_=(0,r._)("p",{class:"h6 text-center mb-0.5"},"Please sign in/sign up to continue",-1),F={class:"mb-0.5 flex justify-center"};const x=(0,r.aZ)({__name:"PriceCard",props:{icon:null,coinName:null,abbName:null,price:null,hasRing:null,coinId:null,outTrending:{type:Boolean},price_change_percentage_24h:null},setup:function(t){var e=t,n=(e.coinName,e.abbName,e.icon,e.price,e.price_change_percentage_24h,e.coinId,e.hasRing,e.outTrending,(0,o.iH)(!0)),x=(0,s._)(),S=x.userFavHandler,k=x.modalFlag,C=x.closeModal,L=(0,c.OY)().userStore;return function(e,s){var c=(0,r.up)("font-awesome-icon"),x=(0,r.up)("router-link");return(0,r.wg)(),(0,r.iD)(r.HY,null,[n.value?((0,r.wg)(),(0,r.iD)("div",u,[t.outTrending?((0,r.wg)(),(0,r.iD)("p",l,"This coin is out of trending now.")):(0,r.kq)("v-if",!0),t.outTrending?((0,r.wg)(),(0,r.j4)(c,{key:1,onClick:s[0]||(s[0]=function(e){return r=t.coinId,L.removeCoinFromFavList(r),void(n.value=!1);var r}),class:"absolute top-[-4px] text-light py-[4px] px-[6px] bg-red-500 rounded-full right-[-5px] cursor-pointer",icon:"fa-solid fa-x"})):(0,r.kq)("v-if",!0),(0,r._)("div",f,[(0,r._)("div",h,[(0,r._)("img",{src:t.icon,width:"30",alt:""},null,8,g),(0,r._)("div",null,[(0,r._)("p",d,[(0,r.Uk)((0,i.zw)(t.coinName)+" ",1),(0,r._)("sub",p,(0,i.zw)(t.abbName.toUpperCase()),1)]),(0,r._)("p",null,[(0,r._)("span",v,(0,i.zw)(t.price)+"$",1),m,(0,r._)("span",{class:(0,i.C_)("".concat(t.price_change_percentage_24h).includes("-")?"text-red-600":"text-green-600")},[(0,r.Wm)(c,{class:"text-0.6",icon:"".concat(t.price_change_percentage_24h).includes("-")?"fa-arrow-down-long":"fa-arrow-up-long"},null,8,["icon"]),(0,r.Uk)(" "+(0,i.zw)(t.price_change_percentage_24h.toFixed(3))+"% ",1)],2)])])]),(0,r._)("div",null,["no"===t.hasRing?((0,r.wg)(),(0,r.iD)("button",{key:0,onClick:s[1]||(s[1]=function(e){return(0,o.SU)(S)(t.coinId)})},[(0,r._)("span",w,[(0,r.Wm)(c,{class:(0,i.C_)(["text-1.1",(0,o.SU)(L).isCoinExist(t.coinId)?"text-green-600":"text-gray-600"]),icon:"fa-solid fa-heart"},null,8,["class"])])])):((0,r.wg)(),(0,r.iD)("button",y,[(0,r._)("span",b,[(0,r.Wm)(c,{class:"text-1.1 text-gray-600",icon:"fa-solid fa-bell"})])]))])])])):(0,r.kq)("v-if",!0),(0,r.Wm)(a.Z,{onClose:(0,o.SU)(C),"is-shown":(0,o.SU)(k)},{default:(0,r.w5)((function(){return[_,(0,r._)("div",F,[(0,r.Wm)(x,{class:"btn btn-primary",to:{name:"index-user"},onClick:(0,o.SU)(C)},{default:(0,r.w5)((function(){return[(0,r.Uk)(" Continue ")]})),_:1},8,["onClick"])])]})),_:1},8,["onClose","is-shown"])],64)}}})},116:(t,e,n)=>{n.d(e,{Z:()=>c});var r=n(252),i=n(262),o=n(577);var a=((t,e)=>{const n=t.__vccOpts||t;for(const[t,r]of e)n[t]=r;return n})({name:"HollowDotsSpinner",props:{animationDuration:{type:Number,default:1e3},dotSize:{type:Number,default:15},dotsNum:{type:Number,default:3},color:{type:String,default:"#fff"}},computed:{horizontalMargin(){return this.dotSize/2},spinnerStyle(){return{height:`${this.dotSize}px`,width:(this.dotSize+2*this.horizontalMargin)*this.dotsNum+"px"}},dotStyle(){return{animationDuration:`${this.animationDuration}ms`,width:`${this.dotSize}px`,height:`${this.dotSize}px`,margin:`0 ${this.horizontalMargin}px`,borderWidth:this.dotSize/5+"px",borderColor:this.color}},dotsStyles(){const t=[],e=this.animationDuration;for(let n=1;n<=this.dotsNum;n++)t.push({animationDelay:e*n*.3+"ms",...this.dotStyle});return t}}},[["render",function(t,e,n,i,a,s){return(0,r.wg)(),(0,r.iD)("div",{class:"hollow-dots-spinner",style:(0,o.j5)(s.spinnerStyle)},[((0,r.wg)(!0),(0,r.iD)(r.HY,null,(0,r.Ko)(s.dotsStyles,((t,e)=>((0,r.wg)(),(0,r.iD)("div",{key:e,class:"dot",style:(0,o.j5)(t)},null,4)))),128))],4)}]]),s={class:"absolute w-full h-full flex justify-center items-center left-0 top-0"};const c=(0,r.aZ)({__name:"PLoader",setup:function(t){return function(t,e){return(0,r.wg)(),(0,r.iD)("div",s,[(0,r.Wm)((0,i.SU)(a),{"animation-duration":1e3,"dot-size":25,"dots-num":3,color:"#29abe1"})])}}})},746:(t,e,n)=>{n.d(e,{Z:()=>u});var r=n(252),i={class:"modal"},o={class:"modal-header"},a=(0,r._)("h5",null,"Message from MultiCoin",-1),s={class:"modal-body"},c={class:"overlay"};const u=(0,r.aZ)({__name:"VModal",props:{isShown:{type:Boolean}},emits:["close"],setup:function(t,e){var n=e.emit,u=t,l=function(){n("close")};return function(t,e){var n=(0,r.up)("font-awesome-icon"),f=(0,r.Q2)("fade");return(0,r.wg)(),(0,r.j4)(r.lR,{to:"body"},[(0,r.wy)(((0,r.wg)(),(0,r.iD)("div",i,[(0,r._)("div",o,[a,(0,r.Wm)(n,{class:"h5 cursor-pointer",onClick:l,icon:"fa-solid fa-x"})]),(0,r._)("div",s,[(0,r.WI)(t.$slots,"default")])])),[[f,u.isShown,"20"]]),(0,r.wy)((0,r._)("div",c,null,512),[[f,u.isShown,"10"]])])}}})}}]);