import Card from './components/card/Card';
import Cards from './components/cards/Cards';
import { CARDS_INFO } from './constants/cards-info';
import { GlobalStyles } from './styles/GlobalStyles';

const App = () => {
	return (
		<div>
			<GlobalStyles />
			<h1>Curso de React</h1>
			<Cards>
				{CARDS_INFO.map(card => (
					<Card key={card.id} {...card} />
				))}
			</Cards>
		</div>
	);
};

export default App;
