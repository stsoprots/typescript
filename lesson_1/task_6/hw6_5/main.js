let string = 'Ревуть воли як ясла повні';
let stringToarray = (str) => {
    if (str) {
        return str.split(' ');
    }
    return [''];
};
console.log(stringToarray(string));
export {};
//# sourceMappingURL=main.js.map