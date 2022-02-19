var wrapper =$(".wrapper");

const datos =[
    {
        precio : 3000,

    }
]
function toggleMenu(){
	var menuToggle = document.querySelector('.toggle');
	var navigation = document.querySelector('.navigation');
	menuToggle.classList.toggle('active');
	navigation.classList.toggle('active');
}


wrapper.append(' <div class="table basic"> <div class="price-section"> <div class="price-area"> <div class="inner-area"> <span class="text">$</span> <span class="price">3000</span> <span class="mxn">MXN</span> </div> </div> </div> <div class="package-name"></div> <ul class="features"> <li> <span class="list-name">2 Satelitales</span> </li> <li> <span class="list-name">1 Subwoofer</span> </li> <li> <span class="list-name">3 Microfonos</span> </li> <li> <span class="list-name">6 Par RGBW</span> </li> <li> <span class="list-name">1 Camara de humo</span> </li> </ul> <div class="btn"><button>Ver mas</button></div> </div>')