import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import picture from "./assets/pictures/myProject.jpg"

function App() {
  

  return (
    <div className="hero-container">
      <section className='hero-titles'>
        <div>The Wedding Of</div>
        <h1>LEO</h1>
        <h3>&</h3>
        <h1>DESY</h1>
        <h3>22 • OCTOBER • 2022</h3>
        <button>View Invitation Details</button>
      </section>
      <section className='invitation-details'>
        <p className="invitation-details-opening">We warmly request the pleasure of your company at:</p>
        <div className="invitation-details-place">
          <h2>HABITATE JAKARTA</h2>
          <p>Jl. Setia Budi Utara Raya No. 5, Kuningan, Karet Kuningan, Jakarta, Kota Jakarta Selatan, Daerah Khusus Ibukota Jakarta 12920</p>
          <a href="https://goo.gl/maps/GrF1xpXTWiYcBvbo7" target="_blank"><button>View in Google Maps</button></a>
        </div>
        <div className="invitation-details-date">
          <h2>Saturday, 22 October 2022</h2>
          <h3>Holy Matrimony at: 15:30-16:30</h3>
          <h3>Reception Ceremony at: 17:30-19:30</h3>
        </div>
      </section>
      <div>
        
      </div>
    </div>
  )
}

export default App
