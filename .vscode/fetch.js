const cargarPeliculas = async () => {
    
    try{
    respuesta =
    await fetch('https://api.themoviedb.org/3/movie/popular?api_key=02dec5083cc46ae9aee630ddbc2eaa4c');

    console.log(respuesta);


if(respuesta.status == 200){

const datos = await respuesta.json();

}else if(respuesta == 404){

    console.log("la pelicula que no existe");

}

    }catch(error){
        console.log(error);
    }
}

cargarPeliculas();
/* vamos a crear a una funcion que renderiza elementos en el DOM*/
/*function pedirDatos() {
  fetch("https://api.themoviedb.org/3/movie/popular?api_key=02dec5083cc46ae9aee630ddbc2eaa4c")
    .then(function (respuesta) {
      return respuesta.json();
    })
    .then(function (personajes) {
      //traemos el especio de renderizado
      const contenedor = document.getElementById("contenedor-tarjetas");
      //utilizamos un for-each
      personajes.results.forEach(function (dato) {
        //Creamos el elemento html
        const article = document.createElement("article");
        //Agregamos estilo a article
        article.classList.add("tarjeta");
        //Inyectamos contenido a <article>
        article.innerHTML = `
            <img src="${dato.image}" alt="Imagen del personaje ${
          dato.name
        }" class="card_img-size">
            <label>Nombre:</label>
            <p>${dato.name}</p>
            <div>
              <label>Estado:</label>
              <p><i class="fa-solid fa-circle ${dato.status.toLowerCase()}"></i>${
          dato.status
        }</p>
              <label>Planeta:</label>
              <p>${dato.location.name}</p>
            </div>  `;
        contenedor.appendChild(article);
      });
    })

    .catch(function (error) {
      console.error(error);
    });
}

pedirDatos();*/