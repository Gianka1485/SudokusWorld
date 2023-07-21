import React from 'react'
import ReactDOM from 'react-dom/client'
import { useState } from 'react'
import './App.css'


/* IMPORTED COMPONENTS */
import Navegation from './components/nav'
import Sudoku from './components/sudoku'
import Home from './components/home'



function App() {

  return (
    <div id='app'> 

      <Navegation></Navegation>

      <div id='main'>

        <Home></Home>

        <Sudoku></Sudoku>

      </div>
      
    </div>
  )
}

export default App
