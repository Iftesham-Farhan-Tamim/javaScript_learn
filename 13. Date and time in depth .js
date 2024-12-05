let myDate = new Date();  
// console.log(myDate.toString());  // Sun Jun 16 2024 17:16:31 GMT+0600 (Bangladesh Standard Time)
// console.log(myDate.toDateString());  // Sun Jun 16 2024
// console.log(myDate.toLocaleString());  // 6/16/2024, 5:16:31 PM
// console.log(typeof myDate);  // object



let myCreatedDate = new Date(2023, 0, 23)
// console.log(myCreatedDate.toDateString());  // Mon Jan 23 2023
// console.log(myCreatedDate.toLocaleDateString());  // 1/23/2023

// let myCreatedDate = new Date(2023, 0, 23, 5, 3)
// console.log(myCreatedDate.toDateString());  // Mon Jan 23 2023
// console.log(myCreatedDate.toLocaleDateString());  // 1/23/2023

// let myCreatedDate = new Date("2023-01-14")
// console.log(myCreatedDate.toDateString());  // Sat Jan 14 2023
// console.log(myCreatedDate.toLocaleDateString());  // 1/14/2023

// let myCreatedDate = new Date("01-14-2023")
// console.log(myCreatedDate.toDateString());  // Sat Jan 14 2023
// console.log(myCreatedDate.toLocaleDateString());  // 1/14/2023



let myTimeStamp = Date.now();  
// console.log(myTimeStamp);  // 1718539651185
// console.log(myCreatedDate.getTime())  // 1673632800000
// console.log(Math.floor(Date.now()/1000));  // 1718539651



// let newDate = new Date();
// console.log(newDate);  // 2024-06-16T12:10:45.795Z
// console.log(newDate.getMonth() + 1);  // 6 (+1 for human-readability)
// console.log(newDate.getDay());  // 0 (Sunday being 0 and Saturday being 6.)

// console.log(`${newDate.getDay()} and the time.`);  // 0 and the time.


let newDate = new Date();  // from Gemini
// console.log(`${newDate.getDay()} and the time is ${newDate.getHours()}/${newDate.getMinutes()}/${newDate.getSeconds()}`);  // 0 and the time is 18/24/42