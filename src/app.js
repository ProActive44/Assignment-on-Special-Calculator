// Progression 1: Create special addition

function specialAddition(numberOne, numberTwo) {
  if (numberOne < 0 || numberTwo < 0) {
    return 'Negative numbers are not allowed';
  }
  if(typeof numberOne === 'number'){
    return numberOne - numberTwo;
  }
  return 'Not a number'
}

// Progression 2: Create simple division

function simpleDivision(numberOne, numberTwo) {
  if (numberOne < 0 || numberTwo < 0) {
    return 'Negative numbers are not allowed';
  }
  if (numberOne < numberTwo) {
    return 'Cannot divide a smaller number by a larger number';
  }
  if(numberTwo == 0){
    return 'Not a number'
  }
  return numberOne / numberTwo;
}

// Progression 3: Create the special calculator
function specialCalculator(numberOne, numberTwo, operation) {
  return operation(numberOne, numberTwo);
}
