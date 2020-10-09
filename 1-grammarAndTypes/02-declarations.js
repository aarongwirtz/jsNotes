let a = 2;

let b = 1;
//* (1)(2)(3)(4)

//* there are four parts to this variable.
//* 1- keyword 
//* 2- Variable name
//* 3- Assignment operator 
//* 4- Variable Value - this is the value your "box" will be storing.

//* const is a variable that you cannot change later. The value does not change.
//* let is your most basic variable keyword
//* you may see var which is similar but it's from an older version of JS.
//* always use let over var

console.log(a + b);

let c = 3;

let hello = 'greet';
let Hello = 'greet again';

//* Case sensitivity is important in JS. The two above examples are different variable. You cannot have spaces in variable names.

//* this does not Work --->  let hi There = "hey";
//* this will work --->  let hiThere = "hey"

//* single vs double quotes are isFinite, but stay consistent for best practice sake

//* VAR LET CONST
var x = 1;
let y = 2;
const z = 3;

//* DECLARATIONS vs INITIALIZATION
//* the declaration is what is on the left side

let n;

//* declaration
console.log(n); //* this will be undefined

n = 10;

console.log(n); //* this will result in the value of 10

//* you can highlight what you want to run in console.

//* LET vs CONST
let today = "Great!";
const elevenFifty = 'Wonderful';
console.log(today, elevenfifty);

today = "Lovely"
console.log(today, elevenFifty);

//* eleven FIfty = "Super!" Cannot reassign a const
//* elevenFifty = "Super!"
//* console.log(today, elevenFifty);

//* a constant has to constantly be the same