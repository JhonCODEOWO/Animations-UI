//Variables para seleccionar elementos a aplicar una animacion
let animateFromBottom = null;
let indexAnimate = 0;

//Variables que seleccionaran los elementos para el cuerpo de la pagina y la carga que se va a mostrar
let imgloader = null;
let contentMain = null;

document.addEventListener('DOMContentLoaded', (evento) => {
    cargarElementosDom();
    mostrar_ocultarElemento(imgloader);
    mostrar_ocultarElemento(contentMain);
    existeEnViewPort(animateFromBottom, indexAnimate);
});

window.addEventListener('scroll', function (evento) {
    if (existeEnViewPort(animateFromBottom, indexAnimate) == false && indexAnimate != animateFromBottom.length - 1) {
        indexAnimate++;
    }
    console.log(indexAnimate);
});

function cargarElementosDom() {
    imgloader = document.querySelector('.img-loader');
    contentMain = document.querySelector('.content-gral');

    //Carga de elementos a animar
    animateFromBottom = document.querySelectorAll('.animate-fromBottom');
}

function aplicarTxtElement(elemento, texto){
    //El elemento es un nodelist?
    if (elemento instanceof NodeList) {
        elemento.forEach((element)=> {
            element.textContent = texto;
        });
    //Si no, aplicamos al elemento
    } else {
        elemento.style.width = texto;
    }
}

//Solo funciona en linea de codigo general, no accede a las hojas de estilo
function mostrar_ocultarElemento(elemento){
    try {
        if (elemento.style.display === 'none') {
            elemento.style.display = 'block';
            console.log(`Se ha mostrado el elemento${elemento}`);
        }else{
            elemento.style.display = 'none';
            console.log(`Se ha ocultado el elemento ${elemento}`);
        }
    } catch (error) {
        console.error(`Excepción en el método mostrar_ocultarElemento ${error.message}`);
    }
}

//Funcion para las animaciones, pendiente de refactorizar, devuleve un valor verdadero si el elemento está en pantalla, y false si ha sido dejado por el usuario
function existeEnViewPort(elemento, index) {
    try {
        const elementoActual = elemento[index];
        let scrollY = window.scrollY;

        if (elementoActual.offsetTop >= scrollY) {
            elementoActual.classList.add('desdeBottom');
            console.log(`El elemento está en vista del usuario`);
            return true; 
        }else{
            console.log(`El elemento ha ha sido sobrepasado por el top`);
            elementoActual.classList.remove('desdeBottom');
            return false;
        }
    } catch (error) {
        console.error(`Se ha generado un error en la función existeEnViewPort: ${error.message}`);
        return false;
    }
}

//Funcion para determinar si el bottom ha sobrepasado a un elemento