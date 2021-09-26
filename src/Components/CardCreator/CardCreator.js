import React, { useState } from 'react'
import CardConfig from './ConfigForm/CardConfig';
import UnitCardBack from './UnitCard/Back/UnitCardBack';
import UnitCardFront from './UnitCard/Front/UnitCardFront';



const CardCreator = (props) => {

	const THEMES = [
		{ name: 'US', bgTheme: 'theme-us', icon: 'icon-us', bgColor: 'bg-navy-blue', textColor: 'text-white', sectionColorMain: 'bg-navy-blue', cardInner: 'bg-brown-1' },
		{ name: 'German', bgTheme: 'theme-german', icon: 'icon-german', bgColor: 'bg-dark-grey', textColor: 'text-white', sectionColorMain: 'bg-dark-grey', cardInner: 'bg-brown-1' },
		{ name: 'Soviet', bgTheme: 'theme-soviet', icon: 'icon-soviet', bgColor: 'bg-red', textColor: 'text-white', sectionColorMain: 'bg-red', cardInner: 'bg-brown-1' }
	]

	const MOTIVATION = [{ id: 1, name: "Reluctant 5+", value: "Reluctant 5+" },
	{ id: 2, name: "Confident 4+", value: "Confident 4+" },
	{ id: 3, name: "Fearless 3+", value: "Fearless 3+" }
	];
	const MOTIVATION_SECONDARY = [
		{ id: 1, name: "Remount", value: "Remount" },
		{ id: 2, name: "Last Stand", value: "Last Stand" },
		{ id: 3, name: "Remount", value: "Remount" },
		{ id: 4, name: "Counterattack", value: "Counterattack" }
	];
	const SKILL = [
		{ id: 1, name: "Conscript 5+", value: "Conscript 5+" },
		{ id: 2, name: "Trained 4+", value: "Trained 4+" },
		{ id: 3, name: "Veteran 3+", value: "Veteran 3+" }
	];
	const SKILL_SECONDARY = [
		{ id: 1, name: "Tactics", label: "Tactics" },
	];
	const HITON = [
		{ id: 1, name: "Careful 4+", value: "Careful 4+" },
		{ id: 2, name: "Aggressive 3+", value: "Aggressive 3+" },
		{ id: 3, name: "Reckless 2+", value: "Reckless 2+" },
	]
	const [cardTheme, setCardTheme] = useState(THEMES[0]);

	const updateCardBgColor = (name) => {
		// find the theme colour, set this colour as the theme
		let selectedTheme = THEMES.find(c => c.name === name);
		setCardTheme(selectedTheme);
	}
	let [cardDetails, setCardDetails] = useState({
		teamName: 'm4 sherman',
		teamClass: 'veteran tank company hq',
		stats: [
			{
				labelPrimary: "Motivation",
				statDetail: MOTIVATION.find(x => x.id === 2),
				linkedValue: []
			},

			{
				labelPrimary: "Skill",
				statDetail: SKILL.find(x => x.id === 2),
				linkedValue: []
				// linkedValue: [
				// 	{
				// 		labelPrimary: "Text in italics"
				// 		, labelSecondary: "Italics, Bold",
				// 		statDetail: { id: 1, name: "Trained +4", value: "Trained +4" },
				// 	},
				// ]
			},
			{
				labelPrimary: "Hit On",
				statDetail: HITON.find(x => x.id === 1),
				linkedValue: []
			}
		],
		movementStat: {
			"tactical": '10"/25cm',
			"terrainDash": '10"/30cm',
			"crossCountry": '10"/45cm',
			"roadDash": '10"/30cm',
			"cross": "3+"
		},
		weapons: []
	})

	const teamNameChangeHandler = (value) => {
		setCardDetails({ ...cardDetails, teamName: value });
	}
	const teamClassChangeHandler = (value) => {
		setCardDetails({ ...cardDetails, teamClass: value });
	}

	return (
		<div className="App">
			<header className="App-header">

				<UnitCardFront
					onTeamNameChange={ teamNameChangeHandler }
					onTeamClassChange={ teamClassChangeHandler }
					currentCard={ cardDetails }
					currentTheme={ cardTheme }></UnitCardFront>
				<UnitCardBack
					onTeamNameChange={ teamNameChangeHandler }
					onTeamClassChange={ teamClassChangeHandler }
					currentTheme={ cardTheme }
					currentCard={ cardDetails }></UnitCardBack>
				<CardConfig onCardBgColorChange={ updateCardBgColor }></CardConfig>
			</header>
		</div>
	);
}

export default CardCreator;