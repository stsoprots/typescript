function roundCylinder(height, radius) {
    let numH = +(height ?? 0);
    let numR = +(radius ?? 0);
    return 2 * Math.PI * numR * (numR + numH);
}
let h = prompt('Введіть висоту циліндра:');
let r = prompt('Введіть радіус циліндра:');
console.log(`Площа циліндра:`, roundCylinder(h, r));
export {};
//# sourceMappingURL=main.js.map