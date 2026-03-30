let createList = (array: (number | string | boolean)[]): void => {
    document.write(`<ul>`)
    for (let item of array) {
        document.write(`<li>${item}</li>`)
    }
    document.write(`</ul>`)
}
let mixedArray: (number | string | boolean)[] = [42, "Hello", true, 3.14, "World", false, 100, "JavaScript", true, 0, "Hello World", false, 7, "Array", true, 88, "Mixed", false, 1, "Test"];

createList(mixedArray);