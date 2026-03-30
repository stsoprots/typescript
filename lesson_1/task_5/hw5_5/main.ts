let writterParagraph = (text: string): void => {
    document.write(`<p>${text}</p>`)
}
let p: string | null = prompt('Введіть текст для параграфа:');
writterParagraph(p ?? '')
