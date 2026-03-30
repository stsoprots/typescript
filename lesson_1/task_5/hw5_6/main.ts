let createList = (itemOflist: string): void => {
    document.write(`<ul> 
                        <li>${itemOflist}</li>
                        <li>${itemOflist}</li>
                        <li>${itemOflist}</li>
                    </ul>`)
}
let li: string | null = prompt('Введіть пункт списку:');
createList(li ?? '')