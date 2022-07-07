function computerPlay() {
    randomNum = Math.floor(Math.random() * 3);
    switch (randomNum) {
        case 0:
            return 'ROCK';
            break;
        case 1:
            return 'PAPER';
            break;
        case 2:
            return 'SCISSORS';
            break;
    }
}

function playRound(e) {
    const playerChoice = e.target.id;
    const computerChoice = computerPlay();
    const para = document.createElement('p');

    if (playerChoice === computerChoice) {
        para.textContent = `You Tie! ${playerChoice} ties with ${computerChoice}`;
        results.appendChild(para);
        updateScore();
        return;
    }

    switch (playerChoice) {
        case 'ROCK':
            if (computerChoice === 'PAPER') {
                loseCount++;
                para.textContent = 'You Lose! PAPER beats ROCK';
                results.appendChild(para);
                updateScore();
                break;
            }
            else {
                winCount++;
                para.textContent = 'You Win! ROCK beats SCISSORS';
                results.appendChild(para);
                updateScore();
                break;
            }
        case 'PAPER':
            if (computerChoice === 'ROCK') {
                winCount++;
                para.textContent = 'You Win! PAPER beats ROCK';
                results.appendChild(para);
                updateScore();
                break;
            }
            else {
                loseCount++;
                results.textContent = 'You Lose! SCISSORS beats PAPER';
                results.appendChild(para);
                updateScore();
                break;
            }
        case 'SCISSORS':
            if (computerChoice === 'PAPER') {
                winCount++;
                para.textContent = 'You Win! SCISSORS beats PAPER';
                results.appendChild(para);
                updateScore();
                break;
            }
            else {
                loseCount++;
                para.textContent = 'You Lose! ROCK beats SCISSORS';
                results.appendChild(para);
                updateScore();
                break;
            }
    }
}

function updateScore() {
    const player = document.querySelector('.score #player');
    const computer = document.querySelector('.score #computer');

    player.textContent = `Player Score: ${winCount}`;
    computer.textContent = `Computer Score: ${loseCount}`;

    const winner = document.querySelector('.score #winner');
    if (winCount >= 5) {
        winner.textContent = 'Winner of game is Player!';
    } else if (loseCount >= 5) {
        winner.textContent = 'Winner of game is Computer!';
    }
}

let winCount = 0;
let loseCount = 0;
const results = document.querySelector('.results');
const buttons = document.querySelectorAll('.choice');
buttons.forEach(button => button.addEventListener('click', playRound));
