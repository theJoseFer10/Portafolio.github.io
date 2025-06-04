try{
	var animation = lottie.loadAnimation({
		container:document.getElementById('lottie-animation2'),
		renderer: 'svg',
		loop: true,
		autoplay: true,
		path: 'Animations/programing_tec.json'
	});
} catch (error){
	console.log(error);
}