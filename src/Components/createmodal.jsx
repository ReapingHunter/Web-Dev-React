
import React from "react";
import CreateData from "./createData.jsx";
import { useState } from "react";

function addData(fname, lname, emailAdd, contactNum) {
    let alertred = document.getElementById("alertdanger");
    if(fname == '' || lname == '' || emailAdd == '' || emailAdd.indexOf("@") == -1 || contactNum == '') {
        alertred.style.display = "block";
    } else {
        CreateData(fname, lname, emailAdd, contactNum)
        hideModal()
        window.location.reload(false);
    }
    
}

function hideModal() {
    let ItemAdd = document.getElementById("createcontactmodal");
    let alertred = document.getElementById("alertdanger");
    ItemAdd.style.display = "none";
    alertred.style.display = "none";
}

function createModal() {
    const [fname, setFname] = useState('');
    const [lname, setLname] = useState('');
    const [emailAdd, setEmailAdd] = useState('');
    const [contactNum, setContactNum] = useState('');
    const firstName = (event) => {
        setFname(event.target.value);
    };

    const lastName = (event) => {
        setLname(event.target.value);
    };

    const emailAddress = (event) => {
        setEmailAdd(event.target.value);
    };

    const contactNumber = (event) => {
        setContactNum(event.target.value);
    };

    return(
        <div className="modal" tabIndex="-1" role="dialog" id ="createcontactmodal">
            <div className="modal-dialog" role="document">
            <div className="modal-content">
                <div className="modal-header">
                <h5 className="modal-title">Create Contact</h5>
                <button type="button" className="close" data-dismiss="modal" aria-label="Close" id="close" onClick={()=>{hideModal("createcontactmodal")}}>
                    <span aria-hidden="true">&times;</span>
                </button>
                </div>
                <div className="modal-body">
                <div className="alert alert-danger" id="alertdanger" role="alert">
                        Please enter the required inputs properly.
                </div>
                    <label htmlFor="exampleFormControlInput1">Enter First Name:</label>
                    <input type="text" name="fname" placeholder="John" id="firstname" className="form-control" onChange={firstName} value={fname}></input><br />
                    <label htmlFor="exampleFormControlInput1">Enter Last Name:</label>
                    <input type="text" name="lname" placeholder="Doe" id="lastname" className="form-control" onChange={lastName} value={lname}></input><br />
                    <label htmlFor="exampleFormControlInput1">Enter Email Address:</label>
                    <input type="email" name="emailAdd" placeholder="johndoe@xyz.com" id="email" className="form-control" onChange={emailAddress} value={emailAdd}></input><br />
                    <label htmlFor="exampleFormControlInput1">Enter Contact Number:</label> <br />
                    <input type="number" name="contactNum" placeholder="09999999999" id="contact" onChange={contactNumber} value={contactNum}></input><br />
                </div>
            <div className="modal-footer">
                <button type="submit" className="btn btn-primary" id="create" onClick={()=>{addData(fname, lname, emailAdd, contactNum)}}>Create Contact</button>
            </div>
            </div>
        </div>
        </div>
    );
}

export default createModal;