import useClima from '../hooks/useClima';
import { MapPinIcon, CloudIcon } from '@heroicons/react/24/outline';

const Resultado = () => {

	const { result } = useClima();

	const { name, sys:{ country }, main:{ temp, feels_like, temp_min, temp_max, humidity}, weather} = result

	let getWeather = weather[0].main;
	let printWeatherBackground;

	switch (getWeather) {
		case 'Clouds':
			printWeatherBackground = 'linear-gradient(0deg, rgba(93,161,255,1) 0%, rgba(0,193,255,1) 100%)'
			break;
		
			case 'Clear':
			printWeatherBackground = 'linear-gradient(0deg, rgba(255,176,93,1) 0%, #ffae00 100%)'
			break;
	
		default:
			printWeatherBackground = 'linear-gradient(0deg, rgba(93,161,255,1) 0%, rgba(0,193,255,1) 100%)'
			break;
	}

	return ( 
		<div className="result_container" style={{background: printWeatherBackground}}>
			<div className="result_location" >
			<MapPinIcon />
			<h2>{name}, {country}</h2>
			</div>
			<img src={`http://openweathermap.org/img/wn/${weather[0].icon}@2x.png`} alt="" />
			{/* Kelvin to Celcius */}
			<p className="result_temp">{(temp - 273.15).toFixed(0)}<span>°C</span></p>
			<div className="result_temp_max_min">
				<div className="result_temp_min">
					<p>Min</p>
					<p className="temp">{(temp_min - 273.15).toFixed(0)}<span>°C</span></p>
				</div>
				<div className="result_temp_max">
					<p>Max</p>
					<p className="temp">{(temp_max - 273.15).toFixed(0)}<span>°C</span></p>
				</div>
			</div>
		</div>
	 );
}
 
export default Resultado;