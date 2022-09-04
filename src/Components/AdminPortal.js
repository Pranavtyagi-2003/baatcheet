import React, { useState } from 'react'
import './AdminPortal.css'
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import $ from "jquery";

// $(document).ready(function(){
//     $("#linkbtn").click(function(){
//         alert("mai aaya idhr");
//         var url="/createlink?txtlink="+ $("#txtlink").val();
//         $.get(url,function(resp){
//             alert(resp);
//         })
//     })
// })

// $(document).ready(function() {
//     $("#btn").on("click",function() {
//         alert("mai aaya idhr");
//         var url = "/createlink?txtlink=" + $("#txtlink").val();
//         $.get(url, function (resp) {
//             alert(resp);
//         })
//     })
// })


function AdminPortal() {
    const [open, setOpen] = React.useState(false);

    const [admindata, setadmindata] = useState([])
    window.onload = run();

    function run() {
        //  alert("hiii");
        $.getJSON("/admindata", function (jsonobject) {
            // const jsonarr=[];
            // alert(JSON.stringify(jsonobject));
            //  console.log(jsonobject)
            // alert(jsonarr);
            setadmindata(jsonobject)

            // console.log(jsonarr[0].name);
        })
    }
    //    console.log(jasonarr);

    const handleClickOpen = () => {
        setOpen(true);
    };

    

    const handleClose = () => {
        setOpen(false);
    };
    const abc = ()=>{
        console.log("Successfully Submited");
        var email;

        $.get("/getemail",function(result){
            email=result;
        })


        var url = "/createlink?txtlink=" + $("#txtlink").val() + "&&txtemail=" + email;

        $.get(url, function (resp) {
            alert(resp);
        })

    }

    return (
        <div>
            <p className='Re-Meeting'>List of Requested Meetings</p>
            <div className="table">
                <div className="upper">
                    <ul>
                        <li>Meeting With</li>
                        <li>Date & Time</li>
                        <li>Action</li>
                    </ul>
                </div>
                {
                    admindata.map((items) => {
                        const { name, datetime ,email} = items;
                        return (
                            <div className="lower">
                                <ul>
                                    <li>{name}</li>
                                    <li>{datetime}</li>
                                    
                                    <li style={{ display: "flex" }}><button className='Adjoin-btn' onClick={handleClickOpen}><a href="#" className='Adjoin-btn2' >Accept</a></button><button className='Adjoin-btn3'><a href='#' className='Adjoin-btn4'>Reject</a></button></li>
                                </ul>
                            </div>
                        )
                    })
                }

            </div>
            <Dialog open={open} onClose={handleClose}>
                <DialogTitle>Meeting Link</DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        Please Enter The Meeting Link Of A Meeting
                    </DialogContentText>
                    <TextField
                        autoFocus
                        margin="dense"
                        id="txtlink"
                        name="txtlink"
                        label="Enter Link"
                        type="text"
                        fullWidth
                        variant="standard"
                    />
                </DialogContent>
                <DialogActions onClick={abc} DialogActions = "post">
                    <Button onClick={handleClose}>Cancel</Button>
                    <Button onClick={handleClose}  id="btn" name="btn">Submit</Button>
                </DialogActions>
            </Dialog>
        </div>
    )
}

export default AdminPortal