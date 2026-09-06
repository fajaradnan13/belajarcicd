(function(){const h=document.createElement("link").relList;if(h&&h.supports&&h.supports("modulepreload"))return;for(const d of document.querySelectorAll('link[rel="modulepreload"]'))r(d);new MutationObserver(d=>{for(const p of d)if(p.type==="childList")for(const g of p.addedNodes)g.tagName==="LINK"&&g.rel==="modulepreload"&&r(g)}).observe(document,{childList:!0,subtree:!0});function n(d){const p={};return d.integrity&&(p.integrity=d.integrity),d.referrerPolicy&&(p.referrerPolicy=d.referrerPolicy),d.crossOrigin==="use-credentials"?p.credentials="include":d.crossOrigin==="anonymous"?p.credentials="omit":p.credentials="same-origin",p}function r(d){if(d.ep)return;d.ep=!0;const p=n(d);fetch(d.href,p)}})();const u=document.getElementById("drawing-canvas"),i=u.getContext("2d"),e=document.getElementById("btn-pencil"),C=document.getElementById("btn-eraser"),W=document.getElementById("btn-clear"),w=document.getElementById("feedback-message"),j=document.getElementById("ui-letter"),F=document.getElementById("ui-letter-desc"),J=document.getElementById("ui-word"),z=document.getElementById("ui-emoji"),O=document.getElementById("ui-svg-container"),R=document.getElementById("ui-score"),B=document.getElementById("btn-next"),A=document.getElementById("btn-prev");let y=!1,M="pencil";const H="#1f618d";let o=[];function N(t,h,n){const r={x:20*n,y:70*n},d={x:40*n,y:10*n},p={x:60*n,y:70*n},g={x:30*n,y:45*n},a={x:50*n,y:45*n};o.push({x:t+40*n,y:h+40*n,hit:!1}),i.beginPath(),i.moveTo(t+d.x,h+d.y),i.lineTo(t+r.x,h+r.y),i.moveTo(t+d.x,h+d.y),i.lineTo(t+p.x,h+p.y),i.moveTo(t+g.x,h+g.y),i.lineTo(t+a.x,h+a.y);const L=90*n,T=55*n,v=15*n;i.moveTo(t+L+v,h+T),i.arc(t+L,h+T,v,0,Math.PI*2),i.moveTo(t+L+v,h+T-v),i.lineTo(t+L+v,h+T+v),i.lineWidth=4*n,i.strokeStyle="#bdc3c7",i.lineCap="round",i.lineJoin="round",i.setLineDash([5*n,8*n]),i.stroke(),i.setLineDash([])}function G(t,h,n){o.push({x:t+40*n,y:h+40*n,hit:!1}),i.beginPath();const r=30*n;i.moveTo(t+r,h+10*n),i.lineTo(t+r,h+90*n),i.moveTo(t+r,h+10*n),i.bezierCurveTo(t+70*n,h+10*n,t+70*n,h+50*n,t+r,h+50*n),i.moveTo(t+r,h+50*n),i.bezierCurveTo(t+80*n,h+50*n,t+80*n,h+90*n,t+r,h+90*n);const d=90*n;i.moveTo(t+d,h+10*n),i.lineTo(t+d,h+90*n),i.moveTo(t+d+30*n,h+70*n),i.arc(t+d+15*n,h+70*n,15*n,0,Math.PI*2),i.lineWidth=4*n,i.strokeStyle="#bdc3c7",i.lineCap="round",i.lineJoin="round",i.setLineDash([5*n,8*n]),i.stroke(),i.setLineDash([])}function K(t,h,n){o.push({x:t+40*n,y:h+40*n,hit:!1}),i.beginPath();const r=50*n,d=50*n,p=35*n;i.arc(t+r,h+d,p,-Math.PI/4,Math.PI/4,!0);const g=110*n,a=70*n,L=20*n;i.moveTo(t+g+L*Math.cos(-Math.PI/4),h+a+L*Math.sin(-Math.PI/4)),i.arc(t+g,h+a,L,-Math.PI/4,Math.PI/4,!0),i.lineWidth=4*n,i.strokeStyle="#bdc3c7",i.lineCap="round",i.lineJoin="round",i.setLineDash([5*n,8*n]),i.stroke(),i.setLineDash([])}function U(t,h,n){o.push({x:t+40*n,y:h+40*n,hit:!1}),i.beginPath();const r=30*n;i.moveTo(t+r,h+10*n),i.lineTo(t+r,h+90*n),i.moveTo(t+r,h+10*n),i.bezierCurveTo(t+80*n,h+10*n,t+80*n,h+90*n,t+r,h+90*n);const d=100*n;i.moveTo(t+d,h+10*n),i.lineTo(t+d,h+90*n),i.moveTo(t+d-30*n,h+70*n),i.arc(t+d-15*n,h+70*n,15*n,0,Math.PI*2),i.lineWidth=4*n,i.strokeStyle="#bdc3c7",i.lineCap="round",i.lineJoin="round",i.setLineDash([5*n,8*n]),i.stroke(),i.setLineDash([])}function q(t,h,n){o.push({x:t+40*n,y:h+40*n,hit:!1}),i.beginPath();const r=30*n;i.moveTo(t+r,h+10*n),i.lineTo(t+r,h+90*n),i.moveTo(t+r,h+10*n),i.lineTo(t+70*n,h+10*n),i.moveTo(t+r,h+50*n),i.lineTo(t+60*n,h+50*n),i.moveTo(t+r,h+90*n),i.lineTo(t+70*n,h+90*n);const d=100*n;i.moveTo(t+d-15*n,h+65*n),i.lineTo(t+d+15*n,h+65*n),i.bezierCurveTo(t+d+15*n,h+30*n,t+d-15*n,h+30*n,t+d-15*n,h+65*n),i.bezierCurveTo(t+d-15*n,h+95*n,t+d+15*n,h+95*n,t+d+15*n,h+85*n),i.lineWidth=4*n,i.strokeStyle="#bdc3c7",i.lineCap="round",i.lineJoin="round",i.setLineDash([5*n,8*n]),i.stroke(),i.setLineDash([])}function Q(t,h,n){o.push({x:t+40*n,y:h+40*n,hit:!1}),i.beginPath();const r=30*n;i.moveTo(t+r,h+10*n),i.lineTo(t+r,h+90*n),i.moveTo(t+r,h+10*n),i.lineTo(t+70*n,h+10*n),i.moveTo(t+r,h+50*n),i.lineTo(t+60*n,h+50*n);const d=100*n;i.moveTo(t+d+10*n,h+20*n),i.bezierCurveTo(t+d+10*n,h+5*n,t+d-5*n,h+5*n,t+d-5*n,h+30*n),i.lineTo(t+d-5*n,h+90*n),i.moveTo(t+d-15*n,h+50*n),i.lineTo(t+d+5*n,h+50*n),i.lineWidth=4*n,i.strokeStyle="#bdc3c7",i.lineCap="round",i.lineJoin="round",i.setLineDash([5*n,8*n]),i.stroke(),i.setLineDash([])}function V(t,h,n){o.push({x:t+40*n,y:h+40*n,hit:!1}),i.beginPath();const r=50*n,d=50*n,p=35*n;i.arc(t+r,h+d,p,-Math.PI/4,Math.PI/4,!0),i.lineTo(t+r+p*Math.cos(Math.PI/4),h+50*n),i.lineTo(t+r,h+50*n);const g=110*n,a=65*n,L=15*n;i.moveTo(t+g+L,h+a),i.arc(t+g,h+a,L,0,Math.PI*2),i.moveTo(t+g+L,h+a-L),i.lineTo(t+g+L,h+105*n),i.bezierCurveTo(t+g+L,h+120*n,t+g-15*n,h+120*n,t+g-15*n,h+105*n),i.lineWidth=4*n,i.strokeStyle="#bdc3c7",i.lineCap="round",i.lineJoin="round",i.setLineDash([5*n,8*n]),i.stroke(),i.setLineDash([])}function Z(t,h,n){o.push({x:t+40*n,y:h+40*n,hit:!1}),i.beginPath();const r=30*n,d=70*n;i.moveTo(t+r,h+10*n),i.lineTo(t+r,h+90*n),i.moveTo(t+d,h+10*n),i.lineTo(t+d,h+90*n),i.moveTo(t+r,h+50*n),i.lineTo(t+d,h+50*n);const p=90*n;i.moveTo(t+p,h+10*n),i.lineTo(t+p,h+90*n),i.moveTo(t+p,h+50*n),i.bezierCurveTo(t+p+30*n,h+50*n,t+p+30*n,h+90*n,t+p+30*n,h+90*n),i.lineWidth=4*n,i.strokeStyle="#bdc3c7",i.lineCap="round",i.lineJoin="round",i.setLineDash([5*n,8*n]),i.stroke(),i.setLineDash([])}function $(t,h,n){o.push({x:t+40*n,y:h+40*n,hit:!1}),i.beginPath();const r=50*n;i.moveTo(t+r,h+10*n),i.lineTo(t+r,h+90*n),i.moveTo(t+r-15*n,h+10*n),i.lineTo(t+r+15*n,h+10*n),i.moveTo(t+r-15*n,h+90*n),i.lineTo(t+r+15*n,h+90*n);const d=110*n;i.moveTo(t+d,h+50*n),i.lineTo(t+d,h+90*n),i.moveTo(t+d,h+30*n),i.arc(t+d,h+30*n,2*n,0,Math.PI*2),i.lineWidth=4*n,i.strokeStyle="#bdc3c7",i.lineCap="round",i.lineJoin="round",i.setLineDash([5*n,8*n]),i.stroke(),i.setLineDash([])}function _(t,h,n){o.push({x:t+40*n,y:h+40*n,hit:!1}),i.beginPath();const r=50*n;i.moveTo(t+30*n,h+10*n),i.lineTo(t+70*n,h+10*n),i.moveTo(t+r,h+10*n),i.lineTo(t+r,h+75*n),i.arc(t+40*n,h+75*n,10*n,0,Math.PI,!1);const d=95*n;i.moveTo(t+d,h+50*n),i.lineTo(t+d,h+105*n),i.arc(t+85*n,h+105*n,10*n,0,Math.PI,!1),i.moveTo(t+d,h+30*n),i.arc(t+d,h+30*n,2*n,0,Math.PI*2),i.lineWidth=4*n,i.strokeStyle="#bdc3c7",i.lineCap="round",i.lineJoin="round",i.setLineDash([5*n,8*n]),i.stroke(),i.setLineDash([])}function l(t,h,n){o.push({x:t+40*n,y:h+40*n,hit:!1}),i.beginPath();const r=30*n;i.moveTo(t+r,h+10*n),i.lineTo(t+r,h+90*n),i.moveTo(t+70*n,h+10*n),i.lineTo(t+r,h+50*n),i.moveTo(t+r,h+50*n),i.lineTo(t+70*n,h+90*n);const d=90*n;i.moveTo(t+d,h+10*n),i.lineTo(t+d,h+90*n),i.moveTo(t+120*n,h+50*n),i.lineTo(t+d,h+70*n),i.moveTo(t+d,h+70*n),i.lineTo(t+120*n,h+90*n),i.lineWidth=4*n,i.strokeStyle="#bdc3c7",i.lineCap="round",i.lineJoin="round",i.setLineDash([5*n,8*n]),i.stroke(),i.setLineDash([])}function c(t,h,n){o.push({x:t+40*n,y:h+40*n,hit:!1}),i.beginPath();const r=30*n;i.moveTo(t+r,h+10*n),i.lineTo(t+r,h+90*n),i.moveTo(t+r,h+90*n),i.lineTo(t+70*n,h+90*n);const d=100*n;i.moveTo(t+d,h+10*n),i.lineTo(t+d,h+90*n),i.lineWidth=4*n,i.strokeStyle="#bdc3c7",i.lineCap="round",i.lineJoin="round",i.setLineDash([5*n,8*n]),i.stroke(),i.setLineDash([])}function X(t,h,n){o.push({x:t+40*n,y:h+40*n,hit:!1}),i.beginPath();const r=20*n,d=70*n;i.moveTo(t+r,h+90*n),i.lineTo(t+r,h+10*n),i.moveTo(t+r,h+10*n),i.lineTo(t+45*n,h+50*n),i.moveTo(t+45*n,h+50*n),i.lineTo(t+d,h+10*n),i.moveTo(t+d,h+10*n),i.lineTo(t+d,h+90*n);const p=85*n;i.moveTo(t+p,h+50*n),i.lineTo(t+p,h+90*n),i.moveTo(t+p,h+50*n),i.bezierCurveTo(t+95*n,h+35*n,t+105*n,h+50*n,t+105*n,h+90*n),i.moveTo(t+105*n,h+50*n),i.bezierCurveTo(t+115*n,h+35*n,t+125*n,h+50*n,t+125*n,h+90*n),i.lineWidth=4*n,i.strokeStyle="#bdc3c7",i.lineCap="round",i.lineJoin="round",i.setLineDash([5*n,8*n]),i.stroke(),i.setLineDash([])}function Y(t,h,n){o.push({x:t+40*n,y:h+40*n,hit:!1}),i.beginPath();const r=25*n,d=65*n;i.moveTo(t+r,h+90*n),i.lineTo(t+r,h+10*n),i.moveTo(t+r,h+10*n),i.lineTo(t+d,h+90*n),i.moveTo(t+d,h+90*n),i.lineTo(t+d,h+10*n);const p=95*n;i.moveTo(t+p,h+50*n),i.lineTo(t+p,h+90*n),i.moveTo(t+p,h+50*n),i.bezierCurveTo(t+110*n,h+35*n,t+125*n,h+50*n,t+125*n,h+90*n),i.lineWidth=4*n,i.strokeStyle="#bdc3c7",i.lineCap="round",i.lineJoin="round",i.setLineDash([5*n,8*n]),i.stroke(),i.setLineDash([])}function s(t,h,n){o.push({x:t+50*n,y:h+50*n,hit:!1}),i.beginPath(),i.arc(t+50*n,h+50*n,40*n,0,Math.PI*2),i.moveTo(t+130*n,h+70*n),i.arc(t+110*n,h+70*n,20*n,0,Math.PI*2),i.lineWidth=4*n,i.strokeStyle="#bdc3c7",i.lineCap="round",i.lineJoin="round",i.setLineDash([5*n,8*n]),i.stroke(),i.setLineDash([])}function f(t,h,n){o.push({x:t+50*n,y:h+50*n,hit:!1}),i.beginPath();const r=30*n;i.moveTo(t+r,h+10*n),i.lineTo(t+r,h+90*n),i.moveTo(t+r,h+10*n),i.bezierCurveTo(t+80*n,h+10*n,t+80*n,h+50*n,t+r,h+50*n);const d=95*n;i.moveTo(t+d,h+50*n),i.lineTo(t+d,h+115*n),i.moveTo(t+d,h+50*n),i.bezierCurveTo(t+130*n,h+50*n,t+130*n,h+90*n,t+d,h+90*n),i.lineWidth=4*n,i.strokeStyle="#bdc3c7",i.lineCap="round",i.lineJoin="round",i.setLineDash([5*n,8*n]),i.stroke(),i.setLineDash([])}function n0(t,h,n){o.push({x:t+50*n,y:h+50*n,hit:!1}),i.beginPath(),i.arc(t+50*n,h+50*n,40*n,0,Math.PI*2),i.moveTo(t+60*n,h+70*n),i.lineTo(t+80*n,h+90*n);const r=115*n;i.moveTo(t+r,h+50*n),i.lineTo(t+r,h+115*n),i.lineTo(t+125*n,h+105*n),i.moveTo(t+115*n,h+70*n),i.arc(t+95*n,h+70*n,20*n,0,Math.PI*2),i.lineWidth=4*n,i.strokeStyle="#bdc3c7",i.lineCap="round",i.lineJoin="round",i.setLineDash([5*n,8*n]),i.stroke(),i.setLineDash([])}function i0(t,h,n){o.push({x:t+50*n,y:h+50*n,hit:!1}),i.beginPath();const r=30*n;i.moveTo(t+r,h+10*n),i.lineTo(t+r,h+90*n),i.moveTo(t+r,h+10*n),i.bezierCurveTo(t+80*n,h+10*n,t+80*n,h+50*n,t+r,h+50*n),i.moveTo(t+45*n,h+50*n),i.lineTo(t+75*n,h+90*n);const d=95*n;i.moveTo(t+d,h+50*n),i.lineTo(t+d,h+90*n),i.moveTo(t+d,h+65*n),i.arc(t+d+15*n,h+65*n,15*n,Math.PI,1.5*Math.PI,!1),i.lineWidth=4*n,i.strokeStyle="#bdc3c7",i.lineCap="round",i.lineJoin="round",i.setLineDash([5*n,8*n]),i.stroke(),i.setLineDash([])}function t0(t,h,n){o.push({x:t+50*n,y:h+50*n,hit:!1}),i.beginPath(),i.moveTo(t+70*n,h+25*n),i.bezierCurveTo(t+60*n,h+5*n,t+30*n,h+5*n,t+30*n,h+25*n),i.bezierCurveTo(t+30*n,h+50*n,t+70*n,h+45*n,t+70*n,h+70*n),i.bezierCurveTo(t+70*n,h+95*n,t+35*n,h+95*n,t+30*n,h+75*n),i.moveTo(t+120*n,h+60*n),i.bezierCurveTo(t+115*n,h+45*n,t+90*n,h+45*n,t+90*n,h+60*n),i.bezierCurveTo(t+90*n,h+75*n,t+120*n,h+70*n,t+120*n,h+80*n),i.bezierCurveTo(t+120*n,h+95*n,t+95*n,h+95*n,t+90*n,h+85*n),i.lineWidth=4*n,i.strokeStyle="#bdc3c7",i.lineCap="round",i.lineJoin="round",i.setLineDash([5*n,8*n]),i.stroke(),i.setLineDash([])}function h0(t,h,n){o.push({x:t+50*n,y:h+50*n,hit:!1}),i.beginPath(),i.moveTo(t+25*n,h+10*n),i.lineTo(t+75*n,h+10*n),i.moveTo(t+50*n,h+10*n),i.lineTo(t+50*n,h+90*n);const r=110*n;i.moveTo(t+r,h+20*n),i.lineTo(t+r,h+80*n),i.arc(t+r+10*n,h+80*n,10*n,Math.PI,.5*Math.PI,!0),i.moveTo(t+100*n,h+50*n),i.lineTo(t+120*n,h+50*n),i.lineWidth=4*n,i.strokeStyle="#bdc3c7",i.lineCap="round",i.lineJoin="round",i.setLineDash([5*n,8*n]),i.stroke(),i.setLineDash([])}function r0(t,h,n){o.push({x:t+50*n,y:h+50*n,hit:!1}),i.beginPath(),i.moveTo(t+30*n,h+10*n),i.lineTo(t+30*n,h+70*n),i.bezierCurveTo(t+30*n,h+95*n,t+70*n,h+95*n,t+70*n,h+70*n),i.lineTo(t+70*n,h+10*n),i.moveTo(t+95*n,h+50*n),i.lineTo(t+95*n,h+80*n),i.bezierCurveTo(t+95*n,h+95*n,t+125*n,h+95*n,t+125*n,h+80*n),i.lineTo(t+125*n,h+50*n),i.moveTo(t+125*n,h+50*n),i.lineTo(t+125*n,h+90*n),i.lineWidth=4*n,i.strokeStyle="#bdc3c7",i.lineCap="round",i.lineJoin="round",i.setLineDash([5*n,8*n]),i.stroke(),i.setLineDash([])}function d0(t,h,n){o.push({x:t+50*n,y:h+50*n,hit:!1}),i.beginPath(),i.moveTo(t+30*n,h+10*n),i.lineTo(t+50*n,h+90*n),i.lineTo(t+70*n,h+10*n),i.moveTo(t+100*n,h+50*n),i.lineTo(t+110*n,h+90*n),i.lineTo(t+120*n,h+50*n),i.lineWidth=4*n,i.strokeStyle="#bdc3c7",i.lineCap="round",i.lineJoin="round",i.setLineDash([5*n,8*n]),i.stroke(),i.setLineDash([])}function p0(t,h,n){o.push({x:t+50*n,y:h+50*n,hit:!1}),i.beginPath(),i.moveTo(t+20*n,h+10*n),i.lineTo(t+35*n,h+90*n),i.lineTo(t+50*n,h+40*n),i.lineTo(t+65*n,h+90*n),i.lineTo(t+80*n,h+10*n),i.moveTo(t+90*n,h+50*n),i.lineTo(t+100*n,h+90*n),i.lineTo(t+110*n,h+65*n),i.lineTo(t+120*n,h+90*n),i.lineTo(t+130*n,h+50*n),i.lineWidth=4*n,i.strokeStyle="#bdc3c7",i.lineCap="round",i.lineJoin="round",i.setLineDash([5*n,8*n]),i.stroke(),i.setLineDash([])}function o0(t,h,n){o.push({x:t+50*n,y:h+50*n,hit:!1}),i.beginPath(),i.moveTo(t+30*n,h+10*n),i.lineTo(t+70*n,h+90*n),i.moveTo(t+70*n,h+10*n),i.lineTo(t+30*n,h+90*n),i.moveTo(t+95*n,h+50*n),i.lineTo(t+125*n,h+90*n),i.moveTo(t+125*n,h+50*n),i.lineTo(t+95*n,h+90*n),i.lineWidth=4*n,i.strokeStyle="#bdc3c7",i.lineCap="round",i.lineJoin="round",i.setLineDash([5*n,8*n]),i.stroke(),i.setLineDash([])}function u0(t,h,n){o.push({x:t+50*n,y:h+50*n,hit:!1}),i.beginPath(),i.moveTo(t+30*n,h+10*n),i.lineTo(t+50*n,h+50*n),i.lineTo(t+70*n,h+10*n),i.moveTo(t+50*n,h+50*n),i.lineTo(t+50*n,h+90*n),i.moveTo(t+95*n,h+50*n),i.lineTo(t+110*n,h+90*n),i.moveTo(t+125*n,h+50*n),i.lineTo(t+95*n,h+115*n),i.lineWidth=4*n,i.strokeStyle="#bdc3c7",i.lineCap="round",i.lineJoin="round",i.setLineDash([5*n,8*n]),i.stroke(),i.setLineDash([])}function g0(t,h,n){o.push({x:t+50*n,y:h+50*n,hit:!1}),i.beginPath(),i.moveTo(t+30*n,h+10*n),i.lineTo(t+70*n,h+10*n),i.lineTo(t+30*n,h+90*n),i.lineTo(t+70*n,h+90*n),i.moveTo(t+95*n,h+50*n),i.lineTo(t+125*n,h+50*n),i.lineTo(t+95*n,h+90*n),i.lineTo(t+125*n,h+90*n),i.lineWidth=4*n,i.strokeStyle="#bdc3c7",i.lineCap="round",i.lineJoin="round",i.setLineDash([5*n,8*n]),i.stroke(),i.setLineDash([])}const b=[{id:"A",word:"Alpukat",emoji:"🥑",drawFunction:N,svgContent:`
      <svg class="tracing-animation" viewBox="0 0 150 100" width="100%" height="80px">
        <path class="guide-path" d="M 50 10 L 20 90 M 50 10 L 80 90 M 35 60 L 65 60" />
        <path class="guide-path" d="M 125 45 A 20 20 0 1 0 125 85 M 125 45 L 125 85" />
        <path class="trace-path" d="M 50 10 L 20 90 M 50 10 L 80 90 M 35 60 L 65 60" />
        <path class="trace-path-small" d="M 125 45 A 20 20 0 1 0 125 85 M 125 45 L 125 85" />
      </svg>
    `},{id:"B",word:"Buku",emoji:"📘",drawFunction:G,svgContent:`
      <svg class="tracing-animation" viewBox="0 0 150 100" width="100%" height="80px">
        <path class="guide-path" d="M 30 10 L 30 90 M 30 10 C 70 10 70 50 30 50 M 30 50 C 80 50 80 90 30 90" />
        <path class="guide-path" d="M 95 10 L 95 90 M 95 50 A 20 20 0 1 1 95 90" />
        <path class="trace-path" d="M 30 10 L 30 90 M 30 10 C 70 10 70 50 30 50 M 30 50 C 80 50 80 90 30 90" />
        <path class="trace-path-small" d="M 95 10 L 95 90 M 95 50 A 20 20 0 1 1 95 90" />
      </svg>
    `},{id:"C",word:"Ceri",emoji:"🍒",drawFunction:K,svgContent:`
      <svg class="tracing-animation" viewBox="0 0 150 100" width="100%" height="80px">
        <path class="guide-path" d="M 80 25 A 35 35 0 1 0 80 75" />
        <path class="guide-path" d="M 130 55 A 20 20 0 1 0 130 85" />
        <path class="trace-path" d="M 80 25 A 35 35 0 1 0 80 75" />
        <path class="trace-path-small" d="M 130 55 A 20 20 0 1 0 130 85" />
      </svg>
    `},{id:"D",word:"Domba",emoji:"🐑",drawFunction:U,svgContent:`
      <svg class="tracing-animation" viewBox="0 0 150 100" width="100%" height="80px">
        <path class="guide-path" d="M 30 10 L 30 90 M 30 10 C 80 10 80 90 30 90" />
        <path class="guide-path" d="M 100 10 L 100 90 M 100 50 A 20 20 0 1 0 100 90" />
        <path class="trace-path" d="M 30 10 L 30 90 M 30 10 C 80 10 80 90 30 90" />
        <path class="trace-path-small" d="M 100 10 L 100 90 M 100 50 A 20 20 0 1 0 100 90" />
      </svg>
    `},{id:"E",word:"Elang",emoji:"🦅",drawFunction:q,svgContent:`
      <svg class="tracing-animation" viewBox="0 0 150 100" width="100%" height="80px">
        <path class="guide-path" d="M 30 10 L 30 90 M 30 10 L 70 10 M 30 50 L 60 50 M 30 90 L 70 90" />
        <path class="guide-path" d="M 85 65 L 115 65 C 115 30 85 30 85 65 C 85 95 115 95 115 85" />
        <path class="trace-path" d="M 30 10 L 30 90 M 30 10 L 70 10 M 30 50 L 60 50 M 30 90 L 70 90" />
        <path class="trace-path-small" d="M 85 65 L 115 65 C 115 30 85 30 85 65 C 85 95 115 95 115 85" />
      </svg>
    `},{id:"F",word:"Foto",emoji:"📸",drawFunction:Q,svgContent:`
      <svg class="tracing-animation" viewBox="0 0 150 100" width="100%" height="80px">
        <path class="guide-path" d="M 30 10 L 30 90 M 30 10 L 70 10 M 30 50 L 60 50" />
        <path class="guide-path" d="M 110 20 C 110 10 95 10 95 30 L 95 90 M 85 50 L 105 50" />
        <path class="trace-path" d="M 30 10 L 30 90 M 30 10 L 70 10 M 30 50 L 60 50" />
        <path class="trace-path-small" d="M 110 20 C 110 10 95 10 95 30 L 95 90 M 85 50 L 105 50" />
      </svg>
    `},{id:"G",word:"Gajah",emoji:"🐘",drawFunction:V,svgContent:`
      <svg class="tracing-animation" viewBox="0 0 150 120" width="100%" height="80px">
        <path class="guide-path" d="M 80 25 A 35 35 0 1 0 80 75 L 80 50 L 50 50" />
        <path class="guide-path" d="M 125 45 A 20 20 0 1 0 125 85 M 125 45 L 125 105 C 125 120 105 120 105 105" />
        <path class="trace-path" d="M 80 25 A 35 35 0 1 0 80 75 L 80 50 L 50 50" />
        <path class="trace-path-small" d="M 125 45 A 20 20 0 1 0 125 85 M 125 45 L 125 105 C 125 120 105 120 105 105" />
      </svg>
    `},{id:"H",word:"Harimau",emoji:"🐅",drawFunction:Z,svgContent:`
      <svg class="tracing-animation" viewBox="0 0 150 100" width="100%" height="80px">
        <path class="guide-path" d="M 30 10 L 30 90 M 70 10 L 70 90 M 30 50 L 70 50" />
        <path class="guide-path" d="M 95 10 L 95 90 M 95 50 C 125 50 125 90 125 90" />
        <path class="trace-path" d="M 30 10 L 30 90 M 70 10 L 70 90 M 30 50 L 70 50" />
        <path class="trace-path-small" d="M 95 10 L 95 90 M 95 50 C 125 50 125 90 125 90" />
      </svg>
    `},{id:"I",word:"Ikan",emoji:"🐟",drawFunction:$,svgContent:`
      <svg class="tracing-animation" viewBox="0 0 150 100" width="100%" height="80px">
        <path class="guide-path" d="M 50 10 L 50 90 M 35 10 L 65 10 M 35 90 L 65 90" />
        <path class="guide-path" d="M 110 50 L 110 90 M 110 30 A 2 2 0 1 0 110.1 30" />
        <path class="trace-path" d="M 50 10 L 50 90 M 35 10 L 65 10 M 35 90 L 65 90" />
        <path class="trace-path-small" d="M 110 50 L 110 90 M 110 30 A 2 2 0 1 0 110.1 30" />
      </svg>
    `},{id:"J",word:"Jerapah",emoji:"🦒",drawFunction:_,svgContent:`
      <svg class="tracing-animation" viewBox="0 0 150 110" width="100%" height="80px">
        <path class="guide-path" d="M 30 10 L 70 10 M 50 10 L 50 75 A 10 10 0 0 1 30 75" />
        <path class="guide-path" d="M 95 50 L 95 105 A 10 10 0 0 1 75 105 M 95 30 A 2 2 0 1 0 95.1 30" />
        <path class="trace-path" d="M 30 10 L 70 10 M 50 10 L 50 75 A 10 10 0 0 1 30 75" />
        <path class="trace-path-small" d="M 95 50 L 95 105 A 10 10 0 0 1 75 105 M 95 30 A 2 2 0 1 0 95.1 30" />
      </svg>
    `},{id:"K",word:"Kuda",emoji:"🐎",drawFunction:l,svgContent:`
      <svg class="tracing-animation" viewBox="0 0 150 100" width="100%" height="80px">
        <path class="guide-path" d="M 30 10 L 30 90 M 70 10 L 30 50 M 30 50 L 70 90" />
        <path class="guide-path" d="M 90 10 L 90 90 M 120 50 L 90 70 M 90 70 L 120 90" />
        <path class="trace-path" d="M 30 10 L 30 90 M 70 10 L 30 50 M 30 50 L 70 90" />
        <path class="trace-path-small" d="M 90 10 L 90 90 M 120 50 L 90 70 M 90 70 L 120 90" />
      </svg>
    `},{id:"L",word:"Lebah",emoji:"🐝",drawFunction:c,svgContent:`
      <svg class="tracing-animation" viewBox="0 0 150 100" width="100%" height="80px">
        <path class="guide-path" d="M 30 10 L 30 90 M 30 90 L 70 90" />
        <path class="guide-path" d="M 100 10 L 100 90" />
        <path class="trace-path" d="M 30 10 L 30 90 M 30 90 L 70 90" />
        <path class="trace-path-small" d="M 100 10 L 100 90" />
      </svg>
    `},{id:"M",word:"Monyet",emoji:"🐒",drawFunction:X,svgContent:`
      <svg class="tracing-animation" viewBox="0 0 150 100" width="100%" height="80px">
        <path class="guide-path" d="M 20 90 L 20 10 M 20 10 L 45 50 M 45 50 L 70 10 M 70 10 L 70 90" />
        <path class="guide-path" d="M 85 50 L 85 90 M 85 50 C 95 35 105 50 105 90 M 105 50 C 115 35 125 50 125 90" />
        <path class="trace-path" d="M 20 90 L 20 10 M 20 10 L 45 50 M 45 50 L 70 10 M 70 10 L 70 90" />
        <path class="trace-path-small" d="M 85 50 L 85 90 M 85 50 C 95 35 105 50 105 90 M 105 50 C 115 35 125 50 125 90" />
      </svg>
    `},{id:"N",word:"Nanas",emoji:"🍍",drawFunction:Y,svgContent:`
      <svg class="tracing-animation" viewBox="0 0 150 100" width="100%" height="80px">
        <path class="guide-path" d="M 25 90 L 25 10 M 25 10 L 65 90 M 65 90 L 65 10" />
        <path class="guide-path" d="M 95 50 L 95 90 M 95 50 C 110 35 125 50 125 90" />
        <path class="trace-path" d="M 25 90 L 25 10 M 25 10 L 65 90 M 65 90 L 65 10" />
        <path class="trace-path-small" d="M 95 50 L 95 90 M 95 50 C 110 35 125 50 125 90" />
      </svg>
    `},{id:"O",word:"Obat",emoji:"💊",drawFunction:s,svgContent:`
      <svg class="tracing-animation" viewBox="0 0 150 100" width="100%" height="80px">
        <path class="guide-path" d="M 50 10 A 40 40 0 1 0 50.1 10" />
        <path class="guide-path" d="M 110 50 A 20 20 0 1 0 110.1 50" />
        <path class="trace-path" d="M 50 10 A 40 40 0 1 0 50.1 10" />
        <path class="trace-path-small" d="M 110 50 A 20 20 0 1 0 110.1 50" />
      </svg>
    `},{id:"P",word:"Panda",emoji:"🐼",drawFunction:f,svgContent:`
      <svg class="tracing-animation" viewBox="0 0 150 120" width="100%" height="80px">
        <path class="guide-path" d="M 30 10 L 30 90 M 30 10 C 80 10 80 50 30 50" />
        <path class="guide-path" d="M 95 50 L 95 115 M 95 50 C 130 50 130 90 95 90" />
        <path class="trace-path" d="M 30 10 L 30 90 M 30 10 C 80 10 80 50 30 50" />
        <path class="trace-path-small" d="M 95 50 L 95 115 M 95 50 C 130 50 130 90 95 90" />
      </svg>
    `},{id:"Q",word:"Quran",emoji:"📖",drawFunction:n0,svgContent:`
      <svg class="tracing-animation" viewBox="0 0 150 120" width="100%" height="80px">
        <path class="guide-path" d="M 50 10 A 40 40 0 1 0 50.1 10 M 60 70 L 80 90" />
        <path class="guide-path" d="M 95 50 A 20 20 0 1 0 95.1 50 M 115 50 L 115 115 L 125 105" />
        <path class="trace-path" d="M 50 10 A 40 40 0 1 0 50.1 10 M 60 70 L 80 90" />
        <path class="trace-path-small" d="M 95 50 A 20 20 0 1 0 95.1 50 M 115 50 L 115 115 L 125 105" />
      </svg>
    `},{id:"R",word:"Rusa",emoji:"🦌",drawFunction:i0,svgContent:`
      <svg class="tracing-animation" viewBox="0 0 150 100" width="100%" height="80px">
        <path class="guide-path" d="M 30 10 L 30 90 M 30 10 C 80 10 80 50 30 50 M 45 50 L 75 90" />
        <path class="guide-path" d="M 95 50 L 95 90 M 95 65 A 15 15 0 0 1 115 50" />
        <path class="trace-path" d="M 30 10 L 30 90 M 30 10 C 80 10 80 50 30 50 M 45 50 L 75 90" />
        <path class="trace-path-small" d="M 95 50 L 95 90 M 95 65 A 15 15 0 0 1 115 50" />
      </svg>
    `},{id:"S",word:"Sapi",emoji:"🐄",drawFunction:t0,svgContent:`
      <svg class="tracing-animation" viewBox="0 0 150 100" width="100%" height="80px">
        <path class="guide-path" d="M 70 25 C 60 5 30 5 30 25 C 30 50 70 45 70 70 C 70 95 35 95 30 75" />
        <path class="guide-path" d="M 120 60 C 115 45 90 45 90 60 C 90 75 120 70 120 80 C 120 95 95 95 90 85" />
        <path class="trace-path" d="M 70 25 C 60 5 30 5 30 25 C 30 50 70 45 70 70 C 70 95 35 95 30 75" />
        <path class="trace-path-small" d="M 120 60 C 115 45 90 45 90 60 C 90 75 120 70 120 80 C 120 95 95 95 90 85" />
      </svg>
    `},{id:"T",word:"Tikus",emoji:"🐭",drawFunction:h0,svgContent:`
      <svg class="tracing-animation" viewBox="0 0 150 100" width="100%" height="80px">
        <path class="guide-path" d="M 25 10 L 75 10 M 50 10 L 50 90" />
        <path class="guide-path" d="M 110 20 L 110 80 A 10 10 0 0 0 120 90 M 100 50 L 120 50" />
        <path class="trace-path" d="M 25 10 L 75 10 M 50 10 L 50 90" />
        <path class="trace-path-small" d="M 110 20 L 110 80 A 10 10 0 0 0 120 90 M 100 50 L 120 50" />
      </svg>
    `},{id:"U",word:"Ular",emoji:"🐍",drawFunction:r0,svgContent:`
      <svg class="tracing-animation" viewBox="0 0 150 100" width="100%" height="80px">
        <path class="guide-path" d="M 30 10 L 30 70 C 30 95 70 95 70 70 L 70 10" />
        <path class="guide-path" d="M 95 50 L 95 80 C 95 95 125 95 125 80 L 125 50 M 125 50 L 125 90" />
        <path class="trace-path" d="M 30 10 L 30 70 C 30 95 70 95 70 70 L 70 10" />
        <path class="trace-path-small" d="M 95 50 L 95 80 C 95 95 125 95 125 80 L 125 50 M 125 50 L 125 90" />
      </svg>
    `},{id:"V",word:"Vas",emoji:"🏺",drawFunction:d0,svgContent:`
      <svg class="tracing-animation" viewBox="0 0 150 100" width="100%" height="80px">
        <path class="guide-path" d="M 30 10 L 50 90 L 70 10" />
        <path class="guide-path" d="M 100 50 L 110 90 L 120 50" />
        <path class="trace-path" d="M 30 10 L 50 90 L 70 10" />
        <path class="trace-path-small" d="M 100 50 L 110 90 L 120 50" />
      </svg>
    `},{id:"W",word:"Wortel",emoji:"🥕",drawFunction:p0,svgContent:`
      <svg class="tracing-animation" viewBox="0 0 150 100" width="100%" height="80px">
        <path class="guide-path" d="M 20 10 L 35 90 L 50 40 L 65 90 L 80 10" />
        <path class="guide-path" d="M 90 50 L 100 90 L 110 65 L 120 90 L 130 50" />
        <path class="trace-path" d="M 20 10 L 35 90 L 50 40 L 65 90 L 80 10" />
        <path class="trace-path-small" d="M 90 50 L 100 90 L 110 65 L 120 90 L 130 50" />
      </svg>
    `},{id:"X",word:"Xilofon",emoji:"🎵",drawFunction:o0,svgContent:`
      <svg class="tracing-animation" viewBox="0 0 150 100" width="100%" height="80px">
        <path class="guide-path" d="M 30 10 L 70 90 M 70 10 L 30 90" />
        <path class="guide-path" d="M 95 50 L 125 90 M 125 50 L 95 90" />
        <path class="trace-path" d="M 30 10 L 70 90 M 70 10 L 30 90" />
        <path class="trace-path-small" d="M 95 50 L 125 90 M 125 50 L 95 90" />
      </svg>
    `},{id:"Y",word:"Yoyo",emoji:"🪀",drawFunction:u0,svgContent:`
      <svg class="tracing-animation" viewBox="0 0 150 120" width="100%" height="80px">
        <path class="guide-path" d="M 30 10 L 50 50 L 70 10 M 50 50 L 50 90" />
        <path class="guide-path" d="M 95 50 L 110 90 M 125 50 L 95 115" />
        <path class="trace-path" d="M 30 10 L 50 50 L 70 10 M 50 50 L 50 90" />
        <path class="trace-path-small" d="M 95 50 L 110 90 M 125 50 L 95 115" />
      </svg>
    `},{id:"Z",word:"Zebra",emoji:"🦓",drawFunction:g0,svgContent:`
      <svg class="tracing-animation" viewBox="0 0 150 100" width="100%" height="80px">
        <path class="guide-path" d="M 30 10 L 70 10 L 30 90 L 70 90" />
        <path class="guide-path" d="M 95 50 L 125 50 L 95 90 L 125 90" />
        <path class="trace-path" d="M 30 10 L 70 10 L 30 90 L 70 90" />
        <path class="trace-path-small" d="M 95 50 L 125 50 L 95 90 L 125 90" />
      </svg>
    `}];let m=0;function k(){const t=b[m];j.textContent=t.id,F.textContent=t.id,J.textContent=t.word,z.textContent=t.emoji,O.innerHTML=t.svgContent,R.textContent=m+1,A.style.visibility=m>0?"visible":"hidden",B.style.visibility=m<b.length-1?"visible":"hidden",P()}function P(){i.clearRect(0,0,u.width,u.height),o=[];const t=b[m],h=1.2,n=190,r=130,d=Math.floor((u.width-20)/n),p=Math.floor((u.height-20)/r),g=d*n,a=p*r,L=(u.width-g)/2+30,T=(u.height-a)/2+10;for(let v=0;v<p;v++)for(let x=0;x<d;x++)t.drawFunction(L+x*n,T+v*r,h);w.textContent=`Yuk, tebalkan semua huruf ${t.id}!`,w.style.color="#27ae60"}window.addEventListener("resize",()=>{u.width=u.parentElement.clientWidth,u.height=u.parentElement.clientHeight,P()});function E(t){const h=u.getBoundingClientRect(),n=t.clientX||t.touches&&t.touches[0].clientX,r=t.clientY||t.touches&&t.touches[0].clientY;return{x:n-h.left,y:r-h.top}}function S(t){y=!0;const h=E(t);i.beginPath(),i.moveTo(h.x,h.y),I(t)}function D(){y=!1,i.beginPath(),M==="pencil"&&a0()}function I(t){if(!y)return;const h=E(t);i.lineWidth=M==="pencil"?8:25,i.lineCap="round",M==="eraser"?(i.globalCompositeOperation="destination-out",i.strokeStyle="rgba(0,0,0,1)"):(i.globalCompositeOperation="source-over",i.strokeStyle=H),i.lineTo(h.x,h.y),i.stroke(),i.beginPath(),i.moveTo(h.x,h.y),M==="pencil"&&L0(h.x,h.y)}function L0(t,h){o.forEach(r=>{Math.hypot(r.x-t,r.y-h)<25&&(r.hit=!0)})}function a0(){if(o.length===0)return;const t=o.length;o.filter(r=>r.hit).length/t*100>50&&(w.textContent="Wah hebat! Kamu berhasil!",w.style.color="#3498db")}u.addEventListener("mousedown",S);u.addEventListener("mousemove",I);u.addEventListener("mouseup",D);u.addEventListener("mouseout",D);u.addEventListener("touchstart",t=>{t.preventDefault(),S(t)},{passive:!1});u.addEventListener("touchmove",t=>{t.preventDefault(),I(t)},{passive:!1});u.addEventListener("touchend",D);e.addEventListener("click",()=>{M="pencil",e.classList.add("active"),C.classList.remove("active")});C.addEventListener("click",()=>{M="eraser",C.classList.add("active"),e.classList.remove("active")});W.addEventListener("click",()=>{P(),M="pencil",e.classList.add("active"),C.classList.remove("active")});B.addEventListener("click",()=>{m<b.length-1&&(m++,k())});A.addEventListener("click",()=>{m>0&&(m--,k())});setTimeout(()=>{u.width=u.parentElement.clientWidth,u.height=u.parentElement.clientHeight,k()},100);
