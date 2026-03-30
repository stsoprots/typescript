let day = prompt('Введіть число поточного місяця (від 1 до 31)');
if (day !== null) {
    let dayNum = +day;
    if (dayNum >= 1 && dayNum <= 10) {
        console.log('1 декада');
    }
    else if (dayNum > 10 && dayNum <= 20) {
        console.log('2 декада');
    }
    else if (dayNum > 20 && dayNum <= 31) {
        console.log('3 декада');
    }
    else {
        console.log('Невірне значення');
    }
}
export {};
//# sourceMappingURL=main.js.map