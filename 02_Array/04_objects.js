// const tinderUser = new Object()   // singleton object
const tinderUser = {}               // Non-singleton object

tinderUser.id = "123abc"
tinderUser.name = "Sammy"
tinderUser.isLoggedIn = false

// console.log(tinderUser);

//objects inside object 
const regularUser = {
    email: "some@gmail.com",
    fullname: {
        userfullname: {
            firstname: "hitesh",
            lastname: "choudhary"
        }
    }
}
console.log(regularUser.fullname.userfullname.firstname);


// merging objects 
const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}
const obj4 = {5: "a", 6: "b"}

// const obj3 = { obj1, obj2 }  // merged nut nested
// console.log(obj3);

// const obj3 = Object.assign({}, obj1, obj2, obj4)
// console.log(obj3);

const obj3 = {...obj1, ...obj2}  // psreading by using ... , nesting problem is solved 
// console.log(obj3);


// Array of Objects
const users = [
    {
        id: 1,
        email: "h@gmail.com"
    },
    {
        id: 1,
        email: "h@gmail.com"
    },
    {
        id: 1,
        email: "h@gmail.com"
    },
]

users[1].email

console.log(tinderUser);

console.log(Object.keys(tinderUser));  // output will be in the form of array
console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser));
