let moveBox= document.querySelector('#move');
let x,y;


window.document.body.addEventListener('mousemove',(e)=>{
    x = e.clientX;
    y = e.clientY;
    let ps = moveBox.querySelectorAll('p');
    ps[0].innerHTML = "X : "+x;
    ps[1].innerHTML = "Y : "+y;
    console.log(moveBox.offsetWidth);
    
});
moveBox.addEventListener('mouseenter', boxMove);

function boxMove(){
    window.document.body.addEventListener('mousemove',(e)=>{
        e.target.style.background = "blue";
        e.target.style.top = (x-50)+"px"
        e.target.style.left = (y-50)+"px"
        
    });
}

