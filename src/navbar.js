import React from 'react';
import './navbar.css';
function Navbar(){

    return(
        <>
        <div className="Body">
        <details className='details'>
        <summary className='summary'></summary>
        <nav className="menu">
            <a href="#Home">Home</a>
            <a href="#link">Projects</a>
            <a href="#link">Skills</a>
            <a href="#link">Contact</a>
            <a href="#link">About</a>
        </nav>
        
        </details>
        </div>
        </>

    )
}
export default Navbar;