function displayResult(displayedResult){
    document.getElementById("displayedResult").innerHTML = displayedResult;
}

function reverseString(){
    let userInput = prompt("Enter a sentence/word you would like to reverse");
    let reversedString = "";
    
    for (let index = userInput.length -1; index >= 0; index--) {
        let inputChar = userInput[index];
        reversedString += inputChar;
    }

   displayResult(reversedString);
}

function capitalizeLetters(){
    let userInput = prompt("Enter a sentence/word you would like to reverse");
    let capitalizedSentence = "";
    let spaceCharPassed = true
    let firstLetter = true

    for (let index = 0; index < userInput.length; index++) {
        
        if (userInput[index] == ' ') {
            spaceCharPassed = true;
            firstLetter = true;
            capitalizedSentence += userInput[index]

        } else if (spaceCharPassed == true && firstLetter == true ) {
            firstLetter = false;
            capitalizedSentence += userInput[index].toUpperCase();
            
        } else  {
            firstLetter = false;
            capitalizedSentence += userInput[index];
        }
    }
   
    displayResult(capitalizedSentence);
}