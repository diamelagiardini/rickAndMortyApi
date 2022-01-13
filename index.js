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

//PAGINACION

const paginaAnterior = document.querySelector("#pagina-anterior-personajes");
const paginaSiguiente = document.querySelector("#pagina-siguiente-personajes");
const paginaAnteriorUbicaciones = document.querySelector(
  "#pagina-anterior-ubicaciones"
);
const paginaSiguienteUbicaciones = document.querySelector(
  "#pagina-siguiente-ubicaciones"
);
const paginaSiguienteEpisodios = document.querySelector(
  "#pagina-siguiente-episodios"
);
const paginaAnteriorEpisodios = document.querySelector(
  "#pagina-anterior-episodios"
);

// FUNCIONES

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
const divPersonajes = document.querySelector("#div-personajes");

const crearTarjetasPersonajes = (data) => {
  const html = data.reduce((acc, curr) => {
    return (
      acc +
      `             <article class="personaje">
   <img class="imagen-personaje" src=${curr.image}>
   <h2 class="nombre-personaje">${curr.name}</h2>
   <div class="genero">
       <p class="subtitulos-personaje">GENERO</p>
       <p>${curr.gender}</p>
   </div>
   <div class="estado">
       <p class="subtitulos-personaje">ESTADO</p>
       <p>${curr.status}</p>
   </div>
   <div class="origen">
       <p class="subtitulos-personaje">ORIGEN</p>
       <p>${curr.origin.name}</p>
   </div>
</article>
   `
    );
  }, " ");
  divPersonajes.innerHTML = html;
};

let paginaActual = 1;

const buscarInformacionPersonajes = () => {
  fetch(`https://rickandmortyapi.com/api/character/?page=${paginaActual}`)
    .then((res) => res.json())
    .then((data) => {
      crearTarjetasPersonajes(data.results);
    });
};
const divUbicaciones = document.querySelector("#div-ubicaciones");
const crearTarjetasUbicaciones = (data) => {
  const html = data.reduce((acc, curr) => {
    return (
      acc +
      `             <article class="ubicacion">
   <img class="imagen-ubicacion" src="https://admiring-keller-046d5a.netlify.app/static/media/01.f47ff45c.png">
   <h2 class="nombre-origen">${curr.name}</h2>
   <div class="tipo">
       <p class="subtitulos-ubicacion">TIPO</p>
       <p>${curr.type}</p>
   </div>
   <div class="dimension">
       <p class="subtitulos-ubicacion">DIMENSION</p>
       <p>${curr.dimension}</p>
   </div>
   <div class="residentes">
       <p class="subtitulos-ubicacion">RESIDENTES</p>
       <p>${curr.residents.length}</p>
   </div>
</article>
   `
    );
  }, " ");
  divUbicaciones.innerHTML = html;
};

let paginaActualUbicaciones = 1;

const buscarInformacionUbicaciones = () => {
  fetch(
    `https://rickandmortyapi.com/api/location/?page=${paginaActualUbicaciones}`
  )
    .then((res) => res.json())
    .then((data) => {
      crearTarjetasUbicaciones(data.results);
    });
};

const crearTarjetasEpisodios = (data) => {
  const divEpisodios = document.querySelector("#div-episodios");
  const html = data.reduce((acc, curr) => {
    return (
      acc +
      `             <article class="episodio">
   <img class="imagen-episodio" src="https://blog.personal.com.py/wp-content/uploads/2020/09/los-3-mejores-episodios-de-Rick-y-Morty.jpg">
   <h2 class="nombre-episodio">${curr.name}</h2>
   <div class="id">
       <p class="subtitulos-episodio">ID</p>
       <p>${curr.id}</p>
   </div>
   <div class="air-date">
       <p class="subtitulos-episodio">AIR DATE</p>
       <p>${curr.air_date}</p>
   </div>
   <div class="episode">
       <p class="subtitulos-episodio">EPISODE</p>
       <p>${curr.episode}</p>
   </div>
</article>
   `
    );
  }, " ");
  divEpisodios.innerHTML = html;
};

let paginaActualEpisodios = 1;

const buscarInformacionEpisodios = () => {
  fetch(
    `https://rickandmortyapi.com/api/episode/?page=${paginaActualEpisodios}`
  )
    .then((res) => res.json())
    .then((data) => {
      crearTarjetasEpisodios(data.results);
    });
};

const crearTarjetasSegunPersonaje = (data) => {
  const divSegunPersonaje = document.querySelector("#div-segun-personajes");
  divSegunPersonaje.classList.remove("no-mostrar");
  divSegunPersonaje.classList.add("div-personajes");
  const html = data.reduce((acc, curr) => {
    return (
      acc +
      `<article class="personaje">
      <img class="imagen-personaje" src=${curr.image}>
      <h2 class="nombre-personaje">${curr.name}</h2>
      <div class="genero">
          <p class="subtitulos-personaje">GENERO</p>
          <p>${curr.gender}</p>
      </div>
      <div class="estado">
          <p class="subtitulos-personaje">ESTADO</p>
          <p>${curr.status}</p>
      </div>
      <div class="origen">
          <p class="subtitulos-personaje">ORIGEN</p>
          <p>${curr.origin.name}</p>
      </div>
   </article>`
    );
  }, " ");
  divSegunPersonaje.innerHTML = html;
};

const inputPersonaje = document.querySelector("#input-personaje");

const buscarInformacionSegunPersonaje = () => {
  const valorInputPersonaje = inputPersonaje.value.toLowerCase();
  fetch(
    `https://rickandmortyapi.com/api/character/?name=${valorInputPersonaje}`
  )
    .then((res) => res.json())
    .then((data) => {
      crearTarjetasSegunPersonaje(data.results);
    });
};

const crearTarjetasSegunUbicacion = (data) => {
  const divSegunUbicacion = document.querySelector("#div-segun-ubicaciones");
  divSegunUbicacion.classList.remove("no-mostrar");
  divSegunUbicacion.classList.add("div-ubicaciones");
  const html = data.reduce((acc, curr) => {
    return (
      acc +
      `             <article class="ubicacion">
   <img class="imagen-ubicacion" src="https://admiring-keller-046d5a.netlify.app/static/media/01.f47ff45c.png">
   <h2 class="nombre-origen">${curr.name}</h2>
   <div class="tipo">
       <p class="subtitulos-ubicacion">TIPO</p>
       <p>${curr.type}</p>
   </div>
   <div class="dimension">
       <p class="subtitulos-ubicacion">DIMENSION</p>
       <p>${curr.dimension}</p>
   </div>
   <div class="residentes">
       <p class="subtitulos-ubicacion">RESIDENTES</p>
       <p>${curr.residents.length}</p>
   </div>
</article>`
    );
  }, " ");
  divSegunUbicacion.innerHTML = html;
};

const inputUbicacion = document.querySelector("#input-ubicacion");

const buscarInformacionSegunUbicacion = () => {
  const valorInputUbicacion = inputUbicacion.value.toLowerCase();
  fetch(`https://rickandmortyapi.com/api/location/?type=${valorInputUbicacion}`)
    .then((res) => res.json())
    .then((data) => {
      crearTarjetasSegunUbicacion(data.results);
    });
};

//CAMBIAR SECCIONES
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

// TARJETAS PERSONAJES

buscarInformacionPersonajes();

// PAGINACION PERSONAJES

paginaSiguiente.onclick = () => {
  paginaActual = paginaActual + 1;
  buscarInformacionPersonajes();
};

paginaAnterior.onclick = () => {
  paginaActual = paginaActual - 1;
  buscarInformacionPersonajes();
};

// TARJETAS UBICACIONES
buscarInformacionUbicaciones();

// PAGINACION UBICACIONES

paginaSiguienteUbicaciones.onclick = () => {
  paginaActualUbicaciones = paginaActualUbicaciones + 1;
  buscarInformacionUbicaciones();
};

paginaAnteriorUbicaciones.onclick = () => {
  paginaActualUbicaciones = paginaActualUbicaciones - 1;
  buscarInformacionUbicaciones();
};

// TARJETAS EPISODIOS

buscarInformacionEpisodios();

//PAGINACION EPISODIOS

paginaSiguienteEpisodios.onclick = () => {
  paginaActualEpisodios = paginaActualEpisodios + 1;
  buscarInformacionEpisodios();
};

paginaAnteriorEpisodios.onclick = () => {
  paginaActualEpisodios = paginaActualEpisodios - 1;
  buscarInformacionEpisodios();
};

// BUSCAR SEGUN PERSONAJE

const botonBuscarPersonaje = document.querySelector("#boton-buscar-personaje");

botonBuscarPersonaje.onclick = () => {
  divPersonajes.classList.add("no-mostrar");
  divPersonajes.classList.remove("div-personajes");
  buscarInformacionSegunPersonaje();
};

// BUSCAR SEGUN TIPO DE UBICACION

const botonBuscarUbicacion = document.querySelector("#boton-buscar-ubicacion");

botonBuscarUbicacion.onclick = () => {
  divUbicaciones.classList.add("no-mostrar");
  divUbicaciones.classList.remove("div-ubicaciones");
  buscarInformacionSegunUbicacion();
};
