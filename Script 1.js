
console.log("hi this is working:");

const quoteText = document.querySelector(".quote");
let quoteBtn = document.querySelector("button");
const name1 = document.querySelector("#name");
let soundBtn = document.querySelector(".sound")
let copyBtn = document.querySelector(".copy")
let twitterBtn = document.querySelector(".twitter")

function randomQuote() {
    fetch("https://api.quotable.io/random")
    .then(res=> 
        res.json())
    
    .then(data=>
        {  
        console.log(data)
        quoteText.innerText = data.content;
        name1.innerText= data.author;
});
}

soundBtn.addEventListener("click",()=>{
    let utterence = new SpeechSynthesisUtterance(`${quoteText.innerText} by ${name1.innerText}`);
    speechSynthesis.speak(utterence);
})

copyBtn.addEventListener("click",()=>{
    navigator.clipboard.writeText(quoteText.innerText);
});

twitterBtn.addEventListener("click",()=>{
    //navigator.clipboard.writeText(quoteText.innerText);
    let tweetUrl = `https://twitter.com/intent/tweet?url=${quoteText.innerText}`;
    window.open(tweetUrl,"_blank");
});
quoteBtn.addEventListener("click",randomQuote)


