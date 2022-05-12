'use strict';

(function () {


   let userNumber;

    while (true) {
        userNumber = parseFloat(prompt("Give me an odd number between 1 and 50 please."));
        if (userNumber % 2 !== 0 && userNumber >= 1 && userNumber < 50) {
            break;
        }
    }

    for(let i = 1; i <= 50; i += 2) {
        if (i === userNumber) {
            console.log("Skipping your number");
            continue;
        }
        console.log(i);
    }




})();
