import React from 'react'






function DesignScroller(){
    return(
      <div className='scroller-container'>
        <div className='scroller'>
          <figure className='scroller-btn'>
            <img src='src\imgs\arrow.png'></img>
          </figure>
  
          <figure id='design-container'>
            <img src='src\imgs\sukuna.png' id='design-image'></img>
          </figure>
  
          <figure className='scroller-btn'>
            <img src='src\imgs\arrow2.png'></img>
          </figure>
        </div>
  
        <figure id='checkmark'>
          <img src='src\imgs\checkmark.png'></img>
        </figure>
      </div>
    )
  }



function Navegation(){
    return(
      <section id='nav-container'>
  
          <section id='responsive-buttons'> 

            <a href='#nav' id='open'>
              <figure className='nav-main-btn'>
                <img 
                src='src\imgs\burger.png'  
                onClick={()=>{
                  document.getElementById('close').style.display = 'block';
                  document.getElementById('open').style.display = 'none';
  
                  document.getElementById('nav').style.display = 'flex';
                  document.getElementById('nav').style.height = '100vh';
                  document.getElementById('nav').style.opacity = '1';
  
                  document.getElementById('main').style.display = 'none';
                }}
                ></img>
              </figure>
            </a>
            
            <a href='#' id='close'>
              <figure className='nav-main-btn'>
                <img src='\src\imgs\close.png' 
                onClick={()=>{
                  document.getElementById('open').style.display = 'block';
                  document.getElementById('close').style.display = 'none';
  
                  document.getElementById('nav').style.opacity = '0';
                  document.getElementById('main').style.display = 'flex';
                }}
                ></img>
              </figure>
            </a>

          </section>
  


          <nav id='nav'>
            <ul className='nav-content' id='btn-container'>
  
              <h2>LOGO TITLE</h2>
  
              <li>
                <button className='nav-buttons' onClick={()=>{
                  document.getElementById('btn-container').style.display = 'none'
                  document.getElementById('design').style.display = 'flex'
                }}>Diseño</button>
              </li>
  
              <li>
                <button className='nav-buttons' onClick={()=>{
                  document.getElementById('btn-container').style.display = 'none'
                  document.getElementById('music').style.display = 'flex'
                }}>Musica</button>
              </li>
  
              <li>
                <button className='nav-buttons' onClick={()=>{
                  document.getElementById('btn-container').style.display = 'none'
                  document.getElementById('credits').style.display = 'flex'
                }}>Creditos</button>
              </li>
            </ul>
  
            <div className='nav-content' id='design'>
                
              <figure className='back-to-menu' onClick={()=>{
                document.getElementById('design').style.display = 'none'
                document.getElementById('btn-container').style.display = 'flex'
              }}>
                <img src='src\imgs\arrow.png'></img>
              </figure>
  
              <h2>Diseños</h2>
  
              <DesignScroller></DesignScroller>
  
            </div>
  
            <div className='nav-content' id='music'>

              <figure className='back-to-menu' onClick={()=>{
                  document.getElementById('music').style.display = 'none'
                  document.getElementById('btn-container').style.display = 'flex'
                }}>
                <img src='src\imgs\arrow.png'></img>
              </figure>
  
              <h2>Musica</h2>
  
            </div>
  
            <div className='nav-content' id='credits'>
  
              <figure className='back-to-menu' onClick={()=>{
                  document.getElementById('credits').style.display = 'none'
                  document.getElementById('btn-container').style.display = 'flex'
                }}>
                <img src='src\imgs\arrow.png'></img>
              </figure>

              <h2>Creditos</h2>
  
            </div>

          </nav>
        </section>
    )
  }


  export default Navegation