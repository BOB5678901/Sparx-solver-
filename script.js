async function startAgent() {
    const url = document.getElementById('targetUrl').value;
    const log = document.getElementById('logOutput');
    const badge = document.getElementById('statusBadge');

    if (!url) return alert("Please enter a URL!");

    badge.innerText = "Active";
    badge.style.background = "#4ade80";
    
    // Simulate live logs from your backend
    addLog(`Navigating to ${url}...`);
    setTimeout(() => addLog("Analyzing page structure..."), 1500);
    setTimeout(() => addLog("Found 3 questions. Generating answers..."), 3000);
    setTimeout(() => addLog("Success: Form completed!"), 5000);
}

function addLog(message) {
    const log = document.getElementById('logOutput');
    log.innerHTML += `<p class="agent-msg">> ${message}</p>`;
    log.scrollTop = log.scrollHeight;
}
