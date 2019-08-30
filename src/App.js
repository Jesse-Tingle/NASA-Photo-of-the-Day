import React, { useState, useEffect } from "react";
import axios from "axios";
import PhotoCard from "./components/PhotoCard";
import "./App.css";
import logo from "./img/NASA_logo.png";

function App() {
  const [data, setData] = useState(null);
  const [date, setDate] = useState('');

  useEffect(() => {
    axios
      .get(`https://api.nasa.gov/planetary/apod?api_key=SJB7md1atBzrpivCLAZF5FnSGnqqb4gaQyQ9RwbN&date=${date}`)
      .then(res => {
        console.log(res.data);
        setData(res.data);
      })
      .catch(err => {
        console.log(err);
      })
  }, [date])
  

  return (
    <div className="App">
      <header>
        <img className="logo-img" src={ logo } alt="NASA logo"/>
        <h1>Astronomy Photograph of the Day</h1>
      </header>
      <input onChange={(event) => setDate(event.target.value)} type={"date"} />
      {data ? <PhotoCard title= { data.title }
                 date={ data.date }
                 url= { data.url }
                 explanation={ data.explanation }
                 type= {data.media_type} />
            : <h3>Loading...</h3>}
    </div>
  );
}

export default App;
