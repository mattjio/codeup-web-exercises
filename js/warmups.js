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

// write a function that takes in an array of numbers and returns the sum of all elements

function sumArray(arr) {
    let x = 0
    for (let el of arr) {
        x += el;
    }
    return x;
}



console.log(sumArray([1,2,3,4]));

// warm-up May 3

let product1 = {
    name: 'Hammer',
    priceInCents: 400,
    description: 'It is a a hammer.',
    inventory: 25034
}

let product2 = {
    name: 'Computer',
    priceInCents: 40000,
    description: 'It is a computer.',
    inventory: 33000
}

let product3 = {
    name: 'Ruler',
    priceInCents: 1000,
    description: 'It is a ruler.',
    inventory: 2200
}


function returnProductEssentialDetails(obj) {
    return {
        name: obj.name,
        priceInCents: obj.priceInCents
    }
}

console.log(returnProductEssentialDetails(product2));

// write a function that will accept an array of objects and return the tallest object from the array

const hamsters = [
    {
        name: "Hamtaro",
        heightInMM: 86,
        fur: ['orange', 'white'],
        gender: "male",
        dateOfBirth: "August 6"
    } , {
        name: "Bijou",
        heightInMM: 75,
        fur: ['white'],
        gender: "female",
        dateOfBirth: "July 10"
    } , {
        name: "Oxnard",
        heightInMM: 100,
        fur: ['grey', 'white'],
        gender: "male",
        dateOfBirth: "May 3"
    } , {
        name: "Boss",
        heightInMM: 120,
        fur: ['brown', 'white'],
        gender: "male",
        dateOfBirth: "Spetember 21"
    } , {
        name: "Snoozer",
        heightInMM: 85,
        fur: ['brown', 'white', "pink"],
        gender: "male",
        dateOfBirth: "January 14"
    }
];

function tallestObject(y) {
    let tallest = {heightInMM: 0};
    for (let hamster of y) {
        if (hamster.heightInMM > tallest.heightInMM) {
            tallest = hamster;
        }
    }
    return tallest;
}

function mostColorful(arr) {
    let furriest = {fur: []}
    for (let hamster of arr) {
        if (hamster.fur.length > furriest.fur.length ) {
            furriest = hamster
        }
    }
    return furriest
}

mostColorful(hamsters);

function stringToObject(x) {
    let stringObject = {};
        stringObject.string: "x";
        stringObject.size: x.length;
        stringObject.containsLetterFromRSTLNE: x.includes("R","S","T","L","N","E");
        stringObject.isOneWord: x.indexOf(" ") < 0;

}