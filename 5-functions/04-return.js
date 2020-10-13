//* RETURNS

let name = fName => {
    return 'Finn'
}

let myName = name();
//*this has assigned this function call to a variable

console.log(myName);
//* this console log is not inside your function and has called your variable instead of an argument

console.log(name());
//* you can console.log a function, instead of arguments or a variable


function capitalizeName(name) {
    let capName = '';
    for (l in name) {
        //console.log(l)
        //console.log(capName)
        if (l == 0) {
            capName += name [l].toUpperCase();
        } else {
            capName += name [l].toLowerCase();
        }
    }
    return capName
}

console.log(capitalizeName('aArOn'));





//* MINI CHALLENGE

//* Make a tip calculator using a function
    //* Have it RETURN the value
    //* Capture that returned value in a VARIABLE
    //* Print that variable

// let cost = 20 
// let tax = 0.07
// function tipCalc (){
//     return (cost * tax);
// }
// console.log(tipCalc());
// console.log(Math.trunc(tipCalc()));

// let cost = 20 
// let tax = 0.07
// function tipCalc (cost, tax) {
//     return cost * tax;
// }

// tipCalc(20, 0.07);



//* DANIELLE ANSWERS
//* your return should be the last thing in your function

function tipCalc (bill) {
    let tip = bill * 0.2;
    return tip.toFixed(2); 
}
let totalTip = tipCalc(19.72);
console.log(totalTip);

//* --OR--

// let tipCalc = bill => bill * 0.2;
// let totalTip = tipCalc(19.72);
// console.log(totalTip)


