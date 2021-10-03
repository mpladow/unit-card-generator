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
	];
	const RULES = [
		{
			id: 1,
			name: "Stabilizers",
			description: "+1 To Hit for Moving ROF.",
		},
		{
			id: 2,
			name: "Self-defence AA",
			description: "Weapon can fire at Aircraft with ROF 1.",
		},
		{
			id: 3,
			name: "No HE",
			description: "No HE targeting Infantry or Guns adds +1 to the score needed To Hit.",
		},
		{
			id: 4,
			name: "Smoke",
			description: "Can Shoot Smoke ammunication.",
		},
		{
			id: 5,
			name: "Assault 4+",
			description: "Team hits on 4+ in Assaults",
		},
		{
			id: 6,
			name: "Heavy Weapon",
			description: "Team cannot Charge into Contact",
		},
		{
			id: 7,
			name: "Observer",
			description: "Unit Leader can Spot for any friendly Artillery Unit.",
		},
		{
			id: 8,
			name: "Slow Firing",
			description: "+1 To Hit for Moving ROF .",
		}
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
				linkedValue: []
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
		weaponry: [{
			id: "1",
			name: "75mm turret",
			range: "12mm",
			movingRof: "2",
			haltedRof: 2,
			haltedType: null,// salvo or arty
			movingType: null,// salvo or arty
			AT: 12,
			FP: "5+",
			artillery: false,
			main: true,
			rules: [
				{
					id: 1,
					name: "Stabalizers",
					description: "Fires 2 shots at moving ROF, but hit is increased by 1",
					descriptionSecondary: "US Shermans wer equiped with stabalisers"

				},
				{
					id: 2,
					name: "No HE",
					description: "unable to fire high explosive rounds"
				}
			]
		}
		],
		rules: [// rules that appear on the card
			{
				id: 1,
				name: "Gun",
				description: "This team has a worse assault rating",
				showInFront: false
			}
		]
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
	const updateAdditionalRulesHandler = (result) => {
		let additionalRules = result.map(x => {

			let entity = RULES.find(r => parseInt(r.id) == x.value)
			return entity;
		})
		setCardDetails({
			...cardDetails,
			additionalRules: additionalRules
		})
	}
	const updateSecondaryStatHandler = (result) => {
		setCardDetails((prevState) => {
			let temp = {
				...prevState,
				stats: [...prevState.stats]
			}
			// change the values we need

			let linkedStats = prevState.stats.find(x => x.labelPrimary.toLowerCase() == result.stat).linkedValue
			let secondaryStat = linkedStats.find(x => x.id == result.value.id);
			let filteredStats = [...linkedStats];
			if (secondaryStat != null) {

				// 	// if the name is null, then remove this value
				if (result.name == '') {

					filteredStats = filteredStats.filter(x => {
						return x.id != parseInt(result.value.id);
					})
				}
				// else update this value
				else {
					filteredStats.forEach(stat => {
						if (stat.id == result.value.id) {
							stat.name = result.value.name;
							stat.value = result.value.value;
						}
						return stat;
					})
				}
				// else delete this item
			} else {
				filteredStats.push(result.value);
				// add this item to the array
			}

			temp.stats.find(x => x.labelPrimary.toLowerCase() == result.stat).linkedValue = filteredStats;
			return temp;
		});
	}
	const updateWeaponsHandler = (weaponUpdated) => {
		console.log("Updated weapon")
		// find details of rule and add to view model
		weaponUpdated.rules.forEach(r => {
			let rule = RULES.find(x => x.id == r.id);
			r.name = rule.name;
			r.description = rule.description;
		})
		setCardDetails((prevState) => {

			let temp = {
				...prevState,
				weapons: [...prevState.weaponry]
			}
			Object.assign(temp.weaponry.find(x => x.id == weaponUpdated.id), weaponUpdated);

			// temp.weaponry.find(x => x.id == weaponUpdated.id) = weaponUpdated;
			return temp;
		})
	}
	const deleteWeaponHandler = (id) => {
		let itemToDelete = cardDetails.weaponry.find(x => parseInt(x.id) == parseInt(id));
		setCardDetails((prevState) => {
			let temp = {
				...prevState,
				weaponry: prevState.weaponry.filter(x => parseInt(x.id) != parseInt(id))
			}
			return temp;
		});
	}
	const addWeaponHandler = () => {
		console.log("Adding weapon")
		let lastWeapon = cardDetails.weaponry.at(-1);
		let newWeapon = {
			id: parseInt(lastWeapon["id"]) + 1,
			name: "new Weapon",
			range: "12mm",
			movingRof: 2,
			haltedRof: 2,
			AT: 0,
			FP: 0,
			rules: []
		};
		setCardDetails((prevState) => {
			let temp = {
				...prevState,
				weaponry: [...prevState.weaponry, newWeapon]
			}
			return temp;
		})
	}


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
					onSecondaryStatChange={ updateSecondaryStatHandler }
					onWeaponUpdate={ updateWeaponsHandler }
					onWeaponDelete={ deleteWeaponHandler }
					onWeaponAdd={ addWeaponHandler }
					onAdditionalRulesChange={ updateAdditionalRulesHandler }
					currentCard={ cardDetails }
				></CardConfig>
			</div>
		</div>
	);
}

export default CardCreator;