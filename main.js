var secretNumber;
var guessedNumbers = [];
var mesBox = document.querySelector("#messageBox");
function start()
{
    secretNumber = Math.floor(Math.random() * 100) +1;
}

function guessButtonPressed()
{
    var guess = parseInt(document.querySelector(".guessField").value);
}

function isValidGuess(numero)
{
    if(numero = Number.NaN){return false}
    if(numero > 100 || numero < 1){return false}
    if(guessedNumbers.includes(numero)){return false}
    else{guessedNumbers.push(numero); return true}
}

function CheckIfCorrect()
{
    if(numero == secretNumber)
    {

    }
    if(numero != secretNumber)
    {
        
    }
}