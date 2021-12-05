/*
Esta función permite cambiar la hoja de estilo de la página en la que nos encontramos

    Para ello seleccionamos el link de la hoja de estilo y, dependiendo de la hoja que tenga en ese momento la página, lo cambiamos a modo noche o modo día.

    También, ya que el logo es diferente según el modo en el que nos encontremos, vamos recorriendo todos los logos de la página y lo cambiamos a su modo correspondiente.
*/

function cambiarestilo() {
    let cadena = document.getElementById("estilo");
    cadena = cadena.href.split("/");

    let nombre = cadena[cadena.length-1];
    nombre = nombre.split("-");

    if (nombre.length == 2) {
        cadena[cadena.length-1] = nombre[0] + ".css";
        cadena = cadena.join("/"); 
        document.getElementById("estilo").href = cadena;

        let logos = document.querySelectorAll(".logo");

        for (let i = 0; i < logos.length; i++) {
            cadena = logos[i].src;
            let selector = "#" + logos[i].id;
            cadena = cadena.split("/");
            cadena[cadena.length-1] = "logo.svg";
            cadena = cadena.join("/");
            document.querySelector(selector).src = cadena;
        }
        
    } else {
        let cadena2 = document.getElementById("estilo");
        cadena2 = cadena2.href.split("/");
        nombre = nombre.join("");
        nombre = nombre.split(".");
        cadena2[cadena2.length-1] = nombre[0] + "-noche.css";
        cadena2 = cadena2.join("/"); 
        document.getElementById("estilo").href = cadena2;

        let logos = document.querySelectorAll(".logo");
        
        for (let i = 0; i < logos.length; i++) {
            cadena2 = logos[i].src;
            let selector = "#" + logos[i].id;
            cadena2 = cadena2.split("/");
            cadena2[cadena2.length-1] = "logoNightMode.svg";
            cadena2 = cadena2.join("/");
            document.querySelector(selector).src = cadena2;
        }
    }
}