// Creamos dos contasntes con las que trabajaremos
const hamburger = document.querySelector('.hamburger'); 
const menu = document.querySelector('.menu-navegacion');

// Creamos los eventos para el mostrar y sacar el menu
hamburger.addEventListener('click', () => {
        menu.classList.toggle("spread"); 
        // Si damos click en "hamburger" se muestra el menu porque le damos al "menu-navegacion" la clase "sprea"
})

window.addEventListener('click', e => { // A la ventana o pagina en si le aplicamos este evento
        if (menu.classList.contains("spread") && (e.target != menu) && (e.target != hamburger)) { 
        // Si menu tiene la clase "spread", no estamos tocando el menu o el "hamburger" ==> le sacamos o le devolvemos la clase "spread" al menu
                menu.classList.toggle("spread");
        }
})