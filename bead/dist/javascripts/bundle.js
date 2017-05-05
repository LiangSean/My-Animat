/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

	__webpack_require__(1);
	module.exports = __webpack_require__(2);


/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!function(r,t){if(true)!(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports], __WEBPACK_AMD_DEFINE_FACTORY__ = (t), __WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? (__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));else if("undefined"!=typeof exports)t(exports);else{var e={exports:{}};t(e.exports),r.canvas=e.exports}}(this,function(r){"use strict";function t(r){if(Array.isArray(r)){for(var t=0,e=Array(r.length);t<r.length;t++)e[t]=r[t];return e}return Array.from(r)}function e(r,t){if(!(r instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(r,"__esModule",{value:!0});var i=function(){function r(r,t){var e=[],i=!0,o=!1,n=void 0;try{for(var a,s=r[Symbol.iterator]();!(i=(a=s.next()).done)&&(e.push(a.value),!t||e.length!==t);i=!0);}catch(r){o=!0,n=r}finally{try{!i&&s.return&&s.return()}finally{if(o)throw n}}return e}return function(t,e){if(Array.isArray(t))return t;if(Symbol.iterator in Object(t))return r(t,e);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}(),o=function(){function r(r,t){for(var e=0;e<t.length;e++){var i=t[e];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(r,i.key,i)}}return function(t,e,i){return e&&r(t.prototype,e),i&&r(t,i),t}}(),n=function(){function r(){e(this,r),this.canvas=document.getElementById("canvas"),this.cxt=canvas.getContext("2d"),this.width=this.canvas.width=this.canvas.offsetWidth,this.height=this.canvas.height=this.canvas.offsetHeight,this.bounds=this.canvas.getBoundingClientRect(),this.ball_count=30,this.line_range=150,this.r_range=[5,30],this.color=[[188,56,23],[130,5,5]],this.period=[3,8],this.opacity=[.2,.8],this.speed=[-1,1],this.balls=[],this.clickHandle=this.clickHandle.bind(this),this.bindEvent(),this.start()}return o(r,[{key:"bindEvent",value:function(){this.canvas.addEventListener("click",this.clickHandle,!1)}},{key:"unbindEvent",value:function(){this.canvas.removeEventListener("click",this.clickHandle,!1)}},{key:"clickHandle",value:function(r){if(this.isAnimate)return this.isAnimate=!1;this.start();r.clientX,this.bounds.left,r.clientY,this.bounds.top}},{key:"start",value:function(){var r=this;if(this.isAnimate)return!1;for(var t=0;t<this.ball_count;t++)this.addBall();this.isAnimate=!0;var e=function t(){if(!r.isAnimate)return!1;r.render(),r.update(),requestAnimationFrame(t)};requestAnimationFrame(e)}},{key:"getColorList",value:function(r){for(var t=this,e=[this.color[1][0]-this.color[0][0],this.color[1][1]-this.color[0][1],this.color[1][2]-this.color[0][2]],i=Math.max(Math.abs(e[0]),Math.abs(e[1]),Math.abs(e[2]))*r,o=e.map(function(r){return r/i}),n=[],a=0;a<i;a++)!function(r){n.push(o.map(function(e,i){return t.color[0][i]+e*r}))}(a);return n}},{key:"addBall",value:function(){var r={x:this.getRandomNumber([0,this.width]),y:this.getRandomNumber([0,this.height]),vx:this.getRandomNumber(this.speed),vy:this.getRandomNumber(this.speed),opacity:this.getRandomNumber(this.opacity),freq:this.getRandomNumber(this.period),type:~~this.getRandomNumber([0,3]),cur_i:0,reverse:!1};if(r.r=(1-r.opacity)*(this.r_range[1]-this.r_range[0])+this.r_range[0],r.ColorList=this.getColorList(r.freq),this.isOverlap(r))return this.addBall();var e=this.color[0];switch(r.color=[].concat(t(e)),r.type){case 0:break;case 1:r.empty={r:this.getRandomNumber([r.r/2,r.r/4*3])};break;case 2:r.empty={r:this.getRandomNumber([r.r/2,r.r/4*3])},r.son={r:this.getRandomNumber([r.empty.r/2,r.empty.r/4*3]),color:[].concat(t(r.color))}}this.balls.push(r)}},{key:"isOverlap",value:function(r){return!this.balls.every(function(t){return!(Math.sqrt(Math.pow(r.x-t.x,2)+Math.pow(r.y-t.y,2))<=r.r+t.r)})}},{key:"addMirrorBall",value:function(r,t){var e={};for(var i in r)void 0!==t[i]?e[i]=t[i]:e[i]=r[i];return e}},{key:"render",value:function(r){var t=this;this.cxt.clearRect(0,0,this.width,this.height),Array.from(this.balls,function(r){if(t.renderBall(r),r.mirror)return t.renderBall(r.mirror,r);!r.mirror&&r.x<r.r?(r.mirror=t.addMirrorBall(r,{x:r.x+t.width,mirror:null}),t.renderBall(r.mirror,r)):!r.mirror&&r.x>t.width-r.r?(r.mirror=t.addMirrorBall(r,{x:r.x-t.width,mirror:null}),t.renderBall(r.mirror,r)):!r.mirror&&r.y<r.r?(r.mirror=t.addMirrorBall(r,{y:r.y+t.height,mirror:null}),t.renderBall(r.mirror,r)):!r.mirror&&r.y>t.height-r.r&&(r.mirror=t.addMirrorBall(r,{y:r.y-t.height,mirror:null}),t.renderBall(r.mirror,r))})}},{key:"renderBall",value:function(r,t){var e=this,i=r.x,o=r.y;this.renderArc(i,o,r.r,this.getRGBA(r.color,r.opacity)),this.cxt.globalCompositeOperation="destination-out",r.type>0&&this.renderArc(i,o,r.empty.r,"#fff"),this.cxt.globalCompositeOperation="source-over",2===r.type&&this.renderArc(i,o,r.son.r,this.getRGBA(r.son.color,r.opacity)),Array.from(this.balls,function(n){if(r===n)return!1;var a=Math.sqrt(Math.pow(i-n.x,2)+Math.pow(o-n.y,2));if(a<e.line_range&&a>r.r+n.r){var s=e.cxt.createLinearGradient(i,o,n.x,n.y);1===r.type?(s.addColorStop(0,e.getRGBA(r.color,1-a/e.line_range)),s.addColorStop(r.empty.r/a,e.getRGBA(r.color,1-a/e.line_range)),s.addColorStop(r.empty.r/a,"transparent")):2===r.type?(s.addColorStop(0,"transparent"),s.addColorStop(r.son.r/a,"transparent"),s.addColorStop(r.son.r/a,e.getRGBA(r.color,1-a/e.line_range)),s.addColorStop(r.empty.r/a,e.getRGBA(r.color,1-a/e.line_range)),s.addColorStop(r.empty.r/a,"transparent")):s.addColorStop(0,"transparent"),s.addColorStop(r.r/a,"transparent"),s.addColorStop(r.r/a,e.getRGBA(r.color,1-a/e.line_range)),s.addColorStop(1-n.r/a,e.getRGBA(n.color,1-a/e.line_range)),s.addColorStop(1-n.r/a,"transparent"),s.addColorStop(1,"transparent"),e.cxt.strokeStyle=s,e.renderLine(i,o,n.x,n.y)}else a<r.r+n.r&&!r.isCrash&&(r.isCrash=!0,n.isCrash=!0,e.crashHandle(r,n),t&&(t.isCrash=!0,t.vx=r.vx,t.vy=r.vy),r.mirror&&(r.mirror.isCrash=!0,r.mirror.vx=r.vx,r.mirror.vy=r.vy))})}},{key:"crashHandle",value:function(r,t){var e=Math.atan2(t.y-r.y,t.x-r.x),i=Math.sqrt(r.vx*r.vx+r.vy*r.vy),o=Math.sqrt(t.vx*t.vx+t.vy*t.vy),n=Math.atan2(r.vy,r.vx),a=Math.atan2(t.vy,t.vx),s=i*Math.cos(n-e),h=i*Math.sin(n-e),l=o*Math.cos(a-e),c=o*Math.sin(a-e),u=l,d=h,y=s,v=c;r.vx=Math.cos(e)*u+Math.cos(e+Math.PI/2)*d,r.vy=Math.sin(e)*u+Math.sin(e+Math.PI/2)*d,t.vx=Math.cos(e)*y+Math.cos(e+Math.PI/2)*v,t.vy=Math.sin(e)*y+Math.sin(e+Math.PI/2)*v}},{key:"update",value:function(){var r=this;this.balls=this.balls.map(function(e){return e.x<-e.r?e.mirror:e.x>r.width+e.r?e.mirror:e.y<-e.r?e.mirror:e.y>r.height+e.r?e.mirror:(e.x+=e.vx,e.y+=e.vy,e.color=e.color.map(function(r,t){return e.cur_i++,e.cur_i===e.ColorList.length&&(e.cur_i=0,e.reverse=!e.reverse),e.ColorList[e.reverse?e.ColorList.length-e.cur_i-1:e.cur_i][t]}),2===e.type&&(e.son.color=[].concat(t(e.color))),e.mirror&&(e.mirror.x+=e.mirror.vx,e.mirror.y+=e.mirror.vy),e.isCrash&&(e.isCrash=!1),e)})}},{key:"getRGBA",value:function(r,t){return"rgba("+~~r[0]+", "+~~r[1]+", "+~~r[2]+", "+t+")"}},{key:"getRandomNumber",value:function(r,t){var e=i(r,2),o=e[0],n=e[1];return Math.random()*(n-o)+o}},{key:"renderArc",value:function(r,t,e,i){this.cxt.fillStyle=i,this.cxt.beginPath(),this.cxt.arc(r,t,e,0,2*Math.PI,!0),this.cxt.closePath(),this.cxt.fill()}},{key:"renderLine",value:function(r,t,e,i){this.cxt.beginPath(),this.cxt.moveTo(r,t),this.cxt.lineTo(e,i),this.cxt.closePath(),this.cxt.stroke()}},{key:"renderTri",value:function(r,t,e){this.cxt.beginPath(),this.cxt.moveTo(r.x,r.y),this.cxt.lineTo(t.x,t.y),this.cxt.lineTo(e.x,e.y),this.cxt.lineTo(r.x,r.y),this.cxt.closePath(),this.cxt.stroke()}}]),r}();r.default=n});
	//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNhbnZhcy5qcyJdLCJuYW1lcyI6WyJDYW52YXMiLCJfY2xhc3NDYWxsQ2hlY2siLCJ0aGlzIiwiY2FudmFzIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsImN4dCIsImdldENvbnRleHQiLCJ3aWR0aCIsIm9mZnNldFdpZHRoIiwiaGVpZ2h0Iiwib2Zmc2V0SGVpZ2h0IiwiYm91bmRzIiwiZ2V0Qm91bmRpbmdDbGllbnRSZWN0IiwiYmFsbF9jb3VudCIsImxpbmVfcmFuZ2UiLCJyX3JhbmdlIiwiY29sb3IiLCJwZXJpb2QiLCJvcGFjaXR5Iiwic3BlZWQiLCJiYWxscyIsImNsaWNrSGFuZGxlIiwiYmluZCIsImJpbmRFdmVudCIsInN0YXJ0IiwiYWRkRXZlbnRMaXN0ZW5lciIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJlIiwiaXNBbmltYXRlIiwiY2xpZW50WCIsImxlZnQiLCJjbGllbnRZIiwidG9wIiwiX3RoaXMiLCJpIiwiYWRkQmFsbCIsInN0ZXAiLCJyZW5kZXIiLCJ1cGRhdGUiLCJyZXF1ZXN0QW5pbWF0aW9uRnJhbWUiLCJmcmVxIiwiX3RoaXMyIiwiQ29sb3JEaXMiLCJDb2xvckxlbmd0aCIsIk1hdGgiLCJtYXgiLCJhYnMiLCJDb2xvckNoYW5nZSIsIm1hcCIsImMiLCJDb2xvckxpc3QiLCJwdXNoIiwiaW5kZXgiLCJiYWxsIiwieCIsImdldFJhbmRvbU51bWJlciIsInkiLCJ2eCIsInZ5IiwidHlwZSIsImN1cl9pIiwicmV2ZXJzZSIsImdldENvbG9yTGlzdCIsImlzT3ZlcmxhcCIsImNvbmNhdCIsIl90b0NvbnN1bWFibGVBcnJheSIsImVtcHR5IiwiciIsImV2ZXJ5IiwiYiIsInNxcnQiLCJwb3ciLCJuZXdCYWxsIiwia2V5IiwidW5kZWZpbmVkIiwib2JqIiwibXgiLCJwcm9ncmVzcyIsIl90aGlzMyIsImNsZWFyUmVjdCIsIkFycmF5IiwiZnJvbSIsInJlbmRlckJhbGwiLCJtaXJyb3IiLCJhZGRNaXJyb3JCYWxsIiwicmVuZGVyQXJjIiwiZ2V0UkdCQSIsImdsb2JhbENvbXBvc2l0ZU9wZXJhdGlvbiIsInNvbiIsImQiLCJfdGhpczQiLCJnIiwiYWRkQ29sb3JTdG9wIiwic3Ryb2tlU3R5bGUiLCJyZW5kZXJMaW5lIiwiaXNDcmFzaCIsImNyYXNoSGFuZGxlIiwicGFyZW50IiwiYjEiLCJiMiIsImRlZyIsImF0YW4yIiwic3BlZWQxIiwic3BlZWQyIiwiZGlyMSIsImRpcjIiLCJ2eDEiLCJjb3MiLCJ2eTEiLCJzaW4iLCJ2eDIiLCJ2eTIiLCJmeDEiLCJmeTEiLCJmeDIiLCJQSSIsImZ5MiIsIl90aGlzNSIsImRlY2ltYWwiLCJtaW4iLCJyYW5kb20iLCJmaWxsU3R5bGUiLCJiZWdpblBhdGgiLCJhcmMiLCJjbG9zZVBhdGgiLCJmaWxsIiwiY29vcmQxIiwiY29vcmQyIiwiY29vcmQzIiwic3Ryb2tlIl0sIm1hcHBpbmdzIjoiMm5DQUFxQkEsYUFDcEIsUUFBQUEsS0FBY0MsRUFBQUMsS0FBQUYsR0FDWEUsS0FBS0MsT0FBU0MsU0FBU0MsZUFBZSxVQUN0Q0gsS0FBS0ksSUFBTUgsT0FBT0ksV0FBVyxNQUM3QkwsS0FBS00sTUFBUU4sS0FBS0MsT0FBT0ssTUFBUU4sS0FBS0MsT0FBT00sWUFDN0NQLEtBQUtRLE9BQVNSLEtBQUtDLE9BQU9PLE9BQVNSLEtBQUtDLE9BQU9RLGFBQy9DVCxLQUFLVSxPQUFTVixLQUFLQyxPQUFPVSx3QkFFMUJYLEtBQUtZLFdBQWEsR0FDbEJaLEtBQUthLFdBQWEsSUFDbEJiLEtBQUtjLFNBQVcsRUFBRyxJQUNuQmQsS0FBS2UsUUFBVSxJQUFLLEdBQUksS0FBTSxJQUFLLEVBQUcsSUFDdENmLEtBQUtnQixRQUFVLEVBQUcsR0FDbEJoQixLQUFLaUIsU0FBVyxHQUFLLElBQ3JCakIsS0FBS2tCLFFBQVUsRUFBRyxHQUNsQmxCLEtBQUttQixTQUVMbkIsS0FBS29CLFlBQWNwQixLQUFLb0IsWUFBWUMsS0FBS3JCLE1BQ3pDQSxLQUFLc0IsWUFDTHRCLEtBQUt1QixzREFJTHZCLEtBQUtDLE9BQU91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SUFBQUEsT0FBRUMsRUFBYXRDLEVBQUEwRSxFQUFVdkMsR0FDekJFLEtBQUFBLElBQUFBLE9BQUVDLEVBQWF0QyxFQUFHd0UsRUFBQXRFLEdBQ2xCdkQsS0FBQUksSUFBQXVILFlBRUQzSCxLQUFBSSxJQXhCRDRILDRCQXRNZWxJIiwiZmlsZSI6ImNhbnZhcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBkZWZhdWx0IGNsYXNzIENhbnZhcyB7XHJcblx0Y29uc3RydWN0b3IoKSB7XHJcbiAgICB0aGlzLmNhbnZhcyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjYW52YXMnKVxyXG4gICAgdGhpcy5jeHQgPSBjYW52YXMuZ2V0Q29udGV4dCgnMmQnKVxyXG4gICAgdGhpcy53aWR0aCA9IHRoaXMuY2FudmFzLndpZHRoID0gdGhpcy5jYW52YXMub2Zmc2V0V2lkdGhcclxuICAgIHRoaXMuaGVpZ2h0ID0gdGhpcy5jYW52YXMuaGVpZ2h0ID0gdGhpcy5jYW52YXMub2Zmc2V0SGVpZ2h0XHJcbiAgICB0aGlzLmJvdW5kcyA9IHRoaXMuY2FudmFzLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpXHJcblxyXG4gICAgdGhpcy5iYWxsX2NvdW50ID0gMzAgICAgICAgLy8g5oC75Liq5pWwXHJcbiAgICB0aGlzLmxpbmVfcmFuZ2UgPSAxNTAgICAgIC8vIOi/nue6v+iMg+WbtFxyXG4gICAgdGhpcy5yX3JhbmdlID0gWzUsIDMwXSAgIC8vIOWNiuW+hOiMg+WbtFxyXG4gICAgdGhpcy5jb2xvciA9IFtbMTg4LCA1NiwgMjNdLCBbMTMwLCA1LCA1XV0gLy8g6aKc6ImyW1tyLCBnLCBiXSwgLi5dXHJcbiAgICB0aGlzLnBlcmlvZCA9IFszLCA4XSAgLy8g6aKc6Imy5ZG85ZC45ZGo5pyfXHJcbiAgICB0aGlzLm9wYWNpdHkgPSBbMC4yLCAwLjhdICAgLy8g6YCP5piO5bqm6IyD5Zu0XHJcbiAgICB0aGlzLnNwZWVkID0gWy0xLCAxXSAgICAvLyDpgJ/luqbojIPlm7RcclxuICAgIHRoaXMuYmFsbHMgPSBbXVxyXG5cclxuICAgIHRoaXMuY2xpY2tIYW5kbGUgPSB0aGlzLmNsaWNrSGFuZGxlLmJpbmQodGhpcylcclxuICAgIHRoaXMuYmluZEV2ZW50KClcclxuICAgIHRoaXMuc3RhcnQoKVxyXG5cdH1cclxuICAvLyAg57uR5a6a5LqL5Lu2XHJcbiAgYmluZEV2ZW50KCkge1xyXG4gICAgdGhpcy5jYW52YXMuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0aGlzLmNsaWNrSGFuZGxlLCBmYWxzZSlcclxuICB9XHJcbiAgLy8gIOenu+mZpOS6i+S7tlxyXG4gIHVuYmluZEV2ZW50KCkge1xyXG4gICAgdGhpcy5jYW52YXMucmVtb3ZlRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0aGlzLmNsaWNrSGFuZGxlLCBmYWxzZSlcclxuICB9XHJcbiAgLy8gIOeCueWHu+iOt+WPlum8oOagh+S9jee9rlxyXG4gIGNsaWNrSGFuZGxlKGUpIHtcclxuICAgIGlmICh0aGlzLmlzQW5pbWF0ZSkge1xyXG4gICAgICByZXR1cm4gdGhpcy5pc0FuaW1hdGUgPSBmYWxzZVxyXG4gICAgfVxyXG4gICAgZWxzZSB7XHJcbiAgICAgIHRoaXMuc3RhcnQoKVxyXG4gICAgfVxyXG4gICAgbGV0IG14ID0gZS5jbGllbnRYIC0gdGhpcy5ib3VuZHMubGVmdFxyXG4gICAgbGV0IG15ID0gZS5jbGllbnRZIC0gdGhpcy5ib3VuZHMudG9wXHJcbiAgICAvLyB0aGlzLmFkZFdvcmsoeyB4OiBteCwgeTogbXkgfSlcclxuICB9XHJcbiAgLy8gIOWKqOeUu+W8gOWni1xyXG4gIHN0YXJ0KCkge1xyXG4gICAgaWYgKHRoaXMuaXNBbmltYXRlKSB7XHJcbiAgICAgIHJldHVybiBmYWxzZVxyXG4gICAgfVxyXG5cclxuICAgIGZvcih2YXIgaSA9IDA7IGkgPCB0aGlzLmJhbGxfY291bnQ7IGkrKykge1xyXG4gICAgICB0aGlzLmFkZEJhbGwoKVxyXG4gICAgfVxyXG5cclxuICAgIHRoaXMuaXNBbmltYXRlID0gdHJ1ZVxyXG5cclxuICAgIGNvbnN0IHN0ZXAgPSAoKSA9PiB7XHJcbiAgICAgIGlmICghdGhpcy5pc0FuaW1hdGUpIHJldHVybiBmYWxzZVxyXG4gICAgICB0aGlzLnJlbmRlcigpXHJcbiAgICAgIHRoaXMudXBkYXRlKClcclxuICAgICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKHN0ZXApXHJcbiAgICB9XHJcbiAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoc3RlcClcclxuICB9XHJcbiAgLy8gIOW+l+WIsOminOiJsua4kOWPmOaVsOe7hFxyXG4gIGdldENvbG9yTGlzdChmcmVxKSB7XHJcbiAgICAvLyAg6aKc6Imy5beu5YC8W3IsIGcsIGJdXHJcbiAgICBsZXQgQ29sb3JEaXMgPSBbdGhpcy5jb2xvclsxXVswXSAtIHRoaXMuY29sb3JbMF1bMF0sIHRoaXMuY29sb3JbMV1bMV0gLSB0aGlzLmNvbG9yWzBdWzFdLCB0aGlzLmNvbG9yWzFdWzJdIC0gdGhpcy5jb2xvclswXVsyXV1cclxuXHJcbiAgICAvLyAg6aKc6Imy5beu5pyA5aSn55qE57ud5a+55YC8XHJcbiAgICBsZXQgQ29sb3JMZW5ndGggPSBNYXRoLm1heChNYXRoLmFicyhDb2xvckRpc1swXSksIE1hdGguYWJzKENvbG9yRGlzWzFdKSwgTWF0aC5hYnMoQ29sb3JEaXNbMl0pKSAqIGZyZXFcclxuXHJcbiAgICAvLyAg6aKc6Imy5Y+Y5YyW57O75pWwXHJcbiAgICBsZXQgQ29sb3JDaGFuZ2UgPSBDb2xvckRpcy5tYXAoKGMpID0+IGMgLyBDb2xvckxlbmd0aClcclxuXHJcbiAgICBsZXQgQ29sb3JMaXN0ID0gW11cclxuXHJcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IENvbG9yTGVuZ3RoOyBpKyspIHtcclxuICAgICAgQ29sb3JMaXN0LnB1c2goQ29sb3JDaGFuZ2UubWFwKChjLCBpbmRleCkgPT4gKHRoaXMuY29sb3JbMF1baW5kZXhdICsgYyAqIGkpKSlcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gQ29sb3JMaXN0XHJcbiAgfVxyXG4gIC8vICDlop7liqDkuIDkuKrnkINcclxuICBhZGRCYWxsKCkge1xyXG4gICAgbGV0IGJhbGwgPSB7XHJcbiAgICAgIHg6IHRoaXMuZ2V0UmFuZG9tTnVtYmVyKFswLCB0aGlzLndpZHRoXSksXHJcbiAgICAgIHk6IHRoaXMuZ2V0UmFuZG9tTnVtYmVyKFswLCB0aGlzLmhlaWdodF0pLFxyXG4gICAgICB2eDogdGhpcy5nZXRSYW5kb21OdW1iZXIodGhpcy5zcGVlZCksXHJcbiAgICAgIHZ5OiB0aGlzLmdldFJhbmRvbU51bWJlcih0aGlzLnNwZWVkKSxcclxuICAgICAgb3BhY2l0eTogdGhpcy5nZXRSYW5kb21OdW1iZXIodGhpcy5vcGFjaXR5KSxcclxuICAgICAgZnJlcTogdGhpcy5nZXRSYW5kb21OdW1iZXIodGhpcy5wZXJpb2QpLFxyXG4gICAgICB0eXBlOiB+fnRoaXMuZ2V0UmFuZG9tTnVtYmVyKFswLCAzXSksXHJcbiAgICAgIGN1cl9pOiAwLFxyXG4gICAgICByZXZlcnNlOiBmYWxzZVxyXG4gICAgfVxyXG4gICAgYmFsbC5yID0gKDEgLSBiYWxsLm9wYWNpdHkpICogKHRoaXMucl9yYW5nZVsxXSAtIHRoaXMucl9yYW5nZVswXSkgKyB0aGlzLnJfcmFuZ2VbMF1cclxuICAgIGJhbGwuQ29sb3JMaXN0ID0gdGhpcy5nZXRDb2xvckxpc3QoYmFsbC5mcmVxKVxyXG5cclxuICAgIGlmICh0aGlzLmlzT3ZlcmxhcChiYWxsKSkge1xyXG4gICAgICByZXR1cm4gdGhpcy5hZGRCYWxsKClcclxuICAgIH1cclxuXHJcbiAgICBsZXQgY29sb3IgPSB0aGlzLmNvbG9yWzBdXHJcbiAgICBiYWxsLmNvbG9yID0gWy4uLmNvbG9yXVxyXG5cclxuICAgIC8vICDpmo/mnLrkuIDnp43mqKHlvI9bMDrlrp7lv4PnkIMsIDE65ZyG546vLCAyOuWPjOeOr11cclxuICAgIHN3aXRjaChiYWxsLnR5cGUpIHtcclxuICAgICAgY2FzZSAwOiBicmVhaztcclxuICAgICAgY2FzZSAxOiBiYWxsLmVtcHR5ID0ge1xyXG4gICAgICAgICAgcjogdGhpcy5nZXRSYW5kb21OdW1iZXIoW2JhbGwuciAvIDIsIGJhbGwuciAvIDQgKiAzXSlcclxuICAgICAgICB9XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIGNhc2UgMjogYmFsbC5lbXB0eSA9IHtcclxuICAgICAgICAgIHI6IHRoaXMuZ2V0UmFuZG9tTnVtYmVyKFtiYWxsLnIgLyAyLCBiYWxsLnIgLyA0ICogM10pXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGJhbGwuc29uID0ge1xyXG4gICAgICAgICAgcjogdGhpcy5nZXRSYW5kb21OdW1iZXIoW2JhbGwuZW1wdHkuciAvIDIsIGJhbGwuZW1wdHkuciAvIDQgKiAzXSksXHJcbiAgICAgICAgICBjb2xvcjogWy4uLmJhbGwuY29sb3JdXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgfVxyXG5cclxuICAgIHRoaXMuYmFsbHMucHVzaChiYWxsKVxyXG4gIH1cclxuICAvLyAg5Yik5pat6K+l5L2N572u5piv5ZCm6YeN5Y+gXHJcbiAgaXNPdmVybGFwKGJhbGwpIHtcclxuICAgIHJldHVybiAhdGhpcy5iYWxscy5ldmVyeSgoYikgPT4ge1xyXG4gICAgICBsZXQgZCA9IE1hdGguc3FydChNYXRoLnBvdyhiYWxsLnggLSBiLngsIDIpICsgTWF0aC5wb3coYmFsbC55IC0gYi55LCAyKSlcclxuICAgICAgaWYgKGQgPD0gKGJhbGwuciArIGIucikpIHtcclxuICAgICAgICByZXR1cm4gZmFsc2VcclxuICAgICAgfVxyXG4gICAgICByZXR1cm4gdHJ1ZVxyXG4gICAgfSlcclxuICB9XHJcbiAgLy8gIOa3u+WKoOS4gOS4qumVnOWDj0JhbGxcclxuICBhZGRNaXJyb3JCYWxsKGJhbGwsIG9iaikge1xyXG4gICAgdmFyIG5ld0JhbGwgPSB7fVxyXG4gICAgZm9yICh2YXIga2V5IGluIGJhbGwpIHtcclxuICAgICAgaWYgKG9ialtrZXldICE9PSB1bmRlZmluZWQpIHtcclxuICAgICAgICBuZXdCYWxsW2tleV0gPSBvYmpba2V5XVxyXG4gICAgICB9XHJcbiAgICAgIGVsc2Uge1xyXG4gICAgICAgIG5ld0JhbGxba2V5XSA9IGJhbGxba2V5XVxyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIG5ld0JhbGxcclxuICB9XHJcbiAgLy8gIOa4suafk1xyXG4gIHJlbmRlcihwcm9ncmVzcykge1xyXG4gICAgdGhpcy5jeHQuY2xlYXJSZWN0KDAsIDAsIHRoaXMud2lkdGgsIHRoaXMuaGVpZ2h0KVxyXG5cclxuICAgIEFycmF5LmZyb20odGhpcy5iYWxscywgKGJhbGwpID0+IHtcclxuICAgICAgdGhpcy5yZW5kZXJCYWxsKGJhbGwpXHJcblxyXG4gICAgICAvLyAg5bem5Y+z5LiK5LiL6ZWc5YOP55CDXHJcbiAgICAgIGlmIChiYWxsLm1pcnJvcikge1xyXG4gICAgICAgIHJldHVybiB0aGlzLnJlbmRlckJhbGwoYmFsbC5taXJyb3IsIGJhbGwpXHJcbiAgICAgIH1cclxuICAgICAgZWxzZSBpZiAoIWJhbGwubWlycm9yICYmIGJhbGwueCA8IGJhbGwucikge1xyXG4gICAgICAgIGJhbGwubWlycm9yID0gdGhpcy5hZGRNaXJyb3JCYWxsKGJhbGwsIHsgeDogYmFsbC54ICsgdGhpcy53aWR0aCwgbWlycm9yOiBudWxsIH0pXHJcbiAgICAgICAgdGhpcy5yZW5kZXJCYWxsKGJhbGwubWlycm9yLCBiYWxsKVxyXG4gICAgICB9XHJcbiAgICAgIGVsc2UgaWYgKCFiYWxsLm1pcnJvciAmJiBiYWxsLnggPiB0aGlzLndpZHRoIC0gYmFsbC5yKSB7XHJcbiAgICAgICAgYmFsbC5taXJyb3IgPSB0aGlzLmFkZE1pcnJvckJhbGwoYmFsbCwgeyB4OiBiYWxsLnggLSB0aGlzLndpZHRoLCBtaXJyb3I6IG51bGwgfSlcclxuICAgICAgICB0aGlzLnJlbmRlckJhbGwoYmFsbC5taXJyb3IsIGJhbGwpXHJcbiAgICAgIH1cclxuICAgICAgZWxzZSBpZiAoIWJhbGwubWlycm9yICYmIGJhbGwueSA8IGJhbGwucikge1xyXG4gICAgICAgIGJhbGwubWlycm9yID0gdGhpcy5hZGRNaXJyb3JCYWxsKGJhbGwsIHsgeTogYmFsbC55ICsgdGhpcy5oZWlnaHQsIG1pcnJvcjogbnVsbCB9KVxyXG4gICAgICAgIHRoaXMucmVuZGVyQmFsbChiYWxsLm1pcnJvciwgYmFsbClcclxuICAgICAgfVxyXG4gICAgICBlbHNlIGlmICghYmFsbC5taXJyb3IgJiYgYmFsbC55ID4gdGhpcy5oZWlnaHQgLSBiYWxsLnIpIHtcclxuICAgICAgICBiYWxsLm1pcnJvciA9IHRoaXMuYWRkTWlycm9yQmFsbChiYWxsLCB7IHk6IGJhbGwueSAtIHRoaXMuaGVpZ2h0LCBtaXJyb3I6IG51bGwgfSlcclxuICAgICAgICB0aGlzLnJlbmRlckJhbGwoYmFsbC5taXJyb3IsIGJhbGwpXHJcbiAgICAgIH1cclxuICAgIH0pXHJcbiAgfVxyXG4gIC8vICDmuLLmn5PljZXkuKrnkINcclxuICByZW5kZXJCYWxsIChiYWxsLCBwYXJlbnQpIHtcclxuICAgIGxldCB4ID0gYmFsbC54LFxyXG4gICAgICAgIHkgPSBiYWxsLnlcclxuXHJcbiAgICAvLyAg5aSn55CD5L2TXHJcbiAgICB0aGlzLnJlbmRlckFyYyh4LCB5LCBiYWxsLnIsIHRoaXMuZ2V0UkdCQShiYWxsLmNvbG9yLCBiYWxsLm9wYWNpdHkpKVxyXG5cclxuICAgIC8vICB0eXBlOjF8MiDnqbrlv4Pnmb3oibLpg6jliIZcclxuICAgIHRoaXMuY3h0Lmdsb2JhbENvbXBvc2l0ZU9wZXJhdGlvbiA9ICdkZXN0aW5hdGlvbi1vdXQnXHJcbiAgICBiYWxsLnR5cGUgPiAwICYmIHRoaXMucmVuZGVyQXJjKHgsIHksIGJhbGwuZW1wdHkuciwgJyNmZmYnKVxyXG5cclxuICAgIC8vICB0eXBlOjIg55CD5b+D6YOo5YiGXHJcbiAgICB0aGlzLmN4dC5nbG9iYWxDb21wb3NpdGVPcGVyYXRpb24gPSAnc291cmNlLW92ZXInXHJcbiAgICBiYWxsLnR5cGUgPT09IDIgJiYgdGhpcy5yZW5kZXJBcmMoeCwgeSwgYmFsbC5zb24uciwgdGhpcy5nZXRSR0JBKGJhbGwuc29uLmNvbG9yLCBiYWxsLm9wYWNpdHkpKVxyXG5cclxuICAgIC8vICDov57nur9cclxuICAgIEFycmF5LmZyb20odGhpcy5iYWxscywgKGIpID0+IHtcclxuICAgICAgaWYgKGJhbGwgPT09IGIpIHtcclxuICAgICAgICByZXR1cm4gZmFsc2VcclxuICAgICAgfVxyXG5cclxuICAgICAgbGV0IGQgPSBNYXRoLnNxcnQoTWF0aC5wb3coeCAtIGIueCwgMikgKyBNYXRoLnBvdyh5IC0gYi55LCAyKSlcclxuICAgICAgaWYgKGQgPCB0aGlzLmxpbmVfcmFuZ2UgJiYgZCA+IChiYWxsLnIgKyBiLnIpKSB7XHJcbiAgICAgICAgdmFyIGcgPSB0aGlzLmN4dC5jcmVhdGVMaW5lYXJHcmFkaWVudCh4LCB5LCBiLngsIGIueSlcclxuICAgICAgICBpZiAoYmFsbC50eXBlID09PSAxKSB7XHJcbiAgICAgICAgICBnLmFkZENvbG9yU3RvcCgwLCB0aGlzLmdldFJHQkEoYmFsbC5jb2xvciwgMSAtIGQgLyB0aGlzLmxpbmVfcmFuZ2UpKVxyXG4gICAgICAgICAgZy5hZGRDb2xvclN0b3AoYmFsbC5lbXB0eS5yIC8gZCwgdGhpcy5nZXRSR0JBKGJhbGwuY29sb3IsIDEgLSBkIC8gdGhpcy5saW5lX3JhbmdlKSlcclxuICAgICAgICAgIGcuYWRkQ29sb3JTdG9wKGJhbGwuZW1wdHkuciAvIGQsICd0cmFuc3BhcmVudCcpXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2UgaWYgKGJhbGwudHlwZSA9PT0gMikge1xyXG4gICAgICAgICAgZy5hZGRDb2xvclN0b3AoMCwgJ3RyYW5zcGFyZW50JylcclxuICAgICAgICAgIGcuYWRkQ29sb3JTdG9wKGJhbGwuc29uLnIgLyBkLCAndHJhbnNwYXJlbnQnKVxyXG4gICAgICAgICAgZy5hZGRDb2xvclN0b3AoYmFsbC5zb24uciAvIGQsIHRoaXMuZ2V0UkdCQShiYWxsLmNvbG9yLCAxIC0gZCAvIHRoaXMubGluZV9yYW5nZSkpXHJcbiAgICAgICAgICBnLmFkZENvbG9yU3RvcChiYWxsLmVtcHR5LnIgLyBkLCB0aGlzLmdldFJHQkEoYmFsbC5jb2xvciwgMSAtIGQgLyB0aGlzLmxpbmVfcmFuZ2UpKVxyXG4gICAgICAgICAgZy5hZGRDb2xvclN0b3AoYmFsbC5lbXB0eS5yIC8gZCwgJ3RyYW5zcGFyZW50JylcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICBnLmFkZENvbG9yU3RvcCgwLCAndHJhbnNwYXJlbnQnKVxyXG4gICAgICAgIH1cclxuICAgICAgICBnLmFkZENvbG9yU3RvcChiYWxsLnIgLyBkLCAndHJhbnNwYXJlbnQnKVxyXG4gICAgICAgIGcuYWRkQ29sb3JTdG9wKGJhbGwuciAvIGQsIHRoaXMuZ2V0UkdCQShiYWxsLmNvbG9yLCAxIC0gZCAvIHRoaXMubGluZV9yYW5nZSkpXHJcbiAgICAgICAgZy5hZGRDb2xvclN0b3AoMSAtIGIuciAvIGQsIHRoaXMuZ2V0UkdCQShiLmNvbG9yLCAxIC0gZCAvIHRoaXMubGluZV9yYW5nZSkpXHJcbiAgICAgICAgZy5hZGRDb2xvclN0b3AoMSAtIGIuciAvIGQsICd0cmFuc3BhcmVudCcpXHJcbiAgICAgICAgZy5hZGRDb2xvclN0b3AoMSwgJ3RyYW5zcGFyZW50JylcclxuICAgICAgICB0aGlzLmN4dC5zdHJva2VTdHlsZSA9IGdcclxuICAgICAgICB0aGlzLnJlbmRlckxpbmUoeCwgeSwgYi54LCBiLnkpXHJcbiAgICAgIH1cclxuICAgICAgZWxzZSBpZiAoZCA8IChiYWxsLnIgKyBiLnIpICYmICFiYWxsLmlzQ3Jhc2gpIHtcclxuICAgICAgICBiYWxsLmlzQ3Jhc2ggPSB0cnVlXHJcbiAgICAgICAgYi5pc0NyYXNoID0gdHJ1ZVxyXG4gICAgICAgIHRoaXMuY3Jhc2hIYW5kbGUoYmFsbCwgYilcclxuXHJcbiAgICAgICAgaWYgKHBhcmVudCkge1xyXG4gICAgICAgICAgcGFyZW50LmlzQ3Jhc2ggPSB0cnVlXHJcbiAgICAgICAgICBwYXJlbnQudnggPSBiYWxsLnZ4XHJcbiAgICAgICAgICBwYXJlbnQudnkgPSBiYWxsLnZ5XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAoYmFsbC5taXJyb3IpIHtcclxuICAgICAgICAgIGJhbGwubWlycm9yLmlzQ3Jhc2ggPSB0cnVlXHJcbiAgICAgICAgICBiYWxsLm1pcnJvci52eCA9IGJhbGwudnhcclxuICAgICAgICAgIGJhbGwubWlycm9yLnZ5ID0gYmFsbC52eVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfSlcclxuICB9XHJcbiAgY3Jhc2hIYW5kbGUoYjEsIGIyKSB7XHJcbiAgICBsZXQgZGVnID0gTWF0aC5hdGFuMihiMi55IC0gYjEueSwgYjIueCAtIGIxLngpXHJcbiAgICBsZXQgc3BlZWQxID0gTWF0aC5zcXJ0KGIxLnZ4ICogYjEudnggKyBiMS52eSAqIGIxLnZ5KVxyXG4gICAgbGV0IHNwZWVkMiA9IE1hdGguc3FydChiMi52eCAqIGIyLnZ4ICsgYjIudnkgKiBiMi52eSlcclxuICAgIGxldCBkaXIxID0gTWF0aC5hdGFuMihiMS52eSwgYjEudngpXHJcbiAgICBsZXQgZGlyMiA9IE1hdGguYXRhbjIoYjIudnksIGIyLnZ4KVxyXG5cclxuICAgIGxldCB2eDEgPSBzcGVlZDEgKiBNYXRoLmNvcyhkaXIxIC0gZGVnKVxyXG4gICAgbGV0IHZ5MSA9IHNwZWVkMSAqIE1hdGguc2luKGRpcjEgLSBkZWcpXHJcbiAgICBsZXQgdngyID0gc3BlZWQyICogTWF0aC5jb3MoZGlyMiAtIGRlZylcclxuICAgIGxldCB2eTIgPSBzcGVlZDIgKiBNYXRoLnNpbihkaXIyIC0gZGVnKVxyXG5cclxuICAgIGxldCBmeDEgPSB2eDJcclxuICAgIGxldCBmeTEgPSB2eTFcclxuICAgIGxldCBmeDIgPSB2eDFcclxuICAgIGxldCBmeTIgPSB2eTJcclxuXHJcbiAgICBiMS52eCA9IE1hdGguY29zKGRlZykgKiBmeDEgKyBNYXRoLmNvcyhkZWcgKyBNYXRoLlBJIC8gMikgKiBmeTFcclxuICAgIGIxLnZ5ID0gTWF0aC5zaW4oZGVnKSAqIGZ4MSArIE1hdGguc2luKGRlZyArIE1hdGguUEkgLyAyKSAqIGZ5MVxyXG4gICAgYjIudnggPSBNYXRoLmNvcyhkZWcpICogZngyICsgTWF0aC5jb3MoZGVnICsgTWF0aC5QSSAvIDIpICogZnkyXHJcbiAgICBiMi52eSA9IE1hdGguc2luKGRlZykgKiBmeDIgKyBNYXRoLnNpbihkZWcgKyBNYXRoLlBJIC8gMikgKiBmeTJcclxuICB9XHJcbiAgLy8gIOabtOaWsFxyXG4gIHVwZGF0ZSgpIHtcclxuICAgIHRoaXMuYmFsbHMgPSB0aGlzLmJhbGxzLm1hcCgoYmFsbCkgPT4ge1xyXG4gICAgICBpZiAoYmFsbC54IDwgLWJhbGwucikge1xyXG4gICAgICAgIHJldHVybiBiYWxsLm1pcnJvclxyXG4gICAgICB9XHJcbiAgICAgIGlmIChiYWxsLnggPiB0aGlzLndpZHRoICsgYmFsbC5yKSB7XHJcbiAgICAgICAgcmV0dXJuIGJhbGwubWlycm9yXHJcbiAgICAgIH1cclxuICAgICAgaWYgKGJhbGwueSA8IC1iYWxsLnIpIHtcclxuICAgICAgICByZXR1cm4gYmFsbC5taXJyb3JcclxuICAgICAgfVxyXG4gICAgICBpZiAoYmFsbC55ID4gdGhpcy5oZWlnaHQgKyBiYWxsLnIpIHtcclxuICAgICAgICByZXR1cm4gYmFsbC5taXJyb3JcclxuICAgICAgfVxyXG5cclxuICAgICAgYmFsbC54ICs9IGJhbGwudnhcclxuICAgICAgYmFsbC55ICs9IGJhbGwudnlcclxuICAgICAgYmFsbC5jb2xvciA9IGJhbGwuY29sb3IubWFwKChuLCBpKSA9PiB7XHJcbiAgICAgICAgYmFsbC5jdXJfaSsrXHJcbiAgICAgICAgaWYgKGJhbGwuY3VyX2kgPT09IGJhbGwuQ29sb3JMaXN0Lmxlbmd0aCkge1xyXG4gICAgICAgICAgYmFsbC5jdXJfaSA9IDBcclxuICAgICAgICAgIGJhbGwucmV2ZXJzZSA9ICFiYWxsLnJldmVyc2VcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIGJhbGwuQ29sb3JMaXN0W2JhbGwucmV2ZXJzZSA/IGJhbGwuQ29sb3JMaXN0Lmxlbmd0aCAtIGJhbGwuY3VyX2kgLSAxIDogYmFsbC5jdXJfaV1baV1cclxuICAgICAgfSlcclxuICAgICAgaWYgKGJhbGwudHlwZSA9PT0gMikge1xyXG4gICAgICAgIGJhbGwuc29uLmNvbG9yID0gWy4uLmJhbGwuY29sb3JdXHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGlmIChiYWxsLm1pcnJvcikge1xyXG4gICAgICAgIGJhbGwubWlycm9yLnggKz0gYmFsbC5taXJyb3IudnhcclxuICAgICAgICBiYWxsLm1pcnJvci55ICs9IGJhbGwubWlycm9yLnZ5XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGlmIChiYWxsLmlzQ3Jhc2gpIHtcclxuICAgICAgICBiYWxsLmlzQ3Jhc2ggPSBmYWxzZVxyXG4gICAgICB9XHJcblxyXG4gICAgICByZXR1cm4gYmFsbFxyXG4gICAgfSlcclxuICB9XHJcbiAgZ2V0UkdCQShjb2xvciwgb3BhY2l0eSkge1xyXG4gICAgcmV0dXJuIGByZ2JhKCR7fn5jb2xvclswXX0sICR7fn5jb2xvclsxXX0sICR7fn5jb2xvclsyXX0sICR7b3BhY2l0eX0pYFxyXG4gIH1cclxuICAvLyAg5qC55o2u6IyD5Zu05b6X5Yiw5LiA5Liq6ZqP5py65pWwW1vojIPlm7RdLCDlsI/mlbDkvY1dXHJcbiAgZ2V0UmFuZG9tTnVtYmVyKFttaW4sIG1heF0sIGRlY2ltYWwpIHtcclxuICAgIHJldHVybiAoTWF0aC5yYW5kb20oKSAqIChtYXggLSBtaW4pKSArIG1pblxyXG4gIH1cclxuICAvLyAg55S75LiA5Liq5ZyGXHJcbiAgcmVuZGVyQXJjKHgsIHksIHIsIGNvbG9yKSB7XHJcbiAgICB0aGlzLmN4dC5maWxsU3R5bGUgPSBjb2xvclxyXG5cclxuICAgIHRoaXMuY3h0LmJlZ2luUGF0aCgpXHJcbiAgICB0aGlzLmN4dC5hcmMoeCwgeSwgciwgMCwgTWF0aC5QSSAqIDIsIHRydWUpXHJcbiAgICB0aGlzLmN4dC5jbG9zZVBhdGgoKVxyXG5cclxuICAgIHRoaXMuY3h0LmZpbGwoKVxyXG4gIH1cclxuICAvLyAg55S75LiA5p2h57q/XHJcbiAgcmVuZGVyTGluZSh4MSwgeTEsIHgyLCB5Mikge1xyXG4gICAgdGhpcy5jeHQuYmVnaW5QYXRoKClcclxuICAgIHRoaXMuY3h0Lm1vdmVUbyh4MSwgeTEpXHJcbiAgICB0aGlzLmN4dC5saW5lVG8oeDIsIHkyKVxyXG4gICAgdGhpcy5jeHQuY2xvc2VQYXRoKClcclxuXHJcbiAgICB0aGlzLmN4dC5zdHJva2UoKVxyXG4gIH1cclxuICAvLyAg55S75Liq5LiJ6KeS5b2iXHJcbiAgcmVuZGVyVHJpKGNvb3JkMSwgY29vcmQyLCBjb29yZDMpIHtcclxuICAgIHRoaXMuY3h0LmJlZ2luUGF0aCgpXHJcbiAgICB0aGlzLmN4dC5tb3ZlVG8oY29vcmQxLngsIGNvb3JkMS55KVxyXG4gICAgdGhpcy5jeHQubGluZVRvKGNvb3JkMi54LCBjb29yZDIueSlcclxuICAgIHRoaXMuY3h0LmxpbmVUbyhjb29yZDMueCwgY29vcmQzLnkpXHJcbiAgICB0aGlzLmN4dC5saW5lVG8oY29vcmQxLngsIGNvb3JkMS55KVxyXG4gICAgdGhpcy5jeHQuY2xvc2VQYXRoKClcclxuXHJcbiAgICB0aGlzLmN4dC5zdHJva2UoKVxyXG4gIH1cclxufSJdfQ==


/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!function(e,n){if(true)!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(1)], __WEBPACK_AMD_DEFINE_FACTORY__ = (n), __WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? (__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));else if("undefined"!=typeof exports)n(require("./canvas.js"));else{var t={exports:{}};n(e.canvas),e.index=t.exports}}(this,function(e){"use strict";new(function(e){return e&&e.__esModule?e:{default:e}}(e).default)});
	//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LmpzIl0sIm5hbWVzIjpbImRlZmF1bHQiXSwibWFwcGluZ3MiOiJxT0FFQSwwREFBQUEiLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgQ2FudmFzIGZyb20gJy4vY2FudmFzLmpzJ1xyXG5cclxubmV3IENhbnZhcygpXHJcbiJdfQ==


/***/ })
/******/ ]);