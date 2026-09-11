(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const h of document.querySelectorAll('link[rel="modulepreload"]'))d(h);new MutationObserver(h=>{for(const o of h)if(o.type==="childList")for(const u of o.addedNodes)u.tagName==="LINK"&&u.rel==="modulepreload"&&d(u)}).observe(document,{childList:!0,subtree:!0});function n(h){const o={};return h.integrity&&(o.integrity=h.integrity),h.referrerPolicy&&(o.referrerPolicy=h.referrerPolicy),h.crossOrigin==="use-credentials"?o.credentials="include":h.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function d(h){if(h.ep)return;h.ep=!0;const o=n(h);fetch(h.href,o)}})();const g=document.getElementById("drawing-canvas"),i=g.getContext("2d"),y=document.getElementById("btn-pencil"),b=document.getElementById("btn-eraser"),R=document.getElementById("btn-clear"),x=document.getElementById("feedback-message"),O=document.getElementById("ui-letter"),N=document.getElementById("ui-letter-desc"),q=document.getElementById("ui-word"),K=document.getElementById("ui-emoji"),H=document.getElementById("ui-svg-container"),V=document.getElementById("ui-score"),W=document.getElementById("btn-next"),j=document.getElementById("btn-prev");let B=!1,C="pencil";const G="#1f618d";let p=[];function U(t,r,n){const d={x:20*n,y:70*n},h={x:40*n,y:10*n},o={x:60*n,y:70*n},u={x:30*n,y:45*n},a={x:50*n,y:45*n};p.push({x:t+40*n,y:r+40*n,hit:!1}),i.beginPath(),i.moveTo(t+h.x,r+h.y),i.lineTo(t+d.x,r+d.y),i.moveTo(t+h.x,r+h.y),i.lineTo(t+o.x,r+o.y),i.moveTo(t+u.x,r+u.y),i.lineTo(t+a.x,r+a.y);const e=90*n,w=55*n,v=15*n;i.moveTo(t+e+v,r+w),i.arc(t+e,r+w,v,0,Math.PI*2),i.moveTo(t+e+v,r+w-v),i.lineTo(t+e+v,r+w+v),i.lineWidth=4*n,i.strokeStyle="#bdc3c7",i.lineCap="round",i.lineJoin="round",i.setLineDash([5*n,8*n]),i.stroke(),i.setLineDash([])}function Q(t,r,n){p.push({x:t+40*n,y:r+40*n,hit:!1}),i.beginPath();const d=30*n;i.moveTo(t+d,r+10*n),i.lineTo(t+d,r+90*n),i.moveTo(t+d,r+10*n),i.bezierCurveTo(t+70*n,r+10*n,t+70*n,r+50*n,t+d,r+50*n),i.moveTo(t+d,r+50*n),i.bezierCurveTo(t+80*n,r+50*n,t+80*n,r+90*n,t+d,r+90*n);const h=90*n;i.moveTo(t+h,r+10*n),i.lineTo(t+h,r+90*n),i.moveTo(t+h+30*n,r+70*n),i.arc(t+h+15*n,r+70*n,15*n,0,Math.PI*2),i.lineWidth=4*n,i.strokeStyle="#bdc3c7",i.lineCap="round",i.lineJoin="round",i.setLineDash([5*n,8*n]),i.stroke(),i.setLineDash([])}function Z(t,r,n){p.push({x:t+40*n,y:r+40*n,hit:!1}),i.beginPath();const d=50*n,h=50*n,o=35*n;i.arc(t+d,r+h,o,-Math.PI/4,Math.PI/4,!0);const u=110*n,a=70*n,e=20*n;i.moveTo(t+u+e*Math.cos(-Math.PI/4),r+a+e*Math.sin(-Math.PI/4)),i.arc(t+u,r+a,e,-Math.PI/4,Math.PI/4,!0),i.lineWidth=4*n,i.strokeStyle="#bdc3c7",i.lineCap="round",i.lineJoin="round",i.setLineDash([5*n,8*n]),i.stroke(),i.setLineDash([])}function $(t,r,n){p.push({x:t+40*n,y:r+40*n,hit:!1}),i.beginPath();const d=25*n;i.moveTo(t+d,r+10*n),i.lineTo(t+d,r+90*n),i.moveTo(t+d,r+10*n),i.bezierCurveTo(t+70*n,r+10*n,t+70*n,r+90*n,t+d,r+90*n);const h=115*n;i.moveTo(t+h,r+10*n),i.lineTo(t+h,r+90*n);const o=20*n,u=t+h-o,a=r+70*n;i.moveTo(u+o,a),i.arc(u,a,o,0,Math.PI*2),i.lineWidth=4*n,i.strokeStyle="#bdc3c7",i.lineCap="round",i.lineJoin="round",i.setLineDash([5*n,8*n]),i.stroke(),i.setLineDash([])}function _(t,r,n){p.push({x:t+40*n,y:r+40*n,hit:!1}),i.beginPath();const d=30*n;i.moveTo(t+d,r+10*n),i.lineTo(t+d,r+90*n),i.moveTo(t+d,r+10*n),i.lineTo(t+70*n,r+10*n),i.moveTo(t+d,r+50*n),i.lineTo(t+60*n,r+50*n),i.moveTo(t+d,r+90*n),i.lineTo(t+70*n,r+90*n);const h=100*n;i.moveTo(t+h-15*n,r+65*n),i.lineTo(t+h+15*n,r+65*n),i.bezierCurveTo(t+h+15*n,r+30*n,t+h-15*n,r+30*n,t+h-15*n,r+65*n),i.bezierCurveTo(t+h-15*n,r+95*n,t+h+15*n,r+95*n,t+h+15*n,r+85*n),i.lineWidth=4*n,i.strokeStyle="#bdc3c7",i.lineCap="round",i.lineJoin="round",i.setLineDash([5*n,8*n]),i.stroke(),i.setLineDash([])}function X(t,r,n){p.push({x:t+40*n,y:r+40*n,hit:!1}),i.beginPath();const d=30*n;i.moveTo(t+d,r+10*n),i.lineTo(t+d,r+90*n),i.moveTo(t+d,r+10*n),i.lineTo(t+70*n,r+10*n),i.moveTo(t+d,r+50*n),i.lineTo(t+60*n,r+50*n);const h=100*n;i.moveTo(t+h+10*n,r+20*n),i.bezierCurveTo(t+h+10*n,r+5*n,t+h-5*n,r+5*n,t+h-5*n,r+30*n),i.lineTo(t+h-5*n,r+90*n),i.moveTo(t+h-15*n,r+50*n),i.lineTo(t+h+5*n,r+50*n),i.lineWidth=4*n,i.strokeStyle="#bdc3c7",i.lineCap="round",i.lineJoin="round",i.setLineDash([5*n,8*n]),i.stroke(),i.setLineDash([])}function s(t,r,n){p.push({x:t+40*n,y:r+40*n,hit:!1}),i.beginPath();const d=50*n,h=50*n,o=35*n;i.arc(t+d,r+h,o,-Math.PI/4,Math.PI/4,!0),i.lineTo(t+d+o*Math.cos(Math.PI/4),r+50*n),i.lineTo(t+d,r+50*n);const u=110*n,a=65*n,e=15*n;i.moveTo(t+u+e,r+a),i.arc(t+u,r+a,e,0,Math.PI*2),i.moveTo(t+u+e,r+a-e),i.lineTo(t+u+e,r+105*n),i.bezierCurveTo(t+u+e,r+120*n,t+u-15*n,r+120*n,t+u-15*n,r+105*n),i.lineWidth=4*n,i.strokeStyle="#bdc3c7",i.lineCap="round",i.lineJoin="round",i.setLineDash([5*n,8*n]),i.stroke(),i.setLineDash([])}function Y(t,r,n){p.push({x:t+40*n,y:r+40*n,hit:!1}),i.beginPath();const d=30*n,h=70*n;i.moveTo(t+d,r+10*n),i.lineTo(t+d,r+90*n),i.moveTo(t+h,r+10*n),i.lineTo(t+h,r+90*n),i.moveTo(t+d,r+50*n),i.lineTo(t+h,r+50*n);const o=90*n;i.moveTo(t+o,r+10*n),i.lineTo(t+o,r+90*n),i.moveTo(t+o,r+50*n),i.bezierCurveTo(t+o+30*n,r+50*n,t+o+30*n,r+90*n,t+o+30*n,r+90*n),i.lineWidth=4*n,i.strokeStyle="#bdc3c7",i.lineCap="round",i.lineJoin="round",i.setLineDash([5*n,8*n]),i.stroke(),i.setLineDash([])}function f(t,r,n){p.push({x:t+40*n,y:r+40*n,hit:!1}),i.beginPath();const d=50*n;i.moveTo(t+d,r+10*n),i.lineTo(t+d,r+90*n),i.moveTo(t+d-15*n,r+10*n),i.lineTo(t+d+15*n,r+10*n),i.moveTo(t+d-15*n,r+90*n),i.lineTo(t+d+15*n,r+90*n);const h=110*n;i.moveTo(t+h,r+50*n),i.lineTo(t+h,r+90*n),i.moveTo(t+h,r+30*n),i.arc(t+h,r+30*n,2*n,0,Math.PI*2),i.lineWidth=4*n,i.strokeStyle="#bdc3c7",i.lineCap="round",i.lineJoin="round",i.setLineDash([5*n,8*n]),i.stroke(),i.setLineDash([])}function n0(t,r,n){p.push({x:t+40*n,y:r+40*n,hit:!1}),i.beginPath();const d=50*n;i.moveTo(t+30*n,r+10*n),i.lineTo(t+70*n,r+10*n),i.moveTo(t+d,r+10*n),i.lineTo(t+d,r+75*n),i.arc(t+40*n,r+75*n,10*n,0,Math.PI,!1);const h=95*n;i.moveTo(t+h,r+50*n),i.lineTo(t+h,r+105*n),i.arc(t+85*n,r+105*n,10*n,0,Math.PI,!1),i.moveTo(t+h,r+30*n),i.arc(t+h,r+30*n,2*n,0,Math.PI*2),i.lineWidth=4*n,i.strokeStyle="#bdc3c7",i.lineCap="round",i.lineJoin="round",i.setLineDash([5*n,8*n]),i.stroke(),i.setLineDash([])}function i0(t,r,n){p.push({x:t+40*n,y:r+40*n,hit:!1}),i.beginPath();const d=30*n;i.moveTo(t+d,r+10*n),i.lineTo(t+d,r+90*n),i.moveTo(t+70*n,r+10*n),i.lineTo(t+d,r+50*n),i.moveTo(t+d,r+50*n),i.lineTo(t+70*n,r+90*n);const h=90*n;i.moveTo(t+h,r+10*n),i.lineTo(t+h,r+90*n),i.moveTo(t+120*n,r+50*n),i.lineTo(t+h,r+70*n),i.moveTo(t+h,r+70*n),i.lineTo(t+120*n,r+90*n),i.lineWidth=4*n,i.strokeStyle="#bdc3c7",i.lineCap="round",i.lineJoin="round",i.setLineDash([5*n,8*n]),i.stroke(),i.setLineDash([])}function t0(t,r,n){p.push({x:t+40*n,y:r+40*n,hit:!1}),i.beginPath();const d=30*n;i.moveTo(t+d,r+10*n),i.lineTo(t+d,r+90*n),i.moveTo(t+d,r+90*n),i.lineTo(t+70*n,r+90*n);const h=100*n;i.moveTo(t+h,r+10*n),i.lineTo(t+h,r+90*n),i.lineWidth=4*n,i.strokeStyle="#bdc3c7",i.lineCap="round",i.lineJoin="round",i.setLineDash([5*n,8*n]),i.stroke(),i.setLineDash([])}function r0(t,r,n){p.push({x:t+40*n,y:r+40*n,hit:!1}),i.beginPath();const d=20*n,h=70*n;i.moveTo(t+d,r+90*n),i.lineTo(t+d,r+10*n),i.moveTo(t+d,r+10*n),i.lineTo(t+45*n,r+50*n),i.moveTo(t+45*n,r+50*n),i.lineTo(t+h,r+10*n),i.moveTo(t+h,r+10*n),i.lineTo(t+h,r+90*n);const o=85*n;i.moveTo(t+o,r+50*n),i.lineTo(t+o,r+90*n),i.moveTo(t+o,r+50*n),i.bezierCurveTo(t+95*n,r+35*n,t+105*n,r+50*n,t+105*n,r+90*n),i.moveTo(t+105*n,r+50*n),i.bezierCurveTo(t+115*n,r+35*n,t+125*n,r+50*n,t+125*n,r+90*n),i.lineWidth=4*n,i.strokeStyle="#bdc3c7",i.lineCap="round",i.lineJoin="round",i.setLineDash([5*n,8*n]),i.stroke(),i.setLineDash([])}function h0(t,r,n){p.push({x:t+40*n,y:r+40*n,hit:!1}),i.beginPath();const d=25*n,h=65*n;i.moveTo(t+d,r+90*n),i.lineTo(t+d,r+10*n),i.moveTo(t+d,r+10*n),i.lineTo(t+h,r+90*n),i.moveTo(t+h,r+90*n),i.lineTo(t+h,r+10*n);const o=95*n;i.moveTo(t+o,r+50*n),i.lineTo(t+o,r+90*n),i.moveTo(t+o,r+50*n),i.bezierCurveTo(t+110*n,r+35*n,t+125*n,r+50*n,t+125*n,r+90*n),i.lineWidth=4*n,i.strokeStyle="#bdc3c7",i.lineCap="round",i.lineJoin="round",i.setLineDash([5*n,8*n]),i.stroke(),i.setLineDash([])}function d0(t,r,n){p.push({x:t+40*n,y:r+50*n,hit:!1}),i.beginPath();const d=40*n,h=50*n,o=34*n;i.arc(t+d,r+h,o,0,Math.PI*2);const u=112*n,a=70*n,e=18*n;i.moveTo(t+u+e,r+a),i.arc(t+u,r+a,e,0,Math.PI*2),i.lineWidth=4*n,i.strokeStyle="#bdc3c7",i.lineCap="round",i.lineJoin="round",i.setLineDash([5*n,8*n]),i.stroke(),i.setLineDash([])}function o0(t,r,n){p.push({x:t+50*n,y:r+50*n,hit:!1}),i.beginPath();const d=30*n;i.moveTo(t+d,r+10*n),i.lineTo(t+d,r+90*n),i.moveTo(t+d,r+10*n),i.bezierCurveTo(t+80*n,r+10*n,t+80*n,r+50*n,t+d,r+50*n);const h=95*n;i.moveTo(t+h,r+50*n),i.lineTo(t+h,r+115*n),i.moveTo(t+h,r+50*n),i.bezierCurveTo(t+130*n,r+50*n,t+130*n,r+90*n,t+h,r+90*n),i.lineWidth=4*n,i.strokeStyle="#bdc3c7",i.lineCap="round",i.lineJoin="round",i.setLineDash([5*n,8*n]),i.stroke(),i.setLineDash([])}function u0(t,r,n){p.push({x:t+40*n,y:r+50*n,hit:!1}),i.beginPath();const d=40*n,h=50*n,o=34*n;i.arc(t+d,r+h,o,0,Math.PI*2),i.moveTo(t+48*n,r+62*n),i.lineTo(t+68*n,r+88*n);const u=122*n,a=18*n;i.moveTo(t+u,r+50*n),i.lineTo(t+u,r+115*n),i.lineTo(t+130*n,r+105*n),i.moveTo(t+u,r+70*n),i.arc(t+(u-a),r+70*n,a,0,Math.PI*2),i.lineWidth=4*n,i.strokeStyle="#bdc3c7",i.lineCap="round",i.lineJoin="round",i.setLineDash([5*n,8*n]),i.stroke(),i.setLineDash([])}function p0(t,r,n){p.push({x:t+50*n,y:r+50*n,hit:!1}),i.beginPath();const d=30*n;i.moveTo(t+d,r+10*n),i.lineTo(t+d,r+90*n),i.moveTo(t+d,r+10*n),i.bezierCurveTo(t+80*n,r+10*n,t+80*n,r+50*n,t+d,r+50*n),i.moveTo(t+45*n,r+50*n),i.lineTo(t+75*n,r+90*n);const h=95*n;i.moveTo(t+h,r+50*n),i.lineTo(t+h,r+90*n),i.moveTo(t+h,r+65*n),i.arc(t+h+15*n,r+65*n,15*n,Math.PI,1.5*Math.PI,!1),i.lineWidth=4*n,i.strokeStyle="#bdc3c7",i.lineCap="round",i.lineJoin="round",i.setLineDash([5*n,8*n]),i.stroke(),i.setLineDash([])}function a0(t,r,n){p.push({x:t+50*n,y:r+50*n,hit:!1}),i.beginPath(),i.moveTo(t+70*n,r+25*n),i.bezierCurveTo(t+60*n,r+5*n,t+30*n,r+5*n,t+30*n,r+25*n),i.bezierCurveTo(t+30*n,r+50*n,t+70*n,r+45*n,t+70*n,r+70*n),i.bezierCurveTo(t+70*n,r+95*n,t+35*n,r+95*n,t+30*n,r+75*n),i.moveTo(t+120*n,r+60*n),i.bezierCurveTo(t+115*n,r+45*n,t+90*n,r+45*n,t+90*n,r+60*n),i.bezierCurveTo(t+90*n,r+75*n,t+120*n,r+70*n,t+120*n,r+80*n),i.bezierCurveTo(t+120*n,r+95*n,t+95*n,r+95*n,t+90*n,r+85*n),i.lineWidth=4*n,i.strokeStyle="#bdc3c7",i.lineCap="round",i.lineJoin="round",i.setLineDash([5*n,8*n]),i.stroke(),i.setLineDash([])}function g0(t,r,n){p.push({x:t+50*n,y:r+50*n,hit:!1}),i.beginPath(),i.moveTo(t+25*n,r+10*n),i.lineTo(t+75*n,r+10*n),i.moveTo(t+50*n,r+10*n),i.lineTo(t+50*n,r+90*n);const d=110*n;i.moveTo(t+d,r+20*n),i.lineTo(t+d,r+80*n),i.arc(t+d+10*n,r+80*n,10*n,Math.PI,.5*Math.PI,!0),i.moveTo(t+100*n,r+50*n),i.lineTo(t+120*n,r+50*n),i.lineWidth=4*n,i.strokeStyle="#bdc3c7",i.lineCap="round",i.lineJoin="round",i.setLineDash([5*n,8*n]),i.stroke(),i.setLineDash([])}function e0(t,r,n){p.push({x:t+50*n,y:r+50*n,hit:!1}),i.beginPath(),i.moveTo(t+30*n,r+10*n),i.lineTo(t+30*n,r+70*n),i.bezierCurveTo(t+30*n,r+95*n,t+70*n,r+95*n,t+70*n,r+70*n),i.lineTo(t+70*n,r+10*n),i.moveTo(t+95*n,r+50*n),i.lineTo(t+95*n,r+80*n),i.bezierCurveTo(t+95*n,r+95*n,t+125*n,r+95*n,t+125*n,r+80*n),i.lineTo(t+125*n,r+50*n),i.moveTo(t+125*n,r+50*n),i.lineTo(t+125*n,r+90*n),i.lineWidth=4*n,i.strokeStyle="#bdc3c7",i.lineCap="round",i.lineJoin="round",i.setLineDash([5*n,8*n]),i.stroke(),i.setLineDash([])}function L0(t,r,n){p.push({x:t+50*n,y:r+50*n,hit:!1}),i.beginPath(),i.moveTo(t+30*n,r+10*n),i.lineTo(t+50*n,r+90*n),i.lineTo(t+70*n,r+10*n),i.moveTo(t+100*n,r+50*n),i.lineTo(t+110*n,r+90*n),i.lineTo(t+120*n,r+50*n),i.lineWidth=4*n,i.strokeStyle="#bdc3c7",i.lineCap="round",i.lineJoin="round",i.setLineDash([5*n,8*n]),i.stroke(),i.setLineDash([])}function v0(t,r,n){p.push({x:t+50*n,y:r+50*n,hit:!1}),i.beginPath(),i.moveTo(t+20*n,r+10*n),i.lineTo(t+35*n,r+90*n),i.lineTo(t+50*n,r+40*n),i.lineTo(t+65*n,r+90*n),i.lineTo(t+80*n,r+10*n),i.moveTo(t+90*n,r+50*n),i.lineTo(t+100*n,r+90*n),i.lineTo(t+110*n,r+65*n),i.lineTo(t+120*n,r+90*n),i.lineTo(t+130*n,r+50*n),i.lineWidth=4*n,i.strokeStyle="#bdc3c7",i.lineCap="round",i.lineJoin="round",i.setLineDash([5*n,8*n]),i.stroke(),i.setLineDash([])}function m0(t,r,n){p.push({x:t+50*n,y:r+50*n,hit:!1}),i.beginPath(),i.moveTo(t+30*n,r+10*n),i.lineTo(t+70*n,r+90*n),i.moveTo(t+70*n,r+10*n),i.lineTo(t+30*n,r+90*n),i.moveTo(t+95*n,r+50*n),i.lineTo(t+125*n,r+90*n),i.moveTo(t+125*n,r+50*n),i.lineTo(t+95*n,r+90*n),i.lineWidth=4*n,i.strokeStyle="#bdc3c7",i.lineCap="round",i.lineJoin="round",i.setLineDash([5*n,8*n]),i.stroke(),i.setLineDash([])}function M0(t,r,n){p.push({x:t+50*n,y:r+50*n,hit:!1}),i.beginPath(),i.moveTo(t+30*n,r+10*n),i.lineTo(t+50*n,r+50*n),i.lineTo(t+70*n,r+10*n),i.moveTo(t+50*n,r+50*n),i.lineTo(t+50*n,r+90*n),i.moveTo(t+95*n,r+50*n),i.lineTo(t+110*n,r+90*n),i.moveTo(t+125*n,r+50*n),i.lineTo(t+95*n,r+115*n),i.lineWidth=4*n,i.strokeStyle="#bdc3c7",i.lineCap="round",i.lineJoin="round",i.setLineDash([5*n,8*n]),i.stroke(),i.setLineDash([])}function T0(t,r,n){p.push({x:t+50*n,y:r+50*n,hit:!1}),i.beginPath(),i.moveTo(t+30*n,r+10*n),i.lineTo(t+70*n,r+10*n),i.lineTo(t+30*n,r+90*n),i.lineTo(t+70*n,r+90*n),i.moveTo(t+95*n,r+50*n),i.lineTo(t+125*n,r+50*n),i.lineTo(t+95*n,r+90*n),i.lineTo(t+125*n,r+90*n),i.lineWidth=4*n,i.strokeStyle="#bdc3c7",i.lineCap="round",i.lineJoin="round",i.setLineDash([5*n,8*n]),i.stroke(),i.setLineDash([])}const k=[{id:"A",word:"Alpukat",emoji:"🥑",drawFunction:U,svgContent:`
      <svg class="tracing-animation" viewBox="0 0 150 100" width="100%" height="80px">
        <path class="guide-path" d="M 50 10 L 20 90 M 50 10 L 80 90 M 35 60 L 65 60" />
        <path class="guide-path" d="M 125 45 A 20 20 0 1 0 125 85 M 125 45 L 125 85" />
        <path class="trace-path" d="M 50 10 L 20 90 M 50 10 L 80 90 M 35 60 L 65 60" />
        <path class="trace-path-small" d="M 125 45 A 20 20 0 1 0 125 85 M 125 45 L 125 85" />
      </svg>
    `},{id:"B",word:"Buku",emoji:"📘",drawFunction:Q,svgContent:`
      <svg class="tracing-animation" viewBox="0 0 150 100" width="100%" height="80px">
        <path class="guide-path" d="M 30 10 L 30 90 M 30 10 C 70 10 70 50 30 50 M 30 50 C 80 50 80 90 30 90" />
        <path class="guide-path" d="M 95 10 L 95 90 M 95 50 A 20 20 0 1 1 95 90" />
        <path class="trace-path" d="M 30 10 L 30 90 M 30 10 C 70 10 70 50 30 50 M 30 50 C 80 50 80 90 30 90" />
        <path class="trace-path-small" d="M 95 10 L 95 90 M 95 50 A 20 20 0 1 1 95 90" />
      </svg>
    `},{id:"C",word:"Ceri",emoji:"🍒",drawFunction:Z,svgContent:`
      <svg class="tracing-animation" viewBox="0 0 150 100" width="100%" height="80px">
        <path class="guide-path" d="M 80 25 A 35 35 0 1 0 80 75" />
        <path class="guide-path" d="M 130 55 A 20 20 0 1 0 130 85" />
        <path class="trace-path" d="M 80 25 A 35 35 0 1 0 80 75" />
        <path class="trace-path-small" d="M 130 55 A 20 20 0 1 0 130 85" />
      </svg>
    `},{id:"D",word:"Domba",emoji:"🐑",drawFunction:$,svgContent:`
      <svg class="tracing-animation" viewBox="0 0 150 100" width="100%" height="80px">
        <path class="guide-path" d="M 25 10 L 25 90 M 25 10 C 70 10 70 90 25 90" />
        <path class="guide-path" d="M 115 10 L 115 90 M 115 50 A 20 20 0 1 0 115 90" />
        <path class="trace-path" d="M 25 10 L 25 90 M 25 10 C 70 10 70 90 25 90" />
        <path class="trace-path-small" d="M 115 10 L 115 90 M 115 50 A 20 20 0 1 0 115 90" />
      </svg>
    `},{id:"E",word:"Elang",emoji:"🦅",drawFunction:_,svgContent:`
      <svg class="tracing-animation" viewBox="0 0 150 100" width="100%" height="80px">
        <path class="guide-path" d="M 30 10 L 30 90 M 30 10 L 70 10 M 30 50 L 60 50 M 30 90 L 70 90" />
        <path class="guide-path" d="M 85 65 L 115 65 C 115 30 85 30 85 65 C 85 95 115 95 115 85" />
        <path class="trace-path" d="M 30 10 L 30 90 M 30 10 L 70 10 M 30 50 L 60 50 M 30 90 L 70 90" />
        <path class="trace-path-small" d="M 85 65 L 115 65 C 115 30 85 30 85 65 C 85 95 115 95 115 85" />
      </svg>
    `},{id:"F",word:"Foto",emoji:"📸",drawFunction:X,svgContent:`
      <svg class="tracing-animation" viewBox="0 0 150 100" width="100%" height="80px">
        <path class="guide-path" d="M 30 10 L 30 90 M 30 10 L 70 10 M 30 50 L 60 50" />
        <path class="guide-path" d="M 110 20 C 110 10 95 10 95 30 L 95 90 M 85 50 L 105 50" />
        <path class="trace-path" d="M 30 10 L 30 90 M 30 10 L 70 10 M 30 50 L 60 50" />
        <path class="trace-path-small" d="M 110 20 C 110 10 95 10 95 30 L 95 90 M 85 50 L 105 50" />
      </svg>
    `},{id:"G",word:"Gajah",emoji:"🐘",drawFunction:s,svgContent:`
      <svg class="tracing-animation" viewBox="0 0 150 120" width="100%" height="80px">
        <path class="guide-path" d="M 80 25 A 35 35 0 1 0 80 75 L 80 50 L 50 50" />
        <path class="guide-path" d="M 125 45 A 20 20 0 1 0 125 85 M 125 45 L 125 105 C 125 120 105 120 105 105" />
        <path class="trace-path" d="M 80 25 A 35 35 0 1 0 80 75 L 80 50 L 50 50" />
        <path class="trace-path-small" d="M 125 45 A 20 20 0 1 0 125 85 M 125 45 L 125 105 C 125 120 105 120 105 105" />
      </svg>
    `},{id:"H",word:"Harimau",emoji:"🐅",drawFunction:Y,svgContent:`
      <svg class="tracing-animation" viewBox="0 0 150 100" width="100%" height="80px">
        <path class="guide-path" d="M 30 10 L 30 90 M 70 10 L 70 90 M 30 50 L 70 50" />
        <path class="guide-path" d="M 95 10 L 95 90 M 95 50 C 125 50 125 90 125 90" />
        <path class="trace-path" d="M 30 10 L 30 90 M 70 10 L 70 90 M 30 50 L 70 50" />
        <path class="trace-path-small" d="M 95 10 L 95 90 M 95 50 C 125 50 125 90 125 90" />
      </svg>
    `},{id:"I",word:"Ikan",emoji:"🐟",drawFunction:f,svgContent:`
      <svg class="tracing-animation" viewBox="0 0 150 100" width="100%" height="80px">
        <path class="guide-path" d="M 50 10 L 50 90 M 35 10 L 65 10 M 35 90 L 65 90" />
        <path class="guide-path" d="M 110 50 L 110 90 M 110 30 A 2 2 0 1 0 110.1 30" />
        <path class="trace-path" d="M 50 10 L 50 90 M 35 10 L 65 10 M 35 90 L 65 90" />
        <path class="trace-path-small" d="M 110 50 L 110 90 M 110 30 A 2 2 0 1 0 110.1 30" />
      </svg>
    `},{id:"J",word:"Jerapah",emoji:"🦒",drawFunction:n0,svgContent:`
      <svg class="tracing-animation" viewBox="0 0 150 110" width="100%" height="80px">
        <path class="guide-path" d="M 30 10 L 70 10 M 50 10 L 50 75 A 10 10 0 0 1 30 75" />
        <path class="guide-path" d="M 95 50 L 95 105 A 10 10 0 0 1 75 105 M 95 30 A 2 2 0 1 0 95.1 30" />
        <path class="trace-path" d="M 30 10 L 70 10 M 50 10 L 50 75 A 10 10 0 0 1 30 75" />
        <path class="trace-path-small" d="M 95 50 L 95 105 A 10 10 0 0 1 75 105 M 95 30 A 2 2 0 1 0 95.1 30" />
      </svg>
    `},{id:"K",word:"Kuda",emoji:"🐎",drawFunction:i0,svgContent:`
      <svg class="tracing-animation" viewBox="0 0 150 100" width="100%" height="80px">
        <path class="guide-path" d="M 30 10 L 30 90 M 70 10 L 30 50 M 30 50 L 70 90" />
        <path class="guide-path" d="M 90 10 L 90 90 M 120 50 L 90 70 M 90 70 L 120 90" />
        <path class="trace-path" d="M 30 10 L 30 90 M 70 10 L 30 50 M 30 50 L 70 90" />
        <path class="trace-path-small" d="M 90 10 L 90 90 M 120 50 L 90 70 M 90 70 L 120 90" />
      </svg>
    `},{id:"L",word:"Lebah",emoji:"🐝",drawFunction:t0,svgContent:`
      <svg class="tracing-animation" viewBox="0 0 150 100" width="100%" height="80px">
        <path class="guide-path" d="M 30 10 L 30 90 M 30 90 L 70 90" />
        <path class="guide-path" d="M 100 10 L 100 90" />
        <path class="trace-path" d="M 30 10 L 30 90 M 30 90 L 70 90" />
        <path class="trace-path-small" d="M 100 10 L 100 90" />
      </svg>
    `},{id:"M",word:"Monyet",emoji:"🐒",drawFunction:r0,svgContent:`
      <svg class="tracing-animation" viewBox="0 0 150 100" width="100%" height="80px">
        <path class="guide-path" d="M 20 90 L 20 10 M 20 10 L 45 50 M 45 50 L 70 10 M 70 10 L 70 90" />
        <path class="guide-path" d="M 85 50 L 85 90 M 85 50 C 95 35 105 50 105 90 M 105 50 C 115 35 125 50 125 90" />
        <path class="trace-path" d="M 20 90 L 20 10 M 20 10 L 45 50 M 45 50 L 70 10 M 70 10 L 70 90" />
        <path class="trace-path-small" d="M 85 50 L 85 90 M 85 50 C 95 35 105 50 105 90 M 105 50 C 115 35 125 50 125 90" />
      </svg>
    `},{id:"N",word:"Nanas",emoji:"🍍",drawFunction:h0,svgContent:`
      <svg class="tracing-animation" viewBox="0 0 150 100" width="100%" height="80px">
        <path class="guide-path" d="M 25 90 L 25 10 M 25 10 L 65 90 M 65 90 L 65 10" />
        <path class="guide-path" d="M 95 50 L 95 90 M 95 50 C 110 35 125 50 125 90" />
        <path class="trace-path" d="M 25 90 L 25 10 M 25 10 L 65 90 M 65 90 L 65 10" />
        <path class="trace-path-small" d="M 95 50 L 95 90 M 95 50 C 110 35 125 50 125 90" />
      </svg>
    `},{id:"O",word:"Obat",emoji:"💊",drawFunction:d0,svgContent:`
      <svg class="tracing-animation" viewBox="0 0 150 100" width="100%" height="80px">
        <path class="guide-path" d="M 40 16 A 34 34 0 1 0 40.1 16" />
        <path class="guide-path" d="M 112 52 A 18 18 0 1 0 112.1 52" />
        <path class="trace-path" d="M 40 16 A 34 34 0 1 0 40.1 16" />
        <path class="trace-path-small" d="M 112 52 A 18 18 0 1 0 112.1 52" />
      </svg>
    `},{id:"P",word:"Panda",emoji:"🐼",drawFunction:o0,svgContent:`
      <svg class="tracing-animation" viewBox="0 0 150 120" width="100%" height="80px">
        <path class="guide-path" d="M 30 10 L 30 90 M 30 10 C 80 10 80 50 30 50" />
        <path class="guide-path" d="M 95 50 L 95 115 M 95 50 C 130 50 130 90 95 90" />
        <path class="trace-path" d="M 30 10 L 30 90 M 30 10 C 80 10 80 50 30 50" />
        <path class="trace-path-small" d="M 95 50 L 95 115 M 95 50 C 130 50 130 90 95 90" />
      </svg>
    `},{id:"Q",word:"Quran",emoji:"📖",drawFunction:u0,svgContent:`
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
    `},{id:"S",word:"Sapi",emoji:"🐄",drawFunction:a0,svgContent:`
      <svg class="tracing-animation" viewBox="0 0 150 100" width="100%" height="80px">
        <path class="guide-path" d="M 70 25 C 60 5 30 5 30 25 C 30 50 70 45 70 70 C 70 95 35 95 30 75" />
        <path class="guide-path" d="M 120 60 C 115 45 90 45 90 60 C 90 75 120 70 120 80 C 120 95 95 95 90 85" />
        <path class="trace-path" d="M 70 25 C 60 5 30 5 30 25 C 30 50 70 45 70 70 C 70 95 35 95 30 75" />
        <path class="trace-path-small" d="M 120 60 C 115 45 90 45 90 60 C 90 75 120 70 120 80 C 120 95 95 95 90 85" />
      </svg>
    `},{id:"T",word:"Tikus",emoji:"🐭",drawFunction:g0,svgContent:`
      <svg class="tracing-animation" viewBox="0 0 150 100" width="100%" height="80px">
        <path class="guide-path" d="M 25 10 L 75 10 M 50 10 L 50 90" />
        <path class="guide-path" d="M 110 20 L 110 80 A 10 10 0 0 0 120 90 M 100 50 L 120 50" />
        <path class="trace-path" d="M 25 10 L 75 10 M 50 10 L 50 90" />
        <path class="trace-path-small" d="M 110 20 L 110 80 A 10 10 0 0 0 120 90 M 100 50 L 120 50" />
      </svg>
    `},{id:"U",word:"Ular",emoji:"🐍",drawFunction:e0,svgContent:`
      <svg class="tracing-animation" viewBox="0 0 150 100" width="100%" height="80px">
        <path class="guide-path" d="M 30 10 L 30 70 C 30 95 70 95 70 70 L 70 10" />
        <path class="guide-path" d="M 95 50 L 95 80 C 95 95 125 95 125 80 L 125 50 M 125 50 L 125 90" />
        <path class="trace-path" d="M 30 10 L 30 70 C 30 95 70 95 70 70 L 70 10" />
        <path class="trace-path-small" d="M 95 50 L 95 80 C 95 95 125 95 125 80 L 125 50 M 125 50 L 125 90" />
      </svg>
    `},{id:"V",word:"Vas",emoji:"🏺",drawFunction:L0,svgContent:`
      <svg class="tracing-animation" viewBox="0 0 150 100" width="100%" height="80px">
        <path class="guide-path" d="M 30 10 L 50 90 L 70 10" />
        <path class="guide-path" d="M 100 50 L 110 90 L 120 50" />
        <path class="trace-path" d="M 30 10 L 50 90 L 70 10" />
        <path class="trace-path-small" d="M 100 50 L 110 90 L 120 50" />
      </svg>
    `},{id:"W",word:"Wortel",emoji:"🥕",drawFunction:v0,svgContent:`
      <svg class="tracing-animation" viewBox="0 0 150 100" width="100%" height="80px">
        <path class="guide-path" d="M 20 10 L 35 90 L 50 40 L 65 90 L 80 10" />
        <path class="guide-path" d="M 90 50 L 100 90 L 110 65 L 120 90 L 130 50" />
        <path class="trace-path" d="M 20 10 L 35 90 L 50 40 L 65 90 L 80 10" />
        <path class="trace-path-small" d="M 90 50 L 100 90 L 110 65 L 120 90 L 130 50" />
      </svg>
    `},{id:"X",word:"Xilofon",emoji:"🎵",drawFunction:m0,svgContent:`
      <svg class="tracing-animation" viewBox="0 0 150 100" width="100%" height="80px">
        <path class="guide-path" d="M 30 10 L 70 90 M 70 10 L 30 90" />
        <path class="guide-path" d="M 95 50 L 125 90 M 125 50 L 95 90" />
        <path class="trace-path" d="M 30 10 L 70 90 M 70 10 L 30 90" />
        <path class="trace-path-small" d="M 95 50 L 125 90 M 125 50 L 95 90" />
      </svg>
    `},{id:"Y",word:"Yoyo",emoji:"🪀",drawFunction:M0,svgContent:`
      <svg class="tracing-animation" viewBox="0 0 150 120" width="100%" height="80px">
        <path class="guide-path" d="M 30 10 L 50 50 L 70 10 M 50 50 L 50 90" />
        <path class="guide-path" d="M 95 50 L 110 90 M 125 50 L 95 115" />
        <path class="trace-path" d="M 30 10 L 50 50 L 70 10 M 50 50 L 50 90" />
        <path class="trace-path-small" d="M 95 50 L 110 90 M 125 50 L 95 115" />
      </svg>
    `},{id:"Z",word:"Zebra",emoji:"🦓",drawFunction:T0,svgContent:`
      <svg class="tracing-animation" viewBox="0 0 150 100" width="100%" height="80px">
        <path class="guide-path" d="M 30 10 L 70 10 L 30 90 L 70 90" />
        <path class="guide-path" d="M 95 50 L 125 50 L 95 90 L 125 90" />
        <path class="trace-path" d="M 30 10 L 70 10 L 30 90 L 70 90" />
        <path class="trace-path-small" d="M 95 50 L 125 50 L 95 90 L 125 90" />
      </svg>
    `}];let m=0;function I(){const t=k[m];O.textContent=t.id,N.textContent=t.id,q.textContent=t.word,K.textContent=t.emoji,H.innerHTML=t.svgContent,V.textContent=m+1,j.style.visibility=m>0?"visible":"hidden",W.style.visibility=m<k.length-1?"visible":"hidden",c()}let A=!1;function c(){i.clearRect(0,0,g.width,g.height),p=[],A=!1;const t=k[m],r=1.2,n=190,d=130,h=Math.floor((g.width-20)/n),o=Math.floor((g.height-20)/d),u=h*n,a=o*d,e=(g.width-u)/2+30,w=(g.height-a)/2+10;for(let v=0;v<o;v++)for(let D=0;D<h;D++)t.drawFunction(e+D*n,w+v*d,r);x.textContent=`Yuk, tebalkan semua huruf ${t.id}!`,x.style.color="#27ae60"}window.addEventListener("resize",()=>{g.width=g.parentElement.clientWidth,g.height=g.parentElement.clientHeight,c()});function F(t){const r=g.getBoundingClientRect(),n=t.clientX||t.touches&&t.touches[0].clientX,d=t.clientY||t.touches&&t.touches[0].clientY;return{x:n-r.left,y:d-r.top}}function J(t){B=!0;const r=F(t);i.beginPath(),i.moveTo(r.x,r.y),l(t)}function E(){B=!1,i.beginPath(),C==="pencil"&&w0()}function l(t){if(!B)return;const r=F(t);i.lineWidth=C==="pencil"?8:25,i.lineCap="round",C==="eraser"?(i.globalCompositeOperation="destination-out",i.strokeStyle="rgba(0,0,0,1)"):(i.globalCompositeOperation="source-over",i.strokeStyle=G),i.lineTo(r.x,r.y),i.stroke(),i.beginPath(),i.moveTo(r.x,r.y),C==="pencil"&&C0(r.x,r.y)}function C0(t,r){p.forEach(d=>{Math.hypot(d.x-t,d.y-r)<25&&(d.hit=!0)})}function w0(){if(p.length===0||A)return;const t=p.length;p.filter(d=>d.hit).length/t*100>50&&(A=!0,x.textContent="Wah hebat! Kamu berhasil! 🎉",x.style.color="#27ae60",x0())}g.addEventListener("mousedown",J);g.addEventListener("mousemove",l);g.addEventListener("mouseup",E);g.addEventListener("mouseout",E);g.addEventListener("touchstart",t=>{t.preventDefault(),J(t)},{passive:!1});g.addEventListener("touchmove",t=>{t.preventDefault(),l(t)},{passive:!1});g.addEventListener("touchend",E);y.addEventListener("click",()=>{C="pencil",y.classList.add("active"),b.classList.remove("active")});b.addEventListener("click",()=>{C="eraser",b.classList.add("active"),y.classList.remove("active")});R.addEventListener("click",()=>{c(),C="pencil",y.classList.add("active"),b.classList.remove("active")});W.addEventListener("click",()=>{m<k.length-1&&(m++,I())});j.addEventListener("click",()=>{m>0&&(m--,I())});const M=document.getElementById("bgm-audio"),L=document.getElementById("btn-sound")||document.querySelector(".sound-btn");let S=!1;function z(){if(!M)return;M.volume=.55;const t=M.play();t!==void 0&&t.then(()=>{S=!1,L&&(L.textContent="🔊",L.classList.add("playing"),L.classList.remove("muted"),L.title="Musik Aktif (Klik untuk Matikan)")}).catch(r=>{console.log("Autoplay dicegah browser, menunggu interaksi pengguna:",r)})}function y0(){M&&(M.pause(),S=!0,L&&(L.textContent="🔇",L.classList.remove("playing"),L.classList.add("muted"),L.title="Musik Mati (Klik untuk Nyalakan)"))}function b0(){M&&(M.paused?z():y0())}L&&(L.textContent="🔇",L.classList.add("muted"),L.title="Klik untuk Menyalakan Musik Anak",L.addEventListener("click",t=>{t.stopPropagation(),b0()}));function P(){!S&&M&&M.paused&&z(),window.removeEventListener("pointerdown",P),window.removeEventListener("keydown",P)}window.addEventListener("pointerdown",P,{once:!0});window.addEventListener("keydown",P,{once:!0});let T=null;function x0(){try{const t=window.AudioContext||window.webkitAudioContext;T||(T=new t),T.state==="suspended"&&T.resume();const r=T.currentTime;[523.25,659.25,783.99,1046.5].forEach((d,h)=>{const o=r+h*.12,u=T.createOscillator(),a=T.createGain();u.type="sine",u.frequency.setValueAtTime(d,o),a.gain.setValueAtTime(.001,o),a.gain.linearRampToValueAtTime(.2,o+.02),a.gain.exponentialRampToValueAtTime(1e-4,o+.35),u.connect(a),a.connect(T.destination),u.start(o),u.stop(o+.4)})}catch(t){console.error("Audio error:",t)}}setTimeout(()=>{g.width=g.parentElement.clientWidth,g.height=g.parentElement.clientHeight,I()},100);
