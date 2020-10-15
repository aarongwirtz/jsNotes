//* ARRAY CHALLENGE
/*  - (Go look at MDN docs to remind you):
- Create an array containing movies
- Use .forEach() to list your movies
- Add another movie at the end
- And replace one of your existing movies with another one
*/

let movieArr = ['Jaws', 'Jaws 2', 'Jaws 3', 'Jaws 4: Why won\'t he die?!?!'];
movieArr.push('Jaws 5: We need more money');
movieArr.splice(1, 1, 'Jaws 17: Son of Son of Son of Jaws')
movieArr.forEach(function(title){
    console.log(title);
})