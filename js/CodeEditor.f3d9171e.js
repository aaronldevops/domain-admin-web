import{T as d,t as l,o as s,j as u}from"./codemirror-lib.512a46ff.js";import{_ as p}from"./index.75d3c7d5.js";import{ah as m,o as c,O as f,K as h}from"./vendor-vue.cefe3aef.js";function w(o,e,t){if(!e)return t();if(!isJson(e))return t(new Error("\u5FC5\u987B\u662Fjson"));let n=JSON.parse(e);isObject(n)?t():t(new Error("\u5FC5\u987B\u662Fobject\u5BF9\u8C61"))}const g={name:"CodeEditor",props:{value:{type:String,default:""},placeholder:{type:String,default:""},height:{type:String,default:"200px"},mode:{type:String,default:"json"}},components:{Codemirror:d},data(){return{}},computed:{value_:{get(){return this.value},set(o){this.$emit("update:value",o)}},editorStyle(){return{width:"100%",height:this.height,"font-size":"16px"}},extensions(){return this.mode=="twig"?[l(),s]:[u(),s]}},methods:{async getData(){}},created(){this.getData()}};function _(o,e,t,n,y,r){const a=m("codemirror");return c(),f(a,{modelValue:r.value_,"onUpdate:modelValue":e[0]||(e[0]=i=>r.value_=i),placeholder:t.placeholder,style:h(r.editorStyle),autofocus:!0,"indent-with-tab":!0,"tab-size":2,extensions:r.extensions},null,8,["modelValue","placeholder","style","extensions"])}const v=p(g,[["render",_]]);export{v as C,w as j};