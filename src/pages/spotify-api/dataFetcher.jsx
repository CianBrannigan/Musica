import React , { useState , useEffect } from 'react';
import Dropdown from './dropDownChoices';
import Listbox from './listBox';
import Detail from './details';
import { Credentials } from './Credentials';
import axios from 'axios';
import './spotify.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Container,Row,Nav,Navbar,NavDropdown} from 'react-bootstrap';


const Datafetcher = () => {

// gets credentials from the credentials file.
const spotify = Credentials();  

/* state variables that include a state and a function to change that state */
const [token, setToken] = useState('');  
const [gen, setGen] = useState({selectedGenre: '', listOfGenresFromAPI: []});
const [playlist, setPlaylist] = useState({selectedPlaylist: '', listOfPlaylistFromAPI: []});
const [tracks, setTracks] = useState({selectedTrack: '', listOfTracksFromAPI: []});
const [trackDetail, setTrackDetail] = useState(null);

//=============================================================================

 /* Used to get the token for the spotify API which needs to be retrieved exactly once during the startup of the app 
 also useEffect prevents a pseudo infinite loop from going in the application */
  useEffect(() => {
    //axios was found to be the easiest and best to use for this and allowed for the best results for this application
    axios('https://accounts.spotify.com/api/token', {
      headers: {
        'Content-Type' : 'application/x-www-form-urlencoded',
        'Authorization' : 'Basic ' + btoa(spotify.ClientId + ':' + spotify.ClientSecret)      
      },
      data: 'grant_type=client_credentials',
      method: 'POST'
    })
    .then(tokenResponse => {      
      setToken(tokenResponse.data.access_token);
        //retrieves the genres from the API 
      axios('https://api.spotify.com/v1/browse/categories?locale=sv_US', {
        method: 'GET',
        headers: { 'Authorization' : 'Bearer ' + tokenResponse.data.access_token}
      })
      .then (genreResponse => {        
        setGen({
          selectedGenre: gen.selectedGenre,
          listOfGenresFromAPI: genreResponse.data.categories.items
        })
      });
    //==========================================================================
    });

  }, [gen.selectedGenre, spotify.ClientId, spotify.ClientSecret]);

  //handles when a user changes the dropdown menu
  const genreChanged = val => {
    setGen({
      selectedGenre: val, 
      listOfGenresFromAPI: gen.listOfGenresFromAPI //reevaluates the value of whats in the list from the api
    });

    axios(`https://api.spotify.com/v1/browse/categories/${val}/playlists?limit=10`, {
      method: 'GET',
      headers: { 'Authorization' : 'Bearer ' + token}
    })
    .then(playlistResponse => {
      setPlaylist({
        selectedPlaylist: playlist.selectedPlaylist,
        listOfPlaylistFromAPI: playlistResponse.data.playlists.items
      })
    });
  }
 //handles when the user changes the playlist.
  const playlistChanged = val => {
    console.log(val);
    setPlaylist({
      selectedPlaylist: val,
      listOfPlaylistFromAPI: playlist.listOfPlaylistFromAPI
    });
  }

  //handles when the user searches for values.
  const buttonClicked = e => {
    e.preventDefault();

    axios(`https://api.spotify.com/v1/playlists/${playlist.selectedPlaylist}/tracks?limit=10`, {
      method: 'GET',
      headers: {
        'Authorization' : 'Bearer ' + token
      }
    })
    .then(tracksResponse => {
      setTracks({
        selectedTrack: tracks.selectedTrack,
        listOfTracksFromAPI: tracksResponse.data.items
      })
    });
  }

  //handles when the user clicks on a track.
  const listboxClicked = val => {
    const currentTracks = [...tracks.listOfTracksFromAPI];
    const trackInfo = currentTracks.filter(t => t.track.id === val);
    setTrackDetail(trackInfo[0].track);
  }

  
  
//component html to be rendered
  return (
    <body className='back'>
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
                <Nav.Link href="/About">About us</Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </Row>
      </Container>
  </div>
    <div>
    
      <form onSubmit={buttonClicked}>
      <div className="container">        
          <Dropdown  options={gen.listOfGenresFromAPI} selectedValue={gen.selectedGenre} changed={genreChanged} />
          <Dropdown  options={playlist.listOfPlaylistFromAPI} selectedValue={playlist.selectedPlaylist} changed={playlistChanged} />
          </div>
          <div className='button'>
            <button type='submit'>
              Search
            </button>
          </div>
          <div className="container"> 
          <div className="row">
            <Listbox items={tracks.listOfTracksFromAPI} clicked={listboxClicked} />
            {trackDetail && <Detail {...trackDetail} /> }
          </div> 
          </div>       
      </form>
      
    </div>
    </body>
    
  );
}

export default Datafetcher;