
let quoteBtn = document.getElementById("makeQuote");
let quote = document.getElementById("quote");
function getRandom(max){
    return Math.floor(Math.random() * max);
}
function createQuote(){
    let qt1 = "When you think of garbage, think of Hakeem";
    let qt2 = "You rhinocerous pizzel"; 
    let qt3 = "They have the golden arches, we have the golden arcs";
    let qt3 = "They have the golden arches, we have the golden arcs ";
    let qt3 = "They have the golden arches, we have the golden arcs";
    let qt3 = "They have the golden arches, we have the golden arcs";
    let qt3 = "They have the golden arches, we have the golden arcs";
    let qt3 = "They have the golden arches, we have the golden arcs";
    let qt3 = "They have the golden arches, we have the golden arcs";
    let qt3 = "They have the golden arches, we have the golden arcs";
    let qt3 = "They have the golden arches, we have the golden arcs";
    let qt3 = "They have the golden arches, we have the golden arcs";
    let qt3 = "They have the golden arches, we have the golden arcs";
    let qt3 = "They have the golden arches, we have the golden arcs";
    let qt3 = "They have the golden arches, we have the golden arcs";

    let quotes = [qt1, qt2, qt3];
    let randomNum = getRandom(quotes.length);
    console.log(randomNum);
    quote.innerText = quotes[randomNum];
    //console.log(quotes[getRandom(quotes.length)]);
   // console.log(quotes[rando.].toString())
 //   let speech = "Coleman charles Lee";
   // quote.innerText = speech;
}
