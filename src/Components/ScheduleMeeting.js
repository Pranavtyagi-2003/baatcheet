import React from 'react'
import './ScheduleMeeting.css'
import TextField from '@mui/material/TextField'
import $ from "jquery";

$(document).ready(function(){
    $("#schedulebtn").click(function(){
        alert($("#txtname").val());
        var url = "/schedule?txtname=" + $("#txtname").val() + "&&txtEmail=" + $("#txtEmail").val() + "&&txtreceiver=" + $("#txtreceiver").val() + "&&txtdate=" + $("#txtdate").val() + "&&txtmsg=" + $("#txtmsg").val();
                $.get(url, function (resp) {
                    // alert(resp);
                    // window.location.replace("/file_name.html");
                })
    })
})

function ScheduleMeeting() {
    const refresh=(e)=>{
     e.preventDefault();
    }
    return (
        <div>
            <div className='contactus'>
                <div className="wrapper">
                    <div className="header">
                        <h1 className='Contact_us'>Let's Connect With Anyone!</h1>
                        {/* <p className='Do_you'>Do you have a question? Send us a message and we will respond as soon as possible.</p> */}
                    </div>
                    <form className='hello' onSubmit={refresh}>
                        {/* <h4>Name</h4> */}
                        <TextField style={{ marginTop: "1rem" }} name='name' id="txtname" label="Your Name" variant="standard" required />
                        {/* <h4>Email</h4> */}
                        <TextField style={{ marginTop: "1rem" }} name='email' id="txtEmail" label="Your Email" variant="standard" required type="email"/>
                        {/* <h4>Message</h4> */}
                        <TextField style={{ marginTop: "1rem" }} name='username' id="txtreceiver" label="Username to whom you want to connect" variant="standard" required />
                        <TextField style={{ marginTop: "1rem" }} name='message' id="txtdate" variant="standard" type="datetime-local" required/>
                        <TextField style={{ marginTop: "1rem" }} name='message' id="txtmsg" label="Message" variant="standard" />
                        <button className='submitbtn' id='schedulebtn' name='schedulebtn' style={{ marginTop: "3rem" }}>Schedule</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default ScheduleMeeting