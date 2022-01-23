import React, { useEffect, useState } from "react";
import App from '../../App';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Card,Container,Row,Col,Button,Form,Toast,Image,Nav,Navbar,Section,ProgressBar,NavDropdown} from 'react-bootstrap';
import ReactDom from 'react-dom';
import {Link} from "react-router-dom";


export function NResult (){


return(
  <body>
  <div className="nav">
    <Container>
      <Row>
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
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
              <Nav.Link href="/spotify-api/dataFetcher">Metadata</Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </Row>
      </Container>
  </div>
<div class="NRES">
  <Container>
    <br></br>
    <br></br>
    <h1 style={{ color: "black", fontWeight: "bold"}} className="text-center">YOUR RESULTS ARE</h1>
    <div>
      <br></br>
      <br></br>
      <ProgressBar  style={ { height: "5rem" } }>
        <ProgressBar striped variant="success" now={83.33} key={1} />
        <ProgressBar striped variant="danger" now={16.67} key={2} />
      </ProgressBar>
      <br></br>
      <br></br>
    </div>

    <h1 style={{ color: "black", fontWeight: "bold"}} className="text-center">YOU GOT "PLACEHOLDER 5" OUT OF 6 RIGHT!!!!</h1>
    <br></br>
    <br></br>
    <Row className="text-center">
      <Link to="/">
        <Button style={{ color: "black", fontWeight: "bold", backgroundColor: "purple"}}>
          <h1>
            Return to the Home Page
          </h1>
        </Button>
      </Link>
    </Row>
  </Container>
</ div>
</body>
);

};

export default NResult;