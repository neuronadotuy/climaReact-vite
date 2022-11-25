import { useState } from 'react';
import { MapPinIcon } from '@heroicons/react/24/solid';
import { MagnifyingGlassIcon } from '@heroicons/react/24/outline';
import useClima from '../hooks/useClima';

const Formulario = () => {

	const [alerta, setAlerta] = useState('');

	const { busqueda, datosBusqueda, consultarClima } = useClima();
	const { ciudad } = busqueda;

	const handleSubmit = (e) => {
		e.preventDefault();
		if (Object.values(busqueda).includes('')) {
			setAlerta('Todos los campos son obligatorios')
			return;
		}

		consultarClima(busqueda);
	};

	return ( 
		<div className="search_container">
			{alerta && (<p>{alerta}</p>)}
			<form className="search_form" onSubmit={handleSubmit}>
				<div className="input_container">
					<label htmlFor="ciudad">{<MapPinIcon />}</label>
					<input 
						type="text" 
						name="ciudad" 
						id="ciudad"
						placeholder='City name'
						onChange={datosBusqueda}
						value={ciudad}
					/>
				</div>
				<button type="submit" className="search_button">{<MagnifyingGlassIcon />}</button>
			</form>
		</div>
	 );
}
 
export default Formulario;