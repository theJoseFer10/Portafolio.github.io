try{
	var animation = lottie.loadAnimation({
		container:document.getElementById('lottie-animation4'),
		renderer: 'svg',
		loop: true,
		autoplay: true,
		path: 'Animations/human.json'
	});
} catch (error){
	console.log(error);
}