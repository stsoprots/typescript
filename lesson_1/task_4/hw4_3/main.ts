function roundCylinder(height: string | null, radius: string | null): number {
    let numH: number = +(height ?? 0);
    let numR: number = +(radius ?? 0);

    return 2 * Math.PI * numR * (numR + numH);
}
let h: string | null = prompt('Введіть висоту циліндра:');
let r: string | null = prompt('Введіть радіус циліндра:');

console.log(`Площа циліндра:`, roundCylinder(h, r));