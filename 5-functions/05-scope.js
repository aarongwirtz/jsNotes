let x = 12; //* global scope
function scope(){
    let x = 33; //* local scope
    console.log(x);
}
scope(); //* local scope
console.log(x); //* global scope




let y = 12;
function scope2(){
    y = 33; //we have reinitialized y
    console.log(y);
}
scope2();
console.group(y);

//* VAR vs LET

//* var is scoped to the nearest function block 
//* let is scoped to the nearest enclosing block

var x = 12;

function varTest(){
    var x = 33;
    if (1 == 1) {
        var x = 45;
        console.log(x);
    }
    console.log(x)
}
varTest();
console.log(x);

let x = 12;//* global scope

function letTest(){ //*function block, local scope
    var x = 33;
    if (1 == 1) { //*enclosing block, local scope
        let x = 45;
        console.log(x);
    }//*enclosing block, local scope
    console.log(x)
}//*function block, local scope
letTest();
console.log(x);

