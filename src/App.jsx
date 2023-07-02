import React from 'react'
import ReactDOM from 'react-dom/client'
import { useState } from 'react'
import './App.css'



function Midbox(){
  return(
    <div className='mid-box'>
        <div className='little-box'>1</div>
        <div className='little-box'>1</div>
        <div className='little-box'>1</div>
        <div className='little-box'>1</div>
        <div className='little-box'>1</div>
        <div className='little-box'>1</div>
        <div className='little-box'>1</div>
        <div className='little-box'>1</div>
        <div className='little-box'>1</div>
    </div>
  )
}

function App() {

  return (
    <main>
      <h1>Sudoku</h1>
      <section className='sudoku-container'>
        <Midbox></Midbox>
        <Midbox></Midbox>
        <Midbox></Midbox>
        <Midbox></Midbox>
        <Midbox></Midbox>
        <Midbox></Midbox>
        <Midbox></Midbox>
        <Midbox></Midbox>
        <Midbox></Midbox>
      </section>
    </main>
  )
}

export default App
