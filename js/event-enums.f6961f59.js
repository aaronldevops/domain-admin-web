import{t as n}from"./index.03d61c20.js";function E(t){var e=/^[a-zA-Z0-9\._-]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/;return e.test(t)}function o(t){try{return JSON.parse(t),!0}catch{return!1}}function l(t){return Object.prototype.toString.call(t)=="[object Object]"}function c(t){return typeof t!="string"&&(t=""+t),/^\d+$/.test(t)}const r={SSL_CERT_EXPIRE:0,DOMAIN_EXPIRE:1,MONITOR_EXCEPTION:2},s=[{value:r.SSL_CERT_EXPIRE,label:n("SSL\u8BC1\u4E66\u5230\u671F")},{value:r.DOMAIN_EXPIRE,label:n("\u57DF\u540D\u5230\u671F")},{value:r.MONITOR_EXCEPTION,label:n("\u76D1\u63A7\u5F02\u5E38")}];function u(t){const e=s.find(a=>a.value==t);if(e)return e.label}export{r as E,o as a,E as b,s as c,l as d,u as e,c as i};
