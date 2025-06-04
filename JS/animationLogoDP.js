const logoDP = document.getElementById('Logo');

function checkMouse(){
	logoDP.addEventListener('mouseenter', (event)=>{
		logoDP.classList.add("animate__animated", "animate__bounce");
	})

	logoDP.addEventListener('mouseleave', (event)=>{
		logoDP.classList.remove("animate__animated", "animate__bounce");
	})
}

checkMouse();