console.clear();
const evenNumber = new Array(2,4,6,8,10);
const oddNumber = new Array(1,3,4,5,9);

const newArr1 = evenNumber.concat(oddNumber); // merge 2 array elements
// console.log(newArr1);
const newArr2 = [...evenNumber,...oddNumber]    // spread operator better version of concat can handle multiple array 
// console.log(newArr2);

const weirdArr = [1,2,[3,4],5,[6,7,[8,9],10],11];
// console.log(weirdArr);
const betterArr = weirdArr.flat(2); // concat nested array 
// console.log(betterArr);

//console.log(Array.isArray("abhishek"));
//console.log(Array.from("Abhishek")); // convert any itratable object into array elements

let score1 = 100;
let score2 = 200;
let score3 = 300;

console.log(Array.of(score1,score2,score3));