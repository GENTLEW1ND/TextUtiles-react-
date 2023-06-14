import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alerts from './components/Alerts';
import React, {useState} from 'react';

import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

function App() {
  const [mode, setMode] = useState("light")// whether dark mode is enable or not
  const[alert, setAlert]= useState(null)

  const showAlert = (message, type)=>{
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(()=>{
      setAlert(null)
    },1500)
  }
  const toggleModeD = ()=>{
    if(mode === "light"){
      setMode("dark")
      document.body.style.backgroundColor = "#042743"
      showAlert("dark mode has been enables","success")
      document.title = "TextUtiles -Dark Mode"  //this is to change the title whenever you change some fucntionality

    }
    else{
    setMode ("light")
    document.body.style.backgroundColor = "white"
    showAlert("light mode has been enables","success")
    document.title = "TextUtiles -Light Mode"
    }
  }
  const toggleModeR = ()=>{
    if(mode === "light"){
      setMode("red")
      document.body.style.backgroundColor = "red"
      showAlert("red mode has been enables","success")
    }
    else{
    setMode ("light")
    document.body.style.backgroundColor = "white"
    showAlert("light mode has been enables","success")
    }
  }
  return (
    <>
    {/* <Navbar title = "TextUtiles2" aboutText="about us"/> this are called props */}
    <Router>
    <Navbar title='TextUtils' mode={mode} toggleModeD={toggleModeD} toggleModeR={toggleModeR}/> 
      <Alerts alert = {alert}/>
    <div className='container my-3'>
    <Routes> 
          <Route exact path="/about" element ={<About mode={mode}/>}>
          </Route>
          <Route exact path="/" element={<TextForm heading="Enter text to analyze"  mode={mode} showAlert={showAlert}/>}> 
          </Route>
          </Routes>
          {/* <TextForm heading="Enter text to analyze"  mode={mode} showAlert={showAlert}/> */}

    </div>
    </Router>
    </>
  );
}
export default App;

