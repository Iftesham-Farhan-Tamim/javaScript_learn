const user = {
    username: "Tamim",
    price: 999,

    welcomeMessage() {
        console.log(`${this.username}, welcome to website`);
        console.log(this);
    }
}

// user.welcomeMessage();
// user.username = "Sam";
// user.welcomeMessage()  // username: 'Sam',

// Print:
//Tamim, welcome to website
// {
//     username: 'Tamim',
//     price: 999,
//     welcomeMessage: [Function: welcomeMessage]
//   }



const user1 = {
    username: "Tamim2",
    price: "199",

    alertMessage: function () {
        console.log(`{this.username} and price is ${this.price}`);
        console.log(this);
    }
}

// user1.alertMessage();
// console.log(this);  // {}

// Print:
// {this.username} and price is 199
// {
//   username: 'Tamim2',
//   price: '199',
//   alertMessage: [Function: alertMessage]
// }



function chai() {
    let username = "Farhan";
    console.log(this.username);
}

// chai();  // undefined


const chai1 = () => {
    let username = "Tamim";
    console.log(this);
}
// chai1();  // {}



const addTwo = (num1, num2) => {
    return num1 + num2;
}
// console.log(addTwo(5, 6));  // 11


const addThree = (num1, num2) => (num1 + num2)

// console.log(addThree(7, 8));  // 15


const four = (num1, num2) => ({ username: "Tamim" });
// console.log(four()); // { username: 'Tamim' }


const five = [2, 3, 4, 5]

// five.forEach(function (element) {
//     console.log(element);  // [2, 3, 4, 5]
// });



five.forEach(element => {
    console.log(element);  // [2, 3, 4, 5]
});







