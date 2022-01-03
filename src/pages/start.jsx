import React, { useEffect, useState } from "react";
import App from '../App';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Card,Container,Row,Col,Button,Form,Toast,Image,Nav,Navbar,Section,NavDropdown} from 'react-bootstrap';
import ReactDom from 'react-dom';
import {Link} from "react-router-dom";
import '../App.css';



export function StartPage (){

return(
  <body>
  <div>
    <Container>
      <Row>
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" fixed="top">
          <Container>
            <Nav>
            <Navbar.Brand>MUSICA</Navbar.Brand>
            </Nav>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="me-auto">
                <Nav.Link href="/">Home</Nav.Link>
                <Nav.Link href="/home">Start</Nav.Link>
                <NavDropdown title="Decades" id="collasible-nav-dropdown">
                <NavDropdown.Item href="/1970/Q1">1970s</NavDropdown.Item>
                <NavDropdown.Item href="/1980/Q1">1980s</NavDropdown.Item>
                <NavDropdown.Item href="/1990/Q1">1990s</NavDropdown.Item>
                <NavDropdown.Item href="/2000/Q1">2000s</NavDropdown.Item>
                <NavDropdown.Item href="/2010/Q1">2010s</NavDropdown.Item>
                <NavDropdown.Item href="/current/Q1">Current</NavDropdown.Item>
                </NavDropdown>
              </Nav>
              <Nav>
                <Nav.Link href="/About">About us</Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </Row>
      </Container>
  </div>
  <div class="start">
    <Container>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <Link to="/home"><Button style={{ width: '10rem', color: "white", background: "purple", display: "flex", justifyContent: "center"}}>PLAY!!!!!</Button></Link> 
    </Container>
  </div>
  
  </body>
);

};

export default StartPage;
