import React, { useState } from 'react';

const Card = (props) => {
    const [flip, setFlip] = useState(false)

    return ( 
        <div className='container'>
            <button>Add</button>
            <div className = {`card ${flip ? 'flip' : ''}`} 
            onClick={() => setFlip(!flip)}>
                <div>
                    <div>   
                        {flip ? <div>{props.flashcard.word}</div> : <div>{props.flashcard.definition}</div>}
                    </div>
                    <div>
                        <button onClick='deleteCard'>Delete</button>
                        <button onClick='editCard'>Edit</button>
                    </div> 
                </div> 
            </div>
            
        </div>
     );
}
 
export default Card;