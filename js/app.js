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
        console.log(btnMenu);
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