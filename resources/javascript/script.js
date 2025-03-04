console.log("Script loaded!");
let currentInput = '';
let previousInput = '';
let operator = '';

function appendNumber(number) {
  currentInput += number.toString();
  document.getElementById('display').value = currentInput;
}

function setOperator(op) {
  if (currentInput === '' && previousInput !== '') {
    operator = op;
    return;
  }
  if (previousInput !== '' && currentInput !== '') {
    calculateResult();
  }
  operator = op;
  previousInput = currentInput;
  currentInput = '';
}

function calculateResult() {
  let result;
  const prev = parseFloat(previousInput);
  const current = parseFloat(currentInput);

  if (isNaN(prev) || isNaN(current)) return;

  switch (operator) {
    case '+':
      result = prev + current;
      break;
    case '-':
      result = prev - current;
      break;
    case '*':
      result = prev * current;
      break;
    case '/':
      result = current === 0 ? 'Error' : prev / current;
      break;
    default:
      return;
  }

  currentInput = result.toString();
  operator = '';
  previousInput = '';
  document.getElementById('display').value = currentInput;
}

function clearDisplay() {
  currentInput = '';
  previousInput = '';
  operator = '';
  document.getElementById('display').value = '';
}
