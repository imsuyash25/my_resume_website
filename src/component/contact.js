import React from 'react';
import '../styles/contact.css';
import {Contactbar} from './navbar.js';
import {Link} from 'react-router-dom';
import {BsFillArrowLeftSquareFill} from 'react-icons/bs';
import {SiGmail} from 'react-icons/si';
import {ImLocation} from 'react-icons/im';
import {BsPhoneFill} from 'react-icons/bs';

export default function Contact(){
    return (
        <>
          <body>
          <Contactbar/>
            <div className="container">
              <div className="content">
                <div className="left-side">
                  <div className="address details">
                    <i className="fas fa-map-marker-alt">{<ImLocation/>}</i>
                    <div className="topic">Address</div>
                    <div className="text-one">Jabalpur</div>
                    <div className="text-two">Madhya Pradesh, India <br></br>Pincode:482002 </div>
                  </div>
                  <div className="phone details">
                    <i className="fas fa-map-marker-alt">{<BsPhoneFill/>}</i>
                    <div className="topic">Phone</div>
                    <div className="text-one">6260602448</div>
                    <div className="text-two">7489475486</div>
                  </div>
                  <div className="email details">    
                    <i className="fas fa-map-marker-alt">{<SiGmail/>}</i>
                    <div className="topic">Mail </div>
                    <div className="text-one">
                    <a  href="mailto: asatisuyash@gmail.com" >Send Mail</a>
                    </div>
                  </div>
                </div>
                <div className="right-side">
                
                  <div className="topic-text">Send a message</div>
                  <p>If you have any work from me or any types of quries, you can send me message from here. It's my pleasure to help you.</p>
                
                <form action="https://formspree.io/f/xlekdvkb" method="POST">
                  <div className="input-box">
                    <input type="text"
                    name="username" placeholder="Enter your name" required/>
                  </div>
                  <div className="input-box">
                    <input type="email" name="Email" placeholder="Enter your email" required/>
                  </div>
                  <div className="input-box message-box">
                    <textarea name="message" cols="30" rows="6" placeholder="write message here" required></textarea>
                  </div>
                  <div className="button">
                    <input type="Submit" value="Send Now" />
                  </div>
                </form>
               
              </div>
            </div>
            <div className="backtohome">
              <Link to="/">{<BsFillArrowLeftSquareFill/>} Go Back</Link>
            </div>
            </div>
          </body>
        </>

    )
}