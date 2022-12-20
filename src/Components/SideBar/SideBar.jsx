import React, { useState } from 'react';


const SideBar = (props) => {
    const[collectionId, setCollectionId]= useState(0)

    function handleSubmit(event){
        event.preventDefault();
        props.selectCollection(collectionId)
    }

    return ( 
        <div onSubmit={handleSubmit}>
          {props.parentCollections.map((collection) => {
              return (
                <div key={collection.id}>
                  <div>{collection.id}</div>
                  <button type='submit' onChange={(event) => setCollectionId(event.target.value)}>{collection.title}</button>
                </div>
              );
          })}
        </div>
     );
}
 
export default SideBar;