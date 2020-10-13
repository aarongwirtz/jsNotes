//* ARROW FUNCTIONS (or FAT ARROW FUNCTION) - a simplied fied way of writing functions

//* CONCISE BODY

let hi = () => console.log('hi');

hi();

//* BLOCK BODY - you would use this if you had multiple things to run, for instance a if/else statement

let hello = () => {
    console.log('hello')
}

hello();

//* CONCISE vs BLOCK

let apples = x => console.log(`There are ${x} apples.`);

apples(8);

let apple = x => {
    console.log(`There are ${x} apples.`)
}
apple(10);

//* MINI CHALLENGE

