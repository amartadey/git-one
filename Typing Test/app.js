let sentence = ['Old her object chatty regard vulgar missed.', 'Speaking throwing breeding betrayed children my to.', ' Sufficient unpleasing an insensible motionless if introduced ye.', 'Now give nor both come near many late.', 'Up maids me an ample stood given.', 'Certainty say suffering his him collected intention promotion.', 'Hill sold ham men made lose case.','Resolving neglected sir tolerably but existence conveying for.'];

let text = document.querySelector('p');
let textarea = document.querySelector('textarea');
let clockValue = document.querySelector('h2');
let clock;
let button = document.getElementsByTagName('button')[0];

// let button = document.querySelector('button');

textarea.addEventListener('focus',function(){
    randomSentence();
    typingCheck();
})

function randomSentence(){
    text.innerHTML = sentence[Math.floor(Math.random()*sentence.length)];
}

function typingCheck(){
    button.innerText = "Start";
    button.style.display = "none";
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
            checkSentence();
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

function checkSentence(){
    textarea.setAttribute('disabled','true');
    clearInterval(clock);
    let texts = document.querySelector('p').innerText;
    let wrongs = 0;
    let userText = document.querySelector('textarea').value;
    for (i=1;i<=texts.length;i++){
        if (texts.substring(0, i) != userText.substring(0, i)){
            wrongs++;
        }
    }
    let output = document.querySelector('h1');
    let time = document.querySelector('h2').innerText;
    output.innerText = `You wrote ${wrongs} wrongs in ${time} seconds`;
    button.style.display = "inline-block";

}

button.addEventListener('click',(e)=>{
    e.target.innerHTML = "Click inside the <span>textarea</span>";
    textarea.removeAttribute('disabled');
    textarea.value="";
    textarea.style.background = "#fff";
    textarea.style.color = "#000";
    document.querySelector('h1').innerText = `Typing Test`;
})


const url = "https://randomuser.me/api";

const btn = document.querySelector('button');
btn.addEventListener('click', getUsers);

function getUsers() {
    let temp = url + '?results=50';
    fetch(temp)
        .then(function (rep) {
            return rep.json();
        })
        .then(function (data) {
            console.log(data);
            document.querySelector('h3').textContent = data.value;
        })
}


