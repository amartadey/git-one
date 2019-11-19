let moveBox= document.querySelector('#move');
let x,y;


window.document.body.addEventListener('mousemove',(e)=>{
    x = e.clientX;
    y = e.clientY;

    let windowWidth = document.body.offsetWidth - 75;
    let windowHeight = document.body.offsetHeight - 75;

    let ps = moveBox.querySelectorAll('p');
    ps[0].innerHTML = "X : "+x;
    ps[1].innerHTML = "Y : "+y;
    console.log(windowHeight+" : "+windowWidth);

});
moveBox.addEventListener('mouseenter', boxMove);


function boxMove(){
    document.addEventListener('mousemove',(e)=>{
        moveBox.style.background = "blue";
        moveBox.style.top = (y-10)+"px";
        moveBox.style.left = (x-10)+"px";
    });
}

let dropBox = document.querySelectorAll('.box');
dropBox.forEach(function(e){
    e.addEventListener('mouseover',()=>{
        e.style.background = "yellow";
    })
})



