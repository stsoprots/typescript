export {};
//forEach

declare global {
    interface Array<T> {
        myForEach(callback: (value: T) => void): void;
        myFilter(callback: (value: T) => boolean): T[];
    }
}

Array.prototype.myForEach = function (this: any[], callback: (value: any) => void): void {
    for (const item of this) {
        callback(item);
    }
};
// Перевірка
let numbersArray = [11, 22, 33, 44, 55]
numbersArray.myForEach(x => console.log(`Елемент: ${x}`));

//filter
Array.prototype.myFilter = function (this: any[], predicate: (value: any) => boolean): any[] {
    let result = [];
    for (const item of this) {
        if (predicate(item)) {
            result.push(item);
        }
    }
    return result;
};
type Cars = { model: string, hp: number };

// Перевірка
let cars: Cars[] = [
    {model: 'A4', hp: 150},
    {model: 'RS7', hp: 600},
    {model: 'A6', hp: 245}
];

let powerfulCars = cars.myFilter(car => car.hp > 200);
console.log(powerfulCars);