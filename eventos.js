document.getElementById('contenedor').addEventListener('click', function() {
    alert('Hola! Soy el div');
});


document.getElementById('miBoton').addEventListener('click', function(event) {
    event.stopPropagation();
    alert('¡Botón clickeado!');
});
