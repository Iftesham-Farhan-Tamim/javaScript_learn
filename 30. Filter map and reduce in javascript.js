const coding = ["js", "ruby", "java", "python", "cpp"];


coding.forEach(function (val) {
    // console.log(val);
});

// output:
// js
// ruby
// java
// python
// cpp


coding.forEach(element => {
    // console.log(element);
});

// output:
// output:
// js
// ruby
// java
// python
// cpp


// +++++++++++++++filter++++++++++


const values = coding.forEach((element) => {
    // console.log(element);
    return element;
});

// output:
// js
// ruby
// java
// python
// cpp


const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const newNums = myNums.filter((num) => {
    return num > 4;
})

// console.log(newNums);  // [ 5, 6, 7, 8, 9, 10 ]

// output:
// [ 5, 6, 7, 8, 9, 10 ]


for (let i = 0; i < myNums.length; i++) {
    if (i > 4) {
        // console.log(myNums[i]);
    }
}

// output:
// 6
// 7
// 8
// 9
// 10




const books = [
    { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
    { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
    { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
    { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
    { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
    { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
    { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
    { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
    { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
  ];


let userBooks = books.filter( (bk) => bk.genre === "Fiction")
// console.log(userBooks);

// output:
// [
//   { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
//   { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 }
// ]