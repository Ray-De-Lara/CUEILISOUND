var team =$(".team")

function toggleMenu(){
	var menuToggle = document.querySelector('.toggle');
	var navigation = document.querySelector('.navigation');
	menuToggle.classList.toggle('active');
	navigation.classList.toggle('active');
}

const datos = [
	{
		nombre : "Gabriel Ramirez",
		titulo : "titulo",
		picture : "./media/Gabriel-Ramirez.png",
		estudios : "Ing. Mecatronico",
		correo: "correo@gmail.com",
		displaygithub: "none"
	},
	{
		nombre : "Ruben Ramirez",
		titulo : "titulo",
		picture : "./media/Ruben-Ramirez.png",
		estudios : "Ing. Mecatronico",
		correo: "correo@gmail.com",
		displaygithub: "none"
	},
	{
		nombre : "Rocio Heredia",
		titulo : "titulo",
		picture : "./media/Ruben-Ramirez.png",
		estudios : "Ing. Industrial",
		correo: "correo@gmail.com",
		displaygithub: "none"
	},
	{
		nombre : "Ray De Lara",
		titulo : "titulo",
		picture : "./media/Ray-De-Lara.jpg",
		estudios : "Ing. Mecatronico",
		correo: "raydelara99@gmail.com",
		linkedin:"https://www.linkedin.com/in/ray-de-lara/",
		github: "https://github.com/Ray-De-Lara",
		twitter: "https://twitter.com/Raydelara099",
		displaygithub: "inline-flex",
		displayfacebook: "none"
	},
	{
		nombre : "Daniel Gonzalez",
		titulo : "titulo",
		picture : "./media/Ray-De-Lara.jpg",
		estudios : "Ing. Mecatronico",
		correo: "correo@gmail.com",
		displaygithub: "none"
	},
]

$.map(datos, function(dato){
	// team.append('<div class="person"><span id="triangle"></span><h3 class="hierarchy-level text">'+dato.titulo +'</h3> <div class="picture"><img src="'+dato.picture+'" alt="Integrante Cue Ilisound"></div><p class="name text">'+dato.nombre +'</p><p class="studies text">'+dato.estudios +'</p></div>')
	team.append('<div class="card"> <div class="card-header"> <img src="'+dato.picture+'" alt="Integrante Cue Ilisound" class="profile-img"> </div><div class="card-body"> <p class="name">'+dato.nombre +'</p> <a href="mailto:'+dato.correo+'" class="mail">'+dato.correo +'</a><p class="job">'+dato.estudios +'</p></div><div class="social-links"> <a href="'+dato.github +'" class="fab fa-github social-icon" style="display:'+dato.displaygithub+'"></a> <a href="'+dato.twitter +'" class="fab fa-twitter social-icon" style="display:'+dato.displaytwitter+'"></a> <a href="'+dato.facebook +'" class="fab fa-facebook social-icon" style="display:'+dato.displayfacebook+'"></a> <a href="'+dato.linkedin +'" class="fab fa-linkedin social-icon" style="display:'+dato.displaylinkedin+'"></a> </div> <div class="card-footer"> <a href="'+dato.cv +'"></a> <button class="count"><a href="#">Conoceme</a></button> </div> </div>')
})

datos.map((dato)=>{
 console.log(dato.nombre)
})