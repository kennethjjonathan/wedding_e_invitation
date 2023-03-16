import { useRef } from 'react'
import './App.css'
import videoBG from "./assets/trimmedVideoBG.mp4"
import video1 from "./assets/video1.mp4"
import video2 from "./assets/video2.mp4"

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
        <video src={videoBG} autoPlay loop muted playsInline className='hero-videoBG'/>
        <div className='overlay' />
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
        <p className="invitation-details-opening">We kindly request the pleasure of your company at:</p>
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
      <section className="groom-bride">
        <h3>The Groom</h3>
        <div className='groom-bride-container'>
          <div className='groom-photo' />
          <div className='groom-bride-details'>
            <h1>LEO</h1>
            <p>First son of</p>
            <h3>Mr. XXX</h3>
            <p>&</p>
            <h3>Mrs. XXX</h3>
          </div>
        </div>
        <div className='groom-bride-spacing' />
        <h3 className='bride-title'>The Bride</h3>
        <div className="groom-bride-container">
          <div className='groom-bride-details'>
            <h1>DESY</h1>
            <p>First daughter of</p>
            <h3>Mr. XXX</h3>
            <p>&</p>
            <h3>Mrs. XXX</h3>
          </div>
          <div className='bride-photo' />
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
      <section className='mosaic'>
        <div className="grid">
          <div className='content one'>
          </div>
          <div className='content two'>
          </div>
          <div className='content three'>
            <video src={video1} autoPlay muted loop playsInline />
          </div>
          <div className='content four'>
          </div>
          <div className="content five">
          </div>
          <div className="content six">
          </div>
          <div className="content seven">
          </div>
          <div className='content eight'>
            <video src={video2} autoPlay muted loop playsInline />
          </div>
        </div>
      </section>
      <section className="ending">
        <h3>
          "There is only that moment, and the incredible certainty that everything under the sun has been written by one hand only. 
          It is the hand that evokes love, and creates a twin soul for every person in the world. 
          Without such love, one's dreams would have no meaning."
        </h3>
        <h3>-</h3>
        <h3>Paulo Coelho, <i>The Alchemist</i> (New York: HARPER, 2014), 96.</h3>
      </section>
    </div>
  )
}

export default App