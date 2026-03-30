function exchange(sumUAH: number, currencyValues: CurrencyType[], exchangeCurrency: string): number {
    for (let currency of currencyValues) {
        if (currency.currency === exchangeCurrency) {
            return sumUAH / currency.value;
        }
    }
    return -1;
}

type CurrencyType = {
    currency : string,
    value : number
}

let currencyArray: CurrencyType[] = [
    {currency: 'USD', value: 42.25},
    {currency: 'EUR', value: 49.20}
];


console.log(exchange(1000, currencyArray, 'USD'));


