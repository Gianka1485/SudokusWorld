import React from 'react'
import ReactDOM from 'react-dom/client'
import { useState } from 'react'
import './App.css'


/* IMPORTED COMPONENTS */
import Navegation from './components/nav'
import Sudoku from './components/sudoku'



function App() {

  return (
    <div id='app'> 
      <Navegation></Navegation>

      <main id='main'>

        <h2 id='logo'>LOGO TITLE</h2>
        
        <button id='play-btn' onClick={()=>{
          document.getElementById('sudoku').style.opacity = '1';
          document.getElementById('grid').style.opacity = '1';
        }}>Play</button>

        <div id='sudoku-container'>
          <Sudoku></Sudoku>
          <figure id='grid'>
            <img src='\src\imgs\grilla2.png'></img>
          </figure>
        </div> 

      </main>
      
    </div>
  )
}

export default App
