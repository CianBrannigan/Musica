import React, { useEffect, useState } from "react";
import App from '../../App';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Card,Container,Row,Col,Button,Form,Toast,Image,Nav,Navbar,Section,NavDropdown} from 'react-bootstrap';
import ReactDom from 'react-dom';
import {Link} from "react-router-dom";


export function NQ1 (){


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
<div>
  <Container className="text-center">

    <Row>
      <Card style={{width: "100rem", color: "white", background: "#eb0ea8" }}>
        <br></br>
        <Card.Img variant="top" src="https://pnimg.net/w/articles/4/56c/ee0b9d6099.jpg" />
        <Card.Body>
          <Card.Title className="text-center"><h1>What was the best selling single in the uk of the 70s</h1></Card.Title>
          <Row className="text-center">
            <Col>
              <Button style={{height: "5rem", width: "30rem", color: "black", background: "green" }} active>
                <h3>"Mull of Kintyre" / "Girls' School" by Wings</h3>
              </Button>
            </Col>
            <Col>
              <Button style={{height: "5rem", width: "30rem", color: "black", background: "blue" }} active>
                <h3>"Y.M.C.A." by Village People</h3>
              </Button>
            </Col>
          </Row>
          <br></br>
          <Row className="text-center">
            <Col>
              <Button style={{height: "5rem", width: "30rem", color: "black", background: "red" }} active>
                <h3>"Bohemian Rhapsody" by 	Queen</h3>
              </Button>
            </Col>
            <Col>
              <Button style={{height: "5rem", width: "30rem", color: "black", background: "orange" }} active> 
                <h3>"Another Brick in the Wall (Part 2)" by Pink Floyd</h3>
              </Button>
            </Col>
          </Row>
        </Card.Body>
      </Card>
    </Row>
  <br></br>
  <Row className="text-center">
    <Link to="/1990/Q2">
      <Button style={{height: "8rem", width: "50rem", color: "white", background: "purple" }}>
        <h1>Next Question</h1>
      </Button>
    </Link>
  </Row>
  <br></br>
  </Container>
</ div>
</body>
);

};

export default NQ1;
