let calcArea = (a: number, b: number): number => a * b
let a: number = Number(prompt('Введіть сторону "a":'));
let b: number = Number(prompt('Введіть сторону "b":'));

console.log('Площа прямокутника:', calcArea(a, b));