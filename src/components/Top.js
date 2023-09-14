import '../styles/top.scss';
import ControllerLeft from '../assets/images/icon-angle-left.svg';
import ControllerRight from '../assets/images/icon-angle-right.svg';
import { useState, useEffect } from 'react';
import { slidesData } from '../slidesData';

export default function Top() {
	const [slide, setSlide] = useState(1);
	const mediaQuery = window.matchMedia('(max-width: 500px)');
	const [smallScreen, setSmallScreen] = useState(false);

	useEffect(() => {
		mediaQuery.matches ? setSmallScreen(true) : setSmallScreen(false);
	}, [mediaQuery.matches]);

	let prev = () => {
		slide === 1 ? setSlide(slidesData.length) : setSlide(n => n - 1);
	};

	let next = () => {
		slide === slidesData.length ? setSlide(1) : setSlide(n => n + 1);
	};
	
	return (
		<div className='Top'>
			<div className={`img-container slide-${slide}`} style={{backgroundImage: `url('${smallScreen ?slidesData[slide-1]['imageMobile'] : slidesData[slide-1]['image']}')`}}></div>
			<div className='content-container'>
				<div className="content-slide">
					<h1 className='title'>{slidesData[slide-1]['title']}</h1>
					<p className='content'>{slidesData[slide-1]['content']}</p>
				</div>
				<div className='shop-now'>
					<p className='shop-now-text'>Shop Now</p>
					<svg className='shop-now-arrow' width='40' height='12' xmlns='http://www.w3.org/2000/svg'>
						<path
							d='M34.05 0l5.481 5.527h.008v.008L40 6l-.461.465v.063l-.062-.001L34.049 12l-.662-.668 4.765-4.805H0v-1h38.206l-4.82-4.86L34.05 0z'
							fill='#000'
							fillRule='nonzero'
						/>
					</svg>
				</div>

				<div className='controllers-container'>
					<div className='controller controller-left' onClick={prev}>
						<img src={ControllerLeft} alt='left' />
					</div>
					<div className='controller controller-right' onClick={next}>
						<img src={ControllerRight} alt='right' />
					</div>
				</div>
			</div>
		</div>
	);
}
