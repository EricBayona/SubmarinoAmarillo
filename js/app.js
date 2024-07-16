const menu = document.querySelector('.hamburguesa');
const navegacion = document.querySelector('.navegacion');
const imagenes = document.querySelectorAll('img');
const menuDesplegable= document.querySelector('.menu-desplegable')
const queOfrecemos= document.querySelector('.que-ofrecemos')
const btnMenus = document.querySelectorAll('.btn-menu')
document.addEventListener('DOMContentLoaded',()=>{
    eventos();
});

const eventos = ()=>{
    menu.addEventListener('click', abrirMennu);
    menuDesplegable.addEventListener('click', mostrarQueOfrecemos)
}


const abrirMennu = ()=>{
    navegacion.classList.remove('ocultar');
    botonCerrar();
}
const mostrarQueOfrecemos =()=>{
    queOfrecemos.classList.remove('ocultar');
}
document.addEventListener('click', (event) => {
    if (!menuDesplegable.contains(event.target) || event.target === menuDesplegable) {
        queOfrecemos.classList.add('ocultar'); // Oculta la navegación si se hace clic fuera del menú
    }
});
const cerrarQueOfrecemos = ()=>{
    queOfrecemos.classList.add('ocultar');
    
}
const botonCerrar = () =>{
    const btnCerrar = document.createElement('p');
    const overlay = document.createElement('div');
    overlay.classList.add('pantalla-completa');
    const body = document.querySelector('body');
    if(document.querySelectorAll('.pantalla-completa').length > 0 )return;
    body.appendChild(overlay);
    btnCerrar.textContent = 'x';
    btnCerrar.classList.add('btn-cerrar');
    navegacion.appendChild(btnCerrar);
    cerrarMenu(btnCerrar,overlay);

}
imagenes.forEach(imagen =>{
    imagen.src = imagen.dataset.src;
})

const cerrarMenu =(boton, overlay)=>{
    boton.addEventListener('click',()=>{
        navegacion.classList.add('ocultar');
        overlay.remove();
        boton.remove();
    })
    overlay.onclick = function (){
        overlay.remove();
        navegacion.classList.add('ocultar');
        boton.remove();
    }
    btnMenus.forEach(btnMenu =>{
        btnMenu.addEventListener('click', () => {
        overlay.remove();
        navegacion.classList.add('ocultar');
        boton.remove();
    })
    })
    // navegacion.onclick = function(){

    //     overlay.remove();
    //     navegacion.classList.add('ocultar');
    //     boton.remove();
    // }
}

// Botones ver Mas
// const btnVerMas = document.querySelectorAll();
// const parrafoVerMas = document.querySelectorAll('.parrafo-ver-mas');
const botonesVerMas = document.querySelectorAll('.btn-ver-mas');

function mostrarContenido(event) {
    const boton = event.target;
    const parrafo = boton.nextElementSibling;

    if (parrafo) {
        parrafo.classList.toggle('ocultar');
        boton.textContent = parrafo.classList.contains('ocultar') ? 'Ver Más' : 'Ver Menos';
    }
}

botonesVerMas.forEach(boton => {
    boton.addEventListener('click', mostrarContenido);
});

// btnVerMas.forEach(btnVer => {
//     btnVer.addEventListener('click', () => {
//         const parrafo = btnVer.nextElementSibling;
//         if (parrafo) {
//             parrafo.classList.remove('ocultar');
//             btnVer.remove();
//             const btnVerMenos = document.createElement('button');
//             btnVerMenos.classList.add("btn","btn-rojo");
//             btnVerMenos.innerHTML = 'Ver Menos';
//             const contenedorTextoSession = parrafo.closest('.contenedor-texto-sesion');
//             if (contenedorTextoSession){
//                 contenedorTextoSession.appendChild(btnVerMenos);
//                 btnVerMenos.addEventListener('click',()=>{
//                 parrafo.classList.add('ocultar');
//                 btnVerMenos.remove();
//                 contenedorTextoSession.appendChild(btnVer);
//             });
//         }
//         btnVer.remove();
//     }
//     });
// });
