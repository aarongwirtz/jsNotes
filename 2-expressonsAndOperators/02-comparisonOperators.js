//* EQUAL OPERATOR - these give you a boolean return

console.log('3' == 3); //? just compares the value, not the data types
console.log(3 == 3);
console.log('3' == '3');

//* STRICT EQUAL

console.log('3' === 3); //? compares value AND data. One of these is a string and the other is a number, so while the number itself is the same, the data TYPE is different
console.log(3 === 3);

//* NOT EQUAL

console.log('3' != 3); //? the ! is called a bang, only check for value

//* STRICT NOT EQUAL

console.log('3' !== 3); //? checks for value and type. In this case it is true that they are not equal to each other

//* GREATER THAN
console.log(3 > 2); //? true

//* LESS THAN
console.log(3 < 2); //? false

//* GREATER THAN OR EQUAL TO
console.log(3 >= 2); //? true

//* LESS THAN OR EQUAL TO
console.log(3 <= 2);//? false

//* AND
2 && 3 //? two ampersands

//* OR
2 || 3 //? using the pipe key

//? All of these return boolean values of true or false

//* So this is how JavaScript is thinking

console.log(3>2>1); //? this comes back as false - this gets into something called coercion - JS is the nice programming language. It changes types in the background so it doesn't break.

console.log(3>2); //? JS says this is true
console.log(true>1); //? JavScript coerces this to mean that 1>1

console.log(3>2>1); //? this comes back as false - this gets into something called coercion - JS is the nice programming language. It changes types in the background so it doesn't break.

console.log(3>2); //? JS says this is true
console.log(true>1); //? JavScript coerces this to mean that 1>1

console.log(3>=2>=1); //? this comes back as true




