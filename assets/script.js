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

/*let abcd = document.querySelectorAll(".dots dot_selected");
console.log("Vous avez cliqué sur le bouton gauche");
let currentImageNumberInt = parseInt(currentImageNumber);*/



let fleche_gauche = document.getElementById("fleche_gauche");
fleche_gauche.addEventListener("click", function () 
	{
	let activeDiv = document.querySelectorAll(".dots .dot_selected");
	let currentImageNumberId=activeDiv[0].id
	if (currentImageNumberId>0)
		{
		NewCurrentImageNumberId=currentImageNumberId-1
		}
		else {
		NewCurrentImageNumberId=3
		}
	console.log(NewCurrentImageNumberId)

	let RetirerDotSelected = document.getElementById(currentImageNumberId)
	console.log(RetirerDotSelected)
	RetirerDotSelected.classList.remove("dot_selected")
	let AjoutDotSelected = document.getElementById(NewCurrentImageNumberId)
	AjoutDotSelected.classList.add("dot_selected")
	let ChangementImage = document.getElementById("banner-img")
	console.log(ChangementImage)
	ChangementImage.src = "./assets/images/slideshow/" + slides[NewCurrentImageNumberId].image
	let changementCommentaires = document.querySelector("#paragraphe");
	console.log(changementCommentaires)
	changementCommentaires.textContent = slides[NewCurrentImageNumberId].tagLine
	}
);

let fleche_droite = document.getElementById("fleche_droite");
fleche_droite.addEventListener("click", function () 
{
	let activeDiv = document.querySelectorAll(".dots .dot_selected");
	let currentImageNumberId=activeDiv[0].id
	if (currentImageNumberId>0)
		{
		NewCurrentImageNumberId=currentImageNumberId-1
		}
		else {
		NewCurrentImageNumberId=3
		}
	console.log(NewCurrentImageNumberId)

	let RetirerDotSelected = document.getElementById(currentImageNumberId)
	console.log(RetirerDotSelected)
	RetirerDotSelected.classList.remove("dot_selected")
	let AjoutDotSelected = document.getElementById(NewCurrentImageNumberId)
	AjoutDotSelected.classList.add("dot_selected")
	let ChangementImage = document.getElementById("banner-img")
	console.log(ChangementImage)
	ChangementImage.src = "./assets/images/slideshow/" + slides[NewCurrentImageNumberId].image
	let changementCommentaires = document.querySelector("#paragraphe");
	console.log(changementCommentaires)
	changementCommentaires.textContent = slides[NewCurrentImageNumberId].tagLine
});