let canvas = document.querySelector('canvas');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let c=canvas.getContext('2d');
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



function Circle(x,y,dx,dy,radius){
    this.x = x;
    this.y = y;
    this.dx = dx;
    this.dy = dy;
    this.radius = radius;

    this.draw = function(){
        c.beginPath();
        c.arc(this.x,this.y,this.radius,0,Math.PI*2,false);
        c.strokeStyle = "purple";
        c.stroke();
        c.fillStyle = `pink`
        c.fill();
    }
    this.update = function(){
        if (this.x + this.radius > innerWidth || this.x - this.radius < 0) {
            this.dx = -this.dx;
        }
        if (this.y + this.radius > innerHeight || this.y - this.radius < 0) {
            this.dy = -this.dy;
        }

        this.x += this.dx;
        this.y += this.dy;
        this.draw();

    }
}



var circleArray = [];
for(i = 0;i<100;i++){
    let radius = 30;
    let x = Math.random() * (window.innerWidth-radius*2) + radius;
    let y = Math.random() * (window.innerHeight - radius * 2) + radius;
    let dx = 5 * (Math.random() - 0.5);
    let dy = 5 * (Math.random() - 0.5);
    
    circleArray.push(new Circle(x,y,dx,dy,radius));
    // var circle = new Circle(200,200,10,10,30);
}
console.log(circleArray);



function animate() {
    requestAnimationFrame(animate);
    c.clearRect(0,0,innerWidth,innerHeight);
    for (i = 0; i < circleArray.length; i++) {
        circleArray[i].update(); 
    }
}
animate();
