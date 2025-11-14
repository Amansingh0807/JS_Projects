document.getElementById('image-input').addEventListener('change', function(event) {
    const file = event.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = function(e) {
        const img = new Image();
        img.onload = function() {
            const canvas = document.createElement('canvas');
            const ctx = canvas.getContext('2d');
            
            // Set desired quality
            const quality = 0.7;
            canvas.width = img.width;
            canvas.height = img.height;
            
            ctx.drawImage(img, 0, 0);
            
            const compressedDataUrl = canvas.toDataURL('image/jpeg', quality);
            
            const output = document.getElementById('output');
            output.innerHTML = `
                <h3>Compressed Image</h3>
                <img src="${compressedDataUrl}" alt="Compressed Image">
                <a href="${compressedDataUrl}" download="compressed-image.jpg">Download</a>
            `;
        }
        img.src = e.target.result;
    }
    reader.readAsDataURL(file);
});
