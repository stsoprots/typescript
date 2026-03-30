let x: number = 2;

if (x !== 0) {
    console.log('Вірно');
}else {
    console.log('Невірно');
}


let strValue: string | null = prompt('Введіть число');

if (strValue !== null) {
    let numValue: number = +strValue;
    if (numValue !== 0) {
        console.log('Вірно');
    }else {
        console.log('Невірно');
    }
}