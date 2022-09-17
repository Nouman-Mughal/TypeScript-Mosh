"use strict";
let numbers = [1, "noman"]; //tuples
numbers.push(1);
console.log(numbers);
;
let mySize = 2 /* Size.Medium */;
console.log(mySize);
function TaxReturn(income, taxYear = 2022) {
    if (taxYear < 2022) {
        return income * 1.2;
    }
    return income * 1.3;
}
TaxReturn(100000, 20222);
let employee = { id: 1, name: "Noman", retire: (date) => console.log(date) }; //now we can make as many copies of Employee as we want.
console.log(employee.name);
function kgToLbs(weight) {
    //Narrowing
    if (typeof weight === "number") {
        return weight * 2.2;
    }
    else {
        return parseInt(weight) * 2.2;
    }
}
kgToLbs(10);
kgToLbs("20kg");
let TextBox = {
    Drag: () => { },
    Resize: () => { }
};
let quantity = 100; //could assign only 50 or 100.
function greet(name) {
    if (name) {
        console.log(name.toUpperCase());
    }
    else
        console.log(name);
}
greet(null);
greet(undefined);
greet("Noman");
//# sourceMappingURL=index.js.map