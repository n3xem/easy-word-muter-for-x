chrome.runtime.onInstalled.addListener(() => {
    chrome.contextMenus.create({
        id: "muteOnX",
        title: "Xでミュートする",
        contexts: ["selection"]
    });
});

chrome.contextMenus.onClicked.addListener((info, tab) => {
    if (info.menuItemId === "muteOnX") {
        const selectedText = info.selectionText;
        chrome.tabs.create({
            url: "https://x.com/settings/add_muted_keyword"
        }, (tab) => {
            // Wait for the page to load before injecting the content script
            chrome.scripting.executeScript({
                target: { tabId: tab.id },
                function: (text) => {
                    // Wait for the input element to be available
                    const checkInterval = setInterval(() => {
                        const input = document.querySelector('input[name="keyword"]');
                        if (input) {
                            clearInterval(checkInterval);
                            input.value = text;
                            input.dispatchEvent(new Event('input', { bubbles: true }));
                        }
                    }, 100);
                },
                args: [selectedText]
            });
        });
    }
}); 
