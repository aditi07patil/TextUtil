

//  import { Routes,Route } from 'react-router-dom';
// import Button from './component/Button';
// import Header from './component/Header';
// import Home from './component/Home';


import "./App.css";
import React, { useState } from "react";
import Home from './component/Home';
import Navbar from "./component/Navbar.js";
import About from "./component/About.js";
import TextForm from "./component/TextForm.js";

import Contact from "./component/Contact";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  const [mode, setMode] = useState("light");
  /* ---------Alert into website----------- */
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    /* Object created to set alert : */
    setAlert({
      msg: message,
      type: type,
    });

    /* Auto dismissing the alert after some time : */

    setTimeout(() => {
      setAlert(null);
    }, 1500);
  };

if(mode==="light"){
  document.body.style.background =
  "linear-gradient(45deg, rgb(241, 241, 241) 50%, rgb(158, 232, 255) 50%)";
}

  const togglemode = () => {
    if (mode === "dark") {
      setMode("light");
      document.body.style.background =
        "linear-gradient(45deg, rgb(241, 241, 241) 50%, rgb(158, 232, 255) 50%)";
      showAlert("Light mode has been enabled", "success");
      // document.title = "TextUtils - Light Mode";
    } else {
      setMode("dark");
      document.body.style.background =
        "linear-gradient(45deg, rgb(92, 92, 92) 50%, rgb(27, 27, 27) 50%)";
      showAlert("Dark mode has been enabled", "success");
      
    }
  };

  return (
  <div>
  <BrowserRouter>
      <Navbar
        title="TextUtils"
        about="About Us"
        mode={mode}
        togglemode={togglemode}
      />
    
      <Routes>
        <Route  path="/about" element={<About    mode={mode}/>} />
        <Route  path="/contact" element={<Contact   mode={mode} />}/>
        <Route  path="/" element={ <Home
          heading="TextUtils - Word Counter, Character Counter, Remove Extra Space"
          summaryHead="Summary Of Your Text"
          mode={mode}
          showAlert={showAlert}
          />}/>
        
        
      </Routes>

      </BrowserRouter>
      </div>
  );
}

export default App;





// function App() {

  
//   return (
//     <div className="App">

//      <Header/>
//   <Home/>
  
   
// {/*<Button/>*/}
  
    
//     </div>
//   );
// }

// export default App;
