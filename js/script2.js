//Variables que seleccionaran los elementos para el cuerpo de la pagina y la carga que se va a mostrar
let imgloader = null;
let contentMain = null;

document.addEventListener('DOMContentLoaded', (evento) => {
    cargarElementosDom();
    mostrar_ocultarElemento(imgloader);
    mostrar_ocultarElemento(contentMain);

    ScrollReveal().reveal('.animate', {reset: true, delay: 350});
    AOS.init();
});

function cargarElementosDom() {
    imgloader = document.querySelector('.img-loader');
    contentMain = document.querySelector('.content-gral');
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