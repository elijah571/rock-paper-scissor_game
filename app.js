let score = JSON.parse(localStorage.getItem('score')) || {
    wins: 0,
    losses: 0,
    ties: 0
};
updateScore();

function playGame(playerMove) {  
    const computerMove =  pickComputerMove();

    let result = '';
    if (playerMove === 'rock') {
        if (computerMove === 'rock') {
            result = 'Tie';
        }else if (computerMove === 'paper') {
            result = 'You Loss';
        }else if (computerMove === 'scissors') {

            result = 'You Win';
        }
    } else if (playerMove === 'paper') {
        if (computerMove === 'rock') {
            result = 'You Win';
        }else if (computerMove === 'paper') {
            result = 'Tie';
        }else if (computerMove === 'scissors') {
            result = 'You Loss';
        }
    }else if ( playerMove === 'scissors') {
        if (computerMove === 'rock') {
            result =  'You Loss';
        } else if (computerMove === 'paper') {
            result = 'You Win';
        }else if (computerMove === 'scissors') {
            result = 'Tie';
        }
    }
    if ( result === 'You Win') {
        score.wins++;
    }else if (result === 'You Loss') {
        score.losses+= 1;
    }else if (result === 'Tie') {
        score.ties+= 1;
    }
    localStorage.setItem('score', JSON.stringify(score));
    updateScore();
    document.querySelector('.js-moves').innerHTML = `You pick ${playerMove} and Computer Picked ${computerMove}`;

    document.querySelector('.js-result').innerHTML = `${result}`;
    
}

function updateScore(){
    document.querySelector('.js-score').innerHTML = `Wins: ${score.wins}, Losses: ${score.losses}, Ties: ${score.ties}`;
}


function pickComputerMove() {
    const randomNumber = Math.random();
    let computerMove = '';
    if (randomNumber >= 0 && randomNumber < 1/3) {
        computerMove = 'rock';
    } else if (randomNumber >= 1/3 && randomNumber < 2/3) {
        computerMove = 'paper';
    } else if (randomNumber>= 2/3 && randomNumber < 1) {
        computerMove = 'scissors';
    }
    return computerMove;
    
}