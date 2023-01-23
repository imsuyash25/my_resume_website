import React from 'react';
import './App.css';
import './styles/styles.css';
import Contact from './component/contact.js';
import Home from './component/home.js';
import {BrowserRouter as Router , Routes, Route} from 'react-router-dom';

function App() {
  return (
    <div classNameName="App">
    <Router basename="/my_resume_website">
        <Routes>
            <Route path ="/" element ={<Home/>}/>
            <Route path="/contact" element={<Contact/>}/>
        </Routes>
    </Router>
    </div>
  );
}

export default App;
