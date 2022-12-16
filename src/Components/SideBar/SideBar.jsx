import axios from 'axios';
import React, { useState, useEffect } from 'react';
import Collection from "../Collection/Collection";

const SideBar = (props) => {
    const [collections, setCollections] = useState([])

    useEffect(() => {
        fetchCollections();
      }, []);
      
      const fetchCollections = async () => {
        let response = await axios.get("http://127.0.0.1:8000/api/collections/")
        console.log(response.data)
        setCollections(response.data)
      };

    return ( 
        <Collection parentCollections={collections}/>
     );
}
 
export default SideBar;