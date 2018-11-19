// Ready
console.log ("Script In!");
console.log (window.innerWidth, window.innerHeight);





// Mouse Positionparallax
var $parallax = document.querySelectorAll('.parallax');
var $parallaxR = document.querySelectorAll('.parallax_r');

var screenW = window.innerWidth;
var screenH = window.innerHeight;

var _paralS = 10;
var _paralL = 35;



function mouseParallax(e){

   for(var i = 0; i < $parallax.length; i++){
        $parallax[i].style.transform ='translate(' + e.pageX/screenW * - _paralL + 'px, ' + e.pageY/screenH * - _paralL + 'px)';
    }

    for(var i = 0; i < $parallaxR.length; i++){
        $parallaxR[i].style.transform ='translate(' + e.pageY/screenH * _paralS + 'px, ' + e.pageX/screenW * _paralS + 'px)';
    }
}

window.addEventListener('mousemove', mouseParallax);





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
    .animate({'width':'120%', 'height':'110%', 'marginTop':'-5%', 'marginLeft':'-10%'}, 500)
}

function zoomOut(){
	//console.log("Zoom Image");

	$('.image .img').stop(true).delay(200)
    .animate({'width':'100%', 'height':'100%', 'marginTop':'0', 'marginLeft':'0'}, 500)
}