// Work List Slide

var i = 1;

var _cuId = 0;
var _exId = _cuId;

var titleH = $('.work .title h1').height();
var titleList = $('.title li').length;
var imageList = $('.image li').length;



$(window).on("mousewheel",function(e){

    if(e.originalEvent.wheelDelta >= 0) {
        console.log("Scroll Up");

        i--;

        if(i == -1){               
            i = titleList - 2
            $('.title').css({top : - titleH * 2})
            $('.title h1').eq(0).css({opacity : 1})
        } 

        workTitleSlide()

    } else {
        console.log("Scroll Down");
        i++;

        if(i == titleList){               
            i = 2
            $('.title').css({top : - titleH * 1})
            $('.title h1').eq(1).css({opacity : 1})
        } 

        workTitleSlide()
    }

});

function workTitleSlide(){
            
    $('.title').stop(true).animate({
        top : - titleH * i
    }, 1000, 'easeInOutCubic')

    $('.work .title h1').stop(true).animate({
        'opacity':0
    }, 1000)

    $('.work .title h1').eq(i).stop(true).animate({
        'opacity':1
    }, 1000)

    console.log(i);

    workImageSlide(i);
}



function workImageSlide(id){

    _cuId = id - 1;

    if(id == titleList - 1){               
        id = 2;
        $('.image li').eq(imageList - 1).removeClass('fade_in');
        $('.image li').eq(0).addClass('fade_in');
    } 

    $('.image li').eq(_exId).removeClass('fade_in');
    $('.image li').eq(_cuId).addClass('fade_in');

    $('.image_show').css({background : 'url(img/work_' + _exId + '.jpg) no-repeat center center'})
    $('.image_show').css({backgroundSize : 'cover'});

    _exId = _cuId;

    if(_exId == 4){
        _exId = 0;
    } else if(_exId == -1){
        _exId = 2;
    }

}




$('.w_scroll').click(function(e) {
    e.preventDefault();

    i++;

    if(i == titleList){               
        i = 2
        $('.title').css({top : - titleH * 1})
        $('.title h1').eq(1).css({opacity : 1})
    } 

    workTitleSlide()
});

