class Cinderella {
    constructor(name, age, footSize) {
        this.name = name;
        this.age = age;
        this.footSize = footSize;
    }
}
class Prince {
    constructor(name, age, shoeSize) {
        this.name = name;
        this.age = age;
        this.shoeSize = shoeSize;
    }
}
let cinderellas = [
    new Cinderella("Yustyna", 18, 35),
    new Cinderella("Olena", 19, 36),
    new Cinderella("Ira", 20, 37),
    new Cinderella("Tessia", 21, 38),
    new Cinderella("Caera", 22, 39),
    new Cinderella("Maria", 23, 40),
    new Cinderella("Sofia", 24, 34),
    new Cinderella("Yulia", 25, 33),
    new Cinderella("Nadia", 26, 41),
    new Cinderella("Vika", 27, 32)
];
let prince = new Prince("Arthur", 25, 38);
// for (let girl of cinderellas){
//     if (girl.footSize === prince.shoeSize) {
//         console.log(`Попелюшка для ${prince.name} є ${girl.name}`);
//         prince.wife = girl
//     }
// }
let foundCinderella = cinderellas.find(girl => girl.footSize === prince.shoeSize);
if (foundCinderella) {
    prince.wife = foundCinderella;
    console.log("Попелюшка це:", foundCinderella.name);
    console.log(prince);
}
export {};
//# sourceMappingURL=main.js.map