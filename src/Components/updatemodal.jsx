import { useEffect, useState } from "react";
import editData from "./update.jsx";

function updateCheck(id, fname, lname, emailAdd, contactNum) {
    let alertred = document.getElementById("alertdangerupdate");
    if(fname == '' || lname == '' || emailAdd == '' || emailAdd.indexOf("@") == -1 || contactNum == '') {
        alertred.style.display = "block";
    } else {
        editData(id, fname, lname, emailAdd, contactNum)
        hideModal()
        window.location.reload(false);
    }
}

function hideModal() {
    let ItemAdd = document.getElementById("updatecontactmodal");
    let alertred = document.getElementById("alertdangerupdate");
    ItemAdd.style.display = "none";
    alertred.style.display = "none";
}

function updateModal(){
    const [id, setID] = useState('')
    const [fname, setFname] = useState('');
    const [lname, setLname] = useState('');
    const [emailAdd, setEmailAdd] = useState('');
    const [contactNum, setContactNum] = useState('');
    

    return(
        <form>
            <div className="modal" tabIndex="-1" role="dialog" id ="updatecontactmodal">
                <div className="modal-dialog" role="document">
                <div className="modal-content">
                    <div className="modal-header">
                    <h5 className="modal-title">Update Contact</h5>
                    <button type="button" className="close" data-dismiss="modal" aria-label="Close" id="close" onClick={()=>{hideModal("updatecontactmodal")}}>
                        <span aria-hidden="true">&times;</span>
                    </button>
                    </div>
                    <div className="modal-body">
                    <div className="alert alert-danger" id="alertdangerupdate" role="alert">
                            Please enter the required inputs properly.
                    </div>
                    <label htmlFor="exampleFormControlInput1">Enter ID:</label>
                        <input type="text" name="id" placeholder="123" id="idupdate" className="form-control" value={id} onChange={(e)=>{setID(e.target.value)}} required></input><br />
                        <label htmlFor="exampleFormControlInput1">Enter First Name:</label>
                        <input type="text" name="firstname" placeholder="John" id="firstnameupdate" className="form-control" value={fname} onChange={(e)=>{setFname(e.target.value)}} required></input><br />
                        <label htmlFor="exampleFormControlInput1">Enter Last Name:</label>
                        <input type="text" name="lastname" placeholder="Doe" id="lastnameupdate" className="form-control" value={lname} onChange={(e)=>{setLname(e.target.value)}} required></input><br />
                        <label htmlFor="exampleFormControlInput1">Enter Email Address:</label>
                        <input type="email" name="email" placeholder="johndoe@xyz.com" id="emailupdate" className="form-control" value={emailAdd} onChange={(e)=>{setEmailAdd(e.target.value)}} required></input><br />
                        <label htmlFor="exampleFormControlInput1">Enter Contact Number:</label> <br />
                        <input type="number" name="contact" placeholder="09999999999" id="contactupdate" value={contactNum} onChange={(e)=>{setContactNum(e.target.value)}} required></input><br />
                    </div>
                    <div className="modal-footer">
                    <button type="submit" className="btn btn-primary" id="update" onClick={() => {updateCheck(id, fname, lname, emailAdd, contactNum)}}>Update Contact</button>
                    </div>
                </div>
                </div>
            </div>
        </form>
    );
    
}

export default updateModal;

