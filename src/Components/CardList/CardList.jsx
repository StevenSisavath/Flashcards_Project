import React, { useState, useEffect } from 'react';
import Card from "../Card/Card";
import axios from 'axios';

const CardList = (props) => {
    const [flashcards, setFlashcards] = useState([])

    useEffect(() => {
        fetchCards();
      }, [props.collectionId]);
    
      const fetchCards = async () => {
        let response = await axios.get(`http://127.0.0.1:8000/api/collections/${props.collectionId}/cards/`)
        console.log(response.data)
        setFlashcards(response.data)
      }
      
    return ( 
        <div>
            {flashcards.map(flashcard => {
                return <Card flashcard= {flashcard} key={flashcard.id}/>
            })}
        </div>
     );
}
 
export default CardList;