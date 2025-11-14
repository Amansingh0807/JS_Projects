document.addEventListener('DOMContentLoaded', () => {
    const inputValue = document.getElementById('input-value');
    const fromUnit = document.getElementById('from-unit');
    const toUnit = document.getElementById('to-unit');
    const convertBtn = document.getElementById('convert-btn');
    const resultDiv = document.getElementById('result');

    const units = {
        length: ['m', 'km', 'cm', 'mm', 'mi', 'yd', 'ft', 'in'],
        weight: ['kg', 'g', 'lb', 'oz'],
        temperature: ['c', 'f', 'k']
    };

    function populateUnits() {
        const selectedGroup = fromUnit.querySelector('option:checked').parentElement.label.toLowerCase();
        toUnit.innerHTML = '';
        units[selectedGroup].forEach(unit => {
            const option = document.createElement('option');
            option.value = unit;
            option.textContent = fromUnit.querySelector(`option[value="${unit}"]`).textContent;
            toUnit.appendChild(option);
        });
    }

    fromUnit.addEventListener('change', populateUnits);

    convertBtn.addEventListener('click', () => {
        const from = fromUnit.value;
        const to = toUnit.value;
        const value = parseFloat(inputValue.value);
        if (isNaN(value)) {
            resultDiv.textContent = 'Please enter a valid number.';
            return;
        }

        let result = convert(value, from, to);
        resultDiv.textContent = `${value} ${from} = ${result.toFixed(2)} ${to}`;
    });

    function convert(value, from, to) {
        // Conversion logic here. This is a simplified example.
        // A more robust solution would use a library or more comprehensive logic.
        if (from === to) return value;

        // Length
        const lengthRates = { m: 1, km: 1000, cm: 0.01, mm: 0.001, mi: 1609.34, yd: 0.9144, ft: 0.3048, in: 0.0254 };
        if (units.length.includes(from)) {
            return value * lengthRates[from] / lengthRates[to];
        }

        // Weight
        const weightRates = { kg: 1, g: 0.001, lb: 0.453592, oz: 0.0283495 };
         if (units.weight.includes(from)) {
            return value * weightRates[from] / weightRates[to];
        }

        // Temperature
        if (from === 'c' && to === 'f') return value * 9/5 + 32;
        if (from === 'f' && to === 'c') return (value - 32) * 5/9;
        if (from === 'c' && to === 'k') return value + 273.15;
        if (from === 'k' && to === 'c') return value - 273.15;
        if (from === 'f' && to === 'k') return (value - 32) * 5/9 + 273.15;
        if (from === 'k' && to === 'f') return (value - 273.15) * 9/5 + 32;

        return 'N/A';
    }

    populateUnits();
});
