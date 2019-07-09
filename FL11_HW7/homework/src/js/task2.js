let startGame = confirm('Do you want to play a game?');
const maxRand = 5;
let rand;
let attempts;
let totalPrize = 0;
let possiblePrize = 0;


if (startGame) {
    game();
} else {
    alert('You did not become a millionaire, but can.');
}
function game() {
    let maxR = maxRand;
    attempts = 0;
    totalPrize = 0;
    possiblePrize = 20;
    rand = Math.round(Math.random() * maxR);
    for (let i = 0; i < 3; i++) {
        possiblePrize = Math.floor(possiblePrize / 2);
        let userNumber = parseInt(prompt('Enter a number of 0 to 5' + '\n' +
            'Attempt left:' + attempts + '\n' +
            'Total prize:' + totalPrize + '$' + '\n' +
            'Possible prize on current attempt:' + possiblePrize + '$'), 10)
        attempts++
        if (userNumber === null) {
            let oops = confirm('Do you want to play again?')
            if (oops) {
                game()
            } else {
                alert('You did not become a millionare, but can.')
            }
        }
        if (rand === userNumber) {
            totalPrize = possiblePrize;
            alert('Congratulations! Your prise is:' + totalPrize + '$')
            let continueGame = confirm('Do you want to continue ?');
            if (continueGame) {
                gameSecond()
            } else {
                alert('Thank you for your time')
            }
            break;
        }

    }
    alert('Thank you for a game. Your prize is:' + totalPrize + '$');
    let returnGame = confirm('Do you want to play again?');
    if (returnGame) {
        game();
    } else {
        alert('Thank you for you game');
    }

    function gameSecond() {
        attempts = 0;
        const maxRand = 10;
        const possiblePrizeTwo = 60;
        rand = Math.round(Math.random() * maxRand)
        for (let i = 0; i < 3; i++) {
            let priseM = possiblePrizeTwo;
            priseM = Math.floor(possiblePrizeTwo / 2)
            let usNumber = parseInt(prompt('Enter a number of 0 to 10' + '\n' +
                'Attempt left:' + attempts + '\n' +
                'Total prize:' + totalPrize + '$' + '\n' +
                'Possible prize on current attempt:' + priseM + '$'), 10)
            attempts++
            if (rand === usNumber) {
                totalPrize = priseM;
                alert('Congratulations you win your prize is:' + totalPrize + '$')
                let turnUp = confirm('Do you want to play again?')
                if (turnUp) {
                    game();
                } else {
                    alert('Thank you for a game')
                }
            }
        }

    }

}