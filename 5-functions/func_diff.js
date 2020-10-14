//* Hoisting

//* you don't always need to place function calls below function declarations, but you do when using fat arrow declare functions

let arr_func = () => {
    console.log('This is a fat arrow function')
}
arr_func()

//* --vs-- in order to be able to hoist, you must use the function keyword

std_func()
function std_func () {
    console.log('This is a standard function')
}

//* why use one over the other? 