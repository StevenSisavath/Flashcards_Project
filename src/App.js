import React, { useState, useEffect } from 'react';
import SideBar from './Components/SideBar/SideBar';
import axios from "axios";
import CardList from './Components/CardList/CardList';
import './App.css'

function App() {
  const [flashcards, setFlashcards] = useState([])
  const [collections, setCollections] = useState([])
  const [collection, setCollection] = useState(0)

  useEffect(() => {
      fetchCollections();
    }, []);
    
    const fetchCollections = async () => {
      let response = await axios.get("http://127.0.0.1:8000/api/collections/")
      console.log(response.data)
      setCollections(response.data)
    };

    useEffect(() => {
      fetchCards();
    }, []);
  
    const fetchCards = async () => {
      let response = await axios.get('http://127.0.0.1:8000/api/collections/1/cards/')
      console.log(response.data)
      setFlashcards(response.data)
    }

    function selectCollection(collection){
      const selectedCollection = collection
      setCollection(selectedCollection)
    }

  return (
    <div>
      <SideBar parentCollections={collections} selectCollection={selectCollection}/>
      <CardList flashcards = {flashcards} />
    </div>
  );
}

export default App;
