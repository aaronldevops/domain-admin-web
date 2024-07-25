import{t as p,_ as w}from"./index.2d1a2808.js";import{ah as n,o as m,c as f,V as r,P as a,F as C,a8 as N,O as v,a as S,T as y,U as h}from"./vendor-vue.cefe3aef.js";const T={dns_type_id:[{message:"\u7C7B\u578B\u4E0D\u80FD\u4E3A\u7A7A",required:!0,trigger:"blur"}],name:[{message:"\u540D\u79F0\u4E0D\u80FD\u4E3A\u7A7A",required:!0,trigger:"blur"}],access_key:[{message:"Access Key\u4E0D\u80FD\u4E3A\u7A7A",required:!0,trigger:"blur"}],secret_key:[{message:"Secret Key\u4E0D\u80FD\u4E3A\u7A7A",required:!0,trigger:"blur"}],create_time:[{message:"\u521B\u5EFA\u65F6\u95F4\u4E0D\u80FD\u4E3A\u7A7A",required:!0,trigger:"blur"}]},k={ALIYUN:1,TENCENT_CLOUD:2},g=[{value:k.ALIYUN,label:p("\u963F\u91CC\u4E91")},{value:k.TENCENT_CLOUD,label:p("\u817E\u8BAF\u4E91")}],U={name:"",props:{row:{type:Object,default:null}},components:{},data(){return{DNSTypeOptions:g,rules:T,form:{dns_type_id:g[0].value,name:"",access_key:"",secret_key:"",create_time:""}}},computed:{},methods:{async getData(){if(this.row){let o={dns_id:this.row.id};const e=await this.$http.getDnsById(o);if(e.code!=0)return;let s=e.data;this.form.dns_type_id=s.dns_type_id,this.form.name=s.name,this.form.access_key=s.access_key,this.form.secret_key=s.secret_key}},handleCancel(){this.$emit("on-cancel")},handleSubmit(){this.$refs.form.validate(o=>{if(o)this.confirmSubmit();else return!1})},async confirmSubmit(){var c;let o=this.$loading({fullscreen:!0}),e={dns_type_id:this.form.dns_type_id,name:this.form.name,access_key:this.form.access_key,secret_key:this.form.secret_key},s=null;if(this.row?(e.dns_id=this.row.id,s=await this.$http.updateDnsById(e)):s=await this.$http.addDns(e),s.code==0){const t=await this.$http.getDnsById({dns_id:((c=this.row)==null?void 0:c.id)||s.data.id});this.$msg.success("\u64CD\u4F5C\u6210\u529F"),this.$emit("on-success",t.data)}else this.$msg.error(s.msg);this.$nextTick(()=>{o.close()})}},created(){this.getData()}},x={class:"text-center"};function B(o,e,s,c,t,u){const d=n("el-input"),i=n("el-form-item"),b=n("el-option"),V=n("el-select"),D=n("el-form"),_=n("el-button");return m(),f("div",null,[r(D,{ref:"form",model:t.form,rules:t.rules,"label-width":"100px"},{default:a(()=>[r(i,{label:"\u540D\u79F0",prop:"name"},{default:a(()=>[r(d,{type:"text",modelValue:t.form.name,"onUpdate:modelValue":e[0]||(e[0]=l=>t.form.name=l),placeholder:"\u8BF7\u8F93\u5165\u540D\u79F0"},null,8,["modelValue"])]),_:1}),r(i,{label:"\u7C7B\u578B",prop:"dns_type_id"},{default:a(()=>[r(V,{modelValue:t.form.dns_type_id,"onUpdate:modelValue":e[1]||(e[1]=l=>t.form.dns_type_id=l),placeholder:o.$t("\u8BF7\u9009\u62E9\u7C7B\u578B")},{default:a(()=>[(m(!0),f(C,null,N(t.DNSTypeOptions,l=>(m(),v(b,{key:l.value,label:l.label,value:l.value},null,8,["label","value"]))),128))]),_:1},8,["modelValue","placeholder"])]),_:1}),r(i,{label:"Access Key",prop:"access_key"},{default:a(()=>[r(d,{type:"text",modelValue:t.form.access_key,"onUpdate:modelValue":e[2]||(e[2]=l=>t.form.access_key=l),placeholder:"\u8BF7\u8F93\u5165Access Key"},null,8,["modelValue"])]),_:1}),r(i,{label:"Secret Key",prop:"secret_key"},{default:a(()=>[r(d,{type:"text",modelValue:t.form.secret_key,"onUpdate:modelValue":e[3]||(e[3]=l=>t.form.secret_key=l),placeholder:"\u8BF7\u8F93\u5165Secret Key"},null,8,["modelValue"])]),_:1})]),_:1},8,["model","rules"]),S("div",x,[r(_,{onClick:u.handleCancel},{default:a(()=>[y(h(o.$t("\u53D6\u6D88")),1)]),_:1},8,["onClick"]),r(_,{type:"primary",onClick:u.handleSubmit},{default:a(()=>[y(h(o.$t("\u786E\u5B9A")),1)]),_:1},8,["onClick"])])])}const O=w(U,[["render",B]]);export{O as D,g as a};