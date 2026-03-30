function roundSquare(radius) {
    let numRadius = +(radius ?? 0);
    return Math.PI * numRadius ** 2;
}
let r = prompt('Введіть радіус кола:');
console.log(`Площа кола з радуісом r = ${r}:`, roundSquare(r));
export {};
//# sourceMappingURL=main.js.map