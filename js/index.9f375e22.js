import{C as z}from"./ConnectStatus.da52e73f.js";import{_}from"./index.8b54fba4.js";import{ah as o,o as f,c as b,V as a,P as i,a as r,U as d,ar as $,T as m,Q as y}from"./vendor-vue.cefe3aef.js";import{M as v}from"./monitor-status-enums.07e90006.js";import"./element-plus.4ffcce52.js";import"./element-icon.1fe9d2a8.js";import"./vendor-lib.673ea722.js";const k={name:"",components:{ConnectStatus:z},props:{list:{type:Array}},computed:{},data(){return{currentRow:null,dialogVisible:!1}},methods:{handleEditRow(e){this.currentRow=e,this.dialogVisible=!0},async handleDeleteClick(e){let t={id:e.id};const n=await this.$http.function(t);n.code==0?(this.$msg.success("\u64CD\u4F5C\u6210\u529F"),this.$emit("on-success")):this.$msg.error(n.msg)},async handleStatusChange(e){let t={id:e.id};const n=await this.$http.function(t);n.code==0?(this.$msg.success("\u64CD\u4F5C\u6210\u529F"),this.$emit("on-success")):this.$msg.error(n.msg)},handleUpdateSuccess(){this.$emit("on-success")}},created(){}};function I(e,t,n,S,l,p){const c=o("el-table-column"),h=o("ConnectStatus"),u=o("el-table");return f(),b("div",null,[a(u,{data:n.list,stripe:"",border:""},{default:i(()=>[a(c,{label:e.$t("\u5E8F\u53F7"),align:"center",prop:"id",width:"60"},{default:i(s=>[r("span",null,d(s.$index+1),1)]),_:1},8,["label"]),a(c,{label:e.$t("\u5F00\u59CB\u65F6\u95F4"),"header-align":"center",align:"center",prop:"create_time",width:"180"},{default:i(s=>[r("span",null,d(s.row.create_time||"-"),1)]),_:1},8,["label"]),a(c,{label:e.$t("\u7ED3\u675F\u65F6\u95F4"),"header-align":"center",align:"center",prop:"update_time",width:"180"},{default:i(s=>[r("span",null,d(s.row.update_time||"-"),1)]),_:1},8,["label"]),a(c,{label:e.$t("\u6301\u7EED\u65F6\u95F4"),"header-align":"center",align:"center",width:"100",prop:"total_time_label"},{default:i(s=>[r("span",null,d(s.row.total_time_label||"-"),1)]),_:1},8,["label"]),a(c,{label:e.$t("\u72B6\u6001"),"header-align":"center",align:"center",prop:"status",width:"60"},{default:i(s=>[a(h,{value:s.row.status_value},null,8,["value"])]),_:1},8,["label"]),a(c,{label:e.$t("\u6267\u884C\u7ED3\u679C"),"header-align":"center",align:"center",prop:"status"},{default:i(s=>[r("span",null,d(s.row.result||"-"),1)]),_:1},8,["label"])]),_:1},8,["data"])])}const V=_(k,[["render",I]]),M={name:"log-scheduler-list",props:{monitorId:{type:String,default:null}},components:{DataTable:V},data(){return{list:[],total:0,page:1,size:20,keywords:"",detail:{},loading:!0,dialogVisible:!1,pageSizeCachekey:"pageSize"}},computed:{},methods:{resetData(){this.page=1,this.list=[],this.getData(),this.getMonitorData()},refreshData(){this.getData()},async getMonitorData(){let e={monitor_id:this.monitorId};const t=await this.$http.getMonitorById(e);t.ok&&(this.detail=t.data)},async getData(){this.loading=!0;let e={monitor_id:this.monitorId,page:this.page,size:this.size};const t=await this.$http.getLogMonitorList(e);t.code==0&&(this.list=t.data.list.map(n=>(n.status_value=v(n.status),n)),this.total=t.data.total),this.loading=!1},handleAddRow(){this.dialogVisible=!0},handleAddSuccess(){this.resetData()},handleSizeChange(e){localStorage.setItem(this.pageSizeCachekey,e),this.resetData()},loadPageSize(){let e=localStorage.getItem(this.pageSizeCachekey);e&&(this.size=parseInt(e))},async handleBatchDeleteConfirm(){let e=this.$loading({fullscreen:!0});try{const t=await this.$http.clearLogMonitor({monitor_id:this.monitorId});t.code==0?(this.$msg.success("\u64CD\u4F5C\u6210\u529F"),this.resetData()):this.$msg.error(t.msg)}catch(t){console.log(t)}finally{this.$nextTick(()=>{e.close()})}}},created(){this.loadPageSize(),this.resetData()}},B={class:"app-container"},T={class:"flex justify-between mb-sm"},x=r("span",{class:"color--info"},"\u76D1\u63A7\u540D\u79F0: ",-1);function P(e,t,n,S,l,p){const c=o("Delete"),h=o("el-icon"),u=o("el-link"),s=o("el-popconfirm"),D=o("DataTable"),w=o("el-pagination"),C=$("loading");return f(),b("div",B,[r("div",T,[r("div",null,[x,m(),r("span",null,d(l.detail.title),1)]),a(s,{title:"\u786E\u5B9A\u6E05\u7A7A\u65E5\u5FD7\uFF1F",onConfirm:p.handleBatchDeleteConfirm},{reference:i(()=>[a(u,{underline:!1,type:"danger",class:"mr-sm"},{default:i(()=>[a(h,null,{default:i(()=>[a(c)]),_:1}),m(d(e.$t("\u6E05\u7A7A\u65E5\u5FD7")),1)]),_:1})]),_:1},8,["onConfirm"])]),y(a(D,{list:l.list,onOnSuccess:p.resetData},null,8,["list","onOnSuccess"]),[[C,l.loading]]),a(w,{class:"mt-md justify-center",background:"",layout:"total, sizes, prev, pager, next",total:l.total,"page-size":l.size,"onUpdate:pageSize":t[0]||(t[0]=g=>l.size=g),"current-page":l.page,"onUpdate:currentPage":t[1]||(t[1]=g=>l.page=g),onCurrentChange:p.getData,onSizeChange:p.handleSizeChange},null,8,["total","page-size","current-page","onCurrentChange","onSizeChange"])])}const O=_(M,[["render",P]]);export{O as default};
