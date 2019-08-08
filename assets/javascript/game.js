// $(document).ready(function(){

    var letters = "abcdefghijklmnopqrstuvwxyz";
    var win = 0;
    var lose = 0;
    var guessesLeft = 10;
    var guessedLetters = [];
    var randomLetter = randomLetter;

    var randomLetter = letters[Math.floor(Math.random() * letters.length)];
    console.log(randomLetter);

    function pyschicGuess() {
        randomLetter = letters[Math.floor(Math.random() * letters.length)];
        console.log(randomLetter);
    }


    document.onkeyup = function (event) {
        var userGuess = event.key;

        if (userGuess === randomLetter) {
            won++;
            guessesLeft = 10;
            guessedLetters = [];

        }

        if (userGuess !== randomLetter) {
            guessesLeft --;

        }

        if (guessesLeft == 0) {
            lost++;
            guessedLetters = [];
            guessesLeft = 10;

        }

        if (guessedLetters.indexOf(userGuess) >= 0) {
            
        } else {
            guessedLetters.push(userGuess);
            document.getElementById("userGuess").interHTML = guessedLetters;
            console.log(guessedLetters);
        }

        document.getElementById('wins').innerHTML = win;
        document.getElementById('lossses').innerHTML = lose;
        document.getElementById('guesses-left').innerHTML = guessesLeft;
    }