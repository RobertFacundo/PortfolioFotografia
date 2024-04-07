document.addEventListener('DOMContentLoaded', function() {
    // Espera a que el DOM esté completamente cargado antes de ejecutar el código.

    const container1 = document.querySelector('.container');
    const container2 = document.querySelector('.container3');
    // Selecciona los contenedores de las imágenes de las secciones con las clases 'container' y 'container3'.

    const fullscreenView = document.querySelector('.fullscreen-view');
    const fullscreenImage = document.querySelector('.fullscreen-image');
    const closeBtn = document.querySelector('.close-btn');
    // Selecciona elementos del DOM que se utilizarán en la funcionalidad de la vista en pantalla completa, como el contenedor, la imagen y el botón de cierre.

    function openFullscreen(imageSrc) {
        // Función para abrir la vista en pantalla completa con la imagen especificada.

        fullscreenImage.src = imageSrc;
        // Establece la fuente de la imagen de la vista en pantalla completa con la URL de la imagen especificada.

        fullscreenView.style.display = 'block';
        // Muestra el contenedor de la vista en pantalla completa estableciendo su estilo 'display' a 'block'.
    }

    function closeFullscreen() {
        // Función para cerrar la vista en pantalla completa.

        fullscreenView.style.display = 'none';
        // Oculta el contenedor de la vista en pantalla completa estableciendo su estilo 'display' a 'none'.
    }

    container1.addEventListener('click', function(event) {
        // Agrega un evento de clic al contenedor de la primera sección.

        if (event.target.tagName === 'IMG') {
            // Verifica si el elemento clicado es una imagen.

            openFullscreen(event.target.src);
            // Si se hace clic en una imagen, abre la vista en pantalla completa con la fuente de la imagen clicada.
        }
    });

    container2.addEventListener('click', function(event) {
        // Agrega un evento de clic al contenedor de la segunda sección.

        if (event.target.tagName === 'IMG') {
            // Verifica si el elemento clicado es una imagen.

            openFullscreen(event.target.src);
            // Si se hace clic en una imagen, abre la vista en pantalla completa con la fuente de la imagen clicada.
        }
    });

    closeBtn.addEventListener('click', function() {
        // Agrega un evento de clic al botón de cierre.

        closeFullscreen();
        // Cuando se hace clic en el botón de cierre, cierra la vista en pantalla completa.
    });

    fullscreenView.addEventListener('click', function(event) {
        // Agrega un evento de clic al contenedor de la vista en pantalla completa.

        if (event.target === fullscreenView) {
            // Verifica si el elemento clicado es el propio contenedor (es decir, se hace clic fuera de la imagen).

            closeFullscreen();
            // Si se hace clic fuera de la imagen, cierra la vista en pantalla completa.
        }
    });
});