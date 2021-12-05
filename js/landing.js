/*
NO ESTÁ TERMINADO, LO TERMINARÉ PARA LA PRÓXIMA ENTREGA
*/


function anteriorAlbum() {
    debugger

    let div = document.querySelector("#albumes");
    let objetivo = document.querySelector("#blancoAlbum");
    let cambio = div.querySelector("#albumes>figure:last-child");
    objetivo.prepend(cambio);
}

function siguienteAlbum() {
    debugger

    let div = document.querySelector("#albumes");
    let objetivo = document.querySelector("#albumes>figure:last-child");
    let cambio = div.querySelector("#albumes>figure");
    objetivo.append(cambio);
}