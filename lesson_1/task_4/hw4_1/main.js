let a = prompt('Введіть сторону "a":');
let b = prompt('Введіть сторону "b":');
function calcArea(a, b) {
    let numA = +(a ?? 0);
    let numB = +(b ?? 0);
    return numA * numB;
}
//.... null): number - інколи не обов'язково вказувати кожен раз number тип як повернення бо TS і так розуміє що це number
console.log('Площа прямокутника:', calcArea(a, b));
export {};
//# sourceMappingURL=main.js.map