let roundCylinder = (height, radius) => 2 * Math.PI * radius * (radius + height);
let h = Number(prompt('Введіть висоту циліндра:'));
let r = Number(prompt('Введіть радіус циліндра:'));
console.log(`Площа циліндра:`, roundCylinder(h, r));
export {};
//# sourceMappingURL=main.js.map