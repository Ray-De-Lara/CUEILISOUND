$("#sec1").bind('DOMMouseScroll',function(e){
    if(e.originalEvent.detail > 0) {
        //scroll down
        $('html, body').animate({
            scrollTop: $("#sec2").offset().top
        }, 500);
    }

})

$("#sec2").bind('DOMMouseScroll',function(e){
    if(e.originalEvent.detail > 0) {
        //scroll down
        $('html, body').animate({
            scrollTop: $("#sec3").offset().top
        }, 500);

    }else {
        //scroll up
        $('html, body').animate({
            scrollTop: $(`#sec1`).offset().top
        }, 500);
    }

})
$("#sec3").bind('DOMMouseScroll',function(e){
    if(e.originalEvent.detail > 0) {
        //scroll down

    }else {
        //scroll up
    $('html, body').animate({
        scrollTop: $("#sec2").offset().top
    }, 500);
    }


})
