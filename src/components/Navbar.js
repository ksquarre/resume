import './Navbar.css'
import { useState } from 'react'
import { FiMenu } from "react-icons/fi"; 
import { FiX } from "react-icons/fi";

import {Link} from 'react-router-dom'
const Navbar = () => {
    const [click,setClick]=useState(false)
    const changeMenu=()=>{
        setClick(!click)
    }
    
    return ( 
        <>
      
        <nav className="navbar">
                <div className="logo">
                <Link to='/'> <img src={require('../img/logo.png')} alt="logo" /></Link>
                   
                </div>
                {!click && <FiMenu onClick={changeMenu} className="icon"/>}
                {click && <FiX onClick={changeMenu}  className="icon"/>}
                {/* <i className={click ? 'fa fa-close' : 'fa fa-bars'} onClick={changeMenu}></i> */}
                <div className={click ? 'links active' : 'links'} onClick={changeMenu}>
                   
                    <ul className='list'>
                        <li> <Link to='/'>Home</Link></li>
                        <li> <Link to='/Connect'>Connect</Link></li>
                        <li> <Link to='/About'>About</Link></li>
                        
                    </ul>
                </div>
            </nav>
        
        </>
     );
}
 
export default Navbar;