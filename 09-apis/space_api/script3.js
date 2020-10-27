const baseURL = 'https://api.spacexdata.com/v3/rockets';

const searchForm = document.querySelector('form');
const spaceShips = document.querySelector('ul');

searchForm.addEventListener('submit', fetchSpace);

function fetchSpace(){
    event.preventDefault();
    fetch(baseURL)
        // .then(resultToJson)
        .then( (cat) => {
            return cat.json();
        })
        .then(json => {
            // console.log(json);
            displayRockets(json);
        })
}
function resultToJson(result){
    return result.json();
}
function displayRockets(json) {
    console.log('Results', json);
    let rockets = json.forEach( r => {
        let rocket = document.createElement('li');
        rocket.innerText = r.rocket_name;
        spaceShips.appendChild(rocket);
        });
}

let myFunction = () => {
    return true;
}

// let myResult = myFunction().toLowerCase();
// let myResult = true.toLowerCase();
// console.log(myResult);

