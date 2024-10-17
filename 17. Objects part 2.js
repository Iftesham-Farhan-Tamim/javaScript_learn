// const tinderUser = new Object()
const tinderUser = {}

tinderUser.id = "123abc";
tinderUser.name = "Sammy";
tinderUser.isLoggedIn = false;

// console.log(tinderUser);  // { id: '123abc', name: 'Sammy', isLoggedIn: false }
// console.log(tinderUser.id);  // 123abc
// console.log(tinderUser["id"]); // 123abc
// console.log(typeof tinderUser["name"]);  // string



const regularUser = {
    email: "tamim@google.com",
    fullname: {
        userfullname: {
            firstname: "farhan",
            lastname: "tamim",
        }
    }
}

// console.log(regularUser.fullname.userfullname.lastname);  // tamim
// console.log(regularUser);  // Print this 


const obj1 = { 1: "a", 2: "b" }
const obj2 = { 3: "a", 4: "b" }
const obj4 = { 5: "a", 6: "b" }

// const obj3 = { obj1, obj2 }
// console.log(obj3); // { obj1: { '1': 'a', '2': 'b' }, obj2: { '3': 'a', '4': 'b' } }

const obj3 = Object.assign({}, obj1, obj2, obj4)
// console.log(obj3);  // { '1': 'a', '2': 'b', '3': 'a', '4': 'b', '5': 'a', '6': 'b' }


const obj5 = {...obj1, ...obj2}
// console.log(obj5);  // { '1': 'a', '2': 'b', '3': 'a', '4': 'b' }



const user = [
    {
        id: 1,
        email: "tamim@google.com",
    },
    {
        id: 1,
        email: "farhan@google.com",
    },
    {
        id: 1,
        email: "tamim1@google.com",
    },
]

// users[1].email
// console.log(tinderUser);  // <repeat>

// console.log(Object.keys(tinderUser));  // [ 'id', 'name', 'isLoggedIn' ]
// console.log(Object.values(tinderUser));  // [ '123abc', 'Sammy', false ]
// console.log(Object.entries(tinderUser));  // [ [ 'id', '123abc' ], [ 'name', 'Sammy' ], [ 'isLoggedIn', false ] ]
// console.log(tinderUser.hasOwnProperty('isLoggedIn'));  // true


const course = {
    coursename: "js",
    price: "999",
    courseInstructor: "tamim"
}


const instructorName = course.courseInstructor;
// console.log(instructorName);  // tamim

const {coursename} = course
// console.log(coursename);

const {coursename :hello} = course
console.log(hello);


// Links:
// 1. https://randomuser.me/    --> Random user
// 2. https://jsonformatter.org/    --> JSON formatter













