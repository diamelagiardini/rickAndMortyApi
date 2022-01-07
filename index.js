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

irAInicio.onclick = () => {
  mostrarSeccion(seccionInicio);
  esconderSeccion(seccionFija);
  esconderSeccion(seccionPersonajes);
  esconderSeccion(seccionUbicaciones);
  esconderSeccion(seccionEpisodios);
};

irAPersonajes.onclick = () => {
  mostrarSeccion(seccionPersonajes);
  mostrarSeccion(seccionFija);
  esconderSeccion(seccionUbicaciones);
  esconderSeccion(seccionEpisodios);
  esconderSeccion(seccionInicio);
};

irAUbicaciones.onclick = () => {
  mostrarSeccion(seccionUbicaciones);
  mostrarSeccion(seccionFija);
  esconderSeccion(seccionInicio);
  esconderSeccion(seccionPersonajes);
  esconderSeccion(seccionEpisodios);
};

irAEpisodios.onclick = () => {
  mostrarSeccion(seccionEpisodios);
  mostrarSeccion(seccionFija);
  esconderSeccion(seccionInicio);
  esconderSeccion(seccionPersonajes);
  esconderSeccion(seccionUbicaciones);
};

// FUNCIONES

const crearTarjetasPersonajes = (data) => {
  const divPersonajes = document.querySelector("#div-personajes");
  const html = data.reduce((acc, curr) => {
    return (
      acc +
      `             <article class="personaje">
   <img src=${curr.image}>
   <h2 class="nombre-personaje">${curr.name}</h2>
   <div class="genero">
       <p>GENERO</p>
       <p>${curr.gender}</p>
   </div>
   <div class="estado">
       <p>ESTADO</p>
       <p>${curr.status}</p>
   </div>
   <div class="origen">
       <p>ORIGEN</p>
       <p>${curr.origin.name}</p>
   </div>
</article>
   `
    );
  }, " ");
  divPersonajes.innerHTML = html;
};

let paginaActual = 1;

const buscarInformacion = () => {
  fetch(`https://rickandmortyapi.com/api/character/?page=${paginaActual}`)
    .then((res) => res.json())
    .then((data) => {
      crearTarjetasPersonajes(data.results);
    });
};

// TARJETAS PERSONAJES

buscarInformacion();

// PAGINACION

const paginaAnterior = document.querySelector("#pagina-anterior-personajes");
const paginaSiguiente = document.querySelector("#pagina-siguiente-personajes");

paginaSiguiente.onclick = () => {
  paginaActual = paginaActual + 1;
  buscarInformacion();
};

paginaAnterior.onclick = () => {
  paginaActual = paginaActual - 1;
  buscarInformacion();
};
