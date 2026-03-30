// function createList(array: boolean[] | number[] | string[]): void {
//     document.write(`<ul>`)
//     for (let item of array) {
//         document.write(`<li>${item}</li>`)
//     }
//     document.write(`</ul>`)
// }
function createList(array) {
    document.write(`<ul>`);
    for (let item of array) {
        document.write(`<li>${item}</li>`);
    }
    document.write(`</ul>`);
}
createList([42, "Hello", true, 3.14, "World", false, 100, "JavaScript", true, 0, "Hello World", false, 7, "Array", true, 88, "Mixed", false, 1, "Test"]);
export {};
//# sourceMappingURL=main.js.map