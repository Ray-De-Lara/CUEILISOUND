var wrapper =$(".packet");

const datos =[
    {
        precio : "3,000",
		content : [
			"2 Satelitales",
			"1 Subwoofer",
			"3 Microfonos"
		],
		moreContent : [
			"6 Par RGBW",
			"1 Camara de Humo"
		],
		link : "Link"

    },
	{
        precio : "3,500",
		content : [
			"2 Satelitales",
			"1 Subwoofer",
			"3 Microfonos"
		],
		moreContent : [
			"6 Par RGBW",
			"1 Camara de Humo"
		],
		link : "Link"

    },
	{
        precio : "4,200",
		content : [
			"2 Satelitales",
			"1 Subwoofer",
			"3 Microfonos"
		],
		moreContent : [
			"6 Par RGBW",
			"1 Camara de Humo"
		],
		link : "Link"

    },
	{
        precio : "4,800",
		content : [
			"2 Satelitales",
			"1 Subwoofer",
			"3 Microfonos"
		],
		moreContent : [
			"6 Par RGBW",
			"1 Camara de Humo"
		],
		link : "Link"

    },
	{
        precio : "6,500",
		content : [
			"2 Satelitales",
			"1 Subwoofer",
			"3 Microfonos"
		],
		moreContent : [
			"6 Par RGBW",
			"1 Camara de Humo"
		],
		link : "Link"

    },
	{
        precio : "8,500",
		content : [
			"2 Satelitales",
			"1 Subwoofer",
			"3 Microfonos"
		],
		moreContent : [
			"6 Par RGBW",
			"1 Camara de Humo"
		],
		link : "Link"

    },
	{
        precio : "10,500",
		content : [
			"2 Satelitales",
			"1 Subwoofer",
			"3 Microfonos"
		],
		moreContent : [
			"6 Par RGBW",
			"1 Camara de Humo"
		],
		link : "Link"

    },
	{
        precio : "15,000",
		content : [
			"2 Satelitales",
			"1 Subwoofer",
			"3 Microfonos"
		],
		moreContent : [
			"6 Par RGBW",
			"1 Camara de Humo"
		],
		link : "Link"

    }
]
function toggleMenu(){
	var menuToggle = document.querySelector('.toggle');
	var navigation = document.querySelector('.navigation');
	menuToggle.classList.toggle('active');
	navigation.classList.toggle('active');
}


$.map(datos, function(dato){
	console.log(dato);
	wrapper.append('<div class="container"> <div class="price">$'+dato.precio+'</div> <div class="content"> <ul> <li>'+dato.content[0]+'</li> <li>'+dato.content[1]+'</li> <li>'+dato.content[2]+'</li> </ul> </div> <div class="more-content"> <ul> <li>'+dato.moreContent[0]+'</li> <li>'+dato.moreContent[1]+'</li> </ul> </div> <div class="getStarted">Solicitalo</div> </div>'
)})
