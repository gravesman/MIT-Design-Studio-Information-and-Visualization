var canvas = document.getElementById("plot1");

canvas.width = document.getElementById("plot1").clientWidth;

canvas.height = document.getElementById("plot1").clientHeight;

var ctx = canvas.getContext("2d");

function wave() {

    // Create gradient
    var grd = ctx.createLinearGradient(0,0,0,550);
    grd.addColorStop(0,"#00bae6");
    grd.addColorStop(.6,"#00ebff");
    

    //draw wave
    ctx.strokeStyle = "#fff";
    ctx.lineWidth = 20;
    ctx.beginPath();
    ctx.moveTo(-10, -10);
    ctx.lineTo(-10, 550);
    ctx.bezierCurveTo(25,525,75,525,100,550);
    ctx.bezierCurveTo(125,575,175,575,200,550);
    ctx.bezierCurveTo(225,525,275,525,300,550);
    ctx.bezierCurveTo(325,575,375,575,400,550);
    ctx.bezierCurveTo(425,525,475,525,500,550);
    ctx.lineTo(500, -10);
    ctx.closePath();
    ctx.stroke(); 

    // Fill with gradient
    ctx.fillStyle = grd;
    ctx.fill();
    
}

function sand(){
   
    // Create gradient
    var grd = ctx.createLinearGradient(0,800,0,550);
    grd.addColorStop(0,"#ead700");
    grd.addColorStop(.75,"#ffff00");

    //draw sand
    ctx.strokeStyle = "#000";
    ctx.lineWidth = 3;
    ctx.beginPath();
    ctx.moveTo(-10, 800);
    ctx.lineTo(-10, 550);
    ctx.bezierCurveTo(25,525,75,525,100,550);
    ctx.bezierCurveTo(125,575,175,575,200,550);
    ctx.bezierCurveTo(225,525,275,525,300,550);
    ctx.bezierCurveTo(325,575,375,575,400,550);
    ctx.bezierCurveTo(425,525,475,525,500,550);
    ctx.lineTo(500, 800);
    ctx.closePath();
    ctx.stroke(); 

    // Fill with gradient
    ctx.fillStyle = grd;
    ctx.fill();
     
}

function time(){
    //get time
    var date = new Date();
    var hour = date.getHours();
    var minutes = date.getMinutes();
    var seconds = date.getSeconds();
    var currentTime = hour + ":" + minutes + ":" + seconds;

    ctx.fillStyle = "blue"
    ctx.font = "80px Arial";
    ctx.textAlign = "center";
    ctx.fillText(currentTime,canvas.width/2, 600);
    
}

sand();
time();
wave();


