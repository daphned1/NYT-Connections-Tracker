chrome.storage.local.get(['streakElem', 'solved'], (data) => {
    document.getElementById('streakElem').textContent = data.streak;
    document.getElementById('solved').textContent = data.solved || 0;
});