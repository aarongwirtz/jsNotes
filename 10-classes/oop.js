//* Classes

//* They are a blueprint for like things.
//* Class names (constructors) must be initial cap
//* the constructor takes in two arguments
// class Automobile {
//     constructor(make, model){
//         this.make = make;
//         this.model = model;
//     }
// }
//* So we have built an object using the word "new" because of the "this" context. 

let myCar = new Automobile('Jeep', 'Wrangler')
console.log(myCar.make)
console.log(myCar.model)

//* Unnamed vs Named Classes

//* Unnamed Syntax
let Vehicle = class {
    constructor(make, model){
        this.make = make;
        this.model = model;
    }
}

console.log(Vehicle.name);

//* Named Syntax

let Vehicle = class Vehicle2 {
        constructor(make, model){
            this.make = make;
            this.model = model;
        }
}
console.log(Vehicle.name);

//* Similar to...
let myFunc = function() {} //unnamed
let myFunc = function myFuncName(){}//named

//* now that we know how to create classes, we want to make some METHODS
//* Methods
//* two example syntaxes
//* Old Syntax
// const automobile = {
//     start: function(){
//         //your action here
//     },
//     stop: function(){
//         //action here
//     }
// }

//* New Syntax - Prototype Method
const automobile = {
    start(){
        //your action here
    },
    stop(){
        //action here
    }
}
//* Above we have added methods to our automobile class.


class Automobile {
    constructor(make, model){
        this.make = make;
        this.model = model;
    }

    start(){
        console.log(`The ${this.make} ${this.model}'s engine started!`)
    }

    stop(){
        console.log(`The ${this.make} ${this.model}'s engine stopped!`)

    }
}

//* Instances = an instance of a class, instance of an object

let myOtherCar = new Automobile('Honda', 'Civic')
myOtherCar.start()

class People(name, age){
    constructor(name, age){
        this.name = name,
        this.age = age
    }
}

let person = {
    name: "Aaron",
    age: 42,
    speak: () => {`This is ${name} talking`},
    speak: function (){`This is ${this.name} talking`}
}
console.log(person.name);

let person2 = new People('Adam', 25)
person.speak()

let carMakes = ['Ford', 'Kia', 'Honda', 'BMW']
let carTypes = ['Truck', 'Car', 'Bike']

let carInventory = []
for (make of carMakes){
    for (type of carTypes) {
        let tmp = new Automobile(make, type)
            carInv.push(tmp)
    }       
}

console.log(carInv[2]);





