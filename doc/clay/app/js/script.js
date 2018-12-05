// 화면 사이즈 확인

console.log (window.innerWidth, window.innerHeight);



// Mouse Pointer
var $cursor = document.querySelector('#cursor');
var $allA = document.querySelectorAll('a');

function mousePointer(e){
    $cursor.style.transform = 'translate(' + e.pageX + 'px, ' + e.pageY + 'px)';
}

window.addEventListener('mousemove', mousePointer);





$(function () {

	// Menu 

	var mouse_dur = 100;

	$("a").on('mouseover', function(){
		//console.log('mouseover');
		$("#cursor").stop().animate({'opacity':'0.75', 'width':'50px', 'height':'50px'}, mouse_dur);
	})

	$("a").on('mouseout', function(){
		//console.log('mouseout');
		$("#cursor").stop().animate({'opacity':'1', 'width':'15px', 'height':'15px'}, mouse_dur);
	})



	// Menu 

	var menu_dur = 500;
	var menu_bar_w = -250;

	$("span#top_right a").on('click', function(e){
		e.preventDefault();
		//console.log("Menu Icon Click");

		$(".menu_wrap").css({'z-index':'10000'});
		$("#menu_dim").stop().animate({'opacity':'0.75'}, menu_dur);
		$("#menu_bar").stop().animate({'right':'0'}, menu_dur);
	});

	$("#sea_menu a").on('click', function(e){
		e.preventDefault();
		//console.log("Menu Icon Click");

		$(".menu_wrap").css({'z-index':'10000'});
		$("#menu_dim").stop().animate({'opacity':'0.75'}, menu_dur);
		$("#menu_bar").stop().animate({'right':'0'}, menu_dur);
	});

	$("span#menu_close a").on('click', function(e){
		e.preventDefault();
		//console.log("Menu Icon Click");

		$("#menu_dim").stop().animate({'opacity':'0'}, menu_dur);
		$("#menu_bar").stop().animate({'right':'-256px'}, menu_dur);
		$(".menu_wrap").stop().animate({'z-index':'1'}, menu_dur);

	});



	// Search 

	$(".btn_search").on('click', function(e){
		e.preventDefault();
		console.log("btn search click");

		$(".sea_wrap").css({'z-index':'100', 'display':'block'});
	})

	$("#ticket").on('click', function(e){
		e.preventDefault();
		console.log("ticket");

		$("#camera").css('display','block');
	})

	$("#sea_out").on('click', function(e){
		e.preventDefault();
		console.log("back");

		$(".sea_wrap").css({'z-index':'0', 'display':'none'});
	})

	$("#camera_out").on('click', function(e){
		e.preventDefault();
		console.log("back");

		$("#camera").css('display','none');
	})




	
});
