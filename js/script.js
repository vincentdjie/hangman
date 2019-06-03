//Variable Declarations
var words = ['sunshine', 'car', 'elephant', 'javascript', 'millennial', 'banana'];


//Choose one random word from the words array.
 var word = words[Math.floor(Math.random() * words.length)];
 
 var answerArray = [];
 for (var i = 0; i < word.length; i++) {
     answerArray[i] = "_";
 }
 
 //Create variable to keep track of letters remained to be guessed
 var remainingLetters = word.length;

 //Game Loop
 while (remainingLetters > 0) {
    //Show player the progress
    alert(answerArray.join(" "));

    //Get a guess input from player
    var guess = prompt("Guess a letter, or click cancel to stop playing.");
    if (guess === null) {
        //Exit loop or game
        break;
        //Makes sure it is a single letter.
    } else if (guess.length !== 1) {
        alert("Please enter a single letter.");
    } else {
        //Update game state
        for (var a = 0; a < word.length; a++) {
            if (word[a] = guess;) {
                answerArray[a] = guess;
                remainingLetters--;
            }
        }
    }
    //End of loop
 }

alert(answerArray.join(" "));
alert("You won! The answer is " + word + ".");



