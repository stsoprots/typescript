function roundSquare(radius: string | null): number {
    let numRadius: number = +(radius ?? 0);
    return Math.PI * numRadius ** 2;
}
let r: string | null = prompt('Введіть радіус кола:');

console.log(`Площа кола з радуісом r = ${r}:`, roundSquare(r));