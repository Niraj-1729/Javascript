//------------------------For in -------------------------------

const myObject={
    js:'javascript',
    cpp:'C++',
    rb:'Ruby',
    swift:'Swift by apple',
}

// this is how we use "for in insted of for of" loop in objects 
for(const key in myObject){
    console.log(`${key} shortcut is for ${myObject[key]}`);
    
}

//for in :- array
const programming = ["jss", "rbb", "pyy", "javaa", "cppp"]
for(const key in programming){
   console.log(programming[key]);
   
}

const map = new Map()
map.set('IN', "India")
map.set('USA', "United States of America")
map.set('Fr', "France")
map.set('IN', "India")

for (const key in map) {
    console.log(key);
}