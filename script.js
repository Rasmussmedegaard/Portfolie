window.addEventListener("load", sidenVises);
let videos = document.querySelectorAll("video");


function sidenVises() {
	console.log("sidenVises");

	document.querySelector("#burger_knap").addEventListener("click", toggleMenu);
	document.querySelector("#luk").addEventListener("click", toggleMenu);
	document.querySelector("#tilbage").addEventListener("click", goBack);



	videos.forEach(video => {
		video.addEventListener("mouseover", function () {
			console.log("play");
			this.play();

		});
		video.addEventListener("mouseout", function () {
			console.log("pause")
			this.pause();
		});

		video.addEventListener("touchstart", function () {
			console.log("touchplay");
			this.play();
		});



	});


}

function toggleMenu() {

	console.log("toggleMenu");
	document.querySelector("#menu").classList.toggle("hidden");




}

function goBack() {
	console.log("goBack");
	window.history.back();
}
