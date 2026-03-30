let roundCylinder = (height: number, radius: number): number => 2 * Math.PI * radius * (radius + height);
let h: number = Number(prompt('Введіть висоту циліндра:'));
let r: number = Number(prompt('Введіть радіус циліндра:'));

console.log(`Площа циліндра:`, roundCylinder(h, r));