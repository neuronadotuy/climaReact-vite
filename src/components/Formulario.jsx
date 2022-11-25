import { useState } from 'react';
import { MapPinIcon } from '@heroicons/react/24/solid';
import { MagnifyingGlassIcon } from '@heroicons/react/24/outline';
import useClima from '../hooks/useClima';

const Formulario = () => {

	const [error, setError] = useState(false);

	const { busqueda, datosBusqueda, consultarClima } = useClima();
	const { ciudad } = busqueda;

	const handleSubmit = (e) => {
		e.preventDefault();
		if (Object.values(busqueda).includes('') || busqueda.ciudad.trim() === '') {
			setError(true);
			return;
		}
		setError(false);
		consultarClima(busqueda);
	};

	return ( 
		<div className="search_container">
			<form className="search_form" onSubmit={handleSubmit}>
				<div className="input_container">
					<label htmlFor="ciudad">{<MapPinIcon />}</label>
					<input 
						type="text" 
						name="ciudad" 
						id="ciudad"
						onChange={datosBusqueda}
						value={ciudad}
						className={error ? "error" : null}
					/>
					{error && <p className="errorMessage">Enter a valid City to continue</p>}
				</div>
				<button type="submit" className="search_button">{<MagnifyingGlassIcon />}</button>
			</form>
		</div>
	 );
}
 
export default Formulario;