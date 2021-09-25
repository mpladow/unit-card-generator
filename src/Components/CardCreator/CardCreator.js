import React, { useState } from 'react'
import CardConfig from './ConfigForm/CardConfig';
import UnitCard from './UnitCard/UnitCard';


const CardCreator = (props) => {

	const THEMES = [
		{ name: 'US', bgColor: 'bg-blue', textColor: 'text-white', sectionColorMain: 'bg-navy-blue', cardInner: 'bg-brown-1' },
		{ name: 'German', bgColor: 'bg-grey', textColor: 'text-black', sectionColorMain: 'bg-dark-grey', cardInner: 'bg-brown-1' },
		{ name: 'Soviet', bgColor: 'bg-red', textColor: 'text-white', sectionColorMain: 'bg-red', cardInner: 'bg-brown-1' }
	]
	const [cardTheme, setCardTheme] = useState(THEMES[0]);

	const updateCardBgColor = (name) => {
		// find the theme colour, set this colour as the theme
		let selectedTheme = THEMES.find(c => c.name === name);
		setCardTheme(selectedTheme);
	}
	let [cardDetails, setCardDetails] = useState({
		teamName: '',
		teamClassification: ''
	})

	const teamNameChangeHandler = (value) => {
		setCardDetails({ ...cardDetails, teamName: value });
		console.log(`changed to ${cardDetails.teamName} `)
	}

	return (
		<div className="App">
			<header className="App-header">
				<UnitCard onTeamNameChange={ teamNameChangeHandler } currentCard={cardDetails} currentTheme={ cardTheme }></UnitCard>
				<UnitCard currentTheme={ cardTheme } currentCard={ cardDetails }></UnitCard>
				<CardConfig onCardBgColorChange={ updateCardBgColor }></CardConfig>
			</header>
		</div>
	);
}

export default CardCreator;