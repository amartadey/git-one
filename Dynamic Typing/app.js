const wording = ['Have several random sentences generated and you will soon be able to see if they can help with your project.','Javascript is a fun language','This is not Sparta so do not get exicted','Hi, welcome to Habra, a town in West Bengal'];
let startTime,endTime;

const message = document.querySelector('.message');
const playText = document.querySelector('textarea');
const button = document.querySelector('button');

button.addEventListener('click',function(){
    if(this.innerText == "Start"){
        playText.disabled=false;
        playGame();
    }
    else if(this.innerText == "Done"){
        playText.disabled = true;
        button.innerText = "Start";
        endPlay();
    }
});


function endPlay(){
    let date = new Date();
    endTime = date.getTime();
    let totalTime = ((endTime-startTime)/1000);
    console.log(totalTime);
    let str = playText.value;
    let wordCount = wordCounter(str);
    let speed = Math.round((wordCount/totalTime)*60);
    console.log(speed);
    let finalMessage = `You typed at ${speed} words per minutes`;
    // compareWords(message.innerText,str); 

    finalMessage += `<br>${compareWords(message.innerText, str)}`;

    message.innerHTML = finalMessage;
}

function wordCounter(strWords) {
    let response = strWords.split(" ").length;
    console.log(response);
    return response;
}

function compareWords(str1,str2){
    let cnt = 0;
    let word1 = str1.split(" ");
    let word2 = str2.split(" ");
    word1.forEach(function(item,index){
        if (item == word2[index]) {
            cnt++;
        }
    });
    return(cnt+" Correct out of "+word1.length);
}


function playGame(){ 
    let randomNum = Math.floor(Math.random()*wording.length);
    message.innerText = wording[randomNum];
    let date = new Date();
    startTime = date.getTime();
    button.innerText = "Done";
    playText.focus();
    playText.value="";

}