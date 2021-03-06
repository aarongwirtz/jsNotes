const baseURL = 'https://api.spacexdata.com/v2/rockets';
const searchForm = document.querySelector('form');
const spaceShips = document.querySelector('ul');
searchForm.addEventListener('submit', fetchSpace);
function fetchSpace() {
    event.preventDefault();
    fetch(baseURL)
        .then(result => {
            return result.json();
            // console.log(result.json());
        })
        .then(json => {
            // console.log(json);
            displayRockets(json);
        })
}
function displayRockets(json) {
    console.log('Results:', json);
    let rockets = json.forEach( r => {
        let rocket = document.createElement('li');
        rocket.innerText = r.name;
        spaceShips.appendChild(rocket);
    });
}