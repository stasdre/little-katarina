!function(e){function t(t){for(var n,o,c=t[0],i=t[1],u=t[2],m=0,d=[];m<c.length;m++)o=c[m],Object.prototype.hasOwnProperty.call(r,o)&&r[o]&&d.push(r[o][0]),r[o]=0;for(n in i)Object.prototype.hasOwnProperty.call(i,n)&&(e[n]=i[n]);for(s&&s(t);d.length;)d.shift()();return l.push.apply(l,u||[]),a()}function a(){for(var e,t=0;t<l.length;t++){for(var a=l[t],n=!0,c=1;c<a.length;c++){var i=a[c];0!==r[i]&&(n=!1)}n&&(l.splice(t--,1),e=o(o.s=a[0]))}return e}var n={},r={1:0},l=[];function o(t){if(n[t])return n[t].exports;var a=n[t]={i:t,l:!1,exports:{}};return e[t].call(a.exports,a,a.exports,o),a.l=!0,a.exports}o.m=e,o.c=n,o.d=function(e,t,a){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},o.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(o.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)o.d(a,n,function(t){return e[t]}.bind(null,n));return a},o.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="/little-katarina/";var c=window.webpackJsonp=window.webpackJsonp||[],i=c.push.bind(c);c.push=t,c=c.slice();for(var u=0;u<c.length;u++)t(c[u]);var s=i;l.push(["tGiO",0,4]),a()}({"4A/n":function(e,t,a){},"6WHc":function(e,t){var a=document.querySelector(".burger"),n=document.querySelector(".header__top");a.addEventListener("click",(function(){n.classList.toggle("header__top_active"),a.classList.toggle("burger_active"),document.body.classList.toggle("lock")}))},Ynah:function(e,t,a){var n={"./de":"tGlX","./de.js":"tGlX","./en-gb":"Oaa7","./en-gb.js":"Oaa7","./es":"iYuL","./es.js":"iYuL","./fr":"nyYc","./fr.js":"nyYc","./it":"bpih","./it.js":"bpih"};function r(e){var t=l(e);return a(t)}function l(e){if(!a.o(n,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return n[e]}r.keys=function(){return Object.keys(n)},r.resolve=l,e.exports=r,r.id="Ynah"},fNvQ:function(e,t,a){"use strict";a("07d7"),a("5s+n"),a("ls82");var n=a("k3kC"),r=a.n(n);function l(e,t,a,n,r,l,o){try{var c=e[l](o),i=c.value}catch(e){return void a(e)}c.done?t(i):Promise.resolve(i).then(n,r)}function o(e){return function(){var t=this,a=arguments;return new Promise((function(n,r){var o=e.apply(t,a);function c(e){l(o,n,r,c,i,"next",e)}function i(e){l(o,n,r,c,i,"throw",e)}c(void 0)}))}}function c(){return(c=o(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,r.a;case 2:e.sent?document.body.classList.add("webp"):document.body.classList.add("no-webp");case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){c.apply(this,arguments)}()},tGiO:function(e,t,a){"use strict";a.r(t);a("g+Lm"),a("fNvQ"),a("6WHc"),a("4A/n");var n,r,l,o=a("q1tI"),c=a.n(o),i=a("i8i4"),u=a.n(i),s=a("/MKj"),m=a("55Ip"),d=a("Ty5D"),f=(a("pNMO"),a("4Brf"),a("0oug"),a("4mDm"),a("2B1R"),a("NBAS"),a("07d7"),a("SuFq"),a("JfAA"),a("PKPk"),a("3bBZ"),a("ANjH")),_=a("e7SQ"),b=a("wd/R"),v=a.n(b),p=a("aWKK"),h=Object(p.a)("CALENDAR/NEXT"),Y=Object(p.a)("CALENDAR/PREV"),y=Object(p.a)("CALENDAR/SET_CALENDARS");function E(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}var k=Object(_.a)((E(n={},y,(function(e,t){return t.payload.calendars})),E(n,h,(function(e,t){return t.payload.calendars})),E(n,Y,(function(e,t){return t.payload.calendars})),n),[]),g=Object(_.a)((E(r={},h,(function(e,t){return t.payload.lastCurrentMonth})),E(r,Y,(function(e,t){return t.payload.lastCurrentMonth})),r),v()().format("M/YYYY")),N=Object(_.a)(E({},y,(function(e,t){return t.payload.showCalendars})),1),M=Object(_.a)((E(l={},h,(function(){return!0})),E(l,Y,(function(e,t){return t.payload.isPrev})),l),!1),O=Object(_.a)({},!0),w=Object(_.a)({},["2020-09-12","2020-09-15","2020-09-16","2020-09-17","2020-09-20","2020-09-24","2020-09-25","2020-09-30","2020-10-02","2020-10-05","2020-10-06","2020-10-08","2020-10-21","2020-10-22"]),D=Object(f.b)({calendars:k,lastCurrentMonth:g,showCalendars:N,bookedDays:w,isPrev:M,isNext:O}),j=function(e){return e.calendar},C=(a("yyme"),a("yXV3"),a("17x9")),B=a.n(C),P=a("TSYQ"),S=a.n(P),x=function(e){var t=e.current,a=e.handelNext,n=e.handelPrev,r=e.calendarData;v.a.locale("en-gb");for(var l=v()(t,"M/YYYY"),o=l.clone().startOf("month").startOf("week"),i=l.clone().endOf("month").endOf("week"),u=o.clone().subtract(1,"day"),s=[];u.isBefore(i,"day");)s.push(Array(7).fill(0).map((function(){return u.add(1,"day").clone()})));return c.a.createElement("div",{className:"calendar__item"},c.a.createElement("div",{className:"calendar__item-control"},c.a.createElement("button",{className:"calendar__control-sm calendar__control-sm_left",onClick:n},"Prev"),c.a.createElement("div",{className:"calendar__current"},l.format("MMMM YYYY")),c.a.createElement("button",{className:"calendar__control-sm calendar__control-sm_right",onClick:a},"Next")),c.a.createElement("div",{className:"calendar__content"},c.a.createElement("table",null,c.a.createElement("thead",null,c.a.createElement("tr",null,v.a.weekdaysShort().map((function(e){return c.a.createElement("td",{key:e},e)})))),c.a.createElement("tbody",null,s.map((function(e){return c.a.createElement("tr",{key:e.toString()},e.map((function(e){var t=e.isBefore(new Date,"day"),a=!(r.bookedDays.indexOf(e.format("YYYY-MM-DD"))<0);return c.a.createElement("td",{key:e.toString()},c.a.createElement(m.b,{to:t||a?"#":"/little-katarina/book/".concat(e.format("YYYY/M/D")),className:S()({calendar__link:!0,calendar__link_disable:t,calendar__link_booked:a,"calendar__link_not-current":e.isBefore(l,"month")||e.isAfter(l,"month")})},e.format("D").toString()))})))}))))))};x.propTypes={current:B.a.string.isRequired};var T=Object(s.b)((function(e){return{calendarData:j(e)}}),{})(x);function H(e){return(H="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function L(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function R(e,t){return(R=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function A(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var a,n=q(e);if(t){var r=q(this).constructor;a=Reflect.construct(n,arguments,r)}else a=n.apply(this,arguments);return I(this,a)}}function I(e,t){return!t||"object"!==H(t)&&"function"!=typeof t?X(e):t}function X(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function q(e){return(q=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function F(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}var U,W,G=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&R(e,t)}(l,e);var t,a,n,r=A(l);function l(e){var t;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,l),F(X(t=r.call(this,e)),"handelNext",(function(){var e=t.props,a=e.calendarData,n=e.nextCalendar,r=v()(a.lastCurrentMonth,"M/YYYY").add(a.showCalendars,"month");t.isMobile()?n({lastCurrentMonth:r.format("M/YYYY"),calendars:[r]}):n({lastCurrentMonth:r.format("M/YYYY"),calendars:[r,r.clone().add(1,"month")]})})),F(X(t),"handelPrev",(function(){var e=t.props,a=e.calendarData,n=e.prevCalendar;if(a.isPrev){var r=v()(a.lastCurrentMonth,"M/YYYY").subtract(a.showCalendars,"month");t.isMobile()?n({lastCurrentMonth:r.format("M/YYYY"),calendars:[r],isPrev:!r.isSame(v()().startOf("month"))}):n({lastCurrentMonth:r.format("M/YYYY"),calendars:[r,r.clone().add(1,"month")],isPrev:!r.isSame(v()().startOf("month"))})}})),F(X(t),"updateCalendars",(function(){var e=t.props,a=e.setCalendars,n=e.calendarData;console.log(n.lastCurrentMonth);var r=v()(n.lastCurrentMonth,"M/YYYY");t.isMobile()?a({calendars:[r],showCalendars:1}):a({calendars:[r,r.clone().add(1,"month")],showCalendars:2})})),F(X(t),"isMobile",(function(){return window.innerWidth<=991})),t}return t=l,(a=[{key:"componentDidMount",value:function(){window.addEventListener("resize",this.updateCalendars),this.updateCalendars()}},{key:"componentWillUnmount",value:function(){window.removeEventListener("resize",this.updateCalendars)}},{key:"render",value:function(){var e=this,t=this.props.calendarData;return c.a.createElement(c.a.Fragment,null,c.a.createElement("h2",{className:"booking__title"},"Book ",c.a.createElement("span",null,"4 hours minimum session:")),c.a.createElement("div",{className:"calendar"},c.a.createElement("button",{className:"calendar__control-big calendar__control-big_left",onClick:this.handelPrev},"Prev"),t.calendars.map((function(t,a){return c.a.createElement(T,{key:t.toString(),current:t.format("M/YYYY"),handelNext:e.handelNext,handelPrev:e.handelPrev})})),c.a.createElement("button",{className:"calendar__control-big calendar__control-big_right",onClick:this.handelNext},"Next")))}}])&&L(t.prototype,a),n&&L(t,n),l}(c.a.Component),K=Object(s.b)((function(e){return{calendarData:j(e)}}),{setCalendars:y,nextCalendar:h,prevCalendar:Y})(G),Q=(a("ma9I"),a("+2oP"),Object(p.a)("TIME/SET_TIME")),V=Object(p.a)("TIME/CLEAR_TIME");function J(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}var z=Object(_.a)((J(U={},Q,(function(e,t){return t.payload.startBooking})),J(U,V,(function(){return""})),U),""),Z=Object(_.a)((J(W={},Q,(function(e,t){return t.payload.endBooking})),J(W,V,(function(){return""})),W),""),$=Object(f.b)({startBooking:z,endBooking:Z}),ee=function(e){return e.time},te=Object(s.b)((function(e){return{timeData:ee(e)}}),{setTime:Q,clearTime:V})((function(e){var t=e.setTime,a=e.timeData,n=e.clearTime,r=Object(d.f)(),l=r.year,o=r.month,i=r.day,u=v()("".concat(i,"/").concat(o,"/").concat(l),"D/M/YYYY"),s=u.clone().subtract(1,"day"),f=s.isBefore(new Date,"day")?"#":"/little-katarina/book/".concat(s.format("YYYY/M/D")),_="/book/".concat(u.clone().add(1,"day").format("YYYY/M/D")),b=[{label:"0:00",value:"0"},{label:"1:00",value:"1"},{label:"2:00",value:"2"},{label:"3:00",value:"3"},{label:"4:00",value:"4"},{label:"5:00",value:"5"},{label:"6:00",value:"6"},{label:"7:00",value:"7"},{label:"8:00",value:"8"},{label:"9:00",value:"9"},{label:"10:00",value:"10"},{label:"11:00",value:"11"},{label:"12:00",value:"12"},{label:"13:00",value:"13"},{label:"14:00",value:"14"},{label:"15:00",value:"15"},{label:"16:00",value:"16"},{label:"17:00",value:"17"},{label:"18:00",value:"18"},{label:"19:00",value:"19"},{label:"20:00",value:"20"},{label:"21:00",value:"21"},{label:"22:00",value:"22"},{label:"23:00",value:"23"}],p=function(e){var a=e.target.value;if(a){var n=u.clone().hour(1*a),r=n.clone().add(4,"hours");t({startBooking:n.format("YYYY-M-D H:mm"),endBooking:r.format("YYYY-M-D H:mm")})}else t({startBooking:"",endBooking:""})};return c.a.createElement(c.a.Fragment,null,c.a.createElement("h2",{className:"time__title"},"Book a time:"),c.a.createElement("p",{className:"time__subtitle time__subtitle_sm"},"Choose a time period."),c.a.createElement("div",{className:"time__control time__control_sm"},c.a.createElement(m.b,{to:f,className:"time__arrow time__arrow_left"},"Prev"),c.a.createElement("div",{className:"time__day"},u.format("MMMM D")),c.a.createElement(m.b,{to:_,className:"time__arrow time__arrow_right"},"Next")),c.a.createElement("div",{className:"time__select-wrapper time__select-wrapper_sm"},c.a.createElement("div",{className:"time__from-label"},"From"),c.a.createElement("div",{className:"time__value"},a.startBooking&&v()(a.startBooking,"YYYY-M-D H:mm").isSame(u,"day")?v()(a.startBooking,"YYYY-M-D H:mm").format("H:mm"):""),c.a.createElement("select",{onChange:p,className:"time__select"},c.a.createElement("option",{value:""}),b.map((function(e){return c.a.createElement("option",{key:e.value,value:e.value},e.label)}))),c.a.createElement("button",{className:"time__cancel",onClick:n},"cancel")),c.a.createElement("div",{className:"time__to time__to_sm"},a.endBooking&&v()(a.startBooking,"YYYY-M-D H:mm").isSame(u,"day")?v()(a.endBooking,"YYYY-M-D H:mm").format("H:mm"):""),c.a.createElement("div",{className:"time__select-check"},c.a.createElement("h3",{className:"time__pick"},"Pick a time interval"),c.a.createElement("div",{className:"time__top-controls"},c.a.createElement("p",{className:"time__text"},"If you want to book several hours, just select them at once"),c.a.createElement("div",{className:"time__control"},c.a.createElement(m.b,{to:f,className:"time__arrow time__arrow_left"},"Prev"),c.a.createElement("div",{className:"time__day"},u.format("MMMM D")),c.a.createElement(m.b,{to:_,className:"time__arrow time__arrow_right"},"Next"))),c.a.createElement("div",{className:"time__check-wrapper"},c.a.createElement("div",{className:"time__col"},c.a.createElement("div",{className:"time__head"},"Morning"),b.slice(0,6).map((function(e){return c.a.createElement("label",{className:"time__label",key:e.value},e.label,c.a.createElement("input",{onChange:p,value:e.value,type:"checkbox",checked:u.clone().hour(1*e.value).isBetween(v()(a.startBooking,"YYYY-M-D H:mm"),v()(a.endBooking,"YYYY-M-D H:mm"),"hour","[)")}),c.a.createElement("div",{className:"item__checkmark"}))}))),c.a.createElement("div",{className:"time__col"},c.a.createElement("div",{className:"time__head"},"Afternoon"),b.slice(6,12).map((function(e){return c.a.createElement("label",{className:"time__label",key:e.value},e.label,c.a.createElement("input",{onChange:p,value:e.value,type:"checkbox",checked:u.clone().hour(1*e.value).isBetween(v()(a.startBooking,"YYYY-M-D H:mm"),v()(a.endBooking,"YYYY-M-D H:mm"),"hour","[)")}),c.a.createElement("div",{className:"item__checkmark"}))}))),c.a.createElement("div",{className:"time__col"},c.a.createElement("div",{className:"time__head"},"Evening"),b.slice(12,18).map((function(e){return c.a.createElement("label",{className:"time__label",key:e.value},e.label,c.a.createElement("input",{onChange:p,value:e.value,type:"checkbox",checked:u.clone().hour(1*e.value).isBetween(v()(a.startBooking,"YYYY-M-D H:mm"),v()(a.endBooking,"YYYY-M-D H:mm"),"hour","[)")}),c.a.createElement("div",{className:"item__checkmark"}))}))),c.a.createElement("div",{className:"time__col"},c.a.createElement("div",{className:"time__head"},"Night"),b.slice(18,24).map((function(e){return c.a.createElement("label",{className:"time__label",key:e.value},e.label,c.a.createElement("input",{onChange:p,value:e.value,type:"checkbox",checked:u.clone().hour(1*e.value).isBetween(v()(a.startBooking,"YYYY-M-D H:mm"),v()(a.endBooking,"YYYY-M-D H:mm"),"hour","[)")}),c.a.createElement("div",{className:"item__checkmark"}))}))))),c.a.createElement("div",{className:"time__nav"},c.a.createElement(m.b,{to:"/little-katarina/book.html",className:"time__nav-link time__nav-link_back"},"Back"),c.a.createElement("a",{href:"#",className:"time__nav-link time__nav-link_next"},"Next")))})),ae=function(){return c.a.createElement(m.a,null,c.a.createElement(d.c,null,c.a.createElement(d.a,{path:"/little-katarina/book/:year/:month/:day",component:te}),c.a.createElement(d.a,{exact:!0,path:"/little-katarina/book.html",component:K})))},ne=Object(f.b)({calendar:D,time:$}),re=function(){return Object(f.d)(ne,void 0,Object(f.c)(window.__REDUX_DEVTOOLS_EXTENSION__?window.__REDUX_DEVTOOLS_EXTENSION__():function(e){return e}))}();u.a.render(c.a.createElement(s.a,{store:re},c.a.createElement(ae,null)),document.getElementById("app"))}});