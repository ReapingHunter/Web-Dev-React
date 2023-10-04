import DisplayContact from "./displayContact.jsx"
import CreateModal from "./createmodal.jsx"
import UpdateModal from "./updatemodal.jsx";
import React, {useState} from "react"

function index(){
  const [modalState,toggleModal] = useState(false)
  const [modalUpdateState, toggleUpdateModal] = useState(false)
  const [updateValues,setUpdateValues] = useState({})

  return(
    <div>
      <h1>Contact List</h1>
      <div className="text-center">
        <button type="button" className="btn btn-primary"  onClick={()=>toggleModal(true)}>Create Contact</button>
      </div>
      <DisplayContact operations = {{displayUpdate:toggleUpdateModal,setUpdate:setUpdateValues}}/>
      {modalState &&  <CreateModal/>}
      {modalUpdateState && <UpdateModal values = {updateValues} displayUpdate = {toggleUpdateModal}/>}
    </div>
    
  );
}



export default index;