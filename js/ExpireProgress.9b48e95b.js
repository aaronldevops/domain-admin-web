import{e as r}from"./element-plus.6ad0e9c9.js";import{_ as c}from"./index.a968bb1b.js";import{ai as d,o as s,c as n,M as m,R as o,a,F as _,T as p}from"./vendor-vue.43598ec5.js";const g={name:"ExpireProgress",props:{startTime:{type:String},endTime:{type:String},isManual:{type:Boolean}},components:{},data(){return{nowTime:r()}},computed:{parsedStartTime(){return r(this.startTime)},parsedEndTime(){return r(this.endTime)},totalDays(){return this.parsedEndTime.diff(this.parsedStartTime,"day")},expireDays(){return this.parsedEndTime.diff(this.nowTime,"day")},percentage(){let e=null;return this.expireDays&&this.totalDays&&(e=this.expireDays/this.totalDays*100),e},percentageStatus(){let e;return this.expireDays>7?e="":this.expireDays>0?e="warning":e="exception",e}},methods:{async getData(){}},created(){this.getData()}},y={class:"ExpireProgress"},u={class:"ExpireProgress__info"},x={class:"el-text-color-primary"},f={class:"el-text-color-secondary"},h={key:1};function D(e,i,T,E,v,t){const l=d("el-progress");return s(),n("div",y,[t.percentage?(s(),m(l,{key:0,percentage:t.percentage,"show-text":!1,status:t.percentageStatus},null,8,["percentage","status"])):o("v-if",!0),a("div",u,[t.totalDays?(s(),n(_,{key:0},[a("span",x,p(t.expireDays),1),i[0]||(i[0]=a("span",null," / ",-1)),a("span",f,p(t.totalDays),1)],64)):(s(),n("span",h,"-")),o(` <el-tag
        v-if="isManual"
        type="info"
        class="mo-table-tag  ml-[1px]"
        size="small"
        >\u624B\u52A8</el-tag
      > `)])])}const P=c(g,[["render",D]]);export{P as E};