const name1 = "Tamim ";
const repoCount = 50;

// console.log(name1 + repoCount + " value");  // Tamim 50 value
// console.log(`Hello my name is ${name1} & my repo is ${repoCount}`);


const gameName = new String("tamim-tc-com");

console.log(gameName[2]);  // m
// console.log(gameName.__proto__);  // {}
// console.log(gameName.length);  // 12
// console.log(gameName.toUpperCase());  // TAMIM-TC-COM
// console.log(gameName.charAt(2));  // m
// console.log(gameName.indexOf("i"));  // 3


const newString = gameName.substring(0, 4);
// console.log(newString);  // tami (from 0 to 3, 4 will not count)

const anotherString = gameName.slice(0, 4);
// console.log(anotherString);  // tami (same as before)

const anotherstring2 = gameName.slice(-8, 4);
// console.log(anotherstring2);  // returns nothing

const newStringOne = "   tamim   ";
// console.log(newStringOne);  //   tamim   
// console.log(newStringOne.trim());  // tamim

const url = "https://tamim.com/tamim%20farhan";
// console.log(url.replace("%20", "_"));  // https://tamim.com/tamim_farhan
// console.log(url.includes("nice"));  // false

// console.log(gameName.split("-"));  // [ 'tamim', 'tc', 'com' ]

const gamename1 = new String("tamim_tc_com");  // String 'S' capital
// console.log(gamename1.split("_"));  // [ 'tamim', 'tc', 'com' ]

const gamename2 = "tamim_tc_com"; // Simpler string creation
// console.log(gamename2.split("_"));  // [ 'tamim', 'tc', 'com' ]


// +++++++++++  slice=(not including) & substring=(including)  +++++++++++


const str = "helloworld";

// console.log(str.slice(2, 5));  // llo (extracts characters from index 2 to 4 (not including 4))
// console.log(str.slice(-3));   // rld (extracts last 3 characters)
// console.log(str.substring(2, 5));  // llo (extracts characters from index 2 to 4 (including 4))
// console.log(str.substring(-1, 2));  // he (treats -1 as 0, extracts characters from 0 to 1)
// console.log(str.slice(5, 2));  // "" (empty string, start index greater than end index)
// console.log(str.substring(5, 2));  // llo (extracts "h" from index 5 to 1, considering 5 as 0)






























