let dice = ['&#9856;', '&#9857;', '&#9858;', '&#9859;', '&#9860;', '&#9861;'];
let diceText = document.querySelectorAll('h2');
let result = document.querySelector('h1');
function rollOver(){    
    let rols = setInterval(() => {
                diceText.forEach(function(e){
                    e.innerHTML = (dice[Math.floor(Math.random()*dice.length)]);
                    
                });
    }, 150);
    setTimeout(() => {
        clearInterval(rols);
        let diceText = document.querySelectorAll('h2');
        
        if (diceText[0].innerText > diceText[1].innerText){
            result.innerHTML = "Player 1 Wins";
        } else if (diceText[0].innerText < diceText[1].innerText){
            result.innerHTML = "Player 2 Wins";
        } else if (diceText[0].innerText == diceText[1].innerText) {
            result.innerHTML = "We have a draw";
        } else{
            result.innerHTML = "ERROR!!";
        }
        button.classList.remove('active');
    }, 3000);
}

let button = document.querySelector('button');
button.addEventListener('click',()=>{
    result.innerHTML = "Dice Is Rolling...";
    button.classList.add('active');
    rollOver();
})

