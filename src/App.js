import React, { useState, useEffect } from 'react';
import SideBar from './Components/SideBar/SideBar';
import axios from "axios";
import CardList from './Components/CardList/CardList';
import './App.css'

function App() {
  
  const [collections, setCollections] = useState([])
  const [collection, setCollection] = useState(1)

  useEffect(() => {
      fetchCollections();
    }, []);
    
    const fetchCollections = async () => {
      let response = await axios.get("http://127.0.0.1:8000/api/collections/")
      console.log(response.data)
      setCollections(response.data)
    };



  return (
    <div>
      <SideBar parentCollections={collections} setCollection={setCollection}/>
      <CardList collectionId={collection}/>
    </div>
  );
}

export default App;
