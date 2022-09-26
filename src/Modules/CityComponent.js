import styled from "styled-components";

const WeatherLogo = styled.img`
height: 140px;
width: 140px;
margin: 40px auto;
`
const ChooseCityLabel = styled.span`
color:black;
font-size:18px;
font-weight:bold;
`
const SearchBox = styled.form`
display:flex;
flex-direction:row;
color:black;
font-size:18px;
font-weight:bold;
border: black solid 1px;
border-radius: 2px;
margin: 20px auto;
  & input{ 
    padding: 10px;
    border: none;
    font-size:14px;
    border-radius: 5px;
    outline: none;
}
& button{
    padding: 10px;
    color:white;
    background-color: black;
    border: none;
    font-size:14px;
    border-radius: 5px;
    outline: none;
}
`

const CityComponent = (props) =>{
    const {updateCity, fetchWeather} = props
    return (
        <>
        <WeatherLogo src="/icons/perfect-day.svg"/>
        <ChooseCityLabel>Find weather of your city</ChooseCityLabel>
        <SearchBox onSubmit={fetchWeather}>
            <input placeholder="city" 
            onChange={(e)=> updateCity(e.target.value)}  />
        <button type = "submit">Search</button>
        </SearchBox>
        </>
    );
};

export default CityComponent ;