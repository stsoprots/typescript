function writeParagraph(text: string): void {
    document.write(`<p>${text}</p>`);
}

writeParagraph(prompt('Введіть текст для параграфа:') ?? '');
