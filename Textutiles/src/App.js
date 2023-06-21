import Navbar from './components/Navbar.js';
import TextForm from './components/TextForm.js';
import React,{useState} from 'react'
import Alerts from './components/Alerts.js';
import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";

function App() {
  const [mode, setmode] = useState('light')
  const [alert,setAlert]=useState(null);

  const showAlert=(message,type)=>{
      setAlert({
        msg:message,
        type:type
      })
      setTimeout(()=>{
        setAlert(null);
      },2000);
  }
  const toggleBtn=()=>{
   if(mode === 'dark'){
    setmode('light');
    document.body.style.backgroundColor='#1F305E';
    showAlert("Dark mode is enabled",'success');
   }
   else{
    setmode('dark');
    document.body.style.backgroundColor='#CCCCFF';
    showAlert("Light mode is enabled",'success');
   }
  }
  return (
  <>
     <Router>
  <Navbar  title='Textutiles' mode={mode} toggleBtn={toggleBtn}/>
  <Alerts alert={alert}/>
  <div className="container my-3">       
  <Routes>
          <Route exact path="/" element={
           <TextForm heading="Enter text to analyse"  mode={mode}/>}/>
        </Routes>
  </div>
  </Router>

</>
  
  );
}

export default App;
