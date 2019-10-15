const baseURL = 'https://rickandmortyapi.com/api/character/'

const portalBtn = document.querySelector('.clickPlease')
// const portal = new Image();
// portal.src = 

portalBtn.addEventListener('click', portalActivate)

function portalActivate () {
    console.log('CLICK')

fetch(baseURL)
    .then(function(result) {
        // console.log(result)
        return result.json();
    }).then(function(json) {
        // console.log(json);
        character(json);
    });
}

function character (json) {
    console.log(json.results[0]);
    
    let chars = json.results
}