let a = prompt('Введіть перше число');
let b = prompt('Введіть друге число');
if (a !== null && b !== null) {
    let numA = +a;
    let numB = +b;
    if (numA > numB) {
        console.log('Найбільше число' + ' ' + numA);
    }
    else if (numB > numA) {
        console.log('Найбільше число' + ' ' + numB);
    }
    else if (numA === numB) {
        console.log('Числа рівні');
    }
}
export {};
//# sourceMappingURL=main.js.map