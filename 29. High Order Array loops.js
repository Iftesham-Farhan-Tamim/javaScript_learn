// +++++++++++++++for of+++++++++++++

//['"", "", ""]
// [{}, {}, {}]

const arr = [1, 2, 3, 4, 5];

for (const num of arr) {
    // console.log(num);
};

const greetings = "Hello World!";
for (const greet of greetings) {
    // console.log(`Each char is ${greet}`);
}


// Map

// const map = new Map();
// map.set("IN", "India");
// map.set("USA", "United States of America");
// map.set("Fr", "France");
// map.set("IN", "France");
// map.set("BD", "Bangladesh");

// console.log(map); //  countries, IN 2 times.

// Print:

// Map(4) {
//     'IN' => 'France',
//     'USA' => 'United States of America',
//     'Fr' => 'France',
//     'BD' => 'Bangladesh'
//   }

// for (const [key, value] of map) {
//     // console.log(key, ":-", value);
//     // console.log(`${key} :- ${value}`);
// }

// Print:
// IN :- France
// USA :- United States of America
// Fr :- France


// const myObject = {
//     game1: "NFS",
//     game2: "Spiderman",
// }

// for (const [keys, value] of myObject) {
// console.log(keys, ":-", value);
// }

// Print:
// TypeError: myObject is not iterable



const a = "hello";
const b = "world";

// console.log(a + b);  // helloworld
// console.log(a, b);  // hello world



// +++++++++++++++for in+++++++++++++++



const hello = {
    name: "Tamim",
    price: 199,
};

for (const key in hello) {
    // console.log(hello[key]);  // Tamim   199
}


const myObject = {
    js: "JavaScript",
    cpp: "C++",
    rb: "Ruby",
    swift: "Swift by apple",
}

for (const key in myObject) {
    // console.log(`${key} fullform is for ${myObject[key]}`);
    // console.log(key);
    // console.log(myObject);
}

// print: --> console.log(`${key} fullform is for ${myObject[key]}`);
// js fullform is for JavaScript
// cpp fullform is for C++
// rb fullform is for Ruby
// swift fullform is for Swift by apple



const programming = ["js", "rb", "py", "java", "cpp"];

for (const key in programming) {
    // console.log(programming[key]);
}



// const map = new Map()
// map.set("IN", "India")
// map.set("USA", "United States of America")
// map.set("Fr", "France")
// map.set("BD", "Bangladesh")


// console.log(map);

// for (const [key, value] of map) {
//     console.log(key, ":-", value);
// }



// +++++++++++++++for Each+++++++++++++++



const coding = ["js", "ruby", "java", "python", "cpp"];

coding.forEach(function (val) {
    // console.log(val);
});
// Print:
// js
// ruby
// java
// python
// cpp



coding.forEach((item) => {
    // console.log(item);
});
// Print:
// js
// ruby
// java
// python
// cpp



function printMe(item) {
    console.log(item);
}
// coding.forEach(printMe)
// Print:
// js
// ruby
// java
// python
// cpp



// coding.forEach((item, index, arr) => {
//     // console.log(item, index, arr);
// });
// // Print:
// // js 0 [ 'js', 'ruby', 'java', 'python', 'cpp' ]
// // ruby 1 [ 'js', 'ruby', 'java', 'python', 'cpp' ]
// // java 2 [ 'js', 'ruby', 'java', 'python', 'cpp' ]
// // python 3 [ 'js', 'ruby', 'java', 'python', 'cpp' ]
// // cpp 4 [ 'js', 'ruby', 'java', 'python', 'cpp' ]



coding.forEach((item, index, arr) => {
    // console.log(item, index, arr);
});
// item = element (same)


const myCoding = [
    {
        languageName: "javascript",
        languageFileName: "js",
    },
    {
        languageName: "python",
        languageFileName: "py",
    },
    {
        languageName: "java",
        languageFileName: "java",
    },
]

myCoding.forEach(element => {
    // console.log(element.languageFileName);
});



const world = [1, 2, 3, 4, 5];

// const values = world.forEach(element => {
//     console.log(element);
//     return element;
// });

// const values = world.forEach(element => element);

// console.log(values);  // undefined



const groceries = ["apples", "bananas", "milk", "bread", "cheese"];

// groceries.forEach(element => console.log(element));

// groceries.forEach(element => console.log(element));

const new1 = groceries.filter( (val) => {
    // console.log(val);
    return val;
})
console.log(new1);








