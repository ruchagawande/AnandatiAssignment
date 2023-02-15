import 'bootstrap/dist/css/bootstrap.min.css';
import {useState} from 'react'
 
function ProfileCards()
{
 
    const [darkTheme,setDarkTheme] = useState(false)
 
    return (
 
        <div className={darkTheme == false ? 'light-theme'  : 'dark-theme'  }>
            <nav class="navbar navbar-default" style={{backgroundColor:"black"}}>
            <div class="container-fluid">
                <div class="navbar-header">
                 <a class="navbar-brand text-white" href="#">Theme Change</a>
                </div>
                <ul class="nav navbar-nav text-white">
                <button className="btn btn-success mt-6" onClick={() => setDarkTheme(prevTheme => !prevTheme)}>
                  Change Theme
                </button>
                <li></li>
                </ul>
            </div>
            </nav>
           <div className="row p-5">
             <div className="col-sm-4 mt-5 p-5">
              <div class="card shadow-lg p-3 mb-5 bg-white rounded" style={{width: "18rem",backgroundColor:"{color}"}}>
                <div class="card-body">
                    <h5 class="card-title">Card title</h5>
                    <h6 class="card-subtitle mb-2 text-muted">Card subtitle</h6>
                    <p class="card-text">Some quick example text to build on the card title.</p>
                    <a href="#" class="card-link">Card link</a>
                    <a href="#" class="card-link">Another link</a>
                </div>
                </div>
             </div>      
             <div className="col-sm-4 mt-5  p-5">
              <div class="card shadow-lg p-3 mb-5 bg-white rounded" style={{width: "18rem",backgroundColor:"{color}"}}>
                <div class="card-body">
                    <h5 class="card-title">Card title</h5>
                    <h6 class="card-subtitle mb-2 text-muted">Card subtitle</h6>
                    <p class="card-text">Some quick example text to build on the card title.</p>
                    <a href="#" class="card-link">Card link</a>
                    <a href="#" class="card-link">Another link</a>
                </div>
                </div>
             </div>      
             <div className="col-sm-4 mt-5  p-5">
              <div class="card shadow-lg p-3 mb-5 bg-white rounded" style={{width: "18rem",backgroundColor:"{color}"}}>
                <div class="card-body">
                    <h5 class="card-title">Card title</h5>
                    <h6 class="card-subtitle mb-2 text-muted">Card subtitle</h6>
                    <p class="card-text">Some quick example text to build on the card title.</p>
                    <a href="#" class="card-link">Card link</a>
                    <a href="#" class="card-link">Another link</a>
                </div>
                </div>
             </div>      
           </div>    
        </div>
    )
}