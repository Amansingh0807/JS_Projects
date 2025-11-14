document.addEventListener('DOMContentLoaded', () => {
    const searchInput = document.getElementById('search-input');
    const moviesContainer = document.getElementById('movies-container');
    let movies = [];

    fetch('movies.json')
        .then(response => response.json())
        .then(data => {
            movies = data;
            displayMovies(movies);
        });

    searchInput.addEventListener('input', (e) => {
        const searchTerm = e.target.value.toLowerCase();
        const filteredMovies = movies.filter(movie => movie.title.toLowerCase().includes(searchTerm));
        displayMovies(filteredMovies);
    });

    function displayMovies(movieList) {
        moviesContainer.innerHTML = '';
        movieList.forEach(movie => {
            const movieCard = document.createElement('div');
            movieCard.className = 'movie-card';
            movieCard.innerHTML = `
                <img src="${movie.poster}" alt="${movie.title}">
                <h3>${movie.title}</h3>
            `;
            moviesContainer.appendChild(movieCard);
        });
    }
});
