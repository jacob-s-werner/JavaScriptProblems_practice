function displayResult(displayedResult){
    document.getElementById("displayedResult").innerHTML = displayedResult;
}

function reverseString(){
    let userInput = prompt("Enter a sentence/word you would like to reverse");
    let reversedString = "";
    
    for (let index = userInput.length -1; index >= 0; index--) {
        let inputChar = userInput[index]
        reversedString += inputChar
    }

   displayResult(reversedString);
}