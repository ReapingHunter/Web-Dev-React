function deleteData(id){
    fetch('http://192.168.191.12/ContactListBackendPHP/delete.php',{
            method: "POST",
            headers: new Headers({
                "Content-Type": "application/x-www-form-urlencoded"
            }),
            body: "id=" + id
    })
    window.location.reload(false);
}

export default deleteData