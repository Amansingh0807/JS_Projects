document.addEventListener('DOMContentLoaded', () => {
    const colorPicker = document.getElementById('color-picker');
    const colorDisplay = document.getElementById('color-display');
    const colorCode = document.getElementById('color-code');
    const randomColorBtn = document.getElementById('random-color-btn');
    const body = document.body;

    function updateColor(color) {
        colorDisplay.style.backgroundColor = color;
        colorCode.textContent = color;
        body.style.backgroundColor = color;
    }

    colorPicker.addEventListener('input', (e) => {
        updateColor(e.target.value);
    });

    randomColorBtn.addEventListener('click', () => {
        const randomColor = '#' + Math.floor(Math.random()*16777215).toString(16).padStart(6, '0');
        colorPicker.value = randomColor;
        updateColor(randomColor);
    });

    // Initial color
    updateColor(colorPicker.value);
});
