export const loadPage = document.getElementById('load')

export const LoadPage = () => {
  //Se cargan primero todos los elementos HTML que se van a modificar y las variables constantes
  const CUBES_FACES = 3,
        CUBES_COUNT = 9,
        loadCube = document.getElementById('load__cube')
  
  let cubes = ''
  
  //Se crean 3^3 cubos para generar la figura 3D y se asignan a la variable cubes para luego ser asignada como elementos HTML
  for (let i = 1; i <= CUBES_COUNT; i++) cubes += `<div class="cube cube--${i}">
    <span class="cube__face cube__face--1 cube__face--top"></span>
    <span class="cube__face cube__face--2 cube__face--front" style="--i:1;"></span>
    <span class="cube__face cube__face--3 cube__face--front" style="--i:2;"></span>
    <span class="cube__face cube__face--4 cube__face--front" style="--i:3;"></span>
    <span class="cube__face cube__face--5 cube__face--front" style="--i:4;"></span>
  </div>`
  
  let cubesFaces = ''

  //Se usa otro ciclo para crear los contenedores de 9 cubos, esto permite una fácil manipulación de la posición de los cubos
  for (let faces = 1; faces <= CUBES_FACES; faces++)
      cubesFaces += `<div id="cubes__container--${faces}" class="cubes__container">${cubes}</div>`

  loadCube.innerHTML += cubesFaces
  
  //Se añade el CSS Load (que corresponde a la pantalla de carga) una vez se finalice de modificar el elemento #load,
  //debido a que se producían incongruencias en la animación de carga
  document.head.innerHTML += '<link rel="stylesheet" type="text/css" href="/src/styles/Load.css">'
  
  window.addEventListener('load', () => {
    //Se añade la propiedad CSS animation-name maunalmente para evitar el problema de la desincronización de la animación de la pantalla de carga
    loadCube.style.animationName = 'loading'

    document.getElementById('cubes__container--1').style.animationName = 'loading-expand'
    document.getElementById('cubes__container--3').style.animationName = 'loading-expand'

    loadPage.style.opacity = 1
  })
}