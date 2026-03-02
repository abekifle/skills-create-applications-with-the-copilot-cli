function add(a, b) { return a + b; }
function subtract(a, b) { return a - b; }
function multiply(a, b) { return a * b; }
function divide(a, b) {
  if (b === 0) throw new Error('Division by zero');
  return a / b;
}

module.exports = { add, subtract, multiply, divide };

if (require.main === module) {
  const [,, op, a, b] = process.argv;
  const x = parseFloat(a), y = parseFloat(b);

  switch (op) {
    case 'add':      console.log(add(x, y)); break;
    case 'subtract': console.log(subtract(x, y)); break;
    case 'multiply': console.log(multiply(x, y)); break;
    case 'divide':   console.log(divide(x, y)); break;
    default: console.error('Unknown operation:', op);
  }
}
