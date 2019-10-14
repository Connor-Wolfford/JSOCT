//Calling out to the API and using the verification makes baseURL a const variable
const baseURL = 'https://api.nytimes.com/svc/search/v2/articlesearch.json';
const key = 'QFYBeEkW5Lw4NOS1ABq2O8g3hmAut6I8';
let url;

// The following variables are being given the value of each piece of our index.html

//SEARCH FORM
const searchTerm = document.querySelector('.search');
const startDate = document.querySelector('.start-date');
const endDate = document.querySelector('.end-date');
const searchForm = document.querySelector('form');
const submitBtn = document.querySelector('.submit');

//RESULTS NAVIGATION
const nextBtn = document.querySelector('.next');
const previousBtn = document.querySelector('.prev');
const nav = document.querySelector('nav');

//RESULTS SECTION
const section = document.querySelector('section');

nav.style.display = 'none';
//This controls whether or not to display the nav info
let pageNumber = 0;
let displayNav = false;

//This is giving our buttons functionality
searchForm.addEventListener('submit', fetchResults);
nextBtn.addEventListener('click', nextPage);
previousBtn.addEventListener('click', previousPage);

//e, the event listener; is passed into the function as a parameter
function fetchResults(e){
    e.preventDefault();
    //This is how we build the URL for what we search
    url = baseURL + '?api-key=' + key + '&page=' + pageNumber + '&q=' + searchTerm.value;
    //If there is no displayed start date it adds one on

    if(startDate.value !== '') {
        console.log(startDate.value)
        url += ' &begin_date' + endDate.value;
    };
//If there is no displayed end date it adds one on
    if(endDate.value !== '') {
        url += '&end_date' + endDate.value;
    }
    console.log(url)
    //This pulls data from the API and jsonifies it to make it readable 
    fetch(url)
    .then(function(result) {
        console.log(result)
        return result.json();
    }).then(function(json) {
        displayResults(json);
    });
}

function displayResults(json) {
    while (section.firstChild) {
        section.removeChild(section.firstChild);
    }
    let articles = json.response.docs;

    if(articles.length === 10) {
        nav.style.display = 'block';
    } else {
        nav.style.display = 'none';
    }
    
    if(articles === 0) {
        console.log("No Results");
    }else{
        for(let i = 0; i < articles.length; i++) {
            let article = document.createElement('article');
            let heading = document.createElement('h2');
            let link = document.createElement('a');
            let img = document.createElement('img');
            let para = document.createElement('p');
            let clearfix = document.createElement('div');

            let current = articles[i];
            console.log("Current:", current);

            link.href = current.web_url;
            link.textContent = current.headline.main;

            para.textContent = 'Keywords: ';

            for(let j = 0; j < current.keywords.length; j++) {
                let span = document.createElement('span')
                span.textContent += current.keywords[j].value + ' ';
                para.appendChild(span)
            }

            if(current.multimedia.length > 0) {
                img.src = 'http://www.nytimes.com/' + current.multimedia[0].url;
                img.alt = current.headline.main;
            }

            clearfix.setAttribute('class', 'clearfix');

            article.appendChild(heading);
            heading.appendChild(link)
            article.appendChild(img);
            article.appendChild(para);
            article.appendChild(clearfix);
            section.appendChild(article);
        }
    };
};

function nextPage () {
    console.log("Next Button Clicked");
}

function previousPage () {
    console.log("Previous Button Clicked")
}