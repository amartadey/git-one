let sentence = ['Old her object chatty regard vulgar missed.', 'Speaking throwing breeding betrayed children my to.', ' Sufficient unpleasing an insensible motionless if introduced ye.', 'Now give nor both come near many late.', 'Up maids me an ample stood given.', 'Certainty say suffering his him collected intention promotion.', 'Hill sold ham men made lose case.','Resolving neglected sir tolerably but existence conveying for.'];

let text = document.querySelector('p');
let textarea = document.querySelector('textarea');
let clockValue = document.querySelector('h2');
let clock;

// let button = document.querySelector('button');

textarea.addEventListener('focus',function(){
    randomSentence();
    typingCheck();
})

function randomSentence(){
    text.innerHTML = sentence[Math.floor(Math.random()*sentence.length)];
}

function typingCheck(){
    startClock();
    let startTime = Date.parse(new Date());
    let texts = document.querySelector('p');
    let userText = ""
    textarea.addEventListener('keyup',(e)=>{
        // if (e.keyCode >= 48 && e.keyCode <= 57 || (e.keyCode >= 65 && e.keyCode <= 90) || e.keyCode == 32){
        // userText += e.key;
        //     console.log(userText);
        // }
        userText = document.querySelector('textarea').value;
        console.log(userText.length);
        if (textarea.value.length>=1){
            textarea.style.color = "#fff";
        }
        if (userText.substring(0, (userText.length)) == (texts.innerText).substring(0, (userText.length)) && userText.length < texts.innerText.length){
           
            textarea.style.background = "green";
        } else if (userText.substring(0, (userText.length)) != (texts.innerText).substring(0, (userText.length)) && userText.length < texts.innerText.length){
            textarea.style.background = "red";
        } else if (userText.length >= texts.innerText.length){
            textarea.style.background = "purple";
             clearInterval(clock);
        }
    })
}

function startClock(){
    let miliSec =0;
    sec = 0;
    clock = setInterval(() => {
        miliSec +=1;
        let seconds = Math.floor(miliSec / 100);
        clockValue.innerHTML = seconds +":" + miliSec%100;
        
    }, 10);
    
}

function stopClock(){

}



