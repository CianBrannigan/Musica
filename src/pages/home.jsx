import React, { useEffect, useState } from "react";
import App from '../App';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../App.css';
import { Card,Container,Row,Col,Button,Form,Toast,Image,Nav,Navbar,Section} from 'react-bootstrap';
import ReactDom from 'react-dom';
import {Link} from "react-router-dom";


export function HomePage (){


return(
     <div>
  <header className="App-header">
  <Container>
      <Row>
        <Col md>
        <Card style={{ width: '25rem' }} className="card-1">
          <Card.Img variant="top" src="https://cdn4.pitchfork.com/longform/636/1970s_Albums.jpg" />
            <Card.Body>
            <Card.Title><h2 class="text-warning">1970's Quiz</h2></Card.Title>
            <Card.Text>
              From ABBA to Aerosmith
              Fleetwood Mac to the Eagles
              can you pass this 1970's quiz
            </Card.Text>
            <Link to="/1970/Q1"><Button variant="warning">PLAY!!!!!</Button></Link>
          </Card.Body>
        </Card>
        </Col>
        <Col md>
        <Card style={{ width: '25rem' }} className="card-2">
          <Card.Img variant="top" src="https://www.nls.uk/media/khxmzg4s/80s-wk-graphic-crop-300.jpg" />
            <Card.Body>
            <Card.Title><h2 class="text-info">1980's Quiz</h2></Card.Title>
            <Card.Text>
              The 80s saw the rise of Punk, New Wave, Electronic, 
              Soft Rock, and the more middle of the road 
              out and out Pop music. Test yourself in this 80's Quiz
            </Card.Text>
            <Link to="/1980/Q1"><Button variant="info" className="b2">PLAY!!!!!</Button></Link>
          </Card.Body>
        </Card>
        </Col>
        <Col md>
        <Card style={{ width: '25rem' }}  className="card-3">
          <Card.Img variant="top" src="https://methodshop.com/wp-content/uploads/1990s-800x450.jpg" />
            <Card.Body>
            <Card.Title><h2 class="text-danger">1990's Quiz</h2></Card.Title>
            <Card.Text>
            The musical era of the 1990s was one filled with a variety 
            of pop, rap, and alternative music artists as well as a plethora 
            of one-hit wonders. It was a time when musical taste was as varied 
            as the events that were happening at the time
            </Card.Text>
            <Link to="/1990/Q1"><Button variant="danger" className="b3">PLAY!!!!!</Button></Link>
          </Card.Body>
        </Card>
        </Col>
        
      </Row>
      <div><br /></div>
      <Row>
      <Col md>
        <Card style={{ width: '25rem' }}  className="card-4">
          <Card.Img variant="top" src="https://thumbnailer.mixcloud.com/unsafe/300x300/extaudio/b/3/c/e/5f7f-50cc-495f-80fe-3fcfede294cd" />
            <Card.Body>
            <Card.Title><h2 class="text-secondary">2000's Quiz</h2></Card.Title>
            <Card.Text>
              This decade was packed full of absolute bangers from the 
              old school R&B to the heaviest of Rock to the Poppiest of Pop.
              This decade will have you singing out your lungs after the first
              chord
            </Card.Text>
            <Link to="/2000/Q1"><Button variant="secondary" className="b4">PLAY!!!!!</Button></Link>
          </Card.Body>
        </Card>
        </Col>
        
        <Col md>
        <Card style={{ width: '25rem' }}  className="card-5">
          <Card.Img variant="top" src="https://miro.medium.com/max/682/1*uI95HiWQkXMjn3KaGZQgvw@2x.jpeg" />
            <Card.Body>
            <Card.Title><h2 class="text-success">2010's Quiz</h2></Card.Title>
            <Card.Text>
              In This decade we transitioned form physcal copies of Music
              like CDs to more access with streaming services like Spotify,
              Youtube, Apple music and Deezer and with th aid of these services.
              we were able to listen to the evolution of music a lot easier 
              So are you up for the challenge
            </Card.Text>
            <Link to="/2010/Q1"><Button variant="success" className="b5">PLAY!!!!!</Button></Link>
          </Card.Body>
        </Card>
        </Col>

        <Col md>
        <Card style={{ width: '25rem' }}  className="card-6">
          <Card.Img variant="top" src="https://upload.wikimedia.org/wikipedia/commons/2/2b/Billboard_Hot_100_logo.jpg" />
            <Card.Body>
            <Card.Title ><h2 class="text-primary">Current Music Quiz</h2></Card.Title>
            <Card.Text>
              Can you ACE this quiz about songs and certified chart toppers 
              from the last 2 years. YOu will need more than just listening to
              the radio to pass
            </Card.Text>
            <Link to="/current/Q1"><Button variant="primary" className="b6">PLAY!!!!!</Button></Link>
          </Card.Body>
        </Card>
        </Col>
      </Row>
  </Container>
</header>
</ div>
);

};

export default HomePage;
