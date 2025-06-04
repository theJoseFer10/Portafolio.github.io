document.querySelectorAll('.content-proyect').forEach(item => {
    item.addEventListener('click', () => {
        window.location.href = item.getAttribute('data-link');
    });
});