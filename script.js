let numbers = document.querySelectorAll('.buttons_number');
let operators = document.querySelectorAll('.buttons_operands');

numbers.forEach((number) => {
  number.addEventListener('click', () => {
    console.log(number.innerText);
  });
});

operators.forEach((operator) => {
    operator.addEventListener('click', () => {
        console.log(operator.innerText);
    });
});

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