// Ready
console.log ("Resize In!");





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





$(window).resize(function() {
	moonSize();
	titleSize();
});



titleSize();
moonSize();