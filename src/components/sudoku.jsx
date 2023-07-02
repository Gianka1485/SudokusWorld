import React from "react";

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
  
  function Sudoku(){
    return(
        <section className='sudoku' id='sudoku'>
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
    )
  }

export default Sudoku;