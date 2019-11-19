let words = ['test', 'computer', 'ocean'];
// , 'unarmed', 'transport', 'light', 'judge', 'vessel', 'fumbling', 'bucket', 'shrill', 'penitent', 'current', 'day'
let button = document.querySelector('button');
let input = document.querySelector('input');

document.addEventListener("DOMContentLoaded", function (event) {
    input.focus();
});
let output = document.querySelector('h1');

button.addEventListener('click',checkRandom);
document.addEventListener('keydown',function(e){
    if(e.keyCode == 13){
        checkRandom();
    }
});

let randomWord = words[Math.floor(Math.random()*words.length)];
let shuffled = randomWord.split('').sort(function () { return 0.5 - Math.random() }).join('');
output.innerHTML = shuffled;


function checkRandom(){
    let userInput = input.value;
   
    if (userInput == randomWord){
        output.innerHTML = "You are Correct";
    } else{
        output.innerHTML = "You are Wrong";
    }
}

