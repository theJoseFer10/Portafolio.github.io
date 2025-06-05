const Height = window.innerHeight;
const info = document.getElementById('about_me');

function checkScrollInfo(){
	const rect = info.getBoundingClientRect();
	if (rect.top <= Height * 0.7){
		info.classList.add("animate__animated", "animate__wobble");
	} else {
		info.classList.remove("animate__animated", "animate__wobble");
	}
}

window-addEventListener('scroll',checkScrollInfo);
checkScrollInfo();