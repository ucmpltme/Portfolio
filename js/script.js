
// ready
console.log("Script Js In!")
console.log (window.innerWidth, window.innerHeight);





// Reload

window.onbeforeunload = function() {
    //console.log("Reload")
    scrollTo(0,0);
};





// Nice Scroll

// var nice = function(){

// 	$('html').getNiceScroll().remove();

// 	if(window.innerWidth < 720){
// 		//console.log("Slow Scroll Stop!")
// 	}else {
// 		//console.log("Slow Scroll Play!")
// 		$('html').niceScroll({
// 			zindex:100000,
// 			scrollspeed:40,
// 			mousescrollstep:40,
// 			cursorcolor:"#5f6245",
// 			cursoropacitymin:0,
// 			cursoropacitymax:1,
// 			cursorwidth:"8px",
// 			cursorminheight:100,
// 			cursorborder:"0px solid #fff",
// 			cursorborderradius:"4px",
// 			background:"none",
// 			hidecursordelay:1000
// 		});
// 	}
// }


// nice();

// $(window).resize(function (){
// 	nice();
// });





// Header Show

var scrollTop = $(window).scrollTop();
//console.log(scrollTop);

$(window).scroll(function(){

	var curTop = $(window).scrollTop();
	//console.log(scrollTop, curTop);

	if(curTop > scrollTop){
		// Scroll Down
		$('header').css('top',-40);
		// $('#hamburger').css('top',-40);
	}else{
		// Scroll Up
		$('header').css('top',20);
		// $('#hamburger').css('top',20);
	}

	scrollTop = curTop;
});





// Menu Show

var menuDur = 800;

$('#hamburger').on("click",function(e) {
	e.preventDefault();
	
    //alert("click");

    $('#menu_wrap').stop().animate({'right': '0'}, menuDur, 'easeInOutQuint');
});

$('#exit').on("click",function(e) {
    //alert("click");
    e.preventDefault();
    $('#menu_wrap').stop().animate({'right': '-100%'}, menuDur, 'easeInOutQuint');
});



$('#menu_wrap').on('scroll touchmove mousewheel', function(e) {
  e.preventDefault();
  e.stopPropagation();
  return false;
});



$('#menu ul#menu_list li').mouseenter(function(){

	//console.log("Mouse Enter");

	$(this).stop().animate({'margin-left': '20px'}, menuDur, 'easeOutBounce');
	$(this).stop().animate({'margin-left': '30px'}, menuDur, 'easeOutBounce');
});

$('#menu ul#menu_list li').mouseleave(function(){

	//console.log("Mouse Leave");

	$(this).stop().animate({'margin-left': '0'}, menuDur, 'easeOutBounce');
	$(this).stop().animate({'margin-left': '0'}, menuDur, 'easeOutBounce');
});