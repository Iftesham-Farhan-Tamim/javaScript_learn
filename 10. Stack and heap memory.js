// Stack (Primitive), Heap (Non-Primitive)

let myName = "tamim";

let anotherName = myName;
anotherName = "farhan";

// console.log(myName);  // tamim
// console.log(anotherName);  // farhan

let userOne = {
    email: "user@google.com",
    name: "farhantamim",
}

let userTwo = userOne;
userTwo.email = "tamim@google.com";

// console.log(userOne.email);  // tamim@google.com
// console.log(userTwo.email);  // tamim@google.com