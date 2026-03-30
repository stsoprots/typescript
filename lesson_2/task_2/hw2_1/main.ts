let div:HTMLDivElement = document.createElement('div');
div.classList.add('text');

let buttonElement:HTMLButtonElement = document.createElement('button');
buttonElement.classList.add('button')
buttonElement.innerText = 'Видалити';


document.body.append(div, buttonElement);

buttonElement.onclick = function():void {
    div.remove();
};