const settingsBtn = document.querySelector('#setting-btn');
const settings = document.querySelector('#settings');
const difficultySelect = document.querySelector('#difficulty');
const word = document.querySelector('#word');
const inputText = document.querySelector('#input-text');
const scoreEl = document.querySelector('#score');
const timeEl = document.querySelector('#time');
const endGameEl = document.querySelector('#end-game-container');

const words = [
    'good',
    'south',
    'independent',
    'steering',
    'gold',
    'home',
    'artificial',
    'intelligence',
    'nine',
    'fame',
    'dismiss',
    'drop',
    'caring',
    'sing',
    'utensil',
    'airplane',
    'pilot',
    'basket',
    'juice',
    'ukraine',
    'captain',
    'this',
    'game',
    'is',
    'difficult'
]


 let randomWord,
    score = 0;
    time = 11;

// Focus on input field on load
inputText.focus();

// Generate Random Words
getRandomWords = () => {
      words[Math.floor(Math.random() * words.length)];
}

// adding words to dom
function addWordToDom() {
    randomWord = getRandomWords();
    word.innerHTML = randomWord
}
addWordToDom()
// Counting down time

// Function to update Score
function updateScore() {
    score += 2;
    scoreEl.innerHTML = score;
}
updateScore()

const timeInterval = setInterval(updateTime, 1000);
//Timing function
function updateTime() {
    time--;
    timeEl.innerHTML = `${time}s`;

    if (time === 0) {
        clearInterval(timeInterval);
        gameOver();
    }
}


function gameOver() {
    endGameEl.innerHTML = `
    <h1>Time ran out</h1>
    <p>Here is your final score: ${score}</p>
    <button onClick='window.location.reload()'>Reload</button>`;
    endGameEl.style.display = 'flex';
}

difficultySelect.addEventListener('change', (e) => {
    const difficulty = e.target.value;
})

// Settings button Functionality
// button on Click
settingsBtn.addEventListener('click', () => {
    settings.classList.toggle('show');
});
inputText.addEventListener('input', (e) => {
    const typedWord = e.target.value;
    if (typedWord === randomWord) {
        addWordToDom();
        updateScore();
        inputText.value = '';

        // time difficulty functionality
        if (difficulty === 'hard') {
            time += 1;    
        } else if (difficulty === 'medium') {
            time += 2;
        } else{
            time += 4;
        }
    }
});
updateTime();