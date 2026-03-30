let string: string = 'Ревуть воли як ясла повні';

let stringToarray = (str: string): string[] => {
    if (str){
        return str.split(' ');
    }
    return [''];
}
console.log(stringToarray(string));