$(function()
{ 
    if( $('.mask1 span').text() <= 50 ){ 
        $('.circle_right1').css('transform','rotate('+($('.mask1 span').text()*3.6)+'deg)');
     }
     else{
          $('.circle_right1').css({ 'transform':'rotate(0deg)', "background":"#4d7683" }); 
          $('.circle_left1').css('transform','rotate('+(($('.mask1 span').text()-50)*3.6)+'deg)'); 
    }


    if( $('.mask2 span').text() <= 50 ){ 
        $('.circle_right2').css('transform','rotate('+($('.mask2 span').text()*3.6)+'deg)');
     }
     else{
          $('.circle_right2').css({ 'transform':'rotate(0deg)', "background":"#4d7683" }); 
          $('.circle_left2').css('transform','rotate('+(($('.mask2 span').text()-50)*3.6)+'deg)'); 
    }

    if( $('.mask3 span').text() <= 50 ){ 
        $('.circle_right3').css('transform','rotate('+($('.mask3 span').text()*3.6)+'deg)');
     }
     else{
          $('.circle_right3').css({ 'transform':'rotate(0deg)', "background":"#4d7683" }); 
          $('.circle_left3').css('transform','rotate('+(($('.mask3 span').text()-50)*3.6)+'deg)'); 
    }

    if( $('.mask4 span').text() <= 50 ){ 
        $('.circle_right4').css('transform','rotate('+($('.mask4 span').text()*3.6)+'deg)');
     }
     else{
          $('.circle_right4').css({ 'transform':'rotate(0deg)', "background":"#4d7683" }); 
          $('.circle_left4').css('transform','rotate('+(($('.mask4 span').text()-50)*3.6)+'deg)'); 
    }
})