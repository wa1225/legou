webpackJsonp([2],{"3qUP":function(t,e){},CPdL:function(t,e){},CeaU:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=n("4YfN"),o=n.n(i),s=n("fUgm"),r=n("D/cR"),a=n("BGi1"),l={props:["info"],computed:o()({},Object(s.c)({menuList:"menu/list"})),components:{},data:function(){return{form:{phone:"",nickname:"",password:"",status:1},rules:{nickname:[{required:!0,message:"角色名称不能为空",trigger:"blur"}],phone:[{required:!0,message:"手机号不能为空",trigger:"blur"}],password:[{required:!0,message:"密码不能为空",trigger:"blur"}]}}},methods:o()({},Object(s.b)({requestMemberList:"member/requestList"}),{empty:function(){this.form={phone:"",nickname:"",password:"",status:1}},cancel:function(){this.info.show=!1,this.info.isEdit&&this.empty()},add:function(){var t=this;this.form.menus=this.$refs.tree.getCheckedKeys().join(","),requestRoleAdd(this.form).then(function(e){200==e.data.code?(t.empty(),t.cancel(),Object(a.a)("添加成功"),t.requestRoleList()):Object(a.b)(e.data.msg)})},getDetail:function(t){var e=this;Object(r.w)({uid:t}).then(function(t){e.form=t.data.list,e.form.password=""})},update:function(){var t=this;""!==this.form.password?Object(r.y)(this.form).then(function(e){200==e.data.code?(t.empty(),t.cancel(),Object(a.a)("更新成功"),t.requestMemberList()):Object(a.b)(e.data.msg)}):Object(a.b)("密码不能为空")}}),mounted:function(){}},c={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("el-dialog",{attrs:{title:t.info.title,visible:t.info.show},on:{"update:visible":function(e){return t.$set(t.info,"show",e)}}},[n("el-form",{attrs:{model:t.form,"label-width":"80px",rules:t.rules}},[n("el-form-item",{attrs:{label:"昵称",prop:"nickname"}},[n("el-input",{model:{value:t.form.nickname,callback:function(e){t.$set(t.form,"nickname",e)},expression:"form.nickname"}})],1),t._v(" "),n("el-form-item",{attrs:{label:"手机号",prop:"phone"}},[n("el-input",{model:{value:t.form.phone,callback:function(e){t.$set(t.form,"phone",e)},expression:"form.phone"}})],1),t._v(" "),n("el-form-item",{attrs:{label:"密码",prop:"password"}},[n("el-input",{model:{value:t.form.password,callback:function(e){t.$set(t.form,"password",e)},expression:"form.password"}})],1),t._v(" "),n("el-form-item",{attrs:{label:"状态"}},[n("el-switch",{attrs:{"active-color":"#13ce66","active-value":1,"inactive-value":2},model:{value:t.form.status,callback:function(e){t.$set(t.form,"status",e)},expression:"form.status"}})],1)],1),t._v(" "),n("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[n("el-button",{on:{click:t.cancel}},[t._v("取 消")]),t._v(" "),t.info.isEdit?n("el-button",{attrs:{type:"primary"},on:{click:t.update}},[t._v("修 改")]):n("el-button",{attrs:{type:"primary"},on:{click:t.add}},[t._v("添 加")])],1)],1)],1)},staticRenderFns:[]};var u=n("C7Lr")(l,c,!1,function(t){n("CPdL")},"data-v-9eb59a22",null).exports,d={components:{},data:function(){return{}},methods:o()({},Object(s.b)({requestList:"member/requestList"}),{del:function(t){var e=this;Object(r.F)({id:t}).then(function(t){200==t.data.code?(Object(a.a)(t.data.msg),e.requestList()):Object(a.b)(t.data.msg)})},edit:function(t){this.$emit("edit",t)}}),mounted:function(){this.requestList()},computed:o()({},Object(s.c)({list:"member/list"}))},f={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("el-table",{staticStyle:{width:"100%"},attrs:{data:t.list,stripe:""}},[n("el-table-column",{attrs:{prop:"uid",label:"用户编号",width:"180"}}),t._v(" "),n("el-table-column",{attrs:{prop:"nickname",label:"昵称",width:"180"}}),t._v(" "),n("el-table-column",{attrs:{prop:"phone",label:"手机号",width:"180"}}),t._v(" "),n("el-table-column",{attrs:{label:"状态"},scopedSlots:t._u([{key:"default",fn:function(e){return["1"==e.row.status?n("el-button",{attrs:{type:"primary"}},[t._v("启用")]):n("el-button",{attrs:{type:"info"}},[t._v("禁用")])]}}])}),t._v(" "),n("el-table-column",{attrs:{label:"操作"},scopedSlots:t._u([{key:"default",fn:function(e){return[n("el-button",{attrs:{type:"primary"},on:{click:function(n){return t.edit(e.row.uid)}}},[t._v("编辑")])]}}])})],1)],1)},staticRenderFns:[]};var m={components:{vAdd:u,vList:n("C7Lr")(d,f,!1,function(t){n("a0kI")},"data-v-57f8ed26",null).exports},data:function(){return{info:{show:!1,isEdit:!1,title:"添加角色"}}},methods:{add:function(){this.info.show=!0,this.info.title="添加角色",this.info.isEdit=!1},edit:function(t){this.info.show=!0,this.info.title="编辑角色",this.info.isEdit=!0,this.$refs.add.getDetail(t)}}},p={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("v-add",{ref:"add",attrs:{info:t.info}}),t._v(" "),n("v-list",{on:{edit:function(e){return t.edit(e)}}})],1)},staticRenderFns:[]};var b=n("C7Lr")(m,p,!1,function(t){n("3qUP")},"data-v-baa471b6",null);e.default=b.exports},a0kI:function(t,e){}});
//# sourceMappingURL=2.29b2f7ab044672e56417.js.map