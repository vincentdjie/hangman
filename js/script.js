//Variable Declarations
var words = ['sunshine', 'car', 'elephant', 'javascript', 'millennial', 'banana'];


//Choose one random word from the words array.
 var word = words[Math.floor(Math.random() * words.length)];
 
 var arrAnswer = [];
 for (var i = 0; i < word.length; i++) {
     arrAnswer[i] = "_";
 }
 
 //Create variable to keep track of letters remained to be guessed
 var leftGuessed = word.length;

 //Game Loop
 while (leftGuessed > 0) {
    //Show player the progress
    alert(arrAnswer.join(" "));

    //Get a guess input from player
    var guessed = prompt("Guess a letter! To exit, click cancel.");
    if (guessed === null) {
        //Exit loop or game
        break;
        //Makes sure it is a single letter.
    } else if (guessed.length !== 1) {
        alert("Please enter a single letter.");
    } else {
        //Update game state
        for (var a = 0; a < word.length; a++) {
            if (word[a] = guessed;) {
                arrAnswer[a] = guessed;
                leftGuessed--;
            }
        }
    }
    //End of loop
 }

alert(arrAnswer.join(" "));
alert("Congratulations, you won! The answer is " + word + ".");



