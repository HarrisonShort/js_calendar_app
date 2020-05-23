(this["webpackJsonpgig-tracker"]=this["webpackJsonpgig-tracker"]||[]).push([[0],{166:function(e,t,a){"use strict";a.r(t);var n=a(0),i=a.n(n),l=a(37),g=a.n(l),c=(a(84),a(13)),r=a(14),s=a(15),o=a(16),m=a(24),d=a(25),u=(a(85),a(86),a(23)),h=a.n(u),v=a(30),_=a(6),f=a(21),b=a.n(f),p=a(33),E=a.n(p),C=(a(69),function(e){var t=new Intl.DateTimeFormat("en-US",{month:"long"}).format(e);return"".concat(e.getDate()," ").concat(t," ").concat(e.getFullYear())}),N=function(e,t){var a=C(e);t&&e.getTime()!=t.getTime()&&(a+=" - "+C(t));return a},k=function(e){Object(o.a)(a,e);var t=Object(s.a)(a);function a(e){var n;return Object(c.a)(this,a),(n=t.call(this,e)).onSubmit=function(){var e=Object(v.a)(h.a.mark((function e(t){var a;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),n.state.gig_bands=n.state.gig_bands.replace(/[\n\r]/g,", "),a={gig_date:N(n.state.gig_date,n.state.festival_end_date),gig_or_fest:n.state.gig_or_fest,gig_tourFestName:n.state.gig_tourFestName,gig_bands:n.state.gig_bands,gig_venue:n.state.gig_venue,gig_cancelled:n.state.gig_cancelled},console.log("Form submitted:"),console.log("Date: ".concat(a.gig_date)),console.log("Gig or Fest?: ".concat(a.gig_or_fest)),console.log("Tour/Fest Name: ".concat(a.gig_tourFestName)),console.log("Bands: ".concat(a.gig_bands)),console.log("Venue: ".concat(a.gig_venue)),e.next=11,b.a.post("http://localhost:4000/gigs/create",a).then((function(e){return console.log(e.data)}));case 11:n.setState({gig_date:new Date,festival_end_date:"",gig_or_fest:"Gig",gig_tourFestName:"",gig_bands:"",gig_venue:"",gig_cancelled:!1});case 12:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),n.state={gig_date:new Date,festival_end_date:"",gig_or_fest:"Gig",gig_tourFestName:"",gig_bands:"",gig_venue:"",gig_cancelled:!1},n.onChangeGigDate=n.onChangeGigDate.bind(Object(_.a)(n)),n.onChangeFestivalEndDate=n.onChangeFestivalEndDate.bind(Object(_.a)(n)),n.onChangeGigOrFest=n.onChangeGigOrFest.bind(Object(_.a)(n)),n.onChangeGigTourFestName=n.onChangeGigTourFestName.bind(Object(_.a)(n)),n.onChangeGigBands=n.onChangeGigBands.bind(Object(_.a)(n)),n.onChangeGigVenue=n.onChangeGigVenue.bind(Object(_.a)(n)),n.onSubmit=n.onSubmit.bind(Object(_.a)(n)),n}return Object(r.a)(a,[{key:"onChangeGigDate",value:function(e){var t=this;this.setState({gig_date:e},(function(){t.state.festival_end_date<t.state.gig_date&&t.setState({festival_end_date:t.state.gig_date})}))}},{key:"onChangeFestivalEndDate",value:function(e){e<this.state.gig_date?console.log("onChangeFestivalEndDate: End Date cannot be earlier than initial Date."):this.setState({festival_end_date:e})}},{key:"onChangeGigOrFest",value:function(e){var t=this;this.setState({gig_or_fest:e.target.value},(function(){"Festival"===t.state.gig_or_fest&&t.setState({festival_end_date:t.state.gig_date})}))}},{key:"onChangeGigTourFestName",value:function(e){this.setState({gig_tourFestName:e.target.value})}},{key:"onChangeGigBands",value:function(e){this.setState({gig_bands:e.target.value})}},{key:"onChangeGigVenue",value:function(e){this.setState({gig_venue:e.target.value})}},{key:"render",value:function(){return i.a.createElement("div",{className:"form",id:"gigFormDiv",style:{marginTop:30}},i.a.createElement("h4",{id:"dateHeader"},"Date"),i.a.createElement(E.a,{selected:this.state.gig_date,dateFormat:"d MMMM yyyy",onChange:this.onChangeGigDate}),"Festival"===this.state.gig_or_fest?i.a.createElement("div",{style:{marginTop:30}},i.a.createElement("h4",{id:"endDateHeader"},"End Date"),i.a.createElement(E.a,{selected:this.state.festival_end_date,dateFormat:"d MMMM yyyy",onChange:this.onChangeFestivalEndDate})):null,i.a.createElement("form",{id:"gigForm",onSubmit:this.onSubmit},i.a.createElement("div",{className:"form-check form-check-inline"},i.a.createElement("div",{style:{marginTop:15}},i.a.createElement("div",{className:"form-group"},i.a.createElement("div",{className:"form-check form-check-inline"},i.a.createElement("input",{className:"form-check-input",type:"radio",name:"gigOrFestivalRadios",id:"gigRadio",value:"Gig",checked:"Gig"===this.state.gig_or_fest,onChange:this.onChangeGigOrFest}),i.a.createElement("label",{className:"form-check-label"},"Gig")),i.a.createElement("div",{className:"form-check form-check-inline"},i.a.createElement("input",{className:"form-check-input",type:"radio",name:"gigOrFestivalRadios",id:"festivalRadio",value:"Festival",checked:"Festival"===this.state.gig_or_fest,onChange:this.onChangeGigOrFest}),i.a.createElement("label",{className:"form-check-label"},"Festival"))),i.a.createElement("div",{className:"form-group"},i.a.createElement("label",null,"Tour Name:"),i.a.createElement("input",{type:"text",className:"form-control",id:"tourName",name:"tourName",value:this.state.gig_tourFestName,onChange:this.onChangeGigTourFestName})),i.a.createElement("div",{className:"form-group"},i.a.createElement("label",null,"Bands:"),i.a.createElement("textarea",{className:"form-control",id:"bands",name:"bands",value:this.state.gig_bands,onChange:this.onChangeGigBands}),i.a.createElement("small",{id:"bandHelp",className:"form-text text-muted",style:{marginTop:2}},"Please place each band/artist on a new line.")),i.a.createElement("div",{className:"form-group"},i.a.createElement("label",null,"Venue:"),i.a.createElement("input",{type:"text",className:"form-control",id:"venueName",name:"venueName",value:this.state.gig_venue,onChange:this.onChangeGigVenue})),i.a.createElement("div",{className:"form-group"},i.a.createElement("button",{type:"submit",value:"Create Gig",className:"btn btn-primary"},"Create Gig"))))))}}]),a}(n.Component),y=function(e){Object(o.a)(a,e);var t=Object(s.a)(a);function a(e){var n;return Object(c.a)(this,a),(n=t.call(this,e)).onSubmit=function(){var e=Object(v.a)(h.a.mark((function e(t){var a;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),n.state.gig_bands=n.state.gig_bands.replace(/[\n\r]/g,", "),a={gig_date:N(n.state.gig_date,n.state.festival_end_date),gig_or_fest:n.state.gig_or_fest,gig_tourFestName:n.state.gig_tourFestName,gig_bands:n.state.gig_bands,gig_venue:n.state.gig_venue,gig_cancelled:n.state.gig_cancelled},console.log(a),e.next=6,b.a.post("http://localhost:4000/gigs/update/"+n.props.match.params.id,a).then((function(e){return console.log(e.data)}));case 6:n.props.history.push("/gig-tracker/");case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),n.onChangeGigDate=n.onChangeGigDate.bind(Object(_.a)(n)),n.onChangeFestivalEndDate=n.onChangeFestivalEndDate.bind(Object(_.a)(n)),n.onChangeGigBands=n.onChangeGigBands.bind(Object(_.a)(n)),n.onChangeGigOrFest=n.onChangeGigOrFest.bind(Object(_.a)(n)),n.onChangeGigTourFestName=n.onChangeGigTourFestName.bind(Object(_.a)(n)),n.onChangeGigVenue=n.onChangeGigVenue.bind(Object(_.a)(n)),n.onChangeGigCancelled=n.onChangeGigCancelled.bind(Object(_.a)(n)),n.onSubmit=n.onSubmit.bind(Object(_.a)(n)),n.state={gig_date:new Date,festival_end_date:"",gig_or_fest:"",gig_tourFestName:"",gig_bands:"",gig_venue:"",gig_cancelled:!1},n}return Object(r.a)(a,[{key:"onChangeGigDate",value:function(e){var t=this;this.setState({gig_date:e},(function(){t.state.festival_end_date<t.state.gig_date&&t.setState({festival_end_date:t.state.gig_date})}))}},{key:"onChangeFestivalEndDate",value:function(e){e<this.state.gig_date?console.log("onChangeFestivalEndDate: End Date cannot be earlier than initial Date."):this.setState({festival_end_date:e})}},{key:"onChangeGigOrFest",value:function(e){this.setState({gig_or_fest:e.target.value})}},{key:"onChangeGigTourFestName",value:function(e){this.setState({gig_tourFestName:e.target.value})}},{key:"onChangeGigBands",value:function(e){this.setState({gig_bands:e.target.value})}},{key:"onChangeGigVenue",value:function(e){this.setState({gig_venue:e.target.value})}},{key:"onChangeGigCancelled",value:function(e){this.setState({gig_cancelled:!this.state.gig_cancelled})}},{key:"processReturnedDate",value:function(e){if(void 0===e)return new Date;if(e.includes(" - ")){var t=e.split(" - ");return[new Date(t[0]),new Date(t[1])]}return new Date(e)}},{key:"componentDidMount",value:function(){var e=this;b.a.get("http://localhost:4000/gigs/"+this.props.match.params.id).then((function(t){var a=e.processReturnedDate(t.data.gig_date);e.setState({gig_date:void 0===a.length?a:a[0],festival_end_date:void 0===a.length?"":a[1],gig_or_fest:t.data.gig_or_fest,gig_tourFestName:t.data.gig_tourFestName,gig_bands:t.data.gig_bands.replace(/, /g,"\n"),gig_venue:t.data.gig_venue,gig_cancelled:void 0!==t.data.gig_cancelled&&t.data.gig_cancelled})})).catch((function(e){console.log(e)}))}},{key:"render",value:function(){return i.a.createElement("div",{className:"form",id:"gigFormDiv"},i.a.createElement("h3",null,"Edit Gig"),i.a.createElement("h3",{id:"dateHeader"},"Date"),i.a.createElement(E.a,{selected:this.state.gig_date,dateFormat:"d MMMM yyyy",onChange:this.onChangeGigDate}),"Festival"===this.state.gig_or_fest?i.a.createElement("div",{style:{marginTop:30}},i.a.createElement("h4",{id:"endDateHeader"},"End Date"),i.a.createElement(E.a,{selected:this.state.festival_end_date,dateFormat:"d MMMM yyyy",onChange:this.onChangeFestivalEndDate})):null,i.a.createElement("form",{onSubmit:this.onSubmit},i.a.createElement("div",{className:"form-group"},i.a.createElement("div",{className:"form-check form-check-inline"},i.a.createElement("input",{className:"form-check-input",type:"radio",name:"gigOrFestivalRadios",id:"gigRadio",value:"Gig",checked:"Gig"===this.state.gig_or_fest,onChange:this.onChangeGigOrFest}),i.a.createElement("label",{className:"form-check-label"},"Gig")),i.a.createElement("div",{className:"form-check form-check-inline"},i.a.createElement("input",{className:"form-check-input",type:"radio",name:"gigOrFestivalRadios",id:"festivalRadio",value:"Festival",checked:"Festival"===this.state.gig_or_fest,onChange:this.onChangeGigOrFest}),i.a.createElement("label",{className:"form-check-label"},"Festival"))),i.a.createElement("div",{className:"form-group"},i.a.createElement("label",null,"Tour Name: "),i.a.createElement("input",{type:"text",className:"form-control",value:this.state.gig_tourFestName,onChange:this.onChangeGigTourFestName})),i.a.createElement("div",{className:"form-group"},i.a.createElement("label",null,"Bands: "),i.a.createElement("textarea",{type:"text",className:"form-control",value:this.state.gig_bands,onChange:this.onChangeGigBands}),i.a.createElement("small",{id:"bandHelp",className:"form-text text-muted",style:{marginTop:2}},"Please place each band/artist on a new line.")),i.a.createElement("div",{className:"form-group"},i.a.createElement("label",null,"Venue: "),i.a.createElement("input",{id:"venueName",name:"venueName",type:"text",className:"form-control",value:this.state.gig_venue,onChange:this.onChangeGigVenue})),i.a.createElement("div",{className:"form-check"},i.a.createElement("input",{className:"form-check-input",id:"gigCancelledCheckbox",type:"checkbox",name:"gigCancelledCheckbox",onChange:this.onChangeGigCancelled,checked:this.state.gig_cancelled,value:this.state.gig_cancelled}),i.a.createElement("label",{className:"form-check-label",htmlFor:"gigCancelledCheckbox"},"Cancelled")),i.a.createElement("br",null),i.a.createElement("div",{className:"form-group"},i.a.createElement("input",{type:"submit",value:"Edit Gig",className:"btn btn-primary"}))))}}]),a}(n.Component),F=function(e){return i.a.createElement("tr",null,i.a.createElement("td",{className:e.gig.gig_cancelled?"cancelled":""},e.gig.gig_date),i.a.createElement("td",{className:e.gig.gig_cancelled?"cancelled":""},e.gig.gig_or_fest),i.a.createElement("td",{className:e.gig.gig_cancelled?"cancelled":""},e.gig.gig_tourFestName),i.a.createElement("td",{className:e.gig.gig_cancelled?"cancelled":""},e.gig.gig_bands),i.a.createElement("td",{className:e.gig.gig_cancelled?"cancelled":""},e.gig.gig_venue),i.a.createElement("td",null,i.a.createElement(m.b,{to:"/gig-tracker/edit/"+e.gig._id},"Edit")),i.a.createElement("td",null,i.a.createElement(m.b,{to:"/",onClick:function(){window.confirm("Are you sure you wish to delete this gig? (".concat(e.gig.gig_tourFestName,")"))&&(window.location.href="/gig-tracker/delete/"+e.gig._id)}},"Delete")))},G=function(e){Object(o.a)(a,e);var t=Object(s.a)(a);function a(e){var n;return Object(c.a)(this,a),(n=t.call(this,e)).state={gigs:[]},n}return Object(r.a)(a,[{key:"componentDidMount",value:function(){var e=this;b.a.get("http://localhost:4000/gigs/").then((function(t){e.setState({gigs:t.data})})).catch((function(e){console.log(e)}))}},{key:"gigList",value:function(){return this.state.gigs.sort((function(e,t){return new Date(e.gig_date.split(" - ")[0])-new Date(t.gig_date.split(" - ")[0])})).map((function(e,t){return i.a.createElement(F,{gig:e,key:t})}))}},{key:"render",value:function(){return i.a.createElement("div",null,i.a.createElement("h3",null,"Gig List"),i.a.createElement("table",{className:"table table-striped",style:{marginTop:20}},i.a.createElement("thead",null,i.a.createElement("tr",null,i.a.createElement("th",null,"Date"),i.a.createElement("th",null,"Gig/Festival"),i.a.createElement("th",null,"Name"),i.a.createElement("th",{style:{width:"35%"}},"Bands"),i.a.createElement("th",null,"Venue"),i.a.createElement("th",null),i.a.createElement("th",null))),i.a.createElement("tbody",null,this.gigList())))}}]),a}(n.Component),O=function(e){Object(o.a)(a,e);var t=Object(s.a)(a);function a(e){var n;return Object(c.a)(this,a),(n=t.call(this,e)).deleteGig=function(){var e=Object(v.a)(h.a.mark((function e(t){return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,b.a.delete("http://localhost:4000/gigs/delete/"+t).catch((function(e){console.log(e)}));case 2:n.props.history.push("/gig-tracker/");case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),n.deleteGig=n.deleteGig.bind(Object(_.a)(n)),n.deleteGig(n.props.match.params.id),n}return Object(r.a)(a,[{key:"render",value:function(){return null}}]),a}(n.Component),D=a(78),j=a.n(D),w=function(e){Object(o.a)(a,e);var t=Object(s.a)(a);function a(){return Object(c.a)(this,a),t.apply(this,arguments)}return Object(r.a)(a,[{key:"render",value:function(){return i.a.createElement(m.a,null,i.a.createElement("div",{className:"container"},i.a.createElement("nav",{className:"navbar navbar-expand-lg navbar-light bg-light"},i.a.createElement("a",{className:"navbar-brand",target:"_blank"},i.a.createElement("img",{src:j.a,width:"30",height:"30",href:"http://google.com"})),i.a.createElement(m.b,{to:"/",className:"navbar-brand"},"Gig Tracker"),i.a.createElement("div",{className:"collpase navbar-collapse"},i.a.createElement("ul",{className:"navbar-nav mr-auto"},i.a.createElement("li",{className:"navbar-item"},i.a.createElement(m.b,{to:"/gig-tracker/",className:"nav-link"},"Gigs")),i.a.createElement("li",{className:"navbar-item"},i.a.createElement(m.b,{to:"/gig-tracker/create",className:"nav-link"},"Create Gig")),i.a.createElement("li",{className:"navbar-item"},i.a.createElement(m.b,{to:"/gig-tracker/",className:"nav-link"},"Calendar"))))),i.a.createElement("br",null),i.a.createElement(d.b,{exact:!0,path:"/"},i.a.createElement(d.a,{to:"/gig-tracker/"})),i.a.createElement(d.b,{path:"/gig-tracker/",exact:!0,component:G}),i.a.createElement(d.b,{path:"/gig-tracker/edit/:id",component:y}),i.a.createElement(d.b,{path:"/gig-tracker/create",component:k}),i.a.createElement(d.b,{path:"/gig-tracker/delete/:id",component:O})))}}]),a}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));g.a.render(i.a.createElement(w,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},78:function(e,t,a){e.exports=a.p+"static/media/logo.ee7cd8ed.svg"},79:function(e,t,a){e.exports=a(166)},84:function(e,t,a){},86:function(e,t,a){}},[[79,1,2]]]);
//# sourceMappingURL=main.4c2a4b51.chunk.js.map