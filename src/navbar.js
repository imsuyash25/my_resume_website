import React from 'react';
import {useState} from 'react';
import './navbar_style.css'
import {Link} from 'react-router-dom';

export function Navbar(){
    const [toggle, setTog] = useState(false);

    function handle(e){
        e.preventDefault();
        setTog(!toggle);
    }

    return(
        <>
        <nav className ="main-nav">
            <div className ="logo">
                <h2><span>S</span>UYASH 
                <span>A</span>SATI</h2>
            </div>
            {
                <div className={toggle? "mobile-menu-link" :"menu-link"}>
                    <ul>
                        <li>
                            <Link to="/"> Home</Link>
                        </li>
                        <li>
                            <a href="#Projects">Projects</a>
                        </li>
                        <li>
                            <a href="#Skills">Skills</a>
                        </li>
                        <li>
                            <a href="#AboutMe"> About</a>
                        </li>
                        <li>
                            <Link to="/contact">Contact</Link>
                        </li>
                    </ul>
                </div>
            }

                <div className="hamburger-menu">
                    <a href="#" onClick={handle} >
                    <img src="https://t3.ftcdn.net/jpg/01/09/45/80/240_F_109458015_QsWmchlzuwCZPqIUWR7HcTDsbbptejRv.jpg" alt=""/>
                    </a>
                </div>
        </nav>
        </>
    )
}

export function Contactbar(){
    return(
        <>
        <nav className ="main-nav">
            <div className ="logo">
                <h2><span>S</span>UYASH 
                <span>A</span>SATI</h2>
            </div>
        </nav>
        </>
    );
}
