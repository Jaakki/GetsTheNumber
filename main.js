var secretNumber;
var guessedNumbers = [];
var wrongBox = document.getElementById("wrongGuesses");
var mesBox = document.getElementById("messageBox");
const guessField = document.querySelector(".guessField");
function start()
{
    wrongBox.innerHTML = "";
    mesBox.innerHTML = "";
    secretNumber = Math.floor(Math.random() * 100) +1;
    console.log(secretNumber);
    guessedNumbers = [];
}

function guessButtonPressed()
{
    var userGuess = Number(guessField.value);
    var guessBool = isValidGuess(userGuess);
    if(guessBool == true)
    {
        CheckIfCorrect(userGuess)
    }
    guessField.value = "";
    wrongBox.innerHTML = guessedNumbers;
}

function isValidGuess(numero)
{
    if(isNaN(numero))
    {
        mesBox.innerHTML = "Type a number from 1 - 100. ";
        return false;
    }
    else if(numero > 100 || numero < 1)
    {
        mesBox.innerHTML = "Number must be within range, 1 - 100. ";
        return false;
    }
    else if(guessedNumbers.includes(numero))
    {
        mesBox.innerHTML = "Number already guessed, try a new number. ";
        return false;
    }
    else
    {guessedNumbers.push(numero); return true;}
}

function CheckIfCorrect(numero)
{
    if(numero == secretNumber)
    {
        mesBox.innerHTML = "Oikein! Arvauksien määrä: " +guessedNumbers.length+ "<button onclick=start()>Restart</button>";
    }
    if(numero != secretNumber)
    {
        mesBox.innerHTML = "Väärin!";
        if(numero < secretNumber)
        {
            mesBox.innerHTML += "Numero on isompi";
        }
        if(numero > secretNumber)
        {
            mesBox.innerHTML += "Numero on pienempi";
        }
    }
}