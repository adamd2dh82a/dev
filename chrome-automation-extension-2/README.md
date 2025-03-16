# README.md

# Chrome Automation Extension

This Chrome extension provides an automation manager page that allows users to configure and manage automation tasks efficiently. 

## Features

- Background script to manage events and state.
- Content script to interact with web pages.
- Popup interface for quick access to extension features.
- Manager page for detailed configuration of automation tasks.

## Project Structure

```
chrome-automation-extension
├── src
│   ├── background
│   │   └── background.ts
│   ├── content
│   │   └── content.ts
│   ├── popup
│   │   ├── popup.html
│   │   ├── popup.css
│   │   └── popup.ts
│   └── manager
│       ├── manager.html
│       ├── manager.css
│       └── manager.ts
├── manifest.json
├── package.json
├── tsconfig.json
├── webpack.config.js
└── README.md
```

## Installation

1. Clone the repository:
   ```
   git clone <repository-url>
   ```
2. Navigate to the project directory:
   ```
   cd chrome-automation-extension
   ```
3. Install dependencies:
   ```
   npm install
   ```

## Usage

1. Load the extension in Chrome:
   - Go to `chrome://extensions/`
   - Enable "Developer mode"
   - Click "Load unpacked" and select the project directory.
2. Click the extension icon to open the popup or navigate to the manager page for configuration.

## Contributing

Contributions are welcome! Please open an issue or submit a pull request for any enhancements or bug fixes.

## License

This project is licensed under the MIT License.