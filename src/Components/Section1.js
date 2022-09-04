import React from 'react'
import './Section1.css'
import leftimg from '../Components/Cardsimg1.png'
import rightimg from '../Components/Cardsimg2.png'
import { Link } from 'react-router-dom'
import { Button } from '@mui/material'

function Section1() {
    return (
        <div>
            <Button style={{marginTop:"1rem", color:"white"}} variant="contained"><Link style={{color:"white"}} to='/adminportal'>AdminPortal</Link></Button>
            <div className="main">
                <div className="text">
                 <p>Let's Connect To The Globe</p>
                </div>
                <div className="cards">
                    <div className="lefthalf">
                        <div className="leftimg">
                            <img src={leftimg} alt="" />
                        </div>
                        <div className="left-text">
                            <p>Find the best time for everyone<br/> to meet</p>
                        </div>
                        <button><Link to="/meetingtable" className='btn1'>Join Meeting</Link></button>
                    </div>
                    <div className="righthalf">
                        <div className="rightimg">
                            <img src={rightimg} alt="" />
                        </div>
                        <div className="right-text">
                            <p>The quickest way for peoples <br /> to meet</p>
                        </div>
                        <button><Link to="/scheduleMeeting" className='btn2'>Schedule Meeting</Link></button>
                    </div>
                </div>
                <div className="bottom-text">
                    <p>All your invites and events will show up here once you get started.</p>
                </div>
            </div>
        </div >
    )
}

export default Section1