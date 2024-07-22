let startTime;
let updatedTime;
let difference;
let tInterval;
let running = false;
let stopped = false;

const display = document.getElementById("display");
const startPauseButton = document.getElementById("startPauseButton");
const stopButton = document.getElementById("stopButton");
const resetButton = document.getElementById("resetButton");

function startTimer() {
  if (!running) {
    startTime = new Date().getTime() - (difference || 0);
    tInterval = setInterval(updateTimer, 1000);
    startPauseButton.textContent = "Pause";
    running = true;
    stopped = false;
  } else {
    clearInterval(tInterval);
    startPauseButton.textContent = "Start";
    running = false;
  }
}

function stopTimer() {
  clearInterval(tInterval);
  startPauseButton.textContent = "Start";
  running = false;
  stopped = true;
}

function resetTimer() {
  clearInterval(tInterval);
  display.textContent = "00:00:00";
  startPauseButton.textContent = "Start";
  running = false;
  stopped = false;
  difference = 0;
}

function updateTimer() {
  updatedTime = new Date().getTime();
  difference = updatedTime - startTime;
  const hours = Math.floor(difference / (1000 * 60 * 60));
  const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((difference % (1000 * 60)) / 1000);
  display.textContent = `${hours.toString().padStart(2, "0")}:${minutes
    .toString()
    .padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`;
}

startPauseButton.addEventListener("click", startTimer);
stopButton.addEventListener("click", stopTimer);
resetButton.addEventListener("click", resetTimer);
