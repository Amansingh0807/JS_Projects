document.addEventListener('DOMContentLoaded', () => {
    const textInput = document.getElementById('text-input');
    const generateBtn = document.getElementById('generate-btn');
    const qrcodeContainer = document.getElementById('qrcode');
    let qrcode = null;

    generateBtn.addEventListener('click', () => {
        const text = textInput.value.trim();
        if (text === '') {
            alert('Please enter text or a URL.');
            return;
        }

        if (qrcode) {
            qrcode.clear();
            qrcode.makeCode(text);
        } else {
            qrcode = new QRCode(qrcodeContainer, {
                text: text,
                width: 256,
                height: 256,
                colorDark : "#000000",
                colorLight : "#ffffff",
                correctLevel : QRCode.CorrectLevel.H
            });
        }
    });
});
