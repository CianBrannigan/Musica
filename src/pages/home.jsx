import React, { useEffect, useState } from "react";
import App from '../App';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../App.css';
import { Card,Container,Row,Col,Button,Form,Toast,Image,Nav,Navbar,Section,NavDropdown} from 'react-bootstrap';
import ReactDom from 'react-dom';
import {Link} from "react-router-dom";
import * as Tone from 'tone'


export function HomePage (){

  const player = new Tone.Player("").toDestination();
  Tone.loaded().then(() => {
    player.start();
  });

return(
     <div>
       <div className="nav">
    <Container >
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
  <header className="App-header">
  <Container>
      <Row>
        <Card style={{ width: '27rem', color: "white", background: "#8B4513" }} className="card-1">
        <br></br>
          <Card.Img variant="top" src="https://cdn4.pitchfork.com/longform/636/1970s_Albums.jpg" />
            <Card.Body>
            <Card.Title><h2 style={{ color: "black", fontWeight: "bold"}}>1970's Quiz</h2></Card.Title>
            <Card.Text>
              From ABBA to Aerosmith
              Fleetwood Mac to the Eagles
              can you pass this 1970's quiz
            </Card.Text>
            <Link to="/1970/Q1"><Button style={{ width: '10rem', color: "white", background: "purple" }}>PLAY!!!!!</Button></Link>
          </Card.Body>
        </Card>
       
        <Card style={{ width: '27rem', color: "white", background: "#d9d90d", }} className="card-2">
          <br></br>
          <Card.Img variant="top" src="https://www.nls.uk/media/khxmzg4s/80s-wk-graphic-crop-300.jpg" />
            <Card.Body>
            <Card.Title><h2 style={{ color: "black", fontWeight: "bold"}}>1980's Quiz</h2></Card.Title>
            <Card.Text>
              The 80s saw the rise of Punk, New Wave, Electronic, 
              Soft Rock, and the more middle of the road 
              out and out Pop music. Test yourself in this 80's Quiz
            </Card.Text>
            <Link to="/1980/Q1"><Button style={{ width: '10rem', color: "white", background: "purple" }} className="b2">PLAY!!!!!</Button></Link>
          </Card.Body>
        </Card>
        
        <Card style={{ width: '27rem', color: "white", background: "#0905ff" }}  className="card-3">
        <br></br>
          <Card.Img variant="top" src="https://methodshop.com/wp-content/uploads/1990s-800x450.jpg" />
            <Card.Body>
            <Card.Title><h2 style={{ color: "black", fontWeight: "bold"}}>1990's Quiz</h2></Card.Title>
            <Card.Text>
            The musical era of the 1990s was one filled with a variety 
            of pop, rap, and alternative music artists. It was a time when musical taste was as varied 
            as the events that were happening at the time
            </Card.Text>
            <Link to="/1990/Q1"><Button style={{ width: '10rem', color: "white", background: "purple" }} className="b3">PLAY!!!!!</Button></Link>
          </Card.Body>
        </Card>
   
        
      </Row>
      <div><br /></div>
      <Row>
        <Card style={{ width: '27rem', color: "white", background: "#02ad05" }} className="card-4">
        <br></br>
          <Card.Img variant="top" src="https://thumbnailer.mixcloud.com/unsafe/300x300/extaudio/b/3/c/e/5f7f-50cc-495f-80fe-3fcfede294cd" />
            <Card.Body>
            <Card.Title><h2 style={{ color: "black", fontWeight: "bold"}}>2000's Quiz</h2></Card.Title>
            <Card.Text>
              This decade was packed full of old school R&B to the heaviest of Rock to the Poppiest of Pop.
              This decade will have you singing out your lungs after the first
              chord
            </Card.Text>
            <Link to="/2000/Q1"><Button style={{ width: '10rem', color: "white", background: "purple" }} className="b4">PLAY!!!!!</Button></Link>
          </Card.Body>
        </Card>
        
        <Card style={{ width: '27rem', color: "white", background: "#ff0000" }}  className="card-5">
        <br></br>
          <Card.Img variant="top" src="https://miro.medium.com/max/682/1*uI95HiWQkXMjn3KaGZQgvw@2x.jpeg" />
            <Card.Body>
            <Card.Title><h2 style={{ color: "black", fontWeight: "bold"}}>2010's Quiz</h2></Card.Title>
            <Card.Text>
              In This decade we transitioned form physical copies of Music
              like CDs to more access with streaming services like Spotify,
              Youtube etc and with th aid of these services.
              we were able to access music a lot easier 
              So are you up for the challenge
            </Card.Text>
            <Link to="/2010/Q1"><Button style={{ width: '10rem', color: "white", background: "purple" }} className="b5">PLAY!!!!!</Button></Link>
          </Card.Body>
        </Card>
      
        <Card style={{ width: '27rem', color: "white", background: "#708090" }}  className="card-6">
        <br></br>
          <Card.Img variant="top" src="https://upload.wikimedia.org/wikipedia/commons/2/2b/Billboard_Hot_100_logo.jpg" />
            <Card.Body>
            <Card.Title ><h2 style={{ color: "black", fontWeight: "bold"}}>Current Music Quiz</h2></Card.Title>
            <Card.Text>
              Can you ACE this quiz about songs and certified chart toppers 
              from the last 2 years. You will need more than just listening to
              the radio to pass
            </Card.Text>
            <Link to="/current/Q1"><Button style={{ width: '10rem', color: "white", background: "purple" }} className="b6">PLAY!!!!!</Button></Link>
          </Card.Body>
        </Card>
      </Row>
  </Container>
</header>
</ div>
);

};

export default HomePage;
