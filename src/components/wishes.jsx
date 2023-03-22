import { useState, useEffect } from 'react'
import { db } from "../firebase-config";
import { collection, getDocs } from "firebase/firestore";

function Wishes() {
    const [wishes, setWishes] = useState([]);
    const rsvpCollectionRef = collection(db, "RSVPs");

    useEffect(() => {
        const getWishes = async () => {
          const data = await getDocs(rsvpCollectionRef);
          setWishes(data.docs.map(doc => ({ ...doc.data(), id: doc.id })))
        };
    
        getWishes();
    }, []);    
    
    <div>
          {wishes.map(element => {
            return (
              <div key={element.id}>
                <h1>Name: {element.Name}</h1>
                <h1>Pax: {element.Pax}</h1>
                <h1>Wishes: {element.Wish}</h1>
              </div>
            )
          })}
    </div>
}

export default Wishes;