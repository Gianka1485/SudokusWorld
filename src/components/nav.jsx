import React, { Children } from 'react'
import './nav.css'


function NavButton({_class, _id, source, press}){
  return(
    <figure className={_class} id={_id}>
      <img src={source} onClick={press}></img>
    </figure>
  )
}


function SubMenu({_id, title, children}){
  return(
    <div className='nav-content' id={_id}>

      <figure className='back-to-menu' onClick={()=>{
        document.getElementById(_id).style.display = 'none'
        document.getElementById('btn-container').style.display = 'flex'
      }}>
        <img src='src\imgs\arrow.png'></img>
      </figure>
  
      <h2 className='submenu-title'>{title}</h2>

      {children}
  
    </div>
  )
}


function Scroller({containerId, checkmarkId, children}){
    return(
      <div className='scroller-container'>

        <div className='scroller'>

          <NavButton _class='scroller-btn' source='src\imgs\arrow.png'></NavButton>

          <NavButton _class='content-container' _id={containerId} source='src\imgs\sukuna.png'></NavButton>

          <NavButton _class='scroller-btn' source='src\imgs\arrow2.png'></NavButton>

        </div>

        <div className='scroller-bottom'>
          <NavButton _class='checkmark' _id={checkmarkId} source='src\imgs\checkmark.png'></NavButton>

          {children}
        </div>
      </div>
    )
  }


function Navegation(){
    return(
      <section id='nav-container'>
  
          <section id='responsive-buttons-container'> 

            <a href='#nav' id='open'>
              <NavButton _class='nav-main-btn' source='src\imgs\burger.png'
                press={()=>{
                  document.getElementById('close').style.display = 'block';
                  document.getElementById('open').style.display = 'none';
  
                  document.getElementById('nav').style.display = 'flex';
                  document.getElementById('nav').style.height = '100vh';
                  document.getElementById('nav').style.opacity = '1';
  
                  document.getElementById('main').style.display = 'none';
                }}
              ></NavButton>
            </a>
            
            <a href='#' id='close'>
              <NavButton _class='nav-main-btn' source='src\imgs\close.png'
                press={()=>{
                  document.getElementById('open').style.display = 'block';
                  document.getElementById('close').style.display = 'none';
  
                  document.getElementById('nav').style.opacity = '0';
                  document.getElementById('main').style.display = 'flex';
                }}
              ></NavButton>
            </a>

          </section>
  


          <nav id='nav'>
            <ul className='nav-content' id='btn-container'>
  
              <figure id='logo-container'>
                <img id='logo' src='\src\imgs\title.svg'></img>
              </figure>
  
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

            
            <SubMenu _id='design' title='Design' containerId='design-container' checkmarkId='design-checkmark' children={<Scroller></Scroller>}></SubMenu>

            <SubMenu _id='music' title='Music' containerId='music-container' checkmarkId='music-checkmark' children={
              <Scroller children={
                <>
                  <NavButton _id='play-music-btn' source='src\imgs\play.png' 
                    press={()=>{
                      document.getElementById('pause-music-btn').style.display = 'flex';
                      document.getElementById('play-music-btn').style.display = 'none';
                    }}
                  >
                  </NavButton>

                  <NavButton _id='pause-music-btn' source='src\imgs\pause.png'
                    press={()=>{
                      document.getElementById('pause-music-btn').style.display = 'none';
                      document.getElementById('play-music-btn').style.display = 'flex';
                    }}
                  ></NavButton>
                </>
              }></Scroller>}></SubMenu>

            <SubMenu _id='credits' title='Credits'></SubMenu>

          </nav>
        </section>
    )
  }


  export default Navegation