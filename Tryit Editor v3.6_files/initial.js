"use strict"
window.onload = function() {
	/*! modernizr 3.3.1 (Custom Build) | MIT *
	 * https://modernizr.com/download/?-touchevents-setclasses !*/
	!function(e,n,t){function o(e,n){return typeof e===n}function s(){var e,n,t,s,a,i,r;for(var l in c)if(c.hasOwnProperty(l)){if(e=[],n=c[l],n.name&&(e.push(n.name.toLowerCase()),n.options&&n.options.aliases&&n.options.aliases.length))for(t=0;t<n.options.aliases.length;t++)e.push(n.options.aliases[t].toLowerCase());for(s=o(n.fn,"function")?n.fn():n.fn,a=0;a<e.length;a++)i=e[a],r=i.split("."),1===r.length?Modernizr[r[0]]=s:(!Modernizr[r[0]]||Modernizr[r[0]]instanceof Boolean||(Modernizr[r[0]]=new Boolean(Modernizr[r[0]])),Modernizr[r[0]][r[1]]=s),f.push((s?"":"no-")+r.join("-"))}}function a(e){var n=u.className,t=Modernizr._config.classPrefix||"";if(p&&(n=n.baseVal),Modernizr._config.enableJSClass){var o=new RegExp("(^|\\s)"+t+"no-js(\\s|$)");n=n.replace(o,"$1"+t+"js$2")}Modernizr._config.enableClasses&&(n+=" "+t+e.join(" "+t),p?u.className.baseVal=n:u.className=n)}function i(){return"function"!=typeof n.createElement?n.createElement(arguments[0]):p?n.createElementNS.call(n,"http://www.w3.org/2000/svg",arguments[0]):n.createElement.apply(n,arguments)}function r(){var e=n.body;return e||(e=i(p?"svg":"body"),e.fake=!0),e}function l(e,t,o,s){var a,l,f,c,d="modernizr",p=i("div"),h=r();if(parseInt(o,10))for(;o--;)f=i("div"),f.id=s?s[o]:d+(o+1),p.appendChild(f);return a=i("style"),a.type="text/css",a.id="s"+d,(h.fake?h:p).appendChild(a),h.appendChild(p),a.styleSheet?a.styleSheet.cssText=e:a.appendChild(n.createTextNode(e)),p.id=d,h.fake&&(h.style.background="",h.style.overflow="hidden",c=u.style.overflow,u.style.overflow="hidden",u.appendChild(h)),l=t(p,e),h.fake?(h.parentNode.removeChild(h),u.style.overflow=c,u.offsetHeight):p.parentNode.removeChild(p),!!l}var f=[],c=[],d={_version:"3.3.1",_config:{classPrefix:"",enableClasses:!0,enableJSClass:!0,usePrefixes:!0},_q:[],on:function(e,n){var t=this;setTimeout(function(){n(t[e])},0)},addTest:function(e,n,t){c.push({name:e,fn:n,options:t})},addAsyncTest:function(e){c.push({name:null,fn:e})}},Modernizr=function(){};Modernizr.prototype=d,Modernizr=new Modernizr;var u=n.documentElement,p="svg"===u.nodeName.toLowerCase(),h=d._config.usePrefixes?" -webkit- -moz- -o- -ms- ".split(" "):["",""];d._prefixes=h;var m=d.testStyles=l;Modernizr.addTest("touchevents",function(){var t;if("ontouchstart"in e||e.DocumentTouch&&n instanceof DocumentTouch)t=!0;else{var o=["@media (",h.join("touch-enabled),("),"heartz",")","{#modernizr{top:9px;position:absolute}}"].join("");m(o,function(e){t=9===e.offsetTop})}return t}),s(),a(f),delete d.addTest,delete d.addAsyncTest;for(var v=0;v<Modernizr._q.length;v++)Modernizr._q[v]();e.Modernizr=Modernizr}(window,document);
	//Polyfill for map method - Reference: http://es5.github.io/#x15.4.4.19
	Array.prototype.map||(Array.prototype.map=function(r,t){var n,o,e;if(null==this)throw new TypeError(" this is null or not defined");var i=Object(this),a=i.length>>>0;if("function"!=typeof r)throw new TypeError(r+" is not a function");for(arguments.length>1&&(n=t),o=new Array(a),e=0;a>e;){var p,f;e in i&&(p=i[e],f=r.call(n,p,e,i),o[e]=f),e++}return o});
	/*!
	 * VERSION: 0.1.4
	 * DATE: 2017-06-19
	 * UPDATES AND DOCS AT: http://greensock.com
	 *
	 * @license Copyright (c) 2008-2017, GreenSock. All rights reserved.
	 * DrawSVGPlugin is a Club GreenSock membership benefit; You must have a valid membership to use
	 * this code without violating the terms of use. Visit http://greensock.com/club/ to sign up or get more details.
	 * This work is subject to the software agreement that was issued with your membership.
	 * 
	 * @author: Jack Doyle, jack@greensock.com
	 */
	var _gsScope="undefined"!=typeof module&&module.exports&&"undefined"!=typeof global?global:this||window;(_gsScope._gsQueue||(_gsScope._gsQueue=[])).push(function(){"use strict";function a(a,b,c,d,e,f){return c=(parseFloat(c||0)-parseFloat(a||0))*e,d=(parseFloat(d||0)-parseFloat(b||0))*f,Math.sqrt(c*c+d*d)}function b(a){return"string"!=typeof a&&a.nodeType||(a=_gsScope.TweenLite.selector(a),a.length&&(a=a[0])),a}function c(a,b,c){var d,e,f=a.indexOf(" ");return-1===f?(d=void 0!==c?c+"":a,e=a):(d=a.substr(0,f),e=a.substr(f+1)),d=-1!==d.indexOf("%")?parseFloat(d)/100*b:parseFloat(d),e=-1!==e.indexOf("%")?parseFloat(e)/100*b:parseFloat(e),d>e?[e,d]:[d,e]}function d(c){if(!c)return 0;c=b(c);var d,e,f,g,h,j,k,l=c.tagName.toLowerCase(),m=1,n=1;"non-scaling-stroke"===c.getAttribute("vector-effect")&&(n=c.getScreenCTM(),m=n.a,n=n.d);try{e=c.getBBox()}catch(o){}if(e&&(e.width||e.height)||"rect"!==l&&"circle"!==l&&"ellipse"!==l||(e={width:parseFloat(c.getAttribute("rect"===l?"width":"circle"===l?"r":"rx")),height:parseFloat(c.getAttribute("rect"===l?"height":"circle"===l?"r":"ry"))},"rect"!==l&&(e.width*=2,e.height*=2)),"path"===l)g=c.style.strokeDasharray,c.style.strokeDasharray="none",d=c.getTotalLength()||0,m!==n&&console.log("Warning: <path> length cannot be measured accurately when vector-effect is non-scaling-stroke and the element isn't proportionally scaled."),d*=(m+n)/2,c.style.strokeDasharray=g;else if("rect"===l)d=2*e.width*m+2*e.height*n;else if("line"===l)d=a(c.getAttribute("x1"),c.getAttribute("y1"),c.getAttribute("x2"),c.getAttribute("y2"),m,n);else if("polyline"===l||"polygon"===l)for(f=c.getAttribute("points").match(i)||[],"polygon"===l&&f.push(f[0],f[1]),d=0,h=2;h<f.length;h+=2)d+=a(f[h-2],f[h-1],f[h],f[h+1],m,n)||0;else("circle"===l||"ellipse"===l)&&(j=e.width/2*m,k=e.height/2*n,d=Math.PI*(3*(j+k)-Math.sqrt((3*j+k)*(j+3*k))));return d||0}function e(a,c){if(!a)return[0,0];a=b(a),c=c||d(a)+1;var e=h(a),f=e.strokeDasharray||"",g=parseFloat(e.strokeDashoffset),i=f.indexOf(",");return 0>i&&(i=f.indexOf(" ")),f=0>i?c:parseFloat(f.substr(0,i))||1e-5,f>c&&(f=c),[Math.max(0,-g),Math.max(0,f-g)]}var f,g=_gsScope.document,h=g.defaultView?g.defaultView.getComputedStyle:function(){},i=/(?:(-|-=|\+=)?\d*\.?\d*(?:e[\-+]?\d+)?)[0-9]/gi,j=-1!==((_gsScope.navigator||{}).userAgent||"").indexOf("Edge");f=_gsScope._gsDefine.plugin({propName:"drawSVG",API:2,version:"0.1.4",global:!0,overwriteProps:["drawSVG"],init:function(a,b,f,g){if(!a.getBBox)return!1;var i,k,l,m,n=d(a)+1;return this._style=a.style,"function"==typeof b&&(b=b(g,a)),b===!0||"true"===b?b="0 100%":b?-1===(b+"").indexOf(" ")&&(b="0 "+b):b="0 0",i=e(a,n),k=c(b,n,i[0]),this._length=n+10,0===i[0]&&0===k[0]?(l=Math.max(1e-5,k[1]-n),this._dash=n+l,this._offset=n-i[1]+l,this._addTween(this,"_offset",this._offset,n-k[1]+l,"drawSVG")):(this._dash=i[1]-i[0]||1e-6,this._offset=-i[0],this._addTween(this,"_dash",this._dash,k[1]-k[0]||1e-5,"drawSVG"),this._addTween(this,"_offset",this._offset,-k[0],"drawSVG")),j&&(m=h(a),k=m.strokeLinecap,"butt"!==k&&k!==m.strokeLinejoin&&(k=parseFloat(m.strokeMiterlimit),this._addTween(a.style,"strokeMiterlimit",k,k+1e-4,"strokeMiterlimit"))),!0},set:function(a){this._firstPT&&(this._super.setRatio.call(this,a),this._style.strokeDashoffset=this._offset,1===a||0===a?this._style.strokeDasharray=this._offset<.001&&this._length-this._dash<=10?"none":this._offset===this._dash?"0px, 999999px":this._dash+"px,"+this._length+"px":this._style.strokeDasharray=this._dash+"px,"+this._length+"px")}}),f.getLength=d,f.getPosition=e}),_gsScope._gsDefine&&_gsScope._gsQueue.pop()(),function(a){"use strict";var b=function(){return(_gsScope.GreenSockGlobals||_gsScope)[a]};"undefined"!=typeof module&&module.exports?(require("../TweenLite.min.js"),module.exports=b()):"function"==typeof define&&define.amd&&define(["TweenLite"],b)}("DrawSVGPlugin");
	var isChrome = /Chrome/.test(navigator.userAgent) && /Google Inc/.test(navigator.vendor);
	
	if (Enabler.isInitialized()) {
		init();
	} else {
	  	Enabler.addEventListener(studio.events.StudioEvent.INIT, init);
	}

	function init() {
	  	if (Enabler.isPageLoaded()) {
	    	Enabler.setProfileId(10012416);
	    	politeInit();
	  	} else {
	  		Enabler.setProfileId(10012416);
	    	Enabler.addEventListener(studio.events.StudioEvent.PAGE_LOADED, politeInit);
	 	}
	};

	function politeInit(){		

	    //For debugging comment below row
	    console.log = function() {}
	    //define banner selectors and vars
		var select = function(s) {
		return document.querySelector(s);
		},
		selectAll = function(s) {
		return document.querySelectorAll(s);
		},
		x = (document.getElementById('slider').clientWidth),
		y = (document.getElementById('slider').clientHeight),
		activeID = 0,
		itemW = 300,
		carousel_count = dynamicContent.bookit_data_hotels_pmp_counter.length,
		carousel_items = [],
		slider = select('#slider'),
		hotel_name = select('#hotel_name'),
		hotel_area = select('#hotel_area'),
		price = select('.price'),
		rating = select('#rating'),
		rating_num = dynamicContent.bookit_data_hotels_pmp_counter[activeID].rating,
		stars_empty = selectAll('#_1_1,#_2_1,#_3_1,#_4_1,#_5_1'),
		stars_half = selectAll('#_1_2,#_2_2,#_3_2,#_4_2,#_5_2'),
		stars_full = selectAll('#_1_3,#_2_3,#_3_3,#_4_3,#_5_3'),
		price_old = select('.price_old'),
		per_option = select('.per_option'),
		dash = select('.st0'),
		slides_wrapper = select('#slides_wrapper'),
		loading = select('#loading'),
		arr_left = select('#arr_left'),
		arr_right = select('#arr_right'),
		mask = select('#mask'),
		mask_2 = select('#mask_2'),
		mask_3 = select('#mask_3'),
		top_header = select('#top'),
		top_bgr = select('#top_bgr'),
		bottom_bgr = select('#bottom_bgr'),
		triangle = select('#triangle'),
		//airport = select('.airport'),
		//plane = select('#plane'),
		//all_inclusive_badge = select('#all_inclusive'),
		bottom_foot = select('#bottom'),
		all_inclusive_perks = ['All Meals','All Drinks','Activities','Entertainment','All Drinks','All Meals'], 
		static_promo = select('#static_promo'),
		offer = select('#offer'),
		offer_logo = select('#offer_logo'),
		cta_offer = select('#cta_offer'),
		cta = select('#cta'),
		logo = select('#logo'),
		counter = select('#counter'),
		circ_hours_black = select('#circ_hours .black'),
		circ_minutes_black = select('#circ_minutes .black'),
		circ_seconds_black = select('#circ_seconds .black'),
		before_counter = select('.counter_text'),
		after_counter = select('.after_counter'),
		arr_left_2 = select('#arr_left_2'),
		arr_right_2 = select('#arr_right_2'),
		txt_1 = select('#txt_1'),
		txt_2 = select('#txt_2'),
		txt_3 = select('#txt_3'),
		txt_4 = select('#txt_4'),
		pattern = /^((http):\/\/)/,
		flashing = false,
		bgURL,
		ctaURL,
		logoURL,
		swipeDir,
		slideEasing = Power2.easeOut,
		slideSpeed = 0.75,
		slideDelay = 2.5;

		TweenMax.set([arr_left,arr_right,arr_left_2,arr_right_2],{scale:0,autoAlpha:0});
		//TweenMax.set([stars_full,stars_half,stars_empty,price],{autoAlpha:0});
		TweenMax.set(slides_wrapper,{css:{width:''+(itemW * (carousel_count))+'px'}});

		if (dynamicContent.bookit_data_hotels_pmp_counter[activeID].promo_package_price > 0){
			cta.textContent = 'DEALS FROM $'+dynamicContent.bookit_data_hotels_pmp_counter[activeID].promo_package_price;
		}
		
		ctaURL = dynamicContent.bookit_data_hotels_pmp_counter[activeID].cta_exit_url.Url;
		ctaURL = ctaURL.replace(/^http:\/\//i, 'https://');
		logoURL = dynamicContent.Profile[0].exit_url_logo;

		function countDown() {
			var clock = document.getElementById('counter');
			var beforeCounterText = clock.querySelector('.counter_text');
			var afterCounterText = clock.querySelector('.after_counter');
			var hoursSpan = clock.querySelector('.hours');
			var minutesSpan = clock.querySelector('.minutes');
			var secondsSpan = clock.querySelector('.seconds');

			var deadline_year = dynamicContent.bookit_data_hotels_pmp_counter[activeID].counter_year;
		    var deadline_month = dynamicContent.bookit_data_hotels_pmp_counter[activeID].counter_month-1;//add 1 because months stars from 0 in UTC time. 
		    var deadline_day = dynamicContent.bookit_data_hotels_pmp_counter[activeID].counter_day;
		    var deadline_hours = dynamicContent.bookit_data_hotels_pmp_counter[activeID].counter_hours;
		    var deadline_minutes = dynamicContent.bookit_data_hotels_pmp_counter[activeID].counter_minutes;
		    var deadline_seconds = dynamicContent.bookit_data_hotels_pmp_counter[activeID].counter_seconds;

		    var tl = new TimelineMax();
		    


			function currentTime(offset) {
			    'use strict';
			    // create Date object for current location
			    var d = new Date();
			    // convert to msec, add local time zone offset, get UTC time in msec
			    var utc = d.getTime() + (d.getTimezoneOffset() * 60000);
			    // create new Date object for different city, using supplied offset
			    var nd = new Date(utc + (3600000*offset));
			    // return time
			    return nd;
			}


			function getTimeRemaining(endtime) {
			  var t = Date.parse(endtime) - Date.parse(new Date());
			  var seconds = Math.floor((t / 1000) % 60);
			  var minutes = Math.floor((t / 1000 / 60) % 60);
			  var hours = Math.round((deadline - new Date()) / 3600000);
			  console.log(hours);
			  
			  if (hours > 99) {
			  	TweenMax.set(counter_hours,{x:'-4px'})
			  }
			  if (hours < 10) {
			  	TweenMax.set(counter_hours,{x:'1px'})
			  }

			  return {
			    'total': t,
			    'hours': hours,
			    'minutes': minutes,
			    'seconds': seconds
			  };
			}

			function initializeClock(endtime) {

			  function updateClock() {
			    var t = getTimeRemaining(endtime);
			    var total_hours = parseInt(dynamicContent.bookit_data_hotels_pmp_counter[0].zip_code);

			    var remaining_hours = Math.round(100-((100/total_hours)*t.hours));
			    var remaining_minutes = Math.round(100-((100/60)*t.minutes));
			    var remaining_seconds = Math.round(100-((100/60)*t.seconds));
			    console.log(remaining_seconds);
			    console.log(remaining_hours);

			    tl
			    .to(circ_hours_black, 0.5, {drawSVG:""+remaining_hours+"%", ease: Bounce.EaseIn})
			    .to(circ_minutes_black, 0.5, {drawSVG:""+remaining_minutes+"%", ease: Bounce.EaseIn},'-=0.5')
			    .fromTo(counter_seconds,0.5,{autoAlpha:0.3},{autoAlpha:1},'-=0.5')
			    .fromTo(circ_seconds_black, 0.5, {drawSVG:"100%"},{drawSVG:""+remaining_seconds+"%", ease: Bounce.EaseIn},'-=0.5');

			    hoursSpan.innerHTML = t.hours;
			    minutesSpan.innerHTML = ('0' + t.minutes).slice(-2);
			    secondsSpan.innerHTML = ('0' + t.seconds).slice(-2);

			    if (t.total <= 0) {
			      clearInterval(timeinterval);
			    }
			  }

			  updateClock();
			  var timeinterval = setInterval(updateClock, 1000);
			  
			  //Stop clock from updating after 30s.
			  setTimeout(function() {
			  	clearInterval(timeinterval);
			  }, 30000);  
			}

			var deadline = new Date(Date.parse(new Date(Date.UTC(deadline_year, deadline_month, deadline_day, deadline_hours, deadline_minutes, deadline_seconds) + (3600000*(+8)))));

			if (deadline <= new Date()|| !dynamicContent.bookit_data_hotels_pmp_counter[activeID].counter_visible) {
			  TweenMax.set(counter,{autoAlpha:0}); 
			}
			else {
				initializeClock(deadline);
			}
		}
		countDown();

		// Show banner price and rating (if rating available)
		function getRating(rating){
		}

		// Show banner price and rating (if rating available) but faster - used when sliding manually.
		function getRatingFast(rating){
		}
	
		//Preloading images before starting the banner.
		function preloadImages(srcs, callback) {
		    var img;
		    var remaining = srcs.length;
		    for(var i = 0; i < srcs.length; i++) {
		        img = new Image(300,250);
		        img.onload = function() {
		            --remaining;
		            if (remaining <= 0) {
		                callback();
		            }
		        };
		        img.id = i;
    			img.className = 'slider_image';
		        img.src = dynamicContent.bookit_data_hotels_pmp_counter[i].img.Url;
		        document.getElementById('slides_wrapper').appendChild(img);
		    }
		}
		preloadImages(dynamicContent.bookit_data_hotels_pmp_counter, imagesPreloaded);

		function imagesPreloaded(){
			carousel_items = selectAll('.slider_image');
	    	activeID = 1;
			var tl = new TimelineMax();
			
			tl.to(loading,0.3,{scale:0,autoAlpha:0, onComplete:playBanner})
		}

		// Aimate banner to roll once showing all hotels.
		function playBanner() {
			var tl = new TimelineMax();
			var rating_num = dynamicContent.bookit_data_hotels_pmp_counter[activeID].rating; 	
			var xTarget = ((activeID * itemW) * -1);

			tl.to(all_inclusive_type,0.1,{autoAlpha:0, onComplete:getHotelValues,delay:slideDelay})
			  .to(carousel_items, slideSpeed, {x: xTarget, ease: slideEasing})
			  .to(all_inclusive_type,0.3,{autoAlpha:1,onComplete:checkForExit,delay:0.1},'-='+(slideSpeed/1.5)+'');

			//Get Hotel information  
			function getHotelValues(){
				all_inclusive_type.innerHTML = "<span>•</span> "+all_inclusive_perks[activeID];

				if(!pattern.test(dynamicContent.bookit_data_hotels_pmp_counter[activeID].bg_exit_url.Url)) {
			    	bgURL = "http://" + dynamicContent.bookit_data_hotels_pmp_counter[activeID].bg_exit_url.Url;
				} else {
					bgURL = dynamicContent.bookit_data_hotels_pmp_counter[activeID].bg_exit_url.Url;
				}
				
				getRating(rating_num);

				console.log(bgURL);
			}

			//Checking logic
			function checkForExit(){
				activeID++;
				console.log(activeID);

				switch (activeID) {

					case dynamicContent.bookit_data_hotels_pmp_counter.length:
						tl.add(showArrow1)
						activeID--;
					break;

					default:
						reInitiate();
					break
				}	
			}
		}	    

		// Function to re-initiate slide animation if the banner is not loaded yet.
		function reInitiate(){
			playBanner();
		}

	  	// Main engine to navigate slides once the animation has played.
		function navigateSlide() {
			var tl = new TimelineMax();
			console.log(activeID);

			//if(activeID == carousel_count-1) activeID = carousel_count-1;
			if(activeID <= 0) activeID = 0;
			if(activeID > carousel_count-1) {activeID--; return false;}		
			
			//getting rating here, to ensure no higher value is targeted;
			var rating_num = dynamicContent.bookit_data_hotels_pmp_counter[activeID].rating;

			var xTarget = ((activeID * itemW) * -1);
			console.log(xTarget);

			tl
			  .to(all_inclusive_type,0.1,{autoAlpha:0, onComplete:getHotelValues})
			  .to(carousel_items, slideSpeed, {x: xTarget, ease: slideEasing})
			  .to(all_inclusive_type,0.3,{autoAlpha:1,delay:0.1},'-='+(slideSpeed/1.5)+'');

			  tl.timeScale(2);


			//Hide Navigation on both ends
			if(activeID == 0) {tl.to(arr_left,0.1,{scale:0,autoAlpha:0},'-=0.3')} 
		    else {tl.to(arr_left,0.1,{scale:1,autoAlpha:1},'-=0.3')}
		    
		    if(activeID == carousel_count-1) {tl.to(arr_right,0.3,{scale:0,autoAlpha:0},'-=0.3')}
		    else {tl.to(arr_right,0.1,{scale:1,autoAlpha:1},'-=0.5')}

			function getHotelValues(){
				all_inclusive_type.innerHTML = "<span>•</span> "+all_inclusive_perks[activeID];
				getRatingFast(rating_num);
			}

			//Bookit URL check for http
			if(!pattern.test(dynamicContent.bookit_data_hotels_pmp_counter[activeID].bg_exit_url.Url)) {
		    	bgURL = "http://" + dynamicContent.bookit_data_hotels_pmp_counter[activeID].bg_exit_url.Url;
			} else {
				bgURL = dynamicContent.bookit_data_hotels_pmp_counter[activeID].bg_exit_url.Url;
			}
			
			console.log(bgURL);
		}

		// Show the arrow at the end of slider sequence
		function showArrow1() {
			var tl = new TimelineMax();
			
			tl.to(arr_left,0.1,{scale:1,autoAlpha:1})
			.to(arr_left,0.4,{x:'20px',ease: slideEasing})
			.to(arr_left,0.4,{x:0, ease: Bounce.easeOut})

			return tl;
		}

		if ((Modernizr.touchevents)&&(!isChrome)) {
			console.log("Touch supported");
			mask.addEventListener('touchend', bgExitHandler, false);
			cta.addEventListener('touchend', ctaExitHandler, false);
			logo.addEventListener('touchend', logoExitHandler, false);
			arr_left.addEventListener("touchstart", function(evt){ evt.preventDefault(); activeID--; navigateSlide(); });
			arr_right.addEventListener("touchstart", function(evt){ evt.preventDefault(); activeID++; navigateSlide(); });
		} else {
		  	console.log("Touch not-supported");
		  	mask.addEventListener('click', bgExitHandler, false);
		  	cta.addEventListener('click', ctaExitHandler, false);
		  	logo.addEventListener('click', logoExitHandler, false);
		  	arr_left.addEventListener("click", function(){ activeID--; navigateSlide(); });
			arr_right.addEventListener("click", function(){ activeID++; navigateSlide(); });
		}


		//Exit Handler - hotel click
		function bgExitHandler(e) {
		 	Enabler.exitOverride('Background Exit', ctaURL);
		 	TweenMax.killAll();
		 	return false;
		}

		//Exit Handler - cta click
		function ctaExitHandler(e) {
		 	Enabler.exitOverride('CTA Offer Exit', ctaURL);
		 	TweenMax.killAll();
		 	return false;
		}

		//Exit Handler - cta click
		function logoExitHandler(e) {
		 	Enabler.exitOverride('LOGO Offer Exit', logoURL);
		 	TweenMax.killAll();
		 	return false;
		}

	};
}