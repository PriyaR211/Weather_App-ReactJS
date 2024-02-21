import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

import "./SearchBox.css"
import { useState } from 'react';

function SearchBox({updateInfo}) {

    let[err, setErr] = useState(false);

    const Api_Url = "https://api.openweathermap.org/data/2.5/weather";
    const Api_Key = "6aad3b3edf178249e9693ce4407c1fee";

    async function getWeatherInfo(){
        try{ 
        let response = await fetch(`${Api_Url}?q=${city}&appid=${Api_Key}&units=metric`);
        let jsonResponse = await response.json(); 
        console.log(jsonResponse);
        let result = {
            city : city,
            temp : jsonResponse.main.temp,
            tempMin : jsonResponse.main.temp_min,
            tempMax : jsonResponse.main.temp_max,
            humidity : jsonResponse.main.humidity,
            feelsLike : jsonResponse.main.feels_like,
            weather : jsonResponse.weather[0].description
        }
        
        // call to WathetherAPP Function
        updateInfo(result);
        // if not error, setting err to false
        if(updateInfo(result)){
            console.log("inside tuning err function:");
            setErr(false);
        }
        
    }catch(err){
        console.log("No Such Place exists");
        setErr(true);   
    }
}

    let [city, setCity] = useState("");

    function handleChange(event){
        setCity(event.target.value);
    }
   
    function handleSubmit(event){
        try{
        event.preventDefault();
        console.log(city);
        getWeatherInfo();
        setCity("");

        }catch(er){
            setErr(true);
        }
    }

    return (
        <div className='SearchBox'>
            <form action="" onSubmit={handleSubmit}>
            <TextField id="city" label="City Name" variant="outlined" value={city} onChange={handleChange} required/>
            <br /> <br />
            <Button variant="contained" type='submit'> Search </Button>
            <h2 style={{color:"red"}}>{err && "No Such Place Found!"}</h2>
            </form>
        </div>
    );
}


export default SearchBox;

