import './about.css'
import { FaGithubSquare } from "react-icons/fa"; 

import { FaLinkedin } from "react-icons/fa"; 
const About = () => {
    return ( 
        <>

            <div className="about-section">
                <div className="about-box">
                <div className="img-box">
                    <div className="circle">
                        <img src={require('../img/aboutImg.png')} alt="" />
                    </div>
                    <div className="short-intro">
                        <h4>Kahkasha Khan</h4>
                        <p>3<sup>rd</sup> year student at JMI, Delhi.</p>
                     

                    </div>
                </div>
                <div className="about-content">
                    <p>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. 
                    Quidem voluptatem id explicabo numquam molestiae laborum perspiciatis iste qui blanditiis repellendus. 
                    Iure debitis ad deleniti cupiditate optio voluptatem accusantium sint fugiat.
                    </p>
                    <p className='or con'>Connect</p>
                    <div className="social-links">
                  <a href="https://github.com/ksquarre" target='_blank'> <FaGithubSquare/></a> 
                  <a href="https://www.linkedin.com/in/kahkashakhan6799/" target='_blank'><FaLinkedin/></a>  
                    
                 </div>
                </div>

                
                </div>
               
               
                <footer>
        Copyright © Kahkasha Khan
        </footer>
            </div>
          
            
        </>
        
     );
}
 
export default About;