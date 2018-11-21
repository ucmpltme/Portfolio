// Ready
console.log ("Script In!");
console.log (window.innerWidth, window.innerHeight);





// Mouse Positionparallax

$(document).ready(function(){

    var winW = $(window).width();
    var winH = $(window).height();

    $(document).mousemove(function(e){

        var mouseX = e.pageX,
            mouseY = e.pageY;

        var traX = ((4 * mouseX) / 570) + 40,
            traY = ((4 * mouseY) / 570) + 50;

        $('.title_parallax').css({
            "background-position": traX + "%" + traY + "%"
        });
    });

    $('.about .image').mousemove(function(e){

        var mouseX = e.pageX,
            mouseY = e.pageY;

        var traX = ((4 * mouseX) / 570) + 40,
            traY = ((4 * mouseY) / 570) + 50;

        $('.img').css({
            "background-position": traX + "%" + traY + "%"
        });
    });

});







// Main Link

$('.title_wrap').on('mouseover', goSub)
$('.title_wrap').on('mouseout', noSub)



function goSub(){
	//console.log("Go Sub Page");

	$('.main_title').show().stop(true).delay(200)
    .animate({'opacity':0}, 500)

	$('.link_title').show().stop(true).delay(500)
    .animate({'opacity':1}, 1000)
} 

function noSub(){
	//console.log("No Sub Page");

	$('.link_title').show().stop(true).delay(200)
    .animate({'opacity':0}, 500)

	$('.main_title').show().stop(true).delay(500)
    .animate({'opacity':1}, 1000)
} 





// About Image

$('.image').on('mouseover', zoomIn)
$('.image').on('mouseout', zoomOut)

function zoomIn(){
	//console.log("Zoom Image");

	$('.image .img').stop(true).delay(100)
    .animate({
        'width':'120%',
        'height':'110%',
        'marginTop':'-5%',
        'marginLeft':'-10%'
    }, 500)

}

function zoomOut(){
	//console.log("Zoom Image");

	$('.image .img').stop(true).delay(200)
    .animate({
        'width':'100%',
        'height':'100%',
        'marginTop':'0',
        'marginLeft':'0'
    }, 500)
}