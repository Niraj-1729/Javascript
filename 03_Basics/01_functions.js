function sayMyName() {
    console.log("N");
    console.log("I");
    console.log("R");
    console.log("A");
    console.log("J");
}

sayMyName()   // reference of function to execute the function 

// function with parameters 
// function addTwoNumber(num1, num2) {
//     console.log(num1 + num2);
// }
// addTwoNumber(3, "4");
// addTwoNumber(3, 4);

// const result =addTwoNumber(5,10);
// console.log("result:-", result)   // value of function is not stored in result 

// Again working on function so that it can store the value of "Result" which we have used it as variable 
function addTwoNumber(num1, num2) {
    let result = num1+num2;
    return result
}
    
const result = addTwoNumber(10,20)

function loginUserMessage(username= "Niraj"){
    if(username===undefined){
        console.log("Please enter a username");
        return
        
    }
    return `${username} just logged in `
}
// console.log(loginUserMessage("Niraj"))
console.log(loginUserMessage())  // when no value is passed

// when there are a unpredictable number of parameters then we will use spread oprator "...num1"
function calculateCartPrice(val1, val2, ...num1){
    return num1;
}

console.log(calculateCartPrice(100))  // 100,200 is reserved for val1 and val2
console.log(calculateCartPrice(100,200,300,400,500,600,700))  // 100,200 is reserved for val1 and val2


// Using object in function 
const user = {
    username: "hitesh",
    prices: 199
}

function handleObject(anyobject){
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);
}

// handleObject(user)
handleObject({
    username: "sam",
    price: 399
})

const myNewArray = [200, 400, 100, 600]

function returnSecondValue(getArray){
    return getArray[1]
}

// console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue([200, 400, 500, 1000]));