function createList(textOflist, number) {
    document.write(`<ul>`);
    for (let i = 0; i < number; i++) {
        document.write(`<li>${textOflist}</li>`);
    }
    document.write(`</ul>`);
}
let liContent = (prompt('Введіть текст пункта списку:') ?? '');
let num = prompt('Введіть к-сть пунктів списку:');
let listNum = +(num ?? 0);
createList(liContent, listNum);
export {};
//# sourceMappingURL=main.js.map