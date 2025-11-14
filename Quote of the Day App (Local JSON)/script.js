document.addEventListener('DOMContentLoaded', () => {
    const quoteTextEl = document.getElementById('quote-text');
    const quoteAuthorEl = document.getElementById('quote-author');
    const newQuoteBtn = document.getElementById('new-quote-btn');

    let quotes = [];

    fetch('quotes.json')
        .then(response => response.json())
        .then(data => {
            quotes = data;
            getNewQuote();
        });

    newQuoteBtn.addEventListener('click', getNewQuote);

    function getNewQuote() {
        const randomIndex = Math.floor(Math.random() * quotes.length);
        const randomQuote = quotes[randomIndex];
        quoteTextEl.textContent = `"${randomQuote.text}"`;
        quoteAuthorEl.textContent = `- ${randomQuote.author}`;
    }
});
