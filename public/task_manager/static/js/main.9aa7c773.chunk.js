(this.webpackJsonpprodsight_task_manager=this.webpackJsonpprodsight_task_manager||[]).push([[0],{106:function(e,t,n){e.exports=n(118)},112:function(e,t,n){},118:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(9),i=n.n(o),l=(n(111),n(112),n(69)),c=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function s(e,t){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var n=e.installing;null!=n&&(n.onstatechange=function(){"installed"===n.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}i.a.render(r.a.createElement(l.a,null),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var t="".concat("","/task_manager/service-worker.js");c?(!function(e,t){fetch(e,{headers:{"Service-Worker":"script"}}).then((function(n){var a=n.headers.get("content-type");404===n.status||null!=a&&-1===a.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):s(e,t)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(t,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")}))):s(t,e)}))}}()},69:function(e,t,n){"use strict";(function(e){n.d(t,"a",(function(){return N}));var a=n(12),r=n(11),o=n(15),i=n(16),l=n(18),c=n(21),s=n(0),u=n.n(s),d=n(22),f=n(124),m=n(129),k=n(120),v=n(126),p=n(122),h=n(127),g=n(46),T=n(123),b=n(57),C=n(128),w=n(125),E=n(70),O=n(77),j=n(81),D=n(79);function x(){var e=Object(c.a)(["\n\tpadding-right: 12px;\n\tbox-sizing: content-box;\n\tcursor: pointer;\n\twidth: 32px;\n\theight: 32px;\n"]);return x=function(){return e},e}function y(){var e=Object(c.a)(["\n\tmargin-bottom: 24px;\n\tdisplay: flex;\n\tflex-direction: row;\n\talign-items: center;\n\theight: 32px;\n"]);return y=function(){return e},e}function S(){var e=Object(c.a)(["\n\t.MuiDrawer-paper {\n\t\tmin-width: 320px;\n\t\tpadding: 24px 16px;\n\t\twidth: 100%;\n\t}\n\t@media screen and (min-width: 768px) {\n\t\t.MuiDrawer-paper {\n\t\t\twidth: 400px;\n\t\t}\n\t}\n"]);return S=function(){return e},e}function I(){var e=Object(c.a)(["\n\tpadding: 24px;\n\tdisplay: flex;\n\tflex-direction: column;\n\theight: 100vh;\n\tposition: relative;\n"]);return I=function(){return e},e}var P=e.browser&&/iPad|iPhone|iPod/.test(navigator.userAgent),W=Object(d.a)(f.a)(I()),A=Object(d.a)(m.a)(S()),L=d.a.div(y()),F=Object(d.a)(w.a)(x()),M=function(e){function t(){return Object(a.a)(this,t),Object(o.a)(this,Object(i.a)(t).apply(this,arguments))}return Object(l.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){var e=this.props,t=e.open,n=e.closeDeleteTaskDiolog,a=e.confirmDeleteTaskClick;return u.a.createElement(k.a,{"aria-labelledby":"Delete Task Confirm",open:t,onClose:this.onCancel},u.a.createElement(v.a,null,"Confirm"),u.a.createElement(p.a,null,u.a.createElement(h.a,null,u.a.createElement(g.a,{variant:"subtitle1"},"Are you sure you would like to delete this task?"))),u.a.createElement(T.a,null,u.a.createElement(b.a,{onClick:n},"Cancel"),u.a.createElement(b.a,{onClick:a,color:"primary",variant:"contained",autoFocus:!0},"Confirm")))}}]),t}(s.Component),N=function(e){function t(e){var n;return Object(a.a)(this,t),(n=Object(o.a)(this,Object(i.a)(t).call(this,e))).state={manageTaskDrawer:{open:!1,state:null,id:null},deleteTaskConfirmDialog:{open:!1,id:null},tasks:[]},n.getTasksFromStorage=function(){return new Promise((function(e){n.tasksLoading=!0,n.storage.getTasks().then((function(t){n.updateStateTasks(t).then((function(){n.tasksLoading=!1,e()}))}))}))},n.addTask=function(e){return new Promise((function(t){n.storage.addTask(e).then((function(e){return n.updateStateTasks(e).then((function(){n.closeManageTaskDrawer(),t()}))}))}))},n.updateTask=function(e,t){return new Promise((function(a){n.storage.updateTask(e,t).then((function(e){return n.updateStateTasks(e).then((function(){n.closeManageTaskDrawer(),a()}))}))}))},n.deleteTask=function(e){return new Promise((function(t){n.storage.deleteTask(e).then((function(e){return n.updateStateTasks(e).then((function(){n.closeDeleteTaskDiolog(),t()}))}))}))},n.updateStateTasks=function(e){return new Promise((function(t){n.setState({tasks:e},(function(){t()}))}))},n.getTaskFromState=function(e){var t=n.state.tasks;return(void 0===t?[]:t).find((function(t){return t.id===e}))},n.addTaskButtonClick=function(){n.setState({manageTaskDrawer:{open:!0,state:"addTask",task:null}})},n.taskClick=function(e){n.setState({manageTaskDrawer:{open:!0,state:"viewTask",id:e}})},n.closeManageTaskDrawer=function(){n.setState({manageTaskDrawer:{open:!1,state:null,id:null}})},n.deleteTaskIconClick=function(e,t){e.stopPropagation(),n.setState({deleteTaskConfirmDialog:{open:!0,id:t}})},n.closeDeleteTaskDiolog=function(){n.setState({deleteTaskConfirmDialog:{open:!1,id:null}})},n.confirmDeleteTaskClick=function(){n.deleteTask(n.state.deleteTaskConfirmDialog.id),n.closeDeleteTaskDiolog()},n.completeTaskIconClick=function(e,t){var a=n.state.tasks,r=void 0===a?[]:a;e.stopPropagation();var o=r.find((function(e){return e.id===t}));o.complete=!0,n.updateTask(t,o)},n.onTaskListScroll=function(e){var t=e.nativeEvent.target,a=(t=void 0===t?{}:t).scrollTop,r=t.scrollHeight;a+t.offsetHeight>=r-100&&!n.tasksLoading&&n.getTasksFromStorage()},n.getDrawerContent=function(){var e=n.state.manageTaskDrawer,t=(e=void 0===e?{}:e).state,a=e.id;switch(t){case"addTask":return u.a.createElement(s.Fragment,null,u.a.createElement(L,null,u.a.createElement(F,{onClick:n.closeManageTaskDrawer}),u.a.createElement(g.a,{variant:"h5"},"Add Task")),u.a.createElement(E.a,{addTask:n.addTask}));case"viewTask":return u.a.createElement(s.Fragment,null,u.a.createElement(L,null,u.a.createElement(F,{onClick:n.closeManageTaskDrawer}),u.a.createElement(g.a,{variant:"h5"},"Task Details")),u.a.createElement(O.a,{task:n.getTaskFromState(a),updateTask:n.updateTask}));default:return null}},n.storage=null,n.tasksLoading=!1,n}return Object(l.a)(t,e),Object(r.a)(t,[{key:"componentDidMount",value:function(){this.storage=new D.a,this.getTasksFromStorage()}},{key:"render",value:function(){var e=this.state,t=e.manageTaskDrawer,n=(t=void 0===t?{}:t).open,a=e.deleteTaskConfirmDialog,r=a.open,o=a.id,i=e.tasks,l=void 0===i?[]:i;return u.a.createElement(s.Fragment,null,u.a.createElement(C.a,null),u.a.createElement(W,null,u.a.createElement(j.a,{tasks:l,addTaskButtonClick:this.addTaskButtonClick,taskClick:this.taskClick,deleteTaskIconClick:this.deleteTaskIconClick,completeTaskIconClick:this.completeTaskIconClick,onTaskListScroll:this.onTaskListScroll}),u.a.createElement(A,{anchor:"right",open:n,onClose:this.closeManageTaskDrawer,onOpen:function(){},disableBackdropTransition:!P,disableDiscovery:P},this.getDrawerContent()),r&&u.a.createElement(M,{open:r,id:o,closeDeleteTaskDiolog:this.closeDeleteTaskDiolog,confirmDeleteTaskClick:this.confirmDeleteTaskClick})))}}]),t}(s.Component)}).call(this,n(68))},70:function(e,t,n){"use strict";n.d(t,"a",(function(){return b}));var a=n(6),r=n(12),o=n(11),i=n(15),l=n(16),c=n(18),s=n(21),u=n(0),d=n.n(u),f=n(22),m=n(58),k=n(57),v=n(13),p=n(85),h=n(49);function g(){var e=Object(s.a)(["\n\tmargin-bottom: 24px;\n"]);return g=function(){return e},e}var T=f.a.div(g()),b=function(e){function t(){var e,n;Object(r.a)(this,t);for(var o=arguments.length,c=new Array(o),s=0;s<o;s++)c[s]=arguments[s];return(n=Object(i.a)(this,(e=Object(l.a)(t)).call.apply(e,[this].concat(c)))).state={name:{error:!1,value:""},description:{error:!1,value:""},due:{error:!1,value:new Date}},n.onChange=function(e,t){n.setState(Object(a.a)({},e,{error:""===t,value:t}))},n.getErrorText=function(e){var t=n.state[e],a=t.error,r=t.value,o=void 0===r?"":r;if(!a)return null;switch(e){case"name":case"description":case"due":if(""===o)return"Required";break;default:return null}},n.onSubmit=function(e){var t=n.state,a=t.name,r=t.description,o=t.due;e.preventDefault(),n.props.addTask({name:a.value,description:r.value,due:o.value})},n}return Object(c.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){var e=this,t=this.state,n=t.name,a=t.description,r=t.due;return d.a.createElement("form",{noValidate:!0,autoComplete:"off",onSubmit:this.onSubmit},d.a.createElement(T,null,d.a.createElement(m.a,{label:"Task Name",variant:"outlined",fullWidth:!0,value:n.value,error:n.error,helperText:this.getErrorText("name"),onChange:function(t){var n=t.target.value;return e.onChange("name",n)}})),d.a.createElement(T,null,d.a.createElement(m.a,{label:"Task Description",multiline:!0,rows:"4",variant:"outlined",fullWidth:!0,value:a.value,error:a.error,helperText:this.getErrorText("description"),onChange:function(t){var n=t.target.value;return e.onChange("description",n)}})),d.a.createElement(T,null,d.a.createElement(v.a,{utils:h.a},d.a.createElement(p.a,{margin:"normal",label:"Task Due",value:r.value,error:r.error,helperText:this.getErrorText("due"),variant:"outlined",fullWidth:!0,onChange:function(t){return e.onChange("due",new Date(t))},autoOk:!0,disablePast:!0}))),d.a.createElement(k.a,{variant:"contained",color:"primary",fullWidth:!0,type:"submit",disabled:""===n.value||n.error||""===a.value||a.error||""===r.value||r.error},"Add Task"))}}]),t}(u.Component)},77:function(e,t,n){"use strict";n.d(t,"a",(function(){return b}));var a=n(6),r=n(12),o=n(11),i=n(15),l=n(16),c=n(18),s=n(21),u=n(0),d=n.n(u),f=n(22),m=n(58),k=n(57),v=n(13),p=n(85),h=n(49);function g(){var e=Object(s.a)(["\n\tmargin-bottom: 24px;\n"]);return g=function(){return e},e}var T=f.a.div(g()),b=function(e){function t(){var e,n;Object(r.a)(this,t);for(var o=arguments.length,c=new Array(o),s=0;s<o;s++)c[s]=arguments[s];return(n=Object(i.a)(this,(e=Object(l.a)(t)).call.apply(e,[this].concat(c)))).state={id:null,name:{error:!1,value:""},description:{error:!1,value:""},due:{error:!1,value:null}},n.onSubmit=function(e){var t=n.state,a=t.id,r=t.name,o=t.description,i=t.due;e.preventDefault(),n.props.updateTask(a,{id:a,name:r.value,description:o.value,due:i.value})},n.onChange=function(e,t){n.setState(Object(a.a)({},e,{error:""===t,value:t}))},n.getErrorText=function(e){var t=n.state[e],a=t.error,r=t.value,o=void 0===r?"":r;if(!a)return null;switch(e){case"name":case"description":case"due":if(""===o)return"Required";break;default:return null}},n.hasChanged=function(){var e=n.props.task,t=(e=void 0===e?{}:e).name,a=e.description,r=e.due,o=n.state,i=o.name.value,l=o.description.value,c=o.due.value;return t!==i||a!==l||r!==c},n}return Object(c.a)(t,e),Object(o.a)(t,[{key:"componentDidMount",value:function(){var e=this.props.task,t=(e=void 0===e?{}:e).id,n=e.name,a=e.description,r=e.due;this.setState({id:t,name:{error:!1,value:n},description:{error:!1,value:a},due:{error:!1,value:r}})}},{key:"render",value:function(){var e=this,t=this.state,n=t.name,a=t.description,r=t.due;return d.a.createElement("form",{noValidate:!0,autoComplete:"off",onSubmit:this.onSubmit},d.a.createElement(T,null,d.a.createElement(m.a,{label:"Task Name",variant:"outlined",fullWidth:!0,value:n.value,error:n.error,helperText:this.getErrorText("name"),onChange:function(t){var n=t.target.value;return e.onChange("name",n)}})),d.a.createElement(T,null,d.a.createElement(m.a,{label:"Task Description",multiline:!0,rows:"4",variant:"outlined",fullWidth:!0,value:a.value,error:a.error,helperText:this.getErrorText("description"),onChange:function(t){var n=t.target.value;return e.onChange("description",n)}})),d.a.createElement(T,null,d.a.createElement(v.a,{utils:h.a},d.a.createElement(p.a,{margin:"normal",label:"Task Due",value:r.value,error:r.error,helperText:this.getErrorText("due"),variant:"outlined",fullWidth:!0,onChange:function(t){return e.onChange("due",t)},autoOk:!0,disablePast:!0}))),d.a.createElement(k.a,{variant:"contained",color:"primary",fullWidth:!0,type:"submit",disabled:""===n.value||n.error||""===a.value||a.error||""===r.value||r.error||!this.hasChanged()},"Update Task"))}}]),t}(u.Component)},79:function(e,t,n){"use strict";n.d(t,"a",(function(){return l}));var a=n(80),r=n(30),o=n(12),i=n(11),l=function(){function e(){Object(o.a)(this,e),this.localStorage=window.localStorage,this.tasks=null,this.currentOffset=0}return Object(i.a)(e,[{key:"getTasks",value:function(){var e=this;return new Promise((function(t){e.tasks||(e.tasks=JSON.parse(e.localStorage.getItem("tasks")||"[]")),e.currentOffset+10>=e.tasks.length?t(e.tasks):(t(e.tasks.slice(0,e.currentOffset+10)),e.currentOffset+=10)}))}},{key:"addTask",value:function(e){var t=this;return new Promise((function(n){var o=[].concat(Object(r.a)(t.tasks),[Object(a.a)({id:t.tasks.length+1,complete:!1},e)]);t.localStorage.setItem("tasks",JSON.stringify(o)),t.tasks=o,n(o)}))}},{key:"updateTask",value:function(e,t){var n=this;return new Promise((function(a){var r=n.tasks.map((function(n){return n.id===e?t:n}));n.localStorage.setItem("tasks",JSON.stringify(r)),n.tasks=r,a(r)}))}},{key:"deleteTask",value:function(e){var t=this;return new Promise((function(n){var a=t.tasks.filter((function(t){return t.id!==e}));t.localStorage.setItem("tasks",JSON.stringify(a)),t.tasks=a,n(a)}))}}]),e}()},81:function(e,t,n){"use strict";var a=n(12),r=n(11),o=n(15),i=n(16),l=n(18),c=n(21),s=n(0),u=n.n(s),d=n(22),f=n(160),m=n(58),k=n(46),v=n(57),p=n(50),h=n.n(p),g=n(83),T=n(164),b=n(159),C=n(161),w=n(162);function E(){var e=Object(c.a)(["\n\tmargin-right: 12px;\n\tdisplay: none;\n\t@media screen and (min-width: 768px) {\n\t\tdisplay: block;\n\t}\n"]);return E=function(){return e},e}function O(){var e=Object(c.a)(["\n\tflex-grow: 1;\n"]);return O=function(){return e},e}function j(){var e=Object(c.a)(["\n\tpadding: 12px;\n\tcursor: pointer;\n\tdisplay: flex;\n\tflex-direction: row;\n\talign-items: center;\n\t&:not(:last-child) {\n\t\tmargin-bottom: 24px;\n\t}\n"]);return j=function(){return e},e}var D=Object(d.a)(g.a)(j()),x=Object(d.a)(k.a)(O()),y=Object(d.a)(k.a)(E()),S=function(e){function t(){return Object(a.a)(this,t),Object(o.a)(this,Object(i.a)(t).apply(this,arguments))}return Object(l.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){var e=this.props,t=e.task,n=(t=void 0===t?{}:t).id,a=t.name,r=t.due,o=e.taskClick,i=e.deleteTaskIconClick,l=e.completeTaskIconClick;return u.a.createElement(D,{variant:"outlined",onClick:function(){return o(n)}},u.a.createElement(x,{variant:"h5"},a),u.a.createElement(T.a,{title:"Task Due",placement:"top"},u.a.createElement(y,{variant:"subtitle1"},h()(r).calendar())),u.a.createElement(T.a,{title:"Delete Task",placement:"top"},u.a.createElement(b.a,{"aria-label":"delete",onClick:function(e){return i(e,n)}},u.a.createElement(C.a,null))),u.a.createElement(T.a,{title:"Complete Task",placement:"top"},u.a.createElement(b.a,{"aria-label":"complete",onClick:function(e){return l(e,n)}},u.a.createElement(w.a,null))))}}]),t}(s.Component);function I(){var e=Object(c.a)(["\n\toverflow-y: auto;\n\theight: 100%;\n"]);return I=function(){return e},e}function P(){var e=Object(c.a)(["\n\tmargin-bottom: 24px;\n"]);return P=function(){return e},e}function W(){var e=Object(c.a)(["\n\tmargin-bottom: 12px;\n"]);return W=function(){return e},e}n.d(t,"a",(function(){return M}));var A=Object(d.a)(f.a)(W()),L=Object(d.a)(m.a)(P()),F=d.a.div(I()),M=function(e){function t(){var e,n;Object(a.a)(this,t);for(var r=arguments.length,l=new Array(r),c=0;c<r;c++)l[c]=arguments[c];return(n=Object(o.a)(this,(e=Object(i.a)(t)).call.apply(e,[this].concat(l)))).state={search:""},n.onSearchChange=function(e){n.setState({search:e})},n}return Object(l.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){var e=this,t=this.props,n=t.tasks,a=void 0===n?[]:n,r=t.addTaskButtonClick,o=t.taskClick,i=t.deleteTaskIconClick,l=t.completeTaskIconClick,c=t.onTaskListScroll,d=this.state.search;return u.a.createElement(s.Fragment,null,u.a.createElement(A,{container:!0,direction:"row",justify:"space-between",alignItems:"center"},u.a.createElement(f.a,{item:!0,xs:!0},u.a.createElement(k.a,{variant:"h4"},"Tasks")),u.a.createElement(f.a,{item:!0,xs:"auto"},u.a.createElement(v.a,{variant:"contained",color:"primary",onClick:r},"Add Task"))),u.a.createElement(L,{label:"Search",onChange:function(t){var n=t.target.value;return e.onSearchChange(n)},fullWidth:!0}),u.a.createElement(F,{onScroll:c},a.filter((function(e){var t=e.name,n=e.complete;return t.toLowerCase().includes(d)&&!n})).sort((function(e,t){var n=e.name,a=t.name;return n.toLowerCase().indexOf(d)-a.toLowerCase().indexOf(d)})).map((function(e,t){return u.a.createElement(S,{key:"".concat(t).concat(e.name),task:e,taskClick:o,deleteTaskIconClick:i,completeTaskIconClick:l})}))))}}]),t}(s.Component)}},[[106,1,2]]]);
//# sourceMappingURL=main.9aa7c773.chunk.js.map