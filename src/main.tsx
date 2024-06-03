import React from 'react'
import ReactDOM from 'react-dom/client'
import NavBar from './components/NavBar.tsx'
import Landing from './components/Landing.tsx'
// import Fighters from './components/fighters.tsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <NavBar />
    <Landing />
  </React.StrictMode>,
)