import React, { useState, useEffect } from "react";
import axios from "axios";
import PhotoCard from "./components/PhotoCard";
import "./App.css";

function App() {
  const [data, setData] = useState(null);

  useEffect(() => {
    axios
      .get('https://api.nasa.gov/planetary/apod?api_key=ji5M4tBiBHIuzwsQZniy78ULsuBZn0Jpx7VQC8uV')
      .then(res => {
        console.log(res.data);
        setData(res.data);
      })
      .catch(err => {
        console.log(err);
      })
  }, [])
  

  return (
    <div className="App">
      <h1>Astronomy Photograph of the Day</h1>
      {data ? <PhotoCard title= { data.title }
                 date={ data.date }
                 url= { data.url }
                 explanation={ data.explanation } />
            : <h3>Loading...</h3>}
    </div>
  );
}

export default App;
