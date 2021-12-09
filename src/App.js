import React, {Component}  from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col, Button, Card } from 'react-bootstrap'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
  useParams
} from "react-router-dom";

//Pages
import   HomePage  from "./pages/home";

import   SQ1  from "./pages/1970/Q1";
import   SQ2  from "./pages/1970/Q2";
import   SQ3  from "./pages/1970/Q3";
import   SQ4  from "./pages/1970/Q4";
import   SQ5  from "./pages/1970/Q5";
import   SQ6  from "./pages/1970/Q6";
import   SRES  from "./pages/1970/Result";

import   EQ1  from "./pages/1980/Q1";
import   EQ2  from "./pages/1980/Q2";
import   EQ3  from "./pages/1980/Q3";
import   EQ4  from "./pages/1980/Q4";
import   EQ5  from "./pages/1980/Q5";
import   EQ6  from "./pages/1980/Q6";
import   ERES  from "./pages/1980/Result";

import   NQ1  from "./pages/1990/Q1";
import   NQ2  from "./pages/1990/Q2";
import   NQ3  from "./pages/1990/Q3";
import   NQ4  from "./pages/1990/Q4";
import   NQ5  from "./pages/1990/Q5";
import   NQ6  from "./pages/1990/Q6";
import   NRES  from "./pages/1990/Result";

import   NUQ1  from "./pages/2000/Q1";
import   NUQ2  from "./pages/2000/Q2";
import   NUQ3  from "./pages/2000/Q3";
import   NUQ4  from "./pages/2000/Q4";
import   NUQ5  from "./pages/2000/Q5";
import   NUQ6  from "./pages/2000/Q6";
import   NURES  from "./pages/2000/Result";

import   TQ1  from "./pages/2010/Q1";
import   TQ2  from "./pages/2010/Q2";
import   TQ3  from "./pages/2010/Q3";
import   TQ4  from "./pages/2010/Q4";
import   TQ5  from "./pages/2010/Q5";
import   TQ6  from "./pages/2010/Q6";
import   TRES  from "./pages/2010/Result";

import   CQ1  from "./pages/current/Q1";
import   CQ2  from "./pages/current/Q2";
import   CQ3  from "./pages/current/Q3";
import   CQ4  from "./pages/current/Q4";
import   CQ5  from "./pages/current/Q5";
import   CQ6  from "./pages/current/Q6";
import   CRES  from "./pages/current/Result";



class App extends Component{
  render(){
    //Routes
  return <Router>
    <Route exact path="/" component={HomePage} />
    <Route exact path="/1970/Q1" component={SQ1} />
    <Route exact path="/1970/Q2" component={SQ2} />
    <Route exact path="/1970/Q3" component={SQ3} />
    <Route exact path="/1970/Q4" component={SQ4} />
    <Route exact path="/1970/Q5" component={SQ5} />
    <Route exact path="/1970/Q6" component={SQ6} />
    <Route exact path="/1970/SRES" component={SRES} />

    <Route exact path="/1980/Q1" component={EQ1} />
    <Route exact path="/1980/Q2" component={EQ2} />
    <Route exact path="/1980/Q3" component={EQ3} />
    <Route exact path="/1980/Q4" component={EQ4} />
    <Route exact path="/1980/Q5" component={EQ5} />
    <Route exact path="/1980/Q6" component={EQ6} />
    <Route exact path="/1980/ERES" component={ERES} />

    <Route exact path="/1990/Q1" component={NQ1} />
    <Route exact path="/1990/Q2" component={NQ2} />
    <Route exact path="/1990/Q3" component={NQ3} />
    <Route exact path="/1990/Q4" component={NQ4} />
    <Route exact path="/1990/Q5" component={NQ5} />
    <Route exact path="/1990/Q6" component={NQ6} />
    <Route exact path="/1990/NRES" component={NRES} />

    <Route exact path="/2000/Q1" component={NUQ1} />
    <Route exact path="/2000/Q2" component={NUQ2} />
    <Route exact path="/2000/Q3" component={NUQ3} />
    <Route exact path="/2000/Q4" component={NUQ4} />
    <Route exact path="/2000/Q5" component={NUQ5} />
    <Route exact path="/2000/Q6" component={NUQ6} />
    <Route exact path="/2000/NURES" component={NURES} />
    
    <Route exact path="/2010/Q1" component={TQ1} />
    <Route exact path="/2010/Q2" component={TQ2} />
    <Route exact path="/2010/Q3" component={TQ3} />
    <Route exact path="/2010/Q4" component={TQ4} />
    <Route exact path="/2010/Q5" component={TQ5} />
    <Route exact path="/2010/Q6" component={TQ6} />
    <Route exact path="/2010/TRES" component={TRES} />


    <Route exact path="/current/Q1" component={CQ1} />
    <Route exact path="/current/Q2" component={CQ2} />
    <Route exact path="/current/Q3" component={CQ3} />
    <Route exact path="/current/Q4" component={CQ4} />
    <Route exact path="/current/Q5" component={CQ5} />
    <Route exact path="/current/Q6" component={CQ6} />
    <Route exact path="/current/CRES" component={CRES} />
  </Router>
  }
}



export default App;