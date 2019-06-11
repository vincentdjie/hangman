//Declaring all global variables
var keyword = '';
var keyArr = [];
var inputStr = '';
var inputArr = [];
var live = 7;

//Input all elements in the game
var textInput = document.querySelector('[name="start"]');
var startButton = document.getElementById("start");
var guessInput = document.querySelector('[name="input"]');
var submitButton = document.getElementById("submit");
var guessedLetters = document.getElementById("guessedletters");
var dashWord = document.getElementById("word");

//Functions
function startGame() {
    keyword = textInput.value;
    inputArr = [];
    keyArr = keyword.split('');
    keyArr.forEach(function(letter) {
        inputArr.push('_');
    });
    dashWord.textContent = inputArr.join('   ');
    live = 7; 
    
    textInput.value = '';
    inputStr= '';
    guessedLetters.textContent = '';
}

function checkCorrect(str) {
    if (guessedLetters.textContent.includes(str)) {
        return
    } else {
        if (keyArr.includes(str)) {    
            for (var i = 0; i < keyArr.length; i++) {
                if (keyArr[i] === str) {
                inputArr[i] = str;
                dashWord.textContent =  inputArr.join('   ');
                }
            }
        } else {
            live = live - 1;
            if (live === 0) {
                guessedLetters.textContent = "You Lose!";
                dashWord.textContent = keyword;
            } else {
            inputStr = inputStr + "    " + str;
            guessedLetters.textContent = inputStr;
            }
        };
    }
};


function win () {
    if (inputArr.join('') === keyword) {
        guessedLetters.textContent = "You Win!";
    }
};


submitButton.addEventListener("click", function(t) {    
    var textInput = guessInput.value;
    checkCorrect(textInput)
    guessInput.value = '';
    win();
});

startButton.addEventListener("click", startGame);






// NOTES, ignore.
// //Variable Declarations
// var words = ['sunshine', 'car', 'elephant', 'javascript', 'millennial', 'banana'];


// //Choose one random word from the words array.
//  var word = words[Math.floor(Math.random() * words.length)];
 
//  var arrAnswer = [];
//  for (var i = 0; i < word.length; i++) {
//      arrAnswer[i] = "_";
//  }
 
//  //Create variable to keep track of letters remained to be guessed
//  var leftGuessed = word.length;

//  //Game Loop
//  while (leftGuessed > 0) {
//     //Show player the progress
//     alert(arrAnswer.join(" "));

//     //Get a guess input from player
//     var guessed = prompt("Guess a letter! To exit, click cancel.");
//     if (guessed === null) {
//         //Exit loop or game
//         break;
//         //Makes sure it is a single letter.
//     } else if (guessed.length !== 1) {
//         alert("Please enter a single letter.");
//     } else {
//         //Update game state
//         for (var a = 0; a < word.length; a++) {
//             if (word[a] = guessed) {
//                 arrAnswer[a] = guessed;
//                 leftGuessed--;
//             }
//         }
//     }
//     //End of loop
//  }

// alert(arrAnswer.join(" "));
// alert("Congratulations, you won! The answer is " + word + ".");



