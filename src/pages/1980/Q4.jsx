import React, { useEffect, useState } from "react";
import App from '../../App';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Card,Container,Row,Col,Button,Form,Toast,Image,Nav,Navbar,Section} from 'react-bootstrap';
import ReactDom from 'react-dom';
import {Link} from "react-router-dom";


export function EQ4 (){


return(
<div>
  <Container>
  <Link to="/1980/Q5"><Button variant="warning">Next Question</Button></Link>
  </Container>
</ div>
);

};

export default EQ4;