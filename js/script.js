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


//Slider BODAS
//almacenar slider en una variable
var slider = $('#slider');
//almacenar botones
var siguiente = $('#btn-next');
var anterior = $('#btn-prev');

//mover ultima imagen al primer lugar
$('#slider section:last').insertBefore('#slider section:first');
//mostrar la primera imagen con un margen de -100%
slider.css('margin-left', '-'+100+'%');

function moverD() {
	slider.animate({
		marginLeft:'-'+200+'%'
	} ,700, function(){
		$('#slider section:first').insertAfter('#slider section:last');
		slider.css('margin-left', '-'+100+'%');
	});
}

function moverI() {
	slider.animate({
		marginLeft:0
	} ,700, function(){
		$('#slider section:last').insertBefore('#slider section:first');
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

//Slider XV
//almacenar slider en una variable
var sliderxv = $('#sliderxv');
//almacenar botones
var siguientexv = $('#btn-nextxv');
var anteriorxv = $('#btn-prevxv');

//mover ultima imagen al primer lugar
$('#sliderxv section:last').insertBefore('#sliderxv section:first');
//mostrar la primera imagen con un margen de -100%
sliderxv.css('margin-left', '-'+100+'%');

function moverDxv() {
	sliderxv.animate({
		marginLeft:'-'+200+'%'
	} ,700, function(){
		$('#sliderxv section:first').insertAfter('#sliderxv section:last');
		sliderxv.css('margin-left', '-'+100+'%');
	});
}

function moverIxv() {
	sliderxv.animate({
		marginLeft:0
	} ,700, function(){
		$('#sliderxv section:last').insertBefore('#sliderxv section:first');
		sliderxv.css('margin-left', '-'+100+'%');
	});
}

function autoplayxv() {
	interval = setInterval(function(){
		moverDxv();
	}, 5000);
}
siguientexv.on('click',function() {
	moverDxv();
	clearInterval(interval);
	autoplayxv();
});

anteriorxv.on('click',function() {
	moverIxv();
	clearInterval(interval);
	autoplayxv();
});


autoplayxv();