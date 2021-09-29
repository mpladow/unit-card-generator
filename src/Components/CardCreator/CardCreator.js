import React, { useState } from 'react'
import './CardCreator.scss';
import CardConfig from './ConfigForm/CardConfig';
import UnitCardBack from './UnitCard/Back/UnitCardBack';
import UnitCardFront from './UnitCard/Front/UnitCardFront';



const CardCreator = (props) => {

	// TEMP
	// DATABASE
	const THEMES = [
		{ id: 1, name: 'US', bgTheme: 'theme-us', icon: 'icon-us', bgColor: 'bg-navy-blue', textColor: 'text-white', sectionColorMain: 'bg-navy-blue', cardInner: 'bg-brown-1' },
		{ id: 2, name: 'German', bgTheme: 'theme-german', icon: 'icon-german', bgColor: 'bg-dark-grey', textColor: 'text-white', sectionColorMain: 'bg-dark-grey', cardInner: 'bg-brown-1' },
		{ id: 3, name: 'Soviet', bgTheme: 'theme-soviet', icon: 'icon-soviet', bgColor: 'bg-red', textColor: 'text-white', sectionColorMain: 'bg-red', cardInner: 'bg-brown-1' }
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
	// END TEMP

	const [cardTheme, setCardTheme] = useState(THEMES[0]);
	const [cardMotivation, setMotivation] = useState({})
	const [cardSkill, setSkill] = useState({});
	const [cardHitOn, setHitOn] = useState({});
	const [cardSecondaryMotivation, setSecondaryMotivation] = useState([]);

	let [cardDetails, setCardDetails] = useState({
		theme: cardTheme,
		teamName: 'm4 sherman',
		teamClass: 'veteran tank company hq',
		unitType: {},
		stats: [
			{
				labelPrimary: "Motivation",
				statDetail: cardMotivation,
				linkedValue:[]
					// cardSecondaryMotivation
			},

			{
				labelPrimary: "Skill",
				statDetail: cardSkill,
				linkedValue: [
					// { name: 'Tactics', value: "5+" }
				]
				// linkedValue: [
				// 	{
				// 		labelPrimary: "Text in italics"
				// 		, labelSecondary: "Italics, Bold",
				// 		statDetail: { id: 1, name: "Trained +4", value: "Trained +4" },
				// 	},
				// ]
			},
			{
				labelPrimary: "Is Hit On",
				statDetail: cardHitOn,
				linkedValue: []
			}
		],
		vehicleMovement: {
			"tactical": '10"/25cm',
			"terrain": '10"/30cm',
			"crossCountry": '10"/45cm',
			"road": '10"/30cm',
			"cross": "3+"
		},
		armour: {
			"front": '',
			"side": '',
			"top": ''
		},

		save: null,
		weapons: []
	})

	const teamNameChangeHandler = (value) => {
		setCardDetails({ ...cardDetails, teamName: value });
	}
	const teamClassChangeHandler = (value) => {
		setCardDetails({ ...cardDetails, teamClass: value });
	}
	const updateCardBgColorHandler = (value) => {
		// find the theme colour, set this colour as the theme
		setCardDetails({ ...cardDetails, theme: value })
	}

	const updateStatHandler = (result) => {
		let newStats = cardDetails.stats.map(stat => {
			if (stat.labelPrimary === result.statName) {
				return { ...stat, statDetail: result.selected };
			}
			return stat;
		})
		setCardDetails({ ...cardDetails, stats: newStats })
	}
	const updateArmourHandler = (result) => {
		setCardDetails({
			...cardDetails,
			armour: {
				"front": result.armourFront,
				"side": result.armourSide,
				"top": result.armourTop
			}
		})
	}
	const setVehicleMovement = (result) => {
		setCardDetails({
			...cardDetails,
			vehicleMovement: {
				"tactical": result.tactical,
				"terrain": result.terrain,
				"crossCountry": result.crossCountry,
				"road": result.road,
				"cross": result.cross
			}
		})
	}
	const updateMotivationSecondary = (result) => {
		// let newSecondaryMotivation = cardDetails.stats.find(x => x.labelPrimary === 'Motivation').linkedValue;
		// newSecondaryMotivation = result;

		let secondaryStat = cardSecondaryMotivation.find(x => x.id == parseInt(result.id));

		let filteredStats = [...cardSecondaryMotivation];
		if (secondaryStat != null) {

			// if the name is null, then remove this value
			if (result.name == '') {
				
				filteredStats.filter(x => {
					return x.id !== parseInt(result.id);
				})
			}
			// else update this value
			else {
				filteredStats.forEach(stat => {
					if (stat.id == parseInt(result.id)) {
						stat.name = result.name;
						stat.value = result.value;
					}
					return stat;
				})
			}
			// else delete this item
		} else {
			filteredStats.push(result);
			// add this item to the array
		}
		setSecondaryMotivation(...cardSecondaryMotivation, filteredStats);

		let newStats = cardDetails.stats.map(stat => {
			if (stat.labelPrimary == "Motivation") {
				return { ...stat, linkedValue: cardSecondaryMotivation };
			}
			return stat;
		})
		setCardDetails({ ...cardDetails, stats: newStats })
	}
	// const updateMotivationSecondary = (result) => {
	// 	// let newSecondaryMotivation = cardDetails.stats.find(x => x.labelPrimary === 'Motivation').linkedValue;
	// 	// newSecondaryMotivation = result;
	// 	let motivationStat = cardDetails.stats.find(x => x.labelPrimary === 'Motivation').linkedValue;
	// 	let secondaryStat = motivationStat.find(x => x.id === result.id);

	// 	let filteredStats = [];
	// 	if (secondaryStat != null) {

	// 		// if the name is null, then remove this value
	// 		if (result.name === '') {
	// 			filteredStats = motivationStat.filter(x => {
	// 				return x.id !== result.id;
	// 			})
	// 		}
	// 		// else update this value
	// 		else {
	// 			filteredStats = motivationStat.map(stat => {
	// 				if (stat.id === result.id) {
	// 					return { ...stat, linkedValue: result }
	// 				}
	// 				return stat;
	// 			})
	// 		}
	// 		// else delete this item
	// 	} else {
	// 		filteredStats.push(result);
	// 		// add this item to the array
	// 	}

	// 	// remove 
	// 	// update the linkedValue array.

	// }


	return (
		<div className='card-creator'>
			<div className="card-interface">

				<UnitCardFront
					onTeamNameChange={ teamNameChangeHandler }
					onTeamClassChange={ teamClassChangeHandler }
					currentCard={ cardDetails }
				></UnitCardFront>
				<UnitCardBack
					onTeamNameChange={ teamNameChangeHandler }
					onTeamClassChange={ teamClassChangeHandler }
					currentCard={ cardDetails }>

				</UnitCardBack>
			</div>
			<div className="card-form">
				<CardConfig
					onCardBgColorChange={ updateCardBgColorHandler }
					onMotivationChange={ updateStatHandler }
					onSkillChange={ updateStatHandler }
					onHitOnChange={ updateStatHandler }
					onArmourChange={ updateArmourHandler }
					onVehicleMovementChange={ setVehicleMovement }
					onMotivationSecondaryChange={ updateMotivationSecondary }
					currentCard={ cardDetails }
				></CardConfig>
			</div>
		</div>
	);
}

export default CardCreator;