// content.ts
// This content script interacts with web pages and manipulates the DOM.
// It can communicate with the background script for various tasks.

const targetElement = document.querySelector('body');

if (targetElement) {
    targetElement.style.backgroundColor = 'lightblue'; // Example manipulation
}

// Function to send a message to the background script
function sendMessageToBackground(message: string) {
    chrome.runtime.sendMessage({ text: message }, (response) => {
        console.log('Response from background:', response);
    });
}

// Example of sending a message
sendMessageToBackground('Content script loaded');