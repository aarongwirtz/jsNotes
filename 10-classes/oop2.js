class Animal {
    constructor(name){
        this.name = name;
    }

    eat(){
        console.log(`${this.name} eats their food`)
    }
}

let myAnimal = new Animal("Tiger");

console.log(myAnimal.name);
myAnimal.eat()

//* Inheritance

class Dog extends Animal {
    constructor(name, breed){
        super(name);
        this.type = breed;
    }
    play() {
        console.log(`${this.name} fetches the ball`)
    }
}
let finn = new Dog('Finn', 'Shiba Inu');
finn.eat()
finn.play()
console.log(finn)
 




//* OOP - FOUR MAIN PRINCIPLES

//* OOP is used to make one thing built from another built from another





//* APIE -  Abstraction, Polymorphism, Inheritance, Encapsulation
//* The four pillars of OOP. This is a very broad and deep subject so for now, definitions will suffice.

//* Abstraction
console.log() // for example => I dont' need to know how this works
//* arguments - what I give it
//* result or return - what it gives me
//* side effect is what it does, what goes on inside of it

//* Polymorphism - this means to change, poly(multipe) morphisms(changes). So in JS you can overwrite methods. 

//* Inheritance - the ability to build tings incrementally

//* Encapsulation - data is kept separate, you can use data without having access to it.