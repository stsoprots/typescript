let a: string | null = prompt('Введіть перше число');
let b: string | null = prompt('Введіть друге число');

if (a !== null && b !== null) {
    let numA: number = +a
    let numB: number = +b
    if (numA > numB) {
        console.log('Найбільше число' + ' ' + numA);
    } else if (numB > numA) {
        console.log('Найбільше число' + ' ' + numB);
    } else if (numA === numB) {
        console.log('Числа рівні');
    }
}