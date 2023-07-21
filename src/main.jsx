import { LoadPage , loadPage } from './LoadPage.js'
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

LoadPage()

setTimeout(() => {
  ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
      <App />
    </React.StrictMode>,
  )
  
  loadPage.style.opacity = 0
  
  setTimeout(() => loadPage.style.display = 'none', 1500)
}, 2000)