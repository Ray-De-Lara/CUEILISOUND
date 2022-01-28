var team =$(".team")

const datos = [
	{
		nombre : "Gabriel Ramirez",
		titulo : "titulo",
		picture : "./media/Gabriel-Ramirez.png",
		estudios : "Ing. Mecatronico"
	},
	{
		nombre : "Ruben Ramirez",
		titulo : "titulo",
		picture : "./media/Ruben-Ramirez.png",
		estudios : "Ing. Mecatronico"
	},
	{
		nombre : "Rocio Heredia",
		titulo : "titulo",
		picture : "./media/Ruben-Ramirez.png",
		estudios : "Ing. Industrial"
	},
	{
		nombre : "Ray De Lara",
		titulo : "titulo",
		picture : "./media/Ray-De-Lara.jpg",
		estudios : "Ing. Mecatronico"
	},
	{
		nombre : "Daniel Gonzalez",
		titulo : "titulo",
		picture : "./media/Ray-De-Lara.jpg",
		estudios : "Ing. Mecatronico"
	},
]

$.map(datos, function(dato){
	team.append('<div class="person"><h3 class="hierarchy-level text">'+dato.titulo +'</h3> <div class="picture"><img src="'+dato.picture+'" alt="Integrante Cue Ilisound"></div><p class="name text">'+dato.nombre +'</p><p class="studies text">'+dato.estudios +'</p></div>')
	
})

datos.map((dato)=>{
 console.log(dato.nombre)
})