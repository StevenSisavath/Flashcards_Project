import React, { useState } from 'react';

const Card = (props) => {
    const [flip, setFlip] = useState(false)

    return ( 
        <div>
            <div className = {`card ${flip ? 'flip' : ''}`} onClick={() => setFlip(!flip)}>
                <div>
                    {props.flashcard.word}
                </div>
                <div>
                    {props.flashcard.definition}
                </div>
            </div>
            <br></br>
        </div>
     );
}
 
export default Card;