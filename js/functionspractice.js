(function () {

// 1. function isOdd

function isOdd(num) {
    return (num % 2) == 1;
}

console.log(isOdd(3));
console.log(isOdd(8));

// 2. function isEven

function isEven(num) {
    return num % 2 == 0;
}

console.log(isEven(9));
console.log(isEven(18));

// 3. Make a function named identity(input) that returns the input exactly as provided.

function identity(val) {
    return val;
}

console.log(identity("umbriel"));
console.log(identity(890));

// 4. Make a function named isFive(input)

function isFive(val) {
    if (val === 5) {
        return true;
    } else {
        return false;
    }
}

console.log(isFive(8));
console.log(isFive(5));
console.log(isFive("shoe"));
console.log(isFive("five"));

// 5. Make a function named addFive(input) that adds five to some input.

function addFive(num) {
    return (parseFloat(num) + 5)
}

console.log(addFive(10));
console.log(addFive(5));
console.log(addFive("20"));

// 6. Make a function named isMultipleOfFive(input)

function isMultipleOfFive(num) {
    return (parseFloat(num) * 5);
}

console.log(isMultipleOfFive(10));
console.log(isMultipleOfFive("34"));

// 7. Make a function named isThree(input)

function isThree(num) {
    return parseFloat(num) === 3;
}

console.log(isThree(8));
console.log(isThree("3"));
console.log(isThree(3));
console.log(isThree("three"));

// 8. Make a function named isMultipleOfThree(input)

function isMultipleOfThree(num) {
    return parseFloat(num) * 3;
}

console.log(isMultipleOfThree(3));
console.log(isMultipleOfThree("76"));
console.log(isMultipleOfThree("shoe"));

// 9. Make a function named isMultipleOfThreeAndFive(input)

function isMultipleOfThreeAndFive(num) {
    return (num % 3 == 0 && num % 5 == 0);
}

console.log(isMultipleOfThreeAndFive(15));
console.log(isMultipleOfThreeAndFive(20));
console.log(isMultipleOfThreeAndFive(30));

// 10. Make a function named isMultipleOf(target, n) which checks if target is evenly divisible by n

function isMultipleOf(target, n) {
    return target % n == 0;
}

console.log(isMultipleOf(10, 2));
console.log(isMultipleOf(44, 7));
console.log(isMultipleOf(48, 12));

})();
