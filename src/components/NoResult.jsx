import { XCircleIcon } from '@heroicons/react/24/outline';


const NoResult = () => {
	return ( 
		<div className="no_result_container">
			<XCircleIcon />
			<p>A city with that name could not be found.</p>
		</div>
	 );
}
 
export default NoResult;