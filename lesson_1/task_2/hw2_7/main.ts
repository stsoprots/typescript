let time: string | null = prompt('Введіть час від 0 до 59');
if (time !== null) {
    let timeNum: number = +time;
    if (timeNum >= 0 && timeNum < 15) {
        console.log('1');
    } else if (timeNum >= 15 && timeNum < 30) {
        console.log('2');
    } else if (timeNum >= 30 && timeNum < 45) {
        console.log('3');
    } else if (timeNum >= 45 && timeNum < 60) {
        console.log('4');
    } else {
        console.log('Число поза діапазону');
    }
}
