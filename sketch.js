let randomPerlins =[];
let randomNormals=500;



function setup() {
 // put setup code here
 createCanvas(windowWidth, windowHeight);

 var t = 0;
 for (var i=0; i<1000; i++){
 randomPerlins[i] = noise(t);
 t = t + 0.01;
 }
}
function draw() {
 background(127)

 var w = windowWidth/randomNormals.length;
 strokeWeight(5);
 for (var i=0; i<randomNormals.length-1; i++){
 y1 = map(randomNormals[i],
 min(randomNormals),
 max(randomNormals),
 0,
 windowHeight/2 );
 y2 = map(randomNormals[i+1],
 min(randomNormals),
 max(randomNormals),
 0,
 windowHeight/2 );
 line(i*w,
 windowHeight/2 - y1,
 (i+1)*w,
 windowHeight/2 - y2);
 }

 line(0,
 windowHeight/2,
 windowWidth,
 windowHeight/2);
  
 var w = windowWidth / randomPerlins.length;
 strokeWeight(5);
 for (var i=0; i<randomPerlins.length-1; i++){
 y1 = map(randomPerlins[i],
 min(randomPerlins),
 max(randomPerlins),
 0,
 windowHeight/2 );
 y2 = map(randomPerlins[i+1],
 min(randomPerlins),
 max(randomPerlins),
 0,
 windowHeight/2 );
 line(i*w,
 windowHeight - y1,
 (i+1)*w,
 windowHeight - y2);
 }
}