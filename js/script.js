/* =========================================================
SCROLL SUAVE
========================================================= */

const boton = document.querySelector('.btn');

if(boton){

    boton.addEventListener('click', function(e){

        e.preventDefault();

        const contenido = document.querySelector('#contenido');

        if(contenido){

            contenido.scrollIntoView({
                behavior:'smooth'
            });

        }

    });

}

/* =========================================================
ANIMACIONES AL HACER SCROLL
========================================================= */

const elementos = document.querySelectorAll(
'.card, .actividad, .texto, .imagen, .frase, .video-section'
);

/* ESTILO INICIAL */
elementos.forEach(elemento => {

    elemento.style.opacity = '0';
    elemento.style.transform = 'translateY(80px)';
    elemento.style.transition = 'all 1s ease';

});

/* FUNCIÓN MOSTRAR */
function mostrarElemento(){

    elementos.forEach(elemento => {

        const top = elemento.getBoundingClientRect().top;

        const visible = window.innerHeight - 100;

        if(top < visible){

            elemento.style.opacity = '1';
            elemento.style.transform = 'translateY(0)';

        }

    });

}

/* EVENTOS */
window.addEventListener('scroll', mostrarElemento);

window.addEventListener('load', mostrarElemento);

/* =========================================================
EFECTO PARALLAX HERO
========================================================= */

const hero = document.querySelector('.hero');

if(hero){

    window.addEventListener('scroll', ()=>{

        const scroll = window.pageYOffset;

        hero.style.backgroundPositionY =
        scroll * 0.5 + 'px';

    });

}

/* =========================================================
EFECTO HOVER DINÁMICO EN CARDS
========================================================= */

const cards = document.querySelectorAll('.card');

cards.forEach(card => {

    card.addEventListener('mousemove', (e)=>{

        const rect = card.getBoundingClientRect();

        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        card.style.background =
        `radial-gradient(circle at ${x}px ${y}px,
        rgba(255,255,255,0.18),
        rgba(255,255,255,0.05))`;

    });

    card.addEventListener('mouseleave', ()=>{

        card.style.background = 'rgba(255,255,255,0.08)';

    });

});

/* =========================================================
EFECTO TÍTULO HERO
========================================================= */

const titulo = document.querySelector('.overlay h1');

if(titulo){

    window.addEventListener('mousemove', (e)=>{

        const x = (window.innerWidth / 2 - e.pageX) / 40;
        const y = (window.innerHeight / 2 - e.pageY) / 40;

        titulo.style.transform =
        `translate(${x}px, ${y}px)`;

    });

}

/* =========================================================
EFECTO APARICIÓN HERO
========================================================= */

const overlay = document.querySelector('.overlay');

if(overlay){

    overlay.style.opacity = '0';
    overlay.style.transition = 'all 1.5s ease';

    window.addEventListener('load', ()=>{

        overlay.style.opacity = '1';

    });

}

/* =========================================================
EFECTO VIDEO
========================================================= */

const videoWrapper = document.querySelector('.video-wrapper');

if(videoWrapper){

    videoWrapper.addEventListener('mouseenter', ()=>{

        videoWrapper.style.boxShadow =
        '0 0 40px rgba(0,200,83,0.45)';

    });

    videoWrapper.addEventListener('mouseleave', ()=>{

        videoWrapper.style.boxShadow =
        '0 20px 50px rgba(0,0,0,0.45)';

    });

}