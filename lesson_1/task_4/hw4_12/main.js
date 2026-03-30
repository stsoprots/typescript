function swap(arr, i1, i2) {
    if (i1 < arr.length && i2 < arr.length) {
        let temp = arr[i1]; // 11
        arr[i1] = arr[i2];
        arr[i2] = temp;
        return arr;
    }
    return '!!!!!!!!';
}
const numArray = [5, 12, 23, 34, 45, 56, 67];
console.log(swap(numArray, 0, 1));
export {};
//# sourceMappingURL=main.js.map