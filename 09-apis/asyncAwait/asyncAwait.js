/*
v---returns a promise
fetch()
    .then() // if you use one callback, that is on Fulfilled.
    .then(x, y) // x will happen if Fulfilled
                // y will happen if Rejected
    .catch(x) // this will happen if Rejected

fetch().then(x<if worked>, y<if failed>)

fetch()
    .then(x) < if it worked
    .catch(x) < if it failed


const result = await fetch();
const json = await result.json();
console.log(json)
*/

//* ASYNC FUNCTION

//* declare async function
const request = async () => {
    const response = await fetch('https://random.dog/woof.json')
    const json = await response.json();
    return json
}
//* call it
request().then(json => {
    console.log(json);
})

// const myProm = new Promise((resolve, reject) => {
//     resolve()
//     reject()
// })


request().then(json => {
    console.log(json.url);
    let dogImageTag.src = json.url
    document.createElement
    dogImageTag.src = json.url;
})