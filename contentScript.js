function getStats() {
    let stats = {};

    const streak = document.querySelector("#stat__current_streak");
    const completed = document.querySelector("#stat__completed");

    if (streak) {
        stats.streak = streak.innerText;
    }

    if (completed) {
        stats.completed = completed.innerText;
    }

    return stats;
}

chrome.runtime.sendMessage({ action: "saveStats", stats: getStats()});