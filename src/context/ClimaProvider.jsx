import { useState, createContext } from 'react';
import axios from 'axios';

const ClimaContext = createContext();

const ClimaProvider = ({ children }) => {

	const [busqueda, setBusqueda] = useState({
		ciudad: '',
	});

	const [result, setResult] = useState({});
	const [loading, setLoading] = useState(false);

	const datosBusqueda = (e) => {
		setBusqueda({
			...busqueda,
			[e.target.name] : e.target.value,
		})
	};

	const consultarClima = async (datos) => {
		try {
			// reset result and include a loading spinner
			setResult({});
			setLoading(true);

			// api calls
			const appId = import.meta.env.VITE_API_KEY;
			const url = `http://api.openweathermap.org/geo/1.0/direct?q=${datos.ciudad}&appid=${appId}`;
			const getLonLat = await axios(url);
			const { lon, lat } = getLonLat.data[0];

			const urlClima = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${appId}`;
			const res = await axios(urlClima);
			setResult(res.data);

			// remove the spinner
			setLoading(false);
		} catch (error) {
			console.log(error);
		}
	};

	return ( 
		<ClimaContext.Provider
			value={{
				busqueda,
				datosBusqueda,
				consultarClima,
				result,
				loading,
			}}
		>
			{children}
		</ClimaContext.Provider>
	 );
}

export {
	ClimaProvider
}
 
export default ClimaContext;