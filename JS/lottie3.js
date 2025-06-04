try{
	var animation = lottie.loadAnimation({
		container:document.getElementById('lottie-animation3'),
		renderer: 'svg',
		loop: true,
		autoplay: true,
		path: 'Animations/skills_animation.json'
	});
} catch (error){
	console.log(error);
}