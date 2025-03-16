document.addEventListener('DOMContentLoaded', function() {
    const startButton = document.getElementById('start-automation');
    const stopButton = document.getElementById('stop-automation');
    const pauseButton = document.getElementById('pause-automation');
    const resetButton = document.getElementById('reset-settings');
    const statusDiv = document.getElementById('status');

    startButton.addEventListener('click', function() {
        chrome.tabs.query({ active: true, currentWindow: true }, function(tabs) {
            if (chrome.runtime.lastError) {
                statusDiv.textContent = `Error: ${chrome.runtime.lastError.message}`;
                return;
            }
            chrome.tabs.sendMessage(tabs[0].id, { action: 'startAutomation' }, function(response) {
                if (chrome.runtime.lastError) {
                    statusDiv.textContent = `Error: ${chrome.runtime.lastError.message}`;
                    return;
                }
                statusDiv.textContent = response.status;
            });
        });
    });

    stopButton.addEventListener('click', function() {
        chrome.tabs.query({ active: true, currentWindow: true }, function(tabs) {
            if (chrome.runtime.lastError) {
                statusDiv.textContent = `Error: ${chrome.runtime.lastError.message}`;
                return;
            }
            chrome.tabs.sendMessage(tabs[0].id, { action: 'stopAutomation' }, function(response) {
                if (chrome.runtime.lastError) {
                    statusDiv.textContent = `Error: ${chrome.runtime.lastError.message}`;
                    return;
                }
                statusDiv.textContent = response.status;
            });
        });
    });

    pauseButton.addEventListener('click', function() {
        chrome.tabs.query({ active: true, currentWindow: true }, function(tabs) {
            if (chrome.runtime.lastError) {
                statusDiv.textContent = `Error: ${chrome.runtime.lastError.message}`;
                return;
            }
            chrome.tabs.sendMessage(tabs[0].id, { action: 'pauseAutomation' }, function(response) {
                if (chrome.runtime.lastError) {
                    statusDiv.textContent = `Error: ${chrome.runtime.lastError.message}`;
                    return;
                }
                statusDiv.textContent = response.status;
            });
        });
    });

    resetButton.addEventListener('click', function() {
        chrome.storage.sync.clear(function() {
            if (chrome.runtime.lastError) {
                statusDiv.textContent = `Error: ${chrome.runtime.lastError.message}`;
                return;
            }
            statusDiv.textContent = 'Settings reset';
        });
    });
});