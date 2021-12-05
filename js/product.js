function borrar(element) {
    let elementoBorrar = element.parentNode.parentNode;
    element.parentNode.parentNode.parentNode.removeChild(elementoBorrar);
}

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