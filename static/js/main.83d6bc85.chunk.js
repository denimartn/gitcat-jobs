(this["webpackJsonpgithub-jobs"]=this["webpackJsonpgithub-jobs"]||[]).push([[0],{20:function(e,t,s){},39:function(e,t,s){},70:function(e,t,s){},72:function(e,t,s){"use strict";s.r(t);var c=s(1),n=s.n(c),a=s(32),r=s.n(a),l=(s(20),s(39),s(0));var o=function(){return Object(l.jsx)("div",{className:"w-full",style:{backgroundColor:"#24292e"},children:Object(l.jsxs)("div",{className:"sm:px-60 flex items-center",children:[Object(l.jsx)("img",{className:"w-14 p-2 mr-4",src:"/gitcat-jobs/assets/illustration/logo.png",alt:"gitcat logo"}),Object(l.jsx)("div",{className:"text-md text-purple-100 font-extrabold font-inter",children:"Gitcat Jobs"})]})})},i=s(9),j=s.n(i),b=s(13),d=s(8);var m=function(e){var t=Object(c.useState)(""),s=Object(d.a)(t,2),n=s[0],a=s[1],r=Object(c.useState)(""),o=Object(d.a)(r,2),i=o[0],j=o[1],b=Object(c.useState)(""),m=Object(d.a)(b,2),x=m[0],u=m[1];return Object(l.jsx)("form",{className:"sm:px-60 my-16",onSubmit:function(t){t.preventDefault(),e.onSubmit({job:n,location:i,isFullTime:x})},children:Object(l.jsxs)("div",{className:"flex sm:flex-row flex-col w-full",children:[Object(l.jsxs)("div",{className:"sm:mr-6 px-6 sm:px-0 w-full mb-2",children:[Object(l.jsx)("label",{className:"text-lg font-bold text-gray-900 tracking-tight",children:"Job description"}),Object(l.jsx)("input",{type:"text",className:"w-full mt-1 p-2  rounded focus:outline-none focus:border-green-500 border-gray-300 focus:ring-green-500 outline-none",onChange:function(e){a(e.target.value)},name:"job",placeholder:"JavaScript, Python, Ruby..."})]}),Object(l.jsxs)("div",{className:"sm:mr-6 px-6 sm:px-0 w-full",children:[Object(l.jsx)("label",{className:"text-lg font-bold text-gray-900 tracking-tight",children:"Location"}),Object(l.jsx)("input",{type:"text",className:"w-full mt-1 p-2 rounded focus:border-green-500 focus:ring-green-500 outline-none border-gray-300",onChange:function(e){j(e.target.value)},name:"location",placeholder:"New York, Canada..."})]}),Object(l.jsxs)("div",{className:"flex sm:items-end flex-col sm:flex-row px-6 sm:px-0 w-full justify-between",children:[Object(l.jsxs)("div",{className:"sm:mr-4 sm:ml-4 mb-6 mt-6 sm:mt-0 sm:mb-0 flex items-center",children:[Object(l.jsx)("span",{className:"text-lg font-bold text-gray-900 tracking-tight mr-2",children:"Full time only"}),Object(l.jsx)("input",{type:"checkbox",className:"h-5 w-5 cursor-pointer text-green-500 rounded focus:ring-green-500 border-gray-300",onClick:function(){u(!x)}})]}),Object(l.jsx)("button",{type:"submit",className:"text-lg p-2.5 rounded-md font-bold leading-5 text-white bg-green-500 shadow-sm hover:bg-green-500 focus:outline-none focus:shadow-outline-green active:bg-green-500",children:"Search"})]})]})})},x=s(2),u=function(e){var t=new Date,s=new Date(e);if(t.getDay()===s.getDay())return"Today";var c=Math.round(Math.abs((t-s)/864e5));return"".concat(c,c>1?" days ago":" day ago")};var h=function(e){var t=e.jobs,s=(e.state,Object(x.f)()),n=Object(c.useCallback)((function(e){s.push("job/".concat(e.id))}));return Object(l.jsx)("div",{className:"sm:px-60 px-6",children:Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)("h1",{className:"text-3xl font-extrabold text-gray-900 tracking-tight mb-8",children:"Featured job"}),Object(l.jsx)("div",{className:"flex flex-col cursor-pointer w-full",children:Object(l.jsx)("div",{className:"flex w-full flex-col bg-white divide-y ",children:t.map((function(e,t){return Object(l.jsx)("button",{className:" text-left p-4  hover:bg-gray-50 focus:outline-none",onClick:function(){return n(e)},children:Object(l.jsxs)("div",{className:"flex sm:justify-between flex-col sm:flex-row",children:[Object(l.jsxs)("div",{className:"mb-4",children:[Object(l.jsx)("div",{className:"mb-2",children:e.title}),Object(l.jsx)("div",{className:"mb-2 text-md truncate w-full normal-case font-normal -mt-1 text-gray-500",children:e.company}),Object(l.jsx)("div",{className:"text-sm truncate w-full -mt-1 text-green-500 font-bold",children:e.type})]}),Object(l.jsxs)("div",{children:[Object(l.jsx)("div",{className:"mb-2 text-md truncate w-full normal-case font-normal -mt-1 text-gray-500 sm:text-right",children:e.location}),Object(l.jsx)("div",{className:"text-sm truncate w-full normal-case font-normal -mt-1 text-gray-500 sm:text-right",children:u(e.created_at)})]})]})},t)}))})})]})})},f=s(14),g=s.n(f),p=s(15),O=s.n(p),v=s(34),y=function(){var e=Object(c.useState)([]),t=Object(d.a)(e,2),s=t[0],n=t[1],a=Object(c.useState)(""),r=Object(d.a)(a,2),o=r[0],i=r[1];function x(){return(x=Object(b.a)(j.a.mark((function e(t){var s;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,i("loading"),e.next=4,g.a.get(" https://cors-denise.herokuapp.com/https://jobs.github.com/positions.json?description=".concat(t.job,"&full_time=").concat(t.isFullTime,"&location=").concat(t.location));case 4:s=e.sent,Object(v.isEmpty)(s.data)?i("empty"):i("ready"),n(s.data),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(0),i("error");case 12:case"end":return e.stop()}}),e,null,[[0,9]])})))).apply(this,arguments)}return Object(c.useEffect)((function(){function e(){return(e=Object(b.a)(j.a.mark((function e(){var t;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,i("loading"),e.next=4,g.a.get("https://cors-denise.herokuapp.com/https://jobs.github.com/positions.json?description=python");case 4:t=e.sent,i("ready"),n(t.data),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(0),i("error");case 12:case"end":return e.stop()}}),e,null,[[0,9]])})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[]),Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)(m,{onSubmit:function(e){return x.apply(this,arguments)}}),"loading"===o&&Object(l.jsx)("div",{className:"flex justify-center mt-28",children:Object(l.jsx)(O.a,{color:"#10B981"})}),"empty"===o&&Object(l.jsx)("div",{className:"flex justify-center mt-20",children:Object(l.jsxs)("div",{className:"flex flex-col",children:[Object(l.jsx)("img",{src:"/gitcat-jobs/assets/illustration/no-result.png",alt:"cat",className:"mb-4"}),Object(l.jsx)("h1",{className:"text-2xl font-extrabold text-gray-900 tracking-tight uppercase text-center",children:"no jobs founded"})]})}),"ready"===o&&Object(l.jsx)(h,{jobs:s,state:o})]})},w=s(12);s(70);var N=function(e){e.jobs;var t=Object(c.useState)(""),s=Object(d.a)(t,2),n=s[0],a=s[1],r=Object(c.useState)(""),o=Object(d.a)(r,2),i=o[0],m=o[1],u=Object(x.g)().id;return Object(c.useEffect)((function(){function e(){return(e=Object(b.a)(j.a.mark((function e(){var t;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,m("loading"),e.next=4,g.a.get("https://cors-denise.herokuapp.com/https://jobs.github.com/positions/".concat(u,".json"));case 4:t=e.sent,m("ready"),a(t.data),e.next=13;break;case 9:e.prev=9,e.t0=e.catch(0),m("error"),console.log("error");case 13:case"end":return e.stop()}}),e,null,[[0,9]])})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[u]),Object(l.jsxs)("div",{className:"sm:px-60 px-2 my-16",children:["loading"===i&&Object(l.jsx)("div",{className:"flex justify-center mt-28",children:Object(l.jsx)(O.a,{color:"#10B981"})}),"ready"===i&&Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)(w.b,{to:"/",children:Object(l.jsxs)("button",{className:"flex bg-green-500 text-white font-bold px-2 py-1 rounded-md mb-8 shadow-sm hover:bg-green-500 focus:outline-none focus:shadow-outline-green active:bg-green-500",children:[Object(l.jsx)("svg",{className:"w-6 mr-2",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor",children:Object(l.jsx)("path",{fillRule:"evenodd",d:"M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z",clipRule:"evenodd"})}),Object(l.jsx)("div",{children:"See all positions"})]})}),Object(l.jsxs)("div",{className:"flex w-full flex-col bg-white p-4 sm:p-8",children:[Object(l.jsxs)("div",{className:"mb-8 flex flex-col sm:flex-row sm:justify-between w-full",children:[Object(l.jsxs)("div",{className:"w-full",children:[Object(l.jsx)("div",{className:"text-2xl font-extrabold text-gray-900 tracking-tight mb-4",children:n.title}),Object(l.jsx)("div",{className:"text-sm truncate w-full -mt-1 text-green-500 font-bold mb-4",children:n.type})]}),Object(l.jsxs)("div",{className:"sm:ml-2 flex sm:block mb-4 sm:mb-0",children:[Object(l.jsx)("div",{className:"sm:text-right self-center sm:self-auto mb-2 truncate w-full text-gray-500",children:n.company}),Object(l.jsx)("img",{className:"w-20",src:n.company_logo,alt:"company logo"})]}),Object(l.jsx)("hr",{})]}),Object(l.jsxs)("div",{className:"mb-8",children:[Object(l.jsx)("div",{className:"text-2xl font-extrabold text-gray-900 tracking-tight mb-4",children:"Description"}),Object(l.jsx)("div",{className:"text-gray-500 text-lg",style:{overflowWrap:"break-word"},dangerouslySetInnerHTML:{__html:n.description}})]}),Object(l.jsxs)("div",{className:"mb-8",children:[Object(l.jsx)("div",{className:"text-2xl font-extrabold text-gray-900 tracking-tight mb-4",children:"Apply now \ud83d\udc47"}),Object(l.jsx)("div",{style:{overflowWrap:"break-word"},dangerouslySetInnerHTML:{__html:n.how_to_apply}})]})]})]})]})};var k=function(){return Object(l.jsxs)(w.a,{children:[Object(l.jsx)(o,{}),Object(l.jsxs)(x.c,{children:[Object(l.jsx)(x.a,{path:"/job/:id",children:Object(l.jsx)(N,{})}),Object(l.jsx)(x.a,{path:"/",children:Object(l.jsx)(y,{})})]})]})};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(Object(l.jsx)(n.a.StrictMode,{children:Object(l.jsx)(k,{})}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[72,1,2]]]);
//# sourceMappingURL=main.83d6bc85.chunk.js.map