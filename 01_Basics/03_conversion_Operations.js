//----------------String to number------------//
let score = "Niraj"
console.log(typeof score)

let valueInNumber = Number(score)
console.log(typeof valueInNumber)
console.log(valueInNumber);

// "33"=> 33
// "33abs"=> NaN
// true=> 1; false=>0

//----------------String to boolean------------//
let isLoggedIn="Niraj"
let booleanIsLoggedIn = Boolean(isLoggedIn)
console.log(booleanIsLoggedIn);

// 1 => true; 0 => false
// "" => false
// "hitesh" => true

//----------------Number to string------------//
let someNumber= 33
let stringNumber=String(someNumber)
console.log(typeof stringNumber);
console.log(stringNumber);



//********************* Operations *******************//

let value = 3
let negValue = -value
// console.log(negValue);

// console.log(2+2);
// console.log(2-2);
// console.log(2*2);
// console.log(2**3); 2^3
// console.log(2/3);
// console.log(2%3);


let str1 = "hello"
let str2 = " hitesh"

let str3 = str1 + str2
// console.log(str3);

console.log("1" + 2);
console.log(1 + "2");
console.log("1" + 2 + 2);
console.log(1 + 2 + "2");

console.log( (3 + 4) * 5 % 3);

// console.log(+true);
// console.log(+"");

let gameCounter = 100
++gameCounter;
console.log(gameCounter);
