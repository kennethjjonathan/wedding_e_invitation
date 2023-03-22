import { useState } from "react"
import { db } from "../firebase-config";
import { collection, addDoc } from "firebase/firestore";

function Form() {
    const [newName, setNewName] = useState("");
    const [newPax, setNewPax] = useState(1);
    const [newWish, setNewWish] = useState("");
    const rsvpCollectionRef = collection(db, "RSVPs");

    const createRSVP = async (e) => {
        e.preventDefault();
        addDoc(rsvpCollectionRef, { Name: newName, Pax: newPax, Wish: newWish });
        e.target.reset();
    }

    return (
        <form className='forms-container' onSubmit={createRSVP}>
          <div className="forms-container-name">
            <input type="text" id="name" onChange={event => {setNewName(event.target.value)}} required />
            <label className="forms-container-name-label" htmlFor="name">
              <span className="forms-container-name-label-span">Name</span>
            </label>
          </div>
          <div className="forms-select">
            <select value={newPax} onChange={e => setNewPax(e.target.value)} required>
              <option value="1">1</option>
              <option value="2">2</option>
            </select>
            <label className="form-select-label" htmlFor="pax">Number of pax:</label>
          </div>
          <div className="forms-wish">
            <textarea className="forms-wish-textarea" id="wish" autoComplete='off' onChange={event => {setNewWish(event.target.value)}} />
            <label className="forms-wish-label" htmlFor="wish">Your wishes:</label>
          </div>
          <div className='forms-submit'>
            <input type="submit"/>
          </div>
        </form>
    )
}

export default Form