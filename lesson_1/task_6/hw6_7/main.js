let nums = [11, 21, 3];
//
function sortNums(array, direction) {
    if (direction === 'ascending') {
        return array.sort((a, b) => a - b);
    }
    else if (direction === 'descending') {
        return array.sort((a, b) => b - a);
    }
    return "Помилка: ви ввели неправильний напрямок!";
}
;
console.log(sortNums(nums, 'descending'));
export {};
//----------------------------
// function sortNums(array: number[], direction: string): number[] {
//     if (direction === 'ascending') return array.sort((a: number, b: number): number => a - b);
//     if (direction === 'descending') return array.sort((a: number, b: number): number => b - a)
//
//     return array
// }
//
// console.log(sortNums(nums, 'descending'));
// ---------------------------
//# sourceMappingURL=main.js.map