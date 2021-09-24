import logo from './logo.svg';
import './App.css';
import Card from './UI/Card';
import UnitCard from './Components/UnitCard';
import CardConfig from './Components/CardConfig';
import { useState } from 'react';

function App() {
	const [cardBgColor, setCardBgColor] = useState('grey');

	const updateCardBgColor = (color) => {
		setCardBgColor(color);
	}
	return (
		<div className="App">
			<header className="App-header">
				<UnitCard bgColor={cardBgColor}></UnitCard>
				<UnitCard bgColor={ cardBgColor }></UnitCard>
				<CardConfig onCardBgColorChange={updateCardBgColor}></CardConfig>
			</header>
		</div>
	);
}

export default App;
