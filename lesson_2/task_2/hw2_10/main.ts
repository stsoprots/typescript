interface IProduct {
    id: number;
    title: string;
    price: number;
}

let arr: IProduct[] = [];
for (let i = 1; i <= 100; i++) {
    arr.push({id: i, title: `Продукт №${i}`, price: Math.floor(Math.random() * 1000) });
}

let currentPage: number = 1;
const pageSize: number = 10;

const target = document.getElementById('target') as HTMLDivElement;
const prevBtn = document.getElementById('prev') as HTMLButtonElement;
const nextBtn = document.getElementById('next') as HTMLButtonElement;


function renderPage(page: number):void {
    target.innerHTML = '';
    let start: number = (page - 1) * pageSize;
    let end: number = start + pageSize;

    let pageItems: IProduct[] = arr.slice(start, end);

    for (let item of pageItems) {
        let div = document.createElement('div') as HTMLDivElement;
        div.classList.add('item');
        div.innerText = `${item.id}. ${item.title} — ${item.price} грн`;
        target.appendChild(div);
    }
    prevBtn.disabled = page === 1;
    nextBtn.disabled = page === arr.length / pageSize;
}

nextBtn.onclick = function(): void {
    if (currentPage < arr.length / pageSize) {
        currentPage++;
        renderPage(currentPage);
    }
};

prevBtn.onclick = function(): void {
    if (currentPage > 1) {
        currentPage--;
        renderPage(currentPage);
    }
};

renderPage(currentPage);

