let numbers = document.querySelectorAll('.buttons_number');
let operators = document.querySelectorAll('.buttons_operands');
let display = document.querySelector('.display_input');


// calculator inputs
let firstNumber = '';
let secondNumber = '';
let operator = '';
let displayValue = '';


const displayNumber = number => {

}





// buttons section
function buttonClick(value) {
  // if the value is not a number when parsedInt, then call the symbol function
  if (isNaN(parseInt(value))) {
    handleSymbol(value);
  } else {
    handleNumber(value);
  }
}




// taking the buttons and eventlistening for clicks, then getting
// the innertext of the divs
numbers.forEach(number => {
  number.addEventListener('click', (event) => {
    buttonClick(event.target.innerText);
  });
});


// same for the operators
operators.forEach(operator => {
  operator.addEventListener('click', (event) => {
    buttonClick(event.target.innerText);
  });
});


// handling different types of input
function handleNumber(value) {
  console.log('number');
  if (operator) {
    secondNumber += value;
    displayValue = secondNumber;
  } else {
    firstNumber += value;
    displayValue = firstNumber;
  }
  display.innerText = displayValue;
}

function handleSymbol(value) {
  console.log('symbol');
}


/* appendNumber = number => {
    if (number === '.' && displayValue.includes('.')) return;
    displayValue = displayValue.toString() + number.toString();
    display.innerText = displayValue;
} */



// operations for the calculator aha
function operate (operator, firstNumber, secondNumber) {
    switch (operator) {
        case '+':
        return firstNumber + secondNumber;
        break;
        case '-':
        return firstNumber - secondNumber;
        break;
        case '*':
        return firstNumber * secondNumber;
        break;
        case '/':
        return firstNumber / secondNumber;
        break;
    }
}