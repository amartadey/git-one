let h1 = document.createElement("h1");
h1.innerHTML = "Click HEADS or TAILS";
document.body.appendChild(h1);
let button =[];
for(i=0;i<2;i++){
    button[i]= document.createElement('button');
    document.body.appendChild(button[i]);
    button[i].classList.add("main-buttons");
    button[i].setAttribute('style','font-size:20px; color:#fff; line-height:22px; font-weight:700; padding:10px 20px; border:none; background: #4608AD; margin:0 10px;; border-radius:30px;cursor:pointer; transition: all 0.3s ease;');
    button[i].addEventListener('mouseover',(e)=>{
        e.target.style.background = "red";
        e.target.style.boxShadow = "0 3px 7px -1px #000000a3";
        e.target.style.transform = "translateY(-2px)";
    });
    button[i].addEventListener('mouseout',(e)=>{
        e.target.style.background = "#4608AD";
        e.target.style.boxShadow = "none";
        e.target.style.transform = "translateY(0)";
    });
    button[i].addEventListener('click',buttonClick);
    
}

button[0].innerText = "HEADS";
button[1].innerText = "TAILS";
   let compScore = 0, userScore = 0;
function buttonClick(e){
    // button.forEach(function(){
    //     e.target.setAttribute('disabled','true');
    //     e.target.style.opacity = "0.5";
    //     e.target.style.cursor = "not-allowed";
    //     setTimeout(() => {
    //         e.target.setAttribute('disabled', 'false');
    //         e.target.style.opacity = "1";
    //         e.target.style.cursor = "pointer";
    //         e.target.style.background = "#4608AD";
    //         e.target.style.boxShadow = "none";
    //         e.target.style.transform = "translateY(0)";
    //     }, 3000);
    // });


    let imgs = document.querySelectorAll('img');
    imgs.forEach(function(e) {
        e.classList.add("transform");
        setTimeout(() => {
            e.classList.remove("transform");
        },3000);
    });
    
    switch (Math.floor(Math.random() * 2)) {
        case 0:
            value = "heads";
            img = "head.png";
            break;
        case 1:
            value = "tails";
            img = "tail.png";
            break;
        default:
            break;
    }
    console.log(value);
    imgs[0].setAttribute('src',img);
    let userValue = e.target.innerText.toLowerCase();
    console.log(userValue);
    if(userValue=="heads"){
        imgs[1].setAttribute('src', 'head.png');
    } else {
        imgs[1].setAttribute('src', 'tail.png');
    };
    let scoreOutput = document.querySelectorAll('h4');
    if ( value== userValue ) {
    document.querySelector('h3').innerHTML = "<b>User Wins</b>";
    userScore += 1;
    
        scoreOutput[1].innerHTML = `User: ${userScore}`;
    } else { 
        document.querySelector('h3').innerHTML = "<b>Computer Wins</b>";
        compScore +=1;
        scoreOutput[0].innerHTML = `Computer: ${compScore}`;
       
    }


    
}

