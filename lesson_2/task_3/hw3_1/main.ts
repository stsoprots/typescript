interface IProduct {
    id: number;
    title: string;
    price: number;
    quantity: number;
    total: number;
    discountPercentage: number;
    discountedTotal: number;
    thumbnail: string;
}

interface ICart {
    id: number;
    products: IProduct[]; // Вказуємо, що тут лежить масив наших товарів
    total: number;
    discountedTotal: number;
    userId: number;
    totalProducts: number;
    totalQuantity: number;
}


let cartsDiv = document.getElementById('carts') as HTMLDivElement;
fetch('https://dummyjson.com/carts')
    .then(value => value.json())
    .then((value: {carts: ICart[]}) => {//деструктуризація
        console.log(value.carts);


        for (let cart of value.carts) {
            let div = document.createElement('div') as HTMLDivElement;
            div.classList.add('cart-container');
            let divWithInfo = document.createElement('div') as HTMLDivElement;
            divWithInfo.innerText = `
                "total": ${cart.total},
                "discountedTotal": ${cart.discountedTotal},
                "userId": ${cart.userId},
                "totalProducts": ${cart.totalProducts},
                "totalQuantity": ${cart.totalQuantity}
            `;

            let ol = document.createElement('ol') as HTMLOListElement;
            for (const product of cart.products) {
                let li = document.createElement('li') as HTMLLIElement;
                let info = document.createElement('p') as HTMLParagraphElement
                info.innerText = `
                    "id": ${product.id},
                    "title": ${product.title},
                    "price": ${product.price},
                    "quantity": ${product.quantity},
                    "total": ${product.total},
                    "discountPercentage": ${product.discountPercentage},
                    "discountedTotal": ${product.discountedTotal}
                `
                let img = document.createElement('img') as HTMLImageElement;
                img.src = product.thumbnail;
                li.append(img, info);
                ol.appendChild(li);
            }

            div.append(divWithInfo, ol);
            cartsDiv.appendChild(div);
        }
    });