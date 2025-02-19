document.addEventListener('DOMContentLoaded', () => {
const divs = document.querySelectorAll('#calculator-body div');

divs.forEach(div => {
    if(!div.classList.contains('masterDiv') && !div.classList.contains('betaDiva')){
        const button = document.createElement('button');
        button.textContent = div.textContent;
        div.textContent = '';
        div.appendChild(button);
    }
});
});