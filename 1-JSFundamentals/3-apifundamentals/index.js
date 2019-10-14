const baseURL = 'https://api.spacexdata.com/v2/rockets';

const searchForm = document.querySelector('form');
const spaceShips = document.querySelector('table');

searchForm.addEventListener('submit', fetchSpace);

//This function reaches out the the Base URL and checking if it is accessible
function fetchSpace(e) {
    e.preventDefault();

    fetch(baseURL)
    .then(result => {
    return result.json();
    })
    .then(json => {
        console.log(json)
        displayRockets(json);
    })
    .catch(err => {
        console.log(err);
    })
}

function displayRockets (data) {
    // console.log(data)
    //to loop over space x json array element is placeholder name for each index in the array
    data.forEach(element => {
    // console.log(element)
    let rocket = document.createElement('tr');
    let rocketName = document.createElement('td');
    let rocketCost = document.createElement('td')
    let rocketImage = document.createElement('img')

    rocketName.innerText = element.name; //this is going into the json (element) {the objects in the array} .name chooses the info to grab
    rocketCost.innerText = element.cost_per_launch;
    rocketImage.src = element.flickr_images[0]
    rocketImage.style.height = '75px'

    spaceShips.appendChild(rocket)
    rocket.appendChild(rocketName)
    rocket.appendChild(rocketCost)
    rocket.appendChild(rocketImage)

    })
}