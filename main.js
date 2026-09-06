const canvas = document.getElementById('drawing-canvas');
const ctx = canvas.getContext('2d');
const btnPencil = document.getElementById('btn-pencil');
const btnMarker = document.getElementById('btn-marker');
const colorPicker = document.getElementById('color-picker');
const btnClear = document.getElementById('btn-clear');
const feedbackMsg = document.getElementById('feedback-message');

let isDrawing = false;
let currentTool = 'pencil'; // 'pencil' or 'marker'
let currentColor = colorPicker.value;

// Reference path points for Letter 'A' (Simplified)
const pathPoints = [];
// Left stroke
for(let i=0; i<=100; i+=5) {
  pathPoints.push({ x: 150 + (i/100)*150, y: 300 - (i/100)*200, hit: false });
}
// Right stroke
for(let i=0; i<=100; i+=5) {
  pathPoints.push({ x: 300 + (i/100)*150, y: 100 + (i/100)*200, hit: false });
}
// Middle stroke
for(let i=0; i<=100; i+=5) {
  pathPoints.push({ x: 225 + (i/100)*150, y: 200, hit: false });
}

function initCanvas() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  
  // Draw reference letter 'A'
  ctx.beginPath();
  ctx.moveTo(150, 300);
  ctx.lineTo(300, 100);
  ctx.lineTo(450, 300);
  ctx.moveTo(225, 200);
  ctx.lineTo(375, 200);
  
  ctx.lineWidth = 20;
  ctx.strokeStyle = '#e0e0e0';
  ctx.lineCap = 'round';
  ctx.lineJoin = 'round';
  ctx.setLineDash([10, 15]); // Dotted line
  ctx.stroke();
  ctx.setLineDash([]); // Reset dash for user drawing

  // Reset hit points
  pathPoints.forEach(p => p.hit = false);
  feedbackMsg.textContent = "Ayo mulai menebalkan huruf!";
  feedbackMsg.style.color = "#2ed573";
}

function startDrawing(e) {
  isDrawing = true;
  draw(e);
}

function stopDrawing() {
  isDrawing = false;
  ctx.beginPath(); // reset path so next click doesn't connect
  checkCompletion();
}

function draw(e) {
  if (!isDrawing) return;
  
  // Get coordinates (handle both mouse and touch)
  const rect = canvas.getBoundingClientRect();
  const clientX = e.clientX || (e.touches && e.touches[0].clientX);
  const clientY = e.clientY || (e.touches && e.touches[0].clientY);
  const x = clientX - rect.left;
  const y = clientY - rect.top;

  // Draw user line
  ctx.lineWidth = currentTool === 'pencil' ? 5 : 15;
  ctx.lineCap = 'round';
  ctx.strokeStyle = currentColor;
  
  ctx.lineTo(x, y);
  ctx.stroke();
  ctx.beginPath();
  ctx.moveTo(x, y);

  // Validate tracing (Hit test)
  validatePoint(x, y);
}

function validatePoint(x, y) {
  const tolerance = 25; // How far they can deviate from the dotted line
  let nearPath = false;

  pathPoints.forEach(p => {
    const dist = Math.hypot(p.x - x, p.y - y);
    if (dist < tolerance) {
      p.hit = true;
      nearPath = true;
    }
  });

  if (!nearPath) {
    feedbackMsg.textContent = "Ups! Keluar garis. Hati-hati ya!";
    feedbackMsg.style.color = "#ff4757";
  } else {
    feedbackMsg.textContent = "Bagus sekali! Teruskan...";
    feedbackMsg.style.color = "#2ed573";
  }
}

function checkCompletion() {
  const total = pathPoints.length;
  const hit = pathPoints.filter(p => p.hit).length;
  const percentage = (hit / total) * 100;

  if (percentage > 85) { // 85% covered
    feedbackMsg.textContent = "🎉 HORE! Kamu berhasil menebalkan huruf A!";
    feedbackMsg.style.color = "#1e90ff";
    // Here we could add a button to go to letter B
  }
}

// Event Listeners
canvas.addEventListener('mousedown', startDrawing);
canvas.addEventListener('mousemove', draw);
canvas.addEventListener('mouseup', stopDrawing);
canvas.addEventListener('mouseout', stopDrawing);

// Touch support
canvas.addEventListener('touchstart', (e) => { e.preventDefault(); startDrawing(e); }, {passive: false});
canvas.addEventListener('touchmove', (e) => { e.preventDefault(); draw(e); }, {passive: false});
canvas.addEventListener('touchend', stopDrawing);

btnPencil.addEventListener('click', () => {
  currentTool = 'pencil';
  btnPencil.classList.add('active');
  btnMarker.classList.remove('active');
});

btnMarker.addEventListener('click', () => {
  currentTool = 'marker';
  btnMarker.classList.add('active');
  btnPencil.classList.remove('active');
});

colorPicker.addEventListener('change', (e) => {
  currentColor = e.target.value;
});

btnClear.addEventListener('click', initCanvas);

// Initialize app
initCanvas();
