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