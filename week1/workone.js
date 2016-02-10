var img;
var img2;
var img3;
function preload() {
  img = loadImage("assets/mybrother.jpg");
  img2 = loadImage("assets/nogames.jpg");
  img3 = loadImage 
    
  
}





function setup() {
  image(img, 0, 0);
  image(img, 0, 0, 100, 100);
  image(img, 0, 0, 100, 100, 0, 0, 100, 100);

//function setup(){
    createCanvas(1000,1000);
    
}



function draw(){
background('red')
image(img, 0, 0);
image(img, 0, 0, 100, 100);
image(img, 0, 0, 100, 100, 0, 0, 100, 100);
fill(51);
ellipse(450, 450, 280, 280);

rect(650,20, 220, 280);
image(img2, 0, 0);
image(img2, 0, 0, 100, 100);
image(img2, 0, 0, 100, 100, 0, 0, 100, 100);
//rect(20,20,220,280);
    
rect(650,600,220,280);
    
rect(20,600,220,280);
    
textSize(35);
text("HELLO", 10, 30);
fill(255, 204, 0);
text("WORLD", 10, 60);
fill(0, 102, 153, 51);
text("TODAY", 10, 90);
    
fill(0);
textSize(12);
textFont("Georgia");
text("Georgia", 12, 30);
textFont("Helvetica");
text("Helvetica", 12, 60); 
}