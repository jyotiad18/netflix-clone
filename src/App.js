import React from 'react';
import './App.css';
import Row from './Row';
import requests from './requests';
import Banner from "./Banner";
import Nav from './Nav';

function App() {
  return (
    <div className="app">  
      <Nav />
      <Banner />
      <Row
        title="NETFLIX ORIGINALS"
        fetchUrl={requests.fetchNetflixOriginals}
        isLargeRow={true}
      />
      <Row title="Trending Now" fetchUrl={requests.fetchTreding} />
      <Row title="Action Movie" fetchUrl={requests.fetchTreding} /> 
    </div>
  );
}

export default App;