
type Author = {
    name: string
    age: number
}
type Book = {
    title: string
    pageCount: number
    genre: string
    authors: Author[]
}


let book1: Book = {
    title: 'The Hunger Games. Book 1',
    pageCount: 458,
    genre: 'dystopian adventure',
    authors: [
        {
            name: 'Suzanne Collins',
            age: 63
        }
    ]
}
let book2: Book = {
    title: 'Harry Potter and the Philosopher\'s Stone',
    pageCount: 352,
    genre: 'fantasy',
    authors: [
        {
            name: 'J.K. Rowling',
            age: 60
        }
    ]

}
let book3: Book = {
    title: 'The Confidence Code',
    pageCount: 288,
    genre: 'self-development',
    authors: [
        {
            name: 'Katty Kay',
            age: 60
        },
        {
            name: 'Claire Shipman',
            age: 63
        }
    ]
}
