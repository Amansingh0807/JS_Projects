document.addEventListener('DOMContentLoaded', () => {
    const messagesContainer = document.getElementById('chat-messages');
    const messageInput = document.getElementById('message-input');
    const sendButton = document.getElementById('send-button');

    const dummyMessages = [
        { text: 'Hey! How are you?', type: 'received' },
        { text: 'I am good, thanks! How about you?', type: 'sent' },
        { text: 'Doing great! Just working on this chat UI.', type: 'received' },
        { text: 'Awesome! It looks great.', type: 'sent' }
    ];

    function addMessage(text, type) {
        const messageElement = document.createElement('div');
        messageElement.classList.add('message', type);
        messageElement.textContent = text;
        messagesContainer.appendChild(messageElement);
        messagesContainer.scrollTop = messagesContainer.scrollHeight;
    }

    dummyMessages.forEach(msg => addMessage(msg.text, msg.type));

    function sendMessage() {
        const text = messageInput.value.trim();
        if (text !== '') {
            addMessage(text, 'sent');
            messageInput.value = '';
            // Simulate a reply
            setTimeout(() => {
                addMessage('This is a dummy reply.', 'received');
            }, 1000);
        }
    }

    sendButton.addEventListener('click', sendMessage);
    messageInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            sendMessage();
        }
    });
});
