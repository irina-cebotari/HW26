const counterElem = document.getElementById('counter');
const addBtn = document.getElementById('addBtn');
const minusBtn = document.getElementById('minusBtn');

let counter = localStorage.getItem('counterValue') || 0;
counterElem.textContent = counter;

addBtn.addEventListener('click', () => {
    counter++;
    counterElem.textContent = counter;
    localStorage.setItem('counterValue', counter);
});

minusBtn.addEventListener('click', () => {
    counter--;
    counterElem.textContent = counter;
    localStorage.setItem('counterValue', counter);
});