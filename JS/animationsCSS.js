const ViewPortHeight = window.innerHeight;
const elements = document.querySelectorAll('.info');

function checkScroll(){
	elements .forEach((elements)=>{
		const rect = elements.getBoundingClientRect();
		if (rect.top <= ViewPortHeight * 0.7){
			elements.classList.add("animate__animated", "animate__backInLeft");
		} else {
			elements.classList.remove("animate__animated", "animate__backInLeft");
		}
	});
}

const imgs = document.querySelectorAll('.lottie-animation');

function checkScrollIMG() {
	imgs .forEach((imgs)=>{
		const rect = imgs.getBoundingClientRect();
		if (rect.top <= ViewPortHeight * 0.7){
			imgs.classList.add("animate__animated", "animate__backInRight");
		} else {
			imgs.classList.remove("animate__animated", "animate__backInRight");
		}
	});
}

window-addEventListener('scroll', checkScroll);
checkScroll();

window-addEventListener('scroll', checkScrollIMG);
checkScrollIMG();