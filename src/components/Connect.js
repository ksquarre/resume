import './connect.css'
import Car from '../svg/car';
import emailjs from 'emailjs-com';
import { useState } from 'react';
import { FaGithubSquare } from "react-icons/fa"; 

import { FaLinkedin } from "react-icons/fa"; 
const Connect = () => {
    const[val_btn,changeBtn]=useState('Send');
    const[user_name,changeName]=useState('');
    const[email,changeEmail]=useState('');
    const[subject,changeSubject]=useState('');
    const[message,changeMessage]=useState('');
    const[err,changeErr]=useState('');
    const[show,changeShow]=useState(false);
    const[green,changeGreen]=useState(false);
  
    const sendEmail=(e)=>{
        e.preventDefault()

        if(!(user_name&&email&&subject&&message)){
            console.log("kindly fill all the fields")
            changeErr("Kindly Fill All Fields");
            changeGreen(false)
            changeShow(true);

        }else{
            //use regex expression to validify email
           
            changeBtn("Sending..")
            console.log("printing e.target")
            console.log(e.target)
            emailjs.sendForm('service_1ib3oo2','template_2fuot6w',e.target,'3JNL34Vrna9Jovwh4')
            .then(res=>{
                changeGreen(true)
                console.log(res)
                changeErr("Sent Successfully!");
                changeShow(true)
               
                changeBtn("Send");
            }).catch(err=>{
                console.log(err)
                changeGreen(false)
                changeErr("Couldn't Send. Please try again.");
                changeShow(true)
             
                changeBtn("Send");
            })
        }

    }
    return ( 
        <>
        <div className="connect">
        
        <div className="connect-links">
            <h2>Connect With Me!</h2>
            <p>If you want to hire, collaborate or have doubts regarding anything
                feel free to contact me on any of the platforms mentioned below
            </p>
            <div className="form-div">
                {/* <p>Write a Mail !</p> */}
                <form className='form' onSubmit={sendEmail}>
                    <div className="inp"> <label >name :</label>
                    <input type="text" name='name' value={user_name} 
                    onChange={(e)=> {
                        changeName(e.target.value) ;
                        changeShow(false)
                    }
                    } 
                    placeholder='Enter your name'/>
                   </div>
                    <div className="inp"><label >email :</label>
                    <input type="email" name='email' value={email}
                    onChange={(e)=> {changeEmail(e.target.value); changeShow(false)}} 
                    placeholder='Enter your email address' />
                   </div>
                   <div className="inp"> <label >Subject :</label>
                    <input type="text" name='name'value={subject}
                     onChange={(e)=>{changeSubject(e.target.value);changeShow(false)} } 
                    placeholder='Enter the subject of your mail'/>
                   </div>
                    <div className="inp"> <label >Message :</label>
                    <textarea name="message" value={message} rows="1" 
                     onChange={(e)=> {changeMessage(e.target.value);changeShow(false)}} 
                    placeholder='Write your mail here'></textarea>
                        </div>
                        {show && <div className={green ? "green" : "err"}>{err}</div>}
                    <input type="submit" value={val_btn} className='btn'/>
                </form>
               
            </div>
            <p className='or'>or</p>
            <div className="social-links">
                  <a href="https://github.com/ksquarre" target='_blank'> <FaGithubSquare/></a> 
                  <a href="https://www.linkedin.com/in/kahkashakhan6799/" target='_blank'><FaLinkedin/></a>  
                    
           </div>
        </div>
        <div className="contain-svg">
            <Car></Car>
        </div>
        </div>
        
        <footer>
        Copyright © Kahkasha Khan
        </footer>

        </>
     );
}
 
export default Connect;