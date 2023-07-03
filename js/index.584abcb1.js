import{i as j,E as q}from"./event-enums.6c6f25e7.js";import{S as A,u as T}from"./SelectGroup.636db6a7.js";import{_ as C,d as E,r as H}from"./index.aaf6eee5.js";import{ah as s,ar as $,Q as B,o as _,c as x,V as i,P as a,a as u,T as b,O as w,S as I,U as h,L as M,ax as z,aA as Y,a9 as K}from"./vendor-vue.edbe275b.js";import{E as P,A as Q,a as X,b as J,C as Z}from"./ConditionFilterGroup.f123974d.js";import{F as ee}from"./vendor-lib.aab05a6a.js";import{a as te}from"./element-plus.83d58e84.js";import"./element-icon.ade3aa7e.js";const oe={domain:[{message:"\u57DF\u540D\u4E0D\u80FD\u4E3A\u7A7A",required:!0,trigger:"blur"}],port:[{required:!1,trigger:"blur",validator:(o,e,t)=>{if(!e)return t();if(j(e))t();else return t(new Error("\u7AEF\u53E3\u53F7\u53EA\u80FD\u662F\u6570\u5B57"))}}]},ie={name:"",props:{row:{type:Object,default:null}},components:{SelectGroup:A},data(){return{loading:!1,form:{domain:"",comment:"",port:443,group_id:"",domain_start_time:"",domain_expire_time:""},rules:oe,disabledTime:!1}},computed:{disabledDomain(){return!!this.row}},methods:{async getData(){if(this.loading=!0,this.row){let o={domain_info_id:this.row.id},t=(await this.$http.getDomainInfoById(o)).data;this.form.domain=t.domain,this.form.comment=t.comment,this.form.group_id=t.group_id,this.form.domain_start_time=t.domain_start_time,this.form.domain_expire_time=t.domain_expire_time,this.form.group_id==0&&(this.form.group_id=""),t.is_auto_update&&(this.disabledTime=!0)}this.loading=!1},handleCancel(){this.$emit("on-cancel")},handleSubmit(){console.log("handleSubmit",this.form),this.$refs.form.validate(o=>{if(console.log(o),o)this.confirmSubmit();else return!1})},async confirmSubmit(){let o=this.$loading({fullscreen:!0}),e={domain:this.form.domain.trim(),comment:this.form.comment.trim(),group_id:this.form.group_id,domain_start_time:this.form.domain_start_time,domain_expire_time:this.form.domain_expire_time},t=null;this.row?(e.domain_info_id=this.row.id,t=await this.$http.updateDomainInfoById(e)):t=await this.$http.addDomainInfo(e),t.code==0?(this.$msg.success("\u64CD\u4F5C\u6210\u529F"),this.$emit("on-success")):this.$msg.error(t.msg),this.$nextTick(()=>{o.close()})}},created(){this.getData()}},ne={class:"text-center"};function ae(o,e,t,m,n,l){const c=s("el-input"),r=s("el-form-item"),p=s("el-date-picker"),y=s("SelectGroup"),v=s("el-form"),D=s("el-button"),k=$("loading");return B((_(),x("div",null,[i(v,{ref:"form",model:n.form,rules:n.rules,"label-width":"70px"},{default:a(()=>[i(r,{label:"\u57DF\u540D",prop:"domain"},{default:a(()=>[i(c,{type:"text",modelValue:n.form.domain,"onUpdate:modelValue":e[0]||(e[0]=f=>n.form.domain=f),placeholder:"\u8BF7\u8F93\u5165\u57DF\u540D"},null,8,["modelValue"])]),_:1}),i(r,{label:"\u6CE8\u518C\u65F6\u95F4",prop:"domain_start_time"},{default:a(()=>[i(p,{modelValue:n.form.domain_start_time,"onUpdate:modelValue":e[1]||(e[1]=f=>n.form.domain_start_time=f),type:"date","value-format":"YYYY-MM-DD HH:mm:ss",placeholder:"\u57DF\u540D\u6CE8\u518C\u65F6\u95F4",disabled:n.disabledTime},null,8,["modelValue","disabled"])]),_:1}),i(r,{label:"\u5230\u671F\u65F6\u95F4",prop:"domain_expire_time"},{default:a(()=>[i(p,{modelValue:n.form.domain_expire_time,"onUpdate:modelValue":e[2]||(e[2]=f=>n.form.domain_expire_time=f),"value-format":"YYYY-MM-DD HH:mm:ss",type:"date",placeholder:"\u57DF\u540D\u5230\u671F\u65F6\u95F4",disabled:n.disabledTime},null,8,["modelValue","disabled"])]),_:1}),i(r,{label:"\u5206\u7EC4",prop:"group_id"},{default:a(()=>[i(y,{class:"w-[150px]",modelValue:n.form.group_id,"onUpdate:modelValue":e[3]||(e[3]=f=>n.form.group_id=f),clearable:""},null,8,["modelValue"])]),_:1}),i(r,{label:"\u5907\u6CE8",prop:"comment"},{default:a(()=>[i(c,{type:"textarea",modelValue:n.form.comment,"onUpdate:modelValue":e[4]||(e[4]=f=>n.form.comment=f),rows:3,placeholder:"\u8BF7\u8F93\u5165\u5907\u6CE8"},null,8,["modelValue"])]),_:1})]),_:1},8,["model","rules"]),u("div",ne,[i(D,{onClick:l.handleCancel},{default:a(()=>[b("\u53D6 \u6D88")]),_:1},8,["onClick"]),i(D,{type:"primary",onClick:l.handleSubmit},{default:a(()=>[b("\u786E \u5B9A")]),_:1},8,["onClick"])])])),[[k,n.loading]])}const le=C(ie,[["render",ae]]),se={name:"",props:{row:{type:Object,default:null},visible:{type:Boolean,default:!1}},emits:["update:visible"],components:{DataForm:le},data(){return{}},computed:{dialogTitle(){return this.row?"\u7F16\u8F91\u57DF\u540D":"\u6DFB\u52A0\u57DF\u540D"},dialogVisible:{get(){return this.visible},set(o){this.$emit("update:visible",o)}}},methods:{handleClose(){this.$emit("on-success"),this.$emit("update:visible",!1)},handleOpen(){this.$emit("update:visible",!0)},handleSuccess(){this.handleClose(),this.$emit("on-success")}},created(){}};function re(o,e,t,m,n,l){const c=s("DataForm"),r=s("el-dialog");return _(),w(r,{title:l.dialogTitle,modelValue:l.dialogVisible,"onUpdate:modelValue":e[0]||(e[0]=p=>l.dialogVisible=p),width:"400px",center:"","append-to-body":"","lock-scroll":!1},{default:a(()=>[l.dialogVisible?(_(),w(c,{key:0,row:t.row,onOnCancel:l.handleClose,onOnSuccess:l.handleSuccess},null,8,["row","onOnCancel","onOnSuccess"])):I("",!0)]),_:1},8,["title","modelValue"])}const G=C(se,[["render",re]]);const de={name:"ShowOverflowTooltip",props:{content:{type:String}},data(){return{id:Math.random().toString(36).slice(2),disabled:!0}},watch:{content(){this.handleInit()}},methods:{handleInit(){function o(c,r=null){const p=window.getComputedStyle(c,null);return r?p[r]:p}const e=this.$refs.ShowOverflowTooltip;console.log(e);const t=document.createRange();t.setStart(e,0),t.setEnd(e,e.childNodes.length);const m=t.getBoundingClientRect().width,n=(parseInt(o(e,"paddingLeft"),10)||0)+(parseInt(o(e,"paddingRight"),10)||0);let l={rangeWidth:m,padding:n,"rangeWidth+padding":m+n,offsetWidth:e.offsetWidth,scrollWidth:e.scrollWidth};console.table(l),m+n>e.offsetWidth||e.scrollWidth>e.offsetWidth?(console.log("\u6709\u9690\u85CF\u6587\u5B57..."),this.content&&this.content.length>5?this.disabled=!1:this.disabled=!0):(console.log("\u6CA1\u6709\u9690\u85CF\u6587\u5B57"),this.disabled=!0)}},mounted(){this.$nextTick(()=>{this.handleInit()})}};function ce(o,e,t,m,n,l){const c=s("el-tooltip");return _(),w(c,{effect:"dark",disabled:n.disabled,content:t.content,placement:"top-start"},{default:a(()=>[u("div",{ref:"ShowOverflowTooltip",class:"overflow-tooltip"},h(t.content),513)]),_:1},8,["disabled","content"])}const me=C(de,[["render",ce],["__scopeId","data-v-9e813693"]]),ue={name:"",props:{row:{type:Object,default:null}},components:{ExpireDays:P,AddressList:Q,ShowOverflowTooltip:me},data(){return{form:{domain:"",domain_url:"",ip:"",start_time:"",expire_time:"",check_time:"",connect_status:"",total_days:"",expire_days:"",create_time:"",update_time:"",detail:{issuer:{},subject:{}},real_time_expire_days:"",domain_start_time:"",domain_expire_time:"",real_time_domain_expire_days:"",alias:"",domain_auto_update:"",domain_auto_update_label:"",domain_expire_monitor:"",domain_check_time_label:"",port:"",real_domain_expire_days:"",ssl_count:"",comment:"",domain_registrar:"",domain_registrar_url:""},ipInfo:{isp:""},icpInfo:null}},computed:{},methods:{async getICP(){if(!this.form.domain)return;this.loading=!0;let o={domain:this.form.domain};try{const e=await this.$http.getICP(o);this.icpInfo=e.data||{}}catch(e){console.log(e)}finally{this.loading=!1}},async getData(){if(this.row){let o={domain_info_id:this.row.id};const e=await this.$http.getDomainInfoById(o);if(e.code!=0)return;let t=e.data;this.form.domain=t.domain,this.form.update_time_label=t.update_time_label,this.form.ssl_count=t.ssl_count,this.form.comment=t.comment,this.form.domain_url=t.domain_url,this.form.domain_registrar_url=t.domain_registrar_url,this.form.domain_registrar=t.domain_registrar,this.form.ip=t.ip,this.form.start_time=t.start_time,this.form.expire_time=t.expire_time,this.form.check_time=t.check_time,this.form.connect_status=t.connect_status,this.form.total_days=t.total_days,this.form.expire_days=t.expire_days,this.form.real_time_expire_days=t.real_time_expire_days,this.form.create_time=t.create_time,this.form.update_time=t.update_time,this.form.domain_auto_update=t.domain_auto_update,this.form.domain_auto_update_label=t.is_auto_update==!0?"\u662F":"\u5426",this.form.domain_expire_monitor=t.is_expire_monitor==!0?"\u662F":"\u5426",this.form.domain_check_time_label=t.domain_check_time_label,this.form.port=t.port,this.form.real_domain_expire_days=t.real_domain_expire_days,this.form.alias=t.alias,this.form.domain_start_time=t.domain_start_time,this.form.domain_expire_time=t.domain_expire_time,this.form.real_time_domain_expire_days=t.real_time_domain_expire_days,this.getICP()}},handleCancel(){this.$emit("on-cancel")},async handleUpdateRowDomainInfo(){let o=this.$loading({lock:!0,text:"\u66F4\u65B0\u4E2D"}),e={domain_info_id:this.row.id};(await this.$http.updateDomainInfoRowById(e)).code==0&&(this.$msg.success("\u64CD\u4F5C\u6210\u529F"),this.getData()),o.close()},async getIpInfo(){let o={ip:this.form.ip};const e=await this.$http.getIpInfo(o);e.code==0&&(this.ipInfo=e.data)}},created(){this.getData()}},_e={class:"domain-detail"},pe={class:"mo-form-detail grid grid-cols-2"},he={class:"truncate"},fe={class:"flex justify-between flex-1"},ge={class:"truncate"},be={class:"truncate"},we={key:0,class:"truncate"},ye={class:"mo-form-detail mt-[20px]"},De=["href"],Ce={key:1},xe={class:"truncate"},ve={class:"text-center mt-md"};function ke(o,e,t,m,n,l){const c=s("el-link"),r=s("el-form-item"),p=s("ShowOverflowTooltip"),y=s("el-form"),v=s("ExpireDays"),D=s("Refresh"),k=s("el-icon"),f=s("el-button");return _(),x("div",_e,[u("div",pe,[i(y,{"label-width":"130px"},{default:a(()=>[i(r,{label:"\u57DF\u540D",prop:"domain"},{default:a(()=>[i(c,{underline:!1},{default:a(()=>[b(h(n.form.domain),1)]),_:1})]),_:1}),i(r,{label:"\u6CE8\u518C\u65F6\u95F4",prop:"create_time"},{default:a(()=>[u("span",null,h(n.form.domain_start_time||"-"),1)]),_:1}),i(r,{label:"\u5230\u671F\u65F6\u95F4",prop:"create_time"},{default:a(()=>[u("span",null,h(n.form.domain_expire_time||"-"),1)]),_:1}),i(r,{label:"\u81EA\u52A8\u66F4\u65B0",prop:"isp"},{default:a(()=>[u("span",he,h(n.form.domain_auto_update_label||"-"),1)]),_:1}),i(r,{label:"\u4E3B\u529E\u5355\u4F4D\u540D\u79F0",prop:"isp"},{default:a(()=>[n.icpInfo?(_(),w(p,{key:0,content:n.icpInfo.name||"-"},null,8,["content"])):I("",!0)]),_:1})]),_:1}),i(y,{"label-width":"130px",style:{"margin-right":"-1px"}},{default:a(()=>[i(r,{label:"\u8BC1\u4E66\u6570\u91CF",prop:"domain"},{default:a(()=>[u("span",null,h(n.form.ssl_count||"-"),1)]),_:1}),i(r,{label:"\u5269\u4F59\u5929\u6570",prop:"create_time"},{default:a(()=>[i(v,{value:n.form.real_domain_expire_days},null,8,["value"])]),_:1}),i(r,{label:"\u68C0\u67E5\u65F6\u95F4",prop:"isp"},{default:a(()=>[u("div",fe,[u("span",ge,h(n.form.update_time_label||"-"),1),i(c,{underline:!1,type:"primary",class:"mr-sm",onClick:l.handleUpdateRowDomainInfo},{default:a(()=>[i(k,null,{default:a(()=>[i(D)]),_:1})]),_:1},8,["onClick"])])]),_:1}),i(r,{label:"\u5230\u671F\u63D0\u9192",prop:"isp"},{default:a(()=>[u("span",be,h(n.form.domain_expire_monitor||"-"),1)]),_:1}),i(r,{label:"ICP\u5907\u6848",prop:"isp"},{default:a(()=>[n.icpInfo?(_(),x("span",we,h(n.icpInfo.icp||"-"),1)):I("",!0)]),_:1})]),_:1})]),u("div",ye,[i(y,{"label-width":"130px"},{default:a(()=>[i(r,{label:"\u6CE8\u518C\u5546",prop:"domain_registrar"},{default:a(()=>[n.form.domain_registrar_url?(_(),x("a",{key:0,href:n.form.domain_registrar_url,target:"_blank",class:"mo-link"},h(n.form.domain_registrar),9,De)):(_(),x("span",Ce,h(n.form.domain_registrar||"-"),1))]),_:1}),i(r,{label:"\u5907\u6CE8",prop:"comment"},{default:a(()=>[u("span",xe,h(n.form.comment||"-"),1)]),_:1})]),_:1})]),u("div",ve,[i(f,{type:"primary",onClick:l.handleCancel},{default:a(()=>[b("\u5173 \u95ED")]),_:1},8,["onClick"])])])}const Se=C(ue,[["render",ke]]),Ie={name:"",props:{row:{type:Object,default:null},visible:{type:Boolean,default:!1}},emits:["update:visible"],components:{DataForm:Se},data(){return{}},computed:{dialogTitle(){return this.row?"\u7F16\u8F91":"\u6DFB\u52A0"},dialogVisible:{get(){return this.visible},set(o){this.$emit("update:visible",o)}}},methods:{handleClose(){this.dialogVisible=!1},handleOpen(){this.dialogVisible=!0},handleSuccess(){this.handleClose()},handleDialogClose(){this.$emit("on-success")}},created(){}};function Ve(o,e,t,m,n,l){const c=s("DataForm"),r=s("el-dialog");return _(),w(r,{title:"\u57DF\u540D\u8BE6\u60C5",modelValue:l.dialogVisible,"onUpdate:modelValue":e[0]||(e[0]=p=>l.dialogVisible=p),width:"800px",center:"","append-to-body":"","lock-scroll":!1,onClose:l.handleDialogClose},{default:a(()=>[l.dialogVisible?(_(),w(c,{key:0,row:t.row,onOnCancel:l.handleClose,onOnSuccess:l.handleSuccess},null,8,["row","onOnCancel","onOnSuccess"])):I("",!0)]),_:1},8,["modelValue","onClose"])}const Oe=C(Ie,[["render",Ve]]),Re={name:"",components:{DataFormDialog:G,DataDetailDialog:Oe,ExpireDays:P,ExpireProgress:X,AddressListgDialog:J},emits:["on-success","selection-change","sort-change","on-refresh-row"],props:{},computed:{},data(){return{currentRow:null,dialogVisible:!1,dialogDetailVisible:!1,AddressListgDialogVisible:!1}},methods:{handleEditRow(o){this.currentRow=o,this.dialogVisible=!0},async handleDeleteClick(o){let e={domain_info_id:o.id};const t=await this.$http.deleteDomainInfoById(e);t.code==0?(this.$msg.success("\u64CD\u4F5C\u6210\u529F"),this.$emit("on-success")):this.$msg.error(t.msg)},async handleStatusChange(o){let e={id:o.id};const t=await this.$Http.function(e);t.code==0?(this.$msg.success("\u64CD\u4F5C\u6210\u529F"),this.$emit("on-success")):this.$msg.error(t.msg)},async handleMonitorStatusChange(o,e){let t={domain_info_id:o.id,field:"is_expire_monitor",value:e};const m=await this.$http.updateDomainInfoFieldById(t);m.code==0?this.$msg.success("\u64CD\u4F5C\u6210\u529F"):this.$msg.error(m.msg)},async handleAutoUpdateStatusChange(o,e){let t={domain_info_id:o.id,field:"is_auto_update",value:e};const m=await this.$http.updateDomainInfoFieldById(t);m.code==0?this.$msg.success("\u64CD\u4F5C\u6210\u529F"):this.$msg.error(m.msg)},async handleUpdateRowDomainInfo(o){let e=this.$loading({lock:!0,text:"\u66F4\u65B0\u4E2D"}),t={domain_info_id:o.id};(await this.$http.updateDomainInfoRowById(t)).code==0&&(this.$msg.success("\u64CD\u4F5C\u6210\u529F"),this.$emit("on-success")),e.close()},handleUpdateSuccess(){this.$emit("on-success")},handleDetailSuccess(){},handleShowDetail(o){this.currentRow=o,this.dialogDetailVisible=!0},handleShowAddressListgDialog(o){this.currentRow=o,this.AddressListgDialogVisible=!0},handleCertCountClick(o){let e=this.$router.resolve({name:"domain-list",query:{keyword:o.domain}});window.open(e.href,"_blank")},handleRefreshRow(o){this.$emit("on-refresh-row",o)}},created(){}},Ue={key:1};function Fe(o,e,t,m,n,l){const c=s("el-table-column"),r=s("el-link"),p=s("ExpireDays"),y=s("el-switch"),v=s("Refresh"),D=s("el-icon"),k=s("Edit"),f=s("Delete"),V=s("el-popconfirm"),O=s("el-table"),R=s("DataFormDialog"),U=s("DataDetailDialog"),F=s("AddressListgDialog");return _(),x("div",null,[i(O,M({stripe:"",border:""},o.$attrs,{onSortChange:e[0]||(e[0]=d=>o.$emit("sort-change",d)),onSelectionChange:e[1]||(e[1]=d=>o.$emit("selection-change",d))}),{default:a(()=>[i(c,{type:"selection","header-align":"center",align:"center",width:"40"}),i(c,{label:"\u57DF\u540D","header-align":"center",align:"center",width:"250","show-overflow-tooltip":"",prop:"domain"},{default:a(d=>[i(r,{underline:!1,onClick:g=>l.handleShowDetail(d.row)},{default:a(()=>[b(h(d.row.domain),1)]),_:2},1032,["onClick"])]),_:1}),i(c,{label:"\u57DF\u540D\u5929\u6570","header-align":"center",align:"center",width:"90",sortable:"custom",prop:"domain_expire_days"},{default:a(d=>[i(p,{value:d.row.real_domain_expire_days},null,8,["value"])]),_:1}),i(c,{label:"\u8BC1\u4E66\u6570\u91CF","header-align":"center",align:"center",width:"100"},{default:a(d=>[d.row.ssl_count&&d.row.ssl_count>0?(_(),w(r,{key:0,underline:!1,onClick:g=>l.handleCertCountClick(d.row)},{default:a(()=>[b(h(d.row.ssl_count),1)]),_:2},1032,["onClick"])):(_(),x("span",Ue,"-"))]),_:1}),i(c,{label:"\u5206\u7EC4","header-align":"center",align:"center",width:"100",sortable:"custom",prop:"group_name"},{default:a(d=>[u("span",null,h(d.row.group_name||"-"),1)]),_:1}),i(c,{label:"\u5907\u6CE8","header-align":"center",align:"left",prop:"comment","show-overflow-tooltip":""},{default:a(d=>[u("span",null,h(d.row.comment||"-"),1)]),_:1}),i(c,{label:"\u66F4\u65B0\u65F6\u95F4","header-align":"center",align:"center",width:"90",prop:"update_time",sortable:"custom","show-overflow-tooltip":""},{default:a(d=>[u("span",null,h(d.row.update_time_label||"-"),1)]),_:1}),i(c,{label:"\u81EA\u52A8\u66F4\u65B0",width:"90","header-align":"center",align:"center",sortable:"custom",prop:"domain_expire_monitor"},{default:a(d=>[i(y,{modelValue:d.row.is_auto_update,"onUpdate:modelValue":g=>d.row.is_auto_update=g,onChange:g=>l.handleAutoUpdateStatusChange(d.row,g)},null,8,["modelValue","onUpdate:modelValue","onChange"])]),_:1}),i(c,{label:"\u5230\u671F\u63D0\u9192",width:"90","header-align":"center",align:"center",sortable:"custom",prop:"is_expire_monitor"},{default:a(d=>[i(y,{modelValue:d.row.is_expire_monitor,"onUpdate:modelValue":g=>d.row.is_expire_monitor=g,onChange:g=>l.handleMonitorStatusChange(d.row,g)},null,8,["modelValue","onUpdate:modelValue","onChange"])]),_:1}),i(c,{label:"\u64CD\u4F5C",width:"100","header-align":"center",align:"center"},{default:a(d=>[i(r,{underline:!1,type:"primary",class:"mr-sm",onClick:g=>l.handleUpdateRowDomainInfo(d.row)},{default:a(()=>[i(D,null,{default:a(()=>[i(v)]),_:1})]),_:2},1032,["onClick"]),i(r,{underline:!1,type:"primary",class:"mr-sm",onClick:g=>l.handleEditRow(d.row)},{default:a(()=>[i(D,null,{default:a(()=>[i(k)]),_:1})]),_:2},1032,["onClick"]),i(V,{title:"\u786E\u5B9A\u5220\u9664\uFF1F",onConfirm:g=>l.handleDeleteClick(d.row)},{reference:a(()=>[i(r,{underline:!1,type:"danger"},{default:a(()=>[i(D,null,{default:a(()=>[i(f)]),_:1})]),_:1})]),_:2},1032,["onConfirm"])]),_:1})]),_:1},16),i(R,{visible:n.dialogVisible,"onUpdate:visible":e[2]||(e[2]=d=>n.dialogVisible=d),row:n.currentRow,onOnSuccess:e[3]||(e[3]=d=>l.handleRefreshRow(n.currentRow))},null,8,["visible","row"]),i(U,{row:n.currentRow,visible:n.dialogDetailVisible,"onUpdate:visible":e[4]||(e[4]=d=>n.dialogDetailVisible=d),onOnSuccess:e[5]||(e[5]=d=>l.handleRefreshRow(n.currentRow))},null,8,["row","visible"]),n.currentRow?(_(),w(F,{key:0,domainId:n.currentRow.id,visible:n.AddressListgDialogVisible,"onUpdate:visible":e[6]||(e[6]=d=>n.AddressListgDialogVisible=d),onOnSuccess:l.handleUpdateSuccess},null,8,["domainId","visible","onOnSuccess"])):I("",!0)])}const Te=C(Re,[["render",Fe]]),$e={name:"updateDomainInfo",props:{},components:{},data(){return{updateTimer:null}},computed:{disableUpdateButton(){return this.updateTimer!=null},updateText(){return this.disableUpdateButton?"\u6B63\u5728\u66F4\u65B0":"\u5168\u90E8\u66F4\u65B0"}},methods:{async updateAllDomainCertInfoOfUser(){this.updateTimer=!0,(await this.$http.updateDomainInfoOfUser()).code==0&&this.$msg.success("\u540E\u53F0\u66F4\u65B0\u4E2D\uFF0C\u5237\u65B0\u67E5\u770B")}},beforeUnmount(){clearInterval(this.updateTimer),this.updateTimer=null},created(){}};function Be(o,e,t,m,n,l){const c=s("Refresh"),r=s("el-icon"),p=s("el-link");return _(),w(p,{underline:!1,type:"primary",onClick:l.updateAllDomainCertInfoOfUser,disabled:l.disableUpdateButton},{default:a(()=>[i(r,null,{default:a(()=>[i(c)]),_:1}),b(h(l.updateText),1)]),_:1},8,["onClick","disabled"])}const Ee=C($e,[["render",Be]]),Ae={name:"updateDomainInfo",props:{},components:{},data(){return{updateTimer:null}},computed:{disableUpdateButton(){return this.updateTimer!=null},updateText(){return this.disableUpdateButton?"\u6B63\u5728\u68C0\u67E5":"\u57DF\u540D\u68C0\u67E5"}},methods:{async handleNotifyByEventId(){let o=this.$loading({lock:!0,text:"\u68C0\u67E5\u4E2D",fullscreen:!0});try{const e=await this.$http.handleNotifyByEventId({event_id:q.DOMAIN_EXPIRE});e.ok&&this.$msg.success(`\u68C0\u67E5\u6E20\u9053\uFF1A${e.data.success}`)}catch(e){console.log(e)}finally{this.$nextTick(()=>{o.close()})}}},beforeUnmount(){clearInterval(this.updateTimer),this.updateTimer=null},created(){}};function ze(o,e,t,m,n,l){const c=s("Position"),r=s("el-icon"),p=s("el-link");return _(),w(p,{underline:!1,type:"primary",onClick:l.handleNotifyByEventId,disabled:l.disableUpdateButton},{default:a(()=>[i(r,null,{default:a(()=>[i(c)]),_:1}),b(h(l.updateText),1)]),_:1},8,["onClick","disabled"])}const Pe=C(Ae,[["render",ze]]),Ge={name:"ConditionFilter",props:{},components:{ConditionFilterGroup:Z},data(){return{loading:!0,options:[{title:"\u57DF\u540D\u72B6\u6001",field:"domain_expire_days",selected:[],maxCount:1,options:[{label:"\u5DF2\u8FC7\u671F",value:[null,3]},{label:"3\u5929\u5185\u8FC7\u671F",value:[0,3]},{label:"7\u5929\u5185\u8FC7\u671F",value:[0,7]},{label:"30\u5929\u5185\u8FC7\u671F",value:[0,30]}]},{title:"\u57DF\u540D\u5206\u7EC4",field:"group_ids",hidden:!0,selected:[],options:[]}]}},computed:{...z(T,{groupOptions:"getGroupOptions"})},methods:{async resetData(){const o=await this.$http.getDomainInfoGroupFilter();o.ok&&this.options.forEach(e=>{e.field=="group_ids"&&(o.data.list&&o.data.list.length>0?(e.options=o.data.list.map(t=>{let m=t.name;return t.domain_count>0&&(m=`${t.name} ${t.domain_count}`),{...t,value:t.id,label:m}}),e.hidden=!1):e.hidden=!0)}),this.loading=!1},handleChange(o){this.$emit("on-change",this.options)}},created(){this.resetData()}},Le={class:""};function Ne(o,e,t,m,n,l){const c=s("ConditionFilterGroup"),r=$("loading");return B((_(),x("div",Le,[i(c,{options:n.options,onOnChange:l.handleChange},null,8,["options","onOnChange"])])),[[r,n.loading]])}const We=C(Ge,[["render",Ne]]),je={name:"domain-list",props:{},components:{DataFormDialog:G,DataTable:Te,SelectGroup:A,UpdateDomainInfo:Ee,CheckDomainInfo:Pe,ConditionFilter:We},data(){return{dataApi:E,list:[],total:0,page:1,size:20,keyword:"",group_id:"",pageSizeCachekey:"pageSize",loading:!0,dialogVisible:!1,export_to_file_url:H(E.exportDomainToFile),order_type:"ascending",order_prop:"domain_expire_days",hasInitData:!1,ConditionFilterParams:[],selectedRows:[]}},computed:{...z(T,{groupOptions:"getGroupOptions"}),showBatchDeleteButton(){return!!(this.selectedRows&&this.selectedRows.length>0)}},methods:{...Y(T,{updateGroupOptions:"updateGroupOptions"}),resetData(){this.page=1,this.getData()},refreshData(){this.getData()},async getData(){this.loading=!0;let o={page:this.page,size:this.size,group_id:this.group_id,keyword:this.keyword.trim(),order_type:this.order_type,order_prop:this.order_prop};for(let t of this.ConditionFilterParams)t.selected&&t.selected.length>0&&(t.maxCount==1?o[t.field]=t.selected[0]:o[t.field]=t.selected);const e=await this.$http.getDomainInfoList(o);e.code==0?(this.list=e.data.list,this.total=e.data.total):this.$msg.error(e.msg),this.loading=!1},getGroupName(o){let e=this.groupOptions.find(t=>t.value==o);if(e)return e.name},async handleHttpRequest(o){let e=this.$loading({fullscreen:!0}),t=new FormData;t.append("file",o.file),(await this.$http.importDomainInFromFile(t)).code==0&&(this.$msg.success("\u4E0A\u4F20\u6210\u529F\uFF0C\u540E\u53F0\u5BFC\u5165\u4E2D"),this.resetData(),this.$refs.ConditionFilter&&this.$refs.ConditionFilter.resetData(),this.updateGroupOptions()),e.close()},handleAddRow(){this.dialogVisible=!0},handleAddSuccess(){this.resetData()},async handleExportToFile(){const o=await this.$http.exportDomainInfoFile();o.ok&&ee.saveAs(o.data.url,o.data.name)},handleSearch(){this.resetData()},handleSizeChange(o){localStorage.setItem(this.pageSizeCachekey,o),this.resetData()},loadPageSize(){let o=localStorage.getItem(this.pageSizeCachekey);o&&(this.size=parseInt(o))},handleExceed(o){this.$refs.upload.clearFiles();const e=o[0];e.uid=te(),this.handleHttpRequest({file:e})},handleSortChange({column:o,prop:e,order:t}){console.log(o,e,t),this.order_prop="",this.order_type="",t&&(this.order_type=t,this.order_prop=e),this.resetData()},async initData(){this.loadPageSize(),await this.updateGroupOptions(),this.hasInitData=!0,this.getData()},handleSelectionChange(o){this.selectedRows=o},handleConditionFilterChange(o){console.log(o),this.ConditionFilterParams=o,this.resetData()},async handleBatchDeleteConfirm(){let o=this.$loading({fullscreen:!0}),e={domain_info_ids:this.selectedRows.map(t=>t.id)};try{const t=await this.$http.deleteDomainInfoByIds(e);t.code==0?(this.$msg.success("\u64CD\u4F5C\u6210\u529F"),this.resetData()):this.$msg.error(t.msg)}catch(t){console.log(t)}finally{this.$nextTick(()=>{o.close()})}},async handleRefreshRow(o){let e={domain_info_id:o.id};const t=await this.$http.getDomainInfoById(e);if(t.ok){let m=this.list.findIndex(n=>n.id==o.id);this.list.splice(m,1,t.data),console.log(this.list)}}},created(){this.initData()}},qe={class:"app-container"},He={class:"flex",style:{"justify-content":"space-between"}},Me={class:"flex mt-sm",style:{"align-items":"center"}},Ye={style:{"font-size":"14px",color:"#333333"}},Ke={class:"flex",style:{"margin-left":"auto"}},Qe=u("div",{style:{position:"absolute",top:"0",left:"0",right:"0",bottom:"0"}},null,-1);function Xe(o,e,t,m,n,l){const c=s("Plus"),r=s("el-icon"),p=s("el-button"),y=s("Search"),v=s("el-input"),D=s("ConditionFilter"),k=s("Delete"),f=s("el-link"),V=s("el-popconfirm"),O=s("UpdateDomainInfo"),R=s("CheckDomainInfo"),U=s("Upload"),F=s("el-upload"),d=s("Download"),g=s("DataTable"),L=s("el-pagination"),N=s("DataFormDialog"),W=$("loading");return _(),x("div",qe,[u("div",He,[i(p,{type:"primary",onClick:l.handleAddRow},{default:a(()=>[i(r,null,{default:a(()=>[i(c)]),_:1}),b("\u6DFB\u52A0")]),_:1},8,["onClick"]),i(v,{class:"ml-sm",style:{width:"260px"},modelValue:n.keyword,"onUpdate:modelValue":e[0]||(e[0]=S=>n.keyword=S),placeholder:"\u641C\u7D22\u57DF\u540D",clearable:"",onKeypress:K(l.handleSearch,["enter"]),onClear:l.handleSearch},{append:a(()=>[i(p,{onClick:l.handleSearch},{default:a(()=>[i(r,null,{default:a(()=>[i(y)]),_:1})]),_:1},8,["onClick"])]),_:1},8,["modelValue","onKeypress","onClear"])]),n.hasInitData?(_(),w(D,{key:0,class:"mt-md",ref:"ConditionFilter",onOnChange:l.handleConditionFilterChange},null,8,["onOnChange"])):I("",!0),u("div",Me,[u("div",Ye,"\u5171\u8BA1 "+h(n.total)+" \u6761\u6570\u636E",1),u("div",Ke,[l.showBatchDeleteButton?(_(),w(V,{key:0,title:"\u786E\u5B9A\u5220\u9664\u9009\u4E2D\uFF1F",onConfirm:l.handleBatchDeleteConfirm},{reference:a(()=>[i(f,{underline:!1,type:"danger",class:"mr-sm"},{default:a(()=>[i(r,null,{default:a(()=>[i(k)]),_:1}),b("\u6279\u91CF\u5220\u9664")]),_:1})]),_:1},8,["onConfirm"])):I("",!0),i(O,{onOnSuccess:l.resetData},null,8,["onOnSuccess"]),i(R,{class:"ml-sm",onOnSuccess:l.resetData},null,8,["onOnSuccess"]),i(f,{underline:!1,type:"primary",class:"ml-sm",style:{position:"relative"}},{default:a(()=>[i(r,null,{default:a(()=>[i(U)]),_:1}),b("\u5BFC\u5165 "),i(F,{ref:"upload",action:"action",accept:".txt",limit:1,"on-exceed":l.handleExceed,"show-file-list":!1,"http-request":l.handleHttpRequest},{default:a(()=>[Qe]),_:1},8,["on-exceed","http-request"])]),_:1}),i(f,{underline:!1,type:"primary",class:"ml-sm",onClick:l.handleExportToFile},{default:a(()=>[i(r,null,{default:a(()=>[i(d)]),_:1}),b("\u5BFC\u51FA")]),_:1},8,["onClick"])])]),B(i(g,{class:"mt-sm",data:n.list,onOnSuccess:l.resetData,onSortChange:l.handleSortChange,onSelectionChange:l.handleSelectionChange,onOnRefreshRow:l.handleRefreshRow},null,8,["data","onOnSuccess","onSortChange","onSelectionChange","onOnRefreshRow"]),[[W,n.loading]]),i(L,{class:"mt-md justify-center",background:"",layout:"total, sizes, prev, pager, next",total:n.total,"page-size":n.size,"onUpdate:pageSize":e[1]||(e[1]=S=>n.size=S),"current-page":n.page,"onUpdate:currentPage":e[2]||(e[2]=S=>n.page=S),onCurrentChange:l.getData,onSizeChange:l.handleSizeChange},null,8,["total","page-size","current-page","onCurrentChange","onSizeChange"]),i(N,{visible:n.dialogVisible,"onUpdate:visible":e[3]||(e[3]=S=>n.dialogVisible=S),onOnSuccess:l.handleAddSuccess},null,8,["visible","onOnSuccess"])])}const lt=C(je,[["render",Xe]]);export{lt as default};
