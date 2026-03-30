const arr = ['Main', 'Products', 'About us', 'Contacts'];
const listOfMenu = document.createElement('ul');
listOfMenu.classList.add('menu');
document.body.appendChild(listOfMenu);
for (const element of arr) {
    const li = document.createElement('li');
    li.innerText = element;
    listOfMenu.appendChild(li);
}
export {};
//# sourceMappingURL=main.js.map