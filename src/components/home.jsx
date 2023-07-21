import React from 'react';

function Home(){
    return(
      <div id='home'>
        <figure id='logo-container'>
          <img id='logo' src='\src\imgs\title.svg'></img>
        </figure>
          
        <button id='play-btn' onClick={()=>{
          document.getElementById('home').style.display = 'none';
          document.getElementById('home').style.height = '0';
          document.getElementById('sudoku').style.opacity = '1';
          document.getElementById('grid').style.opacity = '1';
        }}>Play</button>
      </div>
    )
}

export default Home;