//* OBJECT BRACKET NOTATION

//this is our JSON object

let garden = {
    vegetable: 'zucchini',
    flowers: 'sun flower',
    fruit: 'grape',
    water: true,
    sun: true,
    size: 10
};

let test = Object.keys(garden);
console.log(test);

//what is not always obvious immediately is that in objects the keys are strings
//let's check this by using typeof
console.log(typeof test[0]);

console.log(garden.vegetable);

console.log(garden['vegetable']);
//when you key is a little bit different that breaks the dot notation, such as follows

let baking = {};
baking["zucchini"] = "better make some bread!"
console.log(baking);

// this has created a key value pair
console.log(baking['zucchini']);

//just remember that keys are strings

