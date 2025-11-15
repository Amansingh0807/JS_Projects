document.addEventListener('DOMContentLoaded', () => {
    const arrayContainer = document.getElementById('array-container');
    const newArrayBtn = document.getElementById('new-array');
    const bubbleSortBtn = document.getElementById('bubble-sort');
    const mergeSortBtn = document.getElementById('merge-sort');
    const quickSortBtn = document.getElementById('quick-sort');

    let array = [];
    const arraySize = 50;
    const delay = 50;

    function generateNewArray() {
        array = [];
        for (let i = 0; i < arraySize; i++) {
            array.push(Math.floor(Math.random() * 280) + 20);
        }
        renderArray();
    }

    function renderArray(highlights = {}) {
        arrayContainer.innerHTML = '';
        array.forEach((value, index) => {
            const bar = document.createElement('div');
            bar.classList.add('array-bar');
            bar.style.height = `${value}px`;
            if (highlights.compare && (highlights.compare.includes(index))) {
                bar.style.backgroundColor = 'red';
            }
            if (highlights.swap && (highlights.swap.includes(index))) {
                bar.style.backgroundColor = 'green';
            }
            arrayContainer.appendChild(bar);
        });
    }

    function sleep(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }

    async function bubbleSort() {
        for (let i = 0; i < array.length - 1; i++) {
            for (let j = 0; j < array.length - i - 1; j++) {
                renderArray({ compare: [j, j + 1] });
                await sleep(delay);
                if (array[j] > array[j + 1]) {
                    [array[j], array[j + 1]] = [array[j + 1], array[j]];
                    renderArray({ swap: [j, j + 1] });
                    await sleep(delay);
                }
            }
        }
        renderArray();
    }

    async function mergeSort() {
        await mergeSortRecursive(0, array.length - 1);
        renderArray();
    }

    async function mergeSortRecursive(start, end) {
        if (start >= end) return;
        const mid = Math.floor((start + end) / 2);
        await mergeSortRecursive(start, mid);
        await mergeSortRecursive(mid + 1, end);
        await merge(start, mid, end);
    }

    async function merge(start, mid, end) {
        const left = array.slice(start, mid + 1);
        const right = array.slice(mid + 1, end + 1);
        let i = 0, j = 0, k = start;

        while (i < left.length && j < right.length) {
            renderArray({ compare: [start + i, mid + 1 + j] });
            await sleep(delay);
            if (left[i] <= right[j]) {
                array[k++] = left[i++];
            } else {
                array[k++] = right[j++];
            }
            renderArray({ swap: [k - 1] });
            await sleep(delay);
        }
        while (i < left.length) {
            array[k++] = left[i++];
            renderArray({ swap: [k - 1] });
            await sleep(delay);
        }
        while (j < right.length) {
            array[k++] = right[j++];
            renderArray({ swap: [k - 1] });
            await sleep(delay);
        }
    }

    async function quickSort() {
        await quickSortRecursive(0, array.length - 1);
        renderArray();
    }

    async function quickSortRecursive(start, end) {
        if (start >= end) return;
        let index = await partition(start, end);
        await quickSortRecursive(start, index - 1);
        await quickSortRecursive(index + 1, end);
    }

    async function partition(start, end) {
        const pivotValue = array[end];
        let pivotIndex = start;
        for (let i = start; i < end; i++) {
            renderArray({ compare: [i, end] });
            await sleep(delay);
            if (array[i] < pivotValue) {
                [array[i], array[pivotIndex]] = [array[pivotIndex], array[i]];
                renderArray({ swap: [i, pivotIndex] });
                await sleep(delay);
                pivotIndex++;
            }
        }
        [array[pivotIndex], array[end]] = [array[end], array[pivotIndex]];
        renderArray({ swap: [pivotIndex, end] });
        await sleep(delay);
        return pivotIndex;
    }

    newArrayBtn.addEventListener('click', generateNewArray);
    bubbleSortBtn.addEventListener('click', bubbleSort);
    mergeSortBtn.addEventListener('click', mergeSort);
    quickSortBtn.addEventListener('click', quickSort);

    generateNewArray();
});
