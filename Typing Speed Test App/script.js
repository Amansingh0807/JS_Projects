document.addEventListener('DOMContentLoaded', () => {
    const quoteEl = document.getElementById('quote');
    const typingInput = document.getElementById('typing-input');
    const resultEl = document.getElementById('result');
    const quotes = [
        "The quick brown fox jumps over the lazy dog.",
        "Success is not final, failure is not fatal: it is the courage to continue that counts.",
        "The only limit to our realization of tomorrow will be our doubts of today."
    ];
    let startTime;
    let quoteText;

    function startTest() {
        quoteText = quotes[Math.floor(Math.random() * quotes.length)];
        quoteEl.textContent = quoteText;
        typingInput.value = '';
        typingInput.focus();
        startTime = new Date();
    }

    typingInput.addEventListener('input', () => {
        const typedText = typingInput.value;
        if (typedText === quoteText) {
            const endTime = new Date();
            const timeTaken = (endTime - startTime) / 1000; // in seconds
            const wordsPerMinute = Math.round((quoteText.split(' ').length / timeTaken) * 60);
            resultEl.textContent = `You finished in ${timeTaken.toFixed(2)} seconds. Your typing speed is ${wordsPerMinute} WPM.`;
            setTimeout(startTest, 5000); // Restart after 5 seconds
        }
    });

    startTest();
});
