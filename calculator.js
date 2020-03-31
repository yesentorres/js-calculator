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

// Main Function 
const calculate = function(user_input) {

  // add
  if( user_input['operation'] === ('add' || '+') ) {
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

  // handle erroneous user input 
  else {
    console.log(`\"${user_input['operation']}\" is not a valid operation.`);
  }

}


// Call Method 
calculate(exampleAdditionInput); 
calculate(exampleSubtractionInput); 
calculate(exampleMultiplicationInput); 
calculate(exampleDivisionInput); 