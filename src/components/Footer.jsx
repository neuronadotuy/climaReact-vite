const Footer = () => {

	const date = new Date().getFullYear();

	return ( 
		<div className="footer">
			<p>Nicolas Oten</p>
			<div>
				<a href="https://github.com/neuronadotuy">Github</a>
				<a href="https://www.linkedin.com/in/nicolas-oten/">Linkedin</a>
			</div>
		</div>
	 );
}
 
export default Footer;