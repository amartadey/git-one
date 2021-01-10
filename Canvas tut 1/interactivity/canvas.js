let canvas = document.querySelector('canvas');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let c = canvas.getContext('2d');
// c.fillStyle = "green";
// c.fillRect(100,100,150,150);
// c.fillStyle = "blue";
// c.fillRect(200,300,150,150);
// c.fillStyle = "red";
// c.fillRect(400,100,150,150);


// Line 

// c.beginPath();
// c.moveTo(50,300);
// c.lineTo(300,100);
// c.lineTo(400,300);
// c.strokeStyle = "pink";
// c.stroke();


// Arc or Circle

// c.beginPath();
// c.arc(400,420,100,0,Math.PI*2,false);
// c.strokeStyle = "purple";
// c.stroke();
// c.fillStyle = "maroon";
// c.fill();

// for(i = 0;i<20;i++){
//     var x = Math.random()*window.innerWidth;
//     var y = Math.random()*window.innerHeight;
//     c.beginPath();
//     c.arc(x,y,50, 0, Math.PI * 2, false);
//     c.strokeStyle = `#${Math.random().toString(16).substr(-6)}`;
//     c.stroke();
//     c.fillStyle = `#${Math.random().toString(16).substr(-6)}`;
//     c.fill();
// }

var mouse = {
    x: undefined,
    y:undefined
};
let maxRadius = 40;
let minRadius = 10;
var colorArray = ['#2c3e50',"#e74c3c","#ecf0f1","#3498db","#2980b9"];

window.addEventListener('mousemove',function(e) {
    
    mouse.x = e.x;
    mouse.y = e.y;
    console.log(mouse);
});

window.addEventListener('resize',function(){
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    init();
});

function Circle(x, y, dx, dy, radius) {
    this.x = x;
    this.y = y;
    this.dx = dx;
    this.dy = dy;
    this.radius = radius;
    this.minRadius = radius;
    this.color = colorArray[Math.floor(Math.random() * colorArray.length)];

    this.draw = function () {
        c.beginPath();
        c.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
        c.fillStyle = this.color;
        c.fill();
    }
    this.update = function () {
        if (this.x + this.radius > innerWidth || this.x - this.radius < 0) {
            this.dx = -this.dx;
        }
        if (this.y + this.radius > innerHeight || this.y - this.radius < 0) {
            this.dy = -this.dy;
        }

        this.x += this.dx;
        this.y += this.dy;

        if(mouse.x-this.x < 50 && mouse.x -this.x >-50 && mouse.y -this.y<50 && mouse.y-this.y>-50){
            if(this.radius<maxRadius){
                this.radius +=1;
            }
            
        } else if (this.radius > this.minRadius){
            this.radius -=1;
        }
        this.draw();

    }
}



 var circleArray = [];

function init(){
    circleArray = [];
    for (i = 0; i < 500; i++) {
        let radius = Math.random() * 8 + 1;
        let x = Math.random() * (window.innerWidth - radius * 2) + radius;
        let y = Math.random() * (window.innerHeight - radius * 2) + radius;
        let dx = 5 * (Math.random() - 0.5);
        let dy = 5 * (Math.random() - 0.5);

        circleArray.push(new Circle(x, y, dx, dy, radius));
        // var circle = new Circle(200,200,10,10,30);
    }
    console.log(circleArray);

}
 animate();
function animate() {
    requestAnimationFrame(animate);
    c.clearRect(0, 0, innerWidth, innerHeight);
    for (i = 0; i < circleArray.length; i++) {
        circleArray[i].update();
    }
}

init();

