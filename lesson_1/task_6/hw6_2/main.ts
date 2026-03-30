let str1:string = 'hello world'
let str2:string = 'lorem ipsum'
let str3:string = 'javascript is cool'

console.log(str1.toUpperCase())
console.log(str2.toUpperCase())
console.log(str3.toUpperCase())

//------------------------------

let strs:string[] = [str1, str2, str3];
for (let str of strs){
    console.log(str.toUpperCase());
}