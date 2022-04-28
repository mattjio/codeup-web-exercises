(function () {




"use strict";

console.log("Yay! I completed the warm-up!");

// warmup April 22, 2022

for (let i = 1; i <= 100; i++) {
    if (i % 15 === 0) {
        console.log("FizzBuzz");
    } else if (i % 3 === 0) {
        console.log("Fizz");
    } else if (i % 5 === 0) {
        console.log("Buzz");
    } else {
        console.log(i);
    }
}

// warmup April 27, 2022

function firstLetters(x) {
    let bucket = "";
    for (let el of x) {
        bucket += el[0]
    }
}
let testArray = ["john","India","Oscar"]
firstLetters(testArray)
})();

// warmup April 28, 2022 write a function that takes in a string and returns that string in alphabetical order

function alphaString(x) {
    return x.split('').sort().join('');
}

console.log(alphaString("codeup"));

