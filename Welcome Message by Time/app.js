let button  = document.createElement('button');
button.innerText = "Message";
document.body.appendChild(button);
console.log("test");

button.addEventListener('click',()=>{
    let box = document.createElement('div');
    box.setAttribute('style','padding:10px; background:red; display:inline-block');
    document.body.appendChild(box);
    let h1 = document.createElement('h1');
    h1.innerHTML = "Hello";
    box.appendChild(h1);
    h1.innerHTML = answers()[1];
    box.style.background = answers()[0];

});


function answers(){
    let date = new Date;
    let color,msg;
    if (date.getHours()>=0 && date.getHours()<12){
        color = "green";
        msg = "Good Morning";
    } else if(date.getHours()>=12 && date.getHours()<19){
        color = "blue";
        msg = "Good Evening";
    } else if(date.getHours()>=19 && date.getHours()<24){
        color = "purple"
        msg = "Good Night";
    } else {
        color = "Red";
        msg = "Error";
    }
    return [color, msg];
}