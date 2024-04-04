var canvas= document.querySelector('canvas');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

var c = canvas.getContext('2d');      
// with help of this we are creating an 2d space where we 
// can make 2d object but not 3d objects like sphere and all.

c.fillStyle = 'blue';
c.stroke();

c.fillRect(100,100,100,100);
c.fillRect(200,200,100,100);
c.fillRect(300,300,100,100);
c.fillRect(400,400,100,100);
c.fillRect(500,500,100,100);
c.fillRect(600,600,100,100);
c.fillRect(700,700,100,100);
c.fillRect(800,800,100,100);

c.fillRect(100,300,100,100);
c.fillRect(100,500,100,100);
c.fillRect(100,700,100,100);
c.fillRect(100,900,100,100);

c.fillRect(300,100,100,100);
c.fillRect(500,100,100,100);
c.fillRect(700,100,100,100);
c.fillRect(900,100,100,100);

c.fillRect(300,300,100,100);
c.fillRect(500,300,100,100);
c.fillRect(700,300,100,100);
c.fillRect(900,300,100,100);

c.fillRect(300,500,100,100);
c.fillRect(500,500,100,100);
c.fillRect(700,500,100,100);
c.fillRect(900,500,100,100);

c.fillRect(300,700,100,100);
c.fillRect(500,700,100,100);
c.fillRect(700,700,100,100);
c.fillRect(900,700,100,100);

c.fillRect(200,200,100,100);
c.fillRect(400,200,100,100);
c.fillRect(600,200,100,100);
c.fillRect(800,200,100,100);

c.fillRect(200,400,100,100);
c.fillRect(400,400,100,100);    
c.fillRect(600,400,100,100);
c.fillRect(800,400,100,100);

c.fillRect(200,600,100,100);
c.fillRect(400,600,100,100);
c.fillRect(600,600,100,100);
c.fillRect(800,600,100,100);

c.fillRect(200,800,100,100);
c.fillRect(400,800,100,100);
c.fillRect(600,800,100,100);
c.fillRect(800,800,100,100);


console.log(canvas);