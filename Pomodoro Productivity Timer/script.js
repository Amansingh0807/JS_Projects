document.addEventListener('DOMContentLoaded', () => {
    const timerDisplay = document.getElementById('timer-display');
    const startBtn = document.getElementById('start-btn');
    const resetBtn = document.getElementById('reset-btn');

    let timer;
    let minutes = 25;
    let seconds = 0;

    function updateDisplay() {
        timerDisplay.textContent = `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
    }

    function startTimer() {
        if (timer) return;
        timer = setInterval(() => {
            if (seconds > 0) {
                seconds--;
            } else if (minutes > 0) {
                minutes--;
                seconds = 59;
            } else {
                clearInterval(timer);
                timer = null;
                alert('Time for a break!');
                // Could add logic for break timers here
            }
            updateDisplay();
        }, 1000);
    }

    function resetTimer() {
        clearInterval(timer);
        timer = null;
        minutes = 25;
        seconds = 0;
        updateDisplay();
    }

    startBtn.addEventListener('click', startTimer);
    resetBtn.addEventListener('click', resetTimer);

    updateDisplay();
});
