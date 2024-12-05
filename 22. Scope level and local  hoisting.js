
function one() {
    const username = "Tamim";
    console.log(username);  // Tamim

    function two() {
        const website = "tube";
        console.log(username);
    }
    two();  // necessary for run one() function
}

// one();  

// output:
// Tamim
// Tamim

if (!false) {
    const username = "Tamim";
    
    if (username === "Tamim") {
        const website = " youtube";
        // console.log(username + website);  // Tamim youtube        
    }
}

// console.log(input(5));  // hoisting allows you to use function declarations before they are defined in the code.

function input(num) {
    return num + 1;
}


const num = 6;
function name1() {
    console.log("Hello");
    const variable = num;
    console.log(variable);
}

// name1();  

// output:
// Hello
// 6



// valid(5);  // 6
function valid(num) {
    console.log(num +1);
    return num + 1;
}


const new1 = function (num) {
    return num +2;
}
// console.log(new1(5));  // 7