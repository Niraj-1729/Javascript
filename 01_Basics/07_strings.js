const name = "Niraj"
const repoCount=50
console.log(name+repoCount+"Some value");
// string interpolations
console.log(`hello My name is ${name} and my repo count is ${repoCount}`);

const gameName= new String("Niraj-AH-com")
console.log(gameName[0]);
console.log(gameName.__proto__);
console.log(gameName.length);
console.log(gameName.toUpperCase);
console.log(gameName.charAt(2));
console.log(gameName.indexOf('r'));

const newString=gameName.substring(0,4)
console.log(newString);

const newStringOne="         Artificial     H"
console.log(newStringOne);
console.log(newStringOne.trim());

const url="https://hitesh.com/Niraj%20Kumar"
console.log(url.replace('%20', '-'));
console.log(url.includes('Sundar'));
console.log(url.split('-'));








