let swap = (arr: number[], i1: number, i2: number): number[] | number => {
    if (i1 < arr.length && i2 < arr.length){
        let temp = arr[i1]!; // 11
        arr[i1] = arr[i2]!;
        arr[i2] = temp;

        return arr;
    }
    return -1;
}
const numArray: number[] = [5, 12, 23, 34, 45, 56, 67];
console.log(swap(numArray, 0, 1));
