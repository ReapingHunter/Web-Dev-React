function deleteData(id){
    fetch('http://localhost/ContactListBackendPHP/delete.php',{
            method: "POST",
            headers: new Headers({
                "Content-Type": "application/x-www-form-urlencoded"
            }),
            body: "id=" + id
    })
}

export default deleteData
