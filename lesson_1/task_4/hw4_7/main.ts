function createList(textOflist: string, number: number): void {
    document.write(`<ul>`)
    for (let i = 0; i < number; i++) {
        document.write(`<li>${textOflist}</li>`)
    }
    document.write(`</ul>`)
}
let liContent: string | null = (prompt('Введіть текст пункта списку:') ?? '');

let num: string | null = prompt('Введіть к-сть пунктів списку:');
let listNum: number = +(num ?? 0)

createList(liContent, listNum)