import Lottie from 'lottie-react';  
import sunnyAnimation from '../assets/animations/sunny.json';
import cloudyAnimation from '../assets/animations/clouds.json';
import rainyAnimation from '../assets/animations/rainy.json';
import snowyAnimation from '../assets/animations/snowy.json';  
import '../App.css';

function WeatherDisplay({data}){
    const {name, main, weather} = data;
    const animations = {
        Clear: sunnyAnimation,
        Clouds: cloudyAnimation,
        Rain: rainyAnimation,
        Snow: snowyAnimation,
    };
    
    return (
        <div>
            <h2>{name}</h2>
            <p>Temperatura: {main.temp} °C</p>
            <p>{weather[0].description}</p>
            <Lottie animationData={animations[weather[0].main]} loop={true} style={{ width: 150, height: 150 }} /> 
        </div>
    );
}

export default WeatherDisplay;