// Define an array of words for the game
var words = [
  "apple",
  "banana",
  "orange",
  "grape",
  "strawberry",
  "blueberry",
  "pineapple",
  "watermelon",
  "kiwi",
  "peach"
];

// Selecting elements from HTML
var wordDisplay = document.getElementById("word");
var inputField = document.getElementById("input");
var scoreDisplay = document.getElementById("score");

var score = 0;
var currentWord;

// Function to initialize the game
function init() {
  score = 0;
  scoreDisplay.textContent = score;
  inputField.value = "";
  inputField.focus();
  generateWord();
}

// Function to generate a random word
function generateWord() {
  var randomIndex = Math.floor(Math.random() * words.length);
  currentWord = words[randomIndex];
  wordDisplay.textContent = currentWord;
}

// Function to handle typing input
function handleInput() {
  var typedWord = inputField.value.trim();

  if (typedWord === currentWord) {
    score++;
    scoreDisplay.textContent = score;
    inputField.value = "";
    generateWord();
  }
}

// Event listener for typing input
inputField.addEventListener("input", handleInput);

// Start the game
init();
