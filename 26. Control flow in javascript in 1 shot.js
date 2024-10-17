// if
const isUserloggedIn = true;
const temperature = 41;

if (temperature == 40) {
    // console.log("less then 50");
} else {
    // console.log(`temperature is greter than 50`);  // ✔✔✔✔✔✔✔✔✔✔✔✔✔
}

// console.log(`Execute`);
// <, >, <=, >=, ==, !=, ===, !==


const score = 200;

if (score > 100) {
    let power = "fly ";
    // console.log(`user power: ${power}`);  // ✔✔✔✔✔✔✔✔✔✔✔✔✔
}


const balance = 1000;

// if (balance > 500) console.log(`test`), console.log(`test 2`);  // ✔✔✔✔✔✔✔✔✔✔✔✔✔

if (balance < 500) {
    // console.log(`less than 500`);
} else if (balance < 750) {
    // console.log(`less than 750`);
} else if (balance < 900) {
    // console.log(`less than 750`);
} else {
    // console.log(`less than 1200`);  // ✔✔✔✔✔✔✔✔✔✔✔✔✔
}


const userLoggedIn = true;
const debitCard = true;
const loggedInFromGoogle = false;
const loggedInFromEmail = true;

if (userLoggedIn && debitCard && 2 == 3) {
    // console.log(`Allow to buy courses`);
}

if (loggedInFromGoogle || loggedInFromEmail) {
    // console.log(`User logged in`);  // ✔✔✔✔✔✔✔✔✔✔✔✔✔
}



const month = "march";
switch (month) {
    case "jan":
        // console.log("January");
        break;
    case "feb":
        // console.log("Feb");
        break;
    case "march":
        // console.log("March");  // ✔✔✔✔✔✔✔✔✔✔✔✔✔
        break;
    case "april":
        // console.log(April);
        break;

    default:
        // console.log("default case match");
        break;
}



// falsy values

// false, 0, -0, BigInt 0n, "", null, undefined, NaN

//truthy values
// "0", 'false', " ", [], {}, function(){}



const userEmail = []

if (userEmail) {
    // console.log("Got user email");  // ✔✔✔✔✔✔✔✔✔✔✔✔✔
} else {
    // console.log("Don't have user email");
}



if (userEmail.length === 0) {
    // console.log(`Objects is empty`);  // ✔✔✔✔✔✔✔✔✔✔✔✔✔
}


// Nullish Coalescing Operator (??): null undefined


let val1;
// val1 = 5 ?? 10;  // 5
// val1 = null ?? 10;  // 10
// val1 = undefined ?? 15;  // 15
val1 = null ?? 10 ?? 20;  // 10

// console.log(val1);


// Terniary Operator

// condition ? true: false



const iceTeaprice = 100;
(iceTeaprice <= 80)? console.log(`less than 80`) : console.log(`more than 80`);  // more than 80

