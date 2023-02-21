import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import picture from "./assets/pictures/myProject.jpg"

function App() {
  

  return (
    <div className="hero-container">
      <div className='hero-titles'>
        <div>The Wedding Of</div>
        <h1>LEO</h1>
        <h3>&</h3>
        <h1>DESY</h1>
        <h3>22 • OCTOBER • 2022</h3>
        <button>View Invitation Details</button>
      </div>
      <div className='invitation-details'>
        <p className="invitation-details-opening">We warmly request the pleasure of your company at:</p>
        <h2>WEDDING RECEPTION</h2>
        <h3>HABITATE JAKARTA</h3>
        <p>Jl. Setia Budi Utara Raya No. 5, Kuningan, Karet Kuningan, Jakarta, Kota Jakarta Selatan, Daerah Khusus Ibukota Jakarta 12920</p>
        <button>Show at Google Maps</button>
        <h3>Saturday, 22 October 2022</h3>
        <h3>At: 17:30-19:30</h3>
      </div>
      <div>
        
      </div>
    </div>
  )
}

export default App
