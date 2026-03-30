let createList = (textOflist: string, number: number): void => {
    document.write(`<ul>`)
    for (let i = 0; i < number; i++) {
        document.write(`<li>${textOflist}</li>`)
    }
    document.write(`</ul>`)
}
let li: string | null = (prompt('Введіть текст пункта списку:') ?? '');
let num: number = Number(prompt('Введіть к-сть пунктів списку:'));
createList(li, num)