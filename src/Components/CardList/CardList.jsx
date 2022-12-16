import React from "react";
import Card from "../Card/Card";

const CardList = (props) => {
    return ( 
        <div>
            {props.flashcards.map(flashcard => {
                return <Card flashcard= {flashcard} key={flashcard.id}/>
            })}
        </div>
     );
}
 
export default CardList;