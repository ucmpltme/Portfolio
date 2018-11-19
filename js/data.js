var weatherApi = 'https://query.yahooapis.com/v1/public/yql?q=select%20item.condition%20from%20weather.forecast%20where%20woeid%20%3D%201132599%20and%20u%3D%22c%22&format=json&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys';

function pad(num, size) {
    var s = num + "";
    while (s.length < size) s = "0" + s;
    return s;
}



function dateTime(){
    
    var $api = $('#api');

    var d = new Date();

    var month = pad(d.getMonth() + 1, 2);
    var date = pad(d.getDate(), 2);
    console.log("Month = " + month, "Date = " + date);

    var weekday = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    var weekIndex = d.getDay();
    var day = weekday[weekIndex];
    console.log();
    console.log("weekIndex = " + weekIndex, "Day = " + day);

    var hours = d.getHours();
    var minutes = d.getMinutes();
    console.log("Hours = " + hours, "Minutes = " + minutes);

    var timeString = pad(hours, 2) + ':' + pad(minutes, 2) ;
    console.log(timeString);



    var html = '';

    html += '<li>' + month + '.' + date + ' ' + day + '</li>';

    if(hours >= 00 && hours < 12){
        html += '<li>' + timeString + ' AM </li>';
    }else {
        html += '<li>' + timeString + ' PM </li>';
    }

    $api.append(html);



    var $thisMoon = $('.moon img');
    var $mainMean = $('.mean li');
    var $controlTime = $('.controller .time li');

    if(hours >= 12 && hours < 16){
        //12 - 15 // new moon
        $thisMoon.attr("src","img/moon_01.png");

        $mainMean.removeClass('select');
        $mainMean.eq(0).addClass('select');

        $controlTime.removeClass('select');
        $controlTime.eq(0).addClass('select');
        $controlTime.eq(0).children('a').append(' PM');

    } else if(hours >= 16 && hours < 20){
        //16 - 19 // half moon
        $thisMoon.attr("src","img/moon_02.png");

        $mainMean.removeClass('select');
        $mainMean.eq(1).addClass('select');

        $controlTime.removeClass('select');
        $controlTime.eq(1).addClass('select');
        $controlTime.eq(1).children('a').append('PM');

    } else if((hours >= 20 && hours <= 24) || (hours >= 0 && hours < 4)){
        //20 -24, 0 - 3 // full moon
        $thisMoon.attr("src","img/moon_03.png");

        $mainMean.removeClass('select');
        $mainMean.eq(2).addClass('select');

        $controlTime.removeClass('select');
        $controlTime.eq(2).addClass('select');
        $controlTime.eq(2).children('a').append('PM');

    } else if(hours >= 4 && hours < 8){
        //4 - 8 // half moon
        $thisMoon.attr("src","img/moon_02.png");

        $mainMean.removeClass('select');
        $mainMean.eq(1).addClass('select');

        $controlTime.removeClass('select');
        $controlTime.eq(3).addClass('select');
        $controlTime.eq(3).children('a').append('AM');

    } else{
        //8 - 11 // new moon
        $thisMoon.attr("src","img/moon_01.png");

        $mainMean.removeClass('select');
        $mainMean.eq(0).addClass('select');

        $controlTime.removeClass('select');
        $controlTime.eq(4).addClass('select');
        $controlTime.eq(4).children('a').append('AM');
    }
}

dateTime();





(function($){
$(document).ready(function() {

    var $api = $('#api');

    $.ajax({
        url : weatherApi,
        dataType : 'json',

        success : function(response){
            console.log(response);

            var results = response['query']['results'];
            var condition = results['channel']['item']['condition'];

            var html = '';

            console.log(condition); 
            //{code: "26", date: "Thu, 15 Nov 2018 02:00 PM KST", temp: "58", text: "Cloudy"}

            var temp = condition['temp'],
                text = condition['text'],
                code = condition['code'];

            console.log("Temp = " + temp);   
            console.log("code = " + code, "Text = " + text);   



            //https://developer.yahoo.com/weather/documentation.html

            var $controlW = $('.controller .weather li')

            if((code >= 0 && code <= 2) || (code >= 19 && code <= 30) || code == 44 ){
                text = "Cloudy";

                $controlW.removeClass('select');
                $controlW.eq(1).addClass('select');

            } else if((code >= 3 && code <= 4) || (code >= 8 && code <= 12) || code == 35 || (code >= 37 && code <= 40) || (code >= 45 && code <= 47)){
                text = "Rain";

                $controlW.removeClass('select');
                $controlW.eq(2).addClass('select');

            } else if((code >= 5 && code <= 7) || (code >= 13 && code <= 18) || (code >= 41 && code <= 43)){
                text = "Snow";

                $controlW.removeClass('select');
                $controlW.eq(3).addClass('select');

            } else if( code == 3200 ){
                //not available
                text = "-";

            } else{
                //default
                text = "Clear";

                $controlW.removeClass('select');
                $controlW.eq(0).addClass('select');

            }



            html += '<li>' + temp + '℃</li>';
            html += '<li>' + text.toUpperCase() + '</li>';

            $api.append(html);
        },

        error : function(error){
        }
    })

});
})(jQuery);