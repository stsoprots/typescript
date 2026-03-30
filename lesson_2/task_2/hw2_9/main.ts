let price: number = Number(localStorage.getItem('currentPrice')) || 100;
let lastUpdate: number = Number(localStorage.getItem('lastUpdate')) || 0

let now: number = Date.now();

if (now - lastUpdate > 10000) {
    price += 10;
    localStorage.setItem('currentPrice', price.toString());
    localStorage.setItem('lastUpdate', now.toString());

    console.log('Ціну оновлено!');
}else{
    let secondsLeft: number = Math.ceil((10000 - (now - lastUpdate)) / 1000);
    console.log(`Зачекайте ще ${secondsLeft} сек. для оновлення ціни.`);
}

let target = document.getElementById('target') as HTMLDivElement | null
// target.innerText = `${price}грн`;
if (target) {
    target.innerText = `${price}грн`
}else {
    console.error("Елемент #target не знайдено!");
}