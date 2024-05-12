let query = document.querySelector('#query');
let subbmit = document.querySelector('#subbmit');

subbmit.onclick = function(){
    let url = 'https://www.google.com/search?q='+query.value;
    window.open(url);
}

