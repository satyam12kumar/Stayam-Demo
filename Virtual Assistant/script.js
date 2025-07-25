// Check if the browser supports Speech Recognition
const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
const recognition = new SpeechRecognition();

// Configure recognition settings
recognition.continuous = false;
recognition.lang = "en-US";

// Get elements
const startBtn = document.getElementById("start-btn");
const output = document.getElementById("output");

// Function to speak
function speak(text) {
    const speech = new SpeechSynthesisUtterance(text);
    speech.lang = "en-US";
    speech.pitch = 1;
    speech.rate = 1;
    window.speechSynthesis.speak(speech);
}

// Event listener for the button
startBtn.addEventListener("click", () => {
    output.textContent = "Listening...";
    recognition.start();
});

// Process the speech result
recognition.onresult = (event) => {
    const transcript = event.results[0][0].transcript.toLowerCase();
    output.textContent = `You said: "${transcript}"`;
    processCommand(transcript);
};

// Handle commands
function processCommand(command) {
    if (command.includes("hello")) {
        speak("Hello! How can I assist you?");
    } else if (command.includes("how are you")) {
        speak("I am just a program, but I'm doing great!");
    } else if (command.includes("time")) {
        const time = new Date().toLocaleTimeString();
        speak(`The current time is ${time}`);
    } else if (command.includes("search for")) {
        let query = command.replace("search for", "").trim();
        speak(`Searching for ${query}`);
        window.open(`https://www.google.com/search?q=${query}`, "_blank");
    } else {
        speak("Sorry, I didn't understand that.");
    }
}

// Handle errors
recognition.onerror = (event) => {
    output.textContent = "Error occurred: " + event.error;
};
