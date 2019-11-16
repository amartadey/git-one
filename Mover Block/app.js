let moveBox= document.querySelector('#move');
let x,y;


window.document.body.addEventListener('mousemove',(e)=>{
    x = e.clientX;
    y = e.clientY;
    let ps = moveBox.querySelectorAll('p');
    ps[0].innerHTML = "X : "+x;
    ps[1].innerHTML = "Y : "+y;
    // console.log(moveBox.offsetWidth);
    // moveBox.style.top = (y - 10) + "px";
    // moveBox.style.left = (x - 10) + "px";
    
});
moveBox.addEventListener('mouseenter', boxMove);

function boxMove(){
    document.addEventListener('mousemove',(e)=>{
        moveBox.style.background = "blue";
        moveBox.style.top = (y-10)+"px";
        moveBox.style.left = (x-10)+"px";
        
    });
}

