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

function slider(name, nextName, prevName){
	//Slider BODAS
	//almacenar slider en una variable
	var slider = $('#'+name);
	//almacenar botones
	var siguiente = $('#'+nextName);
	var anterior = $('#'+prevName);

	//mover ultima imagen al primer lugar
	$('#'+name + 'section:last').insertBefore('#'+name +' section:first');
	//mostrar la primera imagen con un margen de -100%
	slider.css('margin-left', '-'+100+'%');

	function moverD() {
		slider.animate({
			marginLeft:'-'+200+'%'
		} ,700, function(){
			$('#'+name+' section:first').insertAfter('#' +name + ' section:last');
			slider.css('margin-left', '-'+100+'%');
		});
	}

	function moverI() {
		slider.animate({
			marginLeft:0
		} ,700, function(){
			$('#'+name + ' section:last').insertBefore('#' + name + ' section:first');
			slider.css('margin-left', '-'+100+'%');
		});
	}

	function autoplay() {
		interval = setInterval(function(){
			moverD();
		}, 5000);
	}
	siguiente.on('click',function() {
		moverD();
		clearInterval(interval);
		autoplay();
	});

	anterior.on('click',function() {
		moverI();
		clearInterval(interval);
		autoplay();
	});


	autoplay();
}

slider("slider","btn-next","btn-prev")
slider("sliderxv","btn-nextxv","btn-prevxv")