// Esperamos a que el DOM (HTML) esté completamente cargado para evitar errores
document.addEventListener('DOMContentLoaded', () => {
    
    // Seleccionamos la etiqueta header mediante su clase
    const header = document.querySelector('.encabezado-principal');

    // Función que evalúa la posición del scroll
    const evaluarScrollHeader = () => {
        // window.scrollY nos dice cuántos píxeles bajó el usuario
        if (window.scrollY > 50) {
            header.classList.add('encabezado-compacto');
        } else {
            header.classList.remove('encabezado-compacto');
        }
    };

    // Escuchamos el evento 'scroll' del navegador
    window.addEventListener('scroll', evaluarScrollHeader);
    
    // Ejecutamos una vez al cargar por si la página ya inicia con scroll (F5)
    evaluarScrollHeader();
});
