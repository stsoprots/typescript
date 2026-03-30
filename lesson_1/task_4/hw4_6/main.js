function createList(itemOflist) {
    document.write(`<ul> 
                        <li>${itemOflist}</li>
                        <li>${itemOflist}</li>
                        <li>${itemOflist}</li>
                    </ul>`);
}
createList(prompt('Введіть пункт списку:') ?? '');
export {};
//# sourceMappingURL=main.js.map