const searchTerm = document.querySelector('.search');
const searchForm = document.querySelector('form');
const submitBtn = document.querySelector('.submit');

const section = document.querySelector('section');

window.onload = onClientLoad;

function onClientLoad() {
    gapi.client.load('youtube', 'v3', onYouTubeApiLoad)
}

function onYouTubeApiLoad() {
    gapi.client.setApiKey('AIzaSyDjtFukI0pv7QB2lyz98HbRIeDJK7OeRHI');
    searchForm.addEventListener('submit', search);
}

function search(e) {
    e.preventDefault();

    let request = gapi.client.youtube.search.list({
        part: 'snippet',
        maxResults: 10,
        q: searchTerm.value
    });

    request.execute(onSearchResponse);
}

function onSearchResponse(response) {
    while (section.firstChild) {
        section.removeChild(section.firstChild);
    }

    let results = response.items;

    for(let i = 0; i < results.length; i++) {
        displayVideo(results[i], i);
    }
}

function displayVideo(result, i) {
    let vid = document.createElement('div');
    vidId = 'vid' + i;
    vid.id = vidId;
    section.appendChild(vid);

    let player = new YT.Player(vidId, {
        height: '360',
        width: '480',
        videoId: result.id.videoId,
        events: {
            'onReady': onPlayerReady
        }
    });

    function onPlayerReady(e) {
        let myId = e.target.a.id;
        let duration = e.target.getDuration();
        if(duration === 0) {
            console.log('Video ' + myId + ' cannot be played, so it was deleted.');
            section.removeChild(e.target.a);
        } else {
            console.log('Video ' + myId + ' ready to play.');
        }
    }
}