let createList = (textOflist, number) => {
    document.write(`<ul>`);
    for (let i = 0; i < number; i++) {
        document.write(`<li>${textOflist}</li>`);
    }
    document.write(`</ul>`);
};
let li = (prompt('Введіть текст пункта списку:') ?? '');
let num = Number(prompt('Введіть к-сть пунктів списку:'));
createList(li, num);
export {};
//# sourceMappingURL=main.js.map