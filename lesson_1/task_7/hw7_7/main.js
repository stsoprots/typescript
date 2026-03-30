class Car {
    constructor(model, brand, year, maxSpeed, engineCapacity) {
        this.model = model;
        this.brand = brand;
        this.year = year;
        this.maxSpeed = maxSpeed;
        this.engineCapacity = engineCapacity;
    }
    drive() {
        console.log(`їдемо зі швидкістю ${this.maxSpeed} на годину`);
    }
    ;
    info() {
        let keys = Object.keys(this);
        for (let key of keys) {
            console.log(`${key} - ${this[key]}`);
        }
    }
    increaseMaxSpeed(speedToAdd) {
        if (speedToAdd > 0)
            this.maxSpeed = this.maxSpeed + speedToAdd;
        console.log(`Нова максимальна швидкість: ${this.maxSpeed}`);
    }
    ;
    changeYear(year) {
        if (year > 1815)
            this.year = year;
        console.log(`Новий рік випуску: ${this.year}`);
    }
    ;
    addDriver(driver) {
        if (driver)
            this.driver = driver;
    }
}
let car = new Car('A7', 'Audi', 2021, 250, 2967);
console.log(car);
car.drive();
car.info();
car.increaseMaxSpeed(100);
car.changeYear(2023);
car.addDriver({ name: 'John' });
export {};
//# sourceMappingURL=main.js.map