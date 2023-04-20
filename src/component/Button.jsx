import React, { useState } from 'react'

const Button = (props) => {
    const myStyle = {
        color: "white",
        padding: "10px",
        fontFamily: "Arial",
      };

      let[text,setText]=useState("")
      let upperCase=()=>{
       
        if( text !== '')
        {
          let newUppertext = text.toUpperCase();
          setText(newUppertext);
          props.showAlert("Converted to Uppercase","success");
        }
        else
    {
      props.showAlert("There's Nothing To UpperCase Into TextBox","warning");
    }
       
      }

      let lowerCase=()=>{
      
          if( text !== '')
        {
          let newUppertext = text.toUpperCase();
          setText(newUppertext);
          alert("Data is cahnages");
        }
        else
    {
      alert("Data is not present");
    }
        
      }

      // let clearText=()=>{
      //    let clearText=document.getElementById('id')
      //   setText(clearText.reset())
      //   alert("Data is clear");
      // }
      let clearText=()=>{
      if(text !== '')
    {
      let cleartext = "";
      setText(cleartext);
     alert("Data is cleared");
    }
    else
    {
     alert("Data is not cleared");
    }
  }
      // let copyText=()=>{
      //   return()
      // }

      let removeExtraSpace=()=>{
        if(text !== '')
        {
          let newText = text.trim()
          setText(newText);
         alert("Data is cleared");
        }
        else
        {
         alert("Data is not cleared");
        }
      }
  return (
   
    <div style={myStyle}>
    <Button variant="primary" onClick={upperCase}>Convert Uppercase</Button>{" "}
   
  <Button variant="primary" onClick={lowerCase}>Convert Lowercase</Button>{" "}
     <Button variant="danger" onClick={clearText}>Clear Text</Button>{" "}
   {/* <Button variant="success" onClick={copyText}>Copy To Clipboard</Button>{" "} */}
    <Button variant="primary" onClick={removeExtraSpace}>Remove Extra Spaces</Button>{" "}
  
 
    
    
    </div>
  )
}

export default Button