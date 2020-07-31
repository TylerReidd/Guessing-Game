/*------Constants------*/

/*------Variables------*/
let secretNum, guessList, isWinner, currentGuess;
/*------Cached Element References---creates SHORTCUTS---*/
const messageEl = document.getElementById('message');
const guessesEl = document.getElementById('prevGuesses');
const guessBtn = document.getElementById('guessButton');
const resetBtn = document.getElementById('resetButton');
const guessInput = document.getElementById('guessInput');
const titleEl = document.querySelector('h1')


/*------Event Listeners--sets all state variables
for a new game----*/
resetBtn.addEventListener('click', function(){
    init()
});
guessBtn.addEventListener('click', function(){
    if(guessList.length === 0) {
        guessesEl.innerText = 'Previous Guesses:'
    }
    if(isWinner === false) {
        checkGuess(parseInt(guessInput.value))
    }
})


/*------Functions------*/
init(); /*stands for initiate */
function init(){
    //easy way to remove all appended children from element
    guessesEl.innerText = ''
    messageEl.innerText = 'Please enter a number between 1-100'
    guessInput.value = ''
    guessList = [];
    isWinner = false;
    secretNum = Math.floor(Math.random()*100) + 1
}

function checkGuess(guess){
    guessInput.value
    if(guess < 1 || guess > 100){
        messageEl.innerText = 'Whoops select a number within range'
    }
    else if(guess === secretNum) {
        confetti.start(1500)
        messageEl.className = 'winner'
        isWinner = true;
        messageEl.innerText = `Your guess of ${guess} is CORRECT! You found it in ${guessList.length} guesses.`
        titleEl.className = "animate__animated animate__bounce"
    //win scenario
    } else if(guess < secretNum){
        messageEl.innerText= `Your guess of ${guess} is too low`
        messageEl.className = 'low'
        guessList.push(guess)
        
        console.log(guess, ' is too low')
    } else {
        messageEl.innerText= `Your guess of ${guess} is too high`
        messageEl.className = 'high'
        guessList.push(guess)
        
        console.log(guess, ' is too high')
    } 
    render(guess)
}
function render(guess) {
    // Append a Child Div to the GuessesEl div based on whether guess is
    //higher or lower than secret number
    if(guess > secretNum){
// Create a new div and append to parent div(messageEl)
    let div = document.createElement("div");
    div.id ='guess'
    div.innerText = guess;
    div.className = 'high';
    guessesEl.appendChild(div)
    } else {
        let div = document.createElement("div");
    div.innerText = guess;
    div.className = 'low';
    guessesEl.appendChild(div)
        //some other stuff 
    }
}
// Add an event listener for the 'Submit' button that calls a function to check the current guess. Pass the current value of the input element into the function for comparison. This function should compare the guess to the secret number. Stub up conditional statements to handle what happens when the number is higher, lower, or equal to the secret number.
// Fill in each of the conditional statements for the checkGuess function. Flip the isWinner variable to true if there's a correct guess to prevent additional clicks. Add a line to clear out the guess input value as well as error handling for inputting a number out of range. Push the guess into the previous guesses array. Call a function to render all guesses.
// Write a render function to display the list of previous guesses on the page. Append an element to the cached guesses element, also adding a class name indicating whether it is higher or lower than the secret number.
