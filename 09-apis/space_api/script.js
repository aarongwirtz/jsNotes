//* API - Application Programming Interface - allows you to do something complex, simply. If you want to toast bread, you need to know how to use a toaster. But you don't need to know how to be an electrician to plug it into the wall and use it to toast your bread. Don't worry about complexity because tou have a simple interface. An interface is how tou interaact with something.

//* Asyncronous programming - we will learn the fetch method. Uses promises, which are asyncrnous and we interacct with them differently than we have previosuly experienced.

const baseURL = 'https://api.spacexdata.com/v2/rockets'

const searchForm = document.querySelector('form');
// const spaceShips = document.querySelector('ul');
const spaceShips = document.querySelector('table');

//* learn all the dot methods on document

    // searchForm.addEventListener('submit', fetchSpace);

function fetchSpace() {
    event.preventDefault();
    fetch(baseURL)
        .then(result => {
             return result.json();   
            }
            //* we choose the word result because it makes sense
        ) .then(json => {
            console.log(json);
            displayRockets(json);
        })
        //* this is saying go to this URL and get me data, and when you get it "then" do something else.
}
function displayRockets(json) {
    console.log('Results:', json);
    let rockets = jaon.forEach( r => {
        let rocket = document.createElement('li');
        rocket.innerText = r.name

    });
}


let rockets = json.forEach( r => {
    let rocket = document.createElement('tr');
    let rocketName = document.createElement('td');
    let rocketCost = document createElement('td');

    rocketName.innerText = r.name;
    rocketCost.innerText = r.cost_per_launch;

    spaceShips.appendChild (rocket);
    rocket.appendChild(rocketCost);
})