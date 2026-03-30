let exchange = (sumUAH, currencyValues, exchangeCurrency) => {
    for (let currency of currencyValues) {
        if (currency.currency === exchangeCurrency) {
            return sumUAH / currency.value;
        }
    }
    return null;
};
let currencyArray = [
    { currency: 'USD', value: 42.25 },
    { currency: 'EUR', value: 49.20 }
];
console.log(exchange(1000, currencyArray, 'USD'));
export {};
//# sourceMappingURL=main.js.map