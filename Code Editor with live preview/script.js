document.addEventListener('DOMContentLoaded', () => {
    const htmlCode = document.getElementById('html-code');
    const cssCode = document.getElementById('css-code');
    const jsCode = document.getElementById('js-code');
    const previewFrame = document.getElementById('preview');

    function updatePreview() {
        const previewDoc = previewFrame.contentDocument || previewFrame.contentWindow.document;
        previewDoc.open();
        previewDoc.write(`
            <html>
                <head>
                    <style>${cssCode.value}</style>
                </head>
                <body>
                    ${htmlCode.value}
                    <script>${jsCode.value}<\/script>
                </body>
            </html>
        `);
        previewDoc.close();
    }

    htmlCode.value = `<h1>Hello, World!</h1>
<p>This is a live preview.</p>`;
    cssCode.value = `body {
    font-family: sans-serif;
    color: #333;
}
h1 {
    color: blue;
}`;
    jsCode.value = `document.querySelector('h1').addEventListener('click', () => {
    alert('You clicked the heading!');
});`;

    htmlCode.addEventListener('input', updatePreview);
    cssCode.addEventListener('input', updatePreview);
    jsCode.addEventListener('input', updatePreview);

    updatePreview();
});
