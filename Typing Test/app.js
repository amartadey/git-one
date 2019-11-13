let sentence = ['Old her object chatty regard vulgar missed.', 'Speaking throwing breeding betrayed children my to.', ' Sufficient unpleasing an insensible motionless if introduced ye.', 'Now give nor both come near many late.', 'Up maids me an ample stood given.', 'Certainty say suffering his him collected intention promotion.', 'Hill sold ham men made lose case.','Resolving neglected sir tolerably but existence conveying for.'];

let text = document.querySelector('p');
let textarea = document.querySelector('textarea');

// let button = document.querySelector('button');

textarea.addEventListener('focus',function(){
    randomSentence();
    typingCheck();
})

function randomSentence(){
    text.innerHTML = sentence[Math.floor(Math.random()*sentence.length)];
}

function typingCheck(){
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
        let checkText = document.querySelector('p')
        if (userText.substring(0, (userText.length)) == (texts.innerText).substring(0, (userText.length)) && userText.length < texts.innerText.length){
           
            textarea.style.background = "green";
        } else if (userText.substring(0, (userText.length)) != (texts.innerText).substring(0, (userText.length)) && userText.length < texts.innerText.length){
            textarea.style.background = "red";
        } else if (userText.length >= texts.innerText.length){
            textarea.style.background = "purple";
        }
        

    })
}

