import React, { useEffect, useState } from "react"
import DeleteData from "./deleteData.jsx"

function displayContact({operations:{displayUpdate,setUpdate}}){
    const [values, setValues] = useState({})

    useEffect(() => {
        fetch('http://localhost/ContactListBackendPHP/read.php')
            .then(response=>response.json())
            .then(response => {
                setValues(response.data)
            })
    })

    function updateClick(values){
        setUpdate(values)
        displayUpdate(true)
    }

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
                                <button className="btn btn-warning" style={{display : "inline-block"}} onClick={()=>updateClick(values[row])}>Update</button>
                                <button className="btn btn-danger" style={{display : "inline-block"}} onClick={() => {DeleteData(values[row].id)}}>Delete</button>
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
