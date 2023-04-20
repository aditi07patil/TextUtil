import React,{useState} from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

import "bootstrap/dist/css/bootstrap.min.css";
import "../App.css";


const Header = (props) => {

  return (
    <div>
      <Navbar bg="light" expand="lg" className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
        <Container>
          <Navbar.Brand href="#home">TextUtils</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">

          <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

          
          
{/*
 <Nav className="me-auto">
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#Aboutus">About us</Nav.Link>
              <Nav.Link href="#Contact">Contact</Nav.Link>
            </Nav>
*/}
           
{/*
 <div className={`form-check form-switch text-${props.mode==='light'?'dark':'light'}`} >
            <input className="form-check-input" type="checkbox" onClick={props.togglemode} role="switch" id="flexSwitchCheckDefault" />
            <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Enable {props.mode==='light'?'dark':'light'} Mode</label>
            </div>
*/}
        
<div className="collapse navbar-collapse" id="navbarSupportedContent">
<ul className="navbar-nav me-auto mb-2 mb-lg-0">

  <li className="nav-item">
    <Link className="nav-link active" aria-current="page" to="/">
      Home
    </Link>
  </li>
  <li className="nav-item">
    <Link className="nav-link" to="About">
      {props.about}
    </Link>
  </li>
  {/* <li className="nav-item">
    <Link className="nav-link" >
    
    </Link>
  </li> */}
  <li className="nav-item">
    <Link className="nav-link" to="Contact">
      Contact
    </Link>
  </li>
</ul>

{/* <form className="d-flex">
  <input
    className="form-control me-2"
    type="search"
    placeholder="Search"
    aria-label="Search"
  />
  <button className="btn btn-outline-primary" type="submit">
    Search
  </button>
</form> */}
<div className={`form-check form-switch text-${props.mode==='light'?'dark':'light'}`} >
<input className="form-check-input" type="checkbox" onClick={props.togglemode} role="switch" id="flexSwitchCheckDefault" />
<label className="form-check-label" htmlFor="flexSwitchCheckDefault">Enable {props.mode==='light'?'dark':'light'} Mode</label>
</div>





</div>
         
            
          

          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
