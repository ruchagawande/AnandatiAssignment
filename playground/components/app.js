import React from 'react';
import Dashboard from './Dashboard';
import Navbar from './Navbar';
import Sidebar from './Sidebar';
import './App.css';
import Responsive  from'./Responsive'
function App(){
 
        return (
            <div>
                <Navbar/>
                <div class="container-fluid" id="main">
                 <div class="row row-offcanvas row-offcanvas-left">
                   <Sidebar/>
                  <Dashboard/>
                
             </div>
            </div>  
        </div>  
        );
    }

     
    // function App() {
    //   return (
    //     <div className="App">
    //        <Responsive/>
    //     </div>
    //   );
    // }
     
