/*
Javascript encargado de cargar asíncronamente las páginas que se encuentran en el header.
*/


/*
Primero le asignamos a los enlaces del header una funcion que se activará al hacer click,
cambiamos la url del navegador por el nombre de la página a la que vamos acceder y llamamos a la función para cargarla.
*/
$(".header__menu > li > a").on("click", function (e) {
    e.preventDefault();
    let url = $(this).attr("href");
    window.history.pushState("object", "url change" , url);
    loadPage(url);
})

/*
Ahora creamos una petición XMLHttp y le pedimos el código html a la página deseada,
si la respuesta es correcta cambiamos el contenido html de la página actual por la nueva.

La sentencia de la línea 35 elimina el background que se encuentra en el index.html para que no cree conflicto con los demás estilos.

Si cargamos las diferentes páginas y cambiamos el modo a oscuro habrá un problema con los estilos ya que realmente está cargando la hoja de estilos
de la anterior página al no actualizarse el navegador.
*/

const loadPage = pageName => {
    let xhttp = new XMLHttpRequest;
    xhttp.open("GET", pageName, true);
    xhttp.send();

    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            let resultado = this.responseText;
            console.log(resultado);

            document.getElementById("main").innerHTML = resultado;
            document.getElementById("cambioCSS").style.background = "none";

        }
    } 
}

/*
Añadimos otra función para cuando el usuario navegue hacia atrás o hacia delante mediante los botones del navegador
se actualize la página a la correspondiente
*/

window.onpopstate = e => {
    loadNextPage(location.pathname);
}

function loadNextPage (nextPage) {
    let str = nextPage;
    let n = str.lastIndexOf("/");
    let result = str.substring(n+1); 
    loadPage(result);
} 