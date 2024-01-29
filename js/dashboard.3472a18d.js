import{c as M}from"./element-plus.af689926.js";import{c as S}from"./_commonjs-dynamic-modules.377d74e3.js";import{_ as y,g as k}from"./index.fba5c8fa.js";import{o as V,c as g,I as D,a as f,J as N,U as w,F as I,a8 as E,K as L,ah as x,O as z,P as F,V as h}from"./vendor-vue.cefe3aef.js";import{i as B}from"./index.afa609c1.js";import"./element-icon.1fe9d2a8.js";import"./vendor-lib.a8c0b8df.js";var H={exports:{}};(function(e,n){(function(a,o){e.exports=o(S,n,e)})(M,function(a,o,d){var c=function(s,l,p,A,u,b){for(var T=0,C=["webkit","moz","ms","o"],v=0;v<C.length&&!window.requestAnimationFrame;++v)window.requestAnimationFrame=window[C[v]+"RequestAnimationFrame"],window.cancelAnimationFrame=window[C[v]+"CancelAnimationFrame"]||window[C[v]+"CancelRequestAnimationFrame"];window.requestAnimationFrame||(window.requestAnimationFrame=function(i,r){var m=new Date().getTime(),_=Math.max(0,16-(m-T)),$=window.setTimeout(function(){i(m+_)},_);return T=m+_,$}),window.cancelAnimationFrame||(window.cancelAnimationFrame=function(i){clearTimeout(i)});var t=this;t.options={useEasing:!0,useGrouping:!0,separator:",",decimal:".",easingFn:null,formattingFn:null};for(var q in b)b.hasOwnProperty(q)&&(t.options[q]=b[q]);t.options.separator===""&&(t.options.useGrouping=!1),t.options.prefix||(t.options.prefix=""),t.options.suffix||(t.options.suffix=""),t.d=typeof s=="string"?document.getElementById(s):s,t.startVal=Number(l),t.endVal=Number(p),t.countDown=t.startVal>t.endVal,t.frameVal=t.startVal,t.decimals=Math.max(0,A||0),t.dec=Math.pow(10,t.decimals),t.duration=1e3*Number(u)||2e3,t.formatNumber=function(i){i=i.toFixed(t.decimals),i+="";var r,m,_,$;if(r=i.split("."),m=r[0],_=r.length>1?t.options.decimal+r[1]:"",$=/(\d+)(\d{3})/,t.options.useGrouping)for(;$.test(m);)m=m.replace($,"$1"+t.options.separator+"$2");return t.options.prefix+m+_+t.options.suffix},t.easeOutExpo=function(i,r,m,_){return m*(-Math.pow(2,-10*i/_)+1)*1024/1023+r},t.easingFn=t.options.easingFn?t.options.easingFn:t.easeOutExpo,t.formattingFn=t.options.formattingFn?t.options.formattingFn:t.formatNumber,t.version=function(){return"1.7.1"},t.printValue=function(i){var r=t.formattingFn(i);t.d.tagName==="INPUT"?this.d.value=r:t.d.tagName==="text"||t.d.tagName==="tspan"?this.d.textContent=r:this.d.innerHTML=r},t.count=function(i){t.startTime||(t.startTime=i),t.timestamp=i;var r=i-t.startTime;t.remaining=t.duration-r,t.options.useEasing?t.countDown?t.frameVal=t.startVal-t.easingFn(r,0,t.startVal-t.endVal,t.duration):t.frameVal=t.easingFn(r,t.startVal,t.endVal-t.startVal,t.duration):t.countDown?t.frameVal=t.startVal-(t.startVal-t.endVal)*(r/t.duration):t.frameVal=t.startVal+(t.endVal-t.startVal)*(r/t.duration),t.countDown?t.frameVal=t.frameVal<t.endVal?t.endVal:t.frameVal:t.frameVal=t.frameVal>t.endVal?t.endVal:t.frameVal,t.frameVal=Math.round(t.frameVal*t.dec)/t.dec,t.printValue(t.frameVal),r<t.duration?t.rAF=requestAnimationFrame(t.count):t.callback&&t.callback()},t.start=function(i){return t.callback=i,t.rAF=requestAnimationFrame(t.count),!1},t.pauseResume=function(){t.paused?(t.paused=!1,delete t.startTime,t.duration=t.remaining,t.startVal=t.frameVal,requestAnimationFrame(t.count)):(t.paused=!0,cancelAnimationFrame(t.rAF))},t.reset=function(){t.paused=!1,delete t.startTime,t.startVal=l,cancelAnimationFrame(t.rAF),t.printValue(t.startVal)},t.update=function(i){cancelAnimationFrame(t.rAF),t.paused=!1,delete t.startTime,t.startVal=t.frameVal,t.endVal=Number(i),t.countDown=t.startVal>t.endVal,t.rAF=requestAnimationFrame(t.count)},t.printValue(t.startVal)};return c})})(H,H.exports);const G=H.exports;const O={name:"countTo",props:{init:{type:Number,required:!1,default:0},startVal:{type:Number,required:!1,default:0},end:{type:Number,required:!0},decimals:{type:Number,required:!1,default:0},decimal:{type:String,required:!1,default:"."},duration:{type:Number,required:!1,default:2},delay:{type:Number,required:!1,default:0},uneasing:{type:Boolean,required:!1,default:!1},usegroup:{type:Boolean,required:!1,default:!1},separator:{type:String,required:!1,default:","},simplify:{type:Boolean,required:!1,default:!1},unit:{type:Array,required:!1,default(){return[[3,"K+"],[6,"M+"],[9,"B+"]]}},countClass:{type:String,required:!1,default:""},unitClass:{type:String,required:!1,default:""}},data(){return{counter:null,unitText:""}},computed:{counterId(){return`count_to_${this._uid}`}},watch:{end(e){let n=this.getValue(e);this.counter.update(n)}},mounted(){this.$nextTick(()=>{let e=this.getValue(this.end);this.counter=new G(this.counterId,this.startVal,e,this.decimals,this.duration,{useEasing:!this.uneasing,useGrouping:this.useGroup,separator:this.separator,decimal:this.decimal}),setTimeout(()=>{this.counter.error||this.counter.start()},this.delay)})},methods:{getHandleVal(e,n){return{endVal:parseInt(e/Math.pow(10,this.unit[n-1][0])),unitText:this.unit[n-1][1]}},transformValue(e){let n=this.unit.length,a={endVal:0,unitText:""};if(e<Math.pow(10,this.unit[0][0]))a.endVal=e;else for(let o=1;o<n;o++)e>=Math.pow(10,this.unit[o-1][0])&&e<Math.pow(10,this.unit[o][0])&&(a=this.getHandleVal(e,o));return e>Math.pow(10,this.unit[n-1][0])&&(a=this.getHandleVal(e,n)),a},getValue(e){let n=0;if(this.simplify){let{endVal:a,unitText:o}=this.transformValue(e);this.unitText=o,n=a}else n=e;return n}}},U={class:"count-to-wrapper"},R={class:"content-outer"},j=["id"];function K(e,n,a,o,d,c){return V(),g("div",U,[D(e.$slots,"left",{},void 0,!0),f("p",R,[f("span",{class:N(["count-to-count-text",a.countClass]),id:c.counterId},w(a.init),11,j),f("span",{class:N(["count-to-unit-text",a.unitClass])},w(d.unitText),3)]),D(e.$slots,"right",{},void 0,!0)])}const J=y(O,[["render",K],["__scopeId","data-v-84c2e9f0"]]);const W={name:"activePlate",components:{CountTo:J},props:{infoList:{type:Array,require:!0}},data(){return{colors:["#409eff","#409eff","#409eff","#f56c6c","#f56c6c","#f56c6c"]}},methods:{handleClick(e){console.log(e),this.$router.push({path:e.path})}}},Q={class:"active-plate-main"},X={class:"active-list"},Y=["onClick"],Z={class:"desc"};function tt(e,n,a,o,d,c){return V(),g("div",Q,[f("ul",X,[(V(!0),g(I,null,E(a.infoList,(s,l)=>(V(),g("li",{class:"item",onClick:p=>c.handleClick(s)},[f("p",{class:"num",style:L({color:d.colors[l]})},w(s.count)+" ",5),f("p",Z,w(s.title),1)],8,Y))),256))])])}const et=y(W,[["render",tt]]);const nt={props:{title:{type:String,default:"\u6807\u9898"},desc:{type:String,default:"\u63CF\u8FF0"}}},at={class:"card-main"},it={class:"card-main__header"},ot={class:"card-main__title"},rt={class:"card-main__desc"};function st(e,n,a,o,d,c){return V(),g("div",at,[f("div",it,[f("div",ot,w(a.title),1),f("div",rt,w(a.desc),1)]),D(e.$slots,"default")])}const P=y(nt,[["render",st]]),lt={name:"",props:{list:{type:Array,default:()=>[]}},components:{HomeCard:P,ActivePlate:et},data(){return{}},computed:{},methods:{},created(){}};function ut(e,n,a,o,d,c){const s=x("ActivePlate"),l=x("HomeCard");return V(),z(l,{desc:"System",title:"\u7CFB\u7EDF\u6570\u636E"},{default:F(()=>[h(s,{infoList:a.list},null,8,["infoList"])]),_:1})}const ct=y(lt,[["render",ut]]),dt=function(){return document.addEventListener?function(e,n,a){e&&n&&a&&e.addEventListener(n,a,!1)}:function(e,n,a){e&&n&&a&&e.attachEvent("on"+n,a)}}(),mt=function(){return document.removeEventListener?function(e,n,a){e&&n&&e.removeEventListener(n,a,!1)}:function(e,n,a){e&&n&&e.detachEvent("on"+n,a)}}();const ft={props:{value:Array,text:String,subtext:String},data(){return{chartDom:null}},beforeDestroy(){mt(window,"resize",this.resize)},methods:{resize(){this.chartDom&&this.chartDom.resize()},initChart(e){let n={color:["#409eff","#f56c6c"],tooltip:{trigger:"item"},legend:{top:"5%",left:"center"},series:[{type:"pie",radius:["30%","60%"],center:["50%","54%"],avoidLabelOverlap:!1,label:{show:!1,position:"center"},emphasis:{label:{show:!0,fontSize:40,fontWeight:"bold"}},labelLine:{show:!1},data:e}]};this.chartDom||(this.chartDom=B(this.$refs.dom)),this.chartDom.setOption(n),dt(window,"resize",this.resize)}}},pt={class:"pie-main",ref:"dom"};function _t(e,n,a,o,d,c){return V(),g("div",pt,null,512)}const ht=y(ft,[["render",_t]]);const Vt={name:"Home",components:{HomeDataInfo:ct,HomeCard:P,HomeChartPie:ht},props:{},data(){return{virtual_memory:{},disk_usage:{},adModal:!0,list:[],certValue:[]}},computed:{},watch:{},filters:{},methods:{async getData(){const e=await this.$http.getSystemData();this.list=e.data.map(n=>(n.key=k(),n)),this.handleInit(this.list)},handleInit(e){console.log(e);let n=e.find(u=>u.title==="\u8BC1\u4E66\u6570\u91CF").count,a=e.find(u=>u.title==="\u8FC7\u671F\u8BC1\u4E66").count,o=[{value:n-a,name:"\u672A\u8FC7\u671F"},{value:a,name:"\u5DF2\u8FC7\u671F"}];this.$refs.HomeChartCertPie.initChart(o);let d=e.find(u=>u.title==="\u57DF\u540D\u6570\u91CF").count,c=e.find(u=>u.title==="\u8FC7\u671F\u57DF\u540D").count,s=[{value:d-c,name:"\u672A\u8FC7\u671F"},{value:c,name:"\u5DF2\u8FC7\u671F"}];this.$refs.HomeChartDomainPie.initChart(s);let l=e.find(u=>u.title==="\u76D1\u63A7\u6570\u91CF").count,p=e.find(u=>u.title==="\u76D1\u63A7\u5F02\u5E38").count,A=[{value:l-p,name:"\u6B63\u5E38"},{value:l,name:"\u5F02\u5E38"}];this.$refs.HomeChartMonitorPie.initChart(A)}},mounted(){this.getData()}},gt={class:"app-container dashboard"},wt={class:"grid mt-md gap-[20px] grid-cols-3"};function yt(e,n,a,o,d,c){const s=x("HomeDataInfo"),l=x("HomeChartPie"),p=x("HomeCard");return V(),g("div",gt,[h(s,{list:d.list},null,8,["list"]),f("div",wt,[h(p,{title:"\u8BC1\u4E66\u7EDF\u8BA1",desc:"SSL Cert"},{default:F(()=>[h(l,{ref:"HomeChartCertPie"},null,512)]),_:1}),h(p,{title:"\u57DF\u540D\u7EDF\u8BA1",desc:"Domain"},{default:F(()=>[h(l,{ref:"HomeChartDomainPie"},null,512)]),_:1}),h(p,{title:"\u76D1\u63A7\u7EDF\u8BA1",desc:"Monitor"},{default:F(()=>[h(l,{ref:"HomeChartMonitorPie"},null,512)]),_:1})])])}const qt=y(Vt,[["render",yt]]);export{qt as default};
