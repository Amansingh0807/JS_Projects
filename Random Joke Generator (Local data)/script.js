document.addEventListener('DOMContentLoaded', () => {
    const jokeEl = document.getElementById('joke');
    const newJokeBtn = document.getElementById('new-joke-btn');
    let jokes = [];

    fetch('jokes.json')
        .then(response => response.json())
        .then(data => {
            jokes = data;
            getNewJoke();
        });

    newJokeBtn.addEventListener('click', getNewJoke);

    function getNewJoke() {
        const randomIndex = Math.floor(Math.random() * jokes.length);
        jokeEl.textContent = jokes[randomIndex];
    }
});
