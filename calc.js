const calculator = {
    "name": "Calculator",
    doAdd: (a, b) => a + b,
    doSubtract: (a, b) => a - b,
    doMultiply: (a, b) => a * b,
    doDivide: function (a, b) {
        if (b !== 0) {
            return a / b;
        }
    }
}

// tests for calculator
console.log(calculator.doAdd(5, 7));
console.log(calculator.doSubtract(5, 7));
console.log(calculator.doMultiply(5, 7));
console.log(calculator.doDivide(5, 7));

