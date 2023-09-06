const slides = [
	{
		"image":"slide1.jpg",
		"tagLine":"Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		"image":"slide2.jpg",
		"tagLine":"Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"image":"slide3.jpg",
		"tagLine":"Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image":"slide4.png",
		"tagLine":"Autocollants <span>avec découpe laser sur mesure</span>"
	}
]

let fleche_gauche = document.getElementById("fleche_gauche");
fleche_gauche.addEventListener("click", function () 
{
console.log("Vous avez cliqué sur le bouton gauche")
});

let fleche_droite = document.getElementById("fleche_droite");
fleche_droite.addEventListener("click", function () 
{
console.log("Vous avez cliqué sur le bouton droit")
console.log(slides)
});