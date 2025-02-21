document.addEventListener('DOMContentLoaded', () => {
    const buttons = document.querySelectorAll('.masterDiv button, .betaDiva button');
    const display = document.getElementById('frutiger');
    let currentInput = '';
    let operator = '';
    let firstOperand = '';
    let secondOperand = '';

    buttons.forEach(button => {
        button.addEventListener('click', () => {
            const value = button.textContent;

            if (value === 'C') {
                // Clear the display and reset variables
                display.textContent = '';
                currentInput = '';
                operator = '';
                firstOperand = '';
                secondOperand = '';
            } else if (value === '=') {
                // Perform the calculation
                secondOperand = currentInput;
                const result = calculate(firstOperand, secondOperand, operator);
                display.textContent = result;
                currentInput = result;
                operator = '';
                firstOperand = '';
                secondOperand = '';
            } else if (['+', '-', '*', '/'].includes(value)) {
                // Set the operator and store the first operand
                operator = value;
                firstOperand = currentInput;
                currentInput = '';
            } else {
                // Append the number to the current input
                currentInput += value;
                display.textContent = currentInput;
            }
        });
    });

    function calculate(firstOperand, secondOperand, operator) {
        const num1 = parseFloat(firstOperand);
        const num2 = parseFloat(secondOperand);
        switch (operator) {
            case '+':
                return num1 + num2;
            case '-':
                return num1 - num2;
            case '*':
                return num1 * num2;
            case '/':
                return num1 / num2;
            default:
                return 0;
        }
    }
});