document.addEventListener('DOMContentLoaded', () => {
    const display = document.getElementById('display');
    const buttons = document.querySelector('.buttons');
    let currentInput = '';
    let operator = '';
    let firstValue = '';
    let shouldResetDisplay = false;

    buttons.addEventListener('click', (e) => {
        if (e.target.matches('button')) {
            const btn = e.target;
            const value = btn.dataset.value;

            if (value >= '0' && value <= '9' || value === '.') {
                if (shouldResetDisplay) {
                    currentInput = '';
                    shouldResetDisplay = false;
                }
                currentInput += value;
                updateDisplay(currentInput);
            }

            if (value === '+' || value === '-' || value === '*' || value === '/') {
                if (currentInput === '') return;
                if (firstValue !== '') {
                    calculate();
                }
                operator = value;
                firstValue = currentInput;
                shouldResetDisplay = true;
            }

            if (value === '=') {
                if (firstValue === '' || currentInput === '') return;
                calculate();
                operator = '';
            }

            if (value === 'C') {
                resetCalculator();
            }
        }
    });

    function updateDisplay(value) {
        display.textContent = value;
    }

    function calculate() {
        let result;
        const first = parseFloat(firstValue);
        const second = parseFloat(currentInput);

        switch (operator) {
            case '+':
                result = first + second;
                break;
            case '-':
                result = first - second;
                break;
            case '*':
                result = first * second;
                break;
            case '/':
                result = first / second;
                break;
            default:
                return;
        }
        currentInput = result.toString();
        firstValue = '';
        updateDisplay(currentInput);
        shouldResetDisplay = true;
    }

    function resetCalculator() {
        currentInput = '';
        operator = '';
        firstValue = '';
        updateDisplay('0');
        shouldResetDisplay = false;
    }
});
