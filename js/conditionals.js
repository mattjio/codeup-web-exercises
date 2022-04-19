"use strict";

/* ########################################################################## */

/**
 * TODO:
 * Create a function named `analyzeColor` that accepts a string that is a color
 * name as input. This function should return a message which relates to the
 * color stated in the argument of the function. For colors you do not have
 * responses written for, return a string stating so
 *
 * Example:
 *  > analyzeColor('blue') // returns "blue is the color of the sky"
 *  > analyzeColor('red') // returns "Strawberries are red"
 *
 *
 *  > analyzeColor('cyan') // returns "I don't know anything about cyan"
 *
 * You should use an if-else-if-else block to return different messages.
 *
 * Test your function by passing various string literals to it and
 * console.logging the function's return value
 */
/*
function analyzeColor(color) {
    if (color === "red") {
        return "Red is the color of blood!";
    } else if (color === "blue") {
        return "Blue is the color of the official state flower of Texas, Bluebonnets.";
    } else if (color === "orange") {
        return "Orange is the color of Oranges.";
    } else if (color === "yellow") {
        return "Yellow is the color the Sun.";
    } else if (color === "green") {
        return "Green is the color of grass.";
    } else if (color === "indigo")  {
        return "Indigo is indigo.";
    } else if (color === "violet") {
        return "Violet is kinda basically purple"
    } else if (color === "purple") {
        return "Purple makes mattresses.";
    } else {
        return "You have entered a color that does not exist in my mind or something other than a color."
    }
}
*/
//console.log(analyzeColor("blue"));
// Don't change the next two lines!
// These lines create two variables for you:
// - `colors`: a list of the colors of the rainbow
// - `randomColor`: contains a single random color value from the list (this
//                  will contain a different color every time the page loads)
let colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];
let randomColor = colors[Math.floor(Math.random() * colors.length)];
/**
 * TODO:
 * Pass the `randomColor` variable to your 'analyzeColor' function and console.log the results.
 * You should see a different message every time you refresh the page
 */
//console.log(analyzeColor(randomColor));
/**
 * TODO:
 * Comment out the code above, and refactor your function to use a switch-case statement
 */
function analyzeColor (color) {
    switch(color) {
        case "red":
            return "Red is the color of blood!";
        case "orange":
            return "Orange is the color of oranges";
        case "yellow":
            return "Yellow is the color of the Sun.";
        case "green":
            return "Green is the color of the grass.";
        case "blue":
            return "Blue is the color of Blue from Blue's clues!";
        case "indigo":
            return "Indigo is indigo.";
        case "violet":
            return "Violet is basically purple.";
        case "purple":
            return "Purple makes mattresses.";
        default:
            return "You have entered a word or phrase that does not compute.";
    }
}

console.log(analyzeColor(randomColor));
/**
 * TODO:
 * Prompt the user for a color when the page loads, and pass the input from the
 * user to your `analyzeColor` function. Alert the return value from your
 * function to show it to the user.
 */
let userColor = prompt("What is your favorite color?").toLowerCase().trim();

alert(analyzeColor(userColor));
/* ########################################################################## */

/**
 * TODO:
 * Suppose there's a promotion in Walmart, each customer is given a randomly
 * generated "lucky number" between 0 and 5. If your lucky number is 0 you have
 * no discount, if your lucky number is 1 you'll get a 10% discount, if it's 2,
 * the discount is 25%, if it's 3, 35%, if it's 4, 50%, and if it's 5 you'll get
 * everything for free!.
 *
 * Write a function named `calculateTotal` which accepts a lucky number and total
 * amount, and returns the discounted price.
 *
 * Example:
 * calculateTotal(0, 100) // returns 100
 * calculateTotal(4, 100) // returns 50
 * calculateTotal(5, 100) // returns 0
 *
 * Test your function by passing it various values and checking for the expected
 * return value.
 */

/*function calculateTotal (luckyNumber, total) {
    if (luckyNumber === 0) {
        return total;
    } else if (luckyNumber === 1) {
        return total - (total * .1);
    } else if (luckyNumber === 2) {
        return total - (total * .25);
    } else if (luckyNumber === 3) {
        return total - (total * .35);
    } else if (luckyNumber === 4) {
        return total - (total * .5);
    } else if (luckyNumber === 5);
        return total * 0;
}
*/
//console.log(calculateTotal(3,100));
/**
 * TODO:
 * Uncomment the line below to generate a random number between 0 and 5.
 * (In this line of code, 0 is inclusive, and 6 is exclusive)
 * Prompt the user for their total bill, then use your `calculateTotal` function
 * and alerts to display to the user what their lucky number was, what their
 * price before the discount was, and what their price after the discount is.
 */
// Generate a random number between 0 and 6
//let luckyNumberUser = Math.floor(Math.random() * 6);
//let totalBill = prompt("What was your bill total?");
//let discountPrice = calculateTotal(luckyNumberUser, totalBill).toFixed(2)

//alert("Your lucky number is " + luckyNumberUser + ".Your original price was " + totalBill + ". Your price after discount is " + discountPrice + ".");


/**
 * TODO:
 * Write some JavaScript that uses a `confirm` dialog to ask the user if they
 * would like to enter a number. If they click 'Ok', prompt the user for a
 * number, then use 3 separate alerts to tell the user:
 *
 * - whether the number is even or odd
 * - what the number plus 100 is
 * - if the number is negative or positive
 *
 * Do *NOT* display any of the above information
 * if the user enters a value that is not of the number data type.
 * Instead, use an alert to inform them of the incorrect input data type.
 *
 *
 * Can you refactor your code to use functions?
 * HINT: The way we prompt for a value could be improved
 */
let userConfirm = confirm("Would you like to enter a number?");
console.log(userConfirm);

//Not finished with last part

if (userConfirm === true) {
    let userNumber = prompt("What is your number?");
    let sumUserNumber = (parseFloat(userNumber) + 100);
    if (userNumber % 2 === 0) {
        alert(userNumber + " is even.");
    } else {
        alert(userNumber + " is odd.");
    } alert(userNumber + " plus 100 is " + sumUserNumber + ".");
    if (userNumber >= 0) {
        alert(userNumber + " is positive.");
    } else {
        alert(userNumber + " is negative.");
    }

} else if (userConfirm === false) {
    alert("Have a nice day!");
}
