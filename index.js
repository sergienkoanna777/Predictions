const button =document.querySelector("#btn");
const par = document.querySelector("#par");
const quotes=[
"Spend your holiday with your loved one!",

"A cozy evening under a blanket for two is what you need right now.",

"With a loved one you will have fun on the path of life.",

"Reading the same book with your lover will give you new ideas for conversations.",

"You will be very successful in your new endeavor!",

"Even though some try to stop you, you will still achieve your goals.",

"If you have not met your love yet, then this year you will definitely have.",

"You are on the right track!",

"What you strive for is worth your effort.",

"It's time for you to rest.", 

"A pleasant surprise awaits you.", 

"You will be very successful in your business."  

]

button.addEventListener("click",()=>{
    let randomQuote=quotes[Math.floor(Math.random()*quotes.length)]
    par.style.display="block";
    par.textContent=randomQuote;
})