
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

const descargarImagen = () => {
    domtoimage.toBlob($('meme-composer')).then(function (blob) {
      saveAs(blob, 'meme.png')
    })
}

const changeMode = () => {
    body.classList.toggle('dark-mode')
    body.classList.toggle('light-mode')
    iconToggle.classList.toggle('far')
    iconToggle.classList.toggle('fas')
    const modeStatus = document.getElementsByClassName('dark-mode');
    textToggle.textContent = modeStatus.length > 0 ? "Modo Claro" : "Modo Oscuro"
}
botonToggle.addEventListener('click', changeMode)

const chageToImage = () => {
    let sectionImagen = document.getElementById('section-imagen')
    sectionImagen.classList.remove('oculto')

    let aside = document.getElementById('aside')
    console.log(aside)
    aside.style.display='block'

    let sectionTexto = document.getElementById('section-texto')
    sectionTexto.classList.add('oculto')
}

imageToggle.addEventListener('click', chageToImage)

const changeToText = () => {

    let sectionTexto = document.getElementById('section-texto')
    sectionTexto.classList.remove('oculto')
    
    let aside = document.getElementById('aside')
    aside.style.display='block'

    let sectionImagen = document.getElementById('section-imagen')
    sectionImagen.classList.add('oculto')
}
textAsideToggle.addEventListener('click', changeToText)



/////////////////
// ASIDE TEXTO //
/////////////////


// TOP TEXT Y BOTTOM TEXT
// CAMBIO DE FUENTE

const $ = (id) => document.getElementById(id)

let cambiarText = () => {
    $("toptext").textContent = $("asidetoptext").value
    $("bottomtext").textContent = $("asidebottomtext").value

}

let cambiarFont = () => {
    let font = $("font-list").value
    $("toptext").style.fontFamily = font
    $("bottomtext").style.fontFamily = font

}




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

let comenzarText = () => {
    $("asidetoptext").addEventListener("input", cambiarText)
    $("asidebottomtext").addEventListener("input", cambiarText)
    $("font-list").addEventListener("change", cambiarFont)
    $("checksuperior").addEventListener("click", botoncheck)
    $("checkinferior").addEventListener("click", botoncheck)
}

//CAMBIO COLORES

let actualizarColores = () => {
    let colorf = $("color-input-f").value.toUpperCase()
    $("text-container").style.backgroundColor = colorf
    $("text-containerdos").style.backgroundColor = colorf
    $("circle-f").style.backgroundColor = colorf
    $("span-f").textContent = colorf

    let colortxt = $("color-input-txt").value.toUpperCase()
    $("toptext").style.color = colortxt
    $("bottomtext").style.color = colortxt
    $("circle-c").style.backgroundColor = colortxt
    $("span-txt").textContent = colortxt

    let colorimg = $("color-input-img").value.toUpperCase()
    $("imagen").style.backgroundColor = colorimg
    $("circleimg").style.backgroundColor = colorimg
    $("circletext").textContent = colorimg

}

let colorImg = () => {
    let colorimg = $("color-input-img").value.toUpperCase()
    $("imagen").style.backgroundColor = colorimg
    $("circleimg").style.backgroundColor = colorimg
    $("circletext").textContent = colorimg
}

let inicializarColores = () => {
    $("color-input-f").addEventListener("input", actualizarColores)
    $("color-input-txt").addEventListener("input", actualizarColores)
}
let inicializarImg = () => {
    $("color-input-img").addEventListener("input", colorImg)
}


// Cambio tamaño de fuente



// Contorno del texto

let outlineNoneButton = document.getElementById('outline_none');
let outlineLightButton = document.getElementById('outline_white');
let outlineDarkButton = document.getElementById('outline_black');
let topText = document.getElementById('toptext');
let bottomText = document.getElementById('bottomtext');

changeOutlineNone = () => {
    topText.style.textShadow = '0 0 3.5px transparent';
    bottomText.style.textShadow = '0 0 3.5px transparent';
}

changeOutlineLight = () => {
    topText.style.textShadow = '0 0 3.5px #fff';
    bottomText.style.textShadow = '0 0 3.5px #fff';
}

changeOutlineDark = () => {
    topText.style.textShadow = '0 0 3.5px #000';
    bottomText.style.textShadow = '0 0 3.5px #000';
}

outlineNoneButton.addEventListener('click', changeOutlineNone);
outlineLightButton.addEventListener('click', changeOutlineLight);
outlineDarkButton.addEventListener('click', changeOutlineDark);



//////////////////
// ASIDE IMAGEN //
//////////////////

//INPUT IMAGEN POR URL
// se le pasa un evento que va a ser la url del input.  se verifica que haya algun valor antes de intentar asignar el background
// se cambió el tag <img por un div dado que sino iban a necesitar un fallback image para resolver el hecho de que si no hay
// imagen se muestra un iconito de imagen rota.
let imageChange = (evento) => {
    if (evento.target.value.length !== 0) {
        $('meme-img').style.backgroundImage = `url("${evento.target.value}")`
    }
}

let iniciarImage = () => {
    $('url_input').addEventListener('input', imageChange);
}

// Se le pasa el target (section-imagen o section-text) y se le agrega la clase 'oculto'
const hideAside = (target) => {
    $(target).classList.add('oculto')
}


/////////////////////////
/// INICIALIZACIONES ///
///////////////////////

const inicializar = () => {
    comenzarText()
    inicializarColores()
    iniciarImage()
    inicializarImg()
}
window.onload = inicializar

