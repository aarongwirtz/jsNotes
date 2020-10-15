//CONSTRUCTOR FUNCTION - like creating a blueprint, instead of creating a bunch of objects that all look the same
//Tying together objects and functions
//this func takes in three arguments
function Person(name, age, canVote){
    this.name = name;
    this.age = age;
    this.canVote = canVote;
}
console.log(typeof Person);//returns function to the console

let person4 = new Person('Justin', 80, true);
let person5 = new Person('Amy', 54, true);
console.log(person4);
console.log(person4.name);
console.log(person5.name);
//this is bridging agap between objects and code reusablility - such as in a function
person4.name = 'Adam'//changes the value with dot notation
person4['name'] = 'Fred'//changes the value with square bracket notation
console.log(person4.name);



