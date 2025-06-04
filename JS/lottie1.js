try{
    console.log("Antes de cargar la animación.");
    var animation = lottie.loadAnimation({
        container:document.getElementById('lottie-animation1'),
        renderer: 'svg',
        loop: true,
        autoplay: true,
        path: 'Animations/Edu_utf8.json'
    });
    console.log("Despue de cargar la animación.");
    console.log(document.getElementById('lottie-animation1'));
} catch (error) {
    console.log(error);
}