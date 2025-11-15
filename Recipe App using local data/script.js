document.addEventListener('DOMContentLoaded', () => {
    const searchInput = document.getElementById('search-input');
    const recipeListContainer = document.getElementById('recipe-list');
    const recipeDetailsContainer = document.getElementById('recipe-details');
    let allRecipes = [];

    fetch('data.json')
        .then(response => response.json())
        .then(data => {
            allRecipes = data.recipes;
            displayRecipes(allRecipes);
        })
        .catch(error => console.error('Error fetching recipe data:', error));

    function displayRecipes(recipes) {
        recipeListContainer.innerHTML = '';
        recipes.forEach(recipe => {
            const recipeItem = document.createElement('div');
            recipeItem.classList.add('recipe-item');
            recipeItem.innerHTML = `
                <img src="${recipe.image}" alt="${recipe.name}">
                <h3>${recipe.name}</h3>
            `;
            recipeItem.addEventListener('click', () => showRecipeDetails(recipe));
            recipeListContainer.appendChild(recipeItem);
        });
    }

    function showRecipeDetails(recipe) {
        recipeListContainer.style.display = 'none';
        recipeDetailsContainer.style.display = 'block';
        recipeDetailsContainer.innerHTML = `
            <button id="back-button">Back to Recipes</button>
            <h2>${recipe.name}</h2>
            <img src="${recipe.image}" alt="${recipe.name}">
            <h3>Ingredients</h3>
            <ul>
                ${recipe.ingredients.map(ing => `<li>${ing}</li>`).join('')}
            </ul>
            <h3>Instructions</h3>
            <ol>
                ${recipe.instructions.map(inst => `<li>${inst}</li>`).join('')}
            </ol>
        `;
        document.getElementById('back-button').addEventListener('click', () => {
            recipeDetailsContainer.style.display = 'none';
            recipeListContainer.style.display = 'grid';
        });
    }

    searchInput.addEventListener('input', (e) => {
        const searchTerm = e.target.value.toLowerCase();
        const filteredRecipes = allRecipes.filter(recipe => 
            recipe.name.toLowerCase().includes(searchTerm) ||
            recipe.ingredients.some(ing => ing.toLowerCase().includes(searchTerm))
        );
        displayRecipes(filteredRecipes);
    });
});
