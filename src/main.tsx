import React from 'react'
import ReactDOM from 'react-dom/client'
import NavBar from './components/navBar.tsx'
import Index from './components/index.tsx'
// import Fighters from './components/fighters.tsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <NavBar />
    <Index />
  </React.StrictMode>,
)