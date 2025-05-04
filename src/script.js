let humanScore = 0;
let computerScore = 0;


function getComputerChoice() {
    // Gives the range of a possible combination from (0*3 + 1*3) + 1 => 1 to 3
    let choice = Math.floor(Math.random() * 3) + 1;
    let variation;

    switch (choice) {
        case 1:
            variation = 'scissors';
            break;
        case 2:
            variation = 'rock';
            break;
        case 3:
            variation = 'paper';
            break;
    }
    return variation;
}

function getHumanChoice() {
    let userResponse;
    while (1 === 1) {
        userResponse = prompt('What do you choose? Rock, Paper or Scissors?').toLowerCase();
        if (userResponse === 'rock' || userResponse === 'paper' || userResponse === 'scissors') {
            return userResponse;
        }
        alert('Give the appropriate value');
    }
}

let round = function (humanChoice, computerChoice) {
    if (humanChoice === computerChoice) {
        return 'Draw';
    }
    if (humanChoice === 'rock' && computerChoice === 'scissors') {
        humanScore++;
        return `Human Wins! ${humanChoice} beats ${computerChoice}`;
    }
    if (humanChoice === 'paper' && computerChoice === 'rock') {
        humanScore++;
        return `Human Wins! ${humanChoice} beats ${computerChoice}`;

    }
    if (humanChoice === 'scissors' && computerChoice === 'paper') {
        humanScore++;
        return `Human Wins! ${humanChoice} beats ${computerChoice}`;
    }
    computerScore++;
    return `Computer Wins! ${computerChoice} beats ${humanChoice}`;
}

function playGame() {
    let i = 0
    while (i !== 5) {
        const humanChoice = getHumanChoice();
        const computerChoice = getComputerChoice();
        let result = round(humanChoice, computerChoice);
        console.log(`Round ${i + 1} with result: ${result}`);
        if (humanScore === 3 || computerScore === 3) {
            break;
        }
        i++;
    }
    if (humanScore > computerScore) {
        alert(`You won ${humanScore} - ${computerScore}`);
    } else if (humanScore < computerScore) {
        alert(`You lost ${computerScore} - ${humanScore}`);
    } else {
        alert(`It's a draw ${humanScore} - ${computerScore}`);
    }
    let conclusion = prompt('Do you want to drop score?(yes)').toLowerCase();
    if (conclusion === 'yes') {
        humanScore = 0;
        computerScore = 0;
    } else {
        console.log(`Current score: ${humanScore} - ${computerScore}`);
    }
}


