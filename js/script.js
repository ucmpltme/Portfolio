// Ready
console.log ("Script In!");
console.log (window.innerWidth, window.innerHeight);





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