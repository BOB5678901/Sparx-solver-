// Listen for clicks on the Sparx submit button
document.addEventListener('click', (event) => {
    if (event.target.innerText === 'Submit') {
        const bookworkCode = document.querySelector('.bookwork-code-selector')?.innerText;
        const answerInput = document.querySelector('input[type="text"]')?.value;

        if (bookworkCode && answerInput) {
            // Save to browser storage
            chrome.storage.local.set({ [bookworkCode]: answerInput }, () => {
                console.log(`Saved: ${bookworkCode} = ${answerInput}`);
            });
        }
    }
});

