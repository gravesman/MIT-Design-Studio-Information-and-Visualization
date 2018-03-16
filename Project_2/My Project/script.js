//// var url = 'https://api.darksky.net/forecast/c6b293fcd2092b65cfb7313424b2f7ff/42.361145,-71.057083'



$.ajax({
  url: 'https://api.darksky.net/forecast/c63bd23e376113970b4fc4ba50ef034b/42.361145,-71.057083',
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
var canvas2 = d3.select("#plot21").append("canvas").node();
console.log(canvas2);
canvas2.width = 414
//document.getElementById("plot1").clientWidth;

canvas2.height = 368
//document.getElementById("plot1").clientHeight;

var ctx2 = canvas2.getContext("2d");


//plots
var margin1 = {t: 0, r: 40, b: 0, l: 30}; //this is an object
var width1 = 360;//d3.select('#mobile2').node().clientWidth - margin1.r - margin1.l;
var height1 = 280;//(d3.select('#mobile2').node().clientHeight / 4) - margin1.t - margin1.b;

var plot2 = d3.select('#plot2') // if we select a html id #name, if we select a class .name
    .append('svg')
    .attr('width', 414)//width1 + margin1.r + margin1.l)
    .attr('height', 368);//height1 + margin1.t + margin1.b);

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
    ctx.font = "300 90px Helvetica Neue, Helvetica, Sans Serif";
    ctx.fillStyle = "#000";
    ctx.textAlign = "center";
    ctx.fillText("BOSTON",414/2,85, 414);


    //Today

    ctx.font = "200 42px Helvetica Neue, Helvetica, Sans Serif";
    ctx.fillStyle = "#000";
    ctx.textAlign = "center";
    ctx.fillText("Today",414/2,365/scale);

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
    ctx.drawImage(img, 145, 130, 125, 125);
    }


    //Current

    ctx.font = "200 30px Helvetica Neue, Helvetica, Sans Serif";
    ctx.fillStyle = "#000";
    ctx.textAlign = "center";
    ctx.fillText("Current",414/2,735/scale);

    //Current Temp
    ctx.font = "200 30px Helvetica Neue, Helvetica, Sans Serif";
    ctx.fillStyle = "#000";
    ctx.textAlign = "center";
    ctx.fillText(tempCurrently + "°",420/5*4,325);

    var img1 = new Image();
    img1.src = "weatherIcons/" + currentIcon + ".png";
    img1.onload = function () {
    ctx.drawImage(img1, 414/5-37.5, 275, 75, 75);
    }


    //In Four Hours

    ctx.font = "200 30px Helvetica Neue, Helvetica, Sans Serif";
    ctx.fillStyle = "#000";
    ctx.textAlign = "center"
    ctx.fillText("In 4 Hours",414/2,(735+320)/scale);

    //Temp
    ctx.font = "200 30px Helvetica Neue, Helvetica, Sans Serif";
    ctx.fillStyle = "#000";
    ctx.textAlign = "center";
    ctx.fillText(tempInFourHours + "°",420/5*4,325+(320/scale));

    var img2 = new Image();
    img2.src = "weatherIcons/" + inFourHoursIcon + ".png";
    img2.onload = function () {
    ctx.drawImage(img2, 414/5-37.5, 275+(320/scale), 75, 75);
    }


    //In Eight Hours

    ctx.font = "200 30px Helvetica Neue, Helvetica, Sans Serif";
    ctx.fillStyle = "#000";
    ctx.textAlign = "center"
    ctx.fillText("In Eight Hours",414/2,(735+640)/scale);

    //Temp
    ctx.font = "200 30px Helvetica Neue, Helvetica, Sans Serif";
    ctx.fillStyle = "#000";
    ctx.textAlign = "center";
    ctx.fillText(tempInEightHours + "°",420/5*4, 325 +(640/scale));

    var img3 = new Image();
    img3.src = "weatherIcons/" + inEightHoursIcon + ".png";
    img3.onload = function () {
    ctx.drawImage(img3, 414/5-37.5, 275 + (640/scale), 75, 75);
    }


    //In Twelve Hours

    ctx.font = "200 30px Helvetica Neue, Helvetica, Sans Serif";
    ctx.fillStyle = "#000";
    ctx.textAlign = "center"
    ctx.fillText("In Twelve Hours",414/2,(735+960)/scale);

    //Temp
    ctx.font = "200 30px Helvetica Neue, Helvetica, Sans Serif";
    ctx.fillStyle = "#000";
    ctx.textAlign = "center";
    ctx.fillText(tempInTwelveHours + "°",420/5*4,325 + (960/scale));

    var img4 = new Image();
    img4.src = "weatherIcons/" + inTwelveHoursIcon + ".png";
    img4.onload = function () {
    ctx.drawImage(img4, 414/5-37.5, 275 + (960/scale), 75, 75);
    }
    
    
    
    //PLOT 2 ----------------------------------------------------------
    
    //Top Half
    
    //draw the background
    ctx2.stroke();
    ctx2.fillStyle = "#4ECAFF";
    ctx2.fillRect(0, 0, 413, 736/2);
    
    //City
    ctx2.font = "300 90px Helvetica Neue, Helvetica, Sans Serif";
    ctx2.fillStyle = "#000";
    ctx2.textAlign = "center";
    ctx2.fillText("BOSTON",414/2,85, 414);
    
    //Today's Weather
    ctx2.font = "200 30px Helvetica Neue, Helvetica, Sans Serif";
    ctx2.fillStyle = "#000";
    ctx2.textAlign = "center";
    ctx2.fillText("Today's Weather:",414/2,130, 414);
    
    //Today Weather Icon
    var img5 = new Image();
    img5.src = "weather-icons-colored/" + todayIcon + ".png";
    img5.onload = function () {
    ctx2.drawImage(img5, 107, 170, 200, 200);
    
    //Low for today
    ctx2.font = "200 29px Helvetica Neue, Helvetica, Sans Serif";
    ctx2.fillStyle = "#000";
    ctx2.textAlign = "center";
    var array1 = ["Low", todayLow + "°"];
    var x2 = 414/5;
    var y1 = 480/scale;
    for (var i = 0; i < array1.length; i++) {
       ctx2.fillText(array1[i], x2, y1);
       y1 += 29;
    }

    //High for today   
    ctx2.font = "200 29px Helvetica Neue, Helvetica, Sans Serif";
    ctx2.fillStyle = "#000";
    ctx2.textAlign = "center";
    var array2 = ["High", todayHigh + "°"];
    var x3 = 414/5*4;
    y1 = 480/scale;
    for (var i = 0; i < array2.length; i++) {
       ctx2.fillText(array2[i], x3, y1);
       y1 += 29;
    }
        
    //black dividing line
    ctx2.stroke();
    ctx2.fillStyle = "#000";
    ctx2.fillRect(0, 734/2, 413, 4);
        
//        //Current Temp
//        ctx2.font = "200 100px Helvetica Neue, Helvetica, Sans Serif";
//        ctx2.fillStyle = "#000";
//        ctx2.textAlign = "center";
//        ctx2.fillText(tempCurrently + "°",414/2,250);
    }
    
    
//    //Bottom Part
//    
//    //background color
//    ctx2.stroke();
//    ctx2.fillStyle = "#f2f7f8";
//    ctx2.fillRect(0, 734/2, 413, 736/2);
//    
//    
//    //Time axis
//    var date = new Date(data.hourly.data[0].time*1000);
//    // Hours part from the timestamp
//    var hours = date.getHours();
//
//    // Minutes part from the timestamp
////    var minutes = date.getMinutes();
////    if (minutes < 10){
////        minutes = "0" + minutes;
////    }
//    
//
//    
//    var currentTime = hours;
//    if (currentTime > 12) {
//        currentTime = currentTime - 12;
//    }
//
//    
//    var inFourHours = currentTime + 4;
//    if (inFourHours > 12) {
//        inFourHours = inFourHours - 12;
//    }  
//    
//    var inEightHours = inFourHours + 4;
//    if (inEightHours > 12) {
//        inEightHours = inEightHours - 12;
//    }  
//    
//    var inTwelveHours = inEightHours + 4;
//    if (inTwelveHours > 12) {
//        inTwelveHours = inTwelveHours - 12;
//    }
//    
//    
//    //now
//    ctx2.font = "100 30px Helvetica Neue, Helvetica, Sans Serif";
//    ctx2.fillStyle = "#000";
//    ctx2.textAlign = "center";
//    ctx2.fillText("Now",100,403);
//    
//    //in four hours
//    ctx2.font = "100 30px Helvetica Neue, Helvetica, Sans Serif";
//    ctx2.fillStyle = "#000";
//    ctx2.textAlign = "center";
//    ctx2.fillText(inFourHours + ":00",188,403);
//          
//    //in eight hours
//    ctx2.font = "100 30px Helvetica Neue, Helvetica, Sans Serif";
//    ctx2.fillStyle = "#000";
//    ctx2.textAlign = "center";
//    ctx2.fillText(inEightHours + ":00",276,403);
//        
//    //in four hours
//    ctx2.font = " 100 30px Helvetica Neue, Helvetica, Sans Serif";
//    ctx2.fillStyle = "#000";
//    ctx2.textAlign = "center";
//    ctx2.fillText(inTwelveHours + ":00",364,403);
//    
//    
//    //Temp numbers on side
//    
//    //Sort Temps low to high
//    var temps = [tempCurrently, tempInFourHours, tempInEightHours, tempInTwelveHours];
//    temps.sort(function(a, b){return a - b});
//    var tempLow = temps[0];
//    var nextTempLow = temps[1];
//    var nextTempHigh = temps[2];
//    var tempHigh = temps[3];
//    var pixleLow = 670;
//    var pixleHigh = 442;
//    
//    //find pixel height for given temp and given high and low temps and pixles, input temp, output pixel
//    var interpolation = function (tempNumber) {
//        var pixleNumber = pixleLow + (pixleHigh-pixleLow)*((tempNumber-tempLow)/(tempHigh-tempLow));
//        return Math.round(pixleNumber);
//    }
//    
//    //range on y-axis
//    
//    var nextTempHighAxis = tempHigh - Math.round((tempHigh - tempLow)/3);
//    var nextTempLowAxis = tempLow + Math.round((tempHigh - tempLow)/3);
//    
//        console.log(nextTempLowAxis);
//
//    //High Temp
//    ctx2.font = "100 30px Helvetica Neue, Helvetica, Sans Serif";
//    ctx2.fillStyle = "#000";
//    ctx2.textAlign = "center";
//    ctx2.fillText(tempHigh + "°",35,442);
//    //coords
//    var tempHighY = 442;
//    
//    //Next High Temp
//    ctx2.font = "100 30px Helvetica Neue, Helvetica, Sans Serif";
//    ctx2.fillStyle = "#000";
//    ctx2.textAlign = "center";
//    ctx2.fillText(nextTempHighAxis + "°",35,interpolation(nextTempHighAxis));
//    //coords
//    var nextTempHighY = interpolation(nextTempHigh);
//    
//    //Next Low Temp
//    ctx2.font = "100 30px Helvetica Neue, Helvetica, Sans Serif";
//    ctx2.fillStyle = "#000";
//    ctx2.textAlign = "center";
//    ctx2.fillText(nextTempLowAxis + "°",35,interpolation(nextTempLowAxis));
//    //coords
//    var nextTempLowY = interpolation(nextTempLow);
//    
//    //Low Temp
//    ctx2.font = "100 30px Helvetica Neue, Helvetica, Sans Serif";
//    ctx2.fillStyle = "#000";
//    ctx2.textAlign = "center";
//    ctx2.fillText(tempLow + "°",35,670);
//    //coords
//    var tempLowY = 670;
//    
//    
//    //weather Icons
//    
//    //now
//    var img6 = new Image();
//    img6.src = "weather-icons-colored/" + currentIcon + ".png";
//    img6.onload = function () {
//    ctx2.drawImage(img6, 70, 680, 60, 60);
//    }
//    
//    //in four hours
//    var img7 = new Image();
//    img7.src = "weather-icons-colored/" + inFourHoursIcon + ".png";
//    img7.onload = function () {
//    ctx2.drawImage(img7, 158, 680, 60, 60);
//    }
//          
//    //in eight hours
//    var img8 = new Image();
//    img8.src = "weather-icons-colored/" + inEightHoursIcon + ".png";
//    img8.onload = function () {
//    ctx2.drawImage(img8, 246, 680, 60, 60);
//    }
//        
//    //in four hours
//    var img9 = new Image();
//    img9.src = "weather-icons-colored/" + inTwelveHoursIcon + ".png";
//    img9.onload = function () {
//    ctx2.drawImage(img9, 334, 680, 60, 60);
//    }
//    
//    
//    
//    //graphing lines
//    var currentTimeX = 100;
//    var inFourHoursX = 188;
//    var inEightHoursX = 276;
//    var inTwelveHoursX = 364;
//    
//    ctx2.beginPath();
//    ctx2.moveTo(currentTimeX,interpolation(tempCurrently));
//    ctx2.lineTo(inFourHoursX,interpolation(tempInFourHours));
//    ctx2.lineTo(inEightHoursX,interpolation(tempInEightHours));
//    ctx2.lineTo(inTwelveHoursX,interpolation(tempInTwelveHours));
//    ctx2.lineCap = "round";
//    ctx2.lineWidth = 2;
//    ctx2.stroke();
//    
//    //current time line
//    ctx2.beginPath();
//    ctx2.moveTo(100,tempHighY - 25);
//    ctx2.lineTo(100,tempLowY + 10);
//    ctx2.lineCap = "round";
//    ctx2.lineWidth = 2;
//    ctx2.setLineDash([5, 10]);
//    ctx2.stroke();
//    ctx2.strokeStyle = "red"
//    
//    
//    
//    //black dividing line
//    ctx2.stroke();
//    ctx2.fillStyle = "#000";
//    ctx2.fillRect(0, 734/2, 413, 4);
//    

    
    
    
    //PLOT 1 - today's weather
    var todayWeather = data.hourly.data;

    //today's temperature evolution

    // 1 UNDERSTAND THE DATA
    // 1.1 how do you want to show the information? By time (axis X)
    // check the data, transform it into date (is it the correct date???)
    // data is in seconds
    var extentTimeWeather = d3.extent(todayWeather,function(d){
        return new Date (d.time * 1000)
    });

    // data is until wednesday. We only want 24 hours --> filter data
    var todayNow = new Date ().getTime()/1000;
    var tomorrow = new Date ().getTime()/1000 + 12 * 3600;

    var data24h = todayWeather.filter(function(d){
        return d.time >= todayNow && d.time <= tomorrow
    });

    var extentdata24h = d3.extent(data24h,function(d){
        return new Date (d.time * 1000)
    });

    // 1.2 how do you want to show the information? By temperature (axis Y)
    // what are the min and maximum temperatures?
    var extentTodayWeather = d3.extent(data24h,function(d){
        return d.temperature
    });
    
    console.log("hellllll00000000oososj");
    console.log(extentTodayWeather);

    // and the average?
    var meanTodayWeather = d3.mean(data24h,function(d){
        return d.temperature
    });

    // 1.3 create scales to put the data in the dom element
    var scaleX1 = d3.scaleTime().domain(extentdata24h).range([0,width1]);
    var scaleY1 = d3.scaleLinear().domain([extentTodayWeather[0]-1,extentTodayWeather[1]+1]).range([height1,0]);

    // 1.4 create groups to put the content inside them
    plot2.append('g').attr('transform', 'translate(' + margin1.l + ',' + margin1.t + ')').attr('class', 'axis axis-y');
    plot2.append('g').attr('transform', 'translate(' + margin1.l + ',' + (margin1.t+height1) + ')').attr('class', 'axis axis-x');
    plot2.append('g').attr('transform', 'translate(' + margin1.l + ',' + margin1.t + ')').attr('class', 'todayWeather');


    // 1.5 create AXIS
   var formatHours = d3.timeFormat("%H:00");
   var formatDate = d3.timeFormat("%A");

    var axisHourX = d3.axisBottom().scale(scaleX1).ticks().tickFormat(formatHours),
        axisHourY = d3.axisLeft().scale(scaleY1).tickSizeInner(-width1).tickPadding([10]).ticks(5);

    plot2.select(".axis-x").call(axisHourX);
    plot2.select(".axis-y").call(axisHourY);


    //1.5 create graphical form - line
    var lineWeather = d3.line()
        .x(function(d) { return scaleX1(new Date (d.time*1000)); })
        .y(function(d) { return scaleY1(d.temperature); });

    // background
    var areaWeather = d3.area()
        .x(function(d) { return scaleX1(new Date (d.time*1000)); })
        .y1(function(d) { return scaleY1(d.temperature); })
        .y0(function(d) { return scaleY1(extentTodayWeather[0]-1); });
    
    console.log(areaWeather);

    plot2.select('.todayWeather')
        .datum(data24h) //select the data
        .append("path")
        .attr("class", "weatherArea") // this is the same class that we have selected before
        .attr("d",areaWeather);

    plot2.select('.todayWeather')
        .datum(data24h) //select the data
        .append("path")
        .attr("class", "weather") // this is the same class that we have selected before
        .attr("d",lineWeather);

    plot2
        .select('.todayWeather')
        .append("line")
        .attr("class","meanWeather")
        .attr("x1",scaleX1(extentdata24h[0]))
        .attr("x2",scaleX1(extentdata24h[1]))
        .attr("y1",scaleY1(meanTodayWeather))
        .attr("y2",scaleY1(meanTodayWeather));

    var plotDots = plot2.select('.todayWeather')
        .append("g")
        .attr("class","dots");
    //
    // var plotNumbers = plot2.select('.todayWeather')
    //     .append("g")
    //     .attr("class","numbers");

    plotDots
        .selectAll(".weatherDots")
        .data(data24h) //select the data
        .enter()
        .append("circle")
        .attr("class", "weatherDots") // this is the same class that we have selected before
        .attr("cx",function(d) { return scaleX1(new Date (d.time*1000)); })
        .attr("cy",function(d) { return scaleY1(d.temperature); })
        .attr("r",3);
    //
    // plotNumbers
    //     .selectAll(".weatherNumbers")
    //     .data(data24h) //select the data
    //     .enter()
    //     .append("text")
    //     .attr("class", "weatherNumbers") // this is the same class that we have selected before
    //     .text(function(d){return d.temperature})
    //     .attr("x",function(d) { return scaleX1(new Date (d.time*1000)); })
    //     .attr("y",function(d) { return scaleY1(d.temperature); });

    d3.select("#date").html(formatDate(extentdata24h[0]))
    
    
    
    
    
    
}
        
        


//var skycons = new Skycons({"color": "pink"});
//skycons.add("icon1", Skycons.PARTLY_CLOUDY_DAY);
//skycons.play();
//            <canvas id="icon1" width="64" height="64">
//            </canvas>