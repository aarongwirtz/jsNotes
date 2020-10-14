//* make a function called great

//* declare function using keyword
function greet() {
    console.log('Hello');
}

//* say hi - using let - consise block

let say_hi = () => console.log('Hi')

//* hello - use curly brackets over multiple lines

let hello = () => {
    console.log('Hello');
}

//* greet_two

let greet_two = function(){
    console.log('Greet again');
}

//* passing things into functions

a_list = ['Aaron', 'Gwirtz']

function print_list(){
    console.log(a_list);
}

//* functions should know where they live - this example is more specific

print_list()

aList = ['Aaron', 'Gwirtz']

function better_print(list_param){
    console.log(list_param);
}

better_print(aList)

//* make sure you have your parameters in a pattern that makes sense

function print_name(name){
    console.log(name);
}
print_name("Aaron");
print_name("Ethan");

//* CHALLENGE
//* write out how this works with 20


function var_loop(n){
    for(let i = 0; i <= n; i++){
        console.log(i);
    }
}


function var_loop(20){
    for(let i = 1; i <= 20; i++){
        console.log(i);
    }
}
var_loop(20)

//* MULTIPLE ARGUMENTS

//* make a function that take in 3 thigns and prints them on separate lines
function multi_print(a, b, c){
    console.log(a);
    console.log(b);
    console.log(c);
}


//* Using for in loop
function list_print(word_list){
    for (word in word_list){
        console.log(word_list[word]);
    }
}
list_print(['Aaron', 'Beth', 'Ethan'])

//* Using for out loop
function list_print(word_list){
    for (word of word_list){
        console.log(word);
    }
}
list_print(['Aaron', 'Beth', 'Ethan'])

 

