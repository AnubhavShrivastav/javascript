let randomNumber= parseInt(Math.random()*100 + 1)

const submit = document.querySelector('#subt');
const userInput = document.querySelector('#guessField');
const guessSlot = document.querySelector('.guesses');
const remaining = document.querySelector('.lastResult');
const lowOrHi = document.querySelector('.lowOrHi');
const startOver = document.querySelector('.resultParas');

const p = document.createElement('p')

 let prevGuess = [];
 let numGuess = 1;

 let playGame = true;

 if (playGame){
  submit.addEventListener('click',function (e) {
    e.preventDefault(); 
   const guess = parseInt(userInput.value)
   console.log(guess)
   validateGuess(guess)

})
 }

function validateGuess(guess){
if (isNaN(guess)){
  alert(`please enter the valid number`)
}else if (guess < 1 ){
  alert (`please enter number bigger than 1 `)
}else if (guess > 100){
  alert (`please enter number smaller than 100`)
}else{
    prevGuess.push(guess)
  if (numGuess === 10 ){
    dispalyGuess(guess)
    dispalyMessaage(`Game Over,randon number was ${randomNumber}`)
    endgame()
  }else{
    dispalyGuess(guess)
    checkGuess(guess)
} 
}
}

function checkGuess(guess){
 if (guess === randomNumber){
   dispalyMessaage(`you guessed it right`)
   endgame()
 }else if (guess < randomNumber){
    dispalyMessaage(`Number is too Low`)
}else if (guess > randomNumber){
    dispalyMessaage(`Number is too High`)
}
}

function dispalyGuess(guess){
 userInput.value = '';
 guessSlot.innerHTML += `${guess}, `
 numGuess++;
 remaining.innerHTML = `${11 - numGuess}`
}

function dispalyMessaage(messaage){
lowOrHi.innerHTML = `<h2>${messaage}</h2>`;
}

function endgame(){
 userInput.value = '';
 userInput.setAttribute('disabled','');
 p.classList.add('button');
 p.innerHTML = `<h2 id="newGame">Start new Game</h2>`;
 startOver.appendChild(p);
 playGame = false;
 newGame();
}

function newGame(){
const newGameButton = document.querySelector('#newGame')
newGameButton.addEventListener('click',function(e){
  randomNumber = parseInt(Math.random() * 100 + 1);
  prevGuess = [];
  numGuess = 1;
  guessSlot.innerHTML = ''
  remaining.innerHTML = `${11 - numGuess} `;
  userInput.removeAttribute('disabled')
  startOver.removeChild(p)

  playGame = true
})
}


  







