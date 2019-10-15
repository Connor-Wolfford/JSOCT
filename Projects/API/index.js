const baseURL = 'https://rickandmortyapi.com/api/character/'

const portalBtn = document.querySelector('.clickPlease')
const div = document.querySelector('portal')
const section = document.querySelector('section')

// document.getElementsByClassName("clickPlease").onclick = function() {
// document.getElementById("theImage").style.visibility = "visible";
// }

portalBtn.addEventListener('click', portalActivate)

function portalActivate () {
    console.log('CLICK')
    document.getElementById("theImage").style.visibility = "visible";
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
    let clearfix = document.createElement('div')

    let chars = json.results[0]

    name.innerHTML = chars.name
    para.innerHTML = chars.status
    img.innerHTML = chars.image



    console.log('Character:', chars)

    article.appendChild(name)
    article.appendChild(img)
    article.appendChild(para)
    section.appendChild(article)
}