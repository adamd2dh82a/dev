// popup.ts

document.addEventListener('DOMContentLoaded', () => {
    const button = document.getElementById('action-button');
    button?.addEventListener('click', () => {
        chrome.runtime.sendMessage({ action: 'performAction' }, (response) => {
            console.log('Response from background:', response);
        });
    });
});