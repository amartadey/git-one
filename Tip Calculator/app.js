let input = document.createElement('input');
input.setAttribute('type','number');
document.body.appendChild(input);
input.setAttribute('style','width:300px; height:50px; padding:6px 12px; font-size:18px;  border-radius:50px; border:5px solid #000;outline:none;');
input.addEventListener('focus',(e)=>{
    e.target.style.borderColor = randomColor();
    e.target.value="";
})
input.addEventListener('blur',(e)=>{
    e.target.style.borderColor = "#000";
})

let button = document.createElement('button');
button.setAttribute('type','button');
document.body.appendChild(button);
button.innerText="Calculate Tip";
button.setAttribute('style','height:70px; border-radius:50px; padding:6px 12px; border:none; width:200px; font-family:sans-serif; text-transform:uppercase; font-size:18px; letter-spacing:0.1em; cursor:pointer; outline:none')
button.style.background = randomColor();
button.addEventListener('click',calculateTip);
document.body.addEventListener('keydown',(e)=>{
    if(e.keyCode == 13){
        calculateTip();
    }

})

function calculateTip(){
    let value = input.value;
    let output;
    if (value == ""){
        output ="Sorry, Please enter a valid amount";
    } else {
        output = `Your Tip for ${value} is <b style="color:red">${(value*0.15).toFixed(2)}</b style="color:red">`;
    }
    document.querySelector('h1').innerHTML = output;
}




function randomColor(){
    return "#"+Math.random().toString(16).substr(-6);
    
}