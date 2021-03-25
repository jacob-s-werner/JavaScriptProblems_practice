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
    let userInput = prompt("Enter a sentence to capitalize the first letter of each word");
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

function compressStringOfChars(){
    let userInput = prompt("Enter a string of characters you would like to compress");
    let compressedString = "";
    let numOfSameChar = 1
    let lastChar;

    for (let index = 0; index < userInput.length; index++) {
        if (index == 0) {
        } else if(userInput.length - 1 == index && userInput[index] != lastChar){
            compressedString += userInput[index] + "1";

        } else if (userInput.length - 1 == index && userInput[index] == lastChar ) {
            numOfSameChar += 1;
            compressedString += lastChar + numOfSameChar.toString();

        } else if (userInput[index] != lastChar ){
            compressedString += lastChar + numOfSameChar.toString();
            numOfSameChar = 1;

        } else if (userInput[index] == lastChar) {
            numOfSameChar += 1;

        } 
        lastChar = userInput[index];
    }

    displayResult(compressedString);
}