import React, { useState } from "react";
import axios from "axios";
import PhotoCard from "./components/PhotoCard";
import "./App.css";

function App() {
  const [title, setTitle] = useState('');
  const [date, setDate] = useState('');
  const [url, setUrl] = useState('');
  const [explanation, setExplanation] = useState('');

  axios
    .get('https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY')
    .then(res => {
      setTitle(res.data.title);
      setDate(res.data.date);
      setUrl(res.data.url);
      setExplanation(res.data.explanation);
    })
    .catch(err => {
      console.log(err);
    })

  return (
    <div className="App">
      <h1>Astronomy Photograph of the Day</h1>

      <PhotoCard title= { title }
                 date={ date }
                 url= { url }
                 explanation={ explanation } />
    </div>
  );
}

export default App;
