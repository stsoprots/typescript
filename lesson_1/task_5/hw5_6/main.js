let createList = (itemOflist) => {
    document.write(`<ul> 
                        <li>${itemOflist}</li>
                        <li>${itemOflist}</li>
                        <li>${itemOflist}</li>
                    </ul>`);
};
let li = prompt('Введіть пункт списку:');
createList(li ?? '');
export {};
//# sourceMappingURL=main.js.map