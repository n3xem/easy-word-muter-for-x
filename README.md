# Easy Word Muter for X

A Chrome extension that simplifies the process of muting words on X (formerly Twitter) by adding a convenient right-click context menu option.

## Features

- Right-click any selected text on any webpage to quickly add it to your X muted words list
- Automatically opens X's muted words settings page and fills in the selected text
- Works seamlessly with both x.com and twitter.com domains

## Installation

1. Download or clone this repository
2. Open Chrome and navigate to `chrome://extensions/`
3. Enable "Developer mode" in the top right corner
4. Click "Load unpacked" and select the directory containing this extension

## How to Use

1. Select any text on any webpage
2. Right-click the selected text
3. Click "Mute on X" from the context menu
4. The extension will automatically:
   - Open X's muted words settings page
   - Fill in your selected text in the keyword field

## Permissions

This extension requires the following permissions:
- `contextMenus`: To add the right-click menu option
- `scripting`: To automatically fill in the muted word
- Access to x.com and twitter.com domains

## Technical Details

The extension uses Manifest V3 and consists of:
- A background service worker that handles the context menu creation and click events
- Content script injection for automated form filling
- Host permissions for X/Twitter domains

## Version

Current version: 1.0
