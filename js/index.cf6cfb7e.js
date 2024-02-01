import{i as W,E as K}from"./event-enums.ab6374d2.js";import{S as N,u as A}from"./SelectGroup.2ab9aff6.js";import{_ as v,R as z,d as G,r as Q}from"./index.a5158792.js";import{ah as a,ar as L,Q as P,o as u,c as g,V as l,P as i,a as c,F as T,a8 as X,O as w,T as C,U as h,S as D,L as J,ax as j,ay as Z,a9 as ee}from"./vendor-vue.cefe3aef.js";import{E as q,A as te,a as oe,C as le,b as ne}from"./ExportFileDialog.11348168.js";import{C as ie}from"./ConnectStatus.8806a146.js";import{E as ae}from"./ExpireProgress.787140ab.js";import{F as se}from"./vendor-lib.a8c0b8df.js";import{D as re}from"./DataCount.a82a990e.js";import{d as de}from"./element-plus.af689926.js";import"./element-icon.1fe9d2a8.js";const me=[{label:"SSL/TLS",value:0},{label:"STARTTLS",value:1}],ue={domain:[{message:"\u57DF\u540D\u4E0D\u80FD\u4E3A\u7A7A",required:!0,trigger:"blur"}],port:[{required:!0,trigger:"blur",validator:(e,t,o)=>{if(!t)return o();if(W(t))o();else return o(new Error("\u7AEF\u53E3\u53F7\u53EA\u80FD\u662F\u6570\u5B57"))}}]},ce={name:"",props:{row:{type:Object,default:null}},components:{SelectGroup:N},data(){return{sslTypeOptions:me,loading:!1,form:{domain:"",alias:"",port:443,group_id:"",is_dynamic_host:!1,ssl_type:0,start_time:"",expire_time:"",auto_update:!0},rules:ue}},computed:{disabledDomain(){return!!this.row}},methods:{async getData(){if(this.loading=!0,this.row){let e={id:this.row.id},o=(await this.$http.getDomainById(e)).data;this.form.domain=o.domain,this.form.alias=o.alias,this.form.group_id=o.group_id,this.form.port=o.port,this.form.ssl_type=o.ssl_type,this.form.start_time=o.start_time,this.form.expire_time=o.expire_time,this.form.auto_update=o.auto_update,this.form.group_id==0&&(this.form.group_id="")}this.loading=!1},handleCancel(){this.$emit("on-cancel")},handleSubmit(){console.log("handleSubmit",this.form),this.$refs.form.validate(e=>{if(console.log(e),e)this.confirmSubmit();else return!1})},async confirmSubmit(){let e=this.$loading({fullscreen:!0}),t={domain:this.form.domain.trim(),alias:this.form.alias.trim(),group_id:this.form.group_id,port:this.form.port,ssl_type:this.form.ssl_type,start_time:this.form.start_time,expire_time:this.form.expire_time,auto_update:this.form.auto_update},o=null;this.row?(t.id=this.row.id,o=await this.$http.updateDomainById(t)):o=await this.$http.addDomain(t),o.ok&&(this.$msg.success("\u64CD\u4F5C\u6210\u529F"),this.$emit("on-success")),this.$nextTick(()=>{e.close()})},async handleDomainChange(){}},created(){this.getData()}},pe={class:"flex"},_e={class:"flex justify-between w-full"},he=c("span",null," - ",-1),fe={class:"grid grid-cols-2"},ge={class:"text-center"};function be(e,t,o,f,n,s){const m=a("el-input"),d=a("el-form-item"),p=a("el-date-picker"),x=a("el-switch"),y=a("Warning"),S=a("el-icon"),V=a("el-link"),O=a("el-tooltip"),R=a("el-option"),F=a("el-select"),I=a("SelectGroup"),U=a("el-form"),$=a("el-button"),E=L("loading");return P((u(),g("div",null,[l(U,{ref:"form",model:n.form,rules:n.rules,"label-width":"100px"},{default:i(()=>[c("div",pe,[l(d,{label:e.$t("\u57DF\u540D"),prop:"domain",class:"flex-1"},{default:i(()=>[l(m,{type:"text",modelValue:n.form.domain,"onUpdate:modelValue":t[0]||(t[0]=_=>n.form.domain=_),placeholder:e.$t("\u8BF7\u8F93\u5165\u57DF\u540D"),onBlur:s.handleDomainChange},null,8,["modelValue","placeholder","onBlur"])]),_:1},8,["label"]),l(d,{label:e.$t("\u7AEF\u53E3"),prop:"port",style:{width:"160px"}},{default:i(()=>[l(m,{type:"text",modelValue:n.form.port,"onUpdate:modelValue":t[1]||(t[1]=_=>n.form.port=_),placeholder:e.$t("\u8BF7\u8F93\u5165\u7AEF\u53E3")},null,8,["modelValue","placeholder"])]),_:1},8,["label"])]),l(d,{label:e.$t("\u8BC1\u4E66\u65F6\u95F4"),prop:"start_time"},{default:i(()=>[c("div",_e,[l(p,{modelValue:n.form.start_time,"onUpdate:modelValue":t[2]||(t[2]=_=>n.form.start_time=_),type:"date","value-format":"YYYY-MM-DD HH:mm:ss",placeholder:e.$t("\u8BC1\u4E66\u9881\u53D1\u65F6\u95F4"),disabled:n.form.auto_update,style:{width:"180px"}},null,8,["modelValue","placeholder","disabled"]),he,l(p,{modelValue:n.form.expire_time,"onUpdate:modelValue":t[3]||(t[3]=_=>n.form.expire_time=_),type:"date","value-format":"YYYY-MM-DD HH:mm:ss",placeholder:e.$t("\u8BC1\u4E66\u8FC7\u671F\u65F6\u95F4"),disabled:n.form.auto_update,style:{width:"180px"}},null,8,["modelValue","placeholder","disabled"])])]),_:1},8,["label"]),c("div",fe,[l(d,{label:e.$t("\u81EA\u52A8\u66F4\u65B0"),prop:"auto_update"},{default:i(()=>[l(x,{modelValue:n.form.auto_update,"onUpdate:modelValue":t[4]||(t[4]=_=>n.form.auto_update=_)},null,8,["modelValue"]),l(O,{effect:"dark",content:"\u5982\u9700\u624B\u52A8\u8BBE\u7F6E\u8BC1\u4E66\u65F6\u95F4\uFF0C\u9700\u5173\u95ED\u81EA\u52A8\u66F4\u65B0",placement:"top-start","show-after":500},{default:i(()=>[l(V,{underline:!1},{default:i(()=>[l(S,{class:"ml-sm"},{default:i(()=>[l(y)]),_:1})]),_:1})]),_:1})]),_:1},8,["label"]),l(d,{label:e.$t("\u52A0\u5BC6\u65B9\u5F0F"),prop:"ssl_type"},{default:i(()=>[l(F,{modelValue:n.form.ssl_type,"onUpdate:modelValue":t[5]||(t[5]=_=>n.form.ssl_type=_),placeholder:e.$t("\u52A0\u5BC6\u65B9\u5F0F")},{default:i(()=>[(u(!0),g(T,null,X(n.sslTypeOptions,_=>(u(),w(R,{key:_.value,label:_.label,value:_.value},null,8,["label","value"]))),128))]),_:1},8,["modelValue","placeholder"])]),_:1},8,["label"])]),l(d,{label:e.$t("\u5206\u7EC4"),prop:"group_id"},{default:i(()=>[l(I,{class:"w-[150px]",modelValue:n.form.group_id,"onUpdate:modelValue":t[6]||(t[6]=_=>n.form.group_id=_),clearable:""},null,8,["modelValue"])]),_:1},8,["label"]),l(d,{label:e.$t("\u5907\u6CE8"),prop:"alias"},{default:i(()=>[l(m,{type:"textarea",modelValue:n.form.alias,"onUpdate:modelValue":t[7]||(t[7]=_=>n.form.alias=_),rows:3,placeholder:e.$t("\u8BF7\u8F93\u5165\u5907\u6CE8")},null,8,["modelValue","placeholder"])]),_:1},8,["label"])]),_:1},8,["model","rules"]),c("div",ge,[l($,{onClick:s.handleCancel},{default:i(()=>[C(h(e.$t("\u53D6\u6D88")),1)]),_:1},8,["onClick"]),l($,{type:"primary",onClick:s.handleSubmit},{default:i(()=>[C(h(e.$t("\u786E\u5B9A")),1)]),_:1},8,["onClick"])])])),[[E,n.loading]])}const we=v(ce,[["render",be]]),ye={name:"",props:{row:{type:Object,default:null},visible:{type:Boolean,default:!1}},emits:["update:visible"],components:{DataForm:we},data(){return{}},computed:{dialogTitle(){return this.row?this.$t("\u7F16\u8F91\u57DF\u540D"):this.$t("\u6DFB\u52A0\u57DF\u540D")},dialogVisible:{get(){return this.visible},set(e){this.$emit("update:visible",e)}}},methods:{handleClose(){this.dialogVisible=!1},handleOpen(){this.dialogVisible=!0},handleSuccess(){this.handleClose(),this.$emit("on-success")}},created(){}};function De(e,t,o,f,n,s){const m=a("DataForm"),d=a("el-dialog");return u(),w(d,{title:s.dialogTitle,modelValue:s.dialogVisible,"onUpdate:modelValue":t[0]||(t[0]=p=>s.dialogVisible=p),width:"530px",center:"","append-to-body":"","lock-scroll":!1},{default:i(()=>[s.dialogVisible?(u(),w(m,{key:0,row:o.row,onOnCancel:s.handleClose,onOnSuccess:s.handleSuccess},null,8,["row","onOnCancel","onOnSuccess"])):D("",!0)]),_:1},8,["title","modelValue"])}const H=v(ye,[["render",De]]),Ce={name:"",props:{row:{type:Object,default:null}},components:{ExpireDays:q,AddressList:te},data(){return{form:{domain:"",domain_url:"",ip:"",start_time:"",expire_time:"",check_time:"",connect_status:"",total_days:"",expire_days:"",create_time:"",update_time:"",group_name:"",real_time_expire_days:"",domain_start_time:"",domain_expire_time:"",real_time_domain_expire_days:"",alias:"",domain_auto_update:"",domain_auto_update_label:"",domain_expire_monitor:"",domain_check_time_label:"",port:"",address_count:0,group:null},ipInfo:{isp:""}}},computed:{},methods:{async getData(){if(this.row){let e={id:this.row.id};const t=await this.$http.getDomainById(e);if(!t.ok)return;let o=t.data;this.form.domain=o.domain,this.form.domain_url=o.domain_url,this.form.ip=o.ip,this.form.start_time=o.start_time,this.form.expire_time=o.expire_time,this.form.check_time=o.check_time,this.form.connect_status=o.connect_status,this.form.total_days=o.total_days,this.form.expire_days=o.expire_days,this.form.real_time_expire_days=o.real_time_expire_days,this.form.create_time=o.create_time,this.form.update_time_label=o.update_time_label,this.form.domain_auto_update=o.domain_auto_update,this.form.domain_auto_update_label=o.domain_auto_update==!0?"\u662F":"\u5426",this.form.domain_expire_monitor=o.domain_expire_monitor==!0?"\u662F":"\u5426",this.form.domain_check_time_label=o.domain_check_time_label,this.form.port=o.port,this.form.alias=o.alias,this.form.domain_start_time=o.domain_start_time,this.form.domain_expire_time=o.domain_expire_time,this.form.real_time_domain_expire_days=o.real_time_domain_expire_days,this.form.address_count=o.address_count,this.form.group=o.group,this.form.group_name=o.group_name}},handleCancel(){this.$emit("on-cancel")},async handleUpdateRowDomainInfo(){let e=this.$loading({lock:!0,text:"\u66F4\u65B0\u4E2D"}),t={domain_id:this.row.id};(await this.$http.updateDomainCertInfoById(t)).code==0&&(this.$msg.success("\u64CD\u4F5C\u6210\u529F"),this.getData()),e.close()},async getIpInfo(){let e={ip:this.form.ip};const t=await this.$http.getIpInfo(e);t.code==0&&(this.ipInfo=t.data)}},created(){this.getData()}},ke={class:"domain-detail"},ve={class:"mo-form-detail grid grid-cols-2"},xe={key:0},Se={key:1},Ve={class:"flex justify-between flex-1"},Re={class:"truncate"},Oe={class:"mo-form-detail mt-[20px]"},$e={class:"truncate"},Fe={class:"text-center mt-md"};function Ie(e,t,o,f,n,s){const m=a("el-link"),d=a("el-form-item"),p=a("el-form"),x=a("ExpireDays"),y=a("Refresh"),S=a("el-icon"),V=a("el-button");return u(),g("div",ke,[c("div",ve,[l(p,{"label-width":"130px"},{default:i(()=>[l(d,{label:"\u57DF\u540D",prop:"domain"},{default:i(()=>[l(m,{underline:!1,href:n.form.domain_url,target:"_blank"},{default:i(()=>[C(h(n.form.domain),1)]),_:1},8,["href"])]),_:1}),l(d,{label:"\u8BC1\u4E66\u9881\u53D1\u65F6\u95F4",prop:"create_time"},{default:i(()=>[c("span",null,h(n.form.start_time||"-"),1)]),_:1}),l(d,{label:"\u8BC1\u4E66\u8FC7\u671F\u65F6\u95F4",prop:"create_time"},{default:i(()=>[c("span",null,h(n.form.expire_time||"-"),1)]),_:1}),l(d,{label:"\u5206\u7EC4",prop:"create_time"},{default:i(()=>[n.form.group_name?(u(),g("span",xe,h(n.form.group_name||"-"),1)):(u(),g("span",Se,"-"))]),_:1})]),_:1}),l(p,{"label-width":"130px",style:{"margin-right":"-1px"}},{default:i(()=>[l(d,{label:"\u7AEF\u53E3\u53F7",prop:"domain"},{default:i(()=>[c("span",null,h(n.form.port||"-"),1)]),_:1}),l(d,{label:"\u5269\u4F59\u5929\u6570",prop:"create_time"},{default:i(()=>[l(x,{value:n.form.real_time_expire_days},null,8,["value"])]),_:1}),l(d,{label:"\u68C0\u67E5\u65F6\u95F4",prop:"isp"},{default:i(()=>[c("div",Ve,[c("span",Re,h(n.form.update_time_label||"-"),1),l(m,{underline:!1,type:"primary",class:"mr-sm",onClick:s.handleUpdateRowDomainInfo},{default:i(()=>[l(S,null,{default:i(()=>[l(y)]),_:1})]),_:1},8,["onClick"])])]),_:1}),l(d,{label:"\u4E3B\u673A\u6570\u91CF",prop:"create_time"},{default:i(()=>[c("span",null,h(n.form.address_count||"-"),1)]),_:1})]),_:1})]),c("div",Oe,[l(p,{"label-width":"130px"},{default:i(()=>[l(d,{label:"\u5907\u6CE8",prop:"isp"},{default:i(()=>[c("span",$e,h(n.form.alias||"-"),1)]),_:1})]),_:1})]),c("div",Fe,[l(V,{type:"primary",onClick:s.handleCancel},{default:i(()=>[C("\u5173 \u95ED")]),_:1},8,["onClick"])])])}const Ue=v(Ce,[["render",Ie]]),Ee={name:"",props:{row:{type:Object,default:null},visible:{type:Boolean,default:!1}},emits:["update:visible"],components:{DataForm:Ue},data(){return{}},computed:{dialogTitle(){return this.row?"\u7F16\u8F91":"\u6DFB\u52A0"},dialogVisible:{get(){return this.visible},set(e){this.$emit("update:visible",e)}}},methods:{handleClose(){this.dialogVisible=!1},handleOpen(){this.dialogVisible=!0},handleSuccess(){this.handleClose()},handleDialogClose(){this.$emit("on-success")}},created(){}};function Te(e,t,o,f,n,s){const m=a("DataForm"),d=a("el-dialog");return u(),w(d,{title:"\u8BC1\u4E66\u8BE6\u60C5",modelValue:s.dialogVisible,"onUpdate:modelValue":t[0]||(t[0]=p=>s.dialogVisible=p),width:"800px",center:"","append-to-body":"","lock-scroll":!1,onClose:s.handleDialogClose},{default:i(()=>[s.dialogVisible?(u(),w(m,{key:0,row:o.row,onOnCancel:s.handleClose,onOnSuccess:s.handleSuccess},null,8,["row","onOnCancel","onOnSuccess"])):D("",!0)]),_:1},8,["modelValue","onClose"])}const Be=v(Ee,[["render",Te]]),Ae={name:"",components:{DataFormDialog:H,DataDetailDialog:Be,ConnectStatus:ie,ExpireDays:q,ExpireProgress:ae,AddressListgDialog:oe},emits:["on-success","selection-change","sort-change","on-refresh-row"],props:{role:{type:Number}},computed:{},data(){return{RoleEnum:z,currentRow:null,dialogVisible:!1,dialogDetailVisible:!1,AddressListgDialogVisible:!1}},methods:{handleEditRow(e){this.currentRow=e,this.dialogVisible=!0},async handleDeleteClick(e){let t={id:e.id};const o=await this.$http.deleteDomainById(t);o.code==0?(this.$msg.success("\u64CD\u4F5C\u6210\u529F"),this.$emit("on-success")):this.$msg.error(o.msg)},async handleStatusChange(e){let t={id:e.id};const o=await this.$Http.function(t);o.code==0?(this.$msg.success("\u64CD\u4F5C\u6210\u529F"),this.$emit("on-success")):this.$msg.error(o.msg)},async handleMonitorStatusChange(e,t){let o={domain_id:e.id,is_monitor:t};const f=await this.$http.updateDomainExpireMonitorById(o);f.code==0?this.$msg.success("\u64CD\u4F5C\u6210\u529F"):this.$msg.error(f.msg)},async handleUpdateRowDomainInfo(e){let t=this.$loading({lock:!0,text:"\u66F4\u65B0\u4E2D"}),o={id:e.id};(await this.$http.updateDomainRowInfoById(o)).code==0&&(this.$msg.success("\u64CD\u4F5C\u6210\u529F"),this.$emit("on-success")),t.close()},handleUpdateSuccess(){this.$emit("on-success")},handleDetailSuccess(){},handleShowDetail(e){this.currentRow=e,this.dialogDetailVisible=!0},handleShowAddressListgDialog(e){this.currentRow=e,this.AddressListgDialogVisible=!0},async handleAutoUpdateStatusChange(e,t){let o={domain_id:e.id,field:"auto_update",value:t};const f=await this.$http.updateDomainFieldById(o);f.code==0?this.$msg.success("\u64CD\u4F5C\u6210\u529F"):this.$msg.error(f.msg)},handleRefreshRow(e){this.$emit("on-refresh-row",e)},handleSelectable(e,t){return e.has_edit_permission}},created(){}},ze={class:"inline-flex items-center"},Le={class:"mr-[2px]"},Pe={key:0},Ge={key:0,class:"color--danger"},Ne={key:2},je={class:"inline-flex items-center"},qe={class:"mr-[2px]"};function He(e,t,o,f,n,s){const m=a("el-table-column"),d=a("Warning"),p=a("el-icon"),x=a("el-tooltip"),y=a("el-link"),S=a("ConnectStatus"),V=a("ExpireProgress"),O=a("el-switch"),R=a("Refresh"),F=a("Edit"),I=a("Delete"),U=a("el-popconfirm"),$=a("el-table"),E=a("DataFormDialog"),_=a("DataDetailDialog"),B=a("AddressListgDialog");return u(),g("div",null,[l($,J({stripe:"",border:""},e.$attrs,{onSortChange:t[0]||(t[0]=r=>e.$emit("sort-change",r)),onSelectionChange:t[1]||(t[1]=r=>e.$emit("selection-change",r))}),{default:i(()=>[n.RoleEnum.Admin!=o.role?(u(),w(m,{key:0,type:"selection","header-align":"center",align:"center",width:"40",selectable:s.handleSelectable},null,8,["selectable"])):D("",!0),l(m,{label:e.$t("\u57DF\u540D"),"header-align":"center",align:"center",width:"230","show-overflow-tooltip":"",prop:"domain"},{header:i(()=>[l(x,{effect:"dark",content:"\u9ED8\u8BA4\u7AEF\u53E3\uFF1A443",placement:"top-start","show-after":800},{default:i(()=>[c("div",ze,[c("span",Le,h(e.$t("\u57DF\u540D")),1),l(p,null,{default:i(()=>[l(d)]),_:1})])]),_:1})]),default:i(r=>[l(y,{underline:!1,onClick:b=>s.handleShowDetail(r.row)},{default:i(()=>[c("span",null,h(r.row.domain),1),r.row.port!="443"?(u(),g("span",Pe,":"+h(r.row.port),1)):D("",!0)]),_:2},1032,["onClick"])]),_:1},8,["label"]),l(m,{label:e.$t("\u4E3B\u673A\u6570\u91CF"),"header-align":"center",align:"center",width:"80",prop:"address_count"},{default:i(r=>[r.row.is_dynamic_host?(u(),g("span",Ge,"*")):D("",!0),r.row.address_count&&r.row.address_count>0?(u(),w(y,{key:1,underline:!1,onClick:b=>s.handleShowAddressListgDialog(r.row)},{default:i(()=>[C(h(r.row.address_count),1)]),_:2},1032,["onClick"])):(u(),g("span",Ne,"-"))]),_:1},8,["label"]),l(m,{label:e.$t("\u72B6\u6001"),"header-align":"center",align:"center",width:"80",sortable:"custom",prop:"expire_status"},{default:i(r=>[l(S,{value:r.row.expire_status,onOnClick:b=>s.handleShowAddressListgDialog(r.row)},null,8,["value","onOnClick"])]),_:1},8,["label"]),l(m,{label:e.$t("\u8BC1\u4E66\u5929\u6570"),"header-align":"center",align:"center",width:"110",sortable:"custom",prop:"expire_days"},{header:i(()=>[l(x,{effect:"dark",content:"\u5982\u6709\u591A\u4E2A\u4E3B\u673AIP\u5730\u5740\uFF0C\u6B64\u5904\u4EC5\u663E\u793A\u5230\u671F\u65F6\u95F4\u6700\u77ED\u7684\u8BC1\u4E66",placement:"top-start","show-after":800},{default:i(()=>[c("div",je,[c("span",qe,h(e.$t("\u8BC1\u4E66\u5929\u6570")),1),l(p,null,{default:i(()=>[l(d)]),_:1})])]),_:1})]),default:i(r=>[l(V,{startTime:r.row.start_time,endTime:r.row.expire_time},null,8,["startTime","endTime"])]),_:1},8,["label"]),l(m,{label:e.$t("\u5206\u7EC4"),"header-align":"center",align:"center",width:"100",sortable:"custom",prop:"group_name"},{default:i(r=>[c("span",null,h(r.row.group_name||"-"),1)]),_:1},8,["label"]),l(m,{label:e.$t("\u5907\u6CE8"),"header-align":"center",align:"left",prop:"check_time","min-width":"100","show-overflow-tooltip":""},{default:i(r=>[c("span",null,h(r.row.alias||"-"),1)]),_:1},8,["label"]),l(m,{label:e.$t("\u66F4\u65B0\u65F6\u95F4"),"header-align":"center",align:"center",width:"120",prop:"update_time",sortable:"custom","show-overflow-tooltip":""},{default:i(r=>[c("span",null,h(r.row.update_time_label||"-"),1)]),_:1},8,["label"]),n.RoleEnum.Admin!=o.role?(u(),g(T,{key:1},[l(m,{label:e.$t("\u81EA\u52A8\u66F4\u65B0"),width:"120","header-align":"center",align:"center",sortable:"custom",prop:"auto_update"},{default:i(r=>[l(O,{disabled:!r.row.has_edit_permission,modelValue:r.row.auto_update,"onUpdate:modelValue":b=>r.row.auto_update=b,onChange:b=>s.handleAutoUpdateStatusChange(r.row,b)},null,8,["disabled","modelValue","onUpdate:modelValue","onChange"])]),_:1},8,["label"]),l(m,{label:e.$t("\u5230\u671F\u63D0\u9192"),width:"90","header-align":"center",align:"center",sortable:"custom",prop:"is_monitor"},{default:i(r=>[l(O,{disabled:!r.row.has_edit_permission,modelValue:r.row.is_monitor,"onUpdate:modelValue":b=>r.row.is_monitor=b,onChange:b=>s.handleMonitorStatusChange(r.row,b)},null,8,["disabled","modelValue","onUpdate:modelValue","onChange"])]),_:1},8,["label"])],64)):D("",!0),l(m,{label:e.$t("\u64CD\u4F5C"),width:"100","header-align":"center",align:"center"},{default:i(r=>[l(y,{underline:!1,type:"primary",class:"mr-sm",onClick:b=>s.handleUpdateRowDomainInfo(r.row)},{default:i(()=>[l(p,null,{default:i(()=>[l(R)]),_:1})]),_:2},1032,["onClick"]),n.RoleEnum.Admin!=o.role?(u(),g(T,{key:0},[l(y,{underline:!1,type:"primary",class:"mr-sm",disabled:!r.row.has_edit_permission,onClick:b=>s.handleEditRow(r.row)},{default:i(()=>[l(p,null,{default:i(()=>[l(F)]),_:1})]),_:2},1032,["disabled","onClick"]),l(U,{title:`${e.$t("\u786E\u5B9A\u5220\u9664")}\uFF1F`,onConfirm:b=>s.handleDeleteClick(r.row),disabled:!r.row.has_edit_permission},{reference:i(()=>[l(y,{underline:!1,type:"danger",disabled:!r.row.has_edit_permission},{default:i(()=>[l(p,null,{default:i(()=>[l(I)]),_:1})]),_:2},1032,["disabled"])]),_:2},1032,["title","onConfirm","disabled"])],64)):D("",!0)]),_:1},8,["label"])]),_:1},16),l(E,{visible:n.dialogVisible,"onUpdate:visible":t[2]||(t[2]=r=>n.dialogVisible=r),row:n.currentRow,onOnSuccess:t[3]||(t[3]=r=>s.handleRefreshRow(n.currentRow))},null,8,["visible","row"]),l(_,{row:n.currentRow,visible:n.dialogDetailVisible,"onUpdate:visible":t[4]||(t[4]=r=>n.dialogDetailVisible=r),onOnSuccess:t[5]||(t[5]=r=>s.handleRefreshRow(n.currentRow))},null,8,["row","visible"]),n.currentRow?(u(),w(B,{key:0,role:o.role,domainId:n.currentRow.id,domainRow:n.currentRow,visible:n.AddressListgDialogVisible,"onUpdate:visible":t[6]||(t[6]=r=>n.AddressListgDialogVisible=r),onOnClose:t[7]||(t[7]=r=>s.handleRefreshRow(n.currentRow))},null,8,["role","domainId","domainRow","visible"])):D("",!0)])}const Ye=v(Ae,[["render",He]]),Me={name:"updateDomainInfo",props:{},components:{},data(){return{updateTimer:null}},computed:{disableUpdateButton(){return this.updateTimer!=null},updateText(){return this.disableUpdateButton?this.$t("\u6B63\u5728\u66F4\u65B0"):this.$t("\u5168\u90E8\u66F4\u65B0")}},methods:{async updateAllDomainCertInfoOfUser(){this.updateTimer=!0,await this.$http.updateAllDomainCertInfoOfUser()}},beforeUnmount(){clearInterval(this.updateTimer),this.updateTimer=null},created(){}};function We(e,t,o,f,n,s){const m=a("Refresh"),d=a("el-icon"),p=a("el-link");return u(),w(p,{underline:!1,type:"primary",onClick:s.updateAllDomainCertInfoOfUser,disabled:s.disableUpdateButton},{default:i(()=>[l(d,null,{default:i(()=>[l(m)]),_:1}),C(h(s.updateText),1)]),_:1},8,["onClick","disabled"])}const Ke=v(Me,[["render",We]]),Qe={name:"updateDomainInfo",props:{},components:{},data(){return{updateTimer:null}},computed:{disableUpdateButton(){return this.updateTimer!=null},updateText(){return this.disableUpdateButton?this.$t("\u6B63\u5728\u68C0\u67E5"):this.$t("\u8BC1\u4E66\u68C0\u67E5")}},methods:{async handleNotifyByEventId(){let e=this.$loading({lock:!0,text:"\u68C0\u67E5\u4E2D",fullscreen:!0});try{const t=await this.$http.handleNotifyByEventId({event_id:K.SSL_CERT_EXPIRE});t.ok&&this.$msg.success(`\u68C0\u67E5\u6E20\u9053\uFF1A${t.data.success}`)}catch(t){console.log(t)}finally{this.$nextTick(()=>{e.close()})}}},beforeUnmount(){clearInterval(this.updateTimer),this.updateTimer=null},created(){}};function Xe(e,t,o,f,n,s){const m=a("Position"),d=a("el-icon"),p=a("el-link");return u(),w(p,{underline:!1,type:"primary",onClick:s.handleNotifyByEventId,disabled:s.disableUpdateButton},{default:i(()=>[l(d,null,{default:i(()=>[l(m)]),_:1}),C(h(s.updateText),1)]),_:1},8,["onClick","disabled"])}const Je=v(Qe,[["render",Xe]]),Ze={name:"ConditionFilter",props:{},components:{ConditionFilterGroup:le},data(){return{loading:!0,options:[{title:"\u8BC1\u4E66\u72B6\u6001",maxCount:1,field:"expire_days",selected:[],options:[{label:"\u5DF2\u8FC7\u671F",value:[null,3]},{label:"3\u5929\u5185\u8FC7\u671F",value:[0,3]},{label:"7\u5929\u5185\u8FC7\u671F",value:[0,7]},{label:"30\u5929\u5185\u8FC7\u671F",value:[0,30]}]},{title:"\u57DF\u540D\u5206\u7EC4",field:"group_ids",hidden:!0,selected:[],options:[]}]}},computed:{...j(A,{groupOptions:"getGroupOptions"})},methods:{async resetData(){const e=await this.$http.getGroupList();e.ok&&this.options.forEach(t=>{t.field=="group_ids"&&(e.data.list&&e.data.list.length>0?(t.options=e.data.list.map(o=>{let f=o.name;return{...o,value:o.id,label:f}}),t.hidden=!1):t.hidden=!0)}),this.loading=!1},handleChange(e){this.$emit("on-change",this.options)}},created(){this.resetData()}},et={class:""};function tt(e,t,o,f,n,s){const m=a("ConditionFilterGroup"),d=L("loading");return P((u(),g("div",et,[l(m,{options:n.options,onOnChange:s.handleChange},null,8,["options","onOnChange"])])),[[d,n.loading]])}const ot=v(Ze,[["render",tt]]),lt={name:"domain-list",props:{role:{type:Number,default:z.User}},components:{DataFormDialog:H,DataTable:Ye,SelectGroup:N,UpdateDomainInfo:Ke,CheckDomainInfo:Je,ConditionFilter:ot,DataCount:re,ExportFileDialog:ne},data(){return{RoleEnum:z,dataApi:G,list:[],total:0,page:1,size:20,keyword:"",group_id:"",pageSizeCachekey:"pageSize",loading:!0,dialogVisible:!1,export_to_file_url:Q(G.exportDomainToFile),order_type:"ascending",order_prop:"expire_days",hasInitData:!1,ConditionFilterParams:[],selectedRows:[],params:{},exportFileDialogVisible:!1}},computed:{...j(A,{groupOptions:"getGroupOptions"}),showBatchDeleteButton(){return!!(this.selectedRows&&this.selectedRows.length>0)}},methods:{...Z(A,{updateGroupOptions:"updateGroupOptions"}),resetData(){this.page=1,this.getData()},refreshData(){this.getData()},async getData(){this.loading=!0;let e={page:this.page,size:this.size,group_id:this.group_id,keyword:this.keyword.trim(),order_type:this.order_type,order_prop:this.order_prop,role:this.role};for(let o of this.ConditionFilterParams)o.selected&&o.selected.length>0&&(o.maxCount==1?e[o.field]=o.selected[0]:e[o.field]=o.selected);this.params=e;const t=await this.$http.getDomainList(e);t.code==0?(this.list=t.data.list,this.total=t.data.total):this.$msg.error(t.msg),this.loading=!1},getGroupName(e){let t=this.groupOptions.find(o=>o.value==e);if(t)return t.name},async handleHttpRequest(e){let t=this.$loading({fullscreen:!0}),o=new FormData;o.append("file",e.file),(await this.$http.importDomainFromFile(o)).code==0&&(this.$msg.success("\u4E0A\u4F20\u6210\u529F\uFF0C\u540E\u53F0\u5BFC\u5165\u4E2D"),this.resetData(),this.$refs.ConditionFilter&&this.$refs.ConditionFilter.resetData(),this.updateGroupOptions()),t.close()},handleAddRow(){this.dialogVisible=!0},handleAddSuccess(){this.resetData()},async handleExportConfirm(e){const t=await this.$http.exportDomainFile({...this.params,ext:e.ext});t.ok&&se.saveAs(t.data.url,t.data.name)},handleExportToFile(){this.exportFileDialogVisible=!0},handleSearch(){this.resetData()},handleSizeChange(e){localStorage.setItem(this.pageSizeCachekey,e),this.resetData()},loadPageSize(){let e=localStorage.getItem(this.pageSizeCachekey);e&&(this.size=parseInt(e))},handleExceed(e){this.$refs.upload.clearFiles();const t=e[0];t.uid=de(),this.handleHttpRequest({file:t})},handleSortChange({column:e,prop:t,order:o}){console.log(e,t,o),this.order_prop="",this.order_type="",o&&(this.order_type=o,this.order_prop=t),this.resetData()},async initData(){this.loadPageSize(),await this.updateGroupOptions(),this.hasInitData=!0,this.getData()},handleSelectionChange(e){this.selectedRows=e},handleConditionFilterChange(e){console.log(e),this.ConditionFilterParams=e,this.resetData()},async handleBatchDeleteConfirm(){let e=this.$loading({fullscreen:!0}),t={ids:this.selectedRows.map(o=>o.id)};try{const o=await this.$http.deleteDomainByIds(t);o.code==0?(this.$msg.success("\u64CD\u4F5C\u6210\u529F"),this.resetData()):this.$msg.error(o.msg)}catch(o){console.log(o)}finally{this.$nextTick(()=>{e.close()})}},async handleRefreshRow(e){let t={id:e.id};const o=await this.$http.getDomainById(t);if(o.ok){let f=this.list.findIndex(n=>n.id==e.id);this.list.splice(f,1,o.data),console.log(this.list)}}},created(){this.keyword=this.$route.query.keyword||this.keyword,this.initData()}},nt={class:"app-container"},it={class:"flex",style:{"justify-content":"space-between"}},at={key:0},st={key:0},rt={class:"flex mt-sm",style:{"align-items":"center"}},dt={class:"flex",style:{"margin-left":"auto"}},mt=c("div",{style:{position:"absolute",top:"0",left:"0",right:"0",bottom:"0"}},null,-1);function ut(e,t,o,f,n,s){const m=a("Plus"),d=a("el-icon"),p=a("el-button"),x=a("Search"),y=a("el-input"),S=a("ConditionFilter"),V=a("DataCount"),O=a("Delete"),R=a("el-link"),F=a("el-popconfirm"),I=a("UpdateDomainInfo"),U=a("CheckDomainInfo"),$=a("Upload"),E=a("el-upload"),_=a("Download"),B=a("DataTable"),r=a("el-pagination"),b=a("DataFormDialog"),Y=a("ExportFileDialog"),M=L("loading");return u(),g("div",nt,[c("div",it,[n.RoleEnum.Admin==o.role?(u(),g("span",at)):(u(),w(p,{key:1,type:"primary",onClick:s.handleAddRow},{default:i(()=>[l(d,null,{default:i(()=>[l(m)]),_:1}),C(h(e.$t("\u6DFB\u52A0")),1)]),_:1},8,["onClick"])),l(y,{class:"ml-sm",style:{width:"260px"},modelValue:n.keyword,"onUpdate:modelValue":t[0]||(t[0]=k=>n.keyword=k),placeholder:e.$t("\u641C\u7D22\u57DF\u540D"),clearable:"",onKeypress:ee(s.handleSearch,["enter"]),onClear:s.handleSearch},{append:i(()=>[l(p,{onClick:s.handleSearch},{default:i(()=>[l(d,null,{default:i(()=>[l(x)]),_:1})]),_:1},8,["onClick"])]),_:1},8,["modelValue","placeholder","onKeypress","onClear"])]),n.RoleEnum.Admin==o.role?(u(),g("span",st)):(u(),g(T,{key:1},[n.hasInitData?(u(),w(S,{key:0,class:"mt-md",ref:"ConditionFilter",onOnChange:s.handleConditionFilterChange},null,8,["onOnChange"])):D("",!0)],64)),c("div",rt,[l(V,{value:n.total},null,8,["value"]),c("div",dt,[s.showBatchDeleteButton?(u(),w(F,{key:0,title:"\u786E\u5B9A\u5220\u9664\u9009\u4E2D\uFF1F",onConfirm:s.handleBatchDeleteConfirm},{reference:i(()=>[l(R,{underline:!1,type:"danger",class:"mr-sm"},{default:i(()=>[l(d,null,{default:i(()=>[l(O)]),_:1}),C("\u6279\u91CF\u5220\u9664")]),_:1})]),_:1},8,["onConfirm"])):D("",!0),l(I,{onOnSuccess:s.resetData},null,8,["onOnSuccess"]),n.RoleEnum.Admin!=o.role?(u(),g(T,{key:1},[l(U,{class:"ml-sm",onOnSuccess:s.resetData},null,8,["onOnSuccess"]),l(R,{underline:!1,type:"primary",class:"ml-sm",style:{position:"relative"}},{default:i(()=>[l(d,null,{default:i(()=>[l($)]),_:1}),C(h(e.$t("\u5BFC\u5165"))+" ",1),l(E,{ref:"upload",action:"action",accept:".txt,.csv,.xlsx",limit:1,"on-exceed":s.handleExceed,"show-file-list":!1,"http-request":s.handleHttpRequest},{default:i(()=>[mt]),_:1},8,["on-exceed","http-request"])]),_:1}),l(R,{underline:!1,type:"primary",class:"ml-sm",onClick:s.handleExportToFile},{default:i(()=>[l(d,null,{default:i(()=>[l(_)]),_:1}),C(h(e.$t("\u5BFC\u51FA")),1)]),_:1},8,["onClick"])],64)):D("",!0)])]),P(l(B,{class:"mt-sm",role:o.role,data:n.list,onOnSuccess:s.resetData,onOnRefreshRow:s.handleRefreshRow,onSortChange:s.handleSortChange,onSelectionChange:s.handleSelectionChange},null,8,["role","data","onOnSuccess","onOnRefreshRow","onSortChange","onSelectionChange"]),[[M,n.loading]]),l(r,{class:"mt-md justify-center",background:"",layout:"total, sizes, prev, pager, next",total:n.total,"page-size":n.size,"onUpdate:pageSize":t[1]||(t[1]=k=>n.size=k),"current-page":n.page,"onUpdate:currentPage":t[2]||(t[2]=k=>n.page=k),onCurrentChange:s.getData,onSizeChange:s.handleSizeChange},null,8,["total","page-size","current-page","onCurrentChange","onSizeChange"]),l(b,{visible:n.dialogVisible,"onUpdate:visible":t[3]||(t[3]=k=>n.dialogVisible=k),onOnSuccess:s.handleAddSuccess},null,8,["visible","onOnSuccess"]),l(Y,{visible:n.exportFileDialogVisible,"onUpdate:visible":t[4]||(t[4]=k=>n.exportFileDialogVisible=k),onOnConfirm:s.handleExportConfirm},null,8,["visible","onOnConfirm"])])}const kt=v(lt,[["render",ut]]);export{kt as default};