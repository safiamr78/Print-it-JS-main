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
];

let currentIndex = 0;

const bannerImg = document.querySelector(".banner-img");
const bannerText = document.querySelector("#banner p");

console.log("script chargé");

const arrowLeft = document.querySelector(".arrow_left");
const arrowRight = document.querySelector(".arrow_right");
console.log("flèche", arrowLeft, arrowRight); 

const dotsContainer = document.querySelector(".dots");

slides.forEach(() => {
	const dot = document.createElement("div");
	dot.classList.add("dot");
	dotsContainer.appendChild(dot);
});

dotsContainer.children[0].classList.add("dot_selected");

function updateSlide() {
	bannerImg.src = "./assets/images/slideshow/" + slides[currentIndex].image;
	bannerText.innerHTML = slides[currentIndex].tagLine;

	const allDots = document.querySelectorAll(".dot");
	allDots.forEach(dot => dot.classList.remove("dot_selected"));
	allDots[currentIndex].classList.add("dot_selected");
}

arrowLeft.addEventListener("click", () => {
	currentIndex--;
	if (currentIndex < 0) currentIndex = slides.length - 1;
	updateSlide();
});

arrowRight.addEventListener("click", () => {
	currentIndex++;
	if (currentIndex >= slides.length) currentIndex = 0;
	updateSlide();
});
