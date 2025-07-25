// Variables
let currentLevel = Number(localStorage.getItem('currentLevel')) || 1;
let maxLevelUnlocked = Number(localStorage.getItem('maxLevelUnlocked')) || 1;
let score = Number(localStorage.getItem('score')) || 0;
let correctStreak = Number(localStorage.getItem('correctStreak')) || 0;

const totalTime = 30; // seconds per question
let timeLeft = totalTime;
let timerId = null;

// Elements
const levelNumberEl = document.getElementById('level-number');
const questionTextEl = document.getElementById('question-text');
const answerInputEl = document.getElementById('answer-input');
const submitBtn = document.getElementById('submit-btn');
const timeLeftEl = document.getElementById('time-left');
const resultEl = document.getElementById('result');
const badgesContainer = document.getElementById('badges-container');

const badges = [
  {id: 'starter', emoji: '⭐', name: 'Starter', condition: (data) => data.level >= 1},
  {id: 'score100', emoji: '🏅', name: 'Score 100+', condition: (data) => data.score >= 100},
  {id: 'streak5', emoji: '🔥', name: '5 Correct Streak', condition: (data) => data.correctStreak >= 5}
];

let unlockedBadges = JSON.parse(localStorage.getItem('unlockedBadges')) || [];

// Generate simple addition question
function generateQuestion(level) {
  let maxNum = 10 + level * 5;
  let a = Math.floor(Math.random() * maxNum) + 1;
  let b = Math.floor(Math.random() * maxNum) + 1;
  return {
    question: `What is ${a} + ${b}?`,
    answer: a + b
  };
}

let currentQuestion = generateQuestion(currentLevel);

// Timer Functions
function startTimer() {
  timeLeft = totalTime;
  timeLeftEl.textContent = timeLeft;
  timerId = setInterval(() => {
    timeLeft--;
    timeLeftEl.textContent = timeLeft;
    if (timeLeft <= 0) {
      clearInterval(timerId);
      onTimeOut();
    }
  }, 1000);
}

function resetTimer() {
  clearInterval(timerId);
  startTimer();
}

function onTimeOut() {
  resultEl.textContent = "Time's up! Try again.";
  resultEl.style.color = 'red';
  disableInput(true);
  correctStreak = 0;
  saveProgress();
}

// UI Functions
function loadQuestion() {
  levelNumberEl.textContent = currentLevel;
  questionTextEl.textContent = currentQuestion.question;
  answerInputEl.value = '';
  resultEl.textContent = '';
  resultEl.style.color = 'black';
  disableInput(false);
  resetTimer();
}

function disableInput(state) {
  answerInputEl.disabled = state;
  submitBtn.disabled = state;
}

// Badge Functions
function checkBadges() {
  let data = {
    level: currentLevel,
    score: score,
    correctStreak: correctStreak
  };

  badges.forEach(badge => {
    if (badge.condition(data) && !unlockedBadges.includes(badge.id)) {
      unlockedBadges.push(badge.id);
      alert(`Congrats! You earned the badge: ${badge.name} ${badge.emoji}`);
    }
  });

  localStorage.setItem('unlockedBadges', JSON.stringify(unlockedBadges));
  displayBadges();
}

function displayBadges() {
  badgesContainer.innerHTML = '';
  unlockedBadges.forEach(id => {
    const badge = badges.find(b => b.id === id);
    if (badge) {
      const badgeEl = document.createElement('div');
      badgeEl.className = 'badge';
      badgeEl.textContent = badge.emoji;
      badgeEl.title = badge.name;
      badgesContainer.appendChild(badgeEl);
    }
  });
}

// Unlock next level & save progress
function unlockNextLevel() {
  if (currentLevel >= maxLevelUnlocked) {
    maxLevelUnlocked = currentLevel + 1;
    localStorage.setItem('maxLevelUnlocked', maxLevelUnlocked);
  }
}

function saveProgress() {
  localStorage.setItem('currentLevel', currentLevel);
  localStorage.setItem('score', score);
  localStorage.setItem('correctStreak', correctStreak);
}

// Submit answer
submitBtn.addEventListener('click', () => {
  let userAnswer = Number(answerInputEl.value);
  if (isNaN(userAnswer)) {
    alert('Please enter a valid number!');
    return;
  }

  clearInterval(timerId);

  if (userAnswer === currentQuestion.answer) {
    resultEl.textContent = "Correct! 🎉";
    resultEl.style.color = 'green';
    score += 10;
    correctStreak++;
    unlockNextLevel();
    currentLevel++;
    saveProgress();
    checkBadges();
    currentQuestion = generateQuestion(currentLevel);
    setTimeout(() => {
      loadQuestion();
    }, 1500);
  } else {
    resultEl.textContent = "Wrong answer, try again.";
    resultEl.style.color = 'red';
    correctStreak = 0;
    saveProgress();
    disableInput(true);
  }
});

// On page load
window.onload = () => {
  displayBadges();
  loadQuestion();
  startTimer();
};
