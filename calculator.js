// calculator.js

// Example Inputs
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

// Helper Function 
const checknum = function(value) {
  if( typeof value !== 'number' ) {
    return false;
  } 
  return true; 
} 

// Main Function 
const calculate = function(user_input) {

  // Assign Variables 
  const operand = user_input['operation'] ;
  const num1 = user_input['num1'];
  const num2 = user_input['num2']; 
  let result = null;

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
    result = num1 + num2; 
    console.log(`${num1} + ${num2} = ${result}`);
  }

  // subtract
  else if( (operand === 'subtract') || (operand === '-') ) {
    result = num1 - num2; 
    console.log(`${num1} - ${num2} = ${result}`);
  }

  // multiply 
  else if( (operand === 'multiply') || (operand === '*') ) {
    result = num1 * num2; 
    console.log(`${num1} * ${num2} = ${result}`);
  }

  // divide 
  else if( ((operand === 'divide') || (operand === '/')) && num2 === 0 ) {
    console.log('Error: Cannot divide by zero');
  }

  else if( ((operand === 'divide') || (operand === '/')) && num2 != 0 ) {
    result = num1 / num2; 
    console.log(`${num1} / ${num2} = ${result}`);
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

// incorrect input responses
calculate(exampleBadInput1);
calculate(exampleBadInput2);
calculate(exampleBadInput3);
calculate(exampleBadInput4);
calculate(exampleBadInput5);