// Ready
console.log ("Resize In!");


// var oX = parseInt($('#box').data('x'), 10); //string. - number
// var oY = $('#box').data('y');
// var oW = $('#box').data('width');




// Main Resize


function titleSize() {

	//intro
	$('.intro_title').css({
		"fontSize" : $('.wrap').height() / 8,
		"marginTop" : - ($('.intro_title').height() / 2) - 15
	});


	//main
	$('.title_wrap h1').css({
		"marginTop" : - ($('.title_wrap h1').height() / 2) - 15
	});

	$('.title_wrap h1 a').css({
		"fontSize" : $('.wrap').height() / 7
	});


	//controller
	$('.control_title').css({
		"marginTop" : - ($('.control_title').height() / 2)
	});

	$('.control_title h1').css({
		"fontSize" : $('.wrap').height() / 8
	});

	$('.control_title span').css({
		"fontSize" : $('.wrap').height() / 12
	});


	//etc
	$('.mean ul li').css({
		"fontSize" : $('.wrap').height() / 50
	});

	$('.about .text_box h1').css({
		"fontSize" : $('.wrap').height() / 7
	});

	$('.about #color').css({
		"width" : $('.wrap').height() / 1.7,
		"minWidth" : 400
	});

};



function moonSize() {

	var moonLineW = $('.wrap').height() / 1.6;
	var moonW = ($('.wrap').height() / 1.6) * 0.97;

	$('.moon_line').css({
		"width" : moonLineW,
		"height" : moonLineW,
		"marginTop" : - (moonLineW / 2) - 15,
		"marginLeft" : - (moonLineW / 2)
	});

	$('.moon').css({
		"width" : moonW,
		"height" : moonW,
		"marginTop" : - (moonW / 2) - 15,
		"marginLeft" : - (moonW / 2)
	});

	$('.mean').css({
		"marginBottom" : moonLineW / 35 - 15,
		"marginLeft" : moonLineW / 2
	});

	titleSize();

};




// var limitW = 500;
// var limitH = 500;
// var viewW = null;
// var viewH = null;


// $(window).on('resize', function() {

// 	var winW = $(window).width();
// 	if(winW <= limitW){
// 		viewW = limitW;
// 		// $('body').addClass('min');
// 		// body.min #header{position:absolute}
// 	}else{
// 		viewW = winW;
// 	}
// 	// viewW = (winW <= limitW) ? limitW : winW;
// 	var winH = $(window).height();
// 	if(winH <= limitH) {
// 		viewH = limitH;
// 	}else{
// 		viewH = winH;
// 	}


// 	console.log(viewW, viewH);
// 	moonSize();
// 	titleSize();
// }).trigger('resize');



titleSize();
moonSize();