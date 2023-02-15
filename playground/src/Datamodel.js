import React, { useState,useEffect } from "react"
import ReactDOM from "react-dom"
 
 
function DataModel() {
  // React Hooks declarations
  const [records, setRecords] = useState([])
  
 
  const loadData = () => {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(data => setRecords(data));
    console.log(records)
  }
     
  useEffect(() => {
    loadData();
  },)
  
  return (
 
     <div class="container-fluid bg-primary">
        <h2>REST API Data in Model Box using React</h2>
        <p>Click on the button below to see it in action...</p>  
       
        <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#myModal">
          Open modal
        </button>
      
      <div class="modal" id="myModal" style={{backgroundColor:"white"}}>
        <div class="modal-dialog" >
          <div class="modal-content text-dark">
            <div class="modal-header">
              <h4 class="modal-title">REST API Records</h4>
              <button type="button" class="close" data-dismiss="modal">&times;</button>
            </div>
        <div class="modal-body">
          <table class="table table-striped">
          <thead>
            <tr>
              <th>Firstname</th>
              <th>Lastname</th>
              <th>Email</th>
            </tr>
          </thead>
          <tbody>
           {records.map((user)=>
            <tr>
              <td>{user.name}</td>
              <td>{user.username}</td>
              <td>{user.email}</td>
               
            </tr>
            )}
          </tbody>
        </table>
        </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-danger" data-dismiss="modal">Close</button>
            </div>
 
          </div>
        </div>
      </div>
    </div>
  )
}
export default DataModel;