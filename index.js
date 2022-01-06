const irAInicio = document.querySelector("#ir-inicio");
const irAPersonajes = document.querySelector("#ir-personajes");
const irAUbicaciones = document.querySelector("#ir-ubicaciones");
const irAEpisodios = document.querySelector("#ir-episodios");

/*SECCIONES*/

const seccionFija = document.querySelector("#seccion-fija");
const seccionInicio = document.querySelector("#seccion-inicio");
const seccionPersonajes = document.querySelector("#seccion-personajes");
const seccionUbicaciones = document.querySelector("#seccion-ubicaciones");
const seccionEpisodios = document.querySelector("#seccion-episodios");

const mostrarSeccion = (seccion) => {
  if (seccion.classList.contains("no-mostrar")) {
    return seccion.classList.remove("no-mostrar");
  }
};

const esconderSeccion = (seccion) => {
  if (seccion.classList.contains("no-mostrar")) {
    return seccion;
  } else {
    return seccion.classList.add("no-mostrar");
  }
};

irAPersonajes.onclick = () => {
    mostrarSeccion(seccionPersonajes)
    mostrarSeccion(seccionFija)
    esconderSeccion(seccionUbicaciones)
    esconderSeccion(seccionEpisodios)
    esconderSeccion(seccionInicio)
}

irAUbicaciones.onclick = () => {
    mostrarSeccion(seccionUbicaciones)
    mostrarSeccion(seccionFija)
    esconderSeccion(seccionInicio)
    esconderSeccion(seccionPersonajes)
    esconderSeccion(seccionEpisodios)
}

irAEpisodios.onclick = () => {
    mostrarSeccion(seccionEpisodios)
    mostrarSeccion(seccionFija)
    esconderSeccion(seccionInicio)
    esconderSeccion(seccionPersonajes)
    esconderSeccion(seccionUbicaciones)
}