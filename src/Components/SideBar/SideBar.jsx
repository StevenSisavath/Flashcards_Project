import React, { useEffect } from 'react';


const SideBar = (props) => {

  useEffect(()=>{
    console.log("PROPS IN X COMPONENT: ",props)
  },[props])

    function handleClick(collection){
      props.setCollection(collection.id)
    }

    return ( 
        <div className='sidebar'>
          {props.parentCollections.map((collection) => {
              return (
                <div key={collection.id}>
                  <h1 onClick={()=>handleClick(collection)}>{collection.title}</h1>
                </div>
              );
          })}
        </div>
     );
}
 
export default SideBar;
