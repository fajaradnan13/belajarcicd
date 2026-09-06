const canvas = document.getElementById('drawing-canvas');
const ctx = canvas.getContext('2d');
const btnPencil = document.getElementById('btn-pencil');
const btnEraser = document.getElementById('btn-eraser');
const btnClear = document.getElementById('btn-clear');
const feedbackMsg = document.getElementById('feedback-message');

const uiLetter = document.getElementById('ui-letter');
const uiLetterDesc = document.getElementById('ui-letter-desc');
const uiWord = document.getElementById('ui-word');
const uiEmoji = document.getElementById('ui-emoji');
const uiSvgContainer = document.getElementById('ui-svg-container');
const uiScore = document.getElementById('ui-score');

const btnNext = document.getElementById('btn-next');
const btnPrev = document.getElementById('btn-prev');

let isDrawing = false;
let currentTool = 'pencil'; 
const pencilColor = '#1f618d'; 
let pathPoints = [];

// --- DATABASE HURUF ---
function generateLetterAa(offsetX, offsetY, scale) {
  const p1 = { x: 20 * scale, y: 70 * scale };   
  const p2 = { x: 40 * scale, y: 10 * scale };   
  const p3 = { x: 60 * scale, y: 70 * scale };  
  const p4 = { x: 30 * scale, y: 45 * scale };   
  const p5 = { x: 50 * scale, y: 45 * scale };  

  pathPoints.push({ x: offsetX + 40*scale, y: offsetY + 40*scale, hit: false });

  ctx.beginPath();
  // Garis A besar
  ctx.moveTo(offsetX + p2.x, offsetY + p2.y);
  ctx.lineTo(offsetX + p1.x, offsetY + p1.y);
  ctx.moveTo(offsetX + p2.x, offsetY + p2.y);
  ctx.lineTo(offsetX + p3.x, offsetY + p3.y);
  ctx.moveTo(offsetX + p4.x, offsetY + p4.y);
  ctx.lineTo(offsetX + p5.x, offsetY + p5.y);
  
  // Garis a kecil
  const cx = 90 * scale;
  const cy = 55 * scale;
  const cr = 15 * scale;
  ctx.moveTo(offsetX + cx + cr, offsetY + cy);
  ctx.arc(offsetX + cx, offsetY + cy, cr, 0, Math.PI * 2);
  ctx.moveTo(offsetX + cx + cr, offsetY + cy - cr);
  ctx.lineTo(offsetX + cx + cr, offsetY + cy + cr);

  ctx.lineWidth = 4 * scale;
  ctx.strokeStyle = '#bdc3c7';
  ctx.lineCap = 'round';
  ctx.lineJoin = 'round';
  ctx.setLineDash([5 * scale, 8 * scale]); 
  ctx.stroke();
  ctx.setLineDash([]); 
}

function generateLetterBb(offsetX, offsetY, scale) {
  pathPoints.push({ x: offsetX + 40*scale, y: offsetY + 40*scale, hit: false });

  ctx.beginPath();
  // B besar
  const bX = 30 * scale;
  ctx.moveTo(offsetX + bX, offsetY + 10*scale);
  ctx.lineTo(offsetX + bX, offsetY + 90*scale);
  ctx.moveTo(offsetX + bX, offsetY + 10*scale);
  ctx.bezierCurveTo(offsetX + 70*scale, offsetY + 10*scale, offsetX + 70*scale, offsetY + 50*scale, offsetX + bX, offsetY + 50*scale);
  ctx.moveTo(offsetX + bX, offsetY + 50*scale);
  ctx.bezierCurveTo(offsetX + 80*scale, offsetY + 50*scale, offsetX + 80*scale, offsetY + 90*scale, offsetX + bX, offsetY + 90*scale);

  // b kecil
  const lbX = 90 * scale;
  ctx.moveTo(offsetX + lbX, offsetY + 10*scale);
  ctx.lineTo(offsetX + lbX, offsetY + 90*scale); // Tiang vertikal
  
  // Perut b (di sebelah KANAN tiang)
  // Pusat lingkaran = lbX + 15*scale
  ctx.moveTo(offsetX + lbX + 30*scale, offsetY + 70*scale); 
  ctx.arc(offsetX + lbX + 15*scale, offsetY + 70*scale, 15*scale, 0, Math.PI * 2);

  ctx.lineWidth = 4 * scale;
  ctx.strokeStyle = '#bdc3c7';
  ctx.lineCap = 'round';
  ctx.lineJoin = 'round';
  ctx.setLineDash([5 * scale, 8 * scale]); 
  ctx.stroke();
  ctx.setLineDash([]); 
}

function generateLetterCc(offsetX, offsetY, scale) {
  pathPoints.push({ x: offsetX + 40*scale, y: offsetY + 40*scale, hit: false });

  ctx.beginPath();
  // C besar
  const cX = 50 * scale;
  const cY = 50 * scale;
  const cR = 35 * scale;
  ctx.arc(offsetX + cX, offsetY + cY, cR, -Math.PI/4, Math.PI/4, true);

  // c kecil
  const lcX = 110 * scale;
  const lcY = 70 * scale;
  const lcR = 20 * scale;
  ctx.moveTo(offsetX + lcX + lcR * Math.cos(-Math.PI/4), offsetY + lcY + lcR * Math.sin(-Math.PI/4));
  ctx.arc(offsetX + lcX, offsetY + lcY, lcR, -Math.PI/4, Math.PI/4, true);

  ctx.lineWidth = 4 * scale;
  ctx.strokeStyle = '#bdc3c7';
  ctx.lineCap = 'round';
  ctx.lineJoin = 'round';
  ctx.setLineDash([5 * scale, 8 * scale]); 
  ctx.stroke();
  ctx.setLineDash([]); 
}

function generateLetterDd(offsetX, offsetY, scale) {
  pathPoints.push({ x: offsetX + 40*scale, y: offsetY + 40*scale, hit: false });
  ctx.beginPath();
  const dX = 30 * scale;
  ctx.moveTo(offsetX + dX, offsetY + 10*scale);
  ctx.lineTo(offsetX + dX, offsetY + 90*scale);
  ctx.moveTo(offsetX + dX, offsetY + 10*scale);
  ctx.bezierCurveTo(offsetX + 80*scale, offsetY + 10*scale, offsetX + 80*scale, offsetY + 90*scale, offsetX + dX, offsetY + 90*scale);

  const ldX = 100 * scale;
  ctx.moveTo(offsetX + ldX, offsetY + 10*scale);
  ctx.lineTo(offsetX + ldX, offsetY + 90*scale);
  ctx.moveTo(offsetX + ldX - 30*scale, offsetY + 70*scale);
  ctx.arc(offsetX + ldX - 15*scale, offsetY + 70*scale, 15*scale, 0, Math.PI * 2);

  ctx.lineWidth = 4 * scale;
  ctx.strokeStyle = '#bdc3c7';
  ctx.lineCap = 'round';
  ctx.lineJoin = 'round';
  ctx.setLineDash([5 * scale, 8 * scale]); 
  ctx.stroke();
  ctx.setLineDash([]); 
}

function generateLetterEe(offsetX, offsetY, scale) {
  pathPoints.push({ x: offsetX + 40*scale, y: offsetY + 40*scale, hit: false });
  ctx.beginPath();
  const eX = 30 * scale;
  ctx.moveTo(offsetX + eX, offsetY + 10*scale);
  ctx.lineTo(offsetX + eX, offsetY + 90*scale);
  ctx.moveTo(offsetX + eX, offsetY + 10*scale);
  ctx.lineTo(offsetX + 70*scale, offsetY + 10*scale);
  ctx.moveTo(offsetX + eX, offsetY + 50*scale);
  ctx.lineTo(offsetX + 60*scale, offsetY + 50*scale);
  ctx.moveTo(offsetX + eX, offsetY + 90*scale);
  ctx.lineTo(offsetX + 70*scale, offsetY + 90*scale);

  const leX = 100 * scale;
  ctx.moveTo(offsetX + leX - 15*scale, offsetY + 65*scale);
  ctx.lineTo(offsetX + leX + 15*scale, offsetY + 65*scale);
  ctx.bezierCurveTo(offsetX + leX + 15*scale, offsetY + 30*scale, offsetX + leX - 15*scale, offsetY + 30*scale, offsetX + leX - 15*scale, offsetY + 65*scale);
  ctx.bezierCurveTo(offsetX + leX - 15*scale, offsetY + 95*scale, offsetX + leX + 15*scale, offsetY + 95*scale, offsetX + leX + 15*scale, offsetY + 85*scale);

  ctx.lineWidth = 4 * scale;
  ctx.strokeStyle = '#bdc3c7';
  ctx.lineCap = 'round';
  ctx.lineJoin = 'round';
  ctx.setLineDash([5 * scale, 8 * scale]); 
  ctx.stroke();
  ctx.setLineDash([]); 
}

function generateLetterFf(offsetX, offsetY, scale) {
  pathPoints.push({ x: offsetX + 40*scale, y: offsetY + 40*scale, hit: false });
  ctx.beginPath();
  const fX = 30 * scale;
  ctx.moveTo(offsetX + fX, offsetY + 10*scale);
  ctx.lineTo(offsetX + fX, offsetY + 90*scale);
  ctx.moveTo(offsetX + fX, offsetY + 10*scale);
  ctx.lineTo(offsetX + 70*scale, offsetY + 10*scale);
  ctx.moveTo(offsetX + fX, offsetY + 50*scale);
  ctx.lineTo(offsetX + 60*scale, offsetY + 50*scale);

  const lfX = 100 * scale;
  ctx.moveTo(offsetX + lfX + 10*scale, offsetY + 20*scale);
  ctx.bezierCurveTo(offsetX + lfX + 10*scale, offsetY + 5*scale, offsetX + lfX - 5*scale, offsetY + 5*scale, offsetX + lfX - 5*scale, offsetY + 30*scale);
  ctx.lineTo(offsetX + lfX - 5*scale, offsetY + 90*scale);
  ctx.moveTo(offsetX + lfX - 15*scale, offsetY + 50*scale);
  ctx.lineTo(offsetX + lfX + 5*scale, offsetY + 50*scale);

  ctx.lineWidth = 4 * scale;
  ctx.strokeStyle = '#bdc3c7';
  ctx.lineCap = 'round';
  ctx.lineJoin = 'round';
  ctx.setLineDash([5 * scale, 8 * scale]); 
  ctx.stroke();
  ctx.setLineDash([]); 
}

function generateLetterGg(offsetX, offsetY, scale) {
  pathPoints.push({ x: offsetX + 40*scale, y: offsetY + 40*scale, hit: false });
  ctx.beginPath();
  const gX = 50 * scale;
  const gY = 50 * scale;
  const gR = 35 * scale;
  ctx.arc(offsetX + gX, offsetY + gY, gR, -Math.PI/4, Math.PI/4, true);
  ctx.lineTo(offsetX + gX + gR * Math.cos(Math.PI/4), offsetY + 50*scale);
  ctx.lineTo(offsetX + gX, offsetY + 50*scale);

  const lgX = 110 * scale;
  const lgY = 65 * scale;
  const lgR = 15 * scale;
  ctx.moveTo(offsetX + lgX + lgR, offsetY + lgY);
  ctx.arc(offsetX + lgX, offsetY + lgY, lgR, 0, Math.PI * 2);
  ctx.moveTo(offsetX + lgX + lgR, offsetY + lgY - lgR);
  ctx.lineTo(offsetX + lgX + lgR, offsetY + 105*scale);
  ctx.bezierCurveTo(offsetX + lgX + lgR, offsetY + 120*scale, offsetX + lgX - 15*scale, offsetY + 120*scale, offsetX + lgX - 15*scale, offsetY + 105*scale);

  ctx.lineWidth = 4 * scale;
  ctx.strokeStyle = '#bdc3c7';
  ctx.lineCap = 'round';
  ctx.lineJoin = 'round';
  ctx.setLineDash([5 * scale, 8 * scale]); 
  ctx.stroke();
  ctx.setLineDash([]); 
}

function generateLetterHh(offsetX, offsetY, scale) {
  pathPoints.push({ x: offsetX + 40*scale, y: offsetY + 40*scale, hit: false });
  ctx.beginPath();
  const hX1 = 30 * scale;
  const hX2 = 70 * scale;
  ctx.moveTo(offsetX + hX1, offsetY + 10*scale);
  ctx.lineTo(offsetX + hX1, offsetY + 90*scale);
  ctx.moveTo(offsetX + hX2, offsetY + 10*scale);
  ctx.lineTo(offsetX + hX2, offsetY + 90*scale);
  ctx.moveTo(offsetX + hX1, offsetY + 50*scale);
  ctx.lineTo(offsetX + hX2, offsetY + 50*scale);

  const lhX = 90 * scale;
  ctx.moveTo(offsetX + lhX, offsetY + 10*scale);
  ctx.lineTo(offsetX + lhX, offsetY + 90*scale);
  ctx.moveTo(offsetX + lhX, offsetY + 50*scale);
  ctx.bezierCurveTo(offsetX + lhX + 30*scale, offsetY + 50*scale, offsetX + lhX + 30*scale, offsetY + 90*scale, offsetX + lhX + 30*scale, offsetY + 90*scale);

  ctx.lineWidth = 4 * scale;
  ctx.strokeStyle = '#bdc3c7';
  ctx.lineCap = 'round';
  ctx.lineJoin = 'round';
  ctx.setLineDash([5 * scale, 8 * scale]); 
  ctx.stroke();
  ctx.setLineDash([]); 
}

function generateLetterIi(offsetX, offsetY, scale) {
  pathPoints.push({ x: offsetX + 40*scale, y: offsetY + 40*scale, hit: false });
  ctx.beginPath();
  const iX = 50 * scale;
  ctx.moveTo(offsetX + iX, offsetY + 10*scale);
  ctx.lineTo(offsetX + iX, offsetY + 90*scale);
  ctx.moveTo(offsetX + iX - 15*scale, offsetY + 10*scale);
  ctx.lineTo(offsetX + iX + 15*scale, offsetY + 10*scale);
  ctx.moveTo(offsetX + iX - 15*scale, offsetY + 90*scale);
  ctx.lineTo(offsetX + iX + 15*scale, offsetY + 90*scale);

  const liX = 110 * scale;
  ctx.moveTo(offsetX + liX, offsetY + 50*scale);
  ctx.lineTo(offsetX + liX, offsetY + 90*scale);
  ctx.moveTo(offsetX + liX, offsetY + 30*scale);
  ctx.arc(offsetX + liX, offsetY + 30*scale, 2*scale, 0, Math.PI * 2);

  ctx.lineWidth = 4 * scale;
  ctx.strokeStyle = '#bdc3c7';
  ctx.lineCap = 'round';
  ctx.lineJoin = 'round';
  ctx.setLineDash([5 * scale, 8 * scale]); 
  ctx.stroke();
  ctx.setLineDash([]); 
}

function generateLetterJj(offsetX, offsetY, scale) {
  pathPoints.push({ x: offsetX + 40*scale, y: offsetY + 40*scale, hit: false });
  ctx.beginPath();
  const jX = 50 * scale;
  ctx.moveTo(offsetX + 30*scale, offsetY + 10*scale);
  ctx.lineTo(offsetX + 70*scale, offsetY + 10*scale);
  ctx.moveTo(offsetX + jX, offsetY + 10*scale);
  ctx.lineTo(offsetX + jX, offsetY + 75*scale);
  ctx.arc(offsetX + 40*scale, offsetY + 75*scale, 10*scale, 0, Math.PI, false);

  const ljX = 95 * scale;
  ctx.moveTo(offsetX + ljX, offsetY + 50*scale);
  ctx.lineTo(offsetX + ljX, offsetY + 105*scale);
  ctx.arc(offsetX + 85*scale, offsetY + 105*scale, 10*scale, 0, Math.PI, false);
  ctx.moveTo(offsetX + ljX, offsetY + 30*scale);
  ctx.arc(offsetX + ljX, offsetY + 30*scale, 2*scale, 0, Math.PI * 2);

  ctx.lineWidth = 4 * scale;
  ctx.strokeStyle = '#bdc3c7';
  ctx.lineCap = 'round';
  ctx.lineJoin = 'round';
  ctx.setLineDash([5 * scale, 8 * scale]); 
  ctx.stroke();
  ctx.setLineDash([]); 
}

function generateLetterKk(offsetX, offsetY, scale) {
  pathPoints.push({ x: offsetX + 40*scale, y: offsetY + 40*scale, hit: false });
  ctx.beginPath();
  const kX = 30 * scale;
  ctx.moveTo(offsetX + kX, offsetY + 10*scale);
  ctx.lineTo(offsetX + kX, offsetY + 90*scale);
  ctx.moveTo(offsetX + 70*scale, offsetY + 10*scale);
  ctx.lineTo(offsetX + kX, offsetY + 50*scale);
  ctx.moveTo(offsetX + kX, offsetY + 50*scale);
  ctx.lineTo(offsetX + 70*scale, offsetY + 90*scale);

  const lkX = 90 * scale;
  ctx.moveTo(offsetX + lkX, offsetY + 10*scale);
  ctx.lineTo(offsetX + lkX, offsetY + 90*scale);
  ctx.moveTo(offsetX + 120*scale, offsetY + 50*scale);
  ctx.lineTo(offsetX + lkX, offsetY + 70*scale);
  ctx.moveTo(offsetX + lkX, offsetY + 70*scale);
  ctx.lineTo(offsetX + 120*scale, offsetY + 90*scale);

  ctx.lineWidth = 4 * scale;
  ctx.strokeStyle = '#bdc3c7';
  ctx.lineCap = 'round';
  ctx.lineJoin = 'round';
  ctx.setLineDash([5 * scale, 8 * scale]); 
  ctx.stroke();
  ctx.setLineDash([]); 
}

function generateLetterLl(offsetX, offsetY, scale) {
  pathPoints.push({ x: offsetX + 40*scale, y: offsetY + 40*scale, hit: false });
  ctx.beginPath();
  const lX = 30 * scale;
  ctx.moveTo(offsetX + lX, offsetY + 10*scale);
  ctx.lineTo(offsetX + lX, offsetY + 90*scale);
  ctx.moveTo(offsetX + lX, offsetY + 90*scale);
  ctx.lineTo(offsetX + 70*scale, offsetY + 90*scale);

  const llX = 100 * scale;
  ctx.moveTo(offsetX + llX, offsetY + 10*scale);
  ctx.lineTo(offsetX + llX, offsetY + 90*scale);

  ctx.lineWidth = 4 * scale;
  ctx.strokeStyle = '#bdc3c7';
  ctx.lineCap = 'round';
  ctx.lineJoin = 'round';
  ctx.setLineDash([5 * scale, 8 * scale]); 
  ctx.stroke();
  ctx.setLineDash([]); 
}

function generateLetterMm(offsetX, offsetY, scale) {
  pathPoints.push({ x: offsetX + 40*scale, y: offsetY + 40*scale, hit: false });
  ctx.beginPath();
  const mX1 = 20 * scale;
  const mX2 = 70 * scale;
  ctx.moveTo(offsetX + mX1, offsetY + 90*scale);
  ctx.lineTo(offsetX + mX1, offsetY + 10*scale);
  ctx.moveTo(offsetX + mX1, offsetY + 10*scale);
  ctx.lineTo(offsetX + 45*scale, offsetY + 50*scale);
  ctx.moveTo(offsetX + 45*scale, offsetY + 50*scale);
  ctx.lineTo(offsetX + mX2, offsetY + 10*scale);
  ctx.moveTo(offsetX + mX2, offsetY + 10*scale);
  ctx.lineTo(offsetX + mX2, offsetY + 90*scale);

  const lmX1 = 85 * scale;
  ctx.moveTo(offsetX + lmX1, offsetY + 50*scale);
  ctx.lineTo(offsetX + lmX1, offsetY + 90*scale);
  ctx.moveTo(offsetX + lmX1, offsetY + 50*scale);
  ctx.bezierCurveTo(offsetX + 95*scale, offsetY + 35*scale, offsetX + 105*scale, offsetY + 50*scale, offsetX + 105*scale, offsetY + 90*scale);
  ctx.moveTo(offsetX + 105*scale, offsetY + 50*scale);
  ctx.bezierCurveTo(offsetX + 115*scale, offsetY + 35*scale, offsetX + 125*scale, offsetY + 50*scale, offsetX + 125*scale, offsetY + 90*scale);

  ctx.lineWidth = 4 * scale;
  ctx.strokeStyle = '#bdc3c7';
  ctx.lineCap = 'round';
  ctx.lineJoin = 'round';
  ctx.setLineDash([5 * scale, 8 * scale]); 
  ctx.stroke();
  ctx.setLineDash([]); 
}

function generateLetterNn(offsetX, offsetY, scale) {
  pathPoints.push({ x: offsetX + 40*scale, y: offsetY + 40*scale, hit: false });
  ctx.beginPath();
  const nX1 = 25 * scale;
  const nX2 = 65 * scale;
  ctx.moveTo(offsetX + nX1, offsetY + 90*scale);
  ctx.lineTo(offsetX + nX1, offsetY + 10*scale);
  ctx.moveTo(offsetX + nX1, offsetY + 10*scale);
  ctx.lineTo(offsetX + nX2, offsetY + 90*scale);
  ctx.moveTo(offsetX + nX2, offsetY + 90*scale);
  ctx.lineTo(offsetX + nX2, offsetY + 10*scale);

  const lnX = 95 * scale;
  ctx.moveTo(offsetX + lnX, offsetY + 50*scale);
  ctx.lineTo(offsetX + lnX, offsetY + 90*scale);
  ctx.moveTo(offsetX + lnX, offsetY + 50*scale);
  ctx.bezierCurveTo(offsetX + 110*scale, offsetY + 35*scale, offsetX + 125*scale, offsetY + 50*scale, offsetX + 125*scale, offsetY + 90*scale);

  ctx.lineWidth = 4 * scale;
  ctx.strokeStyle = '#bdc3c7';
  ctx.lineCap = 'round';
  ctx.lineJoin = 'round';
  ctx.setLineDash([5 * scale, 8 * scale]); 
  ctx.stroke();
  ctx.setLineDash([]); 
}

function generateLetterOo(offsetX, offsetY, scale) {
  pathPoints.push({ x: offsetX + 50*scale, y: offsetY + 50*scale, hit: false });
  ctx.beginPath();
  ctx.arc(offsetX + 50*scale, offsetY + 50*scale, 40*scale, 0, Math.PI * 2);
  ctx.moveTo(offsetX + 130*scale, offsetY + 70*scale);
  ctx.arc(offsetX + 110*scale, offsetY + 70*scale, 20*scale, 0, Math.PI * 2);
  ctx.lineWidth = 4 * scale;
  ctx.strokeStyle = '#bdc3c7';
  ctx.lineCap = 'round';
  ctx.lineJoin = 'round';
  ctx.setLineDash([5 * scale, 8 * scale]); 
  ctx.stroke();
  ctx.setLineDash([]); 
}

function generateLetterPp(offsetX, offsetY, scale) {
  pathPoints.push({ x: offsetX + 50*scale, y: offsetY + 50*scale, hit: false });
  ctx.beginPath();
  const pX = 30 * scale;
  ctx.moveTo(offsetX + pX, offsetY + 10*scale);
  ctx.lineTo(offsetX + pX, offsetY + 90*scale);
  ctx.moveTo(offsetX + pX, offsetY + 10*scale);
  ctx.bezierCurveTo(offsetX + 80*scale, offsetY + 10*scale, offsetX + 80*scale, offsetY + 50*scale, offsetX + pX, offsetY + 50*scale);

  const lpX = 95 * scale;
  ctx.moveTo(offsetX + lpX, offsetY + 50*scale);
  ctx.lineTo(offsetX + lpX, offsetY + 115*scale);
  ctx.moveTo(offsetX + lpX, offsetY + 50*scale);
  ctx.bezierCurveTo(offsetX + 130*scale, offsetY + 50*scale, offsetX + 130*scale, offsetY + 90*scale, offsetX + lpX, offsetY + 90*scale);

  ctx.lineWidth = 4 * scale;
  ctx.strokeStyle = '#bdc3c7';
  ctx.lineCap = 'round';
  ctx.lineJoin = 'round';
  ctx.setLineDash([5 * scale, 8 * scale]); 
  ctx.stroke();
  ctx.setLineDash([]); 
}

function generateLetterQq(offsetX, offsetY, scale) {
  pathPoints.push({ x: offsetX + 50*scale, y: offsetY + 50*scale, hit: false });
  ctx.beginPath();
  ctx.arc(offsetX + 50*scale, offsetY + 50*scale, 40*scale, 0, Math.PI * 2);
  ctx.moveTo(offsetX + 60*scale, offsetY + 70*scale);
  ctx.lineTo(offsetX + 80*scale, offsetY + 90*scale);

  const lqX = 115 * scale;
  ctx.moveTo(offsetX + lqX, offsetY + 50*scale);
  ctx.lineTo(offsetX + lqX, offsetY + 115*scale);
  ctx.lineTo(offsetX + 125*scale, offsetY + 105*scale);
  ctx.moveTo(offsetX + 115*scale, offsetY + 70*scale);
  ctx.arc(offsetX + 95*scale, offsetY + 70*scale, 20*scale, 0, Math.PI * 2);

  ctx.lineWidth = 4 * scale;
  ctx.strokeStyle = '#bdc3c7';
  ctx.lineCap = 'round';
  ctx.lineJoin = 'round';
  ctx.setLineDash([5 * scale, 8 * scale]); 
  ctx.stroke();
  ctx.setLineDash([]); 
}

function generateLetterRr(offsetX, offsetY, scale) {
  pathPoints.push({ x: offsetX + 50*scale, y: offsetY + 50*scale, hit: false });
  ctx.beginPath();
  const rX = 30 * scale;
  ctx.moveTo(offsetX + rX, offsetY + 10*scale);
  ctx.lineTo(offsetX + rX, offsetY + 90*scale);
  ctx.moveTo(offsetX + rX, offsetY + 10*scale);
  ctx.bezierCurveTo(offsetX + 80*scale, offsetY + 10*scale, offsetX + 80*scale, offsetY + 50*scale, offsetX + rX, offsetY + 50*scale);
  ctx.moveTo(offsetX + 45*scale, offsetY + 50*scale);
  ctx.lineTo(offsetX + 75*scale, offsetY + 90*scale);

  const lrX = 95 * scale;
  ctx.moveTo(offsetX + lrX, offsetY + 50*scale);
  ctx.lineTo(offsetX + lrX, offsetY + 90*scale);
  ctx.moveTo(offsetX + lrX, offsetY + 65*scale);
  ctx.arc(offsetX + lrX + 15*scale, offsetY + 65*scale, 15*scale, Math.PI, 1.5 * Math.PI, false);

  ctx.lineWidth = 4 * scale;
  ctx.strokeStyle = '#bdc3c7';
  ctx.lineCap = 'round';
  ctx.lineJoin = 'round';
  ctx.setLineDash([5 * scale, 8 * scale]); 
  ctx.stroke();
  ctx.setLineDash([]); 
}

function generateLetterSs(offsetX, offsetY, scale) {
  pathPoints.push({ x: offsetX + 50*scale, y: offsetY + 50*scale, hit: false });
  ctx.beginPath();
  ctx.moveTo(offsetX + 70*scale, offsetY + 25*scale);
  ctx.bezierCurveTo(offsetX + 60*scale, offsetY + 5*scale, offsetX + 30*scale, offsetY + 5*scale, offsetX + 30*scale, offsetY + 25*scale);
  ctx.bezierCurveTo(offsetX + 30*scale, offsetY + 50*scale, offsetX + 70*scale, offsetY + 45*scale, offsetX + 70*scale, offsetY + 70*scale);
  ctx.bezierCurveTo(offsetX + 70*scale, offsetY + 95*scale, offsetX + 35*scale, offsetY + 95*scale, offsetX + 30*scale, offsetY + 75*scale);

  ctx.moveTo(offsetX + 120*scale, offsetY + 60*scale);
  ctx.bezierCurveTo(offsetX + 115*scale, offsetY + 45*scale, offsetX + 90*scale, offsetY + 45*scale, offsetX + 90*scale, offsetY + 60*scale);
  ctx.bezierCurveTo(offsetX + 90*scale, offsetY + 75*scale, offsetX + 120*scale, offsetY + 70*scale, offsetX + 120*scale, offsetY + 80*scale);
  ctx.bezierCurveTo(offsetX + 120*scale, offsetY + 95*scale, offsetX + 95*scale, offsetY + 95*scale, offsetX + 90*scale, offsetY + 85*scale);

  ctx.lineWidth = 4 * scale;
  ctx.strokeStyle = '#bdc3c7';
  ctx.lineCap = 'round';
  ctx.lineJoin = 'round';
  ctx.setLineDash([5 * scale, 8 * scale]); 
  ctx.stroke();
  ctx.setLineDash([]); 
}

function generateLetterTt(offsetX, offsetY, scale) {
  pathPoints.push({ x: offsetX + 50*scale, y: offsetY + 50*scale, hit: false });
  ctx.beginPath();
  ctx.moveTo(offsetX + 25*scale, offsetY + 10*scale);
  ctx.lineTo(offsetX + 75*scale, offsetY + 10*scale);
  ctx.moveTo(offsetX + 50*scale, offsetY + 10*scale);
  ctx.lineTo(offsetX + 50*scale, offsetY + 90*scale);

  const ltX = 110 * scale;
  ctx.moveTo(offsetX + ltX, offsetY + 20*scale);
  ctx.lineTo(offsetX + ltX, offsetY + 80*scale);
  ctx.arc(offsetX + ltX + 10*scale, offsetY + 80*scale, 10*scale, Math.PI, 0.5 * Math.PI, true);
  ctx.moveTo(offsetX + 100*scale, offsetY + 50*scale);
  ctx.lineTo(offsetX + 120*scale, offsetY + 50*scale);

  ctx.lineWidth = 4 * scale;
  ctx.strokeStyle = '#bdc3c7';
  ctx.lineCap = 'round';
  ctx.lineJoin = 'round';
  ctx.setLineDash([5 * scale, 8 * scale]); 
  ctx.stroke();
  ctx.setLineDash([]); 
}

function generateLetterUu(offsetX, offsetY, scale) {
  pathPoints.push({ x: offsetX + 50*scale, y: offsetY + 50*scale, hit: false });
  ctx.beginPath();
  ctx.moveTo(offsetX + 30*scale, offsetY + 10*scale);
  ctx.lineTo(offsetX + 30*scale, offsetY + 70*scale);
  ctx.bezierCurveTo(offsetX + 30*scale, offsetY + 95*scale, offsetX + 70*scale, offsetY + 95*scale, offsetX + 70*scale, offsetY + 70*scale);
  ctx.lineTo(offsetX + 70*scale, offsetY + 10*scale);

  ctx.moveTo(offsetX + 95*scale, offsetY + 50*scale);
  ctx.lineTo(offsetX + 95*scale, offsetY + 80*scale);
  ctx.bezierCurveTo(offsetX + 95*scale, offsetY + 95*scale, offsetX + 125*scale, offsetY + 95*scale, offsetX + 125*scale, offsetY + 80*scale);
  ctx.lineTo(offsetX + 125*scale, offsetY + 50*scale);
  ctx.moveTo(offsetX + 125*scale, offsetY + 50*scale);
  ctx.lineTo(offsetX + 125*scale, offsetY + 90*scale);

  ctx.lineWidth = 4 * scale;
  ctx.strokeStyle = '#bdc3c7';
  ctx.lineCap = 'round';
  ctx.lineJoin = 'round';
  ctx.setLineDash([5 * scale, 8 * scale]); 
  ctx.stroke();
  ctx.setLineDash([]); 
}

function generateLetterVv(offsetX, offsetY, scale) {
  pathPoints.push({ x: offsetX + 50*scale, y: offsetY + 50*scale, hit: false });
  ctx.beginPath();
  ctx.moveTo(offsetX + 30*scale, offsetY + 10*scale);
  ctx.lineTo(offsetX + 50*scale, offsetY + 90*scale);
  ctx.lineTo(offsetX + 70*scale, offsetY + 10*scale);

  ctx.moveTo(offsetX + 100*scale, offsetY + 50*scale);
  ctx.lineTo(offsetX + 110*scale, offsetY + 90*scale);
  ctx.lineTo(offsetX + 120*scale, offsetY + 50*scale);

  ctx.lineWidth = 4 * scale;
  ctx.strokeStyle = '#bdc3c7';
  ctx.lineCap = 'round';
  ctx.lineJoin = 'round';
  ctx.setLineDash([5 * scale, 8 * scale]); 
  ctx.stroke();
  ctx.setLineDash([]); 
}

function generateLetterWw(offsetX, offsetY, scale) {
  pathPoints.push({ x: offsetX + 50*scale, y: offsetY + 50*scale, hit: false });
  ctx.beginPath();
  ctx.moveTo(offsetX + 20*scale, offsetY + 10*scale);
  ctx.lineTo(offsetX + 35*scale, offsetY + 90*scale);
  ctx.lineTo(offsetX + 50*scale, offsetY + 40*scale);
  ctx.lineTo(offsetX + 65*scale, offsetY + 90*scale);
  ctx.lineTo(offsetX + 80*scale, offsetY + 10*scale);

  ctx.moveTo(offsetX + 90*scale, offsetY + 50*scale);
  ctx.lineTo(offsetX + 100*scale, offsetY + 90*scale);
  ctx.lineTo(offsetX + 110*scale, offsetY + 65*scale);
  ctx.lineTo(offsetX + 120*scale, offsetY + 90*scale);
  ctx.lineTo(offsetX + 130*scale, offsetY + 50*scale);

  ctx.lineWidth = 4 * scale;
  ctx.strokeStyle = '#bdc3c7';
  ctx.lineCap = 'round';
  ctx.lineJoin = 'round';
  ctx.setLineDash([5 * scale, 8 * scale]); 
  ctx.stroke();
  ctx.setLineDash([]); 
}

function generateLetterXx(offsetX, offsetY, scale) {
  pathPoints.push({ x: offsetX + 50*scale, y: offsetY + 50*scale, hit: false });
  ctx.beginPath();
  ctx.moveTo(offsetX + 30*scale, offsetY + 10*scale);
  ctx.lineTo(offsetX + 70*scale, offsetY + 90*scale);
  ctx.moveTo(offsetX + 70*scale, offsetY + 10*scale);
  ctx.lineTo(offsetX + 30*scale, offsetY + 90*scale);

  ctx.moveTo(offsetX + 95*scale, offsetY + 50*scale);
  ctx.lineTo(offsetX + 125*scale, offsetY + 90*scale);
  ctx.moveTo(offsetX + 125*scale, offsetY + 50*scale);
  ctx.lineTo(offsetX + 95*scale, offsetY + 90*scale);

  ctx.lineWidth = 4 * scale;
  ctx.strokeStyle = '#bdc3c7';
  ctx.lineCap = 'round';
  ctx.lineJoin = 'round';
  ctx.setLineDash([5 * scale, 8 * scale]); 
  ctx.stroke();
  ctx.setLineDash([]); 
}

function generateLetterYy(offsetX, offsetY, scale) {
  pathPoints.push({ x: offsetX + 50*scale, y: offsetY + 50*scale, hit: false });
  ctx.beginPath();
  ctx.moveTo(offsetX + 30*scale, offsetY + 10*scale);
  ctx.lineTo(offsetX + 50*scale, offsetY + 50*scale);
  ctx.lineTo(offsetX + 70*scale, offsetY + 10*scale);
  ctx.moveTo(offsetX + 50*scale, offsetY + 50*scale);
  ctx.lineTo(offsetX + 50*scale, offsetY + 90*scale);

  ctx.moveTo(offsetX + 95*scale, offsetY + 50*scale);
  ctx.lineTo(offsetX + 110*scale, offsetY + 90*scale);
  ctx.moveTo(offsetX + 125*scale, offsetY + 50*scale);
  ctx.lineTo(offsetX + 95*scale, offsetY + 115*scale);

  ctx.lineWidth = 4 * scale;
  ctx.strokeStyle = '#bdc3c7';
  ctx.lineCap = 'round';
  ctx.lineJoin = 'round';
  ctx.setLineDash([5 * scale, 8 * scale]); 
  ctx.stroke();
  ctx.setLineDash([]); 
}

function generateLetterZz(offsetX, offsetY, scale) {
  pathPoints.push({ x: offsetX + 50*scale, y: offsetY + 50*scale, hit: false });
  ctx.beginPath();
  ctx.moveTo(offsetX + 30*scale, offsetY + 10*scale);
  ctx.lineTo(offsetX + 70*scale, offsetY + 10*scale);
  ctx.lineTo(offsetX + 30*scale, offsetY + 90*scale);
  ctx.lineTo(offsetX + 70*scale, offsetY + 90*scale);

  ctx.moveTo(offsetX + 95*scale, offsetY + 50*scale);
  ctx.lineTo(offsetX + 125*scale, offsetY + 50*scale);
  ctx.lineTo(offsetX + 95*scale, offsetY + 90*scale);
  ctx.lineTo(offsetX + 125*scale, offsetY + 90*scale);

  ctx.lineWidth = 4 * scale;
  ctx.strokeStyle = '#bdc3c7';
  ctx.lineCap = 'round';
  ctx.lineJoin = 'round';
  ctx.setLineDash([5 * scale, 8 * scale]); 
  ctx.stroke();
  ctx.setLineDash([]); 
}

const letterDatabase = [
  {
    id: "A",
    word: "Alpukat",
    emoji: "🥑",
    drawFunction: generateLetterAa,
    svgContent: `
      <svg class="tracing-animation" viewBox="0 0 150 100" width="100%" height="80px">
        <path class="guide-path" d="M 50 10 L 20 90 M 50 10 L 80 90 M 35 60 L 65 60" />
        <path class="guide-path" d="M 125 45 A 20 20 0 1 0 125 85 M 125 45 L 125 85" />
        <path class="trace-path" d="M 50 10 L 20 90 M 50 10 L 80 90 M 35 60 L 65 60" />
        <path class="trace-path-small" d="M 125 45 A 20 20 0 1 0 125 85 M 125 45 L 125 85" />
      </svg>
    `
  },
  {
    id: "B",
    word: "Buku",
    emoji: "📘",
    drawFunction: generateLetterBb,
    svgContent: `
      <svg class="tracing-animation" viewBox="0 0 150 100" width="100%" height="80px">
        <path class="guide-path" d="M 30 10 L 30 90 M 30 10 C 70 10 70 50 30 50 M 30 50 C 80 50 80 90 30 90" />
        <path class="guide-path" d="M 95 10 L 95 90 M 95 50 A 20 20 0 1 1 95 90" />
        <path class="trace-path" d="M 30 10 L 30 90 M 30 10 C 70 10 70 50 30 50 M 30 50 C 80 50 80 90 30 90" />
        <path class="trace-path-small" d="M 95 10 L 95 90 M 95 50 A 20 20 0 1 1 95 90" />
      </svg>
    `
  },
  {
    id: "C",
    word: "Ceri",
    emoji: "🍒",
    drawFunction: generateLetterCc,
    svgContent: `
      <svg class="tracing-animation" viewBox="0 0 150 100" width="100%" height="80px">
        <path class="guide-path" d="M 80 25 A 35 35 0 1 0 80 75" />
        <path class="guide-path" d="M 130 55 A 20 20 0 1 0 130 85" />
        <path class="trace-path" d="M 80 25 A 35 35 0 1 0 80 75" />
        <path class="trace-path-small" d="M 130 55 A 20 20 0 1 0 130 85" />
      </svg>
    `
  },
  {
    id: "D",
    word: "Domba",
    emoji: "🐑",
    drawFunction: generateLetterDd,
    svgContent: `
      <svg class="tracing-animation" viewBox="0 0 150 100" width="100%" height="80px">
        <path class="guide-path" d="M 30 10 L 30 90 M 30 10 C 80 10 80 90 30 90" />
        <path class="guide-path" d="M 100 10 L 100 90 M 100 50 A 20 20 0 1 0 100 90" />
        <path class="trace-path" d="M 30 10 L 30 90 M 30 10 C 80 10 80 90 30 90" />
        <path class="trace-path-small" d="M 100 10 L 100 90 M 100 50 A 20 20 0 1 0 100 90" />
      </svg>
    `
  },
  {
    id: "E",
    word: "Elang",
    emoji: "🦅",
    drawFunction: generateLetterEe,
    svgContent: `
      <svg class="tracing-animation" viewBox="0 0 150 100" width="100%" height="80px">
        <path class="guide-path" d="M 30 10 L 30 90 M 30 10 L 70 10 M 30 50 L 60 50 M 30 90 L 70 90" />
        <path class="guide-path" d="M 85 65 L 115 65 C 115 30 85 30 85 65 C 85 95 115 95 115 85" />
        <path class="trace-path" d="M 30 10 L 30 90 M 30 10 L 70 10 M 30 50 L 60 50 M 30 90 L 70 90" />
        <path class="trace-path-small" d="M 85 65 L 115 65 C 115 30 85 30 85 65 C 85 95 115 95 115 85" />
      </svg>
    `
  },
  {
    id: "F",
    word: "Foto",
    emoji: "📸",
    drawFunction: generateLetterFf,
    svgContent: `
      <svg class="tracing-animation" viewBox="0 0 150 100" width="100%" height="80px">
        <path class="guide-path" d="M 30 10 L 30 90 M 30 10 L 70 10 M 30 50 L 60 50" />
        <path class="guide-path" d="M 110 20 C 110 10 95 10 95 30 L 95 90 M 85 50 L 105 50" />
        <path class="trace-path" d="M 30 10 L 30 90 M 30 10 L 70 10 M 30 50 L 60 50" />
        <path class="trace-path-small" d="M 110 20 C 110 10 95 10 95 30 L 95 90 M 85 50 L 105 50" />
      </svg>
    `
  },
  {
    id: "G",
    word: "Gajah",
    emoji: "🐘",
    drawFunction: generateLetterGg,
    svgContent: `
      <svg class="tracing-animation" viewBox="0 0 150 120" width="100%" height="80px">
        <path class="guide-path" d="M 80 25 A 35 35 0 1 0 80 75 L 80 50 L 50 50" />
        <path class="guide-path" d="M 125 45 A 20 20 0 1 0 125 85 M 125 45 L 125 105 C 125 120 105 120 105 105" />
        <path class="trace-path" d="M 80 25 A 35 35 0 1 0 80 75 L 80 50 L 50 50" />
        <path class="trace-path-small" d="M 125 45 A 20 20 0 1 0 125 85 M 125 45 L 125 105 C 125 120 105 120 105 105" />
      </svg>
    `
  },
  {
    id: "H",
    word: "Harimau",
    emoji: "🐅",
    drawFunction: generateLetterHh,
    svgContent: `
      <svg class="tracing-animation" viewBox="0 0 150 100" width="100%" height="80px">
        <path class="guide-path" d="M 30 10 L 30 90 M 70 10 L 70 90 M 30 50 L 70 50" />
        <path class="guide-path" d="M 95 10 L 95 90 M 95 50 C 125 50 125 90 125 90" />
        <path class="trace-path" d="M 30 10 L 30 90 M 70 10 L 70 90 M 30 50 L 70 50" />
        <path class="trace-path-small" d="M 95 10 L 95 90 M 95 50 C 125 50 125 90 125 90" />
      </svg>
    `
  },
  {
    id: "I",
    word: "Ikan",
    emoji: "🐟",
    drawFunction: generateLetterIi,
    svgContent: `
      <svg class="tracing-animation" viewBox="0 0 150 100" width="100%" height="80px">
        <path class="guide-path" d="M 50 10 L 50 90 M 35 10 L 65 10 M 35 90 L 65 90" />
        <path class="guide-path" d="M 110 50 L 110 90 M 110 30 A 2 2 0 1 0 110.1 30" />
        <path class="trace-path" d="M 50 10 L 50 90 M 35 10 L 65 10 M 35 90 L 65 90" />
        <path class="trace-path-small" d="M 110 50 L 110 90 M 110 30 A 2 2 0 1 0 110.1 30" />
      </svg>
    `
  },
  {
    id: "J",
    word: "Jerapah",
    emoji: "🦒",
    drawFunction: generateLetterJj,
    svgContent: `
      <svg class="tracing-animation" viewBox="0 0 150 110" width="100%" height="80px">
        <path class="guide-path" d="M 30 10 L 70 10 M 50 10 L 50 75 A 10 10 0 0 1 30 75" />
        <path class="guide-path" d="M 95 50 L 95 105 A 10 10 0 0 1 75 105 M 95 30 A 2 2 0 1 0 95.1 30" />
        <path class="trace-path" d="M 30 10 L 70 10 M 50 10 L 50 75 A 10 10 0 0 1 30 75" />
        <path class="trace-path-small" d="M 95 50 L 95 105 A 10 10 0 0 1 75 105 M 95 30 A 2 2 0 1 0 95.1 30" />
      </svg>
    `
  },
  {
    id: "K",
    word: "Kuda",
    emoji: "🐎",
    drawFunction: generateLetterKk,
    svgContent: `
      <svg class="tracing-animation" viewBox="0 0 150 100" width="100%" height="80px">
        <path class="guide-path" d="M 30 10 L 30 90 M 70 10 L 30 50 M 30 50 L 70 90" />
        <path class="guide-path" d="M 90 10 L 90 90 M 120 50 L 90 70 M 90 70 L 120 90" />
        <path class="trace-path" d="M 30 10 L 30 90 M 70 10 L 30 50 M 30 50 L 70 90" />
        <path class="trace-path-small" d="M 90 10 L 90 90 M 120 50 L 90 70 M 90 70 L 120 90" />
      </svg>
    `
  },
  {
    id: "L",
    word: "Lebah",
    emoji: "🐝",
    drawFunction: generateLetterLl,
    svgContent: `
      <svg class="tracing-animation" viewBox="0 0 150 100" width="100%" height="80px">
        <path class="guide-path" d="M 30 10 L 30 90 M 30 90 L 70 90" />
        <path class="guide-path" d="M 100 10 L 100 90" />
        <path class="trace-path" d="M 30 10 L 30 90 M 30 90 L 70 90" />
        <path class="trace-path-small" d="M 100 10 L 100 90" />
      </svg>
    `
  },
  {
    id: "M",
    word: "Monyet",
    emoji: "🐒",
    drawFunction: generateLetterMm,
    svgContent: `
      <svg class="tracing-animation" viewBox="0 0 150 100" width="100%" height="80px">
        <path class="guide-path" d="M 20 90 L 20 10 M 20 10 L 45 50 M 45 50 L 70 10 M 70 10 L 70 90" />
        <path class="guide-path" d="M 85 50 L 85 90 M 85 50 C 95 35 105 50 105 90 M 105 50 C 115 35 125 50 125 90" />
        <path class="trace-path" d="M 20 90 L 20 10 M 20 10 L 45 50 M 45 50 L 70 10 M 70 10 L 70 90" />
        <path class="trace-path-small" d="M 85 50 L 85 90 M 85 50 C 95 35 105 50 105 90 M 105 50 C 115 35 125 50 125 90" />
      </svg>
    `
  },
  {
    id: "N",
    word: "Nanas",
    emoji: "🍍",
    drawFunction: generateLetterNn,
    svgContent: `
      <svg class="tracing-animation" viewBox="0 0 150 100" width="100%" height="80px">
        <path class="guide-path" d="M 25 90 L 25 10 M 25 10 L 65 90 M 65 90 L 65 10" />
        <path class="guide-path" d="M 95 50 L 95 90 M 95 50 C 110 35 125 50 125 90" />
        <path class="trace-path" d="M 25 90 L 25 10 M 25 10 L 65 90 M 65 90 L 65 10" />
        <path class="trace-path-small" d="M 95 50 L 95 90 M 95 50 C 110 35 125 50 125 90" />
      </svg>
    `
  },
  {
    id: "O",
    word: "Obat",
    emoji: "💊",
    drawFunction: generateLetterOo,
    svgContent: `
      <svg class="tracing-animation" viewBox="0 0 150 100" width="100%" height="80px">
        <path class="guide-path" d="M 50 10 A 40 40 0 1 0 50.1 10" />
        <path class="guide-path" d="M 110 50 A 20 20 0 1 0 110.1 50" />
        <path class="trace-path" d="M 50 10 A 40 40 0 1 0 50.1 10" />
        <path class="trace-path-small" d="M 110 50 A 20 20 0 1 0 110.1 50" />
      </svg>
    `
  },
  {
    id: "P",
    word: "Panda",
    emoji: "🐼",
    drawFunction: generateLetterPp,
    svgContent: `
      <svg class="tracing-animation" viewBox="0 0 150 120" width="100%" height="80px">
        <path class="guide-path" d="M 30 10 L 30 90 M 30 10 C 80 10 80 50 30 50" />
        <path class="guide-path" d="M 95 50 L 95 115 M 95 50 C 130 50 130 90 95 90" />
        <path class="trace-path" d="M 30 10 L 30 90 M 30 10 C 80 10 80 50 30 50" />
        <path class="trace-path-small" d="M 95 50 L 95 115 M 95 50 C 130 50 130 90 95 90" />
      </svg>
    `
  },
  {
    id: "Q",
    word: "Quran",
    emoji: "📖",
    drawFunction: generateLetterQq,
    svgContent: `
      <svg class="tracing-animation" viewBox="0 0 150 120" width="100%" height="80px">
        <path class="guide-path" d="M 50 10 A 40 40 0 1 0 50.1 10 M 60 70 L 80 90" />
        <path class="guide-path" d="M 95 50 A 20 20 0 1 0 95.1 50 M 115 50 L 115 115 L 125 105" />
        <path class="trace-path" d="M 50 10 A 40 40 0 1 0 50.1 10 M 60 70 L 80 90" />
        <path class="trace-path-small" d="M 95 50 A 20 20 0 1 0 95.1 50 M 115 50 L 115 115 L 125 105" />
      </svg>
    `
  },
  {
    id: "R",
    word: "Rusa",
    emoji: "🦌",
    drawFunction: generateLetterRr,
    svgContent: `
      <svg class="tracing-animation" viewBox="0 0 150 100" width="100%" height="80px">
        <path class="guide-path" d="M 30 10 L 30 90 M 30 10 C 80 10 80 50 30 50 M 45 50 L 75 90" />
        <path class="guide-path" d="M 95 50 L 95 90 M 95 65 A 15 15 0 0 1 115 50" />
        <path class="trace-path" d="M 30 10 L 30 90 M 30 10 C 80 10 80 50 30 50 M 45 50 L 75 90" />
        <path class="trace-path-small" d="M 95 50 L 95 90 M 95 65 A 15 15 0 0 1 115 50" />
      </svg>
    `
  },
  {
    id: "S",
    word: "Sapi",
    emoji: "🐄",
    drawFunction: generateLetterSs,
    svgContent: `
      <svg class="tracing-animation" viewBox="0 0 150 100" width="100%" height="80px">
        <path class="guide-path" d="M 70 25 C 60 5 30 5 30 25 C 30 50 70 45 70 70 C 70 95 35 95 30 75" />
        <path class="guide-path" d="M 120 60 C 115 45 90 45 90 60 C 90 75 120 70 120 80 C 120 95 95 95 90 85" />
        <path class="trace-path" d="M 70 25 C 60 5 30 5 30 25 C 30 50 70 45 70 70 C 70 95 35 95 30 75" />
        <path class="trace-path-small" d="M 120 60 C 115 45 90 45 90 60 C 90 75 120 70 120 80 C 120 95 95 95 90 85" />
      </svg>
    `
  },
  {
    id: "T",
    word: "Tikus",
    emoji: "🐭",
    drawFunction: generateLetterTt,
    svgContent: `
      <svg class="tracing-animation" viewBox="0 0 150 100" width="100%" height="80px">
        <path class="guide-path" d="M 25 10 L 75 10 M 50 10 L 50 90" />
        <path class="guide-path" d="M 110 20 L 110 80 A 10 10 0 0 0 120 90 M 100 50 L 120 50" />
        <path class="trace-path" d="M 25 10 L 75 10 M 50 10 L 50 90" />
        <path class="trace-path-small" d="M 110 20 L 110 80 A 10 10 0 0 0 120 90 M 100 50 L 120 50" />
      </svg>
    `
  },
  {
    id: "U",
    word: "Ular",
    emoji: "🐍",
    drawFunction: generateLetterUu,
    svgContent: `
      <svg class="tracing-animation" viewBox="0 0 150 100" width="100%" height="80px">
        <path class="guide-path" d="M 30 10 L 30 70 C 30 95 70 95 70 70 L 70 10" />
        <path class="guide-path" d="M 95 50 L 95 80 C 95 95 125 95 125 80 L 125 50 M 125 50 L 125 90" />
        <path class="trace-path" d="M 30 10 L 30 70 C 30 95 70 95 70 70 L 70 10" />
        <path class="trace-path-small" d="M 95 50 L 95 80 C 95 95 125 95 125 80 L 125 50 M 125 50 L 125 90" />
      </svg>
    `
  },
  {
    id: "V",
    word: "Vas",
    emoji: "🏺",
    drawFunction: generateLetterVv,
    svgContent: `
      <svg class="tracing-animation" viewBox="0 0 150 100" width="100%" height="80px">
        <path class="guide-path" d="M 30 10 L 50 90 L 70 10" />
        <path class="guide-path" d="M 100 50 L 110 90 L 120 50" />
        <path class="trace-path" d="M 30 10 L 50 90 L 70 10" />
        <path class="trace-path-small" d="M 100 50 L 110 90 L 120 50" />
      </svg>
    `
  },
  {
    id: "W",
    word: "Wortel",
    emoji: "🥕",
    drawFunction: generateLetterWw,
    svgContent: `
      <svg class="tracing-animation" viewBox="0 0 150 100" width="100%" height="80px">
        <path class="guide-path" d="M 20 10 L 35 90 L 50 40 L 65 90 L 80 10" />
        <path class="guide-path" d="M 90 50 L 100 90 L 110 65 L 120 90 L 130 50" />
        <path class="trace-path" d="M 20 10 L 35 90 L 50 40 L 65 90 L 80 10" />
        <path class="trace-path-small" d="M 90 50 L 100 90 L 110 65 L 120 90 L 130 50" />
      </svg>
    `
  },
  {
    id: "X",
    word: "Xilofon",
    emoji: "🎵",
    drawFunction: generateLetterXx,
    svgContent: `
      <svg class="tracing-animation" viewBox="0 0 150 100" width="100%" height="80px">
        <path class="guide-path" d="M 30 10 L 70 90 M 70 10 L 30 90" />
        <path class="guide-path" d="M 95 50 L 125 90 M 125 50 L 95 90" />
        <path class="trace-path" d="M 30 10 L 70 90 M 70 10 L 30 90" />
        <path class="trace-path-small" d="M 95 50 L 125 90 M 125 50 L 95 90" />
      </svg>
    `
  },
  {
    id: "Y",
    word: "Yoyo",
    emoji: "🪀",
    drawFunction: generateLetterYy,
    svgContent: `
      <svg class="tracing-animation" viewBox="0 0 150 120" width="100%" height="80px">
        <path class="guide-path" d="M 30 10 L 50 50 L 70 10 M 50 50 L 50 90" />
        <path class="guide-path" d="M 95 50 L 110 90 M 125 50 L 95 115" />
        <path class="trace-path" d="M 30 10 L 50 50 L 70 10 M 50 50 L 50 90" />
        <path class="trace-path-small" d="M 95 50 L 110 90 M 125 50 L 95 115" />
      </svg>
    `
  },
  {
    id: "Z",
    word: "Zebra",
    emoji: "🦓",
    drawFunction: generateLetterZz,
    svgContent: `
      <svg class="tracing-animation" viewBox="0 0 150 100" width="100%" height="80px">
        <path class="guide-path" d="M 30 10 L 70 10 L 30 90 L 70 90" />
        <path class="guide-path" d="M 95 50 L 125 50 L 95 90 L 125 90" />
        <path class="trace-path" d="M 30 10 L 70 10 L 30 90 L 70 90" />
        <path class="trace-path-small" d="M 95 50 L 125 50 L 95 90 L 125 90" />
      </svg>
    `
  }
];

let currentIndex = 0;

function updateUI() {
  const currentData = letterDatabase[currentIndex];
  
  uiLetter.textContent = currentData.id;
  uiLetterDesc.textContent = currentData.id;
  uiWord.textContent = currentData.word;
  uiEmoji.textContent = currentData.emoji;
  uiSvgContainer.innerHTML = currentData.svgContent;
  uiScore.textContent = (currentIndex + 1);

  // Atur visibilitas tombol
  btnPrev.style.visibility = currentIndex > 0 ? 'visible' : 'hidden';
  btnNext.style.visibility = currentIndex < letterDatabase.length - 1 ? 'visible' : 'hidden';
  
  initCanvas();
}

function initCanvas() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  pathPoints = [];

  const currentData = letterDatabase[currentIndex];
  const scale = 1.2;
  const colSpacing = 190; 
  const rowSpacing = 130; 
  
  const numCols = Math.floor((canvas.width - 20) / colSpacing);
  const numRows = Math.floor((canvas.height - 20) / rowSpacing);

  // Kalkulasi offset agar grid berada di tengah kanvas
  const totalGridWidth = numCols * colSpacing;
  const totalGridHeight = numRows * rowSpacing;
  const startX = (canvas.width - totalGridWidth) / 2 + 30; // +30 agar visualnya seimbang
  const startY = (canvas.height - totalGridHeight) / 2 + 10;
  
  for(let row = 0; row < numRows; row++) {
    for(let col = 0; col < numCols; col++) {
       currentData.drawFunction(startX + (col * colSpacing), startY + (row * rowSpacing), scale);
    }
  }

  feedbackMsg.textContent = `Yuk, tebalkan semua huruf ${currentData.id}!`;
  feedbackMsg.style.color = "#27ae60";
}

window.addEventListener('resize', () => {
  canvas.width = canvas.parentElement.clientWidth;
  canvas.height = canvas.parentElement.clientHeight;
  initCanvas();
});

// -- LOGIKA MENGGAMBAR --
function getCoordinates(e) {
  const rect = canvas.getBoundingClientRect();
  const clientX = e.clientX || (e.touches && e.touches[0].clientX);
  const clientY = e.clientY || (e.touches && e.touches[0].clientY);
  return { x: clientX - rect.left, y: clientY - rect.top };
}

function startDrawing(e) {
  isDrawing = true;
  const pos = getCoordinates(e);
  ctx.beginPath();
  ctx.moveTo(pos.x, pos.y);
  draw(e);
}

function stopDrawing() {
  isDrawing = false;
  ctx.beginPath(); 
  if(currentTool === 'pencil') checkCompletion();
}

function draw(e) {
  if (!isDrawing) return;
  const pos = getCoordinates(e);

  ctx.lineWidth = currentTool === 'pencil' ? 8 : 25;
  ctx.lineCap = 'round';
  
  if(currentTool === 'eraser') {
    ctx.globalCompositeOperation = 'destination-out';
    ctx.strokeStyle = 'rgba(0,0,0,1)';
  } else {
    ctx.globalCompositeOperation = 'source-over';
    ctx.strokeStyle = pencilColor;
  }
  
  ctx.lineTo(pos.x, pos.y);
  ctx.stroke();
  ctx.beginPath();
  ctx.moveTo(pos.x, pos.y);

  if(currentTool === 'pencil') validatePoint(pos.x, pos.y);
}

function validatePoint(x, y) {
  const tolerance = 25; 
  pathPoints.forEach(p => {
    if (Math.hypot(p.x - x, p.y - y) < tolerance) p.hit = true;
  });
}

function checkCompletion() {
  if(pathPoints.length === 0) return;
  const total = pathPoints.length;
  const hit = pathPoints.filter(p => p.hit).length;
  const percentage = (hit / total) * 100;

  if (percentage > 50) { 
    feedbackMsg.textContent = "Wah hebat! Kamu berhasil!";
    feedbackMsg.style.color = "#3498db";
  }
}

// Event Listeners Kanvas
canvas.addEventListener('mousedown', startDrawing);
canvas.addEventListener('mousemove', draw);
canvas.addEventListener('mouseup', stopDrawing);
canvas.addEventListener('mouseout', stopDrawing);

canvas.addEventListener('touchstart', (e) => { e.preventDefault(); startDrawing(e); }, {passive: false});
canvas.addEventListener('touchmove', (e) => { e.preventDefault(); draw(e); }, {passive: false});
canvas.addEventListener('touchend', stopDrawing);

// Event Listeners UI
btnPencil.addEventListener('click', () => {
  currentTool = 'pencil';
  btnPencil.classList.add('active');
  btnEraser.classList.remove('active');
});

btnEraser.addEventListener('click', () => {
  currentTool = 'eraser';
  btnEraser.classList.add('active');
  btnPencil.classList.remove('active');
});

btnClear.addEventListener('click', () => {
  initCanvas();
  currentTool = 'pencil';
  btnPencil.classList.add('active');
  btnEraser.classList.remove('active');
});

btnNext.addEventListener('click', () => {
  if (currentIndex < letterDatabase.length - 1) {
    currentIndex++;
    updateUI();
  }
});

btnPrev.addEventListener('click', () => {
  if (currentIndex > 0) {
    currentIndex--;
    updateUI();
  }
});

// Start App
setTimeout(() => {
  canvas.width = canvas.parentElement.clientWidth;
  canvas.height = canvas.parentElement.clientHeight;
  updateUI();
}, 100);
