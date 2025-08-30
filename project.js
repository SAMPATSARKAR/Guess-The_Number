let randomNumber = parseInt(Math.random() * 100 + 1);
const submit = document.querySelector('#subt');
const UserInput = document.querySelector('#guessField');
const guessSlot = document.querySelector('.guesses');
const remaining = document.querySelector('.lastResult');
const LowOrHigh = document.querySelector('.lowOrHi');
const StartOver = document.querySelector('.resultParas');

const p = document.createElement('p');
let prevGuess = [];
let numGuess = 1;
let playGame = true;

if (playGame) {
    submit.addEventListener('click', function (e) {
        e.preventDefault();
        const guess = parseInt(UserInput.value);
        console.log(guess);
        validateGuess(guess);
    });
};
function validateGuess(guess) {
    guess = Number(guess);
    if (isNaN(guess)) {
        alert(`please enter a valid number ${guess}`);
    } else if(guess < 1)
    {
        alert(`please enter a number more than 1`);

    } else if(guess > 100)
    {
        alert(`please enter a number less than 100`);

    }else {

        prevGuess.push(guess);
        if (numGuess === 11) {
            displayGuess(guess);
            displayMessage(`GameOver.random number was ${randomNumber}`);
            endGame();
        } else {
            displayGuess(guess);
            checkGuess(guess);
        }
    }
}
function checkGuess(guess){
    if(guess === randomNumber){
        displayMessage(`you gussesed it right ${randomNumber}`);
        endGame();
    }else if(guess <randomNumber){
        displayMessage(`Number is Tooo low`);
    }else if(guess >randomNumber){
        displayMessage(`Number is tooo high`)
    }
}
function displayGuess(guess){
    UserInput.value = '';
    guessSlot.innerHTML +=`${guess}  `;
    numGuess++;
    remaining.innerHTML = `${11-numGuess}`;
}
function displayMessage(message){
    LowOrHigh.innerHTML = `<h2>${message}</h2>`;
}
function endGame(){
    UserInput.value='';
    UserInput.setAttribute('disabled','');
    p.classList.add('button');
    p.innerHTML=`<h2 id = 'newGame'> Start New Game </h2>`;
    StartOver.appendChild(p);
    playGame=false;
    newGame();
}
function newGame(){
    const newGameButton = document.querySelector('#newGame');
    newGameButton.addEventListener('click',function(e){
        randomNumber=parseInt(Math.random()*100+1);
        prevGuess=[];
        numGuess=1;
        guessSlot.innerHTML='';
        remaining.innerHTML=`${11-numGuess}`;
        UserInput.removeAttribute('disabled');
        StartOver.removeChild(p);
        playGame=true;
    })
}
