const marvel_heros = ["thor", "Ironman", "spiderman"]
const dc_heros = ["superman", "flash", "batman"]

// marvel_heros.push(dc_heros)

// console.log(marvel_heros);
// console.log(marvel_heros[3][1]);

const all_new_heros = [...marvel_heros, ...dc_heros]  // Spread operator 
// console.log(all_new_heros);

const real_another_array = another_array.flat(Infinity) // spreads all the array and subarray elements 
console.log(real_another_array);

console.log(Array.isArray("Hitesh"))  // check is it a array or not 
console.log(Array.from("Hitesh"))  // converts string into array 
console.log(Array.from({name: "hitesh"})) // Important regarding interview 

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3)); // making array out of the variable values 