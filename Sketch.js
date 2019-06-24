var A
var B
var C
var sol1=0
var sol2=0
var bt
var discr;
var a
var b
 var c

function setup(){
createCanvas(500,500);
frameRate(30);
background(0)
A=createInput();
A.position(90,140)
A.value('1')
A.size(25,22)
B=createInput();
B.position(210,140)
B.value('1')
B.size(25,22)
C=createInput();
C.position(330,140)
C.value('1')
C.size(25,22)
bt=createButton("Solve")
bt.position(225,250)
bt.mousePressed(Solve)
}

function draw(){
background(10)
stroke(47, 120*Math.cos(16*Math.PI*frameCount)+120, 38)
fill(47,120*Math.sin(16*Math.PI*frameCount)+120,38)
textFont('Helvetica')
textSize(30)
text("QuadSolver",width/3,33)
textSize(20)
text("x",114,150)
textSize(10)
text("2",126,135)
textSize(20)
text("+",160,150)
text("x",234,150)
text("+",280,150)
text(sol1,100,400)
text(sol2,400,400)
 a=parseFloat(A.value()) 
 b=parseFloat(B.value())
 c=parseFloat(C.value())

}


function Solve(){

 discr=Math.pow(b,2)-4*a*c

 if(discr==0){sol1=  (Math.sqrt(discr)-b)/(2*a)
sol2=sol1
 }
else if (discr>0){
sol1= Math.round(10000*(Math.sqrt(discr)-b)/(2*a))/10000
sol2=Math.round(10000*(-1*Math.sqrt(discr)-b)/(2*a))/10000
}
else{
sol1="Not"
sol2="Real"
}

}