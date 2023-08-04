import{_ as n}from"./index.8968f969.js";import{ah as c,o as d,O as i}from"./vendor-vue.9e61e0af.js";const u={name:"SearchUser",props:{keyword:{type:String,default:""}},emits:["on-select","update:keyword"],components:{},data(){return{loading:!1}},computed:{keyword_:{get(){return this.keyword},set(e){this.$emit("update:keyword",e)}}},methods:{async getData(){},async querySearchAsync(e,t){const r=await this.searchUser();t(r)},async searchUser(){this.loading=!0;let e={keyword:this.keyword},t=[];try{const r=await this.$http.getUserList(e);r.ok&&(t=r.data.list.map(a=>(a.value=a.username,a)))}catch(r){console.log(r)}finally{this.loading=!1}return t},handleSelectUser(e){this.$emit("on-select",e)}},created(){this.getData()}};function h(e,t,r,a,p,s){const o=c("el-autocomplete");return d(),i(o,{modelValue:s.keyword_,"onUpdate:modelValue":t[0]||(t[0]=l=>s.keyword_=l),"fetch-suggestions":s.querySearchAsync,placeholder:e.$t("\u641C\u7D22\u7528\u6237\u540D"),debounce:500,clearable:"",onSelect:s.handleSelectUser},null,8,["modelValue","fetch-suggestions","placeholder","onSelect"])}const g=n(u,[["render",h]]);export{g as S};
