chrome.runtime.onInstalled.addListener(() => {
    console.log('Chrome Automation Extension installed');
});

chrome.action.onClicked.addListener((tab) => {
    chrome.tabs.create({ url: 'src/popup/popup.html' });
});

// Add more event listeners and logic as needed for your extension's functionality.