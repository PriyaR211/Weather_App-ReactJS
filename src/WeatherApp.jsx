import SearchBox from "./SearchBox"
import InfoBox from "./InfoBox"
import { useState } from "react";

function WeatherApp() {
    let [weatherInfo, setWeatherInfo] = useState(
        {
            city: "Delhi",
            temp: 21.73,
            tempMin: 21.73,
            tempMax: 22.56,
            humidity: 56,
            feelsLike: 21.42,
            weather: "haze"
        }
    )

    function updateInfo(newRes){
        console.log("Function called from child hierarchy i.e. SearchBox")
        setWeatherInfo(newRes);
        return true;
    }
    

    return (
        <div>
            <h2 style={{ textAlign: "center" }}>Weather App using React</h2>
            <SearchBox updateInfo={updateInfo}></SearchBox>
            <InfoBox info={weatherInfo}> </InfoBox>
        </div>
    );
}


export default WeatherApp;



