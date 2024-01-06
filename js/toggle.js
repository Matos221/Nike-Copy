const btnSwitch = document.getElementById("switch");
const darkObjects = document.querySelectorAll(".light")

btnSwitch.addEventListener("click" , ()=>{
        btnSwitch.classList.toggle("active");
        document.body.classList.toggle("dark");
        darkObjects.forEach(element => {
                element.classList.toggle("active");
        });
})


// Iniciamos las variables a usar y obteniendo los datos via querys
// const toggle = document.getElementById('btncontainer');
// const body = document.querySelector('body');
// const footer = document.querySelector('.Contacto');
// const gallery = document.querySelector('.gallery');
// const linex = document.querySelector('.line');


// Cuando al btn toggle le hagamos "onclick" (clickearlo)
// le vamos a agregar al toggle y al body la clase "active" y las propiedades que vengan con la misma, si clickeamos devuelta se la saca
// toggle.onclick = function (){
//         toggle.classList.toggle('active');
//         body.classList.toggle('active');
//         footer.classList.toggle('active');
//         gallery.classList.toggle('active');
//         linex.classList.toggle('active');        
// }

// Otro Tipo de btn para cambiar el tema