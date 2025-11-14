document.addEventListener('DOMContentLoaded', () => {
    const habitInput = document.getElementById('habit-input');
    const addHabitBtn = document.getElementById('add-habit-btn');
    const habitList = document.getElementById('habit-list');

    addHabitBtn.addEventListener('click', () => {
        const habitText = habitInput.value.trim();
        if (habitText) {
            addHabit(habitText);
            habitInput.value = '';
        }
    });

    function addHabit(text) {
        const li = document.createElement('li');
        li.className = 'habit-item';
        li.innerHTML = `
            <input type="checkbox">
            <span>${text}</span>
            <button class="delete-btn">X</button>
        `;
        habitList.appendChild(li);

        li.querySelector('.delete-btn').addEventListener('click', () => {
            li.remove();
        });
    }
});
