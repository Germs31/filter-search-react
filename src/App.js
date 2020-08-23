import React from 'react';
import {useState, useEffect} from 'react'
import './App.css';
import axios from 'axios';

function App() {
  const [countries, setCountries] = useState([])

  useEffect(() => {
    axios.get(`https://restcountries.eu/rest/v2/all`)
      .then(res => {
        setCountries(res.data)
      })
      .catch(err => {
        console.log(err)
      })
  }, [])
  return (
    <div className="App">
      <h1>Filter Countries</h1>
    </div>
  );
}

export default App;
