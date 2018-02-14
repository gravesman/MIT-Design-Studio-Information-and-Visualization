var canvas2 = d3.select("#plot2").append("canvas").node();

canvas2.width = document.getElementById("plot2").clientWidth;

canvas2.height = document.getElementById("plot2").clientHeight;


var ctx2 = canvas2.getContext("2d");

var radius = 0.8 * (canvas2.width/2);
var centerX = canvas2.width/2;
var centerY = canvas2.height/2;


// Create gradient
var grd = ctx2.createRadialGradient(centerX,centerY,0,centerX, centerY, radius + 50);
grd.addColorStop(0,"red");
grd.addColorStop(1,"#f5ff00");

function myCircle(){
        
    ctx2.strokeStyle = "#000";
    ctx2.lineWidth = 3;
    
    ctx2.beginPath();
    ctx2.arc(centerX, centerY, radius, 0, 2*Math.PI);
    ctx2.closePath();
    
    ctx2.stroke(); 
    

    // Fill with gradient
    ctx2.fillStyle = grd;
    ctx2.fill();
     

}

function drawHand(width, xTrans, yTrans, color) {
    ctx2.beginPath();
    ctx2.lineWidth = width;
    ctx2.lineCap = "round";
    ctx2.moveTo(centerX,centerY);
    ctx2.lineTo(centerX + xTrans, centerY + yTrans);
    ctx2.strokeStyle = color;
    ctx2.stroke();
}

    //black bakground
    ctx2.strokeStyle = "#000";
    ctx2.lineWidth = 10;
    ctx2.stroke();
    ctx2.fillStyle = "black";
    ctx2.fillRect(0, 0, 414, 736);
    ctx2.fill();

myCircle();
drawHand(15, -50, 100, "#000");  //hour hand

    //black part of clock
    ctx2.strokeStyle = "#000";
    ctx2.lineWidth = 1;
    ctx2.beginPath();
    ctx2.arc(centerX, centerY, radius, 0, 1.5*Math.PI, true);
    ctx2.lineTo(centerX,centerY);
    ctx2.closePath();
    ctx2.stroke();
    ctx2.fillStyle = "#000";
    ctx2.fill();

drawHand(10, 100, -100, grd); //minutes hand
drawHand(5, 150, 0, "#fff");   //seconds hand

    //center circle
    ctx2.strokeStyle = "#000";
    ctx2.lineWidth = 1;
    ctx2.beginPath();
    ctx2.arc(centerX, centerY, 15, 0, 2*Math.PI);
    ctx2.closePath();
    ctx2.stroke();
    ctx2.fillStyle = "#000";
    ctx2.fill();


