// The specific letters that the user typed.
var computerChoices = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

// Variables for counts
var wins = 0;
var losses = 0;
var guessesLeft = 10;
var letterUser = [];


// Sets the computerGuess variable equal to a random choice from the computerChoice array.
var computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];

function countGuessesLeft() {
	document.querySelector("#guesses-left").innerHTML = " " + guessesLeft;
}

function getUserGuesses() {
	document.querySelector("#guesses").innerHTML = " " + letterUser.join(' ');
}

countGuessesLeft();

var restart = function() {
	guessesLeft = 10;
	letterUser = [];
    var computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];
    console.log(computerGuess)
}

// When the user presses a key, it will run the function
document.onkeyup = function(event) {
    guessesLeft--;
    
    var userGuess = event.key.toLowerCase();

	letterUser.push(userGuess);
	countGuessesLeft();
	getUserGuesses();

	if (userGuess === computerGuess){
		wins++;
		document.querySelector("#wins").innerHTML = " " + wins;
		restart();
	} 
	else if (guessesLeft === 0) {
		losses++;
		document.querySelector("#losses").innerHTML = " " + losses;
		restart();
	}
  };