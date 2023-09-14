import './App.scss';
import Navbar from './components/Navbar';
import Top from './components/Top';
import Bottom from './components/Bottom';

function App() {
	return (
		<div className='App'>
			<Navbar />
			<Top />
			<Bottom />
			<div className="attribution">
				<span>Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">Frontend Mentor</a>. </span>
				<span>Coded by <a href="https://www.nicoleyry.com/">Nicole Yang</a>.</span>
			</div>
		</div>
	);
}

export default App;
