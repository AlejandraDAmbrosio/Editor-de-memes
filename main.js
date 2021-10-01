
/////////////////
//// HEADER /////
/////////////////

// MODO CLARO-OSCURO
const body = document.querySelector('body')
const botonToggle = document.getElementById('toggle-mode-button')
const iconToggle = document.getElementById('icon-toggle-mode')
const textToggle = document.getElementById('text-toggle')
const imageToggle = document.getElementById('toggle-image-button')
const textAsideToggle = document.getElementById('toggle-texto-button')

const changeMode = () => {
    /*se hace toggle de todas las clases que necesitamos cambiar*/
    body.classList.toggle('dark-mode')
    body.classList.toggle('light-mode')
    iconToggle.classList.toggle('far')
    iconToggle.classList.toggle('fas')
    /*chequeamos con modeStatus si el estado es dark o light. Si hay un dark-mode, 
     esta en modo dark, de lo contrario es light */
    const modeStatus = document.getElementsByClassName('dark-mode');
    /*Si el modo es DARK vamos a pasar a modo claro*/
    if (modeStatus.length > 0) {  /*AQUI NOS FIJAMOS CUANTOS ELEMENTOS se obtuvieron con getELementsByClassName*/
       console.log("ESTA EN DARK MODE");
       textToggle.textContent = "Modo claro"
    /* Si el modo es LIGHT vamos a pasar a modo oscuro */
    } else {
        console.log("Esta en light mode")
        textToggle.textContent = "Modo oscuro"
    }
    /* OPCIONAL DESCOMENTAMOS ESTA LINEA Y TENEMOS UN SHORTCUT PARA EL IF 
    textToggle.textContent = modeStatus.length > 0 ? "Modo Claro" : "Modo Oscuro"*/
}
botonToggle.addEventListener('click', changeMode)

const chageToImage = () => {
    let sectionImagen = document.getElementById('section-imagen')
    sectionImagen.classList.remove('oculto')

    let aside = document.getElementById('aside')
    aside.style.display='block'

    let sectionTexto = document.getElementById('section-texto')
    sectionTexto.classList.add('oculto')
}

imageToggle.addEventListener('click' , chageToImage) 

const changeToText = () => {

    let sectionTexto = document.getElementById('section-texto')
    sectionTexto.classList.remove('oculto')
    
    let aside = document.getElementById('aside')
    aside.style.display='block'

    let sectionImagen = document.getElementById('section-image')
    sectionImagen.classList.add('oculto')
}
textAsideToggle.addEventListener('click' , changeToText)



/////////////////
// ASIDE TEXTO //
/////////////////


// TOP TEXT Y BOTTOM TEXT
// CAMBIO DE FUENTE

const $= (id) => document.getElementById(id)
/* Aca guardamos todos los id */

let cambiarText=()=>{
    $("toptext").textContent=$("asidetoptext").value
    $("bottomtext").textContent=$("asidebottomtext").value

}
/* Aca reemplazamos el contenido de las etiquetas p por el valor ingresado en las textarea */

let cambiarFont=()=>{
    let font= $("font-list").value
    $("toptext").style.fontFamily=font
    $("bottomtext").style.fontFamily=font

}
/* Reemplazamos la fuente de las etiquetas p por la opcion elegida en el select */


const botoncheck = () => {
    if ($('checksuperior').checked) {
      $('text-container').classList.add('none')
    } else {
      $('text-container').classList.remove('none')
    }
  
    if ($('checkinferior').checked) {
      $('text-containerdos').classList.add('none')
    } else {
      $('text-containerdos').classList.remove('none')
    }
  }

  let comenzarText= () =>{
    $("asidetoptext").addEventListener("input",cambiarText)
    $("asidebottomtext").addEventListener("input", cambiarText)
    $("font-list").addEventListener("change",cambiarFont)
    $("checksuperior").addEventListener("click", botoncheck) 
    $("checkinferior").addEventListener("click", botoncheck) 
}
/* Agregamos los addEventListener a las funciones 
input = nuevo evento input => se ejecuta lo ingresado en el input
change = nuevo evento change => se ejecuta lo ingresado en el select */


//CAMBIO COLORES

let actualizarColores=()=>{
    let colorf= $("color-input-f").value.toUpperCase()
    $("text-container").style.backgroundColor=colorf
    $("text-containerdos").style.backgroundColor=colorf
    $("circle-f").style.backgroundColor=colorf
    $("span-f").textContent= colorf

    let colortxt = $("color-input-txt").value.toUpperCase()
    $("toptext").style.color=colortxt
    $("bottomtext").style.color=colortxt
    $("circle-c").style.backgroundColor=colortxt
    $("span-txt").textContent= colortxt

    let colorimg = $("color-input-img").value.toUpperCase()
    $("imagen").style.backgroundColor= colorimg
    $("circleimg").style.backgroundColor= colorimg
    $("circletext").textContent= colorimg

}

let colorImg=()=>{
    let colorimg = $("color-input-img").value.toUpperCase()
    $("imagen").style.backgroundColor= colorimg
    $("circleimg").style.backgroundColor= colorimg
    $("circletext").textContent= colorimg
}

let inicializarColores=()=>{
    $("color-input-f").addEventListener("input", actualizarColores)
    $("color-input-txt").addEventListener("input", actualizarColores)
}
let inicializarImg=()=>{
    $("color-input-img").addEventListener("input",colorImg)
}
/*Realizamos el mismo procedimiento que en el cambio de fuente, excepto que en lugar
de fontSize escribiremos color y backgroundColor. El evento utilizado es input. */


// Cambio tamaño de fuente



//////////////////
// ASIDE IMAGEN //
//////////////////

//INPUT IMAGEN POR URL

/*Los IDs ya fueron guardados anteriormente*/

/*Se declara la función que vinculará el link de la imegen ingresada en el input URL a la etiqueta img*/

let imageChange = () => {
    let urlImagen = document.getElementById("url_input");
    let imagen = document.getElementById("imagen");
    imagen.src = urlImagen.value;
    }

let iniciarImage = () => {
    $('url_input').addEventListener('input', imageChange);
    }

    

/////////////////////////
/// INICIALIZACIONES ///
///////////////////////

const inicializar=()=>{
    comenzarText()
    inicializarColores()
    iniciarImage()
    inicializarImg()
}
window.onload=inicializar

// Aca inicializamos las funciones
