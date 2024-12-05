// console.log(2 > 1);  // true
// console.log(2 >= 1);  // true
// console.log(2 < 1);  // false
// console.log(2 == 1);  // false
// console.log(2 != 1);  // true


// console.log("2" > 1);  // true (2 is indeed greater than 1)
// console.log("02" > 1);  // true (2 is greater than 1)

// console.log(null > 0);  // false (null is converted to 0, and 0 > 0 is false)
// console.log(null == 0);  // false (null is only equal to undefined, not numbers)
// console.log(null >= 0);  // true (null is converted to 0, and 0 >= 0 is true)
// console.log(NaN == NaN); // false (NaN is not equal to anything, including itself)


// console.log(undefined == 0);  // false (undefined is only equal to null, not to numbers)
// console.log(undefined > 0);  // false (undefined is converted to NaN, and comparisons with NaN are false)
// console.log(undefined < 0);  // false (undefined is converted to NaN, and comparisons with NaN are false)
// console.log(undefined == NaN);  // false (NaN is not equal to any value, including itself & undefined)
// console.log(undefined == null);  // true (Special rule in == treats undefined and null as equal)



// console.log("2" === 2);  // false (Types are different (string vs number), so no coercion occurs)


// == (loose equality) type coercion.
// === (strict equality) to strictly check for both value and type equality, avoiding unexpected results.