document.addEventListener('DOMContentLoaded', () => {
    const header = document.querySelector('.encabezado-principal');
    
    // Esta variable funciona como un "candado"
    let esperandoFotograma = false;

    const evaluarScrollHeader = () => {
        if (window.scrollY > 50) {
            header.classList.add('encabezado-compacto');
        } else {
            header.classList.remove('encabezado-compacto');
        }
        // Una vez que se aplicó el cambio, abrimos el candado
        esperandoFotograma = false;
    };

    window.addEventListener('scroll', () => {
        // Si el candado está abierto, pedimos un nuevo fotograma
        if (!esperandoFotograma) {
            window.requestAnimationFrame(evaluarScrollHeader);
            esperandoFotograma = true; // Cerramos el candado hasta el próximo frame
        }
    });
    
    // Evaluamos al cargar la página por si el usuario actualizó a mitad del contenido
    evaluarScrollHeader();
});