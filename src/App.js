
import './App.css';
import Navbar from './components/Navbar';
import Text from './components/Text';
import { ReactPropTypes } from 'react';
import About from './components/About';
import React, { useState } from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";


function App() {
  const [darkmode, setdarkmode] = useState('primary')
  let togglestate=()=>{
    if(darkmode==='primary')
    {
      setdarkmode('dark');
      document.body.style.backgroundColor='black';
    }
    else{
      setdarkmode('primary');
      document.body.style.backgroundColor='white';
    }
  }
  
  
  return (
    <>
    <Router>
        <Navbar title="Textify" mode={darkmode} toggle={togglestate} />
          
        <Routes>
          <Route path="/about" element={<About/>}/>
      
          <Route path="/" element={<div className="container">
            <Text heading="Enter your Text" mode={darkmode} />
        </div>}/>
          
          
        </Routes>
        </Router>
        
        
    </>
  );
}

export default App;
