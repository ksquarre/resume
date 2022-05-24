import './Home.css'
import {Link} from 'react-router-dom'

import HelloSVG from '../svg/hello'
import Design from '../svg/design'
import Movie from '../svg/movie'
import Code from '../svg/code'
const Home = () => {
    return ( 
        <>
       
        <main className="main-box">
       
            <div className="svg">
                
            <HelloSVG/>
            </div>
        
        <div className="content">
            <h1>Hi I'm <span> Kahkasha Khan </span></h1>
            <h3> A MERN Stack Developer </h3>
            <p>
                Welcome to my digital home. Lets take a tour of my journey,

                 I hope you'll enjoy your time here.
            </p>

            <div className="about">
                <Link  to='/About'>
                Learn More!
                </Link>
            </div>
            
            
           
        </div>

        </main>
        {/* <div className="bubbles"></div> */}
        <section className="projects">
            <h1 className='header'>projects</h1>
            <div className="cards">
                <div className="card-box">
                    <div className="img">
                            <img src={require('../img/weatherapp.png')} alt="weather-app" />
                    </div>
                    <div className="card-content">
                        <h2>Weather App</h2>
                        <p>I created a weather app using the OpenWeatherMap API. I used css transition and animations to design it,
                             I had a really fun time building this app. 
                            
                        </p>
                        <a href="https://ksquarre.github.io/weather-app/"className="see">See Here</a>
                        
                        <p> <span>Language Used : </span>
                            Html, css, javascript</p>
                        
                        <a href="https://github.com/ksquarre/weather-app"className='btn'>Source code</a>
                    </div>
                    <div className="design"></div>
                </div>
                <div className="card-box">
                    <div className="design"></div>
                    <div className="img2">
                    <img src={require('../img/student.png')} alt="student-app" />
                    </div>
                    <div className="card-content">
                    <h2> Student Management</h2>
                        <p>A backend project for managing students. Here I've used node.Js and MonogoDB. I made several web apis to
                            perform all the CRUD operations. Moreover I used JWT Authentication to generate tokens. 
                            you can test this project using PostMan.
                        </p>

                        
                        <p> <span>Language/Database Used : </span>
                            Node.Js, MongoDB</p>

                        <a href="https://github.com/ksquarre/student-management"className='btn'>Source code</a>
                        
                    </div>
                   
                </div>
                <div className="card-box">
                <div className="img2">
                            <img src={require('../img/uniapp.png')} alt="university-app" />
                    </div>
                    <div className="card-content">
                        <h2> University Website</h2>
                        <p>
                            A single Page sample university website. I made this website to further enhance my frontend skills 
                            using HTMl,CSS and Javascript and to make a responsive design.
                            
                        </p>
                        <a href="https://ksquarre.github.io/uni-web/" className="see">See Here</a>
                        
                        <p> <span>Language Used : </span>
                            Html, css, javascript</p>
                           
                        <a href="https://github.com/ksquarre/uni-web"className='btn'>Source code</a>
                    </div>
                    <div className="design"></div>
                </div>
                
            </div>
            
        </section>
        <section className="interests">
            <h1 className='header'>My Interests</h1>
            <div className="sub-int">
            <div className="int-box">
                <div className="svg-box">
                <Design></Design>
                </div>
                <div className="svg-content">
                    <h3>Building Projects</h3>
                    <p>If you coudn't guess already, allow me the honor to reveal the fact that i love designing 
                        and animating websites!!
                    </p>
                </div>
            </div>
            <div className="int-box">
                <div className="svg-box">
                <Movie></Movie>
                </div>
                <div className="svg-content">
                    <h3>Binging Shows</h3>
                    <p>
                        I mean, who doesn't love watching movies? I love binge watching shows whenever i 
                        get some free time on my hands. 
                    </p>
                </div>
            </div><div className="int-box">
                <div className="svg-box">
                <Code></Code>
                </div>
                <div className="svg-content">
                    <h3>Peer Programming</h3>
                    <p>
                        I like to solve problems with my peers. 
                        Its a great learning exercise and always better than coding alone.       </p>
                </div>
            </div>
           
            </div>
        </section>
        <section className="end">
            <h1 className="header">Resume</h1>
            <p>If You Want to Know More about my professional background, download my resume from below</p>
            <Link to="/files/resume.pdf"target="_blank" className='btn' download> Download</Link>
        </section>
        <footer>
        Copyright © Kahkasha Khan
        </footer>
       
        </>
     );
}
 
export default Home;