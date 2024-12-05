// singleton
// Object.create

// object literals

const mySym = Symbol("key1");
// console.log(mySym);  // Symbol(key1)


const JsUser = {
    name: "Tamim",
    "Full name": "Farhan Tamim",
    [mySym]: "mykey1",
    age: 20,
    location: "Dhaka",
    email: "tamim@gmail.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}

// console.log(JsUser.email);  // tamim@gmail.com
// console.log(JsUser["email"]);  // tamim@gmail.com
// console.log(JsUser["Full name"]);  // Farhan Tamim
// console.log(JsUser[mySym]);  // mykey1
// console.log(JsUser["lastLoginDays"]);  // [ 'Monday', 'Saturday' ]
// console.log(typeof [mySym])

JsUser.email = "tamim@bing.com";
Object.freeze(JsUser)
JsUser.email = "tamim@msft.com";

// console.log(JsUser["email"]);  // tamim@bing.com ( when use Object.freeze(JsUser) )



JsUser.greeting = function(){
    console.log("Hello js user");
}
JsUser.greetingTwo = function(){
    console.log(`Hello js user, ${this.name}`)
}
JsUser.greeting_0 = function(){
    console.log("Lol")
}

// console.log(JsUser.greeting());  // Hello js user, undefined, (next line [undefined])
// console.log(JsUser.greetingTwo());  // Hello js user, Tamim, (next line [undefined])
// console.log(JsUser.greeting_0()); // lol, (next line [undefined])


Hello = function(){
    console.log("Nice");
}
// console.log(Hello);  // [Function: Hello]
// console.log(Hello());  // Nice