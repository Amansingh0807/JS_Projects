document.addEventListener('DOMContentLoaded', () => {
    const passwordEl = document.getElementById('password');
    const copyBtn = document.getElementById('copy-btn');
    const lengthEl = document.getElementById('length');
    const uppercaseEl = document.getElementById('uppercase');
    const lowercaseEl = document.getElementById('lowercase');
    const numbersEl = document.getElementById('numbers');
    const symbolsEl = document.getElementById('symbols');
    const generateBtn = document.getElementById('generate-btn');

    let characterSets;

    fetch('characters.json')
        .then(response => response.json())
        .then(data => {
            characterSets = data;
            generatePassword(); // Generate a password on load
        });

    generateBtn.addEventListener('click', generatePassword);
    copyBtn.addEventListener('click', copyPassword);

    function generatePassword() {
        if (!characterSets) return; // Don't run if characters not loaded yet

        const length = +lengthEl.value;
        let chars = '';
        if (uppercaseEl.checked) chars += characterSets.uppercase;
        if (lowercaseEl.checked) chars += characterSets.lowercase;
        if (numbersEl.checked) chars += characterSets.numbers;
        if (symbolsEl.checked) chars += characterSets.symbols;

        if (chars === '') {
            passwordEl.value = '';
            alert('Please select at least one character type.');
            return;
        }

        let password = '';
        for (let i = 0; i < length; i++) {
            password += chars.charAt(Math.floor(Math.random() * chars.length));
        }
        passwordEl.value = password;
    }

    function copyPassword() {
        if(passwordEl.value === '') {
            alert('Nothing to copy!');
            return;
        }
        passwordEl.select();
        document.execCommand('copy');
        alert('Password copied to clipboard!');
    }
});
