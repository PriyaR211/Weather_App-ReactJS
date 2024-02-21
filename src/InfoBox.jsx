import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
// for Material Ui Icons
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';
import AcUnitIcon from '@mui/icons-material/AcUnit';

import "./InfoBox.css";

function InfoBox({info}) {

    const image_link = "https://unsplash.com/photos/tree-covered-by-fog-Slh0Tx1MRNA";
    const rainy_img = "https://images.unsplash.com/photo-1610741083757-1ae88e1a17f7?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
    const summer_img = "https://images.unsplash.com/photo-1535921516579-270f91bf9e57?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
    const winter_img = "https://images.unsplash.com/photo-1687904581235-cf9e53bbed57?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";

    return (
        <div className={"InfoBox"}>
            <div>
            </div>
            <Card sx={{ maxWidth: 345 }} className={"cardContainer"}>
                <CardMedia
                    sx={{ height: 140 }}
                    image = {info.humidity>75 ? rainy_img : info.temp<15? winter_img : summer_img }   
                    title="green iguana"
                    
                />
               
                <CardContent className='content'>
                    <Typography gutterBottom variant="h5" component="div">
                        {info.city} {"  "}
                        {info.humidity>75 ? <ThunderstormIcon/> : info.temp<15? <AcUnitIcon/> : <WbSunnyIcon/> }                       
                        
                    </Typography>
                    <Typography variant="body2" color="text.secondary" component={"span"}>
                        <p>Temperature : {info.temp}&deg;C</p>                        
                        <p> Humidity : {info.humidity}</p>
                        <p>Min Temp : {info.tempMin}&deg;C</p>                        
                        <p>Max Temp : {info.tempMax}&deg;C</p>                        
                       <p>The weather is <i>{info.weather} and feels like {info.feelsLike}&deg;C</i></p>

                    </Typography>
                </CardContent>
                
            </Card>
        </div>
    );

}

export default InfoBox;



