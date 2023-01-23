import React from 'react';
import './App.css';
import './styles.css';
import Navbar from './navbar.js';
import Contact from './contact.js';
import Home from './home';
import {BrowserRouter as Router , Routes, Route} from 'react-router-dom';

function App() {
  return (
    <div classNameName="App">
    <Router>
        <Routes>
            <Route path ="/" element ={<Home/>}/>
            <Route path="/contact" element={<Contact/>}/>
        </Routes>
    </Router>
    </div>
  );
}

export default App;
