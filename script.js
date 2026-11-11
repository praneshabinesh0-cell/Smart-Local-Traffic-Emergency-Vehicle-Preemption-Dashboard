let posX = 10;
let activeInterval = null;

const ambulance = document.getElementById('ambulance');
const lightRed = document.getElementById('light-red');
const lightGreen = document.getElementById('light-green');
const statusVal = document.getElementById('status-val');
const etaVal = document.getElementById('eta-val');
const logs = document.getElementById('logs');
const triggerButton = document.getElementById('preemption-trigger');

function logMessage(msg) {
  logs.innerHTML += `[${new Date().toLocaleTimeString()}] ${msg}<br>`;
  logs.scrollTop = logs.scrollHeight;
}

function resetSignal() {
  lightGreen.classList.remove('active');
  lightRed.classList.add('active');
  statusVal.innerText = 'RESTRICTED';
  statusVal.style.color = 'var(--accent-red)';
  posX = 10;
  ambulance.style.left = `${posX}%`;
  etaVal.innerText = '18 s';
  logMessage('[SYS] Signals restored to standard timing pattern.');
}

function triggerPreemption() {
  if (activeInterval) {
    clearInterval(activeInterval);
    activeInterval = null;
  }

  logMessage('<span style="color: #ffbe0b;">[ALERT] Emergency Vehicle Detected!</span>');
  logMessage('[NET] Overriding signal priority...');

  setTimeout(() => {
    lightRed.classList.remove('active');
    lightGreen.classList.add('active');
    statusVal.innerText = 'PREEMPTION ACTIVE';
    statusVal.style.color = 'var(--accent-mint)';
    logMessage('<span style="color: #4ef0c0;">[SUCCESS] Route Cleared. Signal set to GREEN.</span>');

    activeInterval = setInterval(() => {
      if (posX < 85) {
        posX += 15;
        ambulance.style.left = `${posX}%`;
        etaVal.innerText = `${Math.max(0, Math.floor((100 - posX) / 5))} s`;
      } else {
        clearInterval(activeInterval);
        activeInterval = null;
        logMessage('[SYS] Vehicle cleared intersection. Resetting signals...');
        setTimeout(resetSignal, 3000);
      }
    }, 400);
  }, 600);
}

if (triggerButton) {
  triggerButton.addEventListener('click', triggerPreemption);
}
