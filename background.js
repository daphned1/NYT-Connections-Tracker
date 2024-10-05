chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
    if(request.action === "saveStats") {
        chrome.storage.local.set({ nytStats: request.stats}, () => {
            console.log('NYT Connections saved:', request.stats);
        })
    }
});