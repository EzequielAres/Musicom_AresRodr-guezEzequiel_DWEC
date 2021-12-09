/*
CARRUSEL
*/


/* ESTAS FUNCIONES COMPARAN PRIMERO EL TIPO DE ELEMENTO QUE
    VAMOS A CAMBIAR, UNA VEZ COMPARADO SELECCIONAMOS EL 
    CONTENEDOR BASE E INSERTAMOS EL ELEMENTO CORRESPONDIENTE
*/

function anterior(tipo) {
    let div = "";

    if (tipo == 'album') {
        div = document.querySelector("#blancoAlbum");
    } else if (tipo == 'playlist') {
        div = document.querySelector("#blancoPlaylist");
    } else if (tipo == 'artista') {
        div = document.querySelector("#blancoArtista");
    }


    let cambio = div.querySelector("figure:last-child");
    div.prepend(cambio);
}

function siguiente(tipo) {
    let div = "";

    if (tipo == 'album') {
        div = document.querySelector("#blancoAlbum");
    } else if (tipo == 'playlist') {
        div = document.querySelector("#blancoPlaylist");
    } else if (tipo == 'artista') {
        div = document.querySelector("#blancoArtista");
    }

    let cambio = div.querySelector("figure");
    div.append(cambio);
}