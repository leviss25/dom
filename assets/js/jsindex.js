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
const tour5 = new tour(5,'TOUR LIMA CITY','2 días','Lorem ipsum dolor sit amet consectetur adipiscing elit hendrerit, duis egestas diam pretium velit suspendisse vivamus vulputate.');
const tour6 = new tour(6,'TOUR LAGO TITICACA','5 días','Conubia pretium per habitant potenti primis, sem hendrerit litora ultrices fermentum vel, cursus eu dapibus natoque.');
let ArrayTours = [tour1,tour2,tour3,tour4,tour5,tour6];
let divTours = document.getElementById('divtoursindex');
ArrayTours.forEach(mitour => {
    divTours.innerHTML += `
        <article class="tour">
            <div>
                <img class="tour__img" src="./assets/images/tour${mitour.id}.jpg" alt="Imagen ${mitour.titulo}">
            </div>
            <h3 class="tour__titulo">${mitour.titulo}</h3>
            <p class="tour__intro">${mitour.descipcion}</p>
            <a class="tour__boton" href="#">
                <span class="tour__boton__texto">MÁS INFORMACIÓN</span>
            </a>
        </article>
    `
});