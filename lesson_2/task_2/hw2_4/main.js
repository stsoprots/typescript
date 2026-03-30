let currentNumber = Number(localStorage.getItem('number'));
if (isNaN(currentNumber)) {
    throw new Error('Хибне значення');
}
currentNumber += 1;
localStorage.setItem('number', currentNumber.toString());
const target = document.getElementById('target');
if (target) {
    target.innerText = `${currentNumber}`;
}
export {};
//# sourceMappingURL=main.js.map