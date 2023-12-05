const multiply = function(a, b) {    // functions for math operations
    return a * b; 
}

const add = function(a, b) {
    return a + b;
}

const subtract = function(a, b) {
  return a - b;
}

const divide = function(a, b) {
   if (b === 0) {
    return "Cannot divide by zero";
   } else {
     return a / b; 
   }
};

let firstNumber = 0;  //  creating variables for calculator operation and initiating a default variable. 
let operator = '+';   // 
let secondNumber = 1; // 


const operate = function(operator, num1, num2) {     // Step 2: Create the operate function
  switch (operator) {
    case '+':
      return add(num1, num2);
    case '-':
      return subtract(num1, num2);
    case '*':
      return multiply(num1, num2);
    case '/':
      return divide(num1, num2);
    default:
      return "Invalid operator";
  }
};


const result = operate(operator, firstNumber, secondNumber);  // Example usage of operate function
console.log(result); // This will log the result of the operation


