let n: number = 100;
let s: string = 'asd';
let b: boolean = true;

console.log(typeof n);
console.log(typeof s);
console.log(typeof b);

interface IUsers {
    name: string;
    age: number;
}

let arr: (number | boolean)[] = [11, 22, 33, true];
let user: IUsers = {
    name: 'vasya',
    age: 31,
}

console.log(typeof arr);
console.log(typeof user);

function asd(): void{

}
console.log(typeof asd);

let x: undefined = undefined;
console.log(x);

console.log(typeof undefined);
console.log(typeof null);
console.log(typeof NaN);

// console.log(!!100);
// console.log(!!-100);
// console.log(!!'asd');

// console.log(!!0);
// console.log(!!null);
// console.log(!!undefined);
// console.log(!!'');
//
// console.log(!!'');
