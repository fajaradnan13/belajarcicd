(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const d of document.querySelectorAll('link[rel="modulepreload"]'))h(d);new MutationObserver(d=>{for(const o of d)if(o.type==="childList")for(const u of o.addedNodes)u.tagName==="LINK"&&u.rel==="modulepreload"&&h(u)}).observe(document,{childList:!0,subtree:!0});function n(d){const o={};return d.integrity&&(o.integrity=d.integrity),d.referrerPolicy&&(o.referrerPolicy=d.referrerPolicy),d.crossOrigin==="use-credentials"?o.credentials="include":d.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function h(d){if(d.ep)return;d.ep=!0;const o=n(d);fetch(d.href,o)}})();const g=document.getElementById("drawing-canvas"),i=g.getContext("2d"),x=document.getElementById("btn-pencil"),c=document.getElementById("btn-eraser"),V=document.getElementById("btn-clear"),k=document.getElementById("feedback-message"),O=document.getElementById("ui-letter"),q=document.getElementById("ui-letter-desc"),N=document.getElementById("ui-word"),H=document.getElementById("ui-emoji"),K=document.getElementById("ui-svg-container"),Q=document.getElementById("ui-score"),j=document.getElementById("btn-next"),G=document.getElementById("btn-prev");let E=!1,w="pencil";const U="#1f618d";let a=[];function Z(t,r,n){const h={x:20*n,y:70*n},d={x:40*n,y:10*n},o={x:60*n,y:70*n},u={x:30*n,y:45*n},p={x:50*n,y:45*n};a.push({x:t+40*n,y:r+40*n,hit:!1}),i.beginPath(),i.moveTo(t+d.x,r+d.y),i.lineTo(t+h.x,r+h.y),i.moveTo(t+d.x,r+d.y),i.lineTo(t+o.x,r+o.y),i.moveTo(t+u.x,r+u.y),i.lineTo(t+p.x,r+p.y);const L=90*n,v=55*n,M=15*n;i.moveTo(t+L+M,r+v),i.arc(t+L,r+v,M,0,Math.PI*2),i.moveTo(t+L+M,r+v-M),i.lineTo(t+L+M,r+v+M),i.lineWidth=4*n,i.strokeStyle="#bdc3c7",i.lineCap="round",i.lineJoin="round",i.setLineDash([5*n,8*n]),i.stroke(),i.setLineDash([])}function $(t,r,n){a.push({x:t+40*n,y:r+40*n,hit:!1}),i.beginPath();const h=30*n;i.moveTo(t+h,r+10*n),i.lineTo(t+h,r+90*n),i.moveTo(t+h,r+10*n),i.bezierCurveTo(t+70*n,r+10*n,t+70*n,r+50*n,t+h,r+50*n),i.moveTo(t+h,r+50*n),i.bezierCurveTo(t+80*n,r+50*n,t+80*n,r+90*n,t+h,r+90*n);const d=90*n;i.moveTo(t+d,r+10*n),i.lineTo(t+d,r+90*n),i.moveTo(t+d+30*n,r+70*n),i.arc(t+d+15*n,r+70*n,15*n,0,Math.PI*2),i.lineWidth=4*n,i.strokeStyle="#bdc3c7",i.lineCap="round",i.lineJoin="round",i.setLineDash([5*n,8*n]),i.stroke(),i.setLineDash([])}function _(t,r,n){a.push({x:t+40*n,y:r+40*n,hit:!1}),i.beginPath();const h=50*n,d=50*n,o=35*n;i.arc(t+h,r+d,o,-Math.PI/4,Math.PI/4,!0);const u=110*n,p=70*n,L=20*n;i.moveTo(t+u+L*Math.cos(-Math.PI/4),r+p+L*Math.sin(-Math.PI/4)),i.arc(t+u,r+p,L,-Math.PI/4,Math.PI/4,!0),i.lineWidth=4*n,i.strokeStyle="#bdc3c7",i.lineCap="round",i.lineJoin="round",i.setLineDash([5*n,8*n]),i.stroke(),i.setLineDash([])}function s(t,r,n){a.push({x:t+40*n,y:r+40*n,hit:!1}),i.beginPath();const h=25*n;i.moveTo(t+h,r+10*n),i.lineTo(t+h,r+90*n),i.moveTo(t+h,r+10*n),i.bezierCurveTo(t+70*n,r+10*n,t+70*n,r+90*n,t+h,r+90*n);const d=115*n;i.moveTo(t+d,r+10*n),i.lineTo(t+d,r+90*n);const o=20*n,u=t+d-o,p=r+70*n;i.moveTo(u+o,p),i.arc(u,p,o,0,Math.PI*2),i.lineWidth=4*n,i.strokeStyle="#bdc3c7",i.lineCap="round",i.lineJoin="round",i.setLineDash([5*n,8*n]),i.stroke(),i.setLineDash([])}function X(t,r,n){a.push({x:t+40*n,y:r+40*n,hit:!1}),i.beginPath();const h=30*n;i.moveTo(t+h,r+10*n),i.lineTo(t+h,r+90*n),i.moveTo(t+h,r+10*n),i.lineTo(t+70*n,r+10*n),i.moveTo(t+h,r+50*n),i.lineTo(t+60*n,r+50*n),i.moveTo(t+h,r+90*n),i.lineTo(t+70*n,r+90*n);const d=100*n;i.moveTo(t+d-15*n,r+65*n),i.lineTo(t+d+15*n,r+65*n),i.bezierCurveTo(t+d+15*n,r+30*n,t+d-15*n,r+30*n,t+d-15*n,r+65*n),i.bezierCurveTo(t+d-15*n,r+95*n,t+d+15*n,r+95*n,t+d+15*n,r+85*n),i.lineWidth=4*n,i.strokeStyle="#bdc3c7",i.lineCap="round",i.lineJoin="round",i.setLineDash([5*n,8*n]),i.stroke(),i.setLineDash([])}function Y(t,r,n){a.push({x:t+40*n,y:r+40*n,hit:!1}),i.beginPath();const h=30*n;i.moveTo(t+h,r+10*n),i.lineTo(t+h,r+90*n),i.moveTo(t+h,r+10*n),i.lineTo(t+70*n,r+10*n),i.moveTo(t+h,r+50*n),i.lineTo(t+60*n,r+50*n);const d=100*n;i.moveTo(t+d+10*n,r+20*n),i.bezierCurveTo(t+d+10*n,r+5*n,t+d-5*n,r+5*n,t+d-5*n,r+30*n),i.lineTo(t+d-5*n,r+90*n),i.moveTo(t+d-15*n,r+50*n),i.lineTo(t+d+5*n,r+50*n),i.lineWidth=4*n,i.strokeStyle="#bdc3c7",i.lineCap="round",i.lineJoin="round",i.setLineDash([5*n,8*n]),i.stroke(),i.setLineDash([])}function f(t,r,n){a.push({x:t+40*n,y:r+40*n,hit:!1}),i.beginPath();const h=50*n,d=50*n,o=35*n;i.arc(t+h,r+d,o,-Math.PI/4,Math.PI/4,!0),i.lineTo(t+h+o*Math.cos(Math.PI/4),r+50*n),i.lineTo(t+h,r+50*n);const u=110*n,p=65*n,L=15*n;i.moveTo(t+u+L,r+p),i.arc(t+u,r+p,L,0,Math.PI*2),i.moveTo(t+u+L,r+p-L),i.lineTo(t+u+L,r+105*n),i.bezierCurveTo(t+u+L,r+120*n,t+u-15*n,r+120*n,t+u-15*n,r+105*n),i.lineWidth=4*n,i.strokeStyle="#bdc3c7",i.lineCap="round",i.lineJoin="round",i.setLineDash([5*n,8*n]),i.stroke(),i.setLineDash([])}function n0(t,r,n){a.push({x:t+40*n,y:r+40*n,hit:!1}),i.beginPath();const h=30*n,d=70*n;i.moveTo(t+h,r+10*n),i.lineTo(t+h,r+90*n),i.moveTo(t+d,r+10*n),i.lineTo(t+d,r+90*n),i.moveTo(t+h,r+50*n),i.lineTo(t+d,r+50*n);const o=90*n;i.moveTo(t+o,r+10*n),i.lineTo(t+o,r+90*n),i.moveTo(t+o,r+50*n),i.bezierCurveTo(t+o+30*n,r+50*n,t+o+30*n,r+90*n,t+o+30*n,r+90*n),i.lineWidth=4*n,i.strokeStyle="#bdc3c7",i.lineCap="round",i.lineJoin="round",i.setLineDash([5*n,8*n]),i.stroke(),i.setLineDash([])}function i0(t,r,n){a.push({x:t+40*n,y:r+40*n,hit:!1}),i.beginPath();const h=50*n;i.moveTo(t+h,r+10*n),i.lineTo(t+h,r+90*n),i.moveTo(t+h-15*n,r+10*n),i.lineTo(t+h+15*n,r+10*n),i.moveTo(t+h-15*n,r+90*n),i.lineTo(t+h+15*n,r+90*n);const d=110*n;i.moveTo(t+d,r+50*n),i.lineTo(t+d,r+90*n),i.moveTo(t+d,r+30*n),i.arc(t+d,r+30*n,2*n,0,Math.PI*2),i.lineWidth=4*n,i.strokeStyle="#bdc3c7",i.lineCap="round",i.lineJoin="round",i.setLineDash([5*n,8*n]),i.stroke(),i.setLineDash([])}function t0(t,r,n){a.push({x:t+40*n,y:r+40*n,hit:!1}),i.beginPath();const h=50*n;i.moveTo(t+30*n,r+10*n),i.lineTo(t+70*n,r+10*n),i.moveTo(t+h,r+10*n),i.lineTo(t+h,r+75*n),i.arc(t+40*n,r+75*n,10*n,0,Math.PI,!1);const d=95*n;i.moveTo(t+d,r+50*n),i.lineTo(t+d,r+105*n),i.arc(t+85*n,r+105*n,10*n,0,Math.PI,!1),i.moveTo(t+d,r+30*n),i.arc(t+d,r+30*n,2*n,0,Math.PI*2),i.lineWidth=4*n,i.strokeStyle="#bdc3c7",i.lineCap="round",i.lineJoin="round",i.setLineDash([5*n,8*n]),i.stroke(),i.setLineDash([])}function r0(t,r,n){a.push({x:t+40*n,y:r+40*n,hit:!1}),i.beginPath();const h=30*n;i.moveTo(t+h,r+10*n),i.lineTo(t+h,r+90*n),i.moveTo(t+70*n,r+10*n),i.lineTo(t+h,r+50*n),i.moveTo(t+h,r+50*n),i.lineTo(t+70*n,r+90*n);const d=90*n;i.moveTo(t+d,r+10*n),i.lineTo(t+d,r+90*n),i.moveTo(t+120*n,r+50*n),i.lineTo(t+d,r+70*n),i.moveTo(t+d,r+70*n),i.lineTo(t+120*n,r+90*n),i.lineWidth=4*n,i.strokeStyle="#bdc3c7",i.lineCap="round",i.lineJoin="round",i.setLineDash([5*n,8*n]),i.stroke(),i.setLineDash([])}function d0(t,r,n){a.push({x:t+40*n,y:r+40*n,hit:!1}),i.beginPath();const h=30*n;i.moveTo(t+h,r+10*n),i.lineTo(t+h,r+90*n),i.moveTo(t+h,r+90*n),i.lineTo(t+70*n,r+90*n);const d=100*n;i.moveTo(t+d,r+10*n),i.lineTo(t+d,r+90*n),i.lineWidth=4*n,i.strokeStyle="#bdc3c7",i.lineCap="round",i.lineJoin="round",i.setLineDash([5*n,8*n]),i.stroke(),i.setLineDash([])}function h0(t,r,n){a.push({x:t+40*n,y:r+40*n,hit:!1}),i.beginPath();const h=20*n,d=70*n;i.moveTo(t+h,r+90*n),i.lineTo(t+h,r+10*n),i.moveTo(t+h,r+10*n),i.lineTo(t+45*n,r+50*n),i.moveTo(t+45*n,r+50*n),i.lineTo(t+d,r+10*n),i.moveTo(t+d,r+10*n),i.lineTo(t+d,r+90*n);const o=85*n;i.moveTo(t+o,r+50*n),i.lineTo(t+o,r+90*n),i.moveTo(t+o,r+50*n),i.bezierCurveTo(t+95*n,r+35*n,t+105*n,r+50*n,t+105*n,r+90*n),i.moveTo(t+105*n,r+50*n),i.bezierCurveTo(t+115*n,r+35*n,t+125*n,r+50*n,t+125*n,r+90*n),i.lineWidth=4*n,i.strokeStyle="#bdc3c7",i.lineCap="round",i.lineJoin="round",i.setLineDash([5*n,8*n]),i.stroke(),i.setLineDash([])}function o0(t,r,n){a.push({x:t+40*n,y:r+40*n,hit:!1}),i.beginPath();const h=25*n,d=65*n;i.moveTo(t+h,r+90*n),i.lineTo(t+h,r+10*n),i.moveTo(t+h,r+10*n),i.lineTo(t+d,r+90*n),i.moveTo(t+d,r+90*n),i.lineTo(t+d,r+10*n);const o=95*n;i.moveTo(t+o,r+50*n),i.lineTo(t+o,r+90*n),i.moveTo(t+o,r+50*n),i.bezierCurveTo(t+110*n,r+35*n,t+125*n,r+50*n,t+125*n,r+90*n),i.lineWidth=4*n,i.strokeStyle="#bdc3c7",i.lineCap="round",i.lineJoin="round",i.setLineDash([5*n,8*n]),i.stroke(),i.setLineDash([])}function u0(t,r,n){a.push({x:t+40*n,y:r+50*n,hit:!1}),i.beginPath();const h=40*n,d=50*n,o=34*n;i.arc(t+h,r+d,o,0,Math.PI*2);const u=112*n,p=70*n,L=18*n;i.moveTo(t+u+L,r+p),i.arc(t+u,r+p,L,0,Math.PI*2),i.lineWidth=4*n,i.strokeStyle="#bdc3c7",i.lineCap="round",i.lineJoin="round",i.setLineDash([5*n,8*n]),i.stroke(),i.setLineDash([])}function a0(t,r,n){a.push({x:t+50*n,y:r+50*n,hit:!1}),i.beginPath();const h=30*n;i.moveTo(t+h,r+10*n),i.lineTo(t+h,r+90*n),i.moveTo(t+h,r+10*n),i.bezierCurveTo(t+80*n,r+10*n,t+80*n,r+50*n,t+h,r+50*n);const d=95*n;i.moveTo(t+d,r+50*n),i.lineTo(t+d,r+115*n),i.moveTo(t+d,r+50*n),i.bezierCurveTo(t+130*n,r+50*n,t+130*n,r+90*n,t+d,r+90*n),i.lineWidth=4*n,i.strokeStyle="#bdc3c7",i.lineCap="round",i.lineJoin="round",i.setLineDash([5*n,8*n]),i.stroke(),i.setLineDash([])}function e0(t,r,n){a.push({x:t+40*n,y:r+50*n,hit:!1}),i.beginPath();const h=40*n,d=50*n,o=34*n;i.arc(t+h,r+d,o,0,Math.PI*2),i.moveTo(t+48*n,r+62*n),i.lineTo(t+68*n,r+88*n);const u=122*n,p=18*n;i.moveTo(t+u,r+50*n),i.lineTo(t+u,r+115*n),i.lineTo(t+130*n,r+105*n),i.moveTo(t+u,r+70*n),i.arc(t+(u-p),r+70*n,p,0,Math.PI*2),i.lineWidth=4*n,i.strokeStyle="#bdc3c7",i.lineCap="round",i.lineJoin="round",i.setLineDash([5*n,8*n]),i.stroke(),i.setLineDash([])}function p0(t,r,n){a.push({x:t+50*n,y:r+50*n,hit:!1}),i.beginPath();const h=30*n;i.moveTo(t+h,r+10*n),i.lineTo(t+h,r+90*n),i.moveTo(t+h,r+10*n),i.bezierCurveTo(t+80*n,r+10*n,t+80*n,r+50*n,t+h,r+50*n),i.moveTo(t+45*n,r+50*n),i.lineTo(t+75*n,r+90*n);const d=95*n;i.moveTo(t+d,r+50*n),i.lineTo(t+d,r+90*n),i.moveTo(t+d,r+65*n),i.arc(t+d+15*n,r+65*n,15*n,Math.PI,1.5*Math.PI,!1),i.lineWidth=4*n,i.strokeStyle="#bdc3c7",i.lineCap="round",i.lineJoin="round",i.setLineDash([5*n,8*n]),i.stroke(),i.setLineDash([])}function g0(t,r,n){a.push({x:t+50*n,y:r+50*n,hit:!1}),i.beginPath(),i.moveTo(t+70*n,r+25*n),i.bezierCurveTo(t+60*n,r+5*n,t+30*n,r+5*n,t+30*n,r+25*n),i.bezierCurveTo(t+30*n,r+50*n,t+70*n,r+45*n,t+70*n,r+70*n),i.bezierCurveTo(t+70*n,r+95*n,t+35*n,r+95*n,t+30*n,r+75*n),i.moveTo(t+120*n,r+60*n),i.bezierCurveTo(t+115*n,r+45*n,t+90*n,r+45*n,t+90*n,r+60*n),i.bezierCurveTo(t+90*n,r+75*n,t+120*n,r+70*n,t+120*n,r+80*n),i.bezierCurveTo(t+120*n,r+95*n,t+95*n,r+95*n,t+90*n,r+85*n),i.lineWidth=4*n,i.strokeStyle="#bdc3c7",i.lineCap="round",i.lineJoin="round",i.setLineDash([5*n,8*n]),i.stroke(),i.setLineDash([])}function L0(t,r,n){a.push({x:t+50*n,y:r+50*n,hit:!1}),i.beginPath(),i.moveTo(t+25*n,r+10*n),i.lineTo(t+75*n,r+10*n),i.moveTo(t+50*n,r+10*n),i.lineTo(t+50*n,r+90*n);const h=110*n;i.moveTo(t+h,r+20*n),i.lineTo(t+h,r+80*n),i.arc(t+h+10*n,r+80*n,10*n,Math.PI,.5*Math.PI,!0),i.moveTo(t+100*n,r+50*n),i.lineTo(t+120*n,r+50*n),i.lineWidth=4*n,i.strokeStyle="#bdc3c7",i.lineCap="round",i.lineJoin="round",i.setLineDash([5*n,8*n]),i.stroke(),i.setLineDash([])}function m0(t,r,n){a.push({x:t+50*n,y:r+50*n,hit:!1}),i.beginPath(),i.moveTo(t+30*n,r+10*n),i.lineTo(t+30*n,r+70*n),i.bezierCurveTo(t+30*n,r+95*n,t+70*n,r+95*n,t+70*n,r+70*n),i.lineTo(t+70*n,r+10*n),i.moveTo(t+95*n,r+50*n),i.lineTo(t+95*n,r+80*n),i.bezierCurveTo(t+95*n,r+95*n,t+125*n,r+95*n,t+125*n,r+80*n),i.lineTo(t+125*n,r+50*n),i.moveTo(t+125*n,r+50*n),i.lineTo(t+125*n,r+90*n),i.lineWidth=4*n,i.strokeStyle="#bdc3c7",i.lineCap="round",i.lineJoin="round",i.setLineDash([5*n,8*n]),i.stroke(),i.setLineDash([])}function v0(t,r,n){a.push({x:t+50*n,y:r+50*n,hit:!1}),i.beginPath(),i.moveTo(t+30*n,r+10*n),i.lineTo(t+50*n,r+90*n),i.lineTo(t+70*n,r+10*n),i.moveTo(t+100*n,r+50*n),i.lineTo(t+110*n,r+90*n),i.lineTo(t+120*n,r+50*n),i.lineWidth=4*n,i.strokeStyle="#bdc3c7",i.lineCap="round",i.lineJoin="round",i.setLineDash([5*n,8*n]),i.stroke(),i.setLineDash([])}function T0(t,r,n){a.push({x:t+50*n,y:r+50*n,hit:!1}),i.beginPath(),i.moveTo(t+20*n,r+10*n),i.lineTo(t+35*n,r+90*n),i.lineTo(t+50*n,r+40*n),i.lineTo(t+65*n,r+90*n),i.lineTo(t+80*n,r+10*n),i.moveTo(t+90*n,r+50*n),i.lineTo(t+100*n,r+90*n),i.lineTo(t+110*n,r+65*n),i.lineTo(t+120*n,r+90*n),i.lineTo(t+130*n,r+50*n),i.lineWidth=4*n,i.strokeStyle="#bdc3c7",i.lineCap="round",i.lineJoin="round",i.setLineDash([5*n,8*n]),i.stroke(),i.setLineDash([])}function M0(t,r,n){a.push({x:t+50*n,y:r+50*n,hit:!1}),i.beginPath(),i.moveTo(t+30*n,r+10*n),i.lineTo(t+70*n,r+90*n),i.moveTo(t+70*n,r+10*n),i.lineTo(t+30*n,r+90*n),i.moveTo(t+95*n,r+50*n),i.lineTo(t+125*n,r+90*n),i.moveTo(t+125*n,r+50*n),i.lineTo(t+95*n,r+90*n),i.lineWidth=4*n,i.strokeStyle="#bdc3c7",i.lineCap="round",i.lineJoin="round",i.setLineDash([5*n,8*n]),i.stroke(),i.setLineDash([])}function C0(t,r,n){a.push({x:t+50*n,y:r+50*n,hit:!1}),i.beginPath(),i.moveTo(t+30*n,r+10*n),i.lineTo(t+50*n,r+50*n),i.lineTo(t+70*n,r+10*n),i.moveTo(t+50*n,r+50*n),i.lineTo(t+50*n,r+90*n),i.moveTo(t+95*n,r+50*n),i.lineTo(t+110*n,r+90*n),i.moveTo(t+125*n,r+50*n),i.lineTo(t+95*n,r+115*n),i.lineWidth=4*n,i.strokeStyle="#bdc3c7",i.lineCap="round",i.lineJoin="round",i.setLineDash([5*n,8*n]),i.stroke(),i.setLineDash([])}function b0(t,r,n){a.push({x:t+50*n,y:r+50*n,hit:!1}),i.beginPath(),i.moveTo(t+30*n,r+10*n),i.lineTo(t+70*n,r+10*n),i.lineTo(t+30*n,r+90*n),i.lineTo(t+70*n,r+90*n),i.moveTo(t+95*n,r+50*n),i.lineTo(t+125*n,r+50*n),i.lineTo(t+95*n,r+90*n),i.lineTo(t+125*n,r+90*n),i.lineWidth=4*n,i.strokeStyle="#bdc3c7",i.lineCap="round",i.lineJoin="round",i.setLineDash([5*n,8*n]),i.stroke(),i.setLineDash([])}const l=[{id:"A",word:"Alpukat",emoji:"🥑",drawFunction:Z,svgContent:`
      <svg class="tracing-animation" viewBox="0 0 150 100" width="100%" height="80px">
        <path class="guide-path" d="M 50 10 L 20 90 M 50 10 L 80 90 M 35 60 L 65 60" />
        <path class="guide-path" d="M 125 45 A 20 20 0 1 0 125 85 M 125 45 L 125 85" />
        <path class="trace-path" d="M 50 10 L 20 90 M 50 10 L 80 90 M 35 60 L 65 60" />
        <path class="trace-path-small" d="M 125 45 A 20 20 0 1 0 125 85 M 125 45 L 125 85" />
      </svg>
    `},{id:"B",word:"Buku",emoji:"📘",drawFunction:$,svgContent:`
      <svg class="tracing-animation" viewBox="0 0 150 100" width="100%" height="80px">
        <path class="guide-path" d="M 30 10 L 30 90 M 30 10 C 70 10 70 50 30 50 M 30 50 C 80 50 80 90 30 90" />
        <path class="guide-path" d="M 95 10 L 95 90 M 95 50 A 20 20 0 1 1 95 90" />
        <path class="trace-path" d="M 30 10 L 30 90 M 30 10 C 70 10 70 50 30 50 M 30 50 C 80 50 80 90 30 90" />
        <path class="trace-path-small" d="M 95 10 L 95 90 M 95 50 A 20 20 0 1 1 95 90" />
      </svg>
    `},{id:"C",word:"Ceri",emoji:"🍒",drawFunction:_,svgContent:`
      <svg class="tracing-animation" viewBox="0 0 150 100" width="100%" height="80px">
        <path class="guide-path" d="M 80 25 A 35 35 0 1 0 80 75" />
        <path class="guide-path" d="M 130 55 A 20 20 0 1 0 130 85" />
        <path class="trace-path" d="M 80 25 A 35 35 0 1 0 80 75" />
        <path class="trace-path-small" d="M 130 55 A 20 20 0 1 0 130 85" />
      </svg>
    `},{id:"D",word:"Domba",emoji:"🐑",drawFunction:s,svgContent:`
      <svg class="tracing-animation" viewBox="0 0 150 100" width="100%" height="80px">
        <path class="guide-path" d="M 25 10 L 25 90 M 25 10 C 70 10 70 90 25 90" />
        <path class="guide-path" d="M 115 10 L 115 90 M 115 50 A 20 20 0 1 0 115 90" />
        <path class="trace-path" d="M 25 10 L 25 90 M 25 10 C 70 10 70 90 25 90" />
        <path class="trace-path-small" d="M 115 10 L 115 90 M 115 50 A 20 20 0 1 0 115 90" />
      </svg>
    `},{id:"E",word:"Elang",emoji:"🦅",drawFunction:X,svgContent:`
      <svg class="tracing-animation" viewBox="0 0 150 100" width="100%" height="80px">
        <path class="guide-path" d="M 30 10 L 30 90 M 30 10 L 70 10 M 30 50 L 60 50 M 30 90 L 70 90" />
        <path class="guide-path" d="M 85 65 L 115 65 C 115 30 85 30 85 65 C 85 95 115 95 115 85" />
        <path class="trace-path" d="M 30 10 L 30 90 M 30 10 L 70 10 M 30 50 L 60 50 M 30 90 L 70 90" />
        <path class="trace-path-small" d="M 85 65 L 115 65 C 115 30 85 30 85 65 C 85 95 115 95 115 85" />
      </svg>
    `},{id:"F",word:"Foto",emoji:"📸",drawFunction:Y,svgContent:`
      <svg class="tracing-animation" viewBox="0 0 150 100" width="100%" height="80px">
        <path class="guide-path" d="M 30 10 L 30 90 M 30 10 L 70 10 M 30 50 L 60 50" />
        <path class="guide-path" d="M 110 20 C 110 10 95 10 95 30 L 95 90 M 85 50 L 105 50" />
        <path class="trace-path" d="M 30 10 L 30 90 M 30 10 L 70 10 M 30 50 L 60 50" />
        <path class="trace-path-small" d="M 110 20 C 110 10 95 10 95 30 L 95 90 M 85 50 L 105 50" />
      </svg>
    `},{id:"G",word:"Gajah",emoji:"🐘",drawFunction:f,svgContent:`
      <svg class="tracing-animation" viewBox="0 0 150 120" width="100%" height="80px">
        <path class="guide-path" d="M 80 25 A 35 35 0 1 0 80 75 L 80 50 L 50 50" />
        <path class="guide-path" d="M 125 45 A 20 20 0 1 0 125 85 M 125 45 L 125 105 C 125 120 105 120 105 105" />
        <path class="trace-path" d="M 80 25 A 35 35 0 1 0 80 75 L 80 50 L 50 50" />
        <path class="trace-path-small" d="M 125 45 A 20 20 0 1 0 125 85 M 125 45 L 125 105 C 125 120 105 120 105 105" />
      </svg>
    `},{id:"H",word:"Harimau",emoji:"🐅",drawFunction:n0,svgContent:`
      <svg class="tracing-animation" viewBox="0 0 150 100" width="100%" height="80px">
        <path class="guide-path" d="M 30 10 L 30 90 M 70 10 L 70 90 M 30 50 L 70 50" />
        <path class="guide-path" d="M 95 10 L 95 90 M 95 50 C 125 50 125 90 125 90" />
        <path class="trace-path" d="M 30 10 L 30 90 M 70 10 L 70 90 M 30 50 L 70 50" />
        <path class="trace-path-small" d="M 95 10 L 95 90 M 95 50 C 125 50 125 90 125 90" />
      </svg>
    `},{id:"I",word:"Ikan",emoji:"🐟",drawFunction:i0,svgContent:`
      <svg class="tracing-animation" viewBox="0 0 150 100" width="100%" height="80px">
        <path class="guide-path" d="M 50 10 L 50 90 M 35 10 L 65 10 M 35 90 L 65 90" />
        <path class="guide-path" d="M 110 50 L 110 90 M 110 30 A 2 2 0 1 0 110.1 30" />
        <path class="trace-path" d="M 50 10 L 50 90 M 35 10 L 65 10 M 35 90 L 65 90" />
        <path class="trace-path-small" d="M 110 50 L 110 90 M 110 30 A 2 2 0 1 0 110.1 30" />
      </svg>
    `},{id:"J",word:"Jerapah",emoji:"🦒",drawFunction:t0,svgContent:`
      <svg class="tracing-animation" viewBox="0 0 150 110" width="100%" height="80px">
        <path class="guide-path" d="M 30 10 L 70 10 M 50 10 L 50 75 A 10 10 0 0 1 30 75" />
        <path class="guide-path" d="M 95 50 L 95 105 A 10 10 0 0 1 75 105 M 95 30 A 2 2 0 1 0 95.1 30" />
        <path class="trace-path" d="M 30 10 L 70 10 M 50 10 L 50 75 A 10 10 0 0 1 30 75" />
        <path class="trace-path-small" d="M 95 50 L 95 105 A 10 10 0 0 1 75 105 M 95 30 A 2 2 0 1 0 95.1 30" />
      </svg>
    `},{id:"K",word:"Kuda",emoji:"🐎",drawFunction:r0,svgContent:`
      <svg class="tracing-animation" viewBox="0 0 150 100" width="100%" height="80px">
        <path class="guide-path" d="M 30 10 L 30 90 M 70 10 L 30 50 M 30 50 L 70 90" />
        <path class="guide-path" d="M 90 10 L 90 90 M 120 50 L 90 70 M 90 70 L 120 90" />
        <path class="trace-path" d="M 30 10 L 30 90 M 70 10 L 30 50 M 30 50 L 70 90" />
        <path class="trace-path-small" d="M 90 10 L 90 90 M 120 50 L 90 70 M 90 70 L 120 90" />
      </svg>
    `},{id:"L",word:"Lebah",emoji:"🐝",drawFunction:d0,svgContent:`
      <svg class="tracing-animation" viewBox="0 0 150 100" width="100%" height="80px">
        <path class="guide-path" d="M 30 10 L 30 90 M 30 90 L 70 90" />
        <path class="guide-path" d="M 100 10 L 100 90" />
        <path class="trace-path" d="M 30 10 L 30 90 M 30 90 L 70 90" />
        <path class="trace-path-small" d="M 100 10 L 100 90" />
      </svg>
    `},{id:"M",word:"Monyet",emoji:"🐒",drawFunction:h0,svgContent:`
      <svg class="tracing-animation" viewBox="0 0 150 100" width="100%" height="80px">
        <path class="guide-path" d="M 20 90 L 20 10 M 20 10 L 45 50 M 45 50 L 70 10 M 70 10 L 70 90" />
        <path class="guide-path" d="M 85 50 L 85 90 M 85 50 C 95 35 105 50 105 90 M 105 50 C 115 35 125 50 125 90" />
        <path class="trace-path" d="M 20 90 L 20 10 M 20 10 L 45 50 M 45 50 L 70 10 M 70 10 L 70 90" />
        <path class="trace-path-small" d="M 85 50 L 85 90 M 85 50 C 95 35 105 50 105 90 M 105 50 C 115 35 125 50 125 90" />
      </svg>
    `},{id:"N",word:"Nanas",emoji:"🍍",drawFunction:o0,svgContent:`
      <svg class="tracing-animation" viewBox="0 0 150 100" width="100%" height="80px">
        <path class="guide-path" d="M 25 90 L 25 10 M 25 10 L 65 90 M 65 90 L 65 10" />
        <path class="guide-path" d="M 95 50 L 95 90 M 95 50 C 110 35 125 50 125 90" />
        <path class="trace-path" d="M 25 90 L 25 10 M 25 10 L 65 90 M 65 90 L 65 10" />
        <path class="trace-path-small" d="M 95 50 L 95 90 M 95 50 C 110 35 125 50 125 90" />
      </svg>
    `},{id:"O",word:"Obat",emoji:"💊",drawFunction:u0,svgContent:`
      <svg class="tracing-animation" viewBox="0 0 150 100" width="100%" height="80px">
        <path class="guide-path" d="M 40 16 A 34 34 0 1 0 40.1 16" />
        <path class="guide-path" d="M 112 52 A 18 18 0 1 0 112.1 52" />
        <path class="trace-path" d="M 40 16 A 34 34 0 1 0 40.1 16" />
        <path class="trace-path-small" d="M 112 52 A 18 18 0 1 0 112.1 52" />
      </svg>
    `},{id:"P",word:"Panda",emoji:"🐼",drawFunction:a0,svgContent:`
      <svg class="tracing-animation" viewBox="0 0 150 120" width="100%" height="80px">
        <path class="guide-path" d="M 30 10 L 30 90 M 30 10 C 80 10 80 50 30 50" />
        <path class="guide-path" d="M 95 50 L 95 115 M 95 50 C 130 50 130 90 95 90" />
        <path class="trace-path" d="M 30 10 L 30 90 M 30 10 C 80 10 80 50 30 50" />
        <path class="trace-path-small" d="M 95 50 L 95 115 M 95 50 C 130 50 130 90 95 90" />
      </svg>
    `},{id:"Q",word:"Quran",emoji:"📖",drawFunction:e0,svgContent:`
      <svg class="tracing-animation" viewBox="0 0 150 120" width="100%" height="80px">
        <path class="guide-path" d="M 40 16 A 34 34 0 1 0 40.1 16 M 48 62 L 68 88" />
        <path class="guide-path" d="M 122 70 A 18 18 0 1 0 122.1 70 M 122 50 L 122 115 L 130 105" />
        <path class="trace-path" d="M 40 16 A 34 34 0 1 0 40.1 16 M 48 62 L 68 88" />
        <path class="trace-path-small" d="M 122 70 A 18 18 0 1 0 122.1 70 M 122 50 L 122 115 L 130 105" />
      </svg>
    `},{id:"R",word:"Rusa",emoji:"🦌",drawFunction:p0,svgContent:`
      <svg class="tracing-animation" viewBox="0 0 150 100" width="100%" height="80px">
        <path class="guide-path" d="M 30 10 L 30 90 M 30 10 C 80 10 80 50 30 50 M 45 50 L 75 90" />
        <path class="guide-path" d="M 95 50 L 95 90 M 95 65 A 15 15 0 0 1 115 50" />
        <path class="trace-path" d="M 30 10 L 30 90 M 30 10 C 80 10 80 50 30 50 M 45 50 L 75 90" />
        <path class="trace-path-small" d="M 95 50 L 95 90 M 95 65 A 15 15 0 0 1 115 50" />
      </svg>
    `},{id:"S",word:"Sapi",emoji:"🐄",drawFunction:g0,svgContent:`
      <svg class="tracing-animation" viewBox="0 0 150 100" width="100%" height="80px">
        <path class="guide-path" d="M 70 25 C 60 5 30 5 30 25 C 30 50 70 45 70 70 C 70 95 35 95 30 75" />
        <path class="guide-path" d="M 120 60 C 115 45 90 45 90 60 C 90 75 120 70 120 80 C 120 95 95 95 90 85" />
        <path class="trace-path" d="M 70 25 C 60 5 30 5 30 25 C 30 50 70 45 70 70 C 70 95 35 95 30 75" />
        <path class="trace-path-small" d="M 120 60 C 115 45 90 45 90 60 C 90 75 120 70 120 80 C 120 95 95 95 90 85" />
      </svg>
    `},{id:"T",word:"Tikus",emoji:"🐭",drawFunction:L0,svgContent:`
      <svg class="tracing-animation" viewBox="0 0 150 100" width="100%" height="80px">
        <path class="guide-path" d="M 25 10 L 75 10 M 50 10 L 50 90" />
        <path class="guide-path" d="M 110 20 L 110 80 A 10 10 0 0 0 120 90 M 100 50 L 120 50" />
        <path class="trace-path" d="M 25 10 L 75 10 M 50 10 L 50 90" />
        <path class="trace-path-small" d="M 110 20 L 110 80 A 10 10 0 0 0 120 90 M 100 50 L 120 50" />
      </svg>
    `},{id:"U",word:"Ular",emoji:"🐍",drawFunction:m0,svgContent:`
      <svg class="tracing-animation" viewBox="0 0 150 100" width="100%" height="80px">
        <path class="guide-path" d="M 30 10 L 30 70 C 30 95 70 95 70 70 L 70 10" />
        <path class="guide-path" d="M 95 50 L 95 80 C 95 95 125 95 125 80 L 125 50 M 125 50 L 125 90" />
        <path class="trace-path" d="M 30 10 L 30 70 C 30 95 70 95 70 70 L 70 10" />
        <path class="trace-path-small" d="M 95 50 L 95 80 C 95 95 125 95 125 80 L 125 50 M 125 50 L 125 90" />
      </svg>
    `},{id:"V",word:"Vas",emoji:"🏺",drawFunction:v0,svgContent:`
      <svg class="tracing-animation" viewBox="0 0 150 100" width="100%" height="80px">
        <path class="guide-path" d="M 30 10 L 50 90 L 70 10" />
        <path class="guide-path" d="M 100 50 L 110 90 L 120 50" />
        <path class="trace-path" d="M 30 10 L 50 90 L 70 10" />
        <path class="trace-path-small" d="M 100 50 L 110 90 L 120 50" />
      </svg>
    `},{id:"W",word:"Wortel",emoji:"🥕",drawFunction:T0,svgContent:`
      <svg class="tracing-animation" viewBox="0 0 150 100" width="100%" height="80px">
        <path class="guide-path" d="M 20 10 L 35 90 L 50 40 L 65 90 L 80 10" />
        <path class="guide-path" d="M 90 50 L 100 90 L 110 65 L 120 90 L 130 50" />
        <path class="trace-path" d="M 20 10 L 35 90 L 50 40 L 65 90 L 80 10" />
        <path class="trace-path-small" d="M 90 50 L 100 90 L 110 65 L 120 90 L 130 50" />
      </svg>
    `},{id:"X",word:"Xilofon",emoji:"🎵",drawFunction:M0,svgContent:`
      <svg class="tracing-animation" viewBox="0 0 150 100" width="100%" height="80px">
        <path class="guide-path" d="M 30 10 L 70 90 M 70 10 L 30 90" />
        <path class="guide-path" d="M 95 50 L 125 90 M 125 50 L 95 90" />
        <path class="trace-path" d="M 30 10 L 70 90 M 70 10 L 30 90" />
        <path class="trace-path-small" d="M 95 50 L 125 90 M 125 50 L 95 90" />
      </svg>
    `},{id:"Y",word:"Yoyo",emoji:"🪀",drawFunction:C0,svgContent:`
      <svg class="tracing-animation" viewBox="0 0 150 120" width="100%" height="80px">
        <path class="guide-path" d="M 30 10 L 50 50 L 70 10 M 50 50 L 50 90" />
        <path class="guide-path" d="M 95 50 L 110 90 M 125 50 L 95 115" />
        <path class="trace-path" d="M 30 10 L 50 50 L 70 10 M 50 50 L 50 90" />
        <path class="trace-path-small" d="M 95 50 L 110 90 M 125 50 L 95 115" />
      </svg>
    `},{id:"Z",word:"Zebra",emoji:"🦓",drawFunction:b0,svgContent:`
      <svg class="tracing-animation" viewBox="0 0 150 100" width="100%" height="80px">
        <path class="guide-path" d="M 30 10 L 70 10 L 30 90 L 70 90" />
        <path class="guide-path" d="M 95 50 L 125 50 L 95 90 L 125 90" />
        <path class="trace-path" d="M 30 10 L 70 10 L 30 90 L 70 90" />
        <path class="trace-path-small" d="M 95 50 L 125 50 L 95 90 L 125 90" />
      </svg>
    `}];let C=0;function F(){const t=l[C];O.textContent=t.id,q.textContent=t.id,N.textContent=t.word,H.textContent=t.emoji,K.innerHTML=t.svgContent,Q.textContent=C+1,G.style.visibility=C>0?"visible":"hidden",j.style.visibility=C<l.length-1?"visible":"hidden",I()}let A=!1;function I(){i.clearRect(0,0,g.width,g.height),a=[],A=!1;const t=l[C],r=1.2,n=190,h=130,d=Math.floor((g.width-20)/n),o=Math.floor((g.height-20)/h),u=d*n,p=o*h,L=(g.width-u)/2+30,v=(g.height-p)/2+10;for(let M=0;M<o;M++)for(let D=0;D<d;D++)t.drawFunction(L+D*n,v+M*h,r);k.textContent=`Yuk, tebalkan semua huruf ${t.id}!`,k.style.color="#27ae60"}window.addEventListener("resize",()=>{g.width=g.parentElement.clientWidth,g.height=g.parentElement.clientHeight,I()});function J(t){const r=g.getBoundingClientRect(),n=t.clientX||t.touches&&t.touches[0].clientX,h=t.clientY||t.touches&&t.touches[0].clientY;return{x:n-r.left,y:h-r.top}}function z(t){E=!0;const r=J(t);i.beginPath(),i.moveTo(r.x,r.y),S(t)}function B(){E=!1,i.beginPath(),w==="pencil"&&y0()}function S(t){if(!E)return;const r=J(t);i.lineWidth=w==="pencil"?8:25,i.lineCap="round",w==="eraser"?(i.globalCompositeOperation="destination-out",i.strokeStyle="rgba(0,0,0,1)"):(i.globalCompositeOperation="source-over",i.strokeStyle=U),i.lineTo(r.x,r.y),i.stroke(),i.beginPath(),i.moveTo(r.x,r.y),w==="pencil"&&w0(r.x,r.y)}function w0(t,r){a.forEach(h=>{Math.hypot(h.x-t,h.y-r)<25&&(h.hit=!0)})}function y0(){if(a.length===0||A)return;const t=a.length;a.filter(h=>h.hit).length/t*100>50&&(A=!0,k.textContent="Wah hebat! Kamu berhasil! 🎉",k.style.color="#27ae60",A0())}g.addEventListener("mousedown",z);g.addEventListener("mousemove",S);g.addEventListener("mouseup",B);g.addEventListener("mouseout",B);g.addEventListener("touchstart",t=>{t.preventDefault(),z(t)},{passive:!1});g.addEventListener("touchmove",t=>{t.preventDefault(),S(t)},{passive:!1});g.addEventListener("touchend",B);x.addEventListener("click",()=>{w="pencil",x.classList.add("active"),c.classList.remove("active")});c.addEventListener("click",()=>{w="eraser",c.classList.add("active"),x.classList.remove("active")});V.addEventListener("click",()=>{I(),w="pencil",x.classList.add("active"),c.classList.remove("active")});j.addEventListener("click",()=>{C<l.length-1&&(C++,F())});G.addEventListener("click",()=>{C>0&&(C--,F())});const m=document.getElementById("btn-sound")||document.querySelector(".sound-btn");let e=null,T=null,y=!1,P=null;const b={C3:130.81,D3:146.83,E3:164.81,F3:174.61,G3:196,A3:220,B3:246.94,C4:261.63,D4:293.66,E4:329.63,F4:349.23,G4:392,A4:440,B4:493.88,C5:523.25,D5:587.33,E5:659.25,G5:783.99,C6:1046.5},x0=[{note:"C4",dur:1,bass:"C3"},{note:"C4",dur:1},{note:"G4",dur:1},{note:"G4",dur:1},{note:"A4",dur:1,bass:"F3"},{note:"A4",dur:1},{note:"G4",dur:2},{note:"F4",dur:1,bass:"F3"},{note:"F4",dur:1},{note:"E4",dur:1},{note:"E4",dur:1},{note:"D4",dur:1,bass:"G3"},{note:"D4",dur:1},{note:"C4",dur:2,bass:"C3"},{note:"G4",dur:1,bass:"C3"},{note:"G4",dur:1},{note:"F4",dur:1},{note:"F4",dur:1},{note:"E4",dur:1,bass:"G3"},{note:"E4",dur:1},{note:"D4",dur:2},{note:"G4",dur:1,bass:"C3"},{note:"G4",dur:1},{note:"F4",dur:1},{note:"F4",dur:1},{note:"E4",dur:1,bass:"G3"},{note:"E4",dur:1},{note:"D4",dur:2},{note:"C4",dur:1,bass:"C3"},{note:"C4",dur:1},{note:"G4",dur:1},{note:"G4",dur:1},{note:"A4",dur:1,bass:"F3"},{note:"A4",dur:1},{note:"G4",dur:2},{note:"F4",dur:1,bass:"F3"},{note:"F4",dur:1},{note:"E4",dur:1},{note:"E4",dur:1},{note:"D4",dur:1,bass:"G3"},{note:"D4",dur:1},{note:"C4",dur:2,bass:"C3"}];function c0(){if(!e){const t=window.AudioContext||window.webkitAudioContext;e=new t,T=e.createGain(),T.gain.setValueAtTime(.18,e.currentTime),T.connect(e.destination)}e.state==="suspended"&&e.resume()}function W(t,r,n,h=!1){if(!e||!y)return;const d=e.createOscillator(),o=e.createOscillator(),u=e.createGain(),p=e.createBiquadFilter();d.type=h?"triangle":"sine",o.type="triangle",d.frequency.setValueAtTime(t,r),o.frequency.setValueAtTime(t*2,r),p.type="lowpass",p.frequency.setValueAtTime(h?350:2e3,r);const L=h?.09:.13;if(u.gain.setValueAtTime(1e-4,r),u.gain.linearRampToValueAtTime(L,r+.015),u.gain.exponentialRampToValueAtTime(1e-4,r+n*.9),d.connect(p),!h){const v=e.createGain();v.gain.setValueAtTime(.025,r),v.gain.exponentialRampToValueAtTime(1e-4,r+n*.4),o.connect(v),v.connect(p),o.start(r),o.stop(r+n)}p.connect(u),u.connect(T),d.start(r),d.stop(r+n)}function R(){if(!y||!e)return;const t=.52;let r=e.currentTime+.05;x0.forEach(h=>{const d=h.dur*t;h.note&&b[h.note]&&W(b[h.note],r,d),h.bass&&b[h.bass]&&W(b[h.bass],r,d*1.5,!0),r+=d});const n=(r-e.currentTime)*1e3;P=setTimeout(()=>{y&&R()},Math.max(100,n-200))}function k0(){c0(),y=!0,T&&(T.gain.cancelScheduledValues(e.currentTime),T.gain.setValueAtTime(.18,e.currentTime)),R(),m&&(m.textContent="🔊",m.classList.add("playing"),m.classList.remove("muted"),m.title="Musik Aktif (Klik untuk Matikan)")}function l0(){y=!1,P&&clearTimeout(P),T&&e&&(T.gain.setValueAtTime(T.gain.value,e.currentTime),T.gain.linearRampToValueAtTime(1e-4,e.currentTime+.3)),m&&(m.textContent="🔇",m.classList.remove("playing"),m.classList.add("muted"),m.title="Musik Mati (Klik untuk Nyalakan)")}function D0(){y?l0():k0()}m&&(m.textContent="🔇",m.classList.add("muted"),m.title="Klik untuk Menyalakan Musik Anak",m.addEventListener("click",D0));function A0(){if(!e||e.state==="suspended"||!y)return;const t=e.currentTime;[b.C5,b.E5,b.G5,b.C6].forEach((n,h)=>{const d=t+h*.12,o=e.createOscillator(),u=e.createGain();o.type="sine",o.frequency.setValueAtTime(n,d),u.gain.setValueAtTime(.001,d),u.gain.linearRampToValueAtTime(.14,d+.02),u.gain.exponentialRampToValueAtTime(1e-4,d+.35),o.connect(u),u.connect(e.destination),o.start(d),o.stop(d+.4)})}setTimeout(()=>{g.width=g.parentElement.clientWidth,g.height=g.parentElement.clientHeight,F()},100);
