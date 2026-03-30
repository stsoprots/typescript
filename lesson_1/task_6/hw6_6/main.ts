let numbers: number[] = [10, 8, -7, 55, 987, -1011, 0, 1050, 0];
let str: string[] = numbers.map((num: number): string => String(num)) //  або num => num + '' або num => num.toString()

console.log(str);