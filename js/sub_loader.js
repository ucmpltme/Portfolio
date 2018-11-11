// Ready
console.log ("Loader In!");



$('.sub_item').hide()
$('.about_item').hide()
$('.work_item').hide()





// Sub

function subShowAni(){

	var dur = 1; 

	TweenMax.set($('#logo'), {x:-100});
	TweenMax.to($('#logo'), dur, {x:0});

	TweenMax.set($('#resume'), {x:100});
	TweenMax.to($('#resume'), dur, {x:0});

    $('#logo').show().stop(true).delay(300)
    .animate({'opacity':1}, 1000)

    $('#resume').show().stop(true).delay(300)
    .animate({'opacity':1}, 1000)

    $('.gnb').show().stop(true).delay(600)
    .animate({'opacity':1}, 2000)

};

subShowAni();





// About

var aboutShowAni = setTimeout(function(){

	var dur = 2; 

	TweenMax.set($('.text_box h1'), {y:100});
	TweenMax.to($('.text_box h1'), dur, {y:0});

	TweenMax.set($('.text'), {y:50});
	TweenMax.to($('.text'), dur, {y:0});

	TweenMax.set($('#color'), {x:100});
	TweenMax.to($('#color'), dur, {x:0});

    $('.image').show().stop(true).delay(700)
    .animate({'opacity':1}, 1500, 'easeInOutCubic')

    $('.text_box').show().stop(true).delay(500)
    .animate({'opacity':1}, 1000)

    $('#color').show().stop(true).delay(700)
    .animate({'opacity':1}, 1000)

}, 300);





// Work

var scrollShowAni = setTimeout(function(){

	var dur = 1; 

	TweenMax.set($('#scroll'), {y:-50});
	TweenMax.to($('#scroll'), dur, {y:0});

    $('#scroll').show().stop(true).delay(100)
    .animate({'opacity':1}, 1000, scrollMov)

}, 1500, 'easeInOutCubic');



var scrollMov = function(){

	TweenMax.to($('#scroll'), 1, {
		bottom:15,
		repeat:-1,
		yoyo:true,
		ease:Sine.easeOut, y:-15,
 		yoyoEase:true
 	})

};



var workShowAni = function(){

    $('.image').show().stop(true).delay(500)
    .animate({'opacity':1}, 700)

};

var textShowAni = setTimeout(function(){

	var dur = 1; 

	TweenMax.set($('.title h1'), {y:25});
	TweenMax.to($('.title h1'), dur, {y:0});

	TweenMax.set($('.num'), {y:25});
	TweenMax.to($('.num'), dur, {y:0});

	TweenMax.set($('.sub_title'), {x:50});
	TweenMax.to($('.sub_title'), dur, {x:0});


    $('.title').show().stop(true).delay(0)
    .animate({'opacity':1}, 1000)

    $('.num').show().stop(true).delay(0)
    .animate({'opacity':1}, 1000)

    $('.sub_title').show().stop(true).delay(300)
    .animate({'opacity':1}, 1000)

    $('.role').show().stop(true).delay(300)
    .animate({'opacity':1}, 1000)

}, 1000);



workShowAni();