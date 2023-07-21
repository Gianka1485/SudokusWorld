import React from "react";

function Midbox(){
    return(
      <div className='mid-box'>
          <div className='little-box'>1</div>
          <div className='little-box'>1</div>
          <div className='little-box tu'>1</div>
          <div className='little-box'>1</div>
          <div className='little-box ti'>1</div>
          <div className='little-box'>1</div>
          <div className='little-box'>1</div>
          <div className='little-box'>1</div>
          <div className='little-box ta'>1</div>
      </div>
    )
  }
  
  function Box(){
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

  function Sudoku(){
    return(
      <div id='sudoku-container'>
          <Box></Box>
          <figure id='grid'>
            <img src='\src\imgs\grilla4.png'></img>
          </figure>
      </div> 
    )
  }

export default Sudoku;