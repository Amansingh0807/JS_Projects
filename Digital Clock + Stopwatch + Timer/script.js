document.addEventListener('DOMContentLoaded', () => {
    // Digital Clock
    const clockDisplay = document.getElementById('clock-display');

    function updateClock() {
        const now = new Date();
        const hours = String(now.getHours()).padStart(2, '0');
        const minutes = String(now.getMinutes()).padStart(2, '0');
        const seconds = String(now.getSeconds()).padStart(2, '0');
        clockDisplay.textContent = `${hours}:${minutes}:${seconds}`;
    }

    setInterval(updateClock, 1000);
    updateClock();

    // Stopwatch
    const stopwatchDisplay = document.getElementById('stopwatch-display');
    const startStopwatchBtn = document.getElementById('start-stopwatch');
    const stopStopwatchBtn = document.getElementById('stop-stopwatch');
    const resetStopwatchBtn = document.getElementById('reset-stopwatch');

    let stopwatchInterval;
    let stopwatchTime = 0;

    startStopwatchBtn.addEventListener('click', () => {
        if (!stopwatchInterval) {
            stopwatchInterval = setInterval(() => {
                stopwatchTime++;
                const hours = String(Math.floor(stopwatchTime / 3600)).padStart(2, '0');
                const minutes = String(Math.floor((stopwatchTime % 3600) / 60)).padStart(2, '0');
                const seconds = String(stopwatchTime % 60).padStart(2, '0');
                stopwatchDisplay.textContent = `${hours}:${minutes}:${seconds}`;
            }, 1000);
        }
    });

    stopStopwatchBtn.addEventListener('click', () => {
        clearInterval(stopwatchInterval);
        stopwatchInterval = null;
    });

    resetStopwatchBtn.addEventListener('click', () => {
        clearInterval(stopwatchInterval);
        stopwatchInterval = null;
        stopwatchTime = 0;
        stopwatchDisplay.textContent = '00:00:00';
    });

    // Timer
    const timerDisplay = document.getElementById('timer-display');
    const timerInput = document.getElementById('timer-input');
    const startTimerBtn = document.getElementById('start-timer');
    const stopTimerBtn = document.getElementById('stop-timer');
    const resetTimerBtn = document.getElementById('reset-timer');

    let timerInterval;
    let timerTime = 0;

    startTimerBtn.addEventListener('click', () => {
        const minutes = parseInt(timerInput.value, 10);
        if (isNaN(minutes) || minutes <= 0) {
            alert('Please enter a valid number of minutes.');
            return;
        }
        if (!timerInterval) {
            timerTime = minutes * 60;
            updateTimerDisplay();
            timerInterval = setInterval(() => {
                timerTime--;
                updateTimerDisplay();
                if (timerTime <= 0) {
                    clearInterval(timerInterval);
                    timerInterval = null;
                    alert('Time is up!');
                }
            }, 1000);
        }
    });

    stopTimerBtn.addEventListener('click', () => {
        clearInterval(timerInterval);
        timerInterval = null;
    });

    resetTimerBtn.addEventListener('click', () => {
        clearInterval(timerInterval);
        timerInterval = null;
        timerTime = 0;
        timerInput.value = '';
        updateTimerDisplay();
    });

    function updateTimerDisplay() {
        const minutes = String(Math.floor(timerTime / 60)).padStart(2, '0');
        const seconds = String(timerTime % 60).padStart(2, '0');
        timerDisplay.textContent = `${minutes}:${seconds}`;
    }
});

function openTab(evt, tabName) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tab-content");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tab-link");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(tabName).style.display = "block";
    evt.currentTarget.className += " active";
}
