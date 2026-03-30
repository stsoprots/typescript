interface UsersType {
    name: string;
    age: number;
    status: boolean
}

let users: UsersType[] = [
    {name: 'vasya', age: 31, status: false},
    {name: 'petya', age: 30, status: true},
    {name: 'kolya', age: 29, status: true},
    {name: 'olya', age: 28, status: false},
    {name: 'max', age: 30, status: true},
    {name: 'anya', age: 31, status: false},
    {name: 'oleg', age: 28, status: false},
    {name: 'andrey', age: 29, status: true},
    {name: 'masha', age: 30, status: true},
    {name: 'olya', age: 31, status: false},
    {name: 'max', age: 31, status: true}
];

function addToLocalStorage (arrayName: string ,objToAdd: UsersType | UsersType[]):void{
    let lsItem = localStorage.getItem(arrayName);
    if (!lsItem) {
        throw new Error('Немає такого масиву');
    }
    let array: UsersType[] = JSON.parse(lsItem);

    if (Array.isArray(objToAdd)) {
        array.push(...objToAdd);
    } else if (typeof objToAdd === 'object' && objToAdd !== null) {
        array.push(objToAdd);
    }

    localStorage.setItem(arrayName, JSON.stringify(array));
}
addToLocalStorage('sessionsList', users);