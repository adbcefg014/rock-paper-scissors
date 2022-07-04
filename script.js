console.log("Hello World");

function computerPlay() {
    randomNum = Math.floor(Math.random() * 3);
    switch (randomNum) {
        case 0:
            return 'Rock';
            break;
        case 1:
            return 'Paper';
            break;
        case 2:
            return 'Scissors';
            break;
    }
}

function playRound(playerSelection, computerSelection) {
    const playerChoice = playerSelection.toUpperCase();
    const computerChoice = computerSelection.toUpperCase();

    if (playerChoice === computerChoice) {
        return `You Tie! ${playerSelection} ties with ${computerSelection}`;
    }

    switch (playerChoice) {
        case 'ROCK':
            if (computerChoice === 'PAPER') {
                loseCount++;
                return 'You Lose! Paper beats Rock';
            }
            else {
                winCount++;
                return 'You Win! Rock beats Scissors';
            }
        case 'PAPER':
            if (computerChoice === 'ROCK') {
                winCount++;
                return 'You Win! Paper beats Rock';
            }
            else {
                loseCount++;
                return 'You Lose! Scissors beats Paper';
            }
        case 'SCISSORS':
            if (computerChoice === 'PAPER') {
                winCount++;
                return 'You Win! Scissors beats Paper';
            }
            else {
                loseCount++;
                return 'You Lose! Rock beats Scissors';
            }
    }
}

function game() {
    for (let i = 0; i < 5; i++) {
        const playerSelection = prompt('Choose one: Rock / Paper / Scissors', 'rock');
        const computerSelection = computerPlay();
        let roundResult = playRound(playerSelection, computerSelection);
        console.log(roundResult);
    }
    
    if (winCount > loseCount) {
        console.log("Player wins game!");
    }
    else if (winCount < loseCount) {
        console.log("Computer wins game!");
    }
    else {
        console.log("Game is a tie!");
    }
}

let winCount = 0;
let loseCount = 0;
game();