// Get the elements
const chatBox = document.getElementById('chat-box');
const userInput = document.getElementById('user-input');
const sendButton = document.getElementById('send-button');

// Function to send a message to the chat
function sendMessage(message, sender) {
    const messageElement = document.createElement('div');
    messageElement.classList.add('chat-message', sender);
    messageElement.innerHTML = `<p>${message}</p>`;
    chatBox.appendChild(messageElement);
    chatBox.scrollTop = chatBox.scrollHeight;  // Scroll to the bottom
}

// Function to handle user input and bot response
function handleUserInput() {
    const userMessage = userInput.value.trim();

    if (userMessage) {
        sendMessage(userMessage, 'user');
        userInput.value = '';  // Clear the input field

        // Generate bot response
        let botResponse = "Sorry, I didn't understand that.";

        if (userMessage.toLowerCase().includes("hi") || userMessage.toLowerCase().includes("hello")) {
            botResponse = "Hello! How can I help you today?";
        } else if (userMessage.toLowerCase().includes("how are you")) {
            botResponse = "I'm just a bot, but I'm doing great! How about you?";
        } else if (userMessage.toLowerCase().includes("what is your name")) {
            botResponse = "I'm your friendly chatbot!";
        } else if (userMessage.toLowerCase().includes("bye")) {
            botResponse = "Goodbye! Have a nice day!";
        }

        // Simulate bot response delay
        setTimeout(() => {
            sendMessage(botResponse, 'bot');
        }, 1000);
    }
}

// Event listener for the Send button
sendButton.addEventListener('click', handleUserInput);

// Event listener for Enter key press
userInput.addEventListener('keypress', (event) => {
    if (event.key === 'Enter') {
        handleUserInput();
    }
});
