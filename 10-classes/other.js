//* Objects create a new context

//* Value vs Reference Types //Value Types

//* Why do we need unique contexts?

let x = 5;
let y = x;
console.log(`x:${x}, y${y}}`)


//* Reference Types
let a = {
    data:'Testing'
}
let b = a;
a.data = "This is new"
console.log(`a:${a.data}, b:${b.data}}`)

