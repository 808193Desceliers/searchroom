
//key
var keys; 
var moveKeyStartX;
var moveKeyStartY;
var moveKeyEndX;
var moveKeyEndY;
var keyLocation;


var canvas;
var room;
var lock; 
var mute; 

//fishtank
var fish;
var movefishtartX;
var movefishStartY;
var movefishMiddleX; 
var movefishMiddleY;
var movefishEndX;
var movefishEndY;
var fishLocation;  

//chem
var chem;
var movechemStartX;
var movechemStartY;
var movechemEndX;
var movechemEndY;
var chemLocation;



function preload() 
{  
  room = loadImage('https://dl.dropboxusercontent.com/s/2ti2m537e32f9c0/b6810c600aba5c1e_6360-w500-h400-b0-p0--modern-home-office.jpg?dl=0');
  
  keys = loadImage('https://dl.dropboxusercontent.com/s/culgbvgn4mt9a3s/Key-PNG-File.png?dl=0');
    
  bag = loadImage('https://dl.dropboxusercontent.com/s/j2srgj289hds1uz/equipment-microscopes.png?dl=0');
    
  fish = loadImage('https://dl.dropboxusercontent.com/s/6gr76oennbxy1k8/fish.png?dl=0');
    
  chem = loadImage('https://dl.dropboxusercontent.com/s/xd9hdlu43rss6dq/glassware16x7.png?dl=0');
}


function setup()
{
    createCanvas(800,600);
  
    
 

    // marks the location of the key
    keyLocation = 1;
  
    // starting and ending locations of the key
    moveKeyStartX = 400;
    moveKeyStartY = 550;
    moveKeyEndX = 20;
    moveKeyEndY = 460;
  
 fishLocation = 1;

  // starting and ending locations of the key
  movefishStartX = 550;
  movefishStartY = 100;
  movefishMiddleX = 300 
  movefishMiddleY = 150
  movefishEndX = 20;
  movefishEndY = 340;
  
  chemLocation = 1;

  // starting and ending locations of the key
  movechemStartX = 450;
  movechemStartY = 100;
  movechemEndX = 25;
  movechemEndY = 525;
  

    // which canvas is in focus by default
    canvas = 3;
    mute = 1;
    lock = false;
}

function draw()
{
      if (canvas == 3)
  {
    canvas3();
  }
  else if (canvas == 2)
  {
    canvas2();
  }
   
}

function drawCanvasButtons()
{
  
  if (lock == false && mouseX > 139 && mouseX < 200 && mouseY > 455 && mouseY < 592 && mouseIsPressed == true)
  {
    lock = true;
    if (canvas == 3)
    {
      canvas = 2;      
    }
  } 
}

function canvas3()
{
  background(room,0,0);
  drawCanvasButtons();
  itemGrid();
  image(table,100,550,200,200);
  image(bag,100,450,150,150);
  image(toys,250,300,180,50);

  
   // if keyLocation is 1 draw the key in the original locaiton

  if (chemLocation == 1)
  {
    movechemStartX = 450;
    movechemStartY = 130;
    image(chem,movechemStartX,movechemStartY,60,60);
  }
  else if (chemLocation == 2)
  {
    image(chem,movechemStartX,movechemStartY,60,60);

    // move the key from the starting point to the ending point
    if (movechemStartX > movechemEndX)
    {
      movechemStartX = movechemStartX - 5;
    }
    if (movechemStartY < movechemEndY)
    {
      movechemStartY = movechemStartY + 5;
    }
    if (!(movechemStartX > movechemEndX && movechemStartY < movechemEndY))
    {
      chemLocation = 3;
    }
  }
  else if (chemLocation == 3)
  {
    image(chem,movechemEndX,movechemEndY,60,60);
  }  

  
  if (keyLocation == 1)
  {
    moveKeyStartX = 300;
    moveKeyStartY = 540;
    image(keys,moveKeyStartX,moveKeyStartY,70,30);
  }
  else if (keyLocation == 2)
  {
    image(keys,moveKeyStartX,moveKeyStartY,70,30);

    // move the key from the starting point to the ending point
    if (moveKeyStartX > moveKeyEndX)
    {
      moveKeyStartX = moveKeyStartX - 2;
    }
    if (moveKeyStartY < moveKeyEndY)
    {
      moveKeyStartY = moveKeyStartY + 4;
    }
    if (!(moveKeyStartX > moveKeyEndX && moveKeyStartY < moveKeyEndY))
    {
      keyLocation = 3;
    }
  }
  else if (keyLocation == 3)
  {

    image(keys,moveKeyEndX,moveKeyEndY,70,30);
  }
  
  if (fishLocation == 1)
  {
    movefishStartX = 530;
    movefishStartY = 105
    image(fish,movefishStartX,movefishStartY,75,80);
  }
  else if (fishLocation == 2)
  {
    image(fish,movefishStartX,movefishStartY,75,80);

    if (movefishStartX > movefishMiddleX)
    {
      movefishStartX = movefishStartX - 3.5;
    }
    if (movefishStartY < movefishMiddleY)
    {
      movefishStartY = movefishStartY + 1.5;
    }
    if (!(movefishStartX > movefishMiddleX && movefishStartY < movefishMiddleY))
    {
      fishLocation = 3;
    }
  }
  else if (fishLocation == 3)
  {
    image(fish,movefishMiddleX,movefishMiddleY,205,300);
    movefishMiddleX = 300;
    movefishMiddleY = 150;
  }
  else if (fishLocation == 4)
  {
    image(fish,movefishMiddleX,movefishMiddleY,205,300);

    // move the key from the starting point to the ending point
    if (movefishMiddleX > movefishEndX)
    {
      movefishMiddleX = movefishMiddleX - 6;
    }
    if (movefishMiddleY < movefishEndY)
    {
      movefishMiddleY = movefishMiddleY + 1.5;
    }
    if (!(movefishMiddleX > movefishEndX && movefishMiddleY < movefishEndY))
    {
      fishLocation = 5;
    }
  }
  else if (fishLocation == 5)
  {
  image(fish,movefishEndX,movefishEndY,75,80);
  }
  
  
  
  if (mouseX > 450 && mouseX < 450+60 && mouseY > 133 && mouseY < 133+60)
  {
    cursor(HAND);
    if (mouseIsPressed == true && chemLocation == 1)
    {
      chemLocation = 2;
    }
  }
  else if (mouseX > 550 && mouseX < 550+65 && mouseY > 111 && mouseY < 111+120)
  {
    cursor(HAND);
    if (mouseIsPressed == true && fishLocation == 1)
    {
      fishLocation = 2;
    }
  }
  else if (mouseX > 319 && mouseX < 319+195 && mouseY > 177 && mouseY < 177+360)
  {
    cursor(HAND);
    if (mouseIsPressed == true && fishLocation == 3)
    {
      fishLocation = 4;
    }
  }
  else if (mouseX > 300 && mouseX < 300+70 && mouseY > 540 && mouseY < 540+30)
  {
    cursor(HAND);
    if (mouseIsPressed == true && keyLocation == 1)
    {
      keyLocation = 2;
    }
  }
  else
  {
    cursor(ARROW);
  }
  
 if (mouseX > 100 && mouseX < 100+130 && mouseY > 500 && mouseY < 500+80)
  {
    cursor(HAND);
  }
  else if (mouseX > 250 && mouseX < 250+170 && mouseY > 300 && mouseY < 300+68)
  {
    cursor(HAND);
  } 

  fill(255,255,255);
  text("Mouse X "+mouseX,10,330);
  text("Mouse Y "+mouseY,10,390);
}

function itemGrid()
{
  // background for item grid
  fill(50,50,50);
  rect(10,100,90,515-20);
  
  // left most box
  fill(125,125,125);
  rect(20,520,70,70);

  // middle most box
  fill(125,125,125);
  rect(20,520-80,70,70);

  // right most box
  fill(125,125,125);
  rect(20,520-[80*2.45],70,70+30);

}

function canvas2()
{
  background(230,255,255);
}





