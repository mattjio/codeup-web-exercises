"use strict";
console.log("Hello from external JavaScript");

alert("Welcome to my Website!");

let userColor = prompt("What is your favorite color?");
console.log(userColor);
alert(userColor + " is my favorite color too!");

let userMermaid = prompt("How many days did you have Little Mermaid in your possession?");
console.log(userMermaid);

let userBear = prompt("How many days did you have Brother Bear in your possession?");
console.log(userBear);

let userHercules = prompt("How many days did you have Hercules in your possession?");
console.log(userHercules);

let userPrice = prompt("What was the price of the movie?");
console.log(userPrice);

let totalPrice = (userMermaid * userPrice) + (userBear * userPrice) + (userHercules * userPrice);
console.log(totalPrice);
alert("You paid " + totalPrice + " dollars.");

let googleHours = prompt("How many hours did you work at Google?");
console.log (googleHours);

let googlePay = prompt("How much did google pay you hourly?");
console.log(googlePay);

let googleTotal = googlePay * googleHours;
console.log(googleTotal);

let amazonHours = prompt("How many hours did you work for Amazon?");
console.log(amazonHours);

let amazonPay = prompt("How much was your hourly pay at Amazon?");
console.log(amazonPay);

let amazonTotal = amazonHours * amazonPay;
console.log(amazonTotal);

let facebookHours = prompt("How many hours did you work at facebook?");
console.log(facebookHours);

let facebookPay = prompt("How much was your hourly pay at facebook?");
console.log(facebookPay);

let facebookTotal = facebookHours * facebookPay;
console.log(facebookTotal);

let totalWeekly = googleTotal + amazonTotal + facebookTotal;
console.log(totalWeekly);
alert("Your total weekly pay is " + totalWeekly + " dollars.");

let classMax = 30;
console.log(classMax);

let classSize = prompt("How many are currently enrolled in class?");
console.log(classSize);


let currentSchedule = prompt("Does your schedule conflict with classes?yes or no.");
console.log(currentSchedule.toLowerCase());


let studentEnrollment = classSize <= classMax && currentSchedule === "no";
console.log(studentEnrollment);
    if (studentEnrollment === true) {
        alert("You can enroll in class.");

    }   else {
        alert("You can't enroll in class.");
    }

let personItems = prompt("How many items have you purchased?");
console.log(personItems);

let offerExpiration = prompt("Is the item expired?");
console.log(offerExpiration.toLowerCase());

let premiumMember = prompt("Are you a premium member?");
console.log(premiumMember.toLowerCase());

let productOffer = personItems > 2 && offerExpiration === "no" || premiumMember === "yes" && offerExpiration === "no"
console.log(productOffer)

if (productOffer === true) {
    alert("You can use the product offer!");
}   else {
    alert("You can't use the product offer, so sorry.");
}











