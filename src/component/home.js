import React from 'react';
import '../styles/styles.css';
import {useState} from 'react';
import myimg from '../images/myimage.jpg';
import Ipod from '../images/ipod.jpg';
import Bright from '../images/bright.png';
import {Navbar} from './navbar.js';
import dataSlider from './slider';
import {GoPrimitiveDot} from 'react-icons/go';
import {BsChevronCompactLeft, BsChevronCompactRight} from 'react-icons/bs';

function Home() {
    const [slideindex, setindex] = useState(1);

    function gotoprev(){
        if(slideindex !== 0 ){
            setindex(slideindex-1);
        }
        else{
            setindex(dataSlider.length-1);
        }
    }
    function gotonext(){
        if(slideindex === dataSlider.length-1) setindex(0);
        else setindex(slideindex+1);
    }
    

  return (
    <body>
    <Navbar/>
    <main id="Home" className="main-content">
      <section className='top-section'>
        <div className='leftarrow' onClick={gotoprev}> <BsChevronCompactLeft/> </div>
        <div className='rightarrow' onClick={gotonext}> <BsChevronCompactRight/> </div>
        <div className="dotslidercontainer">
            {dataSlider.map((item,index)=>(
                <div key={index} className={index===slideindex ? "dotstyle" : "dotslider"} onClick={()=>setindex(index)}> <GoPrimitiveDot/></div>
            ))}
        </div>
        <img src= {dataSlider[slideindex].img} className = "background"  alt ="" />
      </section>
        <section className="left-section">
            <div className="left-content">
                <div className="profile">
                    <div className="image">
                        <img src={myimg} alt =""/>
                    </div>
                    <h2 className="name">Suyash Asati</h2>
                    <p className="career">Frontend developer</p>
                    
                </div>
                <div className="contact-info">
                <div className="icons" >
                        <a title="Linkedin" href = "https://www.linkedin.com/in/suyash-asati-789ab3221" rel="noreferrer" target="_blank">
                         <img className="iconsmain" src="https://cdn-icons-png.flaticon.com/128/3536/3536505.png" alt="linkedin" /> </a>
                        <a title="github" href= "https://github.com/imsuyash25" rel="noreferrer" target="_blank">
                            <img className="iconsmain" src="https://cdn-icons-png.flaticon.com/512/3291/3291695.png" alt= "github" /></a>
                        < a title="instagram" href="https://www.instagram.com/imsuyash_25/?next=%2F" rel="noreferrer"target="_blank">
                        <img className="iconsmain" src="https://cdn-icons-png.flaticon.com/512/174/174855.png" alt="insta"/></a>
                        <a title="leetcode" href="https://leetcode.com/imsuyash_25/" rel="noreferrer"target="_blank">
                        <img className="iconsmain" 
                        src="https://cdn.iconscout.com/icon/free/png-256/leetcode-3521542-2944960.png?w=128&f=avif" alt="leetcode" />
                        </a>    
                        <a title="codechef" href="https://www.codechef.com/users/imsuyash_25" rel="noreferrer"target="_blank">    
                        <img className="iconsmain" src="https://img.icons8.com/ios-filled/2x/codechef.png" alt="codechef"/></a>
                        
                </div>
                    <br/><br/>
                    <h3 className="main-title">Communication</h3>
                    <ul>
                    <p className="skill-title">Hindi</p>
                    <br/>
                    <p className="skill-title">English</p>
                    </ul>
                </div>
                <div id="Skills" className="skills-section">
                    <h3 className="main-title">Skills</h3>
                    <ul>
                       
                        <li>
                            <p className="skill-title">C++</p>
                            <div className="progress-bar">
                                <div className="progress j-progress"></div>
                            </div>
                        </li>
                        <li>
                            <p className="skill-title">React.js</p>
                            <div className="progress-bar">
                                <div className="progress js-progress"></div>
                            </div>
                        </li>
                        <li>
                            <p className="skill-title">Data Structures</p>
                            <div className="progress-bar">
                                <div className="progress ps-progress"></div>
                            </div>
                        </li>
                        <li>
                            <p className="skill-title">Javascript</p>
                            <div className="progress-bar">
                                <div className="progress js-progress"></div>
                            </div>
                        </li>
                        <li>
                            <p className="skill-title">Python</p>
                            <div className="progress-bar">
                                <div className="progress c-progress"></div>
                            </div>
                        </li>
                        <li>
                            <p className="skill-title">html/css</p>
                            <div className="progress-bar">
                                <div className="progress ps-progress"></div>
                            </div>
                        </li>
                        <li>
                            <p className="skill-title">Git</p>
                            <div className="progress-bar">
                                <div className="progress ps-progress"></div>
                            </div>
                        </li>
                        <li>
                            <p className="skill-title">MYSql</p>
                            <div className="progress-bar">
                                <div className="progress ps-progress"></div>
                            </div>
                        </li>
                    </ul>
                </div>
                <div className="references-section">
                    <h3 className="main-title">Interest</h3>
                    <br></br>
                    <ul>
                    <p className="skill-title">Programming</p>
                    <br/>
                    <p className="skill-title">Computer Networking</p>
                    <br/>
                    <p className="skill-title">Web Development</p>
                    <br/>
                    </ul>
                </div>
            </div>
        </section>
        <section className="right-section">
            <div className="right-main-content">
                <section id="AboutMe" className="about sect">
                    <h2 className="right-title">About Me</h2>
                    <p className="para">
                    I am energetic and passionate college student working towards B.Tech in Computer Science at Shri Ram Institute of 
Technology. Ability to learn new software???s and technologies quickly. Aiming to use my knowledge that I have 
acquired from my coursework and with my hard work
                    </p>
                </section>
                <section className="education sect">
                    <h2 className="right-title">Education</h2>
                    <div className="timeline">
                        <div className="left-tl-content">
                            <h5 className="tl-title">Shri Ram Institute of Technology</h5>
                            <p className="para">2019 - 2023</p>
                            <p className="para">Jabalpur, India</p>
                        </div>
                        <div className="right-tl-content">
                            <div className="tl-content">
                                <h5 className="tl-title-2">Computer Science Engineering</h5>
                                <p className="para">CGPA : 8.59</p>
                            </div>
                        </div>
                    </div>
                    <br></br>
                    <div className="timeline">
                        <div className="left-tl-content">
                            <h5 className="tl-title">Govt. Model High Excellence School</h5>
                            <p className="para">2019</p>
                            <p className="para">Jabalpur, India</p>
                        </div>
                        <div className="right-tl-content">
                            <div className="tl-content">
                                <h5 className="tl-title-2">Higher Secondary</h5>
                                <p className="para">
                                    Percentage: 86.4%
                                </p>
                            </div>
                        </div>
                    </div>
                    <br></br>
                    <div className="timeline">
                        <div className="left-tl-content">
                        <h5 className="tl-title">Govt. Model High Excellence School</h5>
                            <p className="para">2017</p>
                            <p className="para">Jabalpur, India</p>
                        </div>
                        <div className="right-tl-content">
                            <div className="tl-content">
                                <h5 className="tl-title-2">High School</h5>
                                <p className="para">
                                    Percentage: 87.5%
                                </p>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="experince sect">
                    <h2 className="right-title">Certificates</h2>
                    <div className="timeline">
                        
                        <div className="right-tl-content">
                            <div className="tl-content">
                                <h5 className="tl-title-2">Python</h5>
                                <p className="para">
                                Programming Essentials in Python recognised by Cisco Networking Academy.
                                </p>
                                <a href="https://drive.google.com/file/d/1O5B9ekba8hB-FOrhb9IqSdjXYaKrW4on/view?usp=drivesdk" 
                                target="_blank" rel="noreferrer">See Here</a>
                            </div>
                        </div>
                    </div>
                    <div className="timeline">
                        <div className="right-tl-content">
                            <div className="tl-content">
                                <h5 className="tl-title-2">CCNAv:7 Introduction to Networks</h5>
                                <p className="para">
                                CCNAv:7 Introduction to Networks given by Cisco Network Academy.
                                </p>
                                <a href="https://drive.google.com/file/d/1NxFeKLt-VvAtHUiMF4hvu3WjU1NWZDaX/view?usp=drivesdk" 
                                target="_blank" rel="noreferrer">See Here</a>
                            </div>
                        </div>
                    </div>
                    <div className="timeline">
                        <div className="right-tl-content">
                            <div className="tl-content">
                                <h5 className="tl-title-2">MySql</h5>
                                <p className="para">
                                Introduction to Structure Query Language (SQL) from University of Michigan.
                                </p>
                                <a href="https://drive.google.com/file/d/1OI8USWc0Z3Z6Zc8aPqL3LdMv3tsWEGZh/view?usp=drivesdk"
                                 target="_blank" rel="noreferrer">See Here</a>
                            </div>
                        </div>
                    </div>
                    <div className="timeline">
                        <div className="right-tl-content">
                            <div className="tl-content">
                                <h5 className="tl-title-2">Javascript</h5>
                                <p className="para">JavaScript (Basic) Certification from HackerRank</p>
                                <a href="https://drive.google.com/file/d/1PR8R3NmWbH8R9mkqRbU9MjB5KzJVhDJM/view?usp=drivesdk"
                                 target="_blank" rel="noreferrer">See Here</a>
                            </div>
                        </div>
                    </div>
                </section>
                
                <section id="Projects" className="awards sect">
                    <h2 className="right-title">Projects</h2>
                    <div className="timeline">
                        <div className="left-tl-content">
                            <h5 className="tl-title">Brigth Way</h5>
                            <p className="para">Minor / Team Leader </p>
                            <br></br>
                            <p className="para">
                                ??? A websites to solve college students studies queries.
                                <br/>??? It contain drop box where anyone can put their queries and seniors can answer.
                                <br/>??? It is also contain Portfolio of passed students. <br/> ??? During the project used html ,CSS,JavaScript.
                                </p>
                                <a href="https://github.com/imsuyash25/Brights.git" target="_blank" rel="noreferrer">
                                    Look out Project</a>
                        </div>
                        <div className="right-tl-content">
                            <div className="tl-content">
                                <img className="project_img" src={Bright} alt="img"/>
                            </div>
                        </div>
                    </div>
                    <br/>
                    <div className="timeline">
                    <div className="left-tl-content">
                            <h5 className="tl-title">iPod</h5>
                            <p className="para">Mini App</p>
                            <br></br>
                            <p className="para">
                                ??? An application built using React.<br/>
                                ??? GUI designed using basic Html, CSS and 
                                JavaScript. <br/>
                                ??? Application functions like an iPod plays songs add 
                                lists.<br/>
                                </p>
                                <a href="https://imsuyash25.github.io/ipod_mini_react_app/" target="_blank" rel="noreferrer">
                                Look out Project</a>
                        </div>
                        <div className="right-tl-content">
                            <div className="tl-content">
                            <img className="project_img" src={Ipod} alt="img"/>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </section>
    </main>
  </body>
  );
}

export default Home;
