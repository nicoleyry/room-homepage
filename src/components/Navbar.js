import '../styles/navbar.scss';
import Logo from '../assets/images/logo.svg';

export default function Navbar() {
	return (
		<div className="Navbar">
			<div className="nav-container">
				<img className='logo' src={Logo} alt="logo" />
				<div className="nav-menu">
					<p className="menu">home</p>
					<p className="menu">shop</p>
					<p className="menu">about</p>
					<p className="menu">contact</p>
				</div>
			</div>
		</div>
	)
};