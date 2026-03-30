// Коли створюємо тип то в назві його вказувати Type наприклад type ProductsType ...
// Відповідно коли interface то в назві вставляємо на початку велику літеру I наприклад IProducts
let products = [
    {
        title: 'milk',
        price: 22,
        image: 'https://www.mcqueensdairies.co.uk/wp-content/uploads/2019/02/Mcqueens_1litre_whole_organic-300x300-3.jpg'
    },
    {
        title: 'juice',
        price: 27,
        image: 'https://m.media-amazon.com/images/I/4122WnC+WBL._AC_UF350,350_QL80_.jpg'
    },
    {
        title: 'tomato',
        price: 47,
        image: 'https://dictionary.cambridge.org/ru/images/thumb/tomato_noun_001_17860.jpg?version=5.0.74'
    },
    {
        title: 'tea',
        price: 15,
        image: 'https://i.pinimg.com/236x/53/58/d4/5358d4f27a607cd06267dc4d72972309.jpg'
    },
];
for (let product of products) {
    document.write(`<div class="product-card">
                            <h3 class="product-title">${product.title}. Price – ${product.price}</h3>
                            <img src="${product.image}" alt="" class="product-image">
                  </div>`);
}
export {};
//# sourceMappingURL=main.js.map