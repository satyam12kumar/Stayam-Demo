// Movie Arrays (same as before)
const bollywoodMovies = [
    "DANGAL", "3 IDIOTS", "KABIR SINGH", "ZINDAGI NA MILEGI DOBARA", "ANDHADHUN",
    "SHERSHAAH", "BAJRANGI BHAIJAAN", "PK", "BARFI", "PADMAAVAT",
    "RAAZI", "GULLY BOY", "SULTAN", "TANHAJI", "WAR", "SUPER 30",
    "URI THE SURGICAL STRIKE", "LAGAAN", "SWADES", "CHAK DE INDIA", "JAWAN",
    "PATHAAN", "TIGER ZINDA HAI", "KISI KA BHAI KISI KI JAAN", "ROCKSTAR", "YJHD",
    "BHOOL BHULAIYAA 2", "STREE", "DRISHYAM", "DRISHYAM 2", "BADHAAI HO",
    "OMG 2", "MUNNABHAI MBBS", "LAGAN", "RAAJMAA", "ZINDAGI NA MILEGI DOBARA"
  ];
  
  const hollywoodMovies = [
    "THE GODFATHER", "THE DARK KNIGHT", "INCEPTION", "FORREST GUMP", "PULP FICTION",
    "FIGHT CLUB", "INTERSTELLAR", "THE SHAWSHANK REDEMPTION", "TITANIC", "THE AVENGERS",
    "JURASSIC PARK", "STAR WARS", "THE MATRIX", "GLADIATOR", "THE LORD OF THE RINGS",
    "SAVING PRIVATE RYAN", "SCHINDLER'S LIST", "THE SOCIAL NETWORK", "AVATAR", "CITIZEN KANE",
    "THE SILENCE OF THE LAMBS", "BACK TO THE FUTURE", "SE7EN", "AMERICAN BEAUTY", "THE USUAL SUSPECTS",
    "THE EMPIRE STRIKES BACK", "THE TERMINATOR", "CASABLANCA", "PSYCHO", "JAWS",
    "E.T. THE EXTRA-TERRESTRIAL", "THE WOLF OF WALL STREET", "FURIOUS 7", "THE HANGOVER",
    "THE DARK KNIGHT RISES", "TITANIC", "HARRY POTTER", "THE REVENANT", "INCEPTION"
  ];
  
  // Combine both arrays for a larger list
  const allMovies = [...bollywoodMovies, ...hollywoodMovies]; 
  
  let selectedMovie = "";
  let display = [];
  let guessedLetters = [];
  let attempts = 3;
  
  function initGame() {
    selectedMovie = allMovies[Math.floor(Math.random() * allMovies.length)].toUpperCase();
    display = [];
    guessedLetters = [];
    attempts = 3;
  
    for (let char of selectedMovie) {
      display.push(char === " " ? " " : "_");
    }
  
    document.getElementById("word-display").innerText = display.join(" ");
    document.getElementById("attempts").innerText = attempts;
    document.getElementById("message").innerText = "";
    document.getElementById("hint").innerText = "";
    document.getElementById("letter").value = "";
  }
  
  function guessLetter() {
    const input = document.getElementById("letter");
    const letter = input.value.toUpperCase();
    input.value = "";
  
    if (!letter || guessedLetters.includes(letter) || attempts <= 0) return;
  
    guessedLetters.push(letter);
    let correct = false;
  
    for (let i = 0; i < selectedMovie.length; i++) {
      if (selectedMovie[i] === letter) {
        display[i] = letter;
        correct = true;
      }
    }
  
    if (!correct) {
      attempts--;
      document.getElementById("attempts").innerText = attempts;
    }
  
    document.getElementById("word-display").innerText = display.join(" ");
  
    if (!display.includes("_")) {
      document.getElementById("message").innerText = "🎉 You guessed it!";
    } else if (attempts <= 0) {
      document.getElementById("message").innerText = `❌ Game Over! The movie was: ${selectedMovie}`;
    }
  }
  
  function showHint() {
    document.getElementById("hint").innerText = "Hint: It's a movie, Bollywood or Hollywood.";
  }
  
  function refreshGame() {
    initGame();
  }
  
  // Toggle between Dark Mode and Light Mode
  function toggleMode() {
    const body = document.body;
    const button = document.getElementById("mode-toggle");
  
    if (body.classList.contains("dark-mode")) {
      body.classList.remove("dark-mode");
      body.classList.add("light-mode");
      button.innerText = "🌙 Dark Mode";
    } else {
      body.classList.remove("light-mode");
      body.classList.add("dark-mode");
      button.innerText = "🌞 Light Mode";
    }
  }
  
  // Start game when page loads
  initGame();
  