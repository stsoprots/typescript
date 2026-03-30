const arr: string[] = ['Main', 'Products', 'About us', 'Contacts']

const listOfMenu:HTMLMenuElement = document.createElement('ul')
listOfMenu.classList.add('menu')


document.body.appendChild(listOfMenu)

for (const element of arr) {
    const li: HTMLLIElement = document.createElement('li');
    li.innerText = element;
    listOfMenu.appendChild(li)
}