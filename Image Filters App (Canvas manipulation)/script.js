document.addEventListener('DOMContentLoaded', () => {
    const uploadInput = document.getElementById('upload');
    const canvas = document.getElementById('canvas');
    const ctx = canvas.getContext('2d');
    const grayscaleBtn = document.getElementById('grayscale');
    const sepiaBtn = document.getElementById('sepia');
    const invertBtn = document.getElementById('invert');
    const resetBtn = document.getElementById('reset');

    let originalImageData = null;
    let image = new Image();

    uploadInput.addEventListener('change', (e) => {
        const file = e.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = (event) => {
                image = new Image();
                image.onload = () => {
                    canvas.width = image.width;
                    canvas.height = image.height;
                    ctx.drawImage(image, 0, 0);
                    originalImageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
                };
                image.src = event.target.result;
            };
            reader.readAsDataURL(file);
        }
    });

    function applyFilter(filter) {
        if (!originalImageData) return;
        const imageData = new ImageData(new Uint8ClampedArray(originalImageData.data), originalImageData.width, originalImageData.height);
        const data = imageData.data;
        for (let i = 0; i < data.length; i += 4) {
            const r = data[i];
            const g = data[i + 1];
            const b = data[i + 2];
            switch (filter) {
                case 'grayscale':
                    const gray = 0.299 * r + 0.587 * g + 0.114 * b;
                    data[i] = data[i + 1] = data[i + 2] = gray;
                    break;
                case 'sepia':
                    data[i] = Math.min(255, r * 0.393 + g * 0.769 + b * 0.189);
                    data[i + 1] = Math.min(255, r * 0.349 + g * 0.686 + b * 0.168);
                    data[i + 2] = Math.min(255, r * 0.272 + g * 0.534 + b * 0.131);
                    break;
                case 'invert':
                    data[i] = 255 - r;
                    data[i + 1] = 255 - g;
                    data[i + 2] = 255 - b;
                    break;
            }
        }
        ctx.putImageData(imageData, 0, 0);
    }

    grayscaleBtn.addEventListener('click', () => applyFilter('grayscale'));
    sepiaBtn.addEventListener('click', () => applyFilter('sepia'));
    invertBtn.addEventListener('click', () => applyFilter('invert'));
    resetBtn.addEventListener('click', () => {
        if (originalImageData) {
            ctx.putImageData(originalImageData, 0, 0);
        }
    });
});
