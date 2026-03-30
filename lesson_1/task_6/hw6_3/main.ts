let str1:string = 'hello world'
let str2:string = 'lorem ipsum'
let str3:string = 'javascript is cool'

console.log(str1.toLowerCase())
console.log(str2.toLowerCase())
console.log(str3.toLowerCase())

//------------------------------

let strs:string[] = [str1, str2, str3];
for (let str of strs){
    console.log(str.toLowerCase());
}