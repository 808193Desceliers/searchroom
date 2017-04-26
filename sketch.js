
// canvas 2 variables
//key
var keys; 
var moveKeyStartX;
var moveKeyStartY;
var moveKeyEndX;
var moveKeyEndY;
var keyLocation;


var canvasNum;
var room;

//fishtank
var fish;
var movedreamStartX;
var movedreamStartY;
var movedreamMiddleX; 
var movedreamMiddleY;
var movedreamEndX;
var movedreamEndY;
var dreamLocation;  

//chem
var clock;
var moveclockStartX;
var moveclockStartY;
var moveclockEndX;
var moveclockEndY;
var clockLocation;

var toys; 
var table;

function preload() 
{  
  room = loadImage('https://dl.dropboxusercontent.com/s/2ti2m537e32f9c0/b6810c600aba5c1e_6360-w500-h400-b0-p0--modern-home-office.jpg?dl=0');
  
  keys = loadImage('https://dl.dropboxusercontent.com/s/culgbvgn4mt9a3s/Key-PNG-File.png?dl=0');
    
  bag = loadImage('https://dl.dropboxusercontent.com/s/j2srgj289hds1uz/equipment-microscopes.png?dl=0');
    
  fish = loadImage('https://dl.dropboxusercontent.com/s/6gr76oennbxy1k8/fish.png?dl=0');
    
  clock = loadImage('https://dl.dropboxusercontent.com/s/xd9hdlu43rss6dq/glassware16x7.png?dl=0');
    
  toys = loadImage('https://dl.dropboxusercontent.com/s/4b2a4d0hlwyqmbz/digital-wall-clock-blue.png?dl=0');
    
  puppy = loadImage('https://dl.dropboxusercontent.com/s/udj6r0p3urn0jh4/puppy.png?dl=0');
  
  table = loadImage('https://dl.dropboxusercontent.com/s/yic1hr1ttfzjyhr/table_PNG6976.png?dl=0');
}


function setup()
{
    createCanvas(800,600);
  
    // canvas 1 variables
 

    // marks the location of the key
    // 1 - is original location
    // 2 - key is in transition
    // 3 - key is in user location
    // 4 - key is reset
    keyLocation = 1;
  
    // starting and ending locations of the key
    moveKeyStartX = 400;
    moveKeyStartY = 550;
    moveKeyEndX = 20;
    moveKeyEndY = 460;
  
 dreamLocation = 1;

  // starting and ending locations of the key
  movedreamStartX = 550;
  movedreamStartY = 100;
  movedreamMiddleX = 300 
  movedreamMiddleY = 150
  movedreamEndX = 20;
  movedreamEndY = 340;
  
  clockLocation = 1;

  // starting and ending locations of the key
  moveclockStartX = 450;
  moveclockStartY = 100;
  moveclockEndX = 25;
  moveclockEndY = 525;
  

    // which canvas is in focus by default
    canvas = 3;
}

function draw()
{
      if (canvas == 3)
    {
        canvas3();
    }
   
    paintCanvasButtons();
}

function canvas3()
{
  background(room,0,0);

  itemGrid();
  image(table,100,550,200,200);
  image(bag,100,450,150,150);
  image(toys,250,300,180,50);

  
   // if keyLocation is 1 draw the key in the original locaiton

  if (clockLocation == 1)
  {
    moveclockStartX = 450;
    moveclockStartY = 130;
    image(clock,moveclockStartX,moveclockStartY,60,60);
  }
  else if (clockLocation == 2)
  {
    image(clock,moveclockStartX,moveclockStartY,60,60);

    // move the key from the starting point to the ending point
    if (moveclockStartX > moveclockEndX)
    {
      moveclockStartX = moveclockStartX - 5;
    }
    if (moveclockStartY < moveclockEndY)
    {
      moveclockStartY = moveclockStartY + 5;
    }
    if (!(moveclockStartX > moveclockEndX && moveclockStartY < moveclockEndY))
    {
      clockLocation = 3;
    }
  }
  else if (clockLocation == 3)
  {

    image(clock,moveclockEndX,moveclockEndY,60,60);
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
  
  if (dreamLocation == 1)
  {
    movedreamStartX = 530;
    movedreamStartY = 105
    image(dreamcatcher,movedreamStartX,movedreamStartY,75,80);
  }
  else if (dreamLocation == 2)
  {
    image(dreamcatcher,movedreamStartX,movedreamStartY,75,80);

    if (movedreamStartX > movedreamMiddleX)
    {
      movedreamStartX = movedreamStartX - 3.5;
    }
    if (movedreamStartY < movedreamMiddleY)
    {
      movedreamStartY = movedreamStartY + 1.5;
    }
    if (!(movedreamStartX > movedreamMiddleX && movedreamStartY < movedreamMiddleY))
    {
      dreamLocation = 3;
    }
  }
  else if (dreamLocation == 3)
  {
    image(dreamcatcher,movedreamMiddleX,movedreamMiddleY,205,300);
    movedreamMiddleX = 300;
    movedreamMiddleY = 150;
  }
  else if (dreamLocation == 4)
  {
    image(dreamcatcher,movedreamMiddleX,movedreamMiddleY,205,300);

    // move the key from the starting point to the ending point
    if (movedreamMiddleX > movedreamEndX)
    {
      movedreamMiddleX = movedreamMiddleX - 6;
    }
    if (movedreamMiddleY < movedreamEndY)
    {
      movedreamMiddleY = movedreamMiddleY + 1.5;
    }
    if (!(movedreamMiddleX > movedreamEndX && movedreamMiddleY < movedreamEndY))
    {
      dreamLocation = 5;
    }
  }
  else if (dreamLocation == 5)
  {
  image(dreamcatcher,movedreamEndX,movedreamEndY,75,80);
  }
  
  
  
  if (mouseX > 450 && mouseX < 450+60 && mouseY > 100 && mouseY < 100+60)
  {
    cursor(HAND);
    if (mouseIsPressed == true && clockLocation == 1)
    {
      clockLocation = 2;
    }
  }
  else if (mouseX > 550 && mouseX < 550+65 && mouseY > 111 && mouseY < 111+120)
  {
    cursor(HAND);
    if (mouseIsPressed == true && dreamLocation == 1)
    {
      dreamLocation = 2;
    }
  }
  else if (mouseX > 319 && mouseX < 319+195 && mouseY > 177 && mouseY < 177+360)
  {
    cursor(HAND);
    if (mouseIsPressed == true && dreamLocation == 3)
    {
      dreamLocation = 4;
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

function paintCanvasButtons()
{
   myX = -25;
   myY = -275;
  
   if (canvas == 3)
   {
     strokeWeight(5);
   }
   else
   {
     strokeWeight(1);
   }
   fill(255,255,255);
   rect(myX+30,myY+300,100,50);
   fill(0,0,0);
   text("Canvas 3",myX+50,myY+330);

  
   if (mouseX > myX+290 && mouseX < myX+290+100 && mouseY > myY+300 && mouseY < myY+300+50 && mouseIsPressed)
   {
     canvas = 3;
     keyLocation = 1;
   }

}




