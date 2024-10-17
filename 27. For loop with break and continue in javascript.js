// for 

// The 'for' and 'while' loops are what we call 'entry control loops' because they check the condition before entering the loop

for (let i = 0; i <= 10; i++) {
    const element = i;
    if (element == 5) {
        // console.log("5 is best number");
    }
    // console.log(element);
}
// console.log(element);  // ReferenceError: element is not defined

for (let i = 1; i <= 10; i++) {
    // console.log(`Outer loop is ${i}`);
    for (let j = 1; j <= 10; j++) {
        // console.log(`Inner loop is ${j}`);  
        // console.log(i + '*' + j + ' = ' + i*j);      
    }
}

let myArray = ["flash", "batman", "superman"]
// console.log(myArray.length);  // 3

for (let index = 0; index < myArray.length; index++) {
    const element = myArray[index];
    // console.log(myArray[index]);
}

// Print:
// flash
// batman
// superman



// Break and continue


// Very much important for understand basic

for (let index = 1; index <= 20; index++) {
    if (index == 5) {
        // console.log(`Detected`);
        break;
    }
    // console.log(`Value of i is ${index}`);
}

// Print:
// Value of i is 1
// Value of i is 2
// Value of i is 3
// Value of i is 4
// Detected



for (let i = 0; i <= 10; i++) {
    const element = i;
    if (element == 5) {
        continue;
    }
    console.log(element);
}










