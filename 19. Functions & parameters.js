
function sayMyName() {
    console.log("H");
    console.log("I");
    console.log("T");
    console.log("E");
    console.log("S");
    console.log("H");
}

// console.log(sayMyName());  // [H I T E S H], undefined
// sayMyName();  // // [H I T E S H]

// function addTwoNumbers(number1, number2){
//     console.log(number1 + number2);
// }
// addTwoNumbers(5, 6); // 11


function addTwoNumbers2(num1, num2) {
    let result = num1 + num2;
    // console.log(result);
    return result;
}
// addTwoNumbers2(10, 15);  // 25
// console.log(addTwoNumbers2(10, 10));  // 20



function name1(username = "Tamim") {
    if (!username) {                    // (username === undefined)
        console.log("Please enter your username");
        return;
    }
    return console.log(`${username} just logged in`);
}

// name1("Hello");  // Hello just logged in
// name1("")  // Please enter your username
// name1();  // Tamim just logged in


function calculateCartPrice(val1, val2, ...num1){
    return num1;
}
// console.log(calculateCartPrice(200, 400, 500, 2000));  // [ 500, 2000 ]


const user = {
    username: "tamim",
    price: 200,
}

function handleObjects(anyObjects) {
    console.log(`Username is ${anyObjects.username} & price is ${anyObjects.price}`);    
}
// handleObjects(user);  //  Username is tamim & price is 200

// handleObjects({
//     username: "Hello",  // Username is Hello & price is 200          
//     price: 200,
// })



const myNewArray = [200, 400, 100, 600]

function returnSecondValue(getArray){
    return getArray[2]
}

// console.log(returnSecondValue(myNewArray));  // 100
// console.log(returnSecondValue([200, 400, 500, 1000]));  // 500



function car(val1, val2, ...num) {
    return num;
}
console.log(car[100, 200, 300, 400, 500]);












