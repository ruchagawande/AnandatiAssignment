import React, { useState, useEffect } from 'react';
 
import MaterialTable from 'material-table'
import Switch from '@material-ui/core/Switch';
 
 
export default function App() {
 
  const [data, setData] = useState([])
  const columns = [
    { title: "ID", field: "id" },
    { title: "Username", field: "username" },
    { title: "Name", field: "name" },
    { title: "Email", field: "email" },
    { title: "Phone", field: "phone" },
    { title: "Web Link", field: 'website' },
   
  ]
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(resp => resp.json())
      .then(resp => {
        setData(resp)
      })
  }, [])
 
  return (
    <div className="Apps" style={{padding:"50px"}}>
      <h3 align="center">Records Show in Table</h3>
      <h4 align='center'>Material Table</h4>
      <MaterialTable
        title="Employee Data"
        data={data}
        columns={columns}
      />
    </div>
  );
}