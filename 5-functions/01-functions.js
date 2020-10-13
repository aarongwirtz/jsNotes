//* DECLARATIONS

function hi() {
    console.log('HI');
}

hi();
hi();
hi();

//* EXPRESSIONS

let hello = function (){
    console.log('HEY!')
}

hello();

//* FUNCTION EXAMPLES

function addIt(){
    console.log(5+10);
}

addIt();

function counting(){
    for (i = 1; i <= 10; i++){
    console.log(i);
    }
}

counting();

//* MINI CHALLENGE
//* Given the array, create a function that lists out the values individually.


let arr = ['This', 'is', 'really', 'cool'];

function arrList(){
    for (item of arr) {
    console.log(item)
    }
}

arrList();



