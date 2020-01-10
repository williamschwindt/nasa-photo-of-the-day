import React, { useEffect, useState } from "react";
import "./App.css";
import axios from 'axios';
import Photo from './components/Photo';
import styled from 'styled-components';

const P = styled.p`
  font-size: 1.2rem;
  margin-top: 20px;
`;

const Input = styled.input`
  text-align: center;
  border-radius: 10px;
  border: 1px solid black;
`;

function App() {
  var today = new Date();
  var dd = String(today.getDate()).padStart(2, '0');
  var mm = String(today.getMonth() + 1).padStart(2, '0'); 
  var yyyy = today.getFullYear();

  today = yyyy.toString() + '-' + mm.toString() + '-' + dd.toString();

  const [photo, setPhoto] = useState([]);

  const [day, setDay] = useState(today);
  console.log(day);

  useEffect(() => {
    axios
      .get(`https://api.nasa.gov/planetary/apod?api_key=5OEsUVedFGlY1ldUSWVhkLq3hXv1rda1APz6bfRT`)
      .then((res) => {
        console.log(res);
        setPhoto(res.data);
      })

      .catch((err) => {
        console.log(err);
      })
  }, []);

  console.log(photo);
  
  const onChangeHandler = e => {
    e.preventDefault();
    setDay(e.target.value);
    e.persist();
  }

  function getDay(e) {
    let date = day;
    e.preventDefault();
    
    axios.get(`https://api.nasa.gov/planetary/apod?api_key=5OEsUVedFGlY1ldUSWVhkLq3hXv1rda1APz6bfRT&date=${date}`)
      .then((res) => {
        setPhoto(res.data);
      })

      .catch((err) => {
        console.log(err);
      })
  }

  return (
    <div className="App">
      <P>Choose the day!</P>
      <form>
        <Input onChange={(e) => onChangeHandler(e)}  value={day} className="input-date" type="text" placeholder={"yyyy-mm-dd"}></Input>
        <button onClick={(e) => getDay(e)} type="submit">Submit</button>
      </form>
      <Photo title={photo.title} scr={photo.url} description={photo.explanation} date={photo.date}/>
    </div>
  );
}

export default App;
