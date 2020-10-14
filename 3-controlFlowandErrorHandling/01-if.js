//* CONDITIONAL STATEMENTS

let isOn = true;

//* if (<some expression>) {<do something>}
if (isOn == true) {
    console.log('The light is on!');
};

if (isOn){
    console.log("The light is on!");
};

let isOn = false;

if (isOn == false){
    console.log("The light is off!");
};

let weather = 75;

if (weather < 70){
    console.log('Wear a jacket');
};

if (weather < 70) {
    console.log("Wear a jacket");
} else { //* else can follow and if statement and will fire if the above statement didn't 
    console.log("No jacket necessary!")
};
// //* if statements MUST come before else statements

// //* Dot notation 
let student = {
    name : "Justin", 
    grade: 12
};
//* in this example student is an object
//* key and value pairs

let names = [
    "Justin",
    "Adam",
    "Amy"
]
//* the above example is an object (the data type) even though it is presented as an array

// Ways to access an object
console.log(student.name);
console.log(student.["name"]);//works but don't do it this way

//Ways of accessing an array
console.log(names[2]);

let fruit = ['apple', 'orange']
let apple = fruit[0]
console.log(apple);

console.log(names.slice(1, 1))

//* SWITCH STATEMENTS

let officeCharacter = "Pam";

switch(officeCharacter) {
//     //kind of like 
if officeCharacter == "Michael"
    case "Michael":
        console.log("My mind is going a mile an hour");
        break; //break will leace the switch after the block runs 
    case "Dwight":
        console.log("Perfectenschlag");
        break;
    case "Jim":
        console.log("Bears. Beets. Battlestar Galactica");
        break;
    default:
        console.log(`I'm sorry, ${officeCharacter}, but do I know you`);
}

let dessert = 'carrots';

switch (dessert) {
    case "Pie":
        console.log('Pie, pie, me oh my!');
        break;
    case 'cake':
        console.log('Cake is great!');
        break;
    case 'ice cream':
        console.log('I scream for ice cream');
        break;
    default:
        console.log('Not on the menu');
}

// ELSE IF TANGENT

if (dessert == "cake"){
    console.log('Cake is great!');
} else if (dessert == "ice cream") {
    console.log('I scream for ice cream!');
} else {
    console.log('Not on the menu');
}

// TERNARY
let num = 6;

// () ? true : false

(num > 0) ? console.log('yes') : console.log('no');
