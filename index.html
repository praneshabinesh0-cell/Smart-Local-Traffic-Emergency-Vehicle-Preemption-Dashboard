<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Smart Traffic & Emergency Vehicle Preemption Dashboard</title>
  <style>
    :root {
      --bg-color: #0b132b;
      --card-bg: rgba(28, 37, 65, 0.65);
      --card-border: rgba(255, 255, 255, 0.12);
      --accent-mint: #4ef0c0;
      --accent-amber: #ffbe0b;
      --accent-red: #ff0055;
      --text-main: #edf2f4;
      --text-sub: #8d99ae;
    }

    * {
      box-sizing: border-box;
      margin: 0;
      padding: 0;
      font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    }

    body {
      background-color: var(--bg-color);
      color: var(--text-main);
      padding: 24px;
      min-height: 100vh;
      display: flex;
      flex-direction: column;
      gap: 24px;
    }

    header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 16px 24px;
      background: var(--card-bg);
      backdrop-filter: blur(12px);
      border: 1px solid var(--card-border);
      border-radius: 12px;
    }

    header h1 {
      font-size: 1.4rem;
      color: var(--accent-mint);
      letter-spacing: 0.5px;
    }

    .badge {
      background: rgba(78, 240, 192, 0.15);
      color: var(--accent-mint);
      padding: 6px 12px;
      border-radius: 20px;
      font-size: 0.85rem;
      font-weight: 600;
      border: 1px solid var(--accent-mint);
    }

    .grid {
      display: grid;
      grid-template-columns: 2fr 1fr;
      gap: 24px;
    }

    .card {
      background: var(--card-bg);
      backdrop-filter: blur(12px);
      border: 1px solid var(--card-border);
      border-radius: 12px;
      padding: 20px;
      display: flex;
      flex-direction: column;
      gap: 16px;
    }

    .card h2 {
      font-size: 1.1rem;
      color: var(--text-main);
      border-bottom: 1px solid var(--card-border);
      padding-bottom: 10px;
    }

    /* Simulation Area */
    .intersection-map {
      height: 320px;
      background: #141c33;
      border-radius: 8px;
      position: relative;
      overflow: hidden;
      display: flex;
      justify-content: center;
      align-items: center;
    }

    .road-h {
      position: absolute;
      width: 100%;
      height: 70px;
      background: #2b3a55;
    }

    .road-v {
      position: absolute;
      height: 100%;
      width: 70px;
      background: #2b3a55;
    }

    .traffic-light {
      position: absolute;
      width: 24px;
      height: 60px;
      background: #000;
      border-radius: 6px;
      display: flex;
      flex-direction: column;
      justify-content: space-around;
      align-items: center;
      padding: 4px;
      top: 40px;
      right: 40%;
      z-index: 10;
    }

    .light {
      width: 14px;
      height: 14px;
      border-radius: 50%;
      background: #333;
    }

    .light.red.active { background: var(--accent-red); box-shadow: 0 0 10px var(--accent-red); }
    .light.green.active { background: var(--accent-mint); box-shadow: 0 0 10px var(--accent-mint); }

    .vehicle {
      position: absolute;
      left: 10px;
      width: 44px;
      height: 24px;
      background: #3a86ff;
      border-radius: 4px;
      color: #fff;
      font-size: 0.7rem;
      font-weight: bold;
      display: flex;
      align-items: center;
      justify-content: center;
      transition: left 0.5s linear;
      z-index: 5;
    }

    .vehicle.emergency {
      background: var(--accent-red);
      box-shadow: 0 0 12px var(--accent-red);
      animation: blink 0.6s infinite alternate;
    }

    @keyframes blink {
      from { opacity: 1; }
      to { opacity: 0.6; }
    }

    /* Controls & Metrics */
    .btn-override {
      background: var(--accent-red);
      color: white;
      border: none;
      padding: 14px;
      font-size: 1rem;
      font-weight: bold;
      border-radius: 8px;
      cursor: pointer;
      transition: transform 0.1s ease, background-color 0.2s;
    }

    .btn-override:active {
      transform: scale(0.98);
    }

    .metric-box {
      display: flex;
      justify-content: space-between;
      align-items: center;
      background: rgba(255, 255, 255, 0.03);
      padding: 12px;
      border-radius: 6px;
      border: 1px solid var(--card-border);
    }

    .metric-label {
      color: var(--text-sub);
      font-size: 0.9rem;
    }

    .metric-value {
      font-size: 1.1rem;
      font-weight: bold;
      color: var(--accent-mint);
    }

    .log-panel {
      height: 140px;
      background: #060a17;
      border-radius: 6px;
      padding: 10px;
      font-family: monospace;
      font-size: 0.85rem;
      color: var(--accent-mint);
      overflow-y: auto;
    }
  </style>
</head>
<body>

  <header>
    <h1>Smart Traffic & Preemption Dashboard</h1>
    <span class="badge">Node Status: Active</span>
  </header>

  <div class="grid">
    <!-- Main Simulation Card -->
    <div class="card">
      <h2>Live Intersection Telemetry</h2>
      <div class="intersection-map">
        <div class="road-h"></div>
        <div class="road-v"></div>
        <div class="traffic-light">
          <div id="light-red" class="light red active"></div>
          <div id="light-green" class="light green"></div>
        </div>
        <div id="ambulance" class="vehicle emergency">EMG</div>
      </div>
      <button class="btn-override" onclick="triggerPreemption()">TRIGGER EMERGENCY PREEMPTION</button>
    </div>

    <!-- Metrics & Logs Card -->
    <div class="card">
      <h2>System Telemetry</h2>
      
      <div class="metric-box">
        <span class="metric-label">Signal Status</span>
        <span id="status-val" class="metric-value" style="color: var(--accent-red);">RESTRICTED</span>
      </div>

      <div class="metric-box">
        <span class="metric-label">Preemption Latency</span>
        <span class="metric-value">12 ms</span>
      </div>

      <div class="metric-box">
        <span class="metric-label">Vehicle ETA</span>
        <span id="eta-val" class="metric-value">18 s</span>
      </div>

      <h2>Activity Logs</h2>
      <div id="logs" class="log-panel">
        [SYS] Monitoring Intersection A-4...<br>
        [SYS] Signal set to DEFAULT (RED).<br>
      </div>
    </div>
  </div>

  <script>
    let posX = 10;
    const ambulance = document.getElementById('ambulance');
    const lightRed = document.getElementById('light-red');
    const lightGreen = document.getElementById('light-green');
    const statusVal = document.getElementById('status-val');
    const etaVal = document.getElementById('eta-val');
    const logs = document.getElementById('logs');

    function logMessage(msg) {
      logs.innerHTML += `[${new Date().toLocaleTimeString()}] ${msg}<br>`;
      logs.scrollTop = logs.scrollHeight;
    }

    function triggerPreemption() {
      logMessage('<span style="color: #ffbe0b;">[ALERT] Emergency Vehicle Detected!</span>');
      logMessage('[NET] Overriding signal priority...');
      
      setTimeout(() => {
        lightRed.classList.remove('active');
        lightGreen.classList.add('active');
        statusVal.innerText = "PREEMPTION ACTIVE";
        statusVal.style.color = "var(--accent-mint)";
        logMessage('<span style="color: #4ef0c0;">[SUCCESS] Route Cleared. Signal set to GREEN.</span>');
        
        // Move vehicle through intersection
        let interval = setInterval(() => {
          if (posX < 85) {
            posX += 15;
            ambulance.style.left = posX + '%';
            etaVal.innerText = Math.max(0, Math.floor((100 - posX) / 5)) + ' s';
          } else {
            clearInterval(interval);
            logMessage('[SYS] Vehicle cleared intersection. Resetting signals...');
            setTimeout(resetSignal, 3000);
          }
        }, 400);
      }, 600);
    }

    function resetSignal() {
      lightGreen.classList.remove('active');
      lightRed.classList.add('active');
      statusVal.innerText = "RESTRICTED";
      statusVal.style.color = "var(--accent-red)";
      posX = 10;
      ambulance.style.left = posX + '%';
      etaVal.innerText = "18 s";
      logMessage('[SYS] Signals restored to standard timing pattern.');
    }
  </script>
</body>
</html>
