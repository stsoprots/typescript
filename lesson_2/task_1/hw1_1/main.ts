let div:HTMLDivElement = document.createElement('div');
div.classList.add('wrap', 'collapse', 'alpha', 'beta');
div.innerText = 'Sovereign'
div.style.background = 'purple';
div.style.color = 'black';
div.style.fontSize = '45px';
document.body.appendChild(div);
let cloneDiv:Node = div.cloneNode(true);
document.body.appendChild(cloneDiv);
