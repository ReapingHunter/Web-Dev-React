import { useEffect, useState } from "react";
import editData from "./update.jsx";

function updateCheck() {
    let item = {fname, lname, emailAdd, contactNum}
    let alertred = document.getElementById("alertdangerupdate");
    if(fname == '' || lname == '' || emailAdd == '' || emailAdd.indexOf("@") == -1 || contactNum == '') {
        alertred.style.display = "block";
    } else {
        fetch(`http://192.168.191.12/ContactListBackendPHP/read.php${id}`, {
            method: 'PUT',
            headers: new Headers({
                "Content-Type": "application/x-www-form-urlencoded"
            }),
            body:JSON.stringify(item)
        }).then((result) => {result.json().then((resp) => {console.warn(resp)})})
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

function updateModal(id) {
    useEffect(() => {
        fetch(`http://192.168.191.12/ContactListBackendPHP/read.php${id}`)
        .then(res => {
            setValues({
                ...values,
                fname: res.data.fname,
                lname: res.data.lname,
                emailAdd:res.data.emailAdd,
                contactNum: res.data.contactNum
            })
        })
        .catch(err => console.log(err))
    }, [])

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
                        <label htmlFor="exampleFormControlInput1">Enter First Name:</label>
                        <input type="text" name="firstname" placeholder="John" id="firstnameupdate" className="form-control" value={fname} onChange={(e)=>{setFname(e.target.value)}}></input><br />
                        <label htmlFor="exampleFormControlInput1">Enter Last Name:</label>
                        <input type="text" name="lastname" placeholder="Doe" id="lastnameupdate" className="form-control" value={lname} onChange={(e)=>{setLname(e.target.value)}}></input><br />
                        <label htmlFor="exampleFormControlInput1">Enter Email Address:</label>
                        <input type="email" name="email" placeholder="johndoe@xyz.com" id="emailupdate" className="form-control" value={emailAdd} onChange={(e)=>{setEmailAdd(e.target.value)}}></input><br />
                        <label htmlFor="exampleFormControlInput1">Enter Contact Number:</label> <br />
                        <input type="number" name="contact" placeholder="09999999999" id="contactupdate" value={contactNum} onChange={(e)=>{setContactNum(e.target.value)}}></input><br />
                    </div>
                    <div className="modal-footer">
                    <button type="submit" className="btn btn-primary" id="update" onClick={() => {updateCheck(id, curEmail, fname, lname, emailAdd, contactNum)}}>Update Contact</button>
                    </div>
                </div>
                </div>
            </div>
        </form>
    );
    
}

export default updateModal;

