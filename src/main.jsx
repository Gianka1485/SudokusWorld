import React from 'react'
import ReactDOM from 'react-dom/client'
import { App } from './App.jsx'

//Se cargan primero todos los elementos HTML que se van a modificar y las variables constantes
const loadPage = document.getElementById('load'),
      CUBES_FACES = 3,
      CUBES_COUNT = 9

let cubes = ''

//Se crean 3^3 cubos para generar la figura 3D y se asignan a la variable cubes para luego ser asignada como elementos HTML
for (let i = 1; i <= CUBES_COUNT; i++) cubes += `<div class="cube cube--${i}">
  <span class="cube__face cube__face--1 cube__face--top"></span>
  <span class="cube__face cube__face--2 cube__face--front" style="--i:1;"></span>
  <span class="cube__face cube__face--3 cube__face--front" style="--i:2;"></span>
  <span class="cube__face cube__face--4 cube__face--front" style="--i:3;"></span>
  <span class="cube__face cube__face--5 cube__face--front" style="--i:4;"></span>
</div>`

//Se usa otro ciclo para crear los contenedores de 9 cubos, esto permite una fácil manipulación de la posición de los cubos
for (let f = 1, loadCube = document.getElementById('load__cube');
    f <= CUBES_FACES;
    f++) {
  loadCube.innerHTML += `<div class="cubes__container cubes__container--${f}"></div>`
  document.querySelector(`.cubes__container--${f}`).innerHTML = cubes
}

//Se añade el CSS Load (que corresponde a la pantalla de carga) una vez se finalice de modificar el elemento #load,
//debido a que se producían incongruencias en la animación de carga
document.head.innerHTML += '<link rel="stylesheet" type="text/css" href="/src/styles/Load.css">'

window.addEventListener('load', () => loadPage.style.opacity = 1)

setTimeout(() => {
  ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
      <App />
    </React.StrictMode>,
  )
  
  loadPage.style.opacity = 0
  
  setTimeout(() => loadPage.style.display = 'none', 2000)
}, 2000)