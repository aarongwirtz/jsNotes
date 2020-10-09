// let i = 7;

//* i = i + 1
// for (i = 0; i < 10; i++){
//     console.log(i);
// }

// for (i = 2; i < 20; i += 2){
//     console.log(i);
// }

// console.log('global variable:', i);

//* CHALLENGE 1

// let i = 10;

// for (let i = 10; i >= 0; i --){
//     console.log(i);
// }

//*Challenge:using a for loop, count from 0, going down by 2's to -24

// for (i = 0; i >= -25; i -= 2){
//     console.log(i);
// }

// Challenge: using a for loop, go through a name and display each letter individually

// let name = "Justin Ahmann"

// for (let i = 0; i < name.length; i++){
//     console.log(name[i]);
// }

// for (letter of name){
//     console.log(letter)
// }

// let fruits = ["apple", "bananas", "kiwi"]
// for (fruit of fruits){
//     console.log(fruit)
// }

//* CHALLENGE - make a for loop where you add up all the numbers from 1 to 50 (should equal 1275)

//* how to add array elements using a loop

let sum = 0;

for (let i = 1; i <= 50; i++){
    sum += i;
}
console.log(sum)