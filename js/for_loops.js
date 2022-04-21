(function () {

'use strict';

// 1.

    function showMultiplicationTable(num) {
        for (let i = 1; i <= 10; i++) {
            let result = i * num;
            console.log(result);
        }
    }

    showMultiplicationTable(8);

// 2.

    let randomNumber = Math.floor(Math.random() * 21) + 180;

    for (let j = 1; j <= 10; j++) {
        if (randomNumber % 2 == 0) {
            console.log(randomNumber + " is even.");
        } else {
            console.log(randomNumber + " is odd.")
        }
    }

// 3.

    for (let a = 1; a <= 9; a++)  {
        console.log(String(a).repeat(a));
    }

// 4.

    for (let u = 100; u >= 5; u-- ) {
        if (u % 5 !== 0) {
            continue;
        }
        console.log(u);

    }




})();
