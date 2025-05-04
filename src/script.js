let humanScore = 0;
let computerScore = 0;
let items = Array.from(document.querySelectorAll('.item-block'));

items.forEach(item => item.addEventListener('click', initiateRound));

let PAPER = 'paper';
let ROCK = 'rock';
let SCISSORS = 'scissors';

let scoreBlock = document.querySelector('.result-block');

function getComputerChoice() {
    // Gives the range of a possible combination from (0*3 + 1*3) + 1 => 1 to 3
    let choice = Math.floor(Math.random() * 3) + 1;
    let variation;

    switch (choice) {
        case 1:
            variation = SCISSORS;
            break;
        case 2:
            variation = ROCK;
            break;
        case 3:
            variation = PAPER;
            break;
    }
    return variation;
}

function getHumanChoicePrompt() {
    let userResponse;
    while (true) {
        userResponse = prompt('What do you choose? Rock, Paper or Scissors?').toLowerCase();
        if (userResponse === ROCK || userResponse === PAPER || userResponse === SCISSORS) {
            return userResponse;
        }
        alert('Give the appropriate value');
    }
}


let round = function (humanChoice, computerChoice) {
    if (humanChoice === computerChoice) {
        return 'Draw';
    }
    if (humanChoice === ROCK && computerChoice === SCISSORS) {
        humanScore++;
        return `Human Wins! ${humanChoice} beats ${computerChoice}`;
    }
    if (humanChoice === PAPER && computerChoice === ROCK) {
        humanScore++;
        return `Human Wins! ${humanChoice} beats ${computerChoice}`;

    }
    if (humanChoice === SCISSORS && computerChoice === PAPER) {
        humanScore++;
        return `Human Wins! ${humanChoice} beats ${computerChoice}`;
    }
    computerScore++;
    return `Computer Wins! ${computerChoice} beats ${humanChoice}`;
}


function initiateRound(event) {
    let humanChoice = event.currentTarget.dataset.choice;
    playRound(humanChoice);
}

function playRound(humanChoice) {

    const computerChoice = getComputerChoice();
    scoreBlock.textContent = round(humanChoice, computerChoice);
    scoreBlock.append(document.createTextNode(` ${humanScore} - ${computerScore}`))
    if (humanScore === 5 || computerScore === 5) {
        let result = document.createElement('h2');
        result.color = 'red';
        if (humanScore > computerScore) {
            result.textContent = `You won ${humanScore} - ${computerScore}`;
        } else {
            result.textContent = `You lost ${humanScore} - ${computerScore}`;
        }
        document.querySelector('.changes-container').append(result);
        items.forEach(item => {
            item.removeEventListener('click', initiateRound);
        })
        let reset = document.createElement('button');
        reset.textContent = 'Reset';
        reset.style.padding= '10px';
        document.body.append(reset);
        reset.addEventListener('click',() =>{
            humanScore = 0;
            computerScore = 0;
            scoreBlock.textContent = '';
            result.remove();
            items.forEach(item => {
                item.addEventListener('click', initiateRound);
            })
            reset.remove();
        })
    }
}

