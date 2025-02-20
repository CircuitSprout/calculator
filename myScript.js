document.addEventListener('DOMContentLoaded', () => {
    const buttons = document.querySelectorAll('.masterDiv button, .betaDiva button');
    const display = document.getElementById('frutiger');

    buttons.forEach(button => {
        button.addEventListener('click', () => {
            display.textContent += button.textContent;
        });
    });
});