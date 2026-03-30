interface ICurrency {
    currency: string
    value: number
}

let exchange =
    (sumUAH: number,
     currencyValues: ICurrency[],
     exchangeCurrency: string): number | null => {
        for (let currency of currencyValues) {
            if (currency.currency === exchangeCurrency) {
                return sumUAH / currency.value;
            }
        }
        return null;
    }

let currencyArray: ICurrency[] = [
    {currency: 'USD', value: 42.25},
    {currency: 'EUR', value: 49.20}
];


console.log(exchange(1000, currencyArray, 'USD'));


