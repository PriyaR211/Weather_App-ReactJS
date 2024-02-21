
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

import "./SearchBox.css"
import { useState } from 'react';

function SearchBox() {
    // const Api_Url = "https://api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}";
    const Api_Url = "https://api.openweathermap.org/data/2.5/weather";
    const Api_Key = "6aad3b3edf178249e9693ce4407c1fee";

    async function getWeatherInfo(){
        let response = await fetch(`${Api_Url}?q=${city}&appid=${Api_Key}&units=metric`);
        let jsonResponse = await response.json(); 
        console.log(jsonResponse);
        let result = {
            temp : jsonResponse.main.temp,
            tempMin : jsonResponse.main.temp_min,
            tempMax : jsonResponse.main.temp_max,
            humidity : jsonResponse.main.humidity,
            feelsLike : jsonResponse.main.feels_like,
            weather : jsonResponse.weather[0].description
        }
        console.log(result);
    }

    let [city, setCity] = useState("");

    function handleChange(event){
        setCity(event.target.value);
    }
   
    function handleSubmit(event){
        event.preventDefault();
        console.log(city);
        getWeatherInfo();
        setCity("");
    }

    return (
        <div className='SearchBox'>
            <form action="" onSubmit={handleSubmit}>
            <h1>Weather of city</h1>
            <TextField id="city" label="City Name" variant="outlined" value={city} onChange={handleChange} required/>
            <br /> <br />
            <Button variant="contained" type='submit'> Search </Button>
            </form>
        </div>
    );
}


export default SearchBox;
















