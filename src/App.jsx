import Card from './components/card/Card';
import Cards from './components/cards/Cards';
import { COLORS } from './styles/colors';
import { GlobalStyles } from './styles/GlobalStyles';

const App = () => {
	return (
		<div>
			<GlobalStyles />
			<h1>Curso de React</h1>
			<Cards>
				<Card
					icon='/assets/images/icon-sedans.svg'
					title='SEDANS'
					text='Choose a sedan for its affordability and excellent fuel economy. Ideal for cruising in the city or on your next road trip.'
					color={COLORS.orange}
					position='first'
				/>
				<Card
					icon='/assets/images/icon-suvs.svg'
					title='SUVS'
					text='Take an SUV for its spacious interior, power, and versatility. Perfect for your next family vacation and off-road adventures.'
					color={COLORS.blue}
				/>
				<Card
					icon='/assets/images/icon-luxury.svg'
					title='LUXURY'
					text='Cruise in the best car brands without the bloated prices. Enjoy the enhanced comfort of a luxury rental and arrive in style. '
					color={COLORS.green}
					position='last'
				/>
			</Cards>
		</div>
	);
};

export default App;
