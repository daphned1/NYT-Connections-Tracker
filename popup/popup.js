chrome.storage.local.get('nytStats', (data) => {
    const statsDiv = document.getElementById('stats');

    if (data.nytStats) {
        const { streak, completed } = data.nytStats;

        statsDiv.innerHTML = `
            <p>Current Streak: ${streak || 'N/A'}</p>
            <p>Completed: ${completed || 'N/A'}</p>
        `;
    }
    else {
        statsDiv.innerHTML = '<p>No stats available yet.</p>';
    }
});