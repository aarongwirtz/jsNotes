//* METHODS

let food = ['Pecan Pie', 'Shrimp', 'Quesadilla', 'Cheese Cake', 'Hotdog'];

//* DOT PUSH METHOD
//* call your array, then add your method using the dot operator, which appends something to the end of the array
food.push('Pizza');
console.log('push:', food);
//* we are in this case literally console logging the method itself, followed by the name of the array

//* SPLICE METHOD
//* inside the method you have established parameters. In the first position we have how many things you want to cut from the array , and what to add in that location. you don't need to fill out all three of these parameters.

food.splice(1, 1, 'Bananas');
console.log('splice:', food);

food.splice(2, 0, 'Sweet Potato Pie');
console.log('splice2:', food);

//* to remove more than one item

food.splice(0, 3, 'Turkey');
console.log('splice3:', food);

//* CHAINED METHODS
//* methods can be chained one on top of the other

food.splice(0, 3, 'Turkey');food.splice(4, 0, 'Steak');
console.log('splice4:', food);

//* POP METHOD
//* this method removes the last item from the array

food.pop();
console.log('pop:', food);

//* SHIFT METHOD
//* removes the first item of an array

food.shift();
console.log('shift:' , food);

//* UNSHIFT METHOD 
//* adds whatever is inside the parenthesis to the beginning of the array

food.unshift('Popcorn', 'Candy');
console.log('unshift:', food);

//CHAINED METHOD
//*
let dogs = ['Shiba Inu', 'Greyhound', 'Shih Tzu', 'German Shepherd'];
dogs.push('Bull Terrier');
dogs.unshift('Bull Terrier', 'Husky');
console.log(dogs);


//* THIS IS A REGULAR FOR LOOP
//* dogs.length is a property of an array
//* as long as i is less than the length of this array, continue running the loop
for (i = 0; i < dogs.length; i++){
    console.log(dogs[i]);
}

//* FOR EACH METHOD
//* great for allowing you run run a for loop on everything in an array, with one line of clean code
dogs.forEach(dog => console.log(dog))

dogs.forEach(function(dog) {
    console.log(dog)
})
//* this should print dog, numberm dog number based on the parameters dog and index
dogs.forEach((dog, index) => {
    console.log(dog)
    console.log(index)
})

//* CHALLENGE
/*  - (Go look at MDN docs to remind you):
- Create an array containing movies
- Use .forEach() to list your movies
- Add another movie at the end
- And replace one of your existing movies with another one
*/

let movieArr = ['Jaws', 'Jaws 2', 'Jaws 3', 'Jaws 4: Why won\'t he die?!?!'];
movieArr.push('Jaws 5: We need more money');
movieArr.splice(1, 1, 'Jaws 17: Son of Son of Son of Jaws');
movieArr.forEach(function(title){
    console.log(title);
})

//* DANIELLE'S ANSWER

let movies = ['One', 'Two', 'Three', 'Four'];

movies.push('Five');
movies.splice(2, 1, 'SPLICED');

movies.forEach(movie => {
    console.log(movie);
})

/* in this example movies is our array that we are running our method on. On the
for each method we use a arrow function that accepts a parameter called movie, then our curly braces so that the function will run the console.log on each item in the array */
//* the above is an example of a callback function


//* CHALLENGE
//* METHOD - to flip values

let arr = [1, 2, 3, 4, 5];

/*first we have to check to see if this is an array
if the array is an array and returns a boolean value of true, then
create a new variable 
*/
//* revArr is "reverse array"

if (arr instanceof Array === true){
    let revArr = arr.reverse();
    revArr.forEach(num => console.log(num));
} else {
    console.log('not an array');
}

//* you could also run this without === true because it is true and will automatically run the if statement

if (arr instanceof Array){
    let revArr = arr.reverse();
    revArr.forEach(num => console.log(num));
} else {
    console.log('not an array');
}

//* consider the importance of truthy vs falsy values
//* '' false "string" true
//* 0 false 1 true

console.log(typeof 2001);
console.log(typeof '2001');
console.log( typeof true);
console.log(typeof "true");

