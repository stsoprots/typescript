function createList(itemOflist: string | null): void {
    document.write(`<ul> 
                        <li>${itemOflist}</li>
                        <li>${itemOflist}</li>
                        <li>${itemOflist}</li>
                    </ul>`)
}
createList(prompt('Введіть пункт списку:') ?? '')
