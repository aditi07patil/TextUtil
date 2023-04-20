import React, { useState } from "react";
import { Fragment } from "react";
// import FloatingLabel from "react-bootstrap/FloatingLabel";
// import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import "bootstrap/dist/css/bootstrap.min.css";
import CopyToClipboard from "react-copy-to-clipboard";

const Home = (props) => {
  const myStyle = {
    color: "white",
    padding: "10px",
    fontFamily: "Arial",
    textAlign:"Center"
  };

  let  styledark = {
    color: '#fff',
    backgroundColor:'#3A3B3C',
    fontWeight: '400',
    fontSize:'20px'
  }

  let stylelight = {
    color: '#000',
    backgroundColor:'#fff',
    fontWeight: '400',
    fontSize:'18px'
  }

  let style2dark = {
    color: '#fff',
 
   

  }

  let style2light = {
    color:'#000',

  }

  let style3dark={
    backgroundColor:"#373839",
    color: '#fff',
  }

  const [text, setText] = useState("");

  const handleOnChange = (event) => {
    setText(event.target.value);
  };

  
  const handleOnChangeAlert = () => {
    alert("Cannot edit in preview");
}
  const upperCase = () => {
    if (text !== "") {
      let newUppertext = text.toUpperCase();
      setText(newUppertext);
    
    } else {
    
    }
  };

  let lowerCase = () => {
    if (text !== "") {
      let newLowertext = text.toLowerCase();
      setText(newLowertext);
     
    } else {
      
    }
  };

  let clearText = () => {
    if (text !== "") {
      let cleartext = "";
      setText(cleartext);
      
    } else {
      
    }
  };

  let removeExtraSpace = () => {
    if (text !== "") {
      let newText = text.replace(/\s+/g, " ").trim();
      setText(newText);
      
    } else {
     
    }
  };

  let copyToClipBoard = () => {
    if (text !== "") {
      var copyText = document.getElementById("text");
      copyText.select();
      navigator.clipboard.writeText(copyText.value);
      
    } else {
      
    }
  };

  const [mode, setMode] = useState("light");
  /* ---------Alert into website----------- */
  const [alert, setAlert] = useState(null);

 
  

  return (
    <Fragment>
      <h1 className="header-text" 
      style={props.mode==='dark'?style2dark:style2light}>{props.heading}
        
      
      </h1>

      <div className="form-div" style={props.mode==='dark'?style2dark:style2light}>

        <b className="keebo">Enter Your Text Here:</b>
      </div>

      <div className="text-area-div" style={props.mode==='dark'?style2dark:style2light}>
      
      <div className="content" >
        <textarea
        
          className="form-control"
          id="text"
          rows="12"
          style={props.mode==='dark'?style3dark:style2light}
          value={text}
          onChange={handleOnChange}
        ></textarea>
      </div>
      </div>

      <div  className="button-div" style={myStyle}>
        <Button  className="btnstyle" variant="primary" onClick={upperCase}>
          Convert Uppercase
        </Button>{" "}
        <Button className="btnstyle" variant="primary" onClick={lowerCase}>
          Convert Lowercase
        </Button>{" "}
        <Button className="btnstyle" variant="danger" onClick={clearText}>
          Clear Text
        </Button>{" "}
        <Button  className="btnstyle" variant="success" onClick={copyToClipBoard}>
          Copy To Clipboard
        </Button>{" "}
        <Button className="btnstyle" variant="primary" onClick={removeExtraSpace}>
          Remove Extra Spaces
        </Button>{" "}
      </div>

      <div className="container my-4" style={props.mode==='dark'?style2dark:style2light}>
    
        <div className="p-text">
          <h1>Summary Of Your Text</h1>
          <p>Number of words :{text.split(" ").filter((element)=>{return element.length!==0}).length} </p>
          <p>Number of characters : {text.length}</p>
          <p>Reading Time: {0.008 * (text.split(" ").filter((element)=>{return element.length!==0}).length)}</p>
        </div>

        <h3 className="text-center">Preview Document</h3>
        <div className="content" >
         {/*  <textarea className="form-control" id="text" rows="3"></textarea>*/}
         <textarea
          className="form-control"
          id="text"
          rows="3"
          value={text}
          style={props.mode==='dark'?styledark:stylelight}
          onChange={handleOnChangeAlert}
        ></textarea>
        </div>
      </div>
      <br></br>

      <footer
        id="sticky-footer"
        className="flex-shrink-0 py-4 bg-dark text-white-50"
      >
        <div className="container text-center">
          <small>Copyright@2021 | All Rights Reserved | by Aditi Patil</small>
        </div>
      </footer>
    </Fragment>
  );
};

export default Home;
