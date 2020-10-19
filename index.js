// Selecting HTML elements and putting them inside variables
const playerScoreEl = document.getElementById('playerScore');
const playerChoiceEl = document.getElementById('playerChoice');
const cpuScoreEl = document.getElementById('cpuScore');
const cpuChoiceEl = document.getElementById('cpuChoice');

const playerRock = document.getElementById('playerRock');
const playerPaper = document.getElementById('playerPaper');
const playerScissors = document.getElementById('playerScissors');
const playerLizard = document.getElementById('playerLizard');
const playerSpock = document.getElementById('playerSpock');

const cpuRock = document.getElementById('cpuRock');
const cpuPaper = document.getElementById('cpuPaper');
const cpuScissors = document.getElementById('cpuScissors');
const cpuLizard = document.getElementById('cpuLizard');
const cpuSpock = document.getElementById('cpuSpock');

const allGameIcons = document.querySelectorAll('.far');
const resultText = document.getElementById('resultText');

// Object of choices and what they defeat
const choices = {
  rock: { name: 'Rock', defeats: ['scissors', 'lizard'] },
  paper: { name: 'Paper', defeats: ['rock', 'spock'] },
  scissors: { name: 'Scissors', defeats: ['paper', 'lizard'] },
  lizard: { name: 'Lizard', defeats: ['paper', 'spock'] },
  spock: { name: 'Spock', defeats: ['scissors', 'rock'] }
};

// Initializing varibles to keep track of scores and CPU choice
let playerScoreNum = 0;
let cpuScoreNum = 0;
let cpuChoice = '';

// Reset all selected icons and remove confetti
function clearIcons() {
  allGameIcons.forEach((icon) => {
    icon.classList.remove('selected');
  });
  // importing module for confetti
  import('./confetti.js')
  .then( (module) => {
    module.stopConfetti();
    module.removeConfetti();
  })
}

// Reset scores and player/CPU choice
function resetAll() {
  cpuScoreNum = 0;
  cpuScoreEl.textContent = cpuScoreNum;
  cpuChoiceEl.textContent = '';
  playerScoreNum = 0;
  playerScoreEl.textContent = playerScoreNum;
  playerChoiceEl.textContent = '';
  resultText.textContent = '';
  clearIcons();
}
window.resetAll = resetAll;

// Random CPU choice 
function cpuRandomChoice() {
  const cpuChoiceNum = Math.random();
  if (cpuChoiceNum < 0.2) {
    cpuChoice = 'rock';
  } else if (cpuChoiceNum <= 0.4) {
    cpuChoice = 'paper';
  } else if (cpuChoiceNum <= 0.6) {
    cpuChoice = 'scissors';
  } else if (cpuChoiceNum <= 0.8) {
    cpuChoice = 'lizard';
  } else {
    cpuChoice = 'spock';
  }
}

// Displaying CPU choice and styling icons
function displayCpuChoice() {
  switch (cpuChoice) {
    case 'rock':
      cpuRock.classList.add('selected');
      cpuChoiceEl.textContent = ' --- Rock';
      break;

    case 'paper':
      cpuPaper.classList.add('selected');
      cpuChoiceEl.textContent = ' --- Paper';
      break;

    case 'scissors':
      cpuScissors.classList.add('selected');
      cpuChoiceEl.textContent = ' --- Scissors';
      break;

    case 'lizard':
      cpuLizard.classList.add('selected');
      cpuChoiceEl.textContent = ' --- Lizard';
      break;

    case 'spock':
      cpuSpock.classList.add('selected');
      cpuChoiceEl.textContent = ' --- Spock';
      break;

    default:
      break;
  }
}

// Check result and display scores
function updateScore(playerChoice) {
  if (playerChoice === cpuChoice) {
    resultText.textContent = "It's a tie.";
  } else {
    const choice = choices[playerChoice];
    if (choice.defeats.indexOf(cpuChoice) > -1) {
      // importing module for confetti
      import('./confetti.js')
        .then( (module) => {
          module.startConfetti();
          resultText.textContent = "You Won!";
          playerScoreNum++;
          playerScoreEl.textContent = playerScoreNum;
        })

    } else {
      resultText.textContent = "You Lost!";
      cpuScoreNum++;
      cpuScoreEl.textContent = cpuScoreNum;
    }
  }
}

// Call function to process turn
function checkResult(playerChoice) {
  clearIcons();
  cpuRandomChoice();
  displayCpuChoice();
  updateScore(playerChoice);
}

// Passing player selection value and styling icons
function select(playerChoice) {
  checkResult(playerChoice);

  switch (playerChoice) {
    case 'rock':
      playerRock.classList.add('selected');
      playerChoiceEl.textContent = ' --- Rock';
      break;

    case 'paper':
      playerPaper.classList.add('selected');
      playerChoiceEl.textContent = ' --- Paper';
      break;

    case 'scissors':
      playerScissors.classList.add('selected');
      playerChoiceEl.textContent = ' --- Scissors';
      break;

    case 'lizard':
      playerLizard.classList.add('selected');
      playerChoiceEl.textContent = ' --- Lizard';
      break;

    case 'spock':
      playerSpock.classList.add('selected');
      playerChoiceEl.textContent = ' --- Spock';
      break;

    default:
      break;
  }
}
window.select = select;

// Reset everyhting on load
resetAll();