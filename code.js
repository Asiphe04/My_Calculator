// Get the result element
const resultElement = document.getElementById('result');

// Function to append a number to the result
function appendNumber(number) {
  resultElement.value += number;
}

// Function to perform an operation (+, -, *, /)
function performOperation(operator) {
  resultElement.value += operator;
}

// Function to clear the result
function clearResult() {
  resultElement.value = '';
}

// Function to calculate the result
function calculate() {
  try {
    const result = eval(resultElement.value);
    resultElement.value = result;
  } catch (error) {
    resultElement.value = 'Error';
  }
}

// Function to clear the input
function clearInput() {
  resultElement.value = '';
}

// Function to calculate the percentage
function calculatePercentage() {
  let currentValue = parseFloat(resultElement.value);
  let percentageValue = currentValue / 100;
  resultElement.value = percentageValue;
}

// Function to add decimal point
function addDecimalPoint() {
  if (!resultElement.value.includes('.')) {
    resultElement.value += '.';
  }
}

// Listen for keydown event on the document
document.addEventListener('keydown', function(event) {
  const key = event.key;

  // Check if the key is a number
  if (/^\d$/.test(key)) {
    appendNumber(key);
  }

  // Check if the key is an operator (+, -, *, /, ., %)
  if (['+', '-', '*', '/','.','%',].includes(key)) {
    performOperation(key);
  }

  // Check if the key is the Enter key
  if (key === 'Enter') {
    calculate();
  }

  // Check if the key is the Escape key
  if (key === 'Escape') {
    clearResult();
  }
});
  // Function to perform backspace
  function backspace() {
    resultElement.value = resultElement.value.slice(0, -1);
}
 // Check if the key is the Backspace key
 if (key === 'Backspace') {
    backspace();
 }
