/*
CHALLENGE
************
    Write a ternary that does the same thing as the age challenge
    Age Challenge (if else):
    let age = 30;
    if (age >= 25) {
        console.log("Yay! You can rent a car!");
    } else if (age >= 21) {
        console.log("Yay! You can drink!");
    } else if (age >= 18) {
        console.log("Yay! You can vote!");
    } else {
        console.log("Sorry, you're too young to do anything fun.");
    }
*/

// Ternary
let age = 30;

// () ? true : false

(age >= 25) ? console.log("Yay! You can rent a car!")
            : (age >= 21) ? console.log("Yay! You can drink!")
            : (age >= 18) ? console.log("Yay! You can vote!")
            : console.log("Sorry, you're too young to do anything fun..")



let age = 30;

(age >= 40) 	? console.log("you are old")
        : (age >= 35) ? console.log("you are middle aged")
        : (age >= 25) ? console.log("you are young")
        : (age >= 20) ? console.log("you are a baby")
        : console.log("you are still in the womb") 


        