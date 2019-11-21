let canvas = document.querySelector('canvas');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let c=canvas.getContext('2d');
c.fillStyle = "green";
c.fillRect(100,100,150,150);
c.fillStyle = "blue";
c.fillRect(200,300,150,150);
c.fillStyle = "red";
c.fillRect(400,100,150,150);


// Line 

c.beginPath();
c.moveTo(50,300);
c.lineTo(300,100);
c.lineTo(400,300);
c.strokeStyle = "pink";
c.stroke();


// Arc or Circle

// c.beginPath();
// c.arc(400,420,100,0,Math.PI*2,false);
// c.strokeStyle = "purple";
// c.stroke();
// c.fillStyle = "maroon";
// c.fill();

for(i = 0;i<20;i++){
    var x = Math.random()*window.innerWidth;
    var y = Math.random()*window.innerHeight;
    c.beginPath();
    c.arc(x,y,50, 0, Math.PI * 2, false);
    c.strokeStyle = `#${Math.random().toString(16).substr(-6)}`;
    c.stroke();
    c.fillStyle = `#${Math.random().toString(16).substr(-6)}`;
    c.fill();
}