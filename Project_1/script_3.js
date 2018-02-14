var canvas3 = d3.select("#plot3").append("canvas").node();

canvas3.width = document.getElementById("plot3").clientWidth;

canvas3.height = document.getElementById("plot3").clientHeight;

var ctx3 = canvas3.getContext("2d");


function topRed(){
    //draw top red bar
    ctx3.strokeStyle = "#000";
    ctx3.lineWidth = 10;
    ctx3.stroke();
    ctx3.fillStyle = "red";
    ctx3.fillRect(0, 0, 450, 250);
    ctx3.fill();
    
    //hour and minutes
    ctx3.fillStyle = "#fff"
    ctx3.font = "80px Helvetica";
    ctx3.textAlign = "center";
    ctx3.fillText("TWELVE",canvas3.width/2, 175);
    
    ctx3.fillStyle = "#000"
    ctx3.font = "300px Helvetica";
    ctx3.textAlign = "center";
    ctx3.fillText("22",canvas3.width/2, 550);
    
}

function spiral(){
    //top spiral
//    ctx3.strokeStyle = "#000";
//    ctx3.lineWidth = 10;
//    ctx3.beginPath();
//    ctx3.arc(x, 20, 30, 0, 2*Math.PI);
//    ctx3.closePath();
//    ctx3.stroke();
    
    ctx3.strokeStyle = "#393939";
    ctx3.lineWidth = 1;
    ctx3.beginPath();
    ctx3.arc(50, 40, 15, 0, 2*Math.PI);
    ctx3.closePath();
    ctx3.stroke();
    ctx3.fillStyle = "#393939";
    ctx3.fill();
    
    ctx3.strokeStyle = "#393939";
    ctx3.lineWidth = 1;
    ctx3.beginPath();
    ctx3.arc(350, 40, 15, 0, 2*Math.PI);
    ctx3.closePath();
    ctx3.stroke();
    ctx3.fillStyle = "#393939";
    ctx3.fill();
}

topRed();
spiral();
//spiral(10);
//spiral(40);
//spiral(70);
//spiral(100);
//spiral(130);
//spiral(160);
//spiral(190);
//spiral(220);
//spiral(250);
//spiral(280);
//spiral(310);
//spiral(340);
//spiral(370);
//spiral(400);
//spiral(430);