import React from 'react'
import ReactDOM from 'react-dom/client'
import NavBar from './navBar.tsx'
import App from './App.tsx'
import './index.css'
// import './fonts/snes/SnesItalic-1G9Be.ttf';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <NavBar />
    <App />
  </React.StrictMode>,
)
