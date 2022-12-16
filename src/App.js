import React, { useState, useEffect } from 'react';
import SideBar from './Components/SideBar/SideBar';
import axios from "axios";
import CardList from './Components/CardList/CardList';


function App() {
  const [flashcards, setFlashcards] = useState([])

  useEffect(() => {
    fetchCards();
  }, []);

  const fetchCards = async () => {
    let response = await axios.get('http://127.0.0.1:8000/api/collections/1/cards/')
    console.log(response.data)
    setFlashcards(response.data)
  }

  return (
    <div>
      <SideBar/>
      <CardList flashcards = {flashcards} />
    </div>
  );
}

export default App;
