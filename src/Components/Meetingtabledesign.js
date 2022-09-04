import React, { useState } from 'react'
import '../Components/Meetingtabledesign.css'
import Meets from './MeetingData'

// window.load=run();

// function run()
// {

//     // $.getJSON("/accepted",function(jsonobj){

//     // })
// }


function Meetingtabledesign() {
    const [meetdata, setmeetdata] = useState(Meets);
    return (
        <div>
            <div className="table">
                <div className="upper">
                    <ul>
                        <li>Meeting With</li>
                        <li>Duration</li>
                        <li>Date & Time</li>
                        <li>Status</li>
                        <li>Link</li>
                    </ul>
                </div>
                {
                    meetdata.map((items) => {
                        const { MeetingWith, Duration, Date, Time, Status, url } = items;
                        return (
                            <div className="lower">
                                <ul>
                                    <li>{MeetingWith}</li>
                                    <li>{Duration}</li>
                                    <li>{Date & Time}</li>
                                    <li>{Status}</li>
                                    <li><button className='join-btn'><a href="https://meet.google.com/" className='join-btn2'>Join</a></button></li>
                                </ul>
                            </div>
                        )
                    })
                }

            </div>
        </div>
    )
}

export default Meetingtabledesign