// calculator.js

// Example Inputs
const exampleAdditionInput = {
  num1: 3,
  num2: 5,
  operation: 'add',
}

const exampleSubtractionInput = {
  num1: 3,
  num2: 5,
  operation: 'subtract',
}


const exampleMultiplicationInput = {
  num1: 3,
  num2: 5,
  operation: 'multiply',
}

const exampleDivisionInput = {
  num1: 3,
  num2: 5,
  operation: 'divide',
}

// Example Erroneous Inputs 
const exampleBadInput1 = {
  num1: [],
  num2: {number: 1},
  operation: 'add',
}

const exampleBadInput2 = {
  num1: 'foo',
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

  // check valid nums 
  if ( (checknum(user_input['num1']) && checknum(user_input['num2'])) === false ) {
    console.log(`Both \"${user_input['num1']}\" and \"${user_input['num2']}\" are invalid numbers.`);
  } 
  else if( checknum(user_input['num1']) === false ) {
    console.log(`\"${user_input['num1']}\" is an invalid number.`)
  } 
  else if( checknum(user_input['num2']) === false ) {
    console.log(`\"${user_input['num2']}\" is an invalid number.`)
  }

  // add
  else if( user_input['operation'] === ('add' || '+') ) {
    console.log(user_input['num1'] + user_input['num2']);
  }

  // subtract
  else if( user_input['operation'] === ('subtract' || '-') ) {
    console.log(user_input['num1'] - user_input['num2']);
  }

  // multiply 
  else if( user_input['operation'] === ('multiply' || '*') ) {
    console.log(user_input['num1'] * user_input['num2']);
  }

  // divide 
  else if( user_input['operation'] === ('divide' || '/') ) {
    console.log(user_input['num1'] / user_input['num2']);
  }

  // print error for invalid operations
  else {
    console.log(`\"${user_input['operation']}\" is not a valid operation.`);
  }

}


// Call Method 
calculate(exampleAdditionInput); 
calculate(exampleSubtractionInput); 
calculate(exampleMultiplicationInput); 
calculate(exampleDivisionInput); 

calculate(exampleBadInput1);
calculate(exampleBadInput2);