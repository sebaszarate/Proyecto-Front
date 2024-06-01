


const cargarPeliculas = async() => {
  try {
    const respuesta = await fetch(
      "https://api.themoviedb.org/3/movie/popular?api_key=02dec5083cc46ae9aee630ddbc2eaa4c"
    );
    
      

   const datos = await respuesta.json();
      

    console.log(datos);

      let salida = document.getElementById("contenedor-tarjetas");
    
      datos.results.forEach(pelicula => {

        const title = pelicula.original_title;
        const poster = pelicula.poster_path;
  
        salida.innerHTML+= `<div class="pelicula">
         <article class="tarjeta"> 
           <img class="poster" src="https://image.tmdb.org/t/p/w500${poster}">
        <h3 class="titulo">${title}</h3>
        </article>
        </div>`
     
    });

  
  } catch (error) {
    console.log(error);
  }
};

cargarPeliculas();

/*formulario*/




const email = document.getElementById("email-f");
const clave = document.getElementById("password");
const btnRegistro = document.getElementById("btn-registro");




let nuevoRegistro = () =>{
   

  localStorage.setItem("name" , email.value);
  localStorage.setItem("passw" , clave.value);


  obtenerDFatos();

}



let obtenerDFatos = () => {
if(localStorage.getItem("name") && localStorage.getItem("passw") ){
 
 
 alert("Se Registro Correctamente");
 
 
}
  
}


/*login*/

const emailLogin = document.getElementById("email-l");
const passWLogin = document.getElementById("passw-l");


const nuevoLogin = () =>{

 console.log(emailLogin.value);
 console.log(emailLogin.value);


 let name = localStorage.getItem("name");
 let passw = localStorage.getItem("passw");

 if ((emailLogin.value == name ) && (passWLogin.value == passw)) {
   alert("acceso correcto")
 }else{
  alert("el mail o contraseña incrrecto");
 }




  
}
