import React from 'react'
import ReactDOM from 'react-dom/client'
import NavBar from './components/navBar.tsx'
import App from './components/App.tsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <NavBar />
    <App />
  </React.StrictMode>,
)