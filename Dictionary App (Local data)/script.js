document.addEventListener('DOMContentLoaded', () => {
    const searchInput = document.getElementById('search-input');
    const searchBtn = document.getElementById('search-btn');
    const definitionDiv = document.getElementById('definition');
    let dictionary = {};

    fetch('data.json')
        .then(response => response.json())
        .then(data => {
            dictionary = data;
        });

    searchBtn.addEventListener('click', () => {
        const word = searchInput.value.toLowerCase();
        if (dictionary[word]) {
            definitionDiv.textContent = dictionary[word];
        } else {
            definitionDiv.textContent = 'Word not found.';
        }
    });
});
