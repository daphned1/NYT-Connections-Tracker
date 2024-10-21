function getStats() {
    const streakElem = document.querySelector("div[data-testid='stat-current_streak']");
    const completed = document.querySelector("div[data-testid='stat-completed']");
    // console.log("hello");
    // console.log(streakElem);
    if (streakElem && completed) {
        const streak = streakElem.querySelector("div").textContent;
        const solved = completed.querySelector("div").textContent;

        // chrome.storage.local.set({ streak, solved }, () => {
        //     console.log(`Stats saved. Streak: ${streak}, Solved Games: ${solved}`);
        // });
    }
    else {
        console.log("couldn't find streak or completed elements.");
    }
}

window.addEventListener('load', getStats());
//chrome.runtime.sendMessage({ action: "saveStats", stats: getStats()});