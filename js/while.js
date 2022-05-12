

let i = 1

while (i < 65536) {
    i *=2;
    console.log(i);

}


let allCones = Math.floor(Math.random() * 50) + 50;

console.log("I have a total of " + allCones + " ice cream cones to sell.");

do {
    let numberConesSold = Math.floor(Math.random() * 5) + 1;
    if (allCones < numberConesSold) {
        console.log("Sorry, your order of " + numberConesSold + " ice cream cones can not be fulfilled due to having only " + allCones + " ice cream cone(s) left.")
    } else {
        allCones -= numberConesSold;
        console.log("Thank you for ordering " + numberConesSold + " ice cream cone(s). Inventory is now at " + allCones + " ice cream cone(s).")
    }

} while (allCones > 0) {
    console.log("all inventory has been sold!")
}
