var flag_ch1 = null;
var flag_ch2 = null;
//----------------------------------------code for drawing sine wave--------------------------------------------------//
function drawsine1() {
    
    canvas = document.getElementById("mycanvas");
    if (null == canvas || !canvas.getContext)
        return;
    ctx = canvas.getContext("2d");
    // fill canvas
    ctx.fillStyle = "white";
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    flag_ch1=1;
    
    drawGrid(ctx);
    drawAxis();
    sinwv1();
}

function sinwv1() {
    alert('drawsine');
 
}


//----------------------------------------code for drawing square wave--------------------------------------------------//
function drawsquarewv1() {
     canvas = document.getElementById("mycanvas");
     if (null == canvas || !canvas.getContext)
         return;
     ctx = canvas.getContext("2d");
     // fill canvas
     ctx.fillStyle = "white";
     ctx.fillRect(0, 0, canvas.width, canvas.height);

     flag_ch1=2;
      
     drawGrid(ctx);
     drawAxis();
     sqrwv1();
 }
 
 function sqrwv1() {
    alert('drawsquare')
    
 }

 //----------------------------------------code for drawing trianle output--------------------------------------------------//
function drawtraingwv1() {

    canvas = document.getElementById("mycanvas");
    if (null == canvas || !canvas.getContext)
        return;
    ctx = canvas.getContext("2d");
    // fill canvas
    ctx.fillStyle = "white";
    ctx.fillRect(0, 0, canvas.width, canvas.height);
	flag_ch1=3;
    drawGrid(ctx);
    drawAxis();
   triwv1();
  
}

function triwv1() {
    alert('drawtraingle')
  
}

//----------------------------------------code for drawing sine wave--------------------------------------------------//
function drawsine2() {
    
    canvas = document.getElementById("mycanvas");
    if (null == canvas || !canvas.getContext)
        return;
    ctx = canvas.getContext("2d");
    // fill canvas
    ctx.fillStyle = "white";
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    flag_ch2=6;
    
    
    drawGrid(ctx);
    drawAxis();
    sinwv2();
}

function sinwv2() {
    alert('drawsine2');
   
}


//----------------------------------------code for drawing square wave--------------------------------------------------//
function drawsquarewv2() {
     canvas = document.getElementById("mycanvas");
     if (null == canvas || !canvas.getContext)
         return;
     ctx = canvas.getContext("2d");
     // fill canvas
     ctx.fillStyle = "white";
     ctx.fillRect(0, 0, canvas.width, canvas.height);

     flag_ch2=7;
      
     drawGrid(ctx);
     drawAxis();
     sqrwv2();
 }
 
 function sqrwv2() {
    alert('drawsquare2')
 }

 //----------------------------------------code for drawing trianle output--------------------------------------------------//
function drawtraingwv2() {

    canvas = document.getElementById("mycanvas");
    if (null == canvas || !canvas.getContext)
        return;
    ctx = canvas.getContext("2d");
    // fill canvas
    ctx.fillStyle = "white";
    ctx.fillRect(0, 0, canvas.width, canvas.height);
	flag_ch2=8;
    drawGrid(ctx);
    drawAxis();
   triwv2();
     
  
}

function triwv2() {
    alert('drawtraingle2')
}

//----------------------------------------code for drawing sine wave ground --------------------------------------------------//
function bothwvsin() {
    canvas = document.getElementById("mycanvas");
    if (null == canvas || !canvas.getContext)
        return;
    ctx = canvas.getContext("2d");
    // fill canvas
    ctx.fillStyle = "white";
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    drawGrid(ctx);
    drawAxis();
    //flag=5;
    sinesinebth();
}

function sinesinebth(){
    alert('bothsine')
   
}

function bothwvsq() {
    canvas = document.getElementById("mycanvas");
    if (null == canvas || !canvas.getContext)
        return;
    ctx = canvas.getContext("2d");
    // fill canvas
    ctx.fillStyle = "white";
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    drawGrid(ctx);
    drawAxis();
    //flag=11;
    squaresqrbth();
}

function squaresqrbth(){
    alert('bothsq')
    
}

//----------------------------------------code for drawing Triangular wave ground --------------------------------------------------//
function bothwvtri() {
    canvas = document.getElementById("mycanvas");
    if (null == canvas || !canvas.getContext)
        return;
    ctx = canvas.getContext("2d");
    // fill canvas
    ctx.fillStyle = "white";
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    drawGrid(ctx);
    drawAxis();
    //flag=12;
    triangtribth();
}

function triangtribth(){
    alert('bothtrian')
   
}

//----------------------------------------code for drawing sine wave ground --------------------------------------------------//
function bothwvsinsq() {
    canvas = document.getElementById("mycanvas");
    if (null == canvas || !canvas.getContext)
        return;
    ctx = canvas.getContext("2d");
    // fill canvas
    ctx.fillStyle = "white";
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    drawGrid(ctx);
    drawAxis();
    //flag=5;
    sinesqbth();
}

function sinesqbth(){
    alert('bothsinesq')
   
}

//----------------------------------------code for drawing sine wave ground --------------------------------------------------//
function bothwvsintri() {
    canvas = document.getElementById("mycanvas");
    if (null == canvas || !canvas.getContext)
        return;
    ctx = canvas.getContext("2d");
    // fill canvas
    ctx.fillStyle = "white";
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    drawGrid(ctx);
    drawAxis();
    //flag=5;
    sinetribth();
}

function sinetribth(){
    alert('bothsinetri')
   
}