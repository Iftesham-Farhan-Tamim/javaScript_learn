// const marvel_heros = ["thor", "Ironman", "spideman"];
// const dc_heros = ["superman","flash","batman"];

// marvel_heros.push(dc_heros);
// console.log(marvel_heros);  // [ 'thor', 'Ironman', 'spideman', [ 'superman', 'flash', 'batman' ] ]

// console.log(marvel_heros[3][1]);  // flash

// const alHeroes = marvel_heros.concat(dc_heros);
// console.log(alHeroes);  // ['thor', 'Ironman', 'spiderman', [ 'superman', 'flash', 'batman' ], 'superman', 'flash', 'batman']

// const all_new_heros = [...marvel_heros, ...dc_heros];
// console.log(all_new_heros);  // [ 'thor', 'Ironman', 'spideman', 'superman', 'flash', 'batman' ]



// const another_array = [1,2,3,[4,5,6],7,[6,7,[4,5]]];

// const real_another_array = another_array.flat(3,2);
// console.log(real_another_array);  // [1,2,3,4,5,6,7,6,7,4,5]
// const real_another_array1 = another_array.flat(1);
// console.log(real_another_array);  // [ 1, 2, 3, 4, 5, 6, 7, 6, 7, [ 4, 5 ] ]


// console.log(Array.isArray("Tamim"));  // false
// console.log(Array.from("Tamim"));  // [ 'T', 'a', 'm', 'i', 'm' ]
// console.log(Array.from({name: "Tamim"}));  // []



// let score1 = 100;
// let score2 = 200;
// let score3 = 300;

// console.log(Array.of(score1, score2, score3));  // [ 100, 200, 300 ]