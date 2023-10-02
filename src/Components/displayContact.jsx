import React, { useEffect, useState } from "react"
import UpdateModal from "./updatemodal.jsx";
import DeleteData from "./deleteData.jsx"
function showModal() {
    let ItemUpdate = document.getElementById("updatecontactmodal");
    let alertredUpdate = document.getElementById("alertdangerupdate");
    ItemUpdate.style.display = "block";
    alertredUpdate.style.display = "none";
    
}

function displayContact(){
    const [values, setValues] = useState({})
    useEffect(() => {
        fetch('http://192.168.191.12/ContactListBackendPHP/read.php')
            .then(response=>response.json())
            .then(response => {
                setValues(response.data)
            })
            
    })
    return (
        <div>
            <table className="table" id="table">
                <thead className="thead-dark">
                <tr>
                    <th scope="col">ID</th>
                    <th scope="col">Last Name</th>
                    <th scope="col">First Name</th>
                    <th scope="col">Email Address</th>
                    <th scope="col">Contact Number</th>
                    <th scope="col"></th>
                </tr>
                </thead>
                <tbody>
                {Object.keys(values).map(row => {
                    return (
                        <tr key={row + "tr"}>
                            <th scope="row">{values[row].id}</th>
                            <td>{values[row].firstName}</td>
                            <td>{values[row].lastName}</td>
                            <td>{values[row].email}</td>
                            <td>{values[row].number}</td>
                            <td>
                                <button className="btn btn-danger" style={{display:"inline-block", verticalAlign: "top"}} onClick={() => {DeleteData(values[row].id)}}>Delete</button>
                            </td>
                        </tr>
                    )
                })}
                </tbody>
            </table>
        </div>
        
    )
    
}



export default displayContact;