(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],[,,,,,,,function(e,t,r){e.exports=r(18)},,,,,function(e,t,r){},function(e,t,r){},function(e,t,r){},function(e,t,r){},function(e,t,r){},function(e,t,r){},function(e,t,r){"use strict";r.r(t);var s=r(0),n=r.n(s),a=r(6),c=r(1),l=r(2),o=r(3),i=r(4),u=(r(12),function(e){Object(i.a)(r,e);var t=Object(o.a)(r);function r(){return Object(c.a)(this,r),t.apply(this,arguments)}return Object(l.a)(r,[{key:"render",value:function(){return n.a.createElement("section",{className:"sectionFirst"},n.a.createElement("h1",{className:"sectionFirst__title"},"\u0412\u0441\u0435\u0433\u0434\u0430 \u043b\u0438 \u0446\u0435\u043b\u0438 \u0442\u0435\u0440\u0430\u043f\u0438\u0438 \u0421\u04142 \u043d\u0430\xa0\u043f\u043e\u0432\u0435\u0440\u0445\u043d\u043e\u0441\u0442\u0438?"),n.a.createElement("div",{className:"sectionFirst__macker"},n.a.createElement("div",{className:"sectionFirst__marker1"},n.a.createElement("span",{className:"sectionFirst__titleMarker titleMarker1"},"\u0426\u0435\u043b\u044c \u043f\u043e HbA1c"),n.a.createElement("div",{className:"sectionFirst__pointMarker1"})),n.a.createElement("div",{className:"sectionFirst__marker2"},n.a.createElement("span",{className:"sectionFirst__titleMarker titleMarker2"},"\u0413\u0438\u043f\u043e\u0433\u043b\u0438\u043a\u0435\u043c\u0438\u044f"),n.a.createElement("div",{className:"sectionFirst__pointMarker1"})),n.a.createElement("div",{className:"sectionFirst__marker3"},n.a.createElement("span",{className:"sectionFirst__titleMarker titleMarker3"},"\u041e\u0441\u043b\u043e\u0436\u043d\u0435\u043d\u0438\u044f \u0421\u0414"),n.a.createElement("div",{className:"sectionFirst__pointMarker1"})),n.a.createElement("div",{className:"sectionFirst__marker4"},n.a.createElement("span",{className:"sectionFirst__titleMarker titleMarker4"},"\u0421\u0421 \u0440\u0438\u0441\u043a\u0438"),n.a.createElement("div",{className:"sectionFirst__pointMarker1"}))),n.a.createElement("div",{className:"nextSlide"},n.a.createElement("span",{className:"nextSlide__text"},"\u041b\u0438\u0441\u0442\u0430\u0439\u0442\u0435 \u0432\u043d\u0438\u0437")))}}]),r}(n.a.Component)),d=(r(13),function(e){Object(i.a)(r,e);var t=Object(o.a)(r);function r(){return Object(c.a)(this,r),t.apply(this,arguments)}return Object(l.a)(r,[{key:"render",value:function(){return n.a.createElement("section",{className:"sectionSecond"},n.a.createElement("h1",{className:"sectionSecond__title"},"\u041e\u0441\u043d\u043e\u0432\u0430 \u0442\u0435\u0440\u0430\u043f\u0438\u0438 \u2014 \u043f\u0430\u0442\u043e\u0433\u0435\u043d\u0435\u0437 \u0421\u04142"))}}]),r}(n.a.Component)),m=(r(14),function(e){Object(i.a)(r,e);var t=Object(o.a)(r);function r(){var e;return Object(c.a)(this,r),(e=t.call(this)).startTouch=function(t){var r=document.querySelector('DIV[class="slider__scrollItem"]'),s=document.querySelector('DIV[class="slider__bg"]');r.style.transition="",s.style.transition="",e.shiftX=t.targetTouches[0].clientX-document.querySelector('DIV[class="slider__scrollItem"]').getBoundingClientRect().left,document.addEventListener("touchmove",e.onMouseMove),document.addEventListener("touchend",e.touchEnd)},e.onMouseMove=function(t){e.thMove=Math.round(t.targetTouches[0].clientX-e.shiftX-document.querySelector('DIV[class="slider__scroll"]').getBoundingClientRect().left),e.thMove<-10?e.thMove=-10:e.thMove>690&&(e.thMove=690),e.thMove>document.querySelector('DIV[class="slider__scroll"]').offsetWidth/4*3?document.querySelector('DIV[class="sectionThirdInner"]').style.right="0px":e.thMove>document.querySelector('DIV[class="slider__scroll"]').offsetWidth/4?document.querySelector('DIV[class="sectionThirdInner"]').style.right="-1024px":e.thMove<document.querySelector('DIV[class="slider__scroll"]').offsetWidth/4&&(document.querySelector('DIV[class="sectionThirdInner"]').style.right="-2048px"),document.querySelector('DIV[class="slider__scrollItem"]').style.left=e.thMove+"px",document.querySelector('DIV[class="slider__bg"]').style.width=e.thMove/6.8+"%"},e.realPositionSlider=function(){var t=document.querySelector('DIV[class="slider__scrollItem"]'),r=document.querySelector('DIV[class="slider__bg"]');t.style.transition=".5s",r.style.transition=".5s",e.thMove<document.querySelector('DIV[class="slider__scroll"]').offsetWidth/4?(t.style.left="-10px",document.querySelector('DIV[class="slider__bg"]').style.width="0%"):e.thMove>document.querySelector('DIV[class="slider__scroll"]').offsetWidth/4*3?(t.style.left="690px",document.querySelector('DIV[class="slider__bg"]').style.width="100%"):document.querySelector('DIV[class="slider__scroll"]').offsetWidth/4<e.thMove<document.querySelector('DIV[class="slider__scroll"]').offsetWidth/4*3&&(t.style.left=document.querySelector('DIV[class="slider__scroll"]').offsetWidth/4*2+"px",document.querySelector('DIV[class="slider__bg"]').style.width="52%")},e.touchEnd=function(){e.realPositionSlider(),document.removeEventListener("touchmove",e.onMouseMove),document.removeEventListener("touchend",e.touchEnd)},e.state={},e.thMove=null,e.shiftX=null,e}return Object(l.a)(r,[{key:"render",value:function(){var e=this;return n.a.createElement("div",{className:"slider"},n.a.createElement("div",{className:"slider__line"},n.a.createElement("div",{className:"slider__scroll"}),n.a.createElement("div",{className:"slider__scrollItem",onTouchStart:function(t){return e.startTouch(t)}}),n.a.createElement("div",{className:"slider__bg"})),n.a.createElement("div",{className:"slider__number"},n.a.createElement("span",{className:"slider__title"},"1998"),n.a.createElement("span",{className:"slider__title"},"2009"),n.a.createElement("span",{className:"slider__title"},"2016")))}}]),r}(n.a.Component)),h=(r(15),function(e){Object(i.a)(r,e);var t=Object(o.a)(r);function r(){return Object(c.a)(this,r),t.apply(this,arguments)}return Object(l.a)(r,[{key:"render",value:function(){return n.a.createElement("section",{className:"sectionThird",style:{right:this.right+"px"}},n.a.createElement("div",{className:"sectionThirdInner"},n.a.createElement("section",{className:"sectionThird1"},n.a.createElement("h1",{className:"sectionThird1__title"},"\u0417\u0432\u0435\u043d\u044c\u044f \u043f\u0430\u0442\u043e\u0433\u0435\u043d\u0435\u0437\u0430 \u0421\u04142")),n.a.createElement("section",{className:"sectionThird2"},n.a.createElement("h1",{className:"sectionThird1__title"},"\u0421\u043c\u0435\u0440\u0442\u0435\u043b\u044c\u043d\u044b\u0439 \u043e\u043a\u0442\u0435\u0442")),n.a.createElement("section",{className:"sectionThird3"},n.a.createElement("h1",{className:"sectionThird1__title"},"\u0417\u0432\u0435\u043d\u044c\u044f \u043f\u0430\u0442\u043e\u0433\u0435\u043d\u0435\u0437\u0430 \u0421\u04142"))),n.a.createElement(m,null))}}]),r}(n.a.Component)),_=function(e){Object(i.a)(r,e);var t=Object(o.a)(r);function r(){return Object(c.a)(this,r),t.apply(this,arguments)}return Object(l.a)(r,[{key:"render",value:function(){var e=this;return n.a.createElement("div",{className:"sliderInner",style:{top:this.props.scroll+"px"},onTouchStart:function(t){return e.props.touchStart(t)},onTouchEnd:function(t){return e.props.touchEnd(t)}},n.a.createElement(u,null),n.a.createElement(d,null),n.a.createElement(h,null))}}]),r}(n.a.Component),f=(r(16),function(e){Object(i.a)(r,e);var t=Object(o.a)(r);function r(){return Object(c.a)(this,r),t.apply(this,arguments)}return Object(l.a)(r,[{key:"render",value:function(){return n.a.createElement("div",{className:"pagination"},n.a.createElement("div",{className:"pagination__point",style:{backgroundColor:1===this.props.bg?"#f78b1f":"white"}}),n.a.createElement("div",{className:"pagination__point",style:{backgroundColor:2===this.props.bg?"#f78b1f":"white"}}),n.a.createElement("div",{className:"pagination__point",style:{backgroundColor:3===this.props.bg?"#f78b1f":"white"}}))}}]),r}(n.a.Component)),v=(r(17),function(e){Object(i.a)(r,e);var t=Object(o.a)(r);function r(){var e;return Object(c.a)(this,r),(e=t.call(this)).onTouchStart=function(t){e.touchStart=t.targetTouches[0].screenY},e.onTouchEnd=function(t){e.touchEnd=t.changedTouches[0].screenY,e.scrollSection()},e.scrollSection=function(){if(e.touchEnd-e.touchStart>50){if(0===e.state.scroll)return;e.setState({scroll:e.state.scroll+768,bg:e.state.bg-1})}else if(e.touchEnd-e.touchStart<-50){if(-1536===e.state.scroll)return;e.setState({scroll:e.state.scroll-768,bg:e.state.bg+1})}},e.state={scroll:0,bg:1},e.touchStart=0,e.touchEnd=0,e}return Object(l.a)(r,[{key:"render",value:function(){return n.a.createElement("div",{className:"sliderOuter"},n.a.createElement(_,{scroll:this.state.scroll,touchStart:this.onTouchStart,touchEnd:this.onTouchEnd}),n.a.createElement(f,{bg:this.state.bg}))}}]),r}(n.a.Component));Object(a.render)(n.a.createElement(v,null),document.getElementById("root"))}],[[7,1,2]]]);
//# sourceMappingURL=main.a58cfbe5.chunk.js.map