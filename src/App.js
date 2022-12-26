import './App.css';
import './index.css';
import Axios from 'axios';
import React, { useEffect, useState } from 'react';

function App() {

const [data, setData] = useState([]);

const fetchData = (excuse) => {
  Axios.get(`https://excuser-three.vercel.app/v1/excuse/${excuse}`)
  .then((response) => {
    setData(response.data[0].excuse);
  }) }



  return (
    <div className="App">
      <h1> Generate An Excuse </h1>
      <button class="glow-on-hover" onClick={() => fetchData("party")}>Party</button>
      <button class="glow-on-hover" onClick={() => fetchData("family")}>Family</button>
      <button class="glow-on-hover" onClick={() => fetchData("office")}>Office</button>
      <button class="glow-on-hover" onClick={() => fetchData("college")}>College</button>
      <button class="glow-on-hover" onClick={() => fetchData("funny")}>Funny</button>


      <h2>{data}</h2>


    </div>

    



  );
}

export default App;
