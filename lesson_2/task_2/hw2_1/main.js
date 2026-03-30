let div = document.createElement('div');
div.classList.add('text');
let buttonElement = document.createElement('button');
buttonElement.classList.add('button');
buttonElement.innerText = 'Видалити';
document.body.append(div, buttonElement);
buttonElement.onclick = function () {
    div.remove();
};
export {};
//# sourceMappingURL=main.js.map