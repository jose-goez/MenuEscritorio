// aquí creamos las variables con los selectores del documento.
var botonAbrir = document.querySelector(".botonAbrir");
var nav = document.querySelector(".nav");
var botonCerrar = document.querySelector(".botonCerrar");

// aquí creamos la función para abrir el menu.
botonAbrir.addEventListener("click", (e) => {
  nav.style.opacity = "1";
  botonAbrir.style.display = "none";
  botonCerrar.style.display = "block";
});

// aquí creamos la función para cerra el menu.
botonCerrar.addEventListener("click", (e) => {
  nav.style.opacity = "0";
  botonCerrar.style.display = "none";
  botonAbrir.style.display = "block";
});

// aquí creamos la función para cerrar el menu, cuando damos click en algún enlace del menu.
nav.addEventListener("click", (e) => {
  nav.style.opacity = "0";
  botonCerrar.style.display = "none";
  botonAbrir.style.display = "block";
});