import{_ as V}from"./index.fac11576.js";import{ah as n,o as m,c as y,V as r,P as a,a as w,F as x,a8 as C,O as h,T as g,U as b,S as D}from"./vendor-vue.9e61e0af.js";const O={host:[{message:"\u4E3B\u673A\u5730\u5740\u4E0D\u80FD\u4E3A\u7A7A",required:!0,trigger:"blur"}],user:[{message:"\u7528\u6237\u540D\u4E0D\u80FD\u4E3A\u7A7A",required:!0,trigger:"blur"}],password:[{message:"\u5BC6\u7801\u4E0D\u80FD\u4E3A\u7A7A",required:!0,trigger:"blur"}],private_key:[{message:"\u79D8\u94A5\u4E0D\u80FD\u4E3A\u7A7A",required:!0,trigger:"blur"}]},c={PASSWORD:1,PRIVATE_KEY:2},v=[{label:"\u5BC6\u7801",value:c.PASSWORD},{label:"\u79C1\u94A5\u8BC1\u4E66",value:c.PRIVATE_KEY}];function q(o){var e;return(e=v.find(s=>s.value===o))==null?void 0:e.label}const T={name:"",props:{row:{type:Object,default:null}},components:{},data(){return{rules:O,HostAuthTypeEnum:c,HostAuthTypeOptions:v,form:{host:"",port:"22",user:"",auth_type:c.PASSWORD,password:"",private_key:""}}},computed:{},methods:{async getData(){if(console.log(this.row),this.row&&this.row.id){const o=await this.getHostById(this.row.id);for(let e in this.form)this.form[e]=o[e]}else this.row&&this.row.host&&(this.form.host=this.row.host)},async getHostById(o){let e={host_id:o};return(await this.$http.getHostById(e)).data},handleCancel(){this.$emit("on-cancel")},handleSubmit(){this.$refs.form.validate(o=>{if(o)this.confirmSubmit();else return!1})},async confirmSubmit(){let o=this.$loading({fullscreen:!0}),e={host:this.form.host,port:this.form.port,user:this.form.user,password:this.form.password,private_key:this.form.private_key,auth_type:this.form.auth_type},s=null,p=null;if(this.row&&this.row.id?(p=this.row.id,e.host_id=this.row.id,s=await this.$http.updateHostById(e),{...this.row,...e}):(s=await this.$http.addHost(e),s.data,p=s.data.id),s.code==0){this.$msg.success("\u64CD\u4F5C\u6210\u529F");let t=await this.getHostById(p);this.$emit("on-success",t)}else this.$msg.error(s.msg);this.$nextTick(()=>{o.close()})}},created(){this.getData()}},A={class:"remote-host"},H={class:"flex"},B={class:"text-center"};function E(o,e,s,p,t,i){const u=n("el-input"),d=n("el-form-item"),f=n("el-option"),k=n("el-select"),S=n("el-form"),_=n("el-button");return m(),y("div",A,[r(S,{ref:"form",model:t.form,rules:t.rules,"label-width":"100px"},{default:a(()=>[r(d,{label:"\u4E3B\u673A\u5730\u5740",prop:"host"},{default:a(()=>[w("div",H,[r(u,{type:"text",modelValue:t.form.host,"onUpdate:modelValue":e[0]||(e[0]=l=>t.form.host=l),placeholder:"\u4E3B\u673A\u5730\u5740"},null,8,["modelValue"]),r(u,{class:"remote-host__port-input",type:"text",modelValue:t.form.port,"onUpdate:modelValue":e[1]||(e[1]=l=>t.form.port=l),placeholder:"\u7AEF\u53E3\u53F7"},null,8,["modelValue"])])]),_:1}),r(d,{label:"\u7528\u6237\u540D",prop:"user"},{default:a(()=>[r(u,{type:"text",modelValue:t.form.user,"onUpdate:modelValue":e[2]||(e[2]=l=>t.form.user=l),placeholder:"\u8BF7\u8F93\u5165\u7528\u6237\u540D"},null,8,["modelValue"])]),_:1}),r(d,{label:"\u9A8C\u8BC1\u65B9\u5F0F",prop:"auth_type"},{default:a(()=>[r(k,{modelValue:t.form.auth_type,"onUpdate:modelValue":e[3]||(e[3]=l=>t.form.auth_type=l)},{default:a(()=>[(m(!0),y(x,null,C(t.HostAuthTypeOptions,l=>(m(),h(f,{key:l.value,label:l.label,value:l.value},null,8,["label","value"]))),128))]),_:1},8,["modelValue"])]),_:1}),t.HostAuthTypeEnum.PRIVATE_KEY==t.form.auth_type?(m(),h(d,{key:0,label:"\u79C1\u94A5\u8BC1\u4E66",prop:"private_key"},{default:a(()=>[r(u,{type:"textarea",rows:5,modelValue:t.form.private_key,"onUpdate:modelValue":e[4]||(e[4]=l=>t.form.private_key=l),"show-password":"",spellcheck:!1,placeholder:"\u8BF7\u8F93\u5165\u79C1\u94A5\u8BC1\u4E66"},null,8,["modelValue"])]),_:1})):(m(),h(d,{key:1,label:"\u5BC6\u7801",prop:"password"},{default:a(()=>[r(u,{type:"password",modelValue:t.form.password,"onUpdate:modelValue":e[5]||(e[5]=l=>t.form.password=l),"show-password":"",autocomplete:"new-password",placeholder:"\u8BF7\u8F93\u5165\u5BC6\u7801"},null,8,["modelValue"])]),_:1}))]),_:1},8,["model","rules"]),w("div",B,[r(_,{onClick:i.handleCancel},{default:a(()=>[g(b(o.$t("\u53D6\u6D88")),1)]),_:1},8,["onClick"]),r(_,{type:"primary",onClick:i.handleSubmit},{default:a(()=>[g(b(o.$t("\u786E\u5B9A")),1)]),_:1},8,["onClick"])])])}const I=V(T,[["render",E]]),U={name:"",props:{row:{type:Object,default:null},visible:{type:Boolean,default:!1}},emits:["update:visible"],components:{DataForm:I},data(){return{}},computed:{dialogTitle(){return this.row&&this.row.id?"\u7F16\u8F91\u4E3B\u673A":"\u6DFB\u52A0\u4E3B\u673A"},dialogVisible:{get(){return this.visible},set(o){this.$emit("update:visible",o)}}},methods:{handleClose(){this.$emit("update:visible",!1)},handleOpen(){this.$emit("update:visible",!0)},handleSuccess(o){this.handleClose(),this.$emit("on-success",o)}},created(){}};function F(o,e,s,p,t,i){const u=n("DataForm"),d=n("el-dialog");return m(),h(d,{title:i.dialogTitle,modelValue:i.dialogVisible,"onUpdate:modelValue":e[0]||(e[0]=f=>i.dialogVisible=f),width:"400px",center:"","append-to-body":""},{default:a(()=>[i.dialogVisible?(m(),h(u,{key:0,row:s.row,onOnCancel:i.handleClose,onOnSuccess:i.handleSuccess},null,8,["row","onOnCancel","onOnSuccess"])):D("",!0)]),_:1},8,["title","modelValue"])}const N=V(U,[["render",F]]);export{N as D,q as g};
