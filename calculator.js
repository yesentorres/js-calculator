// calculator.js

// Example Inputs
const exampleAdditionInput = {
  num1: 3,
  num2: 5,
  operation: '+',
}

const exampleSubtractionInput = {
  num1: 3,
  num2: 5,
  operation: '-',
}

const exampleMultiplicationInput = {
  num1: 3,
  num2: 5,
  operation: '*',
}

const exampleDivisionInput = {
  num1: 3,
  num2: 5,
  operation: '/',
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
    console.log(num1 + num2);
  }

  // subtract
  else if( (operand === 'subtrct') || (operand === '-') ) {
    console.log(num1 - num2);
  }

  // multiply 
  else if( (operand === 'multiply') || (operand === '*') ) {
    console.log(num1 * num2);
  }

  // divide 
  else if( (operand === 'divide') || (operand === '/') ) {
    console.log(num1 / num2);
  }

  // print error for invalid operations
  else {
    console.log(`\"${operand}\" is not a valid operation.`);
  }

}

// Call Method 
calculate(exampleAdditionInput); 
calculate(exampleSubtractionInput); 
calculate(exampleMultiplicationInput); 
calculate(exampleDivisionInput); 

calculate(exampleBadInput1);
calculate(exampleBadInput2);
calculate(exampleBadInput3);
calculate(exampleBadInput4);