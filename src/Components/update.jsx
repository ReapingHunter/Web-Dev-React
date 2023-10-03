
function editData(id, fname, lname, emailAdd, contactNum){
    fetch('http://localhost/ContactListBackendPHP/edit.php',{
            method: "POST",
            headers: new Headers({
                "Content-Type": "application/x-www-form-urlencoded"
            }),
            body: `id=${id}&fname=${fname}&lname=${lname}&emailAdd=${emailAdd}&contactNum=${contactNum}`
    })
}

export default editData;
