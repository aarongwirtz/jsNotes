//* BOOLEANS
let on = true;
console.log(on);

let off = false;
console.log(off);

//* NULL - is an empty value. Null is different than undefined. If you need to give an empty value to hard code, use Null instead of undefined. Undefined is a mistake returned by JS.
let empty = null;
console.log(empty);

//* UNDEFINED - this is a data type that you don't want to use. JS tries it's best to figure out and run code. While this is a state you probably don't want to use. This data type allows your code to continue making decisions that allows you to keep running your program without breaking it. You may use this when you are creating an application to continue developing it without "stopping".
let undef = undefined;
console.log(undef);

let x;
console.log(x);

//* NUMBERS

let degrees = 90;
console.log(degrees);

let precise = 999999999999999;
console.log(precise);

let rounded = 9999999999999999;
console.log(rounded);

let notQuite = 0.2 + 0.1;
console.log(notQuite);

let numbersAreHard = (0.2 * 10 + 0.1 * 10) / 10;
console.log(numbersAreHard);

let a = Number("123");
console.log(a);

//* STRINGS
let stringOne = "double quotes";
let stringTwo = 'single quotes';
let stringThree = 'I\'m home' //* use a backslash to indicate that you are not closing the string
let stringFour = `I'm home` //* string interpolation - using back ticks
let stringFive = `You can use ${stringOne} or ${stringTwo}!`

console.log(stringFive);

let first = 1050 + 100;
let second = '1050' + '100';
console.log(first);
console.log(second);

console.log(typeof first);
console.log(typeof second);

let animal = 'dog';
console.log('I have a ' + animal);
console.log(`I have a ${animal}`);

//* OBJECTS - it contains multiple different data types

let frodo = {
    race: 'hobbit',
    rings: 1,
    isShort: true,
}
//* key value pair - so race is the key and hobbi is the value
//* JSON stands for javascript object notation

console.log(frodo);
console.log(typeof frodo);

//* ARRAYS - these are defined as objects

let tacos = ['large', 4, true];
console.log(tacos);
console.log(typeof tacos);
console.log(tacos[0]);

//* Mini Challenge

let firstName = "Aaron"
let  lastName = "Gwirtz"
let houseNumber = 13036
let  street = "Southampton Drive"
let  city = "Carmel"
let  state = "IN"
let  zipcode = 46032

let address = `${firstName} ${lastName}, ${houseNumber} ${street}, ${city}, ${state} ${zipcode}`

console.log(`${firstName} ${lastName}, ${houseNumber} ${street}, ${city}, ${state} ${zipcode}`);

//* STRING PRIORITIES AND METHODS

let name = 'Danielle'
console.log(name.length);

let name2 = 'Dani   elle' //* spaces count in a string
console.log(name2.length);

let myName = "Danielle"
console.log(myName.toUpperCase());

let home = "My home is Fishers";
console.log(home.includes('Fishers')) //* this method returns a boolean

//* Combining methods




//* Mini Challenge #2
let sent = 'This sentence will be split into individual parts'
console.log(sent.split(' '));

