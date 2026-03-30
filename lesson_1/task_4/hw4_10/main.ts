function minNum(array: (number | string)[]): number | null {

    let min: number | null = 0;

    for (const item of array) {

        if (typeof item === "number") {

            if (min === null || item < min) {
                min = item;
            }

        }
    }
    return min;
}
let numArr: (number | string)[]  = [12, 45, 78, 3.14, 22, 90, 56, 7, 100, 88, 34, 67, 5, 0, -1, 42, "Apple", "Banana", 11, 9, "Orange"];

console.log(minNum(numArr));