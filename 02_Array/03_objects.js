// singleton object => Object.create
// object literal 

const mySym=Symbol("key1")

const JsUser={
    name:"Hitesh",
    age: 18,
    location: "Jaipur",
    email: "hitesh@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"], // value in form of array
    "full name": "Niraj Kumar",
    [mySym]:"Mykey1" // [suqare bracket is used for symbol]
}

//accessing objects
console.log(JsUser.email);  // by using dot(.) operator
console.log(JsUser["location"]); // by using [" "] , it is ment for special type of key and values
console.log(JsUser["full name"]);
console.log(JsUser[mySym]);  // special type of symbol 

JsUser.email = "hitesh@chatgpt.com"  // overriding the email
console.log(JsUser);
// Object.freeze(JsUser)             // freezing the object values
JsUser.email = "hitesh@microsoft.com" // trying to override and it will not change as it is freezed
// console.log(JsUser);


JsUser.greeting = function(){
    console.log("Hello JS user");
}
JsUser.greetingTwo = function(){
    console.log(`Hello JS user, ${this.name}`);
}

console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());

