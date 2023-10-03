
function createData(fname, lname, emailAdd, contactNum){
    fetch('http://localhost/ContactListBackendPHP/add.php',{
            method: "POST",
            headers: new Headers({
                "Content-Type": "application/x-www-form-urlencoded"
            }),
            body: `fname=${fname}&lname=${lname}&emailAdd=${emailAdd}&contactNum=${contactNum}`
    })
}

export default createData;
