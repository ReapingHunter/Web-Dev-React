
function editData(id, curEmail, fname, lname, emailAdd, contactNum){
    fetch('http://192.168.191.12/ContactListBackendPHP/edit.php',{
            method: "POST",
            headers: new Headers({
                "Content-Type": "application/x-www-form-urlencoded"
            }),
            body: `id=${id}&fname=${fname}&lname=${lname}&emailAdd=${emailAdd}&contactNum=${contactNum}&curEmail=${curEmail}`
    })
}

export default editData;