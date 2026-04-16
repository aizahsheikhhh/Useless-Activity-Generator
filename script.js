async function getUselessTask() {
    const text = document.getElementById('activity');
    text.innerText = "Thinking of something boring...";

    try {
        // Using the Bored API (free and useless!)
        const response = await fetch('https://www.boredapi.com/api/activity');
        const data = await response.json();
        
        text.innerText = data.activity;
    } catch (error) {
        text.innerText = "Even the API is too bored to work. Try again.";
    }
}
