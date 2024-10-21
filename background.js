chrome.runtime.onInstalled.addListener(() => {
    chrome.storage.local.set({ streak: 0, solvedGames: 0});
    console.log("NYT Connections Tracker installed.");
});

// ex
chrome.action.onClicked.addListener(() => {
    chrome.storage.local.set({ streak: 0, solved: 0}, () => {
        console.log("stats reset.");
    });
});

// chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
//     if(request.action === "saveStats") {
//         chrome.storage.local.set({ nytStats: request.stats}, () => {
//             console.log('NYT Connections saved:', request.stats);
//         })
//     }
// });