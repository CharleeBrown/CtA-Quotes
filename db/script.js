let quoteBtn = document.getElementById("makeQuote");
let quote = document.getElementById("quote");
function createQuote(){
    fetch("https://movie-database-imdb-alternative.p.rapidapi.com/?s=Avengers%20Endgame&r=json&page=1", {
        "method": "GET",
        "headers": {
            "x-rapidapi-key": "2ssq8iH43KmshkQsVFI998LmcAlWp1eTmmAjsnb5qXqtUVy79B",
            "x-rapidapi-host": "movie-database-imdb-alternative.p.rapidapi.com"
        }
    })
    .then(response => {
        console.log(response);
    })
    .catch(err => {
        console.error(err);
    });
 //   let speech = "Coleman charles Lee";
   // quote.innerText = speech;
}
