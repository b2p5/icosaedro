//Icosaedro - basado en beginShape3D
function setup() {
  createCanvas(500, 500, WEBGL);
  ambientMaterial(255);
   
}

let tamano = 0;
let t = tamano + ((1 + (5^0.5))/2)*10; 

let v = tamano + 19.5;
v = 0 + 0.0010; 


 
function draw() {
  background(555);
  rotateY(millis() / 1000);
  rotateX(millis() / 1000);
  fill(255);
  
  strokeWeight(4);
  stroke(255, 155, 0, 0.7);
  
  v += 0.07;
  if(v>19.5){
     v = 19.5;
  }

  //Puntos 015
  beginShape();
  vertex(-v,  t,  0);
  vertex( v,  t,  0);
  vertex( 0,  v,  t);  
  endShape(CLOSE);
  
  //Puntos 159
  beginShape()
  vertex( v,  t,  0);
  vertex( 0,  v,  t);
  vertex( t,  0,  v);
  endShape(CLOSE);
  
  //Puntos 198
  beginShape()
  vertex( v,  t,  0);
  vertex( t,  0,  v);
  vertex( t,  0, -v);
  endShape(CLOSE)
  
  //Puntos 187
  beginShape()
  vertex( v,  t,  0);
  vertex( t,  0, -v);
  vertex( 0,  v, -t);
  endShape(CLOSE)
  
  //Puntos 170
  beginShape()
  vertex( v,  t,  0);
  vertex( 0,  v, -t);
  vertex(-v,  t,  0);
  endShape(CLOSE)
  
  //Puntos 594
  beginShape()
  vertex( 0,  v,  t);
  vertex( t,  0,  v);
  vertex( 0, -v,  t);
  endShape(CLOSE)
  
  //Puntos 394
  beginShape()
  vertex( v, -t,  0);
  vertex( t,  0,  v);
  vertex( 0, -v,  t);
  endShape(CLOSE)
  
  //Puntos 5 4 11
  beginShape()
  vertex( 0,  v, t);
  vertex( 0, -v, t);
  vertex( -t, 0, v);
  endShape(CLOSE)
  
  //Puntos 5 11 0
  beginShape()
  vertex( 0,  v,  t);
  vertex( -t, 0,  v);
  vertex(-v,  t,  0);
  endShape(CLOSE)
  
  //Puntos 0 11 10
  beginShape()
  vertex( -v, t,  0);
  vertex( -t, 0,  v);
  vertex( -t, 0,  -v);
  endShape(CLOSE)
  
  //Puntos 0 10 7
  beginShape()
  vertex(-v,  t,  0);
  vertex( -t, 0, -v);
  vertex( 0,  v, -t);
  endShape(CLOSE)
  
  //Puntos 678
  beginShape()
  vertex( 0 , -v, -t);
  vertex( 0,  v, -t);
  vertex(t, 0, -v);
  endShape(CLOSE)
  
  //Puntos 683
  beginShape()
  vertex( 0 , -v, -t);
  vertex(t, 0, -v);
  vertex(v, -t, 0);
  endShape(CLOSE)
  
  //Puntos 389
  beginShape()
  vertex(v, -t, 0);
  vertex(t, 0, -v);
  vertex( t,  0,  v);
  endShape(CLOSE)
  
  //Puntos 6 7 10
  beginShape()
  vertex( 0 , -v, -t);
  vertex( 0,  v, -t);
  vertex( -t, 0, -v);
  endShape(CLOSE)
  
  //Puntos 342
  beginShape()
  vertex(v, -t, 0);
  vertex( 0,-v, t);
  vertex(-v, -t, 0);
  endShape(CLOSE)
  
  //Puntos 362
  beginShape()
  vertex(v, -t, 0);
  vertex( 0 , -v, -t);
  vertex(-v, -t, 0);
  endShape(CLOSE)
  
  //Puntos 11 4 2
  beginShape()
  vertex( -t, 0, v);
  vertex( 0,-v, t);
  vertex(-v, -t, 0);
  endShape(CLOSE)
  
  //Puntos 10 6 2
  beginShape()
  vertex( -t, 0, -v);
  vertex( 0 , -v, -t);
  vertex(-v, -t, 0);
  endShape(CLOSE)
  
  //puntos 10 11 2
  beginShape()
  vertex( -t, 0, -v);
  vertex( -t, 0, v);
  vertex(-v, -t, 0);
  endShape(CLOSE)
  
  if(v==19.5){
    wait(6000);
  }

  // http://blog.andreaskahler.com/2009/06/creating-icosphere-mesh-in-code.html
}


function wait(time)
{
  start = millis()
  do
  {
    current = millis();
  }
  while(current < start + time)
}
