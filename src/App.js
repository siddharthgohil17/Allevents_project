import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/header';
import HomePage from './pages/home';
import AddEventForm from './pages/addevent';

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/addevent" element={<AddEventForm/>}/>
         
        </Routes>
      </Router>
    </div>
  );
}

export default App;
