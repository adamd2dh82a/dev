// background.ts

chrome.runtime.onInstalled.addListener(() => {
    console.log('Chrome Automation Extension installed');
});

chrome.browserAction.onClicked.addListener((tab) => {
    chrome.tabs.create({ url: chrome.runtime.getURL('popup/popup.html') });
});

// Add any additional background event listeners or functions here