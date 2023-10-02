import DisplayContact from "./displayContact.jsx"
import CreateModal from "./createmodal.jsx"
import UpdateModal from "./updatemodal.jsx";
function showModal() {
  let ItemAdd = document.getElementById("createcontactmodal");
  let alertred = document.getElementById("alertdanger");
  ItemAdd.style.display = "block";
  alertred.style.display = "none";
  
}

function showUpdateModal() {
  let ItemUpdate = document.getElementById("updatecontactmodal");
  let alertredUpdate = document.getElementById("alertdangerupdate");
  ItemUpdate.style.display = "block";
  alertredUpdate.style.display = "none";
  
}

function index(){
  return(
    <div>
      <h1>Contact List</h1>
      <div className="text-center">
        <button type="button" className="btn btn-primary"  onClick={()=>{showModal()}}>Create Contact</button>
        <button type="button" className="btn btn-warning" onClick={()=>{showUpdateModal()}}>Update Contact</button>
      </div>
      <DisplayContact/>
      <CreateModal/>
      <UpdateModal/>
    </div>
    
  );
}



export default index;