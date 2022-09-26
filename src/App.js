import React, { useState } from 'react';
import './App.css';
import axios from 'axios';

import Styled from "styled-components"
import CityComponent from './Modules/CityComponent';
import WeatherComponent from './Modules/WeatherInfoComponent';



const Container = Styled.div `
display:flex;
flex-direction:column;
margin:auto;
align-items:center;
box-shadow: 0 3px 6px 0 #555;
padding:20px 10px;
border-radius: 4px;
width:380px;
background:white;
font-family: Montserrat;
`;
const AppLabel = Styled.span `
display:flex;
flex-direction:column;
font-size: 18px;
font-weight:bold;
color: black;
`;



function App(){
  const [city, updateCity] = useState();
  const [weather, updateWeather] = useState();
  const fetchWeather = async (e)=>{
    e.preventDefault();
    const response = 
    await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=4c87dc58a9edd41b6f06d9a77b57b7be`);
    updateWeather(response.data);
    console.log(response)
  }
  return (
     <Container>
      <AppLabel>ΣM Weather App</AppLabel>

       {weather? 
       (<WeatherComponent weather={weather}/>)
       :(<CityComponent updateCity = {updateCity} fetchWeather = {fetchWeather} />)}
    </Container>
  );
}
export default App;
