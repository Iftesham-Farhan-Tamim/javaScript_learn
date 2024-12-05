//  Primitive

//  7 types : String, Number, Boolearn, null, undefined, Symbol, BigInt

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

// Every Symbol instance is unique (Symbol values are always unique), even if it has the same description

// console.log(id == anotherId);  // false (Loose equality respects Symbol uniqueness; no type coercion is applied)
// console.log(id === anotherId);  // false (Strict equality checks identity; id and anotherId are different)

const bigNumber = 3456543576654356754n
// console.log(bigNumber);  // 3456543576654356754n




// Reference (Non primitive)

// Array, Objects, Functions

const heros = ["abcd", "efgh", "ijkl"];
let myObj = {
    name: "tamim",
    age: 22,
}

const myFunction = function(){
    console.log("Hello world");
}

// console.log(typeof anotherId);  // symbol
myFunction()  // Hello world

// https://262.ecma-international.org/5.1/#sec-11.4.3