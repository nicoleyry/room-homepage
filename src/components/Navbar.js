import '../styles/navbar.scss';
import Logo from '../assets/images/logo.svg';
import MenuOpen from '../assets/images/icon-hamburger.svg';
import MenuClose from '../assets/images/icon-close.svg';
import { useState } from 'react';

export default function Navbar() {
	const [isOpened, setIsOpened] = useState(false);

	let menuHandler = () => {
		setIsOpened(!isOpened);
	}

	return (
		<div className="Navbar">
			<div className="nav-container">
				<img className='burger-menu' onClick={menuHandler} src={MenuOpen} alt="" />
				<img className='logo' src={Logo} alt="logo" />
				<div className="nav-menu">
					<p className="menu">home</p>
					<p className="menu">shop</p>
					<p className="menu">about</p>
					<p className="menu">contact</p>
				</div>
			</div>
			<div className={`menu-cover ${isOpened ? 'show' : ''}`} onClick={menuHandler}>
				<div className='menu-container'>
					<img className='burger-menu' onClick={menuHandler} src={MenuClose} alt="" />
					<div className="menu-block">
						<p className="menu">home</p>
						<p className="menu">shop</p>
						<p className="menu">about</p>
						<p className="menu">contact</p>
					</div>
				</div>
			</div>
		</div>
	)
};