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