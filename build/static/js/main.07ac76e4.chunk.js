(this.webpackJsonpnotesapp_fe=this.webpackJsonpnotesapp_fe||[]).push([[0],{15:function(t,e,n){t.exports=n(39)},20:function(t,e,n){},38:function(t,e,n){},39:function(t,e,n){"use strict";n.r(e);var a=n(0),o=n.n(a),c=n(14),r=n.n(c),u=(n(20),n(4)),i=n(3),l=function(t){var e=t.note,n=t.toggleImportanceOf,a=e.important?"make not important":"make important";return o.a.createElement("li",{className:"note"},e.content,o.a.createElement("button",{className:"noteButton",onClick:n},a))},s=n(2),m=n.n(s),p=function(){return m.a.get("/api/notes").then((function(t){return t.data}))},f=function(t){return m.a.post("/api/notes",t).then((function(t){return t.data}))},b=function(t,e){return m.a.put("".concat("/api/notes","/").concat(t),e).then((function(t){return t.data}))},d=(n(38),function(){var t=Object(a.useState)([]),e=Object(i.a)(t,2),n=e[0],c=e[1],r=Object(a.useState)(""),s=Object(i.a)(r,2),m=s[0],d=s[1],g=Object(a.useState)(!0),E=Object(i.a)(g,2),h=E[0],v=E[1];Object(a.useEffect)((function(){p().then((function(t){return c(t)}))}),[]);return o.a.createElement("div",{className:"App"},o.a.createElement("h1",null,"Notes"),o.a.createElement("form",{className:"noteForm",onSubmit:function(t){t.preventDefault();var e={content:m,date:new Date,important:Math.random()>.5};f(e).then((function(t){console.log("returnedNote:",t),c(n.concat(t)),d("")}))}},o.a.createElement("input",{className:"inputBox",value:m,onChange:function(t){console.log(t.target.value),d(t.target.value)}}),o.a.createElement("button",{className:"inputButton",type:"submit"},"save")),o.a.createElement("div",null,o.a.createElement("button",{className:"importantToggle",onClick:function(){return v(!h)}},"show ",h?"important":"all")),o.a.createElement("ul",{className:"notes"},n.map((function(t,e){return o.a.createElement(l,{key:e,className:"note",note:t,toggleImportanceOf:function(){return function(t){var e=n.find((function(e){return e.id===t}));console.log(e);var a=Object(u.a)(Object(u.a)({},e),{},{important:!e.important});console.log(a),b(t,a).then((function(e){c(n.map((function(n){return n.id!==t?n:e})))}))}(t.id)}})}))))});r.a.render(o.a.createElement(o.a.StrictMode,null,o.a.createElement(d,null)),document.getElementById("root"))}},[[15,1,2]]]);
//# sourceMappingURL=main.07ac76e4.chunk.js.map