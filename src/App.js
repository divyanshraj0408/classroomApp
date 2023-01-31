import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Cards from './components/cards/cards';
import React from "react";
import Navbar from './components/navbar/navbar';
import Homepage from './components/homepage/homepage'
function App() {
  return (
    <div className="App">
      <Navbar />
      {/* <Cards/> */}
      <Homepage/>
    </div>
  );
}

export default App;
