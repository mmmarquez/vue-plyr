webpackJsonp([0],[,function(t,e,s){function i(t){s(8)}var n=s(0)(s(3),s(11),i,null,null);t.exports=n.exports},,function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=s(9),n=s.n(i),a=s(6);e.default={name:"app",components:{SvgPath:n.a},data:function(){return{maskData:""}},created:function(){this.maskData=a.a}}},function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"svg-path",props:{svgPath:void 0,svgWidth:void 0,svgHeight:void 0,svgId:void 0},data:function(){return{nuPath:""}},mounted:function(){this.nuPath=this.makeResponsive(this.svgPath,this.svgWidth,this.svgHeight)},methods:{makeResponsive:function(t,e,s){function i(t){return n++,n%2?t/s:t/e}var n=-1;return t.replace(/(\d+(\.\d+)?)/g,i)}}}},function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=s(2),n=s(1),a=s.n(n);i.a.config.productionTip=!1,new i.a({el:"#app",template:"<App/>",components:{App:a.a}})},function(t,e,s){"use strict";s.d(e,"a",function(){return i});var i=[{id:"maskOne",path:"M0,67.9586133 L53.72258,297.209905 L452.975919,399.230011 C452.975919,399.230011 214.636414,90.7829607 751.717683,310.22951 C1288.79895,529.676058 1038.83446,230.768124 805.510575,187.857726 C572.186688,144.947328 487.221964,44.4936374 487.221964,44.4936374 C487.221964,44.4936374 303.886287,-41.0654384 251.284799,25.1068094 C198.683312,91.2790572 0,67.9586133 0,67.9586133 Z",width:1072.01,height:399.23},{id:"maskTwo",path:"M133.360885,67.9586133 C133.360885,67.9586133 -199.822581,457.716685 187.08342,297.209905 C573.989422,136.703125 586.336424,399.230011 586.336424,399.230011 C586.336424,399.230011 497.461715,727.333224 586.336424,701.109375 C675.211134,674.885526 706.319736,237.190464 885.077937,310.22951 C1422.15875,529.676058 1172.19448,230.768124 938.870784,187.857726 C705.547092,144.947328 620.582441,44.4936374 620.582441,44.4936374 C620.582441,44.4936374 437.246917,-41.0654384 384.645474,25.1068094 C332.04403,91.2790572 133.360885,67.9586133 133.360885,67.9586133 Z",width:1207,height:705},{id:"maskThree",path:"M0,67.9586133 L53.72258,297.209905 L452.975919,399.230011 C452.975919,399.230011 214.636414,90.7829607 751.717683,310.22951 C1288.79895,529.676058 1038.83446,230.768124 805.510575,187.857726 C572.186688,144.947328 487.221964,44.4936374 487.221964,44.4936374 C487.221964,44.4936374 303.886287,-41.0654384 251.284799,25.1068094 C198.683312,91.2790572 0,67.9586133 0,67.9586133 Z",width:1072.01,height:399.23}]},function(t,e){},function(t,e){},function(t,e,s){function i(t){s(7)}var n=s(0)(s(4),s(10),i,"data-v-29c65f4c",null);t.exports=n.exports},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"image svg--mask"},[s("svg",{attrs:{height:"0",width:"0"}},[s("defs",[s("clipPath",{attrs:{id:t.svgId,clipPathUnits:"objectBoundingBox"}},[s("path",{attrs:{d:t.nuPath,id:t.svgId}})])])]),t._v(" "),s("div",{staticClass:"mask",style:{"clip-path":"url(#"+t.svgId+")"}},[t._t("default")],2)])},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{attrs:{id:"app"}},[s("section",{staticClass:"section--full"},[s("div",{staticClass:"section--inner"},[s("div",{staticClass:"section--content"},t._l(t.maskData,function(t){return s("div",{staticClass:"block"},[s("SvgPath",{attrs:{svgId:t.id,svgPath:t.path,svgWidth:t.width,svgHeight:t.height}},[s("img",{attrs:{src:"http://lorempixel.com/1200/600/cats/",alt:""}})])],1)}))])])])},staticRenderFns:[]}}],[5]);
//# sourceMappingURL=app.a20719834847d5ba596d.js.map