let score = JSON.parse(localStorage.getItem('score')) || {
    wins: 0,
    losses: 0,
    ties: 0
};
updateScore();

document.body.addEventListener('keydown', (event) => {
    if (event.key === 'r'){
        playGame('rock');
    } else if (event.key === 'p') {
        playGame('paper');
    }else if (event.key === 's') {
        playGame('scissors');
    } else if (event.key === 'a') {
        playGame(autoPlay());
    }
})
const rockButton = document.querySelector('.js-rock');
rockButton.addEventListener('click', () => {
    playGame('rock');
});

const paperButton = document.querySelector('.js-paper');

paperButton.addEventListener('click', () => {
    playGame('paper');
})

const scissorsButton = document.querySelector('.js-scissors');
scissorsButton.addEventListener('click', () => {
    playGame('scissors');
})

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
    document.querySelector('.js-moves')
        .innerHTML = `You  <img src="images/${playerMove}.png" alt=""> Computer <img src="images/${computerMove}.png" alt="">`;

    document.querySelector('.js-result').innerHTML = `${result}`;
    
}

function resetScore() {
    score = {
        wins: 0,
        losses: 0,
        ties: 0
    };
    localStorage.removeItem('score');
    updateScore();
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

let isAutoPlaying = false;
let intervalId;

function  autoPlay() {
    if (!isAutoPlaying) {
        intervalId = setInterval(function(){
            const playerMove = pickComputerMove();
            playGame(playerMove);
        },1000);
        isAutoPlaying = true;
    } else {
        clearInterval(intervalId);
        isAutoPlaying = false;
    }
}