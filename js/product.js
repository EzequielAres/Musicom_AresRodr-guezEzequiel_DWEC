/*
    Esta función selecciona el padre del botón que hemos pulsado para tener la referencia del contenedor, una vez seleccionado el contenedor que queremos eliminar se lo indicamos al padre.
*/

function borrar(element) {
    let elementoBorrar = element.parentNode.parentNode;
    element.parentNode.parentNode.parentNode.removeChild(elementoBorrar);
}


/*
Esta función nos permite introducir una canción a la lista (obviamente esto no debería ser de esta forma ya que se tendría que comunicar con la API)

Para hacer esto recogemos los valores que hemos introducido en el formulario e introducimos el nuevo contenedor al DOM mediante codigo HTML.

También indicamos que no se recarge la página al "enviar" el formulario para que no se eliminen los cambios.
*/

function añadirCancion(element) {
    event.preventDefault();

    let elementoPadre = document.getElementById("titulo");
    let nombre = document.getElementById("nombre").value;
    let album = document.getElementById("album").value;
    let artista = document.getElementById("artista").value;
    let duracion = document.getElementById("duracion").value;
    let texto = "<div class='main__separador__lista__cancion'>" +
                "<span>" + nombre + "</span>" +
                "<span>" + album + "</span>" +
                "<span>" + artista + "</span>" +
                "<span>" + duracion + "</span>" +
                "<div>" +
                "<button class='main__separador__lista__cancion__iconos'><i class='fas fa-share-alt'></i></button>" + 
                "<button class='main__separador__lista__cancion__iconos'><i class='far fa-heart'></i></button>" + 
                "<button class='main__separador__lista__cancion__iconos' onclick='borrar(this)'><i class='fas fa-trash'></i></button>" + 
                "</div>" +
                "</div>";
    
    elementoPadre.insertAdjacentHTML('afterend', texto);
}