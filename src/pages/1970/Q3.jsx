import React, { useEffect, useState } from "react";
import App from '../../App';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Card,Container,Row,Col,Button,Form,Toast,Image,Nav,Navbar,Section,NavDropdown} from 'react-bootstrap';
import ReactDom from 'react-dom';
import {Link} from "react-router-dom";
import sound from './songs/stayingalive-cut.mp3'


export function SQ3 (){


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
<div>
  <Container className="text-center">

    <Row>
      <Card style={{width: "100rem", color: "white", background: "#eb0ea8" }}>
        <br></br>
        <Card.Img variant="top" src="data:image/png;base64,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" />
        <Card.Body>
          <Card.Title className="text-center"><h1>Can you guess this song from the first 3 seconds</h1></Card.Title>
          <br></br>
          <div>
            <audio controls="controls" src={sound}>
              Your browser does not support the HTML5 audio element.
            </audio>
          </div>
          <br></br>
          <Row className="text-center">
            <Col>
              <Button style={{height: "5rem", width: "30rem", color: "black", background: "green" }} active>
                <h3>"Go Your Own Way" by Fleetwood Mac</h3>
              </Button>
            </Col>
            <Col>
              <Button style={{height: "5rem", width: "30rem", color: "black", background: "blue" }} active>
                <h3>"Free Bird" by Lynyrd Skynyrd</h3>
              </Button>
            </Col>
          </Row>
          <br></br>
          <Row className="text-center">
            <Col>
              <Button style={{height: "5rem", width: "30rem", color: "black", background: "red" }} active>
                <h3>"Superstition" by	Stevie Wonder</h3>
              </Button>
            </Col>
            <Col>
              <Button style={{height: "5rem", width: "30rem", color: "black", background: "orange" }} active> 
                <h3>"Stayin' Alive" by Bee Gees </h3>
              </Button>
            </Col>
          </Row>
        </Card.Body>
      </Card>
    </Row>
  <br></br>
  <Row className="text-center">
    <Link to="/1970/Q4">
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

export default SQ3;