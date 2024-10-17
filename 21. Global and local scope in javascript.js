var c = 300;

let a = 400;
if (true) {
    let a = 10;
    const b = 20;
    // console.log("Inner :", a);  // 10
}



// console.log(c);  // 300
// console.log(b);  /// b is not defined
// console.log(a);  // 400 (Global scope priority)