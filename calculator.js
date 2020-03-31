// calculator.js

// Example Valid Inputs 
const exampleAdditionInput1 = {
  num1: 3,
  num2: 5,
  operation: '+',
}

const exampleAdditionInput2 = {
  num1: 3,
  num2: 5,
  operation: 'add',
}

const exampleSubtractionInput1 = {
  num1: 3,
  num2: 5,
  operation: '-',
}

const exampleSubtractionInput2 = {
  num1: 3,
  num2: 5,
  operation: 'subtract',
}

const exampleMultiplicationInput1 = {
  num1: 3,
  num2: 5,
  operation: '*',
}

const exampleMultiplicationInput2 = {
  num1: 3,
  num2: 5,
  operation: 'multiply',
}

const exampleDivisionInput1 = {
  num1: 3,
  num2: 5,
  operation: '/',
}

const exampleDivisionInput2 = {
  num1: 3,
  num2: 5,
  operation: 'divide',
}

// Example Invalid Inputs
const exampleBadInput1 = {
  num1: 1,
  num2: 2,
  operation: 'banana',
}

const exampleBadInput2 = {
  num1: [],
  num2: 'foobar',
  operation: 'add',
}

const exampleBadInput3 = {
  num1: 'foo',
  num2: 2,
  operation: 'add',
}

const exampleBadInput4 = {
  num1: 1,
  num2: 'bar',
  operation: 'add',
}

const exampleBadInput5 = {
  num1: 1,
  num2: 0,
  operation: 'divide',
}

// Helper Functions 
const checknum = function(value) {
  if( typeof value !== 'number' ) {
    return false;
  } 
  return true; 
} 

const add = (x, y) => x + y ;

const sub =(x, y) => x - y;

const mult = (x, y) => x * y ;

const div = (x, y) => x / y;

// Main Function 
const calculate = function(user_input) {

  // assign variables 
  const operand = user_input['operation'] ;
  const num1 = user_input['num1'];
  const num2 = user_input['num2']; 

  // check valid nums 
  if ( (checknum(num1) === false) && (checknum(num2) === false) ) {
    console.log(`Both \"${num1}\" and \"${num2}\" are invalid numbers.`);
  } 
  else if( checknum(num1) === false ) {
    console.log(`\"${num1}\" is an invalid number.`)
  } 
  else if( checknum(num2) === false ) {
    console.log(`\"${num2}\" is an invalid number.`)
  }

  // add
  else if( (operand === 'add') || (operand === '+') ) {
    console.log(`${num1} + ${num2} = ${add(num1, num2)}`);
  }

  // subtract
  else if( (operand === 'subtract') || (operand === '-') ) {
    console.log(`${num1} - ${num2} = ${sub(num1, num2)}`);
  }

  // multiply 
  else if( (operand === 'multiply') || (operand === '*') ) {
    console.log(`${num1} * ${num2} = ${mult(num1, num2)}`);
  }

  // divide 
  else if( ((operand === 'divide') || (operand === '/')) && num2 === 0 ) {
    console.log('Error: Cannot divide by zero');
  }

  else if( ((operand === 'divide') || (operand === '/')) && num2 != 0 ) {
    console.log(`${num1} / ${num2} = ${div(num1, num2)}`);
  }

  // print error for invalid operations
  else {
    console.log(`\"${operand}\" is not a valid operation.`);
  }

}

// Function Call Tests 
// successful calculations 
calculate(exampleAdditionInput1); 
calculate(exampleAdditionInput2); 
calculate(exampleSubtractionInput1); 
calculate(exampleSubtractionInput2); 
calculate(exampleMultiplicationInput1); 
calculate(exampleMultiplicationInput2); 
calculate(exampleDivisionInput1); 
calculate(exampleDivisionInput2); 
// incorrect user input responses
calculate(exampleBadInput1);
calculate(exampleBadInput2);
calculate(exampleBadInput3);
calculate(exampleBadInput4);
calculate(exampleBadInput5);