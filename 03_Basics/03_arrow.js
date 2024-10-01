const user = {
    username: "hitesh",
    price: 999,

    WelcomeMessage: function () {
        console.log(`${this.username}, welcome to the website`);  // this is used for current context inside the scope 
        console.log(this);
    }
}

// user.WelcomeMessage()
// user.username="Niraj"  // context has been changed 
// user.WelcomeMessage()
// console.log(this); // gives a empty object as there is no context 

// Printing this inside a function 
// function chai(){
//     let username="A name"
//     console.log(this);
//     console.log(this.username);  // this inside a function give a null value

// }
// chai()


// .........................introducing you ARROW function ...........

// Normal function 
//const chai= function (){

//  }

//arrow function 
// const chai=()=>{

// }

const chai =  () => {
    let username = "hitesh"
    console.log(this);
}


// chai()

// const addTwo = (num1, num2) => {
//     return num1 + num2
// }

// const addTwo = (num1, num2) =>  num1 + num2  *** implicit return

// const addTwo = (num1, num2) => ( num1 + num2 )

const addTwo = (num1, num2) => ({username: "hitesh"})


console.log(addTwo(3, 4))


// const myArray = [2, 5, 3, 7, 8]

// myArray.forEach()