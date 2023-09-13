import '../styles/top.scss';
import ControllerLeft from '../assets/images/icon-angle-left.svg';
import ControllerRight from '../assets/images/icon-angle-right.svg';

export default function Top() {
	return (
		<div className='Top'>
			<div className='img-container'></div>
			<div className='content-container'>
				<h1 className='title'>Discover innovative ways to decorate</h1>
				<p className='content'>
					We provide unmatched quality, comfort, and style for property owners across the country. Our experts
					combine form and function in bringing your vision to life. Create a room in your own style with our
					collection and make your property a reflection of you and what you love.
				</p>
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
					<div className='controller controller-left'>
						<img src={ControllerLeft} alt='left' />
					</div>
					<div className='controller controller-right'>
						<img src={ControllerRight} alt='right' />
					</div>
				</div>
			</div>
		</div>
	);
}
