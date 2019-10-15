const baseURL = 'https://rickandmortyapi.com/api/character/'

const portalBtn = document.querySelector('.clickPlease')
// const portal = new Image();
// portal.src = 
const div = document.querySelector('portal')

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
    // console.log(json.results[0]);
    
    let name = document.createElement('h2')
    let para = document.createElement('p')
    let img = document.createElement('img')
    let article = document.createElement('article')

    let chars = json.results[0]

    name.innerHTML = chars.name
    para.innerHTML = chars.status
    img.innerHTML = chars.image


    console.log('Character:', chars)

    article.appendChild(name)
    article.appendChild(img)
    article.appendChild(para)
    // div.appendChild(article)

}