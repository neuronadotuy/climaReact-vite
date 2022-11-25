import useClima from '../hooks/useClima';
import { MapPinIcon, CloudIcon } from '@heroicons/react/24/outline';
import Cloud from '../../public/img/cloudy.svg'
import Sunny from '../../public/img/sunny.svg'

const Resultado = () => {

	const { result } = useClima();
	console.log(result);

	const { name, sys:{ country }, main:{ temp, feels_like, temp_min, temp_max, humidity}, weather} = result

	let getWeather = weather[0].main;
	let printWeather;
	let printWeatherBackground
	
	switch (getWeather) {
		case 'Clouds':
			printWeather = Cloud
			break;
		
			case 'Clear':
			printWeather = Sunny
			break;
	
			// case 'Rain':
			// printWeather = <CloudIcon />
			// break;
	
			
		default:
			break;
	}

	switch (getWeather) {
		case 'Clouds':
			printWeatherBackground = '#74b2e5'
			break;
		
			case 'Clear':
			printWeatherBackground = '#ffd277'
			break;
	
		default:
			break;
	}

	return ( 
		<div className="result_container" style={{backgroundColor: printWeatherBackground}}>
			<div className="result_location" >
			<MapPinIcon />
			<h2>{name}, {country}</h2>
			</div>
			<img src={printWeather} alt="" />
			<p className="result_weather">{getWeather}</p>
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