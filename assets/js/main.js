/********PARA ACTIVAR LA LISTA DESPLEGABLE MOVIL Y ANIMARLO*****/
const ham = document.querySelector('.nav__ham');
const enlaces = document.querySelector('.nav__enlaces-menu');
const barras = document.querySelectorAll('.nav__ham span');
const navbarcont = document.querySelector('.header__contenedor-navbar');
ham.addEventListener('click', () => {
    enlaces.classList.toggle('activado');
    barras.forEach(child => {child.classList.toggle('animado')});
    navbarcont.classList.toggle('activado');
});
/*** PARA QUE SE ACTIVE CON EL SCROLL****/
window.addEventListener("scroll", function(){
    var header = document.querySelector(".header__contenedor-navbar");
    header.classList.toggle("abajo",window.scrollY>0);
});
/** a practicar dom **/
class tour{
    constructor(id,titulo,duracion,descipcion,){
        this.id = id;
        this.titulo=titulo;
        this.duracion=duracion;
        this.descipcion=descipcion;
    }
}
const tour1 = new tour(1,'TOUR CAMINO SALKANTAY','3 días','Únase ahora a esta inolvidable experiencia de viaje, conociendo la imponente y hermosa laguna Humantay, de un color turquesa intenso. Reserve ya.');
const tour2 = new tour(2,'TOUR NEVADO SALKANTAY','1 día','El Tour Ausangate Cusco de 5 días te permitirá explorar una de las altas e impresionantes montañas del Peru situado en la cordillera del Vilcanota a 6,384 mts.');
const tour3 = new tour(3,'TOUR MACHUPICCHU','4 días','Este Tour de Lujo a Machu Picchu le brindará una confortable y única experiencia de viaje hacia una de las 7 Maravillas del Mundo Moderno. Reserve ya.');
const tour4 = new tour(4,'TOUR MONTAÑA 7 COLORES','2 días','Una espectacular caminata de 1 día a la mágica Montaña de 7 colores ubicada en el poblado de Pitumarca a 5200 m.s.n.m...');
const tour5 = new tour(5,'TOUR MONTAÑA ABC','2 días','Lorem ipsum dolor sit amet consectetur adipiscing elit hendrerit, duis egestas diam pretium velit suspendisse vivamus vulputate.');
const tour6 = new tour(6,'TOUR MONTAÑA MNO','5 días','Conubia pretium per habitant potenti primis, sem hendrerit litora ultrices fermentum vel, cursus eu dapibus natoque.');
let ArrayTours = [tour1,tour2,tour3,tour4,tour5,tour6];
let divTours = document.getElementById('divtours');
ArrayTours.forEach(mitour => {
    divTours.innerHTML += `
        <div class="tour">
            <article>
                <div>
                    <img class="tour__img" src="../images/tour${mitour.id}.jpg" alt="Imagen ${mitour.titulo}">
                </div>
                <div class="detalle-tour">
                    <h2 class="tour__titulo"><a href=""></a>${mitour.titulo}</h2>
                    <p class="tour__intro"><strong>Duración: ${mitour.duracion}</strong></p>
                    <p class="tour__intro">${mitour.descipcion}</p>
                    <a class="tour__boton" href="">
                        <span class="tour__boton__texto">Más info</span>
                    </a>
                </div>
            </article>
        </div>
    `
});