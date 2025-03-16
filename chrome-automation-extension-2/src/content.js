document.addEventListener('DOMContentLoaded', function() {
    // This function will run when the content script is loaded
    console.log('Content script loaded');

    // Example: Change the background color of the page
    document.body.style.backgroundColor = 'lightblue';

    // Example: Listen for messages from the popup or background script
    chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
        if (request.action === 'changeColor') {
            document.body.style.backgroundColor = request.color;
            sendResponse({status: 'Color changed'});
        }
    });
});