/*
NO ESTÁ TERMINADO, LO TERMINARÉ PARA LA PRÓXIMA ENTREGA
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