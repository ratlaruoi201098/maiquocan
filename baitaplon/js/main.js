$(function(){
    $('.ttb1').click(function(){
        var clicked = $('.anh1').click();
        if(clicked){
        	$('.anh1').css('display','block');
        	$('.anh2').css('display','none');
        }
    });
});
$(function(){
    $('.ttb2').click(function(){
        var clicked = $('.anh1').click();
        if(clicked){
        	$('.anh2').css('display','block');
        	$('.anh1').css('display','none');
        }
    });
});

$(document).ready(function() {
	$('.counter').counterUp({
		delay: 10,
		time: 1000
	});
});
