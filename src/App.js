import React, { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import TextForms from './components/TextForms';
import Alert from './components/Alert';
// import About from './components/About';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

function App() {
  const [alert, setAlert] = useState(null);
  const [mode, setMode] = useState('light');

  const sAlert = (message, type) => {
    setAlert({ msg: message, type: type });
    setTimeout(() => setAlert(null), 2000);
  };

  const toggleMode = (newMode) => {
    if (newMode === 'dark') {
      setMode('dark');
      document.body.style.backgroundColor = '#282828';
      document.body.style.color = 'white';
      document.title = "Adhish - Dark";
    } else if (newMode === 'light') {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      document.body.style.color = 'black';
      document.title = "Adhish - Light";
    } else if (newMode === 'green') {
      setMode('green');
      document.body.style.backgroundColor = '#e8f5e9';
      document.body.style.color = 'black';
      document.title = "Adhish - Green";
    } else if (newMode === 'blue') {
      setMode('blue');
      document.body.style.backgroundColor = '#e3f2fd';
      document.body.style.color = 'black';
      document.title = "Adhish - Blue";
    }
  };

  return (
    <>
      {/* <Router> */}
        <Navbar title="TEXTconverter" mode={mode} toggleMode={toggleMode} />
        {/* Place the Alert just below the Navbar */}
        <div className="container my-3">
          <Alert alert={alert} />
        </div>
        <div className="container my-3">
          {/* <Routes> */}
            {/* <Route */}
              {/* path="/"
              element={ */}
                <TextForms
                  sAlert={sAlert}
                  heading="Enter the text to analyze"
                  but="Convert to upper case"
                  but1="Convert to lower case"
                  but2="Clear"
                  but3="Count Sentences"
                />
              {/* }
            /> */}
            {/* <Route path="/about" element={<About mode={mode} />} />
          </Routes> */}
        </div>
      {/* </Router> */}
    </>
  );
}

export default App;
