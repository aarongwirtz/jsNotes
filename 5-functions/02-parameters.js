//* PARAMETERS

function hi(name){
    console.log(`Hi ${name}`);
}

hi('Aaron');
hi('Beth');
hi('Ethan');

function addIt(x, y){
console.log(x+y);
}

addIt(5, 10);
addIt(10, 10);
addIt(15, 10);

//* MINI CHALLENGE

function mChal(first, last){
    let name = console.log(`Hello my name is ${first} ${last}`);
}

mChal('Aaron', 'Gwirtz');

//* this is Danielle's solution, separating out the creation of the variable and the action
function myName(fName, lName) {
    let fullName = fName + ' ' + lName;
    console.log(`Hello, my name is ${fullName}.`);
}

myName('Aaron', 'Gwirtz');


