let roundSquare = (radius: number): number => Math.PI * radius ** 2
let r: number = Number(prompt('Введіть радіус кола:'));

console.log(`Площа кола з радуісом r = ${r}:`, roundSquare(r));