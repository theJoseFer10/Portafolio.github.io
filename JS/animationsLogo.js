const logo = document.getElementById('Logo');

console.log("Antes de cargar la animación")

function checkMouse(){
	logo.addEventListener('mouseenter', (event)=>{
		logo.classList.add("animate__animated", "animate__bounce");
		console.log("Se ha cargado la animación.")
	})

	logo.addEventListener('mouseleave', (event)=>{
		logo.classList.remove("animate__animated", "animate__bounce");
		console.log("Se ha descargado la animación.")
	})
}

checkMouse();