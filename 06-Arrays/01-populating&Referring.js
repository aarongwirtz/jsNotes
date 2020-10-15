//* ARRAYS
//* are lists of information
//* are considered OBJECT data types

let list = ['chips', 'apples', 'coffee', 'milk'];

console.log(list[1]);
console.log(list[2]);

let students = ['Ro', 'Travis', 'Taylor', 'Justin', 23, true, ['Isaiah', 'Jason', 'Adam']];

console.log(typeof students);
console.log(students instanceof Array);
//* this second console log is figuring out if this is in fact, specifically an Array. Notice that Array is capatilized. This returns a boolean value.

//* CHALLENGE - nested array
//* dive into the nested array located above and pull the value 'Jason'
//* print out "Hello Jason!
//* approach #1
        // console.log('Hello ' + students[6][1] + '!');
//* alternate approach is to create a variable
        // let student = students[6][1];
        // console.log(`Hello ${student}!`);
//* approaah #3
            let subArray = students[6];
            console.log(subArray);
            console.log(subArray[1]);

