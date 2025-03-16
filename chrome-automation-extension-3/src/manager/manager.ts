// src/manager/manager.ts

// Function to initialize the manager page
function initManager() {
    // Load current settings from storage
    chrome.storage.sync.get(['settings'], (result) => {
        if (result.settings) {
            // Populate the settings in the manager page
            populateSettings(result.settings);
        }
    });

    // Add event listeners for user interactions
    document.getElementById('save-settings')?.addEventListener('click', saveSettings);
}

// Function to populate settings in the manager page
function populateSettings(settings: any) {
    // Example of populating a setting
    const inputField = document.getElementById('setting-input') as HTMLInputElement;
    inputField.value = settings.someSetting || '';
}

// Function to save settings to storage
function saveSettings() {
    const inputField = document.getElementById('setting-input') as HTMLInputElement;
    const newSettings = {
        someSetting: inputField.value,
    };

    // Save settings to storage
    chrome.storage.sync.set({ settings: newSettings }, () => {
        console.log('Settings saved');
    });
}

// Initialize the manager page when the DOM is fully loaded
document.addEventListener('DOMContentLoaded', initManager);