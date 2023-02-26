const displayEl = document.querySelector("span");
let waitingForsecondNum = false;
let firstNumber = 0;
let secondNumber = 0;
let opEl = "";
//passing the numbers function

function press(num) {
    if (!firstNumber) {
        firstNumber = num.toString();
    } else {
        //if the charecter was not pressed keep expecting numbers
        firstNumber += num.toString(); //this is an issue because it adds up the numbers
    }

    displayEl.innerText = firstNumber;
    console.log("this is the first number", firstNumber);
    console.log("this is the second number", secondNumber);
}

//passing the charecters
function setOP(operation) {
    //here secondnumber is true , and so we will pass the second number
    //so here, flip the first and second number values, in order to maintain the 'updating of these values '

    opEl = operation;
    secondNumber = firstNumber;
    firstNumber = 0;

    console.log(opEl);
    console.log(firstNumber);
    console.log(secondNumber);
}
//clearing the display.
function clr() {
    if (displayEl.innerText !== "") {
        firstNumber = "";
        secondNumber = "";
        opEl = "";
        displayEl.innerText = "";
    }
}

function calculate() {
    let resultEl = 0;
    if (opEl == "+") {
        resultEl = +firstNumber + +secondNumber;
    } else if (opEl == "-") {
        resultEl = +secondNumber - +firstNumber;
    } else if (opEl == "*") {
        resultEl = (+firstNumber * +secondNumber);
    } else if (opEl == "/") {
        resultEl = (+secondNumber / firstNumber);
    }
    //do not clear the screan , but reserve the first number incase the user
    //want another number to add
    displayEl.innerText = resultEl;
    firstNumber = resultEl.toString();
    secondNumber = "";
    console.log(resultEl);
}