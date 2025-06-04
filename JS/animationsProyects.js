const folders = document.querySelectorAll('.icon_folder');

function checkMouse(){
	folders.forEach((folder)=> {
		folder.addEventListener('mouseenter', (event)=> {
			folder.classList.add("animate__animated", "animate__shakeY");
		});
		folder.addEventListener('mouseleave', (event)=> {
			folder.classList.remove("animate__animated", "animate__shakeY");
		});
	});
}

checkMouse();