import { useRef } from 'react'
import './App.css'

import ImageSlider from './Components/ImageSlider';

function App() {
  
  const invitationDetails = useRef(null);

  const scrollToSection = (ref) => {
    window.scrollTo({
      top: ref.current.offsetTop,
      behavior: "smooth"
    })
  }

  return (
    <div>
      <section className='hero'>
        <div className='hero-titles'>
          <h2>The Wedding Of</h2>
          <h1>LEO</h1>
          <h3>&</h3>
          <h1>DESY</h1>
          <h3>22 • FEBRUARY • 2023</h3>
          <button onClick={() => scrollToSection(invitationDetails)}>View Invitation Details</button>
        </div>
      </section>
      <section ref={invitationDetails} className='invitation-details'>
        <p className="invitation-details-opening">We warmly request the pleasure of your company at:</p>
        <div className="invitation-details-place">
          <h2>HABITATE JAKARTA</h2>
          <p>Jl. Setia Budi Utara Raya No. 5, Kuningan, Karet Kuningan, Jakarta, Kota Jakarta Selatan, Daerah Khusus Ibukota Jakarta 12920</p>
          <a href="https://goo.gl/maps/GrF1xpXTWiYcBvbo7" target="_blank" rel="noopener noreferrer"><button>View in Google Maps</button></a>
        </div>
        <div className="invitation-details-date">
          <h2>Saturday, 22 FEBRUARY 2023</h2>
          <h3>Holy Matrimony at: 15:30-16:30</h3>
          <h3>Reception Ceremony at: 17:30-19:30</h3>
        </div>
      </section>
      <section className='forms'>
        <h2 className="forms-title">RSVP</h2>
        <form className='forms-container'>
          <div className="forms-container-name">
            <input type="text" id="name" required />
            <label className="forms-container-name-label" htmlFor="name">
              <span className="forms-container-name-label-span">Name</span>
            </label>
          </div>
          <div className="forms-select">
            <select id="pax" required>
              <option value="1">1</option>
              <option value="2">2</option>
            </select>
            <label className="form-select-label" htmlFor="pax">Number of pax:</label>
          </div>
          <div className="forms-wish">
            <textarea className="forms-wish-textarea" id="wish" autoComplete='off'/>
            <label className="forms-wish-label" htmlFor="wish">Wish:</label>
          </div>
          <div className='forms-submit'>
            <input type="submit" />
          </div>
        </form>
      </section>
      <section className='gallery'>
        <ImageSlider />
      </section>
      <section className="work-in-progress">
        <h3>
          There is only that moment, and the incredible certainty that everything under the sun has been written by one hand only. 
          It is the hand that evokes love, and creates a twin soul for every person in the world. 
          Without such love, one's dreams would have no meaning.
        </h3>
      </section>
    </div>
  )
}

export default App