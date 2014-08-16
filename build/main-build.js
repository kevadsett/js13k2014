/**
 * @license almond 0.2.9 Copyright (c) 2011-2014, The Dojo Foundation All Rights Reserved.
 * Available via the MIT or new BSD license.
 * see: http://github.com/jrburke/almond for details
 */

(function(){var e,t,n;(function(r){function v(e,t){return h.call(e,t)}function m(e,t){var n,r,i,s,o,u,a,f,c,h,p,v=t&&t.split("/"),m=l.map,g=m&&m["*"]||{};if(e&&e.charAt(0)===".")if(t){v=v.slice(0,v.length-1),e=e.split("/"),o=e.length-1,l.nodeIdCompat&&d.test(e[o])&&(e[o]=e[o].replace(d,"")),e=v.concat(e);for(c=0;c<e.length;c+=1){p=e[c];if(p===".")e.splice(c,1),c-=1;else if(p===".."){if(c===1&&(e[2]===".."||e[0]===".."))break;c>0&&(e.splice(c-1,2),c-=2)}}e=e.join("/")}else e.indexOf("./")===0&&(e=e.substring(2));if((v||g)&&m){n=e.split("/");for(c=n.length;c>0;c-=1){r=n.slice(0,c).join("/");if(v)for(h=v.length;h>0;h-=1){i=m[v.slice(0,h).join("/")];if(i){i=i[r];if(i){s=i,u=c;break}}}if(s)break;!a&&g&&g[r]&&(a=g[r],f=c)}!s&&a&&(s=a,u=f),s&&(n.splice(0,u,s),e=n.join("/"))}return e}function g(e,t){return function(){return s.apply(r,p.call(arguments,0).concat([e,t]))}}function y(e){return function(t){return m(t,e)}}function b(e){return function(t){a[e]=t}}function w(e){if(v(f,e)){var t=f[e];delete f[e],c[e]=!0,i.apply(r,t)}if(!v(a,e)&&!v(c,e))throw new Error("No "+e);return a[e]}function E(e){var t,n=e?e.indexOf("!"):-1;return n>-1&&(t=e.substring(0,n),e=e.substring(n+1,e.length)),[t,e]}function S(e){return function(){return l&&l.config&&l.config[e]||{}}}var i,s,o,u,a={},f={},l={},c={},h=Object.prototype.hasOwnProperty,p=[].slice,d=/\.js$/;o=function(e,t){var n,r=E(e),i=r[0];return e=r[1],i&&(i=m(i,t),n=w(i)),i?n&&n.normalize?e=n.normalize(e,y(t)):e=m(e,t):(e=m(e,t),r=E(e),i=r[0],e=r[1],i&&(n=w(i))),{f:i?i+"!"+e:e,n:e,pr:i,p:n}},u={require:function(e){return g(e)},exports:function(e){var t=a[e];return typeof t!="undefined"?t:a[e]={}},module:function(e){return{id:e,uri:"",exports:a[e],config:S(e)}}},i=function(e,t,n,i){var s,l,h,p,d,m=[],y=typeof n,E;i=i||e;if(y==="undefined"||y==="function"){t=!t.length&&n.length?["require","exports","module"]:t;for(d=0;d<t.length;d+=1){p=o(t[d],i),l=p.f;if(l==="require")m[d]=u.require(e);else if(l==="exports")m[d]=u.exports(e),E=!0;else if(l==="module")s=m[d]=u.module(e);else if(v(a,l)||v(f,l)||v(c,l))m[d]=w(l);else{if(!p.p)throw new Error(e+" missing "+l);p.p.load(p.n,g(i,!0),b(l),{}),m[d]=a[l]}}h=n?n.apply(a[e],m):undefined;if(e)if(s&&s.exports!==r&&s.exports!==a[e])a[e]=s.exports;else if(h!==r||!E)a[e]=h}else e&&(a[e]=n)},e=t=s=function(e,t,n,a,f){if(typeof e=="string")return u[e]?u[e](t):w(o(e,t).f);if(!e.splice){l=e,l.deps&&s(l.deps,l.callback);if(!t)return;t.splice?(e=t,t=n,n=null):e=r}return t=t||function(){},typeof n=="function"&&(n=a,a=f),a?i(r,e,t,n):setTimeout(function(){i(r,e,t,n)},4),s},s.config=function(e){return s(e)},e._defined=a,n=function(e,t,n){t.splice||(n=t,t=[]),!v(a,e)&&!v(f,e)&&(f[e]=[e,t,n])},n.amd={jQuery:!0}})(),n("almond",function(){}),n("vector",["require"],function(e){function n(e,t){return Math.sqrt(Math.pow(e,2)+Math.pow(t,2))}var t=function(e,t){this.x=e,this.y=t};return t.prototype={add:function(e){this.x+=e.x,this.y+=e.y},subtract:function(e){this.x-=e.x,this.y-=e.y},mag:function(){return n(this.x,this.y)},scale:function(e){this.x*=e,this.y*=e},normalise:function(){var e=Math.max(Math.abs(this.x),Math.abs(this.y));this.x/=e,this.y/=e},getDist:function(e){var t=Math.abs(this.x-e.x),r=Math.abs(this.y-e.y);return n(t,r)},getAngle:function(){return Math.atan(this.y/this.x)},getScaled:function(e){return new t(this.x*e,this.y*e)}},t.fromPolar=function(e,n){return new t(e*Math.cos(n),e*Math.sin(n))},window.Vector=t,t}),n("player",["require","vector"],function(e){function l(e,i){var s=Math.atan2(i-n.y,e-n.x);r=t.fromPolar(u,s)}var t=e("vector"),n=new t(480,270),r=new t(0,0),i=new t(0,0),s=new t(0,2),o=Math.PI*2,u=3,a=!1,f=function(e){gameEvents.on("update",this.update,this),gameEvents.on("render",this.render,this),gameEvents.on("press",l)};return f.prototype={update:function(e){r.add(i),n.add(r),o=r.getAngle(),n.y<540?r.add(s.getScaled(e)):(n.y=540,r.scale(.95))},render:function(e){e.save(),e.translate(n.x,n.y),e.rotate(o),e.fillStyle="#fa3da8",e.fillRect(-25,-12.5,50,25),e.restore()}},f}),n("minivents.min",["require"],function(e){function t(e){var t={};e=e||this,e.on=function(e,n,r){t[e]||(t[e]=[]),t[e].push({f:n,c:r})},e.off=function(e,n){e||(t={});for(var r=t[e]||[],i=r.length=n?r.length:0;i-->0;)n==r[i].f&&r.splice(i,1)},e.emit=function(){var e,n=Array.apply([],arguments),r=t[n.shift()]||[],i=r.length;for(e=0;i>e;e++)r[e].f.apply(r[e].c,n)}}var n,r,i=r!=n;return(i?r:window)[i?"exports":"Events"]=t,t}),n("game",["require","player","minivents.min"],function(e){function f(){t(f),l(),p()}function l(){u=Date.now();var e=u-a;a=u,gameEvents.emit("update",e/1e3)}function p(){r.clearRect(0,0,n.width,n.height),gameEvents.emit("render",r)}function d(e){var t=document.getElementById("content");c=Math.round((e.pageX-t.offsetLeft-t.clientLeft)*scale),h=Math.round((e.pageY-t.offsetTop-t.clientTop)*scale),gameEvents.emit("press",c,h)}var t=function(){return window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||function(e){window.setTimeout(e,1e3/60)}}(),n=document.getElementById("gameCanvas"),r=n.getContext("2d"),i=e("player"),s=e("minivents.min");window.gameEvents=new s;var o=new i,u=Date.now(),a=Date.now(),c=0,h=0;n.addEventListener("mousedown",d),n.addEventListener("touchstart",d),f()}),n("main",["require","game"],function(e){function t(){var e=document.getElementById("content"),t=e.clientWidth*.5625;e.setAttribute("style","height:"+t+"px;"),e.style.height=t+"px",window.scale=960/e.clientWidth,window.TWO_PI=Math.PI*2}window.onresize=t,t(),e("game")}),t(["main"])})();