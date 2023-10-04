
function updateModal({values,displayUpdate}){
    function updateCheckbruh(event){
        event.preventDefault()
        const inputs = event.target
        let fname = inputs[0].value
        let lname = inputs[1].value
        let email = inputs[2].value
        let contNum = inputs[3].value

        fetch('http://192.168.191.12/ContactListBackendPHP/edit.php',{
            method: "POST",
            headers: new Headers({
                "Content-Type": "application/x-www-form-urlencoded"
            }),
            body:`id=${values.id}&fname=${fname}&lname=${lname}&emailAdd=${email}&contactNum=${contNum}&curEmail=${values.email}`
        })
        .then(
            displayUpdate(false)
        )
    }

    return(
        <div className="modal" tabIndex="-1" role="dialog" id ="updatecontactmodal">
            <div className="modal-dialog" role="document">
            <div className="modal-content">
                <div className="modal-header">
                <h5 className="modal-title">Update Contact</h5>
                <button type="button" className="close" data-dismiss="modal" aria-label="Close" id="close" onClick={()=>displayUpdate(false)}>
                    <span aria-hidden="true">&times;</span>
                </button>
                </div>
                <div className="modal-body">
                <div className="alert alert-danger" id="alertdangerupdate" role="alert">
                        Please enter the required inputs properly.
                </div>
                    <h2>ID : {values.id}</h2>
                    <form action="post" autoComplete="off" onSubmit={e=>updateCheckbruh(e) }>
                        <label htmlFor="firstnameupdate">Enter First Name:</label>
                        <input autoComplete="off" type="text" name="firstname" placeholder="John" id="firstnameupdate" className="form-control" defaultValue={values.firstName} required></input><br />
                        <label htmlFor="lastnameupdate">Enter Last Name:</label>
                        <input autoComplete="off" type="text" name="lastname" placeholder="Doe" id="lastnameupdate" className="form-control" defaultValue={values.lastName} required></input><br />
                        <label htmlFor="emailupdate">Enter Email:</label>
                        <input autoComplete="off" type="email" name="email" placeholder="johndoe@xyz.com" id="emailupdate" className="form-control" defaultValue={values.email} required></input><br />
                        <label htmlFor="contactupdate">Enter Contact Number:</label><br />
                        <input autoComplete="off" type="text" name="contact" placeholder="09999999999" id="contactupdate" defaultValue={values.number} required></input><br />
                        <button type="submit" className="btn btn-primary" id="update">Update Contact</button>
                    </form>
                </div>
                <div className="modal-footer">
                </div>
            </div>
            </div>
        </div>
    );
    
}

export default updateModal;

