(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[7622],{87622:function(e,t,n){"use strict";n.r(t);n(35666);var r=n(34021);n(44431),n(5942),n(51206);function u(e,t,n,r,u,o,a){try{var i=e[o](a),c=i.value}catch(s){return void n(s)}i.done?t(c):Promise.resolve(c).then(r,u)}function o(e){return function(){var t=this,n=arguments;return new Promise((function(r,o){var a=e.apply(t,n);function i(e){u(a,r,o,i,c,"next",e)}function c(e){u(a,r,o,i,c,"throw",e)}i(void 0)}))}}t.default=function(){return r.a.subscribe((function(e){e.walletCheckInProgress})),function(){var e=o(regeneratorRuntime.mark((function e(t){var n,r,u,o;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n=t.network,r=t.appNetworkId,t.walletSelect,t.walletCheck,t.exit,u=t.stateSyncStatus,o=t.stateStore,t.wallet,null!==n){e.next=5;break}if(!u.network){e.next=5;break}return e.next=5,new Promise((function(e){u.network&&u.network.then(e),setTimeout((function(){null===n&&e(void 0)}),500)}));case 5:if(o.network.get()==r){e.next=7;break}return e.abrupt("return",void 0);case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()}}}]);