const global = {
    currentPage: window.location.pathname
}

console.log(global.currentPage)

function init(){
    switch(global.currentPage) {
        case'/':
        console.log('Home');
        break;
        case '/shows.html':
            console.log('Shows')
            break;
        case '/movie-details.html':
        console.log('Movie Details');
        break
        case '/tv-details.html':
            console.log('TV Details');
            break;
        case '/search.html':
            console.log('Search');
            break;    
    }
}

document.addEventListener('DOMContentLoaded', init);