//// var url = 'https://api.darksky.net/forecast/c6b293fcd2092b65cfb7313424b2f7ff/42.361145,-71.057083'



$.ajax({
  url: 'https://api.darksky.net/forecast/c6b293fcd2092b65cfb7313424b2f7ff/42.361145,-71.057083',
  dataType: 'JSONP',
  type: 'GET',
  crossDomain: true,
  complete: function (data) {
    if (data.readyState == '4' && data.status == '200') {
        console.log(data.responseJSON)
        draw(data.responseJSON)
    }
      else {
      console.log("DATA FETCH FAILED")
    }
}
})



        
//d3.json("data/boston_weather.json",draw);

//draw canvas 1
var canvas1 = d3.select("#plot1").append("canvas").node();
console.log(canvas1);
canvas1.width = 414
//document.getElementById("plot1").clientWidth;

canvas1.height = 736
//document.getElementById("plot1").clientHeight;

var ctx = canvas1.getContext("2d");


//draw canvas 2
var canvas2 = d3.select("#plot2").append("canvas").node();
console.log(canvas2);
canvas2.width = 414
//document.getElementById("plot1").clientWidth;

canvas2.height = 736
//document.getElementById("plot1").clientHeight;

var ctx2 = canvas2.getContext("2d");



var scale = 2.60869565;



function draw(data){
    var todayLow = Math.round(data.daily.data[0].temperatureLow);
    var todayHigh = Math.round(data.daily.data[0].temperatureHigh);
    var tempCurrently = Math.round(data.hourly.data[0].temperature);
    var tempInFourHours = Math.round(data.hourly.data[4].temperature);
    var tempInEightHours = Math.round(data.hourly.data[8].temperature);
    var tempInTwelveHours = Math.round(data.hourly.data[12].temperature);
    var todayIcon = data.daily.data[0].icon;
    var currentIcon = data.hourly.data[0].icon;
    var inFourHoursIcon = data.hourly.data[4].icon;
    var inEightHoursIcon = data.hourly.data[8].icon;
    var inTwelveHoursIcon = data.hourly.data[12].icon;

    if (currentIcon == "sleet") {
        currentIcon = "snow";
    }
    if (inFourHoursIcon == "sleet") {
        inFourHoursIcon = "snow";
    }
    if (inEightHoursIcon == "sleet") {
        inEightHoursIcon = "snow";
    }
    if (inTwelveHoursIcon == "sleet") {
        inTwelveHoursIcon = "snow";
    }

    console.log(data.daily);
    console.log(data.hourly)


    //draw the 5 rectangles that are the background
    ctx.stroke();
    ctx.fillStyle = "#e0e3e4";
    ctx.fillRect(0, 0, 1080/scale, 640/scale);

    ctx.stroke();
    ctx.fillStyle = "#c1c7c9";
    ctx.fillRect(0, 640/scale, 1080/scale, 320/scale);

    ctx.stroke();
    ctx.fillStyle = "#a2abae";
    ctx.fillRect(0, 960/scale, 1080/scale, 320/scale);

    ctx.stroke();
    ctx.fillStyle = "#839093";
    ctx.fillRect(0, 1280/scale, 1080/scale, 320/scale);

    ctx.stroke();
    ctx.fillStyle = "#647478";
    ctx.fillRect(0, 1600/scale, 1080/scale, 320/scale);


    // Draw the top rectangle info

    //City
    ctx.font = "300 100px Helvetica Neue, Helvetica, Sans Serif";
    ctx.fillStyle = "#000";
    ctx.textAlign = "center";
    ctx.fillText("BOSTON",414/2,85, 414);


    //Today

    ctx.font = "200 42px Helvetica Neue, Helvetica, Sans Serif";
    ctx.fillStyle = "#000";
    ctx.textAlign = "center";
    ctx.fillText("Today",414/2,350/scale);

    //Low for today
    ctx.font = "200 29px Helvetica Neue, Helvetica, Sans Serif";
    ctx.fillStyle = "#000";
    ctx.textAlign = "center";
    var array1 = ["Low", todayLow + "°"];
    var x1 = 414/5;
    var y = 400/scale;
    for (var i = 0; i < array1.length; i++) {
       ctx.fillText(array1[i], x1, y);
       y += 29;
    }

    //High for today   
    ctx.font = "200 29px Helvetica Neue, Helvetica, Sans Serif";
    ctx.fillStyle = "#000";
    ctx.textAlign = "center";
    var array2 = ["High", todayHigh + "°"];
    var x2 = 414/5*4;
    y = 400/scale;
    for (var i = 0; i < array2.length; i++) {
       ctx.fillText(array2[i], x2, y);
       y += 29;
    }

    //Today Weather Icon
    var img = new Image();
    img.src = "weatherIcons/" + todayIcon + ".png";
    img.onload = function () {
    ctx.drawImage(img, 132, 120, 150, 150);
    }


    //Current

    ctx.font = "200 42px Helvetica Neue, Helvetica, Sans Serif";
    ctx.fillStyle = "#000";
    ctx.textAlign = "center";
    ctx.fillText("Current",414/2,735/scale);

    //Current Temp
    ctx.font = "100 69px Helvetica Neue, Helvetica, Sans Serif";
    ctx.fillStyle = "#000";
    ctx.textAlign = "center";
    ctx.fillText(tempCurrently + "°",420/5*4,900/scale);

    var img1 = new Image();
    img1.src = "weatherIcons/" + currentIcon + ".png";
    img1.onload = function () {
    ctx.drawImage(img1, 25, 275, 100, 100);
    }


    //In Four Hours

    ctx.font = "200 42px Helvetica Neue, Helvetica, Sans Serif";
    ctx.fillStyle = "#000";
    ctx.textAlign = "center"
    ctx.fillText("In 4 Hours",414/2,(735+320)/scale);

    //Temp
    ctx.font = "100 69px Helvetica Neue, Helvetica, Sans Serif";
    ctx.fillStyle = "#000";
    ctx.textAlign = "center";
    ctx.fillText(tempInFourHours + "°",420/5*4,(900+320)/scale);

    var img2 = new Image();
    img2.src = "weatherIcons/" + inFourHoursIcon + ".png";
    img2.onload = function () {
    ctx.drawImage(img2, 20, 275+(320/scale), 100, 100);
    }


    //In Eight Hours

    ctx.font = "200 42px Helvetica Neue, Helvetica, Sans Serif";
    ctx.fillStyle = "#000";
    ctx.textAlign = "center"
    ctx.fillText("In Eight Hours",414/2,(735+640)/scale);

    //Temp
    ctx.font = "100 69px Helvetica Neue, Helvetica, Sans Serif";
    ctx.fillStyle = "#000";
    ctx.textAlign = "center";
    ctx.fillText(tempInEightHours + "°",420/5*4,(900+640)/scale);

    var img3 = new Image();
    img3.src = "weatherIcons/" + inEightHoursIcon + ".png";
    img3.onload = function () {
    ctx.drawImage(img3, 20, 275 + (640/scale), 100, 100);
    }


    //In Twelve Hours

    ctx.font = "200 42px Helvetica Neue, Helvetica, Sans Serif";
    ctx.fillStyle = "#000";
    ctx.textAlign = "center"
    ctx.fillText("In Twelve Hours",414/2,(735+960)/scale);

    //Temp
    ctx.font = "100 69px Helvetica Neue, Helvetica, Sans Serif";
    ctx.fillStyle = "#000";
    ctx.textAlign = "center";
    ctx.fillText(tempInTwelveHours + "°",420/5*4,(900+960)/scale);

    var img4 = new Image();
    img4.src = "weatherIcons/" + inTwelveHoursIcon + ".png";
    img4.onload = function () {
    ctx.drawImage(img4, 20, 275 + (960/scale), 100, 100);
    }
    
    
    
    //PLOT 2 ----------------------------------------------------------
    
    //Top Half
    
    //draw the background
    ctx2.stroke();
    ctx2.fillStyle = "#73d3f2";
    ctx2.fillRect(0, 0, 413, 736/2);
    
    //City
    ctx2.font = "300 100px Helvetica Neue, Helvetica, Sans Serif";
    ctx2.fillStyle = "#000";
    ctx2.textAlign = "center";
    ctx2.fillText("BOSTON",414/2,85, 414);
    
    //Today Weather Icon
    var img5 = new Image();
    img5.src = "weather-icons-colored/" + todayIcon + ".png";
    img5.onload = function () {
    ctx2.drawImage(img5, 57, 75, 300, 300);
        
//        //Current Temp
//        ctx2.font = "200 100px Helvetica Neue, Helvetica, Sans Serif";
//        ctx2.fillStyle = "#000";
//        ctx2.textAlign = "center";
//        ctx2.fillText(tempCurrently + "°",414/2,250);
    }
    
    
    //Bottom Part
    
    //background color
    ctx2.stroke();
    ctx2.fillStyle = "#f2f7f8";
    ctx2.fillRect(0, 734/2, 413, 736/2);
    
    
    //Time axis
    var date = new Date(data.hourly.data[0].time*1000);
    // Hours part from the timestamp
    var hours = date.getHours();

    // Minutes part from the timestamp
//    var minutes = date.getMinutes();
//    if (minutes < 10){
//        minutes = "0" + minutes;
//    }
    

    
    var currentTime = hours;
    if (currentTime > 12) {
        currentTime = currentTime - 12;
    }

    
    var inFourHours = currentTime + 4;
    if (inFourHours > 12) {
        inFourHours = inFourHours - 12;
    }  
    
    var inEightHours = inFourHours + 4;
    if (inEightHours > 12) {
        inEightHours = inEightHours - 12;
    }  
    
    var inTwelveHours = inEightHours + 4;
    if (inTwelveHours > 12) {
        inTwelveHours = inTwelveHours - 12;
    }
    
    
    //now
    ctx2.font = "100 30px Helvetica Neue, Helvetica, Sans Serif";
    ctx2.fillStyle = "#000";
    ctx2.textAlign = "center";
    ctx2.fillText("Now",100,403);
    
    //in four hours
    ctx2.font = "100 30px Helvetica Neue, Helvetica, Sans Serif";
    ctx2.fillStyle = "#000";
    ctx2.textAlign = "center";
    ctx2.fillText(inFourHours + ":00",188,403);
          
    //in eight hours
    ctx2.font = "100 30px Helvetica Neue, Helvetica, Sans Serif";
    ctx2.fillStyle = "#000";
    ctx2.textAlign = "center";
    ctx2.fillText(inEightHours + ":00",276,403);
        
    //in four hours
    ctx2.font = " 100 30px Helvetica Neue, Helvetica, Sans Serif";
    ctx2.fillStyle = "#000";
    ctx2.textAlign = "center";
    ctx2.fillText(inTwelveHours + ":00",364,403);
    
    
    //Temp numbers on side
    
    //Sort Temps low to high
    var temps = [tempCurrently, tempInFourHours, tempInEightHours, tempInTwelveHours];
    temps.sort(function(a, b){return a - b});
    var tempLow = temps[0];
    var nextTempLow = temps[1];
    var nextTempHigh = temps[2];
    var tempHigh = temps[3];
    var pixleLow = 670;
    var pixleHigh = 442;
    
    //find pixel height for given temp and given high and low temps and pixles, input temp, output pixel
    var interpolation = function (tempNumber) {
        var pixleNumber = pixleLow + (pixleHigh-pixleLow)*((tempNumber-tempLow)/(tempHigh-tempLow));
        return Math.round(pixleNumber);
    }
    
    //range on y-axis
    
    var nextTempHighAxis = tempHigh - Math.round((tempHigh - tempLow)/3);
    var nextTempLowAxis = tempLow + Math.round((tempHigh - tempLow)/3);
    
        console.log(nextTempLowAxis);

    //High Temp
    ctx2.font = "100 30px Helvetica Neue, Helvetica, Sans Serif";
    ctx2.fillStyle = "#000";
    ctx2.textAlign = "center";
    ctx2.fillText(tempHigh + "°",35,442);
    //coords
    var tempHighY = 442;
    
    //Next High Temp
    ctx2.font = "100 30px Helvetica Neue, Helvetica, Sans Serif";
    ctx2.fillStyle = "#000";
    ctx2.textAlign = "center";
    ctx2.fillText(nextTempHighAxis + "°",35,interpolation(nextTempHighAxis));
    //coords
    var nextTempHighY = interpolation(nextTempHigh);
    
    //Next Low Temp
    ctx2.font = "100 30px Helvetica Neue, Helvetica, Sans Serif";
    ctx2.fillStyle = "#000";
    ctx2.textAlign = "center";
    ctx2.fillText(nextTempLowAxis + "°",35,interpolation(nextTempLowAxis));
    //coords
    var nextTempLowY = interpolation(nextTempLow);
    
    //Low Temp
    ctx2.font = "100 30px Helvetica Neue, Helvetica, Sans Serif";
    ctx2.fillStyle = "#000";
    ctx2.textAlign = "center";
    ctx2.fillText(tempLow + "°",35,670);
    //coords
    var tempLowY = 670;
    
    
    //weather Icons
    
    //now
    var img6 = new Image();
    img6.src = "weather-icons-colored/" + currentIcon + ".png";
    img6.onload = function () {
    ctx2.drawImage(img6, 70, 680, 60, 60);
    }
    
    //in four hours
    var img7 = new Image();
    img7.src = "weather-icons-colored/" + inFourHoursIcon + ".png";
    img7.onload = function () {
    ctx2.drawImage(img7, 158, 680, 60, 60);
    }
          
    //in eight hours
    var img8 = new Image();
    img8.src = "weather-icons-colored/" + inEightHoursIcon + ".png";
    img8.onload = function () {
    ctx2.drawImage(img8, 246, 680, 60, 60);
    }
        
    //in four hours
    var img9 = new Image();
    img9.src = "weather-icons-colored/" + inTwelveHoursIcon + ".png";
    img9.onload = function () {
    ctx2.drawImage(img9, 334, 680, 60, 60);
    }
    
    
    
    //graphing lines
    var currentTimeX = 100;
    var inFourHoursX = 188;
    var inEightHoursX = 276;
    var inTwelveHoursX = 364;
    
    ctx2.beginPath();
    ctx2.moveTo(currentTimeX,interpolation(tempCurrently));
    ctx2.lineTo(inFourHoursX,interpolation(tempInFourHours));
    ctx2.lineTo(inEightHoursX,interpolation(tempInEightHours));
    ctx2.lineTo(inTwelveHoursX,interpolation(tempInTwelveHours));
    ctx2.lineCap = "round";
    ctx2.lineWidth = 2;
    ctx2.stroke();
    
    //current time line
    ctx2.beginPath();
    ctx2.moveTo(100,tempHighY - 25);
    ctx2.lineTo(100,tempLowY + 10);
    ctx2.lineCap = "round";
    ctx2.lineWidth = 2;
    ctx2.setLineDash([5, 10]);
    ctx2.stroke();
    ctx2.strokeStyle = "red"
    
    
    
    //black dividing line
    ctx2.stroke();
    ctx2.fillStyle = "#000";
    ctx2.fillRect(0, 734/2, 413, 4);

}
        
        


//var skycons = new Skycons({"color": "pink"});
//skycons.add("icon1", Skycons.PARTLY_CLOUDY_DAY);
//skycons.play();
//            <canvas id="icon1" width="64" height="64">
//            </canvas>