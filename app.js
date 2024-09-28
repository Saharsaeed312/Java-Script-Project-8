let randomNum = Math.floor(Math.random() * 100) + 1;
let Attempts = 0;

function guessnum() {
    let userGuess = document.getElementById('inputnum').value;
    let message = document.getElementById('message');
    Attempts++;

    if(userGuess === randomNum){
        message.textContent = `Congratulations You Guessed The Number ${inputnum} Correctly in ${Attempts}`;
        message.style.color = "green";
    }
    else if(userGuess > randomNum){
        message.textContent = `Too High Try Again!`
        message.style.color = "red";
    }
    else if(userGuess < randomNum){
        message.textContent = `Too Low Try Again!`
        message.style.color = "red";
    }

    document.getElementById('attempts').textContent = `Attempts: ${Attempts}`;
}

function RestartGame(){
    randomNum = Math.floor(Math.random() * 100) + 1;
    Attempts = 0;
    document.getElementById('inputGuess').value = "";
    message = document.getElementById('message').textContent = "";
    document.getElementById('attempts').textContent = `Attempts: 0`;
}