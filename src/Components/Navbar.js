import React from 'react'
import './Navbar.css'
import Profile from '../Components/Profile.png'
import logo from '../Components/Logo.png'
function Navbar() {
    return (
        <div>
            <div className="nav">
                <input type="checkbox" id="nav-check"/>
                    <div className="nav-header">
                        <div className="nav-title">
                            <img src={logo} alt="" className='logo'/>
                        </div>
                    </div>
                    <div className="nav-btn">
                        <label for="nav-check">
                            <span></span>
                            <span></span>
                            <span></span>
                        </label>
                    </div>

                    <div className="nav-links">
                        <a href="/">Home</a>
                        <a href="/">Contact</a>
                        <a href="/">Help</a>
                    </div>
                    <div className="Profile-img">
                        <ul className='imgs'>
                            <li><img src={Profile} alt="Img" className='Profile'/>
                              <div className="drop-down">
                                <ul className="drop">
                                    <li>Profile</li>
                                    <li>Logout</li>
                                </ul>
                              </div>
                            </li>
                        </ul>
                    </div>
            </div>
        </div>
    )
}

export default Navbar